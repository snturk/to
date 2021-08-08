(function() {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 490:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _app; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
;// CONCATENATED MODULE: external "styled-jsx/style"
var style_namespaceObject = require("styled-jsx/style");;
var style_default = /*#__PURE__*/__webpack_require__.n(style_namespaceObject);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
;// CONCATENATED MODULE: external "next/router"
var router_namespaceObject = require("next/router");;
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: ./components/activeLink.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const ActiveLink = (_ref) => {
  let {
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children"]);

  const {
    asPath
  } = (0,router_namespaceObject.useRouter)();
  const child = external_react_.Children.only(children);
  const activeNav = "bg-gray-300 text-black px-3 py-2 rounded-md text-sm font-medium";
  const passiveNav = "text-gray-100 hover:bg-gray-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium";
  const className = asPath === props.href || asPath === props.as ? activeNav : passiveNav;
  return /*#__PURE__*/jsx_runtime_.jsx(next_link.default, _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/external_react_default().cloneElement(child, {
      className: className || null
    })
  }));
};

/* harmony default export */ var activeLink = (ActiveLink);
;// CONCATENATED MODULE: ./components/nav.js







const Nav = () => /*#__PURE__*/(0,jsx_runtime_.jsxs)("nav", {
  className: "bg-gray-700 h-20 flex flex-row content-start items-center",
  children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "max-w-7xl px-2 sm:px-6 lg:px-8",
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "relative flex items-center justify-between h-16",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex-1 flex items-center justify-center sm:items-stretch sm:justify-start",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "flex-shrink-0 mr-7 flex items-center",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "text-gray-100 text-2xl px-1",
            children: "Muratcan \u015Eent\xFCrk"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "hidden sm:block sm:ml-6",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "flex space-x-4",
            children: [/*#__PURE__*/jsx_runtime_.jsx(activeLink, {
              href: "/",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                children: "Overview"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(activeLink, {
              href: "/projects",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                children: "Projects"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(activeLink, {
              href: "/contact",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                children: "Contact"
              })
            })]
          })
        })]
      })
    })
  }), /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "sm:hidden",
    id: "mobile-menu",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "px-2 pt-2 pb-3 space-y-1",
      children: [/*#__PURE__*/jsx_runtime_.jsx(activeLink, {
        href: "/",
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          children: "Overview"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(activeLink, {
        href: "/cv",
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          children: "CV"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(activeLink, {
        href: "/projects",
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          children: "Projects"
        })
      })]
    })
  })]
});

/* harmony default export */ var nav = (Nav);
;// CONCATENATED MODULE: external "next/head"
var head_namespaceObject = require("next/head");;
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
;// CONCATENATED MODULE: ./pages/_app.js




function _app_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _app_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _app_ownKeys(Object(source), true).forEach(function (key) { _app_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _app_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







function MyApp({
  Component,
  pageProps
}) {
  const router = (0,router_namespaceObject.useRouter)();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    id: "mainContainer",
    className: "jsx-724656500" + " " + "min-h-screen m-0 bg-gray-900 font-roboto font-extralight",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        className: "jsx-724656500",
        children: "Muratcan \u015Eent\xFCrk"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
        className: "jsx-724656500"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: true,
        className: "jsx-724656500"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        href: "https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100;200;300;400&display=swap",
        rel: "stylesheet",
        className: "jsx-724656500"
      }), /*#__PURE__*/jsx_runtime_.jsx("script", {
        src: "https://www.gstatic.com/firebasejs/8.9.0/firebase-app.js",
        className: "jsx-724656500"
      }), /*#__PURE__*/jsx_runtime_.jsx("script", {
        src: "https://www.gstatic.com/firebasejs/8.9.0/firebase-database.js",
        className: "jsx-724656500"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx((style_default()), {
      id: "724656500",
      children: ["body,html{min-height:100%;}"]
    }), /*#__PURE__*/jsx_runtime_.jsx(nav, {}), /*#__PURE__*/jsx_runtime_.jsx("div", {
      id: "contentContainer",
      style: {
        minHeight: 'calc(100vh - 5rem)'
      },
      className: "jsx-724656500" + " " + "flex flex-row justify-center items-center w-full",
      children: /*#__PURE__*/jsx_runtime_.jsx(Component, _app_objectSpread(_app_objectSpread({}, pageProps), {}, {
        className: "jsx-724656500" + " " + (pageProps && pageProps.className != null && pageProps.className || "")
      }))
    })]
  });
}

/* harmony default export */ var _app = (MyApp);

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
var __webpack_exports__ = __webpack_require__.X(0, [664], function() { return __webpack_exec__(490); });
module.exports = __webpack_exports__;

})();