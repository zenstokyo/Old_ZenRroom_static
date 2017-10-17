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
      title="Gatsby Default Starter"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
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
