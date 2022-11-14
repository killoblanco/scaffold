import * as N from "react";
import He, { createContext as Co, createElement as un } from "react";
import { useRecoilState as Dt, atom as Xe } from "recoil";
import { nanoid as $o } from "nanoid";
import ko from "@emotion/styled";
import "@emotion/react";
import * as No from "react-dom";
import vt from "react-dom";
function me(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, s;
  for (s = 0; s < r.length; s++)
    o = r[s], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function O() {
  return O = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, O.apply(this, arguments);
}
var i = { exports: {} }, It = { exports: {} }, oe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Sr;
function Ao() {
  if (Sr)
    return oe;
  Sr = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, E = e ? Symbol.for("react.memo") : 60115, x = e ? Symbol.for("react.lazy") : 60116, v = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, C = e ? Symbol.for("react.responder") : 60118, A = e ? Symbol.for("react.scope") : 60119;
  function P(y) {
    if (typeof y == "object" && y !== null) {
      var V = y.$$typeof;
      switch (V) {
        case t:
          switch (y = y.type, y) {
            case u:
            case f:
            case r:
            case s:
            case o:
            case h:
              return y;
            default:
              switch (y = y && y.$$typeof, y) {
                case l:
                case d:
                case x:
                case E:
                case a:
                  return y;
                default:
                  return V;
              }
          }
        case n:
          return V;
      }
    }
  }
  function w(y) {
    return P(y) === f;
  }
  return oe.AsyncMode = u, oe.ConcurrentMode = f, oe.ContextConsumer = l, oe.ContextProvider = a, oe.Element = t, oe.ForwardRef = d, oe.Fragment = r, oe.Lazy = x, oe.Memo = E, oe.Portal = n, oe.Profiler = s, oe.StrictMode = o, oe.Suspense = h, oe.isAsyncMode = function(y) {
    return w(y) || P(y) === u;
  }, oe.isConcurrentMode = w, oe.isContextConsumer = function(y) {
    return P(y) === l;
  }, oe.isContextProvider = function(y) {
    return P(y) === a;
  }, oe.isElement = function(y) {
    return typeof y == "object" && y !== null && y.$$typeof === t;
  }, oe.isForwardRef = function(y) {
    return P(y) === d;
  }, oe.isFragment = function(y) {
    return P(y) === r;
  }, oe.isLazy = function(y) {
    return P(y) === x;
  }, oe.isMemo = function(y) {
    return P(y) === E;
  }, oe.isPortal = function(y) {
    return P(y) === n;
  }, oe.isProfiler = function(y) {
    return P(y) === s;
  }, oe.isStrictMode = function(y) {
    return P(y) === o;
  }, oe.isSuspense = function(y) {
    return P(y) === h;
  }, oe.isValidElementType = function(y) {
    return typeof y == "string" || typeof y == "function" || y === r || y === f || y === s || y === o || y === h || y === p || typeof y == "object" && y !== null && (y.$$typeof === x || y.$$typeof === E || y.$$typeof === a || y.$$typeof === l || y.$$typeof === d || y.$$typeof === m || y.$$typeof === C || y.$$typeof === A || y.$$typeof === v);
  }, oe.typeOf = P, oe;
}
var se = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Or;
function Do() {
  return Or || (Or = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, E = e ? Symbol.for("react.memo") : 60115, x = e ? Symbol.for("react.lazy") : 60116, v = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, C = e ? Symbol.for("react.responder") : 60118, A = e ? Symbol.for("react.scope") : 60119;
    function P(T) {
      return typeof T == "string" || typeof T == "function" || T === r || T === f || T === s || T === o || T === h || T === p || typeof T == "object" && T !== null && (T.$$typeof === x || T.$$typeof === E || T.$$typeof === a || T.$$typeof === l || T.$$typeof === d || T.$$typeof === m || T.$$typeof === C || T.$$typeof === A || T.$$typeof === v);
    }
    function w(T) {
      if (typeof T == "object" && T !== null) {
        var ve = T.$$typeof;
        switch (ve) {
          case t:
            var k = T.type;
            switch (k) {
              case u:
              case f:
              case r:
              case s:
              case o:
              case h:
                return k;
              default:
                var Ee = k && k.$$typeof;
                switch (Ee) {
                  case l:
                  case d:
                  case x:
                  case E:
                  case a:
                    return Ee;
                  default:
                    return ve;
                }
            }
          case n:
            return ve;
        }
      }
    }
    var y = u, V = f, U = l, ue = a, K = t, $ = d, q = r, Q = x, te = E, D = n, H = s, Z = o, fe = h, I = !1;
    function ne(T) {
      return I || (I = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), b(T) || w(T) === u;
    }
    function b(T) {
      return w(T) === f;
    }
    function R(T) {
      return w(T) === l;
    }
    function W(T) {
      return w(T) === a;
    }
    function B(T) {
      return typeof T == "object" && T !== null && T.$$typeof === t;
    }
    function j(T) {
      return w(T) === d;
    }
    function G(T) {
      return w(T) === r;
    }
    function M(T) {
      return w(T) === x;
    }
    function F(T) {
      return w(T) === E;
    }
    function Y(T) {
      return w(T) === n;
    }
    function X(T) {
      return w(T) === s;
    }
    function z(T) {
      return w(T) === o;
    }
    function he(T) {
      return w(T) === h;
    }
    se.AsyncMode = y, se.ConcurrentMode = V, se.ContextConsumer = U, se.ContextProvider = ue, se.Element = K, se.ForwardRef = $, se.Fragment = q, se.Lazy = Q, se.Memo = te, se.Portal = D, se.Profiler = H, se.StrictMode = Z, se.Suspense = fe, se.isAsyncMode = ne, se.isConcurrentMode = b, se.isContextConsumer = R, se.isContextProvider = W, se.isElement = B, se.isForwardRef = j, se.isFragment = G, se.isLazy = M, se.isMemo = F, se.isPortal = Y, se.isProfiler = X, se.isStrictMode = z, se.isSuspense = he, se.isValidElementType = P, se.typeOf = w;
  }()), se;
}
var Pr;
function fn() {
  return Pr || (Pr = 1, function(e) {
    process.env.NODE_ENV === "production" ? e.exports = Ao() : e.exports = Do();
  }(It)), It.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Mt, wr;
function Io() {
  if (wr)
    return Mt;
  wr = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
  function r(s) {
    if (s == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(s);
  }
  function o() {
    try {
      if (!Object.assign)
        return !1;
      var s = new String("abc");
      if (s[5] = "de", Object.getOwnPropertyNames(s)[0] === "5")
        return !1;
      for (var a = {}, l = 0; l < 10; l++)
        a["_" + String.fromCharCode(l)] = l;
      var u = Object.getOwnPropertyNames(a).map(function(d) {
        return a[d];
      });
      if (u.join("") !== "0123456789")
        return !1;
      var f = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(d) {
        f[d] = d;
      }), Object.keys(Object.assign({}, f)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Mt = o() ? Object.assign : function(s, a) {
    for (var l, u = r(s), f, d = 1; d < arguments.length; d++) {
      l = Object(arguments[d]);
      for (var h in l)
        t.call(l, h) && (u[h] = l[h]);
      if (e) {
        f = e(l);
        for (var p = 0; p < f.length; p++)
          n.call(l, f[p]) && (u[f[p]] = l[f[p]]);
      }
    }
    return u;
  }, Mt;
}
var jt, _r;
function Zt() {
  if (_r)
    return jt;
  _r = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return jt = e, jt;
}
var Ft, Cr;
function pn() {
  return Cr || (Cr = 1, Ft = Function.call.bind(Object.prototype.hasOwnProperty)), Ft;
}
var Lt, $r;
function Mo() {
  if ($r)
    return Lt;
  $r = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = Zt(), n = {}, r = pn();
    e = function(s) {
      var a = "Warning: " + s;
      typeof console < "u" && console.error(a);
      try {
        throw new Error(a);
      } catch {
      }
    };
  }
  function o(s, a, l, u, f) {
    if (process.env.NODE_ENV !== "production") {
      for (var d in s)
        if (r(s, d)) {
          var h;
          try {
            if (typeof s[d] != "function") {
              var p = Error(
                (u || "React class") + ": " + l + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw p.name = "Invariant Violation", p;
            }
            h = s[d](a, d, u, l, null, t);
          } catch (x) {
            h = x;
          }
          if (h && !(h instanceof Error) && e(
            (u || "React class") + ": type specification of " + l + " `" + d + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof h + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), h instanceof Error && !(h.message in n)) {
            n[h.message] = !0;
            var E = f ? f() : "";
            e(
              "Failed " + l + " type: " + h.message + (E != null ? E : "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, Lt = o, Lt;
}
var Bt, kr;
function jo() {
  if (kr)
    return Bt;
  kr = 1;
  var e = fn(), t = Io(), n = Zt(), r = pn(), o = Mo(), s = function() {
  };
  process.env.NODE_ENV !== "production" && (s = function(l) {
    var u = "Warning: " + l;
    typeof console < "u" && console.error(u);
    try {
      throw new Error(u);
    } catch {
    }
  });
  function a() {
    return null;
  }
  return Bt = function(l, u) {
    var f = typeof Symbol == "function" && Symbol.iterator, d = "@@iterator";
    function h(b) {
      var R = b && (f && b[f] || b[d]);
      if (typeof R == "function")
        return R;
    }
    var p = "<<anonymous>>", E = {
      array: C("array"),
      bigint: C("bigint"),
      bool: C("boolean"),
      func: C("function"),
      number: C("number"),
      object: C("object"),
      string: C("string"),
      symbol: C("symbol"),
      any: A(),
      arrayOf: P,
      element: w(),
      elementType: y(),
      instanceOf: V,
      node: $(),
      objectOf: ue,
      oneOf: U,
      oneOfType: K,
      shape: Q,
      exact: te
    };
    function x(b, R) {
      return b === R ? b !== 0 || 1 / b === 1 / R : b !== b && R !== R;
    }
    function v(b, R) {
      this.message = b, this.data = R && typeof R == "object" ? R : {}, this.stack = "";
    }
    v.prototype = Error.prototype;
    function m(b) {
      if (process.env.NODE_ENV !== "production")
        var R = {}, W = 0;
      function B(G, M, F, Y, X, z, he) {
        if (Y = Y || p, z = z || F, he !== n) {
          if (u) {
            var T = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw T.name = "Invariant Violation", T;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ve = Y + ":" + F;
            !R[ve] && W < 3 && (s(
              "You are manually calling a React.PropTypes validation function for the `" + z + "` prop on `" + Y + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), R[ve] = !0, W++);
          }
        }
        return M[F] == null ? G ? M[F] === null ? new v("The " + X + " `" + z + "` is marked as required " + ("in `" + Y + "`, but its value is `null`.")) : new v("The " + X + " `" + z + "` is marked as required in " + ("`" + Y + "`, but its value is `undefined`.")) : null : b(M, F, Y, X, z);
      }
      var j = B.bind(null, !1);
      return j.isRequired = B.bind(null, !0), j;
    }
    function C(b) {
      function R(W, B, j, G, M, F) {
        var Y = W[B], X = Z(Y);
        if (X !== b) {
          var z = fe(Y);
          return new v(
            "Invalid " + G + " `" + M + "` of type " + ("`" + z + "` supplied to `" + j + "`, expected ") + ("`" + b + "`."),
            { expectedType: b }
          );
        }
        return null;
      }
      return m(R);
    }
    function A() {
      return m(a);
    }
    function P(b) {
      function R(W, B, j, G, M) {
        if (typeof b != "function")
          return new v("Property `" + M + "` of component `" + j + "` has invalid PropType notation inside arrayOf.");
        var F = W[B];
        if (!Array.isArray(F)) {
          var Y = Z(F);
          return new v("Invalid " + G + " `" + M + "` of type " + ("`" + Y + "` supplied to `" + j + "`, expected an array."));
        }
        for (var X = 0; X < F.length; X++) {
          var z = b(F, X, j, G, M + "[" + X + "]", n);
          if (z instanceof Error)
            return z;
        }
        return null;
      }
      return m(R);
    }
    function w() {
      function b(R, W, B, j, G) {
        var M = R[W];
        if (!l(M)) {
          var F = Z(M);
          return new v("Invalid " + j + " `" + G + "` of type " + ("`" + F + "` supplied to `" + B + "`, expected a single ReactElement."));
        }
        return null;
      }
      return m(b);
    }
    function y() {
      function b(R, W, B, j, G) {
        var M = R[W];
        if (!e.isValidElementType(M)) {
          var F = Z(M);
          return new v("Invalid " + j + " `" + G + "` of type " + ("`" + F + "` supplied to `" + B + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return m(b);
    }
    function V(b) {
      function R(W, B, j, G, M) {
        if (!(W[B] instanceof b)) {
          var F = b.name || p, Y = ne(W[B]);
          return new v("Invalid " + G + " `" + M + "` of type " + ("`" + Y + "` supplied to `" + j + "`, expected ") + ("instance of `" + F + "`."));
        }
        return null;
      }
      return m(R);
    }
    function U(b) {
      if (!Array.isArray(b))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? s(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : s("Invalid argument supplied to oneOf, expected an array.")), a;
      function R(W, B, j, G, M) {
        for (var F = W[B], Y = 0; Y < b.length; Y++)
          if (x(F, b[Y]))
            return null;
        var X = JSON.stringify(b, function(he, T) {
          var ve = fe(T);
          return ve === "symbol" ? String(T) : T;
        });
        return new v("Invalid " + G + " `" + M + "` of value `" + String(F) + "` " + ("supplied to `" + j + "`, expected one of " + X + "."));
      }
      return m(R);
    }
    function ue(b) {
      function R(W, B, j, G, M) {
        if (typeof b != "function")
          return new v("Property `" + M + "` of component `" + j + "` has invalid PropType notation inside objectOf.");
        var F = W[B], Y = Z(F);
        if (Y !== "object")
          return new v("Invalid " + G + " `" + M + "` of type " + ("`" + Y + "` supplied to `" + j + "`, expected an object."));
        for (var X in F)
          if (r(F, X)) {
            var z = b(F, X, j, G, M + "." + X, n);
            if (z instanceof Error)
              return z;
          }
        return null;
      }
      return m(R);
    }
    function K(b) {
      if (!Array.isArray(b))
        return process.env.NODE_ENV !== "production" && s("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var R = 0; R < b.length; R++) {
        var W = b[R];
        if (typeof W != "function")
          return s(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + I(W) + " at index " + R + "."
          ), a;
      }
      function B(j, G, M, F, Y) {
        for (var X = [], z = 0; z < b.length; z++) {
          var he = b[z], T = he(j, G, M, F, Y, n);
          if (T == null)
            return null;
          T.data && r(T.data, "expectedType") && X.push(T.data.expectedType);
        }
        var ve = X.length > 0 ? ", expected one of type [" + X.join(", ") + "]" : "";
        return new v("Invalid " + F + " `" + Y + "` supplied to " + ("`" + M + "`" + ve + "."));
      }
      return m(B);
    }
    function $() {
      function b(R, W, B, j, G) {
        return D(R[W]) ? null : new v("Invalid " + j + " `" + G + "` supplied to " + ("`" + B + "`, expected a ReactNode."));
      }
      return m(b);
    }
    function q(b, R, W, B, j) {
      return new v(
        (b || "React class") + ": " + R + " type `" + W + "." + B + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + j + "`."
      );
    }
    function Q(b) {
      function R(W, B, j, G, M) {
        var F = W[B], Y = Z(F);
        if (Y !== "object")
          return new v("Invalid " + G + " `" + M + "` of type `" + Y + "` " + ("supplied to `" + j + "`, expected `object`."));
        for (var X in b) {
          var z = b[X];
          if (typeof z != "function")
            return q(j, G, M, X, fe(z));
          var he = z(F, X, j, G, M + "." + X, n);
          if (he)
            return he;
        }
        return null;
      }
      return m(R);
    }
    function te(b) {
      function R(W, B, j, G, M) {
        var F = W[B], Y = Z(F);
        if (Y !== "object")
          return new v("Invalid " + G + " `" + M + "` of type `" + Y + "` " + ("supplied to `" + j + "`, expected `object`."));
        var X = t({}, W[B], b);
        for (var z in X) {
          var he = b[z];
          if (r(b, z) && typeof he != "function")
            return q(j, G, M, z, fe(he));
          if (!he)
            return new v(
              "Invalid " + G + " `" + M + "` key `" + z + "` supplied to `" + j + "`.\nBad object: " + JSON.stringify(W[B], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(b), null, "  ")
            );
          var T = he(F, z, j, G, M + "." + z, n);
          if (T)
            return T;
        }
        return null;
      }
      return m(R);
    }
    function D(b) {
      switch (typeof b) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !b;
        case "object":
          if (Array.isArray(b))
            return b.every(D);
          if (b === null || l(b))
            return !0;
          var R = h(b);
          if (R) {
            var W = R.call(b), B;
            if (R !== b.entries) {
              for (; !(B = W.next()).done; )
                if (!D(B.value))
                  return !1;
            } else
              for (; !(B = W.next()).done; ) {
                var j = B.value;
                if (j && !D(j[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function H(b, R) {
      return b === "symbol" ? !0 : R ? R["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && R instanceof Symbol : !1;
    }
    function Z(b) {
      var R = typeof b;
      return Array.isArray(b) ? "array" : b instanceof RegExp ? "object" : H(R, b) ? "symbol" : R;
    }
    function fe(b) {
      if (typeof b > "u" || b === null)
        return "" + b;
      var R = Z(b);
      if (R === "object") {
        if (b instanceof Date)
          return "date";
        if (b instanceof RegExp)
          return "regexp";
      }
      return R;
    }
    function I(b) {
      var R = fe(b);
      switch (R) {
        case "array":
        case "object":
          return "an " + R;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + R;
        default:
          return R;
      }
    }
    function ne(b) {
      return !b.constructor || !b.constructor.name ? p : b.constructor.name;
    }
    return E.checkPropTypes = o, E.resetWarningCache = o.resetWarningCache, E.PropTypes = E, E;
  }, Bt;
}
var Wt, Nr;
function Fo() {
  if (Nr)
    return Wt;
  Nr = 1;
  var e = Zt();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, Wt = function() {
    function r(a, l, u, f, d, h) {
      if (h !== e) {
        var p = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw p.name = "Invariant Violation", p;
      }
    }
    r.isRequired = r;
    function o() {
      return r;
    }
    var s = {
      array: r,
      bigint: r,
      bool: r,
      func: r,
      number: r,
      object: r,
      string: r,
      symbol: r,
      any: r,
      arrayOf: o,
      element: r,
      elementType: r,
      instanceOf: o,
      node: r,
      objectOf: o,
      oneOf: o,
      oneOfType: o,
      shape: o,
      exact: o,
      checkPropTypes: n,
      resetWarningCache: t
    };
    return s.PropTypes = s, s;
  }, Wt;
}
if (process.env.NODE_ENV !== "production") {
  var Lo = fn(), Bo = !0;
  i.exports = jo()(Lo.isElement, Bo);
} else
  i.exports = Fo()();
function dn(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = dn(e[t])) && (r && (r += " "), r += n);
    else
      for (t in e)
        e[t] && (r && (r += " "), r += t);
  return r;
}
function Se() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = dn(e)) && (r && (r += " "), r += t);
  return r;
}
function mn(e) {
  return typeof e == "string";
}
function Wo(e, t, n) {
  return mn(e) ? t : O({}, t, {
    ownerState: O({}, t.ownerState, n)
  });
}
function Vo(e, t = []) {
  if (e === void 0)
    return {};
  const n = {};
  return Object.keys(e).filter((r) => r.match(/^on[A-Z]/) && typeof e[r] == "function" && !t.includes(r)).forEach((r) => {
    n[r] = e[r];
  }), n;
}
function qt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function St(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...r) {
    return e(...r) || t(...r);
  };
}
function bt(e) {
  return e !== null && typeof e == "object" && e.constructor === Object;
}
function we(e, t, n = {
  clone: !0
}) {
  const r = n.clone ? O({}, e) : e;
  return bt(e) && bt(t) && Object.keys(t).forEach((o) => {
    o !== "__proto__" && (bt(t[o]) && o in e && bt(e[o]) ? r[o] = we(e[o], t[o], n) : r[o] = t[o]);
  }), r;
}
function Uo(e) {
  const {
    prototype: t = {}
  } = e;
  return Boolean(t.isReactComponent);
}
function hn(e, t, n, r, o) {
  const s = e[t], a = o || t;
  if (s == null || typeof window > "u")
    return null;
  let l;
  const u = s.type;
  return typeof u == "function" && !Uo(u) && (l = "Did you accidentally use a plain function component for an element instead?"), l !== void 0 ? new Error(`Invalid ${r} \`${a}\` supplied to \`${n}\`. Expected an element that can hold a ref. ${l} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const yn = St(i.exports.element, hn);
yn.isRequired = St(i.exports.element.isRequired, hn);
const at = yn, Yo = "exact-prop: \u200B";
function vn(e) {
  return process.env.NODE_ENV === "production" ? e : O({}, e, {
    [Yo]: (t) => {
      const n = Object.keys(t).filter((r) => !e.hasOwnProperty(r));
      return n.length > 0 ? new Error(`The following props are not supported: ${n.map((r) => `\`${r}\``).join(", ")}. Please remove them.`) : null;
    }
  });
}
function Ge(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let n = 1; n < arguments.length; n += 1)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
var zt = { exports: {} }, ie = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ar;
function qo() {
  if (Ar)
    return ie;
  Ar = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), a = Symbol.for("react.context"), l = Symbol.for("react.server_context"), u = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), E = Symbol.for("react.offscreen"), x;
  x = Symbol.for("react.module.reference");
  function v(m) {
    if (typeof m == "object" && m !== null) {
      var C = m.$$typeof;
      switch (C) {
        case e:
          switch (m = m.type, m) {
            case n:
            case o:
            case r:
            case f:
            case d:
              return m;
            default:
              switch (m = m && m.$$typeof, m) {
                case l:
                case a:
                case u:
                case p:
                case h:
                case s:
                  return m;
                default:
                  return C;
              }
          }
        case t:
          return C;
      }
    }
  }
  return ie.ContextConsumer = a, ie.ContextProvider = s, ie.Element = e, ie.ForwardRef = u, ie.Fragment = n, ie.Lazy = p, ie.Memo = h, ie.Portal = t, ie.Profiler = o, ie.StrictMode = r, ie.Suspense = f, ie.SuspenseList = d, ie.isAsyncMode = function() {
    return !1;
  }, ie.isConcurrentMode = function() {
    return !1;
  }, ie.isContextConsumer = function(m) {
    return v(m) === a;
  }, ie.isContextProvider = function(m) {
    return v(m) === s;
  }, ie.isElement = function(m) {
    return typeof m == "object" && m !== null && m.$$typeof === e;
  }, ie.isForwardRef = function(m) {
    return v(m) === u;
  }, ie.isFragment = function(m) {
    return v(m) === n;
  }, ie.isLazy = function(m) {
    return v(m) === p;
  }, ie.isMemo = function(m) {
    return v(m) === h;
  }, ie.isPortal = function(m) {
    return v(m) === t;
  }, ie.isProfiler = function(m) {
    return v(m) === o;
  }, ie.isStrictMode = function(m) {
    return v(m) === r;
  }, ie.isSuspense = function(m) {
    return v(m) === f;
  }, ie.isSuspenseList = function(m) {
    return v(m) === d;
  }, ie.isValidElementType = function(m) {
    return typeof m == "string" || typeof m == "function" || m === n || m === o || m === r || m === f || m === d || m === E || typeof m == "object" && m !== null && (m.$$typeof === p || m.$$typeof === h || m.$$typeof === s || m.$$typeof === a || m.$$typeof === u || m.$$typeof === x || m.getModuleId !== void 0);
  }, ie.typeOf = v, ie;
}
var ae = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Dr;
function zo() {
  return Dr || (Dr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), a = Symbol.for("react.context"), l = Symbol.for("react.server_context"), u = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), E = Symbol.for("react.offscreen"), x = !1, v = !1, m = !1, C = !1, A = !1, P;
    P = Symbol.for("react.module.reference");
    function w(k) {
      return !!(typeof k == "string" || typeof k == "function" || k === n || k === o || A || k === r || k === f || k === d || C || k === E || x || v || m || typeof k == "object" && k !== null && (k.$$typeof === p || k.$$typeof === h || k.$$typeof === s || k.$$typeof === a || k.$$typeof === u || k.$$typeof === P || k.getModuleId !== void 0));
    }
    function y(k) {
      if (typeof k == "object" && k !== null) {
        var Ee = k.$$typeof;
        switch (Ee) {
          case e:
            var Te = k.type;
            switch (Te) {
              case n:
              case o:
              case r:
              case f:
              case d:
                return Te;
              default:
                var De = Te && Te.$$typeof;
                switch (De) {
                  case l:
                  case a:
                  case u:
                  case p:
                  case h:
                  case s:
                    return De;
                  default:
                    return Ee;
                }
            }
          case t:
            return Ee;
        }
      }
    }
    var V = a, U = s, ue = e, K = u, $ = n, q = p, Q = h, te = t, D = o, H = r, Z = f, fe = d, I = !1, ne = !1;
    function b(k) {
      return I || (I = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function R(k) {
      return ne || (ne = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function W(k) {
      return y(k) === a;
    }
    function B(k) {
      return y(k) === s;
    }
    function j(k) {
      return typeof k == "object" && k !== null && k.$$typeof === e;
    }
    function G(k) {
      return y(k) === u;
    }
    function M(k) {
      return y(k) === n;
    }
    function F(k) {
      return y(k) === p;
    }
    function Y(k) {
      return y(k) === h;
    }
    function X(k) {
      return y(k) === t;
    }
    function z(k) {
      return y(k) === o;
    }
    function he(k) {
      return y(k) === r;
    }
    function T(k) {
      return y(k) === f;
    }
    function ve(k) {
      return y(k) === d;
    }
    ae.ContextConsumer = V, ae.ContextProvider = U, ae.Element = ue, ae.ForwardRef = K, ae.Fragment = $, ae.Lazy = q, ae.Memo = Q, ae.Portal = te, ae.Profiler = D, ae.StrictMode = H, ae.Suspense = Z, ae.SuspenseList = fe, ae.isAsyncMode = b, ae.isConcurrentMode = R, ae.isContextConsumer = W, ae.isContextProvider = B, ae.isElement = j, ae.isForwardRef = G, ae.isFragment = M, ae.isLazy = F, ae.isMemo = Y, ae.isPortal = X, ae.isProfiler = z, ae.isStrictMode = he, ae.isSuspense = T, ae.isSuspenseList = ve, ae.isValidElementType = w, ae.typeOf = y;
  }()), ae;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = qo() : e.exports = zo();
})(zt);
const Ko = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function Ho(e) {
  const t = `${e}`.match(Ko);
  return t && t[1] || "";
}
function bn(e, t = "") {
  return e.displayName || e.name || Ho(e) || t;
}
function Ir(e, t, n) {
  const r = bn(t);
  return e.displayName || (r !== "" ? `${n}(${r})` : n);
}
function Go(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return bn(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case zt.exports.ForwardRef:
          return Ir(e, e.render, "ForwardRef");
        case zt.exports.Memo:
          return Ir(e, e.type, "memo");
        default:
          return;
      }
  }
}
function Ot(e, t, n, r, o) {
  if (process.env.NODE_ENV === "production")
    return null;
  const s = e[t], a = o || t;
  return s == null ? null : s && s.nodeType !== 1 ? new Error(`Invalid ${r} \`${a}\` supplied to \`${n}\`. Expected an HTMLElement.`) : null;
}
function xe(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : Ge(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Mr(...e) {
  return e.reduce((t, n) => n == null ? t : function(...o) {
    t.apply(this, o), n.apply(this, o);
  }, () => {
  });
}
function Xo(e, t = 166) {
  let n;
  function r(...o) {
    const s = () => {
      e.apply(this, o);
    };
    clearTimeout(n), n = setTimeout(s, t);
  }
  return r.clear = () => {
    clearTimeout(n);
  }, r;
}
function Ce(e) {
  return e && e.ownerDocument || document;
}
function ct(e) {
  return Ce(e).defaultView || window;
}
function Kt(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
const Jo = typeof window < "u" ? N.useLayoutEffect : N.useEffect, Ht = Jo;
let jr = 0;
function Zo(e) {
  const [t, n] = N.useState(e), r = e || t;
  return N.useEffect(() => {
    t == null && (jr += 1, n(`mui-${jr}`));
  }, [t]), r;
}
const Fr = N["useId"];
function Qo(e) {
  if (Fr !== void 0) {
    const t = Fr();
    return e != null ? e : t;
  }
  return Zo(e);
}
function Lr(e) {
  const t = N.useRef(e);
  return Ht(() => {
    t.current = e;
  }), N.useCallback((...n) => (0, t.current)(...n), []);
}
function Je(...e) {
  return N.useMemo(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((n) => {
      Kt(n, t);
    });
  }, e);
}
function es(e) {
  const t = e.documentElement.clientWidth;
  return Math.abs(window.innerWidth - t);
}
function ts(e) {
  const t = typeof e;
  switch (t) {
    case "number":
      return Number.isNaN(e) ? "NaN" : Number.isFinite(e) ? e !== Math.floor(e) ? "float" : "number" : "Infinity";
    case "object":
      return e === null ? "null" : e.constructor.name;
    default:
      return t;
  }
}
function rs(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e;
}
const ns = Number.isInteger || rs;
function gn(e, t, n, r) {
  const o = e[t];
  if (o == null || !ns(o)) {
    const s = ts(o);
    return new RangeError(`Invalid ${r} \`${t}\` of type \`${s}\` supplied to \`${n}\`, expected \`integer\`.`);
  }
  return null;
}
function xn(e, t, ...n) {
  return e[t] === void 0 ? null : gn(e, t, ...n);
}
function Gt() {
  return null;
}
xn.isRequired = gn;
Gt.isRequired = Gt;
const En = process.env.NODE_ENV === "production" ? Gt : xn;
function os(e, t) {
  const n = O({}, t);
  return Object.keys(e).forEach((r) => {
    n[r] === void 0 && (n[r] = e[r]);
  }), n;
}
function lt(e, t, n) {
  const r = {};
  return Object.keys(e).forEach(
    (o) => {
      r[o] = e[o].reduce((s, a) => (a && (s.push(t(a)), n && n[a] && s.push(n[a])), s), []).join(" ");
    }
  ), r;
}
const Br = (e) => e, ss = () => {
  let e = Br;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = Br;
    }
  };
}, is = ss(), as = is, cs = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  required: "required",
  selected: "selected"
};
function Fe(e, t, n = "Mui") {
  const r = cs[t];
  return r ? `${n}-${r}` : `${as.generate(e)}-${t}`;
}
function ut(e, t, n = "Mui") {
  const r = {};
  return t.forEach((o) => {
    r[o] = Fe(e, o, n);
  }), r;
}
function Wr(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((n) => !(n.match(/^on[A-Z]/) && typeof e[n] == "function")).forEach((n) => {
    t[n] = e[n];
  }), t;
}
function ls(e) {
  const {
    getSlotProps: t,
    additionalProps: n,
    externalSlotProps: r,
    externalForwardedProps: o,
    className: s
  } = e;
  if (!t) {
    const E = Se(o == null ? void 0 : o.className, r == null ? void 0 : r.className, s, n == null ? void 0 : n.className), x = O({}, n == null ? void 0 : n.style, o == null ? void 0 : o.style, r == null ? void 0 : r.style), v = O({}, n, o, r);
    return E.length > 0 && (v.className = E), Object.keys(x).length > 0 && (v.style = x), {
      props: v,
      internalRef: void 0
    };
  }
  const a = Vo(O({}, o, r)), l = Wr(r), u = Wr(o), f = t(a), d = Se(f == null ? void 0 : f.className, n == null ? void 0 : n.className, s, o == null ? void 0 : o.className, r == null ? void 0 : r.className), h = O({}, f == null ? void 0 : f.style, n == null ? void 0 : n.style, o == null ? void 0 : o.style, r == null ? void 0 : r.style), p = O({}, f, n, u, l);
  return d.length > 0 && (p.className = d), Object.keys(h).length > 0 && (p.style = h), {
    props: p,
    internalRef: f.ref
  };
}
const us = ["elementType", "externalSlotProps", "ownerState"];
function Vr(e) {
  var t;
  const {
    elementType: n,
    externalSlotProps: r,
    ownerState: o
  } = e, s = me(e, us), a = qt(r, o), {
    props: l,
    internalRef: u
  } = ls(O({}, s, {
    externalSlotProps: a
  })), f = Je(u, a == null ? void 0 : a.ref, (t = e.additionalProps) == null ? void 0 : t.ref);
  return Wo(n, O({}, l, {
    ref: f
  }), o);
}
var Pt = { exports: {} }, Qe = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ur;
function fs() {
  if (Ur)
    return Qe;
  Ur = 1;
  var e = He, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(l, u, f) {
    var d, h = {}, p = null, E = null;
    f !== void 0 && (p = "" + f), u.key !== void 0 && (p = "" + u.key), u.ref !== void 0 && (E = u.ref);
    for (d in u)
      r.call(u, d) && !s.hasOwnProperty(d) && (h[d] = u[d]);
    if (l && l.defaultProps)
      for (d in u = l.defaultProps, u)
        h[d] === void 0 && (h[d] = u[d]);
    return { $$typeof: t, type: l, key: p, ref: E, props: h, _owner: o.current };
  }
  return Qe.Fragment = n, Qe.jsx = a, Qe.jsxs = a, Qe;
}
var et = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yr;
function ps() {
  return Yr || (Yr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = He, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), l = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), E = Symbol.for("react.offscreen"), x = Symbol.iterator, v = "@@iterator";
    function m(c) {
      if (c === null || typeof c != "object")
        return null;
      var g = x && c[x] || c[v];
      return typeof g == "function" ? g : null;
    }
    var C = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function A(c) {
      {
        for (var g = arguments.length, S = new Array(g > 1 ? g - 1 : 0), L = 1; L < g; L++)
          S[L - 1] = arguments[L];
        P("error", c, S);
      }
    }
    function P(c, g, S) {
      {
        var L = C.ReactDebugCurrentFrame, re = L.getStackAddendum();
        re !== "" && (g += "%s", S = S.concat([re]));
        var le = S.map(function(ee) {
          return String(ee);
        });
        le.unshift("Warning: " + g), Function.prototype.apply.call(console[c], console, le);
      }
    }
    var w = !1, y = !1, V = !1, U = !1, ue = !1, K;
    K = Symbol.for("react.module.reference");
    function $(c) {
      return !!(typeof c == "string" || typeof c == "function" || c === r || c === s || ue || c === o || c === f || c === d || U || c === E || w || y || V || typeof c == "object" && c !== null && (c.$$typeof === p || c.$$typeof === h || c.$$typeof === a || c.$$typeof === l || c.$$typeof === u || c.$$typeof === K || c.getModuleId !== void 0));
    }
    function q(c, g, S) {
      var L = c.displayName;
      if (L)
        return L;
      var re = g.displayName || g.name || "";
      return re !== "" ? S + "(" + re + ")" : S;
    }
    function Q(c) {
      return c.displayName || "Context";
    }
    function te(c) {
      if (c == null)
        return null;
      if (typeof c.tag == "number" && A("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof c == "function")
        return c.displayName || c.name || null;
      if (typeof c == "string")
        return c;
      switch (c) {
        case r:
          return "Fragment";
        case n:
          return "Portal";
        case s:
          return "Profiler";
        case o:
          return "StrictMode";
        case f:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof c == "object")
        switch (c.$$typeof) {
          case l:
            var g = c;
            return Q(g) + ".Consumer";
          case a:
            var S = c;
            return Q(S._context) + ".Provider";
          case u:
            return q(c, c.render, "ForwardRef");
          case h:
            var L = c.displayName || null;
            return L !== null ? L : te(c.type) || "Memo";
          case p: {
            var re = c, le = re._payload, ee = re._init;
            try {
              return te(ee(le));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var D = Object.assign, H = 0, Z, fe, I, ne, b, R, W;
    function B() {
    }
    B.__reactDisabledLog = !0;
    function j() {
      {
        if (H === 0) {
          Z = console.log, fe = console.info, I = console.warn, ne = console.error, b = console.group, R = console.groupCollapsed, W = console.groupEnd;
          var c = {
            configurable: !0,
            enumerable: !0,
            value: B,
            writable: !0
          };
          Object.defineProperties(console, {
            info: c,
            log: c,
            warn: c,
            error: c,
            group: c,
            groupCollapsed: c,
            groupEnd: c
          });
        }
        H++;
      }
    }
    function G() {
      {
        if (H--, H === 0) {
          var c = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: D({}, c, {
              value: Z
            }),
            info: D({}, c, {
              value: fe
            }),
            warn: D({}, c, {
              value: I
            }),
            error: D({}, c, {
              value: ne
            }),
            group: D({}, c, {
              value: b
            }),
            groupCollapsed: D({}, c, {
              value: R
            }),
            groupEnd: D({}, c, {
              value: W
            })
          });
        }
        H < 0 && A("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var M = C.ReactCurrentDispatcher, F;
    function Y(c, g, S) {
      {
        if (F === void 0)
          try {
            throw Error();
          } catch (re) {
            var L = re.stack.trim().match(/\n( *(at )?)/);
            F = L && L[1] || "";
          }
        return `
` + F + c;
      }
    }
    var X = !1, z;
    {
      var he = typeof WeakMap == "function" ? WeakMap : Map;
      z = new he();
    }
    function T(c, g) {
      if (!c || X)
        return "";
      {
        var S = z.get(c);
        if (S !== void 0)
          return S;
      }
      var L;
      X = !0;
      var re = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var le;
      le = M.current, M.current = null, j();
      try {
        if (g) {
          var ee = function() {
            throw Error();
          };
          if (Object.defineProperty(ee.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(ee, []);
            } catch (Pe) {
              L = Pe;
            }
            Reflect.construct(c, [], ee);
          } else {
            try {
              ee.call();
            } catch (Pe) {
              L = Pe;
            }
            c.call(ee.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Pe) {
            L = Pe;
          }
          c();
        }
      } catch (Pe) {
        if (Pe && L && typeof Pe.stack == "string") {
          for (var J = Pe.stack.split(`
`), ge = L.stack.split(`
`), de = J.length - 1, ye = ge.length - 1; de >= 1 && ye >= 0 && J[de] !== ge[ye]; )
            ye--;
          for (; de >= 1 && ye >= 0; de--, ye--)
            if (J[de] !== ge[ye]) {
              if (de !== 1 || ye !== 1)
                do
                  if (de--, ye--, ye < 0 || J[de] !== ge[ye]) {
                    var Re = `
` + J[de].replace(" at new ", " at ");
                    return c.displayName && Re.includes("<anonymous>") && (Re = Re.replace("<anonymous>", c.displayName)), typeof c == "function" && z.set(c, Re), Re;
                  }
                while (de >= 1 && ye >= 0);
              break;
            }
        }
      } finally {
        X = !1, M.current = le, G(), Error.prepareStackTrace = re;
      }
      var Be = c ? c.displayName || c.name : "", Rr = Be ? Y(Be) : "";
      return typeof c == "function" && z.set(c, Rr), Rr;
    }
    function ve(c, g, S) {
      return T(c, !1);
    }
    function k(c) {
      var g = c.prototype;
      return !!(g && g.isReactComponent);
    }
    function Ee(c, g, S) {
      if (c == null)
        return "";
      if (typeof c == "function")
        return T(c, k(c));
      if (typeof c == "string")
        return Y(c);
      switch (c) {
        case f:
          return Y("Suspense");
        case d:
          return Y("SuspenseList");
      }
      if (typeof c == "object")
        switch (c.$$typeof) {
          case u:
            return ve(c.render);
          case h:
            return Ee(c.type, g, S);
          case p: {
            var L = c, re = L._payload, le = L._init;
            try {
              return Ee(le(re), g, S);
            } catch {
            }
          }
        }
      return "";
    }
    var Te = Object.prototype.hasOwnProperty, De = {}, be = C.ReactDebugCurrentFrame;
    function yt(c) {
      if (c) {
        var g = c._owner, S = Ee(c.type, c._source, g ? g.type : null);
        be.setExtraStackFrame(S);
      } else
        be.setExtraStackFrame(null);
    }
    function co(c, g, S, L, re) {
      {
        var le = Function.call.bind(Te);
        for (var ee in c)
          if (le(c, ee)) {
            var J = void 0;
            try {
              if (typeof c[ee] != "function") {
                var ge = Error((L || "React class") + ": " + S + " type `" + ee + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof c[ee] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ge.name = "Invariant Violation", ge;
              }
              J = c[ee](g, ee, L, S, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (de) {
              J = de;
            }
            J && !(J instanceof Error) && (yt(re), A("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", L || "React class", S, ee, typeof J), yt(null)), J instanceof Error && !(J.message in De) && (De[J.message] = !0, yt(re), A("Failed %s type: %s", S, J.message), yt(null));
          }
      }
    }
    var lo = Array.isArray;
    function Ct(c) {
      return lo(c);
    }
    function uo(c) {
      {
        var g = typeof Symbol == "function" && Symbol.toStringTag, S = g && c[Symbol.toStringTag] || c.constructor.name || "Object";
        return S;
      }
    }
    function fo(c) {
      try {
        return dr(c), !1;
      } catch {
        return !0;
      }
    }
    function dr(c) {
      return "" + c;
    }
    function mr(c) {
      if (fo(c))
        return A("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", uo(c)), dr(c);
    }
    var Ze = C.ReactCurrentOwner, po = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, hr, yr, $t;
    $t = {};
    function mo(c) {
      if (Te.call(c, "ref")) {
        var g = Object.getOwnPropertyDescriptor(c, "ref").get;
        if (g && g.isReactWarning)
          return !1;
      }
      return c.ref !== void 0;
    }
    function ho(c) {
      if (Te.call(c, "key")) {
        var g = Object.getOwnPropertyDescriptor(c, "key").get;
        if (g && g.isReactWarning)
          return !1;
      }
      return c.key !== void 0;
    }
    function yo(c, g) {
      if (typeof c.ref == "string" && Ze.current && g && Ze.current.stateNode !== g) {
        var S = te(Ze.current.type);
        $t[S] || (A('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', te(Ze.current.type), c.ref), $t[S] = !0);
      }
    }
    function vo(c, g) {
      {
        var S = function() {
          hr || (hr = !0, A("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", g));
        };
        S.isReactWarning = !0, Object.defineProperty(c, "key", {
          get: S,
          configurable: !0
        });
      }
    }
    function bo(c, g) {
      {
        var S = function() {
          yr || (yr = !0, A("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", g));
        };
        S.isReactWarning = !0, Object.defineProperty(c, "ref", {
          get: S,
          configurable: !0
        });
      }
    }
    var go = function(c, g, S, L, re, le, ee) {
      var J = {
        $$typeof: t,
        type: c,
        key: g,
        ref: S,
        props: ee,
        _owner: le
      };
      return J._store = {}, Object.defineProperty(J._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(J, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: L
      }), Object.defineProperty(J, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: re
      }), Object.freeze && (Object.freeze(J.props), Object.freeze(J)), J;
    };
    function xo(c, g, S, L, re) {
      {
        var le, ee = {}, J = null, ge = null;
        S !== void 0 && (mr(S), J = "" + S), ho(g) && (mr(g.key), J = "" + g.key), mo(g) && (ge = g.ref, yo(g, re));
        for (le in g)
          Te.call(g, le) && !po.hasOwnProperty(le) && (ee[le] = g[le]);
        if (c && c.defaultProps) {
          var de = c.defaultProps;
          for (le in de)
            ee[le] === void 0 && (ee[le] = de[le]);
        }
        if (J || ge) {
          var ye = typeof c == "function" ? c.displayName || c.name || "Unknown" : c;
          J && vo(ee, ye), ge && bo(ee, ye);
        }
        return go(c, J, ge, re, L, Ze.current, ee);
      }
    }
    var kt = C.ReactCurrentOwner, vr = C.ReactDebugCurrentFrame;
    function Le(c) {
      if (c) {
        var g = c._owner, S = Ee(c.type, c._source, g ? g.type : null);
        vr.setExtraStackFrame(S);
      } else
        vr.setExtraStackFrame(null);
    }
    var Nt;
    Nt = !1;
    function At(c) {
      return typeof c == "object" && c !== null && c.$$typeof === t;
    }
    function br() {
      {
        if (kt.current) {
          var c = te(kt.current.type);
          if (c)
            return `

Check the render method of \`` + c + "`.";
        }
        return "";
      }
    }
    function Eo(c) {
      {
        if (c !== void 0) {
          var g = c.fileName.replace(/^.*[\\\/]/, ""), S = c.lineNumber;
          return `

Check your code at ` + g + ":" + S + ".";
        }
        return "";
      }
    }
    var gr = {};
    function To(c) {
      {
        var g = br();
        if (!g) {
          var S = typeof c == "string" ? c : c.displayName || c.name;
          S && (g = `

Check the top-level render call using <` + S + ">.");
        }
        return g;
      }
    }
    function xr(c, g) {
      {
        if (!c._store || c._store.validated || c.key != null)
          return;
        c._store.validated = !0;
        var S = To(g);
        if (gr[S])
          return;
        gr[S] = !0;
        var L = "";
        c && c._owner && c._owner !== kt.current && (L = " It was passed a child from " + te(c._owner.type) + "."), Le(c), A('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', S, L), Le(null);
      }
    }
    function Er(c, g) {
      {
        if (typeof c != "object")
          return;
        if (Ct(c))
          for (var S = 0; S < c.length; S++) {
            var L = c[S];
            At(L) && xr(L, g);
          }
        else if (At(c))
          c._store && (c._store.validated = !0);
        else if (c) {
          var re = m(c);
          if (typeof re == "function" && re !== c.entries)
            for (var le = re.call(c), ee; !(ee = le.next()).done; )
              At(ee.value) && xr(ee.value, g);
        }
      }
    }
    function Ro(c) {
      {
        var g = c.type;
        if (g == null || typeof g == "string")
          return;
        var S;
        if (typeof g == "function")
          S = g.propTypes;
        else if (typeof g == "object" && (g.$$typeof === u || g.$$typeof === h))
          S = g.propTypes;
        else
          return;
        if (S) {
          var L = te(g);
          co(S, c.props, "prop", L, c);
        } else if (g.PropTypes !== void 0 && !Nt) {
          Nt = !0;
          var re = te(g);
          A("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", re || "Unknown");
        }
        typeof g.getDefaultProps == "function" && !g.getDefaultProps.isReactClassApproved && A("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function So(c) {
      {
        for (var g = Object.keys(c.props), S = 0; S < g.length; S++) {
          var L = g[S];
          if (L !== "children" && L !== "key") {
            Le(c), A("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", L), Le(null);
            break;
          }
        }
        c.ref !== null && (Le(c), A("Invalid attribute `ref` supplied to `React.Fragment`."), Le(null));
      }
    }
    function Tr(c, g, S, L, re, le) {
      {
        var ee = $(c);
        if (!ee) {
          var J = "";
          (c === void 0 || typeof c == "object" && c !== null && Object.keys(c).length === 0) && (J += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ge = Eo(re);
          ge ? J += ge : J += br();
          var de;
          c === null ? de = "null" : Ct(c) ? de = "array" : c !== void 0 && c.$$typeof === t ? (de = "<" + (te(c.type) || "Unknown") + " />", J = " Did you accidentally export a JSX literal instead of a component?") : de = typeof c, A("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", de, J);
        }
        var ye = xo(c, g, S, re, le);
        if (ye == null)
          return ye;
        if (ee) {
          var Re = g.children;
          if (Re !== void 0)
            if (L)
              if (Ct(Re)) {
                for (var Be = 0; Be < Re.length; Be++)
                  Er(Re[Be], c);
                Object.freeze && Object.freeze(Re);
              } else
                A("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Er(Re, c);
        }
        return c === r ? So(ye) : Ro(ye), ye;
      }
    }
    function Oo(c, g, S) {
      return Tr(c, g, S, !0);
    }
    function Po(c, g, S) {
      return Tr(c, g, S, !1);
    }
    var wo = Po, _o = Oo;
    et.Fragment = r, et.jsx = wo, et.jsxs = _o;
  }()), et;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = fs() : e.exports = ps();
})(Pt);
const Qt = Pt.exports.Fragment, ce = Pt.exports.jsx, er = Pt.exports.jsxs, ds = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function ms(e) {
  const t = parseInt(e.getAttribute("tabindex"), 10);
  return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t;
}
function hs(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !1;
  const t = (r) => e.ownerDocument.querySelector(`input[type="radio"]${r}`);
  let n = t(`[name="${e.name}"]:checked`);
  return n || (n = t(`[name="${e.name}"]`)), n !== e;
}
function ys(e) {
  return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || hs(e));
}
function vs(e) {
  const t = [], n = [];
  return Array.from(e.querySelectorAll(ds)).forEach((r, o) => {
    const s = ms(r);
    s === -1 || !ys(r) || (s === 0 ? t.push(r) : n.push({
      documentOrder: o,
      tabIndex: s,
      node: r
    }));
  }), n.sort((r, o) => r.tabIndex === o.tabIndex ? r.documentOrder - o.documentOrder : r.tabIndex - o.tabIndex).map((r) => r.node).concat(t);
}
function bs() {
  return !0;
}
function Et(e) {
  const {
    children: t,
    disableAutoFocus: n = !1,
    disableEnforceFocus: r = !1,
    disableRestoreFocus: o = !1,
    getTabbable: s = vs,
    isEnabled: a = bs,
    open: l
  } = e, u = N.useRef(), f = N.useRef(null), d = N.useRef(null), h = N.useRef(null), p = N.useRef(null), E = N.useRef(!1), x = N.useRef(null), v = Je(t.ref, x), m = N.useRef(null);
  N.useEffect(() => {
    !l || !x.current || (E.current = !n);
  }, [n, l]), N.useEffect(() => {
    if (!l || !x.current)
      return;
    const P = Ce(x.current);
    return x.current.contains(P.activeElement) || (x.current.hasAttribute("tabIndex") || (process.env.NODE_ENV !== "production" && console.error(["MUI: The modal content node does not accept focus.", 'For the benefit of assistive technologies, the tabIndex of the node is being set to "-1".'].join(`
`)), x.current.setAttribute("tabIndex", -1)), E.current && x.current.focus()), () => {
      o || (h.current && h.current.focus && (u.current = !0, h.current.focus()), h.current = null);
    };
  }, [l]), N.useEffect(() => {
    if (!l || !x.current)
      return;
    const P = Ce(x.current), w = (U) => {
      const {
        current: ue
      } = x;
      if (ue !== null) {
        if (!P.hasFocus() || r || !a() || u.current) {
          u.current = !1;
          return;
        }
        if (!ue.contains(P.activeElement)) {
          if (U && p.current !== U.target || P.activeElement !== p.current)
            p.current = null;
          else if (p.current !== null)
            return;
          if (!E.current)
            return;
          let q = [];
          if ((P.activeElement === f.current || P.activeElement === d.current) && (q = s(x.current)), q.length > 0) {
            var K, $;
            const Q = Boolean(((K = m.current) == null ? void 0 : K.shiftKey) && (($ = m.current) == null ? void 0 : $.key) === "Tab"), te = q[0], D = q[q.length - 1];
            Q ? D.focus() : te.focus();
          } else
            ue.focus();
        }
      }
    }, y = (U) => {
      m.current = U, !(r || !a() || U.key !== "Tab") && P.activeElement === x.current && U.shiftKey && (u.current = !0, d.current.focus());
    };
    P.addEventListener("focusin", w), P.addEventListener("keydown", y, !0);
    const V = setInterval(() => {
      P.activeElement.tagName === "BODY" && w();
    }, 50);
    return () => {
      clearInterval(V), P.removeEventListener("focusin", w), P.removeEventListener("keydown", y, !0);
    };
  }, [n, r, o, a, l, s]);
  const C = (P) => {
    h.current === null && (h.current = P.relatedTarget), E.current = !0, p.current = P.target;
    const w = t.props.onFocus;
    w && w(P);
  }, A = (P) => {
    h.current === null && (h.current = P.relatedTarget), E.current = !0;
  };
  return /* @__PURE__ */ er(N.Fragment, {
    children: [/* @__PURE__ */ ce("div", {
      tabIndex: l ? 0 : -1,
      onFocus: A,
      ref: f,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ N.cloneElement(t, {
      ref: v,
      onFocus: C
    }), /* @__PURE__ */ ce("div", {
      tabIndex: l ? 0 : -1,
      onFocus: A,
      ref: d,
      "data-testid": "sentinelEnd"
    })]
  });
}
process.env.NODE_ENV !== "production" && (Et.propTypes = {
  children: at,
  disableAutoFocus: i.exports.bool,
  disableEnforceFocus: i.exports.bool,
  disableRestoreFocus: i.exports.bool,
  getTabbable: i.exports.func,
  isEnabled: i.exports.func,
  open: i.exports.bool.isRequired
});
process.env.NODE_ENV !== "production" && (Et["propTypes"] = vn(Et.propTypes));
function gs(e) {
  return typeof e == "function" ? e() : e;
}
const Tt = /* @__PURE__ */ N.forwardRef(function(t, n) {
  const {
    children: r,
    container: o,
    disablePortal: s = !1
  } = t, [a, l] = N.useState(null), u = Je(/* @__PURE__ */ N.isValidElement(r) ? r.ref : null, n);
  return Ht(() => {
    s || l(gs(o) || document.body);
  }, [o, s]), Ht(() => {
    if (a && !s)
      return Kt(n, a), () => {
        Kt(n, null);
      };
  }, [n, a, s]), s ? /* @__PURE__ */ N.isValidElement(r) ? /* @__PURE__ */ N.cloneElement(r, {
    ref: u
  }) : r : /* @__PURE__ */ ce(N.Fragment, {
    children: a && /* @__PURE__ */ No.createPortal(r, a)
  });
});
process.env.NODE_ENV !== "production" && (Tt.propTypes = {
  children: i.exports.node,
  container: i.exports.oneOfType([Ot, i.exports.func]),
  disablePortal: i.exports.bool
});
process.env.NODE_ENV !== "production" && (Tt["propTypes"] = vn(Tt.propTypes));
const xs = Tt;
function Es(e) {
  const t = Ce(e);
  return t.body === e ? ct(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function ot(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function qr(e) {
  return parseInt(ct(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function Ts(e) {
  const n = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].indexOf(e.tagName) !== -1, r = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return n || r;
}
function zr(e, t, n, r, o) {
  const s = [t, n, ...r];
  [].forEach.call(e.children, (a) => {
    const l = s.indexOf(a) === -1, u = !Ts(a);
    l && u && ot(a, o);
  });
}
function Vt(e, t) {
  let n = -1;
  return e.some((r, o) => t(r) ? (n = o, !0) : !1), n;
}
function Rs(e, t) {
  const n = [], r = e.container;
  if (!t.disableScrollLock) {
    if (Es(r)) {
      const a = es(Ce(r));
      n.push({
        value: r.style.paddingRight,
        property: "padding-right",
        el: r
      }), r.style.paddingRight = `${qr(r) + a}px`;
      const l = Ce(r).querySelectorAll(".mui-fixed");
      [].forEach.call(l, (u) => {
        n.push({
          value: u.style.paddingRight,
          property: "padding-right",
          el: u
        }), u.style.paddingRight = `${qr(u) + a}px`;
      });
    }
    let s;
    if (r.parentNode instanceof DocumentFragment)
      s = Ce(r).body;
    else {
      const a = r.parentElement, l = ct(r);
      s = (a == null ? void 0 : a.nodeName) === "HTML" && l.getComputedStyle(a).overflowY === "scroll" ? a : r;
    }
    n.push({
      value: s.style.overflow,
      property: "overflow",
      el: s
    }, {
      value: s.style.overflowX,
      property: "overflow-x",
      el: s
    }, {
      value: s.style.overflowY,
      property: "overflow-y",
      el: s
    }), s.style.overflow = "hidden";
  }
  return () => {
    n.forEach(({
      value: s,
      el: a,
      property: l
    }) => {
      s ? a.style.setProperty(l, s) : a.style.removeProperty(l);
    });
  };
}
function Ss(e) {
  const t = [];
  return [].forEach.call(e.children, (n) => {
    n.getAttribute("aria-hidden") === "true" && t.push(n);
  }), t;
}
class Os {
  constructor() {
    this.containers = void 0, this.modals = void 0, this.modals = [], this.containers = [];
  }
  add(t, n) {
    let r = this.modals.indexOf(t);
    if (r !== -1)
      return r;
    r = this.modals.length, this.modals.push(t), t.modalRef && ot(t.modalRef, !1);
    const o = Ss(n);
    zr(n, t.mount, t.modalRef, o, !0);
    const s = Vt(this.containers, (a) => a.container === n);
    return s !== -1 ? (this.containers[s].modals.push(t), r) : (this.containers.push({
      modals: [t],
      container: n,
      restore: null,
      hiddenSiblings: o
    }), r);
  }
  mount(t, n) {
    const r = Vt(this.containers, (s) => s.modals.indexOf(t) !== -1), o = this.containers[r];
    o.restore || (o.restore = Rs(o, n));
  }
  remove(t, n = !0) {
    const r = this.modals.indexOf(t);
    if (r === -1)
      return r;
    const o = Vt(this.containers, (a) => a.modals.indexOf(t) !== -1), s = this.containers[o];
    if (s.modals.splice(s.modals.indexOf(t), 1), this.modals.splice(r, 1), s.modals.length === 0)
      s.restore && s.restore(), t.modalRef && ot(t.modalRef, n), zr(s.container, t.mount, t.modalRef, s.hiddenSiblings, !1), this.containers.splice(o, 1);
    else {
      const a = s.modals[s.modals.length - 1];
      a.modalRef && ot(a.modalRef, !1);
    }
    return r;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
function Ps(e) {
  return Fe("MuiModal", e);
}
ut("MuiModal", ["root", "hidden"]);
const ws = ["children", "classes", "closeAfterTransition", "component", "container", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "manager", "onBackdropClick", "onClose", "onKeyDown", "open", "onTransitionEnter", "onTransitionExited", "slotProps", "slots"], _s = (e) => {
  const {
    open: t,
    exited: n,
    classes: r
  } = e;
  return lt({
    root: ["root", !t && n && "hidden"]
  }, Ps, r);
};
function Cs(e) {
  return typeof e == "function" ? e() : e;
}
function $s(e) {
  return e.children ? e.children.props.hasOwnProperty("in") : !1;
}
const ks = new Os(), Tn = /* @__PURE__ */ N.forwardRef(function(t, n) {
  var r, o;
  const {
    children: s,
    classes: a,
    closeAfterTransition: l = !1,
    component: u,
    container: f,
    disableAutoFocus: d = !1,
    disableEnforceFocus: h = !1,
    disableEscapeKeyDown: p = !1,
    disablePortal: E = !1,
    disableRestoreFocus: x = !1,
    disableScrollLock: v = !1,
    hideBackdrop: m = !1,
    keepMounted: C = !1,
    manager: A = ks,
    onBackdropClick: P,
    onClose: w,
    onKeyDown: y,
    open: V,
    onTransitionEnter: U,
    onTransitionExited: ue,
    slotProps: K = {},
    slots: $ = {}
  } = t, q = me(t, ws), [Q, te] = N.useState(!0), D = N.useRef({}), H = N.useRef(null), Z = N.useRef(null), fe = Je(Z, n), I = $s(t), ne = (r = t["aria-hidden"]) != null ? r : !0, b = () => Ce(H.current), R = () => (D.current.modalRef = Z.current, D.current.mountNode = H.current, D.current), W = () => {
    A.mount(R(), {
      disableScrollLock: v
    }), Z.current.scrollTop = 0;
  }, B = Lr(() => {
    const be = Cs(f) || b().body;
    A.add(R(), be), Z.current && W();
  }), j = N.useCallback(() => A.isTopModal(R()), [A]), G = Lr((be) => {
    H.current = be, be && (V && j() ? W() : ot(Z.current, ne));
  }), M = N.useCallback(() => {
    A.remove(R(), ne);
  }, [A, ne]);
  N.useEffect(() => () => {
    M();
  }, [M]), N.useEffect(() => {
    V ? B() : (!I || !l) && M();
  }, [V, M, I, l, B]);
  const F = O({}, t, {
    classes: a,
    closeAfterTransition: l,
    disableAutoFocus: d,
    disableEnforceFocus: h,
    disableEscapeKeyDown: p,
    disablePortal: E,
    disableRestoreFocus: x,
    disableScrollLock: v,
    exited: Q,
    hideBackdrop: m,
    keepMounted: C
  }), Y = _s(F), X = () => {
    te(!1), U && U();
  }, z = () => {
    te(!0), ue && ue(), l && M();
  }, he = (be) => {
    be.target === be.currentTarget && (P && P(be), w && w(be, "backdropClick"));
  }, T = (be) => {
    y && y(be), !(be.key !== "Escape" || !j()) && (p || (be.stopPropagation(), w && w(be, "escapeKeyDown")));
  }, ve = {};
  s.props.tabIndex === void 0 && (ve.tabIndex = "-1"), I && (ve.onEnter = Mr(X, s.props.onEnter), ve.onExited = Mr(z, s.props.onExited));
  const k = (o = u != null ? u : $.root) != null ? o : "div", Ee = Vr({
    elementType: k,
    externalSlotProps: K.root,
    externalForwardedProps: q,
    additionalProps: {
      ref: fe,
      role: "presentation",
      onKeyDown: T
    },
    className: Y.root,
    ownerState: F
  }), Te = $.backdrop, De = Vr({
    elementType: Te,
    externalSlotProps: K.backdrop,
    additionalProps: {
      "aria-hidden": !0,
      onClick: he,
      open: V
    },
    className: Y.backdrop,
    ownerState: F
  });
  return !C && !V && (!I || Q) ? null : /* @__PURE__ */ ce(xs, {
    ref: G,
    container: f,
    disablePortal: E,
    children: /* @__PURE__ */ er(k, O({}, Ee, {
      children: [!m && Te ? /* @__PURE__ */ ce(Te, O({}, De)) : null, /* @__PURE__ */ ce(Et, {
        disableEnforceFocus: h,
        disableAutoFocus: d,
        disableRestoreFocus: x,
        isEnabled: j,
        open: V,
        children: /* @__PURE__ */ N.cloneElement(s, ve)
      })]
    }))
  });
});
process.env.NODE_ENV !== "production" && (Tn.propTypes = {
  children: at.isRequired,
  classes: i.exports.object,
  closeAfterTransition: i.exports.bool,
  component: i.exports.elementType,
  container: i.exports.oneOfType([Ot, i.exports.func]),
  disableAutoFocus: i.exports.bool,
  disableEnforceFocus: i.exports.bool,
  disableEscapeKeyDown: i.exports.bool,
  disablePortal: i.exports.bool,
  disableRestoreFocus: i.exports.bool,
  disableScrollLock: i.exports.bool,
  hideBackdrop: i.exports.bool,
  keepMounted: i.exports.bool,
  onBackdropClick: i.exports.func,
  onClose: i.exports.func,
  onKeyDown: i.exports.func,
  open: i.exports.bool.isRequired,
  slotProps: i.exports.shape({
    backdrop: i.exports.oneOfType([i.exports.func, i.exports.object]),
    root: i.exports.oneOfType([i.exports.func, i.exports.object])
  }),
  slots: i.exports.shape({
    backdrop: i.exports.elementType,
    root: i.exports.elementType
  })
});
const Ns = Tn;
/** @license MUI v5.10.8
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function As(e, t) {
  const n = ko(e, t);
  return process.env.NODE_ENV !== "production" ? (...r) => {
    const o = typeof e == "string" ? `"${e}"` : "component";
    return r.length === 0 ? console.error([`MUI: Seems like you called \`styled(${o})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : r.some((s) => s === void 0) && console.error(`MUI: the styled(${o})(...args) API requires all its args to be defined.`), n(...r);
  } : n;
}
const Ds = (e, t) => {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}, Is = process.env.NODE_ENV !== "production" ? i.exports.oneOfType([i.exports.number, i.exports.string, i.exports.object, i.exports.array]) : {}, $e = Is;
function st(e, t) {
  return t ? we(e, t, {
    clone: !1
  }) : e;
}
const tr = {
  xs: 0,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536
}, Kr = {
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${tr[e]}px)`
};
function ke(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const s = r.breakpoints || Kr;
    return t.reduce((a, l, u) => (a[s.up(s.keys[u])] = n(t[u]), a), {});
  }
  if (typeof t == "object") {
    const s = r.breakpoints || Kr;
    return Object.keys(t).reduce((a, l) => {
      if (Object.keys(s.values || tr).indexOf(l) !== -1) {
        const u = s.up(l);
        a[u] = n(t[l], l);
      } else {
        const u = l;
        a[u] = t[u];
      }
      return a;
    }, {});
  }
  return n(t);
}
function Ms(e = {}) {
  var t;
  return ((t = e.keys) == null ? void 0 : t.reduce((r, o) => {
    const s = e.up(o);
    return r[s] = {}, r;
  }, {})) || {};
}
function js(e, t) {
  return e.reduce((n, r) => {
    const o = n[r];
    return (!o || Object.keys(o).length === 0) && delete n[r], n;
  }, t);
}
function rr(e, t, n = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`.split(".").reduce((o, s) => o && o[s] ? o[s] : null, e);
    if (r != null)
      return r;
  }
  return t.split(".").reduce((r, o) => r && r[o] != null ? r[o] : null, e);
}
function Hr(e, t, n, r = n) {
  let o;
  return typeof e == "function" ? o = e(n) : Array.isArray(e) ? o = e[n] || r : o = rr(e, n) || r, t && (o = t(o, r)), o;
}
function _(e) {
  const {
    prop: t,
    cssProperty: n = e.prop,
    themeKey: r,
    transform: o
  } = e, s = (a) => {
    if (a[t] == null)
      return null;
    const l = a[t], u = a.theme, f = rr(u, r) || {};
    return ke(a, l, (h) => {
      let p = Hr(f, o, h);
      return h === p && typeof h == "string" && (p = Hr(f, o, `${t}${h === "default" ? "" : xe(h)}`, h)), n === !1 ? p : {
        [n]: p
      };
    });
  };
  return s.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: $e
  } : {}, s.filterProps = [t], s;
}
function Ne(...e) {
  const t = e.reduce((r, o) => (o.filterProps.forEach((s) => {
    r[s] = o;
  }), r), {}), n = (r) => Object.keys(r).reduce((o, s) => t[s] ? st(o, t[s](r)) : o, {});
  return n.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((r, o) => Object.assign(r, o.propTypes), {}) : {}, n.filterProps = e.reduce((r, o) => r.concat(o.filterProps), []), n;
}
function Fs(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const Ls = {
  m: "margin",
  p: "padding"
}, Bs = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Gr = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Ws = Fs((e) => {
  if (e.length > 2)
    if (Gr[e])
      e = Gr[e];
    else
      return [e];
  const [t, n] = e.split(""), r = Ls[t], o = Bs[n] || "";
  return Array.isArray(o) ? o.map((s) => r + s) : [r + o];
}), Rn = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Sn = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], nr = [...Rn, ...Sn];
function ft(e, t, n, r) {
  var o;
  const s = (o = rr(e, t, !1)) != null ? o : n;
  return typeof s == "number" ? (a) => typeof a == "string" ? a : (process.env.NODE_ENV !== "production" && typeof a != "number" && console.error(`MUI: Expected ${r} argument to be a number or a string, got ${a}.`), s * a) : Array.isArray(s) ? (a) => typeof a == "string" ? a : (process.env.NODE_ENV !== "production" && (Number.isInteger(a) ? a > s.length - 1 && console.error([`MUI: The value provided (${a}) overflows.`, `The supported values are: ${JSON.stringify(s)}.`, `${a} > ${s.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`))), s[a]) : typeof s == "function" ? s : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${s}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function On(e) {
  return ft(e, "spacing", 8, "spacing");
}
function pt(e, t) {
  if (typeof t == "string" || t == null)
    return t;
  const n = Math.abs(t), r = e(n);
  return t >= 0 ? r : typeof r == "number" ? -r : `-${r}`;
}
function Vs(e, t) {
  return (n) => e.reduce((r, o) => (r[o] = pt(t, n), r), {});
}
function Us(e, t, n, r) {
  if (t.indexOf(n) === -1)
    return null;
  const o = Ws(n), s = Vs(o, r), a = e[n];
  return ke(e, a, s);
}
function Ys(e, t) {
  const n = On(e.theme);
  return Object.keys(e).map((r) => Us(e, t, r, n)).reduce(st, {});
}
process.env.NODE_ENV !== "production" && Rn.reduce((e, t) => (e[t] = $e, e), {});
process.env.NODE_ENV !== "production" && Sn.reduce((e, t) => (e[t] = $e, e), {});
function wt(e) {
  return Ys(e, nr);
}
wt.propTypes = process.env.NODE_ENV !== "production" ? nr.reduce((e, t) => (e[t] = $e, e), {}) : {};
wt.filterProps = nr;
function dt(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
const qs = _({
  prop: "border",
  themeKey: "borders",
  transform: dt
}), zs = _({
  prop: "borderTop",
  themeKey: "borders",
  transform: dt
}), Ks = _({
  prop: "borderRight",
  themeKey: "borders",
  transform: dt
}), Hs = _({
  prop: "borderBottom",
  themeKey: "borders",
  transform: dt
}), Gs = _({
  prop: "borderLeft",
  themeKey: "borders",
  transform: dt
}), Xs = _({
  prop: "borderColor",
  themeKey: "palette"
}), Js = _({
  prop: "borderTopColor",
  themeKey: "palette"
}), Zs = _({
  prop: "borderRightColor",
  themeKey: "palette"
}), Qs = _({
  prop: "borderBottomColor",
  themeKey: "palette"
}), ei = _({
  prop: "borderLeftColor",
  themeKey: "palette"
}), or = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = ft(e.theme, "shape.borderRadius", 4, "borderRadius"), n = (r) => ({
      borderRadius: pt(t, r)
    });
    return ke(e, e.borderRadius, n);
  }
  return null;
};
or.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: $e
} : {};
or.filterProps = ["borderRadius"];
const ti = Ne(qs, zs, Ks, Hs, Gs, Xs, Js, Zs, Qs, ei, or), Pn = ti, ri = _({
  prop: "displayPrint",
  cssProperty: !1,
  transform: (e) => ({
    "@media print": {
      display: e
    }
  })
}), ni = _({
  prop: "display"
}), oi = _({
  prop: "overflow"
}), si = _({
  prop: "textOverflow"
}), ii = _({
  prop: "visibility"
}), ai = _({
  prop: "whiteSpace"
}), wn = Ne(ri, ni, oi, si, ii, ai), ci = _({
  prop: "flexBasis"
}), li = _({
  prop: "flexDirection"
}), ui = _({
  prop: "flexWrap"
}), fi = _({
  prop: "justifyContent"
}), pi = _({
  prop: "alignItems"
}), di = _({
  prop: "alignContent"
}), mi = _({
  prop: "order"
}), hi = _({
  prop: "flex"
}), yi = _({
  prop: "flexGrow"
}), vi = _({
  prop: "flexShrink"
}), bi = _({
  prop: "alignSelf"
}), gi = _({
  prop: "justifyItems"
}), xi = _({
  prop: "justifySelf"
}), Ei = Ne(ci, li, ui, fi, pi, di, mi, hi, yi, vi, bi, gi, xi), _n = Ei, sr = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = ft(e.theme, "spacing", 8, "gap"), n = (r) => ({
      gap: pt(t, r)
    });
    return ke(e, e.gap, n);
  }
  return null;
};
sr.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: $e
} : {};
sr.filterProps = ["gap"];
const ir = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = ft(e.theme, "spacing", 8, "columnGap"), n = (r) => ({
      columnGap: pt(t, r)
    });
    return ke(e, e.columnGap, n);
  }
  return null;
};
ir.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: $e
} : {};
ir.filterProps = ["columnGap"];
const ar = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = ft(e.theme, "spacing", 8, "rowGap"), n = (r) => ({
      rowGap: pt(t, r)
    });
    return ke(e, e.rowGap, n);
  }
  return null;
};
ar.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: $e
} : {};
ar.filterProps = ["rowGap"];
const Ti = _({
  prop: "gridColumn"
}), Ri = _({
  prop: "gridRow"
}), Si = _({
  prop: "gridAutoFlow"
}), Oi = _({
  prop: "gridAutoColumns"
}), Pi = _({
  prop: "gridAutoRows"
}), wi = _({
  prop: "gridTemplateColumns"
}), _i = _({
  prop: "gridTemplateRows"
}), Ci = _({
  prop: "gridTemplateAreas"
}), $i = _({
  prop: "gridArea"
}), ki = Ne(sr, ir, ar, Ti, Ri, Si, Oi, Pi, wi, _i, Ci, $i), Cn = ki;
function cr(e, t) {
  return t === "grey" ? t : e;
}
const Ni = _({
  prop: "color",
  themeKey: "palette",
  transform: cr
}), Ai = _({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: cr
}), Di = _({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: cr
}), Ii = Ne(Ni, Ai, Di), $n = Ii, Mi = _({
  prop: "position"
}), ji = _({
  prop: "zIndex",
  themeKey: "zIndex"
}), Fi = _({
  prop: "top"
}), Li = _({
  prop: "right"
}), Bi = _({
  prop: "bottom"
}), Wi = _({
  prop: "left"
}), kn = Ne(Mi, ji, Fi, Li, Bi, Wi), Vi = _({
  prop: "boxShadow",
  themeKey: "shadows"
}), Nn = Vi;
function Ae(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Ui = _({
  prop: "width",
  transform: Ae
}), An = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (n) => {
      var r, o, s;
      return {
        maxWidth: ((r = e.theme) == null || (o = r.breakpoints) == null || (s = o.values) == null ? void 0 : s[n]) || tr[n] || Ae(n)
      };
    };
    return ke(e, e.maxWidth, t);
  }
  return null;
};
An.filterProps = ["maxWidth"];
const Yi = _({
  prop: "minWidth",
  transform: Ae
}), qi = _({
  prop: "height",
  transform: Ae
}), zi = _({
  prop: "maxHeight",
  transform: Ae
}), Ki = _({
  prop: "minHeight",
  transform: Ae
});
_({
  prop: "size",
  cssProperty: "width",
  transform: Ae
});
_({
  prop: "size",
  cssProperty: "height",
  transform: Ae
});
const Hi = _({
  prop: "boxSizing"
}), Gi = Ne(Ui, An, Yi, qi, zi, Ki, Hi), Dn = Gi, Xi = _({
  prop: "fontFamily",
  themeKey: "typography"
}), Ji = _({
  prop: "fontSize",
  themeKey: "typography"
}), Zi = _({
  prop: "fontStyle",
  themeKey: "typography"
}), Qi = _({
  prop: "fontWeight",
  themeKey: "typography"
}), ea = _({
  prop: "letterSpacing"
}), ta = _({
  prop: "textTransform"
}), ra = _({
  prop: "lineHeight"
}), na = _({
  prop: "textAlign"
}), oa = _({
  prop: "typography",
  cssProperty: !1,
  themeKey: "typography"
}), sa = Ne(oa, Xi, Ji, Zi, Qi, ea, ra, na, ta), In = sa, Xr = {
  borders: Pn.filterProps,
  display: wn.filterProps,
  flexbox: _n.filterProps,
  grid: Cn.filterProps,
  positions: kn.filterProps,
  palette: $n.filterProps,
  shadows: Nn.filterProps,
  sizing: Dn.filterProps,
  spacing: wt.filterProps,
  typography: In.filterProps
}, Mn = {
  borders: Pn,
  display: wn,
  flexbox: _n,
  grid: Cn,
  positions: kn,
  palette: $n,
  shadows: Nn,
  sizing: Dn,
  spacing: wt,
  typography: In
};
Object.keys(Xr).reduce((e, t) => (Xr[t].forEach((n) => {
  e[n] = Mn[t];
}), e), {});
function ia(...e) {
  const t = e.reduce((r, o) => r.concat(Object.keys(o)), []), n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function aa(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function ca(e = Mn) {
  const t = Object.keys(e).reduce((o, s) => (e[s].filterProps.forEach((a) => {
    o[a] = e[s];
  }), o), {});
  function n(o, s, a) {
    const l = {
      [o]: s,
      theme: a
    }, u = t[o];
    return u ? u(l) : {
      [o]: s
    };
  }
  function r(o) {
    const {
      sx: s,
      theme: a = {}
    } = o || {};
    if (!s)
      return null;
    function l(u) {
      let f = u;
      if (typeof u == "function")
        f = u(a);
      else if (typeof u != "object")
        return u;
      if (!f)
        return null;
      const d = Ms(a.breakpoints), h = Object.keys(d);
      let p = d;
      return Object.keys(f).forEach((E) => {
        const x = aa(f[E], a);
        if (x != null)
          if (typeof x == "object")
            if (t[E])
              p = st(p, n(E, x, a));
            else {
              const v = ke({
                theme: a
              }, x, (m) => ({
                [E]: m
              }));
              ia(v, x) ? p[E] = r({
                sx: x,
                theme: a
              }) : p = st(p, v);
            }
          else
            p = st(p, n(E, x, a));
      }), js(h, p);
    }
    return Array.isArray(s) ? s.map(l) : l(s);
  }
  return r;
}
const jn = ca();
jn.filterProps = ["sx"];
const la = jn, ua = ["values", "unit", "step"], fa = (e) => {
  const t = Object.keys(e).map((n) => ({
    key: n,
    val: e[n]
  })) || [];
  return t.sort((n, r) => n.val - r.val), t.reduce((n, r) => O({}, n, {
    [r.key]: r.val
  }), {});
};
function pa(e) {
  const {
    values: t = {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536
    },
    unit: n = "px",
    step: r = 5
  } = e, o = me(e, ua), s = fa(t), a = Object.keys(s);
  function l(p) {
    return `@media (min-width:${typeof t[p] == "number" ? t[p] : p}${n})`;
  }
  function u(p) {
    return `@media (max-width:${(typeof t[p] == "number" ? t[p] : p) - r / 100}${n})`;
  }
  function f(p, E) {
    const x = a.indexOf(E);
    return `@media (min-width:${typeof t[p] == "number" ? t[p] : p}${n}) and (max-width:${(x !== -1 && typeof t[a[x]] == "number" ? t[a[x]] : E) - r / 100}${n})`;
  }
  function d(p) {
    return a.indexOf(p) + 1 < a.length ? f(p, a[a.indexOf(p) + 1]) : l(p);
  }
  function h(p) {
    const E = a.indexOf(p);
    return E === 0 ? l(a[1]) : E === a.length - 1 ? u(a[E]) : f(p, a[a.indexOf(p) + 1]).replace("@media", "@media not all and");
  }
  return O({
    keys: a,
    values: s,
    up: l,
    down: u,
    between: f,
    only: d,
    not: h,
    unit: n
  }, o);
}
const da = {
  borderRadius: 4
}, ma = da;
function ha(e = 8) {
  if (e.mui)
    return e;
  const t = On({
    spacing: e
  }), n = (...r) => (process.env.NODE_ENV !== "production" && (r.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${r.length}`)), (r.length === 0 ? [1] : r).map((s) => {
    const a = t(s);
    return typeof a == "number" ? `${a}px` : a;
  }).join(" "));
  return n.mui = !0, n;
}
const ya = ["breakpoints", "palette", "spacing", "shape"];
function lr(e = {}, ...t) {
  const {
    breakpoints: n = {},
    palette: r = {},
    spacing: o,
    shape: s = {}
  } = e, a = me(e, ya), l = pa(n), u = ha(o);
  let f = we({
    breakpoints: l,
    direction: "ltr",
    components: {},
    palette: O({
      mode: "light"
    }, r),
    spacing: u,
    shape: O({}, ma, s)
  }, a);
  return f = t.reduce((d, h) => we(d, h), f), f;
}
const Fn = /* @__PURE__ */ N.createContext(null);
process.env.NODE_ENV !== "production" && (Fn.displayName = "ThemeContext");
const va = Fn;
function ba() {
  const e = N.useContext(va);
  return process.env.NODE_ENV !== "production" && N.useDebugValue(e), e;
}
function ga(e) {
  return Object.keys(e).length === 0;
}
function xa(e = null) {
  const t = ba();
  return !t || ga(t) ? e : t;
}
const Ea = lr();
function Ln(e = Ea) {
  return xa(e);
}
const Ta = ["variant"];
function Jr(e) {
  return e.length === 0;
}
function Bn(e) {
  const {
    variant: t
  } = e, n = me(e, Ta);
  let r = t || "";
  return Object.keys(n).sort().forEach((o) => {
    o === "color" ? r += Jr(r) ? e[o] : xe(e[o]) : r += `${Jr(r) ? o : xe(o)}${xe(e[o].toString())}`;
  }), r;
}
const Ra = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"], Sa = ["theme"], Oa = ["theme"];
function tt(e) {
  return Object.keys(e).length === 0;
}
function Pa(e) {
  return typeof e == "string" && e.charCodeAt(0) > 96;
}
const wa = (e, t) => t.components && t.components[e] && t.components[e].styleOverrides ? t.components[e].styleOverrides : null, _a = (e, t) => {
  let n = [];
  t && t.components && t.components[e] && t.components[e].variants && (n = t.components[e].variants);
  const r = {};
  return n.forEach((o) => {
    const s = Bn(o.props);
    r[s] = o.style;
  }), r;
}, Ca = (e, t, n, r) => {
  var o, s;
  const {
    ownerState: a = {}
  } = e, l = [], u = n == null || (o = n.components) == null || (s = o[r]) == null ? void 0 : s.variants;
  return u && u.forEach((f) => {
    let d = !0;
    Object.keys(f.props).forEach((h) => {
      a[h] !== f.props[h] && e[h] !== f.props[h] && (d = !1);
    }), d && l.push(t[Bn(f.props)]);
  }), l;
};
function xt(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const $a = lr(), ka = (e) => e.charAt(0).toLowerCase() + e.slice(1);
function Na(e = {}) {
  const {
    defaultTheme: t = $a,
    rootShouldForwardProp: n = xt,
    slotShouldForwardProp: r = xt,
    styleFunctionSx: o = la
  } = e, s = (a) => {
    const l = tt(a.theme) ? t : a.theme;
    return o(O({}, a, {
      theme: l
    }));
  };
  return s.__mui_systemSx = !0, (a, l = {}) => {
    Ds(a, (w) => w.filter((y) => !(y != null && y.__mui_systemSx)));
    const {
      name: u,
      slot: f,
      skipVariantsResolver: d,
      skipSx: h,
      overridesResolver: p
    } = l, E = me(l, Ra), x = d !== void 0 ? d : f && f !== "Root" || !1, v = h || !1;
    let m;
    process.env.NODE_ENV !== "production" && u && (m = `${u}-${ka(f || "Root")}`);
    let C = xt;
    f === "Root" ? C = n : f ? C = r : Pa(a) && (C = void 0);
    const A = As(a, O({
      shouldForwardProp: C,
      label: m
    }, E)), P = (w, ...y) => {
      const V = y ? y.map(($) => typeof $ == "function" && $.__emotion_real !== $ ? (q) => {
        let {
          theme: Q
        } = q, te = me(q, Sa);
        return $(O({
          theme: tt(Q) ? t : Q
        }, te));
      } : $) : [];
      let U = w;
      u && p && V.push(($) => {
        const q = tt($.theme) ? t : $.theme, Q = wa(u, q);
        if (Q) {
          const te = {};
          return Object.entries(Q).forEach(([D, H]) => {
            te[D] = typeof H == "function" ? H(O({}, $, {
              theme: q
            })) : H;
          }), p($, te);
        }
        return null;
      }), u && !x && V.push(($) => {
        const q = tt($.theme) ? t : $.theme;
        return Ca($, _a(u, q), q, u);
      }), v || V.push(s);
      const ue = V.length - y.length;
      if (Array.isArray(w) && ue > 0) {
        const $ = new Array(ue).fill("");
        U = [...w, ...$], U.raw = [...w.raw, ...$];
      } else
        typeof w == "function" && w.__emotion_real !== w && (U = ($) => {
          let {
            theme: q
          } = $, Q = me($, Oa);
          return w(O({
            theme: tt(q) ? t : q
          }, Q));
        });
      const K = A(U, ...V);
      if (process.env.NODE_ENV !== "production") {
        let $;
        u && ($ = `${u}${f || ""}`), $ === void 0 && ($ = `Styled(${Go(a)})`), K.displayName = $;
      }
      return K;
    };
    return A.withConfig && (P.withConfig = A.withConfig), P;
  };
}
function Aa(e) {
  const {
    theme: t,
    name: n,
    props: r
  } = e;
  return !t || !t.components || !t.components[n] || !t.components[n].defaultProps ? r : os(t.components[n].defaultProps, r);
}
function Da({
  props: e,
  name: t,
  defaultTheme: n
}) {
  const r = Ln(n);
  return Aa({
    theme: r,
    name: t,
    props: e
  });
}
function ur(e, t = 0, n = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > n) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${n}].`), Math.min(Math.max(t, e), n);
}
function Ia(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return n && n[0].length === 1 && (n = n.map((r) => r + r)), n ? `rgb${n.length === 4 ? "a" : ""}(${n.map((r, o) => o < 3 ? parseInt(r, 16) : Math.round(parseInt(r, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function je(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return je(Ia(e));
  const t = e.indexOf("("), n = e.substring(0, t);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(n) === -1)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : Ge(9, e));
  let r = e.substring(t + 1, e.length - 1), o;
  if (n === "color") {
    if (r = r.split(" "), o = r.shift(), r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(o) === -1)
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${o}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : Ge(10, o));
  } else
    r = r.split(",");
  return r = r.map((s) => parseFloat(s)), {
    type: n,
    values: r,
    colorSpace: o
  };
}
function _t(e) {
  const {
    type: t,
    colorSpace: n
  } = e;
  let {
    values: r
  } = e;
  return t.indexOf("rgb") !== -1 ? r = r.map((o, s) => s < 3 ? parseInt(o, 10) : o) : t.indexOf("hsl") !== -1 && (r[1] = `${r[1]}%`, r[2] = `${r[2]}%`), t.indexOf("color") !== -1 ? r = `${n} ${r.join(" ")}` : r = `${r.join(", ")}`, `${t}(${r})`;
}
function Ma(e) {
  e = je(e);
  const {
    values: t
  } = e, n = t[0], r = t[1] / 100, o = t[2] / 100, s = r * Math.min(o, 1 - o), a = (f, d = (f + n / 30) % 12) => o - s * Math.max(Math.min(d - 3, 9 - d, 1), -1);
  let l = "rgb";
  const u = [Math.round(a(0) * 255), Math.round(a(8) * 255), Math.round(a(4) * 255)];
  return e.type === "hsla" && (l += "a", u.push(t[3])), _t({
    type: l,
    values: u
  });
}
function Zr(e) {
  e = je(e);
  let t = e.type === "hsl" || e.type === "hsla" ? je(Ma(e)).values : e.values;
  return t = t.map((n) => (e.type !== "color" && (n /= 255), n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function Qr(e, t) {
  const n = Zr(e), r = Zr(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function en(e, t) {
  return e = je(e), t = ur(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, _t(e);
}
function ja(e, t) {
  if (e = je(e), t = ur(t), e.type.indexOf("hsl") !== -1)
    e.values[2] *= 1 - t;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1)
      e.values[n] *= 1 - t;
  return _t(e);
}
function Fa(e, t) {
  if (e = je(e), t = ur(t), e.type.indexOf("hsl") !== -1)
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.indexOf("rgb") !== -1)
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (1 - e.values[n]) * t;
  return _t(e);
}
function La(e, t) {
  return O({
    toolbar: {
      minHeight: 56,
      [e.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [e.up("sm")]: {
        minHeight: 64
      }
    }
  }, t);
}
const Ba = {
  black: "#000",
  white: "#fff"
}, it = Ba, Wa = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
}, Va = Wa, Ua = {
  50: "#f3e5f5",
  100: "#e1bee7",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  600: "#8e24aa",
  700: "#7b1fa2",
  800: "#6a1b9a",
  900: "#4a148c",
  A100: "#ea80fc",
  A200: "#e040fb",
  A400: "#d500f9",
  A700: "#aa00ff"
}, We = Ua, Ya = {
  50: "#ffebee",
  100: "#ffcdd2",
  200: "#ef9a9a",
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  600: "#e53935",
  700: "#d32f2f",
  800: "#c62828",
  900: "#b71c1c",
  A100: "#ff8a80",
  A200: "#ff5252",
  A400: "#ff1744",
  A700: "#d50000"
}, Ve = Ya, qa = {
  50: "#fff3e0",
  100: "#ffe0b2",
  200: "#ffcc80",
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  600: "#fb8c00",
  700: "#f57c00",
  800: "#ef6c00",
  900: "#e65100",
  A100: "#ffd180",
  A200: "#ffab40",
  A400: "#ff9100",
  A700: "#ff6d00"
}, rt = qa, za = {
  50: "#e3f2fd",
  100: "#bbdefb",
  200: "#90caf9",
  300: "#64b5f6",
  400: "#42a5f5",
  500: "#2196f3",
  600: "#1e88e5",
  700: "#1976d2",
  800: "#1565c0",
  900: "#0d47a1",
  A100: "#82b1ff",
  A200: "#448aff",
  A400: "#2979ff",
  A700: "#2962ff"
}, Ue = za, Ka = {
  50: "#e1f5fe",
  100: "#b3e5fc",
  200: "#81d4fa",
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  600: "#039be5",
  700: "#0288d1",
  800: "#0277bd",
  900: "#01579b",
  A100: "#80d8ff",
  A200: "#40c4ff",
  A400: "#00b0ff",
  A700: "#0091ea"
}, Ye = Ka, Ha = {
  50: "#e8f5e9",
  100: "#c8e6c9",
  200: "#a5d6a7",
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  600: "#43a047",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20",
  A100: "#b9f6ca",
  A200: "#69f0ae",
  A400: "#00e676",
  A700: "#00c853"
}, qe = Ha, Ga = ["mode", "contrastThreshold", "tonalOffset"], tn = {
  text: {
    primary: "rgba(0, 0, 0, 0.87)",
    secondary: "rgba(0, 0, 0, 0.6)",
    disabled: "rgba(0, 0, 0, 0.38)"
  },
  divider: "rgba(0, 0, 0, 0.12)",
  background: {
    paper: it.white,
    default: it.white
  },
  action: {
    active: "rgba(0, 0, 0, 0.54)",
    hover: "rgba(0, 0, 0, 0.04)",
    hoverOpacity: 0.04,
    selected: "rgba(0, 0, 0, 0.08)",
    selectedOpacity: 0.08,
    disabled: "rgba(0, 0, 0, 0.26)",
    disabledBackground: "rgba(0, 0, 0, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(0, 0, 0, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.12
  }
}, Ut = {
  text: {
    primary: it.white,
    secondary: "rgba(255, 255, 255, 0.7)",
    disabled: "rgba(255, 255, 255, 0.5)",
    icon: "rgba(255, 255, 255, 0.5)"
  },
  divider: "rgba(255, 255, 255, 0.12)",
  background: {
    paper: "#121212",
    default: "#121212"
  },
  action: {
    active: it.white,
    hover: "rgba(255, 255, 255, 0.08)",
    hoverOpacity: 0.08,
    selected: "rgba(255, 255, 255, 0.16)",
    selectedOpacity: 0.16,
    disabled: "rgba(255, 255, 255, 0.3)",
    disabledBackground: "rgba(255, 255, 255, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(255, 255, 255, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.24
  }
};
function rn(e, t, n, r) {
  const o = r.light || r, s = r.dark || r * 1.5;
  e[t] || (e.hasOwnProperty(n) ? e[t] = e[n] : t === "light" ? e.light = Fa(e.main, o) : t === "dark" && (e.dark = ja(e.main, s)));
}
function Xa(e = "light") {
  return e === "dark" ? {
    main: Ue[200],
    light: Ue[50],
    dark: Ue[400]
  } : {
    main: Ue[700],
    light: Ue[400],
    dark: Ue[800]
  };
}
function Ja(e = "light") {
  return e === "dark" ? {
    main: We[200],
    light: We[50],
    dark: We[400]
  } : {
    main: We[500],
    light: We[300],
    dark: We[700]
  };
}
function Za(e = "light") {
  return e === "dark" ? {
    main: Ve[500],
    light: Ve[300],
    dark: Ve[700]
  } : {
    main: Ve[700],
    light: Ve[400],
    dark: Ve[800]
  };
}
function Qa(e = "light") {
  return e === "dark" ? {
    main: Ye[400],
    light: Ye[300],
    dark: Ye[700]
  } : {
    main: Ye[700],
    light: Ye[500],
    dark: Ye[900]
  };
}
function ec(e = "light") {
  return e === "dark" ? {
    main: qe[400],
    light: qe[300],
    dark: qe[700]
  } : {
    main: qe[800],
    light: qe[500],
    dark: qe[900]
  };
}
function tc(e = "light") {
  return e === "dark" ? {
    main: rt[400],
    light: rt[300],
    dark: rt[700]
  } : {
    main: "#ed6c02",
    light: rt[500],
    dark: rt[900]
  };
}
function rc(e) {
  const {
    mode: t = "light",
    contrastThreshold: n = 3,
    tonalOffset: r = 0.2
  } = e, o = me(e, Ga), s = e.primary || Xa(t), a = e.secondary || Ja(t), l = e.error || Za(t), u = e.info || Qa(t), f = e.success || ec(t), d = e.warning || tc(t);
  function h(v) {
    const m = Qr(v, Ut.text.primary) >= n ? Ut.text.primary : tn.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const C = Qr(v, m);
      C < 3 && console.error([`MUI: The contrast ratio of ${C}:1 for ${m} on ${v}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return m;
  }
  const p = ({
    color: v,
    name: m,
    mainShade: C = 500,
    lightShade: A = 300,
    darkShade: P = 700
  }) => {
    if (v = O({}, v), !v.main && v[C] && (v.main = v[C]), !v.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${m ? ` (${m})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${C}\` property.` : Ge(11, m ? ` (${m})` : "", C));
    if (typeof v.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${m ? ` (${m})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(v.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : Ge(12, m ? ` (${m})` : "", JSON.stringify(v.main)));
    return rn(v, "light", A, r), rn(v, "dark", P, r), v.contrastText || (v.contrastText = h(v.main)), v;
  }, E = {
    dark: Ut,
    light: tn
  };
  return process.env.NODE_ENV !== "production" && (E[t] || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), we(O({
    common: O({}, it),
    mode: t,
    primary: p({
      color: s,
      name: "primary"
    }),
    secondary: p({
      color: a,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    error: p({
      color: l,
      name: "error"
    }),
    warning: p({
      color: d,
      name: "warning"
    }),
    info: p({
      color: u,
      name: "info"
    }),
    success: p({
      color: f,
      name: "success"
    }),
    grey: Va,
    contrastThreshold: n,
    getContrastText: h,
    augmentColor: p,
    tonalOffset: r
  }, E[t]), o);
}
const nc = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
function oc(e) {
  return Math.round(e * 1e5) / 1e5;
}
const nn = {
  textTransform: "uppercase"
}, on = '"Roboto", "Helvetica", "Arial", sans-serif';
function sc(e, t) {
  const n = typeof t == "function" ? t(e) : t, {
    fontFamily: r = on,
    fontSize: o = 14,
    fontWeightLight: s = 300,
    fontWeightRegular: a = 400,
    fontWeightMedium: l = 500,
    fontWeightBold: u = 700,
    htmlFontSize: f = 16,
    allVariants: d,
    pxToRem: h
  } = n, p = me(n, nc);
  process.env.NODE_ENV !== "production" && (typeof o != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof f != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const E = o / 14, x = h || ((C) => `${C / f * E}rem`), v = (C, A, P, w, y) => O({
    fontFamily: r,
    fontWeight: C,
    fontSize: x(A),
    lineHeight: P
  }, r === on ? {
    letterSpacing: `${oc(w / A)}em`
  } : {}, y, d), m = {
    h1: v(s, 96, 1.167, -1.5),
    h2: v(s, 60, 1.2, -0.5),
    h3: v(a, 48, 1.167, 0),
    h4: v(a, 34, 1.235, 0.25),
    h5: v(a, 24, 1.334, 0),
    h6: v(l, 20, 1.6, 0.15),
    subtitle1: v(a, 16, 1.75, 0.15),
    subtitle2: v(l, 14, 1.57, 0.1),
    body1: v(a, 16, 1.5, 0.15),
    body2: v(a, 14, 1.43, 0.15),
    button: v(l, 14, 1.75, 0.4, nn),
    caption: v(a, 12, 1.66, 0.4),
    overline: v(a, 12, 2.66, 1, nn)
  };
  return we(O({
    htmlFontSize: f,
    pxToRem: x,
    fontFamily: r,
    fontSize: o,
    fontWeightLight: s,
    fontWeightRegular: a,
    fontWeightMedium: l,
    fontWeightBold: u
  }, m), p, {
    clone: !1
  });
}
const ic = 0.2, ac = 0.14, cc = 0.12;
function pe(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${ic})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${ac})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${cc})`].join(",");
}
const lc = ["none", pe(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), pe(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), pe(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), pe(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), pe(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), pe(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), pe(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), pe(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), pe(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), pe(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), pe(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), pe(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), pe(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), pe(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), pe(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), pe(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), pe(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), pe(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), pe(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), pe(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), pe(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), pe(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), pe(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), pe(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], uc = lc, fc = ["duration", "easing", "delay"], pc = {
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, dc = {
  shortest: 150,
  shorter: 200,
  short: 250,
  standard: 300,
  complex: 375,
  enteringScreen: 225,
  leavingScreen: 195
};
function sn(e) {
  return `${Math.round(e)}ms`;
}
function mc(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function hc(e) {
  const t = O({}, pc, e.easing), n = O({}, dc, e.duration);
  return O({
    getAutoHeightDuration: mc,
    create: (o = ["all"], s = {}) => {
      const {
        duration: a = n.standard,
        easing: l = t.easeInOut,
        delay: u = 0
      } = s, f = me(s, fc);
      if (process.env.NODE_ENV !== "production") {
        const d = (p) => typeof p == "string", h = (p) => !isNaN(parseFloat(p));
        !d(o) && !Array.isArray(o) && console.error('MUI: Argument "props" must be a string or Array.'), !h(a) && !d(a) && console.error(`MUI: Argument "duration" must be a number or a string but found ${a}.`), d(l) || console.error('MUI: Argument "easing" must be a string.'), !h(u) && !d(u) && console.error('MUI: Argument "delay" must be a number or a string.'), Object.keys(f).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(f).join(",")}].`);
      }
      return (Array.isArray(o) ? o : [o]).map((d) => `${d} ${typeof a == "string" ? a : sn(a)} ${l} ${typeof u == "string" ? u : sn(u)}`).join(",");
    }
  }, e, {
    easing: t,
    duration: n
  });
}
const yc = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
}, vc = yc, bc = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function gc(e = {}, ...t) {
  const {
    mixins: n = {},
    palette: r = {},
    transitions: o = {},
    typography: s = {}
  } = e, a = me(e, bc);
  if (e.vars)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : Ge(18));
  const l = rc(r), u = lr(e);
  let f = we(u, {
    mixins: La(u.breakpoints, n),
    palette: l,
    shadows: uc.slice(),
    typography: sc(l, s),
    transitions: hc(o),
    zIndex: O({}, vc)
  });
  if (f = we(f, a), f = t.reduce((d, h) => we(d, h), f), process.env.NODE_ENV !== "production") {
    const d = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], h = (p, E) => {
      let x;
      for (x in p) {
        const v = p[x];
        if (d.indexOf(x) !== -1 && Object.keys(v).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const m = Fe("", x);
            console.error([`MUI: The \`${E}\` component increases the CSS specificity of the \`${x}\` internal state.`, "You can not override it like this: ", JSON.stringify(p, null, 2), "", `Instead, you need to use the '&.${m}' syntax:`, JSON.stringify({
              root: {
                [`&.${m}`]: v
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          p[x] = {};
        }
      }
    };
    Object.keys(f.components).forEach((p) => {
      const E = f.components[p].styleOverrides;
      E && p.indexOf("Mui") === 0 && h(E, p);
    });
  }
  return f;
}
const xc = gc(), fr = xc, Wn = (e) => xt(e) && e !== "classes", Ec = Na({
  defaultTheme: fr,
  rootShouldForwardProp: Wn
}), Oe = Ec;
function mt({
  props: e,
  name: t
}) {
  return Da({
    props: e,
    name: t,
    defaultTheme: fr
  });
}
function Xt(e, t) {
  return Xt = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, Xt(e, t);
}
function Tc(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Xt(e, t);
}
const an = {
  disabled: !1
};
var Rc = process.env.NODE_ENV !== "production" ? i.exports.oneOfType([i.exports.number, i.exports.shape({
  enter: i.exports.number,
  exit: i.exports.number,
  appear: i.exports.number
}).isRequired]) : null;
process.env.NODE_ENV !== "production" && i.exports.oneOfType([i.exports.string, i.exports.shape({
  enter: i.exports.string,
  exit: i.exports.string,
  active: i.exports.string
}), i.exports.shape({
  enter: i.exports.string,
  enterDone: i.exports.string,
  enterActive: i.exports.string,
  exit: i.exports.string,
  exitDone: i.exports.string,
  exitActive: i.exports.string
})]);
const Vn = He.createContext(null);
var Sc = function(t) {
  return t.scrollTop;
}, nt = "unmounted", Ie = "exited", Me = "entering", Ke = "entered", Jt = "exiting", _e = /* @__PURE__ */ function(e) {
  Tc(t, e);
  function t(r, o) {
    var s;
    s = e.call(this, r, o) || this;
    var a = o, l = a && !a.isMounting ? r.enter : r.appear, u;
    return s.appearStatus = null, r.in ? l ? (u = Ie, s.appearStatus = Me) : u = Ke : r.unmountOnExit || r.mountOnEnter ? u = nt : u = Ie, s.state = {
      status: u
    }, s.nextCallback = null, s;
  }
  t.getDerivedStateFromProps = function(o, s) {
    var a = o.in;
    return a && s.status === nt ? {
      status: Ie
    } : null;
  };
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, n.componentDidUpdate = function(o) {
    var s = null;
    if (o !== this.props) {
      var a = this.state.status;
      this.props.in ? a !== Me && a !== Ke && (s = Me) : (a === Me || a === Ke) && (s = Jt);
    }
    this.updateStatus(!1, s);
  }, n.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, n.getTimeouts = function() {
    var o = this.props.timeout, s, a, l;
    return s = a = l = o, o != null && typeof o != "number" && (s = o.exit, a = o.enter, l = o.appear !== void 0 ? o.appear : a), {
      exit: s,
      enter: a,
      appear: l
    };
  }, n.updateStatus = function(o, s) {
    if (o === void 0 && (o = !1), s !== null)
      if (this.cancelNextCallback(), s === Me) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var a = this.props.nodeRef ? this.props.nodeRef.current : vt.findDOMNode(this);
          a && Sc(a);
        }
        this.performEnter(o);
      } else
        this.performExit();
    else
      this.props.unmountOnExit && this.state.status === Ie && this.setState({
        status: nt
      });
  }, n.performEnter = function(o) {
    var s = this, a = this.props.enter, l = this.context ? this.context.isMounting : o, u = this.props.nodeRef ? [l] : [vt.findDOMNode(this), l], f = u[0], d = u[1], h = this.getTimeouts(), p = l ? h.appear : h.enter;
    if (!o && !a || an.disabled) {
      this.safeSetState({
        status: Ke
      }, function() {
        s.props.onEntered(f);
      });
      return;
    }
    this.props.onEnter(f, d), this.safeSetState({
      status: Me
    }, function() {
      s.props.onEntering(f, d), s.onTransitionEnd(p, function() {
        s.safeSetState({
          status: Ke
        }, function() {
          s.props.onEntered(f, d);
        });
      });
    });
  }, n.performExit = function() {
    var o = this, s = this.props.exit, a = this.getTimeouts(), l = this.props.nodeRef ? void 0 : vt.findDOMNode(this);
    if (!s || an.disabled) {
      this.safeSetState({
        status: Ie
      }, function() {
        o.props.onExited(l);
      });
      return;
    }
    this.props.onExit(l), this.safeSetState({
      status: Jt
    }, function() {
      o.props.onExiting(l), o.onTransitionEnd(a.exit, function() {
        o.safeSetState({
          status: Ie
        }, function() {
          o.props.onExited(l);
        });
      });
    });
  }, n.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, n.safeSetState = function(o, s) {
    s = this.setNextCallback(s), this.setState(o, s);
  }, n.setNextCallback = function(o) {
    var s = this, a = !0;
    return this.nextCallback = function(l) {
      a && (a = !1, s.nextCallback = null, o(l));
    }, this.nextCallback.cancel = function() {
      a = !1;
    }, this.nextCallback;
  }, n.onTransitionEnd = function(o, s) {
    this.setNextCallback(s);
    var a = this.props.nodeRef ? this.props.nodeRef.current : vt.findDOMNode(this), l = o == null && !this.props.addEndListener;
    if (!a || l) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var u = this.props.nodeRef ? [this.nextCallback] : [a, this.nextCallback], f = u[0], d = u[1];
      this.props.addEndListener(f, d);
    }
    o != null && setTimeout(this.nextCallback, o);
  }, n.render = function() {
    var o = this.state.status;
    if (o === nt)
      return null;
    var s = this.props, a = s.children;
    s.in, s.mountOnEnter, s.unmountOnExit, s.appear, s.enter, s.exit, s.timeout, s.addEndListener, s.onEnter, s.onEntering, s.onEntered, s.onExit, s.onExiting, s.onExited, s.nodeRef;
    var l = me(s, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return /* @__PURE__ */ ce(Vn.Provider, {
      value: null,
      children: typeof a == "function" ? a(o, l) : He.cloneElement(He.Children.only(a), l)
    });
  }, t;
}(He.Component);
_e.contextType = Vn;
_e.propTypes = process.env.NODE_ENV !== "production" ? {
  nodeRef: i.exports.shape({
    current: typeof Element > "u" ? i.exports.any : function(e, t, n, r, o, s) {
      var a = e[t];
      return i.exports.instanceOf(a && "ownerDocument" in a ? a.ownerDocument.defaultView.Element : Element)(e, t, n, r, o, s);
    }
  }),
  children: i.exports.oneOfType([i.exports.func.isRequired, i.exports.element.isRequired]).isRequired,
  in: i.exports.bool,
  mountOnEnter: i.exports.bool,
  unmountOnExit: i.exports.bool,
  appear: i.exports.bool,
  enter: i.exports.bool,
  exit: i.exports.bool,
  timeout: function(t) {
    var n = Rc;
    t.addEndListener || (n = n.isRequired);
    for (var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), s = 1; s < r; s++)
      o[s - 1] = arguments[s];
    return n.apply(void 0, [t].concat(o));
  },
  addEndListener: i.exports.func,
  onEnter: i.exports.func,
  onEntering: i.exports.func,
  onEntered: i.exports.func,
  onExit: i.exports.func,
  onExiting: i.exports.func,
  onExited: i.exports.func
} : {};
function ze() {
}
_e.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: ze,
  onEntering: ze,
  onEntered: ze,
  onExit: ze,
  onExiting: ze,
  onExited: ze
};
_e.UNMOUNTED = nt;
_e.EXITED = Ie;
_e.ENTERING = Me;
_e.ENTERED = Ke;
_e.EXITING = Jt;
const Un = _e;
function ht() {
  const e = Ln(fr);
  return process.env.NODE_ENV !== "production" && N.useDebugValue(e), e;
}
const Yn = (e) => e.scrollTop;
function Rt(e, t) {
  var n, r;
  const {
    timeout: o,
    easing: s,
    style: a = {}
  } = e;
  return {
    duration: (n = a.transitionDuration) != null ? n : typeof o == "number" ? o : o[t.mode] || 0,
    easing: (r = a.transitionTimingFunction) != null ? r : typeof s == "object" ? s[t.mode] : s,
    delay: a.transitionDelay
  };
}
const Oc = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"], Pc = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
}, qn = /* @__PURE__ */ N.forwardRef(function(t, n) {
  const r = ht(), o = {
    enter: r.transitions.duration.enteringScreen,
    exit: r.transitions.duration.leavingScreen
  }, {
    addEndListener: s,
    appear: a = !0,
    children: l,
    easing: u,
    in: f,
    onEnter: d,
    onEntered: h,
    onEntering: p,
    onExit: E,
    onExited: x,
    onExiting: v,
    style: m,
    timeout: C = o,
    TransitionComponent: A = Un
  } = t, P = me(t, Oc), w = N.useRef(null), y = Je(w, l.ref, n), V = (D) => (H) => {
    if (D) {
      const Z = w.current;
      H === void 0 ? D(Z) : D(Z, H);
    }
  }, U = V(p), ue = V((D, H) => {
    Yn(D);
    const Z = Rt({
      style: m,
      timeout: C,
      easing: u
    }, {
      mode: "enter"
    });
    D.style.webkitTransition = r.transitions.create("opacity", Z), D.style.transition = r.transitions.create("opacity", Z), d && d(D, H);
  }), K = V(h), $ = V(v), q = V((D) => {
    const H = Rt({
      style: m,
      timeout: C,
      easing: u
    }, {
      mode: "exit"
    });
    D.style.webkitTransition = r.transitions.create("opacity", H), D.style.transition = r.transitions.create("opacity", H), E && E(D);
  }), Q = V(x);
  return /* @__PURE__ */ ce(A, O({
    appear: a,
    in: f,
    nodeRef: w,
    onEnter: ue,
    onEntered: K,
    onEntering: U,
    onExit: q,
    onExited: Q,
    onExiting: $,
    addEndListener: (D) => {
      s && s(w.current, D);
    },
    timeout: C
  }, P, {
    children: (D, H) => /* @__PURE__ */ N.cloneElement(l, O({
      style: O({
        opacity: 0,
        visibility: D === "exited" && !f ? "hidden" : void 0
      }, Pc[D], m, l.props.style),
      ref: y
    }, H))
  }));
});
process.env.NODE_ENV !== "production" && (qn.propTypes = {
  addEndListener: i.exports.func,
  appear: i.exports.bool,
  children: at.isRequired,
  easing: i.exports.oneOfType([i.exports.shape({
    enter: i.exports.string,
    exit: i.exports.string
  }), i.exports.string]),
  in: i.exports.bool,
  onEnter: i.exports.func,
  onEntered: i.exports.func,
  onEntering: i.exports.func,
  onExit: i.exports.func,
  onExited: i.exports.func,
  onExiting: i.exports.func,
  style: i.exports.object,
  timeout: i.exports.oneOfType([i.exports.number, i.exports.shape({
    appear: i.exports.number,
    enter: i.exports.number,
    exit: i.exports.number
  })])
});
const zn = qn;
function wc(e) {
  return Fe("MuiBackdrop", e);
}
ut("MuiBackdrop", ["root", "invisible"]);
const _c = ["children", "component", "components", "componentsProps", "className", "invisible", "open", "slotProps", "slots", "transitionDuration", "TransitionComponent"], Cc = (e) => {
  const {
    classes: t,
    invisible: n
  } = e;
  return lt({
    root: ["root", n && "invisible"]
  }, wc, t);
}, $c = Oe("div", {
  name: "MuiBackdrop",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.invisible && t.invisible];
  }
})(({
  ownerState: e
}) => O({
  position: "fixed",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  WebkitTapHighlightColor: "transparent"
}, e.invisible && {
  backgroundColor: "transparent"
})), Kn = /* @__PURE__ */ N.forwardRef(function(t, n) {
  var r, o, s;
  const a = mt({
    props: t,
    name: "MuiBackdrop"
  }), {
    children: l,
    component: u = "div",
    components: f = {},
    componentsProps: d = {},
    className: h,
    invisible: p = !1,
    open: E,
    slotProps: x = {},
    slots: v = {},
    transitionDuration: m,
    TransitionComponent: C = zn
  } = a, A = me(a, _c), P = O({}, a, {
    component: u,
    invisible: p
  }), w = Cc(P), y = (r = x.root) != null ? r : d.root;
  return /* @__PURE__ */ ce(C, O({
    in: E,
    timeout: m
  }, A, {
    children: /* @__PURE__ */ ce($c, O({
      "aria-hidden": !0
    }, y, {
      as: (o = (s = v.root) != null ? s : f.Root) != null ? o : u,
      className: Se(w.root, h, y == null ? void 0 : y.className),
      ownerState: O({}, P, y == null ? void 0 : y.ownerState),
      classes: w,
      ref: n,
      children: l
    }))
  }));
});
process.env.NODE_ENV !== "production" && (Kn.propTypes = {
  children: i.exports.node,
  classes: i.exports.object,
  className: i.exports.string,
  component: i.exports.elementType,
  components: i.exports.shape({
    Root: i.exports.elementType
  }),
  componentsProps: i.exports.shape({
    root: i.exports.object
  }),
  invisible: i.exports.bool,
  open: i.exports.bool.isRequired,
  slotProps: i.exports.shape({
    root: i.exports.object
  }),
  slots: i.exports.shape({
    root: i.exports.elementType
  }),
  sx: i.exports.oneOfType([i.exports.arrayOf(i.exports.oneOfType([i.exports.func, i.exports.object, i.exports.bool])), i.exports.func, i.exports.object]),
  transitionDuration: i.exports.oneOfType([i.exports.number, i.exports.shape({
    appear: i.exports.number,
    enter: i.exports.number,
    exit: i.exports.number
  })])
});
const Hn = Kn, kc = ["BackdropComponent", "BackdropProps", "closeAfterTransition", "children", "component", "components", "componentsProps", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "slotProps", "slots", "theme"], Nc = (e) => e.classes, Ac = Oe("div", {
  name: "MuiModal",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, !n.open && n.exited && t.hidden];
  }
})(({
  theme: e,
  ownerState: t
}) => O({
  position: "fixed",
  zIndex: (e.vars || e).zIndex.modal,
  right: 0,
  bottom: 0,
  top: 0,
  left: 0
}, !t.open && t.exited && {
  visibility: "hidden"
})), Dc = Oe(Hn, {
  name: "MuiModal",
  slot: "Backdrop",
  overridesResolver: (e, t) => t.backdrop
})({
  zIndex: -1
}), Gn = /* @__PURE__ */ N.forwardRef(function(t, n) {
  var r, o, s, a, l, u;
  const f = mt({
    name: "MuiModal",
    props: t
  }), {
    BackdropComponent: d = Dc,
    BackdropProps: h,
    closeAfterTransition: p = !1,
    children: E,
    component: x,
    components: v = {},
    componentsProps: m = {},
    disableAutoFocus: C = !1,
    disableEnforceFocus: A = !1,
    disableEscapeKeyDown: P = !1,
    disablePortal: w = !1,
    disableRestoreFocus: y = !1,
    disableScrollLock: V = !1,
    hideBackdrop: U = !1,
    keepMounted: ue = !1,
    slotProps: K,
    slots: $,
    theme: q
  } = f, Q = me(f, kc), [te, D] = N.useState(!0), H = {
    closeAfterTransition: p,
    disableAutoFocus: C,
    disableEnforceFocus: A,
    disableEscapeKeyDown: P,
    disablePortal: w,
    disableRestoreFocus: y,
    disableScrollLock: V,
    hideBackdrop: U,
    keepMounted: ue
  }, Z = O({}, f, H, {
    exited: te
  }), fe = Nc(Z), I = (r = (o = $ == null ? void 0 : $.root) != null ? o : v.Root) != null ? r : Ac, ne = (s = (a = $ == null ? void 0 : $.backdrop) != null ? a : v.Backdrop) != null ? s : d, b = (l = K == null ? void 0 : K.root) != null ? l : m.root, R = (u = K == null ? void 0 : K.backdrop) != null ? u : m.backdrop;
  return /* @__PURE__ */ ce(Ns, O({
    slots: {
      root: I,
      backdrop: ne
    },
    slotProps: {
      root: () => O({}, qt(b, Z), !mn(I) && {
        as: x,
        theme: q
      }),
      backdrop: () => O({}, h, qt(R, Z))
    },
    onTransitionEnter: () => D(!1),
    onTransitionExited: () => D(!0),
    ref: n
  }, Q, {
    classes: fe
  }, H, {
    children: E
  }));
});
process.env.NODE_ENV !== "production" && (Gn.propTypes = {
  BackdropComponent: i.exports.elementType,
  BackdropProps: i.exports.object,
  children: at.isRequired,
  classes: i.exports.object,
  closeAfterTransition: i.exports.bool,
  component: i.exports.elementType,
  components: i.exports.shape({
    Backdrop: i.exports.elementType,
    Root: i.exports.elementType
  }),
  componentsProps: i.exports.shape({
    backdrop: i.exports.oneOfType([i.exports.func, i.exports.object]),
    root: i.exports.oneOfType([i.exports.func, i.exports.object])
  }),
  container: i.exports.oneOfType([Ot, i.exports.func]),
  disableAutoFocus: i.exports.bool,
  disableEnforceFocus: i.exports.bool,
  disableEscapeKeyDown: i.exports.bool,
  disablePortal: i.exports.bool,
  disableRestoreFocus: i.exports.bool,
  disableScrollLock: i.exports.bool,
  hideBackdrop: i.exports.bool,
  keepMounted: i.exports.bool,
  onBackdropClick: i.exports.func,
  onClose: i.exports.func,
  open: i.exports.bool.isRequired,
  slotProps: i.exports.shape({
    backdrop: i.exports.oneOfType([i.exports.func, i.exports.object]),
    root: i.exports.oneOfType([i.exports.func, i.exports.object])
  }),
  slots: i.exports.shape({
    backdrop: i.exports.elementType,
    root: i.exports.elementType
  }),
  sx: i.exports.oneOfType([i.exports.arrayOf(i.exports.oneOfType([i.exports.func, i.exports.object, i.exports.bool])), i.exports.func, i.exports.object])
});
const Xn = Gn;
function Ic(e) {
  return Fe("MuiPaper", e);
}
ut("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const Mc = ["className", "component", "elevation", "square", "variant"], cn = (e) => {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, (t / 100).toFixed(2);
}, jc = (e) => {
  const {
    square: t,
    elevation: n,
    variant: r,
    classes: o
  } = e, s = {
    root: ["root", r, !t && "rounded", r === "elevation" && `elevation${n}`]
  };
  return lt(s, Ic, o);
}, Fc = Oe("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], !n.square && t.rounded, n.variant === "elevation" && t[`elevation${n.elevation}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var n;
  return O({
    backgroundColor: (e.vars || e).palette.background.paper,
    color: (e.vars || e).palette.text.primary,
    transition: e.transitions.create("box-shadow")
  }, !t.square && {
    borderRadius: e.shape.borderRadius
  }, t.variant === "outlined" && {
    border: `1px solid ${(e.vars || e).palette.divider}`
  }, t.variant === "elevation" && O({
    boxShadow: (e.vars || e).shadows[t.elevation]
  }, !e.vars && e.palette.mode === "dark" && {
    backgroundImage: `linear-gradient(${en("#fff", cn(t.elevation))}, ${en("#fff", cn(t.elevation))})`
  }, e.vars && {
    backgroundImage: (n = e.vars.overlays) == null ? void 0 : n[t.elevation]
  }));
}), Jn = /* @__PURE__ */ N.forwardRef(function(t, n) {
  const r = mt({
    props: t,
    name: "MuiPaper"
  }), {
    className: o,
    component: s = "div",
    elevation: a = 1,
    square: l = !1,
    variant: u = "elevation"
  } = r, f = me(r, Mc), d = O({}, r, {
    component: s,
    elevation: a,
    square: l,
    variant: u
  }), h = jc(d);
  return process.env.NODE_ENV !== "production" && ht().shadows[a] === void 0 && console.error([`MUI: The elevation provided <Paper elevation={${a}}> is not available in the theme.`, `Please make sure that \`theme.shadows[${a}]\` is defined.`].join(`
`)), /* @__PURE__ */ ce(Fc, O({
    as: s,
    ownerState: d,
    className: Se(h.root, o),
    ref: n
  }, f));
});
process.env.NODE_ENV !== "production" && (Jn.propTypes = {
  children: i.exports.node,
  classes: i.exports.object,
  className: i.exports.string,
  component: i.exports.elementType,
  elevation: St(En, (e) => {
    const {
      elevation: t,
      variant: n
    } = e;
    return t > 0 && n === "outlined" ? new Error(`MUI: Combining \`elevation={${t}}\` with \`variant="${n}"\` has no effect. Either use \`elevation={0}\` or use a different \`variant\`.`) : null;
  }),
  square: i.exports.bool,
  sx: i.exports.oneOfType([i.exports.arrayOf(i.exports.oneOfType([i.exports.func, i.exports.object, i.exports.bool])), i.exports.func, i.exports.object]),
  variant: i.exports.oneOfType([i.exports.oneOf(["elevation", "outlined"]), i.exports.string])
});
const pr = Jn;
function Lc(e) {
  return Fe("MuiDialog", e);
}
const Bc = ut("MuiDialog", ["root", "scrollPaper", "scrollBody", "container", "paper", "paperScrollPaper", "paperScrollBody", "paperWidthFalse", "paperWidthXs", "paperWidthSm", "paperWidthMd", "paperWidthLg", "paperWidthXl", "paperFullWidth", "paperFullScreen"]), Yt = Bc, Zn = /* @__PURE__ */ Co({});
process.env.NODE_ENV !== "production" && (Zn.displayName = "DialogContext");
const Wc = Zn, Vc = ["aria-describedby", "aria-labelledby", "BackdropComponent", "BackdropProps", "children", "className", "disableEscapeKeyDown", "fullScreen", "fullWidth", "maxWidth", "onBackdropClick", "onClose", "open", "PaperComponent", "PaperProps", "scroll", "TransitionComponent", "transitionDuration", "TransitionProps"], Uc = Oe(Hn, {
  name: "MuiDialog",
  slot: "Backdrop",
  overrides: (e, t) => t.backdrop
})({
  zIndex: -1
}), Yc = (e) => {
  const {
    classes: t,
    scroll: n,
    maxWidth: r,
    fullWidth: o,
    fullScreen: s
  } = e, a = {
    root: ["root"],
    container: ["container", `scroll${xe(n)}`],
    paper: ["paper", `paperScroll${xe(n)}`, `paperWidth${xe(String(r))}`, o && "paperFullWidth", s && "paperFullScreen"]
  };
  return lt(a, Lc, t);
}, qc = Oe(Xn, {
  name: "MuiDialog",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  "@media print": {
    position: "absolute !important"
  }
}), zc = Oe("div", {
  name: "MuiDialog",
  slot: "Container",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.container, t[`scroll${xe(n.scroll)}`]];
  }
})(({
  ownerState: e
}) => O({
  height: "100%",
  "@media print": {
    height: "auto"
  },
  outline: 0
}, e.scroll === "paper" && {
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}, e.scroll === "body" && {
  overflowY: "auto",
  overflowX: "hidden",
  textAlign: "center",
  "&:after": {
    content: '""',
    display: "inline-block",
    verticalAlign: "middle",
    height: "100%",
    width: "0"
  }
})), Kc = Oe(pr, {
  name: "MuiDialog",
  slot: "Paper",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.paper, t[`scrollPaper${xe(n.scroll)}`], t[`paperWidth${xe(String(n.maxWidth))}`], n.fullWidth && t.paperFullWidth, n.fullScreen && t.paperFullScreen];
  }
})(({
  theme: e,
  ownerState: t
}) => O({
  margin: 32,
  position: "relative",
  overflowY: "auto",
  "@media print": {
    overflowY: "visible",
    boxShadow: "none"
  }
}, t.scroll === "paper" && {
  display: "flex",
  flexDirection: "column",
  maxHeight: "calc(100% - 64px)"
}, t.scroll === "body" && {
  display: "inline-block",
  verticalAlign: "middle",
  textAlign: "left"
}, !t.maxWidth && {
  maxWidth: "calc(100% - 64px)"
}, t.maxWidth === "xs" && {
  maxWidth: e.breakpoints.unit === "px" ? Math.max(e.breakpoints.values.xs, 444) : `${e.breakpoints.values.xs}${e.breakpoints.unit}`,
  [`&.${Yt.paperScrollBody}`]: {
    [e.breakpoints.down(Math.max(e.breakpoints.values.xs, 444) + 32 * 2)]: {
      maxWidth: "calc(100% - 64px)"
    }
  }
}, t.maxWidth && t.maxWidth !== "xs" && {
  maxWidth: `${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`,
  [`&.${Yt.paperScrollBody}`]: {
    [e.breakpoints.down(e.breakpoints.values[t.maxWidth] + 32 * 2)]: {
      maxWidth: "calc(100% - 64px)"
    }
  }
}, t.fullWidth && {
  width: "calc(100% - 64px)"
}, t.fullScreen && {
  margin: 0,
  width: "100%",
  maxWidth: "100%",
  height: "100%",
  maxHeight: "none",
  borderRadius: 0,
  [`&.${Yt.paperScrollBody}`]: {
    margin: 0,
    maxWidth: "100%"
  }
})), Qn = /* @__PURE__ */ N.forwardRef(function(t, n) {
  const r = mt({
    props: t,
    name: "MuiDialog"
  }), o = ht(), s = {
    enter: o.transitions.duration.enteringScreen,
    exit: o.transitions.duration.leavingScreen
  }, {
    "aria-describedby": a,
    "aria-labelledby": l,
    BackdropComponent: u,
    BackdropProps: f,
    children: d,
    className: h,
    disableEscapeKeyDown: p = !1,
    fullScreen: E = !1,
    fullWidth: x = !1,
    maxWidth: v = "sm",
    onBackdropClick: m,
    onClose: C,
    open: A,
    PaperComponent: P = pr,
    PaperProps: w = {},
    scroll: y = "paper",
    TransitionComponent: V = zn,
    transitionDuration: U = s,
    TransitionProps: ue
  } = r, K = me(r, Vc), $ = O({}, r, {
    disableEscapeKeyDown: p,
    fullScreen: E,
    fullWidth: x,
    maxWidth: v,
    scroll: y
  }), q = Yc($), Q = N.useRef(), te = (fe) => {
    Q.current = fe.target === fe.currentTarget;
  }, D = (fe) => {
    !Q.current || (Q.current = null, m && m(fe), C && C(fe, "backdropClick"));
  }, H = Qo(l), Z = N.useMemo(() => ({
    titleId: H
  }), [H]);
  return /* @__PURE__ */ ce(qc, O({
    className: Se(q.root, h),
    closeAfterTransition: !0,
    components: {
      Backdrop: Uc
    },
    componentsProps: {
      backdrop: O({
        transitionDuration: U,
        as: u
      }, f)
    },
    disableEscapeKeyDown: p,
    onClose: C,
    open: A,
    ref: n,
    onClick: D,
    ownerState: $
  }, K, {
    children: /* @__PURE__ */ ce(V, O({
      appear: !0,
      in: A,
      timeout: U,
      role: "presentation"
    }, ue, {
      children: /* @__PURE__ */ ce(zc, {
        className: Se(q.container),
        onMouseDown: te,
        ownerState: $,
        children: /* @__PURE__ */ ce(Kc, O({
          as: P,
          elevation: 24,
          role: "dialog",
          "aria-describedby": a,
          "aria-labelledby": H
        }, w, {
          className: Se(q.paper, w.className),
          ownerState: $,
          children: /* @__PURE__ */ ce(Wc.Provider, {
            value: Z,
            children: d
          })
        }))
      })
    }))
  }));
});
process.env.NODE_ENV !== "production" && (Qn.propTypes = {
  "aria-describedby": i.exports.string,
  "aria-labelledby": i.exports.string,
  BackdropComponent: i.exports.elementType,
  BackdropProps: i.exports.object,
  children: i.exports.node,
  classes: i.exports.object,
  className: i.exports.string,
  disableEscapeKeyDown: i.exports.bool,
  fullScreen: i.exports.bool,
  fullWidth: i.exports.bool,
  maxWidth: i.exports.oneOfType([i.exports.oneOf(["xs", "sm", "md", "lg", "xl", !1]), i.exports.string]),
  onBackdropClick: i.exports.func,
  onClose: i.exports.func,
  open: i.exports.bool.isRequired,
  PaperComponent: i.exports.elementType,
  PaperProps: i.exports.object,
  scroll: i.exports.oneOf(["body", "paper"]),
  sx: i.exports.oneOfType([i.exports.arrayOf(i.exports.oneOfType([i.exports.func, i.exports.object, i.exports.bool])), i.exports.func, i.exports.object]),
  TransitionComponent: i.exports.elementType,
  transitionDuration: i.exports.oneOfType([i.exports.number, i.exports.shape({
    appear: i.exports.number,
    enter: i.exports.number,
    exit: i.exports.number
  })]),
  TransitionProps: i.exports.object
});
const Hc = Qn, eo = (e, t, n) => {
  const [r, o] = Dt(e), [s, a] = Dt(t), [l, u] = Dt(n);
  return { state: { list: s, items: l, active: r }, open: (h, p, E) => {
    const x = $o(6);
    a((v) => {
      const m = new Set(v);
      return m.add(x), Array.from(m);
    }), u((v) => ({
      ...v,
      [x]: { component: h, props: p, typeProps: E }
    })), setTimeout(() => o(x), 128);
  }, close: (h) => {
    let p = null;
    o(null), setTimeout(() => {
      a((E) => {
        const x = E.filter((v) => v !== h);
        return x.length > 0 && (p = x[x.length - 1]), x;
      }), u(({ [h]: E, ...x }) => x), o(p);
    }, 256);
  } };
}, Gc = Xe({
  key: "scaffoldDialogsActive",
  default: null
}), Xc = Xe({
  key: "scaffoldDialogsList",
  default: []
}), Jc = Xe({
  key: "scaffoldDialogsItems",
  default: {}
}), to = () => eo(
  Gc,
  Xc,
  Jc
), Zc = () => {
  const {
    state: {
      list: e,
      items: t,
      active: n
    },
    close: r
  } = to();
  return e.length === 0 ? null : /* @__PURE__ */ ce(Qt, {
    children: e.map((o) => {
      var s, a;
      return /* @__PURE__ */ ce(Hc, {
        ...(s = t[o].typeProps) != null ? s : {},
        open: n === o,
        onClose: () => r(o),
        children: un(t[o].component, {
          ...(a = t[o].props) != null ? a : {},
          dialogId: o
        })
      }, o);
    })
  });
}, Qc = ["addEndListener", "appear", "children", "container", "direction", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];
function el(e, t, n) {
  const r = t.getBoundingClientRect(), o = n && n.getBoundingClientRect(), s = ct(t);
  let a;
  if (t.fakeTransform)
    a = t.fakeTransform;
  else {
    const f = s.getComputedStyle(t);
    a = f.getPropertyValue("-webkit-transform") || f.getPropertyValue("transform");
  }
  let l = 0, u = 0;
  if (a && a !== "none" && typeof a == "string") {
    const f = a.split("(")[1].split(")")[0].split(",");
    l = parseInt(f[4], 10), u = parseInt(f[5], 10);
  }
  return e === "left" ? o ? `translateX(${o.right + l - r.left}px)` : `translateX(${s.innerWidth + l - r.left}px)` : e === "right" ? o ? `translateX(-${r.right - o.left - l}px)` : `translateX(-${r.left + r.width - l}px)` : e === "up" ? o ? `translateY(${o.bottom + u - r.top}px)` : `translateY(${s.innerHeight + u - r.top}px)` : o ? `translateY(-${r.top - o.top + r.height - u}px)` : `translateY(-${r.top + r.height - u}px)`;
}
function ro(e) {
  return typeof e == "function" ? e() : e;
}
function gt(e, t, n) {
  const r = ro(n), o = el(e, t, r);
  o && (t.style.webkitTransform = o, t.style.transform = o);
}
const no = /* @__PURE__ */ N.forwardRef(function(t, n) {
  const r = ht(), o = {
    enter: r.transitions.easing.easeOut,
    exit: r.transitions.easing.sharp
  }, s = {
    enter: r.transitions.duration.enteringScreen,
    exit: r.transitions.duration.leavingScreen
  }, {
    addEndListener: a,
    appear: l = !0,
    children: u,
    container: f,
    direction: d = "down",
    easing: h = o,
    in: p,
    onEnter: E,
    onEntered: x,
    onEntering: v,
    onExit: m,
    onExited: C,
    onExiting: A,
    style: P,
    timeout: w = s,
    TransitionComponent: y = Un
  } = t, V = me(t, Qc), U = N.useRef(null), ue = Je(u.ref, U, n), K = (I) => (ne) => {
    I && (ne === void 0 ? I(U.current) : I(U.current, ne));
  }, $ = K((I, ne) => {
    gt(d, I, f), Yn(I), E && E(I, ne);
  }), q = K((I, ne) => {
    const b = Rt({
      timeout: w,
      style: P,
      easing: h
    }, {
      mode: "enter"
    });
    I.style.webkitTransition = r.transitions.create("-webkit-transform", O({}, b)), I.style.transition = r.transitions.create("transform", O({}, b)), I.style.webkitTransform = "none", I.style.transform = "none", v && v(I, ne);
  }), Q = K(x), te = K(A), D = K((I) => {
    const ne = Rt({
      timeout: w,
      style: P,
      easing: h
    }, {
      mode: "exit"
    });
    I.style.webkitTransition = r.transitions.create("-webkit-transform", ne), I.style.transition = r.transitions.create("transform", ne), gt(d, I, f), m && m(I);
  }), H = K((I) => {
    I.style.webkitTransition = "", I.style.transition = "", C && C(I);
  }), Z = (I) => {
    a && a(U.current, I);
  }, fe = N.useCallback(() => {
    U.current && gt(d, U.current, f);
  }, [d, f]);
  return N.useEffect(() => {
    if (p || d === "down" || d === "right")
      return;
    const I = Xo(() => {
      U.current && gt(d, U.current, f);
    }), ne = ct(U.current);
    return ne.addEventListener("resize", I), () => {
      I.clear(), ne.removeEventListener("resize", I);
    };
  }, [d, p, f]), N.useEffect(() => {
    p || fe();
  }, [p, fe]), /* @__PURE__ */ ce(y, O({
    nodeRef: U,
    onEnter: $,
    onEntered: Q,
    onEntering: q,
    onExit: D,
    onExited: H,
    onExiting: te,
    addEndListener: Z,
    appear: l,
    in: p,
    timeout: w
  }, V, {
    children: (I, ne) => /* @__PURE__ */ N.cloneElement(u, O({
      ref: ue,
      style: O({
        visibility: I === "exited" && !p ? "hidden" : void 0
      }, P, u.props.style)
    }, ne))
  }));
});
process.env.NODE_ENV !== "production" && (no.propTypes = {
  addEndListener: i.exports.func,
  appear: i.exports.bool,
  children: at.isRequired,
  container: St(i.exports.oneOfType([Ot, i.exports.func]), (e) => {
    if (e.open) {
      const t = ro(e.container);
      if (t && t.nodeType === 1) {
        const n = t.getBoundingClientRect();
        if (process.env.NODE_ENV !== "test" && n.top === 0 && n.left === 0 && n.right === 0 && n.bottom === 0)
          return new Error(["MUI: The `container` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
      } else if (!t || typeof t.getBoundingClientRect != "function" || t.contextElement != null && t.contextElement.nodeType !== 1)
        return new Error(["MUI: The `container` prop provided to the component is invalid.", "It should be an HTML element instance."].join(`
`));
    }
    return null;
  }),
  direction: i.exports.oneOf(["down", "left", "right", "up"]),
  easing: i.exports.oneOfType([i.exports.shape({
    enter: i.exports.string,
    exit: i.exports.string
  }), i.exports.string]),
  in: i.exports.bool,
  onEnter: i.exports.func,
  onEntered: i.exports.func,
  onEntering: i.exports.func,
  onExit: i.exports.func,
  onExited: i.exports.func,
  onExiting: i.exports.func,
  style: i.exports.object,
  timeout: i.exports.oneOfType([i.exports.number, i.exports.shape({
    appear: i.exports.number,
    enter: i.exports.number,
    exit: i.exports.number
  })])
});
const tl = no;
function rl(e) {
  return Fe("MuiDrawer", e);
}
ut("MuiDrawer", ["root", "docked", "paper", "paperAnchorLeft", "paperAnchorRight", "paperAnchorTop", "paperAnchorBottom", "paperAnchorDockedLeft", "paperAnchorDockedRight", "paperAnchorDockedTop", "paperAnchorDockedBottom", "modal"]);
const nl = ["BackdropProps"], ol = ["anchor", "BackdropProps", "children", "className", "elevation", "hideBackdrop", "ModalProps", "onClose", "open", "PaperProps", "SlideProps", "TransitionComponent", "transitionDuration", "variant"], oo = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, (n.variant === "permanent" || n.variant === "persistent") && t.docked, t.modal];
}, sl = (e) => {
  const {
    classes: t,
    anchor: n,
    variant: r
  } = e, o = {
    root: ["root"],
    docked: [(r === "permanent" || r === "persistent") && "docked"],
    modal: ["modal"],
    paper: ["paper", `paperAnchor${xe(n)}`, r !== "temporary" && `paperAnchorDocked${xe(n)}`]
  };
  return lt(o, rl, t);
}, il = Oe(Xn, {
  name: "MuiDrawer",
  slot: "Root",
  overridesResolver: oo
})(({
  theme: e
}) => ({
  zIndex: (e.vars || e).zIndex.drawer
})), ln = Oe("div", {
  shouldForwardProp: Wn,
  name: "MuiDrawer",
  slot: "Docked",
  skipVariantsResolver: !1,
  overridesResolver: oo
})({
  flex: "0 0 auto"
}), al = Oe(pr, {
  name: "MuiDrawer",
  slot: "Paper",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.paper, t[`paperAnchor${xe(n.anchor)}`], n.variant !== "temporary" && t[`paperAnchorDocked${xe(n.anchor)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => O({
  overflowY: "auto",
  display: "flex",
  flexDirection: "column",
  height: "100%",
  flex: "1 0 auto",
  zIndex: (e.vars || e).zIndex.drawer,
  WebkitOverflowScrolling: "touch",
  position: "fixed",
  top: 0,
  outline: 0
}, t.anchor === "left" && {
  left: 0
}, t.anchor === "top" && {
  top: 0,
  left: 0,
  right: 0,
  height: "auto",
  maxHeight: "100%"
}, t.anchor === "right" && {
  right: 0
}, t.anchor === "bottom" && {
  top: "auto",
  left: 0,
  bottom: 0,
  right: 0,
  height: "auto",
  maxHeight: "100%"
}, t.anchor === "left" && t.variant !== "temporary" && {
  borderRight: `1px solid ${(e.vars || e).palette.divider}`
}, t.anchor === "top" && t.variant !== "temporary" && {
  borderBottom: `1px solid ${(e.vars || e).palette.divider}`
}, t.anchor === "right" && t.variant !== "temporary" && {
  borderLeft: `1px solid ${(e.vars || e).palette.divider}`
}, t.anchor === "bottom" && t.variant !== "temporary" && {
  borderTop: `1px solid ${(e.vars || e).palette.divider}`
})), so = {
  left: "right",
  right: "left",
  top: "down",
  bottom: "up"
};
function cl(e) {
  return ["left", "right"].indexOf(e) !== -1;
}
function ll(e, t) {
  return e.direction === "rtl" && cl(t) ? so[t] : t;
}
const io = /* @__PURE__ */ N.forwardRef(function(t, n) {
  const r = mt({
    props: t,
    name: "MuiDrawer"
  }), o = ht(), s = {
    enter: o.transitions.duration.enteringScreen,
    exit: o.transitions.duration.leavingScreen
  }, {
    anchor: a = "left",
    BackdropProps: l,
    children: u,
    className: f,
    elevation: d = 16,
    hideBackdrop: h = !1,
    ModalProps: {
      BackdropProps: p
    } = {},
    onClose: E,
    open: x = !1,
    PaperProps: v = {},
    SlideProps: m,
    TransitionComponent: C = tl,
    transitionDuration: A = s,
    variant: P = "temporary"
  } = r, w = me(r.ModalProps, nl), y = me(r, ol), V = N.useRef(!1);
  N.useEffect(() => {
    V.current = !0;
  }, []);
  const U = ll(o, a), K = O({}, r, {
    anchor: a,
    elevation: d,
    open: x,
    variant: P
  }, y), $ = sl(K), q = /* @__PURE__ */ ce(al, O({
    elevation: P === "temporary" ? d : 0,
    square: !0
  }, v, {
    className: Se($.paper, v.className),
    ownerState: K,
    children: u
  }));
  if (P === "permanent")
    return /* @__PURE__ */ ce(ln, O({
      className: Se($.root, $.docked, f),
      ownerState: K,
      ref: n
    }, y, {
      children: q
    }));
  const Q = /* @__PURE__ */ ce(C, O({
    in: x,
    direction: so[U],
    timeout: A,
    appear: V.current
  }, m, {
    children: q
  }));
  return P === "persistent" ? /* @__PURE__ */ ce(ln, O({
    className: Se($.root, $.docked, f),
    ownerState: K,
    ref: n
  }, y, {
    children: Q
  })) : /* @__PURE__ */ ce(il, O({
    BackdropProps: O({}, l, p, {
      transitionDuration: A
    }),
    className: Se($.root, $.modal, f),
    open: x,
    ownerState: K,
    onClose: E,
    hideBackdrop: h,
    ref: n
  }, y, w, {
    children: Q
  }));
});
process.env.NODE_ENV !== "production" && (io.propTypes = {
  anchor: i.exports.oneOf(["bottom", "left", "right", "top"]),
  BackdropProps: i.exports.object,
  children: i.exports.node,
  classes: i.exports.object,
  className: i.exports.string,
  elevation: En,
  hideBackdrop: i.exports.bool,
  ModalProps: i.exports.object,
  onClose: i.exports.func,
  open: i.exports.bool,
  PaperProps: i.exports.object,
  SlideProps: i.exports.object,
  sx: i.exports.oneOfType([i.exports.arrayOf(i.exports.oneOfType([i.exports.func, i.exports.object, i.exports.bool])), i.exports.func, i.exports.object]),
  transitionDuration: i.exports.oneOfType([i.exports.number, i.exports.shape({
    appear: i.exports.number,
    enter: i.exports.number,
    exit: i.exports.number
  })]),
  variant: i.exports.oneOf(["permanent", "persistent", "temporary"])
});
const ul = io, fl = Xe({
  key: "scaffoldDrawersActive",
  default: null
}), pl = Xe({
  key: "scaffoldDrawersList",
  default: []
}), dl = Xe({
  key: "scaffoldDrawersItems",
  default: {}
}), ao = () => eo(
  fl,
  pl,
  dl
), ml = () => {
  const {
    state: {
      list: e,
      items: t,
      active: n
    },
    close: r
  } = ao();
  return e.length === 0 ? null : /* @__PURE__ */ ce(Qt, {
    children: e.map((o) => {
      var s, a;
      return /* @__PURE__ */ ce(ul, {
        ...(s = t[o].typeProps) != null ? s : {},
        open: n === o,
        onClose: () => r(o),
        children: un(t[o].component, {
          ...(a = t[o].props) != null ? a : {},
          dialogId: o
        })
      }, o);
    })
  });
}, El = () => {
  const e = to(), t = ao();
  return {
    dialogs: {
      open: e.open,
      close: e.close
    },
    drawers: {
      open: t.open,
      close: t.close
    }
  };
}, Tl = ({
  children: e
}) => /* @__PURE__ */ er(Qt, {
  children: [e, /* @__PURE__ */ ce(Zc, {}), /* @__PURE__ */ ce(ml, {})]
});
export {
  Tl as Scaffold,
  El as useScaffold
};
