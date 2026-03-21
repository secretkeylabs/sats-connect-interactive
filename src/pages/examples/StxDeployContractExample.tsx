import { createSignal, type Component, Show } from "solid-js";
import { InteractiveExample } from "../../components/InteractiveExample/InteractiveExample";
import * as s from "../../components/InteractiveExample/InteractiveExample.css";
import { Spinner } from "../../components/Spinner/Spinner";
import CODE from "./snippets/stx-deploy-contract.ts?raw";

export const StxDeployContractExample: Component = () => {
  const [name, setName] = createSignal("");
  const [clarityCode, setClarityCode] = createSignal(
    `(define-data-var counter uint u0)

(define-public (increment)
  (begin
    (var-set counter (+ (var-get counter) u1))
    (ok (var-get counter))))

(define-read-only (get-counter)
  (ok (var-get counter)))`,
  );
  const [result, setResult] = createSignal<string | null>(null);
  const [error, setError] = createSignal<string | null>(null);
  const [loading, setLoading] = createSignal(false);

  const handleDeploy = async () => {
    setResult(null);
    setError(null);
    setLoading(true);

    try {
      const { request } = await import("sats-connect");
      const response = await request("stx_deployContract", {
        name: name(),
        clarityCode: clarityCode(),
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
      method="stx_deployContract"
      title="Deploy Stacks Contract"
      code={CODE}
    >
      <div class={s.fieldGroup}>
        <label class={s.fieldLabel}>Contract name</label>
        <input
          class={s.input}
          type="text"
          value={name()}
          onInput={(e) => setName(e.currentTarget.value)}
          placeholder="my-contract"
        />
      </div>

      <div class={s.fieldGroup}>
        <label class={s.fieldLabel}>Clarity code</label>
        <textarea
          class={s.input}
          value={clarityCode()}
          onInput={(e) => setClarityCode(e.currentTarget.value)}
          rows={10}
          style={{ "font-family": "var(--font-mono)", resize: "vertical" }}
        />
      </div>

      <div class={s.buttonRow}>
        <button
          class={s.button}
          onClick={handleDeploy}
          disabled={loading() || !name() || !clarityCode()}
        >
          Deploy Contract
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
