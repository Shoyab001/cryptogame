import React, { useEffect, useState } from "react";
import "./style/referEarn.css";
import { Button, Row, Col } from "react-bootstrap";
import { getContactUs } from "../_services/user.service";

const ReferEarn = () => {
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
      <>
        <section className="earn">
          <h1>Refer & Earn</h1>
          <p>
            invite and earn FREE cryptocurrencies like Bitcoin, Ethererum and
            more.
          </p>
          <p>
            Copy your Code <strong>START50</strong>
          </p>
          <Button>Invite</Button>
          <br />
          <img
            className="referLogo"
            src="https://data.pacogames.com/images/blog/32/fb_make-money.webp?v=5x7"
            alt="refer and Earn"
          />
        </section>
      </>
    );
  }
};

export default ReferEarn;
