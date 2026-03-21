import type { Component } from "solid-js";
import * as s from "./Spinner.css";

export const Spinner: Component = () => (
  <div class={s.wrapper}>
    <img src="/sats-connect-icon.png" alt="" class={s.icon} />
  </div>
);
