"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/map",{

/***/ "./src/components/hexagon.js":
/*!***********************************!*\
  !*** ./src/components/hexagon.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst Hexagon = ()=>{\n    _s();\n    const [color, setColor] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"white\"); // Estado inicial blanco\n    const toggleColor = ()=>{\n        setColor((currentColor)=>currentColor === \"white\" ? \"yellow\" : \"white\"); // Cambia el color al hacer clic\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n        width: \"100\",\n        height: \"115\",\n        viewBox: \"0 0 100 86\",\n        onClick: toggleColor,\n        style: {\n            cursor: \"pointer\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"polygon\", {\n            points: \"50,0 100,25 100,75 50,100 0,75 0,25\",\n            style: {\n                fill: color,\n                stroke: \"black\",\n                strokeWidth: 1\n            }\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\macma\\\\OneDrive\\\\Documents\\\\Dev\\\\5M\\\\Ceiva3-Front\\\\src\\\\components\\\\hexagon.js\",\n            lineNumber: 12,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\macma\\\\OneDrive\\\\Documents\\\\Dev\\\\5M\\\\Ceiva3-Front\\\\src\\\\components\\\\hexagon.js\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Hexagon, \"sEuKFR1zHVeSkinT6YT9WoMdcDk=\");\n_c = Hexagon;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Hexagon);\nvar _c;\n$RefreshReg$(_c, \"Hexagon\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9oZXhhZ29uLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBd0M7QUFFeEMsTUFBTUUsVUFBVTs7SUFDZCxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR0gsK0NBQVFBLENBQUMsVUFBVSx3QkFBd0I7SUFFckUsTUFBTUksY0FBYztRQUNsQkQsU0FBU0UsQ0FBQUEsZUFBZ0JBLGlCQUFpQixVQUFVLFdBQVcsVUFBVSxnQ0FBZ0M7SUFDM0c7SUFFQSxxQkFDRSw4REFBQ0M7UUFBSUMsT0FBTTtRQUFNQyxRQUFPO1FBQU1DLFNBQVE7UUFBYUMsU0FBU047UUFBYU8sT0FBTztZQUFFQyxRQUFRO1FBQVU7a0JBQ2xHLDRFQUFDQztZQUNDQyxRQUFPO1lBQ1BILE9BQU87Z0JBQ0xJLE1BQU1iO2dCQUNOYyxRQUFRO2dCQUNSQyxhQUFhO1lBQ2Y7Ozs7Ozs7Ozs7O0FBSVI7R0FuQk1oQjtLQUFBQTtBQXFCTiwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9oZXhhZ29uLmpzPzA1N2UiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgSGV4YWdvbiA9ICgpID0+IHtcclxuICBjb25zdCBbY29sb3IsIHNldENvbG9yXSA9IHVzZVN0YXRlKCd3aGl0ZScpOyAvLyBFc3RhZG8gaW5pY2lhbCBibGFuY29cclxuXHJcbiAgY29uc3QgdG9nZ2xlQ29sb3IgPSAoKSA9PiB7XHJcbiAgICBzZXRDb2xvcihjdXJyZW50Q29sb3IgPT4gY3VycmVudENvbG9yID09PSAnd2hpdGUnID8gJ3llbGxvdycgOiAnd2hpdGUnKTsgLy8gQ2FtYmlhIGVsIGNvbG9yIGFsIGhhY2VyIGNsaWNcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHN2ZyB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjExNVwiIHZpZXdCb3g9XCIwIDAgMTAwIDg2XCIgb25DbGljaz17dG9nZ2xlQ29sb3J9IHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInIH19PlxyXG4gICAgICA8cG9seWdvblxyXG4gICAgICAgIHBvaW50cz1cIjUwLDAgMTAwLDI1IDEwMCw3NSA1MCwxMDAgMCw3NSAwLDI1XCJcclxuICAgICAgICBzdHlsZT17eyBcclxuICAgICAgICAgIGZpbGw6IGNvbG9yLCBcclxuICAgICAgICAgIHN0cm9rZTogJ2JsYWNrJywgXHJcbiAgICAgICAgICBzdHJva2VXaWR0aDogMSxcclxuICAgICAgICB9fVxyXG4gICAgICAvPlxyXG4gICAgPC9zdmc+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhleGFnb247Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJIZXhhZ29uIiwiY29sb3IiLCJzZXRDb2xvciIsInRvZ2dsZUNvbG9yIiwiY3VycmVudENvbG9yIiwic3ZnIiwid2lkdGgiLCJoZWlnaHQiLCJ2aWV3Qm94Iiwib25DbGljayIsInN0eWxlIiwiY3Vyc29yIiwicG9seWdvbiIsInBvaW50cyIsImZpbGwiLCJzdHJva2UiLCJzdHJva2VXaWR0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/hexagon.js\n"));

/***/ })

});