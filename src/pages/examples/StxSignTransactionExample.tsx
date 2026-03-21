import { createSignal, type Component, Show } from "solid-js";
import { InteractiveExample } from "../../components/InteractiveExample/InteractiveExample";
import * as s from "../../components/InteractiveExample/InteractiveExample.css";
import { Spinner } from "../../components/Spinner/Spinner";
import CODE from "./snippets/stx-sign-transaction.ts?raw";

export const StxSignTransactionExample: Component = () => {
  const [transaction, setTransaction] = createSignal("");
  const [broadcast, setBroadcast] = createSignal(true);
  const [result, setResult] = createSignal<string | null>(null);
  const [error, setError] = createSignal<string | null>(null);
  const [loading, setLoading] = createSignal(false);

  const handleSign = async () => {
    setResult(null);
    setError(null);
    setLoading(true);

    try {
      const { request } = await import("sats-connect");
      const response = await request("stx_signTransaction", {
        transaction: transaction(),
        broadcast: broadcast(),
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
      method="stx_signTransaction"
      title="Sign Stacks Transaction"
      code={CODE}
    >
      <div class={s.fieldGroup}>
        <label class={s.fieldLabel}>Transaction (hex)</label>
        <input
          class={s.input}
          type="text"
          value={transaction()}
          onInput={(e) => setTransaction(e.currentTarget.value)}
          placeholder="0x0200000000..."
        />
      </div>

      <div class={s.fieldGroup}>
        <label class={s.fieldLabel}>
          <input
            type="checkbox"
            checked={broadcast()}
            onChange={(e) => setBroadcast(e.currentTarget.checked)}
            style={{ "margin-right": "0.5rem" }}
          />
          Broadcast after signing
        </label>
      </div>

      <div class={s.buttonRow}>
        <button
          class={s.button}
          onClick={handleSign}
          disabled={loading() || !transaction()}
        >
          Sign Transaction
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
