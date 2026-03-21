import { A, useLocation } from "@solidjs/router";
import { createSignal, Suspense, type ParentComponent, Show } from "solid-js";
import { MDXProvider } from "solid-jsx";
import { CustomLink } from "../CustomLink/CustomLink";
import * as s from "./Layout.css";

const mdxComponents = { a: CustomLink };

type NavItem = {
  label: string;
  href: string;
};

type NavSection = {
  title: string;
  items: NavItem[];
};

const navigation: NavSection[] = [
  {
    title: "Getting Started",
    items: [
      { label: "Introduction", href: "/" },
      { label: "Wallet Providers", href: "/wallet-providers" },
    ],
  },
  {
    title: "Connecting",
    items: [
      { label: "Connect Wallet", href: "/connect" },
      { label: "Disconnect", href: "/disconnect" },
    ],
  },
  {
    title: "Bitcoin Methods",
    items: [
      { label: "getBalance", href: "/bitcoin/get-balance" },
      { label: "sendTransfer", href: "/bitcoin/send-transfer" },
      { label: "signMessage", href: "/bitcoin/sign-message" },
      { label: "signPsbt", href: "/bitcoin/sign-psbt" },
    ],
  },
  {
    title: "Stacks Methods",
    items: [
      { label: "stx_transferStx", href: "/stacks/transfer-stx" },
      { label: "stx_signMessage", href: "/stacks/sign-message" },
    ],
  },
  {
    title: "Spark Methods",
    items: [
      { label: "spark_getBalance", href: "/spark/get-balance" },
      { label: "spark_transfer", href: "/spark/transfer" },
      { label: "spark_signMessage", href: "/spark/sign-message" },
    ],
  },
  {
    title: "Wallet Methods",
    items: [
      { label: "wallet_getAccount", href: "/wallet/get-account" },
      {
        label: "wallet_requestPermissions",
        href: "/wallet/request-permissions",
      },
    ],
  },
];

export const Layout: ParentComponent = (props) => {
  const [menuOpen, setMenuOpen] = createSignal(false);
  const location = useLocation();

  return (
    <div class={s.layoutContainer}>
      <nav class={`${s.sidebar} ${menuOpen() ? s.sidebarOpen : ""}`}>
        <div class={s.sidebarHeader}>
          <span class={s.logoText}>
            <span class={s.logoAccent}>Sats</span> Connect
          </span>
        </div>
        {navigation.map((section) => (
          <div class={s.navSection}>
            <div class={s.navSectionTitle}>{section.title}</div>
            {section.items.map((item) => (
              <A
                href={item.href}
                class={`${s.navLink} ${location.pathname === item.href ? s.navLinkActive : ""}`}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </A>
            ))}
          </div>
        ))}
      </nav>

      <Show when={menuOpen()}>
        <div class={s.overlay} onClick={() => setMenuOpen(false)} />
      </Show>

      <div class={s.mainContent}>
        <header class={s.topBar}>
          <button class={s.hamburger} onClick={() => setMenuOpen(!menuOpen())}>
            ☰
          </button>
          <span
            style={{
              "font-size": "0.875rem",
              color: "var(--color-text-muted)",
            }}
          >
            Sats Connect – Interactive Documentation
          </span>
        </header>
        <div class={s.pageContent}>
          <MDXProvider components={mdxComponents}>
            <Suspense>{props.children}</Suspense>
          </MDXProvider>
        </div>
      </div>
    </div>
  );
};
