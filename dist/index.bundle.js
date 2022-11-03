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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\n  --navHeight: 60px;\\n  --navAnimation: all 1s ease-in-out;\\n}\\n\\n* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n}\\n\\nbody {\\n  padding: 0;\\n  margin: 0;\\n  font-family: Arial, Helvetica, sans-serif;\\n\\n  height: 100vh;\\n  width: 100vw;\\n\\n  background: black;\\n  overflow: hidden;\\n}\\n\\nnav {\\n  position: relative;\\n  margin-left: -150px;\\n  background: white;\\n  filter: drop-shadow(0px 0px 4px #ccc);\\n  padding: 20px;\\n  width: 270px;\\n  height: 100vh;\\n  border-top-right-radius: 20px;\\n  border-end-end-radius: 20px;\\n  z-index: 1;\\n\\n  transition: var(--navAnimation);\\n}\\n\\nnav .menu__list {\\n  position: absolute;\\n  list-style: none;\\n  top: 220px;\\n  width: 230px;\\n  font-size: 1.5rem;\\n}\\n\\nnav .menu__item {\\n  border-radius: 6px;\\n  width: 60px;\\n  margin-left: 160px;\\n}\\n\\nnav .menu__item a {\\n  color: #333;\\n  display: grid;\\n  grid-template-columns: 0.5fr 1fr;\\n  text-decoration: none;\\n\\n  padding-top: 20px;\\n  min-height: 60px;\\n\\n  transition: all 1s ease-in-out;\\n}\\n\\nnav .menu__item span {\\n  margin-left: -160px;\\n}\\n\\nnav .menu__item:hover {\\n  background-color: #a8e821;\\n}\\n\\nnav .menu__item svg {\\n  left: 180px;\\n  position: absolute;\\n  display: flex;\\n  justify-content: center;\\n}\\n\\n/* MENU BUTTON */\\nnav .menu-btn {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  width: 25px;\\n  height: 20px;\\n  margin: 30px 30px auto auto;\\n\\n  cursor: pointer;\\n  transition: all 0.5s ease-in-out;\\n}\\n\\nnav .menu-btn__burger {\\n  width: 100%;\\n  height: 2px;\\n  background-color: #333;\\n  display: block;\\n  margin: 5px 0;\\n  border-radius: 5px;\\n  transition: all 0.5s ease-in-out;\\n}\\n\\nnav .menu-btn__burger::before,\\nnav .menu-btn__burger::after {\\n  content: \\\"\\\";\\n  width: 100%;\\n  height: 2px;\\n  background-color: #333;\\n  display: block;\\n  border-radius: 5px;\\n  transition: all 0.5s ease-in-out;\\n}\\n\\nnav .menu-btn__burger::before {\\n  transform: translateY(-6px);\\n}\\n\\nnav .menu-btn__burger::after {\\n  transform: translateY(4px);\\n}\\n\\nnav .menu-btn:hover .menu-btn__burger,\\nnav .menu-btn:hover .menu-btn__burger::before,\\nnav .menu-btn:hover .menu-btn__burger::after {\\n  background-color: #a8e821;\\n}\\n\\n/* ANIMATION */\\nnav .menu-btn.open .menu-btn__burger {\\n  transform: translateX(-10px);\\n  background-color: transparent;\\n}\\n\\nnav .menu-btn.open .menu-btn__burger::before {\\n  transform: rotate(45deg) translate(7.5px, -7px);\\n}\\n\\nnav .menu-btn.open .menu-btn__burger::after {\\n  transform: rotate(-45deg) translate(8.5px, 6px);\\n}\\n\\nnav svg {\\n  height: 20px;\\n}\\nmenu .menu__open {\\n  background: #a8e821;\\n}\\n\\nnav .logo img {\\n  margin-top: 30px;\\n  height: 22px;\\n}\\n\\nnav .profile-picture {\\n  display: grid;\\n  grid-gap: 5px;\\n  grid-template-columns: 0.6fr 1fr;\\n  width: 100%;\\n  margin: 50px 0;\\n  transition: all 1s ease-in-out;\\n}\\n\\nnav .profile-picture img {\\n  margin-left: 150px;\\n  height: 75px;\\n  border: 5px solid #fff;\\n  box-shadow: #ccc 0px 0px 10px;\\n  border-radius: 50%;\\n  transition: all 1s ease-in-out;\\n}\\n\\nnav .profile-picture div {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  opacity: 0;\\n  transition: all 0.3s ease-in-out;\\n  transition-delay: 0s;\\n}\\n\\nnav .profile-picture h1 {\\n  color: #a8e821;\\n}\\n\\nnav header {\\n  display: grid;\\n  grid-template-columns: repeat(2, 1fr);\\n}\\n\\n/* TRANSITION */\\nnav.nav__open .menu__item {\\n  width: 100%;\\n  margin-left: 0;\\n}\\n\\nnav.nav__open .menu__item a {\\n  transition: all 1s ease-in-out;\\n}\\n\\nnav.nav__open .menu__item span {\\n  visibility: visible;\\n  opacity: 1;\\n  margin-left: 0;\\n}\\n\\nnav.nav__open .menu__item svg {\\n  right: 130px;\\n}\\n\\nnav.nav__open {\\n  margin-left: 0;\\n}\\n\\nnav.nav__open .profile-picture {\\n  right: 130px;\\n}\\n\\nnav.nav__open .profile-picture img {\\n  margin-left: 0;\\n}\\n\\nnav.nav__open .profile-picture div {\\n  opacity: 1;\\n  transition-delay: 1s;\\n}\\n\\n/* IMAGE SLIDER */\\n.slider {\\n  max-width: 100vw;\\n  position: absolute;\\n  top: calc(50vh - 202px);\\n  margin-left: calc(calc(50% + 60px) - 300px);\\n}\\n\\n.slider__slides {\\n  position: relative;\\n  width: 100%;\\n}\\n\\n.slider__slide {\\n  position: absolute;\\n  top: 0;\\n  width: 100%;\\n}\\n\\n.slider__slide img {\\n  border-radius: 20px;\\n}\\n\\n.slider__controls {\\n  display: flex;\\n  justify-content: space-between;\\n  gap: 25px;\\n  margin-top: 420px;\\n  width: 600px;\\n}\\n\\n.slider__control {\\n  border: none;\\n  background-color: #fff;\\n  border-radius: 10px;\\n  cursor: pointer;\\n  padding: 25px;\\n}\\n\\n.slider__control:hover {\\n  background-color: #a8e821;\\n}\\n\\n.hide {\\n  visibility: hidden;\\n}\\n\\n@media (max-width: 768px) {\\n  nav {\\n    width: 100%;\\n    height: 60px;\\n    padding: 0;\\n    margin-left: 0;\\n\\n    border-top-right-radius: 0;\\n    border-end-end-radius: 6px;\\n    border-bottom-left-radius: 6px;\\n  }\\n\\n  nav .logo,\\n  nav .profile-picture,\\n  nav .menu-btn {\\n    display: none;\\n  }\\n\\n  nav .menu__list {  \\n    display: flex;\\n    flex-direction: row;\\n    justify-content: space-around;\\n    \\n    top: 0;\\n    width: 100%;\\n    font-size: 1rem;\\n  }\\n\\n  nav .menu__item {\\n    margin-left: 0;\\n\\n    display: flex;\\n    justify-content: center;\\n  }\\n\\n  nav .menu__item svg {\\n    width: 16px;\\n  }\\n\\n  nav .menu__item:hover {\\n    overflow: hidden;\\n    background-color: #a8e821;\\n  }\\n\\n  nav .menu__item span {\\n    display: none;\\n  }\\n\\n  nav .menu__item svg {\\n    position: relative;\\n    left: 50%;\\n  }\\n\\n  nav .menu-btn {\\n    margin: 10px 10px auto auto;\\n  }\\n\\n  nav .logo img {\\n    margin-top: 0;\\n    height: 20px;\\n  }\\n\\n  .slider {\\n    scale: 0.5;\\n    margin-left: calc(25% - 150px);\\n  }\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-demo/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-demo/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/event.js":
/*!**********************!*\
  !*** ./src/event.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ event)\n/* harmony export */ });\nclass event {\n  hamburgerButtonEventListener(nav) {\n    const id = nav.querySelector(\".menu-btn\");\n    id.addEventListener(\"click\", (e) => {\n      this.toggleHamburgerButton(nav);\n      this.toggleNav(nav);\n    });\n  }\n\n  toggleHamburgerButton(nav) {\n    nav.querySelector(\".menu-btn\").classList.toggle(\"open\");\n  }\n\n  toggleNav(nav) {\n    nav.classList.toggle(\"nav__open\");\n  }\n\n  changeCSSScreenSize() {\n    const nav = document.querySelector(\"nav\");\n    window.addEventListener(\"resize\", (e) => {\n      if (window.innerWidth < 768) {\n        nav.setAttribute(\"style\", \"transition: none\");\n      } else {\n        nav.setAttribute(\"style\", \"transition: all 1s ease-in-out\");\n      }\n    });\n  }\n}\n\n\n//# sourceURL=webpack://webpack-demo/./src/event.js?");

/***/ }),

