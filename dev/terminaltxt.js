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

/***/ "./characterset/CharacterSet.ts":
/*!**************************************!*\
  !*** ./characterset/CharacterSet.ts ***!
  \**************************************/
/*! exports provided: CharacterSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CharacterSet\", function() { return CharacterSet; });\n/**\r\n * For creating, loading, and saving terminal character sets.\r\n *\r\n * ## string based constructor\r\n *\r\n * String of characters that will be converted to a set. No separator characters.\r\n *\r\n * ```ts\r\n * const example: CharacterSet = new CharacterSet(' .:-=+*#%@');\r\n * ```\r\n *\r\n * ## number[] based constructor\r\n *\r\n * Use a set that has already been converted to UTF-16.\r\n *\r\n * ```ts\r\n * const example: CharacterSet = new CharacterSet([32, 46, 58, 45, 61, 43, 42, 35, 37, 64]);\r\n * ```\r\n *\r\n * ## Unknown Characters\r\n *\r\n * Characters which are not in the [[set]] will be displayed using the [[unknown]] character code.\r\n * By default this is '�' or the [unicode replacement character](https://en.wikipedia.org/wiki/Specials_(Unicode_block)#Replacement_character).\r\n * Be advised that the replacement character doesn't always displayed with the correct spacing for a monospaced font and can lead to undesirable results.\r\n * If you intend to use this functionality then you can set the value of [[unknown]] manually or using the [[constructor]].\r\n *\r\n * Notes:\r\n * - In some cases order matters, so keep that in mind.\r\n * - You must include a space (32 in UTF-16) in the constructor for it to be included in the set.\r\n *\r\n */ // TODO add see to set used in example // TODO fix problem with <,>,&,&nbsp;\r\nvar CharacterSet = /** @class */ (function () {\r\n    function CharacterSet(argument, unknown) {\r\n        if (argument === void 0) { argument = CharacterSet.getDefaultCharacterSet(); }\r\n        if (typeof argument === 'string') {\r\n            var set = [];\r\n            for (var i = 0; i < argument.length; i++) {\r\n                var code = argument.charCodeAt(i);\r\n                if (set.indexOf(code) === -1) {\r\n                    set.push(code);\r\n                }\r\n            }\r\n            this.set = set;\r\n        }\r\n        else {\r\n            // TODO consider adding some checks\r\n            this.set = argument;\r\n        }\r\n        if (!unknown) {\r\n            this.unknown = '�'.charCodeAt(0);\r\n        }\r\n        else {\r\n            if (typeof unknown === 'string') {\r\n                this.unknown = unknown.charCodeAt(0);\r\n            }\r\n            else {\r\n                this.unknown = unknown;\r\n            }\r\n        }\r\n    }\r\n    /**\r\n     * @returns ' ' and '█' in UTF-16 form.\r\n     */\r\n    CharacterSet.getDefaultCharacterSet = function () {\r\n        return [32, 9608];\r\n    };\r\n    /**\r\n     * Get index in set based on character. -1 if not in set.\r\n     *\r\n     * @param character\r\n     * @returns index or -1\r\n     */\r\n    CharacterSet.prototype.getIndex = function (character) {\r\n        return this.set.indexOf(character.charCodeAt(0));\r\n    };\r\n    /**\r\n     * Will return unknown code if index is out of bounds.\r\n     *\r\n     * @param index\r\n     * @return UTF-16 code at index\r\n     */\r\n    CharacterSet.prototype.getValue = function (index) {\r\n        if (index >= 0 && index < this.set.length) {\r\n            return this.set[index];\r\n        }\r\n        return this.unknown;\r\n    };\r\n    /**\r\n     * @returns length of [[set]]\r\n     */\r\n    CharacterSet.prototype.size = function () {\r\n        return this.set.length;\r\n    };\r\n    /**\r\n     * Like [[getValue]] just the code is converted into a string.\r\n     *\r\n     * @param index\r\n     */\r\n    CharacterSet.prototype.toString = function (index) {\r\n        return String.fromCharCode(this.getValue(index));\r\n    };\r\n    return CharacterSet;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack://terminaltxt/./characterset/CharacterSet.ts?");

