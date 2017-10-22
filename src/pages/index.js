import React from 'react'
import Link from 'gatsby-link'

import logo from '../images/zensroom.png'; // Tell Webpack this JS file uses this image

import reception from '../images/icons/icons8-Reception-100.png';
import bed from '../images/icons/icons8-Occupied-Bed-100.png';
import traveler from '../images/icons/icons8-Traveler-100.png';

const IndexPage = () => (
  <div className="home">
    <h1 className="home-header"><img src={logo} width="250px"/></h1>
    <div className="home-content">
    <h2>The easiest way to stay in Japan</h2>
    <h3>For visitors, students, and business travellers.</h3>
    <div className="stats">
      <div className="stat">
        <img src={traveler} width="50" height="50"/>
        <h4>37,865</h4>
        <h5>guests have used Zens</h5>
      </div>
      <div className="stat">

        <img src={bed} width="50" height="50"/>
        <h4>59,205</h4>
        <h5>nights have been booked with Zens</h5>
      </div>
      <div className="stat">
        <img src={reception} width="50" height="50"/>
        <h4>8,250</h4>
        <h5>bookings have been handled through Zens</h5>
      </div>
    </div>
    <h4>Monthly rentals are coming soon…</h4>
    <p>Questions? Need help moving to Japan? Contact us at <a href="mailto:contact@zensroom.com">contact@zensroom.com</a></p>
    </div>
    <p className="home-footer">&copy; 2017 <a href="http://zens.tokyo">Zens</a> | Icons by <a href="https://icons8.com/">Icon8</a></p>
  </div>
)

export default IndexPage
