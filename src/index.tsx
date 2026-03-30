/* @refresh reload */
import { render } from "solid-js/web";
import { Router, Route } from "@solidjs/router";
import { lazy } from "solid-js";
import { Layout } from "./components/Layout/Layout";
import "~/styles/theme.css.ts";
import "~/styles/global.css.ts";

const Introduction = lazy(() => import("./pages/Introduction.mdx"));
const WalletProviders = lazy(() => import("./pages/WalletProviders.mdx"));
const ProviderDiscovery = lazy(() => import("./pages/ProviderDiscovery.mdx"));
const Connecting = lazy(() => import("./pages/Connecting.mdx"));
const Connect = lazy(() => import("./pages/Connect.mdx"));
const ConnectOtherWallets = lazy(
  () => import("./pages/ConnectOtherWallets.mdx"),
);
const ManageDefaultWallet = lazy(
  () => import("./pages/ManageDefaultWallet.mdx"),
);
const Disconnect = lazy(() => import("./pages/Disconnect.mdx"));
const WalletMethods = lazy(() => import("./pages/WalletMethods.mdx"));
const RequestMethods = lazy(() => import("./pages/RequestMethods.mdx"));
const XverseCustomMethods = lazy(
  () => import("./pages/XverseCustomMethods.mdx"),
);
const WalletPermissions = lazy(() => import("./pages/WalletPermissions.mdx"));
const WalletEvents = lazy(() => import("./pages/WalletEvents.mdx"));

// Bitcoin methods
const GetInfo = lazy(() => import("./pages/bitcoin/GetInfo.mdx"));
const GetAddresses = lazy(() => import("./pages/bitcoin/GetAddresses.mdx"));
const GetAccounts = lazy(() => import("./pages/bitcoin/GetAccounts.mdx"));
const GetBalance = lazy(() => import("./pages/bitcoin/GetBalance.mdx"));
const SendTransfer = lazy(() => import("./pages/bitcoin/SendTransfer.mdx"));
const SignMessage = lazy(() => import("./pages/bitcoin/SignMessage.mdx"));
const SignPsbt = lazy(() => import("./pages/bitcoin/SignPsbt.mdx"));
const GetInscriptions = lazy(
  () => import("./pages/bitcoin/GetInscriptions.mdx"),
);
const SendInscriptions = lazy(
  () => import("./pages/bitcoin/SendInscriptions.mdx"),
);
const GetRunesBalance = lazy(
  () => import("./pages/bitcoin/GetRunesBalance.mdx"),
);
const TransferRunes = lazy(() => import("./pages/bitcoin/TransferRunes.mdx"));
const MintRunes = lazy(() => import("./pages/bitcoin/MintRunes.mdx"));
const EtchRunes = lazy(() => import("./pages/bitcoin/EtchRunes.mdx"));

// Stacks methods
const TransferStx = lazy(() => import("./pages/stacks/TransferStx.mdx"));
const StacksSignMessage = lazy(() => import("./pages/stacks/SignMessage.mdx"));
const StxGetAddresses = lazy(() => import("./pages/stacks/GetAddresses.mdx"));
const StxGetAccounts = lazy(() => import("./pages/stacks/GetAccounts.mdx"));
const StxSignStructuredMessage = lazy(
  () => import("./pages/stacks/SignStructuredMessage.mdx"),
);
const StxSignTransaction = lazy(
  () => import("./pages/stacks/SignTransaction.mdx"),
);
const StxCallContract = lazy(() => import("./pages/stacks/CallContract.mdx"));
const StxDeployContract = lazy(
  () => import("./pages/stacks/DeployContract.mdx"),
);

// Spark methods
const SparkGetBalance = lazy(() => import("./pages/spark/GetBalance.mdx"));
const SparkTransfer = lazy(() => import("./pages/spark/Transfer.mdx"));
const SparkSignMessage = lazy(() => import("./pages/spark/SignMessage.mdx"));
const SparkGetAddresses = lazy(() => import("./pages/spark/GetAddresses.mdx"));
const SparkTransferToken = lazy(
  () => import("./pages/spark/TransferToken.mdx"),
);

