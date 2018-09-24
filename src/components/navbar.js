import React from 'react'
import Link from 'gatsby-link'

import styles from "./navbar.module.css"

export default ({props}) => (
  <div className={styles.thebar}>
    <Link to="/" style={{
      color: "#b71638",
      textDecoration: "none"
    }}>
      <div className={styles.home}>
        bl
      </div>
    </Link>
    <div className={styles.links}>
      <Link to="/" className={styles.navlinks}>HOME</Link> /&nbsp;
      <Link to="/schedule/" className={styles.navlinks}>SCHEDULE</Link> /&nbsp;
      <Link to="/featured/" className={styles.navlinks}>FEATURED</Link> /&nbsp;
      <Link to="/resources/" className={styles.navlinks}>RESOURCES</Link> /&nbsp;
      <Link to="/blog/" className={styles.navlinks}>BLOG</Link> /&nbsp;
      <Link to="/about/" className={styles.navlinks}>ABOUT</Link>
    </div>
  </div>
)
