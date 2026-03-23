import type { Component } from "solid-js";
import * as s from "./Spinner.css";

const iconSrc = `${import.meta.env.BASE_URL}sats-connect-icon.png`;

export const Spinner: Component = () => (
  <div class={s.wrapper}>
    <img src={iconSrc} alt="" class={s.icon} />
  </div>
);
