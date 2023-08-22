import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout/layout"
import SEO from "../components/seoNew"

import Section from "../components/PageComponents/Products/Section"

const NotFoundPage = () => (
  <Layout>
    <Section
      title="404 Page Not Found"
      subtitle="You just hit a route that doesn&#39;t exist... the sadness."
    />
  </Layout>
)

export default NotFoundPage

export const Head = () => (
  <SEO
    title="404 Page Not Found | Lighting Solutions for San Diego County | LEDPac"
    description="404 Page Not Found"
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
