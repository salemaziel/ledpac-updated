import React from 'react'

import Layout from "../../components/Layout/layout"
import CobPage from '../../components/PageComponents/Products/cob/CobPage'
//import Seo from "../../components/seo";

//import { GatsbySeo } from 'gatsby-plugin-next-seo';


const Cob = () => (
    <Layout>
        {/*<Seo title="Chip On Board LED Lights" />*/}
        {/*<GatsbySeo
title='NANOlite C.O.B. LED Lighting'
description='NANOlite Chip-on-Board LEDs, also known as COBs, are the next and newest generation of LED lighting technology'
/>*/}

        <CobPage />
    </Layout>

)

export default Cob