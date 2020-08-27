'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _beeButton = require('bee-button');

var _beeButton2 = _interopRequireDefault(_beeButton);

var _beeModal = require('bee-modal');

var _beeModal2 = _interopRequireDefault(_beeModal);

var _beeIcon = require('bee-icon');

var _beeIcon2 = _interopRequireDefault(_beeIcon);

var _beeFormControl = require('bee-form-control');

var _beeFormControl2 = _interopRequireDefault(_beeFormControl);

var _Left = require('./components/Left');

var _Left2 = _interopRequireDefault(_Left);

var _Right = require('./components/Right');

var _Right2 = _interopRequireDefault(_Right);

var _regularTree = require('./regularTree.js');

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

        _this.close = function () {
            _this.setState({ showModal: false });
        };

        _this.open = function () {
            var value = _this.state.value;

            _this.setState({ showModal: true, inputValue: value });
        };

        _this.submit = function () {
            var inputValue = _this.state.inputValue;

            _this.setState({ showModal: false, value: inputValue });
        };

        _this.valueChange = function (data) {
            var inputValue = _this.state.inputValue;

            _this.setState({ inputValue: inputValue + data.code, memo: data.memo });
        };

        _this.inputChange = function (inputValue) {
            _this.setState({ inputValue: inputValue });
        };

        _this.onSearch = function (searchValue) {
            var _this$state$tree = _this.state.tree,
                tree = _this$state$tree === undefined ? [] : _this$state$tree;

            var newTree = [];
            tree.forEach(function (v) {
                v.child.forEach(function (v2) {
                    if (v2.name.indexOf(searchValue) > -1) {
                        newTree.push(v2);
                    }
                });
            });
            _this.setState({ newTree: newTree, searchValue: searchValue });
        };

        _this.memoChange = function (memo) {

            _this.setState({ memo: memo });
        };

        _this.state = {
            showModal: false,
            title: props.title || '正则表达式',
            tree: props.regularTree || _regularTree.regularTree,
            value: props.value || '',
            inputWidth: props.inputWidth || 240,
            inputValue: '',
            searchTree: []
        };
        return _this;
    }

    Regular.prototype.render = function render() {
        var _state = this.state,
            showModal = _state.showModal,
            title = _state.title,
            tree = _state.tree,
            value = _state.value,
            inputWidth = _state.inputWidth,
            memo = _state.memo,
            inputValue = _state.inputValue,
            newTree = _state.newTree,
            searchValue = _state.searchValue;

        return _react2["default"].createElement(
            'div',
            { className: 'ac-regular', style: { width: inputWidth } },
            _react2["default"].createElement(
                'div',
                { className: 'ac-regular-input', style: { width: inputWidth } },
                _react2["default"].createElement(_beeFormControl2["default"], {
                    className: 'demo1-input',
                    value: value
                }),
                _react2["default"].createElement(_beeIcon2["default"], { type: 'uf-maxmize', onClick: this.open })
            ),
            _react2["default"].createElement(
                _beeModal2["default"],
                {
                    show: showModal,
                    onHide: this.close,
                    enforceFocus: false,
                    className: 'ac-regular-modal'
                },
                _react2["default"].createElement(
                    _beeModal2["default"].Header,
                    { closeButton: true },
                    _react2["default"].createElement(
                        _beeModal2["default"].Title,
                        null,
                        title
                    )
                ),
                _react2["default"].createElement(
                    _beeModal2["default"].Body,
                    null,
                    _react2["default"].createElement(_Left2["default"], { tree: tree, valueChange: this.valueChange, onSearch: this.onSearch, newTree: newTree, searchValue: searchValue }),
                    _react2["default"].createElement(_Right2["default"], { memo: memo, value: inputValue, inputChange: this.inputChange, memoChange: this.memoChange })
                ),
                _react2["default"].createElement(
                    _beeModal2["default"].Footer,
                    { className: 'text-center' },
                    _react2["default"].createElement(
                        _beeButton2["default"],
                        { colors: 'secondary', style: { marginRight: 8 }, onClick: this.close },
                        '\u53D6\u6D88'
                    ),
                    _react2["default"].createElement(
                        _beeButton2["default"],
                        { colors: 'primary', onClick: this.submit },
                        '\u786E\u8BA4'
                    )
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