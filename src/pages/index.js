import React from 'react'
import Link from 'gatsby-link'

import logo from '../images/zensroom.png'; // Tell Webpack this JS file uses this image

const IndexPage = () => (
  <div className="home">
    <h1 className="home-header"><img src={logo} width="250px"/></h1>
    <div className="home-content">
    <h2>The easiest way to stay in Japan</h2>
    <h3>Medium-term rentals for visitors, students, and business travellers.</h3>
    <h4>Coming Soon…</h4>
    <p>Questions? Need help moving to Japan? Contact us at <a href="mailto:contact@zensroom.com">contact@zensroom.com</a></p>
    </div>
    <p className="home-footer">&copy; 2017 <a href="http://zens.tokyo">Zens</a></p>
  </div>
)

export default IndexPage
