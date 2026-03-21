import { createSignal, type Component, Show } from "solid-js";
import { AddressPurpose } from "sats-connect";
import { InteractiveExample } from "../../components/InteractiveExample/InteractiveExample";
import * as s from "../../components/InteractiveExample/InteractiveExample.css";
import { Spinner } from "../../components/Spinner/Spinner";
import CODE from "./snippets/connect.ts?raw";

export const ConnectExample: Component = () => {
  const [result, setResult] = createSignal<string | null>(null);
  const [error, setError] = createSignal<string | null>(null);
  const [loading, setLoading] = createSignal(false);
  const [message, setMessage] = createSignal("My app wants to connect!");

  const handleConnect = async () => {
    setResult(null);
    setError(null);
    setLoading(true);

    try {
      const { default: Wallet } = await import("sats-connect");
      const response = await Wallet.request("wallet_connect", {
        addresses: [
          AddressPurpose.Payment,
          AddressPurpose.Ordinals,
          AddressPurpose.Stacks,
          AddressPurpose.Spark,
        ],
        message: message(),
      });

      if (response.status === "success") {
        setResult(JSON.stringify(response.result, null, 2));
      } else {
        setError(JSON.stringify(response.error, null, 2));
      }
    } catch (err) {
      setError(
        `Wallet not available. Install a compatible wallet extension (like Xverse) to try this example.\n\n${err}`,
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <InteractiveExample
      method="wallet_connect"
      title="Connect to Wallet"
      code={CODE}
    >
      <div class={s.fieldGroup}>
        <label class={s.fieldLabel}>Connection message</label>
        <input
          class={s.input}
          type="text"
          value={message()}
          onInput={(e) => setMessage(e.currentTarget.value)}
          placeholder="Optional message to display"
        />
      </div>

      <div class={s.buttonRow}>
        <button class={s.button} onClick={handleConnect} disabled={loading()}>
          Connect Wallet
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
