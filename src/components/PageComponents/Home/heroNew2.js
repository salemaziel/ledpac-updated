import React from "react"
import { Container, Row, Col, Button } from "react-bootstrap"

export default function HeroNew2() {
  return (
    <React.Fragment>
      <>
        <section className="position-relative pb-24 overflow-hidden bg-dark">
          <Container className="mt-12">
            <Row>
              <Col xs={12} lg={5}>
                <div className="pt-lg-10">
                  <h1 className="mb-0 lh-sm mb-7 text-white">
                    <span>LED Lighting</span>{" "}
                    <span className="text-primary">Solutions.</span>
                  </h1>
                  <p className="mb-0 lh-lg mw-md-md mb-6 text-muted">
                    Transform your space with cutting-edge LED lighting that’s
                    brighter, smarter, and built to last. LEDPac delivers
                    innovation and sustainability in every design, helping you
                    shine while saving energy.
                  </p>
                  <Button
                    variant="primary"
                    className="d-block d-md-inline-block bg-primary rounded-lg"
                    href="#"
                  >
                    Get A Quote
                  </Button>
                </div>
              </Col>
              <Col
                xs={12}
                lg={7}
                className="mt-20 mt-lg-0 d-md-flex flex-md-row justify-content-md-around justify-content-lg-end"
              >
                <div className="me-lg-8">
                  <div className="d-none d-xl-block col-12 d-flex justify-content-center">
                    <div className="bg-dark p-1 position-absolute top-0 mt-n32">
                      <div className="p-32" />
                    </div>
                  </div>
                  <img
                    className="img-fluid mx-auto d-block rounded-lg"
                    src="https://static.shuffle.dev/uploads/files/29/29f1540aa1a1ce05ec336eede136e82cbce729ba/gazebo-png-1737781486592.webp"
                    alt=""
                  />
                  <img
                    className="img-fluid mx-auto d-block mt-8 rounded-lg"
                    src="https://static.shuffle.dev/uploads/files/29/29f1540aa1a1ce05ec336eede136e82cbce729ba/house-outside.jpg"
                    alt=""
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
                    alt=""
                  />
                  <img
                    className="img-fluid mx-auto d-block mt-8 rounded-lg"
                    src="https://static.shuffle.dev/uploads/files/29/29f1540aa1a1ce05ec336eede136e82cbce729ba/bar.jpg"
                    alt=""
                  />
                  <div className="d-none d-xl-block d-flex justify-content-center bg-dark p-1 mt-8 position-absolute bottom-0 mb-n52">
                    <div className="p-32" />
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </>
    </React.Fragment>
  )
}
