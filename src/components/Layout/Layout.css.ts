import { style, globalStyle } from "@vanilla-extract/css";
import { vars } from "../../styles/theme.css";
import { searchSidebarMediaQuery } from "../../styles/responsive";

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
});

export const sidebarSearch = style({
  display: "none",
  padding: `${vars.space.md} ${vars.space.sm} ${vars.space.sm}`,
  borderBottom: `1px solid ${vars.color.border}`,
  "@media": {
    [searchSidebarMediaQuery]: {
      display: "block",
    },
  },
});

export const logoImage = style({
  display: "block",
  width: "100%",
  maxWidth: 168,
  height: "auto",
});

export const titleGroup = style({
  display: "flex",
  alignItems: "center",
  gap: vars.space.sm,
  minWidth: 0,
});

export const titleIcon = style({
  width: 18,
  height: 18,
  flexShrink: 0,
});

export const titleText = style({
  fontSize: vars.fontSize.sm,
  color: vars.color.textMuted,
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
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
  backgroundColor: "rgba(250, 76, 0, 0.08)",
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
  justifyContent: "space-between",
  minHeight: 72,
  "@media": {
    "(max-width: 768px)": {
      padding: `${vars.space.sm} ${vars.space.md}`,
      flexWrap: "wrap",
      minHeight: "auto",
    },
  },
});

export const topBarLead = style({
  display: "flex",
  alignItems: "center",
  gap: vars.space.md,
  minWidth: 0,
  flex: "1 1 0",
  "@media": {
    "(max-width: 768px)": {
      flex: "0 1 auto",
      width: "auto",
    },
  },
});

export const topBarSearch = style({
  flexGrow: 2,
  flexShrink: 0.5,
  flexBasis: "0",
  display: "flex",
  justifyContent: "center",
  minWidth: 0,
  "@media": {
    [searchSidebarMediaQuery]: {
      display: "none",
    },
    "(max-width: 768px)": {
      order: 3,
      flexBasis: "100%",
      width: "100%",
    },
  },
});

export const topBarActions = style({
  display: "flex",
  justifyContent: "flex-end",
  flex: "1 1 0",
  minWidth: 0,
  "@media": {
    "(max-width: 768px)": {
      flex: "0 1 auto",
    },
  },
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

globalStyle(`${pageContent} h1`, {
  fontSize: vars.fontSize.xxxl,
  fontWeight: 800,
  letterSpacing: "-0.03em",
  lineHeight: "1.2",
  marginTop: 0,
  marginBottom: vars.space.lg,
  color: vars.color.text,
});

globalStyle(`${pageContent} h2`, {
  fontSize: vars.fontSize.xxl,
  fontWeight: 700,
  letterSpacing: "-0.02em",
  lineHeight: "1.3",
  marginTop: vars.space.xxl,
  marginBottom: vars.space.md,
  paddingBottom: vars.space.sm,
  borderBottom: `1px solid ${vars.color.border}`,
  color: vars.color.text,
});

globalStyle(`${pageContent} h3`, {
  fontSize: vars.fontSize.xl,
  fontWeight: 600,
  lineHeight: "1.4",
  marginTop: vars.space.xl,
  marginBottom: vars.space.sm,
  color: vars.color.text,
});

globalStyle(`${pageContent} p`, {
  marginTop: 0,
  marginBottom: vars.space.md,
  color: vars.color.textMuted,
  lineHeight: "1.7",
});

globalStyle(`${pageContent} ul`, {
  marginTop: 0,
  marginBottom: vars.space.md,
  paddingLeft: vars.space.lg,
});

globalStyle(`${pageContent} li`, {
  marginBottom: vars.space.xs,
  color: vars.color.textMuted,
  lineHeight: "1.7",
});

globalStyle(`${pageContent} li::marker`, {
  color: vars.color.accent,
});

globalStyle(`${pageContent} blockquote`, {
  borderLeft: `3px solid ${vars.color.accent}`,
  paddingLeft: vars.space.md,
  marginBlock: vars.space.lg,
  color: vars.color.textMuted,
  fontStyle: "italic",
});

globalStyle(
  `${pageContent} p code, ${pageContent} li code, ${pageContent} blockquote code`,
  {
    fontFamily: vars.font.mono,
    fontSize: "0.9em",
    backgroundColor: vars.color.bgCode,
    padding: "0.15em 0.4em",
    borderRadius: vars.radius.sm,
    color: vars.color.accent,
  },
);

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
