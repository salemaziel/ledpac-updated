import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout/layout"

import HomePage from "../components/PageComponents/Home/HomePage"
import SEO from "../components/seoNew"

const IndexPage = () => (
  <Layout>
    <HomePage />
  </Layout>
)

export default IndexPage

export const Head = () => (
  <SEO
    title="Lighting Solutions for San Diego County | LEDPac"
    description="San Diego County Distributor of Cutting Edge LED Technology including UV-C Disinfectant, Solar Powered, RGB, and ChipOnBoard LED"
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
