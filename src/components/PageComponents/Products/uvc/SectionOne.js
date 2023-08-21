import React from "react";
import LSidebar from "./LSidebar";

import ProductCards2 from "../ProductCards2";


import { Link } from "gatsby";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"

import UVCSpectrum from "../../../../images/uvc/spectrum.png";

import Fifty from "../../../../assets/R7-50_UV-C_MICROBE_INACTIVATOR.pdf";
import TwentyFive from "../../../../assets/R7-25_UV-C_MICROBE_INACTIVATOR.pdf";
import OneTwentyEight from "../../../../assets/R7-128_UV-C_MICROBE_INACTIVATOR.pdf";
import SixtyFour from "../../../../assets/R7-64_UV-C_MICROBE_INACTIVATOR.pdf";
import SixFourZero from "../../../../assets/R7-640_UV-C_MICROBE_INACTIVATOR_TRACK.pdf";

import {Leading, ProductRow} from "./uvc.module.css";

const SectionOne = () => (
  <section id="main" className="wrapper sidebar right">
    <div className="inner">
      <header className="major">
        <h2>UltraViolet (UVC) Hi-Power LEDs</h2>
      </header>
      {/* Content */}
      <div className="content">
        <h3>
          Hand-held Industrial-Grade UV-C Microorganism Inactivation Wands{" "}
        </h3>
        <p>
          Using the latest cutting edge technology <img src="https://res.cloudinary.com/dexdumfqy/image/upload/v1600990241/ledpac/Logo-dark-150x55_yuhcky.png" alt="LEDpac" width={100} /> brings you a super
          powerful HiP UV-C LED allowing
          the rapid eradication of coronavirus in seconds! Perfect for all
          button and key pad activation devices. Product wand is now being used
          by front line Doctors &amp; First Responders, available soon for
          schools and hotels.{" "}
        </p>
        <ProductCards2
          items={[
            {
              image: "https://res.cloudinary.com/dexdumfqy/image/upload/v1598951468/ledpac/uvc/128-1000x1000_zaaelc.png",
              title: "128 UltraViolet (UV-C) LED Microorganism Inactivation Wand",
              subtitle: "MODEL: XLP 128.30.640",
              body: "Features:",
              link: "/contact",
              specs: OneTwentyEight,
              feature1: "Beeping sensor switch",
              feature2: "Premium UV-C LEDs",
              feature3: "Expandable design",
              feature4: "High impact lenses",
              feature5: "Safety gravity switch",
              feature6: "USB-C Power input",
            },
            {
              image: "https://res.cloudinary.com/dexdumfqy/image/upload/v1598951469/ledpac/uvc/25-500x375_wwbt6p.png",
              title: "25 UltraViolet (UV-C) LED Microorganism Inactivation Wand",
              subtitle: "Model: SLP 25.6.150",
              body: "Features:",
              link: "/contact",
              specs: TwentyFive,
              feature1: "Beeping sensor switch",
              feature2: "Premium UV-C LEDs",
              feature3: "Expandable design",
              feature4: "High impact lenses",
              feature5: "Safety gravity switch",
              feature6: "USB-C Power input",
            },
            {
              image: "https://res.cloudinary.com/dexdumfqy/image/upload/v1598951469/ledpac/uvc/50-1000x1000_ik1ntd.png",
              title: "50 UltraViolet (UV-C) LED Microorganism Inactivation Wand",
              subtitle: "MODEL: SLP 50.12.300",
              body: "Features:",
              link: "/contact",
              specs: Fifty,
              feature1: "Beeping sensor switch",
              feature2: "Premium UV-C LEDs",
              feature3: "Expandable design",
              feature4: "High impact lenses",
              feature5: "Safety gravity switch",
              feature6: "USB-C Power input",
            },
            {
              image: "https://res.cloudinary.com/dexdumfqy/image/upload/v1598951469/ledpac/uvc/64-1000x1000_n8cfix.png",
              title: "64 UltraViolet (UV-C) LED Microorganism Inactivation Wand",
              subtitle: "MODEL: XLP 128.30.640",
              body: "Features:",
              link: "/contact",
              specs: SixtyFour,
              feature1: "Beeping sensor switch",
              feature2: "Premium UV-C LEDs",
              feature3: "Expandable design",
              feature4: "High impact lenses",
              feature5: "Safety gravity switch",
              feature6: "USB-C Power input",
            },
            {
              image: "https://res.cloudinary.com/dexdumfqy/image/upload/v1598951470/ledpac/uvc/640-1000x1000_shjqql.png",
              title: "640 UltraViolet (UV-C) LED Microorganism Inactivation Wand",
              subtitle: "MODEL: XLP 640.150.3840",
              body: "Features:",
              link: "/contact",
              specs: SixFourZero,
              feature1: "Beeping sensor switch",
              feature2: "Premium UV-C LEDs",
              feature3: "Expandable design",
              feature4: "High impact lenses",
              feature5: "Safety gravity switch",
              feature6: "USB-C Power input",
            },
          ]}
        />
        
        <div className={Leading}>
          <h3>EUROFINS TESTING LEDpac UV-C PRODUCTS using HiP </h3>
          <p>
          <img src="https://res.cloudinary.com/dexdumfqy/image/upload/v1600990241/ledpac/Logo-dark-150x55_yuhcky.png" alt="LEDpac" width={100} /> is now in process with testing all of our UVC products and contracting to work with the infectious disease laboratory Eurofins. Eurofins is capable of testing the power of our products to safely determine how fast we can eradicate coronavirus. Eurofins will test our UVC products with coronavirus strains using a created model methodically confirming its success.
          </p>
          <p>
          Please stay tuned for the latest breaking news, documentation, and confirmation of our certification.
          </p>
          <p>For more information contact <a href="mailto:info@ledpac.com" className="font-weight-bold"> info@ledpac.com </a></p>
        </div>

        {/*<SectionTwo />*/}
        <div className="image fit">
          <img
            src={UVCSpectrum}
            alt=""
            style={{ maxWidth: "70%", margin: "auto" }}
          />
        </div>
        <div className={Leading}>
      <h3>The Electromagnetic Spectrum</h3>
      <p>LEDpac Engineered Futuristic Design that's not just your Grandpa’s old UV light. This new super powerful UV-C LED is capable of eradicating coronavirus in seconds, no job too big or too small. We have a unique Patent design allowing us to create a matrix of HiP Ultraviolet disinfectant LED power unlike ever before!</p>
      <p>
      As a perfected HiP LED this product runs clean  from UV- C 275NM – 280NM, and emits the purest form of UV-C Light transmission seen on chart above.
      </p>
    </div>
        <Row className="gtr-uniform gtr-50">
          <Row className={ProductRow}>
            <Col>
              <ul className="actions">
                <li>
                  <Link
                    to="/contact"
                    className="button"
                    style={{
                      whiteSpace: "normal",
                      boxShadow: "inset 0 0 0 2px rgba(144, 144, 144, 0.25)",
                    }}
                  >
                    Contact Us For An Estimate Today
                  </Link>
                </li>
              </ul>
            </Col>
          </Row>
        </Row>
      </div>
      <LSidebar />
    </div>
  </section>
);

export default SectionOne;
