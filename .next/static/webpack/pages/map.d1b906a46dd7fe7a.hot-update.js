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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst Hexagon = ()=>{\n    _s();\n    const [color, setColor] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"white\"); // Estado inicial blanco\n    const toggleColor = ()=>{\n        setColor((currentColor)=>currentColor === \"white\" ? \"yellow\" : \"white\"); // Cambia el color al hacer clic\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n        width: \"200\",\n        height: \"172\",\n        viewBox: \"200 0 200 \",\n        onClick: toggleColor,\n        style: {\n            position: \"absolute\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"polygon\", {\n            points: \"50,0 100,25 100,75 50,100 0,75 0,25\",\n            style: {\n                fill: color,\n                stroke: \"black\",\n                strokeWidth: 1\n            }\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\macma\\\\OneDrive\\\\Documents\\\\Dev\\\\5M\\\\Ceiva3-Front\\\\src\\\\components\\\\hexagon.js\",\n            lineNumber: 18,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\macma\\\\OneDrive\\\\Documents\\\\Dev\\\\5M\\\\Ceiva3-Front\\\\src\\\\components\\\\hexagon.js\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Hexagon, \"KdM55NrgAbxGAitqEtRSiB2X32U=\");\n_c = Hexagon;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Hexagon);\nvar _c;\n$RefreshReg$(_c, \"Hexagon\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9oZXhhZ29uLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBd0M7QUFFeEMsTUFBTUUsVUFBVTs7SUFDZCxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR0gsK0NBQVFBLENBQUMsVUFBVSx3QkFBd0I7SUFFckUsTUFBTUksY0FBYztRQUNsQkQsU0FBUyxDQUFDRSxlQUFrQkEsaUJBQWlCLFVBQVUsV0FBVyxVQUFXLGdDQUFnQztJQUMvRztJQUVBLHFCQUNFLDhEQUFDQztRQUNDQyxPQUFNO1FBQ05DLFFBQU87UUFDUEMsU0FBUTtRQUNSQyxTQUFTTjtRQUNUTyxPQUFPO1lBQUVDLFVBQVM7UUFBWTtrQkFFOUIsNEVBQUNDO1lBQ0NDLFFBQU87WUFDUEgsT0FBTztnQkFBRUksTUFBTWI7Z0JBQU9jLFFBQVE7Z0JBQVNDLGFBQWE7WUFBRzs7Ozs7Ozs7Ozs7QUFJL0Q7R0FyQk1oQjtLQUFBQTtBQXVCTiwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9oZXhhZ29uLmpzPzA1N2UiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBIZXhhZ29uID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtjb2xvciwgc2V0Q29sb3JdID0gdXNlU3RhdGUoXCJ3aGl0ZVwiKTsgLy8gRXN0YWRvIGluaWNpYWwgYmxhbmNvXHJcblxyXG4gIGNvbnN0IHRvZ2dsZUNvbG9yID0gKCkgPT4ge1xyXG4gICAgc2V0Q29sb3IoKGN1cnJlbnRDb2xvcikgPT4gKGN1cnJlbnRDb2xvciA9PT0gXCJ3aGl0ZVwiID8gXCJ5ZWxsb3dcIiA6IFwid2hpdGVcIikpOyAvLyBDYW1iaWEgZWwgY29sb3IgYWwgaGFjZXIgY2xpY1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnXHJcbiAgICAgIHdpZHRoPVwiMjAwXCJcclxuICAgICAgaGVpZ2h0PVwiMTcyXCJcclxuICAgICAgdmlld0JveD1cIjIwMCAwIDIwMCBcIlxyXG4gICAgICBvbkNsaWNrPXt0b2dnbGVDb2xvcn1cclxuICAgICAgc3R5bGU9e3sgcG9zaXRpb246XCJhYnNvbHV0ZVwiLCB9fVxyXG4gICAgPlxyXG4gICAgICA8cG9seWdvblxyXG4gICAgICAgIHBvaW50cz1cIjUwLDAgMTAwLDI1IDEwMCw3NSA1MCwxMDAgMCw3NSAwLDI1XCJcclxuICAgICAgICBzdHlsZT17eyBmaWxsOiBjb2xvciwgc3Ryb2tlOiBcImJsYWNrXCIsIHN0cm9rZVdpZHRoOiAxLCB9fVxyXG4gICAgICAvPlxyXG4gICAgPC9zdmc+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhleGFnb247XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiSGV4YWdvbiIsImNvbG9yIiwic2V0Q29sb3IiLCJ0b2dnbGVDb2xvciIsImN1cnJlbnRDb2xvciIsInN2ZyIsIndpZHRoIiwiaGVpZ2h0Iiwidmlld0JveCIsIm9uQ2xpY2siLCJzdHlsZSIsInBvc2l0aW9uIiwicG9seWdvbiIsInBvaW50cyIsImZpbGwiLCJzdHJva2UiLCJzdHJva2VXaWR0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/hexagon.js\n"));

/***/ })

});