import { createSignal, type Component, Show } from "solid-js";
import { InteractiveExample } from "../../components/InteractiveExample/InteractiveExample";
import * as s from "../../components/InteractiveExample/InteractiveExample.css";

const CODE = `import { request } from 'sats-connect';

const response = await request('wallet_getAccount', undefined);

if (response.status === 'success') {
  const { id, addresses, walletType } = response.result;
  console.log('Account ID:', id);
  console.log('Wallet Type:', walletType);
  console.log('Addresses:', addresses);
} else {
  console.error('Error:', response.error);
}`;

export const GetAccountExample: Component = () => {
  const [result, setResult] = createSignal<string | null>(null);
  const [error, setError] = createSignal<string | null>(null);

  const handleGetAccount = async () => {
    setResult(null);
    setError(null);

    try {
      const { request } = await import("sats-connect");
      const response = await request("wallet_getAccount", undefined);

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
      method="wallet_getAccount"
      title="Get Account Info"
      code={CODE}
    >
      <button class={s.button} onClick={handleGetAccount}>
        Get Account
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
