/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/libs/swiper.js":
/*!*******************************!*\
  !*** ./src/js/libs/swiper.js ***!
  \*******************************/
/***/ (function() {

eval("const swiper = new Swiper('.swiper',{\r\n  loop: true,\r\n  slidesPerView: 1,\r\n\r\n  navigation: {\r\n    nextEl: '.swiper-next',\r\n    prevEl: '.swiper-prev',\r\n  },\r\n\r\n  breakpoints: {\r\n    768: {\r\n      slidesPerView: 2,\r\n    },\r\n\r\n    1200: {\r\n      slidesPerView: 3,\r\n      width: 1140\r\n    },\r\n  }\r\n});\n\n//# sourceURL=webpack://gulp-starter/./src/js/libs/swiper.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _module_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/menu */ \"./src/js/module/menu.js\");\n/* harmony import */ var _module_menu__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_module_menu__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _libs_swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./libs/swiper */ \"./src/js/libs/swiper.js\");\n/* harmony import */ var _libs_swiper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_libs_swiper__WEBPACK_IMPORTED_MODULE_1__);\n// Модули\r\n\r\n\r\n\r\n\r\n// Библиотеки\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://gulp-starter/./src/js/main.js?");

/***/ }),

/***/ "./src/js/module/menu.js":
/*!*******************************!*\
  !*** ./src/js/module/menu.js ***!
  \*******************************/
/***/ (function() {

eval("const menu = document.querySelector('.menu');\r\nconst close = document.querySelector('.menu__close');\r\nconst gamb = document.querySelector('.gamb');\r\n\r\nconst ACTIVE__CLASS = 'header__menu_active'\r\n\r\ngamb && gamb.addEventListener('click', () => {\r\n  menu.classList.add(ACTIVE__CLASS);\r\n});\r\n\r\nclose && close.addEventListener('click', () => {\r\n  menu.classList.remove(ACTIVE__CLASS);\r\n})\n\n//# sourceURL=webpack://gulp-starter/./src/js/module/menu.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;