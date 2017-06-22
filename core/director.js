'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _flattenDeep = require('lodash/flattenDeep');

var _flattenDeep2 = _interopRequireDefault(_flattenDeep);

var _merge = require('lodash/merge');

var _merge2 = _interopRequireDefault(_merge);

var _mergeWith = require('lodash/mergeWith');

var _mergeWith2 = _interopRequireDefault(_mergeWith);

var _map = require('lodash/map');

var _map2 = _interopRequireDefault(_map);

var _isFunction = require('lodash/isFunction');

var _isFunction2 = _interopRequireDefault(_isFunction);

var _reduce = require('lodash/reduce');

var _reduce2 = _interopRequireDefault(_reduce);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var walk = function walk(root, c) {
  if (!c.props) {
    return [];
  }

  return _react.Children.toArray(c.props.children).map(function (child) {
    if (!child) {
      return [];
    }

    //TODO use a better classifier than className. maybe anim prop?
    if (!child.props) {
      console.log('warn: no props', child);
    }

    // try extracting style and class from React component,
    // if not - go through a forced render (and set resolvedchild)
    var resolvedChild = child;
    if (!(child.props && child.props.className && child.props.style)) {
      //if we're both type and has name we're probably a react comp.
      if ((0, _isFunction2.default)(child.type)) {
        var renderable = new child.type(
        // source is a context field - synthesize it instead of
        // manufacturing a real context. It's OK because this
        // render goes to trash after we're done, and not the DOM.
        (0, _extends3.default)({ source: true }, child.props), root.context);
        if ((0, _isFunction2.default)(renderable.render)) {
          resolvedChild = renderable.render();
        }
      }
    }

    // all this className circus is just to pick a name we can treat
    // as a grouping key when later locating pairs (or more) of connected
    // components.
    if (resolvedChild.props && resolvedChild.props.className && resolvedChild.props.style) {
      var _styles = resolvedChild.props.style;
      var name = resolvedChild.props.className || resolvedChild.props.name;
      return [(0, _defineProperty3.default)({}, name, { styles: [_styles], ref: resolvedChild, name: name })].concat((0, _toConsumableArray3.default)(walk(root, resolvedChild)));
    } else {
      return walk(root, child);
    }
  });
};
var styles = function styles(root) {
  var extract = function extract(comp) {
    return _merge2.default.apply(undefined, (0, _toConsumableArray3.default)((0, _flattenDeep2.default)(walk(root, comp))));
  };

  var extracts = _react.Children.toArray(root.props.children).map(extract);
  return _mergeWith2.default.apply(undefined, (0, _toConsumableArray3.default)(extracts).concat([function (objValue, srcValue) {
    return {
      styles: objValue.styles.concat(srcValue.styles),
      ref: objValue.ref,
      name: objValue.name
    };
  }]));
};

var Director = function () {
  function Director(comp, composer) {
    (0, _classCallCheck3.default)(this, Director);

    this.root = comp;
    var stylemap = styles(comp);
    var frames = (0, _map2.default)(_react.Children.toArray(comp.props.children), function (c) {
      return {
        duration: c.props.duration || 500
      };
    });

    var movements = (0, _reduce2.default)((0, _keys2.default)(stylemap), function (acc, k) {
      var movement = (0, _map2.default)(frames, function (f, i) {
        var to = stylemap[k].styles[i + 1];
        var _stylemap$k = stylemap[k],
            ref = _stylemap$k.ref,
            name = _stylemap$k.name;

        if (to) {
          return {
            root: { namespace: comp.namespace },
            target: { style: to, ref: ref, name: name },
            duration: f.duration
          };
        }
        return {}; // one extra null movement
      });

      return [].concat((0, _toConsumableArray3.default)(acc), [movement]);
    }, []);

    this.frames = frames;
    this.movements = movements;
    this.composer = composer(movements);
  }

  (0, _createClass3.default)(Director, [{
    key: 'pause',
    value: function pause() {
      this.composer.pause();
    }
  }, {
    key: 'loop',
    value: function loop() {
      this.composer.loop();
    }
  }, {
    key: 'play',
    value: function play() {
      this.composer.play();
    }
  }, {
    key: 'reset',
    value: function reset() {
      this.composer.reset();
    }
  }]);
  return Director;
}();

exports.default = Director;