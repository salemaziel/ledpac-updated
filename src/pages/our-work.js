import React from "react";
import Layout from "../components/Layout/layout";
import OurWorkPage from "../components/PageComponents/OurWork/OurWorkPage";
//import SimpleReactLightbox from "simple-react-lightbox";
//import Seo from "../components/seo";
//import { GatsbySeo } from 'gatsby-plugin-next-seo';



const OurWork = () => (
  <Layout>

  {/*<SimpleReactLightbox>*/}
      {/*<Seo title="Our Work" />*/}
     {/*<GatsbySeo
title='Our Work'
description='View several case studies of LED lighting projects done by LEDpac'
/>*/}

      <OurWorkPage />
    
  {/*</SimpleReactLightbox>*/}
  </Layout>
);
export default OurWork;