/***/ "./src/imageslider.js":
/*!****************************!*\
  !*** ./src/imageslider.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ imageslider)\n/* harmony export */ });\nclass imageslider {\n  constructor() {\n    this.body = document.getElementsByTagName(\"body\")[0];\n  }\n\n  setup() {\n    const div = document.createElement(\"div\");\n    div.classList.add(\"slider\");\n    div.innerHTML = this.createSlider();\n    this.body.appendChild(div);\n\n    this.hideImages();\n    this.sliderControls();\n  }\n\n  createSlider() {\n    return `\n            <div class=\"slider__slides\">\n                <div class=\"slider__slide\">\n                    <img src=\"https://picsum.photos/600/400?image=0\" alt=\"image 1\">\n                </div>\n                <div class=\"slider__slide\">\n                    <img src=\"https://picsum.photos/600/400?image=1\" alt=\"image 2\">\n                </div>\n                <div class=\"slider__slide\">\n                    <img src=\"https://picsum.photos/600/400?image=2\" alt=\"image 3\">\n                </div>\n                <div class=\"slider__slide\">\n                    <img src=\"https://picsum.photos/600/400?image=3\" alt=\"image 4\">\n                </div>\n                <div class=\"slider__slide\">\n                    <img src=\"https://picsum.photos/600/400?image=4\" alt=\"image 5\">\n                </div>\n                <div class=\"slider__slide\">\n                    <img src=\"https://picsum.photos/600/400?image=5\" alt=\"image 6\">\n                </div>\n            </div>\n            <div class=\"slider__controls\">\n                <button class=\"slider__control\" data-direction=\"prev\"><</button>\n                <button class=\"slider__control\" data-direction=\"next\">></button>\n            </div>`;\n  }\n\n  hideImages() {\n    const images = document.querySelectorAll(\".slider__slide\");\n    images.forEach((image) => {\n      image.classList.add(\"hide\");\n    });\n    images[0].classList.remove(\"hide\");\n  }\n\n  sliderControls() {\n    const controls = document.querySelectorAll(\".slider__control\");\n    controls.forEach((control) => {\n      control.addEventListener(\"click\", (e) => {\n        e.preventDefault();\n        this.changeSlide(e.target);\n      });\n    });\n  }\n\n  changeSlide() {\n    const current = document.querySelector(\".slider__slide:not(.hide)\");\n    const direction = event.target.dataset.direction;\n    let next;\n    if (direction === \"next\") {\n      next =\n        current.nextElementSibling || current.parentElement.firstElementChild;\n    } else if (direction === \"prev\") {\n      next =\n        current.previousElementSibling ||\n        current.parentElement.lastElementChild;\n    }\n    current.classList.add(\"hide\");\n    next.classList.remove(\"hide\");\n  }\n}\n\n\n//# sourceURL=webpack://webpack-demo/./src/imageslider.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _imageslider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imageslider */ \"./src/imageslider.js\");\n/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./event */ \"./src/event.js\");\n\n\n\n\n\nconst e = new _event__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\nconst m = new _menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"](e);\nconst is = new _imageslider__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n\nm.setup();\nis.setup();\ne.changeCSSScreenSize();\n\n\n//# sourceURL=webpack://webpack-demo/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ menu)\n/* harmony export */ });\nclass menu {\n  constructor(event) {\n    this.body = document.getElementsByTagName(\"body\")[0];\n    this.event = event;\n  }\n\n  setup() {\n    this.createMenu();\n  }\n\n  createMenu() {\n    const nav = document.createElement(\"nav\");\n    nav.appendChild(this.createHeader());\n    nav.appendChild(this.createProfilePicture());\n    nav.innerHTML += this.createHrefList();\n\n    this.event.hamburgerButtonEventListener(nav);\n\n    this.body.appendChild(nav);\n  }\n\n  createHeader() {\n    const header = document.createElement(\"header\");\n    header.classList.add(\"header\");\n    header.appendChild(this.createLogo());\n    header.appendChild(this.createHamburgerButton());\n    return header;\n  }\n\n  // createHrefList with svg icons in front of them\n  createLogo() {\n    const container = document.createElement(\"div\");\n    container.classList.add(\"logo\");\n    const logo = document.createElement(\"img\");\n    logo.src = \"../src/assets/images/logo.svg\";\n    logo.alt = \"logo\";\n    container.appendChild(logo);\n    return container;\n  }\n\n  createProfilePicture() {\n    const container = document.createElement(\"div\");\n    container.classList.add(\"profile-picture\");\n    const profilePicture = document.createElement(\"img\");\n    profilePicture.src = \"../src/assets/images/foto.jpg\";\n    profilePicture.alt = \"profile picture\";\n    container.appendChild(profilePicture);\n    container.innerHTML += \"<div><h1>D Kalbic</h1><p>Web Developer</p></div>\";\n    return container;\n  }\n\n  createHrefList() {\n    return `\n            <ul class=\"menu__list\">\n                <li class=\"menu__item\">\n                    <a href=\"#/home\" class=\"menu__link\">\n                      <span>Home</span>\n                      <svg xmlns=\"http://www.w3.org/2000/svg\" x=\"0px\" y=\"0px\"\n                      width=\"24\" height=\"24\"\n                      viewBox=\"0 0 172 172\"\n                      style=\" fill:#000000;\">\n                      <g transform=\"\"><g fill=\"none\" fill-rule=\"nonzero\" stroke=\"none\" stroke-width=\"1\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"10\" stroke-dasharray=\"\" stroke-dashoffset=\"0\" font-family=\"none\" font-weight=\"none\" font-size=\"none\" text-anchor=\"none\" style=\"mix-blend-mode: normal\"><path d=\"M0,172v-172h172v172z\" fill=\"none\"></path><g id=\"original-icon\" fill=\"#000000\"><path d=\"M86,15.0472l-78.83333,70.9528h21.5v64.5h50.16667v-43h14.33333v43h50.16667v-64.5h21.5zM86,34.33561l43,38.7028v5.79492v57.33333h-21.5v-43h-43v43h-21.5v-63.12826z\"></path></g><path d=\"\" fill=\"none\"></path><path d=\"\" fill=\"none\"></path><path d=\"\" fill=\"none\"></path></g></g>\n                    </svg> \n                    </a>\n                </li>\n                <li class=\"menu__item\">\n                  <a href=\"#/about\" class=\"menu__link\">\n                    <span>About</span>\n                      <svg xmlns=\"http://www.w3.org/2000/svg\" x=\"0px\" y=\"0px\"\n                      width=\"24\" height=\"48\"\n                      viewBox=\"0 0 24 24\"\n                      style=\" fill:#000000;\">\n                        <path d=\"M 4.0097656 3 C 2.9179106 3 2.0097656 3.9049841 2.0097656 4.9980469 L 2 23 L 6 19 L 20 19 C 21.093063 19 22 18.093063 22 17 L 22 5 C 22 3.9069372 21.093063 3 20 3 L 4.0097656 3 z M 4.0097656 5 L 20 5 L 20 17 L 5.171875 17 L 4.0039062 18.167969 L 4.0097656 5 z M 11 7 L 11 9 L 13 9 L 13 7 L 11 7 z M 11 11 L 11 15 L 13 15 L 13 11 L 11 11 z\"></path>\n                      </svg> \n                    </a>\n                </li>\n                <li class=\"menu__item\">\n                  <a href=\"#/contact\" class=\"menu__link\">\n                    <span>Contact</span>\n                    <svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n                    viewBox=\"0 0 473.806 473.806\" style=\"enable-background:new 0 0 473.806 473.806;\" xml:space=\"preserve\">\n                      <g>\n                        <g>\n                          <path d=\"M374.456,293.506c-9.7-10.1-21.4-15.5-33.8-15.5c-12.3,0-24.1,5.3-34.2,15.4l-31.6,31.5c-2.6-1.4-5.2-2.7-7.7-4\n                            c-3.6-1.8-7-3.5-9.9-5.3c-29.6-18.8-56.5-43.3-82.3-75c-12.5-15.8-20.9-29.1-27-42.6c8.2-7.5,15.8-15.3,23.2-22.8\n                            c2.8-2.8,5.6-5.7,8.4-8.5c21-21,21-48.2,0-69.2l-27.3-27.3c-3.1-3.1-6.3-6.3-9.3-9.5c-6-6.2-12.3-12.6-18.8-18.6\n                            c-9.7-9.6-21.3-14.7-33.5-14.7s-24,5.1-34,14.7c-0.1,0.1-0.1,0.1-0.2,0.2l-34,34.3c-12.8,12.8-20.1,28.4-21.7,46.5\n                            c-2.4,29.2,6.2,56.4,12.8,74.2c16.2,43.7,40.4,84.2,76.5,127.6c43.8,52.3,96.5,93.6,156.7,122.7c23,10.9,53.7,23.8,88,26\n                            c2.1,0.1,4.3,0.2,6.3,0.2c23.1,0,42.5-8.3,57.7-24.8c0.1-0.2,0.3-0.3,0.4-0.5c5.2-6.3,11.2-12,17.5-18.1c4.3-4.1,8.7-8.4,13-12.9\n                            c9.9-10.3,15.1-22.3,15.1-34.6c0-12.4-5.3-24.3-15.4-34.3L374.456,293.506z M410.256,398.806\n                            C410.156,398.806,410.156,398.906,410.256,398.806c-3.9,4.2-7.9,8-12.2,12.2c-6.5,6.2-13.1,12.7-19.3,20\n                            c-10.1,10.8-22,15.9-37.6,15.9c-1.5,0-3.1,0-4.6-0.1c-29.7-1.9-57.3-13.5-78-23.4c-56.6-27.4-106.3-66.3-147.6-115.6\n                            c-34.1-41.1-56.9-79.1-72-119.9c-9.3-24.9-12.7-44.3-11.2-62.6c1-11.7,5.5-21.4,13.8-29.7l34.1-34.1c4.9-4.6,10.1-7.1,15.2-7.1\n                            c6.3,0,11.4,3.8,14.6,7c0.1,0.1,0.2,0.2,0.3,0.3c6.1,5.7,11.9,11.6,18,17.9c3.1,3.2,6.3,6.4,9.5,9.7l27.3,27.3\n                            c10.6,10.6,10.6,20.4,0,31c-2.9,2.9-5.7,5.8-8.6,8.6c-8.4,8.6-16.4,16.6-25.1,24.4c-0.2,0.2-0.4,0.3-0.5,0.5\n                            c-8.6,8.6-7,17-5.2,22.7c0.1,0.3,0.2,0.6,0.3,0.9c7.1,17.2,17.1,33.4,32.3,52.7l0.1,0.1c27.6,34,56.7,60.5,88.8,80.8\n                            c4.1,2.6,8.3,4.7,12.3,6.7c3.6,1.8,7,3.5,9.9,5.3c0.4,0.2,0.8,0.5,1.2,0.7c3.4,1.7,6.6,2.5,9.9,2.5c8.3,0,13.5-5.2,15.2-6.9\n                            l34.2-34.2c3.4-3.4,8.8-7.5,15.1-7.5c6.2,0,11.3,3.9,14.4,7.3c0.1,0.1,0.1,0.1,0.2,0.2l55.1,55.1\n                            C420.456,377.706,420.456,388.206,410.256,398.806z\"/>\n                          <path d=\"M256.056,112.706c26.2,4.4,50,16.8,69,35.8s31.3,42.8,35.8,69c1.1,6.6,6.8,11.2,13.3,11.2c0.8,0,1.5-0.1,2.3-0.2\n                            c7.4-1.2,12.3-8.2,11.1-15.6c-5.4-31.7-20.4-60.6-43.3-83.5s-51.8-37.9-83.5-43.3c-7.4-1.2-14.3,3.7-15.6,11\n                            S248.656,111.506,256.056,112.706z\"/>\n                          <path d=\"M473.256,209.006c-8.9-52.2-33.5-99.7-71.3-137.5s-85.3-62.4-137.5-71.3c-7.3-1.3-14.2,3.7-15.5,11\n                            c-1.2,7.4,3.7,14.3,11.1,15.6c46.6,7.9,89.1,30,122.9,63.7c33.8,33.8,55.8,76.3,63.7,122.9c1.1,6.6,6.8,11.2,13.3,11.2\n                            c0.8,0,1.5-0.1,2.3-0.2C469.556,223.306,474.556,216.306,473.256,209.006z\"/>\n                      </svg>   \n                    </a>\n                </li>\n                <li class=\"menu__item\">\n                    <a href=\"#/airplay\" class=\"menu__link\">\n                      <span>Airplay</span>\n                      <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                        <path d=\"M18 22H6L12 16L18 22ZM7 19H3C1.89543 19 1 18.1046 1 17V5C1 3.89543 1.89543 3 3 3H21C22.1046 3 23 3.89543 23 5V17C23 18.1046 22.1046 19 21 19H17V17H21V5H3V17H7V19Z\" fill=\"#2E3A59\"/>\n                      </svg>\n                    </a>\n                </li>\n                <li class=\"menu__item\">\n                  <a href=\"#/chart\" class=\"menu__link\">\n                    <span>Chart</span>\n                      <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                        <path d=\"M21 21H4C3.44772 21 3 20.5523 3 20V3H5V19H21V21ZM8.373 16L7 14.656L11.856 9.9C12.2383 9.52848 12.8467 9.52848 13.229 9.9L15.456 12.081L19.627 8L21 9.344L16.144 14.1C15.7617 14.4715 15.1533 14.4715 14.771 14.1L12.543 11.918L8.374 16H8.373Z\" fill=\"#2E3A59\"/>\n                      </svg>\n                    </a>\n                </li>\n                <li class=\"menu__item\">\n                  <a href=\"#/calendar\" class=\"menu__link\">\n                    <span>Calendar</span>\n                      <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                        <path d=\"M19 22H5C3.89543 22 3 21.1046 3 20V6C3 4.89543 3.89543 4 5 4H7V2H9V4H15V2H17V4H19C20.1046 4 21 4.89543 21 6V20C21 21.1046 20.1046 22 19 22ZM5 10V20H19V10H5ZM5 6V8H19V6H5ZM17 18H15V16H17V18ZM13 18H11V16H13V18ZM9 18H7V16H9V18ZM17 14H15V12H17V14ZM13 14H11V12H13V14ZM9 14H7V12H9V14Z\" fill=\"#2E3A59\"/>\n                      </svg>\n                    </a>\n                </li>\n            </ul>\n        `;\n  }\n\n  createHamburgerButton() {\n    const menuBut = document.createElement(\"div\");\n    menuBut.classList.add(\"menu-btn\");\n    const menuBtnBurger = document.createElement(\"div\");\n    menuBtnBurger.classList.add(\"menu-btn__burger\");\n    menuBut.appendChild(menuBtnBurger);\n    return menuBut;\n  }\n}\n\n\n//# sourceURL=webpack://webpack-demo/./src/menu.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;