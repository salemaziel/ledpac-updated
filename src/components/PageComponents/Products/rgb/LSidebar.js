import React from 'react'


import RGBGrow1 from '../../../../images/rgb/growstrip1.jpg'
import RGBGrow2 from '../../../../images/rgb/growstrip2.jpg'
import RGBGrow3 from '../../../../images/rgb/growstrip3.jpg'
import SpectrumStripLight from '../../../../images/rgb/spectrum_grow_striplight.jpg'


const LSidebar = () => (
    <>
    <div className="sidebar">

      <section>
      <h3>LED Grow Light Strips</h3>
        <div className="image fit"><img src={RGBGrow1} alt='' /></div>
        <div className="image fit"><img src={RGBGrow3} alt='' /></div>
        <div className="image fit"><img src={RGBGrow2} alt='' /></div>
        <div className="image fit"><img src={SpectrumStripLight} alt='' /></div>

        <p>Products Available Now!</p>
        <footer>
        </footer>
      </section>
      <hr />

    </div>
    </>
)

export default LSidebar