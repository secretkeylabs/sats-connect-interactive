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
      { label: "getInfo", href: "/bitcoin/get-info" },
      { label: "getAddresses", href: "/bitcoin/get-addresses" },
      { label: "getAccounts", href: "/bitcoin/get-accounts" },
      { label: "getBalance", href: "/bitcoin/get-balance" },
      { label: "sendTransfer", href: "/bitcoin/send-transfer" },
      { label: "signMessage", href: "/bitcoin/sign-message" },
      { label: "signPsbt", href: "/bitcoin/sign-psbt" },
      { label: "ord_getInscriptions", href: "/bitcoin/get-inscriptions" },
      { label: "ord_sendInscriptions", href: "/bitcoin/send-inscriptions" },
      { label: "runes_getBalance", href: "/bitcoin/runes-get-balance" },
      { label: "runes_transfer", href: "/bitcoin/runes-transfer" },
      { label: "runes_mint", href: "/bitcoin/runes-mint" },
      { label: "runes_etch", href: "/bitcoin/runes-etch" },
    ],
  },
  {
    title: "Stacks Methods",
    items: [
      { label: "stx_transferStx", href: "/stacks/transfer-stx" },
      { label: "stx_signMessage", href: "/stacks/sign-message" },
      { label: "stx_getAddresses", href: "/stacks/get-addresses" },
      { label: "stx_getAccounts", href: "/stacks/get-accounts" },
      { label: "stx_signTransaction", href: "/stacks/sign-transaction" },
      { label: "stx_callContract", href: "/stacks/call-contract" },
      { label: "stx_deployContract", href: "/stacks/deploy-contract" },
    ],
  },
  {
    title: "Spark Methods",
    items: [
      { label: "spark_getBalance", href: "/spark/get-balance" },
      { label: "spark_transfer", href: "/spark/transfer" },
      { label: "spark_signMessage", href: "/spark/sign-message" },
      { label: "spark_getAddresses", href: "/spark/get-addresses" },
      { label: "spark_transferToken", href: "/spark/transfer-token" },
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
      { label: "wallet_getWalletType", href: "/wallet/get-wallet-type" },
      {
        label: "wallet_getCurrentPermissions",
        href: "/wallet/get-current-permissions",
      },
      {
        label: "wallet_renouncePermissions",
        href: "/wallet/renounce-permissions",
      },
      { label: "wallet_getNetwork", href: "/wallet/get-network" },
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
