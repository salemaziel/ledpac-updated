import React from "react";




import CobNewGen from "../../../../images/cob/cob-lighting.png";
import CobConnector from "../../../../images/cob/cob-connector.png";
import CobLedStrip from "../../../../images/cob/cob-led-strip.png";
import CobLedStrip4 from "../../../../images/cob/cob-led-strip-4.png";
import CobLedStrip5 from "../../../../images/cob/cob-led-strip-5.png";
import CobSpecs from "../../../../images/cob/cob-specs.png";
import CobSpecs2 from "../../../../images/cob/cob-specs-2.png";




import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Link} from 'gatsby'

import {ProductBox, ProductRow, ProductTitle } from "./cob.module.css";

const SectionTwo = () => (
  <section>
    <div className="box alt">
      <div className="row gtr-uniform gtr-50">
        <div className={ProductBox}>
          <Row className={ProductRow}>
            <Col>
              <h3 className={ProductTitle}>COB LED</h3>
              <p>
                Chip-on-Board LEDs, also known as COBs, are the next and newest
                generation of LED lighting technology{" "}
              </p>
              <p>
                "COB" (Chip-on-Board) refers to the mounting of a bare LED chip
                in direct contact with a substrate such as silicon carbide to
                produce LED arrays.
              </p>
            </Col>
            <Col>
              <span className="image fit">
                <img src={CobNewGen} alt="Chip On Board LEDs 1" />
              </span>
            </Col>
          </Row>
        </div>
      </div>

      <div className="row gtr-uniform gtr-50">
        <Row className={ProductRow}>
          <Col>
            <span className="image fit">
              <img src={CobLedStrip4} alt="Chip On Board LEDs 2" />
            </span>
          </Col>

          <Col style={{ textAlign: "left" }}>
            <p>
              <strong> Advantage:</strong>
              <ul>
                <li>
                  Higher efficiency rate and lower failure rates. (reduce 25% of
                  heat){" "}
                </li>
                <li>High-intensity, particularly at close distances </li>
                <li>High-uniformity, even at close working distances </li>
                <li>
                  Design simplicity, only 1 circuit and 2 contacts are required{" "}
                </li>
                <li>
                  Superior thermal Performance, increased lifetime, stability
                  and reliability
                </li>
              </ul>
            </p>
          </Col>
        </Row>
        <Row className={ProductRow}>
          <Col>
            <span className="image fit">
              <img src={CobLedStrip5} alt="Chip On Board LEDs 3" />
            </span>
          </Col>
          <Col>
            <p>
              <strong> Specification:</strong>
              <ul>
                <li>Voltage: 24VDC, Cutable length: 5cm </li>
                <li>Power: 15W/M </li>
                <li>Light Efficiency: 100LM/W </li>
                <li>Width:10MM </li>
                <li>Package: 5M/reel.</li>
              </ul>
            </p>
          </Col>
        </Row>
        <br />

        <Row className={ProductRow}>
          <Col>
            <span className="image fit">
              <img src={CobConnector} alt="Chip On Board LEDs 4" />
            </span>
          </Col>

          <Col>
            <p>
              <ul>
                <strong> Clear connector</strong>
                <li> Easy sturdy connection </li>
                <li> Clear with No shadows </li>
                <li> 6mm, 8mm, 10mm </li>
              </ul>
            </p>
          </Col>
        </Row>
        <Row className={ProductRow}>
          <Col>
            <span className="image fit">
              <img src={CobLedStrip} alt="Chip On Board LEDs 5" />
            </span>
          </Col>
          <Col>
            <p>
              <ul>
                <strong> New COB led strip</strong>
                <li> 12V &amp; 24V </li>
                <li> 360led per meter </li>
                <li> 2700/3000/4000/6000K </li>
              </ul>
            </p>
          </Col>
        </Row>

        <Row className={ProductRow}>
          <Col>
            <span className="image fit">
              <img src={CobSpecs2} alt="Chip On Board LEDs 6" />
            </span>
          </Col>

          <Col>
            <span className="image fit">
              <img src={CobSpecs} alt="Chip On Board LEDs 7" />
            </span>
          </Col>
        </Row>
        <Row className={ProductRow} style={{width: 'auto'}} >
          <Col>
          <ul className="actions">
                  <li>
                    <Link to="/contact"
                      className="button"
                      style={{
                        whiteSpace: "normal",
                        boxShadow: 'inset 0 0 0 2px rgba(144, 144, 144, 0.25)'
                      }}
                    >
                      Contact Us For An Estimate Today
                    </Link>
                  </li>
                </ul>
          </Col>
      </Row>
      </div>
    </div>
  </section>
);

export default SectionTwo;
