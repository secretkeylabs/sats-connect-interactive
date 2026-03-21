import { createSignal, type Component, Show } from "solid-js";
import { InteractiveExample } from "../../components/InteractiveExample/InteractiveExample";
import * as s from "../../components/InteractiveExample/InteractiveExample.css";
import { Spinner } from "../../components/Spinner/Spinner";
import CODE from "./snippets/runes-transfer.ts?raw";

export const TransferRunesExample: Component = () => {
  const [runeName, setRuneName] = createSignal("");
  const [amount, setAmount] = createSignal("");
  const [address, setAddress] = createSignal("");
  const [result, setResult] = createSignal<string | null>(null);
  const [error, setError] = createSignal<string | null>(null);
  const [loading, setLoading] = createSignal(false);

  const handleTransfer = async () => {
    setResult(null);
    setError(null);
    setLoading(true);

    try {
      const { request } = await import("sats-connect");
      const response = await request("runes_transfer", {
        recipients: [
          {
            runeName: runeName(),
            amount: amount(),
            address: address(),
          },
        ],
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
      method="runes_transfer"
      title="Transfer Runes"
      code={CODE}
    >
      <div class={s.fieldGroup}>
        <label class={s.fieldLabel}>Rune name</label>
        <input
          class={s.input}
          type="text"
          value={runeName()}
          onInput={(e) => setRuneName(e.currentTarget.value)}
          placeholder="EXAMPLE•RUNE"
        />
      </div>

      <div class={s.fieldGroup}>
        <label class={s.fieldLabel}>Amount</label>
        <input
          class={s.input}
          type="text"
          value={amount()}
          onInput={(e) => setAmount(e.currentTarget.value)}
          placeholder="100"
        />
      </div>

      <div class={s.fieldGroup}>
        <label class={s.fieldLabel}>Recipient address</label>
        <input
          class={s.input}
          type="text"
          value={address()}
          onInput={(e) => setAddress(e.currentTarget.value)}
          placeholder="bc1q..."
        />
      </div>

      <div class={s.buttonRow}>
        <button
          class={s.button}
          onClick={handleTransfer}
          disabled={loading() || !runeName() || !amount() || !address()}
        >
          Transfer Runes
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
