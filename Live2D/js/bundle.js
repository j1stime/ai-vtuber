! function (t) {
    var e = {};

    function i(r) {
        if (e[r]) return e[r].exports;
        var o = e[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return t[r].call(o.exports, o, o.exports, i), o.l = !0, o.exports
    }
    i.m = t, i.c = e, i.d = function (t, e, r) {
        i.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: r
        })
    }, i.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, i.t = function (t, e) {
        if (1 & e && (t = i(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var r = Object.create(null);
        if (i.r(r), Object.defineProperty(r, "default", {
            enumerable: !0,
            value: t
        }), 2 & e && "string" != typeof t)
            for (var o in t) i.d(r, o, function (e) {
                return t[e]
            }.bind(null, o));
        return r
    }, i.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t.default
        } : function () {
            return t
        };
        return i.d(e, "a", e), e
    }, i.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, i.p = "/dist/", i(i.s = 18)
}([function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = i(3),
        o = i(20),
        n = i(13),
        a = i(2),
        s = r.Live2DCubismFramework.Value,
        u = o.Live2DCubismFramework.CubismIdManager,
        l = n.Live2DCubismFramework.CubismRenderer;
    e.strtod = function (t, e) {
        for (var i = 0, r = 1; ; r++) {
            var o = t.slice(r - 1, r);
            if ("e" != o && "-" != o && "E" != o) {
                var n = t.substring(0, r),
                    a = Number(n);
                if (isNaN(a)) break;
                i = r
            }
        }
        var s = parseFloat(t);
        return isNaN(s) && (s = NaN), e[0] = t.slice(i), s
    },
        function (t) {
            var e = !1,
                i = !1,
                r = null,
                o = null;
            ! function (t) {
                t.vertexOffset = 0, t.vertexStep = 2
            }(t.Constant || (t.Constant = {})), t.csmDelete = function (t) {
                t && (t = void 0)
            };
            var n = function () {
                function t() { }
                return t.startUp = function (t) {
                    if (void 0 === t && (t = null), e) return a.CubismLogInfo("CubismFramework.startUp() is already done."), e;
                    if (null != (r = t) && Live2DCubismCore.Logging.csmSetLogFunction(r.logFunction), e = !0) {
                        var i = Live2DCubismCore.Version.csmGetVersion(),
                            o = (4278190080 & i) >> 24,
                            n = (16711680 & i) >> 16,
                            s = 65535 & i,
                            u = i;
                        a.CubismLogInfo("Live2D Cubism Core version: {0}.{1}.{2} ({3})", ("00" + o).slice(-2), ("00" + n).slice(-2), ("0000" + s).slice(-4), u)
                    }
                    return a.CubismLogInfo("CubismFramework.startUp() is complete."), e
                }, t.cleanUp = function () {
                    e = !1, i = !1, r = null, o = null
                }, t.initialize = function () {
                    a.CSM_ASSERT(e), e ? i ? a.CubismLogWarning("CubismFramework.initialize() skipped, already initialized.") : (s.staticInitializeNotForClientCall(), o = new u, i = !0, a.CubismLogInfo("CubismFramework.initialize() is complete.")) : a.CubismLogWarning("CubismFramework is not started.")
                }, t.dispose = function () {
                    a.CSM_ASSERT(e), e ? i ? (s.staticReleaseNotForClientCall(), o.release(), o = null, l.staticRelease(), i = !1, a.CubismLogInfo("CubismFramework.dispose() is complete.")) : a.CubismLogWarning("CubismFramework.dispose() skipped, not initialized.") : a.CubismLogWarning("CubismFramework is not started.")
                }, t.isStarted = function () {
                    return e
                }, t.isInitialized = function () {
                    return i
                }, t.coreLogFunction = function (t) {
                    Live2DCubismCore.Logging.csmGetLogFunction() && Live2DCubismCore.Logging.csmGetLogFunction()(t)
                }, t.getLoggingLevel = function () {
                    return null != r ? r.loggingLevel : h.LogLevel_Off
                }, t.getIdManager = function () {
                    return o
                }, t
            }();
            t.CubismFramework = n
        }(e.Live2DCubismFramework || (e.Live2DCubismFramework = {}));
    var h, p = function () { };
    e.Option = p,
        function (t) {
            t[t.LogLevel_Verbose = 0] = "LogLevel_Verbose", t[t.LogLevel_Debug = 1] = "LogLevel_Debug", t[t.LogLevel_Info = 2] = "LogLevel_Info", t[t.LogLevel_Warning = 3] = "LogLevel_Warning", t[t.LogLevel_Error = 4] = "LogLevel_Error", t[t.LogLevel_Off = 5] = "LogLevel_Off"
        }(h = e.LogLevel || (e.LogLevel = {}))
}, function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
        function (t) {
            var e = function () {
                function t(t) {
                    void 0 === t && (t = 0), t < 1 ? (this._ptr = [], this._capacity = 0, this._size = 0) : (this._ptr = new Array(t), this._capacity = t, this._size = 0)
                }
                return t.prototype.at = function (t) {
                    return this._ptr[t]
                }, t.prototype.set = function (t, e) {
                    this._ptr[t] = e
                }, t.prototype.get = function (t) {
                    void 0 === t && (t = 0);
                    for (var e = new Array, i = t; i < this._size; i++) e.push(this._ptr[i]);
                    return e
                }, t.prototype.pushBack = function (e) {
                    this._size >= this._capacity && this.prepareCapacity(0 == this._capacity ? t.s_defaultSize : 2 * this._capacity), this._ptr[this._size++] = e
                }, t.prototype.clear = function () {
                    this._ptr.length = 0, this._size = 0
                }, t.prototype.getSize = function () {
                    return this._size
                }, t.prototype.assign = function (t, e) {
                    this._size < t && this.prepareCapacity(t);
                    for (var i = 0; i < t; i++) this._ptr[i] = e;
                    this._size = t
                }, t.prototype.resize = function (t, e) {
                    void 0 === e && (e = null), this.updateSize(t, e, !0)
                }, t.prototype.updateSize = function (t, e, i) {
                    if (void 0 === e && (e = null), void 0 === i && (i = !0), this._size < t)
                        if (this.prepareCapacity(t), i)
                            for (var r = this._size; r < t; r++) this._ptr[r] = "function" == typeof e ? JSON.parse(JSON.stringify(new e)) : e;
                        else
                            for (r = this._size; r < t; r++) this._ptr[r] = e;
                    else {
                        var o = this._size - t;
                        this._ptr.splice(this._size - o, o)
                    }
                    this._size = t
                }, t.prototype.insert = function (t, e, i) {
                    var r = t._index,
                        o = e._index,
                        n = i._index,
                        a = n - o;
                    this.prepareCapacity(this._size + a);
                    var s = this._size - r;
                    if (s > 0)
                        for (var u = 0; u < s; u++) this._ptr.splice(r + u, 0, null);
                    for (u = o; u < n; u++, r++) this._ptr[r] = e._vector._ptr[u];
                    this._size = this._size + a
                }, t.prototype.remove = function (t) {
                    return !(t < 0 || this._size <= t) && (this._ptr.splice(t, 1), --this._size, !0)
                }, t.prototype.erase = function (t) {
                    var e = t._index;
                    return e < 0 || this._size <= e ? t : (this._ptr.splice(e, 1), --this._size, new i(this, e))
                }, t.prototype.prepareCapacity = function (t) {
                    t > this._capacity && (0 == this._capacity ? (this._ptr = new Array(t), this._capacity = t) : (this._ptr.length = t, this._capacity = t))
                }, t.prototype.begin = function () {
                    return 0 == this._size ? this.end() : new i(this, 0)
                }, t.prototype.end = function () {
                    return new i(this, this._size)
                }, t.prototype.getOffset = function (e) {
                    var i = new t;
                    return i._ptr = this.get(e), i._size = this.get(e).length, i._capacity = this.get(e).length, i
                }, t.s_defaultSize = 10, t
            }();
            t.csmVector = e;
            var i = function () {
                function t(t, e) {
                    this._vector = null != t ? t : null, this._index = null != e ? e : 0
                }
                return t.prototype.set = function (t) {
                    return this._index = t._index, this._vector = t._vector, this
                }, t.prototype.preIncrement = function () {
                    return ++this._index, this
                }, t.prototype.preDecrement = function () {
                    return --this._index, this
                }, t.prototype.increment = function () {
                    var e = new t(this._vector, this._index++);
                    return this._vector = e._vector, this._index = e._index, this
                }, t.prototype.decrement = function () {
                    var e = new t(this._vector, this._index--);
                    return this._vector = e._vector, this._index = e._index, this
                }, t.prototype.ptr = function () {
                    return this._vector._ptr[this._index]
                }, t.prototype.substitution = function (t) {
                    return this._index = t._index, this._vector = t._vector, this
                }, t.prototype.notEqual = function (t) {
                    return this._index != t._index || this._vector != t._vector
                }, t
            }();
            t.iterator = i
        }(e.Live2DCubismFramework || (e.Live2DCubismFramework = {}))
}, function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r, o = i(0),
        n = i(19);
    e.CubismLogPrint = function (t, e, i) {
        r.CubismDebug.print(t, "[CSM]" + e, i)
    }, e.CubismLogPrintIn = function (t, i, r) {
        e.CubismLogPrint(t, i + "\n", r)
    }, e.CSM_ASSERT = function (t) {
        console.assert(t)
    }, n.CSM_LOG_LEVEL <= n.CSM_LOG_LEVEL_VERBOSE ? (e.CubismLogVerbose = function (t) {
        for (var i = [], r = 1; r < arguments.length; r++) i[r - 1] = arguments[r];
        e.CubismLogPrintIn(o.LogLevel.LogLevel_Verbose, "[V]" + t, i)
    }, e.CubismLogDebug = function (t) {
        for (var i = [], r = 1; r < arguments.length; r++) i[r - 1] = arguments[r];
        e.CubismLogPrintIn(o.LogLevel.LogLevel_Debug, "[D]" + t, i)
    }, e.CubismLogInfo = function (t) {
        for (var i = [], r = 1; r < arguments.length; r++) i[r - 1] = arguments[r];
        e.CubismLogPrintIn(o.LogLevel.LogLevel_Info, "[I]" + t, i)
    }, e.CubismLogWarning = function (t) {
        for (var i = [], r = 1; r < arguments.length; r++) i[r - 1] = arguments[r];
        e.CubismLogPrintIn(o.LogLevel.LogLevel_Warning, "[W]" + t, i)
    }, e.CubismLogError = function (t) {
        for (var i = [], r = 1; r < arguments.length; r++) i[r - 1] = arguments[r];
        e.CubismLogPrintIn(o.LogLevel.LogLevel_Error, "[E]" + t, i)
    }) : n.CSM_LOG_LEVEL == n.CSM_LOG_LEVEL_DEBUG ? (e.CubismLogDebug = function (t) {
        for (var i = [], r = 1; r < arguments.length; r++) i[r - 1] = arguments[r];
        e.CubismLogPrintIn(o.LogLevel.LogLevel_Debug, "[D]" + t, i)
    }, e.CubismLogInfo = function (t) {
        for (var i = [], r = 1; r < arguments.length; r++) i[r - 1] = arguments[r];
        e.CubismLogPrintIn(o.LogLevel.LogLevel_Info, "[I]" + t, i)
    }, e.CubismLogWarning = function (t) {
        for (var i = [], r = 1; r < arguments.length; r++) i[r - 1] = arguments[r];
        e.CubismLogPrintIn(o.LogLevel.LogLevel_Warning, "[W]" + t, i)
    }, e.CubismLogError = function (t) {
        for (var i = [], r = 1; r < arguments.length; r++) i[r - 1] = arguments[r];
        e.CubismLogPrintIn(o.LogLevel.LogLevel_Error, "[E]" + t, i)
    }) : n.CSM_LOG_LEVEL == n.CSM_LOG_LEVEL_INFO ? (e.CubismLogInfo = function (t) {
        for (var i = [], r = 1; r < arguments.length; r++) i[r - 1] = arguments[r];
        e.CubismLogPrintIn(o.LogLevel.LogLevel_Info, "[I]" + t, i)
    }, e.CubismLogWarning = function (t) {
        for (var i = [], r = 1; r < arguments.length; r++) i[r - 1] = arguments[r];
        e.CubismLogPrintIn(o.LogLevel.LogLevel_Warning, "[W]" + t, i)
    }, e.CubismLogError = function (t) {
        for (var i = [], r = 1; r < arguments.length; r++) i[r - 1] = arguments[r];
        e.CubismLogPrintIn(o.LogLevel.LogLevel_Error, "[E]" + t, i)
    }) : n.CSM_LOG_LEVEL == n.CSM_LOG_LEVEL_WARNING ? (e.CubismLogWarning = function (t) {
        for (var i = [], r = 1; r < arguments.length; r++) i[r - 1] = arguments[r];
        e.CubismLogPrintIn(o.LogLevel.LogLevel_Warning, "[W]" + t, i)
    }, e.CubismLogError = function (t) {
        for (var i = [], r = 1; r < arguments.length; r++) i[r - 1] = arguments[r];
        e.CubismLogPrintIn(o.LogLevel.LogLevel_Error, "[E]" + t, i)
    }) : n.CSM_LOG_LEVEL == n.CSM_LOG_LEVEL_ERROR && (e.CubismLogError = function (t) {
        for (var i = [], r = 1; r < arguments.length; r++) i[r - 1] = arguments[r];
        e.CubismLogPrintIn(o.LogLevel.LogLevel_Error, "[E]" + t, i)
    }),
        function (t) {
            var e = function () {
                function t() { }
                return t.print = function (t, e, i) {
                    if (!(t < o.Live2DCubismFramework.CubismFramework.getLoggingLevel())) {
                        var r = o.Live2DCubismFramework.CubismFramework.coreLogFunction;
                        if (r) r(e.replace(/\{(\d+)\}/g, (function (t, e) {
                            return i[e]
                        })))
                    }
                }, t.dumpBytes = function (t, e, i) {
                    for (var r = 0; r < i; r++) r % 16 == 0 && r > 0 ? this.print(t, "\n") : r % 8 == 0 && r > 0 && this.print(t, "  "), this.print(t, "{0} ", [255 & e[r]]);
                    this.print(t, "\n")
                }, t
            }();
            t.CubismDebug = e
        }(r = e.Live2DCubismFramework || (e.Live2DCubismFramework = {}))
}, function (t, e, i) {
    "use strict";
    var r, o = this && this.__extends || (r = function (t, e) {
        return (r = Object.setPrototypeOf || {
            __proto__: []
        }
            instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
            })(t, e)
    }, function (t, e) {
        function i() {
            this.constructor = t
        }
        r(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
    });
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = i(6),
        a = i(7),
        s = i(1),
        u = i(2),
        l = i(0),
        h = s.Live2DCubismFramework.csmVector,
        p = a.Live2DCubismFramework.csmMap,
        g = n.Live2DCubismFramework.csmString;
    ! function (t) {
        var e = function () {
            function t() { }
            return t.prototype.getRawString = function (t, e) {
                return this.getString(t, e)
            }, t.prototype.toInt = function (t) {
                return void 0 === t && (t = 0), t
            }, t.prototype.toFloat = function (t) {
                return void 0 === t && (t = 0), t
            }, t.prototype.toBoolean = function (t) {
                return void 0 === t && (t = !1), t
            }, t.prototype.getSize = function () {
                return 0
            }, t.prototype.getArray = function (t) {
                return void 0 === t && (t = null), t
            }, t.prototype.getVector = function (t) {
                return t
            }, t.prototype.getMap = function (t) {
                return t
            }, t.prototype.getValueByIndex = function (e) {
                return t.errorValue.setErrorNotForClientCall("Error: type mismatch")
            }, t.prototype.getValueByString = function (e) {
                return t.nullValue.setErrorNotForClientCall("Error: type mismatch")
            }, t.prototype.getKeys = function () {
                return t.s_dummyKeys
            }, t.prototype.isError = function () {
                return !1
            }, t.prototype.isNull = function () {
                return !1
            }, t.prototype.isBool = function () {
                return !1
            }, t.prototype.isFloat = function () {
                return !1
            }, t.prototype.isString = function () {
                return !1
            }, t.prototype.isArray = function () {
                return !1
            }, t.prototype.isMap = function () {
                return !1
            }, t.prototype.equals = function (t) {
                return !1
            }, t.prototype.isStatic = function () {
                return !1
            }, t.prototype.setErrorNotForClientCall = function (t) {
                return s.errorValue
            }, t.staticInitializeNotForClientCall = function () {
                n.trueValue = new n(!0), n.falseValue = new n(!1), s.errorValue = new s("ERROR", !0), this.nullValue = new c, t.s_dummyKeys = new h
            }, t.staticReleaseNotForClientCall = function () {
                n.trueValue = null, n.falseValue = null, s.errorValue = null, t.nullValue = null, t.s_dummyKeys = null, n.trueValue = null, n.falseValue = null, s.errorValue = null, t.nullValue = null, t.s_dummyKeys = null
            }, t
        }();
        t.Value = e;
        var i = function () {
            function t(t, e) {
                this._error = null, this._lineCount = 0, this._root = null, null != t && this.parseBytes(t, e)
            }
            return t.create = function (e, i) {
                var r = new t;
                return r.parseBytes(e, i) ? r : (t.delete(r), null)
            }, t.delete = function (t) {
                null
            }, t.prototype.getRoot = function () {
                return this._root
            }, t.prototype.arrayBufferToString = function (t) {
                for (var e = new Uint8Array(t), i = "", r = 0, o = e.length; r < o; ++r) i += "%" + this.pad(e[r].toString(16));
                return i = decodeURIComponent(i)
            }, t.prototype.pad = function (t) {
                return t.length < 2 ? "0" + t : t
            }, t.prototype.parseBytes = function (t, e) {
                var i = new Array(1),
                    r = this.arrayBufferToString(t);
                if (this._root = this.parseValue(r, e, 0, i), this._error) {
                    var o;
                    return o = "Json parse error : @line " + (this._lineCount + 1) + "\n", this._root = new a(o), u.CubismLogInfo("{0}", this._root.getRawString()), !1
                }
                return null != this._root || (this._root = new s(new g(this._error), !1), !1)
            }, t.prototype.getParseError = function () {
                return this._error
            }, t.prototype.checkEndOfFile = function () {
                return this._root.getArray()[1].equals("EOF")
            }, t.prototype.parseValue = function (t, e, i, o) {
                if (this._error) return null;
                for (var s, u = null, h = i; h < e; h++) {
                    switch (t[h]) {
                        case "-":
                        case ".":
                        case "0":
                        case "1":
                        case "2":
                        case "3":
                        case "4":
                        case "5":
                        case "6":
                        case "7":
                        case "8":
                        case "9":
                            var p = new Array(1);
                            return s = l.strtod(t.slice(h), p), o[0] = t.indexOf(p[0]), new r(s);
                        case '"':
                            return new a(this.parseString(t, e, h + 1, o));
                        case "[":
                            return u = this.parseArray(t, e, h + 1, o);
                        case "{":
                            return u = this.parseObject(t, e, h + 1, o);
                        case "n":
                            return h + 3 < e ? (u = new c, o[0] = h + 4) : this._error = "parse null", u;
                        case "t":
                            return h + 3 < e ? (u = n.trueValue, o[0] = h + 4) : this._error = "parse true", u;
                        case "f":
                            return h + 4 < e ? (u = n.falseValue, o[0] = h + 5) : this._error = "illegal ',' position", u;
                        case ",":
                            return this._error = "illegal ',' position", null;
                        case "]":
                            return o[0] = h, null;
                        case "\n":
                            this._lineCount++
                    }
                }
                return this._error = "illegal end of value", null
            }, t.prototype.parseString = function (t, e, i, r) {
                if (this._error) return null;
                for (var o = i, n = new g(""), a = i; o < e; o++) switch (t[o]) {
                    case '"':
                        return r[0] = o + 1, n.append(t.slice(a), o - a), n.s;
                    case "//":
                        if (++o - 1 > a && n.append(t.slice(a), o - a), a = o + 1, o < e) switch (t[o]) {
                            case "\\":
                                n.expansion(1, "\\");
                                break;
                            case '"':
                                n.expansion(1, '"');
                                break;
                            case "/":
                                n.expansion(1, "/");
                                break;
                            case "b":
                                n.expansion(1, "\b");
                                break;
                            case "f":
                                n.expansion(1, "\f");
                                break;
                            case "n":
                                n.expansion(1, "\n");
                                break;
                            case "r":
                                n.expansion(1, "\r");
                                break;
                            case "t":
                                n.expansion(1, "\t");
                                break;
                            case "u":
                                this._error = "parse string/unicord escape not supported"
                        } else this._error = "parse string/escape error"
                }
                return this._error = "parse string/illegal end", null
            }, t.prototype.parseObject = function (t, e, i, r) {
                if (this._error) return null;
                for (var o = new _, n = "", a = i, s = Array(1), u = !1; a < e; a++) {
                    t: for (; a < e; a++) switch (t[a]) {
                        case '"':
                            if (n = this.parseString(t, e, a + 1, s), this._error) return null;
                            a = s[0], u = !0;
                            break t;
                        case "}":
                            return r[0] = a + 1, o;
                        case ":":
                            this._error = "illegal ':' position";
                            break;
                        case "\n":
                            this._lineCount++
                    }
                    if (!u) return this._error = "key not found",
                        null; u = !1; t: for (; a < e; a++) switch (t[a]) {
                            case ":":
                                u = !0, a++;
                                break t;
                            case "}":
                                this._error = "illegal '}' position";
                                break;
                            case "\n":
                                this._lineCount++
                        }
                    if (!u) return this._error = "':' not found",
                        null;
                    var l = this.parseValue(t, e, a, s);
                    if (this._error) return null; a = s[0],
                        o.put(n, l); t: for (; a < e; a++) switch (t[a]) {
                            case ",":
                                break t;
                            case "}":
                                return r[0] = a + 1, o;
                            case "\n":
                                this._lineCount++
                        }
                }
                return this._error = "illegal end of perseObject", null
            }, t.prototype.parseArray = function (t, e, i, r) {
                if (this._error) return null;
                for (var o = new d, n = i, a = new Array(1); n < e; n++) {
                    var s = this.parseValue(t, e, n, a);
                    if (this._error) return null;
                    n = a[0], s && o.add(s);
                    t: for (; n < e; n++) switch (t[n]) {
                        case ",":
                            break t;
                        case "]":
                            return r[0] = n + 1, o;
                        case "\n":
                            ++this._lineCount
                    }
                }
                return o = void 0, this._error = "illegal end of parseObject", null
            }, t
        }();
        t.CubismJson = i;
        var r = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                return i._value = e, i
            }
            return o(e, t), e.prototype.isFloat = function () {
                return !0
            }, e.prototype.getString = function (t, e) {
                return this._value = parseFloat("\0"), this._stringBuffer = "\0", this._stringBuffer
            }, e.prototype.toInt = function (t) {
                return void 0 === t && (t = 0), parseInt(this._value.toString())
            }, e.prototype.toFloat = function (t) {
                return void 0 === t && (t = 0), this._value
            }, e.prototype.equals = function (t) {
                return "number" == typeof t && (!Math.round(t) && t == this._value)
            }, e
        }(e);
        t.JsonFloat = r;
        var n = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                return i._boolValue = e, i
            }
            return o(e, t), e.prototype.isBool = function () {
                return !0
            }, e.prototype.toBoolean = function (t) {
                return void 0 === t && (t = !1), this._boolValue
            }, e.prototype.getString = function (t, e) {
                return this._stringBuffer = this._boolValue ? "true" : "false", this._stringBuffer
            }, e.prototype.equals = function (t) {
                return "boolean" == typeof t && t == this._boolValue
            }, e.prototype.isStatic = function () {
                return !0
            }, e
        }(e);
        t.JsonBoolean = n;
        var a = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                return "string" == typeof e && (i._stringBuffer = e), e instanceof g && (i._stringBuffer = e.s), i
            }
            return o(e, t), e.prototype.isString = function () {
                return !0
            }, e.prototype.getString = function (t, e) {
                return this._stringBuffer
            }, e.prototype.equals = function (t) {
                return "string" == typeof t ? this._stringBuffer == t : t instanceof g && this._stringBuffer == t.s
            }, e
        }(e);
        t.JsonString = a;
        var s = function (t) {
            function e(e, i) {
                var r = this;
                return (r = t.call(this, e) || this)._isStatic = i, r
            }
            return o(e, t), e.prototype.isStatic = function () {
                return this._isStatic
            }, e.prototype.setErrorNotForClientCall = function (t) {
                return this._stringBuffer = t, this
            }, e.prototype.isError = function () {
                return !0
            }, e
        }(a);
        t.JsonError = s;
        var c = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._stringBuffer = "NullValue", e
            }
            return o(e, t), e.prototype.isNull = function () {
                return !0
            }, e.prototype.getString = function (t, e) {
                return this._stringBuffer
            }, e.prototype.isStatic = function () {
                return !0
            }, e
        }(e);
        t.JsonNullvalue = c;
        var d = function (t) {
            function i() {
                var e = t.call(this) || this;
                return e._array = new h, e
            }
            return o(i, t), i.prototype.release = function () {
                for (var t = this._array.begin(); t.notEqual(this._array.end()); t.preIncrement()) {
                    var e = t.ptr();
                    e && !e.isStatic() && (e = void 0, e = null)
                }
            }, i.prototype.isArray = function () {
                return !0
            }, i.prototype.getValueByIndex = function (t) {
                if (t < 0 || this._array.getSize() <= t) return e.errorValue.setErrorNotForClientCall("Error: index out of bounds");
                var i = this._array.at(t);
                return null == i ? e.nullValue : i
            }, i.prototype.getValueByString = function (t) {
                return e.errorValue.setErrorNotForClientCall("Error: type mismatch")
            }, i.prototype.getString = function (t, e) {
                for (var i = e + "[\n", r = this._array.begin(); r.notEqual(this._array.end()); r.increment()) {
                    var o = r.ptr();
                    this._stringBuffer += e + "" + o.getString(e + " ") + "\n"
                }
                return this._stringBuffer = i + e + "]\n", this._stringBuffer
            }, i.prototype.add = function (t) {
                this._array.pushBack(t)
            }, i.prototype.getVector = function (t) {
                return void 0 === t && (t = null), this._array
            }, i.prototype.getSize = function () {
                return this._array.getSize()
            }, i
        }(e);
        t.JsonArray = d;
        var _ = function (t) {
            function i() {
                var e = t.call(this) || this;
                return e._map = new p, e
            }
            return o(i, t), i.prototype.release = function () {
                for (var t = this._map.begin(); t.notEqual(this._map.end());) {
                    var e = t.ptr().second;
                    e && !e.isStatic() && (e = void 0, e = null), t.preIncrement()
                }
            }, i.prototype.isMap = function () {
                return !0
            }, i.prototype.getValueByString = function (t) {
                if (t instanceof g) {
                    var i = this._map.getValue(t.s);
                    return null == i ? e.nullValue : i
                }
                for (var r = this._map.begin(); r.notEqual(this._map.end()); r.preIncrement())
                    if (r.ptr().first == t) return null == r.ptr().second ? e.nullValue : r.ptr().second;
                return e.nullValue
            }, i.prototype.getValueByIndex = function (t) {
                return e.errorValue.setErrorNotForClientCall("Error: type mismatch")
            }, i.prototype.getString = function (t, e) {
                this._stringBuffer = e + "{\n";
                for (var i = this._map.begin(); i.notEqual(this._map.end());) {
                    var r = i.ptr().first,
                        o = i.ptr().second;
                    this._stringBuffer += e + " " + r + " : " + o.getString(e + "   ") + " \n", i.preIncrement()
                }
                return this._stringBuffer += e + "}\n", this._stringBuffer
            }, i.prototype.getMap = function (t) {
                return this._map
            }, i.prototype.put = function (t, e) {
                this._map.setValue(t, e)
            }, i.prototype.getKeys = function () {
                if (!this._keys) {
                    this._keys = new h;
                    for (var t = this._map.begin(); t.notEqual(this._map.end());) {
                        var e = t.ptr().first;
                        this._keys.pushBack(e), t.preIncrement()
                    }
                }
                return this._keys
            }, i.prototype.getSize = function () {
                return this._keys.getSize()
            }, i
        }(e);
        t.JsonMap = _
    }(e.Live2DCubismFramework || (e.Live2DCubismFramework = {}))
}, function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
        function (t) {
            var e = function () {
                function t() {
                    this._tr = new Float32Array(16), this.loadIdentity()
                }
                return t.multiply = function (t, e, i) {
                    for (var r = new Float32Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), o = 0; o < 4; ++o)
                        for (var n = 0; n < 4; ++n)
                            for (var a = 0; a < 4; ++a) r[n + 4 * o] += t[a + 4 * o] * e[n + 4 * a];
                    for (o = 0; o < 16; ++o) i[o] = r[o]
                }, t.prototype.loadIdentity = function () {
                    var t = new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
                    this.setMatrix(t)
                }, t.prototype.setMatrix = function (t) {
                    for (var e = 0; e < 16; ++e) this._tr[e] = t[e]
                }, t.prototype.getArray = function () {
                    return this._tr
                }, t.prototype.getScaleX = function () {
                    return this._tr[0]
                }, t.prototype.getScaleY = function () {
                    return this._tr[5]
                }, t.prototype.getTranslateX = function () {
                    return this._tr[12]
                }, t.prototype.getTranslateY = function () {
                    return this._tr[13]
                }, t.prototype.transformX = function (t) {
                    return this._tr[0] * t + this._tr[12]
                }, t.prototype.transformY = function (t) {
                    return this._tr[5] * t + this._tr[13]
                }, t.prototype.invertTransformX = function (t) {
                    return (t - this._tr[12]) / this._tr[0]
                }, t.prototype.invertTransformY = function (t) {
                    return (t - this._tr[13]) / this._tr[5]
                }, t.prototype.translateRelative = function (e, i) {
                    var r = new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, e, i, 0, 1]);
                    t.multiply(r, this._tr, this._tr)
                }, t.prototype.translate = function (t, e) {
                    this._tr[12] = t, this._tr[13] = e
                }, t.prototype.translateX = function (t) {
                    this._tr[12] = t
                }, t.prototype.translateY = function (t) {
                    this._tr[13] = t
                }, t.prototype.scaleRelative = function (e, i) {
                    var r = new Float32Array([e, 0, 0, 0, 0, i, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
                    t.multiply(r, this._tr, this._tr)
                }, t.prototype.scale = function (t, e) {
                    this._tr[0] = t, this._tr[5] = e
                }, t.prototype.multiplyByMatrix = function (e) {
                    t.multiply(e.getArray(), this._tr, this._tr)
                }, t.prototype.clone = function () {
                    for (var e = new t, i = 0; i < this._tr.length; i++) e._tr[i] = this._tr[i];
                    return e
                }, t
            }();
            t.CubismMatrix44 = e
        }(e.Live2DCubismFramework || (e.Live2DCubismFramework = {}))
}, function (t, e, i) {
    "use strict";
    var r = this && this.__importStar || function (t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t)
            for (var i in t) Object.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        return e.default = t, e
    };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = i(0),
        n = o.Live2DCubismFramework.CubismFramework,
        a = i(22),
        s = i(11),
        u = i(49),
        l = i(14),
        h = r(i(12));
    e.canvas = null, e.s_instance = null, e.gl = null, e.frameBuffer = null;
    var p = function () {
        function t() {
            this._captured = !1, this._mouseX = 0, this._mouseY = 0, this._isEnd = !1, this._cubismOption = new o.Option, this._view = new a.LAppView, this._textureManager = new u.LAppTextureManager
        }
        return t.getInstance = function () {
            return null == e.s_instance && (e.s_instance = new t), e.s_instance
        }, t.releaseInstance = function () {
            null != e.s_instance && e.s_instance.release(), e.s_instance = null
        }, t.prototype.initialize = function () {
            var t = this;
            return e.canvas = document.getElementById("live2d"), document.nextScene = function () {
                l.LAppLive2DManager.getInstance().nextScene()
            }, document.addEventListener("mouseout", this.mouseout, !1), document.live2d_release = function () {
                e.canvas = null, document.removeEventListener("mouseout", t.mouseout), t.release()
            }, e.gl = e.canvas.getContext("webgl") || e.canvas.getContext("experimental-webgl"), e.gl ? (e.frameBuffer || (e.frameBuffer = e.gl.getParameter(e.gl.FRAMEBUFFER_BINDING)), e.gl.enable(e.gl.BLEND), e.gl.blendFunc(e.gl.SRC_ALPHA, e.gl.ONE_MINUS_SRC_ALPHA), "ontouchend" in e.canvas ? (e.canvas.ontouchstart = _, e.canvas.ontouchmove = m, e.canvas.ontouchend = f, e.canvas.ontouchcancel = y) : (e.canvas.onmousedown = g, e.canvas.onmousemove = c, e.canvas.onmouseup = d), this._view.initialize(), this.initializeCubism(), !0) : (alert("Cannot initialize WebGL. This browser does not support."), e.gl = null, document.body.innerHTML = "This browser does not support the <code>&lt;canvas&gt;</code> element.", !1)
        }, t.prototype.mouseout = function () {
            l.LAppLive2DManager.getInstance().onDrag(0, 0)
        }, t.prototype.release = function () {
            this._textureManager && this._textureManager.release(), this._textureManager = null, this._view && this._view.release(), this._view = null, l.LAppLive2DManager.releaseInstance(), n.dispose()
        }, t.prototype.run = function () {
            var t = this,
                i = function () {
                    null != e.s_instance && (s.LAppPal.updateTime(), e.gl.clearColor(0, 0, 0, 0), e.gl.enable(e.gl.DEPTH_TEST), e.gl.depthFunc(e.gl.LEQUAL), e.gl.clear(e.gl.COLOR_BUFFER_BIT | e.gl.DEPTH_BUFFER_BIT), e.gl.clearDepth(1), e.gl.enable(e.gl.BLEND), e.gl.blendFunc(e.gl.SRC_ALPHA, e.gl.ONE_MINUS_SRC_ALPHA), t._view.render(), requestAnimationFrame(i))
                };
            i()
        }, t.prototype.createShader = function () {
            var t = e.gl.createShader(e.gl.VERTEX_SHADER);
            if (null == t) return s.LAppPal.printMessage("failed to create vertexShader"), null;
            e.gl.shaderSource(t, "precision mediump float;attribute vec3 position;attribute vec2 uv;varying vec2 vuv;void main(void){   gl_Position = vec4(position, 1.0);   vuv = uv;}"), e.gl.compileShader(t);
            var i = e.gl.createShader(e.gl.FRAGMENT_SHADER);
            if (null == i) return s.LAppPal.printMessage("failed to create fragmentShader"), null;
            e.gl.shaderSource(i, "precision mediump float;varying vec2 vuv;uniform sampler2D texture;void main(void){   gl_FragColor = texture2D(texture, vuv);}"), e.gl.compileShader(i);
            var r = e.gl.createProgram();
            return e.gl.attachShader(r, t), e.gl.attachShader(r, i), e.gl.deleteShader(t), e.gl.deleteShader(i), e.gl.linkProgram(r), e.gl.useProgram(r), r
        }, t.prototype.getView = function () {
            return this._view
        }, t.prototype.getTextureManager = function () {
            return this._textureManager
        }, t.prototype.initializeCubism = function () {
            this._cubismOption.logFunction = s.LAppPal.printMessage, this._cubismOption.loggingLevel = h.CubismLoggingLevel, n.startUp(this._cubismOption), n.initialize(), l.LAppLive2DManager.getInstance(), s.LAppPal.updateTime(), this._view.initializeSprite()
        }, t
    }();

    function g(t) {
        if (p.getInstance()._view) {
            p.getInstance()._captured = !0;
            var e = t.pageX,
                i = t.pageY;
            p.getInstance()._view.onTouchesBegan(e, i)
        } else s.LAppPal.printMessage("view notfound")
    }

    function c(t) {
        if (p.getInstance()._captured)
            if (p.getInstance()._view) {
                var e = t.target.getBoundingClientRect(),
                    i = t.clientX - e.left,
                    r = t.clientY - e.top;
                p.getInstance()._view.onTouchesMoved(i, r)
            } else s.LAppPal.printMessage("view notfound")
    }

    function d(t) {
        if (p.getInstance()._captured = !1, p.getInstance()._view) {
            var e = t.target.getBoundingClientRect(),
                i = t.clientX - e.left,
                r = t.clientY - e.top;
            p.getInstance()._view.onTouchesEnded(i, r)
        } else s.LAppPal.printMessage("view notfound")
    }

    function _(t) {
        if (p.getInstance()._view) {
            p.getInstance()._captured = !0;
            var e = t.changedTouches[0].pageX,
                i = t.changedTouches[0].pageY;
            p.getInstance()._view.onTouchesBegan(e, i)
        } else s.LAppPal.printMessage("view notfound")
    }

    function m(t) {
        if (p.getInstance()._captured)
            if (p.getInstance()._view) {
                var e = t.target.getBoundingClientRect(),
                    i = t.changedTouches[0].clientX - e.left,
                    r = t.changedTouches[0].clientY - e.top;
                p.getInstance()._view.onTouchesMoved(i, r)
            } else s.LAppPal.printMessage("view notfound")
    }

    function f(t) {
        if (p.getInstance()._captured = !1, p.getInstance()._view) {
            var e = t.target.getBoundingClientRect(),
                i = t.changedTouches[0].clientX - e.left,
                r = t.changedTouches[0].clientY - e.top;
            p.getInstance()._view.onTouchesEnded(i, r)
        } else s.LAppPal.printMessage("view notfound")
    }

    function y(t) {
        if (p.getInstance()._captured = !1, p.getInstance()._view) {
            var e = t.target.getBoundingClientRect(),
                i = t.changedTouches[0].clientX - e.left,
                r = t.changedTouches[0].clientY - e.top;
            p.getInstance()._view.onTouchesEnded(i, r)
        } else s.LAppPal.printMessage("view notfound")
    }
    e.LAppDelegate = p
}, function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
        function (t) {
            var e = function () {
                function t(t) {
                    this.s = t
                }
                return t.prototype.append = function (t, e) {
                    return this.s += void 0 !== e ? t.substr(0, e) : t, this
                }, t.prototype.expansion = function (t, e) {
                    for (var i = 0; i < t; i++) this.append(e);
                    return this
                }, t.prototype.getBytes = function () {
                    return encodeURIComponent(this.s).replace(/%../g, "x").length
                }, t.prototype.getLength = function () {
                    return this.s.length
                }, t.prototype.isLess = function (t) {
                    return this.s < t.s
                }, t.prototype.isGreat = function (t) {
                    return this.s > t.s
                }, t.prototype.isEqual = function (t) {
                    return this.s == t
                }, t.prototype.isEmpty = function () {
                    return 0 == this.s.length
                }, t
            }();
            t.csmString = e
        }(e.Live2DCubismFramework || (e.Live2DCubismFramework = {}))
}, function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = i(2);
    ! function (t) {
        var e = function (t, e) {
            this.first = null == t ? null : t, this.second = null == e ? null : e
        };
        t.csmPair = e;
        var i = function () {
            function t(t) {
                null != t ? t < 1 ? (this._keyValues = [], this._dummyValue = null, this._size = 0) : (this._keyValues = new Array(t), this._size = t) : (this._keyValues = [], this._dummyValue = null, this._size = 0)
            }
            return t.prototype.release = function () {
                this.clear()
            }, t.prototype.appendKey = function (t) {
                this.prepareCapacity(this._size + 1, !1), this._keyValues[this._size] = new e(t), this._size += 1
            }, t.prototype.getValue = function (t) {
                for (var e = -1, i = 0; i < this._size; i++)
                    if (this._keyValues[i].first == t) {
                        e = i;
                        break
                    } return e >= 0 ? this._keyValues[e].second : (this.appendKey(t), this._keyValues[this._size - 1].second)
            }, t.prototype.setValue = function (t, e) {
                for (var i = -1, r = 0; r < this._size; r++)
                    if (this._keyValues[r].first == t) {
                        i = r;
                        break
                    } i >= 0 ? this._keyValues[i].second = e : (this.appendKey(t), this._keyValues[this._size - 1].second = e)
            }, t.prototype.isExist = function (t) {
                for (var e = 0; e < this._size; e++)
                    if (this._keyValues[e].first == t) return !0;
                return !1
            }, t.prototype.clear = function () {
                this._keyValues = void 0, this._keyValues = null, this._keyValues = [], this._size = 0
            }, t.prototype.getSize = function () {
                return this._size
            }, t.prototype.prepareCapacity = function (e, i) {
                e > this._keyValues.length && (0 == this._keyValues.length ? (!i && e < t.DefaultSize && (e = t.DefaultSize), this._keyValues.length = e) : (!i && e < 2 * this._keyValues.length && (e = 2 * this._keyValues.length), this._keyValues.length = e))
            }, t.prototype.begin = function () {
                return new o(this, 0)
            }, t.prototype.end = function () {
                return new o(this, this._size)
            }, t.prototype.erase = function (t) {
                var e = t._index;
                return e < 0 || this._size <= e ? t : (this._keyValues.splice(e, 1), --this._size, new o(this, e))
            }, t.prototype.dumpAsInt = function () {
                for (var t = 0; t < this._size; t++) r.CubismLogDebug("{0} ,", this._keyValues[t]), r.CubismLogDebug("\n")
            }, t.DefaultSize = 10, t
        }();
        t.csmMap = i;
        var o = function () {
            function t(t, e) {
                this._map = null != t ? t : new i, this._index = null != e ? e : 0
            }
            return t.prototype.set = function (t) {
                return this._index = t._index, this._map = t._map, this
            }, t.prototype.preIncrement = function () {
                return ++this._index, this
            }, t.prototype.preDecrement = function () {
                return --this._index, this
            }, t.prototype.increment = function () {
                var e = new t(this._map, this._index++);
                return this._map = e._map, this._index = e._index, this
            }, t.prototype.decrement = function () {
                var e = new t(this._map, this._index);
                return this._map = e._map, this._index = e._index, this
            }, t.prototype.ptr = function () {
                return this._map._keyValues[this._index]
            }, t.prototype.notEqual = function (t) {
                return this._index != t._index || this._map != t._map
            }, t
        }();
        t.iterator = o
    }(e.Live2DCubismFramework || (e.Live2DCubismFramework = {}))
}, function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = i(9),
        o = i(1),
        n = i(2),
        a = o.Live2DCubismFramework.csmVector,
        s = r.Live2DCubismFramework.CubismMath;
    ! function (t) {
        var e = function () {
            function t() {
                var t = this;
                this.setFinishedMotionHandler = function (e) {
                    return t._onFinishedMotion = e
                }, this.getFinishedMotionHandler = function () {
                    return t._onFinishedMotion
                }, this._fadeInSeconds = -1, this._fadeOutSeconds = -1, this._weight = 1, this._offsetSeconds = 0, this._firedEventValues = new a
            }
            return t.delete = function (t) {
                t.release(), t = void 0, t = null
            }, t.prototype.release = function () {
                this._weight = 0
            }, t.prototype.updateParameters = function (t, e, i) {
                if (e.isAvailable() && !e.isFinished()) {
                    if (!e.isStarted()) {
                        e.setIsStarted(!0), e.setStartTime(i - this._offsetSeconds), e.setFadeInStartTime(i);
                        var r = this.getDuration();
                        e.getEndTime() < 0 && e.setEndTime(r <= 0 ? -1 : e.getStartTime() + r)
                    }
                    var o = this._weight;
                    o = o * (0 == this._fadeInSeconds ? 1 : s.getEasingSine((i - e.getFadeInStartTime()) / this._fadeInSeconds)) * (0 == this._fadeOutSeconds || e.getEndTime() < 0 ? 1 : s.getEasingSine((e.getEndTime() - i) / this._fadeOutSeconds)), e.setState(i, o), n.CSM_ASSERT(0 <= o && o <= 1), this.doUpdateParameters(t, i, o, e), e.getEndTime() > 0 && e.getEndTime() < i && e.setIsFinished(!0)
                }
            }, t.prototype.setFadeInTime = function (t) {
                this._fadeInSeconds = t
            }, t.prototype.setFadeOutTime = function (t) {
                this._fadeOutSeconds = t
            }, t.prototype.getFadeOutTime = function () {
                return this._fadeOutSeconds
            }, t.prototype.getFadeInTime = function () {
                return this._fadeInSeconds
            }, t.prototype.setWeight = function (t) {
                this._weight = t
            }, t.prototype.getWeight = function () {
                return this._weight
            }, t.prototype.getDuration = function () {
                return -1
            }, t.prototype.getLoopDuration = function () {
                return -1
            }, t.prototype.setOffsetTime = function (t) {
                this._offsetSeconds = t
            }, t.prototype.getFiredEvent = function (t, e) {
                return this._firedEventValues
            }, t
        }();
        t.ACubismMotion = e
    }(e.Live2DCubismFramework || (e.Live2DCubismFramework = {}))
}, function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = i(10).Live2DCubismFramework.CubismVector2;
    ! function (t) {
        var e = function () {
            function t() { }
            return t.range = function (t, e, i) {
                return t < e ? t = e : t > i && (t = i), t
            }, t.sin = function (t) {
                return Math.sin(t)
            }, t.cos = function (t) {
                return Math.cos(t)
            }, t.abs = function (t) {
                return Math.abs(t)
            }, t.sqrt = function (t) {
                return Math.sqrt(t)
            }, t.getEasingSine = function (t) {
                return t < 0 ? 0 : t > 1 ? 1 : .5 - .5 * this.cos(t * Math.PI)
            }, t.max = function (t, e) {
                return t > e ? t : e
            }, t.min = function (t, e) {
                return t > e ? e : t
            }, t.degreesToRadian = function (t) {
                return t / 180 * Math.PI
            }, t.radianToDegrees = function (t) {
                return 180 * t / Math.PI
            }, t.directionToRadian = function (t, e) {
                for (var i = Math.atan2(e.y, e.x) - Math.atan2(t.y, t.x); i < -Math.PI;) i += 2 * Math.PI;
                for (; i > Math.PI;) i -= 2 * Math.PI;
                return i
            }, t.directionToDegrees = function (t, e) {
                var i = this.directionToRadian(t, e),
                    r = this.radianToDegrees(i);
                return e.x - t.x > 0 && (r = -r), r
            }, t.radianToDirection = function (t) {
                var e = new r;
                return e.x = this.sin(t), e.y = this.cos(t), e
            }, t
        }();
        t.CubismMath = e
    }(e.Live2DCubismFramework || (e.Live2DCubismFramework = {}))
}, function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
        function (t) {
            var e = function () {
                function t(t, e) {
                    this.x = t, this.y = e, this.x = null == t ? 0 : t, this.y = null == e ? 0 : e
                }
                return t.prototype.add = function (e) {
                    var i = new t(0, 0);
                    return i.x = this.x + e.x, i.y = this.y + e.y, i
                }, t.prototype.substract = function (e) {
                    var i = new t(0, 0);
                    return i.x = this.x - e.x, i.y = this.y - e.y, i
                }, t.prototype.multiply = function (e) {
                    var i = new t(0, 0);
                    return i.x = this.x * e.x, i.y = this.y * e.y, i
                }, t.prototype.multiplyByScaler = function (e) {
                    return this.multiply(new t(e, e))
                }, t.prototype.division = function (e) {
                    var i = new t(0, 0);
                    return i.x = this.x / e.x, i.y = this.y / e.y, i
                }, t.prototype.divisionByScalar = function (e) {
                    return this.division(new t(e, e))
                }, t.prototype.getLength = function () {
                    return Math.sqrt(this.x * this.x + this.y * this.y)
                }, t.prototype.getDistanceWith = function (t) {
                    return Math.sqrt((this.x - t.x) * (this.x - t.x) + (this.y - t.y) * (this.y - t.y))
                }, t.prototype.dot = function (t) {
                    return this.x * t.x + this.y * t.y
                }, t.prototype.normalize = function () {
                    var t = Math.pow(this.x * this.x + this.y * this.y, .5);
                    this.x = this.x / t, this.y = this.y / t
                }, t.prototype.isEqual = function (t) {
                    return this.x == t.x && this.y == t.y
                }, t.prototype.isNotEqual = function (t) {
                    return !this.isEqual(t)
                }, t
            }();
            t.CubismVector2 = e
        }(e.Live2DCubismFramework || (e.Live2DCubismFramework = {}))
}, function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = function () {
        function t() { }
        return t.loadFileAsBytes = function (t, e) {
            fetch(t).then((function (t) {
                return t.arrayBuffer()
            })).then((function (t) {
                return e(t, t.byteLength)
            }))
        }, t.getDeltaTime = function () {
            return this.s_deltaTime
        }, t.updateTime = function () {
            this.s_currentFrame = Date.now(), this.s_deltaTime = (this.s_currentFrame - this.s_lastFrame) / 1e3, this.s_lastFrame = this.s_currentFrame
        }, t.printMessage = function (t) {
            console.log(t)
        }, t.lastUpdate = Date.now(), t.s_currentFrame = 0, t.s_lastFrame = 0, t.s_deltaTime = 0, t
    }();
    e.LAppPal = r
}, function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = i(0);
    // var model_name = "Haru";
    // var xhr = new XMLHttpRequest();
    // xhr.open('GET', '../../config.json', true);
    // xhr.onreadystatechange = function () {
    //     if (xhr.readyState === 4 && xhr.status === 200) {
    //         var jsonData = JSON.parse(xhr.responseText);
    //         // 在这里处理读取到的JSON数据
    //         console.log(jsonData);
    //         model_name = jsonData["live2d"]["name"];
    //     }
    // };
    // xhr.send();
    e.ViewMaxScale = 2, e.ViewMinScale = .8, e.ViewLogicalLeft = -1, e.ViewLogicalRight = 1, e.ViewLogicalMaxLeft = -2, e.ViewLogicalMaxRight = 2, e.ViewLogicalMaxBottom = -2, e.ViewLogicalMaxTop = 2, e.ResourcesPath = "live2d-model/", e.BackImageName = "back_class_normal.png", e.ModelDir = [model_name], e.ModelDirSize = e.ModelDir.length, e.MotionGroupIdle = "Idle", e.MotionGroupTapBody = "TapBody", e.MotionGroupTapHead = "TapHead", e.HitAreaNameHead = "Head", e.HitAreaNameBody = "Body", e.PriorityNone = 0, e.PriorityIdle = 1, e.PriorityNormal = 2, e.PriorityForce = 3, e.DebugLogEnable = !0, e.DebugTouchLogEnable = !1, 
    e.CubismLoggingLevel = r.LogLevel.LogLevel_Verbose
}, function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = i(4).Live2DCubismFramework.CubismMatrix44;
    ! function (t) {
        var e = function () {
            function t() {
                this._isCulling = !1, this._isPremultipliedAlpha = !1, this._anisortopy = 0, this._model = null, this._modelColor = new i, this._mvpMatrix4x4 = new r, this._mvpMatrix4x4.loadIdentity()
            }
            return t.create = function () {
                return null
            }, t.delete = function (t) {
                null
            }, t.prototype.initialize = function (t) {
                this._model = t
            }, t.prototype.drawModel = function () {
                null != this.getModel() && this.doDrawModel()
            }, t.prototype.setMvpMatrix = function (t) {
                this._mvpMatrix4x4.setMatrix(t.getArray())
            }, t.prototype.getMvpMatrix = function () {
                return this._mvpMatrix4x4
            }, t.prototype.setModelColor = function (t, e, i, r) {
                t < 0 ? t = 0 : t > 1 && (t = 1), e < 0 ? e = 0 : e > 1 && (e = 1), i < 0 ? i = 0 : i > 1 && (i = 1), r < 0 ? r = 0 : r > 1 && (r = 1), this._modelColor.R = t, this._modelColor.G = e, this._modelColor.B = i, this._modelColor.A = r
            }, t.prototype.getModelColor = function () {
                return JSON.parse(JSON.stringify(this._modelColor))
            }, t.prototype.setIsPremultipliedAlpha = function (t) {
                this._isPremultipliedAlpha = t
            }, t.prototype.isPremultipliedAlpha = function () {
                return this._isPremultipliedAlpha
            }, t.prototype.setIsCulling = function (t) {
                this._isCulling = t
            }, t.prototype.isCulling = function () {
                return this._isCulling
            }, t.prototype.setAnisotropy = function (t) {
                this._anisortopy = t
            }, t.prototype.getAnisotropy = function () {
                return this._anisortopy
            }, t.prototype.getModel = function () {
                return this._model
            }, t
        }();
        t.CubismRenderer = e,
            function (t) {
                t[t.CubismBlendMode_Normal = 0] = "CubismBlendMode_Normal", t[t.CubismBlendMode_Additive = 1] = "CubismBlendMode_Additive", t[t.CubismBlendMode_Multiplicative = 2] = "CubismBlendMode_Multiplicative"
            }(t.CubismBlendMode || (t.CubismBlendMode = {}));
        var i = function () {
            this.R = 1, this.G = 1, this.B = 1, this.A = 1
        };
        t.CubismTextureColor = i
    }(e.Live2DCubismFramework || (e.Live2DCubismFramework = {}))
}, function (t, e, i) {
    "use strict";
    var r = this && this.__importStar || function (t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t)
            for (var i in t) Object.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        return e.default = t, e
    };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = i(4),
        n = i(1).Live2DCubismFramework.csmVector,
        a = o.Live2DCubismFramework.CubismMatrix44,
        s = i(25),
        u = i(11),
        l = i(5),
        h = r(i(12));
    e.s_instance = null;
    var p = function () {
        function t() {
            this._finishedMotion = function (t) {
                u.LAppPal.printMessage("Motion Finished:"), console.log(t)
            }, this._viewMatrix = new a, this._models = new n, this._sceneIndex = 0, this.changeScene(this._sceneIndex)
        }
        return t.getInstance = function () {
            return null == e.s_instance && (e.s_instance = new t), e.s_instance
        }, t.releaseInstance = function () {
            null != e.s_instance && (e.s_instance = void 0), e.s_instance = null
        }, t.prototype.getModel = function (t) {
            return t < this._models.getSize() ? this._models.at(t) : null
        }, t.prototype.releaseAllModel = function () {
            for (var t = 0; t < this._models.getSize(); t++) this._models.at(t).release(), this._models.set(t, null);
            this._models.clear()
        }, t.prototype.onDrag = function (t, e) {
            for (var i = 0; i < this._models.getSize(); i++) {
                var r = this.getModel(i);
                r && r.setDragging(t, e)
            }
        }, t.prototype.onTap = function (t, e) {
            console.log(t, e), h.DebugLogEnable && u.LAppPal.printMessage("[APP]tap point: {x: " + t.toFixed(2) + " y: " + e.toFixed(2) + "}");
            for (var i = 0; i < this._models.getSize(); i++) this._models.at(i).hitTest(h.HitAreaNameHead, t, e) ? (h.DebugLogEnable && u.LAppPal.printMessage("[APP]hit area: [" + h.HitAreaNameHead + "]"), this._models.at(i).setRandomExpression()) : this._models.at(i).hitTest(h.HitAreaNameBody, t, e) ? (h.DebugLogEnable && (u.LAppPal.printMessage("[APP]hit area: [" + h.HitAreaNameBody + "]"), document.touchBodyHandler()), this._models.at(i).startRandomMotion(h.MotionGroupTapBody, h.PriorityNormal, this._finishedMotion)) : this.currentPosition(t, e) === h.HitAreaNameHead ? this._models.at(i).startRandomMotion(h.MotionGroupTapHead, h.PriorityNormal) : this._models.at(i).startRandomMotion(h.MotionGroupTapBody, h.PriorityNormal)
        }, t.prototype.currentPosition = function (t, e, i) {
            if (void 0 === i && (i = "end"), t > -1 && t < 1 && e < 1 && e > -1) {
                if (console.log("--------lapplive2dmanager.ts ---  您点击到了canvas区域-------"), t > -.2 && t < .2 && e > .2 && e < .8) return console.log("--------lapplive2dmanager.ts ---  您点击到了人物的头部区域-------"), document.touchHeadHandler(), h.HitAreaNameHead;
                if (t > -.2 && t < .2 && e > -1 && e < .1) return document.touchBodyHandler(), console.log("--------lapplive2dmanager.ts ---  您点击到了人物的身体区域-------"), h.HitAreaNameBody
            }
        }, t.prototype.onUpdate = function () {
            var t = new a,
                e = l.canvas.width,
                i = l.canvas.height;
            t.scale(1, e / i), null != this._viewMatrix && t.multiplyByMatrix(this._viewMatrix);
            for (var r = t.clone(), o = this._models.getSize(), n = 0; n < o; ++n) {
                var s = this.getModel(n);
                t = r.clone(), s.update(), s.draw(t)
            }
        }, t.prototype.nextScene = function () {
            var t = (this._sceneIndex + 1) % h.ModelDirSize;
            this.changeScene(t)
        }, t.prototype.changeScene = function (t) {
            this._sceneIndex = t, h.DebugLogEnable && u.LAppPal.printMessage("[APP]model index: " + this._sceneIndex);
            var e = h.ModelDir[t],
                i = h.ResourcesPath + e + '/',
                r = h.ModelDir[t];
            r += ".model3.json", this.releaseAllModel(), this._models.pushBack(new s.LAppModel), this._models.at(0).loadAssets(i, r)
        }, t
    }();
    e.LAppLive2DManager = p
}, function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = i(28),
        o = i(1).Live2DCubismFramework.csmVector,
        n = r.Live2DCubismFramework.CubismMotionQueueEntry;
    ! function (t) {
        var e = function () {
            function e() {
                this._userTimeSeconds = 0, this._eventCallBack = null, this._eventCustomData = null, this._motions = new o
            }
            return e.prototype.release = function () {
                for (var t = 0; t < this._motions.getSize(); ++t) this._motions.at(t) && (this._motions.at(t).release(), this._motions.set(t, void 0), this._motions.set(t, null));
                this._motions = null
            }, e.prototype.startMotion = function (e, i, r) {
                if (null == e) return t.InvalidMotionQueueEntryHandleValue;
                for (var o = null, a = 0; a < this._motions.getSize(); ++a) null != (o = this._motions.at(a)) && o.startFadeout(o._motion.getFadeOutTime(), r);
                return (o = new n)._autoDelete = i, o._motion = e, this._motions.pushBack(o), o._motionQueueEntryHandle
            }, e.prototype.isFinished = function () {
                for (var t = this._motions.begin(); t.notEqual(this._motions.end());) {
                    var e = t.ptr();
                    if (null != e)
                        if (null != e._motion) {
                            if (!e.isFinished()) return !1;
                            t.preIncrement()
                        } else e.release(), e = void 0, e = null, t = this._motions.erase(t);
                    else t = this._motions.erase(t)
                }
                return !0
            }, e.prototype.isFinishedByHandle = function (t) {
                for (var e = this._motions.begin(); e.notEqual(this._motions.end()); e.increment()) {
                    var i = e.ptr();
                    if (null != i && (i._motionQueueEntryHandle == t && !i.isFinished())) return !1
                }
                return !0
            }, e.prototype.stopAllMotions = function () {
                for (var t = this._motions.begin(); t.notEqual(this._motions.end());) {
                    var e = t.ptr();
                    null != e ? (e.release(), e = void 0, e = null, t = this._motions.erase(t)) : t = this._motions.erase(t)
                }
            }, e.prototype.getCubismMotionQueueEntry = function (t) {
                for (var e = this._motions.begin(); e.notEqual(this._motions.end()); e.preIncrement()) {
                    var i = e.ptr();
                    if (null != i && i._motionQueueEntryHandle == t) return i
                }
                return null
            }, e.prototype.setEventCallback = function (t, e) {
                void 0 === e && (e = null), this._eventCallBack = t, this._eventCustomData = e
            }, e.prototype.doUpdateMotion = function (t, e) {
                for (var i = !1, r = this._motions.begin(); r.notEqual(this._motions.end());) {
                    var o = r.ptr();
                    if (null != o) {
                        var n = o._motion;
                        if (null != n) {
                            n.updateParameters(t, o, e), i = !0;
                            for (var a = n.getFiredEvent(o.getLastCheckEventTime() - o.getStartTime(), e - o.getStartTime()), s = 0; s < a.getSize(); ++s) this._eventCallBack(this, a.at(s), this._eventCustomData);
                            o.setLastCheckEventTime(e), o.isFinished() ? (o.release(), o = void 0, o = null, r = this._motions.erase(r)) : r.preIncrement()
                        } else o.release(), o = void 0, o = null, r = this._motions.erase(r)
                    } else r = this._motions.erase(r)
                }
                return i
            }, e
        }();
        t.CubismMotionQueueManager = e, t.InvalidMotionQueueEntryHandleValue = -1
    }(e.Live2DCubismFramework || (e.Live2DCubismFramework = {}))
}, function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
        function (t) {
            var e = function () {
                function t() {
                    this._currentTime = 0
                }
                return t.create = function () {
                    return new t
                }, t.delete = function (t) {
                    null != t && (t = null)
                }, t.prototype.setParameters = function (t) {
                    this._breathParameters = t
                }, t.prototype.getParameters = function () {
                    return this._breathParameters
                }, t.prototype.updateParameters = function (t, e) {
                    this._currentTime += e;
                    for (var i = 2 * this._currentTime * 3.14159, r = 0; r < this._breathParameters.getSize(); ++r) {
                        var o = this._breathParameters.at(r);
                        t.addParameterValueById(o.parameterId, o.offset + o.peak * Math.sin(i / o.cycle), o.weight)
                    }
                }, t
            }();
            t.CubismBreath = e;
            var i = function (t, e, i, r, o) {
                this.parameterId = null == t ? null : t, this.offset = null == e ? 0 : e, this.peak = null == i ? 0 : i, this.cycle = null == r ? 0 : r, this.weight = null == o ? 0 : o
            };
            t.BreathParameterData = i
        }(e.Live2DCubismFramework || (e.Live2DCubismFramework = {}))
}, function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = i(1).Live2DCubismFramework.csmVector;
    ! function (t) {
        var e, i = function () {
            function t(t) {
                if (this._blinkingState = e.EyeState_First, this._nextBlinkingTime = 0, this._stateStartTimeSeconds = 0, this._blinkingIntervalSeconds = 4, this._closingSeconds = .1, this._closedSeconds = .05, this._openingSeconds = .15, this._userTimeSeconds = 0, this._parameterIds = new r, null != t)
                    for (var i = 0; i < t.getEyeBlinkParameterCount(); ++i) this._parameterIds.pushBack(t.getEyeBlinkParameterId(i))
            }
            return t.create = function (e) {
                return void 0 === e && (e = null), new t(e)
            }, t.delete = function (t) {
                null != t && (t = null)
            }, t.prototype.setBlinkingInterval = function (t) {
                this._blinkingIntervalSeconds = t
            }, t.prototype.setBlinkingSetting = function (t, e, i) {
                this._closingSeconds = t, this._closedSeconds = e, this._openingSeconds = i
            }, t.prototype.setParameterIds = function (t) {
                this._parameterIds = t
            }, t.prototype.getParameterIds = function () {
                return this._parameterIds
            }, t.prototype.updateParameters = function (i, r) {
                var o;
                this._userTimeSeconds += r;
                var n = 0;
                switch (this._blinkingState) {
                    case e.EyeState_Closing:
                        (n = (this._userTimeSeconds - this._stateStartTimeSeconds) / this._closingSeconds) >= 1 && (n = 1, this._blinkingState = e.EyeState_Closed, this._stateStartTimeSeconds = this._userTimeSeconds), o = 1 - n;
                        break;
                    case e.EyeState_Closed:
                        (n = (this._userTimeSeconds - this._stateStartTimeSeconds) / this._closedSeconds) >= 1 && (this._blinkingState = e.EyeState_Opening, this._stateStartTimeSeconds = this._userTimeSeconds), o = 0;
                        break;
                    case e.EyeState_Opening:
                        (n = (this._userTimeSeconds - this._stateStartTimeSeconds) / this._openingSeconds) >= 1 && (n = 1, this._blinkingState = e.EyeState_Interval, this._nextBlinkingTime = this.determinNextBlinkingTiming()), o = n;
                        break;
                    case e.EyeState_Interval:
                        this._nextBlinkingTime < this._userTimeSeconds && (this._blinkingState = e.EyeState_Closing, this._stateStartTimeSeconds = this._userTimeSeconds), o = 1;
                        break;
                    case e.EyeState_First:
                    default:
                        this._blinkingState = e.EyeState_Interval, this._nextBlinkingTime = this.determinNextBlinkingTiming(), o = 1
                }
                t.CloseIfZero || (o = -o);
                for (var a = 0; a < this._parameterIds.getSize(); ++a) i.setParameterValueById(this._parameterIds.at(a), o)
            }, t.prototype.determinNextBlinkingTiming = function () {
                var t = Math.random();
                return this._userTimeSeconds + t * (2 * this._blinkingIntervalSeconds - 1)
            }, t.CloseIfZero = !0, t
        }();
        t.CubismEyeBlink = i,
            function (t) {
                t[t.EyeState_First = 0] = "EyeState_First", t[t.EyeState_Interval = 1] = "EyeState_Interval", t[t.EyeState_Closing = 2] = "EyeState_Closing", t[t.EyeState_Closed = 3] = "EyeState_Closed", t[t.EyeState_Opening = 4] = "EyeState_Opening"
            }(e = t.EyeState || (t.EyeState = {}))
    }(e.Live2DCubismFramework || (e.Live2DCubismFramework = {}))
}, function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = i(5);
    window.onload = function () {
        0 != r.LAppDelegate.getInstance().initialize() && r.LAppDelegate.getInstance().run()
    }, window.onbeforeunload = function () {
        return r.LAppDelegate.releaseInstance()
    }
}, function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.CSM_LOG_LEVEL_VERBOSE = 0, e.CSM_LOG_LEVEL_DEBUG = 1, e.CSM_LOG_LEVEL_INFO = 2, e.CSM_LOG_LEVEL_WARNING = 3, e.CSM_LOG_LEVEL_ERROR = 4, e.CSM_LOG_LEVEL_OFF = 5, e.CSM_LOG_LEVEL = e.CSM_LOG_LEVEL_VERBOSE
}, function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = i(1),
        o = i(21).Live2DCubismFramework.CubismId,
        n = r.Live2DCubismFramework.csmVector;
    ! function (t) {
        var e = function () {
            function t() {
                this._ids = new n
            }
            return t.prototype.release = function () {
                for (var t = 0; t < this._ids.getSize(); ++t) this._ids.set(t, void 0);
                this._ids = null
            }, t.prototype.registerIds = function (t) {
                for (var e = 0; e < t.length; e++) this.registerId(t[e])
            }, t.prototype.registerId = function (t) {
                var e = null;
                return "string" != typeof t ? this.registerId(t.s) : null != (e = this.findId(t)) ? e : (e = new o(t), this._ids.pushBack(e), e)
            }, t.prototype.getId = function (t) {
                return this.registerId(t)
            }, t.prototype.isExist = function (t) {
                return "string" == typeof t ? null != this.findId(t) : this.isExist(t.s)
            }, t.prototype.findId = function (t) {
                for (var e = 0; e < this._ids.getSize(); ++e)
                    if (this._ids.at(e).getString().isEqual(t)) return this._ids.at(e);
                return null
            }, t
        }();
        t.CubismIdManager = e
    }(e.Live2DCubismFramework || (e.Live2DCubismFramework = {}))
}, function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = i(6).Live2DCubismFramework.csmString;
    ! function (t) {
        var e = function () {
            function t(t) {
                this._id = "string" != typeof t ? t : new r(t)
            }
            return t.prototype.getString = function () {
                return this._id
            }, t.prototype.isEqual = function (e) {
                return "string" == typeof e ? this._id.isEqual(e) : e instanceof r ? this._id.isEqual(e.s) : e instanceof t && this._id.isEqual(e._id.s)
            }, t.prototype.isNotEqual = function (e) {
                return "string" == typeof e ? !this._id.isEqual(e) : e instanceof r ? !this._id.isEqual(e.s) : e instanceof t && !this._id.isEqual(e._id.s)
            }, t
        }();
        t.CubismId = e
    }(e.Live2DCubismFramework || (e.Live2DCubismFramework = {}))
}, function (t, e, i) {
    "use strict";
    var r = this && this.__importStar || function (t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t)
            for (var i in t) Object.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        return e.default = t, e
    };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = i(4),
        n = i(23).Live2DCubismFramework.CubismViewMatrix,
        a = o.Live2DCubismFramework.CubismMatrix44,
        s = i(24),
        u = i(14),
        l = i(5),
        h = i(11),
        p = r(i(12)),
        g = function () {
            function t() {
                this._programId = null, this._back = null, this._gear = null, this._touchManager = new s.TouchManager, this._deviceToScreen = new a, this._viewMatrix = new n
            }
            return t.prototype.initialize = function () {
                var t = l.canvas.width,
                    e = l.canvas.height,
                    i = e / t,
                    r = p.ViewLogicalLeft,
                    o = p.ViewLogicalRight,
                    n = -i,
                    a = i;
                this._viewMatrix.setScreenRect(r, o, n, a);
                var s = Math.abs(r - o);
                this._deviceToScreen.scaleRelative(s / t, -s / t), this._deviceToScreen.translateRelative(.5 * -t, .5 * -e), this._viewMatrix.setMaxScale(p.ViewMaxScale), this._viewMatrix.setMinScale(p.ViewMinScale), this._viewMatrix.setMaxScreenRect(p.ViewLogicalMaxLeft, p.ViewLogicalMaxRight, p.ViewLogicalMaxBottom, p.ViewLogicalMaxTop)
            }, t.prototype.release = function () {
                this._viewMatrix = null, this._touchManager = null, this._deviceToScreen = null, l.gl.deleteProgram(this._programId), this._programId = null
            }, t.prototype.render = function () {
                l.gl.useProgram(this._programId), l.gl.flush(), u.LAppLive2DManager.getInstance().onUpdate()
            }, t.prototype.initializeSprite = function () {
                l.canvas.width, l.canvas.height, l.LAppDelegate.getInstance().getTextureManager(), p.ResourcesPath;
                null == this._programId && (this._programId = l.LAppDelegate.getInstance().createShader())
            }, t.prototype.onTouchesBegan = function (t, e) {
                console.log("被触摸的时候调用"), console.log(t, e), this._touchManager.touchesBegan(t, e);
                u.LAppLive2DManager.getInstance()
            }, t.prototype.onTouchesMoved = function (t, e) {
                var i = this.transformViewX(this._touchManager.getX()),
                    r = this.transformViewY(this._touchManager.getY());
                this._touchManager.touchesMoved(t, e), u.LAppLive2DManager.getInstance().onDrag(i, r)
            }, t.prototype.onTouchesEnded = function (t, e) {
                console.log(t, e);
                var i = u.LAppLive2DManager.getInstance();
                i.onDrag(0, 0);
                var r = this._deviceToScreen.transformX(this._touchManager.getX()),
                    o = this._deviceToScreen.transformY(this._touchManager.getY());
                p.DebugTouchLogEnable && h.LAppPal.printMessage("[APP]touchesEnded x: " + r + " y: " + o), i.onTap(r, o)
            }, t.prototype.transformViewX = function (t) {
                var e = this._deviceToScreen.transformX(t);
                return this._viewMatrix.invertTransformX(e)
            }, t.prototype.transformViewY = function (t) {
                var e = this._deviceToScreen.transformY(t);
                return this._viewMatrix.invertTransformY(e)
            }, t.prototype.transformScreenX = function (t) {
                return this._deviceToScreen.transformX(t)
            }, t.prototype.transformScreenY = function (t) {
                return this._deviceToScreen.transformY(t)
            }, t
        }();
    e.LAppView = g
}, function (t, e, i) {
    "use strict";
    var r, o = this && this.__extends || (r = function (t, e) {
        return (r = Object.setPrototypeOf || {
            __proto__: []
        }
            instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
            })(t, e)
    }, function (t, e) {
        function i() {
            this.constructor = t
        }
        r(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
    });
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = i(4).Live2DCubismFramework.CubismMatrix44;
    ! function (t) {
        var e = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._screenLeft = 0, e._screenRight = 0, e._screenTop = 0, e._screenBottom = 0, e._maxLeft = 0, e._maxRight = 0, e._maxTop = 0, e._maxBottom = 0, e._maxScale = 0, e._minScale = 0, e
            }
            return o(e, t), e.prototype.adjustTranslate = function (t, e) {
                this._tr[0] * this._maxLeft + (this._tr[12] + t) > this._screenLeft && (t = this._screenLeft - this._tr[0] * this._maxLeft - this._tr[12]), this._tr[0] * this._maxRight + (this._tr[12] + t) < this._screenRight && (t = this._screenRight - this._tr[0] * this._maxRight - this._tr[12]), this._tr[5] * this._maxTop + (this._tr[13] + e) < this._screenTop && (e = this._screenTop - this._tr[5] * this._maxTop - this._tr[13]), this._tr[5] * this._maxBottom + (this._tr[13] + e) > this._screenBottom && (e = this._screenBottom - this._tr[5] * this._maxBottom - this._tr[13]);
                var i = new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t, e, 0, 1]);
                n.multiply(i, this._tr, this._tr)
            }, e.prototype.adjustScale = function (t, e, i) {
                var r = this.getMaxScale(),
                    o = this.getMinScale(),
                    a = i * this._tr[0];
                a < o ? this._tr[0] > 0 && (i = o / this._tr[0]) : a > r && this._tr[0] > 0 && (i = r / this._tr[0]);
                var s = new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t, e, 0, 1]),
                    u = new Float32Array([i, 0, 0, 0, 0, i, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]),
                    l = new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -t, -e, 0, 1]);
                n.multiply(l, this._tr, this._tr), n.multiply(u, this._tr, this._tr), n.multiply(s, this._tr, this._tr)
            }, e.prototype.setScreenRect = function (t, e, i, r) {
                this._screenLeft = t, this._screenRight = e, this._screenBottom = i, this._screenTop = r
            }, e.prototype.setMaxScreenRect = function (t, e, i, r) {
                this._maxLeft = t, this._maxRight = e, this._maxTop = r, this._maxBottom = i
            }, e.prototype.setMaxScale = function (t) {
                this._maxScale = t
            }, e.prototype.setMinScale = function (t) {
                this._minScale = t
            }, e.prototype.getMaxScale = function () {
                return this._maxScale
            }, e.prototype.getMinScale = function () {
                return this._minScale
            }, e.prototype.isMaxScale = function () {
                return this.getScaleX() >= this._maxScale
            }, e.prototype.isMinScale = function () {
                return this.getScaleX() <= this._minScale
            }, e.prototype.getScreenLeft = function () {
                return this._screenLeft
            }, e.prototype.getScreenRight = function () {
                return this._screenRight
            }, e.prototype.getScreenBottom = function () {
                return this._screenBottom
            }, e.prototype.getScreenTop = function () {
                return this._screenTop
            }, e.prototype.getMaxLeft = function () {
                return this._maxLeft
            }, e.prototype.getMaxRight = function () {
                return this._maxRight
            }, e.prototype.getMaxBottom = function () {
                return this._maxBottom
            }, e.prototype.getMaxTop = function () {
                return this._maxTop
            }, e
        }(n);
        t.CubismViewMatrix = e
    }(e.Live2DCubismFramework || (e.Live2DCubismFramework = {}))
}, function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = function () {
        function t() {
            this._startX = 0, this._startY = 0, this._lastX = 0, this._lastY = 0, this._lastX1 = 0, this._lastY1 = 0, this._lastX2 = 0, this._lastY2 = 0, this._lastTouchDistance = 0, this._deltaX = 0, this._deltaY = 0, this._scale = 1, this._touchSingle = !1, this._flipAvailable = !1
        }
        return t.prototype.getCenterX = function () {
            return this._lastX
        }, t.prototype.getCenterY = function () {
            return this._lastY
        }, t.prototype.getDeltaX = function () {
            return this._deltaX
        }, t.prototype.getDeltaY = function () {
            return this._deltaY
        }, t.prototype.getStartX = function () {
            return this._startX
        }, t.prototype.getStartY = function () {
            return this._startY
        }, t.prototype.getScale = function () {
            return this._scale
        }, t.prototype.getX = function () {
            return this._lastX
        }, t.prototype.getY = function () {
            return this._lastY
        }, t.prototype.getX1 = function () {
            return this._lastX1
        }, t.prototype.getY1 = function () {
            return this._lastY1
        }, t.prototype.getX2 = function () {
            return this._lastX2
        }, t.prototype.getY2 = function () {
            return this._lastY2
        }, t.prototype.isSingleTouch = function () {
            return this._touchSingle
        }, t.prototype.isFlickAvailable = function () {
            return this._flipAvailable
        }, t.prototype.disableFlick = function () {
            this._flipAvailable = !1
        }, t.prototype.touchesBegan = function (t, e) {
            this._lastX = t, this._lastY = e, this._startX = t, this._startY = e, this._lastTouchDistance = -1, this._flipAvailable = !0, this._touchSingle = !0
        }, t.prototype.touchesMoved = function (t, e) {
            this._lastX = t, this._lastY = e, this._lastTouchDistance = -1, this._touchSingle = !0
        }, t.prototype.getFlickDistance = function () {
            return this.calculateDistance(this._startX, this._startY, this._lastX, this._lastY)
        }, t.prototype.calculateDistance = function (t, e, i, r) {
            return Math.sqrt((t - i) * (t - i) + (e - r) * (e - r))
        }, t.prototype.calculateMovingAmount = function (t, e) {
            if (t > 0 != e > 0) return 0;
            var i = t > 0 ? 1 : -1,
                r = Math.abs(t),
                o = Math.abs(e);
            return i * (r < o ? r : o)
        }, t
    }();
    e.TouchManager = r
}, function (t, e, i) {
    "use strict";
    var r, o = this && this.__extends || (r = function (t, e) {
        return (r = Object.setPrototypeOf || {
            __proto__: []
        }
            instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
            })(t, e)
    }, function (t, e) {
        function i() {
            this.constructor = t
        }
        r(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
    }),
        n = this && this.__importStar || function (t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var i in t) Object.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e.default = t, e
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a, s = i(0),
        u = i(26),
        l = i(45),
        h = i(47),
        p = i(8),
        g = i(17),
        c = i(16),
        d = i(1),
        _ = i(7),
        m = i(15),
        f = i(2),
        y = m.Live2DCubismFramework.InvalidMotionQueueEntryHandleValue,
        v = _.Live2DCubismFramework.csmMap,
        S = d.Live2DCubismFramework.csmVector,
        C = c.Live2DCubismFramework.CubismBreath,
        b = c.Live2DCubismFramework.BreathParameterData,
        x = g.Live2DCubismFramework.CubismEyeBlink,
        M = p.Live2DCubismFramework.ACubismMotion,
        L = s.Live2DCubismFramework.CubismFramework,
        P = u.Live2DCubismFramework.CubismUserModel,
        B = l.Live2DCubismFramework.CubismModelSettingJson,
        w = h.Live2DCubismFramework,
        I = i(11),
        F = i(5),
        V = n(i(12));
    i(48),
        function (t) {
            t[t.LoadAssets = 0] = "LoadAssets", t[t.LoadModel = 1] = "LoadModel", t[t.WaitLoadModel = 2] = "WaitLoadModel", t[t.LoadExpression = 3] = "LoadExpression", t[t.WaitLoadExpression = 4] = "WaitLoadExpression", t[t.LoadPhysics = 5] = "LoadPhysics", t[t.WaitLoadPhysics = 6] = "WaitLoadPhysics", t[t.LoadPose = 7] = "LoadPose", t[t.WaitLoadPose = 8] = "WaitLoadPose", t[t.SetupEyeBlink = 9] = "SetupEyeBlink", t[t.SetupBreath = 10] = "SetupBreath", t[t.LoadUserData = 11] = "LoadUserData", t[t.WaitLoadUserData = 12] = "WaitLoadUserData", t[t.SetupEyeBlinkIds = 13] = "SetupEyeBlinkIds", t[t.SetupLipSyncIds = 14] = "SetupLipSyncIds", t[t.SetupLayout = 15] = "SetupLayout", t[t.LoadMotion = 16] = "LoadMotion", t[t.WaitLoadMotion = 17] = "WaitLoadMotion", t[t.CompleteInitialize = 18] = "CompleteInitialize", t[t.CompleteSetupModel = 19] = "CompleteSetupModel", t[t.LoadTexture = 20] = "LoadTexture", t[t.WaitLoadTexture = 21] = "WaitLoadTexture", t[t.CompleteSetup = 22] = "CompleteSetup"
        }(a || (a = {}));
    var D = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._modelSetting = null, e._modelHomeDir = null, e._userTimeSeconds = 0, e._eyeBlinkIds = new S, e._lipSyncIds = new S, e._motions = new v, e._expressions = new v, e._hitArea = new S, e._userArea = new S, e._idParamAngleX = L.getIdManager().getId(w.ParamAngleX), e._idParamAngleY = L.getIdManager().getId(w.ParamAngleY), e._idParamAngleZ = L.getIdManager().getId(w.ParamAngleZ), e._idParamEyeBallX = L.getIdManager().getId(w.ParamEyeBallX), e._idParamEyeBallY = L.getIdManager().getId(w.ParamEyeBallY), e._idParamBodyAngleX = L.getIdManager().getId(w.ParamBodyAngleX), e._state = a.LoadAssets, e._expressionCount = 0, e._textureCount = 0, e._motionCount = 0, e._allMotionCount = 0, e
        }
        return o(e, t), e.prototype.loadAssets = function (t, e) {
            var i = this;
            this._modelHomeDir = t, fetch(this._modelHomeDir + "/" + e).then((function (t) {
                return t.arrayBuffer()
            })).then((function (t) {
                var e = new B(t, t.byteLength);
                i._state = a.LoadModel, i.setupModel(e)
            }))
        }, e.prototype.setupModel = function (t) {
            var e = this;
            if (this._updating = !0, this._initialized = !1, this._modelSetting = t, "" != this._modelSetting.getModelFileName()) {
                var i = this._modelSetting.getModelFileName();
                fetch(this._modelHomeDir + "/" + i).then((function (t) {
                    return t.arrayBuffer()
                })).then((function (t) {
                    e.loadModel(t), e._state = a.LoadExpression, r()
                })), this._state = a.WaitLoadModel
            } else I.LAppPal.printMessage("Model data does not exist.");
            var r = function () {
                if (e._modelSetting.getExpressionCount() > 0) {
                    for (var t = e._modelSetting.getExpressionCount(), i = function (i) {
                        var r = e._modelSetting.getExpressionName(i),
                            n = e._modelSetting.getExpressionFileName(i);
                        fetch(e._modelHomeDir + "/" + n).then((function (t) {
                            return t.arrayBuffer()
                        })).then((function (i) {
                            var n = e.loadExpression(i, i.byteLength, r);
                            null != e._expressions.getValue(r) && (M.delete(e._expressions.getValue(r)), e._expressions.setValue(r, null)), e._expressions.setValue(r, n), e._expressionCount++, e._expressionCount >= t && (e._state = a.LoadPhysics, o())
                        }))
                    }, r = 0; r < t; r++) i(r);
                    e._state = a.WaitLoadExpression
                } else e._state = a.LoadPhysics, o()
            },
                o = function () {
                    if ("" != e._modelSetting.getPhysicsFileName()) {
                        var t = e._modelSetting.getPhysicsFileName();
                        fetch(e._modelHomeDir + "/" + t).then((function (t) {
                            return t.arrayBuffer()
                        })).then((function (t) {
                            e.loadPhysics(t, t.byteLength), e._state = a.LoadPose, n()
                        })), e._state = a.WaitLoadPhysics
                    } else e._state = a.LoadPose, n()
                },
                n = function () {
                    if ("" != e._modelSetting.getPoseFileName()) {
                        var t = e._modelSetting.getPoseFileName();
                        fetch(e._modelHomeDir + "/" + t).then((function (t) {
                            return t.arrayBuffer()
                        })).then((function (t) {
                            e.loadPose(t, t.byteLength), e._state = a.SetupEyeBlink, s()
                        })), e._state = a.WaitLoadPose
                    } else e._state = a.SetupEyeBlink, s()
                },
                s = function () {
                    e._modelSetting.getEyeBlinkParameterCount() > 0 && (e._eyeBlink = x.create(e._modelSetting), e._state = a.SetupBreath), u()
                },
                u = function () {
                    e._breath = C.create();
                    var t = new S;
                    t.pushBack(new b(e._idParamAngleX, 0, 15, 6.5345, .5)), t.pushBack(new b(e._idParamAngleY, 0, 8, 3.5345, .5)), t.pushBack(new b(e._idParamAngleZ, 0, 10, 5.5345, .5)), t.pushBack(new b(e._idParamBodyAngleX, 0, 4, 15.5345, .5)), t.pushBack(new b(L.getIdManager().getId(w.ParamBreath), 0, .5, 3.2345, .5)), e._breath.setParameters(t), e._state = a.LoadUserData, l()
                },
                l = function () {
                    if ("" != e._modelSetting.getUserDataFile()) {
                        var t = e._modelSetting.getUserDataFile();
                        fetch(e._modelHomeDir + "/" + t).then((function (t) {
                            return t.arrayBuffer()
                        })).then((function (t) {
                            e.loadUserData(t, t.byteLength), e._state = a.SetupEyeBlinkIds, h()
                        })), e._state = a.WaitLoadUserData
                    } else e._state = a.SetupEyeBlinkIds, h()
                },
                h = function () {
                    for (var t = e._modelSetting.getEyeBlinkParameterCount(), i = 0; i < t; ++i) e._eyeBlinkIds.pushBack(e._modelSetting.getEyeBlinkParameterId(i));
                    e._state = a.SetupLipSyncIds, p()
                },
                p = function () {
                    for (var t = e._modelSetting.getLipSyncParameterCount(), i = 0; i < t; ++i) e._lipSyncIds.pushBack(e._modelSetting.getLipSyncParameterId(i));
                    e._state = a.SetupLayout, g()
                },
                g = function () {
                    var t = new v;
                    e._modelSetting.getLayoutMap(t), e._modelMatrix.setupFromLayout(t), e._state = a.LoadMotion, c()
                },
                c = function () {
                    e._state = a.WaitLoadMotion, e._model.saveParameters(), e._allMotionCount = 0, e._motionCount = 0;
                    for (var t = [], i = e._modelSetting.getMotionGroupCount(), r = 0; r < i; r++) t[r] = e._modelSetting.getMotionGroupName(r), e._allMotionCount += e._modelSetting.getMotionCount(t[r]);
                    for (r = 0; r < i; r++) e.preLoadMotionGroup(t[r]);
                    0 == i && (e._state = a.LoadTexture, e._motionManager.stopAllMotions(), e._updating = !1, e._initialized = !0, e.createRenderer(), e.setupTextures(), e.getRenderer().startUp(F.gl))
                }
        }, e.prototype.setupTextures = function () {
            var t = this;
            if (this._state == a.LoadTexture) {
                for (var e = this._modelSetting.getTextureCount(), i = function (i) {
                    if ("" == r._modelSetting.getTextureFileName(i)) return console.log("getTextureFileName null"), "continue";
                    var o = r._modelSetting.getTextureFileName(i);
                    o = r._modelHomeDir + o;
                    F.LAppDelegate.getInstance().getTextureManager().createTextureFromPngFile(o, !0, (function (r) {
                        t.getRenderer().bindTexture(i, r.id), t._textureCount++, t._textureCount >= e && (t._state = a.CompleteSetup)
                    })), r.getRenderer().setIsPremultipliedAlpha(!0)
                }, r = this, o = 0; o < e; o++) i(o);
                this._state = a.WaitLoadTexture
            }
        }, e.prototype.reloadRenderer = function () {
            this.deleteRenderer(), this.createRenderer(), this.setupTextures()
        }, e.prototype.update = function () {
            if (this._state == a.CompleteSetup) {
                var t = I.LAppPal.getDeltaTime();
                this._userTimeSeconds += t, this._dragManager.update(t), this._dragX = this._dragManager.getX(), this._dragY = this._dragManager.getY();
                var e = !1;
                if (this._model.loadParameters(), this._motionManager.isFinished() ? this.startRandomMotion(V.MotionGroupIdle, V.PriorityIdle) : e = this._motionManager.updateMotion(this._model, t), this._model.saveParameters(), e || null != this._eyeBlink && this._eyeBlink.updateParameters(this._model, t), null != this._expressionManager && this._expressionManager.updateMotion(this._model, t), this._model.addParameterValueById(this._idParamAngleX, 30 * this._dragX), this._model.addParameterValueById(this._idParamAngleY, 30 * this._dragY), this._model.addParameterValueById(this._idParamAngleZ, this._dragX * this._dragY * -30), this._model.addParameterValueById(this._idParamBodyAngleX, 10 * this._dragX), this._model.addParameterValueById(this._idParamEyeBallX, this._dragX), this._model.addParameterValueById(this._idParamEyeBallY, this._dragY), null != this._breath && this._breath.updateParameters(this._model, t), null != this._physics && this._physics.evaluate(this._model, t), this._lipsync)
                    for (var i = 0; i < this._lipSyncIds.getSize(); ++i) this._model.addParameterValueById(this._lipSyncIds.at(i), 0, .8);
                null != this._pose && this._pose.updateParameters(this._model, t), this._model.update()
            }
        }, e.prototype.startMotion = function (t, e, i, r) {
            var o = this;
            if (i == V.PriorityForce) this._motionManager.setReservePriority(i);
            else if (!this._motionManager.reserveMotion(i)) return this._debugMode && I.LAppPal.printMessage("[APP]can't start motion."), y;
            var n = this._modelSetting.getMotionFileName(t, e),
                a = t + "_" + e,
                s = this._motions.getValue(a),
                u = !1;
            return null == s ? fetch(this._modelHomeDir + "/" + n).then((function (t) {
                return t.arrayBuffer()
            })).then((function (i) {
                s = o.loadMotion(i, i.byteLength, null, r);
                var n = o._modelSetting.getMotionFadeInTimeValue(t, e);
                n >= 0 && s.setFadeInTime(n), (n = o._modelSetting.getMotionFadeOutTimeValue(t, e)) >= 0 && s.setFadeOutTime(n), s.setEffectIds(o._eyeBlinkIds, o._lipSyncIds), u = !0
            })) : s.setFinishedMotionHandler(r), this._debugMode && I.LAppPal.printMessage("[APP]start motion: [" + t + "_" + e), this._motionManager.startMotionPriority(s, u, i)
        }, e.prototype.startRandomMotion = function (t, e, i) {
            if (0 == this._modelSetting.getMotionCount(t)) return y;
            var r = Math.floor(Math.random() * this._modelSetting.getMotionCount(t));
            return this.startMotion(t, r, e, i)
        }, e.prototype.setExpression = function (t) {
            var e = this._expressions.getValue(t);
            this._debugMode && I.LAppPal.printMessage("[APP]expression: [" + t + "]"), null != e ? this._expressionManager.startMotionPriority(e, !1, V.PriorityForce) : this._debugMode && I.LAppPal.printMessage("[APP]expression[" + t + "] is null")
        }, e.prototype.setRandomExpression = function () {
            if (0 != this._expressions.getSize())
                for (var t = Math.floor(Math.random() * this._expressions.getSize()), e = 0; e < this._expressions.getSize(); e++)
                    if (e == t) {
                        var i = this._expressions._keyValues[e].first;
                        return void this.setExpression(i)
                    }
        }, e.prototype.motionEventFired = function (t) {
            f.CubismLogInfo("{0} is fired on LAppModel!!", t.s)
        }, e.prototype.hitTest = function (t, e, i) {
            if (this._opacity < 1) return !1;
            for (var r = this._modelSetting.getHitAreasCount(), o = 0; o < r; o++)
                if (this._modelSetting.getHitAreaName(o) == t) {
                    var n = this._modelSetting.getHitAreaId(o);
                    return this.isHit(n, e, i)
                } return !1
        }, e.prototype.preLoadMotionGroup = function (t) {
            for (var e = this, i = function (i) {
                var o = r._modelSetting.getMotionFileName(t, i),
                    n = t + "_" + i;
                r._debugMode && I.LAppPal.printMessage("[APP]load motion: " + o + " => [" + n + "]"), fetch(r._modelHomeDir + "/" + o).then((function (t) {
                    return t.arrayBuffer()
                })).then((function (r) {
                    var o = e.loadMotion(r, r.byteLength, n),
                        s = e._modelSetting.getMotionFadeInTimeValue(t, i);
                    s >= 0 && o.setFadeInTime(s), (s = e._modelSetting.getMotionFadeOutTimeValue(t, i)) >= 0 && o.setFadeOutTime(s), o.setEffectIds(e._eyeBlinkIds, e._lipSyncIds), null != e._motions.getValue(n) && M.delete(e._motions.getValue(n)), e._motions.setValue(n, o), e._motionCount++, e._motionCount >= e._allMotionCount && (e._state = a.LoadTexture, e._motionManager.stopAllMotions(), e._updating = !1, e._initialized = !0, e.createRenderer(), e.setupTextures(), e.getRenderer().startUp(F.gl))
                }))
            }, r = this, o = 0; o < this._modelSetting.getMotionCount(t); o++) i(o)
        }, e.prototype.releaseMotions = function () {
            this._motions.clear()
        }, e.prototype.releaseExpressions = function () {
            this._expressions.clear()
        }, e.prototype.doDraw = function () {
            if (null != this._model) {
                var t = [0, 0, F.canvas.width, F.canvas.height];
                this.getRenderer().setRenderState(F.frameBuffer, t), this.getRenderer().drawModel()
            }
        }, e.prototype.draw = function (t) {
            null != this._model && this._state == a.CompleteSetup && (t.multiplyByMatrix(this._modelMatrix), this.getRenderer().setMvpMatrix(t), this.doDraw())
        }, e
    }(P);
    e.LAppModel = D
}, function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = i(0),
        o = i(27),
        n = i(29),
        a = i(30),
        s = i(31),
        u = i(33),
        l = i(36),
        h = i(37),
        p = i(38),
        g = i(40),
        c = i(16),
        d = i(17),
        _ = i(43),
        m = i(2),
        f = _.Live2DCubismFramework.CubismRenderer_WebGL,
        y = d.Live2DCubismFramework.CubismEyeBlink,
        v = c.Live2DCubismFramework.CubismBreath,
        S = r.Live2DCubismFramework.Constant,
        C = g.Live2DCubismFramework.CubismPhysics,
        b = p.Live2DCubismFramework.CubismModelUserData,
        x = h.Live2DCubismFramework.CubismPose,
        M = l.Live2DCubismFramework.CubismExpressionMotion,
        L = u.Live2DCubismFramework.CubismMotion,
        P = s.Live2DCubismFramework.CubismMoc,
        B = a.Live2DCubismFramework.CubismModelMatrix,
        w = n.Live2DCubismFramework.CubismTargetPoint,
        I = o.Live2DCubismFramework.CubismMotionManager;
    ! function (t) {
        var e = function () {
            function t() {
                this.loadMotion = function (t, e, i, r) {
                    return L.create(t, e, r)
                }, this._moc = null, this._model = null, this._motionManager = null, this._expressionManager = null, this._eyeBlink = null, this._breath = null, this._modelMatrix = null, this._pose = null, this._dragManager = null, this._physics = null, this._modelUserData = null, this._initialized = !1, this._updating = !1, this._opacity = 1, this._lipsync = !0, this._lastLipSyncValue = 0, this._dragX = 0, this._dragY = 0, this._accelerationX = 0, this._accelerationY = 0, this._accelerationZ = 0, this._debugMode = !1, this._renderer = null, this._motionManager = new I, this._motionManager.setEventCallback(t.cubismDefaultMotionEventCallback, this), this._expressionManager = new I, this._dragManager = new w
            }
            return t.prototype.isInitialized = function () {
                return this._initialized
            }, t.prototype.setInitialized = function (t) {
                this._initialized = t
            }, t.prototype.isUpdating = function () {
                return this._updating
            }, t.prototype.setUpdating = function (t) {
                this._updating = t
            }, t.prototype.setDragging = function (t, e) {
                this._dragManager.set(t, e)
            }, t.prototype.setAcceleration = function (t, e, i) {
                this._accelerationX = t, this._accelerationY = e, this._accelerationZ = i
            }, t.prototype.getModelMatrix = function () {
                return this._modelMatrix
            }, t.prototype.setOpacity = function (t) {
                this._opacity = t
            }, t.prototype.getOpacity = function () {
                return this._opacity
            }, t.prototype.loadModel = function (t) {
                this._moc = P.create(t), this._model = this._moc.createModel(), this._model.saveParameters(), null != this._moc && null != this._model ? (this._modelMatrix = new B(this._model.getCanvasWidth(), this._model.getCanvasHeight()), console.log("1")) : m.CubismLogError("Failed to CreateModel().")
            }, t.prototype.loadExpression = function (t, e, i) {
                return M.create(t, e)
            }, t.prototype.loadPose = function (t, e) {
                this._pose = x.create(t, e)
            }, t.prototype.loadUserData = function (t, e) {
                this._modelUserData = b.create(t, e)
            }, t.prototype.loadPhysics = function (t, e) {
                this._physics = C.create(t, e)
            }, t.prototype.isHit = function (t, e, i) {
                var r = this._model.getDrawableIndex(t);
                if (r < 0) return !1;
                for (var o = this._model.getDrawableVertexCount(r), n = this._model.getDrawableVertices(r), a = n[0], s = n[0], u = n[1], l = n[1], h = 1; h < o; ++h) {
                    var p = n[S.vertexOffset + h * S.vertexStep],
                        g = n[S.vertexOffset + h * S.vertexStep + 1];
                    p < a && (a = p), p > s && (s = p), g < u && (u = g), g > l && (l = g)
                }
                var c = this._modelMatrix.invertTransformX(e),
                    d = this._modelMatrix.invertTransformY(i);
                return a <= c && c <= s && u <= d && d <= l
            }, t.prototype.getModel = function () {
                return this._model
            }, t.prototype.getRenderer = function () {
                return this._renderer
            }, t.prototype.createRenderer = function () {
                this._renderer && this.deleteRenderer(), this._renderer = new f, this._renderer.initialize(this._model)
            }, t.prototype.deleteRenderer = function () {
                null != this._renderer && (this._renderer.release(), this._renderer = null)
            }, t.prototype.motionEventFired = function (t) {
                m.CubismLogInfo("{0}", t.s)
            }, t.cubismDefaultMotionEventCallback = function (t, e, i) {
                null != i && i.motionEventFired(e)
            }, t.prototype.release = function () {
                null != this._motionManager && (this._motionManager.release(), this._motionManager = null), null != this._expressionManager && (this._expressionManager.release(), this._expressionManager = null), null != this._moc && (this._moc.deleteModel(this._model), this._moc.release(), this._moc = null), this._modelMatrix = null, x.delete(this._pose), y.delete(this._eyeBlink), v.delete(this._breath), this._dragManager = null, C.delete(this._physics), b.delete(this._modelUserData), this.deleteRenderer()
            }, t
        }();
        t.CubismUserModel = e
    }(e.Live2DCubismFramework || (e.Live2DCubismFramework = {}))
}, function (t, e, i) {
    "use strict";
    var r, o = this && this.__extends || (r = function (t, e) {
        return (r = Object.setPrototypeOf || {
            __proto__: []
        }
            instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
            })(t, e)
    }, function (t, e) {
        function i() {
            this.constructor = t
        }
        r(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
    });
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = i(15).Live2DCubismFramework.CubismMotionQueueManager;
    ! function (t) {
        var e = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._currentPriority = 0, e._reservePriority = 0, e
            }
            return o(e, t), e.prototype.getCurrentPriority = function () {
                return this._currentPriority
            }, e.prototype.getReservePriority = function () {
                return this._reservePriority
            }, e.prototype.setReservePriority = function (t) {
                this._reservePriority = t
            }, e.prototype.startMotionPriority = function (e, i, r) {
                return r == this._reservePriority && (this._reservePriority = 0), this._currentPriority = r, t.prototype.startMotion.call(this, e, i, this._userTimeSeconds)
            }, e.prototype.updateMotion = function (e, i) {
                this._userTimeSeconds += i;
                var r = t.prototype.doUpdateMotion.call(this, e, this._userTimeSeconds);
                return this.isFinished() && (this._currentPriority = 0), r
            }, e.prototype.reserveMotion = function (t) {
                return !(t <= this._reservePriority || t <= this._currentPriority) && (this._reservePriority = t, !0)
            }, e
        }(n);
        t.CubismMotionManager = e
    }(e.Live2DCubismFramework || (e.Live2DCubismFramework = {}))
}, function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = i(8).Live2DCubismFramework.ACubismMotion;
    ! function (t) {
        var e = function () {
            function t() {
                this._autoDelete = !1, this._motion = null, this._available = !0, this._finished = !1, this._started = !1, this._startTimeSeconds = -1, this._fadeInStartTimeSeconds = 0, this._endTimeSeconds = -1, this._stateTimeSeconds = 0, this._stateWeight = 0, this._lastEventCheckSeconds = 0, this._motionQueueEntryHandle = this
            }
            return t.prototype.release = function () {
                this._autoDelete && this._motion && r.delete(this._motion)
            }, t.prototype.startFadeout = function (t, e) {
                var i = e + t;
                (this._endTimeSeconds < 0 || i < this._endTimeSeconds) && (this._endTimeSeconds = i)
            }, t.prototype.isFinished = function () {
                return this._finished
            }, t.prototype.isStarted = function () {
                return this._started
            }, t.prototype.getStartTime = function () {
                return this._startTimeSeconds
            }, t.prototype.getFadeInStartTime = function () {
                return this._fadeInStartTimeSeconds
            }, t.prototype.getEndTime = function () {
                return this._endTimeSeconds
            }, t.prototype.setStartTime = function (t) {
                this._startTimeSeconds = t
            }, t.prototype.setFadeInStartTime = function (t) {
                this._fadeInStartTimeSeconds = t
            }, t.prototype.setEndTime = function (t) {
                this._endTimeSeconds = t
            }, t.prototype.setIsFinished = function (t) {
                this._finished = t
            }, t.prototype.setIsStarted = function (t) {
                this._started = t
            }, t.prototype.isAvailable = function () {
                return this._available
            }, t.prototype.setIsAvailable = function (t) {
                this._available = t
            }, t.prototype.setState = function (t, e) {
                this._stateTimeSeconds = t, this._stateWeight = e
            }, t.prototype.getStateTime = function () {
                return this._stateTimeSeconds
            }, t.prototype.getStateWeight = function () {
                return this._stateWeight
            }, t.prototype.getLastCheckEventTime = function () {
                return this._lastEventCheckSeconds
            }, t.prototype.setLastCheckEventTime = function (t) {
                this._lastEventCheckSeconds = t
            }, t
        }();
        t.CubismMotionQueueEntry = e
    }(e.Live2DCubismFramework || (e.Live2DCubismFramework = {}))
}, function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = i(9).Live2DCubismFramework.CubismMath;
    ! function (t) {
        var e = function () {
            function t() {
                this._faceTargetX = 0, this._faceTargetY = 0, this._faceX = 0, this._faceY = 0, this._faceVX = 0, this._faceVY = 0, this._lastTimeSeconds = 0, this._userTimeSeconds = 0
            }
            return t.prototype.update = function (t) {
                this._userTimeSeconds += t;
                if (0 != this._lastTimeSeconds) {
                    var e = 30 * (this._userTimeSeconds - this._lastTimeSeconds);
                    this._lastTimeSeconds = this._userTimeSeconds;
                    var i = e * (4 / 30) / 4.5,
                        o = this._faceTargetX - this._faceX,
                        n = this._faceTargetY - this._faceY;
                    if (!(r.abs(o) <= .01 && r.abs(n) <= .01)) {
                        var a = r.sqrt(o * o + n * n),
                            s = 4 / 30 * n / a,
                            u = 4 / 30 * o / a - this._faceVX,
                            l = s - this._faceVY,
                            h = r.sqrt(u * u + l * l);
                        (h < -i || h > i) && (u *= i / h, l *= i / h), this._faceVX += u, this._faceVY += l;
                        var p = .5 * (r.sqrt(i * i + 16 * i * a - 8 * i * a) - i),
                            g = r.sqrt(this._faceVX * this._faceVX + this._faceVY * this._faceVY);
                        g > p && (this._faceVX *= p / g, this._faceVY *= p / g), this._faceX += this._faceVX, this._faceY += this._faceVY
                    }
                } else this._lastTimeSeconds = this._userTimeSeconds
            }, t.prototype.getX = function () {
                return this._faceX
            }, t.prototype.getY = function () {
                return this._faceY
            }, t.prototype.set = function (t, e) {
                this._faceTargetX = t, this._faceTargetY = e
            }, t
        }();
        t.CubismTargetPoint = e
    }(e.Live2DCubismFramework || (e.Live2DCubismFramework = {}))
}, function (t, e, i) {
    "use strict";
    var r, o = this && this.__extends || (r = function (t, e) {
        return (r = Object.setPrototypeOf || {
            __proto__: []
        }
            instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
            })(t, e)
    }, function (t, e) {
        function i() {
            this.constructor = t
        }
        r(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
    });
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = i(4).Live2DCubismFramework.CubismMatrix44;
    ! function (t) {
        var e = function (t) {
            function e(e, i) {
                var r = t.call(this) || this;
                return r._width = void 0 !== e ? e : 0, r._height = void 0 !== i ? i : 0, r.setHeight(2), r
            }
            return o(e, t), e.prototype.setWidth = function (t) {
                var e = t / this._width,
                    i = e;
                this.scale(e, i)
            }, e.prototype.setHeight = function (t) {
                var e = t / this._height,
                    i = e;
                this.scale(e, i)
            }, e.prototype.setPosition = function (t, e) {
                this.translate(t, e)
            }, e.prototype.setCenterPosition = function (t, e) {
                this.centerX(t), this.centerY(e)
            }, e.prototype.top = function (t) {
                this.setY(t)
            }, e.prototype.bottom = function (t) {
                var e = this._height * this.getScaleY();
                this.translateY(t - e)
            }, e.prototype.left = function (t) {
                this.setX(t)
            }, e.prototype.right = function (t) {
                var e = this._width * this.getScaleX();
                this.translateX(t - e)
            }, e.prototype.centerX = function (t) {
                var e = this._width * this.getScaleX();
                this.translateX(t - e / 2)
            }, e.prototype.setX = function (t) {
                this.translateX(t)
            }, e.prototype.centerY = function (t) {
                var e = this._height * this.getScaleY();
                this.translateY(t - e / 2)
            }, e.prototype.setY = function (t) {
                this.translateY(t)
            }, e.prototype.setupFromLayout = function (t) {
                for (var e = t.begin(); e.notEqual(t.end()); e.preIncrement()) {
                    var i = e.ptr().first,
                        r = e.ptr().second;
                    "width" == i ? this.setWidth(r) : "height" == i && this.setHeight(r)
                }
                for (e = t.begin(); e.notEqual(t.end()); e.preIncrement()) {
                    i = e.ptr().first, r = e.ptr().second;
                    "x" == i ? this.setX(r) : "y" == i ? this.setY(r) : "center_x" == i ? this.centerX(r) : "center_y" == i ? this.centerY(r) : "top" == i ? this.top(r) : "bottom" == i ? this.bottom(r) : "left" == i ? this.left(r) : "right" == i && this.right(r)
                }
            }, e
        }(n);
        t.CubismModelMatrix = e
    }(e.Live2DCubismFramework || (e.Live2DCubismFramework = {}))
}, function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = i(32).Live2DCubismFramework.CubismModel,
        o = i(2);
    ! function (t) {
        var e = function () {
            function t(t) {
                this._moc = t, this._modelCount = 0
            }
            return t.create = function (e) {
                var i = null,
                    r = Live2DCubismCore.Moc.fromArrayBuffer(e);
                return r && (i = new t(r)), i
            }, t.delete = function (t) {
                t._moc._release(), t._moc = null, t = null
            }, t.prototype.createModel = function () {
                var t = null,
                    e = Live2DCubismCore.Model.fromMoc(this._moc);
                return e && ((t = new r(e)).initialize(), ++this._modelCount), t
            }, t.prototype.deleteModel = function (t) {
                null != t && (t.release(), t = null, --this._modelCount)
            }, t.prototype.release = function () {
                o.CSM_ASSERT(0 == this._modelCount), this._moc._release(), this._moc = null
            }, t
        }();
        t.CubismMoc = e
    }(e.Live2DCubismFramework || (e.Live2DCubismFramework = {}))
}, function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = i(13),
        o = i(0),
        n = i(7),
        a = i(1),
        s = i(2),
        u = o.Live2DCubismFramework.CubismFramework,
        l = r.Live2DCubismFramework.CubismBlendMode,
        h = a.Live2DCubismFramework.csmVector,
        p = n.Live2DCubismFramework.csmMap;
    ! function (t) {
        var e = function () {
            function t(t) {
                this._model = t, this._parameterValues = null, this._parameterMaximumValues = null, this._parameterMinimumValues = null, this._partOpacities = null, this._savedParameters = new h, this._parameterIds = new h, this._drawableIds = new h, this._partIds = new h, this._notExistPartId = new p, this._notExistParameterId = new p, this._notExistParameterValues = new p, this._notExistPartOpacities = new p
            }
            return t.prototype.update = function () {
                this._model.update(), this._model.drawables.resetDynamicFlags()
            }, t.prototype.getCanvasWidth = function () {
                return null == this._model ? 0 : this._model.canvasinfo.CanvasWidth / this._model.canvasinfo.PixelsPerUnit
            }, t.prototype.getCanvasHeight = function () {
                return null == this._model ? 0 : this._model.canvasinfo.CanvasHeight / this._model.canvasinfo.PixelsPerUnit
            }, t.prototype.saveParameters = function () {
                for (var t = this._model.parameters.count, e = this._savedParameters.getSize(), i = 0; i < t; ++i) i < e ? this._savedParameters.set(i, this._parameterValues[i]) : this._savedParameters.pushBack(this._parameterValues[i])
            }, t.prototype.getModel = function () {
                return this._model
            }, t.prototype.getPartIndex = function (t) {
                var e, i = this._model.parts.count;
                for (e = 0; e < i; ++e)
                    if (t == this._partIds.at(e)) return e;
                return this._notExistPartId.isExist(t) ? this._notExistPartId.getValue(t) : (e = i + this._notExistPartId.getSize(), this._notExistPartId.setValue(t, e), this._notExistPartOpacities.appendKey(e), e)
            }, t.prototype.getPartCount = function () {
                return this._model.parts.count
            }, t.prototype.setPartOpacityByIndex = function (t, e) {
                this._notExistPartOpacities.isExist(t) ? this._notExistPartOpacities.setValue(t, e) : (s.CSM_ASSERT(0 <= t && t < this.getPartCount()), this._partOpacities[t] = e)
            }, t.prototype.setPartOpacityById = function (t, e) {
                var i = this.getPartIndex(t);
                i < 0 || this.setPartOpacityByIndex(i, e)
            }, t.prototype.getPartOpacityByIndex = function (t) {
                return this._notExistPartOpacities.isExist(t) ? this._notExistPartOpacities.getValue(t) : (s.CSM_ASSERT(0 <= t && t < this.getPartCount()), this._partOpacities[t])
            }, t.prototype.getPartOpacityById = function (t) {
                var e = this.getPartIndex(t);
                return e < 0 ? 0 : this.getPartOpacityByIndex(e)
            }, t.prototype.getParameterIndex = function (t) {
                var e, i = this._model.parameters.count;
                for (e = 0; e < i; ++e)
                    if (t == this._parameterIds.at(e)) return e;
                return this._notExistParameterId.isExist(t) ? this._notExistParameterId.getValue(t) : (e = this._model.parameters.count + this._notExistParameterId.getSize(), this._notExistParameterId.setValue(t, e), this._notExistParameterValues.appendKey(e), e)
            }, t.prototype.getParameterCount = function () {
                return this._model.parameters.count
            }, t.prototype.getParameterMaximumValue = function (t) {
                return this._model.parameters.maximumValues[t]
            }, t.prototype.getParameterMinimumValue = function (t) {
                return this._model.parameters.minimumValues[t]
            }, t.prototype.getParameterDefaultValue = function (t) {
                return this._model.parameters.defaultValues[t]
            }, t.prototype.getParameterValueByIndex = function (t) {
                return this._notExistParameterValues.isExist(t) ? this._notExistParameterValues.getValue(t) : (s.CSM_ASSERT(0 <= t && t < this.getParameterCount()), this._parameterValues[t])
            }, t.prototype.getParameterValueById = function (t) {
                var e = this.getParameterIndex(t);
                return this.getParameterValueByIndex(e)
            }, t.prototype.setParameterValueByIndex = function (t, e, i) {
                void 0 === i && (i = 1), this._notExistParameterValues.isExist(t) ? this._notExistParameterValues.setValue(t, 1 == i ? e : this._notExistParameterValues.getValue(t) * (1 - i) + e * i) : (s.CSM_ASSERT(0 <= t && t < this.getParameterCount()), this._model.parameters.maximumValues[t] < e && (e = this._model.parameters.maximumValues[t]), this._model.parameters.minimumValues[t] > e && (e = this._model.parameters.minimumValues[t]), this._parameterValues[t] = 1 == i ? e : this._parameterValues[t] = this._parameterValues[t] * (1 - i) + e * i)
            }, t.prototype.setParameterValueById = function (t, e, i) {
                void 0 === i && (i = 1);
                var r = this.getParameterIndex(t);
                this.setParameterValueByIndex(r, e, i)
            }, t.prototype.addParameterValueByIndex = function (t, e, i) {
                void 0 === i && (i = 1), this.setParameterValueByIndex(t, this.getParameterValueByIndex(t) + e * i)
            }, t.prototype.addParameterValueById = function (t, e, i) {
                void 0 === i && (i = 1);
                var r = this.getParameterIndex(t);
                this.addParameterValueByIndex(r, e, i)
            }, t.prototype.multiplyParameterValueById = function (t, e, i) {
                void 0 === i && (i = 1);
                var r = this.getParameterIndex(t);
                this.multiplyParameterValueByIndex(r, e, i)
            }, t.prototype.multiplyParameterValueByIndex = function (t, e, i) {
                void 0 === i && (i = 1), this.setParameterValueByIndex(t, this.getParameterValueByIndex(t) * (1 + (e - 1) * i))
            }, t.prototype.getDrawableIndex = function (t) {
                for (var e = this._model.drawables.count, i = 0; i < e; ++i)
                    if (this._drawableIds.at(i) == t) return i;
                return -1
            }, t.prototype.getDrawableCount = function () {
                return this._model.drawables.count
            }, t.prototype.getDrawableId = function (t) {
                var e = this._model.drawables.ids;
                return u.getIdManager().getId(e[t])
            }, t.prototype.getDrawableRenderOrders = function () {
                return this._model.drawables.renderOrders
            }, t.prototype.getDrawableTextureIndices = function (t) {
                return this._model.drawables.textureIndices[t]
            }, t.prototype.getDrawableDynamicFlagVertexPositionsDidChange = function (t) {
                var e = this._model.drawables.dynamicFlags;
                return Live2DCubismCore.Utils.hasVertexPositionsDidChangeBit(e[t])
            }, t.prototype.getDrawableVertexIndexCount = function (t) {
                return this._model.drawables.indexCounts[t]
            }, t.prototype.getDrawableVertexCount = function (t) {
                return this._model.drawables.vertexCounts[t]
            }, t.prototype.getDrawableVertices = function (t) {
                return this.getDrawableVertexPositions(t)
            }, t.prototype.getDrawableVertexIndices = function (t) {
                return this._model.drawables.indices[t]
            }, t.prototype.getDrawableVertexPositions = function (t) {
                return this._model.drawables.vertexPositions[t]
            }, t.prototype.getDrawableVertexUvs = function (t) {
                return this._model.drawables.vertexUvs[t]
            }, t.prototype.getDrawableOpacity = function (t) {
                return this._model.drawables.opacities[t]
            }, t.prototype.getDrawableCulling = function (t) {
                var e = this._model.drawables.constantFlags;
                return !Live2DCubismCore.Utils.hasIsDoubleSidedBit(e[t])
            }, t.prototype.getDrawableBlendMode = function (t) {
                var e = this._model.drawables.constantFlags;
                return Live2DCubismCore.Utils.hasBlendAdditiveBit(e[t]) ? l.CubismBlendMode_Additive : Live2DCubismCore.Utils.hasBlendMultiplicativeBit(e[t]) ? l.CubismBlendMode_Multiplicative : l.CubismBlendMode_Normal
            }, t.prototype.getDrawableInvertedMaskBit = function (t) {
                var e = this._model.drawables.constantFlags;
                return Live2DCubismCore.Utils.hasIsInvertedMaskBit(e[t])
            }, t.prototype.getDrawableMasks = function () {
                return this._model.drawables.masks
            }, t.prototype.getDrawableMaskCounts = function () {
                return this._model.drawables.maskCounts
            }, t.prototype.isUsingMasking = function () {
                for (var t = 0; t < this._model.drawables.count; ++t)
                    if (!(this._model.drawables.maskCounts[t] <= 0)) return !0;
                return !1
            }, t.prototype.getDrawableDynamicFlagIsVisible = function (t) {
                var e = this._model.drawables.dynamicFlags;
                return Live2DCubismCore.Utils.hasIsVisibleBit(e[t])
            }, t.prototype.getDrawableDynamicFlagVisibilityDidChange = function (t) {
                var e = this._model.drawables.dynamicFlags;
                return Live2DCubismCore.Utils.hasVisibilityDidChangeBit(e[t])
            }, t.prototype.getDrawableDynamicFlagOpacityDidChange = function (t) {
                var e = this._model.drawables.dynamicFlags;
                return Live2DCubismCore.Utils.hasOpacityDidChangeBit(e[t])
            }, t.prototype.getDrawableDynamicFlagRenderOrderDidChange = function (t) {
                var e = this._model.drawables.dynamicFlags;
                return Live2DCubismCore.Utils.hasRenderOrderDidChangeBit(e[t])
            }, t.prototype.loadParameters = function () {
                var t = this._model.parameters.count,
                    e = this._savedParameters.getSize();
                t > e && (t = e);
                for (var i = 0; i < t; ++i) this._parameterValues[i] = this._savedParameters.at(i)
            }, t.prototype.initialize = function () {
                s.CSM_ASSERT(this._model), this._parameterValues = this._model.parameters.values, this._partOpacities = this._model.parts.opacities, this._parameterMaximumValues = this._model.parameters.maximumValues, this._parameterMinimumValues = this._model.parameters.minimumValues;
                var t = this._model.parameters.ids,
                    e = this._model.parameters.count;
                this._parameterIds.prepareCapacity(e);
                for (var i = 0; i < e; ++i) this._parameterIds.pushBack(u.getIdManager().getId(t[i]));
                var r = this._model.parts.ids,
                    o = this._model.parts.count;
                this._partIds.prepareCapacity(o);
                for (i = 0; i < o; ++i) this._partIds.pushBack(u.getIdManager().getId(r[i]));
                var n = this._model.drawables.ids,
                    a = this._model.drawables.count;
                this._drawableIds.prepareCapacity(a);
                for (i = 0; i < a; ++i) this._drawableIds.pushBack(u.getIdManager().getId(n[i]))
            }, t.prototype.release = function () {
                this._model.release(), this._model = null
            }, t
        }();
        t.CubismModel = e
    }(e.Live2DCubismFramework || (e.Live2DCubismFramework = {}))
}, function (t, e, i) {
    "use strict";
    var r, o = this && this.__extends || (r = function (t, e) {
        return (r = Object.setPrototypeOf || {
            __proto__: []
        }
            instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
            })(t, e)
    }, function (t, e) {
        function i() {
            this.constructor = t
        }
        r(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
    });
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = i(34),
        a = i(35),
        s = i(8),
        u = i(0),
        l = i(9),
        h = i(6),
        p = i(2),
        g = h.Live2DCubismFramework.csmString,
        c = a.Live2DCubismFramework.CubismMotionData,
        d = a.Live2DCubismFramework.CubismMotionSegment,
        _ = a.Live2DCubismFramework.CubismMotionPoint,
        m = a.Live2DCubismFramework.CubismMotionEvent,
        f = a.Live2DCubismFramework.CubismMotionSegmentType,
        y = a.Live2DCubismFramework.CubismMotionCurve,
        v = a.Live2DCubismFramework.CubismMotionCurveTarget,
        S = l.Live2DCubismFramework.CubismMath,
        C = u.Live2DCubismFramework.CubismFramework,
        b = s.Live2DCubismFramework.ACubismMotion,
        x = n.Live2DCubismFramework.CubismMotionJson;
    ! function (t) {
        function e(t, e, i) {
            var r = new _;
            return r.time = t.time + (e.time - t.time) * i, r.value = t.value + (e.value - t.value) * i, r
        }

        function i(t, e) {
            var i = (e - t[0].time) / (t[1].time - t[0].time);
            return i < 0 && (i = 0), t[0].value + (t[1].value - t[0].value) * i
        }

        function r(t, i) {
            var r = (i - t[0].time) / (t[3].time - t[0].time);
            r < 0 && (r = 0);
            var o = e(t[0], t[1], r),
                n = e(t[1], t[2], r),
                a = e(t[2], t[3], r),
                s = e(o, n, r),
                u = e(n, a, r);
            return e(s, u, r).value
        }

        function n(t, e) {
            return t[0].value
        }

        function a(t, e) {
            return t[1].value
        }

        function s(t, e, i) {
            for (var r = t.curves.at(e), o = -1, n = r.baseSegmentIndex + r.segmentCount, a = 0, s = r.baseSegmentIndex; s < n; ++s)
                if (a = t.segments.at(s).basePointIndex + (t.segments.at(s).segmentType == f.CubismMotionSegmentType_Bezier ? 3 : 1), t.points.at(a).time > i) {
                    o = s;
                    break
                } if (-1 == o) return t.points.at(a).value;
            var u = t.segments.at(o);
            return u.evaluate(t.points.get(u.basePointIndex), i)
        }
        var u = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._sourceFrameRate = 30, e._loopDurationSeconds = -1, e._isLoop = !1, e._isLoopFadeIn = !0, e._lastWeight = 0, e._motionData = null, e._modelCurveIdEyeBlink = null, e._modelCurveIdLipSync = null, e._eyeBlinkParameterIds = null, e._lipSyncParameterIds = null, e
            }
            return o(e, t), e.create = function (t, i, r) {
                var o = new e;
                return o.parse(t, i), o._sourceFrameRate = o._motionData.fps, o._loopDurationSeconds = o._motionData.duration, o._onFinishedMotion = r, o
            }, e.prototype.doUpdateParameters = function (t, e, i, r) {
                null == this._modelCurveIdEyeBlink && (this._modelCurveIdEyeBlink = C.getIdManager().getId("EyeBlink")), null == this._modelCurveIdLipSync && (this._modelCurveIdLipSync = C.getIdManager().getId("LipSync"));
                var o = e - r.getStartTime();
                o < 0 && (o = 0);
                var n = Number.MAX_VALUE,
                    a = Number.MAX_VALUE,
                    u = 0,
                    l = 0;
                this._eyeBlinkParameterIds.getSize() > 64 && p.CubismLogDebug("too many eye blink targets : {0}", this._eyeBlinkParameterIds.getSize()), this._lipSyncParameterIds.getSize() > 64 && p.CubismLogDebug("too many lip sync targets : {0}", this._lipSyncParameterIds.getSize());
                var h, g, c, d = this._fadeInSeconds <= 0 ? 1 : S.getEasingSine((e - r.getFadeInStartTime()) / this._fadeInSeconds),
                    _ = this._fadeOutSeconds <= 0 || r.getEndTime() < 0 ? 1 : S.getEasingSine((r.getEndTime() - e) / this._fadeOutSeconds),
                    m = o;
                if (this._isLoop)
                    for (; m > this._motionData.duration;) m -= this._motionData.duration;
                var f = this._motionData.curves;
                for (g = 0; g < this._motionData.curveCount && f.at(g).type == v.CubismMotionCurveTarget_Model; ++g) h = s(this._motionData, g, m), f.at(g).id == this._modelCurveIdEyeBlink ? a = h : f.at(g).id == this._modelCurveIdLipSync && (n = h);
                for (; g < this._motionData.curveCount && f.at(g).type == v.CubismMotionCurveTarget_Parameter; ++g)
                    if (-1 != (c = t.getParameterIndex(f.at(g).id))) {
                        var y = t.getParameterValueByIndex(c);
                        if (h = s(this._motionData, g, m), a != Number.MAX_VALUE)
                            for (var b = 0; b < this._eyeBlinkParameterIds.getSize() && b < 64; ++b)
                                if (this._eyeBlinkParameterIds.at(b) == f.at(g).id) {
                                    h *= a, l |= 1 << b;
                                    break
                                } if (n != Number.MAX_VALUE)
                            for (b = 0; b < this._lipSyncParameterIds.getSize() && b < 64; ++b)
                                if (this._lipSyncParameterIds.at(b) == f.at(g).id) {
                                    h += n, u |= 1 << b;
                                    break
                                } var x = void 0;
                        if (f.at(g).fadeInTime < 0 && f.at(g).fadeOutTime < 0) x = y + (h - y) * i;
                        else {
                            var M = void 0,
                                L = void 0;
                            M = f.at(g).fadeInTime < 0 ? d : 0 == f.at(g).fadeInTime ? 1 : S.getEasingSine((e - r.getFadeInStartTime()) / f.at(g).fadeInTime), L = f.at(g).fadeOutTime < 0 ? _ : 0 == f.at(g).fadeOutTime || r.getEndTime() < 0 ? 1 : S.getEasingSine((r.getEndTime() - e) / f.at(g).fadeOutTime), x = y + (h - y) * (this._weight * M * L)
                        }
                        t.setParameterValueByIndex(c, x, 1)
                    } if (a != Number.MAX_VALUE)
                    for (b = 0; b < this._eyeBlinkParameterIds.getSize() && b < 64; ++b) {
                        y = t.getParameterValueById(this._eyeBlinkParameterIds.at(b));
                        if (!(l >> b & 1)) {
                            x = y + (a - y) * i;
                            t.setParameterValueById(this._eyeBlinkParameterIds.at(b), x)
                        }
                    }
                if (n != Number.MAX_VALUE)
                    for (b = 0; b < this._lipSyncParameterIds.getSize() && b < 64; ++b) {
                        y = t.getParameterValueById(this._lipSyncParameterIds.at(b));
                        if (!(u >> b & 1)) {
                            x = y + (n - y) * i;
                            t.setParameterValueById(this._lipSyncParameterIds.at(b), x)
                        }
                    }
                for (; g < this._motionData.curveCount && f.at(g).type == v.CubismMotionCurveTarget_PartOpacity; ++g) - 1 != (c = t.getParameterIndex(f.at(g).id)) && (h = s(this._motionData, g, m), t.setParameterValueByIndex(c, h));
                o >= this._motionData.duration && (this._isLoop ? (r.setStartTime(e), this._isLoopFadeIn && r.setFadeInStartTime(e)) : (this._onFinishedMotion && this._onFinishedMotion(this), r.setIsFinished(!0))), this._lastWeight = i
            }, e.prototype.setIsLoop = function (t) {
                this._isLoop = t
            }, e.prototype.isLoop = function () {
                return this._isLoop
            }, e.prototype.setIsLoopFadeIn = function (t) {
                this._isLoopFadeIn = t
            }, e.prototype.isLoopFadeIn = function () {
                return this._isLoopFadeIn
            }, e.prototype.getDuration = function () {
                return this._isLoop ? -1 : this._loopDurationSeconds
            }, e.prototype.getLoopDuration = function () {
                return this._loopDurationSeconds
            }, e.prototype.setParameterFadeInTime = function (t, e) {
                for (var i = this._motionData.curves, r = 0; r < this._motionData.curveCount; ++r)
                    if (t == i.at(r).id) return void (i.at(r).fadeInTime = e)
            }, e.prototype.setParameterFadeOutTime = function (t, e) {
                for (var i = this._motionData.curves, r = 0; r < this._motionData.curveCount; ++r)
                    if (t == i.at(r).id) return void (i.at(r).fadeOutTime = e)
            }, e.prototype.getParameterFadeInTime = function (t) {
                for (var e = this._motionData.curves, i = 0; i < this._motionData.curveCount; ++i)
                    if (t == e.at(i).id) return e.at(i).fadeInTime;
                return -1
            }, e.prototype.getParameterFadeOutTime = function (t) {
                for (var e = this._motionData.curves, i = 0; i < this._motionData.curveCount; ++i)
                    if (t == e.at(i).id) return e.at(i).fadeOutTime;
                return -1
            }, e.prototype.setEffectIds = function (t, e) {
                this._eyeBlinkParameterIds = t, this._lipSyncParameterIds = e
            }, e.prototype.release = function () {
                this._motionData = void 0, this._motionData = null
            }, e.prototype.parse = function (t, e) {
                this._motionData = new c;
                var o = new x(t, e);
                this._motionData.duration = o.getMotionDuration(), this._motionData.loop = o.isMotionLoop(), this._motionData.curveCount = o.getMotionCurveCount(), this._motionData.fps = o.getMotionFps(), this._motionData.eventCount = o.getEventCount(), o.isExistMotionFadeInTime() ? this._fadeInSeconds = o.getMotionFadeInTime() < 0 ? 1 : o.getMotionFadeInTime() : this._fadeInSeconds = 1, o.isExistMotionFadeOutTime() ? this._fadeOutSeconds = o.getMotionFadeOutTime() < 0 ? 1 : o.getMotionFadeOutTime() : this._fadeOutSeconds = 1, this._motionData.curves.updateSize(this._motionData.curveCount, y, !0), this._motionData.segments.updateSize(o.getMotionTotalSegmentCount(), d, !0), this._motionData.points.updateSize(o.getMotionTotalPointCount(), _, !0), this._motionData.events.updateSize(this._motionData.eventCount, m, !0);
                for (var s = 0, u = 0, l = 0; l < this._motionData.curveCount; ++l) {
                    "Model" == o.getMotionCurveTarget(l) ? this._motionData.curves.at(l).type = v.CubismMotionCurveTarget_Model : "Parameter" == o.getMotionCurveTarget(l) ? this._motionData.curves.at(l).type = v.CubismMotionCurveTarget_Parameter : "PartOpacity" == o.getMotionCurveTarget(l) && (this._motionData.curves.at(l).type = v.CubismMotionCurveTarget_PartOpacity), this._motionData.curves.at(l).id = o.getMotionCurveId(l), this._motionData.curves.at(l).baseSegmentIndex = u, this._motionData.curves.at(l).fadeInTime = o.isExistMotionCurveFadeInTime(l) ? o.getMotionCurveFadeInTime(l) : -1, this._motionData.curves.at(l).fadeOutTime = o.isExistMotionCurveFadeOutTime(l) ? o.getMotionCurveFadeOutTime(l) : -1;
                    for (var h = 0; h < o.getMotionCurveSegmentCount(l);) {
                        switch (0 == h ? (this._motionData.segments.at(u).basePointIndex = s, this._motionData.points.at(s).time = o.getMotionCurveSegment(l, h), this._motionData.points.at(s).value = o.getMotionCurveSegment(l, h + 1), s += 1, h += 2) : this._motionData.segments.at(u).basePointIndex = s - 1, o.getMotionCurveSegment(l, h)) {
                            case f.CubismMotionSegmentType_Linear:
                                this._motionData.segments.at(u).segmentType = f.CubismMotionSegmentType_Linear, this._motionData.segments.at(u).evaluate = i, this._motionData.points.at(s).time = o.getMotionCurveSegment(l, h + 1), this._motionData.points.at(s).value = o.getMotionCurveSegment(l, h + 2), s += 1, h += 3;
                                break;
                            case f.CubismMotionSegmentType_Bezier:
                                this._motionData.segments.at(u).segmentType = f.CubismMotionSegmentType_Bezier, this._motionData.segments.at(u).evaluate = r, this._motionData.points.at(s).time = o.getMotionCurveSegment(l, h + 1), this._motionData.points.at(s).value = o.getMotionCurveSegment(l, h + 2), this._motionData.points.at(s + 1).time = o.getMotionCurveSegment(l, h + 3), this._motionData.points.at(s + 1).value = o.getMotionCurveSegment(l, h + 4), this._motionData.points.at(s + 2).time = o.getMotionCurveSegment(l, h + 5), this._motionData.points.at(s + 2).value = o.getMotionCurveSegment(l, h + 6), s += 3, h += 7;
                                break;
                            case f.CubismMotionSegmentType_Stepped:
                                this._motionData.segments.at(u).segmentType = f.CubismMotionSegmentType_Stepped, this._motionData.segments.at(u).evaluate = n, this._motionData.points.at(s).time = o.getMotionCurveSegment(l, h + 1), this._motionData.points.at(s).value = o.getMotionCurveSegment(l, h + 2), s += 1, h += 3;
                                break;
                            case f.CubismMotionSegmentType_InverseStepped:
                                this._motionData.segments.at(u).segmentType = f.CubismMotionSegmentType_InverseStepped, this._motionData.segments.at(u).evaluate = a, this._motionData.points.at(s).time = o.getMotionCurveSegment(l, h + 1), this._motionData.points.at(s).value = o.getMotionCurveSegment(l, h + 2), s += 1, h += 3;
                                break;
                            default:
                                p.CSM_ASSERT(0)
                        }++this._motionData.curves.at(l).segmentCount, ++u
                    }
                }
                for (var g = 0; g < o.getEventCount(); ++g) this._motionData.events.at(g).fireTime = o.getEventTime(g), this._motionData.events.at(g).value = o.getEventValue(g);
                o.release(), o = void 0, o = null
            }, e.prototype.getFiredEvent = function (t, e) {
                this._firedEventValues.updateSize(0);
                for (var i = 0; i < this._motionData.eventCount; ++i) this._motionData.events.at(i).fireTime > t && this._motionData.events.at(i).fireTime <= e && this._firedEventValues.pushBack(new g(this._motionData.events.at(i).value.s));
                return this._firedEventValues
            }, e
        }(b);
        t.CubismMotion = u
    }(e.Live2DCubismFramework || (e.Live2DCubismFramework = {}))
}, function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = i(3),
        o = i(0),
        n = i(6).Live2DCubismFramework.csmString,
        a = o.Live2DCubismFramework.CubismFramework,
        s = r.Live2DCubismFramework.CubismJson;
    ! function (t) {
        var e = "Meta",
            i = function () {
                function t(t, e) {
                    this._json = s.create(t, e)
                }
                return t.prototype.release = function () {
                    s.delete(this._json)
                }, t.prototype.getMotionDuration = function () {
                    return this._json.getRoot().getValueByString(e).getValueByString("Duration").toFloat()
                }, t.prototype.isMotionLoop = function () {
                    return this._json.getRoot().getValueByString(e).getValueByString("Loop").toBoolean()
                }, t.prototype.getMotionCurveCount = function () {
                    return this._json.getRoot().getValueByString(e).getValueByString("CurveCount").toInt()
                }, t.prototype.getMotionFps = function () {
                    return this._json.getRoot().getValueByString(e).getValueByString("Fps").toFloat()
                }, t.prototype.getMotionTotalSegmentCount = function () {
                    return this._json.getRoot().getValueByString(e).getValueByString("TotalSegmentCount").toInt()
                }, t.prototype.getMotionTotalPointCount = function () {
                    return this._json.getRoot().getValueByString(e).getValueByString("TotalPointCount").toInt()
                }, t.prototype.isExistMotionFadeInTime = function () {
                    return !this._json.getRoot().getValueByString(e).getValueByString("FadeInTime").isNull()
                }, t.prototype.isExistMotionFadeOutTime = function () {
                    return !this._json.getRoot().getValueByString(e).getValueByString("FadeOutTime").isNull()
                }, t.prototype.getMotionFadeInTime = function () {
                    return this._json.getRoot().getValueByString(e).getValueByString("FadeInTime").toFloat()
                }, t.prototype.getMotionFadeOutTime = function () {
                    return this._json.getRoot().getValueByString(e).getValueByString("FadeOutTime").toFloat()
                }, t.prototype.getMotionCurveTarget = function (t) {
                    return this._json.getRoot().getValueByString("Curves").getValueByIndex(t).getValueByString("Target").getRawString()
                }, t.prototype.getMotionCurveId = function (t) {
                    return a.getIdManager().getId(this._json.getRoot().getValueByString("Curves").getValueByIndex(t).getValueByString("Id").getRawString())
                }, t.prototype.isExistMotionCurveFadeInTime = function (t) {
                    return !this._json.getRoot().getValueByString("Curves").getValueByIndex(t).getValueByString("FadeInTime").isNull()
                }, t.prototype.isExistMotionCurveFadeOutTime = function (t) {
                    return !this._json.getRoot().getValueByString("Curves").getValueByIndex(t).getValueByString("FadeOutTime").isNull()
                }, t.prototype.getMotionCurveFadeInTime = function (t) {
                    return this._json.getRoot().getValueByString("Curves").getValueByIndex(t).getValueByString("FadeInTime").toFloat()
                }, t.prototype.getMotionCurveFadeOutTime = function (t) {
                    return this._json.getRoot().getValueByString("Curves").getValueByIndex(t).getValueByString("FadeOutTime").toFloat()
                }, t.prototype.getMotionCurveSegmentCount = function (t) {
                    return this._json.getRoot().getValueByString("Curves").getValueByIndex(t).getValueByString("Segments").getVector().getSize()
                }, t.prototype.getMotionCurveSegment = function (t, e) {
                    return this._json.getRoot().getValueByString("Curves").getValueByIndex(t).getValueByString("Segments").getValueByIndex(e).toFloat()
                }, t.prototype.getEventCount = function () {
                    return this._json.getRoot().getValueByString(e).getValueByString("UserDataCount").toInt()
                }, t.prototype.getTotalEventValueSize = function () {
                    return this._json.getRoot().getValueByString(e).getValueByString("TotalUserDataSize").toInt()
                }, t.prototype.getEventTime = function (t) {
                    return this._json.getRoot().getValueByString("UserData").getValueByIndex(t).getValueByString("Time").toInt()
                }, t.prototype.getEventValue = function (t) {
                    return new n(this._json.getRoot().getValueByString("UserData").getValueByIndex(t).getValueByString("Value").getRawString())
                }, t
            }();
        t.CubismMotionJson = i
    }(e.Live2DCubismFramework || (e.Live2DCubismFramework = {}))
}, function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = i(1).Live2DCubismFramework.csmVector;
    ! function (t) {
        var e;
        ! function (t) {
            t[t.CubismMotionCurveTarget_Model = 0] = "CubismMotionCurveTarget_Model", t[t.CubismMotionCurveTarget_Parameter = 1] = "CubismMotionCurveTarget_Parameter", t[t.CubismMotionCurveTarget_PartOpacity = 2] = "CubismMotionCurveTarget_PartOpacity"
        }(e = t.CubismMotionCurveTarget || (t.CubismMotionCurveTarget = {})),
            function (t) {
                t[t.CubismMotionSegmentType_Linear = 0] = "CubismMotionSegmentType_Linear", t[t.CubismMotionSegmentType_Bezier = 1] = "CubismMotionSegmentType_Bezier", t[t.CubismMotionSegmentType_Stepped = 2] = "CubismMotionSegmentType_Stepped", t[t.CubismMotionSegmentType_InverseStepped = 3] = "CubismMotionSegmentType_InverseStepped"
            }(t.CubismMotionSegmentType || (t.CubismMotionSegmentType = {}));
        var i = function () {
            this.time = 0, this.value = 0
        };
        t.CubismMotionPoint = i;
        var o = function () {
            this.evaluate = null, this.basePointIndex = 0, this.segmentType = 0
        };
        t.CubismMotionSegment = o;
        var n = function () {
            this.type = e.CubismMotionCurveTarget_Model, this.segmentCount = 0, this.baseSegmentIndex = 0, this.fadeInTime = 0, this.fadeOutTime = 0
        };
        t.CubismMotionCurve = n;
        var a = function () {
            this.fireTime = 0
        };
        t.CubismMotionEvent = a;
        var s = function () {
            this.duration = 0, this.loop = !1, this.curveCount = 0, this.eventCount = 0, this.fps = 0, this.curves = new r, this.segments = new r, this.points = new r, this.events = new r
        };
        t.CubismMotionData = s
    }(e.Live2DCubismFramework || (e.Live2DCubismFramework = {}))
}, function (t, e, i) {
    "use strict";
    var r, o = this && this.__extends || (r = function (t, e) {
        return (r = Object.setPrototypeOf || {
            __proto__: []
        }
            instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
            })(t, e)
    }, function (t, e) {
        function i() {
            this.constructor = t
        }
        r(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
    });
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = i(8),
        a = i(3),
        s = i(0),
        u = i(1).Live2DCubismFramework.csmVector,
        l = s.Live2DCubismFramework.CubismFramework,
        h = a.Live2DCubismFramework.CubismJson,
        p = n.Live2DCubismFramework.ACubismMotion;
    ! function (t) {
        var e, i = function (t) {
            function i() {
                var e = t.call(this) || this;
                return e._parameters = new u, e
            }
            return o(i, t), i.create = function (t, o) {
                var n = new i,
                    a = h.create(t, o),
                    s = a.getRoot();
                n.setFadeInTime(s.getValueByString("FadeInTime").toFloat(1)), n.setFadeOutTime(s.getValueByString("FadeOutTime").toFloat(1));
                var u = s.getValueByString("Parameters").getSize();
                n._parameters.prepareCapacity(u);
                for (var p = 0; p < u; ++p) {
                    var g = s.getValueByString("Parameters").getValueByIndex(p),
                        c = l.getIdManager().getId(g.getValueByString("Id").getRawString()),
                        d = g.getValueByString("Value").toFloat(),
                        _ = void 0;
                    _ = g.getValueByString("Blend").isNull() || "Add" == g.getValueByString("Blend").getString() ? e.ExpressionBlendType_Add : "Multiply" == g.getValueByString("Blend").getString() ? e.ExpressionBlendType_Multiply : "Overwrite" == g.getValueByString("Blend").getString() ? e.ExpressionBlendType_Overwrite : e.ExpressionBlendType_Add;
                    var m = new r;
                    m.parameterId = c, m.blendType = _, m.value = d, n._parameters.pushBack(m)
                }
                return h.delete(a), n
            }, i.prototype.doUpdateParameters = function (t, i, r, o) {
                for (var n = 0; n < this._parameters.getSize(); ++n) {
                    var a = this._parameters.at(n);
                    switch (a.blendType) {
                        case e.ExpressionBlendType_Add:
                            t.addParameterValueById(a.parameterId, a.value, r);
                            break;
                        case e.ExpressionBlendType_Multiply:
                            t.multiplyParameterValueById(a.parameterId, a.value, r);
                            break;
                        case e.ExpressionBlendType_Overwrite:
                            t.setParameterValueById(a.parameterId, a.value, r)
                    }
                }
            }, i
        }(p);
        t.CubismExpressionMotion = i,
            function (t) {
                t[t.ExpressionBlendType_Add = 0] = "ExpressionBlendType_Add", t[t.ExpressionBlendType_Multiply = 1] = "ExpressionBlendType_Multiply", t[t.ExpressionBlendType_Overwrite = 2] = "ExpressionBlendType_Overwrite"
            }(e = t.ExpressionBlendType || (t.ExpressionBlendType = {}));
        var r = function () { };
        t.ExpressionParameter = r
    }(e.Live2DCubismFramework || (e.Live2DCubismFramework = {}))
}, function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = i(1),
        o = i(0),
        n = i(3),
        a = r.Live2DCubismFramework.csmVector,
        s = o.Live2DCubismFramework.CubismFramework,
        u = n.Live2DCubismFramework.CubismJson;
    ! function (t) {
        var e = function () {
            function t() {
                this._fadeTimeSeconds = .5, this._lastModel = null, this._partGroups = new a, this._partGroupCounts = new a
            }
            return t.create = function (e, r) {
                var o = new t,
                    n = u.create(e, r),
                    a = n.getRoot();
                a.getValueByString("FadeInTime").isNull() || (o._fadeTimeSeconds = a.getValueByString("FadeInTime").toFloat(.5), o._fadeTimeSeconds <= 0 && (o._fadeTimeSeconds = .5));
                for (var l = a.getValueByString("Groups"), h = l.getSize(), p = 0; p < h; ++p) {
                    for (var g = l.getValueByIndex(p), c = g.getSize(), d = 0, _ = 0; _ < c; ++_) {
                        var m = g.getValueByIndex(_),
                            f = new i,
                            y = s.getIdManager().getId(m.getValueByString("Id").getRawString());
                        if (f.partId = y, !m.getValueByString("Link").isNull())
                            for (var v = m.getValueByString("Link"), S = v.getSize(), C = 0; C < S; ++C) {
                                var b = new i,
                                    x = s.getIdManager().getId(v.getValueByIndex(C).getString());
                                b.partId = x, f.link.pushBack(b)
                            }
                        o._partGroups.pushBack(f.clone()), ++d
                    }
                    o._partGroupCounts.pushBack(d)
                }
                return u.delete(n), o
            }, t.delete = function (t) {
                null != t && (t = null)
            }, t.prototype.updateParameters = function (t, e) {
                t != this._lastModel && this.reset(t), this._lastModel = t, e < 0 && (e = 0);
                for (var i = 0, r = 0; r < this._partGroupCounts.getSize(); r++) {
                    var o = this._partGroupCounts.at(r);
                    this.doFade(t, e, i, o), i += o
                }
                this.copyPartOpacities(t)
            }, t.prototype.reset = function (t) {
                for (var e = 0, i = 0; i < this._partGroupCounts.getSize(); ++i) {
                    for (var r = this._partGroupCounts.at(i), o = e; o < e + r; ++o) {
                        this._partGroups.at(o).initialize(t);
                        var n = this._partGroups.at(o).partIndex,
                            a = this._partGroups.at(o).parameterIndex;
                        if (!(n < 0)) {
                            t.setPartOpacityByIndex(n, o == e ? 1 : 0), t.setParameterValueByIndex(a, o == e ? 1 : 0);
                            for (var s = 0; s < this._partGroups.at(o).link.getSize(); ++s) this._partGroups.at(o).link.at(s).initialize(t)
                        }
                    }
                    e += r
                }
            }, t.prototype.copyPartOpacities = function (t) {
                for (var e = 0; e < this._partGroups.getSize(); ++e) {
                    var i = this._partGroups.at(e);
                    if (0 != i.link.getSize())
                        for (var r = this._partGroups.at(e).partIndex, o = t.getPartOpacityByIndex(r), n = 0; n < i.link.getSize(); ++n) {
                            var a = i.link.at(n).partIndex;
                            a < 0 || t.setPartOpacityByIndex(a, o)
                        }
                }
            }, t.prototype.doFade = function (t, e, i, r) {
                for (var o = -1, n = 1, a = i; a < i + r; ++a) {
                    var s = this._partGroups.at(a).partIndex,
                        u = this._partGroups.at(a).parameterIndex;
                    if (t.getParameterValueByIndex(u) > .001) {
                        if (o >= 0) break;
                        o = a, n = t.getPartOpacityByIndex(s), (n += e / this._fadeTimeSeconds) > 1 && (n = 1)
                    }
                }
                o < 0 && (o = 0, n = 1);
                for (a = i; a < i + r; ++a) {
                    var l = this._partGroups.at(a).partIndex;
                    if (o == a) t.setPartOpacityByIndex(l, n);
                    else {
                        var h = t.getPartOpacityByIndex(l),
                            p = void 0;
                        (1 - (p = n < .5 ? -.5 * n / .5 + 1 : .5 * (1 - n) / .5)) * (1 - n) > .15 && (p = 1 - .15 / (1 - n)), h > p && (h = p), t.setPartOpacityByIndex(l, h)
                    }
                }
            }, t
        }();
        t.CubismPose = e;
        var i = function () {
            function t(t) {
                if (this.parameterIndex = 0, this.partIndex = 0, this.link = new a, null != t) {
                    this.partId = t.partId;
                    for (var e = t.link.begin(); e.notEqual(t.link.end()); e.preIncrement()) this.link.pushBack(e.ptr().clone())
                }
            }
            return t.prototype.assignment = function (t) {
                this.partId = t.partId;
                for (var e = t.link.begin(); e.notEqual(t.link.end()); e.preIncrement()) this.link.pushBack(e.ptr().clone());
                return this
            }, t.prototype.initialize = function (t) {
                this.parameterIndex = t.getParameterIndex(this.partId), this.partIndex = t.getPartIndex(this.partId), t.setParameterValueByIndex(this.parameterIndex, 1)
            }, t.prototype.clone = function () {
                var e = new t;
                e.partId = this.partId, e.parameterIndex = this.parameterIndex, e.partIndex = this.partIndex, e.link = new a;
                for (var i = this.link.begin(); i.notEqual(this.link.end()); i.increment()) e.link.pushBack(i.ptr().clone());
                return e
            }, t
        }();
        t.PartData = i
    }(e.Live2DCubismFramework || (e.Live2DCubismFramework = {}))
}, function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = i(39),
        o = i(6),
        n = i(1),
        a = i(0).Live2DCubismFramework.CubismFramework,
        s = n.Live2DCubismFramework.csmVector,
        u = o.Live2DCubismFramework.csmString,
        l = r.Live2DCubismFramework.CubismModelUserDataJson;
    ! function (t) {
        var e = function () { };
        t.CubismModelUserDataNode = e;
        var i = function () {
            function t() {
                this._userDataNodes = new s, this._artMeshUserDataNode = new s
            }
            return t.create = function (e, i) {
                var r = new t;
                return r.parseUserData(e, i), r
            }, t.delete = function (t) {
                null != t && (t.release(), t = null)
            }, t.prototype.getArtMeshUserDatas = function () {
                return this._artMeshUserDataNode
            }, t.prototype.parseUserData = function (t, i) {
                for (var r = new l(t, i), o = a.getIdManager().getId("ArtMesh"), n = r.getUserDataCount(), s = 0; s < n; s++) {
                    var h = new e;
                    h.targetId = r.getUserDataId(s), h.targetType = a.getIdManager().getId(r.getUserDataTargetType(s)), h.value = new u(r.getUserDataValue(s)), this._userDataNodes.pushBack(h), h.targetType == o && this._artMeshUserDataNode.pushBack(h)
                }
                r.release(), r = void 0
            }, t.prototype.release = function () {
                for (var t = 0; t < this._userDataNodes.getSize(); ++t) this._userDataNodes.set(t, null);
                this._userDataNodes = null
            }, t
        }();
        t.CubismModelUserData = i
    }(e.Live2DCubismFramework || (e.Live2DCubismFramework = {}))
}, function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = i(3),
        o = i(0).Live2DCubismFramework.CubismFramework,
        n = r.Live2DCubismFramework.CubismJson;
    ! function (t) {
        var e = function () {
            function t(t, e) {
                this._json = n.create(t, e)
            }
            return t.prototype.release = function () {
                n.delete(this._json)
            }, t.prototype.getUserDataCount = function () {
                return this._json.getRoot().getValueByString("Meta").getValueByString("UserDataCount").toInt()
            }, t.prototype.getTotalUserDataSize = function () {
                return this._json.getRoot().getValueByString("Meta").getValueByString("TotalUserDataSize").toInt()
            }, t.prototype.getUserDataTargetType = function (t) {
                return this._json.getRoot().getValueByString("UserData").getValueByIndex(t).getValueByString("Target").getRawString()
            }, t.prototype.getUserDataId = function (t) {
                return o.getIdManager().getId(this._json.getRoot().getValueByString("UserData").getValueByIndex(t).getValueByString("Id").getRawString())
            }, t.prototype.getUserDataValue = function (t) {
                return this._json.getRoot().getValueByString("UserData").getValueByIndex(t).getValueByString("Value").getRawString()
            }, t
        }();
        t.CubismModelUserDataJson = e
    }(e.Live2DCubismFramework || (e.Live2DCubismFramework = {}))
}, function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = i(41),
        o = i(10),
        n = i(9),
        a = i(42).Live2DCubismFramework.CubismPhysicsJson,
        s = n.Live2DCubismFramework.CubismMath,
        u = r.Live2DCubismFramework.CubismPhysicsRig,
        l = r.Live2DCubismFramework.CubismPhysicsSubRig,
        h = r.Live2DCubismFramework.CubismPhysicsInput,
        p = r.Live2DCubismFramework.CubismPhysicsOutput,
        g = r.Live2DCubismFramework.CubismPhysicsParticle,
        c = r.Live2DCubismFramework.CubismPhysicsSource,
        d = r.Live2DCubismFramework.CubismPhysicsTargetType,
        _ = o.Live2DCubismFramework.CubismVector2;
    ! function (t) {
        var e = function () {
            function t() {
                this._physicsRig = null, this._options = new i, this._options.gravity.y = -1, this._options.gravity.x = 0, this._options.wind.x = 0, this._options.wind.y = 0
            }
            return t.create = function (e, i) {
                var r = new t;
                return r.parse(e, i), r._physicsRig.gravity.y = 0, r
            }, t.delete = function (t) {
                null != t && (t.release(), t = null)
            }, t.prototype.evaluate = function (t, e) {
                var i, r, o, n, a, u, l, h, p, g, c, d, m = new _;
                p = t.getModel().parameters.values, g = t.getModel().parameters.maximumValues, c = t.getModel().parameters.minimumValues, d = t.getModel().parameters.defaultValues;
                for (var f = 0; f < this._physicsRig.subRigCount; ++f) {
                    i = {
                        angle: 0
                    }, m.x = 0, m.y = 0, a = this._physicsRig.settings.at(f), u = this._physicsRig.inputs.get(a.baseInputIndex), l = this._physicsRig.outputs.get(a.baseOutputIndex), h = this._physicsRig.particles.get(a.baseParticleIndex);
                    for (var y = 0; y < a.inputCount; ++y) r = u[y].weight / 100, -1 == u[y].sourceParameterIndex && (u[y].sourceParameterIndex = t.getParameterIndex(u[y].source.id)), u[y].getNormalizedParameterValue(m, i, p[u[y].sourceParameterIndex], c[u[y].sourceParameterIndex], g[u[y].sourceParameterIndex], d[u[y].sourceParameterIndex], a.normalizationPosition, a.normalizationAngle, u[0].reflect, r);
                    o = s.degreesToRadian(-i.angle), m.x = m.x * s.cos(o) - m.y * s.sin(o), m.y = m.x * s.sin(o) + m.y * s.cos(o), x(h, a.particleCount, m, i.angle, this._options.wind, .001 * a.normalizationPosition.maximum, e, 5);
                    for (y = 0; y < a.outputCount; ++y) {
                        var v = l[y].vertexIndex;
                        if (v < 1 || v >= a.particleCount) break; - 1 == l[y].destinationParameterIndex && (l[y].destinationParameterIndex = t.getParameterIndex(l[y].destination.id));
                        var S = new _;
                        S.x = h[v].position.x - h[v - 1].position.x, S.y = h[v].position.y - h[v - 1].position.y, n = l[y].getValue(S, h, v, l[y].reflect, this._options.gravity);
                        var C = l[y].destinationParameterIndex,
                            b = !Float32Array.prototype.slice && "subarray" in Float32Array.prototype ? JSON.parse(JSON.stringify(p.subarray(C))) : p.slice(C);
                        M(b, c[C], g[C], n, l[y]);
                        for (var L = C, P = 0; L < p.length; L++, P++) p[L] = b[P]
                    }
                }
            }, t.prototype.setOptions = function (t) {
                this._options = t
            }, t.prototype.getOption = function () {
                return this._options
            }, t.prototype.release = function () {
                this._physicsRig = void 0, this._physicsRig = null
            }, t.prototype.parse = function (t, e) {
                this._physicsRig = new u;
                var i = new a(t, e);
                this._physicsRig.gravity = i.getGravity(), this._physicsRig.wind = i.getWind(), this._physicsRig.subRigCount = i.getSubRigCount(), this._physicsRig.settings.updateSize(this._physicsRig.subRigCount, l, !0), this._physicsRig.inputs.updateSize(i.getTotalInputCount(), h, !0), this._physicsRig.outputs.updateSize(i.getTotalOutputCount(), p, !0), this._physicsRig.particles.updateSize(i.getVertexCount(), g, !0);
                for (var s = 0, _ = 0, v = 0, x = 0; x < this._physicsRig.settings.getSize(); ++x) {
                    this._physicsRig.settings.at(x).normalizationPosition.minimum = i.getNormalizationPositionMinimumValue(x), this._physicsRig.settings.at(x).normalizationPosition.maximum = i.getNormalizationPositionMaximumValue(x), this._physicsRig.settings.at(x).normalizationPosition.defalut = i.getNormalizationPositionDefaultValue(x), this._physicsRig.settings.at(x).normalizationAngle.minimum = i.getNormalizationAngleMinimumValue(x), this._physicsRig.settings.at(x).normalizationAngle.maximum = i.getNormalizationAngleMaximumValue(x), this._physicsRig.settings.at(x).normalizationAngle.defalut = i.getNormalizationAngleDefaultValue(x), this._physicsRig.settings.at(x).inputCount = i.getInputCount(x), this._physicsRig.settings.at(x).baseInputIndex = s;
                    for (var M = 0; M < this._physicsRig.settings.at(x).inputCount; ++M) this._physicsRig.inputs.at(s + M).sourceParameterIndex = -1, this._physicsRig.inputs.at(s + M).weight = i.getInputWeight(x, M), this._physicsRig.inputs.at(s + M).reflect = i.getInputReflect(x, M), "X" == i.getInputType(x, M) ? (this._physicsRig.inputs.at(s + M).type = c.CubismPhysicsSource_X, this._physicsRig.inputs.at(s + M).getNormalizedParameterValue = r) : "Y" == i.getInputType(x, M) ? (this._physicsRig.inputs.at(s + M).type = c.CubismPhysicsSource_Y, this._physicsRig.inputs.at(s + M).getNormalizedParameterValue = o) : "Angle" == i.getInputType(x, M) && (this._physicsRig.inputs.at(s + M).type = c.CubismPhysicsSource_Angle, this._physicsRig.inputs.at(s + M).getNormalizedParameterValue = n), this._physicsRig.inputs.at(s + M).source.targetType = d.CubismPhysicsTargetType_Parameter, this._physicsRig.inputs.at(s + M).source.id = i.getInputSourceId(x, M);
                    s += this._physicsRig.settings.at(x).inputCount, this._physicsRig.settings.at(x).outputCount = i.getOutputCount(x), this._physicsRig.settings.at(x).baseOutputIndex = _;
                    for (M = 0; M < this._physicsRig.settings.at(x).outputCount; ++M) this._physicsRig.outputs.at(_ + M).destinationParameterIndex = -1, this._physicsRig.outputs.at(_ + M).vertexIndex = i.getOutputVertexIndex(x, M), this._physicsRig.outputs.at(_ + M).angleScale = i.getOutputAngleScale(x, M), this._physicsRig.outputs.at(_ + M).weight = i.getOutputWeight(x, M), this._physicsRig.outputs.at(_ + M).destination.targetType = d.CubismPhysicsTargetType_Parameter, this._physicsRig.outputs.at(_ + M).destination.id = i.getOutputDestinationId(x, M), "X" == i.getOutputType(x, M) ? (this._physicsRig.outputs.at(_ + M).type = c.CubismPhysicsSource_X, this._physicsRig.outputs.at(_ + M).getValue = m, this._physicsRig.outputs.at(_ + M).getScale = S) : "Y" == i.getOutputType(x, M) ? (this._physicsRig.outputs.at(_ + M).type = c.CubismPhysicsSource_Y, this._physicsRig.outputs.at(_ + M).getValue = f, this._physicsRig.outputs.at(_ + M).getScale = C) : "Angle" == i.getOutputType(x, M) && (this._physicsRig.outputs.at(_ + M).type = c.CubismPhysicsSource_Angle, this._physicsRig.outputs.at(_ + M).getValue = y, this._physicsRig.outputs.at(_ + M).getScale = b), this._physicsRig.outputs.at(_ + M).reflect = i.getOutputReflect(x, M);
                    _ += this._physicsRig.settings.at(x).outputCount, this._physicsRig.settings.at(x).particleCount = i.getParticleCount(x), this._physicsRig.settings.at(x).baseParticleIndex = v;
                    for (M = 0; M < this._physicsRig.settings.at(x).particleCount; ++M) this._physicsRig.particles.at(v + M).mobility = i.getParticleMobility(x, M), this._physicsRig.particles.at(v + M).delay = i.getParticleDelay(x, M), this._physicsRig.particles.at(v + M).acceleration = i.getParticleAcceleration(x, M), this._physicsRig.particles.at(v + M).radius = i.getParticleRadius(x, M), this._physicsRig.particles.at(v + M).position = i.getParticlePosition(x, M);
                    v += this._physicsRig.settings.at(x).particleCount
                }
                this.initialize(), i.release(), i = void 0, i = null
            }, t.prototype.initialize = function () {
                for (var t, e, i, r = 0; r < this._physicsRig.subRigCount; ++r) {
                    e = this._physicsRig.settings.at(r), (t = this._physicsRig.particles.get(e.baseParticleIndex))[0].initialPosition = new _(0, 0), t[0].lastPosition = new _(t[0].initialPosition.x, t[0].initialPosition.y), t[0].lastGravity = new _(0, -1), t[0].lastGravity.y *= -1, t[0].velocity = new _(0, 0), t[0].force = new _(0, 0);
                    for (var o = 1; o < e.particleCount; ++o)(i = new _(0, 0)).y = t[o].radius, t[o].initialPosition = new _(t[o - 1].initialPosition.x + i.x, t[o - 1].initialPosition.y + i.y), t[o].position = new _(t[o].initialPosition.x, t[o].initialPosition.y), t[o].lastPosition = new _(t[o].initialPosition.x, t[o].initialPosition.y), t[o].lastGravity = new _(0, -1), t[o].lastGravity.y *= -1, t[o].velocity = new _(0, 0), t[o].force = new _(0, 0)
                }
            }, t
        }();
        t.CubismPhysics = e;
        var i = function () {
            this.gravity = new _(0, 0), this.wind = new _(0, 0)
        };

        function r(t, e, i, r, o, n, a, s, u, l) {
            t.x += L(i, r, o, n, a.minimum, a.maximum, a.defalut, u) * l
        }

        function o(t, e, i, r, o, n, a, s, u, l) {
            t.y += L(i, r, o, n, a.minimum, a.maximum, a.defalut, u) * l
        }

        function n(t, e, i, r, o, n, a, s, u, l) {
            e.angle += L(i, r, o, n, s.minimum, s.maximum, s.defalut, u) * l
        }

        function m(t, e, i, r, o) {
            var n = t.x;
            return r && (n *= -1), n
        }

        function f(t, e, i, r, o) {
            var n = t.y;
            return r && (n *= -1), n
        }

        function y(t, e, i, r, o) {
            var n;
            return o = i >= 2 ? e[i - 1].position.substract(e[i - 2].position) : o.multiplyByScaler(-1), n = s.directionToRadian(o, t), r && (n *= -1), n
        }

        function v(t, e) {
            return s.min(t, e) + function (t, e) {
                var i = s.max(t, e),
                    r = s.min(t, e);
                return s.abs(i - r)
            }(t, e) / 2
        }

        function S(t, e) {
            return JSON.parse(JSON.stringify(t.x))
        }

        function C(t, e) {
            return JSON.parse(JSON.stringify(t.y))
        }

        function b(t, e) {
            return JSON.parse(JSON.stringify(e))
        }

        function x(t, e, i, r, o, n, a, u) {
            var l, h, p, g, c = new _(0, 0),
                d = new _(0, 0),
                m = new _(0, 0),
                f = new _(0, 0);
            t[0].position = new _(i.x, i.y), l = s.degreesToRadian(r), (g = s.radianToDirection(l)).normalize();
            for (var y = 1; y < e; ++y) t[y].force = g.multiplyByScaler(t[y].acceleration).add(o), t[y].lastPosition = new _(t[y].position.x, t[y].position.y), h = t[y].delay * a * 30, c = t[y].position.substract(t[y - 1].position), p = s.directionToRadian(t[y].lastGravity, g) / u, c.x = s.cos(p) * c.x - c.y * s.sin(p), c.y = s.sin(p) * c.x + c.y * s.cos(p), t[y].position = t[y - 1].position.add(c), d = t[y].velocity.multiplyByScaler(h), m = t[y].force.multiplyByScaler(h).multiplyByScaler(h), t[y].position = t[y].position.add(d).add(m), (f = t[y].position.substract(t[y - 1].position)).normalize(), t[y].position = t[y - 1].position.add(f.multiplyByScaler(t[y].radius)), s.abs(t[y].position.x) < n && (t[y].position.x = 0), 0 != h && (t[y].velocity = t[y].position.substract(t[y].lastPosition), t[y].velocity = t[y].velocity.divisionByScalar(h), t[y].velocity = t[y].velocity.multiplyByScaler(t[y].mobility)), t[y].force = new _(0, 0), t[y].lastGravity = new _(g.x, g.y)
        }

        function M(t, e, i, r, o) {
            var n, a;
            (n = r * o.getScale(o.translationScale, o.angleScale)) < e ? (n < o.valueBelowMinimum && (o.valueBelowMinimum = n), n = e) : n > i && (n > o.valueExceededMaximum && (o.valueExceededMaximum = n), n = i), (a = o.weight / 100) >= 1 ? t[0] = n : (n = t[0] * (1 - a) + n * a, t[0] = n)
        }

        function L(t, e, i, r, o, n, a, u) {
            var l = 0,
                h = s.max(i, e);
            h < t && (t = h);
            var p = s.min(i, e);
            p > t && (t = p);
            var g = s.min(o, n),
                c = s.max(o, n),
                d = a,
                _ = v(p, h),
                m = t - _;
            switch (function (t) {
                var e = 0;
                return t > 0 ? e = 1 : t < 0 && (e = -1), e
            }(m)) {
                case 1:
                    var f = c - d;
                    0 != (y = h - _) && (l = m * (f / y), l += d);
                    break;
                case -1:
                    var y;
                    f = g - d;
                    0 != (y = p - _) && (l = m * (f / y), l += d);
                    break;
                case 0:
                    l = d
            }
            return u ? l : -1 * l
        }
        t.Options = i
    }(e.Live2DCubismFramework || (e.Live2DCubismFramework = {}))
}, function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = i(10),
        o = i(1).Live2DCubismFramework.csmVector,
        n = r.Live2DCubismFramework.CubismVector2;
    ! function (t) {
        ! function (t) {
            t[t.CubismPhysicsTargetType_Parameter = 0] = "CubismPhysicsTargetType_Parameter"
        }(t.CubismPhysicsTargetType || (t.CubismPhysicsTargetType = {})),
            function (t) {
                t[t.CubismPhysicsSource_X = 0] = "CubismPhysicsSource_X", t[t.CubismPhysicsSource_Y = 1] = "CubismPhysicsSource_Y", t[t.CubismPhysicsSource_Angle = 2] = "CubismPhysicsSource_Angle"
            }(t.CubismPhysicsSource || (t.CubismPhysicsSource = {}));
        var e = function () {
            this.gravity = new n(0, 0), this.wind = new n(0, 0)
        };
        t.PhysicsJsonEffectiveForces = e;
        var i = function () { };
        t.CubismPhysicsParameter = i;
        var r = function () { };
        t.CubismPhysicsNormalization = r;
        var a = function () {
            this.initialPosition = new n(0, 0), this.position = new n(0, 0), this.lastPosition = new n(0, 0), this.lastGravity = new n(0, 0), this.force = new n(0, 0), this.velocity = new n(0, 0)
        };
        t.CubismPhysicsParticle = a;
        var s = function () {
            this.normalizationPosition = new r, this.normalizationAngle = new r
        };
        t.CubismPhysicsSubRig = s;
        var u = function () {
            this.source = new i
        };
        t.CubismPhysicsInput = u;
        var l = function () {
            this.destination = new i, this.translationScale = new n(0, 0)
        };
        t.CubismPhysicsOutput = l;
        var h = function () {
            this.settings = new o, this.inputs = new o, this.outputs = new o, this.particles = new o, this.gravity = new n(0, 0), this.wind = new n(0, 0)
        };
        t.CubismPhysicsRig = h
    }(e.Live2DCubismFramework || (e.Live2DCubismFramework = {}))
}, function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = i(3),
        o = i(10),
        n = i(0).Live2DCubismFramework.CubismFramework,
        a = o.Live2DCubismFramework.CubismVector2,
        s = r.Live2DCubismFramework.CubismJson;
    ! function (t) {
        var e = "Meta",
            i = "PhysicsSettings",
            r = function () {
                function t(t, e) {
                    this._json = s.create(t, e)
                }
                return t.prototype.release = function () {
                    s.delete(this._json)
                }, t.prototype.getGravity = function () {
                    var t = new a(0, 0);
                    return t.x = this._json.getRoot().getValueByString(e).getValueByString("EffectiveForces").getValueByString("Gravity").getValueByString("X").toFloat(), t.y = this._json.getRoot().getValueByString(e).getValueByString("EffectiveForces").getValueByString("Gravity").getValueByString("Y").toFloat(), t
                }, t.prototype.getWind = function () {
                    var t = new a(0, 0);
                    return t.x = this._json.getRoot().getValueByString(e).getValueByString("EffectiveForces").getValueByString("Wind").getValueByString("X").toFloat(), t.y = this._json.getRoot().getValueByString(e).getValueByString("EffectiveForces").getValueByString("Wind").getValueByString("Y").toFloat(), t
                }, t.prototype.getSubRigCount = function () {
                    return this._json.getRoot().getValueByString(e).getValueByString("PhysicsSettingCount").toInt()
                }, t.prototype.getTotalInputCount = function () {
                    return this._json.getRoot().getValueByString(e).getValueByString("TotalInputCount").toInt()
                }, t.prototype.getTotalOutputCount = function () {
                    return this._json.getRoot().getValueByString(e).getValueByString("TotalOutputCount").toInt()
                }, t.prototype.getVertexCount = function () {
                    return this._json.getRoot().getValueByString(e).getValueByString("VertexCount").toInt()
                }, t.prototype.getNormalizationPositionMinimumValue = function (t) {
                    return this._json.getRoot().getValueByString(i).getValueByIndex(t).getValueByString("Normalization").getValueByString("Position").getValueByString("Minimum").toFloat()
                }, t.prototype.getNormalizationPositionMaximumValue = function (t) {
                    return this._json.getRoot().getValueByString(i).getValueByIndex(t).getValueByString("Normalization").getValueByString("Position").getValueByString("Maximum").toFloat()
                }, t.prototype.getNormalizationPositionDefaultValue = function (t) {
                    return this._json.getRoot().getValueByString(i).getValueByIndex(t).getValueByString("Normalization").getValueByString("Position").getValueByString("Default").toFloat()
                }, t.prototype.getNormalizationAngleMinimumValue = function (t) {
                    return this._json.getRoot().getValueByString(i).getValueByIndex(t).getValueByString("Normalization").getValueByString("Angle").getValueByString("Minimum").toFloat()
                }, t.prototype.getNormalizationAngleMaximumValue = function (t) {
                    return this._json.getRoot().getValueByString(i).getValueByIndex(t).getValueByString("Normalization").getValueByString("Angle").getValueByString("Maximum").toFloat()
                }, t.prototype.getNormalizationAngleDefaultValue = function (t) {
                    return this._json.getRoot().getValueByString(i).getValueByIndex(t).getValueByString("Normalization").getValueByString("Angle").getValueByString("Default").toFloat()
                }, t.prototype.getInputCount = function (t) {
                    return this._json.getRoot().getValueByString(i).getValueByIndex(t).getValueByString("Input").getVector().getSize()
                }, t.prototype.getInputWeight = function (t, e) {
                    return this._json.getRoot().getValueByString(i).getValueByIndex(t).getValueByString("Input").getValueByIndex(e).getValueByString("Weight").toFloat()
                }, t.prototype.getInputReflect = function (t, e) {
                    return this._json.getRoot().getValueByString(i).getValueByIndex(t).getValueByString("Input").getValueByIndex(e).getValueByString("Reflect").toBoolean()
                }, t.prototype.getInputType = function (t, e) {
                    return this._json.getRoot().getValueByString(i).getValueByIndex(t).getValueByString("Input").getValueByIndex(e).getValueByString("Type").getRawString()
                }, t.prototype.getInputSourceId = function (t, e) {
                    return n.getIdManager().getId(this._json.getRoot().getValueByString(i).getValueByIndex(t).getValueByString("Input").getValueByIndex(e).getValueByString("Source").getValueByString("Id").getRawString())
                }, t.prototype.getOutputCount = function (t) {
                    return this._json.getRoot().getValueByString(i).getValueByIndex(t).getValueByString("Output").getVector().getSize()
                }, t.prototype.getOutputVertexIndex = function (t, e) {
                    return this._json.getRoot().getValueByString(i).getValueByIndex(t).getValueByString("Output").getValueByIndex(e).getValueByString("VertexIndex").toInt()
                }, t.prototype.getOutputAngleScale = function (t, e) {
                    return this._json.getRoot().getValueByString(i).getValueByIndex(t).getValueByString("Output").getValueByIndex(e).getValueByString("Scale").toFloat()
                }, t.prototype.getOutputWeight = function (t, e) {
                    return this._json.getRoot().getValueByString(i).getValueByIndex(t).getValueByString("Output").getValueByIndex(e).getValueByString("Weight").toFloat()
                }, t.prototype.getOutputDestinationId = function (t, e) {
                    return n.getIdManager().getId(this._json.getRoot().getValueByString(i).getValueByIndex(t).getValueByString("Output").getValueByIndex(e).getValueByString("Destination").getValueByString("Id").getRawString())
                }, t.prototype.getOutputType = function (t, e) {
                    return this._json.getRoot().getValueByString(i).getValueByIndex(t).getValueByString("Output").getValueByIndex(e).getValueByString("Type").getRawString()
                }, t.prototype.getOutputReflect = function (t, e) {
                    return this._json.getRoot().getValueByString(i).getValueByIndex(t).getValueByString("Output").getValueByIndex(e).getValueByString("Reflect").toBoolean()
                }, t.prototype.getParticleCount = function (t) {
                    return this._json.getRoot().getValueByString(i).getValueByIndex(t).getValueByString("Vertices").getVector().getSize()
                }, t.prototype.getParticleMobility = function (t, e) {
                    return this._json.getRoot().getValueByString(i).getValueByIndex(t).getValueByString("Vertices").getValueByIndex(e).getValueByString("Mobility").toFloat()
                }, t.prototype.getParticleDelay = function (t, e) {
                    return this._json.getRoot().getValueByString(i).getValueByIndex(t).getValueByString("Vertices").getValueByIndex(e).getValueByString("Delay").toFloat()
                }, t.prototype.getParticleAcceleration = function (t, e) {
                    return this._json.getRoot().getValueByString(i).getValueByIndex(t).getValueByString("Vertices").getValueByIndex(e).getValueByString("Acceleration").toFloat()
                }, t.prototype.getParticleRadius = function (t, e) {
                    return this._json.getRoot().getValueByString(i).getValueByIndex(t).getValueByString("Vertices").getValueByIndex(e).getValueByString("Radius").toInt()
                }, t.prototype.getParticlePosition = function (t, e) {
                    var r = new a(0, 0);
                    return r.x = this._json.getRoot().getValueByString(i).getValueByIndex(t).getValueByString("Vertices").getValueByIndex(e).getValueByString("Position").getValueByString("X").toFloat(), r.y = this._json.getRoot().getValueByString(i).getValueByIndex(t).getValueByString("Vertices").getValueByIndex(e).getValueByString("Position").getValueByString("Y").toFloat(), r
                }, t
            }();
        t.CubismPhysicsJson = r
    }(e.Live2DCubismFramework || (e.Live2DCubismFramework = {}))
}, function (t, e, i) {
    "use strict";
    var r, o = this && this.__extends || (r = function (t, e) {
        return (r = Object.setPrototypeOf || {
            __proto__: []
        }
            instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
            })(t, e)
    }, function (t, e) {
        function i() {
            this.constructor = t
        }
        r(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
    });
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = i(0),
        a = i(44),
        s = i(13),
        u = i(4),
        l = i(7),
        h = i(1),
        p = i(2),
        g = n.Live2DCubismFramework.Constant,
        c = u.Live2DCubismFramework.CubismMatrix44,
        d = a.Live2DCubismFramework.csmRect,
        _ = l.Live2DCubismFramework.csmMap,
        m = h.Live2DCubismFramework.csmVector,
        f = s.Live2DCubismFramework.CubismRenderer,
        y = s.Live2DCubismFramework.CubismBlendMode,
        v = s.Live2DCubismFramework.CubismTextureColor;
    ! function (t) {
        var e, i, r, n = function () {
            function t() {
                this._maskRenderTexture = null, this._colorBuffer = null, this._currentFrameNo = 0, this._clippingMaskBufferSize = 256, this._clippingContextListForMask = new m, this._clippingContextListForDraw = new m, this._channelColors = new m, this._tmpBoundsOnModel = new d, this._tmpMatrix = new c, this._tmpMatrixForMask = new c, this._tmpMatrixForDraw = new c, this._maskTexture = null;
                var t = new v;
                t.R = 1, t.G = 0, t.B = 0, t.A = 0, this._channelColors.pushBack(t), (t = new v).R = 0, t.G = 1, t.B = 0, t.A = 0, this._channelColors.pushBack(t), (t = new v).R = 0, t.G = 0, t.B = 1, t.A = 0, this._channelColors.pushBack(t), (t = new v).R = 0, t.G = 0, t.B = 0, t.A = 1, this._channelColors.pushBack(t)
            }
            return t.prototype.getChannelFlagAsColor = function (t) {
                return this._channelColors.at(t)
            }, t.prototype.getMaskRenderTexture = function () {
                var t = 0;
                if (this._maskTexture && 0 != this._maskTexture.texture && (this._maskTexture.frameNo = this._currentFrameNo, t = this._maskTexture.texture), 0 == t) {
                    var e = this._clippingMaskBufferSize;
                    this._colorBuffer = this.gl.createTexture(), this.gl.bindTexture(this.gl.TEXTURE_2D, this._colorBuffer), this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, e, e, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, null), this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, this.gl.CLAMP_TO_EDGE), this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, this.gl.CLAMP_TO_EDGE), this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.gl.LINEAR), this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.gl.LINEAR), this.gl.bindTexture(this.gl.TEXTURE_2D, null), t = this.gl.createFramebuffer(), this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, t), this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER, this.gl.COLOR_ATTACHMENT0, this.gl.TEXTURE_2D, this._colorBuffer, 0), this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, r), this._maskTexture = new a(this._currentFrameNo, t)
                }
                return t
            }, t.prototype.setGL = function (t) {
                this.gl = t
            }, t.prototype.calcClippedDrawTotalBounds = function (t, e) {
                for (var i = Number.MAX_VALUE, r = Number.MAX_VALUE, o = Number.MIN_VALUE, n = Number.MIN_VALUE, a = e._clippedDrawableIndexList.length, s = 0; s < a; s++) {
                    for (var u = e._clippedDrawableIndexList[s], l = t.getDrawableVertexCount(u), h = t.getDrawableVertices(u), p = Number.MAX_VALUE, c = Number.MAX_VALUE, d = Number.MIN_VALUE, _ = Number.MIN_VALUE, m = l * g.vertexStep, f = g.vertexOffset; f < m; f += g.vertexStep) {
                        var y = h[f],
                            v = h[f + 1];
                        y < p && (p = y), y > d && (d = y), v < c && (c = v), v > _ && (_ = v)
                    }
                    if (p != Number.MAX_VALUE)
                        if (p < i && (i = p), c < r && (r = c), d > o && (o = d), _ > n && (n = _), i == Number.MAX_VALUE) e._allClippedDrawRect.x = 0, e._allClippedDrawRect.y = 0, e._allClippedDrawRect.width = 0, e._allClippedDrawRect.height = 0, e._isUsing = !1;
                        else {
                            e._isUsing = !0;
                            var S = o - i,
                                C = n - r;
                            e._allClippedDrawRect.x = i, e._allClippedDrawRect.y = r, e._allClippedDrawRect.width = S, e._allClippedDrawRect.height = C
                        }
                }
            }, t.prototype.release = function () {
                for (var t = 0; t < this._clippingContextListForMask.getSize(); t++) this._clippingContextListForMask.at(t) && (this._clippingContextListForMask.at(t).release(), this._clippingContextListForMask.set(t, void 0)), this._clippingContextListForMask.set(t, null);
                this._clippingContextListForMask = null;
                for (t = 0; t < this._clippingContextListForDraw.getSize(); t++) this._clippingContextListForDraw.set(t, null);
                this._clippingContextListForDraw = null, this._maskTexture && (this.gl.deleteFramebuffer(this._maskTexture.texture), this._maskTexture = null);
                for (t = 0; t < this._channelColors.getSize(); t++) this._channelColors.set(t, null);
                this._channelColors = null, this.gl.deleteTexture(this._colorBuffer), this._colorBuffer = null
            }, t.prototype.initialize = function (t, e, i, r) {
                for (var o = 0; o < e; o++)
                    if (r[o] <= 0) this._clippingContextListForDraw.pushBack(null);
                    else {
                        var n = this.findSameClip(i[o], r[o]);
                        null == n && (n = new s(this, i[o], r[o]), this._clippingContextListForMask.pushBack(n)), n.addClippedDrawable(o), this._clippingContextListForDraw.pushBack(n)
                    }
            }, t.prototype.setupClippingContext = function (t, e) {
                this._currentFrameNo++;
                for (var o = 0, n = 0; n < this._clippingContextListForMask.getSize(); n++) {
                    var a = this._clippingContextListForMask.at(n);
                    this.calcClippedDrawTotalBounds(t, a), a._isUsing && o++
                }
                if (o > 0) {
                    this.gl.viewport(0, 0, this._clippingMaskBufferSize, this._clippingMaskBufferSize), this._maskRenderTexture = this.getMaskRenderTexture();
                    e.getMvpMatrix();
                    e.preDraw(), this.setupLayoutBounds(o), this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this._maskRenderTexture), this.gl.clearColor(1, 1, 1, 1), this.gl.clear(this.gl.COLOR_BUFFER_BIT);
                    for (n = 0; n < this._clippingContextListForMask.getSize(); n++) {
                        var s = this._clippingContextListForMask.at(n),
                            u = s._allClippedDrawRect,
                            l = s._layoutBounds;
                        this._tmpBoundsOnModel.setRect(u), this._tmpBoundsOnModel.expand(.05 * u.width, .05 * u.height);
                        var h = l.width / this._tmpBoundsOnModel.width,
                            p = l.height / this._tmpBoundsOnModel.height;
                        this._tmpMatrix.loadIdentity(), this._tmpMatrix.translateRelative(-1, -1), this._tmpMatrix.scaleRelative(2, 2), this._tmpMatrix.translateRelative(l.x, l.y), this._tmpMatrix.scaleRelative(h, p), this._tmpMatrix.translateRelative(-this._tmpBoundsOnModel.x, -this._tmpBoundsOnModel.y), this._tmpMatrixForMask.setMatrix(this._tmpMatrix.getArray()), this._tmpMatrix.loadIdentity(), this._tmpMatrix.translateRelative(l.x, l.y), this._tmpMatrix.scaleRelative(h, p), this._tmpMatrix.translateRelative(-this._tmpBoundsOnModel.x, -this._tmpBoundsOnModel.y), this._tmpMatrixForDraw.setMatrix(this._tmpMatrix.getArray()), s._matrixForMask.setMatrix(this._tmpMatrixForMask.getArray()), s._matrixForDraw.setMatrix(this._tmpMatrixForDraw.getArray());
                        for (var g = s._clippingIdCount, c = 0; c < g; c++) {
                            var d = s._clippingIdList[c];
                            t.getDrawableDynamicFlagVertexPositionsDidChange(d) && (e.setIsCulling(0 != t.getDrawableCulling(d)), e.setClippingContextBufferForMask(s), e.drawMesh(t.getDrawableTextureIndices(d), t.getDrawableVertexIndexCount(d), t.getDrawableVertexCount(d), t.getDrawableVertexIndices(d), t.getDrawableVertices(d), t.getDrawableVertexUvs(d), t.getDrawableOpacity(d), y.CubismBlendMode_Normal, !1))
                        }
                    }
                    this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, r), e.setClippingContextBufferForMask(null), this.gl.viewport(i[0], i[1], i[2], i[3])
                }
            }, t.prototype.findSameClip = function (t, e) {
                for (var i = 0; i < this._clippingContextListForMask.getSize(); i++) {
                    var r = this._clippingContextListForMask.at(i),
                        o = r._clippingIdCount;
                    if (o == e) {
                        for (var n = 0, a = 0; a < o; a++)
                            for (var s = r._clippingIdList[a], u = 0; u < o; u++)
                                if (t[u] == s) {
                                    n++;
                                    break
                                } if (n == o) return r
                    }
                }
                return null
            }, t.prototype.setupLayoutBounds = function (t) {
                var e = t / 4,
                    i = t % 4;
                e = ~~e, i = ~~i;
                for (var r = 0, o = 0; o < 4; o++) {
                    var n = e + (o < i ? 1 : 0);
                    if (0 == n);
                    else if (1 == n) {
                        var a = this._clippingContextListForMask.at(r++);
                        a._layoutChannelNo = o, a._layoutBounds.x = 0, a._layoutBounds.y = 0, a._layoutBounds.width = 1, a._layoutBounds.height = 1
                    } else if (2 == n)
                        for (var s = 0; s < n; s++) {
                            u = ~~(u = s % 2), (h = this._clippingContextListForMask.at(r++))._layoutChannelNo = o, h._layoutBounds.x = .5 * u, h._layoutBounds.y = 0, h._layoutBounds.width = .5, h._layoutBounds.height = 1
                        } else if (n <= 4)
                        for (s = 0; s < n; s++) {
                            u = ~~(u = s % 2), l = ~~(l = s / 2), (h = this._clippingContextListForMask.at(r++))._layoutChannelNo = o, h._layoutBounds.x = .5 * u, h._layoutBounds.y = .5 * l, h._layoutBounds.width = .5, h._layoutBounds.height = .5
                        } else if (n <= 9)
                        for (s = 0; s < n; s++) {
                            var u, l, h;
                            u = ~~(u = s % 3), l = ~~(l = s / 3), (h = this._clippingContextListForMask.at(r++))._layoutChannelNo = o, h._layoutBounds.x = u / 3, h._layoutBounds.y = l / 3, h._layoutBounds.width = 1 / 3, h._layoutBounds.height = 1 / 3
                        } else p.CubismLogError("not supported mask count : {0}", n)
                }
            }, t.prototype.getColorBuffer = function () {
                return this._colorBuffer
            }, t.prototype.getClippingContextListForDraw = function () {
                return this._clippingContextListForDraw
            }, t.prototype.setClippingMaskBufferSize = function (t) {
                this._clippingMaskBufferSize = t
            }, t.prototype.getClippingMaskBufferSize = function () {
                return this._clippingMaskBufferSize
            }, t
        }();
        t.CubismClippingManager_WebGL = n;
        var a = function (t, e) {
            this.frameNo = t, this.texture = e
        };
        t.CubismRenderTextureResource = a;
        var s = function () {
            function t(t, e, i) {
                this._owner = t, this._clippingIdList = e, this._clippingIdCount = i, this._allClippedDrawRect = new d, this._layoutBounds = new d, this._clippedDrawableIndexList = [], this._matrixForMask = new c, this._matrixForDraw = new c
            }
            return t.prototype.release = function () {
                null != this._layoutBounds && (this._layoutBounds = null), null != this._allClippedDrawRect && (this._allClippedDrawRect = null), null != this._clippedDrawableIndexList && (this._clippedDrawableIndexList = null)
            }, t.prototype.addClippedDrawable = function (t) {
                this._clippedDrawableIndexList.push(t)
            }, t.prototype.getClippingManager = function () {
                return this._owner
            }, t.prototype.setGl = function (t) {
                this._owner.setGL(t)
            }, t
        }();
        t.CubismClippingContext = s;
        var u = function () {
            function i() {
                this._shaderSets = new m
            }
            return i.getInstance = function () {
                return null == e ? e = new i : e
            }, i.deleteInstance = function () {
                e && (e.release(), e = null)
            }, i.prototype.release = function () {
                this.releaseShaderProgram()
            }, i.prototype.setupShaderProgram = function (t, e, i, r, o, n, a, s, u, g, c, d, _) {
                var m, f, v, S;
                if (c || p.CubismLogError("NoPremultipliedAlpha is not allowed"), 0 == this._shaderSets.getSize() && this.generateShaders(), null != t.getClippingContextBufferForMask()) {
                    var C = this._shaderSets.at(l.ShaderNames_SetupMask);
                    this.gl.useProgram(C.shaderProgram), this.gl.activeTexture(this.gl.TEXTURE0), this.gl.bindTexture(this.gl.TEXTURE_2D, e), this.gl.uniform1i(C.samplerTexture0Location, 0), null == a.vertex && (a.vertex = this.gl.createBuffer()), this.gl.bindBuffer(this.gl.ARRAY_BUFFER, a.vertex), this.gl.bufferData(this.gl.ARRAY_BUFFER, r, this.gl.DYNAMIC_DRAW), this.gl.enableVertexAttribArray(C.attributePositionLocation), this.gl.vertexAttribPointer(C.attributePositionLocation, 2, this.gl.FLOAT, !1, 0, 0), null == a.uv && (a.uv = this.gl.createBuffer()), this.gl.bindBuffer(this.gl.ARRAY_BUFFER, a.uv), this.gl.bufferData(this.gl.ARRAY_BUFFER, n, this.gl.DYNAMIC_DRAW), this.gl.enableVertexAttribArray(C.attributeTexCoordLocation), this.gl.vertexAttribPointer(C.attributeTexCoordLocation, 2, this.gl.FLOAT, !1, 0, 0);
                    var b = t.getClippingContextBufferForMask()._layoutChannelNo,
                        x = t.getClippingContextBufferForMask().getClippingManager().getChannelFlagAsColor(b);
                    this.gl.uniform4f(C.uniformChannelFlagLocation, x.R, x.G, x.B, x.A), this.gl.uniformMatrix4fv(C.uniformClipMatrixLocation, !1, t.getClippingContextBufferForMask()._matrixForMask.getArray());
                    var M = t.getClippingContextBufferForMask()._layoutBounds;
                    this.gl.uniform4f(C.uniformBaseColorLocation, 2 * M.x - 1, 2 * M.y - 1, 2 * M.getRight() - 1, 2 * M.getBottom() - 1), m = this.gl.ZERO, f = this.gl.ONE_MINUS_SRC_COLOR, v = this.gl.ZERO, S = this.gl.ONE_MINUS_SRC_ALPHA
                } else {
                    var L = null != t.getClippingContextBufferForDraw(),
                        P = L ? _ ? 2 : 1 : 0;
                    C = new h;
                    switch (u) {
                        case y.CubismBlendMode_Normal:
                        default:
                            C = this._shaderSets.at(l.ShaderNames_NormalPremultipliedAlpha + P), m = this.gl.ONE, f = this.gl.ONE_MINUS_SRC_ALPHA, v = this.gl.ONE, S = this.gl.ONE_MINUS_SRC_ALPHA;
                            break;
                        case y.CubismBlendMode_Additive:
                            C = this._shaderSets.at(l.ShaderNames_AddPremultipliedAlpha + P), m = this.gl.ONE, f = this.gl.ONE, v = this.gl.ZERO, S = this.gl.ONE;
                            break;
                        case y.CubismBlendMode_Multiplicative:
                            C = this._shaderSets.at(l.ShaderNames_MultPremultipliedAlpha + P), m = this.gl.DST_COLOR, f = this.gl.ONE_MINUS_SRC_ALPHA, v = this.gl.ZERO, S = this.gl.ONE
                    }
                    if (this.gl.useProgram(C.shaderProgram), null == a.vertex && (a.vertex = this.gl.createBuffer()), this.gl.bindBuffer(this.gl.ARRAY_BUFFER, a.vertex), this.gl.bufferData(this.gl.ARRAY_BUFFER, r, this.gl.DYNAMIC_DRAW), this.gl.enableVertexAttribArray(C.attributePositionLocation), this.gl.vertexAttribPointer(C.attributePositionLocation, 2, this.gl.FLOAT, !1, 0, 0), null == a.uv && (a.uv = this.gl.createBuffer()), this.gl.bindBuffer(this.gl.ARRAY_BUFFER, a.uv), this.gl.bufferData(this.gl.ARRAY_BUFFER, n, this.gl.DYNAMIC_DRAW), this.gl.enableVertexAttribArray(C.attributeTexCoordLocation), this.gl.vertexAttribPointer(C.attributeTexCoordLocation, 2, this.gl.FLOAT, !1, 0, 0), L) {
                        this.gl.activeTexture(this.gl.TEXTURE1);
                        var B = t.getClippingContextBufferForDraw().getClippingManager().getColorBuffer();
                        this.gl.bindTexture(this.gl.TEXTURE_2D, B), this.gl.uniform1i(C.samplerTexture1Location, 1), this.gl.uniformMatrix4fv(C.uniformClipMatrixLocation, !1, t.getClippingContextBufferForDraw()._matrixForDraw.getArray());
                        b = t.getClippingContextBufferForDraw()._layoutChannelNo, x = t.getClippingContextBufferForDraw().getClippingManager().getChannelFlagAsColor(b);
                        this.gl.uniform4f(C.uniformChannelFlagLocation, x.R, x.G, x.B, x.A)
                    }
                    this.gl.activeTexture(this.gl.TEXTURE0), this.gl.bindTexture(this.gl.TEXTURE_2D, e), this.gl.uniform1i(C.samplerTexture0Location, 0), this.gl.uniformMatrix4fv(C.uniformMatrixLocation, !1, d.getArray()), this.gl.uniform4f(C.uniformBaseColorLocation, g.R, g.G, g.B, g.A)
                }
                null == a.index && (a.index = this.gl.createBuffer()), this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, a.index), this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER, o, this.gl.DYNAMIC_DRAW), this.gl.blendFuncSeparate(m, f, v, S)
            }, i.prototype.releaseShaderProgram = function () {
                for (var t = 0; t < this._shaderSets.getSize(); t++) this.gl.deleteProgram(this._shaderSets.at(t).shaderProgram), this._shaderSets.at(t).shaderProgram = 0, this._shaderSets.set(t, void 0), this._shaderSets.set(t, null)
            }, i.prototype.generateShaders = function () {
                for (var e = 0; e < 10; e++) this._shaderSets.pushBack(new h);
                this._shaderSets.at(0).shaderProgram = this.loadShaderProgram(t.vertexShaderSrcSetupMask, t.fragmentShaderSrcsetupMask), this._shaderSets.at(1).shaderProgram = this.loadShaderProgram(t.vertexShaderSrc, t.fragmentShaderSrcPremultipliedAlpha), this._shaderSets.at(2).shaderProgram = this.loadShaderProgram(t.vertexShaderSrcMasked, t.fragmentShaderSrcMaskPremultipliedAlpha), this._shaderSets.at(3).shaderProgram = this.loadShaderProgram(t.vertexShaderSrcMasked, t.fragmentShaderSrcMaskInvertedPremultipliedAlpha), this._shaderSets.at(4).shaderProgram = this._shaderSets.at(1).shaderProgram, this._shaderSets.at(5).shaderProgram = this._shaderSets.at(2).shaderProgram, this._shaderSets.at(6).shaderProgram = this._shaderSets.at(3).shaderProgram, this._shaderSets.at(7).shaderProgram = this._shaderSets.at(1).shaderProgram, this._shaderSets.at(8).shaderProgram = this._shaderSets.at(2).shaderProgram, this._shaderSets.at(9).shaderProgram = this._shaderSets.at(3).shaderProgram, this._shaderSets.at(0).attributePositionLocation = this.gl.getAttribLocation(this._shaderSets.at(0).shaderProgram, "a_position"), this._shaderSets.at(0).attributeTexCoordLocation = this.gl.getAttribLocation(this._shaderSets.at(0).shaderProgram, "a_texCoord"), this._shaderSets.at(0).samplerTexture0Location = this.gl.getUniformLocation(this._shaderSets.at(0).shaderProgram, "s_texture0"), this._shaderSets.at(0).uniformClipMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(0).shaderProgram, "u_clipMatrix"), this._shaderSets.at(0).uniformChannelFlagLocation = this.gl.getUniformLocation(this._shaderSets.at(0).shaderProgram, "u_channelFlag"), this._shaderSets.at(0).uniformBaseColorLocation = this.gl.getUniformLocation(this._shaderSets.at(0).shaderProgram, "u_baseColor"), this._shaderSets.at(1).attributePositionLocation = this.gl.getAttribLocation(this._shaderSets.at(1).shaderProgram, "a_position"), this._shaderSets.at(1).attributeTexCoordLocation = this.gl.getAttribLocation(this._shaderSets.at(1).shaderProgram, "a_texCoord"), this._shaderSets.at(1).samplerTexture0Location = this.gl.getUniformLocation(this._shaderSets.at(1).shaderProgram, "s_texture0"), this._shaderSets.at(1).uniformMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(1).shaderProgram, "u_matrix"), this._shaderSets.at(1).uniformBaseColorLocation = this.gl.getUniformLocation(this._shaderSets.at(1).shaderProgram, "u_baseColor"), this._shaderSets.at(2).attributePositionLocation = this.gl.getAttribLocation(this._shaderSets.at(2).shaderProgram, "a_position"), this._shaderSets.at(2).attributeTexCoordLocation = this.gl.getAttribLocation(this._shaderSets.at(2).shaderProgram, "a_texCoord"), this._shaderSets.at(2).samplerTexture0Location = this.gl.getUniformLocation(this._shaderSets.at(2).shaderProgram, "s_texture0"), this._shaderSets.at(2).samplerTexture1Location = this.gl.getUniformLocation(this._shaderSets.at(2).shaderProgram, "s_texture1"), this._shaderSets.at(2).uniformMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(2).shaderProgram, "u_matrix"), this._shaderSets.at(2).uniformClipMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(2).shaderProgram, "u_clipMatrix"), this._shaderSets.at(2).uniformChannelFlagLocation = this.gl.getUniformLocation(this._shaderSets.at(2).shaderProgram, "u_channelFlag"), this._shaderSets.at(2).uniformBaseColorLocation = this.gl.getUniformLocation(this._shaderSets.at(2).shaderProgram, "u_baseColor"), this._shaderSets.at(3).attributePositionLocation = this.gl.getAttribLocation(this._shaderSets.at(3).shaderProgram, "a_position"), this._shaderSets.at(3).attributeTexCoordLocation = this.gl.getAttribLocation(this._shaderSets.at(3).shaderProgram, "a_texCoord"), this._shaderSets.at(3).samplerTexture0Location = this.gl.getUniformLocation(this._shaderSets.at(3).shaderProgram, "s_texture0"), this._shaderSets.at(3).samplerTexture1Location = this.gl.getUniformLocation(this._shaderSets.at(3).shaderProgram, "s_texture1"), this._shaderSets.at(3).uniformMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(3).shaderProgram, "u_matrix"), this._shaderSets.at(3).uniformClipMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(3).shaderProgram, "u_clipMatrix"), this._shaderSets.at(3).uniformChannelFlagLocation = this.gl.getUniformLocation(this._shaderSets.at(3).shaderProgram, "u_channelFlag"), this._shaderSets.at(3).uniformBaseColorLocation = this.gl.getUniformLocation(this._shaderSets.at(3).shaderProgram, "u_baseColor"), this._shaderSets.at(4).attributePositionLocation = this.gl.getAttribLocation(this._shaderSets.at(4).shaderProgram, "a_position"), this._shaderSets.at(4).attributeTexCoordLocation = this.gl.getAttribLocation(this._shaderSets.at(4).shaderProgram, "a_texCoord"), this._shaderSets.at(4).samplerTexture0Location = this.gl.getUniformLocation(this._shaderSets.at(4).shaderProgram, "s_texture0"), this._shaderSets.at(4).uniformMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(4).shaderProgram, "u_matrix"), this._shaderSets.at(4).uniformBaseColorLocation = this.gl.getUniformLocation(this._shaderSets.at(4).shaderProgram, "u_baseColor"), this._shaderSets.at(5).attributePositionLocation = this.gl.getAttribLocation(this._shaderSets.at(5).shaderProgram, "a_position"), this._shaderSets.at(5).attributeTexCoordLocation = this.gl.getAttribLocation(this._shaderSets.at(5).shaderProgram, "a_texCoord"), this._shaderSets.at(5).samplerTexture0Location = this.gl.getUniformLocation(this._shaderSets.at(5).shaderProgram, "s_texture0"), this._shaderSets.at(5).samplerTexture1Location = this.gl.getUniformLocation(this._shaderSets.at(5).shaderProgram, "s_texture1"), this._shaderSets.at(5).uniformMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(5).shaderProgram, "u_matrix"), this._shaderSets.at(5).uniformClipMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(5).shaderProgram, "u_clipMatrix"), this._shaderSets.at(5).uniformChannelFlagLocation = this.gl.getUniformLocation(this._shaderSets.at(5).shaderProgram, "u_channelFlag"), this._shaderSets.at(5).uniformBaseColorLocation = this.gl.getUniformLocation(this._shaderSets.at(5).shaderProgram, "u_baseColor"), this._shaderSets.at(6).attributePositionLocation = this.gl.getAttribLocation(this._shaderSets.at(6).shaderProgram, "a_position"), this._shaderSets.at(6).attributeTexCoordLocation = this.gl.getAttribLocation(this._shaderSets.at(6).shaderProgram, "a_texCoord"), this._shaderSets.at(6).samplerTexture0Location = this.gl.getUniformLocation(this._shaderSets.at(6).shaderProgram, "s_texture0"), this._shaderSets.at(6).samplerTexture1Location = this.gl.getUniformLocation(this._shaderSets.at(6).shaderProgram, "s_texture1"), this._shaderSets.at(6).uniformMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(6).shaderProgram, "u_matrix"), this._shaderSets.at(6).uniformClipMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(6).shaderProgram, "u_clipMatrix"), this._shaderSets.at(6).uniformChannelFlagLocation = this.gl.getUniformLocation(this._shaderSets.at(6).shaderProgram, "u_channelFlag"), this._shaderSets.at(6).uniformBaseColorLocation = this.gl.getUniformLocation(this._shaderSets.at(6).shaderProgram, "u_baseColor"), this._shaderSets.at(7).attributePositionLocation = this.gl.getAttribLocation(this._shaderSets.at(7).shaderProgram, "a_position"), this._shaderSets.at(7).attributeTexCoordLocation = this.gl.getAttribLocation(this._shaderSets.at(7).shaderProgram, "a_texCoord"), this._shaderSets.at(7).samplerTexture0Location = this.gl.getUniformLocation(this._shaderSets.at(7).shaderProgram, "s_texture0"), this._shaderSets.at(7).uniformMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(7).shaderProgram, "u_matrix"), this._shaderSets.at(7).uniformBaseColorLocation = this.gl.getUniformLocation(this._shaderSets.at(7).shaderProgram, "u_baseColor"), this._shaderSets.at(8).attributePositionLocation = this.gl.getAttribLocation(this._shaderSets.at(8).shaderProgram, "a_position"), this._shaderSets.at(8).attributeTexCoordLocation = this.gl.getAttribLocation(this._shaderSets.at(8).shaderProgram, "a_texCoord"), this._shaderSets.at(8).samplerTexture0Location = this.gl.getUniformLocation(this._shaderSets.at(8).shaderProgram, "s_texture0"), this._shaderSets.at(8).samplerTexture1Location = this.gl.getUniformLocation(this._shaderSets.at(8).shaderProgram, "s_texture1"), this._shaderSets.at(8).uniformMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(8).shaderProgram, "u_matrix"), this._shaderSets.at(8).uniformClipMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(8).shaderProgram, "u_clipMatrix"), this._shaderSets.at(8).uniformChannelFlagLocation = this.gl.getUniformLocation(this._shaderSets.at(8).shaderProgram, "u_channelFlag"), this._shaderSets.at(8).uniformBaseColorLocation = this.gl.getUniformLocation(this._shaderSets.at(8).shaderProgram, "u_baseColor"), this._shaderSets.at(9).attributePositionLocation = this.gl.getAttribLocation(this._shaderSets.at(9).shaderProgram, "a_position"), this._shaderSets.at(9).attributeTexCoordLocation = this.gl.getAttribLocation(this._shaderSets.at(9).shaderProgram, "a_texCoord"), this._shaderSets.at(9).samplerTexture0Location = this.gl.getUniformLocation(this._shaderSets.at(9).shaderProgram, "s_texture0"), this._shaderSets.at(9).samplerTexture1Location = this.gl.getUniformLocation(this._shaderSets.at(9).shaderProgram, "s_texture1"), this._shaderSets.at(9).uniformMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(9).shaderProgram, "u_matrix"), this._shaderSets.at(9).uniformClipMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(9).shaderProgram, "u_clipMatrix"), this._shaderSets.at(9).uniformChannelFlagLocation = this.gl.getUniformLocation(this._shaderSets.at(9).shaderProgram, "u_channelFlag"), this._shaderSets.at(9).uniformBaseColorLocation = this.gl.getUniformLocation(this._shaderSets.at(9).shaderProgram, "u_baseColor")
            }, i.prototype.loadShaderProgram = function (t, e) {
                var i = this.gl.createProgram(),
                    r = this.compileShaderSource(this.gl.VERTEX_SHADER, t);
                if (!r) return p.CubismLogError("Vertex shader compile error!"), 0;
                var o = this.compileShaderSource(this.gl.FRAGMENT_SHADER, e);
                return o ? (this.gl.attachShader(i, r), this.gl.attachShader(i, o), this.gl.linkProgram(i), this.gl.getProgramParameter(i, this.gl.LINK_STATUS) ? (this.gl.deleteShader(r), this.gl.deleteShader(o), i) : (p.CubismLogError("Failed to link program: {0}", i), this.gl.deleteShader(r), r = 0, this.gl.deleteShader(o), o = 0, i && (this.gl.deleteProgram(i), i = 0), 0)) : (p.CubismLogError("Vertex shader compile error!"), 0)
            }, i.prototype.compileShaderSource = function (t, e) {
                var i = e,
                    r = this.gl.createShader(t);
                if (this.gl.shaderSource(r, i), this.gl.compileShader(r), !r) {
                    var o = this.gl.getShaderInfoLog(r);
                    p.CubismLogError("Shader compile log: {0} ", o)
                }
                return this.gl.getShaderParameter(r, this.gl.COMPILE_STATUS) ? r : (this.gl.deleteShader(r), null)
            }, i.prototype.setGl = function (t) {
                this.gl = t
            }, i
        }();
        t.CubismShader_WebGL = u;
        var l, h = function () { };
        t.CubismShaderSet = h,
            function (t) {
                t[t.ShaderNames_SetupMask = 0] = "ShaderNames_SetupMask", t[t.ShaderNames_NormalPremultipliedAlpha = 1] = "ShaderNames_NormalPremultipliedAlpha", t[t.ShaderNames_NormalMaskedPremultipliedAlpha = 2] = "ShaderNames_NormalMaskedPremultipliedAlpha", t[t.ShaderNames_NomralMaskedInvertedPremultipliedAlpha = 3] = "ShaderNames_NomralMaskedInvertedPremultipliedAlpha", t[t.ShaderNames_AddPremultipliedAlpha = 4] = "ShaderNames_AddPremultipliedAlpha", t[t.ShaderNames_AddMaskedPremultipliedAlpha = 5] = "ShaderNames_AddMaskedPremultipliedAlpha", t[t.ShaderNames_AddMaskedPremultipliedAlphaInverted = 6] = "ShaderNames_AddMaskedPremultipliedAlphaInverted", t[t.ShaderNames_MultPremultipliedAlpha = 7] = "ShaderNames_MultPremultipliedAlpha", t[t.ShaderNames_MultMaskedPremultipliedAlpha = 8] = "ShaderNames_MultMaskedPremultipliedAlpha", t[t.ShaderNames_MultMaskedPremultipliedAlphaInverted = 9] = "ShaderNames_MultMaskedPremultipliedAlphaInverted"
            }(l = t.ShaderNames || (t.ShaderNames = {})), t.vertexShaderSrcSetupMask = "attribute vec4     a_position;attribute vec2     a_texCoord;varying vec2       v_texCoord;varying vec4       v_myPos;uniform mat4       u_clipMatrix;void main(){   gl_Position = u_clipMatrix * a_position;   v_myPos = u_clipMatrix * a_position;   v_texCoord = a_texCoord;   v_texCoord.y = 1.0 - v_texCoord.y;}", t.fragmentShaderSrcsetupMask = "precision mediump float;varying vec2       v_texCoord;varying vec4       v_myPos;uniform vec4       u_baseColor;uniform vec4       u_channelFlag;uniform sampler2D  s_texture0;void main(){   float isInside =        step(u_baseColor.x, v_myPos.x/v_myPos.w)       * step(u_baseColor.y, v_myPos.y/v_myPos.w)       * step(v_myPos.x/v_myPos.w, u_baseColor.z)       * step(v_myPos.y/v_myPos.w, u_baseColor.w);   gl_FragColor = u_channelFlag * texture2D(s_texture0, v_texCoord).a * isInside;}", t.vertexShaderSrc = "attribute vec4     a_position;attribute vec2     a_texCoord;varying vec2       v_texCoord;uniform mat4       u_matrix;void main(){   gl_Position = u_matrix * a_position;   v_texCoord = a_texCoord;   v_texCoord.y = 1.0 - v_texCoord.y;}", t.vertexShaderSrcMasked = "attribute vec4     a_position;attribute vec2     a_texCoord;varying vec2       v_texCoord;varying vec4       v_clipPos;uniform mat4       u_matrix;uniform mat4       u_clipMatrix;void main(){   gl_Position = u_matrix * a_position;   v_clipPos = u_clipMatrix * a_position;   v_texCoord = a_texCoord;   v_texCoord.y = 1.0 - v_texCoord.y;}", t.fragmentShaderSrcPremultipliedAlpha = "precision mediump float;varying vec2       v_texCoord;uniform vec4       u_baseColor;uniform sampler2D  s_texture0;void main(){   gl_FragColor = texture2D(s_texture0 , v_texCoord) * u_baseColor;}", t.fragmentShaderSrcMaskPremultipliedAlpha = "precision mediump float;varying vec2       v_texCoord;varying vec4       v_clipPos;uniform vec4       u_baseColor;uniform vec4       u_channelFlag;uniform sampler2D  s_texture0;uniform sampler2D  s_texture1;void main(){   vec4 col_formask = texture2D(s_texture0 , v_texCoord) * u_baseColor;   vec4 clipMask = (1.0 - texture2D(s_texture1, v_clipPos.xy / v_clipPos.w)) * u_channelFlag;   float maskVal = clipMask.r + clipMask.g + clipMask.b + clipMask.a;   col_formask = col_formask * maskVal;   gl_FragColor = col_formask;}", t.fragmentShaderSrcMaskInvertedPremultipliedAlpha = "precision mediump float;varying vec2 v_texCoord;varying vec4 v_clipPos;uniform sampler2D s_texture0;uniform sampler2D s_texture1;uniform vec4 u_channelFlag;uniform vec4 u_baseColor;void main(){vec4 col_formask = texture2D(s_texture0, v_texCoord) * u_baseColor;vec4 clipMask = (1.0 - texture2D(s_texture1, v_clipPos.xy / v_clipPos.w)) * u_channelFlag;float maskVal = clipMask.r + clipMask.g + clipMask.b + clipMask.a;col_formask = col_formask * (1.0 - maskVal);gl_FragColor = col_formask;}";
        var S = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._clippingContextBufferForMask = null, e._clippingContextBufferForDraw = null, e._clippingManager = new n, e.firstDraw = !0, e._textures = new _, e._sortedDrawableIndexList = new m, e._bufferData = {
                    vertex: WebGLBuffer = null,
                    uv: WebGLBuffer = null,
                    index: WebGLBuffer = null
                }, e._textures.prepareCapacity(32, !0), e
            }
            return o(e, t), e.prototype.initialize = function (e) {
                e.isUsingMasking() && (this._clippingManager = new n, this._clippingManager.initialize(e, e.getDrawableCount(), e.getDrawableMasks(), e.getDrawableMaskCounts())), this._sortedDrawableIndexList.resize(e.getDrawableCount(), 0), t.prototype.initialize.call(this, e)
            }, e.prototype.bindTexture = function (t, e) {
                this._textures.setValue(t, e)
            }, e.prototype.getBindedTextures = function () {
                return this._textures
            }, e.prototype.setClippingMaskBufferSize = function (t) {
                this._clippingManager.release(), this._clippingManager = void 0, this._clippingManager = null, this._clippingManager = new n, this._clippingManager.setClippingMaskBufferSize(t), this._clippingManager.initialize(this.getModel(), this.getModel().getDrawableCount(), this.getModel().getDrawableMasks(), this.getModel().getDrawableMaskCounts())
            }, e.prototype.getClippingMaskBufferSize = function () {
                return this._clippingManager.getClippingMaskBufferSize()
            }, e.prototype.release = function () {
                this._clippingManager.release(), this._clippingManager = void 0, this._clippingManager = null, this.gl.deleteBuffer(this._bufferData.vertex), this._bufferData.vertex = null, this.gl.deleteBuffer(this._bufferData.uv), this._bufferData.uv = null, this.gl.deleteBuffer(this._bufferData.index), this._bufferData.index = null, this._bufferData = null, this._textures = null
            }, e.prototype.doDrawModel = function () {
                null != this._clippingManager && (this.preDraw(), this._clippingManager.setupClippingContext(this.getModel(), this)), this.preDraw();
                for (var t = this.getModel().getDrawableCount(), e = this.getModel().getDrawableRenderOrders(), i = 0; i < t; ++i) {
                    var r = e[i];
                    this._sortedDrawableIndexList.set(r, i)
                }
                for (i = 0; i < t; ++i) {
                    var o = this._sortedDrawableIndexList.at(i);
                    this.getModel().getDrawableDynamicFlagIsVisible(o) && (this.setClippingContextBufferForDraw(null != this._clippingManager ? this._clippingManager.getClippingContextListForDraw().at(o) : null), this.setIsCulling(this.getModel().getDrawableCulling(o)), this.drawMesh(this.getModel().getDrawableTextureIndices(o), this.getModel().getDrawableVertexIndexCount(o), this.getModel().getDrawableVertexCount(o), this.getModel().getDrawableVertexIndices(o), this.getModel().getDrawableVertices(o), this.getModel().getDrawableVertexUvs(o), this.getModel().getDrawableOpacity(o), this.getModel().getDrawableBlendMode(o), this.getModel().getDrawableInvertedMaskBit(o)))
                }
            }, e.prototype.drawMesh = function (t, e, i, r, o, n, a, s, l) {
                this.isCulling() ? this.gl.enable(this.gl.CULL_FACE) : this.gl.disable(this.gl.CULL_FACE), this.gl.frontFace(this.gl.CCW);
                var h, p = this.getModelColor();
                null == this.getClippingContextBufferForMask() && (p.A *= a, this.isPremultipliedAlpha() && (p.R *= p.A, p.G *= p.A, p.B *= p.A)), h = null != this._textures.getValue(t) ? this._textures.getValue(t) : null, u.getInstance().setupShaderProgram(this, h, i, o, r, n, this._bufferData, a, s, p, this.isPremultipliedAlpha(), this.getMvpMatrix(), l), this.gl.drawElements(this.gl.TRIANGLES, e, this.gl.UNSIGNED_SHORT, 0), this.gl.useProgram(null), this.setClippingContextBufferForDraw(null), this.setClippingContextBufferForMask(null)
            }, e.doStaticRelease = function () {
                u.deleteInstance()
            }, e.prototype.setRenderState = function (t, e) {
                r = t, i = e
            }, e.prototype.preDraw = function () {
                this.firstDraw && (this.firstDraw = !1, this._anisortopy = this.gl.getExtension("EXT_texture_filter_anisotropic") || this.gl.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || this.gl.getExtension("MOZ_EXT_texture_filter_anisotropic")), this.gl.disable(this.gl.SCISSOR_TEST), this.gl.disable(this.gl.STENCIL_TEST), this.gl.disable(this.gl.DEPTH_TEST), this.gl.frontFace(this.gl.CW), this.gl.enable(this.gl.BLEND), this.gl.colorMask(!0, !0, !0, !0), this.gl.bindBuffer(this.gl.ARRAY_BUFFER, null), this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, null)
            }, e.prototype.setClippingContextBufferForMask = function (t) {
                this._clippingContextBufferForMask = t
            }, e.prototype.getClippingContextBufferForMask = function () {
                return this._clippingContextBufferForMask
            }, e.prototype.setClippingContextBufferForDraw = function (t) {
                this._clippingContextBufferForDraw = t
            }, e.prototype.getClippingContextBufferForDraw = function () {
                return this._clippingContextBufferForDraw
            }, e.prototype.startUp = function (t) {
                this.gl = t, this._clippingManager.setGL(t), u.getInstance().setGl(t)
            }, e
        }(f);
        t.CubismRenderer_WebGL = S, f.staticRelease = function () {
            S.doStaticRelease()
        }
    }(e.Live2DCubismFramework || (e.Live2DCubismFramework = {}))
}, function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
        function (t) {
            var e = function () {
                function t(t, e, i, r) {
                    this.x = t, this.y = e, this.width = i, this.height = r
                }
                return t.prototype.getCenterX = function () {
                    return this.x + .5 * this.width
                }, t.prototype.getCenterY = function () {
                    return this.y + .5 * this.height
                }, t.prototype.getRight = function () {
                    return this.x + this.width
                }, t.prototype.getBottom = function () {
                    return this.y + this.height
                }, t.prototype.setRect = function (t) {
                    this.x = t.x, this.y = t.y, this.width = t.width, this.height = t.height
                }, t.prototype.expand = function (t, e) {
                    this.x -= t, this.y -= e, this.width += 2 * t, this.height += 2 * e
                }, t
            }();
            t.csmRect = e
        }(e.Live2DCubismFramework || (e.Live2DCubismFramework = {}))
}, function (t, e, i) {
    "use strict";
    var r, o = this && this.__extends || (r = function (t, e) {
        return (r = Object.setPrototypeOf || {
            __proto__: []
        }
            instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
            })(t, e)
    }, function (t, e) {
        function i() {
            this.constructor = t
        }
        r(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
    });
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = i(0),
        a = i(46),
        s = i(3),
        u = i(1).Live2DCubismFramework.csmVector,
        l = n.Live2DCubismFramework.CubismFramework,
        h = s.Live2DCubismFramework.CubismJson,
        p = a.Live2DCubismFramework.ICubismModelSetting;
    ! function (t) {
        var e, i = "Name";
        ! function (t) {
            t[t.FrequestNode_Groups = 0] = "FrequestNode_Groups", t[t.FrequestNode_Moc = 1] = "FrequestNode_Moc", t[t.FrequestNode_Motions = 2] = "FrequestNode_Motions", t[t.FrequestNode_Expressions = 3] = "FrequestNode_Expressions", t[t.FrequestNode_Textures = 4] = "FrequestNode_Textures", t[t.FrequestNode_Physics = 5] = "FrequestNode_Physics", t[t.FrequestNode_Pose = 6] = "FrequestNode_Pose", t[t.FrequestNode_HitAreas = 7] = "FrequestNode_HitAreas"
        }(e || (e = {}));
        var r = function (t) {
            function r(e, i) {
                var r = t.call(this) || this;
                return r._json = h.create(e, i), r._json && (r._jsonValue = new u, r._jsonValue.pushBack(r._json.getRoot().getValueByString("Groups")), r._jsonValue.pushBack(r._json.getRoot().getValueByString("FileReferences").getValueByString("Moc")), r._jsonValue.pushBack(r._json.getRoot().getValueByString("FileReferences").getValueByString("Motions")), r._jsonValue.pushBack(r._json.getRoot().getValueByString("FileReferences").getValueByString("Expressions")), r._jsonValue.pushBack(r._json.getRoot().getValueByString("FileReferences").getValueByString("Textures")), r._jsonValue.pushBack(r._json.getRoot().getValueByString("FileReferences").getValueByString("Physics")), r._jsonValue.pushBack(r._json.getRoot().getValueByString("FileReferences").getValueByString("Pose")), r._jsonValue.pushBack(r._json.getRoot().getValueByString("HitAreas"))), r
            }
            return o(r, t), r.prototype.release = function () {
                h.delete(this._json), this._jsonValue = null
            }, r.prototype.GetJson = function () {
                return this._json
            }, r.prototype.getModelFileName = function () {
                return this.isExistModelFile() ? this._jsonValue.at(e.FrequestNode_Moc).getRawString() : ""
            }, r.prototype.getTextureCount = function () {
                return this.isExistTextureFiles() ? this._jsonValue.at(e.FrequestNode_Textures).getSize() : 0
            }, r.prototype.getTextureDirectory = function () {
                return this._jsonValue.at(e.FrequestNode_Textures).getRawString()
            }, r.prototype.getTextureFileName = function (t) {
                return this._jsonValue.at(e.FrequestNode_Textures).getValueByIndex(t).getRawString()
            }, r.prototype.getHitAreasCount = function () {
                return this.isExistHitAreas() ? this._jsonValue.at(e.FrequestNode_HitAreas).getSize() : 0
            }, r.prototype.getHitAreaId = function (t) {
                return l.getIdManager().getId(this._jsonValue.at(e.FrequestNode_HitAreas).getValueByIndex(t).getValueByString("Id").getRawString())
            }, r.prototype.getHitAreaName = function (t) {
                return this._jsonValue.at(e.FrequestNode_HitAreas).getValueByIndex(t).getValueByString(i).getRawString()
            }, r.prototype.getPhysicsFileName = function () {
                return this.isExistPhysicsFile() ? this._jsonValue.at(e.FrequestNode_Physics).getRawString() : ""
            }, r.prototype.getPoseFileName = function () {
                return this.isExistPoseFile() ? this._jsonValue.at(e.FrequestNode_Pose).getRawString() : ""
            }, r.prototype.getExpressionCount = function () {
                return this.isExistExpressionFile() ? this._jsonValue.at(e.FrequestNode_Expressions).getSize() : 0
            }, r.prototype.getExpressionName = function (t) {
                return this._jsonValue.at(e.FrequestNode_Expressions).getValueByIndex(t).getValueByString(i).getRawString()
            }, r.prototype.getExpressionFileName = function (t) {
                return this._jsonValue.at(e.FrequestNode_Expressions).getValueByIndex(t).getValueByString("File").getRawString()
            }, r.prototype.getMotionGroupCount = function () {
                return this.isExistMotionGroups() ? this._jsonValue.at(e.FrequestNode_Motions).getKeys().getSize() : 0
            }, r.prototype.getMotionGroupName = function (t) {
                return this.isExistMotionGroups() ? this._jsonValue.at(e.FrequestNode_Motions).getKeys().at(t) : null
            }, r.prototype.getMotionCount = function (t) {
                return this.isExistMotionGroupName(t) ? this._jsonValue.at(e.FrequestNode_Motions).getValueByString(t).getSize() : 0
            }, r.prototype.getMotionFileName = function (t, i) {
                return this.isExistMotionGroupName(t) ? this._jsonValue.at(e.FrequestNode_Motions).getValueByString(t).getValueByIndex(i).getValueByString("File").getRawString() : ""
            }, r.prototype.getMotionSoundFileName = function (t, i) {
                return this.isExistMotionSoundFile(t, i) ? this._jsonValue.at(e.FrequestNode_Motions).getValueByString(t).getValueByIndex(i).getValueByString("Sound").getRawString() : ""
            }, r.prototype.getMotionFadeInTimeValue = function (t, i) {
                return this.isExistMotionFadeIn(t, i) ? this._jsonValue.at(e.FrequestNode_Motions).getValueByString(t).getValueByIndex(i).getValueByString("FadeInTime").toFloat() : -1
            }, r.prototype.getMotionFadeOutTimeValue = function (t, i) {
                return this.isExistMotionFadeOut(t, i) ? this._jsonValue.at(e.FrequestNode_Motions).getValueByString(t).getValueByIndex(i).getValueByString("FadeOutTime").toFloat() : -1
            }, r.prototype.getUserDataFile = function () {
                return this.isExistUserDataFile() ? this._json.getRoot().getValueByString("FileReferences").getValueByString("UserData").getRawString() : ""
            }, r.prototype.getLayoutMap = function (t) {
                var e = this._json.getRoot().getValueByString("Layout").getMap();
                if (null == e) return !1;
                for (var i = !1, r = e.begin(); r.notEqual(e.end()); r.preIncrement()) t.setValue(r.ptr().first, r.ptr().second.toFloat()), i = !0;
                return i
            }, r.prototype.getEyeBlinkParameterCount = function () {
                if (!this.isExistEyeBlinkParameters()) return 0;
                for (var t = 0, r = 0; r < this._jsonValue.at(e.FrequestNode_Groups).getSize(); r++) {
                    var o = this._jsonValue.at(e.FrequestNode_Groups).getValueByIndex(r);
                    if (!o.isNull() && !o.isError() && "EyeBlink" == o.getValueByString(i).getRawString()) {
                        t = o.getValueByString("Ids").getVector().getSize();
                        break
                    }
                }
                return t
            }, r.prototype.getEyeBlinkParameterId = function (t) {
                if (!this.isExistEyeBlinkParameters()) return null;
                for (var r = 0; r < this._jsonValue.at(e.FrequestNode_Groups).getSize(); r++) {
                    var o = this._jsonValue.at(e.FrequestNode_Groups).getValueByIndex(r);
                    if (!o.isNull() && !o.isError() && "EyeBlink" == o.getValueByString(i).getRawString()) return l.getIdManager().getId(o.getValueByString("Ids").getValueByIndex(t).getRawString())
                }
                return null
            }, r.prototype.getLipSyncParameterCount = function () {
                if (!this.isExistLipSyncParameters()) return 0;
                for (var t = 0, r = 0; r < this._jsonValue.at(e.FrequestNode_Groups).getSize(); r++) {
                    var o = this._jsonValue.at(e.FrequestNode_Groups).getValueByIndex(r);
                    if (!o.isNull() && !o.isError() && "LipSync" == o.getValueByString(i).getRawString()) {
                        t = o.getValueByString("Ids").getVector().getSize();
                        break
                    }
                }
                return t
            }, r.prototype.getLipSyncParameterId = function (t) {
                if (!this.isExistLipSyncParameters()) return null;
                for (var r = 0; r < this._jsonValue.at(e.FrequestNode_Groups).getSize(); r++) {
                    var o = this._jsonValue.at(e.FrequestNode_Groups).getValueByIndex(r);
                    if (!o.isNull() && !o.isError() && "LipSync" == o.getValueByString(i).getRawString()) return l.getIdManager().getId(o.getValueByString("Ids").getValueByIndex(t).getRawString())
                }
                return null
            }, r.prototype.isExistModelFile = function () {
                var t = this._jsonValue.at(e.FrequestNode_Moc);
                return !t.isNull() && !t.isError()
            }, r.prototype.isExistTextureFiles = function () {
                var t = this._jsonValue.at(e.FrequestNode_Textures);
                return !t.isNull() && !t.isError()
            }, r.prototype.isExistHitAreas = function () {
                var t = this._jsonValue.at(e.FrequestNode_HitAreas);
                return !t.isNull() && !t.isError()
            }, r.prototype.isExistPhysicsFile = function () {
                var t = this._jsonValue.at(e.FrequestNode_Physics);
                return !t.isNull() && !t.isError()
            }, r.prototype.isExistPoseFile = function () {
                var t = this._jsonValue.at(e.FrequestNode_Pose);
                return !t.isNull() && !t.isError()
            }, r.prototype.isExistExpressionFile = function () {
                var t = this._jsonValue.at(e.FrequestNode_Expressions);
                return !t.isNull() && !t.isError()
            }, r.prototype.isExistMotionGroups = function () {
                var t = this._jsonValue.at(e.FrequestNode_Motions);
                return !t.isNull() && !t.isError()
            }, r.prototype.isExistMotionGroupName = function (t) {
                var i = this._jsonValue.at(e.FrequestNode_Motions).getValueByString(t);
                return !i.isNull() && !i.isError()
            }, r.prototype.isExistMotionSoundFile = function (t, i) {
                var r = this._jsonValue.at(e.FrequestNode_Motions).getValueByString(t).getValueByIndex(i).getValueByString("Sound");
                return !r.isNull() && !r.isError()
            }, r.prototype.isExistMotionFadeIn = function (t, i) {
                var r = this._jsonValue.at(e.FrequestNode_Motions).getValueByString(t).getValueByIndex(i).getValueByString("FadeInTime");
                return !r.isNull() && !r.isError()
            }, r.prototype.isExistMotionFadeOut = function (t, i) {
                var r = this._jsonValue.at(e.FrequestNode_Motions).getValueByString(t).getValueByIndex(i).getValueByString("FadeOutTime");
                return !r.isNull() && !r.isError()
            }, r.prototype.isExistUserDataFile = function () {
                var t = this._json.getRoot().getValueByString("FileReferences").getValueByString("UserData");
                return !t.isNull() && !t.isError()
            }, r.prototype.isExistEyeBlinkParameters = function () {
                if (this._jsonValue.at(e.FrequestNode_Groups).isNull() || this._jsonValue.at(e.FrequestNode_Groups).isError()) return !1;
                for (var t = 0; t < this._jsonValue.at(e.FrequestNode_Groups).getSize(); ++t)
                    if ("EyeBlink" == this._jsonValue.at(e.FrequestNode_Groups).getValueByIndex(t).getValueByString(i).getRawString()) return !0;
                return !1
            }, r.prototype.isExistLipSyncParameters = function () {
                if (this._jsonValue.at(e.FrequestNode_Groups).isNull() || this._jsonValue.at(e.FrequestNode_Groups).isError()) return !1;
                for (var t = 0; t < this._jsonValue.at(e.FrequestNode_Groups).getSize(); ++t)
                    if ("LipSync" == this._jsonValue.at(e.FrequestNode_Groups).getValueByIndex(t).getValueByString(i).getRawString()) return !0;
                return !1
            }, r
        }(p);
        t.CubismModelSettingJson = r
    }(e.Live2DCubismFramework || (e.Live2DCubismFramework = {}))
}, function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
        function (t) {
            var e = function () { };
            t.ICubismModelSetting = e
        }(e.Live2DCubismFramework || (e.Live2DCubismFramework = {}))
}, function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
        function (t) {
            t.HitAreaPrefix = "HitArea", t.HitAreaHead = "Head", t.HitAreaBody = "Body", t.PartsIdCore = "Parts01Core", t.PartsArmPrefix = "Parts01Arm_", t.PartsArmLPrefix = "Parts01ArmL_", t.PartsArmRPrefix = "Parts01ArmR_", t.ParamAngleX = "ParamAngleX", t.ParamAngleY = "ParamAngleY", t.ParamAngleZ = "ParamAngleZ", t.ParamEyeLOpen = "ParamEyeLOpen", t.ParamEyeLSmile = "ParamEyeLSmile", t.ParamEyeROpen = "ParamEyeROpen", t.ParamEyeRSmile = "ParamEyeRSmile", t.ParamEyeBallX = "ParamEyeBallX", t.ParamEyeBallY = "ParamEyeBallY", t.ParamEyeBallForm = "ParamEyeBallForm", t.ParamBrowLY = "ParamBrowLY", t.ParamBrowRY = "ParamBrowRY", t.ParamBrowLX = "ParamBrowLX", t.ParamBrowRX = "ParamBrowRX", t.ParamBrowLAngle = "ParamBrowLAngle", t.ParamBrowRAngle = "ParamBrowRAngle", t.ParamBrowLForm = "ParamBrowLForm", t.ParamBrowRForm = "ParamBrowRForm", t.ParamMouthForm = "ParamMouthForm", t.ParamMouthOpenY = "ParamMouthOpenY", t.ParamCheek = "ParamCheek", t.ParamBodyAngleX = "ParamBodyAngleX", t.ParamBodyAngleY = "ParamBodyAngleY", t.ParamBodyAngleZ = "ParamBodyAngleZ", t.ParamBreath = "ParamBreath", t.ParamArmLA = "ParamArmLA", t.ParamArmRA = "ParamArmRA", t.ParamArmLB = "ParamArmLB", t.ParamArmRB = "ParamArmRB", t.ParamHandL = "ParamHandL", t.ParamHandR = "ParamHandR", t.ParamHairFront = "ParamHairFront", t.ParamHairSide = "ParamHairSide", t.ParamHairBack = "ParamHairBack", t.ParamHairFluffy = "ParamHairFluffy", t.ParamShoulderY = "ParamShoulderY", t.ParamBustX = "ParamBustX", t.ParamBustY = "ParamBustY", t.ParamBaseX = "ParamBaseX", t.ParamBaseY = "ParamBaseY", t.ParamNONE = "NONE:"
        }(e.Live2DCubismFramework || (e.Live2DCubismFramework = {}))
}, function (t, e, i) {
    "use strict";
    i.r(e), i.d(e, "Headers", (function () {
        return c
    })), i.d(e, "Request", (function () {
        return S
    })), i.d(e, "Response", (function () {
        return b
    })), i.d(e, "DOMException", (function () {
        return M
    })), i.d(e, "fetch", (function () {
        return L
    }));
    var r = "URLSearchParams" in self,
        o = "Symbol" in self && "iterator" in Symbol,
        n = "FileReader" in self && "Blob" in self && function () {
            try {
                return new Blob, !0
            } catch (t) {
                return !1
            }
        }(),
        a = "FormData" in self,
        s = "ArrayBuffer" in self;
    if (s) var u = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
        l = ArrayBuffer.isView || function (t) {
            return t && u.indexOf(Object.prototype.toString.call(t)) > -1
        };

    function h(t) {
        if ("string" != typeof t && (t = String(t)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t)) throw new TypeError("Invalid character in header field name");
        return t.toLowerCase()
    }

    function p(t) {
        return "string" != typeof t && (t = String(t)), t
    }

    function g(t) {
        var e = {
            next: function () {
                var e = t.shift();
                return {
                    done: void 0 === e,
                    value: e
                }
            }
        };
        return o && (e[Symbol.iterator] = function () {
            return e
        }), e
    }

    function c(t) {
        this.map = {}, t instanceof c ? t.forEach((function (t, e) {
            this.append(e, t)
        }), this) : Array.isArray(t) ? t.forEach((function (t) {
            this.append(t[0], t[1])
        }), this) : t && Object.getOwnPropertyNames(t).forEach((function (e) {
            this.append(e, t[e])
        }), this)
    }

    function d(t) {
        if (t.bodyUsed) return Promise.reject(new TypeError("Already read"));
        t.bodyUsed = !0
    }

    function _(t) {
        return new Promise((function (e, i) {
            t.onload = function () {
                e(t.result)
            }, t.onerror = function () {
                i(t.error)
            }
        }))
    }

    function m(t) {
        var e = new FileReader,
            i = _(e);
        return e.readAsArrayBuffer(t), i
    }

    function f(t) {
        if (t.slice) return t.slice(0);
        var e = new Uint8Array(t.byteLength);
        return e.set(new Uint8Array(t)), e.buffer
    }

    function y() {
        return this.bodyUsed = !1, this._initBody = function (t) {
            var e;
            this._bodyInit = t, t ? "string" == typeof t ? this._bodyText = t : n && Blob.prototype.isPrototypeOf(t) ? this._bodyBlob = t : a && FormData.prototype.isPrototypeOf(t) ? this._bodyFormData = t : r && URLSearchParams.prototype.isPrototypeOf(t) ? this._bodyText = t.toString() : s && n && ((e = t) && DataView.prototype.isPrototypeOf(e)) ? (this._bodyArrayBuffer = f(t.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : s && (ArrayBuffer.prototype.isPrototypeOf(t) || l(t)) ? this._bodyArrayBuffer = f(t) : this._bodyText = t = Object.prototype.toString.call(t) : this._bodyText = "", this.headers.get("content-type") || ("string" == typeof t ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : r && URLSearchParams.prototype.isPrototypeOf(t) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
        }, n && (this.blob = function () {
            var t = d(this);
            if (t) return t;
            if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
            if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
            if (this._bodyFormData) throw new Error("could not read FormData body as blob");
            return Promise.resolve(new Blob([this._bodyText]))
        }, this.arrayBuffer = function () {
            return this._bodyArrayBuffer ? d(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(m)
        }), this.text = function () {
            var t, e, i, r = d(this);
            if (r) return r;
            if (this._bodyBlob) return t = this._bodyBlob, e = new FileReader, i = _(e), e.readAsText(t), i;
            if (this._bodyArrayBuffer) return Promise.resolve(function (t) {
                for (var e = new Uint8Array(t), i = new Array(e.length), r = 0; r < e.length; r++) i[r] = String.fromCharCode(e[r]);
                return i.join("")
            }(this._bodyArrayBuffer));
            if (this._bodyFormData) throw new Error("could not read FormData body as text");
            return Promise.resolve(this._bodyText)
        }, a && (this.formData = function () {
            return this.text().then(C)
        }), this.json = function () {
            return this.text().then(JSON.parse)
        }, this
    }
    c.prototype.append = function (t, e) {
        t = h(t), e = p(e);
        var i = this.map[t];
        this.map[t] = i ? i + ", " + e : e
    }, c.prototype.delete = function (t) {
        delete this.map[h(t)]
    }, c.prototype.get = function (t) {
        return t = h(t), this.has(t) ? this.map[t] : null
    }, c.prototype.has = function (t) {
        return this.map.hasOwnProperty(h(t))
    }, c.prototype.set = function (t, e) {
        this.map[h(t)] = p(e)
    }, c.prototype.forEach = function (t, e) {
        for (var i in this.map) this.map.hasOwnProperty(i) && t.call(e, this.map[i], i, this)
    }, c.prototype.keys = function () {
        var t = [];
        return this.forEach((function (e, i) {
            t.push(i)
        })), g(t)
    }, c.prototype.values = function () {
        var t = [];
        return this.forEach((function (e) {
            t.push(e)
        })), g(t)
    }, c.prototype.entries = function () {
        var t = [];
        return this.forEach((function (e, i) {
            t.push([i, e])
        })), g(t)
    }, o && (c.prototype[Symbol.iterator] = c.prototype.entries);
    var v = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];

    function S(t, e) {
        var i, r, o = (e = e || {}).body;
        if (t instanceof S) {
            if (t.bodyUsed) throw new TypeError("Already read");
            this.url = t.url, this.credentials = t.credentials, e.headers || (this.headers = new c(t.headers)), this.method = t.method, this.mode = t.mode, this.signal = t.signal, o || null == t._bodyInit || (o = t._bodyInit, t.bodyUsed = !0)
        } else this.url = String(t);
        if (this.credentials = e.credentials || this.credentials || "same-origin", !e.headers && this.headers || (this.headers = new c(e.headers)), this.method = (i = e.method || this.method || "GET", r = i.toUpperCase(), v.indexOf(r) > -1 ? r : i), this.mode = e.mode || this.mode || null, this.signal = e.signal || this.signal, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && o) throw new TypeError("Body not allowed for GET or HEAD requests");
        this._initBody(o)
    }

    function C(t) {
        var e = new FormData;
        return t.trim().split("&").forEach((function (t) {
            if (t) {
                var i = t.split("="),
                    r = i.shift().replace(/\+/g, " "),
                    o = i.join("=").replace(/\+/g, " ");
                e.append(decodeURIComponent(r), decodeURIComponent(o))
            }
        })), e
    }

    function b(t, e) {
        e || (e = {}), this.type = "default", this.status = void 0 === e.status ? 200 : e.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in e ? e.statusText : "OK", this.headers = new c(e.headers), this.url = e.url || "", this._initBody(t)
    }
    S.prototype.clone = function () {
        return new S(this, {
            body: this._bodyInit
        })
    }, y.call(S.prototype), y.call(b.prototype), b.prototype.clone = function () {
        return new b(this._bodyInit, {
            status: this.status,
            statusText: this.statusText,
            headers: new c(this.headers),
            url: this.url
        })
    }, b.error = function () {
        var t = new b(null, {
            status: 0,
            statusText: ""
        });
        return t.type = "error", t
    };
    var x = [301, 302, 303, 307, 308];
    b.redirect = function (t, e) {
        if (-1 === x.indexOf(e)) throw new RangeError("Invalid status code");
        return new b(null, {
            status: e,
            headers: {
                location: t
            }
        })
    };
    var M = self.DOMException;
    try {
        new M
    } catch (t) {
        (M = function (t, e) {
            this.message = t, this.name = e;
            var i = Error(t);
            this.stack = i.stack
        }).prototype = Object.create(Error.prototype), M.prototype.constructor = M
    }

    function L(t, e) {
        return new Promise((function (i, r) {
            var o = new S(t, e);
            if (o.signal && o.signal.aborted) return r(new M("Aborted", "AbortError"));
            var a = new XMLHttpRequest;

            function s() {
                a.abort()
            }
            a.onload = function () {
                var t, e, r = {
                    status: a.status,
                    statusText: a.statusText,
                    headers: (t = a.getAllResponseHeaders() || "", e = new c, t.replace(/\r?\n[\t ]+/g, " ").split(/\r?\n/).forEach((function (t) {
                        var i = t.split(":"),
                            r = i.shift().trim();
                        if (r) {
                            var o = i.join(":").trim();
                            e.append(r, o)
                        }
                    })), e)
                };
                r.url = "responseURL" in a ? a.responseURL : r.headers.get("X-Request-URL");
                var o = "response" in a ? a.response : a.responseText;
                i(new b(o, r))
            }, a.onerror = function () {
                r(new TypeError("Network request failed"))
            }, a.ontimeout = function () {
                r(new TypeError("Network request failed"))
            }, a.onabort = function () {
                r(new M("Aborted", "AbortError"))
            }, a.open(o.method, o.url, !0), "include" === o.credentials ? a.withCredentials = !0 : "omit" === o.credentials && (a.withCredentials = !1), "responseType" in a && n && (a.responseType = "blob"), o.headers.forEach((function (t, e) {
                a.setRequestHeader(e, t)
            })), o.signal && (o.signal.addEventListener("abort", s), a.onreadystatechange = function () {
                4 === a.readyState && o.signal.removeEventListener("abort", s)
            }), a.send(void 0 === o._bodyInit ? null : o._bodyInit)
        }))
    }
    L.polyfill = !0, self.fetch || (self.fetch = L, self.Headers = c, self.Request = S, self.Response = b)
}, function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = i(1).Live2DCubismFramework.csmVector,
        o = i(5),
        n = function () {
            function t() {
                this._textures = new r
            }
            return t.prototype.release = function () {
                for (var t = this._textures.begin(); t.notEqual(this._textures.end()); t.preIncrement()) o.gl.deleteTexture(t.ptr().id);
                this._textures = null
            }, t.prototype.createTextureFromPngFile = function (t, e, i) {
                for (var r = this, n = function (r) {
                    if (r.ptr().fileName == t && r.ptr().usePremultply == e) return r.ptr().img = new Image, r.ptr().img.onload = function () {
                        return i(r.ptr())
                    }, r.ptr().img.src = t, {
                        value: void 0
                    }
                }, s = this._textures.begin(); s.notEqual(this._textures.end()); s.preIncrement()) {
                    var u = n(s);
                    if ("object" == typeof u) return u.value
                }
                var l = new Image;
                l.crossOrigin = "", l.onload = function () {
                    var n = o.gl.createTexture();
                    o.gl.bindTexture(o.gl.TEXTURE_2D, n), o.gl.texParameteri(o.gl.TEXTURE_2D, o.gl.TEXTURE_MIN_FILTER, o.gl.LINEAR_MIPMAP_LINEAR), o.gl.texParameteri(o.gl.TEXTURE_2D, o.gl.TEXTURE_MAG_FILTER, o.gl.LINEAR), e && o.gl.pixelStorei(o.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1), o.gl.texImage2D(o.gl.TEXTURE_2D, 0, o.gl.RGBA, o.gl.RGBA, o.gl.UNSIGNED_BYTE, l), o.gl.generateMipmap(o.gl.TEXTURE_2D), o.gl.bindTexture(o.gl.TEXTURE_2D, null);
                    var s = new a;
                    null != s && (s.fileName = t, s.width = l.width, s.height = l.height, s.id = n, s.img = l, s.usePremultply = e, r._textures.pushBack(s)), i(s)
                }, l.src = t
            }, t.prototype.releaseTextures = function () {
                for (var t = 0; t < this._textures.getSize(); t++) this._textures.set(t, null);
                this._textures.clear()
            }, t.prototype.releaseTextureByTexture = function (t) {
                for (var e = 0; e < this._textures.getSize(); e++)
                    if (this._textures.at(e).id == t) {
                        this._textures.set(e, null), this._textures.remove(e);
                        break
                    }
            }, t.prototype.releaseTextureByFilePath = function (t) {
                for (var e = 0; e < this._textures.getSize(); e++)
                    if (this._textures.at(e).fileName == t) {
                        this._textures.set(e, null), this._textures.remove(e);
                        break
                    }
            }, t
        }();
    e.LAppTextureManager = n;
    var a = function () {
        this.id = null, this.width = 0, this.height = 0
    };
    e.TextureInfo = a
}]);