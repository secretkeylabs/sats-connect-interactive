import { style, keyframes } from "@vanilla-extract/css";
import { vars } from "../../styles/theme.css";

export const wrapper = style({
  marginBlock: vars.space.lg,
  borderRadius: vars.radius.lg,
  border: `1px solid ${vars.color.border}`,
  overflow: "hidden",
  backgroundColor: vars.color.surface,
});

export const header = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: `${vars.space.md} ${vars.space.lg}`,
  borderBottom: `1px solid ${vars.color.borderSubtle}`,
});

export const headerLeft = style({
  display: "flex",
  alignItems: "center",
  gap: vars.space.sm,
});

export const methodBadge = style({
  fontFamily: vars.font.mono,
  fontSize: vars.fontSize.sm,
  fontWeight: 600,
  color: vars.color.accent,
  backgroundColor: `rgba(238, 122, 48, 0.1)`,
  padding: `${vars.space.xs} ${vars.space.sm}`,
  borderRadius: vars.radius.sm,
});

export const title = style({
  fontSize: vars.fontSize.base,
  fontWeight: 600,
  color: vars.color.text,
});

export const interactiveArea = style({
  padding: vars.space.lg,
  display: "flex",
  flexDirection: "column",
  gap: vars.space.md,
});

export const fieldGroup = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space.xs,
});

export const fieldLabel = style({
  fontSize: vars.fontSize.sm,
  fontWeight: 500,
  color: vars.color.textMuted,
});

export const input = style({
  padding: `${vars.space.sm} ${vars.space.md}`,
  backgroundColor: vars.color.bgCode,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.md,
  color: vars.color.text,
  fontFamily: vars.font.mono,
  fontSize: vars.fontSize.sm,
  outline: "none",
  transition: "border-color 0.15s ease",
  ":focus": {
    borderColor: vars.color.accent,
  },
  "::placeholder": {
    color: vars.color.textSubtle,
  },
});

export const select = style({
  padding: `${vars.space.sm} ${vars.space.md}`,
  backgroundColor: vars.color.bgCode,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.md,
  color: vars.color.text,
  fontFamily: vars.font.body,
  fontSize: vars.fontSize.sm,
  outline: "none",
  cursor: "pointer",
  ":focus": {
    borderColor: vars.color.accent,
  },
});

export const button = style({
  padding: `${vars.space.sm} ${vars.space.lg}`,
  backgroundColor: vars.color.accent,
  color: vars.color.accentText,
  border: "none",
  borderRadius: vars.radius.md,
  fontWeight: 600,
  fontSize: vars.fontSize.sm,
  cursor: "pointer",
  transition: "background-color 0.15s ease",
  ":hover": {
    backgroundColor: vars.color.accentHover,
  },
  ":disabled": {
    opacity: 0.5,
    cursor: "not-allowed",
  },
});

export const buttonRow = style({
  display: "flex",
  alignItems: "center",
  alignSelf: "flex-start",
  gap: vars.space.md,
});

export const resultArea = style({
  padding: vars.space.md,
  backgroundColor: vars.color.bgCode,
  borderRadius: vars.radius.md,
  fontFamily: vars.font.mono,
  fontSize: vars.fontSize.sm,
  lineHeight: 1.6,
  whiteSpace: "pre-wrap",
  wordBreak: "break-all",
  maxHeight: 300,
  overflowY: "auto",
  color: vars.color.textMuted,
});

export const resultSuccess = style({
  color: vars.color.success,
});

export const resultError = style({
  color: vars.color.error,
});

export const codeToggle = style({
  display: "flex",
  alignItems: "center",
  gap: vars.space.sm,
  padding: `${vars.space.sm} ${vars.space.lg}`,
  width: "100%",
  border: "none",
  borderTop: `1px solid ${vars.color.borderSubtle}`,
  backgroundColor: "transparent",
  color: vars.color.textMuted,
  fontSize: vars.fontSize.sm,
  cursor: "pointer",
  transition: "color 0.15s ease",
  ":hover": {
    color: vars.color.text,
  },
});

const slideDown = keyframes({
  from: { height: 0, opacity: 0 },
  to: { height: "var(--height)", opacity: 1 },
});

const slideUp = keyframes({
  from: { height: "var(--height)", opacity: 1 },
  to: { height: 0, opacity: 0 },
});

export const collapsibleContent = style({
  overflow: "hidden",
  selectors: {
    '&[data-state="open"]': {
      animation: `${slideDown} 0.2s ease-out`,
    },
    '&[data-state="closed"]': {
      animation: `${slideUp} 0.2s ease-out`,
    },
  },
});

export const chevron = style({
  transition: "transform 0.2s ease",
  display: "inline-block",
});

export const chevronOpen = style({
  transform: "rotate(90deg)",
});

export const statusDot = style({
  width: 8,
  height: 8,
  borderRadius: "50%",
  display: "inline-block",
});

export const statusConnected = style({
  backgroundColor: vars.color.success,
});

export const statusDisconnected = style({
  backgroundColor: vars.color.error,
});
