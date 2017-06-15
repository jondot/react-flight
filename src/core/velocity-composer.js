import reduce from 'lodash/reduce'
import map from 'lodash/map'
import Tweene from 'tweene/velocity'
Tweene.defaultDriver = 'velocity'

export default class VelocityComposer {
  constructor(movements) {
    this.timelines = this._build(movements)
  }
  _build(movements) {
    const timelines = map(movements, movement =>
      reduce(
        movement,
        (timeline, step) => {
          if (step.target) {
            timeline.add(
              Tweene.to(
                `#${step.root.namespace} #${step.target.name}`,
                step.target.style,
                {
                  duration: step.duration,
                  paused: true,
                }
              )
            )
          }
          return timeline
        },
        Tweene.line()
      )
    )
    return timelines
  }

  __timelines(cmd) {
    this.timelines.forEach(t => t[cmd]())
  }
  resume() {
    this.__timelines('resume')
  }
  pause() {
    this.__timelines('pause')
  }
  loop() {
    this.__timelines('loop')
  }
  play() {
    this.__timelines('play')
  }
  reset() {
    this.__timelines('reverse')
  }
}
