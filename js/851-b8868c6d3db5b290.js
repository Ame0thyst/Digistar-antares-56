"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[851], {
    3040: function(t, e, n) {
        var r = n(3963);
        e.Z = void 0;
        var i = r(n(9118))
          , o = n(7437);
        e.Z = (0,
        i.default)((0,
        o.jsx)("path", {
            d: "M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z"
        }), "KeyboardArrowDown")
    },
    9177: function(t, e, n) {
        var r = n(9018)
          , i = n(7437);
        e.Z = (0,
        r.Z)((0,
        i.jsx)("path", {
            d: "M8 5v14l11-7z"
        }), "PlayArrow")
    },
    9118: function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        Object.defineProperty(e, "default", {
            enumerable: !0,
            get: function() {
                return r.createSvgIcon
            }
        });
        var r = n(9971)
    },
    9971: function(t, e, n) {
        n.r(e),
        n.d(e, {
            capitalize: function() {
                return i.Z
            },
            createChainedFunction: function() {
                return o
            },
            createSvgIcon: function() {
                return s.Z
            },
            debounce: function() {
                return a.Z
            },
            deprecatedPropType: function() {
                return u
            },
            isMuiElement: function() {
                return f
            },
            ownerDocument: function() {
                return p.Z
            },
            ownerWindow: function() {
                return h.Z
            },
            requirePropFactory: function() {
                return d
            },
            setRef: function() {
                return m
            },
            unstable_ClassNameGenerator: function() {
                return C
            },
            unstable_useEnhancedEffect: function() {
                return y.Z
            },
            unstable_useId: function() {
                return v
            },
            unsupportedProp: function() {
                return V
            },
            useControlled: function() {
                return w
            },
            useEventCallback: function() {
                return S.Z
            },
            useForkRef: function() {
                return E.Z
            },
            useIsFocusVisible: function() {
                return O.Z
            }
        });
        var r = n(5960)
          , i = n(2272)
          , o = n(4559).Z
          , s = n(9018)
          , a = n(7066)
          , u = function(t, e) {
            return () => null
        }
          , l = n(2265)
          , c = n.t(l, 2)
          , f = function(t, e) {
            var n, r;
            return l.isValidElement(t) && -1 !== e.indexOf(null != (n = t.type.muiName) ? n : null == (r = t.type) || null == (r = r._payload) || null == (r = r.value) ? void 0 : r.muiName)
        }
          , p = n(9645)
          , h = n(8095);
        n(2988);
        var d = function(t, e) {
            return () => null
        }
          , m = n(9969).Z
          , y = n(8632);
        let b = 0
          , g = c["useId".toString()];
        var v = function(t) {
            if (void 0 !== g) {
                let e = g();
                return null != t ? t : e
            }
            return function(t) {
                let[e,n] = l.useState(t)
                  , r = t || e;
                return l.useEffect( () => {
                    null == e && (b += 1,
                    n("mui-".concat(b)))
                }
                , [e]),
                r
            }(t)
        }
          , V = function(t, e, n, r, i) {
            return null
        }
          , w = function(t) {
            let {controlled: e, default: n, name: r, state: i="value"} = t
              , {current: o} = l.useRef(void 0 !== e)
              , [s,a] = l.useState(n)
              , u = l.useCallback(t => {
                o || a(t)
            }
            , []);
            return [o ? e : s, u]
        }
          , S = n(6182)
          , E = n(909)
          , O = n(9261);
        let C = {
            configure: t => {
                r.Z.configure(t)
            }
        }
    },
    7992: function(t, e, n) {
        n.r(e),
        n.d(e, {
            CountUp: function() {
                return i
            }
        });
        var r = function() {
            return (r = Object.assign || function(t) {
                for (var e, n = 1, r = arguments.length; n < r; n++)
                    for (var i in e = arguments[n])
                        Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                return t
            }
            ).apply(this, arguments)
        }
          , i = function() {
            function t(t, e, n) {
                var i = this;
                this.endVal = e,
                this.options = n,
                this.version = "2.8.0",
                this.defaults = {
                    startVal: 0,
                    decimalPlaces: 0,
                    duration: 2,
                    useEasing: !0,
                    useGrouping: !0,
                    useIndianSeparators: !1,
                    smartEasingThreshold: 999,
                    smartEasingAmount: 333,
                    separator: ",",
                    decimal: ".",
                    prefix: "",
                    suffix: "",
                    enableScrollSpy: !1,
                    scrollSpyDelay: 200,
                    scrollSpyOnce: !1
                },
                this.finalEndVal = null,
                this.useEasing = !0,
                this.countDown = !1,
                this.error = "",
                this.startVal = 0,
                this.paused = !0,
                this.once = !1,
                this.count = function(t) {
                    i.startTime || (i.startTime = t);
                    var e = t - i.startTime;
                    i.remaining = i.duration - e,
                    i.useEasing ? i.countDown ? i.frameVal = i.startVal - i.easingFn(e, 0, i.startVal - i.endVal, i.duration) : i.frameVal = i.easingFn(e, i.startVal, i.endVal - i.startVal, i.duration) : i.frameVal = i.startVal + (i.endVal - i.startVal) * (e / i.duration);
                    var n = i.countDown ? i.frameVal < i.endVal : i.frameVal > i.endVal;
                    i.frameVal = n ? i.endVal : i.frameVal,
                    i.frameVal = Number(i.frameVal.toFixed(i.options.decimalPlaces)),
                    i.printValue(i.frameVal),
                    e < i.duration ? i.rAF = requestAnimationFrame(i.count) : null !== i.finalEndVal ? i.update(i.finalEndVal) : i.options.onCompleteCallback && i.options.onCompleteCallback()
                }
                ,
                this.formatNumber = function(t) {
                    var e, n, r, o = (Math.abs(t).toFixed(i.options.decimalPlaces) + "").split(".");
                    if (e = o[0],
                    n = o.length > 1 ? i.options.decimal + o[1] : "",
                    i.options.useGrouping) {
                        r = "";
                        for (var s = 3, a = 0, u = 0, l = e.length; u < l; ++u)
                            i.options.useIndianSeparators && 4 === u && (s = 2,
                            a = 1),
                            0 !== u && a % s == 0 && (r = i.options.separator + r),
                            a++,
                            r = e[l - u - 1] + r;
                        e = r
                    }
                    return i.options.numerals && i.options.numerals.length && (e = e.replace(/[0-9]/g, function(t) {
                        return i.options.numerals[+t]
                    }),
                    n = n.replace(/[0-9]/g, function(t) {
                        return i.options.numerals[+t]
                    })),
                    (t < 0 ? "-" : "") + i.options.prefix + e + n + i.options.suffix
                }
                ,
                this.easeOutExpo = function(t, e, n, r) {
                    return n * (1 - Math.pow(2, -10 * t / r)) * 1024 / 1023 + e
                }
                ,
                this.options = r(r({}, this.defaults), n),
                this.formattingFn = this.options.formattingFn ? this.options.formattingFn : this.formatNumber,
                this.easingFn = this.options.easingFn ? this.options.easingFn : this.easeOutExpo,
                this.startVal = this.validateValue(this.options.startVal),
                this.frameVal = this.startVal,
                this.endVal = this.validateValue(e),
                this.options.decimalPlaces = Math.max(this.options.decimalPlaces),
                this.resetDuration(),
                this.options.separator = String(this.options.separator),
                this.useEasing = this.options.useEasing,
                "" === this.options.separator && (this.options.useGrouping = !1),
                this.el = "string" == typeof t ? document.getElementById(t) : t,
                this.el ? this.printValue(this.startVal) : this.error = "[CountUp] target is null or undefined",
                "undefined" != typeof window && this.options.enableScrollSpy && (this.error ? console.error(this.error, t) : (window.onScrollFns = window.onScrollFns || [],
                window.onScrollFns.push(function() {
                    return i.handleScroll(i)
                }),
                window.onscroll = function() {
                    window.onScrollFns.forEach(function(t) {
                        return t()
                    })
                }
                ,
                this.handleScroll(this)))
            }
            return t.prototype.handleScroll = function(t) {
                if (t && window && !t.once) {
                    var e = window.innerHeight + window.scrollY
                      , n = t.el.getBoundingClientRect()
                      , r = n.top + window.pageYOffset
                      , i = n.top + n.height + window.pageYOffset;
                    i < e && i > window.scrollY && t.paused ? (t.paused = !1,
                    setTimeout(function() {
                        return t.start()
                    }, t.options.scrollSpyDelay),
                    t.options.scrollSpyOnce && (t.once = !0)) : (window.scrollY > i || r > e) && !t.paused && t.reset()
                }
            }
            ,
            t.prototype.determineDirectionAndSmartEasing = function() {
                var t = this.finalEndVal ? this.finalEndVal : this.endVal;
                if (this.countDown = this.startVal > t,
                Math.abs(t - this.startVal) > this.options.smartEasingThreshold && this.options.useEasing) {
                    this.finalEndVal = t;
                    var e = this.countDown ? 1 : -1;
                    this.endVal = t + e * this.options.smartEasingAmount,
                    this.duration = this.duration / 2
                } else
                    this.endVal = t,
                    this.finalEndVal = null;
                null !== this.finalEndVal ? this.useEasing = !1 : this.useEasing = this.options.useEasing
            }
            ,
            t.prototype.start = function(t) {
                this.error || (this.options.onStartCallback && this.options.onStartCallback(),
                t && (this.options.onCompleteCallback = t),
                this.duration > 0 ? (this.determineDirectionAndSmartEasing(),
                this.paused = !1,
                this.rAF = requestAnimationFrame(this.count)) : this.printValue(this.endVal))
            }
            ,
            t.prototype.pauseResume = function() {
                this.paused ? (this.startTime = null,
                this.duration = this.remaining,
                this.startVal = this.frameVal,
                this.determineDirectionAndSmartEasing(),
                this.rAF = requestAnimationFrame(this.count)) : cancelAnimationFrame(this.rAF),
                this.paused = !this.paused
            }
            ,
            t.prototype.reset = function() {
                cancelAnimationFrame(this.rAF),
                this.paused = !0,
                this.resetDuration(),
                this.startVal = this.validateValue(this.options.startVal),
                this.frameVal = this.startVal,
                this.printValue(this.startVal)
            }
            ,
            t.prototype.update = function(t) {
                cancelAnimationFrame(this.rAF),
                this.startTime = null,
                this.endVal = this.validateValue(t),
                this.endVal !== this.frameVal && (this.startVal = this.frameVal,
                null == this.finalEndVal && this.resetDuration(),
                this.finalEndVal = null,
                this.determineDirectionAndSmartEasing(),
                this.rAF = requestAnimationFrame(this.count))
            }
            ,
            t.prototype.printValue = function(t) {
                var e;
                if (this.el) {
                    var n = this.formattingFn(t);
                    (null === (e = this.options.plugin) || void 0 === e ? void 0 : e.render) ? this.options.plugin.render(this.el, n) : "INPUT" === this.el.tagName ? this.el.value = n : "text" === this.el.tagName || "tspan" === this.el.tagName ? this.el.textContent = n : this.el.innerHTML = n
                }
            }
            ,
            t.prototype.ensureNumber = function(t) {
                return "number" == typeof t && !isNaN(t)
            }
            ,
            t.prototype.validateValue = function(t) {
                var e = Number(t);
                return this.ensureNumber(e) ? e : (this.error = "[CountUp] invalid start or end value: ".concat(t),
                null)
            }
            ,
            t.prototype.resetDuration = function() {
                this.startTime = null,
                this.duration = 1e3 * Number(this.options.duration),
                this.remaining = this.duration
            }
            ,
            t
        }()
    },
    7095: function(t, e, n) {
        var r = n(2265)
          , i = n(7992);
        function o(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                })),
                n.push.apply(n, r)
            }
            return n
        }
        function s(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? o(Object(n), !0).forEach(function(e) {
                    !function(t, e, n) {
                        var r;
                        (e = "symbol" == typeof (r = function(t, e) {
                            if ("object" != typeof t || !t)
                                return t;
                            var n = t[Symbol.toPrimitive];
                            if (void 0 !== n) {
                                var r = n.call(t, e || "default");
                                if ("object" != typeof r)
                                    return r;
                                throw TypeError("@@toPrimitive must return a primitive value.")
                            }
                            return ("string" === e ? String : Number)(t)
                        }(e, "string")) ? r : String(r))in t ? Object.defineProperty(t, e, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[e] = n
                    }(t, e, n[e])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach(function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                })
            }
            return t
        }
        function a() {
            return (a = Object.assign ? Object.assign.bind() : function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                }
                return t
            }
            ).apply(this, arguments)
        }
        function u(t, e) {
            if (null == t)
                return {};
            var n, r, i = function(t, e) {
                if (null == t)
                    return {};
                var n, r, i = {}, o = Object.keys(t);
                for (r = 0; r < o.length; r++)
                    n = o[r],
                    e.indexOf(n) >= 0 || (i[n] = t[n]);
                return i
            }(t, e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(t);
                for (r = 0; r < o.length; r++)
                    n = o[r],
                    !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (i[n] = t[n])
            }
            return i
        }
        function l(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var n = 0, r = Array(e); n < e; n++)
                r[n] = t[n];
            return r
        }
        var c = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement ? r.useLayoutEffect : r.useEffect;
        function f(t) {
            var e = r.useRef(t);
            return c(function() {
                e.current = t
            }),
            r.useCallback(function() {
                for (var t = arguments.length, n = Array(t), r = 0; r < t; r++)
                    n[r] = arguments[r];
                return e.current.apply(void 0, n)
            }, [])
        }
        var p = function(t, e) {
            var n = e.decimal
              , r = e.decimals
              , o = e.duration
              , s = e.easingFn
              , a = e.end
              , u = e.formattingFn
              , l = e.numerals
              , c = e.prefix
              , f = e.separator
              , p = e.start
              , h = e.suffix
              , d = e.useEasing
              , m = e.useGrouping
              , y = e.useIndianSeparators
              , b = e.enableScrollSpy
              , g = e.scrollSpyDelay
              , v = e.scrollSpyOnce
              , V = e.plugin;
            return new i.CountUp(t,a,{
                startVal: p,
                duration: o,
                decimal: n,
                decimalPlaces: r,
                easingFn: s,
                formattingFn: u,
                numerals: l,
                separator: f,
                prefix: c,
                suffix: h,
                plugin: V,
                useEasing: d,
                useIndianSeparators: y,
                useGrouping: m,
                enableScrollSpy: b,
                scrollSpyDelay: g,
                scrollSpyOnce: v
            })
        }
          , h = ["ref", "startOnMount", "enableReinitialize", "delay", "onEnd", "onStart", "onPauseResume", "onReset", "onUpdate"]
          , d = {
            decimal: ".",
            separator: ",",
            delay: null,
            prefix: "",
            suffix: "",
            duration: 2,
            start: 0,
            decimals: 0,
            startOnMount: !0,
            enableReinitialize: !0,
            useEasing: !0,
            useGrouping: !0,
            useIndianSeparators: !1
        }
          , m = function(t) {
            var e = Object.fromEntries(Object.entries(t).filter(function(t) {
                return void 0 !== (function(t) {
                    if (Array.isArray(t))
                        return t
                }(t) || function(t, e) {
                    var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != n) {
                        var r, i, o, s, a = [], u = !0, l = !1;
                        try {
                            for (o = (n = n.call(t)).next; !(u = (r = o.call(n)).done) && (a.push(r.value),
                            2 !== a.length); u = !0)
                                ;
                        } catch (t) {
                            l = !0,
                            i = t
                        } finally {
                            try {
                                if (!u && null != n.return && (s = n.return(),
                                Object(s) !== s))
                                    return
                            } finally {
                                if (l)
                                    throw i
                            }
                        }
                        return a
                    }
                }(t, 2) || function(t, e) {
                    if (t) {
                        if ("string" == typeof t)
                            return l(t, 2);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        if ("Object" === n && t.constructor && (n = t.constructor.name),
                        "Map" === n || "Set" === n)
                            return Array.from(t);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                            return l(t, 2)
                    }
                }(t, 2) || function() {
                    throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }())[1]
            }))
              , n = r.useMemo(function() {
                return s(s({}, d), e)
            }, [t])
              , i = n.ref
              , o = n.startOnMount
              , a = n.enableReinitialize
              , c = n.delay
              , m = n.onEnd
              , y = n.onStart
              , b = n.onPauseResume
              , g = n.onReset
              , v = n.onUpdate
              , V = u(n, h)
              , w = r.useRef()
              , S = r.useRef()
              , E = r.useRef(!1)
              , O = f(function() {
                return p("string" == typeof i ? i : i.current, V)
            })
              , C = f(function(t) {
                var e = w.current;
                if (e && !t)
                    return e;
                var n = O();
                return w.current = n,
                n
            })
              , F = f(function() {
                var t = function() {
                    return C(!0).start(function() {
                        null == m || m({
                            pauseResume: j,
                            reset: P,
                            start: x,
                            update: R
                        })
                    })
                };
                c && c > 0 ? S.current = setTimeout(t, 1e3 * c) : t(),
                null == y || y({
                    pauseResume: j,
                    reset: P,
                    update: R
                })
            })
              , j = f(function() {
                C().pauseResume(),
                null == b || b({
                    reset: P,
                    start: x,
                    update: R
                })
            })
              , P = f(function() {
                C().el && (S.current && clearTimeout(S.current),
                C().reset(),
                null == g || g({
                    pauseResume: j,
                    start: x,
                    update: R
                }))
            })
              , R = f(function(t) {
                C().update(t),
                null == v || v({
                    pauseResume: j,
                    reset: P,
                    start: x
                })
            })
              , x = f(function() {
                P(),
                F()
            })
              , A = f(function(t) {
                o && (t && P(),
                F())
            });
            return r.useEffect(function() {
                E.current ? a && A(!0) : (E.current = !0,
                A())
            }, [a, E, A, c, t.start, t.suffix, t.prefix, t.duration, t.separator, t.decimals, t.decimal, t.formattingFn]),
            r.useEffect(function() {
                return function() {
                    P()
                }
            }, [P]),
            {
                start: x,
                pauseResume: j,
                reset: P,
                update: R,
                getCountUp: C
            }
        }
          , y = ["className", "redraw", "containerProps", "children", "style"];
        e.ZP = function(t) {
            var e = t.className
              , n = t.redraw
              , i = t.containerProps
              , o = t.children
              , l = t.style
              , c = u(t, y)
              , p = r.useRef(null)
              , h = r.useRef(!1)
              , d = m(s(s({}, c), {}, {
                ref: p,
                startOnMount: "function" != typeof o || 0 === t.delay,
                enableReinitialize: !1
            }))
              , b = d.start
              , g = d.reset
              , v = d.update
              , V = d.pauseResume
              , w = d.getCountUp
              , S = f(function() {
                b()
            })
              , E = f(function(e) {
                t.preserveValue || g(),
                v(e)
            })
              , O = f(function() {
                if ("function" == typeof t.children && !(p.current instanceof Element)) {
                    console.error('Couldn\'t find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an Element, eg. <span ref={containerRef} />.');
                    return
                }
                w()
            });
            r.useEffect(function() {
                O()
            }, [O]),
            r.useEffect(function() {
                h.current && E(t.end)
            }, [t.end, E]);
            var C = n && t;
            return (r.useEffect(function() {
                n && h.current && S()
            }, [S, n, C]),
            r.useEffect(function() {
                !n && h.current && S()
            }, [S, n, t.start, t.suffix, t.prefix, t.duration, t.separator, t.decimals, t.decimal, t.className, t.formattingFn]),
            r.useEffect(function() {
                h.current = !0
            }, []),
            "function" == typeof o) ? o({
                countUpRef: p,
                start: b,
                reset: g,
                update: v,
                pauseResume: V,
                getCountUp: w
            }) : r.createElement("span", a({
                className: e,
                ref: p,
                style: l
            }, i), void 0 !== t.start ? w().formattingFn(t.start) : "")
        }
    },
    7830: function(t, e) {
        /**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
        var n = Symbol.for("react.element")
          , r = (Symbol.for("react.portal"),
        Symbol.for("react.fragment"),
        Symbol.for("react.strict_mode"),
        Symbol.for("react.profiler"),
        Symbol.for("react.provider"),
        Symbol.for("react.context"),
        Symbol.for("react.forward_ref"),
        Symbol.for("react.suspense"),
        Symbol.for("react.memo"),
        Symbol.for("react.lazy"),
        {
            isMounted: function() {
                return !1
            },
            enqueueForceUpdate: function() {},
            enqueueReplaceState: function() {},
            enqueueSetState: function() {}
        })
          , i = Object.assign
          , o = {};
        function s(t, e, n) {
            this.props = t,
            this.context = e,
            this.refs = o,
            this.updater = n || r
        }
        function a() {}
        function u(t, e, n) {
            this.props = t,
            this.context = e,
            this.refs = o,
            this.updater = n || r
        }
        s.prototype.isReactComponent = {},
        s.prototype.setState = function(t, e) {
            if ("object" != typeof t && "function" != typeof t && null != t)
                throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
            this.updater.enqueueSetState(this, t, e, "setState")
        }
        ,
        s.prototype.forceUpdate = function(t) {
            this.updater.enqueueForceUpdate(this, t, "forceUpdate")
        }
        ,
        a.prototype = s.prototype;
        var l = u.prototype = new a;
        l.constructor = u,
        i(l, s.prototype),
        l.isPureReactComponent = !0;
        var c = Object.prototype.hasOwnProperty
          , f = {
            key: !0,
            ref: !0,
            __self: !0,
            __source: !0
        };
        e.createElement = function(t, e, r) {
            var i, o = {}, s = null, a = null;
            if (null != e)
                for (i in void 0 !== e.ref && (a = e.ref),
                void 0 !== e.key && (s = "" + e.key),
                e)
                    c.call(e, i) && !f.hasOwnProperty(i) && (o[i] = e[i]);
            var u = arguments.length - 2;
            if (1 === u)
                o.children = r;
            else if (1 < u) {
                for (var l = Array(u), p = 0; p < u; p++)
                    l[p] = arguments[p + 2];
                o.children = l
            }
            if (t && t.defaultProps)
                for (i in u = t.defaultProps)
                    void 0 === o[i] && (o[i] = u[i]);
            return {
                $$typeof: n,
                type: t,
                key: s,
                ref: a,
                props: o,
                _owner: null
            }
        }
    },
    4410: function(t, e, n) {
        t.exports = n(7830)
    },
    3473: function(t, e, n) {
        n.d(e, {
            df: function() {
                return f
            }
        });
        var r = n(2265)
          , i = Object.defineProperty
          , o = (t, e, n) => e in t ? i(t, e, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: n
        }) : t[e] = n
          , s = (t, e, n) => (o(t, "symbol" != typeof e ? e + "" : e, n),
        n)
          , a = new Map
          , u = new WeakMap
          , l = 0
          , c = void 0
          , f = class extends r.Component {
            componentDidMount() {
                this.unobserve(),
                this.observeNode()
            }
            componentDidUpdate(t) {
                (t.rootMargin !== this.props.rootMargin || t.root !== this.props.root || t.threshold !== this.props.threshold || t.skip !== this.props.skip || t.trackVisibility !== this.props.trackVisibility || t.delay !== this.props.delay) && (this.unobserve(),
                this.observeNode())
            }
            componentWillUnmount() {
                this.unobserve()
            }
            observeNode() {
                if (!this.node || this.props.skip)
                    return;
                let {threshold: t, root: e, rootMargin: n, trackVisibility: r, delay: i, fallbackInView: o} = this.props;
                this._unobserveCb = function(t, e) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
                      , r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : c;
                    if (void 0 === window.IntersectionObserver && void 0 !== r) {
                        let i = t.getBoundingClientRect();
                        return e(r, {
                            isIntersecting: r,
                            target: t,
                            intersectionRatio: "number" == typeof n.threshold ? n.threshold : 0,
                            time: 0,
                            boundingClientRect: i,
                            intersectionRect: i,
                            rootBounds: i
                        }),
                        () => {}
                    }
                    let {id: i, observer: o, elements: s} = function(t) {
                        let e = Object.keys(t).sort().filter(e => void 0 !== t[e]).map(e => {
                            var n;
                            return "".concat(e, "_").concat("root" === e ? (n = t.root) ? (u.has(n) || (l += 1,
                            u.set(n, l.toString())),
                            u.get(n)) : "0" : t[e])
                        }
                        ).toString()
                          , n = a.get(e);
                        if (!n) {
                            let r;
                            let i = new Map
                              , o = new IntersectionObserver(e => {
                                e.forEach(e => {
                                    var n;
                                    let o = e.isIntersecting && r.some(t => e.intersectionRatio >= t);
                                    t.trackVisibility && void 0 === e.isVisible && (e.isVisible = o),
                                    null == (n = i.get(e.target)) || n.forEach(t => {
                                        t(o, e)
                                    }
                                    )
                                }
                                )
                            }
                            ,t);
                            r = o.thresholds || (Array.isArray(t.threshold) ? t.threshold : [t.threshold || 0]),
                            n = {
                                id: e,
                                observer: o,
                                elements: i
                            },
                            a.set(e, n)
                        }
                        return n
                    }(n)
                      , f = s.get(t) || [];
                    return s.has(t) || s.set(t, f),
                    f.push(e),
                    o.observe(t),
                    function() {
                        f.splice(f.indexOf(e), 1),
                        0 === f.length && (s.delete(t),
                        o.unobserve(t)),
                        0 === s.size && (o.disconnect(),
                        a.delete(i))
                    }
                }(this.node, this.handleChange, {
                    threshold: t,
                    root: e,
                    rootMargin: n,
                    trackVisibility: r,
                    delay: i
                }, o)
            }
            unobserve() {
                this._unobserveCb && (this._unobserveCb(),
                this._unobserveCb = null)
            }
            render() {
                let {children: t} = this.props;
                if ("function" == typeof t) {
                    let {inView: e, entry: n} = this.state;
                    return t({
                        inView: e,
                        entry: n,
                        ref: this.handleNode
                    })
                }
                let {as: e, triggerOnce: n, threshold: i, root: o, rootMargin: s, onChange: a, skip: u, trackVisibility: l, delay: c, initialInView: f, fallbackInView: p, ...h} = this.props;
                return r.createElement(e || "div", {
                    ref: this.handleNode,
                    ...h
                }, t)
            }
            constructor(t) {
                super(t),
                s(this, "node", null),
                s(this, "_unobserveCb", null),
                s(this, "handleNode", t => {
                    !this.node || (this.unobserve(),
                    t || this.props.triggerOnce || this.props.skip || this.setState({
                        inView: !!this.props.initialInView,
                        entry: void 0
                    })),
                    this.node = t || null,
                    this.observeNode()
                }
                ),
                s(this, "handleChange", (t, e) => {
                    t && this.props.triggerOnce && this.unobserve(),
                    "function" != typeof this.props.children || this.setState({
                        inView: t,
                        entry: e
                    }),
                    this.props.onChange && this.props.onChange(t, e)
                }
                ),
                this.state = {
                    inView: !!t.initialInView,
                    entry: void 0
                }
            }
        }
    }
}]);
