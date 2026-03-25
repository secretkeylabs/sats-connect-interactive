import { mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const indexFile = path.join(rootDir, "src", "index.tsx");
const pagesDir = path.join(rootDir, "src", "pages");
const outputDir = path.join(rootDir, "src", "generated");
const outputFile = path.join(outputDir, "search-documents.ts");

const sectionLabels = {
  bitcoin: "Bitcoin Methods",
  stacks: "Stacks Methods",
  spark: "Spark Methods",
  wallet: "Wallet Methods",
  Introduction: "Getting Started",
  WalletProviders: "Getting Started",
  Connect: "Connecting",
  Disconnect: "Connecting",
};

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const fullPath = path.join(directory, entry.name);
      if (entry.isDirectory()) {
        return walk(fullPath);
      }

      return entry.name.endsWith(".mdx") ? [fullPath] : [];
    }),
  );

  return files.flat();
}

function cleanInline(text) {
  return text
    .replace(/<code>(.*?)<\/code>/g, "$1")
    .replace(/<[^>]+>/g, " ")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/[*~]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function toExcerpt(text) {
  if (text.length <= 180) {
    return text;
  }

  return `${text.slice(0, 177).trimEnd()}...`;
}

function stripMdx(content) {
  return content
    .replace(/^import\s.+$/gm, " ")
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/^#{1,6}\s+/gm, "")
    .replace(/[{}\[\]]/g, " ")
    .replace(/[*~|]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function extractRouteMap(source) {
  const componentToFile = new Map();
  const routeByFile = new Map();

  for (const match of source.matchAll(
    /const\s+(\w+)\s*=\s*lazy\(\s*\(\)\s*=>\s*import\(\s*"([^"]+\.mdx)"\s*\)\s*,?\s*\)\s*;?/gs,
  )) {
    const [, componentName, importPath] = match;
    const resolvedPath = path.normalize(
      path.resolve(path.dirname(indexFile), importPath),
    );
    componentToFile.set(componentName, resolvedPath);
  }

  for (const match of source.matchAll(
    /<Route\s+path="([^"]+)"\s+component=\{(\w+)\}\s*\/>/gs,
  )) {
    const [, routePath, componentName] = match;
    const resolvedFile = componentToFile.get(componentName);

    if (resolvedFile) {
      routeByFile.set(resolvedFile, routePath);
    }
  }

  return routeByFile;
}

function inferSection(filePath) {
  const relativePath = path.relative(pagesDir, filePath);
  const [firstSegment] = relativePath.split(path.sep);
  return (
    sectionLabels[firstSegment] ||
    sectionLabels[path.basename(filePath, ".mdx")] ||
    "Documentation"
  );
}

async function main() {
  const indexSource = await readFile(indexFile, "utf8");
  const routeByFile = extractRouteMap(indexSource);
  const pageFiles = (await walk(pagesDir)).sort();

  const documents = await Promise.all(
    pageFiles.map(async (filePath) => {
      const content = await readFile(filePath, "utf8");
      const headingMatches = [...content.matchAll(/^#{1,6}\s+(.+)$/gm)].map(
        (match) => cleanInline(match[1]),
      );
      const title =
        headingMatches[0] || cleanInline(path.basename(filePath, ".mdx"));
      const headings = headingMatches.slice(1);
      const body = stripMdx(content);
      const excerpt = toExcerpt(body.replace(title, "").trim() || body);
      const routePath = routeByFile.get(path.normalize(filePath));

      if (!routePath) {
        throw new Error(
          `No route found for ${path.relative(rootDir, filePath)}`,
        );
      }

      return {
        id: path
          .relative(pagesDir, filePath)
          .replace(/\\/g, "/")
          .replace(/\.mdx$/, ""),
        title,
        path: routePath,
        section: inferSection(filePath),
        headings,
        excerpt,
        body,
      };
    }),
  );

  const output = `export type SearchDocument = {\n  id: string;\n  title: string;\n  path: string;\n  section: string;\n  headings: string[];\n  excerpt: string;\n  body: string;\n};\n\nexport const searchDocuments: SearchDocument[] = ${JSON.stringify(documents, null, 2)};\n`;

  await mkdir(outputDir, { recursive: true });
  await writeFile(outputFile, output);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
