import { createSignal, type Component } from "solid-js";
import * as s from "./CodeBlock.css";

interface CodeBlockProps {
  code: string;
  lang?: string;
  title?: string;
}

export const CodeBlock: Component<CodeBlockProps> = (props) => {
  const [copied, setCopied] = createSignal(false);

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
      <div class={s.codeBlockBody}>
        <pre class={s.pre}>
          <code>{props.code}</code>
        </pre>
      </div>
    </div>
  );
};
