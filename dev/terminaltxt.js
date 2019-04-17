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

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/*! exports provided: CharacterSet, CommandTerminal, GraphicsTerminal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _characterset_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./characterset/index */ \"./characterset/index.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"CharacterSet\", function() { return _characterset_index__WEBPACK_IMPORTED_MODULE_0__[\"CharacterSet\"]; });\n\n/* harmony import */ var _terminal_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./terminal/index */ \"./terminal/index.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"CommandTerminal\", function() { return _terminal_index__WEBPACK_IMPORTED_MODULE_1__[\"CommandTerminal\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"GraphicsTerminal\", function() { return _terminal_index__WEBPACK_IMPORTED_MODULE_1__[\"GraphicsTerminal\"]; });\n\n\r\n\r\n\n\n//# sourceURL=webpack://terminaltxt/./index.ts?");

/***/ }),

/***/ "./terminal/CommandTerminal.ts":
/*!*************************************!*\
  !*** ./terminal/CommandTerminal.ts ***!
  \*************************************/
/*! exports provided: CommandTerminal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CommandTerminal\", function() { return CommandTerminal; });\n/* harmony import */ var _Terminal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Terminal */ \"./terminal/Terminal.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\n\r\n/**\r\n * Terminal for taking in Text input commands from user.\r\n */ // TODO\r\nvar CommandTerminal = /** @class */ (function (_super) {\r\n    __extends(CommandTerminal, _super);\r\n    function CommandTerminal() {\r\n        return _super !== null && _super.apply(this, arguments) || this;\r\n    }\r\n    return CommandTerminal;\r\n}(_Terminal__WEBPACK_IMPORTED_MODULE_0__[\"Terminal\"]));\r\n\r\n\n\n//# sourceURL=webpack://terminaltxt/./terminal/CommandTerminal.ts?");

/***/ }),

/***/ "./terminal/GraphicsTerminal.ts":
/*!**************************************!*\
  !*** ./terminal/GraphicsTerminal.ts ***!
  \**************************************/
/*! exports provided: GraphicsTerminal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GraphicsTerminal\", function() { return GraphicsTerminal; });\n/* harmony import */ var _characterset_CharacterSet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../characterset/CharacterSet */ \"./characterset/CharacterSet.ts\");\n/* harmony import */ var _Terminal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Terminal */ \"./terminal/Terminal.ts\");\n/* harmony import */ var _TerminalCellData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TerminalCellData */ \"./terminal/TerminalCellData.ts\");\n/* harmony import */ var _TerminalCellDOM__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TerminalCellDOM */ \"./terminal/TerminalCellDOM.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\n\r\n\r\n\r\n\r\n/**\r\n * Graphical Terminal for text art rendering.\r\n */\r\nvar GraphicsTerminal = /** @class */ (function (_super) {\r\n    __extends(GraphicsTerminal, _super);\r\n    /**\r\n     * @param config [[TerminalConfig]]\r\n     */\r\n    function GraphicsTerminal(config, characterSet) {\r\n        if (config === void 0) { config = {}; }\r\n        if (characterSet === void 0) { characterSet = new _characterset_CharacterSet__WEBPACK_IMPORTED_MODULE_0__[\"CharacterSet\"](); }\r\n        var _this = this;\r\n        if (!config.graphics) {\r\n            config.graphics = {};\r\n        }\r\n        if (!config.graphics.width) {\r\n            config.graphics.width = 80;\r\n        }\r\n        if (!config.graphics.height) {\r\n            config.graphics.height = 25;\r\n        }\r\n        if (config.container) {\r\n            _this = _super.call(this, new _TerminalCellDOM__WEBPACK_IMPORTED_MODULE_3__[\"TerminalCellDOM\"](config.graphics.width, config.graphics.height, config.container), characterSet) || this;\r\n        }\r\n        else {\r\n            _this = _super.call(this, new _TerminalCellDOM__WEBPACK_IMPORTED_MODULE_3__[\"TerminalCellDOM\"](config.graphics.width, config.graphics.height), characterSet) || this;\r\n        }\r\n        _this.width = config.graphics.width;\r\n        _this.height = config.graphics.height;\r\n        _this.cellData = new _TerminalCellData__WEBPACK_IMPORTED_MODULE_2__[\"TerminalCellData\"](config.graphics.width, config.graphics.height);\r\n        return _this;\r\n    }\r\n    /**\r\n     * @returns [[height]]\r\n     */\r\n    GraphicsTerminal.prototype.getHeight = function () {\r\n        return this.height;\r\n    };\r\n    /**\r\n     * @returns [[width]]\r\n     */\r\n    GraphicsTerminal.prototype.getWidth = function () {\r\n        return this.width;\r\n    };\r\n    GraphicsTerminal.prototype.setCell = function (value, column, row) {\r\n        var setValue;\r\n        if (typeof value === 'string') {\r\n            setValue = this.characterSet.getIndex(value);\r\n        }\r\n        else {\r\n            if (value >= 0 && value < this.characterSet.set.length) {\r\n                setValue = value;\r\n            }\r\n            else {\r\n                setValue = -1;\r\n            }\r\n        }\r\n        this.cellData.setCell(setValue, this.cellData.index(column, row));\r\n    };\r\n    /**\r\n     * Will update dom graphics based on [[TerminalCellData]].\r\n     */\r\n    GraphicsTerminal.prototype.update = function () {\r\n        for (var i = 0; i < this.cellData.numberOfCells(); i++) {\r\n            if (this.cellData.hasBeenChanged(i)) {\r\n                this.domController.setCellValue(this.characterSet.toString(this.cellData.getCell(i)), i);\r\n                this.cellData.doneChange(i);\r\n            }\r\n        }\r\n    };\r\n    return GraphicsTerminal;\r\n}(_Terminal__WEBPACK_IMPORTED_MODULE_1__[\"Terminal\"]));\r\n\r\n\n\n//# sourceURL=webpack://terminaltxt/./terminal/GraphicsTerminal.ts?");

