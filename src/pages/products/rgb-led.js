import React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/Layout/layout"
import RgbPage from "../../components/PageComponents/Products/rgb/RgbPage"
import SEO from "../../components/seoNew"
//import SimpleReactLightbox from "simple-react-lightbox";

const Rgb = () => (
  <Layout>
    {/*<SimpleReactLightbox>*/}

    <RgbPage />
    {/*</SimpleReactLightbox>*/}
  </Layout>
)

export default Rgb

export const Head = () => (
  <SEO
    title="Spider COB LED Growlights Lights | Lighting Solutions for San Diego County | LEDPac"
    description="Premium COB LED RBi GROWLIGHTS solutions for both commercial and residential gardening."
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
