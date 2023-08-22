import React from "react"
import Layout from "../components/Layout/layout"
import { graphql } from "gatsby"

import ProductsPage from "../components/PageComponents/Products/ProductsPage"
import SEO from "../components/seoNew"

const Products = () => (
  <Layout>
    <ProductsPage />
  </Layout>
)
export default Products

export const Head = () => (
  <SEO
    title="Our Products | Lighting Solutions for San Diego County | LEDPac"
    description="LEDpac uses high powered LEDs to create products including UV-C Disinfectant, Solar Powered, RGB, and ChipOnBoard LEDs."
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
