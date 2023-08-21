import React from "react";


import CobNewGen from "../../../images/cob/cob-new-gen.png";
import RGBGrow3_1 from "../../../images/rgb/growstrip3_1.jpg";
import ProjectPics1_1 from "../../../images/solar/project-pictures1_1.jpg";
import TwentyFive_BlackBG from "../../../images/uvc/25-500x375.png";



import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "gatsby";

import {ProductBox, CategoryRow, ProductTitle } from "./products.module.css";

const SectionTwo = () => (
  <section>
    <div className="box alt">
      <div className="row gtr-uniform gtr-50">
        {/*<div className={Cob}>*/}

        <div className={ProductBox}>
          <Row className={CategoryRow}>
            <Col>
              {" "}
              <span className="image fit">
              <Link to="/products/ultraviolet-led" >

                <img src={TwentyFive_BlackBG} alt />
                </Link>

              </span>
            </Col>
            <Col>
              <h3 className={ProductTitle}>
                <Link to="/products/ultraviolet-led" >
                UltraViolet (UV) LED
                </Link>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.{" "}
              </p>
              <ul className="actions">
                <li>
                  <Link to="/products/ultraviolet-led" className="button">
                    Learn More
                  </Link>
                </li>
              </ul>
            </Col>
          </Row>{" "}
        </div>

      <br />

        <div className={ProductBox}>
          <Row className={CategoryRow}>
            <Col>
              {" "}
              <span className="image fit">
              <Link to="/products/solar-led" >
                <img src={ProjectPics1_1} alt />
                </Link>
              </span>
            </Col>
            <Col>
              {" "}
              <h3 className={ProductTitle}>
              <Link to="/products/solar-led" >
              Solar Powered LED</Link></h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.{" "}
              </p>
              <ul className="actions">
                <li>
                  <Link to="/products/solar-led" className="button">
                    Learn More
                  </Link>
                </li>
              </ul>
            </Col>
          </Row>{" "}
        </div>


        <br />

        <div className={ProductBox}>
          <Row className={CategoryRow}>
            <Col>
              <span className="image fit">
              <Link to="/products/rgb-led">
                <img src={RGBGrow3_1} alt />
                </Link>
              </span>
            </Col>
            <Col>
              <h3 className={ProductTitle}><Link to="/products/rgb-led">Spider COB LED Growlights</Link></h3>
              <p>
                RGB Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>
              <ul className="actions">
                <li>
                  <Link to="/products/rgb-led" className="button">
                    Learn More
                  </Link>
                </li>
              </ul>
            </Col>
          </Row>
        </div>

        <br />



        <div className={ProductBox}>
          <Row className={CategoryRow}>
            <Col>
              <span className="image fit">
                <Link to="/products/nanolite-cob-led">
                  {" "}
                  <img src={CobNewGen} alt="cob leds" />{" "}
                </Link>
              </span>
            </Col>
            <Col>
             
                {" "}
                <h3 className={ProductTitle}> <Link to="/products/nanolite-cob-led">COB LED </Link></h3>{" "}
             
              <p>
                Chip-on-Board LEDs, also known as COBs, are the next and newest
                generation of LED lighting technology{" "}
              </p>
              <ul className="actions">
                <li>
                  <Link to="/products/nanolite-cob-led" className="button">
                    Learn More
                  </Link>
                </li>
              </ul>
            </Col>
          </Row>
        </div>

        {/*<div className="col-4"><span className="image fit"><img src={Airport3} alt /></span></div>
      <div className="col-4"><span className="image fit"><img src={Airport5} alt /></span></div>
      <div className="col-4"><span className="image fit"><img src={Airport3} alt /></span></div>* /}
        {/*</div>** /}
        <br />
        <hr />
        <br />
        {/*<div className={Cob}>* /}
        <div className="col-6">
          <h3 className={ProductTitle}>Spider COB LED Growlights</h3>
        </div>
        <div className="col-6">
          <span className="image fit">
            <img src={Airport2} alt />
          </span>
        </div>
        <div className="col-6">
          <span className="image fit">
            <img src={Airport5} alt />
          </span>
        </div>
        {/*<div className="col-4"><span className="image fit"><img src={Airport3} alt /></span></div>
      <div className="col-4"><span className="image fit"><img src={Airport5} alt /></span></div>
      <div className="col-4"><span className="image fit"><img src={Airport3} alt /></span></div>* /}
        {/*</div>** /}

        <br />
        <hr />
        <br />
        {/*<div className={Cob}>* /}
        <div className="col-12">
          <h3 className={ProductTitle}>Solar Powered LED</h3>
        </div>
        <div className="col-6">
          <span className="image fit">
            <img src={Airport2} alt />
          </span>
        </div>
        <div className="col-6">
          <span className="image fit">
            <img src={Airport5} alt />
          </span>
        </div>
        {/*<div className="col-4"><span className="image fit"><img src={Airport3} alt /></span></div>
      <div className="col-4"><span className="image fit"><img src={Airport5} alt /></span></div>
      <div className="col-4"><span className="image fit"><img src={Airport3} alt /></span></div>*/}
        {/*</div>**/}

        {/*<div className={Cob}>* /}
        <div className="col-12">
          <h3 className={ProductTitle}>UltraViolet (UV) LED</h3>
        </div>
        <div className="col-6">
          <span className="image fit">
            <img src={Airport2} alt />
          </span>
        </div>
        <div className="col-6">
          <span className="image fit">
            <img src={Airport5} alt />
          </span>
        </div>
        {/*<div className="col-4"><span className="image fit"><img src={Airport3} alt /></span></div>
      <div className="col-4"><span className="image fit"><img src={Airport5} alt /></span></div>
      <div className="col-4"><span className="image fit"><img src={Airport3} alt /></span></div>*/}
        {/*</div>** /}

        <div className="col-12">
          <span className="image fit">
            <img src={Airport2} alt />
          </span>
        </div>

        <div className="col-4">
          <span className="image fit">
            <img src={Airport5} alt />
          </span>
        </div>
        <div className="col-4">
          <span className="image fit">
            <img src={Airport3} alt />
          </span>
        </div>
        <div className="col-4">
          <span className="image fit">
            <img src={Airport2} alt />
          </span>
        </div>
        <div className="col-4">
          <span className="image fit">
            <img src={Airport3} alt />
          </span>
        </div>
        <div className="col-4">
          <span className="image fit">
            <img src={Airport2} alt />
          </span>
        </div>
        <div className="col-4">
          <span className="image fit">
            <img src={Airport5} alt />
          </span>
        </div>*/}
      </div>
    </div>
  </section>
);

export default SectionTwo;
