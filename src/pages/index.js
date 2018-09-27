import React from 'react'
import Layout from '../components/layout'
import Front from '../components/front'
import Button from '../components/button'
import Section from '../components/section'
import {graphql, StaticQuery} from 'gatsby'
import Img from 'gatsby-image'
import './index.css'

const IndexPage = ({data}) => (
  <Layout>
    <Front />
    <CommunitySection />
  </Layout>
)

class CommunitySection extends React.Component {
  render() {
    return (
      <Section name="our community">
        <div className="flex">
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
                  className="image" />
              )} />
          <p className="text">
            Byte Lab is a relaxed setting where you can sit with your friends
            and just code. We're the perfect place for you to learn, make new friends,
            and connect with like-minded creators. After you've met our wonderful
            club members, team up and go to a hackathon, or start a project!
          </p>
        </div>
        <Button to="https://bytelab.club/slack" className="button">
          <div style={{
            display: "flex",
            alignItems: "center"
          }}>
            <ion-icon name="logo-slack"></ion-icon>
            <p>&nbsp;
              JOIN ON SLACK
            </p>
          </div>
        </Button>
      </Section>
    )
  }
}

class FeaturedBanner extends React.Component {
  render(){
    return (
      <div className="featured">
        {/* <StaticQuery query={
          graphql`
           query FeaturedImage {
             file(relativePath: {eq: "featured.png"}) {
               childImageSharp {
                 fluid {
                   base64
                   aspectRatio
                   srcSet
                   src
                   sizes
                 }
               }
             }
           }
          `
          } render={} /> */}
          <div className="flex">
            <h3>You can do anything.</h3>
            <p>See what Lowell's creators are up to.</p>
          </div>
      </div>
    )
  }
}

export default IndexPage
