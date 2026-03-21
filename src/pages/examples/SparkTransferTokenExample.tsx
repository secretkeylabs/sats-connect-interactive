import { createSignal, type Component, Show } from "solid-js";
import { InteractiveExample } from "../../components/InteractiveExample/InteractiveExample";
import * as s from "../../components/InteractiveExample/InteractiveExample.css";
import { Spinner } from "../../components/Spinner/Spinner";
import CODE from "./snippets/spark-transfer-token.ts?raw";

export const SparkTransferTokenExample: Component = () => {
  const [tokenIdentifier, setTokenIdentifier] = createSignal("");
  const [tokenAmount, setTokenAmount] = createSignal("");
  const [receiverAddress, setReceiverAddress] = createSignal("");
  const [result, setResult] = createSignal<string | null>(null);
  const [error, setError] = createSignal<string | null>(null);
  const [loading, setLoading] = createSignal(false);

  const handleTransfer = async () => {
    setResult(null);
    setError(null);
    setLoading(true);

    try {
      const { request } = await import("sats-connect");
      const response = await request("spark_transferToken", {
        tokenIdentifier: tokenIdentifier(),
        tokenAmount: Number(tokenAmount()),
        receiverSparkAddress: receiverAddress(),
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
      method="spark_transferToken"
      title="Transfer Spark Token"
      code={CODE}
    >
      <div class={s.fieldGroup}>
        <label class={s.fieldLabel}>Token identifier</label>
        <input
          class={s.input}
          type="text"
          value={tokenIdentifier()}
          onInput={(e) => setTokenIdentifier(e.currentTarget.value)}
          placeholder="bech32m token ID"
        />
      </div>

      <div class={s.fieldGroup}>
        <label class={s.fieldLabel}>Amount</label>
        <input
          class={s.input}
          type="number"
          value={tokenAmount()}
          onInput={(e) => setTokenAmount(e.currentTarget.value)}
          placeholder="100"
        />
      </div>

      <div class={s.fieldGroup}>
        <label class={s.fieldLabel}>Receiver Spark address</label>
        <input
          class={s.input}
          type="text"
          value={receiverAddress()}
          onInput={(e) => setReceiverAddress(e.currentTarget.value)}
          placeholder="sp1q..."
        />
      </div>

      <div class={s.buttonRow}>
        <button
          class={s.button}
          onClick={handleTransfer}
          disabled={
            loading() ||
            !tokenIdentifier() ||
            !tokenAmount() ||
            !receiverAddress()
          }
        >
          Transfer Token
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
