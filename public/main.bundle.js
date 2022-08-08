/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles/style.scss":
/*!**********************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles/style.scss ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"../node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"../node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/Rubik-Regular.ttf */ \"./assets/fonts/Rubik-Regular.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/flag.png */ \"./assets/images/flag.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@font-face {\\n  font-family: \\\"Rubik\\\";\\n  font-style: normal;\\n  font-weight: 400;\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n}\\nbody {\\n  font-family: \\\"Rubik\\\", \\\"Arial\\\", sans-serif;\\n  font-style: normal;\\n  font-size: 1rem;\\n  font-weight: 400;\\n  color: #111111;\\n  background-color: #acacac;\\n}\\n\\nh1, h2 {\\n  font-family: \\\"Rubik\\\", \\\"Arial\\\", sans-serif;\\n  font-size: 2rem;\\n  color: #d85600;\\n}\\n\\ninput {\\n  border: 2px solid #555555;\\n}\\n\\n.create-car__text-input,\\n.update-car__text-input {\\n  padding: 5px;\\n  font-family: \\\"Rubik\\\", \\\"Arial\\\", sans-serif;\\n  font-style: normal;\\n  font-size: 1rem;\\n  width: 10rem;\\n  background-color: #acacac;\\n}\\n\\n.create-car__color-input,\\n.update-car__color-input {\\n  padding: 0;\\n  min-height: 2rem;\\n}\\n\\n.btn {\\n  background-color: transparent;\\n  border: 2px solid #555555;\\n  border-radius: 10px;\\n  font-size: 1rem;\\n  cursor: pointer;\\n  padding: 5px 10px;\\n  min-width: 5rem;\\n  box-shadow: 0 1px 2px 1px #d85600;\\n}\\n.btn:hover {\\n  border: 2px solid #d85600;\\n  background-color: #ffd1b3;\\n}\\n\\n.garage__control-bar {\\n  display: flex;\\n  align-items: center;\\n  gap: 5px;\\n  width: 300px;\\n  flex-direction: column;\\n  justify-content: center;\\n}\\n\\n.create-car,\\n.update-car,\\n.race-control-bar {\\n  display: flex;\\n  align-items: center;\\n  gap: 5px;\\n  align-self: stretch;\\n  justify-content: space-between;\\n}\\n\\nheader {\\n  margin-bottom: 1rem;\\n}\\n\\n.btn-garage {\\n  margin-right: 5px;\\n}\\n\\n.car-container {\\n  position: relative;\\n  margin-bottom: 3rem;\\n  display: grid;\\n  grid-template-columns: min-content min-content auto;\\n  align-items: center;\\n  gap: 5px;\\n  border-bottom: 3px dashed #555555;\\n}\\n.car-container::after {\\n  content: \\\" \\\";\\n  width: 50px;\\n  height: 50px;\\n  position: absolute;\\n  bottom: 0%;\\n  right: 100px;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n  background-size: contain;\\n}\\n\\n.car-image-svg {\\n  max-width: 100px;\\n}\\n\\n.btn-select,\\n.btn-remove {\\n  min-width: 80px;\\n  max-width: fit-content;\\n  height: 30px;\\n}\\n\\n.start-car-btn,\\n.reset-car-btn {\\n  min-width: 80px;\\n  max-width: fit-content;\\n  height: 30px;\\n}\\n\\n.car-title {\\n  font-family: \\\"Rubik\\\", \\\"Arial\\\", sans-serif;\\n  font-size: 1.5rem;\\n  padding: 0 10px;\\n  margin: 0;\\n  color: #d85600;\\n}\\n\\n.table-headers,\\n.winner-row {\\n  display: grid;\\n  width: 600px;\\n  grid-template-columns: repeat(5, 1fr);\\n  gap: 10px;\\n  align-items: center;\\n  align-items: center;\\n  padding: 10px;\\n  text-align: center;\\n}\\n\\n.table-headers {\\n  border: 1px solid #d85600;\\n}\\n\\n.winner-row {\\n  border: 1px solid #555555;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./styles/style.scss?../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack:///../node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///../node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!***************************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack:///../node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./styles/style.scss":
/*!***************************!*\
  !*** ./styles/style.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"../node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"../node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"../node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"../node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles/style.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack:///./styles/style.scss?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!*********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!***********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \***********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!****************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \****************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!**********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./scripts/api.js":
/*!************************!*\
  !*** ./scripts/api.js ***!
  \************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.getCarById = exports.getWinners = exports.getCars = void 0;\r\n/* eslint-disable no-shadow */\r\n/* eslint-disable no-use-before-define */\r\n/* eslint-disable max-len */\r\n/* eslint-disable no-new */\r\nconst base_components_1 = __webpack_require__(/*! ./base_components */ \"./scripts/base_components.js\");\r\nconst car_1 = __importDefault(__webpack_require__(/*! ./car */ \"./scripts/car.js\"));\r\nconst carImage_1 = __importDefault(__webpack_require__(/*! ./carImage */ \"./scripts/carImage.js\"));\r\nconst winners_1 = __webpack_require__(/*! ./winners */ \"./scripts/winners.js\");\r\nfunction getCars(root) {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        fetch(`${base_components_1.baseUrl}/garage`)\r\n            .then((response) => response.json())\r\n            .then((data) => {\r\n            if (data) {\r\n                data.forEach((item) => {\r\n                    const { name } = item;\r\n                    const { color } = item;\r\n                    new car_1.default(root, name, color);\r\n                });\r\n            }\r\n        });\r\n    });\r\n}\r\nexports.getCars = getCars;\r\nfunction getWinners(root) {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        fetch(`${base_components_1.baseUrl}/winners`)\r\n            .then((response) => response.json())\r\n            .then((data) => {\r\n            if (data) {\r\n                data.forEach((item, index) => __awaiter(this, void 0, void 0, function* () {\r\n                    const number = index + 1;\r\n                    const { id } = item;\r\n                    const color = yield getCarById(id).then((car) => car.color);\r\n                    const image = (0, carImage_1.default)(color);\r\n                    const carName = yield getCarById(id).then((car) => car.name); // ф-ция для поиска модели машины по id\r\n                    const { wins } = item;\r\n                    const { time } = item;\r\n                    new winners_1.WinnerRow(root, number, image, carName, wins, time);\r\n                }));\r\n            }\r\n        });\r\n    });\r\n}\r\nexports.getWinners = getWinners;\r\nfunction getCarById(id) {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        const response = yield fetch(`${base_components_1.baseUrl}/garage/${id}`);\r\n        const car = yield response.json();\r\n        return car;\r\n    });\r\n}\r\nexports.getCarById = getCarById;\r\n\n\n//# sourceURL=webpack:///./scripts/api.js?");

