/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\r\\n  --navHeight: 60px;\\r\\n}\\r\\n\\r\\n* {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n  font-family: Arial, Helvetica, sans-serif;\\r\\n\\r\\n  height: 100vh;\\r\\n  width: 100vw;\\r\\n\\r\\n  overflow: hidden;\\r\\n}\\r\\n\\r\\nnav {\\r\\n  background-color: #333;\\r\\n  padding: 20px;\\r\\n  position: relative;\\r\\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\\r\\n}\\r\\n\\r\\nnav ul {\\r\\n  opacity: 0;\\r\\n  margin-top: -60px;\\r\\n  padding-left: 0;\\r\\n  transition: margin-top 0.5s ease-in-out, opacity 0.5s ease-in-out;\\r\\n}\\r\\n\\r\\nnav ul.open {\\r\\n  opacity: 1;\\r\\n  display: block;\\r\\n  margin-top: 0px;\\r\\n}\\r\\n\\r\\nnav li {\\r\\n  list-style-type: none;\\r\\n}\\r\\n\\r\\nnav a {\\r\\n  color: white;\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\nnav a:hover {\\r\\n  color: yellowgreen;\\r\\n}\\r\\n\\r\\nnav .menu-btn {\\r\\n  position: absolute;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n\\r\\n  top: 10px;\\r\\n  right: 25px;\\r\\n\\r\\n  width: 20px;\\r\\n  height: 20px;\\r\\n\\r\\n  cursor: pointer;\\r\\n  transition: all 0.5s ease-in-out;\\r\\n}\\r\\n\\r\\nnav .menu-btn__burger {\\r\\n  width: 100%;\\r\\n  height: 2px;\\r\\n  background-color: white;\\r\\n  display: block;\\r\\n  margin: 5px 0;\\r\\n  border-radius: 5px;\\r\\n  transition: all 0.5s ease-in-out;\\r\\n}\\r\\n\\r\\nnav .menu-btn__burger::before,\\r\\nnav .menu-btn__burger::after {\\r\\n  content: \\\"\\\";\\r\\n  width: 100%;\\r\\n  height: 2px;\\r\\n  background-color: white;\\r\\n  display: block;\\r\\n  border-radius: 5px;\\r\\n  transition: all 0.5s ease-in-out;\\r\\n}\\r\\n\\r\\nnav .menu-btn__burger::before {\\r\\n  transform: translateY(-6px);\\r\\n}\\r\\n\\r\\nnav .menu-btn__burger::after {\\r\\n  transform: translateY(4px);\\r\\n}\\r\\n\\r\\n/* ANIMATION */\\r\\nnav .menu-btn.open .menu-btn__burger {\\r\\n  transform: translateX(-10px);\\r\\n  background-color: transparent;\\r\\n}\\r\\n\\r\\nnav .menu-btn.open .menu-btn__burger::before {\\r\\n  transform: rotate(45deg) translate(7.5px, -7px);\\r\\n}\\r\\n\\r\\nnav .menu-btn.open .menu-btn__burger::after {\\r\\n  transform: rotate(-45deg) translate(8.5px, 6px);\\r\\n}\\r\\n\\r\\nnav svg {\\r\\n  height: 20px;\\r\\n}\\r\\n\\r\\n.slider__slide.hide {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.slider {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n\\r\\n  height: 100vh;\\r\\n}\\r\\n\\r\\n.slider__slides {\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n}\\r\\n\\r\\n.slider__slide img {\\r\\n  z-index: -2;\\r\\n  border-radius: 24px;\\r\\n}\\r\\n.slider__controls {\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.slider__controls button {\\r\\n  width: 50px;\\r\\n  height: 50px;\\r\\n  border-radius: 50%;\\r\\n  border: none;\\r\\n  background-color: rgba(0, 0, 0, 0.5);\\r\\n  color: white;\\r\\n  font-size: 20px;\\r\\n  cursor: pointer;\\r\\n  transition: all 0.5s ease-in-out;\\r\\n}\\r\\n\\r\\n/* Vertical Menu */\\r\\n@media screen and (max-width: 768px) {\\r\\n  nav {\\r\\n    position: absolute;\\r\\n    width: 30px;\\r\\n    height: 100vh;\\r\\n    transition: all 0.5s ease-in-out;\\r\\n  }\\r\\n\\r\\n  nav.open {\\r\\n    transition: all 0.5s ease-in-out;\\r\\n    width: 130px;\\r\\n  }\\r\\n\\r\\n  nav .menu-btn {\\r\\n    left: 5px;\\r\\n  }\\r\\n\\r\\n  nav ul {\\r\\n    margin-top: 60px;\\r\\n    margin-left: -60px;\\r\\n    transition: margin 0.5s ease-in-out, opacity 0.5s ease-in-out;\\r\\n  }\\r\\n\\r\\n  nav ul li::after {\\r\\n    margin: 10px 0;\\r\\n    content: \\\"\\\";\\r\\n    width: 100%;\\r\\n    height: 2px;\\r\\n    background-color: white;\\r\\n    display: block;\\r\\n    border-radius: 5px;\\r\\n    transition: all 0.5s ease-in-out;\\r\\n  }\\r\\n\\r\\n  nav ul.open {\\r\\n    margin-top: 60px;\\r\\n    opacity: 1;\\r\\n    display: block;\\r\\n    margin-left: 0px;\\r\\n    transition: margin 0.5s ease-in-out, opacity 0.5s ease-in-out;\\r\\n  }\\r\\n\\r\\n  .slider {\\r\\n    margin: 0 150px;\\r\\n    margin-left: calc(var(--navHeight) + 120px);\\r\\n  }\\r\\n\\r\\n  .slider img {\\r\\n    width: 80vw;\\r\\n  }\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-demo/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ (function(module) {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ (function(module) {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-demo/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ (function(module) {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ (function(module) {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ (function(module) {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ (function(module) {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ (function(module) {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/imageslider.js":
/*!****************************!*\
  !*** ./src/imageslider.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ imageslider; }\n/* harmony export */ });\nclass imageslider {\r\n  constructor() {\r\n    this.body = document.getElementsByTagName(\"body\")[0];\r\n  }\r\n\r\n  setup() {\r\n    const div = document.createElement(\"div\");\r\n    div.classList.add(\"slider\");\r\n    div.innerHTML = this.createSlider();\r\n    this.body.appendChild(div);\r\n\r\n    this.hideImages();\r\n    this.sliderControls();\r\n  }\r\n\r\n  createSlider() {\r\n    return `\r\n            <div class=\"slider__slides\">\r\n                <div class=\"slider__slide\">\r\n                    <img src=\"https://picsum.photos/600/400?image=0\" alt=\"image 1\">\r\n                </div>\r\n                <div class=\"slider__slide\">\r\n                    <img src=\"https://picsum.photos/600/400?image=1\" alt=\"image 2\">\r\n                </div>\r\n                <div class=\"slider__slide\">\r\n                    <img src=\"https://picsum.photos/600/400?image=2\" alt=\"image 3\">\r\n                </div>\r\n                <div class=\"slider__slide\">\r\n                    <img src=\"https://picsum.photos/600/400?image=3\" alt=\"image 4\">\r\n                </div>\r\n                <div class=\"slider__slide\">\r\n                    <img src=\"https://picsum.photos/600/400?image=4\" alt=\"image 5\">\r\n                </div>\r\n                <div class=\"slider__slide\">\r\n                    <img src=\"https://picsum.photos/600/400?image=5\" alt=\"image 6\">\r\n                </div>\r\n            </div>\r\n            <div class=\"slider__controls\">\r\n                <button class=\"slider__control\" data-direction=\"prev\">Prev</button>\r\n                <button class=\"slider__control\" data-direction=\"next\">Next</button>\r\n            </div>`;\r\n  }\r\n\r\n  hideImages() {\r\n    const images = document.querySelectorAll(\".slider__slide\");\r\n    images.forEach((image) => {\r\n      image.classList.add(\"hide\");\r\n    });\r\n    images[0].classList.remove(\"hide\");\r\n  }\r\n\r\n  sliderControls() {\r\n    const controls = document.querySelectorAll(\".slider__control\");\r\n    controls.forEach((control) => {\r\n      control.addEventListener(\"click\", (e) => {\r\n        e.preventDefault();\r\n        this.changeSlide(e.target);\r\n      });\r\n    });\r\n  }\r\n\r\n  changeSlide() {\r\n    const current = document.querySelector(\".slider__slide:not(.hide)\");\r\n    const direction = event.target.dataset.direction;\r\n    let next;\r\n    if (direction === \"next\") {\r\n      next =\r\n        current.nextElementSibling || current.parentElement.firstElementChild;\r\n    } else if (direction === \"prev\") {\r\n      next =\r\n        current.previousElementSibling ||\r\n        current.parentElement.lastElementChild;\r\n    }\r\n    current.classList.add(\"hide\");\r\n    next.classList.remove(\"hide\");\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://webpack-demo/./src/imageslider.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _imageslider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imageslider */ \"./src/imageslider.js\");\n\r\n\r\n\r\n\r\nconst m = new _menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\nconst is = new _imageslider__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\n\r\nm.setup();\r\nis.setup();\r\n\n\n//# sourceURL=webpack://webpack-demo/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ menu; }\n/* harmony export */ });\nclass menu {\r\n  constructor() {\r\n    this.body = document.getElementsByTagName(\"body\")[0];\r\n  }\r\n\r\n  setup() {\r\n    this.createMenu();\r\n  }\r\n\r\n  createMenu() {\r\n    const nav = document.createElement(\"nav\");\r\n    nav.innerHTML = this.createHrefListWithSvgIcons();\r\n    nav.appendChild(this.createHamburgerButton());\r\n    this.body.appendChild(nav);\r\n    this.hamburgerButtonEventListener(nav);\r\n  }\r\n\r\n  // createHrefList with svg icons in front of them\r\n  createHrefListWithSvgIcons() {\r\n    return `\r\n            <ul class=\"menu__list\">\r\n                <li class=\"menu__item\"> \r\n                    <a href=\"#\" class=\"menu__link\">\r\n                        <svg class=\"menu__icon\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n                            <path d=\"M3 12h18M3 6h18M3 18h18\" />\r\n                        </svg>\r\n                        Home\r\n                    </a>\r\n                </li>\r\n                <li class=\"menu__item\">\r\n                    <a href=\"#\" class=\"menu__link\">\r\n                        <svg class=\"menu__icon\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n                            <path d=\"M12 2L2 7l10 5 10-5-10-5z\" />\r\n                            <path d=\"M2 17l10 5 10-5M2 12l10 5 10-5\" />\r\n                        </svg>\r\n                        About\r\n                    </a>\r\n                </li>\r\n                <li class=\"menu__item\">\r\n                    <a href=\"#\" class=\"menu__link\">\r\n                        <svg class=\"menu__icon\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n                            <circle cx=\"12\" cy=\"12\" r=\"10\" />\r\n                            <line x1=\"14.31\" y1=\"8\" x2=\"20.05\" y2=\"17.94\" />\r\n                            <line x1=\"9.69\" y1=\"8\" x2=\"21.17\" y2=\"8\" />\r\n                            <line x1=\"7.38\" y1=\"12\" x2=\"13.12\" y2=\"2.06\" />\r\n                            <line x1=\"9.69\" y1=\"16\" x2=\"3.95\" y2=\"6.06\" />\r\n                            <line x1=\"14.31\" y1=\"16\" x2=\"2.83\" y2=\"16\" />\r\n                            <line x1=\"16.62\" y1=\"12\" x2=\"10.88\" y2=\"21.94\" />\r\n                        </svg>\r\n                        Contact\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        `;\r\n  }\r\n\r\n  createHrefList() {\r\n    return `\r\n            <ul>\r\n                <li>\r\n                    <a href=\"#/home\">HOME</a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"#/about\">ABOUT</a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"#/contact\">CONTACT</a>\r\n                </li>\r\n            </ul>`;\r\n  }\r\n\r\n  createHamburgerButton() {\r\n    const menuBut = document.createElement(\"div\");\r\n    menuBut.classList.add(\"menu-btn\");\r\n    const menuBtnBurger = document.createElement(\"div\");\r\n    menuBtnBurger.classList.add(\"menu-btn__burger\");\r\n    menuBut.appendChild(menuBtnBurger);\r\n    return menuBut;\r\n  }\r\n\r\n  hamburgerButtonEventListener(nav) {\r\n    const id = nav.querySelector(\".menu-btn\");\r\n    id.addEventListener(\"click\", (e) => {\r\n      this.toggleHamburgerButton(nav);\r\n      this.toggleHrefs(nav);\r\n    });\r\n  }\r\n\r\n  toggleHamburgerButton(nav) {\r\n    nav.querySelector(\".menu-btn\").classList.toggle(\"open\");\r\n  }\r\n\r\n  toggleHrefs(nav) {\r\n    nav.classList.toggle(\"open\");\r\n    nav.getElementsByTagName(\"ul\")[0].classList.toggle(\"open\");\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://webpack-demo/./src/menu.js?");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	!function() {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;