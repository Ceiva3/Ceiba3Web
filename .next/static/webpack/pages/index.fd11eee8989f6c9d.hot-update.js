"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/carousel.js":
/*!************************************!*\
  !*** ./src/components/carousel.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MyCarousel; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Carousel */ \"./node_modules/react-bootstrap/esm/Carousel.js\");\n/* harmony import */ var react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Image */ \"./node_modules/react-bootstrap/esm/Image.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction MyCarousel() {\n    _s();\n    const carouselRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const intervalId = setInterval(()=>{\n            if (carouselRef.current) {\n                carouselRef.current.next();\n            }\n        }, 4000);\n        return ()=>{\n            clearInterval(intervalId);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        ref: carouselRef,\n        interval: 20000,\n        touch: false,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Item, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        src: \"/1.webp\",\n                        style: {\n                            height: \"75vh\",\n                            objectFit: \"cover\",\n                            display: \"block\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\macma\\\\OneDrive\\\\Documents\\\\Dev\\\\5M\\\\Ceiva3-Front\\\\src\\\\components\\\\carousel.js\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Caption, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: \"First slide label\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\macma\\\\OneDrive\\\\Documents\\\\Dev\\\\5M\\\\Ceiva3-Front\\\\src\\\\components\\\\carousel.js\",\n                                lineNumber: 31,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Some representative placeholder content for the first slide.\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\macma\\\\OneDrive\\\\Documents\\\\Dev\\\\5M\\\\Ceiva3-Front\\\\src\\\\components\\\\carousel.js\",\n                                lineNumber: 32,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\macma\\\\OneDrive\\\\Documents\\\\Dev\\\\5M\\\\Ceiva3-Front\\\\src\\\\components\\\\carousel.js\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\macma\\\\OneDrive\\\\Documents\\\\Dev\\\\5M\\\\Ceiva3-Front\\\\src\\\\components\\\\carousel.js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Item, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        src: \"/3.webp\",\n                        style: {\n                            height: \"75vh\",\n                            objectFit: \"cover\",\n                            display: \"block\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\macma\\\\OneDrive\\\\Documents\\\\Dev\\\\5M\\\\Ceiva3-Front\\\\src\\\\components\\\\carousel.js\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Caption, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: \"Second slide label\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\macma\\\\OneDrive\\\\Documents\\\\Dev\\\\5M\\\\Ceiva3-Front\\\\src\\\\components\\\\carousel.js\",\n                                lineNumber: 45,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Some representative placeholder content for the second slide.\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\macma\\\\OneDrive\\\\Documents\\\\Dev\\\\5M\\\\Ceiva3-Front\\\\src\\\\components\\\\carousel.js\",\n                                lineNumber: 46,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\macma\\\\OneDrive\\\\Documents\\\\Dev\\\\5M\\\\Ceiva3-Front\\\\src\\\\components\\\\carousel.js\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\macma\\\\OneDrive\\\\Documents\\\\Dev\\\\5M\\\\Ceiva3-Front\\\\src\\\\components\\\\carousel.js\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Item, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        src: \"/2.webp\",\n                        style: {\n                            height: \"75vh\",\n                            objectFit: \"cover\",\n                            display: \"block\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\macma\\\\OneDrive\\\\Documents\\\\Dev\\\\5M\\\\Ceiva3-Front\\\\src\\\\components\\\\carousel.js\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Caption, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: \"Third slide label\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\macma\\\\OneDrive\\\\Documents\\\\Dev\\\\5M\\\\Ceiva3-Front\\\\src\\\\components\\\\carousel.js\",\n                                lineNumber: 58,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Some representative placeholder content for the third slide.\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\macma\\\\OneDrive\\\\Documents\\\\Dev\\\\5M\\\\Ceiva3-Front\\\\src\\\\components\\\\carousel.js\",\n                                lineNumber: 59,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\macma\\\\OneDrive\\\\Documents\\\\Dev\\\\5M\\\\Ceiva3-Front\\\\src\\\\components\\\\carousel.js\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\macma\\\\OneDrive\\\\Documents\\\\Dev\\\\5M\\\\Ceiva3-Front\\\\src\\\\components\\\\carousel.js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\macma\\\\OneDrive\\\\Documents\\\\Dev\\\\5M\\\\Ceiva3-Front\\\\src\\\\components\\\\carousel.js\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, this);\n}\n_s(MyCarousel, \"tqI5RslTGVDAuq9aDlmVCnZoZD8=\");\n_c = MyCarousel;\nvar _c;\n$RefreshReg$(_c, \"MyCarousel\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jYXJvdXNlbC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBaUQ7QUFDQztBQUFBO0FBRW5DLFNBQVNLOztJQUN0QixNQUFNQyxjQUFjSiw2Q0FBTUEsQ0FBQztJQUUzQkQsZ0RBQVNBLENBQUM7UUFDUixNQUFNTSxhQUFhQyxZQUFZO1lBQzdCLElBQUlGLFlBQVlHLE9BQU8sRUFBRTtnQkFDdkJILFlBQVlHLE9BQU8sQ0FBQ0MsSUFBSTtZQUMxQjtRQUNGLEdBQUc7UUFFSCxPQUFPO1lBQ0xDLGNBQWNKO1FBQ2hCO0lBQ0YsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNKLGdFQUFRQTtRQUFDUyxLQUFLTjtRQUFhTyxVQUFVO1FBQU9DLE9BQU87OzBCQUNsRCw4REFBQ1gscUVBQWE7O2tDQUNaLDhEQUFDQyw2REFBS0E7d0JBQ0pZLEtBQUs7d0JBQ0xDLE9BQU87NEJBQ0xDLFFBQVE7NEJBQ1JDLFdBQVc7NEJBQ1hDLFNBQVM7d0JBQ1g7Ozs7OztrQ0FFRiw4REFBQ2pCLHdFQUFnQjs7MENBQ2YsOERBQUNtQjswQ0FBRzs7Ozs7OzBDQUNKLDhEQUFDQzswQ0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUdQLDhEQUFDcEIscUVBQWE7O2tDQUNaLDhEQUFDQyw2REFBS0E7d0JBQ0pZLEtBQUs7d0JBQ0xDLE9BQU87NEJBQ0xDLFFBQVE7NEJBQ1JDLFdBQVc7NEJBQ1hDLFNBQVM7d0JBQ1g7Ozs7OztrQ0FFRiw4REFBQ2pCLHdFQUFnQjs7MENBQ2YsOERBQUNtQjswQ0FBRzs7Ozs7OzBDQUNKLDhEQUFDQzswQ0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUdQLDhEQUFDcEIscUVBQWE7O2tDQUNaLDhEQUFDQyw2REFBS0E7d0JBQUNZLEtBQUs7d0JBQ1ZDLE9BQU87NEJBQ0xDLFFBQVE7NEJBQ1JDLFdBQVc7NEJBQ1hDLFNBQVM7d0JBQ1g7Ozs7OztrQ0FFRiw4REFBQ2pCLHdFQUFnQjs7MENBQ2YsOERBQUNtQjswQ0FBRzs7Ozs7OzBDQUNKLDhEQUFDQzswQ0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2I7R0E1RHdCbEI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY2Fyb3VzZWwuanM/NTU2ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQ2Fyb3VzZWwsIEltYWdlIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXlDYXJvdXNlbCgpIHtcclxuICBjb25zdCBjYXJvdXNlbFJlZiA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGludGVydmFsSWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgIGlmIChjYXJvdXNlbFJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgY2Fyb3VzZWxSZWYuY3VycmVudC5uZXh0KCk7XHJcbiAgICAgIH1cclxuICAgIH0sIDQwMDApO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJZCk7XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJvdXNlbCByZWY9e2Nhcm91c2VsUmVmfSBpbnRlcnZhbD17MjAwMDB9IHRvdWNoPXtmYWxzZX0+XHJcbiAgICAgIDxDYXJvdXNlbC5JdGVtPlxyXG4gICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgc3JjPXsnLzEud2VicCd9IFxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgaGVpZ2h0OiAnNzV2aCcsXHJcbiAgICAgICAgICAgIG9iamVjdEZpdDogJ2NvdmVyJyxcclxuICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8Q2Fyb3VzZWwuQ2FwdGlvbj5cclxuICAgICAgICAgIDxoMz5GaXJzdCBzbGlkZSBsYWJlbDwvaDM+XHJcbiAgICAgICAgICA8cD5Tb21lIHJlcHJlc2VudGF0aXZlIHBsYWNlaG9sZGVyIGNvbnRlbnQgZm9yIHRoZSBmaXJzdCBzbGlkZS48L3A+XHJcbiAgICAgICAgPC9DYXJvdXNlbC5DYXB0aW9uPlxyXG4gICAgICA8L0Nhcm91c2VsLkl0ZW0+XHJcbiAgICAgIDxDYXJvdXNlbC5JdGVtPlxyXG4gICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgc3JjPXsnLzMud2VicCd9IFxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgaGVpZ2h0OiAnNzV2aCcsXHJcbiAgICAgICAgICAgIG9iamVjdEZpdDogJ2NvdmVyJyxcclxuICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8Q2Fyb3VzZWwuQ2FwdGlvbj5cclxuICAgICAgICAgIDxoMz5TZWNvbmQgc2xpZGUgbGFiZWw8L2gzPlxyXG4gICAgICAgICAgPHA+U29tZSByZXByZXNlbnRhdGl2ZSBwbGFjZWhvbGRlciBjb250ZW50IGZvciB0aGUgc2Vjb25kIHNsaWRlLjwvcD5cclxuICAgICAgICA8L0Nhcm91c2VsLkNhcHRpb24+XHJcbiAgICAgIDwvQ2Fyb3VzZWwuSXRlbT5cclxuICAgICAgPENhcm91c2VsLkl0ZW0+XHJcbiAgICAgICAgPEltYWdlIHNyYz17Jy8yLndlYnAnfSBcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGhlaWdodDogJzc1dmgnLFxyXG4gICAgICAgICAgICBvYmplY3RGaXQ6ICdjb3ZlcicsXHJcbiAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPENhcm91c2VsLkNhcHRpb24+XHJcbiAgICAgICAgICA8aDM+VGhpcmQgc2xpZGUgbGFiZWw8L2gzPlxyXG4gICAgICAgICAgPHA+U29tZSByZXByZXNlbnRhdGl2ZSBwbGFjZWhvbGRlciBjb250ZW50IGZvciB0aGUgdGhpcmQgc2xpZGUuPC9wPlxyXG4gICAgICAgIDwvQ2Fyb3VzZWwuQ2FwdGlvbj5cclxuICAgICAgPC9DYXJvdXNlbC5JdGVtPlxyXG4gICAgPC9DYXJvdXNlbD5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVJlZiIsIkNhcm91c2VsIiwiSW1hZ2UiLCJNeUNhcm91c2VsIiwiY2Fyb3VzZWxSZWYiLCJpbnRlcnZhbElkIiwic2V0SW50ZXJ2YWwiLCJjdXJyZW50IiwibmV4dCIsImNsZWFySW50ZXJ2YWwiLCJyZWYiLCJpbnRlcnZhbCIsInRvdWNoIiwiSXRlbSIsInNyYyIsInN0eWxlIiwiaGVpZ2h0Iiwib2JqZWN0Rml0IiwiZGlzcGxheSIsIkNhcHRpb24iLCJoMyIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/carousel.js\n"));

/***/ })

});