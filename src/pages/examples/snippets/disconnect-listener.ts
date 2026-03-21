import Wallet from "sats-connect";

const removeListener = Wallet.addListener({
  eventName: "disconnect",
  cb: (event) => {
    console.log("Wallet disconnected:", event);
    // Clear your app state, redirect to connect page, etc.
  },
});

// Later, to stop listening:
removeListener();
