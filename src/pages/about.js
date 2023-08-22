import React from "react"
import Layout from "../components/Layout/layout"
import SEO from "../components/seoNew"
import { graphql } from "gatsby"

import AboutPage from "../components/PageComponents/About/AboutPage"

const About = () => (
  <Layout>
    <AboutPage />
  </Layout>
)

export default About

export const Head = () => (
  <SEO
    title="About LEDPac | Lighting Solutions for San Diego County | LEDPac"
    description="San Diego County Distributor of Cutting Edge LED Technology including UV-C Disinfectant, Solar Powered, RGB, and ChipOnBoard LED."
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
