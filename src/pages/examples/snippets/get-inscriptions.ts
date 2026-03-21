import { request } from "sats-connect";

const response = await request("ord_getInscriptions", {
  offset: 0,
  limit: 10,
});

if (response.status === "success") {
  console.log("Total:", response.result.total);
  for (const inscription of response.result.inscriptions) {
    console.log(inscription.inscriptionId);
  }
} else {
  console.error("Error:", response.error);
}
