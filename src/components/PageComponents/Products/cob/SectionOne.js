import React from "react";
import LSidebar from "./LSidebar";

import SectionTwo from "./SectionTwo";

import CobLighting from "../../../../images/cob/cob-lighting.png";


import {TopPic, Leading } from "./cob.module.css";

const SectionOne = () => (
  <section id="main" className="wrapper sidebar right">
    <div className="inner">
      <header className="major">
        <h2>COB LEDs</h2>
      </header>
      {/* Content */}
      <div className="content">
        <img src={CobLighting} alt="C.O.B. Light Display" className={TopPic} />
        <div className={Leading}>
          <h3>Leading Through Innovation</h3>
          <p>
            In the rapidly advancing world of SSL technology, LEDpac leads the
            way with superior quality LED solutions. Whether it's retrofit, new
            construction, residential, commercial, or industrial, interior or
            exterior, big or small, LEDpac's suite of SSL solutions is
            consistently the discriminating choice of homeowners, business
            owners, contractors, lighting designers and architects – and has
            been for 10 years.
          </p>
        </div>

        <SectionTwo />

      </div>
      <LSidebar />
    </div>
  </section>
);

export default SectionOne;
