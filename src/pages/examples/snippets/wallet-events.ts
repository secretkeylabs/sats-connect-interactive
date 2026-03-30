import Wallet from "sats-connect";

const removeAccountChange = Wallet.addListener({
  eventName: "accountChange",
  cb: (event) => {
    console.log("Account changed:", event.addresses);
  },
});

const removeNetworkChange = Wallet.addListener({
  eventName: "networkChange",
  cb: (event) => {
    console.log("Bitcoin network:", event.bitcoin.name);
  },
});

const removeDisconnect = Wallet.addListener({
  eventName: "disconnect",
  cb: () => {
    console.log("Wallet disconnected.");
  },
});

removeAccountChange();
removeNetworkChange();
removeDisconnect();
