import React from 'react'
import styles from './footer.module.css'

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
      <div className={styles.footer}>
        <small>
          Created by <a style={{color: "#ebebeb"}} href="https://ruizalex.com">Alex Ruiz</a>.<br />
          Thanks to Crystal Yao for helping me pick colors.
        </small>
        <div>
          <Icon name="logo-github" to="https://github.com/bytelab-club" />
          <Icon name="logo-slack" to="https://bytelab.club/slack" />
          <Icon name="logo-instagram" to="https://instagram.com/bytelaboratory" />
          <Icon name="mail" to="mailto:hello@bytelab.club" />
        </div>
      </div>
    )
  }
}
