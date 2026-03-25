# Sats Connect Interactive — Project Guide

Interactive documentation site for the [sats-connect](https://github.com/secretkeylabs/sats-connect) SDK. Built with Solid.js, MDX, and Vanilla Extract.

## Project structure

```
src/
├── index.tsx                    # Router setup with lazy imports
├── components/
│   ├── Layout/                  # Sidebar navigation + page shell
│   ├── CodeBlock/               # Shiki syntax-highlighted code viewer
│   ├── InteractiveExample/      # Wrapper for live example demos
│   ├── Mdx/                     # Semantic MDX components (H1, P, ParamTable…)
│   ├── Spinner/                 # Loading indicator
│   └── CustomLink/              # Internal/external link handler
├── pages/
│   ├── *.mdx                    # Top-level pages (Introduction, Connect…)
│   ├── bitcoin/                 # Bitcoin method pages
│   ├── stacks/                  # Stacks method pages
│   ├── spark/                   # Spark method pages
│   ├── wallet/                  # Wallet method pages
│   └── examples/
│       ├── *Example.tsx         # Interactive example components
│       └── snippets/*.ts        # Code snippet files
└── styles/
    ├── theme.css.ts             # Vanilla Extract theme contract + values
    └── global.css.ts            # Global styles
```

## Links

Use Markdown's link syntax for all links:

```
[link text](https://example.com/)
```

External links get `target="_blank"` and `rel="noreferrer"` automatically via `CustomLink`.

## Code blocks

Code shown in `<CodeBlock>` components lives in standalone `.ts` files under `src/pages/examples/snippets/`. Each file is imported as a raw string via Vite's `?raw` suffix:

```tsx
import CODE from "./snippets/connect.ts?raw";

<CodeBlock code={CODE} lang="typescript" title="Connect" />;
```

This keeps the snippets formattable by Prettier and other tools. When adding or updating a code example:

1. Create or edit the snippet file in `src/pages/examples/snippets/`.
2. Import it with the `?raw` suffix wherever the `<CodeBlock>` is used.
3. Never inline code strings in template literals. Always use a snippet file.

## Adding a new method page

Every method requires three files plus updates to two existing files:

### 1. Snippet file (`src/pages/examples/snippets/<method>.ts`)

Standalone TypeScript showing a minimal usage example. Not JSX — plain TS with `console.log` output:

```ts
import { request } from "sats-connect";

const response = await request("getInfo", null);

if (response.status === "success") {
  console.log("Version:", response.result.version);
} else {
  console.error("Error:", response.error);
}
```

### 2. Example component (`src/pages/examples/<Method>Example.tsx`)

Interactive Solid.js component. Always follows this structure:

```tsx
import { createSignal, type Component, Show } from "solid-js";
import { InteractiveExample } from "../../components/InteractiveExample/InteractiveExample";
import * as s from "../../components/InteractiveExample/InteractiveExample.css";
import { Spinner } from "../../components/Spinner/Spinner";
import CODE from "./snippets/<method>.ts?raw";

export const <Method>Example: Component = () => {
  // --- Signals ---
  const [result, setResult] = createSignal<string | null>(null);
  const [error, setError] = createSignal<string | null>(null);
  const [loading, setLoading] = createSignal(false);
  // Add input signals for methods that take parameters

  // --- Handler ---
  const handleCall = async () => {
    setResult(null);
    setError(null);
    setLoading(true);
    try {
      const { request } = await import("sats-connect");
      const response = await request("<methodName>", params);
      if (response.status === "success") {
        setResult(JSON.stringify(response.result, null, 2));
      } else {
        setError(JSON.stringify(response.error, null, 2));
      }
    } catch (err) {
      setError(
        `Wallet not available. Install a compatible wallet extension to try this example.\n\n${err}`,
      );
    } finally {
      setLoading(false);
    }
  };

  // --- UI ---
  return (
    <InteractiveExample method="<methodName>" title="<Title>" code={CODE}>
      {/* Optional input fields */}
      <div class={s.fieldGroup}>
        <label class={s.fieldLabel}>Label</label>
        <input
          class={s.input}
          type="text"
          value={value()}
          onInput={(e) => setValue(e.currentTarget.value)}
          placeholder="..."
        />
      </div>

      {/* Button + spinner (always present) */}
      <div class={s.buttonRow}>
        <button class={s.button} onClick={handleCall} disabled={loading()}>
          Call Method
        </button>
        <Show when={loading()}>
          <Spinner />
        </Show>
      </div>

      {/* Result / error display (always present) */}
      <Show when={result()}>
        <div class={`${s.resultArea} ${s.resultSuccess}`}>{result()}</div>
      </Show>
      <Show when={error()}>
        <div class={`${s.resultArea} ${s.resultError}`}>{error()}</div>
      </Show>
    </InteractiveExample>
  );
};
```

Key conventions in example components:

- `sats-connect` is **dynamically imported** inside the handler (`await import("sats-connect")`), not at the top level.
- Three standard signals: `result`, `error`, `loading`. Input signals are added only when the method takes parameters.
- Style classes come from `InteractiveExample.css` (`s.button`, `s.buttonRow`, `s.fieldGroup`, `s.fieldLabel`, `s.input`, `s.select`, `s.resultArea`, `s.resultSuccess`, `s.resultError`).
- Use `<Show when={...}>` for conditional rendering (Solid.js pattern).
- Format results with `JSON.stringify(value, null, 2)`.

### 3. MDX page (`src/pages/<category>/<Method>.mdx`)

Uses semantic components from `Mdx.tsx`. Standard layout:

```mdx
import { H1, H2, P, Callout, ParamTable } from "../../components/Mdx/Mdx";
import { GetInfoExample } from "../examples/GetInfoExample";

<H1>getInfo</H1>

<P>Description of what the method does.</P>

<Callout type="info">Notes about prerequisites or special behavior.</Callout>

<H2>Try it</H2>

<GetInfoExample />

<H2>Parameters</H2>

<ParamTable
  params={[
    { name: "paramName", type: "string", required: true, description: "..." },
  ]}
/>

<H2>Response</H2>

<ParamTable
  params={[
    { name: "fieldName", type: "string", required: true, description: "..." },
  ]}
/>
```

Available MDX components: `H1`, `H2`, `H3`, `P`, `Ul`, `Li`, `InlineCode`, `Blockquote`, `Callout` (types: `info`, `warning`, `tip`), `ParamTable`.

### 4. Route (`src/index.tsx`)

Add a lazy import and a `<Route>`:

```tsx
const GetInfo = lazy(() => import("./pages/bitcoin/GetInfo.mdx"));
// ...
<Route path="/bitcoin/get-info" component={GetInfo} />;
```

Routes are grouped by category with comments: `// Bitcoin methods`, `// Stacks methods`, etc.

### 5. Navigation entry (`src/components/Layout/Layout.tsx`)

Add an item to the matching section in the `navigation` array:

```ts
{ label: "getInfo", href: "/bitcoin/get-info" },
```

## Routing

All pages are lazy-loaded MDX files. The router uses `@solidjs/router`:

```tsx
import { Router, Route } from "@solidjs/router";
import { lazy } from "solid-js";

render(
  () => (
    <Router root={Layout}>
      <Route path="/" component={Introduction} />
      <Route path="/bitcoin/get-info" component={GetInfo} />
      {/* ... */}
    </Router>
  ),
  root!,
);
```

Path convention: `/<category>/<kebab-case-method>`.

## Styling

Uses [Vanilla Extract](https://vanilla-extract.style/) for zero-runtime CSS.

- Theme tokens live in `src/styles/theme.css.ts` — always reference colours, spacing, fonts, radii, and shadows through `vars.*`.
- Component styles are co-located: `Component.css.ts` next to `Component.tsx`.
- Exported class names are camelCase (`s.buttonRow`, `s.fieldLabel`).
- Use `style()` for scoped classes, `globalStyle()` for element selectors, and `keyframes()` for animations.

## MDX integration

MDX is compiled to Solid.js JSX via `@mdx-js/rollup` with `jsxImportSource: "solid-jsx"` in `vite.config.ts`. Plugin order matters: MDX → Solid → Vanilla Extract.

The `<MDXProvider>` in `Layout.tsx` maps `<a>` tags to `CustomLink` so markdown links automatically get external-link handling.

## Naming conventions

| Thing             | Convention  | Example                   |
| ----------------- | ----------- | ------------------------- |
| Component files   | PascalCase  | `GetInfoExample.tsx`      |
| Snippet files     | kebab-case  | `get-info.ts`             |
| CSS class exports | camelCase   | `s.methodBadge`           |
| Route paths       | kebab-case  | `/bitcoin/get-info`       |
| Nav labels        | method name | `getInfo`, `runes_etch`   |
| Component folders | PascalCase  | `CodeBlock/CodeBlock.tsx` |

## Tools used in this repo

- **Bun**: Package manager and task runner for local development, builds, search index generation, and type-checking.
- **TypeScript**: Primary language for the app, interactive examples, scripts, and build configuration.
- **Solid.js**: UI framework used for the application shell and all interactive example components.
- **@solidjs/router**: Client-side routing for the docs site, with lazy-loaded page modules.
- **MDX**: Content format for documentation pages so prose and Solid components can live in the same file.
- **Vite**: Development server and production bundler.
- **vite-plugin-solid**: Integrates Solid.js compilation into the Vite build.
- **Vanilla Extract**: Zero-runtime CSS system used for theme tokens and component-scoped styles.
- **@ark-ui/solid**: Headless UI primitives used for accessible interactive components where needed.
- **Phosphor SVG assets**: Prefer Phosphor icon assets, such as `command.svg`, for interface glyphs instead of ad hoc Unicode symbols when an icon is needed.
- **Shiki**: Syntax highlighting for rendered code blocks.
- **MiniSearch**: Client-side search indexing and lookup for docs search.
- **remark-gfm**: Adds GitHub Flavored Markdown support to MDX content.
- **sats-connect**: The SDK being documented and exercised by the interactive examples.
- **Prettier**: Code and content formatter for the repository.
