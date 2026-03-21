import { createSignal, type Component, Show } from "solid-js";
import { InteractiveExample } from "../../components/InteractiveExample/InteractiveExample";
import * as s from "../../components/InteractiveExample/InteractiveExample.css";

const CODE = `import Wallet, { AddressPurpose } from 'sats-connect';

const response = await Wallet.request('wallet_connect', {
  addresses: [
    AddressPurpose.Payment,
    AddressPurpose.Ordinals,
    AddressPurpose.Stacks,
    AddressPurpose.Spark,
  ],
  message: 'My app wants to connect to your wallet!',
});

if (response.status === 'success') {
  const { addresses, id, walletType } = response.result;
  console.log('Connected! Account ID:', id);
  console.log('Addresses:', addresses);
} else {
  console.error('Connection failed:', response.error);
}`;

export const ConnectExample: Component = () => {
  const [result, setResult] = createSignal<string | null>(null);
  const [error, setError] = createSignal<string | null>(null);
  const [message, setMessage] = createSignal("My app wants to connect!");

  const handleConnect = async () => {
    setResult(null);
    setError(null);

    try {
      // @ts-ignore - sats-connect may not be installed in this docs project
      const { default: Wallet } = await import("sats-connect");
      const response = await Wallet.request("wallet_connect", {
        addresses: ["payment", "ordinals", "stacks", "spark"],
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

      <button class={s.button} onClick={handleConnect}>
        Connect Wallet
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
