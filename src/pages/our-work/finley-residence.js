import React from "react"
import Layout from "../../components/Layout/layout"
import { graphql } from "gatsby"

import Page from "../../components/PageComponents/OurWork/Finley/Page"
//import SimpleReactLightbox from "simple-react-lightbox";
import SEO from "../../components/seoNew"

const Finley = () => (
  <Layout>
    {/*<SimpleReactLightbox>*/}

    <Page />

    {/*</SimpleReactLightbox>*/}
  </Layout>
)
export default Finley

export const Head = () => (
  <SEO
    title="Case Study: Residential LED Light Installation | Lighting Solutions for San Diego County | LEDPac"
    description="A case study on a residential installation project for a family home by LEDpac."
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
