(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["terminaltxt"] = factory();
	else
		root["terminaltxt"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./core/hello.ts":
/*!***********************!*\
  !*** ./core/hello.ts ***!
  \***********************/
/*! exports provided: sayHello, addHello */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sayHello\", function() { return sayHello; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addHello\", function() { return addHello; });\n/* harmony import */ var _math_math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math/math */ \"./math/math.ts\");\n\r\n/**\r\n * Logs hello message to the console.\r\n *\r\n * @param text Will be output after \"Hello \"\r\n */\r\nfunction sayHello(text) {\r\n    console.log(\"Hello \" + text);\r\n}\r\n/**\r\n * Adds firstNumber and secondNumber using [[add]] then will output the result\r\n * to console with the form \"Hello (added number)\".\r\n *\r\n * @param firstNumber\r\n * @param secondNumber\r\n */\r\nfunction addHello(firstNumber, secondNumber) {\r\n    sayHello(Object(_math_math__WEBPACK_IMPORTED_MODULE_0__[\"add\"])(firstNumber, secondNumber).toString());\r\n}\r\n\n\n//# sourceURL=webpack://terminaltxt/./core/hello.ts?");

/***/ }),

/***/ "./core/index.ts":
/*!***********************!*\
  !*** ./core/index.ts ***!
  \***********************/
/*! exports provided: sayHello, addHello */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _hello__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hello */ \"./core/hello.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"sayHello\", function() { return _hello__WEBPACK_IMPORTED_MODULE_0__[\"sayHello\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"addHello\", function() { return _hello__WEBPACK_IMPORTED_MODULE_0__[\"addHello\"]; });\n\n\r\n\n\n//# sourceURL=webpack://terminaltxt/./core/index.ts?");

/***/ }),

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/*! exports provided: sayHello, addHello */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/index */ \"./core/index.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"sayHello\", function() { return _core_index__WEBPACK_IMPORTED_MODULE_0__[\"sayHello\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"addHello\", function() { return _core_index__WEBPACK_IMPORTED_MODULE_0__[\"addHello\"]; });\n\n\r\n\n\n//# sourceURL=webpack://terminaltxt/./index.ts?");

/***/ }),

/***/ "./math/math.ts":
/*!**********************!*\
  !*** ./math/math.ts ***!
  \**********************/
/*! exports provided: add */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"add\", function() { return add; });\n/**\r\n * Simple alias for adding two numbers.\r\n *\r\n * @param firstNumber\r\n * @param secondNumber\r\n * @returns firstNumber added to secondNumber\r\n */\r\nfunction add(firstNumber, secondNumber) {\r\n    return firstNumber + secondNumber;\r\n}\r\n\n\n//# sourceURL=webpack://terminaltxt/./math/math.ts?");

/***/ })

/******/ });
});