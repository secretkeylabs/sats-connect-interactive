import { Dialog } from "@ark-ui/solid";
import { A, useLocation } from "@solidjs/router";
import MiniSearch, { type SearchResult } from "minisearch";
import commandIconSvg from "../../icons/command.svg?raw";
import magnifyingGlassSvg from "../../icons/magnifying-glass.svg?raw";
import {
  For,
  Show,
  createEffect,
  createMemo,
  createSignal,
  onCleanup,
  onMount,
} from "solid-js";
import { Portal } from "solid-js/web";
import {
  searchDocuments,
  type SearchDocument,
} from "../../generated/search-documents";
import * as s from "./Search.css";

const searchEngine = new MiniSearch<SearchDocument>({
  fields: ["title", "headings", "body", "section"],
  storeFields: [
    "id",
    "title",
    "path",
    "section",
    "headings",
    "excerpt",
    "body",
  ],
  searchOptions: {
    boost: {
      title: 5,
      headings: 3,
      section: 2,
    },
    prefix: true,
    fuzzy: 0.2,
  },
});

searchEngine.addAll(searchDocuments);

type SearchHit = SearchDocument & {
  score?: number;
};

type ShortcutInfo = {
  ariaLabel: string;
  displayLabel: string;
  useCommandIcon: boolean;
};

const defaultResults = searchDocuments.slice(0, 8);

const fallbackShortcutInfo: ShortcutInfo = {
  ariaLabel: "Cmd/Ctrl K",
  displayLabel: "Cmd/Ctrl K",
  useCommandIcon: false,
};

