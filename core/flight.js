'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _velocityComposer = require('./velocity-composer');

var _velocityComposer2 = _interopRequireDefault(_velocityComposer);

var _director = require('./director');

var _director2 = _interopRequireDefault(_director);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var flight = function flight(Container, Controls) {
  var connector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (_) {
    return _;
  };

  var Flight = function (_Component) {
    (0, _inherits3.default)(Flight, _Component);

    function Flight(props) {
      (0, _classCallCheck3.default)(this, Flight);

      var _this = (0, _possibleConstructorReturn3.default)(this, (Flight.__proto__ || (0, _getPrototypeOf2.default)(Flight)).call(this, props));

      _this.play = function () {
        var director = _this.state.director;
        if (director) {
          director.play();
          _this.setState((0, _extends3.default)({}, _this.state, { action: 'play' }));
        }
      };

      _this.reset = function () {
        var director = _this.state.director;
        if (director) {
          director.reset();
          _this.setState((0, _extends3.default)({}, _this.state, { action: 'reset' }));
        }
      };

      _this.nothing = function () {};

      _this.namespace = 'flt__id__' + parseInt(Math.random() * Math.pow(2, 32), 10);
      _this.state = {};
      return _this;
    }

    (0, _createClass3.default)(Flight, [{
      key: 'getChildContext',
      value: function getChildContext() {
        return (0, _extends3.default)({}, this.context, { director: this.state.director });
      }
    }, {
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _this2 = this;

        requestAnimationFrame(function () {
          var director = new _director2.default(_this2, function (_) {
            return new _velocityComposer2.default(_);
          });
          _this2.setState({
            director: director
          }); // force context refetch
        });
      }
    }, {
      key: 'render',
      value: function render() {
        var interactive = this.props.interactive;

        var action = interactive ? this.state.action === 'play' ? this.reset : this.play : this.nothing;
        return _react2.default.createElement(
          Container,
          {
            id: this.namespace,
            style: this.props.style,
            onPress: action
          },
          this.props.controls && _react2.default.createElement(Controls, { onPlay: this.play, onReset: this.reset }),
          this.props.showFrames ? this.props.children : _react.Children.toArray(this.props.children)[0]
        );
      }
    }]);
    return Flight;
  }(_react.Component);

  Flight.childContextTypes = {
    director: _propTypes2.default.object
  };

  var Frame = function (_Component2) {
    (0, _inherits3.default)(Frame, _Component2);

    function Frame() {
      (0, _classCallCheck3.default)(this, Frame);
      return (0, _possibleConstructorReturn3.default)(this, (Frame.__proto__ || (0, _getPrototypeOf2.default)(Frame)).apply(this, arguments));
    }

    (0, _createClass3.default)(Frame, [{
      key: 'getChildContext',
      value: function getChildContext() {
        return {
          source: this.props.source
        };
      }
    }, {
      key: 'render',
      value: function render() {
        return _react.Children.only(this.props.children);
      }
    }]);
    return Frame;
  }(_react.Component);

  Frame.childContextTypes = {
    source: _propTypes2.default.bool
  };
  Flight.Frame = connector(Frame);
  return connector(Flight);
};

exports.default = flight;