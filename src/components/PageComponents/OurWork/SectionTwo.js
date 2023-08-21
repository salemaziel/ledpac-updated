import React from 'react'

import Airport2 from '../../../images/airport2.jpg'
import Airport3 from '../../../images/airport3.jpg'
import Airport4 from '../../../images/airport4.jpg'
import Airport5 from '../../../images/airport5.jpg'
import Project57 from '../../../images/projects/57.jpg'
import Project58 from '../../../images/projects/58.jpg'
import Project62 from '../../../images/projects/62.jpg'
import Project71 from '../../../images/projects/71_1356601753.jpg'
import Project83_1 from '../../../images/projects/83_1.jpg'
import Project80 from '../../../images/projects/80.jpg'
import Finley1 from '../../../images/finley/finley-1.jpg'
import Finley10 from '../../../images/finley/finley-10.jpg'
import Finley12 from '../../../images/finley/finley-12.jpg'
import Finley13 from '../../../images/finley/finley-13.jpg'
import Finley19 from '../../../images/finley/finley-19.jpg'
import Finley26 from '../../../images/finley/finley-26.jpg'
import Finley7 from '../../../images/finley/finley-7.jpg'
import Finley8 from '../../../images/finley/finley-8.jpg'
import Finley9 from '../../../images/finley/finley-9.jpg'


import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

/*
 //import { SRLWrapper } from "simple-react-lightbox";

 const options = {
  buttons: {
    iconPadding: "7px",
    iconColor: "rgba(179, 175, 143, 0.8)",
    showFullscreenButton: "true"
  },
  caption: {
    captionFontFamily: "Montserrat, sans-serif",
    captionFontSize: "22px",
    captionColor: "#8D99AE",
    captionFontWeight: 300,
    showCaption: true
  },
  settings: {
    overlayColor: "rgba(43, 45, 66, 0.95)",
    transitionTimingFunction: "ease-in-out",
    slideTransitionSpeed: 0.6,
    slideTransitionTimingFunction: [0.25, 0.75, 0.5, 1],
    slideAnimationType: "slide",
    disablePanzoom: true,
    disableWheelControls: true,
    autoplaySpeed: 5000,
    hideControlsAfter: false
  },
  progressBar: {
    height: "3px",
    fillColor: "#8D99AE",
    backgroundColor: "rgba(43, 45, 66, 0.95)"
  },
  thumbnails: {
    thumbnailsSize: ["150px", "100px"],
    thumbnailsGap: "0 5px"
  }
};
*/

const SectionTwo = () => {
  return(
  <>
  {/*{/*<SRLWrapper options={options}>*/}
<section>
<div className="box alt">
  <Container>
    <div className="row gtr-uniform gtr-50">
      <hr />
      <br />


      <Row>
      <Col><span className="image fit"><img src={Airport2} alt="Inside Indianapolis airport" style={{cursor: 'pointer'}} /></span></Col>
      </Row>
      <Row>
      <Col><span className="image fit"><img src={Airport4} alt="Outside photo of red and blue LED lights at Indianapolis airport" style={{cursor: 'pointer'}}/></span></Col>
      <Col><span className="image fit"><img src={Airport5} alt="Outside photo of blue LED lights at Indianapolis airport" style={{cursor: 'pointer'}}/></span></Col>
      <Col><span className="image fit"><img src={Airport3} alt="Red LED lights in terminal at Indianapolis airport" style={{cursor: 'pointer'}}/></span></Col>
      </Row>
      <Row>
      <Col><span className="image fit"><img src={Project57} alt="Outside view of home with exterior LED lighting" style={{cursor: 'pointer'}}/></span></Col>
      <Col><span className="image fit"><img src={Project58} alt="Media Entertainment room with LED light fixtures" style={{cursor: 'pointer'}}/></span></Col>
      <Col><span className="image fit"><img src={Project62} alt="Dining hall with LED lighting" style={{cursor: 'pointer'}}/></span></Col>
      </Row>
      <Row>
      <Col><span className="image fit"><img src={Project71} alt="Bathroom with LED lighting" style={{cursor: 'pointer'}}/></span></Col>
      <Col><span className="image fit"><img src={Project83_1} alt="Ceiling with LED lighting fixtures" style={{cursor: 'pointer'}}/></span></Col>
      <Col><span className="image fit"><img src={Project80} alt="Stairwell lit by colored LED lights" style={{cursor: 'pointer'}} /></span></Col>
      </Row>
      <Row>
      <Col><span className="image fit"><img src={Finley10} alt="Upclose photo of diodes for LED lighting" style={{cursor: 'pointer'}}/></span></Col>
      <Col><span className="image fit"><img src={Finley12} alt="Wine cellar with LED lighting fixtures" style={{cursor: 'pointer'}}/></span></Col>
      <Col><span className="image fit"><img src={Finley13} alt="Wine cellar and countertop with LED lighting fixtures" style={{cursor: 'pointer'}}/></span></Col>
      </Row>
      <Row>
      <Col><span className="image fit"><img src={Finley8} alt="Wide angle photo of wine cellar and countertop with LED lighting fixtures" style={{cursor: 'pointer'}}/></span></Col>
      <Col><span className="image fit"><img src={Finley1} alt="Marble countertop lit up by LED lighting" style={{cursor: 'pointer'}}/></span></Col>
      <Col><span className="image fit"><img src={Finley19} alt="LED lighting fixure above bathroom sink" style={{cursor: 'pointer'}}/></span></Col>
      </Row>
      <Row>
      <Col><span className="image fit"><img src={Finley26} alt="Dining room illuminated by LED lighting" style={{cursor: 'pointer'}}/></span></Col>
      <Col><span className="image fit"><img src={Finley9} alt="LED diodes fixture during installation" style={{cursor: 'pointer'}}/></span></Col>
      <Col><span className="image fit"><img src={Finley7} alt="Bathtub with LED lighting fixtures hanging above" style={{cursor: 'pointer'}} /></span></Col>
      </Row>
    </div>
    </Container>
  </div>

    </section>
{/*{/*</SRLWrapper>*/}
</>
)
  }

export default SectionTwo