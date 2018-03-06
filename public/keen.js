(function e(b, g, d) {
  function c(n, k) {
    if (!g[n]) {
      if (!b[n]) {
        var j = typeof require == "function" && require;
        if (!k && j) {
          return j(n, !0);
        }
        if (a) {
          return a(n, !0);
        }
        var m = new Error("Cannot find module '" + n + "'");
        throw ((m.code = "MODULE_NOT_FOUND"), m);
      }
      var h = (g[n] = { exports: {} });
      b[n][0].call(
        h.exports,
        function(l) {
          var o = b[n][1][l];
          return c(o ? o : l);
        },
        h,
        h.exports,
        e,
        b,
        g,
        d
      );
    }
    return g[n].exports;
  }
  var a = typeof require == "function" && require;
  for (var f = 0; f < d.length; f++) {
    c(d[f]);
  }
  return c;
})(
  {
    1: [
      function(c, d, b) {
        d.exports = f;
        function f(g) {
          if (g) {
            return a(g);
          }
        }
        function a(h) {
          for (var g in f.prototype) {
            h[g] = f.prototype[g];
          }
          return h;
        }
        f.prototype.on = f.prototype.addEventListener = function(h, g) {
          this._callbacks = this._callbacks || {};
          (this._callbacks["$" + h] = this._callbacks["$" + h] || []).push(g);
          return this;
        };
        f.prototype.once = function(j, h) {
          function g() {
            this.off(j, g);
            h.apply(this, arguments);
          }
          g.fn = h;
          this.on(j, g);
          return this;
        };
        f.prototype.off = f.prototype.removeListener = f.prototype.removeAllListeners = f.prototype.removeEventListener = function(
          l,
          j
        ) {
          this._callbacks = this._callbacks || {};
          if (0 == arguments.length) {
            this._callbacks = {};
            return this;
          }
          var k = this._callbacks["$" + l];
          if (!k) {
            return this;
          }
          if (1 == arguments.length) {
            delete this._callbacks["$" + l];
            return this;
          }
          var g;
          for (var h = 0; h < k.length; h++) {
            g = k[h];
            if (g === j || g.fn === j) {
              k.splice(h, 1);
              break;
            }
          }
          return this;
        };
        f.prototype.emit = function(l) {
          this._callbacks = this._callbacks || {};
          var h = [].slice.call(arguments, 1),
            k = this._callbacks["$" + l];
          if (k) {
            k = k.slice(0);
            for (var j = 0, g = k.length; j < g; ++j) {
              k[j].apply(this, h);
            }
          }
          return this;
        };
        f.prototype.listeners = function(g) {
          this._callbacks = this._callbacks || {};
          return this._callbacks["$" + g] || [];
        };
        f.prototype.hasListeners = function(g) {
          return !!this.listeners(g).length;
        };
      },
      {}
    ],
    2: [
      function(b, c, a) {
        /*!
  * domready (c) Dustin Diaz 2012 - License MIT
  */
        !(function(d, f) {
          if (typeof c != "undefined") {
            c.exports = f();
          } else {
            if (typeof define == "function" && typeof define.amd == "object") {
              define(f);
            } else {
              this[d] = f();
            }
          }
        })("domready", function(n) {
          var s = [],
            m,
            l = false,
            o = document,
            g = o.documentElement,
            r = g.doScroll,
            d = "DOMContentLoaded",
            h = "addEventListener",
            q = "onreadystatechange",
            k = "readyState",
            t = r ? /^loaded|^c/ : /^loaded|c/,
            j = t.test(o[k]);
          function p(u) {
            j = 1;
            while ((u = s.shift())) {
              u();
            }
          }
          o[h] &&
            o[h](
              d,
              (m = function() {
                o.removeEventListener(d, m, l);
                p();
              }),
              l
            );
          r &&
            o.attachEvent(
              q,
              (m = function() {
                if (/^c/.test(o[k])) {
                  o.detachEvent(q, m);
                  p();
                }
              })
            );
          return (n = r
            ? function(f) {
                self != top
                  ? j ? f() : s.push(f)
                  : (function() {
                      try {
                        g.doScroll("left");
                      } catch (u) {
                        return setTimeout(function() {
                          n(f);
                        }, 50);
                      }
                      f();
                    })();
              }
            : function(f) {
                j ? f() : s.push(f);
              });
        });
      },
      {}
    ],
    3: [
      function(b, c, a) {
        (function(d) {
          /*! JSON v3.3.2 | http://bestiejs.github.io/json3 | Copyright 2012-2014, Kit Cambridge | http://kit.mit-license.org */
          (function() {
            var g = typeof define === "function" && define.amd;
            var j = { function: true, object: true };
            var m = j[typeof a] && a && !a.nodeType && a;
            var n = (j[typeof window] && window) || this,
              f =
                m &&
                j[typeof c] &&
                c &&
                !c.nodeType &&
                typeof d == "object" &&
                d;
            if (f && (f.global === f || f.window === f || f.self === f)) {
              n = f;
            }
            function o(ag, aa) {
              ag || (ag = n.Object());
              aa || (aa = n.Object());
              var P = ag.Number || n.Number,
                W = ag.String || n.String,
                C = ag.Object || n.Object,
                X = ag.Date || n.Date,
                Y = ag.SyntaxError || n.SyntaxError,
                af = ag.TypeError || n.TypeError,
                O = ag.Math || n.Math,
                ad = ag.JSON || n.JSON;
              if (typeof ad == "object" && ad) {
                aa.stringify = ad.stringify;
                aa.parse = ad.parse;
              }
              var s = C.prototype,
                z = s.toString,
                w,
                r,
                Q;
              var G = new X(-3509827334573292);
              try {
                G =
                  G.getUTCFullYear() == -109252 &&
                  G.getUTCMonth() === 0 &&
                  G.getUTCDate() === 1 &&
                  G.getUTCHours() == 10 &&
                  G.getUTCMinutes() == 37 &&
                  G.getUTCSeconds() == 6 &&
                  G.getUTCMilliseconds() == 708;
              } catch (A) {}
              function t(ah) {
                if (t[ah] !== Q) {
                  return t[ah];
                }
                var ai;
                if (ah == "bug-string-char-index") {
                  ai = "a"[0] != "a";
                } else {
                  if (ah == "json") {
                    ai = t("json-stringify") && t("json-parse");
                  } else {
                    var ap,
                      am = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
                    if (ah == "json-stringify") {
                      var an = aa.stringify,
                        ao = typeof an == "function" && G;
                      if (ao) {
                        (ap = function() {
                          return 1;
                        }).toJSON = ap;
                        try {
                          ao =
                            an(0) === "0" &&
                            an(new P()) === "0" &&
                            an(new W()) == '""' &&
                            an(z) === Q &&
                            an(Q) === Q &&
                            an() === Q &&
                            an(ap) === "1" &&
                            an([ap]) == "[1]" &&
                            an([Q]) == "[null]" &&
                            an(null) == "null" &&
                            an([Q, z, null]) == "[null,null,null]" &&
                            an({
                              a: [ap, true, false, null, "\x00\b\n\f\r\t"]
                            }) == am &&
                            an(null, ap) === "1" &&
                            an([1, 2], null, 1) == "[\n 1,\n 2\n]" &&
                            an(new X(-8640000000000000)) ==
                              '"-271821-04-20T00:00:00.000Z"' &&
                            an(new X(8640000000000000)) ==
                              '"+275760-09-13T00:00:00.000Z"' &&
                            an(new X(-62198755200000)) ==
                              '"-000001-01-01T00:00:00.000Z"' &&
                            an(new X(-1)) == '"1969-12-31T23:59:59.999Z"';
                        } catch (aj) {
                          ao = false;
                        }
                      }
                      ai = ao;
                    }
                    if (ah == "json-parse") {
                      var al = aa.parse;
                      if (typeof al == "function") {
                        try {
                          if (al("0") === 0 && !al(false)) {
                            ap = al(am);
                            var ak = ap.a.length == 5 && ap.a[0] === 1;
                            if (ak) {
                              try {
                                ak = !al('"\t"');
                              } catch (aj) {}
                              if (ak) {
                                try {
                                  ak = al("01") !== 1;
                                } catch (aj) {}
                              }
                              if (ak) {
                                try {
                                  ak = al("1.") !== 1;
                                } catch (aj) {}
                              }
                            }
                          }
                        } catch (aj) {
                          ak = false;
                        }
                      }
                      ai = ak;
                    }
                  }
                }
                return (t[ah] = !!ai);
              }
              if (!t("json")) {
                var Z = "[object Function]",
                  V = "[object Date]",
                  S = "[object Number]",
                  T = "[object String]",
                  J = "[object Array]",
                  F = "[object Boolean]";
                var K = t("bug-string-char-index");
                if (!G) {
                  var x = O.floor;
                  var ae = [
                    0,
                    31,
                    59,
                    90,
                    120,
                    151,
                    181,
                    212,
                    243,
                    273,
                    304,
                    334
                  ];
                  var I = function(ah, ai) {
                    return (
                      ae[ai] +
                      365 * (ah - 1970) +
                      x((ah - 1969 + (ai = +(ai > 1))) / 4) -
                      x((ah - 1901 + ai) / 100) +
                      x((ah - 1601 + ai) / 400)
                    );
                  };
                }
                if (!(w = s.hasOwnProperty)) {
                  w = function(aj) {
                    var ah = {},
                      ai;
                    if (
                      ((ah.__proto__ = null),
                      (ah.__proto__ = { toString: 1 }),
                      ah).toString != z
                    ) {
                      w = function(am) {
                        var al = this.__proto__,
                          ak = am in ((this.__proto__ = null), this);
                        this.__proto__ = al;
                        return ak;
                      };
                    } else {
                      ai = ah.constructor;
                      w = function(al) {
                        var ak = (this.constructor || ai).prototype;
                        return al in this && !(al in ak && this[al] === ak[al]);
                      };
                    }
                    ah = null;
                    return w.call(this, aj);
                  };
                }
                r = function(aj, am) {
                  var ak = 0,
                    ah,
                    ai,
                    al;
                  (ah = function() {
                    this.valueOf = 0;
                  }).prototype.valueOf = 0;
                  ai = new ah();
                  for (al in ai) {
                    if (w.call(ai, al)) {
                      ak++;
                    }
                  }
                  ah = ai = null;
                  if (!ak) {
                    ai = [
                      "valueOf",
                      "toString",
                      "toLocaleString",
                      "propertyIsEnumerable",
                      "isPrototypeOf",
                      "hasOwnProperty",
                      "constructor"
                    ];
                    r = function(ao, at) {
                      var ar = z.call(ao) == Z,
                        aq,
                        ap;
                      var an =
                        (!ar &&
                          typeof ao.constructor != "function" &&
                          j[typeof ao.hasOwnProperty] &&
                          ao.hasOwnProperty) ||
                        w;
                      for (aq in ao) {
                        if (!(ar && aq == "prototype") && an.call(ao, aq)) {
                          at(aq);
                        }
                      }
                      for (
                        ap = ai.length;
                        (aq = ai[--ap]);
                        an.call(ao, aq) && at(aq)
                      ) {}
                    };
                  } else {
                    if (ak == 2) {
                      r = function(ao, ar) {
                        var an = {},
                          aq = z.call(ao) == Z,
                          ap;
                        for (ap in ao) {
                          if (
                            !(aq && ap == "prototype") &&
                            !w.call(an, ap) &&
                            (an[ap] = 1) &&
                            w.call(ao, ap)
                          ) {
                            ar(ap);
                          }
                        }
                      };
                    } else {
                      r = function(ao, ar) {
                        var aq = z.call(ao) == Z,
                          ap,
                          an;
                        for (ap in ao) {
                          if (
                            !(aq && ap == "prototype") &&
                            w.call(ao, ap) &&
                            !(an = ap === "constructor")
                          ) {
                            ar(ap);
                          }
                        }
                        if (an || w.call(ao, (ap = "constructor"))) {
                          ar(ap);
                        }
                      };
                    }
                  }
                  return r(aj, am);
                };
                if (!t("json-stringify")) {
                  var v = {
                    92: "\\\\",
                    34: '\\"',
                    8: "\\b",
                    12: "\\f",
                    10: "\\n",
                    13: "\\r",
                    9: "\\t"
                  };
                  var N = "000000";
                  var y = function(ah, ai) {
                    return (N + (ai || 0)).slice(-ah);
                  };
                  var E = "\\u00";
                  var H = function(an) {
                    var ai = '"',
                      al = 0,
                      am = an.length,
                      ah = !K || am > 10;
                    var ak = ah && (K ? an.split("") : an);
                    for (; al < am; al++) {
                      var aj = an.charCodeAt(al);
                      switch (aj) {
                        case 8:
                        case 9:
                        case 10:
                        case 12:
                        case 13:
                        case 34:
                        case 92:
                          ai += v[aj];
                          break;
                        default:
                          if (aj < 32) {
                            ai += E + y(2, aj.toString(16));
                            break;
                          }
                          ai += ah ? ak[al] : an.charAt(al);
                      }
                    }
                    return ai + '"';
                  };
                  var u = function(an, aF, al, aq, aC, ah, ao) {
                    var ay,
                      aj,
                      av,
                      aE,
                      aD,
                      ap,
                      aB,
                      az,
                      aw,
                      at,
                      ax,
                      ai,
                      am,
                      ak,
                      aA,
                      au;
                    try {
                      ay = aF[an];
                    } catch (ar) {}
                    if (typeof ay == "object" && ay) {
                      aj = z.call(ay);
                      if (aj == V && !w.call(ay, "toJSON")) {
                        if (ay > -1 / 0 && ay < 1 / 0) {
                          if (I) {
                            aD = x(ay / 86400000);
                            for (
                              av = x(aD / 365.2425) + 1970 - 1;
                              I(av + 1, 0) <= aD;
                              av++
                            ) {}
                            for (
                              aE = x((aD - I(av, 0)) / 30.42);
                              I(av, aE + 1) <= aD;
                              aE++
                            ) {}
                            aD = 1 + aD - I(av, aE);
                            ap = (ay % 86400000 + 86400000) % 86400000;
                            aB = x(ap / 3600000) % 24;
                            az = x(ap / 60000) % 60;
                            aw = x(ap / 1000) % 60;
                            at = ap % 1000;
                          } else {
                            av = ay.getUTCFullYear();
                            aE = ay.getUTCMonth();
                            aD = ay.getUTCDate();
                            aB = ay.getUTCHours();
                            az = ay.getUTCMinutes();
                            aw = ay.getUTCSeconds();
                            at = ay.getUTCMilliseconds();
                          }
                          ay =
                            (av <= 0 || av >= 10000
                              ? (av < 0 ? "-" : "+") + y(6, av < 0 ? -av : av)
                              : y(4, av)) +
                            "-" +
                            y(2, aE + 1) +
                            "-" +
                            y(2, aD) +
                            "T" +
                            y(2, aB) +
                            ":" +
                            y(2, az) +
                            ":" +
                            y(2, aw) +
                            "." +
                            y(3, at) +
                            "Z";
                        } else {
                          ay = null;
                        }
                      } else {
                        if (
                          typeof ay.toJSON == "function" &&
                          ((aj != S && aj != T && aj != J) ||
                            w.call(ay, "toJSON"))
                        ) {
                          ay = ay.toJSON(an);
                        }
                      }
                    }
                    if (al) {
                      ay = al.call(aF, an, ay);
                    }
                    if (ay === null) {
                      return "null";
                    }
                    aj = z.call(ay);
                    if (aj == F) {
                      return "" + ay;
                    } else {
                      if (aj == S) {
                        return ay > -1 / 0 && ay < 1 / 0 ? "" + ay : "null";
                      } else {
                        if (aj == T) {
                          return H("" + ay);
                        }
                      }
                    }
                    if (typeof ay == "object") {
                      for (ak = ao.length; ak--; ) {
                        if (ao[ak] === ay) {
                          throw af();
                        }
                      }
                      ao.push(ay);
                      ax = [];
                      aA = ah;
                      ah += aC;
                      if (aj == J) {
                        for (am = 0, ak = ay.length; am < ak; am++) {
                          ai = u(am, ay, al, aq, aC, ah, ao);
                          ax.push(ai === Q ? "null" : ai);
                        }
                        au = ax.length
                          ? aC
                            ? "[\n" + ah + ax.join(",\n" + ah) + "\n" + aA + "]"
                            : "[" + ax.join(",") + "]"
                          : "[]";
                      } else {
                        r(aq || ay, function(aH) {
                          var aG = u(aH, ay, al, aq, aC, ah, ao);
                          if (aG !== Q) {
                            ax.push(H(aH) + ":" + (aC ? " " : "") + aG);
                          }
                        });
                        au = ax.length
                          ? aC
                            ? "{\n" + ah + ax.join(",\n" + ah) + "\n" + aA + "}"
                            : "{" + ax.join(",") + "}"
                          : "{}";
                      }
                      ao.pop();
                      return au;
                    }
                  };
                  aa.stringify = function(ah, aj, ak) {
                    var ai, aq, ao, an;
                    if (j[typeof aj] && aj) {
                      if ((an = z.call(aj)) == Z) {
                        aq = aj;
                      } else {
                        if (an == J) {
                          ao = {};
                          for (
                            var am = 0, al = aj.length, ap;
                            am < al;
                            ap = aj[am++],
                              ((an = z.call(ap)), an == T || an == S) &&
                                (ao[ap] = 1)
                          ) {}
                        }
                      }
                    }
                    if (ak) {
                      if ((an = z.call(ak)) == S) {
                        if ((ak -= ak % 1) > 0) {
                          for (
                            ai = "", ak > 10 && (ak = 10);
                            ai.length < ak;
                            ai += " "
                          ) {}
                        }
                      } else {
                        if (an == T) {
                          ai = ak.length <= 10 ? ak : ak.slice(0, 10);
                        }
                      }
                    }
                    return u(
                      "",
                      ((ap = {}), (ap[""] = ah), ap),
                      aq,
                      ao,
                      ai,
                      "",
                      []
                    );
                  };
                }
                if (!t("json-parse")) {
                  var R = W.fromCharCode;
                  var q = {
                    92: "\\",
                    34: '"',
                    47: "/",
                    98: "\b",
                    116: "\t",
                    110: "\n",
                    102: "\f",
                    114: "\r"
                  };
                  var L, ac;
                  var M = function() {
                    L = ac = null;
                    throw Y();
                  };
                  var D = function() {
                    var am = ac,
                      ak = am.length,
                      al,
                      aj,
                      ah,
                      an,
                      ai;
                    while (L < ak) {
                      ai = am.charCodeAt(L);
                      switch (ai) {
                        case 9:
                        case 10:
                        case 13:
                        case 32:
                          L++;
                          break;
                        case 123:
                        case 125:
                        case 91:
                        case 93:
                        case 58:
                        case 44:
                          al = K ? am.charAt(L) : am[L];
                          L++;
                          return al;
                        case 34:
                          for (al = "@", L++; L < ak; ) {
                            ai = am.charCodeAt(L);
                            if (ai < 32) {
                              M();
                            } else {
                              if (ai == 92) {
                                ai = am.charCodeAt(++L);
                                switch (ai) {
                                  case 92:
                                  case 34:
                                  case 47:
                                  case 98:
                                  case 116:
                                  case 110:
                                  case 102:
                                  case 114:
                                    al += q[ai];
                                    L++;
                                    break;
                                  case 117:
                                    aj = ++L;
                                    for (ah = L + 4; L < ah; L++) {
                                      ai = am.charCodeAt(L);
                                      if (
                                        !(
                                          (ai >= 48 && ai <= 57) ||
                                          (ai >= 97 && ai <= 102) ||
                                          (ai >= 65 && ai <= 70)
                                        )
                                      ) {
                                        M();
                                      }
                                    }
                                    al += R("0x" + am.slice(aj, L));
                                    break;
                                  default:
                                    M();
                                }
                              } else {
                                if (ai == 34) {
                                  break;
                                }
                                ai = am.charCodeAt(L);
                                aj = L;
                                while (ai >= 32 && ai != 92 && ai != 34) {
                                  ai = am.charCodeAt(++L);
                                }
                                al += am.slice(aj, L);
                              }
                            }
                          }
                          if (am.charCodeAt(L) == 34) {
                            L++;
                            return al;
                          }
                          M();
                        default:
                          aj = L;
                          if (ai == 45) {
                            an = true;
                            ai = am.charCodeAt(++L);
                          }
                          if (ai >= 48 && ai <= 57) {
                            if (
                              ai == 48 &&
                              ((ai = am.charCodeAt(L + 1)),
                              ai >= 48 && ai <= 57)
                            ) {
                              M();
                            }
                            an = false;
                            for (
                              ;
                              L < ak &&
                              ((ai = am.charCodeAt(L)), ai >= 48 && ai <= 57);
                              L++
                            ) {}
                            if (am.charCodeAt(L) == 46) {
                              ah = ++L;
                              for (
                                ;
                                ah < ak &&
                                ((ai = am.charCodeAt(ah)),
                                ai >= 48 && ai <= 57);
                                ah++
                              ) {}
                              if (ah == L) {
                                M();
                              }
                              L = ah;
                            }
                            ai = am.charCodeAt(L);
                            if (ai == 101 || ai == 69) {
                              ai = am.charCodeAt(++L);
                              if (ai == 43 || ai == 45) {
                                L++;
                              }
                              for (
                                ah = L;
                                ah < ak &&
                                ((ai = am.charCodeAt(ah)),
                                ai >= 48 && ai <= 57);
                                ah++
                              ) {}
                              if (ah == L) {
                                M();
                              }
                              L = ah;
                            }
                            return +am.slice(aj, L);
                          }
                          if (an) {
                            M();
                          }
                          if (am.slice(L, L + 4) == "true") {
                            L += 4;
                            return true;
                          } else {
                            if (am.slice(L, L + 5) == "false") {
                              L += 5;
                              return false;
                            } else {
                              if (am.slice(L, L + 4) == "null") {
                                L += 4;
                                return null;
                              }
                            }
                          }
                          M();
                      }
                    }
                    return "$";
                  };
                  var ab = function(ai) {
                    var ah, aj;
                    if (ai == "$") {
                      M();
                    }
                    if (typeof ai == "string") {
                      if ((K ? ai.charAt(0) : ai[0]) == "@") {
                        return ai.slice(1);
                      }
                      if (ai == "[") {
                        ah = [];
                        for (; ; aj || (aj = true)) {
                          ai = D();
                          if (ai == "]") {
                            break;
                          }
                          if (aj) {
                            if (ai == ",") {
                              ai = D();
                              if (ai == "]") {
                                M();
                              }
                            } else {
                              M();
                            }
                          }
                          if (ai == ",") {
                            M();
                          }
                          ah.push(ab(ai));
                        }
                        return ah;
                      } else {
                        if (ai == "{") {
                          ah = {};
                          for (; ; aj || (aj = true)) {
                            ai = D();
                            if (ai == "}") {
                              break;
                            }
                            if (aj) {
                              if (ai == ",") {
                                ai = D();
                                if (ai == "}") {
                                  M();
                                }
                              } else {
                                M();
                              }
                            }
                            if (
                              ai == "," ||
                              typeof ai != "string" ||
                              (K ? ai.charAt(0) : ai[0]) != "@" ||
                              D() != ":"
                            ) {
                              M();
                            }
                            ah[ai.slice(1)] = ab(D());
                          }
                          return ah;
                        }
                      }
                      M();
                    }
                    return ai;
                  };
                  var U = function(aj, ai, ak) {
                    var ah = B(aj, ai, ak);
                    if (ah === Q) {
                      delete aj[ai];
                    } else {
                      aj[ai] = ah;
                    }
                  };
                  var B = function(ak, aj, al) {
                    var ai = ak[aj],
                      ah;
                    if (typeof ai == "object" && ai) {
                      if (z.call(ai) == J) {
                        for (ah = ai.length; ah--; ) {
                          U(ai, ah, al);
                        }
                      } else {
                        r(ai, function(am) {
                          U(ai, am, al);
                        });
                      }
                    }
                    return al.call(ak, aj, ai);
                  };
                  aa.parse = function(aj, ak) {
                    var ah, ai;
                    L = 0;
                    ac = "" + aj;
                    ah = ab(D());
                    if (D() != "$") {
                      M();
                    }
                    L = ac = null;
                    return ak && z.call(ak) == Z
                      ? B(((ai = {}), (ai[""] = ah), ai), "", ak)
                      : ah;
                  };
                }
              }
              aa.runInContext = o;
              return aa;
            }
            if (m && !g) {
              o(n, m);
            } else {
              var k = n.JSON,
                p = n.JSON3,
                h = false;
              var l = o(
                n,
                (n.JSON3 = {
                  noConflict: function() {
                    if (!h) {
                      h = true;
                      n.JSON = k;
                      n.JSON3 = p;
                      k = p = null;
                    }
                    return l;
                  }
                })
              );
              n.JSON = { parse: l.parse, stringify: l.stringify };
            }
            if (g) {
              define(function() {
                return l;
              });
            }
          }.call(this));
        }.call(
          this,
          typeof global !== "undefined"
            ? global
            : typeof self !== "undefined"
              ? self
              : typeof window !== "undefined" ? window : {}
        ));
      },
      {}
    ],
    4: [
      function(b, c, a) {
        (function(d, f) {
          if (typeof c == "object" && c.exports) {
            c.exports = f();
          } else {
            if (typeof define == "function" && define.amd) {
              define(f);
            } else {
              d.Spinner = f();
            }
          }
        })(this, function() {
          var j = ["webkit", "Moz", "ms", "O"],
            t = {},
            s,
            n;
          function l(u, x) {
            var v = document.createElement(u || "div"),
              w;
            for (w in x) {
              v[w] = x[w];
            }
            return v;
          }
          function m(v) {
            for (var u = 1, w = arguments.length; u < w; u++) {
              v.appendChild(arguments[u]);
            }
            return v;
          }
          function g(y, u, A, D) {
            var v = ["opacity", u, ~~(y * 100), A, D].join("-"),
              w = 0.01 + A / D * 100,
              C = Math.max(1 - (1 - y) / u * (100 - w), y),
              B = s.substring(0, s.indexOf("Animation")).toLowerCase(),
              x = (B && "-" + B + "-") || "";
            if (!t[v]) {
              n.insertRule(
                "@" +
                  x +
                  "keyframes " +
                  v +
                  "{0%{opacity:" +
                  C +
                  "}" +
                  w +
                  "%{opacity:" +
                  y +
                  "}" +
                  (w + 0.01) +
                  "%{opacity:1}" +
                  (w + u) % 100 +
                  "%{opacity:" +
                  y +
                  "}100%{opacity:" +
                  C +
                  "}}",
                n.cssRules.length
              );
              t[v] = 1;
            }
            return v;
          }
          function q(x, y) {
            var w = x.style,
              u,
              v;
            y = y.charAt(0).toUpperCase() + y.slice(1);
            if (w[y] !== undefined) {
              return y;
            }
            for (v = 0; v < j.length; v++) {
              u = j[v] + y;
              if (w[u] !== undefined) {
                return u;
              }
            }
          }
          function k(u, w) {
            for (var v in w) {
              u.style[q(u, v) || v] = w[v];
            }
            return u;
          }
          function o(w) {
            for (var u = 1; u < arguments.length; u++) {
              var v = arguments[u];
              for (var x in v) {
                if (w[x] === undefined) {
                  w[x] = v[x];
                }
              }
            }
            return w;
          }
          function r(v, u) {
            return typeof v == "string" ? v : v[u % v.length];
          }
          var h = {
            lines: 12,
            length: 7,
            width: 5,
            radius: 10,
            scale: 1,
            corners: 1,
            color: "#000",
            opacity: 1 / 4,
            rotate: 0,
            direction: 1,
            speed: 1,
            trail: 100,
            fps: 20,
            zIndex: 2000000000,
            className: "spinner",
            top: "50%",
            left: "50%",
            shadow: false,
            hwaccel: false,
            position: "absolute"
          };
          function f(u) {
            this.opts = o(u || {}, f.defaults, h);
          }
          f.defaults = {};
          o(f.prototype, {
            spin: function(D) {
              this.stop();
              var F = this,
                v = F.opts,
                w = (F.el = l(null, { className: v.className }));
              k(w, {
                position: v.position,
                width: 0,
                zIndex: v.zIndex,
                left: v.left,
                top: v.top
              });
              if (D) {
                D.insertBefore(w, D.firstChild || null);
              }
              w.setAttribute("role", "progressbar");
              F.lines(w, F.opts);
              if (!s) {
                var A = 0,
                  u = (v.lines - 1) * (1 - v.direction) / 2,
                  z,
                  x = v.fps,
                  C = x / v.speed,
                  B = (1 - v.opacity) / (C * v.trail / 100),
                  E = C / v.lines;
                (function y() {
                  A++;
                  for (var G = 0; G < v.lines; G++) {
                    z = Math.max(
                      1 - ((A + (v.lines - G) * E) % C) * B,
                      v.opacity
                    );
                    F.opacity(w, G * v.direction + u, z, v);
                  }
                  F.timeout = F.el && setTimeout(y, ~~(1000 / x));
                })();
              }
              return F;
            },
            stop: function() {
              var u = this.el;
              if (u) {
                clearTimeout(this.timeout);
                if (u.parentNode) {
                  u.parentNode.removeChild(u);
                }
                this.el = undefined;
              }
              return this;
            },
            lines: function(w, y) {
              var v = 0,
                z = (y.lines - 1) * (1 - y.direction) / 2,
                u;
              function x(A, B) {
                return k(l(), {
                  position: "absolute",
                  width: y.scale * (y.length + y.width) + "px",
                  height: y.scale * y.width + "px",
                  background: A,
                  boxShadow: B,
                  transformOrigin: "left",
                  transform:
                    "rotate(" +
                    ~~(360 / y.lines * v + y.rotate) +
                    "deg) translate(" +
                    y.scale * y.radius +
                    "px,0)",
                  borderRadius: ((y.corners * y.scale * y.width) >> 1) + "px"
                });
              }
              for (; v < y.lines; v++) {
                u = k(l(), {
                  position: "absolute",
                  top: 1 + ~(y.scale * y.width / 2) + "px",
                  transform: y.hwaccel ? "translate3d(0,0,0)" : "",
                  opacity: y.opacity,
                  animation:
                    s &&
                    g(y.opacity, y.trail, z + v * y.direction, y.lines) +
                      " " +
                      1 / y.speed +
                      "s linear infinite"
                });
                if (y.shadow) {
                  m(u, k(x("#000", "0 0 4px #000"), { top: "2px" }));
                }
                m(w, m(u, x(r(y.color, v), "0 0 1px rgba(0,0,0,.1)")));
              }
              return w;
            },
            opacity: function(v, u, w) {
              if (u < v.childNodes.length) {
                v.childNodes[u].style.opacity = w;
              }
            }
          });
          function p() {
            function u(w, v) {
              return l(
                "<" +
                  w +
                  ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',
                v
              );
            }
            n.addRule(".spin-vml", "behavior:url(#default#VML)");
            f.prototype.lines = function(x, w) {
              var v = w.scale * (w.length + w.width),
                D = w.scale * 2 * v;
              function C() {
                return k(
                  u("group", {
                    coordsize: D + " " + D,
                    coordorigin: -v + " " + -v
                  }),
                  { width: D, height: D }
                );
              }
              var y = -(w.width + w.length) * w.scale * 2 + "px",
                B = k(C(), { position: "absolute", top: y, left: y }),
                A;
              function z(F, E, G) {
                m(
                  B,
                  m(
                    k(C(), { rotation: 360 / w.lines * F + "deg", left: ~~E }),
                    m(
                      k(u("roundrect", { arcsize: w.corners }), {
                        width: v,
                        height: w.scale * w.width,
                        left: w.scale * w.radius,
                        top: (-w.scale * w.width) >> 1,
                        filter: G
                      }),
                      u("fill", { color: r(w.color, F), opacity: w.opacity }),
                      u("stroke", { opacity: 0 })
                    )
                  )
                );
              }
              if (w.shadow) {
                for (A = 1; A <= w.lines; A++) {
                  z(
                    A,
                    -2,
                    "progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)"
                  );
                }
              }
              for (A = 1; A <= w.lines; A++) {
                z(A);
              }
              return m(x, B);
            };
            f.prototype.opacity = function(w, v, y, x) {
              var z = w.firstChild;
              x = (x.shadow && x.lines) || 0;
              if (z && v + x < z.childNodes.length) {
                z = z.childNodes[v + x];
                z = z && z.firstChild;
                z = z && z.firstChild;
                if (z) {
                  z.opacity = y;
                }
              }
            };
          }
          if (typeof document !== "undefined") {
            n = (function() {
              var u = l("style", { type: "text/css" });
              m(document.getElementsByTagName("head")[0], u);
              return u.sheet || u.styleSheet;
            })();
            var d = k(l("group"), { behavior: "url(#default#VML)" });
            if (!q(d, "transform") && d.adj) {
              p();
            } else {
              s = q(d, "animation");
            }
          }
          return f;
        });
      },
      {}
    ],
    5: [
      function(j, b, u) {
        var m = j("emitter");
        var l = j("reduce");
        var q = "undefined" == typeof window ? this : window;
        function f() {}
        function n(v) {
          var w = {}.toString.call(v);
          switch (w) {
            case "[object File]":
            case "[object Blob]":
            case "[object FormData]":
              return true;
            default:
              return false;
          }
        }
        function o() {
          if (
            q.XMLHttpRequest &&
            ("file:" != q.location.protocol || !q.ActiveXObject)
          ) {
            return new XMLHttpRequest();
          } else {
            try {
              return new ActiveXObject("Microsoft.XMLHTTP");
            } catch (v) {}
            try {
              return new ActiveXObject("Msxml2.XMLHTTP.6.0");
            } catch (v) {}
            try {
              return new ActiveXObject("Msxml2.XMLHTTP.3.0");
            } catch (v) {}
            try {
              return new ActiveXObject("Msxml2.XMLHTTP");
            } catch (v) {}
          }
          return false;
        }
        var s = "".trim
          ? function(v) {
              return v.trim();
            }
          : function(v) {
              return v.replace(/(^\s*|\s*$)/g, "");
            };
        function k(v) {
          return v === Object(v);
        }
        function p(x) {
          if (!k(x)) {
            return x;
          }
          var w = [];
          for (var v in x) {
            if (null != x[v]) {
              w.push(encodeURIComponent(v) + "=" + encodeURIComponent(x[v]));
            }
          }
          return w.join("&");
        }
        d.serializeObject = p;
        function h(B) {
          var z = {};
          var x = B.split("&");
          var y;
          var A;
          for (var w = 0, v = x.length; w < v; ++w) {
            A = x[w];
            y = A.split("=");
            z[decodeURIComponent(y[0])] = decodeURIComponent(y[1]);
          }
          return z;
        }
        d.parseString = h;
        d.types = {
          html: "text/html",
          json: "application/json",
          xml: "application/xml",
          urlencoded: "application/x-www-form-urlencoded",
          form: "application/x-www-form-urlencoded",
          "form-data": "application/x-www-form-urlencoded"
        };
        d.serialize = {
          "application/x-www-form-urlencoded": p,
          "application/json": JSON.stringify
        };
        d.parse = {
          "application/x-www-form-urlencoded": h,
          "application/json": JSON.parse
        };
        function c(A) {
          var C = A.split(/\r?\n/);
          var x = {};
          var z;
          var D;
          var B;
          var v;
          C.pop();
          for (var w = 0, y = C.length; w < y; ++w) {
            D = C[w];
            z = D.indexOf(":");
            B = D.slice(0, z).toLowerCase();
            v = s(D.slice(z + 1));
            x[B] = v;
          }
          return x;
        }
        function g(v) {
          return v.split(/ *; */).shift();
        }
        function t(v) {
          return l(
            v.split(/ *; */),
            function(y, A) {
              var x = A.split(/ *= */),
                w = x.shift(),
                z = x.shift();
              if (w && z) {
                y[w] = z;
              }
              return y;
            },
            {}
          );
        }
        function a(w, v) {
          v = v || {};
          this.req = w;
          this.xhr = this.req.xhr;
          this.text = this.req.method != "HEAD" ? this.xhr.responseText : null;
          this.setStatusProperties(this.xhr.status);
          this.header = this.headers = c(this.xhr.getAllResponseHeaders());
          this.header["content-type"] = this.xhr.getResponseHeader(
            "content-type"
          );
          this.setHeaderProperties(this.header);
          this.body =
            this.req.method != "HEAD" ? this.parseBody(this.text) : null;
        }
        a.prototype.get = function(v) {
          return this.header[v.toLowerCase()];
        };
        a.prototype.setHeaderProperties = function(y) {
          var w = this.header["content-type"] || "";
          this.type = g(w);
          var x = t(w);
          for (var v in x) {
            this[v] = x[v];
          }
        };
        a.prototype.parseBody = function(w) {
          var v = d.parse[this.type];
          return v && w && w.length ? v(w) : null;
        };
        a.prototype.setStatusProperties = function(v) {
          var w = (v / 100) | 0;
          this.status = v;
          this.statusType = w;
          this.info = 1 == w;
          this.ok = 2 == w;
          this.clientError = 4 == w;
          this.serverError = 5 == w;
          this.error = 4 == w || 5 == w ? this.toError() : false;
          this.accepted = 202 == v;
          this.noContent = 204 == v || 1223 == v;
          this.badRequest = 400 == v;
          this.unauthorized = 401 == v;
          this.notAcceptable = 406 == v;
          this.notFound = 404 == v;
          this.forbidden = 403 == v;
        };
        a.prototype.toError = function() {
          var x = this.req;
          var z = x.method;
          var v = x.url;
          var y = "cannot " + z + " " + v + " (" + this.status + ")";
          var w = new Error(y);
          w.status = this.status;
          w.method = z;
          w.url = v;
          return w;
        };
        d.Response = a;
        function r(x, w) {
          var v = this;
          m.call(this);
          this._query = this._query || [];
          this.method = x;
          this.url = w;
          this.header = {};
          this._header = {};
          this.on("end", function() {
            var z = null;
            var y = null;
            try {
              y = new a(v);
            } catch (A) {
              z = new Error("Parser is unable to parse the response");
              z.parse = true;
              z.original = A;
            }
            v.callback(z, y);
          });
        }
        m(r.prototype);
        r.prototype.use = function(v) {
          v(this);
          return this;
        };
        r.prototype.timeout = function(v) {
          this._timeout = v;
          return this;
        };
        r.prototype.clearTimeout = function() {
          this._timeout = 0;
          clearTimeout(this._timer);
          return this;
        };
        r.prototype.abort = function() {
          if (this.aborted) {
            return;
          }
          this.aborted = true;
          this.xhr.abort();
          this.clearTimeout();
          this.emit("abort");
          return this;
        };
        r.prototype.set = function(w, x) {
          if (k(w)) {
            for (var v in w) {
              this.set(v, w[v]);
            }
            return this;
          }
          this._header[w.toLowerCase()] = x;
          this.header[w] = x;
          return this;
        };
        r.prototype.unset = function(v) {
          delete this._header[v.toLowerCase()];
          delete this.header[v];
          return this;
        };
        r.prototype.getHeader = function(v) {
          return this._header[v.toLowerCase()];
        };
        r.prototype.type = function(v) {
          this.set("Content-Type", d.types[v] || v);
          return this;
        };
        r.prototype.accept = function(v) {
          this.set("Accept", d.types[v] || v);
          return this;
        };
        r.prototype.auth = function(v, w) {
          var x = btoa(v + ":" + w);
          this.set("Authorization", "Basic " + x);
          return this;
        };
        r.prototype.query = function(v) {
          if ("string" != typeof v) {
            v = p(v);
          }
          if (v) {
            this._query.push(v);
          }
          return this;
        };
        r.prototype.field = function(v, w) {
          if (!this._formData) {
            this._formData = new FormData();
          }
          this._formData.append(v, w);
          return this;
        };
        r.prototype.attach = function(x, w, v) {
          if (!this._formData) {
            this._formData = new FormData();
          }
          this._formData.append(x, w, v);
          return this;
        };
        r.prototype.send = function(x) {
          var y = k(x);
          var w = this.getHeader("Content-Type");
          if (y && k(this._data)) {
            for (var v in x) {
              this._data[v] = x[v];
            }
          } else {
            if ("string" == typeof x) {
              if (!w) {
                this.type("form");
              }
              w = this.getHeader("Content-Type");
              if ("application/x-www-form-urlencoded" == w) {
                this._data = this._data ? this._data + "&" + x : x;
              } else {
                this._data = (this._data || "") + x;
              }
            } else {
              this._data = x;
            }
          }
          if (!y) {
            return this;
          }
          if (!w) {
            this.type("json");
          }
          return this;
        };
        r.prototype.callback = function(x, v) {
          var w = this._callback;
          this.clearTimeout();
          if (2 == w.length) {
            return w(x, v);
          }
          if (x) {
            return this.emit("error", x);
          }
          w(v);
        };
        r.prototype.crossDomainError = function() {
          var v = new Error(
            "Origin is not allowed by Access-Control-Allow-Origin"
          );
          v.crossDomain = true;
          this.callback(v);
        };
        r.prototype.timeoutError = function() {
          var w = this._timeout;
          var v = new Error("timeout of " + w + "ms exceeded");
          v.timeout = w;
          this.callback(v);
        };
        r.prototype.withCredentials = function() {
          this._withCredentials = true;
          return this;
        };
        r.prototype.end = function(x) {
          var v = this;
          var C = (this.xhr = o());
          var A = this._query.join("&");
          var z = this._timeout;
          var y = this._formData || this._data;
          this._callback = x || f;
          C.onreadystatechange = function() {
            if (4 != C.readyState) {
              return;
            }
            if (0 == C.status) {
              if (v.aborted) {
                return v.timeoutError();
              }
              return v.crossDomainError();
            }
            v.emit("end");
          };
          if (C.upload) {
            C.upload.onprogress = function(D) {
              D.percent = D.loaded / D.total * 100;
              v.emit("progress", D);
            };
          }
          if (z && !this._timer) {
            this._timer = setTimeout(function() {
              v.abort();
            }, z);
          }
          if (A) {
            A = d.serializeObject(A);
            this.url += ~this.url.indexOf("?") ? "&" + A : "?" + A;
          }
          C.open(this.method, this.url, true);
          if (this._withCredentials) {
            C.withCredentials = true;
          }
          if (
            "GET" != this.method &&
            "HEAD" != this.method &&
            "string" != typeof y &&
            !n(y)
          ) {
            var w = d.serialize[this.getHeader("Content-Type")];
            if (w) {
              y = w(y);
            }
          }
          for (var B in this.header) {
            if (null == this.header[B]) {
              continue;
            }
            C.setRequestHeader(B, this.header[B]);
          }
          this.emit("request", this);
          C.send(y);
          return this;
        };
        d.Request = r;
        function d(w, v) {
          if ("function" == typeof v) {
            return new r("GET", w).end(v);
          }
          if (1 == arguments.length) {
            return new r("GET", w);
          }
          return new r(w, v);
        }
        d.get = function(v, y, w) {
          var x = d("GET", v);
          if ("function" == typeof y) {
            (w = y), (y = null);
          }
          if (y) {
            x.query(y);
          }
          if (w) {
            x.end(w);
          }
          return x;
        };
        d.head = function(v, y, w) {
          var x = d("HEAD", v);
          if ("function" == typeof y) {
            (w = y), (y = null);
          }
          if (y) {
            x.send(y);
          }
          if (w) {
            x.end(w);
          }
          return x;
        };
        d.del = function(v, w) {
          var x = d("DELETE", v);
          if (w) {
            x.end(w);
          }
          return x;
        };
        d.patch = function(v, y, w) {
          var x = d("PATCH", v);
          if ("function" == typeof y) {
            (w = y), (y = null);
          }
          if (y) {
            x.send(y);
          }
          if (w) {
            x.end(w);
          }
          return x;
        };
        d.post = function(v, y, w) {
          var x = d("POST", v);
          if ("function" == typeof y) {
            (w = y), (y = null);
          }
          if (y) {
            x.send(y);
          }
          if (w) {
            x.end(w);
          }
          return x;
        };
        d.put = function(v, y, w) {
          var x = d("PUT", v);
          if ("function" == typeof y) {
            (w = y), (y = null);
          }
          if (y) {
            x.send(y);
          }
          if (w) {
            x.end(w);
          }
          return x;
        };
        b.exports = d;
      },
      { emitter: 6, reduce: 7 }
    ],
    6: [
      function(c, d, b) {
        d.exports = f;
        function f(g) {
          if (g) {
            return a(g);
          }
        }
        function a(h) {
          for (var g in f.prototype) {
            h[g] = f.prototype[g];
          }
          return h;
        }
        f.prototype.on = f.prototype.addEventListener = function(h, g) {
          this._callbacks = this._callbacks || {};
          (this._callbacks[h] = this._callbacks[h] || []).push(g);
          return this;
        };
        f.prototype.once = function(k, j) {
          var h = this;
          this._callbacks = this._callbacks || {};
          function g() {
            h.off(k, g);
            j.apply(this, arguments);
          }
          g.fn = j;
          this.on(k, g);
          return this;
        };
        f.prototype.off = f.prototype.removeListener = f.prototype.removeAllListeners = f.prototype.removeEventListener = function(
          l,
          j
        ) {
          this._callbacks = this._callbacks || {};
          if (0 == arguments.length) {
            this._callbacks = {};
            return this;
          }
          var k = this._callbacks[l];
          if (!k) {
            return this;
          }
          if (1 == arguments.length) {
            delete this._callbacks[l];
            return this;
          }
          var g;
          for (var h = 0; h < k.length; h++) {
            g = k[h];
            if (g === j || g.fn === j) {
              k.splice(h, 1);
              break;
            }
          }
          return this;
        };
        f.prototype.emit = function(l) {
          this._callbacks = this._callbacks || {};
          var h = [].slice.call(arguments, 1),
            k = this._callbacks[l];
          if (k) {
            k = k.slice(0);
            for (var j = 0, g = k.length; j < g; ++j) {
              k[j].apply(this, h);
            }
          }
          return this;
        };
        f.prototype.listeners = function(g) {
          this._callbacks = this._callbacks || {};
          return this._callbacks[g] || [];
        };
        f.prototype.hasListeners = function(g) {
          return !!this.listeners(g).length;
        };
      },
      {}
    ],
    7: [
      function(b, c, a) {
        c.exports = function(g, j, h) {
          var f = 0;
          var d = g.length;
          var k = arguments.length == 3 ? h : g[f++];
          while (f < d) {
            k = j.call(null, k, g[f], ++f, g);
          }
          return k;
        };
      },
      {}
    ],
    8: [
      function(c, d, b) {
        var a = c("./index"),
          f = c("./utils/each");
        d.exports = function() {
          var h = window.Keen || null,
            k = window._Keen || null,
            g,
            j;
          if (h && k) {
            (g = k.clients || {}), (j = k.ready || []);
            f(g, function(m, o) {
              f(a.prototype, function(q, p) {
                h.prototype[p] = q;
              });
              f(["Query", "Request", "Dataset", "Dataviz"], function(p) {
                h[p] = a[p] ? a[p] : function() {};
              });
              if (m._config) {
                m.configure.call(m, m._config);
              }
              if (m._setGlobalProperties) {
                f(m._setGlobalProperties, function(p) {
                  m.setGlobalProperties.apply(m, p);
                });
              }
              if (m._addEvent) {
                f(m._addEvent, function(p) {
                  m.addEvent.apply(m, p);
                });
              }
              var n = m._on || [];
              if (m._on) {
                f(m._on, function(p) {
                  m.on.apply(m, p);
                });
                m.trigger("ready");
              }
              f(
                ["_config", "_setGlobalProperties", "_addEvent", "_on"],
                function(p) {
                  if (m[p]) {
                    m[p] = undefined;
                    try {
                      delete m[p];
                    } catch (q) {}
                  }
                }
              );
            });
            f(j, function(m, n) {
              a.once("ready", m);
            });
          }
          window._Keen = undefined;
          try {
            delete window._Keen;
          } catch (l) {}
        };
      },
      { "./index": 16, "./utils/each": 29 }
    ],
    9: [
      function(b, c, a) {
        c.exports = function() {
          return "undefined" == typeof window ? "server" : "browser";
        };
      },
      {}
    ],
    10: [
      function(b, d, a) {
        var f = b("../utils/each"),
          c = b("../utils/json-shim");
        d.exports = function(h) {
          var g = [];
          f(h, function(k, j) {
            if ("string" !== typeof k) {
              k = c.stringify(k);
            }
            g.push(j + "=" + encodeURIComponent(k));
          });
          return "?" + g.join("&");
        };
      },
      { "../utils/each": 29, "../utils/json-shim": 32 }
    ],
    11: [
      function(b, c, a) {
        c.exports = function() {
          return new Date().getTimezoneOffset() * -60;
        };
      },
      {}
    ],
    12: [
      function(b, c, a) {
        c.exports = function() {
          if ("undefined" !== typeof window) {
            if (
              navigator.userAgent.indexOf("MSIE") !== -1 ||
              navigator.appVersion.indexOf("Trident/") > 0
            ) {
              return 2000;
            }
          }
          return 16000;
        };
      },
      {}
    ],
    13: [
      function(b, c, a) {
        c.exports = function() {
          var d = "undefined" == typeof window ? this : window;
          if (
            d.XMLHttpRequest &&
            ("file:" != d.location.protocol || !d.ActiveXObject)
          ) {
            return new XMLHttpRequest();
          } else {
            try {
              return new ActiveXObject("Microsoft.XMLHTTP");
            } catch (f) {}
            try {
              return new ActiveXObject("Msxml2.XMLHTTP.6.0");
            } catch (f) {}
            try {
              return new ActiveXObject("Msxml2.XMLHTTP.3.0");
            } catch (f) {}
            try {
              return new ActiveXObject("Msxml2.XMLHTTP");
            } catch (f) {}
          }
          return false;
        };
      },
      {}
    ],
    14: [
      function(b, c, a) {
        c.exports = function(h, g, j) {
          var f = j || function() {};
          if (g && !g.ok) {
            var d = g.body && g.body.error_code;
            h = new Error(d ? g.body.message : "Unknown error occurred");
            h.code = d ? g.body.error_code : "UnknownError";
          }
          if (h) {
            f(h, null);
          } else {
            f(null, g.body);
          }
          return;
        };
      },
      {}
    ],
    15: [
      function(f, b, g) {
        var o = f("superagent");
        var m = f("../utils/each"),
          a = f("./get-xhr-object");
        b.exports = function(p, q) {
          return function(r) {
            var s = r.constructor.prototype.end;
            if (typeof window === "undefined") {
              return;
            }
            r.requestType = r.requestType || {};
            r.requestType.type = p;
            r.requestType.options = r.requestType.options || {
              async: true,
              success: { responseText: '{ "created": true }', status: 201 },
              error: {
                responseText:
                  '{ "error_code": "ERROR", "message": "Request failed" }',
                status: 404
              }
            };
            if (q) {
              if (typeof q.async === "boolean") {
                r.requestType.options.async = q.async;
              }
              if (q.success) {
                extend(r.requestType.options.success, q.success);
              }
              if (q.error) {
                extend(r.requestType.options.error, q.error);
              }
            }
            r.end = function(v) {
              var u = this,
                t = this.requestType ? this.requestType.type : "xhr",
                x,
                w;
              if (
                ("GET" !== u.method || t === "xhr") &&
                u.requestType.options.async
              ) {
                s.call(u, v);
                return;
              }
              x = u._query.join("&");
              w = u._timeout;
              u._callback = v || noop;
              if (w && !u._timer) {
                u._timer = setTimeout(function() {
                  h.call(u);
                }, w);
              }
              if (x) {
                x = o.serializeObject(x);
                u.url += ~u.url.indexOf("?") ? "&" + x : "?" + x;
              }
              u.emit("request", u);
              if (!u.requestType.options.async) {
                l.call(u);
              } else {
                if (t === "jsonp") {
                  k.call(u);
                } else {
                  if (t === "beacon") {
                    j.call(u);
                  }
                }
              }
              return u;
            };
            return r;
          };
        };
        function l() {
          var p = a();
          if (p) {
            p.open("GET", this.url, false);
            p.send(null);
          }
          return this;
        }
        function k() {
          var q = this,
            u = new Date().getTime(),
            p = document.createElement("script"),
            t = document.getElementsByTagName("head")[0],
            v = "keenJSONPCallback",
            r = false;
          v += u;
          while (v in window) {
            v += "a";
          }
          window[v] = function(w) {
            if (r === true) {
              return;
            }
            r = true;
            d.call(q, w);
            s();
          };
          p.src = q.url + "&jsonp=" + v;
          t.appendChild(p);
          p.onreadystatechange = function() {
            if (r === false && q.readyState === "loaded") {
              r = true;
              c.call(q);
              s();
            }
          };
          p.onerror = function() {
            if (r === false) {
              r = true;
              c.call(q);
              s();
            }
          };
          function s() {
            window[v] = undefined;
            try {
              delete window[v];
            } catch (w) {}
            t.removeChild(p);
          }
        }
        function j() {
          var q = this,
            p = document.createElement("img"),
            r = false;
          p.onload = function() {
            r = true;
            if ("naturalHeight" in this) {
              if (this.naturalHeight + this.naturalWidth === 0) {
                this.onerror();
                return;
              }
            } else {
              if (this.width + this.height === 0) {
                this.onerror();
                return;
              }
            }
            d.call(q);
          };
          p.onerror = function() {
            r = true;
            c.call(q);
          };
          p.src = q.url + "&c=clv1";
        }
        function d(q) {
          var r = this.requestType.options["success"],
            p = "";
          n.call(this, r);
          if (q) {
            try {
              p = JSON.stringify(q);
            } catch (s) {}
          } else {
            p = r.responseText;
          }
          this.xhr.responseText = p;
          this.xhr.status = r.status;
          this.emit("end");
        }
        function c() {
          var p = this.requestType.options["error"];
          n.call(this, p);
          this.xhr.responseText = p.responseText;
          this.xhr.status = p.status;
          this.emit("end");
        }
        function h() {
          this.aborted = true;
          this.clearTimeout();
          this.emit("abort");
        }
        function n(p) {
          this.xhr = {
            getAllResponseHeaders: function() {
              return "";
            },
            getResponseHeader: function() {
              return "application/json";
            },
            responseText: p.responseText,
            status: p.status
          };
          return this;
        }
      },
      { "../utils/each": 29, "./get-xhr-object": 13, superagent: 5 }
    ],
    16: [
      function(d, f, c) {
        var b = "undefined" !== typeof window ? window : this;
        var h = b.Keen;
        var g = d("./utils/emitter-shim");
        function a(j) {
          this.configure(j || {});
          a.trigger("client", this);
        }
        a.debug = false;
        a.enabled = true;
        a.loaded = true;
        a.version = "3.3.0";
        g(a);
        g(a.prototype);
        a.prototype.configure = function(j) {
          var k = j || {};
          if (k.host) {
            k.host.replace(/.*?:\/\//g, "");
          }
          if (k.protocol && k.protocol === "auto") {
            k.protocol = location.protocol.replace(/:/g, "");
          }
          this.config = {
            projectId: k.projectId,
            writeKey: k.writeKey,
            readKey: k.readKey,
            masterKey: k.masterKey,
            requestType: k.requestType || "jsonp",
            host: k.host || "api.keen.io/3.0",
            protocol: k.protocol || "https",
            globalProperties: null
          };
          if (a.debug) {
            this.on("error", a.log);
          }
          this.trigger("ready");
        };
        a.prototype.projectId = function(j) {
          if (!arguments.length) {
            return this.config.projectId;
          }
          this.config.projectId = j ? String(j) : null;
          return this;
        };
        a.prototype.masterKey = function(j) {
          if (!arguments.length) {
            return this.config.masterKey;
          }
          this.config.masterKey = j ? String(j) : null;
          return this;
        };
        a.prototype.readKey = function(j) {
          if (!arguments.length) {
            return this.config.readKey;
          }
          this.config.readKey = j ? String(j) : null;
          return this;
        };
        a.prototype.writeKey = function(j) {
          if (!arguments.length) {
            return this.config.writeKey;
          }
          this.config.writeKey = j ? String(j) : null;
          return this;
        };
        a.prototype.url = function(j) {
          if (!this.projectId()) {
            this.trigger("error", "Client is missing projectId property");
            return;
          }
          return (
            this.config.protocol +
            "://" +
            this.config.host +
            "/projects/" +
            this.projectId() +
            j
          );
        };
        a.log = function(j) {
          if (a.debug && typeof console == "object") {
            console.log("[Keen IO]", j);
          }
        };
        a.noConflict = function() {
          b.Keen = h;
          return a;
        };
        a.ready = function(j) {
          if (a.loaded) {
            j();
          } else {
            a.once("ready", j);
          }
        };
        f.exports = a;
      },
      { "./utils/emitter-shim": 30 }
    ],
    17: [
      function(f, c, h) {
        var q = f("../utils/json-shim");
        var g = f("superagent");
        var j = f("../index");
        var k = f("../utils/base64"),
          n = f("../utils/each"),
          o = f("../helpers/get-context"),
          d = f("../helpers/get-query-string"),
          b = f("../helpers/get-url-max-length"),
          a = f("../helpers/get-xhr-object"),
          l = f("../helpers/superagent-request-types"),
          p = f("../helpers/superagent-handle-response");
        c.exports = function(y, B, C, u) {
          var D = this,
            w = this.url("/events/" + encodeURIComponent(y)),
            r = this.config.requestType,
            v = {},
            t = C,
            s,
            A;
          s = "boolean" === typeof u ? u : true;
          if (!j.enabled) {
            z.call(D, "Keen.enabled = false");
            return;
          }
          if (!D.projectId()) {
            z.call(D, "Missing projectId property");
            return;
          }
          if (!D.writeKey()) {
            z.call(D, "Missing writeKey property");
            return;
          }
          if (!y || typeof y !== "string") {
            z.call(D, "Collection name must be a string");
            return;
          }
          if (D.config.globalProperties) {
            v = D.config.globalProperties(y);
          }
          n(B, function(F, E) {
            v[E] = F;
          });
          if (!a() && "xhr" === r) {
            r = "jsonp";
          }
          if ("xhr" !== r || !s) {
            A = m.call(D, w, v);
          }
          if (A && o() === "browser") {
            g
              .get(A)
              .use(l(r, { async: s }))
              .end(x);
          } else {
            if (a() || o() === "server") {
              g
                .post(w)
                .set("Content-Type", "application/json")
                .set("Authorization", D.writeKey())
                .send(v)
                .end(x);
            } else {
              D.trigger(
                "error",
                "Request not sent: URL length exceeds current browser limit, and XHR (POST) is not supported."
              );
            }
          }
          function x(F, E) {
            p(F, E, t);
            t = C = null;
          }
          function z(F) {
            var E = "Event not recorded: " + F;
            D.trigger("error", E);
            if (t) {
              t.call(D, E, null);
              t = C = null;
            }
          }
          return;
        };
        function m(r, s) {
          r += d({
            api_key: this.writeKey(),
            data: k.encode(q.stringify(s)),
            modified: new Date().getTime()
          });
          return r.length < b() ? r : false;
        }
      },
      {
        "../helpers/get-context": 9,
        "../helpers/get-query-string": 10,
        "../helpers/get-url-max-length": 12,
        "../helpers/get-xhr-object": 13,
        "../helpers/superagent-handle-response": 14,
        "../helpers/superagent-request-types": 15,
        "../index": 16,
        "../utils/base64": 27,
        "../utils/each": 29,
        "../utils/json-shim": 32,
        superagent: 5
      }
    ],
    18: [
      function(c, b, f) {
        var g = c("../index");
        var d = c("superagent");
        var j = c("../utils/each"),
          k = c("../helpers/get-context"),
          a = c("../helpers/get-xhr-object"),
          h = c("../helpers/superagent-request-types"),
          l = c("../helpers/superagent-handle-response");
        b.exports = function(q, s) {
          var o = this,
            n = this.url("/events"),
            p = {},
            m = s;
          if (!g.enabled) {
            r.call(o, "Keen.enabled = false");
            return;
          }
          if (!o.projectId()) {
            r.call(o, "Missing projectId property");
            return;
          }
          if (!o.writeKey()) {
            r.call(o, "Missing writeKey property");
            return;
          }
          if (arguments.length > 2) {
            r.call(o, "Incorrect arguments provided to #addEvents method");
            return;
          }
          if (typeof q !== "object" || q instanceof Array) {
            r.call(o, "Request payload must be an object");
            return;
          }
          if (o.config.globalProperties) {
            j(q, function(t, u) {
              j(t, function(v, w) {
                var x = o.config.globalProperties(u);
                j(v, function(z, y) {
                  x[y] = z;
                });
                p[u].push(x);
              });
            });
          } else {
            p = q;
          }
          if (a() || k() === "server") {
            d
              .post(n)
              .set("Content-Type", "application/json")
              .set("Authorization", o.writeKey())
              .send(p)
              .end(function(u, t) {
                l(u, t, m);
                m = s = null;
              });
          } else {
            o.trigger(
              "error",
              "Events not recorded: XHR support is required for batch upload"
            );
          }
          function r(u) {
            var t = "Events not recorded: " + u;
            o.trigger("error", t);
            if (m) {
              m.call(o, t, null);
              m = s = null;
            }
          }
          return;
        };
      },
      {
        "../helpers/get-context": 9,
        "../helpers/get-xhr-object": 13,
        "../helpers/superagent-handle-response": 14,
        "../helpers/superagent-request-types": 15,
        "../index": 16,
        "../utils/each": 29,
        superagent: 5
      }
    ],
    19: [
      function(d, f, c) {
        var h = d("superagent");
        var b = d("../helpers/get-query-string"),
          g = d("../helpers/superagent-handle-response"),
          a = d("../helpers/superagent-request-types");
        f.exports = function(k, n, m, o) {
          var j = this.config.requestType,
            l = n || {};
          if (j === "beacon") {
            j = "jsonp";
          }
          l.api_key = l.api_key || m;
          h
            .get(k + b(l))
            .use(a(j))
            .end(function(q, p) {
              g(q, p, o);
              o = null;
            });
        };
      },
      {
        "../helpers/get-query-string": 10,
        "../helpers/superagent-handle-response": 14,
        "../helpers/superagent-request-types": 15,
        superagent: 5
      }
    ],
    20: [
      function(b, c, a) {
        var f = b("superagent");
        var d = b("../helpers/superagent-handle-response");
        c.exports = function(g, j, h, k) {
          f
            .post(g)
            .set("Content-Type", "application/json")
            .set("Authorization", h)
            .send(j || {})
            .end(function(m, l) {
              d(m, l, k);
              k = null;
            });
        };
      },
      { "../helpers/superagent-handle-response": 14, superagent: 5 }
    ],
    21: [
      function(b, d, a) {
        var c = b("../request");
        d.exports = function(j, k) {
          var g = [],
            f = k,
            h;
          if (j instanceof Array) {
            g = j;
          } else {
            g.push(j);
          }
          h = new c(this, g, f).refresh();
          f = k = null;
          return h;
        };
      },
      { "../request": 25 }
    ],
    22: [
      function(b, c, a) {
        c.exports = function(d) {
          if (d && typeof d == "function") {
            this.config.globalProperties = d;
          } else {
            this.trigger("error", "Invalid value for global properties: " + d);
          }
        };
      },
      {}
    ],
    23: [
      function(b, c, a) {
        var d = b("./addEvent");
        c.exports = function(l, f, o, m, n) {
          var p = l,
            k = p.currentTarget ? p.currentTarget : p.srcElement || p.target,
            g = m || 500,
            h = false,
            r = "",
            q,
            j;
          if (k.getAttribute !== void 0) {
            r = k.getAttribute("target");
          } else {
            if (k.target) {
              r = k.target;
            }
          }
          if ((r == "_blank" || r == "blank") && !p.metaKey) {
            j = window.open("about:blank");
            j.document.location = k.href;
          }
          if (k.nodeName === "A") {
            q = function() {
              if (!h && !p.metaKey && (r !== "_blank" && r !== "blank")) {
                h = true;
                window.location = k.href;
              }
            };
          } else {
            if (k.nodeName === "FORM") {
              q = function() {
                if (!h) {
                  h = true;
                  k.submit();
                }
              };
            } else {
              this.trigger(
                "error",
                "#trackExternalLink method not attached to an <a> or <form> DOM element"
              );
            }
          }
          if (n) {
            q = function() {
              if (!h) {
                h = true;
                n();
              }
            };
          }
          d.call(this, f, o, q);
          setTimeout(q, g);
          if (!p.metaKey) {
            return false;
          }
        };
      },
      { "./addEvent": 17 }
    ],
    24: [
      function(c, a, d) {
        var k = c("./utils/each"),
          h = c("./utils/extend"),
          g = c("./helpers/get-timezone-offset"),
          b = c("./helpers/get-query-string");
        var j = c("./utils/emitter-shim");
        function f() {
          this.configure.apply(this, arguments);
        }
        j(f.prototype);
        f.prototype.configure = function(l, m) {
          this.analysis = l;
          this.params = this.params || {};
          this.set(m);
          if (this.params.timezone === void 0) {
            this.params.timezone = g();
          }
          return this;
        };
        f.prototype.set = function(m) {
          var l = this;
          k(m, function(o, n) {
            var p = n,
              q = o;
            if (n.match(new RegExp("[A-Z]"))) {
              p = n.replace(/([A-Z])/g, function(r) {
                return "_" + r.toLowerCase();
              });
            }
            l.params[p] = q;
            if (q instanceof Array) {
              k(q, function(s, r) {
                if (s instanceof Array == false && typeof s === "object") {
                  k(s, function(u, t) {
                    if (t.match(new RegExp("[A-Z]"))) {
                      var v = t.replace(/([A-Z])/g, function(w) {
                        return "_" + w.toLowerCase();
                      });
                      delete l.params[p][r][t];
                      l.params[p][r][v] = u;
                    }
                  });
                }
              });
            }
          });
          return l;
        };
        f.prototype.get = function(m) {
          var l = m;
          if (l.match(new RegExp("[A-Z]"))) {
            l = l.replace(/([A-Z])/g, function(n) {
              return "_" + n.toLowerCase();
            });
          }
          if (this.params) {
            return this.params[l] || null;
          }
        };
        f.prototype.addFilter = function(n, l, m) {
          this.params.filters = this.params.filters || [];
          this.params.filters.push({
            property_name: n,
            operator: l,
            property_value: m
          });
          return this;
        };
        a.exports = f;
      },
      {
        "./helpers/get-query-string": 10,
        "./helpers/get-timezone-offset": 11,
        "./utils/each": 29,
        "./utils/emitter-shim": 30,
        "./utils/extend": 31
      }
    ],
    25: [
      function(c, b, d) {
        var l = c("./utils/each"),
          j = c("./utils/extend"),
          g = c("./utils/sendQuery"),
          h = c("./utils/sendSavedQuery");
        var f = c("./");
        var k = c("./utils/emitter-shim");
        function a(n, o, p) {
          var m = p;
          this.config = { timeout: 300 * 1000 };
          this.configure(n, o, m);
          m = p = null;
        }
        k(a.prototype);
        a.prototype.configure = function(n, o, p) {
          var m = p;
          j(this, { client: n, queries: o, data: {}, callback: m });
          m = p = null;
          return this;
        };
        a.prototype.timeout = function(m) {
          if (!arguments.length) {
            return this.config.timeout;
          }
          this.config.timeout = !isNaN(parseInt(m)) ? parseInt(m) : null;
          return this;
        };
        a.prototype.refresh = function() {
          var o = this,
            m = 0,
            n = [],
            q = false;
          var p = function(t, s, r) {
            if (q) {
              return;
            }
            if (t) {
              o.trigger("error", t);
              if (o.callback) {
                o.callback(t, null);
              }
              q = true;
              return;
            }
            n[r] = s;
            m++;
            if (m == o.queries.length && !q) {
              o.data = o.queries.length == 1 ? n[0] : n;
              o.trigger("complete", null, o.data);
              if (o.callback) {
                o.callback(null, o.data);
              }
            }
          };
          l(o.queries, function(u, s) {
            var r = function(x, w) {
              p(x, w, s);
            };
            if (u instanceof f.Query) {
              var v = "/queries/" + u.analysis;
              if (u.analysis === "saved") {
                h.call(o, v, u.params, r);
              } else {
                g.call(o, v, u.params, r);
              }
            } else {
              var t = {
                statusText: "Bad Request",
                responseText: {
                  message:
                    "Error: Query " +
                    (+s + 1) +
                    " of " +
                    o.queries.length +
                    " for project " +
                    o.client.projectId() +
                    " is not a valid request"
                }
              };
              o.trigger("error", t.responseText.message);
              if (o.callback) {
                o.callback(t.responseText.message, null);
              }
            }
          });
          return this;
        };
        b.exports = a;
      },
      {
        "./": 16,
        "./utils/each": 29,
        "./utils/emitter-shim": 30,
        "./utils/extend": 31,
        "./utils/sendQuery": 34,
        "./utils/sendSavedQuery": 35
      }
    ],
    26: [
      function(c, d, b) {
        var g = c("superagent");
        var a = c("./helpers/superagent-handle-response");
        function f() {
          var h = this;
          this.all = function(l) {
            var j = h.url("/queries/saved");
            g
              .get(j)
              .set("Content-Type", "application/json")
              .set("Authorization", h.masterKey())
              .end(k);
            function k(n, m) {
              a(n, m, l);
              l = null;
            }
          };
          this.get = function(l, m) {
            var j = h.url("/queries/saved/" + l);
            g
              .get(j)
              .set("Content-Type", "application/json")
              .set("Authorization", h.masterKey())
              .end(k);
            function k(o, n) {
              a(o, n, m);
              m = null;
            }
          };
          this.update = function(m, j, n) {
            var k = h.url("/queries/saved/" + m);
            g
              .put(k)
              .set("Content-Type", "application/json")
              .set("Authorization", h.masterKey())
              .send(j || {})
              .end(l);
            function l(p, o) {
              a(p, o, n);
              n = null;
            }
          };
          this.create = this.update;
          this.destroy = function(l, m) {
            var j = h.url("/queries/saved/" + l);
            g
              .del(j)
              .set("Content-Type", "application/json")
              .set("Authorization", h.masterKey())
              .end(k);
            function k(o, n) {
              a(o, n, m);
              m = null;
            }
          };
          return this;
        }
        d.exports = f;
      },
      { "./helpers/superagent-handle-response": 14, superagent: 5 }
    ],
    27: [
      function(b, c, a) {
        c.exports = {
          map:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
          encode: function(f) {
            var d = "",
              l = 0,
              h = this.map,
              k,
              j,
              g,
              s,
              r,
              q,
              p;
            f = this.utf8.encode(f);
            while (l < f.length) {
              k = f.charCodeAt(l++);
              j = f.charCodeAt(l++);
              g = f.charCodeAt(l++);
              s = k >> 2;
              r = ((k & 3) << 4) | (j >> 4);
              q = isNaN(j) ? 64 : ((j & 15) << 2) | (g >> 6);
              p = isNaN(j) || isNaN(g) ? 64 : g & 63;
              d = d + h.charAt(s) + h.charAt(r) + h.charAt(q) + h.charAt(p);
            }
            return d;
          },
          decode: function(f) {
            var d = "",
              p = 0,
              h = this.map,
              g = String.fromCharCode,
              t,
              s,
              r,
              q,
              l,
              k,
              j;
            f = f.replace(/[^A-Za-z0-9\+\/\=]/g, "");
            while (p < f.length) {
              t = h.indexOf(f.charAt(p++));
              s = h.indexOf(f.charAt(p++));
              r = h.indexOf(f.charAt(p++));
              q = h.indexOf(f.charAt(p++));
              l = (t << 2) | (s >> 4);
              k = ((s & 15) << 4) | (r >> 2);
              j = ((r & 3) << 6) | q;
              d = d + (g(l) + (r != 64 ? g(k) : "")) + (q != 64 ? g(j) : "");
            }
            return this.utf8.decode(d);
          },
          utf8: {
            encode: function(j) {
              var f = "",
                d = 0,
                h = String.fromCharCode,
                g;
              while (d < j.length) {
                g = j.charCodeAt(d++);
                f =
                  f +
                  (g < 128
                    ? h(g)
                    : g > 127 && g < 2048
                      ? h((g >> 6) | 192) + h((g & 63) | 128)
                      : h((g >> 12) | 224) +
                        h(((g >> 6) & 63) | 128) +
                        h((g & 63) | 128));
              }
              return f;
            },
            decode: function(k) {
              var g = "",
                f = 0,
                j = String.fromCharCode,
                d,
                h;
              while (f < k.length) {
                h = k.charCodeAt(f);
                g =
                  g +
                  (h < 128
                    ? [j(h), f++][0]
                    : h > 191 && h < 224
                      ? [
                          j(((h & 31) << 6) | ((d = k.charCodeAt(f + 1)) & 63)),
                          (f += 2)
                        ][0]
                      : [
                          j(
                            ((h & 15) << 12) |
                              (((d = k.charCodeAt(f + 1)) & 63) << 6) |
                              ((c3 = k.charCodeAt(f + 2)) & 63)
                          ),
                          (f += 3)
                        ][0]);
              }
              return g;
            }
          }
        };
      },
      {}
    ],
    28: [
      function(b, d, a) {
        var c = b("./json-shim");
        d.exports = function(f) {
          return c.parse(c.stringify(f));
        };
      },
      { "./json-shim": 32 }
    ],
    29: [
      function(b, c, a) {
        c.exports = function(g, d, f) {
          var h;
          if (!g) {
            return 0;
          }
          f = !f ? g : f;
          if (g instanceof Array) {
            for (h = 0; h < g.length; h++) {
              if (d.call(f, g[h], h, g) === false) {
                return 0;
              }
            }
          } else {
            for (h in g) {
              if (g.hasOwnProperty(h)) {
                if (d.call(f, g[h], h, g) === false) {
                  return 0;
                }
              }
            }
          }
          return 1;
        };
      },
      {}
    ],
    30: [
      function(b, c, a) {
        var d = b("component-emitter");
        d.prototype.trigger = d.prototype.emit;
        c.exports = d;
      },
      { "component-emitter": 1 }
    ],
    31: [
      function(b, c, a) {
        c.exports = function(f) {
          for (var d = 1; d < arguments.length; d++) {
            for (var g in arguments[d]) {
              f[g] = arguments[d][g];
            }
          }
          return f;
        };
      },
      {}
    ],
    32: [
      function(b, c, a) {
        c.exports =
          "undefined" !== typeof window && window.JSON
            ? window.JSON
            : b("json3");
      },
      { json3: 3 }
    ],
    33: [
      function(b, c, a) {
        function d(m) {
          var f = {},
            g,
            j = /\+/g,
            h = /([^&=]+)=?([^&]*)/g,
            l = function(n) {
              return decodeURIComponent(n.replace(j, " "));
            },
            k = m.split("?")[1];
          while (!!(g = h.exec(k))) {
            f[l(g[1])] = l(g[2]);
          }
          return f;
        }
        c.exports = d;
      },
      {}
    ],
    34: [
      function(c, d, b) {
        var g = c("superagent");
        var f = c("../helpers/get-context"),
          h = c("../helpers/get-xhr-object"),
          a = c("../helpers/superagent-handle-response");
        d.exports = function(l, m, n) {
          var j = this.client.url(l);
          if (!this.client.projectId()) {
            this.client.trigger(
              "error",
              "Query not sent: Missing projectId property"
            );
            return;
          }
          if (!this.client.readKey()) {
            this.client.trigger(
              "error",
              "Query not sent: Missing readKey property"
            );
            return;
          }
          if (h() || f() === "server") {
            g
              .post(j)
              .set("Content-Type", "application/json")
              .set("Authorization", this.client.readKey())
              .timeout(this.timeout())
              .send(m || {})
              .end(k);
          }
          function k(p, o) {
            a(p, o, n);
            n = null;
          }
          return;
        };
      },
      {
        "../helpers/get-context": 9,
        "../helpers/get-xhr-object": 13,
        "../helpers/superagent-handle-response": 14,
        superagent: 5
      }
    ],
    35: [
      function(f, g, d) {
        var c = f("../query");
        var h = f("superagent");
        var b = f("../helpers/superagent-handle-response");
        var a = f("./sendQuery");
        g.exports = function(l, m, o) {
          var j = this.client.url(l) + "/" + m.query_name + "/result";
          var n = this;
          h
            .get(j)
            .set("Content-Type", "application/json")
            .set("Authorization", n.client.masterKey())
            .timeout(this.timeout())
            .send(m || {})
            .end(k);
          function k(q, p) {
            b(q, p, o);
            o = null;
          }
          return;
        };
      },
      {
        "../helpers/superagent-handle-response": 14,
        "../query": 24,
        "./sendQuery": 34,
        superagent: 5
      }
    ],
    36: [
      function(g, c, j) {
        var n = g("../core/utils/clone"),
          p = g("../core/utils/each"),
          a = g("./utils/flatten"),
          h = g("./utils/parse");
        var o = g("../core/utils/emitter-shim");
        function b() {
          this.data = { input: {}, output: [["index"]] };
          this.meta = { schema: {}, method: undefined };
          if (arguments.length > 0) {
            this.parse.apply(this, arguments);
          }
        }
        b.defaults = { delimeter: " -> " };
        o(b);
        o(b.prototype);
        b.prototype.input = function(q) {
          if (!arguments.length) {
            return this["data"]["input"];
          }
          this["data"]["input"] = q ? n(q) : null;
          return this;
        };
        b.prototype.output = function(q) {
          if (!arguments.length) {
            return this["data"].output;
          }
          this["data"].output = q instanceof Array ? q : null;
          return this;
        };
        b.prototype.method = function(q) {
          if (!arguments.length) {
            return this.meta.method;
          }
          this.meta.method = q ? String(q) : null;
          return this;
        };
        b.prototype.schema = function(q) {
          if (!arguments.length) {
            return this.meta.schema;
          }
          this.meta.schema = q ? q : null;
          return this;
        };
        b.prototype.parse = function(r, s) {
          var q;
          if (r) {
            this.input(r);
          }
          if (s) {
            this.schema(s);
          }
          this.output([[]]);
          if (this.meta.schema.select) {
            this.method("select");
            q = m({ records: "", select: true }, this.schema());
            f.call(this, d(q));
          } else {
            if (this.meta.schema.unpack) {
              this.method("unpack");
              q = m(
                {
                  records: "",
                  unpack: { index: false, value: false, label: false }
                },
                this.schema()
              );
              l.call(this, d(q));
            }
          }
          return this;
        };
        function f(s) {
          var t = this,
            u = s || {},
            v = [],
            w = [];
          var r, q;
          if (u.records === "" || !u.records) {
            r = [t.input()];
          } else {
            q = u.records.split(b.defaults.delimeter);
            r = h.apply(t, [t.input()].concat(q))[0];
          }
          p(u.select, function(y) {
            v.push(y.path.split(b.defaults.delimeter));
          });
          if (v.length == 0) {
            p(r, function(y, z) {
              var B = a(y);
              for (var A in B) {
                if (B.hasOwnProperty(A) && w.indexOf(A) == -1) {
                  w.push(A);
                  v.push([A]);
                }
              }
            });
          }
          var x = [[]];
          p(v, function(z, y) {
            if (v.length == 1) {
              x[0].push("label", "value");
            } else {
              x[0].push(z.join("."));
            }
          });
          p(r, function(y, z) {
            var A = a(y);
            if (v.length == 1) {
              x.push([v.join("."), A[v.join(".")]]);
            } else {
              x.push([]);
              p(v, function(C, B) {
                var D = C.join(".");
                x[z + 1].push(A[D]);
              });
            }
          });
          t.output(x);
          t.format(u.select);
          return t;
        }
        function l(z) {
          var y = this,
            u = [];
          var s = z.unpack.value
              ? z.unpack.value.path.split(b.defaults.delimeter)
              : false,
            r = z.unpack.label
              ? z.unpack.label.path.split(b.defaults.delimeter)
              : false,
            t = z.unpack.index
              ? z.unpack.index.path.split(b.defaults.delimeter)
              : false;
          var v = s[s.length - 1] !== "" ? s[s.length - 1] : "Value",
            q = r[r.length - 1] !== "" ? r[r.length - 1] : "Label",
            x = t[t.length - 1] !== "" ? t[t.length - 1] : "Index";
          var w = (function() {
            var A;
            if (z.records == "") {
              A = [y.input()];
            } else {
              A = h.apply(
                y,
                [y.input()].concat(z.records.split(b.defaults.delimeter))
              );
            }
            return A[0];
          })();
          if (w instanceof Array == false) {
            w = [w];
          }
          p(w, function(A, B) {
            var C = r ? h.apply(y, [A].concat(r)) : [];
            if (C) {
              u = C;
            }
          });
          p(w, function(B, C) {
            var D = s ? h.apply(y, [B].concat(s)) : false,
              A = t ? h.apply(y, [B].concat(t)) : false;
            if (A) {
              p(A, function() {
                y.data.output.push([]);
              });
            } else {
              y.data.output.push([]);
            }
            if (A) {
              if (C == 0) {
                y.data.output[0].push(x);
                if (u.length > 0) {
                  p(u, function(F, E) {
                    y.data.output[0].push(F);
                  });
                } else {
                  y.data.output[0].push(v);
                }
              }
              if (w.length < y.data.output.length - 1) {
                if (C == 0) {
                  p(y.data.output, function(F, E) {
                    if (E > 0) {
                      y.data.output[E].push(A[E - 1]);
                    }
                  });
                }
              } else {
                y.data.output[C + 1].push(A[0]);
              }
            }
            if (!A && u.length > 0) {
              if (C == 0) {
                y.data.output[0].push(q);
                y.data.output[0].push(v);
              }
              y.data.output[C + 1].push(u[0]);
            }
            if (!A && u.length == 0) {
              y.data.output[0].push("");
            }
            if (D) {
              if (w.length < y.data.output.length - 1) {
                if (C == 0) {
                  p(y.data.output, function(F, E) {
                    if (E > 0) {
                      y.data.output[E].push(D[E - 1]);
                    }
                  });
                }
              } else {
                p(D, function(E) {
                  y.data.output[C + 1].push(E);
                });
              }
            } else {
              p(y.data.output[0], function(E, F) {
                var G = A ? 0 : -1;
                if (F > G) {
                  y.data.output[C + 1].push(null);
                }
              });
            }
          });
          y.format(z.unpack);
          return this;
        }
        function d(q) {
          p(q.unpack, function(t, s, r) {
            if (t && k(t, "string")) {
              q.unpack[s] = { path: q.unpack[s] };
            }
          });
          return q;
        }
        function k(r, q) {
          r = typeof r;
          if (!q) {
            return r != "undefined";
          }
          return r == q;
        }
        function m(r, q) {
          p(q, function(s, t) {
            if (k(r[t], "object") && k(s, "object")) {
              r[t] = m(r[t], s);
            } else {
              if (s !== null) {
                r[t] = s;
              }
            }
          });
          return r;
        }
        c.exports = b;
      },
      {
        "../core/utils/clone": 28,
        "../core/utils/each": 29,
        "../core/utils/emitter-shim": 30,
        "./utils/flatten": 49,
        "./utils/parse": 50
      }
    ],
    37: [
      function(b, c, a) {
        var f = b("../core/utils/extend"),
          d = b("./dataset");
        f(d.prototype, b("./lib/append"));
        f(d.prototype, b("./lib/delete"));
        f(d.prototype, b("./lib/filter"));
        f(d.prototype, b("./lib/insert"));
        f(d.prototype, b("./lib/select"));
        f(d.prototype, b("./lib/set"));
        f(d.prototype, b("./lib/sort"));
        f(d.prototype, b("./lib/update"));
        f(d.prototype, b("./lib/analyses"));
        f(d.prototype, { format: b("./lib/format") });
        c.exports = d;
      },
      {
        "../core/utils/extend": 31,
        "./dataset": 36,
        "./lib/analyses": 38,
        "./lib/append": 39,
        "./lib/delete": 40,
        "./lib/filter": 41,
        "./lib/format": 42,
        "./lib/insert": 43,
        "./lib/select": 44,
        "./lib/set": 45,
        "./lib/sort": 46,
        "./lib/update": 47
      }
    ],
    38: [
      function(d, f, c) {
        var g = d("../../core/utils/each"),
          a = ["Average", "Maximum", "Minimum", "Sum"],
          b = {};
        b.average = function(h, n, j) {
          var m = h.slice(n || 0, j ? j + 1 : h.length),
            k = 0,
            l = null;
          g(m, function(p, o) {
            if (typeof p === "number" && !isNaN(parseFloat(p))) {
              k += parseFloat(p);
            }
          });
          return k / m.length;
        };
        b.maximum = function(h, m, j) {
          var l = h.slice(m || 0, j ? j + 1 : h.length),
            k = [];
          g(l, function(o, n) {
            if (typeof o === "number" && !isNaN(parseFloat(o))) {
              k.push(parseFloat(o));
            }
          });
          return Math.max.apply(Math, k);
        };
        b.minimum = function(h, m, j) {
          var l = h.slice(m || 0, j ? j + 1 : h.length),
            k = [];
          g(l, function(o, n) {
            if (typeof o === "number" && !isNaN(parseFloat(o))) {
              k.push(parseFloat(o));
            }
          });
          return Math.min.apply(Math, k);
        };
        b.sum = function(h, m, j) {
          var l = h.slice(m || 0, j ? j + 1 : h.length),
            k = 0;
          g(l, function(o, n) {
            if (typeof o === "number" && !isNaN(parseFloat(o))) {
              k += parseFloat(o);
            }
          });
          return k;
        };
        g(a, function(h, j) {
          b["getColumn" + h] = b["getRow" + h] = function(k) {
            return this[h.toLowerCase()](k, 1);
          };
        });
        b.getColumnLabel = b.getRowIndex = function(h) {
          return h[0];
        };
        f.exports = b;
      },
      { "../../core/utils/each": 29 }
    ],
    39: [
      function(d, f, c) {
        var h = d("../../core/utils/each");
        var b = d("../utils/create-null-list");
        f.exports = { appendColumn: g, appendRow: a };
        function g(n, k) {
          var j = this,
            m = Array.prototype.slice.call(arguments, 2),
            l = n !== undefined ? n : null;
          if (typeof k === "function") {
            j.data.output[0].push(l);
            h(j.output(), function(q, p) {
              var o;
              if (p > 0) {
                o = k.call(j, q, p);
                if (typeof o === "undefined") {
                  o = null;
                }
                j.data.output[p].push(o);
              }
            });
          } else {
            if (!k || k instanceof Array) {
              k = k || [];
              if (k.length <= j.output().length - 1) {
                k = k.concat(b(j.output().length - 1 - k.length));
              } else {
                h(k, function(p, o) {
                  if (j.data.output.length - 1 < k.length) {
                    a.call(j, String(j.data.output.length));
                  }
                });
              }
              j.data.output[0].push(l);
              h(k, function(p, o) {
                j.data.output[o + 1][j.data.output[0].length - 1] = p;
              });
            }
          }
          return j;
        }
        function a(o, k) {
          var j = this,
            n = Array.prototype.slice.call(arguments, 2),
            m = o !== undefined ? o : null,
            l = [];
          l.push(m);
          if (typeof k === "function") {
            h(j.data.output[0], function(r, s) {
              var q, p;
              if (s > 0) {
                q = j.selectColumn(s);
                p = k.call(j, q, s);
                if (typeof p === "undefined") {
                  p = null;
                }
                l.push(p);
              }
            });
            j.data.output.push(l);
          } else {
            if (!k || k instanceof Array) {
              k = k || [];
              if (k.length <= j.data.output[0].length - 1) {
                k = k.concat(b(j.data.output[0].length - 1 - k.length));
              } else {
                h(k, function(q, p) {
                  if (j.data.output[0].length - 1 < k.length) {
                    g.call(j, String(j.data.output[0].length));
                  }
                });
              }
              j.data.output.push(l.concat(k));
            }
          }
          return j;
        }
      },
      { "../../core/utils/each": 29, "../utils/create-null-list": 48 }
    ],
    40: [
      function(d, f, c) {
        var g = d("../../core/utils/each");
        f.exports = { deleteColumn: a, deleteRow: b };
        function a(k) {
          var h = this,
            j = typeof k === "number" ? k : this.data.output[0].indexOf(k);
          if (j > -1) {
            g(h.data.output, function(m, l) {
              h.data.output[l].splice(j, 1);
            });
          }
          return h;
        }
        function b(j) {
          var h = typeof j === "number" ? j : this.selectColumn(0).indexOf(j);
          if (h > -1) {
            this.data.output.splice(h, 1);
          }
          return this;
        }
      },
      { "../../core/utils/each": 29 }
    ],
    41: [
      function(c, d, b) {
        var f = c("../../core/utils/each");
        d.exports = { filterColumns: a, filterRows: g };
        function a(j) {
          var h = this,
            k = new Array();
          f(h.data.output, function(m, l) {
            k.push([]);
          });
          f(h.data.output[0], function(l, m) {
            var n = h.selectColumn(m);
            if (m == 0 || j.call(h, n, m)) {
              f(n, function(o, p) {
                k[p].push(o);
              });
            }
          });
          h.output(k);
          return h;
        }
        function g(j) {
          var h = this,
            k = [];
          f(h.output(), function(m, l) {
            if (l == 0 || j.call(h, m, l)) {
              k.push(m);
            }
          });
          h.output(k);
          return h;
        }
      },
      { "../../core/utils/each": 29 }
    ],
    42: [
      function(c, d, b) {
        var f = c("../../core/utils/each");
        d.exports = function(h) {
          var g = this;
          if (this.method() === "select") {
            f(g.output(), function(k, j) {
              if (j == 0) {
                f(k, function(l, m) {
                  if (h[m] && h[m].label) {
                    g.data.output[j][m] = h[m].label;
                  }
                });
              } else {
                f(k, function(l, m) {
                  g.data.output[j][m] = a(g.data.output[j][m], h[m]);
                });
              }
            });
          }
          if (this.method() === "unpack") {
            if (h.index) {
              f(g.output(), function(k, j) {
                if (j == 0) {
                  if (h.index.label) {
                    g.data.output[j][0] = h.index.label;
                  }
                } else {
                  g.data.output[j][0] = a(g.data.output[j][0], h.index);
                }
              });
            }
            if (h.label) {
              if (h.index) {
                f(g.output(), function(k, j) {
                  f(k, function(l, m) {
                    if (j == 0 && m > 0) {
                      g.data.output[j][m] = a(g.data.output[j][m], h.label);
                    }
                  });
                });
              } else {
                f(g.output(), function(k, j) {
                  if (j > 0) {
                    g.data.output[j][0] = a(g.data.output[j][0], h.label);
                  }
                });
              }
            }
            if (h.value) {
              if (h.index) {
                f(g.output(), function(k, j) {
                  f(k, function(l, m) {
                    if (j > 0 && m > 0) {
                      g.data.output[j][m] = a(g.data.output[j][m], h.value);
                    }
                  });
                });
              } else {
                f(g.output(), function(k, j) {
                  f(k, function(l, m) {
                    if (j > 0) {
                      g.data.output[j][m] = a(g.data.output[j][m], h.value);
                    }
                  });
                });
              }
            }
          }
          return g;
        };
        function a(k, j) {
          var g = k,
            h = j || {};
          if (h.replace) {
            f(h.replace, function(m, l) {
              if (
                g == l ||
                String(g) == String(l) ||
                parseFloat(g) == parseFloat(l)
              ) {
                g = m;
              }
            });
          }
          if (h.type && h.type == "date") {
            if (h.format && moment && moment(k).isValid()) {
              g = moment(g).format(h.format);
            } else {
              g = new Date(g);
            }
          }
          if (h.type && h.type == "string") {
            g = String(g);
          }
          if (h.type && h.type == "number" && !isNaN(parseFloat(g))) {
            g = parseFloat(g);
          }
          return g;
        }
      },
      { "../../core/utils/each": 29 }
    ],
    43: [
      function(f, b, g) {
        var j = f("../../core/utils/each");
        var h = f("../utils/create-null-list");
        var c = f("./append");
        var l = c.appendRow,
          d = c.appendColumn;
        b.exports = { insertColumn: a, insertRow: k };
        function a(p, q, n) {
          var m = this,
            o;
          o = q !== undefined ? q : null;
          if (typeof n === "function") {
            m.data.output[0].splice(p, 0, o);
            j(m.output(), function(t, s) {
              var r;
              if (s > 0) {
                r = n.call(m, t, s);
                if (typeof r === "undefined") {
                  r = null;
                }
                m.data.output[s].splice(p, 0, r);
              }
            });
          } else {
            if (!n || n instanceof Array) {
              n = n || [];
              if (n.length <= m.output().length - 1) {
                n = n.concat(h(m.output().length - 1 - n.length));
              } else {
                j(n, function(s, r) {
                  if (m.data.output.length - 1 < n.length) {
                    l.call(m, String(m.data.output.length));
                  }
                });
              }
              m.data.output[0].splice(p, 0, o);
              j(n, function(s, r) {
                m.data.output[r + 1].splice(p, 0, s);
              });
            }
          }
          return m;
        }
        function k(q, r, n) {
          var m = this,
            p,
            o = [];
          p = r !== undefined ? r : null;
          o.push(p);
          if (typeof n === "function") {
            j(m.output()[0], function(u, v) {
              var t, s;
              if (v > 0) {
                t = m.selectColumn(v);
                s = n.call(m, t, v);
                if (typeof s === "undefined") {
                  s = null;
                }
                o.push(s);
              }
            });
            m.data.output.splice(q, 0, o);
          } else {
            if (!n || n instanceof Array) {
              n = n || [];
              if (n.length <= m.data.output[0].length - 1) {
                n = n.concat(h(m.data.output[0].length - 1 - n.length));
              } else {
                j(n, function(t, s) {
                  if (m.data.output[0].length - 1 < n.length) {
                    d.call(m, String(m.data.output[0].length));
                  }
                });
              }
              m.data.output.splice(q, 0, o.concat(n));
            }
          }
          return m;
        }
      },
      {
        "../../core/utils/each": 29,
        "../utils/create-null-list": 48,
        "./append": 39
      }
    ],
    44: [
      function(d, f, c) {
        var g = d("../../core/utils/each");
        f.exports = { selectColumn: b, selectRow: a };
        function b(k) {
          var h = new Array(),
            j = typeof k === "number" ? k : this.data.output[0].indexOf(k);
          if (j > -1 && "undefined" !== typeof this.data.output[0][j]) {
            g(this.data.output, function(m, l) {
              h.push(m[j]);
            });
          }
          return h;
        }
        function a(k) {
          var h = new Array(),
            j = typeof k === "number" ? k : this.selectColumn(0).indexOf(k);
          if (j > -1 && "undefined" !== typeof this.data.output[j]) {
            h = this.data.output[j];
          }
          return h;
        }
      },
      { "../../core/utils/each": 29 }
    ],
    45: [
      function(d, f, c) {
        var g = d("../../core/utils/each");
        var b = d("./append");
        var a = d("./select");
        f.exports = { set: h };
        function h(n, m) {
          if (arguments.length < 2 || n.length < 2) {
            throw Error("Incorrect arguments provided for #set method");
          }
          var j =
              "number" === typeof n[0]
                ? n[0]
                : this.data.output[0].indexOf(n[0]),
            o =
              "number" === typeof n[1]
                ? n[1]
                : a.selectColumn.call(this, 0).indexOf(n[1]);
          var l = a.selectColumn.call(this, n[0]),
            k = a.selectRow.call(this, n[1]);
          if (l.length < 1) {
            b.appendColumn.call(this, n[0]);
            j = this.data.output[0].length - 1;
          }
          if (k.length < 1) {
            b.appendRow.call(this, n[1]);
            o = this.data.output.length - 1;
          }
          this.data.output[o][j] = m;
          return this;
        }
      },
      { "../../core/utils/each": 29, "./append": 39, "./select": 44 }
    ],
    46: [
      function(d, f, c) {
        var g = d("../../core/utils/each");
        f.exports = { sortColumns: b, sortRows: a };
        function b(n, j) {
          var h = this,
            k = this.output()[0].slice(1),
            m = [],
            o = [],
            l = j || this.getColumnLabel;
          g(k, function(p, q) {
            m.push(h.selectColumn(q + 1).slice(0));
          });
          m.sort(function(q, p) {
            var r = l.call(h, q) > l.call(h, p);
            if (r) {
              return n === "asc" ? 1 : -1;
            } else {
              if (!r) {
                return n === "asc" ? -1 : 1;
              } else {
                return 0;
              }
            }
          });
          g(m, function(p, q) {
            h.deleteColumn(q + 1).insertColumn(q + 1, p[0], p.slice(1));
          });
          return h;
        }
        function a(n, k) {
          var j = this,
            l = this.output().slice(0, 1),
            h = this.output().slice(1),
            m = k || this.getRowIndex;
          h.sort(function(p, o) {
            var q = m.call(j, p) > m.call(j, o);
            if (q) {
              return n === "asc" ? 1 : -1;
            } else {
              if (!q) {
                return n === "asc" ? -1 : 1;
              } else {
                return 0;
              }
            }
          });
          j.output(l.concat(h));
          return j;
        }
      },
      { "../../core/utils/each": 29 }
    ],
    47: [
      function(f, a, g) {
        var k = f("../../core/utils/each");
        var h = f("../utils/create-null-list");
        var b = f("./append");
        var l = b.appendRow,
          d = b.appendColumn;
        a.exports = { updateColumn: j, updateRow: c };
        function j(p, n) {
          var m = this,
            o = typeof p === "number" ? p : this.data.output[0].indexOf(p);
          if (o > -1) {
            if (typeof n === "function") {
              k(m.output(), function(s, r) {
                var q;
                if (r > 0) {
                  q = n.call(m, s[o], r, s);
                  if (typeof q !== "undefined") {
                    m.data.output[r][o] = q;
                  }
                }
              });
            } else {
              if (!n || n instanceof Array) {
                n = n || [];
                if (n.length <= m.output().length - 1) {
                  n = n.concat(h(m.output().length - 1 - n.length));
                } else {
                  k(n, function(r, q) {
                    if (m.data.output.length - 1 < n.length) {
                      l.call(m, String(m.data.output.length));
                    }
                  });
                }
                k(n, function(r, q) {
                  m.data.output[q + 1][o] = r;
                });
              }
            }
          }
          return m;
        }
        function c(p, n) {
          var m = this,
            o = typeof p === "number" ? p : this.selectColumn(0).indexOf(p);
          if (o > -1) {
            if (typeof n === "function") {
              k(m.output()[o], function(t, s) {
                var r = m.selectColumn(s),
                  q = n.call(m, t, s, r);
                if (typeof q !== "undefined") {
                  m.data.output[o][s] = q;
                }
              });
            } else {
              if (!n || n instanceof Array) {
                n = n || [];
                if (n.length <= m.data.output[0].length - 1) {
                  n = n.concat(h(m.data.output[0].length - 1 - n.length));
                } else {
                  k(n, function(r, q) {
                    if (m.data.output[0].length - 1 < n.length) {
                      d.call(m, String(m.data.output[0].length));
                    }
                  });
                }
                k(n, function(r, q) {
                  m.data.output[o][q + 1] = r;
                });
              }
            }
          }
          return m;
        }
      },
      {
        "../../core/utils/each": 29,
        "../utils/create-null-list": 48,
        "./append": 39
      }
    ],
    48: [
      function(b, c, a) {
        c.exports = function(d) {
          var f = new Array();
          for (i = 0; i < d; i++) {
            f.push(null);
          }
          return f;
        };
      },
      {}
    ],
    49: [
      function(b, c, a) {
        c.exports = d;
        function d(g) {
          var k = {};
          for (var h in g) {
            if (!g.hasOwnProperty(h)) {
              continue;
            }
            if (typeof g[h] == "object" && g[h] !== null) {
              var j = d(g[h]);
              for (var f in j) {
                if (!j.hasOwnProperty(f)) {
                  continue;
                }
                k[h + "." + f] = j[f];
              }
            } else {
              k[h] = g[h];
            }
          }
          return k;
        }
      },
      {}
    ],
    50: [
      function(b, c, a) {
        var d = b("../../core/utils/each");
        c.exports = function() {
          var f = [];
          var g = function() {
            var h = arguments[0];
            var j = Array.prototype.slice.call(arguments, 1);
            var k = j.pop();
            if (j.length === 0) {
              if (h instanceof Array) {
                j = h;
              } else {
                if (typeof h === "object") {
                  j.push(h);
                }
              }
            }
            d(j, function(l) {
              if (k == "") {
                if (typeof l == "number" || l == null) {
                  return f.push(l);
                }
              }
              if (l[k] || l[k] === 0 || l[k] !== void 0) {
                if (l[k] === null) {
                  return f.push(null);
                } else {
                  return f.push(l[k]);
                }
              } else {
                if (h[l]) {
                  if (h[l] instanceof Array) {
                    d(h[l], function(p, o) {
                      var m = [h[l]]
                        .concat(h[l][o])
                        .concat(j.slice(1))
                        .concat(k);
                      return g.apply(this, m);
                    });
                  } else {
                    if (h[l][k]) {
                      return f.push(h[l][k]);
                    } else {
                      return g.apply(
                        this,
                        [h[l]].concat(j.splice(1)).concat(k)
                      );
                    }
                  }
                } else {
                  if (
                    typeof h === "object" &&
                    h instanceof Array === false &&
                    !h[k]
                  ) {
                    throw new Error("Target property does not exist", k);
                  } else {
                    return g.apply(this, [l].concat(j.splice(1)).concat(k));
                  }
                }
              }
              return;
            });
            if (f.length > 0) {
              return f;
            }
          };
          return g.apply(this, arguments);
        };
      },
      { "../../core/utils/each": 29 }
    ],
    51: [
      function(b, c, a) {
        /*!
 * ----------------------
 * C3.js Adapter
 * ----------------------
 */
        var f = b("../dataviz"),
          d = b("../../core/utils/each"),
          g = b("../../core/utils/extend");
        c.exports = function() {
          var j = {
            singular: ["gauge"],
            categorical: ["donut", "pie"],
            "cat-interval": [
              "area-step",
              "step",
              "bar",
              "area",
              "area-spline",
              "spline",
              "line"
            ],
            "cat-ordinal": [
              "bar",
              "area",
              "area-spline",
              "spline",
              "line",
              "step",
              "area-step"
            ],
            chronological: [
              "area",
              "area-spline",
              "spline",
              "line",
              "bar",
              "step",
              "area-step"
            ],
            "cat-chronological": [
              "line",
              "spline",
              "area",
              "area-spline",
              "bar",
              "step",
              "area-step"
            ]
          };
          var k = {};
          d(
            [
              "gauge",
              "donut",
              "pie",
              "bar",
              "area",
              "area-spline",
              "spline",
              "line",
              "step",
              "area-step"
            ],
            function(n, m) {
              k[n] = {
                render: function() {
                  var o = h.call(this, n);
                  this.view._artifacts.c3 = c3.generate(o);
                  this.update();
                },
                update: function() {
                  var o = this,
                    p = [];
                  if (n === "gauge") {
                    o.view._artifacts.c3.load({
                      columns: [[o.title(), o.data()[1][1]]]
                    });
                  } else {
                    if (n === "pie" || n === "donut") {
                      o.view._artifacts.c3.load({
                        columns: o.dataset.data.output.slice(1)
                      });
                    } else {
                      if (this.dataType().indexOf("chron") > -1) {
                        p.push(o.dataset.selectColumn(0));
                        p[0][0] = "x";
                      }
                      d(o.data()[0], function(r, q) {
                        if (q > 0) {
                          p.push(o.dataset.selectColumn(q));
                        }
                      });
                      if (o.stacked()) {
                        o.view._artifacts.c3.groups([o.labels()]);
                      }
                      o.view._artifacts.c3.load({ columns: p });
                    }
                  }
                },
                destroy: function() {
                  l.call(this);
                }
              };
            }
          );
          function h(n) {
            var m = {
              axis: {},
              bindto: this.el(),
              data: { columns: [] },
              color: { pattern: this.colors() },
              size: { height: this.height(), width: this.width() }
            };
            m.data["type"] = n;
            if (n === "gauge") {
            } else {
              if (n === "pie" || n === "donut") {
                m[n] = { title: this.title() };
              } else {
                if (this.dataType().indexOf("chron") > -1) {
                  m.data["x"] = "x";
                  m.axis["x"] = {
                    type: "timeseries",
                    tick: { format: "%Y-%m-%d" }
                  };
                } else {
                  if (this.dataType() === "cat-ordinal") {
                    m.axis["x"] = {
                      type: "category",
                      categories: this.labels()
                    };
                  }
                }
                if (this.title()) {
                  m.axis["y"] = { label: this.title() };
                }
              }
            }
            return g(m, this.chartOptions());
          }
          function l() {
            if (this.view._artifacts.c3) {
              this.view._artifacts.c3.destroy();
              this.view._artifacts.c3 = null;
            }
          }
          f.register("c3", k, { capabilities: j });
        };
      },
      {
        "../../core/utils/each": 29,
        "../../core/utils/extend": 31,
        "../dataviz": 55
      }
    ],
    52: [
      function(b, c, a) {
        /*!
 * ----------------------
 * Chart.js Adapter
 * ----------------------
 */
        var f = b("../dataviz"),
          d = b("../../core/utils/each"),
          g = b("../../core/utils/extend");
        c.exports = function() {
          if (typeof Chart !== "undefined") {
            Chart.defaults.global.responsive = true;
          }
          var r = {
            categorical: ["doughnut", "pie", "polar-area", "radar"],
            "cat-interval": ["bar", "line"],
            "cat-ordinal": ["bar", "line"],
            chronological: ["line", "bar"],
            "cat-chronological": ["line", "bar"]
          };
          var p = {
            radar: "Radar",
            "polar-area": "PolarArea",
            pie: "Pie",
            doughnut: "Doughnut",
            line: "Line",
            bar: "Bar"
          };
          var n = {
            doughnut: q,
            pie: q,
            "polar-area": q,
            radar: o,
            line: o,
            bar: o
          };
          function q() {
            var v = this,
              u = [];
            d(v.dataset.selectColumn(0).slice(1), function(w, x) {
              u.push({
                value: v.dataset.selectColumn(1).slice(1)[x],
                color: v.colors()[+x],
                hightlight: v.colors()[+x + 9],
                label: w
              });
            });
            return u;
          }
          function o() {
            var v = this,
              w,
              u = { labels: [], datasets: [] };
            w = this.dataset.selectColumn(0).slice(1);
            d(w, function(x, y) {
              if (x instanceof Date) {
                u.labels.push(
                  x.getMonth() + 1 + "-" + x.getDate() + "-" + x.getFullYear()
                );
              } else {
                u.labels.push(x);
              }
            });
            d(v.dataset.selectRow(0).slice(1), function(x, y) {
              var z = {
                r: s(v.colors()[y]),
                g: k(v.colors()[y]),
                b: m(v.colors()[y])
              };
              u.datasets.push({
                label: x,
                fillColor: "rgba(" + z.r + "," + z.g + "," + z.b + ",0.2)",
                strokeColor: "rgba(" + z.r + "," + z.g + "," + z.b + ",1)",
                pointColor: "rgba(" + z.r + "," + z.g + "," + z.b + ",1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke:
                  "rgba(" + z.r + "," + z.g + "," + z.b + ",1)",
                data: v.dataset.selectColumn(+y + 1).slice(1)
              });
            });
            return u;
          }
          var l = {};
          d(["doughnut", "pie", "polar-area", "radar", "bar", "line"], function(
            v,
            u
          ) {
            l[v] = {
              initialize: function() {
                if (this.el().nodeName.toLowerCase() !== "canvas") {
                  var w = document.createElement("canvas");
                  this.el().innerHTML = "";
                  this.el().appendChild(w);
                  this.view._artifacts.ctx = w.getContext("2d");
                } else {
                  this.view._artifacts.ctx = this.el().getContext("2d");
                }
                if (this.height()) {
                  this.view._artifacts.ctx.canvas.height = this.height();
                  this.view._artifacts.ctx.canvas.style.height = String(
                    this.height() + "px"
                  );
                }
                if (this.width()) {
                  this.view._artifacts.ctx.canvas.width = this.width();
                  this.view._artifacts.ctx.canvas.style.width = String(
                    this.width() + "px"
                  );
                }
                return this;
              },
              render: function() {
                if (h(this.dataset)) {
                  this.error("No results to display");
                  return;
                }
                var y = p[v],
                  w = g({}, this.chartOptions()),
                  x = n[v].call(this);
                if (this.view._artifacts.chartjs) {
                  this.view._artifacts.chartjs.destroy();
                }
                this.view._artifacts.chartjs = new Chart(
                  this.view._artifacts.ctx
                )[y](x, w);
                return this;
              },
              destroy: function() {
                t.call(this);
              }
            };
          });
          function t() {
            if (this.view._artifacts.chartjs) {
              this.view._artifacts.chartjs.destroy();
              this.view._artifacts.chartjs = null;
            }
          }
          function h(v) {
            var u = v.output().reduce(function(x, w) {
              return x.concat(w);
            });
            return u.length === 0;
          }
          function s(u) {
            return parseInt(j(u).substring(0, 2), 16);
          }
          function k(u) {
            return parseInt(j(u).substring(2, 4), 16);
          }
          function m(u) {
            return parseInt(j(u).substring(4, 6), 16);
          }
          function j(u) {
            return u.charAt(0) == "#" ? u.substring(1, 7) : u;
          }
          f.register("chartjs", l, { capabilities: r });
        };
      },
      {
        "../../core/utils/each": 29,
        "../../core/utils/extend": 31,
        "../dataviz": 55
      }
    ],
    53: [
      function(c, d, b) {
        /*!
 * ----------------------
 * Google Charts Adapter
 * ----------------------
 */
        var g = c("../dataviz"),
          f = c("../../core/utils/each"),
          h = c("../../core/utils/extend"),
          a = c("../../core");
        d.exports = function() {
          a.loaded = false;
          var j = {
            "Data column(s) for axis #0 cannot be of type string":
              "No results to visualize"
          };
          var l = [
            "AreaChart",
            "BarChart",
            "ColumnChart",
            "LineChart",
            "PieChart",
            "Table"
          ];
          var o = {};
          var n = {
            categorical: ["piechart", "barchart", "columnchart", "table"],
            "cat-interval": ["columnchart", "barchart", "table"],
            "cat-ordinal": [
              "barchart",
              "columnchart",
              "areachart",
              "linechart",
              "table"
            ],
            chronological: ["areachart", "linechart", "table"],
            "cat-chronological": [
              "linechart",
              "columnchart",
              "barchart",
              "areachart"
            ],
            nominal: ["table"],
            extraction: ["table"]
          };
          f(l, function(q) {
            var p = q.toLowerCase();
            o[p] = {
              initialize: function() {},
              render: function() {
                if (typeof google === "undefined") {
                  this.error("The Google Charts library could not be loaded.");
                  return;
                }
                var r = this;
                if (r.view._artifacts.googlechart) {
                  this.destroy();
                }
                r.view._artifacts.googlechart =
                  r.view._artifacts.googlechart ||
                  new google.visualization[q](r.el());
                google.visualization.events.addListener(
                  r.view._artifacts.googlechart,
                  "error",
                  function(s) {
                    k.call(r, s);
                  }
                );
                this.update();
              },
              update: function() {
                var r = m.call(this, q);
                h(r, this.chartOptions(), this.attributes());
                r.isStacked = this.stacked() || r.isStacked;
                this.view._artifacts.datatable = google.visualization.arrayToDataTable(
                  this.data()
                );
                if (this.view._artifacts.googlechart) {
                  this.view._artifacts.googlechart.draw(
                    this.view._artifacts.datatable,
                    r
                  );
                }
              },
              destroy: function() {
                if (this.view._artifacts.googlechart) {
                  google.visualization.events.removeAllListeners(
                    this.view._artifacts.googlechart
                  );
                  this.view._artifacts.googlechart.clearChart();
                  this.view._artifacts.googlechart = null;
                  this.view._artifacts.datatable = null;
                }
              }
            };
          });
          g.register("google", o, {
            capabilities: n,
            dependencies: [
              {
                type: "script",
                url: "https://www.google.com/jsapi",
                cb: function(p) {
                  if (typeof google === "undefined") {
                    this.trigger(
                      "error",
                      "Problem loading Google Charts library. Please contact us!"
                    );
                    p();
                  } else {
                    google.load("visualization", "1.1", {
                      packages: ["corechart", "table"],
                      callback: function() {
                        p();
                      }
                    });
                  }
                }
              }
            ]
          });
          function k(p) {
            var q = j[p.message] || p.message || "An error occurred";
            this.error(q);
          }
          function m(q) {
            var p = {};
            switch (q.toLowerCase()) {
              case "areachart":
                p.lineWidth = 2;
                p.hAxis = {
                  baselineColor: "transparent",
                  gridlines: { color: "transparent" }
                };
                p.vAxis = { viewWindow: { min: 0 } };
                if (
                  this.dataType() === "chronological" ||
                  this.dataType() === "cat-ordinal"
                ) {
                  p.legend = "none";
                  p.chartArea = { width: "85%" };
                }
                break;
              case "barchart":
                p.hAxis = { viewWindow: { min: 0 } };
                p.vAxis = {
                  baselineColor: "transparent",
                  gridlines: { color: "transparent" }
                };
                if (
                  this.dataType() === "chronological" ||
                  this.dataType() === "cat-ordinal"
                ) {
                  p.legend = "none";
                }
                break;
              case "columnchart":
                p.hAxis = {
                  baselineColor: "transparent",
                  gridlines: { color: "transparent" }
                };
                p.vAxis = { viewWindow: { min: 0 } };
                if (
                  this.dataType() === "chronological" ||
                  this.dataType() === "cat-ordinal"
                ) {
                  p.legend = "none";
                  p.chartArea = { width: "85%" };
                }
                break;
              case "linechart":
                p.lineWidth = 2;
                p.hAxis = {
                  baselineColor: "transparent",
                  gridlines: { color: "transparent" }
                };
                p.vAxis = { viewWindow: { min: 0 } };
                if (
                  this.dataType() === "chronological" ||
                  this.dataType() === "cat-ordinal"
                ) {
                  p.legend = "none";
                  p.chartArea = { width: "85%" };
                }
                break;
              case "piechart":
                p.sliceVisibilityThreshold = 0.01;
                break;
              case "table":
                break;
            }
            return p;
          }
        };
      },
      {
        "../../core": 16,
        "../../core/utils/each": 29,
        "../../core/utils/extend": 31,
        "../dataviz": 55
      }
    ],
    54: [
      function(d, b, f) {
        /*!
* ----------------------
* Keen IO Adapter
* ----------------------
*/
        var g = d("../../core"),
          a = d("../dataviz");
        var j = d("../../core/utils/clone"),
          k = d("../../core/utils/each"),
          h = d("../../core/utils/extend"),
          c = d("../utils/prettyNumber");
        b.exports = function() {
          var l, o, n;
          g.Error = {
            defaults: {
              backgroundColor: "",
              borderRadius: "4px",
              color: "#ccc",
              display: "block",
              fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
              fontSize: "21px",
              fontWeight: "light",
              textAlign: "center"
            }
          };
          g.Spinner.defaults = {
            height: 138,
            lines: 10,
            length: 8,
            width: 3,
            radius: 10,
            corners: 1,
            rotate: 0,
            direction: 1,
            color: "#4d4d4d",
            speed: 1.67,
            trail: 60,
            shadow: false,
            hwaccel: false,
            className: "keen-spinner",
            zIndex: 2000000000,
            top: "50%",
            left: "50%"
          };
          var m = { singular: ["metric"] };
          l = {
            initialize: function() {
              var p = document.createElement("style"),
                q = "#49c5b1";
              p.id = "keen-widgets";
              p.type = "text/css";
              p.innerHTML =
                "  .keen-metric { \n  background: " +
                q +
                "; \n  border-radius: 4px; \n  color: #fff; \n  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; \n  padding: 10px 0; \n  text-align: center; \n}   .keen-metric-value { \n  display: block; \n  font-size: 84px; \n  font-weight: 700; \n  line-height: 84px; \n}   .keen-metric-title { \n  display: block; \n  font-size: 24px; \n  font-weight: 200; \n}";
              if (!document.getElementById(p.id)) {
                document.body.appendChild(p);
              }
            },
            render: function() {
              var u = this.colors().length == 1 ? this.colors()[0] : "#49c5b1",
                t = this.title() || "Result",
                v = this.data()[1][1] || 0,
                r = this.width(),
                q = this.chartOptions() || {},
                s = "",
                w = "";
              var x = { width: r ? r + "px" : "auto" };
              var p = v;
              if (
                typeof q.prettyNumber === "undefined" ||
                q.prettyNumber == true
              ) {
                if (!isNaN(parseInt(v))) {
                  p = c(v);
                }
              }
              if (q.prefix) {
                s = '<span class="keen-metric-prefix">' + q.prefix + "</span>";
              }
              if (q.suffix) {
                w = '<span class="keen-metric-suffix">' + q.suffix + "</span>";
              }
              this.el().innerHTML =
                '<div class="keen-widget keen-metric" style="background-color: ' +
                u +
                "; width:" +
                x.width +
                ';" title="' +
                v +
                '"><span class="keen-metric-value">' +
                s +
                p +
                w +
                '</span><span class="keen-metric-title">' +
                t +
                "</span></div>";
            }
          };
          o = {
            initialize: function() {},
            render: function(t, q) {
              var r, s;
              var u = j(g.Error.defaults);
              var p = h(u, q);
              r = document.createElement("div");
              r.className = "keen-error";
              k(p, function(w, v) {
                r.style[v] = w;
              });
              r.style.height = String(this.height() + "px");
              r.style.paddingTop = this.height() / 2 - 15 + "px";
              r.style.width = String(this.width() + "px");
              s = document.createElement("span");
              s.innerHTML = t || "Yikes! An error occurred!";
              r.appendChild(s);
              this.el().innerHTML = "";
              this.el().appendChild(r);
            },
            destroy: function() {
              this.el().innerHTML = "";
            }
          };
          n = {
            initialize: function() {},
            render: function() {
              var q = document.createElement("div");
              var p = this.height() || g.Spinner.defaults.height;
              q.className = "keen-loading";
              q.style.height = String(p + "px");
              q.style.position = "relative";
              q.style.width = String(this.width() + "px");
              this.el().innerHTML = "";
              this.el().appendChild(q);
              this.view._artifacts.spinner = new g.Spinner(
                g.Spinner.defaults
              ).spin(q);
            },
            destroy: function() {
              this.view._artifacts.spinner.stop();
              this.view._artifacts.spinner = null;
            }
          };
          g.Dataviz.register(
            "keen-io",
            { metric: l, error: o, spinner: n },
            { capabilities: m }
          );
        };
      },
      {
        "../../core": 16,
        "../../core/utils/clone": 28,
        "../../core/utils/each": 29,
        "../../core/utils/extend": 31,
        "../dataviz": 55,
        "../utils/prettyNumber": 94
      }
    ],
    55: [
      function(f, d, g) {
        var k = f("../core/utils/clone"),
          m = f("../core/utils/each"),
          j = f("../core/utils/extend"),
          a = f("./utils/loadScript"),
          n = f("./utils/loadStyle");
        var h = f("../core");
        var l = f("../core/utils/emitter-shim");
        var c = f("../dataset");
        function b() {
          this.dataset = new c();
          this.view = {
            _prepared: false,
            _initialized: false,
            _rendered: false,
            _artifacts: {},
            adapter: {
              library: undefined,
              chartOptions: {},
              chartType: undefined,
              defaultChartType: undefined,
              dataType: undefined
            },
            attributes: k(b.defaults),
            defaults: k(b.defaults),
            el: undefined,
            loader: { library: "keen-io", chartType: "spinner" }
          };
          b.visuals.push(this);
        }
        j(b, {
          dataTypeMap: {
            singular: { library: "keen-io", chartType: "metric" },
            categorical: { library: "google", chartType: "piechart" },
            "cat-interval": { library: "google", chartType: "columnchart" },
            "cat-ordinal": { library: "google", chartType: "barchart" },
            chronological: { library: "google", chartType: "areachart" },
            "cat-chronological": { library: "google", chartType: "linechart" },
            extraction: { library: "google", chartType: "table" },
            nominal: { library: "google", chartType: "table" }
          },
          defaults: {
            colors: [
              "#00bbde",
              "#fe6672",
              "#eeb058",
              "#8a8ad6",
              "#ff855c",
              "#00cfbb",
              "#5a9eed",
              "#73d483",
              "#c879bb",
              "#0099b6",
              "#d74d58",
              "#cb9141",
              "#6b6bb6",
              "#d86945",
              "#00aa99",
              "#4281c9",
              "#57b566",
              "#ac5c9e",
              "#27cceb",
              "#ff818b",
              "#f6bf71",
              "#9b9be1",
              "#ff9b79",
              "#26dfcd",
              "#73aff4",
              "#87e096",
              "#d88bcb"
            ],
            indexBy: "timeframe.start",
            stacked: false
          },
          dependencies: { loading: 0, loaded: 0, urls: {} },
          libraries: {},
          visuals: []
        });
        l(b);
        l(b.prototype);
        b.register = function(r, p, q) {
          var o = this;
          var s = function(t) {
            t.loaded++;
            if (t.loaded === t.loading) {
              h.loaded = true;
              h.trigger("ready");
            }
          };
          b.libraries[r] = b.libraries[r] || {};
          m(p, function(u, t) {
            b.libraries[r][t] = u;
          });
          if (q && q.capabilities) {
            b.libraries[r]._defaults = b.libraries[r]._defaults || {};
            m(q.capabilities, function(t, u) {
              b.libraries[r]._defaults[u] = t;
            });
          }
          if (q && q.dependencies) {
            m(q.dependencies, function(v, u, w) {
              var t = b.dependencies;
              if (!t.urls[v.url]) {
                t.urls[v.url] = true;
                t.loading++;
                var x = v.type === "script" ? a : n;
                x(v.url, function() {
                  if (v.cb) {
                    v.cb.call(o, function() {
                      s(t);
                    });
                  } else {
                    s(t);
                  }
                });
              }
            });
          }
        };
        b.find = function(q) {
          if (!arguments.length) {
            return b.visuals;
          }
          var p = q.nodeName ? q : document.querySelector(q),
            o;
          m(b.visuals, function(r) {
            if (p == r.el()) {
              o = r;
              return false;
            }
          });
          if (o) {
            return o;
          }
        };
        d.exports = b;
      },
      {
        "../core": 16,
        "../core/utils/clone": 28,
        "../core/utils/each": 29,
        "../core/utils/emitter-shim": 30,
        "../core/utils/extend": 31,
        "../dataset": 37,
        "./utils/loadScript": 92,
        "./utils/loadStyle": 93
      }
    ],
    56: [
      function(b, d, a) {
        var h = b("../../core/utils/clone"),
          g = b("../../core/utils/extend"),
          f = b("../dataviz"),
          c = b("../../core/request");
        d.exports = function(p, m, j) {
          var l = h(f.defaults),
            o = new f(),
            n = new c(this, [p]),
            k = j || {};
          o
            .attributes(g(l, k))
            .el(m)
            .prepare();
          n.refresh();
          n.on("complete", function() {
            o
              .parseRequest(this)
              .call(function() {
                if (k.labels) {
                  this.labels(k.labels);
                }
              })
              .render();
          });
          n.on("error", function(q) {
            o.error(q.message);
          });
          return o;
        };
      },
      {
        "../../core/request": 25,
        "../../core/utils/clone": 28,
        "../../core/utils/extend": 31,
        "../dataviz": 55
      }
    ],
    57: [
      function(b, c, a) {
        var d = b("../dataviz"),
          f = b("../../core/utils/extend");
        c.exports = function() {
          var k = f({}, d.dataTypeMap),
            h = this.dataType(),
            g = this.library(),
            j = this.chartType() || this.defaultChartType();
          if (!g && k[h]) {
            g = k[h].library;
          }
          if (g && !j && h) {
            j = d.libraries[g]._defaults[h][0];
          }
          if (g && !j && k[h]) {
            j = k[h].chartType;
          }
          return g && j ? d.libraries[g][j] : {};
        };
      },
      { "../../core/utils/extend": 31, "../dataviz": 55 }
    ],
    58: [
      function(c, d, b) {
        var g = c("../../core/utils/each"),
          f = c("../../dataset");
        d.exports = { extraction: a };
        function a(j) {
          var k = j.data instanceof Array ? j.data[0] : j.data,
            l = j.queries[0].get("property_names") || [],
            h = { records: "result", select: true };
          if (l) {
            h.select = [];
            g(l, function(m) {
              h.select.push({ path: m });
            });
          }
          return new f(k, h);
        }
      },
      { "../../core/utils/each": 29, "../../dataset": 37 }
    ],
    59: [
      function(b, c, a) {
        c.exports = function(f) {
          var h = f.queries[0].analysis.replace("_", " "),
            g = f.queries[0].get("event_collection"),
            d;
          d = h.replace(/\b./g, function(j) {
            return j.toUpperCase();
          });
          if (g) {
            d += " - " + g;
          }
          return d;
        };
      },
      {}
    ],
    60: [
      function(b, c, a) {
        c.exports = function(g) {
          var h = typeof g.params.interval === "string",
            f = typeof g.params.group_by === "string",
            j = g.params.group_by instanceof Array,
            d;
          if (!f && !h) {
            d = "singular";
          }
          if (f && !h) {
            d = "categorical";
          }
          if (h && !f) {
            d = "chronological";
          }
          if (h && f) {
            d = "cat-chronological";
          }
          if (!h && j) {
            d = "categorical";
          }
          if (h && j) {
            d = "cat-chronological";
          }
          if (g.analysis === "funnel") {
            d = "cat-ordinal";
          }
          if (g.analysis === "extraction") {
            d = "extraction";
          }
          if (g.analysis === "select_unique") {
            d = "nominal";
          }
          return d;
        };
      },
      {}
    ],
    61: [
      function(b, c, a) {
        var f = b("../core/utils/extend"),
          d = b("./dataviz");
        f(d.prototype, {
          adapter: b("./lib/adapter"),
          attributes: b("./lib/attributes"),
          call: b("./lib/call"),
          chartOptions: b("./lib/chartOptions"),
          chartType: b("./lib/chartType"),
          colorMapping: b("./lib/colorMapping"),
          colors: b("./lib/colors"),
          data: b("./lib/data"),
          dataType: b("./lib/dataType"),
          defaultChartType: b("./lib/defaultChartType"),
          el: b("./lib/el"),
          height: b("./lib/height"),
          indexBy: b("./lib/indexBy"),
          labelMapping: b("./lib/labelMapping"),
          labels: b("./lib/labels"),
          library: b("./lib/library"),
          parseRawData: b("./lib/parseRawData"),
          parseRequest: b("./lib/parseRequest"),
          prepare: b("./lib/prepare"),
          sortGroups: b("./lib/sortGroups"),
          sortIntervals: b("./lib/sortIntervals"),
          stacked: b("./lib/stacked"),
          title: b("./lib/title"),
          width: b("./lib/width")
        });
        f(d.prototype, {
          destroy: b("./lib/actions/destroy"),
          error: b("./lib/actions/error"),
          initialize: b("./lib/actions/initialize"),
          render: b("./lib/actions/render"),
          update: b("./lib/actions/update")
        });
        c.exports = d;
      },
      {
        "../core/utils/extend": 31,
        "./dataviz": 55,
        "./lib/actions/destroy": 62,
        "./lib/actions/error": 63,
        "./lib/actions/initialize": 64,
        "./lib/actions/render": 65,
        "./lib/actions/update": 66,
        "./lib/adapter": 67,
        "./lib/attributes": 68,
        "./lib/call": 69,
        "./lib/chartOptions": 70,
        "./lib/chartType": 71,
        "./lib/colorMapping": 72,
        "./lib/colors": 73,
        "./lib/data": 74,
        "./lib/dataType": 75,
        "./lib/defaultChartType": 76,
        "./lib/el": 77,
        "./lib/height": 78,
        "./lib/indexBy": 79,
        "./lib/labelMapping": 80,
        "./lib/labels": 81,
        "./lib/library": 82,
        "./lib/parseRawData": 83,
        "./lib/parseRequest": 84,
        "./lib/prepare": 85,
        "./lib/sortGroups": 86,
        "./lib/sortIntervals": 87,
        "./lib/stacked": 88,
        "./lib/title": 89,
        "./lib/width": 90
      }
    ],
    62: [
      function(b, c, a) {
        var d = b("../../helpers/getAdapterActions");
        c.exports = function() {
          var f = d.call(this);
          if (f.destroy) {
            f.destroy.apply(this, arguments);
          }
          if (this.el()) {
            this.el().innerHTML = "";
          }
          this.view._prepared = false;
          this.view._initialized = false;
          this.view._rendered = false;
          this.view._artifacts = {};
          return this;
        };
      },
      { "../../helpers/getAdapterActions": 57 }
    ],
    63: [
      function(b, c, a) {
        var f = b("../../helpers/getAdapterActions"),
          d = b("../../dataviz");
        c.exports = function() {
          var g = f.call(this);
          if (g.error) {
            g.error.apply(this, arguments);
          } else {
            d.libraries["keen-io"]["error"].render.apply(this, arguments);
          }
          return this;
        };
      },
      { "../../dataviz": 55, "../../helpers/getAdapterActions": 57 }
    ],
    64: [
      function(b, c, a) {
        var f = b("../../helpers/getAdapterActions"),
          d = b("../../dataviz");
        c.exports = function() {
          var h = f.call(this);
          var g =
            d.libraries[this.view.loader.library][this.view.loader.chartType];
          if (this.view._prepared) {
            if (g.destroy) {
              g.destroy.apply(this, arguments);
            }
          } else {
            if (this.el()) {
              this.el().innerHTML = "";
            }
          }
          if (h.initialize) {
            h.initialize.apply(this, arguments);
          }
          this.view._initialized = true;
          return this;
        };
      },
      { "../../dataviz": 55, "../../helpers/getAdapterActions": 57 }
    ],
    65: [
      function(c, d, b) {
        var f = c("../../helpers/getAdapterActions"),
          a = c("../../utils/applyTransforms");
        d.exports = function() {
          var g = f.call(this);
          a.call(this);
          if (!this.view._initialized) {
            this.initialize();
          }
          if (this.el() && g.render) {
            g.render.apply(this, arguments);
            this.view._rendered = true;
          }
          return this;
        };
      },
      {
        "../../helpers/getAdapterActions": 57,
        "../../utils/applyTransforms": 91
      }
    ],
    66: [
      function(c, d, b) {
        var f = c("../../helpers/getAdapterActions"),
          a = c("../../utils/applyTransforms");
        d.exports = function() {
          var g = f.call(this);
          a.call(this);
          if (g.update) {
            g.update.apply(this, arguments);
          } else {
            if (g.render) {
              this.render();
            }
          }
          return this;
        };
      },
      {
        "../../helpers/getAdapterActions": 57,
        "../../utils/applyTransforms": 91
      }
    ],
    67: [
      function(b, c, a) {
        var d = b("../../core/utils/each");
        c.exports = function(g) {
          if (!arguments.length) {
            return this.view.adapter;
          }
          var f = this;
          d(g, function(j, h) {
            f.view.adapter[h] = j ? j : null;
          });
          return this;
        };
      },
      { "../../core/utils/each": 29 }
    ],
    68: [
      function(b, c, a) {
        var d = b("../../core/utils/each");
        var f = b("./chartOptions");
        (chartType = b("./chartType")), (library = b("./library"));
        c.exports = function(h) {
          if (!arguments.length) {
            return this.view.attributes;
          }
          var g = this;
          d(h, function(k, j) {
            if (j === "library") {
              library.call(g, k);
            } else {
              if (j === "chartType") {
                chartType.call(g, k);
              } else {
                if (j === "chartOptions") {
                  f.call(g, k);
                } else {
                  g.view.attributes[j] = k;
                }
              }
            }
          });
          return this;
        };
      },
      {
        "../../core/utils/each": 29,
        "./chartOptions": 70,
        "./chartType": 71,
        "./library": 82
      }
    ],
    69: [
      function(b, c, a) {
        c.exports = function(d) {
          d.call(this);
          return this;
        };
      },
      {}
    ],
    70: [
      function(b, c, a) {
        var d = b("../../core/utils/extend");
        c.exports = function(f) {
          if (!arguments.length) {
            return this.view.adapter.chartOptions;
          }
          d(this.view.adapter.chartOptions, f);
          return this;
        };
      },
      { "../../core/utils/extend": 31 }
    ],
    71: [
      function(b, c, a) {
        c.exports = function(d) {
          if (!arguments.length) {
            return this.view.adapter.chartType;
          }
          this.view.adapter.chartType = d ? String(d) : null;
          return this;
        };
      },
      {}
    ],
    72: [
      function(b, c, a) {
        var d = b("../../core/utils/each");
        c.exports = function(g) {
          if (!arguments.length) {
            return this.view.attributes.colorMapping;
          }
          this.view.attributes.colorMapping = g ? g : null;
          f.call(this);
          return this;
        };
        function f() {
          var g = this,
            l = this.dataset.schema,
            m = this.dataset.output(),
            j = this.view.defaults.colors.slice(),
            h = this.colorMapping(),
            k = this.dataType() || "";
          if (h) {
            if (
              k.indexOf("chronological") > -1 ||
              (l.unpack && m[0].length > 2)
            ) {
              d(m[0].slice(1), function(o, p) {
                var n = h[o];
                if (n && j[p] !== n) {
                  j.splice(p, 0, n);
                }
              });
            } else {
              d(g.dataset.selectColumn(0).slice(1), function(o, p) {
                var n = h[o];
                if (n && j[p] !== n) {
                  j.splice(p, 0, n);
                }
              });
            }
            g.view.attributes.colors = j;
          }
        }
      },
      { "../../core/utils/each": 29 }
    ],
    73: [
      function(b, c, a) {
        c.exports = function(d) {
          if (!arguments.length) {
            return this.view.attributes.colors;
          }
          this.view.attributes.colors = d instanceof Array ? d : null;
          this.view.defaults.colors = d instanceof Array ? d : null;
          return this;
        };
      },
      {}
    ],
    74: [
      function(b, d, a) {
        var f = b("../../dataset"),
          c = b("../../core/request");
        d.exports = function(g) {
          if (!arguments.length) {
            return this.dataset.output();
          }
          if (g instanceof f) {
            this.dataset = g;
          } else {
            if (g instanceof c) {
              this.parseRequest(g);
            } else {
              this.parseRawData(g);
            }
          }
          return this;
        };
      },
      { "../../core/request": 25, "../../dataset": 37 }
    ],
    75: [
      function(b, c, a) {
        c.exports = function(d) {
          if (!arguments.length) {
            return this.view.adapter.dataType;
          }
          this.view.adapter.dataType = d ? String(d) : null;
          return this;
        };
      },
      {}
    ],
    76: [
      function(b, c, a) {
        c.exports = function(d) {
          if (!arguments.length) {
            return this.view.adapter.defaultChartType;
          }
          this.view.adapter.defaultChartType = d ? String(d) : null;
          return this;
        };
      },
      {}
    ],
    77: [
      function(b, c, a) {
        c.exports = function(d) {
          if (!arguments.length) {
            return this.view.el;
          }
          this.view.el = d;
          return this;
        };
      },
      {}
    ],
    78: [
      function(b, c, a) {
        c.exports = function(d) {
          if (!arguments.length) {
            return this.view.attributes["height"];
          }
          this.view.attributes["height"] = !isNaN(parseInt(d))
            ? parseInt(d)
            : null;
          return this;
        };
      },
      {}
    ],
    79: [
      function(b, d, a) {
        var f = b("../../dataset"),
          h = b("../dataviz"),
          g = b("../../core/utils/each");
        d.exports = function(j) {
          if (!arguments.length) {
            return this.view.attributes.indexBy;
          }
          this.view.attributes.indexBy = j ? String(j) : h.defaults.indexBy;
          c.call(this);
          return this;
        };
        function c() {
          var l = this,
            k = this.dataset.meta.schema || this.dataset.meta.unpack,
            j = this.indexBy()
              .split(".")
              .join(f.defaults.delimeter);
          g(k, function(n, m) {
            if (m === "select" && n instanceof Array) {
              g(n, function(p, o) {
                if (p.path.indexOf("timeframe -> ") > -1) {
                  l.dataset.meta.schema[m][o].path = j;
                }
              });
            } else {
              if (m === "unpack" && typeof n === "object") {
                l.dataset.meta.schema[m]["index"].path = j;
              }
            }
          });
          this.dataset.parse();
        }
      },
      { "../../core/utils/each": 29, "../../dataset": 37, "../dataviz": 55 }
    ],
    80: [
      function(b, c, a) {
        var f = b("../../core/utils/each");
        c.exports = function(g) {
          if (!arguments.length) {
            return this.view.attributes.labelMapping;
          }
          this.view.attributes.labelMapping = g ? g : null;
          d.call(this);
          return this;
        };
        function d() {
          var g = this,
            k = this.labelMapping(),
            j = this.dataset.schema() || {},
            h = this.dataType() || "";
          if (k) {
            if (
              h.indexOf("chronological") > -1 ||
              (j.unpack && g.dataset.output()[0].length > 2)
            ) {
              f(g.dataset.output()[0], function(m, l) {
                if (l > 0) {
                  g.dataset.data.output[0][l] = k[m] || m;
                }
              });
            } else {
              if (j.select && g.dataset.output()[0].length === 2) {
                g.dataset.updateColumn(0, function(m, l) {
                  return k[m] || m;
                });
              }
            }
          }
        }
      },
      { "../../core/utils/each": 29 }
    ],
    81: [
      function(c, d, b) {
        var f = c("../../core/utils/each");
        d.exports = function(h) {
          if (!arguments.length) {
            if (
              !this.view.attributes.labels ||
              !this.view.attributes.labels.length
            ) {
              return g.call(this);
            } else {
              return this.view.attributes.labels;
            }
          } else {
            this.view.attributes.labels = h instanceof Array ? h : null;
            a.call(this);
            return this;
          }
        };
        function a() {
          var h = this,
            m = this.labels() || null,
            k = this.dataset.schema() || {},
            l = this.dataset.output(),
            j = this.dataType() || "";
          if (m) {
            if (
              j.indexOf("chronological") > -1 ||
              (k.unpack && l[0].length > 2)
            ) {
              f(l[0], function(n, o) {
                if (o > 0 && m[o - 1]) {
                  h.dataset.data.output[0][o] = m[o - 1];
                }
              });
            } else {
              f(l, function(o, n) {
                if (n > 0 && m[n - 1]) {
                  h.dataset.data.output[n][0] = m[n - 1];
                }
              });
            }
          }
        }
        function g() {
          var j = this.dataset.schema() || {},
            k = this.dataset.output(),
            h = this.dataType() || "",
            l;
          if (h.indexOf("chron") > -1 || (j.unpack && k[0].length > 2)) {
            l = this.dataset.selectRow(0).slice(1);
          } else {
            l = this.dataset.selectColumn(0).slice(1);
          }
          return l;
        }
      },
      { "../../core/utils/each": 29 }
    ],
    82: [
      function(b, c, a) {
        c.exports = function(d) {
          if (!arguments.length) {
            return this.view.adapter.library;
          }
          this.view.adapter.library = d ? String(d) : null;
          return this;
        };
      },
      {}
    ],
    83: [
      function(b, c, a) {
        var g = b("../dataviz"),
          d = b("../../dataset");
        var f = b("../../core/utils/each");
        c.exports = function(j) {
          this.dataset = h.call(this, j);
          return this;
        };
        function h(m) {
          var t = this,
            l = {},
            o,
            j,
            q,
            k,
            p,
            r,
            n;
          o = t.indexBy() ? t.indexBy() : g.defaults.indexBy;
          j = d.defaults.delimeter;
          q = o.split(".").join(j);
          k = t.labels() || null;
          p = t.labelMapping() || null;
          if (typeof m.result == "number") {
            r = "singular";
            l = {
              records: "",
              select: [{ path: "result", type: "string", label: "Metric" }]
            };
          }
          if (m.result instanceof Array && m.result.length > 0) {
            if (
              m.result[0].timeframe &&
              (typeof m.result[0].value == "number" ||
                m.result[0].value == null)
            ) {
              r = "chronological";
              l = {
                records: "result",
                select: [
                  { path: q, type: "date" },
                  { path: "value", type: "number" }
                ]
              };
            }
            if (typeof m.result[0].result == "number") {
              r = "categorical";
              l = { records: "result", select: [] };
              for (var s in m.result[0]) {
                if (m.result[0].hasOwnProperty(s) && s !== "result") {
                  l.select.push({ path: s, type: "string" });
                  break;
                }
              }
              l.select.push({ path: "result", type: "number" });
            }
            if (m.result[0].value instanceof Array) {
              r = "cat-chronological";
              l = {
                records: "result",
                unpack: {
                  index: { path: q, type: "date" },
                  value: { path: "value -> result", type: "number" }
                }
              };
              for (var s in m.result[0].value[0]) {
                if (m.result[0].value[0].hasOwnProperty(s) && s !== "result") {
                  l.unpack.label = { path: "value -> " + s, type: "string" };
                  break;
                }
              }
            }
            if (
              typeof m.result[0] == "number" &&
              typeof m.steps !== "undefined"
            ) {
              r = "cat-ordinal";
              l = {
                records: "",
                unpack: {
                  index: { path: "steps -> event_collection", type: "string" },
                  value: { path: "result -> ", type: "number" }
                }
              };
            }
            if (
              (typeof m.result[0] == "string" ||
                typeof m.result[0] == "number") &&
              typeof m.steps === "undefined"
            ) {
              r = "nominal";
              n = new d();
              n.appendColumn("unique values", []);
              f(m.result, function(u, v) {
                n.appendRow(u);
              });
            }
            if (r === void 0) {
              r = "extraction";
              l = { records: "result", select: true };
            }
          }
          n = n instanceof d ? n : new d(m, l);
          if (r) {
            t.dataType(r);
          }
          return n;
        }
      },
      { "../../core/utils/each": 29, "../../dataset": 37, "../dataviz": 55 }
    ],
    84: [
      function(c, d, a) {
        var j = c("../helpers/getDatasetSchemas"),
          b = c("../helpers/getDefaultTitle"),
          f = c("../helpers/getQueryDataType");
        var g = c("../../dataset"),
          h = c("./parseRawData");
        d.exports = function(l) {
          var k = f(l.queries[0]);
          if (k === "extraction") {
            this.dataset = j.extraction(l);
          } else {
            this.parseRawData(l.data instanceof Array ? l.data[0] : l.data);
          }
          this.dataType(k);
          this.view.defaults.title = b.call(this, l);
          if (!this.title()) {
            this.title(this.view.defaults.title);
          }
          return this;
        };
      },
      {
        "../../dataset": 37,
        "../helpers/getDatasetSchemas": 58,
        "../helpers/getDefaultTitle": 59,
        "../helpers/getQueryDataType": 60,
        "./parseRawData": 83
      }
    ],
    85: [
      function(b, c, a) {
        var d = b("../dataviz");
        c.exports = function() {
          var f;
          if (this.view._rendered) {
            this.destroy();
          }
          if (this.el()) {
            this.el().innerHTML = "";
            f =
              d.libraries[this.view.loader.library][this.view.loader.chartType];
            if (f.initialize) {
              f.initialize.apply(this, arguments);
            }
            if (f.render) {
              f.render.apply(this, arguments);
            }
            this.view._prepared = true;
          }
          return this;
        };
      },
      { "../dataviz": 55 }
    ],
    86: [
      function(b, c, a) {
        c.exports = function(f) {
          if (!arguments.length) {
            return this.view.attributes.sortGroups;
          }
          this.view.attributes.sortGroups = f ? String(f) : null;
          d.call(this);
          return this;
        };
        function d() {
          var f = this.dataType();
          if (!this.sortGroups()) {
            return;
          }
          if (
            (f && f.indexOf("chronological") > -1) ||
            this.data()[0].length > 2
          ) {
            this.dataset.sortColumns(
              this.sortGroups(),
              this.dataset.getColumnSum
            );
          } else {
            if (
              f &&
              (f.indexOf("cat-") > -1 || f.indexOf("categorical") > -1)
            ) {
              this.dataset.sortRows(this.sortGroups(), this.dataset.getRowSum);
            }
          }
          return;
        }
      },
      {}
    ],
    87: [
      function(b, c, a) {
        c.exports = function(f) {
          if (!arguments.length) {
            return this.view.attributes.sortIntervals;
          }
          this.view.attributes.sortIntervals = f ? String(f) : null;
          d.call(this);
          return this;
        };
        function d() {
          if (!this.sortIntervals()) {
            return;
          }
          this.dataset.sortRows(this.sortIntervals());
          return;
        }
      },
      {}
    ],
    88: [
      function(b, c, a) {
        c.exports = function(d) {
          if (!arguments.length) {
            return this.view.attributes["stacked"];
          }
          this.view.attributes["stacked"] = d ? true : false;
          return this;
        };
      },
      {}
    ],
    89: [
      function(b, c, a) {
        c.exports = function(d) {
          if (!arguments.length) {
            return this.view.attributes["title"];
          }
          this.view.attributes["title"] = d ? String(d) : null;
          return this;
        };
      },
      {}
    ],
    90: [
      function(b, c, a) {
        c.exports = function(d) {
          if (!arguments.length) {
            return this.view.attributes["width"];
          }
          this.view.attributes["width"] = !isNaN(parseInt(d))
            ? parseInt(d)
            : null;
          return this;
        };
      },
      {}
    ],
    91: [
      function(b, c, a) {
        c.exports = function() {
          if (this.labelMapping()) {
            this.labelMapping(this.labelMapping());
          }
          if (this.colorMapping()) {
            this.colorMapping(this.colorMapping());
          }
          if (this.sortGroups()) {
            this.sortGroups(this.sortGroups());
          }
          if (this.sortIntervals()) {
            this.sortIntervals(this.sortIntervals());
          }
        };
      },
      {}
    ],
    92: [
      function(b, c, a) {
        c.exports = function(f, d) {
          var j = document;
          var h;
          var g = j.head || j.getElementsByTagName("head");
          setTimeout(function() {
            if ("item" in g) {
              if (!g[0]) {
                setTimeout(arguments.callee, 25);
                return;
              }
              g = g[0];
            }
            var k = j.createElement("script"),
              l = false;
            k.onload = k.onreadystatechange = function() {
              if (
                (k.readyState &&
                  k.readyState !== "complete" &&
                  k.readyState !== "loaded") ||
                l
              ) {
                return false;
              }
              k.onload = k.onreadystatechange = null;
              l = true;
              d();
            };
            k.src = f;
            g.insertBefore(k, g.firstChild);
          }, 0);
          if (j.readyState === null && j.addEventListener) {
            j.readyState = "loading";
            j.addEventListener(
              "DOMContentLoaded",
              (h = function() {
                j.removeEventListener("DOMContentLoaded", h, false);
                j.readyState = "complete";
              }),
              false
            );
          }
        };
      },
      {}
    ],
    93: [
      function(b, c, a) {
        c.exports = function(f, d) {
          var g = document.createElement("link");
          g.setAttribute("rel", "stylesheet");
          g.type = "text/css";
          g.href = f;
          d();
          document.head.appendChild(g);
        };
      },
      {}
    ],
    94: [
      function(b, c, a) {
        c.exports = function(k) {
          var d = Number(k),
            h = d.toPrecision(3),
            j = "",
            f = ["", "k", "M", "B", "T"];
          if (Number(h) == d && String(d).length <= 4) {
            return String(d);
          }
          if (d >= 1 || d <= -1) {
            if (d < 0) {
              d = -d;
              j = "-";
            }
            return j + g(d, 0);
          } else {
            return d.toPrecision(3);
          }
          function g(l, n) {
            var l = String(l);
            var m = l.split(".");
            if (m.length > 1) {
              l = m[0];
              var p = m[1];
              if (l.length == 2 && p.length > 0) {
                if (p.length > 0) {
                  l = l + "." + p.charAt(0);
                } else {
                  l += "0";
                }
              } else {
                if (l.length == 1 && p.length > 0) {
                  l = l + "." + p.charAt(0);
                  if (p.length > 1) {
                    l += p.charAt(1);
                  } else {
                    l += "0";
                  }
                }
              }
            }
            var o = l.length;
            if (l.split(".").length > 1) {
              o--;
            }
            if (o <= 3) {
              return String(l) + f[n];
            } else {
              return g(Number(l) / 1000, n + 1);
            }
          }
        };
      },
      {}
    ],
    95: [
      function(b, c, a) {
        (function(d) {
          (function(j) {
            if (typeof define === "function" && define.amd) {
              define("keen", [], function() {
                return j();
              });
            }
            if (typeof a === "object" && typeof c !== "undefined") {
              c.exports = j();
            }
            var h = null;
            if (typeof window !== "undefined") {
              h = window;
            } else {
              if (typeof d !== "undefined") {
                h = d;
              } else {
                if (typeof self !== "undefined") {
                  h = self;
                }
              }
            }
            if (h) {
              h.Keen = j();
            }
          })(function() {
            var f = b("./core"),
              g = b("./core/utils/extend");
            g(f.prototype, {
              addEvent: b("./core/lib/addEvent"),
              addEvents: b("./core/lib/addEvents"),
              setGlobalProperties: b("./core/lib/setGlobalProperties"),
              trackExternalLink: b("./core/lib/trackExternalLink"),
              get: b("./core/lib/get"),
              post: b("./core/lib/post"),
              put: b("./core/lib/post"),
              run: b("./core/lib/run"),
              savedQueries: b("./core/saved-queries"),
              draw: b("./dataviz/extensions/draw")
            });
            f.Query = b("./core/query");
            f.Request = b("./core/request");
            f.Dataset = b("./dataset");
            f.Dataviz = b("./dataviz");
            f.Base64 = b("./core/utils/base64");
            f.Spinner = b("spin.js");
            f.utils = {
              domready: b("domready"),
              each: b("./core/utils/each"),
              extend: g,
              parseParams: b("./core/utils/parseParams"),
              prettyNumber: b("./dataviz/utils/prettyNumber")
            };
            b("./dataviz/adapters/keen-io")();
            b("./dataviz/adapters/google")();
            b("./dataviz/adapters/c3")();
            b("./dataviz/adapters/chartjs")();
            if (f.loaded) {
              setTimeout(function() {
                f.utils.domready(function() {
                  f.emit("ready");
                });
              }, 0);
            }
            b("./core/async")();
            c.exports = f;
            return f;
          });
        }.call(
          this,
          typeof global !== "undefined"
            ? global
            : typeof self !== "undefined"
              ? self
              : typeof window !== "undefined" ? window : {}
        ));
      },
      {
        "./core": 16,
        "./core/async": 8,
        "./core/lib/addEvent": 17,
        "./core/lib/addEvents": 18,
        "./core/lib/get": 19,
        "./core/lib/post": 20,
        "./core/lib/run": 21,
        "./core/lib/setGlobalProperties": 22,
        "./core/lib/trackExternalLink": 23,
        "./core/query": 24,
        "./core/request": 25,
        "./core/saved-queries": 26,
        "./core/utils/base64": 27,
        "./core/utils/each": 29,
        "./core/utils/extend": 31,
        "./core/utils/parseParams": 33,
        "./dataset": 37,
        "./dataviz": 61,
        "./dataviz/adapters/c3": 51,
        "./dataviz/adapters/chartjs": 52,
        "./dataviz/adapters/google": 53,
        "./dataviz/adapters/keen-io": 54,
        "./dataviz/extensions/draw": 56,
        "./dataviz/utils/prettyNumber": 94,
        domready: 2,
        "spin.js": 4
      }
    ]
  },
  {},
  [95]
);
