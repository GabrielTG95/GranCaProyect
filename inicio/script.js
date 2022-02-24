    if (function(t, e) {
            "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
                if (!t.document) throw new Error("jQuery requires a window with a document");
                return e(t)
            } : e(t)
        }("undefined" != typeof window ? window : this, function(t, e) {
            function i(t) {
                var e = t.length,
                    i = Z.type(t);
                return "function" === i || Z.isWindow(t) ? !1 : 1 === t.nodeType && e ? !0 : "array" === i || 0 === e || "number" == typeof e && e > 0 && e - 1 in t
            }

            function n(t, e, i) {
                if (Z.isFunction(e)) return Z.grep(t, function(t, n) {
                    return !!e.call(t, n, t) !== i
                });
                if (e.nodeType) return Z.grep(t, function(t) {
                    return t === e !== i
                });
                if ("string" == typeof e) {
                    if (ae.test(e)) return Z.filter(e, t, i);
                    e = Z.filter(e, t)
                }
                return Z.grep(t, function(t) {
                    return X.call(e, t) >= 0 !== i
                })
            }

            function o(t, e) {
                for (;
                    (t = t[e]) && 1 !== t.nodeType;);
                return t
            }

            function s(t) {
                var e = fe[t] = {};
                return Z.each(t.match(he) || [], function(t, i) {
                    e[i] = !0
                }), e
            }

            function r() {
                J.removeEventListener("DOMContentLoaded", r, !1), t.removeEventListener("load", r, !1), Z.ready()
            }

            function a() {
                Object.defineProperty(this.cache = {}, 0, {
                    get: function() {
                        return {}
                    }
                }), this.expando = Z.expando + a.uid++
            }

            function l(t, e, i) {
                var n;
                if (void 0 === i && 1 === t.nodeType)
                    if (n = "data-" + e.replace(we, "-$1").toLowerCase(), i = t.getAttribute(n), "string" == typeof i) {
                        try {
                            i = "true" === i ? !0 : "false" === i ? !1 : "null" === i ? null : +i + "" === i ? +i : be.test(i) ? Z.parseJSON(i) : i
                        } catch (o) {}
                        ye.set(t, e, i)
                    } else i = void 0;
                return i
            }

            function c() {
                return !0
            }

            function d() {
                return !1
            }

            function u() {
                try {
                    return J.activeElement
                } catch (t) {}
            }

            function p(t, e) {
                return Z.nodeName(t, "table") && Z.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
            }

            function h(t) {
                return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
            }

            function f(t) {
                var e = Ie.exec(t.type);
                return e ? t.type = e[1] : t.removeAttribute("type"), t
            }

            function g(t, e) {
                for (var i = 0, n = t.length; n > i; i++) me.set(t[i], "globalEval", !e || me.get(e[i], "globalEval"))
            }

            function v(t, e) {
                var i, n, o, s, r, a, l, c;
                if (1 === e.nodeType) {
                    if (me.hasData(t) && (s = me.access(t), r = me.set(e, s), c = s.events)) {
                        delete r.handle, r.events = {};
                        for (o in c)
                            for (i = 0, n = c[o].length; n > i; i++) Z.event.add(e, o, c[o][i])
                    }
                    ye.hasData(t) && (a = ye.access(t), l = Z.extend({}, a), ye.set(e, l))
                }
            }

            function m(t, e) {
                var i = t.getElementsByTagName ? t.getElementsByTagName(e || "*") : t.querySelectorAll ? t.querySelectorAll(e || "*") : [];
                return void 0 === e || e && Z.nodeName(t, e) ? Z.merge([t], i) : i
            }

            function y(t, e) {
                var i = e.nodeName.toLowerCase();
                "input" === i && Ce.test(t.type) ? e.checked = t.checked : ("input" === i || "textarea" === i) && (e.defaultValue = t.defaultValue)
            }

            function b(e, i) {
                var n, o = Z(i.createElement(e)).appendTo(i.body),
                    s = t.getDefaultComputedStyle && (n = t.getDefaultComputedStyle(o[0])) ? n.display : Z.css(o[0], "display");
                return o.detach(), s
            }

            function w(t) {
                var e = J,
                    i = Fe[t];
                return i || (i = b(t, e), "none" !== i && i || (Re = (Re || Z("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = Re[0].contentDocument, e.write(), e.close(), i = b(t, e), Re.detach()), Fe[t] = i), i
            }

            function T(t, e, i) {
                var n, o, s, r, a = t.style;
                return i = i || Be(t), i && (r = i.getPropertyValue(e) || i[e]), i && ("" !== r || Z.contains(t.ownerDocument, t) || (r = Z.style(t, e)), ze.test(r) && We.test(e) && (n = a.width, o = a.minWidth, s = a.maxWidth, a.minWidth = a.maxWidth = a.width = r, r = i.width, a.width = n, a.minWidth = o, a.maxWidth = s)), void 0 !== r ? r + "" : r
            }

            function x(t, e) {
                return {
                    get: function() {
                        return t() ? void delete this.get : (this.get = e).apply(this, arguments)
                    }
                }
            }

            function k(t, e) {
                if (e in t) return e;
                for (var i = e[0].toUpperCase() + e.slice(1), n = e, o = Ye.length; o--;)
                    if (e = Ye[o] + i, e in t) return e;
                return n
            }

            function C(t, e, i) {
                var n = _e.exec(e);
                return n ? Math.max(0, n[1] - (i || 0)) + (n[2] || "px") : e
            }

            function S(t, e, i, n, o) {
                for (var s = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0, r = 0; 4 > s; s += 2) "margin" === i && (r += Z.css(t, i + xe[s], !0, o)), n ? ("content" === i && (r -= Z.css(t, "padding" + xe[s], !0, o)), "margin" !== i && (r -= Z.css(t, "border" + xe[s] + "Width", !0, o))) : (r += Z.css(t, "padding" + xe[s], !0, o), "padding" !== i && (r += Z.css(t, "border" + xe[s] + "Width", !0, o)));
                return r
            }

            function $(t, e, i) {
                var n = !0,
                    o = "width" === e ? t.offsetWidth : t.offsetHeight,
                    s = Be(t),
                    r = "border-box" === Z.css(t, "boxSizing", !1, s);
                if (0 >= o || null == o) {
                    if (o = T(t, e, s), (0 > o || null == o) && (o = t.style[e]), ze.test(o)) return o;
                    n = r && (G.boxSizingReliable() || o === t.style[e]), o = parseFloat(o) || 0
                }
                return o + S(t, e, i || (r ? "border" : "content"), n, s) + "px"
            }

            function E(t, e) {
                for (var i, n, o, s = [], r = 0, a = t.length; a > r; r++) n = t[r], n.style && (s[r] = me.get(n, "olddisplay"), i = n.style.display, e ? (s[r] || "none" !== i || (n.style.display = ""), "" === n.style.display && ke(n) && (s[r] = me.access(n, "olddisplay", w(n.nodeName)))) : (o = ke(n), "none" === i && o || me.set(n, "olddisplay", o ? i : Z.css(n, "display"))));
                for (r = 0; a > r; r++) n = t[r], n.style && (e && "none" !== n.style.display && "" !== n.style.display || (n.style.display = e ? s[r] || "" : "none"));
                return t
            }

            function A(t, e, i, n, o) {
                return new A.prototype.init(t, e, i, n, o)
            }

            function N() {
                return setTimeout(function() {
                    Ge = void 0
                }), Ge = Z.now()
            }

            function D(t, e) {
                var i, n = 0,
                    o = {
                        height: t
                    };
                for (e = e ? 1 : 0; 4 > n; n += 2 - e) i = xe[n], o["margin" + i] = o["padding" + i] = t;
                return e && (o.opacity = o.width = t), o
            }

            function j(t, e, i) {
                for (var n, o = (ii[e] || []).concat(ii["*"]), s = 0, r = o.length; r > s; s++)
                    if (n = o[s].call(i, e, t)) return n
            }

            function O(t, e, i) {
                var n, o, s, r, a, l, c, d, u = this,
                    p = {},
                    h = t.style,
                    f = t.nodeType && ke(t),
                    g = me.get(t, "fxshow");
                i.queue || (a = Z._queueHooks(t, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
                    a.unqueued || l()
                }), a.unqueued++, u.always(function() {
                    u.always(function() {
                        a.unqueued--, Z.queue(t, "fx").length || a.empty.fire()
                    })
                })), 1 === t.nodeType && ("height" in e || "width" in e) && (i.overflow = [h.overflow, h.overflowX, h.overflowY], c = Z.css(t, "display"), d = "none" === c ? me.get(t, "olddisplay") || w(t.nodeName) : c, "inline" === d && "none" === Z.css(t, "float") && (h.display = "inline-block")), i.overflow && (h.overflow = "hidden", u.always(function() {
                    h.overflow = i.overflow[0], h.overflowX = i.overflow[1], h.overflowY = i.overflow[2]
                }));
                for (n in e)
                    if (o = e[n], Ke.exec(o)) {
                        if (delete e[n], s = s || "toggle" === o, o === (f ? "hide" : "show")) {
                            if ("show" !== o || !g || void 0 === g[n]) continue;
                            f = !0
                        }
                        p[n] = g && g[n] || Z.style(t, n)
                    } else c = void 0;
                if (Z.isEmptyObject(p)) "inline" === ("none" === c ? w(t.nodeName) : c) && (h.display = c);
                else {
                    g ? "hidden" in g && (f = g.hidden) : g = me.access(t, "fxshow", {}), s && (g.hidden = !f), f ? Z(t).show() : u.done(function() {
                        Z(t).hide()
                    }), u.done(function() {
                        var e;
                        me.remove(t, "fxshow");
                        for (e in p) Z.style(t, e, p[e])
                    });
                    for (n in p) r = j(f ? g[n] : 0, n, u), n in g || (g[n] = r.start, f && (r.end = r.start, r.start = "width" === n || "height" === n ? 1 : 0))
                }
            }

            function H(t, e) {
                var i, n, o, s, r;
                for (i in t)
                    if (n = Z.camelCase(i), o = e[n], s = t[i], Z.isArray(s) && (o = s[1], s = t[i] = s[0]), i !== n && (t[n] = s, delete t[i]), r = Z.cssHooks[n], r && "expand" in r) {
                        s = r.expand(s), delete t[n];
                        for (i in s) i in t || (t[i] = s[i], e[i] = o)
                    } else e[n] = o
            }

            function P(t, e, i) {
                var n, o, s = 0,
                    r = ei.length,
                    a = Z.Deferred().always(function() {
                        delete l.elem
                    }),
                    l = function() {
                        if (o) return !1;
                        for (var e = Ge || N(), i = Math.max(0, c.startTime + c.duration - e), n = i / c.duration || 0, s = 1 - n, r = 0, l = c.tweens.length; l > r; r++) c.tweens[r].run(s);
                        return a.notifyWith(t, [c, s, i]), 1 > s && l ? i : (a.resolveWith(t, [c]), !1)
                    },
                    c = a.promise({
                        elem: t,
                        props: Z.extend({}, e),
                        opts: Z.extend(!0, {
                            specialEasing: {}
                        }, i),
                        originalProperties: e,
                        originalOptions: i,
                        startTime: Ge || N(),
                        duration: i.duration,
                        tweens: [],
                        createTween: function(e, i) {
                            var n = Z.Tween(t, c.opts, e, i, c.opts.specialEasing[e] || c.opts.easing);
                            return c.tweens.push(n), n
                        },
                        stop: function(e) {
                            var i = 0,
                                n = e ? c.tweens.length : 0;
                            if (o) return this;
                            for (o = !0; n > i; i++) c.tweens[i].run(1);
                            return e ? a.resolveWith(t, [c, e]) : a.rejectWith(t, [c, e]), this
                        }
                    }),
                    d = c.props;
                for (H(d, c.opts.specialEasing); r > s; s++)
                    if (n = ei[s].call(c, t, d, c.opts)) return n;
                return Z.map(d, j, c), Z.isFunction(c.opts.start) && c.opts.start.call(t, c), Z.fx.timer(Z.extend(l, {
                    elem: t,
                    anim: c,
                    queue: c.opts.queue
                })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
            }

            function L(t) {
                return function(e, i) {
                    "string" != typeof e && (i = e, e = "*");
                    var n, o = 0,
                        s = e.toLowerCase().match(he) || [];
                    if (Z.isFunction(i))
                        for (; n = s[o++];) "+" === n[0] ? (n = n.slice(1) || "*", (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i)
                }
            }

            function I(t, e, i, n) {
                function o(a) {
                    var l;
                    return s[a] = !0, Z.each(t[a] || [], function(t, a) {
                        var c = a(e, i, n);
                        return "string" != typeof c || r || s[c] ? r ? !(l = c) : void 0 : (e.dataTypes.unshift(c), o(c), !1)
                    }), l
                }
                var s = {},
                    r = t === bi;
                return o(e.dataTypes[0]) || !s["*"] && o("*")
            }

            function q(t, e) {
                var i, n, o = Z.ajaxSettings.flatOptions || {};
                for (i in e) void 0 !== e[i] && ((o[i] ? t : n || (n = {}))[i] = e[i]);
                return n && Z.extend(!0, t, n), t
            }

            function M(t, e, i) {
                for (var n, o, s, r, a = t.contents, l = t.dataTypes;
                    "*" === l[0];) l.shift(), void 0 === n && (n = t.mimeType || e.getResponseHeader("Content-Type"));
                if (n)
                    for (o in a)
                        if (a[o] && a[o].test(n)) {
                            l.unshift(o);
                            break
                        }
                if (l[0] in i) s = l[0];
                else {
                    for (o in i) {
                        if (!l[0] || t.converters[o + " " + l[0]]) {
                            s = o;
                            break
                        }
                        r || (r = o)
                    }
                    s = s || r
                }
                return s ? (s !== l[0] && l.unshift(s), i[s]) : void 0
            }

            function R(t, e, i, n) {
                var o, s, r, a, l, c = {},
                    d = t.dataTypes.slice();
                if (d[1])
                    for (r in t.converters) c[r.toLowerCase()] = t.converters[r];
                for (s = d.shift(); s;)
                    if (t.responseFields[s] && (i[t.responseFields[s]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = s, s = d.shift())
                        if ("*" === s) s = l;
                        else if ("*" !== l && l !== s) {
                    if (r = c[l + " " + s] || c["* " + s], !r)
                        for (o in c)
                            if (a = o.split(" "), a[1] === s && (r = c[l + " " + a[0]] || c["* " + a[0]])) {
                                r === !0 ? r = c[o] : c[o] !== !0 && (s = a[0], d.unshift(a[1]));
                                break
                            }
                    if (r !== !0)
                        if (r && t["throws"]) e = r(e);
                        else try {
                            e = r(e)
                        } catch (u) {
                            return {
                                state: "parsererror",
                                error: r ? u : "No conversion from " + l + " to " + s
                            }
                        }
                }
                return {
                    state: "success",
                    data: e
                }
            }

            function F(t, e, i, n) {
                var o;
                if (Z.isArray(e)) Z.each(e, function(e, o) {
                    i || Ci.test(t) ? n(t, o) : F(t + "[" + ("object" == typeof o ? e : "") + "]", o, i, n)
                });
                else if (i || "object" !== Z.type(e)) n(t, e);
                else
                    for (o in e) F(t + "[" + o + "]", e[o], i, n)
            }

            function W(t) {
                return Z.isWindow(t) ? t : 9 === t.nodeType && t.defaultView
            }
            var z = [],
                B = z.slice,
                U = z.concat,
                _ = z.push,
                X = z.indexOf,
                V = {},
                Q = V.toString,
                Y = V.hasOwnProperty,
                G = {},
                J = t.document,
                K = "2.1.3",
                Z = function(t, e) {
                    return new Z.fn.init(t, e)
                },
                te = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
                ee = /^-ms-/,
                ie = /-([\da-z])/gi,
                ne = function(t, e) {
                    return e.toUpperCase()
                };
            Z.fn = Z.prototype = {
                jquery: K,
                constructor: Z,
                selector: "",
                length: 0,
                toArray: function() {
                    return B.call(this)
                },
                get: function(t) {
                    return null != t ? 0 > t ? this[t + this.length] : this[t] : B.call(this)
                },
                pushStack: function(t) {
                    var e = Z.merge(this.constructor(), t);
                    return e.prevObject = this, e.context = this.context, e
                },
                each: function(t, e) {
                    return Z.each(this, t, e)
                },
                map: function(t) {
                    return this.pushStack(Z.map(this, function(e, i) {
                        return t.call(e, i, e)
                    }))
                },
                slice: function() {
                    return this.pushStack(B.apply(this, arguments))
                },
                first: function() {
                    return this.eq(0)
                },
                last: function() {
                    return this.eq(-1)
                },
                eq: function(t) {
                    var e = this.length,
                        i = +t + (0 > t ? e : 0);
                    return this.pushStack(i >= 0 && e > i ? [this[i]] : [])
                },
                end: function() {
                    return this.prevObject || this.constructor(null)
                },
                push: _,
                sort: z.sort,
                splice: z.splice
            }, Z.extend = Z.fn.extend = function() {
                var t, e, i, n, o, s, r = arguments[0] || {},
                    a = 1,
                    l = arguments.length,
                    c = !1;
                for ("boolean" == typeof r && (c = r, r = arguments[a] || {}, a++), "object" == typeof r || Z.isFunction(r) || (r = {}), a === l && (r = this, a--); l > a; a++)
                    if (null != (t = arguments[a]))
                        for (e in t) i = r[e], n = t[e], r !== n && (c && n && (Z.isPlainObject(n) || (o = Z.isArray(n))) ? (o ? (o = !1, s = i && Z.isArray(i) ? i : []) : s = i && Z.isPlainObject(i) ? i : {}, r[e] = Z.extend(c, s, n)) : void 0 !== n && (r[e] = n));
                return r
            }, Z.extend({
                expando: "jQuery" + (K + Math.random()).replace(/\D/g, ""),
                isReady: !0,
                error: function(t) {
                    throw new Error(t)
                },
                noop: function() {},
                isFunction: function(t) {
                    return "function" === Z.type(t)
                },
                isArray: Array.isArray,
                isWindow: function(t) {
                    return null != t && t === t.window
                },
                isNumeric: function(t) {
                    return !Z.isArray(t) && t - parseFloat(t) + 1 >= 0
                },
                isPlainObject: function(t) {
                    return "object" !== Z.type(t) || t.nodeType || Z.isWindow(t) ? !1 : t.constructor && !Y.call(t.constructor.prototype, "isPrototypeOf") ? !1 : !0
                },
                isEmptyObject: function(t) {
                    var e;
                    for (e in t) return !1;
                    return !0
                },
                type: function(t) {
                    return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? V[Q.call(t)] || "object" : typeof t
                },
                globalEval: function(t) {
                    var e, i = eval;
                    t = Z.trim(t), t && (1 === t.indexOf("use strict") ? (e = J.createElement("script"), e.text = t, J.head.appendChild(e).parentNode.removeChild(e)) : i(t))
                },
                camelCase: function(t) {
                    return t.replace(ee, "ms-").replace(ie, ne)
                },
                nodeName: function(t, e) {
                    return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
                },
                each: function(t, e, n) {
                    var o, s = 0,
                        r = t.length,
                        a = i(t);
                    if (n) {
                        if (a)
                            for (; r > s && (o = e.apply(t[s], n), o !== !1); s++);
                        else
                            for (s in t)
                                if (o = e.apply(t[s], n), o === !1) break
                    } else if (a)
                        for (; r > s && (o = e.call(t[s], s, t[s]), o !== !1); s++);
                    else
                        for (s in t)
                            if (o = e.call(t[s], s, t[s]), o === !1) break; return t
                },
                trim: function(t) {
                    return null == t ? "" : (t + "").replace(te, "")
                },
                makeArray: function(t, e) {
                    var n = e || [];
                    return null != t && (i(Object(t)) ? Z.merge(n, "string" == typeof t ? [t] : t) : _.call(n, t)), n
                },
                inArray: function(t, e, i) {
                    return null == e ? -1 : X.call(e, t, i)
                },
                merge: function(t, e) {
                    for (var i = +e.length, n = 0, o = t.length; i > n; n++) t[o++] = e[n];
                    return t.length = o, t
                },
                grep: function(t, e, i) {
                    for (var n, o = [], s = 0, r = t.length, a = !i; r > s; s++) n = !e(t[s], s), n !== a && o.push(t[s]);
                    return o
                },
                map: function(t, e, n) {
                    var o, s = 0,
                        r = t.length,
                        a = i(t),
                        l = [];
                    if (a)
                        for (; r > s; s++) o = e(t[s], s, n), null != o && l.push(o);
                    else
                        for (s in t) o = e(t[s], s, n), null != o && l.push(o);
                    return U.apply([], l)
                },
                guid: 1,
                proxy: function(t, e) {
                    var i, n, o;
                    return "string" == typeof e && (i = t[e], e = t, t = i), Z.isFunction(t) ? (n = B.call(arguments, 2), o = function() {
                        return t.apply(e || this, n.concat(B.call(arguments)))
                    }, o.guid = t.guid = t.guid || Z.guid++, o) : void 0
                },
                now: Date.now,
                support: G
            }), Z.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
                V["[object " + e + "]"] = e.toLowerCase()
            });
            var oe = function(t) {
                function e(t, e, i, n) {
                    var o, s, r, a, l, c, u, h, f, g;
                    if ((e ? e.ownerDocument || e : F) !== O && j(e), e = e || O, i = i || [], a = e.nodeType, "string" != typeof t || !t || 1 !== a && 9 !== a && 11 !== a) return i;
                    if (!n && P) {
                        if (11 !== a && (o = ye.exec(t)))
                            if (r = o[1]) {
                                if (9 === a) {
                                    if (s = e.getElementById(r), !s || !s.parentNode) return i;
                                    if (s.id === r) return i.push(s), i
                                } else if (e.ownerDocument && (s = e.ownerDocument.getElementById(r)) && M(e, s) && s.id === r) return i.push(s), i
                            } else {
                                if (o[2]) return K.apply(i, e.getElementsByTagName(t)), i;
                                if ((r = o[3]) && T.getElementsByClassName) return K.apply(i, e.getElementsByClassName(r)), i
                            }
                        if (T.qsa && (!L || !L.test(t))) {
                            if (h = u = R, f = e, g = 1 !== a && t, 1 === a && "object" !== e.nodeName.toLowerCase()) {
                                for (c = S(t), (u = e.getAttribute("id")) ? h = u.replace(we, "\\$&") : e.setAttribute("id", h), h = "[id='" + h + "'] ", l = c.length; l--;) c[l] = h + p(c[l]);
                                f = be.test(t) && d(e.parentNode) || e, g = c.join(",")
                            }
                            if (g) try {
                                return K.apply(i, f.querySelectorAll(g)), i
                            } catch (v) {} finally {
                                u || e.removeAttribute("id")
                            }
                        }
                    }
                    return E(t.replace(le, "$1"), e, i, n)
                }

                function i() {
                    function t(i, n) {
                        return e.push(i + " ") > x.cacheLength && delete t[e.shift()], t[i + " "] = n
                    }
                    var e = [];
                    return t
                }

                function n(t) {
                    return t[R] = !0, t
                }

                function o(t) {
                    var e = O.createElement("div");
                    try {
                        return !!t(e)
                    } catch (i) {
                        return !1
                    } finally {
                        e.parentNode && e.parentNode.removeChild(e), e = null
                    }
                }

                function s(t, e) {
                    for (var i = t.split("|"), n = t.length; n--;) x.attrHandle[i[n]] = e
                }

                function r(t, e) {
                    var i = e && t,
                        n = i && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || V) - (~t.sourceIndex || V);
                    if (n) return n;
                    if (i)
                        for (; i = i.nextSibling;)
                            if (i === e) return -1;
                    return t ? 1 : -1
                }

                function a(t) {
                    return function(e) {
                        var i = e.nodeName.toLowerCase();
                        return "input" === i && e.type === t
                    }
                }

                function l(t) {
                    return function(e) {
                        var i = e.nodeName.toLowerCase();
                        return ("input" === i || "button" === i) && e.type === t
                    }
                }

                function c(t) {
                    return n(function(e) {
                        return e = +e, n(function(i, n) {
                            for (var o, s = t([], i.length, e), r = s.length; r--;) i[o = s[r]] && (i[o] = !(n[o] = i[o]))
                        })
                    })
                }

                function d(t) {
                    return t && "undefined" != typeof t.getElementsByTagName && t
                }

                function u() {}

                function p(t) {
                    for (var e = 0, i = t.length, n = ""; i > e; e++) n += t[e].value;
                    return n
                }

                function h(t, e, i) {
                    var n = e.dir,
                        o = i && "parentNode" === n,
                        s = z++;
                    return e.first ? function(e, i, s) {
                        for (; e = e[n];)
                            if (1 === e.nodeType || o) return t(e, i, s)
                    } : function(e, i, r) {
                        var a, l, c = [W, s];
                        if (r) {
                            for (; e = e[n];)
                                if ((1 === e.nodeType || o) && t(e, i, r)) return !0
                        } else
                            for (; e = e[n];)
                                if (1 === e.nodeType || o) {
                                    if (l = e[R] || (e[R] = {}), (a = l[n]) && a[0] === W && a[1] === s) return c[2] = a[2];
                                    if (l[n] = c, c[2] = t(e, i, r)) return !0
                                }
                    }
                }

                function f(t) {
                    return t.length > 1 ? function(e, i, n) {
                        for (var o = t.length; o--;)
                            if (!t[o](e, i, n)) return !1;
                        return !0
                    } : t[0]
                }

                function g(t, i, n) {
                    for (var o = 0, s = i.length; s > o; o++) e(t, i[o], n);
                    return n
                }

                function v(t, e, i, n, o) {
                    for (var s, r = [], a = 0, l = t.length, c = null != e; l > a; a++)(s = t[a]) && (!i || i(s, n, o)) && (r.push(s), c && e.push(a));
                    return r
                }

                function m(t, e, i, o, s, r) {
                    return o && !o[R] && (o = m(o)), s && !s[R] && (s = m(s, r)), n(function(n, r, a, l) {
                        var c, d, u, p = [],
                            h = [],
                            f = r.length,
                            m = n || g(e || "*", a.nodeType ? [a] : a, []),
                            y = !t || !n && e ? m : v(m, p, t, a, l),
                            b = i ? s || (n ? t : f || o) ? [] : r : y;
                        if (i && i(y, b, a, l), o)
                            for (c = v(b, h), o(c, [], a, l), d = c.length; d--;)(u = c[d]) && (b[h[d]] = !(y[h[d]] = u));
                        if (n) {
                            if (s || t) {
                                if (s) {
                                    for (c = [], d = b.length; d--;)(u = b[d]) && c.push(y[d] = u);
                                    s(null, b = [], c, l)
                                }
                                for (d = b.length; d--;)(u = b[d]) && (c = s ? te(n, u) : p[d]) > -1 && (n[c] = !(r[c] = u))
                            }
                        } else b = v(b === r ? b.splice(f, b.length) : b), s ? s(null, r, b, l) : K.apply(r, b)
                    })
                }

                function y(t) {
                    for (var e, i, n, o = t.length, s = x.relative[t[0].type], r = s || x.relative[" "], a = s ? 1 : 0, l = h(function(t) {
                            return t === e
                        }, r, !0), c = h(function(t) {
                            return te(e, t) > -1
                        }, r, !0), d = [function(t, i, n) {
                            var o = !s && (n || i !== A) || ((e = i).nodeType ? l(t, i, n) : c(t, i, n));
                            return e = null, o
                        }]; o > a; a++)
                        if (i = x.relative[t[a].type]) d = [h(f(d), i)];
                        else {
                            if (i = x.filter[t[a].type].apply(null, t[a].matches), i[R]) {
                                for (n = ++a; o > n && !x.relative[t[n].type]; n++);
                                return m(a > 1 && f(d), a > 1 && p(t.slice(0, a - 1).concat({
                                    value: " " === t[a - 2].type ? "*" : ""
                                })).replace(le, "$1"), i, n > a && y(t.slice(a, n)), o > n && y(t = t.slice(n)), o > n && p(t))
                            }
                            d.push(i)
                        }
                    return f(d)
                }

                function b(t, i) {
                    var o = i.length > 0,
                        s = t.length > 0,
                        r = function(n, r, a, l, c) {
                            var d, u, p, h = 0,
                                f = "0",
                                g = n && [],
                                m = [],
                                y = A,
                                b = n || s && x.find.TAG("*", c),
                                w = W += null == y ? 1 : Math.random() || .1,
                                T = b.length;
                            for (c && (A = r !== O && r); f !== T && null != (d = b[f]); f++) {
                                if (s && d) {
                                    for (u = 0; p = t[u++];)
                                        if (p(d, r, a)) {
                                            l.push(d);
                                            break
                                        }
                                    c && (W = w)
                                }
                                o && ((d = !p && d) && h--, n && g.push(d))
                            }
                            if (h += f, o && f !== h) {
                                for (u = 0; p = i[u++];) p(g, m, r, a);
                                if (n) {
                                    if (h > 0)
                                        for (; f--;) g[f] || m[f] || (m[f] = G.call(l));
                                    m = v(m)
                                }
                                K.apply(l, m), c && !n && m.length > 0 && h + i.length > 1 && e.uniqueSort(l)
                            }
                            return c && (W = w, A = y), g
                        };
                    return o ? n(r) : r
                }
                var w, T, x, k, C, S, $, E, A, N, D, j, O, H, P, L, I, q, M, R = "sizzle" + 1 * new Date,
                    F = t.document,
                    W = 0,
                    z = 0,
                    B = i(),
                    U = i(),
                    _ = i(),
                    X = function(t, e) {
                        return t === e && (D = !0), 0
                    },
                    V = 1 << 31,
                    Q = {}.hasOwnProperty,
                    Y = [],
                    G = Y.pop,
                    J = Y.push,
                    K = Y.push,
                    Z = Y.slice,
                    te = function(t, e) {
                        for (var i = 0, n = t.length; n > i; i++)
                            if (t[i] === e) return i;
                        return -1
                    },
                    ee = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    ie = "[\\x20\\t\\r\\n\\f]",
                    ne = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                    oe = ne.replace("w", "w#"),
                    se = "\\[" + ie + "*(" + ne + ")(?:" + ie + "*([*^$|!~]?=)" + ie + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + oe + "))|)" + ie + "*\\]",
                    re = ":(" + ne + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + se + ")*)|.*)\\)|)",
                    ae = new RegExp(ie + "+", "g"),
                    le = new RegExp("^" + ie + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ie + "+$", "g"),
                    ce = new RegExp("^" + ie + "*," + ie + "*"),
                    de = new RegExp("^" + ie + "*([>+~]|" + ie + ")" + ie + "*"),
                    ue = new RegExp("=" + ie + "*([^\\]'\"]*?)" + ie + "*\\]", "g"),
                    pe = new RegExp(re),
                    he = new RegExp("^" + oe + "$"),
                    fe = {
                        ID: new RegExp("^#(" + ne + ")"),
                        CLASS: new RegExp("^\\.(" + ne + ")"),
                        TAG: new RegExp("^(" + ne.replace("w", "w*") + ")"),
                        ATTR: new RegExp("^" + se),
                        PSEUDO: new RegExp("^" + re),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ie + "*(even|odd|(([+-]|)(\\d*)n|)" + ie + "*(?:([+-]|)" + ie + "*(\\d+)|))" + ie + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + ee + ")$", "i"),
                        needsContext: new RegExp("^" + ie + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ie + "*((?:-\\d)?\\d*)" + ie + "*\\)|)(?=[^-]|$)", "i")
                    },
                    ge = /^(?:input|select|textarea|button)$/i,
                    ve = /^h\d$/i,
                    me = /^[^{]+\{\s*\[native \w/,
                    ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    be = /[+~]/,
                    we = /'|\\/g,
                    Te = new RegExp("\\\\([\\da-f]{1,6}" + ie + "?|(" + ie + ")|.)", "ig"),
                    xe = function(t, e, i) {
                        var n = "0x" + e - 65536;
                        return n !== n || i ? e : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
                    },
                    ke = function() {
                        j()
                    };
                try {
                    K.apply(Y = Z.call(F.childNodes), F.childNodes), Y[F.childNodes.length].nodeType
                } catch (Ce) {
                    K = {
                        apply: Y.length ? function(t, e) {
                            J.apply(t, Z.call(e))
                        } : function(t, e) {
                            for (var i = t.length, n = 0; t[i++] = e[n++];);
                            t.length = i - 1
                        }
                    }
                }
                T = e.support = {}, C = e.isXML = function(t) {
                    var e = t && (t.ownerDocument || t).documentElement;
                    return e ? "HTML" !== e.nodeName : !1
                }, j = e.setDocument = function(t) {
                    var e, i, n = t ? t.ownerDocument || t : F;
                    return n !== O && 9 === n.nodeType && n.documentElement ? (O = n, H = n.documentElement, i = n.defaultView, i && i !== i.top && (i.addEventListener ? i.addEventListener("unload", ke, !1) : i.attachEvent && i.attachEvent("onunload", ke)), P = !C(n), T.attributes = o(function(t) {
                        return t.className = "i", !t.getAttribute("className")
                    }), T.getElementsByTagName = o(function(t) {
                        return t.appendChild(n.createComment("")), !t.getElementsByTagName("*").length
                    }), T.getElementsByClassName = me.test(n.getElementsByClassName), T.getById = o(function(t) {
                        return H.appendChild(t).id = R, !n.getElementsByName || !n.getElementsByName(R).length
                    }), T.getById ? (x.find.ID = function(t, e) {
                        if ("undefined" != typeof e.getElementById && P) {
                            var i = e.getElementById(t);
                            return i && i.parentNode ? [i] : []
                        }
                    }, x.filter.ID = function(t) {
                        var e = t.replace(Te, xe);
                        return function(t) {
                            return t.getAttribute("id") === e
                        }
                    }) : (delete x.find.ID, x.filter.ID = function(t) {
                        var e = t.replace(Te, xe);
                        return function(t) {
                            var i = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
                            return i && i.value === e
                        }
                    }), x.find.TAG = T.getElementsByTagName ? function(t, e) {
                        return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : T.qsa ? e.querySelectorAll(t) : void 0
                    } : function(t, e) {
                        var i, n = [],
                            o = 0,
                            s = e.getElementsByTagName(t);
                        if ("*" === t) {
                            for (; i = s[o++];) 1 === i.nodeType && n.push(i);
                            return n
                        }
                        return s
                    }, x.find.CLASS = T.getElementsByClassName && function(t, e) {
                        return P ? e.getElementsByClassName(t) : void 0
                    }, I = [], L = [], (T.qsa = me.test(n.querySelectorAll)) && (o(function(t) {
                        H.appendChild(t).innerHTML = "<a id='" + R + "'></a><select id='" + R + "-\f]' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && L.push("[*^$]=" + ie + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || L.push("\\[" + ie + "*(?:value|" + ee + ")"), t.querySelectorAll("[id~=" + R + "-]").length || L.push("~="), t.querySelectorAll(":checked").length || L.push(":checked"), t.querySelectorAll("a#" + R + "+*").length || L.push(".#.+[+~]")
                    }), o(function(t) {
                        var e = n.createElement("input");
                        e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && L.push("name" + ie + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || L.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), L.push(",.*:")
                    })), (T.matchesSelector = me.test(q = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && o(function(t) {
                        T.disconnectedMatch = q.call(t, "div"), q.call(t, "[s!='']:x"), I.push("!=", re)
                    }), L = L.length && new RegExp(L.join("|")), I = I.length && new RegExp(I.join("|")), e = me.test(H.compareDocumentPosition), M = e || me.test(H.contains) ? function(t, e) {
                        var i = 9 === t.nodeType ? t.documentElement : t,
                            n = e && e.parentNode;
                        return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
                    } : function(t, e) {
                        if (e)
                            for (; e = e.parentNode;)
                                if (e === t) return !0;
                        return !1
                    }, X = e ? function(t, e) {
                        if (t === e) return D = !0, 0;
                        var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                        return i ? i : (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & i || !T.sortDetached && e.compareDocumentPosition(t) === i ? t === n || t.ownerDocument === F && M(F, t) ? -1 : e === n || e.ownerDocument === F && M(F, e) ? 1 : N ? te(N, t) - te(N, e) : 0 : 4 & i ? -1 : 1)
                    } : function(t, e) {
                        if (t === e) return D = !0, 0;
                        var i, o = 0,
                            s = t.parentNode,
                            a = e.parentNode,
                            l = [t],
                            c = [e];
                        if (!s || !a) return t === n ? -1 : e === n ? 1 : s ? -1 : a ? 1 : N ? te(N, t) - te(N, e) : 0;
                        if (s === a) return r(t, e);
                        for (i = t; i = i.parentNode;) l.unshift(i);
                        for (i = e; i = i.parentNode;) c.unshift(i);
                        for (; l[o] === c[o];) o++;
                        return o ? r(l[o], c[o]) : l[o] === F ? -1 : c[o] === F ? 1 : 0
                    }, n) : O
                }, e.matches = function(t, i) {
                    return e(t, null, null, i)
                }, e.matchesSelector = function(t, i) {
                    if ((t.ownerDocument || t) !== O && j(t), i = i.replace(ue, "='$1']"), !(!T.matchesSelector || !P || I && I.test(i) || L && L.test(i))) try {
                        var n = q.call(t, i);
                        if (n || T.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n
                    } catch (o) {}
                    return e(i, O, null, [t]).length > 0
                }, e.contains = function(t, e) {
                    return (t.ownerDocument || t) !== O && j(t), M(t, e)
                }, e.attr = function(t, e) {
                    (t.ownerDocument || t) !== O && j(t);
                    var i = x.attrHandle[e.toLowerCase()],
                        n = i && Q.call(x.attrHandle, e.toLowerCase()) ? i(t, e, !P) : void 0;
                    return void 0 !== n ? n : T.attributes || !P ? t.getAttribute(e) : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
                }, e.error = function(t) {
                    throw new Error("Syntax error, unrecognized expression: " + t)
                }, e.uniqueSort = function(t) {
                    var e, i = [],
                        n = 0,
                        o = 0;
                    if (D = !T.detectDuplicates, N = !T.sortStable && t.slice(0), t.sort(X), D) {
                        for (; e = t[o++];) e === t[o] && (n = i.push(o));
                        for (; n--;) t.splice(i[n], 1)
                    }
                    return N = null, t
                }, k = e.getText = function(t) {
                    var e, i = "",
                        n = 0,
                        o = t.nodeType;
                    if (o) {
                        if (1 === o || 9 === o || 11 === o) {
                            if ("string" == typeof t.textContent) return t.textContent;
                            for (t = t.firstChild; t; t = t.nextSibling) i += k(t)
                        } else if (3 === o || 4 === o) return t.nodeValue
                    } else
                        for (; e = t[n++];) i += k(e);
                    return i
                }, x = e.selectors = {
                    cacheLength: 50,
                    createPseudo: n,
                    match: fe,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function(t) {
                            return t[1] = t[1].replace(Te, xe), t[3] = (t[3] || t[4] || t[5] || "").replace(Te, xe), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                        },
                        CHILD: function(t) {
                            return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                        },
                        PSEUDO: function(t) {
                            var e, i = !t[6] && t[2];
                            return fe.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && pe.test(i) && (e = S(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function(t) {
                            var e = t.replace(Te, xe).toLowerCase();
                            return "*" === t ? function() {
                                return !0
                            } : function(t) {
                                return t.nodeName && t.nodeName.toLowerCase() === e
                            }
                        },
                        CLASS: function(t) {
                            var e = B[t + " "];
                            return e || (e = new RegExp("(^|" + ie + ")" + t + "(" + ie + "|$)")) && B(t, function(t) {
                                return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
                            })
                        },
                        ATTR: function(t, i, n) {
                            return function(o) {
                                var s = e.attr(o, t);
                                return null == s ? "!=" === i : i ? (s += "", "=" === i ? s === n : "!=" === i ? s !== n : "^=" === i ? n && 0 === s.indexOf(n) : "*=" === i ? n && s.indexOf(n) > -1 : "$=" === i ? n && s.slice(-n.length) === n : "~=" === i ? (" " + s.replace(ae, " ") + " ").indexOf(n) > -1 : "|=" === i ? s === n || s.slice(0, n.length + 1) === n + "-" : !1) : !0
                            }
                        },
                        CHILD: function(t, e, i, n, o) {
                            var s = "nth" !== t.slice(0, 3),
                                r = "last" !== t.slice(-4),
                                a = "of-type" === e;
                            return 1 === n && 0 === o ? function(t) {
                                return !!t.parentNode
                            } : function(e, i, l) {
                                var c, d, u, p, h, f, g = s !== r ? "nextSibling" : "previousSibling",
                                    v = e.parentNode,
                                    m = a && e.nodeName.toLowerCase(),
                                    y = !l && !a;
                                if (v) {
                                    if (s) {
                                        for (; g;) {
                                            for (u = e; u = u[g];)
                                                if (a ? u.nodeName.toLowerCase() === m : 1 === u.nodeType) return !1;
                                            f = g = "only" === t && !f && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (f = [r ? v.firstChild : v.lastChild], r && y) {
                                        for (d = v[R] || (v[R] = {}), c = d[t] || [], h = c[0] === W && c[1], p = c[0] === W && c[2], u = h && v.childNodes[h]; u = ++h && u && u[g] || (p = h = 0) || f.pop();)
                                            if (1 === u.nodeType && ++p && u === e) {
                                                d[t] = [W, h, p];
                                                break
                                            }
                                    } else if (y && (c = (e[R] || (e[R] = {}))[t]) && c[0] === W) p = c[1];
                                    else
                                        for (;
                                            (u = ++h && u && u[g] || (p = h = 0) || f.pop()) && ((a ? u.nodeName.toLowerCase() !== m : 1 !== u.nodeType) || !++p || (y && ((u[R] || (u[R] = {}))[t] = [W, p]), u !== e)););
                                    return p -= o, p === n || p % n === 0 && p / n >= 0
                                }
                            }
                        },
                        PSEUDO: function(t, i) {
                            var o, s = x.pseudos[t] || x.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                            return s[R] ? s(i) : s.length > 1 ? (o = [t, t, "", i], x.setFilters.hasOwnProperty(t.toLowerCase()) ? n(function(t, e) {
                                for (var n, o = s(t, i), r = o.length; r--;) n = te(t, o[r]), t[n] = !(e[n] = o[r])
                            }) : function(t) {
                                return s(t, 0, o)
                            }) : s
                        }
                    },
                    pseudos: {
                        not: n(function(t) {
                            var e = [],
                                i = [],
                                o = $(t.replace(le, "$1"));
                            return o[R] ? n(function(t, e, i, n) {
                                for (var s, r = o(t, null, n, []), a = t.length; a--;)(s = r[a]) && (t[a] = !(e[a] = s))
                            }) : function(t, n, s) {
                                return e[0] = t, o(e, null, s, i), e[0] = null, !i.pop()
                            }
                        }),
                        has: n(function(t) {
                            return function(i) {
                                return e(t, i).length > 0
                            }
                        }),
                        contains: n(function(t) {
                            return t = t.replace(Te, xe),
                                function(e) {
                                    return (e.textContent || e.innerText || k(e)).indexOf(t) > -1
                                }
                        }),
                        lang: n(function(t) {
                            return he.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(Te, xe).toLowerCase(),
                                function(e) {
                                    var i;
                                    do
                                        if (i = P ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return i = i.toLowerCase(), i === t || 0 === i.indexOf(t + "-");
                                    while ((e = e.parentNode) && 1 === e.nodeType);
                                    return !1
                                }
                        }),
                        target: function(e) {
                            var i = t.location && t.location.hash;
                            return i && i.slice(1) === e.id
                        },
                        root: function(t) {
                            return t === H
                        },
                        focus: function(t) {
                            return t === O.activeElement && (!O.hasFocus || O.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                        },
                        enabled: function(t) {
                            return t.disabled === !1
                        },
                        disabled: function(t) {
                            return t.disabled === !0
                        },
                        checked: function(t) {
                            var e = t.nodeName.toLowerCase();
                            return "input" === e && !!t.checked || "option" === e && !!t.selected
                        },
                        selected: function(t) {
                            return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                        },
                        empty: function(t) {
                            for (t = t.firstChild; t; t = t.nextSibling)
                                if (t.nodeType < 6) return !1;
                            return !0
                        },
                        parent: function(t) {
                            return !x.pseudos.empty(t)
                        },
                        header: function(t) {
                            return ve.test(t.nodeName)
                        },
                        input: function(t) {
                            return ge.test(t.nodeName)
                        },
                        button: function(t) {
                            var e = t.nodeName.toLowerCase();
                            return "input" === e && "button" === t.type || "button" === e
                        },
                        text: function(t) {
                            var e;
                            return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                        },
                        first: c(function() {
                            return [0]
                        }),
                        last: c(function(t, e) {
                            return [e - 1]
                        }),
                        eq: c(function(t, e, i) {
                            return [0 > i ? i + e : i]
                        }),
                        even: c(function(t, e) {
                            for (var i = 0; e > i; i += 2) t.push(i);
                            return t
                        }),
                        odd: c(function(t, e) {
                            for (var i = 1; e > i; i += 2) t.push(i);
                            return t
                        }),
                        lt: c(function(t, e, i) {
                            for (var n = 0 > i ? i + e : i; --n >= 0;) t.push(n);
                            return t
                        }),
                        gt: c(function(t, e, i) {
                            for (var n = 0 > i ? i + e : i; ++n < e;) t.push(n);
                            return t
                        })
                    }
                }, x.pseudos.nth = x.pseudos.eq;
                for (w in {
                        radio: !0,
                        checkbox: !0,
                        file: !0,
                        password: !0,
                        image: !0
                    }) x.pseudos[w] = a(w);
                for (w in {
                        submit: !0,
                        reset: !0
                    }) x.pseudos[w] = l(w);
                return u.prototype = x.filters = x.pseudos, x.setFilters = new u, S = e.tokenize = function(t, i) {
                    var n, o, s, r, a, l, c, d = U[t + " "];
                    if (d) return i ? 0 : d.slice(0);
                    for (a = t, l = [], c = x.preFilter; a;) {
                        (!n || (o = ce.exec(a))) && (o && (a = a.slice(o[0].length) || a), l.push(s = [])), n = !1, (o = de.exec(a)) && (n = o.shift(), s.push({
                            value: n,
                            type: o[0].replace(le, " ")
                        }), a = a.slice(n.length));
                        for (r in x.filter) !(o = fe[r].exec(a)) || c[r] && !(o = c[r](o)) || (n = o.shift(), s.push({
                            value: n,
                            type: r,
                            matches: o
                        }), a = a.slice(n.length));
                        if (!n) break
                    }
                    return i ? a.length : a ? e.error(t) : U(t, l).slice(0)
                }, $ = e.compile = function(t, e) {
                    var i, n = [],
                        o = [],
                        s = _[t + " "];
                    if (!s) {
                        for (e || (e = S(t)), i = e.length; i--;) s = y(e[i]), s[R] ? n.push(s) : o.push(s);
                        s = _(t, b(o, n)), s.selector = t
                    }
                    return s
                }, E = e.select = function(t, e, i, n) {
                    var o, s, r, a, l, c = "function" == typeof t && t,
                        u = !n && S(t = c.selector || t);
                    if (i = i || [], 1 === u.length) {
                        if (s = u[0] = u[0].slice(0), s.length > 2 && "ID" === (r = s[0]).type && T.getById && 9 === e.nodeType && P && x.relative[s[1].type]) {
                            if (e = (x.find.ID(r.matches[0].replace(Te, xe), e) || [])[0], !e) return i;
                            c && (e = e.parentNode), t = t.slice(s.shift().value.length)
                        }
                        for (o = fe.needsContext.test(t) ? 0 : s.length; o-- && (r = s[o], !x.relative[a = r.type]);)
                            if ((l = x.find[a]) && (n = l(r.matches[0].replace(Te, xe), be.test(s[0].type) && d(e.parentNode) || e))) {
                                if (s.splice(o, 1), t = n.length && p(s), !t) return K.apply(i, n), i;
                                break
                            }
                    }
                    return (c || $(t, u))(n, e, !P, i, be.test(t) && d(e.parentNode) || e), i
                }, T.sortStable = R.split("").sort(X).join("") === R, T.detectDuplicates = !!D, j(), T.sortDetached = o(function(t) {
                    return 1 & t.compareDocumentPosition(O.createElement("div"))
                }), o(function(t) {
                    return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
                }) || s("type|href|height|width", function(t, e, i) {
                    return i ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
                }), T.attributes && o(function(t) {
                    return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
                }) || s("value", function(t, e, i) {
                    return i || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
                }), o(function(t) {
                    return null == t.getAttribute("disabled")
                }) || s(ee, function(t, e, i) {
                    var n;
                    return i ? void 0 : t[e] === !0 ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
                }), e
            }(t);
            Z.find = oe, Z.expr = oe.selectors, Z.expr[":"] = Z.expr.pseudos, Z.unique = oe.uniqueSort, Z.text = oe.getText, Z.isXMLDoc = oe.isXML, Z.contains = oe.contains;
            var se = Z.expr.match.needsContext,
                re = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
                ae = /^.[^:#\[\.,]*$/;
            Z.filter = function(t, e, i) {
                var n = e[0];
                return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === n.nodeType ? Z.find.matchesSelector(n, t) ? [n] : [] : Z.find.matches(t, Z.grep(e, function(t) {
                    return 1 === t.nodeType
                }))
            }, Z.fn.extend({
                find: function(t) {
                    var e, i = this.length,
                        n = [],
                        o = this;
                    if ("string" != typeof t) return this.pushStack(Z(t).filter(function() {
                        for (e = 0; i > e; e++)
                            if (Z.contains(o[e], this)) return !0
                    }));
                    for (e = 0; i > e; e++) Z.find(t, o[e], n);
                    return n = this.pushStack(i > 1 ? Z.unique(n) : n), n.selector = this.selector ? this.selector + " " + t : t, n
                },
                filter: function(t) {
                    return this.pushStack(n(this, t || [], !1))
                },
                not: function(t) {
                    return this.pushStack(n(this, t || [], !0))
                },
                is: function(t) {
                    return !!n(this, "string" == typeof t && se.test(t) ? Z(t) : t || [], !1).length
                }
            });
            var le, ce = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
                de = Z.fn.init = function(t, e) {
                    var i, n;
                    if (!t) return this;
                    if ("string" == typeof t) {
                        if (i = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : ce.exec(t), !i || !i[1] && e) return !e || e.jquery ? (e || le).find(t) : this.constructor(e).find(t);
                        if (i[1]) {
                            if (e = e instanceof Z ? e[0] : e, Z.merge(this, Z.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : J, !0)), re.test(i[1]) && Z.isPlainObject(e))
                                for (i in e) Z.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                            return this
                        }
                        return n = J.getElementById(i[2]), n && n.parentNode && (this.length = 1, this[0] = n), this.context = J, this.selector = t, this
                    }
                    return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : Z.isFunction(t) ? "undefined" != typeof le.ready ? le.ready(t) : t(Z) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), Z.makeArray(t, this))
                };
            de.prototype = Z.fn, le = Z(J);
            var ue = /^(?:parents|prev(?:Until|All))/,
                pe = {
                    children: !0,
                    contents: !0,
                    next: !0,
                    prev: !0
                };
            Z.extend({
                dir: function(t, e, i) {
                    for (var n = [], o = void 0 !== i;
                        (t = t[e]) && 9 !== t.nodeType;)
                        if (1 === t.nodeType) {
                            if (o && Z(t).is(i)) break;
                            n.push(t)
                        }
                    return n
                },
                sibling: function(t, e) {
                    for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
                    return i
                }
            }), Z.fn.extend({
                has: function(t) {
                    var e = Z(t, this),
                        i = e.length;
                    return this.filter(function() {
                        for (var t = 0; i > t; t++)
                            if (Z.contains(this, e[t])) return !0
                    })
                },
                closest: function(t, e) {
                    for (var i, n = 0, o = this.length, s = [], r = se.test(t) || "string" != typeof t ? Z(t, e || this.context) : 0; o > n; n++)
                        for (i = this[n]; i && i !== e; i = i.parentNode)
                            if (i.nodeType < 11 && (r ? r.index(i) > -1 : 1 === i.nodeType && Z.find.matchesSelector(i, t))) {
                                s.push(i);
                                break
                            }
                    return this.pushStack(s.length > 1 ? Z.unique(s) : s)
                },
                index: function(t) {
                    return t ? "string" == typeof t ? X.call(Z(t), this[0]) : X.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                },
                add: function(t, e) {
                    return this.pushStack(Z.unique(Z.merge(this.get(), Z(t, e))))
                },
                addBack: function(t) {
                    return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
                }
            }), Z.each({
                parent: function(t) {
                    var e = t.parentNode;
                    return e && 11 !== e.nodeType ? e : null
                },
                parents: function(t) {
                    return Z.dir(t, "parentNode")
                },
                parentsUntil: function(t, e, i) {
                    return Z.dir(t, "parentNode", i)
                },
                next: function(t) {
                    return o(t, "nextSibling")
                },
                prev: function(t) {
                    return o(t, "previousSibling")
                },
                nextAll: function(t) {
                    return Z.dir(t, "nextSibling")
                },
                prevAll: function(t) {
                    return Z.dir(t, "previousSibling")
                },
                nextUntil: function(t, e, i) {
                    return Z.dir(t, "nextSibling", i)
                },
                prevUntil: function(t, e, i) {
                    return Z.dir(t, "previousSibling", i)
                },
                siblings: function(t) {
                    return Z.sibling((t.parentNode || {}).firstChild, t)
                },
                children: function(t) {
                    return Z.sibling(t.firstChild)
                },
                contents: function(t) {
                    return t.contentDocument || Z.merge([], t.childNodes)
                }
            }, function(t, e) {
                Z.fn[t] = function(i, n) {
                    var o = Z.map(this, e, i);
                    return "Until" !== t.slice(-5) && (n = i), n && "string" == typeof n && (o = Z.filter(n, o)), this.length > 1 && (pe[t] || Z.unique(o), ue.test(t) && o.reverse()), this.pushStack(o)
                }
            });
            var he = /\S+/g,
                fe = {};
            Z.Callbacks = function(t) {
                t = "string" == typeof t ? fe[t] || s(t) : Z.extend({}, t);
                var e, i, n, o, r, a, l = [],
                    c = !t.once && [],
                    d = function(s) {
                        for (e = t.memory && s, i = !0, a = o || 0, o = 0, r = l.length, n = !0; l && r > a; a++)
                            if (l[a].apply(s[0], s[1]) === !1 && t.stopOnFalse) {
                                e = !1;
                                break
                            }
                        n = !1, l && (c ? c.length && d(c.shift()) : e ? l = [] : u.disable())
                    },
                    u = {
                        add: function() {
                            if (l) {
                                var i = l.length;
                                ! function s(e) {
                                    Z.each(e, function(e, i) {
                                        var n = Z.type(i);
                                        "function" === n ? t.unique && u.has(i) || l.push(i) : i && i.length && "string" !== n && s(i)
                                    })
                                }(arguments), n ? r = l.length : e && (o = i, d(e))
                            }
                            return this
                        },
                        remove: function() {
                            return l && Z.each(arguments, function(t, e) {
                                for (var i;
                                    (i = Z.inArray(e, l, i)) > -1;) l.splice(i, 1), n && (r >= i && r--, a >= i && a--)
                            }), this
                        },
                        has: function(t) {
                            return t ? Z.inArray(t, l) > -1 : !(!l || !l.length)
                        },
                        empty: function() {
                            return l = [], r = 0, this
                        },
                        disable: function() {
                            return l = c = e = void 0, this
                        },
                        disabled: function() {
                            return !l
                        },
                        lock: function() {
                            return c = void 0, e || u.disable(), this
                        },
                        locked: function() {
                            return !c
                        },
                        fireWith: function(t, e) {
                            return !l || i && !c || (e = e || [], e = [t, e.slice ? e.slice() : e], n ? c.push(e) : d(e)), this
                        },
                        fire: function() {
                            return u.fireWith(this, arguments), this
                        },
                        fired: function() {
                            return !!i
                        }
                    };
                return u
            }, Z.extend({
                Deferred: function(t) {
                    var e = [
                            ["resolve", "done", Z.Callbacks("once memory"), "resolved"],
                            ["reject", "fail", Z.Callbacks("once memory"), "rejected"],
                            ["notify", "progress", Z.Callbacks("memory")]
                        ],
                        i = "pending",
                        n = {
                            state: function() {
                                return i
                            },
                            always: function() {
                                return o.done(arguments).fail(arguments), this
                            },
                            then: function() {
                                var t = arguments;
                                return Z.Deferred(function(i) {
                                    Z.each(e, function(e, s) {
                                        var r = Z.isFunction(t[e]) && t[e];
                                        o[s[1]](function() {
                                            var t = r && r.apply(this, arguments);
                                            t && Z.isFunction(t.promise) ? t.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[s[0] + "With"](this === n ? i.promise() : this, r ? [t] : arguments)
                                        })
                                    }), t = null
                                }).promise()
                            },
                            promise: function(t) {
                                return null != t ? Z.extend(t, n) : n
                            }
                        },
                        o = {};
                    return n.pipe = n.then, Z.each(e, function(t, s) {
                        var r = s[2],
                            a = s[3];
                        n[s[1]] = r.add, a && r.add(function() {
                            i = a
                        }, e[1 ^ t][2].disable, e[2][2].lock), o[s[0]] = function() {
                            return o[s[0] + "With"](this === o ? n : this, arguments), this
                        }, o[s[0] + "With"] = r.fireWith
                    }), n.promise(o), t && t.call(o, o), o
                },
                when: function(t) {
                    var e, i, n, o = 0,
                        s = B.call(arguments),
                        r = s.length,
                        a = 1 !== r || t && Z.isFunction(t.promise) ? r : 0,
                        l = 1 === a ? t : Z.Deferred(),
                        c = function(t, i, n) {
                            return function(o) {
                                i[t] = this, n[t] = arguments.length > 1 ? B.call(arguments) : o, n === e ? l.notifyWith(i, n) : --a || l.resolveWith(i, n)
                            }
                        };
                    if (r > 1)
                        for (e = new Array(r), i = new Array(r), n = new Array(r); r > o; o++) s[o] && Z.isFunction(s[o].promise) ? s[o].promise().done(c(o, n, s)).fail(l.reject).progress(c(o, i, e)) : --a;
                    return a || l.resolveWith(n, s), l.promise()
                }
            });
            var ge;
            Z.fn.ready = function(t) {
                return Z.ready.promise().done(t), this
            }, Z.extend({
                isReady: !1,
                readyWait: 1,
                holdReady: function(t) {
                    t ? Z.readyWait++ : Z.ready(!0)
                },
                ready: function(t) {
                    (t === !0 ? --Z.readyWait : Z.isReady) || (Z.isReady = !0, t !== !0 && --Z.readyWait > 0 || (ge.resolveWith(J, [Z]), Z.fn.triggerHandler && (Z(J).triggerHandler("ready"), Z(J).off("ready"))))
                }
            }), Z.ready.promise = function(e) {
                return ge || (ge = Z.Deferred(), "complete" === J.readyState ? setTimeout(Z.ready) : (J.addEventListener("DOMContentLoaded", r, !1), t.addEventListener("load", r, !1))), ge.promise(e)
            }, Z.ready.promise();
            var ve = Z.access = function(t, e, i, n, o, s, r) {
                var a = 0,
                    l = t.length,
                    c = null == i;
                if ("object" === Z.type(i)) {
                    o = !0;
                    for (a in i) Z.access(t, e, a, i[a], !0, s, r)
                } else if (void 0 !== n && (o = !0, Z.isFunction(n) || (r = !0), c && (r ? (e.call(t, n), e = null) : (c = e, e = function(t, e, i) {
                        return c.call(Z(t), i)
                    })), e))
                    for (; l > a; a++) e(t[a], i, r ? n : n.call(t[a], a, e(t[a], i)));
                return o ? t : c ? e.call(t) : l ? e(t[0], i) : s
            };
            Z.acceptData = function(t) {
                return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
            }, a.uid = 1, a.accepts = Z.acceptData, a.prototype = {
                key: function(t) {
                    if (!a.accepts(t)) return 0;
                    var e = {},
                        i = t[this.expando];
                    if (!i) {
                        i = a.uid++;
                        try {
                            e[this.expando] = {
                                value: i
                            }, Object.defineProperties(t, e)
                        } catch (n) {
                            e[this.expando] = i, Z.extend(t, e)
                        }
                    }
                    return this.cache[i] || (this.cache[i] = {}), i
                },
                set: function(t, e, i) {
                    var n, o = this.key(t),
                        s = this.cache[o];
                    if ("string" == typeof e) s[e] = i;
                    else if (Z.isEmptyObject(s)) Z.extend(this.cache[o], e);
                    else
                        for (n in e) s[n] = e[n];
                    return s
                },
                get: function(t, e) {
                    var i = this.cache[this.key(t)];
                    return void 0 === e ? i : i[e]
                },
                access: function(t, e, i) {
                    var n;
                    return void 0 === e || e && "string" == typeof e && void 0 === i ? (n = this.get(t, e), void 0 !== n ? n : this.get(t, Z.camelCase(e))) : (this.set(t, e, i), void 0 !== i ? i : e)
                },
                remove: function(t, e) {
                    var i, n, o, s = this.key(t),
                        r = this.cache[s];
                    if (void 0 === e) this.cache[s] = {};
                    else {
                        Z.isArray(e) ? n = e.concat(e.map(Z.camelCase)) : (o = Z.camelCase(e), e in r ? n = [e, o] : (n = o, n = n in r ? [n] : n.match(he) || [])), i = n.length;
                        for (; i--;) delete r[n[i]]
                    }
                },
                hasData: function(t) {
                    return !Z.isEmptyObject(this.cache[t[this.expando]] || {})
                },
                discard: function(t) {
                    t[this.expando] && delete this.cache[t[this.expando]]
                }
            };
            var me = new a,
                ye = new a,
                be = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                we = /([A-Z])/g;
            Z.extend({
                hasData: function(t) {
                    return ye.hasData(t) || me.hasData(t)
                },
                data: function(t, e, i) {
                    return ye.access(t, e, i)
                },
                removeData: function(t, e) {
                    ye.remove(t, e)
                },
                _data: function(t, e, i) {
                    return me.access(t, e, i)
                },
                _removeData: function(t, e) {
                    me.remove(t, e)
                }
            }), Z.fn.extend({
                data: function(t, e) {
                    var i, n, o, s = this[0],
                        r = s && s.attributes;
                    if (void 0 === t) {
                        if (this.length && (o = ye.get(s), 1 === s.nodeType && !me.get(s, "hasDataAttrs"))) {
                            for (i = r.length; i--;) r[i] && (n = r[i].name, 0 === n.indexOf("data-") && (n = Z.camelCase(n.slice(5)), l(s, n, o[n])));
                            me.set(s, "hasDataAttrs", !0)
                        }
                        return o
                    }
                    return "object" == typeof t ? this.each(function() {
                        ye.set(this, t)
                    }) : ve(this, function(e) {
                        var i, n = Z.camelCase(t);
                        if (s && void 0 === e) {
                            if (i = ye.get(s, t), void 0 !== i) return i;
                            if (i = ye.get(s, n), void 0 !== i) return i;
                            if (i = l(s, n, void 0), void 0 !== i) return i
                        } else this.each(function() {
                            var i = ye.get(this, n);
                            ye.set(this, n, e), -1 !== t.indexOf("-") && void 0 !== i && ye.set(this, t, e)
                        })
                    }, null, e, arguments.length > 1, null, !0)
                },
                removeData: function(t) {
                    return this.each(function() {
                        ye.remove(this, t)
                    })
                }
            }), Z.extend({
                queue: function(t, e, i) {
                    var n;
                    return t ? (e = (e || "fx") + "queue", n = me.get(t, e), i && (!n || Z.isArray(i) ? n = me.access(t, e, Z.makeArray(i)) : n.push(i)), n || []) : void 0
                },
                dequeue: function(t, e) {
                    e = e || "fx";
                    var i = Z.queue(t, e),
                        n = i.length,
                        o = i.shift(),
                        s = Z._queueHooks(t, e),
                        r = function() {
                            Z.dequeue(t, e)
                        };
                    "inprogress" === o && (o = i.shift(), n--), o && ("fx" === e && i.unshift("inprogress"), delete s.stop, o.call(t, r, s)), !n && s && s.empty.fire()
                },
                _queueHooks: function(t, e) {
                    var i = e + "queueHooks";
                    return me.get(t, i) || me.access(t, i, {
                        empty: Z.Callbacks("once memory").add(function() {
                            me.remove(t, [e + "queue", i])
                        })
                    })
                }
            }), Z.fn.extend({
                queue: function(t, e) {
                    var i = 2;
                    return "string" != typeof t && (e = t, t = "fx", i--), arguments.length < i ? Z.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                        var i = Z.queue(this, t, e);
                        Z._queueHooks(this, t), "fx" === t && "inprogress" !== i[0] && Z.dequeue(this, t)
                    })
                },
                dequeue: function(t) {
                    return this.each(function() {
                        Z.dequeue(this, t)
                    })
                },
                clearQueue: function(t) {
                    return this.queue(t || "fx", [])
                },
                promise: function(t, e) {
                    var i, n = 1,
                        o = Z.Deferred(),
                        s = this,
                        r = this.length,
                        a = function() {
                            --n || o.resolveWith(s, [s])
                        };
                    for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; r--;) i = me.get(s[r], t + "queueHooks"), i && i.empty && (n++, i.empty.add(a));
                    return a(), o.promise(e)
                }
            });
            var Te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                xe = ["Top", "Right", "Bottom", "Left"],
                ke = function(t, e) {
                    return t = e || t, "none" === Z.css(t, "display") || !Z.contains(t.ownerDocument, t)
                },
                Ce = /^(?:checkbox|radio)$/i;
            ! function() {
                var t = J.createDocumentFragment(),
                    e = t.appendChild(J.createElement("div")),
                    i = J.createElement("input");
                i.setAttribute("type", "radio"), i.setAttribute("checked", "checked"), i.setAttribute("name", "t"), e.appendChild(i), G.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", G.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
            }();
            var Se = "undefined";
            G.focusinBubbles = "onfocusin" in t;
            var $e = /^key/,
                Ee = /^(?:mouse|pointer|contextmenu)|click/,
                Ae = /^(?:focusinfocus|focusoutblur)$/,
                Ne = /^([^.]*)(?:\.(.+)|)$/;
            Z.event = {
                global: {},
                add: function(t, e, i, n, o) {
                    var s, r, a, l, c, d, u, p, h, f, g, v = me.get(t);
                    if (v)
                        for (i.handler && (s = i, i = s.handler, o = s.selector), i.guid || (i.guid = Z.guid++), (l = v.events) || (l = v.events = {}), (r = v.handle) || (r = v.handle = function(e) {
                                return typeof Z !== Se && Z.event.triggered !== e.type ? Z.event.dispatch.apply(t, arguments) : void 0
                            }), e = (e || "").match(he) || [""], c = e.length; c--;) a = Ne.exec(e[c]) || [], h = g = a[1], f = (a[2] || "").split(".").sort(), h && (u = Z.event.special[h] || {}, h = (o ? u.delegateType : u.bindType) || h, u = Z.event.special[h] || {}, d = Z.extend({
                            type: h,
                            origType: g,
                            data: n,
                            handler: i,
                            guid: i.guid,
                            selector: o,
                            needsContext: o && Z.expr.match.needsContext.test(o),
                            namespace: f.join(".")
                        }, s), (p = l[h]) || (p = l[h] = [], p.delegateCount = 0, u.setup && u.setup.call(t, n, f, r) !== !1 || t.addEventListener && t.addEventListener(h, r, !1)), u.add && (u.add.call(t, d), d.handler.guid || (d.handler.guid = i.guid)), o ? p.splice(p.delegateCount++, 0, d) : p.push(d), Z.event.global[h] = !0)
                },
                remove: function(t, e, i, n, o) {
                    var s, r, a, l, c, d, u, p, h, f, g, v = me.hasData(t) && me.get(t);
                    if (v && (l = v.events)) {
                        for (e = (e || "").match(he) || [""], c = e.length; c--;)
                            if (a = Ne.exec(e[c]) || [], h = g = a[1], f = (a[2] || "").split(".").sort(), h) {
                                for (u = Z.event.special[h] || {}, h = (n ? u.delegateType : u.bindType) || h, p = l[h] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), r = s = p.length; s--;) d = p[s], !o && g !== d.origType || i && i.guid !== d.guid || a && !a.test(d.namespace) || n && n !== d.selector && ("**" !== n || !d.selector) || (p.splice(s, 1), d.selector && p.delegateCount--, u.remove && u.remove.call(t, d));
                                r && !p.length && (u.teardown && u.teardown.call(t, f, v.handle) !== !1 || Z.removeEvent(t, h, v.handle), delete l[h])
                            } else
                                for (h in l) Z.event.remove(t, h + e[c], i, n, !0);
                        Z.isEmptyObject(l) && (delete v.handle, me.remove(t, "events"))
                    }
                },
                trigger: function(e, i, n, o) {
                    var s, r, a, l, c, d, u, p = [n || J],
                        h = Y.call(e, "type") ? e.type : e,
                        f = Y.call(e, "namespace") ? e.namespace.split(".") : [];
                    if (r = a = n = n || J, 3 !== n.nodeType && 8 !== n.nodeType && !Ae.test(h + Z.event.triggered) && (h.indexOf(".") >= 0 && (f = h.split("."), h = f.shift(), f.sort()), c = h.indexOf(":") < 0 && "on" + h, e = e[Z.expando] ? e : new Z.Event(h, "object" == typeof e && e), e.isTrigger = o ? 2 : 3, e.namespace = f.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), i = null == i ? [e] : Z.makeArray(i, [e]), u = Z.event.special[h] || {}, o || !u.trigger || u.trigger.apply(n, i) !== !1)) {
                        if (!o && !u.noBubble && !Z.isWindow(n)) {
                            for (l = u.delegateType || h, Ae.test(l + h) || (r = r.parentNode); r; r = r.parentNode) p.push(r), a = r;
                            a === (n.ownerDocument || J) && p.push(a.defaultView || a.parentWindow || t)
                        }
                        for (s = 0;
                            (r = p[s++]) && !e.isPropagationStopped();) e.type = s > 1 ? l : u.bindType || h, d = (me.get(r, "events") || {})[e.type] && me.get(r, "handle"), d && d.apply(r, i), d = c && r[c], d && d.apply && Z.acceptData(r) && (e.result = d.apply(r, i), e.result === !1 && e.preventDefault());
                        return e.type = h, o || e.isDefaultPrevented() || u._default && u._default.apply(p.pop(), i) !== !1 || !Z.acceptData(n) || c && Z.isFunction(n[h]) && !Z.isWindow(n) && (a = n[c], a && (n[c] = null), Z.event.triggered = h, n[h](), Z.event.triggered = void 0, a && (n[c] = a)), e.result
                    }
                },
                dispatch: function(t) {
                    t = Z.event.fix(t);
                    var e, i, n, o, s, r = [],
                        a = B.call(arguments),
                        l = (me.get(this, "events") || {})[t.type] || [],
                        c = Z.event.special[t.type] || {};
                    if (a[0] = t, t.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, t) !== !1) {
                        for (r = Z.event.handlers.call(this, t, l), e = 0;
                            (o = r[e++]) && !t.isPropagationStopped();)
                            for (t.currentTarget = o.elem, i = 0;
                                (s = o.handlers[i++]) && !t.isImmediatePropagationStopped();)(!t.namespace_re || t.namespace_re.test(s.namespace)) && (t.handleObj = s, t.data = s.data, n = ((Z.event.special[s.origType] || {}).handle || s.handler).apply(o.elem, a), void 0 !== n && (t.result = n) === !1 && (t.preventDefault(), t.stopPropagation()));
                        return c.postDispatch && c.postDispatch.call(this, t), t.result
                    }
                },
                handlers: function(t, e) {
                    var i, n, o, s, r = [],
                        a = e.delegateCount,
                        l = t.target;
                    if (a && l.nodeType && (!t.button || "click" !== t.type))
                        for (; l !== this; l = l.parentNode || this)
                            if (l.disabled !== !0 || "click" !== t.type) {
                                for (n = [], i = 0; a > i; i++) s = e[i], o = s.selector + " ", void 0 === n[o] && (n[o] = s.needsContext ? Z(o, this).index(l) >= 0 : Z.find(o, this, null, [l]).length), n[o] && n.push(s);
                                n.length && r.push({
                                    elem: l,
                                    handlers: n
                                })
                            }
                    return a < e.length && r.push({
                        elem: this,
                        handlers: e.slice(a)
                    }), r
                },
                props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
                fixHooks: {},
                keyHooks: {
                    props: "char charCode key keyCode".split(" "),
                    filter: function(t, e) {
                        return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
                    }
                },
                mouseHooks: {
                    props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                    filter: function(t, e) {
                        var i, n, o, s = e.button;
                        return null == t.pageX && null != e.clientX && (i = t.target.ownerDocument || J, n = i.documentElement, o = i.body, t.pageX = e.clientX + (n && n.scrollLeft || o && o.scrollLeft || 0) - (n && n.clientLeft || o && o.clientLeft || 0), t.pageY = e.clientY + (n && n.scrollTop || o && o.scrollTop || 0) - (n && n.clientTop || o && o.clientTop || 0)), t.which || void 0 === s || (t.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), t
                    }
                },
                fix: function(t) {
                    if (t[Z.expando]) return t;
                    var e, i, n, o = t.type,
                        s = t,
                        r = this.fixHooks[o];
                    for (r || (this.fixHooks[o] = r = Ee.test(o) ? this.mouseHooks : $e.test(o) ? this.keyHooks : {}), n = r.props ? this.props.concat(r.props) : this.props, t = new Z.Event(s), e = n.length; e--;) i = n[e], t[i] = s[i];
                    return t.target || (t.target = J), 3 === t.target.nodeType && (t.target = t.target.parentNode), r.filter ? r.filter(t, s) : t
                },
                special: {
                    load: {
                        noBubble: !0
                    },
                    focus: {
                        trigger: function() {
                            return this !== u() && this.focus ? (this.focus(), !1) : void 0
                        },
                        delegateType: "focusin"
                    },
                    blur: {
                        trigger: function() {
                            return this === u() && this.blur ? (this.blur(), !1) : void 0
                        },
                        delegateType: "focusout"
                    },
                    click: {
                        trigger: function() {
                            return "checkbox" === this.type && this.click && Z.nodeName(this, "input") ? (this.click(), !1) : void 0
                        },
                        _default: function(t) {
                            return Z.nodeName(t.target, "a")
                        }
                    },
                    beforeunload: {
                        postDispatch: function(t) {
                            void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                        }
                    }
                },
                simulate: function(t, e, i, n) {
                    var o = Z.extend(new Z.Event, i, {
                        type: t,
                        isSimulated: !0,
                        originalEvent: {}
                    });
                    n ? Z.event.trigger(o, null, e) : Z.event.dispatch.call(e, o), o.isDefaultPrevented() && i.preventDefault()
                }
            }, Z.removeEvent = function(t, e, i) {
                t.removeEventListener && t.removeEventListener(e, i, !1)
            }, Z.Event = function(t, e) {
                return this instanceof Z.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? c : d) : this.type = t, e && Z.extend(this, e), this.timeStamp = t && t.timeStamp || Z.now(), void(this[Z.expando] = !0)) : new Z.Event(t, e)
            }, Z.Event.prototype = {
                isDefaultPrevented: d,
                isPropagationStopped: d,
                isImmediatePropagationStopped: d,
                preventDefault: function() {
                    var t = this.originalEvent;
                    this.isDefaultPrevented = c, t && t.preventDefault && t.preventDefault()
                },
                stopPropagation: function() {
                    var t = this.originalEvent;
                    this.isPropagationStopped = c, t && t.stopPropagation && t.stopPropagation()
                },
                stopImmediatePropagation: function() {
                    var t = this.originalEvent;
                    this.isImmediatePropagationStopped = c, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation()
                }
            }, Z.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout"
            }, function(t, e) {
                Z.event.special[t] = {
                    delegateType: e,
                    bindType: e,
                    handle: function(t) {
                        var i, n = this,
                            o = t.relatedTarget,
                            s = t.handleObj;
                        return (!o || o !== n && !Z.contains(n, o)) && (t.type = s.origType, i = s.handler.apply(this, arguments), t.type = e), i
                    }
                }
            }), G.focusinBubbles || Z.each({
                focus: "focusin",
                blur: "focusout"
            }, function(t, e) {
                var i = function(t) {
                    Z.event.simulate(e, t.target, Z.event.fix(t), !0)
                };
                Z.event.special[e] = {
                    setup: function() {
                        var n = this.ownerDocument || this,
                            o = me.access(n, e);
                        o || n.addEventListener(t, i, !0), me.access(n, e, (o || 0) + 1)
                    },
                    teardown: function() {
                        var n = this.ownerDocument || this,
                            o = me.access(n, e) - 1;
                        o ? me.access(n, e, o) : (n.removeEventListener(t, i, !0), me.remove(n, e))
                    }
                }
            }), Z.fn.extend({
                on: function(t, e, i, n, o) {
                    var s, r;
                    if ("object" == typeof t) {
                        "string" != typeof e && (i = i || e, e = void 0);
                        for (r in t) this.on(r, e, i, t[r], o);
                        return this
                    }
                    if (null == i && null == n ? (n = e, i = e = void 0) : null == n && ("string" == typeof e ? (n = i, i = void 0) : (n = i, i = e, e = void 0)), n === !1) n = d;
                    else if (!n) return this;
                    return 1 === o && (s = n, n = function(t) {
                        return Z().off(t), s.apply(this, arguments)
                    }, n.guid = s.guid || (s.guid = Z.guid++)), this.each(function() {
                        Z.event.add(this, t, n, i, e)
                    })
                },
                one: function(t, e, i, n) {
                    return this.on(t, e, i, n, 1)
                },
                off: function(t, e, i) {
                    var n, o;
                    if (t && t.preventDefault && t.handleObj) return n = t.handleObj, Z(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
                    if ("object" == typeof t) {
                        for (o in t) this.off(o, e, t[o]);
                        return this
                    }
                    return (e === !1 || "function" == typeof e) && (i = e, e = void 0), i === !1 && (i = d), this.each(function() {
                        Z.event.remove(this, t, i, e)
                    })
                },
                trigger: function(t, e) {
                    return this.each(function() {
                        Z.event.trigger(t, e, this)
                    })
                },
                triggerHandler: function(t, e) {
                    var i = this[0];
                    return i ? Z.event.trigger(t, e, i, !0) : void 0
                }
            });
            var De = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
                je = /<([\w:]+)/,
                Oe = /<|&#?\w+;/,
                He = /<(?:script|style|link)/i,
                Pe = /checked\s*(?:[^=]|=\s*.checked.)/i,
                Le = /^$|\/(?:java|ecma)script/i,
                Ie = /^true\/(.*)/,
                qe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
                Me = {
                    option: [1, "<select multiple='multiple'>", "</select>"],
                    thead: [1, "<table>", "</table>"],
                    col: [2, "<table><colgroup>", "</colgroup></table>"],
                    tr: [2, "<table><tbody>", "</tbody></table>"],
                    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                    _default: [0, "", ""]
                };
            Me.optgroup = Me.option, Me.tbody = Me.tfoot = Me.colgroup = Me.caption = Me.thead, Me.th = Me.td, Z.extend({
                clone: function(t, e, i) {
                    var n, o, s, r, a = t.cloneNode(!0),
                        l = Z.contains(t.ownerDocument, t);
                    if (!(G.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || Z.isXMLDoc(t)))
                        for (r = m(a), s = m(t), n = 0, o = s.length; o > n; n++) y(s[n], r[n]);
                    if (e)
                        if (i)
                            for (s = s || m(t), r = r || m(a), n = 0, o = s.length; o > n; n++) v(s[n], r[n]);
                        else v(t, a);
                    return r = m(a, "script"), r.length > 0 && g(r, !l && m(t, "script")), a
                },
                buildFragment: function(t, e, i, n) {
                    for (var o, s, r, a, l, c, d = e.createDocumentFragment(), u = [], p = 0, h = t.length; h > p; p++)
                        if (o = t[p], o || 0 === o)
                            if ("object" === Z.type(o)) Z.merge(u, o.nodeType ? [o] : o);
                            else if (Oe.test(o)) {
                        for (s = s || d.appendChild(e.createElement("div")), r = (je.exec(o) || ["", ""])[1].toLowerCase(), a = Me[r] || Me._default, s.innerHTML = a[1] + o.replace(De, "<$1></$2>") + a[2], c = a[0]; c--;) s = s.lastChild;
                        Z.merge(u, s.childNodes), s = d.firstChild, s.textContent = ""
                    } else u.push(e.createTextNode(o));
                    for (d.textContent = "", p = 0; o = u[p++];)
                        if ((!n || -1 === Z.inArray(o, n)) && (l = Z.contains(o.ownerDocument, o), s = m(d.appendChild(o), "script"), l && g(s), i))
                            for (c = 0; o = s[c++];) Le.test(o.type || "") && i.push(o);
                    return d
                },
                cleanData: function(t) {
                    for (var e, i, n, o, s = Z.event.special, r = 0; void 0 !== (i = t[r]); r++) {
                        if (Z.acceptData(i) && (o = i[me.expando], o && (e = me.cache[o]))) {
                            if (e.events)
                                for (n in e.events) s[n] ? Z.event.remove(i, n) : Z.removeEvent(i, n, e.handle);
                            me.cache[o] && delete me.cache[o]
                        }
                        delete ye.cache[i[ye.expando]]
                    }
                }
            }), Z.fn.extend({
                text: function(t) {
                    return ve(this, function(t) {
                        return void 0 === t ? Z.text(this) : this.empty().each(function() {
                            (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = t)
                        })
                    }, null, t, arguments.length)
                },
                append: function() {
                    return this.domManip(arguments, function(t) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var e = p(this, t);
                            e.appendChild(t)
                        }
                    })
                },
                prepend: function() {
                    return this.domManip(arguments, function(t) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var e = p(this, t);
                            e.insertBefore(t, e.firstChild)
                        }
                    })
                },
                before: function() {
                    return this.domManip(arguments, function(t) {
                        this.parentNode && this.parentNode.insertBefore(t, this)
                    })
                },
                after: function() {
                    return this.domManip(arguments, function(t) {
                        this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                    })
                },
                remove: function(t, e) {
                    for (var i, n = t ? Z.filter(t, this) : this, o = 0; null != (i = n[o]); o++) e || 1 !== i.nodeType || Z.cleanData(m(i)), i.parentNode && (e && Z.contains(i.ownerDocument, i) && g(m(i, "script")), i.parentNode.removeChild(i));
                    return this
                },
                empty: function() {
                    for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (Z.cleanData(m(t, !1)), t.textContent = "");
                    return this
                },
                clone: function(t, e) {
                    return t = null == t ? !1 : t, e = null == e ? t : e, this.map(function() {
                        return Z.clone(this, t, e)
                    })
                },
                html: function(t) {
                    return ve(this, function(t) {
                        var e = this[0] || {},
                            i = 0,
                            n = this.length;
                        if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                        if ("string" == typeof t && !He.test(t) && !Me[(je.exec(t) || ["", ""])[1].toLowerCase()]) {
                            t = t.replace(De, "<$1></$2>");
                            try {
                                for (; n > i; i++) e = this[i] || {}, 1 === e.nodeType && (Z.cleanData(m(e, !1)), e.innerHTML = t);
                                e = 0
                            } catch (o) {}
                        }
                        e && this.empty().append(t)
                    }, null, t, arguments.length)
                },
                replaceWith: function() {
                    var t = arguments[0];
                    return this.domManip(arguments, function(e) {
                        t = this.parentNode, Z.cleanData(m(this)), t && t.replaceChild(e, this)
                    }), t && (t.length || t.nodeType) ? this : this.remove()
                },
                detach: function(t) {
                    return this.remove(t, !0)
                },
                domManip: function(t, e) {
                    t = U.apply([], t);
                    var i, n, o, s, r, a, l = 0,
                        c = this.length,
                        d = this,
                        u = c - 1,
                        p = t[0],
                        g = Z.isFunction(p);
                    if (g || c > 1 && "string" == typeof p && !G.checkClone && Pe.test(p)) return this.each(function(i) {
                        var n = d.eq(i);
                        g && (t[0] = p.call(this, i, n.html())), n.domManip(t, e)
                    });
                    if (c && (i = Z.buildFragment(t, this[0].ownerDocument, !1, this), n = i.firstChild, 1 === i.childNodes.length && (i = n), n)) {
                        for (o = Z.map(m(i, "script"), h), s = o.length; c > l; l++) r = i, l !== u && (r = Z.clone(r, !0, !0), s && Z.merge(o, m(r, "script"))), e.call(this[l], r, l);
                        if (s)
                            for (a = o[o.length - 1].ownerDocument, Z.map(o, f), l = 0; s > l; l++) r = o[l], Le.test(r.type || "") && !me.access(r, "globalEval") && Z.contains(a, r) && (r.src ? Z._evalUrl && Z._evalUrl(r.src) : Z.globalEval(r.textContent.replace(qe, "")))
                    }
                    return this
                }
            }), Z.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, function(t, e) {
                Z.fn[t] = function(t) {
                    for (var i, n = [], o = Z(t), s = o.length - 1, r = 0; s >= r; r++) i = r === s ? this : this.clone(!0), Z(o[r])[e](i), _.apply(n, i.get());
                    return this.pushStack(n)
                }
            });
            var Re, Fe = {},
                We = /^margin/,
                ze = new RegExp("^(" + Te + ")(?!px)[a-z%]+$", "i"),
                Be = function(e) {
                    return e.ownerDocument.defaultView.opener ? e.ownerDocument.defaultView.getComputedStyle(e, null) : t.getComputedStyle(e, null)
                };
            ! function() {
                function e() {
                    r.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", r.innerHTML = "", o.appendChild(s);
                    var e = t.getComputedStyle(r, null);
                    i = "1%" !== e.top, n = "4px" === e.width, o.removeChild(s)
                }
                var i, n, o = J.documentElement,
                    s = J.createElement("div"),
                    r = J.createElement("div");
                r.style && (r.style.backgroundClip = "content-box", r.cloneNode(!0).style.backgroundClip = "", G.clearCloneStyle = "content-box" === r.style.backgroundClip, s.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", s.appendChild(r), t.getComputedStyle && Z.extend(G, {
                    pixelPosition: function() {
                        return e(), i
                    },
                    boxSizingReliable: function() {
                        return null == n && e(), n
                    },
                    reliableMarginRight: function() {
                        var e, i = r.appendChild(J.createElement("div"));
                        return i.style.cssText = r.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", r.style.width = "1px", o.appendChild(s), e = !parseFloat(t.getComputedStyle(i, null).marginRight), o.removeChild(s), r.removeChild(i), e
                    }
                }))
            }(), Z.swap = function(t, e, i, n) {
                var o, s, r = {};
                for (s in e) r[s] = t.style[s], t.style[s] = e[s];
                o = i.apply(t, n || []);
                for (s in e) t.style[s] = r[s];
                return o
            };
            var Ue = /^(none|table(?!-c[ea]).+)/,
                _e = new RegExp("^(" + Te + ")(.*)$", "i"),
                Xe = new RegExp("^([+-])=(" + Te + ")", "i"),
                Ve = {
                    position: "absolute",
                    visibility: "hidden",
                    display: "block"
                },
                Qe = {
                    letterSpacing: "0",
                    fontWeight: "400"
                },
                Ye = ["Webkit", "O", "Moz", "ms"];
            Z.extend({
                cssHooks: {
                    opacity: {
                        get: function(t, e) {
                            if (e) {
                                var i = T(t, "opacity");
                                return "" === i ? "1" : i
                            }
                        }
                    }
                },
                cssNumber: {
                    columnCount: !0,
                    fillOpacity: !0,
                    flexGrow: !0,
                    flexShrink: !0,
                    fontWeight: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0
                },
                cssProps: {
                    "float": "cssFloat"
                },
                style: function(t, e, i, n) {
                    if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                        var o, s, r, a = Z.camelCase(e),
                            l = t.style;
                        return e = Z.cssProps[a] || (Z.cssProps[a] = k(l, a)), r = Z.cssHooks[e] || Z.cssHooks[a], void 0 === i ? r && "get" in r && void 0 !== (o = r.get(t, !1, n)) ? o : l[e] : (s = typeof i, "string" === s && (o = Xe.exec(i)) && (i = (o[1] + 1) * o[2] + parseFloat(Z.css(t, e)), s = "number"), null != i && i === i && ("number" !== s || Z.cssNumber[a] || (i += "px"), G.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (l[e] = "inherit"), r && "set" in r && void 0 === (i = r.set(t, i, n)) || (l[e] = i)), void 0)
                    }
                },
                css: function(t, e, i, n) {
                    var o, s, r, a = Z.camelCase(e);
                    return e = Z.cssProps[a] || (Z.cssProps[a] = k(t.style, a)), r = Z.cssHooks[e] || Z.cssHooks[a], r && "get" in r && (o = r.get(t, !0, i)), void 0 === o && (o = T(t, e, n)), "normal" === o && e in Qe && (o = Qe[e]), "" === i || i ? (s = parseFloat(o), i === !0 || Z.isNumeric(s) ? s || 0 : o) : o
                }
            }), Z.each(["height", "width"], function(t, e) {
                Z.cssHooks[e] = {
                    get: function(t, i, n) {
                        return i ? Ue.test(Z.css(t, "display")) && 0 === t.offsetWidth ? Z.swap(t, Ve, function() {
                            return $(t, e, n)
                        }) : $(t, e, n) : void 0
                    },
                    set: function(t, i, n) {
                        var o = n && Be(t);
                        return C(t, i, n ? S(t, e, n, "border-box" === Z.css(t, "boxSizing", !1, o), o) : 0)
                    }
                }
            }), Z.cssHooks.marginRight = x(G.reliableMarginRight, function(t, e) {
                return e ? Z.swap(t, {
                    display: "inline-block"
                }, T, [t, "marginRight"]) : void 0
            }), Z.each({
                margin: "",
                padding: "",
                border: "Width"
            }, function(t, e) {
                Z.cssHooks[t + e] = {
                    expand: function(i) {
                        for (var n = 0, o = {}, s = "string" == typeof i ? i.split(" ") : [i]; 4 > n; n++) o[t + xe[n] + e] = s[n] || s[n - 2] || s[0];
                        return o
                    }
                }, We.test(t) || (Z.cssHooks[t + e].set = C)
            }), Z.fn.extend({
                css: function(t, e) {
                    return ve(this, function(t, e, i) {
                        var n, o, s = {},
                            r = 0;
                        if (Z.isArray(e)) {
                            for (n = Be(t), o = e.length; o > r; r++) s[e[r]] = Z.css(t, e[r], !1, n);
                            return s
                        }
                        return void 0 !== i ? Z.style(t, e, i) : Z.css(t, e)
                    }, t, e, arguments.length > 1)
                },
                show: function() {
                    return E(this, !0)
                },
                hide: function() {
                    return E(this)
                },
                toggle: function(t) {
                    return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                        ke(this) ? Z(this).show() : Z(this).hide()
                    })
                }
            }), Z.Tween = A, A.prototype = {
                constructor: A,
                init: function(t, e, i, n, o, s) {
                    this.elem = t, this.prop = i, this.easing = o || "swing", this.options = e, this.start = this.now = this.cur(), this.end = n, this.unit = s || (Z.cssNumber[i] ? "" : "px")
                },
                cur: function() {
                    var t = A.propHooks[this.prop];
                    return t && t.get ? t.get(this) : A.propHooks._default.get(this)
                },
                run: function(t) {
                    var e, i = A.propHooks[this.prop];
                    return this.pos = e = this.options.duration ? Z.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : A.propHooks._default.set(this), this
                }
            }, A.prototype.init.prototype = A.prototype, A.propHooks = {
                _default: {
                    get: function(t) {
                        var e;
                        return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = Z.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop]
                    },
                    set: function(t) {
                        Z.fx.step[t.prop] ? Z.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[Z.cssProps[t.prop]] || Z.cssHooks[t.prop]) ? Z.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
                    }
                }
            }, A.propHooks.scrollTop = A.propHooks.scrollLeft = {
                set: function(t) {
                    t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
                }
            }, Z.easing = {
                linear: function(t) {
                    return t
                },
                swing: function(t) {
                    return .5 - Math.cos(t * Math.PI) / 2
                }
            }, Z.fx = A.prototype.init, Z.fx.step = {};
            var Ge, Je, Ke = /^(?:toggle|show|hide)$/,
                Ze = new RegExp("^(?:([+-])=|)(" + Te + ")([a-z%]*)$", "i"),
                ti = /queueHooks$/,
                ei = [O],
                ii = {
                    "*": [function(t, e) {
                        var i = this.createTween(t, e),
                            n = i.cur(),
                            o = Ze.exec(e),
                            s = o && o[3] || (Z.cssNumber[t] ? "" : "px"),
                            r = (Z.cssNumber[t] || "px" !== s && +n) && Ze.exec(Z.css(i.elem, t)),
                            a = 1,
                            l = 20;
                        if (r && r[3] !== s) {
                            s = s || r[3], o = o || [], r = +n || 1;
                            do a = a || ".5", r /= a, Z.style(i.elem, t, r + s); while (a !== (a = i.cur() / n) && 1 !== a && --l)
                        }
                        return o && (r = i.start = +r || +n || 0, i.unit = s, i.end = o[1] ? r + (o[1] + 1) * o[2] : +o[2]), i
                    }]
                };
            Z.Animation = Z.extend(P, {
                    tweener: function(t, e) {
                        Z.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
                        for (var i, n = 0, o = t.length; o > n; n++) i = t[n], ii[i] = ii[i] || [], ii[i].unshift(e)
                    },
                    prefilter: function(t, e) {
                        e ? ei.unshift(t) : ei.push(t)
                    }
                }), Z.speed = function(t, e, i) {
                    var n = t && "object" == typeof t ? Z.extend({}, t) : {
                        complete: i || !i && e || Z.isFunction(t) && t,
                        duration: t,
                        easing: i && e || e && !Z.isFunction(e) && e
                    };
                    return n.duration = Z.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in Z.fx.speeds ? Z.fx.speeds[n.duration] : Z.fx.speeds._default, (null == n.queue || n.queue === !0) && (n.queue = "fx"), n.old = n.complete, n.complete = function() {
                        Z.isFunction(n.old) && n.old.call(this), n.queue && Z.dequeue(this, n.queue)
                    }, n
                }, Z.fn.extend({
                    fadeTo: function(t, e, i, n) {
                        return this.filter(ke).css("opacity", 0).show().end().animate({
                            opacity: e
                        }, t, i, n)
                    },
                    animate: function(t, e, i, n) {
                        var o = Z.isEmptyObject(t),
                            s = Z.speed(e, i, n),
                            r = function() {
                                var e = P(this, Z.extend({}, t), s);
                                (o || me.get(this, "finish")) && e.stop(!0)
                            };
                        return r.finish = r, o || s.queue === !1 ? this.each(r) : this.queue(s.queue, r)
                    },
                    stop: function(t, e, i) {
                        var n = function(t) {
                            var e = t.stop;
                            delete t.stop, e(i)
                        };
                        return "string" != typeof t && (i = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function() {
                            var e = !0,
                                o = null != t && t + "queueHooks",
                                s = Z.timers,
                                r = me.get(this);
                            if (o) r[o] && r[o].stop && n(r[o]);
                            else
                                for (o in r) r[o] && r[o].stop && ti.test(o) && n(r[o]);
                            for (o = s.length; o--;) s[o].elem !== this || null != t && s[o].queue !== t || (s[o].anim.stop(i), e = !1, s.splice(o, 1));
                            (e || !i) && Z.dequeue(this, t)
                        })
                    },
                    finish: function(t) {
                        return t !== !1 && (t = t || "fx"), this.each(function() {
                            var e, i = me.get(this),
                                n = i[t + "queue"],
                                o = i[t + "queueHooks"],
                                s = Z.timers,
                                r = n ? n.length : 0;
                            for (i.finish = !0, Z.queue(this, t, []), o && o.stop && o.stop.call(this, !0), e = s.length; e--;) s[e].elem === this && s[e].queue === t && (s[e].anim.stop(!0), s.splice(e, 1));
                            for (e = 0; r > e; e++) n[e] && n[e].finish && n[e].finish.call(this);
                            delete i.finish
                        })
                    }
                }), Z.each(["toggle", "show", "hide"], function(t, e) {
                    var i = Z.fn[e];
                    Z.fn[e] = function(t, n, o) {
                        return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(D(e, !0), t, n, o)
                    }
                }), Z.each({
                    slideDown: D("show"),
                    slideUp: D("hide"),
                    slideToggle: D("toggle"),
                    fadeIn: {
                        opacity: "show"
                    },
                    fadeOut: {
                        opacity: "hide"
                    },
                    fadeToggle: {
                        opacity: "toggle"
                    }
                }, function(t, e) {
                    Z.fn[t] = function(t, i, n) {
                        return this.animate(e, t, i, n)
                    }
                }), Z.timers = [], Z.fx.tick = function() {
                    var t, e = 0,
                        i = Z.timers;
                    for (Ge = Z.now(); e < i.length; e++) t = i[e], t() || i[e] !== t || i.splice(e--, 1);
                    i.length || Z.fx.stop(), Ge = void 0
                }, Z.fx.timer = function(t) {
                    Z.timers.push(t), t() ? Z.fx.start() : Z.timers.pop()
                }, Z.fx.interval = 13, Z.fx.start = function() {
                    Je || (Je = setInterval(Z.fx.tick, Z.fx.interval))
                }, Z.fx.stop = function() {
                    clearInterval(Je), Je = null
                }, Z.fx.speeds = {
                    slow: 600,
                    fast: 200,
                    _default: 400
                }, Z.fn.delay = function(t, e) {
                    return t = Z.fx ? Z.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function(e, i) {
                        var n = setTimeout(e, t);
                        i.stop = function() {
                            clearTimeout(n)
                        }
                    })
                },
                function() {
                    var t = J.createElement("input"),
                        e = J.createElement("select"),
                        i = e.appendChild(J.createElement("option"));
                    t.type = "checkbox", G.checkOn = "" !== t.value, G.optSelected = i.selected, e.disabled = !0, G.optDisabled = !i.disabled, t = J.createElement("input"), t.value = "t", t.type = "radio", G.radioValue = "t" === t.value
                }();
            var ni, oi, si = Z.expr.attrHandle;
            Z.fn.extend({
                attr: function(t, e) {
                    return ve(this, Z.attr, t, e, arguments.length > 1)
                },
                removeAttr: function(t) {
                    return this.each(function() {
                        Z.removeAttr(this, t)
                    })
                }
            }), Z.extend({
                attr: function(t, e, i) {
                    var n, o, s = t.nodeType;
                    if (t && 3 !== s && 8 !== s && 2 !== s) return typeof t.getAttribute === Se ? Z.prop(t, e, i) : (1 === s && Z.isXMLDoc(t) || (e = e.toLowerCase(), n = Z.attrHooks[e] || (Z.expr.match.bool.test(e) ? oi : ni)), void 0 === i ? n && "get" in n && null !== (o = n.get(t, e)) ? o : (o = Z.find.attr(t, e), null == o ? void 0 : o) : null !== i ? n && "set" in n && void 0 !== (o = n.set(t, i, e)) ? o : (t.setAttribute(e, i + ""), i) : void Z.removeAttr(t, e))
                },
                removeAttr: function(t, e) {
                    var i, n, o = 0,
                        s = e && e.match(he);
                    if (s && 1 === t.nodeType)
                        for (; i = s[o++];) n = Z.propFix[i] || i, Z.expr.match.bool.test(i) && (t[n] = !1), t.removeAttribute(i)
                },
                attrHooks: {
                    type: {
                        set: function(t, e) {
                            if (!G.radioValue && "radio" === e && Z.nodeName(t, "input")) {
                                var i = t.value;
                                return t.setAttribute("type", e), i && (t.value = i), e
                            }
                        }
                    }
                }
            }), oi = {
                set: function(t, e, i) {
                    return e === !1 ? Z.removeAttr(t, i) : t.setAttribute(i, i), i
                }
            }, Z.each(Z.expr.match.bool.source.match(/\w+/g), function(t, e) {
                var i = si[e] || Z.find.attr;
                si[e] = function(t, e, n) {
                    var o, s;
                    return n || (s = si[e], si[e] = o, o = null != i(t, e, n) ? e.toLowerCase() : null, si[e] = s), o
                }
            });
            var ri = /^(?:input|select|textarea|button)$/i;
            Z.fn.extend({
                prop: function(t, e) {
                    return ve(this, Z.prop, t, e, arguments.length > 1)
                },
                removeProp: function(t) {
                    return this.each(function() {
                        delete this[Z.propFix[t] || t]
                    })
                }
            }), Z.extend({
                propFix: {
                    "for": "htmlFor",
                    "class": "className"
                },
                prop: function(t, e, i) {
                    var n, o, s, r = t.nodeType;
                    if (t && 3 !== r && 8 !== r && 2 !== r) return s = 1 !== r || !Z.isXMLDoc(t), s && (e = Z.propFix[e] || e, o = Z.propHooks[e]), void 0 !== i ? o && "set" in o && void 0 !== (n = o.set(t, i, e)) ? n : t[e] = i : o && "get" in o && null !== (n = o.get(t, e)) ? n : t[e]
                },
                propHooks: {
                    tabIndex: {
                        get: function(t) {
                            return t.hasAttribute("tabindex") || ri.test(t.nodeName) || t.href ? t.tabIndex : -1
                        }
                    }
                }
            }), G.optSelected || (Z.propHooks.selected = {
                get: function(t) {
                    var e = t.parentNode;
                    return e && e.parentNode && e.parentNode.selectedIndex, null
                }
            }), Z.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
                Z.propFix[this.toLowerCase()] = this
            });
            var ai = /[\t\r\n\f]/g;
            Z.fn.extend({
                addClass: function(t) {
                    var e, i, n, o, s, r, a = "string" == typeof t && t,
                        l = 0,
                        c = this.length;
                    if (Z.isFunction(t)) return this.each(function(e) {
                        Z(this).addClass(t.call(this, e, this.className))
                    });
                    if (a)
                        for (e = (t || "").match(he) || []; c > l; l++)
                            if (i = this[l], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(ai, " ") : " ")) {
                                for (s = 0; o = e[s++];) n.indexOf(" " + o + " ") < 0 && (n += o + " ");
                                r = Z.trim(n), i.className !== r && (i.className = r)
                            }
                    return this
                },
                removeClass: function(t) {
                    var e, i, n, o, s, r, a = 0 === arguments.length || "string" == typeof t && t,
                        l = 0,
                        c = this.length;
                    if (Z.isFunction(t)) return this.each(function(e) {
                        Z(this).removeClass(t.call(this, e, this.className))
                    });
                    if (a)
                        for (e = (t || "").match(he) || []; c > l; l++)
                            if (i = this[l], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(ai, " ") : "")) {
                                for (s = 0; o = e[s++];)
                                    for (; n.indexOf(" " + o + " ") >= 0;) n = n.replace(" " + o + " ", " ");
                                r = t ? Z.trim(n) : "", i.className !== r && (i.className = r)
                            }
                    return this
                },
                toggleClass: function(t, e) {
                    var i = typeof t;
                    return "boolean" == typeof e && "string" === i ? e ? this.addClass(t) : this.removeClass(t) : this.each(Z.isFunction(t) ? function(i) {
                        Z(this).toggleClass(t.call(this, i, this.className, e), e)
                    } : function() {
                        if ("string" === i)
                            for (var e, n = 0, o = Z(this), s = t.match(he) || []; e = s[n++];) o.hasClass(e) ? o.removeClass(e) : o.addClass(e);
                        else(i === Se || "boolean" === i) && (this.className && me.set(this, "__className__", this.className), this.className = this.className || t === !1 ? "" : me.get(this, "__className__") || "")
                    })
                },
                hasClass: function(t) {
                    for (var e = " " + t + " ", i = 0, n = this.length; n > i; i++)
                        if (1 === this[i].nodeType && (" " + this[i].className + " ").replace(ai, " ").indexOf(e) >= 0) return !0;
                    return !1
                }
            });
            var li = /\r/g;
            Z.fn.extend({
                val: function(t) {
                    var e, i, n, o = this[0]; {
                        if (arguments.length) return n = Z.isFunction(t), this.each(function(i) {
                            var o;
                            1 === this.nodeType && (o = n ? t.call(this, i, Z(this).val()) : t, null == o ? o = "" : "number" == typeof o ? o += "" : Z.isArray(o) && (o = Z.map(o, function(t) {
                                return null == t ? "" : t + ""
                            })), e = Z.valHooks[this.type] || Z.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, o, "value") || (this.value = o))
                        });
                        if (o) return e = Z.valHooks[o.type] || Z.valHooks[o.nodeName.toLowerCase()], e && "get" in e && void 0 !== (i = e.get(o, "value")) ? i : (i = o.value, "string" == typeof i ? i.replace(li, "") : null == i ? "" : i)
                    }
                }
            }), Z.extend({
                valHooks: {
                    option: {
                        get: function(t) {
                            var e = Z.find.attr(t, "value");
                            return null != e ? e : Z.trim(Z.text(t))
                        }
                    },
                    select: {
                        get: function(t) {
                            for (var e, i, n = t.options, o = t.selectedIndex, s = "select-one" === t.type || 0 > o, r = s ? null : [], a = s ? o + 1 : n.length, l = 0 > o ? a : s ? o : 0; a > l; l++)
                                if (i = n[l], !(!i.selected && l !== o || (G.optDisabled ? i.disabled : null !== i.getAttribute("disabled")) || i.parentNode.disabled && Z.nodeName(i.parentNode, "optgroup"))) {
                                    if (e = Z(i).val(), s) return e;
                                    r.push(e)
                                }
                            return r
                        },
                        set: function(t, e) {
                            for (var i, n, o = t.options, s = Z.makeArray(e), r = o.length; r--;) n = o[r], (n.selected = Z.inArray(n.value, s) >= 0) && (i = !0);
                            return i || (t.selectedIndex = -1), s
                        }
                    }
                }
            }), Z.each(["radio", "checkbox"], function() {
                Z.valHooks[this] = {
                    set: function(t, e) {
                        return Z.isArray(e) ? t.checked = Z.inArray(Z(t).val(), e) >= 0 : void 0
                    }
                }, G.checkOn || (Z.valHooks[this].get = function(t) {
                    return null === t.getAttribute("value") ? "on" : t.value
                })
            }), Z.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
                Z.fn[e] = function(t, i) {
                    return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e)
                }
            }), Z.fn.extend({
                hover: function(t, e) {
                    return this.mouseenter(t).mouseleave(e || t)
                },
                bind: function(t, e, i) {
                    return this.on(t, null, e, i)
                },
                unbind: function(t, e) {
                    return this.off(t, null, e)
                },
                delegate: function(t, e, i, n) {
                    return this.on(e, t, i, n)
                },
                undelegate: function(t, e, i) {
                    return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
                }
            });
            var ci = Z.now(),
                di = /\?/;
            Z.parseJSON = function(t) {
                return JSON.parse(t + "")
            }, Z.parseXML = function(t) {
                var e, i;
                if (!t || "string" != typeof t) return null;
                try {
                    i = new DOMParser, e = i.parseFromString(t, "text/xml")
                } catch (n) {
                    e = void 0
                }
                return (!e || e.getElementsByTagName("parsererror").length) && Z.error("Invalid XML: " + t), e
            };
            var ui = /#.*$/,
                pi = /([?&])_=[^&]*/,
                hi = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                fi = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
                gi = /^(?:GET|HEAD)$/,
                vi = /^\/\//,
                mi = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
                yi = {},
                bi = {},
                wi = "*/".concat("*"),
                Ti = t.location.href,
                xi = mi.exec(Ti.toLowerCase()) || [];
            Z.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: Ti,
                    type: "GET",
                    isLocal: fi.test(xi[1]),
                    global: !0,
                    processData: !0,
                    async: !0,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: {
                        "*": wi,
                        text: "text/plain",
                        html: "text/html",
                        xml: "application/xml, text/xml",
                        json: "application/json, text/javascript"
                    },
                    contents: {
                        xml: /xml/,
                        html: /html/,
                        json: /json/
                    },
                    responseFields: {
                        xml: "responseXML",
                        text: "responseText",
                        json: "responseJSON"
                    },
                    converters: {
                        "* text": String,
                        "text html": !0,
                        "text json": Z.parseJSON,
                        "text xml": Z.parseXML
                    },
                    flatOptions: {
                        url: !0,
                        context: !0
                    }
                },
                ajaxSetup: function(t, e) {
                    return e ? q(q(t, Z.ajaxSettings), e) : q(Z.ajaxSettings, t)
                },
                ajaxPrefilter: L(yi),
                ajaxTransport: L(bi),
                ajax: function(t, e) {
                    function i(t, e, i, r) {
                        var l, d, m, y, w, x = e;
                        2 !== b && (b = 2, a && clearTimeout(a), n = void 0, s = r || "", T.readyState = t > 0 ? 4 : 0, l = t >= 200 && 300 > t || 304 === t, i && (y = M(u, T, i)), y = R(u, y, T, l), l ? (u.ifModified && (w = T.getResponseHeader("Last-Modified"), w && (Z.lastModified[o] = w), w = T.getResponseHeader("etag"), w && (Z.etag[o] = w)), 204 === t || "HEAD" === u.type ? x = "nocontent" : 304 === t ? x = "notmodified" : (x = y.state, d = y.data, m = y.error, l = !m)) : (m = x, (t || !x) && (x = "error", 0 > t && (t = 0))), T.status = t, T.statusText = (e || x) + "", l ? f.resolveWith(p, [d, x, T]) : f.rejectWith(p, [T, x, m]), T.statusCode(v), v = void 0, c && h.trigger(l ? "ajaxSuccess" : "ajaxError", [T, u, l ? d : m]), g.fireWith(p, [T, x]), c && (h.trigger("ajaxComplete", [T, u]), --Z.active || Z.event.trigger("ajaxStop")))
                    }
                    "object" == typeof t && (e = t, t = void 0), e = e || {};
                    var n, o, s, r, a, l, c, d, u = Z.ajaxSetup({}, e),
                        p = u.context || u,
                        h = u.context && (p.nodeType || p.jquery) ? Z(p) : Z.event,
                        f = Z.Deferred(),
                        g = Z.Callbacks("once memory"),
                        v = u.statusCode || {},
                        m = {},
                        y = {},
                        b = 0,
                        w = "canceled",
                        T = {
                            readyState: 0,
                            getResponseHeader: function(t) {
                                var e;
                                if (2 === b) {
                                    if (!r)
                                        for (r = {}; e = hi.exec(s);) r[e[1].toLowerCase()] = e[2];
                                    e = r[t.toLowerCase()]
                                }
                                return null == e ? null : e
                            },
                            getAllResponseHeaders: function() {
                                return 2 === b ? s : null
                            },
                            setRequestHeader: function(t, e) {
                                var i = t.toLowerCase();
                                return b || (t = y[i] = y[i] || t, m[t] = e), this
                            },
                            overrideMimeType: function(t) {
                                return b || (u.mimeType = t), this
                            },
                            statusCode: function(t) {
                                var e;
                                if (t)
                                    if (2 > b)
                                        for (e in t) v[e] = [v[e], t[e]];
                                    else T.always(t[T.status]);
                                return this
                            },
                            abort: function(t) {
                                var e = t || w;
                                return n && n.abort(e), i(0, e), this
                            }
                        };
                    if (f.promise(T).complete = g.add, T.success = T.done, T.error = T.fail, u.url = ((t || u.url || Ti) + "").replace(ui, "").replace(vi, xi[1] + "//"), u.type = e.method || e.type || u.method || u.type, u.dataTypes = Z.trim(u.dataType || "*").toLowerCase().match(he) || [""], null == u.crossDomain && (l = mi.exec(u.url.toLowerCase()), u.crossDomain = !(!l || l[1] === xi[1] && l[2] === xi[2] && (l[3] || ("http:" === l[1] ? "80" : "443")) === (xi[3] || ("http:" === xi[1] ? "80" : "443")))), u.data && u.processData && "string" != typeof u.data && (u.data = Z.param(u.data, u.traditional)), I(yi, u, e, T), 2 === b) return T;
                    c = Z.event && u.global, c && 0 === Z.active++ && Z.event.trigger("ajaxStart"), u.type = u.type.toUpperCase(), u.hasContent = !gi.test(u.type), o = u.url, u.hasContent || (u.data && (o = u.url += (di.test(o) ? "&" : "?") + u.data, delete u.data), u.cache === !1 && (u.url = pi.test(o) ? o.replace(pi, "$1_=" + ci++) : o + (di.test(o) ? "&" : "?") + "_=" + ci++)), u.ifModified && (Z.lastModified[o] && T.setRequestHeader("If-Modified-Since", Z.lastModified[o]), Z.etag[o] && T.setRequestHeader("If-None-Match", Z.etag[o])), (u.data && u.hasContent && u.contentType !== !1 || e.contentType) && T.setRequestHeader("Content-Type", u.contentType), T.setRequestHeader("Accept", u.dataTypes[0] && u.accepts[u.dataTypes[0]] ? u.accepts[u.dataTypes[0]] + ("*" !== u.dataTypes[0] ? ", " + wi + "; q=0.01" : "") : u.accepts["*"]);
                    for (d in u.headers) T.setRequestHeader(d, u.headers[d]);
                    if (u.beforeSend && (u.beforeSend.call(p, T, u) === !1 || 2 === b)) return T.abort();
                    w = "abort";
                    for (d in {
                            success: 1,
                            error: 1,
                            complete: 1
                        }) T[d](u[d]);
                    if (n = I(bi, u, e, T)) {
                        T.readyState = 1, c && h.trigger("ajaxSend", [T, u]), u.async && u.timeout > 0 && (a = setTimeout(function() {
                            T.abort("timeout")
                        }, u.timeout));
                        try {
                            b = 1, n.send(m, i)
                        } catch (x) {
                            if (!(2 > b)) throw x;
                            i(-1, x)
                        }
                    } else i(-1, "No Transport");
                    return T
                },
                getJSON: function(t, e, i) {
                    return Z.get(t, e, i, "json")
                },
                getScript: function(t, e) {
                    return Z.get(t, void 0, e, "script")
                }
            }), Z.each(["get", "post"], function(t, e) {
                Z[e] = function(t, i, n, o) {
                    return Z.isFunction(i) && (o = o || n, n = i, i = void 0), Z.ajax({
                        url: t,
                        type: e,
                        dataType: o,
                        data: i,
                        success: n
                    })
                }
            }), Z._evalUrl = function(t) {
                return Z.ajax({
                    url: t,
                    type: "GET",
                    dataType: "script",
                    async: !1,
                    global: !1,
                    "throws": !0
                })
            }, Z.fn.extend({
                wrapAll: function(t) {
                    var e;
                    return Z.isFunction(t) ? this.each(function(e) {
                        Z(this).wrapAll(t.call(this, e))
                    }) : (this[0] && (e = Z(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                        for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                        return t
                    }).append(this)), this)
                },
                wrapInner: function(t) {
                    return this.each(Z.isFunction(t) ? function(e) {
                        Z(this).wrapInner(t.call(this, e))
                    } : function() {
                        var e = Z(this),
                            i = e.contents();
                        i.length ? i.wrapAll(t) : e.append(t)
                    })
                },
                wrap: function(t) {
                    var e = Z.isFunction(t);
                    return this.each(function(i) {
                        Z(this).wrapAll(e ? t.call(this, i) : t)
                    })
                },
                unwrap: function() {
                    return this.parent().each(function() {
                        Z.nodeName(this, "body") || Z(this).replaceWith(this.childNodes)
                    }).end()
                }
            }), Z.expr.filters.hidden = function(t) {
                return t.offsetWidth <= 0 && t.offsetHeight <= 0
            }, Z.expr.filters.visible = function(t) {
                return !Z.expr.filters.hidden(t)
            };
            var ki = /%20/g,
                Ci = /\[\]$/,
                Si = /\r?\n/g,
                $i = /^(?:submit|button|image|reset|file)$/i,
                Ei = /^(?:input|select|textarea|keygen)/i;
            Z.param = function(t, e) {
                var i, n = [],
                    o = function(t, e) {
                        e = Z.isFunction(e) ? e() : null == e ? "" : e, n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
                    };
                if (void 0 === e && (e = Z.ajaxSettings && Z.ajaxSettings.traditional), Z.isArray(t) || t.jquery && !Z.isPlainObject(t)) Z.each(t, function() {
                    o(this.name, this.value)
                });
                else
                    for (i in t) F(i, t[i], e, o);
                return n.join("&").replace(ki, "+")
            }, Z.fn.extend({
                serialize: function() {
                    return Z.param(this.serializeArray())
                },
                serializeArray: function() {
                    return this.map(function() {
                        var t = Z.prop(this, "elements");
                        return t ? Z.makeArray(t) : this
                    }).filter(function() {
                        var t = this.type;
                        return this.name && !Z(this).is(":disabled") && Ei.test(this.nodeName) && !$i.test(t) && (this.checked || !Ce.test(t))
                    }).map(function(t, e) {
                        var i = Z(this).val();
                        return null == i ? null : Z.isArray(i) ? Z.map(i, function(t) {
                            return {
                                name: e.name,
                                value: t.replace(Si, "\r\n")
                            }
                        }) : {
                            name: e.name,
                            value: i.replace(Si, "\r\n")
                        }
                    }).get()
                }
            }), Z.ajaxSettings.xhr = function() {
                try {
                    return new XMLHttpRequest
                } catch (t) {}
            };
            var Ai = 0,
                Ni = {},
                Di = {
                    0: 200,
                    1223: 204
                },
                ji = Z.ajaxSettings.xhr();
            t.attachEvent && t.attachEvent("onunload", function() {
                for (var t in Ni) Ni[t]()
            }), G.cors = !!ji && "withCredentials" in ji, G.ajax = ji = !!ji, Z.ajaxTransport(function(t) {
                var e;
                return G.cors || ji && !t.crossDomain ? {
                    send: function(i, n) {
                        var o, s = t.xhr(),
                            r = ++Ai;
                        if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                            for (o in t.xhrFields) s[o] = t.xhrFields[o];
                        t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                        for (o in i) s.setRequestHeader(o, i[o]);
                        e = function(t) {
                            return function() {
                                e && (delete Ni[r], e = s.onload = s.onerror = null, "abort" === t ? s.abort() : "error" === t ? n(s.status, s.statusText) : n(Di[s.status] || s.status, s.statusText, "string" == typeof s.responseText ? {
                                    text: s.responseText
                                } : void 0, s.getAllResponseHeaders()))
                            }
                        }, s.onload = e(), s.onerror = e("error"), e = Ni[r] = e("abort");
                        try {
                            s.send(t.hasContent && t.data || null)
                        } catch (a) {
                            if (e) throw a
                        }
                    },
                    abort: function() {
                        e && e()
                    }
                } : void 0
            }), Z.ajaxSetup({
                accepts: {
                    script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                },
                contents: {
                    script: /(?:java|ecma)script/
                },
                converters: {
                    "text script": function(t) {
                        return Z.globalEval(t), t
                    }
                }
            }), Z.ajaxPrefilter("script", function(t) {
                void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
            }), Z.ajaxTransport("script", function(t) {
                if (t.crossDomain) {
                    var e, i;
                    return {
                        send: function(n, o) {
                            e = Z("<script>").prop({
                                async: !0,
                                charset: t.scriptCharset,
                                src: t.url
                            }).on("load error", i = function(t) {
                                e.remove(), i = null, t && o("error" === t.type ? 404 : 200, t.type)
                            }), J.head.appendChild(e[0])
                        },
                        abort: function() {
                            i && i()
                        }
                    }
                }
            });
            var Oi = [],
                Hi = /(=)\?(?=&|$)|\?\?/;
            Z.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function() {
                    var t = Oi.pop() || Z.expando + "_" + ci++;
                    return this[t] = !0, t
                }
            }), Z.ajaxPrefilter("json jsonp", function(e, i, n) {
                var o, s, r, a = e.jsonp !== !1 && (Hi.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && Hi.test(e.data) && "data");
                return a || "jsonp" === e.dataTypes[0] ? (o = e.jsonpCallback = Z.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Hi, "$1" + o) : e.jsonp !== !1 && (e.url += (di.test(e.url) ? "&" : "?") + e.jsonp + "=" + o), e.converters["script json"] = function() {
                    return r || Z.error(o + " was not called"), r[0]
                }, e.dataTypes[0] = "json", s = t[o], t[o] = function() {
                    r = arguments
                }, n.always(function() {
                    t[o] = s, e[o] && (e.jsonpCallback = i.jsonpCallback, Oi.push(o)), r && Z.isFunction(s) && s(r[0]), r = s = void 0
                }), "script") : void 0
            }), Z.parseHTML = function(t, e, i) {
                if (!t || "string" != typeof t) return null;
                "boolean" == typeof e && (i = e, e = !1), e = e || J;
                var n = re.exec(t),
                    o = !i && [];
                return n ? [e.createElement(n[1])] : (n = Z.buildFragment([t], e, o), o && o.length && Z(o).remove(), Z.merge([], n.childNodes))
            };
            var Pi = Z.fn.load;
            Z.fn.load = function(t, e, i) {
                if ("string" != typeof t && Pi) return Pi.apply(this, arguments);
                var n, o, s, r = this,
                    a = t.indexOf(" ");
                return a >= 0 && (n = Z.trim(t.slice(a)), t = t.slice(0, a)), Z.isFunction(e) ? (i = e, e = void 0) : e && "object" == typeof e && (o = "POST"), r.length > 0 && Z.ajax({
                    url: t,
                    type: o,
                    dataType: "html",
                    data: e
                }).done(function(t) {
                    s = arguments, r.html(n ? Z("<div>").append(Z.parseHTML(t)).find(n) : t)
                }).complete(i && function(t, e) {
                    r.each(i, s || [t.responseText, e, t])
                }), this
            }, Z.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
                Z.fn[e] = function(t) {
                    return this.on(e, t)
                }
            }), Z.expr.filters.animated = function(t) {
                return Z.grep(Z.timers, function(e) {
                    return t === e.elem
                }).length
            };
            var Li = t.document.documentElement;
            Z.offset = {
                setOffset: function(t, e, i) {
                    var n, o, s, r, a, l, c, d = Z.css(t, "position"),
                        u = Z(t),
                        p = {};
                    "static" === d && (t.style.position = "relative"), a = u.offset(), s = Z.css(t, "top"), l = Z.css(t, "left"), c = ("absolute" === d || "fixed" === d) && (s + l).indexOf("auto") > -1, c ? (n = u.position(), r = n.top, o = n.left) : (r = parseFloat(s) || 0, o = parseFloat(l) || 0), Z.isFunction(e) && (e = e.call(t, i, a)), null != e.top && (p.top = e.top - a.top + r), null != e.left && (p.left = e.left - a.left + o), "using" in e ? e.using.call(t, p) : u.css(p)
                }
            }, Z.fn.extend({
                offset: function(t) {
                    if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                        Z.offset.setOffset(this, t, e)
                    });
                    var e, i, n = this[0],
                        o = {
                            top: 0,
                            left: 0
                        },
                        s = n && n.ownerDocument;
                    if (s) return e = s.documentElement, Z.contains(e, n) ? (typeof n.getBoundingClientRect !== Se && (o = n.getBoundingClientRect()), i = W(s), {
                        top: o.top + i.pageYOffset - e.clientTop,
                        left: o.left + i.pageXOffset - e.clientLeft
                    }) : o
                },
                position: function() {
                    if (this[0]) {
                        var t, e, i = this[0],
                            n = {
                                top: 0,
                                left: 0
                            };
                        return "fixed" === Z.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), Z.nodeName(t[0], "html") || (n = t.offset()), n.top += Z.css(t[0], "borderTopWidth", !0), n.left += Z.css(t[0], "borderLeftWidth", !0)), {
                            top: e.top - n.top - Z.css(i, "marginTop", !0),
                            left: e.left - n.left - Z.css(i, "marginLeft", !0)
                        }
                    }
                },
                offsetParent: function() {
                    return this.map(function() {
                        for (var t = this.offsetParent || Li; t && !Z.nodeName(t, "html") && "static" === Z.css(t, "position");) t = t.offsetParent;
                        return t || Li
                    })
                }
            }), Z.each({
                scrollLeft: "pageXOffset",
                scrollTop: "pageYOffset"
            }, function(e, i) {
                var n = "pageYOffset" === i;
                Z.fn[e] = function(o) {
                    return ve(this, function(e, o, s) {
                        var r = W(e);
                        return void 0 === s ? r ? r[i] : e[o] : void(r ? r.scrollTo(n ? t.pageXOffset : s, n ? s : t.pageYOffset) : e[o] = s)
                    }, e, o, arguments.length, null)
                }
            }), Z.each(["top", "left"], function(t, e) {
                Z.cssHooks[e] = x(G.pixelPosition, function(t, i) {
                    return i ? (i = T(t, e), ze.test(i) ? Z(t).position()[e] + "px" : i) : void 0
                })
            }), Z.each({
                Height: "height",
                Width: "width"
            }, function(t, e) {
                Z.each({
                    padding: "inner" + t,
                    content: e,
                    "": "outer" + t
                }, function(i, n) {
                    Z.fn[n] = function(n, o) {
                        var s = arguments.length && (i || "boolean" != typeof n),
                            r = i || (n === !0 || o === !0 ? "margin" : "border");
                        return ve(this, function(e, i, n) {
                            var o;
                            return Z.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (o = e.documentElement, Math.max(e.body["scroll" + t], o["scroll" + t], e.body["offset" + t], o["offset" + t], o["client" + t])) : void 0 === n ? Z.css(e, i, r) : Z.style(e, i, n, r)
                        }, e, s ? n : void 0, s, null)
                    }
                })
            }), Z.fn.size = function() {
                return this.length
            }, Z.fn.andSelf = Z.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
                return Z
            });
            var Ii = t.jQuery,
                qi = t.$;
            return Z.noConflict = function(e) {
                return t.$ === Z && (t.$ = qi), e && t.jQuery === Z && (t.jQuery = Ii), Z
            }, typeof e === Se && (t.jQuery = t.$ = Z), Z
        }), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(t) {
        "use strict";
        var e = t.fn.jquery.split(" ")[0].split(".");
        if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")
    }(jQuery), + function(t) {
        "use strict";

        function e() {
            var t = document.createElement("bootstrap"),
                e = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd otransitionend",
                    transition: "transitionend"
                };
            for (var i in e)
                if (void 0 !== t.style[i]) return {
                    end: e[i]
                };
            return !1
        }
        t.fn.emulateTransitionEnd = function(e) {
            var i = !1,
                n = this;
            t(this).one("bsTransitionEnd", function() {
                i = !0
            });
            var o = function() {
                i || t(n).trigger(t.support.transition.end)
            };
            return setTimeout(o, e), this
        }, t(function() {
            t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = {
                bindType: t.support.transition.end,
                delegateType: t.support.transition.end,
                handle: function(e) {
                    return t(e.target).is(this) ? e.handleObj.handler.apply(this, arguments) : void 0
                }
            })
        })
    }(jQuery), + function(t) {
        "use strict";

        function e(e) {
            return this.each(function() {
                var i = t(this),
                    o = i.data("bs.alert");
                o || i.data("bs.alert", o = new n(this)), "string" == typeof e && o[e].call(i)
            })
        }
        var i = '[data-dismiss="alert"]',
            n = function(e) {
                t(e).on("click", i, this.close)
            };
        n.VERSION = "3.3.2", n.TRANSITION_DURATION = 150, n.prototype.close = function(e) {
            function i() {
                r.detach().trigger("closed.bs.alert").remove()
            }
            var o = t(this),
                s = o.attr("data-target");
            s || (s = o.attr("href"), s = s && s.replace(/.*(?=#[^\s]*$)/, ""));
            var r = t(s);
            e && e.preventDefault(), r.length || (r = o.closest(".alert")), r.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (r.removeClass("in"), t.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", i).emulateTransitionEnd(n.TRANSITION_DURATION) : i())
        };
        var o = t.fn.alert;
        t.fn.alert = e, t.fn.alert.Constructor = n, t.fn.alert.noConflict = function() {
            return t.fn.alert = o, this
        }, t(document).on("click.bs.alert.data-api", i, n.prototype.close)
    }(jQuery), + function(t) {
        "use strict";

        function e(e) {
            return this.each(function() {
                var n = t(this),
                    o = n.data("bs.button"),
                    s = "object" == typeof e && e;
                o || n.data("bs.button", o = new i(this, s)), "toggle" == e ? o.toggle() : e && o.setState(e)
            })
        }
        var i = function(e, n) {
            this.$element = t(e), this.options = t.extend({}, i.DEFAULTS, n), this.isLoading = !1
        };
        i.VERSION = "3.3.2", i.DEFAULTS = {
            loadingText: "loading..."
        }, i.prototype.setState = function(e) {
            var i = "disabled",
                n = this.$element,
                o = n.is("input") ? "val" : "html",
                s = n.data();
            e += "Text", null == s.resetText && n.data("resetText", n[o]()), setTimeout(t.proxy(function() {
                n[o](null == s[e] ? this.options[e] : s[e]), "loadingText" == e ? (this.isLoading = !0, n.addClass(i).attr(i, i)) : this.isLoading && (this.isLoading = !1, n.removeClass(i).removeAttr(i))
            }, this), 0)
        }, i.prototype.toggle = function() {
            var t = !0,
                e = this.$element.closest('[data-toggle="buttons"]');
            if (e.length) {
                var i = this.$element.find("input");
                "radio" == i.prop("type") && (i.prop("checked") && this.$element.hasClass("active") ? t = !1 : e.find(".active").removeClass("active")), t && i.prop("checked", !this.$element.hasClass("active")).trigger("change")
            } else this.$element.attr("aria-pressed", !this.$element.hasClass("active"));
            t && this.$element.toggleClass("active")
        };
        var n = t.fn.button;
        t.fn.button = e, t.fn.button.Constructor = i, t.fn.button.noConflict = function() {
            return t.fn.button = n, this
        }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(i) {
            var n = t(i.target);
            n.hasClass("btn") || (n = n.closest(".btn")), e.call(n, "toggle"), i.preventDefault()
        }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(e) {
            t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
        })
    }(jQuery), + function(t) {
        "use strict";

        function e(e) {
            return this.each(function() {
                var n = t(this),
                    o = n.data("bs.carousel"),
                    s = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e),
                    r = "string" == typeof e ? e : s.slide;
                o || n.data("bs.carousel", o = new i(this, s)), "number" == typeof e ? o.to(e) : r ? o[r]() : s.interval && o.pause().cycle()
            })
        }
        var i = function(e, i) {
            this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = i, this.paused = this.sliding = this.interval = this.$active = this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
        };
        i.VERSION = "3.3.2", i.TRANSITION_DURATION = 600, i.DEFAULTS = {
            interval: 5e3,
            pause: "hover",
            wrap: !0,
            keyboard: !0
        }, i.prototype.keydown = function(t) {
            if (!/input|textarea/i.test(t.target.tagName)) {
                switch (t.which) {
                    case 37:
                        this.prev();
                        break;
                    case 39:
                        this.next();
                        break;
                    default:
                        return
                }
                t.preventDefault()
            }
        }, i.prototype.cycle = function(e) {
            return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
        }, i.prototype.getItemIndex = function(t) {
            return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
        }, i.prototype.getItemForDirection = function(t, e) {
            var i = this.getItemIndex(e),
                n = "prev" == t && 0 === i || "next" == t && i == this.$items.length - 1;
            if (n && !this.options.wrap) return e;
            var o = "prev" == t ? -1 : 1,
                s = (i + o) % this.$items.length;
            return this.$items.eq(s)
        }, i.prototype.to = function(t) {
            var e = this,
                i = this.getItemIndex(this.$active = this.$element.find(".item.active"));
            return t > this.$items.length - 1 || 0 > t ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
                e.to(t)
            }) : i == t ? this.pause().cycle() : this.slide(t > i ? "next" : "prev", this.$items.eq(t))
        }, i.prototype.pause = function(e) {
            return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
        }, i.prototype.next = function() {
            return this.sliding ? void 0 : this.slide("next")
        }, i.prototype.prev = function() {
            return this.sliding ? void 0 : this.slide("prev")
        }, i.prototype.slide = function(e, n) {
            var o = this.$element.find(".item.active"),
                s = n || this.getItemForDirection(e, o),
                r = this.interval,
                a = "next" == e ? "left" : "right",
                l = this;
            if (s.hasClass("active")) return this.sliding = !1;
            var c = s[0],
                d = t.Event("slide.bs.carousel", {
                    relatedTarget: c,
                    direction: a
                });
            if (this.$element.trigger(d), !d.isDefaultPrevented()) {
                if (this.sliding = !0, r && this.pause(), this.$indicators.length) {
                    this.$indicators.find(".active").removeClass("active");
                    var u = t(this.$indicators.children()[this.getItemIndex(s)]);
                    u && u.addClass("active")
                }
                var p = t.Event("slid.bs.carousel", {
                    relatedTarget: c,
                    direction: a
                });
                return t.support.transition && this.$element.hasClass("slide") ? (s.addClass(e), s[0].offsetWidth, o.addClass(a), s.addClass(a), o.one("bsTransitionEnd", function() {
                    s.removeClass([e, a].join(" ")).addClass("active"), o.removeClass(["active", a].join(" ")), l.sliding = !1, setTimeout(function() {
                        l.$element.trigger(p)
                    }, 0)
                }).emulateTransitionEnd(i.TRANSITION_DURATION)) : (o.removeClass("active"), s.addClass("active"), this.sliding = !1, this.$element.trigger(p)), r && this.cycle(), this
            }
        };
        var n = t.fn.carousel;
        t.fn.carousel = e, t.fn.carousel.Constructor = i, t.fn.carousel.noConflict = function() {
            return t.fn.carousel = n, this
        };
        var o = function(i) {
            var n, o = t(this),
                s = t(o.attr("data-target") || (n = o.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, ""));
            if (s.hasClass("carousel")) {
                var r = t.extend({}, s.data(), o.data()),
                    a = o.attr("data-slide-to");
                a && (r.interval = !1), e.call(s, r), a && s.data("bs.carousel").to(a), i.preventDefault()
            }
        };
        t(document).on("click.bs.carousel.data-api", "[data-slide]", o).on("click.bs.carousel.data-api", "[data-slide-to]", o), t(window).on("load", function() {
            t('[data-ride="carousel"]').each(function() {
                var i = t(this);
                e.call(i, i.data())
            })
        })
    }(jQuery), + function(t) {
        "use strict";

        function e(e) {
            var i, n = e.attr("data-target") || (i = e.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "");
            return t(n)
        }

        function i(e) {
            return this.each(function() {
                var i = t(this),
                    o = i.data("bs.collapse"),
                    s = t.extend({}, n.DEFAULTS, i.data(), "object" == typeof e && e);
                !o && s.toggle && "show" == e && (s.toggle = !1), o || i.data("bs.collapse", o = new n(this, s)), "string" == typeof e && o[e]()
            })
        }
        var n = function(e, i) {
            this.$element = t(e), this.options = t.extend({}, n.DEFAULTS, i), this.$trigger = t(this.options.trigger).filter('[href="#' + e.id + '"], [data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
        };
        n.VERSION = "3.3.2", n.TRANSITION_DURATION = 350, n.DEFAULTS = {
            toggle: !0,
            trigger: '[data-toggle="collapse"]'
        }, n.prototype.dimension = function() {
            var t = this.$element.hasClass("width");
            return t ? "width" : "height"
        }, n.prototype.show = function() {
            if (!this.transitioning && !this.$element.hasClass("in")) {
                var e, o = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
                if (!(o && o.length && (e = o.data("bs.collapse"), e && e.transitioning))) {
                    var s = t.Event("show.bs.collapse");
                    if (this.$element.trigger(s), !s.isDefaultPrevented()) {
                        o && o.length && (i.call(o, "hide"), e || o.data("bs.collapse", null));
                        var r = this.dimension();
                        this.$element.removeClass("collapse").addClass("collapsing")[r](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                        var a = function() {
                            this.$element.removeClass("collapsing").addClass("collapse in")[r](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                        };
                        if (!t.support.transition) return a.call(this);
                        var l = t.camelCase(["scroll", r].join("-"));
                        this.$element.one("bsTransitionEnd", t.proxy(a, this)).emulateTransitionEnd(n.TRANSITION_DURATION)[r](this.$element[0][l])
                    }
                }
            }
        }, n.prototype.hide = function() {
            if (!this.transitioning && this.$element.hasClass("in")) {
                var e = t.Event("hide.bs.collapse");
                if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                    var i = this.dimension();
                    this.$element[i](this.$element[i]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                    var o = function() {
                        this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                    };
                    return t.support.transition ? void this.$element[i](0).one("bsTransitionEnd", t.proxy(o, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : o.call(this)
                }
            }
        }, n.prototype.toggle = function() {
            this[this.$element.hasClass("in") ? "hide" : "show"]()
        }, n.prototype.getParent = function() {
            return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function(i, n) {
                var o = t(n);
                this.addAriaAndCollapsedClass(e(o), o)
            }, this)).end()
        }, n.prototype.addAriaAndCollapsedClass = function(t, e) {
            var i = t.hasClass("in");
            t.attr("aria-expanded", i), e.toggleClass("collapsed", !i).attr("aria-expanded", i)
        };
        var o = t.fn.collapse;
        t.fn.collapse = i, t.fn.collapse.Constructor = n, t.fn.collapse.noConflict = function() {
            return t.fn.collapse = o, this
        }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(n) {
            var o = t(this);
            o.attr("data-target") || n.preventDefault();
            var s = e(o),
                r = s.data("bs.collapse"),
                a = r ? "toggle" : t.extend({}, o.data(), {
                    trigger: this
                });
            i.call(s, a)
        })
    }(jQuery), + function(t) {
        "use strict";

        function e(e) {
            e && 3 === e.which || (t(o).remove(), t(s).each(function() {
                var n = t(this),
                    o = i(n),
                    s = {
                        relatedTarget: this
                    };
                o.hasClass("open") && (o.trigger(e = t.Event("hide.bs.dropdown", s)), e.isDefaultPrevented() || (n.attr("aria-expanded", "false"), o.removeClass("open").trigger("hidden.bs.dropdown", s)))
            }))
        }

        function i(e) {
            var i = e.attr("data-target");
            i || (i = e.attr("href"), i = i && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, ""));
            var n = i && t(i);
            return n && n.length ? n : e.parent()
        }

        function n(e) {
            return this.each(function() {
                var i = t(this),
                    n = i.data("bs.dropdown");
                n || i.data("bs.dropdown", n = new r(this)), "string" == typeof e && n[e].call(i)
            })
        }
        var o = ".dropdown-backdrop",
            s = '[data-toggle="dropdown"]',
            r = function(e) {
                t(e).on("click.bs.dropdown", this.toggle)
            };
        r.VERSION = "3.3.2", r.prototype.toggle = function(n) {
            var o = t(this);
            if (!o.is(".disabled, :disabled")) {
                var s = i(o),
                    r = s.hasClass("open");
                if (e(), !r) {
                    "ontouchstart" in document.documentElement && !s.closest(".navbar-nav").length && t('<div class="dropdown-backdrop"/>').insertAfter(t(this)).on("click", e);
                    var a = {
                        relatedTarget: this
                    };
                    if (s.trigger(n = t.Event("show.bs.dropdown", a)), n.isDefaultPrevented()) return;
                    o.trigger("focus").attr("aria-expanded", "true"), s.toggleClass("open").trigger("shown.bs.dropdown", a)
                }
                return !1
            }
        }, r.prototype.keydown = function(e) {
            if (/(38|40|27|32)/.test(e.which) && !/input|textarea/i.test(e.target.tagName)) {
                var n = t(this);
                if (e.preventDefault(), e.stopPropagation(), !n.is(".disabled, :disabled")) {
                    var o = i(n),
                        r = o.hasClass("open");
                    if (!r && 27 != e.which || r && 27 == e.which) return 27 == e.which && o.find(s).trigger("focus"), n.trigger("click");
                    var a = " li:not(.divider):visible a",
                        l = o.find('[role="menu"]' + a + ', [role="listbox"]' + a);
                    if (l.length) {
                        var c = l.index(e.target);
                        38 == e.which && c > 0 && c--, 40 == e.which && c < l.length - 1 && c++, ~c || (c = 0), l.eq(c).trigger("focus")
                    }
                }
            }
        };
        var a = t.fn.dropdown;
        t.fn.dropdown = n, t.fn.dropdown.Constructor = r, t.fn.dropdown.noConflict = function() {
            return t.fn.dropdown = a, this
        }, t(document).on("click.bs.dropdown.data-api", e).on("click.bs.dropdown.data-api", ".dropdown form", function(t) {
            t.stopPropagation()
        }).on("click.bs.dropdown.data-api", s, r.prototype.toggle).on("keydown.bs.dropdown.data-api", s, r.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="menu"]', r.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="listbox"]', r.prototype.keydown)
    }(jQuery), + function(t) {
        "use strict";

        function e(e, n) {
            return this.each(function() {
                var o = t(this),
                    s = o.data("bs.modal"),
                    r = t.extend({}, i.DEFAULTS, o.data(), "object" == typeof e && e);
                s || o.data("bs.modal", s = new i(this, r)), "string" == typeof e ? s[e](n) : r.show && s.show(n)
            })
        }
        var i = function(e, i) {
            this.options = i, this.$body = t(document.body), this.$element = t(e), this.$backdrop = this.isShown = null, this.scrollbarWidth = 0, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function() {
                this.$element.trigger("loaded.bs.modal")
            }, this))
        };
        i.VERSION = "3.3.2", i.TRANSITION_DURATION = 300, i.BACKDROP_TRANSITION_DURATION = 150, i.DEFAULTS = {
            backdrop: !0,
            keyboard: !0,
            show: !0
        }, i.prototype.toggle = function(t) {
            return this.isShown ? this.hide() : this.show(t)
        }, i.prototype.show = function(e) {
            var n = this,
                o = t.Event("show.bs.modal", {
                    relatedTarget: e
                });
            this.$element.trigger(o), this.isShown || o.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.backdrop(function() {
                var o = t.support.transition && n.$element.hasClass("fade");
                n.$element.parent().length || n.$element.appendTo(n.$body), n.$element.show().scrollTop(0), n.options.backdrop && n.adjustBackdrop(), n.adjustDialog(), o && n.$element[0].offsetWidth, n.$element.addClass("in").attr("aria-hidden", !1), n.enforceFocus();
                var s = t.Event("shown.bs.modal", {
                    relatedTarget: e
                });
                o ? n.$element.find(".modal-dialog").one("bsTransitionEnd", function() {
                    n.$element.trigger("focus").trigger(s)
                }).emulateTransitionEnd(i.TRANSITION_DURATION) : n.$element.trigger("focus").trigger(s)
            }))
        }, i.prototype.hide = function(e) {
            e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : this.hideModal())
        }, i.prototype.enforceFocus = function() {
            t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function(t) {
                this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
            }, this))
        }, i.prototype.escape = function() {
            this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function(t) {
                27 == t.which && this.hide()
            }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
        }, i.prototype.resize = function() {
            this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
        }, i.prototype.hideModal = function() {
            var t = this;
            this.$element.hide(), this.backdrop(function() {
                t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
            })
        }, i.prototype.removeBackdrop = function() {
            this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
        }, i.prototype.backdrop = function(e) {
            var n = this,
                o = this.$element.hasClass("fade") ? "fade" : "";
            if (this.isShown && this.options.backdrop) {
                var s = t.support.transition && o;
                if (this.$backdrop = t('<div class="modal-backdrop ' + o + '" />').prependTo(this.$element).on("click.dismiss.bs.modal", t.proxy(function(t) {
                        t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
                    }, this)), s && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
                s ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : e()
            } else if (!this.isShown && this.$backdrop) {
                this.$backdrop.removeClass("in");
                var r = function() {
                    n.removeBackdrop(), e && e()
                };
                t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", r).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : r()
            } else e && e()
        }, i.prototype.handleUpdate = function() {
            this.options.backdrop && this.adjustBackdrop(), this.adjustDialog()
        }, i.prototype.adjustBackdrop = function() {
            this.$backdrop.css("height", 0).css("height", this.$element[0].scrollHeight)
        }, i.prototype.adjustDialog = function() {
            var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
            this.$element.css({
                paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
                paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
            })
        }, i.prototype.resetAdjustments = function() {
            this.$element.css({
                paddingLeft: "",
                paddingRight: ""
            })
        }, i.prototype.checkScrollbar = function() {
            this.bodyIsOverflowing = document.body.scrollHeight > document.documentElement.clientHeight, this.scrollbarWidth = this.measureScrollbar()
        }, i.prototype.setScrollbar = function() {
            var t = parseInt(this.$body.css("padding-right") || 0, 10);
            this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
        }, i.prototype.resetScrollbar = function() {
            this.$body.css("padding-right", "")
        }, i.prototype.measureScrollbar = function() {
            var t = document.createElement("div");
            t.className = "modal-scrollbar-measure", this.$body.append(t);
            var e = t.offsetWidth - t.clientWidth;
            return this.$body[0].removeChild(t), e
        };
        var n = t.fn.modal;
        t.fn.modal = e, t.fn.modal.Constructor = i, t.fn.modal.noConflict = function() {
            return t.fn.modal = n, this
        }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(i) {
            var n = t(this),
                o = n.attr("href"),
                s = t(n.attr("data-target") || o && o.replace(/.*(?=#[^\s]+$)/, "")),
                r = s.data("bs.modal") ? "toggle" : t.extend({
                    remote: !/#/.test(o) && o
                }, s.data(), n.data());
            n.is("a") && i.preventDefault(), s.one("show.bs.modal", function(t) {
                t.isDefaultPrevented() || s.one("hidden.bs.modal", function() {
                    n.is(":visible") && n.trigger("focus")
                })
            }), e.call(s, r, this)
        })
    }(jQuery), + function(t) {
        "use strict";

        function e(e) {
            return this.each(function() {
                var n = t(this),
                    o = n.data("bs.tooltip"),
                    s = "object" == typeof e && e;
                (o || "destroy" != e) && (o || n.data("bs.tooltip", o = new i(this, s)), "string" == typeof e && o[e]())
            })
        }
        var i = function(t, e) {
            this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init("tooltip", t, e)
        };
        i.VERSION = "3.3.2", i.TRANSITION_DURATION = 150, i.DEFAULTS = {
            animation: !0,
            placement: "top",
            selector: !1,
            template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            container: !1,
            viewport: {
                selector: "body",
                padding: 0
            }
        }, i.prototype.init = function(e, i, n) {
            this.enabled = !0, this.type = e, this.$element = t(i), this.options = this.getOptions(n), this.$viewport = this.options.viewport && t(this.options.viewport.selector || this.options.viewport);
            for (var o = this.options.trigger.split(" "), s = o.length; s--;) {
                var r = o[s];
                if ("click" == r) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
                else if ("manual" != r) {
                    var a = "hover" == r ? "mouseenter" : "focusin",
                        l = "hover" == r ? "mouseleave" : "focusout";
                    this.$element.on(a + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
                }
            }
            this.options.selector ? this._options = t.extend({}, this.options, {
                trigger: "manual",
                selector: ""
            }) : this.fixTitle()
        }, i.prototype.getDefaults = function() {
            return i.DEFAULTS
        }, i.prototype.getOptions = function(e) {
            return e = t.extend({}, this.getDefaults(), this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = {
                show: e.delay,
                hide: e.delay
            }), e
        }, i.prototype.getDelegateOptions = function() {
            var e = {},
                i = this.getDefaults();
            return this._options && t.each(this._options, function(t, n) {
                i[t] != n && (e[t] = n)
            }), e
        }, i.prototype.enter = function(e) {
            var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
            return i && i.$tip && i.$tip.is(":visible") ? void(i.hoverState = "in") : (i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), clearTimeout(i.timeout), i.hoverState = "in", i.options.delay && i.options.delay.show ? void(i.timeout = setTimeout(function() {
                "in" == i.hoverState && i.show()
            }, i.options.delay.show)) : i.show())
        }, i.prototype.leave = function(e) {
            var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
            return i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), clearTimeout(i.timeout), i.hoverState = "out", i.options.delay && i.options.delay.hide ? void(i.timeout = setTimeout(function() {
                "out" == i.hoverState && i.hide()
            }, i.options.delay.hide)) : i.hide()
        }, i.prototype.show = function() {
            var e = t.Event("show.bs." + this.type);
            if (this.hasContent() && this.enabled) {
                this.$element.trigger(e);
                var n = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
                if (e.isDefaultPrevented() || !n) return;
                var o = this,
                    s = this.tip(),
                    r = this.getUID(this.type);
                this.setContent(), s.attr("id", r), this.$element.attr("aria-describedby", r), this.options.animation && s.addClass("fade");
                var a = "function" == typeof this.options.placement ? this.options.placement.call(this, s[0], this.$element[0]) : this.options.placement,
                    l = /\s?auto?\s?/i,
                    c = l.test(a);
                c && (a = a.replace(l, "") || "top"), s.detach().css({
                    top: 0,
                    left: 0,
                    display: "block"
                }).addClass(a).data("bs." + this.type, this), this.options.container ? s.appendTo(this.options.container) : s.insertAfter(this.$element);
                var d = this.getPosition(),
                    u = s[0].offsetWidth,
                    p = s[0].offsetHeight;
                if (c) {
                    var h = a,
                        f = this.options.container ? t(this.options.container) : this.$element.parent(),
                        g = this.getPosition(f);
                    a = "bottom" == a && d.bottom + p > g.bottom ? "top" : "top" == a && d.top - p < g.top ? "bottom" : "right" == a && d.right + u > g.width ? "left" : "left" == a && d.left - u < g.left ? "right" : a, s.removeClass(h).addClass(a)
                }
                var v = this.getCalculatedOffset(a, d, u, p);
                this.applyPlacement(v, a);
                var m = function() {
                    var t = o.hoverState;
                    o.$element.trigger("shown.bs." + o.type), o.hoverState = null, "out" == t && o.leave(o)
                };
                t.support.transition && this.$tip.hasClass("fade") ? s.one("bsTransitionEnd", m).emulateTransitionEnd(i.TRANSITION_DURATION) : m()
            }
        }, i.prototype.applyPlacement = function(e, i) {
            var n = this.tip(),
                o = n[0].offsetWidth,
                s = n[0].offsetHeight,
                r = parseInt(n.css("margin-top"), 10),
                a = parseInt(n.css("margin-left"), 10);
            isNaN(r) && (r = 0), isNaN(a) && (a = 0), e.top = e.top + r, e.left = e.left + a, t.offset.setOffset(n[0], t.extend({
                using: function(t) {
                    n.css({
                        top: Math.round(t.top),
                        left: Math.round(t.left)
                    })
                }
            }, e), 0), n.addClass("in");
            var l = n[0].offsetWidth,
                c = n[0].offsetHeight;
            "top" == i && c != s && (e.top = e.top + s - c);
            var d = this.getViewportAdjustedDelta(i, e, l, c);
            d.left ? e.left += d.left : e.top += d.top;
            var u = /top|bottom/.test(i),
                p = u ? 2 * d.left - o + l : 2 * d.top - s + c,
                h = u ? "offsetWidth" : "offsetHeight";
            n.offset(e), this.replaceArrow(p, n[0][h], u)
        }, i.prototype.replaceArrow = function(t, e, i) {
            this.arrow().css(i ? "left" : "top", 50 * (1 - t / e) + "%").css(i ? "top" : "left", "")
        }, i.prototype.setContent = function() {
            var t = this.tip(),
                e = this.getTitle();
            t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
        }, i.prototype.hide = function(e) {
            function n() {
                "in" != o.hoverState && s.detach(), o.$element.removeAttr("aria-describedby").trigger("hidden.bs." + o.type), e && e()
            }
            var o = this,
                s = this.tip(),
                r = t.Event("hide.bs." + this.type);
            return this.$element.trigger(r), r.isDefaultPrevented() ? void 0 : (s.removeClass("in"), t.support.transition && this.$tip.hasClass("fade") ? s.one("bsTransitionEnd", n).emulateTransitionEnd(i.TRANSITION_DURATION) : n(), this.hoverState = null, this)
        }, i.prototype.fixTitle = function() {
            var t = this.$element;
            (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
        }, i.prototype.hasContent = function() {
            return this.getTitle()
        }, i.prototype.getPosition = function(e) {
            e = e || this.$element;
            var i = e[0],
                n = "BODY" == i.tagName,
                o = i.getBoundingClientRect();
            null == o.width && (o = t.extend({}, o, {
                width: o.right - o.left,
                height: o.bottom - o.top
            }));
            var s = n ? {
                    top: 0,
                    left: 0
                } : e.offset(),
                r = {
                    scroll: n ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()
                },
                a = n ? {
                    width: t(window).width(),
                    height: t(window).height()
                } : null;
            return t.extend({}, o, r, a, s)
        }, i.prototype.getCalculatedOffset = function(t, e, i, n) {
            return "bottom" == t ? {
                top: e.top + e.height,
                left: e.left + e.width / 2 - i / 2
            } : "top" == t ? {
                top: e.top - n,
                left: e.left + e.width / 2 - i / 2
            } : "left" == t ? {
                top: e.top + e.height / 2 - n / 2,
                left: e.left - i
            } : {
                top: e.top + e.height / 2 - n / 2,
                left: e.left + e.width
            }
        }, i.prototype.getViewportAdjustedDelta = function(t, e, i, n) {
            var o = {
                top: 0,
                left: 0
            };
            if (!this.$viewport) return o;
            var s = this.options.viewport && this.options.viewport.padding || 0,
                r = this.getPosition(this.$viewport);
            if (/right|left/.test(t)) {
                var a = e.top - s - r.scroll,
                    l = e.top + s - r.scroll + n;
                a < r.top ? o.top = r.top - a : l > r.top + r.height && (o.top = r.top + r.height - l)
            } else {
                var c = e.left - s,
                    d = e.left + s + i;
                c < r.left ? o.left = r.left - c : d > r.width && (o.left = r.left + r.width - d)
            }
            return o
        }, i.prototype.getTitle = function() {
            var t, e = this.$element,
                i = this.options;
            return t = e.attr("data-original-title") || ("function" == typeof i.title ? i.title.call(e[0]) : i.title)
        }, i.prototype.getUID = function(t) {
            do t += ~~(1e6 * Math.random()); while (document.getElementById(t));
            return t
        }, i.prototype.tip = function() {
            return this.$tip = this.$tip || t(this.options.template)
        }, i.prototype.arrow = function() {
            return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
        }, i.prototype.enable = function() {
            this.enabled = !0
        }, i.prototype.disable = function() {
            this.enabled = !1
        }, i.prototype.toggleEnabled = function() {
            this.enabled = !this.enabled
        }, i.prototype.toggle = function(e) {
            var i = this;
            e && (i = t(e.currentTarget).data("bs." + this.type), i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i))), i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
        }, i.prototype.destroy = function() {
            var t = this;
            clearTimeout(this.timeout), this.hide(function() {
                t.$element.off("." + t.type).removeData("bs." + t.type)
            })
        };
        var n = t.fn.tooltip;
        t.fn.tooltip = e, t.fn.tooltip.Constructor = i, t.fn.tooltip.noConflict = function() {
            return t.fn.tooltip = n, this
        }
    }(jQuery), + function(t) {
        "use strict";

        function e(e) {
            return this.each(function() {
                var n = t(this),
                    o = n.data("bs.popover"),
                    s = "object" == typeof e && e;
                (o || "destroy" != e) && (o || n.data("bs.popover", o = new i(this, s)), "string" == typeof e && o[e]())
            })
        }
        var i = function(t, e) {
            this.init("popover", t, e)
        };
        if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
        i.VERSION = "3.3.2", i.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
        }), i.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), i.prototype.constructor = i, i.prototype.getDefaults = function() {
            return i.DEFAULTS
        }, i.prototype.setContent = function() {
            var t = this.tip(),
                e = this.getTitle(),
                i = this.getContent();
            t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof i ? "html" : "append" : "text"](i), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
        }, i.prototype.hasContent = function() {
            return this.getTitle() || this.getContent()
        }, i.prototype.getContent = function() {
            var t = this.$element,
                e = this.options;
            return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
        }, i.prototype.arrow = function() {
            return this.$arrow = this.$arrow || this.tip().find(".arrow")
        }, i.prototype.tip = function() {
            return this.$tip || (this.$tip = t(this.options.template)), this.$tip
        };
        var n = t.fn.popover;
        t.fn.popover = e, t.fn.popover.Constructor = i, t.fn.popover.noConflict = function() {
            return t.fn.popover = n, this
        }
    }(jQuery), + function(t) {
        "use strict";

        function e(i, n) {
            var o = t.proxy(this.process, this);
            this.$body = t("body"), this.$scrollElement = t(t(i).is("body") ? window : i), this.options = t.extend({}, e.DEFAULTS, n), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", o), this.refresh(), this.process()
        }

        function i(i) {
            return this.each(function() {
                var n = t(this),
                    o = n.data("bs.scrollspy"),
                    s = "object" == typeof i && i;
                o || n.data("bs.scrollspy", o = new e(this, s)), "string" == typeof i && o[i]()
            })
        }
        e.VERSION = "3.3.2", e.DEFAULTS = {
            offset: 10
        }, e.prototype.getScrollHeight = function() {
            return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
        }, e.prototype.refresh = function() {
            var e = "offset",
                i = 0;
            t.isWindow(this.$scrollElement[0]) || (e = "position", i = this.$scrollElement.scrollTop()), this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight();
            var n = this;
            this.$body.find(this.selector).map(function() {
                var n = t(this),
                    o = n.data("target") || n.attr("href"),
                    s = /^#./.test(o) && t(o);
                return s && s.length && s.is(":visible") && [
                    [s[e]().top + i, o]
                ] || null
            }).sort(function(t, e) {
                return t[0] - e[0]
            }).each(function() {
                n.offsets.push(this[0]), n.targets.push(this[1])
            })
        }, e.prototype.process = function() {
            var t, e = this.$scrollElement.scrollTop() + this.options.offset,
                i = this.getScrollHeight(),
                n = this.options.offset + i - this.$scrollElement.height(),
                o = this.offsets,
                s = this.targets,
                r = this.activeTarget;
            if (this.scrollHeight != i && this.refresh(), e >= n) return r != (t = s[s.length - 1]) && this.activate(t);
            if (r && e < o[0]) return this.activeTarget = null, this.clear();
            for (t = o.length; t--;) r != s[t] && e >= o[t] && (!o[t + 1] || e <= o[t + 1]) && this.activate(s[t])
        }, e.prototype.activate = function(e) {
            this.activeTarget = e, this.clear();
            var i = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
                n = t(i).parents("li").addClass("active");
            n.parent(".dropdown-menu").length && (n = n.closest("li.dropdown").addClass("active")), n.trigger("activate.bs.scrollspy")
        }, e.prototype.clear = function() {
            t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
        };
        var n = t.fn.scrollspy;
        t.fn.scrollspy = i, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function() {
            return t.fn.scrollspy = n, this
        }, t(window).on("load.bs.scrollspy.data-api", function() {
            t('[data-spy="scroll"]').each(function() {
                var e = t(this);
                i.call(e, e.data())
            })
        })
    }(jQuery), + function(t) {
        "use strict";

        function e(e) {
            return this.each(function() {
                var n = t(this),
                    o = n.data("bs.tab");
                o || n.data("bs.tab", o = new i(this)), "string" == typeof e && o[e]()
            })
        }
        var i = function(e) {
            this.element = t(e)
        };
        i.VERSION = "3.3.2", i.TRANSITION_DURATION = 150, i.prototype.show = function() {
            var e = this.element,
                i = e.closest("ul:not(.dropdown-menu)"),
                n = e.data("target");
            if (n || (n = e.attr("href"), n = n && n.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
                var o = i.find(".active:last a"),
                    s = t.Event("hide.bs.tab", {
                        relatedTarget: e[0]
                    }),
                    r = t.Event("show.bs.tab", {
                        relatedTarget: o[0]
                    });
                if (o.trigger(s), e.trigger(r), !r.isDefaultPrevented() && !s.isDefaultPrevented()) {
                    var a = t(n);
                    this.activate(e.closest("li"), i), this.activate(a, a.parent(), function() {
                        o.trigger({
                            type: "hidden.bs.tab",
                            relatedTarget: e[0]
                        }), e.trigger({
                            type: "shown.bs.tab",
                            relatedTarget: o[0]
                        })
                    })
                }
            }
        }, i.prototype.activate = function(e, n, o) {
            function s() {
                r.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), a ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu") && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), o && o()
            }
            var r = n.find("> .active"),
                a = o && t.support.transition && (r.length && r.hasClass("fade") || !!n.find("> .fade").length);
            r.length && a ? r.one("bsTransitionEnd", s).emulateTransitionEnd(i.TRANSITION_DURATION) : s(), r.removeClass("in")
        };
        var n = t.fn.tab;
        t.fn.tab = e, t.fn.tab.Constructor = i, t.fn.tab.noConflict = function() {
            return t.fn.tab = n, this
        };
        var o = function(i) {
            i.preventDefault(), e.call(t(this), "show")
        };
        t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', o).on("click.bs.tab.data-api", '[data-toggle="pill"]', o)
    }(jQuery), + function(t) {
        "use strict";

        function e(e) {
            return this.each(function() {
                var n = t(this),
                    o = n.data("bs.affix"),
                    s = "object" == typeof e && e;
                o || n.data("bs.affix", o = new i(this, s)), "string" == typeof e && o[e]()
            })
        }
        var i = function(e, n) {
            this.options = t.extend({}, i.DEFAULTS, n), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = this.unpin = this.pinnedOffset = null, this.checkPosition()
        };
        i.VERSION = "3.3.2", i.RESET = "affix affix-top affix-bottom", i.DEFAULTS = {
            offset: 0,
            target: window
        }, i.prototype.getState = function(t, e, i, n) {
            var o = this.$target.scrollTop(),
                s = this.$element.offset(),
                r = this.$target.height();
            if (null != i && "top" == this.affixed) return i > o ? "top" : !1;
            if ("bottom" == this.affixed) return null != i ? o + this.unpin <= s.top ? !1 : "bottom" : t - n >= o + r ? !1 : "bottom";
            var a = null == this.affixed,
                l = a ? o : s.top,
                c = a ? r : e;
            return null != i && i >= o ? "top" : null != n && l + c >= t - n ? "bottom" : !1
        }, i.prototype.getPinnedOffset = function() {
            if (this.pinnedOffset) return this.pinnedOffset;
            this.$element.removeClass(i.RESET).addClass("affix");
            var t = this.$target.scrollTop(),
                e = this.$element.offset();
            return this.pinnedOffset = e.top - t
        }, i.prototype.checkPositionWithEventLoop = function() {
            setTimeout(t.proxy(this.checkPosition, this), 1)
        }, i.prototype.checkPosition = function() {
            if (this.$element.is(":visible")) {
                var e = this.$element.height(),
                    n = this.options.offset,
                    o = n.top,
                    s = n.bottom,
                    r = t("body").height();
                "object" != typeof n && (s = o = n), "function" == typeof o && (o = n.top(this.$element)), "function" == typeof s && (s = n.bottom(this.$element));
                var a = this.getState(r, e, o, s);
                if (this.affixed != a) {
                    null != this.unpin && this.$element.css("top", "");
                    var l = "affix" + (a ? "-" + a : ""),
                        c = t.Event(l + ".bs.affix");
                    if (this.$element.trigger(c), c.isDefaultPrevented()) return;
                    this.affixed = a, this.unpin = "bottom" == a ? this.getPinnedOffset() : null, this.$element.removeClass(i.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
                }
                "bottom" == a && this.$element.offset({
                    top: r - e - s
                })
            }
        };
        var n = t.fn.affix;
        t.fn.affix = e, t.fn.affix.Constructor = i, t.fn.affix.noConflict = function() {
            return t.fn.affix = n, this
        }, t(window).on("load", function() {
            t('[data-spy="affix"]').each(function() {
                var i = t(this),
                    n = i.data();
                n.offset = n.offset || {}, null != n.offsetBottom && (n.offset.bottom = n.offsetBottom), null != n.offsetTop && (n.offset.top = n.offsetTop), e.call(i, n)
            })
        })
    }(jQuery),
    function(t) {
        "use strict";
        t.fn.fitVids = function(e) {
            var i = {
                customSelector: null
            };
            if (!document.getElementById("fit-vids-style")) {
                var n = document.head || document.getElementsByTagName("head")[0],
                    o = ".fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}",
                    s = document.createElement("div");
                s.innerHTML = '<p>x</p><style id="fit-vids-style">' + o + "</style>", n.appendChild(s.childNodes[1])
            }
            return e && t.extend(i, e), this.each(function() {
                var e = ["iframe[src*='player.vimeo.com']", "iframe[src*='youtube.com']", "iframe[src*='youtube-nocookie.com']", "iframe[src*='kickstarter.com'][src*='video.html']", "object", "embed"];
                i.customSelector && e.push(i.customSelector);
                var n = t(this).find(e.join(","));
                n = n.not("object object"), n.each(function() {
                    var e = t(this);
                    if (!("embed" === this.tagName.toLowerCase() && e.parent("object").length || e.parent(".fluid-width-video-wrapper").length)) {
                        var i = "object" === this.tagName.toLowerCase() || e.attr("height") && !isNaN(parseInt(e.attr("height"), 10)) ? parseInt(e.attr("height"), 10) : e.height(),
                            n = isNaN(parseInt(e.attr("width"), 10)) ? e.width() : parseInt(e.attr("width"), 10),
                            o = i / n;
                        if (!e.attr("id")) {
                            var s = "fitvid" + Math.floor(999999 * Math.random());
                            e.attr("id", s)
                        }
                        e.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top", 100 * o + "%"), e.removeAttr("height").removeAttr("width")
                    }
                })
            })
        }
    }(window.jQuery || window.Zepto),
    function(t) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
    }(function(t) {
        "use strict";
        var e = window.Slick || {};
        e = function() {
            function e(e, n) {
                var o, s, r, a = this;
                if (a.defaults = {
                        accessibility: !0,
                        adaptiveHeight: !1,
                        appendArrows: t(e),
                        appendDots: t(e),
                        arrows: !0,
                        asNavFor: null,
                        prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="previous">Previous</button>',
                        nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="next">Next</button>',
                        autoplay: !1,
                        autoplaySpeed: 3e3,
                        centerMode: !1,
                        centerPadding: "50px",
                        cssEase: "ease",
                        customPaging: function(t, e) {
                            return '<button type="button" data-role="none">' + (e + 1) + "</button>"
                        },
                        dots: !1,
                        dotsClass: "slick-dots",
                        draggable: !0,
                        easing: "linear",
                        edgeFriction: .35,
                        fade: !1,
                        focusOnSelect: !1,
                        infinite: !0,
                        initialSlide: 0,
                        lazyLoad: "ondemand",
                        mobileFirst: !1,
                        pauseOnHover: !0,
                        pauseOnDotsHover: !1,
                        respondTo: "window",
                        responsive: null,
                        rtl: !1,
                        slide: "",
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        speed: 500,
                        swipe: !0,
                        swipeToSlide: !1,
                        touchMove: !0,
                        touchThreshold: 5,
                        useCSS: !0,
                        variableWidth: !1,
                        vertical: !1,
                        waitForAnimate: !0
                    }, a.initials = {
                        animating: !1,
                        dragging: !1,
                        autoPlayTimer: null,
                        currentDirection: 0,
                        currentLeft: null,
                        currentSlide: 0,
                        direction: 1,
                        $dots: null,
                        listWidth: null,
                        listHeight: null,
                        loadIndex: 0,
                        $nextArrow: null,
                        $prevArrow: null,
                        slideCount: null,
                        slideWidth: null,
                        $slideTrack: null,
                        $slides: null,
                        sliding: !1,
                        slideOffset: 0,
                        swipeLeft: null,
                        $list: null,
                        touchObject: {},
                        transformsEnabled: !1
                    }, t.extend(a, a.initials), a.activeBreakpoint = null, a.animType = null, a.animProp = null, a.breakpoints = [], a.breakpointSettings = [], a.cssTransitions = !1, a.hidden = "hidden", a.paused = !1, a.positionProp = null, a.respondTo = null, a.shouldClick = !0, a.$slider = t(e), a.$slidesCache = null, a.transformType = null, a.transitionType = null, a.visibilityChange = "visibilitychange", a.windowWidth = 0, a.windowTimer = null, o = t(e).data("slick") || {}, a.options = t.extend({}, a.defaults, o, n), a.currentSlide = a.options.initialSlide, a.originalSettings = a.options, s = a.options.responsive || null, s && s.length > -1) {
                    a.respondTo = a.options.respondTo || "window";
                    for (r in s) s.hasOwnProperty(r) && (a.breakpoints.push(s[r].breakpoint), a.breakpointSettings[s[r].breakpoint] = s[r].settings);
                    a.breakpoints.sort(function(t, e) {
                        return a.options.mobileFirst === !0 ? t - e : e - t
                    })
                }
                "undefined" != typeof document.mozHidden ? (a.hidden = "mozHidden", a.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.msHidden ? (a.hidden = "msHidden", a.visibilityChange = "msvisibilitychange") : "undefined" != typeof document.webkitHidden && (a.hidden = "webkitHidden", a.visibilityChange = "webkitvisibilitychange"), a.autoPlay = t.proxy(a.autoPlay, a), a.autoPlayClear = t.proxy(a.autoPlayClear, a), a.changeSlide = t.proxy(a.changeSlide, a), a.clickHandler = t.proxy(a.clickHandler, a), a.selectHandler = t.proxy(a.selectHandler, a), a.setPosition = t.proxy(a.setPosition, a), a.swipeHandler = t.proxy(a.swipeHandler, a), a.dragHandler = t.proxy(a.dragHandler, a), a.keyHandler = t.proxy(a.keyHandler, a), a.autoPlayIterator = t.proxy(a.autoPlayIterator, a), a.instanceUid = i++, a.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, a.init(), a.checkResponsive(!0)
            }
            var i = 0;
            return e
        }(), e.prototype.addSlide = e.prototype.slickAdd = function(e, i, n) {
            var o = this;
            if ("boolean" == typeof i) n = i, i = null;
            else if (0 > i || i >= o.slideCount) return !1;
            o.unload(), "number" == typeof i ? 0 === i && 0 === o.$slides.length ? t(e).appendTo(o.$slideTrack) : n ? t(e).insertBefore(o.$slides.eq(i)) : t(e).insertAfter(o.$slides.eq(i)) : n === !0 ? t(e).prependTo(o.$slideTrack) : t(e).appendTo(o.$slideTrack), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slides.each(function(e, i) {
                t(i).attr("data-slick-index", e)
            }), o.$slidesCache = o.$slides, o.reinit()
        }, e.prototype.animateHeight = function() {
            var t = this;
            if (1 === t.options.slidesToShow && t.options.adaptiveHeight === !0 && t.options.vertical === !1) {
                var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
                t.$list.animate({
                    height: e
                }, t.options.speed)
            }
        }, e.prototype.animateSlide = function(e, i) {
            var n = {},
                o = this;
            o.animateHeight(), o.options.rtl === !0 && o.options.vertical === !1 && (e = -e), o.transformsEnabled === !1 ? o.options.vertical === !1 ? o.$slideTrack.animate({
                left: e
            }, o.options.speed, o.options.easing, i) : o.$slideTrack.animate({
                top: e
            }, o.options.speed, o.options.easing, i) : o.cssTransitions === !1 ? (o.options.rtl === !0 && (o.currentLeft = -o.currentLeft), t({
                animStart: o.currentLeft
            }).animate({
                animStart: e
            }, {
                duration: o.options.speed,
                easing: o.options.easing,
                step: function(t) {
                    t = Math.ceil(t), o.options.vertical === !1 ? (n[o.animType] = "translate(" + t + "px, 0px)", o.$slideTrack.css(n)) : (n[o.animType] = "translate(0px," + t + "px)", o.$slideTrack.css(n))
                },
                complete: function() {
                    i && i.call()
                }
            })) : (o.applyTransition(), e = Math.ceil(e), n[o.animType] = o.options.vertical === !1 ? "translate3d(" + e + "px, 0px, 0px)" : "translate3d(0px," + e + "px, 0px)", o.$slideTrack.css(n), i && setTimeout(function() {
                o.disableTransition(), i.call()
            }, o.options.speed))
        }, e.prototype.asNavFor = function(e) {
            var i = this,
                n = null !== i.options.asNavFor ? t(i.options.asNavFor).slick("getSlick") : null;
            null !== n && n.slideHandler(e, !0)
        }, e.prototype.applyTransition = function(t) {
            var e = this,
                i = {};
            i[e.transitionType] = e.options.fade === !1 ? e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : "opacity " + e.options.speed + "ms " + e.options.cssEase, e.options.fade === !1 ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i)
        }, e.prototype.autoPlay = function() {
            var t = this;
            t.autoPlayTimer && clearInterval(t.autoPlayTimer), t.slideCount > t.options.slidesToShow && t.paused !== !0 && (t.autoPlayTimer = setInterval(t.autoPlayIterator, t.options.autoplaySpeed))
        }, e.prototype.autoPlayClear = function() {
            var t = this;
            t.autoPlayTimer && clearInterval(t.autoPlayTimer)
        }, e.prototype.autoPlayIterator = function() {
            var t = this;
            t.options.infinite === !1 ? 1 === t.direction ? (t.currentSlide + 1 === t.slideCount - 1 && (t.direction = 0), t.slideHandler(t.currentSlide + t.options.slidesToScroll)) : (t.currentSlide - 1 === 0 && (t.direction = 1), t.slideHandler(t.currentSlide - t.options.slidesToScroll)) : t.slideHandler(t.currentSlide + t.options.slidesToScroll)
        }, e.prototype.buildArrows = function() {
            var e = this;
            e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow = t(e.options.prevArrow), e.$nextArrow = t(e.options.nextArrow), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.appendTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), e.options.infinite !== !0 && e.$prevArrow.addClass("slick-disabled"))
        }, e.prototype.buildDots = function() {
            var e, i, n = this;
            if (n.options.dots === !0 && n.slideCount > n.options.slidesToShow) {
                for (i = '<ul class="' + n.options.dotsClass + '">', e = 0; e <= n.getDotCount(); e += 1) i += "<li>" + n.options.customPaging.call(this, n, e) + "</li>";
                i += "</ul>", n.$dots = t(i).appendTo(n.options.appendDots), n.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
            }
        }, e.prototype.buildOut = function() {
            var e = this;
            e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function(e, i) {
                t(i).attr("data-slick-index", e)
            }), e.$slidesCache = e.$slides, e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? t('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), (e.options.centerMode === !0 || e.options.swipeToSlide === !0) && (e.options.slidesToScroll = 1), t("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.options.accessibility === !0 && e.$list.prop("tabIndex", 0), e.setSlideClasses("number" == typeof this.currentSlide ? this.currentSlide : 0), e.options.draggable === !0 && e.$list.addClass("draggable")
        }, e.prototype.checkResponsive = function(e) {
            var i, n, o, s = this,
                r = s.$slider.width(),
                a = window.innerWidth || t(window).width();
            if ("window" === s.respondTo ? o = a : "slider" === s.respondTo ? o = r : "min" === s.respondTo && (o = Math.min(a, r)), s.originalSettings.responsive && s.originalSettings.responsive.length > -1 && null !== s.originalSettings.responsive) {
                n = null;
                for (i in s.breakpoints) s.breakpoints.hasOwnProperty(i) && (s.originalSettings.mobileFirst === !1 ? o < s.breakpoints[i] && (n = s.breakpoints[i]) : o > s.breakpoints[i] && (n = s.breakpoints[i]));
                null !== n ? null !== s.activeBreakpoint ? n !== s.activeBreakpoint && (s.activeBreakpoint = n, "unslick" === s.breakpointSettings[n] ? s.unslick() : (s.options = t.extend({}, s.originalSettings, s.breakpointSettings[n]), e === !0 && (s.currentSlide = s.options.initialSlide), s.refresh())) : (s.activeBreakpoint = n, "unslick" === s.breakpointSettings[n] ? s.unslick() : (s.options = t.extend({}, s.originalSettings, s.breakpointSettings[n]), e === !0 && (s.currentSlide = s.options.initialSlide), s.refresh())) : null !== s.activeBreakpoint && (s.activeBreakpoint = null, s.options = s.originalSettings, e === !0 && (s.currentSlide = s.options.initialSlide), s.refresh())
            }
        }, e.prototype.changeSlide = function(e, i) {
            var n, o, s, r = this,
                a = t(e.target);
            switch (a.is("a") && e.preventDefault(), s = r.slideCount % r.options.slidesToScroll !== 0, n = s ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, e.data.message) {
                case "previous":
                    o = 0 === n ? r.options.slidesToScroll : r.options.slidesToShow - n, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - o, !1, i);
                    break;
                case "next":
                    o = 0 === n ? r.options.slidesToScroll : n, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + o, !1, i);
                    break;
                case "index":
                    var l = 0 === e.data.index ? 0 : e.data.index || t(e.target).parent().index() * r.options.slidesToScroll;
                    r.slideHandler(r.checkNavigable(l), !1, i);
                    break;
                default:
                    return
            }
        }, e.prototype.checkNavigable = function(t) {
            var e, i, n = this;
            if (e = n.getNavigableIndexes(), i = 0, t > e[e.length - 1]) t = e[e.length - 1];
            else
                for (var o in e) {
                    if (t < e[o]) {
                        t = i;
                        break
                    }
                    i = e[o]
                }
            return t
        }, e.prototype.clickHandler = function(t) {
            var e = this;
            e.shouldClick === !1 && (t.stopImmediatePropagation(), t.stopPropagation(), t.preventDefault())
        }, e.prototype.destroy = function() {
            var e = this;
            e.autoPlayClear(), e.touchObject = {}, t(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && "object" != typeof e.options.prevArrow && e.$prevArrow.remove(), e.$nextArrow && "object" != typeof e.options.nextArrow && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-center slick-visible").attr("aria-hidden", "true").removeAttr("data-slick-index").css({
                position: "",
                left: "",
                top: "",
                zIndex: "",
                opacity: "",
                width: ""
            }), e.$slider.removeClass("slick-slider"), e.$slider.removeClass("slick-initialized"), e.$list.off(".slick"), t(window).off(".slick-" + e.instanceUid), t(document).off(".slick-" + e.instanceUid), e.$slider.html(e.$slides)
        }, e.prototype.disableTransition = function(t) {
            var e = this,
                i = {};
            i[e.transitionType] = "", e.options.fade === !1 ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i)
        }, e.prototype.fadeSlide = function(t, e) {
            var i = this;
            i.cssTransitions === !1 ? (i.$slides.eq(t).css({
                zIndex: 1e3
            }), i.$slides.eq(t).animate({
                opacity: 1
            }, i.options.speed, i.options.easing, e)) : (i.applyTransition(t), i.$slides.eq(t).css({
                opacity: 1,
                zIndex: 1e3
            }), e && setTimeout(function() {
                i.disableTransition(t), e.call()
            }, i.options.speed))
        }, e.prototype.filterSlides = e.prototype.slickFilter = function(t) {
            var e = this;
            null !== t && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(t).appendTo(e.$slideTrack), e.reinit())
        }, e.prototype.getCurrent = e.prototype.slickCurrentSlide = function() {
            var t = this;
            return t.currentSlide
        }, e.prototype.getDotCount = function() {
            var t = this,
                e = 0,
                i = 0,
                n = 0;
            if (t.options.infinite === !0) n = Math.ceil(t.slideCount / t.options.slidesToScroll);
            else if (t.options.centerMode === !0) n = t.slideCount;
            else
                for (; e < t.slideCount;) ++n, e = i + t.options.slidesToShow, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
            return n - 1
        }, e.prototype.getLeft = function(t) {
            var e, i, n, o = this,
                s = 0;
            return o.slideOffset = 0, i = o.$slides.first().outerHeight(), o.options.infinite === !0 ? (o.slideCount > o.options.slidesToShow && (o.slideOffset = o.slideWidth * o.options.slidesToShow * -1, s = i * o.options.slidesToShow * -1), o.slideCount % o.options.slidesToScroll !== 0 && t + o.options.slidesToScroll > o.slideCount && o.slideCount > o.options.slidesToShow && (t > o.slideCount ? (o.slideOffset = (o.options.slidesToShow - (t - o.slideCount)) * o.slideWidth * -1, s = (o.options.slidesToShow - (t - o.slideCount)) * i * -1) : (o.slideOffset = o.slideCount % o.options.slidesToScroll * o.slideWidth * -1, s = o.slideCount % o.options.slidesToScroll * i * -1))) : t + o.options.slidesToShow > o.slideCount && (o.slideOffset = (t + o.options.slidesToShow - o.slideCount) * o.slideWidth, s = (t + o.options.slidesToShow - o.slideCount) * i), o.slideCount <= o.options.slidesToShow && (o.slideOffset = 0, s = 0), o.options.centerMode === !0 && o.options.infinite === !0 ? o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2) - o.slideWidth : o.options.centerMode === !0 && (o.slideOffset = 0, o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2)), e = o.options.vertical === !1 ? t * o.slideWidth * -1 + o.slideOffset : t * i * -1 + s, o.options.variableWidth === !0 && (n = o.$slideTrack.children(".slick-slide").eq(o.slideCount <= o.options.slidesToShow || o.options.infinite === !1 ? t : t + o.options.slidesToShow), e = n[0] ? -1 * n[0].offsetLeft : 0, o.options.centerMode === !0 && (n = o.$slideTrack.children(".slick-slide").eq(o.options.infinite === !1 ? t : t + o.options.slidesToShow + 1), e = n[0] ? -1 * n[0].offsetLeft : 0, e += (o.$list.width() - n.outerWidth()) / 2)), e
        }, e.prototype.getOption = e.prototype.slickGetOption = function(t) {
            var e = this;
            return e.options[t]
        }, e.prototype.getNavigableIndexes = function() {
            var t, e = this,
                i = 0,
                n = 0,
                o = [];
            for (e.options.infinite === !1 ? (t = e.slideCount - e.options.slidesToShow + 1, e.options.centerMode === !0 && (t = e.slideCount)) : (i = -1 * e.slideCount, n = -1 * e.slideCount, t = 2 * e.slideCount); t > i;) o.push(i), i = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
            return o
        }, e.prototype.getSlick = function() {
            return this
        }, e.prototype.getSlideCount = function() {
            var e, i, n, o = this;
            return n = o.options.centerMode === !0 ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0, o.options.swipeToSlide === !0 ? (o.$slideTrack.find(".slick-slide").each(function(e, s) {
                return s.offsetLeft - n + t(s).outerWidth() / 2 > -1 * o.swipeLeft ? (i = s, !1) : void 0
            }), e = Math.abs(t(i).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll
        }, e.prototype.goTo = e.prototype.slickGoTo = function(t, e) {
            var i = this;
            i.changeSlide({
                data: {
                    message: "index",
                    index: parseInt(t)
                }
            }, e)
        }, e.prototype.init = function() {
            var e = this;
            t(e.$slider).hasClass("slick-initialized") || (t(e.$slider).addClass("slick-initialized"), e.buildOut(), e.setProps(), e.startLoad(), e.loadSlider(), e.initializeEvents(), e.updateArrows(), e.updateDots()), e.$slider.trigger("init", [e])
        }, e.prototype.initArrowEvents = function() {
            var t = this;
            t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow.on("click.slick", {
                message: "previous"
            }, t.changeSlide), t.$nextArrow.on("click.slick", {
                message: "next"
            }, t.changeSlide))
        }, e.prototype.initDotEvents = function() {
            var e = this;
            e.options.dots === !0 && e.slideCount > e.options.slidesToShow && t("li", e.$dots).on("click.slick", {
                message: "index"
            }, e.changeSlide), e.options.dots === !0 && e.options.pauseOnDotsHover === !0 && e.options.autoplay === !0 && t("li", e.$dots).on("mouseenter.slick", function() {
                e.paused = !0, e.autoPlayClear()
            }).on("mouseleave.slick", function() {
                e.paused = !1, e.autoPlay()
            })
        }, e.prototype.initializeEvents = function() {
            var e = this;
            e.initArrowEvents(), e.initDotEvents(), e.$list.on("touchstart.slick mousedown.slick", {
                action: "start"
            }, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {
                action: "move"
            }, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {
                action: "end"
            }, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {
                action: "end"
            }, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), e.options.autoplay === !0 && (t(document).on(e.visibilityChange, function() {
                e.visibility()
            }), e.options.pauseOnHover === !0 && (e.$list.on("mouseenter.slick", function() {
                e.paused = !0, e.autoPlayClear()
            }), e.$list.on("mouseleave.slick", function() {
                e.paused = !1, e.autoPlay()
            }))), e.options.accessibility === !0 && e.$list.on("keydown.slick", e.keyHandler), e.options.focusOnSelect === !0 && t(e.$slideTrack).children().on("click.slick", e.selectHandler), t(window).on("orientationchange.slick.slick-" + e.instanceUid, function() {
                e.checkResponsive(), e.setPosition()
            }), t(window).on("resize.slick.slick-" + e.instanceUid, function() {
                t(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function() {
                    e.windowWidth = t(window).width(), e.checkResponsive(), e.setPosition()
                }, 50))
            }), t("*[draggable!=true]", e.$slideTrack).on("dragstart", function(t) {
                t.preventDefault()
            }), t(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), t(document).on("ready.slick.slick-" + e.instanceUid, e.setPosition)
        }, e.prototype.initUI = function() {
            var t = this;
            t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow.show(), t.$nextArrow.show()), t.options.dots === !0 && t.slideCount > t.options.slidesToShow && t.$dots.show(), t.options.autoplay === !0 && t.autoPlay()
        }, e.prototype.keyHandler = function(t) {
            var e = this;
            37 === t.keyCode && e.options.accessibility === !0 ? e.changeSlide({
                data: {
                    message: "previous"
                }
            }) : 39 === t.keyCode && e.options.accessibility === !0 && e.changeSlide({
                data: {
                    message: "next"
                }
            })
        }, e.prototype.lazyLoad = function() {
            function e(e) {
                t("img[data-lazy]", e).each(function() {
                    var e = t(this),
                        i = t(this).attr("data-lazy");
                    e.load(function() {
                        e.animate({
                            opacity: 1
                        }, 200)
                    }).css({
                        opacity: 0
                    }).attr("src", i).removeAttr("data-lazy").removeClass("slick-loading")
                })
            }
            var i, n, o, s, r = this;
            r.options.centerMode === !0 ? r.options.infinite === !0 ? (o = r.currentSlide + (r.options.slidesToShow / 2 + 1), s = o + r.options.slidesToShow + 2) : (o = Math.max(0, r.currentSlide - (r.options.slidesToShow / 2 + 1)), s = 2 + (r.options.slidesToShow / 2 + 1) + r.currentSlide) : (o = r.options.infinite ? r.options.slidesToShow + r.currentSlide : r.currentSlide, s = o + r.options.slidesToShow, r.options.fade === !0 && (o > 0 && o--, s <= r.slideCount && s++)), i = r.$slider.find(".slick-slide").slice(o, s), e(i), r.slideCount <= r.options.slidesToShow ? (n = r.$slider.find(".slick-slide"), e(n)) : r.currentSlide >= r.slideCount - r.options.slidesToShow ? (n = r.$slider.find(".slick-cloned").slice(0, r.options.slidesToShow), e(n)) : 0 === r.currentSlide && (n = r.$slider.find(".slick-cloned").slice(-1 * r.options.slidesToShow), e(n))
        }, e.prototype.loadSlider = function() {
            var t = this;
            t.setPosition(), t.$slideTrack.css({
                opacity: 1
            }), t.$slider.removeClass("slick-loading"), t.initUI(), "progressive" === t.options.lazyLoad && t.progressiveLazyLoad()
        }, e.prototype.next = e.prototype.slickNext = function() {
            var t = this;
            t.changeSlide({
                data: {
                    message: "next"
                }
            })
        }, e.prototype.pause = e.prototype.slickPause = function() {
            var t = this;
            t.autoPlayClear(), t.paused = !0
        }, e.prototype.play = e.prototype.slickPlay = function() {
            var t = this;
            t.paused = !1, t.autoPlay()
        }, e.prototype.postSlide = function(t) {
            var e = this;
            e.$slider.trigger("afterChange", [e, t]), e.animating = !1, e.setPosition(), e.swipeLeft = null, e.options.autoplay === !0 && e.paused === !1 && e.autoPlay()
        }, e.prototype.prev = e.prototype.slickPrev = function() {
            var t = this;
            t.changeSlide({
                data: {
                    message: "previous"
                }
            })
        }, e.prototype.progressiveLazyLoad = function() {
            var e, i, n = this;
            e = t("img[data-lazy]", n.$slider).length, e > 0 && (i = t("img[data-lazy]", n.$slider).first(), i.attr("src", i.attr("data-lazy")).removeClass("slick-loading").load(function() {
                i.removeAttr("data-lazy"), n.progressiveLazyLoad(), n.options.adaptiveHeight === !0 && n.setPosition()
            }).error(function() {
                i.removeAttr("data-lazy"), n.progressiveLazyLoad()
            }))
        }, e.prototype.refresh = function() {
            var e = this,
                i = e.currentSlide;
            e.destroy(), t.extend(e, e.initials), e.init(), e.changeSlide({
                data: {
                    message: "index",
                    index: i
                }
            }, !0)
        }, e.prototype.reinit = function() {
            var e = this;
            e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.options.focusOnSelect === !0 && t(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses(0), e.setPosition(), e.$slider.trigger("reInit", [e])
        }, e.prototype.removeSlide = e.prototype.slickRemove = function(t, e, i) {
            var n = this;
            return "boolean" == typeof t ? (e = t, t = e === !0 ? 0 : n.slideCount - 1) : t = e === !0 ? --t : t, n.slideCount < 1 || 0 > t || t > n.slideCount - 1 ? !1 : (n.unload(), i === !0 ? n.$slideTrack.children().remove() : n.$slideTrack.children(this.options.slide).eq(t).remove(), n.$slides = n.$slideTrack.children(this.options.slide), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.append(n.$slides), n.$slidesCache = n.$slides, void n.reinit())
        }, e.prototype.setCSS = function(t) {
            var e, i, n = this,
                o = {};
            n.options.rtl === !0 && (t = -t), e = "left" == n.positionProp ? Math.ceil(t) + "px" : "0px", i = "top" == n.positionProp ? Math.ceil(t) + "px" : "0px", o[n.positionProp] = t, n.transformsEnabled === !1 ? n.$slideTrack.css(o) : (o = {}, n.cssTransitions === !1 ? (o[n.animType] = "translate(" + e + ", " + i + ")", n.$slideTrack.css(o)) : (o[n.animType] = "translate3d(" + e + ", " + i + ", 0px)", n.$slideTrack.css(o)))
        }, e.prototype.setDimensions = function() {
            var t = this;
            if (t.options.vertical === !1 ? t.options.centerMode === !0 && t.$list.css({
                    padding: "0px " + t.options.centerPadding
                }) : (t.$list.height(t.$slides.first().outerHeight(!0) * t.options.slidesToShow), t.options.centerMode === !0 && t.$list.css({
                    padding: t.options.centerPadding + " 0px"
                })), t.listWidth = t.$list.width(), t.listHeight = t.$list.height(), t.options.vertical === !1 && t.options.variableWidth === !1) t.slideWidth = Math.ceil(t.listWidth / t.options.slidesToShow), t.$slideTrack.width(Math.ceil(t.slideWidth * t.$slideTrack.children(".slick-slide").length));
            else if (t.options.variableWidth === !0) {
                var e = 0;
                t.slideWidth = Math.ceil(t.listWidth / t.options.slidesToShow), t.$slideTrack.children(".slick-slide").each(function() {
                    e += t.listWidth
                }), t.$slideTrack.width(Math.ceil(e) + 1)
            } else t.slideWidth = Math.ceil(t.listWidth), t.$slideTrack.height(Math.ceil(t.$slides.first().outerHeight(!0) * t.$slideTrack.children(".slick-slide").length));
            var i = t.$slides.first().outerWidth(!0) - t.$slides.first().width();
            t.options.variableWidth === !1 && t.$slideTrack.children(".slick-slide").width(t.slideWidth - i)
        }, e.prototype.setFade = function() {
            var e, i = this;
            i.$slides.each(function(n, o) {
                e = i.slideWidth * n * -1, t(o).css(i.options.rtl === !0 ? {
                    position: "relative",
                    right: e,
                    top: 0,
                    zIndex: 800,
                    opacity: 0
                } : {
                    position: "relative",
                    left: e,
                    top: 0,
                    zIndex: 800,
                    opacity: 0
                })
            }), i.$slides.eq(i.currentSlide).css({
                zIndex: 900,
                opacity: 1
            })
        }, e.prototype.setHeight = function() {
            var t = this;
            if (1 === t.options.slidesToShow && t.options.adaptiveHeight === !0 && t.options.vertical === !1) {
                var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
                t.$list.css("height", e)
            }
        }, e.prototype.setOption = e.prototype.slickSetOption = function(t, e, i) {
            var n = this;
            n.options[t] = e, i === !0 && (n.unload(), n.reinit())
        }, e.prototype.setPosition = function() {
            var t = this;
            t.setDimensions(), t.setHeight(), t.options.fade === !1 ? t.setCSS(t.getLeft(t.currentSlide)) : t.setFade(), t.$slider.trigger("setPosition", [t])
        }, e.prototype.setProps = function() {
            var t = this,
                e = document.body.style;
            t.positionProp = t.options.vertical === !0 ? "top" : "left", "top" === t.positionProp ? t.$slider.addClass("slick-vertical") : t.$slider.removeClass("slick-vertical"), (void 0 !== e.WebkitTransition || void 0 !== e.MozTransition || void 0 !== e.msTransition) && t.options.useCSS === !0 && (t.cssTransitions = !0), void 0 !== e.OTransform && (t.animType = "OTransform", t.transformType = "-o-transform", t.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.MozTransform && (t.animType = "MozTransform", t.transformType = "-moz-transform", t.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (t.animType = !1)), void 0 !== e.webkitTransform && (t.animType = "webkitTransform", t.transformType = "-webkit-transform", t.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.msTransform && (t.animType = "msTransform", t.transformType = "-ms-transform", t.transitionType = "msTransition", void 0 === e.msTransform && (t.animType = !1)), void 0 !== e.transform && t.animType !== !1 && (t.animType = "transform", t.transformType = "transform", t.transitionType = "transition"), t.transformsEnabled = null !== t.animType && t.animType !== !1
        }, e.prototype.setSlideClasses = function(t) {
            var e, i, n, o, s = this;
            s.$slider.find(".slick-slide").removeClass("slick-active").attr("aria-hidden", "true").removeClass("slick-center"), i = s.$slider.find(".slick-slide"), s.options.centerMode === !0 ? (e = Math.floor(s.options.slidesToShow / 2), s.options.infinite === !0 && (t >= e && t <= s.slideCount - 1 - e ? s.$slides.slice(t - e, t + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (n = s.options.slidesToShow + t, i.slice(n - e + 1, n + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === t ? i.eq(i.length - 1 - s.options.slidesToShow).addClass("slick-center") : t === s.slideCount - 1 && i.eq(s.options.slidesToShow).addClass("slick-center")), s.$slides.eq(t).addClass("slick-center")) : t >= 0 && t <= s.slideCount - s.options.slidesToShow ? s.$slides.slice(t, t + s.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= s.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (o = s.slideCount % s.options.slidesToShow, n = s.options.infinite === !0 ? s.options.slidesToShow + t : t, s.options.slidesToShow == s.options.slidesToScroll && s.slideCount - t < s.options.slidesToShow ? i.slice(n - (s.options.slidesToShow - o), n + o).addClass("slick-active").attr("aria-hidden", "false") : i.slice(n, n + s.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === s.options.lazyLoad && s.lazyLoad()
        }, e.prototype.setupInfinite = function() {
            var e, i, n, o = this;
            if (o.options.fade === !0 && (o.options.centerMode = !1), o.options.infinite === !0 && o.options.fade === !1 && (i = null, o.slideCount > o.options.slidesToShow)) {
                for (n = o.options.centerMode === !0 ? o.options.slidesToShow + 1 : o.options.slidesToShow, e = o.slideCount; e > o.slideCount - n; e -= 1) i = e - 1, t(o.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i - o.slideCount).prependTo(o.$slideTrack).addClass("slick-cloned");
                for (e = 0; n > e; e += 1) i = e, t(o.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i + o.slideCount).appendTo(o.$slideTrack).addClass("slick-cloned");
                o.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                    t(this).attr("id", "")
                })
            }
        }, e.prototype.selectHandler = function(e) {
            var i = this,
                n = parseInt(t(e.target).parents(".slick-slide").attr("data-slick-index"));
            return n || (n = 0), i.slideCount <= i.options.slidesToShow ? (i.$slider.find(".slick-slide").removeClass("slick-active").attr("aria-hidden", "true"), i.$slides.eq(n).addClass("slick-active").attr("aria-hidden", "false"), i.options.centerMode === !0 && (i.$slider.find(".slick-slide").removeClass("slick-center"), i.$slides.eq(n).addClass("slick-center")), void i.asNavFor(n)) : void i.slideHandler(n)
        }, e.prototype.slideHandler = function(t, e, i) {
            var n, o, s, r, a = null,
                l = this;
            return e = e || !1, l.animating === !0 && l.options.waitForAnimate === !0 || l.options.fade === !0 && l.currentSlide === t || l.slideCount <= l.options.slidesToShow ? void 0 : (e === !1 && l.asNavFor(t), n = t, a = l.getLeft(n), r = l.getLeft(l.currentSlide), l.currentLeft = null === l.swipeLeft ? r : l.swipeLeft, l.options.infinite === !1 && l.options.centerMode === !1 && (0 > t || t > l.getDotCount() * l.options.slidesToScroll) ? void(l.options.fade === !1 && (n = l.currentSlide, i !== !0 ? l.animateSlide(r, function() {
                l.postSlide(n)
            }) : l.postSlide(n))) : l.options.infinite === !1 && l.options.centerMode === !0 && (0 > t || t > l.slideCount - l.options.slidesToScroll) ? void(l.options.fade === !1 && (n = l.currentSlide, i !== !0 ? l.animateSlide(r, function() {
                l.postSlide(n)
            }) : l.postSlide(n))) : (l.options.autoplay === !0 && clearInterval(l.autoPlayTimer), o = 0 > n ? l.slideCount % l.options.slidesToScroll !== 0 ? l.slideCount - l.slideCount % l.options.slidesToScroll : l.slideCount + n : n >= l.slideCount ? l.slideCount % l.options.slidesToScroll !== 0 ? 0 : n - l.slideCount : n, l.animating = !0, l.$slider.trigger("beforeChange", [l, l.currentSlide, o]), s = l.currentSlide, l.currentSlide = o, l.setSlideClasses(l.currentSlide), l.updateDots(), l.updateArrows(), l.options.fade === !0 ? (i !== !0 ? l.fadeSlide(o, function() {
                l.postSlide(o)
            }) : l.postSlide(o), void l.animateHeight()) : void(i !== !0 ? l.animateSlide(a, function() {
                l.postSlide(o)
            }) : l.postSlide(o))))
        }, e.prototype.startLoad = function() {
            var t = this;
            t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow.hide(), t.$nextArrow.hide()), t.options.dots === !0 && t.slideCount > t.options.slidesToShow && t.$dots.hide(), t.$slider.addClass("slick-loading")
        }, e.prototype.swipeDirection = function() {
            var t, e, i, n, o = this;
            return t = o.touchObject.startX - o.touchObject.curX, e = o.touchObject.startY - o.touchObject.curY, i = Math.atan2(e, t), n = Math.round(180 * i / Math.PI), 0 > n && (n = 360 - Math.abs(n)), 45 >= n && n >= 0 ? o.options.rtl === !1 ? "left" : "right" : 360 >= n && n >= 315 ? o.options.rtl === !1 ? "left" : "right" : n >= 135 && 225 >= n ? o.options.rtl === !1 ? "right" : "left" : "vertical"
        }, e.prototype.swipeEnd = function() {
            var t, e = this;
            if (e.dragging = !1, e.shouldClick = e.touchObject.swipeLength > 10 ? !1 : !0, void 0 === e.touchObject.curX) return !1;
            if (e.touchObject.edgeHit === !0 && e.$slider.trigger("edge", [e, e.swipeDirection()]), e.touchObject.swipeLength >= e.touchObject.minSwipe) switch (e.swipeDirection()) {
                case "left":
                    t = e.options.swipeToSlide ? e.checkNavigable(e.currentSlide + e.getSlideCount()) : e.currentSlide + e.getSlideCount(), e.slideHandler(t), e.currentDirection = 0, e.touchObject = {}, e.$slider.trigger("swipe", [e, "left"]);
                    break;
                case "right":
                    t = e.options.swipeToSlide ? e.checkNavigable(e.currentSlide - e.getSlideCount()) : e.currentSlide - e.getSlideCount(), e.slideHandler(t), e.currentDirection = 1, e.touchObject = {}, e.$slider.trigger("swipe", [e, "right"])
            } else e.touchObject.startX !== e.touchObject.curX && (e.slideHandler(e.currentSlide), e.touchObject = {})
        }, e.prototype.swipeHandler = function(t) {
            var e = this;
            if (!(e.options.swipe === !1 || "ontouchend" in document && e.options.swipe === !1 || e.options.draggable === !1 && -1 !== t.type.indexOf("mouse"))) switch (e.touchObject.fingerCount = t.originalEvent && void 0 !== t.originalEvent.touches ? t.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, t.data.action) {
                case "start":
                    e.swipeStart(t);
                    break;
                case "move":
                    e.swipeMove(t);
                    break;
                case "end":
                    e.swipeEnd(t)
            }
        }, e.prototype.swipeMove = function(t) {
            var e, i, n, o, s, r = this;
            return s = void 0 !== t.originalEvent ? t.originalEvent.touches : null, !r.dragging || s && 1 !== s.length ? !1 : (e = r.getLeft(r.currentSlide), r.touchObject.curX = void 0 !== s ? s[0].pageX : t.clientX, r.touchObject.curY = void 0 !== s ? s[0].pageY : t.clientY, r.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(r.touchObject.curX - r.touchObject.startX, 2))), i = r.swipeDirection(), "vertical" !== i ? (void 0 !== t.originalEvent && r.touchObject.swipeLength > 4 && t.preventDefault(), o = (r.options.rtl === !1 ? 1 : -1) * (r.touchObject.curX > r.touchObject.startX ? 1 : -1), n = r.touchObject.swipeLength, r.touchObject.edgeHit = !1, r.options.infinite === !1 && (0 === r.currentSlide && "right" === i || r.currentSlide >= r.getDotCount() && "left" === i) && (n = r.touchObject.swipeLength * r.options.edgeFriction, r.touchObject.edgeHit = !0), r.swipeLeft = r.options.vertical === !1 ? e + n * o : e + n * (r.$list.height() / r.listWidth) * o, r.options.fade === !0 || r.options.touchMove === !1 ? !1 : r.animating === !0 ? (r.swipeLeft = null, !1) : void r.setCSS(r.swipeLeft)) : void 0)
        }, e.prototype.swipeStart = function(t) {
            var e, i = this;
            return 1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow ? (i.touchObject = {}, !1) : (void 0 !== t.originalEvent && void 0 !== t.originalEvent.touches && (e = t.originalEvent.touches[0]), i.touchObject.startX = i.touchObject.curX = void 0 !== e ? e.pageX : t.clientX, i.touchObject.startY = i.touchObject.curY = void 0 !== e ? e.pageY : t.clientY, void(i.dragging = !0))
        }, e.prototype.unfilterSlides = e.prototype.slickUnfilter = function() {
            var t = this;
            null !== t.$slidesCache && (t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.appendTo(t.$slideTrack), t.reinit())
        }, e.prototype.unload = function() {
            var e = this;
            t(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && "object" != typeof e.options.prevArrow && e.$prevArrow.remove(), e.$nextArrow && "object" != typeof e.options.nextArrow && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible").attr("aria-hidden", "true").css("width", "")
        }, e.prototype.unslick = function() {
            var t = this;
            t.destroy()
        }, e.prototype.updateArrows = function() {
            var t, e = this;
            t = Math.floor(e.options.slidesToShow / 2), e.options.arrows === !0 && e.options.infinite !== !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.removeClass("slick-disabled"), e.$nextArrow.removeClass("slick-disabled"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled"), e.$nextArrow.removeClass("slick-disabled")) : e.currentSlide >= e.slideCount - e.options.slidesToShow && e.options.centerMode === !1 ? (e.$nextArrow.addClass("slick-disabled"), e.$prevArrow.removeClass("slick-disabled")) : e.currentSlide >= e.slideCount - 1 && e.options.centerMode === !0 && (e.$nextArrow.addClass("slick-disabled"), e.$prevArrow.removeClass("slick-disabled")))
        }, e.prototype.updateDots = function() {
            var t = this;
            null !== t.$dots && (t.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), t.$dots.find("li").eq(Math.floor(t.currentSlide / t.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
        }, e.prototype.visibility = function() {
            var t = this;
            document[t.hidden] ? (t.paused = !0, t.autoPlayClear()) : (t.paused = !1, t.autoPlay())
        }, t.fn.slick = function() {
            var t, i = this,
                n = arguments[0],
                o = Array.prototype.slice.call(arguments, 1),
                s = i.length,
                r = 0;
            for (r; s > r; r++)
                if ("object" == typeof n || "undefined" == typeof n ? i[r].slick = new e(i[r], n) : t = i[r].slick[n].apply(i[r].slick, o), "undefined" != typeof t) return t;
            return i
        }, t(function() {
            t("[data-slick]").slick()
        })
    });

    /* <![CDATA[ */
    var wp_data = {
        "themeurl": "https:\/\/cbgrancanaria.net\/wp-content\/themes\/manic",
        "siteurl": "https:\/\/cbgrancanaria.net",
        "ajaxurl": "https:\/\/cbgrancanaria.net\/wp-admin\/admin-ajax.php",
        "debug": ""
    };
    /* ]]> */

    window.manic = window.manic || {};
    manic.conf = {
        urlImages: wp_data.themeurl + "/images",
        icon: wp_data.themeurl + "/images/pin_map@2x.png",
        screenSmMin: 768,
        screenMdMin: 992,
        screenLgMin: 1200,
        debug: wp_data.debug
    };
    manic.vars = {};
    manic.fn = {
        isMobile: function() {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
        },
        menuBehaviour: function() {
            if ($(window).width() > manic.conf.screenSmMin) {
                if ($(document).scrollTop().valueOf() > 140) {
                    $(".navbar").addClass("navbar-smaller")
                } else {
                    $(".navbar").removeClass("navbar-smaller")
                }
            } else {
                $(".navbar").addClass("navbar-smaller")
            }
        },
        selectMenuItem: function() {
            $("body.home .dropdown-menu li a, body.home #logo, body.home #iso").on("click", function(ev) {
                ev.preventDefault();
                var navbarHeight = 88;
                var scrollTop = 0;
                if ($(this).attr("data-target")) {
                    var target = $($(this).attr("data-target").replace("/", ""));
                    scrollTop = $(target).offset().top - navbarHeight
                }
                $("html, body").animate({
                    scrollTop: scrollTop
                }, 500, "swing")
            })
        },
        changeMenu: function() {
            var $navbar = $(".navbar");
            var $window = $(window);
            if ($(window).width() >= manic.conf.screenSmMin) {
                $navbar.removeClass("navbar-static-top").addClass("navbar-fixed-top")
            } else {
                $navbar.removeClass("navbar-fixed-top").addClass("navbar-static-top")
            }
        },
        centerViewerVideo: function() {
            var $wrap = $(".viewer-main-wrap");
            var $photos = $(".fluid-width-video-wrapper > iframe");
            var headerHeight = parseInt($(".viewer-header").height());
            var footerHeight = parseInt($(".viewer-footer").height());
            var windowHeight = parseInt($(window).height());
            var totalHeight = parseInt($wrap.outerHeight());
            var photoHeight = parseInt($photos.height());
            var photoHeight = photoHeight > totalHeight ? totalHeight : photoHeight;
            var verticalPadding = parseInt((totalHeight - photoHeight) / 2);
            $(".viewer-main-photos").find("img").css("max-height", totalHeight);
            if (photoHeight) {
                if (verticalPadding > 0) {
                    $(".viewer-footer").show();
                    $wrap.css("padding-top", verticalPadding);
                    $wrap.css("padding-bottom", verticalPadding)
                } else {
                    $(".viewer-footer").hide()
                }
            } else {
                $(".viewer-footer").show()
            }
        },
        centerViewer: function() {
            var $wrap = $(".viewer-main-wrap");
            var $photos = $(".viewer-main-photos").find(".slick-active").find("img");
            if (!$photos.length) {
                $photos = $(".viewer-main-photos").find(".slick-active").find(".fluid-width-video-wrapper > iframe")
            }
            var totalHeight = parseInt($wrap.outerHeight());
            var photoHeight = parseInt($photos.height());
            var photoHeight = photoHeight > totalHeight ? totalHeight : photoHeight;
            var verticalPadding = parseInt((totalHeight - photoHeight) / 2);
            $(".viewer-main-photos").find("img").css("max-height", totalHeight);
            if (photoHeight && verticalPadding > 0) {
                $wrap.css("padding-top", verticalPadding);
                $wrap.css("padding-bottom", verticalPadding)
            }
        },
        cbResize: function(event) {
            manic.fn.changeMenu();
            if ($(".single-mnc_galleries .viewer-main-photos").length) {
                manic.fn.centerViewer()
            }
            if ($(".fluid-width-video-wrapper iframe").length) {
                manic.fn.centerViewerVideo()
            }
        },
        cbScroll: function() {
            manic.fn.menuBehaviour()
        },
        viewerShow: function(id) {
            var $photoNew = $("#viewer-photo-" + id);
            var $thumbNew = $(".viewer-stream").find('[data-photoid="' + id + '"]');
            $(".viewer-main-photos img").css("z-index", 1);
            $(".viewer-main-photos img.vw-active").removeClass("vw-active");
            $(".viewer-link.vw-active").removeClass("vw-active");
            $photoNew.css("z-index", 1e3).addClass("vw-active");
            $thumbNew.addClass("vw-active")
        },
        viewerNext: function() {
            $(".viewer-main-photos img").css("z-index", 1);
            $("#viewer-photo-" + id).css("z-index", 1e3)
        },
        viewerPrev: function() {
            $(".viewer-main-photos img").css("z-index", 1);
            $("#viewer-photo-" + id).css("z-index", 1e3)
        },
        pageClubGranca: function() {
            $(".club-more").on("click", function(event) {
                event.preventDefault();
                if (!$(this).closest(".club").hasClass("selected")) {
                    $(".club.selected").removeClass("selected");
                    $(this).closest(".club").addClass("selected")
                } else {
                    $(".club.selected").removeClass("selected")
                }
            })
        }
    };
    if (manic.conf.debug) {
        var ga = function(params) {
            var args = Array.prototype.slice.call(arguments, 1);
            console.log("ga(" + args.join(",") + ");")
        }
    }
    $(document).ready(function() {
        $(".single article").fitVids();
        $(".page .entry-content").fitVids();
        $("#player-info-modal").on("show.bs.modal", function(ev) {
            var playerCard = ev.relatedTarget.attributes["data-player"].value;
            $("#team-carousel").carousel(parseInt(playerCard));
            $("#team-carousel").carousel("pause")
        });
        $("#player-info-modal").on("shown.bs.modal", function(ev) {
            var activeItem = $(".item.active");
            var height = activeItem.find("img").height();
            activeItem.find(".carousel-caption").css("max-height", height - 65)
        });
        $("#team-carousel").on("slid.bs.carousel", function(ev) {
            $("#team-carousel").carousel("pause");
            var activeItem = $(".item.active");
            var height = activeItem.find("img").height();
            activeItem.find(".carousel-caption").css("max-height", height - 65)
        });
        $(".scheduleLEB").slick({
            mobileFirst: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: "5px",
            infinite: false,
            prevArrow: $(".scheduleLEB-control.control-prev"),
            nextArrow: $(".scheduleLEB-control.control-next"),
            initialSlide: $(".scheduleLEB").data("index"),
            responsive: [{
                breakpoint: 480,
                settings: {
                    centerPadding: "15%"
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    centerMode: true
                }
            }, {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    centerMode: true
                }
            }, {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    centerMode: true
                }
            }]
        });
        $(".schedule").slick({
            mobileFirst: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: "5px",
            infinite: false,
            prevArrow: $(".schedule-control.control-prev"),
            nextArrow: $(".schedule-control.control-next"),
            initialSlide: $(".schedule").data("index"),
            responsive: [{
                breakpoint: 480,
                settings: {
                    centerPadding: "15%"
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    centerMode: true
                }
            }, {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    centerMode: true
                }
            }, {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    centerMode: true
                }
            }]
        });
        $(".sponsors-logos").slick({
            mobileFirst: true,
            slidesToShow: 3,
            autoplay: true,
            autoplaySpeed: 1e3,
            speed: 1e3,
            arrows: false,
            pauseOnHover: false,
            responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 4
                }
            }, {
                breakpoint: 992,
                settings: {
                    slidesToShow: 5
                }
            }, {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 6
                }
            }, {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 7
                }
            }]
        });

        function initialize() {
            $(".map-canvas").each(function(idx) {
                var lat = parseFloat($(this).attr("data-lat"));
                var lng = parseFloat($(this).attr("data-lng"));
                var id = $(this).attr("id");
                var latlng = new google.maps.LatLng(lat, lng);
                var mapOptions = {
                    zoom: 16,
                    scrollwheel: false,
                    center: latlng
                };
                map = new google.maps.Map(document.getElementById(id), mapOptions);
                var icon = {
                    url: manic.conf.icon,
                    size: new google.maps.Size(140, 140),
                    anchor: new google.maps.Point(35, 70),
                    scaledSize: new google.maps.Size(70, 70)
                };
                var marker = new google.maps.Marker({
                    position: latlng,
                    map: map,
                    icon: icon
                })
            })
        }
        if ($(".map-canvas").length) {
            google.maps.event.addDomListener(window, "load", initialize)
        }
        $(".btn-to-top").click(function(e) {
            e.preventDefault();
            $("body,html").animate({
                scrollTop: 0
            }, 800)
        });
        $(".game-section, .school-index a").click(function(e) {
            e.preventDefault();
            var el = $($(this).attr("href"));
            if (el.length) {
                var offset = el.offset();
                $("body, html").animate({
                    scrollTop: offset.top
                }, 800)
            }
        });
        $(".game-statistics table").on("taphold", function(ev) {
            $(this).closest(".table-responsive").siblings(".fade-stripe").hide()
        });
        var $viewerMain = $(".single-mnc_galleries .viewer-main-photos");
        var $viewerStream = $(".viewer-stream");
        if ($viewerMain.length) {
            $viewerStream.slick({
                slidesToShow: 3,
                slidesToScroll: 3,
                centerMode: true,
                centerPadding: "20px",
                arrows: false,
                infinite: false,
                mobileFirst: true,
                responsive: [{
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 5
                    }
                }]
            });
            $viewerMain.slick({
                slidesToShow: 1,
                centerMode: true,
                centerPadding: "10px",
                centerPadding: "0",
                infinite: true,
                prevArrow: $(".viewer-control .control-prev"),
                nextArrow: $(".viewer-control .control-next"),
                asNavFor: ".viewer-stream",
                mobileFirst: true,
                responsive: [{
                    breakpoint: 768,
                    settings: {}
                }, {
                    breakpoint: 992,
                    settings: {}
                }, {
                    breakpoint: 1200,
                    settings: {}
                }, {
                    breakpoint: 1400,
                    settings: {}
                }, {
                    breakpoint: 1500,
                    settings: {}
                }, {
                    breakpoint: 1600,
                    settings: {}
                }, {
                    breakpoint: 1700,
                    settings: {}
                }]
            });
            var slider = $viewerMain.slick("getSlick");
            var count = slider.slideCount;
            if (count <= 1) {
                $viewerMain.slick("slickSetOption", "infinite", false, true)
            }
            $(".viewer-stream .slick-slide").on("click", function(event) {
                var id = $(this).data("slick-index");
                $viewerMain.slick("slickGoTo", id)
            })
        }
        if ($("body").hasClass("page-template-club-granca")) {
            manic.fn.pageClubGranca()
        }
    });
    $(window).load(function() {
        $(".viewer-main-photos").fitVids();
        if ($("body").hasClass("post-type-archive-cheerleaders")) {
            $("#cheers-video").fitVids()
        }
        if ($("body").hasClass("single-cheerleaders")) {
            var swiper = new Swiper(".swiper-container", {
                speed: 500,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true
                },
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev"
                }
            })
        }
        manic.fn.cbResize();
        if ($("body").hasClass("single-mnc_videos") || $("body").hasClass("single-mnc_galleries")) {
            $(".viewer-main-photos").css("opacity", "1")
        }
        $(window).on("resize", function(event) {
            manic.fn.cbResize(event)
        })
    });