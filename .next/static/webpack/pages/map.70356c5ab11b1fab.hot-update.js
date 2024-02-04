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

/***/ "./src/components/honeycomb.js":
/*!*************************************!*\
  !*** ./src/components/honeycomb.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hexagon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hexagon */ \"./src/components/hexagon.js\");\n\n\n\nconst Honeycomb = ()=>{\n    const hexagons = []; // Para almacenar los componentes hexágonos\n    // Ajusta estos valores según el número de hexágonos y filas que desees\n    const rows = 5;\n    const cols = 7;\n    for(let row = 0; row < rows; row++){\n        for(let col = 0; col < cols; col++){\n            // Ajusta estos valores para cambiar el espaciado y el tamaño\n            const x = col * 95 + row % 2 * 45; // Desplazamiento para filas alternas\n            const y = row * 95;\n            hexagons.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    position: \"absolute\",\n                    left: \"\".concat(x, \"px\"),\n                    top: \"\".concat(y, \"px\")\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_hexagon__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\macma\\\\OneDrive\\\\Documents\\\\Dev\\\\5M\\\\Ceiva3-Front\\\\src\\\\components\\\\honeycomb.js\",\n                    lineNumber: 26,\n                    columnNumber: 11\n                }, undefined)\n            }, \"\".concat(row, \"-\").concat(col), false, {\n                fileName: \"C:\\\\Users\\\\macma\\\\OneDrive\\\\Documents\\\\Dev\\\\5M\\\\Ceiva3-Front\\\\src\\\\components\\\\honeycomb.js\",\n                lineNumber: 18,\n                columnNumber: 9\n            }, undefined));\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            display: \"flex\",\n            justifyContent: \"center\",\n            alignItems: \"center\"\n        },\n        children: hexagons\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\macma\\\\OneDrive\\\\Documents\\\\Dev\\\\5M\\\\Ceiva3-Front\\\\src\\\\components\\\\honeycomb.js\",\n        lineNumber: 32,\n        columnNumber: 10\n    }, undefined);\n};\n_c = Honeycomb;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Honeycomb);\nvar _c;\n$RefreshReg$(_c, \"Honeycomb\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9ob25leWNvbWIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUEwQjtBQUNNO0FBRWhDLE1BQU1FLFlBQVk7SUFDaEIsTUFBTUMsV0FBVyxFQUFFLEVBQUUsMkNBQTJDO0lBRWhFLHVFQUF1RTtJQUN2RSxNQUFNQyxPQUFPO0lBQ2IsTUFBTUMsT0FBTztJQUViLElBQUssSUFBSUMsTUFBTSxHQUFHQSxNQUFNRixNQUFNRSxNQUFPO1FBQ25DLElBQUssSUFBSUMsTUFBTSxHQUFHQSxNQUFNRixNQUFNRSxNQUFPO1lBQ25DLDZEQUE2RDtZQUM3RCxNQUFNQyxJQUFJRCxNQUFNLEtBQUssTUFBTyxJQUFLLElBQUkscUNBQXFDO1lBQzFFLE1BQU1FLElBQUlILE1BQU07WUFFaEJILFNBQVNPLElBQUksZUFDWCw4REFBQ0M7Z0JBRUNDLE9BQU87b0JBQ0xDLFVBQVU7b0JBQ1ZDLE1BQU0sR0FBSyxPQUFGTixHQUFFO29CQUNYTyxLQUFLLEdBQUssT0FBRk4sR0FBRTtnQkFDWjswQkFFQSw0RUFBQ1IsZ0RBQU9BOzs7OztlQVBILEdBQVVNLE9BQVBELEtBQUksS0FBTyxPQUFKQzs7Ozs7UUFVckI7SUFDRjtJQUVBLHFCQUFPLDhEQUFDSTtRQUFJQyxPQUFPO1lBQUVJLFNBQVM7WUFBUUMsZ0JBQWdCO1lBQVVDLFlBQVk7UUFBUztrQkFBSWY7Ozs7OztBQUMzRjtLQTdCTUQ7QUErQk4sK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaG9uZXljb21iLmpzPzg0ZjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGV4YWdvbiBmcm9tIFwiLi9oZXhhZ29uXCI7XHJcblxyXG5jb25zdCBIb25leWNvbWIgPSAoKSA9PiB7XHJcbiAgY29uc3QgaGV4YWdvbnMgPSBbXTsgLy8gUGFyYSBhbG1hY2VuYXIgbG9zIGNvbXBvbmVudGVzIGhleMOhZ29ub3NcclxuXHJcbiAgLy8gQWp1c3RhIGVzdG9zIHZhbG9yZXMgc2Vnw7puIGVsIG7Dum1lcm8gZGUgaGV4w6Fnb25vcyB5IGZpbGFzIHF1ZSBkZXNlZXNcclxuICBjb25zdCByb3dzID0gNTtcclxuICBjb25zdCBjb2xzID0gNztcclxuXHJcbiAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgcm93czsgcm93KyspIHtcclxuICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IGNvbHM7IGNvbCsrKSB7XHJcbiAgICAgIC8vIEFqdXN0YSBlc3RvcyB2YWxvcmVzIHBhcmEgY2FtYmlhciBlbCBlc3BhY2lhZG8geSBlbCB0YW1hw7FvXHJcbiAgICAgIGNvbnN0IHggPSBjb2wgKiA5NSArIChyb3cgJSAyKSAqIDQ1OyAvLyBEZXNwbGF6YW1pZW50byBwYXJhIGZpbGFzIGFsdGVybmFzXHJcbiAgICAgIGNvbnN0IHkgPSByb3cgKiA5NTtcclxuXHJcbiAgICAgIGhleGFnb25zLnB1c2goXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAga2V5PXtgJHtyb3d9LSR7Y29sfWB9XHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICAgICAgICBsZWZ0OiBgJHt4fXB4YCxcclxuICAgICAgICAgICAgdG9wOiBgJHt5fXB4YCxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEhleGFnb24gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIix9fT57aGV4YWdvbnN9PC9kaXY+O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9uZXljb21iO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJIZXhhZ29uIiwiSG9uZXljb21iIiwiaGV4YWdvbnMiLCJyb3dzIiwiY29scyIsInJvdyIsImNvbCIsIngiLCJ5IiwicHVzaCIsImRpdiIsInN0eWxlIiwicG9zaXRpb24iLCJsZWZ0IiwidG9wIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/honeycomb.js\n"));

/***/ })

});