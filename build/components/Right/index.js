'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _beeFormControl = require('bee-form-control');

var _beeFormControl2 = _interopRequireDefault(_beeFormControl);

var _beeButton = require('bee-button');

var _beeButton2 = _interopRequireDefault(_beeButton);

var _copyToClipboard = require('copy-to-clipboard');

var _copyToClipboard2 = _interopRequireDefault(_copyToClipboard);

var _beeIcon = require('bee-icon');

var _beeIcon2 = _interopRequireDefault(_beeIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var propTypes = {};
var defaultProps = {};

var Regular = function (_Component) {
    _inherits(Regular, _Component);

    function Regular(props) {
        _classCallCheck(this, Regular);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.submit = function () {
            var value = _this.props.value;

            var isReg = void 0;
            try {
                isReg = _this.evil(value) instanceof RegExp;
            } catch (e) {
                isReg = false;
            }
            if (isReg) {
                _this.props.memoChange('校验成功');
            } else {
                _this.props.memoChange('校验失败');
            }
        };

        _this.evil = function (fn) {
            var Fn = Function; //一个变量指向Function，防止有些前端编译工具报错
            return new Fn('return ' + fn)();
        };

        _this.clearn = function () {
            _this.props.inputChange('');
        };

        _this.copyFun = function () {
            var value = _this.props.value;

            (0, _copyToClipboard2["default"])(value);
            _this.props.memoChange('复制成功');
        };

        _this.state = {};
        return _this;
    }

    Regular.prototype.render = function render() {
        var _props = this.props,
            value = _props.value,
            memo = _props.memo;

        return _react2["default"].createElement(
            'div',
            { className: 'ac-regular-right' },
            _react2["default"].createElement(
                'div',
                { className: 'ac-regular-right-memo' },
                memo
            ),
            _react2["default"].createElement(_beeFormControl2["default"], {
                className: 'ac-regular-right-input',
                value: value,
                onChange: this.props.inputChange,
                componentClass: 'textarea'
            }),
            _react2["default"].createElement(
                'div',
                { className: 'regularright-btn' },
                _react2["default"].createElement(
                    _beeButton2["default"],
                    { bordered: true, onClick: this.submit },
                    '\u6821\u9A8C'
                ),
                _react2["default"].createElement(
                    _beeButton2["default"],
                    { bordered: true, onClick: this.clearn },
                    '\u6E05\u7A7A'
                ),
                _react2["default"].createElement(
                    _beeButton2["default"],
                    { bordered: true, onClick: this.copyFun },
                    '\u590D\u5236'
                )
            )
        );
    };

    return Regular;
}(_react.Component);

;
Regular.propTypes = propTypes;
Regular.defaultProps = defaultProps;
exports["default"] = Regular;
module.exports = exports['default'];