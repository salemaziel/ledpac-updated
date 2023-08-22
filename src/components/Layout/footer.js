import React from 'react'

import LogoLight from '../../images/logo-light-shadow.png'

//  import { FaEnvelope, FaFacebook, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa'

import { Link } from 'gatsby'


const Footer = () => {
    return(
        <>
<footer className="py-5 bg-black">
  <div className="container text-center pb-5 border-bottom">
    <Link to="#" className="d-inline-block mx-auto mb-4" >
      <img className="img-fluid" src={LogoLight} alt='LEDPac logo' width="150px" />
    </Link>
    <ul className="d-flex flex-wrap justify-content-center align-items-center list-unstyled mb-4">
      <li><Link to="/about" className="link-secondary mr-4 text-white" >About</Link></li>
      <li><Link to="/products" className="link-secondary mr-4 text-white" >Products</Link></li>
      <li><Link to="/our-work" className="link-secondary mr-4 text-white" >Our Work</Link></li>
      <li><Link to="/contact" className="link-secondary text-white" >Contact</Link></li>
    </ul>
    {/*<div>
      <a className="d-inline-block mr-4" href="#">
        <FaFacebook size="1.5rem" color="white"  />
      </a>
      <a className="d-inline-block mr-4" href="#">
        <FaLinkedin size="1.5rem" color="white" />
      </a>
      <a className="d-inline-block mr-4" href="#">
       <FaEnvelope size="1.5rem" color="white"  />
      </a>
      <a className="d-inline-block mr-4" href="#">
        <FaTwitter size="1.5rem" color="white"  />
      </a>
      <a className="d-inline-block" href="#">
        <FaInstagram size="1.5rem" color="white"  />
      </a>
    </div>*/}
  </div>
  <div className="mb-5" />
  <div className="container">
    <p className="text-center">All rights reserved © LEDpac LLC {new Date().getFullYear()}{" "}</p>
  </div>
</footer>


        </>
    )
}

export default Footer