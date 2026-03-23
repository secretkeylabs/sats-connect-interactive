import { style, globalStyle } from "@vanilla-extract/css";
import { vars } from "../../styles/theme.css";

export const layoutContainer = style({
  display: "flex",
  minHeight: "100vh",
});

export const sidebar = style({
  width: 280,
  flexShrink: 0,
  borderRight: `1px solid ${vars.color.border}`,
  backgroundColor: vars.color.bgSubtle,
  position: "fixed",
  top: 0,
  left: 0,
  bottom: 0,
  overflowY: "auto",
  zIndex: 10,
  display: "flex",
  flexDirection: "column",
  "@media": {
    "(max-width: 768px)": {
      transform: "translateX(-100%)",
      transition: "transform 0.2s ease",
    },
  },
});

export const sidebarOpen = style({
  "@media": {
    "(max-width: 768px)": {
      transform: "translateX(0)",
    },
  },
});

export const sidebarHeader = style({
  padding: `${vars.space.lg} ${vars.space.lg}`,
  borderBottom: `1px solid ${vars.color.border}`,
  display: "flex",
  alignItems: "center",
  gap: vars.space.sm,
});

export const logoText = style({
  fontSize: vars.fontSize.lg,
  fontWeight: 700,
  color: vars.color.text,
  letterSpacing: "-0.02em",
});

export const logoAccent = style({
  color: vars.color.accent,
});

export const navSection = style({
  padding: `${vars.space.md} ${vars.space.sm}`,
});

export const navSectionTitle = style({
  fontSize: vars.fontSize.xs,
  fontWeight: 600,
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  color: vars.color.textSubtle,
  padding: `${vars.space.xs} ${vars.space.md}`,
  marginBottom: vars.space.xs,
});

export const navLink = style({
  display: "block",
  padding: `${vars.space.xs} ${vars.space.md}`,
  borderRadius: vars.radius.md,
  fontSize: vars.fontSize.sm,
  color: vars.color.textMuted,
  textDecoration: "none",
  transition: "all 0.15s ease",
  ":hover": {
    color: vars.color.text,
    backgroundColor: vars.color.surfaceHover,
    textDecoration: "none",
  },
});

export const navLinkActive = style({
  color: vars.color.accent,
  backgroundColor: `rgba(238, 122, 48, 0.08)`,
  fontWeight: 500,
});

export const mainContent = style({
  flex: 1,
  marginLeft: 280,
  "@media": {
    "(max-width: 768px)": {
      marginLeft: 0,
    },
  },
});

export const topBar = style({
  position: "sticky",
  top: 0,
  zIndex: 5,
  backgroundColor: `rgba(10, 10, 11, 0.8)`,
  backdropFilter: "blur(12px)",
  borderBottom: `1px solid ${vars.color.border}`,
  padding: `${vars.space.sm} ${vars.space.lg}`,
  display: "flex",
  alignItems: "center",
  gap: vars.space.md,
});

export const hamburger = style({
  display: "none",
  background: "none",
  border: "none",
  cursor: "pointer",
  color: vars.color.text,
  padding: vars.space.xs,
  fontSize: "1.25rem",
  "@media": {
    "(max-width: 768px)": {
      display: "block",
    },
  },
});

export const pageContent = style({
  maxWidth: 860,
  margin: "0 auto",
  padding: `${vars.space.xl} ${vars.space.xl}`,
});

export const overlay = style({
  display: "none",
  "@media": {
    "(max-width: 768px)": {
      display: "block",
      position: "fixed",
      inset: 0,
      backgroundColor: "rgba(0,0,0,0.5)",
      zIndex: 9,
    },
  },
});

globalStyle(`${navLink}:hover`, {
  textDecoration: "none",
});

export const topBarSpacer = style({
  flex: 1,
});

export const walletButton = style({
  padding: `${vars.space.xs} ${vars.space.md}`,
  borderRadius: vars.radius.md,
  fontSize: vars.fontSize.sm,
  fontWeight: 500,
  fontFamily: vars.font.mono,
  cursor: "pointer",
  border: `1px solid ${vars.color.accent}`,
  backgroundColor: "transparent",
  color: vars.color.accent,
  transition: "all 0.15s ease",
  whiteSpace: "nowrap",
  ":hover": {
    backgroundColor: vars.color.accent,
    color: vars.color.accentText,
  },
});

export const walletButtonConnected = style({
  border: `1px solid ${vars.color.border}`,
  color: vars.color.text,
  ":hover": {
    borderColor: vars.color.error,
    backgroundColor: "transparent",
    color: vars.color.error,
  },
});
