import { createSignal, type Component, Show } from "solid-js";
import { AddressPurpose } from "sats-connect";
import { InteractiveExample } from "../../components/InteractiveExample/InteractiveExample";
import * as s from "../../components/InteractiveExample/InteractiveExample.css";
import { Spinner } from "../../components/Spinner/Spinner";
import CODE from "./snippets/get-addresses.ts?raw";

export const GetAddressesExample: Component = () => {
  const [result, setResult] = createSignal<string | null>(null);
  const [error, setError] = createSignal<string | null>(null);
  const [loading, setLoading] = createSignal(false);
  const [message, setMessage] = createSignal("");

  const handleGetAddresses = async () => {
    setResult(null);
    setError(null);
    setLoading(true);

    try {
      const { request } = await import("sats-connect");
      const response = await request("getAddresses", {
        purposes: [
          AddressPurpose.Payment,
          AddressPurpose.Ordinals,
          AddressPurpose.Stacks,
        ],
        ...(message() ? { message: message() } : {}),
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
    <InteractiveExample method="getAddresses" title="Get Addresses" code={CODE}>
      <div class={s.fieldGroup}>
        <label class={s.fieldLabel}>Message (optional)</label>
        <input
          class={s.input}
          type="text"
          value={message()}
          onInput={(e) => setMessage(e.currentTarget.value)}
          placeholder="Provide your addresses"
        />
      </div>

      <div class={s.buttonRow}>
        <button
          class={s.button}
          onClick={handleGetAddresses}
          disabled={loading()}
        >
          Get Addresses
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
