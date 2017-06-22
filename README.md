![](media/flight.png)
[http://react-flight.io](http://react-flight.io)

<img src="https://travis-ci.org/jondot/react-flight.svg?branch=master">

The best way to build animation compositions for React. Design and compose a
component to start with, a component to end with, and Flight will take it from
there.

Flight tries to be for React what [Principle](http://principleformac.com/) is
for Sketch compositions - the fastest, most friction free way to compose and an
effortless way to animate an idea, an interaction, or a short movie-like
composition in a self-contained widget (a React component after all).

## Quick Start (From Scratch)

Just clone and use the example, built around `create-react-app`:

```
$ git clone https://github.com/jondot/react-flight
$ cd react-flight/examples/compos
$ yarn && yarn start
```


## Quick Start (Existing Project)

With yarn (or npm):

```
$ yarn add react-flight
$ curl https://raw.githubusercontent.com/jondot/react-flight/master/examples/compos/src/index.js -o src/anim.js
```

And now you can frame your compositions in `anim.js`, require and place it in
any other React component.

_NOTE_: You'll have to add a jQuery-esque library (such as jQuery, jQuery-slim, Zepto,
etc). Currently that is a requirement of one of `react-flight`'s dependencies.
We plan to rebuild that dependency any way, obsoleting this requirement in the
process (also: PRs accepted!).

## Under the Hood

If you want to hack on `react-flight`, here are some context to keep in mind.

`react-flight` does some cool stuff and some DOM-heavy stuff (perhaps less cool?). For the cool stuff, it
walks the component tree, makes decisions about what should move where, and builds
a clean and nice declarative data structure that represents the way compositions should
behave.

Currently it will then hand over this data to a DOM-based adapter, that also uses Velocity.js,
so that it would actually orchestrate the animations. This is where you're welcome
to plug in your own adapter - another animation engine, React Native, and what not.

Happy hacking!


# Contributing

Fork, implement, add tests, pull request, get my everlasting thanks and a respectable place here :).


### Thanks:

To all [Contributors](https://github.com/jondot/react-flight/graphs/contributors) - you make this happen, thanks!


# Copyright

Copyright (c) 2017 [Dotan Nahum](http://gplus.to/dotan) [@jondot](http://twitter.com/jondot). See [LICENSE](LICENSE) for further details.
