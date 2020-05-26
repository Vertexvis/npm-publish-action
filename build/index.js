"use strict";

require("regenerator-runtime");

var _core = require("@actions/core");

var _publish = require("./publish");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function run() {
  return _run.apply(this, arguments);
}

function _run() {
  _run = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var npmAuth, npmRegistry, isDryRun;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            npmAuth = (0, _core.getInput)("npm-auth-token");
            npmRegistry = (0, _core.getInput)("npm-registry");
            isDryRun = (0, _core.getInput)("dry-run");
            _context.next = 5;
            return (0, _publish.publishEach)(npmRegistry, npmAuth, isDryRun === "true");

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _run.apply(this, arguments);
}

run();