/***/ }),

/***/ "./scripts/app.js":
/*!************************!*\
  !*** ./scripts/app.js ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\n/* eslint-disable no-new */\r\n/* eslint-disable no-use-before-define */\r\n__webpack_require__(/*! ../styles/style.scss */ \"./styles/style.scss\");\r\n__webpack_require__(/*! ../assets/images/flag.png */ \"./assets/images/flag.png\");\r\nconst base_components_1 = __webpack_require__(/*! ./base_components */ \"./scripts/base_components.js\");\r\nconst garage_1 = __webpack_require__(/*! ./garage */ \"./scripts/garage.js\");\r\nconst winners_1 = __webpack_require__(/*! ./winners */ \"./scripts/winners.js\");\r\nconst body = document.getElementById('body');\r\nnew base_components_1.Header(body);\r\nconst garagePage = new garage_1.GaragePage(body, { color: 'yellow', text: 'BMW' });\r\ngaragePage.renderCars();\r\nconst winnersBtn = document.querySelector('.btn-winners');\r\nwinnersBtn.addEventListener('click', () => {\r\n    clearPage();\r\n    const winnersPage = new winners_1.WinnersPage(body);\r\n    winnersPage.renderWinnersPage();\r\n});\r\nconst garageBtn = document.querySelector('.btn-garage');\r\ngarageBtn.addEventListener('click', () => {\r\n    clearPage();\r\n    const garage = new garage_1.GaragePage(body, { color: 'yellow', text: 'VolksWagen' });\r\n    garage.renderCars();\r\n});\r\nfunction clearPage() {\r\n    const section = document.querySelector('.section');\r\n    body.removeChild(section);\r\n}\r\n\n\n//# sourceURL=webpack:///./scripts/app.js?");

/***/ }),

/***/ "./scripts/base_components.js":
/*!************************************!*\
  !*** ./scripts/base_components.js ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Header = exports.BaseComponent = exports.baseUrl = void 0;\r\nexports.baseUrl = 'http://127.0.0.1:3000';\r\nclass BaseComponent {\r\n    constructor(root, tag = 'div', styles = []) {\r\n        this.element = document.createElement(tag);\r\n        if (styles.length) {\r\n            this.element.classList.add(...styles);\r\n        }\r\n        this.root = root;\r\n        this.root.append(this.element);\r\n    }\r\n    remove() {\r\n        this.element.remove();\r\n    }\r\n    add() {\r\n        this.root.append(this.element);\r\n    }\r\n}\r\nexports.BaseComponent = BaseComponent;\r\nclass Header extends BaseComponent {\r\n    constructor(root) {\r\n        super(root, 'header', []);\r\n        this.title = new BaseComponent(this.element, 'h1', []);\r\n        this.btnGarage = new BaseComponent(this.element, 'button', ['btn', 'btn-garage']);\r\n        this.btnWinners = new BaseComponent(this.element, 'button', ['btn', 'btn-winners']);\r\n        this.title.element.innerHTML = 'Let the race begin!';\r\n        this.btnGarage.element.innerHTML = 'To Garage';\r\n        this.btnWinners.element.innerHTML = 'To Winners';\r\n    }\r\n}\r\nexports.Header = Header;\r\n\n\n//# sourceURL=webpack:///./scripts/base_components.js?");

/***/ }),

