/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/wallet";
exports.ids = ["pages/wallet"];
exports.modules = {

/***/ "./pages/wallet/wallet.module.scss":
/*!*****************************************!*\
  !*** ./pages/wallet/wallet.module.scss ***!
  \*****************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"main_wallet_page\": \"wallet_main_wallet_page__TIaPx\",\n\t\"wallet_card_box\": \"wallet_wallet_card_box__QiwNp\",\n\t\"box_container\": \"wallet_box_container__fRvCx\",\n\t\"ui_box_2\": \"wallet_ui_box_2__YrUqR\",\n\t\"ui_box_3\": \"wallet_ui_box_3__IA653\",\n\t\"balance\": \"wallet_balance__qjnZL\",\n\t\"withdraw_btn\": \"wallet_withdraw_btn___yiyn\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy93YWxsZXQvd2FsbGV0Lm1vZHVsZS5zY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2FteW50X3dlYi8uL3BhZ2VzL3dhbGxldC93YWxsZXQubW9kdWxlLnNjc3M/ODI2YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJtYWluX3dhbGxldF9wYWdlXCI6IFwid2FsbGV0X21haW5fd2FsbGV0X3BhZ2VfX1RJYVB4XCIsXG5cdFwid2FsbGV0X2NhcmRfYm94XCI6IFwid2FsbGV0X3dhbGxldF9jYXJkX2JveF9fUWl3TnBcIixcblx0XCJib3hfY29udGFpbmVyXCI6IFwid2FsbGV0X2JveF9jb250YWluZXJfX2ZSdkN4XCIsXG5cdFwidWlfYm94XzJcIjogXCJ3YWxsZXRfdWlfYm94XzJfX1lyVXFSXCIsXG5cdFwidWlfYm94XzNcIjogXCJ3YWxsZXRfdWlfYm94XzNfX0lBNjUzXCIsXG5cdFwiYmFsYW5jZVwiOiBcIndhbGxldF9iYWxhbmNlX19xam5aTFwiLFxuXHRcIndpdGhkcmF3X2J0blwiOiBcIndhbGxldF93aXRoZHJhd19idG5fX195aXluXCJcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/wallet/wallet.module.scss\n");

/***/ }),

/***/ "./pages/wallet/index.js":
/*!*******************************!*\
  !*** ./pages/wallet/index.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _wallet_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wallet.module.scss */ \"./pages/wallet/wallet.module.scss\");\n/* harmony import */ var _wallet_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wallet_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst Index = ()=>{\n    const [coins, setCoins] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const coinBalace = localStorage.getItem(\"coins\");\n        setCoins(coinBalace);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: (_wallet_module_scss__WEBPACK_IMPORTED_MODULE_2___default().wallet_card_box),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        className: (_wallet_module_scss__WEBPACK_IMPORTED_MODULE_2___default().box_container),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_wallet_module_scss__WEBPACK_IMPORTED_MODULE_2___default().ui_box_1)\n                            }, void 0, false, {\n                                fileName: \"/workspaces/esportshouse/pages/wallet/index.js\",\n                                lineNumber: 14,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_wallet_module_scss__WEBPACK_IMPORTED_MODULE_2___default().ui_box_2)\n                            }, void 0, false, {\n                                fileName: \"/workspaces/esportshouse/pages/wallet/index.js\",\n                                lineNumber: 15,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_wallet_module_scss__WEBPACK_IMPORTED_MODULE_2___default().ui_box_3)\n                            }, void 0, false, {\n                                fileName: \"/workspaces/esportshouse/pages/wallet/index.js\",\n                                lineNumber: 16,\n                                columnNumber: 9\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/workspaces/esportshouse/pages/wallet/index.js\",\n                        lineNumber: 13,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Comming Soon\"\n                    }, void 0, false, {\n                        fileName: \"/workspaces/esportshouse/pages/wallet/index.js\",\n                        lineNumber: 19,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspaces/esportshouse/pages/wallet/index.js\",\n                lineNumber: 12,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: (_wallet_module_scss__WEBPACK_IMPORTED_MODULE_2___default().balance),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"balance\"\n                    }, void 0, false, {\n                        fileName: \"/workspaces/esportshouse/pages/wallet/index.js\",\n                        lineNumber: 23,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: coins\n                    }, void 0, false, {\n                        fileName: \"/workspaces/esportshouse/pages/wallet/index.js\",\n                        lineNumber: 24,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspaces/esportshouse/pages/wallet/index.js\",\n                lineNumber: 22,\n                columnNumber: 1\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: (_wallet_module_scss__WEBPACK_IMPORTED_MODULE_2___default().withdraw_btn),\n                children: \"withdraw money\"\n            }, void 0, false, {\n                fileName: \"/workspaces/esportshouse/pages/wallet/index.js\",\n                lineNumber: 26,\n                columnNumber: 1\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspaces/esportshouse/pages/wallet/index.js\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy93YWxsZXQvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQThDO0FBQ047QUFFeEMsTUFBTUksUUFBUSxJQUFNO0lBQ2xCLE1BQU0sQ0FBQ0MsT0FBTUMsU0FBUyxHQUFHTCwrQ0FBUUEsQ0FBQztJQUNsQ0MsZ0RBQVNBLENBQUMsSUFBSTtRQUNaLE1BQU1LLGFBQWFDLGFBQWFDLE9BQU8sQ0FBQztRQUN4Q0gsU0FBU0M7SUFDWCxHQUFFLEVBQUU7SUFDSixxQkFDRSw4REFBQ0c7UUFBS0MsV0FBV1IsNEVBQXFCOzswQkFDdEMsOERBQUNVOztrQ0FDRyw4REFBQ0M7d0JBQVFILFdBQVdSLDBFQUFtQjs7MENBQ3ZDLDhEQUFDYTtnQ0FBSUwsV0FBV1IscUVBQWM7Ozs7OzswQ0FDOUIsOERBQUNhO2dDQUFJTCxXQUFXUixxRUFBYzs7Ozs7OzBDQUM5Qiw4REFBQ2E7Z0NBQUlMLFdBQVdSLHFFQUFjOzs7Ozs7Ozs7Ozs7a0NBRzlCLDhEQUFDaUI7a0NBQUc7Ozs7Ozs7Ozs7OzswQkFHWiw4REFBQ047Z0JBQVFILFdBQVdSLG9FQUFhOztrQ0FDN0IsOERBQUNpQjtrQ0FBRzs7Ozs7O2tDQUNKLDhEQUFDRTtrQ0FBR2pCOzs7Ozs7Ozs7Ozs7MEJBRVIsOERBQUNrQjtnQkFBT1osV0FBV1IseUVBQWtCOzBCQUFFOzs7Ozs7Ozs7Ozs7QUFHdkM7QUFFQSxpRUFBZUMsS0FBS0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2dhbXludF93ZWIvLi9wYWdlcy93YWxsZXQvaW5kZXguanM/MmE5NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlLHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZSBmcm9tIFwiLi93YWxsZXQubW9kdWxlLnNjc3NcIlxyXG5cclxuY29uc3QgSW5kZXggPSAoKSA9PiB7XHJcbiAgY29uc3QgW2NvaW5zLHNldENvaW5zXSA9IHVzZVN0YXRlKDApXHJcbiAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICBjb25zdCBjb2luQmFsYWNlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjb2luc1wiKVxyXG4gICAgc2V0Q29pbnMoY29pbkJhbGFjZSlcclxuICB9LFtdKVxyXG4gIHJldHVybiAoXHJcbiAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlLndhbGxldF9jYXJkX2JveH0+XHJcbiAgICA8bmF2PlxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGUuYm94X2NvbnRhaW5lcn0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnVpX2JveF8xfT48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUudWlfYm94XzJ9PjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS51aV9ib3hfM30+PC9kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgICAgICA8aDE+Q29tbWluZyBTb29uPC9oMT5cclxuICAgIDwvbmF2PlxyXG5cclxuPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZS5iYWxhbmNlfT5cclxuICAgIDxoMT5iYWxhbmNlPC9oMT5cclxuICAgIDxwPntjb2luc308L3A+XHJcbjwvc2VjdGlvbj5cclxuPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlLndpdGhkcmF3X2J0bn0+d2l0aGRyYXcgbW9uZXk8L2J1dHRvbj5cclxuPC9tYWluPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXgiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInN0eWxlIiwiSW5kZXgiLCJjb2lucyIsInNldENvaW5zIiwiY29pbkJhbGFjZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJtYWluIiwiY2xhc3NOYW1lIiwid2FsbGV0X2NhcmRfYm94IiwibmF2Iiwic2VjdGlvbiIsImJveF9jb250YWluZXIiLCJkaXYiLCJ1aV9ib3hfMSIsInVpX2JveF8yIiwidWlfYm94XzMiLCJoMSIsImJhbGFuY2UiLCJwIiwiYnV0dG9uIiwid2l0aGRyYXdfYnRuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/wallet/index.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/wallet/index.js"));
module.exports = __webpack_exports__;

})();