// Wallet methods
const GetAccount = lazy(() => import("./pages/wallet/GetAccount.mdx"));
const RequestPermissions = lazy(
  () => import("./pages/wallet/RequestPermissions.mdx"),
);
const GetWalletType = lazy(() => import("./pages/wallet/GetWalletType.mdx"));
const GetCurrentPermissions = lazy(
  () => import("./pages/wallet/GetCurrentPermissions.mdx"),
);
const RenouncePermissions = lazy(
  () => import("./pages/wallet/RenouncePermissions.mdx"),
);
const GetNetwork = lazy(() => import("./pages/wallet/GetNetwork.mdx"));
const ChangeNetwork = lazy(() => import("./pages/wallet/ChangeNetwork.mdx"));
const AddNetwork = lazy(() => import("./pages/wallet/AddNetwork.mdx"));

const root = document.getElementById("app");
const baseUrl = import.meta.env.BASE_URL ?? "/";
const routerBase = baseUrl === "/" ? "/" : baseUrl.replace(/\/$/, "");

render(
  () => (
    <Router root={Layout} base={routerBase}>
      <Route path="/" component={Introduction} />
      <Route path="/wallet-providers" component={WalletProviders} />
      <Route
        path="/wallet-providers/provider-discovery"
        component={ProviderDiscovery}
      />
      <Route path="/connecting" component={Connecting} />
      <Route path="/connect" component={Connect} />
      <Route path="/connecting/other-wallets" component={ConnectOtherWallets} />
      <Route
        path="/connecting/default-wallet"
        component={ManageDefaultWallet}
      />
      <Route path="/disconnect" component={Disconnect} />
      <Route path="/wallet-methods" component={WalletMethods} />
      <Route path="/wallet/request-methods" component={RequestMethods} />
      <Route path="/wallet/custom-methods" component={XverseCustomMethods} />
      <Route path="/wallet/permissions" component={WalletPermissions} />
      <Route path="/wallet/events" component={WalletEvents} />
      {/* Bitcoin */}
      <Route path="/bitcoin/get-info" component={GetInfo} />
      <Route path="/bitcoin/get-addresses" component={GetAddresses} />
      <Route path="/bitcoin/get-accounts" component={GetAccounts} />
      <Route path="/bitcoin/get-balance" component={GetBalance} />
      <Route path="/bitcoin/send-transfer" component={SendTransfer} />
      <Route path="/bitcoin/sign-message" component={SignMessage} />
      <Route path="/bitcoin/sign-psbt" component={SignPsbt} />
      <Route path="/bitcoin/get-inscriptions" component={GetInscriptions} />
      <Route path="/bitcoin/send-inscriptions" component={SendInscriptions} />
      <Route path="/bitcoin/runes-get-balance" component={GetRunesBalance} />
      <Route path="/bitcoin/runes-transfer" component={TransferRunes} />
      <Route path="/bitcoin/runes-mint" component={MintRunes} />
      <Route path="/bitcoin/runes-etch" component={EtchRunes} />
      {/* Stacks */}
      <Route path="/stacks/transfer-stx" component={TransferStx} />
      <Route path="/stacks/sign-message" component={StacksSignMessage} />
      <Route path="/stacks/get-addresses" component={StxGetAddresses} />
      <Route path="/stacks/get-accounts" component={StxGetAccounts} />
      <Route
        path="/stacks/sign-structured-message"
        component={StxSignStructuredMessage}
      />
      <Route path="/stacks/sign-transaction" component={StxSignTransaction} />
      <Route path="/stacks/call-contract" component={StxCallContract} />
      <Route path="/stacks/deploy-contract" component={StxDeployContract} />
      {/* Spark */}
      <Route path="/spark/get-balance" component={SparkGetBalance} />
      <Route path="/spark/transfer" component={SparkTransfer} />
      <Route path="/spark/sign-message" component={SparkSignMessage} />
      <Route path="/spark/get-addresses" component={SparkGetAddresses} />
      <Route path="/spark/transfer-token" component={SparkTransferToken} />
      {/* Wallet */}
      <Route path="/wallet/get-account" component={GetAccount} />
      <Route
        path="/wallet/request-permissions"
        component={RequestPermissions}
      />
      <Route path="/wallet/get-wallet-type" component={GetWalletType} />
      <Route
        path="/wallet/get-current-permissions"
        component={GetCurrentPermissions}
      />
      <Route
        path="/wallet/renounce-permissions"
        component={RenouncePermissions}
      />
      <Route path="/wallet/get-network" component={GetNetwork} />
      <Route path="/wallet/change-network" component={ChangeNetwork} />
      <Route path="/wallet/add-network" component={AddNetwork} />
    </Router>
  ),
  root!,
);
