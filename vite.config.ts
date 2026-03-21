import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import mdx from "@mdx-js/rollup";
import remarkGfm from "remark-gfm";
import { resolve } from "path";

export default defineConfig({
  plugins: [
    mdx({ jsxImportSource: "solid-jsx", remarkPlugins: [remarkGfm] }),
    solid(),
    vanillaExtractPlugin(),
  ],
  resolve: {
    alias: {
      "~": resolve(__dirname, "src"),
    },
  },
});
