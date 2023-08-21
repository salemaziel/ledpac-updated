import React from 'react'
//import { Link } from 'gatsby'
import LSidebar from './LSidebar'

import SectionTwo from './SectionTwo'


import ProjectPics1_1 from '../../../../images/solar/project-pictures1_1.jpg'

import {Leading} from './solar.module.css'

const SectionOne = () => (
<section id="main" className="wrapper sidebar right">
  <div className="inner">
    <header className="major">
      <h2>Solar Powered LED</h2>
    </header>
    {/* Content */}
    <div className="content">
      <div className="image fit"><img src={ProjectPics1_1} alt="" /></div>
      <div className={Leading}>
      <h3>The Latest in Solar Powered LED Innovation</h3>
      <p>NEW HiP solar LED illumination breakthrough using super-efficient white LEDs for bright reliable adjustable illumination, powered by the sun.</p>
      </div>

 <SectionTwo />

    </div>
      <LSidebar />
  </div>
</section>

)

export default SectionOne