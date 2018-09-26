import React from 'react'
import styles from './section.module.css'

export default class Section extends React.Component {
  render() {
    return (
      <div className={styles.section}>
        <h3 className={styles.title}>{this.props.name}</h3>
        <div className={styles.container}>
          {this.props.children}
        </div>
      </div>
    )
  }
}