/***/ }),

/***/ "./terminal/Terminal.ts":
/*!******************************!*\
  !*** ./terminal/Terminal.ts ***!
  \******************************/
/*! exports provided: Terminal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Terminal\", function() { return Terminal; });\n/**\r\n * Contains framework between the CommandTerminal and GraphicsTerminal.\r\n */\r\nvar Terminal = /** @class */ (function () {\r\n    function Terminal(domController, characterSet) {\r\n        this.domController = domController;\r\n        this.characterSet = characterSet;\r\n    }\r\n    /**\r\n     * @returns [[characterSet]]\r\n     */\r\n    Terminal.prototype.getCharacterSet = function () {\r\n        return this.characterSet;\r\n    };\r\n    return Terminal;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack://terminaltxt/./terminal/Terminal.ts?");

/***/ }),

/***/ "./terminal/TerminalCellDOM.ts":
/*!*************************************!*\
  !*** ./terminal/TerminalCellDOM.ts ***!
  \*************************************/
/*! exports provided: TerminalCellDOM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TerminalCellDOM\", function() { return TerminalCellDOM; });\n/* harmony import */ var _TerminalDOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TerminalDOM */ \"./terminal/TerminalDOM.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\n\r\nvar TerminalCellDOM = /** @class */ (function (_super) {\r\n    __extends(TerminalCellDOM, _super);\r\n    /**\r\n     * @param width\r\n     * @param height\r\n     * @param container\r\n     */\r\n    function TerminalCellDOM(width, height, container) {\r\n        var _this = this;\r\n        if (container) {\r\n            _this = _super.call(this, container) || this;\r\n        }\r\n        else {\r\n            _this = _super.call(this) || this;\r\n        }\r\n        _this.width = width;\r\n        _this.height = height;\r\n        _this.cells = [];\r\n        _this.initCells();\r\n        return _this;\r\n    }\r\n    /**\r\n     * Get index of cell in cells array based on column and row values.\r\n     *\r\n     * @param column\r\n     * @param row\r\n     * @returns index\r\n     */\r\n    TerminalCellDOM.prototype.index = function (column, row) {\r\n        return column + row * this.width;\r\n    };\r\n    TerminalCellDOM.prototype.setCellValue = function (value, indexOrColumn, row) {\r\n        var index;\r\n        if (row) {\r\n            index = this.index(indexOrColumn, row);\r\n        }\r\n        else {\r\n            index = indexOrColumn;\r\n        }\r\n        this.cells[index].innerHTML = value;\r\n    };\r\n    /**\r\n     * Initializes cells as empty span elements with line breaks.\r\n     */\r\n    TerminalCellDOM.prototype.initCells = function () {\r\n        for (var i = 0; i < this.height; i++) {\r\n            for (var j = 0; j < this.width; j++) {\r\n                this.cells.push(document.createElement('span'));\r\n                this.display.appendChild(this.cells[this.cells.length - 1]);\r\n                this.cells[this.cells.length - 1].id = i + \"-\" + j;\r\n            }\r\n            this.display.appendChild(document.createTextNode('\\n'));\r\n        }\r\n    };\r\n    return TerminalCellDOM;\r\n}(_TerminalDOM__WEBPACK_IMPORTED_MODULE_0__[\"TerminalDOM\"]));\r\n\r\n\n\n//# sourceURL=webpack://terminaltxt/./terminal/TerminalCellDOM.ts?");

