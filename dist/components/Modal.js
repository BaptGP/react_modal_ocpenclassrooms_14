"use strict";

require("core-js/modules/es.weak-map.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/es.object.assign.js");
var _react = _interopRequireWildcard(require("react"));
require("./styles/modal.css");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const Modal = _ref => {
  let {
    isActive,
    setActive,
    modalStyle,
    children
  } = _ref;
  const select = {};
  const modal = {
    width: "80vw",
    height: "auto",
    minHeight: "20px",
    position: "absolute",
    zIndex: 2,
    borderRadius: 20,
    boxShadow: "1px 1px 80px gray",
    padding: 20,
    backgroundColor: "white"
  };
  const handleClick = e => {
    e.stopPropagation();
    setActive(false);
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, isActive && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "back_modal"
  }), /*#__PURE__*/_react.default.createElement("div", {
    onClick: handleClick,
    style: {
      width: "100vw",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      position: "absolute",
      top: 20,
      zIndex: 2
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal",
    style: Object.assign(modal, modalStyle),
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/_react.default.createElement("div", null, children)))));
};
var _default = Modal;
exports.default = _default;