/***/ "./scripts/car.js":
/*!************************!*\
  !*** ./scripts/car.js ***!
  \************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\n/* eslint-disable no-unused-vars */\r\n/* eslint-disable @typescript-eslint/no-unused-vars */\r\n/* eslint-disable max-len */\r\nconst base_components_1 = __webpack_require__(/*! ./base_components */ \"./scripts/base_components.js\");\r\nconst carImage_1 = __importDefault(__webpack_require__(/*! ./carImage */ \"./scripts/carImage.js\"));\r\nclass CarContainer extends base_components_1.BaseComponent {\r\n    constructor(root, carName, color) {\r\n        super(root, 'div', ['car-container']);\r\n        this.btnSelect = new base_components_1.BaseComponent(this.element, 'button', ['btn', 'btn-select']);\r\n        this.btnSelect.element.textContent = 'Select';\r\n        this.btnRemove = new base_components_1.BaseComponent(this.element, 'button', ['btn', 'btn-remove']);\r\n        this.btnRemove.element.textContent = 'Remove';\r\n        this.carName = new base_components_1.BaseComponent(this.element, 'p', ['car-name', 'car-title']);\r\n        this.carName.element.textContent = carName;\r\n        this.btnStart = new base_components_1.BaseComponent(this.element, 'button', ['btn', 'start-car-btn']);\r\n        this.btnStart.element.textContent = 'Start';\r\n        this.btnReset = new base_components_1.BaseComponent(this.element, 'button', ['btn', 'reset-car-btn']);\r\n        this.btnReset.element.textContent = 'Reset';\r\n        this.carImage = new base_components_1.BaseComponent(this.element, 'div', ['car-image']);\r\n        this.carImage.element.innerHTML = (0, carImage_1.default)(color);\r\n    }\r\n}\r\nexports[\"default\"] = CarContainer;\r\n/*\r\nconst getRandomCarName = function () {\r\n  const models = [\r\n    'BMW',\r\n    'Mersedes',\r\n    'Zhiguli',\r\n    'Audi',\r\n    'Volkswagen',\r\n    'Lada',\r\n    'Range Rover',\r\n    'Renault',\r\n    'Toyota',\r\n    'Jaguar',\r\n    'Lamborgini',\r\n    'Mazda',\r\n  ];\r\n\r\n  const carName = models[Math.floor(Math.random() * models.length)];\r\n  return carName;\r\n};\r\n\r\nconst getRandomCarColor = () => {\r\n  const colors = [\r\n    'DarkOrange',\r\n    'CadetBlue',\r\n    'DarkKhaki',\r\n    'Gold',\r\n    'Orchid',\r\n    'LightPink',\r\n    'SlateBlue',\r\n    'LightSalmon',\r\n    'PaleVioletRed',\r\n    'Turquoise',\r\n  ];\r\n\r\n  const carColor = colors[Math.floor(Math.random() * colors.length)];\r\n  return carColor;\r\n};\r\n\r\nexport function generateRandomCars = (carCount = 100): Array<car> =>\r\n    new Array(carCount).fill(1).map(() => ({ name: getRandomCarName(), color: getRandomCarColor() })); */\r\n\n\n//# sourceURL=webpack:///./scripts/car.js?");

/***/ }),

