import React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/Layout/layout"
import SolarPage from "../../components/PageComponents/Products/solar/SolarPage"
import SEO from "../../components/seoNew"

const Solar = () => (
  <Layout>
    <SolarPage />
  </Layout>
)

export default Solar

export const Head = () => (
  <SEO
    title="Solar Powered LED Lights | Lighting Solutions for San Diego County | LEDPac"
    description="NEW HiP solar LED illumination breakthrough using super-efficient white LEDs for bright reliable adjustable illumination, powered by the sun."
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
