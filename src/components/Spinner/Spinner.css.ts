import { keyframes, style } from "@vanilla-extract/css";
import { vars } from "../../styles/theme.css";

const spin = keyframes({
  from: { transform: "rotate(0deg)" },
  to: { transform: "rotate(360deg)" },
});

export const wrapper = style({
  display: "flex",
  alignItems: "center",
  gap: vars.space.sm,
  color: vars.color.textMuted,
  fontSize: vars.fontSize.sm,
});

export const icon = style({
  width: 20,
  height: 20,
  borderRadius: "50%",
  animation: `${spin} 0.5s linear infinite`,
});
