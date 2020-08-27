'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _beeSelect = require('bee-select');

var _beeSelect2 = _interopRequireDefault(_beeSelect);

var _beeFormControl = require('bee-form-control');

var _beeFormControl2 = _interopRequireDefault(_beeFormControl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var Option = _beeSelect2["default"].Option;
var propTypes = {};
var defaultProps = {};

var Left = function (_Component) {
    _inherits(Left, _Component);

    function Left(props) {
        _classCallCheck(this, Left);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.textChange = function (selectValue) {
            _this.setState({ selectValue: selectValue, activeIndex: -1 });
        };

        _this.valueChange = function (v, k) {
            _this.props.valueChange(v);
            _this.setState({ activeIndex: k });
        };

        _this.onSearch = function (v) {
            _this.props.onSearch(v);
        };

        _this.state = {
            selectValue: '0',
            activeIndex: -1

        };
        return _this;
    }

    Left.prototype.render = function render() {
        var _this2 = this;

        var _state = this.state,
            selectValue = _state.selectValue,
            activeIndex = _state.activeIndex;
        var _props = this.props,
            tree = _props.tree,
            newTree = _props.newTree,
            searchValue = _props.searchValue;

        var loops = function loops(data) {
            return data.map(function (v, k) {
                return _react2["default"].createElement(
                    Option,
                    { value: v.id, key: v.id },
                    v.name
                );
            });
        };
        var loopsli = function loopsli(data) {
            return data.map(function (v, k) {
                return _react2["default"].createElement(
                    'li',
                    { className: activeIndex == k ? 'regular-left-li active' : 'regular-left-li', value: escape(v.code), key: v.id, onClick: _this2.valueChange.bind(_this2, v, k) },
                    v.name
                );
            });
        };
        return _react2["default"].createElement(
            'div',
            { className: 'regular-left' },
            _react2["default"].createElement(
                'div',
                { className: 'regularleft-title' },
                _react2["default"].createElement(
                    'span',
                    null,
                    '\u5E38\u7528'
                )
            ),
            _react2["default"].createElement(_beeFormControl2["default"], {
                className: 'regularleft-search',
                value: searchValue,
                style: { width: 208 },
                onSearch: this.onSearch,
                type: 'search'
            }),
            _react2["default"].createElement(
                _beeSelect2["default"],
                {
                    className: 'regularleft-select',
                    placeholder: '',
                    style: { width: 208 },
                    value: selectValue,
                    onChange: this.textChange },
                loops(tree || [])
            ),
            _react2["default"].createElement(
                'ul',
                null,
                searchValue ? loopsli(newTree) : loopsli(tree[selectValue].child)
            )
        );
    };

    return Left;
}(_react.Component);

;
Left.propTypes = propTypes;
Left.defaultProps = defaultProps;
exports["default"] = Left;
module.exports = exports['default'];