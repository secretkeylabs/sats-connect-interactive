import { createSignal, type Component, Show } from "solid-js";
import { InteractiveExample } from "../../components/InteractiveExample/InteractiveExample";
import * as s from "../../components/InteractiveExample/InteractiveExample.css";
import { Spinner } from "../../components/Spinner/Spinner";
import CODE from "./snippets/stx-call-contract.ts?raw";

export const StxCallContractExample: Component = () => {
  const [contract, setContract] = createSignal("");
  const [functionName, setFunctionName] = createSignal("");
  const [result, setResult] = createSignal<string | null>(null);
  const [error, setError] = createSignal<string | null>(null);
  const [loading, setLoading] = createSignal(false);

  const handleCall = async () => {
    setResult(null);
    setError(null);
    setLoading(true);

    try {
      const { request } = await import("sats-connect");
      const response = await request("stx_callContract", {
        contract: contract(),
        functionName: functionName(),
        arguments: [],
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
      method="stx_callContract"
      title="Call Stacks Contract"
      code={CODE}
    >
      <div class={s.fieldGroup}>
        <label class={s.fieldLabel}>Contract principal</label>
        <input
          class={s.input}
          type="text"
          value={contract()}
          onInput={(e) => setContract(e.currentTarget.value)}
          placeholder="SP000000000000000000002Q6VF78.pox-4"
        />
      </div>

      <div class={s.fieldGroup}>
        <label class={s.fieldLabel}>Function name</label>
        <input
          class={s.input}
          type="text"
          value={functionName()}
          onInput={(e) => setFunctionName(e.currentTarget.value)}
          placeholder="get-stacker-info"
        />
      </div>

      <div class={s.buttonRow}>
        <button
          class={s.button}
          onClick={handleCall}
          disabled={loading() || !contract() || !functionName()}
        >
          Call Contract
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
