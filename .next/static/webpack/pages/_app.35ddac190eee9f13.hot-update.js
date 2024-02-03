"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/navigation.js":
/*!**************************************!*\
  !*** ./src/components/navigation.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Navigation: function() { return /* binding */ Navigation; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _wallets_wallet_selector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/wallets/wallet-selector */ \"./src/wallets/wallet-selector.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst navLinks = [\n    {\n        name: \"Adopt\",\n        path: \"/adopt\"\n    },\n    {\n        name: \"NFT\\xb4s\",\n        path: \"/nfts\"\n    },\n    {\n        name: \"Map\",\n        path: \"/map\"\n    },\n    {\n        name: \"My Plots\",\n        path: \"/myplots\"\n    },\n    {\n        name: \"Contact us\",\n        path: \"/contact\"\n    }\n];\nconst Navigation = ()=>{\n    _s();\n    const { signedAccountId, logOut, logIn } = (0,_wallets_wallet_selector__WEBPACK_IMPORTED_MODULE_4__.useWallet)();\n    const [action, setAction] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(()=>{});\n    const [label, setLabel] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"Loading...\");\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        if (signedAccountId) {\n            setAction(()=>logOut);\n            setLabel(\"\".concat(signedAccountId));\n        } else {\n            setAction(()=>logIn);\n            setLabel(\"Login\");\n        }\n    }, [\n        signedAccountId,\n        logOut,\n        logIn,\n        setAction,\n        setLabel\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"navbar navbar-expand-lg\",\n        style: {\n            backgroundColor: \"white\",\n            borderBottom: \"1px solid #d6d6d6\",\n            justifyContent: \"center\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container-fluid\",\n            style: {\n                display: \"flex\",\n                justifyContent: \"space-between\",\n                alignItems: \"center\",\n                paddingRight: \"50px\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    href: \"/\",\n                    passHref: true,\n                    legacyBehavior: true,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        priority: true,\n                        src: \"/logo.webp\",\n                        alt: \"Ceiva3\",\n                        width: \"60\",\n                        height: \"60\",\n                        className: \"d-inline-block align-text-top\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\macma\\\\OneDrive\\\\Documents\\\\Dev\\\\5M\\\\Ceiva3-Front\\\\src\\\\components\\\\navigation.js\",\n                        lineNumber: 63,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\macma\\\\OneDrive\\\\Documents\\\\Dev\\\\5M\\\\Ceiva3-Front\\\\src\\\\components\\\\navigation.js\",\n                    lineNumber: 62,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: {\n                        display: \"flex\",\n                        justifyContent: \"center\",\n                        alignItems: \"center\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        style: {\n                            display: \"flex\",\n                            justifyContent: \"end\",\n                            alignItems: \"center\",\n                            marginBottom: \"0\"\n                        },\n                        children: navLinks.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                style: {\n                                    paddingRight: \"20px\",\n                                    listStyleType: \"none\"\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: item.path,\n                                    children: item.name\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\macma\\\\OneDrive\\\\Documents\\\\Dev\\\\5M\\\\Ceiva3-Front\\\\src\\\\components\\\\navigation.js\",\n                                    lineNumber: 95,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, item.name, false, {\n                                fileName: \"C:\\\\Users\\\\macma\\\\OneDrive\\\\Documents\\\\Dev\\\\5M\\\\Ceiva3-Front\\\\src\\\\components\\\\navigation.js\",\n                                lineNumber: 88,\n                                columnNumber: 15\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\macma\\\\OneDrive\\\\Documents\\\\Dev\\\\5M\\\\Ceiva3-Front\\\\src\\\\components\\\\navigation.js\",\n                        lineNumber: 79,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\macma\\\\OneDrive\\\\Documents\\\\Dev\\\\5M\\\\Ceiva3-Front\\\\src\\\\components\\\\navigation.js\",\n                    lineNumber: 72,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"navbar-nav pt-1\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"btn btn-secondary\",\n                        onClick: action,\n                        children: [\n                            \" \",\n                            label,\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\macma\\\\OneDrive\\\\Documents\\\\Dev\\\\5M\\\\Ceiva3-Front\\\\src\\\\components\\\\navigation.js\",\n                        lineNumber: 101,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\macma\\\\OneDrive\\\\Documents\\\\Dev\\\\5M\\\\Ceiva3-Front\\\\src\\\\components\\\\navigation.js\",\n                    lineNumber: 100,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\macma\\\\OneDrive\\\\Documents\\\\Dev\\\\5M\\\\Ceiva3-Front\\\\src\\\\components\\\\navigation.js\",\n            lineNumber: 53,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\macma\\\\OneDrive\\\\Documents\\\\Dev\\\\5M\\\\Ceiva3-Front\\\\src\\\\components\\\\navigation.js\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Navigation, \"bceWrBwBzDYGYvdaQM0e9zK2fgw=\", false, function() {\n    return [\n        _wallets_wallet_selector__WEBPACK_IMPORTED_MODULE_4__.useWallet\n    ];\n});\n_c = Navigation;\nvar _c;\n$RefreshReg$(_c, \"Navigation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9uYXZpZ2F0aW9uLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUErQjtBQUNGO0FBQ2U7QUFDVTtBQUV0RCxNQUFNSyxXQUFXO0lBQ2Y7UUFDRUMsTUFBTTtRQUNOQyxNQUFNO0lBQ1I7SUFDQTtRQUNFRCxNQUFNO1FBQ05DLE1BQU07SUFDUjtJQUNBO1FBQ0VELE1BQU07UUFDTkMsTUFBTTtJQUNSO0lBQ0E7UUFDRUQsTUFBTTtRQUNOQyxNQUFNO0lBQ1I7SUFDQTtRQUNFRCxNQUFNO1FBQ05DLE1BQU07SUFDUjtDQUNEO0FBRU0sTUFBTUMsYUFBYTs7SUFDeEIsTUFBTSxFQUFFQyxlQUFlLEVBQUVDLE1BQU0sRUFBRUMsS0FBSyxFQUFFLEdBQUdQLG1FQUFTQTtJQUNwRCxNQUFNLENBQUNRLFFBQVFDLFVBQVUsR0FBR1YsK0NBQVFBLENBQUMsS0FBTztJQUM1QyxNQUFNLENBQUNXLE9BQU9DLFNBQVMsR0FBR1osK0NBQVFBLENBQUM7SUFFbkNELGdEQUFTQSxDQUFDO1FBQ1IsSUFBSU8saUJBQWlCO1lBQ25CSSxVQUFVLElBQU1IO1lBQ2hCSyxTQUFTLEdBQW1CLE9BQWhCTjtRQUNkLE9BQU87WUFDTEksVUFBVSxJQUFNRjtZQUNoQkksU0FBUztRQUNYO0lBQ0YsR0FBRztRQUFDTjtRQUFpQkM7UUFBUUM7UUFBT0U7UUFBV0U7S0FBUztJQUV4RCxxQkFDRSw4REFBQ0M7UUFDQ0MsV0FBVTtRQUNWQyxPQUFPO1lBQ0xDLGlCQUFpQjtZQUNqQkMsY0FBYztZQUNkQyxnQkFBZ0I7UUFDbEI7a0JBRUEsNEVBQUNDO1lBQ0NMLFdBQVU7WUFDVkMsT0FBTztnQkFDTEssU0FBUztnQkFDVEYsZ0JBQWdCO2dCQUNoQkcsWUFBWTtnQkFDWkMsY0FBYztZQUNoQjs7OEJBRUEsOERBQUN4QixrREFBSUE7b0JBQUN5QixNQUFLO29CQUFJQyxRQUFRO29CQUFDQyxjQUFjOzhCQUNwQyw0RUFBQzVCLG1EQUFLQTt3QkFDSjZCLFFBQVE7d0JBQ1JDLEtBQUk7d0JBQ0pDLEtBQUk7d0JBQ0pDLE9BQU07d0JBQ05DLFFBQU87d0JBQ1BoQixXQUFVOzs7Ozs7Ozs7Ozs4QkFHZCw4REFBQ0s7b0JBQ0NKLE9BQU87d0JBQ0xLLFNBQVM7d0JBQ1RGLGdCQUFnQjt3QkFDaEJHLFlBQVk7b0JBQ2Q7OEJBRUEsNEVBQUNVO3dCQUNDaEIsT0FBTzs0QkFDTEssU0FBUzs0QkFDVEYsZ0JBQWdCOzRCQUNoQkcsWUFBWTs0QkFDWlcsY0FBYzt3QkFDaEI7a0NBRUM5QixTQUFTK0IsR0FBRyxDQUFDLENBQUNDLHFCQUNiLDhEQUFDQztnQ0FFQ3BCLE9BQU87b0NBQ0xPLGNBQWM7b0NBQ2RjLGVBQWU7Z0NBQ2pCOzBDQUVBLDRFQUFDQztvQ0FBRWQsTUFBTVcsS0FBSzlCLElBQUk7OENBQUc4QixLQUFLL0IsSUFBSTs7Ozs7OytCQU56QitCLEtBQUsvQixJQUFJOzs7Ozs7Ozs7Ozs7Ozs7OEJBV3RCLDhEQUFDZ0I7b0JBQUlMLFdBQVU7OEJBQ2IsNEVBQUN3Qjt3QkFBT3hCLFdBQVU7d0JBQW9CeUIsU0FBUzlCOzs0QkFDNUM7NEJBQ0FFOzRCQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1wQixFQUFFO0dBaEZXTjs7UUFDZ0NKLCtEQUFTQTs7O0tBRHpDSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9uYXZpZ2F0aW9uLmpzP2E5MDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VXYWxsZXQgfSBmcm9tIFwiQC93YWxsZXRzL3dhbGxldC1zZWxlY3RvclwiO1xuXG5jb25zdCBuYXZMaW5rcyA9IFtcbiAge1xuICAgIG5hbWU6IFwiQWRvcHRcIixcbiAgICBwYXRoOiBcIi9hZG9wdFwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJORlTCtHNcIixcbiAgICBwYXRoOiBcIi9uZnRzXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIk1hcFwiLFxuICAgIHBhdGg6IFwiL21hcFwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJNeSBQbG90c1wiLFxuICAgIHBhdGg6IFwiL215cGxvdHNcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiQ29udGFjdCB1c1wiLFxuICAgIHBhdGg6IFwiL2NvbnRhY3RcIixcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBOYXZpZ2F0aW9uID0gKCkgPT4ge1xuICBjb25zdCB7IHNpZ25lZEFjY291bnRJZCwgbG9nT3V0LCBsb2dJbiB9ID0gdXNlV2FsbGV0KCk7XG4gIGNvbnN0IFthY3Rpb24sIHNldEFjdGlvbl0gPSB1c2VTdGF0ZSgoKSA9PiB7fSk7XG4gIGNvbnN0IFtsYWJlbCwgc2V0TGFiZWxdID0gdXNlU3RhdGUoXCJMb2FkaW5nLi4uXCIpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHNpZ25lZEFjY291bnRJZCkge1xuICAgICAgc2V0QWN0aW9uKCgpID0+IGxvZ091dCk7XG4gICAgICBzZXRMYWJlbChgJHtzaWduZWRBY2NvdW50SWR9YCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldEFjdGlvbigoKSA9PiBsb2dJbik7XG4gICAgICBzZXRMYWJlbChcIkxvZ2luXCIpO1xuICAgIH1cbiAgfSwgW3NpZ25lZEFjY291bnRJZCwgbG9nT3V0LCBsb2dJbiwgc2V0QWN0aW9uLCBzZXRMYWJlbF0pO1xuXG4gIHJldHVybiAoXG4gICAgPG5hdlxuICAgICAgY2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci1leHBhbmQtbGdcIlxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgIGJvcmRlckJvdHRvbTogXCIxcHggc29saWQgI2Q2ZDZkNlwiLFxuICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgIH19XG4gICAgPlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcbiAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICAgIHBhZGRpbmdSaWdodDogXCI1MHB4XCIsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgcGFzc0hyZWYgbGVnYWN5QmVoYXZpb3I+XG4gICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICBwcmlvcml0eVxuICAgICAgICAgICAgc3JjPVwiL2xvZ28ud2VicFwiXG4gICAgICAgICAgICBhbHQ9XCJDZWl2YTNcIlxuICAgICAgICAgICAgd2lkdGg9XCI2MFwiXG4gICAgICAgICAgICBoZWlnaHQ9XCI2MFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJkLWlubGluZS1ibG9jayBhbGlnbi10ZXh0LXRvcFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8dWxcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJlbmRcIixcbiAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjBcIixcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge25hdkxpbmtzLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICBrZXk9e2l0ZW0ubmFtZX1cbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiBcIjIwcHhcIixcbiAgICAgICAgICAgICAgICAgIGxpc3RTdHlsZVR5cGU6IFwibm9uZVwiLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8YSBocmVmPXtpdGVtLnBhdGh9PntpdGVtLm5hbWV9PC9hPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLW5hdiBwdC0xXCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiIG9uQ2xpY2s9e2FjdGlvbn0+XG4gICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICB7bGFiZWx9e1wiIFwifVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmF2PlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJJbWFnZSIsIkxpbmsiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVdhbGxldCIsIm5hdkxpbmtzIiwibmFtZSIsInBhdGgiLCJOYXZpZ2F0aW9uIiwic2lnbmVkQWNjb3VudElkIiwibG9nT3V0IiwibG9nSW4iLCJhY3Rpb24iLCJzZXRBY3Rpb24iLCJsYWJlbCIsInNldExhYmVsIiwibmF2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJCb3R0b20iLCJqdXN0aWZ5Q29udGVudCIsImRpdiIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwicGFkZGluZ1JpZ2h0IiwiaHJlZiIsInBhc3NIcmVmIiwibGVnYWN5QmVoYXZpb3IiLCJwcmlvcml0eSIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwidWwiLCJtYXJnaW5Cb3R0b20iLCJtYXAiLCJpdGVtIiwibGkiLCJsaXN0U3R5bGVUeXBlIiwiYSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/navigation.js\n"));

/***/ })

});