import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import Offcanvas from "react-bootstrap/Offcanvas"

import LogoLight from '../../images/logo-light-shadow.png'

import { Header } from "./header.module.css"

const HeaderNav = () => {
  return (
    <>
      <header className={Header}>
        {/* {[false, 'sm', 'md', 'lg', 'xl', 'xxl'].map((expand) => ( */}
        {["lg"].map(expand => (
          <Navbar key={expand} expand={expand} className="" data-bs-theme="dark">
            <Container fluid>
              <Navbar.Brand href="#">
                {" "}
                <img src={LogoLight} alt="LEDpac logo" width={150} />
              </Navbar.Brand>
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    Offcanvas
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link as={Link} to="/" activeClassName="active" className="mx-3">Home</Nav.Link>
                    <Nav.Link as={Link} to="/about" activeClassName="active" className="mx-3">About</Nav.Link>
                    <Nav.Link as={Link} to="/products" activeClassName="active" className="mx-3">Products</Nav.Link>
                    <Nav.Link as={Link} to="/our-work" activeClassName="active" className="mx-3">Our Work</Nav.Link>
                    <Nav.Link as={Link} to="/contact" activeClassName="active" className="mx-3">Contact</Nav.Link>
                   
                  </Nav>
                  
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </header>
    </>
  );
};

HeaderNav.propTypes = {
  siteTitle: PropTypes.string,
}

HeaderNav.defaultProps = {
  siteTitle: ``,
}


export default HeaderNav



