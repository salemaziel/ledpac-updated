import React from 'react'

import Layout from "../../components/Layout/layout"
import UVCPage from '../../components/PageComponents/Products/uvc/UVCPage'
import Seo from "../../components/seo";

//import { GatsbySeo } from 'gatsby-plugin-next-seo';


const UVC = () => (
    <Layout>
        {/*<Seo title="UltraViolet (UV-C) LED Lights" />*/}
        {/*<GatsbySeo
title='UltraViolet (UV-C) LED Lights'
description="LEDpac's new powerful patented UV-C LED system design allows creating a matrix of HiP Ultraviolet disinfectant LED power unlike ever before"
/>*/}
        <UVCPage />
    </Layout>

)

export default UVC