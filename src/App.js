import React, { Suspense } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router-dom";

import Header from "../src/Component/header.js";
import Home from "../src/Component/home.js";
import TopCoin from "../src/Component/topCoin.js";
import ReferEarn from "../src/Component/referEarn.js";
import Wallet from "../src/Component/wallet.js";
import { Container } from "react-bootstrap";

// Containers
const DefaultLayout = React.lazy(() => import("././Component/defaultlayout"));

// const ChangePassword = React.lazy(() =>
//   import("./views/pages/changePassword/changePassword")
// );

function App() {
  let users = JSON.parse(sessionStorage.getItem("users"));
  users = users?.user?._id;

  let isAuthenticated = users ? true : false;

  return (
    <>
      <HashRouter>
        <Suspense>
          <Routes>
            <>
              {/* <Route
                  exact
                  path="/login"
                  name="Login Page"
                  element={<Login />}
                /> */}
              {/* <Route
                  exact
                  path="/changePassword"
                  name="Change Password"
                  element={<ChangePassword />}
                /> */}
              {/* <Route
                  exact
                  path="/register"
                  name="Register Page"
                  element={<Register />}
                /> */}
              <Route
                exact
                path="/"
                name="DefaultLayout Page"
                element={<DefaultLayout />}
              />
              <Route exact path="*" name="Home" element={<DefaultLayout />} />
            </>
          </Routes>
        </Suspense>
      </HashRouter>
    </>
  );
}

export default App;
