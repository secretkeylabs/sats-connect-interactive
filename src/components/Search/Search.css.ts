import { globalStyle, style } from "@vanilla-extract/css";
import { vars } from "../../styles/theme.css";

export const searchTrigger = style({
  width: "100%",
  maxWidth: 460,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: vars.space.md,
  padding: `${vars.space.sm} ${vars.space.md}`,
  borderRadius: vars.radius.lg,
  border: `1px solid ${vars.color.border}`,
  backgroundColor: "rgba(24, 24, 27, 0.9)",
  color: vars.color.textMuted,
  cursor: "pointer",
  boxShadow: vars.shadow.sm,
  transition:
    "border-color 0.15s ease, transform 0.15s ease, background-color 0.15s ease",
  ":hover": {
    borderColor: vars.color.accent,
    backgroundColor: vars.color.surface,
    transform: "translateY(-1px)",
  },
  ":focus-visible": {
    outline: `2px solid ${vars.color.accent}`,
    outlineOffset: 2,
  },
});

export const triggerLabel = style({
  display: "flex",
  alignItems: "center",
  gap: vars.space.sm,
  minWidth: 0,
  overflow: "hidden",
});

export const triggerIcon = style({
  width: "1cap",
  height: "1cap",
  minWidth: "1cap",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "visible",
  color: vars.color.textSubtle,
});

globalStyle(`${triggerIcon} svg`, {
  width: "100%",
  height: "100%",
  display: "block",
  fill: "currentColor",
});

export const triggerText = style({
  fontSize: vars.fontSize.sm,
  color: vars.color.textMuted,
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
});

export const triggerShortcut = style({
  flexShrink: 0,
  padding: `0 ${vars.space.sm}`,
  height: 24,
  borderRadius: 999,
  border: `1px solid ${vars.color.border}`,
  backgroundColor: vars.color.bgCode,
  color: vars.color.textSubtle,
  fontSize: vars.fontSize.xs,
  fontFamily: vars.font.mono,
  display: "inline-flex",
  alignItems: "center",
  lineHeight: 1,
});

export const triggerShortcutWithIcon = style({
  display: "inline-flex",
  alignItems: "center",
  gap: "0.28rem",
});

export const triggerShortcutIcon = style({
  width: "1cap",
  height: "1cap",
  flexShrink: 0,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "visible",
});

globalStyle(`${triggerShortcutIcon} svg`, {
  width: "100%",
  height: "100%",
  display: "block",
  fill: "currentColor",
  transform: "scale(1.18)",
  transformOrigin: "center",
});

export const backdrop = style({
  position: "fixed",
  inset: 0,
  backgroundColor: "rgba(2, 6, 23, 0.72)",
  backdropFilter: "blur(12px)",
  zIndex: 40,
});

export const positioner = style({
  position: "fixed",
  inset: 0,
  zIndex: 41,
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "center",
  padding: `${vars.space.xxl} ${vars.space.md}`,
  overflowY: "auto",
});

export const content = style({
  width: "min(760px, 100%)",
  borderRadius: 20,
  border: `1px solid rgba(250, 76, 0, 0.2)`,
  background: `linear-gradient(180deg, rgba(17, 17, 19, 0.98) 0%, rgba(10, 10, 11, 0.98) 100%)`,
  boxShadow: "0 32px 80px rgba(0, 0, 0, 0.5)",
  overflow: "hidden",
});

export const header = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: vars.space.md,
  padding: `${vars.space.md} ${vars.space.lg}`,
  borderBottom: `1px solid ${vars.color.borderSubtle}`,
});

export const headerText = style({
  display: "grid",
  gap: vars.space.xs,
});

export const title = style({
  fontSize: vars.fontSize.lg,
  fontWeight: 700,
  color: vars.color.text,
});

export const description = style({
  fontSize: vars.fontSize.sm,
  color: vars.color.textMuted,
});

