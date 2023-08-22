import React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/Layout/layout"
import CobPage from "../../components/PageComponents/Products/cob/CobPage"
import SEO from "../../components/seoNew"

const Cob = () => (
  <Layout>
    <CobPage />
  </Layout>
)

export default Cob

export const Head = () => (
  <SEO
    title="NANOlite Chip On Board LED Lights | Lighting Solutions for San Diego County | LEDPac"
    description="NANOlite Chip-on-Board LEDs, also known as COBs, are the next and newest generation of LED lighting technology."
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
