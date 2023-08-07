import React from "react";
import Header from "./header";
import Home from "./home";
import TopCoin from "./topCoin";
import ReferEarn from "./referEarn";
import { Container } from "react-bootstrap";

const defaultlayout = () => {
  return (
    <>
      <Header />
      <Container className="App">
        <Home />
        <TopCoin />
        <ReferEarn />
      </Container>
    </>
  );
};

export default defaultlayout;
