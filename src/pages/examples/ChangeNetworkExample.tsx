import { createSignal, type Component, Show } from "solid-js";
import { BitcoinNetworkType } from "sats-connect";
import { InteractiveExample } from "../../components/InteractiveExample/InteractiveExample";
import * as s from "../../components/InteractiveExample/InteractiveExample.css";
import { Spinner } from "../../components/Spinner/Spinner";
import CODE from "./snippets/wallet-change-network.ts?raw";

export const ChangeNetworkExample: Component = () => {
  const [network, setNetwork] = createSignal<BitcoinNetworkType>(
    BitcoinNetworkType.Testnet,
  );
  const [result, setResult] = createSignal<string | null>(null);
  const [error, setError] = createSignal<string | null>(null);
  const [loading, setLoading] = createSignal(false);

  const handleChangeNetwork = async () => {
    setResult(null);
    setError(null);
    setLoading(true);

    try {
      const { request } = await import("sats-connect");
      const response = await request("wallet_changeNetwork", {
        name: network(),
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
      method="wallet_changeNetwork"
      title="Change Wallet Network"
      code={CODE}
    >
      <div class={s.fieldGroup}>
        <label class={s.fieldLabel}>Target network</label>
        <select
          class={s.select}
          value={network()}
          onChange={(e) =>
            setNetwork(e.currentTarget.value as BitcoinNetworkType)
          }
        >
          <option value={BitcoinNetworkType.Mainnet}>Mainnet</option>
          <option value={BitcoinNetworkType.Testnet}>Testnet</option>
          <option value={BitcoinNetworkType.Testnet4}>Testnet4</option>
          <option value={BitcoinNetworkType.Signet}>Signet</option>
          <option value={BitcoinNetworkType.Regtest}>Regtest</option>
        </select>
      </div>

      <div class={s.buttonRow}>
        <button
          class={s.button}
          onClick={handleChangeNetwork}
          disabled={loading()}
        >
          Change Network
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
