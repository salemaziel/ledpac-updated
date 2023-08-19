import React from 'react'
//import { Link } from 'gatsby'
import LSidebar from './LSidebar'
import ContactForm from './contactForm'

//import { Banner2, Airport1 } from '../../../images/index'


const SectionOne = () => (
<section id="main" className="wrapper sidebar right">
  <div className="inner">
    <header className="major">
      <h2>Contact Us</h2>
    </header>
    {/* Content */}
    <div className="content">
      <h3>Get In Touch</h3>
      <p>Please fill out the form below. We will contact you shortly </p>

    <br />
      <ContactForm />
    </div>
        <LSidebar />
  </div>
</section>

)

export default SectionOne