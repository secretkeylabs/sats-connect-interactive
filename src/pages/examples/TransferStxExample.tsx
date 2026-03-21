import { createSignal, type Component, Show } from "solid-js";
import { InteractiveExample } from "../../components/InteractiveExample/InteractiveExample";
import * as s from "../../components/InteractiveExample/InteractiveExample.css";
import { Spinner } from "../../components/Spinner/Spinner";
import CODE from "./snippets/transfer-stx.ts?raw";

export const TransferStxExample: Component = () => {
  const [address, setAddress] = createSignal("");
  const [amount, setAmount] = createSignal("");
  const [memo, setMemo] = createSignal("");
  const [result, setResult] = createSignal<string | null>(null);
  const [error, setError] = createSignal<string | null>(null);
  const [loading, setLoading] = createSignal(false);

  const handleSend = async () => {
    setResult(null);
    setError(null);
    setLoading(true);

    try {
      const { request } = await import("sats-connect");
      const response = await request("stx_transferStx", {
        recipient: address(),
        amount: Number(amount()),
        memo: memo() || undefined,
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
    <InteractiveExample method="stx_transferStx" title="Send STX" code={CODE}>
      <div class={s.fieldGroup}>
        <label class={s.fieldLabel}>Recipient address</label>
        <input
          class={s.input}
          type="text"
          value={address()}
          onInput={(e) => setAddress(e.currentTarget.value)}
          placeholder="SP2J6ZY48GV1EZ5V2V5RB9MP66SW86PYKKNRV9EJ7"
        />
      </div>

      <div class={s.fieldGroup}>
        <label class={s.fieldLabel}>Amount (uSTX)</label>
        <input
          class={s.input}
          type="number"
          value={amount()}
          onInput={(e) => setAmount(e.currentTarget.value)}
          placeholder="1000000"
        />
      </div>

      <div class={s.fieldGroup}>
        <label class={s.fieldLabel}>Memo (optional)</label>
        <input
          class={s.input}
          type="text"
          value={memo()}
          onInput={(e) => setMemo(e.currentTarget.value)}
          placeholder="Optional memo"
        />
      </div>

      <div class={s.buttonRow}>
        <button
          class={s.button}
          onClick={handleSend}
          disabled={loading() || !address() || !amount()}
        >
          Send STX
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
