import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout/layout"

import SEO from "../components/seoNew"

//import Hero from "../components/PageComponents/Home/hero"
//import HeroNew from "../components/PageComponents/Home/heroNew"
import HeroNew2 from "../components/PageComponents/Home/heroNew2"
import SectionProducts from "../components/PageComponents/Home/SectionProducts"
import SectionTwo from "../components/PageComponents/Home/sectionTwo"
import SectionCTA from "../components/PageComponents/Home/sectionCTA"


const IndexPage = () => (
  <Layout>
    {/*<Hero /> */}
    <HeroNew2 />

    <SectionProducts />
    <SectionTwo />
    <SectionCTA />

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
