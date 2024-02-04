"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/nfts",{

/***/ "./src/components/nftcatalogo.js":
/*!***************************************!*\
  !*** ./src/components/nftcatalogo.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_NFTCatalog_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/NFTCatalog.module.css */ \"./src/styles/NFTCatalog.module.css\");\n/* harmony import */ var _styles_NFTCatalog_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_NFTCatalog_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n // Asumiendo que usas CSS Modules para los estilos\nconst testImageUrl = \"../public/emi.jpg\";\n// Componente para mostrar un NFT individual\nconst NFTCard = (param)=>{\n    let { nft } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_NFTCatalog_module_css__WEBPACK_IMPORTED_MODULE_2___default().card),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: testImageUrl,\n                alt: nft.name,\n                className: (_styles_NFTCatalog_module_css__WEBPACK_IMPORTED_MODULE_2___default().image)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\macma\\\\OneDrive\\\\Documents\\\\Dev\\\\5M\\\\Ceiva3-Front\\\\src\\\\components\\\\nftcatalogo.js\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_NFTCatalog_module_css__WEBPACK_IMPORTED_MODULE_2___default().details),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: (_styles_NFTCatalog_module_css__WEBPACK_IMPORTED_MODULE_2___default().name),\n                        children: nft.name\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\macma\\\\OneDrive\\\\Documents\\\\Dev\\\\5M\\\\Ceiva3-Front\\\\src\\\\components\\\\nftcatalogo.js\",\n                        lineNumber: 12,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: (_styles_NFTCatalog_module_css__WEBPACK_IMPORTED_MODULE_2___default().price),\n                        children: [\n                            \"Precio: \",\n                            nft.price,\n                            \" ETH\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\macma\\\\OneDrive\\\\Documents\\\\Dev\\\\5M\\\\Ceiva3-Front\\\\src\\\\components\\\\nftcatalogo.js\",\n                        lineNumber: 13,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: (_styles_NFTCatalog_module_css__WEBPACK_IMPORTED_MODULE_2___default().buyButton),\n                        children: \"Comprar\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\macma\\\\OneDrive\\\\Documents\\\\Dev\\\\5M\\\\Ceiva3-Front\\\\src\\\\components\\\\nftcatalogo.js\",\n                        lineNumber: 14,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\macma\\\\OneDrive\\\\Documents\\\\Dev\\\\5M\\\\Ceiva3-Front\\\\src\\\\components\\\\nftcatalogo.js\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\macma\\\\OneDrive\\\\Documents\\\\Dev\\\\5M\\\\Ceiva3-Front\\\\src\\\\components\\\\nftcatalogo.js\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, undefined);\n};\n_c = NFTCard;\n// Componente principal que muestra la cuadrícula de NFTs\nconst NFTCatalog = (param)=>{\n    let { nfts } = param;\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"nft-catalog\",\n        children: nfts === null || nfts === void 0 ? void 0 : nfts.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"nft-card\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: item.image,\n                        alt: item.name\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\macma\\\\OneDrive\\\\Documents\\\\Dev\\\\5M\\\\Ceiva3-Front\\\\src\\\\components\\\\nftcatalogo.js\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: item.name\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\macma\\\\OneDrive\\\\Documents\\\\Dev\\\\5M\\\\Ceiva3-Front\\\\src\\\\components\\\\nftcatalogo.js\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Precio: \",\n                            item.price\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\macma\\\\OneDrive\\\\Documents\\\\Dev\\\\5M\\\\Ceiva3-Front\\\\src\\\\components\\\\nftcatalogo.js\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        children: \"Comprar\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\macma\\\\OneDrive\\\\Documents\\\\Dev\\\\5M\\\\Ceiva3-Front\\\\src\\\\components\\\\nftcatalogo.js\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, item.id, true, {\n                fileName: \"C:\\\\Users\\\\macma\\\\OneDrive\\\\Documents\\\\Dev\\\\5M\\\\Ceiva3-Front\\\\src\\\\components\\\\nftcatalogo.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\macma\\\\OneDrive\\\\Documents\\\\Dev\\\\5M\\\\Ceiva3-Front\\\\src\\\\components\\\\nftcatalogo.js\",\n        lineNumber: 22,\n        columnNumber: 3\n    }, undefined);\n};\n_c1 = NFTCatalog;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NFTCard);\nvar _c, _c1;\n$RefreshReg$(_c, \"NFTCard\");\n$RefreshReg$(_c1, \"NFTCatalog\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9uZnRjYXRhbG9nby5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUEwQjtBQUMyQixDQUFDLGtEQUFrRDtBQUV4RyxNQUFNRSxlQUFlO0FBRXJCLDRDQUE0QztBQUM1QyxNQUFNQyxVQUFVO1FBQUMsRUFBRUMsR0FBRyxFQUFFO0lBQ3RCLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFXTCwyRUFBVzs7MEJBQ3pCLDhEQUFDTztnQkFBSUMsS0FBS1A7Z0JBQWNRLEtBQUtOLElBQUlPLElBQUk7Z0JBQUVMLFdBQVdMLDRFQUFZOzs7Ozs7MEJBQzlELDhEQUFDSTtnQkFBSUMsV0FBV0wsOEVBQWM7O2tDQUM1Qiw4REFBQ2E7d0JBQUdSLFdBQVdMLDJFQUFXO2tDQUFHRyxJQUFJTyxJQUFJOzs7Ozs7a0NBQ3JDLDhEQUFDSTt3QkFBRVQsV0FBV0wsNEVBQVk7OzRCQUFFOzRCQUFTRyxJQUFJWSxLQUFLOzRCQUFDOzs7Ozs7O2tDQUMvQyw4REFBQ0M7d0JBQU9YLFdBQVdMLGdGQUFnQjtrQ0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSTdDO0tBWE1FO0FBYU4seURBQXlEO0FBQ3pELE1BQU1nQixhQUFhO1FBQUMsRUFBRUMsSUFBSSxFQUFFO2tCQUMxQiw4REFBQ2Y7UUFBSUMsV0FBVTtrQkFDWmMsaUJBQUFBLDJCQUFBQSxLQUFNQyxHQUFHLENBQUMsQ0FBQ0MscUJBQ1YsOERBQUNqQjtnQkFBa0JDLFdBQVU7O2tDQUMzQiw4REFBQ0U7d0JBQUlDLEtBQUthLEtBQUtWLEtBQUs7d0JBQUVGLEtBQUtZLEtBQUtYLElBQUk7Ozs7OztrQ0FDcEMsOERBQUNHO2tDQUFJUSxLQUFLWCxJQUFJOzs7Ozs7a0NBQ2QsOERBQUNJOzs0QkFBRTs0QkFBU08sS0FBS04sS0FBSzs7Ozs7OztrQ0FDdEIsOERBQUNDO2tDQUFPOzs7Ozs7O2VBSkFLLEtBQUtDLEVBQUU7Ozs7Ozs7Ozs7QUFRdkI7TUFYTUo7QUFhTiwrREFBZWhCLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbmZ0Y2F0YWxvZ28uanM/NWI0NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9ORlRDYXRhbG9nLm1vZHVsZS5jc3NcIjsgLy8gQXN1bWllbmRvIHF1ZSB1c2FzIENTUyBNb2R1bGVzIHBhcmEgbG9zIGVzdGlsb3NcclxuXHJcbmNvbnN0IHRlc3RJbWFnZVVybCA9IFwiLi4vcHVibGljL2VtaS5qcGdcIjtcclxuXHJcbi8vIENvbXBvbmVudGUgcGFyYSBtb3N0cmFyIHVuIE5GVCBpbmRpdmlkdWFsXHJcbmNvbnN0IE5GVENhcmQgPSAoeyBuZnQgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9PlxyXG4gICAgICA8aW1nIHNyYz17dGVzdEltYWdlVXJsfSBhbHQ9e25mdC5uYW1lfSBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZX0gLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZXRhaWxzfT5cclxuICAgICAgICA8aDMgY2xhc3NOYW1lPXtzdHlsZXMubmFtZX0+e25mdC5uYW1lfTwvaDM+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMucHJpY2V9PlByZWNpbzoge25mdC5wcmljZX0gRVRIPC9wPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV5QnV0dG9ufT5Db21wcmFyPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbi8vIENvbXBvbmVudGUgcHJpbmNpcGFsIHF1ZSBtdWVzdHJhIGxhIGN1YWRyw61jdWxhIGRlIE5GVHNcclxuY29uc3QgTkZUQ2F0YWxvZyA9ICh7IG5mdHMgfSkgPT4ge1xyXG4gIDxkaXYgY2xhc3NOYW1lPVwibmZ0LWNhdGFsb2dcIj5cclxuICAgIHtuZnRzPy5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgPGRpdiBrZXk9e2l0ZW0uaWR9IGNsYXNzTmFtZT1cIm5mdC1jYXJkXCI+XHJcbiAgICAgICAgPGltZyBzcmM9e2l0ZW0uaW1hZ2V9IGFsdD17aXRlbS5uYW1lfSAvPlxyXG4gICAgICAgIDxoMz57aXRlbS5uYW1lfTwvaDM+XHJcbiAgICAgICAgPHA+UHJlY2lvOiB7aXRlbS5wcmljZX08L3A+XHJcbiAgICAgICAgPGJ1dHRvbj5Db21wcmFyPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKSl9XHJcbiAgPC9kaXY+O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTkZUQ2FyZDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVzIiwidGVzdEltYWdlVXJsIiwiTkZUQ2FyZCIsIm5mdCIsImRpdiIsImNsYXNzTmFtZSIsImNhcmQiLCJpbWciLCJzcmMiLCJhbHQiLCJuYW1lIiwiaW1hZ2UiLCJkZXRhaWxzIiwiaDMiLCJwIiwicHJpY2UiLCJidXR0b24iLCJidXlCdXR0b24iLCJORlRDYXRhbG9nIiwibmZ0cyIsIm1hcCIsIml0ZW0iLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/nftcatalogo.js\n"));

/***/ })

});