import React from "react";
import { Button, Carousel, Col, Container, Row, Table } from "react-bootstrap";
import "./routes/routes";
import "../Component/style/home.css";

const Home = () => {
  return (
    <>
      <Container>
        <Carousel>
          {/* <Carousel.Item>
            <div className="caruselbox">
              <Row>
                <Col xs={6} className="boxcol01">
                  <h2>Wallet Value</h2>

                  <p>
                    <strong>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="bi bi-currency-rupee"
                        viewBox="0 0 16 16"
                      >
                        <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z" />
                      </svg>
                      0
                    </strong>
                  </p>
                </Col>
                <Col xs={6} className="boxcol02"></Col>
                <Col xs={12} className="boxcol03">
                  <p>
                    Your Portfolio is up{" "}
                    <strong style={{ color: "green" }}>0.00%</strong>
                  </p>
                </Col>
              </Row>
            </div>
          </Carousel.Item> */}
          <Carousel.Item>
            <div className="caruselbox02">
              <h4>Giveaway season is hear</h4>
              <p>
                invite and get cryptocurrencies like{" "}
                <bold style={{ color: "orange" }}>
                  Bitcoin and more for free
                </bold>
                .
              </p>
            </div>
          </Carousel.Item>
        </Carousel>
      </Container>
    </>
  );
};

export default Home;
