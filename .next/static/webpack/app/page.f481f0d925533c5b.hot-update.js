"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/components/TopicInput.tsx":
/*!*******************************************!*\
  !*** ./src/app/components/TopicInput.tsx ***!
  \*******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TopicInput)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _barrel_optimize_names_ArrowRight_lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowRight!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/arrow-right.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction TopicInput(param) {\n    let { isViral } = param;\n    _s();\n    const [topic, setTopic] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [responseData, setResponseData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const audioRefs = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)([]);\n    const lyricsRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (responseData && audioRefs.current.length > 0) {\n            const audio = audioRefs.current[0]; // Assuming the first audio player\n            if (audio) {\n                const handleTimeUpdate = ()=>{\n                    if (lyricsRef.current && audio.duration) {\n                        const scrollHeight = lyricsRef.current.scrollHeight - lyricsRef.current.clientHeight;\n                        const scrollPosition = audio.currentTime / audio.duration * scrollHeight;\n                        lyricsRef.current.scrollTop = scrollPosition;\n                    }\n                };\n                audio.addEventListener('timeupdate', handleTimeUpdate);\n                return ()=>{\n                    audio.removeEventListener('timeupdate', handleTimeUpdate);\n                };\n            }\n        }\n    }, [\n        responseData\n    ]);\n    const makeRequest = async ()=>{\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post('/api/generate', {\n                query: topic,\n                version: 1\n            });\n            setResponseData(response.data);\n        } catch (error) {\n            console.error('Error generating song, retrying in 1 second...', error);\n            await new Promise((resolve)=>setTimeout(resolve, 1000));\n            await makeRequest();\n        }\n    };\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        setIsLoading(true);\n        setResponseData(null);\n        try {\n            await makeRequest();\n        } finally{\n            setIsLoading(false);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        id: \"topic-input\",\n        className: \"w-full bg-white py-16\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container mx-auto px-4\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-3xl font-bold text-st-tropaz mb-8 text-center\",\n                    children: \"What do you want to learn today?\"\n                }, void 0, false, {\n                    fileName: \"/Users/saineshnakra/Desktop/Sundai/git-tutu/tutu/src/app/components/TopicInput.tsx\",\n                    lineNumber: 68,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"max-w-md mx-auto\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            onSubmit: handleSubmit,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex justify-center space-x-4 mb-6\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/saineshnakra/Desktop/Sundai/git-tutu/tutu/src/app/components/TopicInput.tsx\",\n                                    lineNumber: 73,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    value: topic,\n                                    onChange: (e)=>setTopic(e.target.value),\n                                    placeholder: \"Type a topic here...\",\n                                    className: \"w-full px-4 py-3 border-2 rounded-md focus:outline-none focus:ring-2 text-lg text-black \".concat(isViral ? 'border-custom-red focus:ring-custom-red' : 'border-st-tropaz focus:ring-bright-green')\n                                }, void 0, false, {\n                                    fileName: \"/Users/saineshnakra/Desktop/Sundai/git-tutu/tutu/src/app/components/TopicInput.tsx\",\n                                    lineNumber: 75,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    type: \"submit\",\n                                    className: \"w-full mt-6 px-6 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-colors transform hover:scale-105 flex items-center justify-center \".concat(isViral ? 'bg-custom-red' : 'bg-bright-green', \" text-white\"),\n                                    children: [\n                                        \"Next\",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ArrowRight_lucide_react__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                            className: \"ml-2 h-5 w-5\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/saineshnakra/Desktop/Sundai/git-tutu/tutu/src/app/components/TopicInput.tsx\",\n                                            lineNumber: 93,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/saineshnakra/Desktop/Sundai/git-tutu/tutu/src/app/components/TopicInput.tsx\",\n                                    lineNumber: 86,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/saineshnakra/Desktop/Sundai/git-tutu/tutu/src/app/components/TopicInput.tsx\",\n                            lineNumber: 72,\n                            columnNumber: 11\n                        }, this),\n                        isLoading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"mt-4 text-center text-st-tropaz\",\n                            children: \"Generating...\"\n                        }, void 0, false, {\n                            fileName: \"/Users/saineshnakra/Desktop/Sundai/git-tutu/tutu/src/app/components/TopicInput.tsx\",\n                            lineNumber: 97,\n                            columnNumber: 25\n                        }, this),\n                        responseData && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mt-8 p-6 bg-gray-100 rounded-lg shadow-md\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-col md:flex-row\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"md:w-1/2 md:pr-4\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                className: \"text-xl font-bold text-st-tropaz mb-4\",\n                                                children: \"Listen to Your Song:\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/saineshnakra/Desktop/Sundai/git-tutu/tutu/src/app/components/TopicInput.tsx\",\n                                                lineNumber: 104,\n                                                columnNumber: 19\n                                            }, this),\n                                            responseData.urls.map((url, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"bg-white p-4 rounded-lg mb-4\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"audio\", {\n                                                        controls: true,\n                                                        className: \"w-full\",\n                                                        ref: (el)=>{\n                                                            audioRefs.current[index] = el;\n                                                        },\n                                                        children: [\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"source\", {\n                                                                src: url,\n                                                                type: \"audio/mpeg\"\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/saineshnakra/Desktop/Sundai/git-tutu/tutu/src/app/components/TopicInput.tsx\",\n                                                                lineNumber: 114,\n                                                                columnNumber: 25\n                                                            }, this),\n                                                            \"Your browser does not support the audio element.\"\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"/Users/saineshnakra/Desktop/Sundai/git-tutu/tutu/src/app/components/TopicInput.tsx\",\n                                                        lineNumber: 107,\n                                                        columnNumber: 23\n                                                    }, this)\n                                                }, index, false, {\n                                                    fileName: \"/Users/saineshnakra/Desktop/Sundai/git-tutu/tutu/src/app/components/TopicInput.tsx\",\n                                                    lineNumber: 106,\n                                                    columnNumber: 21\n                                                }, this))\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/saineshnakra/Desktop/Sundai/git-tutu/tutu/src/app/components/TopicInput.tsx\",\n                                        lineNumber: 103,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"md:w-1/2 md:pl-4\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                className: \"text-xl font-bold text-st-tropaz mb-4\",\n                                                children: \"Lyrics:\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/saineshnakra/Desktop/Sundai/git-tutu/tutu/src/app/components/TopicInput.tsx\",\n                                                lineNumber: 122,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                ref: lyricsRef,\n                                                className: \"bg-white p-4 rounded-lg text-black overflow-y-auto max-h-96\",\n                                                children: (()=>{\n                                                    const lyricsLines = responseData.lyrics.split('\\n');\n                                                    const startIndex = lyricsLines.findIndex((line)=>line.includes('Verse 1'));\n                                                    const displayedLyrics = lyricsLines.slice(startIndex);\n                                                    return displayedLyrics.map((line, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                            className: \"mb-2\",\n                                                            children: line\n                                                        }, index, false, {\n                                                            fileName: \"/Users/saineshnakra/Desktop/Sundai/git-tutu/tutu/src/app/components/TopicInput.tsx\",\n                                                            lineNumber: 132,\n                                                            columnNumber: 25\n                                                        }, this));\n                                                })()\n                                            }, void 0, false, {\n                                                fileName: \"/Users/saineshnakra/Desktop/Sundai/git-tutu/tutu/src/app/components/TopicInput.tsx\",\n                                                lineNumber: 123,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/saineshnakra/Desktop/Sundai/git-tutu/tutu/src/app/components/TopicInput.tsx\",\n                                        lineNumber: 121,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/saineshnakra/Desktop/Sundai/git-tutu/tutu/src/app/components/TopicInput.tsx\",\n                                lineNumber: 101,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/saineshnakra/Desktop/Sundai/git-tutu/tutu/src/app/components/TopicInput.tsx\",\n                            lineNumber: 100,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/saineshnakra/Desktop/Sundai/git-tutu/tutu/src/app/components/TopicInput.tsx\",\n                    lineNumber: 71,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/saineshnakra/Desktop/Sundai/git-tutu/tutu/src/app/components/TopicInput.tsx\",\n            lineNumber: 67,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/saineshnakra/Desktop/Sundai/git-tutu/tutu/src/app/components/TopicInput.tsx\",\n        lineNumber: 66,\n        columnNumber: 5\n    }, this);\n}\n_s(TopicInput, \"Hq8pYsPh/wHOnDW55p7/5ePMOkQ=\");\n_c = TopicInput;\nvar _c;\n$RefreshReg$(_c, \"TopicInput\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9Ub3BpY0lucHV0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUVvRDtBQUMxQjtBQUNzQjtBQUVqQyxTQUFTSyxXQUFXLEtBQWlDO1FBQWpDLEVBQUVDLE9BQU8sRUFBd0IsR0FBakM7O0lBQ2pDLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHUiwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNTLFdBQVdDLGFBQWEsR0FBR1YsK0NBQVFBLENBQUM7SUFDM0MsTUFBTSxDQUFDVyxjQUFjQyxnQkFBZ0IsR0FBR1osK0NBQVFBLENBSXRDO0lBRVYsTUFBTWEsWUFBWVosNkNBQU1BLENBQWlDLEVBQUU7SUFDM0QsTUFBTWEsWUFBWWIsNkNBQU1BLENBQWlCO0lBRXpDQyxnREFBU0EsQ0FBQztRQUNSLElBQUlTLGdCQUFnQkUsVUFBVUUsT0FBTyxDQUFDQyxNQUFNLEdBQUcsR0FBRztZQUNoRCxNQUFNQyxRQUFRSixVQUFVRSxPQUFPLENBQUMsRUFBRSxFQUFFLGtDQUFrQztZQUN0RSxJQUFJRSxPQUFPO2dCQUNULE1BQU1DLG1CQUFtQjtvQkFDdkIsSUFBSUosVUFBVUMsT0FBTyxJQUFJRSxNQUFNRSxRQUFRLEVBQUU7d0JBQ3ZDLE1BQU1DLGVBQWVOLFVBQVVDLE9BQU8sQ0FBQ0ssWUFBWSxHQUFHTixVQUFVQyxPQUFPLENBQUNNLFlBQVk7d0JBQ3BGLE1BQU1DLGlCQUFpQixNQUFPQyxXQUFXLEdBQUdOLE1BQU1FLFFBQVEsR0FBSUM7d0JBQzlETixVQUFVQyxPQUFPLENBQUNTLFNBQVMsR0FBR0Y7b0JBQ2hDO2dCQUNGO2dCQUNBTCxNQUFNUSxnQkFBZ0IsQ0FBQyxjQUFjUDtnQkFFckMsT0FBTztvQkFDTEQsTUFBTVMsbUJBQW1CLENBQUMsY0FBY1I7Z0JBQzFDO1lBQ0Y7UUFDRjtJQUNGLEdBQUc7UUFBQ1A7S0FBYTtJQUVqQixNQUFNZ0IsY0FBYztRQUNsQixJQUFJO1lBQ0EsTUFBTUMsV0FBVyxNQUFNekIsNkNBQUtBLENBQUMwQixJQUFJLENBQUMsaUJBQWlCO2dCQUMvQ0MsT0FBT3ZCO2dCQUNQd0IsU0FBUztZQUNYO1lBQ0puQixnQkFBZ0JnQixTQUFTSSxJQUFJO1FBQy9CLEVBQUUsT0FBT0MsT0FBTztZQUNkQyxRQUFRRCxLQUFLLENBQUMsa0RBQWtEQTtZQUNoRSxNQUFNLElBQUlFLFFBQVEsQ0FBQ0MsVUFBWUMsV0FBV0QsU0FBUztZQUNuRCxNQUFNVDtRQUNSO0lBQ0Y7SUFFQSxNQUFNVyxlQUFlLE9BQU9DO1FBQzFCQSxFQUFFQyxjQUFjO1FBQ2hCOUIsYUFBYTtRQUNiRSxnQkFBZ0I7UUFFaEIsSUFBSTtZQUNGLE1BQU1lO1FBQ1IsU0FBVTtZQUNSakIsYUFBYTtRQUNmO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQytCO1FBQVFDLElBQUc7UUFBY0MsV0FBVTtrQkFDbEMsNEVBQUNDO1lBQUlELFdBQVU7OzhCQUNiLDhEQUFDRTtvQkFBR0YsV0FBVTs4QkFBcUQ7Ozs7Ozs4QkFHbkUsOERBQUNDO29CQUFJRCxXQUFVOztzQ0FDYiw4REFBQ0c7NEJBQUtDLFVBQVVUOzs4Q0FDZCw4REFBQ007b0NBQUlELFdBQVU7Ozs7Ozs4Q0FFZiw4REFBQ0s7b0NBQ0NDLE1BQUs7b0NBQ0xDLE9BQU8zQztvQ0FDUDRDLFVBQVUsQ0FBQ1osSUFBTS9CLFNBQVMrQixFQUFFYSxNQUFNLENBQUNGLEtBQUs7b0NBQ3hDRyxhQUFZO29DQUNaVixXQUFXLDJGQUlWLE9BSENyQyxVQUNJLDRDQUNBOzs7Ozs7OENBR1IsOERBQUNnRDtvQ0FDQ0wsTUFBSztvQ0FDTE4sV0FBVyw2SkFFVixPQURDckMsVUFBVSxrQkFBa0IsbUJBQzdCOzt3Q0FDRjtzREFFQyw4REFBQ0Ysc0ZBQVVBOzRDQUFDdUMsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7O3dCQUl6QmxDLDJCQUFhLDhEQUFDOEM7NEJBQUVaLFdBQVU7c0NBQWtDOzs7Ozs7d0JBRTVEaEMsOEJBQ0MsOERBQUNpQzs0QkFBSUQsV0FBVTtzQ0FDYiw0RUFBQ0M7Z0NBQUlELFdBQVU7O2tEQUViLDhEQUFDQzt3Q0FBSUQsV0FBVTs7MERBQ2IsOERBQUNhO2dEQUFHYixXQUFVOzBEQUF3Qzs7Ozs7OzRDQUNyRGhDLGFBQWE4QyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxDQUFDQyxLQUFLQyxzQkFDM0IsOERBQUNoQjtvREFBZ0JELFdBQVU7OERBQ3pCLDRFQUFDMUI7d0RBQ0M0QyxRQUFRO3dEQUNSbEIsV0FBVTt3REFDVm1CLEtBQUssQ0FBQ0M7NERBQ0psRCxVQUFVRSxPQUFPLENBQUM2QyxNQUFNLEdBQUdHO3dEQUM3Qjs7MEVBRUEsOERBQUNDO2dFQUFPQyxLQUFLTjtnRUFBS1YsTUFBSzs7Ozs7OzREQUFlOzs7Ozs7O21EQVJoQ1c7Ozs7Ozs7Ozs7O2tEQWVkLDhEQUFDaEI7d0NBQUlELFdBQVU7OzBEQUNiLDhEQUFDYTtnREFBR2IsV0FBVTswREFBd0M7Ozs7OzswREFDdEQsOERBQUNDO2dEQUNDa0IsS0FBS2hEO2dEQUNMNkIsV0FBVTswREFFVCxDQUFDO29EQUNBLE1BQU11QixjQUFjdkQsYUFBYXdELE1BQU0sQ0FBQ0MsS0FBSyxDQUFDO29EQUM5QyxNQUFNQyxhQUFhSCxZQUFZSSxTQUFTLENBQUNDLENBQUFBLE9BQVFBLEtBQUtDLFFBQVEsQ0FBQztvREFDL0QsTUFBTUMsa0JBQWtCUCxZQUFZUSxLQUFLLENBQUNMO29EQUMxQyxPQUFPSSxnQkFBZ0JmLEdBQUcsQ0FBQyxDQUFDYSxNQUFNWCxzQkFDaEMsOERBQUNMOzREQUFjWixXQUFVO3NFQUN0QjRCOzJEQURLWDs7Ozs7Z0RBSVo7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVcEI7R0EzSXdCdkQ7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvVG9waWNJbnB1dC50c3g/MWM4NyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5cbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyBUeXBlLCBBcnJvd1JpZ2h0IH0gZnJvbSAnbHVjaWRlLXJlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVG9waWNJbnB1dCh7IGlzVmlyYWwgfTogeyBpc1ZpcmFsOiBib29sZWFuIH0pIHtcbiAgY29uc3QgW3RvcGljLCBzZXRUb3BpY10gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtyZXNwb25zZURhdGEsIHNldFJlc3BvbnNlRGF0YV0gPSB1c2VTdGF0ZTx7XG4gICAgbHlyaWNzOiBzdHJpbmc7XG4gICAgc3R5bGU6IHN0cmluZztcbiAgICB1cmxzOiBzdHJpbmdbXTtcbiAgfSB8IG51bGw+KG51bGwpO1xuXG4gIGNvbnN0IGF1ZGlvUmVmcyA9IHVzZVJlZjxBcnJheTxIVE1MQXVkaW9FbGVtZW50IHwgbnVsbD4+KFtdKTtcbiAgY29uc3QgbHlyaWNzUmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChyZXNwb25zZURhdGEgJiYgYXVkaW9SZWZzLmN1cnJlbnQubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgYXVkaW8gPSBhdWRpb1JlZnMuY3VycmVudFswXTsgLy8gQXNzdW1pbmcgdGhlIGZpcnN0IGF1ZGlvIHBsYXllclxuICAgICAgaWYgKGF1ZGlvKSB7XG4gICAgICAgIGNvbnN0IGhhbmRsZVRpbWVVcGRhdGUgPSAoKSA9PiB7XG4gICAgICAgICAgaWYgKGx5cmljc1JlZi5jdXJyZW50ICYmIGF1ZGlvLmR1cmF0aW9uKSB7XG4gICAgICAgICAgICBjb25zdCBzY3JvbGxIZWlnaHQgPSBseXJpY3NSZWYuY3VycmVudC5zY3JvbGxIZWlnaHQgLSBseXJpY3NSZWYuY3VycmVudC5jbGllbnRIZWlnaHQ7XG4gICAgICAgICAgICBjb25zdCBzY3JvbGxQb3NpdGlvbiA9IChhdWRpby5jdXJyZW50VGltZSAvIGF1ZGlvLmR1cmF0aW9uKSAqIHNjcm9sbEhlaWdodDtcbiAgICAgICAgICAgIGx5cmljc1JlZi5jdXJyZW50LnNjcm9sbFRvcCA9IHNjcm9sbFBvc2l0aW9uO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgYXVkaW8uYWRkRXZlbnRMaXN0ZW5lcigndGltZXVwZGF0ZScsIGhhbmRsZVRpbWVVcGRhdGUpO1xuXG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgYXVkaW8ucmVtb3ZlRXZlbnRMaXN0ZW5lcigndGltZXVwZGF0ZScsIGhhbmRsZVRpbWVVcGRhdGUpO1xuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cbiAgfSwgW3Jlc3BvbnNlRGF0YV0pO1xuXG4gIGNvbnN0IG1ha2VSZXF1ZXN0ID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdCgnL2FwaS9nZW5lcmF0ZScsIHtcbiAgICAgICAgICAgIHF1ZXJ5OiB0b3BpYyxcbiAgICAgICAgICAgIHZlcnNpb246IDEsXG4gICAgICAgICAgfSk7XG4gICAgICBzZXRSZXNwb25zZURhdGEocmVzcG9uc2UuZGF0YSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGdlbmVyYXRpbmcgc29uZywgcmV0cnlpbmcgaW4gMSBzZWNvbmQuLi4nLCBlcnJvcik7XG4gICAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCAxMDAwKSk7XG4gICAgICBhd2FpdCBtYWtlUmVxdWVzdCgpOyBcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGU6IFJlYWN0LkZvcm1FdmVudCkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XG4gICAgc2V0UmVzcG9uc2VEYXRhKG51bGwpO1xuXG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IG1ha2VSZXF1ZXN0KCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gaWQ9XCJ0b3BpYy1pbnB1dFwiIGNsYXNzTmFtZT1cInctZnVsbCBiZy13aGl0ZSBweS0xNlwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC00XCI+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGQgdGV4dC1zdC10cm9wYXogbWItOCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgIFdoYXQgZG8geW91IHdhbnQgdG8gbGVhcm4gdG9kYXk/XG4gICAgICAgIDwvaDI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctbWQgbXgtYXV0b1wiPlxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIHNwYWNlLXgtNCBtYi02XCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIHZhbHVlPXt0b3BpY31cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRUb3BpYyhlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVHlwZSBhIHRvcGljIGhlcmUuLi5cIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2B3LWZ1bGwgcHgtNCBweS0zIGJvcmRlci0yIHJvdW5kZWQtbWQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiB0ZXh0LWxnIHRleHQtYmxhY2sgJHtcbiAgICAgICAgICAgICAgICBpc1ZpcmFsXG4gICAgICAgICAgICAgICAgICA/ICdib3JkZXItY3VzdG9tLXJlZCBmb2N1czpyaW5nLWN1c3RvbS1yZWQnXG4gICAgICAgICAgICAgICAgICA6ICdib3JkZXItc3QtdHJvcGF6IGZvY3VzOnJpbmctYnJpZ2h0LWdyZWVuJ1xuICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2B3LWZ1bGwgbXQtNiBweC02IHB5LTMgcm91bmRlZC1mdWxsIHRleHQtbGcgZm9udC1zZW1pYm9sZCBob3ZlcjpiZy1vcGFjaXR5LTkwIHRyYW5zaXRpb24tY29sb3JzIHRyYW5zZm9ybSBob3ZlcjpzY2FsZS0xMDUgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgJHtcbiAgICAgICAgICAgICAgICBpc1ZpcmFsID8gJ2JnLWN1c3RvbS1yZWQnIDogJ2JnLWJyaWdodC1ncmVlbidcbiAgICAgICAgICAgICAgfSB0ZXh0LXdoaXRlYH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgTmV4dFxuICAgICAgICAgICAgICA8QXJyb3dSaWdodCBjbGFzc05hbWU9XCJtbC0yIGgtNSB3LTVcIiAvPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9mb3JtPlxuXG4gICAgICAgICAge2lzTG9hZGluZyAmJiA8cCBjbGFzc05hbWU9XCJtdC00IHRleHQtY2VudGVyIHRleHQtc3QtdHJvcGF6XCI+R2VuZXJhdGluZy4uLjwvcD59XG5cbiAgICAgICAgICB7cmVzcG9uc2VEYXRhICYmIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtOCBwLTYgYmctZ3JheS0xMDAgcm91bmRlZC1sZyBzaGFkb3ctbWRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93XCI+XG4gICAgICAgICAgICAgICAgey8qIExlZnQgc2lkZTogQXVkaW8gUGxheWVycyAqL31cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kOnctMS8yIG1kOnByLTRcIj5cbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZCB0ZXh0LXN0LXRyb3BheiBtYi00XCI+TGlzdGVuIHRvIFlvdXIgU29uZzo8L2gzPlxuICAgICAgICAgICAgICAgICAge3Jlc3BvbnNlRGF0YS51cmxzLm1hcCgodXJsLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImJnLXdoaXRlIHAtNCByb3VuZGVkLWxnIG1iLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8YXVkaW9cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xzXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXsoZWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXVkaW9SZWZzLmN1cnJlbnRbaW5kZXhdID0gZWw7XG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzb3VyY2Ugc3JjPXt1cmx9IHR5cGU9XCJhdWRpby9tcGVnXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIFlvdXIgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IHRoZSBhdWRpbyBlbGVtZW50LlxuICAgICAgICAgICAgICAgICAgICAgIDwvYXVkaW8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgey8qIFJpZ2h0IHNpZGU6IEx5cmljcyAqL31cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kOnctMS8yIG1kOnBsLTRcIj5cbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZCB0ZXh0LXN0LXRyb3BheiBtYi00XCI+THlyaWNzOjwvaDM+XG4gICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIHJlZj17bHlyaWNzUmVmfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy13aGl0ZSBwLTQgcm91bmRlZC1sZyB0ZXh0LWJsYWNrIG92ZXJmbG93LXktYXV0byBtYXgtaC05NlwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHsoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGx5cmljc0xpbmVzID0gcmVzcG9uc2VEYXRhLmx5cmljcy5zcGxpdCgnXFxuJylcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGFydEluZGV4ID0gbHlyaWNzTGluZXMuZmluZEluZGV4KGxpbmUgPT4gbGluZS5pbmNsdWRlcygnVmVyc2UgMScpKVxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRpc3BsYXllZEx5cmljcyA9IGx5cmljc0xpbmVzLnNsaWNlKHN0YXJ0SW5kZXgpXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRpc3BsYXllZEx5cmljcy5tYXAoKGxpbmUsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJtYi0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtsaW5lfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgICAgIH0pKCl9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn0iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJheGlvcyIsIkFycm93UmlnaHQiLCJUb3BpY0lucHV0IiwiaXNWaXJhbCIsInRvcGljIiwic2V0VG9waWMiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJyZXNwb25zZURhdGEiLCJzZXRSZXNwb25zZURhdGEiLCJhdWRpb1JlZnMiLCJseXJpY3NSZWYiLCJjdXJyZW50IiwibGVuZ3RoIiwiYXVkaW8iLCJoYW5kbGVUaW1lVXBkYXRlIiwiZHVyYXRpb24iLCJzY3JvbGxIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJzY3JvbGxQb3NpdGlvbiIsImN1cnJlbnRUaW1lIiwic2Nyb2xsVG9wIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJtYWtlUmVxdWVzdCIsInJlc3BvbnNlIiwicG9zdCIsInF1ZXJ5IiwidmVyc2lvbiIsImRhdGEiLCJlcnJvciIsImNvbnNvbGUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJzZWN0aW9uIiwiaWQiLCJjbGFzc05hbWUiLCJkaXYiLCJoMiIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0IiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJwbGFjZWhvbGRlciIsImJ1dHRvbiIsInAiLCJoMyIsInVybHMiLCJtYXAiLCJ1cmwiLCJpbmRleCIsImNvbnRyb2xzIiwicmVmIiwiZWwiLCJzb3VyY2UiLCJzcmMiLCJseXJpY3NMaW5lcyIsImx5cmljcyIsInNwbGl0Iiwic3RhcnRJbmRleCIsImZpbmRJbmRleCIsImxpbmUiLCJpbmNsdWRlcyIsImRpc3BsYXllZEx5cmljcyIsInNsaWNlIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/TopicInput.tsx\n"));

/***/ })

});