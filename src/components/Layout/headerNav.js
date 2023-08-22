import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavbarBrand from "react-bootstrap/NavbarBrand"
import NavbarToggle from "react-bootstrap/NavbarToggle"
import Offcanvas from "react-bootstrap/Offcanvas"

import LogoLight from '../../images/logo-light-shadow.png'

import { Header } from "./header.module.css"

const HeaderNav = () => {
  return (
    <>
      <header className={Header}>
        {/* {[false, 'sm', 'md', 'lg', 'xl', 'xxl'].map((expand) => ( */}
        {["lg"].map(expand => (
          <Navbar expand={expand} className="bg-body-tertiary" data-bs-theme="dark" >
            <Container fluid>
              <NavbarBrand as={Link} to="/">
                {" "}
                <img src={LogoLight} alt="LEDpac logo" width={125} className="mt-2" />
              </NavbarBrand>
              <NavbarToggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
                style={{ fontSize: "1.25rem", height: "2.5rem" }}
              />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
                data-bs-theme="dark"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <img src={LogoLight} alt="LEDpac logo" width={150} />
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



