import type { Component, JSX } from "solid-js";

export const CustomLink: Component<
  JSX.AnchorHTMLAttributes<HTMLAnchorElement>
> = (props) => {
  const isExternal = () => props.href?.startsWith("http");

  return (
    <a
      {...props}
      {...(isExternal() ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      {props.children}
    </a>
  );
};
