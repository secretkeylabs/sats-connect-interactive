/* @refresh reload */
import { render } from "solid-js/web";
import { Router, Route } from "@solidjs/router";
import { lazy } from "solid-js";
import { Layout } from "./components/Layout/Layout";
import "~/styles/theme.css.ts";
import "~/styles/global.css.ts";

const Introduction = lazy(() => import("./pages/Introduction.mdx"));
const WalletProviders = lazy(() => import("./pages/WalletProviders.mdx"));
const Connect = lazy(() => import("./pages/Connect.mdx"));
const Disconnect = lazy(() => import("./pages/Disconnect.mdx"));
const GetBalance = lazy(() => import("./pages/bitcoin/GetBalance.mdx"));
const SendTransfer = lazy(() => import("./pages/bitcoin/SendTransfer.mdx"));
const SignMessage = lazy(() => import("./pages/bitcoin/SignMessage.mdx"));
const SignPsbt = lazy(() => import("./pages/bitcoin/SignPsbt.mdx"));
const TransferStx = lazy(() => import("./pages/stacks/TransferStx.mdx"));
const StacksSignMessage = lazy(() => import("./pages/stacks/SignMessage.mdx"));
const SparkGetBalance = lazy(() => import("./pages/spark/GetBalance.mdx"));
const SparkTransfer = lazy(() => import("./pages/spark/Transfer.mdx"));
const SparkSignMessage = lazy(() => import("./pages/spark/SignMessage.mdx"));
const GetAccount = lazy(() => import("./pages/wallet/GetAccount.mdx"));
const RequestPermissions = lazy(
  () => import("./pages/wallet/RequestPermissions.mdx"),
);

const root = document.getElementById("app");

render(
  () => (
    <Router root={Layout}>
      <Route path="/" component={Introduction} />
      <Route path="/wallet-providers" component={WalletProviders} />
      <Route path="/connect" component={Connect} />
      <Route path="/disconnect" component={Disconnect} />
      <Route path="/bitcoin/get-balance" component={GetBalance} />
      <Route path="/bitcoin/send-transfer" component={SendTransfer} />
      <Route path="/bitcoin/sign-message" component={SignMessage} />
      <Route path="/bitcoin/sign-psbt" component={SignPsbt} />
      <Route path="/stacks/transfer-stx" component={TransferStx} />
      <Route path="/stacks/sign-message" component={StacksSignMessage} />
      <Route path="/spark/get-balance" component={SparkGetBalance} />
      <Route path="/spark/transfer" component={SparkTransfer} />
      <Route path="/spark/sign-message" component={SparkSignMessage} />
      <Route path="/wallet/get-account" component={GetAccount} />
      <Route
        path="/wallet/request-permissions"
        component={RequestPermissions}
      />
    </Router>
  ),
  root!,
);
