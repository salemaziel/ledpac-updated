import React from "react"

//import GuardianStorm1 from "../../../images/guardian/guardian-storm-light1.jpg"

import CobNewGen from "../../../images/cob/cob-new-gen.png"
import ProjectPics1_1 from "../../../images/solar/project-pictures1_1.jpg"

//import CarPurifier from "../../../images/mobile-air-purifier-disinfectant/car-disinfectant-pdf.jpg-003.jpg"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
//import { Link } from "gatsby"

import {
  Content,
} from "../Products/products.module.css"

import { Heading } from "./home.module.css"

import { Fade } from "react-awesome-reveal"

import ProductBoxes from "./ProductBoxes"

const SectionProducts = () => (
  <section>
    {/* Merged SectionOne content */}
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
    {/* End of SectionOne content */}
    
    <section>
      <Container>
        <div className={Content}>
          <div className="box alt">
            <div className="row gtr-uniform gtr-50">
              <Fade cascade triggerOnce damping={0.1}>
              {/*  <ProductBoxes
                  imageUrl={CarPurifier}
                  imageAlt="UVC LED air purifier"
                  title="Mobile UVC LED Air Purifier & Disinfector"
                  description="UVC LED Air Purifier and Disinfector
                        you can take anywhere. Using a Type C USB port for
                        charging, this device is perfect for your car, bedroom, or
                        office."
                  link="/products/uvc-led-air-purifying-disinfector/"
                  buttonText="Learn More"
                  isNew
                />
                <br />
                <ProductBoxes
                  imageUrl={GuardianStorm1}
                  imageAlt="guardian storm light LEDs"
                  title="Guardian Storm Light Antiviral LED Panel"
                  description="This Anti virus LED panel Four-layer
                        filter structure can effectively eliminate harmful gases
                        such as indoor harmful bacteria, virus and formaldehyde.
                        This latest LED panel with air circulation works as a
                        regular LED panel light during disinfection with the
                        nanosilver and titanium dioxide!"
                  link="/products/guardian-storm-light"
                  buttonText="Learn More"
                  isNew
                />
                <br />
                <ProductBoxes
                  imageUrl="https://res.cloudinary.com/dexdumfqy/image/upload/v1600366553/ledpac/uvc/UVC_hrz8w9.jpg"
                  imageAlt="UV LED Lights"
                  title="UltraViolet (UV) LED"
                  description="LEDpac patented UV-C XLP Microbe
                        inactivator with close-surface handheld wand technology.
                        Eradicate Covid-19 in seconds at the push of a button."
                  link="/products/ultraviolet-led"
                  buttonText="Learn More"
                  isNew
                />
                <br /> */}
                <ProductBoxes
                  imageUrl={ProjectPics1_1}
                  imageAlt="Solar Powered LED Lights"
                  title="Solar Powered LED"
                  description="HiP solar LED illumination
                        breakthrough with bright reliable adjustable illumination,
                        powered by the sun. Lighting the darkness through the
                        night using super-efficient white LEDs."
                  link="/products/solar-led"
                  buttonText="Learn More"
                  isNew
                />
                <br />
                <ProductBoxes
                  imageUrl="https://res.cloudinary.com/dexdumfqy/image/upload/v1600918845/ledpac/rgb/rgb-card_pgvi7c.png"
                  imageAlt="Spider COB LED Growlights Lights"
                  title="Spider COB LED Growlights"
                  description="Spider RB LED Grow light systems,
                        allowing the best color spectrum closest to the sun.
                        Plants grow stronger faster night and day indoors."
                  link="/products/rgb-led"
                  buttonText="Learn More"
                  isNew
                />
                <br />
                <ProductBoxes
                  imageUrl={CobNewGen}
                  imageAlt="NANOlite cob leds"
                  title="NANOlite COB LED"
                  description="COB Innovation in linear LED
                        lighting, NANOlite. Continuous, bright, reliable LED
                        illumination through entire product. Pure white or warm
                        white with continuous illumination LED technology."
                  link="/products/nanolite-cob-led"
                  buttonText="Learn More"
                  isNew
                />
                <br />
              {/*  <ProductBoxes
                  imageUrl="https://res.cloudinary.com/dexdumfqy/image/upload/v1600990210/ledpac/Logo-dark_r5kknc.png"
                  imageAlt="Water purification with UV LEDs"
                  title="UV-C LED Water Disinfectant"
                  description="Watch for the new HiP UV-C
                        ultraviolet water disinfectant purification system.
                        eradicating most viruses including Covid-
                        19! This compact system will be charged by the sun and or
                        generated low voltage energy. Portable and smart water
                        disinfection in record-breaking time."
                  link="#"
                  buttonText="Learn More"
                  isComingSoon={true}
                />
                <br />
                <ProductBoxes
                  imageUrl="https://res.cloudinary.com/dexdumfqy/image/upload/v1600990210/ledpac/Logo-dark_r5kknc.png"
                  imageAlt="222nm Far UVC Led Lights Coming Soon"
                  title="222NM Far UVC Lights"
                  description="Watch for the new 222NM Far
                        UV-C LED Light system."
                  link="#"
                  buttonText="Learn More"
                  isComingSoon={true}
                />
                <br />  */}
              </Fade>
            </div>
          </div>
        </div>
      </Container>
    </section>
  </section>
)

export default SectionProducts