/***/ }),

/***/ "./characterset/index.ts":
/*!*******************************!*\
  !*** ./characterset/index.ts ***!
  \*******************************/
/*! exports provided: CharacterSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _CharacterSet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CharacterSet */ \"./characterset/CharacterSet.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"CharacterSet\", function() { return _CharacterSet__WEBPACK_IMPORTED_MODULE_0__[\"CharacterSet\"]; });\n\n\r\n\n\n//# sourceURL=webpack://terminaltxt/./characterset/index.ts?");

/***/ }),

/***/ "./dom-controller/DOMCellController.ts":
/*!*********************************************!*\
  !*** ./dom-controller/DOMCellController.ts ***!
  \*********************************************/
/*! exports provided: DOMCellController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DOMCellController\", function() { return DOMCellController; });\n/* harmony import */ var _DOMController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMController */ \"./dom-controller/DOMController.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\n\r\n/**\r\n * Creates and has methods to update a Terminal DOM that contains cells in a grid pattern.\r\n */\r\nvar DOMCellController = /** @class */ (function (_super) {\r\n    __extends(DOMCellController, _super);\r\n    /**\r\n     * @param width\r\n     * @param height\r\n     * @param container\r\n     */\r\n    function DOMCellController(width, height, container) {\r\n        var _this = this;\r\n        if (container) {\r\n            _this = _super.call(this, container) || this;\r\n        }\r\n        else {\r\n            _this = _super.call(this) || this;\r\n        }\r\n        _this.width = width;\r\n        _this.height = height;\r\n        _this.cells = [];\r\n        _this.initCells();\r\n        return _this;\r\n    }\r\n    /**\r\n     * @returns [[height]]\r\n     */\r\n    DOMCellController.prototype.getHeight = function () {\r\n        return this.height;\r\n    };\r\n    /**\r\n     * @returns [[width]]\r\n     */\r\n    DOMCellController.prototype.getWidth = function () {\r\n        return this.width;\r\n    };\r\n    /**\r\n     * Get index of cell in cells array based on column and row values.\r\n     *\r\n     * @param column\r\n     * @param row\r\n     * @returns index\r\n     */\r\n    DOMCellController.prototype.index = function (column, row) {\r\n        return column + row * this.width;\r\n    };\r\n    DOMCellController.prototype.setCellValue = function (value, indexOrColumn, row) {\r\n        var index;\r\n        if (row) {\r\n            index = this.index(indexOrColumn, row);\r\n        }\r\n        else {\r\n            index = indexOrColumn;\r\n        }\r\n        this.cells[index].innerHTML = value;\r\n    };\r\n    /**\r\n     * Initializes cells as empty span elements with line breaks.\r\n     */\r\n    DOMCellController.prototype.initCells = function () {\r\n        for (var i = 0; i < this.height; i++) {\r\n            for (var j = 0; j < this.width; j++) {\r\n                this.cells.push(document.createElement('span'));\r\n                this.display.appendChild(this.cells[this.cells.length - 1]);\r\n                this.cells[this.cells.length - 1].id = i + \"-\" + j;\r\n            }\r\n            this.display.appendChild(document.createTextNode('\\n'));\r\n        }\r\n    };\r\n    return DOMCellController;\r\n}(_DOMController__WEBPACK_IMPORTED_MODULE_0__[\"DOMController\"]));\r\n\r\n\n\n//# sourceURL=webpack://terminaltxt/./dom-controller/DOMCellController.ts?");

/***/ }),

/***/ "./dom-controller/DOMController.ts":
/*!*****************************************!*\
  !*** ./dom-controller/DOMController.ts ***!
  \*****************************************/
