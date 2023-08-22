import React from "react"
import Layout from "../components/Layout/layout"
import { graphql } from "gatsby"

import OurWorkPage from "../components/PageComponents/OurWork/OurWorkPage"
//import SimpleReactLightbox from "simple-react-lightbox";
import SEO from "../components/seoNew"

const OurWork = () => (
  <Layout>
    {/*<SimpleReactLightbox>*/}

    <OurWorkPage />

    {/*</SimpleReactLightbox>*/}
  </Layout>
)
export default OurWork

export const Head = () => (
  <SEO
    title="Our Work | Lighting Solutions for San Diego County | LEDPac"
    description="Case studies of LED lighting projects done by LEDpac, aSan Diego County Distributor of Cutting Edge LED Technology including UV-C Disinfectant, Solar Powered, RGB, and ChipOnBoard LED"
  />
)

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
