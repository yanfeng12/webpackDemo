/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/font-awesome/css/font-awesome.css":
/*!********************************************************!*\
  !*** ./node_modules/font-awesome/css/font-awesome.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./node_modules/font-awesome/css/font-awesome.css?");

/***/ }),

/***/ "./src/assets/css/app.css":
/*!********************************!*\
  !*** ./src/assets/css/app.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/assets/css/app.css?");

/***/ }),

/***/ "./src/assets/img/215.jpg":
/*!********************************!*\
  !*** ./src/assets/img/215.jpg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/215.e3dbee74jpg\";\n\n//# sourceURL=webpack:///./src/assets/img/215.jpg?");

/***/ }),

/***/ "./src/assets/js/index.js":
/*!********************************!*\
  !*** ./src/assets/js/index.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _module = __webpack_require__(/*! ./module1 */ \"./src/assets/js/module1.js\");\n\nvar _module2 = _interopRequireDefault(_module);\n\nvar _module3 = __webpack_require__(/*! ./module2 */ \"./src/assets/js/module2.js\");\n\nvar _module4 = _interopRequireDefault(_module3);\n\nvar _module5 = __webpack_require__(/*! ./module3 */ \"./src/assets/js/module3.js\");\n\nvar _module6 = _interopRequireDefault(_module5);\n\n__webpack_require__(/*! ../css/app.css */ \"./src/assets/css/app.css\");\n\nvar _ = __webpack_require__(/*! ../img/215.jpg */ \"./src/assets/img/215.jpg\");\n\nvar _2 = _interopRequireDefault(_);\n\n__webpack_require__(/*! font-awesome/css/font-awesome.css */ \"./node_modules/font-awesome/css/font-awesome.css\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n(0, _module2.default)();\n(0, _module4.default)();\n(0, _module6.default)();\n//测试webpack-dev-server服务器\n//document.write(\"hello world!!!!!\")\n\n\n//测试CSS是否可以被引用,使用import\n//import \"./index.css\"\n\n\n//用来测试图片是否可以引入\n\n\n//可以直接引入图片\n\nconsole.log(_2.default);\n\n//测试是否可以使用字体\n\n\n//测试Babel\n(function () {\n  return console.log(\"hello world\");\n});\n\nvar demo = function demo() {\n  _classCallCheck(this, demo);\n};\n\n//# sourceURL=webpack:///./src/assets/js/index.js?");

/***/ }),

/***/ "./src/assets/js/module1.js":
/*!**********************************!*\
  !*** ./src/assets/js/module1.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = m1;\nfunction m1() {\n  console.log(\"hello m1!!!\");\n}\n\n//# sourceURL=webpack:///./src/assets/js/module1.js?");

/***/ }),

/***/ "./src/assets/js/module2.js":
/*!**********************************!*\
  !*** ./src/assets/js/module2.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = m2;\nfunction m2() {\n  console.log(\"hello m2!!!\");\n}\n\n//# sourceURL=webpack:///./src/assets/js/module2.js?");

/***/ }),

/***/ "./src/assets/js/module3.js":
/*!**********************************!*\
  !*** ./src/assets/js/module3.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = m3;\nfunction m3() {\n  console.log(\"hello m3!!!\");\n}\n\n//# sourceURL=webpack:///./src/assets/js/module3.js?");

/***/ })

/******/ });