import { createSignal, type Component, Show } from "solid-js";
import { InteractiveExample } from "../../components/InteractiveExample/InteractiveExample";
import * as s from "../../components/InteractiveExample/InteractiveExample.css";
import { Spinner } from "../../components/Spinner/Spinner";
import CODE from "./snippets/sign-psbt.ts?raw";

export const SignPsbtExample: Component = () => {
  const [psbt, setPsbt] = createSignal("");
  const [broadcast, setBroadcast] = createSignal(false);
  const [result, setResult] = createSignal<string | null>(null);
  const [error, setError] = createSignal<string | null>(null);
  const [loading, setLoading] = createSignal(false);

  const handleSign = async () => {
    setResult(null);
    setError(null);
    setLoading(true);

    try {
      const { request } = await import("sats-connect");
      const response = await request("signPsbt", {
        psbt: psbt(),
        broadcast: broadcast(),
        signInputs: {},
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
    <InteractiveExample method="signPsbt" title="Sign PSBT" code={CODE}>
      <div class={s.fieldGroup}>
        <label class={s.fieldLabel}>PSBT (Base64)</label>
        <input
          class={s.input}
          type="text"
          value={psbt()}
          onInput={(e) => setPsbt(e.currentTarget.value)}
          placeholder="cHNidP8BAH..."
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
          disabled={loading() || !psbt()}
        >
          Sign PSBT
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
