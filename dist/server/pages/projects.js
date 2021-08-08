(function() {
var exports = {};
exports.id = 327;
exports.ids = [327];
exports.modules = {

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__) {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ projects; },
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(664);
/* harmony import */ var _utils_firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(977);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_firebase__WEBPACK_IMPORTED_MODULE_2__]);
_utils_firebase__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];




function projects({
  resData
}) {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
    id: "projectsContainer",
    className: "flex flex-row flex-wrap justify-evenly items-center w-full h-auto",
    children: resData.map((val, index) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: "bg-gray-200 h-4/6 w-2/6 m-2 rounded text-gray-900 duration-150 hover:bg-gray-800 hover:text-gray-200",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
        className: "flex flex-col p-4 h-full w-full",
        href: val.link,
        target: "_blank",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: "text-lg",
          children: val.name
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: "text-sm",
          children: val.description
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: "text-sm mt-2 text-gray-500",
          children: val.tech
        })]
      })
    }, val.name))
  });
}
async function getStaticProps() {
  var resData = [];
  _utils_firebase__WEBPACK_IMPORTED_MODULE_2__/* .database.ref */ .F.ref('/projects/').on('value', snapshot => {
    if (snapshot.exists()) {
      var data = snapshot.val();
      var keys = Object.keys(data);

      for (var i = 0; i < keys.length; i++) {
        var id = keys[i];
        var obj = data[id];
        resData.push({
          id: id,
          name: obj.name,
          link: obj.link,
          imageLink: obj.imageLink,
          description: obj.description,
          tech: obj.tech
        });
      }
    }
  });
  return {
    props: {
      resData
    }
  };
}
});

/***/ }),

/***/ 977:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__) {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": function() { return /* binding */ database; }
/* harmony export */ });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(421);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(578);
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_database__WEBPACK_IMPORTED_MODULE_1__);


var firebaseConfig = {
  apiKey: "AIzaSyDvq-oO4ncDQy6DcvZcVu47xzcZO7cTWo0",
  authDomain: "personalprojects-5df90.firebaseapp.com",
  databaseURL: "https://personalprojects-5df90-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "personalprojects-5df90",
  storageBucket: "personalprojects-5df90.appspot.com",
  messagingSenderId: "403112615402",
  appId: "1:403112615402:web:6692a75685f75d735ee693",
  measurementId: "G-8VJ75FWQ3L"
};

if (!(firebase_app__WEBPACK_IMPORTED_MODULE_0___default().apps.length)) {
  firebase_app__WEBPACK_IMPORTED_MODULE_0___default().initializeApp(firebaseConfig);
}

var database = await firebase_app__WEBPACK_IMPORTED_MODULE_0___default().database();

__webpack_handle_async_dependencies__();
}, 1);

/***/ }),

/***/ 421:
/***/ (function(module) {

"use strict";
module.exports = require("firebase/app");;

/***/ }),

/***/ 578:
/***/ (function(module) {

"use strict";
module.exports = require("firebase/database");;

/***/ }),

/***/ 417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ 297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ }),

/***/ 453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [664], function() { return __webpack_exec__(458); });
module.exports = __webpack_exports__;

})();