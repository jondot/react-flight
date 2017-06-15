import React, { Component } from 'react'
export default class Controls extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.onPlay}>play</button>
        <button onClick={this.props.onReset}>reset</button>
      </div>
    )
  }
}
