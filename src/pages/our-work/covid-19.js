import React from "react"
import Layout from "../../components/Layout/layout"
import { graphql } from "gatsby"

import Page from "../../components/PageComponents/OurWork/Covid19/Page"
import SEO from "../../components/seoNew"

const Covid19 = () => (
  <Layout>
    <Page />
  </Layout>
)
export default Covid19

export const Head = () => (
  <SEO
    title="Covid-19 Response: UV LED Disinfectant systems | Lighting Solutions for San Diego County | LEDPac"
    description="LEDpac, LLC has partnered with The Global Lighting Project, a 501 C3 organization, to offer one of its patented products containing Ultraviolet LED diodes that promise to quickly disinfect surfaces contaminated with the Covid-19 virus."
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
