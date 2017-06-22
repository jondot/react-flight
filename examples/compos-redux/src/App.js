import React, { Component } from 'react'
import './App.css'
import Flight, { Rect } from 'react-flight/dom'
import PeopleContainer from './components/PeopleContainer'
import PropTypes from 'prop-types'

Flight.contextTypes = {
  store: PropTypes.object,
}

Flight.childContextTypes = {
  ...Flight.childContextTypes,
  store: PropTypes.object,
}

class App extends Component {
  render() {
    return (
      <Flight interactive ref={flight => (this.flight = flight)}>
        <Flight.Frame duration={300} source interactive>
          <div className="keyframe">
            <Rect
              name="head-1"
              radius={5}
              style={{
                backgroundColor: '#95A2AA',
                left: 30 - 20,
                top: 20,
                width: 50,
                height: 10,
              }}
            />

            <PeopleContainer />
            <Rect
              name="head-2"
              radius={5}
              style={{
                backgroundColor: '#E6ECF0',
                left: 120 - 15,
                top: 20,
                width: 120,
                height: 10,
              }}
            />
            <Rect
              name="head-4"
              radius={5}
              style={{
                backgroundColor: '#E6ECF0',
                right: 15,
                top: 20,
                width: 30,
                height: 10,
              }}
            />

            <Rect
              name="img-bg"
              radius={5}
              style={{
                backgroundColor: '#E6ECF0',
                left: 80 - 30,
                top: 120,
                width: 90,
                height: 90,
              }}
            />

            <Rect
              name="img-main"
              radius={5}
              style={{
                backgroundColor: '#4DA1FF',
                left: 50 - 15,
                top: 100,
                width: 90,
                height: 90,
              }}
            />

            <div
              id="brace-1"
              className="brace-1"
              style={{
                color: '#95A2AA',
                top: 30,
                left: -50,
                fontSize: 30,
              }}
            >
              {'{'}
            </div>
            <div
              id="brace-2"
              className="brace-2"
              style={{
                color: '#95A2AA',
                top: 180,
                left: -50,
                fontSize: 30,
              }}
            >
              {'}'}
            </div>
          </div>

        </Flight.Frame>

        <Flight.Frame duration={300}>
          <div className="keyframe">
            <Rect
              name="head-1"
              radius={5}
              style={{
                backgroundColor: '#95A2AA',
                left: -60,
                top: 20,
                width: 50,
                height: 10,
              }}
            />

            <Rect
              name="head-2"
              radius={5}
              style={{
                backgroundColor: '#E6ECF0',
                left: 120 - 15,
                top: -15,
                width: 120,
                height: 10,
              }}
            />

            <Rect
              name="head-4"
              radius={5}
              style={{
                backgroundColor: '#E6ECF0',
                right: -80,
                top: 20,
                width: 30,
                height: 10,
              }}
            />

            <Rect
              name="img-bg"
              radius={5}
              style={{
                backgroundColor: '#E6ECF0',
                left: 80 - 15,
                top: 360,
                width: 90,
                height: 90,
              }}
            />

            <Rect
              name="img-main"
              radius={5}
              style={{
                backgroundColor: '#4DA1FF',
                left: 50 - 15,
                top: 120,
                width: 60,
                height: 60,
              }}
            />

            <div
              id="brace-1"
              className="brace-1"
              style={{
                color: '#95A2AA',
                top: 30,
                left: 20,
                fontSize: 30,
              }}
            >
              {'{'}
            </div>
            <div
              id="brace-2"
              className="brace-2"
              style={{
                color: '#95A2AA',
                top: 190,
                left: 20,
                fontSize: 30,
              }}
            >
              {'}'}
            </div>
          </div>

        </Flight.Frame>

      </Flight>
    )
  }
}

export default App
