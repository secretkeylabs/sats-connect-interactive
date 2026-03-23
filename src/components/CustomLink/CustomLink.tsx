import { A } from "@solidjs/router";
import type { Component, JSX } from "solid-js";

export const CustomLink: Component<
  JSX.AnchorHTMLAttributes<HTMLAnchorElement>
> = (props) => {
  const isExternal = () =>
    props.href?.startsWith("http://") || props.href?.startsWith("https://");
  const isHashLink = () => props.href?.startsWith("#");

  if (!props.href || isExternal() || isHashLink()) {
    return (
      <a
        {...props}
        {...(isExternal() ? { target: "_blank", rel: "noreferrer" } : {})}
      >
        {props.children}
      </a>
    );
  }

  return <A href={props.href}>{props.children}</A>;
};
