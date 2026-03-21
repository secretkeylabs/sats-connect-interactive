import { createSignal, type Component, Show } from "solid-js";
import { InteractiveExample } from "../../components/InteractiveExample/InteractiveExample";
import * as s from "../../components/InteractiveExample/InteractiveExample.css";

const CODE = `import { request, RpcErrorCode } from 'sats-connect';

const response = await request('signPsbt', {
  psbt: psbtBase64,      // Base64-encoded PSBT
  broadcast: false,       // Set true to broadcast after signing
  signInputs: {
    [address]: [0],       // Map of address to input indices to sign
  },
});

if (response.status === 'success') {
  console.log('Signed PSBT:', response.result.psbt);
  // If broadcast was true:
  // console.log('Transaction ID:', response.result.txid);
} else {
  if (response.error.code === RpcErrorCode.USER_REJECTION) {
    console.log('User cancelled the request');
  } else {
    console.error('Error:', response.error);
  }
}`;

export const SignPsbtExample: Component = () => {
  const [psbt, setPsbt] = createSignal("");
  const [broadcast, setBroadcast] = createSignal(false);
  const [result, setResult] = createSignal<string | null>(null);
  const [error, setError] = createSignal<string | null>(null);

  const handleSign = async () => {
    setResult(null);
    setError(null);

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

      <button class={s.button} onClick={handleSign} disabled={!psbt()}>
        Sign PSBT
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
