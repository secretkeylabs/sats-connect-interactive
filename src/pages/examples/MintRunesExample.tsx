import { createSignal, type Component, Show } from "solid-js";
import { InteractiveExample } from "../../components/InteractiveExample/InteractiveExample";
import * as s from "../../components/InteractiveExample/InteractiveExample.css";
import { Spinner } from "../../components/Spinner/Spinner";
import CODE from "./snippets/runes-mint.ts?raw";

export const MintRunesExample: Component = () => {
  const [runeName, setRuneName] = createSignal("");
  const [destinationAddress, setDestinationAddress] = createSignal("");
  const [refundAddress, setRefundAddress] = createSignal("");
  const [feeRate, setFeeRate] = createSignal("10");
  const [repeats, setRepeats] = createSignal("1");
  const [result, setResult] = createSignal<string | null>(null);
  const [error, setError] = createSignal<string | null>(null);
  const [loading, setLoading] = createSignal(false);

  const handleMint = async () => {
    setResult(null);
    setError(null);
    setLoading(true);

    try {
      const { request } = await import("sats-connect");
      const response = await request("runes_mint", {
        runeName: runeName(),
        destinationAddress: destinationAddress(),
        refundAddress: refundAddress(),
        feeRate: Number(feeRate()),
        repeats: Number(repeats()),
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
    <InteractiveExample method="runes_mint" title="Mint Runes" code={CODE}>
      <div class={s.fieldGroup}>
        <label class={s.fieldLabel}>Rune name</label>
        <input
          class={s.input}
          type="text"
          value={runeName()}
          onInput={(e) => setRuneName(e.currentTarget.value)}
          placeholder="EXAMPLE•RUNE"
        />
      </div>

      <div class={s.fieldGroup}>
        <label class={s.fieldLabel}>Destination address (ordinals)</label>
        <input
          class={s.input}
          type="text"
          value={destinationAddress()}
          onInput={(e) => setDestinationAddress(e.currentTarget.value)}
          placeholder="bc1p..."
        />
      </div>

      <div class={s.fieldGroup}>
        <label class={s.fieldLabel}>Refund address (payment)</label>
        <input
          class={s.input}
          type="text"
          value={refundAddress()}
          onInput={(e) => setRefundAddress(e.currentTarget.value)}
          placeholder="bc1q..."
        />
      </div>

      <div class={s.fieldGroup}>
        <label class={s.fieldLabel}>Fee rate (sats/vB)</label>
        <input
          class={s.input}
          type="number"
          value={feeRate()}
          onInput={(e) => setFeeRate(e.currentTarget.value)}
          placeholder="10"
        />
      </div>

      <div class={s.fieldGroup}>
        <label class={s.fieldLabel}>Repeats</label>
        <input
          class={s.input}
          type="number"
          value={repeats()}
          onInput={(e) => setRepeats(e.currentTarget.value)}
          placeholder="1"
        />
      </div>

      <div class={s.buttonRow}>
        <button
          class={s.button}
          onClick={handleMint}
          disabled={
            loading() ||
            !runeName() ||
            !destinationAddress() ||
            !refundAddress() ||
            !feeRate()
          }
        >
          Mint Runes
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
