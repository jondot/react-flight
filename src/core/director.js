import React, { Children } from 'react'
import flattenDeep from 'lodash/flattenDeep'
import merge from 'lodash/merge'
import mergeWith from 'lodash/mergeWith'
import map from 'lodash/map'
import isFunction from 'lodash/isFunction'
import reduce from 'lodash/reduce'

const walk = (root, c) => {
  if (!c.props) {
    return []
  }

  return Children.toArray(c.props.children).map(child => {
    if (!child) {
      return []
    }

    //TODO use a better classifier than className. maybe anim prop?
    if (!child.props) {
      console.log('warn: no props', child)
    }

    // try extracting style and class from React component,
    // if not - go through a forced render (and set resolvedchild)
    let resolvedChild = child
    if (!(child.props && child.props.className && child.props.style)) {
      //if we're both type and has name we're probably a react comp.
      if (isFunction(child.type)) {
        const renderable = new child.type(
          // source is a context field - synthesize it instead of
          // manufacturing a real context. It's OK because this
          // render goes to trash after we're done, and not the DOM.
          { source: true, ...child.props },
          root.context
        )
        if (isFunction(renderable.render)) {
          resolvedChild = renderable.render()
        }
      }
    }

    // all this className circus is just to pick a name we can treat
    // as a grouping key when later locating pairs (or more) of connected
    // components.
    if (
      resolvedChild.props &&
      resolvedChild.props.className &&
      resolvedChild.props.style
    ) {
      const styles = resolvedChild.props.style
      const name = resolvedChild.props.className || resolvedChild.props.name
      return [
        { [name]: { styles: [styles], ref: resolvedChild, name } },
        ...walk(root, resolvedChild),
      ]
    } else {
      return walk(root, child)
    }
  })
}
const styles = root => {
  const extract = comp => merge(...flattenDeep(walk(root, comp)))

  const extracts = Children.toArray(root.props.children).map(extract)
  return mergeWith(...extracts, (objValue, srcValue) => ({
    styles: objValue.styles.concat(srcValue.styles),
    ref: objValue.ref,
    name: objValue.name,
  }))
}

class Director {
  constructor(comp, composer) {
    this.root = comp
    const stylemap = styles(comp)
    const frames = map(Children.toArray(comp.props.children), c => ({
      duration: c.props.duration || 500,
    }))

    const movements = reduce(
      Object.keys(stylemap),
      (acc, k) => {
        const movement = map(frames, (f, i) => {
          const to = stylemap[k].styles[i + 1]
          const { ref, name } = stylemap[k]
          if (to) {
            return {
              root: { namespace: comp.namespace },
              target: { style: to, ref, name },
              duration: f.duration,
            }
          }
          return {} // one extra null movement
        })

        return [...acc, movement]
      },
      []
    )

    this.frames = frames
    this.movements = movements
    this.composer = composer(movements)
  }

  pause() {
    this.composer.pause()
  }
  loop() {
    this.composer.loop()
  }
  play() {
    this.composer.play()
  }
  reset() {
    this.composer.reset()
  }
}

export default Director
