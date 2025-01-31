import React from "react"

import { mywrapper, inner2 } from "./home.module.css"
import { Fade } from "react-awesome-reveal"

import Banner1 from "../../../images/banner1.png"
import Banner2 from "../../../images/banner2.png"
import Banner3 from "../../../images/banner3.png"
import Banner4 from "../../../images/banner4.png"
import Banner5 from "../../../images/banner5.png"
import Banner6 from "../../../images/banner6.png"
//import Banner7 from '../../../images/banner7.png'

import { Link } from "gatsby"

const Post = ({ imageUrl, imageAlt, title, description, link }) => (
  <section className="post">
    <Link to={link} rel="preload" className="image">
      <img src={imageUrl} alt={imageAlt} />
    </Link>
    <div className="content">
      <Link to={link} rel="preload">
        <h3>{title}</h3>
      </Link>
      <p>{description}</p>
    </div>
  </section>
)

const SectionTwo = () => (
  <section id="three" className={mywrapper}>
    <div className={inner2}>
      <header className="major"></header>
      <div className="posts">
        <Fade cascade triggerOnce damping={0.1}>
          <Post
            imageUrl={Banner1}
            imageAlt="Motion sensor LEDs"
            title="MOTION SENSORED LED LIGHTING"
            description="SMART RB LEDS attached to motion sensors inside custom fixtures
                that follow your moment fast or slow changing colors at the same
                time. This technology is one of our staple systems, allowing
                many technical options for many future availability’s."
            link="/about"
          />

          <Post
            imageUrl={Banner2}
            imageAlt="Premium outdoor LED solutions"
            title="Premium LED Landscape Solution"
            description="Perfect continuous LED illumination solutions using NANOlite COB linear systems."
            link="/products/nanolite-cob-led"
          />

          <Post
            imageUrl={Banner3}
            imageAlt="Indoor LED solutions for entryways, hallways, stairwells, and more"
            title="LEDpac LED Illumination Projects"
            description="LEDpac's RETROfit solutions for both low and high ceiling
                downlighting designed for entryways, hallways, stairwells,
                kitchens, home movie theatres, studios, game rooms and more."
            link="/products/nanolite-cob-led"
          />

          <Post
            imageUrl={Banner4}
            imageAlt="NANOlite COB Indoor Lighting"
            title="NANOlite COB Indoor LED Lighting"
            description="Chip-on-Board LEDs, also known as COBs, are the next and newest generation of LED technology for indoor lighting."
            link="/products/nanolite-cob-led"
          />

          <Post
            imageUrl={Banner5}
            imageAlt="Exterior LED Lighting"
            title="EXTERIOR OUTDOOR LED LIGHTING"
            description="Premium low-voltage high-lumen LED solutions for submersible and above grade outdoor landscape applications such as: fountains, ponds, reflecting pools, outdoor step-lighting, patio bar counters, exterior architectural features and more."
            link="/products/exterior-led"
          />

          <Post
            imageUrl={Banner6}
            imageAlt="Interior LED Illumination"
            title="Interior LED Illumination"
            description="LEDpac's Linear and Flexible solutions give premium long-living light to architectural features, soffits, step lighting, bar counters, built-in cabinetry, and more."
            link="/products/interior-led"
          />
        </Fade>
      </div>
    </div>
  </section>
)

export default SectionTwo
