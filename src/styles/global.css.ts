import { globalStyle } from "@vanilla-extract/css";
import { vars } from "./theme.css";

globalStyle("*, *::before, *::after", {
  boxSizing: "border-box",
  margin: 0,
  padding: 0,
});

globalStyle("html", {
  fontSize: "16px",
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
});

globalStyle("body", {
  fontFamily: vars.font.body,
  backgroundColor: vars.color.bg,
  color: vars.color.text,
  lineHeight: 1.7,
  fontSize: vars.fontSize.base,
});

globalStyle("#app", {
  minHeight: "100vh",
});

globalStyle("a", {
  color: vars.color.accent,
  textDecoration: "none",
});

globalStyle("a:hover", {
  color: vars.color.accentHover,
  textDecoration: "underline",
});

globalStyle("code", {
  fontFamily: vars.font.mono,
  fontSize: "0.9em",
  backgroundColor: vars.color.bgCode,
  padding: "0.15em 0.4em",
  borderRadius: vars.radius.sm,
});

globalStyle("pre code", {
  backgroundColor: "transparent",
  padding: 0,
});

globalStyle("img", {
  maxWidth: "100%",
  height: "auto",
});

globalStyle("table", {
  width: "100%",
  borderCollapse: "collapse",
  marginBlock: vars.space.lg,
});

globalStyle("th, td", {
  padding: `${vars.space.sm} ${vars.space.md}`,
  borderBottom: `1px solid ${vars.color.border}`,
  textAlign: "left",
});

globalStyle("th", {
  fontWeight: 600,
  color: vars.color.textMuted,
  fontSize: vars.fontSize.sm,
  textTransform: "uppercase",
  letterSpacing: "0.05em",
});

globalStyle("hr", {
  border: "none",
  borderTop: `1px solid ${vars.color.border}`,
  marginBlock: vars.space.xl,
});
