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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\r\\n  --navHeight: 60px;\\r\\n  --navAnimation: all 1s ease-in-out;\\r\\n}\\r\\n\\r\\n* {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n  font-family: Arial, Helvetica, sans-serif;\\r\\n\\r\\n  height: 100vh;\\r\\n  width: 100vw;\\r\\n\\r\\n  overflow: hidden;\\r\\n}\\r\\n\\r\\nnav {\\r\\n  position: relative;\\r\\n  margin-left: -150px;\\r\\n  background: white;\\r\\n  filter: drop-shadow(0px 0px 4px #ccc);\\r\\n  padding: 20px;\\r\\n  width: 270px;\\r\\n  height: 100vh;\\r\\n  border-top-right-radius: 20px;\\r\\n  border-end-end-radius: 20px;\\r\\n\\r\\n  transition: var(--navAnimation);\\r\\n}\\r\\n\\r\\nnav .menu__list {\\r\\n  position: absolute;\\r\\n  list-style: none;\\r\\n  top: 220px;\\r\\n  width: 230px;\\r\\n  font-size: 1.5rem;\\r\\n}\\r\\n\\r\\nnav .menu__item {\\r\\n  border-radius: 6px;\\r\\n  padding: 20px;\\r\\n}\\r\\n\\r\\nnav .menu__item a {\\r\\n  color: #333;\\r\\n  display: grid;\\r\\n  grid-template-columns: 0.5fr 1fr;\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\nnav .menu__item span {\\r\\n  opacity: 0;\\r\\n  transition: var(--navAnimation);\\r\\n}\\r\\n\\r\\nnav .menu__item:hover {\\r\\n  background-color: #a8e821;\\r\\n}\\r\\n\\r\\nnav .menu__item svg {\\r\\n  left: 180px;\\r\\n  position: absolute;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\n/* MENU BUTTON */\\r\\nnav .menu-btn {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  width: 25px;\\r\\n  height: 20px;\\r\\n  margin: 30px 30px auto auto;\\r\\n\\r\\n  cursor: pointer;\\r\\n  transition: all 0.5s ease-in-out;\\r\\n}\\r\\n\\r\\nnav .menu-btn__burger {\\r\\n  width: 100%;\\r\\n  height: 2px;\\r\\n  background-color: #333;\\r\\n  display: block;\\r\\n  margin: 5px 0;\\r\\n  border-radius: 5px;\\r\\n  transition: all 0.5s ease-in-out;\\r\\n}\\r\\n\\r\\nnav .menu-btn__burger::before,\\r\\nnav .menu-btn__burger::after {\\r\\n  content: \\\"\\\";\\r\\n  width: 100%;\\r\\n  height: 2px;\\r\\n  background-color: #333;\\r\\n  display: block;\\r\\n  border-radius: 5px;\\r\\n  transition: all 0.5s ease-in-out;\\r\\n}\\r\\n\\r\\nnav .menu-btn__burger::before {\\r\\n  transform: translateY(-6px);\\r\\n}\\r\\n\\r\\nnav .menu-btn__burger::after {\\r\\n  transform: translateY(4px);\\r\\n}\\r\\n\\r\\nnav .menu-btn:hover .menu-btn__burger,\\r\\nnav .menu-btn:hover .menu-btn__burger::before,\\r\\nnav .menu-btn:hover .menu-btn__burger::after {\\r\\n  background-color: #a8e821;\\r\\n}\\r\\n\\r\\n/* ANIMATION */\\r\\nnav .menu-btn.open .menu-btn__burger {\\r\\n  transform: translateX(-10px);\\r\\n  background-color: transparent;\\r\\n}\\r\\n\\r\\nnav .menu-btn.open .menu-btn__burger::before {\\r\\n  transform: rotate(45deg) translate(7.5px, -7px);\\r\\n}\\r\\n\\r\\nnav .menu-btn.open .menu-btn__burger::after {\\r\\n  transform: rotate(-45deg) translate(8.5px, 6px);\\r\\n}\\r\\n\\r\\nnav svg {\\r\\n  height: 20px;\\r\\n}\\r\\nmenu .menu__open {\\r\\n  background: #a8e821;\\r\\n}\\r\\n\\r\\nnav .logo img {\\r\\n  margin-top: 30px;\\r\\n  height: 22px;\\r\\n}\\r\\n\\r\\nnav .profile-picture {\\r\\n  display: grid;\\r\\n  grid-gap: 5px;\\r\\n  grid-template-columns: 0.6fr 1fr;\\r\\n  width: 100%;\\r\\n  margin: 50px 0;\\r\\n  transition: all 1s ease-in-out;\\r\\n}\\r\\n\\r\\nnav .profile-picture img {\\r\\n  margin-left: 150px;\\r\\n  height: 75px;\\r\\n  border: 5px solid #fff;\\r\\n  box-shadow: #ccc 0px 0px 10px;\\r\\n  border-radius: 50%;\\r\\n  transition: all 1s ease-in-out;\\r\\n}\\r\\n\\r\\nnav .profile-picture div {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n  opacity: 0;\\r\\n  transition: all 0.3s ease-in-out;\\r\\n  transition-delay: 0s;\\r\\n}\\r\\n\\r\\nnav .profile-picture h1 {\\r\\n  color: #a8e821;\\r\\n}\\r\\n\\r\\nnav header {\\r\\n  display: grid;\\r\\n  grid-template-columns: repeat(2, 1fr);\\r\\n}\\r\\n\\r\\n/* TRANSITION */\\r\\nnav.nav__open .menu__item span {\\r\\n  opacity: 1;\\r\\n}\\r\\n\\r\\nnav.nav__open .menu__item svg {\\r\\n  right: 130px;\\r\\n}\\r\\n\\r\\nnav.nav__open {\\r\\n  margin-left: 0;\\r\\n}\\r\\n\\r\\nnav.nav__open .profile-picture {\\r\\n  right: 130px;\\r\\n}\\r\\n\\r\\nnav.nav__open .profile-picture img {\\r\\n  margin-left: 0;\\r\\n}\\r\\n\\r\\nnav.nav__open .profile-picture div {\\r\\n  opacity: 1;\\r\\n  transition-delay: 1s;\\r\\n}\\r\\n\\r\\n@media (max-width: 768px) {\\r\\n  nav {\\r\\n    width: 100%;\\r\\n    height: 60px;\\r\\n    border-radius: 5px;\\r\\n    padding: 0;\\r\\n    margin-left: 0;\\r\\n\\r\\n    border-top-right-radius: 0;\\r\\n    border-end-end-radius: 20px;\\r\\n    border-bottom-left-radius: 20px;\\r\\n  }\\r\\n\\r\\n  nav .logo,\\r\\n  nav .profile-picture,\\r\\n  nav .menu-btn {\\r\\n    display: none;\\r\\n  }\\r\\n\\r\\n  nav .menu__list {\\r\\n    display: flex;\\r\\n    flex-direction: row;\\r\\n    justify-content: space-around;\\r\\n    top: 0;\\r\\n    width: 100%;\\r\\n    font-size: 1rem;\\r\\n  }\\r\\n\\r\\n  nav .menu__item span {\\r\\n    display: none;\\r\\n  }\\r\\n\\r\\n  nav .menu__item svg {\\r\\n    position: relative;\\r\\n    left: 50%;\\r\\n  }\\r\\n\\r\\n  nav .menu-btn {\\r\\n    margin: 10px 10px auto auto;\\r\\n  }\\r\\n\\r\\n  nav .logo img {\\r\\n    margin-top: 0;\\r\\n    height: 20px;\\r\\n  }\\r\\n\\r\\n  nav .menu__item:hover {\\r\\n    overflow: hidden;\\r\\n    background-color: red;\\r\\n  }\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-demo/./src/style.css?./node_modules/css-loader/dist/cjs.js");

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

/***/ "./src/event.js":
/*!**********************!*\
  !*** ./src/event.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ event; }\n/* harmony export */ });\nclass event {\r\n  hamburgerButtonEventListener(nav) {\r\n    const id = nav.querySelector(\".menu-btn\");\r\n    id.addEventListener(\"click\", (e) => {\r\n      this.toggleHamburgerButton(nav);\r\n      this.toggleNav(nav);\r\n    });\r\n  }\r\n\r\n  toggleHamburgerButton(nav) {\r\n    nav.querySelector(\".menu-btn\").classList.toggle(\"open\");\r\n  }\r\n\r\n  toggleNav(nav) {\r\n    nav.classList.toggle(\"nav__open\");\r\n  }\r\n\r\n  changeCSSScreenSize() {\r\n    const nav = document.querySelector(\"nav\");\r\n    window.addEventListener(\"resize\", (e) => {\r\n      if (window.innerWidth < 768) {\r\n        nav.setAttribute(\"style\", \"transition: none\");\r\n      } else {\r\n        nav.setAttribute(\"style\", \"transition: all 1s ease-in-out\");\r\n      }\r\n    });\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://webpack-demo/./src/event.js?");

/***/ }),

