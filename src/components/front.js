import React from 'react'
import Img from 'gatsby-image'
import {StaticQuery, graphql} from 'gatsby'
import styles from './front.module.css'

export default class Front extends React.Component {
  render() {
    return (
      <div>
        <StaticQuery query = {
          graphql`
            query HeaderImage {
              file(relativePath: {eq: "background.png"}) {
                childImageSharp {
                  fluid{
                    base64
                    aspectRatio
                    src
                    srcSet
                    sizes
                  }
                }
              }
            }`
          }
          render={ data => (
            <Img fluid={data.file.childImageSharp.fluid}
              style={{
                width: "60%",
                height: "40rem",
                position: "absolute",
                left: "0"
              }} />
          )} />
        <div className={styles.frontContainer}>
          <h1 className={styles.titleText}>byte <br /> lab.</h1>
          <h2 className={styles.tagline}>lowellers making cool things.</h2>
          <h2 className={styles.subtext}>
            <a className={styles.link} href={"https://hackclub.com"}>
              hack club
            </a> @ <a className={styles.link} href={"https://lhs-sfusd-ca.schoolloop.com"}>
              lowell high school
            </a>.
          </h2>
        </div>
        <div className={styles.container}>
        </div>
      </div>
    )
  }
}
