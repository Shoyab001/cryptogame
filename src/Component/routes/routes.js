import React from "react";

const Wallet = React.lazy(() => import("../wallet.js"));
const Register = React.lazy(() => import("../../views/pages/register/sign_up.js"));

const routes = [
  { path: "/wallet", name: "Wallet", element: Wallet },
  { path: "/register", name: "Register", element: Register },
];

export default routes;