/*! exports provided: DOMController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DOMController\", function() { return DOMController; });\n/**\r\n * Keeps track of Terminal's DOM elements and is used for updating them.\r\n */\r\nvar DOMController = /** @class */ (function () {\r\n    /**\r\n     * @param container\r\n     */\r\n    function DOMController(container) {\r\n        if (container === void 0) { container = DOMController.defaultContainer(); }\r\n        this.container = container;\r\n        this.pre = document.createElement('pre');\r\n        this.code = document.createElement('code');\r\n        this.display = document.createElement('span');\r\n        this.idNumber = DOMController.getID();\r\n        this.container.appendChild(this.pre);\r\n        this.pre.appendChild(this.code);\r\n        this.code.appendChild(this.display);\r\n        this.setIDs();\r\n        this.setClasses();\r\n    }\r\n    /**\r\n     * Creates an empty container div and appends it to the body.\r\n     *\r\n     * @returns created container\r\n     */\r\n    DOMController.defaultContainer = function () {\r\n        var container = document.createElement('div');\r\n        document.body.appendChild(container);\r\n        return container;\r\n    };\r\n    /**\r\n     * Get an incremented id number for new TerminalDOM.\r\n     *\r\n     * @returns new idNumber\r\n     */\r\n    DOMController.getID = function () {\r\n        var id = DOMController.idCounter;\r\n        DOMController.idCounter++;\r\n        return id;\r\n    };\r\n    /**\r\n     * Clears text and children from inside display span.\r\n     */\r\n    DOMController.prototype.clear = function () {\r\n        this.display.innerHTML = '';\r\n    };\r\n    /**\r\n     * Adds HTML classes to DOM elements in TerminalDOM.\r\n     */\r\n    DOMController.prototype.setClasses = function () {\r\n        this.container.classList.add('termtxt-container');\r\n        this.pre.classList.add('termtxt-pre');\r\n        this.code.classList.add('termtxt-code');\r\n        this.display.classList.add('termtxt-display');\r\n    };\r\n    /**\r\n     * Uses idNumber property to set HTML id traits for each of the DOM elements.\r\n     */\r\n    DOMController.prototype.setIDs = function () {\r\n        var idString;\r\n        this.idNumber === 0 ? idString = '' : idString = '-' + this.idNumber.toString();\r\n        this.container.id = 'termtxt-container' + idString;\r\n        this.pre.id = 'termtxt-pre' + idString;\r\n        this.code.id = 'termtxt-code' + idString;\r\n        this.display.id = 'termtxt-display' + idString;\r\n    };\r\n    /**\r\n     * Keeps track of number of ids that have been created.\r\n     */\r\n    DOMController.idCounter = 0;\r\n    return DOMController;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack://terminaltxt/./dom-controller/DOMController.ts?");

/***/ }),

/***/ "./dom-controller/DOMLineController.ts":
/*!*********************************************!*\
  !*** ./dom-controller/DOMLineController.ts ***!
  \*********************************************/
