// Below this breakpoint, the docs search moves from the top bar into the
// sidebar. Layout.tsx and Layout.css.ts must share the same threshold so only
// one Search instance is mounted and visible at a time.
export const searchSidebarBreakpointPx = 920;

export const searchSidebarMediaQuery = `(max-width: ${searchSidebarBreakpointPx}px)`;
