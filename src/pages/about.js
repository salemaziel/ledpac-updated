import React from "react";
import Layout from "../components/Layout/layout";
import Seo from "../components/seo";
import AboutPage from '../components/PageComponents/About/AboutPage'

const About = () => (
  <Layout>
    <Seo title="About" />
    <AboutPage />

  </Layout>
);

export default About