/*! exports provided: DOMLineController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DOMLineController\", function() { return DOMLineController; });\n/* harmony import */ var _DOMController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMController */ \"./dom-controller/DOMController.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\n\r\n/**\r\n * Creates and has methods to update a Terminal DOM that contains lines.\r\n */\r\nvar DOMLineController = /** @class */ (function (_super) {\r\n    __extends(DOMLineController, _super);\r\n    /**\r\n     * @param maxLines defaults to -1\r\n     * @param container\r\n     */\r\n    function DOMLineController(maxLines, container) {\r\n        if (maxLines === void 0) { maxLines = -1; }\r\n        var _this = this;\r\n        if (container) {\r\n            _this = _super.call(this, container) || this;\r\n        }\r\n        else {\r\n            _this = _super.call(this) || this;\r\n        }\r\n        _this.maxLines = maxLines;\r\n        _this.lines = [];\r\n        _this.addLine();\r\n        _this.removeFirstChild(1);\r\n        return _this;\r\n    }\r\n    /**\r\n     * Adds a new line. If no text is specified it defaults to ''.\r\n     *\r\n     * @param lineText\r\n     */\r\n    DOMLineController.prototype.addLine = function (lineText) {\r\n        if (lineText === void 0) { lineText = ''; }\r\n        this.display.appendChild(document.createTextNode('\\n'));\r\n        this.lines.push(document.createElement('span'));\r\n        this.display.appendChild(this.lines[this.lines.length - 1]);\r\n        this.setCurrentLine(lineText);\r\n    };\r\n    /**\r\n     * Will append text to the current line.\r\n     *\r\n     * @param lineText\r\n     */\r\n    DOMLineController.prototype.appendCurrentLine = function (lineText) {\r\n        this.lines[this.lines.length - 1].innerHTML += lineText;\r\n        this.checkForOverflow();\r\n    };\r\n    /**\r\n     * Removes the first line from the DOM and [[lines]] array.\r\n     */\r\n    DOMLineController.prototype.removeFirstLine = function () {\r\n        this.removeFirstChild(2);\r\n        this.lines.shift();\r\n    };\r\n    /**\r\n     * Will override the any text of the current line with the text passed to this.\r\n     *\r\n     * @param lineText\r\n     */\r\n    DOMLineController.prototype.setCurrentLine = function (lineText) {\r\n        this.lines[this.lines.length - 1].innerHTML = lineText;\r\n        this.checkForOverflow();\r\n    };\r\n    /**\r\n     * Checks to see if changes will result in an overflow.\r\n     */\r\n    DOMLineController.prototype.checkForOverflow = function () {\r\n        if (this.maxLines >= 0) {\r\n            while (this.lines.length > this.maxLines) {\r\n                this.removeFirstLine();\r\n            }\r\n        }\r\n    };\r\n    /**\r\n     * Removes the first child of the [[display]] element.\r\n     * @param toRemove\r\n     */\r\n    DOMLineController.prototype.removeFirstChild = function (toRemove) {\r\n        for (var i = 0; i < toRemove; i++) {\r\n            this.display.removeChild(this.display.childNodes[0]);\r\n        }\r\n    };\r\n    return DOMLineController;\r\n}(_DOMController__WEBPACK_IMPORTED_MODULE_0__[\"DOMController\"]));\r\n\r\n\n\n//# sourceURL=webpack://terminaltxt/./dom-controller/DOMLineController.ts?");

/***/ }),

/***/ "./graphics-terminal/CellData.ts":
/*!***************************************!*\
  !*** ./graphics-terminal/CellData.ts ***!
  \***************************************/
/*! exports provided: CellData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CellData\", function() { return CellData; });\n/**\r\n * Used to keep track of the data behind a [[GraphicsTerminal]].\r\n */\r\nvar CellData = /** @class */ (function () {\r\n    /**\r\n     * @param width\r\n     * @param height\r\n     */\r\n    function CellData(width, height) {\r\n        /**\r\n         * Array of booleans to keep track of what data has been changed since last update.\r\n         */\r\n        this.changed = [];\r\n        /**\r\n         * Array of numbers that map to a characters in a [[CharacterSet]]\r\n         */\r\n        this.data = [];\r\n        this.width = width;\r\n        this.height = height;\r\n        this.initData();\r\n        this.initChanged();\r\n    }\r\n    /**\r\n     * Set changed to false based on index.\r\n     *\r\n     * @param index\r\n     */\r\n    CellData.prototype.doneChange = function (index) {\r\n        this.changed[index] = false;\r\n    };\r\n    /**\r\n     * Get the value of a single cell.\r\n     *\r\n     * @param index\r\n     */\r\n    CellData.prototype.getCell = function (index) {\r\n        return this.data[index];\r\n    };\r\n    /**\r\n     * @returns [[height]]\r\n     */\r\n    CellData.prototype.getHeight = function () {\r\n        return this.height;\r\n    };\r\n    /**\r\n     * @returns [[width]]\r\n     */\r\n    CellData.prototype.getWidth = function () {\r\n        return this.width;\r\n    };\r\n    /**\r\n     * See if single cell value has been changed.\r\n     *\r\n     * @param index\r\n     */\r\n    CellData.prototype.hasBeenChanged = function (index) {\r\n        return this.changed[index];\r\n    };\r\n    /**\r\n     * Get index of cell based on column and row values.\r\n     *\r\n     * @param column\r\n     * @param row\r\n     */\r\n    CellData.prototype.index = function (column, row) {\r\n        return column + row * this.width;\r\n    };\r\n    /**\r\n     * @returns number of cells in data\r\n     */\r\n    CellData.prototype.numberOfCells = function () {\r\n        return this.width * this.height;\r\n    };\r\n    /**\r\n     * Set the value of a single cell.\r\n     *\r\n     * @param value\r\n     * @param index\r\n     */\r\n    CellData.prototype.setCell = function (value, index) {\r\n        this.data[index] = value;\r\n        this.changed[index] = true;\r\n    };\r\n    /**\r\n     * Initializes changed with true.\r\n     */\r\n    CellData.prototype.initChanged = function () {\r\n        this.changed = [];\r\n        for (var i = 0; i < this.width * this.height; i++) {\r\n            this.changed.push(true);\r\n        }\r\n    };\r\n    /**\r\n     * Will create a new array for data based on width and height, full of 0s.\r\n     */\r\n    CellData.prototype.initData = function () {\r\n        this.data = [];\r\n        for (var i = 0; i < this.width * this.height; i++) {\r\n            this.data.push(0);\r\n        }\r\n    };\r\n    return CellData;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack://terminaltxt/./graphics-terminal/CellData.ts?");

/***/ }),

