import { createSignal, type Component, Show } from "solid-js";
import { InteractiveExample } from "../../components/InteractiveExample/InteractiveExample";
import * as s from "../../components/InteractiveExample/InteractiveExample.css";
import CODE from "./snippets/sign-message.ts?raw";

export const SignMessageExample: Component = () => {
  const [address, setAddress] = createSignal("");
  const [message, setMessage] = createSignal("Hello, Bitcoin!");
  const [protocol, setProtocol] = createSignal("ECDSA");
  const [result, setResult] = createSignal<string | null>(null);
  const [error, setError] = createSignal<string | null>(null);

  const handleSign = async () => {
    setResult(null);
    setError(null);

    try {
      const { request } = await import("sats-connect");
      const response = await request("signMessage", {
        address: address(),
        message: message(),
        protocol: protocol() as "ECDSA" | "BIP322",
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
    <InteractiveExample method="signMessage" title="Sign a Message" code={CODE}>
      <div class={s.fieldGroup}>
        <label class={s.fieldLabel}>Bitcoin address</label>
        <input
          class={s.input}
          type="text"
          value={address()}
          onInput={(e) => setAddress(e.currentTarget.value)}
          placeholder="Your Bitcoin address"
        />
      </div>

      <div class={s.fieldGroup}>
        <label class={s.fieldLabel}>Message</label>
        <input
          class={s.input}
          type="text"
          value={message()}
          onInput={(e) => setMessage(e.currentTarget.value)}
          placeholder="Message to sign"
        />
      </div>

      <div class={s.fieldGroup}>
        <label class={s.fieldLabel}>Protocol</label>
        <select
          class={s.select}
          value={protocol()}
          onChange={(e) => setProtocol(e.currentTarget.value)}
        >
          <option value="ECDSA">ECDSA</option>
          <option value="BIP322">BIP322</option>
        </select>
      </div>

      <button
        class={s.button}
        onClick={handleSign}
        disabled={!address() || !message()}
      >
        Sign Message
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
