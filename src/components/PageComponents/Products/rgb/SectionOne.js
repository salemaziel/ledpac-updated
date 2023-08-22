import React from "react";
import LSidebar from "./LSidebar";


import SectionTwo from "./SectionTwo";
import ProductCards2 from '../ProductCards2'
import SpiderCob from "../../../../assets/Spider-COB-series.pdf";


//import { SRLWrapper } from "simple-react-lightbox";

import ZeroThree from "../../../../images/rgb/03.jpg";


import { Leading } from "./rgb.module.css";

const SectionOne = () => {
return(
  <>
  {/*<SRLWrapper>*/}
  <section id="main" className="wrapper sidebar right">
    <div className="inner">
      <header className="major">
        <h2>SPIDER COB LED RBi GROWLIGHTS</h2>
      </header>
      {/* Content */}
      <div className="content">
        <h3>LEDpac's High-Output LED RBi GROWLIGHTS</h3>
        <p>
          Premium COB LED RBi GROWLIGHTS solutions for both commercial and residential gardening.
        </p>

        <ProductCards2
      items={[
        {
          image: "https://res.cloudinary.com/dexdumfqy/image/upload/v1600918845/ledpac/rgb/rgb-card_pgvi7c.png",
          title: "Spider C.O.B. RGB",
          subtitle: "MODEL: Spider SLP",
          body: "Features:",
          link: "/contact",
          specs: SpiderCob,
          feature1 : "Optical lens for protection & lighting diffusion--COB Chips ",
          feature2 : "Suitable height for intallation above plants: 0.3-0.6 m",
          
          feature3 : "Fan and Aluminum Cooling System",
          feature4 : "Ventilation for optimal airflow",
          feature5 : "50,000 hours life span",
          feature6: "PF : > 0.98",
        },
      ]} />

<div className={Leading}>
          <h3>Spider C.O.B. SLP Series</h3>
          <h4>Product characteristics</h4>
          <p>
Suitable for any plant. Ultra-long life design, up to 50000 hours, 17 times the life of traditional fluorescent lamp. The installation is simple and convenient.
</p>
<p>
Safety for environmental protection, free of pollution and harmful substances.
          </p>
        </div>
        <div className="image fit">
          <img src={ZeroThree} alt=""  />
    </div>



        <SectionTwo />
      </div>
      <LSidebar />
    </div>
  </section>
  {/*</SRLWrapper>*/}
  </>
  
);
    }
export default SectionOne;
