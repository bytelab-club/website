import React from 'react'
import Section from './section'
import {graphql, StaticQuery} from 'gatsby'
import Img from 'gatsby-image'
import styles from './community-section.module.css'
import Button from './button'

export default class CommunitySection extends React.Component {
  render() {
    return (
      <Section name="our community">
        <div className={styles.flex}>
          <StaticQuery query={
            graphql`
              query CommunityImage {
                file(relativePath: {eq: "community.jpg"}) {
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
              }
            `} render={data => (
                <Img fluid={data.file.childImageSharp.fluid}
                  className={styles.image} />
              )} />
          <p className={styles.text}>
            Byte Lab is a relaxed setting where you can sit with your friends
            and just code. We're the perfect place for you to learn, make new friends,
            and connect with like-minded creators. After you've met our wonderful
            club members, team up and go to a hackathon, or start a project!
          </p>
        </div>
        <Button to="https://bytelab.club/slack" className={styles.button}>
          <ion-icon name="logo-slack"></ion-icon>
          <p>&nbsp;
            JOIN ON SLACK
          </p>
        </Button>
      </Section>
    )
  }
}
