import React from "react";
import Layout from "../../components/Layout/layout";

import Page from "../../components/PageComponents/OurWork/Costco/Page";
//import SimpleReactLightbox from "simple-react-lightbox";
//import Seo from "../../components/seo";

//import { GatsbySeo } from 'gatsby-plugin-next-seo';


const Costco = () => (
    <Layout>
        {/*<SimpleReactLightbox>*/}

    {/*<Seo title="Led Light Display Costco" />*/}
    {/*<GatsbySeo
title='Case Study: Costco LED Light Display' 
description='A case study on an installation project for a Costco jewelry display by LEDpac'
/>*/}
      <Page />
        {/*</SimpleReactLightbox>*/}

    </Layout>
);
export default Costco;
