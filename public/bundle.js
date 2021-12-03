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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Draggable\": () => (/* binding */ Draggable)\n/* harmony export */ });\nclass Draggable {\r\n    constructor(selector, options) {\r\n        this.onMouseMove = (e) => {\r\n            const x = e.clientX - this.element.clientWidth / 2;\r\n            const y = e.clientY - this.element.clientHeight / 2;\r\n            const currrentY = parseInt(this.element.style.top.replace('px', ''));\r\n            const currentX = parseInt(this.element.style.left.replace('px', ''));\r\n            // console.log(y)\r\n            if (y <= document.body.clientHeight - this.element.clientHeight && y >= 0) {\r\n                this.element.style.top = `${y}px`;\r\n            }\r\n            if (x <= Draggable.screenWidth - this.element.clientWidth && x >= 0) {\r\n                this.element.style.left = `${x}px`;\r\n            }\r\n        };\r\n        this.addGravity = () => {\r\n            let t = 0;\r\n            const interval = setInterval(() => {\r\n                //calcutes change on the y axis\r\n                const currrentY = parseInt(this.element.style.top.replace('px', '')) || 0;\r\n                if (currrentY >= document.body.clientHeight - this.element.clientHeight) {\r\n                    clearInterval(interval);\r\n                    this.element.style.top = `${document.body.clientHeight - this.element.clientHeight}px`;\r\n                    t = 0;\r\n                    return;\r\n                }\r\n                this.element.style.top = `${(currrentY + 0.5 * Math.pow((0.1 * t), 2))}px`;\r\n                t++;\r\n            }, 1);\r\n        };\r\n        const element = document.querySelector(selector);\r\n        if (!element) {\r\n            throw new Error(`Did not find any element with the of ${selector}.`);\r\n        }\r\n        this.element = element;\r\n        this.options = options;\r\n        this.makeDragable();\r\n        if (options === null || options === void 0 ? void 0 : options.gravity) {\r\n            this.addGravity();\r\n        }\r\n    }\r\n    makeDragable() {\r\n        this.element.style.cursor = 'grab';\r\n        this.element.style.position = 'absolute';\r\n        document.body.style.minHeight = '100vh';\r\n        this.element.addEventListener('mousedown', () => {\r\n            this.element.style.cursor = 'grabbing';\r\n            document.body.addEventListener('mousemove', this.onMouseMove);\r\n        });\r\n        this.element.addEventListener('mouseup', (e) => {\r\n            var _a;\r\n            this.element.style.cursor = 'grab';\r\n            if ((_a = this.options) === null || _a === void 0 ? void 0 : _a.gravity) {\r\n                this.addGravity();\r\n            }\r\n            document.body.removeEventListener('mousemove', this.onMouseMove);\r\n        });\r\n    }\r\n    destroy() {\r\n        this.element.remove();\r\n    }\r\n}\r\nDraggable.screenWidth = document.body.clientWidth;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFJLENBQUMsVUFBVSxFQUFFO1NBQ3BCO0lBQ0wsQ0FBQztJQUVPLFlBQVk7UUFDaEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLE1BQU07UUFDbEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLFVBQVU7UUFDeEMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLE9BQU87UUFFdkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUMsR0FBRyxFQUFFO1lBQzNDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxVQUFVO1lBRXRDLFFBQVEsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDaEUsQ0FBQyxDQUFDO1FBRUYsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTs7WUFDMUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLE1BQU07WUFFbEMsSUFBRyxVQUFJLENBQUMsT0FBTywwQ0FBRSxPQUFPLEVBQUM7Z0JBQ3JCLElBQUksQ0FBQyxVQUFVLEVBQUU7YUFDcEI7WUFFRCxRQUFRLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsRUFBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQ25FLENBQUMsQ0FBQztJQUNOLENBQUM7SUFxQ0QsT0FBTztRQUNILElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFO0lBQ3pCLENBQUM7O0FBN0VjLHFCQUFXLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd3B0cy8uL3NyYy9kcmFnYWJsZS50cz8zNGZiIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB0eXBlIERyYWdnYWJsZU9wdGlvbnMgPSB7XHJcbiAgICBncmF2aXR5OiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRHJhZ2dhYmxle1xyXG4gICAgZWxlbWVudDpIVE1MRWxlbWVudFxyXG4gICAgb3B0aW9uczpEcmFnZ2FibGVPcHRpb25zIHwgdW5kZWZpbmVkO1xyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIHNjcmVlbldpZHRoID0gZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aFxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHNlbGVjdG9yOnN0cmluZyxvcHRpb25zPzpEcmFnZ2FibGVPcHRpb25zKXtcclxuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcikgYXMgSFRNTEVsZW1lbnRcclxuXHJcbiAgICAgICAgaWYoIWVsZW1lbnQpe1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYERpZCBub3QgZmluZCBhbnkgZWxlbWVudCB3aXRoIHRoZSBvZiAke3NlbGVjdG9yfS5gKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxyXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnNcclxuICAgICAgICB0aGlzLm1ha2VEcmFnYWJsZSgpXHJcblxyXG4gICAgICAgIGlmKG9wdGlvbnM/LmdyYXZpdHkpe1xyXG4gICAgICAgICAgICB0aGlzLmFkZEdyYXZpdHkoKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG1ha2VEcmFnYWJsZSgpe1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5jdXJzb3IgPSAnZ3JhYidcclxuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnXHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5taW5IZWlnaHQgPSAnMTAwdmgnXHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuY3Vyc29yID0gJ2dyYWJiaW5nJ1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLHRoaXMub25Nb3VzZU1vdmUpXHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsKGUpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmN1cnNvciA9ICdncmFiJ1xyXG5cclxuICAgICAgICAgICAgaWYodGhpcy5vcHRpb25zPy5ncmF2aXR5KXtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkR3Jhdml0eSgpXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJyx0aGlzLm9uTW91c2VNb3ZlKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbk1vdXNlTW92ZSA9IChlOk1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgICBjb25zdCB4ID0gZS5jbGllbnRYLXRoaXMuZWxlbWVudC5jbGllbnRXaWR0aC8yXHJcbiAgICAgICAgY29uc3QgeSA9IGUuY2xpZW50WS10aGlzLmVsZW1lbnQuY2xpZW50SGVpZ2h0LzJcclxuXHJcbiAgICAgICAgY29uc3QgY3VycnJlbnRZID0gcGFyc2VJbnQodGhpcy5lbGVtZW50LnN0eWxlLnRvcC5yZXBsYWNlKCdweCcsJycpKVxyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRYID0gcGFyc2VJbnQodGhpcy5lbGVtZW50LnN0eWxlLmxlZnQucmVwbGFjZSgncHgnLCcnKSlcclxuXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coeSlcclxuICAgICAgICBpZih5IDw9IGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0IC0gdGhpcy5lbGVtZW50LmNsaWVudEhlaWdodCAmJiB5ID49IDApe1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUudG9wID0gYCR7eX1weGA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih4IDw9IERyYWdnYWJsZS5zY3JlZW5XaWR0aCAtIHRoaXMuZWxlbWVudC5jbGllbnRXaWR0aCAmJiB4ID49IDApe1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUubGVmdCA9IGAke3h9cHhgO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFkZEdyYXZpdHkgPSAoKSA9PntcclxuICAgICAgICBsZXQgdCA9IDBcclxuICAgICAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgLy9jYWxjdXRlcyBjaGFuZ2Ugb24gdGhlIHkgYXhpc1xyXG4gICAgICAgICAgICBjb25zdCBjdXJycmVudFkgPSBwYXJzZUludCh0aGlzLmVsZW1lbnQuc3R5bGUudG9wLnJlcGxhY2UoJ3B4JywgJycpKSB8fCAwO1xyXG4gICAgICAgICAgICBpZihjdXJycmVudFkgPj0gZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQgLSB0aGlzLmVsZW1lbnQuY2xpZW50SGVpZ2h0KXtcclxuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUudG9wID0gYCR7ZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQgLSB0aGlzLmVsZW1lbnQuY2xpZW50SGVpZ2h0fXB4YFxyXG4gICAgICAgICAgICAgICAgdCA9IDBcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUudG9wID0gYCR7KGN1cnJyZW50WSArIDAuNSooMC4xKnQpKioyKX1weGBcclxuXHJcbiAgICAgICAgICAgIHQrK1xyXG4gICAgICAgIH0sMSlcclxuICAgIH1cclxuXHJcbiAgICBkZXN0cm95KCl7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZSgpXHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/dragable.ts\n");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dragable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dragable */ \"./src/dragable.ts\");\n\r\nconst e = new _dragable__WEBPACK_IMPORTED_MODULE_0__.Draggable('#draggable', {\r\n    gravity: true\r\n});\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBdUM7QUFFdkMsTUFBTSxDQUFDLEdBQUcsSUFBSSxnREFBUyxDQUFDLFlBQVksRUFBQztJQUNqQyxPQUFPLEVBQUMsSUFBSTtDQUNmLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93cHRzLy4vc3JjL2luZGV4LnRzP2ZmYjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRHJhZ2dhYmxlIH0gZnJvbSBcIi4vZHJhZ2FibGVcIjtcclxuXHJcbmNvbnN0IGUgPSBuZXcgRHJhZ2dhYmxlKCcjZHJhZ2dhYmxlJyx7XHJcbiAgICBncmF2aXR5OnRydWVcclxufSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.ts\n");

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