/***/ "./src/imageslider.js":
/*!****************************!*\
  !*** ./src/imageslider.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ imageslider; }\n/* harmony export */ });\nclass imageslider {\r\n  constructor() {\r\n    this.body = document.getElementsByTagName(\"body\")[0];\r\n  }\r\n\r\n  setup() {\r\n    const div = document.createElement(\"div\");\r\n    div.classList.add(\"slider\");\r\n    div.innerHTML = this.createSlider();\r\n    this.body.appendChild(div);\r\n\r\n    // this.hideImages();\r\n    this.sliderControls();\r\n  }\r\n\r\n  createSlider() {\r\n    return `\r\n            <div class=\"slider__slides\">\r\n                <div class=\"slider__slide\">\r\n                    <img src=\"https://picsum.photos/600/400?image=0\" alt=\"image 1\">\r\n                </div>\r\n                <div class=\"slider__slide\">\r\n                    <img src=\"https://picsum.photos/600/400?image=1\" alt=\"image 2\">\r\n                </div>\r\n                <div class=\"slider__slide\">\r\n                    <img src=\"https://picsum.photos/600/400?image=2\" alt=\"image 3\">\r\n                </div>\r\n                <div class=\"slider__slide\">\r\n                    <img src=\"https://picsum.photos/600/400?image=3\" alt=\"image 4\">\r\n                </div>\r\n                <div class=\"slider__slide\">\r\n                    <img src=\"https://picsum.photos/600/400?image=4\" alt=\"image 5\">\r\n                </div>\r\n                <div class=\"slider__slide\">\r\n                    <img src=\"https://picsum.photos/600/400?image=5\" alt=\"image 6\">\r\n                </div>\r\n            </div>\r\n            <div class=\"slider__controls\">\r\n                <button class=\"slider__control\" data-direction=\"prev\">Prev</button>\r\n                <button class=\"slider__control\" data-direction=\"next\">Next</button>\r\n            </div>`;\r\n  }\r\n\r\n  hideImages() {\r\n    const images = document.querySelectorAll(\".slider__slide\");\r\n    images.forEach((image) => {\r\n      image.classList.add(\"hide\");\r\n    });\r\n    images[0].classList.remove(\"hide\");\r\n  }\r\n\r\n  sliderControls() {\r\n    const controls = document.querySelectorAll(\".slider__control\");\r\n    controls.forEach((control) => {\r\n      control.addEventListener(\"click\", (e) => {\r\n        e.preventDefault();\r\n        this.changeSlide(e.target);\r\n      });\r\n    });\r\n  }\r\n\r\n  changeSlide() {\r\n    const current = document.querySelector(\".slider__slide:not(.hide)\");\r\n    const direction = event.target.dataset.direction;\r\n    let next;\r\n    if (direction === \"next\") {\r\n      next =\r\n        current.nextElementSibling || current.parentElement.firstElementChild;\r\n    } else if (direction === \"prev\") {\r\n      next =\r\n        current.previousElementSibling ||\r\n        current.parentElement.lastElementChild;\r\n    }\r\n    current.classList.add(\"hide\");\r\n    next.classList.remove(\"hide\");\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://webpack-demo/./src/imageslider.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _imageslider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imageslider */ \"./src/imageslider.js\");\n/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./event */ \"./src/event.js\");\n\r\n\r\n\r\n\r\n\r\nconst e = new _event__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\r\nconst m = new _menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"](e);\r\nconst is = new _imageslider__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\n\r\nm.setup();\r\n// is.setup();\r\ne.changeCSSScreenSize();\r\n\n\n//# sourceURL=webpack://webpack-demo/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ menu; }\n/* harmony export */ });\nclass menu {\r\n  constructor(event) {\r\n    this.body = document.getElementsByTagName(\"body\")[0];\r\n    this.event = event;\r\n  }\r\n\r\n  setup() {\r\n    this.createMenu();\r\n  }\r\n\r\n  createMenu() {\r\n    const nav = document.createElement(\"nav\");\r\n    nav.appendChild(this.createHeader());\r\n    nav.appendChild(this.createProfilePicture());\r\n    nav.innerHTML += this.createHrefList();\r\n\r\n    this.event.hamburgerButtonEventListener(nav);\r\n\r\n    this.body.appendChild(nav);\r\n  }\r\n\r\n  createHeader() {\r\n    const header = document.createElement(\"header\");\r\n    header.classList.add(\"header\");\r\n    header.appendChild(this.createLogo());\r\n    header.appendChild(this.createHamburgerButton());\r\n    return header;\r\n  }\r\n\r\n  // createHrefList with svg icons in front of them\r\n  createLogo() {\r\n    const container = document.createElement(\"div\");\r\n    container.classList.add(\"logo\");\r\n    const logo = document.createElement(\"img\");\r\n    logo.src = \"../src/assets/images/logo.svg\";\r\n    logo.alt = \"logo\";\r\n    container.appendChild(logo);\r\n    return container;\r\n  }\r\n\r\n  createProfilePicture() {\r\n    const container = document.createElement(\"div\");\r\n    container.classList.add(\"profile-picture\");\r\n    const profilePicture = document.createElement(\"img\");\r\n    profilePicture.src = \"../src/assets/images/foto.jpg\";\r\n    profilePicture.alt = \"profile picture\";\r\n    container.appendChild(profilePicture);\r\n    container.innerHTML += \"<div><h1>D Kalbic</h1><p>Web Developer</p></div>\";\r\n    return container;\r\n  }\r\n\r\n  createHrefList() {\r\n    return `\r\n            <ul class=\"menu__list\">\r\n                <li class=\"menu__item\"> \r\n                    <a href=\"#\" class=\"menu__link\">\r\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" x=\"0px\" y=\"0px\"\r\n                    width=\"24\" height=\"24\"\r\n                    viewBox=\"0 0 172 172\"\r\n                    style=\" fill:#000000;\"><g transform=\"\"><g fill=\"none\" fill-rule=\"nonzero\" stroke=\"none\" stroke-width=\"1\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"10\" stroke-dasharray=\"\" stroke-dashoffset=\"0\" font-family=\"none\" font-weight=\"none\" font-size=\"none\" text-anchor=\"none\" style=\"mix-blend-mode: normal\"><path d=\"M0,172v-172h172v172z\" fill=\"none\"></path><g id=\"original-icon\" fill=\"#000000\"><path d=\"M86,15.0472l-78.83333,70.9528h21.5v64.5h50.16667v-43h14.33333v43h50.16667v-64.5h21.5zM86,34.33561l43,38.7028v5.79492v57.33333h-21.5v-43h-43v43h-21.5v-63.12826z\"></path></g><path d=\"\" fill=\"none\"></path><path d=\"\" fill=\"none\"></path><path d=\"\" fill=\"none\"></path></g></g></svg>\r\n                        <span>Home</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"menu__item\">\r\n                    <a href=\"#\" class=\"menu__link\">\r\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" x=\"0px\" y=\"0px\"\r\n                    width=\"24\" height=\"48\"\r\n                    viewBox=\"0 0 24 24\"\r\n                    style=\" fill:#000000;\"><path d=\"M 4.0097656 3 C 2.9179106 3 2.0097656 3.9049841 2.0097656 4.9980469 L 2 23 L 6 19 L 20 19 C 21.093063 19 22 18.093063 22 17 L 22 5 C 22 3.9069372 21.093063 3 20 3 L 4.0097656 3 z M 4.0097656 5 L 20 5 L 20 17 L 5.171875 17 L 4.0039062 18.167969 L 4.0097656 5 z M 11 7 L 11 9 L 13 9 L 13 7 L 11 7 z M 11 11 L 11 15 L 13 15 L 13 11 L 11 11 z\"></path></svg>\r\n                        <span>About</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"menu__item\">\r\n                    <a href=\"#\" class=\"menu__link\">\r\n                    <svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                    viewBox=\"0 0 473.806 473.806\" style=\"enable-background:new 0 0 473.806 473.806;\" xml:space=\"preserve\">\r\n                 <g>\r\n                   <g>\r\n                     <path d=\"M374.456,293.506c-9.7-10.1-21.4-15.5-33.8-15.5c-12.3,0-24.1,5.3-34.2,15.4l-31.6,31.5c-2.6-1.4-5.2-2.7-7.7-4\r\n                       c-3.6-1.8-7-3.5-9.9-5.3c-29.6-18.8-56.5-43.3-82.3-75c-12.5-15.8-20.9-29.1-27-42.6c8.2-7.5,15.8-15.3,23.2-22.8\r\n                       c2.8-2.8,5.6-5.7,8.4-8.5c21-21,21-48.2,0-69.2l-27.3-27.3c-3.1-3.1-6.3-6.3-9.3-9.5c-6-6.2-12.3-12.6-18.8-18.6\r\n                       c-9.7-9.6-21.3-14.7-33.5-14.7s-24,5.1-34,14.7c-0.1,0.1-0.1,0.1-0.2,0.2l-34,34.3c-12.8,12.8-20.1,28.4-21.7,46.5\r\n                       c-2.4,29.2,6.2,56.4,12.8,74.2c16.2,43.7,40.4,84.2,76.5,127.6c43.8,52.3,96.5,93.6,156.7,122.7c23,10.9,53.7,23.8,88,26\r\n                       c2.1,0.1,4.3,0.2,6.3,0.2c23.1,0,42.5-8.3,57.7-24.8c0.1-0.2,0.3-0.3,0.4-0.5c5.2-6.3,11.2-12,17.5-18.1c4.3-4.1,8.7-8.4,13-12.9\r\n                       c9.9-10.3,15.1-22.3,15.1-34.6c0-12.4-5.3-24.3-15.4-34.3L374.456,293.506z M410.256,398.806\r\n                       C410.156,398.806,410.156,398.906,410.256,398.806c-3.9,4.2-7.9,8-12.2,12.2c-6.5,6.2-13.1,12.7-19.3,20\r\n                       c-10.1,10.8-22,15.9-37.6,15.9c-1.5,0-3.1,0-4.6-0.1c-29.7-1.9-57.3-13.5-78-23.4c-56.6-27.4-106.3-66.3-147.6-115.6\r\n                       c-34.1-41.1-56.9-79.1-72-119.9c-9.3-24.9-12.7-44.3-11.2-62.6c1-11.7,5.5-21.4,13.8-29.7l34.1-34.1c4.9-4.6,10.1-7.1,15.2-7.1\r\n                       c6.3,0,11.4,3.8,14.6,7c0.1,0.1,0.2,0.2,0.3,0.3c6.1,5.7,11.9,11.6,18,17.9c3.1,3.2,6.3,6.4,9.5,9.7l27.3,27.3\r\n                       c10.6,10.6,10.6,20.4,0,31c-2.9,2.9-5.7,5.8-8.6,8.6c-8.4,8.6-16.4,16.6-25.1,24.4c-0.2,0.2-0.4,0.3-0.5,0.5\r\n                       c-8.6,8.6-7,17-5.2,22.7c0.1,0.3,0.2,0.6,0.3,0.9c7.1,17.2,17.1,33.4,32.3,52.7l0.1,0.1c27.6,34,56.7,60.5,88.8,80.8\r\n                       c4.1,2.6,8.3,4.7,12.3,6.7c3.6,1.8,7,3.5,9.9,5.3c0.4,0.2,0.8,0.5,1.2,0.7c3.4,1.7,6.6,2.5,9.9,2.5c8.3,0,13.5-5.2,15.2-6.9\r\n                       l34.2-34.2c3.4-3.4,8.8-7.5,15.1-7.5c6.2,0,11.3,3.9,14.4,7.3c0.1,0.1,0.1,0.1,0.2,0.2l55.1,55.1\r\n                       C420.456,377.706,420.456,388.206,410.256,398.806z\"/>\r\n                     <path d=\"M256.056,112.706c26.2,4.4,50,16.8,69,35.8s31.3,42.8,35.8,69c1.1,6.6,6.8,11.2,13.3,11.2c0.8,0,1.5-0.1,2.3-0.2\r\n                       c7.4-1.2,12.3-8.2,11.1-15.6c-5.4-31.7-20.4-60.6-43.3-83.5s-51.8-37.9-83.5-43.3c-7.4-1.2-14.3,3.7-15.6,11\r\n                       S248.656,111.506,256.056,112.706z\"/>\r\n                     <path d=\"M473.256,209.006c-8.9-52.2-33.5-99.7-71.3-137.5s-85.3-62.4-137.5-71.3c-7.3-1.3-14.2,3.7-15.5,11\r\n                       c-1.2,7.4,3.7,14.3,11.1,15.6c46.6,7.9,89.1,30,122.9,63.7c33.8,33.8,55.8,76.3,63.7,122.9c1.1,6.6,6.8,11.2,13.3,11.2\r\n                       c0.8,0,1.5-0.1,2.3-0.2C469.556,223.306,474.556,216.306,473.256,209.006z\"/>\r\n                 </svg>\r\n                        <span>Contact</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"menu__item\">\r\n                    <a href=\"#\" class=\"menu__link\">\r\n                    <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n<path d=\"M18 22H6L12 16L18 22ZM7 19H3C1.89543 19 1 18.1046 1 17V5C1 3.89543 1.89543 3 3 3H21C22.1046 3 23 3.89543 23 5V17C23 18.1046 22.1046 19 21 19H17V17H21V5H3V17H7V19Z\" fill=\"#2E3A59\"/>\r\n</svg>\r\n                        <span>Airplay</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"menu__item\">\r\n                    <a href=\"#\" class=\"menu__link\">\r\n                    <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n<path d=\"M21 21H4C3.44772 21 3 20.5523 3 20V3H5V19H21V21ZM8.373 16L7 14.656L11.856 9.9C12.2383 9.52848 12.8467 9.52848 13.229 9.9L15.456 12.081L19.627 8L21 9.344L16.144 14.1C15.7617 14.4715 15.1533 14.4715 14.771 14.1L12.543 11.918L8.374 16H8.373Z\" fill=\"#2E3A59\"/>\r\n</svg>\r\n                        <span>Chart</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"menu__item\">\r\n                    <a href=\"#\" class=\"menu__link\">\r\n                    <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n<path d=\"M19 22H5C3.89543 22 3 21.1046 3 20V6C3 4.89543 3.89543 4 5 4H7V2H9V4H15V2H17V4H19C20.1046 4 21 4.89543 21 6V20C21 21.1046 20.1046 22 19 22ZM5 10V20H19V10H5ZM5 6V8H19V6H5ZM17 18H15V16H17V18ZM13 18H11V16H13V18ZM9 18H7V16H9V18ZM17 14H15V12H17V14ZM13 14H11V12H13V14ZM9 14H7V12H9V14Z\" fill=\"#2E3A59\"/>\r\n</svg>\r\n                        <span>Calendar</span>\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        `;\r\n  }\r\n\r\n  createHamburgerButton() {\r\n    const menuBut = document.createElement(\"div\");\r\n    menuBut.classList.add(\"menu-btn\");\r\n    const menuBtnBurger = document.createElement(\"div\");\r\n    menuBtnBurger.classList.add(\"menu-btn__burger\");\r\n    menuBut.appendChild(menuBtnBurger);\r\n    return menuBut;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://webpack-demo/./src/menu.js?");

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