import { createSignal, type Component, Show } from "solid-js";
import { InteractiveExample } from "../../components/InteractiveExample/InteractiveExample";
import * as s from "../../components/InteractiveExample/InteractiveExample.css";
import { Spinner } from "../../components/Spinner/Spinner";
import CODE from "./snippets/send-inscriptions.ts?raw";

export const SendInscriptionsExample: Component = () => {
  const [address, setAddress] = createSignal("");
  const [inscriptionId, setInscriptionId] = createSignal("");
  const [result, setResult] = createSignal<string | null>(null);
  const [error, setError] = createSignal<string | null>(null);
  const [loading, setLoading] = createSignal(false);

  const handleSend = async () => {
    setResult(null);
    setError(null);
    setLoading(true);

    try {
      const { request } = await import("sats-connect");
      const response = await request("ord_sendInscriptions", {
        transfers: [
          {
            address: address(),
            inscriptionId: inscriptionId(),
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
      method="ord_sendInscriptions"
      title="Send Inscriptions"
      code={CODE}
    >
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

      <div class={s.fieldGroup}>
        <label class={s.fieldLabel}>Inscription ID</label>
        <input
          class={s.input}
          type="text"
          value={inscriptionId()}
          onInput={(e) => setInscriptionId(e.currentTarget.value)}
          placeholder="abc123...i0"
        />
      </div>

      <div class={s.buttonRow}>
        <button
          class={s.button}
          onClick={handleSend}
          disabled={loading() || !address() || !inscriptionId()}
        >
          Send Inscription
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
