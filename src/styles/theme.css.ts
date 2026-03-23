import {
  createGlobalTheme,
  createGlobalThemeContract,
} from "@vanilla-extract/css";

export const vars = createGlobalThemeContract({
  color: {
    bg: "color-bg",
    bgSubtle: "color-bg-subtle",
    bgCode: "color-bg-code",
    surface: "color-surface",
    surfaceHover: "color-surface-hover",
    border: "color-border",
    borderSubtle: "color-border-subtle",
    text: "color-text",
    textMuted: "color-text-muted",
    textSubtle: "color-text-subtle",
    accent: "color-accent",
    accentHover: "color-accent-hover",
    accentText: "color-accent-text",
    success: "color-success",
    error: "color-error",
    warning: "color-warning",
  },
  font: {
    body: "font-body",
    mono: "font-mono",
    heading: "font-heading",
  },
  fontSize: {
    xs: "font-size-xs",
    sm: "font-size-sm",
    base: "font-size-base",
    lg: "font-size-lg",
    xl: "font-size-xl",
    xxl: "font-size-xxl",
    xxxl: "font-size-xxxl",
  },
  space: {
    xs: "space-xs",
    sm: "space-sm",
    md: "space-md",
    lg: "space-lg",
    xl: "space-xl",
    xxl: "space-xxl",
  },
  radius: {
    sm: "radius-sm",
    md: "radius-md",
    lg: "radius-lg",
  },
  shadow: {
    sm: "shadow-sm",
    md: "shadow-md",
  },
});

createGlobalTheme(":root", vars, {
  color: {
    bg: "#0a0a0b",
    bgSubtle: "#111113",
    bgCode: "#1a1a1f",
    surface: "#18181b",
    surfaceHover: "#1f1f23",
    border: "#27272a",
    borderSubtle: "#1e1e22",
    text: "#fafafa",
    textMuted: "#a1a1aa",
    textSubtle: "#71717a",
    accent: "rgb(250, 76, 0)",
    accentHover: "rgb(255, 102, 34)",
    accentText: "#ffffff",
    success: "#22c55e",
    error: "#ef4444",
    warning: "#eab308",
  },
  font: {
    body: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    mono: "'JetBrains Mono', 'Fira Code', 'Cascadia Code', monospace",
    heading:
      "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  },
  fontSize: {
    xs: "0.75rem",
    sm: "0.875rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    xxl: "1.5rem",
    xxxl: "2rem",
  },
  space: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
    xxl: "3rem",
  },
  radius: {
    sm: "4px",
    md: "8px",
    lg: "12px",
  },
  shadow: {
    sm: "0 1px 2px rgba(0,0,0,0.3)",
    md: "0 4px 12px rgba(0,0,0,0.4)",
  },
});
