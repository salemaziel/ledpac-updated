import React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/Layout/layout"
import UVCPage from "../../components/PageComponents/Products/uvc/UVCPage"
import SEO from "../../components/seoNew"

const Uvc = () => (
  <Layout>
    <UVCPage />
  </Layout>
)

export default Uvc

export const Head = () => (
  <SEO
    title="UltraViolet (UV-C) LED Lights | Lighting Solutions for San Diego County | LEDPac"
    description="LEDpac's new powerful patented UV-C LED system design allows creating a matrix of HiP Ultraviolet disinfectant LED power unlike ever before"
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
