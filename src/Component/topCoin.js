import React, { useEffect, useState } from "react";
import "../Component/style/topcoin.css";
import { Card, Table } from "react-bootstrap";
import MyVerticallyCenteredModal from "../views/pages/MyVerticallyCenteredModal/MyVerticallyCenteredModal";
import { getNamegame, getAllNamegame } from "../_services/user.service";

const TopCoin = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [gamename, setGamename] = useState([]);
  const [allgamename, setAllGamename] = useState([]);
  const [Name, setName] = useState([]);

  useEffect(() => {
    getNamegame({
      name: "name",
    }).then((response) => {
      if (response?.success) {
        console.log(response.data.records);
        setGamename(response?.data.records);
      }
    });
  }, []);

  useEffect(() => {
    getAllNamegame({
      length: "length",

    }).then((response) => {
      if (response?.success) {
        console.log(response.data.records);
        setAllGamename(response?.data.records);
      }
    });
  }, []);
  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <div className="topcoin">
        <h1>Top Coin</h1>

        <Table responsive>
          <thead>
            <tr>
              {Array.from(gamename).map((g, index) => (
                <th key={index}>
                  <a
                    variant="primary"
                    onClick={() => setModalShow(true)}
                    style={{ border: "none", backgroundColor: "white" }}
                  >
                    <Card style={{ width: "10rem" }}>
                      <Card.Body className="card01">
                        <h4>Fiat</h4>
                        <img src="./img/rupee.png" alt="rupee" width={"30px"} />
                        <p>{g.name}</p>
                        <h3>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            fill="currentColor"
                            class="bi bi-currency-rupee"
                            viewBox="0 0 16 16"
                          >
                            <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z" />
                          </svg>
                          {g.number}
                        </h3>
                      </Card.Body>
                    </Card>
                  </a>
                </th>
              ))}
            </tr>
          </thead>
        </Table>
      </div>

      <div className="topcoin">
        <h1>All Coin</h1>

        <Table responsive>
          <thead>
            <tr>
              {Array.from(allgamename).map((allgame, index) => (
                <th key={index}>
                  <a
                    variant="primary"
                    onClick={() => setModalShow(true)}
                    style={{ border: "none", backgroundColor: "white" }}
                  >
                    <Card style={{ width: "10rem" }}>
                      <Card.Body className="card01">
                        <h4>Fiat</h4>
                        <img src="./img/rupee.png" alt="rupee" width={"30px"} />
                        <p>{allgame.name}</p>
                        <h3>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            fill="currentColor"
                            class="bi bi-currency-rupee"
                            viewBox="0 0 16 16"
                          >
                            <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z" />
                          </svg>
                          {allgame.number}
                        </h3>
                      </Card.Body>
                    </Card>
                  </a>
                </th>
              ))}
            </tr>
          </thead>
        </Table>
      </div>
      <hr />
    </>
  );
};

export default TopCoin;
