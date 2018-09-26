import React from 'react'
import PropTypes from 'prop-types'
import {StaticQuery, graphql} from 'gatsby'
import Helmet from 'react-helmet'

import Navbar from '../components/navbar'
import './layout.css'

const Layout = ({ children, data, props }) => (
  <div style={{minHeight: '100vh', position: 'relative'}}>
    <StaticQuery query={
      graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `
    }
      render={ data => (
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: 'description', content: 'Sample' },
              { name: 'keywords', content: 'sample, something' },
            ]}
          />
        )}
    />
    <Navbar/>
    <div
      style={{
        margin: '0',
      }}
    >
      {children}
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout
