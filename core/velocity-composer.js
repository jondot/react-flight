'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _reduce = require('lodash/reduce');

var _reduce2 = _interopRequireDefault(_reduce);

var _map = require('lodash/map');

var _map2 = _interopRequireDefault(_map);

var _velocity = require('tweene/velocity');

var _velocity2 = _interopRequireDefault(_velocity);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_velocity2.default.defaultDriver = 'velocity';

var VelocityComposer = function () {
  function VelocityComposer(movements) {
    (0, _classCallCheck3.default)(this, VelocityComposer);

    this.timelines = this._build(movements);
  }

  (0, _createClass3.default)(VelocityComposer, [{
    key: '_build',
    value: function _build(movements) {
      var timelines = (0, _map2.default)(movements, function (movement) {
        return (0, _reduce2.default)(movement, function (timeline, step) {
          if (step.target) {
            timeline.add(_velocity2.default.to('#' + step.root.namespace + ' #' + step.target.name, step.target.style, {
              duration: step.duration,
              paused: true
            }));
          }
          return timeline;
        }, _velocity2.default.line());
      });
      return timelines;
    }
  }, {
    key: '__timelines',
    value: function __timelines(cmd) {
      this.timelines.forEach(function (t) {
        return t[cmd]();
      });
    }
  }, {
    key: 'resume',
    value: function resume() {
      this.__timelines('resume');
    }
  }, {
    key: 'pause',
    value: function pause() {
      this.__timelines('pause');
    }
  }, {
    key: 'loop',
    value: function loop() {
      this.__timelines('loop');
    }
  }, {
    key: 'play',
    value: function play() {
      this.__timelines('play');
    }
  }, {
    key: 'reset',
    value: function reset() {
      this.__timelines('reverse');
    }
  }]);
  return VelocityComposer;
}();

exports.default = VelocityComposer;