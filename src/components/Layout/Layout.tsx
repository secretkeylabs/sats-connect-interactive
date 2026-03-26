import { A, useLocation } from "@solidjs/router";
import {
  createEffect,
  createMemo,
  createSignal,
  onCleanup,
  onMount,
  Suspense,
  type ParentComponent,
  Show,
} from "solid-js";
import { AddressPurpose } from "sats-connect";
import { MDXProvider } from "solid-jsx";
import { CustomLink } from "../CustomLink/CustomLink";
import { H1, H2, H3, P, Ul, Li, Blockquote, InlineCode } from "../Mdx/Mdx";
import { Search } from "../Search/Search";
import { searchSidebarMediaQuery } from "../../styles/responsive";
import * as s from "./Layout.css";

const basePath = (import.meta.env.BASE_URL ?? "/").replace(/\/$/, "");
const iconSrc = `${import.meta.env.BASE_URL}sats-connect-icon.png`;
const logoSrc = `${import.meta.env.BASE_URL}sats-connect-logo.svg`;

function truncateAddress(address: string): string {
  if (address.length <= 12) return address;
  return `${address.slice(0, 6)}…${address.slice(-4)}`;
}

const mdxComponents = {
  a: CustomLink,
  h1: H1,
  h2: H2,
  h3: H3,
  p: P,
  ul: Ul,
  li: Li,
  blockquote: Blockquote,
  code: InlineCode,
};

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
  const [address, setAddress] = createSignal<string | null>(null);
  const [hovering, setHovering] = createSignal(false);
  const [showSidebarSearch, setShowSidebarSearch] = createSignal(false);
  const location = useLocation();

  const normalizedPath = createMemo(() => {
    const pathname = location.pathname;

    if (!basePath || basePath === "/") {
      return pathname || "/";
    }

    if (pathname.startsWith(basePath)) {
      const strippedPath = pathname.slice(basePath.length);
      return strippedPath || "/";
    }

    return pathname || "/";
  });

  const currentPageTitle = createMemo(() => {
    const currentItem = navigation
      .flatMap((section) => section.items)
      .find((item) => item.href === normalizedPath());

    return currentItem?.label
      ? `Sats Connect — ${currentItem.label}`
      : "Sats Connect";
  });

  createEffect(() => {
    document.title = currentPageTitle();
  });

  const pickPaymentAddress = (
    addresses: Array<{ address: string; purpose: AddressPurpose }>,
  ) => {
    const payment = addresses.find((a) => a.purpose === AddressPurpose.Payment);
    return payment?.address ?? addresses[0]?.address ?? null;
  };

  onMount(async () => {
    try {
      const { default: Wallet } = await import("sats-connect");

      const removeAccountChange = Wallet.addListener({
        eventName: "accountChange",
        cb: (event) => {
          if (event.addresses?.length) {
            setAddress(pickPaymentAddress(event.addresses));
          } else {
            setAddress(null);
          }
        },
      });

      const removeDisconnect = Wallet.addListener({
        eventName: "disconnect",
        cb: () => {
          setAddress(null);
          setHovering(false);
        },
      });

      onCleanup(() => {
        removeAccountChange();
        removeDisconnect();
      });
    } catch {
      // wallet not available
    }
  });

  onMount(() => {
    const mediaQuery = window.matchMedia(searchSidebarMediaQuery);

    const syncSearchPlacement = (event?: MediaQueryListEvent) => {
      setShowSidebarSearch(event?.matches ?? mediaQuery.matches);
    };

    syncSearchPlacement();
    mediaQuery.addEventListener("change", syncSearchPlacement);

    onCleanup(() => {
      mediaQuery.removeEventListener("change", syncSearchPlacement);
    });
  });

  const handleConnect = async () => {
    try {
      const { default: Wallet } = await import("sats-connect");
      const response = await Wallet.request("wallet_connect", {
        addresses: [
          AddressPurpose.Payment,
          AddressPurpose.Ordinals,
          AddressPurpose.Stacks,
        ],
      });
      if (response.status === "success") {
        setAddress(pickPaymentAddress(response.result.addresses));
      }
    } catch {
      // wallet not available
    }
  };

  const handleDisconnect = async () => {
    try {
      const { default: Wallet } = await import("sats-connect");
      await Wallet.disconnect();
    } catch {
      // ignore
    }
    setAddress(null);
    setHovering(false);
  };

  return (
    <div class={s.layoutContainer}>
      <nav class={`${s.sidebar} ${menuOpen() ? s.sidebarOpen : ""}`}>
        <div class={s.sidebarHeader}>
          <img src={logoSrc} alt="Sats Connect" class={s.logoImage} />
        </div>
        <Show when={showSidebarSearch()}>
          <div class={s.sidebarSearch}>
            <Search />
          </div>
        </Show>
        {navigation.map((section) => (
          <div class={s.navSection}>
            <div class={s.navSectionTitle}>{section.title}</div>
            {section.items.map((item) => (
              <A
                href={item.href}
                class={s.navLink}
                activeClass={s.navLinkActive}
                end
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
          <div class={s.topBarLead}>
            <button
              class={s.hamburger}
              onClick={() => setMenuOpen(!menuOpen())}
              aria-label="Toggle navigation"
            >
              ☰
            </button>
            <div class={s.titleGroup}>
              <img src={iconSrc} alt="" class={s.titleIcon} />
              <span class={s.titleText}>{currentPageTitle()}</span>
            </div>
          </div>
          <Show when={!showSidebarSearch()}>
            <div class={s.topBarSearch}>
              <Search />
            </div>
          </Show>
          <div class={s.topBarActions}>
            <Show
              when={address()}
              fallback={
                <button class={s.walletButton} onClick={handleConnect}>
                  Connect
                </button>
              }
            >
              <button
                class={`${s.walletButton} ${s.walletButtonConnected}`}
                onClick={handleDisconnect}
                onMouseEnter={() => setHovering(true)}
                onMouseLeave={() => setHovering(false)}
              >
                {hovering() ? "Disconnect" : truncateAddress(address()!)}
              </button>
            </Show>
          </div>
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