/***/ "./graphics-terminal/GraphicsTerminal.ts":
/*!***********************************************!*\
  !*** ./graphics-terminal/GraphicsTerminal.ts ***!
  \***********************************************/
/*! exports provided: GraphicsTerminal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GraphicsTerminal\", function() { return GraphicsTerminal; });\n/* harmony import */ var _characterset_CharacterSet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../characterset/CharacterSet */ \"./characterset/CharacterSet.ts\");\n/* harmony import */ var _dom_controller_DOMCellController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom-controller/DOMCellController */ \"./dom-controller/DOMCellController.ts\");\n/* harmony import */ var _CellData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CellData */ \"./graphics-terminal/CellData.ts\");\n\r\n\r\n\r\n/**\r\n * Graphical Terminal for text art rendering.\r\n */\r\nvar GraphicsTerminal = /** @class */ (function () {\r\n    /**\r\n     * @param config [[TerminalConfig]]\r\n     */\r\n    function GraphicsTerminal(config, characterSet) {\r\n        if (config === void 0) { config = {}; }\r\n        if (characterSet === void 0) { characterSet = new _characterset_CharacterSet__WEBPACK_IMPORTED_MODULE_0__[\"CharacterSet\"](); }\r\n        config.width ? this.width = config.width : this.width = 80;\r\n        config.height ? this.height = config.height : this.height = 25;\r\n        if (config.container) {\r\n            this.cellController = new _dom_controller_DOMCellController__WEBPACK_IMPORTED_MODULE_1__[\"DOMCellController\"](this.width, this.height, config.container);\r\n        }\r\n        else {\r\n            this.cellController = new _dom_controller_DOMCellController__WEBPACK_IMPORTED_MODULE_1__[\"DOMCellController\"](this.width, this.height);\r\n        }\r\n        this.cellData = new _CellData__WEBPACK_IMPORTED_MODULE_2__[\"CellData\"](this.width, this.height);\r\n        this.characterSet = characterSet;\r\n    }\r\n    /**\r\n     * @returns [[characterSet]]\r\n     */\r\n    GraphicsTerminal.prototype.getCharacterSet = function () {\r\n        return this.characterSet;\r\n    };\r\n    /**\r\n     * @returns [[height]]\r\n     */\r\n    GraphicsTerminal.prototype.getHeight = function () {\r\n        return this.height;\r\n    };\r\n    /**\r\n     * @returns [[width]]\r\n     */\r\n    GraphicsTerminal.prototype.getWidth = function () {\r\n        return this.width;\r\n    };\r\n    GraphicsTerminal.prototype.setCell = function (value, column, row) {\r\n        var setValue;\r\n        if (typeof value === 'string') {\r\n            setValue = this.characterSet.getIndex(value);\r\n        }\r\n        else {\r\n            if (value >= 0 && value < this.characterSet.set.length) {\r\n                setValue = value;\r\n            }\r\n            else {\r\n                setValue = -1;\r\n            }\r\n        }\r\n        this.cellData.setCell(setValue, this.cellData.index(column, row));\r\n    };\r\n    /**\r\n     * Will update dom graphics based on [[TerminalCellData]].\r\n     */\r\n    GraphicsTerminal.prototype.update = function () {\r\n        for (var i = 0; i < this.cellData.numberOfCells(); i++) {\r\n            if (this.cellData.hasBeenChanged(i)) {\r\n                this.cellController.setCellValue(this.characterSet.toString(this.cellData.getCell(i)), i);\r\n                this.cellData.doneChange(i);\r\n            }\r\n        }\r\n    };\r\n    return GraphicsTerminal;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack://terminaltxt/./graphics-terminal/GraphicsTerminal.ts?");

/***/ }),

/***/ "./graphics-terminal/index.ts":
/*!************************************!*\
  !*** ./graphics-terminal/index.ts ***!
  \************************************/
/*! exports provided: GraphicsTerminal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _GraphicsTerminal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GraphicsTerminal */ \"./graphics-terminal/GraphicsTerminal.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"GraphicsTerminal\", function() { return _GraphicsTerminal__WEBPACK_IMPORTED_MODULE_0__[\"GraphicsTerminal\"]; });\n\n\r\n\n\n//# sourceURL=webpack://terminaltxt/./graphics-terminal/index.ts?");

/***/ }),

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/*! exports provided: CharacterSet, InputTracker, KeyEventType, GraphicsTerminal, OutputTerminal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _characterset_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./characterset/index */ \"./characterset/index.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"CharacterSet\", function() { return _characterset_index__WEBPACK_IMPORTED_MODULE_0__[\"CharacterSet\"]; });\n\n/* harmony import */ var _input_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input/index */ \"./input/index.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"InputTracker\", function() { return _input_index__WEBPACK_IMPORTED_MODULE_1__[\"InputTracker\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"KeyEventType\", function() { return _input_index__WEBPACK_IMPORTED_MODULE_1__[\"KeyEventType\"]; });\n\n/* harmony import */ var _graphics_terminal_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./graphics-terminal/index */ \"./graphics-terminal/index.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"GraphicsTerminal\", function() { return _graphics_terminal_index__WEBPACK_IMPORTED_MODULE_2__[\"GraphicsTerminal\"]; });\n\n/* harmony import */ var _output_terminal_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./output-terminal/index */ \"./output-terminal/index.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"OutputTerminal\", function() { return _output_terminal_index__WEBPACK_IMPORTED_MODULE_3__[\"OutputTerminal\"]; });\n\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://terminaltxt/./index.ts?");

/***/ }),

/***/ "./input/InputTracker.ts":
/*!*******************************!*\
  !*** ./input/InputTracker.ts ***!
  \*******************************/
/*! exports provided: InputTracker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"InputTracker\", function() { return InputTracker; });\n/* harmony import */ var _KeyEventType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./KeyEventType */ \"./input/KeyEventType.ts\");\n\r\n/**\r\n * Tracks Keyboard Input from User and executes actions that have been added to [[actions]].\r\n */\r\nvar InputTracker = /** @class */ (function () {\r\n    /**\r\n     *\r\n     */\r\n    function InputTracker() {\r\n        /**\r\n         * List of [[KeyAction]] to execute if certain keys have ben pressed.\r\n         */\r\n        this.actions = [];\r\n        /**\r\n         * Will log keyboard presses to console to assist with designing.\r\n         */\r\n        this.logKeys = false;\r\n        this.handleKey = this.handleKey.bind(this);\r\n        document.addEventListener('keydown', this.handleKey);\r\n        document.addEventListener('keyup', this.handleKey);\r\n        document.addEventListener('keypress', this.handleKey);\r\n    }\r\n    /**\r\n     * Will add a [[KeyAction]] to [[actions]].\r\n     *\r\n     * @param action\r\n     */\r\n    InputTracker.prototype.addAction = function (action) {\r\n        this.actions.push(action);\r\n    };\r\n    /**\r\n     * Sets [[logKeys]].\r\n     *\r\n     * @param logKeys\r\n     */\r\n    InputTracker.prototype.setLogKeys = function (logKeys) {\r\n        this.logKeys = logKeys;\r\n    };\r\n    /**\r\n     * Connected to event listeners and will call [[actions]] if [[KeyAction]].keys show up in an event.\r\n     *\r\n     * @param event\r\n     */\r\n    InputTracker.prototype.handleKey = function (event) {\r\n        if (this.logKeys) {\r\n            console.log(\"InputTracker Key Log: '\" + event.key + \"', type: \" + event.type);\r\n        }\r\n        for (var i = 0; i < this.actions.length; i++) {\r\n            if (this.actions[i].keys.indexOf(event.key) !== -1) {\r\n                if (event.type === 'keydown' && this.actions[i].keyEventType === _KeyEventType__WEBPACK_IMPORTED_MODULE_0__[\"KeyEventType\"].KEYDOWN) {\r\n                    this.actions[i].action();\r\n                }\r\n                else if (event.type === 'keyup' && this.actions[i].keyEventType === _KeyEventType__WEBPACK_IMPORTED_MODULE_0__[\"KeyEventType\"].KEYUP) {\r\n                    this.actions[i].action();\r\n                }\r\n                else if (event.type === 'keypress' && this.actions[i].keyEventType === _KeyEventType__WEBPACK_IMPORTED_MODULE_0__[\"KeyEventType\"].KEYPRESS) {\r\n                    this.actions[i].action();\r\n                }\r\n            }\r\n        }\r\n    };\r\n    return InputTracker;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack://terminaltxt/./input/InputTracker.ts?");

/***/ }),

/***/ "./input/KeyEventType.ts":
/*!*******************************!*\
  !*** ./input/KeyEventType.ts ***!
  \*******************************/
/*! exports provided: KeyEventType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"KeyEventType\", function() { return KeyEventType; });\n/**\r\n * Enum of Key Event types outlined by javascript. More information can be found in the mozilla documentation: [keydown](https://developer.mozilla.org/en-US/docs/Web/API/Document/keydown_event), [keyup](https://developer.mozilla.org/en-US/docs/Web/API/Document/keyup_event), [keypress](https://developer.mozilla.org/en-US/docs/Web/Events/keypress).\r\n */\r\nvar KeyEventType;\r\n(function (KeyEventType) {\r\n    /**\r\n     * Corresponds to document.keydown event.\r\n     */\r\n    KeyEventType[KeyEventType[\"KEYDOWN\"] = 0] = \"KEYDOWN\";\r\n    /**\r\n     * Corresponds to document.keyup event.\r\n     */\r\n    KeyEventType[KeyEventType[\"KEYUP\"] = 1] = \"KEYUP\";\r\n    /**\r\n     * Corresponds to document.keypress event.\r\n     */\r\n    KeyEventType[KeyEventType[\"KEYPRESS\"] = 2] = \"KEYPRESS\";\r\n})(KeyEventType || (KeyEventType = {}));\r\n\n\n//# sourceURL=webpack://terminaltxt/./input/KeyEventType.ts?");

/***/ }),

/***/ "./input/index.ts":
/*!************************!*\
  !*** ./input/index.ts ***!
  \************************/
/*! exports provided: InputTracker, KeyEventType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _InputTracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InputTracker */ \"./input/InputTracker.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"InputTracker\", function() { return _InputTracker__WEBPACK_IMPORTED_MODULE_0__[\"InputTracker\"]; });\n\n/* harmony import */ var _KeyEventType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./KeyEventType */ \"./input/KeyEventType.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"KeyEventType\", function() { return _KeyEventType__WEBPACK_IMPORTED_MODULE_1__[\"KeyEventType\"]; });\n\n\r\n\r\n\n\n//# sourceURL=webpack://terminaltxt/./input/index.ts?");

/***/ }),

/***/ "./output-terminal/OutputTerminal.ts":
/*!*******************************************!*\
  !*** ./output-terminal/OutputTerminal.ts ***!
  \*******************************************/