/***/ "./scripts/carImage.js":
/*!*****************************!*\
  !*** ./scripts/carImage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nfunction carImage(color) {\r\n    return `\n      <svg class=\"car-image-svg\" version=\"1.2\" baseProfile=\"tiny-ps\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1280 569\" \">\n        <title>1918554-svg</title>\n        <style>\n          tspan { white-space:pre }\n        </style>\n        <g id=\"Layer\">\n          <path id=\"Layer\" fill-rule=\"evenodd\" style=\"fill: ${color}\" d=\"M382.2 112.9L386.9 115.9L405.7 114.5C535.1 105 645.1 108.8 694.9 124.5C720.8 132.7 798.8 173.4 880.1 221.1L903.7 235L926.6 235C979.6 235.1 1079.7 245.3 1132 256.1C1185.5 267.1 1226.6 278.7 1248.8 289.1C1266.8 297.5 1272.5 303 1277.1 316.5C1279.3 323 1279.5 324.9 1279.4 342.5C1279.3 361.6 1278.4 372.3 1275.3 392.2C1273.7 402.4 1273.7 403.3 1275.5 411.2C1276.6 415.8 1277.4 423.1 1277.5 427.5C1277.5 434.5 1277.1 436.1 1274.7 440.2C1269.6 448.9 1262.3 452.6 1244.3 455.4C1235.1 456.8 1197.2 459.6 1196.5 458.8C1196.3 458.6 1196.9 455.3 1197.7 451.5C1199.7 442.6 1200 416.9 1198.2 408.5C1191.9 379 1176.1 355.5 1152.2 339.8C1112.6 314 1067.8 314.9 1027.9 342.2C999.7 361.4 984.8 386.1 982 418.1C980.9 431.7 983.2 455.5 986.5 464.2C987.2 465.9 972.5 466 687 466L386.8 466L387.6 457.8C389.2 442.4 388.5 416.5 386.3 405.9C379.5 374.1 358.1 347.6 326.5 331.7C277.7 307.3 214.1 326.7 186 374.6C176.4 391.1 172.1 407.5 171.4 430.5L170.9 446.5L167.7 446.3C155.9 445.6 69.4 437.4 59 435.9C40.2 433.3 25.2 425.7 23.5 417.8C22.6 413.8 17.6 408.4 10.3 403.5C7.1 401.4 4.4 399.5 4.2 399.4C3 398.8 0.9 380.4 1.4 375C2.4 365.3 2.4 364.9 1.1 359.1C-1.5 346.7 0.9 323 5.9 312.4C8.6 306.6 14 301 16.9 301C17.9 301 18 298.9 17.5 292.2C16 273 16.4 265.1 19.4 255.2C22.4 245.2 22.3 241.1 18.9 237.5C17.1 235.5 17.1 235.3 21.8 227.5L26.5 219.5L38 219.3C63.8 218.8 89.9 216.2 100 213C101.9 212.4 110.4 211.5 118.9 211C138.8 209.7 144.7 208.3 161 200.6C186.5 188.5 243.9 164.9 321.3 134.5C332.2 130.2 341.5 126 341.9 125.1C342.4 124.2 343.1 121 343.5 118C344.6 108.7 345.3 107.7 352.5 105.9C359.9 104 373 107.1 382.2 112.9ZM542.4 132.5L523 132.4C501 132.4 496.6 132.5 472 134C390.1 139.1 347.1 148.2 310.2 168C296.6 175.4 292.2 178.8 291 182.8C288.2 192.9 290.7 206.3 296.9 215.4C307.8 231.3 318.5 235.3 354.2 236.9C392.4 238.7 558.9 243.4 559.6 242.7C559.9 242.4 555.8 211.1 552.5 188.5C549.5 167.5 545 141.5 543.7 137L542.4 132.5ZM583 134L578.3 134L595.8 188L613.4 242L794.2 242L793.3 237.7C791.8 230.1 792.4 222.7 794.8 218.8C797.4 214.7 804 211 808.8 211C810.6 211 812 210.7 812 210.2C811.9 209 788.1 191.9 774 183.1C747.1 166.2 723 155.1 702 149.9C680.3 144.6 646.9 139.6 608.6 136C597.1 134.9 585.5 134 583 134Z\" />\n          <path id=\"Layer\" fill-rule=\"evenodd\" style=\"fill: black\" d=\"M306.2 328.9C343.9 338.7 372.8 367.9 382.2 405.7C385.2 417.6 385.4 440.7 382.6 452.4C370.9 502.4 325.7 536.6 275 533.7C230 531.1 191.6 499.6 180.3 456C177.2 444.2 176.2 426.7 177.9 415C184.3 371.5 218.6 335.7 261.7 327.5C272.6 325.5 295.7 326.2 306.2 328.9ZM267.5 357.4C252.7 360.2 240.1 367 229 378C217.8 389.2 211.4 401.4 208.4 416.6C197.9 471.7 252.2 518 305.3 499.4C328.4 491.4 346.8 471.2 352.6 447.5C355 438 354.9 420.7 352.6 412C348.5 396.9 339.1 382.1 327.5 372.7C320.4 367 307.9 360.6 299.5 358.5C291 356.3 275.9 355.8 267.5 357.4Z\" />\n          <path id=\"Layer\" style=\"fill: black\" d=\"M291.8 383.2C292 392.2 292.5 399.9 293 400.4C294.7 402.1 303.8 394.6 313.1 383.8L318.2 378.1L313.4 375C308.2 371.7 300.3 368.5 294.9 367.5L291.5 366.9L291.8 383.2Z\" />\n          <path id=\"Layer\" style=\"fill: black\" d=\"M259.1 370C252.9 372.2 242.4 378.2 242.7 379.4C243 380.7 266.4 401 267.6 401C268.3 401 269.1 400.3 269.4 399.4C270.2 397.4 270.2 386.7 269.3 376.2C268.6 366.7 268.5 366.6 259.1 370Z\" />\n          <path id=\"Layer\" style=\"fill: black\" d=\"M320.9 404.5C315.2 410.9 310.4 416.8 310.2 417.6C309.6 420.1 314.8 421.1 325.9 420.5C331.7 420.2 338 419.7 339.8 419.4C343.1 418.9 343.2 418.8 342.5 415.2C341.8 410.8 336.1 398.5 333.3 395.1L331.4 392.7L320.9 404.5Z\" />\n          <path id=\"Layer\" style=\"fill: black\" d=\"M226 399.1C222.9 403.5 219.2 412.4 218.3 417.7L217.7 421L233.2 421C249.7 421 253.3 420.1 251.3 416.6C250 414.2 230.9 395 229.9 395C229.4 395 227.7 396.8 226 399.1Z\" />\n          <path id=\"Layer\" style=\"fill: black\" d=\"M278.6 404.6C275 408.1 278.6 413.3 283 411C285.6 409.6 285.6 405.4 283.1 404C280.6 402.7 280.4 402.7 278.6 404.6Z\" />\n          <path id=\"Layer\" style=\"fill: black\" d=\"M275.1 421.4C269.4 424.6 268.3 432.5 272.9 437.1C277.2 441.3 283 441.4 287.2 437.2C291.4 433 291.3 427.2 287.1 422.9C283.8 419.7 279.3 419.1 275.1 421.4Z\" />\n          <path id=\"Layer\" style=\"fill: black\" d=\"M256 426.4C254.1 428.7 255.2 432.5 257.8 432.8C262.2 433.5 264.5 429.6 261.4 426.6C259.5 424.6 257.6 424.6 256 426.4Z\" />\n          <path id=\"Layer\" style=\"fill:black}\" d=\"M300.2 427.6C297.5 429.5 297.4 431.2 299.9 433.4C302.4 435.7 306 434 306 430.5C306 427.2 303 425.6 300.2 427.6Z\" />\n          <path id=\"Layer\" style=\"fill: black\" d=\"M224.5 440.7C216.8 441.3 216.9 441.2 218.6 447.2C220.2 452.7 224.7 461.8 227.8 465.8L229.6 468.1L239.9 455.9C245.6 449.2 250.3 443 250.4 442.1C250.5 440.7 249 440.5 240 440.4C234.2 440.4 227.3 440.5 224.5 440.7Z\" />\n          <path id=\"Layer\" style=\"fill: black\" d=\"M316.5 441.9C312.1 442.3 310.4 442.9 310.2 444.1C309.9 445.7 331.2 467 333 467C335.2 467 341.6 452.9 343.5 444.2L344.2 441L333.3 441.2C327.4 441.3 319.8 441.6 316.5 441.9Z\" />\n          <path id=\"Layer\" style=\"fill: black\" d=\"M277.6 448.6C275.7 450.4 275.7 450.6 277 453.1C277.6 454.2 279.1 455 280.5 455C282.5 455 285 452.6 285 450.6C285 449.6 281.8 447 280.5 447C279.8 447 278.4 447.7 277.6 448.6Z\" />\n          <path id=\"Layer\" style=\"fill: black\" d=\"M258.9 465.7C250.3 474.7 245 480.8 245 481.9C245 484.4 262.9 492 268.6 492L271.3 492L270.6 477.7C269.7 461.1 269.3 459 267.1 459C266.2 459 262.5 462 258.9 465.7Z\" />\n          <path id=\"Layer\" style=\"fill: black\" d=\"M293.6 459.9C293 460.9 291.2 476.7 290.7 485.7C290.4 491.7 290.5 492 292.6 492C300.5 492 318.8 485.2 317.4 482.8C316.9 482.1 312.1 476.4 306.6 470.2C297.3 459.7 294.9 457.8 293.6 459.9Z\" />\n          <path id=\"Layer\" fill-rule=\"evenodd\" style=\"fill: black\" d=\"M1177.4 372.3C1211.7 424 1193.4 494.1 1138.2 522.3C1112.5 535.4 1085.4 537.5 1058 528.4C1045.7 524.3 1038.1 520.2 1026.9 511.8C988.2 482.6 975.7 427.1 998 383C1012.6 354.1 1040.5 333.3 1072.3 327.5C1112.3 320.2 1154.9 338.4 1177.4 372.3ZM1068.9 359.5C1036.5 370 1015.3 400.5 1017.3 434C1018.9 460.8 1034.6 484.4 1058.5 496C1104.4 518.2 1157.3 489.4 1164 438.6C1168.7 403.3 1145.6 368.8 1110.8 359C1097.8 355.3 1081.1 355.5 1068.9 359.5Z\" />\n          <path id=\"Layer\" style=\"fill: black\" d=\"M1101.7 383.2C1102 392.2 1102.6 399.9 1103.1 400.4C1104.4 401.8 1108.4 398.6 1118.6 388.2L1128.1 378.5L1125.8 376.7C1120.8 372.7 1106.9 367 1102.3 367C1101.3 367 1101.2 370.3 1101.7 383.2Z\" />\n          <path id=\"Layer\" style=\"fill: black\" d=\"M1070.5 369.4C1065.5 371 1057.2 375.2 1054.2 377.6L1051.9 379.5L1064 390.2C1070.7 396.2 1076.8 401 1077.5 401C1079.8 401 1080.2 397.1 1079.5 382.4C1078.7 366.2 1079.1 366.7 1070.5 369.4Z\" />\n          <path id=\"Layer\" style=\"fill: black\" d=\"M1130.7 404.6C1124.8 411.1 1120 417.2 1120 418.2C1120 419.3 1121.1 420 1123.8 420.4C1128.2 421.1 1151.6 419.7 1152.7 418.7C1154.2 417.1 1147.6 400.4 1143.3 395.1L1141.4 392.7L1130.7 404.6Z\" />\n          <path id=\"Layer\" style=\"fill: black\" d=\"M1036.2 398.7C1032.3 404.9 1029.2 412.1 1028.4 417.1L1027.7 421L1042.9 421C1051.5 421 1059 420.5 1060.1 420C1061.8 419 1061.9 418.7 1060.6 416.2C1059.8 414.7 1054.7 409.1 1049.2 403.7L1039.3 393.8L1036.2 398.7Z\" />\n          <path id=\"Layer\" style=\"fill: black\" d=\"M1088.8 404.1C1086.4 405.5 1086.5 409.7 1089 411C1093.4 413.3 1097 408.1 1093.4 404.6C1091.6 402.7 1091.1 402.7 1088.8 404.1Z\" />\n          <path id=\"Layer\" style=\"fill: black\" d=\"M1085.1 421.3C1080.2 424.2 1078.5 431.4 1081.6 435.9C1082.5 437.2 1084.8 438.8 1086.6 439.6C1089.5 440.8 1090.5 440.8 1093.4 439.6C1103.3 435.5 1101.9 421.6 1091.5 420.4C1089.1 420.1 1086.5 420.5 1085.1 421.3Z\" />\n          <path id=\"Layer\" style=\"fill: black\" d=\"M1066 426.4C1064.1 428.7 1065.2 432.5 1067.8 432.8C1072.2 433.5 1074.5 429.6 1071.4 426.6C1069.5 424.6 1067.6 424.6 1066 426.4Z\" />\n          <path id=\"Layer\" style=\"fill: black\" d=\"M1109.6 427.6C1108.7 428.4 1108 429.8 1108 430.5C1108 431.8 1110.6 435 1111.6 435C1113.6 435 1116 432.5 1116 430.5C1116 429.1 1115.2 427.6 1114.1 427C1111.6 425.7 1111.4 425.7 1109.6 427.6Z\" />\n          <path id=\"Layer\" style=\"fill: black\" d=\"M1033.5 440.9C1027.5 441.5 1027.5 441.5 1027.8 444.5C1028.7 451.4 1038.2 469.3 1040 467.4C1045.7 461.3 1061 442.4 1060.7 441.6C1060.3 440.4 1043.1 439.9 1033.5 440.9Z\" />\n          <path id=\"Layer\" style=\"fill: black\" d=\"M1126.7 441.7C1119.9 442.2 1118.8 443.6 1122 447.7C1124.3 450.8 1142 467 1143 467C1143.3 467 1145 464.6 1146.7 461.7C1149.6 456.9 1151.9 450.6 1153.4 443.7L1154 441L1143.3 441.2C1137.3 441.3 1129.9 441.5 1126.7 441.7Z\" />\n          <path id=\"Layer\" style=\"fill: black\" d=\"M1087 449C1085.4 452.1 1087.4 455.2 1090.8 454.8C1092.9 454.6 1093.6 453.9 1093.8 451.6C1094.3 447.1 1089.1 445.1 1087 449Z\" />\n          <path id=\"Layer\" style=\"fill: black\" d=\"M1065.1 469.7C1059.5 475.6 1055 481 1055 481.7C1055 484.5 1072.2 492 1078.7 492L1081.3 492L1080.6 479.7C1079.6 461.8 1079.1 459 1077 459C1076 459 1070.7 463.8 1065.1 469.7Z\" />\n          <path id=\"Layer\" style=\"fill: black\" d=\"M1103.5 459.9C1102.8 461.1 1101.2 474.3 1100.6 484.2C1100.2 491.9 1100.2 492 1102.5 492C1107 492 1115.5 489.8 1121.8 486.9L1128.2 484L1126.3 481.7C1119.8 473.5 1106.5 459 1105.4 459C1104.7 459 1103.9 459.4 1103.5 459.9Z\" />\n        </g>\n    </svg>`;\r\n}\r\nexports[\"default\"] = carImage;\r\n\n\n//# sourceURL=webpack:///./scripts/carImage.js?");

/***/ }),