/***/ }),

/***/ "./terminal/TerminalCellData.ts":
/*!**************************************!*\
  !*** ./terminal/TerminalCellData.ts ***!
  \**************************************/
/*! exports provided: TerminalCellData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TerminalCellData\", function() { return TerminalCellData; });\n/**\r\n * Used to keep track of the data behind a GraphicsTerminal\r\n */\r\nvar TerminalCellData = /** @class */ (function () {\r\n    /**\r\n     * @param width\r\n     * @param height\r\n     */\r\n    function TerminalCellData(width, height) {\r\n        /**\r\n         * Array of booleans to keep track of what data has been changed since last update.\r\n         */\r\n        this.changed = [];\r\n        /**\r\n         * Array of numbers that map to a characters in a [[CharacterSet]]\r\n         */\r\n        this.data = [];\r\n        this.width = width;\r\n        this.height = height;\r\n        this.initData();\r\n        this.initChanged();\r\n    }\r\n    /**\r\n     * Set changed to false based on index.\r\n     *\r\n     * @param index\r\n     */\r\n    TerminalCellData.prototype.doneChange = function (index) {\r\n        this.changed[index] = false;\r\n    };\r\n    /**\r\n     * Get the value of a single cell.\r\n     *\r\n     * @param index\r\n     */\r\n    TerminalCellData.prototype.getCell = function (index) {\r\n        return this.data[index];\r\n    };\r\n    /**\r\n     * @returns [[height]]\r\n     */\r\n    TerminalCellData.prototype.getHeight = function () {\r\n        return this.height;\r\n    };\r\n    /**\r\n     * @returns [[width]]\r\n     */\r\n    TerminalCellData.prototype.getWidth = function () {\r\n        return this.width;\r\n    };\r\n    /**\r\n     * See if single cell value has been changed.\r\n     *\r\n     * @param index\r\n     */\r\n    TerminalCellData.prototype.hasBeenChanged = function (index) {\r\n        return this.changed[index];\r\n    };\r\n    /**\r\n     * Get index of cell based on column and row values.\r\n     *\r\n     * @param column\r\n     * @param row\r\n     */\r\n    TerminalCellData.prototype.index = function (column, row) {\r\n        return column + row * this.width;\r\n    };\r\n    /**\r\n     * @returns number of cells in data\r\n     */\r\n    TerminalCellData.prototype.numberOfCells = function () {\r\n        return this.width * this.height;\r\n    };\r\n    /**\r\n     * Set the value of a single cell.\r\n     *\r\n     * @param value\r\n     * @param index\r\n     */\r\n    TerminalCellData.prototype.setCell = function (value, index) {\r\n        this.data[index] = value;\r\n        this.changed[index] = true;\r\n    };\r\n    /**\r\n     * Initializes changed with true.\r\n     */\r\n    TerminalCellData.prototype.initChanged = function () {\r\n        this.changed = [];\r\n        for (var i = 0; i < this.width * this.height; i++) {\r\n            this.changed.push(true);\r\n        }\r\n    };\r\n    /**\r\n     * Will create a new array for data based on width and height, full of 0s.\r\n     */\r\n    TerminalCellData.prototype.initData = function () {\r\n        this.data = [];\r\n        for (var i = 0; i < this.width * this.height; i++) {\r\n            this.data.push(0);\r\n        }\r\n    };\r\n    return TerminalCellData;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack://terminaltxt/./terminal/TerminalCellData.ts?");

/***/ }),

