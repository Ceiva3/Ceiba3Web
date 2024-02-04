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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_NFTCatalog_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/NFTCatalog.module.css */ \"./src/styles/NFTCatalog.module.css\");\n/* harmony import */ var _styles_NFTCatalog_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_NFTCatalog_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n // Asumiendo que usas CSS Modules para los estilos\nconst testImageUrl = \"../public/emi.jpg\";\n// Componente para mostrar un NFT individual\nconst NFTCard = (param)=>{\n    let { nft } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_NFTCatalog_module_css__WEBPACK_IMPORTED_MODULE_2___default().card),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: testImageUrl,\n                alt: nft.name,\n                className: (_styles_NFTCatalog_module_css__WEBPACK_IMPORTED_MODULE_2___default().image)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\macma\\\\OneDrive\\\\Documents\\\\Dev\\\\5M\\\\Ceiva3-Front\\\\src\\\\components\\\\nftcatalogo.js\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_NFTCatalog_module_css__WEBPACK_IMPORTED_MODULE_2___default().details),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: (_styles_NFTCatalog_module_css__WEBPACK_IMPORTED_MODULE_2___default().name),\n                        children: nft.name\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\macma\\\\OneDrive\\\\Documents\\\\Dev\\\\5M\\\\Ceiva3-Front\\\\src\\\\components\\\\nftcatalogo.js\",\n                        lineNumber: 12,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: (_styles_NFTCatalog_module_css__WEBPACK_IMPORTED_MODULE_2___default().price),\n                        children: [\n                            \"Precio: \",\n                            nft.price,\n                            \" ETH\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\macma\\\\OneDrive\\\\Documents\\\\Dev\\\\5M\\\\Ceiva3-Front\\\\src\\\\components\\\\nftcatalogo.js\",\n                        lineNumber: 13,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: (_styles_NFTCatalog_module_css__WEBPACK_IMPORTED_MODULE_2___default().buyButton),\n                        children: \"Comprar\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\macma\\\\OneDrive\\\\Documents\\\\Dev\\\\5M\\\\Ceiva3-Front\\\\src\\\\components\\\\nftcatalogo.js\",\n                        lineNumber: 14,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\macma\\\\OneDrive\\\\Documents\\\\Dev\\\\5M\\\\Ceiva3-Front\\\\src\\\\components\\\\nftcatalogo.js\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\macma\\\\OneDrive\\\\Documents\\\\Dev\\\\5M\\\\Ceiva3-Front\\\\src\\\\components\\\\nftcatalogo.js\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, undefined);\n};\n_c = NFTCard;\n// Componente principal que muestra la cuadrícula de NFTs\nconst NFTCatalog = (param)=>{\n    let { nfts } = param;\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"nft-catalog\",\n        children: nfts === null || nfts === void 0 ? void 0 : nfts.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"nft-card\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: item.image,\n                        alt: item.name\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\macma\\\\OneDrive\\\\Documents\\\\Dev\\\\5M\\\\Ceiva3-Front\\\\src\\\\components\\\\nftcatalogo.js\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: item.name\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\macma\\\\OneDrive\\\\Documents\\\\Dev\\\\5M\\\\Ceiva3-Front\\\\src\\\\components\\\\nftcatalogo.js\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Precio: \",\n                            item.price\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\macma\\\\OneDrive\\\\Documents\\\\Dev\\\\5M\\\\Ceiva3-Front\\\\src\\\\components\\\\nftcatalogo.js\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        children: \"Comprar\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\macma\\\\OneDrive\\\\Documents\\\\Dev\\\\5M\\\\Ceiva3-Front\\\\src\\\\components\\\\nftcatalogo.js\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, item.id, true, {\n                fileName: \"C:\\\\Users\\\\macma\\\\OneDrive\\\\Documents\\\\Dev\\\\5M\\\\Ceiva3-Front\\\\src\\\\components\\\\nftcatalogo.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\macma\\\\OneDrive\\\\Documents\\\\Dev\\\\5M\\\\Ceiva3-Front\\\\src\\\\components\\\\nftcatalogo.js\",\n        lineNumber: 22,\n        columnNumber: 3\n    }, undefined);\n/*return (\r\n    <div className={styles.catalog}>\r\n      {nfts?.map(\r\n        (\r\n          nft // Uso de ?. para prevenir el error si nfts es undefined\r\n        ) => (\r\n          <NFTCard key={nft.id} nft={nft} />\r\n        )\r\n      )}\r\n    </div>\r\n  );*/ };\n_c1 = NFTCatalog;\n//export default NFTCatalog;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NFTCard);\nvar _c, _c1;\n$RefreshReg$(_c, \"NFTCard\");\n$RefreshReg$(_c1, \"NFTCatalog\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9uZnRjYXRhbG9nby5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUEwQjtBQUMyQixDQUFDLGtEQUFrRDtBQUV4RyxNQUFNRSxlQUFlO0FBRXJCLDRDQUE0QztBQUM1QyxNQUFNQyxVQUFVO1FBQUMsRUFBRUMsR0FBRyxFQUFFO0lBQ3RCLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFXTCwyRUFBVzs7MEJBQ3pCLDhEQUFDTztnQkFBSUMsS0FBS1A7Z0JBQWNRLEtBQUtOLElBQUlPLElBQUk7Z0JBQUVMLFdBQVdMLDRFQUFZOzs7Ozs7MEJBQzlELDhEQUFDSTtnQkFBSUMsV0FBV0wsOEVBQWM7O2tDQUM1Qiw4REFBQ2E7d0JBQUdSLFdBQVdMLDJFQUFXO2tDQUFHRyxJQUFJTyxJQUFJOzs7Ozs7a0NBQ3JDLDhEQUFDSTt3QkFBRVQsV0FBV0wsNEVBQVk7OzRCQUFFOzRCQUFTRyxJQUFJWSxLQUFLOzRCQUFDOzs7Ozs7O2tDQUMvQyw4REFBQ0M7d0JBQU9YLFdBQVdMLGdGQUFnQjtrQ0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSTdDO0tBWE1FO0FBYU4seURBQXlEO0FBQ3pELE1BQU1nQixhQUFhO1FBQUMsRUFBRUMsSUFBSSxFQUFFO2tCQUMxQiw4REFBQ2Y7UUFBSUMsV0FBVTtrQkFDWmMsaUJBQUFBLDJCQUFBQSxLQUFNQyxHQUFHLENBQUMsQ0FBQ0MscUJBQ1YsOERBQUNqQjtnQkFBa0JDLFdBQVU7O2tDQUMzQiw4REFBQ0U7d0JBQUlDLEtBQUthLEtBQUtWLEtBQUs7d0JBQUVGLEtBQUtZLEtBQUtYLElBQUk7Ozs7OztrQ0FDcEMsOERBQUNHO2tDQUFJUSxLQUFLWCxJQUFJOzs7Ozs7a0NBQ2QsOERBQUNJOzs0QkFBRTs0QkFBU08sS0FBS04sS0FBSzs7Ozs7OztrQ0FDdEIsOERBQUNDO2tDQUFPOzs7Ozs7O2VBSkFLLEtBQUtDLEVBQUU7Ozs7Ozs7Ozs7QUFRckI7Ozs7Ozs7Ozs7SUFVRSxHQUNKO01BdEJNSjtBQXdCTiw0QkFBNEI7QUFDNUIsK0RBQWVoQixPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL25mdGNhdGFsb2dvLmpzPzViNDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvTkZUQ2F0YWxvZy5tb2R1bGUuY3NzXCI7IC8vIEFzdW1pZW5kbyBxdWUgdXNhcyBDU1MgTW9kdWxlcyBwYXJhIGxvcyBlc3RpbG9zXHJcblxyXG5jb25zdCB0ZXN0SW1hZ2VVcmwgPSBcIi4uL3B1YmxpYy9lbWkuanBnXCI7XHJcblxyXG4vLyBDb21wb25lbnRlIHBhcmEgbW9zdHJhciB1biBORlQgaW5kaXZpZHVhbFxyXG5jb25zdCBORlRDYXJkID0gKHsgbmZ0IH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfT5cclxuICAgICAgPGltZyBzcmM9e3Rlc3RJbWFnZVVybH0gYWx0PXtuZnQubmFtZX0gY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2V9IC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGV0YWlsc30+XHJcbiAgICAgICAgPGgzIGNsYXNzTmFtZT17c3R5bGVzLm5hbWV9PntuZnQubmFtZX08L2gzPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnByaWNlfT5QcmVjaW86IHtuZnQucHJpY2V9IEVUSDwvcD5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1eUJ1dHRvbn0+Q29tcHJhcjwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG4vLyBDb21wb25lbnRlIHByaW5jaXBhbCBxdWUgbXVlc3RyYSBsYSBjdWFkcsOtY3VsYSBkZSBORlRzXHJcbmNvbnN0IE5GVENhdGFsb2cgPSAoeyBuZnRzIH0pID0+IHtcclxuICA8ZGl2IGNsYXNzTmFtZT1cIm5mdC1jYXRhbG9nXCI+XHJcbiAgICB7bmZ0cz8ubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgIDxkaXYga2V5PXtpdGVtLmlkfSBjbGFzc05hbWU9XCJuZnQtY2FyZFwiPlxyXG4gICAgICAgIDxpbWcgc3JjPXtpdGVtLmltYWdlfSBhbHQ9e2l0ZW0ubmFtZX0gLz5cclxuICAgICAgICA8aDM+e2l0ZW0ubmFtZX08L2gzPlxyXG4gICAgICAgIDxwPlByZWNpbzoge2l0ZW0ucHJpY2V9PC9wPlxyXG4gICAgICAgIDxidXR0b24+Q29tcHJhcjwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICkpfVxyXG4gIDwvZGl2PjtcclxuICAvKnJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhdGFsb2d9PlxyXG4gICAgICB7bmZ0cz8ubWFwKFxyXG4gICAgICAgIChcclxuICAgICAgICAgIG5mdCAvLyBVc28gZGUgPy4gcGFyYSBwcmV2ZW5pciBlbCBlcnJvciBzaSBuZnRzIGVzIHVuZGVmaW5lZFxyXG4gICAgICAgICkgPT4gKFxyXG4gICAgICAgICAgPE5GVENhcmQga2V5PXtuZnQuaWR9IG5mdD17bmZ0fSAvPlxyXG4gICAgICAgIClcclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7Ki9cclxufTtcclxuXHJcbi8vZXhwb3J0IGRlZmF1bHQgTkZUQ2F0YWxvZztcclxuZXhwb3J0IGRlZmF1bHQgTkZUQ2FyZDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVzIiwidGVzdEltYWdlVXJsIiwiTkZUQ2FyZCIsIm5mdCIsImRpdiIsImNsYXNzTmFtZSIsImNhcmQiLCJpbWciLCJzcmMiLCJhbHQiLCJuYW1lIiwiaW1hZ2UiLCJkZXRhaWxzIiwiaDMiLCJwIiwicHJpY2UiLCJidXR0b24iLCJidXlCdXR0b24iLCJORlRDYXRhbG9nIiwibmZ0cyIsIm1hcCIsIml0ZW0iLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/nftcatalogo.js\n"));

/***/ })

});