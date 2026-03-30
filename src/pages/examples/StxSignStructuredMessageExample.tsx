import { createSignal, type Component, Show } from "solid-js";
import { InteractiveExample } from "../../components/InteractiveExample/InteractiveExample";
import * as s from "../../components/InteractiveExample/InteractiveExample.css";
import { Spinner } from "../../components/Spinner/Spinner";
import CODE from "./snippets/stx-sign-structured-message.ts?raw";

export const StxSignStructuredMessageExample: Component = () => {
  const [domain, setDomain] = createSignal("app.example.com");
  const [message, setMessage] = createSignal(
    JSON.stringify({ action: "login", nonce: "1234" }),
  );
  const [publicKey, setPublicKey] = createSignal("");
  const [result, setResult] = createSignal<string | null>(null);
  const [error, setError] = createSignal<string | null>(null);
  const [loading, setLoading] = createSignal(false);

  const handleSign = async () => {
    setResult(null);
    setError(null);
    setLoading(true);

    try {
      const { request } = await import("sats-connect");
      const response = await request("stx_signStructuredMessage", {
        domain: domain(),
        message: message(),
        ...(publicKey().trim() ? { publicKey: publicKey().trim() } : {}),
      });

      if (response.status === "success") {
        setResult(JSON.stringify(response.result, null, 2));
      } else {
        setError(JSON.stringify(response.error, null, 2));
      }
    } catch (err) {
      setError(
        `Wallet not available. Install a compatible wallet extension to try this example.\n\n${err}`,
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <InteractiveExample
      method="stx_signStructuredMessage"
      title="Sign Stacks Structured Message"
      code={CODE}
    >
      <div class={s.fieldGroup}>
        <label class={s.fieldLabel}>Domain</label>
        <input
          class={s.input}
          type="text"
          value={domain()}
          onInput={(e) => setDomain(e.currentTarget.value)}
          placeholder="app.example.com"
        />
      </div>

      <div class={s.fieldGroup}>
        <label class={s.fieldLabel}>Message</label>
        <input
          class={s.input}
          type="text"
          value={message()}
          onInput={(e) => setMessage(e.currentTarget.value)}
          placeholder='{"action":"login"}'
        />
      </div>

      <div class={s.fieldGroup}>
        <label class={s.fieldLabel}>Public key (optional)</label>
        <input
          class={s.input}
          type="text"
          value={publicKey()}
          onInput={(e) => setPublicKey(e.currentTarget.value)}
          placeholder="Optional"
        />
      </div>

      <div class={s.buttonRow}>
        <button
          class={s.button}
          onClick={handleSign}
          disabled={loading() || !domain() || !message()}
        >
          Sign Structured Message
        </button>
        <Show when={loading()}>
          <Spinner />
        </Show>
      </div>

      <Show when={result()}>
        <div class={`${s.resultArea} ${s.resultSuccess}`}>{result()}</div>
      </Show>

      <Show when={error()}>
        <div class={`${s.resultArea} ${s.resultError}`}>{error()}</div>
      </Show>
    </InteractiveExample>
  );
};
