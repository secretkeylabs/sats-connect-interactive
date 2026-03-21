import { createSignal, type Component, Show } from "solid-js";
import { InteractiveExample } from "../../components/InteractiveExample/InteractiveExample";
import * as s from "../../components/InteractiveExample/InteractiveExample.css";

const CODE = `import { request } from 'sats-connect';

const response = await request('spark_getBalance', null);

if (response.status === 'success') {
  console.log('Spark Balance:', response.result);
} else {
  console.error('Error:', response.error);
}`;

export const SparkGetBalanceExample: Component = () => {
  const [result, setResult] = createSignal<string | null>(null);
  const [error, setError] = createSignal<string | null>(null);

  const handleGetBalance = async () => {
    setResult(null);
    setError(null);

    try {
      const { request } = await import("sats-connect");
      const response = await request("spark_getBalance", null);

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
      method="spark_getBalance"
      title="Get Spark Balance"
      code={CODE}
    >
      <button class={s.button} onClick={handleGetBalance}>
        Get Spark Balance
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
