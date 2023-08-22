import React from "react"
import Layout from "../components/Layout/layout"
import { graphql } from "gatsby"

import ContactPage from "../components/PageComponents/Contact/ContactPage"
import SEO from "../components/seoNew"

const Contact = () => (
  <Layout>
    <ContactPage />
  </Layout>
)
export default Contact

export const Head = () => (
  <SEO
    title="Contact LEDPac | Lighting Solutions for San Diego County | LEDPac"
    description="Contact us to request an estimate or get further information by filling out the form, we will be in touch with you shortly."
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
