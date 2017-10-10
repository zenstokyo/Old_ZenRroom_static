import React from 'react'
import Link from 'gatsby-link'

import logo from '../images/zensroom-logo.png'; // Tell Webpack this JS file uses this image
import airbnbImage from '../images/airbnb-1.jpg'; // Tell Webpack this JS file uses this image


const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <img src={logo} width="150px"/>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <img src={airbnbImage} />
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
