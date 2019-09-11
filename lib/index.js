"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactUseDimensions = _interopRequireDefault(require("react-use-dimensions"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _default = function _default(_ref) {
  var children = _ref.children,
      htmlContent = _ref.htmlContent,
      showOnClick = _ref.showOnClick;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      show = _useState2[0],
      setShow = _useState2[1];

  var handleMouseOver = (0, _react.useCallback)(function () {
    return setShow(true);
  }, []);
  var handleMouseOut = (0, _react.useCallback)(function () {
    return setShow(false);
  }, []); // parent ref

  var _useDimension = (0, _reactUseDimensions["default"])(),
      _useDimension2 = _slicedToArray(_useDimension, 2),
      pRef = _useDimension2[0],
      _useDimension2$ = _useDimension2[1],
      pWidth = _useDimension2$.width,
      pHeight = _useDimension2$.height; // floater ref


  var _useDimension3 = (0, _reactUseDimensions["default"])(),
      _useDimension4 = _slicedToArray(_useDimension3, 2),
      fRef = _useDimension4[0],
      _useDimension4$ = _useDimension4[1],
      fWidth = _useDimension4$.width,
      fHeight = _useDimension4$.height;

  return _react["default"].createElement("div", {
    className: "container"
  }, _react["default"].createElement("div", {
    onMouseOver: handleMouseOver,
    onMouseOut: handleMouseOut,
    ref: pRef
  }, children), show ? _react["default"].createElement("div", {
    className: "placer"
  }, _react["default"].createElement("div", {
    className: "floater",
    ref: fRef
  }, htmlContent)) : null);
};

exports["default"] = _default;