export const closeButton = style({
  flexShrink: 0,
  padding: `${vars.space.xs} ${vars.space.sm}`,
  borderRadius: vars.radius.md,
  border: `1px solid ${vars.color.border}`,
  backgroundColor: vars.color.bgCode,
  color: vars.color.textMuted,
  cursor: "pointer",
  fontFamily: vars.font.mono,
  fontSize: vars.fontSize.xs,
  transition: "border-color 0.15s ease, color 0.15s ease",
  ":hover": {
    borderColor: vars.color.accent,
    color: vars.color.text,
  },
});

export const body = style({
  padding: `${vars.space.md} ${vars.space.lg} ${vars.space.lg}`,
  display: "grid",
  gap: vars.space.md,
});

export const inputRow = style({
  display: "flex",
  alignItems: "center",
  gap: vars.space.sm,
  padding: `${vars.space.sm} ${vars.space.md}`,
  borderRadius: vars.radius.lg,
  border: `1px solid ${vars.color.border}`,
  backgroundColor: "rgba(24, 24, 27, 0.92)",
});

export const inputIcon = style({
  width: "1cap",
  height: "1cap",
  minWidth: "1cap",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "visible",
  color: vars.color.textSubtle,
});

globalStyle(`${inputIcon} svg`, {
  width: "100%",
  height: "100%",
  display: "block",
  fill: "currentColor",
});

export const input = style({
  width: "100%",
  border: "none",
  background: "transparent",
  color: vars.color.text,
  fontSize: vars.fontSize.base,
  fontFamily: vars.font.body,
  outline: "none",
  selectors: {
    "&::placeholder": {
      color: vars.color.textSubtle,
    },
  },
});

export const resultsSummary = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: vars.space.md,
  fontSize: vars.fontSize.sm,
  color: vars.color.textMuted,
});

export const resultsCount = style({
  color: vars.color.text,
  fontWeight: 600,
});

export const resultsPanel = style({
  maxHeight: "min(56vh, 640px)",
  overflowY: "auto",
  borderRadius: vars.radius.lg,
  border: `1px solid ${vars.color.borderSubtle}`,
  backgroundColor: "rgba(14, 14, 16, 0.92)",
});

export const resultLink = style({
  display: "grid",
  gap: vars.space.xs,
  padding: `${vars.space.md} ${vars.space.lg}`,
  borderBottom: `1px solid ${vars.color.borderSubtle}`,
  color: vars.color.text,
  textDecoration: "none",
  transition: "background-color 0.15s ease, border-color 0.15s ease",
  ":hover": {
    backgroundColor: "rgba(250, 76, 0, 0.08)",
    borderColor: "rgba(250, 76, 0, 0.18)",
    textDecoration: "none",
  },
});

globalStyle(`${resultLink}:last-child`, {
  borderBottom: "none",
});

export const resultHeader = style({
  display: "flex",
  alignItems: "baseline",
  justifyContent: "space-between",
  gap: vars.space.md,
});

export const resultTitle = style({
  fontSize: vars.fontSize.base,
  fontWeight: 600,
  color: vars.color.text,
});

export const resultSection = style({
  flexShrink: 0,
  fontSize: vars.fontSize.xs,
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  color: vars.color.accent,
});

export const resultExcerpt = style({
  fontSize: vars.fontSize.sm,
  lineHeight: 1.6,
  color: vars.color.textMuted,
});

export const resultMeta = style({
  display: "flex",
  alignItems: "center",
  gap: vars.space.sm,
  fontSize: vars.fontSize.xs,
  color: vars.color.textSubtle,
  fontFamily: vars.font.mono,
});

export const resultHeading = style({
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
});

export const emptyState = style({
  padding: `${vars.space.xxl} ${vars.space.lg}`,
  display: "grid",
  gap: vars.space.sm,
  justifyItems: "center",
  textAlign: "center",
  color: vars.color.textMuted,
});

export const emptyTitle = style({
  fontSize: vars.fontSize.base,
  fontWeight: 600,
  color: vars.color.text,
});

export const emptyBody = style({
  maxWidth: 420,
  fontSize: vars.fontSize.sm,
  lineHeight: 1.6,
});

export const subtle = style({
  color: vars.color.textSubtle,
});
