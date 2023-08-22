import React from "react";
import { Link } from "gatsby";
import {cta, inner, actions } from "./PageComponents/Home/home.module.css";

import Col from "react-bootstrap/Col";


const Cta = () => (
  <section id="two" className={cta}>

    <div className={inner}>
      <Col>
        <header>
          <h2>Need an estimate on LED lighting?</h2>
        </header>
        <p>
          {" "}
          For pricing and estimates specific to your project, contact LEDpac
          today
        </p>
      </Col>
      <br />
      <br />
      <Col>
        <ul className={actions}>
          <li>
            <Link to="/contact" className="button big">
              Get An Estimate
            </Link>
          </li>
        </ul>
      </Col>
    </div>
  </section>
);

export default Cta;
