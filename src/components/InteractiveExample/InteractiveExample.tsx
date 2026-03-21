import { createSignal, type Component, type JSX, Show } from "solid-js";
import { CodeBlock } from "../CodeBlock/CodeBlock";
import * as s from "./InteractiveExample.css";

interface InteractiveExampleProps {
  method: string;
  title?: string;
  code: string;
  codeLang?: string;
  children: JSX.Element;
}

export const InteractiveExample: Component<InteractiveExampleProps> = (
  props,
) => {
  const [codeOpen, setCodeOpen] = createSignal(false);

  return (
    <div class={s.wrapper}>
      <div class={s.header}>
        <div class={s.headerLeft}>
          <span class={s.methodBadge}>{props.method}</span>
          <Show when={props.title}>
            <span class={s.title}>{props.title}</span>
          </Show>
        </div>
      </div>

      <div class={s.interactiveArea}>{props.children}</div>

      <button class={s.codeToggle} onClick={() => setCodeOpen(!codeOpen())}>
        <span class={`${s.chevron} ${codeOpen() ? s.chevronOpen : ""}`}>▶</span>
        {codeOpen() ? "Hide code" : "Show code"}
      </button>

      <Show when={codeOpen()}>
        <CodeBlock code={props.code} lang={props.codeLang ?? "typescript"} />
      </Show>
    </div>
  );
};
