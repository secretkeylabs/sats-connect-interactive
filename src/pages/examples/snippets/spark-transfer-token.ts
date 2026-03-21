import { request } from "sats-connect";

const response = await request("spark_transferToken", {
  tokenIdentifier: "bech32m_token_id_here",
  tokenAmount: 100,
  receiverSparkAddress: "sp1q...",
});

if (response.status === "success") {
  console.log("Transfer ID:", response.result.id);
} else {
  console.error("Error:", response.error);
}
