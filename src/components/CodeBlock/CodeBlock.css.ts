import { globalStyle, style } from "@vanilla-extract/css";
import { vars } from "../../styles/theme.css";

export const codeBlockWrapper = style({
  position: "relative",
  marginBlock: vars.space.lg,
  borderRadius: vars.radius.lg,
  overflow: "hidden",
  border: `1px solid ${vars.color.border}`,
});

export const codeBlockHeader = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: `${vars.space.sm} ${vars.space.md}`,
  backgroundColor: vars.color.surface,
  borderBottom: `1px solid ${vars.color.border}`,
  fontSize: vars.fontSize.xs,
  color: vars.color.textSubtle,
});

export const codeBlockLang = style({
  fontFamily: vars.font.mono,
  textTransform: "uppercase",
  letterSpacing: "0.05em",
});

export const copyButton = style({
  background: "none",
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.sm,
  color: vars.color.textMuted,
  cursor: "pointer",
  padding: `${vars.space.xs} ${vars.space.sm}`,
  fontSize: vars.fontSize.xs,
  fontFamily: vars.font.mono,
  transition: "all 0.15s ease",
  ":hover": {
    borderColor: vars.color.accent,
    color: vars.color.accent,
  },
});

export const codeBlockBody = style({
  padding: vars.space.md,
  backgroundColor: vars.color.bgCode,
  overflowX: "auto",
  fontSize: vars.fontSize.sm,
  lineHeight: 1.6,
  fontFamily: vars.font.mono,
});

export const pre = style({
  margin: 0,
  padding: 0,
  whiteSpace: "pre",
  tabSize: 2,
});

// Allow Shiki's generated <pre> to inherit the container's styling
globalStyle(`${codeBlockBody} pre`, {
  margin: 0,
  padding: 0,
  background: "transparent !important",
  fontSize: "inherit",
  lineHeight: "inherit",
  fontFamily: "inherit",
});

globalStyle(`${codeBlockBody} code`, {
  fontFamily: "inherit",
});
