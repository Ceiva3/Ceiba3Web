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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst Hexagon = ()=>{\n    _s();\n    const [color, setColor] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"white\"); // Estado inicial blanco\n    const toggleColor = ()=>{\n        setColor((currentColor)=>currentColor === \"white\" ? \"yellow\" : \"white\"); // Cambia el color al hacer clic\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n        width: \"100\",\n        height: \"15\",\n        viewBox: \"0 0 100 86\",\n        onClick: toggleColor,\n        style: {\n            cursor: \"pointer\",\n            padding: \"12px\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"polygon\", {\n            points: \"50,0 100,25 100,75 50,100 0,75 0,25\",\n            style: {\n                fill: color,\n                stroke: \"black\",\n                strokeWidth: 1\n            }\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\macma\\\\OneDrive\\\\Documents\\\\Dev\\\\5M\\\\Ceiva3-Front\\\\src\\\\components\\\\hexagon.js\",\n            lineNumber: 12,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\macma\\\\OneDrive\\\\Documents\\\\Dev\\\\5M\\\\Ceiva3-Front\\\\src\\\\components\\\\hexagon.js\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Hexagon, \"sEuKFR1zHVeSkinT6YT9WoMdcDk=\");\n_c = Hexagon;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Hexagon);\nvar _c;\n$RefreshReg$(_c, \"Hexagon\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9oZXhhZ29uLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBd0M7QUFFeEMsTUFBTUUsVUFBVTs7SUFDZCxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR0gsK0NBQVFBLENBQUMsVUFBVSx3QkFBd0I7SUFFckUsTUFBTUksY0FBYztRQUNsQkQsU0FBU0UsQ0FBQUEsZUFBZ0JBLGlCQUFpQixVQUFVLFdBQVcsVUFBVSxnQ0FBZ0M7SUFDM0c7SUFFQSxxQkFDRSw4REFBQ0M7UUFBSUMsT0FBTTtRQUFNQyxRQUFPO1FBQUtDLFNBQVE7UUFBYUMsU0FBU047UUFBYU8sT0FBTztZQUFFQyxRQUFRO1lBQVdDLFNBQVM7UUFBTztrQkFDbEgsNEVBQUNDO1lBQ0NDLFFBQU87WUFDUEosT0FBTztnQkFBRUssTUFBTWQ7Z0JBQU9lLFFBQVE7Z0JBQVNDLGFBQWE7WUFBRTs7Ozs7Ozs7Ozs7QUFJOUQ7R0FmTWpCO0tBQUFBO0FBaUJOLCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2hleGFnb24uanM/MDU3ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBIZXhhZ29uID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtjb2xvciwgc2V0Q29sb3JdID0gdXNlU3RhdGUoJ3doaXRlJyk7IC8vIEVzdGFkbyBpbmljaWFsIGJsYW5jb1xyXG5cclxuICBjb25zdCB0b2dnbGVDb2xvciA9ICgpID0+IHtcclxuICAgIHNldENvbG9yKGN1cnJlbnRDb2xvciA9PiBjdXJyZW50Q29sb3IgPT09ICd3aGl0ZScgPyAneWVsbG93JyA6ICd3aGl0ZScpOyAvLyBDYW1iaWEgZWwgY29sb3IgYWwgaGFjZXIgY2xpY1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTVcIiB2aWV3Qm94PVwiMCAwIDEwMCA4NlwiIG9uQ2xpY2s9e3RvZ2dsZUNvbG9yfSBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJywgcGFkZGluZzogXCIxMnB4XCIgfX0+XHJcbiAgICAgIDxwb2x5Z29uXHJcbiAgICAgICAgcG9pbnRzPVwiNTAsMCAxMDAsMjUgMTAwLDc1IDUwLDEwMCAwLDc1IDAsMjVcIlxyXG4gICAgICAgIHN0eWxlPXt7IGZpbGw6IGNvbG9yLCBzdHJva2U6ICdibGFjaycsIHN0cm9rZVdpZHRoOiAxIH19XHJcbiAgICAgIC8+XHJcbiAgICA8L3N2Zz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGV4YWdvbjsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkhleGFnb24iLCJjb2xvciIsInNldENvbG9yIiwidG9nZ2xlQ29sb3IiLCJjdXJyZW50Q29sb3IiLCJzdmciLCJ3aWR0aCIsImhlaWdodCIsInZpZXdCb3giLCJvbkNsaWNrIiwic3R5bGUiLCJjdXJzb3IiLCJwYWRkaW5nIiwicG9seWdvbiIsInBvaW50cyIsImZpbGwiLCJzdHJva2UiLCJzdHJva2VXaWR0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/hexagon.js\n"));

/***/ })

});