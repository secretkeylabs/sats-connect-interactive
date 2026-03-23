import type { Component } from "solid-js";
import * as s from "./Spinner.css";
import iconSrc from "/sats-connect-icon.png";

export const Spinner: Component = () => (
  <div class={s.wrapper}>
    <img src={iconSrc} alt="" class={s.icon} />
  </div>
);
