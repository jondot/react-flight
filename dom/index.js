'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Rect = exports.Oval = undefined;

var _flight = require('../core/flight');

var _flight2 = _interopRequireDefault(_flight);

var _ui = require('./ui');

var _controls = require('./controls');

var _controls2 = _interopRequireDefault(_controls);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Flight = (0, _flight2.default)(_ui.Rect, _controls2.default);

exports.default = Flight;
exports.Oval = _ui.Oval;
exports.Rect = _ui.Rect;