import { createSignal, type Component, Show } from "solid-js";
import { InteractiveExample } from "../../components/InteractiveExample/InteractiveExample";
import * as s from "../../components/InteractiveExample/InteractiveExample.css";

const CODE = `import { request } from 'sats-connect';

const response = await request('wallet_requestPermissions', undefined);

if (response.status === 'success') {
  console.log('Permissions granted:', response.result);
} else {
  console.error('Error:', response.error);
}`;

export const RequestPermissionsExample: Component = () => {
  const [result, setResult] = createSignal<string | null>(null);
  const [error, setError] = createSignal<string | null>(null);

  const handleRequest = async () => {
    setResult(null);
    setError(null);

    try {
      const { request } = await import("sats-connect");
      const response = await request("wallet_requestPermissions", undefined);

      if (response.status === "success") {
        setResult(JSON.stringify(response.result, null, 2));
      } else {
        setError(JSON.stringify(response.error, null, 2));
      }
    } catch (err) {
      setError(
        `Wallet not available. Install a compatible wallet extension to try this example.\n\n${err}`,
      );
    }
  };

  return (
    <InteractiveExample
      method="wallet_requestPermissions"
      title="Request Permissions"
      code={CODE}
    >
      <button class={s.button} onClick={handleRequest}>
        Request Permissions
      </button>

      <Show when={result()}>
        <div class={`${s.resultArea} ${s.resultSuccess}`}>{result()}</div>
      </Show>

      <Show when={error()}>
        <div class={`${s.resultArea} ${s.resultError}`}>{error()}</div>
      </Show>
    </InteractiveExample>
  );
};
