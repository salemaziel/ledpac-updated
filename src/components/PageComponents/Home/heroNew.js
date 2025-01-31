import React, { useState } from "react"
import { Link } from "gatsby"
import { Container, Row, Col, Button, Navbar, Nav, Offcanvas } from 'react-bootstrap'

const HeroNew = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <section className="position-relative pb-24 overflow-hidden bg-dark">
      <Container className="mt-12">
        <Row>
          <Col xs={12} lg={5}>
            <div className="pt-lg-10">
              <h1 className="mb-0 lh-sm mb-7 text-white">
                <span>LED Lighting</span>
                <span className="text-primary">Solutions.</span>
              </h1>
              <p className="mb-0 lh-lg mw-md-md mb-6 text-white">
                Transform your space with cutting-edge LED lighting that’s
                brighter, smarter, and built to last. LEDPac delivers innovation
                and sustainability in every design, helping you shine while
                saving energy.
              </p>
              <Button variant="primary-dark" className="d-block d-md-inline-block bg-primary rounded-lg">
                Get A Quote
              </Button>
            </div>
          </Col>
          <Col xs={12} lg={7} className="mt-20 mt-lg-0 d-md-flex flex-md-row justify-content-md-around justify-content-lg-end">
            <div className="me-lg-8 position-relative">
              <div className="d-none d-xl-block col-12 d-flex justify-content-center">
                <div className="bg-dark p-1 position-absolute top-0 mt-n32">
                  <div className="p-32" />
                </div>
              </div>
              <img
                className="img-fluid mx-auto d-block rounded-lg"
                src="https://static.shuffle.dev/uploads/files/29/29f1540aa1a1ce05ec336eede136e82cbce729ba/gazebo-png-1737781486592.webp"
                alt
              />
              <img
                className="img-fluid mx-auto d-block mt-8 rounded-lg"
                src="https://static.shuffle.dev/uploads/files/29/29f1540aa1a1ce05ec336eede136e82cbce729ba/house-outside.jpg"
                alt
              />
              <div className="d-none d-xl-block d-flex justify-content-center bg-dark p-1 mt-7 position-absolute bottom-0 mb-n52">
                <div className="p-32" />
              </div>
            </div>
            <div>
              <div
                className="d-none d-xl-block d-flex justify-content-center bg-dark p-1 position-absolute top-0 mt-n32"
                style={{ zIndex: -1 }}
              >
                <div className="p-32" />
              </div>
              <img
                className="img-fluid mx-auto d-block mt-8 mt-md-0 rounded-lg"
                src="https://static.shuffle.dev/uploads/files/29/29f1540aa1a1ce05ec336eede136e82cbce729ba/solar-night-light.jpg"
                alt
              />
              <img
                className="img-fluid mx-auto d-block mt-8 rounded-lg"
                src="https://static.shuffle.dev/uploads/files/29/29f1540aa1a1ce05ec336eede136e82cbce729ba/bar.jpg"
                alt
              />
              <div className="d-none d-xl-block d-flex justify-content-center bg-dark p-1 mt-8 position-absolute bottom-0 mb-n52">
                <div className="p-32" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Offcanvas show={show} onHide={handleClose} className="bg-dark">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <img
              src="pstls-assets/logos/logo-purple-white.svg"
              alt
              width={102}
            />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link href="#" className="text-white py-3">Home</Nav.Link>
            <Nav.Link href="#" className="text-white py-3">Products</Nav.Link>
            <Nav.Link href="#" className="text-white py-3">Pricing</Nav.Link>
          </Nav>
          <div className="mt-auto py-6">
            <Button variant="outline-light" className="w-100 mb-4">Log In</Button>
            <Button variant="light" className="w-100">Sign Up</Button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
      <Navbar fixed="top" className="d-none">
        <Button variant="dark" onClick={handleShow}>
          <img src="pstls-assets/images/navigations/x.svg" alt />
        </Button>
      </Navbar>
    </section>
  )
}

export default HeroNew
