(self["webpackChunktask_2"] = self["webpackChunktask_2"] || []).push([["body"],{

/***/ "./modules/body/body.js":
/*!******************************!*\
  !*** ./modules/body/body.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _body_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./body.css */ "./modules/body/body.css");
/* harmony import */ var _body_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_body_css__WEBPACK_IMPORTED_MODULE_0__);

const $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
const _ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");


$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append('<p id="count"></p>');

function updateCounter() {
  let clicks = $('#count').html() || 0;
  $('button').on('click', () => {
    clicks++;
    $('#count').html(`${clicks} clicks on the button`);
  });
}

_.debounce(updateCounter(), 500);


/***/ }),

/***/ "./modules/body/body.css":
/*!*******************************!*\
  !*** ./modules/body/body.css ***!
  \*******************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/css-loader/dist/cjs.js):\nCssSyntaxError\n\n(2:7) /home/med/alx/alx-react/0x00-Webpack/task_3/modules/body/body.css Unknown word\n\n \u001b[90m 1 | \u001b[39m\n\u001b[1m\u001b[31m>\u001b[39m\u001b[22m\u001b[90m 2 | \u001b[39m      import API from \u001b[32m\"!../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\"\u001b[39m\u001b[33m;\u001b[39m\n \u001b[90m   | \u001b[39m      \u001b[1m\u001b[31m^\u001b[39m\u001b[22m\n \u001b[90m 3 | \u001b[39m      import domAPI from \u001b[32m\"!../../node_modules/style-loader/dist/runtime/styleDomAPI.js\"\u001b[39m\u001b[33m;\u001b[39m\n \u001b[90m 4 | \u001b[39m      import insertFn from \u001b[32m\"!../../node_modules/style-loader/dist/runtime/insertBySelector.js\"\u001b[39m\u001b[33m;\u001b[39m\n");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_lodash_lodash_js"], () => (__webpack_exec__("./modules/body/body.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9keS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQWE7QUFDYixVQUFVLG1CQUFPLENBQUMsb0RBQVE7QUFDMUIsVUFBVSxtQkFBTyxDQUFDLCtDQUFRO0FBQ047O0FBRXBCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixRQUFRO0FBQ2hDLEdBQUc7QUFDSDs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Rhc2tfMi8uL21vZHVsZXMvYm9keS9ib2R5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcbmNvbnN0ICQgPSByZXF1aXJlKCdqcXVlcnknKTtcbmNvbnN0IF8gPSByZXF1aXJlKCdsb2Rhc2gnKTtcbmltcG9ydCAnLi9ib2R5LmNzcyc7XG5cbiQoJ2JvZHknKS5hcHBlbmQoJzxwPkRhc2hib2FyZCBkYXRhIGZvciB0aGUgc3R1ZGVudHM8L3A+Jyk7XG4kKCdib2R5JykuYXBwZW5kKCc8YnV0dG9uPkNsaWNrIGhlcmUgdG8gZ2V0IHN0YXJ0ZWQ8L2J1dHRvbj4nKTtcbiQoJ2JvZHknKS5hcHBlbmQoJzxwIGlkPVwiY291bnRcIj48L3A+Jyk7XG5cbmZ1bmN0aW9uIHVwZGF0ZUNvdW50ZXIoKSB7XG4gIGxldCBjbGlja3MgPSAkKCcjY291bnQnKS5odG1sKCkgfHwgMDtcbiAgJCgnYnV0dG9uJykub24oJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNsaWNrcysrO1xuICAgICQoJyNjb3VudCcpLmh0bWwoYCR7Y2xpY2tzfSBjbGlja3Mgb24gdGhlIGJ1dHRvbmApO1xuICB9KTtcbn1cblxuXy5kZWJvdW5jZSh1cGRhdGVDb3VudGVyKCksIDUwMCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=