/***/ "./scripts/garage.js":
/*!***************************!*\
  !*** ./scripts/garage.js ***!
  \***************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.CarSettingsInput = exports.RaceControlBar = exports.GaragePage = void 0;\r\n/* eslint-disable no-use-before-define */\r\n/* eslint-disable max-classes-per-file */\r\n/* eslint-disable no-unused-vars */\r\n__webpack_require__(/*! ../styles/style.scss */ \"./styles/style.scss\");\r\nconst base_components_1 = __webpack_require__(/*! ./base_components */ \"./scripts/base_components.js\");\r\nconst api_1 = __webpack_require__(/*! ./api */ \"./scripts/api.js\");\r\nclass GaragePage extends base_components_1.BaseComponent {\r\n    constructor(root, data) {\r\n        super(root, 'section', ['section', 'garage']);\r\n        this.carsCounter = 4;\r\n        this.currentPage = 1;\r\n        // создание базовой разметки гаража:\r\n        const garageControlBar = new base_components_1.BaseComponent(this.element, 'div', ['garage__control-bar']);\r\n        this.createCarsBar = new CarSettingsInput(garageControlBar.element, ['create-car'], {\r\n            btnTxt: 'Create',\r\n            color: data.color,\r\n            text: data.text,\r\n        });\r\n        this.updateCarsBar = new CarSettingsInput(garageControlBar.element, ['update-car'], {\r\n            btnTxt: 'Update',\r\n            color: data.color,\r\n            text: '',\r\n        });\r\n        this.raceControlBar = new RaceControlBar(garageControlBar.element);\r\n        this.garageCars = new base_components_1.BaseComponent(this.element, 'div', ['garage__cars']);\r\n        this.garageTitle = new base_components_1.BaseComponent(this.garageCars.element, 'h2', []);\r\n        this.garageTitle.element.textContent = `Garage (${this.carsCounter})`;\r\n    }\r\n    renderCars() {\r\n        (0, api_1.getCars)(this.garageCars.element);\r\n    }\r\n}\r\nexports.GaragePage = GaragePage;\r\nclass RaceControlBar extends base_components_1.BaseComponent {\r\n    constructor(root) {\r\n        super(root, 'div', ['race-control-bar']);\r\n        const raceBtn = new base_components_1.BaseComponent(this.element, 'button', ['btn', 'start-race-btn']);\r\n        raceBtn.element.textContent = 'Race';\r\n        const resetAllBtn = new base_components_1.BaseComponent(this.element, 'button', ['btn', 'reset-all-btn']);\r\n        resetAllBtn.element.textContent = 'Reset';\r\n        const generateBtn = new base_components_1.BaseComponent(this.element, 'button', ['btn', 'generate-cars-btn']);\r\n        generateBtn.element.textContent = 'Generate cars';\r\n    }\r\n}\r\nexports.RaceControlBar = RaceControlBar;\r\nclass CarSettingsInput extends base_components_1.BaseComponent {\r\n    constructor(root, styles, state) {\r\n        super(root, 'div', styles);\r\n        this.state = state;\r\n        // cоздадим текстовый инпут\r\n        this.textInput = document.createElement('input');\r\n        this.textInput.setAttribute('type', 'txt');\r\n        this.textInput.classList.add(`${styles[0]}__text-input`);\r\n        this.textInput.value = state.text;\r\n        this.element.append(this.textInput);\r\n        // создадим инпут для выбора цвета:\r\n        this.colorInput = document.createElement('input');\r\n        this.colorInput.setAttribute('type', 'color');\r\n        this.colorInput.classList.add(`${styles[0]}__color-input`);\r\n        this.colorInput.value = state.color;\r\n        this.element.append(this.colorInput);\r\n        // и кнопку:\r\n        this.btn = new base_components_1.BaseComponent(this.element, 'button', ['btn', `${styles[0]}__btn`]);\r\n        this.btn.element.textContent = this.state.btnTxt;\r\n    }\r\n}\r\nexports.CarSettingsInput = CarSettingsInput;\r\n\n\n//# sourceURL=webpack:///./scripts/garage.js?");

