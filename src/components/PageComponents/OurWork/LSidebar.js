import React from 'react'
import { Link } from 'gatsby'


import CobNewGen from '../../../images/cob/cob-new-gen.png'
import ProjectPics1_1 from '../../../images/solar/project-pictures1.jpg'
import UVDisinfectLamp1 from '../../../images/uvc/uv-disinfection-lamp-1.jpg'
//import RGBGrow3 from '../../../images/rgb/growstrip3.jpg'


const SidebarSection = ({ title, imageUrl, imageAlt, link }) => (
  <section>
    <h3>{title}</h3>
    <Link to={link} className="image fit">
      <img src={imageUrl} alt={imageAlt} />
    </Link>
    <footer>
      <ul className="actions">
        <li>
          <Link to={link} className="button">Learn More</Link>
        </li>
      </ul>
    </footer>
  </section>
);


const LSidebar = () => (
    <>
    <div className="sidebar">
      <div>
        {/*<h3>Products</h3>*/}
      </div>
      <SidebarSection
  title="Nanolite COB LED"
  imageUrl={CobNewGen}
  imageAlt="Nanolite COB LED"
  link="/products/nanolite-cob-led"
/>
<SidebarSection
  title="Spider COB LED Growlights"
  imageUrl="https://res.cloudinary.com/dexdumfqy/image/upload/v1600918845/ledpac/rgb/rgb-card_pgvi7c.png"
  imageAlt="Spider COB LED Growlights"
  link="/products/rgb-led"
/>
<SidebarSection
  title="Solar Powered LED"
  imageUrl={ProjectPics1_1}
  imageAlt="Solar Powered LED"
  link="/products/solar-led"
/>
<SidebarSection
  title="UltraViolet LED"
  imageUrl={UVDisinfectLamp1}
  imageAlt="UltraViolet LED"
  link="/products/ultraviolet-led"
/>


     {/*} <section>
      <h3>Nanolite COB LED</h3>
      <Link to="/products/nanolite-cob-led" className="image fit"><img src={CobNewGen} alt='' /></Link>

        <footer>
          <ul className="actions">
            <li><Link to="/products/nanolite-cob-led" className="button">Learn More</Link></li>
          </ul>
        </footer>
      </section>
      <hr />
      <section>
      <h3>Spider COB LED Growlights</h3>
        <Link to="/products/rgb-led" className="image fit"><img src="https://res.cloudinary.com/dexdumfqy/image/upload/v1600918845/ledpac/rgb/rgb-card_pgvi7c.png" alt='' /></Link>

        <footer>
          <ul className="actions">
            <li><Link to="/products/rgb-led" className="button">Learn More</Link></li>
          </ul>
        </footer>
      </section>
      <hr />
      <section>
      <h3>Solar Powered LED</h3>

        <Link to="/products/solar-led" className="image fit"><img src={ProjectPics1_1} alt='' /></Link>

        <footer>
          <ul className="actions">
            <li><Link to="/products/solar-led" className="button">Learn More</Link></li>
          </ul>
        </footer>
      </section>
      <hr />
      <section>
      <h3>UltraViolet LED</h3>

        <Link to="/products/ultraviolet-led" className="image fit"><img src={UVDisinfectLamp1} alt='' /></Link>

        <footer>
          <ul className="actions">
            <li><Link to="/products/ultraviolet-led" className="button">Learn More</Link></li>
          </ul>
        </footer>
      </section>*/}

    </div>
    </>
)

export default LSidebar