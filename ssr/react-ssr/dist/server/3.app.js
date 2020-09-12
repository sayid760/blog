exports.ids = [3];
exports.modules = {

/***/ "./src/common/fetch/get-detail.js":
/*!****************************************!*\
  !*** ./src/common/fetch/get-detail.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _fetch_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetch-config */ \"./src/common/fetch/fetch-config.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (id) {\n  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(\"\".concat(_fetch_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].apiHost, \"/detail/\").concat(id)).then(function (response) {\n    // handle success\n    return response.data;\n  })[\"catch\"](function (error) {\n    // handle error\n    console.log(error);\n  });\n});\n\n//# sourceURL=webpack:///./src/common/fetch/get-detail.js?");

/***/ }),

/***/ "./src/pages/search/index.js":
/*!***********************************!*\
  !*** ./src/pages/search/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _common_fetch_get_detail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/fetch/get-detail */ \"./src/common/fetch/get-detail.js\");\n/* harmony import */ var _common_components_page_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/components/page-container */ \"./src/common/components/page-container/index.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n//src/client/pages/detail/index.js\n//小册详情 组件\n\n\n\n // import './index.css';\n//组件\n\nvar Index = /*#__PURE__*/function (_React$Component) {\n  _inherits(Index, _React$Component);\n\n  var _super = _createSuper(Index);\n\n  function Index(props) {\n    var _this;\n\n    _classCallCheck(this, Index);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      Text: null\n    };\n    return _this;\n  }\n\n  _createClass(Index, [{\n    key: \"handleDynamicImport\",\n    value: function handleDynamicImport() {\n      var _this2 = this;\n\n      __webpack_require__.e(/*! import() */ 4).then(__webpack_require__.bind(null, /*! ./aa.js */ \"./src/pages/search/aa.js\")).then(function (Text) {\n        _this2.setState({\n          Text: Text[\"default\"].msg\n        });\n\n        console.log(Text[\"default\"].msg);\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      //渲染数据\n      var _ref = this.props.initialData || {},\n          _ref$fetchData = _ref.fetchData,\n          fetchData = _ref$fetchData === void 0 ? {} : _ref$fetchData;\n\n      var _ref2 = fetchData || null,\n          html = _ref2.html;\n\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"detail-box\"\n      }, this.state.Text ? this.state.Text : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n        onClick: this.handleDynamicImport.bind(this)\n      }, \"\\u70B9\\u51FB\"));\n    }\n  }], [{\n    key: \"getInitialProps\",\n    value: function () {\n      var _getInitialProps = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(ctx) {\n        var res;\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return Object(_common_fetch_get_detail__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(ctx.match.params.id);\n\n              case 2:\n                res = _context.sent;\n                return _context.abrupt(\"return\", {\n                  fetchData: res.data || {},\n                  page: {\n                    tdk: {\n                      title: '小册详情 - koa-react-ssr demo',\n                      keywords: 'koa-react-ssr',\n                      description: 'koa-react-ssr'\n                    }\n                  }\n                });\n\n              case 4:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      function getInitialProps(_x) {\n        return _getInitialProps.apply(this, arguments);\n      }\n\n      return getInitialProps;\n    }()\n  }]);\n\n  return Index;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_common_components_page_container__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Index));\n\n//# sourceURL=webpack:///./src/pages/search/index.js?");

/***/ })

};;