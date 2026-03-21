import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/theme.css";

export const h1 = style({
  fontSize: vars.fontSize.xxxl,
  fontWeight: 800,
  letterSpacing: "-0.03em",
  lineHeight: 1.2,
  marginBottom: vars.space.lg,
  color: vars.color.text,
});

export const h2 = style({
  fontSize: vars.fontSize.xxl,
  fontWeight: 700,
  letterSpacing: "-0.02em",
  lineHeight: 1.3,
  marginTop: vars.space.xxl,
  marginBottom: vars.space.md,
  paddingBottom: vars.space.sm,
  borderBottom: `1px solid ${vars.color.border}`,
  color: vars.color.text,
});

export const h3 = style({
  fontSize: vars.fontSize.xl,
  fontWeight: 600,
  lineHeight: 1.4,
  marginTop: vars.space.xl,
  marginBottom: vars.space.sm,
  color: vars.color.text,
});

export const paragraph = style({
  marginBottom: vars.space.md,
  color: vars.color.textMuted,
  lineHeight: 1.7,
});

export const ul = style({
  marginBottom: vars.space.md,
  paddingLeft: vars.space.lg,
});

export const li = style({
  marginBottom: vars.space.xs,
  color: vars.color.textMuted,
  lineHeight: 1.7,
  "::marker": {
    color: vars.color.accent,
  },
});

export const callout = style({
  padding: vars.space.md,
  borderRadius: vars.radius.md,
  marginBlock: vars.space.lg,
  fontSize: vars.fontSize.sm,
  lineHeight: 1.6,
  display: "flex",
  gap: vars.space.sm,
  alignItems: "flex-start",
});

export const calloutInfo = style({
  backgroundColor: `rgba(59, 130, 246, 0.08)`,
  border: `1px solid rgba(59, 130, 246, 0.2)`,
  color: "#93c5fd",
});

export const calloutWarning = style({
  backgroundColor: `rgba(234, 179, 8, 0.08)`,
  border: `1px solid rgba(234, 179, 8, 0.2)`,
  color: "#fde047",
});

export const calloutTip = style({
  backgroundColor: `rgba(34, 197, 94, 0.08)`,
  border: `1px solid rgba(34, 197, 94, 0.2)`,
  color: "#86efac",
});

export const inlineCode = style({
  fontFamily: vars.font.mono,
  fontSize: "0.9em",
  backgroundColor: vars.color.bgCode,
  padding: "0.15em 0.4em",
  borderRadius: vars.radius.sm,
  color: vars.color.accent,
});

export const blockquote = style({
  borderLeft: `3px solid ${vars.color.accent}`,
  paddingLeft: vars.space.md,
  marginBlock: vars.space.lg,
  color: vars.color.textMuted,
  fontStyle: "italic",
});

export const paramTable = style({
  width: "100%",
  borderCollapse: "collapse",
  marginBlock: vars.space.lg,
  fontSize: vars.fontSize.sm,
});

export const paramTableHead = style({
  borderBottom: `2px solid ${vars.color.border}`,
});

export const paramTableHeaderCell = style({
  textAlign: "left",
  padding: `${vars.space.sm} ${vars.space.md}`,
  fontWeight: 600,
  color: vars.color.textSubtle,
  fontSize: vars.fontSize.xs,
  textTransform: "uppercase",
  letterSpacing: "0.05em",
});

export const paramTableCell = style({
  padding: `${vars.space.sm} ${vars.space.md}`,
  borderBottom: `1px solid ${vars.color.borderSubtle}`,
  color: vars.color.textMuted,
  verticalAlign: "top",
});

export const paramName = style({
  fontFamily: vars.font.mono,
  fontWeight: 500,
  color: vars.color.accent,
});

export const paramType = style({
  fontFamily: vars.font.mono,
  color: vars.color.textSubtle,
  fontSize: vars.fontSize.xs,
});
