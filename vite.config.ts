import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import mdx from "@mdx-js/rollup";
import remarkGfm from "remark-gfm";
import { resolve } from "path";

export default defineConfig({
  plugins: [
    {
      ...mdx({
        jsxImportSource: "solid-js",
        remarkPlugins: [remarkGfm],
      }),
      enforce: "pre" as const,
    },
    solid(),
    vanillaExtractPlugin(),
  ],
  resolve: {
    alias: {
      "~": resolve(__dirname, "src"),
    },
  },
});
