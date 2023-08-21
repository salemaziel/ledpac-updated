import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//import Card from "react-bootstrap/Card";
//import CardDeck from "react-bootstrap/CardDeck";

import Industrial from "../../../images/sept2021/led-923232_1920.jpg";
import Commercial from "../../../images/sept2021/light-commercial-812677_1280.jpg";
import Residential from "../../../images/finley/finley-19.jpg";
import Medical from "../../../images/sept2021/2021-09-22_14-30-medical.png";

import {Heading} from "./home.module.css";

const SectionOne = () => (
  <section id="one" className="wrapper">
    <Container>
      <Row>
        <Col>
          <h1 className={Heading}>
            Leading The Industry with The Latest In Cutting Edge LED Technology
          </h1>
        </Col>
      </Row>
      </Container>
  </section>
);

export default SectionOne;
