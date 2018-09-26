import React from 'react'
import Img from 'gatsby-image'
import Link from 'gatsby-link'
import {StaticQuery, graphql} from 'gatsby'
import styles from './front.module.css'

export default class Front extends React.Component {
  render() {
    return (
      <div className={styles.front}>
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
          <h3 className={styles.infoHeader}>
            Lowell's all-inclusive coding club, <strong>every thursday in room 263 after school.</strong>
          </h3>
          <p className={styles.infoParagraph}>
            We're a community of coders, creators, and designers who share a passion
            for creating with technology. Every week, we host a workshop or activity
            where you get to learn a new skill, and we announce it on this website
            and on Slack.</p>
          <p className={styles.infoParagraph}>
            <strong>There's no commitments.</strong> Come to only the workshops
            you want, and learn the skills you need to start your next passion project.
          </p>
          <Link className={styles.infoLink} to="/schedule">
            what are we doing this week?
          </Link>
        </div>
      </div>
    )
  }
}
