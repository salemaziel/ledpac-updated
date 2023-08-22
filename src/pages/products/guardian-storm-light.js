import React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/Layout/layout"
import GuardianStormPage from "../../components/PageComponents/Products/guardian/GuardianStormPage"
import SEO from "../../components/seoNew"

const Guardian = () => (
  <Layout>
    <GuardianStormPage />
  </Layout>
)

export default Guardian

export const Head = () => (
  <SEO
    title="Guardian Storm Light LED Light Panel | Lighting Solutions for San Diego County | LEDPac"
    description="Guardian Storm Light Antiseptic and Anti-virus Air Cleaning LED Panel Light."
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
