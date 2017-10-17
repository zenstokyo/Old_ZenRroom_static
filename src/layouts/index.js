import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.css'
import './home.css'

import airbnbImage from '../images/airbnb-3.jpg'; // Tell Webpack this JS file uses this image

const TemplateWrapper = ({ children }) => (
  <div className="wrapper" style={{backgroundImage: `url(${airbnbImage})`}}>
    <Helmet
      title="ZensRoom: Medium-term rentals for visitors, students, and business travellers"
      meta={[
        { name: 'description', content: 'Medium-term rentals for visitors, students, and business travellers' },
        { name: 'keywords', content: 'tokyo, kyoto, osaka, appartments, rooms, houses, rentals' },
      ]}
    />
    <div>
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
