import React, { Children, Component } from 'react'
import PropTypes from 'prop-types'
import VelocityComposer from './velocity-composer'
import Director from './director'

const flight = (Container, Controls, connector = _ => _) => {
  class Flight extends Component {
    constructor(props) {
      super(props)
      this.namespace = `flt__id__${parseInt(Math.random() * Math.pow(2, 32), 10)}`
      this.state = {}
    }
    getChildContext() {
      return { ...this.context, director: this.state.director }
    }
    componentDidMount() {
      requestAnimationFrame(() => {
        const director = new Director(this, _ => new VelocityComposer(_))
        this.setState({
          director,
        }) // force context refetch
      })
    }
    play = () => {
      const director = this.state.director
      if (director) {
        director.play()
        this.setState({ ...this.state, action: 'play' })
      }
    }
    reset = () => {
      const director = this.state.director
      if (director) {
        director.reset()
        this.setState({ ...this.state, action: 'reset' })
      }
    }
    nothing = () => {}
    render() {
      const { interactive } = this.props
      const action = interactive
        ? this.state.action === 'play' ? this.reset : this.play
        : this.nothing
      return (
        <Container
          id={this.namespace}
          style={this.props.style}
          onPress={action}
        >
          {this.props.controls &&
            <Controls onPlay={this.play} onReset={this.reset} />}
          {this.props.showFrames
            ? this.props.children
            : Children.toArray(this.props.children)[0]}
        </Container>
      )
    }
  }
  Flight.childContextTypes = {
    director: PropTypes.object,
  }

  class Frame extends Component {
    getChildContext() {
      return {
        source: this.props.source,
      }
    }
    render() {
      return Children.only(this.props.children)
    }
  }
  Frame.childContextTypes = {
    source: PropTypes.bool,
  }
  Flight.Frame = connector(Frame)
  return connector(Flight)
}

export default flight
