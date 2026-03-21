import { createSignal, createResource, type Component } from "solid-js";
import { createHighlighterCoreSync } from "shiki/core";
import { createJavaScriptRegexEngine } from "shiki/engine/javascript";
import ts from "shiki/langs/typescript.mjs";
import bash from "shiki/langs/bash.mjs";
import theme from "shiki/themes/github-dark-default.mjs";
import * as s from "./CodeBlock.css";

const highlighter = createHighlighterCoreSync({
  themes: [theme],
  langs: [ts, bash],
  engine: createJavaScriptRegexEngine(),
});

interface CodeBlockProps {
  code: string;
  lang?: string;
  title?: string;
}

export const CodeBlock: Component<CodeBlockProps> = (props) => {
  const [copied, setCopied] = createSignal(false);

  const html = () =>
    highlighter.codeToHtml(props.code, {
      lang: props.lang ?? "typescript",
      theme: "github-dark-default",
    });

  const handleCopy = async () => {
    await navigator.clipboard.writeText(props.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div class={s.codeBlockWrapper}>
      <div class={s.codeBlockHeader}>
        <span class={s.codeBlockLang}>
          {props.title ?? props.lang ?? "code"}
        </span>
        <button class={s.copyButton} onClick={handleCopy}>
          {copied() ? "✓ Copied" : "Copy"}
        </button>
      </div>
      <div class={s.codeBlockBody} innerHTML={html()} />
    </div>
  );
};
