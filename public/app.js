/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Modules/ajaxService.js":
/*!************************************!*\
  !*** ./src/Modules/ajaxService.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var ajaxService = function ajaxService(term) {
  var url = "http://www.omdbapi.com/?s=".concat(term, "&apikey=22174c4a&plot=full");
  return fetch(url).then(function (response) {
    return response.json();
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ajaxService);

/***/ }),

/***/ "./src/Modules/form.js":
/*!*****************************!*\
  !*** ./src/Modules/form.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var form = function form() {
  return "\n    <div class=\"form-group mb-2\">\n        <input type=\"text\" placeholder=\"Filmo pavadinimas\" class=\"form-control term\">\n    </div>\n    \n    <button type=\"submit\" class=\"btn btn-primary\">Ieskoti filmo</button>\n    \n    ";
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (form);

/***/ }),

/***/ "./src/Modules/getMovieData.js":
/*!*************************************!*\
  !*** ./src/Modules/getMovieData.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function getMovieData(movieTitle, movieYear) {
  var url = "http://www.omdbapi.com/?apikey=22174c4a&t=".concat(movieTitle, "&y=").concat(movieYear);
  return fetch(url).then(function (response) {
    return response.json();
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getMovieData);

/***/ }),

/***/ "./src/Modules/renderForm.js":
/*!***********************************!*\
  !*** ./src/Modules/renderForm.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form */ "./src/Modules/form.js");

var renderForm = function renderForm() {
  var formElement = document.createElement('form');
  formElement.className = 'form-inline';
  formElement.innerHTML = (0,_form__WEBPACK_IMPORTED_MODULE_0__["default"])();
  document.querySelector('.container .card-body').appendChild(formElement);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderForm);

/***/ }),

/***/ "./src/Modules/searchCode.js":
/*!***********************************!*\
  !*** ./src/Modules/searchCode.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ajaxService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ajaxService */ "./src/Modules/ajaxService.js");
/* harmony import */ var _getMovieData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getMovieData */ "./src/Modules/getMovieData.js");


var container = document.querySelector('.result');
var searchMovie = function searchMovie() {
  document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();
    var searchTerm = document.querySelector('.term').value;
    console.log(searchTerm);
    var searchResponse;
    (0,_ajaxService__WEBPACK_IMPORTED_MODULE_0__["default"])(searchTerm).then(function (result) {
      return searchResponse = result;
    })
    // .then(()=>console.log(searchResponse.Search))
    .then(function () {
      var hElement = document.createElement('h3');
      hElement.innerHTML = "Pasirinkite filma";
      container.appendChild(hElement);
      for (var i = 0; i < searchResponse.Search.length; i++) {
        var poster = document.createElement('img');
        poster.src = searchResponse.Search[i].Poster;
        var movieDiv = document.createElement('div');
        var movieH = document.createElement('h5');
        movieDiv.className = "movie".concat(i);
        container.appendChild(movieDiv);
        movieH.innerHTML = searchResponse.Search[i].Title + " " + searchResponse.Search[i].Year;
        movieDiv.appendChild(movieH);
      }
    }).then(function () {
      var _loop = function _loop(i) {
        var plotP = document.createElement('p');
        document.querySelector(".movie".concat(i)).addEventListener('click', function () {
          var year = searchResponse.Search[i].Year;
          var title = searchResponse.Search[i].Title;
          var movieData;
          var plot;
          (0,_getMovieData__WEBPACK_IMPORTED_MODULE_1__["default"])(title, year).then(function (result) {
            return movieData = result;
          }).then(function () {
            return plot = movieData.Plot;
          })
          //.then(()=>console.log(plot))
          .then(function () {
            plotP.innerHTML = "Movie plot: ".concat(plot);
            document.querySelector(".movie".concat(i)).appendChild(plotP);
          });
        });
      };
      for (var i = 0; i < searchResponse.Search.length; i++) {
        _loop(i);
      }
    });
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (searchMovie);

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Modules_renderForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modules/renderForm */ "./src/Modules/renderForm.js");
/* harmony import */ var _Modules_ajaxService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modules/ajaxService */ "./src/Modules/ajaxService.js");
/* harmony import */ var _Modules_searchCode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Modules/searchCode */ "./src/Modules/searchCode.js");



(0,_Modules_renderForm__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_Modules_searchCode__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_Modules_ajaxService__WEBPACK_IMPORTED_MODULE_1__["default"])('lord of the rings');

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/app": 0,
/******/ 			"css/style": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkdemo"] = self["webpackChunkdemo"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/style"], () => (__webpack_require__("./src/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/style"], () => (__webpack_require__("./src/scss/style.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;