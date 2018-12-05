import React from 'react'
import Helmet from 'react-helmet'

import Footer from './footer'
import Navbar from './navbar'
import './layout.css'

export default class Layout extends React.Component {
  render() {
    return (
      <div style={{minHeight: '100vh', position: 'relative'}}>
        <Helmet
          title="Byte Lab"
        />
        <Navbar/>
        <div style={{
          margin: '0',
          minHeight: "100vh"
        }}>
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}