function getShortcutInfo(): ShortcutInfo {
  if (typeof navigator === "undefined") {
    return fallbackShortcutInfo;
  }

  const navigatorWithUserAgentData = navigator as Navigator & {
    userAgentData?: { platform?: string };
  };
  const platform = [
    navigatorWithUserAgentData.userAgentData?.platform,
    navigator.platform,
    navigator.userAgent,
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

  if (!platform) {
    return fallbackShortcutInfo;
  }

  if (/(mac|iphone|ipad|ipod)/.test(platform)) {
    return {
      ariaLabel: "Command K",
      displayLabel: "K",
      useCommandIcon: true,
    };
  }

  if (/(win|linux|android|cros|chromebook)/.test(platform)) {
    return {
      ariaLabel: "Ctrl K",
      displayLabel: "Ctrl K",
      useCommandIcon: false,
    };
  }

  return fallbackShortcutInfo;
}

function isEditableTarget(target: EventTarget | null): boolean {
  if (!(target instanceof HTMLElement)) {
    return false;
  }

  const tagName = target.tagName;
  return (
    tagName === "INPUT" || tagName === "TEXTAREA" || target.isContentEditable
  );
}

function toSearchHit(result: SearchResult): SearchHit {
  return {
    id: String(result.id),
    title: String(result.title),
    path: String(result.path),
    section: String(result.section),
    headings: Array.isArray(result.headings)
      ? result.headings.map((heading) => String(heading))
      : [],
    excerpt: String(result.excerpt ?? ""),
    body: String(result.body ?? ""),
    score: result.score,
  };
}

export const Search = () => {
  const [open, setOpen] = createSignal(false);
  const [query, setQuery] = createSignal("");
  let inputRef: HTMLInputElement | undefined;

  const location = useLocation();
  const shortcutInfo = createMemo(() => getShortcutInfo());

  createEffect(() => {
    location.pathname;
    setOpen(false);
  });

  createEffect(() => {
    if (!open()) {
      setQuery("");
      return;
    }

    requestAnimationFrame(() => inputRef?.focus());
  });

  onMount(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        if (!open() && isEditableTarget(event.target)) {
          return;
        }

        event.preventDefault();
        setOpen(true);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    onCleanup(() => window.removeEventListener("keydown", handleKeyDown));
  });

  const trimmedQuery = createMemo(() => query().trim());

  const results = createMemo<SearchHit[]>(() => {
    if (!trimmedQuery()) {
      return defaultResults;
    }

    return searchEngine
      .search(trimmedQuery(), {
        prefix: true,
        fuzzy: 0.2,
        boost: {
          title: 5,
          headings: 3,
          section: 2,
        },
      })
      .map((result) => toSearchHit(result));
  });

  const resultSummary = createMemo(() => {
    if (!trimmedQuery()) {
      return `Browse ${searchDocuments.length} documentation pages`;
    }

    return `${results().length} result${results().length === 1 ? "" : "s"} for “${trimmedQuery()}”`;
  });

  return (
    <>
      <button
        type="button"
        class={s.searchTrigger}
        onClick={() => setOpen(true)}
        aria-label={`Open documentation search (${shortcutInfo().ariaLabel})`}
      >
        <span class={s.triggerLabel}>
          <span class={s.triggerIcon} innerHTML={magnifyingGlassSvg} />
          <span class={s.triggerText}>Search documentation</span>
        </span>
        <span class={s.triggerShortcut}>
          <Show
            when={shortcutInfo().useCommandIcon}
            fallback={shortcutInfo().displayLabel}
          >
            <span class={s.triggerShortcutWithIcon} aria-hidden="true">
              <span class={s.triggerShortcutIcon} innerHTML={commandIconSvg} />
              <span>{shortcutInfo().displayLabel}</span>
            </span>
          </Show>
        </span>
      </button>

      <Dialog.Root
        open={open()}
        onOpenChange={(details) => setOpen(details.open)}
      >
        <Portal>
          <Dialog.Backdrop class={s.backdrop} />
          <Dialog.Positioner class={s.positioner}>
            <Dialog.Content class={s.content}>
              <div class={s.header}>
                <div class={s.headerText}>
                  <Dialog.Title class={s.title}>Search the docs</Dialog.Title>
                  <Dialog.Description class={s.description}>
                    Search methods, guides, and API reference pages in real
                    time.
                  </Dialog.Description>
                </div>
                <Dialog.CloseTrigger
                  class={s.closeButton}
                  aria-label="Close search"
                >
                  Esc
                </Dialog.CloseTrigger>
              </div>

              <div class={s.body}>
                <div class={s.inputRow}>
                  <span class={s.inputIcon} innerHTML={magnifyingGlassSvg} />
                  <input
                    ref={inputRef}
                    type="text"
                    value={query()}
                    onInput={(event) => setQuery(event.currentTarget.value)}
                    class={s.input}
                    placeholder="Search methods, wallets, examples, and guides"
                    aria-label="Search documentation"
                  />
                </div>

                <div class={s.resultsSummary}>
                  <span class={s.resultsCount}>{resultSummary()}</span>
                  <span class={s.subtle}>Press Esc to close</span>
                </div>

                <div class={s.resultsPanel}>
                  <Show
                    when={results().length > 0}
                    fallback={
                      <div class={s.emptyState}>
                        <div class={s.emptyTitle}>No matching pages</div>
                        <div class={s.emptyBody}>
                          Try a method name, wallet capability, or a keyword
                          from the response fields.
                        </div>
                      </div>
                    }
                  >
                    <For each={results()}>
                      {(result) => (
                        <A
                          href={result.path}
                          class={s.resultLink}
                          onClick={() => setOpen(false)}
                        >
                          <div class={s.resultHeader}>
                            <span class={s.resultTitle}>{result.title}</span>
                            <span class={s.resultSection}>
                              {result.section}
                            </span>
                          </div>
                          <div class={s.resultExcerpt}>{result.excerpt}</div>
                          <div class={s.resultMeta}>
                            <span>{result.path}</span>
                            <Show when={result.headings[0]}>
                              <span>•</span>
                              <span class={s.resultHeading}>
                                {result.headings[0]}
                              </span>
                            </Show>
                          </div>
                        </A>
                      )}
                    </For>
                  </Show>
                </div>
              </div>
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>
    </>
  );
};
