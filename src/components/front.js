import React from 'react'
import Img from 'gatsby-image'
import {StaticQuery, graphql} from 'gatsby'

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
        <div style={{
          width: "60%",
          height: "40rem",
          position: "absolute",
          left: "0",
          backgroundColor: "#082e49a7",
          zIndex: "1"
        }}>
          <h1 style={{
            fontSize: "10vw",
            fontWeight: "lighter",
            paddingLeft: "6vw",
            paddingTop: "1rem",
          }}>byte <br /> lab.</h1>
          <h2 style={{
            paddingLeft: "6vw",
            position: "absolute",
            fontFamily: "Inter UI",
            fontSize: "2.8vw",
            fontWeight: "lighter",
            color: "#ededed",
            fontStyle: "italic"
          }}>lowellers making cool things.</h2>
          <h2 style={{
            paddingLeft: "6vw",
            position: "absolute",
            bottom: "2rem",
            fontSize: "2.4rem",
            color: "#cccccc",
            fontWeight: "lighter"
          }}><a href={"https://hackclub.com"}>hack club</a> @ <a href={"https://lhs-sfusd-ca.schoolloop.com"}>lowell high school</a>.</h2>
        </div>
        <div style={{
          width: "40%",
          backgroundColor: "#d4d4df",
          height: "40rem",
          margin: "0",
          position: "absolute",
          right: "0"
        }}>
        </div>
      </div>
    )
  }
}
