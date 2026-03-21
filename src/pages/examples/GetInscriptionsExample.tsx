import { createSignal, type Component, Show } from "solid-js";
import { InteractiveExample } from "../../components/InteractiveExample/InteractiveExample";
import * as s from "../../components/InteractiveExample/InteractiveExample.css";
import { Spinner } from "../../components/Spinner/Spinner";
import CODE from "./snippets/get-inscriptions.ts?raw";

export const GetInscriptionsExample: Component = () => {
  const [offset, setOffset] = createSignal("0");
  const [limit, setLimit] = createSignal("10");
  const [result, setResult] = createSignal<string | null>(null);
  const [error, setError] = createSignal<string | null>(null);
  const [loading, setLoading] = createSignal(false);

  const handleGetInscriptions = async () => {
    setResult(null);
    setError(null);
    setLoading(true);

    try {
      const { request } = await import("sats-connect");
      const response = await request("ord_getInscriptions", {
        offset: Number(offset()),
        limit: Number(limit()),
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
      method="ord_getInscriptions"
      title="Get Inscriptions"
      code={CODE}
    >
      <div class={s.fieldGroup}>
        <label class={s.fieldLabel}>Offset</label>
        <input
          class={s.input}
          type="number"
          value={offset()}
          onInput={(e) => setOffset(e.currentTarget.value)}
          placeholder="0"
        />
      </div>

      <div class={s.fieldGroup}>
        <label class={s.fieldLabel}>Limit</label>
        <input
          class={s.input}
          type="number"
          value={limit()}
          onInput={(e) => setLimit(e.currentTarget.value)}
          placeholder="10"
        />
      </div>

      <div class={s.buttonRow}>
        <button
          class={s.button}
          onClick={handleGetInscriptions}
          disabled={loading()}
        >
          Get Inscriptions
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
