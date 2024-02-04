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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hexagon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hexagon */ \"./src/components/hexagon.js\");\n\n\n\nconst Honeycomb = ()=>{\n    const hexagons = []; // Para almacenar los componentes hexágonos\n    // Ajusta estos valores según el número de hexágonos y filas que desees\n    const rows = 15;\n    const cols = 12;\n    for(let row = 0; row < rows; row++){\n        for(let col = 0; col < cols; col++){\n            // Ajusta estos valores para cambiar el espaciado y el tamaño\n            const x = col * 75 + row % 2 * 38; // Desplazamiento para filas alternas\n            const y = row * 65;\n            hexagons.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    position: \"absolute\",\n                    left: \"\".concat(x, \"px\"),\n                    top: \"\".concat(y, \"px\")\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_hexagon__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\macma\\\\OneDrive\\\\Documents\\\\Dev\\\\5M\\\\Ceiva3-Front\\\\src\\\\components\\\\honeycomb.js\",\n                    lineNumber: 19,\n                    columnNumber: 11\n                }, undefined)\n            }, \"\".concat(row, \"-\").concat(col), false, {\n                fileName: \"C:\\\\Users\\\\macma\\\\OneDrive\\\\Documents\\\\Dev\\\\5M\\\\Ceiva3-Front\\\\src\\\\components\\\\honeycomb.js\",\n                lineNumber: 18,\n                columnNumber: 9\n            }, undefined));\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            position: \"relative\"\n        },\n        children: hexagons\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\macma\\\\OneDrive\\\\Documents\\\\Dev\\\\5M\\\\Ceiva3-Front\\\\src\\\\components\\\\honeycomb.js\",\n        lineNumber: 25,\n        columnNumber: 10\n    }, undefined);\n};\n_c = Honeycomb;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Honeycomb);\nvar _c;\n$RefreshReg$(_c, \"Honeycomb\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9ob25leWNvbWIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUEwQjtBQUNNO0FBRWhDLE1BQU1FLFlBQVk7SUFDaEIsTUFBTUMsV0FBVyxFQUFFLEVBQUUsMkNBQTJDO0lBRWhFLHVFQUF1RTtJQUN2RSxNQUFNQyxPQUFPO0lBQ2IsTUFBTUMsT0FBTztJQUViLElBQUssSUFBSUMsTUFBTSxHQUFHQSxNQUFNRixNQUFNRSxNQUFPO1FBQ25DLElBQUssSUFBSUMsTUFBTSxHQUFHQSxNQUFNRixNQUFNRSxNQUFPO1lBQ25DLDZEQUE2RDtZQUM3RCxNQUFNQyxJQUFJRCxNQUFNLEtBQUssTUFBTyxJQUFLLElBQUkscUNBQXFDO1lBQzFFLE1BQU1FLElBQUlILE1BQU07WUFFaEJILFNBQVNPLElBQUksZUFDWCw4REFBQ0M7Z0JBQTBCQyxPQUFPO29CQUFFQyxVQUFVO29CQUFZQyxNQUFNLEdBQUssT0FBRk4sR0FBRTtvQkFBS08sS0FBSyxHQUFLLE9BQUZOLEdBQUU7Z0JBQUk7MEJBQ3RGLDRFQUFDUixnREFBT0E7Ozs7O2VBREEsR0FBVU0sT0FBUEQsS0FBSSxLQUFPLE9BQUpDOzs7OztRQUl4QjtJQUNGO0lBRUEscUJBQU8sOERBQUNJO1FBQUlDLE9BQU87WUFBRUMsVUFBVTtRQUFXO2tCQUFJVjs7Ozs7O0FBQ2hEO0tBdEJNRDtBQXdCTiwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9ob25leWNvbWIuanM/ODRmNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGV4YWdvbiBmcm9tICcuL2hleGFnb24nO1xyXG5cclxuY29uc3QgSG9uZXljb21iID0gKCkgPT4ge1xyXG4gIGNvbnN0IGhleGFnb25zID0gW107IC8vIFBhcmEgYWxtYWNlbmFyIGxvcyBjb21wb25lbnRlcyBoZXjDoWdvbm9zXHJcblxyXG4gIC8vIEFqdXN0YSBlc3RvcyB2YWxvcmVzIHNlZ8O6biBlbCBuw7ptZXJvIGRlIGhleMOhZ29ub3MgeSBmaWxhcyBxdWUgZGVzZWVzXHJcbiAgY29uc3Qgcm93cyA9IDE1O1xyXG4gIGNvbnN0IGNvbHMgPSAxMjtcclxuXHJcbiAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgcm93czsgcm93KyspIHtcclxuICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IGNvbHM7IGNvbCsrKSB7XHJcbiAgICAgIC8vIEFqdXN0YSBlc3RvcyB2YWxvcmVzIHBhcmEgY2FtYmlhciBlbCBlc3BhY2lhZG8geSBlbCB0YW1hw7FvXHJcbiAgICAgIGNvbnN0IHggPSBjb2wgKiA3NSArIChyb3cgJSAyKSAqIDM4OyAvLyBEZXNwbGF6YW1pZW50byBwYXJhIGZpbGFzIGFsdGVybmFzXHJcbiAgICAgIGNvbnN0IHkgPSByb3cgKiA2NTtcclxuXHJcbiAgICAgIGhleGFnb25zLnB1c2goXHJcbiAgICAgICAgPGRpdiBrZXk9e2Ake3Jvd30tJHtjb2x9YH0gc3R5bGU9e3sgcG9zaXRpb246ICdhYnNvbHV0ZScsIGxlZnQ6IGAke3h9cHhgLCB0b3A6IGAke3l9cHhgIH19PlxyXG4gICAgICAgICAgPEhleGFnb24gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnIH19PntoZXhhZ29uc308L2Rpdj47XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb25leWNvbWI7Il0sIm5hbWVzIjpbIlJlYWN0IiwiSGV4YWdvbiIsIkhvbmV5Y29tYiIsImhleGFnb25zIiwicm93cyIsImNvbHMiLCJyb3ciLCJjb2wiLCJ4IiwieSIsInB1c2giLCJkaXYiLCJzdHlsZSIsInBvc2l0aW9uIiwibGVmdCIsInRvcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/honeycomb.js\n"));

/***/ })

});