import React from 'react'

export default class Button extends React.Component {
  render() {
    return (
      <a href={this.props.to} style={{
        width: "fit-content",
        textDecoration: "none",
        color: "#f1f1f2",
        display: "block"
      }} className={this.props.className}>
        <div style={{
          backgroundColor: "#e7264f",
          width: "fit-content",
          boxSizing: "border-box",
          padding: "1.5rem",
          borderRadius: "0.8rem",
          lineHeight: "2rem",
        }}>
          {this.props.children}
        </div>
      </a>
    )
  }
}
