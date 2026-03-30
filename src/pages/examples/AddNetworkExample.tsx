import { createSignal, type Component, Show } from "solid-js";
import {
  BitcoinNetworkType,
  StacksNetworkType,
  StarknetNetworkType,
} from "sats-connect";
import { InteractiveExample } from "../../components/InteractiveExample/InteractiveExample";
import * as s from "../../components/InteractiveExample/InteractiveExample.css";
import { Spinner } from "../../components/Spinner/Spinner";
import CODE from "./snippets/wallet-add-network.ts?raw";

type NetworkChain = "bitcoin" | "stacks" | "starknet";

export const AddNetworkExample: Component = () => {
  const [chain, setChain] = createSignal<NetworkChain>("bitcoin");
  const [networkType, setNetworkType] = createSignal<string>(
    BitcoinNetworkType.Regtest,
  );
  const [name, setName] = createSignal("Local Regtest");
  const [rpcUrl, setRpcUrl] = createSignal("http://127.0.0.1:3002");
  const [blockExplorerUrl, setBlockExplorerUrl] = createSignal(
    "http://127.0.0.1:3000",
  );
  const [shouldSwitch, setShouldSwitch] = createSignal("true");
  const [result, setResult] = createSignal<string | null>(null);
  const [error, setError] = createSignal<string | null>(null);
  const [loading, setLoading] = createSignal(false);

  const syncDefaults = (nextChain: NetworkChain) => {
    setChain(nextChain);

    if (nextChain === "bitcoin") {
      setNetworkType(BitcoinNetworkType.Regtest);
      setName("Local Regtest");
      setRpcUrl("http://127.0.0.1:3002");
      setBlockExplorerUrl("http://127.0.0.1:3000");
      return;
    }

    if (nextChain === "stacks") {
      setNetworkType(StacksNetworkType.Testnet);
      setName("Local Stacks Testnet");
      setRpcUrl("http://127.0.0.1:3999");
      setBlockExplorerUrl("http://127.0.0.1:8000");
      return;
    }

    setNetworkType(StarknetNetworkType.Sepolia);
    setName("Local Starknet Sepolia");
    setRpcUrl("http://127.0.0.1:5050");
    setBlockExplorerUrl("http://127.0.0.1:3001");
  };

  const handleAddNetwork = async () => {
    setResult(null);
    setError(null);
    setLoading(true);

    try {
      const { request } = await import("sats-connect");

      const response =
        chain() === "bitcoin"
          ? await request("wallet_addNetwork", {
              chain: "bitcoin",
              type: networkType() as BitcoinNetworkType,
              name: name(),
              rpcUrl: rpcUrl(),
              blockExplorerUrl: blockExplorerUrl() || undefined,
              switch: shouldSwitch() === "true",
            })
          : chain() === "stacks"
            ? await request("wallet_addNetwork", {
                chain: "stacks",
                type: networkType() as StacksNetworkType,
                name: name(),
                rpcUrl: rpcUrl(),
                blockExplorerUrl: blockExplorerUrl() || undefined,
                switch: shouldSwitch() === "true",
              })
            : await request("wallet_addNetwork", {
                chain: "starknet",
                type: networkType() as StarknetNetworkType,
                name: name(),
                rpcUrl: rpcUrl(),
                blockExplorerUrl: blockExplorerUrl() || undefined,
                switch: shouldSwitch() === "true",
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
      method="wallet_addNetwork"
      title="Add Custom Network"
      code={CODE}
    >
      <div class={s.fieldGroup}>
        <label class={s.fieldLabel}>Chain</label>
        <select
          class={s.select}
          value={chain()}
          onChange={(e) => syncDefaults(e.currentTarget.value as NetworkChain)}
        >
          <option value="bitcoin">Bitcoin</option>
          <option value="stacks">Stacks</option>
          <option value="starknet">Starknet</option>
        </select>
      </div>

      <div class={s.fieldGroup}>
        <label class={s.fieldLabel}>Network type</label>
        <select
          class={s.select}
          value={networkType()}
          onChange={(e) => setNetworkType(e.currentTarget.value)}
        >
          <Show when={chain() === "bitcoin"}>
            <>
              <option value={BitcoinNetworkType.Mainnet}>Mainnet</option>
              <option value={BitcoinNetworkType.Testnet}>Testnet</option>
              <option value={BitcoinNetworkType.Testnet4}>Testnet4</option>
              <option value={BitcoinNetworkType.Signet}>Signet</option>
              <option value={BitcoinNetworkType.Regtest}>Regtest</option>
            </>
          </Show>
          <Show when={chain() === "stacks"}>
            <>
              <option value={StacksNetworkType.Mainnet}>mainnet</option>
              <option value={StacksNetworkType.Testnet}>testnet</option>
            </>
          </Show>
          <Show when={chain() === "starknet"}>
            <>
              <option value={StarknetNetworkType.Mainnet}>mainnet</option>
              <option value={StarknetNetworkType.Sepolia}>sepolia</option>
            </>
          </Show>
        </select>
      </div>

      <div class={s.fieldGroup}>
        <label class={s.fieldLabel}>Display name</label>
        <input
          class={s.input}
          type="text"
          value={name()}
          onInput={(e) => setName(e.currentTarget.value)}
          placeholder="My custom network"
        />
      </div>

      <div class={s.fieldGroup}>
        <label class={s.fieldLabel}>RPC URL</label>
        <input
          class={s.input}
          type="text"
          value={rpcUrl()}
          onInput={(e) => setRpcUrl(e.currentTarget.value)}
          placeholder="http://127.0.0.1:3002"
        />
      </div>

      <div class={s.fieldGroup}>
        <label class={s.fieldLabel}>Block explorer URL</label>
        <input
          class={s.input}
          type="text"
          value={blockExplorerUrl()}
          onInput={(e) => setBlockExplorerUrl(e.currentTarget.value)}
          placeholder="Optional"
        />
      </div>

      <div class={s.fieldGroup}>
        <label class={s.fieldLabel}>Switch immediately</label>
        <select
          class={s.select}
          value={shouldSwitch()}
          onChange={(e) => setShouldSwitch(e.currentTarget.value)}
        >
          <option value="true">true</option>
          <option value="false">false</option>
        </select>
      </div>

      <div class={s.buttonRow}>
        <button
          class={s.button}
          onClick={handleAddNetwork}
          disabled={loading() || !name() || !rpcUrl()}
        >
          Add Network
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
