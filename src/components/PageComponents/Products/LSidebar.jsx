import React from 'react'
import { Link } from 'gatsby'

import Banner2 from '../../../images/banner2.png'


const LSidebar = () => (
    <>
    <div className="sidebar">

      <section>
        <Link to="#" className="image fit"><img src={Banner2} alt='' /></Link>
        <footer>
          <ul className="actions">
            <li><Link to="#" className="button">Learn More</Link></li>
          </ul>
        </footer>
      </section>
      <hr />
      <section>
        <Link to="#" className="image fit"><img src={Banner2} alt='' /></Link>
        <footer>
          <ul className="actions">
            <li><Link to="#" className="button">Learn More</Link></li>
          </ul>
        </footer>
      </section>
      <hr />

    </div>
    </>
)

export default LSidebar