/*! exports provided: OutputTerminal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"OutputTerminal\", function() { return OutputTerminal; });\n/* harmony import */ var _dom_controller_DOMLineController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom-controller/DOMLineController */ \"./dom-controller/DOMLineController.ts\");\n\r\n/**\r\n * Terminal for taking in Text input commands from user.\r\n *\r\n * Notes:\r\n * - If config.height is passed -1 no cropping will happen.\r\n */\r\nvar OutputTerminal = /** @class */ (function () {\r\n    /**\r\n     * @param config\r\n     * @param initialText The first line displayed, won't work if larger than width.\r\n     */\r\n    function OutputTerminal(config, initialText) {\r\n        if (config === void 0) { config = {}; }\r\n        if (initialText === void 0) { initialText = ''; }\r\n        config.width ? this.width = config.width : this.width = 80;\r\n        config.height ? this.height = config.height : this.height = 25;\r\n        if (config.container) {\r\n            this.lineController = new _dom_controller_DOMLineController__WEBPACK_IMPORTED_MODULE_0__[\"DOMLineController\"](this.height, config.container);\r\n        }\r\n        else {\r\n            this.lineController = new _dom_controller_DOMLineController__WEBPACK_IMPORTED_MODULE_0__[\"DOMLineController\"](this.height);\r\n        }\r\n        if (initialText.length > this.width) {\r\n            initialText = '';\r\n        }\r\n        this.lineController.setCurrentLine(initialText);\r\n    }\r\n    /**\r\n     * @returns [[height]]\r\n     */\r\n    OutputTerminal.prototype.getHeight = function () {\r\n        return this.height;\r\n    };\r\n    /**\r\n     * @returns [[width]]\r\n     */\r\n    OutputTerminal.prototype.getWidth = function () {\r\n        return this.width;\r\n    };\r\n    /**\r\n     * Adds a line break. Helpful when using [[write]].\r\n     */\r\n    OutputTerminal.prototype.newLine = function () {\r\n        this.lineController.addLine();\r\n    };\r\n    /**\r\n     * Writes to current line on output terminal if space. If there is not enough space on the current line it will roll over to the next.\r\n     *\r\n     * @param text\r\n     */\r\n    OutputTerminal.prototype.write = function (text) {\r\n        var lastLineLength = this.lineController.lines[this.lineController.lines.length - 1].innerHTML.length;\r\n        if (lastLineLength + text.length <= this.width) {\r\n            this.lineController.appendCurrentLine(text);\r\n        }\r\n        else if (lastLineLength === this.width) {\r\n            this.lineController.addLine(text);\r\n        }\r\n        else {\r\n            this.lineController.appendCurrentLine(text.substring(0, this.width - lastLineLength));\r\n            this.writeln(text.substring(this.width - lastLineLength, text.length));\r\n        }\r\n    };\r\n    /**\r\n     * Will write a line to the OutputTerminal.\r\n     *\r\n     * @param text\r\n     */\r\n    OutputTerminal.prototype.writeln = function (text) {\r\n        if (text.length <= this.width) {\r\n            this.lineController.addLine(text);\r\n        }\r\n        else {\r\n            var chunks = text.match(new RegExp('.{1,' + this.width + '}', 'g'));\r\n            if (chunks !== null) {\r\n                for (var i = 0; i < chunks.length; i++) {\r\n                    this.lineController.addLine(chunks[i]);\r\n                }\r\n            }\r\n        }\r\n    };\r\n    return OutputTerminal;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack://terminaltxt/./output-terminal/OutputTerminal.ts?");

/***/ }),

/***/ "./output-terminal/index.ts":
/*!**********************************!*\
  !*** ./output-terminal/index.ts ***!
  \**********************************/
/*! exports provided: OutputTerminal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _OutputTerminal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OutputTerminal */ \"./output-terminal/OutputTerminal.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"OutputTerminal\", function() { return _OutputTerminal__WEBPACK_IMPORTED_MODULE_0__[\"OutputTerminal\"]; });\n\n\r\n\n\n//# sourceURL=webpack://terminaltxt/./output-terminal/index.ts?");

/***/ })

/******/ });
});