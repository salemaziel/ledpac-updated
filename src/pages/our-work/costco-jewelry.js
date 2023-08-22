import React from "react"
import Layout from "../../components/Layout/layout"
import { graphql } from "gatsby"

import Page from "../../components/PageComponents/OurWork/Costco/Page"
//import SimpleReactLightbox from "simple-react-lightbox";
import SEO from "../../components/seoNew"

const Costco = () => (
  <Layout>
    {/*<SimpleReactLightbox>*/}

    <Page />
    {/*</SimpleReactLightbox>*/}
  </Layout>
)
export default Costco

export const Head = () => (
  <SEO
    title="Case Study: Costco LED Light Display | Lighting Solutions for San Diego County | LEDPac"
    description="A case study on an installation project for a Costco jewelry display by LEDpac."
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
