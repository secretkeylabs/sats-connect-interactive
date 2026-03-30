import { RpcErrorCode, request } from "sats-connect";

const response = await request("getBalance", null);

if (response.status === "success") {
  console.log("Balance:", response.result.total);
} else {
  if (response.error.code !== RpcErrorCode.ACCESS_DENIED) {
    throw new Error("Failed to get balance.", { cause: response.error });
  }

  const permissionResponse = await request(
    "wallet_requestPermissions",
    undefined,
  );

  if (permissionResponse.status === "error") {
    throw new Error("User declined connection.", {
      cause: permissionResponse.error,
    });
  }

  const retryResponse = await request("getBalance", null);

  if (retryResponse.status === "error") {
    throw new Error("Failed to get balance after reconnect.", {
      cause: retryResponse.error,
    });
  }

  console.log("Balance:", retryResponse.result.total);
}
