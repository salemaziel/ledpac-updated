import React from "react";


import TwentyFive_VertSquare from '../../../../images/uvc/25-1000x1200.png'
import OneTwentyEight_VertSquare from '../../../../images/uvc/128-1000x1200.png'
import Fifty_VertSquare from '../../../../images/uvc/50-1000x1200.png'
import Sixtyfour_VertSquare from '../../../../images/uvc/64-1000x1200.png'
import Sixtyfourzero_VertSquare from '../../../../images/uvc/640-1000x1200.png'



import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Card from "react-bootstrap/Card";

import {Cob, ProductBox, CategoryRow, ProductTitle, ProductText, actions, ImageFit} from "./uvc.module.css";

import Fifty from "../../../../assets/R7-50_UV-C_MICROBE_INACTIVATOR.pdf";
import TwentyFive from "../../../../assets/R7-25_UV-C_MICROBE_INACTIVATOR.pdf";
import OneTwentyEight from "../../../../assets/R7-128_UV-C_MICROBE_INACTIVATOR.pdf";
import SixtyFour from "../../../../assets/R7-64_UV-C_MICROBE_INACTIVATOR.pdf";
import SixFourZero from "../../../../assets/R7-640_UV-C_MICROBE_INACTIVATOR_TRACK.pdf";
import { Link } from "gatsby";