/***/ "./terminal/TerminalDOM.ts":
/*!*********************************!*\
  !*** ./terminal/TerminalDOM.ts ***!
  \*********************************/
/*! exports provided: TerminalDOM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TerminalDOM\", function() { return TerminalDOM; });\n/**\r\n * Keeps track of Terminal's DOM elements and is used for updating them.\r\n */\r\nvar TerminalDOM = /** @class */ (function () {\r\n    /**\r\n     * @param container\r\n     */\r\n    function TerminalDOM(container) {\r\n        if (container === void 0) { container = TerminalDOM.defaultContainer(); }\r\n        this.container = container;\r\n        this.pre = document.createElement('pre');\r\n        this.code = document.createElement('code');\r\n        this.display = document.createElement('span');\r\n        this.idNumber = TerminalDOM.getID();\r\n        this.container.appendChild(this.pre);\r\n        this.pre.appendChild(this.code);\r\n        this.code.appendChild(this.display);\r\n        this.setIDs();\r\n        this.setClasses();\r\n    }\r\n    /**\r\n     * Creates an empty container div and appends it to the body.\r\n     *\r\n     * @returns created container\r\n     */\r\n    TerminalDOM.defaultContainer = function () {\r\n        var container = document.createElement('div');\r\n        document.body.appendChild(container);\r\n        return container;\r\n    };\r\n    /**\r\n     * Get an incremented id number for new TerminalDOM.\r\n     *\r\n     * @returns new idNumber\r\n     */\r\n    TerminalDOM.getID = function () {\r\n        var id = TerminalDOM.idCounter;\r\n        TerminalDOM.idCounter++;\r\n        return id;\r\n    };\r\n    /**\r\n     * Clears text and children from inside display span.\r\n     */\r\n    TerminalDOM.prototype.clear = function () {\r\n        this.display.innerHTML = '';\r\n    };\r\n    /**\r\n     * Adds HTML classes to DOM elements in TerminalDOM.\r\n     */\r\n    TerminalDOM.prototype.setClasses = function () {\r\n        this.container.classList.add('termtxt-container');\r\n        this.pre.classList.add('termtxt-pre');\r\n        this.code.classList.add('termtxt-code');\r\n        this.display.classList.add('termtxt-display');\r\n    };\r\n    /**\r\n     * Uses idNumber property to set HTML id traits for each of the DOM elements.\r\n     */\r\n    TerminalDOM.prototype.setIDs = function () {\r\n        var idString;\r\n        this.idNumber === 0 ? idString = '' : idString = '-' + this.idNumber.toString();\r\n        this.container.id = 'termtxt-container' + idString;\r\n        this.pre.id = 'termtxt-pre' + idString;\r\n        this.code.id = 'termtxt-code' + idString;\r\n        this.display.id = 'termtxt-display' + idString;\r\n    };\r\n    /**\r\n     * Keeps track of number of ids that have been created.\r\n     */\r\n    TerminalDOM.idCounter = 0;\r\n    return TerminalDOM;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack://terminaltxt/./terminal/TerminalDOM.ts?");

/***/ }),

/***/ "./terminal/index.ts":
/*!***************************!*\
  !*** ./terminal/index.ts ***!
  \***************************/
/*! exports provided: CommandTerminal, GraphicsTerminal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _CommandTerminal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CommandTerminal */ \"./terminal/CommandTerminal.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"CommandTerminal\", function() { return _CommandTerminal__WEBPACK_IMPORTED_MODULE_0__[\"CommandTerminal\"]; });\n\n/* harmony import */ var _GraphicsTerminal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GraphicsTerminal */ \"./terminal/GraphicsTerminal.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"GraphicsTerminal\", function() { return _GraphicsTerminal__WEBPACK_IMPORTED_MODULE_1__[\"GraphicsTerminal\"]; });\n\n\r\n\r\n\n\n//# sourceURL=webpack://terminaltxt/./terminal/index.ts?");

/***/ })

/******/ });
});