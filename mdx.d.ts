declare module "*.mdx" {
  import type { Component } from "solid-js";
  const component: Component;
  export default component;
}

declare module "*.ts?raw" {
  const content: string;
  export default content;
}

declare module "*.svg?raw" {
  const content: string;
  export default content;
}
