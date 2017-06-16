'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Rect = exports.Oval = undefined;

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Rect = function (_Component) {
  (0, _inherits3.default)(Rect, _Component);

  function Rect() {
    (0, _classCallCheck3.default)(this, Rect);
    return (0, _possibleConstructorReturn3.default)(this, (Rect.__proto__ || (0, _getPrototypeOf2.default)(Rect)).apply(this, arguments));
  }

  (0, _createClass3.default)(Rect, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          id = _props.id,
          source = _props.source,
          name = _props.name,
          radius = _props.radius,
          onPress = _props.onPress,
          children = _props.children,
          style = _props.style;

      return _react2.default.createElement(
        'div',
        {
          id: id || (this.context && this.context.source || source) && name,
          className: name,
          onClick: onPress,
          style: (0, _assign2.default)({ borderRadius: radius }, style)
        },
        children
      );
    }
  }]);
  return Rect;
}(_react.Component);

Rect.contextTypes = {
  director: _propTypes2.default.object,
  source: _propTypes2.default.bool
};

//XXX todo

var Image = function () {
  function Image() {
    (0, _classCallCheck3.default)(this, Image);
  }

  (0, _createClass3.default)(Image, [{
    key: 'render',
    value: function render() {}
  }]);
  return Image;
}();

// Yea, not really an oval, more of a circle, but can be an oval
// if you give me another radius..


var Oval = function (_Component2) {
  (0, _inherits3.default)(Oval, _Component2);

  function Oval() {
    (0, _classCallCheck3.default)(this, Oval);
    return (0, _possibleConstructorReturn3.default)(this, (Oval.__proto__ || (0, _getPrototypeOf2.default)(Oval)).apply(this, arguments));
  }

  (0, _createClass3.default)(Oval, [{
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          source = _props2.source,
          name = _props2.name,
          size = _props2.size,
          children = _props2.children,
          style = _props2.style;

      return _react2.default.createElement(
        'div',
        {
          id: (this.context && this.context.source || source) && name,
          className: name,
          onClick: this.triggerStart,
          style: (0, _assign2.default)({ borderRadius: size / 2, width: size, height: size }, style)
        },
        children
      );
    }
  }]);
  return Oval;
}(_react.Component);

Oval.contextTypes = {
  director: _propTypes2.default.object,
  source: _propTypes2.default.bool
};

exports.Oval = Oval;
exports.Rect = Rect;