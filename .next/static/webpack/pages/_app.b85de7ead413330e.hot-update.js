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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Navigation: function() { return /* binding */ Navigation; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _wallets_wallet_selector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/wallets/wallet-selector */ \"./src/wallets/wallet-selector.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst navLinks = [\n    {\n        name: \"Adopt\",\n        path: \"/adopt\"\n    },\n    {\n        name: \"NFT\\xb4s\",\n        path: \"/nfts\"\n    },\n    {\n        name: \"Map\",\n        path: \"/map\"\n    },\n    {\n        name: \"My Plots\",\n        path: \"/myplots\"\n    },\n    {\n        name: \"Contact us\",\n        path: \"/contact\"\n    }\n];\nconst Navigation = ()=>{\n    _s();\n    const { signedAccountId, logOut, logIn } = (0,_wallets_wallet_selector__WEBPACK_IMPORTED_MODULE_4__.useWallet)();\n    const [action, setAction] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(()=>{});\n    const [label, setLabel] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"Loading...\");\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        if (signedAccountId) {\n            setAction(()=>logOut);\n            setLabel(\"\".concat(signedAccountId));\n        } else {\n            setAction(()=>logIn);\n            setLabel(\"Login\");\n        }\n    }, [\n        signedAccountId,\n        logOut,\n        logIn,\n        setAction,\n        setLabel\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"navbar navbar-expand-lg\",\n        style: {\n            backgroundColor: \"white\",\n            borderBottom: \"1px solid #d6d6d6\",\n            justifyContent: \"center\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container-fluid\",\n            style: {\n                display: \"flex\",\n                justifyContent: \"space-between\",\n                alignItems: \"center\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    href: \"/\",\n                    passHref: true,\n                    legacyBehavior: true,\n                    style: {\n                        paddingRight: \"50px\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        priority: true,\n                        src: \"/logo.webp\",\n                        alt: \"Ceiva3\",\n                        width: \"60\",\n                        height: \"60\",\n                        className: \"d-inline-block align-text-top\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\macma\\\\OneDrive\\\\Documents\\\\Dev\\\\5M\\\\Ceiva3-Front\\\\src\\\\components\\\\navigation.js\",\n                        lineNumber: 66,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\macma\\\\OneDrive\\\\Documents\\\\Dev\\\\5M\\\\Ceiva3-Front\\\\src\\\\components\\\\navigation.js\",\n                    lineNumber: 61,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: {\n                        display: \"flex\",\n                        justifyContent: \"center\",\n                        alignItems: \"center\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        style: {\n                            display: \"flex\",\n                            justifyContent: \"end\",\n                            alignItems: \"center\",\n                            marginBottom: \"0\"\n                        },\n                        children: navLinks.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                style: {\n                                    paddingRight: \"20px\",\n                                    listStyleType: \"none\"\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: item.path,\n                                    children: item.name\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\macma\\\\OneDrive\\\\Documents\\\\Dev\\\\5M\\\\Ceiva3-Front\\\\src\\\\components\\\\navigation.js\",\n                                    lineNumber: 98,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, item.name, false, {\n                                fileName: \"C:\\\\Users\\\\macma\\\\OneDrive\\\\Documents\\\\Dev\\\\5M\\\\Ceiva3-Front\\\\src\\\\components\\\\navigation.js\",\n                                lineNumber: 91,\n                                columnNumber: 15\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\macma\\\\OneDrive\\\\Documents\\\\Dev\\\\5M\\\\Ceiva3-Front\\\\src\\\\components\\\\navigation.js\",\n                        lineNumber: 82,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\macma\\\\OneDrive\\\\Documents\\\\Dev\\\\5M\\\\Ceiva3-Front\\\\src\\\\components\\\\navigation.js\",\n                    lineNumber: 75,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"navbar-nav pt-1\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"btn btn-secondary\",\n                        onClick: action,\n                        children: [\n                            \" \",\n                            label,\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\macma\\\\OneDrive\\\\Documents\\\\Dev\\\\5M\\\\Ceiva3-Front\\\\src\\\\components\\\\navigation.js\",\n                        lineNumber: 104,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\macma\\\\OneDrive\\\\Documents\\\\Dev\\\\5M\\\\Ceiva3-Front\\\\src\\\\components\\\\navigation.js\",\n                    lineNumber: 103,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\macma\\\\OneDrive\\\\Documents\\\\Dev\\\\5M\\\\Ceiva3-Front\\\\src\\\\components\\\\navigation.js\",\n            lineNumber: 53,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\macma\\\\OneDrive\\\\Documents\\\\Dev\\\\5M\\\\Ceiva3-Front\\\\src\\\\components\\\\navigation.js\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Navigation, \"bceWrBwBzDYGYvdaQM0e9zK2fgw=\", false, function() {\n    return [\n        _wallets_wallet_selector__WEBPACK_IMPORTED_MODULE_4__.useWallet\n    ];\n});\n_c = Navigation;\nvar _c;\n$RefreshReg$(_c, \"Navigation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9uYXZpZ2F0aW9uLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUErQjtBQUNGO0FBQ2U7QUFDVTtBQUV0RCxNQUFNSyxXQUFXO0lBQ2Y7UUFDRUMsTUFBTTtRQUNOQyxNQUFNO0lBQ1I7SUFDQTtRQUNFRCxNQUFNO1FBQ05DLE1BQU07SUFDUjtJQUNBO1FBQ0VELE1BQU07UUFDTkMsTUFBTTtJQUNSO0lBQ0E7UUFDRUQsTUFBTTtRQUNOQyxNQUFNO0lBQ1I7SUFDQTtRQUNFRCxNQUFNO1FBQ05DLE1BQU07SUFDUjtDQUNEO0FBRU0sTUFBTUMsYUFBYTs7SUFDeEIsTUFBTSxFQUFFQyxlQUFlLEVBQUVDLE1BQU0sRUFBRUMsS0FBSyxFQUFFLEdBQUdQLG1FQUFTQTtJQUNwRCxNQUFNLENBQUNRLFFBQVFDLFVBQVUsR0FBR1YsK0NBQVFBLENBQUMsS0FBTztJQUM1QyxNQUFNLENBQUNXLE9BQU9DLFNBQVMsR0FBR1osK0NBQVFBLENBQUM7SUFFbkNELGdEQUFTQSxDQUFDO1FBQ1IsSUFBSU8saUJBQWlCO1lBQ25CSSxVQUFVLElBQU1IO1lBQ2hCSyxTQUFTLEdBQW1CLE9BQWhCTjtRQUNkLE9BQU87WUFDTEksVUFBVSxJQUFNRjtZQUNoQkksU0FBUztRQUNYO0lBQ0YsR0FBRztRQUFDTjtRQUFpQkM7UUFBUUM7UUFBT0U7UUFBV0U7S0FBUztJQUV4RCxxQkFDRSw4REFBQ0M7UUFDQ0MsV0FBVTtRQUNWQyxPQUFPO1lBQ0xDLGlCQUFpQjtZQUNqQkMsY0FBYztZQUNkQyxnQkFBZ0I7UUFDbEI7a0JBRUEsNEVBQUNDO1lBQ0NMLFdBQVU7WUFDVkMsT0FBTztnQkFDTEssU0FBUztnQkFDVEYsZ0JBQWdCO2dCQUNoQkcsWUFBWTtZQUNkOzs4QkFFQSw4REFBQ3ZCLGtEQUFJQTtvQkFBQ3dCLE1BQUs7b0JBQUlDLFFBQVE7b0JBQUNDLGNBQWM7b0JBQ3BDVCxPQUFPO3dCQUNMVSxjQUFjO29CQUNoQjs4QkFFQSw0RUFBQzVCLG1EQUFLQTt3QkFDSjZCLFFBQVE7d0JBQ1JDLEtBQUk7d0JBQ0pDLEtBQUk7d0JBQ0pDLE9BQU07d0JBQ05DLFFBQU87d0JBQ1BoQixXQUFVOzs7Ozs7Ozs7Ozs4QkFHZCw4REFBQ0s7b0JBQ0NKLE9BQU87d0JBQ0xLLFNBQVM7d0JBQ1RGLGdCQUFnQjt3QkFDaEJHLFlBQVk7b0JBQ2Q7OEJBRUEsNEVBQUNVO3dCQUNDaEIsT0FBTzs0QkFDTEssU0FBUzs0QkFDVEYsZ0JBQWdCOzRCQUNoQkcsWUFBWTs0QkFDWlcsY0FBYzt3QkFDaEI7a0NBRUM5QixTQUFTK0IsR0FBRyxDQUFDLENBQUNDLHFCQUNiLDhEQUFDQztnQ0FFQ3BCLE9BQU87b0NBQ0xVLGNBQWM7b0NBQ2RXLGVBQWU7Z0NBQ2pCOzBDQUVBLDRFQUFDQztvQ0FBRWYsTUFBTVksS0FBSzlCLElBQUk7OENBQUc4QixLQUFLL0IsSUFBSTs7Ozs7OytCQU56QitCLEtBQUsvQixJQUFJOzs7Ozs7Ozs7Ozs7Ozs7OEJBV3RCLDhEQUFDZ0I7b0JBQUlMLFdBQVU7OEJBQ2IsNEVBQUN3Qjt3QkFBT3hCLFdBQVU7d0JBQW9CeUIsU0FBUzlCOzs0QkFDNUM7NEJBQ0FFOzRCQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1wQixFQUFFO0dBbkZXTjs7UUFDZ0NKLCtEQUFTQTs7O0tBRHpDSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9uYXZpZ2F0aW9uLmpzP2E5MDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VXYWxsZXQgfSBmcm9tIFwiQC93YWxsZXRzL3dhbGxldC1zZWxlY3RvclwiO1xuXG5jb25zdCBuYXZMaW5rcyA9IFtcbiAge1xuICAgIG5hbWU6IFwiQWRvcHRcIixcbiAgICBwYXRoOiBcIi9hZG9wdFwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJORlTCtHNcIixcbiAgICBwYXRoOiBcIi9uZnRzXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIk1hcFwiLFxuICAgIHBhdGg6IFwiL21hcFwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJNeSBQbG90c1wiLFxuICAgIHBhdGg6IFwiL215cGxvdHNcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiQ29udGFjdCB1c1wiLFxuICAgIHBhdGg6IFwiL2NvbnRhY3RcIixcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBOYXZpZ2F0aW9uID0gKCkgPT4ge1xuICBjb25zdCB7IHNpZ25lZEFjY291bnRJZCwgbG9nT3V0LCBsb2dJbiB9ID0gdXNlV2FsbGV0KCk7XG4gIGNvbnN0IFthY3Rpb24sIHNldEFjdGlvbl0gPSB1c2VTdGF0ZSgoKSA9PiB7fSk7XG4gIGNvbnN0IFtsYWJlbCwgc2V0TGFiZWxdID0gdXNlU3RhdGUoXCJMb2FkaW5nLi4uXCIpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHNpZ25lZEFjY291bnRJZCkge1xuICAgICAgc2V0QWN0aW9uKCgpID0+IGxvZ091dCk7XG4gICAgICBzZXRMYWJlbChgJHtzaWduZWRBY2NvdW50SWR9YCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldEFjdGlvbigoKSA9PiBsb2dJbik7XG4gICAgICBzZXRMYWJlbChcIkxvZ2luXCIpO1xuICAgIH1cbiAgfSwgW3NpZ25lZEFjY291bnRJZCwgbG9nT3V0LCBsb2dJbiwgc2V0QWN0aW9uLCBzZXRMYWJlbF0pO1xuXG4gIHJldHVybiAoXG4gICAgPG5hdlxuICAgICAgY2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci1leHBhbmQtbGdcIlxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgIGJvcmRlckJvdHRvbTogXCIxcHggc29saWQgI2Q2ZDZkNlwiLFxuICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgIH19XG4gICAgPlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcbiAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8TGluayBocmVmPVwiL1wiIHBhc3NIcmVmIGxlZ2FjeUJlaGF2aW9yXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHBhZGRpbmdSaWdodDogXCI1MHB4XCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgcHJpb3JpdHlcbiAgICAgICAgICAgIHNyYz1cIi9sb2dvLndlYnBcIlxuICAgICAgICAgICAgYWx0PVwiQ2VpdmEzXCJcbiAgICAgICAgICAgIHdpZHRoPVwiNjBcIlxuICAgICAgICAgICAgaGVpZ2h0PVwiNjBcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZC1pbmxpbmUtYmxvY2sgYWxpZ24tdGV4dC10b3BcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPHVsXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiZW5kXCIsXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIwXCIsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtuYXZMaW5rcy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAga2V5PXtpdGVtLm5hbWV9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogXCIyMHB4XCIsXG4gICAgICAgICAgICAgICAgICBsaXN0U3R5bGVUeXBlOiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj17aXRlbS5wYXRofT57aXRlbS5uYW1lfTwvYT5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1uYXYgcHQtMVwiPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIiBvbkNsaWNrPXthY3Rpb259PlxuICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAge2xhYmVsfXtcIiBcIn1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L25hdj5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJMaW5rIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VXYWxsZXQiLCJuYXZMaW5rcyIsIm5hbWUiLCJwYXRoIiwiTmF2aWdhdGlvbiIsInNpZ25lZEFjY291bnRJZCIsImxvZ091dCIsImxvZ0luIiwiYWN0aW9uIiwic2V0QWN0aW9uIiwibGFiZWwiLCJzZXRMYWJlbCIsIm5hdiIsImNsYXNzTmFtZSIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyQm90dG9tIiwianVzdGlmeUNvbnRlbnQiLCJkaXYiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImhyZWYiLCJwYXNzSHJlZiIsImxlZ2FjeUJlaGF2aW9yIiwicGFkZGluZ1JpZ2h0IiwicHJpb3JpdHkiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsInVsIiwibWFyZ2luQm90dG9tIiwibWFwIiwiaXRlbSIsImxpIiwibGlzdFN0eWxlVHlwZSIsImEiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/navigation.js\n"));

/***/ })

});