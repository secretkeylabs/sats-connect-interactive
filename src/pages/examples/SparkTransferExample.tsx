import { createSignal, type Component, Show } from "solid-js";
import { InteractiveExample } from "../../components/InteractiveExample/InteractiveExample";
import * as s from "../../components/InteractiveExample/InteractiveExample.css";

const CODE = `import { request, RpcErrorCode } from 'sats-connect';

const response = await request('spark_transfer', {
  recipients: [{
    address: recipientSparkAddress,
    amount: amountInSats,
  }],
});

if (response.status === 'success') {
  console.log('Transfer result:', response.result);
} else {
  if (response.error.code === RpcErrorCode.USER_REJECTION) {
    console.log('User cancelled the request');
  } else {
    console.error('Error:', response.error);
  }
}`;

export const SparkTransferExample: Component = () => {
  const [address, setAddress] = createSignal("");
  const [amount, setAmount] = createSignal("");
  const [result, setResult] = createSignal<string | null>(null);
  const [error, setError] = createSignal<string | null>(null);

  const handleTransfer = async () => {
    setResult(null);
    setError(null);

    try {
      const { request } = await import("sats-connect");
      const response = await request("spark_transfer", {
        recipients: [
          {
            address: address(),
            amount: Number(amount()),
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
    }
  };

  return (
    <InteractiveExample
      method="spark_transfer"
      title="Spark Transfer"
      code={CODE}
    >
      <div class={s.fieldGroup}>
        <label class={s.fieldLabel}>Recipient Spark address</label>
        <input
          class={s.input}
          type="text"
          value={address()}
          onInput={(e) => setAddress(e.currentTarget.value)}
          placeholder="Spark address"
        />
      </div>

      <div class={s.fieldGroup}>
        <label class={s.fieldLabel}>Amount (sats)</label>
        <input
          class={s.input}
          type="number"
          value={amount()}
          onInput={(e) => setAmount(e.currentTarget.value)}
          placeholder="1000"
        />
      </div>

      <button
        class={s.button}
        onClick={handleTransfer}
        disabled={!address() || !amount()}
      >
        Transfer
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
