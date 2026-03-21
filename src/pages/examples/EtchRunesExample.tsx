import { createSignal, type Component, Show } from "solid-js";
import { InteractiveExample } from "../../components/InteractiveExample/InteractiveExample";
import * as s from "../../components/InteractiveExample/InteractiveExample.css";
import { Spinner } from "../../components/Spinner/Spinner";
import CODE from "./snippets/runes-etch.ts?raw";

export const EtchRunesExample: Component = () => {
  const [runeName, setRuneName] = createSignal("");
  const [symbol, setSymbol] = createSignal("");
  const [destinationAddress, setDestinationAddress] = createSignal("");
  const [refundAddress, setRefundAddress] = createSignal("");
  const [feeRate, setFeeRate] = createSignal("10");
  const [amount, setAmount] = createSignal("");
  const [cap, setCap] = createSignal("");
  const [result, setResult] = createSignal<string | null>(null);
  const [error, setError] = createSignal<string | null>(null);
  const [loading, setLoading] = createSignal(false);

  const handleEtch = async () => {
    setResult(null);
    setError(null);
    setLoading(true);

    try {
      const { request } = await import("sats-connect");
      const response = await request("runes_etch", {
        runeName: runeName(),
        isMintable: true,
        destinationAddress: destinationAddress(),
        refundAddress: refundAddress(),
        feeRate: Number(feeRate()),
        ...(symbol() ? { symbol: symbol() } : {}),
        ...(amount() || cap()
          ? { terms: { amount: amount() || "0", cap: cap() || "0" } }
          : {}),
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
    <InteractiveExample method="runes_etch" title="Etch Runes" code={CODE}>
      <div class={s.fieldGroup}>
        <label class={s.fieldLabel}>Rune name</label>
        <input
          class={s.input}
          type="text"
          value={runeName()}
          onInput={(e) => setRuneName(e.currentTarget.value)}
          placeholder="MY•NEW•RUNE"
        />
      </div>

      <div class={s.fieldGroup}>
        <label class={s.fieldLabel}>Symbol (optional)</label>
        <input
          class={s.input}
          type="text"
          value={symbol()}
          onInput={(e) => setSymbol(e.currentTarget.value)}
          placeholder="R"
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
        <label class={s.fieldLabel}>Mint amount per tx (optional)</label>
        <input
          class={s.input}
          type="text"
          value={amount()}
          onInput={(e) => setAmount(e.currentTarget.value)}
          placeholder="1000"
        />
      </div>

      <div class={s.fieldGroup}>
        <label class={s.fieldLabel}>Mint cap (optional)</label>
        <input
          class={s.input}
          type="text"
          value={cap()}
          onInput={(e) => setCap(e.currentTarget.value)}
          placeholder="100000"
        />
      </div>

      <div class={s.buttonRow}>
        <button
          class={s.button}
          onClick={handleEtch}
          disabled={
            loading() ||
            !runeName() ||
            !destinationAddress() ||
            !refundAddress() ||
            !feeRate()
          }
        >
          Etch Rune
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
