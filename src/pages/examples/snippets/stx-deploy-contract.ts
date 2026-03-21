import { request } from "sats-connect";

const response = await request("stx_deployContract", {
  name: "my-contract",
  clarityCode: `
(define-data-var counter uint u0)

(define-public (increment)
  (begin
    (var-set counter (+ (var-get counter) u1))
    (ok (var-get counter))))

(define-read-only (get-counter)
  (ok (var-get counter)))
`,
});

if (response.status === "success") {
  console.log("Transaction ID:", response.result.txid);
} else {
  console.error("Error:", response.error);
}
