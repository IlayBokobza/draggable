/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dragable.ts":
/*!*************************!*\
  !*** ./src/dragable.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Draggable\": () => (/* binding */ Draggable)\n/* harmony export */ });\nclass Draggable {\r\n    constructor(selector) {\r\n        this.onMouseMove = (e) => {\r\n            const x = e.clientX - this.element.clientWidth / 2;\r\n            const y = e.clientY - this.element.clientHeight / 2;\r\n            this.element.style.top = `${y}px`;\r\n            this.element.style.left = `${x}px`;\r\n            if (y <= document.body.clientHeight - this.element.clientHeight && y >= 0) {\r\n            }\r\n            if (x <= Draggable.screenWidth - this.element.clientWidth && x >= 0) {\r\n            }\r\n        };\r\n        const element = document.querySelector(selector);\r\n        if (!element) {\r\n            throw new Error(`Did not find any element with the of ${selector}.`);\r\n        }\r\n        this.element = element;\r\n        this.makeDragable();\r\n    }\r\n    makeDragable() {\r\n        this.element.style.cursor = 'grab';\r\n        this.element.style.position = 'absolute';\r\n        document.body.style.minHeight = '100vh';\r\n        this.element.addEventListener('mousedown', () => {\r\n            this.element.style.cursor = 'grabbing';\r\n            document.body.addEventListener('mousemove', this.onMouseMove);\r\n        });\r\n        this.element.addEventListener('mouseup', (e) => {\r\n            this.element.style.cursor = 'grab';\r\n            document.body.removeEventListener('mousemove', this.onMouseMove);\r\n        });\r\n    }\r\n    destroy() {\r\n        this.element.remove();\r\n    }\r\n}\r\nDraggable.screenWidth = document.body.clientWidth;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZHJhZ2FibGUudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPLE1BQU0sU0FBUztJQUtsQixZQUFZLFFBQWU7UUE2Qm5CLGdCQUFXLEdBQUcsQ0FBQyxDQUFZLEVBQUUsRUFBRTtZQUNuQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxHQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFDLENBQUM7WUFDOUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sR0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksR0FBQyxDQUFDO1lBQy9DLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO1lBQ2xDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO1lBRW5DLElBQUcsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUM7YUFDeEU7WUFFRCxJQUFHLENBQUMsSUFBSSxTQUFTLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUM7YUFDbEU7UUFDTCxDQUFDO1FBdkNHLE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFnQjtRQUUvRCxJQUFHLENBQUMsT0FBTyxFQUFDO1lBQ1IsTUFBTSxJQUFJLEtBQUssQ0FBQyx3Q0FBd0MsUUFBUSxHQUFHLENBQUM7U0FDdkU7UUFFRCxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU87UUFDdEIsSUFBSSxDQUFDLFlBQVksRUFBRTtJQUN2QixDQUFDO0lBRU8sWUFBWTtRQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTTtRQUNsQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsVUFBVTtRQUN4QyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsT0FBTztRQUV2QyxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBQyxHQUFHLEVBQUU7WUFDM0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLFVBQVU7WUFFdEMsUUFBUSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUNoRSxDQUFDLENBQUM7UUFFRixJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBQyxDQUFDLENBQUMsRUFBRSxFQUFFO1lBQzFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxNQUFNO1lBRWxDLFFBQVEsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsV0FBVyxFQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDbkUsQ0FBQyxDQUFDO0lBQ04sQ0FBQztJQWVELE9BQU87UUFDSCxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRTtJQUN6QixDQUFDOztBQTlDYyxxQkFBVyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyIsInNvdXJjZXMiOlsid2VicGFjazovL3dwdHMvLi9zcmMvZHJhZ2FibGUudHM/MzRmYiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgRHJhZ2dhYmxle1xyXG4gICAgZWxlbWVudDpIVE1MRWxlbWVudFxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIHNjcmVlbldpZHRoID0gZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aFxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHNlbGVjdG9yOnN0cmluZyl7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpIGFzIEhUTUxFbGVtZW50XHJcblxyXG4gICAgICAgIGlmKCFlbGVtZW50KXtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBEaWQgbm90IGZpbmQgYW55IGVsZW1lbnQgd2l0aCB0aGUgb2YgJHtzZWxlY3Rvcn0uYClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnRcclxuICAgICAgICB0aGlzLm1ha2VEcmFnYWJsZSgpXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBtYWtlRHJhZ2FibGUoKXtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuY3Vyc29yID0gJ2dyYWInXHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJ1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUubWluSGVpZ2h0ID0gJzEwMHZoJ1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmN1cnNvciA9ICdncmFiYmluZydcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJyx0aGlzLm9uTW91c2VNb3ZlKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLChlKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5jdXJzb3IgPSAnZ3JhYidcclxuXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJyx0aGlzLm9uTW91c2VNb3ZlKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbk1vdXNlTW92ZSA9IChlOk1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgICBjb25zdCB4ID0gZS5jbGllbnRYLXRoaXMuZWxlbWVudC5jbGllbnRXaWR0aC8yXHJcbiAgICAgICAgY29uc3QgeSA9IGUuY2xpZW50WS10aGlzLmVsZW1lbnQuY2xpZW50SGVpZ2h0LzJcclxuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUudG9wID0gYCR7eX1weGA7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmxlZnQgPSBgJHt4fXB4YDtcclxuXHJcbiAgICAgICAgaWYoeSA8PSBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodCAtIHRoaXMuZWxlbWVudC5jbGllbnRIZWlnaHQgJiYgeSA+PSAwKXtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHggPD0gRHJhZ2dhYmxlLnNjcmVlbldpZHRoIC0gdGhpcy5lbGVtZW50LmNsaWVudFdpZHRoICYmIHggPj0gMCl7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRlc3Ryb3koKXtcclxuICAgICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlKClcclxuICAgIH1cclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/dragable.ts\n");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dragable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dragable */ \"./src/dragable.ts\");\n\r\nconst e = new _dragable__WEBPACK_IMPORTED_MODULE_0__.Draggable('#draggable');\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBdUM7QUFFdkMsTUFBTSxDQUFDLEdBQUcsSUFBSSxnREFBUyxDQUFDLFlBQVksQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dwdHMvLi9zcmMvaW5kZXgudHM/ZmZiNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEcmFnZ2FibGUgfSBmcm9tIFwiLi9kcmFnYWJsZVwiO1xyXG5cclxuY29uc3QgZSA9IG5ldyBEcmFnZ2FibGUoJyNkcmFnZ2FibGUnKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.ts\n");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;