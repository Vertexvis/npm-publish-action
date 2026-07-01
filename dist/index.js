/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 4064:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getEnvVar = getEnvVar;
function getEnvVar(name, required) {
  var value = process.env[name];
  if (required && value == null) {
    throw new Error("Environment variable '".concat(name, "' is not defined"));
  }
  return value;
}

/***/ }),

/***/ 38:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.configureExec = configureExec;
exports.execResultAsString = exports.exec = void 0;
var actionsExec = _interopRequireWildcard(__nccwpck_require__(5236));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function configureExec(exec) {
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(commandLine, args) {
      var options,
        result,
        _args = arguments;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            options = _args.length > 2 && _args[2] !== undefined ? _args[2] : {};
            result = "";
            _context.n = 1;
            return exec(commandLine, args, _objectSpread(_objectSpread({}, options), {}, {
              listeners: {
                stdout: function stdout(data) {
                  result = data.toString();
                }
              }
            }));
          case 1:
            return _context.a(2, result);
        }
      }, _callee);
    }));
    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();
}
var exec = exports.exec = actionsExec.exec;
var execResultAsString = exports.execResultAsString = configureExec(actionsExec.exec);

/***/ }),

/***/ 8624:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.createTagAndRef = createTagAndRef;
exports.tagExists = tagExists;
var _http = __nccwpck_require__(9523);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function tagExists(_x, _x2, _x3) {
  return _tagExists.apply(this, arguments);
}
function _tagExists() {
  _tagExists = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(github, context, tag) {
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.n) {
        case 0:
          return _context2.a(2, handleNotFound(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
            var resp;
            return _regenerator().w(function (_context) {
              while (1) switch (_context.n) {
                case 0:
                  _context.n = 1;
                  return github.git.getRef(_objectSpread(_objectSpread({}, context.repo), {}, {
                    ref: "tags/".concat(tag)
                  }));
                case 1:
                  resp = _context.v;
                  return _context.a(2, resp.status < 400);
              }
            }, _callee);
          })), function () {
            return false;
          }));
      }
    }, _callee2);
  }));
  return _tagExists.apply(this, arguments);
}
function createTagAndRef(_x4, _x5, _x6, _x7) {
  return _createTagAndRef.apply(this, arguments);
}
function _createTagAndRef() {
  _createTagAndRef = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(github, context, tag, message) {
    var tagResponse;
    return _regenerator().w(function (_context3) {
      while (1) switch (_context3.n) {
        case 0:
          _context3.n = 1;
          return github.git.createTag(_objectSpread(_objectSpread({}, context.repo), {}, {
            tag: tag,
            message: message,
            object: context.sha,
            type: "commit"
          }));
        case 1:
          tagResponse = _context3.v;
          _context3.n = 2;
          return github.git.createRef(_objectSpread(_objectSpread({}, context.repo), {}, {
            ref: "refs/tags/".concat(tag),
            sha: tagResponse.data.sha
          }));
        case 2:
          return _context3.a(2);
      }
    }, _callee3);
  }));
  return _createTagAndRef.apply(this, arguments);
}
function handleNotFound(_x8, _x9) {
  return _handleNotFound.apply(this, arguments);
}
function _handleNotFound() {
  _handleNotFound = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(execute, notFound) {
    var _t;
    return _regenerator().w(function (_context4) {
      while (1) switch (_context4.p = _context4.n) {
        case 0:
          _context4.p = 0;
          _context4.n = 1;
          return execute();
        case 1:
          return _context4.a(2, _context4.v);
        case 2:
          _context4.p = 2;
          _t = _context4.v;
          if (!((0, _http.isErrorWithStatus)(_t) && _t.status === 404)) {
            _context4.n = 3;
            break;
          }
          return _context4.a(2, notFound());
        case 3:
          throw _t;
        case 4:
          return _context4.a(2);
      }
    }, _callee4, null, [[0, 2]]);
  }));
  return _handleNotFound.apply(this, arguments);
}

/***/ }),

/***/ 9523:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.isErrorWithStatus = isErrorWithStatus;
function isErrorWithStatus(error) {
  if (error != null) {
    return error.hasOwnProperty("status");
  } else {
    return false;
  }
}

/***/ }),

/***/ 975:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.logger = void 0;
function startBlock(text) {
  console.log("=== ".concat(text, " ==="));
}
function startStep(text) {
  console.log("\u203A ".concat(text));
}
function endBlock() {
  console.log("");
}
function endStep() {
  console.log("");
}
var logger = exports.logger = {
  log: console.log,
  error: console.error,
  startBlock: startBlock,
  startStep: startStep,
  endBlock: endBlock,
  endStep: endStep
};

/***/ }),

/***/ 7366:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.configure = configure;
exports.publish = publish;
exports.versionExists = versionExists;
var _exec = __nccwpck_require__(38);
var _logger = __nccwpck_require__(975);
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function configure(_x, _x2, _x3) {
  return _configure.apply(this, arguments);
}
function _configure() {
  _configure = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(npmPath, npmRegistry, npmAuth) {
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          _context.n = 1;
          return (0, _exec.exec)(npmPath, ["config", "set", "//".concat(npmRegistry, "/:_authToken=").concat(npmAuth)]);
        case 1:
          return _context.a(2);
      }
    }, _callee);
  }));
  return _configure.apply(this, arguments);
}
function versionExists(_x4, _x5, _x6) {
  return _versionExists.apply(this, arguments);
}
function _versionExists() {
  _versionExists = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(npmPath, name, version) {
    var versions, parsed, _t;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.p = _context2.n) {
        case 0:
          _context2.p = 0;
          _context2.n = 1;
          return (0, _exec.execResultAsString)(npmPath, ["info", "--json", name, "versions"], {
            silent: true
          });
        case 1:
          versions = _context2.v;
          parsed = JSON.parse(versions);
          return _context2.a(2, parsed.find(function (v) {
            return v === version;
          }) != null);
        case 2:
          _context2.p = 2;
          _t = _context2.v;
          _logger.logger.error("Failed to check NPM for version ".concat(version, " of ").concat(name, ". Assuming version does not exist."));
          return _context2.a(2, false);
      }
    }, _callee2, null, [[0, 2]]);
  }));
  return _versionExists.apply(this, arguments);
}
function publish(_x7, _x8) {
  return _publish.apply(this, arguments);
}
function _publish() {
  _publish = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(npmPath, path) {
    return _regenerator().w(function (_context3) {
      while (1) switch (_context3.n) {
        case 0:
          _context3.n = 1;
          return (0, _exec.exec)(npmPath, ["publish", path]);
        case 1:
          return _context3.a(2);
      }
    }, _callee3);
  }));
  return _publish.apply(this, arguments);
}

/***/ }),

/***/ 2394:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getProject = getProject;
var _fs = _interopRequireDefault(__nccwpck_require__(9896));
var _glob = __nccwpck_require__(8941);
var _path = _interopRequireDefault(__nccwpck_require__(6928));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function getProject(workspacePath) {
  var lernaPath = _path["default"].resolve(workspacePath, "lerna.json");
  var packagePath = _path["default"].resolve(workspacePath, "package.json");
  var packageJson = JSON.parse(_fs["default"].readFileSync(packagePath, {
    encoding: "utf-8"
  }));
  var isMonoRepo = _fs["default"].existsSync(lernaPath);
  var isYarnWorkspace = packageJson.workspaces != null;
  var paths = [];
  if (isYarnWorkspace) {
    paths = packageJson.workspaces;
  } else if (isMonoRepo) {
    var lernaJson = JSON.parse(_fs["default"].readFileSync(lernaPath, {
      encoding: "utf-8"
    }));
    paths = lernaJson.packages;
  } else {
    paths = [workspacePath];
  }
  return {
    type: isMonoRepo ? "monorepo" : "single",
    packages: getPackages(isMonoRepo, workspacePath, paths)
  };
}
function getPackages(isMonoRepo, workspacePath, paths) {
  var resolvedPaths = paths.map(function (p) {
    if (p.includes("*")) {
      var expanded = (0, _glob.globSync)(_path["default"].resolve(workspacePath, p)).sort();
      return expanded.map(function (d) {
        return _path["default"].resolve(workspacePath, d);
      });
    } else {
      return p;
    }
  }).flat();
  return resolvedPaths.map(function (p) {
    var packagePath = _path["default"].join(p, "package.json");
    var packageJson = JSON.parse(_fs["default"].readFileSync(packagePath, {
      encoding: "utf-8"
    }));
    var name = packageJson.name;
    var version = packageJson.version;
    var isPrivate = packageJson["private"] || false;
    var tag = isMonoRepo ? "".concat(name, "_v").concat(version) : "v".concat(version);
    return {
      name: name,
      version: version,
      isPrivate: isPrivate,
      path: p,
      tag: tag
    };
  });
}

/***/ }),

/***/ 3444:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.PublishingClient = void 0;
var _github = __nccwpck_require__(3228);
var github = _interopRequireWildcard(__nccwpck_require__(8624));
var _logger = __nccwpck_require__(975);
var npm = _interopRequireWildcard(__nccwpck_require__(7366));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t3 in e) "default" !== _t3 && {}.hasOwnProperty.call(e, _t3) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t3)) && (i.get || i.set) ? o(f, _t3, i) : f[_t3] = e[_t3]); return f; })(e, t); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var PublishingClient = exports.PublishingClient = /*#__PURE__*/function () {
  function PublishingClient(_ref) {
    var npmPath = _ref.npmPath,
      githubToken = _ref.githubToken,
      isDryRun = _ref.isDryRun;
    _classCallCheck(this, PublishingClient);
    this.npmPath = npmPath;
    this.isDryRun = isDryRun;
    this.github = new _github.GitHub(githubToken);
    this.githubContext = _github.context;
  }
  return _createClass(PublishingClient, [{
    key: "publishAll",
    value: function () {
      var _publishAll = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(packages) {
        var taggingErrors, _iterator, _step, packageInfo, result, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              taggingErrors = [];
              _iterator = _createForOfIteratorHelper(packages);
              _context.p = 1;
              _iterator.s();
            case 2:
              if ((_step = _iterator.n()).done) {
                _context.n = 5;
                break;
              }
              packageInfo = _step.value;
              _context.n = 3;
              return this.publishAndTag(packageInfo);
            case 3:
              result = _context.v;
              if (result.taggingError != null) {
                taggingErrors.push(result.taggingError);
              }
            case 4:
              _context.n = 2;
              break;
            case 5:
              _context.n = 7;
              break;
            case 6:
              _context.p = 6;
              _t = _context.v;
              _iterator.e(_t);
            case 7:
              _context.p = 7;
              _iterator.f();
              return _context.f(7);
            case 8:
              if (!(taggingErrors.length > 0)) {
                _context.n = 9;
                break;
              }
              throw new Error(this.taggingFailureMessage(taggingErrors));
            case 9:
              return _context.a(2);
          }
        }, _callee, this, [[1, 6, 7, 8]]);
      }));
      function publishAll(_x) {
        return _publishAll.apply(this, arguments);
      }
      return publishAll;
    }()
  }, {
    key: "publishAndTag",
    value: function () {
      var _publishAndTag = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(packageInfo) {
        var error, _t2;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.p = _context2.n) {
            case 0:
              _logger.logger.startBlock("".concat(packageInfo.name, "@").concat(packageInfo.version));
              _context2.p = 1;
              if (!packageInfo.isPrivate) {
                _context2.n = 2;
                break;
              }
              _logger.logger.log("Skipping, ".concat(packageInfo.name, "@").concat(packageInfo.version, " is private."));
              return _context2.a(2, {});
            case 2:
              _context2.n = 3;
              return this.isPublished(packageInfo);
            case 3:
              if (!_context2.v) {
                _context2.n = 4;
                break;
              }
              _logger.logger.log("Skipping publish, ".concat(packageInfo.name, "@").concat(packageInfo.version, " is already published."));
              _context2.n = 5;
              break;
            case 4:
              _context2.n = 5;
              return this.publish(packageInfo);
            case 5:
              _context2.p = 5;
              _context2.n = 6;
              return this.isTagged(packageInfo);
            case 6:
              if (!_context2.v) {
                _context2.n = 7;
                break;
              }
              _logger.logger.log("Skipping tagging, ".concat(packageInfo.name, "@").concat(packageInfo.version, " is already tagged."));
              _context2.n = 8;
              break;
            case 7:
              _context2.n = 8;
              return this.tag(packageInfo);
            case 8:
              _context2.n = 10;
              break;
            case 9:
              _context2.p = 9;
              _t2 = _context2.v;
              error = this.asError(_t2);
              _logger.logger.error("Failed to tag ".concat(packageInfo.name, "@").concat(packageInfo.version, ". Continuing with remaining packages. ").concat(error.message));
              return _context2.a(2, {
                taggingError: {
                  packageInfo: packageInfo,
                  error: error
                }
              });
            case 10:
              return _context2.a(2, {});
            case 11:
              _context2.p = 11;
              _logger.logger.endBlock();
              return _context2.f(11);
            case 12:
              return _context2.a(2);
          }
        }, _callee2, this, [[5, 9], [1,, 11, 12]]);
      }));
      function publishAndTag(_x2) {
        return _publishAndTag.apply(this, arguments);
      }
      return publishAndTag;
    }()
  }, {
    key: "isPublished",
    value: function isPublished(_ref2) {
      var name = _ref2.name,
        version = _ref2.version;
      return npm.versionExists(this.npmPath, name, version);
    }
  }, {
    key: "isTagged",
    value: function isTagged(_ref3) {
      var tag = _ref3.tag;
      return github.tagExists(this.github, this.githubContext, tag);
    }
  }, {
    key: "publish",
    value: function () {
      var _publish = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(packageInfo) {
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              if (this.isDryRun) {
                _context3.n = 2;
                break;
              }
              _logger.logger.startStep("Publishing ".concat(packageInfo.name, "@").concat(packageInfo.version));
              _context3.n = 1;
              return npm.publish(this.npmPath, packageInfo.path);
            case 1:
              _logger.logger.endStep();
              _context3.n = 3;
              break;
            case 2:
              _logger.logger.log("Dry-run is enabled, skipping publish. Would publish: ".concat(packageInfo.name, " at version ").concat(packageInfo.version));
            case 3:
              return _context3.a(2);
          }
        }, _callee3, this);
      }));
      function publish(_x3) {
        return _publish.apply(this, arguments);
      }
      return publish;
    }()
  }, {
    key: "tag",
    value: function () {
      var _tag = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(packageInfo) {
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.n) {
            case 0:
              if (this.isDryRun) {
                _context4.n = 2;
                break;
              }
              _logger.logger.startStep("Creating Github tag and release");
              _context4.n = 1;
              return github.createTagAndRef(this.github, this.githubContext, packageInfo.tag, this.tagMessage(packageInfo));
            case 1:
              _logger.logger.endStep();
              _context4.n = 3;
              break;
            case 2:
              _logger.logger.log("Dry-run is enabled, skipping tagging. Would create tag: ".concat(packageInfo.tag));
            case 3:
              return _context4.a(2);
          }
        }, _callee4, this);
      }));
      function tag(_x4) {
        return _tag.apply(this, arguments);
      }
      return tag;
    }()
  }, {
    key: "tagMessage",
    value: function tagMessage(_ref4) {
      var name = _ref4.name,
        version = _ref4.version,
        tag = _ref4.tag;
      return "".concat(tag, "\n\nAutomated release of v").concat(version, " for ").concat(name, ".");
    }
  }, {
    key: "taggingFailureMessage",
    value: function taggingFailureMessage(errors) {
      var formatted = errors.map(function (_ref5) {
        var packageInfo = _ref5.packageInfo,
          error = _ref5.error;
        return "- ".concat(packageInfo.name, "@").concat(packageInfo.version, " (").concat(packageInfo.tag, "): ").concat(error.message);
      }).join("\n");
      return ["One or more packages could not be tagged after publishing checks completed.", "All packages were still processed for publishing before failing the action.", "If this is a GitHub token permission issue, grant `contents: write` to the workflow token.", formatted].join("\n");
    }
  }, {
    key: "asError",
    value: function asError(error) {
      return error instanceof Error ? error : new Error(String(error));
    }
  }]);
}();

/***/ }),

/***/ 6401:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.run = run;
var _core = __nccwpck_require__(7484);
var _io = __nccwpck_require__(4994);
var _env = __nccwpck_require__(4064);
var npm = _interopRequireWildcard(__nccwpck_require__(7366));
var _project = __nccwpck_require__(2394);
var _publish2 = __nccwpck_require__(3444);
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t2 in e) "default" !== _t2 && {}.hasOwnProperty.call(e, _t2) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t2)) && (i.get || i.set) ? o(f, _t2, i) : f[_t2] = e[_t2]); return f; })(e, t); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function run() {
  return _run.apply(this, arguments);
}
function _run() {
  _run = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
    var npmAuth, npmRegistry, isDryRun, npmPath, workspacePath, githubToken, publisher, _t;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.p = _context.n) {
        case 0:
          _context.p = 0;
          npmAuth = (0, _core.getInput)("npm-auth-token", {
            required: true
          });
          npmRegistry = (0, _core.getInput)("npm-registry");
          isDryRun = (0, _core.getInput)("dry-run") === "true";
          _context.n = 1;
          return (0, _io.which)("npm", true);
        case 1:
          npmPath = _context.v;
          workspacePath = (0, _env.getEnvVar)("GITHUB_WORKSPACE", true);
          githubToken = (0, _env.getEnvVar)("GITHUB_TOKEN", true);
          publisher = new _publish2.PublishingClient({
            npmPath: npmPath,
            githubToken: githubToken,
            isDryRun: isDryRun
          });
          _context.n = 2;
          return configure({
            npmPath: npmPath,
            npmRegistry: npmRegistry,
            npmAuth: npmAuth
          });
        case 2:
          _context.n = 3;
          return publish(workspacePath, publisher);
        case 3:
          _context.n = 5;
          break;
        case 4:
          _context.p = 4;
          _t = _context.v;
          (0, _core.setFailed)(_t instanceof Error ? _t : String(_t));
        case 5:
          return _context.a(2);
      }
    }, _callee, null, [[0, 4]]);
  }));
  return _run.apply(this, arguments);
}
function configure(_x) {
  return _configure.apply(this, arguments);
}
function _configure() {
  _configure = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(_ref) {
    var npmPath, npmRegistry, npmAuth;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.n) {
        case 0:
          npmPath = _ref.npmPath, npmRegistry = _ref.npmRegistry, npmAuth = _ref.npmAuth;
          _context2.n = 1;
          return npm.configure(npmPath, npmRegistry, npmAuth);
        case 1:
          return _context2.a(2);
      }
    }, _callee2);
  }));
  return _configure.apply(this, arguments);
}
function publish(_x2, _x3) {
  return _publish.apply(this, arguments);
}
function _publish() {
  _publish = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(workspacePath, publisher) {
    var _getProject, packages;
    return _regenerator().w(function (_context3) {
      while (1) switch (_context3.n) {
        case 0:
          _getProject = (0, _project.getProject)(workspacePath), packages = _getProject.packages;
          _context3.n = 1;
          return publisher.publishAll(packages);
        case 1:
          return _context3.a(2);
      }
    }, _callee3);
  }));
  return _publish.apply(this, arguments);
}

/***/ }),

/***/ 4914:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.issue = exports.issueCommand = void 0;
const os = __importStar(__nccwpck_require__(857));
const utils_1 = __nccwpck_require__(302);
/**
 * Commands
 *
 * Command Format:
 *   ::name key=value,key=value::message
 *
 * Examples:
 *   ::warning::This is the message
 *   ::set-env name=MY_VAR::some value
 */
function issueCommand(command, properties, message) {
    const cmd = new Command(command, properties, message);
    process.stdout.write(cmd.toString() + os.EOL);
}
exports.issueCommand = issueCommand;
function issue(name, message = '') {
    issueCommand(name, {}, message);
}
exports.issue = issue;
const CMD_STRING = '::';
class Command {
    constructor(command, properties, message) {
        if (!command) {
            command = 'missing.command';
        }
        this.command = command;
        this.properties = properties;
        this.message = message;
    }
    toString() {
        let cmdStr = CMD_STRING + this.command;
        if (this.properties && Object.keys(this.properties).length > 0) {
            cmdStr += ' ';
            let first = true;
            for (const key in this.properties) {
                if (this.properties.hasOwnProperty(key)) {
                    const val = this.properties[key];
                    if (val) {
                        if (first) {
                            first = false;
                        }
                        else {
                            cmdStr += ',';
                        }
                        cmdStr += `${key}=${escapeProperty(val)}`;
                    }
                }
            }
        }
        cmdStr += `${CMD_STRING}${escapeData(this.message)}`;
        return cmdStr;
    }
}
function escapeData(s) {
    return (0, utils_1.toCommandValue)(s)
        .replace(/%/g, '%25')
        .replace(/\r/g, '%0D')
        .replace(/\n/g, '%0A');
}
function escapeProperty(s) {
    return (0, utils_1.toCommandValue)(s)
        .replace(/%/g, '%25')
        .replace(/\r/g, '%0D')
        .replace(/\n/g, '%0A')
        .replace(/:/g, '%3A')
        .replace(/,/g, '%2C');
}
//# sourceMappingURL=command.js.map

/***/ }),

/***/ 7484:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.platform = exports.toPlatformPath = exports.toWin32Path = exports.toPosixPath = exports.markdownSummary = exports.summary = exports.getIDToken = exports.getState = exports.saveState = exports.group = exports.endGroup = exports.startGroup = exports.info = exports.notice = exports.warning = exports.error = exports.debug = exports.isDebug = exports.setFailed = exports.setCommandEcho = exports.setOutput = exports.getBooleanInput = exports.getMultilineInput = exports.getInput = exports.addPath = exports.setSecret = exports.exportVariable = exports.ExitCode = void 0;
const command_1 = __nccwpck_require__(4914);
const file_command_1 = __nccwpck_require__(4753);
const utils_1 = __nccwpck_require__(302);
const os = __importStar(__nccwpck_require__(857));
const path = __importStar(__nccwpck_require__(6928));
const oidc_utils_1 = __nccwpck_require__(5306);
/**
 * The code to exit an action
 */
var ExitCode;
(function (ExitCode) {
    /**
     * A code indicating that the action was successful
     */
    ExitCode[ExitCode["Success"] = 0] = "Success";
    /**
     * A code indicating that the action was a failure
     */
    ExitCode[ExitCode["Failure"] = 1] = "Failure";
})(ExitCode || (exports.ExitCode = ExitCode = {}));
//-----------------------------------------------------------------------
// Variables
//-----------------------------------------------------------------------
/**
 * Sets env variable for this action and future actions in the job
 * @param name the name of the variable to set
 * @param val the value of the variable. Non-string values will be converted to a string via JSON.stringify
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function exportVariable(name, val) {
    const convertedVal = (0, utils_1.toCommandValue)(val);
    process.env[name] = convertedVal;
    const filePath = process.env['GITHUB_ENV'] || '';
    if (filePath) {
        return (0, file_command_1.issueFileCommand)('ENV', (0, file_command_1.prepareKeyValueMessage)(name, val));
    }
    (0, command_1.issueCommand)('set-env', { name }, convertedVal);
}
exports.exportVariable = exportVariable;
/**
 * Registers a secret which will get masked from logs
 * @param secret value of the secret
 */
function setSecret(secret) {
    (0, command_1.issueCommand)('add-mask', {}, secret);
}
exports.setSecret = setSecret;
/**
 * Prepends inputPath to the PATH (for this action and future actions)
 * @param inputPath
 */
function addPath(inputPath) {
    const filePath = process.env['GITHUB_PATH'] || '';
    if (filePath) {
        (0, file_command_1.issueFileCommand)('PATH', inputPath);
    }
    else {
        (0, command_1.issueCommand)('add-path', {}, inputPath);
    }
    process.env['PATH'] = `${inputPath}${path.delimiter}${process.env['PATH']}`;
}
exports.addPath = addPath;
/**
 * Gets the value of an input.
 * Unless trimWhitespace is set to false in InputOptions, the value is also trimmed.
 * Returns an empty string if the value is not defined.
 *
 * @param     name     name of the input to get
 * @param     options  optional. See InputOptions.
 * @returns   string
 */
function getInput(name, options) {
    const val = process.env[`INPUT_${name.replace(/ /g, '_').toUpperCase()}`] || '';
    if (options && options.required && !val) {
        throw new Error(`Input required and not supplied: ${name}`);
    }
    if (options && options.trimWhitespace === false) {
        return val;
    }
    return val.trim();
}
exports.getInput = getInput;
/**
 * Gets the values of an multiline input.  Each value is also trimmed.
 *
 * @param     name     name of the input to get
 * @param     options  optional. See InputOptions.
 * @returns   string[]
 *
 */
function getMultilineInput(name, options) {
    const inputs = getInput(name, options)
        .split('\n')
        .filter(x => x !== '');
    if (options && options.trimWhitespace === false) {
        return inputs;
    }
    return inputs.map(input => input.trim());
}
exports.getMultilineInput = getMultilineInput;
/**
 * Gets the input value of the boolean type in the YAML 1.2 "core schema" specification.
 * Support boolean input list: `true | True | TRUE | false | False | FALSE` .
 * The return value is also in boolean type.
 * ref: https://yaml.org/spec/1.2/spec.html#id2804923
 *
 * @param     name     name of the input to get
 * @param     options  optional. See InputOptions.
 * @returns   boolean
 */
function getBooleanInput(name, options) {
    const trueValue = ['true', 'True', 'TRUE'];
    const falseValue = ['false', 'False', 'FALSE'];
    const val = getInput(name, options);
    if (trueValue.includes(val))
        return true;
    if (falseValue.includes(val))
        return false;
    throw new TypeError(`Input does not meet YAML 1.2 "Core Schema" specification: ${name}\n` +
        `Support boolean input list: \`true | True | TRUE | false | False | FALSE\``);
}
exports.getBooleanInput = getBooleanInput;
/**
 * Sets the value of an output.
 *
 * @param     name     name of the output to set
 * @param     value    value to store. Non-string values will be converted to a string via JSON.stringify
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function setOutput(name, value) {
    const filePath = process.env['GITHUB_OUTPUT'] || '';
    if (filePath) {
        return (0, file_command_1.issueFileCommand)('OUTPUT', (0, file_command_1.prepareKeyValueMessage)(name, value));
    }
    process.stdout.write(os.EOL);
    (0, command_1.issueCommand)('set-output', { name }, (0, utils_1.toCommandValue)(value));
}
exports.setOutput = setOutput;
/**
 * Enables or disables the echoing of commands into stdout for the rest of the step.
 * Echoing is disabled by default if ACTIONS_STEP_DEBUG is not set.
 *
 */
function setCommandEcho(enabled) {
    (0, command_1.issue)('echo', enabled ? 'on' : 'off');
}
exports.setCommandEcho = setCommandEcho;
//-----------------------------------------------------------------------
// Results
//-----------------------------------------------------------------------
/**
 * Sets the action status to failed.
 * When the action exits it will be with an exit code of 1
 * @param message add error issue message
 */
function setFailed(message) {
    process.exitCode = ExitCode.Failure;
    error(message);
}
exports.setFailed = setFailed;
//-----------------------------------------------------------------------
// Logging Commands
//-----------------------------------------------------------------------
/**
 * Gets whether Actions Step Debug is on or not
 */
function isDebug() {
    return process.env['RUNNER_DEBUG'] === '1';
}
exports.isDebug = isDebug;
/**
 * Writes debug message to user log
 * @param message debug message
 */
function debug(message) {
    (0, command_1.issueCommand)('debug', {}, message);
}
exports.debug = debug;
/**
 * Adds an error issue
 * @param message error issue message. Errors will be converted to string via toString()
 * @param properties optional properties to add to the annotation.
 */
function error(message, properties = {}) {
    (0, command_1.issueCommand)('error', (0, utils_1.toCommandProperties)(properties), message instanceof Error ? message.toString() : message);
}
exports.error = error;
/**
 * Adds a warning issue
 * @param message warning issue message. Errors will be converted to string via toString()
 * @param properties optional properties to add to the annotation.
 */
function warning(message, properties = {}) {
    (0, command_1.issueCommand)('warning', (0, utils_1.toCommandProperties)(properties), message instanceof Error ? message.toString() : message);
}
exports.warning = warning;
/**
 * Adds a notice issue
 * @param message notice issue message. Errors will be converted to string via toString()
 * @param properties optional properties to add to the annotation.
 */
function notice(message, properties = {}) {
    (0, command_1.issueCommand)('notice', (0, utils_1.toCommandProperties)(properties), message instanceof Error ? message.toString() : message);
}
exports.notice = notice;
/**
 * Writes info to log with console.log.
 * @param message info message
 */
function info(message) {
    process.stdout.write(message + os.EOL);
}
exports.info = info;
/**
 * Begin an output group.
 *
 * Output until the next `groupEnd` will be foldable in this group
 *
 * @param name The name of the output group
 */
function startGroup(name) {
    (0, command_1.issue)('group', name);
}
exports.startGroup = startGroup;
/**
 * End an output group.
 */
function endGroup() {
    (0, command_1.issue)('endgroup');
}
exports.endGroup = endGroup;
/**
 * Wrap an asynchronous function call in a group.
 *
 * Returns the same type as the function itself.
 *
 * @param name The name of the group
 * @param fn The function to wrap in the group
 */
function group(name, fn) {
    return __awaiter(this, void 0, void 0, function* () {
        startGroup(name);
        let result;
        try {
            result = yield fn();
        }
        finally {
            endGroup();
        }
        return result;
    });
}
exports.group = group;
//-----------------------------------------------------------------------
// Wrapper action state
//-----------------------------------------------------------------------
/**
 * Saves state for current action, the state can only be retrieved by this action's post job execution.
 *
 * @param     name     name of the state to store
 * @param     value    value to store. Non-string values will be converted to a string via JSON.stringify
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function saveState(name, value) {
    const filePath = process.env['GITHUB_STATE'] || '';
    if (filePath) {
        return (0, file_command_1.issueFileCommand)('STATE', (0, file_command_1.prepareKeyValueMessage)(name, value));
    }
    (0, command_1.issueCommand)('save-state', { name }, (0, utils_1.toCommandValue)(value));
}
exports.saveState = saveState;
/**
 * Gets the value of an state set by this action's main execution.
 *
 * @param     name     name of the state to get
 * @returns   string
 */
function getState(name) {
    return process.env[`STATE_${name}`] || '';
}
exports.getState = getState;
function getIDToken(aud) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield oidc_utils_1.OidcClient.getIDToken(aud);
    });
}
exports.getIDToken = getIDToken;
/**
 * Summary exports
 */
var summary_1 = __nccwpck_require__(1847);
Object.defineProperty(exports, "summary", ({ enumerable: true, get: function () { return summary_1.summary; } }));
/**
 * @deprecated use core.summary
 */
var summary_2 = __nccwpck_require__(1847);
Object.defineProperty(exports, "markdownSummary", ({ enumerable: true, get: function () { return summary_2.markdownSummary; } }));
/**
 * Path exports
 */
var path_utils_1 = __nccwpck_require__(1976);
Object.defineProperty(exports, "toPosixPath", ({ enumerable: true, get: function () { return path_utils_1.toPosixPath; } }));
Object.defineProperty(exports, "toWin32Path", ({ enumerable: true, get: function () { return path_utils_1.toWin32Path; } }));
Object.defineProperty(exports, "toPlatformPath", ({ enumerable: true, get: function () { return path_utils_1.toPlatformPath; } }));
/**
 * Platform utilities exports
 */
exports.platform = __importStar(__nccwpck_require__(8968));
//# sourceMappingURL=core.js.map

/***/ }),

/***/ 4753:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

// For internal use, subject to change.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.prepareKeyValueMessage = exports.issueFileCommand = void 0;
// We use any as a valid input type
/* eslint-disable @typescript-eslint/no-explicit-any */
const crypto = __importStar(__nccwpck_require__(6982));
const fs = __importStar(__nccwpck_require__(9896));
const os = __importStar(__nccwpck_require__(857));
const utils_1 = __nccwpck_require__(302);
function issueFileCommand(command, message) {
    const filePath = process.env[`GITHUB_${command}`];
    if (!filePath) {
        throw new Error(`Unable to find environment variable for file command ${command}`);
    }
    if (!fs.existsSync(filePath)) {
        throw new Error(`Missing file at path: ${filePath}`);
    }
    fs.appendFileSync(filePath, `${(0, utils_1.toCommandValue)(message)}${os.EOL}`, {
        encoding: 'utf8'
    });
}
exports.issueFileCommand = issueFileCommand;
function prepareKeyValueMessage(key, value) {
    const delimiter = `ghadelimiter_${crypto.randomUUID()}`;
    const convertedValue = (0, utils_1.toCommandValue)(value);
    // These should realistically never happen, but just in case someone finds a
    // way to exploit uuid generation let's not allow keys or values that contain
    // the delimiter.
    if (key.includes(delimiter)) {
        throw new Error(`Unexpected input: name should not contain the delimiter "${delimiter}"`);
    }
    if (convertedValue.includes(delimiter)) {
        throw new Error(`Unexpected input: value should not contain the delimiter "${delimiter}"`);
    }
    return `${key}<<${delimiter}${os.EOL}${convertedValue}${os.EOL}${delimiter}`;
}
exports.prepareKeyValueMessage = prepareKeyValueMessage;
//# sourceMappingURL=file-command.js.map

/***/ }),

/***/ 5306:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OidcClient = void 0;
const http_client_1 = __nccwpck_require__(4844);
const auth_1 = __nccwpck_require__(4552);
const core_1 = __nccwpck_require__(7484);
class OidcClient {
    static createHttpClient(allowRetry = true, maxRetry = 10) {
        const requestOptions = {
            allowRetries: allowRetry,
            maxRetries: maxRetry
        };
        return new http_client_1.HttpClient('actions/oidc-client', [new auth_1.BearerCredentialHandler(OidcClient.getRequestToken())], requestOptions);
    }
    static getRequestToken() {
        const token = process.env['ACTIONS_ID_TOKEN_REQUEST_TOKEN'];
        if (!token) {
            throw new Error('Unable to get ACTIONS_ID_TOKEN_REQUEST_TOKEN env variable');
        }
        return token;
    }
    static getIDTokenUrl() {
        const runtimeUrl = process.env['ACTIONS_ID_TOKEN_REQUEST_URL'];
        if (!runtimeUrl) {
            throw new Error('Unable to get ACTIONS_ID_TOKEN_REQUEST_URL env variable');
        }
        return runtimeUrl;
    }
    static getCall(id_token_url) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const httpclient = OidcClient.createHttpClient();
            const res = yield httpclient
                .getJson(id_token_url)
                .catch(error => {
                throw new Error(`Failed to get ID Token. \n 
        Error Code : ${error.statusCode}\n 
        Error Message: ${error.message}`);
            });
            const id_token = (_a = res.result) === null || _a === void 0 ? void 0 : _a.value;
            if (!id_token) {
                throw new Error('Response json body do not have ID Token field');
            }
            return id_token;
        });
    }
    static getIDToken(audience) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // New ID Token is requested from action service
                let id_token_url = OidcClient.getIDTokenUrl();
                if (audience) {
                    const encodedAudience = encodeURIComponent(audience);
                    id_token_url = `${id_token_url}&audience=${encodedAudience}`;
                }
                (0, core_1.debug)(`ID token url is ${id_token_url}`);
                const id_token = yield OidcClient.getCall(id_token_url);
                (0, core_1.setSecret)(id_token);
                return id_token;
            }
            catch (error) {
                throw new Error(`Error message: ${error.message}`);
            }
        });
    }
}
exports.OidcClient = OidcClient;
//# sourceMappingURL=oidc-utils.js.map

/***/ }),

/***/ 1976:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.toPlatformPath = exports.toWin32Path = exports.toPosixPath = void 0;
const path = __importStar(__nccwpck_require__(6928));
/**
 * toPosixPath converts the given path to the posix form. On Windows, \\ will be
 * replaced with /.
 *
 * @param pth. Path to transform.
 * @return string Posix path.
 */
function toPosixPath(pth) {
    return pth.replace(/[\\]/g, '/');
}
exports.toPosixPath = toPosixPath;
/**
 * toWin32Path converts the given path to the win32 form. On Linux, / will be
 * replaced with \\.
 *
 * @param pth. Path to transform.
 * @return string Win32 path.
 */
function toWin32Path(pth) {
    return pth.replace(/[/]/g, '\\');
}
exports.toWin32Path = toWin32Path;
/**
 * toPlatformPath converts the given path to a platform-specific path. It does
 * this by replacing instances of / and \ with the platform-specific path
 * separator.
 *
 * @param pth The path to platformize.
 * @return string The platform-specific path.
 */
function toPlatformPath(pth) {
    return pth.replace(/[/\\]/g, path.sep);
}
exports.toPlatformPath = toPlatformPath;
//# sourceMappingURL=path-utils.js.map

/***/ }),

/***/ 8968:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getDetails = exports.isLinux = exports.isMacOS = exports.isWindows = exports.arch = exports.platform = void 0;
const os_1 = __importDefault(__nccwpck_require__(857));
const exec = __importStar(__nccwpck_require__(5236));
const getWindowsInfo = () => __awaiter(void 0, void 0, void 0, function* () {
    const { stdout: version } = yield exec.getExecOutput('powershell -command "(Get-CimInstance -ClassName Win32_OperatingSystem).Version"', undefined, {
        silent: true
    });
    const { stdout: name } = yield exec.getExecOutput('powershell -command "(Get-CimInstance -ClassName Win32_OperatingSystem).Caption"', undefined, {
        silent: true
    });
    return {
        name: name.trim(),
        version: version.trim()
    };
});
const getMacOsInfo = () => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d;
    const { stdout } = yield exec.getExecOutput('sw_vers', undefined, {
        silent: true
    });
    const version = (_b = (_a = stdout.match(/ProductVersion:\s*(.+)/)) === null || _a === void 0 ? void 0 : _a[1]) !== null && _b !== void 0 ? _b : '';
    const name = (_d = (_c = stdout.match(/ProductName:\s*(.+)/)) === null || _c === void 0 ? void 0 : _c[1]) !== null && _d !== void 0 ? _d : '';
    return {
        name,
        version
    };
});
const getLinuxInfo = () => __awaiter(void 0, void 0, void 0, function* () {
    const { stdout } = yield exec.getExecOutput('lsb_release', ['-i', '-r', '-s'], {
        silent: true
    });
    const [name, version] = stdout.trim().split('\n');
    return {
        name,
        version
    };
});
exports.platform = os_1.default.platform();
exports.arch = os_1.default.arch();
exports.isWindows = exports.platform === 'win32';
exports.isMacOS = exports.platform === 'darwin';
exports.isLinux = exports.platform === 'linux';
function getDetails() {
    return __awaiter(this, void 0, void 0, function* () {
        return Object.assign(Object.assign({}, (yield (exports.isWindows
            ? getWindowsInfo()
            : exports.isMacOS
                ? getMacOsInfo()
                : getLinuxInfo()))), { platform: exports.platform,
            arch: exports.arch,
            isWindows: exports.isWindows,
            isMacOS: exports.isMacOS,
            isLinux: exports.isLinux });
    });
}
exports.getDetails = getDetails;
//# sourceMappingURL=platform.js.map

/***/ }),

/***/ 1847:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.summary = exports.markdownSummary = exports.SUMMARY_DOCS_URL = exports.SUMMARY_ENV_VAR = void 0;
const os_1 = __nccwpck_require__(857);
const fs_1 = __nccwpck_require__(9896);
const { access, appendFile, writeFile } = fs_1.promises;
exports.SUMMARY_ENV_VAR = 'GITHUB_STEP_SUMMARY';
exports.SUMMARY_DOCS_URL = 'https://docs.github.com/actions/using-workflows/workflow-commands-for-github-actions#adding-a-job-summary';
class Summary {
    constructor() {
        this._buffer = '';
    }
    /**
     * Finds the summary file path from the environment, rejects if env var is not found or file does not exist
     * Also checks r/w permissions.
     *
     * @returns step summary file path
     */
    filePath() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this._filePath) {
                return this._filePath;
            }
            const pathFromEnv = process.env[exports.SUMMARY_ENV_VAR];
            if (!pathFromEnv) {
                throw new Error(`Unable to find environment variable for $${exports.SUMMARY_ENV_VAR}. Check if your runtime environment supports job summaries.`);
            }
            try {
                yield access(pathFromEnv, fs_1.constants.R_OK | fs_1.constants.W_OK);
            }
            catch (_a) {
                throw new Error(`Unable to access summary file: '${pathFromEnv}'. Check if the file has correct read/write permissions.`);
            }
            this._filePath = pathFromEnv;
            return this._filePath;
        });
    }
    /**
     * Wraps content in an HTML tag, adding any HTML attributes
     *
     * @param {string} tag HTML tag to wrap
     * @param {string | null} content content within the tag
     * @param {[attribute: string]: string} attrs key-value list of HTML attributes to add
     *
     * @returns {string} content wrapped in HTML element
     */
    wrap(tag, content, attrs = {}) {
        const htmlAttrs = Object.entries(attrs)
            .map(([key, value]) => ` ${key}="${value}"`)
            .join('');
        if (!content) {
            return `<${tag}${htmlAttrs}>`;
        }
        return `<${tag}${htmlAttrs}>${content}</${tag}>`;
    }
    /**
     * Writes text in the buffer to the summary buffer file and empties buffer. Will append by default.
     *
     * @param {SummaryWriteOptions} [options] (optional) options for write operation
     *
     * @returns {Promise<Summary>} summary instance
     */
    write(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const overwrite = !!(options === null || options === void 0 ? void 0 : options.overwrite);
            const filePath = yield this.filePath();
            const writeFunc = overwrite ? writeFile : appendFile;
            yield writeFunc(filePath, this._buffer, { encoding: 'utf8' });
            return this.emptyBuffer();
        });
    }
    /**
     * Clears the summary buffer and wipes the summary file
     *
     * @returns {Summary} summary instance
     */
    clear() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.emptyBuffer().write({ overwrite: true });
        });
    }
    /**
     * Returns the current summary buffer as a string
     *
     * @returns {string} string of summary buffer
     */
    stringify() {
        return this._buffer;
    }
    /**
     * If the summary buffer is empty
     *
     * @returns {boolen} true if the buffer is empty
     */
    isEmptyBuffer() {
        return this._buffer.length === 0;
    }
    /**
     * Resets the summary buffer without writing to summary file
     *
     * @returns {Summary} summary instance
     */
    emptyBuffer() {
        this._buffer = '';
        return this;
    }
    /**
     * Adds raw text to the summary buffer
     *
     * @param {string} text content to add
     * @param {boolean} [addEOL=false] (optional) append an EOL to the raw text (default: false)
     *
     * @returns {Summary} summary instance
     */
    addRaw(text, addEOL = false) {
        this._buffer += text;
        return addEOL ? this.addEOL() : this;
    }
    /**
     * Adds the operating system-specific end-of-line marker to the buffer
     *
     * @returns {Summary} summary instance
     */
    addEOL() {
        return this.addRaw(os_1.EOL);
    }
    /**
     * Adds an HTML codeblock to the summary buffer
     *
     * @param {string} code content to render within fenced code block
     * @param {string} lang (optional) language to syntax highlight code
     *
     * @returns {Summary} summary instance
     */
    addCodeBlock(code, lang) {
        const attrs = Object.assign({}, (lang && { lang }));
        const element = this.wrap('pre', this.wrap('code', code), attrs);
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds an HTML list to the summary buffer
     *
     * @param {string[]} items list of items to render
     * @param {boolean} [ordered=false] (optional) if the rendered list should be ordered or not (default: false)
     *
     * @returns {Summary} summary instance
     */
    addList(items, ordered = false) {
        const tag = ordered ? 'ol' : 'ul';
        const listItems = items.map(item => this.wrap('li', item)).join('');
        const element = this.wrap(tag, listItems);
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds an HTML table to the summary buffer
     *
     * @param {SummaryTableCell[]} rows table rows
     *
     * @returns {Summary} summary instance
     */
    addTable(rows) {
        const tableBody = rows
            .map(row => {
            const cells = row
                .map(cell => {
                if (typeof cell === 'string') {
                    return this.wrap('td', cell);
                }
                const { header, data, colspan, rowspan } = cell;
                const tag = header ? 'th' : 'td';
                const attrs = Object.assign(Object.assign({}, (colspan && { colspan })), (rowspan && { rowspan }));
                return this.wrap(tag, data, attrs);
            })
                .join('');
            return this.wrap('tr', cells);
        })
            .join('');
        const element = this.wrap('table', tableBody);
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds a collapsable HTML details element to the summary buffer
     *
     * @param {string} label text for the closed state
     * @param {string} content collapsable content
     *
     * @returns {Summary} summary instance
     */
    addDetails(label, content) {
        const element = this.wrap('details', this.wrap('summary', label) + content);
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds an HTML image tag to the summary buffer
     *
     * @param {string} src path to the image you to embed
     * @param {string} alt text description of the image
     * @param {SummaryImageOptions} options (optional) addition image attributes
     *
     * @returns {Summary} summary instance
     */
    addImage(src, alt, options) {
        const { width, height } = options || {};
        const attrs = Object.assign(Object.assign({}, (width && { width })), (height && { height }));
        const element = this.wrap('img', null, Object.assign({ src, alt }, attrs));
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds an HTML section heading element
     *
     * @param {string} text heading text
     * @param {number | string} [level=1] (optional) the heading level, default: 1
     *
     * @returns {Summary} summary instance
     */
    addHeading(text, level) {
        const tag = `h${level}`;
        const allowedTag = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(tag)
            ? tag
            : 'h1';
        const element = this.wrap(allowedTag, text);
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds an HTML thematic break (<hr>) to the summary buffer
     *
     * @returns {Summary} summary instance
     */
    addSeparator() {
        const element = this.wrap('hr', null);
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds an HTML line break (<br>) to the summary buffer
     *
     * @returns {Summary} summary instance
     */
    addBreak() {
        const element = this.wrap('br', null);
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds an HTML blockquote to the summary buffer
     *
     * @param {string} text quote text
     * @param {string} cite (optional) citation url
     *
     * @returns {Summary} summary instance
     */
    addQuote(text, cite) {
        const attrs = Object.assign({}, (cite && { cite }));
        const element = this.wrap('blockquote', text, attrs);
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds an HTML anchor tag to the summary buffer
     *
     * @param {string} text link text/content
     * @param {string} href hyperlink
     *
     * @returns {Summary} summary instance
     */
    addLink(text, href) {
        const element = this.wrap('a', text, { href });
        return this.addRaw(element).addEOL();
    }
}
const _summary = new Summary();
/**
 * @deprecated use `core.summary`
 */
exports.markdownSummary = _summary;
exports.summary = _summary;
//# sourceMappingURL=summary.js.map

/***/ }),

/***/ 302:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// We use any as a valid input type
/* eslint-disable @typescript-eslint/no-explicit-any */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.toCommandProperties = exports.toCommandValue = void 0;
/**
 * Sanitizes an input into a string so it can be passed into issueCommand safely
 * @param input input to sanitize into a string
 */
function toCommandValue(input) {
    if (input === null || input === undefined) {
        return '';
    }
    else if (typeof input === 'string' || input instanceof String) {
        return input;
    }
    return JSON.stringify(input);
}
exports.toCommandValue = toCommandValue;
/**
 *
 * @param annotationProperties
 * @returns The command properties to send with the actual annotation command
 * See IssueCommandProperties: https://github.com/actions/runner/blob/main/src/Runner.Worker/ActionCommandManager.cs#L646
 */
function toCommandProperties(annotationProperties) {
    if (!Object.keys(annotationProperties).length) {
        return {};
    }
    return {
        title: annotationProperties.title,
        file: annotationProperties.file,
        line: annotationProperties.startLine,
        endLine: annotationProperties.endLine,
        col: annotationProperties.startColumn,
        endColumn: annotationProperties.endColumn
    };
}
exports.toCommandProperties = toCommandProperties;
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ 5236:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getExecOutput = exports.exec = void 0;
const string_decoder_1 = __nccwpck_require__(3193);
const tr = __importStar(__nccwpck_require__(6665));
/**
 * Exec a command.
 * Output will be streamed to the live console.
 * Returns promise with return code
 *
 * @param     commandLine        command to execute (can include additional args). Must be correctly escaped.
 * @param     args               optional arguments for tool. Escaping is handled by the lib.
 * @param     options            optional exec options.  See ExecOptions
 * @returns   Promise<number>    exit code
 */
function exec(commandLine, args, options) {
    return __awaiter(this, void 0, void 0, function* () {
        const commandArgs = tr.argStringToArray(commandLine);
        if (commandArgs.length === 0) {
            throw new Error(`Parameter 'commandLine' cannot be null or empty.`);
        }
        // Path to tool to execute should be first arg
        const toolPath = commandArgs[0];
        args = commandArgs.slice(1).concat(args || []);
        const runner = new tr.ToolRunner(toolPath, args, options);
        return runner.exec();
    });
}
exports.exec = exec;
/**
 * Exec a command and get the output.
 * Output will be streamed to the live console.
 * Returns promise with the exit code and collected stdout and stderr
 *
 * @param     commandLine           command to execute (can include additional args). Must be correctly escaped.
 * @param     args                  optional arguments for tool. Escaping is handled by the lib.
 * @param     options               optional exec options.  See ExecOptions
 * @returns   Promise<ExecOutput>   exit code, stdout, and stderr
 */
function getExecOutput(commandLine, args, options) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        let stdout = '';
        let stderr = '';
        //Using string decoder covers the case where a mult-byte character is split
        const stdoutDecoder = new string_decoder_1.StringDecoder('utf8');
        const stderrDecoder = new string_decoder_1.StringDecoder('utf8');
        const originalStdoutListener = (_a = options === null || options === void 0 ? void 0 : options.listeners) === null || _a === void 0 ? void 0 : _a.stdout;
        const originalStdErrListener = (_b = options === null || options === void 0 ? void 0 : options.listeners) === null || _b === void 0 ? void 0 : _b.stderr;
        const stdErrListener = (data) => {
            stderr += stderrDecoder.write(data);
            if (originalStdErrListener) {
                originalStdErrListener(data);
            }
        };
        const stdOutListener = (data) => {
            stdout += stdoutDecoder.write(data);
            if (originalStdoutListener) {
                originalStdoutListener(data);
            }
        };
        const listeners = Object.assign(Object.assign({}, options === null || options === void 0 ? void 0 : options.listeners), { stdout: stdOutListener, stderr: stdErrListener });
        const exitCode = yield exec(commandLine, args, Object.assign(Object.assign({}, options), { listeners }));
        //flush any remaining characters
        stdout += stdoutDecoder.end();
        stderr += stderrDecoder.end();
        return {
            exitCode,
            stdout,
            stderr
        };
    });
}
exports.getExecOutput = getExecOutput;
//# sourceMappingURL=exec.js.map

/***/ }),

/***/ 6665:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.argStringToArray = exports.ToolRunner = void 0;
const os = __importStar(__nccwpck_require__(857));
const events = __importStar(__nccwpck_require__(4434));
const child = __importStar(__nccwpck_require__(5317));
const path = __importStar(__nccwpck_require__(6928));
const io = __importStar(__nccwpck_require__(8191));
const ioUtil = __importStar(__nccwpck_require__(7120));
const timers_1 = __nccwpck_require__(3557);
/* eslint-disable @typescript-eslint/unbound-method */
const IS_WINDOWS = process.platform === 'win32';
/*
 * Class for running command line tools. Handles quoting and arg parsing in a platform agnostic way.
 */
class ToolRunner extends events.EventEmitter {
    constructor(toolPath, args, options) {
        super();
        if (!toolPath) {
            throw new Error("Parameter 'toolPath' cannot be null or empty.");
        }
        this.toolPath = toolPath;
        this.args = args || [];
        this.options = options || {};
    }
    _debug(message) {
        if (this.options.listeners && this.options.listeners.debug) {
            this.options.listeners.debug(message);
        }
    }
    _getCommandString(options, noPrefix) {
        const toolPath = this._getSpawnFileName();
        const args = this._getSpawnArgs(options);
        let cmd = noPrefix ? '' : '[command]'; // omit prefix when piped to a second tool
        if (IS_WINDOWS) {
            // Windows + cmd file
            if (this._isCmdFile()) {
                cmd += toolPath;
                for (const a of args) {
                    cmd += ` ${a}`;
                }
            }
            // Windows + verbatim
            else if (options.windowsVerbatimArguments) {
                cmd += `"${toolPath}"`;
                for (const a of args) {
                    cmd += ` ${a}`;
                }
            }
            // Windows (regular)
            else {
                cmd += this._windowsQuoteCmdArg(toolPath);
                for (const a of args) {
                    cmd += ` ${this._windowsQuoteCmdArg(a)}`;
                }
            }
        }
        else {
            // OSX/Linux - this can likely be improved with some form of quoting.
            // creating processes on Unix is fundamentally different than Windows.
            // on Unix, execvp() takes an arg array.
            cmd += toolPath;
            for (const a of args) {
                cmd += ` ${a}`;
            }
        }
        return cmd;
    }
    _processLineBuffer(data, strBuffer, onLine) {
        try {
            let s = strBuffer + data.toString();
            let n = s.indexOf(os.EOL);
            while (n > -1) {
                const line = s.substring(0, n);
                onLine(line);
                // the rest of the string ...
                s = s.substring(n + os.EOL.length);
                n = s.indexOf(os.EOL);
            }
            return s;
        }
        catch (err) {
            // streaming lines to console is best effort.  Don't fail a build.
            this._debug(`error processing line. Failed with error ${err}`);
            return '';
        }
    }
    _getSpawnFileName() {
        if (IS_WINDOWS) {
            if (this._isCmdFile()) {
                return process.env['COMSPEC'] || 'cmd.exe';
            }
        }
        return this.toolPath;
    }
    _getSpawnArgs(options) {
        if (IS_WINDOWS) {
            if (this._isCmdFile()) {
                let argline = `/D /S /C "${this._windowsQuoteCmdArg(this.toolPath)}`;
                for (const a of this.args) {
                    argline += ' ';
                    argline += options.windowsVerbatimArguments
                        ? a
                        : this._windowsQuoteCmdArg(a);
                }
                argline += '"';
                return [argline];
            }
        }
        return this.args;
    }
    _endsWith(str, end) {
        return str.endsWith(end);
    }
    _isCmdFile() {
        const upperToolPath = this.toolPath.toUpperCase();
        return (this._endsWith(upperToolPath, '.CMD') ||
            this._endsWith(upperToolPath, '.BAT'));
    }
    _windowsQuoteCmdArg(arg) {
        // for .exe, apply the normal quoting rules that libuv applies
        if (!this._isCmdFile()) {
            return this._uvQuoteCmdArg(arg);
        }
        // otherwise apply quoting rules specific to the cmd.exe command line parser.
        // the libuv rules are generic and are not designed specifically for cmd.exe
        // command line parser.
        //
        // for a detailed description of the cmd.exe command line parser, refer to
        // http://stackoverflow.com/questions/4094699/how-does-the-windows-command-interpreter-cmd-exe-parse-scripts/7970912#7970912
        // need quotes for empty arg
        if (!arg) {
            return '""';
        }
        // determine whether the arg needs to be quoted
        const cmdSpecialChars = [
            ' ',
            '\t',
            '&',
            '(',
            ')',
            '[',
            ']',
            '{',
            '}',
            '^',
            '=',
            ';',
            '!',
            "'",
            '+',
            ',',
            '`',
            '~',
            '|',
            '<',
            '>',
            '"'
        ];
        let needsQuotes = false;
        for (const char of arg) {
            if (cmdSpecialChars.some(x => x === char)) {
                needsQuotes = true;
                break;
            }
        }
        // short-circuit if quotes not needed
        if (!needsQuotes) {
            return arg;
        }
        // the following quoting rules are very similar to the rules that by libuv applies.
        //
        // 1) wrap the string in quotes
        //
        // 2) double-up quotes - i.e. " => ""
        //
        //    this is different from the libuv quoting rules. libuv replaces " with \", which unfortunately
        //    doesn't work well with a cmd.exe command line.
        //
        //    note, replacing " with "" also works well if the arg is passed to a downstream .NET console app.
        //    for example, the command line:
        //          foo.exe "myarg:""my val"""
        //    is parsed by a .NET console app into an arg array:
        //          [ "myarg:\"my val\"" ]
        //    which is the same end result when applying libuv quoting rules. although the actual
        //    command line from libuv quoting rules would look like:
        //          foo.exe "myarg:\"my val\""
        //
        // 3) double-up slashes that precede a quote,
        //    e.g.  hello \world    => "hello \world"
        //          hello\"world    => "hello\\""world"
        //          hello\\"world   => "hello\\\\""world"
        //          hello world\    => "hello world\\"
        //
        //    technically this is not required for a cmd.exe command line, or the batch argument parser.
        //    the reasons for including this as a .cmd quoting rule are:
        //
        //    a) this is optimized for the scenario where the argument is passed from the .cmd file to an
        //       external program. many programs (e.g. .NET console apps) rely on the slash-doubling rule.
        //
        //    b) it's what we've been doing previously (by deferring to node default behavior) and we
        //       haven't heard any complaints about that aspect.
        //
        // note, a weakness of the quoting rules chosen here, is that % is not escaped. in fact, % cannot be
        // escaped when used on the command line directly - even though within a .cmd file % can be escaped
        // by using %%.
        //
        // the saving grace is, on the command line, %var% is left as-is if var is not defined. this contrasts
        // the line parsing rules within a .cmd file, where if var is not defined it is replaced with nothing.
        //
        // one option that was explored was replacing % with ^% - i.e. %var% => ^%var^%. this hack would
        // often work, since it is unlikely that var^ would exist, and the ^ character is removed when the
        // variable is used. the problem, however, is that ^ is not removed when %* is used to pass the args
        // to an external program.
        //
        // an unexplored potential solution for the % escaping problem, is to create a wrapper .cmd file.
        // % can be escaped within a .cmd file.
        let reverse = '"';
        let quoteHit = true;
        for (let i = arg.length; i > 0; i--) {
            // walk the string in reverse
            reverse += arg[i - 1];
            if (quoteHit && arg[i - 1] === '\\') {
                reverse += '\\'; // double the slash
            }
            else if (arg[i - 1] === '"') {
                quoteHit = true;
                reverse += '"'; // double the quote
            }
            else {
                quoteHit = false;
            }
        }
        reverse += '"';
        return reverse
            .split('')
            .reverse()
            .join('');
    }
    _uvQuoteCmdArg(arg) {
        // Tool runner wraps child_process.spawn() and needs to apply the same quoting as
        // Node in certain cases where the undocumented spawn option windowsVerbatimArguments
        // is used.
        //
        // Since this function is a port of quote_cmd_arg from Node 4.x (technically, lib UV,
        // see https://github.com/nodejs/node/blob/v4.x/deps/uv/src/win/process.c for details),
        // pasting copyright notice from Node within this function:
        //
        //      Copyright Joyent, Inc. and other Node contributors. All rights reserved.
        //
        //      Permission is hereby granted, free of charge, to any person obtaining a copy
        //      of this software and associated documentation files (the "Software"), to
        //      deal in the Software without restriction, including without limitation the
        //      rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
        //      sell copies of the Software, and to permit persons to whom the Software is
        //      furnished to do so, subject to the following conditions:
        //
        //      The above copyright notice and this permission notice shall be included in
        //      all copies or substantial portions of the Software.
        //
        //      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
        //      IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
        //      FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
        //      AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
        //      LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
        //      FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
        //      IN THE SOFTWARE.
        if (!arg) {
            // Need double quotation for empty argument
            return '""';
        }
        if (!arg.includes(' ') && !arg.includes('\t') && !arg.includes('"')) {
            // No quotation needed
            return arg;
        }
        if (!arg.includes('"') && !arg.includes('\\')) {
            // No embedded double quotes or backslashes, so I can just wrap
            // quote marks around the whole thing.
            return `"${arg}"`;
        }
        // Expected input/output:
        //   input : hello"world
        //   output: "hello\"world"
        //   input : hello""world
        //   output: "hello\"\"world"
        //   input : hello\world
        //   output: hello\world
        //   input : hello\\world
        //   output: hello\\world
        //   input : hello\"world
        //   output: "hello\\\"world"
        //   input : hello\\"world
        //   output: "hello\\\\\"world"
        //   input : hello world\
        //   output: "hello world\\" - note the comment in libuv actually reads "hello world\"
        //                             but it appears the comment is wrong, it should be "hello world\\"
        let reverse = '"';
        let quoteHit = true;
        for (let i = arg.length; i > 0; i--) {
            // walk the string in reverse
            reverse += arg[i - 1];
            if (quoteHit && arg[i - 1] === '\\') {
                reverse += '\\';
            }
            else if (arg[i - 1] === '"') {
                quoteHit = true;
                reverse += '\\';
            }
            else {
                quoteHit = false;
            }
        }
        reverse += '"';
        return reverse
            .split('')
            .reverse()
            .join('');
    }
    _cloneExecOptions(options) {
        options = options || {};
        const result = {
            cwd: options.cwd || process.cwd(),
            env: options.env || process.env,
            silent: options.silent || false,
            windowsVerbatimArguments: options.windowsVerbatimArguments || false,
            failOnStdErr: options.failOnStdErr || false,
            ignoreReturnCode: options.ignoreReturnCode || false,
            delay: options.delay || 10000
        };
        result.outStream = options.outStream || process.stdout;
        result.errStream = options.errStream || process.stderr;
        return result;
    }
    _getSpawnOptions(options, toolPath) {
        options = options || {};
        const result = {};
        result.cwd = options.cwd;
        result.env = options.env;
        result['windowsVerbatimArguments'] =
            options.windowsVerbatimArguments || this._isCmdFile();
        if (options.windowsVerbatimArguments) {
            result.argv0 = `"${toolPath}"`;
        }
        return result;
    }
    /**
     * Exec a tool.
     * Output will be streamed to the live console.
     * Returns promise with return code
     *
     * @param     tool     path to tool to exec
     * @param     options  optional exec options.  See ExecOptions
     * @returns   number
     */
    exec() {
        return __awaiter(this, void 0, void 0, function* () {
            // root the tool path if it is unrooted and contains relative pathing
            if (!ioUtil.isRooted(this.toolPath) &&
                (this.toolPath.includes('/') ||
                    (IS_WINDOWS && this.toolPath.includes('\\')))) {
                // prefer options.cwd if it is specified, however options.cwd may also need to be rooted
                this.toolPath = path.resolve(process.cwd(), this.options.cwd || process.cwd(), this.toolPath);
            }
            // if the tool is only a file name, then resolve it from the PATH
            // otherwise verify it exists (add extension on Windows if necessary)
            this.toolPath = yield io.which(this.toolPath, true);
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                this._debug(`exec tool: ${this.toolPath}`);
                this._debug('arguments:');
                for (const arg of this.args) {
                    this._debug(`   ${arg}`);
                }
                const optionsNonNull = this._cloneExecOptions(this.options);
                if (!optionsNonNull.silent && optionsNonNull.outStream) {
                    optionsNonNull.outStream.write(this._getCommandString(optionsNonNull) + os.EOL);
                }
                const state = new ExecState(optionsNonNull, this.toolPath);
                state.on('debug', (message) => {
                    this._debug(message);
                });
                if (this.options.cwd && !(yield ioUtil.exists(this.options.cwd))) {
                    return reject(new Error(`The cwd: ${this.options.cwd} does not exist!`));
                }
                const fileName = this._getSpawnFileName();
                const cp = child.spawn(fileName, this._getSpawnArgs(optionsNonNull), this._getSpawnOptions(this.options, fileName));
                let stdbuffer = '';
                if (cp.stdout) {
                    cp.stdout.on('data', (data) => {
                        if (this.options.listeners && this.options.listeners.stdout) {
                            this.options.listeners.stdout(data);
                        }
                        if (!optionsNonNull.silent && optionsNonNull.outStream) {
                            optionsNonNull.outStream.write(data);
                        }
                        stdbuffer = this._processLineBuffer(data, stdbuffer, (line) => {
                            if (this.options.listeners && this.options.listeners.stdline) {
                                this.options.listeners.stdline(line);
                            }
                        });
                    });
                }
                let errbuffer = '';
                if (cp.stderr) {
                    cp.stderr.on('data', (data) => {
                        state.processStderr = true;
                        if (this.options.listeners && this.options.listeners.stderr) {
                            this.options.listeners.stderr(data);
                        }
                        if (!optionsNonNull.silent &&
                            optionsNonNull.errStream &&
                            optionsNonNull.outStream) {
                            const s = optionsNonNull.failOnStdErr
                                ? optionsNonNull.errStream
                                : optionsNonNull.outStream;
                            s.write(data);
                        }
                        errbuffer = this._processLineBuffer(data, errbuffer, (line) => {
                            if (this.options.listeners && this.options.listeners.errline) {
                                this.options.listeners.errline(line);
                            }
                        });
                    });
                }
                cp.on('error', (err) => {
                    state.processError = err.message;
                    state.processExited = true;
                    state.processClosed = true;
                    state.CheckComplete();
                });
                cp.on('exit', (code) => {
                    state.processExitCode = code;
                    state.processExited = true;
                    this._debug(`Exit code ${code} received from tool '${this.toolPath}'`);
                    state.CheckComplete();
                });
                cp.on('close', (code) => {
                    state.processExitCode = code;
                    state.processExited = true;
                    state.processClosed = true;
                    this._debug(`STDIO streams have closed for tool '${this.toolPath}'`);
                    state.CheckComplete();
                });
                state.on('done', (error, exitCode) => {
                    if (stdbuffer.length > 0) {
                        this.emit('stdline', stdbuffer);
                    }
                    if (errbuffer.length > 0) {
                        this.emit('errline', errbuffer);
                    }
                    cp.removeAllListeners();
                    if (error) {
                        reject(error);
                    }
                    else {
                        resolve(exitCode);
                    }
                });
                if (this.options.input) {
                    if (!cp.stdin) {
                        throw new Error('child process missing stdin');
                    }
                    cp.stdin.end(this.options.input);
                }
            }));
        });
    }
}
exports.ToolRunner = ToolRunner;
/**
 * Convert an arg string to an array of args. Handles escaping
 *
 * @param    argString   string of arguments
 * @returns  string[]    array of arguments
 */
function argStringToArray(argString) {
    const args = [];
    let inQuotes = false;
    let escaped = false;
    let arg = '';
    function append(c) {
        // we only escape double quotes.
        if (escaped && c !== '"') {
            arg += '\\';
        }
        arg += c;
        escaped = false;
    }
    for (let i = 0; i < argString.length; i++) {
        const c = argString.charAt(i);
        if (c === '"') {
            if (!escaped) {
                inQuotes = !inQuotes;
            }
            else {
                append(c);
            }
            continue;
        }
        if (c === '\\' && escaped) {
            append(c);
            continue;
        }
        if (c === '\\' && inQuotes) {
            escaped = true;
            continue;
        }
        if (c === ' ' && !inQuotes) {
            if (arg.length > 0) {
                args.push(arg);
                arg = '';
            }
            continue;
        }
        append(c);
    }
    if (arg.length > 0) {
        args.push(arg.trim());
    }
    return args;
}
exports.argStringToArray = argStringToArray;
class ExecState extends events.EventEmitter {
    constructor(options, toolPath) {
        super();
        this.processClosed = false; // tracks whether the process has exited and stdio is closed
        this.processError = '';
        this.processExitCode = 0;
        this.processExited = false; // tracks whether the process has exited
        this.processStderr = false; // tracks whether stderr was written to
        this.delay = 10000; // 10 seconds
        this.done = false;
        this.timeout = null;
        if (!toolPath) {
            throw new Error('toolPath must not be empty');
        }
        this.options = options;
        this.toolPath = toolPath;
        if (options.delay) {
            this.delay = options.delay;
        }
    }
    CheckComplete() {
        if (this.done) {
            return;
        }
        if (this.processClosed) {
            this._setResult();
        }
        else if (this.processExited) {
            this.timeout = timers_1.setTimeout(ExecState.HandleTimeout, this.delay, this);
        }
    }
    _debug(message) {
        this.emit('debug', message);
    }
    _setResult() {
        // determine whether there is an error
        let error;
        if (this.processExited) {
            if (this.processError) {
                error = new Error(`There was an error when attempting to execute the process '${this.toolPath}'. This may indicate the process failed to start. Error: ${this.processError}`);
            }
            else if (this.processExitCode !== 0 && !this.options.ignoreReturnCode) {
                error = new Error(`The process '${this.toolPath}' failed with exit code ${this.processExitCode}`);
            }
            else if (this.processStderr && this.options.failOnStdErr) {
                error = new Error(`The process '${this.toolPath}' failed because one or more lines were written to the STDERR stream`);
            }
        }
        // clear the timeout
        if (this.timeout) {
            clearTimeout(this.timeout);
            this.timeout = null;
        }
        this.done = true;
        this.emit('done', error, this.processExitCode);
    }
    static HandleTimeout(state) {
        if (state.done) {
            return;
        }
        if (!state.processClosed && state.processExited) {
            const message = `The STDIO streams did not close within ${state.delay /
                1000} seconds of the exit event from process '${state.toolPath}'. This may indicate a child process inherited the STDIO streams and has not yet exited.`;
            state._debug(message);
        }
        state._setResult();
    }
}
//# sourceMappingURL=toolrunner.js.map

/***/ }),

/***/ 7120:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
const assert_1 = __nccwpck_require__(2613);
const fs = __nccwpck_require__(9896);
const path = __nccwpck_require__(6928);
_a = fs.promises, exports.chmod = _a.chmod, exports.copyFile = _a.copyFile, exports.lstat = _a.lstat, exports.mkdir = _a.mkdir, exports.readdir = _a.readdir, exports.readlink = _a.readlink, exports.rename = _a.rename, exports.rmdir = _a.rmdir, exports.stat = _a.stat, exports.symlink = _a.symlink, exports.unlink = _a.unlink;
exports.IS_WINDOWS = process.platform === 'win32';
function exists(fsPath) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield exports.stat(fsPath);
        }
        catch (err) {
            if (err.code === 'ENOENT') {
                return false;
            }
            throw err;
        }
        return true;
    });
}
exports.exists = exists;
function isDirectory(fsPath, useStat = false) {
    return __awaiter(this, void 0, void 0, function* () {
        const stats = useStat ? yield exports.stat(fsPath) : yield exports.lstat(fsPath);
        return stats.isDirectory();
    });
}
exports.isDirectory = isDirectory;
/**
 * On OSX/Linux, true if path starts with '/'. On Windows, true for paths like:
 * \, \hello, \\hello\share, C:, and C:\hello (and corresponding alternate separator cases).
 */
function isRooted(p) {
    p = normalizeSeparators(p);
    if (!p) {
        throw new Error('isRooted() parameter "p" cannot be empty');
    }
    if (exports.IS_WINDOWS) {
        return (p.startsWith('\\') || /^[A-Z]:/i.test(p) // e.g. \ or \hello or \\hello
        ); // e.g. C: or C:\hello
    }
    return p.startsWith('/');
}
exports.isRooted = isRooted;
/**
 * Recursively create a directory at `fsPath`.
 *
 * This implementation is optimistic, meaning it attempts to create the full
 * path first, and backs up the path stack from there.
 *
 * @param fsPath The path to create
 * @param maxDepth The maximum recursion depth
 * @param depth The current recursion depth
 */
function mkdirP(fsPath, maxDepth = 1000, depth = 1) {
    return __awaiter(this, void 0, void 0, function* () {
        assert_1.ok(fsPath, 'a path argument must be provided');
        fsPath = path.resolve(fsPath);
        if (depth >= maxDepth)
            return exports.mkdir(fsPath);
        try {
            yield exports.mkdir(fsPath);
            return;
        }
        catch (err) {
            switch (err.code) {
                case 'ENOENT': {
                    yield mkdirP(path.dirname(fsPath), maxDepth, depth + 1);
                    yield exports.mkdir(fsPath);
                    return;
                }
                default: {
                    let stats;
                    try {
                        stats = yield exports.stat(fsPath);
                    }
                    catch (err2) {
                        throw err;
                    }
                    if (!stats.isDirectory())
                        throw err;
                }
            }
        }
    });
}
exports.mkdirP = mkdirP;
/**
 * Best effort attempt to determine whether a file exists and is executable.
 * @param filePath    file path to check
 * @param extensions  additional file extensions to try
 * @return if file exists and is executable, returns the file path. otherwise empty string.
 */
function tryGetExecutablePath(filePath, extensions) {
    return __awaiter(this, void 0, void 0, function* () {
        let stats = undefined;
        try {
            // test file exists
            stats = yield exports.stat(filePath);
        }
        catch (err) {
            if (err.code !== 'ENOENT') {
                // eslint-disable-next-line no-console
                console.log(`Unexpected error attempting to determine if executable file exists '${filePath}': ${err}`);
            }
        }
        if (stats && stats.isFile()) {
            if (exports.IS_WINDOWS) {
                // on Windows, test for valid extension
                const upperExt = path.extname(filePath).toUpperCase();
                if (extensions.some(validExt => validExt.toUpperCase() === upperExt)) {
                    return filePath;
                }
            }
            else {
                if (isUnixExecutable(stats)) {
                    return filePath;
                }
            }
        }
        // try each extension
        const originalFilePath = filePath;
        for (const extension of extensions) {
            filePath = originalFilePath + extension;
            stats = undefined;
            try {
                stats = yield exports.stat(filePath);
            }
            catch (err) {
                if (err.code !== 'ENOENT') {
                    // eslint-disable-next-line no-console
                    console.log(`Unexpected error attempting to determine if executable file exists '${filePath}': ${err}`);
                }
            }
            if (stats && stats.isFile()) {
                if (exports.IS_WINDOWS) {
                    // preserve the case of the actual file (since an extension was appended)
                    try {
                        const directory = path.dirname(filePath);
                        const upperName = path.basename(filePath).toUpperCase();
                        for (const actualName of yield exports.readdir(directory)) {
                            if (upperName === actualName.toUpperCase()) {
                                filePath = path.join(directory, actualName);
                                break;
                            }
                        }
                    }
                    catch (err) {
                        // eslint-disable-next-line no-console
                        console.log(`Unexpected error attempting to determine the actual case of the file '${filePath}': ${err}`);
                    }
                    return filePath;
                }
                else {
                    if (isUnixExecutable(stats)) {
                        return filePath;
                    }
                }
            }
        }
        return '';
    });
}
exports.tryGetExecutablePath = tryGetExecutablePath;
function normalizeSeparators(p) {
    p = p || '';
    if (exports.IS_WINDOWS) {
        // convert slashes on Windows
        p = p.replace(/\//g, '\\');
        // remove redundant slashes
        return p.replace(/\\\\+/g, '\\');
    }
    // remove redundant slashes
    return p.replace(/\/\/+/g, '/');
}
// on Mac/Linux, test the execute bit
//     R   W  X  R  W X R W X
//   256 128 64 32 16 8 4 2 1
function isUnixExecutable(stats) {
    return ((stats.mode & 1) > 0 ||
        ((stats.mode & 8) > 0 && stats.gid === process.getgid()) ||
        ((stats.mode & 64) > 0 && stats.uid === process.getuid()));
}
//# sourceMappingURL=io-util.js.map

/***/ }),

/***/ 8191:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const childProcess = __nccwpck_require__(5317);
const path = __nccwpck_require__(6928);
const util_1 = __nccwpck_require__(9023);
const ioUtil = __nccwpck_require__(7120);
const exec = util_1.promisify(childProcess.exec);
/**
 * Copies a file or folder.
 * Based off of shelljs - https://github.com/shelljs/shelljs/blob/9237f66c52e5daa40458f94f9565e18e8132f5a6/src/cp.js
 *
 * @param     source    source path
 * @param     dest      destination path
 * @param     options   optional. See CopyOptions.
 */
function cp(source, dest, options = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        const { force, recursive } = readCopyOptions(options);
        const destStat = (yield ioUtil.exists(dest)) ? yield ioUtil.stat(dest) : null;
        // Dest is an existing file, but not forcing
        if (destStat && destStat.isFile() && !force) {
            return;
        }
        // If dest is an existing directory, should copy inside.
        const newDest = destStat && destStat.isDirectory()
            ? path.join(dest, path.basename(source))
            : dest;
        if (!(yield ioUtil.exists(source))) {
            throw new Error(`no such file or directory: ${source}`);
        }
        const sourceStat = yield ioUtil.stat(source);
        if (sourceStat.isDirectory()) {
            if (!recursive) {
                throw new Error(`Failed to copy. ${source} is a directory, but tried to copy without recursive flag.`);
            }
            else {
                yield cpDirRecursive(source, newDest, 0, force);
            }
        }
        else {
            if (path.relative(source, newDest) === '') {
                // a file cannot be copied to itself
                throw new Error(`'${newDest}' and '${source}' are the same file`);
            }
            yield copyFile(source, newDest, force);
        }
    });
}
exports.cp = cp;
/**
 * Moves a path.
 *
 * @param     source    source path
 * @param     dest      destination path
 * @param     options   optional. See MoveOptions.
 */
function mv(source, dest, options = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        if (yield ioUtil.exists(dest)) {
            let destExists = true;
            if (yield ioUtil.isDirectory(dest)) {
                // If dest is directory copy src into dest
                dest = path.join(dest, path.basename(source));
                destExists = yield ioUtil.exists(dest);
            }
            if (destExists) {
                if (options.force == null || options.force) {
                    yield rmRF(dest);
                }
                else {
                    throw new Error('Destination already exists');
                }
            }
        }
        yield mkdirP(path.dirname(dest));
        yield ioUtil.rename(source, dest);
    });
}
exports.mv = mv;
/**
 * Remove a path recursively with force
 *
 * @param inputPath path to remove
 */
function rmRF(inputPath) {
    return __awaiter(this, void 0, void 0, function* () {
        if (ioUtil.IS_WINDOWS) {
            // Node doesn't provide a delete operation, only an unlink function. This means that if the file is being used by another
            // program (e.g. antivirus), it won't be deleted. To address this, we shell out the work to rd/del.
            try {
                if (yield ioUtil.isDirectory(inputPath, true)) {
                    yield exec(`rd /s /q "${inputPath}"`);
                }
                else {
                    yield exec(`del /f /a "${inputPath}"`);
                }
            }
            catch (err) {
                // if you try to delete a file that doesn't exist, desired result is achieved
                // other errors are valid
                if (err.code !== 'ENOENT')
                    throw err;
            }
            // Shelling out fails to remove a symlink folder with missing source, this unlink catches that
            try {
                yield ioUtil.unlink(inputPath);
            }
            catch (err) {
                // if you try to delete a file that doesn't exist, desired result is achieved
                // other errors are valid
                if (err.code !== 'ENOENT')
                    throw err;
            }
        }
        else {
            let isDir = false;
            try {
                isDir = yield ioUtil.isDirectory(inputPath);
            }
            catch (err) {
                // if you try to delete a file that doesn't exist, desired result is achieved
                // other errors are valid
                if (err.code !== 'ENOENT')
                    throw err;
                return;
            }
            if (isDir) {
                yield exec(`rm -rf "${inputPath}"`);
            }
            else {
                yield ioUtil.unlink(inputPath);
            }
        }
    });
}
exports.rmRF = rmRF;
/**
 * Make a directory.  Creates the full path with folders in between
 * Will throw if it fails
 *
 * @param   fsPath        path to create
 * @returns Promise<void>
 */
function mkdirP(fsPath) {
    return __awaiter(this, void 0, void 0, function* () {
        yield ioUtil.mkdirP(fsPath);
    });
}
exports.mkdirP = mkdirP;
/**
 * Returns path of a tool had the tool actually been invoked.  Resolves via paths.
 * If you check and the tool does not exist, it will throw.
 *
 * @param     tool              name of the tool
 * @param     check             whether to check if tool exists
 * @returns   Promise<string>   path to tool
 */
function which(tool, check) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!tool) {
            throw new Error("parameter 'tool' is required");
        }
        // recursive when check=true
        if (check) {
            const result = yield which(tool, false);
            if (!result) {
                if (ioUtil.IS_WINDOWS) {
                    throw new Error(`Unable to locate executable file: ${tool}. Please verify either the file path exists or the file can be found within a directory specified by the PATH environment variable. Also verify the file has a valid extension for an executable file.`);
                }
                else {
                    throw new Error(`Unable to locate executable file: ${tool}. Please verify either the file path exists or the file can be found within a directory specified by the PATH environment variable. Also check the file mode to verify the file is executable.`);
                }
            }
        }
        try {
            // build the list of extensions to try
            const extensions = [];
            if (ioUtil.IS_WINDOWS && process.env.PATHEXT) {
                for (const extension of process.env.PATHEXT.split(path.delimiter)) {
                    if (extension) {
                        extensions.push(extension);
                    }
                }
            }
            // if it's rooted, return it if exists. otherwise return empty.
            if (ioUtil.isRooted(tool)) {
                const filePath = yield ioUtil.tryGetExecutablePath(tool, extensions);
                if (filePath) {
                    return filePath;
                }
                return '';
            }
            // if any path separators, return empty
            if (tool.includes('/') || (ioUtil.IS_WINDOWS && tool.includes('\\'))) {
                return '';
            }
            // build the list of directories
            //
            // Note, technically "where" checks the current directory on Windows. From a toolkit perspective,
            // it feels like we should not do this. Checking the current directory seems like more of a use
            // case of a shell, and the which() function exposed by the toolkit should strive for consistency
            // across platforms.
            const directories = [];
            if (process.env.PATH) {
                for (const p of process.env.PATH.split(path.delimiter)) {
                    if (p) {
                        directories.push(p);
                    }
                }
            }
            // return the first match
            for (const directory of directories) {
                const filePath = yield ioUtil.tryGetExecutablePath(directory + path.sep + tool, extensions);
                if (filePath) {
                    return filePath;
                }
            }
            return '';
        }
        catch (err) {
            throw new Error(`which failed with message ${err.message}`);
        }
    });
}
exports.which = which;
function readCopyOptions(options) {
    const force = options.force == null ? true : options.force;
    const recursive = Boolean(options.recursive);
    return { force, recursive };
}
function cpDirRecursive(sourceDir, destDir, currentDepth, force) {
    return __awaiter(this, void 0, void 0, function* () {
        // Ensure there is not a run away recursive copy
        if (currentDepth >= 255)
            return;
        currentDepth++;
        yield mkdirP(destDir);
        const files = yield ioUtil.readdir(sourceDir);
        for (const fileName of files) {
            const srcFile = `${sourceDir}/${fileName}`;
            const destFile = `${destDir}/${fileName}`;
            const srcFileStat = yield ioUtil.lstat(srcFile);
            if (srcFileStat.isDirectory()) {
                // Recurse
                yield cpDirRecursive(srcFile, destFile, currentDepth, force);
            }
            else {
                yield copyFile(srcFile, destFile, force);
            }
        }
        // Change the mode for the newly created directory
        yield ioUtil.chmod(destDir, (yield ioUtil.stat(sourceDir)).mode);
    });
}
// Buffered file copy
function copyFile(srcFile, destFile, force) {
    return __awaiter(this, void 0, void 0, function* () {
        if ((yield ioUtil.lstat(srcFile)).isSymbolicLink()) {
            // unlink/re-link it
            try {
                yield ioUtil.lstat(destFile);
                yield ioUtil.unlink(destFile);
            }
            catch (e) {
                // Try to override file permission
                if (e.code === 'EPERM') {
                    yield ioUtil.chmod(destFile, '0666');
                    yield ioUtil.unlink(destFile);
                }
                // other errors = it doesn't exist, no work to do
            }
            // Copy over symlink
            const symlinkFull = yield ioUtil.readlink(srcFile);
            yield ioUtil.symlink(symlinkFull, destFile, ioUtil.IS_WINDOWS ? 'junction' : null);
        }
        else if (!(yield ioUtil.exists(destFile)) || force) {
            yield ioUtil.copyFile(srcFile, destFile);
        }
    });
}
//# sourceMappingURL=io.js.map

/***/ }),

/***/ 1648:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const fs_1 = __nccwpck_require__(9896);
const os_1 = __nccwpck_require__(857);
class Context {
    /**
     * Hydrate the context from the environment
     */
    constructor() {
        this.payload = {};
        if (process.env.GITHUB_EVENT_PATH) {
            if (fs_1.existsSync(process.env.GITHUB_EVENT_PATH)) {
                this.payload = JSON.parse(fs_1.readFileSync(process.env.GITHUB_EVENT_PATH, { encoding: 'utf8' }));
            }
            else {
                const path = process.env.GITHUB_EVENT_PATH;
                process.stdout.write(`GITHUB_EVENT_PATH ${path} does not exist${os_1.EOL}`);
            }
        }
        this.eventName = process.env.GITHUB_EVENT_NAME;
        this.sha = process.env.GITHUB_SHA;
        this.ref = process.env.GITHUB_REF;
        this.workflow = process.env.GITHUB_WORKFLOW;
        this.action = process.env.GITHUB_ACTION;
        this.actor = process.env.GITHUB_ACTOR;
    }
    get issue() {
        const payload = this.payload;
        return Object.assign(Object.assign({}, this.repo), { number: (payload.issue || payload.pull_request || payload).number });
    }
    get repo() {
        if (process.env.GITHUB_REPOSITORY) {
            const [owner, repo] = process.env.GITHUB_REPOSITORY.split('/');
            return { owner, repo };
        }
        if (this.payload.repository) {
            return {
                owner: this.payload.repository.owner.login,
                repo: this.payload.repository.name
            };
        }
        throw new Error("context.repo requires a GITHUB_REPOSITORY environment variable like 'owner/repo'");
    }
}
exports.Context = Context;
//# sourceMappingURL=context.js.map

/***/ }),

/***/ 3228:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
// Originally pulled from https://github.com/JasonEtco/actions-toolkit/blob/master/src/github.ts
const graphql_1 = __nccwpck_require__(7);
const rest_1 = __nccwpck_require__(1148);
const Context = __importStar(__nccwpck_require__(1648));
const httpClient = __importStar(__nccwpck_require__(4939));
// We need this in order to extend Octokit
rest_1.Octokit.prototype = new rest_1.Octokit();
exports.context = new Context.Context();
class GitHub extends rest_1.Octokit {
    constructor(token, opts) {
        super(GitHub.getOctokitOptions(GitHub.disambiguate(token, opts)));
        this.graphql = GitHub.getGraphQL(GitHub.disambiguate(token, opts));
    }
    /**
     * Disambiguates the constructor overload parameters
     */
    static disambiguate(token, opts) {
        return [
            typeof token === 'string' ? token : '',
            typeof token === 'object' ? token : opts || {}
        ];
    }
    static getOctokitOptions(args) {
        const token = args[0];
        const options = Object.assign({}, args[1]); // Shallow clone - don't mutate the object provided by the caller
        // Base URL - GHES or Dotcom
        options.baseUrl = options.baseUrl || this.getApiBaseUrl();
        // Auth
        const auth = GitHub.getAuthString(token, options);
        if (auth) {
            options.auth = auth;
        }
        // Proxy
        const agent = GitHub.getProxyAgent(options.baseUrl, options);
        if (agent) {
            // Shallow clone - don't mutate the object provided by the caller
            options.request = options.request ? Object.assign({}, options.request) : {};
            // Set the agent
            options.request.agent = agent;
        }
        return options;
    }
    static getGraphQL(args) {
        const defaults = {};
        defaults.baseUrl = this.getGraphQLBaseUrl();
        const token = args[0];
        const options = args[1];
        // Authorization
        const auth = this.getAuthString(token, options);
        if (auth) {
            defaults.headers = {
                authorization: auth
            };
        }
        // Proxy
        const agent = GitHub.getProxyAgent(defaults.baseUrl, options);
        if (agent) {
            defaults.request = { agent };
        }
        return graphql_1.graphql.defaults(defaults);
    }
    static getAuthString(token, options) {
        // Validate args
        if (!token && !options.auth) {
            throw new Error('Parameter token or opts.auth is required');
        }
        else if (token && options.auth) {
            throw new Error('Parameters token and opts.auth may not both be specified');
        }
        return typeof options.auth === 'string' ? options.auth : `token ${token}`;
    }
    static getProxyAgent(destinationUrl, options) {
        var _a;
        if (!((_a = options.request) === null || _a === void 0 ? void 0 : _a.agent)) {
            if (httpClient.getProxyUrl(destinationUrl)) {
                const hc = new httpClient.HttpClient();
                return hc.getAgent(destinationUrl);
            }
        }
        return undefined;
    }
    static getApiBaseUrl() {
        return process.env['GITHUB_API_URL'] || 'https://api.github.com';
    }
    static getGraphQLBaseUrl() {
        let url = process.env['GITHUB_GRAPHQL_URL'] || 'https://api.github.com/graphql';
        // Shouldn't be a trailing slash, but remove if so
        if (url.endsWith('/')) {
            url = url.substr(0, url.length - 1);
        }
        // Remove trailing "/graphql"
        if (url.toUpperCase().endsWith('/GRAPHQL')) {
            url = url.substr(0, url.length - '/graphql'.length);
        }
        return url;
    }
}
exports.GitHub = GitHub;
//# sourceMappingURL=github.js.map

/***/ }),

/***/ 4939:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const url = __nccwpck_require__(7016);
const http = __nccwpck_require__(8611);
const https = __nccwpck_require__(5692);
const pm = __nccwpck_require__(4759);
let tunnel;
var HttpCodes;
(function (HttpCodes) {
    HttpCodes[HttpCodes["OK"] = 200] = "OK";
    HttpCodes[HttpCodes["MultipleChoices"] = 300] = "MultipleChoices";
    HttpCodes[HttpCodes["MovedPermanently"] = 301] = "MovedPermanently";
    HttpCodes[HttpCodes["ResourceMoved"] = 302] = "ResourceMoved";
    HttpCodes[HttpCodes["SeeOther"] = 303] = "SeeOther";
    HttpCodes[HttpCodes["NotModified"] = 304] = "NotModified";
    HttpCodes[HttpCodes["UseProxy"] = 305] = "UseProxy";
    HttpCodes[HttpCodes["SwitchProxy"] = 306] = "SwitchProxy";
    HttpCodes[HttpCodes["TemporaryRedirect"] = 307] = "TemporaryRedirect";
    HttpCodes[HttpCodes["PermanentRedirect"] = 308] = "PermanentRedirect";
    HttpCodes[HttpCodes["BadRequest"] = 400] = "BadRequest";
    HttpCodes[HttpCodes["Unauthorized"] = 401] = "Unauthorized";
    HttpCodes[HttpCodes["PaymentRequired"] = 402] = "PaymentRequired";
    HttpCodes[HttpCodes["Forbidden"] = 403] = "Forbidden";
    HttpCodes[HttpCodes["NotFound"] = 404] = "NotFound";
    HttpCodes[HttpCodes["MethodNotAllowed"] = 405] = "MethodNotAllowed";
    HttpCodes[HttpCodes["NotAcceptable"] = 406] = "NotAcceptable";
    HttpCodes[HttpCodes["ProxyAuthenticationRequired"] = 407] = "ProxyAuthenticationRequired";
    HttpCodes[HttpCodes["RequestTimeout"] = 408] = "RequestTimeout";
    HttpCodes[HttpCodes["Conflict"] = 409] = "Conflict";
    HttpCodes[HttpCodes["Gone"] = 410] = "Gone";
    HttpCodes[HttpCodes["TooManyRequests"] = 429] = "TooManyRequests";
    HttpCodes[HttpCodes["InternalServerError"] = 500] = "InternalServerError";
    HttpCodes[HttpCodes["NotImplemented"] = 501] = "NotImplemented";
    HttpCodes[HttpCodes["BadGateway"] = 502] = "BadGateway";
    HttpCodes[HttpCodes["ServiceUnavailable"] = 503] = "ServiceUnavailable";
    HttpCodes[HttpCodes["GatewayTimeout"] = 504] = "GatewayTimeout";
})(HttpCodes = exports.HttpCodes || (exports.HttpCodes = {}));
var Headers;
(function (Headers) {
    Headers["Accept"] = "accept";
    Headers["ContentType"] = "content-type";
})(Headers = exports.Headers || (exports.Headers = {}));
var MediaTypes;
(function (MediaTypes) {
    MediaTypes["ApplicationJson"] = "application/json";
})(MediaTypes = exports.MediaTypes || (exports.MediaTypes = {}));
/**
 * Returns the proxy URL, depending upon the supplied url and proxy environment variables.
 * @param serverUrl  The server URL where the request will be sent. For example, https://api.github.com
 */
function getProxyUrl(serverUrl) {
    let proxyUrl = pm.getProxyUrl(url.parse(serverUrl));
    return proxyUrl ? proxyUrl.href : '';
}
exports.getProxyUrl = getProxyUrl;
const HttpRedirectCodes = [
    HttpCodes.MovedPermanently,
    HttpCodes.ResourceMoved,
    HttpCodes.SeeOther,
    HttpCodes.TemporaryRedirect,
    HttpCodes.PermanentRedirect
];
const HttpResponseRetryCodes = [
    HttpCodes.BadGateway,
    HttpCodes.ServiceUnavailable,
    HttpCodes.GatewayTimeout
];
const RetryableHttpVerbs = ['OPTIONS', 'GET', 'DELETE', 'HEAD'];
const ExponentialBackoffCeiling = 10;
const ExponentialBackoffTimeSlice = 5;
class HttpClientResponse {
    constructor(message) {
        this.message = message;
    }
    readBody() {
        return new Promise(async (resolve, reject) => {
            let output = Buffer.alloc(0);
            this.message.on('data', (chunk) => {
                output = Buffer.concat([output, chunk]);
            });
            this.message.on('end', () => {
                resolve(output.toString());
            });
        });
    }
}
exports.HttpClientResponse = HttpClientResponse;
function isHttps(requestUrl) {
    let parsedUrl = url.parse(requestUrl);
    return parsedUrl.protocol === 'https:';
}
exports.isHttps = isHttps;
class HttpClient {
    constructor(userAgent, handlers, requestOptions) {
        this._ignoreSslError = false;
        this._allowRedirects = true;
        this._allowRedirectDowngrade = false;
        this._maxRedirects = 50;
        this._allowRetries = false;
        this._maxRetries = 1;
        this._keepAlive = false;
        this._disposed = false;
        this.userAgent = userAgent;
        this.handlers = handlers || [];
        this.requestOptions = requestOptions;
        if (requestOptions) {
            if (requestOptions.ignoreSslError != null) {
                this._ignoreSslError = requestOptions.ignoreSslError;
            }
            this._socketTimeout = requestOptions.socketTimeout;
            if (requestOptions.allowRedirects != null) {
                this._allowRedirects = requestOptions.allowRedirects;
            }
            if (requestOptions.allowRedirectDowngrade != null) {
                this._allowRedirectDowngrade = requestOptions.allowRedirectDowngrade;
            }
            if (requestOptions.maxRedirects != null) {
                this._maxRedirects = Math.max(requestOptions.maxRedirects, 0);
            }
            if (requestOptions.keepAlive != null) {
                this._keepAlive = requestOptions.keepAlive;
            }
            if (requestOptions.allowRetries != null) {
                this._allowRetries = requestOptions.allowRetries;
            }
            if (requestOptions.maxRetries != null) {
                this._maxRetries = requestOptions.maxRetries;
            }
        }
    }
    options(requestUrl, additionalHeaders) {
        return this.request('OPTIONS', requestUrl, null, additionalHeaders || {});
    }
    get(requestUrl, additionalHeaders) {
        return this.request('GET', requestUrl, null, additionalHeaders || {});
    }
    del(requestUrl, additionalHeaders) {
        return this.request('DELETE', requestUrl, null, additionalHeaders || {});
    }
    post(requestUrl, data, additionalHeaders) {
        return this.request('POST', requestUrl, data, additionalHeaders || {});
    }
    patch(requestUrl, data, additionalHeaders) {
        return this.request('PATCH', requestUrl, data, additionalHeaders || {});
    }
    put(requestUrl, data, additionalHeaders) {
        return this.request('PUT', requestUrl, data, additionalHeaders || {});
    }
    head(requestUrl, additionalHeaders) {
        return this.request('HEAD', requestUrl, null, additionalHeaders || {});
    }
    sendStream(verb, requestUrl, stream, additionalHeaders) {
        return this.request(verb, requestUrl, stream, additionalHeaders);
    }
    /**
     * Gets a typed object from an endpoint
     * Be aware that not found returns a null.  Other errors (4xx, 5xx) reject the promise
     */
    async getJson(requestUrl, additionalHeaders = {}) {
        additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
        let res = await this.get(requestUrl, additionalHeaders);
        return this._processResponse(res, this.requestOptions);
    }
    async postJson(requestUrl, obj, additionalHeaders = {}) {
        let data = JSON.stringify(obj, null, 2);
        additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
        additionalHeaders[Headers.ContentType] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.ContentType, MediaTypes.ApplicationJson);
        let res = await this.post(requestUrl, data, additionalHeaders);
        return this._processResponse(res, this.requestOptions);
    }
    async putJson(requestUrl, obj, additionalHeaders = {}) {
        let data = JSON.stringify(obj, null, 2);
        additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
        additionalHeaders[Headers.ContentType] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.ContentType, MediaTypes.ApplicationJson);
        let res = await this.put(requestUrl, data, additionalHeaders);
        return this._processResponse(res, this.requestOptions);
    }
    async patchJson(requestUrl, obj, additionalHeaders = {}) {
        let data = JSON.stringify(obj, null, 2);
        additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
        additionalHeaders[Headers.ContentType] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.ContentType, MediaTypes.ApplicationJson);
        let res = await this.patch(requestUrl, data, additionalHeaders);
        return this._processResponse(res, this.requestOptions);
    }
    /**
     * Makes a raw http request.
     * All other methods such as get, post, patch, and request ultimately call this.
     * Prefer get, del, post and patch
     */
    async request(verb, requestUrl, data, headers) {
        if (this._disposed) {
            throw new Error('Client has already been disposed.');
        }
        let parsedUrl = url.parse(requestUrl);
        let info = this._prepareRequest(verb, parsedUrl, headers);
        // Only perform retries on reads since writes may not be idempotent.
        let maxTries = this._allowRetries && RetryableHttpVerbs.indexOf(verb) != -1
            ? this._maxRetries + 1
            : 1;
        let numTries = 0;
        let response;
        while (numTries < maxTries) {
            response = await this.requestRaw(info, data);
            // Check if it's an authentication challenge
            if (response &&
                response.message &&
                response.message.statusCode === HttpCodes.Unauthorized) {
                let authenticationHandler;
                for (let i = 0; i < this.handlers.length; i++) {
                    if (this.handlers[i].canHandleAuthentication(response)) {
                        authenticationHandler = this.handlers[i];
                        break;
                    }
                }
                if (authenticationHandler) {
                    return authenticationHandler.handleAuthentication(this, info, data);
                }
                else {
                    // We have received an unauthorized response but have no handlers to handle it.
                    // Let the response return to the caller.
                    return response;
                }
            }
            let redirectsRemaining = this._maxRedirects;
            while (HttpRedirectCodes.indexOf(response.message.statusCode) != -1 &&
                this._allowRedirects &&
                redirectsRemaining > 0) {
                const redirectUrl = response.message.headers['location'];
                if (!redirectUrl) {
                    // if there's no location to redirect to, we won't
                    break;
                }
                let parsedRedirectUrl = url.parse(redirectUrl);
                if (parsedUrl.protocol == 'https:' &&
                    parsedUrl.protocol != parsedRedirectUrl.protocol &&
                    !this._allowRedirectDowngrade) {
                    throw new Error('Redirect from HTTPS to HTTP protocol. This downgrade is not allowed for security reasons. If you want to allow this behavior, set the allowRedirectDowngrade option to true.');
                }
                // we need to finish reading the response before reassigning response
                // which will leak the open socket.
                await response.readBody();
                // strip authorization header if redirected to a different hostname
                if (parsedRedirectUrl.hostname !== parsedUrl.hostname) {
                    for (let header in headers) {
                        // header names are case insensitive
                        if (header.toLowerCase() === 'authorization') {
                            delete headers[header];
                        }
                    }
                }
                // let's make the request with the new redirectUrl
                info = this._prepareRequest(verb, parsedRedirectUrl, headers);
                response = await this.requestRaw(info, data);
                redirectsRemaining--;
            }
            if (HttpResponseRetryCodes.indexOf(response.message.statusCode) == -1) {
                // If not a retry code, return immediately instead of retrying
                return response;
            }
            numTries += 1;
            if (numTries < maxTries) {
                await response.readBody();
                await this._performExponentialBackoff(numTries);
            }
        }
        return response;
    }
    /**
     * Needs to be called if keepAlive is set to true in request options.
     */
    dispose() {
        if (this._agent) {
            this._agent.destroy();
        }
        this._disposed = true;
    }
    /**
     * Raw request.
     * @param info
     * @param data
     */
    requestRaw(info, data) {
        return new Promise((resolve, reject) => {
            let callbackForResult = function (err, res) {
                if (err) {
                    reject(err);
                }
                resolve(res);
            };
            this.requestRawWithCallback(info, data, callbackForResult);
        });
    }
    /**
     * Raw request with callback.
     * @param info
     * @param data
     * @param onResult
     */
    requestRawWithCallback(info, data, onResult) {
        let socket;
        if (typeof data === 'string') {
            info.options.headers['Content-Length'] = Buffer.byteLength(data, 'utf8');
        }
        let callbackCalled = false;
        let handleResult = (err, res) => {
            if (!callbackCalled) {
                callbackCalled = true;
                onResult(err, res);
            }
        };
        let req = info.httpModule.request(info.options, (msg) => {
            let res = new HttpClientResponse(msg);
            handleResult(null, res);
        });
        req.on('socket', sock => {
            socket = sock;
        });
        // If we ever get disconnected, we want the socket to timeout eventually
        req.setTimeout(this._socketTimeout || 3 * 60000, () => {
            if (socket) {
                socket.end();
            }
            handleResult(new Error('Request timeout: ' + info.options.path), null);
        });
        req.on('error', function (err) {
            // err has statusCode property
            // res should have headers
            handleResult(err, null);
        });
        if (data && typeof data === 'string') {
            req.write(data, 'utf8');
        }
        if (data && typeof data !== 'string') {
            data.on('close', function () {
                req.end();
            });
            data.pipe(req);
        }
        else {
            req.end();
        }
    }
    /**
     * Gets an http agent. This function is useful when you need an http agent that handles
     * routing through a proxy server - depending upon the url and proxy environment variables.
     * @param serverUrl  The server URL where the request will be sent. For example, https://api.github.com
     */
    getAgent(serverUrl) {
        let parsedUrl = url.parse(serverUrl);
        return this._getAgent(parsedUrl);
    }
    _prepareRequest(method, requestUrl, headers) {
        const info = {};
        info.parsedUrl = requestUrl;
        const usingSsl = info.parsedUrl.protocol === 'https:';
        info.httpModule = usingSsl ? https : http;
        const defaultPort = usingSsl ? 443 : 80;
        info.options = {};
        info.options.host = info.parsedUrl.hostname;
        info.options.port = info.parsedUrl.port
            ? parseInt(info.parsedUrl.port)
            : defaultPort;
        info.options.path =
            (info.parsedUrl.pathname || '') + (info.parsedUrl.search || '');
        info.options.method = method;
        info.options.headers = this._mergeHeaders(headers);
        if (this.userAgent != null) {
            info.options.headers['user-agent'] = this.userAgent;
        }
        info.options.agent = this._getAgent(info.parsedUrl);
        // gives handlers an opportunity to participate
        if (this.handlers) {
            this.handlers.forEach(handler => {
                handler.prepareRequest(info.options);
            });
        }
        return info;
    }
    _mergeHeaders(headers) {
        const lowercaseKeys = obj => Object.keys(obj).reduce((c, k) => ((c[k.toLowerCase()] = obj[k]), c), {});
        if (this.requestOptions && this.requestOptions.headers) {
            return Object.assign({}, lowercaseKeys(this.requestOptions.headers), lowercaseKeys(headers));
        }
        return lowercaseKeys(headers || {});
    }
    _getExistingOrDefaultHeader(additionalHeaders, header, _default) {
        const lowercaseKeys = obj => Object.keys(obj).reduce((c, k) => ((c[k.toLowerCase()] = obj[k]), c), {});
        let clientHeader;
        if (this.requestOptions && this.requestOptions.headers) {
            clientHeader = lowercaseKeys(this.requestOptions.headers)[header];
        }
        return additionalHeaders[header] || clientHeader || _default;
    }
    _getAgent(parsedUrl) {
        let agent;
        let proxyUrl = pm.getProxyUrl(parsedUrl);
        let useProxy = proxyUrl && proxyUrl.hostname;
        if (this._keepAlive && useProxy) {
            agent = this._proxyAgent;
        }
        if (this._keepAlive && !useProxy) {
            agent = this._agent;
        }
        // if agent is already assigned use that agent.
        if (!!agent) {
            return agent;
        }
        const usingSsl = parsedUrl.protocol === 'https:';
        let maxSockets = 100;
        if (!!this.requestOptions) {
            maxSockets = this.requestOptions.maxSockets || http.globalAgent.maxSockets;
        }
        if (useProxy) {
            // If using proxy, need tunnel
            if (!tunnel) {
                tunnel = __nccwpck_require__(770);
            }
            const agentOptions = {
                maxSockets: maxSockets,
                keepAlive: this._keepAlive,
                proxy: {
                    proxyAuth: proxyUrl.auth,
                    host: proxyUrl.hostname,
                    port: proxyUrl.port
                }
            };
            let tunnelAgent;
            const overHttps = proxyUrl.protocol === 'https:';
            if (usingSsl) {
                tunnelAgent = overHttps ? tunnel.httpsOverHttps : tunnel.httpsOverHttp;
            }
            else {
                tunnelAgent = overHttps ? tunnel.httpOverHttps : tunnel.httpOverHttp;
            }
            agent = tunnelAgent(agentOptions);
            this._proxyAgent = agent;
        }
        // if reusing agent across request and tunneling agent isn't assigned create a new agent
        if (this._keepAlive && !agent) {
            const options = { keepAlive: this._keepAlive, maxSockets: maxSockets };
            agent = usingSsl ? new https.Agent(options) : new http.Agent(options);
            this._agent = agent;
        }
        // if not using private agent and tunnel agent isn't setup then use global agent
        if (!agent) {
            agent = usingSsl ? https.globalAgent : http.globalAgent;
        }
        if (usingSsl && this._ignoreSslError) {
            // we don't want to set NODE_TLS_REJECT_UNAUTHORIZED=0 since that will affect request for entire process
            // http.RequestOptions doesn't expose a way to modify RequestOptions.agent.options
            // we have to cast it to any and change it directly
            agent.options = Object.assign(agent.options || {}, {
                rejectUnauthorized: false
            });
        }
        return agent;
    }
    _performExponentialBackoff(retryNumber) {
        retryNumber = Math.min(ExponentialBackoffCeiling, retryNumber);
        const ms = ExponentialBackoffTimeSlice * Math.pow(2, retryNumber);
        return new Promise(resolve => setTimeout(() => resolve(), ms));
    }
    static dateTimeDeserializer(key, value) {
        if (typeof value === 'string') {
            let a = new Date(value);
            if (!isNaN(a.valueOf())) {
                return a;
            }
        }
        return value;
    }
    async _processResponse(res, options) {
        return new Promise(async (resolve, reject) => {
            const statusCode = res.message.statusCode;
            const response = {
                statusCode: statusCode,
                result: null,
                headers: {}
            };
            // not found leads to null obj returned
            if (statusCode == HttpCodes.NotFound) {
                resolve(response);
            }
            let obj;
            let contents;
            // get the result from the body
            try {
                contents = await res.readBody();
                if (contents && contents.length > 0) {
                    if (options && options.deserializeDates) {
                        obj = JSON.parse(contents, HttpClient.dateTimeDeserializer);
                    }
                    else {
                        obj = JSON.parse(contents);
                    }
                    response.result = obj;
                }
                response.headers = res.message.headers;
            }
            catch (err) {
                // Invalid resource (contents not json);  leaving result obj null
            }
            // note that 3xx redirects are handled by the http layer.
            if (statusCode > 299) {
                let msg;
                // if exception/error in body, attempt to get better error
                if (obj && obj.message) {
                    msg = obj.message;
                }
                else if (contents && contents.length > 0) {
                    // it may be the case that the exception is in the body message as string
                    msg = contents;
                }
                else {
                    msg = 'Failed request: (' + statusCode + ')';
                }
                let err = new Error(msg);
                // attach statusCode and body obj (if available) to the error object
                err['statusCode'] = statusCode;
                if (response.result) {
                    err['result'] = response.result;
                }
                reject(err);
            }
            else {
                resolve(response);
            }
        });
    }
}
exports.HttpClient = HttpClient;


/***/ }),

/***/ 4759:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const url = __nccwpck_require__(7016);
function getProxyUrl(reqUrl) {
    let usingSsl = reqUrl.protocol === 'https:';
    let proxyUrl;
    if (checkBypass(reqUrl)) {
        return proxyUrl;
    }
    let proxyVar;
    if (usingSsl) {
        proxyVar = process.env['https_proxy'] || process.env['HTTPS_PROXY'];
    }
    else {
        proxyVar = process.env['http_proxy'] || process.env['HTTP_PROXY'];
    }
    if (proxyVar) {
        proxyUrl = url.parse(proxyVar);
    }
    return proxyUrl;
}
exports.getProxyUrl = getProxyUrl;
function checkBypass(reqUrl) {
    if (!reqUrl.hostname) {
        return false;
    }
    let noProxy = process.env['no_proxy'] || process.env['NO_PROXY'] || '';
    if (!noProxy) {
        return false;
    }
    // Determine the request port
    let reqPort;
    if (reqUrl.port) {
        reqPort = Number(reqUrl.port);
    }
    else if (reqUrl.protocol === 'http:') {
        reqPort = 80;
    }
    else if (reqUrl.protocol === 'https:') {
        reqPort = 443;
    }
    // Format the request hostname and hostname with port
    let upperReqHosts = [reqUrl.hostname.toUpperCase()];
    if (typeof reqPort === 'number') {
        upperReqHosts.push(`${upperReqHosts[0]}:${reqPort}`);
    }
    // Compare request host against noproxy
    for (let upperNoProxyItem of noProxy
        .split(',')
        .map(x => x.trim().toUpperCase())
        .filter(x => x)) {
        if (upperReqHosts.some(x => x === upperNoProxyItem)) {
            return true;
        }
    }
    return false;
}
exports.checkBypass = checkBypass;


/***/ }),

/***/ 4552:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PersonalAccessTokenCredentialHandler = exports.BearerCredentialHandler = exports.BasicCredentialHandler = void 0;
class BasicCredentialHandler {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
    prepareRequest(options) {
        if (!options.headers) {
            throw Error('The request has no headers');
        }
        options.headers['Authorization'] = `Basic ${Buffer.from(`${this.username}:${this.password}`).toString('base64')}`;
    }
    // This handler cannot handle 401
    canHandleAuthentication() {
        return false;
    }
    handleAuthentication() {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error('not implemented');
        });
    }
}
exports.BasicCredentialHandler = BasicCredentialHandler;
class BearerCredentialHandler {
    constructor(token) {
        this.token = token;
    }
    // currently implements pre-authorization
    // TODO: support preAuth = false where it hooks on 401
    prepareRequest(options) {
        if (!options.headers) {
            throw Error('The request has no headers');
        }
        options.headers['Authorization'] = `Bearer ${this.token}`;
    }
    // This handler cannot handle 401
    canHandleAuthentication() {
        return false;
    }
    handleAuthentication() {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error('not implemented');
        });
    }
}
exports.BearerCredentialHandler = BearerCredentialHandler;
class PersonalAccessTokenCredentialHandler {
    constructor(token) {
        this.token = token;
    }
    // currently implements pre-authorization
    // TODO: support preAuth = false where it hooks on 401
    prepareRequest(options) {
        if (!options.headers) {
            throw Error('The request has no headers');
        }
        options.headers['Authorization'] = `Basic ${Buffer.from(`PAT:${this.token}`).toString('base64')}`;
    }
    // This handler cannot handle 401
    canHandleAuthentication() {
        return false;
    }
    handleAuthentication() {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error('not implemented');
        });
    }
}
exports.PersonalAccessTokenCredentialHandler = PersonalAccessTokenCredentialHandler;
//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 4844:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

/* eslint-disable @typescript-eslint/no-explicit-any */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HttpClient = exports.isHttps = exports.HttpClientResponse = exports.HttpClientError = exports.getProxyUrl = exports.MediaTypes = exports.Headers = exports.HttpCodes = void 0;
const http = __importStar(__nccwpck_require__(8611));
const https = __importStar(__nccwpck_require__(5692));
const pm = __importStar(__nccwpck_require__(4988));
const tunnel = __importStar(__nccwpck_require__(770));
var HttpCodes;
(function (HttpCodes) {
    HttpCodes[HttpCodes["OK"] = 200] = "OK";
    HttpCodes[HttpCodes["MultipleChoices"] = 300] = "MultipleChoices";
    HttpCodes[HttpCodes["MovedPermanently"] = 301] = "MovedPermanently";
    HttpCodes[HttpCodes["ResourceMoved"] = 302] = "ResourceMoved";
    HttpCodes[HttpCodes["SeeOther"] = 303] = "SeeOther";
    HttpCodes[HttpCodes["NotModified"] = 304] = "NotModified";
    HttpCodes[HttpCodes["UseProxy"] = 305] = "UseProxy";
    HttpCodes[HttpCodes["SwitchProxy"] = 306] = "SwitchProxy";
    HttpCodes[HttpCodes["TemporaryRedirect"] = 307] = "TemporaryRedirect";
    HttpCodes[HttpCodes["PermanentRedirect"] = 308] = "PermanentRedirect";
    HttpCodes[HttpCodes["BadRequest"] = 400] = "BadRequest";
    HttpCodes[HttpCodes["Unauthorized"] = 401] = "Unauthorized";
    HttpCodes[HttpCodes["PaymentRequired"] = 402] = "PaymentRequired";
    HttpCodes[HttpCodes["Forbidden"] = 403] = "Forbidden";
    HttpCodes[HttpCodes["NotFound"] = 404] = "NotFound";
    HttpCodes[HttpCodes["MethodNotAllowed"] = 405] = "MethodNotAllowed";
    HttpCodes[HttpCodes["NotAcceptable"] = 406] = "NotAcceptable";
    HttpCodes[HttpCodes["ProxyAuthenticationRequired"] = 407] = "ProxyAuthenticationRequired";
    HttpCodes[HttpCodes["RequestTimeout"] = 408] = "RequestTimeout";
    HttpCodes[HttpCodes["Conflict"] = 409] = "Conflict";
    HttpCodes[HttpCodes["Gone"] = 410] = "Gone";
    HttpCodes[HttpCodes["TooManyRequests"] = 429] = "TooManyRequests";
    HttpCodes[HttpCodes["InternalServerError"] = 500] = "InternalServerError";
    HttpCodes[HttpCodes["NotImplemented"] = 501] = "NotImplemented";
    HttpCodes[HttpCodes["BadGateway"] = 502] = "BadGateway";
    HttpCodes[HttpCodes["ServiceUnavailable"] = 503] = "ServiceUnavailable";
    HttpCodes[HttpCodes["GatewayTimeout"] = 504] = "GatewayTimeout";
})(HttpCodes = exports.HttpCodes || (exports.HttpCodes = {}));
var Headers;
(function (Headers) {
    Headers["Accept"] = "accept";
    Headers["ContentType"] = "content-type";
})(Headers = exports.Headers || (exports.Headers = {}));
var MediaTypes;
(function (MediaTypes) {
    MediaTypes["ApplicationJson"] = "application/json";
})(MediaTypes = exports.MediaTypes || (exports.MediaTypes = {}));
/**
 * Returns the proxy URL, depending upon the supplied url and proxy environment variables.
 * @param serverUrl  The server URL where the request will be sent. For example, https://api.github.com
 */
function getProxyUrl(serverUrl) {
    const proxyUrl = pm.getProxyUrl(new URL(serverUrl));
    return proxyUrl ? proxyUrl.href : '';
}
exports.getProxyUrl = getProxyUrl;
const HttpRedirectCodes = [
    HttpCodes.MovedPermanently,
    HttpCodes.ResourceMoved,
    HttpCodes.SeeOther,
    HttpCodes.TemporaryRedirect,
    HttpCodes.PermanentRedirect
];
const HttpResponseRetryCodes = [
    HttpCodes.BadGateway,
    HttpCodes.ServiceUnavailable,
    HttpCodes.GatewayTimeout
];
const RetryableHttpVerbs = ['OPTIONS', 'GET', 'DELETE', 'HEAD'];
const ExponentialBackoffCeiling = 10;
const ExponentialBackoffTimeSlice = 5;
class HttpClientError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.name = 'HttpClientError';
        this.statusCode = statusCode;
        Object.setPrototypeOf(this, HttpClientError.prototype);
    }
}
exports.HttpClientError = HttpClientError;
class HttpClientResponse {
    constructor(message) {
        this.message = message;
    }
    readBody() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
                let output = Buffer.alloc(0);
                this.message.on('data', (chunk) => {
                    output = Buffer.concat([output, chunk]);
                });
                this.message.on('end', () => {
                    resolve(output.toString());
                });
            }));
        });
    }
}
exports.HttpClientResponse = HttpClientResponse;
function isHttps(requestUrl) {
    const parsedUrl = new URL(requestUrl);
    return parsedUrl.protocol === 'https:';
}
exports.isHttps = isHttps;
class HttpClient {
    constructor(userAgent, handlers, requestOptions) {
        this._ignoreSslError = false;
        this._allowRedirects = true;
        this._allowRedirectDowngrade = false;
        this._maxRedirects = 50;
        this._allowRetries = false;
        this._maxRetries = 1;
        this._keepAlive = false;
        this._disposed = false;
        this.userAgent = userAgent;
        this.handlers = handlers || [];
        this.requestOptions = requestOptions;
        if (requestOptions) {
            if (requestOptions.ignoreSslError != null) {
                this._ignoreSslError = requestOptions.ignoreSslError;
            }
            this._socketTimeout = requestOptions.socketTimeout;
            if (requestOptions.allowRedirects != null) {
                this._allowRedirects = requestOptions.allowRedirects;
            }
            if (requestOptions.allowRedirectDowngrade != null) {
                this._allowRedirectDowngrade = requestOptions.allowRedirectDowngrade;
            }
            if (requestOptions.maxRedirects != null) {
                this._maxRedirects = Math.max(requestOptions.maxRedirects, 0);
            }
            if (requestOptions.keepAlive != null) {
                this._keepAlive = requestOptions.keepAlive;
            }
            if (requestOptions.allowRetries != null) {
                this._allowRetries = requestOptions.allowRetries;
            }
            if (requestOptions.maxRetries != null) {
                this._maxRetries = requestOptions.maxRetries;
            }
        }
    }
    options(requestUrl, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('OPTIONS', requestUrl, null, additionalHeaders || {});
        });
    }
    get(requestUrl, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('GET', requestUrl, null, additionalHeaders || {});
        });
    }
    del(requestUrl, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('DELETE', requestUrl, null, additionalHeaders || {});
        });
    }
    post(requestUrl, data, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('POST', requestUrl, data, additionalHeaders || {});
        });
    }
    patch(requestUrl, data, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('PATCH', requestUrl, data, additionalHeaders || {});
        });
    }
    put(requestUrl, data, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('PUT', requestUrl, data, additionalHeaders || {});
        });
    }
    head(requestUrl, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('HEAD', requestUrl, null, additionalHeaders || {});
        });
    }
    sendStream(verb, requestUrl, stream, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request(verb, requestUrl, stream, additionalHeaders);
        });
    }
    /**
     * Gets a typed object from an endpoint
     * Be aware that not found returns a null.  Other errors (4xx, 5xx) reject the promise
     */
    getJson(requestUrl, additionalHeaders = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
            const res = yield this.get(requestUrl, additionalHeaders);
            return this._processResponse(res, this.requestOptions);
        });
    }
    postJson(requestUrl, obj, additionalHeaders = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = JSON.stringify(obj, null, 2);
            additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
            additionalHeaders[Headers.ContentType] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.ContentType, MediaTypes.ApplicationJson);
            const res = yield this.post(requestUrl, data, additionalHeaders);
            return this._processResponse(res, this.requestOptions);
        });
    }
    putJson(requestUrl, obj, additionalHeaders = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = JSON.stringify(obj, null, 2);
            additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
            additionalHeaders[Headers.ContentType] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.ContentType, MediaTypes.ApplicationJson);
            const res = yield this.put(requestUrl, data, additionalHeaders);
            return this._processResponse(res, this.requestOptions);
        });
    }
    patchJson(requestUrl, obj, additionalHeaders = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = JSON.stringify(obj, null, 2);
            additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
            additionalHeaders[Headers.ContentType] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.ContentType, MediaTypes.ApplicationJson);
            const res = yield this.patch(requestUrl, data, additionalHeaders);
            return this._processResponse(res, this.requestOptions);
        });
    }
    /**
     * Makes a raw http request.
     * All other methods such as get, post, patch, and request ultimately call this.
     * Prefer get, del, post and patch
     */
    request(verb, requestUrl, data, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this._disposed) {
                throw new Error('Client has already been disposed.');
            }
            const parsedUrl = new URL(requestUrl);
            let info = this._prepareRequest(verb, parsedUrl, headers);
            // Only perform retries on reads since writes may not be idempotent.
            const maxTries = this._allowRetries && RetryableHttpVerbs.includes(verb)
                ? this._maxRetries + 1
                : 1;
            let numTries = 0;
            let response;
            do {
                response = yield this.requestRaw(info, data);
                // Check if it's an authentication challenge
                if (response &&
                    response.message &&
                    response.message.statusCode === HttpCodes.Unauthorized) {
                    let authenticationHandler;
                    for (const handler of this.handlers) {
                        if (handler.canHandleAuthentication(response)) {
                            authenticationHandler = handler;
                            break;
                        }
                    }
                    if (authenticationHandler) {
                        return authenticationHandler.handleAuthentication(this, info, data);
                    }
                    else {
                        // We have received an unauthorized response but have no handlers to handle it.
                        // Let the response return to the caller.
                        return response;
                    }
                }
                let redirectsRemaining = this._maxRedirects;
                while (response.message.statusCode &&
                    HttpRedirectCodes.includes(response.message.statusCode) &&
                    this._allowRedirects &&
                    redirectsRemaining > 0) {
                    const redirectUrl = response.message.headers['location'];
                    if (!redirectUrl) {
                        // if there's no location to redirect to, we won't
                        break;
                    }
                    const parsedRedirectUrl = new URL(redirectUrl);
                    if (parsedUrl.protocol === 'https:' &&
                        parsedUrl.protocol !== parsedRedirectUrl.protocol &&
                        !this._allowRedirectDowngrade) {
                        throw new Error('Redirect from HTTPS to HTTP protocol. This downgrade is not allowed for security reasons. If you want to allow this behavior, set the allowRedirectDowngrade option to true.');
                    }
                    // we need to finish reading the response before reassigning response
                    // which will leak the open socket.
                    yield response.readBody();
                    // strip authorization header if redirected to a different hostname
                    if (parsedRedirectUrl.hostname !== parsedUrl.hostname) {
                        for (const header in headers) {
                            // header names are case insensitive
                            if (header.toLowerCase() === 'authorization') {
                                delete headers[header];
                            }
                        }
                    }
                    // let's make the request with the new redirectUrl
                    info = this._prepareRequest(verb, parsedRedirectUrl, headers);
                    response = yield this.requestRaw(info, data);
                    redirectsRemaining--;
                }
                if (!response.message.statusCode ||
                    !HttpResponseRetryCodes.includes(response.message.statusCode)) {
                    // If not a retry code, return immediately instead of retrying
                    return response;
                }
                numTries += 1;
                if (numTries < maxTries) {
                    yield response.readBody();
                    yield this._performExponentialBackoff(numTries);
                }
            } while (numTries < maxTries);
            return response;
        });
    }
    /**
     * Needs to be called if keepAlive is set to true in request options.
     */
    dispose() {
        if (this._agent) {
            this._agent.destroy();
        }
        this._disposed = true;
    }
    /**
     * Raw request.
     * @param info
     * @param data
     */
    requestRaw(info, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                function callbackForResult(err, res) {
                    if (err) {
                        reject(err);
                    }
                    else if (!res) {
                        // If `err` is not passed, then `res` must be passed.
                        reject(new Error('Unknown error'));
                    }
                    else {
                        resolve(res);
                    }
                }
                this.requestRawWithCallback(info, data, callbackForResult);
            });
        });
    }
    /**
     * Raw request with callback.
     * @param info
     * @param data
     * @param onResult
     */
    requestRawWithCallback(info, data, onResult) {
        if (typeof data === 'string') {
            if (!info.options.headers) {
                info.options.headers = {};
            }
            info.options.headers['Content-Length'] = Buffer.byteLength(data, 'utf8');
        }
        let callbackCalled = false;
        function handleResult(err, res) {
            if (!callbackCalled) {
                callbackCalled = true;
                onResult(err, res);
            }
        }
        const req = info.httpModule.request(info.options, (msg) => {
            const res = new HttpClientResponse(msg);
            handleResult(undefined, res);
        });
        let socket;
        req.on('socket', sock => {
            socket = sock;
        });
        // If we ever get disconnected, we want the socket to timeout eventually
        req.setTimeout(this._socketTimeout || 3 * 60000, () => {
            if (socket) {
                socket.end();
            }
            handleResult(new Error(`Request timeout: ${info.options.path}`));
        });
        req.on('error', function (err) {
            // err has statusCode property
            // res should have headers
            handleResult(err);
        });
        if (data && typeof data === 'string') {
            req.write(data, 'utf8');
        }
        if (data && typeof data !== 'string') {
            data.on('close', function () {
                req.end();
            });
            data.pipe(req);
        }
        else {
            req.end();
        }
    }
    /**
     * Gets an http agent. This function is useful when you need an http agent that handles
     * routing through a proxy server - depending upon the url and proxy environment variables.
     * @param serverUrl  The server URL where the request will be sent. For example, https://api.github.com
     */
    getAgent(serverUrl) {
        const parsedUrl = new URL(serverUrl);
        return this._getAgent(parsedUrl);
    }
    _prepareRequest(method, requestUrl, headers) {
        const info = {};
        info.parsedUrl = requestUrl;
        const usingSsl = info.parsedUrl.protocol === 'https:';
        info.httpModule = usingSsl ? https : http;
        const defaultPort = usingSsl ? 443 : 80;
        info.options = {};
        info.options.host = info.parsedUrl.hostname;
        info.options.port = info.parsedUrl.port
            ? parseInt(info.parsedUrl.port)
            : defaultPort;
        info.options.path =
            (info.parsedUrl.pathname || '') + (info.parsedUrl.search || '');
        info.options.method = method;
        info.options.headers = this._mergeHeaders(headers);
        if (this.userAgent != null) {
            info.options.headers['user-agent'] = this.userAgent;
        }
        info.options.agent = this._getAgent(info.parsedUrl);
        // gives handlers an opportunity to participate
        if (this.handlers) {
            for (const handler of this.handlers) {
                handler.prepareRequest(info.options);
            }
        }
        return info;
    }
    _mergeHeaders(headers) {
        if (this.requestOptions && this.requestOptions.headers) {
            return Object.assign({}, lowercaseKeys(this.requestOptions.headers), lowercaseKeys(headers || {}));
        }
        return lowercaseKeys(headers || {});
    }
    _getExistingOrDefaultHeader(additionalHeaders, header, _default) {
        let clientHeader;
        if (this.requestOptions && this.requestOptions.headers) {
            clientHeader = lowercaseKeys(this.requestOptions.headers)[header];
        }
        return additionalHeaders[header] || clientHeader || _default;
    }
    _getAgent(parsedUrl) {
        let agent;
        const proxyUrl = pm.getProxyUrl(parsedUrl);
        const useProxy = proxyUrl && proxyUrl.hostname;
        if (this._keepAlive && useProxy) {
            agent = this._proxyAgent;
        }
        if (this._keepAlive && !useProxy) {
            agent = this._agent;
        }
        // if agent is already assigned use that agent.
        if (agent) {
            return agent;
        }
        const usingSsl = parsedUrl.protocol === 'https:';
        let maxSockets = 100;
        if (this.requestOptions) {
            maxSockets = this.requestOptions.maxSockets || http.globalAgent.maxSockets;
        }
        // This is `useProxy` again, but we need to check `proxyURl` directly for TypeScripts's flow analysis.
        if (proxyUrl && proxyUrl.hostname) {
            const agentOptions = {
                maxSockets,
                keepAlive: this._keepAlive,
                proxy: Object.assign(Object.assign({}, ((proxyUrl.username || proxyUrl.password) && {
                    proxyAuth: `${proxyUrl.username}:${proxyUrl.password}`
                })), { host: proxyUrl.hostname, port: proxyUrl.port })
            };
            let tunnelAgent;
            const overHttps = proxyUrl.protocol === 'https:';
            if (usingSsl) {
                tunnelAgent = overHttps ? tunnel.httpsOverHttps : tunnel.httpsOverHttp;
            }
            else {
                tunnelAgent = overHttps ? tunnel.httpOverHttps : tunnel.httpOverHttp;
            }
            agent = tunnelAgent(agentOptions);
            this._proxyAgent = agent;
        }
        // if reusing agent across request and tunneling agent isn't assigned create a new agent
        if (this._keepAlive && !agent) {
            const options = { keepAlive: this._keepAlive, maxSockets };
            agent = usingSsl ? new https.Agent(options) : new http.Agent(options);
            this._agent = agent;
        }
        // if not using private agent and tunnel agent isn't setup then use global agent
        if (!agent) {
            agent = usingSsl ? https.globalAgent : http.globalAgent;
        }
        if (usingSsl && this._ignoreSslError) {
            // we don't want to set NODE_TLS_REJECT_UNAUTHORIZED=0 since that will affect request for entire process
            // http.RequestOptions doesn't expose a way to modify RequestOptions.agent.options
            // we have to cast it to any and change it directly
            agent.options = Object.assign(agent.options || {}, {
                rejectUnauthorized: false
            });
        }
        return agent;
    }
    _performExponentialBackoff(retryNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            retryNumber = Math.min(ExponentialBackoffCeiling, retryNumber);
            const ms = ExponentialBackoffTimeSlice * Math.pow(2, retryNumber);
            return new Promise(resolve => setTimeout(() => resolve(), ms));
        });
    }
    _processResponse(res, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                const statusCode = res.message.statusCode || 0;
                const response = {
                    statusCode,
                    result: null,
                    headers: {}
                };
                // not found leads to null obj returned
                if (statusCode === HttpCodes.NotFound) {
                    resolve(response);
                }
                // get the result from the body
                function dateTimeDeserializer(key, value) {
                    if (typeof value === 'string') {
                        const a = new Date(value);
                        if (!isNaN(a.valueOf())) {
                            return a;
                        }
                    }
                    return value;
                }
                let obj;
                let contents;
                try {
                    contents = yield res.readBody();
                    if (contents && contents.length > 0) {
                        if (options && options.deserializeDates) {
                            obj = JSON.parse(contents, dateTimeDeserializer);
                        }
                        else {
                            obj = JSON.parse(contents);
                        }
                        response.result = obj;
                    }
                    response.headers = res.message.headers;
                }
                catch (err) {
                    // Invalid resource (contents not json);  leaving result obj null
                }
                // note that 3xx redirects are handled by the http layer.
                if (statusCode > 299) {
                    let msg;
                    // if exception/error in body, attempt to get better error
                    if (obj && obj.message) {
                        msg = obj.message;
                    }
                    else if (contents && contents.length > 0) {
                        // it may be the case that the exception is in the body message as string
                        msg = contents;
                    }
                    else {
                        msg = `Failed request: (${statusCode})`;
                    }
                    const err = new HttpClientError(msg, statusCode);
                    err.result = response.result;
                    reject(err);
                }
                else {
                    resolve(response);
                }
            }));
        });
    }
}
exports.HttpClient = HttpClient;
const lowercaseKeys = (obj) => Object.keys(obj).reduce((c, k) => ((c[k.toLowerCase()] = obj[k]), c), {});
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 4988:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.checkBypass = exports.getProxyUrl = void 0;
function getProxyUrl(reqUrl) {
    const usingSsl = reqUrl.protocol === 'https:';
    if (checkBypass(reqUrl)) {
        return undefined;
    }
    const proxyVar = (() => {
        if (usingSsl) {
            return process.env['https_proxy'] || process.env['HTTPS_PROXY'];
        }
        else {
            return process.env['http_proxy'] || process.env['HTTP_PROXY'];
        }
    })();
    if (proxyVar) {
        return new URL(proxyVar);
    }
    else {
        return undefined;
    }
}
exports.getProxyUrl = getProxyUrl;
function checkBypass(reqUrl) {
    if (!reqUrl.hostname) {
        return false;
    }
    const noProxy = process.env['no_proxy'] || process.env['NO_PROXY'] || '';
    if (!noProxy) {
        return false;
    }
    // Determine the request port
    let reqPort;
    if (reqUrl.port) {
        reqPort = Number(reqUrl.port);
    }
    else if (reqUrl.protocol === 'http:') {
        reqPort = 80;
    }
    else if (reqUrl.protocol === 'https:') {
        reqPort = 443;
    }
    // Format the request hostname and hostname with port
    const upperReqHosts = [reqUrl.hostname.toUpperCase()];
    if (typeof reqPort === 'number') {
        upperReqHosts.push(`${upperReqHosts[0]}:${reqPort}`);
    }
    // Compare request host against noproxy
    for (const upperNoProxyItem of noProxy
        .split(',')
        .map(x => x.trim().toUpperCase())
        .filter(x => x)) {
        if (upperReqHosts.some(x => x === upperNoProxyItem)) {
            return true;
        }
    }
    return false;
}
exports.checkBypass = checkBypass;
//# sourceMappingURL=proxy.js.map

/***/ }),

/***/ 5207:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getCmdPath = exports.tryGetExecutablePath = exports.isRooted = exports.isDirectory = exports.exists = exports.READONLY = exports.UV_FS_O_EXLOCK = exports.IS_WINDOWS = exports.unlink = exports.symlink = exports.stat = exports.rmdir = exports.rm = exports.rename = exports.readlink = exports.readdir = exports.open = exports.mkdir = exports.lstat = exports.copyFile = exports.chmod = void 0;
const fs = __importStar(__nccwpck_require__(9896));
const path = __importStar(__nccwpck_require__(6928));
_a = fs.promises
// export const {open} = 'fs'
, exports.chmod = _a.chmod, exports.copyFile = _a.copyFile, exports.lstat = _a.lstat, exports.mkdir = _a.mkdir, exports.open = _a.open, exports.readdir = _a.readdir, exports.readlink = _a.readlink, exports.rename = _a.rename, exports.rm = _a.rm, exports.rmdir = _a.rmdir, exports.stat = _a.stat, exports.symlink = _a.symlink, exports.unlink = _a.unlink;
// export const {open} = 'fs'
exports.IS_WINDOWS = process.platform === 'win32';
// See https://github.com/nodejs/node/blob/d0153aee367422d0858105abec186da4dff0a0c5/deps/uv/include/uv/win.h#L691
exports.UV_FS_O_EXLOCK = 0x10000000;
exports.READONLY = fs.constants.O_RDONLY;
function exists(fsPath) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield exports.stat(fsPath);
        }
        catch (err) {
            if (err.code === 'ENOENT') {
                return false;
            }
            throw err;
        }
        return true;
    });
}
exports.exists = exists;
function isDirectory(fsPath, useStat = false) {
    return __awaiter(this, void 0, void 0, function* () {
        const stats = useStat ? yield exports.stat(fsPath) : yield exports.lstat(fsPath);
        return stats.isDirectory();
    });
}
exports.isDirectory = isDirectory;
/**
 * On OSX/Linux, true if path starts with '/'. On Windows, true for paths like:
 * \, \hello, \\hello\share, C:, and C:\hello (and corresponding alternate separator cases).
 */
function isRooted(p) {
    p = normalizeSeparators(p);
    if (!p) {
        throw new Error('isRooted() parameter "p" cannot be empty');
    }
    if (exports.IS_WINDOWS) {
        return (p.startsWith('\\') || /^[A-Z]:/i.test(p) // e.g. \ or \hello or \\hello
        ); // e.g. C: or C:\hello
    }
    return p.startsWith('/');
}
exports.isRooted = isRooted;
/**
 * Best effort attempt to determine whether a file exists and is executable.
 * @param filePath    file path to check
 * @param extensions  additional file extensions to try
 * @return if file exists and is executable, returns the file path. otherwise empty string.
 */
function tryGetExecutablePath(filePath, extensions) {
    return __awaiter(this, void 0, void 0, function* () {
        let stats = undefined;
        try {
            // test file exists
            stats = yield exports.stat(filePath);
        }
        catch (err) {
            if (err.code !== 'ENOENT') {
                // eslint-disable-next-line no-console
                console.log(`Unexpected error attempting to determine if executable file exists '${filePath}': ${err}`);
            }
        }
        if (stats && stats.isFile()) {
            if (exports.IS_WINDOWS) {
                // on Windows, test for valid extension
                const upperExt = path.extname(filePath).toUpperCase();
                if (extensions.some(validExt => validExt.toUpperCase() === upperExt)) {
                    return filePath;
                }
            }
            else {
                if (isUnixExecutable(stats)) {
                    return filePath;
                }
            }
        }
        // try each extension
        const originalFilePath = filePath;
        for (const extension of extensions) {
            filePath = originalFilePath + extension;
            stats = undefined;
            try {
                stats = yield exports.stat(filePath);
            }
            catch (err) {
                if (err.code !== 'ENOENT') {
                    // eslint-disable-next-line no-console
                    console.log(`Unexpected error attempting to determine if executable file exists '${filePath}': ${err}`);
                }
            }
            if (stats && stats.isFile()) {
                if (exports.IS_WINDOWS) {
                    // preserve the case of the actual file (since an extension was appended)
                    try {
                        const directory = path.dirname(filePath);
                        const upperName = path.basename(filePath).toUpperCase();
                        for (const actualName of yield exports.readdir(directory)) {
                            if (upperName === actualName.toUpperCase()) {
                                filePath = path.join(directory, actualName);
                                break;
                            }
                        }
                    }
                    catch (err) {
                        // eslint-disable-next-line no-console
                        console.log(`Unexpected error attempting to determine the actual case of the file '${filePath}': ${err}`);
                    }
                    return filePath;
                }
                else {
                    if (isUnixExecutable(stats)) {
                        return filePath;
                    }
                }
            }
        }
        return '';
    });
}
exports.tryGetExecutablePath = tryGetExecutablePath;
function normalizeSeparators(p) {
    p = p || '';
    if (exports.IS_WINDOWS) {
        // convert slashes on Windows
        p = p.replace(/\//g, '\\');
        // remove redundant slashes
        return p.replace(/\\\\+/g, '\\');
    }
    // remove redundant slashes
    return p.replace(/\/\/+/g, '/');
}
// on Mac/Linux, test the execute bit
//     R   W  X  R  W X R W X
//   256 128 64 32 16 8 4 2 1
function isUnixExecutable(stats) {
    return ((stats.mode & 1) > 0 ||
        ((stats.mode & 8) > 0 && stats.gid === process.getgid()) ||
        ((stats.mode & 64) > 0 && stats.uid === process.getuid()));
}
// Get the path of cmd.exe in windows
function getCmdPath() {
    var _a;
    return (_a = process.env['COMSPEC']) !== null && _a !== void 0 ? _a : `cmd.exe`;
}
exports.getCmdPath = getCmdPath;
//# sourceMappingURL=io-util.js.map

/***/ }),

/***/ 4994:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.findInPath = exports.which = exports.mkdirP = exports.rmRF = exports.mv = exports.cp = void 0;
const assert_1 = __nccwpck_require__(2613);
const path = __importStar(__nccwpck_require__(6928));
const ioUtil = __importStar(__nccwpck_require__(5207));
/**
 * Copies a file or folder.
 * Based off of shelljs - https://github.com/shelljs/shelljs/blob/9237f66c52e5daa40458f94f9565e18e8132f5a6/src/cp.js
 *
 * @param     source    source path
 * @param     dest      destination path
 * @param     options   optional. See CopyOptions.
 */
function cp(source, dest, options = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        const { force, recursive, copySourceDirectory } = readCopyOptions(options);
        const destStat = (yield ioUtil.exists(dest)) ? yield ioUtil.stat(dest) : null;
        // Dest is an existing file, but not forcing
        if (destStat && destStat.isFile() && !force) {
            return;
        }
        // If dest is an existing directory, should copy inside.
        const newDest = destStat && destStat.isDirectory() && copySourceDirectory
            ? path.join(dest, path.basename(source))
            : dest;
        if (!(yield ioUtil.exists(source))) {
            throw new Error(`no such file or directory: ${source}`);
        }
        const sourceStat = yield ioUtil.stat(source);
        if (sourceStat.isDirectory()) {
            if (!recursive) {
                throw new Error(`Failed to copy. ${source} is a directory, but tried to copy without recursive flag.`);
            }
            else {
                yield cpDirRecursive(source, newDest, 0, force);
            }
        }
        else {
            if (path.relative(source, newDest) === '') {
                // a file cannot be copied to itself
                throw new Error(`'${newDest}' and '${source}' are the same file`);
            }
            yield copyFile(source, newDest, force);
        }
    });
}
exports.cp = cp;
/**
 * Moves a path.
 *
 * @param     source    source path
 * @param     dest      destination path
 * @param     options   optional. See MoveOptions.
 */
function mv(source, dest, options = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        if (yield ioUtil.exists(dest)) {
            let destExists = true;
            if (yield ioUtil.isDirectory(dest)) {
                // If dest is directory copy src into dest
                dest = path.join(dest, path.basename(source));
                destExists = yield ioUtil.exists(dest);
            }
            if (destExists) {
                if (options.force == null || options.force) {
                    yield rmRF(dest);
                }
                else {
                    throw new Error('Destination already exists');
                }
            }
        }
        yield mkdirP(path.dirname(dest));
        yield ioUtil.rename(source, dest);
    });
}
exports.mv = mv;
/**
 * Remove a path recursively with force
 *
 * @param inputPath path to remove
 */
function rmRF(inputPath) {
    return __awaiter(this, void 0, void 0, function* () {
        if (ioUtil.IS_WINDOWS) {
            // Check for invalid characters
            // https://docs.microsoft.com/en-us/windows/win32/fileio/naming-a-file
            if (/[*"<>|]/.test(inputPath)) {
                throw new Error('File path must not contain `*`, `"`, `<`, `>` or `|` on Windows');
            }
        }
        try {
            // note if path does not exist, error is silent
            yield ioUtil.rm(inputPath, {
                force: true,
                maxRetries: 3,
                recursive: true,
                retryDelay: 300
            });
        }
        catch (err) {
            throw new Error(`File was unable to be removed ${err}`);
        }
    });
}
exports.rmRF = rmRF;
/**
 * Make a directory.  Creates the full path with folders in between
 * Will throw if it fails
 *
 * @param   fsPath        path to create
 * @returns Promise<void>
 */
function mkdirP(fsPath) {
    return __awaiter(this, void 0, void 0, function* () {
        assert_1.ok(fsPath, 'a path argument must be provided');
        yield ioUtil.mkdir(fsPath, { recursive: true });
    });
}
exports.mkdirP = mkdirP;
/**
 * Returns path of a tool had the tool actually been invoked.  Resolves via paths.
 * If you check and the tool does not exist, it will throw.
 *
 * @param     tool              name of the tool
 * @param     check             whether to check if tool exists
 * @returns   Promise<string>   path to tool
 */
function which(tool, check) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!tool) {
            throw new Error("parameter 'tool' is required");
        }
        // recursive when check=true
        if (check) {
            const result = yield which(tool, false);
            if (!result) {
                if (ioUtil.IS_WINDOWS) {
                    throw new Error(`Unable to locate executable file: ${tool}. Please verify either the file path exists or the file can be found within a directory specified by the PATH environment variable. Also verify the file has a valid extension for an executable file.`);
                }
                else {
                    throw new Error(`Unable to locate executable file: ${tool}. Please verify either the file path exists or the file can be found within a directory specified by the PATH environment variable. Also check the file mode to verify the file is executable.`);
                }
            }
            return result;
        }
        const matches = yield findInPath(tool);
        if (matches && matches.length > 0) {
            return matches[0];
        }
        return '';
    });
}
exports.which = which;
/**
 * Returns a list of all occurrences of the given tool on the system path.
 *
 * @returns   Promise<string[]>  the paths of the tool
 */
function findInPath(tool) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!tool) {
            throw new Error("parameter 'tool' is required");
        }
        // build the list of extensions to try
        const extensions = [];
        if (ioUtil.IS_WINDOWS && process.env['PATHEXT']) {
            for (const extension of process.env['PATHEXT'].split(path.delimiter)) {
                if (extension) {
                    extensions.push(extension);
                }
            }
        }
        // if it's rooted, return it if exists. otherwise return empty.
        if (ioUtil.isRooted(tool)) {
            const filePath = yield ioUtil.tryGetExecutablePath(tool, extensions);
            if (filePath) {
                return [filePath];
            }
            return [];
        }
        // if any path separators, return empty
        if (tool.includes(path.sep)) {
            return [];
        }
        // build the list of directories
        //
        // Note, technically "where" checks the current directory on Windows. From a toolkit perspective,
        // it feels like we should not do this. Checking the current directory seems like more of a use
        // case of a shell, and the which() function exposed by the toolkit should strive for consistency
        // across platforms.
        const directories = [];
        if (process.env.PATH) {
            for (const p of process.env.PATH.split(path.delimiter)) {
                if (p) {
                    directories.push(p);
                }
            }
        }
        // find all matches
        const matches = [];
        for (const directory of directories) {
            const filePath = yield ioUtil.tryGetExecutablePath(path.join(directory, tool), extensions);
            if (filePath) {
                matches.push(filePath);
            }
        }
        return matches;
    });
}
exports.findInPath = findInPath;
function readCopyOptions(options) {
    const force = options.force == null ? true : options.force;
    const recursive = Boolean(options.recursive);
    const copySourceDirectory = options.copySourceDirectory == null
        ? true
        : Boolean(options.copySourceDirectory);
    return { force, recursive, copySourceDirectory };
}
function cpDirRecursive(sourceDir, destDir, currentDepth, force) {
    return __awaiter(this, void 0, void 0, function* () {
        // Ensure there is not a run away recursive copy
        if (currentDepth >= 255)
            return;
        currentDepth++;
        yield mkdirP(destDir);
        const files = yield ioUtil.readdir(sourceDir);
        for (const fileName of files) {
            const srcFile = `${sourceDir}/${fileName}`;
            const destFile = `${destDir}/${fileName}`;
            const srcFileStat = yield ioUtil.lstat(srcFile);
            if (srcFileStat.isDirectory()) {
                // Recurse
                yield cpDirRecursive(srcFile, destFile, currentDepth, force);
            }
            else {
                yield copyFile(srcFile, destFile, force);
            }
        }
        // Change the mode for the newly created directory
        yield ioUtil.chmod(destDir, (yield ioUtil.stat(sourceDir)).mode);
    });
}
// Buffered file copy
function copyFile(srcFile, destFile, force) {
    return __awaiter(this, void 0, void 0, function* () {
        if ((yield ioUtil.lstat(srcFile)).isSymbolicLink()) {
            // unlink/re-link it
            try {
                yield ioUtil.lstat(destFile);
                yield ioUtil.unlink(destFile);
            }
            catch (e) {
                // Try to override file permission
                if (e.code === 'EPERM') {
                    yield ioUtil.chmod(destFile, '0666');
                    yield ioUtil.unlink(destFile);
                }
                // other errors = it doesn't exist, no work to do
            }
            // Copy over symlink
            const symlinkFull = yield ioUtil.readlink(srcFile);
            yield ioUtil.symlink(symlinkFull, destFile, ioUtil.IS_WINDOWS ? 'junction' : null);
        }
        else if (!(yield ioUtil.exists(destFile)) || force) {
            yield ioUtil.copyFile(srcFile, destFile);
        }
    });
}
//# sourceMappingURL=io.js.map

/***/ }),

/***/ 7864:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

async function auth(token) {
  const tokenType = token.split(/\./).length === 3 ? "app" : /^v\d+\./.test(token) ? "installation" : "oauth";
  return {
    type: "token",
    token: token,
    tokenType
  };
}

/**
 * Prefix token for usage in the Authorization header
 *
 * @param token OAuth token or JSON Web Token
 */
function withAuthorizationPrefix(token) {
  if (token.split(/\./).length === 3) {
    return `bearer ${token}`;
  }

  return `token ${token}`;
}

async function hook(token, request, route, parameters) {
  const endpoint = request.endpoint.merge(route, parameters);
  endpoint.headers.authorization = withAuthorizationPrefix(token);
  return request(endpoint);
}

const createTokenAuth = function createTokenAuth(token) {
  if (!token) {
    throw new Error("[@octokit/auth-token] No token passed to createTokenAuth");
  }

  if (typeof token !== "string") {
    throw new Error("[@octokit/auth-token] Token passed to createTokenAuth is not a string");
  }

  token = token.replace(/^(token|bearer) +/i, "");
  return Object.assign(auth.bind(null, token), {
    hook: hook.bind(null, token)
  });
};

exports.createTokenAuth = createTokenAuth;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 4471:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var isPlainObject = _interopDefault(__nccwpck_require__(9139));
var universalUserAgent = __nccwpck_require__(3843);

function lowercaseKeys(object) {
  if (!object) {
    return {};
  }

  return Object.keys(object).reduce((newObj, key) => {
    newObj[key.toLowerCase()] = object[key];
    return newObj;
  }, {});
}

function mergeDeep(defaults, options) {
  const result = Object.assign({}, defaults);
  Object.keys(options).forEach(key => {
    if (isPlainObject(options[key])) {
      if (!(key in defaults)) Object.assign(result, {
        [key]: options[key]
      });else result[key] = mergeDeep(defaults[key], options[key]);
    } else {
      Object.assign(result, {
        [key]: options[key]
      });
    }
  });
  return result;
}

function merge(defaults, route, options) {
  if (typeof route === "string") {
    let [method, url] = route.split(" ");
    options = Object.assign(url ? {
      method,
      url
    } : {
      url: method
    }, options);
  } else {
    options = Object.assign({}, route);
  } // lowercase header names before merging with defaults to avoid duplicates


  options.headers = lowercaseKeys(options.headers);
  const mergedOptions = mergeDeep(defaults || {}, options); // mediaType.previews arrays are merged, instead of overwritten

  if (defaults && defaults.mediaType.previews.length) {
    mergedOptions.mediaType.previews = defaults.mediaType.previews.filter(preview => !mergedOptions.mediaType.previews.includes(preview)).concat(mergedOptions.mediaType.previews);
  }

  mergedOptions.mediaType.previews = mergedOptions.mediaType.previews.map(preview => preview.replace(/-preview/, ""));
  return mergedOptions;
}

function addQueryParameters(url, parameters) {
  const separator = /\?/.test(url) ? "&" : "?";
  const names = Object.keys(parameters);

  if (names.length === 0) {
    return url;
  }

  return url + separator + names.map(name => {
    if (name === "q") {
      return "q=" + parameters.q.split("+").map(encodeURIComponent).join("+");
    }

    return `${name}=${encodeURIComponent(parameters[name])}`;
  }).join("&");
}

const urlVariableRegex = /\{[^}]+\}/g;

function removeNonChars(variableName) {
  return variableName.replace(/^\W+|\W+$/g, "").split(/,/);
}

function extractUrlVariableNames(url) {
  const matches = url.match(urlVariableRegex);

  if (!matches) {
    return [];
  }

  return matches.map(removeNonChars).reduce((a, b) => a.concat(b), []);
}

function omit(object, keysToOmit) {
  return Object.keys(object).filter(option => !keysToOmit.includes(option)).reduce((obj, key) => {
    obj[key] = object[key];
    return obj;
  }, {});
}

// Based on https://github.com/bramstein/url-template, licensed under BSD
// TODO: create separate package.
//
// Copyright (c) 2012-2014, Bram Stein
// All rights reserved.
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions
// are met:
//  1. Redistributions of source code must retain the above copyright
//     notice, this list of conditions and the following disclaimer.
//  2. Redistributions in binary form must reproduce the above copyright
//     notice, this list of conditions and the following disclaimer in the
//     documentation and/or other materials provided with the distribution.
//  3. The name of the author may not be used to endorse or promote products
//     derived from this software without specific prior written permission.
// THIS SOFTWARE IS PROVIDED BY THE AUTHOR "AS IS" AND ANY EXPRESS OR IMPLIED
// WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
// MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO
// EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
// INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
// BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
// OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
// NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
// EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

/* istanbul ignore file */
function encodeReserved(str) {
  return str.split(/(%[0-9A-Fa-f]{2})/g).map(function (part) {
    if (!/%[0-9A-Fa-f]/.test(part)) {
      part = encodeURI(part).replace(/%5B/g, "[").replace(/%5D/g, "]");
    }

    return part;
  }).join("");
}

function encodeUnreserved(str) {
  return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
    return "%" + c.charCodeAt(0).toString(16).toUpperCase();
  });
}

function encodeValue(operator, value, key) {
  value = operator === "+" || operator === "#" ? encodeReserved(value) : encodeUnreserved(value);

  if (key) {
    return encodeUnreserved(key) + "=" + value;
  } else {
    return value;
  }
}

function isDefined(value) {
  return value !== undefined && value !== null;
}

function isKeyOperator(operator) {
  return operator === ";" || operator === "&" || operator === "?";
}

function getValues(context, operator, key, modifier) {
  var value = context[key],
      result = [];

  if (isDefined(value) && value !== "") {
    if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
      value = value.toString();

      if (modifier && modifier !== "*") {
        value = value.substring(0, parseInt(modifier, 10));
      }

      result.push(encodeValue(operator, value, isKeyOperator(operator) ? key : ""));
    } else {
      if (modifier === "*") {
        if (Array.isArray(value)) {
          value.filter(isDefined).forEach(function (value) {
            result.push(encodeValue(operator, value, isKeyOperator(operator) ? key : ""));
          });
        } else {
          Object.keys(value).forEach(function (k) {
            if (isDefined(value[k])) {
              result.push(encodeValue(operator, value[k], k));
            }
          });
        }
      } else {
        const tmp = [];

        if (Array.isArray(value)) {
          value.filter(isDefined).forEach(function (value) {
            tmp.push(encodeValue(operator, value));
          });
        } else {
          Object.keys(value).forEach(function (k) {
            if (isDefined(value[k])) {
              tmp.push(encodeUnreserved(k));
              tmp.push(encodeValue(operator, value[k].toString()));
            }
          });
        }

        if (isKeyOperator(operator)) {
          result.push(encodeUnreserved(key) + "=" + tmp.join(","));
        } else if (tmp.length !== 0) {
          result.push(tmp.join(","));
        }
      }
    }
  } else {
    if (operator === ";") {
      if (isDefined(value)) {
        result.push(encodeUnreserved(key));
      }
    } else if (value === "" && (operator === "&" || operator === "?")) {
      result.push(encodeUnreserved(key) + "=");
    } else if (value === "") {
      result.push("");
    }
  }

  return result;
}

function parseUrl(template) {
  return {
    expand: expand.bind(null, template)
  };
}

function expand(template, context) {
  var operators = ["+", "#", ".", "/", ";", "?", "&"];
  return template.replace(/\{([^\{\}]+)\}|([^\{\}]+)/g, function (_, expression, literal) {
    if (expression) {
      let operator = "";
      const values = [];

      if (operators.indexOf(expression.charAt(0)) !== -1) {
        operator = expression.charAt(0);
        expression = expression.substr(1);
      }

      expression.split(/,/g).forEach(function (variable) {
        var tmp = /([^:\*]*)(?::(\d+)|(\*))?/.exec(variable);
        values.push(getValues(context, operator, tmp[1], tmp[2] || tmp[3]));
      });

      if (operator && operator !== "+") {
        var separator = ",";

        if (operator === "?") {
          separator = "&";
        } else if (operator !== "#") {
          separator = operator;
        }

        return (values.length !== 0 ? operator : "") + values.join(separator);
      } else {
        return values.join(",");
      }
    } else {
      return encodeReserved(literal);
    }
  });
}

function parse(options) {
  // https://fetch.spec.whatwg.org/#methods
  let method = options.method.toUpperCase(); // replace :varname with {varname} to make it RFC 6570 compatible

  let url = (options.url || "/").replace(/:([a-z]\w+)/g, "{+$1}");
  let headers = Object.assign({}, options.headers);
  let body;
  let parameters = omit(options, ["method", "baseUrl", "url", "headers", "request", "mediaType"]); // extract variable names from URL to calculate remaining variables later

  const urlVariableNames = extractUrlVariableNames(url);
  url = parseUrl(url).expand(parameters);

  if (!/^http/.test(url)) {
    url = options.baseUrl + url;
  }

  const omittedParameters = Object.keys(options).filter(option => urlVariableNames.includes(option)).concat("baseUrl");
  const remainingParameters = omit(parameters, omittedParameters);
  const isBinaryRequset = /application\/octet-stream/i.test(headers.accept);

  if (!isBinaryRequset) {
    if (options.mediaType.format) {
      // e.g. application/vnd.github.v3+json => application/vnd.github.v3.raw
      headers.accept = headers.accept.split(/,/).map(preview => preview.replace(/application\/vnd(\.\w+)(\.v3)?(\.\w+)?(\+json)?$/, `application/vnd$1$2.${options.mediaType.format}`)).join(",");
    }

    if (options.mediaType.previews.length) {
      const previewsFromAcceptHeader = headers.accept.match(/[\w-]+(?=-preview)/g) || [];
      headers.accept = previewsFromAcceptHeader.concat(options.mediaType.previews).map(preview => {
        const format = options.mediaType.format ? `.${options.mediaType.format}` : "+json";
        return `application/vnd.github.${preview}-preview${format}`;
      }).join(",");
    }
  } // for GET/HEAD requests, set URL query parameters from remaining parameters
  // for PATCH/POST/PUT/DELETE requests, set request body from remaining parameters


  if (["GET", "HEAD"].includes(method)) {
    url = addQueryParameters(url, remainingParameters);
  } else {
    if ("data" in remainingParameters) {
      body = remainingParameters.data;
    } else {
      if (Object.keys(remainingParameters).length) {
        body = remainingParameters;
      } else {
        headers["content-length"] = 0;
      }
    }
  } // default content-type for JSON if body is set


  if (!headers["content-type"] && typeof body !== "undefined") {
    headers["content-type"] = "application/json; charset=utf-8";
  } // GitHub expects 'content-length: 0' header for PUT/PATCH requests without body.
  // fetch does not allow to set `content-length` header, but we can set body to an empty string


  if (["PATCH", "PUT"].includes(method) && typeof body === "undefined") {
    body = "";
  } // Only return body/request keys if present


  return Object.assign({
    method,
    url,
    headers
  }, typeof body !== "undefined" ? {
    body
  } : null, options.request ? {
    request: options.request
  } : null);
}

function endpointWithDefaults(defaults, route, options) {
  return parse(merge(defaults, route, options));
}

function withDefaults(oldDefaults, newDefaults) {
  const DEFAULTS = merge(oldDefaults, newDefaults);
  const endpoint = endpointWithDefaults.bind(null, DEFAULTS);
  return Object.assign(endpoint, {
    DEFAULTS,
    defaults: withDefaults.bind(null, DEFAULTS),
    merge: merge.bind(null, DEFAULTS),
    parse
  });
}

const VERSION = "6.0.1";

const userAgent = `octokit-endpoint.js/${VERSION} ${universalUserAgent.getUserAgent()}`; // DEFAULTS has all properties set that EndpointOptions has, except url.
// So we use RequestParameters and add method as additional required property.

const DEFAULTS = {
  method: "GET",
  baseUrl: "https://api.github.com",
  headers: {
    accept: "application/vnd.github.v3+json",
    "user-agent": userAgent
  },
  mediaType: {
    format: "",
    previews: []
  }
};

const endpoint = withDefaults(null, DEFAULTS);

exports.endpoint = endpoint;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 7:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var request = __nccwpck_require__(6255);
var universalUserAgent = __nccwpck_require__(3843);

const VERSION = "4.5.0";

class GraphqlError extends Error {
  constructor(request, response) {
    const message = response.data.errors[0].message;
    super(message);
    Object.assign(this, response.data);
    this.name = "GraphqlError";
    this.request = request; // Maintains proper stack trace (only available on V8)

    /* istanbul ignore next */

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
  }

}

const NON_VARIABLE_OPTIONS = ["method", "baseUrl", "url", "headers", "request", "query", "mediaType"];
function graphql(request, query, options) {
  options = typeof query === "string" ? options = Object.assign({
    query
  }, options) : options = query;
  const requestOptions = Object.keys(options).reduce((result, key) => {
    if (NON_VARIABLE_OPTIONS.includes(key)) {
      result[key] = options[key];
      return result;
    }

    if (!result.variables) {
      result.variables = {};
    }

    result.variables[key] = options[key];
    return result;
  }, {});
  return request(requestOptions).then(response => {
    if (response.data.errors) {
      throw new GraphqlError(requestOptions, {
        data: response.data
      });
    }

    return response.data.data;
  });
}

function withDefaults(request$1, newDefaults) {
  const newRequest = request$1.defaults(newDefaults);

  const newApi = (query, options) => {
    return graphql(newRequest, query, options);
  };

  return Object.assign(newApi, {
    defaults: withDefaults.bind(null, newRequest),
    endpoint: request.request.endpoint
  });
}

const graphql$1 = withDefaults(request.request, {
  headers: {
    "user-agent": `octokit-graphql.js/${VERSION} ${universalUserAgent.getUserAgent()}`
  },
  method: "POST",
  url: "/graphql"
});
function withCustomRequest(customRequest) {
  return withDefaults(customRequest, {
    method: "POST",
    url: "/graphql"
  });
}

exports.graphql = graphql$1;
exports.withCustomRequest = withCustomRequest;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 8082:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

const VERSION = "1.1.2";

/**
 * Some “list” response that can be paginated have a different response structure
 *
 * They have a `total_count` key in the response (search also has `incomplete_results`,
 * /installation/repositories also has `repository_selection`), as well as a key with
 * the list of the items which name varies from endpoint to endpoint:
 *
 * - https://developer.github.com/v3/search/#example (key `items`)
 * - https://developer.github.com/v3/checks/runs/#response-3 (key: `check_runs`)
 * - https://developer.github.com/v3/checks/suites/#response-1 (key: `check_suites`)
 * - https://developer.github.com/v3/apps/installations/#list-repositories (key: `repositories`)
 * - https://developer.github.com/v3/apps/installations/#list-installations-for-a-user (key `installations`)
 *
 * Octokit normalizes these responses so that paginated results are always returned following
 * the same structure. One challenge is that if the list response has only one page, no Link
 * header is provided, so this header alone is not sufficient to check wether a response is
 * paginated or not. For the exceptions with the namespace, a fallback check for the route
 * paths has to be added in order to normalize the response. We cannot check for the total_count
 * property because it also exists in the response of Get the combined status for a specific ref.
 */
const REGEX = [/^\/search\//, /^\/repos\/[^/]+\/[^/]+\/commits\/[^/]+\/(check-runs|check-suites)([^/]|$)/, /^\/installation\/repositories([^/]|$)/, /^\/user\/installations([^/]|$)/, /^\/repos\/[^/]+\/[^/]+\/actions\/secrets([^/]|$)/, /^\/repos\/[^/]+\/[^/]+\/actions\/workflows(\/[^/]+\/runs)?([^/]|$)/, /^\/repos\/[^/]+\/[^/]+\/actions\/runs(\/[^/]+\/(artifacts|jobs))?([^/]|$)/];
function normalizePaginatedListResponse(octokit, url, response) {
  const path = url.replace(octokit.request.endpoint.DEFAULTS.baseUrl, "");
  const responseNeedsNormalization = REGEX.find(regex => regex.test(path));
  if (!responseNeedsNormalization) return; // keep the additional properties intact as there is currently no other way
  // to retrieve the same information.

  const incompleteResults = response.data.incomplete_results;
  const repositorySelection = response.data.repository_selection;
  const totalCount = response.data.total_count;
  delete response.data.incomplete_results;
  delete response.data.repository_selection;
  delete response.data.total_count;
  const namespaceKey = Object.keys(response.data)[0];
  const data = response.data[namespaceKey];
  response.data = data;

  if (typeof incompleteResults !== "undefined") {
    response.data.incomplete_results = incompleteResults;
  }

  if (typeof repositorySelection !== "undefined") {
    response.data.repository_selection = repositorySelection;
  }

  response.data.total_count = totalCount;
  Object.defineProperty(response.data, namespaceKey, {
    get() {
      octokit.log.warn(`[@octokit/paginate-rest] "response.data.${namespaceKey}" is deprecated for "GET ${path}". Get the results directly from "response.data"`);
      return Array.from(data);
    }

  });
}

function iterator(octokit, route, parameters) {
  const options = octokit.request.endpoint(route, parameters);
  const method = options.method;
  const headers = options.headers;
  let url = options.url;
  return {
    [Symbol.asyncIterator]: () => ({
      next() {
        if (!url) {
          return Promise.resolve({
            done: true
          });
        }

        return octokit.request({
          method,
          url,
          headers
        }).then(response => {
          normalizePaginatedListResponse(octokit, url, response); // `response.headers.link` format:
          // '<https://api.github.com/users/aseemk/followers?page=2>; rel="next", <https://api.github.com/users/aseemk/followers?page=2>; rel="last"'
          // sets `url` to undefined if "next" URL is not present or `link` header is not set

          url = ((response.headers.link || "").match(/<([^>]+)>;\s*rel="next"/) || [])[1];
          return {
            value: response
          };
        });
      }

    })
  };
}

function paginate(octokit, route, parameters, mapFn) {
  if (typeof parameters === "function") {
    mapFn = parameters;
    parameters = undefined;
  }

  return gather(octokit, [], iterator(octokit, route, parameters)[Symbol.asyncIterator](), mapFn);
}

function gather(octokit, results, iterator, mapFn) {
  return iterator.next().then(result => {
    if (result.done) {
      return results;
    }

    let earlyExit = false;

    function done() {
      earlyExit = true;
    }

    results = results.concat(mapFn ? mapFn(result.value, done) : result.value.data);

    if (earlyExit) {
      return results;
    }

    return gather(octokit, results, iterator, mapFn);
  });
}

/**
 * @param octokit Octokit instance
 * @param options Options passed to Octokit constructor
 */

function paginateRest(octokit) {
  return {
    paginate: Object.assign(paginate.bind(null, octokit), {
      iterator: iterator.bind(null, octokit)
    })
  };
}
paginateRest.VERSION = VERSION;

exports.paginateRest = paginateRest;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 6966:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

const VERSION = "1.0.0";

/**
 * @param octokit Octokit instance
 * @param options Options passed to Octokit constructor
 */

function requestLog(octokit) {
  octokit.hook.wrap("request", (request, options) => {
    octokit.log.debug("request", options);
    const start = Date.now();
    const requestOptions = octokit.request.endpoint.parse(options);
    const path = requestOptions.url.replace(options.baseUrl, "");
    return request(options).then(response => {
      octokit.log.info(`${requestOptions.method} ${path} - ${response.status} in ${Date.now() - start}ms`);
      return response;
    }).catch(error => {
      octokit.log.info(`${requestOptions.method} ${path} - ${error.status} in ${Date.now() - start}ms`);
      throw error;
    });
  });
}
requestLog.VERSION = VERSION;

exports.requestLog = requestLog;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 7316:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var deprecation = __nccwpck_require__(4150);

var endpointsByScope = {
  actions: {
    cancelWorkflowRun: {
      method: "POST",
      params: {
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        },
        run_id: {
          required: true,
          type: "integer"
        }
      },
      url: "/repos/:owner/:repo/actions/runs/:run_id/cancel"
    },
    createOrUpdateSecretForRepo: {
      method: "PUT",
      params: {
        encrypted_value: {
          type: "string"
        },
        key_id: {
          type: "string"
        },
        name: {
          required: true,
          type: "string"
        },
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/actions/secrets/:name"
    },
    createRegistrationToken: {
      method: "POST",
      params: {
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/actions/runners/registration-token"
    },
    createRemoveToken: {
      method: "POST",
      params: {
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/actions/runners/remove-token"
    },
    deleteArtifact: {
      method: "DELETE",
      params: {
        artifact_id: {
          required: true,
          type: "integer"
        },
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/actions/artifacts/:artifact_id"
    },
    deleteSecretFromRepo: {
      method: "DELETE",
      params: {
        name: {
          required: true,
          type: "string"
        },
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/actions/secrets/:name"
    },
    downloadArtifact: {
      method: "GET",
      params: {
        archive_format: {
          required: true,
          type: "string"
        },
        artifact_id: {
          required: true,
          type: "integer"
        },
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/actions/artifacts/:artifact_id/:archive_format"
    },
    getArtifact: {
      method: "GET",
      params: {
        artifact_id: {
          required: true,
          type: "integer"
        },
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/actions/artifacts/:artifact_id"
    },
    getPublicKey: {
      method: "GET",
      params: {
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/actions/secrets/public-key"
    },
    getSecret: {
      method: "GET",
      params: {
        name: {
          required: true,
          type: "string"
        },
        owner: {
          required: true,
          type: "string"
        },
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/actions/secrets/:name"
    },
    getSelfHostedRunner: {
      method: "GET",
      params: {
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        },
        runner_id: {
          required: true,
          type: "integer"
        }
      },
      url: "/repos/:owner/:repo/actions/runners/:runner_id"
    },
    getWorkflow: {
      method: "GET",
      params: {
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        },
        workflow_id: {
          required: true,
          type: "integer"
        }
      },
      url: "/repos/:owner/:repo/actions/workflows/:workflow_id"
    },
    getWorkflowJob: {
      method: "GET",
      params: {
        job_id: {
          required: true,
          type: "integer"
        },
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/actions/jobs/:job_id"
    },
    getWorkflowRun: {
      method: "GET",
      params: {
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        },
        run_id: {
          required: true,
          type: "integer"
        }
      },
      url: "/repos/:owner/:repo/actions/runs/:run_id"
    },
    listDownloadsForSelfHostedRunnerApplication: {
      method: "GET",
      params: {
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/actions/runners/downloads"
    },
    listJobsForWorkflowRun: {
      method: "GET",
      params: {
        owner: {
          required: true,
          type: "string"
        },
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        },
        repo: {
          required: true,
          type: "string"
        },
        run_id: {
          required: true,
          type: "integer"
        }
      },
      url: "/repos/:owner/:repo/actions/runs/:run_id/jobs"
    },
    listRepoWorkflowRuns: {
      method: "GET",
      params: {
        actor: {
          type: "string"
        },
        branch: {
          type: "string"
        },
        event: {
          type: "string"
        },
        owner: {
          required: true,
          type: "string"
        },
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        },
        repo: {
          required: true,
          type: "string"
        },
        status: {
          enum: ["completed", "status", "conclusion"],
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/actions/runs"
    },
    listRepoWorkflows: {
      method: "GET",
      params: {
        owner: {
          required: true,
          type: "string"
        },
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/actions/workflows"
    },
    listSecretsForRepo: {
      method: "GET",
      params: {
        owner: {
          required: true,
          type: "string"
        },
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/actions/secrets"
    },
    listSelfHostedRunnersForRepo: {
      method: "GET",
      params: {
        owner: {
          required: true,
          type: "string"
        },
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/actions/runners"
    },
    listWorkflowJobLogs: {
      method: "GET",
      params: {
        job_id: {
          required: true,
          type: "integer"
        },
        owner: {
          required: true,
          type: "string"
        },
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/actions/jobs/:job_id/logs"
    },
    listWorkflowRunArtifacts: {
      method: "GET",
      params: {
        owner: {
          required: true,
          type: "string"
        },
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        },
        repo: {
          required: true,
          type: "string"
        },
        run_id: {
          required: true,
          type: "integer"
        }
      },
      url: "/repos/:owner/:repo/actions/runs/:run_id/artifacts"
    },
    listWorkflowRunLogs: {
      method: "GET",
      params: {
        owner: {
          required: true,
          type: "string"
        },
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        },
        repo: {
          required: true,
          type: "string"
        },
        run_id: {
          required: true,
          type: "integer"
        }
      },
      url: "/repos/:owner/:repo/actions/runs/:run_id/logs"
    },
    listWorkflowRuns: {
      method: "GET",
      params: {
        actor: {
          type: "string"
        },
        branch: {
          type: "string"
        },
        event: {
          type: "string"
        },
        owner: {
          required: true,
          type: "string"
        },
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        },
        repo: {
          required: true,
          type: "string"
        },
        status: {
          enum: ["completed", "status", "conclusion"],
          type: "string"
        },
        workflow_id: {
          required: true,
          type: "integer"
        }
      },
      url: "/repos/:owner/:repo/actions/workflows/:workflow_id/runs"
    },
    reRunWorkflow: {
      method: "POST",
      params: {
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        },
        run_id: {
          required: true,
          type: "integer"
        }
      },
      url: "/repos/:owner/:repo/actions/runs/:run_id/rerun"
    },
    removeSelfHostedRunner: {
      method: "DELETE",
      params: {
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        },
        runner_id: {
          required: true,
          type: "integer"
        }
      },
      url: "/repos/:owner/:repo/actions/runners/:runner_id"
    }
  },
  activity: {
    checkStarringRepo: {
      method: "GET",
      params: {
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/user/starred/:owner/:repo"
    },
    deleteRepoSubscription: {
      method: "DELETE",
      params: {
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/subscription"
    },
    deleteThreadSubscription: {
      method: "DELETE",
      params: {
        thread_id: {
          required: true,
          type: "integer"
        }
      },
      url: "/notifications/threads/:thread_id/subscription"
    },
    getRepoSubscription: {
      method: "GET",
      params: {
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/subscription"
    },
    getThread: {
      method: "GET",
      params: {
        thread_id: {
          required: true,
          type: "integer"
        }
      },
      url: "/notifications/threads/:thread_id"
    },
    getThreadSubscription: {
      method: "GET",
      params: {
        thread_id: {
          required: true,
          type: "integer"
        }
      },
      url: "/notifications/threads/:thread_id/subscription"
    },
    listEventsForOrg: {
      method: "GET",
      params: {
        org: {
          required: true,
          type: "string"
        },
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        },
        username: {
          required: true,
          type: "string"
        }
      },
      url: "/users/:username/events/orgs/:org"
    },
    listEventsForUser: {
      method: "GET",
      params: {
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        },
        username: {
          required: true,
          type: "string"
        }
      },
      url: "/users/:username/events"
    },
    listFeeds: {
      method: "GET",
      params: {},
      url: "/feeds"
    },
    listNotifications: {
      method: "GET",
      params: {
        all: {
          type: "boolean"
        },
        before: {
          type: "string"
        },
        page: {
          type: "integer"
        },
        participating: {
          type: "boolean"
        },
        per_page: {
          type: "integer"
        },
        since: {
          type: "string"
        }
      },
      url: "/notifications"
    },
    listNotificationsForRepo: {
      method: "GET",
      params: {
        all: {
          type: "boolean"
        },
        before: {
          type: "string"
        },
        owner: {
          required: true,
          type: "string"
        },
        page: {
          type: "integer"
        },
        participating: {
          type: "boolean"
        },
        per_page: {
          type: "integer"
        },
        repo: {
          required: true,
          type: "string"
        },
        since: {
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/notifications"
    },
    listPublicEvents: {
      method: "GET",
      params: {
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        }
      },
      url: "/events"
    },
    listPublicEventsForOrg: {
      method: "GET",
      params: {
        org: {
          required: true,
          type: "string"
        },
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        }
      },
      url: "/orgs/:org/events"
    },
    listPublicEventsForRepoNetwork: {
      method: "GET",
      params: {
        owner: {
          required: true,
          type: "string"
        },
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/networks/:owner/:repo/events"
    },
    listPublicEventsForUser: {
      method: "GET",
      params: {
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        },
        username: {
          required: true,
          type: "string"
        }
      },
      url: "/users/:username/events/public"
    },
    listReceivedEventsForUser: {
      method: "GET",
      params: {
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        },
        username: {
          required: true,
          type: "string"
        }
      },
      url: "/users/:username/received_events"
    },
    listReceivedPublicEventsForUser: {
      method: "GET",
      params: {
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        },
        username: {
          required: true,
          type: "string"
        }
      },
      url: "/users/:username/received_events/public"
    },
    listRepoEvents: {
      method: "GET",
      params: {
        owner: {
          required: true,
          type: "string"
        },
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/events"
    },
    listReposStarredByAuthenticatedUser: {
      method: "GET",
      params: {
        direction: {
          enum: ["asc", "desc"],
          type: "string"
        },
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        },
        sort: {
          enum: ["created", "updated"],
          type: "string"
        }
      },
      url: "/user/starred"
    },
    listReposStarredByUser: {
      method: "GET",
      params: {
        direction: {
          enum: ["asc", "desc"],
          type: "string"
        },
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        },
        sort: {
          enum: ["created", "updated"],
          type: "string"
        },
        username: {
          required: true,
          type: "string"
        }
      },
      url: "/users/:username/starred"
    },
    listReposWatchedByUser: {
      method: "GET",
      params: {
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        },
        username: {
          required: true,
          type: "string"
        }
      },
      url: "/users/:username/subscriptions"
    },
    listStargazersForRepo: {
      method: "GET",
      params: {
        owner: {
          required: true,
          type: "string"
        },
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/stargazers"
    },
    listWatchedReposForAuthenticatedUser: {
      method: "GET",
      params: {
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        }
      },
      url: "/user/subscriptions"
    },
    listWatchersForRepo: {
      method: "GET",
      params: {
        owner: {
          required: true,
          type: "string"
        },
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/subscribers"
    },
    markAsRead: {
      method: "PUT",
      params: {
        last_read_at: {
          type: "string"
        }
      },
      url: "/notifications"
    },
    markNotificationsAsReadForRepo: {
      method: "PUT",
      params: {
        last_read_at: {
          type: "string"
        },
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/notifications"
    },
    markThreadAsRead: {
      method: "PATCH",
      params: {
        thread_id: {
          required: true,
          type: "integer"
        }
      },
      url: "/notifications/threads/:thread_id"
    },
    setRepoSubscription: {
      method: "PUT",
      params: {
        ignored: {
          type: "boolean"
        },
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        },
        subscribed: {
          type: "boolean"
        }
      },
      url: "/repos/:owner/:repo/subscription"
    },
    setThreadSubscription: {
      method: "PUT",
      params: {
        ignored: {
          type: "boolean"
        },
        thread_id: {
          required: true,
          type: "integer"
        }
      },
      url: "/notifications/threads/:thread_id/subscription"
    },
    starRepo: {
      method: "PUT",
      params: {
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/user/starred/:owner/:repo"
    },
    unstarRepo: {
      method: "DELETE",
      params: {
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/user/starred/:owner/:repo"
    }
  },
  apps: {
    addRepoToInstallation: {
      headers: {
        accept: "application/vnd.github.machine-man-preview+json"
      },
      method: "PUT",
      params: {
        installation_id: {
          required: true,
          type: "integer"
        },
        repository_id: {
          required: true,
          type: "integer"
        }
      },
      url: "/user/installations/:installation_id/repositories/:repository_id"
    },
    checkAccountIsAssociatedWithAny: {
      method: "GET",
      params: {
        account_id: {
          required: true,
          type: "integer"
        }
      },
      url: "/marketplace_listing/accounts/:account_id"
    },
    checkAccountIsAssociatedWithAnyStubbed: {
      method: "GET",
      params: {
        account_id: {
          required: true,
          type: "integer"
        }
      },
      url: "/marketplace_listing/stubbed/accounts/:account_id"
    },
    checkAuthorization: {
      deprecated: "octokit.apps.checkAuthorization() is deprecated, see https://developer.github.com/v3/apps/oauth_applications/#check-an-authorization",
      method: "GET",
      params: {
        access_token: {
          required: true,
          type: "string"
        },
        client_id: {
          required: true,
          type: "string"
        }
      },
      url: "/applications/:client_id/tokens/:access_token"
    },
    checkToken: {
      headers: {
        accept: "application/vnd.github.doctor-strange-preview+json"
      },
      method: "POST",
      params: {
        access_token: {
          type: "string"
        },
        client_id: {
          required: true,
          type: "string"
        }
      },
      url: "/applications/:client_id/token"
    },
    createContentAttachment: {
      headers: {
        accept: "application/vnd.github.corsair-preview+json"
      },
      method: "POST",
      params: {
        body: {
          required: true,
          type: "string"
        },
        content_reference_id: {
          required: true,
          type: "integer"
        },
        title: {
          required: true,
          type: "string"
        }
      },
      url: "/content_references/:content_reference_id/attachments"
    },
    createFromManifest: {
      headers: {
        accept: "application/vnd.github.fury-preview+json"
      },
      method: "POST",
      params: {
        code: {
          required: true,
          type: "string"
        }
      },
      url: "/app-manifests/:code/conversions"
    },
    createInstallationToken: {
      headers: {
        accept: "application/vnd.github.machine-man-preview+json"
      },
      method: "POST",
      params: {
        installation_id: {
          required: true,
          type: "integer"
        },
        permissions: {
          type: "object"
        },
        repository_ids: {
          type: "integer[]"
        }
      },
      url: "/app/installations/:installation_id/access_tokens"
    },
    deleteAuthorization: {
      headers: {
        accept: "application/vnd.github.doctor-strange-preview+json"
      },
      method: "DELETE",
      params: {
        access_token: {
          type: "string"
        },
        client_id: {
          required: true,
          type: "string"
        }
      },
      url: "/applications/:client_id/grant"
    },
    deleteInstallation: {
      headers: {
        accept: "application/vnd.github.gambit-preview+json,application/vnd.github.machine-man-preview+json"
      },
      method: "DELETE",
      params: {
        installation_id: {
          required: true,
          type: "integer"
        }
      },
      url: "/app/installations/:installation_id"
    },
    deleteToken: {
      headers: {
        accept: "application/vnd.github.doctor-strange-preview+json"
      },
      method: "DELETE",
      params: {
        access_token: {
          type: "string"
        },
        client_id: {
          required: true,
          type: "string"
        }
      },
      url: "/applications/:client_id/token"
    },
    findOrgInstallation: {
      deprecated: "octokit.apps.findOrgInstallation() has been renamed to octokit.apps.getOrgInstallation() (2019-04-10)",
      headers: {
        accept: "application/vnd.github.machine-man-preview+json"
      },
      method: "GET",
      params: {
        org: {
          required: true,
          type: "string"
        }
      },
      url: "/orgs/:org/installation"
    },
    findRepoInstallation: {
      deprecated: "octokit.apps.findRepoInstallation() has been renamed to octokit.apps.getRepoInstallation() (2019-04-10)",
      headers: {
        accept: "application/vnd.github.machine-man-preview+json"
      },
      method: "GET",
      params: {
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/installation"
    },
    findUserInstallation: {
      deprecated: "octokit.apps.findUserInstallation() has been renamed to octokit.apps.getUserInstallation() (2019-04-10)",
      headers: {
        accept: "application/vnd.github.machine-man-preview+json"
      },
      method: "GET",
      params: {
        username: {
          required: true,
          type: "string"
        }
      },
      url: "/users/:username/installation"
    },
    getAuthenticated: {
      headers: {
        accept: "application/vnd.github.machine-man-preview+json"
      },
      method: "GET",
      params: {},
      url: "/app"
    },
    getBySlug: {
      headers: {
        accept: "application/vnd.github.machine-man-preview+json"
      },
      method: "GET",
      params: {
        app_slug: {
          required: true,
          type: "string"
        }
      },
      url: "/apps/:app_slug"
    },
    getInstallation: {
      headers: {
        accept: "application/vnd.github.machine-man-preview+json"
      },
      method: "GET",
      params: {
        installation_id: {
          required: true,
          type: "integer"
        }
      },
      url: "/app/installations/:installation_id"
    },
    getOrgInstallation: {
      headers: {
        accept: "application/vnd.github.machine-man-preview+json"
      },
      method: "GET",
      params: {
        org: {
          required: true,
          type: "string"
        }
      },
      url: "/orgs/:org/installation"
    },
    getRepoInstallation: {
      headers: {
        accept: "application/vnd.github.machine-man-preview+json"
      },
      method: "GET",
      params: {
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/installation"
    },
    getUserInstallation: {
      headers: {
        accept: "application/vnd.github.machine-man-preview+json"
      },
      method: "GET",
      params: {
        username: {
          required: true,
          type: "string"
        }
      },
      url: "/users/:username/installation"
    },
    listAccountsUserOrOrgOnPlan: {
      method: "GET",
      params: {
        direction: {
          enum: ["asc", "desc"],
          type: "string"
        },
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        },
        plan_id: {
          required: true,
          type: "integer"
        },
        sort: {
          enum: ["created", "updated"],
          type: "string"
        }
      },
      url: "/marketplace_listing/plans/:plan_id/accounts"
    },
    listAccountsUserOrOrgOnPlanStubbed: {
      method: "GET",
      params: {
        direction: {
          enum: ["asc", "desc"],
          type: "string"
        },
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        },
        plan_id: {
          required: true,
          type: "integer"
        },
        sort: {
          enum: ["created", "updated"],
          type: "string"
        }
      },
      url: "/marketplace_listing/stubbed/plans/:plan_id/accounts"
    },
    listInstallationReposForAuthenticatedUser: {
      headers: {
        accept: "application/vnd.github.machine-man-preview+json"
      },
      method: "GET",
      params: {
        installation_id: {
          required: true,
          type: "integer"
        },
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        }
      },
      url: "/user/installations/:installation_id/repositories"
    },
    listInstallations: {
      headers: {
        accept: "application/vnd.github.machine-man-preview+json"
      },
      method: "GET",
      params: {
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        }
      },
      url: "/app/installations"
    },
    listInstallationsForAuthenticatedUser: {
      headers: {
        accept: "application/vnd.github.machine-man-preview+json"
      },
      method: "GET",
      params: {
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        }
      },
      url: "/user/installations"
    },
    listMarketplacePurchasesForAuthenticatedUser: {
      method: "GET",
      params: {
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        }
      },
      url: "/user/marketplace_purchases"
    },
    listMarketplacePurchasesForAuthenticatedUserStubbed: {
      method: "GET",
      params: {
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        }
      },
      url: "/user/marketplace_purchases/stubbed"
    },
    listPlans: {
      method: "GET",
      params: {
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        }
      },
      url: "/marketplace_listing/plans"
    },
    listPlansStubbed: {
      method: "GET",
      params: {
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        }
      },
      url: "/marketplace_listing/stubbed/plans"
    },
    listRepos: {
      headers: {
        accept: "application/vnd.github.machine-man-preview+json"
      },
      method: "GET",
      params: {
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        }
      },
      url: "/installation/repositories"
    },
    removeRepoFromInstallation: {
      headers: {
        accept: "application/vnd.github.machine-man-preview+json"
      },
      method: "DELETE",
      params: {
        installation_id: {
          required: true,
          type: "integer"
        },
        repository_id: {
          required: true,
          type: "integer"
        }
      },
      url: "/user/installations/:installation_id/repositories/:repository_id"
    },
    resetAuthorization: {
      deprecated: "octokit.apps.resetAuthorization() is deprecated, see https://developer.github.com/v3/apps/oauth_applications/#reset-an-authorization",
      method: "POST",
      params: {
        access_token: {
          required: true,
          type: "string"
        },
        client_id: {
          required: true,
          type: "string"
        }
      },
      url: "/applications/:client_id/tokens/:access_token"
    },
    resetToken: {
      headers: {
        accept: "application/vnd.github.doctor-strange-preview+json"
      },
      method: "PATCH",
      params: {
        access_token: {
          type: "string"
        },
        client_id: {
          required: true,
          type: "string"
        }
      },
      url: "/applications/:client_id/token"
    },
    revokeAuthorizationForApplication: {
      deprecated: "octokit.apps.revokeAuthorizationForApplication() is deprecated, see https://developer.github.com/v3/apps/oauth_applications/#revoke-an-authorization-for-an-application",
      method: "DELETE",
      params: {
        access_token: {
          required: true,
          type: "string"
        },
        client_id: {
          required: true,
          type: "string"
        }
      },
      url: "/applications/:client_id/tokens/:access_token"
    },
    revokeGrantForApplication: {
      deprecated: "octokit.apps.revokeGrantForApplication() is deprecated, see https://developer.github.com/v3/apps/oauth_applications/#revoke-a-grant-for-an-application",
      method: "DELETE",
      params: {
        access_token: {
          required: true,
          type: "string"
        },
        client_id: {
          required: true,
          type: "string"
        }
      },
      url: "/applications/:client_id/grants/:access_token"
    },
    revokeInstallationToken: {
      headers: {
        accept: "application/vnd.github.gambit-preview+json"
      },
      method: "DELETE",
      params: {},
      url: "/installation/token"
    }
  },
  checks: {
    create: {
      headers: {
        accept: "application/vnd.github.antiope-preview+json"
      },
      method: "POST",
      params: {
        actions: {
          type: "object[]"
        },
        "actions[].description": {
          required: true,
          type: "string"
        },
        "actions[].identifier": {
          required: true,
          type: "string"
        },
        "actions[].label": {
          required: true,
          type: "string"
        },
        completed_at: {
          type: "string"
        },
        conclusion: {
          enum: ["success", "failure", "neutral", "cancelled", "timed_out", "action_required"],
          type: "string"
        },
        details_url: {
          type: "string"
        },
        external_id: {
          type: "string"
        },
        head_sha: {
          required: true,
          type: "string"
        },
        name: {
          required: true,
          type: "string"
        },
        output: {
          type: "object"
        },
        "output.annotations": {
          type: "object[]"
        },
        "output.annotations[].annotation_level": {
          enum: ["notice", "warning", "failure"],
          required: true,
          type: "string"
        },
        "output.annotations[].end_column": {
          type: "integer"
        },
        "output.annotations[].end_line": {
          required: true,
          type: "integer"
        },
        "output.annotations[].message": {
          required: true,
          type: "string"
        },
        "output.annotations[].path": {
          required: true,
          type: "string"
        },
        "output.annotations[].raw_details": {
          type: "string"
        },
        "output.annotations[].start_column": {
          type: "integer"
        },
        "output.annotations[].start_line": {
          required: true,
          type: "integer"
        },
        "output.annotations[].title": {
          type: "string"
        },
        "output.images": {
          type: "object[]"
        },
        "output.images[].alt": {
          required: true,
          type: "string"
        },
        "output.images[].caption": {
          type: "string"
        },
        "output.images[].image_url": {
          required: true,
          type: "string"
        },
        "output.summary": {
          required: true,
          type: "string"
        },
        "output.text": {
          type: "string"
        },
        "output.title": {
          required: true,
          type: "string"
        },
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        },
        started_at: {
          type: "string"
        },
        status: {
          enum: ["queued", "in_progress", "completed"],
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/check-runs"
    },
    createSuite: {
      headers: {
        accept: "application/vnd.github.antiope-preview+json"
      },
      method: "POST",
      params: {
        head_sha: {
          required: true,
          type: "string"
        },
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/check-suites"
    },
    get: {
      headers: {
        accept: "application/vnd.github.antiope-preview+json"
      },
      method: "GET",
      params: {
        check_run_id: {
          required: true,
          type: "integer"
        },
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/check-runs/:check_run_id"
    },
    getSuite: {
      headers: {
        accept: "application/vnd.github.antiope-preview+json"
      },
      method: "GET",
      params: {
        check_suite_id: {
          required: true,
          type: "integer"
        },
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/check-suites/:check_suite_id"
    },
    listAnnotations: {
      headers: {
        accept: "application/vnd.github.antiope-preview+json"
      },
      method: "GET",
      params: {
        check_run_id: {
          required: true,
          type: "integer"
        },
        owner: {
          required: true,
          type: "string"
        },
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/check-runs/:check_run_id/annotations"
    },
    listForRef: {
      headers: {
        accept: "application/vnd.github.antiope-preview+json"
      },
      method: "GET",
      params: {
        check_name: {
          type: "string"
        },
        filter: {
          enum: ["latest", "all"],
          type: "string"
        },
        owner: {
          required: true,
          type: "string"
        },
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        },
        ref: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        },
        status: {
          enum: ["queued", "in_progress", "completed"],
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/commits/:ref/check-runs"
    },
    listForSuite: {
      headers: {
        accept: "application/vnd.github.antiope-preview+json"
      },
      method: "GET",
      params: {
        check_name: {
          type: "string"
        },
        check_suite_id: {
          required: true,
          type: "integer"
        },
        filter: {
          enum: ["latest", "all"],
          type: "string"
        },
        owner: {
          required: true,
          type: "string"
        },
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        },
        repo: {
          required: true,
          type: "string"
        },
        status: {
          enum: ["queued", "in_progress", "completed"],
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/check-suites/:check_suite_id/check-runs"
    },
    listSuitesForRef: {
      headers: {
        accept: "application/vnd.github.antiope-preview+json"
      },
      method: "GET",
      params: {
        app_id: {
          type: "integer"
        },
        check_name: {
          type: "string"
        },
        owner: {
          required: true,
          type: "string"
        },
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        },
        ref: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/commits/:ref/check-suites"
    },
    rerequestSuite: {
      headers: {
        accept: "application/vnd.github.antiope-preview+json"
      },
      method: "POST",
      params: {
        check_suite_id: {
          required: true,
          type: "integer"
        },
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/check-suites/:check_suite_id/rerequest"
    },
    setSuitesPreferences: {
      headers: {
        accept: "application/vnd.github.antiope-preview+json"
      },
      method: "PATCH",
      params: {
        auto_trigger_checks: {
          type: "object[]"
        },
        "auto_trigger_checks[].app_id": {
          required: true,
          type: "integer"
        },
        "auto_trigger_checks[].setting": {
          required: true,
          type: "boolean"
        },
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/check-suites/preferences"
    },
    update: {
      headers: {
        accept: "application/vnd.github.antiope-preview+json"
      },
      method: "PATCH",
      params: {
        actions: {
          type: "object[]"
        },
        "actions[].description": {
          required: true,
          type: "string"
        },
        "actions[].identifier": {
          required: true,
          type: "string"
        },
        "actions[].label": {
          required: true,
          type: "string"
        },
        check_run_id: {
          required: true,
          type: "integer"
        },
        completed_at: {
          type: "string"
        },
        conclusion: {
          enum: ["success", "failure", "neutral", "cancelled", "timed_out", "action_required"],
          type: "string"
        },
        details_url: {
          type: "string"
        },
        external_id: {
          type: "string"
        },
        name: {
          type: "string"
        },
        output: {
          type: "object"
        },
        "output.annotations": {
          type: "object[]"
        },
        "output.annotations[].annotation_level": {
          enum: ["notice", "warning", "failure"],
          required: true,
          type: "string"
        },
        "output.annotations[].end_column": {
          type: "integer"
        },
        "output.annotations[].end_line": {
          required: true,
          type: "integer"
        },
        "output.annotations[].message": {
          required: true,
          type: "string"
        },
        "output.annotations[].path": {
          required: true,
          type: "string"
        },
        "output.annotations[].raw_details": {
          type: "string"
        },
        "output.annotations[].start_column": {
          type: "integer"
        },
        "output.annotations[].start_line": {
          required: true,
          type: "integer"
        },
        "output.annotations[].title": {
          type: "string"
        },
        "output.images": {
          type: "object[]"
        },
        "output.images[].alt": {
          required: true,
          type: "string"
        },
        "output.images[].caption": {
          type: "string"
        },
        "output.images[].image_url": {
          required: true,
          type: "string"
        },
        "output.summary": {
          required: true,
          type: "string"
        },
        "output.text": {
          type: "string"
        },
        "output.title": {
          type: "string"
        },
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        },
        started_at: {
          type: "string"
        },
        status: {
          enum: ["queued", "in_progress", "completed"],
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/check-runs/:check_run_id"
    }
  },
  codesOfConduct: {
    getConductCode: {
      headers: {
        accept: "application/vnd.github.scarlet-witch-preview+json"
      },
      method: "GET",
      params: {
        key: {
          required: true,
          type: "string"
        }
      },
      url: "/codes_of_conduct/:key"
    },
    getForRepo: {
      headers: {
        accept: "application/vnd.github.scarlet-witch-preview+json"
      },
      method: "GET",
      params: {
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/community/code_of_conduct"
    },
    listConductCodes: {
      headers: {
        accept: "application/vnd.github.scarlet-witch-preview+json"
      },
      method: "GET",
      params: {},
      url: "/codes_of_conduct"
    }
  },
  emojis: {
    get: {
      method: "GET",
      params: {},
      url: "/emojis"
    }
  },
  gists: {
    checkIsStarred: {
      method: "GET",
      params: {
        gist_id: {
          required: true,
          type: "string"
        }
      },
      url: "/gists/:gist_id/star"
    },
    create: {
      method: "POST",
      params: {
        description: {
          type: "string"
        },
        files: {
          required: true,
          type: "object"
        },
        "files.content": {
          type: "string"
        },
        public: {
          type: "boolean"
        }
      },
      url: "/gists"
    },
    createComment: {
      method: "POST",
      params: {
        body: {
          required: true,
          type: "string"
        },
        gist_id: {
          required: true,
          type: "string"
        }
      },
      url: "/gists/:gist_id/comments"
    },
    delete: {
      method: "DELETE",
      params: {
        gist_id: {
          required: true,
          type: "string"
        }
      },
      url: "/gists/:gist_id"
    },
    deleteComment: {
      method: "DELETE",
      params: {
        comment_id: {
          required: true,
          type: "integer"
        },
        gist_id: {
          required: true,
          type: "string"
        }
      },
      url: "/gists/:gist_id/comments/:comment_id"
    },
    fork: {
      method: "POST",
      params: {
        gist_id: {
          required: true,
          type: "string"
        }
      },
      url: "/gists/:gist_id/forks"
    },
    get: {
      method: "GET",
      params: {
        gist_id: {
          required: true,
          type: "string"
        }
      },
      url: "/gists/:gist_id"
    },
    getComment: {
      method: "GET",
      params: {
        comment_id: {
          required: true,
          type: "integer"
        },
        gist_id: {
          required: true,
          type: "string"
        }
      },
      url: "/gists/:gist_id/comments/:comment_id"
    },
    getRevision: {
      method: "GET",
      params: {
        gist_id: {
          required: true,
          type: "string"
        },
        sha: {
          required: true,
          type: "string"
        }
      },
      url: "/gists/:gist_id/:sha"
    },
    list: {
      method: "GET",
      params: {
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        },
        since: {
          type: "string"
        }
      },
      url: "/gists"
    },
    listComments: {
      method: "GET",
      params: {
        gist_id: {
          required: true,
          type: "string"
        },
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        }
      },
      url: "/gists/:gist_id/comments"
    },
    listCommits: {
      method: "GET",
      params: {
        gist_id: {
          required: true,
          type: "string"
        },
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        }
      },
      url: "/gists/:gist_id/commits"
    },
    listForks: {
      method: "GET",
      params: {
        gist_id: {
          required: true,
          type: "string"
        },
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        }
      },
      url: "/gists/:gist_id/forks"
    },
    listPublic: {
      method: "GET",
      params: {
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        },
        since: {
          type: "string"
        }
      },
      url: "/gists/public"
    },
    listPublicForUser: {
      method: "GET",
      params: {
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        },
        since: {
          type: "string"
        },
        username: {
          required: true,
          type: "string"
        }
      },
      url: "/users/:username/gists"
    },
    listStarred: {
      method: "GET",
      params: {
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        },
        since: {
          type: "string"
        }
      },
      url: "/gists/starred"
    },
    star: {
      method: "PUT",
      params: {
        gist_id: {
          required: true,
          type: "string"
        }
      },
      url: "/gists/:gist_id/star"
    },
    unstar: {
      method: "DELETE",
      params: {
        gist_id: {
          required: true,
          type: "string"
        }
      },
      url: "/gists/:gist_id/star"
    },
    update: {
      method: "PATCH",
      params: {
        description: {
          type: "string"
        },
        files: {
          type: "object"
        },
        "files.content": {
          type: "string"
        },
        "files.filename": {
          type: "string"
        },
        gist_id: {
          required: true,
          type: "string"
        }
      },
      url: "/gists/:gist_id"
    },
    updateComment: {
      method: "PATCH",
      params: {
        body: {
          required: true,
          type: "string"
        },
        comment_id: {
          required: true,
          type: "integer"
        },
        gist_id: {
          required: true,
          type: "string"
        }
      },
      url: "/gists/:gist_id/comments/:comment_id"
    }
  },
  git: {
    createBlob: {
      method: "POST",
      params: {
        content: {
          required: true,
          type: "string"
        },
        encoding: {
          type: "string"
        },
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/git/blobs"
    },
    createCommit: {
      method: "POST",
      params: {
        author: {
          type: "object"
        },
        "author.date": {
          type: "string"
        },
        "author.email": {
          type: "string"
        },
        "author.name": {
          type: "string"
        },
        committer: {
          type: "object"
        },
        "committer.date": {
          type: "string"
        },
        "committer.email": {
          type: "string"
        },
        "committer.name": {
          type: "string"
        },
        message: {
          required: true,
          type: "string"
        },
        owner: {
          required: true,
          type: "string"
        },
        parents: {
          required: true,
          type: "string[]"
        },
        repo: {
          required: true,
          type: "string"
        },
        signature: {
          type: "string"
        },
        tree: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/git/commits"
    },
    createRef: {
      method: "POST",
      params: {
        owner: {
          required: true,
          type: "string"
        },
        ref: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        },
        sha: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/git/refs"
    },
    createTag: {
      method: "POST",
      params: {
        message: {
          required: true,
          type: "string"
        },
        object: {
          required: true,
          type: "string"
        },
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        },
        tag: {
          required: true,
          type: "string"
        },
        tagger: {
          type: "object"
        },
        "tagger.date": {
          type: "string"
        },
        "tagger.email": {
          type: "string"
        },
        "tagger.name": {
          type: "string"
        },
        type: {
          enum: ["commit", "tree", "blob"],
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/git/tags"
    },
    createTree: {
      method: "POST",
      params: {
        base_tree: {
          type: "string"
        },
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        },
        tree: {
          required: true,
          type: "object[]"
        },
        "tree[].content": {
          type: "string"
        },
        "tree[].mode": {
          enum: ["100644", "100755", "040000", "160000", "120000"],
          type: "string"
        },
        "tree[].path": {
          type: "string"
        },
        "tree[].sha": {
          allowNull: true,
          type: "string"
        },
        "tree[].type": {
          enum: ["blob", "tree", "commit"],
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/git/trees"
    },
    deleteRef: {
      method: "DELETE",
      params: {
        owner: {
          required: true,
          type: "string"
        },
        ref: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/git/refs/:ref"
    },
    getBlob: {
      method: "GET",
      params: {
        file_sha: {
          required: true,
          type: "string"
        },
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/git/blobs/:file_sha"
    },
    getCommit: {
      method: "GET",
      params: {
        commit_sha: {
          required: true,
          type: "string"
        },
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/git/commits/:commit_sha"
    },
    getRef: {
      method: "GET",
      params: {
        owner: {
          required: true,
          type: "string"
        },
        ref: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/git/ref/:ref"
    },
    getTag: {
      method: "GET",
      params: {
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        },
        tag_sha: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/git/tags/:tag_sha"
    },
    getTree: {
      method: "GET",
      params: {
        owner: {
          required: true,
          type: "string"
        },
        recursive: {
          enum: ["1"],
          type: "integer"
        },
        repo: {
          required: true,
          type: "string"
        },
        tree_sha: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/git/trees/:tree_sha"
    },
    listMatchingRefs: {
      method: "GET",
      params: {
        owner: {
          required: true,
          type: "string"
        },
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        },
        ref: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/git/matching-refs/:ref"
    },
    listRefs: {
      method: "GET",
      params: {
        namespace: {
          type: "string"
        },
        owner: {
          required: true,
          type: "string"
        },
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/git/refs/:namespace"
    },
    updateRef: {
      method: "PATCH",
      params: {
        force: {
          type: "boolean"
        },
        owner: {
          required: true,
          type: "string"
        },
        ref: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        },
        sha: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/git/refs/:ref"
    }
  },
  gitignore: {
    getTemplate: {
      method: "GET",
      params: {
        name: {
          required: true,
          type: "string"
        }
      },
      url: "/gitignore/templates/:name"
    },
    listTemplates: {
      method: "GET",
      params: {},
      url: "/gitignore/templates"
    }
  },
  interactions: {
    addOrUpdateRestrictionsForOrg: {
      headers: {
        accept: "application/vnd.github.sombra-preview+json"
      },
      method: "PUT",
      params: {
        limit: {
          enum: ["existing_users", "contributors_only", "collaborators_only"],
          required: true,
          type: "string"
        },
        org: {
          required: true,
          type: "string"
        }
      },
      url: "/orgs/:org/interaction-limits"
    },
    addOrUpdateRestrictionsForRepo: {
      headers: {
        accept: "application/vnd.github.sombra-preview+json"
      },
      method: "PUT",
      params: {
        limit: {
          enum: ["existing_users", "contributors_only", "collaborators_only"],
          required: true,
          type: "string"
        },
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/interaction-limits"
    },
    getRestrictionsForOrg: {
      headers: {
        accept: "application/vnd.github.sombra-preview+json"
      },
      method: "GET",
      params: {
        org: {
          required: true,
          type: "string"
        }
      },
      url: "/orgs/:org/interaction-limits"
    },
    getRestrictionsForRepo: {
      headers: {
        accept: "application/vnd.github.sombra-preview+json"
      },
      method: "GET",
      params: {
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/interaction-limits"
    },
    removeRestrictionsForOrg: {
      headers: {
        accept: "application/vnd.github.sombra-preview+json"
      },
      method: "DELETE",
      params: {
        org: {
          required: true,
          type: "string"
        }
      },
      url: "/orgs/:org/interaction-limits"
    },
    removeRestrictionsForRepo: {
      headers: {
        accept: "application/vnd.github.sombra-preview+json"
      },
      method: "DELETE",
      params: {
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/interaction-limits"
    }
  },
  issues: {
    addAssignees: {
      method: "POST",
      params: {
        assignees: {
          type: "string[]"
        },
        issue_number: {
          required: true,
          type: "integer"
        },
        number: {
          alias: "issue_number",
          deprecated: true,
          type: "integer"
        },
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/issues/:issue_number/assignees"
    },
    addLabels: {
      method: "POST",
      params: {
        issue_number: {
          required: true,
          type: "integer"
        },
        labels: {
          required: true,
          type: "string[]"
        },
        number: {
          alias: "issue_number",
          deprecated: true,
          type: "integer"
        },
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/issues/:issue_number/labels"
    },
    checkAssignee: {
      method: "GET",
      params: {
        assignee: {
          required: true,
          type: "string"
        },
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/assignees/:assignee"
    },
    create: {
      method: "POST",
      params: {
        assignee: {
          type: "string"
        },
        assignees: {
          type: "string[]"
        },
        body: {
          type: "string"
        },
        labels: {
          type: "string[]"
        },
        milestone: {
          type: "integer"
        },
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        },
        title: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/issues"
    },
    createComment: {
      method: "POST",
      params: {
        body: {
          required: true,
          type: "string"
        },
        issue_number: {
          required: true,
          type: "integer"
        },
        number: {
          alias: "issue_number",
          deprecated: true,
          type: "integer"
        },
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/issues/:issue_number/comments"
    },
    createLabel: {
      method: "POST",
      params: {
        color: {
          required: true,
          type: "string"
        },
        description: {
          type: "string"
        },
        name: {
          required: true,
          type: "string"
        },
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/labels"
    },
    createMilestone: {
      method: "POST",
      params: {
        description: {
          type: "string"
        },
        due_on: {
          type: "string"
        },
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        },
        state: {
          enum: ["open", "closed"],
          type: "string"
        },
        title: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/milestones"
    },
    deleteComment: {
      method: "DELETE",
      params: {
        comment_id: {
          required: true,
          type: "integer"
        },
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/issues/comments/:comment_id"
    },
    deleteLabel: {
      method: "DELETE",
      params: {
        name: {
          required: true,
          type: "string"
        },
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/labels/:name"
    },
    deleteMilestone: {
      method: "DELETE",
      params: {
        milestone_number: {
          required: true,
          type: "integer"
        },
        number: {
          alias: "milestone_number",
          deprecated: true,
          type: "integer"
        },
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/milestones/:milestone_number"
    },
    get: {
      method: "GET",
      params: {
        issue_number: {
          required: true,
          type: "integer"
        },
        number: {
          alias: "issue_number",
          deprecated: true,
          type: "integer"
        },
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/issues/:issue_number"
    },
    getComment: {
      method: "GET",
      params: {
        comment_id: {
          required: true,
          type: "integer"
        },
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/issues/comments/:comment_id"
    },
    getEvent: {
      method: "GET",
      params: {
        event_id: {
          required: true,
          type: "integer"
        },
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/issues/events/:event_id"
    },
    getLabel: {
      method: "GET",
      params: {
        name: {
          required: true,
          type: "string"
        },
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/labels/:name"
    },
    getMilestone: {
      method: "GET",
      params: {
        milestone_number: {
          required: true,
          type: "integer"
        },
        number: {
          alias: "milestone_number",
          deprecated: true,
          type: "integer"
        },
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/milestones/:milestone_number"
    },
    list: {
      method: "GET",
      params: {
        direction: {
          enum: ["asc", "desc"],
          type: "string"
        },
        filter: {
          enum: ["assigned", "created", "mentioned", "subscribed", "all"],
          type: "string"
        },
        labels: {
          type: "string"
        },
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        },
        since: {
          type: "string"
        },
        sort: {
          enum: ["created", "updated", "comments"],
          type: "string"
        },
        state: {
          enum: ["open", "closed", "all"],
          type: "string"
        }
      },
      url: "/issues"
    },
    listAssignees: {
      method: "GET",
      params: {
        owner: {
          required: true,
          type: "string"
        },
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/assignees"
    },
    listComments: {
      method: "GET",
      params: {
        issue_number: {
          required: true,
          type: "integer"
        },
        number: {
          alias: "issue_number",
          deprecated: true,
          type: "integer"
        },
        owner: {
          required: true,
          type: "string"
        },
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        },
        repo: {
          required: true,
          type: "string"
        },
        since: {
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/issues/:issue_number/comments"
    },
    listCommentsForRepo: {
      method: "GET",
      params: {
        direction: {
          enum: ["asc", "desc"],
          type: "string"
        },
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        },
        since: {
          type: "string"
        },
        sort: {
          enum: ["created", "updated"],
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/issues/comments"
    },
    listEvents: {
      method: "GET",
      params: {
        issue_number: {
          required: true,
          type: "integer"
        },
        number: {
          alias: "issue_number",
          deprecated: true,
          type: "integer"
        },
        owner: {
          required: true,
          type: "string"
        },
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/issues/:issue_number/events"
    },
    listEventsForRepo: {
      method: "GET",
      params: {
        owner: {
          required: true,
          type: "string"
        },
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/issues/events"
    },
    listEventsForTimeline: {
      headers: {
        accept: "application/vnd.github.mockingbird-preview+json"
      },
      method: "GET",
      params: {
        issue_number: {
          required: true,
          type: "integer"
        },
        number: {
          alias: "issue_number",
          deprecated: true,
          type: "integer"
        },
        owner: {
          required: true,
          type: "string"
        },
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/issues/:issue_number/timeline"
    },
    listForAuthenticatedUser: {
      method: "GET",
      params: {
        direction: {
          enum: ["asc", "desc"],
          type: "string"
        },
        filter: {
          enum: ["assigned", "created", "mentioned", "subscribed", "all"],
          type: "string"
        },
        labels: {
          type: "string"
        },
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        },
        since: {
          type: "string"
        },
        sort: {
          enum: ["created", "updated", "comments"],
          type: "string"
        },
        state: {
          enum: ["open", "closed", "all"],
          type: "string"
        }
      },
      url: "/user/issues"
    },
    listForOrg: {
      method: "GET",
      params: {
        direction: {
          enum: ["asc", "desc"],
          type: "string"
        },
        filter: {
          enum: ["assigned", "created", "mentioned", "subscribed", "all"],
          type: "string"
        },
        labels: {
          type: "string"
        },
        org: {
          required: true,
          type: "string"
        },
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        },
        since: {
          type: "string"
        },
        sort: {
          enum: ["created", "updated", "comments"],
          type: "string"
        },
        state: {
          enum: ["open", "closed", "all"],
          type: "string"
        }
      },
      url: "/orgs/:org/issues"
    },
    listForRepo: {
      method: "GET",
      params: {
        assignee: {
          type: "string"
        },
        creator: {
          type: "string"
        },
        direction: {
          enum: ["asc", "desc"],
          type: "string"
        },
        labels: {
          type: "string"
        },
        mentioned: {
          type: "string"
        },
        milestone: {
          type: "string"
        },
        owner: {
          required: true,
          type: "string"
        },
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        },
        repo: {
          required: true,
          type: "string"
        },
        since: {
          type: "string"
        },
        sort: {
          enum: ["created", "updated", "comments"],
          type: "string"
        },
        state: {
          enum: ["open", "closed", "all"],
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/issues"
    },
    listLabelsForMilestone: {
      method: "GET",
      params: {
        milestone_number: {
          required: true,
          type: "integer"
        },
        number: {
          alias: "milestone_number",
          deprecated: true,
          type: "integer"
        },
        owner: {
          required: true,
          type: "string"
        },
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/milestones/:milestone_number/labels"
    },
    listLabelsForRepo: {
      method: "GET",
      params: {
        owner: {
          required: true,
          type: "string"
        },
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/labels"
    },
    listLabelsOnIssue: {
      method: "GET",
      params: {
        issue_number: {
          required: true,
          type: "integer"
        },
        number: {
          alias: "issue_number",
          deprecated: true,
          type: "integer"
        },
        owner: {
          required: true,
          type: "string"
        },
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/issues/:issue_number/labels"
    },
    listMilestonesForRepo: {
      method: "GET",
      params: {
        direction: {
          enum: ["asc", "desc"],
          type: "string"
        },
        owner: {
          required: true,
          type: "string"
        },
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        },
        repo: {
          required: true,
          type: "string"
        },
        sort: {
          enum: ["due_on", "completeness"],
          type: "string"
        },
        state: {
          enum: ["open", "closed", "all"],
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/milestones"
    },
    lock: {
      method: "PUT",
      params: {
        issue_number: {
          required: true,
          type: "integer"
        },
        lock_reason: {
          enum: ["off-topic", "too heated", "resolved", "spam"],
          type: "string"
        },
        number: {
          alias: "issue_number",
          deprecated: true,
          type: "integer"
        },
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/issues/:issue_number/lock"
    },
    removeAssignees: {
      method: "DELETE",
      params: {
        assignees: {
          type: "string[]"
        },
        issue_number: {
          required: true,
          type: "integer"
        },
        number: {
          alias: "issue_number",
          deprecated: true,
          type: "integer"
        },
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/issues/:issue_number/assignees"
    },
    removeLabel: {
      method: "DELETE",
      params: {
        issue_number: {
          required: true,
          type: "integer"
        },
        name: {
          required: true,
          type: "string"
        },
        number: {
          alias: "issue_number",
          deprecated: true,
          type: "integer"
        },
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/issues/:issue_number/labels/:name"
    },
    removeLabels: {
      method: "DELETE",
      params: {
        issue_number: {
          required: true,
          type: "integer"
        },
        number: {
          alias: "issue_number",
          deprecated: true,
          type: "integer"
        },
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/issues/:issue_number/labels"
    },
    replaceLabels: {
      method: "PUT",
      params: {
        issue_number: {
          required: true,
          type: "integer"
        },
        labels: {
          type: "string[]"
        },
        number: {
          alias: "issue_number",
          deprecated: true,
          type: "integer"
        },
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/issues/:issue_number/labels"
    },
    unlock: {
      method: "DELETE",
      params: {
        issue_number: {
          required: true,
          type: "integer"
        },
        number: {
          alias: "issue_number",
          deprecated: true,
          type: "integer"
        },
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/issues/:issue_number/lock"
    },
    update: {
      method: "PATCH",
      params: {
        assignee: {
          type: "string"
        },
        assignees: {
          type: "string[]"
        },
        body: {
          type: "string"
        },
        issue_number: {
          required: true,
          type: "integer"
        },
        labels: {
          type: "string[]"
        },
        milestone: {
          allowNull: true,
          type: "integer"
        },
        number: {
          alias: "issue_number",
          deprecated: true,
          type: "integer"
        },
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        },
        state: {
          enum: ["open", "closed"],
          type: "string"
        },
        title: {
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/issues/:issue_number"
    },
    updateComment: {
      method: "PATCH",
      params: {
        body: {
          required: true,
          type: "string"
        },
        comment_id: {
          required: true,
          type: "integer"
        },
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/issues/comments/:comment_id"
    },
    updateLabel: {
      method: "PATCH",
      params: {
        color: {
          type: "string"
        },
        current_name: {
          required: true,
          type: "string"
        },
        description: {
          type: "string"
        },
        name: {
          type: "string"
        },
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/labels/:current_name"
    },
    updateMilestone: {
      method: "PATCH",
      params: {
        description: {
          type: "string"
        },
        due_on: {
          type: "string"
        },
        milestone_number: {
          required: true,
          type: "integer"
        },
        number: {
          alias: "milestone_number",
          deprecated: true,
          type: "integer"
        },
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        },
        state: {
          enum: ["open", "closed"],
          type: "string"
        },
        title: {
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/milestones/:milestone_number"
    }
  },
  licenses: {
    get: {
      method: "GET",
      params: {
        license: {
          required: true,
          type: "string"
        }
      },
      url: "/licenses/:license"
    },
    getForRepo: {
      method: "GET",
      params: {
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/license"
    },
    list: {
      deprecated: "octokit.licenses.list() has been renamed to octokit.licenses.listCommonlyUsed() (2019-03-05)",
      method: "GET",
      params: {},
      url: "/licenses"
    },
    listCommonlyUsed: {
      method: "GET",
      params: {},
      url: "/licenses"
    }
  },
  markdown: {
    render: {
      method: "POST",
      params: {
        context: {
          type: "string"
        },
        mode: {
          enum: ["markdown", "gfm"],
          type: "string"
        },
        text: {
          required: true,
          type: "string"
        }
      },
      url: "/markdown"
    },
    renderRaw: {
      headers: {
        "content-type": "text/plain; charset=utf-8"
      },
      method: "POST",
      params: {
        data: {
          mapTo: "data",
          required: true,
          type: "string"
        }
      },
      url: "/markdown/raw"
    }
  },
  meta: {
    get: {
      method: "GET",
      params: {},
      url: "/meta"
    }
  },
  migrations: {
    cancelImport: {
      method: "DELETE",
      params: {
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/import"
    },
    deleteArchiveForAuthenticatedUser: {
      headers: {
        accept: "application/vnd.github.wyandotte-preview+json"
      },
      method: "DELETE",
      params: {
        migration_id: {
          required: true,
          type: "integer"
        }
      },
      url: "/user/migrations/:migration_id/archive"
    },
    deleteArchiveForOrg: {
      headers: {
        accept: "application/vnd.github.wyandotte-preview+json"
      },
      method: "DELETE",
      params: {
        migration_id: {
          required: true,
          type: "integer"
        },
        org: {
          required: true,
          type: "string"
        }
      },
      url: "/orgs/:org/migrations/:migration_id/archive"
    },
    downloadArchiveForOrg: {
      headers: {
        accept: "application/vnd.github.wyandotte-preview+json"
      },
      method: "GET",
      params: {
        migration_id: {
          required: true,
          type: "integer"
        },
        org: {
          required: true,
          type: "string"
        }
      },
      url: "/orgs/:org/migrations/:migration_id/archive"
    },
    getArchiveForAuthenticatedUser: {
      headers: {
        accept: "application/vnd.github.wyandotte-preview+json"
      },
      method: "GET",
      params: {
        migration_id: {
          required: true,
          type: "integer"
        }
      },
      url: "/user/migrations/:migration_id/archive"
    },
    getArchiveForOrg: {
      deprecated: "octokit.migrations.getArchiveForOrg() has been renamed to octokit.migrations.downloadArchiveForOrg() (2020-01-27)",
      headers: {
        accept: "application/vnd.github.wyandotte-preview+json"
      },
      method: "GET",
      params: {
        migration_id: {
          required: true,
          type: "integer"
        },
        org: {
          required: true,
          type: "string"
        }
      },
      url: "/orgs/:org/migrations/:migration_id/archive"
    },
    getCommitAuthors: {
      method: "GET",
      params: {
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        },
        since: {
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/import/authors"
    },
    getImportProgress: {
      method: "GET",
      params: {
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/import"
    },
    getLargeFiles: {
      method: "GET",
      params: {
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/import/large_files"
    },
    getStatusForAuthenticatedUser: {
      headers: {
        accept: "application/vnd.github.wyandotte-preview+json"
      },
      method: "GET",
      params: {
        migration_id: {
          required: true,
          type: "integer"
        }
      },
      url: "/user/migrations/:migration_id"
    },
    getStatusForOrg: {
      headers: {
        accept: "application/vnd.github.wyandotte-preview+json"
      },
      method: "GET",
      params: {
        migration_id: {
          required: true,
          type: "integer"
        },
        org: {
          required: true,
          type: "string"
        }
      },
      url: "/orgs/:org/migrations/:migration_id"
    },
    listForAuthenticatedUser: {
      headers: {
        accept: "application/vnd.github.wyandotte-preview+json"
      },
      method: "GET",
      params: {
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        }
      },
      url: "/user/migrations"
    },
    listForOrg: {
      headers: {
        accept: "application/vnd.github.wyandotte-preview+json"
      },
      method: "GET",
      params: {
        org: {
          required: true,
          type: "string"
        },
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        }
      },
      url: "/orgs/:org/migrations"
    },
    listReposForOrg: {
      headers: {
        accept: "application/vnd.github.wyandotte-preview+json"
      },
      method: "GET",
      params: {
        migration_id: {
          required: true,
          type: "integer"
        },
        org: {
          required: true,
          type: "string"
        },
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        }
      },
      url: "/orgs/:org/migrations/:migration_id/repositories"
    },
    listReposForUser: {
      headers: {
        accept: "application/vnd.github.wyandotte-preview+json"
      },
      method: "GET",
      params: {
        migration_id: {
          required: true,
          type: "integer"
        },
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        }
      },
      url: "/user/:migration_id/repositories"
    },
    mapCommitAuthor: {
      method: "PATCH",
      params: {
        author_id: {
          required: true,
          type: "integer"
        },
        email: {
          type: "string"
        },
        name: {
          type: "string"
        },
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/import/authors/:author_id"
    },
    setLfsPreference: {
      method: "PATCH",
      params: {
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        },
        use_lfs: {
          enum: ["opt_in", "opt_out"],
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/import/lfs"
    },
    startForAuthenticatedUser: {
      method: "POST",
      params: {
        exclude_attachments: {
          type: "boolean"
        },
        lock_repositories: {
          type: "boolean"
        },
        repositories: {
          required: true,
          type: "string[]"
        }
      },
      url: "/user/migrations"
    },
    startForOrg: {
      method: "POST",
      params: {
        exclude_attachments: {
          type: "boolean"
        },
        lock_repositories: {
          type: "boolean"
        },
        org: {
          required: true,
          type: "string"
        },
        repositories: {
          required: true,
          type: "string[]"
        }
      },
      url: "/orgs/:org/migrations"
    },
    startImport: {
      method: "PUT",
      params: {
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        },
        tfvc_project: {
          type: "string"
        },
        vcs: {
          enum: ["subversion", "git", "mercurial", "tfvc"],
          type: "string"
        },
        vcs_password: {
          type: "string"
        },
        vcs_url: {
          required: true,
          type: "string"
        },
        vcs_username: {
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/import"
    },
    unlockRepoForAuthenticatedUser: {
      headers: {
        accept: "application/vnd.github.wyandotte-preview+json"
      },
      method: "DELETE",
      params: {
        migration_id: {
          required: true,
          type: "integer"
        },
        repo_name: {
          required: true,
          type: "string"
        }
      },
      url: "/user/migrations/:migration_id/repos/:repo_name/lock"
    },
    unlockRepoForOrg: {
      headers: {
        accept: "application/vnd.github.wyandotte-preview+json"
      },
      method: "DELETE",
      params: {
        migration_id: {
          required: true,
          type: "integer"
        },
        org: {
          required: true,
          type: "string"
        },
        repo_name: {
          required: true,
          type: "string"
        }
      },
      url: "/orgs/:org/migrations/:migration_id/repos/:repo_name/lock"
    },
    updateImport: {
      method: "PATCH",
      params: {
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        },
        vcs_password: {
          type: "string"
        },
        vcs_username: {
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/import"
    }
  },
  oauthAuthorizations: {
    checkAuthorization: {
      deprecated: "octokit.oauthAuthorizations.checkAuthorization() has been renamed to octokit.apps.checkAuthorization() (2019-11-05)",
      method: "GET",
      params: {
        access_token: {
          required: true,
          type: "string"
        },
        client_id: {
          required: true,
          type: "string"
        }
      },
      url: "/applications/:client_id/tokens/:access_token"
    },
    createAuthorization: {
      deprecated: "octokit.oauthAuthorizations.createAuthorization() is deprecated, see https://developer.github.com/v3/oauth_authorizations/#create-a-new-authorization",
      method: "POST",
      params: {
        client_id: {
          type: "string"
        },
        client_secret: {
          type: "string"
        },
        fingerprint: {
          type: "string"
        },
        note: {
          required: true,
          type: "string"
        },
        note_url: {
          type: "string"
        },
        scopes: {
          type: "string[]"
        }
      },
      url: "/authorizations"
    },
    deleteAuthorization: {
      deprecated: "octokit.oauthAuthorizations.deleteAuthorization() is deprecated, see https://developer.github.com/v3/oauth_authorizations/#delete-an-authorization",
      method: "DELETE",
      params: {
        authorization_id: {
          required: true,
          type: "integer"
        }
      },
      url: "/authorizations/:authorization_id"
    },
    deleteGrant: {
      deprecated: "octokit.oauthAuthorizations.deleteGrant() is deprecated, see https://developer.github.com/v3/oauth_authorizations/#delete-a-grant",
      method: "DELETE",
      params: {
        grant_id: {
          required: true,
          type: "integer"
        }
      },
      url: "/applications/grants/:grant_id"
    },
    getAuthorization: {
      deprecated: "octokit.oauthAuthorizations.getAuthorization() is deprecated, see https://developer.github.com/v3/oauth_authorizations/#get-a-single-authorization",
      method: "GET",
      params: {
        authorization_id: {
          required: true,
          type: "integer"
        }
      },
      url: "/authorizations/:authorization_id"
    },
    getGrant: {
      deprecated: "octokit.oauthAuthorizations.getGrant() is deprecated, see https://developer.github.com/v3/oauth_authorizations/#get-a-single-grant",
      method: "GET",
      params: {
        grant_id: {
          required: true,
          type: "integer"
        }
      },
      url: "/applications/grants/:grant_id"
    },
    getOrCreateAuthorizationForApp: {
      deprecated: "octokit.oauthAuthorizations.getOrCreateAuthorizationForApp() is deprecated, see https://developer.github.com/v3/oauth_authorizations/#get-or-create-an-authorization-for-a-specific-app",
      method: "PUT",
      params: {
        client_id: {
          required: true,
          type: "string"
        },
        client_secret: {
          required: true,
          type: "string"
        },
        fingerprint: {
          type: "string"
        },
        note: {
          type: "string"
        },
        note_url: {
          type: "string"
        },
        scopes: {
          type: "string[]"
        }
      },
      url: "/authorizations/clients/:client_id"
    },
    getOrCreateAuthorizationForAppAndFingerprint: {
      deprecated: "octokit.oauthAuthorizations.getOrCreateAuthorizationForAppAndFingerprint() is deprecated, see https://developer.github.com/v3/oauth_authorizations/#get-or-create-an-authorization-for-a-specific-app-and-fingerprint",
      method: "PUT",
      params: {
        client_id: {
          required: true,
          type: "string"
        },
        client_secret: {
          required: true,
          type: "string"
        },
        fingerprint: {
          required: true,
          type: "string"
        },
        note: {
          type: "string"
        },
        note_url: {
          type: "string"
        },
        scopes: {
          type: "string[]"
        }
      },
      url: "/authorizations/clients/:client_id/:fingerprint"
    },
    getOrCreateAuthorizationForAppFingerprint: {
      deprecated: "octokit.oauthAuthorizations.getOrCreateAuthorizationForAppFingerprint() has been renamed to octokit.oauthAuthorizations.getOrCreateAuthorizationForAppAndFingerprint() (2018-12-27)",
      method: "PUT",
      params: {
        client_id: {
          required: true,
          type: "string"
        },
        client_secret: {
          required: true,
          type: "string"
        },
        fingerprint: {
          required: true,
          type: "string"
        },
        note: {
          type: "string"
        },
        note_url: {
          type: "string"
        },
        scopes: {
          type: "string[]"
        }
      },
      url: "/authorizations/clients/:client_id/:fingerprint"
    },
    listAuthorizations: {
      deprecated: "octokit.oauthAuthorizations.listAuthorizations() is deprecated, see https://developer.github.com/v3/oauth_authorizations/#list-your-authorizations",
      method: "GET",
      params: {
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        }
      },
      url: "/authorizations"
    },
    listGrants: {
      deprecated: "octokit.oauthAuthorizations.listGrants() is deprecated, see https://developer.github.com/v3/oauth_authorizations/#list-your-grants",
      method: "GET",
      params: {
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        }
      },
      url: "/applications/grants"
    },
    resetAuthorization: {
      deprecated: "octokit.oauthAuthorizations.resetAuthorization() has been renamed to octokit.apps.resetAuthorization() (2019-11-05)",
      method: "POST",
      params: {
        access_token: {
          required: true,
          type: "string"
        },
        client_id: {
          required: true,
          type: "string"
        }
      },
      url: "/applications/:client_id/tokens/:access_token"
    },
    revokeAuthorizationForApplication: {
      deprecated: "octokit.oauthAuthorizations.revokeAuthorizationForApplication() has been renamed to octokit.apps.revokeAuthorizationForApplication() (2019-11-05)",
      method: "DELETE",
      params: {
        access_token: {
          required: true,
          type: "string"
        },
        client_id: {
          required: true,
          type: "string"
        }
      },
      url: "/applications/:client_id/tokens/:access_token"
    },
    revokeGrantForApplication: {
      deprecated: "octokit.oauthAuthorizations.revokeGrantForApplication() has been renamed to octokit.apps.revokeGrantForApplication() (2019-11-05)",
      method: "DELETE",
      params: {
        access_token: {
          required: true,
          type: "string"
        },
        client_id: {
          required: true,
          type: "string"
        }
      },
      url: "/applications/:client_id/grants/:access_token"
    },
    updateAuthorization: {
      deprecated: "octokit.oauthAuthorizations.updateAuthorization() is deprecated, see https://developer.github.com/v3/oauth_authorizations/#update-an-existing-authorization",
      method: "PATCH",
      params: {
        add_scopes: {
          type: "string[]"
        },
        authorization_id: {
          required: true,
          type: "integer"
        },
        fingerprint: {
          type: "string"
        },
        note: {
          type: "string"
        },
        note_url: {
          type: "string"
        },
        remove_scopes: {
          type: "string[]"
        },
        scopes: {
          type: "string[]"
        }
      },
      url: "/authorizations/:authorization_id"
    }
  },
  orgs: {
    addOrUpdateMembership: {
      method: "PUT",
      params: {
        org: {
          required: true,
          type: "string"
        },
        role: {
          enum: ["admin", "member"],
          type: "string"
        },
        username: {
          required: true,
          type: "string"
        }
      },
      url: "/orgs/:org/memberships/:username"
    },
    blockUser: {
      method: "PUT",
      params: {
        org: {
          required: true,
          type: "string"
        },
        username: {
          required: true,
          type: "string"
        }
      },
      url: "/orgs/:org/blocks/:username"
    },
    checkBlockedUser: {
      method: "GET",
      params: {
        org: {
          required: true,
          type: "string"
        },
        username: {
          required: true,
          type: "string"
        }
      },
      url: "/orgs/:org/blocks/:username"
    },
    checkMembership: {
      method: "GET",
      params: {
        org: {
          required: true,
          type: "string"
        },
        username: {
          required: true,
          type: "string"
        }
      },
      url: "/orgs/:org/members/:username"
    },
    checkPublicMembership: {
      method: "GET",
      params: {
        org: {
          required: true,
          type: "string"
        },
        username: {
          required: true,
          type: "string"
        }
      },
      url: "/orgs/:org/public_members/:username"
    },
    concealMembership: {
      method: "DELETE",
      params: {
        org: {
          required: true,
          type: "string"
        },
        username: {
          required: true,
          type: "string"
        }
      },
      url: "/orgs/:org/public_members/:username"
    },
    convertMemberToOutsideCollaborator: {
      method: "PUT",
      params: {
        org: {
          required: true,
          type: "string"
        },
        username: {
          required: true,
          type: "string"
        }
      },
      url: "/orgs/:org/outside_collaborators/:username"
    },
    createHook: {
      method: "POST",
      params: {
        active: {
          type: "boolean"
        },
        config: {
          required: true,
          type: "object"
        },
        "config.content_type": {
          type: "string"
        },
        "config.insecure_ssl": {
          type: "string"
        },
        "config.secret": {
          type: "string"
        },
        "config.url": {
          required: true,
          type: "string"
        },
        events: {
          type: "string[]"
        },
        name: {
          required: true,
          type: "string"
        },
        org: {
          required: true,
          type: "string"
        }
      },
      url: "/orgs/:org/hooks"
    },
    createInvitation: {
      method: "POST",
      params: {
        email: {
          type: "string"
        },
        invitee_id: {
          type: "integer"
        },
        org: {
          required: true,
          type: "string"
        },
        role: {
          enum: ["admin", "direct_member", "billing_manager"],
          type: "string"
        },
        team_ids: {
          type: "integer[]"
        }
      },
      url: "/orgs/:org/invitations"
    },
    deleteHook: {
      method: "DELETE",
      params: {
        hook_id: {
          required: true,
          type: "integer"
        },
        org: {
          required: true,
          type: "string"
        }
      },
      url: "/orgs/:org/hooks/:hook_id"
    },
    get: {
      method: "GET",
      params: {
        org: {
          required: true,
          type: "string"
        }
      },
      url: "/orgs/:org"
    },
    getHook: {
      method: "GET",
      params: {
        hook_id: {
          required: true,
          type: "integer"
        },
        org: {
          required: true,
          type: "string"
        }
      },
      url: "/orgs/:org/hooks/:hook_id"
    },
    getMembership: {
      method: "GET",
      params: {
        org: {
          required: true,
          type: "string"
        },
        username: {
          required: true,
          type: "string"
        }
      },
      url: "/orgs/:org/memberships/:username"
    },
    getMembershipForAuthenticatedUser: {
      method: "GET",
      params: {
        org: {
          required: true,
          type: "string"
        }
      },
      url: "/user/memberships/orgs/:org"
    },
    list: {
      method: "GET",
      params: {
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        },
        since: {
          type: "integer"
        }
      },
      url: "/organizations"
    },
    listBlockedUsers: {
      method: "GET",
      params: {
        org: {
          required: true,
          type: "string"
        }
      },
      url: "/orgs/:org/blocks"
    },
    listForAuthenticatedUser: {
      method: "GET",
      params: {
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        }
      },
      url: "/user/orgs"
    },
    listForUser: {
      method: "GET",
      params: {
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        },
        username: {
          required: true,
          type: "string"
        }
      },
      url: "/users/:username/orgs"
    },
    listHooks: {
      method: "GET",
      params: {
        org: {
          required: true,
          type: "string"
        },
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        }
      },
      url: "/orgs/:org/hooks"
    },
    listInstallations: {
      headers: {
        accept: "application/vnd.github.machine-man-preview+json"
      },
      method: "GET",
      params: {
        org: {
          required: true,
          type: "string"
        },
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        }
      },
      url: "/orgs/:org/installations"
    },
    listInvitationTeams: {
      method: "GET",
      params: {
        invitation_id: {
          required: true,
          type: "integer"
        },
        org: {
          required: true,
          type: "string"
        },
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        }
      },
      url: "/orgs/:org/invitations/:invitation_id/teams"
    },
    listMembers: {
      method: "GET",
      params: {
        filter: {
          enum: ["2fa_disabled", "all"],
          type: "string"
        },
        org: {
          required: true,
          type: "string"
        },
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        },
        role: {
          enum: ["all", "admin", "member"],
          type: "string"
        }
      },
      url: "/orgs/:org/members"
    },
    listMemberships: {
      method: "GET",
      params: {
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        },
        state: {
          enum: ["active", "pending"],
          type: "string"
        }
      },
      url: "/user/memberships/orgs"
    },
    listOutsideCollaborators: {
      method: "GET",
      params: {
        filter: {
          enum: ["2fa_disabled", "all"],
          type: "string"
        },
        org: {
          required: true,
          type: "string"
        },
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        }
      },
      url: "/orgs/:org/outside_collaborators"
    },
    listPendingInvitations: {
      method: "GET",
      params: {
        org: {
          required: true,
          type: "string"
        },
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        }
      },
      url: "/orgs/:org/invitations"
    },
    listPublicMembers: {
      method: "GET",
      params: {
        org: {
          required: true,
          type: "string"
        },
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        }
      },
      url: "/orgs/:org/public_members"
    },
    pingHook: {
      method: "POST",
      params: {
        hook_id: {
          required: true,
          type: "integer"
        },
        org: {
          required: true,
          type: "string"
        }
      },
      url: "/orgs/:org/hooks/:hook_id/pings"
    },
    publicizeMembership: {
      method: "PUT",
      params: {
        org: {
          required: true,
          type: "string"
        },
        username: {
          required: true,
          type: "string"
        }
      },
      url: "/orgs/:org/public_members/:username"
    },
    removeMember: {
      method: "DELETE",
      params: {
        org: {
          required: true,
          type: "string"
        },
        username: {
          required: true,
          type: "string"
        }
      },
      url: "/orgs/:org/members/:username"
    },
    removeMembership: {
      method: "DELETE",
      params: {
        org: {
          required: true,
          type: "string"
        },
        username: {
          required: true,
          type: "string"
        }
      },
      url: "/orgs/:org/memberships/:username"
    },
    removeOutsideCollaborator: {
      method: "DELETE",
      params: {
        org: {
          required: true,
          type: "string"
        },
        username: {
          required: true,
          type: "string"
        }
      },
      url: "/orgs/:org/outside_collaborators/:username"
    },
    unblockUser: {
      method: "DELETE",
      params: {
        org: {
          required: true,
          type: "string"
        },
        username: {
          required: true,
          type: "string"
        }
      },
      url: "/orgs/:org/blocks/:username"
    },
    update: {
      method: "PATCH",
      params: {
        billing_email: {
          type: "string"
        },
        company: {
          type: "string"
        },
        default_repository_permission: {
          enum: ["read", "write", "admin", "none"],
          type: "string"
        },
        description: {
          type: "string"
        },
        email: {
          type: "string"
        },
        has_organization_projects: {
          type: "boolean"
        },
        has_repository_projects: {
          type: "boolean"
        },
        location: {
          type: "string"
        },
        members_allowed_repository_creation_type: {
          enum: ["all", "private", "none"],
          type: "string"
        },
        members_can_create_internal_repositories: {
          type: "boolean"
        },
        members_can_create_private_repositories: {
          type: "boolean"
        },
        members_can_create_public_repositories: {
          type: "boolean"
        },
        members_can_create_repositories: {
          type: "boolean"
        },
        name: {
          type: "string"
        },
        org: {
          required: true,
          type: "string"
        }
      },
      url: "/orgs/:org"
    },
    updateHook: {
      method: "PATCH",
      params: {
        active: {
          type: "boolean"
        },
        config: {
          type: "object"
        },
        "config.content_type": {
          type: "string"
        },
        "config.insecure_ssl": {
          type: "string"
        },
        "config.secret": {
          type: "string"
        },
        "config.url": {
          required: true,
          type: "string"
        },
        events: {
          type: "string[]"
        },
        hook_id: {
          required: true,
          type: "integer"
        },
        org: {
          required: true,
          type: "string"
        }
      },
      url: "/orgs/:org/hooks/:hook_id"
    },
    updateMembership: {
      method: "PATCH",
      params: {
        org: {
          required: true,
          type: "string"
        },
        state: {
          enum: ["active"],
          required: true,
          type: "string"
        }
      },
      url: "/user/memberships/orgs/:org"
    }
  },
  projects: {
    addCollaborator: {
      headers: {
        accept: "application/vnd.github.inertia-preview+json"
      },
      method: "PUT",
      params: {
        permission: {
          enum: ["read", "write", "admin"],
          type: "string"
        },
        project_id: {
          required: true,
          type: "integer"
        },
        username: {
          required: true,
          type: "string"
        }
      },
      url: "/projects/:project_id/collaborators/:username"
    },
    createCard: {
      headers: {
        accept: "application/vnd.github.inertia-preview+json"
      },
      method: "POST",
      params: {
        column_id: {
          required: true,
          type: "integer"
        },
        content_id: {
          type: "integer"
        },
        content_type: {
          type: "string"
        },
        note: {
          type: "string"
        }
      },
      url: "/projects/columns/:column_id/cards"
    },
    createColumn: {
      headers: {
        accept: "application/vnd.github.inertia-preview+json"
      },
      method: "POST",
      params: {
        name: {
          required: true,
          type: "string"
        },
        project_id: {
          required: true,
          type: "integer"
        }
      },
      url: "/projects/:project_id/columns"
    },
    createForAuthenticatedUser: {
      headers: {
        accept: "application/vnd.github.inertia-preview+json"
      },
      method: "POST",
      params: {
        body: {
          type: "string"
        },
        name: {
          required: true,
          type: "string"
        }
      },
      url: "/user/projects"
    },
    createForOrg: {
      headers: {
        accept: "application/vnd.github.inertia-preview+json"
      },
      method: "POST",
      params: {
        body: {
          type: "string"
        },
        name: {
          required: true,
          type: "string"
        },
        org: {
          required: true,
          type: "string"
        }
      },
      url: "/orgs/:org/projects"
    },
    createForRepo: {
      headers: {
        accept: "application/vnd.github.inertia-preview+json"
      },
      method: "POST",
      params: {
        body: {
          type: "string"
        },
        name: {
          required: true,
          type: "string"
        },
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/projects"
    },
    delete: {
      headers: {
        accept: "application/vnd.github.inertia-preview+json"
      },
      method: "DELETE",
      params: {
        project_id: {
          required: true,
          type: "integer"
        }
      },
      url: "/projects/:project_id"
    },
    deleteCard: {
      headers: {
        accept: "application/vnd.github.inertia-preview+json"
      },
      method: "DELETE",
      params: {
        card_id: {
          required: true,
          type: "integer"
        }
      },
      url: "/projects/columns/cards/:card_id"
    },
    deleteColumn: {
      headers: {
        accept: "application/vnd.github.inertia-preview+json"
      },
      method: "DELETE",
      params: {
        column_id: {
          required: true,
          type: "integer"
        }
      },
      url: "/projects/columns/:column_id"
    },
    get: {
      headers: {
        accept: "application/vnd.github.inertia-preview+json"
      },
      method: "GET",
      params: {
        project_id: {
          required: true,
          type: "integer"
        }
      },
      url: "/projects/:project_id"
    },
    getCard: {
      headers: {
        accept: "application/vnd.github.inertia-preview+json"
      },
      method: "GET",
      params: {
        card_id: {
          required: true,
          type: "integer"
        }
      },
      url: "/projects/columns/cards/:card_id"
    },
    getColumn: {
      headers: {
        accept: "application/vnd.github.inertia-preview+json"
      },
      method: "GET",
      params: {
        column_id: {
          required: true,
          type: "integer"
        }
      },
      url: "/projects/columns/:column_id"
    },
    listCards: {
      headers: {
        accept: "application/vnd.github.inertia-preview+json"
      },
      method: "GET",
      params: {
        archived_state: {
          enum: ["all", "archived", "not_archived"],
          type: "string"
        },
        column_id: {
          required: true,
          type: "integer"
        },
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        }
      },
      url: "/projects/columns/:column_id/cards"
    },
    listCollaborators: {
      headers: {
        accept: "application/vnd.github.inertia-preview+json"
      },
      method: "GET",
      params: {
        affiliation: {
          enum: ["outside", "direct", "all"],
          type: "string"
        },
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        },
        project_id: {
          required: true,
          type: "integer"
        }
      },
      url: "/projects/:project_id/collaborators"
    },
    listColumns: {
      headers: {
        accept: "application/vnd.github.inertia-preview+json"
      },
      method: "GET",
      params: {
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        },
        project_id: {
          required: true,
          type: "integer"
        }
      },
      url: "/projects/:project_id/columns"
    },
    listForOrg: {
      headers: {
        accept: "application/vnd.github.inertia-preview+json"
      },
      method: "GET",
      params: {
        org: {
          required: true,
          type: "string"
        },
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        },
        state: {
          enum: ["open", "closed", "all"],
          type: "string"
        }
      },
      url: "/orgs/:org/projects"
    },
    listForRepo: {
      headers: {
        accept: "application/vnd.github.inertia-preview+json"
      },
      method: "GET",
      params: {
        owner: {
          required: true,
          type: "string"
        },
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        },
        repo: {
          required: true,
          type: "string"
        },
        state: {
          enum: ["open", "closed", "all"],
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/projects"
    },
    listForUser: {
      headers: {
        accept: "application/vnd.github.inertia-preview+json"
      },
      method: "GET",
      params: {
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        },
        state: {
          enum: ["open", "closed", "all"],
          type: "string"
        },
        username: {
          required: true,
          type: "string"
        }
      },
      url: "/users/:username/projects"
    },
    moveCard: {
      headers: {
        accept: "application/vnd.github.inertia-preview+json"
      },
      method: "POST",
      params: {
        card_id: {
          required: true,
          type: "integer"
        },
        column_id: {
          type: "integer"
        },
        position: {
          required: true,
          type: "string",
          validation: "^(top|bottom|after:\\d+)$"
        }
      },
      url: "/projects/columns/cards/:card_id/moves"
    },
    moveColumn: {
      headers: {
        accept: "application/vnd.github.inertia-preview+json"
      },
      method: "POST",
      params: {
        column_id: {
          required: true,
          type: "integer"
        },
        position: {
          required: true,
          type: "string",
          validation: "^(first|last|after:\\d+)$"
        }
      },
      url: "/projects/columns/:column_id/moves"
    },
    removeCollaborator: {
      headers: {
        accept: "application/vnd.github.inertia-preview+json"
      },
      method: "DELETE",
      params: {
        project_id: {
          required: true,
          type: "integer"
        },
        username: {
          required: true,
          type: "string"
        }
      },
      url: "/projects/:project_id/collaborators/:username"
    },
    reviewUserPermissionLevel: {
      headers: {
        accept: "application/vnd.github.inertia-preview+json"
      },
      method: "GET",
      params: {
        project_id: {
          required: true,
          type: "integer"
        },
        username: {
          required: true,
          type: "string"
        }
      },
      url: "/projects/:project_id/collaborators/:username/permission"
    },
    update: {
      headers: {
        accept: "application/vnd.github.inertia-preview+json"
      },
      method: "PATCH",
      params: {
        body: {
          type: "string"
        },
        name: {
          type: "string"
        },
        organization_permission: {
          type: "string"
        },
        private: {
          type: "boolean"
        },
        project_id: {
          required: true,
          type: "integer"
        },
        state: {
          enum: ["open", "closed"],
          type: "string"
        }
      },
      url: "/projects/:project_id"
    },
    updateCard: {
      headers: {
        accept: "application/vnd.github.inertia-preview+json"
      },
      method: "PATCH",
      params: {
        archived: {
          type: "boolean"
        },
        card_id: {
          required: true,
          type: "integer"
        },
        note: {
          type: "string"
        }
      },
      url: "/projects/columns/cards/:card_id"
    },
    updateColumn: {
      headers: {
        accept: "application/vnd.github.inertia-preview+json"
      },
      method: "PATCH",
      params: {
        column_id: {
          required: true,
          type: "integer"
        },
        name: {
          required: true,
          type: "string"
        }
      },
      url: "/projects/columns/:column_id"
    }
  },
  pulls: {
    checkIfMerged: {
      method: "GET",
      params: {
        number: {
          alias: "pull_number",
          deprecated: true,
          type: "integer"
        },
        owner: {
          required: true,
          type: "string"
        },
        pull_number: {
          required: true,
          type: "integer"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/pulls/:pull_number/merge"
    },
    create: {
      method: "POST",
      params: {
        base: {
          required: true,
          type: "string"
        },
        body: {
          type: "string"
        },
        draft: {
          type: "boolean"
        },
        head: {
          required: true,
          type: "string"
        },
        maintainer_can_modify: {
          type: "boolean"
        },
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        },
        title: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/pulls"
    },
    createComment: {
      method: "POST",
      params: {
        body: {
          required: true,
          type: "string"
        },
        commit_id: {
          required: true,
          type: "string"
        },
        in_reply_to: {
          deprecated: true,
          description: "The comment ID to reply to. **Note**: This must be the ID of a top-level comment, not a reply to that comment. Replies to replies are not supported.",
          type: "integer"
        },
        line: {
          type: "integer"
        },
        number: {
          alias: "pull_number",
          deprecated: true,
          type: "integer"
        },
        owner: {
          required: true,
          type: "string"
        },
        path: {
          required: true,
          type: "string"
        },
        position: {
          type: "integer"
        },
        pull_number: {
          required: true,
          type: "integer"
        },
        repo: {
          required: true,
          type: "string"
        },
        side: {
          enum: ["LEFT", "RIGHT"],
          type: "string"
        },
        start_line: {
          type: "integer"
        },
        start_side: {
          enum: ["LEFT", "RIGHT", "side"],
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/pulls/:pull_number/comments"
    },
    createCommentReply: {
      deprecated: "octokit.pulls.createCommentReply() has been renamed to octokit.pulls.createComment() (2019-09-09)",
      method: "POST",
      params: {
        body: {
          required: true,
          type: "string"
        },
        commit_id: {
          required: true,
          type: "string"
        },
        in_reply_to: {
          deprecated: true,
          description: "The comment ID to reply to. **Note**: This must be the ID of a top-level comment, not a reply to that comment. Replies to replies are not supported.",
          type: "integer"
        },
        line: {
          type: "integer"
        },
        number: {
          alias: "pull_number",
          deprecated: true,
          type: "integer"
        },
        owner: {
          required: true,
          type: "string"
        },
        path: {
          required: true,
          type: "string"
        },
        position: {
          type: "integer"
        },
        pull_number: {
          required: true,
          type: "integer"
        },
        repo: {
          required: true,
          type: "string"
        },
        side: {
          enum: ["LEFT", "RIGHT"],
          type: "string"
        },
        start_line: {
          type: "integer"
        },
        start_side: {
          enum: ["LEFT", "RIGHT", "side"],
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/pulls/:pull_number/comments"
    },
    createFromIssue: {
      deprecated: "octokit.pulls.createFromIssue() is deprecated, see https://developer.github.com/v3/pulls/#create-a-pull-request",
      method: "POST",
      params: {
        base: {
          required: true,
          type: "string"
        },
        draft: {
          type: "boolean"
        },
        head: {
          required: true,
          type: "string"
        },
        issue: {
          required: true,
          type: "integer"
        },
        maintainer_can_modify: {
          type: "boolean"
        },
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/pulls"
    },
    createReview: {
      method: "POST",
      params: {
        body: {
          type: "string"
        },
        comments: {
          type: "object[]"
        },
        "comments[].body": {
          required: true,
          type: "string"
        },
        "comments[].path": {
          required: true,
          type: "string"
        },
        "comments[].position": {
          required: true,
          type: "integer"
        },
        commit_id: {
          type: "string"
        },
        event: {
          enum: ["APPROVE", "REQUEST_CHANGES", "COMMENT"],
          type: "string"
        },
        number: {
          alias: "pull_number",
          deprecated: true,
          type: "integer"
        },
        owner: {
          required: true,
          type: "string"
        },
        pull_number: {
          required: true,
          type: "integer"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/pulls/:pull_number/reviews"
    },
    createReviewCommentReply: {
      method: "POST",
      params: {
        body: {
          required: true,
          type: "string"
        },
        comment_id: {
          required: true,
          type: "integer"
        },
        owner: {
          required: true,
          type: "string"
        },
        pull_number: {
          required: true,
          type: "integer"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/pulls/:pull_number/comments/:comment_id/replies"
    },
    createReviewRequest: {
      method: "POST",
      params: {
        number: {
          alias: "pull_number",
          deprecated: true,
          type: "integer"
        },
        owner: {
          required: true,
          type: "string"
        },
        pull_number: {
          required: true,
          type: "integer"
        },
        repo: {
          required: true,
          type: "string"
        },
        reviewers: {
          type: "string[]"
        },
        team_reviewers: {
          type: "string[]"
        }
      },
      url: "/repos/:owner/:repo/pulls/:pull_number/requested_reviewers"
    },
    deleteComment: {
      method: "DELETE",
      params: {
        comment_id: {
          required: true,
          type: "integer"
        },
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/pulls/comments/:comment_id"
    },
    deletePendingReview: {
      method: "DELETE",
      params: {
        number: {
          alias: "pull_number",
          deprecated: true,
          type: "integer"
        },
        owner: {
          required: true,
          type: "string"
        },
        pull_number: {
          required: true,
          type: "integer"
        },
        repo: {
          required: true,
          type: "string"
        },
        review_id: {
          required: true,
          type: "integer"
        }
      },
      url: "/repos/:owner/:repo/pulls/:pull_number/reviews/:review_id"
    },
    deleteReviewRequest: {
      method: "DELETE",
      params: {
        number: {
          alias: "pull_number",
          deprecated: true,
          type: "integer"
        },
        owner: {
          required: true,
          type: "string"
        },
        pull_number: {
          required: true,
          type: "integer"
        },
        repo: {
          required: true,
          type: "string"
        },
        reviewers: {
          type: "string[]"
        },
        team_reviewers: {
          type: "string[]"
        }
      },
      url: "/repos/:owner/:repo/pulls/:pull_number/requested_reviewers"
    },
    dismissReview: {
      method: "PUT",
      params: {
        message: {
          required: true,
          type: "string"
        },
        number: {
          alias: "pull_number",
          deprecated: true,
          type: "integer"
        },
        owner: {
          required: true,
          type: "string"
        },
        pull_number: {
          required: true,
          type: "integer"
        },
        repo: {
          required: true,
          type: "string"
        },
        review_id: {
          required: true,
          type: "integer"
        }
      },
      url: "/repos/:owner/:repo/pulls/:pull_number/reviews/:review_id/dismissals"
    },
    get: {
      method: "GET",
      params: {
        number: {
          alias: "pull_number",
          deprecated: true,
          type: "integer"
        },
        owner: {
          required: true,
          type: "string"
        },
        pull_number: {
          required: true,
          type: "integer"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/pulls/:pull_number"
    },
    getComment: {
      method: "GET",
      params: {
        comment_id: {
          required: true,
          type: "integer"
        },
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/pulls/comments/:comment_id"
    },
    getCommentsForReview: {
      method: "GET",
      params: {
        number: {
          alias: "pull_number",
          deprecated: true,
          type: "integer"
        },
        owner: {
          required: true,
          type: "string"
        },
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        },
        pull_number: {
          required: true,
          type: "integer"
        },
        repo: {
          required: true,
          type: "string"
        },
        review_id: {
          required: true,
          type: "integer"
        }
      },
      url: "/repos/:owner/:repo/pulls/:pull_number/reviews/:review_id/comments"
    },
    getReview: {
      method: "GET",
      params: {
        number: {
          alias: "pull_number",
          deprecated: true,
          type: "integer"
        },
        owner: {
          required: true,
          type: "string"
        },
        pull_number: {
          required: true,
          type: "integer"
        },
        repo: {
          required: true,
          type: "string"
        },
        review_id: {
          required: true,
          type: "integer"
        }
      },
      url: "/repos/:owner/:repo/pulls/:pull_number/reviews/:review_id"
    },
    list: {
      method: "GET",
      params: {
        base: {
          type: "string"
        },
        direction: {
          enum: ["asc", "desc"],
          type: "string"
        },
        head: {
          type: "string"
        },
        owner: {
          required: true,
          type: "string"
        },
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        },
        repo: {
          required: true,
          type: "string"
        },
        sort: {
          enum: ["created", "updated", "popularity", "long-running"],
          type: "string"
        },
        state: {
          enum: ["open", "closed", "all"],
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/pulls"
    },
    listComments: {
      method: "GET",
      params: {
        direction: {
          enum: ["asc", "desc"],
          type: "string"
        },
        number: {
          alias: "pull_number",
          deprecated: true,
          type: "integer"
        },
        owner: {
          required: true,
          type: "string"
        },
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        },
        pull_number: {
          required: true,
          type: "integer"
        },
        repo: {
          required: true,
          type: "string"
        },
        since: {
          type: "string"
        },
        sort: {
          enum: ["created", "updated"],
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/pulls/:pull_number/comments"
    },
    listCommentsForRepo: {
      method: "GET",
      params: {
        direction: {
          enum: ["asc", "desc"],
          type: "string"
        },
        owner: {
          required: true,
          type: "string"
        },
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        },
        repo: {
          required: true,
          type: "string"
        },
        since: {
          type: "string"
        },
        sort: {
          enum: ["created", "updated"],
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/pulls/comments"
    },
    listCommits: {
      method: "GET",
      params: {
        number: {
          alias: "pull_number",
          deprecated: true,
          type: "integer"
        },
        owner: {
          required: true,
          type: "string"
        },
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        },
        pull_number: {
          required: true,
          type: "integer"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/pulls/:pull_number/commits"
    },
    listFiles: {
      method: "GET",
      params: {
        number: {
          alias: "pull_number",
          deprecated: true,
          type: "integer"
        },
        owner: {
          required: true,
          type: "string"
        },
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        },
        pull_number: {
          required: true,
          type: "integer"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/pulls/:pull_number/files"
    },
    listReviewRequests: {
      method: "GET",
      params: {
        number: {
          alias: "pull_number",
          deprecated: true,
          type: "integer"
        },
        owner: {
          required: true,
          type: "string"
        },
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        },
        pull_number: {
          required: true,
          type: "integer"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/pulls/:pull_number/requested_reviewers"
    },
    listReviews: {
      method: "GET",
      params: {
        number: {
          alias: "pull_number",
          deprecated: true,
          type: "integer"
        },
        owner: {
          required: true,
          type: "string"
        },
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        },
        pull_number: {
          required: true,
          type: "integer"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/pulls/:pull_number/reviews"
    },
    merge: {
      method: "PUT",
      params: {
        commit_message: {
          type: "string"
        },
        commit_title: {
          type: "string"
        },
        merge_method: {
          enum: ["merge", "squash", "rebase"],
          type: "string"
        },
        number: {
          alias: "pull_number",
          deprecated: true,
          type: "integer"
        },
        owner: {
          required: true,
          type: "string"
        },
        pull_number: {
          required: true,
          type: "integer"
        },
        repo: {
          required: true,
          type: "string"
        },
        sha: {
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/pulls/:pull_number/merge"
    },
    submitReview: {
      method: "POST",
      params: {
        body: {
          type: "string"
        },
        event: {
          enum: ["APPROVE", "REQUEST_CHANGES", "COMMENT"],
          required: true,
          type: "string"
        },
        number: {
          alias: "pull_number",
          deprecated: true,
          type: "integer"
        },
        owner: {
          required: true,
          type: "string"
        },
        pull_number: {
          required: true,
          type: "integer"
        },
        repo: {
          required: true,
          type: "string"
        },
        review_id: {
          required: true,
          type: "integer"
        }
      },
      url: "/repos/:owner/:repo/pulls/:pull_number/reviews/:review_id/events"
    },
    update: {
      method: "PATCH",
      params: {
        base: {
          type: "string"
        },
        body: {
          type: "string"
        },
        maintainer_can_modify: {
          type: "boolean"
        },
        number: {
          alias: "pull_number",
          deprecated: true,
          type: "integer"
        },
        owner: {
          required: true,
          type: "string"
        },
        pull_number: {
          required: true,
          type: "integer"
        },
        repo: {
          required: true,
          type: "string"
        },
        state: {
          enum: ["open", "closed"],
          type: "string"
        },
        title: {
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/pulls/:pull_number"
    },
    updateBranch: {
      headers: {
        accept: "application/vnd.github.lydian-preview+json"
      },
      method: "PUT",
      params: {
        expected_head_sha: {
          type: "string"
        },
        owner: {
          required: true,
          type: "string"
        },
        pull_number: {
          required: true,
          type: "integer"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/pulls/:pull_number/update-branch"
    },
    updateComment: {
      method: "PATCH",
      params: {
        body: {
          required: true,
          type: "string"
        },
        comment_id: {
          required: true,
          type: "integer"
        },
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/pulls/comments/:comment_id"
    },
    updateReview: {
      method: "PUT",
      params: {
        body: {
          required: true,
          type: "string"
        },
        number: {
          alias: "pull_number",
          deprecated: true,
          type: "integer"
        },
        owner: {
          required: true,
          type: "string"
        },
        pull_number: {
          required: true,
          type: "integer"
        },
        repo: {
          required: true,
          type: "string"
        },
        review_id: {
          required: true,
          type: "integer"
        }
      },
      url: "/repos/:owner/:repo/pulls/:pull_number/reviews/:review_id"
    }
  },
  rateLimit: {
    get: {
      method: "GET",
      params: {},
      url: "/rate_limit"
    }
  },
  reactions: {
    createForCommitComment: {
      headers: {
        accept: "application/vnd.github.squirrel-girl-preview+json"
      },
      method: "POST",
      params: {
        comment_id: {
          required: true,
          type: "integer"
        },
        content: {
          enum: ["+1", "-1", "laugh", "confused", "heart", "hooray", "rocket", "eyes"],
          required: true,
          type: "string"
        },
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/comments/:comment_id/reactions"
    },
    createForIssue: {
      headers: {
        accept: "application/vnd.github.squirrel-girl-preview+json"
      },
      method: "POST",
      params: {
        content: {
          enum: ["+1", "-1", "laugh", "confused", "heart", "hooray", "rocket", "eyes"],
          required: true,
          type: "string"
        },
        issue_number: {
          required: true,
          type: "integer"
        },
        number: {
          alias: "issue_number",
          deprecated: true,
          type: "integer"
        },
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/issues/:issue_number/reactions"
    },
    createForIssueComment: {
      headers: {
        accept: "application/vnd.github.squirrel-girl-preview+json"
      },
      method: "POST",
      params: {
        comment_id: {
          required: true,
          type: "integer"
        },
        content: {
          enum: ["+1", "-1", "laugh", "confused", "heart", "hooray", "rocket", "eyes"],
          required: true,
          type: "string"
        },
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/issues/comments/:comment_id/reactions"
    },
    createForPullRequestReviewComment: {
      headers: {
        accept: "application/vnd.github.squirrel-girl-preview+json"
      },
      method: "POST",
      params: {
        comment_id: {
          required: true,
          type: "integer"
        },
        content: {
          enum: ["+1", "-1", "laugh", "confused", "heart", "hooray", "rocket", "eyes"],
          required: true,
          type: "string"
        },
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/pulls/comments/:comment_id/reactions"
    },
    createForTeamDiscussion: {
      deprecated: "octokit.reactions.createForTeamDiscussion() has been renamed to octokit.reactions.createForTeamDiscussionLegacy() (2020-01-16)",
      headers: {
        accept: "application/vnd.github.squirrel-girl-preview+json"
      },
      method: "POST",
      params: {
        content: {
          enum: ["+1", "-1", "laugh", "confused", "heart", "hooray", "rocket", "eyes"],
          required: true,
          type: "string"
        },
        discussion_number: {
          required: true,
          type: "integer"
        },
        team_id: {
          required: true,
          type: "integer"
        }
      },
      url: "/teams/:team_id/discussions/:discussion_number/reactions"
    },
    createForTeamDiscussionComment: {
      deprecated: "octokit.reactions.createForTeamDiscussionComment() has been renamed to octokit.reactions.createForTeamDiscussionCommentLegacy() (2020-01-16)",
      headers: {
        accept: "application/vnd.github.squirrel-girl-preview+json"
      },
      method: "POST",
      params: {
        comment_number: {
          required: true,
          type: "integer"
        },
        content: {
          enum: ["+1", "-1", "laugh", "confused", "heart", "hooray", "rocket", "eyes"],
          required: true,
          type: "string"
        },
        discussion_number: {
          required: true,
          type: "integer"
        },
        team_id: {
          required: true,
          type: "integer"
        }
      },
      url: "/teams/:team_id/discussions/:discussion_number/comments/:comment_number/reactions"
    },
    createForTeamDiscussionCommentInOrg: {
      headers: {
        accept: "application/vnd.github.squirrel-girl-preview+json"
      },
      method: "POST",
      params: {
        comment_number: {
          required: true,
          type: "integer"
        },
        content: {
          enum: ["+1", "-1", "laugh", "confused", "heart", "hooray", "rocket", "eyes"],
          required: true,
          type: "string"
        },
        discussion_number: {
          required: true,
          type: "integer"
        },
        org: {
          required: true,
          type: "string"
        },
        team_slug: {
          required: true,
          type: "string"
        }
      },
      url: "/orgs/:org/teams/:team_slug/discussions/:discussion_number/comments/:comment_number/reactions"
    },
    createForTeamDiscussionCommentLegacy: {
      deprecated: "octokit.reactions.createForTeamDiscussionCommentLegacy() is deprecated, see https://developer.github.com/v3/reactions/#create-reaction-for-a-team-discussion-comment-legacy",
      headers: {
        accept: "application/vnd.github.squirrel-girl-preview+json"
      },
      method: "POST",
      params: {
        comment_number: {
          required: true,
          type: "integer"
        },
        content: {
          enum: ["+1", "-1", "laugh", "confused", "heart", "hooray", "rocket", "eyes"],
          required: true,
          type: "string"
        },
        discussion_number: {
          required: true,
          type: "integer"
        },
        team_id: {
          required: true,
          type: "integer"
        }
      },
      url: "/teams/:team_id/discussions/:discussion_number/comments/:comment_number/reactions"
    },
    createForTeamDiscussionInOrg: {
      headers: {
        accept: "application/vnd.github.squirrel-girl-preview+json"
      },
      method: "POST",
      params: {
        content: {
          enum: ["+1", "-1", "laugh", "confused", "heart", "hooray", "rocket", "eyes"],
          required: true,
          type: "string"
        },
        discussion_number: {
          required: true,
          type: "integer"
        },
        org: {
          required: true,
          type: "string"
        },
        team_slug: {
          required: true,
          type: "string"
        }
      },
      url: "/orgs/:org/teams/:team_slug/discussions/:discussion_number/reactions"
    },
    createForTeamDiscussionLegacy: {
      deprecated: "octokit.reactions.createForTeamDiscussionLegacy() is deprecated, see https://developer.github.com/v3/reactions/#create-reaction-for-a-team-discussion-legacy",
      headers: {
        accept: "application/vnd.github.squirrel-girl-preview+json"
      },
      method: "POST",
      params: {
        content: {
          enum: ["+1", "-1", "laugh", "confused", "heart", "hooray", "rocket", "eyes"],
          required: true,
          type: "string"
        },
        discussion_number: {
          required: true,
          type: "integer"
        },
        team_id: {
          required: true,
          type: "integer"
        }
      },
      url: "/teams/:team_id/discussions/:discussion_number/reactions"
    },
    delete: {
      headers: {
        accept: "application/vnd.github.squirrel-girl-preview+json"
      },
      method: "DELETE",
      params: {
        reaction_id: {
          required: true,
          type: "integer"
        }
      },
      url: "/reactions/:reaction_id"
    },
    listForCommitComment: {
      headers: {
        accept: "application/vnd.github.squirrel-girl-preview+json"
      },
      method: "GET",
      params: {
        comment_id: {
          required: true,
          type: "integer"
        },
        content: {
          enum: ["+1", "-1", "laugh", "confused", "heart", "hooray", "rocket", "eyes"],
          type: "string"
        },
        owner: {
          required: true,
          type: "string"
        },
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/comments/:comment_id/reactions"
    },
    listForIssue: {
      headers: {
        accept: "application/vnd.github.squirrel-girl-preview+json"
      },
      method: "GET",
      params: {
        content: {
          enum: ["+1", "-1", "laugh", "confused", "heart", "hooray", "rocket", "eyes"],
          type: "string"
        },
        issue_number: {
          required: true,
          type: "integer"
        },
        number: {
          alias: "issue_number",
          deprecated: true,
          type: "integer"
        },
        owner: {
          required: true,
          type: "string"
        },
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/issues/:issue_number/reactions"
    },
    listForIssueComment: {
      headers: {
        accept: "application/vnd.github.squirrel-girl-preview+json"
      },
      method: "GET",
      params: {
        comment_id: {
          required: true,
          type: "integer"
        },
        content: {
          enum: ["+1", "-1", "laugh", "confused", "heart", "hooray", "rocket", "eyes"],
          type: "string"
        },
        owner: {
          required: true,
          type: "string"
        },
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/issues/comments/:comment_id/reactions"
    },
    listForPullRequestReviewComment: {
      headers: {
        accept: "application/vnd.github.squirrel-girl-preview+json"
      },
      method: "GET",
      params: {
        comment_id: {
          required: true,
          type: "integer"
        },
        content: {
          enum: ["+1", "-1", "laugh", "confused", "heart", "hooray", "rocket", "eyes"],
          type: "string"
        },
        owner: {
          required: true,
          type: "string"
        },
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/pulls/comments/:comment_id/reactions"
    },
    listForTeamDiscussion: {
      deprecated: "octokit.reactions.listForTeamDiscussion() has been renamed to octokit.reactions.listForTeamDiscussionLegacy() (2020-01-16)",
      headers: {
        accept: "application/vnd.github.squirrel-girl-preview+json"
      },
      method: "GET",
      params: {
        content: {
          enum: ["+1", "-1", "laugh", "confused", "heart", "hooray", "rocket", "eyes"],
          type: "string"
        },
        discussion_number: {
          required: true,
          type: "integer"
        },
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        },
        team_id: {
          required: true,
          type: "integer"
        }
      },
      url: "/teams/:team_id/discussions/:discussion_number/reactions"
    },
    listForTeamDiscussionComment: {
      deprecated: "octokit.reactions.listForTeamDiscussionComment() has been renamed to octokit.reactions.listForTeamDiscussionCommentLegacy() (2020-01-16)",
      headers: {
        accept: "application/vnd.github.squirrel-girl-preview+json"
      },
      method: "GET",
      params: {
        comment_number: {
          required: true,
          type: "integer"
        },
        content: {
          enum: ["+1", "-1", "laugh", "confused", "heart", "hooray", "rocket", "eyes"],
          type: "string"
        },
        discussion_number: {
          required: true,
          type: "integer"
        },
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        },
        team_id: {
          required: true,
          type: "integer"
        }
      },
      url: "/teams/:team_id/discussions/:discussion_number/comments/:comment_number/reactions"
    },
    listForTeamDiscussionCommentInOrg: {
      headers: {
        accept: "application/vnd.github.squirrel-girl-preview+json"
      },
      method: "GET",
      params: {
        comment_number: {
          required: true,
          type: "integer"
        },
        content: {
          enum: ["+1", "-1", "laugh", "confused", "heart", "hooray", "rocket", "eyes"],
          type: "string"
        },
        discussion_number: {
          required: true,
          type: "integer"
        },
        org: {
          required: true,
          type: "string"
        },
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        },
        team_slug: {
          required: true,
          type: "string"
        }
      },
      url: "/orgs/:org/teams/:team_slug/discussions/:discussion_number/comments/:comment_number/reactions"
    },
    listForTeamDiscussionCommentLegacy: {
      deprecated: "octokit.reactions.listForTeamDiscussionCommentLegacy() is deprecated, see https://developer.github.com/v3/reactions/#list-reactions-for-a-team-discussion-comment-legacy",
      headers: {
        accept: "application/vnd.github.squirrel-girl-preview+json"
      },
      method: "GET",
      params: {
        comment_number: {
          required: true,
          type: "integer"
        },
        content: {
          enum: ["+1", "-1", "laugh", "confused", "heart", "hooray", "rocket", "eyes"],
          type: "string"
        },
        discussion_number: {
          required: true,
          type: "integer"
        },
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        },
        team_id: {
          required: true,
          type: "integer"
        }
      },
      url: "/teams/:team_id/discussions/:discussion_number/comments/:comment_number/reactions"
    },
    listForTeamDiscussionInOrg: {
      headers: {
        accept: "application/vnd.github.squirrel-girl-preview+json"
      },
      method: "GET",
      params: {
        content: {
          enum: ["+1", "-1", "laugh", "confused", "heart", "hooray", "rocket", "eyes"],
          type: "string"
        },
        discussion_number: {
          required: true,
          type: "integer"
        },
        org: {
          required: true,
          type: "string"
        },
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        },
        team_slug: {
          required: true,
          type: "string"
        }
      },
      url: "/orgs/:org/teams/:team_slug/discussions/:discussion_number/reactions"
    },
    listForTeamDiscussionLegacy: {
      deprecated: "octokit.reactions.listForTeamDiscussionLegacy() is deprecated, see https://developer.github.com/v3/reactions/#list-reactions-for-a-team-discussion-legacy",
      headers: {
        accept: "application/vnd.github.squirrel-girl-preview+json"
      },
      method: "GET",
      params: {
        content: {
          enum: ["+1", "-1", "laugh", "confused", "heart", "hooray", "rocket", "eyes"],
          type: "string"
        },
        discussion_number: {
          required: true,
          type: "integer"
        },
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        },
        team_id: {
          required: true,
          type: "integer"
        }
      },
      url: "/teams/:team_id/discussions/:discussion_number/reactions"
    }
  },
  repos: {
    acceptInvitation: {
      method: "PATCH",
      params: {
        invitation_id: {
          required: true,
          type: "integer"
        }
      },
      url: "/user/repository_invitations/:invitation_id"
    },
    addCollaborator: {
      method: "PUT",
      params: {
        owner: {
          required: true,
          type: "string"
        },
        permission: {
          enum: ["pull", "push", "admin"],
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        },
        username: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/collaborators/:username"
    },
    addDeployKey: {
      method: "POST",
      params: {
        key: {
          required: true,
          type: "string"
        },
        owner: {
          required: true,
          type: "string"
        },
        read_only: {
          type: "boolean"
        },
        repo: {
          required: true,
          type: "string"
        },
        title: {
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/keys"
    },
    addProtectedBranchAdminEnforcement: {
      method: "POST",
      params: {
        branch: {
          required: true,
          type: "string"
        },
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/branches/:branch/protection/enforce_admins"
    },
    addProtectedBranchAppRestrictions: {
      method: "POST",
      params: {
        apps: {
          mapTo: "data",
          required: true,
          type: "string[]"
        },
        branch: {
          required: true,
          type: "string"
        },
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/branches/:branch/protection/restrictions/apps"
    },
    addProtectedBranchRequiredSignatures: {
      headers: {
        accept: "application/vnd.github.zzzax-preview+json"
      },
      method: "POST",
      params: {
        branch: {
          required: true,
          type: "string"
        },
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/branches/:branch/protection/required_signatures"
    },
    addProtectedBranchRequiredStatusChecksContexts: {
      method: "POST",
      params: {
        branch: {
          required: true,
          type: "string"
        },
        contexts: {
          mapTo: "data",
          required: true,
          type: "string[]"
        },
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts"
    },
    addProtectedBranchTeamRestrictions: {
      method: "POST",
      params: {
        branch: {
          required: true,
          type: "string"
        },
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        },
        teams: {
          mapTo: "data",
          required: true,
          type: "string[]"
        }
      },
      url: "/repos/:owner/:repo/branches/:branch/protection/restrictions/teams"
    },
    addProtectedBranchUserRestrictions: {
      method: "POST",
      params: {
        branch: {
          required: true,
          type: "string"
        },
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        },
        users: {
          mapTo: "data",
          required: true,
          type: "string[]"
        }
      },
      url: "/repos/:owner/:repo/branches/:branch/protection/restrictions/users"
    },
    checkCollaborator: {
      method: "GET",
      params: {
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        },
        username: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/collaborators/:username"
    },
    checkVulnerabilityAlerts: {
      headers: {
        accept: "application/vnd.github.dorian-preview+json"
      },
      method: "GET",
      params: {
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/vulnerability-alerts"
    },
    compareCommits: {
      method: "GET",
      params: {
        base: {
          required: true,
          type: "string"
        },
        head: {
          required: true,
          type: "string"
        },
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/compare/:base...:head"
    },
    createCommitComment: {
      method: "POST",
      params: {
        body: {
          required: true,
          type: "string"
        },
        commit_sha: {
          required: true,
          type: "string"
        },
        line: {
          type: "integer"
        },
        owner: {
          required: true,
          type: "string"
        },
        path: {
          type: "string"
        },
        position: {
          type: "integer"
        },
        repo: {
          required: true,
          type: "string"
        },
        sha: {
          alias: "commit_sha",
          deprecated: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/commits/:commit_sha/comments"
    },
    createDeployment: {
      method: "POST",
      params: {
        auto_merge: {
          type: "boolean"
        },
        description: {
          type: "string"
        },
        environment: {
          type: "string"
        },
        owner: {
          required: true,
          type: "string"
        },
        payload: {
          type: "string"
        },
        production_environment: {
          type: "boolean"
        },
        ref: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        },
        required_contexts: {
          type: "string[]"
        },
        task: {
          type: "string"
        },
        transient_environment: {
          type: "boolean"
        }
      },
      url: "/repos/:owner/:repo/deployments"
    },
    createDeploymentStatus: {
      method: "POST",
      params: {
        auto_inactive: {
          type: "boolean"
        },
        deployment_id: {
          required: true,
          type: "integer"
        },
        description: {
          type: "string"
        },
        environment: {
          enum: ["production", "staging", "qa"],
          type: "string"
        },
        environment_url: {
          type: "string"
        },
        log_url: {
          type: "string"
        },
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        },
        state: {
          enum: ["error", "failure", "inactive", "in_progress", "queued", "pending", "success"],
          required: true,
          type: "string"
        },
        target_url: {
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/deployments/:deployment_id/statuses"
    },
    createDispatchEvent: {
      method: "POST",
      params: {
        client_payload: {
          type: "object"
        },
        event_type: {
          type: "string"
        },
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/dispatches"
    },
    createFile: {
      deprecated: "octokit.repos.createFile() has been renamed to octokit.repos.createOrUpdateFile() (2019-06-07)",
      method: "PUT",
      params: {
        author: {
          type: "object"
        },
        "author.email": {
          required: true,
          type: "string"
        },
        "author.name": {
          required: true,
          type: "string"
        },
        branch: {
          type: "string"
        },
        committer: {
          type: "object"
        },
        "committer.email": {
          required: true,
          type: "string"
        },
        "committer.name": {
          required: true,
          type: "string"
        },
        content: {
          required: true,
          type: "string"
        },
        message: {
          required: true,
          type: "string"
        },
        owner: {
          required: true,
          type: "string"
        },
        path: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        },
        sha: {
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/contents/:path"
    },
    createForAuthenticatedUser: {
      method: "POST",
      params: {
        allow_merge_commit: {
          type: "boolean"
        },
        allow_rebase_merge: {
          type: "boolean"
        },
        allow_squash_merge: {
          type: "boolean"
        },
        auto_init: {
          type: "boolean"
        },
        delete_branch_on_merge: {
          type: "boolean"
        },
        description: {
          type: "string"
        },
        gitignore_template: {
          type: "string"
        },
        has_issues: {
          type: "boolean"
        },
        has_projects: {
          type: "boolean"
        },
        has_wiki: {
          type: "boolean"
        },
        homepage: {
          type: "string"
        },
        is_template: {
          type: "boolean"
        },
        license_template: {
          type: "string"
        },
        name: {
          required: true,
          type: "string"
        },
        private: {
          type: "boolean"
        },
        team_id: {
          type: "integer"
        },
        visibility: {
          enum: ["public", "private", "visibility", "internal"],
          type: "string"
        }
      },
      url: "/user/repos"
    },
    createFork: {
      method: "POST",
      params: {
        organization: {
          type: "string"
        },
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/forks"
    },
    createHook: {
      method: "POST",
      params: {
        active: {
          type: "boolean"
        },
        config: {
          required: true,
          type: "object"
        },
        "config.content_type": {
          type: "string"
        },
        "config.insecure_ssl": {
          type: "string"
        },
        "config.secret": {
          type: "string"
        },
        "config.url": {
          required: true,
          type: "string"
        },
        events: {
          type: "string[]"
        },
        name: {
          type: "string"
        },
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/hooks"
    },
    createInOrg: {
      method: "POST",
      params: {
        allow_merge_commit: {
          type: "boolean"
        },
        allow_rebase_merge: {
          type: "boolean"
        },
        allow_squash_merge: {
          type: "boolean"
        },
        auto_init: {
          type: "boolean"
        },
        delete_branch_on_merge: {
          type: "boolean"
        },
        description: {
          type: "string"
        },
        gitignore_template: {
          type: "string"
        },
        has_issues: {
          type: "boolean"
        },
        has_projects: {
          type: "boolean"
        },
        has_wiki: {
          type: "boolean"
        },
        homepage: {
          type: "string"
        },
        is_template: {
          type: "boolean"
        },
        license_template: {
          type: "string"
        },
        name: {
          required: true,
          type: "string"
        },
        org: {
          required: true,
          type: "string"
        },
        private: {
          type: "boolean"
        },
        team_id: {
          type: "integer"
        },
        visibility: {
          enum: ["public", "private", "visibility", "internal"],
          type: "string"
        }
      },
      url: "/orgs/:org/repos"
    },
    createOrUpdateFile: {
      method: "PUT",
      params: {
        author: {
          type: "object"
        },
        "author.email": {
          required: true,
          type: "string"
        },
        "author.name": {
          required: true,
          type: "string"
        },
        branch: {
          type: "string"
        },
        committer: {
          type: "object"
        },
        "committer.email": {
          required: true,
          type: "string"
        },
        "committer.name": {
          required: true,
          type: "string"
        },
        content: {
          required: true,
          type: "string"
        },
        message: {
          required: true,
          type: "string"
        },
        owner: {
          required: true,
          type: "string"
        },
        path: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        },
        sha: {
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/contents/:path"
    },
    createRelease: {
      method: "POST",
      params: {
        body: {
          type: "string"
        },
        draft: {
          type: "boolean"
        },
        name: {
          type: "string"
        },
        owner: {
          required: true,
          type: "string"
        },
        prerelease: {
          type: "boolean"
        },
        repo: {
          required: true,
          type: "string"
        },
        tag_name: {
          required: true,
          type: "string"
        },
        target_commitish: {
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/releases"
    },
    createStatus: {
      method: "POST",
      params: {
        context: {
          type: "string"
        },
        description: {
          type: "string"
        },
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        },
        sha: {
          required: true,
          type: "string"
        },
        state: {
          enum: ["error", "failure", "pending", "success"],
          required: true,
          type: "string"
        },
        target_url: {
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/statuses/:sha"
    },
    createUsingTemplate: {
      headers: {
        accept: "application/vnd.github.baptiste-preview+json"
      },
      method: "POST",
      params: {
        description: {
          type: "string"
        },
        name: {
          required: true,
          type: "string"
        },
        owner: {
          type: "string"
        },
        private: {
          type: "boolean"
        },
        template_owner: {
          required: true,
          type: "string"
        },
        template_repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:template_owner/:template_repo/generate"
    },
    declineInvitation: {
      method: "DELETE",
      params: {
        invitation_id: {
          required: true,
          type: "integer"
        }
      },
      url: "/user/repository_invitations/:invitation_id"
    },
    delete: {
      method: "DELETE",
      params: {
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo"
    },
    deleteCommitComment: {
      method: "DELETE",
      params: {
        comment_id: {
          required: true,
          type: "integer"
        },
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/comments/:comment_id"
    },
    deleteDownload: {
      method: "DELETE",
      params: {
        download_id: {
          required: true,
          type: "integer"
        },
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/downloads/:download_id"
    },
    deleteFile: {
      method: "DELETE",
      params: {
        author: {
          type: "object"
        },
        "author.email": {
          type: "string"
        },
        "author.name": {
          type: "string"
        },
        branch: {
          type: "string"
        },
        committer: {
          type: "object"
        },
        "committer.email": {
          type: "string"
        },
        "committer.name": {
          type: "string"
        },
        message: {
          required: true,
          type: "string"
        },
        owner: {
          required: true,
          type: "string"
        },
        path: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        },
        sha: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/contents/:path"
    },
    deleteHook: {
      method: "DELETE",
      params: {
        hook_id: {
          required: true,
          type: "integer"
        },
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/hooks/:hook_id"
    },
    deleteInvitation: {
      method: "DELETE",
      params: {
        invitation_id: {
          required: true,
          type: "integer"
        },
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/invitations/:invitation_id"
    },
    deleteRelease: {
      method: "DELETE",
      params: {
        owner: {
          required: true,
          type: "string"
        },
        release_id: {
          required: true,
          type: "integer"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/releases/:release_id"
    },
    deleteReleaseAsset: {
      method: "DELETE",
      params: {
        asset_id: {
          required: true,
          type: "integer"
        },
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/releases/assets/:asset_id"
    },
    disableAutomatedSecurityFixes: {
      headers: {
        accept: "application/vnd.github.london-preview+json"
      },
      method: "DELETE",
      params: {
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/automated-security-fixes"
    },
    disablePagesSite: {
      headers: {
        accept: "application/vnd.github.switcheroo-preview+json"
      },
      method: "DELETE",
      params: {
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/pages"
    },
    disableVulnerabilityAlerts: {
      headers: {
        accept: "application/vnd.github.dorian-preview+json"
      },
      method: "DELETE",
      params: {
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/vulnerability-alerts"
    },
    enableAutomatedSecurityFixes: {
      headers: {
        accept: "application/vnd.github.london-preview+json"
      },
      method: "PUT",
      params: {
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/automated-security-fixes"
    },
    enablePagesSite: {
      headers: {
        accept: "application/vnd.github.switcheroo-preview+json"
      },
      method: "POST",
      params: {
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        },
        source: {
          type: "object"
        },
        "source.branch": {
          enum: ["master", "gh-pages"],
          type: "string"
        },
        "source.path": {
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/pages"
    },
    enableVulnerabilityAlerts: {
      headers: {
        accept: "application/vnd.github.dorian-preview+json"
      },
      method: "PUT",
      params: {
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/vulnerability-alerts"
    },
    get: {
      method: "GET",
      params: {
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo"
    },
    getAppsWithAccessToProtectedBranch: {
      method: "GET",
      params: {
        branch: {
          required: true,
          type: "string"
        },
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/branches/:branch/protection/restrictions/apps"
    },
    getArchiveLink: {
      method: "GET",
      params: {
        archive_format: {
          required: true,
          type: "string"
        },
        owner: {
          required: true,
          type: "string"
        },
        ref: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/:archive_format/:ref"
    },
    getBranch: {
      method: "GET",
      params: {
        branch: {
          required: true,
          type: "string"
        },
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/branches/:branch"
    },
    getBranchProtection: {
      method: "GET",
      params: {
        branch: {
          required: true,
          type: "string"
        },
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/branches/:branch/protection"
    },
    getClones: {
      method: "GET",
      params: {
        owner: {
          required: true,
          type: "string"
        },
        per: {
          enum: ["day", "week"],
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/traffic/clones"
    },
    getCodeFrequencyStats: {
      method: "GET",
      params: {
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/stats/code_frequency"
    },
    getCollaboratorPermissionLevel: {
      method: "GET",
      params: {
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        },
        username: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/collaborators/:username/permission"
    },
    getCombinedStatusForRef: {
      method: "GET",
      params: {
        owner: {
          required: true,
          type: "string"
        },
        ref: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/commits/:ref/status"
    },
    getCommit: {
      method: "GET",
      params: {
        commit_sha: {
          alias: "ref",
          deprecated: true,
          type: "string"
        },
        owner: {
          required: true,
          type: "string"
        },
        ref: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        },
        sha: {
          alias: "ref",
          deprecated: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/commits/:ref"
    },
    getCommitActivityStats: {
      method: "GET",
      params: {
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/stats/commit_activity"
    },
    getCommitComment: {
      method: "GET",
      params: {
        comment_id: {
          required: true,
          type: "integer"
        },
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/comments/:comment_id"
    },
    getCommitRefSha: {
      deprecated: "octokit.repos.getCommitRefSha() is deprecated, see https://developer.github.com/v3/repos/commits/#get-a-single-commit",
      headers: {
        accept: "application/vnd.github.v3.sha"
      },
      method: "GET",
      params: {
        owner: {
          required: true,
          type: "string"
        },
        ref: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/commits/:ref"
    },
    getContents: {
      method: "GET",
      params: {
        owner: {
          required: true,
          type: "string"
        },
        path: {
          required: true,
          type: "string"
        },
        ref: {
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/contents/:path"
    },
    getContributorsStats: {
      method: "GET",
      params: {
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/stats/contributors"
    },
    getDeployKey: {
      method: "GET",
      params: {
        key_id: {
          required: true,
          type: "integer"
        },
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/keys/:key_id"
    },
    getDeployment: {
      method: "GET",
      params: {
        deployment_id: {
          required: true,
          type: "integer"
        },
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/deployments/:deployment_id"
    },
    getDeploymentStatus: {
      method: "GET",
      params: {
        deployment_id: {
          required: true,
          type: "integer"
        },
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        },
        status_id: {
          required: true,
          type: "integer"
        }
      },
      url: "/repos/:owner/:repo/deployments/:deployment_id/statuses/:status_id"
    },
    getDownload: {
      method: "GET",
      params: {
        download_id: {
          required: true,
          type: "integer"
        },
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/downloads/:download_id"
    },
    getHook: {
      method: "GET",
      params: {
        hook_id: {
          required: true,
          type: "integer"
        },
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/hooks/:hook_id"
    },
    getLatestPagesBuild: {
      method: "GET",
      params: {
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/pages/builds/latest"
    },
    getLatestRelease: {
      method: "GET",
      params: {
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/releases/latest"
    },
    getPages: {
      method: "GET",
      params: {
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/pages"
    },
    getPagesBuild: {
      method: "GET",
      params: {
        build_id: {
          required: true,
          type: "integer"
        },
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/pages/builds/:build_id"
    },
    getParticipationStats: {
      method: "GET",
      params: {
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/stats/participation"
    },
    getProtectedBranchAdminEnforcement: {
      method: "GET",
      params: {
        branch: {
          required: true,
          type: "string"
        },
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/branches/:branch/protection/enforce_admins"
    },
    getProtectedBranchPullRequestReviewEnforcement: {
      method: "GET",
      params: {
        branch: {
          required: true,
          type: "string"
        },
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/branches/:branch/protection/required_pull_request_reviews"
    },
    getProtectedBranchRequiredSignatures: {
      headers: {
        accept: "application/vnd.github.zzzax-preview+json"
      },
      method: "GET",
      params: {
        branch: {
          required: true,
          type: "string"
        },
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/branches/:branch/protection/required_signatures"
    },
    getProtectedBranchRequiredStatusChecks: {
      method: "GET",
      params: {
        branch: {
          required: true,
          type: "string"
        },
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/branches/:branch/protection/required_status_checks"
    },
    getProtectedBranchRestrictions: {
      method: "GET",
      params: {
        branch: {
          required: true,
          type: "string"
        },
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/branches/:branch/protection/restrictions"
    },
    getPunchCardStats: {
      method: "GET",
      params: {
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/stats/punch_card"
    },
    getReadme: {
      method: "GET",
      params: {
        owner: {
          required: true,
          type: "string"
        },
        ref: {
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/readme"
    },
    getRelease: {
      method: "GET",
      params: {
        owner: {
          required: true,
          type: "string"
        },
        release_id: {
          required: true,
          type: "integer"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/releases/:release_id"
    },
    getReleaseAsset: {
      method: "GET",
      params: {
        asset_id: {
          required: true,
          type: "integer"
        },
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/releases/assets/:asset_id"
    },
    getReleaseByTag: {
      method: "GET",
      params: {
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        },
        tag: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/releases/tags/:tag"
    },
    getTeamsWithAccessToProtectedBranch: {
      method: "GET",
      params: {
        branch: {
          required: true,
          type: "string"
        },
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/branches/:branch/protection/restrictions/teams"
    },
    getTopPaths: {
      method: "GET",
      params: {
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/traffic/popular/paths"
    },
    getTopReferrers: {
      method: "GET",
      params: {
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/traffic/popular/referrers"
    },
    getUsersWithAccessToProtectedBranch: {
      method: "GET",
      params: {
        branch: {
          required: true,
          type: "string"
        },
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/branches/:branch/protection/restrictions/users"
    },
    getViews: {
      method: "GET",
      params: {
        owner: {
          required: true,
          type: "string"
        },
        per: {
          enum: ["day", "week"],
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/traffic/views"
    },
    list: {
      method: "GET",
      params: {
        affiliation: {
          type: "string"
        },
        direction: {
          enum: ["asc", "desc"],
          type: "string"
        },
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        },
        sort: {
          enum: ["created", "updated", "pushed", "full_name"],
          type: "string"
        },
        type: {
          enum: ["all", "owner", "public", "private", "member"],
          type: "string"
        },
        visibility: {
          enum: ["all", "public", "private"],
          type: "string"
        }
      },
      url: "/user/repos"
    },
    listAppsWithAccessToProtectedBranch: {
      deprecated: "octokit.repos.listAppsWithAccessToProtectedBranch() has been renamed to octokit.repos.getAppsWithAccessToProtectedBranch() (2019-09-13)",
      method: "GET",
      params: {
        branch: {
          required: true,
          type: "string"
        },
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/branches/:branch/protection/restrictions/apps"
    },
    listAssetsForRelease: {
      method: "GET",
      params: {
        owner: {
          required: true,
          type: "string"
        },
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        },
        release_id: {
          required: true,
          type: "integer"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/releases/:release_id/assets"
    },
    listBranches: {
      method: "GET",
      params: {
        owner: {
          required: true,
          type: "string"
        },
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        },
        protected: {
          type: "boolean"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/branches"
    },
    listBranchesForHeadCommit: {
      headers: {
        accept: "application/vnd.github.groot-preview+json"
      },
      method: "GET",
      params: {
        commit_sha: {
          required: true,
          type: "string"
        },
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/commits/:commit_sha/branches-where-head"
    },
    listCollaborators: {
      method: "GET",
      params: {
        affiliation: {
          enum: ["outside", "direct", "all"],
          type: "string"
        },
        owner: {
          required: true,
          type: "string"
        },
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/collaborators"
    },
    listCommentsForCommit: {
      method: "GET",
      params: {
        commit_sha: {
          required: true,
          type: "string"
        },
        owner: {
          required: true,
          type: "string"
        },
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        },
        ref: {
          alias: "commit_sha",
          deprecated: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/commits/:commit_sha/comments"
    },
    listCommitComments: {
      method: "GET",
      params: {
        owner: {
          required: true,
          type: "string"
        },
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/comments"
    },
    listCommits: {
      method: "GET",
      params: {
        author: {
          type: "string"
        },
        owner: {
          required: true,
          type: "string"
        },
        page: {
          type: "integer"
        },
        path: {
          type: "string"
        },
        per_page: {
          type: "integer"
        },
        repo: {
          required: true,
          type: "string"
        },
        sha: {
          type: "string"
        },
        since: {
          type: "string"
        },
        until: {
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/commits"
    },
    listContributors: {
      method: "GET",
      params: {
        anon: {
          type: "string"
        },
        owner: {
          required: true,
          type: "string"
        },
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/contributors"
    },
    listDeployKeys: {
      method: "GET",
      params: {
        owner: {
          required: true,
          type: "string"
        },
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/keys"
    },
    listDeploymentStatuses: {
      method: "GET",
      params: {
        deployment_id: {
          required: true,
          type: "integer"
        },
        owner: {
          required: true,
          type: "string"
        },
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/deployments/:deployment_id/statuses"
    },
    listDeployments: {
      method: "GET",
      params: {
        environment: {
          type: "string"
        },
        owner: {
          required: true,
          type: "string"
        },
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        },
        ref: {
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        },
        sha: {
          type: "string"
        },
        task: {
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/deployments"
    },
    listDownloads: {
      method: "GET",
      params: {
        owner: {
          required: true,
          type: "string"
        },
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/downloads"
    },
    listForOrg: {
      method: "GET",
      params: {
        direction: {
          enum: ["asc", "desc"],
          type: "string"
        },
        org: {
          required: true,
          type: "string"
        },
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        },
        sort: {
          enum: ["created", "updated", "pushed", "full_name"],
          type: "string"
        },
        type: {
          enum: ["all", "public", "private", "forks", "sources", "member", "internal"],
          type: "string"
        }
      },
      url: "/orgs/:org/repos"
    },
    listForUser: {
      method: "GET",
      params: {
        direction: {
          enum: ["asc", "desc"],
          type: "string"
        },
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        },
        sort: {
          enum: ["created", "updated", "pushed", "full_name"],
          type: "string"
        },
        type: {
          enum: ["all", "owner", "member"],
          type: "string"
        },
        username: {
          required: true,
          type: "string"
        }
      },
      url: "/users/:username/repos"
    },
    listForks: {
      method: "GET",
      params: {
        owner: {
          required: true,
          type: "string"
        },
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        },
        repo: {
          required: true,
          type: "string"
        },
        sort: {
          enum: ["newest", "oldest", "stargazers"],
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/forks"
    },
    listHooks: {
      method: "GET",
      params: {
        owner: {
          required: true,
          type: "string"
        },
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/hooks"
    },
    listInvitations: {
      method: "GET",
      params: {
        owner: {
          required: true,
          type: "string"
        },
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/invitations"
    },
    listInvitationsForAuthenticatedUser: {
      method: "GET",
      params: {
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        }
      },
      url: "/user/repository_invitations"
    },
    listLanguages: {
      method: "GET",
      params: {
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/languages"
    },
    listPagesBuilds: {
      method: "GET",
      params: {
        owner: {
          required: true,
          type: "string"
        },
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/pages/builds"
    },
    listProtectedBranchRequiredStatusChecksContexts: {
      method: "GET",
      params: {
        branch: {
          required: true,
          type: "string"
        },
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts"
    },
    listProtectedBranchTeamRestrictions: {
      deprecated: "octokit.repos.listProtectedBranchTeamRestrictions() has been renamed to octokit.repos.getTeamsWithAccessToProtectedBranch() (2019-09-09)",
      method: "GET",
      params: {
        branch: {
          required: true,
          type: "string"
        },
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/branches/:branch/protection/restrictions/teams"
    },
    listProtectedBranchUserRestrictions: {
      deprecated: "octokit.repos.listProtectedBranchUserRestrictions() has been renamed to octokit.repos.getUsersWithAccessToProtectedBranch() (2019-09-09)",
      method: "GET",
      params: {
        branch: {
          required: true,
          type: "string"
        },
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/branches/:branch/protection/restrictions/users"
    },
    listPublic: {
      method: "GET",
      params: {
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        },
        since: {
          type: "integer"
        }
      },
      url: "/repositories"
    },
    listPullRequestsAssociatedWithCommit: {
      headers: {
        accept: "application/vnd.github.groot-preview+json"
      },
      method: "GET",
      params: {
        commit_sha: {
          required: true,
          type: "string"
        },
        owner: {
          required: true,
          type: "string"
        },
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/commits/:commit_sha/pulls"
    },
    listReleases: {
      method: "GET",
      params: {
        owner: {
          required: true,
          type: "string"
        },
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/releases"
    },
    listStatusesForRef: {
      method: "GET",
      params: {
        owner: {
          required: true,
          type: "string"
        },
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        },
        ref: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/commits/:ref/statuses"
    },
    listTags: {
      method: "GET",
      params: {
        owner: {
          required: true,
          type: "string"
        },
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/tags"
    },
    listTeams: {
      method: "GET",
      params: {
        owner: {
          required: true,
          type: "string"
        },
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/teams"
    },
    listTeamsWithAccessToProtectedBranch: {
      deprecated: "octokit.repos.listTeamsWithAccessToProtectedBranch() has been renamed to octokit.repos.getTeamsWithAccessToProtectedBranch() (2019-09-13)",
      method: "GET",
      params: {
        branch: {
          required: true,
          type: "string"
        },
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/branches/:branch/protection/restrictions/teams"
    },
    listTopics: {
      headers: {
        accept: "application/vnd.github.mercy-preview+json"
      },
      method: "GET",
      params: {
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/topics"
    },
    listUsersWithAccessToProtectedBranch: {
      deprecated: "octokit.repos.listUsersWithAccessToProtectedBranch() has been renamed to octokit.repos.getUsersWithAccessToProtectedBranch() (2019-09-13)",
      method: "GET",
      params: {
        branch: {
          required: true,
          type: "string"
        },
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/branches/:branch/protection/restrictions/users"
    },
    merge: {
      method: "POST",
      params: {
        base: {
          required: true,
          type: "string"
        },
        commit_message: {
          type: "string"
        },
        head: {
          required: true,
          type: "string"
        },
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/merges"
    },
    pingHook: {
      method: "POST",
      params: {
        hook_id: {
          required: true,
          type: "integer"
        },
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/hooks/:hook_id/pings"
    },
    removeBranchProtection: {
      method: "DELETE",
      params: {
        branch: {
          required: true,
          type: "string"
        },
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/branches/:branch/protection"
    },
    removeCollaborator: {
      method: "DELETE",
      params: {
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        },
        username: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/collaborators/:username"
    },
    removeDeployKey: {
      method: "DELETE",
      params: {
        key_id: {
          required: true,
          type: "integer"
        },
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/keys/:key_id"
    },
    removeProtectedBranchAdminEnforcement: {
      method: "DELETE",
      params: {
        branch: {
          required: true,
          type: "string"
        },
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/branches/:branch/protection/enforce_admins"
    },
    removeProtectedBranchAppRestrictions: {
      method: "DELETE",
      params: {
        apps: {
          mapTo: "data",
          required: true,
          type: "string[]"
        },
        branch: {
          required: true,
          type: "string"
        },
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/branches/:branch/protection/restrictions/apps"
    },
    removeProtectedBranchPullRequestReviewEnforcement: {
      method: "DELETE",
      params: {
        branch: {
          required: true,
          type: "string"
        },
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/branches/:branch/protection/required_pull_request_reviews"
    },
    removeProtectedBranchRequiredSignatures: {
      headers: {
        accept: "application/vnd.github.zzzax-preview+json"
      },
      method: "DELETE",
      params: {
        branch: {
          required: true,
          type: "string"
        },
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/branches/:branch/protection/required_signatures"
    },
    removeProtectedBranchRequiredStatusChecks: {
      method: "DELETE",
      params: {
        branch: {
          required: true,
          type: "string"
        },
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/branches/:branch/protection/required_status_checks"
    },
    removeProtectedBranchRequiredStatusChecksContexts: {
      method: "DELETE",
      params: {
        branch: {
          required: true,
          type: "string"
        },
        contexts: {
          mapTo: "data",
          required: true,
          type: "string[]"
        },
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts"
    },
    removeProtectedBranchRestrictions: {
      method: "DELETE",
      params: {
        branch: {
          required: true,
          type: "string"
        },
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/branches/:branch/protection/restrictions"
    },
    removeProtectedBranchTeamRestrictions: {
      method: "DELETE",
      params: {
        branch: {
          required: true,
          type: "string"
        },
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        },
        teams: {
          mapTo: "data",
          required: true,
          type: "string[]"
        }
      },
      url: "/repos/:owner/:repo/branches/:branch/protection/restrictions/teams"
    },
    removeProtectedBranchUserRestrictions: {
      method: "DELETE",
      params: {
        branch: {
          required: true,
          type: "string"
        },
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        },
        users: {
          mapTo: "data",
          required: true,
          type: "string[]"
        }
      },
      url: "/repos/:owner/:repo/branches/:branch/protection/restrictions/users"
    },
    replaceProtectedBranchAppRestrictions: {
      method: "PUT",
      params: {
        apps: {
          mapTo: "data",
          required: true,
          type: "string[]"
        },
        branch: {
          required: true,
          type: "string"
        },
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/branches/:branch/protection/restrictions/apps"
    },
    replaceProtectedBranchRequiredStatusChecksContexts: {
      method: "PUT",
      params: {
        branch: {
          required: true,
          type: "string"
        },
        contexts: {
          mapTo: "data",
          required: true,
          type: "string[]"
        },
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts"
    },
    replaceProtectedBranchTeamRestrictions: {
      method: "PUT",
      params: {
        branch: {
          required: true,
          type: "string"
        },
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        },
        teams: {
          mapTo: "data",
          required: true,
          type: "string[]"
        }
      },
      url: "/repos/:owner/:repo/branches/:branch/protection/restrictions/teams"
    },
    replaceProtectedBranchUserRestrictions: {
      method: "PUT",
      params: {
        branch: {
          required: true,
          type: "string"
        },
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        },
        users: {
          mapTo: "data",
          required: true,
          type: "string[]"
        }
      },
      url: "/repos/:owner/:repo/branches/:branch/protection/restrictions/users"
    },
    replaceTopics: {
      headers: {
        accept: "application/vnd.github.mercy-preview+json"
      },
      method: "PUT",
      params: {
        names: {
          required: true,
          type: "string[]"
        },
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/topics"
    },
    requestPageBuild: {
      method: "POST",
      params: {
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/pages/builds"
    },
    retrieveCommunityProfileMetrics: {
      method: "GET",
      params: {
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/community/profile"
    },
    testPushHook: {
      method: "POST",
      params: {
        hook_id: {
          required: true,
          type: "integer"
        },
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/hooks/:hook_id/tests"
    },
    transfer: {
      method: "POST",
      params: {
        new_owner: {
          type: "string"
        },
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        },
        team_ids: {
          type: "integer[]"
        }
      },
      url: "/repos/:owner/:repo/transfer"
    },
    update: {
      method: "PATCH",
      params: {
        allow_merge_commit: {
          type: "boolean"
        },
        allow_rebase_merge: {
          type: "boolean"
        },
        allow_squash_merge: {
          type: "boolean"
        },
        archived: {
          type: "boolean"
        },
        default_branch: {
          type: "string"
        },
        delete_branch_on_merge: {
          type: "boolean"
        },
        description: {
          type: "string"
        },
        has_issues: {
          type: "boolean"
        },
        has_projects: {
          type: "boolean"
        },
        has_wiki: {
          type: "boolean"
        },
        homepage: {
          type: "string"
        },
        is_template: {
          type: "boolean"
        },
        name: {
          type: "string"
        },
        owner: {
          required: true,
          type: "string"
        },
        private: {
          type: "boolean"
        },
        repo: {
          required: true,
          type: "string"
        },
        visibility: {
          enum: ["public", "private", "visibility", "internal"],
          type: "string"
        }
      },
      url: "/repos/:owner/:repo"
    },
    updateBranchProtection: {
      method: "PUT",
      params: {
        allow_deletions: {
          type: "boolean"
        },
        allow_force_pushes: {
          allowNull: true,
          type: "boolean"
        },
        branch: {
          required: true,
          type: "string"
        },
        enforce_admins: {
          allowNull: true,
          required: true,
          type: "boolean"
        },
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        },
        required_linear_history: {
          type: "boolean"
        },
        required_pull_request_reviews: {
          allowNull: true,
          required: true,
          type: "object"
        },
        "required_pull_request_reviews.dismiss_stale_reviews": {
          type: "boolean"
        },
        "required_pull_request_reviews.dismissal_restrictions": {
          type: "object"
        },
        "required_pull_request_reviews.dismissal_restrictions.teams": {
          type: "string[]"
        },
        "required_pull_request_reviews.dismissal_restrictions.users": {
          type: "string[]"
        },
        "required_pull_request_reviews.require_code_owner_reviews": {
          type: "boolean"
        },
        "required_pull_request_reviews.required_approving_review_count": {
          type: "integer"
        },
        required_status_checks: {
          allowNull: true,
          required: true,
          type: "object"
        },
        "required_status_checks.contexts": {
          required: true,
          type: "string[]"
        },
        "required_status_checks.strict": {
          required: true,
          type: "boolean"
        },
        restrictions: {
          allowNull: true,
          required: true,
          type: "object"
        },
        "restrictions.apps": {
          type: "string[]"
        },
        "restrictions.teams": {
          required: true,
          type: "string[]"
        },
        "restrictions.users": {
          required: true,
          type: "string[]"
        }
      },
      url: "/repos/:owner/:repo/branches/:branch/protection"
    },
    updateCommitComment: {
      method: "PATCH",
      params: {
        body: {
          required: true,
          type: "string"
        },
        comment_id: {
          required: true,
          type: "integer"
        },
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/comments/:comment_id"
    },
    updateFile: {
      deprecated: "octokit.repos.updateFile() has been renamed to octokit.repos.createOrUpdateFile() (2019-06-07)",
      method: "PUT",
      params: {
        author: {
          type: "object"
        },
        "author.email": {
          required: true,
          type: "string"
        },
        "author.name": {
          required: true,
          type: "string"
        },
        branch: {
          type: "string"
        },
        committer: {
          type: "object"
        },
        "committer.email": {
          required: true,
          type: "string"
        },
        "committer.name": {
          required: true,
          type: "string"
        },
        content: {
          required: true,
          type: "string"
        },
        message: {
          required: true,
          type: "string"
        },
        owner: {
          required: true,
          type: "string"
        },
        path: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        },
        sha: {
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/contents/:path"
    },
    updateHook: {
      method: "PATCH",
      params: {
        active: {
          type: "boolean"
        },
        add_events: {
          type: "string[]"
        },
        config: {
          type: "object"
        },
        "config.content_type": {
          type: "string"
        },
        "config.insecure_ssl": {
          type: "string"
        },
        "config.secret": {
          type: "string"
        },
        "config.url": {
          required: true,
          type: "string"
        },
        events: {
          type: "string[]"
        },
        hook_id: {
          required: true,
          type: "integer"
        },
        owner: {
          required: true,
          type: "string"
        },
        remove_events: {
          type: "string[]"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/hooks/:hook_id"
    },
    updateInformationAboutPagesSite: {
      method: "PUT",
      params: {
        cname: {
          type: "string"
        },
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        },
        source: {
          enum: ['"gh-pages"', '"master"', '"master /docs"'],
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/pages"
    },
    updateInvitation: {
      method: "PATCH",
      params: {
        invitation_id: {
          required: true,
          type: "integer"
        },
        owner: {
          required: true,
          type: "string"
        },
        permissions: {
          enum: ["read", "write", "admin"],
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/invitations/:invitation_id"
    },
    updateProtectedBranchPullRequestReviewEnforcement: {
      method: "PATCH",
      params: {
        branch: {
          required: true,
          type: "string"
        },
        dismiss_stale_reviews: {
          type: "boolean"
        },
        dismissal_restrictions: {
          type: "object"
        },
        "dismissal_restrictions.teams": {
          type: "string[]"
        },
        "dismissal_restrictions.users": {
          type: "string[]"
        },
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        },
        require_code_owner_reviews: {
          type: "boolean"
        },
        required_approving_review_count: {
          type: "integer"
        }
      },
      url: "/repos/:owner/:repo/branches/:branch/protection/required_pull_request_reviews"
    },
    updateProtectedBranchRequiredStatusChecks: {
      method: "PATCH",
      params: {
        branch: {
          required: true,
          type: "string"
        },
        contexts: {
          type: "string[]"
        },
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        },
        strict: {
          type: "boolean"
        }
      },
      url: "/repos/:owner/:repo/branches/:branch/protection/required_status_checks"
    },
    updateRelease: {
      method: "PATCH",
      params: {
        body: {
          type: "string"
        },
        draft: {
          type: "boolean"
        },
        name: {
          type: "string"
        },
        owner: {
          required: true,
          type: "string"
        },
        prerelease: {
          type: "boolean"
        },
        release_id: {
          required: true,
          type: "integer"
        },
        repo: {
          required: true,
          type: "string"
        },
        tag_name: {
          type: "string"
        },
        target_commitish: {
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/releases/:release_id"
    },
    updateReleaseAsset: {
      method: "PATCH",
      params: {
        asset_id: {
          required: true,
          type: "integer"
        },
        label: {
          type: "string"
        },
        name: {
          type: "string"
        },
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        }
      },
      url: "/repos/:owner/:repo/releases/assets/:asset_id"
    },
    uploadReleaseAsset: {
      method: "POST",
      params: {
        data: {
          mapTo: "data",
          required: true,
          type: "string | object"
        },
        file: {
          alias: "data",
          deprecated: true,
          type: "string | object"
        },
        headers: {
          required: true,
          type: "object"
        },
        "headers.content-length": {
          required: true,
          type: "integer"
        },
        "headers.content-type": {
          required: true,
          type: "string"
        },
        label: {
          type: "string"
        },
        name: {
          required: true,
          type: "string"
        },
        url: {
          required: true,
          type: "string"
        }
      },
      url: ":url"
    }
  },
  search: {
    code: {
      method: "GET",
      params: {
        order: {
          enum: ["desc", "asc"],
          type: "string"
        },
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        },
        q: {
          required: true,
          type: "string"
        },
        sort: {
          enum: ["indexed"],
          type: "string"
        }
      },
      url: "/search/code"
    },
    commits: {
      headers: {
        accept: "application/vnd.github.cloak-preview+json"
      },
      method: "GET",
      params: {
        order: {
          enum: ["desc", "asc"],
          type: "string"
        },
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        },
        q: {
          required: true,
          type: "string"
        },
        sort: {
          enum: ["author-date", "committer-date"],
          type: "string"
        }
      },
      url: "/search/commits"
    },
    issues: {
      deprecated: "octokit.search.issues() has been renamed to octokit.search.issuesAndPullRequests() (2018-12-27)",
      method: "GET",
      params: {
        order: {
          enum: ["desc", "asc"],
          type: "string"
        },
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        },
        q: {
          required: true,
          type: "string"
        },
        sort: {
          enum: ["comments", "reactions", "reactions-+1", "reactions--1", "reactions-smile", "reactions-thinking_face", "reactions-heart", "reactions-tada", "interactions", "created", "updated"],
          type: "string"
        }
      },
      url: "/search/issues"
    },
    issuesAndPullRequests: {
      method: "GET",
      params: {
        order: {
          enum: ["desc", "asc"],
          type: "string"
        },
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        },
        q: {
          required: true,
          type: "string"
        },
        sort: {
          enum: ["comments", "reactions", "reactions-+1", "reactions--1", "reactions-smile", "reactions-thinking_face", "reactions-heart", "reactions-tada", "interactions", "created", "updated"],
          type: "string"
        }
      },
      url: "/search/issues"
    },
    labels: {
      method: "GET",
      params: {
        order: {
          enum: ["desc", "asc"],
          type: "string"
        },
        q: {
          required: true,
          type: "string"
        },
        repository_id: {
          required: true,
          type: "integer"
        },
        sort: {
          enum: ["created", "updated"],
          type: "string"
        }
      },
      url: "/search/labels"
    },
    repos: {
      method: "GET",
      params: {
        order: {
          enum: ["desc", "asc"],
          type: "string"
        },
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        },
        q: {
          required: true,
          type: "string"
        },
        sort: {
          enum: ["stars", "forks", "help-wanted-issues", "updated"],
          type: "string"
        }
      },
      url: "/search/repositories"
    },
    topics: {
      method: "GET",
      params: {
        q: {
          required: true,
          type: "string"
        }
      },
      url: "/search/topics"
    },
    users: {
      method: "GET",
      params: {
        order: {
          enum: ["desc", "asc"],
          type: "string"
        },
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        },
        q: {
          required: true,
          type: "string"
        },
        sort: {
          enum: ["followers", "repositories", "joined"],
          type: "string"
        }
      },
      url: "/search/users"
    }
  },
  teams: {
    addMember: {
      deprecated: "octokit.teams.addMember() has been renamed to octokit.teams.addMemberLegacy() (2020-01-16)",
      method: "PUT",
      params: {
        team_id: {
          required: true,
          type: "integer"
        },
        username: {
          required: true,
          type: "string"
        }
      },
      url: "/teams/:team_id/members/:username"
    },
    addMemberLegacy: {
      deprecated: "octokit.teams.addMemberLegacy() is deprecated, see https://developer.github.com/v3/teams/members/#add-team-member-legacy",
      method: "PUT",
      params: {
        team_id: {
          required: true,
          type: "integer"
        },
        username: {
          required: true,
          type: "string"
        }
      },
      url: "/teams/:team_id/members/:username"
    },
    addOrUpdateMembership: {
      deprecated: "octokit.teams.addOrUpdateMembership() has been renamed to octokit.teams.addOrUpdateMembershipLegacy() (2020-01-16)",
      method: "PUT",
      params: {
        role: {
          enum: ["member", "maintainer"],
          type: "string"
        },
        team_id: {
          required: true,
          type: "integer"
        },
        username: {
          required: true,
          type: "string"
        }
      },
      url: "/teams/:team_id/memberships/:username"
    },
    addOrUpdateMembershipInOrg: {
      method: "PUT",
      params: {
        org: {
          required: true,
          type: "string"
        },
        role: {
          enum: ["member", "maintainer"],
          type: "string"
        },
        team_slug: {
          required: true,
          type: "string"
        },
        username: {
          required: true,
          type: "string"
        }
      },
      url: "/orgs/:org/teams/:team_slug/memberships/:username"
    },
    addOrUpdateMembershipLegacy: {
      deprecated: "octokit.teams.addOrUpdateMembershipLegacy() is deprecated, see https://developer.github.com/v3/teams/members/#add-or-update-team-membership-legacy",
      method: "PUT",
      params: {
        role: {
          enum: ["member", "maintainer"],
          type: "string"
        },
        team_id: {
          required: true,
          type: "integer"
        },
        username: {
          required: true,
          type: "string"
        }
      },
      url: "/teams/:team_id/memberships/:username"
    },
    addOrUpdateProject: {
      deprecated: "octokit.teams.addOrUpdateProject() has been renamed to octokit.teams.addOrUpdateProjectLegacy() (2020-01-16)",
      headers: {
        accept: "application/vnd.github.inertia-preview+json"
      },
      method: "PUT",
      params: {
        permission: {
          enum: ["read", "write", "admin"],
          type: "string"
        },
        project_id: {
          required: true,
          type: "integer"
        },
        team_id: {
          required: true,
          type: "integer"
        }
      },
      url: "/teams/:team_id/projects/:project_id"
    },
    addOrUpdateProjectInOrg: {
      headers: {
        accept: "application/vnd.github.inertia-preview+json"
      },
      method: "PUT",
      params: {
        org: {
          required: true,
          type: "string"
        },
        permission: {
          enum: ["read", "write", "admin"],
          type: "string"
        },
        project_id: {
          required: true,
          type: "integer"
        },
        team_slug: {
          required: true,
          type: "string"
        }
      },
      url: "/orgs/:org/teams/:team_slug/projects/:project_id"
    },
    addOrUpdateProjectLegacy: {
      deprecated: "octokit.teams.addOrUpdateProjectLegacy() is deprecated, see https://developer.github.com/v3/teams/#add-or-update-team-project-legacy",
      headers: {
        accept: "application/vnd.github.inertia-preview+json"
      },
      method: "PUT",
      params: {
        permission: {
          enum: ["read", "write", "admin"],
          type: "string"
        },
        project_id: {
          required: true,
          type: "integer"
        },
        team_id: {
          required: true,
          type: "integer"
        }
      },
      url: "/teams/:team_id/projects/:project_id"
    },
    addOrUpdateRepo: {
      deprecated: "octokit.teams.addOrUpdateRepo() has been renamed to octokit.teams.addOrUpdateRepoLegacy() (2020-01-16)",
      method: "PUT",
      params: {
        owner: {
          required: true,
          type: "string"
        },
        permission: {
          enum: ["pull", "push", "admin"],
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        },
        team_id: {
          required: true,
          type: "integer"
        }
      },
      url: "/teams/:team_id/repos/:owner/:repo"
    },
    addOrUpdateRepoInOrg: {
      method: "PUT",
      params: {
        org: {
          required: true,
          type: "string"
        },
        owner: {
          required: true,
          type: "string"
        },
        permission: {
          enum: ["pull", "push", "admin"],
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        },
        team_slug: {
          required: true,
          type: "string"
        }
      },
      url: "/orgs/:org/teams/:team_slug/repos/:owner/:repo"
    },
    addOrUpdateRepoLegacy: {
      deprecated: "octokit.teams.addOrUpdateRepoLegacy() is deprecated, see https://developer.github.com/v3/teams/#add-or-update-team-repository-legacy",
      method: "PUT",
      params: {
        owner: {
          required: true,
          type: "string"
        },
        permission: {
          enum: ["pull", "push", "admin"],
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        },
        team_id: {
          required: true,
          type: "integer"
        }
      },
      url: "/teams/:team_id/repos/:owner/:repo"
    },
    checkManagesRepo: {
      deprecated: "octokit.teams.checkManagesRepo() has been renamed to octokit.teams.checkManagesRepoLegacy() (2020-01-16)",
      method: "GET",
      params: {
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        },
        team_id: {
          required: true,
          type: "integer"
        }
      },
      url: "/teams/:team_id/repos/:owner/:repo"
    },
    checkManagesRepoInOrg: {
      method: "GET",
      params: {
        org: {
          required: true,
          type: "string"
        },
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        },
        team_slug: {
          required: true,
          type: "string"
        }
      },
      url: "/orgs/:org/teams/:team_slug/repos/:owner/:repo"
    },
    checkManagesRepoLegacy: {
      deprecated: "octokit.teams.checkManagesRepoLegacy() is deprecated, see https://developer.github.com/v3/teams/#check-if-a-team-manages-a-repository-legacy",
      method: "GET",
      params: {
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        },
        team_id: {
          required: true,
          type: "integer"
        }
      },
      url: "/teams/:team_id/repos/:owner/:repo"
    },
    create: {
      method: "POST",
      params: {
        description: {
          type: "string"
        },
        maintainers: {
          type: "string[]"
        },
        name: {
          required: true,
          type: "string"
        },
        org: {
          required: true,
          type: "string"
        },
        parent_team_id: {
          type: "integer"
        },
        permission: {
          enum: ["pull", "push", "admin"],
          type: "string"
        },
        privacy: {
          enum: ["secret", "closed"],
          type: "string"
        },
        repo_names: {
          type: "string[]"
        }
      },
      url: "/orgs/:org/teams"
    },
    createDiscussion: {
      deprecated: "octokit.teams.createDiscussion() has been renamed to octokit.teams.createDiscussionLegacy() (2020-01-16)",
      method: "POST",
      params: {
        body: {
          required: true,
          type: "string"
        },
        private: {
          type: "boolean"
        },
        team_id: {
          required: true,
          type: "integer"
        },
        title: {
          required: true,
          type: "string"
        }
      },
      url: "/teams/:team_id/discussions"
    },
    createDiscussionComment: {
      deprecated: "octokit.teams.createDiscussionComment() has been renamed to octokit.teams.createDiscussionCommentLegacy() (2020-01-16)",
      method: "POST",
      params: {
        body: {
          required: true,
          type: "string"
        },
        discussion_number: {
          required: true,
          type: "integer"
        },
        team_id: {
          required: true,
          type: "integer"
        }
      },
      url: "/teams/:team_id/discussions/:discussion_number/comments"
    },
    createDiscussionCommentInOrg: {
      method: "POST",
      params: {
        body: {
          required: true,
          type: "string"
        },
        discussion_number: {
          required: true,
          type: "integer"
        },
        org: {
          required: true,
          type: "string"
        },
        team_slug: {
          required: true,
          type: "string"
        }
      },
      url: "/orgs/:org/teams/:team_slug/discussions/:discussion_number/comments"
    },
    createDiscussionCommentLegacy: {
      deprecated: "octokit.teams.createDiscussionCommentLegacy() is deprecated, see https://developer.github.com/v3/teams/discussion_comments/#create-a-comment-legacy",
      method: "POST",
      params: {
        body: {
          required: true,
          type: "string"
        },
        discussion_number: {
          required: true,
          type: "integer"
        },
        team_id: {
          required: true,
          type: "integer"
        }
      },
      url: "/teams/:team_id/discussions/:discussion_number/comments"
    },
    createDiscussionInOrg: {
      method: "POST",
      params: {
        body: {
          required: true,
          type: "string"
        },
        org: {
          required: true,
          type: "string"
        },
        private: {
          type: "boolean"
        },
        team_slug: {
          required: true,
          type: "string"
        },
        title: {
          required: true,
          type: "string"
        }
      },
      url: "/orgs/:org/teams/:team_slug/discussions"
    },
    createDiscussionLegacy: {
      deprecated: "octokit.teams.createDiscussionLegacy() is deprecated, see https://developer.github.com/v3/teams/discussions/#create-a-discussion-legacy",
      method: "POST",
      params: {
        body: {
          required: true,
          type: "string"
        },
        private: {
          type: "boolean"
        },
        team_id: {
          required: true,
          type: "integer"
        },
        title: {
          required: true,
          type: "string"
        }
      },
      url: "/teams/:team_id/discussions"
    },
    delete: {
      deprecated: "octokit.teams.delete() has been renamed to octokit.teams.deleteLegacy() (2020-01-16)",
      method: "DELETE",
      params: {
        team_id: {
          required: true,
          type: "integer"
        }
      },
      url: "/teams/:team_id"
    },
    deleteDiscussion: {
      deprecated: "octokit.teams.deleteDiscussion() has been renamed to octokit.teams.deleteDiscussionLegacy() (2020-01-16)",
      method: "DELETE",
      params: {
        discussion_number: {
          required: true,
          type: "integer"
        },
        team_id: {
          required: true,
          type: "integer"
        }
      },
      url: "/teams/:team_id/discussions/:discussion_number"
    },
    deleteDiscussionComment: {
      deprecated: "octokit.teams.deleteDiscussionComment() has been renamed to octokit.teams.deleteDiscussionCommentLegacy() (2020-01-16)",
      method: "DELETE",
      params: {
        comment_number: {
          required: true,
          type: "integer"
        },
        discussion_number: {
          required: true,
          type: "integer"
        },
        team_id: {
          required: true,
          type: "integer"
        }
      },
      url: "/teams/:team_id/discussions/:discussion_number/comments/:comment_number"
    },
    deleteDiscussionCommentInOrg: {
      method: "DELETE",
      params: {
        comment_number: {
          required: true,
          type: "integer"
        },
        discussion_number: {
          required: true,
          type: "integer"
        },
        org: {
          required: true,
          type: "string"
        },
        team_slug: {
          required: true,
          type: "string"
        }
      },
      url: "/orgs/:org/teams/:team_slug/discussions/:discussion_number/comments/:comment_number"
    },
    deleteDiscussionCommentLegacy: {
      deprecated: "octokit.teams.deleteDiscussionCommentLegacy() is deprecated, see https://developer.github.com/v3/teams/discussion_comments/#delete-a-comment-legacy",
      method: "DELETE",
      params: {
        comment_number: {
          required: true,
          type: "integer"
        },
        discussion_number: {
          required: true,
          type: "integer"
        },
        team_id: {
          required: true,
          type: "integer"
        }
      },
      url: "/teams/:team_id/discussions/:discussion_number/comments/:comment_number"
    },
    deleteDiscussionInOrg: {
      method: "DELETE",
      params: {
        discussion_number: {
          required: true,
          type: "integer"
        },
        org: {
          required: true,
          type: "string"
        },
        team_slug: {
          required: true,
          type: "string"
        }
      },
      url: "/orgs/:org/teams/:team_slug/discussions/:discussion_number"
    },
    deleteDiscussionLegacy: {
      deprecated: "octokit.teams.deleteDiscussionLegacy() is deprecated, see https://developer.github.com/v3/teams/discussions/#delete-a-discussion-legacy",
      method: "DELETE",
      params: {
        discussion_number: {
          required: true,
          type: "integer"
        },
        team_id: {
          required: true,
          type: "integer"
        }
      },
      url: "/teams/:team_id/discussions/:discussion_number"
    },
    deleteInOrg: {
      method: "DELETE",
      params: {
        org: {
          required: true,
          type: "string"
        },
        team_slug: {
          required: true,
          type: "string"
        }
      },
      url: "/orgs/:org/teams/:team_slug"
    },
    deleteLegacy: {
      deprecated: "octokit.teams.deleteLegacy() is deprecated, see https://developer.github.com/v3/teams/#delete-team-legacy",
      method: "DELETE",
      params: {
        team_id: {
          required: true,
          type: "integer"
        }
      },
      url: "/teams/:team_id"
    },
    get: {
      deprecated: "octokit.teams.get() has been renamed to octokit.teams.getLegacy() (2020-01-16)",
      method: "GET",
      params: {
        team_id: {
          required: true,
          type: "integer"
        }
      },
      url: "/teams/:team_id"
    },
    getByName: {
      method: "GET",
      params: {
        org: {
          required: true,
          type: "string"
        },
        team_slug: {
          required: true,
          type: "string"
        }
      },
      url: "/orgs/:org/teams/:team_slug"
    },
    getDiscussion: {
      deprecated: "octokit.teams.getDiscussion() has been renamed to octokit.teams.getDiscussionLegacy() (2020-01-16)",
      method: "GET",
      params: {
        discussion_number: {
          required: true,
          type: "integer"
        },
        team_id: {
          required: true,
          type: "integer"
        }
      },
      url: "/teams/:team_id/discussions/:discussion_number"
    },
    getDiscussionComment: {
      deprecated: "octokit.teams.getDiscussionComment() has been renamed to octokit.teams.getDiscussionCommentLegacy() (2020-01-16)",
      method: "GET",
      params: {
        comment_number: {
          required: true,
          type: "integer"
        },
        discussion_number: {
          required: true,
          type: "integer"
        },
        team_id: {
          required: true,
          type: "integer"
        }
      },
      url: "/teams/:team_id/discussions/:discussion_number/comments/:comment_number"
    },
    getDiscussionCommentInOrg: {
      method: "GET",
      params: {
        comment_number: {
          required: true,
          type: "integer"
        },
        discussion_number: {
          required: true,
          type: "integer"
        },
        org: {
          required: true,
          type: "string"
        },
        team_slug: {
          required: true,
          type: "string"
        }
      },
      url: "/orgs/:org/teams/:team_slug/discussions/:discussion_number/comments/:comment_number"
    },
    getDiscussionCommentLegacy: {
      deprecated: "octokit.teams.getDiscussionCommentLegacy() is deprecated, see https://developer.github.com/v3/teams/discussion_comments/#get-a-single-comment-legacy",
      method: "GET",
      params: {
        comment_number: {
          required: true,
          type: "integer"
        },
        discussion_number: {
          required: true,
          type: "integer"
        },
        team_id: {
          required: true,
          type: "integer"
        }
      },
      url: "/teams/:team_id/discussions/:discussion_number/comments/:comment_number"
    },
    getDiscussionInOrg: {
      method: "GET",
      params: {
        discussion_number: {
          required: true,
          type: "integer"
        },
        org: {
          required: true,
          type: "string"
        },
        team_slug: {
          required: true,
          type: "string"
        }
      },
      url: "/orgs/:org/teams/:team_slug/discussions/:discussion_number"
    },
    getDiscussionLegacy: {
      deprecated: "octokit.teams.getDiscussionLegacy() is deprecated, see https://developer.github.com/v3/teams/discussions/#get-a-single-discussion-legacy",
      method: "GET",
      params: {
        discussion_number: {
          required: true,
          type: "integer"
        },
        team_id: {
          required: true,
          type: "integer"
        }
      },
      url: "/teams/:team_id/discussions/:discussion_number"
    },
    getLegacy: {
      deprecated: "octokit.teams.getLegacy() is deprecated, see https://developer.github.com/v3/teams/#get-team-legacy",
      method: "GET",
      params: {
        team_id: {
          required: true,
          type: "integer"
        }
      },
      url: "/teams/:team_id"
    },
    getMember: {
      deprecated: "octokit.teams.getMember() has been renamed to octokit.teams.getMemberLegacy() (2020-01-16)",
      method: "GET",
      params: {
        team_id: {
          required: true,
          type: "integer"
        },
        username: {
          required: true,
          type: "string"
        }
      },
      url: "/teams/:team_id/members/:username"
    },
    getMemberLegacy: {
      deprecated: "octokit.teams.getMemberLegacy() is deprecated, see https://developer.github.com/v3/teams/members/#get-team-member-legacy",
      method: "GET",
      params: {
        team_id: {
          required: true,
          type: "integer"
        },
        username: {
          required: true,
          type: "string"
        }
      },
      url: "/teams/:team_id/members/:username"
    },
    getMembership: {
      deprecated: "octokit.teams.getMembership() has been renamed to octokit.teams.getMembershipLegacy() (2020-01-16)",
      method: "GET",
      params: {
        team_id: {
          required: true,
          type: "integer"
        },
        username: {
          required: true,
          type: "string"
        }
      },
      url: "/teams/:team_id/memberships/:username"
    },
    getMembershipInOrg: {
      method: "GET",
      params: {
        org: {
          required: true,
          type: "string"
        },
        team_slug: {
          required: true,
          type: "string"
        },
        username: {
          required: true,
          type: "string"
        }
      },
      url: "/orgs/:org/teams/:team_slug/memberships/:username"
    },
    getMembershipLegacy: {
      deprecated: "octokit.teams.getMembershipLegacy() is deprecated, see https://developer.github.com/v3/teams/members/#get-team-membership-legacy",
      method: "GET",
      params: {
        team_id: {
          required: true,
          type: "integer"
        },
        username: {
          required: true,
          type: "string"
        }
      },
      url: "/teams/:team_id/memberships/:username"
    },
    list: {
      method: "GET",
      params: {
        org: {
          required: true,
          type: "string"
        },
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        }
      },
      url: "/orgs/:org/teams"
    },
    listChild: {
      deprecated: "octokit.teams.listChild() has been renamed to octokit.teams.listChildLegacy() (2020-01-16)",
      method: "GET",
      params: {
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        },
        team_id: {
          required: true,
          type: "integer"
        }
      },
      url: "/teams/:team_id/teams"
    },
    listChildInOrg: {
      method: "GET",
      params: {
        org: {
          required: true,
          type: "string"
        },
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        },
        team_slug: {
          required: true,
          type: "string"
        }
      },
      url: "/orgs/:org/teams/:team_slug/teams"
    },
    listChildLegacy: {
      deprecated: "octokit.teams.listChildLegacy() is deprecated, see https://developer.github.com/v3/teams/#list-child-teams-legacy",
      method: "GET",
      params: {
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        },
        team_id: {
          required: true,
          type: "integer"
        }
      },
      url: "/teams/:team_id/teams"
    },
    listDiscussionComments: {
      deprecated: "octokit.teams.listDiscussionComments() has been renamed to octokit.teams.listDiscussionCommentsLegacy() (2020-01-16)",
      method: "GET",
      params: {
        direction: {
          enum: ["asc", "desc"],
          type: "string"
        },
        discussion_number: {
          required: true,
          type: "integer"
        },
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        },
        team_id: {
          required: true,
          type: "integer"
        }
      },
      url: "/teams/:team_id/discussions/:discussion_number/comments"
    },
    listDiscussionCommentsInOrg: {
      method: "GET",
      params: {
        direction: {
          enum: ["asc", "desc"],
          type: "string"
        },
        discussion_number: {
          required: true,
          type: "integer"
        },
        org: {
          required: true,
          type: "string"
        },
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        },
        team_slug: {
          required: true,
          type: "string"
        }
      },
      url: "/orgs/:org/teams/:team_slug/discussions/:discussion_number/comments"
    },
    listDiscussionCommentsLegacy: {
      deprecated: "octokit.teams.listDiscussionCommentsLegacy() is deprecated, see https://developer.github.com/v3/teams/discussion_comments/#list-comments-legacy",
      method: "GET",
      params: {
        direction: {
          enum: ["asc", "desc"],
          type: "string"
        },
        discussion_number: {
          required: true,
          type: "integer"
        },
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        },
        team_id: {
          required: true,
          type: "integer"
        }
      },
      url: "/teams/:team_id/discussions/:discussion_number/comments"
    },
    listDiscussions: {
      deprecated: "octokit.teams.listDiscussions() has been renamed to octokit.teams.listDiscussionsLegacy() (2020-01-16)",
      method: "GET",
      params: {
        direction: {
          enum: ["asc", "desc"],
          type: "string"
        },
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        },
        team_id: {
          required: true,
          type: "integer"
        }
      },
      url: "/teams/:team_id/discussions"
    },
    listDiscussionsInOrg: {
      method: "GET",
      params: {
        direction: {
          enum: ["asc", "desc"],
          type: "string"
        },
        org: {
          required: true,
          type: "string"
        },
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        },
        team_slug: {
          required: true,
          type: "string"
        }
      },
      url: "/orgs/:org/teams/:team_slug/discussions"
    },
    listDiscussionsLegacy: {
      deprecated: "octokit.teams.listDiscussionsLegacy() is deprecated, see https://developer.github.com/v3/teams/discussions/#list-discussions-legacy",
      method: "GET",
      params: {
        direction: {
          enum: ["asc", "desc"],
          type: "string"
        },
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        },
        team_id: {
          required: true,
          type: "integer"
        }
      },
      url: "/teams/:team_id/discussions"
    },
    listForAuthenticatedUser: {
      method: "GET",
      params: {
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        }
      },
      url: "/user/teams"
    },
    listMembers: {
      deprecated: "octokit.teams.listMembers() has been renamed to octokit.teams.listMembersLegacy() (2020-01-16)",
      method: "GET",
      params: {
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        },
        role: {
          enum: ["member", "maintainer", "all"],
          type: "string"
        },
        team_id: {
          required: true,
          type: "integer"
        }
      },
      url: "/teams/:team_id/members"
    },
    listMembersInOrg: {
      method: "GET",
      params: {
        org: {
          required: true,
          type: "string"
        },
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        },
        role: {
          enum: ["member", "maintainer", "all"],
          type: "string"
        },
        team_slug: {
          required: true,
          type: "string"
        }
      },
      url: "/orgs/:org/teams/:team_slug/members"
    },
    listMembersLegacy: {
      deprecated: "octokit.teams.listMembersLegacy() is deprecated, see https://developer.github.com/v3/teams/members/#list-team-members-legacy",
      method: "GET",
      params: {
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        },
        role: {
          enum: ["member", "maintainer", "all"],
          type: "string"
        },
        team_id: {
          required: true,
          type: "integer"
        }
      },
      url: "/teams/:team_id/members"
    },
    listPendingInvitations: {
      deprecated: "octokit.teams.listPendingInvitations() has been renamed to octokit.teams.listPendingInvitationsLegacy() (2020-01-16)",
      method: "GET",
      params: {
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        },
        team_id: {
          required: true,
          type: "integer"
        }
      },
      url: "/teams/:team_id/invitations"
    },
    listPendingInvitationsInOrg: {
      method: "GET",
      params: {
        org: {
          required: true,
          type: "string"
        },
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        },
        team_slug: {
          required: true,
          type: "string"
        }
      },
      url: "/orgs/:org/teams/:team_slug/invitations"
    },
    listPendingInvitationsLegacy: {
      deprecated: "octokit.teams.listPendingInvitationsLegacy() is deprecated, see https://developer.github.com/v3/teams/members/#list-pending-team-invitations-legacy",
      method: "GET",
      params: {
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        },
        team_id: {
          required: true,
          type: "integer"
        }
      },
      url: "/teams/:team_id/invitations"
    },
    listProjects: {
      deprecated: "octokit.teams.listProjects() has been renamed to octokit.teams.listProjectsLegacy() (2020-01-16)",
      headers: {
        accept: "application/vnd.github.inertia-preview+json"
      },
      method: "GET",
      params: {
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        },
        team_id: {
          required: true,
          type: "integer"
        }
      },
      url: "/teams/:team_id/projects"
    },
    listProjectsInOrg: {
      headers: {
        accept: "application/vnd.github.inertia-preview+json"
      },
      method: "GET",
      params: {
        org: {
          required: true,
          type: "string"
        },
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        },
        team_slug: {
          required: true,
          type: "string"
        }
      },
      url: "/orgs/:org/teams/:team_slug/projects"
    },
    listProjectsLegacy: {
      deprecated: "octokit.teams.listProjectsLegacy() is deprecated, see https://developer.github.com/v3/teams/#list-team-projects-legacy",
      headers: {
        accept: "application/vnd.github.inertia-preview+json"
      },
      method: "GET",
      params: {
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        },
        team_id: {
          required: true,
          type: "integer"
        }
      },
      url: "/teams/:team_id/projects"
    },
    listRepos: {
      deprecated: "octokit.teams.listRepos() has been renamed to octokit.teams.listReposLegacy() (2020-01-16)",
      method: "GET",
      params: {
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        },
        team_id: {
          required: true,
          type: "integer"
        }
      },
      url: "/teams/:team_id/repos"
    },
    listReposInOrg: {
      method: "GET",
      params: {
        org: {
          required: true,
          type: "string"
        },
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        },
        team_slug: {
          required: true,
          type: "string"
        }
      },
      url: "/orgs/:org/teams/:team_slug/repos"
    },
    listReposLegacy: {
      deprecated: "octokit.teams.listReposLegacy() is deprecated, see https://developer.github.com/v3/teams/#list-team-repos-legacy",
      method: "GET",
      params: {
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        },
        team_id: {
          required: true,
          type: "integer"
        }
      },
      url: "/teams/:team_id/repos"
    },
    removeMember: {
      deprecated: "octokit.teams.removeMember() has been renamed to octokit.teams.removeMemberLegacy() (2020-01-16)",
      method: "DELETE",
      params: {
        team_id: {
          required: true,
          type: "integer"
        },
        username: {
          required: true,
          type: "string"
        }
      },
      url: "/teams/:team_id/members/:username"
    },
    removeMemberLegacy: {
      deprecated: "octokit.teams.removeMemberLegacy() is deprecated, see https://developer.github.com/v3/teams/members/#remove-team-member-legacy",
      method: "DELETE",
      params: {
        team_id: {
          required: true,
          type: "integer"
        },
        username: {
          required: true,
          type: "string"
        }
      },
      url: "/teams/:team_id/members/:username"
    },
    removeMembership: {
      deprecated: "octokit.teams.removeMembership() has been renamed to octokit.teams.removeMembershipLegacy() (2020-01-16)",
      method: "DELETE",
      params: {
        team_id: {
          required: true,
          type: "integer"
        },
        username: {
          required: true,
          type: "string"
        }
      },
      url: "/teams/:team_id/memberships/:username"
    },
    removeMembershipInOrg: {
      method: "DELETE",
      params: {
        org: {
          required: true,
          type: "string"
        },
        team_slug: {
          required: true,
          type: "string"
        },
        username: {
          required: true,
          type: "string"
        }
      },
      url: "/orgs/:org/teams/:team_slug/memberships/:username"
    },
    removeMembershipLegacy: {
      deprecated: "octokit.teams.removeMembershipLegacy() is deprecated, see https://developer.github.com/v3/teams/members/#remove-team-membership-legacy",
      method: "DELETE",
      params: {
        team_id: {
          required: true,
          type: "integer"
        },
        username: {
          required: true,
          type: "string"
        }
      },
      url: "/teams/:team_id/memberships/:username"
    },
    removeProject: {
      deprecated: "octokit.teams.removeProject() has been renamed to octokit.teams.removeProjectLegacy() (2020-01-16)",
      method: "DELETE",
      params: {
        project_id: {
          required: true,
          type: "integer"
        },
        team_id: {
          required: true,
          type: "integer"
        }
      },
      url: "/teams/:team_id/projects/:project_id"
    },
    removeProjectInOrg: {
      method: "DELETE",
      params: {
        org: {
          required: true,
          type: "string"
        },
        project_id: {
          required: true,
          type: "integer"
        },
        team_slug: {
          required: true,
          type: "string"
        }
      },
      url: "/orgs/:org/teams/:team_slug/projects/:project_id"
    },
    removeProjectLegacy: {
      deprecated: "octokit.teams.removeProjectLegacy() is deprecated, see https://developer.github.com/v3/teams/#remove-team-project-legacy",
      method: "DELETE",
      params: {
        project_id: {
          required: true,
          type: "integer"
        },
        team_id: {
          required: true,
          type: "integer"
        }
      },
      url: "/teams/:team_id/projects/:project_id"
    },
    removeRepo: {
      deprecated: "octokit.teams.removeRepo() has been renamed to octokit.teams.removeRepoLegacy() (2020-01-16)",
      method: "DELETE",
      params: {
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        },
        team_id: {
          required: true,
          type: "integer"
        }
      },
      url: "/teams/:team_id/repos/:owner/:repo"
    },
    removeRepoInOrg: {
      method: "DELETE",
      params: {
        org: {
          required: true,
          type: "string"
        },
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        },
        team_slug: {
          required: true,
          type: "string"
        }
      },
      url: "/orgs/:org/teams/:team_slug/repos/:owner/:repo"
    },
    removeRepoLegacy: {
      deprecated: "octokit.teams.removeRepoLegacy() is deprecated, see https://developer.github.com/v3/teams/#remove-team-repository-legacy",
      method: "DELETE",
      params: {
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        },
        team_id: {
          required: true,
          type: "integer"
        }
      },
      url: "/teams/:team_id/repos/:owner/:repo"
    },
    reviewProject: {
      deprecated: "octokit.teams.reviewProject() has been renamed to octokit.teams.reviewProjectLegacy() (2020-01-16)",
      headers: {
        accept: "application/vnd.github.inertia-preview+json"
      },
      method: "GET",
      params: {
        project_id: {
          required: true,
          type: "integer"
        },
        team_id: {
          required: true,
          type: "integer"
        }
      },
      url: "/teams/:team_id/projects/:project_id"
    },
    reviewProjectInOrg: {
      headers: {
        accept: "application/vnd.github.inertia-preview+json"
      },
      method: "GET",
      params: {
        org: {
          required: true,
          type: "string"
        },
        project_id: {
          required: true,
          type: "integer"
        },
        team_slug: {
          required: true,
          type: "string"
        }
      },
      url: "/orgs/:org/teams/:team_slug/projects/:project_id"
    },
    reviewProjectLegacy: {
      deprecated: "octokit.teams.reviewProjectLegacy() is deprecated, see https://developer.github.com/v3/teams/#review-a-team-project-legacy",
      headers: {
        accept: "application/vnd.github.inertia-preview+json"
      },
      method: "GET",
      params: {
        project_id: {
          required: true,
          type: "integer"
        },
        team_id: {
          required: true,
          type: "integer"
        }
      },
      url: "/teams/:team_id/projects/:project_id"
    },
    update: {
      deprecated: "octokit.teams.update() has been renamed to octokit.teams.updateLegacy() (2020-01-16)",
      method: "PATCH",
      params: {
        description: {
          type: "string"
        },
        name: {
          required: true,
          type: "string"
        },
        parent_team_id: {
          type: "integer"
        },
        permission: {
          enum: ["pull", "push", "admin"],
          type: "string"
        },
        privacy: {
          enum: ["secret", "closed"],
          type: "string"
        },
        team_id: {
          required: true,
          type: "integer"
        }
      },
      url: "/teams/:team_id"
    },
    updateDiscussion: {
      deprecated: "octokit.teams.updateDiscussion() has been renamed to octokit.teams.updateDiscussionLegacy() (2020-01-16)",
      method: "PATCH",
      params: {
        body: {
          type: "string"
        },
        discussion_number: {
          required: true,
          type: "integer"
        },
        team_id: {
          required: true,
          type: "integer"
        },
        title: {
          type: "string"
        }
      },
      url: "/teams/:team_id/discussions/:discussion_number"
    },
    updateDiscussionComment: {
      deprecated: "octokit.teams.updateDiscussionComment() has been renamed to octokit.teams.updateDiscussionCommentLegacy() (2020-01-16)",
      method: "PATCH",
      params: {
        body: {
          required: true,
          type: "string"
        },
        comment_number: {
          required: true,
          type: "integer"
        },
        discussion_number: {
          required: true,
          type: "integer"
        },
        team_id: {
          required: true,
          type: "integer"
        }
      },
      url: "/teams/:team_id/discussions/:discussion_number/comments/:comment_number"
    },
    updateDiscussionCommentInOrg: {
      method: "PATCH",
      params: {
        body: {
          required: true,
          type: "string"
        },
        comment_number: {
          required: true,
          type: "integer"
        },
        discussion_number: {
          required: true,
          type: "integer"
        },
        org: {
          required: true,
          type: "string"
        },
        team_slug: {
          required: true,
          type: "string"
        }
      },
      url: "/orgs/:org/teams/:team_slug/discussions/:discussion_number/comments/:comment_number"
    },
    updateDiscussionCommentLegacy: {
      deprecated: "octokit.teams.updateDiscussionCommentLegacy() is deprecated, see https://developer.github.com/v3/teams/discussion_comments/#edit-a-comment-legacy",
      method: "PATCH",
      params: {
        body: {
          required: true,
          type: "string"
        },
        comment_number: {
          required: true,
          type: "integer"
        },
        discussion_number: {
          required: true,
          type: "integer"
        },
        team_id: {
          required: true,
          type: "integer"
        }
      },
      url: "/teams/:team_id/discussions/:discussion_number/comments/:comment_number"
    },
    updateDiscussionInOrg: {
      method: "PATCH",
      params: {
        body: {
          type: "string"
        },
        discussion_number: {
          required: true,
          type: "integer"
        },
        org: {
          required: true,
          type: "string"
        },
        team_slug: {
          required: true,
          type: "string"
        },
        title: {
          type: "string"
        }
      },
      url: "/orgs/:org/teams/:team_slug/discussions/:discussion_number"
    },
    updateDiscussionLegacy: {
      deprecated: "octokit.teams.updateDiscussionLegacy() is deprecated, see https://developer.github.com/v3/teams/discussions/#edit-a-discussion-legacy",
      method: "PATCH",
      params: {
        body: {
          type: "string"
        },
        discussion_number: {
          required: true,
          type: "integer"
        },
        team_id: {
          required: true,
          type: "integer"
        },
        title: {
          type: "string"
        }
      },
      url: "/teams/:team_id/discussions/:discussion_number"
    },
    updateInOrg: {
      method: "PATCH",
      params: {
        description: {
          type: "string"
        },
        name: {
          required: true,
          type: "string"
        },
        org: {
          required: true,
          type: "string"
        },
        parent_team_id: {
          type: "integer"
        },
        permission: {
          enum: ["pull", "push", "admin"],
          type: "string"
        },
        privacy: {
          enum: ["secret", "closed"],
          type: "string"
        },
        team_slug: {
          required: true,
          type: "string"
        }
      },
      url: "/orgs/:org/teams/:team_slug"
    },
    updateLegacy: {
      deprecated: "octokit.teams.updateLegacy() is deprecated, see https://developer.github.com/v3/teams/#edit-team-legacy",
      method: "PATCH",
      params: {
        description: {
          type: "string"
        },
        name: {
          required: true,
          type: "string"
        },
        parent_team_id: {
          type: "integer"
        },
        permission: {
          enum: ["pull", "push", "admin"],
          type: "string"
        },
        privacy: {
          enum: ["secret", "closed"],
          type: "string"
        },
        team_id: {
          required: true,
          type: "integer"
        }
      },
      url: "/teams/:team_id"
    }
  },
  users: {
    addEmails: {
      method: "POST",
      params: {
        emails: {
          required: true,
          type: "string[]"
        }
      },
      url: "/user/emails"
    },
    block: {
      method: "PUT",
      params: {
        username: {
          required: true,
          type: "string"
        }
      },
      url: "/user/blocks/:username"
    },
    checkBlocked: {
      method: "GET",
      params: {
        username: {
          required: true,
          type: "string"
        }
      },
      url: "/user/blocks/:username"
    },
    checkFollowing: {
      method: "GET",
      params: {
        username: {
          required: true,
          type: "string"
        }
      },
      url: "/user/following/:username"
    },
    checkFollowingForUser: {
      method: "GET",
      params: {
        target_user: {
          required: true,
          type: "string"
        },
        username: {
          required: true,
          type: "string"
        }
      },
      url: "/users/:username/following/:target_user"
    },
    createGpgKey: {
      method: "POST",
      params: {
        armored_public_key: {
          type: "string"
        }
      },
      url: "/user/gpg_keys"
    },
    createPublicKey: {
      method: "POST",
      params: {
        key: {
          type: "string"
        },
        title: {
          type: "string"
        }
      },
      url: "/user/keys"
    },
    deleteEmails: {
      method: "DELETE",
      params: {
        emails: {
          required: true,
          type: "string[]"
        }
      },
      url: "/user/emails"
    },
    deleteGpgKey: {
      method: "DELETE",
      params: {
        gpg_key_id: {
          required: true,
          type: "integer"
        }
      },
      url: "/user/gpg_keys/:gpg_key_id"
    },
    deletePublicKey: {
      method: "DELETE",
      params: {
        key_id: {
          required: true,
          type: "integer"
        }
      },
      url: "/user/keys/:key_id"
    },
    follow: {
      method: "PUT",
      params: {
        username: {
          required: true,
          type: "string"
        }
      },
      url: "/user/following/:username"
    },
    getAuthenticated: {
      method: "GET",
      params: {},
      url: "/user"
    },
    getByUsername: {
      method: "GET",
      params: {
        username: {
          required: true,
          type: "string"
        }
      },
      url: "/users/:username"
    },
    getContextForUser: {
      method: "GET",
      params: {
        subject_id: {
          type: "string"
        },
        subject_type: {
          enum: ["organization", "repository", "issue", "pull_request"],
          type: "string"
        },
        username: {
          required: true,
          type: "string"
        }
      },
      url: "/users/:username/hovercard"
    },
    getGpgKey: {
      method: "GET",
      params: {
        gpg_key_id: {
          required: true,
          type: "integer"
        }
      },
      url: "/user/gpg_keys/:gpg_key_id"
    },
    getPublicKey: {
      method: "GET",
      params: {
        key_id: {
          required: true,
          type: "integer"
        }
      },
      url: "/user/keys/:key_id"
    },
    list: {
      method: "GET",
      params: {
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        },
        since: {
          type: "string"
        }
      },
      url: "/users"
    },
    listBlocked: {
      method: "GET",
      params: {},
      url: "/user/blocks"
    },
    listEmails: {
      method: "GET",
      params: {
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        }
      },
      url: "/user/emails"
    },
    listFollowersForAuthenticatedUser: {
      method: "GET",
      params: {
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        }
      },
      url: "/user/followers"
    },
    listFollowersForUser: {
      method: "GET",
      params: {
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        },
        username: {
          required: true,
          type: "string"
        }
      },
      url: "/users/:username/followers"
    },
    listFollowingForAuthenticatedUser: {
      method: "GET",
      params: {
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        }
      },
      url: "/user/following"
    },
    listFollowingForUser: {
      method: "GET",
      params: {
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        },
        username: {
          required: true,
          type: "string"
        }
      },
      url: "/users/:username/following"
    },
    listGpgKeys: {
      method: "GET",
      params: {
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        }
      },
      url: "/user/gpg_keys"
    },
    listGpgKeysForUser: {
      method: "GET",
      params: {
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        },
        username: {
          required: true,
          type: "string"
        }
      },
      url: "/users/:username/gpg_keys"
    },
    listPublicEmails: {
      method: "GET",
      params: {
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        }
      },
      url: "/user/public_emails"
    },
    listPublicKeys: {
      method: "GET",
      params: {
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        }
      },
      url: "/user/keys"
    },
    listPublicKeysForUser: {
      method: "GET",
      params: {
        page: {
          type: "integer"
        },
        per_page: {
          type: "integer"
        },
        username: {
          required: true,
          type: "string"
        }
      },
      url: "/users/:username/keys"
    },
    togglePrimaryEmailVisibility: {
      method: "PATCH",
      params: {
        email: {
          required: true,
          type: "string"
        },
        visibility: {
          required: true,
          type: "string"
        }
      },
      url: "/user/email/visibility"
    },
    unblock: {
      method: "DELETE",
      params: {
        username: {
          required: true,
          type: "string"
        }
      },
      url: "/user/blocks/:username"
    },
    unfollow: {
      method: "DELETE",
      params: {
        username: {
          required: true,
          type: "string"
        }
      },
      url: "/user/following/:username"
    },
    updateAuthenticated: {
      method: "PATCH",
      params: {
        bio: {
          type: "string"
        },
        blog: {
          type: "string"
        },
        company: {
          type: "string"
        },
        email: {
          type: "string"
        },
        hireable: {
          type: "boolean"
        },
        location: {
          type: "string"
        },
        name: {
          type: "string"
        }
      },
      url: "/user"
    }
  }
};

const VERSION = "2.4.0";

function registerEndpoints(octokit, routes) {
  Object.keys(routes).forEach(namespaceName => {
    if (!octokit[namespaceName]) {
      octokit[namespaceName] = {};
    }

    Object.keys(routes[namespaceName]).forEach(apiName => {
      const apiOptions = routes[namespaceName][apiName];
      const endpointDefaults = ["method", "url", "headers"].reduce((map, key) => {
        if (typeof apiOptions[key] !== "undefined") {
          map[key] = apiOptions[key];
        }

        return map;
      }, {});
      endpointDefaults.request = {
        validate: apiOptions.params
      };
      let request = octokit.request.defaults(endpointDefaults); // patch request & endpoint methods to support deprecated parameters.
      // Not the most elegant solution, but we don’t want to move deprecation
      // logic into octokit/endpoint.js as it’s out of scope

      const hasDeprecatedParam = Object.keys(apiOptions.params || {}).find(key => apiOptions.params[key].deprecated);

      if (hasDeprecatedParam) {
        const patch = patchForDeprecation.bind(null, octokit, apiOptions);
        request = patch(octokit.request.defaults(endpointDefaults), `.${namespaceName}.${apiName}()`);
        request.endpoint = patch(request.endpoint, `.${namespaceName}.${apiName}.endpoint()`);
        request.endpoint.merge = patch(request.endpoint.merge, `.${namespaceName}.${apiName}.endpoint.merge()`);
      }

      if (apiOptions.deprecated) {
        octokit[namespaceName][apiName] = Object.assign(function deprecatedEndpointMethod() {
          octokit.log.warn(new deprecation.Deprecation(`[@octokit/rest] ${apiOptions.deprecated}`));
          octokit[namespaceName][apiName] = request;
          return request.apply(null, arguments);
        }, request);
        return;
      }

      octokit[namespaceName][apiName] = request;
    });
  });
}

function patchForDeprecation(octokit, apiOptions, method, methodName) {
  const patchedMethod = options => {
    options = Object.assign({}, options);
    Object.keys(options).forEach(key => {
      if (apiOptions.params[key] && apiOptions.params[key].deprecated) {
        const aliasKey = apiOptions.params[key].alias;
        octokit.log.warn(new deprecation.Deprecation(`[@octokit/rest] "${key}" parameter is deprecated for "${methodName}". Use "${aliasKey}" instead`));

        if (!(aliasKey in options)) {
          options[aliasKey] = options[key];
        }

        delete options[key];
      }
    });
    return method(options);
  };

  Object.keys(method).forEach(key => {
    patchedMethod[key] = method[key];
  });
  return patchedMethod;
}

/**
 * This plugin is a 1:1 copy of internal @octokit/rest plugins. The primary
 * goal is to rebuild @octokit/rest on top of @octokit/core. Once that is
 * done, we will remove the registerEndpoints methods and return the methods
 * directly as with the other plugins. At that point we will also remove the
 * legacy workarounds and deprecations.
 *
 * See the plan at
 * https://github.com/octokit/plugin-rest-endpoint-methods.js/pull/1
 */

function restEndpointMethods(octokit) {
  // @ts-ignore
  octokit.registerEndpoints = registerEndpoints.bind(null, octokit);
  registerEndpoints(octokit, endpointsByScope); // Aliasing scopes for backward compatibility
  // See https://github.com/octokit/rest.js/pull/1134

  [["gitdata", "git"], ["authorization", "oauthAuthorizations"], ["pullRequests", "pulls"]].forEach(([deprecatedScope, scope]) => {
    Object.defineProperty(octokit, deprecatedScope, {
      get() {
        octokit.log.warn( // @ts-ignore
        new deprecation.Deprecation(`[@octokit/plugin-rest-endpoint-methods] "octokit.${deprecatedScope}.*" methods are deprecated, use "octokit.${scope}.*" instead`)); // @ts-ignore

        return octokit[scope];
      }

    });
  });
  return {};
}
restEndpointMethods.VERSION = VERSION;

exports.restEndpointMethods = restEndpointMethods;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 3708:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var deprecation = __nccwpck_require__(4150);
var once = _interopDefault(__nccwpck_require__(5560));

const logOnce = once(deprecation => console.warn(deprecation));
/**
 * Error with extra properties to help with debugging
 */

class RequestError extends Error {
  constructor(message, statusCode, options) {
    super(message); // Maintains proper stack trace (only available on V8)

    /* istanbul ignore next */

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }

    this.name = "HttpError";
    this.status = statusCode;
    Object.defineProperty(this, "code", {
      get() {
        logOnce(new deprecation.Deprecation("[@octokit/request-error] `error.code` is deprecated, use `error.status`."));
        return statusCode;
      }

    });
    this.headers = options.headers || {}; // redact request credentials without mutating original request options

    const requestCopy = Object.assign({}, options.request);

    if (options.request.headers.authorization) {
      requestCopy.headers = Object.assign({}, options.request.headers, {
        authorization: options.request.headers.authorization.replace(/ .*$/, " [REDACTED]")
      });
    }

    requestCopy.url = requestCopy.url // client_id & client_secret can be passed as URL query parameters to increase rate limit
    // see https://developer.github.com/v3/#increasing-the-unauthenticated-rate-limit-for-oauth-applications
    .replace(/\bclient_secret=\w+/g, "client_secret=[REDACTED]") // OAuth tokens can be passed as URL query parameters, although it is not recommended
    // see https://developer.github.com/v3/#oauth2-token-sent-in-a-header
    .replace(/\baccess_token=\w+/g, "access_token=[REDACTED]");
    this.request = requestCopy;
  }

}

exports.RequestError = RequestError;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 6255:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var endpoint = __nccwpck_require__(4471);
var universalUserAgent = __nccwpck_require__(3843);
var isPlainObject = _interopDefault(__nccwpck_require__(9139));
var nodeFetch = _interopDefault(__nccwpck_require__(6705));
var requestError = __nccwpck_require__(3708);

const VERSION = "5.4.3";

function getBufferResponse(response) {
  return response.arrayBuffer();
}

function fetchWrapper(requestOptions) {
  if (isPlainObject(requestOptions.body) || Array.isArray(requestOptions.body)) {
    requestOptions.body = JSON.stringify(requestOptions.body);
  }

  let headers = {};
  let status;
  let url;
  const fetch = requestOptions.request && requestOptions.request.fetch || nodeFetch;
  return fetch(requestOptions.url, Object.assign({
    method: requestOptions.method,
    body: requestOptions.body,
    headers: requestOptions.headers,
    redirect: requestOptions.redirect
  }, requestOptions.request)).then(response => {
    url = response.url;
    status = response.status;

    for (const keyAndValue of response.headers) {
      headers[keyAndValue[0]] = keyAndValue[1];
    }

    if (status === 204 || status === 205) {
      return;
    } // GitHub API returns 200 for HEAD requests


    if (requestOptions.method === "HEAD") {
      if (status < 400) {
        return;
      }

      throw new requestError.RequestError(response.statusText, status, {
        headers,
        request: requestOptions
      });
    }

    if (status === 304) {
      throw new requestError.RequestError("Not modified", status, {
        headers,
        request: requestOptions
      });
    }

    if (status >= 400) {
      return response.text().then(message => {
        const error = new requestError.RequestError(message, status, {
          headers,
          request: requestOptions
        });

        try {
          let responseBody = JSON.parse(error.message);
          Object.assign(error, responseBody);
          let errors = responseBody.errors; // Assumption `errors` would always be in Array format

          error.message = error.message + ": " + errors.map(JSON.stringify).join(", ");
        } catch (e) {// ignore, see octokit/rest.js#684
        }

        throw error;
      });
    }

    const contentType = response.headers.get("content-type");

    if (/application\/json/.test(contentType)) {
      return response.json();
    }

    if (!contentType || /^text\/|charset=utf-8$/.test(contentType)) {
      return response.text();
    }

    return getBufferResponse(response);
  }).then(data => {
    return {
      status,
      url,
      headers,
      data
    };
  }).catch(error => {
    if (error instanceof requestError.RequestError) {
      throw error;
    }

    throw new requestError.RequestError(error.message, 500, {
      headers,
      request: requestOptions
    });
  });
}

function withDefaults(oldEndpoint, newDefaults) {
  const endpoint = oldEndpoint.defaults(newDefaults);

  const newApi = function (route, parameters) {
    const endpointOptions = endpoint.merge(route, parameters);

    if (!endpointOptions.request || !endpointOptions.request.hook) {
      return fetchWrapper(endpoint.parse(endpointOptions));
    }

    const request = (route, parameters) => {
      return fetchWrapper(endpoint.parse(endpoint.merge(route, parameters)));
    };

    Object.assign(request, {
      endpoint,
      defaults: withDefaults.bind(null, endpoint)
    });
    return endpointOptions.request.hook(request, endpointOptions);
  };

  return Object.assign(newApi, {
    endpoint,
    defaults: withDefaults.bind(null, endpoint)
  });
}

const request = withDefaults(endpoint.endpoint, {
  headers: {
    "user-agent": `octokit-request.js/${VERSION} ${universalUserAgent.getUserAgent()}`
  }
});

exports.request = request;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 1148:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

const { requestLog } = __nccwpck_require__(6966);
const {
  restEndpointMethods
} = __nccwpck_require__(7316);

const Core = __nccwpck_require__(3649);

const CORE_PLUGINS = [
  __nccwpck_require__(4964),
  __nccwpck_require__(8078), // deprecated: remove in v17
  requestLog,
  __nccwpck_require__(5112),
  restEndpointMethods,
  __nccwpck_require__(9362),

  __nccwpck_require__(4035) // deprecated: remove in v17
];

const OctokitRest = Core.plugin(CORE_PLUGINS);

function DeprecatedOctokit(options) {
  const warn =
    options && options.log && options.log.warn
      ? options.log.warn
      : console.warn;
  warn(
    '[@octokit/rest] `const Octokit = require("@octokit/rest")` is deprecated. Use `const { Octokit } = require("@octokit/rest")` instead'
  );
  return new OctokitRest(options);
}

const Octokit = Object.assign(DeprecatedOctokit, {
  Octokit: OctokitRest
});

Object.keys(OctokitRest).forEach(key => {
  /* istanbul ignore else */
  if (OctokitRest.hasOwnProperty(key)) {
    Octokit[key] = OctokitRest[key];
  }
});

module.exports = Octokit;


/***/ }),

/***/ 5196:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

module.exports = Octokit;

const { request } = __nccwpck_require__(6255);
const Hook = __nccwpck_require__(2732);

const parseClientOptions = __nccwpck_require__(8300);

function Octokit(plugins, options) {
  options = options || {};
  const hook = new Hook.Collection();
  const log = Object.assign(
    {
      debug: () => {},
      info: () => {},
      warn: console.warn,
      error: console.error
    },
    options && options.log
  );
  const api = {
    hook,
    log,
    request: request.defaults(parseClientOptions(options, log, hook))
  };

  plugins.forEach(pluginFunction => pluginFunction(api, options));

  return api;
}


/***/ }),

/***/ 3649:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

const factory = __nccwpck_require__(8566);

module.exports = factory();


/***/ }),

/***/ 8566:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

module.exports = factory;

const Octokit = __nccwpck_require__(5196);
const registerPlugin = __nccwpck_require__(2795);

function factory(plugins) {
  const Api = Octokit.bind(null, plugins || []);
  Api.plugin = registerPlugin.bind(null, plugins || []);
  return Api;
}


/***/ }),

/***/ 8300:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

module.exports = parseOptions;

const { Deprecation } = __nccwpck_require__(4150);
const { getUserAgent } = __nccwpck_require__(2887);
const once = __nccwpck_require__(5560);

const pkg = __nccwpck_require__(9796);

const deprecateOptionsTimeout = once((log, deprecation) =>
  log.warn(deprecation)
);
const deprecateOptionsAgent = once((log, deprecation) => log.warn(deprecation));
const deprecateOptionsHeaders = once((log, deprecation) =>
  log.warn(deprecation)
);

function parseOptions(options, log, hook) {
  if (options.headers) {
    options.headers = Object.keys(options.headers).reduce((newObj, key) => {
      newObj[key.toLowerCase()] = options.headers[key];
      return newObj;
    }, {});
  }

  const clientDefaults = {
    headers: options.headers || {},
    request: options.request || {},
    mediaType: {
      previews: [],
      format: ""
    }
  };

  if (options.baseUrl) {
    clientDefaults.baseUrl = options.baseUrl;
  }

  if (options.userAgent) {
    clientDefaults.headers["user-agent"] = options.userAgent;
  }

  if (options.previews) {
    clientDefaults.mediaType.previews = options.previews;
  }

  if (options.timeZone) {
    clientDefaults.headers["time-zone"] = options.timeZone;
  }

  if (options.timeout) {
    deprecateOptionsTimeout(
      log,
      new Deprecation(
        "[@octokit/rest] new Octokit({timeout}) is deprecated. Use {request: {timeout}} instead. See https://github.com/octokit/request.js#request"
      )
    );
    clientDefaults.request.timeout = options.timeout;
  }

  if (options.agent) {
    deprecateOptionsAgent(
      log,
      new Deprecation(
        "[@octokit/rest] new Octokit({agent}) is deprecated. Use {request: {agent}} instead. See https://github.com/octokit/request.js#request"
      )
    );
    clientDefaults.request.agent = options.agent;
  }

  if (options.headers) {
    deprecateOptionsHeaders(
      log,
      new Deprecation(
        "[@octokit/rest] new Octokit({headers}) is deprecated. Use {userAgent, previews} instead. See https://github.com/octokit/request.js#request"
      )
    );
  }

  const userAgentOption = clientDefaults.headers["user-agent"];
  const defaultUserAgent = `octokit.js/${pkg.version} ${getUserAgent()}`;

  clientDefaults.headers["user-agent"] = [userAgentOption, defaultUserAgent]
    .filter(Boolean)
    .join(" ");

  clientDefaults.request.hook = hook.bind(null, "request");

  return clientDefaults;
}


/***/ }),

/***/ 2795:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

module.exports = registerPlugin;

const factory = __nccwpck_require__(8566);

function registerPlugin(plugins, pluginFunction) {
  return factory(
    plugins.includes(pluginFunction) ? plugins : plugins.concat(pluginFunction)
  );
}


/***/ }),

/***/ 9128:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var deprecation = __nccwpck_require__(4150);
var once = _interopDefault(__nccwpck_require__(5560));

const logOnce = once(deprecation => console.warn(deprecation));
/**
 * Error with extra properties to help with debugging
 */

class RequestError extends Error {
  constructor(message, statusCode, options) {
    super(message); // Maintains proper stack trace (only available on V8)

    /* istanbul ignore next */

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }

    this.name = "HttpError";
    this.status = statusCode;
    Object.defineProperty(this, "code", {
      get() {
        logOnce(new deprecation.Deprecation("[@octokit/request-error] `error.code` is deprecated, use `error.status`."));
        return statusCode;
      }

    });
    this.headers = options.headers || {}; // redact request credentials without mutating original request options

    const requestCopy = Object.assign({}, options.request);

    if (options.request.headers.authorization) {
      requestCopy.headers = Object.assign({}, options.request.headers, {
        authorization: options.request.headers.authorization.replace(/ .*$/, " [REDACTED]")
      });
    }

    requestCopy.url = requestCopy.url // client_id & client_secret can be passed as URL query parameters to increase rate limit
    // see https://developer.github.com/v3/#increasing-the-unauthenticated-rate-limit-for-oauth-applications
    .replace(/\bclient_secret=\w+/g, "client_secret=[REDACTED]") // OAuth tokens can be passed as URL query parameters, although it is not recommended
    // see https://developer.github.com/v3/#oauth2-token-sent-in-a-header
    .replace(/\baccess_token=\w+/g, "access_token=[REDACTED]");
    this.request = requestCopy;
  }

}

exports.RequestError = RequestError;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 2887:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var osName = _interopDefault(__nccwpck_require__(5254));

function getUserAgent() {
  try {
    return `Node.js/${process.version.substr(1)} (${osName()}; ${process.arch})`;
  } catch (error) {
    if (/wmic os get Caption/.test(error.message)) {
      return "Windows <version undetectable>";
    }

    throw error;
  }
}

exports.getUserAgent = getUserAgent;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 833:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

module.exports = authenticate;

const { Deprecation } = __nccwpck_require__(4150);
const once = __nccwpck_require__(5560);

const deprecateAuthenticate = once((log, deprecation) => log.warn(deprecation));

function authenticate(state, options) {
  deprecateAuthenticate(
    state.octokit.log,
    new Deprecation(
      '[@octokit/rest] octokit.authenticate() is deprecated. Use "auth" constructor option instead.'
    )
  );

  if (!options) {
    state.auth = false;
    return;
  }

  switch (options.type) {
    case "basic":
      if (!options.username || !options.password) {
        throw new Error(
          "Basic authentication requires both a username and password to be set"
        );
      }
      break;

    case "oauth":
      if (!options.token && !(options.key && options.secret)) {
        throw new Error(
          "OAuth2 authentication requires a token or key & secret to be set"
        );
      }
      break;

    case "token":
    case "app":
      if (!options.token) {
        throw new Error("Token authentication requires a token to be set");
      }
      break;

    default:
      throw new Error(
        "Invalid authentication type, must be 'basic', 'oauth', 'token' or 'app'"
      );
  }

  state.auth = options;
}


/***/ }),

/***/ 1775:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

module.exports = authenticationBeforeRequest;

const btoa = __nccwpck_require__(9516);
const uniq = __nccwpck_require__(8620);

function authenticationBeforeRequest(state, options) {
  if (!state.auth.type) {
    return;
  }

  if (state.auth.type === "basic") {
    const hash = btoa(`${state.auth.username}:${state.auth.password}`);
    options.headers.authorization = `Basic ${hash}`;
    return;
  }

  if (state.auth.type === "token") {
    options.headers.authorization = `token ${state.auth.token}`;
    return;
  }

  if (state.auth.type === "app") {
    options.headers.authorization = `Bearer ${state.auth.token}`;
    const acceptHeaders = options.headers.accept
      .split(",")
      .concat("application/vnd.github.machine-man-preview+json");
    options.headers.accept = uniq(acceptHeaders)
      .filter(Boolean)
      .join(",");
    return;
  }

  options.url += options.url.indexOf("?") === -1 ? "?" : "&";

  if (state.auth.token) {
    options.url += `access_token=${encodeURIComponent(state.auth.token)}`;
    return;
  }

  const key = encodeURIComponent(state.auth.key);
  const secret = encodeURIComponent(state.auth.secret);
  options.url += `client_id=${key}&client_secret=${secret}`;
}


/***/ }),

/***/ 8078:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

module.exports = authenticationPlugin;

const { Deprecation } = __nccwpck_require__(4150);
const once = __nccwpck_require__(5560);

const deprecateAuthenticate = once((log, deprecation) => log.warn(deprecation));

const authenticate = __nccwpck_require__(833);
const beforeRequest = __nccwpck_require__(1775);
const requestError = __nccwpck_require__(6748);

function authenticationPlugin(octokit, options) {
  if (options.auth) {
    octokit.authenticate = () => {
      deprecateAuthenticate(
        octokit.log,
        new Deprecation(
          '[@octokit/rest] octokit.authenticate() is deprecated and has no effect when "auth" option is set on Octokit constructor'
        )
      );
    };
    return;
  }
  const state = {
    octokit,
    auth: false
  };
  octokit.authenticate = authenticate.bind(null, state);
  octokit.hook.before("request", beforeRequest.bind(null, state));
  octokit.hook.error("request", requestError.bind(null, state));
}


/***/ }),

/***/ 6748:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

module.exports = authenticationRequestError;

const { RequestError } = __nccwpck_require__(9128);

function authenticationRequestError(state, error, options) {
  /* istanbul ignore next */
  if (!error.headers) throw error;

  const otpRequired = /required/.test(error.headers["x-github-otp"] || "");
  // handle "2FA required" error only
  if (error.status !== 401 || !otpRequired) {
    throw error;
  }

  if (
    error.status === 401 &&
    otpRequired &&
    error.request &&
    error.request.headers["x-github-otp"]
  ) {
    throw new RequestError(
      "Invalid one-time password for two-factor authentication",
      401,
      {
        headers: error.headers,
        request: options
      }
    );
  }

  if (typeof state.auth.on2fa !== "function") {
    throw new RequestError(
      "2FA required, but options.on2fa is not a function. See https://github.com/octokit/rest.js#authentication",
      401,
      {
        headers: error.headers,
        request: options
      }
    );
  }

  return Promise.resolve()
    .then(() => {
      return state.auth.on2fa();
    })
    .then(oneTimePassword => {
      const newOptions = Object.assign(options, {
        headers: Object.assign(
          { "x-github-otp": oneTimePassword },
          options.headers
        )
      });
      return state.octokit.request(newOptions);
    });
}


/***/ }),

/***/ 4813:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

module.exports = authenticationBeforeRequest;

const btoa = __nccwpck_require__(9516);

const withAuthorizationPrefix = __nccwpck_require__(7287);

function authenticationBeforeRequest(state, options) {
  if (typeof state.auth === "string") {
    options.headers.authorization = withAuthorizationPrefix(state.auth);
    return;
  }

  if (state.auth.username) {
    const hash = btoa(`${state.auth.username}:${state.auth.password}`);
    options.headers.authorization = `Basic ${hash}`;
    if (state.otp) {
      options.headers["x-github-otp"] = state.otp;
    }
    return;
  }

  if (state.auth.clientId) {
    // There is a special case for OAuth applications, when `clientId` and `clientSecret` is passed as
    // Basic Authorization instead of query parameters. The only routes where that applies share the same
    // URL though: `/applications/:client_id/tokens/:access_token`.
    //
    //  1. [Check an authorization](https://developer.github.com/v3/oauth_authorizations/#check-an-authorization)
    //  2. [Reset an authorization](https://developer.github.com/v3/oauth_authorizations/#reset-an-authorization)
    //  3. [Revoke an authorization for an application](https://developer.github.com/v3/oauth_authorizations/#revoke-an-authorization-for-an-application)
    //
    // We identify by checking the URL. It must merge both "/applications/:client_id/tokens/:access_token"
    // as well as "/applications/123/tokens/token456"
    if (/\/applications\/:?[\w_]+\/tokens\/:?[\w_]+($|\?)/.test(options.url)) {
      const hash = btoa(`${state.auth.clientId}:${state.auth.clientSecret}`);
      options.headers.authorization = `Basic ${hash}`;
      return;
    }

    options.url += options.url.indexOf("?") === -1 ? "?" : "&";
    options.url += `client_id=${state.auth.clientId}&client_secret=${state.auth.clientSecret}`;
    return;
  }

  return Promise.resolve()

    .then(() => {
      return state.auth();
    })

    .then(authorization => {
      options.headers.authorization = withAuthorizationPrefix(authorization);
    });
}


/***/ }),

/***/ 4964:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

module.exports = authenticationPlugin;

const { createTokenAuth } = __nccwpck_require__(7864);
const { Deprecation } = __nccwpck_require__(4150);
const once = __nccwpck_require__(5560);

const beforeRequest = __nccwpck_require__(4813);
const requestError = __nccwpck_require__(9686);
const validate = __nccwpck_require__(5508);
const withAuthorizationPrefix = __nccwpck_require__(7287);

const deprecateAuthBasic = once((log, deprecation) => log.warn(deprecation));
const deprecateAuthObject = once((log, deprecation) => log.warn(deprecation));

function authenticationPlugin(octokit, options) {
  // If `options.authStrategy` is set then use it and pass in `options.auth`
  if (options.authStrategy) {
    const auth = options.authStrategy(options.auth);
    octokit.hook.wrap("request", auth.hook);
    octokit.auth = auth;
    return;
  }

  // If neither `options.authStrategy` nor `options.auth` are set, the `octokit` instance
  // is unauthenticated. The `octokit.auth()` method is a no-op and no request hook is registred.
  if (!options.auth) {
    octokit.auth = () =>
      Promise.resolve({
        type: "unauthenticated"
      });
    return;
  }

  const isBasicAuthString =
    typeof options.auth === "string" &&
    /^basic/.test(withAuthorizationPrefix(options.auth));

  // If only `options.auth` is set to a string, use the default token authentication strategy.
  if (typeof options.auth === "string" && !isBasicAuthString) {
    const auth = createTokenAuth(options.auth);
    octokit.hook.wrap("request", auth.hook);
    octokit.auth = auth;
    return;
  }

  // Otherwise log a deprecation message
  const [deprecationMethod, deprecationMessapge] = isBasicAuthString
    ? [
        deprecateAuthBasic,
        'Setting the "new Octokit({ auth })" option to a Basic Auth string is deprecated. Use https://github.com/octokit/auth-basic.js instead. See (https://octokit.github.io/rest.js/#authentication)'
      ]
    : [
        deprecateAuthObject,
        'Setting the "new Octokit({ auth })" option to an object without also setting the "authStrategy" option is deprecated and will be removed in v17. See (https://octokit.github.io/rest.js/#authentication)'
      ];
  deprecationMethod(
    octokit.log,
    new Deprecation("[@octokit/rest] " + deprecationMessapge)
  );

  octokit.auth = () =>
    Promise.resolve({
      type: "deprecated",
      message: deprecationMessapge
    });

  validate(options.auth);

  const state = {
    octokit,
    auth: options.auth
  };

  octokit.hook.before("request", beforeRequest.bind(null, state));
  octokit.hook.error("request", requestError.bind(null, state));
}


/***/ }),

/***/ 9686:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

module.exports = authenticationRequestError;

const { RequestError } = __nccwpck_require__(9128);

function authenticationRequestError(state, error, options) {
  if (!error.headers) throw error;

  const otpRequired = /required/.test(error.headers["x-github-otp"] || "");
  // handle "2FA required" error only
  if (error.status !== 401 || !otpRequired) {
    throw error;
  }

  if (
    error.status === 401 &&
    otpRequired &&
    error.request &&
    error.request.headers["x-github-otp"]
  ) {
    if (state.otp) {
      delete state.otp; // no longer valid, request again
    } else {
      throw new RequestError(
        "Invalid one-time password for two-factor authentication",
        401,
        {
          headers: error.headers,
          request: options
        }
      );
    }
  }

  if (typeof state.auth.on2fa !== "function") {
    throw new RequestError(
      "2FA required, but options.on2fa is not a function. See https://github.com/octokit/rest.js#authentication",
      401,
      {
        headers: error.headers,
        request: options
      }
    );
  }

  return Promise.resolve()
    .then(() => {
      return state.auth.on2fa();
    })
    .then(oneTimePassword => {
      const newOptions = Object.assign(options, {
        headers: Object.assign(options.headers, {
          "x-github-otp": oneTimePassword
        })
      });
      return state.octokit.request(newOptions).then(response => {
        // If OTP still valid, then persist it for following requests
        state.otp = oneTimePassword;
        return response;
      });
    });
}


/***/ }),

/***/ 5508:
/***/ ((module) => {

module.exports = validateAuth;

function validateAuth(auth) {
  if (typeof auth === "string") {
    return;
  }

  if (typeof auth === "function") {
    return;
  }

  if (auth.username && auth.password) {
    return;
  }

  if (auth.clientId && auth.clientSecret) {
    return;
  }

  throw new Error(`Invalid "auth" option: ${JSON.stringify(auth)}`);
}


/***/ }),

/***/ 7287:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

module.exports = withAuthorizationPrefix;

const atob = __nccwpck_require__(28);

const REGEX_IS_BASIC_AUTH = /^[\w-]+:/;

function withAuthorizationPrefix(authorization) {
  if (/^(basic|bearer|token) /i.test(authorization)) {
    return authorization;
  }

  try {
    if (REGEX_IS_BASIC_AUTH.test(atob(authorization))) {
      return `basic ${authorization}`;
    }
  } catch (error) {}

  if (authorization.split(/\./).length === 3) {
    return `bearer ${authorization}`;
  }

  return `token ${authorization}`;
}


/***/ }),

/***/ 5112:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

module.exports = paginatePlugin;

const { paginateRest } = __nccwpck_require__(8082);

function paginatePlugin(octokit) {
  Object.assign(octokit, paginateRest(octokit));
}


/***/ }),

/***/ 9362:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

module.exports = octokitValidate;

const validate = __nccwpck_require__(2614);

function octokitValidate(octokit) {
  octokit.hook.before("request", validate.bind(null, octokit));
}


/***/ }),

/***/ 2614:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


module.exports = validate;

const { RequestError } = __nccwpck_require__(9128);
const get = __nccwpck_require__(615);
const set = __nccwpck_require__(8203);

function validate(octokit, options) {
  if (!options.request.validate) {
    return;
  }
  const { validate: params } = options.request;

  Object.keys(params).forEach(parameterName => {
    const parameter = get(params, parameterName);

    const expectedType = parameter.type;
    let parentParameterName;
    let parentValue;
    let parentParamIsPresent = true;
    let parentParameterIsArray = false;

    if (/\./.test(parameterName)) {
      parentParameterName = parameterName.replace(/\.[^.]+$/, "");
      parentParameterIsArray = parentParameterName.slice(-2) === "[]";
      if (parentParameterIsArray) {
        parentParameterName = parentParameterName.slice(0, -2);
      }
      parentValue = get(options, parentParameterName);
      parentParamIsPresent =
        parentParameterName === "headers" ||
        (typeof parentValue === "object" && parentValue !== null);
    }

    const values = parentParameterIsArray
      ? (get(options, parentParameterName) || []).map(
          value => value[parameterName.split(/\./).pop()]
        )
      : [get(options, parameterName)];

    values.forEach((value, i) => {
      const valueIsPresent = typeof value !== "undefined";
      const valueIsNull = value === null;
      const currentParameterName = parentParameterIsArray
        ? parameterName.replace(/\[\]/, `[${i}]`)
        : parameterName;

      if (!parameter.required && !valueIsPresent) {
        return;
      }

      // if the parent parameter is of type object but allows null
      // then the child parameters can be ignored
      if (!parentParamIsPresent) {
        return;
      }

      if (parameter.allowNull && valueIsNull) {
        return;
      }

      if (!parameter.allowNull && valueIsNull) {
        throw new RequestError(
          `'${currentParameterName}' cannot be null`,
          400,
          {
            request: options
          }
        );
      }

      if (parameter.required && !valueIsPresent) {
        throw new RequestError(
          `Empty value for parameter '${currentParameterName}': ${JSON.stringify(
            value
          )}`,
          400,
          {
            request: options
          }
        );
      }

      // parse to integer before checking for enum
      // so that string "1" will match enum with number 1
      if (expectedType === "integer") {
        const unparsedValue = value;
        value = parseInt(value, 10);
        if (isNaN(value)) {
          throw new RequestError(
            `Invalid value for parameter '${currentParameterName}': ${JSON.stringify(
              unparsedValue
            )} is NaN`,
            400,
            {
              request: options
            }
          );
        }
      }

      if (parameter.enum && parameter.enum.indexOf(String(value)) === -1) {
        throw new RequestError(
          `Invalid value for parameter '${currentParameterName}': ${JSON.stringify(
            value
          )}`,
          400,
          {
            request: options
          }
        );
      }

      if (parameter.validation) {
        const regex = new RegExp(parameter.validation);
        if (!regex.test(value)) {
          throw new RequestError(
            `Invalid value for parameter '${currentParameterName}': ${JSON.stringify(
              value
            )}`,
            400,
            {
              request: options
            }
          );
        }
      }

      if (expectedType === "object" && typeof value === "string") {
        try {
          value = JSON.parse(value);
        } catch (exception) {
          throw new RequestError(
            `JSON parse error of value for parameter '${currentParameterName}': ${JSON.stringify(
              value
            )}`,
            400,
            {
              request: options
            }
          );
        }
      }

      set(options, parameter.mapTo || currentParameterName, value);
    });
  });

  return options;
}


/***/ }),

/***/ 28:
/***/ ((module) => {

module.exports = function atob(str) {
  return Buffer.from(str, 'base64').toString('binary')
}


/***/ }),

/***/ 2732:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var register = __nccwpck_require__(1063)
var addHook = __nccwpck_require__(2027)
var removeHook = __nccwpck_require__(9934)

// bind with array of arguments: https://stackoverflow.com/a/21792913
var bind = Function.bind
var bindable = bind.bind(bind)

function bindApi (hook, state, name) {
  var removeHookRef = bindable(removeHook, null).apply(null, name ? [state, name] : [state])
  hook.api = { remove: removeHookRef }
  hook.remove = removeHookRef

  ;['before', 'error', 'after', 'wrap'].forEach(function (kind) {
    var args = name ? [state, kind, name] : [state, kind]
    hook[kind] = hook.api[kind] = bindable(addHook, null).apply(null, args)
  })
}

function HookSingular () {
  var singularHookName = 'h'
  var singularHookState = {
    registry: {}
  }
  var singularHook = register.bind(null, singularHookState, singularHookName)
  bindApi(singularHook, singularHookState, singularHookName)
  return singularHook
}

function HookCollection () {
  var state = {
    registry: {}
  }

  var hook = register.bind(null, state)
  bindApi(hook, state)

  return hook
}

var collectionHookDeprecationMessageDisplayed = false
function Hook () {
  if (!collectionHookDeprecationMessageDisplayed) {
    console.warn('[before-after-hook]: "Hook()" repurposing warning, use "Hook.Collection()". Read more: https://git.io/upgrade-before-after-hook-to-1.4')
    collectionHookDeprecationMessageDisplayed = true
  }
  return HookCollection()
}

Hook.Singular = HookSingular.bind()
Hook.Collection = HookCollection.bind()

module.exports = Hook
// expose constructors as a named property for TypeScript
module.exports.Hook = Hook
module.exports.Singular = Hook.Singular
module.exports.Collection = Hook.Collection


/***/ }),

/***/ 2027:
/***/ ((module) => {

module.exports = addHook

function addHook (state, kind, name, hook) {
  var orig = hook
  if (!state.registry[name]) {
    state.registry[name] = []
  }

  if (kind === 'before') {
    hook = function (method, options) {
      return Promise.resolve()
        .then(orig.bind(null, options))
        .then(method.bind(null, options))
    }
  }

  if (kind === 'after') {
    hook = function (method, options) {
      var result
      return Promise.resolve()
        .then(method.bind(null, options))
        .then(function (result_) {
          result = result_
          return orig(result, options)
        })
        .then(function () {
          return result
        })
    }
  }

  if (kind === 'error') {
    hook = function (method, options) {
      return Promise.resolve()
        .then(method.bind(null, options))
        .catch(function (error) {
          return orig(error, options)
        })
    }
  }

  state.registry[name].push({
    hook: hook,
    orig: orig
  })
}


/***/ }),

/***/ 1063:
/***/ ((module) => {

module.exports = register

function register (state, name, method, options) {
  if (typeof method !== 'function') {
    throw new Error('method for before hook must be a function')
  }

  if (!options) {
    options = {}
  }

  if (Array.isArray(name)) {
    return name.reverse().reduce(function (callback, name) {
      return register.bind(null, state, name, callback, options)
    }, method)()
  }

  return Promise.resolve()
    .then(function () {
      if (!state.registry[name]) {
        return method(options)
      }

      return (state.registry[name]).reduce(function (method, registered) {
        return registered.hook.bind(null, method, options)
      }, method)()
    })
}


/***/ }),

/***/ 9934:
/***/ ((module) => {

module.exports = removeHook

function removeHook (state, name, method) {
  if (!state.registry[name]) {
    return
  }

  var index = state.registry[name]
    .map(function (registered) { return registered.orig })
    .indexOf(method)

  if (index === -1) {
    return
  }

  state.registry[name].splice(index, 1)
}


/***/ }),

/***/ 9516:
/***/ ((module) => {

module.exports = function btoa(str) {
  return new Buffer(str).toString('base64')
}


/***/ }),

/***/ 4150:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

class Deprecation extends Error {
  constructor(message) {
    super(message); // Maintains proper stack trace (only available on V8)

    /* istanbul ignore next */

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }

    this.name = 'Deprecation';
  }

}

exports.Deprecation = Deprecation;


/***/ }),

/***/ 1424:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var once = __nccwpck_require__(5560);

var noop = function() {};

var isRequest = function(stream) {
	return stream.setHeader && typeof stream.abort === 'function';
};

var isChildProcess = function(stream) {
	return stream.stdio && Array.isArray(stream.stdio) && stream.stdio.length === 3
};

var eos = function(stream, opts, callback) {
	if (typeof opts === 'function') return eos(stream, null, opts);
	if (!opts) opts = {};

	callback = once(callback || noop);

	var ws = stream._writableState;
	var rs = stream._readableState;
	var readable = opts.readable || (opts.readable !== false && stream.readable);
	var writable = opts.writable || (opts.writable !== false && stream.writable);
	var cancelled = false;

	var onlegacyfinish = function() {
		if (!stream.writable) onfinish();
	};

	var onfinish = function() {
		writable = false;
		if (!readable) callback.call(stream);
	};

	var onend = function() {
		readable = false;
		if (!writable) callback.call(stream);
	};

	var onexit = function(exitCode) {
		callback.call(stream, exitCode ? new Error('exited with error code: ' + exitCode) : null);
	};

	var onerror = function(err) {
		callback.call(stream, err);
	};

	var onclose = function() {
		process.nextTick(onclosenexttick);
	};

	var onclosenexttick = function() {
		if (cancelled) return;
		if (readable && !(rs && (rs.ended && !rs.destroyed))) return callback.call(stream, new Error('premature close'));
		if (writable && !(ws && (ws.ended && !ws.destroyed))) return callback.call(stream, new Error('premature close'));
	};

	var onrequest = function() {
		stream.req.on('finish', onfinish);
	};

	if (isRequest(stream)) {
		stream.on('complete', onfinish);
		stream.on('abort', onclose);
		if (stream.req) onrequest();
		else stream.on('request', onrequest);
	} else if (writable && !ws) { // legacy streams
		stream.on('end', onlegacyfinish);
		stream.on('close', onlegacyfinish);
	}

	if (isChildProcess(stream)) stream.on('exit', onexit);

	stream.on('end', onend);
	stream.on('finish', onfinish);
	if (opts.error !== false) stream.on('error', onerror);
	stream.on('close', onclose);

	return function() {
		cancelled = true;
		stream.removeListener('complete', onfinish);
		stream.removeListener('abort', onclose);
		stream.removeListener('request', onrequest);
		if (stream.req) stream.req.removeListener('finish', onfinish);
		stream.removeListener('end', onlegacyfinish);
		stream.removeListener('close', onlegacyfinish);
		stream.removeListener('finish', onfinish);
		stream.removeListener('exit', onexit);
		stream.removeListener('end', onend);
		stream.removeListener('error', onerror);
		stream.removeListener('close', onclose);
	};
};

module.exports = eos;


/***/ }),

/***/ 8204:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";

const path = __nccwpck_require__(6928);
const childProcess = __nccwpck_require__(5317);
const crossSpawn = __nccwpck_require__(5046);
const stripEof = __nccwpck_require__(7017);
const npmRunPath = __nccwpck_require__(6883);
const isStream = __nccwpck_require__(6543);
const _getStream = __nccwpck_require__(6771);
const pFinally = __nccwpck_require__(2766);
const onExit = __nccwpck_require__(1415);
const errname = __nccwpck_require__(6500);
const stdio = __nccwpck_require__(5109);

const TEN_MEGABYTES = 1000 * 1000 * 10;

function handleArgs(cmd, args, opts) {
	let parsed;

	opts = Object.assign({
		extendEnv: true,
		env: {}
	}, opts);

	if (opts.extendEnv) {
		opts.env = Object.assign({}, process.env, opts.env);
	}

	if (opts.__winShell === true) {
		delete opts.__winShell;
		parsed = {
			command: cmd,
			args,
			options: opts,
			file: cmd,
			original: {
				cmd,
				args
			}
		};
	} else {
		parsed = crossSpawn._parse(cmd, args, opts);
	}

	opts = Object.assign({
		maxBuffer: TEN_MEGABYTES,
		buffer: true,
		stripEof: true,
		preferLocal: true,
		localDir: parsed.options.cwd || process.cwd(),
		encoding: 'utf8',
		reject: true,
		cleanup: true
	}, parsed.options);

	opts.stdio = stdio(opts);

	if (opts.preferLocal) {
		opts.env = npmRunPath.env(Object.assign({}, opts, {cwd: opts.localDir}));
	}

	if (opts.detached) {
		// #115
		opts.cleanup = false;
	}

	if (process.platform === 'win32' && path.basename(parsed.command) === 'cmd.exe') {
		// #116
		parsed.args.unshift('/q');
	}

	return {
		cmd: parsed.command,
		args: parsed.args,
		opts,
		parsed
	};
}

function handleInput(spawned, input) {
	if (input === null || input === undefined) {
		return;
	}

	if (isStream(input)) {
		input.pipe(spawned.stdin);
	} else {
		spawned.stdin.end(input);
	}
}

function handleOutput(opts, val) {
	if (val && opts.stripEof) {
		val = stripEof(val);
	}

	return val;
}

function handleShell(fn, cmd, opts) {
	let file = '/bin/sh';
	let args = ['-c', cmd];

	opts = Object.assign({}, opts);

	if (process.platform === 'win32') {
		opts.__winShell = true;
		file = process.env.comspec || 'cmd.exe';
		args = ['/s', '/c', `"${cmd}"`];
		opts.windowsVerbatimArguments = true;
	}

	if (opts.shell) {
		file = opts.shell;
		delete opts.shell;
	}

	return fn(file, args, opts);
}

function getStream(process, stream, {encoding, buffer, maxBuffer}) {
	if (!process[stream]) {
		return null;
	}

	let ret;

	if (!buffer) {
		// TODO: Use `ret = util.promisify(stream.finished)(process[stream]);` when targeting Node.js 10
		ret = new Promise((resolve, reject) => {
			process[stream]
				.once('end', resolve)
				.once('error', reject);
		});
	} else if (encoding) {
		ret = _getStream(process[stream], {
			encoding,
			maxBuffer
		});
	} else {
		ret = _getStream.buffer(process[stream], {maxBuffer});
	}

	return ret.catch(err => {
		err.stream = stream;
		err.message = `${stream} ${err.message}`;
		throw err;
	});
}

function makeError(result, options) {
	const {stdout, stderr} = result;

	let err = result.error;
	const {code, signal} = result;

	const {parsed, joinedCmd} = options;
	const timedOut = options.timedOut || false;

	if (!err) {
		let output = '';

		if (Array.isArray(parsed.opts.stdio)) {
			if (parsed.opts.stdio[2] !== 'inherit') {
				output += output.length > 0 ? stderr : `\n${stderr}`;
			}

			if (parsed.opts.stdio[1] !== 'inherit') {
				output += `\n${stdout}`;
			}
		} else if (parsed.opts.stdio !== 'inherit') {
			output = `\n${stderr}${stdout}`;
		}

		err = new Error(`Command failed: ${joinedCmd}${output}`);
		err.code = code < 0 ? errname(code) : code;
	}

	err.stdout = stdout;
	err.stderr = stderr;
	err.failed = true;
	err.signal = signal || null;
	err.cmd = joinedCmd;
	err.timedOut = timedOut;

	return err;
}

function joinCmd(cmd, args) {
	let joinedCmd = cmd;

	if (Array.isArray(args) && args.length > 0) {
		joinedCmd += ' ' + args.join(' ');
	}

	return joinedCmd;
}

module.exports = (cmd, args, opts) => {
	const parsed = handleArgs(cmd, args, opts);
	const {encoding, buffer, maxBuffer} = parsed.opts;
	const joinedCmd = joinCmd(cmd, args);

	let spawned;
	try {
		spawned = childProcess.spawn(parsed.cmd, parsed.args, parsed.opts);
	} catch (err) {
		return Promise.reject(err);
	}

	let removeExitHandler;
	if (parsed.opts.cleanup) {
		removeExitHandler = onExit(() => {
			spawned.kill();
		});
	}

	let timeoutId = null;
	let timedOut = false;

	const cleanup = () => {
		if (timeoutId) {
			clearTimeout(timeoutId);
			timeoutId = null;
		}

		if (removeExitHandler) {
			removeExitHandler();
		}
	};

	if (parsed.opts.timeout > 0) {
		timeoutId = setTimeout(() => {
			timeoutId = null;
			timedOut = true;
			spawned.kill(parsed.opts.killSignal);
		}, parsed.opts.timeout);
	}

	const processDone = new Promise(resolve => {
		spawned.on('exit', (code, signal) => {
			cleanup();
			resolve({code, signal});
		});

		spawned.on('error', err => {
			cleanup();
			resolve({error: err});
		});

		if (spawned.stdin) {
			spawned.stdin.on('error', err => {
				cleanup();
				resolve({error: err});
			});
		}
	});

	function destroy() {
		if (spawned.stdout) {
			spawned.stdout.destroy();
		}

		if (spawned.stderr) {
			spawned.stderr.destroy();
		}
	}

	const handlePromise = () => pFinally(Promise.all([
		processDone,
		getStream(spawned, 'stdout', {encoding, buffer, maxBuffer}),
		getStream(spawned, 'stderr', {encoding, buffer, maxBuffer})
	]).then(arr => {
		const result = arr[0];
		result.stdout = arr[1];
		result.stderr = arr[2];

		if (result.error || result.code !== 0 || result.signal !== null) {
			const err = makeError(result, {
				joinedCmd,
				parsed,
				timedOut
			});

			// TODO: missing some timeout logic for killed
			// https://github.com/nodejs/node/blob/master/lib/child_process.js#L203
			// err.killed = spawned.killed || killed;
			err.killed = err.killed || spawned.killed;

			if (!parsed.opts.reject) {
				return err;
			}

			throw err;
		}

		return {
			stdout: handleOutput(parsed.opts, result.stdout),
			stderr: handleOutput(parsed.opts, result.stderr),
			code: 0,
			failed: false,
			killed: false,
			signal: null,
			cmd: joinedCmd,
			timedOut: false
		};
	}), destroy);

	crossSpawn._enoent.hookChildProcess(spawned, parsed.parsed);

	handleInput(spawned, parsed.opts.input);

	spawned.then = (onfulfilled, onrejected) => handlePromise().then(onfulfilled, onrejected);
	spawned.catch = onrejected => handlePromise().catch(onrejected);

	return spawned;
};

// TODO: set `stderr: 'ignore'` when that option is implemented
module.exports.stdout = (...args) => module.exports(...args).then(x => x.stdout);

// TODO: set `stdout: 'ignore'` when that option is implemented
module.exports.stderr = (...args) => module.exports(...args).then(x => x.stderr);

module.exports.shell = (cmd, opts) => handleShell(module.exports, cmd, opts);

module.exports.sync = (cmd, args, opts) => {
	const parsed = handleArgs(cmd, args, opts);
	const joinedCmd = joinCmd(cmd, args);

	if (isStream(parsed.opts.input)) {
		throw new TypeError('The `input` option cannot be a stream in sync mode');
	}

	const result = childProcess.spawnSync(parsed.cmd, parsed.args, parsed.opts);
	result.code = result.status;

	if (result.error || result.status !== 0 || result.signal !== null) {
		const err = makeError(result, {
			joinedCmd,
			parsed
		});

		if (!parsed.opts.reject) {
			return err;
		}

		throw err;
	}

	return {
		stdout: handleOutput(parsed.opts, result.stdout),
		stderr: handleOutput(parsed.opts, result.stderr),
		code: 0,
		failed: false,
		signal: null,
		cmd: joinedCmd,
		timedOut: false
	};
};

module.exports.shellSync = (cmd, opts) => handleShell(module.exports.sync, cmd, opts);


/***/ }),

/***/ 6500:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";

// Older verions of Node.js might not have `util.getSystemErrorName()`.
// In that case, fall back to a deprecated internal.
const util = __nccwpck_require__(9023);

let uv;

if (typeof util.getSystemErrorName === 'function') {
	module.exports = util.getSystemErrorName;
} else {
	try {
		uv = process.binding('uv');

		if (typeof uv.errname !== 'function') {
			throw new TypeError('uv.errname is not a function');
		}
	} catch (err) {
		console.error('execa/lib/errname: unable to establish process.binding(\'uv\')', err);
		uv = null;
	}

	module.exports = code => errname(uv, code);
}

// Used for testing the fallback behavior
module.exports.__test__ = errname;

function errname(uv, code) {
	if (uv) {
		return uv.errname(code);
	}

	if (!(code < 0)) {
		throw new Error('err >= 0');
	}

	return `Unknown system error ${code}`;
}



/***/ }),

/***/ 5109:
/***/ ((module) => {

"use strict";

const alias = ['stdin', 'stdout', 'stderr'];

const hasAlias = opts => alias.some(x => Boolean(opts[x]));

module.exports = opts => {
	if (!opts) {
		return null;
	}

	if (opts.stdio && hasAlias(opts)) {
		throw new Error(`It's not possible to provide \`stdio\` in combination with one of ${alias.map(x => `\`${x}\``).join(', ')}`);
	}

	if (typeof opts.stdio === 'string') {
		return opts.stdio;
	}

	const stdio = opts.stdio || [];

	if (!Array.isArray(stdio)) {
		throw new TypeError(`Expected \`stdio\` to be of type \`string\` or \`Array\`, got \`${typeof stdio}\``);
	}

	const result = [];
	const len = Math.max(stdio.length, alias.length);

	for (let i = 0; i < len; i++) {
		let value = null;

		if (stdio[i] !== undefined) {
			value = stdio[i];
		} else if (opts[alias[i]] !== undefined) {
			value = opts[alias[i]];
		}

		result[i] = value;
	}

	return result;
};


/***/ }),

/***/ 5046:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


const cp = __nccwpck_require__(5317);
const parse = __nccwpck_require__(1577);
const enoent = __nccwpck_require__(3001);

function spawn(command, args, options) {
    // Parse the arguments
    const parsed = parse(command, args, options);

    // Spawn the child process
    const spawned = cp.spawn(parsed.command, parsed.args, parsed.options);

    // Hook into child process "exit" event to emit an error if the command
    // does not exists, see: https://github.com/IndigoUnited/node-cross-spawn/issues/16
    enoent.hookChildProcess(spawned, parsed);

    return spawned;
}

function spawnSync(command, args, options) {
    // Parse the arguments
    const parsed = parse(command, args, options);

    // Spawn the child process
    const result = cp.spawnSync(parsed.command, parsed.args, parsed.options);

    // Analyze if the command does not exist, see: https://github.com/IndigoUnited/node-cross-spawn/issues/16
    result.error = result.error || enoent.verifyENOENTSync(result.status, parsed);

    return result;
}

module.exports = spawn;
module.exports.spawn = spawn;
module.exports.sync = spawnSync;

module.exports._parse = parse;
module.exports._enoent = enoent;


/***/ }),

/***/ 3001:
/***/ ((module) => {

"use strict";


const isWin = process.platform === 'win32';

function notFoundError(original, syscall) {
    return Object.assign(new Error(`${syscall} ${original.command} ENOENT`), {
        code: 'ENOENT',
        errno: 'ENOENT',
        syscall: `${syscall} ${original.command}`,
        path: original.command,
        spawnargs: original.args,
    });
}

function hookChildProcess(cp, parsed) {
    if (!isWin) {
        return;
    }

    const originalEmit = cp.emit;

    cp.emit = function (name, arg1) {
        // If emitting "exit" event and exit code is 1, we need to check if
        // the command exists and emit an "error" instead
        // See https://github.com/IndigoUnited/node-cross-spawn/issues/16
        if (name === 'exit') {
            const err = verifyENOENT(arg1, parsed, 'spawn');

            if (err) {
                return originalEmit.call(cp, 'error', err);
            }
        }

        return originalEmit.apply(cp, arguments); // eslint-disable-line prefer-rest-params
    };
}

function verifyENOENT(status, parsed) {
    if (isWin && status === 1 && !parsed.file) {
        return notFoundError(parsed.original, 'spawn');
    }

    return null;
}

function verifyENOENTSync(status, parsed) {
    if (isWin && status === 1 && !parsed.file) {
        return notFoundError(parsed.original, 'spawnSync');
    }

    return null;
}

module.exports = {
    hookChildProcess,
    verifyENOENT,
    verifyENOENTSync,
    notFoundError,
};


/***/ }),

/***/ 1577:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


const path = __nccwpck_require__(6928);
const niceTry = __nccwpck_require__(3048);
const resolveCommand = __nccwpck_require__(8542);
const escape = __nccwpck_require__(1120);
const readShebang = __nccwpck_require__(6179);
const semver = __nccwpck_require__(4306);

const isWin = process.platform === 'win32';
const isExecutableRegExp = /\.(?:com|exe)$/i;
const isCmdShimRegExp = /node_modules[\\/].bin[\\/][^\\/]+\.cmd$/i;

// `options.shell` is supported in Node ^4.8.0, ^5.7.0 and >= 6.0.0
const supportsShellOption = niceTry(() => semver.satisfies(process.version, '^4.8.0 || ^5.7.0 || >= 6.0.0', true)) || false;

function detectShebang(parsed) {
    parsed.file = resolveCommand(parsed);

    const shebang = parsed.file && readShebang(parsed.file);

    if (shebang) {
        parsed.args.unshift(parsed.file);
        parsed.command = shebang;

        return resolveCommand(parsed);
    }

    return parsed.file;
}

function parseNonShell(parsed) {
    if (!isWin) {
        return parsed;
    }

    // Detect & add support for shebangs
    const commandFile = detectShebang(parsed);

    // We don't need a shell if the command filename is an executable
    const needsShell = !isExecutableRegExp.test(commandFile);

    // If a shell is required, use cmd.exe and take care of escaping everything correctly
    // Note that `forceShell` is an hidden option used only in tests
    if (parsed.options.forceShell || needsShell) {
        // Need to double escape meta chars if the command is a cmd-shim located in `node_modules/.bin/`
        // The cmd-shim simply calls execute the package bin file with NodeJS, proxying any argument
        // Because the escape of metachars with ^ gets interpreted when the cmd.exe is first called,
        // we need to double escape them
        const needsDoubleEscapeMetaChars = isCmdShimRegExp.test(commandFile);

        // Normalize posix paths into OS compatible paths (e.g.: foo/bar -> foo\bar)
        // This is necessary otherwise it will always fail with ENOENT in those cases
        parsed.command = path.normalize(parsed.command);

        // Escape command & arguments
        parsed.command = escape.command(parsed.command);
        parsed.args = parsed.args.map((arg) => escape.argument(arg, needsDoubleEscapeMetaChars));

        const shellCommand = [parsed.command].concat(parsed.args).join(' ');

        parsed.args = ['/d', '/s', '/c', `"${shellCommand}"`];
        parsed.command = process.env.comspec || 'cmd.exe';
        parsed.options.windowsVerbatimArguments = true; // Tell node's spawn that the arguments are already escaped
    }

    return parsed;
}

function parseShell(parsed) {
    // If node supports the shell option, there's no need to mimic its behavior
    if (supportsShellOption) {
        return parsed;
    }

    // Mimic node shell option
    // See https://github.com/nodejs/node/blob/b9f6a2dc059a1062776133f3d4fd848c4da7d150/lib/child_process.js#L335
    const shellCommand = [parsed.command].concat(parsed.args).join(' ');

    if (isWin) {
        parsed.command = typeof parsed.options.shell === 'string' ? parsed.options.shell : process.env.comspec || 'cmd.exe';
        parsed.args = ['/d', '/s', '/c', `"${shellCommand}"`];
        parsed.options.windowsVerbatimArguments = true; // Tell node's spawn that the arguments are already escaped
    } else {
        if (typeof parsed.options.shell === 'string') {
            parsed.command = parsed.options.shell;
        } else if (process.platform === 'android') {
            parsed.command = '/system/bin/sh';
        } else {
            parsed.command = '/bin/sh';
        }

        parsed.args = ['-c', shellCommand];
    }

    return parsed;
}

function parse(command, args, options) {
    // Normalize arguments, similar to nodejs
    if (args && !Array.isArray(args)) {
        options = args;
        args = null;
    }

    args = args ? args.slice(0) : []; // Clone array to avoid changing the original
    options = Object.assign({}, options); // Clone object to avoid changing the original

    // Build our parsed object
    const parsed = {
        command,
        args,
        options,
        file: undefined,
        original: {
            command,
            args,
        },
    };

    // Delegate further parsing to shell or non-shell
    return options.shell ? parseShell(parsed) : parseNonShell(parsed);
}

module.exports = parse;


/***/ }),

/***/ 1120:
/***/ ((module) => {

"use strict";


// See http://www.robvanderwoude.com/escapechars.php
const metaCharsRegExp = /([()\][%!^"`<>&|;, *?])/g;

function escapeCommand(arg) {
    // Escape meta chars
    arg = arg.replace(metaCharsRegExp, '^$1');

    return arg;
}

function escapeArgument(arg, doubleEscapeMetaChars) {
    // Convert to string
    arg = `${arg}`;

    // Algorithm below is based on https://qntm.org/cmd

    // Sequence of backslashes followed by a double quote:
    // double up all the backslashes and escape the double quote
    arg = arg.replace(/(\\*)"/g, '$1$1\\"');

    // Sequence of backslashes followed by the end of the string
    // (which will become a double quote later):
    // double up all the backslashes
    arg = arg.replace(/(\\*)$/, '$1$1');

    // All other backslashes occur literally

    // Quote the whole thing:
    arg = `"${arg}"`;

    // Escape meta chars
    arg = arg.replace(metaCharsRegExp, '^$1');

    // Double escape meta chars if necessary
    if (doubleEscapeMetaChars) {
        arg = arg.replace(metaCharsRegExp, '^$1');
    }

    return arg;
}

module.exports.command = escapeCommand;
module.exports.argument = escapeArgument;


/***/ }),

/***/ 6179:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


const fs = __nccwpck_require__(9896);
const shebangCommand = __nccwpck_require__(2956);

function readShebang(command) {
    // Read the first 150 bytes from the file
    const size = 150;
    let buffer;

    if (Buffer.alloc) {
        // Node.js v4.5+ / v5.10+
        buffer = Buffer.alloc(size);
    } else {
        // Old Node.js API
        buffer = new Buffer(size);
        buffer.fill(0); // zero-fill
    }

    let fd;

    try {
        fd = fs.openSync(command, 'r');
        fs.readSync(fd, buffer, 0, size, 0);
        fs.closeSync(fd);
    } catch (e) { /* Empty */ }

    // Attempt to extract shebang (null is returned if not a shebang)
    return shebangCommand(buffer.toString());
}

module.exports = readShebang;


/***/ }),

/***/ 8542:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


const path = __nccwpck_require__(6928);
const which = __nccwpck_require__(4204);
const pathKey = __nccwpck_require__(3909)();

function resolveCommandAttempt(parsed, withoutPathExt) {
    const cwd = process.cwd();
    const hasCustomCwd = parsed.options.cwd != null;

    // If a custom `cwd` was specified, we need to change the process cwd
    // because `which` will do stat calls but does not support a custom cwd
    if (hasCustomCwd) {
        try {
            process.chdir(parsed.options.cwd);
        } catch (err) {
            /* Empty */
        }
    }

    let resolved;

    try {
        resolved = which.sync(parsed.command, {
            path: (parsed.options.env || process.env)[pathKey],
            pathExt: withoutPathExt ? path.delimiter : undefined,
        });
    } catch (e) {
        /* Empty */
    } finally {
        process.chdir(cwd);
    }

    // If we successfully resolved, ensure that an absolute path is returned
    // Note that when a custom `cwd` was used, we need to resolve to an absolute path based on it
    if (resolved) {
        resolved = path.resolve(hasCustomCwd ? parsed.options.cwd : '', resolved);
    }

    return resolved;
}

function resolveCommand(parsed) {
    return resolveCommandAttempt(parsed) || resolveCommandAttempt(parsed, true);
}

module.exports = resolveCommand;


/***/ }),

/***/ 3909:
/***/ ((module) => {

"use strict";

module.exports = opts => {
	opts = opts || {};

	const env = opts.env || process.env;
	const platform = opts.platform || process.platform;

	if (platform !== 'win32') {
		return 'PATH';
	}

	return Object.keys(env).find(x => x.toUpperCase() === 'PATH') || 'Path';
};


/***/ }),

/***/ 4306:
/***/ ((module, exports) => {

exports = module.exports = SemVer

var debug
/* istanbul ignore next */
if (typeof process === 'object' &&
    process.env &&
    process.env.NODE_DEBUG &&
    /\bsemver\b/i.test(process.env.NODE_DEBUG)) {
  debug = function () {
    var args = Array.prototype.slice.call(arguments, 0)
    args.unshift('SEMVER')
    console.log.apply(console, args)
  }
} else {
  debug = function () {}
}

// Note: this is the semver.org version of the spec that it implements
// Not necessarily the package version of this code.
exports.SEMVER_SPEC_VERSION = '2.0.0'

var MAX_LENGTH = 256
var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER ||
  /* istanbul ignore next */ 9007199254740991

// Max safe segment length for coercion.
var MAX_SAFE_COMPONENT_LENGTH = 16

// The actual regexps go on exports.re
var re = exports.re = []
var src = exports.src = []
var R = 0

// The following Regular Expressions can be used for tokenizing,
// validating, and parsing SemVer version strings.

// ## Numeric Identifier
// A single `0`, or a non-zero digit followed by zero or more digits.

var NUMERICIDENTIFIER = R++
src[NUMERICIDENTIFIER] = '0|[1-9]\\d*'
var NUMERICIDENTIFIERLOOSE = R++
src[NUMERICIDENTIFIERLOOSE] = '[0-9]+'

// ## Non-numeric Identifier
// Zero or more digits, followed by a letter or hyphen, and then zero or
// more letters, digits, or hyphens.

var NONNUMERICIDENTIFIER = R++
src[NONNUMERICIDENTIFIER] = '\\d*[a-zA-Z-][a-zA-Z0-9-]*'

// ## Main Version
// Three dot-separated numeric identifiers.

var MAINVERSION = R++
src[MAINVERSION] = '(' + src[NUMERICIDENTIFIER] + ')\\.' +
                   '(' + src[NUMERICIDENTIFIER] + ')\\.' +
                   '(' + src[NUMERICIDENTIFIER] + ')'

var MAINVERSIONLOOSE = R++
src[MAINVERSIONLOOSE] = '(' + src[NUMERICIDENTIFIERLOOSE] + ')\\.' +
                        '(' + src[NUMERICIDENTIFIERLOOSE] + ')\\.' +
                        '(' + src[NUMERICIDENTIFIERLOOSE] + ')'

// ## Pre-release Version Identifier
// A numeric identifier, or a non-numeric identifier.

var PRERELEASEIDENTIFIER = R++
src[PRERELEASEIDENTIFIER] = '(?:' + src[NUMERICIDENTIFIER] +
                            '|' + src[NONNUMERICIDENTIFIER] + ')'

var PRERELEASEIDENTIFIERLOOSE = R++
src[PRERELEASEIDENTIFIERLOOSE] = '(?:' + src[NUMERICIDENTIFIERLOOSE] +
                                 '|' + src[NONNUMERICIDENTIFIER] + ')'

// ## Pre-release Version
// Hyphen, followed by one or more dot-separated pre-release version
// identifiers.

var PRERELEASE = R++
src[PRERELEASE] = '(?:-(' + src[PRERELEASEIDENTIFIER] +
                  '(?:\\.' + src[PRERELEASEIDENTIFIER] + ')*))'

var PRERELEASELOOSE = R++
src[PRERELEASELOOSE] = '(?:-?(' + src[PRERELEASEIDENTIFIERLOOSE] +
                       '(?:\\.' + src[PRERELEASEIDENTIFIERLOOSE] + ')*))'

// ## Build Metadata Identifier
// Any combination of digits, letters, or hyphens.

var BUILDIDENTIFIER = R++
src[BUILDIDENTIFIER] = '[0-9A-Za-z-]+'

// ## Build Metadata
// Plus sign, followed by one or more period-separated build metadata
// identifiers.

var BUILD = R++
src[BUILD] = '(?:\\+(' + src[BUILDIDENTIFIER] +
             '(?:\\.' + src[BUILDIDENTIFIER] + ')*))'

// ## Full Version String
// A main version, followed optionally by a pre-release version and
// build metadata.

// Note that the only major, minor, patch, and pre-release sections of
// the version string are capturing groups.  The build metadata is not a
// capturing group, because it should not ever be used in version
// comparison.

var FULL = R++
var FULLPLAIN = 'v?' + src[MAINVERSION] +
                src[PRERELEASE] + '?' +
                src[BUILD] + '?'

src[FULL] = '^' + FULLPLAIN + '$'

// like full, but allows v1.2.3 and =1.2.3, which people do sometimes.
// also, 1.0.0alpha1 (prerelease without the hyphen) which is pretty
// common in the npm registry.
var LOOSEPLAIN = '[v=\\s]*' + src[MAINVERSIONLOOSE] +
                 src[PRERELEASELOOSE] + '?' +
                 src[BUILD] + '?'

var LOOSE = R++
src[LOOSE] = '^' + LOOSEPLAIN + '$'

var GTLT = R++
src[GTLT] = '((?:<|>)?=?)'

// Something like "2.*" or "1.2.x".
// Note that "x.x" is a valid xRange identifer, meaning "any version"
// Only the first item is strictly required.
var XRANGEIDENTIFIERLOOSE = R++
src[XRANGEIDENTIFIERLOOSE] = src[NUMERICIDENTIFIERLOOSE] + '|x|X|\\*'
var XRANGEIDENTIFIER = R++
src[XRANGEIDENTIFIER] = src[NUMERICIDENTIFIER] + '|x|X|\\*'

var XRANGEPLAIN = R++
src[XRANGEPLAIN] = '[v=\\s]*(' + src[XRANGEIDENTIFIER] + ')' +
                   '(?:\\.(' + src[XRANGEIDENTIFIER] + ')' +
                   '(?:\\.(' + src[XRANGEIDENTIFIER] + ')' +
                   '(?:' + src[PRERELEASE] + ')?' +
                   src[BUILD] + '?' +
                   ')?)?'

var XRANGEPLAINLOOSE = R++
src[XRANGEPLAINLOOSE] = '[v=\\s]*(' + src[XRANGEIDENTIFIERLOOSE] + ')' +
                        '(?:\\.(' + src[XRANGEIDENTIFIERLOOSE] + ')' +
                        '(?:\\.(' + src[XRANGEIDENTIFIERLOOSE] + ')' +
                        '(?:' + src[PRERELEASELOOSE] + ')?' +
                        src[BUILD] + '?' +
                        ')?)?'

var XRANGE = R++
src[XRANGE] = '^' + src[GTLT] + '\\s*' + src[XRANGEPLAIN] + '$'
var XRANGELOOSE = R++
src[XRANGELOOSE] = '^' + src[GTLT] + '\\s*' + src[XRANGEPLAINLOOSE] + '$'

// Coercion.
// Extract anything that could conceivably be a part of a valid semver
var COERCE = R++
src[COERCE] = '(?:^|[^\\d])' +
              '(\\d{1,' + MAX_SAFE_COMPONENT_LENGTH + '})' +
              '(?:\\.(\\d{1,' + MAX_SAFE_COMPONENT_LENGTH + '}))?' +
              '(?:\\.(\\d{1,' + MAX_SAFE_COMPONENT_LENGTH + '}))?' +
              '(?:$|[^\\d])'

// Tilde ranges.
// Meaning is "reasonably at or greater than"
var LONETILDE = R++
src[LONETILDE] = '(?:~>?)'

var TILDETRIM = R++
src[TILDETRIM] = '(\\s*)' + src[LONETILDE] + '\\s+'
re[TILDETRIM] = new RegExp(src[TILDETRIM], 'g')
var tildeTrimReplace = '$1~'

var TILDE = R++
src[TILDE] = '^' + src[LONETILDE] + src[XRANGEPLAIN] + '$'
var TILDELOOSE = R++
src[TILDELOOSE] = '^' + src[LONETILDE] + src[XRANGEPLAINLOOSE] + '$'

// Caret ranges.
// Meaning is "at least and backwards compatible with"
var LONECARET = R++
src[LONECARET] = '(?:\\^)'

var CARETTRIM = R++
src[CARETTRIM] = '(\\s*)' + src[LONECARET] + '\\s+'
re[CARETTRIM] = new RegExp(src[CARETTRIM], 'g')
var caretTrimReplace = '$1^'

var CARET = R++
src[CARET] = '^' + src[LONECARET] + src[XRANGEPLAIN] + '$'
var CARETLOOSE = R++
src[CARETLOOSE] = '^' + src[LONECARET] + src[XRANGEPLAINLOOSE] + '$'

// A simple gt/lt/eq thing, or just "" to indicate "any version"
var COMPARATORLOOSE = R++
src[COMPARATORLOOSE] = '^' + src[GTLT] + '\\s*(' + LOOSEPLAIN + ')$|^$'
var COMPARATOR = R++
src[COMPARATOR] = '^' + src[GTLT] + '\\s*(' + FULLPLAIN + ')$|^$'

// An expression to strip any whitespace between the gtlt and the thing
// it modifies, so that `> 1.2.3` ==> `>1.2.3`
var COMPARATORTRIM = R++
src[COMPARATORTRIM] = '(\\s*)' + src[GTLT] +
                      '\\s*(' + LOOSEPLAIN + '|' + src[XRANGEPLAIN] + ')'

// this one has to use the /g flag
re[COMPARATORTRIM] = new RegExp(src[COMPARATORTRIM], 'g')
var comparatorTrimReplace = '$1$2$3'

// Something like `1.2.3 - 1.2.4`
// Note that these all use the loose form, because they'll be
// checked against either the strict or loose comparator form
// later.
var HYPHENRANGE = R++
src[HYPHENRANGE] = '^\\s*(' + src[XRANGEPLAIN] + ')' +
                   '\\s+-\\s+' +
                   '(' + src[XRANGEPLAIN] + ')' +
                   '\\s*$'

var HYPHENRANGELOOSE = R++
src[HYPHENRANGELOOSE] = '^\\s*(' + src[XRANGEPLAINLOOSE] + ')' +
                        '\\s+-\\s+' +
                        '(' + src[XRANGEPLAINLOOSE] + ')' +
                        '\\s*$'

// Star ranges basically just allow anything at all.
var STAR = R++
src[STAR] = '(<|>)?=?\\s*\\*'

// Compile to actual regexp objects.
// All are flag-free, unless they were created above with a flag.
for (var i = 0; i < R; i++) {
  debug(i, src[i])
  if (!re[i]) {
    re[i] = new RegExp(src[i])
  }
}

exports.parse = parse
function parse (version, options) {
  if (!options || typeof options !== 'object') {
    options = {
      loose: !!options,
      includePrerelease: false
    }
  }

  if (version instanceof SemVer) {
    return version
  }

  if (typeof version !== 'string') {
    return null
  }

  if (version.length > MAX_LENGTH) {
    return null
  }

  var r = options.loose ? re[LOOSE] : re[FULL]
  if (!r.test(version)) {
    return null
  }

  try {
    return new SemVer(version, options)
  } catch (er) {
    return null
  }
}

exports.valid = valid
function valid (version, options) {
  var v = parse(version, options)
  return v ? v.version : null
}

exports.clean = clean
function clean (version, options) {
  var s = parse(version.trim().replace(/^[=v]+/, ''), options)
  return s ? s.version : null
}

exports.SemVer = SemVer

function SemVer (version, options) {
  if (!options || typeof options !== 'object') {
    options = {
      loose: !!options,
      includePrerelease: false
    }
  }
  if (version instanceof SemVer) {
    if (version.loose === options.loose) {
      return version
    } else {
      version = version.version
    }
  } else if (typeof version !== 'string') {
    throw new TypeError('Invalid Version: ' + version)
  }

  if (version.length > MAX_LENGTH) {
    throw new TypeError('version is longer than ' + MAX_LENGTH + ' characters')
  }

  if (!(this instanceof SemVer)) {
    return new SemVer(version, options)
  }

  debug('SemVer', version, options)
  this.options = options
  this.loose = !!options.loose

  var m = version.trim().match(options.loose ? re[LOOSE] : re[FULL])

  if (!m) {
    throw new TypeError('Invalid Version: ' + version)
  }

  this.raw = version

  // these are actually numbers
  this.major = +m[1]
  this.minor = +m[2]
  this.patch = +m[3]

  if (this.major > MAX_SAFE_INTEGER || this.major < 0) {
    throw new TypeError('Invalid major version')
  }

  if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) {
    throw new TypeError('Invalid minor version')
  }

  if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) {
    throw new TypeError('Invalid patch version')
  }

  // numberify any prerelease numeric ids
  if (!m[4]) {
    this.prerelease = []
  } else {
    this.prerelease = m[4].split('.').map(function (id) {
      if (/^[0-9]+$/.test(id)) {
        var num = +id
        if (num >= 0 && num < MAX_SAFE_INTEGER) {
          return num
        }
      }
      return id
    })
  }

  this.build = m[5] ? m[5].split('.') : []
  this.format()
}

SemVer.prototype.format = function () {
  this.version = this.major + '.' + this.minor + '.' + this.patch
  if (this.prerelease.length) {
    this.version += '-' + this.prerelease.join('.')
  }
  return this.version
}

SemVer.prototype.toString = function () {
  return this.version
}

SemVer.prototype.compare = function (other) {
  debug('SemVer.compare', this.version, this.options, other)
  if (!(other instanceof SemVer)) {
    other = new SemVer(other, this.options)
  }

  return this.compareMain(other) || this.comparePre(other)
}

SemVer.prototype.compareMain = function (other) {
  if (!(other instanceof SemVer)) {
    other = new SemVer(other, this.options)
  }

  return compareIdentifiers(this.major, other.major) ||
         compareIdentifiers(this.minor, other.minor) ||
         compareIdentifiers(this.patch, other.patch)
}

SemVer.prototype.comparePre = function (other) {
  if (!(other instanceof SemVer)) {
    other = new SemVer(other, this.options)
  }

  // NOT having a prerelease is > having one
  if (this.prerelease.length && !other.prerelease.length) {
    return -1
  } else if (!this.prerelease.length && other.prerelease.length) {
    return 1
  } else if (!this.prerelease.length && !other.prerelease.length) {
    return 0
  }

  var i = 0
  do {
    var a = this.prerelease[i]
    var b = other.prerelease[i]
    debug('prerelease compare', i, a, b)
    if (a === undefined && b === undefined) {
      return 0
    } else if (b === undefined) {
      return 1
    } else if (a === undefined) {
      return -1
    } else if (a === b) {
      continue
    } else {
      return compareIdentifiers(a, b)
    }
  } while (++i)
}

// preminor will bump the version up to the next minor release, and immediately
// down to pre-release. premajor and prepatch work the same way.
SemVer.prototype.inc = function (release, identifier) {
  switch (release) {
    case 'premajor':
      this.prerelease.length = 0
      this.patch = 0
      this.minor = 0
      this.major++
      this.inc('pre', identifier)
      break
    case 'preminor':
      this.prerelease.length = 0
      this.patch = 0
      this.minor++
      this.inc('pre', identifier)
      break
    case 'prepatch':
      // If this is already a prerelease, it will bump to the next version
      // drop any prereleases that might already exist, since they are not
      // relevant at this point.
      this.prerelease.length = 0
      this.inc('patch', identifier)
      this.inc('pre', identifier)
      break
    // If the input is a non-prerelease version, this acts the same as
    // prepatch.
    case 'prerelease':
      if (this.prerelease.length === 0) {
        this.inc('patch', identifier)
      }
      this.inc('pre', identifier)
      break

    case 'major':
      // If this is a pre-major version, bump up to the same major version.
      // Otherwise increment major.
      // 1.0.0-5 bumps to 1.0.0
      // 1.1.0 bumps to 2.0.0
      if (this.minor !== 0 ||
          this.patch !== 0 ||
          this.prerelease.length === 0) {
        this.major++
      }
      this.minor = 0
      this.patch = 0
      this.prerelease = []
      break
    case 'minor':
      // If this is a pre-minor version, bump up to the same minor version.
      // Otherwise increment minor.
      // 1.2.0-5 bumps to 1.2.0
      // 1.2.1 bumps to 1.3.0
      if (this.patch !== 0 || this.prerelease.length === 0) {
        this.minor++
      }
      this.patch = 0
      this.prerelease = []
      break
    case 'patch':
      // If this is not a pre-release version, it will increment the patch.
      // If it is a pre-release it will bump up to the same patch version.
      // 1.2.0-5 patches to 1.2.0
      // 1.2.0 patches to 1.2.1
      if (this.prerelease.length === 0) {
        this.patch++
      }
      this.prerelease = []
      break
    // This probably shouldn't be used publicly.
    // 1.0.0 "pre" would become 1.0.0-0 which is the wrong direction.
    case 'pre':
      if (this.prerelease.length === 0) {
        this.prerelease = [0]
      } else {
        var i = this.prerelease.length
        while (--i >= 0) {
          if (typeof this.prerelease[i] === 'number') {
            this.prerelease[i]++
            i = -2
          }
        }
        if (i === -1) {
          // didn't increment anything
          this.prerelease.push(0)
        }
      }
      if (identifier) {
        // 1.2.0-beta.1 bumps to 1.2.0-beta.2,
        // 1.2.0-beta.fooblz or 1.2.0-beta bumps to 1.2.0-beta.0
        if (this.prerelease[0] === identifier) {
          if (isNaN(this.prerelease[1])) {
            this.prerelease = [identifier, 0]
          }
        } else {
          this.prerelease = [identifier, 0]
        }
      }
      break

    default:
      throw new Error('invalid increment argument: ' + release)
  }
  this.format()
  this.raw = this.version
  return this
}

exports.inc = inc
function inc (version, release, loose, identifier) {
  if (typeof (loose) === 'string') {
    identifier = loose
    loose = undefined
  }

  try {
    return new SemVer(version, loose).inc(release, identifier).version
  } catch (er) {
    return null
  }
}

exports.diff = diff
function diff (version1, version2) {
  if (eq(version1, version2)) {
    return null
  } else {
    var v1 = parse(version1)
    var v2 = parse(version2)
    var prefix = ''
    if (v1.prerelease.length || v2.prerelease.length) {
      prefix = 'pre'
      var defaultResult = 'prerelease'
    }
    for (var key in v1) {
      if (key === 'major' || key === 'minor' || key === 'patch') {
        if (v1[key] !== v2[key]) {
          return prefix + key
        }
      }
    }
    return defaultResult // may be undefined
  }
}

exports.compareIdentifiers = compareIdentifiers

var numeric = /^[0-9]+$/
function compareIdentifiers (a, b) {
  var anum = numeric.test(a)
  var bnum = numeric.test(b)

  if (anum && bnum) {
    a = +a
    b = +b
  }

  return a === b ? 0
    : (anum && !bnum) ? -1
    : (bnum && !anum) ? 1
    : a < b ? -1
    : 1
}

exports.rcompareIdentifiers = rcompareIdentifiers
function rcompareIdentifiers (a, b) {
  return compareIdentifiers(b, a)
}

exports.major = major
function major (a, loose) {
  return new SemVer(a, loose).major
}

exports.minor = minor
function minor (a, loose) {
  return new SemVer(a, loose).minor
}

exports.patch = patch
function patch (a, loose) {
  return new SemVer(a, loose).patch
}

exports.compare = compare
function compare (a, b, loose) {
  return new SemVer(a, loose).compare(new SemVer(b, loose))
}

exports.compareLoose = compareLoose
function compareLoose (a, b) {
  return compare(a, b, true)
}

exports.rcompare = rcompare
function rcompare (a, b, loose) {
  return compare(b, a, loose)
}

exports.sort = sort
function sort (list, loose) {
  return list.sort(function (a, b) {
    return exports.compare(a, b, loose)
  })
}

exports.rsort = rsort
function rsort (list, loose) {
  return list.sort(function (a, b) {
    return exports.rcompare(a, b, loose)
  })
}

exports.gt = gt
function gt (a, b, loose) {
  return compare(a, b, loose) > 0
}

exports.lt = lt
function lt (a, b, loose) {
  return compare(a, b, loose) < 0
}

exports.eq = eq
function eq (a, b, loose) {
  return compare(a, b, loose) === 0
}

exports.neq = neq
function neq (a, b, loose) {
  return compare(a, b, loose) !== 0
}

exports.gte = gte
function gte (a, b, loose) {
  return compare(a, b, loose) >= 0
}

exports.lte = lte
function lte (a, b, loose) {
  return compare(a, b, loose) <= 0
}

exports.cmp = cmp
function cmp (a, op, b, loose) {
  switch (op) {
    case '===':
      if (typeof a === 'object')
        a = a.version
      if (typeof b === 'object')
        b = b.version
      return a === b

    case '!==':
      if (typeof a === 'object')
        a = a.version
      if (typeof b === 'object')
        b = b.version
      return a !== b

    case '':
    case '=':
    case '==':
      return eq(a, b, loose)

    case '!=':
      return neq(a, b, loose)

    case '>':
      return gt(a, b, loose)

    case '>=':
      return gte(a, b, loose)

    case '<':
      return lt(a, b, loose)

    case '<=':
      return lte(a, b, loose)

    default:
      throw new TypeError('Invalid operator: ' + op)
  }
}

exports.Comparator = Comparator
function Comparator (comp, options) {
  if (!options || typeof options !== 'object') {
    options = {
      loose: !!options,
      includePrerelease: false
    }
  }

  if (comp instanceof Comparator) {
    if (comp.loose === !!options.loose) {
      return comp
    } else {
      comp = comp.value
    }
  }

  if (!(this instanceof Comparator)) {
    return new Comparator(comp, options)
  }

  debug('comparator', comp, options)
  this.options = options
  this.loose = !!options.loose
  this.parse(comp)

  if (this.semver === ANY) {
    this.value = ''
  } else {
    this.value = this.operator + this.semver.version
  }

  debug('comp', this)
}

var ANY = {}
Comparator.prototype.parse = function (comp) {
  var r = this.options.loose ? re[COMPARATORLOOSE] : re[COMPARATOR]
  var m = comp.match(r)

  if (!m) {
    throw new TypeError('Invalid comparator: ' + comp)
  }

  this.operator = m[1]
  if (this.operator === '=') {
    this.operator = ''
  }

  // if it literally is just '>' or '' then allow anything.
  if (!m[2]) {
    this.semver = ANY
  } else {
    this.semver = new SemVer(m[2], this.options.loose)
  }
}

Comparator.prototype.toString = function () {
  return this.value
}

Comparator.prototype.test = function (version) {
  debug('Comparator.test', version, this.options.loose)

  if (this.semver === ANY) {
    return true
  }

  if (typeof version === 'string') {
    version = new SemVer(version, this.options)
  }

  return cmp(version, this.operator, this.semver, this.options)
}

Comparator.prototype.intersects = function (comp, options) {
  if (!(comp instanceof Comparator)) {
    throw new TypeError('a Comparator is required')
  }

  if (!options || typeof options !== 'object') {
    options = {
      loose: !!options,
      includePrerelease: false
    }
  }

  var rangeTmp

  if (this.operator === '') {
    rangeTmp = new Range(comp.value, options)
    return satisfies(this.value, rangeTmp, options)
  } else if (comp.operator === '') {
    rangeTmp = new Range(this.value, options)
    return satisfies(comp.semver, rangeTmp, options)
  }

  var sameDirectionIncreasing =
    (this.operator === '>=' || this.operator === '>') &&
    (comp.operator === '>=' || comp.operator === '>')
  var sameDirectionDecreasing =
    (this.operator === '<=' || this.operator === '<') &&
    (comp.operator === '<=' || comp.operator === '<')
  var sameSemVer = this.semver.version === comp.semver.version
  var differentDirectionsInclusive =
    (this.operator === '>=' || this.operator === '<=') &&
    (comp.operator === '>=' || comp.operator === '<=')
  var oppositeDirectionsLessThan =
    cmp(this.semver, '<', comp.semver, options) &&
    ((this.operator === '>=' || this.operator === '>') &&
    (comp.operator === '<=' || comp.operator === '<'))
  var oppositeDirectionsGreaterThan =
    cmp(this.semver, '>', comp.semver, options) &&
    ((this.operator === '<=' || this.operator === '<') &&
    (comp.operator === '>=' || comp.operator === '>'))

  return sameDirectionIncreasing || sameDirectionDecreasing ||
    (sameSemVer && differentDirectionsInclusive) ||
    oppositeDirectionsLessThan || oppositeDirectionsGreaterThan
}

exports.Range = Range
function Range (range, options) {
  if (!options || typeof options !== 'object') {
    options = {
      loose: !!options,
      includePrerelease: false
    }
  }

  if (range instanceof Range) {
    if (range.loose === !!options.loose &&
        range.includePrerelease === !!options.includePrerelease) {
      return range
    } else {
      return new Range(range.raw, options)
    }
  }

  if (range instanceof Comparator) {
    return new Range(range.value, options)
  }

  if (!(this instanceof Range)) {
    return new Range(range, options)
  }

  this.options = options
  this.loose = !!options.loose
  this.includePrerelease = !!options.includePrerelease

  // First, split based on boolean or ||
  this.raw = range
  this.set = range.split(/\s*\|\|\s*/).map(function (range) {
    return this.parseRange(range.trim())
  }, this).filter(function (c) {
    // throw out any that are not relevant for whatever reason
    return c.length
  })

  if (!this.set.length) {
    throw new TypeError('Invalid SemVer Range: ' + range)
  }

  this.format()
}

Range.prototype.format = function () {
  this.range = this.set.map(function (comps) {
    return comps.join(' ').trim()
  }).join('||').trim()
  return this.range
}

Range.prototype.toString = function () {
  return this.range
}

Range.prototype.parseRange = function (range) {
  var loose = this.options.loose
  range = range.trim()
  // `1.2.3 - 1.2.4` => `>=1.2.3 <=1.2.4`
  var hr = loose ? re[HYPHENRANGELOOSE] : re[HYPHENRANGE]
  range = range.replace(hr, hyphenReplace)
  debug('hyphen replace', range)
  // `> 1.2.3 < 1.2.5` => `>1.2.3 <1.2.5`
  range = range.replace(re[COMPARATORTRIM], comparatorTrimReplace)
  debug('comparator trim', range, re[COMPARATORTRIM])

  // `~ 1.2.3` => `~1.2.3`
  range = range.replace(re[TILDETRIM], tildeTrimReplace)

  // `^ 1.2.3` => `^1.2.3`
  range = range.replace(re[CARETTRIM], caretTrimReplace)

  // normalize spaces
  range = range.split(/\s+/).join(' ')

  // At this point, the range is completely trimmed and
  // ready to be split into comparators.

  var compRe = loose ? re[COMPARATORLOOSE] : re[COMPARATOR]
  var set = range.split(' ').map(function (comp) {
    return parseComparator(comp, this.options)
  }, this).join(' ').split(/\s+/)
  if (this.options.loose) {
    // in loose mode, throw out any that are not valid comparators
    set = set.filter(function (comp) {
      return !!comp.match(compRe)
    })
  }
  set = set.map(function (comp) {
    return new Comparator(comp, this.options)
  }, this)

  return set
}

Range.prototype.intersects = function (range, options) {
  if (!(range instanceof Range)) {
    throw new TypeError('a Range is required')
  }

  return this.set.some(function (thisComparators) {
    return thisComparators.every(function (thisComparator) {
      return range.set.some(function (rangeComparators) {
        return rangeComparators.every(function (rangeComparator) {
          return thisComparator.intersects(rangeComparator, options)
        })
      })
    })
  })
}

// Mostly just for testing and legacy API reasons
exports.toComparators = toComparators
function toComparators (range, options) {
  return new Range(range, options).set.map(function (comp) {
    return comp.map(function (c) {
      return c.value
    }).join(' ').trim().split(' ')
  })
}

// comprised of xranges, tildes, stars, and gtlt's at this point.
// already replaced the hyphen ranges
// turn into a set of JUST comparators.
function parseComparator (comp, options) {
  debug('comp', comp, options)
  comp = replaceCarets(comp, options)
  debug('caret', comp)
  comp = replaceTildes(comp, options)
  debug('tildes', comp)
  comp = replaceXRanges(comp, options)
  debug('xrange', comp)
  comp = replaceStars(comp, options)
  debug('stars', comp)
  return comp
}

function isX (id) {
  return !id || id.toLowerCase() === 'x' || id === '*'
}

// ~, ~> --> * (any, kinda silly)
// ~2, ~2.x, ~2.x.x, ~>2, ~>2.x ~>2.x.x --> >=2.0.0 <3.0.0
// ~2.0, ~2.0.x, ~>2.0, ~>2.0.x --> >=2.0.0 <2.1.0
// ~1.2, ~1.2.x, ~>1.2, ~>1.2.x --> >=1.2.0 <1.3.0
// ~1.2.3, ~>1.2.3 --> >=1.2.3 <1.3.0
// ~1.2.0, ~>1.2.0 --> >=1.2.0 <1.3.0
function replaceTildes (comp, options) {
  return comp.trim().split(/\s+/).map(function (comp) {
    return replaceTilde(comp, options)
  }).join(' ')
}

function replaceTilde (comp, options) {
  var r = options.loose ? re[TILDELOOSE] : re[TILDE]
  return comp.replace(r, function (_, M, m, p, pr) {
    debug('tilde', comp, _, M, m, p, pr)
    var ret

    if (isX(M)) {
      ret = ''
    } else if (isX(m)) {
      ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0'
    } else if (isX(p)) {
      // ~1.2 == >=1.2.0 <1.3.0
      ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0'
    } else if (pr) {
      debug('replaceTilde pr', pr)
      ret = '>=' + M + '.' + m + '.' + p + '-' + pr +
            ' <' + M + '.' + (+m + 1) + '.0'
    } else {
      // ~1.2.3 == >=1.2.3 <1.3.0
      ret = '>=' + M + '.' + m + '.' + p +
            ' <' + M + '.' + (+m + 1) + '.0'
    }

    debug('tilde return', ret)
    return ret
  })
}

// ^ --> * (any, kinda silly)
// ^2, ^2.x, ^2.x.x --> >=2.0.0 <3.0.0
// ^2.0, ^2.0.x --> >=2.0.0 <3.0.0
// ^1.2, ^1.2.x --> >=1.2.0 <2.0.0
// ^1.2.3 --> >=1.2.3 <2.0.0
// ^1.2.0 --> >=1.2.0 <2.0.0
function replaceCarets (comp, options) {
  return comp.trim().split(/\s+/).map(function (comp) {
    return replaceCaret(comp, options)
  }).join(' ')
}

function replaceCaret (comp, options) {
  debug('caret', comp, options)
  var r = options.loose ? re[CARETLOOSE] : re[CARET]
  return comp.replace(r, function (_, M, m, p, pr) {
    debug('caret', comp, _, M, m, p, pr)
    var ret

    if (isX(M)) {
      ret = ''
    } else if (isX(m)) {
      ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0'
    } else if (isX(p)) {
      if (M === '0') {
        ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0'
      } else {
        ret = '>=' + M + '.' + m + '.0 <' + (+M + 1) + '.0.0'
      }
    } else if (pr) {
      debug('replaceCaret pr', pr)
      if (M === '0') {
        if (m === '0') {
          ret = '>=' + M + '.' + m + '.' + p + '-' + pr +
                ' <' + M + '.' + m + '.' + (+p + 1)
        } else {
          ret = '>=' + M + '.' + m + '.' + p + '-' + pr +
                ' <' + M + '.' + (+m + 1) + '.0'
        }
      } else {
        ret = '>=' + M + '.' + m + '.' + p + '-' + pr +
              ' <' + (+M + 1) + '.0.0'
      }
    } else {
      debug('no pr')
      if (M === '0') {
        if (m === '0') {
          ret = '>=' + M + '.' + m + '.' + p +
                ' <' + M + '.' + m + '.' + (+p + 1)
        } else {
          ret = '>=' + M + '.' + m + '.' + p +
                ' <' + M + '.' + (+m + 1) + '.0'
        }
      } else {
        ret = '>=' + M + '.' + m + '.' + p +
              ' <' + (+M + 1) + '.0.0'
      }
    }

    debug('caret return', ret)
    return ret
  })
}

function replaceXRanges (comp, options) {
  debug('replaceXRanges', comp, options)
  return comp.split(/\s+/).map(function (comp) {
    return replaceXRange(comp, options)
  }).join(' ')
}

function replaceXRange (comp, options) {
  comp = comp.trim()
  var r = options.loose ? re[XRANGELOOSE] : re[XRANGE]
  return comp.replace(r, function (ret, gtlt, M, m, p, pr) {
    debug('xRange', comp, ret, gtlt, M, m, p, pr)
    var xM = isX(M)
    var xm = xM || isX(m)
    var xp = xm || isX(p)
    var anyX = xp

    if (gtlt === '=' && anyX) {
      gtlt = ''
    }

    if (xM) {
      if (gtlt === '>' || gtlt === '<') {
        // nothing is allowed
        ret = '<0.0.0'
      } else {
        // nothing is forbidden
        ret = '*'
      }
    } else if (gtlt && anyX) {
      // we know patch is an x, because we have any x at all.
      // replace X with 0
      if (xm) {
        m = 0
      }
      p = 0

      if (gtlt === '>') {
        // >1 => >=2.0.0
        // >1.2 => >=1.3.0
        // >1.2.3 => >= 1.2.4
        gtlt = '>='
        if (xm) {
          M = +M + 1
          m = 0
          p = 0
        } else {
          m = +m + 1
          p = 0
        }
      } else if (gtlt === '<=') {
        // <=0.7.x is actually <0.8.0, since any 0.7.x should
        // pass.  Similarly, <=7.x is actually <8.0.0, etc.
        gtlt = '<'
        if (xm) {
          M = +M + 1
        } else {
          m = +m + 1
        }
      }

      ret = gtlt + M + '.' + m + '.' + p
    } else if (xm) {
      ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0'
    } else if (xp) {
      ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0'
    }

    debug('xRange return', ret)

    return ret
  })
}

// Because * is AND-ed with everything else in the comparator,
// and '' means "any version", just remove the *s entirely.
function replaceStars (comp, options) {
  debug('replaceStars', comp, options)
  // Looseness is ignored here.  star is always as loose as it gets!
  return comp.trim().replace(re[STAR], '')
}

// This function is passed to string.replace(re[HYPHENRANGE])
// M, m, patch, prerelease, build
// 1.2 - 3.4.5 => >=1.2.0 <=3.4.5
// 1.2.3 - 3.4 => >=1.2.0 <3.5.0 Any 3.4.x will do
// 1.2 - 3.4 => >=1.2.0 <3.5.0
function hyphenReplace ($0,
  from, fM, fm, fp, fpr, fb,
  to, tM, tm, tp, tpr, tb) {
  if (isX(fM)) {
    from = ''
  } else if (isX(fm)) {
    from = '>=' + fM + '.0.0'
  } else if (isX(fp)) {
    from = '>=' + fM + '.' + fm + '.0'
  } else {
    from = '>=' + from
  }

  if (isX(tM)) {
    to = ''
  } else if (isX(tm)) {
    to = '<' + (+tM + 1) + '.0.0'
  } else if (isX(tp)) {
    to = '<' + tM + '.' + (+tm + 1) + '.0'
  } else if (tpr) {
    to = '<=' + tM + '.' + tm + '.' + tp + '-' + tpr
  } else {
    to = '<=' + to
  }

  return (from + ' ' + to).trim()
}

// if ANY of the sets match ALL of its comparators, then pass
Range.prototype.test = function (version) {
  if (!version) {
    return false
  }

  if (typeof version === 'string') {
    version = new SemVer(version, this.options)
  }

  for (var i = 0; i < this.set.length; i++) {
    if (testSet(this.set[i], version, this.options)) {
      return true
    }
  }
  return false
}

function testSet (set, version, options) {
  for (var i = 0; i < set.length; i++) {
    if (!set[i].test(version)) {
      return false
    }
  }

  if (version.prerelease.length && !options.includePrerelease) {
    // Find the set of versions that are allowed to have prereleases
    // For example, ^1.2.3-pr.1 desugars to >=1.2.3-pr.1 <2.0.0
    // That should allow `1.2.3-pr.2` to pass.
    // However, `1.2.4-alpha.notready` should NOT be allowed,
    // even though it's within the range set by the comparators.
    for (i = 0; i < set.length; i++) {
      debug(set[i].semver)
      if (set[i].semver === ANY) {
        continue
      }

      if (set[i].semver.prerelease.length > 0) {
        var allowed = set[i].semver
        if (allowed.major === version.major &&
            allowed.minor === version.minor &&
            allowed.patch === version.patch) {
          return true
        }
      }
    }

    // Version has a -pre, but it's not one of the ones we like.
    return false
  }

  return true
}

exports.satisfies = satisfies
function satisfies (version, range, options) {
  try {
    range = new Range(range, options)
  } catch (er) {
    return false
  }
  return range.test(version)
}

exports.maxSatisfying = maxSatisfying
function maxSatisfying (versions, range, options) {
  var max = null
  var maxSV = null
  try {
    var rangeObj = new Range(range, options)
  } catch (er) {
    return null
  }
  versions.forEach(function (v) {
    if (rangeObj.test(v)) {
      // satisfies(v, range, options)
      if (!max || maxSV.compare(v) === -1) {
        // compare(max, v, true)
        max = v
        maxSV = new SemVer(max, options)
      }
    }
  })
  return max
}

exports.minSatisfying = minSatisfying
function minSatisfying (versions, range, options) {
  var min = null
  var minSV = null
  try {
    var rangeObj = new Range(range, options)
  } catch (er) {
    return null
  }
  versions.forEach(function (v) {
    if (rangeObj.test(v)) {
      // satisfies(v, range, options)
      if (!min || minSV.compare(v) === 1) {
        // compare(min, v, true)
        min = v
        minSV = new SemVer(min, options)
      }
    }
  })
  return min
}

exports.minVersion = minVersion
function minVersion (range, loose) {
  range = new Range(range, loose)

  var minver = new SemVer('0.0.0')
  if (range.test(minver)) {
    return minver
  }

  minver = new SemVer('0.0.0-0')
  if (range.test(minver)) {
    return minver
  }

  minver = null
  for (var i = 0; i < range.set.length; ++i) {
    var comparators = range.set[i]

    comparators.forEach(function (comparator) {
      // Clone to avoid manipulating the comparator's semver object.
      var compver = new SemVer(comparator.semver.version)
      switch (comparator.operator) {
        case '>':
          if (compver.prerelease.length === 0) {
            compver.patch++
          } else {
            compver.prerelease.push(0)
          }
          compver.raw = compver.format()
          /* fallthrough */
        case '':
        case '>=':
          if (!minver || gt(minver, compver)) {
            minver = compver
          }
          break
        case '<':
        case '<=':
          /* Ignore maximum versions */
          break
        /* istanbul ignore next */
        default:
          throw new Error('Unexpected operation: ' + comparator.operator)
      }
    })
  }

  if (minver && range.test(minver)) {
    return minver
  }

  return null
}

exports.validRange = validRange
function validRange (range, options) {
  try {
    // Return '*' instead of '' so that truthiness works.
    // This will throw if it's invalid anyway
    return new Range(range, options).range || '*'
  } catch (er) {
    return null
  }
}

// Determine if version is less than all the versions possible in the range
exports.ltr = ltr
function ltr (version, range, options) {
  return outside(version, range, '<', options)
}

// Determine if version is greater than all the versions possible in the range.
exports.gtr = gtr
function gtr (version, range, options) {
  return outside(version, range, '>', options)
}

exports.outside = outside
function outside (version, range, hilo, options) {
  version = new SemVer(version, options)
  range = new Range(range, options)

  var gtfn, ltefn, ltfn, comp, ecomp
  switch (hilo) {
    case '>':
      gtfn = gt
      ltefn = lte
      ltfn = lt
      comp = '>'
      ecomp = '>='
      break
    case '<':
      gtfn = lt
      ltefn = gte
      ltfn = gt
      comp = '<'
      ecomp = '<='
      break
    default:
      throw new TypeError('Must provide a hilo val of "<" or ">"')
  }

  // If it satisifes the range it is not outside
  if (satisfies(version, range, options)) {
    return false
  }

  // From now on, variable terms are as if we're in "gtr" mode.
  // but note that everything is flipped for the "ltr" function.

  for (var i = 0; i < range.set.length; ++i) {
    var comparators = range.set[i]

    var high = null
    var low = null

    comparators.forEach(function (comparator) {
      if (comparator.semver === ANY) {
        comparator = new Comparator('>=0.0.0')
      }
      high = high || comparator
      low = low || comparator
      if (gtfn(comparator.semver, high.semver, options)) {
        high = comparator
      } else if (ltfn(comparator.semver, low.semver, options)) {
        low = comparator
      }
    })

    // If the edge version comparator has a operator then our version
    // isn't outside it
    if (high.operator === comp || high.operator === ecomp) {
      return false
    }

    // If the lowest version comparator has an operator and our version
    // is less than it then it isn't higher than the range
    if ((!low.operator || low.operator === comp) &&
        ltefn(version, low.semver)) {
      return false
    } else if (low.operator === ecomp && ltfn(version, low.semver)) {
      return false
    }
  }
  return true
}

exports.prerelease = prerelease
function prerelease (version, options) {
  var parsed = parse(version, options)
  return (parsed && parsed.prerelease.length) ? parsed.prerelease : null
}

exports.intersects = intersects
function intersects (r1, r2, options) {
  r1 = new Range(r1, options)
  r2 = new Range(r2, options)
  return r1.intersects(r2)
}

exports.coerce = coerce
function coerce (version) {
  if (version instanceof SemVer) {
    return version
  }

  if (typeof version !== 'string') {
    return null
  }

  var match = version.match(re[COERCE])

  if (match == null) {
    return null
  }

  return parse(match[1] +
    '.' + (match[2] || '0') +
    '.' + (match[3] || '0'))
}


/***/ }),

/***/ 2956:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";

var shebangRegex = __nccwpck_require__(7334);

module.exports = function (str) {
	var match = str.match(shebangRegex);

	if (!match) {
		return null;
	}

	var arr = match[0].replace(/#! ?/, '').split(' ');
	var bin = arr[0].split('/').pop();
	var arg = arr[1];

	return (bin === 'env' ?
		arg :
		bin + (arg ? ' ' + arg : '')
	);
};


/***/ }),

/***/ 1415:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

// Note: since nyc uses this module to output coverage, any lines
// that are in the direct sync flow of nyc's outputCoverage are
// ignored, since we can never get coverage for them.
var assert = __nccwpck_require__(2613)
var signals = __nccwpck_require__(6554)
var isWin = /^win/i.test(process.platform)

var EE = __nccwpck_require__(4434)
/* istanbul ignore if */
if (typeof EE !== 'function') {
  EE = EE.EventEmitter
}

var emitter
if (process.__signal_exit_emitter__) {
  emitter = process.__signal_exit_emitter__
} else {
  emitter = process.__signal_exit_emitter__ = new EE()
  emitter.count = 0
  emitter.emitted = {}
}

// Because this emitter is a global, we have to check to see if a
// previous version of this library failed to enable infinite listeners.
// I know what you're about to say.  But literally everything about
// signal-exit is a compromise with evil.  Get used to it.
if (!emitter.infinite) {
  emitter.setMaxListeners(Infinity)
  emitter.infinite = true
}

module.exports = function (cb, opts) {
  assert.equal(typeof cb, 'function', 'a callback must be provided for exit handler')

  if (loaded === false) {
    load()
  }

  var ev = 'exit'
  if (opts && opts.alwaysLast) {
    ev = 'afterexit'
  }

  var remove = function () {
    emitter.removeListener(ev, cb)
    if (emitter.listeners('exit').length === 0 &&
        emitter.listeners('afterexit').length === 0) {
      unload()
    }
  }
  emitter.on(ev, cb)

  return remove
}

module.exports.unload = unload
function unload () {
  if (!loaded) {
    return
  }
  loaded = false

  signals.forEach(function (sig) {
    try {
      process.removeListener(sig, sigListeners[sig])
    } catch (er) {}
  })
  process.emit = originalProcessEmit
  process.reallyExit = originalProcessReallyExit
  emitter.count -= 1
}

function emit (event, code, signal) {
  if (emitter.emitted[event]) {
    return
  }
  emitter.emitted[event] = true
  emitter.emit(event, code, signal)
}

// { <signal>: <listener fn>, ... }
var sigListeners = {}
signals.forEach(function (sig) {
  sigListeners[sig] = function listener () {
    // If there are no other listeners, an exit is coming!
    // Simplest way: remove us and then re-send the signal.
    // We know that this will kill the process, so we can
    // safely emit now.
    var listeners = process.listeners(sig)
    if (listeners.length === emitter.count) {
      unload()
      emit('exit', null, sig)
      /* istanbul ignore next */
      emit('afterexit', null, sig)
      /* istanbul ignore next */
      if (isWin && sig === 'SIGHUP') {
        // "SIGHUP" throws an `ENOSYS` error on Windows,
        // so use a supported signal instead
        sig = 'SIGINT'
      }
      process.kill(process.pid, sig)
    }
  }
})

module.exports.signals = function () {
  return signals
}

module.exports.load = load

var loaded = false

function load () {
  if (loaded) {
    return
  }
  loaded = true

  // This is the number of onSignalExit's that are in play.
  // It's important so that we can count the correct number of
  // listeners on signals, and don't wait for the other one to
  // handle it instead of us.
  emitter.count += 1

  signals = signals.filter(function (sig) {
    try {
      process.on(sig, sigListeners[sig])
      return true
    } catch (er) {
      return false
    }
  })

  process.emit = processEmit
  process.reallyExit = processReallyExit
}

var originalProcessReallyExit = process.reallyExit
function processReallyExit (code) {
  process.exitCode = code || 0
  emit('exit', process.exitCode, null)
  /* istanbul ignore next */
  emit('afterexit', process.exitCode, null)
  /* istanbul ignore next */
  originalProcessReallyExit.call(process, process.exitCode)
}

var originalProcessEmit = process.emit
function processEmit (ev, arg) {
  if (ev === 'exit') {
    if (arg !== undefined) {
      process.exitCode = arg
    }
    var ret = originalProcessEmit.apply(this, arguments)
    emit('exit', process.exitCode, null)
    /* istanbul ignore next */
    emit('afterexit', process.exitCode, null)
    return ret
  } else {
    return originalProcessEmit.apply(this, arguments)
  }
}


/***/ }),

/***/ 6554:
/***/ ((module) => {

// This is not the set of all possible signals.
//
// It IS, however, the set of all signals that trigger
// an exit on either Linux or BSD systems.  Linux is a
// superset of the signal names supported on BSD, and
// the unknown signals just fail to register, so we can
// catch that easily enough.
//
// Don't bother with SIGKILL.  It's uncatchable, which
// means that we can't fire any callbacks anyway.
//
// If a user does happen to register a handler on a non-
// fatal signal like SIGWINCH or something, and then
// exit, it'll end up firing `process.emit('exit')`, so
// the handler will be fired anyway.
//
// SIGBUS, SIGFPE, SIGSEGV and SIGILL, when not raised
// artificially, inherently leave the process in a
// state from which it is not safe to try and enter JS
// listeners.
module.exports = [
  'SIGABRT',
  'SIGALRM',
  'SIGHUP',
  'SIGINT',
  'SIGTERM'
]

if (process.platform !== 'win32') {
  module.exports.push(
    'SIGVTALRM',
    'SIGXCPU',
    'SIGXFSZ',
    'SIGUSR2',
    'SIGTRAP',
    'SIGSYS',
    'SIGQUIT',
    'SIGIOT'
    // should detect profiler and enable/disable accordingly.
    // see #21
    // 'SIGPROF'
  )
}

if (process.platform === 'linux') {
  module.exports.push(
    'SIGIO',
    'SIGPOLL',
    'SIGPWR',
    'SIGSTKFLT',
    'SIGUNUSED'
  )
}


/***/ }),

/***/ 4204:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

module.exports = which
which.sync = whichSync

var isWindows = process.platform === 'win32' ||
    process.env.OSTYPE === 'cygwin' ||
    process.env.OSTYPE === 'msys'

var path = __nccwpck_require__(6928)
var COLON = isWindows ? ';' : ':'
var isexe = __nccwpck_require__(2940)

function getNotFoundError (cmd) {
  var er = new Error('not found: ' + cmd)
  er.code = 'ENOENT'

  return er
}

function getPathInfo (cmd, opt) {
  var colon = opt.colon || COLON
  var pathEnv = opt.path || process.env.PATH || ''
  var pathExt = ['']

  pathEnv = pathEnv.split(colon)

  var pathExtExe = ''
  if (isWindows) {
    pathEnv.unshift(process.cwd())
    pathExtExe = (opt.pathExt || process.env.PATHEXT || '.EXE;.CMD;.BAT;.COM')
    pathExt = pathExtExe.split(colon)


    // Always test the cmd itself first.  isexe will check to make sure
    // it's found in the pathExt set.
    if (cmd.indexOf('.') !== -1 && pathExt[0] !== '')
      pathExt.unshift('')
  }

  // If it has a slash, then we don't bother searching the pathenv.
  // just check the file itself, and that's it.
  if (cmd.match(/\//) || isWindows && cmd.match(/\\/))
    pathEnv = ['']

  return {
    env: pathEnv,
    ext: pathExt,
    extExe: pathExtExe
  }
}

function which (cmd, opt, cb) {
  if (typeof opt === 'function') {
    cb = opt
    opt = {}
  }

  var info = getPathInfo(cmd, opt)
  var pathEnv = info.env
  var pathExt = info.ext
  var pathExtExe = info.extExe
  var found = []

  ;(function F (i, l) {
    if (i === l) {
      if (opt.all && found.length)
        return cb(null, found)
      else
        return cb(getNotFoundError(cmd))
    }

    var pathPart = pathEnv[i]
    if (pathPart.charAt(0) === '"' && pathPart.slice(-1) === '"')
      pathPart = pathPart.slice(1, -1)

    var p = path.join(pathPart, cmd)
    if (!pathPart && (/^\.[\\\/]/).test(cmd)) {
      p = cmd.slice(0, 2) + p
    }
    ;(function E (ii, ll) {
      if (ii === ll) return F(i + 1, l)
      var ext = pathExt[ii]
      isexe(p + ext, { pathExt: pathExtExe }, function (er, is) {
        if (!er && is) {
          if (opt.all)
            found.push(p + ext)
          else
            return cb(null, p + ext)
        }
        return E(ii + 1, ll)
      })
    })(0, pathExt.length)
  })(0, pathEnv.length)
}

function whichSync (cmd, opt) {
  opt = opt || {}

  var info = getPathInfo(cmd, opt)
  var pathEnv = info.env
  var pathExt = info.ext
  var pathExtExe = info.extExe
  var found = []

  for (var i = 0, l = pathEnv.length; i < l; i ++) {
    var pathPart = pathEnv[i]
    if (pathPart.charAt(0) === '"' && pathPart.slice(-1) === '"')
      pathPart = pathPart.slice(1, -1)

    var p = path.join(pathPart, cmd)
    if (!pathPart && /^\.[\\\/]/.test(cmd)) {
      p = cmd.slice(0, 2) + p
    }
    for (var j = 0, ll = pathExt.length; j < ll; j ++) {
      var cur = p + pathExt[j]
      var is
      try {
        is = isexe.sync(cur, { pathExt: pathExtExe })
        if (is) {
          if (opt.all)
            found.push(cur)
          else
            return cur
        }
      } catch (ex) {}
    }
  }

  if (opt.all && found.length)
    return found

  if (opt.nothrow)
    return null

  throw getNotFoundError(cmd)
}


/***/ }),

/***/ 7070:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";

const {PassThrough} = __nccwpck_require__(2203);

module.exports = options => {
	options = Object.assign({}, options);

	const {array} = options;
	let {encoding} = options;
	const buffer = encoding === 'buffer';
	let objectMode = false;

	if (array) {
		objectMode = !(encoding || buffer);
	} else {
		encoding = encoding || 'utf8';
	}

	if (buffer) {
		encoding = null;
	}

	let len = 0;
	const ret = [];
	const stream = new PassThrough({objectMode});

	if (encoding) {
		stream.setEncoding(encoding);
	}

	stream.on('data', chunk => {
		ret.push(chunk);

		if (objectMode) {
			len = ret.length;
		} else {
			len += chunk.length;
		}
	});

	stream.getBufferedValue = () => {
		if (array) {
			return ret;
		}

		return buffer ? Buffer.concat(ret, len) : ret.join('');
	};

	stream.getBufferedLength = () => len;

	return stream;
};


/***/ }),

/***/ 6771:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";

const pump = __nccwpck_require__(7898);
const bufferStream = __nccwpck_require__(7070);

class MaxBufferError extends Error {
	constructor() {
		super('maxBuffer exceeded');
		this.name = 'MaxBufferError';
	}
}

function getStream(inputStream, options) {
	if (!inputStream) {
		return Promise.reject(new Error('Expected a stream'));
	}

	options = Object.assign({maxBuffer: Infinity}, options);

	const {maxBuffer} = options;

	let stream;
	return new Promise((resolve, reject) => {
		const rejectPromise = error => {
			if (error) { // A null check
				error.bufferedData = stream.getBufferedValue();
			}
			reject(error);
		};

		stream = pump(inputStream, bufferStream(options), error => {
			if (error) {
				rejectPromise(error);
				return;
			}

			resolve();
		});

		stream.on('data', () => {
			if (stream.getBufferedLength() > maxBuffer) {
				rejectPromise(new MaxBufferError());
			}
		});
	}).then(() => stream.getBufferedValue());
}

module.exports = getStream;
module.exports.buffer = (stream, options) => getStream(stream, Object.assign({}, options, {encoding: 'buffer'}));
module.exports.array = (stream, options) => getStream(stream, Object.assign({}, options, {array: true}));
module.exports.MaxBufferError = MaxBufferError;


/***/ }),

/***/ 9139:
/***/ ((module) => {

"use strict";


/*!
 * isobject <https://github.com/jonschlinkert/isobject>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */

function isObject(val) {
  return val != null && typeof val === 'object' && Array.isArray(val) === false;
}

/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */

function isObjectObject(o) {
  return isObject(o) === true
    && Object.prototype.toString.call(o) === '[object Object]';
}

function isPlainObject(o) {
  var ctor,prot;

  if (isObjectObject(o) === false) return false;

  // If has modified constructor
  ctor = o.constructor;
  if (typeof ctor !== 'function') return false;

  // If has modified prototype
  prot = ctor.prototype;
  if (isObjectObject(prot) === false) return false;

  // If constructor does not have an Object-specific method
  if (prot.hasOwnProperty('isPrototypeOf') === false) {
    return false;
  }

  // Most likely a plain Object
  return true;
}

module.exports = isPlainObject;


/***/ }),

/***/ 6543:
/***/ ((module) => {

"use strict";


var isStream = module.exports = function (stream) {
	return stream !== null && typeof stream === 'object' && typeof stream.pipe === 'function';
};

isStream.writable = function (stream) {
	return isStream(stream) && stream.writable !== false && typeof stream._write === 'function' && typeof stream._writableState === 'object';
};

isStream.readable = function (stream) {
	return isStream(stream) && stream.readable !== false && typeof stream._read === 'function' && typeof stream._readableState === 'object';
};

isStream.duplex = function (stream) {
	return isStream.writable(stream) && isStream.readable(stream);
};

isStream.transform = function (stream) {
	return isStream.duplex(stream) && typeof stream._transform === 'function' && typeof stream._transformState === 'object';
};


/***/ }),

/***/ 2940:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var fs = __nccwpck_require__(9896)
var core
if (process.platform === 'win32' || global.TESTING_WINDOWS) {
  core = __nccwpck_require__(9225)
} else {
  core = __nccwpck_require__(1025)
}

module.exports = isexe
isexe.sync = sync

function isexe (path, options, cb) {
  if (typeof options === 'function') {
    cb = options
    options = {}
  }

  if (!cb) {
    if (typeof Promise !== 'function') {
      throw new TypeError('callback not provided')
    }

    return new Promise(function (resolve, reject) {
      isexe(path, options || {}, function (er, is) {
        if (er) {
          reject(er)
        } else {
          resolve(is)
        }
      })
    })
  }

  core(path, options || {}, function (er, is) {
    // ignore EACCES because that just means we aren't allowed to run it
    if (er) {
      if (er.code === 'EACCES' || options && options.ignoreErrors) {
        er = null
        is = false
      }
    }
    cb(er, is)
  })
}

function sync (path, options) {
  // my kingdom for a filtered catch
  try {
    return core.sync(path, options || {})
  } catch (er) {
    if (options && options.ignoreErrors || er.code === 'EACCES') {
      return false
    } else {
      throw er
    }
  }
}


/***/ }),

/***/ 1025:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

module.exports = isexe
isexe.sync = sync

var fs = __nccwpck_require__(9896)

function isexe (path, options, cb) {
  fs.stat(path, function (er, stat) {
    cb(er, er ? false : checkStat(stat, options))
  })
}

function sync (path, options) {
  return checkStat(fs.statSync(path), options)
}

function checkStat (stat, options) {
  return stat.isFile() && checkMode(stat, options)
}

function checkMode (stat, options) {
  var mod = stat.mode
  var uid = stat.uid
  var gid = stat.gid

  var myUid = options.uid !== undefined ?
    options.uid : process.getuid && process.getuid()
  var myGid = options.gid !== undefined ?
    options.gid : process.getgid && process.getgid()

  var u = parseInt('100', 8)
  var g = parseInt('010', 8)
  var o = parseInt('001', 8)
  var ug = u | g

  var ret = (mod & o) ||
    (mod & g) && gid === myGid ||
    (mod & u) && uid === myUid ||
    (mod & ug) && myUid === 0

  return ret
}


/***/ }),

/***/ 9225:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

module.exports = isexe
isexe.sync = sync

var fs = __nccwpck_require__(9896)

function checkPathExt (path, options) {
  var pathext = options.pathExt !== undefined ?
    options.pathExt : process.env.PATHEXT

  if (!pathext) {
    return true
  }

  pathext = pathext.split(';')
  if (pathext.indexOf('') !== -1) {
    return true
  }
  for (var i = 0; i < pathext.length; i++) {
    var p = pathext[i].toLowerCase()
    if (p && path.substr(-p.length).toLowerCase() === p) {
      return true
    }
  }
  return false
}

function checkStat (stat, path, options) {
  if (!stat.isSymbolicLink() && !stat.isFile()) {
    return false
  }
  return checkPathExt(path, options)
}

function isexe (path, options, cb) {
  fs.stat(path, function (er, stat) {
    cb(er, er ? false : checkStat(stat, path, options))
  })
}

function sync (path, options) {
  return checkStat(fs.statSync(path), path, options)
}


/***/ }),

/***/ 615:
/***/ ((module) => {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** `Object#toString` result references. */
var funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    symbolTag = '[object Symbol]';

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/,
    reLeadingDot = /^\./,
    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Symbol = root.Symbol,
    splice = arrayProto.splice;

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map'),
    nativeCreate = getNative(Object, 'create');

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = isKey(path, object) ? [path] : castPath(path);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value) {
  return isArray(value) ? value : stringToPath(value);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoize(function(string) {
  string = toString(string);

  var result = [];
  if (reLeadingDot.test(string)) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result);
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Assign cache to `_.memoize`.
memoize.Cache = MapCache;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;


/***/ }),

/***/ 8203:
/***/ ((module) => {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    symbolTag = '[object Symbol]';

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/,
    reLeadingDot = /^\./,
    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Symbol = root.Symbol,
    splice = arrayProto.splice;

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map'),
    nativeCreate = getNative(Object, 'create');

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    object[key] = value;
  }
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.set`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize path creation.
 * @returns {Object} Returns `object`.
 */
function baseSet(object, path, value, customizer) {
  if (!isObject(object)) {
    return object;
  }
  path = isKey(path, object) ? [path] : castPath(path);

  var index = -1,
      length = path.length,
      lastIndex = length - 1,
      nested = object;

  while (nested != null && ++index < length) {
    var key = toKey(path[index]),
        newValue = value;

    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : undefined;
      if (newValue === undefined) {
        newValue = isObject(objValue)
          ? objValue
          : (isIndex(path[index + 1]) ? [] : {});
      }
    }
    assignValue(nested, key, newValue);
    nested = nested[key];
  }
  return object;
}

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value) {
  return isArray(value) ? value : stringToPath(value);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoize(function(string) {
  string = toString(string);

  var result = [];
  if (reLeadingDot.test(string)) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result);
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Assign cache to `_.memoize`.
memoize.Cache = MapCache;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

/**
 * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
 * it's created. Arrays are created for missing index properties while objects
 * are created for all other missing properties. Use `_.setWith` to customize
 * `path` creation.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.set(object, 'a[0].b.c', 4);
 * console.log(object.a[0].b.c);
 * // => 4
 *
 * _.set(object, ['x', '0', 'y', 'z'], 5);
 * console.log(object.x[0].y.z);
 * // => 5
 */
function set(object, path, value) {
  return object == null ? object : baseSet(object, path, value);
}

module.exports = set;


/***/ }),

/***/ 8620:
/***/ ((module) => {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** `Object#toString` result references. */
var funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array ? array.length : 0;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludesWith(array, value, comparator) {
  var index = -1,
      length = array ? array.length : 0;

  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  if (value !== value) {
    return baseFindIndex(array, baseIsNaN, fromIndex);
  }
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

/**
 * Checks if a cache value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var splice = arrayProto.splice;

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map'),
    Set = getNative(root, 'Set'),
    nativeCreate = getNative(Object, 'create');

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values ? values.length : 0;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.uniqBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 */
function baseUniq(array, iteratee, comparator) {
  var index = -1,
      includes = arrayIncludes,
      length = array.length,
      isCommon = true,
      result = [],
      seen = result;

  if (comparator) {
    isCommon = false;
    includes = arrayIncludesWith;
  }
  else if (length >= LARGE_ARRAY_SIZE) {
    var set = iteratee ? null : createSet(array);
    if (set) {
      return setToArray(set);
    }
    isCommon = false;
    includes = cacheHas;
    seen = new SetCache;
  }
  else {
    seen = iteratee ? [] : result;
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee ? iteratee(value) : value;

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var seenIndex = seen.length;
      while (seenIndex--) {
        if (seen[seenIndex] === computed) {
          continue outer;
        }
      }
      if (iteratee) {
        seen.push(computed);
      }
      result.push(value);
    }
    else if (!includes(seen, computed, comparator)) {
      if (seen !== result) {
        seen.push(computed);
      }
      result.push(value);
    }
  }
  return result;
}

/**
 * Creates a set object of `values`.
 *
 * @private
 * @param {Array} values The values to add to the set.
 * @returns {Object} Returns the new set.
 */
var createSet = !(Set && (1 / setToArray(new Set([,-0]))[1]) == INFINITY) ? noop : function(values) {
  return new Set(values);
};

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Creates a duplicate-free version of an array, using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons, in which only the first occurrence of each
 * element is kept.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @returns {Array} Returns the new duplicate free array.
 * @example
 *
 * _.uniq([2, 1, 2]);
 * // => [2, 1]
 */
function uniq(array) {
  return (array && array.length)
    ? baseUniq(array)
    : [];
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {
  // No operation performed.
}

module.exports = uniq;


/***/ }),

/***/ 6609:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";

const os = __nccwpck_require__(857);

const nameMap = new Map([
	[19, 'Catalina'],
	[18, 'Mojave'],
	[17, 'High Sierra'],
	[16, 'Sierra'],
	[15, 'El Capitan'],
	[14, 'Yosemite'],
	[13, 'Mavericks'],
	[12, 'Mountain Lion'],
	[11, 'Lion'],
	[10, 'Snow Leopard'],
	[9, 'Leopard'],
	[8, 'Tiger'],
	[7, 'Panther'],
	[6, 'Jaguar'],
	[5, 'Puma']
]);

const macosRelease = release => {
	release = Number((release || os.release()).split('.')[0]);
	return {
		name: nameMap.get(release),
		version: '10.' + (release - 4)
	};
};

module.exports = macosRelease;
// TODO: remove this in the next major version
module.exports["default"] = macosRelease;


/***/ }),

/***/ 3048:
/***/ ((module) => {

"use strict";


/**
 * Tries to execute a function and discards any error that occurs.
 * @param {Function} fn - Function that might or might not throw an error.
 * @returns {?*} Return-value of the function when no error occurred.
 */
module.exports = function(fn) {

	try { return fn() } catch (e) {}

}

/***/ }),

/***/ 6705:
/***/ ((module, exports, __nccwpck_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var Stream = _interopDefault(__nccwpck_require__(2203));
var http = _interopDefault(__nccwpck_require__(8611));
var Url = _interopDefault(__nccwpck_require__(7016));
var https = _interopDefault(__nccwpck_require__(5692));
var zlib = _interopDefault(__nccwpck_require__(3106));

// Based on https://github.com/tmpvar/jsdom/blob/aa85b2abf07766ff7bf5c1f6daafb3726f2f2db5/lib/jsdom/living/blob.js

// fix for "Readable" isn't a named export issue
const Readable = Stream.Readable;

const BUFFER = Symbol('buffer');
const TYPE = Symbol('type');

class Blob {
	constructor() {
		this[TYPE] = '';

		const blobParts = arguments[0];
		const options = arguments[1];

		const buffers = [];
		let size = 0;

		if (blobParts) {
			const a = blobParts;
			const length = Number(a.length);
			for (let i = 0; i < length; i++) {
				const element = a[i];
				let buffer;
				if (element instanceof Buffer) {
					buffer = element;
				} else if (ArrayBuffer.isView(element)) {
					buffer = Buffer.from(element.buffer, element.byteOffset, element.byteLength);
				} else if (element instanceof ArrayBuffer) {
					buffer = Buffer.from(element);
				} else if (element instanceof Blob) {
					buffer = element[BUFFER];
				} else {
					buffer = Buffer.from(typeof element === 'string' ? element : String(element));
				}
				size += buffer.length;
				buffers.push(buffer);
			}
		}

		this[BUFFER] = Buffer.concat(buffers);

		let type = options && options.type !== undefined && String(options.type).toLowerCase();
		if (type && !/[^\u0020-\u007E]/.test(type)) {
			this[TYPE] = type;
		}
	}
	get size() {
		return this[BUFFER].length;
	}
	get type() {
		return this[TYPE];
	}
	text() {
		return Promise.resolve(this[BUFFER].toString());
	}
	arrayBuffer() {
		const buf = this[BUFFER];
		const ab = buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
		return Promise.resolve(ab);
	}
	stream() {
		const readable = new Readable();
		readable._read = function () {};
		readable.push(this[BUFFER]);
		readable.push(null);
		return readable;
	}
	toString() {
		return '[object Blob]';
	}
	slice() {
		const size = this.size;

		const start = arguments[0];
		const end = arguments[1];
		let relativeStart, relativeEnd;
		if (start === undefined) {
			relativeStart = 0;
		} else if (start < 0) {
			relativeStart = Math.max(size + start, 0);
		} else {
			relativeStart = Math.min(start, size);
		}
		if (end === undefined) {
			relativeEnd = size;
		} else if (end < 0) {
			relativeEnd = Math.max(size + end, 0);
		} else {
			relativeEnd = Math.min(end, size);
		}
		const span = Math.max(relativeEnd - relativeStart, 0);

		const buffer = this[BUFFER];
		const slicedBuffer = buffer.slice(relativeStart, relativeStart + span);
		const blob = new Blob([], { type: arguments[2] });
		blob[BUFFER] = slicedBuffer;
		return blob;
	}
}

Object.defineProperties(Blob.prototype, {
	size: { enumerable: true },
	type: { enumerable: true },
	slice: { enumerable: true }
});

Object.defineProperty(Blob.prototype, Symbol.toStringTag, {
	value: 'Blob',
	writable: false,
	enumerable: false,
	configurable: true
});

/**
 * fetch-error.js
 *
 * FetchError interface for operational errors
 */

/**
 * Create FetchError instance
 *
 * @param   String      message      Error message for human
 * @param   String      type         Error type for machine
 * @param   String      systemError  For Node.js system error
 * @return  FetchError
 */
function FetchError(message, type, systemError) {
  Error.call(this, message);

  this.message = message;
  this.type = type;

  // when err.type is `system`, err.code contains system error code
  if (systemError) {
    this.code = this.errno = systemError.code;
  }

  // hide custom error implementation details from end-users
  Error.captureStackTrace(this, this.constructor);
}

FetchError.prototype = Object.create(Error.prototype);
FetchError.prototype.constructor = FetchError;
FetchError.prototype.name = 'FetchError';

let convert;
try {
	convert = (__nccwpck_require__(2078).convert);
} catch (e) {}

const INTERNALS = Symbol('Body internals');

// fix an issue where "PassThrough" isn't a named export for node <10
const PassThrough = Stream.PassThrough;

/**
 * Body mixin
 *
 * Ref: https://fetch.spec.whatwg.org/#body
 *
 * @param   Stream  body  Readable stream
 * @param   Object  opts  Response options
 * @return  Void
 */
function Body(body) {
	var _this = this;

	var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
	    _ref$size = _ref.size;

	let size = _ref$size === undefined ? 0 : _ref$size;
	var _ref$timeout = _ref.timeout;
	let timeout = _ref$timeout === undefined ? 0 : _ref$timeout;

	if (body == null) {
		// body is undefined or null
		body = null;
	} else if (isURLSearchParams(body)) {
		// body is a URLSearchParams
		body = Buffer.from(body.toString());
	} else if (isBlob(body)) ; else if (Buffer.isBuffer(body)) ; else if (Object.prototype.toString.call(body) === '[object ArrayBuffer]') {
		// body is ArrayBuffer
		body = Buffer.from(body);
	} else if (ArrayBuffer.isView(body)) {
		// body is ArrayBufferView
		body = Buffer.from(body.buffer, body.byteOffset, body.byteLength);
	} else if (body instanceof Stream) ; else {
		// none of the above
		// coerce to string then buffer
		body = Buffer.from(String(body));
	}
	this[INTERNALS] = {
		body,
		disturbed: false,
		error: null
	};
	this.size = size;
	this.timeout = timeout;

	if (body instanceof Stream) {
		body.on('error', function (err) {
			const error = err.name === 'AbortError' ? err : new FetchError(`Invalid response body while trying to fetch ${_this.url}: ${err.message}`, 'system', err);
			_this[INTERNALS].error = error;
		});
	}
}

Body.prototype = {
	get body() {
		return this[INTERNALS].body;
	},

	get bodyUsed() {
		return this[INTERNALS].disturbed;
	},

	/**
  * Decode response as ArrayBuffer
  *
  * @return  Promise
  */
	arrayBuffer() {
		return consumeBody.call(this).then(function (buf) {
			return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
		});
	},

	/**
  * Return raw response as Blob
  *
  * @return Promise
  */
	blob() {
		let ct = this.headers && this.headers.get('content-type') || '';
		return consumeBody.call(this).then(function (buf) {
			return Object.assign(
			// Prevent copying
			new Blob([], {
				type: ct.toLowerCase()
			}), {
				[BUFFER]: buf
			});
		});
	},

	/**
  * Decode response as json
  *
  * @return  Promise
  */
	json() {
		var _this2 = this;

		return consumeBody.call(this).then(function (buffer) {
			try {
				return JSON.parse(buffer.toString());
			} catch (err) {
				return Body.Promise.reject(new FetchError(`invalid json response body at ${_this2.url} reason: ${err.message}`, 'invalid-json'));
			}
		});
	},

	/**
  * Decode response as text
  *
  * @return  Promise
  */
	text() {
		return consumeBody.call(this).then(function (buffer) {
			return buffer.toString();
		});
	},

	/**
  * Decode response as buffer (non-spec api)
  *
  * @return  Promise
  */
	buffer() {
		return consumeBody.call(this);
	},

	/**
  * Decode response as text, while automatically detecting the encoding and
  * trying to decode to UTF-8 (non-spec api)
  *
  * @return  Promise
  */
	textConverted() {
		var _this3 = this;

		return consumeBody.call(this).then(function (buffer) {
			return convertBody(buffer, _this3.headers);
		});
	}
};

// In browsers, all properties are enumerable.
Object.defineProperties(Body.prototype, {
	body: { enumerable: true },
	bodyUsed: { enumerable: true },
	arrayBuffer: { enumerable: true },
	blob: { enumerable: true },
	json: { enumerable: true },
	text: { enumerable: true }
});

Body.mixIn = function (proto) {
	for (const name of Object.getOwnPropertyNames(Body.prototype)) {
		// istanbul ignore else: future proof
		if (!(name in proto)) {
			const desc = Object.getOwnPropertyDescriptor(Body.prototype, name);
			Object.defineProperty(proto, name, desc);
		}
	}
};

/**
 * Consume and convert an entire Body to a Buffer.
 *
 * Ref: https://fetch.spec.whatwg.org/#concept-body-consume-body
 *
 * @return  Promise
 */
function consumeBody() {
	var _this4 = this;

	if (this[INTERNALS].disturbed) {
		return Body.Promise.reject(new TypeError(`body used already for: ${this.url}`));
	}

	this[INTERNALS].disturbed = true;

	if (this[INTERNALS].error) {
		return Body.Promise.reject(this[INTERNALS].error);
	}

	let body = this.body;

	// body is null
	if (body === null) {
		return Body.Promise.resolve(Buffer.alloc(0));
	}

	// body is blob
	if (isBlob(body)) {
		body = body.stream();
	}

	// body is buffer
	if (Buffer.isBuffer(body)) {
		return Body.Promise.resolve(body);
	}

	// istanbul ignore if: should never happen
	if (!(body instanceof Stream)) {
		return Body.Promise.resolve(Buffer.alloc(0));
	}

	// body is stream
	// get ready to actually consume the body
	let accum = [];
	let accumBytes = 0;
	let abort = false;

	return new Body.Promise(function (resolve, reject) {
		let resTimeout;

		// allow timeout on slow response body
		if (_this4.timeout) {
			resTimeout = setTimeout(function () {
				abort = true;
				reject(new FetchError(`Response timeout while trying to fetch ${_this4.url} (over ${_this4.timeout}ms)`, 'body-timeout'));
			}, _this4.timeout);
		}

		// handle stream errors
		body.on('error', function (err) {
			if (err.name === 'AbortError') {
				// if the request was aborted, reject with this Error
				abort = true;
				reject(err);
			} else {
				// other errors, such as incorrect content-encoding
				reject(new FetchError(`Invalid response body while trying to fetch ${_this4.url}: ${err.message}`, 'system', err));
			}
		});

		body.on('data', function (chunk) {
			if (abort || chunk === null) {
				return;
			}

			if (_this4.size && accumBytes + chunk.length > _this4.size) {
				abort = true;
				reject(new FetchError(`content size at ${_this4.url} over limit: ${_this4.size}`, 'max-size'));
				return;
			}

			accumBytes += chunk.length;
			accum.push(chunk);
		});

		body.on('end', function () {
			if (abort) {
				return;
			}

			clearTimeout(resTimeout);

			try {
				resolve(Buffer.concat(accum, accumBytes));
			} catch (err) {
				// handle streams that have accumulated too much data (issue #414)
				reject(new FetchError(`Could not create Buffer from response body for ${_this4.url}: ${err.message}`, 'system', err));
			}
		});
	});
}

/**
 * Detect buffer encoding and convert to target encoding
 * ref: http://www.w3.org/TR/2011/WD-html5-20110113/parsing.html#determining-the-character-encoding
 *
 * @param   Buffer  buffer    Incoming buffer
 * @param   String  encoding  Target encoding
 * @return  String
 */
function convertBody(buffer, headers) {
	if (typeof convert !== 'function') {
		throw new Error('The package `encoding` must be installed to use the textConverted() function');
	}

	const ct = headers.get('content-type');
	let charset = 'utf-8';
	let res, str;

	// header
	if (ct) {
		res = /charset=([^;]*)/i.exec(ct);
	}

	// no charset in content type, peek at response body for at most 1024 bytes
	str = buffer.slice(0, 1024).toString();

	// html5
	if (!res && str) {
		res = /<meta.+?charset=(['"])(.+?)\1/i.exec(str);
	}

	// html4
	if (!res && str) {
		res = /<meta[\s]+?http-equiv=(['"])content-type\1[\s]+?content=(['"])(.+?)\2/i.exec(str);
		if (!res) {
			res = /<meta[\s]+?content=(['"])(.+?)\1[\s]+?http-equiv=(['"])content-type\3/i.exec(str);
			if (res) {
				res.pop(); // drop last quote
			}
		}

		if (res) {
			res = /charset=(.*)/i.exec(res.pop());
		}
	}

	// xml
	if (!res && str) {
		res = /<\?xml.+?encoding=(['"])(.+?)\1/i.exec(str);
	}

	// found charset
	if (res) {
		charset = res.pop();

		// prevent decode issues when sites use incorrect encoding
		// ref: https://hsivonen.fi/encoding-menu/
		if (charset === 'gb2312' || charset === 'gbk') {
			charset = 'gb18030';
		}
	}

	// turn raw buffers into a single utf-8 buffer
	return convert(buffer, 'UTF-8', charset).toString();
}

/**
 * Detect a URLSearchParams object
 * ref: https://github.com/bitinn/node-fetch/issues/296#issuecomment-307598143
 *
 * @param   Object  obj     Object to detect by type or brand
 * @return  String
 */
function isURLSearchParams(obj) {
	// Duck-typing as a necessary condition.
	if (typeof obj !== 'object' || typeof obj.append !== 'function' || typeof obj.delete !== 'function' || typeof obj.get !== 'function' || typeof obj.getAll !== 'function' || typeof obj.has !== 'function' || typeof obj.set !== 'function') {
		return false;
	}

	// Brand-checking and more duck-typing as optional condition.
	return obj.constructor.name === 'URLSearchParams' || Object.prototype.toString.call(obj) === '[object URLSearchParams]' || typeof obj.sort === 'function';
}

/**
 * Check if `obj` is a W3C `Blob` object (which `File` inherits from)
 * @param  {*} obj
 * @return {boolean}
 */
function isBlob(obj) {
	return typeof obj === 'object' && typeof obj.arrayBuffer === 'function' && typeof obj.type === 'string' && typeof obj.stream === 'function' && typeof obj.constructor === 'function' && typeof obj.constructor.name === 'string' && /^(Blob|File)$/.test(obj.constructor.name) && /^(Blob|File)$/.test(obj[Symbol.toStringTag]);
}

/**
 * Clone body given Res/Req instance
 *
 * @param   Mixed  instance  Response or Request instance
 * @return  Mixed
 */
function clone(instance) {
	let p1, p2;
	let body = instance.body;

	// don't allow cloning a used body
	if (instance.bodyUsed) {
		throw new Error('cannot clone body after it is used');
	}

	// check that body is a stream and not form-data object
	// note: we can't clone the form-data object without having it as a dependency
	if (body instanceof Stream && typeof body.getBoundary !== 'function') {
		// tee instance body
		p1 = new PassThrough();
		p2 = new PassThrough();
		body.pipe(p1);
		body.pipe(p2);
		// set instance body to teed body and return the other teed body
		instance[INTERNALS].body = p1;
		body = p2;
	}

	return body;
}

/**
 * Performs the operation "extract a `Content-Type` value from |object|" as
 * specified in the specification:
 * https://fetch.spec.whatwg.org/#concept-bodyinit-extract
 *
 * This function assumes that instance.body is present.
 *
 * @param   Mixed  instance  Any options.body input
 */
function extractContentType(body) {
	if (body === null) {
		// body is null
		return null;
	} else if (typeof body === 'string') {
		// body is string
		return 'text/plain;charset=UTF-8';
	} else if (isURLSearchParams(body)) {
		// body is a URLSearchParams
		return 'application/x-www-form-urlencoded;charset=UTF-8';
	} else if (isBlob(body)) {
		// body is blob
		return body.type || null;
	} else if (Buffer.isBuffer(body)) {
		// body is buffer
		return null;
	} else if (Object.prototype.toString.call(body) === '[object ArrayBuffer]') {
		// body is ArrayBuffer
		return null;
	} else if (ArrayBuffer.isView(body)) {
		// body is ArrayBufferView
		return null;
	} else if (typeof body.getBoundary === 'function') {
		// detect form data input from form-data module
		return `multipart/form-data;boundary=${body.getBoundary()}`;
	} else if (body instanceof Stream) {
		// body is stream
		// can't really do much about this
		return null;
	} else {
		// Body constructor defaults other things to string
		return 'text/plain;charset=UTF-8';
	}
}

/**
 * The Fetch Standard treats this as if "total bytes" is a property on the body.
 * For us, we have to explicitly get it with a function.
 *
 * ref: https://fetch.spec.whatwg.org/#concept-body-total-bytes
 *
 * @param   Body    instance   Instance of Body
 * @return  Number?            Number of bytes, or null if not possible
 */
function getTotalBytes(instance) {
	const body = instance.body;


	if (body === null) {
		// body is null
		return 0;
	} else if (isBlob(body)) {
		return body.size;
	} else if (Buffer.isBuffer(body)) {
		// body is buffer
		return body.length;
	} else if (body && typeof body.getLengthSync === 'function') {
		// detect form data input from form-data module
		if (body._lengthRetrievers && body._lengthRetrievers.length == 0 || // 1.x
		body.hasKnownLength && body.hasKnownLength()) {
			// 2.x
			return body.getLengthSync();
		}
		return null;
	} else {
		// body is stream
		return null;
	}
}

/**
 * Write a Body to a Node.js WritableStream (e.g. http.Request) object.
 *
 * @param   Body    instance   Instance of Body
 * @return  Void
 */
function writeToStream(dest, instance) {
	const body = instance.body;


	if (body === null) {
		// body is null
		dest.end();
	} else if (isBlob(body)) {
		body.stream().pipe(dest);
	} else if (Buffer.isBuffer(body)) {
		// body is buffer
		dest.write(body);
		dest.end();
	} else {
		// body is stream
		body.pipe(dest);
	}
}

// expose Promise
Body.Promise = global.Promise;

/**
 * headers.js
 *
 * Headers class offers convenient helpers
 */

const invalidTokenRegex = /[^\^_`a-zA-Z\-0-9!#$%&'*+.|~]/;
const invalidHeaderCharRegex = /[^\t\x20-\x7e\x80-\xff]/;

function validateName(name) {
	name = `${name}`;
	if (invalidTokenRegex.test(name) || name === '') {
		throw new TypeError(`${name} is not a legal HTTP header name`);
	}
}

function validateValue(value) {
	value = `${value}`;
	if (invalidHeaderCharRegex.test(value)) {
		throw new TypeError(`${value} is not a legal HTTP header value`);
	}
}

/**
 * Find the key in the map object given a header name.
 *
 * Returns undefined if not found.
 *
 * @param   String  name  Header name
 * @return  String|Undefined
 */
function find(map, name) {
	name = name.toLowerCase();
	for (const key in map) {
		if (key.toLowerCase() === name) {
			return key;
		}
	}
	return undefined;
}

const MAP = Symbol('map');
class Headers {
	/**
  * Headers class
  *
  * @param   Object  headers  Response headers
  * @return  Void
  */
	constructor() {
		let init = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

		this[MAP] = Object.create(null);

		if (init instanceof Headers) {
			const rawHeaders = init.raw();
			const headerNames = Object.keys(rawHeaders);

			for (const headerName of headerNames) {
				for (const value of rawHeaders[headerName]) {
					this.append(headerName, value);
				}
			}

			return;
		}

		// We don't worry about converting prop to ByteString here as append()
		// will handle it.
		if (init == null) ; else if (typeof init === 'object') {
			const method = init[Symbol.iterator];
			if (method != null) {
				if (typeof method !== 'function') {
					throw new TypeError('Header pairs must be iterable');
				}

				// sequence<sequence<ByteString>>
				// Note: per spec we have to first exhaust the lists then process them
				const pairs = [];
				for (const pair of init) {
					if (typeof pair !== 'object' || typeof pair[Symbol.iterator] !== 'function') {
						throw new TypeError('Each header pair must be iterable');
					}
					pairs.push(Array.from(pair));
				}

				for (const pair of pairs) {
					if (pair.length !== 2) {
						throw new TypeError('Each header pair must be a name/value tuple');
					}
					this.append(pair[0], pair[1]);
				}
			} else {
				// record<ByteString, ByteString>
				for (const key of Object.keys(init)) {
					const value = init[key];
					this.append(key, value);
				}
			}
		} else {
			throw new TypeError('Provided initializer must be an object');
		}
	}

	/**
  * Return combined header value given name
  *
  * @param   String  name  Header name
  * @return  Mixed
  */
	get(name) {
		name = `${name}`;
		validateName(name);
		const key = find(this[MAP], name);
		if (key === undefined) {
			return null;
		}

		return this[MAP][key].join(', ');
	}

	/**
  * Iterate over all headers
  *
  * @param   Function  callback  Executed for each item with parameters (value, name, thisArg)
  * @param   Boolean   thisArg   `this` context for callback function
  * @return  Void
  */
	forEach(callback) {
		let thisArg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

		let pairs = getHeaders(this);
		let i = 0;
		while (i < pairs.length) {
			var _pairs$i = pairs[i];
			const name = _pairs$i[0],
			      value = _pairs$i[1];

			callback.call(thisArg, value, name, this);
			pairs = getHeaders(this);
			i++;
		}
	}

	/**
  * Overwrite header values given name
  *
  * @param   String  name   Header name
  * @param   String  value  Header value
  * @return  Void
  */
	set(name, value) {
		name = `${name}`;
		value = `${value}`;
		validateName(name);
		validateValue(value);
		const key = find(this[MAP], name);
		this[MAP][key !== undefined ? key : name] = [value];
	}

	/**
  * Append a value onto existing header
  *
  * @param   String  name   Header name
  * @param   String  value  Header value
  * @return  Void
  */
	append(name, value) {
		name = `${name}`;
		value = `${value}`;
		validateName(name);
		validateValue(value);
		const key = find(this[MAP], name);
		if (key !== undefined) {
			this[MAP][key].push(value);
		} else {
			this[MAP][name] = [value];
		}
	}

	/**
  * Check for header name existence
  *
  * @param   String   name  Header name
  * @return  Boolean
  */
	has(name) {
		name = `${name}`;
		validateName(name);
		return find(this[MAP], name) !== undefined;
	}

	/**
  * Delete all header values given name
  *
  * @param   String  name  Header name
  * @return  Void
  */
	delete(name) {
		name = `${name}`;
		validateName(name);
		const key = find(this[MAP], name);
		if (key !== undefined) {
			delete this[MAP][key];
		}
	}

	/**
  * Return raw headers (non-spec api)
  *
  * @return  Object
  */
	raw() {
		return this[MAP];
	}

	/**
  * Get an iterator on keys.
  *
  * @return  Iterator
  */
	keys() {
		return createHeadersIterator(this, 'key');
	}

	/**
  * Get an iterator on values.
  *
  * @return  Iterator
  */
	values() {
		return createHeadersIterator(this, 'value');
	}

	/**
  * Get an iterator on entries.
  *
  * This is the default iterator of the Headers object.
  *
  * @return  Iterator
  */
	[Symbol.iterator]() {
		return createHeadersIterator(this, 'key+value');
	}
}
Headers.prototype.entries = Headers.prototype[Symbol.iterator];

Object.defineProperty(Headers.prototype, Symbol.toStringTag, {
	value: 'Headers',
	writable: false,
	enumerable: false,
	configurable: true
});

Object.defineProperties(Headers.prototype, {
	get: { enumerable: true },
	forEach: { enumerable: true },
	set: { enumerable: true },
	append: { enumerable: true },
	has: { enumerable: true },
	delete: { enumerable: true },
	keys: { enumerable: true },
	values: { enumerable: true },
	entries: { enumerable: true }
});

function getHeaders(headers) {
	let kind = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'key+value';

	const keys = Object.keys(headers[MAP]).sort();
	return keys.map(kind === 'key' ? function (k) {
		return k.toLowerCase();
	} : kind === 'value' ? function (k) {
		return headers[MAP][k].join(', ');
	} : function (k) {
		return [k.toLowerCase(), headers[MAP][k].join(', ')];
	});
}

const INTERNAL = Symbol('internal');

function createHeadersIterator(target, kind) {
	const iterator = Object.create(HeadersIteratorPrototype);
	iterator[INTERNAL] = {
		target,
		kind,
		index: 0
	};
	return iterator;
}

const HeadersIteratorPrototype = Object.setPrototypeOf({
	next() {
		// istanbul ignore if
		if (!this || Object.getPrototypeOf(this) !== HeadersIteratorPrototype) {
			throw new TypeError('Value of `this` is not a HeadersIterator');
		}

		var _INTERNAL = this[INTERNAL];
		const target = _INTERNAL.target,
		      kind = _INTERNAL.kind,
		      index = _INTERNAL.index;

		const values = getHeaders(target, kind);
		const len = values.length;
		if (index >= len) {
			return {
				value: undefined,
				done: true
			};
		}

		this[INTERNAL].index = index + 1;

		return {
			value: values[index],
			done: false
		};
	}
}, Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]())));

Object.defineProperty(HeadersIteratorPrototype, Symbol.toStringTag, {
	value: 'HeadersIterator',
	writable: false,
	enumerable: false,
	configurable: true
});

/**
 * Export the Headers object in a form that Node.js can consume.
 *
 * @param   Headers  headers
 * @return  Object
 */
function exportNodeCompatibleHeaders(headers) {
	const obj = Object.assign({ __proto__: null }, headers[MAP]);

	// http.request() only supports string as Host header. This hack makes
	// specifying custom Host header possible.
	const hostHeaderKey = find(headers[MAP], 'Host');
	if (hostHeaderKey !== undefined) {
		obj[hostHeaderKey] = obj[hostHeaderKey][0];
	}

	return obj;
}

/**
 * Create a Headers object from an object of headers, ignoring those that do
 * not conform to HTTP grammar productions.
 *
 * @param   Object  obj  Object of headers
 * @return  Headers
 */
function createHeadersLenient(obj) {
	const headers = new Headers();
	for (const name of Object.keys(obj)) {
		if (invalidTokenRegex.test(name)) {
			continue;
		}
		if (Array.isArray(obj[name])) {
			for (const val of obj[name]) {
				if (invalidHeaderCharRegex.test(val)) {
					continue;
				}
				if (headers[MAP][name] === undefined) {
					headers[MAP][name] = [val];
				} else {
					headers[MAP][name].push(val);
				}
			}
		} else if (!invalidHeaderCharRegex.test(obj[name])) {
			headers[MAP][name] = [obj[name]];
		}
	}
	return headers;
}

const INTERNALS$1 = Symbol('Response internals');

// fix an issue where "STATUS_CODES" aren't a named export for node <10
const STATUS_CODES = http.STATUS_CODES;

/**
 * Response class
 *
 * @param   Stream  body  Readable stream
 * @param   Object  opts  Response options
 * @return  Void
 */
class Response {
	constructor() {
		let body = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
		let opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		Body.call(this, body, opts);

		const status = opts.status || 200;
		const headers = new Headers(opts.headers);

		if (body != null && !headers.has('Content-Type')) {
			const contentType = extractContentType(body);
			if (contentType) {
				headers.append('Content-Type', contentType);
			}
		}

		this[INTERNALS$1] = {
			url: opts.url,
			status,
			statusText: opts.statusText || STATUS_CODES[status],
			headers,
			counter: opts.counter
		};
	}

	get url() {
		return this[INTERNALS$1].url || '';
	}

	get status() {
		return this[INTERNALS$1].status;
	}

	/**
  * Convenience property representing if the request ended normally
  */
	get ok() {
		return this[INTERNALS$1].status >= 200 && this[INTERNALS$1].status < 300;
	}

	get redirected() {
		return this[INTERNALS$1].counter > 0;
	}

	get statusText() {
		return this[INTERNALS$1].statusText;
	}

	get headers() {
		return this[INTERNALS$1].headers;
	}

	/**
  * Clone this response
  *
  * @return  Response
  */
	clone() {
		return new Response(clone(this), {
			url: this.url,
			status: this.status,
			statusText: this.statusText,
			headers: this.headers,
			ok: this.ok,
			redirected: this.redirected
		});
	}
}

Body.mixIn(Response.prototype);

Object.defineProperties(Response.prototype, {
	url: { enumerable: true },
	status: { enumerable: true },
	ok: { enumerable: true },
	redirected: { enumerable: true },
	statusText: { enumerable: true },
	headers: { enumerable: true },
	clone: { enumerable: true }
});

Object.defineProperty(Response.prototype, Symbol.toStringTag, {
	value: 'Response',
	writable: false,
	enumerable: false,
	configurable: true
});

const INTERNALS$2 = Symbol('Request internals');

// fix an issue where "format", "parse" aren't a named export for node <10
const parse_url = Url.parse;
const format_url = Url.format;

const streamDestructionSupported = 'destroy' in Stream.Readable.prototype;

/**
 * Check if a value is an instance of Request.
 *
 * @param   Mixed   input
 * @return  Boolean
 */
function isRequest(input) {
	return typeof input === 'object' && typeof input[INTERNALS$2] === 'object';
}

function isAbortSignal(signal) {
	const proto = signal && typeof signal === 'object' && Object.getPrototypeOf(signal);
	return !!(proto && proto.constructor.name === 'AbortSignal');
}

/**
 * Request class
 *
 * @param   Mixed   input  Url or Request instance
 * @param   Object  init   Custom options
 * @return  Void
 */
class Request {
	constructor(input) {
		let init = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		let parsedURL;

		// normalize input
		if (!isRequest(input)) {
			if (input && input.href) {
				// in order to support Node.js' Url objects; though WHATWG's URL objects
				// will fall into this branch also (since their `toString()` will return
				// `href` property anyway)
				parsedURL = parse_url(input.href);
			} else {
				// coerce input to a string before attempting to parse
				parsedURL = parse_url(`${input}`);
			}
			input = {};
		} else {
			parsedURL = parse_url(input.url);
		}

		let method = init.method || input.method || 'GET';
		method = method.toUpperCase();

		if ((init.body != null || isRequest(input) && input.body !== null) && (method === 'GET' || method === 'HEAD')) {
			throw new TypeError('Request with GET/HEAD method cannot have body');
		}

		let inputBody = init.body != null ? init.body : isRequest(input) && input.body !== null ? clone(input) : null;

		Body.call(this, inputBody, {
			timeout: init.timeout || input.timeout || 0,
			size: init.size || input.size || 0
		});

		const headers = new Headers(init.headers || input.headers || {});

		if (inputBody != null && !headers.has('Content-Type')) {
			const contentType = extractContentType(inputBody);
			if (contentType) {
				headers.append('Content-Type', contentType);
			}
		}

		let signal = isRequest(input) ? input.signal : null;
		if ('signal' in init) signal = init.signal;

		if (signal != null && !isAbortSignal(signal)) {
			throw new TypeError('Expected signal to be an instanceof AbortSignal');
		}

		this[INTERNALS$2] = {
			method,
			redirect: init.redirect || input.redirect || 'follow',
			headers,
			parsedURL,
			signal
		};

		// node-fetch-only options
		this.follow = init.follow !== undefined ? init.follow : input.follow !== undefined ? input.follow : 20;
		this.compress = init.compress !== undefined ? init.compress : input.compress !== undefined ? input.compress : true;
		this.counter = init.counter || input.counter || 0;
		this.agent = init.agent || input.agent;
	}

	get method() {
		return this[INTERNALS$2].method;
	}

	get url() {
		return format_url(this[INTERNALS$2].parsedURL);
	}

	get headers() {
		return this[INTERNALS$2].headers;
	}

	get redirect() {
		return this[INTERNALS$2].redirect;
	}

	get signal() {
		return this[INTERNALS$2].signal;
	}

	/**
  * Clone this request
  *
  * @return  Request
  */
	clone() {
		return new Request(this);
	}
}

Body.mixIn(Request.prototype);

Object.defineProperty(Request.prototype, Symbol.toStringTag, {
	value: 'Request',
	writable: false,
	enumerable: false,
	configurable: true
});

Object.defineProperties(Request.prototype, {
	method: { enumerable: true },
	url: { enumerable: true },
	headers: { enumerable: true },
	redirect: { enumerable: true },
	clone: { enumerable: true },
	signal: { enumerable: true }
});

/**
 * Convert a Request to Node.js http request options.
 *
 * @param   Request  A Request instance
 * @return  Object   The options object to be passed to http.request
 */
function getNodeRequestOptions(request) {
	const parsedURL = request[INTERNALS$2].parsedURL;
	const headers = new Headers(request[INTERNALS$2].headers);

	// fetch step 1.3
	if (!headers.has('Accept')) {
		headers.set('Accept', '*/*');
	}

	// Basic fetch
	if (!parsedURL.protocol || !parsedURL.hostname) {
		throw new TypeError('Only absolute URLs are supported');
	}

	if (!/^https?:$/.test(parsedURL.protocol)) {
		throw new TypeError('Only HTTP(S) protocols are supported');
	}

	if (request.signal && request.body instanceof Stream.Readable && !streamDestructionSupported) {
		throw new Error('Cancellation of streamed requests with AbortSignal is not supported in node < 8');
	}

	// HTTP-network-or-cache fetch steps 2.4-2.7
	let contentLengthValue = null;
	if (request.body == null && /^(POST|PUT)$/i.test(request.method)) {
		contentLengthValue = '0';
	}
	if (request.body != null) {
		const totalBytes = getTotalBytes(request);
		if (typeof totalBytes === 'number') {
			contentLengthValue = String(totalBytes);
		}
	}
	if (contentLengthValue) {
		headers.set('Content-Length', contentLengthValue);
	}

	// HTTP-network-or-cache fetch step 2.11
	if (!headers.has('User-Agent')) {
		headers.set('User-Agent', 'node-fetch/1.0 (+https://github.com/bitinn/node-fetch)');
	}

	// HTTP-network-or-cache fetch step 2.15
	if (request.compress && !headers.has('Accept-Encoding')) {
		headers.set('Accept-Encoding', 'gzip,deflate');
	}

	let agent = request.agent;
	if (typeof agent === 'function') {
		agent = agent(parsedURL);
	}

	if (!headers.has('Connection') && !agent) {
		headers.set('Connection', 'close');
	}

	// HTTP-network fetch step 4.2
	// chunked encoding is handled by Node.js

	return Object.assign({}, parsedURL, {
		method: request.method,
		headers: exportNodeCompatibleHeaders(headers),
		agent
	});
}

/**
 * abort-error.js
 *
 * AbortError interface for cancelled requests
 */

/**
 * Create AbortError instance
 *
 * @param   String      message      Error message for human
 * @return  AbortError
 */
function AbortError(message) {
  Error.call(this, message);

  this.type = 'aborted';
  this.message = message;

  // hide custom error implementation details from end-users
  Error.captureStackTrace(this, this.constructor);
}

AbortError.prototype = Object.create(Error.prototype);
AbortError.prototype.constructor = AbortError;
AbortError.prototype.name = 'AbortError';

// fix an issue where "PassThrough", "resolve" aren't a named export for node <10
const PassThrough$1 = Stream.PassThrough;
const resolve_url = Url.resolve;

/**
 * Fetch function
 *
 * @param   Mixed    url   Absolute url or Request instance
 * @param   Object   opts  Fetch options
 * @return  Promise
 */
function fetch(url, opts) {

	// allow custom promise
	if (!fetch.Promise) {
		throw new Error('native promise missing, set fetch.Promise to your favorite alternative');
	}

	Body.Promise = fetch.Promise;

	// wrap http.request into fetch
	return new fetch.Promise(function (resolve, reject) {
		// build request object
		const request = new Request(url, opts);
		const options = getNodeRequestOptions(request);

		const send = (options.protocol === 'https:' ? https : http).request;
		const signal = request.signal;

		let response = null;

		const abort = function abort() {
			let error = new AbortError('The user aborted a request.');
			reject(error);
			if (request.body && request.body instanceof Stream.Readable) {
				request.body.destroy(error);
			}
			if (!response || !response.body) return;
			response.body.emit('error', error);
		};

		if (signal && signal.aborted) {
			abort();
			return;
		}

		const abortAndFinalize = function abortAndFinalize() {
			abort();
			finalize();
		};

		// send request
		const req = send(options);
		let reqTimeout;

		if (signal) {
			signal.addEventListener('abort', abortAndFinalize);
		}

		function finalize() {
			req.abort();
			if (signal) signal.removeEventListener('abort', abortAndFinalize);
			clearTimeout(reqTimeout);
		}

		if (request.timeout) {
			req.once('socket', function (socket) {
				reqTimeout = setTimeout(function () {
					reject(new FetchError(`network timeout at: ${request.url}`, 'request-timeout'));
					finalize();
				}, request.timeout);
			});
		}

		req.on('error', function (err) {
			reject(new FetchError(`request to ${request.url} failed, reason: ${err.message}`, 'system', err));
			finalize();
		});

		req.on('response', function (res) {
			clearTimeout(reqTimeout);

			const headers = createHeadersLenient(res.headers);

			// HTTP fetch step 5
			if (fetch.isRedirect(res.statusCode)) {
				// HTTP fetch step 5.2
				const location = headers.get('Location');

				// HTTP fetch step 5.3
				const locationURL = location === null ? null : resolve_url(request.url, location);

				// HTTP fetch step 5.5
				switch (request.redirect) {
					case 'error':
						reject(new FetchError(`uri requested responds with a redirect, redirect mode is set to error: ${request.url}`, 'no-redirect'));
						finalize();
						return;
					case 'manual':
						// node-fetch-specific step: make manual redirect a bit easier to use by setting the Location header value to the resolved URL.
						if (locationURL !== null) {
							// handle corrupted header
							try {
								headers.set('Location', locationURL);
							} catch (err) {
								// istanbul ignore next: nodejs server prevent invalid response headers, we can't test this through normal request
								reject(err);
							}
						}
						break;
					case 'follow':
						// HTTP-redirect fetch step 2
						if (locationURL === null) {
							break;
						}

						// HTTP-redirect fetch step 5
						if (request.counter >= request.follow) {
							reject(new FetchError(`maximum redirect reached at: ${request.url}`, 'max-redirect'));
							finalize();
							return;
						}

						// HTTP-redirect fetch step 6 (counter increment)
						// Create a new Request object.
						const requestOpts = {
							headers: new Headers(request.headers),
							follow: request.follow,
							counter: request.counter + 1,
							agent: request.agent,
							compress: request.compress,
							method: request.method,
							body: request.body,
							signal: request.signal,
							timeout: request.timeout,
							size: request.size
						};

						// HTTP-redirect fetch step 9
						if (res.statusCode !== 303 && request.body && getTotalBytes(request) === null) {
							reject(new FetchError('Cannot follow redirect with body being a readable stream', 'unsupported-redirect'));
							finalize();
							return;
						}

						// HTTP-redirect fetch step 11
						if (res.statusCode === 303 || (res.statusCode === 301 || res.statusCode === 302) && request.method === 'POST') {
							requestOpts.method = 'GET';
							requestOpts.body = undefined;
							requestOpts.headers.delete('content-length');
						}

						// HTTP-redirect fetch step 15
						resolve(fetch(new Request(locationURL, requestOpts)));
						finalize();
						return;
				}
			}

			// prepare response
			res.once('end', function () {
				if (signal) signal.removeEventListener('abort', abortAndFinalize);
			});
			let body = res.pipe(new PassThrough$1());

			const response_options = {
				url: request.url,
				status: res.statusCode,
				statusText: res.statusMessage,
				headers: headers,
				size: request.size,
				timeout: request.timeout,
				counter: request.counter
			};

			// HTTP-network fetch step 12.1.1.3
			const codings = headers.get('Content-Encoding');

			// HTTP-network fetch step 12.1.1.4: handle content codings

			// in following scenarios we ignore compression support
			// 1. compression support is disabled
			// 2. HEAD request
			// 3. no Content-Encoding header
			// 4. no content response (204)
			// 5. content not modified response (304)
			if (!request.compress || request.method === 'HEAD' || codings === null || res.statusCode === 204 || res.statusCode === 304) {
				response = new Response(body, response_options);
				resolve(response);
				return;
			}

			// For Node v6+
			// Be less strict when decoding compressed responses, since sometimes
			// servers send slightly invalid responses that are still accepted
			// by common browsers.
			// Always using Z_SYNC_FLUSH is what cURL does.
			const zlibOptions = {
				flush: zlib.Z_SYNC_FLUSH,
				finishFlush: zlib.Z_SYNC_FLUSH
			};

			// for gzip
			if (codings == 'gzip' || codings == 'x-gzip') {
				body = body.pipe(zlib.createGunzip(zlibOptions));
				response = new Response(body, response_options);
				resolve(response);
				return;
			}

			// for deflate
			if (codings == 'deflate' || codings == 'x-deflate') {
				// handle the infamous raw deflate response from old servers
				// a hack for old IIS and Apache servers
				const raw = res.pipe(new PassThrough$1());
				raw.once('data', function (chunk) {
					// see http://stackoverflow.com/questions/37519828
					if ((chunk[0] & 0x0F) === 0x08) {
						body = body.pipe(zlib.createInflate());
					} else {
						body = body.pipe(zlib.createInflateRaw());
					}
					response = new Response(body, response_options);
					resolve(response);
				});
				return;
			}

			// for br
			if (codings == 'br' && typeof zlib.createBrotliDecompress === 'function') {
				body = body.pipe(zlib.createBrotliDecompress());
				response = new Response(body, response_options);
				resolve(response);
				return;
			}

			// otherwise, use response as-is
			response = new Response(body, response_options);
			resolve(response);
		});

		writeToStream(req, request);
	});
}
/**
 * Redirect code matching
 *
 * @param   Number   code  Status code
 * @return  Boolean
 */
fetch.isRedirect = function (code) {
	return code === 301 || code === 302 || code === 303 || code === 307 || code === 308;
};

// expose Promise
fetch.Promise = global.Promise;

module.exports = exports = fetch;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = exports;
exports.Headers = Headers;
exports.Request = Request;
exports.Response = Response;
exports.FetchError = FetchError;


/***/ }),

/***/ 6883:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";

const path = __nccwpck_require__(6928);
const pathKey = __nccwpck_require__(9510);

module.exports = opts => {
	opts = Object.assign({
		cwd: process.cwd(),
		path: process.env[pathKey()]
	}, opts);

	let prev;
	let pth = path.resolve(opts.cwd);
	const ret = [];

	while (prev !== pth) {
		ret.push(path.join(pth, 'node_modules/.bin'));
		prev = pth;
		pth = path.resolve(pth, '..');
	}

	// ensure the running `node` binary is used
	ret.push(path.dirname(process.execPath));

	return ret.concat(opts.path).join(path.delimiter);
};

module.exports.env = opts => {
	opts = Object.assign({
		env: process.env
	}, opts);

	const env = Object.assign({}, opts.env);
	const path = pathKey({env});

	opts.path = env[path];
	env[path] = module.exports(opts);

	return env;
};


/***/ }),

/***/ 9510:
/***/ ((module) => {

"use strict";

module.exports = opts => {
	opts = opts || {};

	const env = opts.env || process.env;
	const platform = opts.platform || process.platform;

	if (platform !== 'win32') {
		return 'PATH';
	}

	return Object.keys(env).find(x => x.toUpperCase() === 'PATH') || 'Path';
};


/***/ }),

/***/ 4035:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

module.exports = paginationMethodsPlugin

function paginationMethodsPlugin (octokit) {
  octokit.getFirstPage = (__nccwpck_require__(4350).bind)(null, octokit)
  octokit.getLastPage = (__nccwpck_require__(5418).bind)(null, octokit)
  octokit.getNextPage = (__nccwpck_require__(9209).bind)(null, octokit)
  octokit.getPreviousPage = (__nccwpck_require__(4069).bind)(null, octokit)
  octokit.hasFirstPage = __nccwpck_require__(5746)
  octokit.hasLastPage = __nccwpck_require__(1094)
  octokit.hasNextPage = __nccwpck_require__(8237)
  octokit.hasPreviousPage = __nccwpck_require__(3697)
}


/***/ }),

/***/ 6308:
/***/ ((module) => {

module.exports = deprecate

const loggedMessages = {}

function deprecate (message) {
  if (loggedMessages[message]) {
    return
  }

  console.warn(`DEPRECATED (@octokit/rest): ${message}`)
  loggedMessages[message] = 1
}


/***/ }),

/***/ 4350:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

module.exports = getFirstPage

const getPage = __nccwpck_require__(519)

function getFirstPage (octokit, link, headers) {
  return getPage(octokit, link, 'first', headers)
}


/***/ }),

/***/ 5418:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

module.exports = getLastPage

const getPage = __nccwpck_require__(519)

function getLastPage (octokit, link, headers) {
  return getPage(octokit, link, 'last', headers)
}


/***/ }),

/***/ 9209:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

module.exports = getNextPage

const getPage = __nccwpck_require__(519)

function getNextPage (octokit, link, headers) {
  return getPage(octokit, link, 'next', headers)
}


/***/ }),

/***/ 7111:
/***/ ((module) => {

module.exports = getPageLinks

function getPageLinks (link) {
  link = link.link || link.headers.link || ''

  const links = {}

  // link format:
  // '<https://api.github.com/users/aseemk/followers?page=2>; rel="next", <https://api.github.com/users/aseemk/followers?page=2>; rel="last"'
  link.replace(/<([^>]*)>;\s*rel="([\w]*)"/g, (m, uri, type) => {
    links[type] = uri
  })

  return links
}


/***/ }),

/***/ 519:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

module.exports = getPage

const deprecate = __nccwpck_require__(6308)
const getPageLinks = __nccwpck_require__(7111)
const HttpError = __nccwpck_require__(6620)

function getPage (octokit, link, which, headers) {
  deprecate(`octokit.get${which.charAt(0).toUpperCase() + which.slice(1)}Page() – You can use octokit.paginate or async iterators instead: https://github.com/octokit/rest.js#pagination.`)
  const url = getPageLinks(link)[which]

  if (!url) {
    const urlError = new HttpError(`No ${which} page found`, 404)
    return Promise.reject(urlError)
  }

  const requestOptions = {
    url,
    headers: applyAcceptHeader(link, headers)
  }

  const promise = octokit.request(requestOptions)

  return promise
}

function applyAcceptHeader (res, headers) {
  const previous = res.headers && res.headers['x-github-media-type']

  if (!previous || (headers && headers.accept)) {
    return headers
  }
  headers = headers || {}
  headers.accept = 'application/vnd.' + previous
    .replace('; param=', '.')
    .replace('; format=', '+')

  return headers
}


/***/ }),

/***/ 4069:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

module.exports = getPreviousPage

const getPage = __nccwpck_require__(519)

function getPreviousPage (octokit, link, headers) {
  return getPage(octokit, link, 'prev', headers)
}


/***/ }),

/***/ 5746:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

module.exports = hasFirstPage

const deprecate = __nccwpck_require__(6308)
const getPageLinks = __nccwpck_require__(7111)

function hasFirstPage (link) {
  deprecate(`octokit.hasFirstPage() – You can use octokit.paginate or async iterators instead: https://github.com/octokit/rest.js#pagination.`)
  return getPageLinks(link).first
}


/***/ }),

/***/ 1094:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

module.exports = hasLastPage

const deprecate = __nccwpck_require__(6308)
const getPageLinks = __nccwpck_require__(7111)

function hasLastPage (link) {
  deprecate(`octokit.hasLastPage() – You can use octokit.paginate or async iterators instead: https://github.com/octokit/rest.js#pagination.`)
  return getPageLinks(link).last
}


/***/ }),

/***/ 8237:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

module.exports = hasNextPage

const deprecate = __nccwpck_require__(6308)
const getPageLinks = __nccwpck_require__(7111)

function hasNextPage (link) {
  deprecate(`octokit.hasNextPage() – You can use octokit.paginate or async iterators instead: https://github.com/octokit/rest.js#pagination.`)
  return getPageLinks(link).next
}


/***/ }),

/***/ 3697:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

module.exports = hasPreviousPage

const deprecate = __nccwpck_require__(6308)
const getPageLinks = __nccwpck_require__(7111)

function hasPreviousPage (link) {
  deprecate(`octokit.hasPreviousPage() – You can use octokit.paginate or async iterators instead: https://github.com/octokit/rest.js#pagination.`)
  return getPageLinks(link).prev
}


/***/ }),

/***/ 6620:
/***/ ((module) => {

module.exports = class HttpError extends Error {
  constructor (message, code, headers) {
    super(message)

    // Maintains proper stack trace (only available on V8)
    /* istanbul ignore next */
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor)
    }

    this.name = 'HttpError'
    this.code = code
    this.headers = headers
  }
}


/***/ }),

/***/ 5560:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var wrappy = __nccwpck_require__(8264)
module.exports = wrappy(once)
module.exports.strict = wrappy(onceStrict)

once.proto = once(function () {
  Object.defineProperty(Function.prototype, 'once', {
    value: function () {
      return once(this)
    },
    configurable: true
  })

  Object.defineProperty(Function.prototype, 'onceStrict', {
    value: function () {
      return onceStrict(this)
    },
    configurable: true
  })
})

function once (fn) {
  var f = function () {
    if (f.called) return f.value
    f.called = true
    return f.value = fn.apply(this, arguments)
  }
  f.called = false
  return f
}

function onceStrict (fn) {
  var f = function () {
    if (f.called)
      throw new Error(f.onceError)
    f.called = true
    return f.value = fn.apply(this, arguments)
  }
  var name = fn.name || 'Function wrapped with `once`'
  f.onceError = name + " shouldn't be called more than once"
  f.called = false
  return f
}


/***/ }),

/***/ 5254:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";

const os = __nccwpck_require__(857);
const macosRelease = __nccwpck_require__(6609);
const winRelease = __nccwpck_require__(1497);

const osName = (platform, release) => {
	if (!platform && release) {
		throw new Error('You can\'t specify a `release` without specifying `platform`');
	}

	platform = platform || os.platform();

	let id;

	if (platform === 'darwin') {
		if (!release && os.platform() === 'darwin') {
			release = os.release();
		}

		const prefix = release ? (Number(release.split('.')[0]) > 15 ? 'macOS' : 'OS X') : 'macOS';
		id = release ? macosRelease(release).name : '';
		return prefix + (id ? ' ' + id : '');
	}

	if (platform === 'linux') {
		if (!release && os.platform() === 'linux') {
			release = os.release();
		}

		id = release ? release.replace(/^(\d+\.\d+).*/, '$1') : '';
		return 'Linux' + (id ? ' ' + id : '');
	}

	if (platform === 'win32') {
		if (!release && os.platform() === 'win32') {
			release = os.release();
		}

		id = release ? winRelease(release) : '';
		return 'Windows' + (id ? ' ' + id : '');
	}

	return platform;
};

module.exports = osName;


/***/ }),

/***/ 2766:
/***/ ((module) => {

"use strict";

module.exports = (promise, onFinally) => {
	onFinally = onFinally || (() => {});

	return promise.then(
		val => new Promise(resolve => {
			resolve(onFinally());
		}).then(() => val),
		err => new Promise(resolve => {
			resolve(onFinally());
		}).then(() => {
			throw err;
		})
	);
};


/***/ }),

/***/ 7898:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var once = __nccwpck_require__(5560)
var eos = __nccwpck_require__(1424)
var fs = __nccwpck_require__(9896) // we only need fs to get the ReadStream and WriteStream prototypes

var noop = function () {}
var ancient = /^v?\.0/.test(process.version)

var isFn = function (fn) {
  return typeof fn === 'function'
}

var isFS = function (stream) {
  if (!ancient) return false // newer node version do not need to care about fs is a special way
  if (!fs) return false // browser
  return (stream instanceof (fs.ReadStream || noop) || stream instanceof (fs.WriteStream || noop)) && isFn(stream.close)
}

var isRequest = function (stream) {
  return stream.setHeader && isFn(stream.abort)
}

var destroyer = function (stream, reading, writing, callback) {
  callback = once(callback)

  var closed = false
  stream.on('close', function () {
    closed = true
  })

  eos(stream, {readable: reading, writable: writing}, function (err) {
    if (err) return callback(err)
    closed = true
    callback()
  })

  var destroyed = false
  return function (err) {
    if (closed) return
    if (destroyed) return
    destroyed = true

    if (isFS(stream)) return stream.close(noop) // use close for fs streams to avoid fd leaks
    if (isRequest(stream)) return stream.abort() // request.destroy just do .end - .abort is what we want

    if (isFn(stream.destroy)) return stream.destroy()

    callback(err || new Error('stream was destroyed'))
  }
}

var call = function (fn) {
  fn()
}

var pipe = function (from, to) {
  return from.pipe(to)
}

var pump = function () {
  var streams = Array.prototype.slice.call(arguments)
  var callback = isFn(streams[streams.length - 1] || noop) && streams.pop() || noop

  if (Array.isArray(streams[0])) streams = streams[0]
  if (streams.length < 2) throw new Error('pump requires two streams per minimum')

  var error
  var destroys = streams.map(function (stream, i) {
    var reading = i < streams.length - 1
    var writing = i > 0
    return destroyer(stream, reading, writing, function (err) {
      if (!error) error = err
      if (err) destroys.forEach(call)
      if (reading) return
      destroys.forEach(call)
      callback(error)
    })
  })

  return streams.reduce(pipe)
}

module.exports = pump


/***/ }),

/***/ 3799:
/***/ ((module) => {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; };
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) });

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: true });
  defineProperty(
    GeneratorFunctionPrototype,
    "constructor",
    { value: GeneratorFunction, configurable: true }
  );
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    defineProperty(this, "_invoke", { value: enqueue });
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var methodName = context.method;
    var method = delegate.iterator[methodName];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method, or a missing .next mehtod, always terminate the
      // yield* loop.
      context.delegate = null;

      // Note: ["return"] must be used for ES3 parsing compatibility.
      if (methodName === "throw" && delegate.iterator["return"]) {
        // If the delegate iterator has a return method, give it a
        // chance to clean up.
        context.method = "return";
        context.arg = undefined;
        maybeInvokeDelegate(delegate, context);

        if (context.method === "throw") {
          // If maybeInvokeDelegate(context) changed context.method from
          // "return" to "throw", let that override the TypeError below.
          return ContinueSentinel;
        }
      }
      if (methodName !== "return") {
        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a '" + methodName + "' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(val) {
    var object = Object(val);
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ 7334:
/***/ ((module) => {

"use strict";

module.exports = /^#!.*/;


/***/ }),

/***/ 7017:
/***/ ((module) => {

"use strict";

module.exports = function (x) {
	var lf = typeof x === 'string' ? '\n' : '\n'.charCodeAt();
	var cr = typeof x === 'string' ? '\r' : '\r'.charCodeAt();

	if (x[x.length - 1] === lf) {
		x = x.slice(0, x.length - 1);
	}

	if (x[x.length - 1] === cr) {
		x = x.slice(0, x.length - 1);
	}

	return x;
};


/***/ }),

/***/ 770:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

module.exports = __nccwpck_require__(218);


/***/ }),

/***/ 218:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


var net = __nccwpck_require__(9278);
var tls = __nccwpck_require__(4756);
var http = __nccwpck_require__(8611);
var https = __nccwpck_require__(5692);
var events = __nccwpck_require__(4434);
var assert = __nccwpck_require__(2613);
var util = __nccwpck_require__(9023);


exports.httpOverHttp = httpOverHttp;
exports.httpsOverHttp = httpsOverHttp;
exports.httpOverHttps = httpOverHttps;
exports.httpsOverHttps = httpsOverHttps;


function httpOverHttp(options) {
  var agent = new TunnelingAgent(options);
  agent.request = http.request;
  return agent;
}

function httpsOverHttp(options) {
  var agent = new TunnelingAgent(options);
  agent.request = http.request;
  agent.createSocket = createSecureSocket;
  agent.defaultPort = 443;
  return agent;
}

function httpOverHttps(options) {
  var agent = new TunnelingAgent(options);
  agent.request = https.request;
  return agent;
}

function httpsOverHttps(options) {
  var agent = new TunnelingAgent(options);
  agent.request = https.request;
  agent.createSocket = createSecureSocket;
  agent.defaultPort = 443;
  return agent;
}


function TunnelingAgent(options) {
  var self = this;
  self.options = options || {};
  self.proxyOptions = self.options.proxy || {};
  self.maxSockets = self.options.maxSockets || http.Agent.defaultMaxSockets;
  self.requests = [];
  self.sockets = [];

  self.on('free', function onFree(socket, host, port, localAddress) {
    var options = toOptions(host, port, localAddress);
    for (var i = 0, len = self.requests.length; i < len; ++i) {
      var pending = self.requests[i];
      if (pending.host === options.host && pending.port === options.port) {
        // Detect the request to connect same origin server,
        // reuse the connection.
        self.requests.splice(i, 1);
        pending.request.onSocket(socket);
        return;
      }
    }
    socket.destroy();
    self.removeSocket(socket);
  });
}
util.inherits(TunnelingAgent, events.EventEmitter);

TunnelingAgent.prototype.addRequest = function addRequest(req, host, port, localAddress) {
  var self = this;
  var options = mergeOptions({request: req}, self.options, toOptions(host, port, localAddress));

  if (self.sockets.length >= this.maxSockets) {
    // We are over limit so we'll add it to the queue.
    self.requests.push(options);
    return;
  }

  // If we are under maxSockets create a new one.
  self.createSocket(options, function(socket) {
    socket.on('free', onFree);
    socket.on('close', onCloseOrRemove);
    socket.on('agentRemove', onCloseOrRemove);
    req.onSocket(socket);

    function onFree() {
      self.emit('free', socket, options);
    }

    function onCloseOrRemove(err) {
      self.removeSocket(socket);
      socket.removeListener('free', onFree);
      socket.removeListener('close', onCloseOrRemove);
      socket.removeListener('agentRemove', onCloseOrRemove);
    }
  });
};

TunnelingAgent.prototype.createSocket = function createSocket(options, cb) {
  var self = this;
  var placeholder = {};
  self.sockets.push(placeholder);

  var connectOptions = mergeOptions({}, self.proxyOptions, {
    method: 'CONNECT',
    path: options.host + ':' + options.port,
    agent: false,
    headers: {
      host: options.host + ':' + options.port
    }
  });
  if (options.localAddress) {
    connectOptions.localAddress = options.localAddress;
  }
  if (connectOptions.proxyAuth) {
    connectOptions.headers = connectOptions.headers || {};
    connectOptions.headers['Proxy-Authorization'] = 'Basic ' +
        new Buffer(connectOptions.proxyAuth).toString('base64');
  }

  debug('making CONNECT request');
  var connectReq = self.request(connectOptions);
  connectReq.useChunkedEncodingByDefault = false; // for v0.6
  connectReq.once('response', onResponse); // for v0.6
  connectReq.once('upgrade', onUpgrade);   // for v0.6
  connectReq.once('connect', onConnect);   // for v0.7 or later
  connectReq.once('error', onError);
  connectReq.end();

  function onResponse(res) {
    // Very hacky. This is necessary to avoid http-parser leaks.
    res.upgrade = true;
  }

  function onUpgrade(res, socket, head) {
    // Hacky.
    process.nextTick(function() {
      onConnect(res, socket, head);
    });
  }

  function onConnect(res, socket, head) {
    connectReq.removeAllListeners();
    socket.removeAllListeners();

    if (res.statusCode !== 200) {
      debug('tunneling socket could not be established, statusCode=%d',
        res.statusCode);
      socket.destroy();
      var error = new Error('tunneling socket could not be established, ' +
        'statusCode=' + res.statusCode);
      error.code = 'ECONNRESET';
      options.request.emit('error', error);
      self.removeSocket(placeholder);
      return;
    }
    if (head.length > 0) {
      debug('got illegal response body from proxy');
      socket.destroy();
      var error = new Error('got illegal response body from proxy');
      error.code = 'ECONNRESET';
      options.request.emit('error', error);
      self.removeSocket(placeholder);
      return;
    }
    debug('tunneling connection has established');
    self.sockets[self.sockets.indexOf(placeholder)] = socket;
    return cb(socket);
  }

  function onError(cause) {
    connectReq.removeAllListeners();

    debug('tunneling socket could not be established, cause=%s\n',
          cause.message, cause.stack);
    var error = new Error('tunneling socket could not be established, ' +
                          'cause=' + cause.message);
    error.code = 'ECONNRESET';
    options.request.emit('error', error);
    self.removeSocket(placeholder);
  }
};

TunnelingAgent.prototype.removeSocket = function removeSocket(socket) {
  var pos = this.sockets.indexOf(socket)
  if (pos === -1) {
    return;
  }
  this.sockets.splice(pos, 1);

  var pending = this.requests.shift();
  if (pending) {
    // If we have pending requests and a socket gets closed a new one
    // needs to be created to take over in the pool for the one that closed.
    this.createSocket(pending, function(socket) {
      pending.request.onSocket(socket);
    });
  }
};

function createSecureSocket(options, cb) {
  var self = this;
  TunnelingAgent.prototype.createSocket.call(self, options, function(socket) {
    var hostHeader = options.request.getHeader('host');
    var tlsOptions = mergeOptions({}, self.options, {
      socket: socket,
      servername: hostHeader ? hostHeader.replace(/:.*$/, '') : options.host
    });

    // 0 is dummy port for v0.6
    var secureSocket = tls.connect(0, tlsOptions);
    self.sockets[self.sockets.indexOf(socket)] = secureSocket;
    cb(secureSocket);
  });
}


function toOptions(host, port, localAddress) {
  if (typeof host === 'string') { // since v0.10
    return {
      host: host,
      port: port,
      localAddress: localAddress
    };
  }
  return host; // for v0.11 or later
}

function mergeOptions(target) {
  for (var i = 1, len = arguments.length; i < len; ++i) {
    var overrides = arguments[i];
    if (typeof overrides === 'object') {
      var keys = Object.keys(overrides);
      for (var j = 0, keyLen = keys.length; j < keyLen; ++j) {
        var k = keys[j];
        if (overrides[k] !== undefined) {
          target[k] = overrides[k];
        }
      }
    }
  }
  return target;
}


var debug;
if (process.env.NODE_DEBUG && /\btunnel\b/.test(process.env.NODE_DEBUG)) {
  debug = function() {
    var args = Array.prototype.slice.call(arguments);
    if (typeof args[0] === 'string') {
      args[0] = 'TUNNEL: ' + args[0];
    } else {
      args.unshift('TUNNEL:');
    }
    console.error.apply(console, args);
  }
} else {
  debug = function() {};
}
exports.debug = debug; // for test


/***/ }),

/***/ 3843:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var osName = _interopDefault(__nccwpck_require__(5254));

function getUserAgent() {
  try {
    return `Node.js/${process.version.substr(1)} (${osName()}; ${process.arch})`;
  } catch (error) {
    if (/wmic os get Caption/.test(error.message)) {
      return "Windows <version undetectable>";
    }

    return "<environment undetectable>";
  }
}

exports.getUserAgent = getUserAgent;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 1497:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";

const os = __nccwpck_require__(857);
const execa = __nccwpck_require__(8204);

// Reference: https://www.gaijin.at/en/lstwinver.php
const names = new Map([
	['10.0', '10'],
	['6.3', '8.1'],
	['6.2', '8'],
	['6.1', '7'],
	['6.0', 'Vista'],
	['5.2', 'Server 2003'],
	['5.1', 'XP'],
	['5.0', '2000'],
	['4.9', 'ME'],
	['4.1', '98'],
	['4.0', '95']
]);

const windowsRelease = release => {
	const version = /\d+\.\d/.exec(release || os.release());

	if (release && !version) {
		throw new Error('`release` argument doesn\'t match `n.n`');
	}

	const ver = (version || [])[0];

	// Server 2008, 2012, 2016, and 2019 versions are ambiguous with desktop versions and must be detected at runtime.
	// If `release` is omitted or we're on a Windows system, and the version number is an ambiguous version
	// then use `wmic` to get the OS caption: https://msdn.microsoft.com/en-us/library/aa394531(v=vs.85).aspx
	// If `wmic` is obsoloete (later versions of Windows 10), use PowerShell instead.
	// If the resulting caption contains the year 2008, 2012, 2016 or 2019, it is a server version, so return a server OS name.
	if ((!release || release === os.release()) && ['6.1', '6.2', '6.3', '10.0'].includes(ver)) {
		let stdout;
		try {
			stdout = execa.sync('powershell', ['(Get-CimInstance -ClassName Win32_OperatingSystem).caption']).stdout || '';
		} catch (_) {
			stdout = execa.sync('wmic', ['os', 'get', 'Caption']).stdout || '';
		}

		const year = (stdout.match(/2008|2012|2016|2019/) || [])[0];

		if (year) {
			return `Server ${year}`;
		}
	}

	return names.get(ver);
};

module.exports = windowsRelease;


/***/ }),

/***/ 8264:
/***/ ((module) => {

// Returns a wrapper function that returns a wrapped callback
// The wrapper function should do some stuff, and return a
// presumably different callback function.
// This makes sure that own properties are retained, so that
// decorations and such are not lost along the way.
module.exports = wrappy
function wrappy (fn, cb) {
  if (fn && cb) return wrappy(fn)(cb)

  if (typeof fn !== 'function')
    throw new TypeError('need wrapper function')

  Object.keys(fn).forEach(function (k) {
    wrapper[k] = fn[k]
  })

  return wrapper

  function wrapper() {
    var args = new Array(arguments.length)
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i]
    }
    var ret = fn.apply(this, args)
    var cb = args[args.length-1]
    if (typeof ret === 'function' && ret !== cb) {
      Object.keys(cb).forEach(function (k) {
        ret[k] = cb[k]
      })
    }
    return ret
  }
}


/***/ }),

/***/ 2078:
/***/ ((module) => {

module.exports = eval("require")("encoding");


/***/ }),

/***/ 2613:
/***/ ((module) => {

"use strict";
module.exports = require("assert");

/***/ }),

/***/ 5317:
/***/ ((module) => {

"use strict";
module.exports = require("child_process");

/***/ }),

/***/ 6982:
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ 4434:
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ 9896:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 8611:
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ 5692:
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ 9278:
/***/ ((module) => {

"use strict";
module.exports = require("net");

/***/ }),

/***/ 8474:
/***/ ((module) => {

"use strict";
module.exports = require("node:events");

/***/ }),

/***/ 3024:
/***/ ((module) => {

"use strict";
module.exports = require("node:fs");

/***/ }),

/***/ 1455:
/***/ ((module) => {

"use strict";
module.exports = require("node:fs/promises");

/***/ }),

/***/ 6760:
/***/ ((module) => {

"use strict";
module.exports = require("node:path");

/***/ }),

/***/ 7075:
/***/ ((module) => {

"use strict";
module.exports = require("node:stream");

/***/ }),

/***/ 6193:
/***/ ((module) => {

"use strict";
module.exports = require("node:string_decoder");

/***/ }),

/***/ 3136:
/***/ ((module) => {

"use strict";
module.exports = require("node:url");

/***/ }),

/***/ 857:
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ 6928:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ 2203:
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ 3193:
/***/ ((module) => {

"use strict";
module.exports = require("string_decoder");

/***/ }),

/***/ 3557:
/***/ ((module) => {

"use strict";
module.exports = require("timers");

/***/ }),

/***/ 4756:
/***/ ((module) => {

"use strict";
module.exports = require("tls");

/***/ }),

/***/ 7016:
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ 9023:
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ 3106:
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ }),

/***/ 8941:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";
var R=(n,t)=>()=>(t||n((t={exports:{}}).exports,t),t.exports);var Ge=R(Y=>{"use strict";Object.defineProperty(Y,"__esModule",{value:!0});Y.range=Y.balanced=void 0;var Gs=(n,t,e)=>{let s=n instanceof RegExp?Ie(n,e):n,i=t instanceof RegExp?Ie(t,e):t,r=s!==null&&i!=null&&(0,Y.range)(s,i,e);return r&&{start:r[0],end:r[1],pre:e.slice(0,r[0]),body:e.slice(r[0]+s.length,r[1]),post:e.slice(r[1]+i.length)}};Y.balanced=Gs;var Ie=(n,t)=>{let e=t.match(n);return e?e[0]:null},zs=(n,t,e)=>{let s,i,r,h,o,a=e.indexOf(n),l=e.indexOf(t,a+1),f=a;if(a>=0&&l>0){if(n===t)return[a,l];for(s=[],r=e.length;f>=0&&!o;){if(f===a)s.push(f),a=e.indexOf(n,f+1);else if(s.length===1){let c=s.pop();c!==void 0&&(o=[c,l])}else i=s.pop(),i!==void 0&&i<r&&(r=i,h=l),l=e.indexOf(t,f+1);f=a<l&&a>=0?a:l}s.length&&h!==void 0&&(o=[r,h])}return o};Y.range=zs});var Ke=R(it=>{"use strict";Object.defineProperty(it,"__esModule",{value:!0});it.EXPANSION_MAX=void 0;it.expand=ei;var ze=Ge(),Ue="\0SLASH"+Math.random()+"\0",$e="\0OPEN"+Math.random()+"\0",ue="\0CLOSE"+Math.random()+"\0",qe="\0COMMA"+Math.random()+"\0",He="\0PERIOD"+Math.random()+"\0",Us=new RegExp(Ue,"g"),$s=new RegExp($e,"g"),qs=new RegExp(ue,"g"),Hs=new RegExp(qe,"g"),Vs=new RegExp(He,"g"),Ks=/\\\\/g,Xs=/\\{/g,Ys=/\\}/g,Js=/\\,/g,Zs=/\\./g;it.EXPANSION_MAX=1e5;function ce(n){return isNaN(n)?n.charCodeAt(0):parseInt(n,10)}function Qs(n){return n.replace(Ks,Ue).replace(Xs,$e).replace(Ys,ue).replace(Js,qe).replace(Zs,He)}function ti(n){return n.replace(Us,"\\").replace($s,"{").replace(qs,"}").replace(Hs,",").replace(Vs,".")}function Ve(n){if(!n)return[""];let t=[],e=(0,ze.balanced)("{","}",n);if(!e)return n.split(",");let{pre:s,body:i,post:r}=e,h=s.split(",");h[h.length-1]+="{"+i+"}";let o=Ve(r);return r.length&&(h[h.length-1]+=o.shift(),h.push.apply(h,o)),t.push.apply(t,h),t}function ei(n,t={}){if(!n)return[];let{max:e=it.EXPANSION_MAX}=t;return n.slice(0,2)==="{}"&&(n="\\{\\}"+n.slice(2)),ht(Qs(n),e,!0).map(ti)}function si(n){return"{"+n+"}"}function ii(n){return/^-?0\d/.test(n)}function ri(n,t){return n<=t}function ni(n,t){return n>=t}function ht(n,t,e){let s=[],i=(0,ze.balanced)("{","}",n);if(!i)return[n];let r=i.pre,h=i.post.length?ht(i.post,t,!1):[""];if(/\$$/.test(i.pre))for(let o=0;o<h.length&&o<t;o++){let a=r+"{"+i.body+"}"+h[o];s.push(a)}else{let o=/^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(i.body),a=/^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(i.body),l=o||a,f=i.body.indexOf(",")>=0;if(!l&&!f)return i.post.match(/,(?!,).*\}/)?(n=i.pre+"{"+i.body+ue+i.post,ht(n,t,!0)):[n];let c;if(l)c=i.body.split(/\.\./);else if(c=Ve(i.body),c.length===1&&c[0]!==void 0&&(c=ht(c[0],t,!1).map(si),c.length===1))return h.map(u=>i.pre+c[0]+u);let d;if(l&&c[0]!==void 0&&c[1]!==void 0){let u=ce(c[0]),m=ce(c[1]),p=Math.max(c[0].length,c[1].length),b=c.length===3&&c[2]!==void 0?Math.abs(ce(c[2])):1,w=ri;m<u&&(b*=-1,w=ni);let E=c.some(ii);d=[];for(let y=u;w(y,m);y+=b){let S;if(a)S=String.fromCharCode(y),S==="\\"&&(S="");else if(S=String(y),E){let B=p-S.length;if(B>0){let U=new Array(B+1).join("0");y<0?S="-"+U+S.slice(1):S=U+S}}d.push(S)}}else{d=[];for(let u=0;u<c.length;u++)d.push.apply(d,ht(c[u],t,!1))}for(let u=0;u<d.length;u++)for(let m=0;m<h.length&&s.length<t;m++){let p=r+d[u]+h[m];(!e||l||p)&&s.push(p)}}return s}});var Xe=R(Ct=>{"use strict";Object.defineProperty(Ct,"__esModule",{value:!0});Ct.assertValidPattern=void 0;var hi=1024*64,oi=n=>{if(typeof n!="string")throw new TypeError("invalid pattern");if(n.length>hi)throw new TypeError("pattern is too long")};Ct.assertValidPattern=oi});var Je=R(Rt=>{"use strict";Object.defineProperty(Rt,"__esModule",{value:!0});Rt.parseClass=void 0;var ai={"[:alnum:]":["\\p{L}\\p{Nl}\\p{Nd}",!0],"[:alpha:]":["\\p{L}\\p{Nl}",!0],"[:ascii:]":["\\x00-\\x7f",!1],"[:blank:]":["\\p{Zs}\\t",!0],"[:cntrl:]":["\\p{Cc}",!0],"[:digit:]":["\\p{Nd}",!0],"[:graph:]":["\\p{Z}\\p{C}",!0,!0],"[:lower:]":["\\p{Ll}",!0],"[:print:]":["\\p{C}",!0],"[:punct:]":["\\p{P}",!0],"[:space:]":["\\p{Z}\\t\\r\\n\\v\\f",!0],"[:upper:]":["\\p{Lu}",!0],"[:word:]":["\\p{L}\\p{Nl}\\p{Nd}\\p{Pc}",!0],"[:xdigit:]":["A-Fa-f0-9",!1]},ot=n=>n.replace(/[[\]\\-]/g,"\\$&"),li=n=>n.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&"),Ye=n=>n.join(""),ci=(n,t)=>{let e=t;if(n.charAt(e)!=="[")throw new Error("not in a brace expression");let s=[],i=[],r=e+1,h=!1,o=!1,a=!1,l=!1,f=e,c="";t:for(;r<n.length;){let p=n.charAt(r);if((p==="!"||p==="^")&&r===e+1){l=!0,r++;continue}if(p==="]"&&h&&!a){f=r+1;break}if(h=!0,p==="\\"&&!a){a=!0,r++;continue}if(p==="["&&!a){for(let[b,[w,v,E]]of Object.entries(ai))if(n.startsWith(b,r)){if(c)return["$.",!1,n.length-e,!0];r+=b.length,E?i.push(w):s.push(w),o=o||v;continue t}}if(a=!1,c){p>c?s.push(ot(c)+"-"+ot(p)):p===c&&s.push(ot(p)),c="",r++;continue}if(n.startsWith("-]",r+1)){s.push(ot(p+"-")),r+=2;continue}if(n.startsWith("-",r+1)){c=p,r+=2;continue}s.push(ot(p)),r++}if(f<r)return["",!1,0,!1];if(!s.length&&!i.length)return["$.",!1,n.length-e,!0];if(i.length===0&&s.length===1&&/^\\?.$/.test(s[0])&&!l){let p=s[0].length===2?s[0].slice(-1):s[0];return[li(p),!1,f-e,!1]}let d="["+(l?"^":"")+Ye(s)+"]",u="["+(l?"":"^")+Ye(i)+"]";return[s.length&&i.length?"("+d+"|"+u+")":s.length?d:u,o,f-e,!0]};Rt.parseClass=ci});var kt=R(At=>{"use strict";Object.defineProperty(At,"__esModule",{value:!0});At.unescape=void 0;var ui=(n,{windowsPathsNoEscape:t=!1,magicalBraces:e=!0}={})=>e?t?n.replace(/\[([^\/\\])\]/g,"$1"):n.replace(/((?!\\).|^)\[([^\/\\])\]/g,"$1$2").replace(/\\([^\/])/g,"$1"):t?n.replace(/\[([^\/\\{}])\]/g,"$1"):n.replace(/((?!\\).|^)\[([^\/\\{}])\]/g,"$1$2").replace(/\\([^\/{}])/g,"$1");At.unescape=ui});var pe=R(Dt=>{"use strict";Object.defineProperty(Dt,"__esModule",{value:!0});Dt.AST=void 0;var fi=Je(),Mt=kt(),di=new Set(["!","?","+","*","@"]),Ze=n=>di.has(n),pi="(?!(?:^|/)\\.\\.?(?:$|/))",Pt="(?!\\.)",mi=new Set(["[","."]),gi=new Set(["..","."]),wi=new Set("().*{}+?[]^$\\!"),bi=n=>n.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&"),de="[^/]",Qe=de+"*?",ts=de+"+?",fe=class n{type;#t;#s;#n=!1;#r=[];#h;#S;#w;#c=!1;#o;#f;#u=!1;constructor(t,e,s={}){this.type=t,t&&(this.#s=!0),this.#h=e,this.#t=this.#h?this.#h.#t:this,this.#o=this.#t===this?s:this.#t.#o,this.#w=this.#t===this?[]:this.#t.#w,t==="!"&&!this.#t.#c&&this.#w.push(this),this.#S=this.#h?this.#h.#r.length:0}get hasMagic(){if(this.#s!==void 0)return this.#s;for(let t of this.#r)if(typeof t!="string"&&(t.type||t.hasMagic))return this.#s=!0;return this.#s}toString(){return this.#f!==void 0?this.#f:this.type?this.#f=this.type+"("+this.#r.map(t=>String(t)).join("|")+")":this.#f=this.#r.map(t=>String(t)).join("")}#a(){if(this!==this.#t)throw new Error("should only call on root");if(this.#c)return this;this.toString(),this.#c=!0;let t;for(;t=this.#w.pop();){if(t.type!=="!")continue;let e=t,s=e.#h;for(;s;){for(let i=e.#S+1;!s.type&&i<s.#r.length;i++)for(let r of t.#r){if(typeof r=="string")throw new Error("string part in extglob AST??");r.copyIn(s.#r[i])}e=s,s=e.#h}}return this}push(...t){for(let e of t)if(e!==""){if(typeof e!="string"&&!(e instanceof n&&e.#h===this))throw new Error("invalid part: "+e);this.#r.push(e)}}toJSON(){let t=this.type===null?this.#r.slice().map(e=>typeof e=="string"?e:e.toJSON()):[this.type,...this.#r.map(e=>e.toJSON())];return this.isStart()&&!this.type&&t.unshift([]),this.isEnd()&&(this===this.#t||this.#t.#c&&this.#h?.type==="!")&&t.push({}),t}isStart(){if(this.#t===this)return!0;if(!this.#h?.isStart())return!1;if(this.#S===0)return!0;let t=this.#h;for(let e=0;e<this.#S;e++){let s=t.#r[e];if(!(s instanceof n&&s.type==="!"))return!1}return!0}isEnd(){if(this.#t===this||this.#h?.type==="!")return!0;if(!this.#h?.isEnd())return!1;if(!this.type)return this.#h?.isEnd();let t=this.#h?this.#h.#r.length:0;return this.#S===t-1}copyIn(t){typeof t=="string"?this.push(t):this.push(t.clone(this))}clone(t){let e=new n(this.type,t);for(let s of this.#r)e.copyIn(s);return e}static#i(t,e,s,i){let r=!1,h=!1,o=-1,a=!1;if(e.type===null){let u=s,m="";for(;u<t.length;){let p=t.charAt(u++);if(r||p==="\\"){r=!r,m+=p;continue}if(h){u===o+1?(p==="^"||p==="!")&&(a=!0):p==="]"&&!(u===o+2&&a)&&(h=!1),m+=p;continue}else if(p==="["){h=!0,o=u,a=!1,m+=p;continue}if(!i.noext&&Ze(p)&&t.charAt(u)==="("){e.push(m),m="";let b=new n(p,e);u=n.#i(t,b,u,i),e.push(b);continue}m+=p}return e.push(m),u}let l=s+1,f=new n(null,e),c=[],d="";for(;l<t.length;){let u=t.charAt(l++);if(r||u==="\\"){r=!r,d+=u;continue}if(h){l===o+1?(u==="^"||u==="!")&&(a=!0):u==="]"&&!(l===o+2&&a)&&(h=!1),d+=u;continue}else if(u==="["){h=!0,o=l,a=!1,d+=u;continue}if(Ze(u)&&t.charAt(l)==="("){f.push(d),d="";let m=new n(u,f);f.push(m),l=n.#i(t,m,l,i);continue}if(u==="|"){f.push(d),d="",c.push(f),f=new n(null,e);continue}if(u===")")return d===""&&e.#r.length===0&&(e.#u=!0),f.push(d),d="",e.push(...c,f),l;d+=u}return e.type=null,e.#s=void 0,e.#r=[t.substring(s-1)],l}static fromGlob(t,e={}){let s=new n(null,void 0,e);return n.#i(t,s,0,e),s}toMMPattern(){if(this!==this.#t)return this.#t.toMMPattern();let t=this.toString(),[e,s,i,r]=this.toRegExpSource();if(!(i||this.#s||this.#o.nocase&&!this.#o.nocaseMagicOnly&&t.toUpperCase()!==t.toLowerCase()))return s;let o=(this.#o.nocase?"i":"")+(r?"u":"");return Object.assign(new RegExp(`^${e}$`,o),{_src:e,_glob:t})}get options(){return this.#o}toRegExpSource(t){let e=t??!!this.#o.dot;if(this.#t===this&&this.#a(),!this.type){let a=this.isStart()&&this.isEnd()&&!this.#r.some(u=>typeof u!="string"),l=this.#r.map(u=>{let[m,p,b,w]=typeof u=="string"?n.#v(u,this.#s,a):u.toRegExpSource(t);return this.#s=this.#s||b,this.#n=this.#n||w,m}).join(""),f="";if(this.isStart()&&typeof this.#r[0]=="string"&&!(this.#r.length===1&&gi.has(this.#r[0]))){let m=mi,p=e&&m.has(l.charAt(0))||l.startsWith("\\.")&&m.has(l.charAt(2))||l.startsWith("\\.\\.")&&m.has(l.charAt(4)),b=!e&&!t&&m.has(l.charAt(0));f=p?pi:b?Pt:""}let c="";return this.isEnd()&&this.#t.#c&&this.#h?.type==="!"&&(c="(?:$|\\/)"),[f+l+c,(0,Mt.unescape)(l),this.#s=!!this.#s,this.#n]}let s=this.type==="*"||this.type==="+",i=this.type==="!"?"(?:(?!(?:":"(?:",r=this.#d(e);if(this.isStart()&&this.isEnd()&&!r&&this.type!=="!"){let a=this.toString();return this.#r=[a],this.type=null,this.#s=void 0,[a,(0,Mt.unescape)(this.toString()),!1,!1]}let h=!s||t||e||!Pt?"":this.#d(!0);h===r&&(h=""),h&&(r=`(?:${r})(?:${h})*?`);let o="";if(this.type==="!"&&this.#u)o=(this.isStart()&&!e?Pt:"")+ts;else{let a=this.type==="!"?"))"+(this.isStart()&&!e&&!t?Pt:"")+Qe+")":this.type==="@"?")":this.type==="?"?")?":this.type==="+"&&h?")":this.type==="*"&&h?")?":`)${this.type}`;o=i+r+a}return[o,(0,Mt.unescape)(r),this.#s=!!this.#s,this.#n]}#d(t){return this.#r.map(e=>{if(typeof e=="string")throw new Error("string type in extglob ast??");let[s,i,r,h]=e.toRegExpSource(t);return this.#n=this.#n||h,s}).filter(e=>!(this.isStart()&&this.isEnd())||!!e).join("|")}static#v(t,e,s=!1){let i=!1,r="",h=!1,o=!1;for(let a=0;a<t.length;a++){let l=t.charAt(a);if(i){i=!1,r+=(wi.has(l)?"\\":"")+l;continue}if(l==="*"){if(o)continue;o=!0,r+=s&&/^[*]+$/.test(t)?ts:Qe,e=!0;continue}else o=!1;if(l==="\\"){a===t.length-1?r+="\\\\":i=!0;continue}if(l==="["){let[f,c,d,u]=(0,fi.parseClass)(t,a);if(d){r+=f,h=h||c,a+=d-1,e=e||u;continue}}if(l==="?"){r+=de,e=!0;continue}r+=bi(l)}return[r,(0,Mt.unescape)(t),!!e,h]}};Dt.AST=fe});var me=R(Ft=>{"use strict";Object.defineProperty(Ft,"__esModule",{value:!0});Ft.escape=void 0;var yi=(n,{windowsPathsNoEscape:t=!1,magicalBraces:e=!1}={})=>e?t?n.replace(/[?*()[\]{}]/g,"[$&]"):n.replace(/[?*()[\]\\{}]/g,"\\$&"):t?n.replace(/[?*()[\]]/g,"[$&]"):n.replace(/[?*()[\]\\]/g,"\\$&");Ft.escape=yi});var H=R(g=>{"use strict";Object.defineProperty(g,"__esModule",{value:!0});g.unescape=g.escape=g.AST=g.Minimatch=g.match=g.makeRe=g.braceExpand=g.defaults=g.filter=g.GLOBSTAR=g.sep=g.minimatch=void 0;var Si=Ke(),jt=Xe(),is=pe(),vi=me(),Ei=kt(),_i=(n,t,e={})=>((0,jt.assertValidPattern)(t),!e.nocomment&&t.charAt(0)==="#"?!1:new J(t,e).match(n));g.minimatch=_i;var Oi=/^\*+([^+@!?\*\[\(]*)$/,xi=n=>t=>!t.startsWith(".")&&t.endsWith(n),Ti=n=>t=>t.endsWith(n),Ci=n=>(n=n.toLowerCase(),t=>!t.startsWith(".")&&t.toLowerCase().endsWith(n)),Ri=n=>(n=n.toLowerCase(),t=>t.toLowerCase().endsWith(n)),Ai=/^\*+\.\*+$/,ki=n=>!n.startsWith(".")&&n.includes("."),Mi=n=>n!=="."&&n!==".."&&n.includes("."),Pi=/^\.\*+$/,Di=n=>n!=="."&&n!==".."&&n.startsWith("."),Fi=/^\*+$/,ji=n=>n.length!==0&&!n.startsWith("."),Ni=n=>n.length!==0&&n!=="."&&n!=="..",Li=/^\?+([^+@!?\*\[\(]*)?$/,Wi=([n,t=""])=>{let e=rs([n]);return t?(t=t.toLowerCase(),s=>e(s)&&s.toLowerCase().endsWith(t)):e},Bi=([n,t=""])=>{let e=ns([n]);return t?(t=t.toLowerCase(),s=>e(s)&&s.toLowerCase().endsWith(t)):e},Ii=([n,t=""])=>{let e=ns([n]);return t?s=>e(s)&&s.endsWith(t):e},Gi=([n,t=""])=>{let e=rs([n]);return t?s=>e(s)&&s.endsWith(t):e},rs=([n])=>{let t=n.length;return e=>e.length===t&&!e.startsWith(".")},ns=([n])=>{let t=n.length;return e=>e.length===t&&e!=="."&&e!==".."},hs=typeof process=="object"&&process?typeof process.env=="object"&&process.env&&process.env.__MINIMATCH_TESTING_PLATFORM__||process.platform:"posix",es={win32:{sep:"\\"},posix:{sep:"/"}};g.sep=hs==="win32"?es.win32.sep:es.posix.sep;g.minimatch.sep=g.sep;g.GLOBSTAR=Symbol("globstar **");g.minimatch.GLOBSTAR=g.GLOBSTAR;var zi="[^/]",Ui=zi+"*?",$i="(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?",qi="(?:(?!(?:\\/|^)\\.).)*?",Hi=(n,t={})=>e=>(0,g.minimatch)(e,n,t);g.filter=Hi;g.minimatch.filter=g.filter;var F=(n,t={})=>Object.assign({},n,t),Vi=n=>{if(!n||typeof n!="object"||!Object.keys(n).length)return g.minimatch;let t=g.minimatch;return Object.assign((s,i,r={})=>t(s,i,F(n,r)),{Minimatch:class extends t.Minimatch{constructor(i,r={}){super(i,F(n,r))}static defaults(i){return t.defaults(F(n,i)).Minimatch}},AST:class extends t.AST{constructor(i,r,h={}){super(i,r,F(n,h))}static fromGlob(i,r={}){return t.AST.fromGlob(i,F(n,r))}},unescape:(s,i={})=>t.unescape(s,F(n,i)),escape:(s,i={})=>t.escape(s,F(n,i)),filter:(s,i={})=>t.filter(s,F(n,i)),defaults:s=>t.defaults(F(n,s)),makeRe:(s,i={})=>t.makeRe(s,F(n,i)),braceExpand:(s,i={})=>t.braceExpand(s,F(n,i)),match:(s,i,r={})=>t.match(s,i,F(n,r)),sep:t.sep,GLOBSTAR:g.GLOBSTAR})};g.defaults=Vi;g.minimatch.defaults=g.defaults;var Ki=(n,t={})=>((0,jt.assertValidPattern)(n),t.nobrace||!/\{(?:(?!\{).)*\}/.test(n)?[n]:(0,Si.expand)(n,{max:t.braceExpandMax}));g.braceExpand=Ki;g.minimatch.braceExpand=g.braceExpand;var Xi=(n,t={})=>new J(n,t).makeRe();g.makeRe=Xi;g.minimatch.makeRe=g.makeRe;var Yi=(n,t,e={})=>{let s=new J(t,e);return n=n.filter(i=>s.match(i)),s.options.nonull&&!n.length&&n.push(t),n};g.match=Yi;g.minimatch.match=g.match;var ss=/[?*]|[+@!]\(.*?\)|\[|\]/,Ji=n=>n.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&"),J=class{options;set;pattern;windowsPathsNoEscape;nonegate;negate;comment;empty;preserveMultipleSlashes;partial;globSet;globParts;nocase;isWindows;platform;windowsNoMagicRoot;regexp;constructor(t,e={}){(0,jt.assertValidPattern)(t),e=e||{},this.options=e,this.pattern=t,this.platform=e.platform||hs,this.isWindows=this.platform==="win32";let s="allowWindowsEscape";this.windowsPathsNoEscape=!!e.windowsPathsNoEscape||e[s]===!1,this.windowsPathsNoEscape&&(this.pattern=this.pattern.replace(/\\/g,"/")),this.preserveMultipleSlashes=!!e.preserveMultipleSlashes,this.regexp=null,this.negate=!1,this.nonegate=!!e.nonegate,this.comment=!1,this.empty=!1,this.partial=!!e.partial,this.nocase=!!this.options.nocase,this.windowsNoMagicRoot=e.windowsNoMagicRoot!==void 0?e.windowsNoMagicRoot:!!(this.isWindows&&this.nocase),this.globSet=[],this.globParts=[],this.set=[],this.make()}hasMagic(){if(this.options.magicalBraces&&this.set.length>1)return!0;for(let t of this.set)for(let e of t)if(typeof e!="string")return!0;return!1}debug(...t){}make(){let t=this.pattern,e=this.options;if(!e.nocomment&&t.charAt(0)==="#"){this.comment=!0;return}if(!t){this.empty=!0;return}this.parseNegate(),this.globSet=[...new Set(this.braceExpand())],e.debug&&(this.debug=(...r)=>console.error(...r)),this.debug(this.pattern,this.globSet);let s=this.globSet.map(r=>this.slashSplit(r));this.globParts=this.preprocess(s),this.debug(this.pattern,this.globParts);let i=this.globParts.map((r,h,o)=>{if(this.isWindows&&this.windowsNoMagicRoot){let a=r[0]===""&&r[1]===""&&(r[2]==="?"||!ss.test(r[2]))&&!ss.test(r[3]),l=/^[a-z]:/i.test(r[0]);if(a)return[...r.slice(0,4),...r.slice(4).map(f=>this.parse(f))];if(l)return[r[0],...r.slice(1).map(f=>this.parse(f))]}return r.map(a=>this.parse(a))});if(this.debug(this.pattern,i),this.set=i.filter(r=>r.indexOf(!1)===-1),this.isWindows)for(let r=0;r<this.set.length;r++){let h=this.set[r];h[0]===""&&h[1]===""&&this.globParts[r][2]==="?"&&typeof h[3]=="string"&&/^[a-z]:$/i.test(h[3])&&(h[2]="?")}this.debug(this.pattern,this.set)}preprocess(t){if(this.options.noglobstar)for(let s=0;s<t.length;s++)for(let i=0;i<t[s].length;i++)t[s][i]==="**"&&(t[s][i]="*");let{optimizationLevel:e=1}=this.options;return e>=2?(t=this.firstPhasePreProcess(t),t=this.secondPhasePreProcess(t)):e>=1?t=this.levelOneOptimize(t):t=this.adjascentGlobstarOptimize(t),t}adjascentGlobstarOptimize(t){return t.map(e=>{let s=-1;for(;(s=e.indexOf("**",s+1))!==-1;){let i=s;for(;e[i+1]==="**";)i++;i!==s&&e.splice(s,i-s)}return e})}levelOneOptimize(t){return t.map(e=>(e=e.reduce((s,i)=>{let r=s[s.length-1];return i==="**"&&r==="**"?s:i===".."&&r&&r!==".."&&r!=="."&&r!=="**"?(s.pop(),s):(s.push(i),s)},[]),e.length===0?[""]:e))}levelTwoFileOptimize(t){Array.isArray(t)||(t=this.slashSplit(t));let e=!1;do{if(e=!1,!this.preserveMultipleSlashes){for(let i=1;i<t.length-1;i++){let r=t[i];i===1&&r===""&&t[0]===""||(r==="."||r==="")&&(e=!0,t.splice(i,1),i--)}t[0]==="."&&t.length===2&&(t[1]==="."||t[1]==="")&&(e=!0,t.pop())}let s=0;for(;(s=t.indexOf("..",s+1))!==-1;){let i=t[s-1];i&&i!=="."&&i!==".."&&i!=="**"&&(e=!0,t.splice(s-1,2),s-=2)}}while(e);return t.length===0?[""]:t}firstPhasePreProcess(t){let e=!1;do{e=!1;for(let s of t){let i=-1;for(;(i=s.indexOf("**",i+1))!==-1;){let h=i;for(;s[h+1]==="**";)h++;h>i&&s.splice(i+1,h-i);let o=s[i+1],a=s[i+2],l=s[i+3];if(o!==".."||!a||a==="."||a===".."||!l||l==="."||l==="..")continue;e=!0,s.splice(i,1);let f=s.slice(0);f[i]="**",t.push(f),i--}if(!this.preserveMultipleSlashes){for(let h=1;h<s.length-1;h++){let o=s[h];h===1&&o===""&&s[0]===""||(o==="."||o==="")&&(e=!0,s.splice(h,1),h--)}s[0]==="."&&s.length===2&&(s[1]==="."||s[1]==="")&&(e=!0,s.pop())}let r=0;for(;(r=s.indexOf("..",r+1))!==-1;){let h=s[r-1];if(h&&h!=="."&&h!==".."&&h!=="**"){e=!0;let a=r===1&&s[r+1]==="**"?["."]:[];s.splice(r-1,2,...a),s.length===0&&s.push(""),r-=2}}}}while(e);return t}secondPhasePreProcess(t){for(let e=0;e<t.length-1;e++)for(let s=e+1;s<t.length;s++){let i=this.partsMatch(t[e],t[s],!this.preserveMultipleSlashes);if(i){t[e]=[],t[s]=i;break}}return t.filter(e=>e.length)}partsMatch(t,e,s=!1){let i=0,r=0,h=[],o="";for(;i<t.length&&r<e.length;)if(t[i]===e[r])h.push(o==="b"?e[r]:t[i]),i++,r++;else if(s&&t[i]==="**"&&e[r]===t[i+1])h.push(t[i]),i++;else if(s&&e[r]==="**"&&t[i]===e[r+1])h.push(e[r]),r++;else if(t[i]==="*"&&e[r]&&(this.options.dot||!e[r].startsWith("."))&&e[r]!=="**"){if(o==="b")return!1;o="a",h.push(t[i]),i++,r++}else if(e[r]==="*"&&t[i]&&(this.options.dot||!t[i].startsWith("."))&&t[i]!=="**"){if(o==="a")return!1;o="b",h.push(e[r]),i++,r++}else return!1;return t.length===e.length&&h}parseNegate(){if(this.nonegate)return;let t=this.pattern,e=!1,s=0;for(let i=0;i<t.length&&t.charAt(i)==="!";i++)e=!e,s++;s&&(this.pattern=t.slice(s)),this.negate=e}matchOne(t,e,s=!1){let i=this.options;if(this.isWindows){let p=typeof t[0]=="string"&&/^[a-z]:$/i.test(t[0]),b=!p&&t[0]===""&&t[1]===""&&t[2]==="?"&&/^[a-z]:$/i.test(t[3]),w=typeof e[0]=="string"&&/^[a-z]:$/i.test(e[0]),v=!w&&e[0]===""&&e[1]===""&&e[2]==="?"&&typeof e[3]=="string"&&/^[a-z]:$/i.test(e[3]),E=b?3:p?0:void 0,y=v?3:w?0:void 0;if(typeof E=="number"&&typeof y=="number"){let[S,B]=[t[E],e[y]];S.toLowerCase()===B.toLowerCase()&&(e[y]=S,y>E?e=e.slice(y):E>y&&(t=t.slice(E)))}}let{optimizationLevel:r=1}=this.options;r>=2&&(t=this.levelTwoFileOptimize(t)),this.debug("matchOne",this,{file:t,pattern:e}),this.debug("matchOne",t.length,e.length);for(var h=0,o=0,a=t.length,l=e.length;h<a&&o<l;h++,o++){this.debug("matchOne loop");var f=e[o],c=t[h];if(this.debug(e,f,c),f===!1)return!1;if(f===g.GLOBSTAR){this.debug("GLOBSTAR",[e,f,c]);var d=h,u=o+1;if(u===l){for(this.debug("** at the end");h<a;h++)if(t[h]==="."||t[h]===".."||!i.dot&&t[h].charAt(0)===".")return!1;return!0}for(;d<a;){var m=t[d];if(this.debug(`
globstar while`,t,d,e,u,m),this.matchOne(t.slice(d),e.slice(u),s))return this.debug("globstar found match!",d,a,m),!0;if(m==="."||m===".."||!i.dot&&m.charAt(0)==="."){this.debug("dot detected!",t,d,e,u);break}this.debug("globstar swallow a segment, and continue"),d++}return!!(s&&(this.debug(`
>>> no match, partial?`,t,d,e,u),d===a))}let p;if(typeof f=="string"?(p=c===f,this.debug("string match",f,c,p)):(p=f.test(c),this.debug("pattern match",f,c,p)),!p)return!1}if(h===a&&o===l)return!0;if(h===a)return s;if(o===l)return h===a-1&&t[h]==="";throw new Error("wtf?")}braceExpand(){return(0,g.braceExpand)(this.pattern,this.options)}parse(t){(0,jt.assertValidPattern)(t);let e=this.options;if(t==="**")return g.GLOBSTAR;if(t==="")return"";let s,i=null;(s=t.match(Fi))?i=e.dot?Ni:ji:(s=t.match(Oi))?i=(e.nocase?e.dot?Ri:Ci:e.dot?Ti:xi)(s[1]):(s=t.match(Li))?i=(e.nocase?e.dot?Bi:Wi:e.dot?Ii:Gi)(s):(s=t.match(Ai))?i=e.dot?Mi:ki:(s=t.match(Pi))&&(i=Di);let r=is.AST.fromGlob(t,this.options).toMMPattern();return i&&typeof r=="object"&&Reflect.defineProperty(r,"test",{value:i}),r}makeRe(){if(this.regexp||this.regexp===!1)return this.regexp;let t=this.set;if(!t.length)return this.regexp=!1,this.regexp;let e=this.options,s=e.noglobstar?Ui:e.dot?$i:qi,i=new Set(e.nocase?["i"]:[]),r=t.map(a=>{let l=a.map(c=>{if(c instanceof RegExp)for(let d of c.flags.split(""))i.add(d);return typeof c=="string"?Ji(c):c===g.GLOBSTAR?g.GLOBSTAR:c._src});l.forEach((c,d)=>{let u=l[d+1],m=l[d-1];c!==g.GLOBSTAR||m===g.GLOBSTAR||(m===void 0?u!==void 0&&u!==g.GLOBSTAR?l[d+1]="(?:\\/|"+s+"\\/)?"+u:l[d]=s:u===void 0?l[d-1]=m+"(?:\\/|\\/"+s+")?":u!==g.GLOBSTAR&&(l[d-1]=m+"(?:\\/|\\/"+s+"\\/)"+u,l[d+1]=g.GLOBSTAR))});let f=l.filter(c=>c!==g.GLOBSTAR);if(this.partial&&f.length>=1){let c=[];for(let d=1;d<=f.length;d++)c.push(f.slice(0,d).join("/"));return"(?:"+c.join("|")+")"}return f.join("/")}).join("|"),[h,o]=t.length>1?["(?:",")"]:["",""];r="^"+h+r+o+"$",this.partial&&(r="^(?:\\/|"+h+r.slice(1,-1)+o+")$"),this.negate&&(r="^(?!"+r+").+$");try{this.regexp=new RegExp(r,[...i].join(""))}catch{this.regexp=!1}return this.regexp}slashSplit(t){return this.preserveMultipleSlashes?t.split("/"):this.isWindows&&/^\/\/[^\/]+/.test(t)?["",...t.split(/\/+/)]:t.split(/\/+/)}match(t,e=this.partial){if(this.debug("match",t,this.pattern),this.comment)return!1;if(this.empty)return t==="";if(t==="/"&&e)return!0;let s=this.options;this.isWindows&&(t=t.split("\\").join("/"));let i=this.slashSplit(t);this.debug(this.pattern,"split",i);let r=this.set;this.debug(this.pattern,"set",r);let h=i[i.length-1];if(!h)for(let o=i.length-2;!h&&o>=0;o--)h=i[o];for(let o=0;o<r.length;o++){let a=r[o],l=i;if(s.matchBase&&a.length===1&&(l=[h]),this.matchOne(l,a,e))return s.flipNegate?!0:!this.negate}return s.flipNegate?!1:this.negate}static defaults(t){return g.minimatch.defaults(t).Minimatch}};g.Minimatch=J;var Zi=pe();Object.defineProperty(g,"AST",{enumerable:!0,get:function(){return Zi.AST}});var Qi=me();Object.defineProperty(g,"escape",{enumerable:!0,get:function(){return Qi.escape}});var tr=kt();Object.defineProperty(g,"unescape",{enumerable:!0,get:function(){return tr.unescape}});g.minimatch.AST=is.AST;g.minimatch.Minimatch=J;g.minimatch.escape=vi.escape;g.minimatch.unescape=Ei.unescape});var fs=R(Wt=>{"use strict";Object.defineProperty(Wt,"__esModule",{value:!0});Wt.LRUCache=void 0;var er=typeof performance=="object"&&performance&&typeof performance.now=="function"?performance:Date,as=new Set,ge=typeof process=="object"&&process?process:{},ls=(n,t,e,s)=>{typeof ge.emitWarning=="function"?ge.emitWarning(n,t,e,s):console.error(`[${e}] ${t}: ${n}`)},Lt=globalThis.AbortController,os=globalThis.AbortSignal;if(typeof Lt>"u"){os=class{onabort;_onabort=[];reason;aborted=!1;addEventListener(e,s){this._onabort.push(s)}},Lt=class{constructor(){t()}signal=new os;abort(e){if(!this.signal.aborted){this.signal.reason=e,this.signal.aborted=!0;for(let s of this.signal._onabort)s(e);this.signal.onabort?.(e)}}};let n=ge.env?.LRU_CACHE_IGNORE_AC_WARNING!=="1",t=()=>{n&&(n=!1,ls("AbortController is not defined. If using lru-cache in node 14, load an AbortController polyfill from the `node-abort-controller` package. A minimal polyfill is provided for use by LRUCache.fetch(), but it should not be relied upon in other contexts (eg, passing it to other APIs that use AbortController/AbortSignal might have undesirable effects). You may disable this with LRU_CACHE_IGNORE_AC_WARNING=1 in the env.","NO_ABORT_CONTROLLER","ENOTSUP",t))}}var sr=n=>!as.has(n),V=n=>n&&n===Math.floor(n)&&n>0&&isFinite(n),cs=n=>V(n)?n<=Math.pow(2,8)?Uint8Array:n<=Math.pow(2,16)?Uint16Array:n<=Math.pow(2,32)?Uint32Array:n<=Number.MAX_SAFE_INTEGER?Nt:null:null,Nt=class extends Array{constructor(n){super(n),this.fill(0)}},ir=class at{heap;length;static#t=!1;static create(t){let e=cs(t);if(!e)return[];at.#t=!0;let s=new at(t,e);return at.#t=!1,s}constructor(t,e){if(!at.#t)throw new TypeError("instantiate Stack using Stack.create(n)");this.heap=new e(t),this.length=0}push(t){this.heap[this.length++]=t}pop(){return this.heap[--this.length]}},rr=class us{#t;#s;#n;#r;#h;#S;#w;#c;get perf(){return this.#c}ttl;ttlResolution;ttlAutopurge;updateAgeOnGet;updateAgeOnHas;allowStale;noDisposeOnSet;noUpdateTTL;maxEntrySize;sizeCalculation;noDeleteOnFetchRejection;noDeleteOnStaleGet;allowStaleOnFetchAbort;allowStaleOnFetchRejection;ignoreFetchAbort;#o;#f;#u;#a;#i;#d;#v;#y;#p;#R;#m;#O;#x;#g;#b;#E;#T;#e;#F;static unsafeExposeInternals(t){return{starts:t.#x,ttls:t.#g,autopurgeTimers:t.#b,sizes:t.#O,keyMap:t.#u,keyList:t.#a,valList:t.#i,next:t.#d,prev:t.#v,get head(){return t.#y},get tail(){return t.#p},free:t.#R,isBackgroundFetch:e=>t.#l(e),backgroundFetch:(e,s,i,r)=>t.#z(e,s,i,r),moveToTail:e=>t.#N(e),indexes:e=>t.#k(e),rindexes:e=>t.#M(e),isStale:e=>t.#_(e)}}get max(){return this.#t}get maxSize(){return this.#s}get calculatedSize(){return this.#f}get size(){return this.#o}get fetchMethod(){return this.#S}get memoMethod(){return this.#w}get dispose(){return this.#n}get onInsert(){return this.#r}get disposeAfter(){return this.#h}constructor(t){let{max:e=0,ttl:s,ttlResolution:i=1,ttlAutopurge:r,updateAgeOnGet:h,updateAgeOnHas:o,allowStale:a,dispose:l,onInsert:f,disposeAfter:c,noDisposeOnSet:d,noUpdateTTL:u,maxSize:m=0,maxEntrySize:p=0,sizeCalculation:b,fetchMethod:w,memoMethod:v,noDeleteOnFetchRejection:E,noDeleteOnStaleGet:y,allowStaleOnFetchRejection:S,allowStaleOnFetchAbort:B,ignoreFetchAbort:U,perf:et}=t;if(et!==void 0&&typeof et?.now!="function")throw new TypeError("perf option must have a now() method if specified");if(this.#c=et??er,e!==0&&!V(e))throw new TypeError("max option must be a nonnegative integer");let st=e?cs(e):Array;if(!st)throw new Error("invalid max value: "+e);if(this.#t=e,this.#s=m,this.maxEntrySize=p||this.#s,this.sizeCalculation=b,this.sizeCalculation){if(!this.#s&&!this.maxEntrySize)throw new TypeError("cannot set sizeCalculation without setting maxSize or maxEntrySize");if(typeof this.sizeCalculation!="function")throw new TypeError("sizeCalculation set to non-function")}if(v!==void 0&&typeof v!="function")throw new TypeError("memoMethod must be a function if defined");if(this.#w=v,w!==void 0&&typeof w!="function")throw new TypeError("fetchMethod must be a function if specified");if(this.#S=w,this.#T=!!w,this.#u=new Map,this.#a=new Array(e).fill(void 0),this.#i=new Array(e).fill(void 0),this.#d=new st(e),this.#v=new st(e),this.#y=0,this.#p=0,this.#R=ir.create(e),this.#o=0,this.#f=0,typeof l=="function"&&(this.#n=l),typeof f=="function"&&(this.#r=f),typeof c=="function"?(this.#h=c,this.#m=[]):(this.#h=void 0,this.#m=void 0),this.#E=!!this.#n,this.#F=!!this.#r,this.#e=!!this.#h,this.noDisposeOnSet=!!d,this.noUpdateTTL=!!u,this.noDeleteOnFetchRejection=!!E,this.allowStaleOnFetchRejection=!!S,this.allowStaleOnFetchAbort=!!B,this.ignoreFetchAbort=!!U,this.maxEntrySize!==0){if(this.#s!==0&&!V(this.#s))throw new TypeError("maxSize must be a positive integer if specified");if(!V(this.maxEntrySize))throw new TypeError("maxEntrySize must be a positive integer if specified");this.#$()}if(this.allowStale=!!a,this.noDeleteOnStaleGet=!!y,this.updateAgeOnGet=!!h,this.updateAgeOnHas=!!o,this.ttlResolution=V(i)||i===0?i:1,this.ttlAutopurge=!!r,this.ttl=s||0,this.ttl){if(!V(this.ttl))throw new TypeError("ttl must be a positive integer if specified");this.#P()}if(this.#t===0&&this.ttl===0&&this.#s===0)throw new TypeError("At least one of max, maxSize, or ttl is required");if(!this.ttlAutopurge&&!this.#t&&!this.#s){let le="LRU_CACHE_UNBOUNDED";sr(le)&&(as.add(le),ls("TTL caching without ttlAutopurge, max, or maxSize can result in unbounded memory consumption.","UnboundedCacheWarning",le,us))}}getRemainingTTL(t){return this.#u.has(t)?1/0:0}#P(){let t=new Nt(this.#t),e=new Nt(this.#t);this.#g=t,this.#x=e;let s=this.ttlAutopurge?new Array(this.#t):void 0;this.#b=s,this.#W=(h,o,a=this.#c.now())=>{if(e[h]=o!==0?a:0,t[h]=o,s?.[h]&&(clearTimeout(s[h]),s[h]=void 0),o!==0&&s){let l=setTimeout(()=>{this.#_(h)&&this.#A(this.#a[h],"expire")},o+1);l.unref&&l.unref(),s[h]=l}},this.#C=h=>{e[h]=t[h]!==0?this.#c.now():0},this.#D=(h,o)=>{if(t[o]){let a=t[o],l=e[o];if(!a||!l)return;h.ttl=a,h.start=l,h.now=i||r();let f=h.now-l;h.remainingTTL=a-f}};let i=0,r=()=>{let h=this.#c.now();if(this.ttlResolution>0){i=h;let o=setTimeout(()=>i=0,this.ttlResolution);o.unref&&o.unref()}return h};this.getRemainingTTL=h=>{let o=this.#u.get(h);if(o===void 0)return 0;let a=t[o],l=e[o];if(!a||!l)return 1/0;let f=(i||r())-l;return a-f},this.#_=h=>{let o=e[h],a=t[h];return!!a&&!!o&&(i||r())-o>a}}#C=()=>{};#D=()=>{};#W=()=>{};#_=()=>!1;#$(){let t=new Nt(this.#t);this.#f=0,this.#O=t,this.#L=e=>{this.#f-=t[e],t[e]=0},this.#B=(e,s,i,r)=>{if(this.#l(s))return 0;if(!V(i))if(r){if(typeof r!="function")throw new TypeError("sizeCalculation must be a function");if(i=r(s,e),!V(i))throw new TypeError("sizeCalculation return invalid (expect positive integer)")}else throw new TypeError("invalid size value (must be positive integer). When maxSize or maxEntrySize is used, sizeCalculation or size must be set.");return i},this.#j=(e,s,i)=>{if(t[e]=s,this.#s){let r=this.#s-t[e];for(;this.#f>r;)this.#G(!0)}this.#f+=t[e],i&&(i.entrySize=s,i.totalCalculatedSize=this.#f)}}#L=t=>{};#j=(t,e,s)=>{};#B=(t,e,s,i)=>{if(s||i)throw new TypeError("cannot set size without setting maxSize or maxEntrySize on cache");return 0};*#k({allowStale:t=this.allowStale}={}){if(this.#o)for(let e=this.#p;!(!this.#I(e)||((t||!this.#_(e))&&(yield e),e===this.#y));)e=this.#v[e]}*#M({allowStale:t=this.allowStale}={}){if(this.#o)for(let e=this.#y;!(!this.#I(e)||((t||!this.#_(e))&&(yield e),e===this.#p));)e=this.#d[e]}#I(t){return t!==void 0&&this.#u.get(this.#a[t])===t}*entries(){for(let t of this.#k())this.#i[t]!==void 0&&this.#a[t]!==void 0&&!this.#l(this.#i[t])&&(yield[this.#a[t],this.#i[t]])}*rentries(){for(let t of this.#M())this.#i[t]!==void 0&&this.#a[t]!==void 0&&!this.#l(this.#i[t])&&(yield[this.#a[t],this.#i[t]])}*keys(){for(let t of this.#k()){let e=this.#a[t];e!==void 0&&!this.#l(this.#i[t])&&(yield e)}}*rkeys(){for(let t of this.#M()){let e=this.#a[t];e!==void 0&&!this.#l(this.#i[t])&&(yield e)}}*values(){for(let t of this.#k())this.#i[t]!==void 0&&!this.#l(this.#i[t])&&(yield this.#i[t])}*rvalues(){for(let t of this.#M())this.#i[t]!==void 0&&!this.#l(this.#i[t])&&(yield this.#i[t])}[Symbol.iterator](){return this.entries()}[Symbol.toStringTag]="LRUCache";find(t,e={}){for(let s of this.#k()){let i=this.#i[s],r=this.#l(i)?i.__staleWhileFetching:i;if(r!==void 0&&t(r,this.#a[s],this))return this.get(this.#a[s],e)}}forEach(t,e=this){for(let s of this.#k()){let i=this.#i[s],r=this.#l(i)?i.__staleWhileFetching:i;r!==void 0&&t.call(e,r,this.#a[s],this)}}rforEach(t,e=this){for(let s of this.#M()){let i=this.#i[s],r=this.#l(i)?i.__staleWhileFetching:i;r!==void 0&&t.call(e,r,this.#a[s],this)}}purgeStale(){let t=!1;for(let e of this.#M({allowStale:!0}))this.#_(e)&&(this.#A(this.#a[e],"expire"),t=!0);return t}info(t){let e=this.#u.get(t);if(e===void 0)return;let s=this.#i[e],i=this.#l(s)?s.__staleWhileFetching:s;if(i===void 0)return;let r={value:i};if(this.#g&&this.#x){let h=this.#g[e],o=this.#x[e];if(h&&o){let a=h-(this.#c.now()-o);r.ttl=a,r.start=Date.now()}}return this.#O&&(r.size=this.#O[e]),r}dump(){let t=[];for(let e of this.#k({allowStale:!0})){let s=this.#a[e],i=this.#i[e],r=this.#l(i)?i.__staleWhileFetching:i;if(r===void 0||s===void 0)continue;let h={value:r};if(this.#g&&this.#x){h.ttl=this.#g[e];let o=this.#c.now()-this.#x[e];h.start=Math.floor(Date.now()-o)}this.#O&&(h.size=this.#O[e]),t.unshift([s,h])}return t}load(t){this.clear();for(let[e,s]of t){if(s.start){let i=Date.now()-s.start;s.start=this.#c.now()-i}this.set(e,s.value,s)}}set(t,e,s={}){if(e===void 0)return this.delete(t),this;let{ttl:i=this.ttl,start:r,noDisposeOnSet:h=this.noDisposeOnSet,sizeCalculation:o=this.sizeCalculation,status:a}=s,{noUpdateTTL:l=this.noUpdateTTL}=s,f=this.#B(t,e,s.size||0,o);if(this.maxEntrySize&&f>this.maxEntrySize)return a&&(a.set="miss",a.maxEntrySizeExceeded=!0),this.#A(t,"set"),this;let c=this.#o===0?void 0:this.#u.get(t);if(c===void 0)c=this.#o===0?this.#p:this.#R.length!==0?this.#R.pop():this.#o===this.#t?this.#G(!1):this.#o,this.#a[c]=t,this.#i[c]=e,this.#u.set(t,c),this.#d[this.#p]=c,this.#v[c]=this.#p,this.#p=c,this.#o++,this.#j(c,f,a),a&&(a.set="add"),l=!1,this.#F&&this.#r?.(e,t,"add");else{this.#N(c);let d=this.#i[c];if(e!==d){if(this.#T&&this.#l(d)){d.__abortController.abort(new Error("replaced"));let{__staleWhileFetching:u}=d;u!==void 0&&!h&&(this.#E&&this.#n?.(u,t,"set"),this.#e&&this.#m?.push([u,t,"set"]))}else h||(this.#E&&this.#n?.(d,t,"set"),this.#e&&this.#m?.push([d,t,"set"]));if(this.#L(c),this.#j(c,f,a),this.#i[c]=e,a){a.set="replace";let u=d&&this.#l(d)?d.__staleWhileFetching:d;u!==void 0&&(a.oldValue=u)}}else a&&(a.set="update");this.#F&&this.onInsert?.(e,t,e===d?"update":"replace")}if(i!==0&&!this.#g&&this.#P(),this.#g&&(l||this.#W(c,i,r),a&&this.#D(a,c)),!h&&this.#e&&this.#m){let d=this.#m,u;for(;u=d?.shift();)this.#h?.(...u)}return this}pop(){try{for(;this.#o;){let t=this.#i[this.#y];if(this.#G(!0),this.#l(t)){if(t.__staleWhileFetching)return t.__staleWhileFetching}else if(t!==void 0)return t}}finally{if(this.#e&&this.#m){let t=this.#m,e;for(;e=t?.shift();)this.#h?.(...e)}}}#G(t){let e=this.#y,s=this.#a[e],i=this.#i[e];return this.#T&&this.#l(i)?i.__abortController.abort(new Error("evicted")):(this.#E||this.#e)&&(this.#E&&this.#n?.(i,s,"evict"),this.#e&&this.#m?.push([i,s,"evict"])),this.#L(e),this.#b?.[e]&&(clearTimeout(this.#b[e]),this.#b[e]=void 0),t&&(this.#a[e]=void 0,this.#i[e]=void 0,this.#R.push(e)),this.#o===1?(this.#y=this.#p=0,this.#R.length=0):this.#y=this.#d[e],this.#u.delete(s),this.#o--,e}has(t,e={}){let{updateAgeOnHas:s=this.updateAgeOnHas,status:i}=e,r=this.#u.get(t);if(r!==void 0){let h=this.#i[r];if(this.#l(h)&&h.__staleWhileFetching===void 0)return!1;if(this.#_(r))i&&(i.has="stale",this.#D(i,r));else return s&&this.#C(r),i&&(i.has="hit",this.#D(i,r)),!0}else i&&(i.has="miss");return!1}peek(t,e={}){let{allowStale:s=this.allowStale}=e,i=this.#u.get(t);if(i===void 0||!s&&this.#_(i))return;let r=this.#i[i];return this.#l(r)?r.__staleWhileFetching:r}#z(t,e,s,i){let r=e===void 0?void 0:this.#i[e];if(this.#l(r))return r;let h=new Lt,{signal:o}=s;o?.addEventListener("abort",()=>h.abort(o.reason),{signal:h.signal});let a={signal:h.signal,options:s,context:i},l=(p,b=!1)=>{let{aborted:w}=h.signal,v=s.ignoreFetchAbort&&p!==void 0,E=s.ignoreFetchAbort||!!(s.allowStaleOnFetchAbort&&p!==void 0);if(s.status&&(w&&!b?(s.status.fetchAborted=!0,s.status.fetchError=h.signal.reason,v&&(s.status.fetchAbortIgnored=!0)):s.status.fetchResolved=!0),w&&!v&&!b)return c(h.signal.reason,E);let y=u,S=this.#i[e];return(S===u||v&&b&&S===void 0)&&(p===void 0?y.__staleWhileFetching!==void 0?this.#i[e]=y.__staleWhileFetching:this.#A(t,"fetch"):(s.status&&(s.status.fetchUpdated=!0),this.set(t,p,a.options))),p},f=p=>(s.status&&(s.status.fetchRejected=!0,s.status.fetchError=p),c(p,!1)),c=(p,b)=>{let{aborted:w}=h.signal,v=w&&s.allowStaleOnFetchAbort,E=v||s.allowStaleOnFetchRejection,y=E||s.noDeleteOnFetchRejection,S=u;if(this.#i[e]===u&&(!y||!b&&S.__staleWhileFetching===void 0?this.#A(t,"fetch"):v||(this.#i[e]=S.__staleWhileFetching)),E)return s.status&&S.__staleWhileFetching!==void 0&&(s.status.returnedStale=!0),S.__staleWhileFetching;if(S.__returned===S)throw p},d=(p,b)=>{let w=this.#S?.(t,r,a);w&&w instanceof Promise&&w.then(v=>p(v===void 0?void 0:v),b),h.signal.addEventListener("abort",()=>{(!s.ignoreFetchAbort||s.allowStaleOnFetchAbort)&&(p(void 0),s.allowStaleOnFetchAbort&&(p=v=>l(v,!0)))})};s.status&&(s.status.fetchDispatched=!0);let u=new Promise(d).then(l,f),m=Object.assign(u,{__abortController:h,__staleWhileFetching:r,__returned:void 0});return e===void 0?(this.set(t,m,{...a.options,status:void 0}),e=this.#u.get(t)):this.#i[e]=m,m}#l(t){if(!this.#T)return!1;let e=t;return!!e&&e instanceof Promise&&e.hasOwnProperty("__staleWhileFetching")&&e.__abortController instanceof Lt}async fetch(t,e={}){let{allowStale:s=this.allowStale,updateAgeOnGet:i=this.updateAgeOnGet,noDeleteOnStaleGet:r=this.noDeleteOnStaleGet,ttl:h=this.ttl,noDisposeOnSet:o=this.noDisposeOnSet,size:a=0,sizeCalculation:l=this.sizeCalculation,noUpdateTTL:f=this.noUpdateTTL,noDeleteOnFetchRejection:c=this.noDeleteOnFetchRejection,allowStaleOnFetchRejection:d=this.allowStaleOnFetchRejection,ignoreFetchAbort:u=this.ignoreFetchAbort,allowStaleOnFetchAbort:m=this.allowStaleOnFetchAbort,context:p,forceRefresh:b=!1,status:w,signal:v}=e;if(!this.#T)return w&&(w.fetch="get"),this.get(t,{allowStale:s,updateAgeOnGet:i,noDeleteOnStaleGet:r,status:w});let E={allowStale:s,updateAgeOnGet:i,noDeleteOnStaleGet:r,ttl:h,noDisposeOnSet:o,size:a,sizeCalculation:l,noUpdateTTL:f,noDeleteOnFetchRejection:c,allowStaleOnFetchRejection:d,allowStaleOnFetchAbort:m,ignoreFetchAbort:u,status:w,signal:v},y=this.#u.get(t);if(y===void 0){w&&(w.fetch="miss");let S=this.#z(t,y,E,p);return S.__returned=S}else{let S=this.#i[y];if(this.#l(S)){let st=s&&S.__staleWhileFetching!==void 0;return w&&(w.fetch="inflight",st&&(w.returnedStale=!0)),st?S.__staleWhileFetching:S.__returned=S}let B=this.#_(y);if(!b&&!B)return w&&(w.fetch="hit"),this.#N(y),i&&this.#C(y),w&&this.#D(w,y),S;let U=this.#z(t,y,E,p),et=U.__staleWhileFetching!==void 0&&s;return w&&(w.fetch=B?"stale":"refresh",et&&B&&(w.returnedStale=!0)),et?U.__staleWhileFetching:U.__returned=U}}async forceFetch(t,e={}){let s=await this.fetch(t,e);if(s===void 0)throw new Error("fetch() returned undefined");return s}memo(t,e={}){let s=this.#w;if(!s)throw new Error("no memoMethod provided to constructor");let{context:i,forceRefresh:r,...h}=e,o=this.get(t,h);if(!r&&o!==void 0)return o;let a=s(t,o,{options:h,context:i});return this.set(t,a,h),a}get(t,e={}){let{allowStale:s=this.allowStale,updateAgeOnGet:i=this.updateAgeOnGet,noDeleteOnStaleGet:r=this.noDeleteOnStaleGet,status:h}=e,o=this.#u.get(t);if(o!==void 0){let a=this.#i[o],l=this.#l(a);return h&&this.#D(h,o),this.#_(o)?(h&&(h.get="stale"),l?(h&&s&&a.__staleWhileFetching!==void 0&&(h.returnedStale=!0),s?a.__staleWhileFetching:void 0):(r||this.#A(t,"expire"),h&&s&&(h.returnedStale=!0),s?a:void 0)):(h&&(h.get="hit"),l?a.__staleWhileFetching:(this.#N(o),i&&this.#C(o),a))}else h&&(h.get="miss")}#U(t,e){this.#v[e]=t,this.#d[t]=e}#N(t){t!==this.#p&&(t===this.#y?this.#y=this.#d[t]:this.#U(this.#v[t],this.#d[t]),this.#U(this.#p,t),this.#p=t)}delete(t){return this.#A(t,"delete")}#A(t,e){let s=!1;if(this.#o!==0){let i=this.#u.get(t);if(i!==void 0)if(this.#b?.[i]&&(clearTimeout(this.#b?.[i]),this.#b[i]=void 0),s=!0,this.#o===1)this.#q(e);else{this.#L(i);let r=this.#i[i];if(this.#l(r)?r.__abortController.abort(new Error("deleted")):(this.#E||this.#e)&&(this.#E&&this.#n?.(r,t,e),this.#e&&this.#m?.push([r,t,e])),this.#u.delete(t),this.#a[i]=void 0,this.#i[i]=void 0,i===this.#p)this.#p=this.#v[i];else if(i===this.#y)this.#y=this.#d[i];else{let h=this.#v[i];this.#d[h]=this.#d[i];let o=this.#d[i];this.#v[o]=this.#v[i]}this.#o--,this.#R.push(i)}}if(this.#e&&this.#m?.length){let i=this.#m,r;for(;r=i?.shift();)this.#h?.(...r)}return s}clear(){return this.#q("delete")}#q(t){for(let e of this.#M({allowStale:!0})){let s=this.#i[e];if(this.#l(s))s.__abortController.abort(new Error("deleted"));else{let i=this.#a[e];this.#E&&this.#n?.(s,i,t),this.#e&&this.#m?.push([s,i,t])}}if(this.#u.clear(),this.#i.fill(void 0),this.#a.fill(void 0),this.#g&&this.#x){this.#g.fill(0),this.#x.fill(0);for(let e of this.#b??[])e!==void 0&&clearTimeout(e);this.#b?.fill(void 0)}if(this.#O&&this.#O.fill(0),this.#y=0,this.#p=0,this.#R.length=0,this.#f=0,this.#o=0,this.#e&&this.#m){let e=this.#m,s;for(;s=e?.shift();)this.#h?.(...s)}}};Wt.LRUCache=rr});var Oe=R(P=>{"use strict";var nr=P&&P.__importDefault||function(n){return n&&n.__esModule?n:{default:n}};Object.defineProperty(P,"__esModule",{value:!0});P.Minipass=P.isWritable=P.isReadable=P.isStream=void 0;var ds=typeof process=="object"&&process?process:{stdout:null,stderr:null},_e=__nccwpck_require__(8474),ws=nr(__nccwpck_require__(7075)),hr=__nccwpck_require__(6193),or=n=>!!n&&typeof n=="object"&&(n instanceof qt||n instanceof ws.default||(0,P.isReadable)(n)||(0,P.isWritable)(n));P.isStream=or;var ar=n=>!!n&&typeof n=="object"&&n instanceof _e.EventEmitter&&typeof n.pipe=="function"&&n.pipe!==ws.default.Writable.prototype.pipe;P.isReadable=ar;var lr=n=>!!n&&typeof n=="object"&&n instanceof _e.EventEmitter&&typeof n.write=="function"&&typeof n.end=="function";P.isWritable=lr;var $=Symbol("EOF"),q=Symbol("maybeEmitEnd"),K=Symbol("emittedEnd"),Bt=Symbol("emittingEnd"),lt=Symbol("emittedError"),It=Symbol("closed"),ps=Symbol("read"),Gt=Symbol("flush"),ms=Symbol("flushChunk"),L=Symbol("encoding"),rt=Symbol("decoder"),x=Symbol("flowing"),ct=Symbol("paused"),nt=Symbol("resume"),T=Symbol("buffer"),M=Symbol("pipes"),C=Symbol("bufferLength"),we=Symbol("bufferPush"),zt=Symbol("bufferShift"),k=Symbol("objectMode"),O=Symbol("destroyed"),be=Symbol("error"),ye=Symbol("emitData"),gs=Symbol("emitEnd"),Se=Symbol("emitEnd2"),I=Symbol("async"),ve=Symbol("abort"),Ut=Symbol("aborted"),ut=Symbol("signal"),Z=Symbol("dataListeners"),D=Symbol("discarded"),ft=n=>Promise.resolve().then(n),cr=n=>n(),ur=n=>n==="end"||n==="finish"||n==="prefinish",fr=n=>n instanceof ArrayBuffer||!!n&&typeof n=="object"&&n.constructor&&n.constructor.name==="ArrayBuffer"&&n.byteLength>=0,dr=n=>!Buffer.isBuffer(n)&&ArrayBuffer.isView(n),$t=class{src;dest;opts;ondrain;constructor(t,e,s){this.src=t,this.dest=e,this.opts=s,this.ondrain=()=>t[nt](),this.dest.on("drain",this.ondrain)}unpipe(){this.dest.removeListener("drain",this.ondrain)}proxyErrors(t){}end(){this.unpipe(),this.opts.end&&this.dest.end()}},Ee=class extends $t{unpipe(){this.src.removeListener("error",this.proxyErrors),super.unpipe()}constructor(t,e,s){super(t,e,s),this.proxyErrors=i=>this.dest.emit("error",i),t.on("error",this.proxyErrors)}},pr=n=>!!n.objectMode,mr=n=>!n.objectMode&&!!n.encoding&&n.encoding!=="buffer",qt=class extends _e.EventEmitter{[x]=!1;[ct]=!1;[M]=[];[T]=[];[k];[L];[I];[rt];[$]=!1;[K]=!1;[Bt]=!1;[It]=!1;[lt]=null;[C]=0;[O]=!1;[ut];[Ut]=!1;[Z]=0;[D]=!1;writable=!0;readable=!0;constructor(...t){let e=t[0]||{};if(super(),e.objectMode&&typeof e.encoding=="string")throw new TypeError("Encoding and objectMode may not be used together");pr(e)?(this[k]=!0,this[L]=null):mr(e)?(this[L]=e.encoding,this[k]=!1):(this[k]=!1,this[L]=null),this[I]=!!e.async,this[rt]=this[L]?new hr.StringDecoder(this[L]):null,e&&e.debugExposeBuffer===!0&&Object.defineProperty(this,"buffer",{get:()=>this[T]}),e&&e.debugExposePipes===!0&&Object.defineProperty(this,"pipes",{get:()=>this[M]});let{signal:s}=e;s&&(this[ut]=s,s.aborted?this[ve]():s.addEventListener("abort",()=>this[ve]()))}get bufferLength(){return this[C]}get encoding(){return this[L]}set encoding(t){throw new Error("Encoding must be set at instantiation time")}setEncoding(t){throw new Error("Encoding must be set at instantiation time")}get objectMode(){return this[k]}set objectMode(t){throw new Error("objectMode must be set at instantiation time")}get async(){return this[I]}set async(t){this[I]=this[I]||!!t}[ve](){this[Ut]=!0,this.emit("abort",this[ut]?.reason),this.destroy(this[ut]?.reason)}get aborted(){return this[Ut]}set aborted(t){}write(t,e,s){if(this[Ut])return!1;if(this[$])throw new Error("write after end");if(this[O])return this.emit("error",Object.assign(new Error("Cannot call write after a stream was destroyed"),{code:"ERR_STREAM_DESTROYED"})),!0;typeof e=="function"&&(s=e,e="utf8"),e||(e="utf8");let i=this[I]?ft:cr;if(!this[k]&&!Buffer.isBuffer(t)){if(dr(t))t=Buffer.from(t.buffer,t.byteOffset,t.byteLength);else if(fr(t))t=Buffer.from(t);else if(typeof t!="string")throw new Error("Non-contiguous data written to non-objectMode stream")}return this[k]?(this[x]&&this[C]!==0&&this[Gt](!0),this[x]?this.emit("data",t):this[we](t),this[C]!==0&&this.emit("readable"),s&&i(s),this[x]):t.length?(typeof t=="string"&&!(e===this[L]&&!this[rt]?.lastNeed)&&(t=Buffer.from(t,e)),Buffer.isBuffer(t)&&this[L]&&(t=this[rt].write(t)),this[x]&&this[C]!==0&&this[Gt](!0),this[x]?this.emit("data",t):this[we](t),this[C]!==0&&this.emit("readable"),s&&i(s),this[x]):(this[C]!==0&&this.emit("readable"),s&&i(s),this[x])}read(t){if(this[O])return null;if(this[D]=!1,this[C]===0||t===0||t&&t>this[C])return this[q](),null;this[k]&&(t=null),this[T].length>1&&!this[k]&&(this[T]=[this[L]?this[T].join(""):Buffer.concat(this[T],this[C])]);let e=this[ps](t||null,this[T][0]);return this[q](),e}[ps](t,e){if(this[k])this[zt]();else{let s=e;t===s.length||t===null?this[zt]():typeof s=="string"?(this[T][0]=s.slice(t),e=s.slice(0,t),this[C]-=t):(this[T][0]=s.subarray(t),e=s.subarray(0,t),this[C]-=t)}return this.emit("data",e),!this[T].length&&!this[$]&&this.emit("drain"),e}end(t,e,s){return typeof t=="function"&&(s=t,t=void 0),typeof e=="function"&&(s=e,e="utf8"),t!==void 0&&this.write(t,e),s&&this.once("end",s),this[$]=!0,this.writable=!1,(this[x]||!this[ct])&&this[q](),this}[nt](){this[O]||(!this[Z]&&!this[M].length&&(this[D]=!0),this[ct]=!1,this[x]=!0,this.emit("resume"),this[T].length?this[Gt]():this[$]?this[q]():this.emit("drain"))}resume(){return this[nt]()}pause(){this[x]=!1,this[ct]=!0,this[D]=!1}get destroyed(){return this[O]}get flowing(){return this[x]}get paused(){return this[ct]}[we](t){this[k]?this[C]+=1:this[C]+=t.length,this[T].push(t)}[zt](){return this[k]?this[C]-=1:this[C]-=this[T][0].length,this[T].shift()}[Gt](t=!1){do;while(this[ms](this[zt]())&&this[T].length);!t&&!this[T].length&&!this[$]&&this.emit("drain")}[ms](t){return this.emit("data",t),this[x]}pipe(t,e){if(this[O])return t;this[D]=!1;let s=this[K];return e=e||{},t===ds.stdout||t===ds.stderr?e.end=!1:e.end=e.end!==!1,e.proxyErrors=!!e.proxyErrors,s?e.end&&t.end():(this[M].push(e.proxyErrors?new Ee(this,t,e):new $t(this,t,e)),this[I]?ft(()=>this[nt]()):this[nt]()),t}unpipe(t){let e=this[M].find(s=>s.dest===t);e&&(this[M].length===1?(this[x]&&this[Z]===0&&(this[x]=!1),this[M]=[]):this[M].splice(this[M].indexOf(e),1),e.unpipe())}addListener(t,e){return this.on(t,e)}on(t,e){let s=super.on(t,e);if(t==="data")this[D]=!1,this[Z]++,!this[M].length&&!this[x]&&this[nt]();else if(t==="readable"&&this[C]!==0)super.emit("readable");else if(ur(t)&&this[K])super.emit(t),this.removeAllListeners(t);else if(t==="error"&&this[lt]){let i=e;this[I]?ft(()=>i.call(this,this[lt])):i.call(this,this[lt])}return s}removeListener(t,e){return this.off(t,e)}off(t,e){let s=super.off(t,e);return t==="data"&&(this[Z]=this.listeners("data").length,this[Z]===0&&!this[D]&&!this[M].length&&(this[x]=!1)),s}removeAllListeners(t){let e=super.removeAllListeners(t);return(t==="data"||t===void 0)&&(this[Z]=0,!this[D]&&!this[M].length&&(this[x]=!1)),e}get emittedEnd(){return this[K]}[q](){!this[Bt]&&!this[K]&&!this[O]&&this[T].length===0&&this[$]&&(this[Bt]=!0,this.emit("end"),this.emit("prefinish"),this.emit("finish"),this[It]&&this.emit("close"),this[Bt]=!1)}emit(t,...e){let s=e[0];if(t!=="error"&&t!=="close"&&t!==O&&this[O])return!1;if(t==="data")return!this[k]&&!s?!1:this[I]?(ft(()=>this[ye](s)),!0):this[ye](s);if(t==="end")return this[gs]();if(t==="close"){if(this[It]=!0,!this[K]&&!this[O])return!1;let r=super.emit("close");return this.removeAllListeners("close"),r}else if(t==="error"){this[lt]=s,super.emit(be,s);let r=!this[ut]||this.listeners("error").length?super.emit("error",s):!1;return this[q](),r}else if(t==="resume"){let r=super.emit("resume");return this[q](),r}else if(t==="finish"||t==="prefinish"){let r=super.emit(t);return this.removeAllListeners(t),r}let i=super.emit(t,...e);return this[q](),i}[ye](t){for(let s of this[M])s.dest.write(t)===!1&&this.pause();let e=this[D]?!1:super.emit("data",t);return this[q](),e}[gs](){return this[K]?!1:(this[K]=!0,this.readable=!1,this[I]?(ft(()=>this[Se]()),!0):this[Se]())}[Se](){if(this[rt]){let e=this[rt].end();if(e){for(let s of this[M])s.dest.write(e);this[D]||super.emit("data",e)}}for(let e of this[M])e.end();let t=super.emit("end");return this.removeAllListeners("end"),t}async collect(){let t=Object.assign([],{dataLength:0});this[k]||(t.dataLength=0);let e=this.promise();return this.on("data",s=>{t.push(s),this[k]||(t.dataLength+=s.length)}),await e,t}async concat(){if(this[k])throw new Error("cannot concat in objectMode");let t=await this.collect();return this[L]?t.join(""):Buffer.concat(t,t.dataLength)}async promise(){return new Promise((t,e)=>{this.on(O,()=>e(new Error("stream destroyed"))),this.on("error",s=>e(s)),this.on("end",()=>t())})}[Symbol.asyncIterator](){this[D]=!1;let t=!1,e=async()=>(this.pause(),t=!0,{value:void 0,done:!0});return{next:()=>{if(t)return e();let i=this.read();if(i!==null)return Promise.resolve({done:!1,value:i});if(this[$])return e();let r,h,o=c=>{this.off("data",a),this.off("end",l),this.off(O,f),e(),h(c)},a=c=>{this.off("error",o),this.off("end",l),this.off(O,f),this.pause(),r({value:c,done:!!this[$]})},l=()=>{this.off("error",o),this.off("data",a),this.off(O,f),e(),r({done:!0,value:void 0})},f=()=>o(new Error("stream destroyed"));return new Promise((c,d)=>{h=d,r=c,this.once(O,f),this.once("error",o),this.once("end",l),this.once("data",a)})},throw:e,return:e,[Symbol.asyncIterator](){return this},[Symbol.asyncDispose]:async()=>{}}}[Symbol.iterator](){this[D]=!1;let t=!1,e=()=>(this.pause(),this.off(be,e),this.off(O,e),this.off("end",e),t=!0,{done:!0,value:void 0}),s=()=>{if(t)return e();let i=this.read();return i===null?e():{done:!1,value:i}};return this.once("end",e),this.once(be,e),this.once(O,e),{next:s,throw:e,return:e,[Symbol.iterator](){return this},[Symbol.dispose]:()=>{}}}destroy(t){if(this[O])return t?this.emit("error",t):this.emit(O),this;this[O]=!0,this[D]=!0,this[T].length=0,this[C]=0;let e=this;return typeof e.close=="function"&&!this[It]&&e.close(),t?this.emit("error",t):this.emit(O),this}static get isStream(){return P.isStream}};P.Minipass=qt});var Ms=R(_=>{"use strict";var gr=_&&_.__createBinding||(Object.create?(function(n,t,e,s){s===void 0&&(s=e);var i=Object.getOwnPropertyDescriptor(t,e);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[e]}}),Object.defineProperty(n,s,i)}):(function(n,t,e,s){s===void 0&&(s=e),n[s]=t[e]})),wr=_&&_.__setModuleDefault||(Object.create?(function(n,t){Object.defineProperty(n,"default",{enumerable:!0,value:t})}):function(n,t){n.default=t}),br=_&&_.__importStar||function(n){if(n&&n.__esModule)return n;var t={};if(n!=null)for(var e in n)e!=="default"&&Object.prototype.hasOwnProperty.call(n,e)&&gr(t,n,e);return wr(t,n),t};Object.defineProperty(_,"__esModule",{value:!0});_.PathScurry=_.Path=_.PathScurryDarwin=_.PathScurryPosix=_.PathScurryWin32=_.PathScurryBase=_.PathPosix=_.PathWin32=_.PathBase=_.ChildrenCache=_.ResolveCache=void 0;var Qt=fs(),Yt=__nccwpck_require__(6760),yr=__nccwpck_require__(3136),pt=__nccwpck_require__(9896),Sr=br(__nccwpck_require__(3024)),vr=pt.realpathSync.native,Ht=__nccwpck_require__(1455),bs=Oe(),mt={lstatSync:pt.lstatSync,readdir:pt.readdir,readdirSync:pt.readdirSync,readlinkSync:pt.readlinkSync,realpathSync:vr,promises:{lstat:Ht.lstat,readdir:Ht.readdir,readlink:Ht.readlink,realpath:Ht.realpath}},_s=n=>!n||n===mt||n===Sr?mt:{...mt,...n,promises:{...mt.promises,...n.promises||{}}},Os=/^\\\\\?\\([a-z]:)\\?$/i,Er=n=>n.replace(/\//g,"\\").replace(Os,"$1\\"),_r=/[\\\/]/,N=0,xs=1,Ts=2,G=4,Cs=6,Rs=8,Q=10,As=12,j=15,dt=~j,xe=16,ys=32,gt=64,W=128,Vt=256,Xt=512,Ss=gt|W|Xt,Or=1023,Te=n=>n.isFile()?Rs:n.isDirectory()?G:n.isSymbolicLink()?Q:n.isCharacterDevice()?Ts:n.isBlockDevice()?Cs:n.isSocket()?As:n.isFIFO()?xs:N,vs=new Qt.LRUCache({max:2**12}),wt=n=>{let t=vs.get(n);if(t)return t;let e=n.normalize("NFKD");return vs.set(n,e),e},Es=new Qt.LRUCache({max:2**12}),Kt=n=>{let t=Es.get(n);if(t)return t;let e=wt(n.toLowerCase());return Es.set(n,e),e},bt=class extends Qt.LRUCache{constructor(){super({max:256})}};_.ResolveCache=bt;var Jt=class extends Qt.LRUCache{constructor(t=16*1024){super({maxSize:t,sizeCalculation:e=>e.length+1})}};_.ChildrenCache=Jt;var ks=Symbol("PathScurry setAsCwd"),A=class{name;root;roots;parent;nocase;isCWD=!1;#t;#s;get dev(){return this.#s}#n;get mode(){return this.#n}#r;get nlink(){return this.#r}#h;get uid(){return this.#h}#S;get gid(){return this.#S}#w;get rdev(){return this.#w}#c;get blksize(){return this.#c}#o;get ino(){return this.#o}#f;get size(){return this.#f}#u;get blocks(){return this.#u}#a;get atimeMs(){return this.#a}#i;get mtimeMs(){return this.#i}#d;get ctimeMs(){return this.#d}#v;get birthtimeMs(){return this.#v}#y;get atime(){return this.#y}#p;get mtime(){return this.#p}#R;get ctime(){return this.#R}#m;get birthtime(){return this.#m}#O;#x;#g;#b;#E;#T;#e;#F;#P;#C;get parentPath(){return(this.parent||this).fullpath()}get path(){return this.parentPath}constructor(t,e=N,s,i,r,h,o){this.name=t,this.#O=r?Kt(t):wt(t),this.#e=e&Or,this.nocase=r,this.roots=i,this.root=s||this,this.#F=h,this.#g=o.fullpath,this.#E=o.relative,this.#T=o.relativePosix,this.parent=o.parent,this.parent?this.#t=this.parent.#t:this.#t=_s(o.fs)}depth(){return this.#x!==void 0?this.#x:this.parent?this.#x=this.parent.depth()+1:this.#x=0}childrenCache(){return this.#F}resolve(t){if(!t)return this;let e=this.getRootString(t),i=t.substring(e.length).split(this.splitSep);return e?this.getRoot(e).#D(i):this.#D(i)}#D(t){let e=this;for(let s of t)e=e.child(s);return e}children(){let t=this.#F.get(this);if(t)return t;let e=Object.assign([],{provisional:0});return this.#F.set(this,e),this.#e&=~xe,e}child(t,e){if(t===""||t===".")return this;if(t==="..")return this.parent||this;let s=this.children(),i=this.nocase?Kt(t):wt(t);for(let a of s)if(a.#O===i)return a;let r=this.parent?this.sep:"",h=this.#g?this.#g+r+t:void 0,o=this.newChild(t,N,{...e,parent:this,fullpath:h});return this.canReaddir()||(o.#e|=W),s.push(o),o}relative(){if(this.isCWD)return"";if(this.#E!==void 0)return this.#E;let t=this.name,e=this.parent;if(!e)return this.#E=this.name;let s=e.relative();return s+(!s||!e.parent?"":this.sep)+t}relativePosix(){if(this.sep==="/")return this.relative();if(this.isCWD)return"";if(this.#T!==void 0)return this.#T;let t=this.name,e=this.parent;if(!e)return this.#T=this.fullpathPosix();let s=e.relativePosix();return s+(!s||!e.parent?"":"/")+t}fullpath(){if(this.#g!==void 0)return this.#g;let t=this.name,e=this.parent;if(!e)return this.#g=this.name;let i=e.fullpath()+(e.parent?this.sep:"")+t;return this.#g=i}fullpathPosix(){if(this.#b!==void 0)return this.#b;if(this.sep==="/")return this.#b=this.fullpath();if(!this.parent){let i=this.fullpath().replace(/\\/g,"/");return/^[a-z]:\//i.test(i)?this.#b=`//?/${i}`:this.#b=i}let t=this.parent,e=t.fullpathPosix(),s=e+(!e||!t.parent?"":"/")+this.name;return this.#b=s}isUnknown(){return(this.#e&j)===N}isType(t){return this[`is${t}`]()}getType(){return this.isUnknown()?"Unknown":this.isDirectory()?"Directory":this.isFile()?"File":this.isSymbolicLink()?"SymbolicLink":this.isFIFO()?"FIFO":this.isCharacterDevice()?"CharacterDevice":this.isBlockDevice()?"BlockDevice":this.isSocket()?"Socket":"Unknown"}isFile(){return(this.#e&j)===Rs}isDirectory(){return(this.#e&j)===G}isCharacterDevice(){return(this.#e&j)===Ts}isBlockDevice(){return(this.#e&j)===Cs}isFIFO(){return(this.#e&j)===xs}isSocket(){return(this.#e&j)===As}isSymbolicLink(){return(this.#e&Q)===Q}lstatCached(){return this.#e&ys?this:void 0}readlinkCached(){return this.#P}realpathCached(){return this.#C}readdirCached(){let t=this.children();return t.slice(0,t.provisional)}canReadlink(){if(this.#P)return!0;if(!this.parent)return!1;let t=this.#e&j;return!(t!==N&&t!==Q||this.#e&Vt||this.#e&W)}calledReaddir(){return!!(this.#e&xe)}isENOENT(){return!!(this.#e&W)}isNamed(t){return this.nocase?this.#O===Kt(t):this.#O===wt(t)}async readlink(){let t=this.#P;if(t)return t;if(this.canReadlink()&&this.parent)try{let e=await this.#t.promises.readlink(this.fullpath()),s=(await this.parent.realpath())?.resolve(e);if(s)return this.#P=s}catch(e){this.#M(e.code);return}}readlinkSync(){let t=this.#P;if(t)return t;if(this.canReadlink()&&this.parent)try{let e=this.#t.readlinkSync(this.fullpath()),s=this.parent.realpathSync()?.resolve(e);if(s)return this.#P=s}catch(e){this.#M(e.code);return}}#W(t){this.#e|=xe;for(let e=t.provisional;e<t.length;e++){let s=t[e];s&&s.#_()}}#_(){this.#e&W||(this.#e=(this.#e|W)&dt,this.#$())}#$(){let t=this.children();t.provisional=0;for(let e of t)e.#_()}#L(){this.#e|=Xt,this.#j()}#j(){if(this.#e&gt)return;let t=this.#e;(t&j)===G&&(t&=dt),this.#e=t|gt,this.#$()}#B(t=""){t==="ENOTDIR"||t==="EPERM"?this.#j():t==="ENOENT"?this.#_():this.children().provisional=0}#k(t=""){t==="ENOTDIR"?this.parent.#j():t==="ENOENT"&&this.#_()}#M(t=""){let e=this.#e;e|=Vt,t==="ENOENT"&&(e|=W),(t==="EINVAL"||t==="UNKNOWN")&&(e&=dt),this.#e=e,t==="ENOTDIR"&&this.parent&&this.parent.#j()}#I(t,e){return this.#z(t,e)||this.#G(t,e)}#G(t,e){let s=Te(t),i=this.newChild(t.name,s,{parent:this}),r=i.#e&j;return r!==G&&r!==Q&&r!==N&&(i.#e|=gt),e.unshift(i),e.provisional++,i}#z(t,e){for(let s=e.provisional;s<e.length;s++){let i=e[s];if((this.nocase?Kt(t.name):wt(t.name))===i.#O)return this.#l(t,i,s,e)}}#l(t,e,s,i){let r=e.name;return e.#e=e.#e&dt|Te(t),r!==t.name&&(e.name=t.name),s!==i.provisional&&(s===i.length-1?i.pop():i.splice(s,1),i.unshift(e)),i.provisional++,e}async lstat(){if((this.#e&W)===0)try{return this.#U(await this.#t.promises.lstat(this.fullpath())),this}catch(t){this.#k(t.code)}}lstatSync(){if((this.#e&W)===0)try{return this.#U(this.#t.lstatSync(this.fullpath())),this}catch(t){this.#k(t.code)}}#U(t){let{atime:e,atimeMs:s,birthtime:i,birthtimeMs:r,blksize:h,blocks:o,ctime:a,ctimeMs:l,dev:f,gid:c,ino:d,mode:u,mtime:m,mtimeMs:p,nlink:b,rdev:w,size:v,uid:E}=t;this.#y=e,this.#a=s,this.#m=i,this.#v=r,this.#c=h,this.#u=o,this.#R=a,this.#d=l,this.#s=f,this.#S=c,this.#o=d,this.#n=u,this.#p=m,this.#i=p,this.#r=b,this.#w=w,this.#f=v,this.#h=E;let y=Te(t);this.#e=this.#e&dt|y|ys,y!==N&&y!==G&&y!==Q&&(this.#e|=gt)}#N=[];#A=!1;#q(t){this.#A=!1;let e=this.#N.slice();this.#N.length=0,e.forEach(s=>s(null,t))}readdirCB(t,e=!1){if(!this.canReaddir()){e?t(null,[]):queueMicrotask(()=>t(null,[]));return}let s=this.children();if(this.calledReaddir()){let r=s.slice(0,s.provisional);e?t(null,r):queueMicrotask(()=>t(null,r));return}if(this.#N.push(t),this.#A)return;this.#A=!0;let i=this.fullpath();this.#t.readdir(i,{withFileTypes:!0},(r,h)=>{if(r)this.#B(r.code),s.provisional=0;else{for(let o of h)this.#I(o,s);this.#W(s)}this.#q(s.slice(0,s.provisional))})}#H;async readdir(){if(!this.canReaddir())return[];let t=this.children();if(this.calledReaddir())return t.slice(0,t.provisional);let e=this.fullpath();if(this.#H)await this.#H;else{let s=()=>{};this.#H=new Promise(i=>s=i);try{for(let i of await this.#t.promises.readdir(e,{withFileTypes:!0}))this.#I(i,t);this.#W(t)}catch(i){this.#B(i.code),t.provisional=0}this.#H=void 0,s()}return t.slice(0,t.provisional)}readdirSync(){if(!this.canReaddir())return[];let t=this.children();if(this.calledReaddir())return t.slice(0,t.provisional);let e=this.fullpath();try{for(let s of this.#t.readdirSync(e,{withFileTypes:!0}))this.#I(s,t);this.#W(t)}catch(s){this.#B(s.code),t.provisional=0}return t.slice(0,t.provisional)}canReaddir(){if(this.#e&Ss)return!1;let t=j&this.#e;return t===N||t===G||t===Q}shouldWalk(t,e){return(this.#e&G)===G&&!(this.#e&Ss)&&!t.has(this)&&(!e||e(this))}async realpath(){if(this.#C)return this.#C;if(!((Xt|Vt|W)&this.#e))try{let t=await this.#t.promises.realpath(this.fullpath());return this.#C=this.resolve(t)}catch{this.#L()}}realpathSync(){if(this.#C)return this.#C;if(!((Xt|Vt|W)&this.#e))try{let t=this.#t.realpathSync(this.fullpath());return this.#C=this.resolve(t)}catch{this.#L()}}[ks](t){if(t===this)return;t.isCWD=!1,this.isCWD=!0;let e=new Set([]),s=[],i=this;for(;i&&i.parent;)e.add(i),i.#E=s.join(this.sep),i.#T=s.join("/"),i=i.parent,s.push("..");for(i=t;i&&i.parent&&!e.has(i);)i.#E=void 0,i.#T=void 0,i=i.parent}};_.PathBase=A;var yt=class n extends A{sep="\\";splitSep=_r;constructor(t,e=N,s,i,r,h,o){super(t,e,s,i,r,h,o)}newChild(t,e=N,s={}){return new n(t,e,this.root,this.roots,this.nocase,this.childrenCache(),s)}getRootString(t){return Yt.win32.parse(t).root}getRoot(t){if(t=Er(t.toUpperCase()),t===this.root.name)return this.root;for(let[e,s]of Object.entries(this.roots))if(this.sameRoot(t,e))return this.roots[t]=s;return this.roots[t]=new Et(t,this).root}sameRoot(t,e=this.root.name){return t=t.toUpperCase().replace(/\//g,"\\").replace(Os,"$1\\"),t===e}};_.PathWin32=yt;var St=class n extends A{splitSep="/";sep="/";constructor(t,e=N,s,i,r,h,o){super(t,e,s,i,r,h,o)}getRootString(t){return t.startsWith("/")?"/":""}getRoot(t){return this.root}newChild(t,e=N,s={}){return new n(t,e,this.root,this.roots,this.nocase,this.childrenCache(),s)}};_.PathPosix=St;var vt=class{root;rootPath;roots;cwd;#t;#s;#n;nocase;#r;constructor(t=process.cwd(),e,s,{nocase:i,childrenCacheSize:r=16*1024,fs:h=mt}={}){this.#r=_s(h),(t instanceof URL||t.startsWith("file://"))&&(t=(0,yr.fileURLToPath)(t));let o=e.resolve(t);this.roots=Object.create(null),this.rootPath=this.parseRootPath(o),this.#t=new bt,this.#s=new bt,this.#n=new Jt(r);let a=o.substring(this.rootPath.length).split(s);if(a.length===1&&!a[0]&&a.pop(),i===void 0)throw new TypeError("must provide nocase setting to PathScurryBase ctor");this.nocase=i,this.root=this.newRoot(this.#r),this.roots[this.rootPath]=this.root;let l=this.root,f=a.length-1,c=e.sep,d=this.rootPath,u=!1;for(let m of a){let p=f--;l=l.child(m,{relative:new Array(p).fill("..").join(c),relativePosix:new Array(p).fill("..").join("/"),fullpath:d+=(u?"":c)+m}),u=!0}this.cwd=l}depth(t=this.cwd){return typeof t=="string"&&(t=this.cwd.resolve(t)),t.depth()}childrenCache(){return this.#n}resolve(...t){let e="";for(let r=t.length-1;r>=0;r--){let h=t[r];if(!(!h||h===".")&&(e=e?`${h}/${e}`:h,this.isAbsolute(h)))break}let s=this.#t.get(e);if(s!==void 0)return s;let i=this.cwd.resolve(e).fullpath();return this.#t.set(e,i),i}resolvePosix(...t){let e="";for(let r=t.length-1;r>=0;r--){let h=t[r];if(!(!h||h===".")&&(e=e?`${h}/${e}`:h,this.isAbsolute(h)))break}let s=this.#s.get(e);if(s!==void 0)return s;let i=this.cwd.resolve(e).fullpathPosix();return this.#s.set(e,i),i}relative(t=this.cwd){return typeof t=="string"&&(t=this.cwd.resolve(t)),t.relative()}relativePosix(t=this.cwd){return typeof t=="string"&&(t=this.cwd.resolve(t)),t.relativePosix()}basename(t=this.cwd){return typeof t=="string"&&(t=this.cwd.resolve(t)),t.name}dirname(t=this.cwd){return typeof t=="string"&&(t=this.cwd.resolve(t)),(t.parent||t).fullpath()}async readdir(t=this.cwd,e={withFileTypes:!0}){typeof t=="string"?t=this.cwd.resolve(t):t instanceof A||(e=t,t=this.cwd);let{withFileTypes:s}=e;if(t.canReaddir()){let i=await t.readdir();return s?i:i.map(r=>r.name)}else return[]}readdirSync(t=this.cwd,e={withFileTypes:!0}){typeof t=="string"?t=this.cwd.resolve(t):t instanceof A||(e=t,t=this.cwd);let{withFileTypes:s=!0}=e;return t.canReaddir()?s?t.readdirSync():t.readdirSync().map(i=>i.name):[]}async lstat(t=this.cwd){return typeof t=="string"&&(t=this.cwd.resolve(t)),t.lstat()}lstatSync(t=this.cwd){return typeof t=="string"&&(t=this.cwd.resolve(t)),t.lstatSync()}async readlink(t=this.cwd,{withFileTypes:e}={withFileTypes:!1}){typeof t=="string"?t=this.cwd.resolve(t):t instanceof A||(e=t.withFileTypes,t=this.cwd);let s=await t.readlink();return e?s:s?.fullpath()}readlinkSync(t=this.cwd,{withFileTypes:e}={withFileTypes:!1}){typeof t=="string"?t=this.cwd.resolve(t):t instanceof A||(e=t.withFileTypes,t=this.cwd);let s=t.readlinkSync();return e?s:s?.fullpath()}async realpath(t=this.cwd,{withFileTypes:e}={withFileTypes:!1}){typeof t=="string"?t=this.cwd.resolve(t):t instanceof A||(e=t.withFileTypes,t=this.cwd);let s=await t.realpath();return e?s:s?.fullpath()}realpathSync(t=this.cwd,{withFileTypes:e}={withFileTypes:!1}){typeof t=="string"?t=this.cwd.resolve(t):t instanceof A||(e=t.withFileTypes,t=this.cwd);let s=t.realpathSync();return e?s:s?.fullpath()}async walk(t=this.cwd,e={}){typeof t=="string"?t=this.cwd.resolve(t):t instanceof A||(e=t,t=this.cwd);let{withFileTypes:s=!0,follow:i=!1,filter:r,walkFilter:h}=e,o=[];(!r||r(t))&&o.push(s?t:t.fullpath());let a=new Set,l=(c,d)=>{a.add(c),c.readdirCB((u,m)=>{if(u)return d(u);let p=m.length;if(!p)return d();let b=()=>{--p===0&&d()};for(let w of m)(!r||r(w))&&o.push(s?w:w.fullpath()),i&&w.isSymbolicLink()?w.realpath().then(v=>v?.isUnknown()?v.lstat():v).then(v=>v?.shouldWalk(a,h)?l(v,b):b()):w.shouldWalk(a,h)?l(w,b):b()},!0)},f=t;return new Promise((c,d)=>{l(f,u=>{if(u)return d(u);c(o)})})}walkSync(t=this.cwd,e={}){typeof t=="string"?t=this.cwd.resolve(t):t instanceof A||(e=t,t=this.cwd);let{withFileTypes:s=!0,follow:i=!1,filter:r,walkFilter:h}=e,o=[];(!r||r(t))&&o.push(s?t:t.fullpath());let a=new Set([t]);for(let l of a){let f=l.readdirSync();for(let c of f){(!r||r(c))&&o.push(s?c:c.fullpath());let d=c;if(c.isSymbolicLink()){if(!(i&&(d=c.realpathSync())))continue;d.isUnknown()&&d.lstatSync()}d.shouldWalk(a,h)&&a.add(d)}}return o}[Symbol.asyncIterator](){return this.iterate()}iterate(t=this.cwd,e={}){return typeof t=="string"?t=this.cwd.resolve(t):t instanceof A||(e=t,t=this.cwd),this.stream(t,e)[Symbol.asyncIterator]()}[Symbol.iterator](){return this.iterateSync()}*iterateSync(t=this.cwd,e={}){typeof t=="string"?t=this.cwd.resolve(t):t instanceof A||(e=t,t=this.cwd);let{withFileTypes:s=!0,follow:i=!1,filter:r,walkFilter:h}=e;(!r||r(t))&&(yield s?t:t.fullpath());let o=new Set([t]);for(let a of o){let l=a.readdirSync();for(let f of l){(!r||r(f))&&(yield s?f:f.fullpath());let c=f;if(f.isSymbolicLink()){if(!(i&&(c=f.realpathSync())))continue;c.isUnknown()&&c.lstatSync()}c.shouldWalk(o,h)&&o.add(c)}}}stream(t=this.cwd,e={}){typeof t=="string"?t=this.cwd.resolve(t):t instanceof A||(e=t,t=this.cwd);let{withFileTypes:s=!0,follow:i=!1,filter:r,walkFilter:h}=e,o=new bs.Minipass({objectMode:!0});(!r||r(t))&&o.write(s?t:t.fullpath());let a=new Set,l=[t],f=0,c=()=>{let d=!1;for(;!d;){let u=l.shift();if(!u){f===0&&o.end();return}f++,a.add(u);let m=(b,w,v=!1)=>{if(b)return o.emit("error",b);if(i&&!v){let E=[];for(let y of w)y.isSymbolicLink()&&E.push(y.realpath().then(S=>S?.isUnknown()?S.lstat():S));if(E.length){Promise.all(E).then(()=>m(null,w,!0));return}}for(let E of w)E&&(!r||r(E))&&(o.write(s?E:E.fullpath())||(d=!0));f--;for(let E of w){let y=E.realpathCached()||E;y.shouldWalk(a,h)&&l.push(y)}d&&!o.flowing?o.once("drain",c):p||c()},p=!0;u.readdirCB(m,!0),p=!1}};return c(),o}streamSync(t=this.cwd,e={}){typeof t=="string"?t=this.cwd.resolve(t):t instanceof A||(e=t,t=this.cwd);let{withFileTypes:s=!0,follow:i=!1,filter:r,walkFilter:h}=e,o=new bs.Minipass({objectMode:!0}),a=new Set;(!r||r(t))&&o.write(s?t:t.fullpath());let l=[t],f=0,c=()=>{let d=!1;for(;!d;){let u=l.shift();if(!u){f===0&&o.end();return}f++,a.add(u);let m=u.readdirSync();for(let p of m)(!r||r(p))&&(o.write(s?p:p.fullpath())||(d=!0));f--;for(let p of m){let b=p;if(p.isSymbolicLink()){if(!(i&&(b=p.realpathSync())))continue;b.isUnknown()&&b.lstatSync()}b.shouldWalk(a,h)&&l.push(b)}}d&&!o.flowing&&o.once("drain",c)};return c(),o}chdir(t=this.cwd){let e=this.cwd;this.cwd=typeof t=="string"?this.cwd.resolve(t):t,this.cwd[ks](e)}};_.PathScurryBase=vt;var Et=class extends vt{sep="\\";constructor(t=process.cwd(),e={}){let{nocase:s=!0}=e;super(t,Yt.win32,"\\",{...e,nocase:s}),this.nocase=s;for(let i=this.cwd;i;i=i.parent)i.nocase=this.nocase}parseRootPath(t){return Yt.win32.parse(t).root.toUpperCase()}newRoot(t){return new yt(this.rootPath,G,void 0,this.roots,this.nocase,this.childrenCache(),{fs:t})}isAbsolute(t){return t.startsWith("/")||t.startsWith("\\")||/^[a-z]:(\/|\\)/i.test(t)}};_.PathScurryWin32=Et;var _t=class extends vt{sep="/";constructor(t=process.cwd(),e={}){let{nocase:s=!1}=e;super(t,Yt.posix,"/",{...e,nocase:s}),this.nocase=s}parseRootPath(t){return"/"}newRoot(t){return new St(this.rootPath,G,void 0,this.roots,this.nocase,this.childrenCache(),{fs:t})}isAbsolute(t){return t.startsWith("/")}};_.PathScurryPosix=_t;var Zt=class extends _t{constructor(t=process.cwd(),e={}){let{nocase:s=!0}=e;super(t,{...e,nocase:s})}};_.PathScurryDarwin=Zt;_.Path=process.platform==="win32"?yt:St;_.PathScurry=process.platform==="win32"?Et:process.platform==="darwin"?Zt:_t});var Re=R(te=>{"use strict";Object.defineProperty(te,"__esModule",{value:!0});te.Pattern=void 0;var xr=H(),Tr=n=>n.length>=1,Cr=n=>n.length>=1,Rr=Symbol.for("nodejs.util.inspect.custom"),Ce=class n{#t;#s;#n;length;#r;#h;#S;#w;#c;#o;#f=!0;constructor(t,e,s,i){if(!Tr(t))throw new TypeError("empty pattern list");if(!Cr(e))throw new TypeError("empty glob list");if(e.length!==t.length)throw new TypeError("mismatched pattern list and glob list lengths");if(this.length=t.length,s<0||s>=this.length)throw new TypeError("index out of range");if(this.#t=t,this.#s=e,this.#n=s,this.#r=i,this.#n===0){if(this.isUNC()){let[r,h,o,a,...l]=this.#t,[f,c,d,u,...m]=this.#s;l[0]===""&&(l.shift(),m.shift());let p=[r,h,o,a,""].join("/"),b=[f,c,d,u,""].join("/");this.#t=[p,...l],this.#s=[b,...m],this.length=this.#t.length}else if(this.isDrive()||this.isAbsolute()){let[r,...h]=this.#t,[o,...a]=this.#s;h[0]===""&&(h.shift(),a.shift());let l=r+"/",f=o+"/";this.#t=[l,...h],this.#s=[f,...a],this.length=this.#t.length}}}[Rr](){return"Pattern <"+this.#s.slice(this.#n).join("/")+">"}pattern(){return this.#t[this.#n]}isString(){return typeof this.#t[this.#n]=="string"}isGlobstar(){return this.#t[this.#n]===xr.GLOBSTAR}isRegExp(){return this.#t[this.#n]instanceof RegExp}globString(){return this.#S=this.#S||(this.#n===0?this.isAbsolute()?this.#s[0]+this.#s.slice(1).join("/"):this.#s.join("/"):this.#s.slice(this.#n).join("/"))}hasMore(){return this.length>this.#n+1}rest(){return this.#h!==void 0?this.#h:this.hasMore()?(this.#h=new n(this.#t,this.#s,this.#n+1,this.#r),this.#h.#o=this.#o,this.#h.#c=this.#c,this.#h.#w=this.#w,this.#h):this.#h=null}isUNC(){let t=this.#t;return this.#c!==void 0?this.#c:this.#c=this.#r==="win32"&&this.#n===0&&t[0]===""&&t[1]===""&&typeof t[2]=="string"&&!!t[2]&&typeof t[3]=="string"&&!!t[3]}isDrive(){let t=this.#t;return this.#w!==void 0?this.#w:this.#w=this.#r==="win32"&&this.#n===0&&this.length>1&&typeof t[0]=="string"&&/^[a-z]:$/i.test(t[0])}isAbsolute(){let t=this.#t;return this.#o!==void 0?this.#o:this.#o=t[0]===""&&t.length>1||this.isDrive()||this.isUNC()}root(){let t=this.#t[0];return typeof t=="string"&&this.isAbsolute()&&this.#n===0?t:""}checkFollowGlobstar(){return!(this.#n===0||!this.isGlobstar()||!this.#f)}markFollowGlobstar(){return this.#n===0||!this.isGlobstar()||!this.#f?!1:(this.#f=!1,!0)}};te.Pattern=Ce});var ke=R(ee=>{"use strict";Object.defineProperty(ee,"__esModule",{value:!0});ee.Ignore=void 0;var Ps=H(),Ar=Re(),kr=typeof process=="object"&&process&&typeof process.platform=="string"?process.platform:"linux",Ae=class{relative;relativeChildren;absolute;absoluteChildren;platform;mmopts;constructor(t,{nobrace:e,nocase:s,noext:i,noglobstar:r,platform:h=kr}){this.relative=[],this.absolute=[],this.relativeChildren=[],this.absoluteChildren=[],this.platform=h,this.mmopts={dot:!0,nobrace:e,nocase:s,noext:i,noglobstar:r,optimizationLevel:2,platform:h,nocomment:!0,nonegate:!0};for(let o of t)this.add(o)}add(t){let e=new Ps.Minimatch(t,this.mmopts);for(let s=0;s<e.set.length;s++){let i=e.set[s],r=e.globParts[s];if(!i||!r)throw new Error("invalid pattern object");for(;i[0]==="."&&r[0]===".";)i.shift(),r.shift();let h=new Ar.Pattern(i,r,0,this.platform),o=new Ps.Minimatch(h.globString(),this.mmopts),a=r[r.length-1]==="**",l=h.isAbsolute();l?this.absolute.push(o):this.relative.push(o),a&&(l?this.absoluteChildren.push(o):this.relativeChildren.push(o))}}ignored(t){let e=t.fullpath(),s=`${e}/`,i=t.relative()||".",r=`${i}/`;for(let h of this.relative)if(h.match(i)||h.match(r))return!0;for(let h of this.absolute)if(h.match(e)||h.match(s))return!0;return!1}childrenIgnored(t){let e=t.fullpath()+"/",s=(t.relative()||".")+"/";for(let i of this.relativeChildren)if(i.match(s))return!0;for(let i of this.absoluteChildren)if(i.match(e))return!0;return!1}};ee.Ignore=Ae});var Fs=R(z=>{"use strict";Object.defineProperty(z,"__esModule",{value:!0});z.Processor=z.SubWalks=z.MatchRecord=z.HasWalkedCache=void 0;var Ds=H(),se=class n{store;constructor(t=new Map){this.store=t}copy(){return new n(new Map(this.store))}hasWalked(t,e){return this.store.get(t.fullpath())?.has(e.globString())}storeWalked(t,e){let s=t.fullpath(),i=this.store.get(s);i?i.add(e.globString()):this.store.set(s,new Set([e.globString()]))}};z.HasWalkedCache=se;var ie=class{store=new Map;add(t,e,s){let i=(e?2:0)|(s?1:0),r=this.store.get(t);this.store.set(t,r===void 0?i:i&r)}entries(){return[...this.store.entries()].map(([t,e])=>[t,!!(e&2),!!(e&1)])}};z.MatchRecord=ie;var re=class{store=new Map;add(t,e){if(!t.canReaddir())return;let s=this.store.get(t);s?s.find(i=>i.globString()===e.globString())||s.push(e):this.store.set(t,[e])}get(t){let e=this.store.get(t);if(!e)throw new Error("attempting to walk unknown path");return e}entries(){return this.keys().map(t=>[t,this.store.get(t)])}keys(){return[...this.store.keys()].filter(t=>t.canReaddir())}};z.SubWalks=re;var Me=class n{hasWalkedCache;matches=new ie;subwalks=new re;patterns;follow;dot;opts;constructor(t,e){this.opts=t,this.follow=!!t.follow,this.dot=!!t.dot,this.hasWalkedCache=e?e.copy():new se}processPatterns(t,e){this.patterns=e;let s=e.map(i=>[t,i]);for(let[i,r]of s){this.hasWalkedCache.storeWalked(i,r);let h=r.root(),o=r.isAbsolute()&&this.opts.absolute!==!1;if(h){i=i.resolve(h==="/"&&this.opts.root!==void 0?this.opts.root:h);let c=r.rest();if(c)r=c;else{this.matches.add(i,!0,!1);continue}}if(i.isENOENT())continue;let a,l,f=!1;for(;typeof(a=r.pattern())=="string"&&(l=r.rest());)i=i.resolve(a),r=l,f=!0;if(a=r.pattern(),l=r.rest(),f){if(this.hasWalkedCache.hasWalked(i,r))continue;this.hasWalkedCache.storeWalked(i,r)}if(typeof a=="string"){let c=a===".."||a===""||a===".";this.matches.add(i.resolve(a),o,c);continue}else if(a===Ds.GLOBSTAR){(!i.isSymbolicLink()||this.follow||r.checkFollowGlobstar())&&this.subwalks.add(i,r);let c=l?.pattern(),d=l?.rest();if(!l||(c===""||c===".")&&!d)this.matches.add(i,o,c===""||c===".");else if(c===".."){let u=i.parent||i;d?this.hasWalkedCache.hasWalked(u,d)||this.subwalks.add(u,d):this.matches.add(u,o,!0)}}else a instanceof RegExp&&this.subwalks.add(i,r)}return this}subwalkTargets(){return this.subwalks.keys()}child(){return new n(this.opts,this.hasWalkedCache)}filterEntries(t,e){let s=this.subwalks.get(t),i=this.child();for(let r of e)for(let h of s){let o=h.isAbsolute(),a=h.pattern(),l=h.rest();a===Ds.GLOBSTAR?i.testGlobstar(r,h,l,o):a instanceof RegExp?i.testRegExp(r,a,l,o):i.testString(r,a,l,o)}return i}testGlobstar(t,e,s,i){if((this.dot||!t.name.startsWith("."))&&(e.hasMore()||this.matches.add(t,i,!1),t.canReaddir()&&(this.follow||!t.isSymbolicLink()?this.subwalks.add(t,e):t.isSymbolicLink()&&(s&&e.checkFollowGlobstar()?this.subwalks.add(t,s):e.markFollowGlobstar()&&this.subwalks.add(t,e)))),s){let r=s.pattern();if(typeof r=="string"&&r!==".."&&r!==""&&r!==".")this.testString(t,r,s.rest(),i);else if(r===".."){let h=t.parent||t;this.subwalks.add(h,s)}else r instanceof RegExp&&this.testRegExp(t,r,s.rest(),i)}}testRegExp(t,e,s,i){e.test(t.name)&&(s?this.subwalks.add(t,s):this.matches.add(t,i,!1))}testString(t,e,s,i){t.isNamed(e)&&(s?this.subwalks.add(t,s):this.matches.add(t,i,!1))}};z.Processor=Me});var Ls=R(X=>{"use strict";Object.defineProperty(X,"__esModule",{value:!0});X.GlobStream=X.GlobWalker=X.GlobUtil=void 0;var Mr=Oe(),js=ke(),Ns=Fs(),Pr=(n,t)=>typeof n=="string"?new js.Ignore([n],t):Array.isArray(n)?new js.Ignore(n,t):n,Ot=class{path;patterns;opts;seen=new Set;paused=!1;aborted=!1;#t=[];#s;#n;signal;maxDepth;includeChildMatches;constructor(t,e,s){if(this.patterns=t,this.path=e,this.opts=s,this.#n=!s.posix&&s.platform==="win32"?"\\":"/",this.includeChildMatches=s.includeChildMatches!==!1,(s.ignore||!this.includeChildMatches)&&(this.#s=Pr(s.ignore??[],s),!this.includeChildMatches&&typeof this.#s.add!="function")){let i="cannot ignore child matches, ignore lacks add() method.";throw new Error(i)}this.maxDepth=s.maxDepth||1/0,s.signal&&(this.signal=s.signal,this.signal.addEventListener("abort",()=>{this.#t.length=0}))}#r(t){return this.seen.has(t)||!!this.#s?.ignored?.(t)}#h(t){return!!this.#s?.childrenIgnored?.(t)}pause(){this.paused=!0}resume(){if(this.signal?.aborted)return;this.paused=!1;let t;for(;!this.paused&&(t=this.#t.shift());)t()}onResume(t){this.signal?.aborted||(this.paused?this.#t.push(t):t())}async matchCheck(t,e){if(e&&this.opts.nodir)return;let s;if(this.opts.realpath){if(s=t.realpathCached()||await t.realpath(),!s)return;t=s}let r=t.isUnknown()||this.opts.stat?await t.lstat():t;if(this.opts.follow&&this.opts.nodir&&r?.isSymbolicLink()){let h=await r.realpath();h&&(h.isUnknown()||this.opts.stat)&&await h.lstat()}return this.matchCheckTest(r,e)}matchCheckTest(t,e){return t&&(this.maxDepth===1/0||t.depth()<=this.maxDepth)&&(!e||t.canReaddir())&&(!this.opts.nodir||!t.isDirectory())&&(!this.opts.nodir||!this.opts.follow||!t.isSymbolicLink()||!t.realpathCached()?.isDirectory())&&!this.#r(t)?t:void 0}matchCheckSync(t,e){if(e&&this.opts.nodir)return;let s;if(this.opts.realpath){if(s=t.realpathCached()||t.realpathSync(),!s)return;t=s}let r=t.isUnknown()||this.opts.stat?t.lstatSync():t;if(this.opts.follow&&this.opts.nodir&&r?.isSymbolicLink()){let h=r.realpathSync();h&&(h?.isUnknown()||this.opts.stat)&&h.lstatSync()}return this.matchCheckTest(r,e)}matchFinish(t,e){if(this.#r(t))return;if(!this.includeChildMatches&&this.#s?.add){let r=`${t.relativePosix()}/**`;this.#s.add(r)}let s=this.opts.absolute===void 0?e:this.opts.absolute;this.seen.add(t);let i=this.opts.mark&&t.isDirectory()?this.#n:"";if(this.opts.withFileTypes)this.matchEmit(t);else if(s){let r=this.opts.posix?t.fullpathPosix():t.fullpath();this.matchEmit(r+i)}else{let r=this.opts.posix?t.relativePosix():t.relative(),h=this.opts.dotRelative&&!r.startsWith(".."+this.#n)?"."+this.#n:"";this.matchEmit(r?h+r+i:"."+i)}}async match(t,e,s){let i=await this.matchCheck(t,s);i&&this.matchFinish(i,e)}matchSync(t,e,s){let i=this.matchCheckSync(t,s);i&&this.matchFinish(i,e)}walkCB(t,e,s){this.signal?.aborted&&s(),this.walkCB2(t,e,new Ns.Processor(this.opts),s)}walkCB2(t,e,s,i){if(this.#h(t))return i();if(this.signal?.aborted&&i(),this.paused){this.onResume(()=>this.walkCB2(t,e,s,i));return}s.processPatterns(t,e);let r=1,h=()=>{--r===0&&i()};for(let[o,a,l]of s.matches.entries())this.#r(o)||(r++,this.match(o,a,l).then(()=>h()));for(let o of s.subwalkTargets()){if(this.maxDepth!==1/0&&o.depth()>=this.maxDepth)continue;r++;let a=o.readdirCached();o.calledReaddir()?this.walkCB3(o,a,s,h):o.readdirCB((l,f)=>this.walkCB3(o,f,s,h),!0)}h()}walkCB3(t,e,s,i){s=s.filterEntries(t,e);let r=1,h=()=>{--r===0&&i()};for(let[o,a,l]of s.matches.entries())this.#r(o)||(r++,this.match(o,a,l).then(()=>h()));for(let[o,a]of s.subwalks.entries())r++,this.walkCB2(o,a,s.child(),h);h()}walkCBSync(t,e,s){this.signal?.aborted&&s(),this.walkCB2Sync(t,e,new Ns.Processor(this.opts),s)}walkCB2Sync(t,e,s,i){if(this.#h(t))return i();if(this.signal?.aborted&&i(),this.paused){this.onResume(()=>this.walkCB2Sync(t,e,s,i));return}s.processPatterns(t,e);let r=1,h=()=>{--r===0&&i()};for(let[o,a,l]of s.matches.entries())this.#r(o)||this.matchSync(o,a,l);for(let o of s.subwalkTargets()){if(this.maxDepth!==1/0&&o.depth()>=this.maxDepth)continue;r++;let a=o.readdirSync();this.walkCB3Sync(o,a,s,h)}h()}walkCB3Sync(t,e,s,i){s=s.filterEntries(t,e);let r=1,h=()=>{--r===0&&i()};for(let[o,a,l]of s.matches.entries())this.#r(o)||this.matchSync(o,a,l);for(let[o,a]of s.subwalks.entries())r++,this.walkCB2Sync(o,a,s.child(),h);h()}};X.GlobUtil=Ot;var Pe=class extends Ot{matches=new Set;constructor(t,e,s){super(t,e,s)}matchEmit(t){this.matches.add(t)}async walk(){if(this.signal?.aborted)throw this.signal.reason;return this.path.isUnknown()&&await this.path.lstat(),await new Promise((t,e)=>{this.walkCB(this.path,this.patterns,()=>{this.signal?.aborted?e(this.signal.reason):t(this.matches)})}),this.matches}walkSync(){if(this.signal?.aborted)throw this.signal.reason;return this.path.isUnknown()&&this.path.lstatSync(),this.walkCBSync(this.path,this.patterns,()=>{if(this.signal?.aborted)throw this.signal.reason}),this.matches}};X.GlobWalker=Pe;var De=class extends Ot{results;constructor(t,e,s){super(t,e,s),this.results=new Mr.Minipass({signal:this.signal,objectMode:!0}),this.results.on("drain",()=>this.resume()),this.results.on("resume",()=>this.resume())}matchEmit(t){this.results.write(t),this.results.flowing||this.pause()}stream(){let t=this.path;return t.isUnknown()?t.lstat().then(()=>{this.walkCB(t,this.patterns,()=>this.results.end())}):this.walkCB(t,this.patterns,()=>this.results.end()),this.results}streamSync(){return this.path.isUnknown()&&this.path.lstatSync(),this.walkCBSync(this.path,this.patterns,()=>this.results.end()),this.results}};X.GlobStream=De});var je=R(oe=>{"use strict";Object.defineProperty(oe,"__esModule",{value:!0});oe.Glob=void 0;var Dr=H(),Fr=__nccwpck_require__(3136),ne=Ms(),jr=Re(),he=Ls(),Nr=typeof process=="object"&&process&&typeof process.platform=="string"?process.platform:"linux",Fe=class{absolute;cwd;root;dot;dotRelative;follow;ignore;magicalBraces;mark;matchBase;maxDepth;nobrace;nocase;nodir;noext;noglobstar;pattern;platform;realpath;scurry;stat;signal;windowsPathsNoEscape;withFileTypes;includeChildMatches;opts;patterns;constructor(t,e){if(!e)throw new TypeError("glob options required");if(this.withFileTypes=!!e.withFileTypes,this.signal=e.signal,this.follow=!!e.follow,this.dot=!!e.dot,this.dotRelative=!!e.dotRelative,this.nodir=!!e.nodir,this.mark=!!e.mark,e.cwd?(e.cwd instanceof URL||e.cwd.startsWith("file://"))&&(e.cwd=(0,Fr.fileURLToPath)(e.cwd)):this.cwd="",this.cwd=e.cwd||"",this.root=e.root,this.magicalBraces=!!e.magicalBraces,this.nobrace=!!e.nobrace,this.noext=!!e.noext,this.realpath=!!e.realpath,this.absolute=e.absolute,this.includeChildMatches=e.includeChildMatches!==!1,this.noglobstar=!!e.noglobstar,this.matchBase=!!e.matchBase,this.maxDepth=typeof e.maxDepth=="number"?e.maxDepth:1/0,this.stat=!!e.stat,this.ignore=e.ignore,this.withFileTypes&&this.absolute!==void 0)throw new Error("cannot set absolute and withFileTypes:true");if(typeof t=="string"&&(t=[t]),this.windowsPathsNoEscape=!!e.windowsPathsNoEscape||e.allowWindowsEscape===!1,this.windowsPathsNoEscape&&(t=t.map(a=>a.replace(/\\/g,"/"))),this.matchBase){if(e.noglobstar)throw new TypeError("base matching requires globstar");t=t.map(a=>a.includes("/")?a:`./**/${a}`)}if(this.pattern=t,this.platform=e.platform||Nr,this.opts={...e,platform:this.platform},e.scurry){if(this.scurry=e.scurry,e.nocase!==void 0&&e.nocase!==e.scurry.nocase)throw new Error("nocase option contradicts provided scurry option")}else{let a=e.platform==="win32"?ne.PathScurryWin32:e.platform==="darwin"?ne.PathScurryDarwin:e.platform?ne.PathScurryPosix:ne.PathScurry;this.scurry=new a(this.cwd,{nocase:e.nocase,fs:e.fs})}this.nocase=this.scurry.nocase;let s=this.platform==="darwin"||this.platform==="win32",i={braceExpandMax:1e4,...e,dot:this.dot,matchBase:this.matchBase,nobrace:this.nobrace,nocase:this.nocase,nocaseMagicOnly:s,nocomment:!0,noext:this.noext,nonegate:!0,optimizationLevel:2,platform:this.platform,windowsPathsNoEscape:this.windowsPathsNoEscape,debug:!!this.opts.debug},r=this.pattern.map(a=>new Dr.Minimatch(a,i)),[h,o]=r.reduce((a,l)=>(a[0].push(...l.set),a[1].push(...l.globParts),a),[[],[]]);this.patterns=h.map((a,l)=>{let f=o[l];if(!f)throw new Error("invalid pattern object");return new jr.Pattern(a,f,0,this.platform)})}async walk(){return[...await new he.GlobWalker(this.patterns,this.scurry.cwd,{...this.opts,maxDepth:this.maxDepth!==1/0?this.maxDepth+this.scurry.cwd.depth():1/0,platform:this.platform,nocase:this.nocase,includeChildMatches:this.includeChildMatches}).walk()]}walkSync(){return[...new he.GlobWalker(this.patterns,this.scurry.cwd,{...this.opts,maxDepth:this.maxDepth!==1/0?this.maxDepth+this.scurry.cwd.depth():1/0,platform:this.platform,nocase:this.nocase,includeChildMatches:this.includeChildMatches}).walkSync()]}stream(){return new he.GlobStream(this.patterns,this.scurry.cwd,{...this.opts,maxDepth:this.maxDepth!==1/0?this.maxDepth+this.scurry.cwd.depth():1/0,platform:this.platform,nocase:this.nocase,includeChildMatches:this.includeChildMatches}).stream()}streamSync(){return new he.GlobStream(this.patterns,this.scurry.cwd,{...this.opts,maxDepth:this.maxDepth!==1/0?this.maxDepth+this.scurry.cwd.depth():1/0,platform:this.platform,nocase:this.nocase,includeChildMatches:this.includeChildMatches}).streamSync()}iterateSync(){return this.streamSync()[Symbol.iterator]()}[Symbol.iterator](){return this.iterateSync()}iterate(){return this.stream()[Symbol.asyncIterator]()}[Symbol.asyncIterator](){return this.iterate()}};oe.Glob=Fe});var Ne=R(ae=>{"use strict";Object.defineProperty(ae,"__esModule",{value:!0});ae.hasMagic=void 0;var Lr=H(),Wr=(n,t={})=>{Array.isArray(n)||(n=[n]);for(let e of n)if(new Lr.Minimatch(e,t).hasMagic())return!0;return!1};ae.hasMagic=Wr});Object.defineProperty(exports, "__esModule", ({value:!0}));exports.glob=exports.sync=exports.iterate=exports.iterateSync=exports.stream=exports.streamSync=exports.Ignore=exports.hasMagic=exports.Glob=exports.unescape=exports.escape=void 0;exports.globStreamSync=xt;exports.globStream=Le;exports.globSync=We;exports.globIterateSync=Tt;exports.globIterate=Be;var Ws=H(),tt=je(),Br=Ne(),Is=H();Object.defineProperty(exports, "escape", ({enumerable:!0,get:function(){return Is.escape}}));Object.defineProperty(exports, "unescape", ({enumerable:!0,get:function(){return Is.unescape}}));var Ir=je();Object.defineProperty(exports, "Glob", ({enumerable:!0,get:function(){return Ir.Glob}}));var Gr=Ne();Object.defineProperty(exports, "hasMagic", ({enumerable:!0,get:function(){return Gr.hasMagic}}));var zr=ke();Object.defineProperty(exports, "Ignore", ({enumerable:!0,get:function(){return zr.Ignore}}));function xt(n,t={}){return new tt.Glob(n,t).streamSync()}function Le(n,t={}){return new tt.Glob(n,t).stream()}function We(n,t={}){return new tt.Glob(n,t).walkSync()}async function Bs(n,t={}){return new tt.Glob(n,t).walk()}function Tt(n,t={}){return new tt.Glob(n,t).iterateSync()}function Be(n,t={}){return new tt.Glob(n,t).iterate()}exports.streamSync=xt;exports.stream=Object.assign(Le,{sync:xt});exports.iterateSync=Tt;exports.iterate=Object.assign(Be,{sync:Tt});exports.sync=Object.assign(We,{stream:xt,iterate:Tt});exports.glob=Object.assign(Bs,{glob:Bs,globSync:We,sync:exports.sync,globStream:Le,stream:exports.stream,globStreamSync:xt,streamSync:exports.streamSync,globIterate:Be,iterate:exports.iterate,globIterateSync:Tt,iterateSync:exports.iterateSync,Glob:tt.Glob,hasMagic:Br.hasMagic,escape:Ws.escape,unescape:Ws.unescape});exports.glob.glob=exports.glob;
//# sourceMappingURL=index.min.js.map


/***/ }),

/***/ 9796:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"name":"@octokit/rest","version":"16.43.1","publishConfig":{"access":"public"},"description":"GitHub REST API client for Node.js","keywords":["octokit","github","rest","api-client"],"author":"Gregor Martynus (https://github.com/gr2m)","contributors":[{"name":"Mike de Boer","email":"info@mikedeboer.nl"},{"name":"Fabian Jakobs","email":"fabian@c9.io"},{"name":"Joe Gallo","email":"joe@brassafrax.com"},{"name":"Gregor Martynus","url":"https://github.com/gr2m"}],"repository":"https://github.com/octokit/rest.js","dependencies":{"@octokit/auth-token":"^2.4.0","@octokit/plugin-paginate-rest":"^1.1.1","@octokit/plugin-request-log":"^1.0.0","@octokit/plugin-rest-endpoint-methods":"2.4.0","@octokit/request":"^5.2.0","@octokit/request-error":"^1.0.2","atob-lite":"^2.0.0","before-after-hook":"^2.0.0","btoa-lite":"^1.0.0","deprecation":"^2.0.0","lodash.get":"^4.4.2","lodash.set":"^4.3.2","lodash.uniq":"^4.5.0","octokit-pagination-methods":"^1.1.0","once":"^1.4.0","universal-user-agent":"^4.0.0"},"devDependencies":{"@gimenete/type-writer":"^0.1.3","@octokit/auth":"^1.1.1","@octokit/fixtures-server":"^5.0.6","@octokit/graphql":"^4.2.0","@types/node":"^13.1.0","bundlesize":"^0.18.0","chai":"^4.1.2","compression-webpack-plugin":"^3.1.0","cypress":"^3.0.0","glob":"^7.1.2","http-proxy-agent":"^4.0.0","lodash.camelcase":"^4.3.0","lodash.merge":"^4.6.1","lodash.upperfirst":"^4.3.1","lolex":"^5.1.2","mkdirp":"^1.0.0","mocha":"^7.0.1","mustache":"^4.0.0","nock":"^11.3.3","npm-run-all":"^4.1.2","nyc":"^15.0.0","prettier":"^1.14.2","proxy":"^1.0.0","semantic-release":"^17.0.0","sinon":"^8.0.0","sinon-chai":"^3.0.0","sort-keys":"^4.0.0","string-to-arraybuffer":"^1.0.0","string-to-jsdoc-comment":"^1.0.0","typescript":"^3.3.1","webpack":"^4.0.0","webpack-bundle-analyzer":"^3.0.0","webpack-cli":"^3.0.0"},"types":"index.d.ts","scripts":{"coverage":"nyc report --reporter=html && open coverage/index.html","lint":"prettier --check \'{lib,plugins,scripts,test}/**/*.{js,json,ts}\' \'docs/*.{js,json}\' \'docs/src/**/*\' index.js README.md package.json","lint:fix":"prettier --write \'{lib,plugins,scripts,test}/**/*.{js,json,ts}\' \'docs/*.{js,json}\' \'docs/src/**/*\' index.js README.md package.json","pretest":"npm run -s lint","test":"nyc mocha test/mocha-node-setup.js \\"test/*/**/*-test.js\\"","test:browser":"cypress run --browser chrome","build":"npm-run-all build:*","build:ts":"npm run -s update-endpoints:typescript","prebuild:browser":"mkdirp dist/","build:browser":"npm-run-all build:browser:*","build:browser:development":"webpack --mode development --entry . --output-library=Octokit --output=./dist/octokit-rest.js --profile --json > dist/bundle-stats.json","build:browser:production":"webpack --mode production --entry . --plugin=compression-webpack-plugin --output-library=Octokit --output-path=./dist --output-filename=octokit-rest.min.js --devtool source-map","generate-bundle-report":"webpack-bundle-analyzer dist/bundle-stats.json --mode=static --no-open --report dist/bundle-report.html","update-endpoints":"npm-run-all update-endpoints:*","update-endpoints:fetch-json":"node scripts/update-endpoints/fetch-json","update-endpoints:typescript":"node scripts/update-endpoints/typescript","prevalidate:ts":"npm run -s build:ts","validate:ts":"tsc --target es6 --noImplicitAny index.d.ts","postvalidate:ts":"tsc --noEmit --target es6 test/typescript-validate.ts","start-fixtures-server":"octokit-fixtures-server"},"license":"MIT","files":["index.js","index.d.ts","lib","plugins"],"nyc":{"ignore":["test"]},"release":{"publish":["@semantic-release/npm",{"path":"@semantic-release/github","assets":["dist/*","!dist/*.map.gz"]}]},"bundlesize":[{"path":"./dist/octokit-rest.min.js.gz","maxSize":"33 kB"}]}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId].call(module.exports, module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";


__nccwpck_require__(3799);
var _runner = __nccwpck_require__(6401);
(0, _runner.run)();
})();

module.exports = __webpack_exports__;
/******/ })()
;