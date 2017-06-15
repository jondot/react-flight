import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Rect extends Component {
  render() {
    const { id, source, name, radius, onPress, children, style } = this.props
    return (
      <div
        id={id || (((this.context && this.context.source) || source) && name)}
        className={name}
        onClick={onPress}
        style={Object.assign({ borderRadius: radius }, style)}
      >
        {children}
      </div>
    )
  }
}
Rect.contextTypes = {
  director: PropTypes.object,
  source: PropTypes.bool,
}

//XXX todo
class Image {
  render() {}
}

// Yea, not really an oval, more of a circle, but can be an oval
// if you give me another radius..
class Oval extends Component {
  render() {
    const { source, name, size, children, style } = this.props
    return (
      <div
        id={((this.context && this.context.source) || source) && name}
        className={name}
        onClick={this.triggerStart}
        style={Object.assign(
          { borderRadius: size / 2, width: size, height: size },
          style
        )}
      >
        {children}
      </div>
    )
  }
}
Oval.contextTypes = {
  director: PropTypes.object,
  source: PropTypes.bool,
}

export { Oval, Rect }
