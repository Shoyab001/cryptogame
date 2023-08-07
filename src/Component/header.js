import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "../Component/style/header.css";
import { Navigate } from "react-router-dom";

const header = () => {
  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <span style={{ display: "flex" }}>
              <img
                className="user"
                src="https://freepngimg.com/thumb/facebook/62681-flat-icons-face-computer-design-avatar-icon.png"
                alt="user"
              />
              <div className="headername">
                <h2>Dear Candidate</h2>
                {/* <p>KYC Unverified</p> */}
              </div>
            </span>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <img className="logo" src="./img/logo.png" alt="rupee" />
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default header;
