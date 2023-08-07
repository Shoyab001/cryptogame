import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "./modal.css";
import { getContactUs } from "../../../_services/user.service";

const MyVerticallyCenteredModal = (props) => {
  const [contact, setContact] = useState([]);

  useEffect(() => {
    getContactUs({
      whatsapp_number: "whatsapp_number",
    }).then((response) => {
      if (response?.success) {
        console.log(response.data.records);
        setContact(response?.data.records);
      }
    });
  }, []);
  if (contact.length > 0) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <strong style={{fontSize:'15px'}}>Select Package</strong>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="package">
          <ul>
            <li>
              <a
                href={
                  "https://wa.me/" +
                  contact[0].whatsapp_number +
                  "/?text=Get 3,000/- | 10,000/-"
                }
              >
                <h2 style={{ textDecoration: "none" }}>Get</h2>{" "}
                <p>
                  <strong>3,000/- | 10,000/-</strong>
                </p>
              </a>
            </li>
          </ul>
          <hr />
          <ul>
            <li>
              <a
                href={
                  "https://wa.me/" +
                  contact[0].whatsapp_number +
                  "/?text=Get 5,000/- | 20,000/-"
                }
              >
                <h2 style={{ textDecoration: "none" }}>Get</h2>{" "}
                <p>
                  <strong>5,000/- | 20,000/-</strong>
                </p>
              </a>
            </li>
          </ul>
          <hr />
          <ul>
            <li>
              <a
                href={
                  "https://wa.me/" +
                  contact[0].whatsapp_number +
                  "/?text=Get 7,000/- | 30,000/-"
                }
              >
                <h2 style={{ textDecoration: "none" }}>Get</h2>{" "}
                <p>
                  <strong>7,000/- | 30,000/-</strong>
                </p>
              </a>
            </li>
          </ul>
          <hr />
          <ul>
            <li>
              <a
                href={
                  "https://wa.me/" +
                  contact[0].whatsapp_number +
                  "/?text=Get 10,000/- | 60,000/-"
                }
              >
                <h2 style={{ textDecoration: "none" }}>Get</h2>{" "}
                <p>
                  {" "}
                  <strong>10,000/- | 60,000/-</strong>
                </p>
              </a>
            </li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
};

export default MyVerticallyCenteredModal;
