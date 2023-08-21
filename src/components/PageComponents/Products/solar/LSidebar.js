import React from "react";


import LampMail_1 from "../../../../images/solar/1.jpg";
import LampMail_2 from "../../../../images/solar/2.jpg";
import Solarpng from "../../../../images/solar/solar.png";

import SolarPNGSpecs from '../../../../assets/F5_20W_40W_60W_solar_street_light.pdf'

const LSidebar = () => (
  <>
    <div className="sidebar">
    <section>
    <h3>SOLAR POWERED LEDS</h3>

        <div className="image fit">
          <img src={Solarpng} alt="" />
        </div>
        <p> Products Available Now!</p>
        <footer>
          <ul className="actions">
            <li>
              <a href={SolarPNGSpecs} target="_blank" rel="noopener noreferrer" className="button">
                Learn More
              </a>
            </li>
          </ul>
        </footer>
      </section>
      <section>
        <div className="image fit">
          <img src={LampMail_1} alt="" />
        </div>

        <p> Products Available Now!.</p>
        <footer>

        </footer>
      </section>
      <hr />
      <section>
        <div className="image fit">
          <img src={LampMail_2} alt="" />
        </div>
        <p> Products Available Now!</p>
        <footer>
      
        </footer>
      </section>
      <hr />
    </div>
  </>
);

export default LSidebar;
