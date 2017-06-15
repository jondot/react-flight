import React, { Component } from 'react'
import { mount, shallow } from 'enzyme'
import Director from '../core/director'
import VelocityComposer from '../core/velocity-composer'
import Flight, { Rect, Oval } from '../dom/index'
window.requestAnimationFrame = f => f()

class Comp extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Flight ref="flight">
        <Flight.Frame source>
          <div>
            <div
              id="line1"
              className="line1"
              radius={5}
              style={{
                backgroundColor: '#95A2AA',
                left: 120,
                top: 100 - 40,
                width: 130,
                height: 10,
              }}
            />

            <Rect
              name={'line2'}
              radius={5}
              style={{
                backgroundColor: '#E6ECF0',
                left: 95,
                top: 115 - 40,
                width: 180,
                height: 10,
              }}
            />

            <Oval
              name="circ1"
              size={16}
              style={{
                backgroundColor: '#79CD15',
                left: 110,
                top: 130 - 40,
              }}
            />
          </div>
        </Flight.Frame>
        <Flight.Frame>
          <div>
            <div
              className="line1"
              radius={5}
              style={{
                backgroundColor: '#95A2AA',
                left: 777,
                top: 100 - 40,
                width: 130,
                height: 10,
              }}
            />

            <Rect
              name={'line2'}
              radius={5}
              style={{
                backgroundColor: '#E6ECF0',
                left: 0,
                top: 115 - 40,
                width: 180,
                height: 10,
              }}
            />

            <Oval
              name="circ1"
              size={16}
              style={{
                backgroundColor: '#79CD15',
                left: 110,
                top: 130 - 40,
              }}
            />
          </div>
        </Flight.Frame>
      </Flight>
    )
  }
}

describe('flight', () => {
  it('integration', () => {
    const c = mount(<Comp />)
    const d = c.ref('flight').getNode().state.director
    const movements = JSON.stringify(d.movements, (k, v) => {
      if (k === 'root' || k === 'ref') {
        return '-test-'
      }
      return v
    })

    // Flight.Frame `source` prop, should signal Flight components to render DOM ids
    expect(c.find('#circ1').exists()).toEqual(true)
    expect(c.find('#line2').exists()).toEqual(true)

    // capture movements
    expect({
      frames: d.frames,
      movements,
      timelines: d.composer.timelines.length,
    }).toMatchSnapshot()
  })
})
