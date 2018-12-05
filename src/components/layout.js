import React from 'react'
import {StaticQuery, graphql} from 'gatsby'
import Helmet from 'react-helmet'

import Footer from './footer'
import Navbar from './navbar'
import './layout.css'

export default class Layout extends React.Component {
  render() {
    return (
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
            minHeight: "100vh"
          }}
        >
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}
