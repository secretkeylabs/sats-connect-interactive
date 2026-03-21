import type { Component, JSX } from "solid-js";
import * as s from "./Mdx.css";

export const H1: Component<{ children: JSX.Element }> = (props) => (
  <h1 class={s.h1}>{props.children}</h1>
);

export const H2: Component<{ children: JSX.Element }> = (props) => (
  <h2 class={s.h2}>{props.children}</h2>
);

export const H3: Component<{ children: JSX.Element }> = (props) => (
  <h3 class={s.h3}>{props.children}</h3>
);

export const P: Component<{ children: JSX.Element }> = (props) => (
  <p class={s.paragraph}>{props.children}</p>
);

export const Ul: Component<{ children: JSX.Element }> = (props) => (
  <ul class={s.ul}>{props.children}</ul>
);

export const Li: Component<{ children: JSX.Element }> = (props) => (
  <li class={s.li}>{props.children}</li>
);

export const Blockquote: Component<{ children: JSX.Element }> = (props) => (
  <blockquote class={s.blockquote}>{props.children}</blockquote>
);

export const InlineCode: Component<{ children: JSX.Element }> = (props) => (
  <code class={s.inlineCode}>{props.children}</code>
);

export const Callout: Component<{
  type?: "info" | "warning" | "tip";
  children: JSX.Element;
}> = (props) => {
  const typeClass = () => {
    switch (props.type) {
      case "warning":
        return s.calloutWarning;
      case "tip":
        return s.calloutTip;
      default:
        return s.calloutInfo;
    }
  };

  const emoji = () => {
    switch (props.type) {
      case "warning":
        return "⚠️";
      case "tip":
        return "💡";
      default:
        return "ℹ️";
    }
  };

  return (
    <div class={`${s.callout} ${typeClass()}`}>
      <span>{emoji()}</span>
      <div>{props.children}</div>
    </div>
  );
};

export const ParamTable: Component<{
  params: Array<{
    name: string;
    type: string;
    required?: boolean;
    description: string;
  }>;
}> = (props) => (
  <table class={s.paramTable}>
    <thead class={s.paramTableHead}>
      <tr>
        <th class={s.paramTableHeaderCell}>Parameter</th>
        <th class={s.paramTableHeaderCell}>Type</th>
        <th class={s.paramTableHeaderCell}>Required</th>
        <th class={s.paramTableHeaderCell}>Description</th>
      </tr>
    </thead>
    <tbody>
      {props.params.map((param) => (
        <tr>
          <td class={s.paramTableCell}>
            <span class={s.paramName}>{param.name}</span>
          </td>
          <td class={s.paramTableCell}>
            <span class={s.paramType}>{param.type}</span>
          </td>
          <td class={s.paramTableCell}>{param.required ? "Yes" : "No"}</td>
          <td class={s.paramTableCell}>{param.description}</td>
        </tr>
      ))}
    </tbody>
  </table>
);
