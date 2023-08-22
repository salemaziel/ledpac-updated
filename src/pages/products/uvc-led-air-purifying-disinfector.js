import React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/Layout/layout"
import CARPage from "../../components/PageComponents/Products/car/CARPage"
import SEO from "../../components/seoNew"

const Car = () => (
  <Layout>
    <CARPage />
  </Layout>
)

export default Car

export const Head = () => (
  <SEO
    title="UVC LED Mobile Air Purifier and Disinfector | Lighting Solutions for San Diego County | LEDPac"
    description="UVC LED Air Purifier and Disinfector you can take anywhere. Perfect for your car, bedroom, or office."
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