const SectionTwo = () => (
  <section>
    <div className="box alt">
      <div className="row gtr-uniform gtr-50">

        <Card className={ProductBox}>
          <Row className={CategoryRow}>
            <Col>
              <div className={ImageFit}>
                <img
                  src={OneTwentyEight_VertSquare}
                  alt="UVC Microorganism Inactivation Wand - 128"
                />
              </div>
            </Col>
            <Col>
              {" "}
              <Card.Body>
                <Card.Title>
                  <h3 className={ProductTitle}>
                    128 Ultraviolet UV-C LED Microorganism Inactivation Wand
                  </h3>
                </Card.Title>
                <Card.Subtitle>
                  <h4>MODEL: XLP 128.30.640</h4>
                </Card.Subtitle>
                <Card.Text>
                  <p className={ProductText}>
                    <strong> Features:</strong>
                    <ul>
                      <li>Beeping sensor switch</li>
                      <li>Premium UV-C LEDs </li>
                      <li>Expandable design</li>
                      <li>High impact lenses</li>
                      <li>Safety gravity switch</li>
                      <li>USB-C Power input</li>
                    </ul>
                  </p>
                  <ul className={actions}>
                    <li>
                      <a
                        href={OneTwentyEight}
                        className="button"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Learn More
                      </a>
                    </li>
                  </ul>
                  <br />
                  <ul className={actions}>
                    <li>
                      <Link to="/contact"
                        className="button"
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Col>
          </Row>{" "}
        </Card>

        <br />

        <Card className={ProductBox}>
          <Row className={CategoryRow}>
            <Col>
              <div className={ImageFit}>
                <img
                  src={TwentyFive_VertSquare}
                  alt="UVC Microorganism Inactivation Wand - 25" />
              </div>
            </Col>
            <Col>
              {" "}
              <Card.Body>
                <Card.Title>
                  <h3 className={ProductTitle}>
                    25 Ultraviolet UV-C LED Microorganism Inactivation Wand
                  </h3>
                </Card.Title>
                <Card.Subtitle>
                  <h4>Model: SLP 25.6.150</h4>
                </Card.Subtitle>
                <Card.Text>
                  <p className={ProductText}>
                    <strong> Features:</strong>
                    <ul>
                      <li>Beeping sensor switch</li>
                      <li>Premium UV-C LEDs </li>
                      <li>Expandable design</li>
                      <li>High impact lenses</li>
                      <li>Safety gravity switch</li>
                      <li>USB-C Power input</li>
                    </ul>
                  </p>
                  <ul className={actions}>
                    <li>
                      <a href={TwentyFive} rel="noopener noreferrer" className="button" target="_blank">
                        Learn More
                      </a>
                    </li>
                  </ul>
                  <br />
                  <ul className={actions}>
                    <li>
                      <Link to="/contact"
                        className="button"
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Col>
          </Row>{" "}
        </Card>

        <br />

        <Card className={ProductBox}>
          <Row className={CategoryRow}>
            <Col>
              <div className={ImageFit}>
                <img src={Fifty_VertSquare} alt="UVC Microorganism Inactivation Wand - 50" />
              </div>
            </Col>
            <Col>
              {" "}
              <Card.Body>
                <Card.Title>
                  <h3 className={ProductTitle}>
                    50 Ultraviolet UV-C LED Microorganism Inactivation Wand
                  </h3>
                </Card.Title>
                <Card.Subtitle>
                  <h4>MODEL: SLP 50.12.300</h4>
                </Card.Subtitle>
                <Card.Text>
                  <p className={ProductText}>
                    <strong> Features:</strong>
                    <ul>
                      <li>Beeping sensor switch</li>
                      <li>Premium UV-C LEDs </li>
                      <li>Expandable design</li>
                      <li>High impact lenses</li>
                      <li>Safety gravity switch</li>
                      <li>USB-C Power input</li>
                    </ul>
                  </p>
                  <ul className={actions}>
                    <li>
                      <a href={Fifty} className="button" rel="noopener noreferrer" target="_blank">
                        Learn More
                      </a>
                    </li>
                  </ul>
                  <br />
                  <ul className={actions}>
                    <li>
                      <Link to="/contact"
                        className="button"
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Col>
          </Row>{" "}
        </Card>

        <br />

        <Card className={ProductBox}>
          <Row className={CategoryRow}>
            <Col>
              <div className={ImageFit}>
                <img
                  src={Sixtyfour_VertSquare}
                  alt="UVC Microorganism Inactivation Wand - 64"
                />
              </div>
            </Col>
            <Col>
              {" "}
              <Card.Body>
                <Card.Title>
                  <h3 className={ProductTitle}>
                    64 Ultraviolet UV-C LED Microorganism Inactivation Wand
                  </h3>
                </Card.Title>
                <Card.Subtitle>
                  <h4>MODEL: XLP 64.15.384</h4>
                </Card.Subtitle>
                <Card.Text>
                  <p className={ProductText}>
                    <strong> Features:</strong>
                    <ul>
                      <li>Beeping sensor switch</li>
                      <li>Premium UV-C LEDs </li>
                      <li>Expandable design</li>
                      <li>High impact lenses</li>
                      <li>Safety gravity switch</li>
                      <li>USB-C Power input</li>
                    </ul>
                  </p>
                  <ul className={actions}>
                    <li>
                      <a href={SixtyFour} className="button" rel="noopener noreferrer" target="_blank">
                        Learn More
                      </a>
                    </li>
                  </ul>
                  <br />
                  <ul className={actions}>
                    <li>
                      <Link to="/contact"
                        className="button"
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Col>
          </Row>{" "}
        </Card>

        <br />

        <Card className={ProductBox}>
          <Row className={CategoryRow}>
            <Col>
              <div className={ImageFit}>
                <img
                  src={Sixtyfourzero_VertSquare}
                  alt="UVC Microorganism Inactivation Wand - 640"
                />
              </div>
            </Col>
            <Col>
              {" "}
              <Card.Body>
                <Card.Title>
                  <h3 className={ProductTitle}>
                    640 Ultraviolet UV-C LED Microorganism Inactivation Wand
                  </h3>
                </Card.Title>
                <Card.Subtitle>
                  <h4>MODEL: XLP 640.150.3840</h4>
                </Card.Subtitle>
                <Card.Text>
                  <p className={ProductText}>
                    <strong> Features:</strong>
                    <ul>
                      <li>Beeping sensor switch</li>
                      <li>Premium UV-C LEDs </li>
                      <li>Expandable design</li>
                      <li>High impact lenses</li>
                      <li>Safety gravity switch</li>
                      <li>USB-C Power input</li>
                    </ul>
                  </p>
                  <ul className={actions}>
                    <li>
                      <a href={SixFourZero} className="button" target="_blank" rel="noopener noreferrer">
                        Learn More
                      </a>
                    </li>
                  </ul>
                  <br />
                  <ul className={actions}>
                    <li>
                      <Link to="/contact"
                        className="button"
                        
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Col>
          </Row>{" "}
        </Card>
      </div>
    </div>
  </section>
);

export default SectionTwo;
