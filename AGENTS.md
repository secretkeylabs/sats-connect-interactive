Use Markdown's link syntax for all links:

```
[link text](https://example.com/)
```

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
