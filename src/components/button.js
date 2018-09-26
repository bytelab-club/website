import React from 'react'

export default class Button extends React.Component {
  render() {
    return (
      <a href={this.props.to} style={{
        width: "fit-content",
        textDecoration: "none",
        color: "#d8dce6",
        fontSize: "1.4rem",
        display: "block"
      }} className={this.props.className}>
        <div style={{
          backgroundColor: "#e7264f",
          width: "fit-content",
          boxSizing: "border-box",
          padding: "1.5rem",
          borderRadius: "0.8rem",
          lineHeight: "2rem",
          filter: "drop-shadow(3px 3px 3px #00000077)"
        }}>
          {this.props.children}
        </div>
      </a>
    )
  }
}
