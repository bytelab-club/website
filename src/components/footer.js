import React from 'react'

function Icon(props){
  return <a href={props.to} style={{
    color: "#ebebeb",
    fontSize: "2.6rem",
    height: "2.6rem"
  }}>
    <ion-icon name={props.name}>
  </ion-icon></a>
}

export default class Footer extends React.Component {
  render() {
    return (
      <div style={{
        backgroundColor: "#414141",
        color: "#ebebeb",
        height: "6rem",
        display: "flex",
        flexDirection: "rows",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 3rem 0 3rem"
      }}>
        <small style={{
          padding: "1rem",
          fontSize: "1rem",
          lineHeight: "1.6rem"
        }}>
          Created by Alex Ruiz.<br />
          Thanks to Crystal Yao for helping me pick colors.
        </small>
        <div style={{
          padding: "1rem",
          display: "flex",
          width: "14rem",
          flexDirection: "row",
          justifyContent: "space-between",
          marginRight: "1rem",
          alignItems: "center",
          height: "fit-content"
        }}>
          <Icon name="logo-github" to="https://github.com/bytelab-club" />
          <Icon name="logo-slack" to="https://bytelab.club/slack" />
          <Icon name="logo-instagram" to="https://instagram.com/bytelaboratory" />
          <Icon name="mail" to="mailto:hello@bytelab.club" />
        </div>
      </div>
    )
  }
}