/***/ }),

/***/ "./scripts/winners.js":
/*!****************************!*\
  !*** ./scripts/winners.js ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.WinnerRow = exports.WinnersPage = void 0;\r\n/* eslint-disable max-len */\r\n/* eslint-disable max-classes-per-file */\r\n__webpack_require__(/*! ../styles/style.scss */ \"./styles/style.scss\");\r\nconst base_components_1 = __webpack_require__(/*! ./base_components */ \"./scripts/base_components.js\");\r\nconst api_1 = __webpack_require__(/*! ./api */ \"./scripts/api.js\");\r\nclass WinnersPage extends base_components_1.BaseComponent {\r\n    constructor(root) {\r\n        super(root, 'section', ['section', 'winners']);\r\n        this.winnersCounter = 1;\r\n        this.currentPage = 1;\r\n        //  создание базовой разметки:\r\n        this.winnersTitle = new base_components_1.BaseComponent(this.element, 'h2', []);\r\n        this.winnersTitle.element.textContent = `Winners (${this.winnersCounter})`;\r\n        this.winnersContainer = new base_components_1.BaseComponent(this.element, 'div', ['winners-container']);\r\n        this.tableHeaders = new base_components_1.BaseComponent(this.element, 'div', ['table-headers']);\r\n        this.header1 = new base_components_1.BaseComponent(this.tableHeaders.element, 'div', []);\r\n        this.header2 = new base_components_1.BaseComponent(this.tableHeaders.element, 'div', []);\r\n        this.header3 = new base_components_1.BaseComponent(this.tableHeaders.element, 'div', []);\r\n        this.header4 = new base_components_1.BaseComponent(this.tableHeaders.element, 'div', []);\r\n        this.header5 = new base_components_1.BaseComponent(this.tableHeaders.element, 'div', []);\r\n        this.header1.element.textContent = 'Number';\r\n        this.header2.element.textContent = 'Car';\r\n        this.header3.element.textContent = 'Name';\r\n        this.header4.element.textContent = 'Wins';\r\n        this.header5.element.textContent = 'Best Time (sec)';\r\n        this.winnersContent = new base_components_1.BaseComponent(this.element, 'div', ['winner-rows']);\r\n    }\r\n    renderWinnersPage() {\r\n        (0, api_1.getWinners)(this.winnersContent.element);\r\n    }\r\n}\r\nexports.WinnersPage = WinnersPage;\r\nclass WinnerRow extends base_components_1.BaseComponent {\r\n    constructor(root, number, image, car, wins, time) {\r\n        super(root, 'div', ['winner-row']);\r\n        this.numberCol = new base_components_1.BaseComponent(this.element, 'div', ['number']);\r\n        this.numberCol.element.textContent = number.toString();\r\n        this.carCol = new base_components_1.BaseComponent(this.element, 'div', ['car']);\r\n        this.carCol.element.innerHTML = image;\r\n        this.nameCol = new base_components_1.BaseComponent(this.element, 'div', ['name']);\r\n        this.nameCol.element.textContent = car;\r\n        this.winsCol = new base_components_1.BaseComponent(this.element, 'div', ['wins']);\r\n        this.winsCol.element.textContent = wins.toString();\r\n        this.timeCol = new base_components_1.BaseComponent(this.element, 'div', ['time']);\r\n        this.timeCol.element.textContent = time.toString();\r\n    }\r\n}\r\nexports.WinnerRow = WinnerRow;\r\n\n\n//# sourceURL=webpack:///./scripts/winners.js?");

/***/ }),

/***/ "./assets/fonts/Rubik-Regular.ttf":
/*!****************************************!*\
  !*** ./assets/fonts/Rubik-Regular.ttf ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"./assets/Rubik-Regular.ttf\";\n\n//# sourceURL=webpack:///./assets/fonts/Rubik-Regular.ttf?");

/***/ }),

/***/ "./assets/images/flag.png":
/*!********************************!*\
  !*** ./assets/images/flag.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"./assets/flag.png\";\n\n//# sourceURL=webpack:///./assets/images/flag.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./scripts/app.js");
/******/ 	
/******/ })()
;