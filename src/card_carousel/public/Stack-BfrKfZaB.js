//#region \0rolldown/runtime.js
var e = Object.create, t = Object.defineProperty, n = Object.getOwnPropertyDescriptor, r = Object.getOwnPropertyNames, i = Object.getPrototypeOf, a = Object.prototype.hasOwnProperty, o = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), s = (e, i, o, s) => {
	if (i && typeof i == "object" || typeof i == "function") for (var c = r(i), l = 0, u = c.length, d; l < u; l++) d = c[l], !a.call(e, d) && d !== o && t(e, d, {
		get: ((e) => i[e]).bind(null, d),
		enumerable: !(s = n(i, d)) || s.enumerable
	});
	return e;
}, c = (n, r, a) => (a = n == null ? {} : e(i(n)), s(r || !n || !n.__esModule ? t(a, "default", {
	value: n,
	enumerable: !0
}) : a, n)), l = /* @__PURE__ */ o(((e) => {
	var t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), s = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), f = Symbol.iterator;
	function p(e) {
		return typeof e != "object" || !e ? null : (e = f && e[f] || e["@@iterator"], typeof e == "function" ? e : null);
	}
	var m = {
		isMounted: function() {
			return !1;
		},
		enqueueForceUpdate: function() {},
		enqueueReplaceState: function() {},
		enqueueSetState: function() {}
	}, h = Object.assign, g = {};
	function _(e, t, n) {
		this.props = e, this.context = t, this.refs = g, this.updater = n || m;
	}
	_.prototype.isReactComponent = {}, _.prototype.setState = function(e, t) {
		if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
		this.updater.enqueueSetState(this, e, t, "setState");
	}, _.prototype.forceUpdate = function(e) {
		this.updater.enqueueForceUpdate(this, e, "forceUpdate");
	};
	function v() {}
	v.prototype = _.prototype;
	function y(e, t, n) {
		this.props = e, this.context = t, this.refs = g, this.updater = n || m;
	}
	var b = y.prototype = new v();
	b.constructor = y, h(b, _.prototype), b.isPureReactComponent = !0;
	var x = Array.isArray, S = Object.prototype.hasOwnProperty, C = { current: null }, w = {
		key: !0,
		ref: !0,
		__self: !0,
		__source: !0
	};
	function T(e, n, r) {
		var i, a = {}, o = null, s = null;
		if (n != null) for (i in n.ref !== void 0 && (s = n.ref), n.key !== void 0 && (o = "" + n.key), n) S.call(n, i) && !w.hasOwnProperty(i) && (a[i] = n[i]);
		var c = arguments.length - 2;
		if (c === 1) a.children = r;
		else if (1 < c) {
			for (var l = Array(c), u = 0; u < c; u++) l[u] = arguments[u + 2];
			a.children = l;
		}
		if (e && e.defaultProps) for (i in c = e.defaultProps, c) a[i] === void 0 && (a[i] = c[i]);
		return {
			$$typeof: t,
			type: e,
			key: o,
			ref: s,
			props: a,
			_owner: C.current
		};
	}
	function E(e, n) {
		return {
			$$typeof: t,
			type: e.type,
			key: n,
			ref: e.ref,
			props: e.props,
			_owner: e._owner
		};
	}
	function D(e) {
		return typeof e == "object" && !!e && e.$$typeof === t;
	}
	function O(e) {
		var t = {
			"=": "=0",
			":": "=2"
		};
		return "$" + e.replace(/[=:]/g, function(e) {
			return t[e];
		});
	}
	var k = /\/+/g;
	function ee(e, t) {
		return typeof e == "object" && e && e.key != null ? O("" + e.key) : t.toString(36);
	}
	function A(e, r, i, a, o) {
		var s = typeof e;
		(s === "undefined" || s === "boolean") && (e = null);
		var c = !1;
		if (e === null) c = !0;
		else switch (s) {
			case "string":
			case "number":
				c = !0;
				break;
			case "object": switch (e.$$typeof) {
				case t:
				case n: c = !0;
			}
		}
		if (c) return c = e, o = o(c), e = a === "" ? "." + ee(c, 0) : a, x(o) ? (i = "", e != null && (i = e.replace(k, "$&/") + "/"), A(o, r, i, "", function(e) {
			return e;
		})) : o != null && (D(o) && (o = E(o, i + (!o.key || c && c.key === o.key ? "" : ("" + o.key).replace(k, "$&/") + "/") + e)), r.push(o)), 1;
		if (c = 0, a = a === "" ? "." : a + ":", x(e)) for (var l = 0; l < e.length; l++) {
			s = e[l];
			var u = a + ee(s, l);
			c += A(s, r, i, u, o);
		}
		else if (u = p(e), typeof u == "function") for (e = u.call(e), l = 0; !(s = e.next()).done;) s = s.value, u = a + ee(s, l++), c += A(s, r, i, u, o);
		else if (s === "object") throw r = String(e), Error("Objects are not valid as a React child (found: " + (r === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : r) + "). If you meant to render a collection of children, use an array instead.");
		return c;
	}
	function j(e, t, n) {
		if (e == null) return e;
		var r = [], i = 0;
		return A(e, r, "", "", function(e) {
			return t.call(n, e, i++);
		}), r;
	}
	function te(e) {
		if (e._status === -1) {
			var t = e._result;
			t = t(), t.then(function(t) {
				(e._status === 0 || e._status === -1) && (e._status = 1, e._result = t);
			}, function(t) {
				(e._status === 0 || e._status === -1) && (e._status = 2, e._result = t);
			}), e._status === -1 && (e._status = 0, e._result = t);
		}
		if (e._status === 1) return e._result.default;
		throw e._result;
	}
	var M = { current: null }, N = { transition: null }, ne = {
		ReactCurrentDispatcher: M,
		ReactCurrentBatchConfig: N,
		ReactCurrentOwner: C
	};
	function re() {
		throw Error("act(...) is not supported in production builds of React.");
	}
	e.Children = {
		map: j,
		forEach: function(e, t, n) {
			j(e, function() {
				t.apply(this, arguments);
			}, n);
		},
		count: function(e) {
			var t = 0;
			return j(e, function() {
				t++;
			}), t;
		},
		toArray: function(e) {
			return j(e, function(e) {
				return e;
			}) || [];
		},
		only: function(e) {
			if (!D(e)) throw Error("React.Children.only expected to receive a single React element child.");
			return e;
		}
	}, e.Component = _, e.Fragment = r, e.Profiler = a, e.PureComponent = y, e.StrictMode = i, e.Suspense = l, e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ne, e.act = re, e.cloneElement = function(e, n, r) {
		if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
		var i = h({}, e.props), a = e.key, o = e.ref, s = e._owner;
		if (n != null) {
			if (n.ref !== void 0 && (o = n.ref, s = C.current), n.key !== void 0 && (a = "" + n.key), e.type && e.type.defaultProps) var c = e.type.defaultProps;
			for (l in n) S.call(n, l) && !w.hasOwnProperty(l) && (i[l] = n[l] === void 0 && c !== void 0 ? c[l] : n[l]);
		}
		var l = arguments.length - 2;
		if (l === 1) i.children = r;
		else if (1 < l) {
			c = Array(l);
			for (var u = 0; u < l; u++) c[u] = arguments[u + 2];
			i.children = c;
		}
		return {
			$$typeof: t,
			type: e.type,
			key: a,
			ref: o,
			props: i,
			_owner: s
		};
	}, e.createContext = function(e) {
		return e = {
			$$typeof: s,
			_currentValue: e,
			_currentValue2: e,
			_threadCount: 0,
			Provider: null,
			Consumer: null,
			_defaultValue: null,
			_globalName: null
		}, e.Provider = {
			$$typeof: o,
			_context: e
		}, e.Consumer = e;
	}, e.createElement = T, e.createFactory = function(e) {
		var t = T.bind(null, e);
		return t.type = e, t;
	}, e.createRef = function() {
		return { current: null };
	}, e.forwardRef = function(e) {
		return {
			$$typeof: c,
			render: e
		};
	}, e.isValidElement = D, e.lazy = function(e) {
		return {
			$$typeof: d,
			_payload: {
				_status: -1,
				_result: e
			},
			_init: te
		};
	}, e.memo = function(e, t) {
		return {
			$$typeof: u,
			type: e,
			compare: t === void 0 ? null : t
		};
	}, e.startTransition = function(e) {
		var t = N.transition;
		N.transition = {};
		try {
			e();
		} finally {
			N.transition = t;
		}
	}, e.unstable_act = re, e.useCallback = function(e, t) {
		return M.current.useCallback(e, t);
	}, e.useContext = function(e) {
		return M.current.useContext(e);
	}, e.useDebugValue = function() {}, e.useDeferredValue = function(e) {
		return M.current.useDeferredValue(e);
	}, e.useEffect = function(e, t) {
		return M.current.useEffect(e, t);
	}, e.useId = function() {
		return M.current.useId();
	}, e.useImperativeHandle = function(e, t, n) {
		return M.current.useImperativeHandle(e, t, n);
	}, e.useInsertionEffect = function(e, t) {
		return M.current.useInsertionEffect(e, t);
	}, e.useLayoutEffect = function(e, t) {
		return M.current.useLayoutEffect(e, t);
	}, e.useMemo = function(e, t) {
		return M.current.useMemo(e, t);
	}, e.useReducer = function(e, t, n) {
		return M.current.useReducer(e, t, n);
	}, e.useRef = function(e) {
		return M.current.useRef(e);
	}, e.useState = function(e) {
		return M.current.useState(e);
	}, e.useSyncExternalStore = function(e, t, n) {
		return M.current.useSyncExternalStore(e, t, n);
	}, e.useTransition = function() {
		return M.current.useTransition();
	}, e.version = "18.3.1";
})), u = /* @__PURE__ */ o(((e, t) => {
	t.exports = l();
})), d = /* @__PURE__ */ o(((e) => {
	function t(e, t) {
		var n = e.length;
		e.push(t);
		a: for (; 0 < n;) {
			var r = n - 1 >>> 1, a = e[r];
			if (0 < i(a, t)) e[r] = t, e[n] = a, n = r;
			else break a;
		}
	}
	function n(e) {
		return e.length === 0 ? null : e[0];
	}
	function r(e) {
		if (e.length === 0) return null;
		var t = e[0], n = e.pop();
		if (n !== t) {
			e[0] = n;
			a: for (var r = 0, a = e.length, o = a >>> 1; r < o;) {
				var s = 2 * (r + 1) - 1, c = e[s], l = s + 1, u = e[l];
				if (0 > i(c, n)) l < a && 0 > i(u, c) ? (e[r] = u, e[l] = n, r = l) : (e[r] = c, e[s] = n, r = s);
				else if (l < a && 0 > i(u, n)) e[r] = u, e[l] = n, r = l;
				else break a;
			}
		}
		return t;
	}
	function i(e, t) {
		var n = e.sortIndex - t.sortIndex;
		return n === 0 ? e.id - t.id : n;
	}
	if (typeof performance == "object" && typeof performance.now == "function") {
		var a = performance;
		e.unstable_now = function() {
			return a.now();
		};
	} else {
		var o = Date, s = o.now();
		e.unstable_now = function() {
			return o.now() - s;
		};
	}
	var c = [], l = [], u = 1, d = null, f = 3, p = !1, m = !1, h = !1, g = typeof setTimeout == "function" ? setTimeout : null, _ = typeof clearTimeout == "function" ? clearTimeout : null, v = typeof setImmediate < "u" ? setImmediate : null;
	typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
	function y(e) {
		for (var i = n(l); i !== null;) {
			if (i.callback === null) r(l);
			else if (i.startTime <= e) r(l), i.sortIndex = i.expirationTime, t(c, i);
			else break;
			i = n(l);
		}
	}
	function b(e) {
		if (h = !1, y(e), !m) if (n(c) !== null) m = !0, j(x);
		else {
			var t = n(l);
			t !== null && te(b, t.startTime - e);
		}
	}
	function x(t, i) {
		m = !1, h && (h = !1, _(w), w = -1), p = !0;
		var a = f;
		try {
			for (y(i), d = n(c); d !== null && (!(d.expirationTime > i) || t && !D());) {
				var o = d.callback;
				if (typeof o == "function") {
					d.callback = null, f = d.priorityLevel;
					var s = o(d.expirationTime <= i);
					i = e.unstable_now(), typeof s == "function" ? d.callback = s : d === n(c) && r(c), y(i);
				} else r(c);
				d = n(c);
			}
			if (d !== null) var u = !0;
			else {
				var g = n(l);
				g !== null && te(b, g.startTime - i), u = !1;
			}
			return u;
		} finally {
			d = null, f = a, p = !1;
		}
	}
	var S = !1, C = null, w = -1, T = 5, E = -1;
	function D() {
		return !(e.unstable_now() - E < T);
	}
	function O() {
		if (C !== null) {
			var t = e.unstable_now();
			E = t;
			var n = !0;
			try {
				n = C(!0, t);
			} finally {
				n ? k() : (S = !1, C = null);
			}
		} else S = !1;
	}
	var k;
	if (typeof v == "function") k = function() {
		v(O);
	};
	else if (typeof MessageChannel < "u") {
		var ee = new MessageChannel(), A = ee.port2;
		ee.port1.onmessage = O, k = function() {
			A.postMessage(null);
		};
	} else k = function() {
		g(O, 0);
	};
	function j(e) {
		C = e, S || (S = !0, k());
	}
	function te(t, n) {
		w = g(function() {
			t(e.unstable_now());
		}, n);
	}
	e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(e) {
		e.callback = null;
	}, e.unstable_continueExecution = function() {
		m || p || (m = !0, j(x));
	}, e.unstable_forceFrameRate = function(e) {
		0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : T = 0 < e ? Math.floor(1e3 / e) : 5;
	}, e.unstable_getCurrentPriorityLevel = function() {
		return f;
	}, e.unstable_getFirstCallbackNode = function() {
		return n(c);
	}, e.unstable_next = function(e) {
		switch (f) {
			case 1:
			case 2:
			case 3:
				var t = 3;
				break;
			default: t = f;
		}
		var n = f;
		f = t;
		try {
			return e();
		} finally {
			f = n;
		}
	}, e.unstable_pauseExecution = function() {}, e.unstable_requestPaint = function() {}, e.unstable_runWithPriority = function(e, t) {
		switch (e) {
			case 1:
			case 2:
			case 3:
			case 4:
			case 5: break;
			default: e = 3;
		}
		var n = f;
		f = e;
		try {
			return t();
		} finally {
			f = n;
		}
	}, e.unstable_scheduleCallback = function(r, i, a) {
		var o = e.unstable_now();
		switch (typeof a == "object" && a ? (a = a.delay, a = typeof a == "number" && 0 < a ? o + a : o) : a = o, r) {
			case 1:
				var s = -1;
				break;
			case 2:
				s = 250;
				break;
			case 5:
				s = 1073741823;
				break;
			case 4:
				s = 1e4;
				break;
			default: s = 5e3;
		}
		return s = a + s, r = {
			id: u++,
			callback: i,
			priorityLevel: r,
			startTime: a,
			expirationTime: s,
			sortIndex: -1
		}, a > o ? (r.sortIndex = a, t(l, r), n(c) === null && r === n(l) && (h ? (_(w), w = -1) : h = !0, te(b, a - o))) : (r.sortIndex = s, t(c, r), m || p || (m = !0, j(x))), r;
	}, e.unstable_shouldYield = D, e.unstable_wrapCallback = function(e) {
		var t = f;
		return function() {
			var n = f;
			f = t;
			try {
				return e.apply(this, arguments);
			} finally {
				f = n;
			}
		};
	};
})), f = /* @__PURE__ */ o(((e, t) => {
	t.exports = d();
})), p = /* @__PURE__ */ o(((e) => {
	var t = u(), n = f();
	function r(e) {
		for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
		return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
	}
	var i = /* @__PURE__ */ new Set(), a = {};
	function o(e, t) {
		s(e, t), s(e + "Capture", t);
	}
	function s(e, t) {
		for (a[e] = t, e = 0; e < t.length; e++) i.add(t[e]);
	}
	var c = !(typeof window > "u" || window.document === void 0 || window.document.createElement === void 0), l = Object.prototype.hasOwnProperty, d = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, p = {}, m = {};
	function h(e) {
		return l.call(m, e) ? !0 : l.call(p, e) ? !1 : d.test(e) ? m[e] = !0 : (p[e] = !0, !1);
	}
	function g(e, t, n, r) {
		if (n !== null && n.type === 0) return !1;
		switch (typeof t) {
			case "function":
			case "symbol": return !0;
			case "boolean": return r ? !1 : n === null ? (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-") : !n.acceptsBooleans;
			default: return !1;
		}
	}
	function _(e, t, n, r) {
		if (t == null || g(e, t, n, r)) return !0;
		if (r) return !1;
		if (n !== null) switch (n.type) {
			case 3: return !t;
			case 4: return !1 === t;
			case 5: return isNaN(t);
			case 6: return isNaN(t) || 1 > t;
		}
		return !1;
	}
	function v(e, t, n, r, i, a, o) {
		this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = a, this.removeEmptyString = o;
	}
	var y = {};
	"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
		y[e] = new v(e, 0, !1, e, null, !1, !1);
	}), [
		["acceptCharset", "accept-charset"],
		["className", "class"],
		["htmlFor", "for"],
		["httpEquiv", "http-equiv"]
	].forEach(function(e) {
		var t = e[0];
		y[t] = new v(t, 1, !1, e[1], null, !1, !1);
	}), [
		"contentEditable",
		"draggable",
		"spellCheck",
		"value"
	].forEach(function(e) {
		y[e] = new v(e, 2, !1, e.toLowerCase(), null, !1, !1);
	}), [
		"autoReverse",
		"externalResourcesRequired",
		"focusable",
		"preserveAlpha"
	].forEach(function(e) {
		y[e] = new v(e, 2, !1, e, null, !1, !1);
	}), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
		y[e] = new v(e, 3, !1, e.toLowerCase(), null, !1, !1);
	}), [
		"checked",
		"multiple",
		"muted",
		"selected"
	].forEach(function(e) {
		y[e] = new v(e, 3, !0, e, null, !1, !1);
	}), ["capture", "download"].forEach(function(e) {
		y[e] = new v(e, 4, !1, e, null, !1, !1);
	}), [
		"cols",
		"rows",
		"size",
		"span"
	].forEach(function(e) {
		y[e] = new v(e, 6, !1, e, null, !1, !1);
	}), ["rowSpan", "start"].forEach(function(e) {
		y[e] = new v(e, 5, !1, e.toLowerCase(), null, !1, !1);
	});
	var b = /[\-:]([a-z])/g;
	function x(e) {
		return e[1].toUpperCase();
	}
	"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
		var t = e.replace(b, x);
		y[t] = new v(t, 1, !1, e, null, !1, !1);
	}), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
		var t = e.replace(b, x);
		y[t] = new v(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
	}), [
		"xml:base",
		"xml:lang",
		"xml:space"
	].forEach(function(e) {
		var t = e.replace(b, x);
		y[t] = new v(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
	}), ["tabIndex", "crossOrigin"].forEach(function(e) {
		y[e] = new v(e, 1, !1, e.toLowerCase(), null, !1, !1);
	}), y.xlinkHref = new v("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), [
		"src",
		"href",
		"action",
		"formAction"
	].forEach(function(e) {
		y[e] = new v(e, 1, !1, e.toLowerCase(), null, !0, !0);
	});
	function S(e, t, n, r) {
		var i = y.hasOwnProperty(t) ? y[t] : null;
		(i === null ? r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N" : i.type !== 0) && (_(t, n, i, r) && (n = null), r || i === null ? h(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName, r = i.attributeNamespace, n === null ? e.removeAttribute(t) : (i = i.type, n = i === 3 || i === 4 && !0 === n ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
	}
	var C = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, w = Symbol.for("react.element"), T = Symbol.for("react.portal"), E = Symbol.for("react.fragment"), D = Symbol.for("react.strict_mode"), O = Symbol.for("react.profiler"), k = Symbol.for("react.provider"), ee = Symbol.for("react.context"), A = Symbol.for("react.forward_ref"), j = Symbol.for("react.suspense"), te = Symbol.for("react.suspense_list"), M = Symbol.for("react.memo"), N = Symbol.for("react.lazy"), ne = Symbol.for("react.offscreen"), re = Symbol.iterator;
	function P(e) {
		return typeof e != "object" || !e ? null : (e = re && e[re] || e["@@iterator"], typeof e == "function" ? e : null);
	}
	var F = Object.assign, ie;
	function ae(e) {
		if (ie === void 0) try {
			throw Error();
		} catch (e) {
			var t = e.stack.trim().match(/\n( *(at )?)/);
			ie = t && t[1] || "";
		}
		return "\n" + ie + e;
	}
	var oe = !1;
	function se(e, t) {
		if (!e || oe) return "";
		oe = !0;
		var n = Error.prepareStackTrace;
		Error.prepareStackTrace = void 0;
		try {
			if (t) if (t = function() {
				throw Error();
			}, Object.defineProperty(t.prototype, "props", { set: function() {
				throw Error();
			} }), typeof Reflect == "object" && Reflect.construct) {
				try {
					Reflect.construct(t, []);
				} catch (e) {
					var r = e;
				}
				Reflect.construct(e, [], t);
			} else {
				try {
					t.call();
				} catch (e) {
					r = e;
				}
				e.call(t.prototype);
			}
			else {
				try {
					throw Error();
				} catch (e) {
					r = e;
				}
				e();
			}
		} catch (t) {
			if (t && r && typeof t.stack == "string") {
				for (var i = t.stack.split("\n"), a = r.stack.split("\n"), o = i.length - 1, s = a.length - 1; 1 <= o && 0 <= s && i[o] !== a[s];) s--;
				for (; 1 <= o && 0 <= s; o--, s--) if (i[o] !== a[s]) {
					if (o !== 1 || s !== 1) do
						if (o--, s--, 0 > s || i[o] !== a[s]) {
							var c = "\n" + i[o].replace(" at new ", " at ");
							return e.displayName && c.includes("<anonymous>") && (c = c.replace("<anonymous>", e.displayName)), c;
						}
					while (1 <= o && 0 <= s);
					break;
				}
			}
		} finally {
			oe = !1, Error.prepareStackTrace = n;
		}
		return (e = e ? e.displayName || e.name : "") ? ae(e) : "";
	}
	function ce(e) {
		switch (e.tag) {
			case 5: return ae(e.type);
			case 16: return ae("Lazy");
			case 13: return ae("Suspense");
			case 19: return ae("SuspenseList");
			case 0:
			case 2:
			case 15: return e = se(e.type, !1), e;
			case 11: return e = se(e.type.render, !1), e;
			case 1: return e = se(e.type, !0), e;
			default: return "";
		}
	}
	function le(e) {
		if (e == null) return null;
		if (typeof e == "function") return e.displayName || e.name || null;
		if (typeof e == "string") return e;
		switch (e) {
			case E: return "Fragment";
			case T: return "Portal";
			case O: return "Profiler";
			case D: return "StrictMode";
			case j: return "Suspense";
			case te: return "SuspenseList";
		}
		if (typeof e == "object") switch (e.$$typeof) {
			case ee: return (e.displayName || "Context") + ".Consumer";
			case k: return (e._context.displayName || "Context") + ".Provider";
			case A:
				var t = e.render;
				return e = e.displayName, e ||= (e = t.displayName || t.name || "", e === "" ? "ForwardRef" : "ForwardRef(" + e + ")"), e;
			case M: return t = e.displayName || null, t === null ? le(e.type) || "Memo" : t;
			case N:
				t = e._payload, e = e._init;
				try {
					return le(e(t));
				} catch {}
		}
		return null;
	}
	function ue(e) {
		var t = e.type;
		switch (e.tag) {
			case 24: return "Cache";
			case 9: return (t.displayName || "Context") + ".Consumer";
			case 10: return (t._context.displayName || "Context") + ".Provider";
			case 18: return "DehydratedFragment";
			case 11: return e = t.render, e = e.displayName || e.name || "", t.displayName || (e === "" ? "ForwardRef" : "ForwardRef(" + e + ")");
			case 7: return "Fragment";
			case 5: return t;
			case 4: return "Portal";
			case 3: return "Root";
			case 6: return "Text";
			case 16: return le(t);
			case 8: return t === D ? "StrictMode" : "Mode";
			case 22: return "Offscreen";
			case 12: return "Profiler";
			case 21: return "Scope";
			case 13: return "Suspense";
			case 19: return "SuspenseList";
			case 25: return "TracingMarker";
			case 1:
			case 0:
			case 17:
			case 2:
			case 14:
			case 15:
				if (typeof t == "function") return t.displayName || t.name || null;
				if (typeof t == "string") return t;
		}
		return null;
	}
	function de(e) {
		switch (typeof e) {
			case "boolean":
			case "number":
			case "string":
			case "undefined": return e;
			case "object": return e;
			default: return "";
		}
	}
	function fe(e) {
		var t = e.type;
		return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
	}
	function pe(e) {
		var t = fe(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
		if (!e.hasOwnProperty(t) && n !== void 0 && typeof n.get == "function" && typeof n.set == "function") {
			var i = n.get, a = n.set;
			return Object.defineProperty(e, t, {
				configurable: !0,
				get: function() {
					return i.call(this);
				},
				set: function(e) {
					r = "" + e, a.call(this, e);
				}
			}), Object.defineProperty(e, t, { enumerable: n.enumerable }), {
				getValue: function() {
					return r;
				},
				setValue: function(e) {
					r = "" + e;
				},
				stopTracking: function() {
					e._valueTracker = null, delete e[t];
				}
			};
		}
	}
	function me(e) {
		e._valueTracker ||= pe(e);
	}
	function he(e) {
		if (!e) return !1;
		var t = e._valueTracker;
		if (!t) return !0;
		var n = t.getValue(), r = "";
		return e && (r = fe(e) ? e.checked ? "true" : "false" : e.value), e = r, e === n ? !1 : (t.setValue(e), !0);
	}
	function ge(e) {
		if (e ||= typeof document < "u" ? document : void 0, e === void 0) return null;
		try {
			return e.activeElement || e.body;
		} catch {
			return e.body;
		}
	}
	function _e(e, t) {
		var n = t.checked;
		return F({}, t, {
			defaultChecked: void 0,
			defaultValue: void 0,
			value: void 0,
			checked: n ?? e._wrapperState.initialChecked
		});
	}
	function ve(e, t) {
		var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked == null ? t.defaultChecked : t.checked;
		n = de(t.value == null ? n : t.value), e._wrapperState = {
			initialChecked: r,
			initialValue: n,
			controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
		};
	}
	function ye(e, t) {
		t = t.checked, t != null && S(e, "checked", t, !1);
	}
	function be(e, t) {
		ye(e, t);
		var n = de(t.value), r = t.type;
		if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
		else if (r === "submit" || r === "reset") {
			e.removeAttribute("value");
			return;
		}
		t.hasOwnProperty("value") ? Se(e, t.type, n) : t.hasOwnProperty("defaultValue") && Se(e, t.type, de(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
	}
	function xe(e, t, n) {
		if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
			var r = t.type;
			if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
			t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
		}
		n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
	}
	function Se(e, t, n) {
		(t !== "number" || ge(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
	}
	var Ce = Array.isArray;
	function we(e, t, n, r) {
		if (e = e.options, t) {
			t = {};
			for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
			for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0);
		} else {
			for (n = "" + de(n), t = null, i = 0; i < e.length; i++) {
				if (e[i].value === n) {
					e[i].selected = !0, r && (e[i].defaultSelected = !0);
					return;
				}
				t !== null || e[i].disabled || (t = e[i]);
			}
			t !== null && (t.selected = !0);
		}
	}
	function Te(e, t) {
		if (t.dangerouslySetInnerHTML != null) throw Error(r(91));
		return F({}, t, {
			value: void 0,
			defaultValue: void 0,
			children: "" + e._wrapperState.initialValue
		});
	}
	function Ee(e, t) {
		var n = t.value;
		if (n == null) {
			if (n = t.children, t = t.defaultValue, n != null) {
				if (t != null) throw Error(r(92));
				if (Ce(n)) {
					if (1 < n.length) throw Error(r(93));
					n = n[0];
				}
				t = n;
			}
			t ??= "", n = t;
		}
		e._wrapperState = { initialValue: de(n) };
	}
	function De(e, t) {
		var n = de(t.value), r = de(t.defaultValue);
		n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
	}
	function Oe(e) {
		var t = e.textContent;
		t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
	}
	function ke(e) {
		switch (e) {
			case "svg": return "http://www.w3.org/2000/svg";
			case "math": return "http://www.w3.org/1998/Math/MathML";
			default: return "http://www.w3.org/1999/xhtml";
		}
	}
	function Ae(e, t) {
		return e == null || e === "http://www.w3.org/1999/xhtml" ? ke(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
	}
	var je, Me = function(e) {
		return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
			MSApp.execUnsafeLocalFunction(function() {
				return e(t, n, r, i);
			});
		} : e;
	}(function(e, t) {
		if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
		else {
			for (je ||= document.createElement("div"), je.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = je.firstChild; e.firstChild;) e.removeChild(e.firstChild);
			for (; t.firstChild;) e.appendChild(t.firstChild);
		}
	});
	function Ne(e, t) {
		if (t) {
			var n = e.firstChild;
			if (n && n === e.lastChild && n.nodeType === 3) {
				n.nodeValue = t;
				return;
			}
		}
		e.textContent = t;
	}
	var Pe = {
		animationIterationCount: !0,
		aspectRatio: !0,
		borderImageOutset: !0,
		borderImageSlice: !0,
		borderImageWidth: !0,
		boxFlex: !0,
		boxFlexGroup: !0,
		boxOrdinalGroup: !0,
		columnCount: !0,
		columns: !0,
		flex: !0,
		flexGrow: !0,
		flexPositive: !0,
		flexShrink: !0,
		flexNegative: !0,
		flexOrder: !0,
		gridArea: !0,
		gridRow: !0,
		gridRowEnd: !0,
		gridRowSpan: !0,
		gridRowStart: !0,
		gridColumn: !0,
		gridColumnEnd: !0,
		gridColumnSpan: !0,
		gridColumnStart: !0,
		fontWeight: !0,
		lineClamp: !0,
		lineHeight: !0,
		opacity: !0,
		order: !0,
		orphans: !0,
		tabSize: !0,
		widows: !0,
		zIndex: !0,
		zoom: !0,
		fillOpacity: !0,
		floodOpacity: !0,
		stopOpacity: !0,
		strokeDasharray: !0,
		strokeDashoffset: !0,
		strokeMiterlimit: !0,
		strokeOpacity: !0,
		strokeWidth: !0
	}, Fe = [
		"Webkit",
		"ms",
		"Moz",
		"O"
	];
	Object.keys(Pe).forEach(function(e) {
		Fe.forEach(function(t) {
			t = t + e.charAt(0).toUpperCase() + e.substring(1), Pe[t] = Pe[e];
		});
	});
	function I(e, t, n) {
		return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Pe.hasOwnProperty(e) && Pe[e] ? ("" + t).trim() : t + "px";
	}
	function Ie(e, t) {
		for (var n in e = e.style, t) if (t.hasOwnProperty(n)) {
			var r = n.indexOf("--") === 0, i = I(n, t[n], r);
			n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i;
		}
	}
	var Le = F({ menuitem: !0 }, {
		area: !0,
		base: !0,
		br: !0,
		col: !0,
		embed: !0,
		hr: !0,
		img: !0,
		input: !0,
		keygen: !0,
		link: !0,
		meta: !0,
		param: !0,
		source: !0,
		track: !0,
		wbr: !0
	});
	function Re(e, t) {
		if (t) {
			if (Le[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(r(137, e));
			if (t.dangerouslySetInnerHTML != null) {
				if (t.children != null) throw Error(r(60));
				if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(r(61));
			}
			if (t.style != null && typeof t.style != "object") throw Error(r(62));
		}
	}
	function ze(e, t) {
		if (e.indexOf("-") === -1) return typeof t.is == "string";
		switch (e) {
			case "annotation-xml":
			case "color-profile":
			case "font-face":
			case "font-face-src":
			case "font-face-uri":
			case "font-face-format":
			case "font-face-name":
			case "missing-glyph": return !1;
			default: return !0;
		}
	}
	var Be = null;
	function Ve(e) {
		return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
	}
	var He = null, Ue = null, We = null;
	function Ge(e) {
		if (e = Bi(e)) {
			if (typeof He != "function") throw Error(r(280));
			var t = e.stateNode;
			t && (t = Hi(t), He(e.stateNode, e.type, t));
		}
	}
	function Ke(e) {
		Ue ? We ? We.push(e) : We = [e] : Ue = e;
	}
	function qe() {
		if (Ue) {
			var e = Ue, t = We;
			if (We = Ue = null, Ge(e), t) for (e = 0; e < t.length; e++) Ge(t[e]);
		}
	}
	function Je(e, t) {
		return e(t);
	}
	function Ye() {}
	var Xe = !1;
	function Ze(e, t, n) {
		if (Xe) return e(t, n);
		Xe = !0;
		try {
			return Je(e, t, n);
		} finally {
			Xe = !1, (Ue !== null || We !== null) && (Ye(), qe());
		}
	}
	function Qe(e, t) {
		var n = e.stateNode;
		if (n === null) return null;
		var i = Hi(n);
		if (i === null) return null;
		n = i[t];
		a: switch (t) {
			case "onClick":
			case "onClickCapture":
			case "onDoubleClick":
			case "onDoubleClickCapture":
			case "onMouseDown":
			case "onMouseDownCapture":
			case "onMouseMove":
			case "onMouseMoveCapture":
			case "onMouseUp":
			case "onMouseUpCapture":
			case "onMouseEnter":
				(i = !i.disabled) || (e = e.type, i = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !i;
				break a;
			default: e = !1;
		}
		if (e) return null;
		if (n && typeof n != "function") throw Error(r(231, t, typeof n));
		return n;
	}
	var $e = !1;
	if (c) try {
		var et = {};
		Object.defineProperty(et, "passive", { get: function() {
			$e = !0;
		} }), window.addEventListener("test", et, et), window.removeEventListener("test", et, et);
	} catch {
		$e = !1;
	}
	function tt(e, t, n, r, i, a, o, s, c) {
		var l = Array.prototype.slice.call(arguments, 3);
		try {
			t.apply(n, l);
		} catch (e) {
			this.onError(e);
		}
	}
	var nt = !1, rt = null, it = !1, at = null, ot = { onError: function(e) {
		nt = !0, rt = e;
	} };
	function st(e, t, n, r, i, a, o, s, c) {
		nt = !1, rt = null, tt.apply(ot, arguments);
	}
	function ct(e, t, n, i, a, o, s, c, l) {
		if (st.apply(this, arguments), nt) {
			if (nt) {
				var u = rt;
				nt = !1, rt = null;
			} else throw Error(r(198));
			it || (it = !0, at = u);
		}
	}
	function lt(e) {
		var t = e, n = e;
		if (e.alternate) for (; t.return;) t = t.return;
		else {
			e = t;
			do
				t = e, t.flags & 4098 && (n = t.return), e = t.return;
			while (e);
		}
		return t.tag === 3 ? n : null;
	}
	function ut(e) {
		if (e.tag === 13) {
			var t = e.memoizedState;
			if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
		}
		return null;
	}
	function dt(e) {
		if (lt(e) !== e) throw Error(r(188));
	}
	function ft(e) {
		var t = e.alternate;
		if (!t) {
			if (t = lt(e), t === null) throw Error(r(188));
			return t === e ? e : null;
		}
		for (var n = e, i = t;;) {
			var a = n.return;
			if (a === null) break;
			var o = a.alternate;
			if (o === null) {
				if (i = a.return, i !== null) {
					n = i;
					continue;
				}
				break;
			}
			if (a.child === o.child) {
				for (o = a.child; o;) {
					if (o === n) return dt(a), e;
					if (o === i) return dt(a), t;
					o = o.sibling;
				}
				throw Error(r(188));
			}
			if (n.return !== i.return) n = a, i = o;
			else {
				for (var s = !1, c = a.child; c;) {
					if (c === n) {
						s = !0, n = a, i = o;
						break;
					}
					if (c === i) {
						s = !0, i = a, n = o;
						break;
					}
					c = c.sibling;
				}
				if (!s) {
					for (c = o.child; c;) {
						if (c === n) {
							s = !0, n = o, i = a;
							break;
						}
						if (c === i) {
							s = !0, i = o, n = a;
							break;
						}
						c = c.sibling;
					}
					if (!s) throw Error(r(189));
				}
			}
			if (n.alternate !== i) throw Error(r(190));
		}
		if (n.tag !== 3) throw Error(r(188));
		return n.stateNode.current === n ? e : t;
	}
	function pt(e) {
		return e = ft(e), e === null ? null : mt(e);
	}
	function mt(e) {
		if (e.tag === 5 || e.tag === 6) return e;
		for (e = e.child; e !== null;) {
			var t = mt(e);
			if (t !== null) return t;
			e = e.sibling;
		}
		return null;
	}
	var ht = n.unstable_scheduleCallback, gt = n.unstable_cancelCallback, _t = n.unstable_shouldYield, vt = n.unstable_requestPaint, L = n.unstable_now, yt = n.unstable_getCurrentPriorityLevel, bt = n.unstable_ImmediatePriority, xt = n.unstable_UserBlockingPriority, St = n.unstable_NormalPriority, Ct = n.unstable_LowPriority, wt = n.unstable_IdlePriority, Tt = null, Et = null;
	function Dt(e) {
		if (Et && typeof Et.onCommitFiberRoot == "function") try {
			Et.onCommitFiberRoot(Tt, e, void 0, (e.current.flags & 128) == 128);
		} catch {}
	}
	var Ot = Math.clz32 ? Math.clz32 : jt, kt = Math.log, At = Math.LN2;
	function jt(e) {
		return e >>>= 0, e === 0 ? 32 : 31 - (kt(e) / At | 0) | 0;
	}
	var Mt = 64, Nt = 4194304;
	function Pt(e) {
		switch (e & -e) {
			case 1: return 1;
			case 2: return 2;
			case 4: return 4;
			case 8: return 8;
			case 16: return 16;
			case 32: return 32;
			case 64:
			case 128:
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072:
			case 262144:
			case 524288:
			case 1048576:
			case 2097152: return e & 4194240;
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432:
			case 67108864: return e & 130023424;
			case 134217728: return 134217728;
			case 268435456: return 268435456;
			case 536870912: return 536870912;
			case 1073741824: return 1073741824;
			default: return e;
		}
	}
	function Ft(e, t) {
		var n = e.pendingLanes;
		if (n === 0) return 0;
		var r = 0, i = e.suspendedLanes, a = e.pingedLanes, o = n & 268435455;
		if (o !== 0) {
			var s = o & ~i;
			s === 0 ? (a &= o, a !== 0 && (r = Pt(a))) : r = Pt(s);
		} else o = n & ~i, o === 0 ? a !== 0 && (r = Pt(a)) : r = Pt(o);
		if (r === 0) return 0;
		if (t !== 0 && t !== r && (t & i) === 0 && (i = r & -r, a = t & -t, i >= a || i === 16 && a & 4194240)) return t;
		if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t;) n = 31 - Ot(t), i = 1 << n, r |= e[n], t &= ~i;
		return r;
	}
	function It(e, t) {
		switch (e) {
			case 1:
			case 2:
			case 4: return t + 250;
			case 8:
			case 16:
			case 32:
			case 64:
			case 128:
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072:
			case 262144:
			case 524288:
			case 1048576:
			case 2097152: return t + 5e3;
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432:
			case 67108864: return -1;
			case 134217728:
			case 268435456:
			case 536870912:
			case 1073741824: return -1;
			default: return -1;
		}
	}
	function Lt(e, t) {
		for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, a = e.pendingLanes; 0 < a;) {
			var o = 31 - Ot(a), s = 1 << o, c = i[o];
			c === -1 ? ((s & n) === 0 || (s & r) !== 0) && (i[o] = It(s, t)) : c <= t && (e.expiredLanes |= s), a &= ~s;
		}
	}
	function Rt(e) {
		return e = e.pendingLanes & -1073741825, e === 0 ? e & 1073741824 ? 1073741824 : 0 : e;
	}
	function zt() {
		var e = Mt;
		return Mt <<= 1, !(Mt & 4194240) && (Mt = 64), e;
	}
	function Bt(e) {
		for (var t = [], n = 0; 31 > n; n++) t.push(e);
		return t;
	}
	function Vt(e, t, n) {
		e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Ot(t), e[t] = n;
	}
	function Ht(e, t) {
		var n = e.pendingLanes & ~t;
		e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
		var r = e.eventTimes;
		for (e = e.expirationTimes; 0 < n;) {
			var i = 31 - Ot(n), a = 1 << i;
			t[i] = 0, r[i] = -1, e[i] = -1, n &= ~a;
		}
	}
	function Ut(e, t) {
		var n = e.entangledLanes |= t;
		for (e = e.entanglements; n;) {
			var r = 31 - Ot(n), i = 1 << r;
			i & t | e[r] & t && (e[r] |= t), n &= ~i;
		}
	}
	var R = 0;
	function Wt(e) {
		return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
	}
	var Gt, Kt, qt, Jt, Yt, Xt = !1, Zt = [], Qt = null, $t = null, en = null, tn = /* @__PURE__ */ new Map(), nn = /* @__PURE__ */ new Map(), rn = [], an = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
	function on(e, t) {
		switch (e) {
			case "focusin":
			case "focusout":
				Qt = null;
				break;
			case "dragenter":
			case "dragleave":
				$t = null;
				break;
			case "mouseover":
			case "mouseout":
				en = null;
				break;
			case "pointerover":
			case "pointerout":
				tn.delete(t.pointerId);
				break;
			case "gotpointercapture":
			case "lostpointercapture": nn.delete(t.pointerId);
		}
	}
	function sn(e, t, n, r, i, a) {
		return e === null || e.nativeEvent !== a ? (e = {
			blockedOn: t,
			domEventName: n,
			eventSystemFlags: r,
			nativeEvent: a,
			targetContainers: [i]
		}, t !== null && (t = Bi(t), t !== null && Kt(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
	}
	function cn(e, t, n, r, i) {
		switch (t) {
			case "focusin": return Qt = sn(Qt, e, t, n, r, i), !0;
			case "dragenter": return $t = sn($t, e, t, n, r, i), !0;
			case "mouseover": return en = sn(en, e, t, n, r, i), !0;
			case "pointerover":
				var a = i.pointerId;
				return tn.set(a, sn(tn.get(a) || null, e, t, n, r, i)), !0;
			case "gotpointercapture": return a = i.pointerId, nn.set(a, sn(nn.get(a) || null, e, t, n, r, i)), !0;
		}
		return !1;
	}
	function ln(e) {
		var t = zi(e.target);
		if (t !== null) {
			var n = lt(t);
			if (n !== null) {
				if (t = n.tag, t === 13) {
					if (t = ut(n), t !== null) {
						e.blockedOn = t, Yt(e.priority, function() {
							qt(n);
						});
						return;
					}
				} else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
					e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
					return;
				}
			}
		}
		e.blockedOn = null;
	}
	function z(e) {
		if (e.blockedOn !== null) return !1;
		for (var t = e.targetContainers; 0 < t.length;) {
			var n = bn(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
			if (n === null) {
				n = e.nativeEvent;
				var r = new n.constructor(n.type, n);
				Be = r, n.target.dispatchEvent(r), Be = null;
			} else return t = Bi(n), t !== null && Kt(t), e.blockedOn = n, !1;
			t.shift();
		}
		return !0;
	}
	function un(e, t, n) {
		z(e) && n.delete(t);
	}
	function dn() {
		Xt = !1, Qt !== null && z(Qt) && (Qt = null), $t !== null && z($t) && ($t = null), en !== null && z(en) && (en = null), tn.forEach(un), nn.forEach(un);
	}
	function fn(e, t) {
		e.blockedOn === t && (e.blockedOn = null, Xt || (Xt = !0, n.unstable_scheduleCallback(n.unstable_NormalPriority, dn)));
	}
	function pn(e) {
		function t(t) {
			return fn(t, e);
		}
		if (0 < Zt.length) {
			fn(Zt[0], e);
			for (var n = 1; n < Zt.length; n++) {
				var r = Zt[n];
				r.blockedOn === e && (r.blockedOn = null);
			}
		}
		for (Qt !== null && fn(Qt, e), $t !== null && fn($t, e), en !== null && fn(en, e), tn.forEach(t), nn.forEach(t), n = 0; n < rn.length; n++) r = rn[n], r.blockedOn === e && (r.blockedOn = null);
		for (; 0 < rn.length && (n = rn[0], n.blockedOn === null);) ln(n), n.blockedOn === null && rn.shift();
	}
	var mn = C.ReactCurrentBatchConfig, hn = !0;
	function gn(e, t, n, r) {
		var i = R, a = mn.transition;
		mn.transition = null;
		try {
			R = 1, vn(e, t, n, r);
		} finally {
			R = i, mn.transition = a;
		}
	}
	function _n(e, t, n, r) {
		var i = R, a = mn.transition;
		mn.transition = null;
		try {
			R = 4, vn(e, t, n, r);
		} finally {
			R = i, mn.transition = a;
		}
	}
	function vn(e, t, n, r) {
		if (hn) {
			var i = bn(e, t, n, r);
			if (i === null) fi(e, t, r, yn, n), on(e, r);
			else if (cn(i, e, t, n, r)) r.stopPropagation();
			else if (on(e, r), t & 4 && -1 < an.indexOf(e)) {
				for (; i !== null;) {
					var a = Bi(i);
					if (a !== null && Gt(a), a = bn(e, t, n, r), a === null && fi(e, t, r, yn, n), a === i) break;
					i = a;
				}
				i !== null && r.stopPropagation();
			} else fi(e, t, r, null, n);
		}
	}
	var yn = null;
	function bn(e, t, n, r) {
		if (yn = null, e = Ve(r), e = zi(e), e !== null) if (t = lt(e), t === null) e = null;
		else if (n = t.tag, n === 13) {
			if (e = ut(t), e !== null) return e;
			e = null;
		} else if (n === 3) {
			if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
			e = null;
		} else t !== e && (e = null);
		return yn = e, null;
	}
	function xn(e) {
		switch (e) {
			case "cancel":
			case "click":
			case "close":
			case "contextmenu":
			case "copy":
			case "cut":
			case "auxclick":
			case "dblclick":
			case "dragend":
			case "dragstart":
			case "drop":
			case "focusin":
			case "focusout":
			case "input":
			case "invalid":
			case "keydown":
			case "keypress":
			case "keyup":
			case "mousedown":
			case "mouseup":
			case "paste":
			case "pause":
			case "play":
			case "pointercancel":
			case "pointerdown":
			case "pointerup":
			case "ratechange":
			case "reset":
			case "resize":
			case "seeked":
			case "submit":
			case "touchcancel":
			case "touchend":
			case "touchstart":
			case "volumechange":
			case "change":
			case "selectionchange":
			case "textInput":
			case "compositionstart":
			case "compositionend":
			case "compositionupdate":
			case "beforeblur":
			case "afterblur":
			case "beforeinput":
			case "blur":
			case "fullscreenchange":
			case "focus":
			case "hashchange":
			case "popstate":
			case "select":
			case "selectstart": return 1;
			case "drag":
			case "dragenter":
			case "dragexit":
			case "dragleave":
			case "dragover":
			case "mousemove":
			case "mouseout":
			case "mouseover":
			case "pointermove":
			case "pointerout":
			case "pointerover":
			case "scroll":
			case "toggle":
			case "touchmove":
			case "wheel":
			case "mouseenter":
			case "mouseleave":
			case "pointerenter":
			case "pointerleave": return 4;
			case "message": switch (yt()) {
				case bt: return 1;
				case xt: return 4;
				case St:
				case Ct: return 16;
				case wt: return 536870912;
				default: return 16;
			}
			default: return 16;
		}
	}
	var Sn = null, Cn = null, wn = null;
	function Tn() {
		if (wn) return wn;
		var e, t = Cn, n = t.length, r, i = "value" in Sn ? Sn.value : Sn.textContent, a = i.length;
		for (e = 0; e < n && t[e] === i[e]; e++);
		var o = n - e;
		for (r = 1; r <= o && t[n - r] === i[a - r]; r++);
		return wn = i.slice(e, 1 < r ? 1 - r : void 0);
	}
	function En(e) {
		var t = e.keyCode;
		return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
	}
	function Dn() {
		return !0;
	}
	function On() {
		return !1;
	}
	function kn(e) {
		function t(t, n, r, i, a) {
			for (var o in this._reactName = t, this._targetInst = r, this.type = n, this.nativeEvent = i, this.target = a, this.currentTarget = null, e) e.hasOwnProperty(o) && (t = e[o], this[o] = t ? t(i) : i[o]);
			return this.isDefaultPrevented = (i.defaultPrevented == null ? !1 === i.returnValue : i.defaultPrevented) ? Dn : On, this.isPropagationStopped = On, this;
		}
		return F(t.prototype, {
			preventDefault: function() {
				this.defaultPrevented = !0;
				var e = this.nativeEvent;
				e && (e.preventDefault ? e.preventDefault() : typeof e.returnValue != "unknown" && (e.returnValue = !1), this.isDefaultPrevented = Dn);
			},
			stopPropagation: function() {
				var e = this.nativeEvent;
				e && (e.stopPropagation ? e.stopPropagation() : typeof e.cancelBubble != "unknown" && (e.cancelBubble = !0), this.isPropagationStopped = Dn);
			},
			persist: function() {},
			isPersistent: Dn
		}), t;
	}
	var An = {
		eventPhase: 0,
		bubbles: 0,
		cancelable: 0,
		timeStamp: function(e) {
			return e.timeStamp || Date.now();
		},
		defaultPrevented: 0,
		isTrusted: 0
	}, jn = kn(An), Mn = F({}, An, {
		view: 0,
		detail: 0
	}), Nn = kn(Mn), Pn, Fn, In, Ln = F({}, Mn, {
		screenX: 0,
		screenY: 0,
		clientX: 0,
		clientY: 0,
		pageX: 0,
		pageY: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		getModifierState: B,
		button: 0,
		buttons: 0,
		relatedTarget: function(e) {
			return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
		},
		movementX: function(e) {
			return "movementX" in e ? e.movementX : (e !== In && (In && e.type === "mousemove" ? (Pn = e.screenX - In.screenX, Fn = e.screenY - In.screenY) : Fn = Pn = 0, In = e), Pn);
		},
		movementY: function(e) {
			return "movementY" in e ? e.movementY : Fn;
		}
	}), Rn = kn(Ln), zn = kn(F({}, Ln, { dataTransfer: 0 })), Bn = kn(F({}, Mn, { relatedTarget: 0 })), Vn = kn(F({}, An, {
		animationName: 0,
		elapsedTime: 0,
		pseudoElement: 0
	})), Hn = kn(F({}, An, { clipboardData: function(e) {
		return "clipboardData" in e ? e.clipboardData : window.clipboardData;
	} })), Un = kn(F({}, An, { data: 0 })), Wn = {
		Esc: "Escape",
		Spacebar: " ",
		Left: "ArrowLeft",
		Up: "ArrowUp",
		Right: "ArrowRight",
		Down: "ArrowDown",
		Del: "Delete",
		Win: "OS",
		Menu: "ContextMenu",
		Apps: "ContextMenu",
		Scroll: "ScrollLock",
		MozPrintableKey: "Unidentified"
	}, Gn = {
		8: "Backspace",
		9: "Tab",
		12: "Clear",
		13: "Enter",
		16: "Shift",
		17: "Control",
		18: "Alt",
		19: "Pause",
		20: "CapsLock",
		27: "Escape",
		32: " ",
		33: "PageUp",
		34: "PageDown",
		35: "End",
		36: "Home",
		37: "ArrowLeft",
		38: "ArrowUp",
		39: "ArrowRight",
		40: "ArrowDown",
		45: "Insert",
		46: "Delete",
		112: "F1",
		113: "F2",
		114: "F3",
		115: "F4",
		116: "F5",
		117: "F6",
		118: "F7",
		119: "F8",
		120: "F9",
		121: "F10",
		122: "F11",
		123: "F12",
		144: "NumLock",
		145: "ScrollLock",
		224: "Meta"
	}, Kn = {
		Alt: "altKey",
		Control: "ctrlKey",
		Meta: "metaKey",
		Shift: "shiftKey"
	};
	function qn(e) {
		var t = this.nativeEvent;
		return t.getModifierState ? t.getModifierState(e) : (e = Kn[e]) ? !!t[e] : !1;
	}
	function B() {
		return qn;
	}
	var Jn = kn(F({}, Mn, {
		key: function(e) {
			if (e.key) {
				var t = Wn[e.key] || e.key;
				if (t !== "Unidentified") return t;
			}
			return e.type === "keypress" ? (e = En(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Gn[e.keyCode] || "Unidentified" : "";
		},
		code: 0,
		location: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		repeat: 0,
		locale: 0,
		getModifierState: B,
		charCode: function(e) {
			return e.type === "keypress" ? En(e) : 0;
		},
		keyCode: function(e) {
			return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
		},
		which: function(e) {
			return e.type === "keypress" ? En(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
		}
	})), Yn = kn(F({}, Ln, {
		pointerId: 0,
		width: 0,
		height: 0,
		pressure: 0,
		tangentialPressure: 0,
		tiltX: 0,
		tiltY: 0,
		twist: 0,
		pointerType: 0,
		isPrimary: 0
	})), Xn = kn(F({}, Mn, {
		touches: 0,
		targetTouches: 0,
		changedTouches: 0,
		altKey: 0,
		metaKey: 0,
		ctrlKey: 0,
		shiftKey: 0,
		getModifierState: B
	})), Zn = kn(F({}, An, {
		propertyName: 0,
		elapsedTime: 0,
		pseudoElement: 0
	})), Qn = kn(F({}, Ln, {
		deltaX: function(e) {
			return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
		},
		deltaY: function(e) {
			return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
		},
		deltaZ: 0,
		deltaMode: 0
	})), $n = [
		9,
		13,
		27,
		32
	], er = c && "CompositionEvent" in window, tr = null;
	c && "documentMode" in document && (tr = document.documentMode);
	var nr = c && "TextEvent" in window && !tr, rr = c && (!er || tr && 8 < tr && 11 >= tr), ir = " ", ar = !1;
	function or(e, t) {
		switch (e) {
			case "keyup": return $n.indexOf(t.keyCode) !== -1;
			case "keydown": return t.keyCode !== 229;
			case "keypress":
			case "mousedown":
			case "focusout": return !0;
			default: return !1;
		}
	}
	function sr(e) {
		return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
	}
	var cr = !1;
	function lr(e, t) {
		switch (e) {
			case "compositionend": return sr(t);
			case "keypress": return t.which === 32 ? (ar = !0, ir) : null;
			case "textInput": return e = t.data, e === ir && ar ? null : e;
			default: return null;
		}
	}
	function ur(e, t) {
		if (cr) return e === "compositionend" || !er && or(e, t) ? (e = Tn(), wn = Cn = Sn = null, cr = !1, e) : null;
		switch (e) {
			case "paste": return null;
			case "keypress":
				if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
					if (t.char && 1 < t.char.length) return t.char;
					if (t.which) return String.fromCharCode(t.which);
				}
				return null;
			case "compositionend": return rr && t.locale !== "ko" ? null : t.data;
			default: return null;
		}
	}
	var dr = {
		color: !0,
		date: !0,
		datetime: !0,
		"datetime-local": !0,
		email: !0,
		month: !0,
		number: !0,
		password: !0,
		range: !0,
		search: !0,
		tel: !0,
		text: !0,
		time: !0,
		url: !0,
		week: !0
	};
	function fr(e) {
		var t = e && e.nodeName && e.nodeName.toLowerCase();
		return t === "input" ? !!dr[e.type] : t === "textarea";
	}
	function pr(e, t, n, r) {
		Ke(r), t = mi(t, "onChange"), 0 < t.length && (n = new jn("onChange", "change", null, n, r), e.push({
			event: n,
			listeners: t
		}));
	}
	var mr = null, hr = null;
	function gr(e) {
		si(e, 0);
	}
	function _r(e) {
		if (he(Vi(e))) return e;
	}
	function vr(e, t) {
		if (e === "change") return t;
	}
	var yr = !1;
	if (c) {
		var br;
		if (c) {
			var xr = "oninput" in document;
			if (!xr) {
				var Sr = document.createElement("div");
				Sr.setAttribute("oninput", "return;"), xr = typeof Sr.oninput == "function";
			}
			br = xr;
		} else br = !1;
		yr = br && (!document.documentMode || 9 < document.documentMode);
	}
	function Cr() {
		mr && (mr.detachEvent("onpropertychange", wr), hr = mr = null);
	}
	function wr(e) {
		if (e.propertyName === "value" && _r(hr)) {
			var t = [];
			pr(t, hr, e, Ve(e)), Ze(gr, t);
		}
	}
	function Tr(e, t, n) {
		e === "focusin" ? (Cr(), mr = t, hr = n, mr.attachEvent("onpropertychange", wr)) : e === "focusout" && Cr();
	}
	function Er(e) {
		if (e === "selectionchange" || e === "keyup" || e === "keydown") return _r(hr);
	}
	function Dr(e, t) {
		if (e === "click") return _r(t);
	}
	function Or(e, t) {
		if (e === "input" || e === "change") return _r(t);
	}
	function kr(e, t) {
		return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t;
	}
	var Ar = typeof Object.is == "function" ? Object.is : kr;
	function jr(e, t) {
		if (Ar(e, t)) return !0;
		if (typeof e != "object" || !e || typeof t != "object" || !t) return !1;
		var n = Object.keys(e), r = Object.keys(t);
		if (n.length !== r.length) return !1;
		for (r = 0; r < n.length; r++) {
			var i = n[r];
			if (!l.call(t, i) || !Ar(e[i], t[i])) return !1;
		}
		return !0;
	}
	function Mr(e) {
		for (; e && e.firstChild;) e = e.firstChild;
		return e;
	}
	function Nr(e, t) {
		var n = Mr(e);
		e = 0;
		for (var r; n;) {
			if (n.nodeType === 3) {
				if (r = e + n.textContent.length, e <= t && r >= t) return {
					node: n,
					offset: t - e
				};
				e = r;
			}
			a: {
				for (; n;) {
					if (n.nextSibling) {
						n = n.nextSibling;
						break a;
					}
					n = n.parentNode;
				}
				n = void 0;
			}
			n = Mr(n);
		}
	}
	function Pr(e, t) {
		return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Pr(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
	}
	function Fr() {
		for (var e = window, t = ge(); t instanceof e.HTMLIFrameElement;) {
			try {
				var n = typeof t.contentWindow.location.href == "string";
			} catch {
				n = !1;
			}
			if (n) e = t.contentWindow;
			else break;
			t = ge(e.document);
		}
		return t;
	}
	function Ir(e) {
		var t = e && e.nodeName && e.nodeName.toLowerCase();
		return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
	}
	function Lr(e) {
		var t = Fr(), n = e.focusedElem, r = e.selectionRange;
		if (t !== n && n && n.ownerDocument && Pr(n.ownerDocument.documentElement, n)) {
			if (r !== null && Ir(n)) {
				if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
				else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
					e = e.getSelection();
					var i = n.textContent.length, a = Math.min(r.start, i);
					r = r.end === void 0 ? a : Math.min(r.end, i), !e.extend && a > r && (i = r, r = a, a = i), i = Nr(n, a);
					var o = Nr(n, r);
					i && o && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && (t = t.createRange(), t.setStart(i.node, i.offset), e.removeAllRanges(), a > r ? (e.addRange(t), e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset), e.addRange(t)));
				}
			}
			for (t = [], e = n; e = e.parentNode;) e.nodeType === 1 && t.push({
				element: e,
				left: e.scrollLeft,
				top: e.scrollTop
			});
			for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
		}
	}
	var Rr = c && "documentMode" in document && 11 >= document.documentMode, zr = null, Br = null, Vr = null, Hr = !1;
	function Ur(e, t, n) {
		var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
		Hr || zr == null || zr !== ge(r) || (r = zr, "selectionStart" in r && Ir(r) ? r = {
			start: r.selectionStart,
			end: r.selectionEnd
		} : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
			anchorNode: r.anchorNode,
			anchorOffset: r.anchorOffset,
			focusNode: r.focusNode,
			focusOffset: r.focusOffset
		}), Vr && jr(Vr, r) || (Vr = r, r = mi(Br, "onSelect"), 0 < r.length && (t = new jn("onSelect", "select", null, t, n), e.push({
			event: t,
			listeners: r
		}), t.target = zr)));
	}
	function Wr(e, t) {
		var n = {};
		return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
	}
	var Gr = {
		animationend: Wr("Animation", "AnimationEnd"),
		animationiteration: Wr("Animation", "AnimationIteration"),
		animationstart: Wr("Animation", "AnimationStart"),
		transitionend: Wr("Transition", "TransitionEnd")
	}, Kr = {}, qr = {};
	c && (qr = document.createElement("div").style, "AnimationEvent" in window || (delete Gr.animationend.animation, delete Gr.animationiteration.animation, delete Gr.animationstart.animation), "TransitionEvent" in window || delete Gr.transitionend.transition);
	function Jr(e) {
		if (Kr[e]) return Kr[e];
		if (!Gr[e]) return e;
		var t = Gr[e], n;
		for (n in t) if (t.hasOwnProperty(n) && n in qr) return Kr[e] = t[n];
		return e;
	}
	var Yr = Jr("animationend"), Xr = Jr("animationiteration"), Zr = Jr("animationstart"), Qr = Jr("transitionend"), $r = /* @__PURE__ */ new Map(), ei = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
	function ti(e, t) {
		$r.set(e, t), o(t, [e]);
	}
	for (var ni = 0; ni < ei.length; ni++) {
		var ri = ei[ni];
		ti(ri.toLowerCase(), "on" + (ri[0].toUpperCase() + ri.slice(1)));
	}
	ti(Yr, "onAnimationEnd"), ti(Xr, "onAnimationIteration"), ti(Zr, "onAnimationStart"), ti("dblclick", "onDoubleClick"), ti("focusin", "onFocus"), ti("focusout", "onBlur"), ti(Qr, "onTransitionEnd"), s("onMouseEnter", ["mouseout", "mouseover"]), s("onMouseLeave", ["mouseout", "mouseover"]), s("onPointerEnter", ["pointerout", "pointerover"]), s("onPointerLeave", ["pointerout", "pointerover"]), o("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), o("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), o("onBeforeInput", [
		"compositionend",
		"keypress",
		"textInput",
		"paste"
	]), o("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), o("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), o("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
	var ii = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), ai = new Set("cancel close invalid load scroll toggle".split(" ").concat(ii));
	function oi(e, t, n) {
		var r = e.type || "unknown-event";
		e.currentTarget = n, ct(r, t, void 0, e), e.currentTarget = null;
	}
	function si(e, t) {
		t = (t & 4) != 0;
		for (var n = 0; n < e.length; n++) {
			var r = e[n], i = r.event;
			r = r.listeners;
			a: {
				var a = void 0;
				if (t) for (var o = r.length - 1; 0 <= o; o--) {
					var s = r[o], c = s.instance, l = s.currentTarget;
					if (s = s.listener, c !== a && i.isPropagationStopped()) break a;
					oi(i, s, l), a = c;
				}
				else for (o = 0; o < r.length; o++) {
					if (s = r[o], c = s.instance, l = s.currentTarget, s = s.listener, c !== a && i.isPropagationStopped()) break a;
					oi(i, s, l), a = c;
				}
			}
		}
		if (it) throw e = at, it = !1, at = null, e;
	}
	function V(e, t) {
		var n = t[Ii];
		n === void 0 && (n = t[Ii] = /* @__PURE__ */ new Set());
		var r = e + "__bubble";
		n.has(r) || (di(t, e, 2, !1), n.add(r));
	}
	function ci(e, t, n) {
		var r = 0;
		t && (r |= 4), di(n, e, r, t);
	}
	var li = "_reactListening" + Math.random().toString(36).slice(2);
	function ui(e) {
		if (!e[li]) {
			e[li] = !0, i.forEach(function(t) {
				t !== "selectionchange" && (ai.has(t) || ci(t, !1, e), ci(t, !0, e));
			});
			var t = e.nodeType === 9 ? e : e.ownerDocument;
			t === null || t[li] || (t[li] = !0, ci("selectionchange", !1, t));
		}
	}
	function di(e, t, n, r) {
		switch (xn(t)) {
			case 1:
				var i = gn;
				break;
			case 4:
				i = _n;
				break;
			default: i = vn;
		}
		n = i.bind(null, t, n, e), i = void 0, !$e || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i === void 0 ? e.addEventListener(t, n, !0) : e.addEventListener(t, n, {
			capture: !0,
			passive: i
		}) : i === void 0 ? e.addEventListener(t, n, !1) : e.addEventListener(t, n, { passive: i });
	}
	function fi(e, t, n, r, i) {
		var a = r;
		if (!(t & 1) && !(t & 2) && r !== null) a: for (;;) {
			if (r === null) return;
			var o = r.tag;
			if (o === 3 || o === 4) {
				var s = r.stateNode.containerInfo;
				if (s === i || s.nodeType === 8 && s.parentNode === i) break;
				if (o === 4) for (o = r.return; o !== null;) {
					var c = o.tag;
					if ((c === 3 || c === 4) && (c = o.stateNode.containerInfo, c === i || c.nodeType === 8 && c.parentNode === i)) return;
					o = o.return;
				}
				for (; s !== null;) {
					if (o = zi(s), o === null) return;
					if (c = o.tag, c === 5 || c === 6) {
						r = a = o;
						continue a;
					}
					s = s.parentNode;
				}
			}
			r = r.return;
		}
		Ze(function() {
			var r = a, i = Ve(n), o = [];
			a: {
				var s = $r.get(e);
				if (s !== void 0) {
					var c = jn, l = e;
					switch (e) {
						case "keypress": if (En(n) === 0) break a;
						case "keydown":
						case "keyup":
							c = Jn;
							break;
						case "focusin":
							l = "focus", c = Bn;
							break;
						case "focusout":
							l = "blur", c = Bn;
							break;
						case "beforeblur":
						case "afterblur":
							c = Bn;
							break;
						case "click": if (n.button === 2) break a;
						case "auxclick":
						case "dblclick":
						case "mousedown":
						case "mousemove":
						case "mouseup":
						case "mouseout":
						case "mouseover":
						case "contextmenu":
							c = Rn;
							break;
						case "drag":
						case "dragend":
						case "dragenter":
						case "dragexit":
						case "dragleave":
						case "dragover":
						case "dragstart":
						case "drop":
							c = zn;
							break;
						case "touchcancel":
						case "touchend":
						case "touchmove":
						case "touchstart":
							c = Xn;
							break;
						case Yr:
						case Xr:
						case Zr:
							c = Vn;
							break;
						case Qr:
							c = Zn;
							break;
						case "scroll":
							c = Nn;
							break;
						case "wheel":
							c = Qn;
							break;
						case "copy":
						case "cut":
						case "paste":
							c = Hn;
							break;
						case "gotpointercapture":
						case "lostpointercapture":
						case "pointercancel":
						case "pointerdown":
						case "pointermove":
						case "pointerout":
						case "pointerover":
						case "pointerup": c = Yn;
					}
					var u = (t & 4) != 0, d = !u && e === "scroll", f = u ? s === null ? null : s + "Capture" : s;
					u = [];
					for (var p = r, m; p !== null;) {
						m = p;
						var h = m.stateNode;
						if (m.tag === 5 && h !== null && (m = h, f !== null && (h = Qe(p, f), h != null && u.push(pi(p, h, m)))), d) break;
						p = p.return;
					}
					0 < u.length && (s = new c(s, l, null, n, i), o.push({
						event: s,
						listeners: u
					}));
				}
			}
			if (!(t & 7)) {
				a: {
					if (s = e === "mouseover" || e === "pointerover", c = e === "mouseout" || e === "pointerout", s && n !== Be && (l = n.relatedTarget || n.fromElement) && (zi(l) || l[Fi])) break a;
					if ((c || s) && (s = i.window === i ? i : (s = i.ownerDocument) ? s.defaultView || s.parentWindow : window, c ? (l = n.relatedTarget || n.toElement, c = r, l = l ? zi(l) : null, l !== null && (d = lt(l), l !== d || l.tag !== 5 && l.tag !== 6) && (l = null)) : (c = null, l = r), c !== l)) {
						if (u = Rn, h = "onMouseLeave", f = "onMouseEnter", p = "mouse", (e === "pointerout" || e === "pointerover") && (u = Yn, h = "onPointerLeave", f = "onPointerEnter", p = "pointer"), d = c == null ? s : Vi(c), m = l == null ? s : Vi(l), s = new u(h, p + "leave", c, n, i), s.target = d, s.relatedTarget = m, h = null, zi(i) === r && (u = new u(f, p + "enter", l, n, i), u.target = m, u.relatedTarget = d, h = u), d = h, c && l) b: {
							for (u = c, f = l, p = 0, m = u; m; m = hi(m)) p++;
							for (m = 0, h = f; h; h = hi(h)) m++;
							for (; 0 < p - m;) u = hi(u), p--;
							for (; 0 < m - p;) f = hi(f), m--;
							for (; p--;) {
								if (u === f || f !== null && u === f.alternate) break b;
								u = hi(u), f = hi(f);
							}
							u = null;
						}
						else u = null;
						c !== null && gi(o, s, c, u, !1), l !== null && d !== null && gi(o, d, l, u, !0);
					}
				}
				a: {
					if (s = r ? Vi(r) : window, c = s.nodeName && s.nodeName.toLowerCase(), c === "select" || c === "input" && s.type === "file") var g = vr;
					else if (fr(s)) if (yr) g = Or;
					else {
						g = Er;
						var _ = Tr;
					}
					else (c = s.nodeName) && c.toLowerCase() === "input" && (s.type === "checkbox" || s.type === "radio") && (g = Dr);
					if (g &&= g(e, r)) {
						pr(o, g, n, i);
						break a;
					}
					_ && _(e, s, r), e === "focusout" && (_ = s._wrapperState) && _.controlled && s.type === "number" && Se(s, "number", s.value);
				}
				switch (_ = r ? Vi(r) : window, e) {
					case "focusin":
						(fr(_) || _.contentEditable === "true") && (zr = _, Br = r, Vr = null);
						break;
					case "focusout":
						Vr = Br = zr = null;
						break;
					case "mousedown":
						Hr = !0;
						break;
					case "contextmenu":
					case "mouseup":
					case "dragend":
						Hr = !1, Ur(o, n, i);
						break;
					case "selectionchange": if (Rr) break;
					case "keydown":
					case "keyup": Ur(o, n, i);
				}
				var v;
				if (er) b: {
					switch (e) {
						case "compositionstart":
							var y = "onCompositionStart";
							break b;
						case "compositionend":
							y = "onCompositionEnd";
							break b;
						case "compositionupdate":
							y = "onCompositionUpdate";
							break b;
					}
					y = void 0;
				}
				else cr ? or(e, n) && (y = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (y = "onCompositionStart");
				y && (rr && n.locale !== "ko" && (cr || y !== "onCompositionStart" ? y === "onCompositionEnd" && cr && (v = Tn()) : (Sn = i, Cn = "value" in Sn ? Sn.value : Sn.textContent, cr = !0)), _ = mi(r, y), 0 < _.length && (y = new Un(y, e, null, n, i), o.push({
					event: y,
					listeners: _
				}), v ? y.data = v : (v = sr(n), v !== null && (y.data = v)))), (v = nr ? lr(e, n) : ur(e, n)) && (r = mi(r, "onBeforeInput"), 0 < r.length && (i = new Un("onBeforeInput", "beforeinput", null, n, i), o.push({
					event: i,
					listeners: r
				}), i.data = v));
			}
			si(o, t);
		});
	}
	function pi(e, t, n) {
		return {
			instance: e,
			listener: t,
			currentTarget: n
		};
	}
	function mi(e, t) {
		for (var n = t + "Capture", r = []; e !== null;) {
			var i = e, a = i.stateNode;
			i.tag === 5 && a !== null && (i = a, a = Qe(e, n), a != null && r.unshift(pi(e, a, i)), a = Qe(e, t), a != null && r.push(pi(e, a, i))), e = e.return;
		}
		return r;
	}
	function hi(e) {
		if (e === null) return null;
		do
			e = e.return;
		while (e && e.tag !== 5);
		return e || null;
	}
	function gi(e, t, n, r, i) {
		for (var a = t._reactName, o = []; n !== null && n !== r;) {
			var s = n, c = s.alternate, l = s.stateNode;
			if (c !== null && c === r) break;
			s.tag === 5 && l !== null && (s = l, i ? (c = Qe(n, a), c != null && o.unshift(pi(n, c, s))) : i || (c = Qe(n, a), c != null && o.push(pi(n, c, s)))), n = n.return;
		}
		o.length !== 0 && e.push({
			event: t,
			listeners: o
		});
	}
	var _i = /\r\n?/g, vi = /\u0000|\uFFFD/g;
	function yi(e) {
		return (typeof e == "string" ? e : "" + e).replace(_i, "\n").replace(vi, "");
	}
	function bi(e, t, n) {
		if (t = yi(t), yi(e) !== t && n) throw Error(r(425));
	}
	function xi() {}
	var Si = null, Ci = null;
	function wi(e, t) {
		return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
	}
	var Ti = typeof setTimeout == "function" ? setTimeout : void 0, Ei = typeof clearTimeout == "function" ? clearTimeout : void 0, Di = typeof Promise == "function" ? Promise : void 0, Oi = typeof queueMicrotask == "function" ? queueMicrotask : Di === void 0 ? Ti : function(e) {
		return Di.resolve(null).then(e).catch(ki);
	};
	function ki(e) {
		setTimeout(function() {
			throw e;
		});
	}
	function Ai(e, t) {
		var n = t, r = 0;
		do {
			var i = n.nextSibling;
			if (e.removeChild(n), i && i.nodeType === 8) if (n = i.data, n === "/$") {
				if (r === 0) {
					e.removeChild(i), pn(t);
					return;
				}
				r--;
			} else n !== "$" && n !== "$?" && n !== "$!" || r++;
			n = i;
		} while (n);
		pn(t);
	}
	function H(e) {
		for (; e != null; e = e.nextSibling) {
			var t = e.nodeType;
			if (t === 1 || t === 3) break;
			if (t === 8) {
				if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
				if (t === "/$") return null;
			}
		}
		return e;
	}
	function ji(e) {
		e = e.previousSibling;
		for (var t = 0; e;) {
			if (e.nodeType === 8) {
				var n = e.data;
				if (n === "$" || n === "$!" || n === "$?") {
					if (t === 0) return e;
					t--;
				} else n === "/$" && t++;
			}
			e = e.previousSibling;
		}
		return null;
	}
	var Mi = Math.random().toString(36).slice(2), Ni = "__reactFiber$" + Mi, Pi = "__reactProps$" + Mi, Fi = "__reactContainer$" + Mi, Ii = "__reactEvents$" + Mi, Li = "__reactListeners$" + Mi, Ri = "__reactHandles$" + Mi;
	function zi(e) {
		var t = e[Ni];
		if (t) return t;
		for (var n = e.parentNode; n;) {
			if (t = n[Fi] || n[Ni]) {
				if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = ji(e); e !== null;) {
					if (n = e[Ni]) return n;
					e = ji(e);
				}
				return t;
			}
			e = n, n = e.parentNode;
		}
		return null;
	}
	function Bi(e) {
		return e = e[Ni] || e[Fi], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
	}
	function Vi(e) {
		if (e.tag === 5 || e.tag === 6) return e.stateNode;
		throw Error(r(33));
	}
	function Hi(e) {
		return e[Pi] || null;
	}
	var Ui = [], Wi = -1;
	function Gi(e) {
		return { current: e };
	}
	function U(e) {
		0 > Wi || (e.current = Ui[Wi], Ui[Wi] = null, Wi--);
	}
	function W(e, t) {
		Wi++, Ui[Wi] = e.current, e.current = t;
	}
	var Ki = {}, qi = Gi(Ki), Ji = Gi(!1), Yi = Ki;
	function Xi(e, t) {
		var n = e.type.contextTypes;
		if (!n) return Ki;
		var r = e.stateNode;
		if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
		var i = {}, a;
		for (a in n) i[a] = t[a];
		return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i;
	}
	function Zi(e) {
		return e = e.childContextTypes, e != null;
	}
	function Qi() {
		U(Ji), U(qi);
	}
	function $i(e, t, n) {
		if (qi.current !== Ki) throw Error(r(168));
		W(qi, t), W(Ji, n);
	}
	function ea(e, t, n) {
		var i = e.stateNode;
		if (t = t.childContextTypes, typeof i.getChildContext != "function") return n;
		for (var a in i = i.getChildContext(), i) if (!(a in t)) throw Error(r(108, ue(e) || "Unknown", a));
		return F({}, n, i);
	}
	function ta(e) {
		return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Ki, Yi = qi.current, W(qi, e), W(Ji, Ji.current), !0;
	}
	function na(e, t, n) {
		var i = e.stateNode;
		if (!i) throw Error(r(169));
		n ? (e = ea(e, t, Yi), i.__reactInternalMemoizedMergedChildContext = e, U(Ji), U(qi), W(qi, e)) : U(Ji), W(Ji, n);
	}
	var ra = null, ia = !1, aa = !1;
	function oa(e) {
		ra === null ? ra = [e] : ra.push(e);
	}
	function sa(e) {
		ia = !0, oa(e);
	}
	function ca() {
		if (!aa && ra !== null) {
			aa = !0;
			var e = 0, t = R;
			try {
				var n = ra;
				for (R = 1; e < n.length; e++) {
					var r = n[e];
					do
						r = r(!0);
					while (r !== null);
				}
				ra = null, ia = !1;
			} catch (t) {
				throw ra !== null && (ra = ra.slice(e + 1)), ht(bt, ca), t;
			} finally {
				R = t, aa = !1;
			}
		}
		return null;
	}
	var la = [], ua = 0, da = null, fa = 0, pa = [], ma = 0, ha = null, ga = 1, _a = "";
	function va(e, t) {
		la[ua++] = fa, la[ua++] = da, da = e, fa = t;
	}
	function ya(e, t, n) {
		pa[ma++] = ga, pa[ma++] = _a, pa[ma++] = ha, ha = e;
		var r = ga;
		e = _a;
		var i = 32 - Ot(r) - 1;
		r &= ~(1 << i), n += 1;
		var a = 32 - Ot(t) + i;
		if (30 < a) {
			var o = i - i % 5;
			a = (r & (1 << o) - 1).toString(32), r >>= o, i -= o, ga = 1 << 32 - Ot(t) + i | n << i | r, _a = a + e;
		} else ga = 1 << a | n << i | r, _a = e;
	}
	function ba(e) {
		e.return !== null && (va(e, 1), ya(e, 1, 0));
	}
	function xa(e) {
		for (; e === da;) da = la[--ua], la[ua] = null, fa = la[--ua], la[ua] = null;
		for (; e === ha;) ha = pa[--ma], pa[ma] = null, _a = pa[--ma], pa[ma] = null, ga = pa[--ma], pa[ma] = null;
	}
	var Sa = null, Ca = null, G = !1, wa = null;
	function Ta(e, t) {
		var n = ql(5, null, null, 0);
		n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
	}
	function Ea(e, t) {
		switch (e.tag) {
			case 5:
				var n = e.type;
				return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t === null ? !1 : (e.stateNode = t, Sa = e, Ca = H(t.firstChild), !0);
			case 6: return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t === null ? !1 : (e.stateNode = t, Sa = e, Ca = null, !0);
			case 13: return t = t.nodeType === 8 ? t : null, t === null ? !1 : (n = ha === null ? null : {
				id: ga,
				overflow: _a
			}, e.memoizedState = {
				dehydrated: t,
				treeContext: n,
				retryLane: 1073741824
			}, n = ql(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Sa = e, Ca = null, !0);
			default: return !1;
		}
	}
	function Da(e) {
		return (e.mode & 1) != 0 && (e.flags & 128) == 0;
	}
	function Oa(e) {
		if (G) {
			var t = Ca;
			if (t) {
				var n = t;
				if (!Ea(e, t)) {
					if (Da(e)) throw Error(r(418));
					t = H(n.nextSibling);
					var i = Sa;
					t && Ea(e, t) ? Ta(i, n) : (e.flags = e.flags & -4097 | 2, G = !1, Sa = e);
				}
			} else {
				if (Da(e)) throw Error(r(418));
				e.flags = e.flags & -4097 | 2, G = !1, Sa = e;
			}
		}
	}
	function ka(e) {
		for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
		Sa = e;
	}
	function Aa(e) {
		if (e !== Sa) return !1;
		if (!G) return ka(e), G = !0, !1;
		var t;
		if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !wi(e.type, e.memoizedProps)), t &&= Ca) {
			if (Da(e)) throw ja(), Error(r(418));
			for (; t;) Ta(e, t), t = H(t.nextSibling);
		}
		if (ka(e), e.tag === 13) {
			if (e = e.memoizedState, e = e === null ? null : e.dehydrated, !e) throw Error(r(317));
			a: {
				for (e = e.nextSibling, t = 0; e;) {
					if (e.nodeType === 8) {
						var n = e.data;
						if (n === "/$") {
							if (t === 0) {
								Ca = H(e.nextSibling);
								break a;
							}
							t--;
						} else n !== "$" && n !== "$!" && n !== "$?" || t++;
					}
					e = e.nextSibling;
				}
				Ca = null;
			}
		} else Ca = Sa ? H(e.stateNode.nextSibling) : null;
		return !0;
	}
	function ja() {
		for (var e = Ca; e;) e = H(e.nextSibling);
	}
	function Ma() {
		Ca = Sa = null, G = !1;
	}
	function Na(e) {
		wa === null ? wa = [e] : wa.push(e);
	}
	var Pa = C.ReactCurrentBatchConfig;
	function Fa(e, t, n) {
		if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
			if (n._owner) {
				if (n = n._owner, n) {
					if (n.tag !== 1) throw Error(r(309));
					var i = n.stateNode;
				}
				if (!i) throw Error(r(147, e));
				var a = i, o = "" + e;
				return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(e) {
					var t = a.refs;
					e === null ? delete t[o] : t[o] = e;
				}, t._stringRef = o, t);
			}
			if (typeof e != "string") throw Error(r(284));
			if (!n._owner) throw Error(r(290, e));
		}
		return e;
	}
	function Ia(e, t) {
		throw e = Object.prototype.toString.call(t), Error(r(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
	}
	function La(e) {
		var t = e._init;
		return t(e._payload);
	}
	function Ra(e) {
		function t(t, n) {
			if (e) {
				var r = t.deletions;
				r === null ? (t.deletions = [n], t.flags |= 16) : r.push(n);
			}
		}
		function n(n, r) {
			if (!e) return null;
			for (; r !== null;) t(n, r), r = r.sibling;
			return null;
		}
		function i(e, t) {
			for (e = /* @__PURE__ */ new Map(); t !== null;) t.key === null ? e.set(t.index, t) : e.set(t.key, t), t = t.sibling;
			return e;
		}
		function a(e, t) {
			return e = Xl(e, t), e.index = 0, e.sibling = null, e;
		}
		function o(t, n, r) {
			return t.index = r, e ? (r = t.alternate, r === null ? (t.flags |= 2, n) : (r = r.index, r < n ? (t.flags |= 2, n) : r)) : (t.flags |= 1048576, n);
		}
		function s(t) {
			return e && t.alternate === null && (t.flags |= 2), t;
		}
		function c(e, t, n, r) {
			return t === null || t.tag !== 6 ? (t = eu(n, e.mode, r), t.return = e, t) : (t = a(t, n), t.return = e, t);
		}
		function l(e, t, n, r) {
			var i = n.type;
			return i === E ? d(e, t, n.props.children, r, n.key) : t !== null && (t.elementType === i || typeof i == "object" && i && i.$$typeof === N && La(i) === t.type) ? (r = a(t, n.props), r.ref = Fa(e, t, n), r.return = e, r) : (r = Zl(n.type, n.key, n.props, null, e.mode, r), r.ref = Fa(e, t, n), r.return = e, r);
		}
		function u(e, t, n, r) {
			return t === null || t.tag !== 4 || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? (t = tu(n, e.mode, r), t.return = e, t) : (t = a(t, n.children || []), t.return = e, t);
		}
		function d(e, t, n, r, i) {
			return t === null || t.tag !== 7 ? (t = Ql(n, e.mode, r, i), t.return = e, t) : (t = a(t, n), t.return = e, t);
		}
		function f(e, t, n) {
			if (typeof t == "string" && t !== "" || typeof t == "number") return t = eu("" + t, e.mode, n), t.return = e, t;
			if (typeof t == "object" && t) {
				switch (t.$$typeof) {
					case w: return n = Zl(t.type, t.key, t.props, null, e.mode, n), n.ref = Fa(e, null, t), n.return = e, n;
					case T: return t = tu(t, e.mode, n), t.return = e, t;
					case N:
						var r = t._init;
						return f(e, r(t._payload), n);
				}
				if (Ce(t) || P(t)) return t = Ql(t, e.mode, n, null), t.return = e, t;
				Ia(e, t);
			}
			return null;
		}
		function p(e, t, n, r) {
			var i = t === null ? null : t.key;
			if (typeof n == "string" && n !== "" || typeof n == "number") return i === null ? c(e, t, "" + n, r) : null;
			if (typeof n == "object" && n) {
				switch (n.$$typeof) {
					case w: return n.key === i ? l(e, t, n, r) : null;
					case T: return n.key === i ? u(e, t, n, r) : null;
					case N: return i = n._init, p(e, t, i(n._payload), r);
				}
				if (Ce(n) || P(n)) return i === null ? d(e, t, n, r, null) : null;
				Ia(e, n);
			}
			return null;
		}
		function m(e, t, n, r, i) {
			if (typeof r == "string" && r !== "" || typeof r == "number") return e = e.get(n) || null, c(t, e, "" + r, i);
			if (typeof r == "object" && r) {
				switch (r.$$typeof) {
					case w: return e = e.get(r.key === null ? n : r.key) || null, l(t, e, r, i);
					case T: return e = e.get(r.key === null ? n : r.key) || null, u(t, e, r, i);
					case N:
						var a = r._init;
						return m(e, t, n, a(r._payload), i);
				}
				if (Ce(r) || P(r)) return e = e.get(n) || null, d(t, e, r, i, null);
				Ia(t, r);
			}
			return null;
		}
		function h(r, a, s, c) {
			for (var l = null, u = null, d = a, h = a = 0, g = null; d !== null && h < s.length; h++) {
				d.index > h ? (g = d, d = null) : g = d.sibling;
				var _ = p(r, d, s[h], c);
				if (_ === null) {
					d === null && (d = g);
					break;
				}
				e && d && _.alternate === null && t(r, d), a = o(_, a, h), u === null ? l = _ : u.sibling = _, u = _, d = g;
			}
			if (h === s.length) return n(r, d), G && va(r, h), l;
			if (d === null) {
				for (; h < s.length; h++) d = f(r, s[h], c), d !== null && (a = o(d, a, h), u === null ? l = d : u.sibling = d, u = d);
				return G && va(r, h), l;
			}
			for (d = i(r, d); h < s.length; h++) g = m(d, r, h, s[h], c), g !== null && (e && g.alternate !== null && d.delete(g.key === null ? h : g.key), a = o(g, a, h), u === null ? l = g : u.sibling = g, u = g);
			return e && d.forEach(function(e) {
				return t(r, e);
			}), G && va(r, h), l;
		}
		function g(a, s, c, l) {
			var u = P(c);
			if (typeof u != "function") throw Error(r(150));
			if (c = u.call(c), c == null) throw Error(r(151));
			for (var d = u = null, h = s, g = s = 0, _ = null, v = c.next(); h !== null && !v.done; g++, v = c.next()) {
				h.index > g ? (_ = h, h = null) : _ = h.sibling;
				var y = p(a, h, v.value, l);
				if (y === null) {
					h === null && (h = _);
					break;
				}
				e && h && y.alternate === null && t(a, h), s = o(y, s, g), d === null ? u = y : d.sibling = y, d = y, h = _;
			}
			if (v.done) return n(a, h), G && va(a, g), u;
			if (h === null) {
				for (; !v.done; g++, v = c.next()) v = f(a, v.value, l), v !== null && (s = o(v, s, g), d === null ? u = v : d.sibling = v, d = v);
				return G && va(a, g), u;
			}
			for (h = i(a, h); !v.done; g++, v = c.next()) v = m(h, a, g, v.value, l), v !== null && (e && v.alternate !== null && h.delete(v.key === null ? g : v.key), s = o(v, s, g), d === null ? u = v : d.sibling = v, d = v);
			return e && h.forEach(function(e) {
				return t(a, e);
			}), G && va(a, g), u;
		}
		function _(e, r, i, o) {
			if (typeof i == "object" && i && i.type === E && i.key === null && (i = i.props.children), typeof i == "object" && i) {
				switch (i.$$typeof) {
					case w:
						a: {
							for (var c = i.key, l = r; l !== null;) {
								if (l.key === c) {
									if (c = i.type, c === E) {
										if (l.tag === 7) {
											n(e, l.sibling), r = a(l, i.props.children), r.return = e, e = r;
											break a;
										}
									} else if (l.elementType === c || typeof c == "object" && c && c.$$typeof === N && La(c) === l.type) {
										n(e, l.sibling), r = a(l, i.props), r.ref = Fa(e, l, i), r.return = e, e = r;
										break a;
									}
									n(e, l);
									break;
								} else t(e, l);
								l = l.sibling;
							}
							i.type === E ? (r = Ql(i.props.children, e.mode, o, i.key), r.return = e, e = r) : (o = Zl(i.type, i.key, i.props, null, e.mode, o), o.ref = Fa(e, r, i), o.return = e, e = o);
						}
						return s(e);
					case T:
						a: {
							for (l = i.key; r !== null;) {
								if (r.key === l) if (r.tag === 4 && r.stateNode.containerInfo === i.containerInfo && r.stateNode.implementation === i.implementation) {
									n(e, r.sibling), r = a(r, i.children || []), r.return = e, e = r;
									break a;
								} else {
									n(e, r);
									break;
								}
								else t(e, r);
								r = r.sibling;
							}
							r = tu(i, e.mode, o), r.return = e, e = r;
						}
						return s(e);
					case N: return l = i._init, _(e, r, l(i._payload), o);
				}
				if (Ce(i)) return h(e, r, i, o);
				if (P(i)) return g(e, r, i, o);
				Ia(e, i);
			}
			return typeof i == "string" && i !== "" || typeof i == "number" ? (i = "" + i, r !== null && r.tag === 6 ? (n(e, r.sibling), r = a(r, i), r.return = e, e = r) : (n(e, r), r = eu(i, e.mode, o), r.return = e, e = r), s(e)) : n(e, r);
		}
		return _;
	}
	var za = Ra(!0), Ba = Ra(!1), Va = Gi(null), Ha = null, Ua = null, Wa = null;
	function Ga() {
		Wa = Ua = Ha = null;
	}
	function Ka(e) {
		var t = Va.current;
		U(Va), e._currentValue = t;
	}
	function qa(e, t, n) {
		for (; e !== null;) {
			var r = e.alternate;
			if ((e.childLanes & t) === t ? r !== null && (r.childLanes & t) !== t && (r.childLanes |= t) : (e.childLanes |= t, r !== null && (r.childLanes |= t)), e === n) break;
			e = e.return;
		}
	}
	function Ja(e, t) {
		Ha = e, Wa = Ua = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (Ps = !0), e.firstContext = null);
	}
	function Ya(e) {
		var t = e._currentValue;
		if (Wa !== e) if (e = {
			context: e,
			memoizedValue: t,
			next: null
		}, Ua === null) {
			if (Ha === null) throw Error(r(308));
			Ua = e, Ha.dependencies = {
				lanes: 0,
				firstContext: e
			};
		} else Ua = Ua.next = e;
		return t;
	}
	var Xa = null;
	function Za(e) {
		Xa === null ? Xa = [e] : Xa.push(e);
	}
	function Qa(e, t, n, r) {
		var i = t.interleaved;
		return i === null ? (n.next = n, Za(t)) : (n.next = i.next, i.next = n), t.interleaved = n, $a(e, r);
	}
	function $a(e, t) {
		e.lanes |= t;
		var n = e.alternate;
		for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
		return n.tag === 3 ? n.stateNode : null;
	}
	var eo = !1;
	function to(e) {
		e.updateQueue = {
			baseState: e.memoizedState,
			firstBaseUpdate: null,
			lastBaseUpdate: null,
			shared: {
				pending: null,
				interleaved: null,
				lanes: 0
			},
			effects: null
		};
	}
	function no(e, t) {
		e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
			baseState: e.baseState,
			firstBaseUpdate: e.firstBaseUpdate,
			lastBaseUpdate: e.lastBaseUpdate,
			shared: e.shared,
			effects: e.effects
		});
	}
	function ro(e, t) {
		return {
			eventTime: e,
			lane: t,
			tag: 0,
			payload: null,
			callback: null,
			next: null
		};
	}
	function io(e, t, n) {
		var r = e.updateQueue;
		if (r === null) return null;
		if (r = r.shared, Z & 2) {
			var i = r.pending;
			return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, $a(e, n);
		}
		return i = r.interleaved, i === null ? (t.next = t, Za(r)) : (t.next = i.next, i.next = t), r.interleaved = t, $a(e, n);
	}
	function ao(e, t, n) {
		if (t = t.updateQueue, t !== null && (t = t.shared, n & 4194240)) {
			var r = t.lanes;
			r &= e.pendingLanes, n |= r, t.lanes = n, Ut(e, n);
		}
	}
	function oo(e, t) {
		var n = e.updateQueue, r = e.alternate;
		if (r !== null && (r = r.updateQueue, n === r)) {
			var i = null, a = null;
			if (n = n.firstBaseUpdate, n !== null) {
				do {
					var o = {
						eventTime: n.eventTime,
						lane: n.lane,
						tag: n.tag,
						payload: n.payload,
						callback: n.callback,
						next: null
					};
					a === null ? i = a = o : a = a.next = o, n = n.next;
				} while (n !== null);
				a === null ? i = a = t : a = a.next = t;
			} else i = a = t;
			n = {
				baseState: r.baseState,
				firstBaseUpdate: i,
				lastBaseUpdate: a,
				shared: r.shared,
				effects: r.effects
			}, e.updateQueue = n;
			return;
		}
		e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
	}
	function so(e, t, n, r) {
		var i = e.updateQueue;
		eo = !1;
		var a = i.firstBaseUpdate, o = i.lastBaseUpdate, s = i.shared.pending;
		if (s !== null) {
			i.shared.pending = null;
			var c = s, l = c.next;
			c.next = null, o === null ? a = l : o.next = l, o = c;
			var u = e.alternate;
			u !== null && (u = u.updateQueue, s = u.lastBaseUpdate, s !== o && (s === null ? u.firstBaseUpdate = l : s.next = l, u.lastBaseUpdate = c));
		}
		if (a !== null) {
			var d = i.baseState;
			o = 0, u = l = c = null, s = a;
			do {
				var f = s.lane, p = s.eventTime;
				if ((r & f) === f) {
					u !== null && (u = u.next = {
						eventTime: p,
						lane: 0,
						tag: s.tag,
						payload: s.payload,
						callback: s.callback,
						next: null
					});
					a: {
						var m = e, h = s;
						switch (f = t, p = n, h.tag) {
							case 1:
								if (m = h.payload, typeof m == "function") {
									d = m.call(p, d, f);
									break a;
								}
								d = m;
								break a;
							case 3: m.flags = m.flags & -65537 | 128;
							case 0:
								if (m = h.payload, f = typeof m == "function" ? m.call(p, d, f) : m, f == null) break a;
								d = F({}, d, f);
								break a;
							case 2: eo = !0;
						}
					}
					s.callback !== null && s.lane !== 0 && (e.flags |= 64, f = i.effects, f === null ? i.effects = [s] : f.push(s));
				} else p = {
					eventTime: p,
					lane: f,
					tag: s.tag,
					payload: s.payload,
					callback: s.callback,
					next: null
				}, u === null ? (l = u = p, c = d) : u = u.next = p, o |= f;
				if (s = s.next, s === null) {
					if (s = i.shared.pending, s === null) break;
					f = s, s = f.next, f.next = null, i.lastBaseUpdate = f, i.shared.pending = null;
				}
			} while (1);
			if (u === null && (c = d), i.baseState = c, i.firstBaseUpdate = l, i.lastBaseUpdate = u, t = i.shared.interleaved, t !== null) {
				i = t;
				do
					o |= i.lane, i = i.next;
				while (i !== t);
			} else a === null && (i.shared.lanes = 0);
			Xc |= o, e.lanes = o, e.memoizedState = d;
		}
	}
	function co(e, t, n) {
		if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
			var i = e[t], a = i.callback;
			if (a !== null) {
				if (i.callback = null, i = n, typeof a != "function") throw Error(r(191, a));
				a.call(i);
			}
		}
	}
	var lo = {}, uo = Gi(lo), fo = Gi(lo), po = Gi(lo);
	function mo(e) {
		if (e === lo) throw Error(r(174));
		return e;
	}
	function ho(e, t) {
		switch (W(po, t), W(fo, e), W(uo, lo), e = t.nodeType, e) {
			case 9:
			case 11:
				t = (t = t.documentElement) ? t.namespaceURI : Ae(null, "");
				break;
			default: e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Ae(t, e);
		}
		U(uo), W(uo, t);
	}
	function go() {
		U(uo), U(fo), U(po);
	}
	function _o(e) {
		mo(po.current);
		var t = mo(uo.current), n = Ae(t, e.type);
		t !== n && (W(fo, e), W(uo, n));
	}
	function vo(e) {
		fo.current === e && (U(uo), U(fo));
	}
	var K = Gi(0);
	function yo(e) {
		for (var t = e; t !== null;) {
			if (t.tag === 13) {
				var n = t.memoizedState;
				if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t;
			} else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
				if (t.flags & 128) return t;
			} else if (t.child !== null) {
				t.child.return = t, t = t.child;
				continue;
			}
			if (t === e) break;
			for (; t.sibling === null;) {
				if (t.return === null || t.return === e) return null;
				t = t.return;
			}
			t.sibling.return = t.return, t = t.sibling;
		}
		return null;
	}
	var bo = [];
	function xo() {
		for (var e = 0; e < bo.length; e++) bo[e]._workInProgressVersionPrimary = null;
		bo.length = 0;
	}
	var So = C.ReactCurrentDispatcher, Co = C.ReactCurrentBatchConfig, wo = 0, q = null, J = null, To = null, Eo = !1, Do = !1, Oo = 0, ko = 0;
	function Y() {
		throw Error(r(321));
	}
	function Ao(e, t) {
		if (t === null) return !1;
		for (var n = 0; n < t.length && n < e.length; n++) if (!Ar(e[n], t[n])) return !1;
		return !0;
	}
	function jo(e, t, n, i, a, o) {
		if (wo = o, q = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, So.current = e === null || e.memoizedState === null ? ms : hs, e = n(i, a), Do) {
			o = 0;
			do {
				if (Do = !1, Oo = 0, 25 <= o) throw Error(r(301));
				o += 1, To = J = null, t.updateQueue = null, So.current = gs, e = n(i, a);
			} while (Do);
		}
		if (So.current = ps, t = J !== null && J.next !== null, wo = 0, To = J = q = null, Eo = !1, t) throw Error(r(300));
		return e;
	}
	function Mo() {
		var e = Oo !== 0;
		return Oo = 0, e;
	}
	function No() {
		var e = {
			memoizedState: null,
			baseState: null,
			baseQueue: null,
			queue: null,
			next: null
		};
		return To === null ? q.memoizedState = To = e : To = To.next = e, To;
	}
	function Po() {
		if (J === null) {
			var e = q.alternate;
			e = e === null ? null : e.memoizedState;
		} else e = J.next;
		var t = To === null ? q.memoizedState : To.next;
		if (t !== null) To = t, J = e;
		else {
			if (e === null) throw Error(r(310));
			J = e, e = {
				memoizedState: J.memoizedState,
				baseState: J.baseState,
				baseQueue: J.baseQueue,
				queue: J.queue,
				next: null
			}, To === null ? q.memoizedState = To = e : To = To.next = e;
		}
		return To;
	}
	function Fo(e, t) {
		return typeof t == "function" ? t(e) : t;
	}
	function Io(e) {
		var t = Po(), n = t.queue;
		if (n === null) throw Error(r(311));
		n.lastRenderedReducer = e;
		var i = J, a = i.baseQueue, o = n.pending;
		if (o !== null) {
			if (a !== null) {
				var s = a.next;
				a.next = o.next, o.next = s;
			}
			i.baseQueue = a = o, n.pending = null;
		}
		if (a !== null) {
			o = a.next, i = i.baseState;
			var c = s = null, l = null, u = o;
			do {
				var d = u.lane;
				if ((wo & d) === d) l !== null && (l = l.next = {
					lane: 0,
					action: u.action,
					hasEagerState: u.hasEagerState,
					eagerState: u.eagerState,
					next: null
				}), i = u.hasEagerState ? u.eagerState : e(i, u.action);
				else {
					var f = {
						lane: d,
						action: u.action,
						hasEagerState: u.hasEagerState,
						eagerState: u.eagerState,
						next: null
					};
					l === null ? (c = l = f, s = i) : l = l.next = f, q.lanes |= d, Xc |= d;
				}
				u = u.next;
			} while (u !== null && u !== o);
			l === null ? s = i : l.next = c, Ar(i, t.memoizedState) || (Ps = !0), t.memoizedState = i, t.baseState = s, t.baseQueue = l, n.lastRenderedState = i;
		}
		if (e = n.interleaved, e !== null) {
			a = e;
			do
				o = a.lane, q.lanes |= o, Xc |= o, a = a.next;
			while (a !== e);
		} else a === null && (n.lanes = 0);
		return [t.memoizedState, n.dispatch];
	}
	function Lo(e) {
		var t = Po(), n = t.queue;
		if (n === null) throw Error(r(311));
		n.lastRenderedReducer = e;
		var i = n.dispatch, a = n.pending, o = t.memoizedState;
		if (a !== null) {
			n.pending = null;
			var s = a = a.next;
			do
				o = e(o, s.action), s = s.next;
			while (s !== a);
			Ar(o, t.memoizedState) || (Ps = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
		}
		return [o, i];
	}
	function Ro() {}
	function zo(e, t) {
		var n = q, i = Po(), a = t(), o = !Ar(i.memoizedState, a);
		if (o && (i.memoizedState = a, Ps = !0), i = i.queue, Zo(Ho.bind(null, n, i, e), [e]), i.getSnapshot !== t || o || To !== null && To.memoizedState.tag & 1) {
			if (n.flags |= 2048, Ko(9, Vo.bind(null, n, i, a, t), void 0, null), Uc === null) throw Error(r(349));
			wo & 30 || Bo(n, t, a);
		}
		return a;
	}
	function Bo(e, t, n) {
		e.flags |= 16384, e = {
			getSnapshot: t,
			value: n
		}, t = q.updateQueue, t === null ? (t = {
			lastEffect: null,
			stores: null
		}, q.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
	}
	function Vo(e, t, n, r) {
		t.value = n, t.getSnapshot = r, Uo(t) && Wo(e);
	}
	function Ho(e, t, n) {
		return n(function() {
			Uo(t) && Wo(e);
		});
	}
	function Uo(e) {
		var t = e.getSnapshot;
		e = e.value;
		try {
			var n = t();
			return !Ar(e, n);
		} catch {
			return !0;
		}
	}
	function Wo(e) {
		var t = $a(e, 1);
		t !== null && gl(t, e, 1, -1);
	}
	function Go(e) {
		var t = No();
		return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
			pending: null,
			interleaved: null,
			lanes: 0,
			dispatch: null,
			lastRenderedReducer: Fo,
			lastRenderedState: e
		}, t.queue = e, e = e.dispatch = ls.bind(null, q, e), [t.memoizedState, e];
	}
	function Ko(e, t, n, r) {
		return e = {
			tag: e,
			create: t,
			destroy: n,
			deps: r,
			next: null
		}, t = q.updateQueue, t === null ? (t = {
			lastEffect: null,
			stores: null
		}, q.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
	}
	function qo() {
		return Po().memoizedState;
	}
	function Jo(e, t, n, r) {
		var i = No();
		q.flags |= e, i.memoizedState = Ko(1 | t, n, void 0, r === void 0 ? null : r);
	}
	function Yo(e, t, n, r) {
		var i = Po();
		r = r === void 0 ? null : r;
		var a = void 0;
		if (J !== null) {
			var o = J.memoizedState;
			if (a = o.destroy, r !== null && Ao(r, o.deps)) {
				i.memoizedState = Ko(t, n, a, r);
				return;
			}
		}
		q.flags |= e, i.memoizedState = Ko(1 | t, n, a, r);
	}
	function Xo(e, t) {
		return Jo(8390656, 8, e, t);
	}
	function Zo(e, t) {
		return Yo(2048, 8, e, t);
	}
	function Qo(e, t) {
		return Yo(4, 2, e, t);
	}
	function $o(e, t) {
		return Yo(4, 4, e, t);
	}
	function es(e, t) {
		if (typeof t == "function") return e = e(), t(e), function() {
			t(null);
		};
		if (t != null) return e = e(), t.current = e, function() {
			t.current = null;
		};
	}
	function ts(e, t, n) {
		return n = n == null ? null : n.concat([e]), Yo(4, 4, es.bind(null, t, e), n);
	}
	function ns() {}
	function rs(e, t) {
		var n = Po();
		t = t === void 0 ? null : t;
		var r = n.memoizedState;
		return r !== null && t !== null && Ao(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
	}
	function is(e, t) {
		var n = Po();
		t = t === void 0 ? null : t;
		var r = n.memoizedState;
		return r !== null && t !== null && Ao(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
	}
	function as(e, t, n) {
		return wo & 21 ? (Ar(n, t) || (n = zt(), q.lanes |= n, Xc |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Ps = !0), e.memoizedState = n);
	}
	function os(e, t) {
		var n = R;
		R = n !== 0 && 4 > n ? n : 4, e(!0);
		var r = Co.transition;
		Co.transition = {};
		try {
			e(!1), t();
		} finally {
			R = n, Co.transition = r;
		}
	}
	function ss() {
		return Po().memoizedState;
	}
	function cs(e, t, n) {
		var r = hl(e);
		if (n = {
			lane: r,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null
		}, us(e)) ds(t, n);
		else if (n = Qa(e, t, n, r), n !== null) {
			var i = ml();
			gl(n, e, r, i), fs(n, t, r);
		}
	}
	function ls(e, t, n) {
		var r = hl(e), i = {
			lane: r,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null
		};
		if (us(e)) ds(t, i);
		else {
			var a = e.alternate;
			if (e.lanes === 0 && (a === null || a.lanes === 0) && (a = t.lastRenderedReducer, a !== null)) try {
				var o = t.lastRenderedState, s = a(o, n);
				if (i.hasEagerState = !0, i.eagerState = s, Ar(s, o)) {
					var c = t.interleaved;
					c === null ? (i.next = i, Za(t)) : (i.next = c.next, c.next = i), t.interleaved = i;
					return;
				}
			} catch {}
			n = Qa(e, t, i, r), n !== null && (i = ml(), gl(n, e, r, i), fs(n, t, r));
		}
	}
	function us(e) {
		var t = e.alternate;
		return e === q || t !== null && t === q;
	}
	function ds(e, t) {
		Do = Eo = !0;
		var n = e.pending;
		n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
	}
	function fs(e, t, n) {
		if (n & 4194240) {
			var r = t.lanes;
			r &= e.pendingLanes, n |= r, t.lanes = n, Ut(e, n);
		}
	}
	var ps = {
		readContext: Ya,
		useCallback: Y,
		useContext: Y,
		useEffect: Y,
		useImperativeHandle: Y,
		useInsertionEffect: Y,
		useLayoutEffect: Y,
		useMemo: Y,
		useReducer: Y,
		useRef: Y,
		useState: Y,
		useDebugValue: Y,
		useDeferredValue: Y,
		useTransition: Y,
		useMutableSource: Y,
		useSyncExternalStore: Y,
		useId: Y,
		unstable_isNewReconciler: !1
	}, ms = {
		readContext: Ya,
		useCallback: function(e, t) {
			return No().memoizedState = [e, t === void 0 ? null : t], e;
		},
		useContext: Ya,
		useEffect: Xo,
		useImperativeHandle: function(e, t, n) {
			return n = n == null ? null : n.concat([e]), Jo(4194308, 4, es.bind(null, t, e), n);
		},
		useLayoutEffect: function(e, t) {
			return Jo(4194308, 4, e, t);
		},
		useInsertionEffect: function(e, t) {
			return Jo(4, 2, e, t);
		},
		useMemo: function(e, t) {
			var n = No();
			return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
		},
		useReducer: function(e, t, n) {
			var r = No();
			return t = n === void 0 ? t : n(t), r.memoizedState = r.baseState = t, e = {
				pending: null,
				interleaved: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: e,
				lastRenderedState: t
			}, r.queue = e, e = e.dispatch = cs.bind(null, q, e), [r.memoizedState, e];
		},
		useRef: function(e) {
			var t = No();
			return e = { current: e }, t.memoizedState = e;
		},
		useState: Go,
		useDebugValue: ns,
		useDeferredValue: function(e) {
			return No().memoizedState = e;
		},
		useTransition: function() {
			var e = Go(!1), t = e[0];
			return e = os.bind(null, e[1]), No().memoizedState = e, [t, e];
		},
		useMutableSource: function() {},
		useSyncExternalStore: function(e, t, n) {
			var i = q, a = No();
			if (G) {
				if (n === void 0) throw Error(r(407));
				n = n();
			} else {
				if (n = t(), Uc === null) throw Error(r(349));
				wo & 30 || Bo(i, t, n);
			}
			a.memoizedState = n;
			var o = {
				value: n,
				getSnapshot: t
			};
			return a.queue = o, Xo(Ho.bind(null, i, o, e), [e]), i.flags |= 2048, Ko(9, Vo.bind(null, i, o, n, t), void 0, null), n;
		},
		useId: function() {
			var e = No(), t = Uc.identifierPrefix;
			if (G) {
				var n = _a, r = ga;
				n = (r & ~(1 << 32 - Ot(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Oo++, 0 < n && (t += "H" + n.toString(32)), t += ":";
			} else n = ko++, t = ":" + t + "r" + n.toString(32) + ":";
			return e.memoizedState = t;
		},
		unstable_isNewReconciler: !1
	}, hs = {
		readContext: Ya,
		useCallback: rs,
		useContext: Ya,
		useEffect: Zo,
		useImperativeHandle: ts,
		useInsertionEffect: Qo,
		useLayoutEffect: $o,
		useMemo: is,
		useReducer: Io,
		useRef: qo,
		useState: function() {
			return Io(Fo);
		},
		useDebugValue: ns,
		useDeferredValue: function(e) {
			return as(Po(), J.memoizedState, e);
		},
		useTransition: function() {
			return [Io(Fo)[0], Po().memoizedState];
		},
		useMutableSource: Ro,
		useSyncExternalStore: zo,
		useId: ss,
		unstable_isNewReconciler: !1
	}, gs = {
		readContext: Ya,
		useCallback: rs,
		useContext: Ya,
		useEffect: Zo,
		useImperativeHandle: ts,
		useInsertionEffect: Qo,
		useLayoutEffect: $o,
		useMemo: is,
		useReducer: Lo,
		useRef: qo,
		useState: function() {
			return Lo(Fo);
		},
		useDebugValue: ns,
		useDeferredValue: function(e) {
			var t = Po();
			return J === null ? t.memoizedState = e : as(t, J.memoizedState, e);
		},
		useTransition: function() {
			return [Lo(Fo)[0], Po().memoizedState];
		},
		useMutableSource: Ro,
		useSyncExternalStore: zo,
		useId: ss,
		unstable_isNewReconciler: !1
	};
	function _s(e, t) {
		if (e && e.defaultProps) {
			for (var n in t = F({}, t), e = e.defaultProps, e) t[n] === void 0 && (t[n] = e[n]);
			return t;
		}
		return t;
	}
	function vs(e, t, n, r) {
		t = e.memoizedState, n = n(r, t), n = n == null ? t : F({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
	}
	var ys = {
		isMounted: function(e) {
			return (e = e._reactInternals) ? lt(e) === e : !1;
		},
		enqueueSetState: function(e, t, n) {
			e = e._reactInternals;
			var r = ml(), i = hl(e), a = ro(r, i);
			a.payload = t, n != null && (a.callback = n), t = io(e, a, i), t !== null && (gl(t, e, i, r), ao(t, e, i));
		},
		enqueueReplaceState: function(e, t, n) {
			e = e._reactInternals;
			var r = ml(), i = hl(e), a = ro(r, i);
			a.tag = 1, a.payload = t, n != null && (a.callback = n), t = io(e, a, i), t !== null && (gl(t, e, i, r), ao(t, e, i));
		},
		enqueueForceUpdate: function(e, t) {
			e = e._reactInternals;
			var n = ml(), r = hl(e), i = ro(n, r);
			i.tag = 2, t != null && (i.callback = t), t = io(e, i, r), t !== null && (gl(t, e, r, n), ao(t, e, r));
		}
	};
	function bs(e, t, n, r, i, a, o) {
		return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, a, o) : t.prototype && t.prototype.isPureReactComponent ? !jr(n, r) || !jr(i, a) : !0;
	}
	function xs(e, t, n) {
		var r = !1, i = Ki, a = t.contextType;
		return typeof a == "object" && a ? a = Ya(a) : (i = Zi(t) ? Yi : qi.current, r = t.contextTypes, a = (r = r != null) ? Xi(e, i) : Ki), t = new t(n, a), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = ys, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = a), t;
	}
	function Ss(e, t, n, r) {
		e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && ys.enqueueReplaceState(t, t.state, null);
	}
	function Cs(e, t, n, r) {
		var i = e.stateNode;
		i.props = n, i.state = e.memoizedState, i.refs = {}, to(e);
		var a = t.contextType;
		typeof a == "object" && a ? i.context = Ya(a) : (a = Zi(t) ? Yi : qi.current, i.context = Xi(e, a)), i.state = e.memoizedState, a = t.getDerivedStateFromProps, typeof a == "function" && (vs(e, t, a, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && ys.enqueueReplaceState(i, i.state, null), so(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308);
	}
	function ws(e, t) {
		try {
			var n = "", r = t;
			do
				n += ce(r), r = r.return;
			while (r);
			var i = n;
		} catch (e) {
			i = "\nError generating stack: " + e.message + "\n" + e.stack;
		}
		return {
			value: e,
			source: t,
			stack: i,
			digest: null
		};
	}
	function Ts(e, t, n) {
		return {
			value: e,
			source: null,
			stack: n ?? null,
			digest: t ?? null
		};
	}
	function Es(e, t) {
		try {
			console.error(t.value);
		} catch (e) {
			setTimeout(function() {
				throw e;
			});
		}
	}
	var Ds = typeof WeakMap == "function" ? WeakMap : Map;
	function Os(e, t, n) {
		n = ro(-1, n), n.tag = 3, n.payload = { element: null };
		var r = t.value;
		return n.callback = function() {
			il || (il = !0, al = r), Es(e, t);
		}, n;
	}
	function ks(e, t, n) {
		n = ro(-1, n), n.tag = 3;
		var r = e.type.getDerivedStateFromError;
		if (typeof r == "function") {
			var i = t.value;
			n.payload = function() {
				return r(i);
			}, n.callback = function() {
				Es(e, t);
			};
		}
		var a = e.stateNode;
		return a !== null && typeof a.componentDidCatch == "function" && (n.callback = function() {
			Es(e, t), typeof r != "function" && (ol === null ? ol = new Set([this]) : ol.add(this));
			var n = t.stack;
			this.componentDidCatch(t.value, { componentStack: n === null ? "" : n });
		}), n;
	}
	function As(e, t, n) {
		var r = e.pingCache;
		if (r === null) {
			r = e.pingCache = new Ds();
			var i = /* @__PURE__ */ new Set();
			r.set(t, i);
		} else i = r.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), r.set(t, i));
		i.has(n) || (i.add(n), e = Bl.bind(null, e, t, n), t.then(e, e));
	}
	function js(e) {
		do {
			var t;
			if ((t = e.tag === 13) && (t = e.memoizedState, t = t === null ? !0 : t.dehydrated !== null), t) return e;
			e = e.return;
		} while (e !== null);
		return null;
	}
	function Ms(e, t, n, r, i) {
		return e.mode & 1 ? (e.flags |= 65536, e.lanes = i, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = ro(-1, 1), t.tag = 2, io(n, t, 1))), n.lanes |= 1), e);
	}
	var Ns = C.ReactCurrentOwner, Ps = !1;
	function Fs(e, t, n, r) {
		t.child = e === null ? Ba(t, null, n, r) : za(t, e.child, n, r);
	}
	function Is(e, t, n, r, i) {
		n = n.render;
		var a = t.ref;
		return Ja(t, i), r = jo(e, t, n, r, a, i), n = Mo(), e !== null && !Ps ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, nc(e, t, i)) : (G && n && ba(t), t.flags |= 1, Fs(e, t, r, i), t.child);
	}
	function Ls(e, t, n, r, i) {
		if (e === null) {
			var a = n.type;
			return typeof a == "function" && !Jl(a) && a.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = a, Rs(e, t, a, r, i)) : (e = Zl(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
		}
		if (a = e.child, (e.lanes & i) === 0) {
			var o = a.memoizedProps;
			if (n = n.compare, n = n === null ? jr : n, n(o, r) && e.ref === t.ref) return nc(e, t, i);
		}
		return t.flags |= 1, e = Xl(a, r), e.ref = t.ref, e.return = t, t.child = e;
	}
	function Rs(e, t, n, r, i) {
		if (e !== null) {
			var a = e.memoizedProps;
			if (jr(a, r) && e.ref === t.ref) if (Ps = !1, t.pendingProps = r = a, (e.lanes & i) !== 0) e.flags & 131072 && (Ps = !0);
			else return t.lanes = e.lanes, nc(e, t, i);
		}
		return Vs(e, t, n, r, i);
	}
	function zs(e, t, n) {
		var r = t.pendingProps, i = r.children, a = e === null ? null : e.memoizedState;
		if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = {
			baseLanes: 0,
			cachePool: null,
			transitions: null
		}, W(qc, Kc), Kc |= n;
		else {
			if (!(n & 1073741824)) return e = a === null ? n : a.baseLanes | n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
				baseLanes: e,
				cachePool: null,
				transitions: null
			}, t.updateQueue = null, W(qc, Kc), Kc |= e, null;
			t.memoizedState = {
				baseLanes: 0,
				cachePool: null,
				transitions: null
			}, r = a === null ? n : a.baseLanes, W(qc, Kc), Kc |= r;
		}
		else a === null ? r = n : (r = a.baseLanes | n, t.memoizedState = null), W(qc, Kc), Kc |= r;
		return Fs(e, t, i, n), t.child;
	}
	function Bs(e, t) {
		var n = t.ref;
		(e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
	}
	function Vs(e, t, n, r, i) {
		var a = Zi(n) ? Yi : qi.current;
		return a = Xi(t, a), Ja(t, i), n = jo(e, t, n, r, a, i), r = Mo(), e !== null && !Ps ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, nc(e, t, i)) : (G && r && ba(t), t.flags |= 1, Fs(e, t, n, i), t.child);
	}
	function Hs(e, t, n, r, i) {
		if (Zi(n)) {
			var a = !0;
			ta(t);
		} else a = !1;
		if (Ja(t, i), t.stateNode === null) tc(e, t), xs(t, n, r), Cs(t, n, r, i), r = !0;
		else if (e === null) {
			var o = t.stateNode, s = t.memoizedProps;
			o.props = s;
			var c = o.context, l = n.contextType;
			typeof l == "object" && l ? l = Ya(l) : (l = Zi(n) ? Yi : qi.current, l = Xi(t, l));
			var u = n.getDerivedStateFromProps, d = typeof u == "function" || typeof o.getSnapshotBeforeUpdate == "function";
			d || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (s !== r || c !== l) && Ss(t, o, r, l), eo = !1;
			var f = t.memoizedState;
			o.state = f, so(t, r, o, i), c = t.memoizedState, s !== r || f !== c || Ji.current || eo ? (typeof u == "function" && (vs(t, n, u, r), c = t.memoizedState), (s = eo || bs(t, n, s, r, f, c, l)) ? (d || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = c), o.props = r, o.state = c, o.context = l, r = s) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
		} else {
			o = t.stateNode, no(e, t), s = t.memoizedProps, l = t.type === t.elementType ? s : _s(t.type, s), o.props = l, d = t.pendingProps, f = o.context, c = n.contextType, typeof c == "object" && c ? c = Ya(c) : (c = Zi(n) ? Yi : qi.current, c = Xi(t, c));
			var p = n.getDerivedStateFromProps;
			(u = typeof p == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (s !== d || f !== c) && Ss(t, o, r, c), eo = !1, f = t.memoizedState, o.state = f, so(t, r, o, i);
			var m = t.memoizedState;
			s !== d || f !== m || Ji.current || eo ? (typeof p == "function" && (vs(t, n, p, r), m = t.memoizedState), (l = eo || bs(t, n, l, r, f, m, c) || !1) ? (u || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, m, c), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, m, c)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = m), o.props = r, o.state = m, o.context = c, r = l) : (typeof o.componentDidUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1);
		}
		return Us(e, t, n, r, a, i);
	}
	function Us(e, t, n, r, i, a) {
		Bs(e, t);
		var o = (t.flags & 128) != 0;
		if (!r && !o) return i && na(t, n, !1), nc(e, t, a);
		r = t.stateNode, Ns.current = t;
		var s = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
		return t.flags |= 1, e !== null && o ? (t.child = za(t, e.child, null, a), t.child = za(t, null, s, a)) : Fs(e, t, s, a), t.memoizedState = r.state, i && na(t, n, !0), t.child;
	}
	function Ws(e) {
		var t = e.stateNode;
		t.pendingContext ? $i(e, t.pendingContext, t.pendingContext !== t.context) : t.context && $i(e, t.context, !1), ho(e, t.containerInfo);
	}
	function Gs(e, t, n, r, i) {
		return Ma(), Na(i), t.flags |= 256, Fs(e, t, n, r), t.child;
	}
	var Ks = {
		dehydrated: null,
		treeContext: null,
		retryLane: 0
	};
	function qs(e) {
		return {
			baseLanes: e,
			cachePool: null,
			transitions: null
		};
	}
	function Js(e, t, n) {
		var r = t.pendingProps, i = K.current, a = !1, o = (t.flags & 128) != 0, s;
		if ((s = o) || (s = e !== null && e.memoizedState === null ? !1 : (i & 2) != 0), s ? (a = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), W(K, i & 1), e === null) return Oa(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (o = r.children, e = r.fallback, a ? (r = t.mode, a = t.child, o = {
			mode: "hidden",
			children: o
		}, !(r & 1) && a !== null ? (a.childLanes = 0, a.pendingProps = o) : a = $l(o, r, 0, null), e = Ql(e, r, n, null), a.return = t, e.return = t, a.sibling = e, t.child = a, t.child.memoizedState = qs(n), t.memoizedState = Ks, e) : Ys(t, o));
		if (i = e.memoizedState, i !== null && (s = i.dehydrated, s !== null)) return Zs(e, t, o, r, s, i, n);
		if (a) {
			a = r.fallback, o = t.mode, i = e.child, s = i.sibling;
			var c = {
				mode: "hidden",
				children: r.children
			};
			return !(o & 1) && t.child !== i ? (r = t.child, r.childLanes = 0, r.pendingProps = c, t.deletions = null) : (r = Xl(i, c), r.subtreeFlags = i.subtreeFlags & 14680064), s === null ? (a = Ql(a, o, n, null), a.flags |= 2) : a = Xl(s, a), a.return = t, r.return = t, r.sibling = a, t.child = r, r = a, a = t.child, o = e.child.memoizedState, o = o === null ? qs(n) : {
				baseLanes: o.baseLanes | n,
				cachePool: null,
				transitions: o.transitions
			}, a.memoizedState = o, a.childLanes = e.childLanes & ~n, t.memoizedState = Ks, r;
		}
		return a = e.child, e = a.sibling, r = Xl(a, {
			mode: "visible",
			children: r.children
		}), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
	}
	function Ys(e, t) {
		return t = $l({
			mode: "visible",
			children: t
		}, e.mode, 0, null), t.return = e, e.child = t;
	}
	function Xs(e, t, n, r) {
		return r !== null && Na(r), za(t, e.child, null, n), e = Ys(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
	}
	function Zs(e, t, n, i, a, o, s) {
		if (n) return t.flags & 256 ? (t.flags &= -257, i = Ts(Error(r(422))), Xs(e, t, s, i)) : t.memoizedState === null ? (o = i.fallback, a = t.mode, i = $l({
			mode: "visible",
			children: i.children
		}, a, 0, null), o = Ql(o, a, s, null), o.flags |= 2, i.return = t, o.return = t, i.sibling = o, t.child = i, t.mode & 1 && za(t, e.child, null, s), t.child.memoizedState = qs(s), t.memoizedState = Ks, o) : (t.child = e.child, t.flags |= 128, null);
		if (!(t.mode & 1)) return Xs(e, t, s, null);
		if (a.data === "$!") {
			if (i = a.nextSibling && a.nextSibling.dataset, i) var c = i.dgst;
			return i = c, o = Error(r(419)), i = Ts(o, i, void 0), Xs(e, t, s, i);
		}
		if (c = (s & e.childLanes) !== 0, Ps || c) {
			if (i = Uc, i !== null) {
				switch (s & -s) {
					case 4:
						a = 2;
						break;
					case 16:
						a = 8;
						break;
					case 64:
					case 128:
					case 256:
					case 512:
					case 1024:
					case 2048:
					case 4096:
					case 8192:
					case 16384:
					case 32768:
					case 65536:
					case 131072:
					case 262144:
					case 524288:
					case 1048576:
					case 2097152:
					case 4194304:
					case 8388608:
					case 16777216:
					case 33554432:
					case 67108864:
						a = 32;
						break;
					case 536870912:
						a = 268435456;
						break;
					default: a = 0;
				}
				a = (a & (i.suspendedLanes | s)) === 0 ? a : 0, a !== 0 && a !== o.retryLane && (o.retryLane = a, $a(e, a), gl(i, e, a, -1));
			}
			return Al(), i = Ts(Error(r(421))), Xs(e, t, s, i);
		}
		return a.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Hl.bind(null, e), a._reactRetry = t, null) : (e = o.treeContext, Ca = H(a.nextSibling), Sa = t, G = !0, wa = null, e !== null && (pa[ma++] = ga, pa[ma++] = _a, pa[ma++] = ha, ga = e.id, _a = e.overflow, ha = t), t = Ys(t, i.children), t.flags |= 4096, t);
	}
	function Qs(e, t, n) {
		e.lanes |= t;
		var r = e.alternate;
		r !== null && (r.lanes |= t), qa(e.return, t, n);
	}
	function $s(e, t, n, r, i) {
		var a = e.memoizedState;
		a === null ? e.memoizedState = {
			isBackwards: t,
			rendering: null,
			renderingStartTime: 0,
			last: r,
			tail: n,
			tailMode: i
		} : (a.isBackwards = t, a.rendering = null, a.renderingStartTime = 0, a.last = r, a.tail = n, a.tailMode = i);
	}
	function ec(e, t, n) {
		var r = t.pendingProps, i = r.revealOrder, a = r.tail;
		if (Fs(e, t, r.children, n), r = K.current, r & 2) r = r & 1 | 2, t.flags |= 128;
		else {
			if (e !== null && e.flags & 128) a: for (e = t.child; e !== null;) {
				if (e.tag === 13) e.memoizedState !== null && Qs(e, n, t);
				else if (e.tag === 19) Qs(e, n, t);
				else if (e.child !== null) {
					e.child.return = e, e = e.child;
					continue;
				}
				if (e === t) break a;
				for (; e.sibling === null;) {
					if (e.return === null || e.return === t) break a;
					e = e.return;
				}
				e.sibling.return = e.return, e = e.sibling;
			}
			r &= 1;
		}
		if (W(K, r), !(t.mode & 1)) t.memoizedState = null;
		else switch (i) {
			case "forwards":
				for (n = t.child, i = null; n !== null;) e = n.alternate, e !== null && yo(e) === null && (i = n), n = n.sibling;
				n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), $s(t, !1, i, n, a);
				break;
			case "backwards":
				for (n = null, i = t.child, t.child = null; i !== null;) {
					if (e = i.alternate, e !== null && yo(e) === null) {
						t.child = i;
						break;
					}
					e = i.sibling, i.sibling = n, n = i, i = e;
				}
				$s(t, !0, n, null, a);
				break;
			case "together":
				$s(t, !1, null, null, void 0);
				break;
			default: t.memoizedState = null;
		}
		return t.child;
	}
	function tc(e, t) {
		!(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
	}
	function nc(e, t, n) {
		if (e !== null && (t.dependencies = e.dependencies), Xc |= t.lanes, (n & t.childLanes) === 0) return null;
		if (e !== null && t.child !== e.child) throw Error(r(153));
		if (t.child !== null) {
			for (e = t.child, n = Xl(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = Xl(e, e.pendingProps), n.return = t;
			n.sibling = null;
		}
		return t.child;
	}
	function rc(e, t, n) {
		switch (t.tag) {
			case 3:
				Ws(t), Ma();
				break;
			case 5:
				_o(t);
				break;
			case 1:
				Zi(t.type) && ta(t);
				break;
			case 4:
				ho(t, t.stateNode.containerInfo);
				break;
			case 10:
				var r = t.type._context, i = t.memoizedProps.value;
				W(Va, r._currentValue), r._currentValue = i;
				break;
			case 13:
				if (r = t.memoizedState, r !== null) return r.dehydrated === null ? (n & t.child.childLanes) === 0 ? (W(K, K.current & 1), e = nc(e, t, n), e === null ? null : e.sibling) : Js(e, t, n) : (W(K, K.current & 1), t.flags |= 128, null);
				W(K, K.current & 1);
				break;
			case 19:
				if (r = (n & t.childLanes) !== 0, e.flags & 128) {
					if (r) return ec(e, t, n);
					t.flags |= 128;
				}
				if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), W(K, K.current), r) break;
				return null;
			case 22:
			case 23: return t.lanes = 0, zs(e, t, n);
		}
		return nc(e, t, n);
	}
	var ic = function(e, t) {
		for (var n = t.child; n !== null;) {
			if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
			else if (n.tag !== 4 && n.child !== null) {
				n.child.return = n, n = n.child;
				continue;
			}
			if (n === t) break;
			for (; n.sibling === null;) {
				if (n.return === null || n.return === t) return;
				n = n.return;
			}
			n.sibling.return = n.return, n = n.sibling;
		}
	}, ac = function(e, t, n, r) {
		var i = e.memoizedProps;
		if (i !== r) {
			e = t.stateNode, mo(uo.current);
			var o = null;
			switch (n) {
				case "input":
					i = _e(e, i), r = _e(e, r), o = [];
					break;
				case "select":
					i = F({}, i, { value: void 0 }), r = F({}, r, { value: void 0 }), o = [];
					break;
				case "textarea":
					i = Te(e, i), r = Te(e, r), o = [];
					break;
				default: typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = xi);
			}
			Re(n, r);
			var s;
			for (u in n = null, i) if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null) if (u === "style") {
				var c = i[u];
				for (s in c) c.hasOwnProperty(s) && (n ||= {}, n[s] = "");
			} else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (a.hasOwnProperty(u) ? o ||= [] : (o ||= []).push(u, null));
			for (u in r) {
				var l = r[u];
				if (c = i?.[u], r.hasOwnProperty(u) && l !== c && (l != null || c != null)) if (u === "style") if (c) {
					for (s in c) !c.hasOwnProperty(s) || l && l.hasOwnProperty(s) || (n ||= {}, n[s] = "");
					for (s in l) l.hasOwnProperty(s) && c[s] !== l[s] && (n ||= {}, n[s] = l[s]);
				} else n || (o ||= [], o.push(u, n)), n = l;
				else u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, c = c ? c.__html : void 0, l != null && c !== l && (o ||= []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (o ||= []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (a.hasOwnProperty(u) ? (l != null && u === "onScroll" && V("scroll", e), o || c === l || (o = [])) : (o ||= []).push(u, l));
			}
			n && (o ||= []).push("style", n);
			var u = o;
			(t.updateQueue = u) && (t.flags |= 4);
		}
	}, oc = function(e, t, n, r) {
		n !== r && (t.flags |= 4);
	};
	function sc(e, t) {
		if (!G) switch (e.tailMode) {
			case "hidden":
				t = e.tail;
				for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
				n === null ? e.tail = null : n.sibling = null;
				break;
			case "collapsed":
				n = e.tail;
				for (var r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
				r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
		}
	}
	function cc(e) {
		var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
		if (t) for (var i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 14680064, r |= i.flags & 14680064, i.return = e, i = i.sibling;
		else for (i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
		return e.subtreeFlags |= r, e.childLanes = n, t;
	}
	function lc(e, t, n) {
		var i = t.pendingProps;
		switch (xa(t), t.tag) {
			case 2:
			case 16:
			case 15:
			case 0:
			case 11:
			case 7:
			case 8:
			case 12:
			case 9:
			case 14: return cc(t), null;
			case 1: return Zi(t.type) && Qi(), cc(t), null;
			case 3: return i = t.stateNode, go(), U(Ji), U(qi), xo(), i.pendingContext && (i.context = i.pendingContext, i.pendingContext = null), (e === null || e.child === null) && (Aa(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, wa !== null && (bl(wa), wa = null))), cc(t), null;
			case 5:
				vo(t);
				var o = mo(po.current);
				if (n = t.type, e !== null && t.stateNode != null) ac(e, t, n, i, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
				else {
					if (!i) {
						if (t.stateNode === null) throw Error(r(166));
						return cc(t), null;
					}
					if (e = mo(uo.current), Aa(t)) {
						i = t.stateNode, n = t.type;
						var s = t.memoizedProps;
						switch (i[Ni] = t, i[Pi] = s, e = (t.mode & 1) != 0, n) {
							case "dialog":
								V("cancel", i), V("close", i);
								break;
							case "iframe":
							case "object":
							case "embed":
								V("load", i);
								break;
							case "video":
							case "audio":
								for (o = 0; o < ii.length; o++) V(ii[o], i);
								break;
							case "source":
								V("error", i);
								break;
							case "img":
							case "image":
							case "link":
								V("error", i), V("load", i);
								break;
							case "details":
								V("toggle", i);
								break;
							case "input":
								ve(i, s), V("invalid", i);
								break;
							case "select":
								i._wrapperState = { wasMultiple: !!s.multiple }, V("invalid", i);
								break;
							case "textarea": Ee(i, s), V("invalid", i);
						}
						for (var c in Re(n, s), o = null, s) if (s.hasOwnProperty(c)) {
							var l = s[c];
							c === "children" ? typeof l == "string" ? i.textContent !== l && (!0 !== s.suppressHydrationWarning && bi(i.textContent, l, e), o = ["children", l]) : typeof l == "number" && i.textContent !== "" + l && (!0 !== s.suppressHydrationWarning && bi(i.textContent, l, e), o = ["children", "" + l]) : a.hasOwnProperty(c) && l != null && c === "onScroll" && V("scroll", i);
						}
						switch (n) {
							case "input":
								me(i), xe(i, s, !0);
								break;
							case "textarea":
								me(i), Oe(i);
								break;
							case "select":
							case "option": break;
							default: typeof s.onClick == "function" && (i.onclick = xi);
						}
						i = o, t.updateQueue = i, i !== null && (t.flags |= 4);
					} else {
						c = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = ke(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = c.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof i.is == "string" ? e = c.createElement(n, { is: i.is }) : (e = c.createElement(n), n === "select" && (c = e, i.multiple ? c.multiple = !0 : i.size && (c.size = i.size))) : e = c.createElementNS(e, n), e[Ni] = t, e[Pi] = i, ic(e, t, !1, !1), t.stateNode = e;
						a: {
							switch (c = ze(n, i), n) {
								case "dialog":
									V("cancel", e), V("close", e), o = i;
									break;
								case "iframe":
								case "object":
								case "embed":
									V("load", e), o = i;
									break;
								case "video":
								case "audio":
									for (o = 0; o < ii.length; o++) V(ii[o], e);
									o = i;
									break;
								case "source":
									V("error", e), o = i;
									break;
								case "img":
								case "image":
								case "link":
									V("error", e), V("load", e), o = i;
									break;
								case "details":
									V("toggle", e), o = i;
									break;
								case "input":
									ve(e, i), o = _e(e, i), V("invalid", e);
									break;
								case "option":
									o = i;
									break;
								case "select":
									e._wrapperState = { wasMultiple: !!i.multiple }, o = F({}, i, { value: void 0 }), V("invalid", e);
									break;
								case "textarea":
									Ee(e, i), o = Te(e, i), V("invalid", e);
									break;
								default: o = i;
							}
							for (s in Re(n, o), l = o, l) if (l.hasOwnProperty(s)) {
								var u = l[s];
								s === "style" ? Ie(e, u) : s === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, u != null && Me(e, u)) : s === "children" ? typeof u == "string" ? (n !== "textarea" || u !== "") && Ne(e, u) : typeof u == "number" && Ne(e, "" + u) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (a.hasOwnProperty(s) ? u != null && s === "onScroll" && V("scroll", e) : u != null && S(e, s, u, c));
							}
							switch (n) {
								case "input":
									me(e), xe(e, i, !1);
									break;
								case "textarea":
									me(e), Oe(e);
									break;
								case "option":
									i.value != null && e.setAttribute("value", "" + de(i.value));
									break;
								case "select":
									e.multiple = !!i.multiple, s = i.value, s == null ? i.defaultValue != null && we(e, !!i.multiple, i.defaultValue, !0) : we(e, !!i.multiple, s, !1);
									break;
								default: typeof o.onClick == "function" && (e.onclick = xi);
							}
							switch (n) {
								case "button":
								case "input":
								case "select":
								case "textarea":
									i = !!i.autoFocus;
									break a;
								case "img":
									i = !0;
									break a;
								default: i = !1;
							}
						}
						i && (t.flags |= 4);
					}
					t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
				}
				return cc(t), null;
			case 6:
				if (e && t.stateNode != null) oc(e, t, e.memoizedProps, i);
				else {
					if (typeof i != "string" && t.stateNode === null) throw Error(r(166));
					if (n = mo(po.current), mo(uo.current), Aa(t)) {
						if (i = t.stateNode, n = t.memoizedProps, i[Ni] = t, (s = i.nodeValue !== n) && (e = Sa, e !== null)) switch (e.tag) {
							case 3:
								bi(i.nodeValue, n, (e.mode & 1) != 0);
								break;
							case 5: !0 !== e.memoizedProps.suppressHydrationWarning && bi(i.nodeValue, n, (e.mode & 1) != 0);
						}
						s && (t.flags |= 4);
					} else i = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(i), i[Ni] = t, t.stateNode = i;
				}
				return cc(t), null;
			case 13:
				if (U(K), i = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
					if (G && Ca !== null && t.mode & 1 && !(t.flags & 128)) ja(), Ma(), t.flags |= 98560, s = !1;
					else if (s = Aa(t), i !== null && i.dehydrated !== null) {
						if (e === null) {
							if (!s) throw Error(r(318));
							if (s = t.memoizedState, s = s === null ? null : s.dehydrated, !s) throw Error(r(317));
							s[Ni] = t;
						} else Ma(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
						cc(t), s = !1;
					} else wa !== null && (bl(wa), wa = null), s = !0;
					if (!s) return t.flags & 65536 ? t : null;
				}
				return t.flags & 128 ? (t.lanes = n, t) : (i = i !== null, i !== (e !== null && e.memoizedState !== null) && i && (t.child.flags |= 8192, t.mode & 1 && (e === null || K.current & 1 ? Jc === 0 && (Jc = 3) : Al())), t.updateQueue !== null && (t.flags |= 4), cc(t), null);
			case 4: return go(), e === null && ui(t.stateNode.containerInfo), cc(t), null;
			case 10: return Ka(t.type._context), cc(t), null;
			case 17: return Zi(t.type) && Qi(), cc(t), null;
			case 19:
				if (U(K), s = t.memoizedState, s === null) return cc(t), null;
				if (i = (t.flags & 128) != 0, c = s.rendering, c === null) if (i) sc(s, !1);
				else {
					if (Jc !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null;) {
						if (c = yo(e), c !== null) {
							for (t.flags |= 128, sc(s, !1), i = c.updateQueue, i !== null && (t.updateQueue = i, t.flags |= 4), t.subtreeFlags = 0, i = n, n = t.child; n !== null;) s = n, e = i, s.flags &= 14680066, c = s.alternate, c === null ? (s.childLanes = 0, s.lanes = e, s.child = null, s.subtreeFlags = 0, s.memoizedProps = null, s.memoizedState = null, s.updateQueue = null, s.dependencies = null, s.stateNode = null) : (s.childLanes = c.childLanes, s.lanes = c.lanes, s.child = c.child, s.subtreeFlags = 0, s.deletions = null, s.memoizedProps = c.memoizedProps, s.memoizedState = c.memoizedState, s.updateQueue = c.updateQueue, s.type = c.type, e = c.dependencies, s.dependencies = e === null ? null : {
								lanes: e.lanes,
								firstContext: e.firstContext
							}), n = n.sibling;
							return W(K, K.current & 1 | 2), t.child;
						}
						e = e.sibling;
					}
					s.tail !== null && L() > nl && (t.flags |= 128, i = !0, sc(s, !1), t.lanes = 4194304);
				}
				else {
					if (!i) if (e = yo(c), e !== null) {
						if (t.flags |= 128, i = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), sc(s, !0), s.tail === null && s.tailMode === "hidden" && !c.alternate && !G) return cc(t), null;
					} else 2 * L() - s.renderingStartTime > nl && n !== 1073741824 && (t.flags |= 128, i = !0, sc(s, !1), t.lanes = 4194304);
					s.isBackwards ? (c.sibling = t.child, t.child = c) : (n = s.last, n === null ? t.child = c : n.sibling = c, s.last = c);
				}
				return s.tail === null ? (cc(t), null) : (t = s.tail, s.rendering = t, s.tail = t.sibling, s.renderingStartTime = L(), t.sibling = null, n = K.current, W(K, i ? n & 1 | 2 : n & 1), t);
			case 22:
			case 23: return El(), i = t.memoizedState !== null, e !== null && e.memoizedState !== null !== i && (t.flags |= 8192), i && t.mode & 1 ? Kc & 1073741824 && (cc(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : cc(t), null;
			case 24: return null;
			case 25: return null;
		}
		throw Error(r(156, t.tag));
	}
	function uc(e, t) {
		switch (xa(t), t.tag) {
			case 1: return Zi(t.type) && Qi(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 3: return go(), U(Ji), U(qi), xo(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
			case 5: return vo(t), null;
			case 13:
				if (U(K), e = t.memoizedState, e !== null && e.dehydrated !== null) {
					if (t.alternate === null) throw Error(r(340));
					Ma();
				}
				return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 19: return U(K), null;
			case 4: return go(), null;
			case 10: return Ka(t.type._context), null;
			case 22:
			case 23: return El(), null;
			case 24: return null;
			default: return null;
		}
	}
	var dc = !1, fc = !1, pc = typeof WeakSet == "function" ? WeakSet : Set, X = null;
	function mc(e, t) {
		var n = e.ref;
		if (n !== null) if (typeof n == "function") try {
			n(null);
		} catch (n) {
			Q(e, t, n);
		}
		else n.current = null;
	}
	function hc(e, t, n) {
		try {
			n();
		} catch (n) {
			Q(e, t, n);
		}
	}
	var gc = !1;
	function _c(e, t) {
		if (Si = hn, e = Fr(), Ir(e)) {
			if ("selectionStart" in e) var n = {
				start: e.selectionStart,
				end: e.selectionEnd
			};
			else a: {
				n = (n = e.ownerDocument) && n.defaultView || window;
				var i = n.getSelection && n.getSelection();
				if (i && i.rangeCount !== 0) {
					n = i.anchorNode;
					var a = i.anchorOffset, o = i.focusNode;
					i = i.focusOffset;
					try {
						n.nodeType, o.nodeType;
					} catch {
						n = null;
						break a;
					}
					var s = 0, c = -1, l = -1, u = 0, d = 0, f = e, p = null;
					b: for (;;) {
						for (var m; f !== n || a !== 0 && f.nodeType !== 3 || (c = s + a), f !== o || i !== 0 && f.nodeType !== 3 || (l = s + i), f.nodeType === 3 && (s += f.nodeValue.length), (m = f.firstChild) !== null;) p = f, f = m;
						for (;;) {
							if (f === e) break b;
							if (p === n && ++u === a && (c = s), p === o && ++d === i && (l = s), (m = f.nextSibling) !== null) break;
							f = p, p = f.parentNode;
						}
						f = m;
					}
					n = c === -1 || l === -1 ? null : {
						start: c,
						end: l
					};
				} else n = null;
			}
			n ||= {
				start: 0,
				end: 0
			};
		} else n = null;
		for (Ci = {
			focusedElem: e,
			selectionRange: n
		}, hn = !1, X = t; X !== null;) if (t = X, e = t.child, t.subtreeFlags & 1028 && e !== null) e.return = t, X = e;
		else for (; X !== null;) {
			t = X;
			try {
				var h = t.alternate;
				if (t.flags & 1024) switch (t.tag) {
					case 0:
					case 11:
					case 15: break;
					case 1:
						if (h !== null) {
							var g = h.memoizedProps, _ = h.memoizedState, v = t.stateNode;
							v.__reactInternalSnapshotBeforeUpdate = v.getSnapshotBeforeUpdate(t.elementType === t.type ? g : _s(t.type, g), _);
						}
						break;
					case 3:
						var y = t.stateNode.containerInfo;
						y.nodeType === 1 ? y.textContent = "" : y.nodeType === 9 && y.documentElement && y.removeChild(y.documentElement);
						break;
					case 5:
					case 6:
					case 4:
					case 17: break;
					default: throw Error(r(163));
				}
			} catch (e) {
				Q(t, t.return, e);
			}
			if (e = t.sibling, e !== null) {
				e.return = t.return, X = e;
				break;
			}
			X = t.return;
		}
		return h = gc, gc = !1, h;
	}
	function vc(e, t, n) {
		var r = t.updateQueue;
		if (r = r === null ? null : r.lastEffect, r !== null) {
			var i = r = r.next;
			do {
				if ((i.tag & e) === e) {
					var a = i.destroy;
					i.destroy = void 0, a !== void 0 && hc(t, n, a);
				}
				i = i.next;
			} while (i !== r);
		}
	}
	function yc(e, t) {
		if (t = t.updateQueue, t = t === null ? null : t.lastEffect, t !== null) {
			var n = t = t.next;
			do {
				if ((n.tag & e) === e) {
					var r = n.create;
					n.destroy = r();
				}
				n = n.next;
			} while (n !== t);
		}
	}
	function bc(e) {
		var t = e.ref;
		if (t !== null) {
			var n = e.stateNode;
			switch (e.tag) {
				case 5:
					e = n;
					break;
				default: e = n;
			}
			typeof t == "function" ? t(e) : t.current = e;
		}
	}
	function xc(e) {
		var t = e.alternate;
		t !== null && (e.alternate = null, xc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Ni], delete t[Pi], delete t[Ii], delete t[Li], delete t[Ri])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
	}
	function Sc(e) {
		return e.tag === 5 || e.tag === 3 || e.tag === 4;
	}
	function Cc(e) {
		a: for (;;) {
			for (; e.sibling === null;) {
				if (e.return === null || Sc(e.return)) return null;
				e = e.return;
			}
			for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
				if (e.flags & 2 || e.child === null || e.tag === 4) continue a;
				e.child.return = e, e = e.child;
			}
			if (!(e.flags & 2)) return e.stateNode;
		}
	}
	function wc(e, t, n) {
		var r = e.tag;
		if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = xi));
		else if (r !== 4 && (e = e.child, e !== null)) for (wc(e, t, n), e = e.sibling; e !== null;) wc(e, t, n), e = e.sibling;
	}
	function Tc(e, t, n) {
		var r = e.tag;
		if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
		else if (r !== 4 && (e = e.child, e !== null)) for (Tc(e, t, n), e = e.sibling; e !== null;) Tc(e, t, n), e = e.sibling;
	}
	var Ec = null, Dc = !1;
	function Oc(e, t, n) {
		for (n = n.child; n !== null;) kc(e, t, n), n = n.sibling;
	}
	function kc(e, t, n) {
		if (Et && typeof Et.onCommitFiberUnmount == "function") try {
			Et.onCommitFiberUnmount(Tt, n);
		} catch {}
		switch (n.tag) {
			case 5: fc || mc(n, t);
			case 6:
				var r = Ec, i = Dc;
				Ec = null, Oc(e, t, n), Ec = r, Dc = i, Ec !== null && (Dc ? (e = Ec, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Ec.removeChild(n.stateNode));
				break;
			case 18:
				Ec !== null && (Dc ? (e = Ec, n = n.stateNode, e.nodeType === 8 ? Ai(e.parentNode, n) : e.nodeType === 1 && Ai(e, n), pn(e)) : Ai(Ec, n.stateNode));
				break;
			case 4:
				r = Ec, i = Dc, Ec = n.stateNode.containerInfo, Dc = !0, Oc(e, t, n), Ec = r, Dc = i;
				break;
			case 0:
			case 11:
			case 14:
			case 15:
				if (!fc && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
					i = r = r.next;
					do {
						var a = i, o = a.destroy;
						a = a.tag, o !== void 0 && (a & 2 || a & 4) && hc(n, t, o), i = i.next;
					} while (i !== r);
				}
				Oc(e, t, n);
				break;
			case 1:
				if (!fc && (mc(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
					r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
				} catch (e) {
					Q(n, t, e);
				}
				Oc(e, t, n);
				break;
			case 21:
				Oc(e, t, n);
				break;
			case 22:
				n.mode & 1 ? (fc = (r = fc) || n.memoizedState !== null, Oc(e, t, n), fc = r) : Oc(e, t, n);
				break;
			default: Oc(e, t, n);
		}
	}
	function Ac(e) {
		var t = e.updateQueue;
		if (t !== null) {
			e.updateQueue = null;
			var n = e.stateNode;
			n === null && (n = e.stateNode = new pc()), t.forEach(function(t) {
				var r = Ul.bind(null, e, t);
				n.has(t) || (n.add(t), t.then(r, r));
			});
		}
	}
	function jc(e, t) {
		var n = t.deletions;
		if (n !== null) for (var i = 0; i < n.length; i++) {
			var a = n[i];
			try {
				var o = e, s = t, c = s;
				a: for (; c !== null;) {
					switch (c.tag) {
						case 5:
							Ec = c.stateNode, Dc = !1;
							break a;
						case 3:
							Ec = c.stateNode.containerInfo, Dc = !0;
							break a;
						case 4:
							Ec = c.stateNode.containerInfo, Dc = !0;
							break a;
					}
					c = c.return;
				}
				if (Ec === null) throw Error(r(160));
				kc(o, s, a), Ec = null, Dc = !1;
				var l = a.alternate;
				l !== null && (l.return = null), a.return = null;
			} catch (e) {
				Q(a, t, e);
			}
		}
		if (t.subtreeFlags & 12854) for (t = t.child; t !== null;) Mc(t, e), t = t.sibling;
	}
	function Mc(e, t) {
		var n = e.alternate, i = e.flags;
		switch (e.tag) {
			case 0:
			case 11:
			case 14:
			case 15:
				if (jc(t, e), Nc(e), i & 4) {
					try {
						vc(3, e, e.return), yc(3, e);
					} catch (t) {
						Q(e, e.return, t);
					}
					try {
						vc(5, e, e.return);
					} catch (t) {
						Q(e, e.return, t);
					}
				}
				break;
			case 1:
				jc(t, e), Nc(e), i & 512 && n !== null && mc(n, n.return);
				break;
			case 5:
				if (jc(t, e), Nc(e), i & 512 && n !== null && mc(n, n.return), e.flags & 32) {
					var a = e.stateNode;
					try {
						Ne(a, "");
					} catch (t) {
						Q(e, e.return, t);
					}
				}
				if (i & 4 && (a = e.stateNode, a != null)) {
					var o = e.memoizedProps, s = n === null ? o : n.memoizedProps, c = e.type, l = e.updateQueue;
					if (e.updateQueue = null, l !== null) try {
						c === "input" && o.type === "radio" && o.name != null && ye(a, o), ze(c, s);
						var u = ze(c, o);
						for (s = 0; s < l.length; s += 2) {
							var d = l[s], f = l[s + 1];
							d === "style" ? Ie(a, f) : d === "dangerouslySetInnerHTML" ? Me(a, f) : d === "children" ? Ne(a, f) : S(a, d, f, u);
						}
						switch (c) {
							case "input":
								be(a, o);
								break;
							case "textarea":
								De(a, o);
								break;
							case "select":
								var p = a._wrapperState.wasMultiple;
								a._wrapperState.wasMultiple = !!o.multiple;
								var m = o.value;
								m == null ? p !== !!o.multiple && (o.defaultValue == null ? we(a, !!o.multiple, o.multiple ? [] : "", !1) : we(a, !!o.multiple, o.defaultValue, !0)) : we(a, !!o.multiple, m, !1);
						}
						a[Pi] = o;
					} catch (t) {
						Q(e, e.return, t);
					}
				}
				break;
			case 6:
				if (jc(t, e), Nc(e), i & 4) {
					if (e.stateNode === null) throw Error(r(162));
					a = e.stateNode, o = e.memoizedProps;
					try {
						a.nodeValue = o;
					} catch (t) {
						Q(e, e.return, t);
					}
				}
				break;
			case 3:
				if (jc(t, e), Nc(e), i & 4 && n !== null && n.memoizedState.isDehydrated) try {
					pn(t.containerInfo);
				} catch (t) {
					Q(e, e.return, t);
				}
				break;
			case 4:
				jc(t, e), Nc(e);
				break;
			case 13:
				jc(t, e), Nc(e), a = e.child, a.flags & 8192 && (o = a.memoizedState !== null, a.stateNode.isHidden = o, !o || a.alternate !== null && a.alternate.memoizedState !== null || (tl = L())), i & 4 && Ac(e);
				break;
			case 22:
				if (d = n !== null && n.memoizedState !== null, e.mode & 1 ? (fc = (u = fc) || d, jc(t, e), fc = u) : jc(t, e), Nc(e), i & 8192) {
					if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !d && e.mode & 1) for (X = e, d = e.child; d !== null;) {
						for (f = X = d; X !== null;) {
							switch (p = X, m = p.child, p.tag) {
								case 0:
								case 11:
								case 14:
								case 15:
									vc(4, p, p.return);
									break;
								case 1:
									mc(p, p.return);
									var h = p.stateNode;
									if (typeof h.componentWillUnmount == "function") {
										i = p, n = p.return;
										try {
											t = i, h.props = t.memoizedProps, h.state = t.memoizedState, h.componentWillUnmount();
										} catch (e) {
											Q(i, n, e);
										}
									}
									break;
								case 5:
									mc(p, p.return);
									break;
								case 22: if (p.memoizedState !== null) {
									Lc(f);
									continue;
								}
							}
							m === null ? Lc(f) : (m.return = p, X = m);
						}
						d = d.sibling;
					}
					a: for (d = null, f = e;;) {
						if (f.tag === 5) {
							if (d === null) {
								d = f;
								try {
									a = f.stateNode, u ? (o = a.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (c = f.stateNode, l = f.memoizedProps.style, s = l != null && l.hasOwnProperty("display") ? l.display : null, c.style.display = I("display", s));
								} catch (t) {
									Q(e, e.return, t);
								}
							}
						} else if (f.tag === 6) {
							if (d === null) try {
								f.stateNode.nodeValue = u ? "" : f.memoizedProps;
							} catch (t) {
								Q(e, e.return, t);
							}
						} else if ((f.tag !== 22 && f.tag !== 23 || f.memoizedState === null || f === e) && f.child !== null) {
							f.child.return = f, f = f.child;
							continue;
						}
						if (f === e) break a;
						for (; f.sibling === null;) {
							if (f.return === null || f.return === e) break a;
							d === f && (d = null), f = f.return;
						}
						d === f && (d = null), f.sibling.return = f.return, f = f.sibling;
					}
				}
				break;
			case 19:
				jc(t, e), Nc(e), i & 4 && Ac(e);
				break;
			case 21: break;
			default: jc(t, e), Nc(e);
		}
	}
	function Nc(e) {
		var t = e.flags;
		if (t & 2) {
			try {
				a: {
					for (var n = e.return; n !== null;) {
						if (Sc(n)) {
							var i = n;
							break a;
						}
						n = n.return;
					}
					throw Error(r(160));
				}
				switch (i.tag) {
					case 5:
						var a = i.stateNode;
						i.flags & 32 && (Ne(a, ""), i.flags &= -33), Tc(e, Cc(e), a);
						break;
					case 3:
					case 4:
						var o = i.stateNode.containerInfo;
						wc(e, Cc(e), o);
						break;
					default: throw Error(r(161));
				}
			} catch (t) {
				Q(e, e.return, t);
			}
			e.flags &= -3;
		}
		t & 4096 && (e.flags &= -4097);
	}
	function Pc(e, t, n) {
		X = e, Fc(e, t, n);
	}
	function Fc(e, t, n) {
		for (var r = (e.mode & 1) != 0; X !== null;) {
			var i = X, a = i.child;
			if (i.tag === 22 && r) {
				var o = i.memoizedState !== null || dc;
				if (!o) {
					var s = i.alternate, c = s !== null && s.memoizedState !== null || fc;
					s = dc;
					var l = fc;
					if (dc = o, (fc = c) && !l) for (X = i; X !== null;) o = X, c = o.child, o.tag === 22 && o.memoizedState !== null || c === null ? Rc(i) : (c.return = o, X = c);
					for (; a !== null;) X = a, Fc(a, t, n), a = a.sibling;
					X = i, dc = s, fc = l;
				}
				Ic(e, t, n);
			} else i.subtreeFlags & 8772 && a !== null ? (a.return = i, X = a) : Ic(e, t, n);
		}
	}
	function Ic(e) {
		for (; X !== null;) {
			var t = X;
			if (t.flags & 8772) {
				var n = t.alternate;
				try {
					if (t.flags & 8772) switch (t.tag) {
						case 0:
						case 11:
						case 15:
							fc || yc(5, t);
							break;
						case 1:
							var i = t.stateNode;
							if (t.flags & 4 && !fc) if (n === null) i.componentDidMount();
							else {
								var a = t.elementType === t.type ? n.memoizedProps : _s(t.type, n.memoizedProps);
								i.componentDidUpdate(a, n.memoizedState, i.__reactInternalSnapshotBeforeUpdate);
							}
							var o = t.updateQueue;
							o !== null && co(t, o, i);
							break;
						case 3:
							var s = t.updateQueue;
							if (s !== null) {
								if (n = null, t.child !== null) switch (t.child.tag) {
									case 5:
										n = t.child.stateNode;
										break;
									case 1: n = t.child.stateNode;
								}
								co(t, s, n);
							}
							break;
						case 5:
							var c = t.stateNode;
							if (n === null && t.flags & 4) {
								n = c;
								var l = t.memoizedProps;
								switch (t.type) {
									case "button":
									case "input":
									case "select":
									case "textarea":
										l.autoFocus && n.focus();
										break;
									case "img": l.src && (n.src = l.src);
								}
							}
							break;
						case 6: break;
						case 4: break;
						case 12: break;
						case 13:
							if (t.memoizedState === null) {
								var u = t.alternate;
								if (u !== null) {
									var d = u.memoizedState;
									if (d !== null) {
										var f = d.dehydrated;
										f !== null && pn(f);
									}
								}
							}
							break;
						case 19:
						case 17:
						case 21:
						case 22:
						case 23:
						case 25: break;
						default: throw Error(r(163));
					}
					fc || t.flags & 512 && bc(t);
				} catch (e) {
					Q(t, t.return, e);
				}
			}
			if (t === e) {
				X = null;
				break;
			}
			if (n = t.sibling, n !== null) {
				n.return = t.return, X = n;
				break;
			}
			X = t.return;
		}
	}
	function Lc(e) {
		for (; X !== null;) {
			var t = X;
			if (t === e) {
				X = null;
				break;
			}
			var n = t.sibling;
			if (n !== null) {
				n.return = t.return, X = n;
				break;
			}
			X = t.return;
		}
	}
	function Rc(e) {
		for (; X !== null;) {
			var t = X;
			try {
				switch (t.tag) {
					case 0:
					case 11:
					case 15:
						var n = t.return;
						try {
							yc(4, t);
						} catch (e) {
							Q(t, n, e);
						}
						break;
					case 1:
						var r = t.stateNode;
						if (typeof r.componentDidMount == "function") {
							var i = t.return;
							try {
								r.componentDidMount();
							} catch (e) {
								Q(t, i, e);
							}
						}
						var a = t.return;
						try {
							bc(t);
						} catch (e) {
							Q(t, a, e);
						}
						break;
					case 5:
						var o = t.return;
						try {
							bc(t);
						} catch (e) {
							Q(t, o, e);
						}
				}
			} catch (e) {
				Q(t, t.return, e);
			}
			if (t === e) {
				X = null;
				break;
			}
			var s = t.sibling;
			if (s !== null) {
				s.return = t.return, X = s;
				break;
			}
			X = t.return;
		}
	}
	var zc = Math.ceil, Bc = C.ReactCurrentDispatcher, Vc = C.ReactCurrentOwner, Hc = C.ReactCurrentBatchConfig, Z = 0, Uc = null, Wc = null, Gc = 0, Kc = 0, qc = Gi(0), Jc = 0, Yc = null, Xc = 0, Zc = 0, Qc = 0, $c = null, el = null, tl = 0, nl = Infinity, rl = null, il = !1, al = null, ol = null, sl = !1, cl = null, ll = 0, ul = 0, dl = null, fl = -1, pl = 0;
	function ml() {
		return Z & 6 ? L() : fl === -1 ? fl = L() : fl;
	}
	function hl(e) {
		return e.mode & 1 ? Z & 2 && Gc !== 0 ? Gc & -Gc : Pa.transition === null ? (e = R, e === 0 ? (e = window.event, e = e === void 0 ? 16 : xn(e.type), e) : e) : (pl === 0 && (pl = zt()), pl) : 1;
	}
	function gl(e, t, n, i) {
		if (50 < ul) throw ul = 0, dl = null, Error(r(185));
		Vt(e, n, i), (!(Z & 2) || e !== Uc) && (e === Uc && (!(Z & 2) && (Zc |= n), Jc === 4 && Sl(e, Gc)), _l(e, i), n === 1 && Z === 0 && !(t.mode & 1) && (nl = L() + 500, ia && ca()));
	}
	function _l(e, t) {
		var n = e.callbackNode;
		Lt(e, t);
		var r = Ft(e, e === Uc ? Gc : 0);
		if (r === 0) n !== null && gt(n), e.callbackNode = null, e.callbackPriority = 0;
		else if (t = r & -r, e.callbackPriority !== t) {
			if (n != null && gt(n), t === 1) e.tag === 0 ? sa(Cl.bind(null, e)) : oa(Cl.bind(null, e)), Oi(function() {
				!(Z & 6) && ca();
			}), n = null;
			else {
				switch (Wt(r)) {
					case 1:
						n = bt;
						break;
					case 4:
						n = xt;
						break;
					case 16:
						n = St;
						break;
					case 536870912:
						n = wt;
						break;
					default: n = St;
				}
				n = Gl(n, vl.bind(null, e));
			}
			e.callbackPriority = t, e.callbackNode = n;
		}
	}
	function vl(e, t) {
		if (fl = -1, pl = 0, Z & 6) throw Error(r(327));
		var n = e.callbackNode;
		if (Rl() && e.callbackNode !== n) return null;
		var i = Ft(e, e === Uc ? Gc : 0);
		if (i === 0) return null;
		if (i & 30 || (i & e.expiredLanes) !== 0 || t) t = jl(e, i);
		else {
			t = i;
			var a = Z;
			Z |= 2;
			var o = kl();
			(Uc !== e || Gc !== t) && (rl = null, nl = L() + 500, Dl(e, t));
			do
				try {
					Nl();
					break;
				} catch (t) {
					Ol(e, t);
				}
			while (1);
			Ga(), Bc.current = o, Z = a, Wc === null ? (Uc = null, Gc = 0, t = Jc) : t = 0;
		}
		if (t !== 0) {
			if (t === 2 && (a = Rt(e), a !== 0 && (i = a, t = yl(e, a))), t === 1) throw n = Yc, Dl(e, 0), Sl(e, i), _l(e, L()), n;
			if (t === 6) Sl(e, i);
			else {
				if (a = e.current.alternate, !(i & 30) && !xl(a) && (t = jl(e, i), t === 2 && (o = Rt(e), o !== 0 && (i = o, t = yl(e, o))), t === 1)) throw n = Yc, Dl(e, 0), Sl(e, i), _l(e, L()), n;
				switch (e.finishedWork = a, e.finishedLanes = i, t) {
					case 0:
					case 1: throw Error(r(345));
					case 2:
						Il(e, el, rl);
						break;
					case 3:
						if (Sl(e, i), (i & 130023424) === i && (t = tl + 500 - L(), 10 < t)) {
							if (Ft(e, 0) !== 0) break;
							if (a = e.suspendedLanes, (a & i) !== i) {
								ml(), e.pingedLanes |= e.suspendedLanes & a;
								break;
							}
							e.timeoutHandle = Ti(Il.bind(null, e, el, rl), t);
							break;
						}
						Il(e, el, rl);
						break;
					case 4:
						if (Sl(e, i), (i & 4194240) === i) break;
						for (t = e.eventTimes, a = -1; 0 < i;) {
							var s = 31 - Ot(i);
							o = 1 << s, s = t[s], s > a && (a = s), i &= ~o;
						}
						if (i = a, i = L() - i, i = (120 > i ? 120 : 480 > i ? 480 : 1080 > i ? 1080 : 1920 > i ? 1920 : 3e3 > i ? 3e3 : 4320 > i ? 4320 : 1960 * zc(i / 1960)) - i, 10 < i) {
							e.timeoutHandle = Ti(Il.bind(null, e, el, rl), i);
							break;
						}
						Il(e, el, rl);
						break;
					case 5:
						Il(e, el, rl);
						break;
					default: throw Error(r(329));
				}
			}
		}
		return _l(e, L()), e.callbackNode === n ? vl.bind(null, e) : null;
	}
	function yl(e, t) {
		var n = $c;
		return e.current.memoizedState.isDehydrated && (Dl(e, t).flags |= 256), e = jl(e, t), e !== 2 && (t = el, el = n, t !== null && bl(t)), e;
	}
	function bl(e) {
		el === null ? el = e : el.push.apply(el, e);
	}
	function xl(e) {
		for (var t = e;;) {
			if (t.flags & 16384) {
				var n = t.updateQueue;
				if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
					var i = n[r], a = i.getSnapshot;
					i = i.value;
					try {
						if (!Ar(a(), i)) return !1;
					} catch {
						return !1;
					}
				}
			}
			if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
			else {
				if (t === e) break;
				for (; t.sibling === null;) {
					if (t.return === null || t.return === e) return !0;
					t = t.return;
				}
				t.sibling.return = t.return, t = t.sibling;
			}
		}
		return !0;
	}
	function Sl(e, t) {
		for (t &= ~Qc, t &= ~Zc, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
			var n = 31 - Ot(t), r = 1 << n;
			e[n] = -1, t &= ~r;
		}
	}
	function Cl(e) {
		if (Z & 6) throw Error(r(327));
		Rl();
		var t = Ft(e, 0);
		if (!(t & 1)) return _l(e, L()), null;
		var n = jl(e, t);
		if (e.tag !== 0 && n === 2) {
			var i = Rt(e);
			i !== 0 && (t = i, n = yl(e, i));
		}
		if (n === 1) throw n = Yc, Dl(e, 0), Sl(e, t), _l(e, L()), n;
		if (n === 6) throw Error(r(345));
		return e.finishedWork = e.current.alternate, e.finishedLanes = t, Il(e, el, rl), _l(e, L()), null;
	}
	function wl(e, t) {
		var n = Z;
		Z |= 1;
		try {
			return e(t);
		} finally {
			Z = n, Z === 0 && (nl = L() + 500, ia && ca());
		}
	}
	function Tl(e) {
		cl !== null && cl.tag === 0 && !(Z & 6) && Rl();
		var t = Z;
		Z |= 1;
		var n = Hc.transition, r = R;
		try {
			if (Hc.transition = null, R = 1, e) return e();
		} finally {
			R = r, Hc.transition = n, Z = t, !(Z & 6) && ca();
		}
	}
	function El() {
		Kc = qc.current, U(qc);
	}
	function Dl(e, t) {
		e.finishedWork = null, e.finishedLanes = 0;
		var n = e.timeoutHandle;
		if (n !== -1 && (e.timeoutHandle = -1, Ei(n)), Wc !== null) for (n = Wc.return; n !== null;) {
			var r = n;
			switch (xa(r), r.tag) {
				case 1:
					r = r.type.childContextTypes, r != null && Qi();
					break;
				case 3:
					go(), U(Ji), U(qi), xo();
					break;
				case 5:
					vo(r);
					break;
				case 4:
					go();
					break;
				case 13:
					U(K);
					break;
				case 19:
					U(K);
					break;
				case 10:
					Ka(r.type._context);
					break;
				case 22:
				case 23: El();
			}
			n = n.return;
		}
		if (Uc = e, Wc = e = Xl(e.current, null), Gc = Kc = t, Jc = 0, Yc = null, Qc = Zc = Xc = 0, el = $c = null, Xa !== null) {
			for (t = 0; t < Xa.length; t++) if (n = Xa[t], r = n.interleaved, r !== null) {
				n.interleaved = null;
				var i = r.next, a = n.pending;
				if (a !== null) {
					var o = a.next;
					a.next = i, r.next = o;
				}
				n.pending = r;
			}
			Xa = null;
		}
		return e;
	}
	function Ol(e, t) {
		do {
			var n = Wc;
			try {
				if (Ga(), So.current = ps, Eo) {
					for (var i = q.memoizedState; i !== null;) {
						var a = i.queue;
						a !== null && (a.pending = null), i = i.next;
					}
					Eo = !1;
				}
				if (wo = 0, To = J = q = null, Do = !1, Oo = 0, Vc.current = null, n === null || n.return === null) {
					Jc = 1, Yc = t, Wc = null;
					break;
				}
				a: {
					var o = e, s = n.return, c = n, l = t;
					if (t = Gc, c.flags |= 32768, typeof l == "object" && l && typeof l.then == "function") {
						var u = l, d = c, f = d.tag;
						if (!(d.mode & 1) && (f === 0 || f === 11 || f === 15)) {
							var p = d.alternate;
							p ? (d.updateQueue = p.updateQueue, d.memoizedState = p.memoizedState, d.lanes = p.lanes) : (d.updateQueue = null, d.memoizedState = null);
						}
						var m = js(s);
						if (m !== null) {
							m.flags &= -257, Ms(m, s, c, o, t), m.mode & 1 && As(o, u, t), t = m, l = u;
							var h = t.updateQueue;
							if (h === null) {
								var g = /* @__PURE__ */ new Set();
								g.add(l), t.updateQueue = g;
							} else h.add(l);
							break a;
						} else {
							if (!(t & 1)) {
								As(o, u, t), Al();
								break a;
							}
							l = Error(r(426));
						}
					} else if (G && c.mode & 1) {
						var _ = js(s);
						if (_ !== null) {
							!(_.flags & 65536) && (_.flags |= 256), Ms(_, s, c, o, t), Na(ws(l, c));
							break a;
						}
					}
					o = l = ws(l, c), Jc !== 4 && (Jc = 2), $c === null ? $c = [o] : $c.push(o), o = s;
					do {
						switch (o.tag) {
							case 3:
								o.flags |= 65536, t &= -t, o.lanes |= t;
								var v = Os(o, l, t);
								oo(o, v);
								break a;
							case 1:
								c = l;
								var y = o.type, b = o.stateNode;
								if (!(o.flags & 128) && (typeof y.getDerivedStateFromError == "function" || b !== null && typeof b.componentDidCatch == "function" && (ol === null || !ol.has(b)))) {
									o.flags |= 65536, t &= -t, o.lanes |= t;
									var x = ks(o, c, t);
									oo(o, x);
									break a;
								}
						}
						o = o.return;
					} while (o !== null);
				}
				Fl(n);
			} catch (e) {
				t = e, Wc === n && n !== null && (Wc = n = n.return);
				continue;
			}
			break;
		} while (1);
	}
	function kl() {
		var e = Bc.current;
		return Bc.current = ps, e === null ? ps : e;
	}
	function Al() {
		(Jc === 0 || Jc === 3 || Jc === 2) && (Jc = 4), Uc === null || !(Xc & 268435455) && !(Zc & 268435455) || Sl(Uc, Gc);
	}
	function jl(e, t) {
		var n = Z;
		Z |= 2;
		var i = kl();
		(Uc !== e || Gc !== t) && (rl = null, Dl(e, t));
		do
			try {
				Ml();
				break;
			} catch (t) {
				Ol(e, t);
			}
		while (1);
		if (Ga(), Z = n, Bc.current = i, Wc !== null) throw Error(r(261));
		return Uc = null, Gc = 0, Jc;
	}
	function Ml() {
		for (; Wc !== null;) Pl(Wc);
	}
	function Nl() {
		for (; Wc !== null && !_t();) Pl(Wc);
	}
	function Pl(e) {
		var t = Wl(e.alternate, e, Kc);
		e.memoizedProps = e.pendingProps, t === null ? Fl(e) : Wc = t, Vc.current = null;
	}
	function Fl(e) {
		var t = e;
		do {
			var n = t.alternate;
			if (e = t.return, t.flags & 32768) {
				if (n = uc(n, t), n !== null) {
					n.flags &= 32767, Wc = n;
					return;
				}
				if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
				else {
					Jc = 6, Wc = null;
					return;
				}
			} else if (n = lc(n, t, Kc), n !== null) {
				Wc = n;
				return;
			}
			if (t = t.sibling, t !== null) {
				Wc = t;
				return;
			}
			Wc = t = e;
		} while (t !== null);
		Jc === 0 && (Jc = 5);
	}
	function Il(e, t, n) {
		var r = R, i = Hc.transition;
		try {
			Hc.transition = null, R = 1, Ll(e, t, n, r);
		} finally {
			Hc.transition = i, R = r;
		}
		return null;
	}
	function Ll(e, t, n, i) {
		do
			Rl();
		while (cl !== null);
		if (Z & 6) throw Error(r(327));
		n = e.finishedWork;
		var a = e.finishedLanes;
		if (n === null) return null;
		if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(r(177));
		e.callbackNode = null, e.callbackPriority = 0;
		var o = n.lanes | n.childLanes;
		if (Ht(e, o), e === Uc && (Wc = Uc = null, Gc = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || sl || (sl = !0, Gl(St, function() {
			return Rl(), null;
		})), o = (n.flags & 15990) != 0, n.subtreeFlags & 15990 || o) {
			o = Hc.transition, Hc.transition = null;
			var s = R;
			R = 1;
			var c = Z;
			Z |= 4, Vc.current = null, _c(e, n), Mc(n, e), Lr(Ci), hn = !!Si, Ci = Si = null, e.current = n, Pc(n, e, a), vt(), Z = c, R = s, Hc.transition = o;
		} else e.current = n;
		if (sl && (sl = !1, cl = e, ll = a), o = e.pendingLanes, o === 0 && (ol = null), Dt(n.stateNode, i), _l(e, L()), t !== null) for (i = e.onRecoverableError, n = 0; n < t.length; n++) a = t[n], i(a.value, {
			componentStack: a.stack,
			digest: a.digest
		});
		if (il) throw il = !1, e = al, al = null, e;
		return ll & 1 && e.tag !== 0 && Rl(), o = e.pendingLanes, o & 1 ? e === dl ? ul++ : (ul = 0, dl = e) : ul = 0, ca(), null;
	}
	function Rl() {
		if (cl !== null) {
			var e = Wt(ll), t = Hc.transition, n = R;
			try {
				if (Hc.transition = null, R = 16 > e ? 16 : e, cl === null) var i = !1;
				else {
					if (e = cl, cl = null, ll = 0, Z & 6) throw Error(r(331));
					var a = Z;
					for (Z |= 4, X = e.current; X !== null;) {
						var o = X, s = o.child;
						if (X.flags & 16) {
							var c = o.deletions;
							if (c !== null) {
								for (var l = 0; l < c.length; l++) {
									var u = c[l];
									for (X = u; X !== null;) {
										var d = X;
										switch (d.tag) {
											case 0:
											case 11:
											case 15: vc(8, d, o);
										}
										var f = d.child;
										if (f !== null) f.return = d, X = f;
										else for (; X !== null;) {
											d = X;
											var p = d.sibling, m = d.return;
											if (xc(d), d === u) {
												X = null;
												break;
											}
											if (p !== null) {
												p.return = m, X = p;
												break;
											}
											X = m;
										}
									}
								}
								var h = o.alternate;
								if (h !== null) {
									var g = h.child;
									if (g !== null) {
										h.child = null;
										do {
											var _ = g.sibling;
											g.sibling = null, g = _;
										} while (g !== null);
									}
								}
								X = o;
							}
						}
						if (o.subtreeFlags & 2064 && s !== null) s.return = o, X = s;
						else b: for (; X !== null;) {
							if (o = X, o.flags & 2048) switch (o.tag) {
								case 0:
								case 11:
								case 15: vc(9, o, o.return);
							}
							var v = o.sibling;
							if (v !== null) {
								v.return = o.return, X = v;
								break b;
							}
							X = o.return;
						}
					}
					var y = e.current;
					for (X = y; X !== null;) {
						s = X;
						var b = s.child;
						if (s.subtreeFlags & 2064 && b !== null) b.return = s, X = b;
						else b: for (s = y; X !== null;) {
							if (c = X, c.flags & 2048) try {
								switch (c.tag) {
									case 0:
									case 11:
									case 15: yc(9, c);
								}
							} catch (e) {
								Q(c, c.return, e);
							}
							if (c === s) {
								X = null;
								break b;
							}
							var x = c.sibling;
							if (x !== null) {
								x.return = c.return, X = x;
								break b;
							}
							X = c.return;
						}
					}
					if (Z = a, ca(), Et && typeof Et.onPostCommitFiberRoot == "function") try {
						Et.onPostCommitFiberRoot(Tt, e);
					} catch {}
					i = !0;
				}
				return i;
			} finally {
				R = n, Hc.transition = t;
			}
		}
		return !1;
	}
	function zl(e, t, n) {
		t = ws(n, t), t = Os(e, t, 1), e = io(e, t, 1), t = ml(), e !== null && (Vt(e, 1, t), _l(e, t));
	}
	function Q(e, t, n) {
		if (e.tag === 3) zl(e, e, n);
		else for (; t !== null;) {
			if (t.tag === 3) {
				zl(t, e, n);
				break;
			} else if (t.tag === 1) {
				var r = t.stateNode;
				if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (ol === null || !ol.has(r))) {
					e = ws(n, e), e = ks(t, e, 1), t = io(t, e, 1), e = ml(), t !== null && (Vt(t, 1, e), _l(t, e));
					break;
				}
			}
			t = t.return;
		}
	}
	function Bl(e, t, n) {
		var r = e.pingCache;
		r !== null && r.delete(t), t = ml(), e.pingedLanes |= e.suspendedLanes & n, Uc === e && (Gc & n) === n && (Jc === 4 || Jc === 3 && (Gc & 130023424) === Gc && 500 > L() - tl ? Dl(e, 0) : Qc |= n), _l(e, t);
	}
	function Vl(e, t) {
		t === 0 && (e.mode & 1 ? (t = Nt, Nt <<= 1, !(Nt & 130023424) && (Nt = 4194304)) : t = 1);
		var n = ml();
		e = $a(e, t), e !== null && (Vt(e, t, n), _l(e, n));
	}
	function Hl(e) {
		var t = e.memoizedState, n = 0;
		t !== null && (n = t.retryLane), Vl(e, n);
	}
	function Ul(e, t) {
		var n = 0;
		switch (e.tag) {
			case 13:
				var i = e.stateNode, a = e.memoizedState;
				a !== null && (n = a.retryLane);
				break;
			case 19:
				i = e.stateNode;
				break;
			default: throw Error(r(314));
		}
		i !== null && i.delete(t), Vl(e, n);
	}
	var Wl = function(e, t, n) {
		if (e !== null) if (e.memoizedProps !== t.pendingProps || Ji.current) Ps = !0;
		else {
			if ((e.lanes & n) === 0 && !(t.flags & 128)) return Ps = !1, rc(e, t, n);
			Ps = !!(e.flags & 131072);
		}
		else Ps = !1, G && t.flags & 1048576 && ya(t, fa, t.index);
		switch (t.lanes = 0, t.tag) {
			case 2:
				var i = t.type;
				tc(e, t), e = t.pendingProps;
				var a = Xi(t, qi.current);
				Ja(t, n), a = jo(null, t, i, e, a, n);
				var o = Mo();
				return t.flags |= 1, typeof a == "object" && a && typeof a.render == "function" && a.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Zi(i) ? (o = !0, ta(t)) : o = !1, t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null, to(t), a.updater = ys, t.stateNode = a, a._reactInternals = t, Cs(t, i, e, n), t = Us(null, t, i, !0, o, n)) : (t.tag = 0, G && o && ba(t), Fs(null, t, a, n), t = t.child), t;
			case 16:
				i = t.elementType;
				a: {
					switch (tc(e, t), e = t.pendingProps, a = i._init, i = a(i._payload), t.type = i, a = t.tag = Yl(i), e = _s(i, e), a) {
						case 0:
							t = Vs(null, t, i, e, n);
							break a;
						case 1:
							t = Hs(null, t, i, e, n);
							break a;
						case 11:
							t = Is(null, t, i, e, n);
							break a;
						case 14:
							t = Ls(null, t, i, _s(i.type, e), n);
							break a;
					}
					throw Error(r(306, i, ""));
				}
				return t;
			case 0: return i = t.type, a = t.pendingProps, a = t.elementType === i ? a : _s(i, a), Vs(e, t, i, a, n);
			case 1: return i = t.type, a = t.pendingProps, a = t.elementType === i ? a : _s(i, a), Hs(e, t, i, a, n);
			case 3:
				a: {
					if (Ws(t), e === null) throw Error(r(387));
					i = t.pendingProps, o = t.memoizedState, a = o.element, no(e, t), so(t, i, null, n);
					var s = t.memoizedState;
					if (i = s.element, o.isDehydrated) if (o = {
						element: i,
						isDehydrated: !1,
						cache: s.cache,
						pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
						transitions: s.transitions
					}, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
						a = ws(Error(r(423)), t), t = Gs(e, t, i, n, a);
						break a;
					} else if (i !== a) {
						a = ws(Error(r(424)), t), t = Gs(e, t, i, n, a);
						break a;
					} else for (Ca = H(t.stateNode.containerInfo.firstChild), Sa = t, G = !0, wa = null, n = Ba(t, null, i, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling;
					else {
						if (Ma(), i === a) {
							t = nc(e, t, n);
							break a;
						}
						Fs(e, t, i, n);
					}
					t = t.child;
				}
				return t;
			case 5: return _o(t), e === null && Oa(t), i = t.type, a = t.pendingProps, o = e === null ? null : e.memoizedProps, s = a.children, wi(i, a) ? s = null : o !== null && wi(i, o) && (t.flags |= 32), Bs(e, t), Fs(e, t, s, n), t.child;
			case 6: return e === null && Oa(t), null;
			case 13: return Js(e, t, n);
			case 4: return ho(t, t.stateNode.containerInfo), i = t.pendingProps, e === null ? t.child = za(t, null, i, n) : Fs(e, t, i, n), t.child;
			case 11: return i = t.type, a = t.pendingProps, a = t.elementType === i ? a : _s(i, a), Is(e, t, i, a, n);
			case 7: return Fs(e, t, t.pendingProps, n), t.child;
			case 8: return Fs(e, t, t.pendingProps.children, n), t.child;
			case 12: return Fs(e, t, t.pendingProps.children, n), t.child;
			case 10:
				a: {
					if (i = t.type._context, a = t.pendingProps, o = t.memoizedProps, s = a.value, W(Va, i._currentValue), i._currentValue = s, o !== null) if (Ar(o.value, s)) {
						if (o.children === a.children && !Ji.current) {
							t = nc(e, t, n);
							break a;
						}
					} else for (o = t.child, o !== null && (o.return = t); o !== null;) {
						var c = o.dependencies;
						if (c !== null) {
							s = o.child;
							for (var l = c.firstContext; l !== null;) {
								if (l.context === i) {
									if (o.tag === 1) {
										l = ro(-1, n & -n), l.tag = 2;
										var u = o.updateQueue;
										if (u !== null) {
											u = u.shared;
											var d = u.pending;
											d === null ? l.next = l : (l.next = d.next, d.next = l), u.pending = l;
										}
									}
									o.lanes |= n, l = o.alternate, l !== null && (l.lanes |= n), qa(o.return, n, t), c.lanes |= n;
									break;
								}
								l = l.next;
							}
						} else if (o.tag === 10) s = o.type === t.type ? null : o.child;
						else if (o.tag === 18) {
							if (s = o.return, s === null) throw Error(r(341));
							s.lanes |= n, c = s.alternate, c !== null && (c.lanes |= n), qa(s, n, t), s = o.sibling;
						} else s = o.child;
						if (s !== null) s.return = o;
						else for (s = o; s !== null;) {
							if (s === t) {
								s = null;
								break;
							}
							if (o = s.sibling, o !== null) {
								o.return = s.return, s = o;
								break;
							}
							s = s.return;
						}
						o = s;
					}
					Fs(e, t, a.children, n), t = t.child;
				}
				return t;
			case 9: return a = t.type, i = t.pendingProps.children, Ja(t, n), a = Ya(a), i = i(a), t.flags |= 1, Fs(e, t, i, n), t.child;
			case 14: return i = t.type, a = _s(i, t.pendingProps), a = _s(i.type, a), Ls(e, t, i, a, n);
			case 15: return Rs(e, t, t.type, t.pendingProps, n);
			case 17: return i = t.type, a = t.pendingProps, a = t.elementType === i ? a : _s(i, a), tc(e, t), t.tag = 1, Zi(i) ? (e = !0, ta(t)) : e = !1, Ja(t, n), xs(t, i, a), Cs(t, i, a, n), Us(null, t, i, !0, e, n);
			case 19: return ec(e, t, n);
			case 22: return zs(e, t, n);
		}
		throw Error(r(156, t.tag));
	};
	function Gl(e, t) {
		return ht(e, t);
	}
	function Kl(e, t, n, r) {
		this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
	}
	function ql(e, t, n, r) {
		return new Kl(e, t, n, r);
	}
	function Jl(e) {
		return e = e.prototype, !(!e || !e.isReactComponent);
	}
	function Yl(e) {
		if (typeof e == "function") return Jl(e) ? 1 : 0;
		if (e != null) {
			if (e = e.$$typeof, e === A) return 11;
			if (e === M) return 14;
		}
		return 2;
	}
	function Xl(e, t) {
		var n = e.alternate;
		return n === null ? (n = ql(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
			lanes: t.lanes,
			firstContext: t.firstContext
		}, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
	}
	function Zl(e, t, n, i, a, o) {
		var s = 2;
		if (i = e, typeof e == "function") Jl(e) && (s = 1);
		else if (typeof e == "string") s = 5;
		else a: switch (e) {
			case E: return Ql(n.children, a, o, t);
			case D:
				s = 8, a |= 8;
				break;
			case O: return e = ql(12, n, t, a | 2), e.elementType = O, e.lanes = o, e;
			case j: return e = ql(13, n, t, a), e.elementType = j, e.lanes = o, e;
			case te: return e = ql(19, n, t, a), e.elementType = te, e.lanes = o, e;
			case ne: return $l(n, a, o, t);
			default:
				if (typeof e == "object" && e) switch (e.$$typeof) {
					case k:
						s = 10;
						break a;
					case ee:
						s = 9;
						break a;
					case A:
						s = 11;
						break a;
					case M:
						s = 14;
						break a;
					case N:
						s = 16, i = null;
						break a;
				}
				throw Error(r(130, e == null ? e : typeof e, ""));
		}
		return t = ql(s, n, t, a), t.elementType = e, t.type = i, t.lanes = o, t;
	}
	function Ql(e, t, n, r) {
		return e = ql(7, e, r, t), e.lanes = n, e;
	}
	function $l(e, t, n, r) {
		return e = ql(22, e, r, t), e.elementType = ne, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
	}
	function eu(e, t, n) {
		return e = ql(6, e, null, t), e.lanes = n, e;
	}
	function tu(e, t, n) {
		return t = ql(4, e.children === null ? [] : e.children, e.key, t), t.lanes = n, t.stateNode = {
			containerInfo: e.containerInfo,
			pendingChildren: null,
			implementation: e.implementation
		}, t;
	}
	function nu(e, t, n, r, i) {
		this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Bt(0), this.expirationTimes = Bt(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Bt(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null;
	}
	function ru(e, t, n, r, i, a, o, s, c) {
		return e = new nu(e, t, n, s, c), t === 1 ? (t = 1, !0 === a && (t |= 8)) : t = 0, a = ql(3, null, null, t), e.current = a, a.stateNode = e, a.memoizedState = {
			element: r,
			isDehydrated: n,
			cache: null,
			transitions: null,
			pendingSuspenseBoundaries: null
		}, to(a), e;
	}
	function iu(e, t, n) {
		var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
		return {
			$$typeof: T,
			key: r == null ? null : "" + r,
			children: e,
			containerInfo: t,
			implementation: n
		};
	}
	function au(e) {
		if (!e) return Ki;
		e = e._reactInternals;
		a: {
			if (lt(e) !== e || e.tag !== 1) throw Error(r(170));
			var t = e;
			do {
				switch (t.tag) {
					case 3:
						t = t.stateNode.context;
						break a;
					case 1: if (Zi(t.type)) {
						t = t.stateNode.__reactInternalMemoizedMergedChildContext;
						break a;
					}
				}
				t = t.return;
			} while (t !== null);
			throw Error(r(171));
		}
		if (e.tag === 1) {
			var n = e.type;
			if (Zi(n)) return ea(e, n, t);
		}
		return t;
	}
	function ou(e, t, n, r, i, a, o, s, c) {
		return e = ru(n, r, !0, e, i, a, o, s, c), e.context = au(null), n = e.current, r = ml(), i = hl(n), a = ro(r, i), a.callback = t ?? null, io(n, a, i), e.current.lanes = i, Vt(e, i, r), _l(e, r), e;
	}
	function su(e, t, n, r) {
		var i = t.current, a = ml(), o = hl(i);
		return n = au(n), t.context === null ? t.context = n : t.pendingContext = n, t = ro(a, o), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = io(i, t, o), e !== null && (gl(e, i, o, a), ao(e, i, o)), o;
	}
	function cu(e) {
		if (e = e.current, !e.child) return null;
		switch (e.child.tag) {
			case 5: return e.child.stateNode;
			default: return e.child.stateNode;
		}
	}
	function lu(e, t) {
		if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
			var n = e.retryLane;
			e.retryLane = n !== 0 && n < t ? n : t;
		}
	}
	function uu(e, t) {
		lu(e, t), (e = e.alternate) && lu(e, t);
	}
	function du() {
		return null;
	}
	var fu = typeof reportError == "function" ? reportError : function(e) {
		console.error(e);
	};
	function pu(e) {
		this._internalRoot = e;
	}
	mu.prototype.render = pu.prototype.render = function(e) {
		var t = this._internalRoot;
		if (t === null) throw Error(r(409));
		su(e, t, null, null);
	}, mu.prototype.unmount = pu.prototype.unmount = function() {
		var e = this._internalRoot;
		if (e !== null) {
			this._internalRoot = null;
			var t = e.containerInfo;
			Tl(function() {
				su(null, e, null, null);
			}), t[Fi] = null;
		}
	};
	function mu(e) {
		this._internalRoot = e;
	}
	mu.prototype.unstable_scheduleHydration = function(e) {
		if (e) {
			var t = Jt();
			e = {
				blockedOn: null,
				target: e,
				priority: t
			};
			for (var n = 0; n < rn.length && t !== 0 && t < rn[n].priority; n++);
			rn.splice(n, 0, e), n === 0 && ln(e);
		}
	};
	function hu(e) {
		return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
	}
	function gu(e) {
		return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
	}
	function _u() {}
	function vu(e, t, n, r, i) {
		if (i) {
			if (typeof r == "function") {
				var a = r;
				r = function() {
					var e = cu(o);
					a.call(e);
				};
			}
			var o = ou(t, r, e, 0, null, !1, !1, "", _u);
			return e._reactRootContainer = o, e[Fi] = o.current, ui(e.nodeType === 8 ? e.parentNode : e), Tl(), o;
		}
		for (; i = e.lastChild;) e.removeChild(i);
		if (typeof r == "function") {
			var s = r;
			r = function() {
				var e = cu(c);
				s.call(e);
			};
		}
		var c = ru(e, 0, !1, null, null, !1, !1, "", _u);
		return e._reactRootContainer = c, e[Fi] = c.current, ui(e.nodeType === 8 ? e.parentNode : e), Tl(function() {
			su(t, c, n, r);
		}), c;
	}
	function yu(e, t, n, r, i) {
		var a = n._reactRootContainer;
		if (a) {
			var o = a;
			if (typeof i == "function") {
				var s = i;
				i = function() {
					var e = cu(o);
					s.call(e);
				};
			}
			su(t, o, e, i);
		} else o = vu(n, t, e, i, r);
		return cu(o);
	}
	Gt = function(e) {
		switch (e.tag) {
			case 3:
				var t = e.stateNode;
				if (t.current.memoizedState.isDehydrated) {
					var n = Pt(t.pendingLanes);
					n !== 0 && (Ut(t, n | 1), _l(t, L()), !(Z & 6) && (nl = L() + 500, ca()));
				}
				break;
			case 13: Tl(function() {
				var t = $a(e, 1);
				t !== null && gl(t, e, 1, ml());
			}), uu(e, 1);
		}
	}, Kt = function(e) {
		if (e.tag === 13) {
			var t = $a(e, 134217728);
			t !== null && gl(t, e, 134217728, ml()), uu(e, 134217728);
		}
	}, qt = function(e) {
		if (e.tag === 13) {
			var t = hl(e), n = $a(e, t);
			n !== null && gl(n, e, t, ml()), uu(e, t);
		}
	}, Jt = function() {
		return R;
	}, Yt = function(e, t) {
		var n = R;
		try {
			return R = e, t();
		} finally {
			R = n;
		}
	}, He = function(e, t, n) {
		switch (t) {
			case "input":
				if (be(e, n), t = n.name, n.type === "radio" && t != null) {
					for (n = e; n.parentNode;) n = n.parentNode;
					for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + "][type=\"radio\"]"), t = 0; t < n.length; t++) {
						var i = n[t];
						if (i !== e && i.form === e.form) {
							var a = Hi(i);
							if (!a) throw Error(r(90));
							he(i), be(i, a);
						}
					}
				}
				break;
			case "textarea":
				De(e, n);
				break;
			case "select": t = n.value, t != null && we(e, !!n.multiple, t, !1);
		}
	}, Je = wl, Ye = Tl;
	var bu = {
		usingClientEntryPoint: !1,
		Events: [
			Bi,
			Vi,
			Hi,
			Ke,
			qe,
			wl
		]
	}, xu = {
		findFiberByHostInstance: zi,
		bundleType: 0,
		version: "18.3.1",
		rendererPackageName: "react-dom"
	}, Su = {
		bundleType: xu.bundleType,
		version: xu.version,
		rendererPackageName: xu.rendererPackageName,
		rendererConfig: xu.rendererConfig,
		overrideHookState: null,
		overrideHookStateDeletePath: null,
		overrideHookStateRenamePath: null,
		overrideProps: null,
		overridePropsDeletePath: null,
		overridePropsRenamePath: null,
		setErrorHandler: null,
		setSuspenseHandler: null,
		scheduleUpdate: null,
		currentDispatcherRef: C.ReactCurrentDispatcher,
		findHostInstanceByFiber: function(e) {
			return e = pt(e), e === null ? null : e.stateNode;
		},
		findFiberByHostInstance: xu.findFiberByHostInstance || du,
		findHostInstancesForRefresh: null,
		scheduleRefresh: null,
		scheduleRoot: null,
		setRefreshHandler: null,
		getCurrentFiber: null,
		reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
	};
	if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
		var Cu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
		if (!Cu.isDisabled && Cu.supportsFiber) try {
			Tt = Cu.inject(Su), Et = Cu;
		} catch {}
	}
	e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = bu, e.createPortal = function(e, t) {
		var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
		if (!hu(t)) throw Error(r(200));
		return iu(e, t, null, n);
	}, e.createRoot = function(e, t) {
		if (!hu(e)) throw Error(r(299));
		var n = !1, i = "", a = fu;
		return t != null && (!0 === t.unstable_strictMode && (n = !0), t.identifierPrefix !== void 0 && (i = t.identifierPrefix), t.onRecoverableError !== void 0 && (a = t.onRecoverableError)), t = ru(e, 1, !1, null, null, n, !1, i, a), e[Fi] = t.current, ui(e.nodeType === 8 ? e.parentNode : e), new pu(t);
	}, e.findDOMNode = function(e) {
		if (e == null) return null;
		if (e.nodeType === 1) return e;
		var t = e._reactInternals;
		if (t === void 0) throw typeof e.render == "function" ? Error(r(188)) : (e = Object.keys(e).join(","), Error(r(268, e)));
		return e = pt(t), e = e === null ? null : e.stateNode, e;
	}, e.flushSync = function(e) {
		return Tl(e);
	}, e.hydrate = function(e, t, n) {
		if (!gu(t)) throw Error(r(200));
		return yu(null, e, t, !0, n);
	}, e.hydrateRoot = function(e, t, n) {
		if (!hu(e)) throw Error(r(405));
		var i = n != null && n.hydratedSources || null, a = !1, o = "", s = fu;
		if (n != null && (!0 === n.unstable_strictMode && (a = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = ou(t, null, e, 1, n ?? null, a, !1, o, s), e[Fi] = t.current, ui(e), i) for (e = 0; e < i.length; e++) n = i[e], a = n._getVersion, a = a(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, a] : t.mutableSourceEagerHydrationData.push(n, a);
		return new mu(t);
	}, e.render = function(e, t, n) {
		if (!gu(t)) throw Error(r(200));
		return yu(null, e, t, !1, n);
	}, e.unmountComponentAtNode = function(e) {
		if (!gu(e)) throw Error(r(40));
		return e._reactRootContainer ? (Tl(function() {
			yu(null, null, e, !1, function() {
				e._reactRootContainer = null, e[Fi] = null;
			});
		}), !0) : !1;
	}, e.unstable_batchedUpdates = wl, e.unstable_renderSubtreeIntoContainer = function(e, t, n, i) {
		if (!gu(n)) throw Error(r(200));
		if (e == null || e._reactInternals === void 0) throw Error(r(38));
		return yu(e, t, n, !1, i);
	}, e.version = "18.3.1-next-f1338f8080-20240426";
})), m = /* @__PURE__ */ o(((e, t) => {
	function n() {
		if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
			__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
		} catch (e) {
			console.error(e);
		}
	}
	n(), t.exports = p();
})), h = /* @__PURE__ */ o(((e) => {
	var t = m();
	e.createRoot = t.createRoot, e.hydrateRoot = t.hydrateRoot;
})), g = function(e, t) {
	return g = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
		e.__proto__ = t;
	} || function(e, t) {
		for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
	}, g(e, t);
};
function _(e, t) {
	if (typeof t != "function" && t !== null) throw TypeError("Class extends value " + String(t) + " is not a constructor or null");
	g(e, t);
	function n() {
		this.constructor = e;
	}
	e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
}
var v = function() {
	return v = Object.assign || function(e) {
		for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
		return e;
	}, v.apply(this, arguments);
};
function y(e, t) {
	var n = {};
	for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
	return n;
}
function b(e, t, n, r) {
	function i(e) {
		return e instanceof n ? e : new n(function(t) {
			t(e);
		});
	}
	return new (n ||= Promise)(function(n, a) {
		function o(e) {
			try {
				c(r.next(e));
			} catch (e) {
				a(e);
			}
		}
		function s(e) {
			try {
				c(r.throw(e));
			} catch (e) {
				a(e);
			}
		}
		function c(e) {
			e.done ? n(e.value) : i(e.value).then(o, s);
		}
		c((r = r.apply(e, t || [])).next());
	});
}
function x(e, t) {
	var n = {
		label: 0,
		sent: function() {
			if (a[0] & 1) throw a[1];
			return a[1];
		},
		trys: [],
		ops: []
	}, r, i, a, o = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
	return o.next = s(0), o.throw = s(1), o.return = s(2), typeof Symbol == "function" && (o[Symbol.iterator] = function() {
		return this;
	}), o;
	function s(e) {
		return function(t) {
			return c([e, t]);
		};
	}
	function c(s) {
		if (r) throw TypeError("Generator is already executing.");
		for (; o && (o = 0, s[0] && (n = 0)), n;) try {
			if (r = 1, i && (a = s[0] & 2 ? i.return : s[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, s[1])).done) return a;
			switch (i = 0, a && (s = [s[0] & 2, a.value]), s[0]) {
				case 0:
				case 1:
					a = s;
					break;
				case 4: return n.label++, {
					value: s[1],
					done: !1
				};
				case 5:
					n.label++, i = s[1], s = [0];
					continue;
				case 7:
					s = n.ops.pop(), n.trys.pop();
					continue;
				default:
					if ((a = n.trys, !(a = a.length > 0 && a[a.length - 1])) && (s[0] === 6 || s[0] === 2)) {
						n = 0;
						continue;
					}
					if (s[0] === 3 && (!a || s[1] > a[0] && s[1] < a[3])) {
						n.label = s[1];
						break;
					}
					if (s[0] === 6 && n.label < a[1]) {
						n.label = a[1], a = s;
						break;
					}
					if (a && n.label < a[2]) {
						n.label = a[2], n.ops.push(s);
						break;
					}
					a[2] && n.ops.pop(), n.trys.pop();
					continue;
			}
			s = t.call(e, n);
		} catch (e) {
			s = [6, e], i = 0;
		} finally {
			r = a = 0;
		}
		if (s[0] & 5) throw s[1];
		return {
			value: s[0] ? s[1] : void 0,
			done: !0
		};
	}
}
function S(e, t) {
	var n = typeof Symbol == "function" && e[Symbol.iterator];
	if (!n) return e;
	var r = n.call(e), i, a = [], o;
	try {
		for (; (t === void 0 || t-- > 0) && !(i = r.next()).done;) a.push(i.value);
	} catch (e) {
		o = { error: e };
	} finally {
		try {
			i && !i.done && (n = r.return) && n.call(r);
		} finally {
			if (o) throw o.error;
		}
	}
	return a;
}
function C() {
	for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
	for (var r = Array(e), i = 0, t = 0; t < n; t++) for (var a = arguments[t], o = 0, s = a.length; o < s; o++, i++) r[i] = a[o];
	return r;
}
function w(e, t, n) {
	if (n || arguments.length === 2) for (var r = 0, i = t.length, a; r < i; r++) (a || !(r in t)) && (a ||= Array.prototype.slice.call(t, 0, r), a[r] = t[r]);
	return e.concat(a || Array.prototype.slice.call(t));
}
//#endregion
//#region node_modules/.pnpm/@formatjs+fast-memoize@2.2.3/node_modules/@formatjs/fast-memoize/lib/index.js
function T(e, t) {
	var n = t && t.cache ? t.cache : N, r = t && t.serializer ? t.serializer : te;
	return (t && t.strategy ? t.strategy : ee)(e, {
		cache: n,
		serializer: r
	});
}
function E(e) {
	return e == null || typeof e == "number" || typeof e == "boolean";
}
function D(e, t, n, r) {
	var i = E(r) ? r : n(r), a = t.get(i);
	return a === void 0 && (a = e.call(this, r), t.set(i, a)), a;
}
function O(e, t, n) {
	var r = Array.prototype.slice.call(arguments, 3), i = n(r), a = t.get(i);
	return a === void 0 && (a = e.apply(this, r), t.set(i, a)), a;
}
function k(e, t, n, r, i) {
	return n.bind(t, e, r, i);
}
function ee(e, t) {
	var n = e.length === 1 ? D : O;
	return k(e, this, n, t.cache.create(), t.serializer);
}
function A(e, t) {
	return k(e, this, O, t.cache.create(), t.serializer);
}
function j(e, t) {
	return k(e, this, D, t.cache.create(), t.serializer);
}
var te = function() {
	return JSON.stringify(arguments);
};
function M() {
	this.cache = Object.create(null);
}
M.prototype.get = function(e) {
	return this.cache[e];
}, M.prototype.set = function(e, t) {
	this.cache[e] = t;
};
var N = { create: function() {
	return new M();
} }, ne = {
	variadic: A,
	monadic: j
};
//#endregion
//#region node_modules/.pnpm/@formatjs+ecma402-abstract@2.2.4/node_modules/@formatjs/ecma402-abstract/lib/utils.js
function re(e, t, n) {
	if (n === void 0 && (n = Error), !e) throw new n(t);
}
T(function() {
	for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
	return new ((e = Intl.NumberFormat).bind.apply(e, w([void 0], t, !1)))();
}, { strategy: ne.variadic }), T(function() {
	for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
	return new ((e = Intl.DateTimeFormat).bind.apply(e, w([void 0], t, !1)))();
}, { strategy: ne.variadic }), T(function() {
	for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
	return new ((e = Intl.PluralRules).bind.apply(e, w([void 0], t, !1)))();
}, { strategy: ne.variadic }), T(function() {
	for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
	return new ((e = Intl.Locale).bind.apply(e, w([void 0], t, !1)))();
}, { strategy: ne.variadic }), T(function() {
	for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
	return new ((e = Intl.ListFormat).bind.apply(e, w([void 0], t, !1)))();
}, { strategy: ne.variadic });
//#endregion
//#region node_modules/.pnpm/@formatjs+icu-messageformat-parser@2.9.4/node_modules/@formatjs/icu-messageformat-parser/lib/error.js
var P;
(function(e) {
	e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})(P ||= {});
//#endregion
//#region node_modules/.pnpm/@formatjs+icu-messageformat-parser@2.9.4/node_modules/@formatjs/icu-messageformat-parser/lib/types.js
var F;
(function(e) {
	e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag";
})(F ||= {});
var ie;
(function(e) {
	e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime";
})(ie ||= {});
function ae(e) {
	return e.type === F.literal;
}
function oe(e) {
	return e.type === F.argument;
}
function se(e) {
	return e.type === F.number;
}
function ce(e) {
	return e.type === F.date;
}
function le(e) {
	return e.type === F.time;
}
function ue(e) {
	return e.type === F.select;
}
function de(e) {
	return e.type === F.plural;
}
function fe(e) {
	return e.type === F.pound;
}
function pe(e) {
	return e.type === F.tag;
}
function me(e) {
	return !!(e && typeof e == "object" && e.type === ie.number);
}
function he(e) {
	return !!(e && typeof e == "object" && e.type === ie.dateTime);
}
//#endregion
//#region node_modules/.pnpm/@formatjs+icu-messageformat-parser@2.9.4/node_modules/@formatjs/icu-messageformat-parser/lib/regex.generated.js
var ge = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, _e = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function ve(e) {
	var t = {};
	return e.replace(_e, function(e) {
		var n = e.length;
		switch (e[0]) {
			case "G":
				t.era = n === 4 ? "long" : n === 5 ? "narrow" : "short";
				break;
			case "y":
				t.year = n === 2 ? "2-digit" : "numeric";
				break;
			case "Y":
			case "u":
			case "U":
			case "r": throw RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");
			case "q":
			case "Q": throw RangeError("`q/Q` (quarter) patterns are not supported");
			case "M":
			case "L":
				t.month = [
					"numeric",
					"2-digit",
					"short",
					"long",
					"narrow"
				][n - 1];
				break;
			case "w":
			case "W": throw RangeError("`w/W` (week) patterns are not supported");
			case "d":
				t.day = ["numeric", "2-digit"][n - 1];
				break;
			case "D":
			case "F":
			case "g": throw RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
			case "E":
				t.weekday = n === 4 ? "long" : n === 5 ? "narrow" : "short";
				break;
			case "e":
				if (n < 4) throw RangeError("`e..eee` (weekday) patterns are not supported");
				t.weekday = [
					"short",
					"long",
					"narrow",
					"short"
				][n - 4];
				break;
			case "c":
				if (n < 4) throw RangeError("`c..ccc` (weekday) patterns are not supported");
				t.weekday = [
					"short",
					"long",
					"narrow",
					"short"
				][n - 4];
				break;
			case "a":
				t.hour12 = !0;
				break;
			case "b":
			case "B": throw RangeError("`b/B` (period) patterns are not supported, use `a` instead");
			case "h":
				t.hourCycle = "h12", t.hour = ["numeric", "2-digit"][n - 1];
				break;
			case "H":
				t.hourCycle = "h23", t.hour = ["numeric", "2-digit"][n - 1];
				break;
			case "K":
				t.hourCycle = "h11", t.hour = ["numeric", "2-digit"][n - 1];
				break;
			case "k":
				t.hourCycle = "h24", t.hour = ["numeric", "2-digit"][n - 1];
				break;
			case "j":
			case "J":
			case "C": throw RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
			case "m":
				t.minute = ["numeric", "2-digit"][n - 1];
				break;
			case "s":
				t.second = ["numeric", "2-digit"][n - 1];
				break;
			case "S":
			case "A": throw RangeError("`S/A` (second) patterns are not supported, use `s` instead");
			case "z":
				t.timeZoneName = n < 4 ? "short" : "long";
				break;
			case "Z":
			case "O":
			case "v":
			case "V":
			case "X":
			case "x": throw RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead");
		}
		return "";
	}), t;
}
//#endregion
//#region node_modules/.pnpm/@formatjs+icu-skeleton-parser@1.8.8/node_modules/@formatjs/icu-skeleton-parser/lib/regex.generated.js
var ye = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
//#endregion
//#region node_modules/.pnpm/@formatjs+icu-skeleton-parser@1.8.8/node_modules/@formatjs/icu-skeleton-parser/lib/number.js
function be(e) {
	if (e.length === 0) throw Error("Number skeleton cannot be empty");
	for (var t = e.split(ye).filter(function(e) {
		return e.length > 0;
	}), n = [], r = 0, i = t; r < i.length; r++) {
		var a = i[r].split("/");
		if (a.length === 0) throw Error("Invalid number skeleton");
		for (var o = a[0], s = a.slice(1), c = 0, l = s; c < l.length; c++) if (l[c].length === 0) throw Error("Invalid number skeleton");
		n.push({
			stem: o,
			options: s
		});
	}
	return n;
}
function xe(e) {
	return e.replace(/^(.*?)-/, "");
}
var Se = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, Ce = /^(@+)?(\+|#+)?[rs]?$/g, we = /(\*)(0+)|(#+)(0+)|(0+)/g, Te = /^(0+)$/;
function Ee(e) {
	var t = {};
	return e[e.length - 1] === "r" ? t.roundingPriority = "morePrecision" : e[e.length - 1] === "s" && (t.roundingPriority = "lessPrecision"), e.replace(Ce, function(e, n, r) {
		return typeof r == "string" ? r === "+" ? t.minimumSignificantDigits = n.length : n[0] === "#" ? t.maximumSignificantDigits = n.length : (t.minimumSignificantDigits = n.length, t.maximumSignificantDigits = n.length + (typeof r == "string" ? r.length : 0)) : (t.minimumSignificantDigits = n.length, t.maximumSignificantDigits = n.length), "";
	}), t;
}
function De(e) {
	switch (e) {
		case "sign-auto": return { signDisplay: "auto" };
		case "sign-accounting":
		case "()": return { currencySign: "accounting" };
		case "sign-always":
		case "+!": return { signDisplay: "always" };
		case "sign-accounting-always":
		case "()!": return {
			signDisplay: "always",
			currencySign: "accounting"
		};
		case "sign-except-zero":
		case "+?": return { signDisplay: "exceptZero" };
		case "sign-accounting-except-zero":
		case "()?": return {
			signDisplay: "exceptZero",
			currencySign: "accounting"
		};
		case "sign-never":
		case "+_": return { signDisplay: "never" };
	}
}
function Oe(e) {
	var t;
	if (e[0] === "E" && e[1] === "E" ? (t = { notation: "engineering" }, e = e.slice(2)) : e[0] === "E" && (t = { notation: "scientific" }, e = e.slice(1)), t) {
		var n = e.slice(0, 2);
		if (n === "+!" ? (t.signDisplay = "always", e = e.slice(2)) : n === "+?" && (t.signDisplay = "exceptZero", e = e.slice(2)), !Te.test(e)) throw Error("Malformed concise eng/scientific notation");
		t.minimumIntegerDigits = e.length;
	}
	return t;
}
function ke(e) {
	return De(e) || {};
}
function Ae(e) {
	for (var t = {}, n = 0, r = e; n < r.length; n++) {
		var i = r[n];
		switch (i.stem) {
			case "percent":
			case "%":
				t.style = "percent";
				continue;
			case "%x100":
				t.style = "percent", t.scale = 100;
				continue;
			case "currency":
				t.style = "currency", t.currency = i.options[0];
				continue;
			case "group-off":
			case ",_":
				t.useGrouping = !1;
				continue;
			case "precision-integer":
			case ".":
				t.maximumFractionDigits = 0;
				continue;
			case "measure-unit":
			case "unit":
				t.style = "unit", t.unit = xe(i.options[0]);
				continue;
			case "compact-short":
			case "K":
				t.notation = "compact", t.compactDisplay = "short";
				continue;
			case "compact-long":
			case "KK":
				t.notation = "compact", t.compactDisplay = "long";
				continue;
			case "scientific":
				t = v(v(v({}, t), { notation: "scientific" }), i.options.reduce(function(e, t) {
					return v(v({}, e), ke(t));
				}, {}));
				continue;
			case "engineering":
				t = v(v(v({}, t), { notation: "engineering" }), i.options.reduce(function(e, t) {
					return v(v({}, e), ke(t));
				}, {}));
				continue;
			case "notation-simple":
				t.notation = "standard";
				continue;
			case "unit-width-narrow":
				t.currencyDisplay = "narrowSymbol", t.unitDisplay = "narrow";
				continue;
			case "unit-width-short":
				t.currencyDisplay = "code", t.unitDisplay = "short";
				continue;
			case "unit-width-full-name":
				t.currencyDisplay = "name", t.unitDisplay = "long";
				continue;
			case "unit-width-iso-code":
				t.currencyDisplay = "symbol";
				continue;
			case "scale":
				t.scale = parseFloat(i.options[0]);
				continue;
			case "rounding-mode-floor":
				t.roundingMode = "floor";
				continue;
			case "rounding-mode-ceiling":
				t.roundingMode = "ceil";
				continue;
			case "rounding-mode-down":
				t.roundingMode = "trunc";
				continue;
			case "rounding-mode-up":
				t.roundingMode = "expand";
				continue;
			case "rounding-mode-half-even":
				t.roundingMode = "halfEven";
				continue;
			case "rounding-mode-half-down":
				t.roundingMode = "halfTrunc";
				continue;
			case "rounding-mode-half-up":
				t.roundingMode = "halfExpand";
				continue;
			case "integer-width":
				if (i.options.length > 1) throw RangeError("integer-width stems only accept a single optional option");
				i.options[0].replace(we, function(e, n, r, i, a, o) {
					if (n) t.minimumIntegerDigits = r.length;
					else if (i && a) throw Error("We currently do not support maximum integer digits");
					else if (o) throw Error("We currently do not support exact integer digits");
					return "";
				});
				continue;
		}
		if (Te.test(i.stem)) {
			t.minimumIntegerDigits = i.stem.length;
			continue;
		}
		if (Se.test(i.stem)) {
			if (i.options.length > 1) throw RangeError("Fraction-precision stems only accept a single optional option");
			i.stem.replace(Se, function(e, n, r, i, a, o) {
				return r === "*" ? t.minimumFractionDigits = n.length : i && i[0] === "#" ? t.maximumFractionDigits = i.length : a && o ? (t.minimumFractionDigits = a.length, t.maximumFractionDigits = a.length + o.length) : (t.minimumFractionDigits = n.length, t.maximumFractionDigits = n.length), "";
			});
			var a = i.options[0];
			a === "w" ? t = v(v({}, t), { trailingZeroDisplay: "stripIfInteger" }) : a && (t = v(v({}, t), Ee(a)));
			continue;
		}
		if (Ce.test(i.stem)) {
			t = v(v({}, t), Ee(i.stem));
			continue;
		}
		var o = De(i.stem);
		o && (t = v(v({}, t), o));
		var s = Oe(i.stem);
		s && (t = v(v({}, t), s));
	}
	return t;
}
//#endregion
//#region node_modules/.pnpm/@formatjs+icu-messageformat-parser@2.9.4/node_modules/@formatjs/icu-messageformat-parser/lib/time-data.generated.js
var je = {
	"001": ["H", "h"],
	419: [
		"h",
		"H",
		"hB",
		"hb"
	],
	AC: [
		"H",
		"h",
		"hb",
		"hB"
	],
	AD: ["H", "hB"],
	AE: [
		"h",
		"hB",
		"hb",
		"H"
	],
	AF: [
		"H",
		"hb",
		"hB",
		"h"
	],
	AG: [
		"h",
		"hb",
		"H",
		"hB"
	],
	AI: [
		"H",
		"h",
		"hb",
		"hB"
	],
	AL: [
		"h",
		"H",
		"hB"
	],
	AM: ["H", "hB"],
	AO: ["H", "hB"],
	AR: [
		"h",
		"H",
		"hB",
		"hb"
	],
	AS: ["h", "H"],
	AT: ["H", "hB"],
	AU: [
		"h",
		"hb",
		"H",
		"hB"
	],
	AW: ["H", "hB"],
	AX: ["H"],
	AZ: [
		"H",
		"hB",
		"h"
	],
	BA: [
		"H",
		"hB",
		"h"
	],
	BB: [
		"h",
		"hb",
		"H",
		"hB"
	],
	BD: [
		"h",
		"hB",
		"H"
	],
	BE: ["H", "hB"],
	BF: ["H", "hB"],
	BG: [
		"H",
		"hB",
		"h"
	],
	BH: [
		"h",
		"hB",
		"hb",
		"H"
	],
	BI: ["H", "h"],
	BJ: ["H", "hB"],
	BL: ["H", "hB"],
	BM: [
		"h",
		"hb",
		"H",
		"hB"
	],
	BN: [
		"hb",
		"hB",
		"h",
		"H"
	],
	BO: [
		"h",
		"H",
		"hB",
		"hb"
	],
	BQ: ["H"],
	BR: ["H", "hB"],
	BS: [
		"h",
		"hb",
		"H",
		"hB"
	],
	BT: ["h", "H"],
	BW: [
		"H",
		"h",
		"hb",
		"hB"
	],
	BY: ["H", "h"],
	BZ: [
		"H",
		"h",
		"hb",
		"hB"
	],
	CA: [
		"h",
		"hb",
		"H",
		"hB"
	],
	CC: [
		"H",
		"h",
		"hb",
		"hB"
	],
	CD: ["hB", "H"],
	CF: [
		"H",
		"h",
		"hB"
	],
	CG: ["H", "hB"],
	CH: [
		"H",
		"hB",
		"h"
	],
	CI: ["H", "hB"],
	CK: [
		"H",
		"h",
		"hb",
		"hB"
	],
	CL: [
		"h",
		"H",
		"hB",
		"hb"
	],
	CM: [
		"H",
		"h",
		"hB"
	],
	CN: [
		"H",
		"hB",
		"hb",
		"h"
	],
	CO: [
		"h",
		"H",
		"hB",
		"hb"
	],
	CP: ["H"],
	CR: [
		"h",
		"H",
		"hB",
		"hb"
	],
	CU: [
		"h",
		"H",
		"hB",
		"hb"
	],
	CV: ["H", "hB"],
	CW: ["H", "hB"],
	CX: [
		"H",
		"h",
		"hb",
		"hB"
	],
	CY: [
		"h",
		"H",
		"hb",
		"hB"
	],
	CZ: ["H"],
	DE: ["H", "hB"],
	DG: [
		"H",
		"h",
		"hb",
		"hB"
	],
	DJ: ["h", "H"],
	DK: ["H"],
	DM: [
		"h",
		"hb",
		"H",
		"hB"
	],
	DO: [
		"h",
		"H",
		"hB",
		"hb"
	],
	DZ: [
		"h",
		"hB",
		"hb",
		"H"
	],
	EA: [
		"H",
		"h",
		"hB",
		"hb"
	],
	EC: [
		"h",
		"H",
		"hB",
		"hb"
	],
	EE: ["H", "hB"],
	EG: [
		"h",
		"hB",
		"hb",
		"H"
	],
	EH: [
		"h",
		"hB",
		"hb",
		"H"
	],
	ER: ["h", "H"],
	ES: [
		"H",
		"hB",
		"h",
		"hb"
	],
	ET: [
		"hB",
		"hb",
		"h",
		"H"
	],
	FI: ["H"],
	FJ: [
		"h",
		"hb",
		"H",
		"hB"
	],
	FK: [
		"H",
		"h",
		"hb",
		"hB"
	],
	FM: [
		"h",
		"hb",
		"H",
		"hB"
	],
	FO: ["H", "h"],
	FR: ["H", "hB"],
	GA: ["H", "hB"],
	GB: [
		"H",
		"h",
		"hb",
		"hB"
	],
	GD: [
		"h",
		"hb",
		"H",
		"hB"
	],
	GE: [
		"H",
		"hB",
		"h"
	],
	GF: ["H", "hB"],
	GG: [
		"H",
		"h",
		"hb",
		"hB"
	],
	GH: ["h", "H"],
	GI: [
		"H",
		"h",
		"hb",
		"hB"
	],
	GL: ["H", "h"],
	GM: [
		"h",
		"hb",
		"H",
		"hB"
	],
	GN: ["H", "hB"],
	GP: ["H", "hB"],
	GQ: [
		"H",
		"hB",
		"h",
		"hb"
	],
	GR: [
		"h",
		"H",
		"hb",
		"hB"
	],
	GT: [
		"h",
		"H",
		"hB",
		"hb"
	],
	GU: [
		"h",
		"hb",
		"H",
		"hB"
	],
	GW: ["H", "hB"],
	GY: [
		"h",
		"hb",
		"H",
		"hB"
	],
	HK: [
		"h",
		"hB",
		"hb",
		"H"
	],
	HN: [
		"h",
		"H",
		"hB",
		"hb"
	],
	HR: ["H", "hB"],
	HU: ["H", "h"],
	IC: [
		"H",
		"h",
		"hB",
		"hb"
	],
	ID: ["H"],
	IE: [
		"H",
		"h",
		"hb",
		"hB"
	],
	IL: ["H", "hB"],
	IM: [
		"H",
		"h",
		"hb",
		"hB"
	],
	IN: ["h", "H"],
	IO: [
		"H",
		"h",
		"hb",
		"hB"
	],
	IQ: [
		"h",
		"hB",
		"hb",
		"H"
	],
	IR: ["hB", "H"],
	IS: ["H"],
	IT: ["H", "hB"],
	JE: [
		"H",
		"h",
		"hb",
		"hB"
	],
	JM: [
		"h",
		"hb",
		"H",
		"hB"
	],
	JO: [
		"h",
		"hB",
		"hb",
		"H"
	],
	JP: [
		"H",
		"K",
		"h"
	],
	KE: [
		"hB",
		"hb",
		"H",
		"h"
	],
	KG: [
		"H",
		"h",
		"hB",
		"hb"
	],
	KH: [
		"hB",
		"h",
		"H",
		"hb"
	],
	KI: [
		"h",
		"hb",
		"H",
		"hB"
	],
	KM: [
		"H",
		"h",
		"hB",
		"hb"
	],
	KN: [
		"h",
		"hb",
		"H",
		"hB"
	],
	KP: [
		"h",
		"H",
		"hB",
		"hb"
	],
	KR: [
		"h",
		"H",
		"hB",
		"hb"
	],
	KW: [
		"h",
		"hB",
		"hb",
		"H"
	],
	KY: [
		"h",
		"hb",
		"H",
		"hB"
	],
	KZ: ["H", "hB"],
	LA: [
		"H",
		"hb",
		"hB",
		"h"
	],
	LB: [
		"h",
		"hB",
		"hb",
		"H"
	],
	LC: [
		"h",
		"hb",
		"H",
		"hB"
	],
	LI: [
		"H",
		"hB",
		"h"
	],
	LK: [
		"H",
		"h",
		"hB",
		"hb"
	],
	LR: [
		"h",
		"hb",
		"H",
		"hB"
	],
	LS: ["h", "H"],
	LT: [
		"H",
		"h",
		"hb",
		"hB"
	],
	LU: [
		"H",
		"h",
		"hB"
	],
	LV: [
		"H",
		"hB",
		"hb",
		"h"
	],
	LY: [
		"h",
		"hB",
		"hb",
		"H"
	],
	MA: [
		"H",
		"h",
		"hB",
		"hb"
	],
	MC: ["H", "hB"],
	MD: ["H", "hB"],
	ME: [
		"H",
		"hB",
		"h"
	],
	MF: ["H", "hB"],
	MG: ["H", "h"],
	MH: [
		"h",
		"hb",
		"H",
		"hB"
	],
	MK: [
		"H",
		"h",
		"hb",
		"hB"
	],
	ML: ["H"],
	MM: [
		"hB",
		"hb",
		"H",
		"h"
	],
	MN: [
		"H",
		"h",
		"hb",
		"hB"
	],
	MO: [
		"h",
		"hB",
		"hb",
		"H"
	],
	MP: [
		"h",
		"hb",
		"H",
		"hB"
	],
	MQ: ["H", "hB"],
	MR: [
		"h",
		"hB",
		"hb",
		"H"
	],
	MS: [
		"H",
		"h",
		"hb",
		"hB"
	],
	MT: ["H", "h"],
	MU: ["H", "h"],
	MV: ["H", "h"],
	MW: [
		"h",
		"hb",
		"H",
		"hB"
	],
	MX: [
		"h",
		"H",
		"hB",
		"hb"
	],
	MY: [
		"hb",
		"hB",
		"h",
		"H"
	],
	MZ: ["H", "hB"],
	NA: [
		"h",
		"H",
		"hB",
		"hb"
	],
	NC: ["H", "hB"],
	NE: ["H"],
	NF: [
		"H",
		"h",
		"hb",
		"hB"
	],
	NG: [
		"H",
		"h",
		"hb",
		"hB"
	],
	NI: [
		"h",
		"H",
		"hB",
		"hb"
	],
	NL: ["H", "hB"],
	NO: ["H", "h"],
	NP: [
		"H",
		"h",
		"hB"
	],
	NR: [
		"H",
		"h",
		"hb",
		"hB"
	],
	NU: [
		"H",
		"h",
		"hb",
		"hB"
	],
	NZ: [
		"h",
		"hb",
		"H",
		"hB"
	],
	OM: [
		"h",
		"hB",
		"hb",
		"H"
	],
	PA: [
		"h",
		"H",
		"hB",
		"hb"
	],
	PE: [
		"h",
		"H",
		"hB",
		"hb"
	],
	PF: [
		"H",
		"h",
		"hB"
	],
	PG: ["h", "H"],
	PH: [
		"h",
		"hB",
		"hb",
		"H"
	],
	PK: [
		"h",
		"hB",
		"H"
	],
	PL: ["H", "h"],
	PM: ["H", "hB"],
	PN: [
		"H",
		"h",
		"hb",
		"hB"
	],
	PR: [
		"h",
		"H",
		"hB",
		"hb"
	],
	PS: [
		"h",
		"hB",
		"hb",
		"H"
	],
	PT: ["H", "hB"],
	PW: ["h", "H"],
	PY: [
		"h",
		"H",
		"hB",
		"hb"
	],
	QA: [
		"h",
		"hB",
		"hb",
		"H"
	],
	RE: ["H", "hB"],
	RO: ["H", "hB"],
	RS: [
		"H",
		"hB",
		"h"
	],
	RU: ["H"],
	RW: ["H", "h"],
	SA: [
		"h",
		"hB",
		"hb",
		"H"
	],
	SB: [
		"h",
		"hb",
		"H",
		"hB"
	],
	SC: [
		"H",
		"h",
		"hB"
	],
	SD: [
		"h",
		"hB",
		"hb",
		"H"
	],
	SE: ["H"],
	SG: [
		"h",
		"hb",
		"H",
		"hB"
	],
	SH: [
		"H",
		"h",
		"hb",
		"hB"
	],
	SI: ["H", "hB"],
	SJ: ["H"],
	SK: ["H"],
	SL: [
		"h",
		"hb",
		"H",
		"hB"
	],
	SM: [
		"H",
		"h",
		"hB"
	],
	SN: [
		"H",
		"h",
		"hB"
	],
	SO: ["h", "H"],
	SR: ["H", "hB"],
	SS: [
		"h",
		"hb",
		"H",
		"hB"
	],
	ST: ["H", "hB"],
	SV: [
		"h",
		"H",
		"hB",
		"hb"
	],
	SX: [
		"H",
		"h",
		"hb",
		"hB"
	],
	SY: [
		"h",
		"hB",
		"hb",
		"H"
	],
	SZ: [
		"h",
		"hb",
		"H",
		"hB"
	],
	TA: [
		"H",
		"h",
		"hb",
		"hB"
	],
	TC: [
		"h",
		"hb",
		"H",
		"hB"
	],
	TD: [
		"h",
		"H",
		"hB"
	],
	TF: [
		"H",
		"h",
		"hB"
	],
	TG: ["H", "hB"],
	TH: ["H", "h"],
	TJ: ["H", "h"],
	TL: [
		"H",
		"hB",
		"hb",
		"h"
	],
	TM: ["H", "h"],
	TN: [
		"h",
		"hB",
		"hb",
		"H"
	],
	TO: ["h", "H"],
	TR: ["H", "hB"],
	TT: [
		"h",
		"hb",
		"H",
		"hB"
	],
	TW: [
		"hB",
		"hb",
		"h",
		"H"
	],
	TZ: [
		"hB",
		"hb",
		"H",
		"h"
	],
	UA: [
		"H",
		"hB",
		"h"
	],
	UG: [
		"hB",
		"hb",
		"H",
		"h"
	],
	UM: [
		"h",
		"hb",
		"H",
		"hB"
	],
	US: [
		"h",
		"hb",
		"H",
		"hB"
	],
	UY: [
		"h",
		"H",
		"hB",
		"hb"
	],
	UZ: [
		"H",
		"hB",
		"h"
	],
	VA: [
		"H",
		"h",
		"hB"
	],
	VC: [
		"h",
		"hb",
		"H",
		"hB"
	],
	VE: [
		"h",
		"H",
		"hB",
		"hb"
	],
	VG: [
		"h",
		"hb",
		"H",
		"hB"
	],
	VI: [
		"h",
		"hb",
		"H",
		"hB"
	],
	VN: ["H", "h"],
	VU: ["h", "H"],
	WF: ["H", "hB"],
	WS: ["h", "H"],
	XK: [
		"H",
		"hB",
		"h"
	],
	YE: [
		"h",
		"hB",
		"hb",
		"H"
	],
	YT: ["H", "hB"],
	ZA: [
		"H",
		"h",
		"hb",
		"hB"
	],
	ZM: [
		"h",
		"hb",
		"H",
		"hB"
	],
	ZW: ["H", "h"],
	"af-ZA": [
		"H",
		"h",
		"hB",
		"hb"
	],
	"ar-001": [
		"h",
		"hB",
		"hb",
		"H"
	],
	"ca-ES": [
		"H",
		"h",
		"hB"
	],
	"en-001": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"en-HK": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"en-IL": [
		"H",
		"h",
		"hb",
		"hB"
	],
	"en-MY": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"es-BR": [
		"H",
		"h",
		"hB",
		"hb"
	],
	"es-ES": [
		"H",
		"h",
		"hB",
		"hb"
	],
	"es-GQ": [
		"H",
		"h",
		"hB",
		"hb"
	],
	"fr-CA": [
		"H",
		"h",
		"hB"
	],
	"gl-ES": [
		"H",
		"h",
		"hB"
	],
	"gu-IN": [
		"hB",
		"hb",
		"h",
		"H"
	],
	"hi-IN": [
		"hB",
		"h",
		"H"
	],
	"it-CH": [
		"H",
		"h",
		"hB"
	],
	"it-IT": [
		"H",
		"h",
		"hB"
	],
	"kn-IN": [
		"hB",
		"h",
		"H"
	],
	"ml-IN": [
		"hB",
		"h",
		"H"
	],
	"mr-IN": [
		"hB",
		"hb",
		"h",
		"H"
	],
	"pa-IN": [
		"hB",
		"hb",
		"h",
		"H"
	],
	"ta-IN": [
		"hB",
		"h",
		"hb",
		"H"
	],
	"te-IN": [
		"hB",
		"h",
		"H"
	],
	"zu-ZA": [
		"H",
		"hB",
		"hb",
		"h"
	]
};
//#endregion
//#region node_modules/.pnpm/@formatjs+icu-messageformat-parser@2.9.4/node_modules/@formatjs/icu-messageformat-parser/lib/date-time-pattern-generator.js
function Me(e, t) {
	for (var n = "", r = 0; r < e.length; r++) {
		var i = e.charAt(r);
		if (i === "j") {
			for (var a = 0; r + 1 < e.length && e.charAt(r + 1) === i;) a++, r++;
			var o = 1 + (a & 1), s = a < 2 ? 1 : 3 + (a >> 1), c = "a", l = Ne(t);
			for ((l == "H" || l == "k") && (s = 0); s-- > 0;) n += c;
			for (; o-- > 0;) n = l + n;
		} else i === "J" ? n += "H" : n += i;
	}
	return n;
}
function Ne(e) {
	var t = e.hourCycle;
	if (t === void 0 && e.hourCycles && e.hourCycles.length && (t = e.hourCycles[0]), t) switch (t) {
		case "h24": return "k";
		case "h23": return "H";
		case "h12": return "h";
		case "h11": return "K";
		default: throw Error("Invalid hourCycle");
	}
	var n = e.language, r;
	return n !== "root" && (r = e.maximize().region), (je[r || ""] || je[n || ""] || je[`${n}-001`] || je["001"])[0];
}
//#endregion
//#region node_modules/.pnpm/@formatjs+icu-messageformat-parser@2.9.4/node_modules/@formatjs/icu-messageformat-parser/lib/parser.js
var Pe = RegExp(`^${ge.source}*`), Fe = RegExp(`${ge.source}*\$`);
function I(e, t) {
	return {
		start: e,
		end: t
	};
}
var Ie = !!String.prototype.startsWith && "_a".startsWith("a", 1), Le = !!String.fromCodePoint, Re = !!Object.fromEntries, ze = !!String.prototype.codePointAt, Be = !!String.prototype.trimStart, Ve = !!String.prototype.trimEnd, He = Number.isSafeInteger ? Number.isSafeInteger : function(e) {
	return typeof e == "number" && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991;
}, Ue = !0;
try {
	Ue = Xe("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu").exec("a")?.[0] === "a";
} catch {
	Ue = !1;
}
var We = Ie ? function(e, t, n) {
	return e.startsWith(t, n);
} : function(e, t, n) {
	return e.slice(n, n + t.length) === t;
}, Ge = Le ? String.fromCodePoint : function() {
	for (var e = [...arguments], t = "", n = e.length, r = 0, i; n > r;) {
		if (i = e[r++], i > 1114111) throw RangeError(i + " is not a valid code point");
		t += i < 65536 ? String.fromCharCode(i) : String.fromCharCode(((i -= 65536) >> 10) + 55296, i % 1024 + 56320);
	}
	return t;
}, Ke = Re ? Object.fromEntries : function(e) {
	for (var t = {}, n = 0, r = e; n < r.length; n++) {
		var i = r[n], a = i[0];
		t[a] = i[1];
	}
	return t;
}, qe = ze ? function(e, t) {
	return e.codePointAt(t);
} : function(e, t) {
	var n = e.length;
	if (!(t < 0 || t >= n)) {
		var r = e.charCodeAt(t), i;
		return r < 55296 || r > 56319 || t + 1 === n || (i = e.charCodeAt(t + 1)) < 56320 || i > 57343 ? r : (r - 55296 << 10) + (i - 56320) + 65536;
	}
}, Je = Be ? function(e) {
	return e.trimStart();
} : function(e) {
	return e.replace(Pe, "");
}, Ye = Ve ? function(e) {
	return e.trimEnd();
} : function(e) {
	return e.replace(Fe, "");
};
function Xe(e, t) {
	return new RegExp(e, t);
}
var Ze;
if (Ue) {
	var Qe = Xe("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
	Ze = function(e, t) {
		return Qe.lastIndex = t, Qe.exec(e)[1] ?? "";
	};
} else Ze = function(e, t) {
	for (var n = [];;) {
		var r = qe(e, t);
		if (r === void 0 || rt(r) || it(r)) break;
		n.push(r), t += r >= 65536 ? 2 : 1;
	}
	return Ge.apply(void 0, n);
};
var $e = function() {
	function e(e, t) {
		t === void 0 && (t = {}), this.message = e, this.position = {
			offset: 0,
			line: 1,
			column: 1
		}, this.ignoreTag = !!t.ignoreTag, this.locale = t.locale, this.requiresOtherClause = !!t.requiresOtherClause, this.shouldParseSkeletons = !!t.shouldParseSkeletons;
	}
	return e.prototype.parse = function() {
		if (this.offset() !== 0) throw Error("parser can only be used once");
		return this.parseMessage(0, "", !1);
	}, e.prototype.parseMessage = function(e, t, n) {
		for (var r = []; !this.isEOF();) {
			var i = this.char();
			if (i === 123) {
				var a = this.parseArgument(e, n);
				if (a.err) return a;
				r.push(a.val);
			} else if (i === 125 && e > 0) break;
			else if (i === 35 && (t === "plural" || t === "selectordinal")) {
				var o = this.clonePosition();
				this.bump(), r.push({
					type: F.pound,
					location: I(o, this.clonePosition())
				});
			} else if (i === 60 && !this.ignoreTag && this.peek() === 47) {
				if (n) break;
				return this.error(P.UNMATCHED_CLOSING_TAG, I(this.clonePosition(), this.clonePosition()));
			} else if (i === 60 && !this.ignoreTag && et(this.peek() || 0)) {
				var a = this.parseTag(e, t);
				if (a.err) return a;
				r.push(a.val);
			} else {
				var a = this.parseLiteral(e, t);
				if (a.err) return a;
				r.push(a.val);
			}
		}
		return {
			val: r,
			err: null
		};
	}, e.prototype.parseTag = function(e, t) {
		var n = this.clonePosition();
		this.bump();
		var r = this.parseTagName();
		if (this.bumpSpace(), this.bumpIf("/>")) return {
			val: {
				type: F.literal,
				value: `<${r}/>`,
				location: I(n, this.clonePosition())
			},
			err: null
		};
		if (this.bumpIf(">")) {
			var i = this.parseMessage(e + 1, t, !0);
			if (i.err) return i;
			var a = i.val, o = this.clonePosition();
			if (this.bumpIf("</")) {
				if (this.isEOF() || !et(this.char())) return this.error(P.INVALID_TAG, I(o, this.clonePosition()));
				var s = this.clonePosition();
				return r === this.parseTagName() ? (this.bumpSpace(), this.bumpIf(">") ? {
					val: {
						type: F.tag,
						value: r,
						children: a,
						location: I(n, this.clonePosition())
					},
					err: null
				} : this.error(P.INVALID_TAG, I(o, this.clonePosition()))) : this.error(P.UNMATCHED_CLOSING_TAG, I(s, this.clonePosition()));
			} else return this.error(P.UNCLOSED_TAG, I(n, this.clonePosition()));
		} else return this.error(P.INVALID_TAG, I(n, this.clonePosition()));
	}, e.prototype.parseTagName = function() {
		var e = this.offset();
		for (this.bump(); !this.isEOF() && nt(this.char());) this.bump();
		return this.message.slice(e, this.offset());
	}, e.prototype.parseLiteral = function(e, t) {
		for (var n = this.clonePosition(), r = "";;) {
			var i = this.tryParseQuote(t);
			if (i) {
				r += i;
				continue;
			}
			var a = this.tryParseUnquoted(e, t);
			if (a) {
				r += a;
				continue;
			}
			var o = this.tryParseLeftAngleBracket();
			if (o) {
				r += o;
				continue;
			}
			break;
		}
		var s = I(n, this.clonePosition());
		return {
			val: {
				type: F.literal,
				value: r,
				location: s
			},
			err: null
		};
	}, e.prototype.tryParseLeftAngleBracket = function() {
		return !this.isEOF() && this.char() === 60 && (this.ignoreTag || !tt(this.peek() || 0)) ? (this.bump(), "<") : null;
	}, e.prototype.tryParseQuote = function(e) {
		if (this.isEOF() || this.char() !== 39) return null;
		switch (this.peek()) {
			case 39: return this.bump(), this.bump(), "'";
			case 123:
			case 60:
			case 62:
			case 125: break;
			case 35:
				if (e === "plural" || e === "selectordinal") break;
				return null;
			default: return null;
		}
		this.bump();
		var t = [this.char()];
		for (this.bump(); !this.isEOF();) {
			var n = this.char();
			if (n === 39) if (this.peek() === 39) t.push(39), this.bump();
			else {
				this.bump();
				break;
			}
			else t.push(n);
			this.bump();
		}
		return Ge.apply(void 0, t);
	}, e.prototype.tryParseUnquoted = function(e, t) {
		if (this.isEOF()) return null;
		var n = this.char();
		return n === 60 || n === 123 || n === 35 && (t === "plural" || t === "selectordinal") || n === 125 && e > 0 ? null : (this.bump(), Ge(n));
	}, e.prototype.parseArgument = function(e, t) {
		var n = this.clonePosition();
		if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(P.EXPECT_ARGUMENT_CLOSING_BRACE, I(n, this.clonePosition()));
		if (this.char() === 125) return this.bump(), this.error(P.EMPTY_ARGUMENT, I(n, this.clonePosition()));
		var r = this.parseIdentifierIfPossible().value;
		if (!r) return this.error(P.MALFORMED_ARGUMENT, I(n, this.clonePosition()));
		if (this.bumpSpace(), this.isEOF()) return this.error(P.EXPECT_ARGUMENT_CLOSING_BRACE, I(n, this.clonePosition()));
		switch (this.char()) {
			case 125: return this.bump(), {
				val: {
					type: F.argument,
					value: r,
					location: I(n, this.clonePosition())
				},
				err: null
			};
			case 44: return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(P.EXPECT_ARGUMENT_CLOSING_BRACE, I(n, this.clonePosition())) : this.parseArgumentOptions(e, t, r, n);
			default: return this.error(P.MALFORMED_ARGUMENT, I(n, this.clonePosition()));
		}
	}, e.prototype.parseIdentifierIfPossible = function() {
		var e = this.clonePosition(), t = this.offset(), n = Ze(this.message, t), r = t + n.length;
		return this.bumpTo(r), {
			value: n,
			location: I(e, this.clonePosition())
		};
	}, e.prototype.parseArgumentOptions = function(e, t, n, r) {
		var i = this.clonePosition(), a = this.parseIdentifierIfPossible().value, o = this.clonePosition();
		switch (a) {
			case "": return this.error(P.EXPECT_ARGUMENT_TYPE, I(i, o));
			case "number":
			case "date":
			case "time":
				this.bumpSpace();
				var s = null;
				if (this.bumpIf(",")) {
					this.bumpSpace();
					var c = this.clonePosition(), l = this.parseSimpleArgStyleIfPossible();
					if (l.err) return l;
					var u = Ye(l.val);
					if (u.length === 0) return this.error(P.EXPECT_ARGUMENT_STYLE, I(this.clonePosition(), this.clonePosition()));
					s = {
						style: u,
						styleLocation: I(c, this.clonePosition())
					};
				}
				var d = this.tryParseArgumentClose(r);
				if (d.err) return d;
				var f = I(r, this.clonePosition());
				if (s && We(s?.style, "::", 0)) {
					var p = Je(s.style.slice(2));
					if (a === "number") {
						var l = this.parseNumberSkeletonFromString(p, s.styleLocation);
						return l.err ? l : {
							val: {
								type: F.number,
								value: n,
								location: f,
								style: l.val
							},
							err: null
						};
					} else {
						if (p.length === 0) return this.error(P.EXPECT_DATE_TIME_SKELETON, f);
						var m = p;
						this.locale && (m = Me(p, this.locale));
						var u = {
							type: ie.dateTime,
							pattern: m,
							location: s.styleLocation,
							parsedOptions: this.shouldParseSkeletons ? ve(m) : {}
						};
						return {
							val: {
								type: a === "date" ? F.date : F.time,
								value: n,
								location: f,
								style: u
							},
							err: null
						};
					}
				}
				return {
					val: {
						type: a === "number" ? F.number : a === "date" ? F.date : F.time,
						value: n,
						location: f,
						style: s?.style ?? null
					},
					err: null
				};
			case "plural":
			case "selectordinal":
			case "select":
				var h = this.clonePosition();
				if (this.bumpSpace(), !this.bumpIf(",")) return this.error(P.EXPECT_SELECT_ARGUMENT_OPTIONS, I(h, v({}, h)));
				this.bumpSpace();
				var g = this.parseIdentifierIfPossible(), _ = 0;
				if (a !== "select" && g.value === "offset") {
					if (!this.bumpIf(":")) return this.error(P.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, I(this.clonePosition(), this.clonePosition()));
					this.bumpSpace();
					var l = this.tryParseDecimalInteger(P.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, P.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
					if (l.err) return l;
					this.bumpSpace(), g = this.parseIdentifierIfPossible(), _ = l.val;
				}
				var y = this.tryParsePluralOrSelectOptions(e, a, t, g);
				if (y.err) return y;
				var d = this.tryParseArgumentClose(r);
				if (d.err) return d;
				var b = I(r, this.clonePosition());
				return a === "select" ? {
					val: {
						type: F.select,
						value: n,
						options: Ke(y.val),
						location: b
					},
					err: null
				} : {
					val: {
						type: F.plural,
						value: n,
						options: Ke(y.val),
						offset: _,
						pluralType: a === "plural" ? "cardinal" : "ordinal",
						location: b
					},
					err: null
				};
			default: return this.error(P.INVALID_ARGUMENT_TYPE, I(i, o));
		}
	}, e.prototype.tryParseArgumentClose = function(e) {
		return this.isEOF() || this.char() !== 125 ? this.error(P.EXPECT_ARGUMENT_CLOSING_BRACE, I(e, this.clonePosition())) : (this.bump(), {
			val: !0,
			err: null
		});
	}, e.prototype.parseSimpleArgStyleIfPossible = function() {
		for (var e = 0, t = this.clonePosition(); !this.isEOF();) switch (this.char()) {
			case 39:
				this.bump();
				var n = this.clonePosition();
				if (!this.bumpUntil("'")) return this.error(P.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, I(n, this.clonePosition()));
				this.bump();
				break;
			case 123:
				e += 1, this.bump();
				break;
			case 125:
				if (e > 0) --e;
				else return {
					val: this.message.slice(t.offset, this.offset()),
					err: null
				};
				break;
			default:
				this.bump();
				break;
		}
		return {
			val: this.message.slice(t.offset, this.offset()),
			err: null
		};
	}, e.prototype.parseNumberSkeletonFromString = function(e, t) {
		var n = [];
		try {
			n = be(e);
		} catch {
			return this.error(P.INVALID_NUMBER_SKELETON, t);
		}
		return {
			val: {
				type: ie.number,
				tokens: n,
				location: t,
				parsedOptions: this.shouldParseSkeletons ? Ae(n) : {}
			},
			err: null
		};
	}, e.prototype.tryParsePluralOrSelectOptions = function(e, t, n, r) {
		for (var i, a = !1, o = [], s = /* @__PURE__ */ new Set(), c = r.value, l = r.location;;) {
			if (c.length === 0) {
				var u = this.clonePosition();
				if (t !== "select" && this.bumpIf("=")) {
					var d = this.tryParseDecimalInteger(P.EXPECT_PLURAL_ARGUMENT_SELECTOR, P.INVALID_PLURAL_ARGUMENT_SELECTOR);
					if (d.err) return d;
					l = I(u, this.clonePosition()), c = this.message.slice(u.offset, this.offset());
				} else break;
			}
			if (s.has(c)) return this.error(t === "select" ? P.DUPLICATE_SELECT_ARGUMENT_SELECTOR : P.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, l);
			c === "other" && (a = !0), this.bumpSpace();
			var f = this.clonePosition();
			if (!this.bumpIf("{")) return this.error(t === "select" ? P.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : P.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, I(this.clonePosition(), this.clonePosition()));
			var p = this.parseMessage(e + 1, t, n);
			if (p.err) return p;
			var m = this.tryParseArgumentClose(f);
			if (m.err) return m;
			o.push([c, {
				value: p.val,
				location: I(f, this.clonePosition())
			}]), s.add(c), this.bumpSpace(), i = this.parseIdentifierIfPossible(), c = i.value, l = i.location;
		}
		return o.length === 0 ? this.error(t === "select" ? P.EXPECT_SELECT_ARGUMENT_SELECTOR : P.EXPECT_PLURAL_ARGUMENT_SELECTOR, I(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !a ? this.error(P.MISSING_OTHER_CLAUSE, I(this.clonePosition(), this.clonePosition())) : {
			val: o,
			err: null
		};
	}, e.prototype.tryParseDecimalInteger = function(e, t) {
		var n = 1, r = this.clonePosition();
		this.bumpIf("+") || this.bumpIf("-") && (n = -1);
		for (var i = !1, a = 0; !this.isEOF();) {
			var o = this.char();
			if (o >= 48 && o <= 57) i = !0, a = a * 10 + (o - 48), this.bump();
			else break;
		}
		var s = I(r, this.clonePosition());
		return i ? (a *= n, He(a) ? {
			val: a,
			err: null
		} : this.error(t, s)) : this.error(e, s);
	}, e.prototype.offset = function() {
		return this.position.offset;
	}, e.prototype.isEOF = function() {
		return this.offset() === this.message.length;
	}, e.prototype.clonePosition = function() {
		return {
			offset: this.position.offset,
			line: this.position.line,
			column: this.position.column
		};
	}, e.prototype.char = function() {
		var e = this.position.offset;
		if (e >= this.message.length) throw Error("out of bound");
		var t = qe(this.message, e);
		if (t === void 0) throw Error(`Offset ${e} is at invalid UTF-16 code unit boundary`);
		return t;
	}, e.prototype.error = function(e, t) {
		return {
			val: null,
			err: {
				kind: e,
				message: this.message,
				location: t
			}
		};
	}, e.prototype.bump = function() {
		if (!this.isEOF()) {
			var e = this.char();
			e === 10 ? (this.position.line += 1, this.position.column = 1, this.position.offset += 1) : (this.position.column += 1, this.position.offset += e < 65536 ? 1 : 2);
		}
	}, e.prototype.bumpIf = function(e) {
		if (We(this.message, e, this.offset())) {
			for (var t = 0; t < e.length; t++) this.bump();
			return !0;
		}
		return !1;
	}, e.prototype.bumpUntil = function(e) {
		var t = this.offset(), n = this.message.indexOf(e, t);
		return n >= 0 ? (this.bumpTo(n), !0) : (this.bumpTo(this.message.length), !1);
	}, e.prototype.bumpTo = function(e) {
		if (this.offset() > e) throw Error(`targetOffset ${e} must be greater than or equal to the current offset ${this.offset()}`);
		for (e = Math.min(e, this.message.length);;) {
			var t = this.offset();
			if (t === e) break;
			if (t > e) throw Error(`targetOffset ${e} is at invalid UTF-16 code unit boundary`);
			if (this.bump(), this.isEOF()) break;
		}
	}, e.prototype.bumpSpace = function() {
		for (; !this.isEOF() && rt(this.char());) this.bump();
	}, e.prototype.peek = function() {
		if (this.isEOF()) return null;
		var e = this.char(), t = this.offset();
		return this.message.charCodeAt(t + (e >= 65536 ? 2 : 1)) ?? null;
	}, e;
}();
function et(e) {
	return e >= 97 && e <= 122 || e >= 65 && e <= 90;
}
function tt(e) {
	return et(e) || e === 47;
}
function nt(e) {
	return e === 45 || e === 46 || e >= 48 && e <= 57 || e === 95 || e >= 97 && e <= 122 || e >= 65 && e <= 90 || e == 183 || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039;
}
function rt(e) {
	return e >= 9 && e <= 13 || e === 32 || e === 133 || e >= 8206 && e <= 8207 || e === 8232 || e === 8233;
}
function it(e) {
	return e >= 33 && e <= 35 || e === 36 || e >= 37 && e <= 39 || e === 40 || e === 41 || e === 42 || e === 43 || e === 44 || e === 45 || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || e === 91 || e === 92 || e === 93 || e === 94 || e === 96 || e === 123 || e === 124 || e === 125 || e === 126 || e === 161 || e >= 162 && e <= 165 || e === 166 || e === 167 || e === 169 || e === 171 || e === 172 || e === 174 || e === 176 || e === 177 || e === 182 || e === 187 || e === 191 || e === 215 || e === 247 || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || e === 8216 || e === 8217 || e === 8218 || e >= 8219 && e <= 8220 || e === 8221 || e === 8222 || e === 8223 || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || e === 8249 || e === 8250 || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || e === 8260 || e === 8261 || e === 8262 || e >= 8263 && e <= 8273 || e === 8274 || e === 8275 || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || e === 8608 || e >= 8609 && e <= 8610 || e === 8611 || e >= 8612 && e <= 8613 || e === 8614 || e >= 8615 && e <= 8621 || e === 8622 || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || e === 8658 || e === 8659 || e === 8660 || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || e === 8968 || e === 8969 || e === 8970 || e === 8971 || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || e === 9001 || e === 9002 || e >= 9003 && e <= 9083 || e === 9084 || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || e === 9655 || e >= 9656 && e <= 9664 || e === 9665 || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || e === 9839 || e >= 9840 && e <= 10087 || e === 10088 || e === 10089 || e === 10090 || e === 10091 || e === 10092 || e === 10093 || e === 10094 || e === 10095 || e === 10096 || e === 10097 || e === 10098 || e === 10099 || e === 10100 || e === 10101 || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || e === 10181 || e === 10182 || e >= 10183 && e <= 10213 || e === 10214 || e === 10215 || e === 10216 || e === 10217 || e === 10218 || e === 10219 || e === 10220 || e === 10221 || e === 10222 || e === 10223 || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || e === 10627 || e === 10628 || e === 10629 || e === 10630 || e === 10631 || e === 10632 || e === 10633 || e === 10634 || e === 10635 || e === 10636 || e === 10637 || e === 10638 || e === 10639 || e === 10640 || e === 10641 || e === 10642 || e === 10643 || e === 10644 || e === 10645 || e === 10646 || e === 10647 || e === 10648 || e >= 10649 && e <= 10711 || e === 10712 || e === 10713 || e === 10714 || e === 10715 || e >= 10716 && e <= 10747 || e === 10748 || e === 10749 || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || e === 11158 || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || e === 11778 || e === 11779 || e === 11780 || e === 11781 || e >= 11782 && e <= 11784 || e === 11785 || e === 11786 || e === 11787 || e === 11788 || e === 11789 || e >= 11790 && e <= 11798 || e === 11799 || e >= 11800 && e <= 11801 || e === 11802 || e === 11803 || e === 11804 || e === 11805 || e >= 11806 && e <= 11807 || e === 11808 || e === 11809 || e === 11810 || e === 11811 || e === 11812 || e === 11813 || e === 11814 || e === 11815 || e === 11816 || e === 11817 || e >= 11818 && e <= 11822 || e === 11823 || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || e === 11840 || e === 11841 || e === 11842 || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || e === 11858 || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || e === 12296 || e === 12297 || e === 12298 || e === 12299 || e === 12300 || e === 12301 || e === 12302 || e === 12303 || e === 12304 || e === 12305 || e >= 12306 && e <= 12307 || e === 12308 || e === 12309 || e === 12310 || e === 12311 || e === 12312 || e === 12313 || e === 12314 || e === 12315 || e === 12316 || e === 12317 || e >= 12318 && e <= 12319 || e === 12320 || e === 12336 || e === 64830 || e === 64831 || e >= 65093 && e <= 65094;
}
//#endregion
//#region node_modules/.pnpm/@formatjs+icu-messageformat-parser@2.9.4/node_modules/@formatjs/icu-messageformat-parser/lib/index.js
function at(e) {
	e.forEach(function(e) {
		if (delete e.location, ue(e) || de(e)) for (var t in e.options) delete e.options[t].location, at(e.options[t].value);
		else se(e) && me(e.style) || (ce(e) || le(e)) && he(e.style) ? delete e.style.location : pe(e) && at(e.children);
	});
}
function ot(e, t) {
	t === void 0 && (t = {}), t = v({
		shouldParseSkeletons: !0,
		requiresOtherClause: !0
	}, t);
	var n = new $e(e, t).parse();
	if (n.err) {
		var r = SyntaxError(P[n.err.kind]);
		throw r.location = n.err.location, r.originalMessage = n.err.message, r;
	}
	return t?.captureLocation || at(n.val), n.val;
}
//#endregion
//#region node_modules/.pnpm/intl-messageformat@10.7.7/node_modules/intl-messageformat/lib/src/error.js
var st;
(function(e) {
	e.MISSING_VALUE = "MISSING_VALUE", e.INVALID_VALUE = "INVALID_VALUE", e.MISSING_INTL_API = "MISSING_INTL_API";
})(st ||= {});
var ct = function(e) {
	_(t, e);
	function t(t, n, r) {
		var i = e.call(this, t) || this;
		return i.code = n, i.originalMessage = r, i;
	}
	return t.prototype.toString = function() {
		return `[formatjs Error: ${this.code}] ${this.message}`;
	}, t;
}(Error), lt = function(e) {
	_(t, e);
	function t(t, n, r, i) {
		return e.call(this, `Invalid values for "${t}": "${n}". Options are "${Object.keys(r).join("\", \"")}"`, st.INVALID_VALUE, i) || this;
	}
	return t;
}(ct), ut = function(e) {
	_(t, e);
	function t(t, n, r) {
		return e.call(this, `Value for "${t}" must be of type ${n}`, st.INVALID_VALUE, r) || this;
	}
	return t;
}(ct), dt = function(e) {
	_(t, e);
	function t(t, n) {
		return e.call(this, `The intl string context variable "${t}" was not provided to the string "${n}"`, st.MISSING_VALUE, n) || this;
	}
	return t;
}(ct), ft;
(function(e) {
	e[e.literal = 0] = "literal", e[e.object = 1] = "object";
})(ft ||= {});
function pt(e) {
	return e.length < 2 ? e : e.reduce(function(e, t) {
		var n = e[e.length - 1];
		return !n || n.type !== ft.literal || t.type !== ft.literal ? e.push(t) : n.value += t.value, e;
	}, []);
}
function mt(e) {
	return typeof e == "function";
}
function ht(e, t, n, r, i, a, o) {
	if (e.length === 1 && ae(e[0])) return [{
		type: ft.literal,
		value: e[0].value
	}];
	for (var s = [], c = 0, l = e; c < l.length; c++) {
		var u = l[c];
		if (ae(u)) {
			s.push({
				type: ft.literal,
				value: u.value
			});
			continue;
		}
		if (fe(u)) {
			typeof a == "number" && s.push({
				type: ft.literal,
				value: n.getNumberFormat(t).format(a)
			});
			continue;
		}
		var d = u.value;
		if (!(i && d in i)) throw new dt(d, o);
		var f = i[d];
		if (oe(u)) {
			(!f || typeof f == "string" || typeof f == "number") && (f = typeof f == "string" || typeof f == "number" ? String(f) : ""), s.push({
				type: typeof f == "string" ? ft.literal : ft.object,
				value: f
			});
			continue;
		}
		if (ce(u)) {
			var p = typeof u.style == "string" ? r.date[u.style] : he(u.style) ? u.style.parsedOptions : void 0;
			s.push({
				type: ft.literal,
				value: n.getDateTimeFormat(t, p).format(f)
			});
			continue;
		}
		if (le(u)) {
			var p = typeof u.style == "string" ? r.time[u.style] : he(u.style) ? u.style.parsedOptions : r.time.medium;
			s.push({
				type: ft.literal,
				value: n.getDateTimeFormat(t, p).format(f)
			});
			continue;
		}
		if (se(u)) {
			var p = typeof u.style == "string" ? r.number[u.style] : me(u.style) ? u.style.parsedOptions : void 0;
			p && p.scale && (f *= p.scale || 1), s.push({
				type: ft.literal,
				value: n.getNumberFormat(t, p).format(f)
			});
			continue;
		}
		if (pe(u)) {
			var m = u.children, h = u.value, g = i[h];
			if (!mt(g)) throw new ut(h, "function", o);
			var _ = g(ht(m, t, n, r, i, a).map(function(e) {
				return e.value;
			}));
			Array.isArray(_) || (_ = [_]), s.push.apply(s, _.map(function(e) {
				return {
					type: typeof e == "string" ? ft.literal : ft.object,
					value: e
				};
			}));
		}
		if (ue(u)) {
			var v = u.options[f] || u.options.other;
			if (!v) throw new lt(u.value, f, Object.keys(u.options), o);
			s.push.apply(s, ht(v.value, t, n, r, i));
			continue;
		}
		if (de(u)) {
			var v = u.options[`=${f}`];
			if (!v) {
				if (!Intl.PluralRules) throw new ct("Intl.PluralRules is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-pluralrules\"\n", st.MISSING_INTL_API, o);
				var y = n.getPluralRules(t, { type: u.pluralType }).select(f - (u.offset || 0));
				v = u.options[y] || u.options.other;
			}
			if (!v) throw new lt(u.value, f, Object.keys(u.options), o);
			s.push.apply(s, ht(v.value, t, n, r, i, f - (u.offset || 0)));
			continue;
		}
	}
	return pt(s);
}
//#endregion
//#region node_modules/.pnpm/intl-messageformat@10.7.7/node_modules/intl-messageformat/lib/src/core.js
function gt(e, t) {
	return t ? v(v(v({}, e || {}), t || {}), Object.keys(e).reduce(function(n, r) {
		return n[r] = v(v({}, e[r]), t[r] || {}), n;
	}, {})) : e;
}
function _t(e, t) {
	return t ? Object.keys(e).reduce(function(n, r) {
		return n[r] = gt(e[r], t[r]), n;
	}, v({}, e)) : e;
}
function vt(e) {
	return { create: function() {
		return {
			get: function(t) {
				return e[t];
			},
			set: function(t, n) {
				e[t] = n;
			}
		};
	} };
}
function L(e) {
	return e === void 0 && (e = {
		number: {},
		dateTime: {},
		pluralRules: {}
	}), {
		getNumberFormat: T(function() {
			for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
			return new ((e = Intl.NumberFormat).bind.apply(e, w([void 0], t, !1)))();
		}, {
			cache: vt(e.number),
			strategy: ne.variadic
		}),
		getDateTimeFormat: T(function() {
			for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
			return new ((e = Intl.DateTimeFormat).bind.apply(e, w([void 0], t, !1)))();
		}, {
			cache: vt(e.dateTime),
			strategy: ne.variadic
		}),
		getPluralRules: T(function() {
			for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
			return new ((e = Intl.PluralRules).bind.apply(e, w([void 0], t, !1)))();
		}, {
			cache: vt(e.pluralRules),
			strategy: ne.variadic
		})
	};
}
var yt = function() {
	function e(t, n, r, i) {
		n === void 0 && (n = e.defaultLocale);
		var a = this;
		if (this.formatterCache = {
			number: {},
			dateTime: {},
			pluralRules: {}
		}, this.format = function(e) {
			var t = a.formatToParts(e);
			if (t.length === 1) return t[0].value;
			var n = t.reduce(function(e, t) {
				return !e.length || t.type !== ft.literal || typeof e[e.length - 1] != "string" ? e.push(t.value) : e[e.length - 1] += t.value, e;
			}, []);
			return n.length <= 1 ? n[0] || "" : n;
		}, this.formatToParts = function(e) {
			return ht(a.ast, a.locales, a.formatters, a.formats, e, void 0, a.message);
		}, this.resolvedOptions = function() {
			return { locale: a.resolvedLocale?.toString() || Intl.NumberFormat.supportedLocalesOf(a.locales)[0] };
		}, this.getAst = function() {
			return a.ast;
		}, this.locales = n, this.resolvedLocale = e.resolveLocale(n), typeof t == "string") {
			if (this.message = t, !e.__parse) throw TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
			var o = i || {};
			o.formatters;
			var s = y(o, ["formatters"]);
			this.ast = e.__parse(t, v(v({}, s), { locale: this.resolvedLocale }));
		} else this.ast = t;
		if (!Array.isArray(this.ast)) throw TypeError("A message must be provided as a String or AST.");
		this.formats = _t(e.formats, r), this.formatters = i && i.formatters || L(this.formatterCache);
	}
	return Object.defineProperty(e, "defaultLocale", {
		get: function() {
			return e.memoizedDefaultLocale ||= new Intl.NumberFormat().resolvedOptions().locale, e.memoizedDefaultLocale;
		},
		enumerable: !1,
		configurable: !0
	}), e.memoizedDefaultLocale = null, e.resolveLocale = function(e) {
		if (Intl.Locale !== void 0) {
			var t = Intl.NumberFormat.supportedLocalesOf(e);
			return t.length > 0 ? new Intl.Locale(t[0]) : new Intl.Locale(typeof e == "string" ? e : e[0]);
		}
	}, e.__parse = ot, e.formats = {
		number: {
			integer: { maximumFractionDigits: 0 },
			currency: { style: "currency" },
			percent: { style: "percent" }
		},
		date: {
			short: {
				month: "numeric",
				day: "numeric",
				year: "2-digit"
			},
			medium: {
				month: "short",
				day: "numeric",
				year: "numeric"
			},
			long: {
				month: "long",
				day: "numeric",
				year: "numeric"
			},
			full: {
				weekday: "long",
				month: "long",
				day: "numeric",
				year: "numeric"
			}
		},
		time: {
			short: {
				hour: "numeric",
				minute: "numeric"
			},
			medium: {
				hour: "numeric",
				minute: "numeric",
				second: "numeric"
			},
			long: {
				hour: "numeric",
				minute: "numeric",
				second: "numeric",
				timeZoneName: "short"
			},
			full: {
				hour: "numeric",
				minute: "numeric",
				second: "numeric",
				timeZoneName: "short"
			}
		}
	}, e;
}(), bt;
(function(e) {
	e.FORMAT_ERROR = "FORMAT_ERROR", e.UNSUPPORTED_FORMATTER = "UNSUPPORTED_FORMATTER", e.INVALID_CONFIG = "INVALID_CONFIG", e.MISSING_DATA = "MISSING_DATA", e.MISSING_TRANSLATION = "MISSING_TRANSLATION";
})(bt ||= {});
var xt = function(e) {
	_(t, e);
	function t(n, r, i) {
		var a = this, o = i ? i instanceof Error ? i : Error(String(i)) : void 0;
		return a = e.call(this, `[@formatjs/intl Error ${n}] ${r}
${o ? `
${o.message}
${o.stack}` : ""}`) || this, a.code = n, typeof Error.captureStackTrace == "function" && Error.captureStackTrace(a, t), a;
	}
	return t;
}(Error), St = function(e) {
	_(t, e);
	function t(t, n) {
		return e.call(this, bt.UNSUPPORTED_FORMATTER, t, n) || this;
	}
	return t;
}(xt), Ct = function(e) {
	_(t, e);
	function t(t, n) {
		return e.call(this, bt.INVALID_CONFIG, t, n) || this;
	}
	return t;
}(xt), wt = function(e) {
	_(t, e);
	function t(t, n) {
		return e.call(this, bt.MISSING_DATA, t, n) || this;
	}
	return t;
}(xt), Tt = function(e) {
	_(t, e);
	function t(t, n, r) {
		var i = e.call(this, bt.FORMAT_ERROR, `${t}
Locale: ${n}
`, r) || this;
		return i.locale = n, i;
	}
	return t;
}(xt), Et = function(e) {
	_(t, e);
	function t(t, n, r, i) {
		var a = e.call(this, `${t}
MessageID: ${r?.id}
Default Message: ${r?.defaultMessage}
Description: ${r?.description}
`, n, i) || this;
		return a.descriptor = r, a.locale = n, a;
	}
	return t;
}(Tt), Dt = function(e) {
	_(t, e);
	function t(t, n) {
		var r = e.call(this, bt.MISSING_TRANSLATION, `Missing message: "${t.id}" for locale "${n}", using ${t.defaultMessage ? `default message (${typeof t.defaultMessage == "string" ? t.defaultMessage : t.defaultMessage.map(function(e) {
			return e.value ?? JSON.stringify(e);
		}).join()})` : "id"} as fallback.`) || this;
		return r.descriptor = t, r;
	}
	return t;
}(xt);
//#endregion
//#region node_modules/.pnpm/@formatjs+intl@2.10.15_typescript@5.9.3/node_modules/@formatjs/intl/lib/src/utils.js
function Ot(e, t, n) {
	return n === void 0 && (n = {}), t.reduce(function(t, r) {
		return r in e ? t[r] = e[r] : r in n && (t[r] = n[r]), t;
	}, {});
}
var kt = {
	formats: {},
	messages: {},
	timeZone: void 0,
	defaultLocale: "en",
	defaultFormats: {},
	fallbackOnEmptyString: !0,
	onError: function(e) {},
	onWarn: function(e) {}
};
function At() {
	return {
		dateTime: {},
		number: {},
		message: {},
		relativeTime: {},
		pluralRules: {},
		list: {},
		displayNames: {}
	};
}
function jt(e) {
	return { create: function() {
		return {
			get: function(t) {
				return e[t];
			},
			set: function(t, n) {
				e[t] = n;
			}
		};
	} };
}
function Mt(e) {
	e === void 0 && (e = At());
	var t = Intl.RelativeTimeFormat, n = Intl.ListFormat, r = Intl.DisplayNames, i = T(function() {
		for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
		return new ((e = Intl.DateTimeFormat).bind.apply(e, w([void 0], t, !1)))();
	}, {
		cache: jt(e.dateTime),
		strategy: ne.variadic
	}), a = T(function() {
		for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
		return new ((e = Intl.NumberFormat).bind.apply(e, w([void 0], t, !1)))();
	}, {
		cache: jt(e.number),
		strategy: ne.variadic
	}), o = T(function() {
		for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
		return new ((e = Intl.PluralRules).bind.apply(e, w([void 0], t, !1)))();
	}, {
		cache: jt(e.pluralRules),
		strategy: ne.variadic
	});
	return {
		getDateTimeFormat: i,
		getNumberFormat: a,
		getMessageFormat: T(function(e, t, n, r) {
			return new yt(e, t, n, v({ formatters: {
				getNumberFormat: a,
				getDateTimeFormat: i,
				getPluralRules: o
			} }, r || {}));
		}, {
			cache: jt(e.message),
			strategy: ne.variadic
		}),
		getRelativeTimeFormat: T(function() {
			var e = [...arguments];
			return new (t.bind.apply(t, w([void 0], e, !1)))();
		}, {
			cache: jt(e.relativeTime),
			strategy: ne.variadic
		}),
		getPluralRules: o,
		getListFormat: T(function() {
			var e = [...arguments];
			return new (n.bind.apply(n, w([void 0], e, !1)))();
		}, {
			cache: jt(e.list),
			strategy: ne.variadic
		}),
		getDisplayNames: T(function() {
			var e = [...arguments];
			return new (r.bind.apply(r, w([void 0], e, !1)))();
		}, {
			cache: jt(e.displayNames),
			strategy: ne.variadic
		})
	};
}
function Nt(e, t, n, r) {
	var i = e && e[t], a;
	if (i && (a = i[n]), a) return a;
	r(new St(`No ${t} format named: ${n}`));
}
//#endregion
//#region node_modules/.pnpm/@formatjs+intl@2.10.15_typescript@5.9.3/node_modules/@formatjs/intl/lib/src/message.js
function Pt(e, t) {
	return Object.keys(e).reduce(function(n, r) {
		return n[r] = v({ timeZone: t }, e[r]), n;
	}, {});
}
function Ft(e, t) {
	return Object.keys(v(v({}, e), t)).reduce(function(n, r) {
		return n[r] = v(v({}, e[r] || {}), t[r] || {}), n;
	}, {});
}
function It(e, t) {
	if (!t) return e;
	var n = yt.formats;
	return v(v(v({}, n), e), {
		date: Ft(Pt(n.date, t), Pt(e.date || {}, t)),
		time: Ft(Pt(n.time, t), Pt(e.time || {}, t))
	});
}
var Lt = function(e, t, n, r, i) {
	var a = e.locale, o = e.formats, s = e.messages, c = e.defaultLocale, l = e.defaultFormats, u = e.fallbackOnEmptyString, d = e.onError, f = e.timeZone, p = e.defaultRichTextElements;
	n === void 0 && (n = { id: "" });
	var m = n.id, h = n.defaultMessage;
	re(!!m, "[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue");
	var g = String(m), _ = s && Object.prototype.hasOwnProperty.call(s, g) && s[g];
	if (Array.isArray(_) && _.length === 1 && _[0].type === F.literal) return _[0].value;
	if (!r && _ && typeof _ == "string" && !p) return _.replace(/'\{(.*?)\}'/gi, "{$1}");
	if (r = v(v({}, p), r || {}), o = It(o, f), l = It(l, f), !_) {
		if (u === !1 && _ === "") return _;
		if ((!h || a && a.toLowerCase() !== c.toLowerCase()) && d(new Dt(n, a)), h) try {
			var y = t.getMessageFormat(h, c, l, i);
			return y.format(r);
		} catch (e) {
			return d(new Et(`Error formatting default message for: "${g}", rendering default message verbatim`, a, n, e)), typeof h == "string" ? h : g;
		}
		return g;
	}
	try {
		var y = t.getMessageFormat(_, a, o, v({ formatters: t }, i || {}));
		return y.format(r);
	} catch (e) {
		d(new Et(`Error formatting message: "${g}", using ${h ? "default message" : "id"} as fallback.`, a, n, e));
	}
	if (h) try {
		var y = t.getMessageFormat(h, c, l, i);
		return y.format(r);
	} catch (e) {
		d(new Et(`Error formatting the default message for: "${g}", rendering message verbatim`, a, n, e));
	}
	return typeof _ == "string" ? _ : typeof h == "string" ? h : g;
}, Rt = [
	"formatMatcher",
	"timeZone",
	"hour12",
	"weekday",
	"era",
	"year",
	"month",
	"day",
	"hour",
	"minute",
	"second",
	"timeZoneName",
	"hourCycle",
	"dateStyle",
	"timeStyle",
	"calendar",
	"numberingSystem",
	"fractionalSecondDigits"
];
function zt(e, t, n, r) {
	var i = e.locale, a = e.formats, o = e.onError, s = e.timeZone;
	r === void 0 && (r = {});
	var c = r.format, l = v(v({}, s && { timeZone: s }), c && Nt(a, t, c, o)), u = Ot(r, Rt, l);
	return t === "time" && !u.hour && !u.minute && !u.second && !u.timeStyle && !u.dateStyle && (u = v(v({}, u), {
		hour: "numeric",
		minute: "numeric"
	})), n(i, u);
}
function Bt(e, t) {
	var n = [...arguments].slice(2), r = n[0], i = n[1], a = i === void 0 ? {} : i, o = typeof r == "string" ? new Date(r || 0) : r;
	try {
		return zt(e, "date", t, a).format(o);
	} catch (t) {
		e.onError(new Tt("Error formatting date.", e.locale, t));
	}
	return String(o);
}
function Vt(e, t) {
	var n = [...arguments].slice(2), r = n[0], i = n[1], a = i === void 0 ? {} : i, o = typeof r == "string" ? new Date(r || 0) : r;
	try {
		return zt(e, "time", t, a).format(o);
	} catch (t) {
		e.onError(new Tt("Error formatting time.", e.locale, t));
	}
	return String(o);
}
function Ht(e, t) {
	var n = [...arguments].slice(2), r = n[0], i = n[1], a = n[2], o = a === void 0 ? {} : a, s = e.timeZone, c = e.locale, l = e.onError, u = Ot(o, Rt, s ? { timeZone: s } : {});
	try {
		return t(c, u).formatRange(r, i);
	} catch (t) {
		l(new Tt("Error formatting date time range.", e.locale, t));
	}
	return String(r);
}
function Ut(e, t) {
	var n = [...arguments].slice(2), r = n[0], i = n[1], a = i === void 0 ? {} : i, o = typeof r == "string" ? new Date(r || 0) : r;
	try {
		return zt(e, "date", t, a).formatToParts(o);
	} catch (t) {
		e.onError(new Tt("Error formatting date.", e.locale, t));
	}
	return [];
}
function R(e, t) {
	var n = [...arguments].slice(2), r = n[0], i = n[1], a = i === void 0 ? {} : i, o = typeof r == "string" ? new Date(r || 0) : r;
	try {
		return zt(e, "time", t, a).formatToParts(o);
	} catch (t) {
		e.onError(new Tt("Error formatting time.", e.locale, t));
	}
	return [];
}
//#endregion
//#region node_modules/.pnpm/@formatjs+intl@2.10.15_typescript@5.9.3/node_modules/@formatjs/intl/lib/src/displayName.js
var Wt = [
	"style",
	"type",
	"fallback",
	"languageDisplay"
];
function Gt(e, t, n, r) {
	var i = e.locale, a = e.onError;
	Intl.DisplayNames || a(new ct("Intl.DisplayNames is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-displaynames\"\n", st.MISSING_INTL_API));
	var o = Ot(r, Wt);
	try {
		return t(i, o).of(n);
	} catch (e) {
		a(new Tt("Error formatting display name.", i, e));
	}
}
//#endregion
//#region node_modules/.pnpm/@formatjs+intl@2.10.15_typescript@5.9.3/node_modules/@formatjs/intl/lib/src/list.js
var Kt = ["type", "style"], qt = Date.now();
function Jt(e) {
	return `${qt}_${e}_${qt}`;
}
function Yt(e, t, n, r) {
	r === void 0 && (r = {});
	var i = Xt(e, t, n, r).reduce(function(e, t) {
		var n = t.value;
		return typeof n == "string" && typeof e[e.length - 1] == "string" ? e[e.length - 1] += n : e.push(n), e;
	}, []);
	return i.length === 1 ? i[0] : i.length === 0 ? "" : i;
}
function Xt(e, t, n, r) {
	var i = e.locale, a = e.onError;
	r === void 0 && (r = {}), Intl.ListFormat || a(new ct("Intl.ListFormat is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-listformat\"\n", st.MISSING_INTL_API));
	var o = Ot(r, Kt);
	try {
		var s = {}, c = n.map(function(e, t) {
			if (typeof e == "object") {
				var n = Jt(t);
				return s[n] = e, n;
			}
			return String(e);
		});
		return t(i, o).formatToParts(c).map(function(e) {
			return e.type === "literal" ? e : v(v({}, e), { value: s[e.value] || e.value });
		});
	} catch (e) {
		a(new Tt("Error formatting list.", i, e));
	}
	return n;
}
//#endregion
//#region node_modules/.pnpm/@formatjs+intl@2.10.15_typescript@5.9.3/node_modules/@formatjs/intl/lib/src/plural.js
var Zt = ["type"];
function Qt(e, t, n, r) {
	var i = e.locale, a = e.onError;
	r === void 0 && (r = {}), Intl.PluralRules || a(new ct("Intl.PluralRules is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-pluralrules\"\n", st.MISSING_INTL_API));
	var o = Ot(r, Zt);
	try {
		return t(i, o).select(n);
	} catch (e) {
		a(new Tt("Error formatting plural.", i, e));
	}
	return "other";
}
//#endregion
//#region node_modules/.pnpm/@formatjs+intl@2.10.15_typescript@5.9.3/node_modules/@formatjs/intl/lib/src/relativeTime.js
var $t = ["numeric", "style"];
function en(e, t, n) {
	var r = e.locale, i = e.formats, a = e.onError;
	n === void 0 && (n = {});
	var o = n.format, s = !!o && Nt(i, "relative", o, a) || {};
	return t(r, Ot(n, $t, s));
}
function tn(e, t, n, r, i) {
	i === void 0 && (i = {}), r ||= "second", Intl.RelativeTimeFormat || e.onError(new ct("Intl.RelativeTimeFormat is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-relativetimeformat\"\n", st.MISSING_INTL_API));
	try {
		return en(e, t, i).format(n, r);
	} catch (t) {
		e.onError(new Tt("Error formatting relative time.", e.locale, t));
	}
	return String(n);
}
//#endregion
//#region node_modules/.pnpm/@formatjs+intl@2.10.15_typescript@5.9.3/node_modules/@formatjs/intl/lib/src/number.js
var nn = [
	"style",
	"currency",
	"unit",
	"unitDisplay",
	"useGrouping",
	"minimumIntegerDigits",
	"minimumFractionDigits",
	"maximumFractionDigits",
	"minimumSignificantDigits",
	"maximumSignificantDigits",
	"compactDisplay",
	"currencyDisplay",
	"currencySign",
	"notation",
	"signDisplay",
	"unit",
	"unitDisplay",
	"numberingSystem",
	"trailingZeroDisplay",
	"roundingPriority",
	"roundingIncrement",
	"roundingMode"
];
function rn(e, t, n) {
	var r = e.locale, i = e.formats, a = e.onError;
	n === void 0 && (n = {});
	var o = n.format, s = o && Nt(i, "number", o, a) || {};
	return t(r, Ot(n, nn, s));
}
function an(e, t, n, r) {
	r === void 0 && (r = {});
	try {
		return rn(e, t, r).format(n);
	} catch (t) {
		e.onError(new Tt("Error formatting number.", e.locale, t));
	}
	return String(n);
}
function on(e, t, n, r) {
	r === void 0 && (r = {});
	try {
		return rn(e, t, r).formatToParts(n);
	} catch (t) {
		e.onError(new Tt("Error formatting number.", e.locale, t));
	}
	return [];
}
//#endregion
//#region node_modules/.pnpm/@formatjs+intl@2.10.15_typescript@5.9.3/node_modules/@formatjs/intl/lib/src/create-intl.js
function sn(e) {
	return typeof (e ? e[Object.keys(e)[0]] : void 0) == "string";
}
function cn(e) {
	e.onWarn && e.defaultRichTextElements && sn(e.messages || {}) && e.onWarn("[@formatjs/intl] \"defaultRichTextElements\" was specified but \"message\" was not pre-compiled. \nPlease consider using \"@formatjs/cli\" to pre-compile your messages for performance.\nFor more details see https://formatjs.io/docs/getting-started/message-distribution");
}
function ln(e, t) {
	var n = Mt(t), r = v(v({}, kt), e), i = r.locale, a = r.defaultLocale, o = r.onError;
	return i ? !Intl.NumberFormat.supportedLocalesOf(i).length && o ? o(new wt(`Missing locale data for locale: "${i}" in Intl.NumberFormat. Using default locale: "${a}" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details`)) : !Intl.DateTimeFormat.supportedLocalesOf(i).length && o && o(new wt(`Missing locale data for locale: "${i}" in Intl.DateTimeFormat. Using default locale: "${a}" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details`)) : (o && o(new Ct(`"locale" was not configured, using "${a}" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details`)), r.locale = r.defaultLocale || "en"), cn(r), v(v({}, r), {
		formatters: n,
		formatNumber: an.bind(null, r, n.getNumberFormat),
		formatNumberToParts: on.bind(null, r, n.getNumberFormat),
		formatRelativeTime: tn.bind(null, r, n.getRelativeTimeFormat),
		formatDate: Bt.bind(null, r, n.getDateTimeFormat),
		formatDateToParts: Ut.bind(null, r, n.getDateTimeFormat),
		formatTime: Vt.bind(null, r, n.getDateTimeFormat),
		formatDateTimeRange: Ht.bind(null, r, n.getDateTimeFormat),
		formatTimeToParts: R.bind(null, r, n.getDateTimeFormat),
		formatPlural: Qt.bind(null, r, n.getPluralRules),
		formatMessage: Lt.bind(null, r, n),
		$t: Lt.bind(null, r, n),
		formatList: Yt.bind(null, r, n.getListFormat),
		formatListToParts: Xt.bind(null, r, n.getListFormat),
		formatDisplayName: Gt.bind(null, r, n.getDisplayNames)
	});
}
//#endregion
//#region node_modules/.pnpm/react-intl@6.8.9_react@18.3.1_typescript@5.9.3/node_modules/react-intl/lib/src/utils.js
var z = /* @__PURE__ */ c(u());
function un(e) {
	re(e, "[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.");
}
var dn = v(v({}, kt), { textComponent: z.Fragment });
function fn(e) {
	return function(t) {
		return e(z.Children.toArray(t));
	};
}
function pn(e, t) {
	if (e === t) return !0;
	if (!e || !t) return !1;
	var n = Object.keys(e), r = Object.keys(t), i = n.length;
	if (r.length !== i) return !1;
	for (var a = 0; a < i; a++) {
		var o = n[a];
		if (e[o] !== t[o] || !Object.prototype.hasOwnProperty.call(t, o)) return !1;
	}
	return !0;
}
//#endregion
//#region node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/cjs/react-is.production.min.js
var mn = /* @__PURE__ */ o(((e) => {
	var t = typeof Symbol == "function" && Symbol.for, n = t ? Symbol.for("react.element") : 60103, r = t ? Symbol.for("react.portal") : 60106, i = t ? Symbol.for("react.fragment") : 60107, a = t ? Symbol.for("react.strict_mode") : 60108, o = t ? Symbol.for("react.profiler") : 60114, s = t ? Symbol.for("react.provider") : 60109, c = t ? Symbol.for("react.context") : 60110, l = t ? Symbol.for("react.async_mode") : 60111, u = t ? Symbol.for("react.concurrent_mode") : 60111, d = t ? Symbol.for("react.forward_ref") : 60112, f = t ? Symbol.for("react.suspense") : 60113, p = t ? Symbol.for("react.suspense_list") : 60120, m = t ? Symbol.for("react.memo") : 60115, h = t ? Symbol.for("react.lazy") : 60116, g = t ? Symbol.for("react.block") : 60121, _ = t ? Symbol.for("react.fundamental") : 60117, v = t ? Symbol.for("react.responder") : 60118, y = t ? Symbol.for("react.scope") : 60119;
	function b(e) {
		if (typeof e == "object" && e) {
			var t = e.$$typeof;
			switch (t) {
				case n: switch (e = e.type, e) {
					case l:
					case u:
					case i:
					case o:
					case a:
					case f: return e;
					default: switch (e &&= e.$$typeof, e) {
						case c:
						case d:
						case h:
						case m:
						case s: return e;
						default: return t;
					}
				}
				case r: return t;
			}
		}
	}
	function x(e) {
		return b(e) === u;
	}
	e.AsyncMode = l, e.ConcurrentMode = u, e.ContextConsumer = c, e.ContextProvider = s, e.Element = n, e.ForwardRef = d, e.Fragment = i, e.Lazy = h, e.Memo = m, e.Portal = r, e.Profiler = o, e.StrictMode = a, e.Suspense = f, e.isAsyncMode = function(e) {
		return x(e) || b(e) === l;
	}, e.isConcurrentMode = x, e.isContextConsumer = function(e) {
		return b(e) === c;
	}, e.isContextProvider = function(e) {
		return b(e) === s;
	}, e.isElement = function(e) {
		return typeof e == "object" && !!e && e.$$typeof === n;
	}, e.isForwardRef = function(e) {
		return b(e) === d;
	}, e.isFragment = function(e) {
		return b(e) === i;
	}, e.isLazy = function(e) {
		return b(e) === h;
	}, e.isMemo = function(e) {
		return b(e) === m;
	}, e.isPortal = function(e) {
		return b(e) === r;
	}, e.isProfiler = function(e) {
		return b(e) === o;
	}, e.isStrictMode = function(e) {
		return b(e) === a;
	}, e.isSuspense = function(e) {
		return b(e) === f;
	}, e.isValidElementType = function(e) {
		return typeof e == "string" || typeof e == "function" || e === i || e === u || e === o || e === a || e === f || e === p || typeof e == "object" && !!e && (e.$$typeof === h || e.$$typeof === m || e.$$typeof === s || e.$$typeof === c || e.$$typeof === d || e.$$typeof === _ || e.$$typeof === v || e.$$typeof === y || e.$$typeof === g);
	}, e.typeOf = b;
})), hn = /* @__PURE__ */ o(((e, t) => {
	t.exports = mn();
})), gn = /* @__PURE__ */ o(((e, t) => {
	var n = hn(), r = {
		childContextTypes: !0,
		contextType: !0,
		contextTypes: !0,
		defaultProps: !0,
		displayName: !0,
		getDefaultProps: !0,
		getDerivedStateFromError: !0,
		getDerivedStateFromProps: !0,
		mixins: !0,
		propTypes: !0,
		type: !0
	}, i = {
		name: !0,
		length: !0,
		prototype: !0,
		caller: !0,
		callee: !0,
		arguments: !0,
		arity: !0
	}, a = {
		$$typeof: !0,
		render: !0,
		defaultProps: !0,
		displayName: !0,
		propTypes: !0
	}, o = {
		$$typeof: !0,
		compare: !0,
		defaultProps: !0,
		displayName: !0,
		propTypes: !0,
		type: !0
	}, s = {};
	s[n.ForwardRef] = a, s[n.Memo] = o;
	function c(e) {
		return n.isMemo(e) ? o : s[e.$$typeof] || r;
	}
	var l = Object.defineProperty, u = Object.getOwnPropertyNames, d = Object.getOwnPropertySymbols, f = Object.getOwnPropertyDescriptor, p = Object.getPrototypeOf, m = Object.prototype;
	function h(e, t, n) {
		if (typeof t != "string") {
			if (m) {
				var r = p(t);
				r && r !== m && h(e, r, n);
			}
			var a = u(t);
			d && (a = a.concat(d(t)));
			for (var o = c(e), s = c(t), g = 0; g < a.length; ++g) {
				var _ = a[g];
				if (!i[_] && !(n && n[_]) && !(s && s[_]) && !(o && o[_])) {
					var v = f(t, _);
					try {
						l(e, _, v);
					} catch {}
				}
			}
		}
		return e;
	}
	t.exports = h;
}));
gn();
var _n = typeof window < "u" && !window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__ ? window.__REACT_INTL_CONTEXT__ || (window.__REACT_INTL_CONTEXT__ = z.createContext(null)) : z.createContext(null);
_n.Consumer;
var vn = _n.Provider, yn = _n;
//#endregion
//#region node_modules/.pnpm/react-intl@6.8.9_react@18.3.1_typescript@5.9.3/node_modules/react-intl/lib/src/components/useIntl.js
function bn() {
	var e = z.useContext(yn);
	return un(e), e;
}
//#endregion
//#region node_modules/.pnpm/react-intl@6.8.9_react@18.3.1_typescript@5.9.3/node_modules/react-intl/lib/src/components/createFormattedComponent.js
var xn;
(function(e) {
	e.formatDate = "FormattedDate", e.formatTime = "FormattedTime", e.formatNumber = "FormattedNumber", e.formatList = "FormattedList", e.formatDisplayName = "FormattedDisplayName";
})(xn ||= {});
var Sn;
(function(e) {
	e.formatDate = "FormattedDateParts", e.formatTime = "FormattedTimeParts", e.formatNumber = "FormattedNumberParts", e.formatList = "FormattedListParts";
})(Sn ||= {});
var Cn = function(e) {
	var t = bn(), n = e.value, r = e.children, i = y(e, ["value", "children"]);
	return r(t.formatNumberToParts(n, i));
};
Cn.displayName = "FormattedNumberParts", Cn.displayName = "FormattedNumberParts";
function wn(e) {
	var t = function(t) {
		var n = bn(), r = t.value, i = t.children, a = y(t, ["value", "children"]), o = typeof r == "string" ? new Date(r || 0) : r;
		return i(e === "formatDate" ? n.formatDateToParts(o, a) : n.formatTimeToParts(o, a));
	};
	return t.displayName = Sn[e], t;
}
function Tn(e) {
	var t = function(t) {
		var n = bn(), r = t.value, i = t.children, a = y(t, ["value", "children"]), o = n[e](r, a);
		if (typeof i == "function") return i(o);
		var s = n.textComponent || z.Fragment;
		return z.createElement(s, null, o);
	};
	return t.displayName = xn[e], t;
}
//#endregion
//#region node_modules/.pnpm/react-intl@6.8.9_react@18.3.1_typescript@5.9.3/node_modules/react-intl/lib/src/components/createIntl.js
function En(e) {
	return e && Object.keys(e).reduce(function(t, n) {
		var r = e[n];
		return t[n] = mt(r) ? fn(r) : r, t;
	}, {});
}
var Dn = function(e, t, n, r) {
	var i = [...arguments].slice(4), a = En(r), o = Lt.apply(void 0, w([
		e,
		t,
		n,
		a
	], i, !1));
	return Array.isArray(o) ? z.Children.toArray(o) : o;
}, On = function(e, t) {
	var n = e.defaultRichTextElements, r = y(e, ["defaultRichTextElements"]), i = En(n), a = ln(v(v(v({}, dn), r), { defaultRichTextElements: i }), t), o = {
		locale: a.locale,
		timeZone: a.timeZone,
		fallbackOnEmptyString: a.fallbackOnEmptyString,
		formats: a.formats,
		defaultLocale: a.defaultLocale,
		defaultFormats: a.defaultFormats,
		messages: a.messages,
		onError: a.onError,
		defaultRichTextElements: i
	};
	return v(v({}, a), {
		formatMessage: Dn.bind(null, o, a.formatters),
		$t: Dn.bind(null, o, a.formatters)
	});
};
//#endregion
//#region node_modules/.pnpm/react-intl@6.8.9_react@18.3.1_typescript@5.9.3/node_modules/react-intl/lib/src/components/provider.js
function kn(e) {
	return {
		locale: e.locale,
		timeZone: e.timeZone,
		fallbackOnEmptyString: e.fallbackOnEmptyString,
		formats: e.formats,
		textComponent: e.textComponent,
		messages: e.messages,
		defaultLocale: e.defaultLocale,
		defaultFormats: e.defaultFormats,
		onError: e.onError,
		onWarn: e.onWarn,
		wrapRichTextChunksInFragment: e.wrapRichTextChunksInFragment,
		defaultRichTextElements: e.defaultRichTextElements
	};
}
var An = function(e) {
	_(t, e);
	function t() {
		var t = e !== null && e.apply(this, arguments) || this;
		return t.cache = At(), t.state = {
			cache: t.cache,
			intl: On(kn(t.props), t.cache),
			prevConfig: kn(t.props)
		}, t;
	}
	return t.getDerivedStateFromProps = function(e, t) {
		var n = t.prevConfig, r = t.cache, i = kn(e);
		return pn(n, i) ? null : {
			intl: On(i, r),
			prevConfig: i
		};
	}, t.prototype.render = function() {
		return un(this.state.intl), z.createElement(vn, { value: this.state.intl }, this.props.children);
	}, t.displayName = "IntlProvider", t.defaultProps = dn, t;
}(z.PureComponent);
//#endregion
//#region node_modules/.pnpm/react-intl@6.8.9_react@18.3.1_typescript@5.9.3/node_modules/react-intl/lib/src/components/message.js
function jn(e, t) {
	var n = e.values, r = y(e, ["values"]), i = t.values, a = y(t, ["values"]);
	return pn(i, n) && pn(r, a);
}
function Mn(e) {
	var t = bn(), n = t.formatMessage, r = t.textComponent, i = r === void 0 ? z.Fragment : r, a = e.id, o = e.description, s = e.defaultMessage, c = e.values, l = e.children, u = e.tagName, d = u === void 0 ? i : u, f = e.ignoreTag, p = n({
		id: a,
		description: o,
		defaultMessage: s
	}, c, { ignoreTag: f });
	return typeof l == "function" ? l(Array.isArray(p) ? p : [p]) : d ? z.createElement(d, null, z.Children.toArray(p)) : z.createElement(z.Fragment, null, p);
}
Mn.displayName = "FormattedMessage";
var Nn = z.memo(Mn, jn);
Nn.displayName = "MemoizedFormattedMessage";
//#endregion
//#region node_modules/.pnpm/react-intl@6.8.9_react@18.3.1_typescript@5.9.3/node_modules/react-intl/lib/index.js
function Pn(e) {
	return e;
}
Tn("formatDate"), Tn("formatTime"), Tn("formatNumber"), Tn("formatList"), Tn("formatDisplayName"), wn("formatDate"), wn("formatTime");
//#endregion
//#region node_modules/.pnpm/react@18.3.1/node_modules/react/cjs/react-jsx-runtime.production.min.js
var Fn = /* @__PURE__ */ o(((e) => {
	var t = u(), n = Symbol.for("react.element"), r = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, a = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = {
		key: !0,
		ref: !0,
		__self: !0,
		__source: !0
	};
	function s(e, t, r) {
		var s, c = {}, l = null, u = null;
		for (s in r !== void 0 && (l = "" + r), t.key !== void 0 && (l = "" + t.key), t.ref !== void 0 && (u = t.ref), t) i.call(t, s) && !o.hasOwnProperty(s) && (c[s] = t[s]);
		if (e && e.defaultProps) for (s in t = e.defaultProps, t) c[s] === void 0 && (c[s] = t[s]);
		return {
			$$typeof: n,
			type: e,
			key: l,
			ref: u,
			props: c,
			_owner: a.current
		};
	}
	e.Fragment = r, e.jsx = s, e.jsxs = s;
})), In = /* @__PURE__ */ o(((e, t) => {
	t.exports = Fn();
})), Ln = h(), Rn = In(), zn = (0, z.createContext)({
	runtime: {
		handlerUrl() {
			return "";
		},
		notify() {}
	},
	element: document.createElement("div")
}), Bn = (e) => {
	let t = (0, z.useContext)(zn);
	return t.runtime.handlerUrl(t.element, e);
}, Vn = (e, t) => {
	if (t != null && !(typeof t != "object" && typeof t != "function")) {
		for (let n of Object.getOwnPropertyNames(t)) if (n.startsWith("_jsrt")) {
			let r = n;
			e[r] = t[r];
		}
	}
}, Hn = (e) => {
	let t = e && "jquery" in e ? e[0] : e;
	if (!t || !(t instanceof Element)) throw console.error("Invalid DOM element provided to renderBlock:", e), Error("Invalid DOM Element. See previously logged details.");
	return Vn(t, e), t;
}, Un = async (e) => {
	let t = {};
	try {
		t = (await (await fetch(e)).json()).PARAGON_THEME_URLS;
	} catch (e) {
		console.error("Failed to fetch theme URLs:", e);
	}
	let n = t?.default?.light, r = ["https://cdn.jsdelivr.net/npm/@openedx/paragon@23/dist/light.min.css", t?.variants?.[n]?.urls?.brandOverride].filter(Boolean);
	return {
		core: ["https://cdn.jsdelivr.net/npm/@openedx/paragon@23/dist/core.min.css", t?.core?.urls?.brandOverride].filter(Boolean),
		theme: r
	};
}, Wn = !0, Gn = ({ runtime: e, element: t, config: n, styles: r }) => async (i) => {
	let { core: a, theme: o } = await Un(n.mfe_config_api), s = Hn(t), c = null, l = s;
	if (Wn && (c = s.attachShadow({ mode: "open" }), l = document.createElement("div"), l.classList.add("xblock-root"), c.appendChild(l)), r) {
		let e = document.createElement("style");
		e.textContent = r, c ? c.appendChild(e) : document.head.appendChild(e);
	}
	a.forEach((e) => {
		let t = document.createElement("link");
		t.rel = "stylesheet", t.href = e, c?.appendChild(t), document.head.querySelector(`link[href="${e}"]`) || document.head.appendChild(t.cloneNode());
	}), o.forEach((e) => {
		let t = document.createElement("link");
		t.rel = "stylesheet", t.href = e, c?.appendChild(t), document.head.querySelector(`link[href="${e}"]`) || document.head.appendChild(t.cloneNode());
	}), (0, Ln.createRoot)(l).render(/* @__PURE__ */ (0, Rn.jsx)(z.StrictMode, { children: /* @__PURE__ */ (0, Rn.jsx)(zn.Provider, {
		value: {
			runtime: e,
			element: s
		},
		children: /* @__PURE__ */ (0, Rn.jsx)(An, {
			locale: "en",
			children: i
		})
	}) }));
}, Kn = ({ saveUrl: e, data: t, runtime: n, errorMessage: r = "Failed to save configuration" }) => {
	n.notify("save", { state: "start" }), $.post(e, JSON.stringify(t)).done(() => {
		n.notify("save", { state: "end" });
	}).fail((e) => {
		let t = typeof r == "function" ? r(e) : r;
		n.notify("error", {
			title: "Save Error",
			message: t
		});
	});
}, qn = /* @__PURE__ */ o(((e, t) => {
	(function() {
		var e = {}.hasOwnProperty;
		function n() {
			for (var e = "", t = 0; t < arguments.length; t++) {
				var n = arguments[t];
				n && (e = i(e, r(n)));
			}
			return e;
		}
		function r(t) {
			if (typeof t == "string" || typeof t == "number") return t;
			if (typeof t != "object") return "";
			if (Array.isArray(t)) return n.apply(null, t);
			if (t.toString !== Object.prototype.toString && !t.toString.toString().includes("[native code]")) return t.toString();
			var r = "";
			for (var a in t) e.call(t, a) && t[a] && (r = i(r, a));
			return r;
		}
		function i(e, t) {
			return t ? e ? e + " " + t : e + t : e;
		}
		t !== void 0 && t.exports ? (n.default = n, t.exports = n) : typeof define == "function" && typeof define.amd == "object" && define.amd ? define("classnames", [], function() {
			return n;
		}) : window.classNames = n;
	})();
}));
//#endregion
//#region node_modules/.pnpm/@babel+runtime@7.29.2/node_modules/@babel/runtime/helpers/esm/extends.js
function B() {
	return B = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, B.apply(null, arguments);
}
//#endregion
//#region node_modules/.pnpm/@babel+runtime@7.29.2/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function Jn(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
//#endregion
//#region node_modules/.pnpm/invariant@2.2.4/node_modules/invariant/browser.js
var Yn = /* @__PURE__ */ o(((e, t) => {
	t.exports = function(e, t, n, r, i, a, o, s) {
		if (!e) {
			var c;
			if (t === void 0) c = /* @__PURE__ */ Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
			else {
				var l = [
					n,
					r,
					i,
					a,
					o,
					s
				], u = 0;
				c = Error(t.replace(/%s/g, function() {
					return l[u++];
				})), c.name = "Invariant Violation";
			}
			throw c.framesToPop = 1, c;
		}
	};
}));
Yn();
function Xn(e) {
	return "default" + e.charAt(0).toUpperCase() + e.substr(1);
}
//#endregion
//#region node_modules/.pnpm/uncontrollable@7.2.1_react@18.3.1/node_modules/uncontrollable/lib/esm/hook.js
function Zn(e) {
	var t = Qn(e, "string");
	return typeof t == "symbol" ? t : String(t);
}
function Qn(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function $n(e, t, n) {
	var r = (0, z.useRef)(e !== void 0), i = (0, z.useState)(t), a = i[0], o = i[1], s = e !== void 0, c = r.current;
	return r.current = s, !s && c && a !== t && o(t), [s ? e : a, (0, z.useCallback)(function(e) {
		var t = [...arguments].slice(1);
		n && n.apply(void 0, [e].concat(t)), o(e);
	}, [n])];
}
function er(e, t) {
	return Object.keys(t).reduce(function(n, r) {
		var i, a = n, o = a[Xn(r)], s = a[r], c = Jn(a, [Xn(r), r].map(Zn)), l = t[r], u = $n(s, o, e[l]), d = u[0], f = u[1];
		return B({}, c, (i = {}, i[r] = d, i[l] = f, i));
	}, e);
}
//#endregion
//#region node_modules/.pnpm/@babel+runtime@7.29.2/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function tr(e, t) {
	return tr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
		return e.__proto__ = t, e;
	}, tr(e, t);
}
//#endregion
//#region node_modules/.pnpm/@babel+runtime@7.29.2/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
function nr(e, t) {
	e.prototype = Object.create(t.prototype), e.prototype.constructor = e, tr(e, t);
}
//#endregion
//#region node_modules/.pnpm/react-lifecycles-compat@3.0.4/node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js
function rr() {
	var e = this.constructor.getDerivedStateFromProps(this.props, this.state);
	e != null && this.setState(e);
}
function ir(e) {
	function t(t) {
		return this.constructor.getDerivedStateFromProps(e, t) ?? null;
	}
	this.setState(t.bind(this));
}
function ar(e, t) {
	try {
		var n = this.props, r = this.state;
		this.props = e, this.state = t, this.__reactInternalSnapshotFlag = !0, this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(n, r);
	} finally {
		this.props = n, this.state = r;
	}
}
rr.__suppressDeprecationWarning = !0, ir.__suppressDeprecationWarning = !0, ar.__suppressDeprecationWarning = !0;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/ThemeProvider.js
var or = /* @__PURE__ */ z.createContext({});
or.Consumer, or.Provider;
function sr(e, t) {
	var n = (0, z.useContext)(or);
	return e || n[t] || t;
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/ownerDocument.js
function cr(e) {
	return e && e.ownerDocument || document;
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/ownerWindow.js
function lr(e) {
	var t = cr(e);
	return t && t.defaultView || window;
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/getComputedStyle.js
function ur(e, t) {
	return lr(e).getComputedStyle(e, t);
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/hyphenate.js
var dr = /([A-Z])/g;
function fr(e) {
	return e.replace(dr, "-$1").toLowerCase();
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/hyphenateStyle.js
var pr = /^ms-/;
function mr(e) {
	return fr(e).replace(pr, "-ms-");
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/isTransform.js
var hr = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
function gr(e) {
	return !!(e && hr.test(e));
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/css.js
function _r(e, t) {
	var n = "", r = "";
	if (typeof t == "string") return e.style.getPropertyValue(mr(t)) || ur(e).getPropertyValue(mr(t));
	Object.keys(t).forEach(function(i) {
		var a = t[i];
		!a && a !== 0 ? e.style.removeProperty(mr(i)) : gr(i) ? r += i + "(" + a + ") " : n += mr(i) + ": " + a + ";";
	}), r && (n += "transform: " + r + ";"), e.style.cssText += ";" + n;
}
//#endregion
//#region node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/lib/ReactPropTypesSecret.js
var vr = /* @__PURE__ */ o(((e, t) => {
	t.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
})), yr = /* @__PURE__ */ o(((e, t) => {
	var n = vr();
	function r() {}
	function i() {}
	i.resetWarningCache = r, t.exports = function() {
		function e(e, t, r, i, a, o) {
			if (o !== n) {
				var s = /* @__PURE__ */ Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
				throw s.name = "Invariant Violation", s;
			}
		}
		e.isRequired = e;
		function t() {
			return e;
		}
		var a = {
			array: e,
			bigint: e,
			bool: e,
			func: e,
			number: e,
			object: e,
			string: e,
			symbol: e,
			any: e,
			arrayOf: t,
			element: e,
			elementType: e,
			instanceOf: t,
			node: e,
			objectOf: t,
			oneOf: t,
			oneOfType: t,
			shape: t,
			exact: t,
			checkPropTypes: i,
			resetWarningCache: r
		};
		return a.PropTypes = a, a;
	};
})), br = /* @__PURE__ */ o(((e, t) => {
	t.exports = yr()();
})), xr = { disabled: !1 }, Sr = z.createContext(null), Cr = function(e) {
	return e.scrollTop;
}, wr = /* @__PURE__ */ c(m()), Tr = "unmounted", Er = "exited", Dr = "entering", Or = "entered", kr = "exiting", Ar = /* @__PURE__ */ function(e) {
	nr(t, e);
	function t(t, n) {
		var r = e.call(this, t, n) || this, i = n, a = i && !i.isMounting ? t.enter : t.appear, o;
		return r.appearStatus = null, t.in ? a ? (o = Er, r.appearStatus = Dr) : o = Or : o = t.unmountOnExit || t.mountOnEnter ? Tr : Er, r.state = { status: o }, r.nextCallback = null, r;
	}
	t.getDerivedStateFromProps = function(e, t) {
		return e.in && t.status === "unmounted" ? { status: Er } : null;
	};
	var n = t.prototype;
	return n.componentDidMount = function() {
		this.updateStatus(!0, this.appearStatus);
	}, n.componentDidUpdate = function(e) {
		var t = null;
		if (e !== this.props) {
			var n = this.state.status;
			this.props.in ? n !== "entering" && n !== "entered" && (t = Dr) : (n === "entering" || n === "entered") && (t = kr);
		}
		this.updateStatus(!1, t);
	}, n.componentWillUnmount = function() {
		this.cancelNextCallback();
	}, n.getTimeouts = function() {
		var e = this.props.timeout, t = n = r = e, n, r;
		return e != null && typeof e != "number" && (t = e.exit, n = e.enter, r = e.appear === void 0 ? n : e.appear), {
			exit: t,
			enter: n,
			appear: r
		};
	}, n.updateStatus = function(e, t) {
		if (e === void 0 && (e = !1), t !== null) if (this.cancelNextCallback(), t === "entering") {
			if (this.props.unmountOnExit || this.props.mountOnEnter) {
				var n = this.props.nodeRef ? this.props.nodeRef.current : wr.findDOMNode(this);
				n && Cr(n);
			}
			this.performEnter(e);
		} else this.performExit();
		else this.props.unmountOnExit && this.state.status === "exited" && this.setState({ status: Tr });
	}, n.performEnter = function(e) {
		var t = this, n = this.props.enter, r = this.context ? this.context.isMounting : e, i = this.props.nodeRef ? [r] : [wr.findDOMNode(this), r], a = i[0], o = i[1], s = this.getTimeouts(), c = r ? s.appear : s.enter;
		if (!e && !n || xr.disabled) {
			this.safeSetState({ status: Or }, function() {
				t.props.onEntered(a);
			});
			return;
		}
		this.props.onEnter(a, o), this.safeSetState({ status: Dr }, function() {
			t.props.onEntering(a, o), t.onTransitionEnd(c, function() {
				t.safeSetState({ status: Or }, function() {
					t.props.onEntered(a, o);
				});
			});
		});
	}, n.performExit = function() {
		var e = this, t = this.props.exit, n = this.getTimeouts(), r = this.props.nodeRef ? void 0 : wr.findDOMNode(this);
		if (!t || xr.disabled) {
			this.safeSetState({ status: Er }, function() {
				e.props.onExited(r);
			});
			return;
		}
		this.props.onExit(r), this.safeSetState({ status: kr }, function() {
			e.props.onExiting(r), e.onTransitionEnd(n.exit, function() {
				e.safeSetState({ status: Er }, function() {
					e.props.onExited(r);
				});
			});
		});
	}, n.cancelNextCallback = function() {
		this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
	}, n.safeSetState = function(e, t) {
		t = this.setNextCallback(t), this.setState(e, t);
	}, n.setNextCallback = function(e) {
		var t = this, n = !0;
		return this.nextCallback = function(r) {
			n && (n = !1, t.nextCallback = null, e(r));
		}, this.nextCallback.cancel = function() {
			n = !1;
		}, this.nextCallback;
	}, n.onTransitionEnd = function(e, t) {
		this.setNextCallback(t);
		var n = this.props.nodeRef ? this.props.nodeRef.current : wr.findDOMNode(this), r = e == null && !this.props.addEndListener;
		if (!n || r) {
			setTimeout(this.nextCallback, 0);
			return;
		}
		if (this.props.addEndListener) {
			var i = this.props.nodeRef ? [this.nextCallback] : [n, this.nextCallback], a = i[0], o = i[1];
			this.props.addEndListener(a, o);
		}
		e != null && setTimeout(this.nextCallback, e);
	}, n.render = function() {
		var e = this.state.status;
		if (e === "unmounted") return null;
		var t = this.props, n = t.children;
		t.in, t.mountOnEnter, t.unmountOnExit, t.appear, t.enter, t.exit, t.timeout, t.addEndListener, t.onEnter, t.onEntering, t.onEntered, t.onExit, t.onExiting, t.onExited, t.nodeRef;
		var r = Jn(t, [
			"children",
			"in",
			"mountOnEnter",
			"unmountOnExit",
			"appear",
			"enter",
			"exit",
			"timeout",
			"addEndListener",
			"onEnter",
			"onEntering",
			"onEntered",
			"onExit",
			"onExiting",
			"onExited",
			"nodeRef"
		]);
		return /* @__PURE__ */ z.createElement(Sr.Provider, { value: null }, typeof n == "function" ? n(e, r) : z.cloneElement(z.Children.only(n), r));
	}, t;
}(z.Component);
Ar.contextType = Sr, Ar.propTypes = {};
function jr() {}
Ar.defaultProps = {
	in: !1,
	mountOnEnter: !1,
	unmountOnExit: !1,
	appear: !1,
	enter: !0,
	exit: !0,
	onEnter: jr,
	onEntering: jr,
	onEntered: jr,
	onExit: jr,
	onExiting: jr,
	onExited: jr
}, Ar.UNMOUNTED = Tr, Ar.EXITED = Er, Ar.ENTERING = Dr, Ar.ENTERED = Or, Ar.EXITING = kr;
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/canUseDOM.js
var Mr = !!(typeof window < "u" && window.document && window.document.createElement), Nr = !1, Pr = !1;
try {
	var Fr = {
		get passive() {
			return Nr = !0;
		},
		get once() {
			return Pr = Nr = !0;
		}
	};
	Mr && (window.addEventListener("test", Fr, Fr), window.removeEventListener("test", Fr, !0));
} catch {}
function Ir(e, t, n, r) {
	if (r && typeof r != "boolean" && !Pr) {
		var i = r.once, a = r.capture, o = n;
		!Pr && i && (o = n.__once || function e(r) {
			this.removeEventListener(t, e, a), n.call(this, r);
		}, n.__once = o), e.addEventListener(t, o, Nr ? r : a);
	}
	e.addEventListener(t, n, r);
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/removeEventListener.js
function Lr(e, t, n, r) {
	var i = r && typeof r != "boolean" ? r.capture : r;
	e.removeEventListener(t, n, i), n.__once && e.removeEventListener(t, n.__once, i);
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/listen.js
function Rr(e, t, n, r) {
	return Ir(e, t, n, r), function() {
		Lr(e, t, n, r);
	};
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/triggerEvent.js
function zr(e, t, n, r) {
	if (n === void 0 && (n = !1), r === void 0 && (r = !0), e) {
		var i = document.createEvent("HTMLEvents");
		i.initEvent(t, n, r), e.dispatchEvent(i);
	}
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/transitionEnd.js
function Br(e) {
	var t = _r(e, "transitionDuration") || "", n = t.indexOf("ms") === -1 ? 1e3 : 1;
	return parseFloat(t) * n;
}
function Vr(e, t, n) {
	n === void 0 && (n = 5);
	var r = !1, i = setTimeout(function() {
		r || zr(e, "transitionend", !0);
	}, t + n), a = Rr(e, "transitionend", function() {
		r = !0;
	}, { once: !0 });
	return function() {
		clearTimeout(i), a();
	};
}
function Hr(e, t, n, r) {
	n ??= Br(e) || 0;
	var i = Vr(e, n, r), a = Rr(e, "transitionend", t);
	return function() {
		i(), a();
	};
}
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/transitionEndListener.js
function Ur(e, t) {
	var n = _r(e, t) || "", r = n.indexOf("ms") === -1 ? 1e3 : 1;
	return parseFloat(n) * r;
}
function Wr(e, t) {
	var n = Hr(e, function(r) {
		r.target === e && (n(), t(r));
	}, Ur(e, "transitionDuration") + Ur(e, "transitionDelay"));
}
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/createChainedFunction.js
function Gr() {
	return [...arguments].filter(function(e) {
		return e != null;
	}).reduce(function(e, t) {
		if (typeof t != "function") throw Error("Invalid Argument Type, must only provide functions, undefined, or null.");
		return e === null ? t : function() {
			var n = [...arguments];
			e.apply(this, n), t.apply(this, n);
		};
	}, null);
}
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/triggerBrowserReflow.js
function Kr(e) {
	e.offsetHeight;
}
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useCommittedRef.js
function qr(e) {
	let t = (0, z.useRef)(e);
	return (0, z.useEffect)(() => {
		t.current = e;
	}, [e]), t;
}
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useEventCallback.js
function Jr(e) {
	let t = qr(e);
	return (0, z.useCallback)(function(...e) {
		return t.current && t.current(...e);
	}, [t]);
}
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Fade.js
var Yr = /* @__PURE__ */ c(qn()), Xr = ["className", "children"], Zr, Qr = {
	in: !1,
	timeout: 300,
	mountOnEnter: !1,
	unmountOnExit: !1,
	appear: !1
}, $r = (Zr = {}, Zr[Dr] = "show", Zr[Or] = "show", Zr), ei = /* @__PURE__ */ z.forwardRef(function(e, t) {
	var n = e.className, r = e.children, i = Jn(e, Xr), a = (0, z.useCallback)(function(e) {
		Kr(e), i.onEnter && i.onEnter(e);
	}, [i]);
	return /* @__PURE__ */ z.createElement(Ar, B({
		ref: t,
		addEndListener: Wr
	}, i, { onEnter: a }), function(e, t) {
		return /* @__PURE__ */ z.cloneElement(r, B({}, t, { className: (0, Yr.default)("fade", n, r.props.className, $r[e]) }));
	});
});
ei.defaultProps = Qr, ei.displayName = "Fade";
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/SafeAnchor.js
var ti = [
	"as",
	"disabled",
	"onKeyDown"
];
function ni(e) {
	return !e || e.trim() === "#";
}
var ri = /* @__PURE__ */ z.forwardRef(function(e, t) {
	var n = e.as, r = n === void 0 ? "a" : n, i = e.disabled, a = e.onKeyDown, o = Jn(e, ti), s = function(e) {
		var t = o.href, n = o.onClick;
		if ((i || ni(t)) && e.preventDefault(), i) {
			e.stopPropagation();
			return;
		}
		n && n(e);
	};
	return ni(o.href) && (o.role = o.role || "button", o.href = o.href || "#"), i && (o.tabIndex = -1, o["aria-disabled"] = !0), /* @__PURE__ */ z.createElement(r, B({ ref: t }, o, {
		onClick: s,
		onKeyDown: Gr(function(e) {
			e.key === " " && (e.preventDefault(), s(e));
		}, a)
	}));
});
ri.displayName = "SafeAnchor";
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Button.js
var ii = [
	"bsPrefix",
	"variant",
	"size",
	"active",
	"className",
	"block",
	"type",
	"as"
], ai = {
	variant: "primary",
	active: !1,
	disabled: !1
}, oi = /* @__PURE__ */ z.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.variant, i = e.size, a = e.active, o = e.className, s = e.block, c = e.type, l = e.as, u = Jn(e, ii), d = sr(n, "btn"), f = (0, Yr.default)(o, d, a && "active", r && d + "-" + r, s && d + "-block", i && d + "-" + i);
	if (u.href) return /* @__PURE__ */ z.createElement(ri, B({}, u, {
		as: l,
		ref: t,
		className: (0, Yr.default)(f, u.disabled && "disabled")
	}));
	t && (u.ref = t), c ? u.type = c : l || (u.type = "button");
	var p = l || "button";
	return /* @__PURE__ */ z.createElement(p, B({}, u, { className: f }));
});
oi.displayName = "Button", oi.defaultProps = ai;
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useMounted.js
function si() {
	let e = (0, z.useRef)(!0), t = (0, z.useRef)(() => e.current);
	return (0, z.useEffect)(() => (e.current = !0, () => {
		e.current = !1;
	}), []), t.current;
}
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useUpdatedRef.js
function V(e) {
	let t = (0, z.useRef)(e);
	return t.current = e, t;
}
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useWillUnmount.js
function ci(e) {
	let t = V(e);
	(0, z.useEffect)(() => () => t.current(), []);
}
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useTimeout.js
var li = 2 ** 31 - 1;
function ui(e, t, n) {
	let r = n - Date.now();
	e.current = r <= li ? setTimeout(t, r) : setTimeout(() => ui(e, t, n), li);
}
function di() {
	let e = si(), t = (0, z.useRef)();
	return ci(() => clearTimeout(t.current)), (0, z.useMemo)(() => {
		let n = () => clearTimeout(t.current);
		function r(r, i = 0) {
			e() && (n(), i <= li ? t.current = setTimeout(r, i) : ui(t, r, Date.now() + i));
		}
		return {
			set: r,
			clear: n,
			handleRef: t
		};
	}, []);
}
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Col.js
var fi = [
	"bsPrefix",
	"className",
	"as"
], pi = [
	"xl",
	"lg",
	"md",
	"sm",
	"xs"
], mi = /* @__PURE__ */ z.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.className, i = e.as, a = i === void 0 ? "div" : i, o = Jn(e, fi), s = sr(n, "col"), c = [], l = [];
	return pi.forEach(function(e) {
		var t = o[e];
		delete o[e];
		var n, r, i;
		if (typeof t == "object" && t) {
			var a = t.span;
			n = a === void 0 ? !0 : a, r = t.offset, i = t.order;
		} else n = t;
		var u = e === "xs" ? "" : "-" + e;
		n && c.push(n === !0 ? "" + s + u : "" + s + u + "-" + n), i != null && l.push("order" + u + "-" + i), r != null && l.push("offset" + u + "-" + r);
	}), c.length || c.push(s), /* @__PURE__ */ z.createElement(a, B({}, o, {
		ref: t,
		className: Yr.default.apply(void 0, [r].concat(c, l))
	}));
});
mi.displayName = "Col";
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useCallbackRef.js
function hi() {
	return (0, z.useState)(null);
}
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useSafeState.js
function gi(e) {
	let t = si();
	return [e[0], (0, z.useCallback)((n) => {
		if (t()) return e[1](n);
	}, [t, e[1]])];
}
var _i = "bottom", vi = "right", yi = "left", bi = "auto", xi = [
	"top",
	_i,
	vi,
	yi
], Si = "start", Ci = "clippingParents", wi = "viewport", Ti = "popper", Ei = "reference", Di = /* @__PURE__ */ xi.reduce(function(e, t) {
	return e.concat([t + "-" + Si, t + "-end"]);
}, []), Oi = /* @__PURE__ */ [].concat(xi, [bi]).reduce(function(e, t) {
	return e.concat([
		t,
		t + "-" + Si,
		t + "-end"
	]);
}, []), ki = [
	"beforeRead",
	"read",
	"afterRead",
	"beforeMain",
	"main",
	"afterMain",
	"beforeWrite",
	"write",
	"afterWrite"
];
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getBasePlacement.js
function Ai(e) {
	return e.split("-")[0];
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getWindow.js
function H(e) {
	if (e == null) return window;
	if (e.toString() !== "[object Window]") {
		var t = e.ownerDocument;
		return t && t.defaultView || window;
	}
	return e;
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/instanceOf.js
function ji(e) {
	return e instanceof H(e).Element || e instanceof Element;
}
function Mi(e) {
	return e instanceof H(e).HTMLElement || e instanceof HTMLElement;
}
function Ni(e) {
	return typeof ShadowRoot > "u" ? !1 : e instanceof H(e).ShadowRoot || e instanceof ShadowRoot;
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/math.js
var Pi = Math.max, Fi = Math.min, Ii = Math.round;
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/userAgent.js
function Li() {
	var e = navigator.userAgentData;
	return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(e) {
		return e.brand + "/" + e.version;
	}).join(" ") : navigator.userAgent;
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/isLayoutViewport.js
function Ri() {
	return !/^((?!chrome|android).)*safari/i.test(Li());
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js
function zi(e, t, n) {
	t === void 0 && (t = !1), n === void 0 && (n = !1);
	var r = e.getBoundingClientRect(), i = 1, a = 1;
	t && Mi(e) && (i = e.offsetWidth > 0 && Ii(r.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && Ii(r.height) / e.offsetHeight || 1);
	var o = (ji(e) ? H(e) : window).visualViewport, s = !Ri() && n, c = (r.left + (s && o ? o.offsetLeft : 0)) / i, l = (r.top + (s && o ? o.offsetTop : 0)) / a, u = r.width / i, d = r.height / a;
	return {
		width: u,
		height: d,
		top: l,
		right: c + u,
		bottom: l + d,
		left: c,
		x: c,
		y: l
	};
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js
function Bi(e) {
	var t = zi(e), n = e.offsetWidth, r = e.offsetHeight;
	return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
		x: e.offsetLeft,
		y: e.offsetTop,
		width: n,
		height: r
	};
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/contains.js
function Vi(e, t) {
	var n = t.getRootNode && t.getRootNode();
	if (e.contains(t)) return !0;
	if (n && Ni(n)) {
		var r = t;
		do {
			if (r && e.isSameNode(r)) return !0;
			r = r.parentNode || r.host;
		} while (r);
	}
	return !1;
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getNodeName.js
function Hi(e) {
	return e ? (e.nodeName || "").toLowerCase() : null;
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js
function Ui(e) {
	return H(e).getComputedStyle(e);
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/isTableElement.js
function Wi(e) {
	return [
		"table",
		"td",
		"th"
	].indexOf(Hi(e)) >= 0;
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js
function Gi(e) {
	return ((ji(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getParentNode.js
function U(e) {
	return Hi(e) === "html" ? e : e.assignedSlot || e.parentNode || (Ni(e) ? e.host : null) || Gi(e);
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js
function W(e) {
	return !Mi(e) || Ui(e).position === "fixed" ? null : e.offsetParent;
}
function Ki(e) {
	var t = /firefox/i.test(Li());
	if (/Trident/i.test(Li()) && Mi(e) && Ui(e).position === "fixed") return null;
	var n = U(e);
	for (Ni(n) && (n = n.host); Mi(n) && ["html", "body"].indexOf(Hi(n)) < 0;) {
		var r = Ui(n);
		if (r.transform !== "none" || r.perspective !== "none" || r.contain === "paint" || ["transform", "perspective"].indexOf(r.willChange) !== -1 || t && r.willChange === "filter" || t && r.filter && r.filter !== "none") return n;
		n = n.parentNode;
	}
	return null;
}
function qi(e) {
	for (var t = H(e), n = W(e); n && Wi(n) && Ui(n).position === "static";) n = W(n);
	return n && (Hi(n) === "html" || Hi(n) === "body" && Ui(n).position === "static") ? t : n || Ki(e) || t;
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js
function Ji(e) {
	return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/within.js
function Yi(e, t, n) {
	return Pi(e, Fi(t, n));
}
function Xi(e, t, n) {
	var r = Yi(e, t, n);
	return r > n ? n : r;
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getFreshSideObject.js
function Zi() {
	return {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0
	};
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/mergePaddingObject.js
function Qi(e) {
	return Object.assign({}, Zi(), e);
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/expandToHashMap.js
function $i(e, t) {
	return t.reduce(function(t, n) {
		return t[n] = e, t;
	}, {});
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/arrow.js
var ea = function(e, t) {
	return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, Qi(typeof e == "number" ? $i(e, xi) : e);
};
function ta(e) {
	var t, n = e.state, r = e.name, i = e.options, a = n.elements.arrow, o = n.modifiersData.popperOffsets, s = Ai(n.placement), c = Ji(s), l = ["left", "right"].indexOf(s) >= 0 ? "height" : "width";
	if (!(!a || !o)) {
		var u = ea(i.padding, n), d = Bi(a), f = c === "y" ? "top" : yi, p = c === "y" ? _i : vi, m = n.rects.reference[l] + n.rects.reference[c] - o[c] - n.rects.popper[l], h = o[c] - n.rects.reference[c], g = qi(a), _ = g ? c === "y" ? g.clientHeight || 0 : g.clientWidth || 0 : 0, v = m / 2 - h / 2, y = u[f], b = _ - d[l] - u[p], x = _ / 2 - d[l] / 2 + v, S = Yi(y, x, b), C = c;
		n.modifiersData[r] = (t = {}, t[C] = S, t.centerOffset = S - x, t);
	}
}
function na(e) {
	var t = e.state, n = e.options.element, r = n === void 0 ? "[data-popper-arrow]" : n;
	r != null && (typeof r == "string" && (r = t.elements.popper.querySelector(r), !r) || Vi(t.elements.popper, r) && (t.elements.arrow = r));
}
var ra = {
	name: "arrow",
	enabled: !0,
	phase: "main",
	fn: ta,
	effect: na,
	requires: ["popperOffsets"],
	requiresIfExists: ["preventOverflow"]
};
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getVariation.js
function ia(e) {
	return e.split("-")[1];
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/computeStyles.js
var aa = {
	top: "auto",
	right: "auto",
	bottom: "auto",
	left: "auto"
};
function oa(e, t) {
	var n = e.x, r = e.y, i = t.devicePixelRatio || 1;
	return {
		x: Ii(n * i) / i || 0,
		y: Ii(r * i) / i || 0
	};
}
function sa(e) {
	var t, n = e.popper, r = e.popperRect, i = e.placement, a = e.variation, o = e.offsets, s = e.position, c = e.gpuAcceleration, l = e.adaptive, u = e.roundOffsets, d = e.isFixed, f = o.x, p = f === void 0 ? 0 : f, m = o.y, h = m === void 0 ? 0 : m, g = typeof u == "function" ? u({
		x: p,
		y: h
	}) : {
		x: p,
		y: h
	};
	p = g.x, h = g.y;
	var _ = o.hasOwnProperty("x"), v = o.hasOwnProperty("y"), y = yi, b = "top", x = window;
	if (l) {
		var S = qi(n), C = "clientHeight", w = "clientWidth";
		if (S === H(n) && (S = Gi(n), Ui(S).position !== "static" && s === "absolute" && (C = "scrollHeight", w = "scrollWidth")), S = S, i === "top" || (i === "left" || i === "right") && a === "end") {
			b = _i;
			var T = d && S === x && x.visualViewport ? x.visualViewport.height : S[C];
			h -= T - r.height, h *= c ? 1 : -1;
		}
		if (i === "left" || (i === "top" || i === "bottom") && a === "end") {
			y = vi;
			var E = d && S === x && x.visualViewport ? x.visualViewport.width : S[w];
			p -= E - r.width, p *= c ? 1 : -1;
		}
	}
	var D = Object.assign({ position: s }, l && aa), O = u === !0 ? oa({
		x: p,
		y: h
	}, H(n)) : {
		x: p,
		y: h
	};
	if (p = O.x, h = O.y, c) {
		var k;
		return Object.assign({}, D, (k = {}, k[b] = v ? "0" : "", k[y] = _ ? "0" : "", k.transform = (x.devicePixelRatio || 1) <= 1 ? "translate(" + p + "px, " + h + "px)" : "translate3d(" + p + "px, " + h + "px, 0)", k));
	}
	return Object.assign({}, D, (t = {}, t[b] = v ? h + "px" : "", t[y] = _ ? p + "px" : "", t.transform = "", t));
}
function ca(e) {
	var t = e.state, n = e.options, r = n.gpuAcceleration, i = r === void 0 ? !0 : r, a = n.adaptive, o = a === void 0 ? !0 : a, s = n.roundOffsets, c = s === void 0 ? !0 : s, l = {
		placement: Ai(t.placement),
		variation: ia(t.placement),
		popper: t.elements.popper,
		popperRect: t.rects.popper,
		gpuAcceleration: i,
		isFixed: t.options.strategy === "fixed"
	};
	t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, sa(Object.assign({}, l, {
		offsets: t.modifiersData.popperOffsets,
		position: t.options.strategy,
		adaptive: o,
		roundOffsets: c
	})))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, sa(Object.assign({}, l, {
		offsets: t.modifiersData.arrow,
		position: "absolute",
		adaptive: !1,
		roundOffsets: c
	})))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
var la = {
	name: "computeStyles",
	enabled: !0,
	phase: "beforeWrite",
	fn: ca,
	data: {}
}, ua = { passive: !0 };
function da(e) {
	var t = e.state, n = e.instance, r = e.options, i = r.scroll, a = i === void 0 ? !0 : i, o = r.resize, s = o === void 0 ? !0 : o, c = H(t.elements.popper), l = [].concat(t.scrollParents.reference, t.scrollParents.popper);
	return a && l.forEach(function(e) {
		e.addEventListener("scroll", n.update, ua);
	}), s && c.addEventListener("resize", n.update, ua), function() {
		a && l.forEach(function(e) {
			e.removeEventListener("scroll", n.update, ua);
		}), s && c.removeEventListener("resize", n.update, ua);
	};
}
var fa = {
	name: "eventListeners",
	enabled: !0,
	phase: "write",
	fn: function() {},
	effect: da,
	data: {}
}, pa = {
	left: "right",
	right: "left",
	bottom: "top",
	top: "bottom"
};
function ma(e) {
	return e.replace(/left|right|bottom|top/g, function(e) {
		return pa[e];
	});
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js
var ha = {
	start: "end",
	end: "start"
};
function ga(e) {
	return e.replace(/start|end/g, function(e) {
		return ha[e];
	});
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js
function _a(e) {
	var t = H(e);
	return {
		scrollLeft: t.pageXOffset,
		scrollTop: t.pageYOffset
	};
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js
function va(e) {
	return zi(Gi(e)).left + _a(e).scrollLeft;
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js
function ya(e, t) {
	var n = H(e), r = Gi(e), i = n.visualViewport, a = r.clientWidth, o = r.clientHeight, s = 0, c = 0;
	if (i) {
		a = i.width, o = i.height;
		var l = Ri();
		(l || !l && t === "fixed") && (s = i.offsetLeft, c = i.offsetTop);
	}
	return {
		width: a,
		height: o,
		x: s + va(e),
		y: c
	};
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js
function ba(e) {
	var t = Gi(e), n = _a(e), r = e.ownerDocument?.body, i = Pi(t.scrollWidth, t.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0), a = Pi(t.scrollHeight, t.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0), o = -n.scrollLeft + va(e), s = -n.scrollTop;
	return Ui(r || t).direction === "rtl" && (o += Pi(t.clientWidth, r ? r.clientWidth : 0) - i), {
		width: i,
		height: a,
		x: o,
		y: s
	};
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js
function xa(e) {
	var t = Ui(e), n = t.overflow, r = t.overflowX, i = t.overflowY;
	return /auto|scroll|overlay|hidden/.test(n + i + r);
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js
function Sa(e) {
	return [
		"html",
		"body",
		"#document"
	].indexOf(Hi(e)) >= 0 ? e.ownerDocument.body : Mi(e) && xa(e) ? e : Sa(U(e));
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js
function Ca(e, t) {
	t === void 0 && (t = []);
	var n = Sa(e), r = n === e.ownerDocument?.body, i = H(n), a = r ? [i].concat(i.visualViewport || [], xa(n) ? n : []) : n, o = t.concat(a);
	return r ? o : o.concat(Ca(U(a)));
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/rectToClientRect.js
function G(e) {
	return Object.assign({}, e, {
		left: e.x,
		top: e.y,
		right: e.x + e.width,
		bottom: e.y + e.height
	});
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js
function wa(e, t) {
	var n = zi(e, !1, t === "fixed");
	return n.top += e.clientTop, n.left += e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function Ta(e, t, n) {
	return t === "viewport" ? G(ya(e, n)) : ji(t) ? wa(t, n) : G(ba(Gi(e)));
}
function Ea(e) {
	var t = Ca(U(e)), n = ["absolute", "fixed"].indexOf(Ui(e).position) >= 0 && Mi(e) ? qi(e) : e;
	return ji(n) ? t.filter(function(e) {
		return ji(e) && Vi(e, n) && Hi(e) !== "body";
	}) : [];
}
function Da(e, t, n, r) {
	var i = t === "clippingParents" ? Ea(e) : [].concat(t), a = [].concat(i, [n]), o = a[0], s = a.reduce(function(t, n) {
		var i = Ta(e, n, r);
		return t.top = Pi(i.top, t.top), t.right = Fi(i.right, t.right), t.bottom = Fi(i.bottom, t.bottom), t.left = Pi(i.left, t.left), t;
	}, Ta(e, o, r));
	return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/computeOffsets.js
function Oa(e) {
	var t = e.reference, n = e.element, r = e.placement, i = r ? Ai(r) : null, a = r ? ia(r) : null, o = t.x + t.width / 2 - n.width / 2, s = t.y + t.height / 2 - n.height / 2, c;
	switch (i) {
		case "top":
			c = {
				x: o,
				y: t.y - n.height
			};
			break;
		case _i:
			c = {
				x: o,
				y: t.y + t.height
			};
			break;
		case vi:
			c = {
				x: t.x + t.width,
				y: s
			};
			break;
		case yi:
			c = {
				x: t.x - n.width,
				y: s
			};
			break;
		default: c = {
			x: t.x,
			y: t.y
		};
	}
	var l = i ? Ji(i) : null;
	if (l != null) {
		var u = l === "y" ? "height" : "width";
		switch (a) {
			case Si:
				c[l] = c[l] - (t[u] / 2 - n[u] / 2);
				break;
			case "end":
				c[l] = c[l] + (t[u] / 2 - n[u] / 2);
				break;
			default:
		}
	}
	return c;
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/detectOverflow.js
function ka(e, t) {
	t === void 0 && (t = {});
	var n = t, r = n.placement, i = r === void 0 ? e.placement : r, a = n.strategy, o = a === void 0 ? e.strategy : a, s = n.boundary, c = s === void 0 ? Ci : s, l = n.rootBoundary, u = l === void 0 ? wi : l, d = n.elementContext, f = d === void 0 ? Ti : d, p = n.altBoundary, m = p === void 0 ? !1 : p, h = n.padding, g = h === void 0 ? 0 : h, _ = Qi(typeof g == "number" ? $i(g, xi) : g), v = f === "popper" ? Ei : Ti, y = e.rects.popper, b = e.elements[m ? v : f], x = Da(ji(b) ? b : b.contextElement || Gi(e.elements.popper), c, u, o), S = zi(e.elements.reference), C = Oa({
		reference: S,
		element: y,
		strategy: "absolute",
		placement: i
	}), w = G(Object.assign({}, y, C)), T = f === "popper" ? w : S, E = {
		top: x.top - T.top + _.top,
		bottom: T.bottom - x.bottom + _.bottom,
		left: x.left - T.left + _.left,
		right: T.right - x.right + _.right
	}, D = e.modifiersData.offset;
	if (f === "popper" && D) {
		var O = D[i];
		Object.keys(E).forEach(function(e) {
			var t = ["right", "bottom"].indexOf(e) >= 0 ? 1 : -1, n = ["top", "bottom"].indexOf(e) >= 0 ? "y" : "x";
			E[e] += O[n] * t;
		});
	}
	return E;
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js
function Aa(e, t) {
	t === void 0 && (t = {});
	var n = t, r = n.placement, i = n.boundary, a = n.rootBoundary, o = n.padding, s = n.flipVariations, c = n.allowedAutoPlacements, l = c === void 0 ? Oi : c, u = ia(r), d = u ? s ? Di : Di.filter(function(e) {
		return ia(e) === u;
	}) : xi, f = d.filter(function(e) {
		return l.indexOf(e) >= 0;
	});
	f.length === 0 && (f = d);
	var p = f.reduce(function(t, n) {
		return t[n] = ka(e, {
			placement: n,
			boundary: i,
			rootBoundary: a,
			padding: o
		})[Ai(n)], t;
	}, {});
	return Object.keys(p).sort(function(e, t) {
		return p[e] - p[t];
	});
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/flip.js
function ja(e) {
	if (Ai(e) === "auto") return [];
	var t = ma(e);
	return [
		ga(e),
		t,
		ga(t)
	];
}
function Ma(e) {
	var t = e.state, n = e.options, r = e.name;
	if (!t.modifiersData[r]._skip) {
		for (var i = n.mainAxis, a = i === void 0 ? !0 : i, o = n.altAxis, s = o === void 0 ? !0 : o, c = n.fallbackPlacements, l = n.padding, u = n.boundary, d = n.rootBoundary, f = n.altBoundary, p = n.flipVariations, m = p === void 0 ? !0 : p, h = n.allowedAutoPlacements, g = t.options.placement, _ = Ai(g) === g, v = c || (_ || !m ? [ma(g)] : ja(g)), y = [g].concat(v).reduce(function(e, n) {
			return e.concat(Ai(n) === "auto" ? Aa(t, {
				placement: n,
				boundary: u,
				rootBoundary: d,
				padding: l,
				flipVariations: m,
				allowedAutoPlacements: h
			}) : n);
		}, []), b = t.rects.reference, x = t.rects.popper, S = /* @__PURE__ */ new Map(), C = !0, w = y[0], T = 0; T < y.length; T++) {
			var E = y[T], D = Ai(E), O = ia(E) === Si, k = ["top", _i].indexOf(D) >= 0, ee = k ? "width" : "height", A = ka(t, {
				placement: E,
				boundary: u,
				rootBoundary: d,
				altBoundary: f,
				padding: l
			}), j = k ? O ? vi : yi : O ? _i : "top";
			b[ee] > x[ee] && (j = ma(j));
			var te = ma(j), M = [];
			if (a && M.push(A[D] <= 0), s && M.push(A[j] <= 0, A[te] <= 0), M.every(function(e) {
				return e;
			})) {
				w = E, C = !1;
				break;
			}
			S.set(E, M);
		}
		if (C) for (var N = m ? 3 : 1, ne = function(e) {
			var t = y.find(function(t) {
				var n = S.get(t);
				if (n) return n.slice(0, e).every(function(e) {
					return e;
				});
			});
			if (t) return w = t, "break";
		}, re = N; re > 0 && ne(re) !== "break"; re--);
		t.placement !== w && (t.modifiersData[r]._skip = !0, t.placement = w, t.reset = !0);
	}
}
var Na = {
	name: "flip",
	enabled: !0,
	phase: "main",
	fn: Ma,
	requiresIfExists: ["offset"],
	data: { _skip: !1 }
};
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/hide.js
function Pa(e, t, n) {
	return n === void 0 && (n = {
		x: 0,
		y: 0
	}), {
		top: e.top - t.height - n.y,
		right: e.right - t.width + n.x,
		bottom: e.bottom - t.height + n.y,
		left: e.left - t.width - n.x
	};
}
function Fa(e) {
	return [
		"top",
		vi,
		_i,
		yi
	].some(function(t) {
		return e[t] >= 0;
	});
}
function Ia(e) {
	var t = e.state, n = e.name, r = t.rects.reference, i = t.rects.popper, a = t.modifiersData.preventOverflow, o = ka(t, { elementContext: "reference" }), s = ka(t, { altBoundary: !0 }), c = Pa(o, r), l = Pa(s, i, a), u = Fa(c), d = Fa(l);
	t.modifiersData[n] = {
		referenceClippingOffsets: c,
		popperEscapeOffsets: l,
		isReferenceHidden: u,
		hasPopperEscaped: d
	}, t.attributes.popper = Object.assign({}, t.attributes.popper, {
		"data-popper-reference-hidden": u,
		"data-popper-escaped": d
	});
}
var La = {
	name: "hide",
	enabled: !0,
	phase: "main",
	requiresIfExists: ["preventOverflow"],
	fn: Ia
};
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/offset.js
function Ra(e, t, n) {
	var r = Ai(e), i = ["left", "top"].indexOf(r) >= 0 ? -1 : 1, a = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n, o = a[0], s = a[1];
	return o ||= 0, s = (s || 0) * i, ["left", "right"].indexOf(r) >= 0 ? {
		x: s,
		y: o
	} : {
		x: o,
		y: s
	};
}
function za(e) {
	var t = e.state, n = e.options, r = e.name, i = n.offset, a = i === void 0 ? [0, 0] : i, o = Oi.reduce(function(e, n) {
		return e[n] = Ra(n, t.rects, a), e;
	}, {}), s = o[t.placement], c = s.x, l = s.y;
	t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += c, t.modifiersData.popperOffsets.y += l), t.modifiersData[r] = o;
}
var Ba = {
	name: "offset",
	enabled: !0,
	phase: "main",
	requires: ["popperOffsets"],
	fn: za
};
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/popperOffsets.js
function Va(e) {
	var t = e.state, n = e.name;
	t.modifiersData[n] = Oa({
		reference: t.rects.reference,
		element: t.rects.popper,
		strategy: "absolute",
		placement: t.placement
	});
}
var Ha = {
	name: "popperOffsets",
	enabled: !0,
	phase: "read",
	fn: Va,
	data: {}
};
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getAltAxis.js
function Ua(e) {
	return e === "x" ? "y" : "x";
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/preventOverflow.js
function Wa(e) {
	var t = e.state, n = e.options, r = e.name, i = n.mainAxis, a = i === void 0 ? !0 : i, o = n.altAxis, s = o === void 0 ? !1 : o, c = n.boundary, l = n.rootBoundary, u = n.altBoundary, d = n.padding, f = n.tether, p = f === void 0 ? !0 : f, m = n.tetherOffset, h = m === void 0 ? 0 : m, g = ka(t, {
		boundary: c,
		rootBoundary: l,
		padding: d,
		altBoundary: u
	}), _ = Ai(t.placement), v = ia(t.placement), y = !v, b = Ji(_), x = Ua(b), S = t.modifiersData.popperOffsets, C = t.rects.reference, w = t.rects.popper, T = typeof h == "function" ? h(Object.assign({}, t.rects, { placement: t.placement })) : h, E = typeof T == "number" ? {
		mainAxis: T,
		altAxis: T
	} : Object.assign({
		mainAxis: 0,
		altAxis: 0
	}, T), D = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, O = {
		x: 0,
		y: 0
	};
	if (S) {
		if (a) {
			var k = b === "y" ? "top" : yi, ee = b === "y" ? _i : vi, A = b === "y" ? "height" : "width", j = S[b], te = j + g[k], M = j - g[ee], N = p ? -w[A] / 2 : 0, ne = v === "start" ? C[A] : w[A], re = v === "start" ? -w[A] : -C[A], P = t.elements.arrow, F = p && P ? Bi(P) : {
				width: 0,
				height: 0
			}, ie = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Zi(), ae = ie[k], oe = ie[ee], se = Yi(0, C[A], F[A]), ce = y ? C[A] / 2 - N - se - ae - E.mainAxis : ne - se - ae - E.mainAxis, le = y ? -C[A] / 2 + N + se + oe + E.mainAxis : re + se + oe + E.mainAxis, ue = t.elements.arrow && qi(t.elements.arrow), de = ue ? b === "y" ? ue.clientTop || 0 : ue.clientLeft || 0 : 0, fe = D?.[b] ?? 0, pe = j + ce - fe - de, me = j + le - fe, he = Yi(p ? Fi(te, pe) : te, j, p ? Pi(M, me) : M);
			S[b] = he, O[b] = he - j;
		}
		if (s) {
			var ge = b === "x" ? "top" : yi, _e = b === "x" ? _i : vi, ve = S[x], ye = x === "y" ? "height" : "width", be = ve + g[ge], xe = ve - g[_e], Se = ["top", yi].indexOf(_) !== -1, Ce = D?.[x] ?? 0, we = Se ? be : ve - C[ye] - w[ye] - Ce + E.altAxis, Te = Se ? ve + C[ye] + w[ye] - Ce - E.altAxis : xe, Ee = p && Se ? Xi(we, ve, Te) : Yi(p ? we : be, ve, p ? Te : xe);
			S[x] = Ee, O[x] = Ee - ve;
		}
		t.modifiersData[r] = O;
	}
}
var Ga = {
	name: "preventOverflow",
	enabled: !0,
	phase: "main",
	fn: Wa,
	requiresIfExists: ["offset"]
};
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js
function Ka(e) {
	return {
		scrollLeft: e.scrollLeft,
		scrollTop: e.scrollTop
	};
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js
function qa(e) {
	return e === H(e) || !Mi(e) ? _a(e) : Ka(e);
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js
function Ja(e) {
	var t = e.getBoundingClientRect(), n = Ii(t.width) / e.offsetWidth || 1, r = Ii(t.height) / e.offsetHeight || 1;
	return n !== 1 || r !== 1;
}
function Ya(e, t, n) {
	n === void 0 && (n = !1);
	var r = Mi(t), i = Mi(t) && Ja(t), a = Gi(t), o = zi(e, i, n), s = {
		scrollLeft: 0,
		scrollTop: 0
	}, c = {
		x: 0,
		y: 0
	};
	return (r || !r && !n) && ((Hi(t) !== "body" || xa(a)) && (s = qa(t)), Mi(t) ? (c = zi(t, !0), c.x += t.clientLeft, c.y += t.clientTop) : a && (c.x = va(a))), {
		x: o.left + s.scrollLeft - c.x,
		y: o.top + s.scrollTop - c.y,
		width: o.width,
		height: o.height
	};
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/orderModifiers.js
function Xa(e) {
	var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), r = [];
	e.forEach(function(e) {
		t.set(e.name, e);
	});
	function i(e) {
		n.add(e.name), [].concat(e.requires || [], e.requiresIfExists || []).forEach(function(e) {
			if (!n.has(e)) {
				var r = t.get(e);
				r && i(r);
			}
		}), r.push(e);
	}
	return e.forEach(function(e) {
		n.has(e.name) || i(e);
	}), r;
}
function Za(e) {
	var t = Xa(e);
	return ki.reduce(function(e, n) {
		return e.concat(t.filter(function(e) {
			return e.phase === n;
		}));
	}, []);
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/debounce.js
function Qa(e) {
	var t;
	return function() {
		return t ||= new Promise(function(n) {
			Promise.resolve().then(function() {
				t = void 0, n(e());
			});
		}), t;
	};
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/mergeByName.js
function $a(e) {
	var t = e.reduce(function(e, t) {
		var n = e[t.name];
		return e[t.name] = n ? Object.assign({}, n, t, {
			options: Object.assign({}, n.options, t.options),
			data: Object.assign({}, n.data, t.data)
		}) : t, e;
	}, {});
	return Object.keys(t).map(function(e) {
		return t[e];
	});
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/createPopper.js
var eo = {
	placement: "bottom",
	modifiers: [],
	strategy: "absolute"
};
function to() {
	return ![...arguments].some(function(e) {
		return !(e && typeof e.getBoundingClientRect == "function");
	});
}
function no(e) {
	e === void 0 && (e = {});
	var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, i = t.defaultOptions, a = i === void 0 ? eo : i;
	return function(e, t, n) {
		n === void 0 && (n = a);
		var i = {
			placement: "bottom",
			orderedModifiers: [],
			options: Object.assign({}, eo, a),
			modifiersData: {},
			elements: {
				reference: e,
				popper: t
			},
			attributes: {},
			styles: {}
		}, o = [], s = !1, c = {
			state: i,
			setOptions: function(n) {
				var o = typeof n == "function" ? n(i.options) : n;
				u(), i.options = Object.assign({}, a, i.options, o), i.scrollParents = {
					reference: ji(e) ? Ca(e) : e.contextElement ? Ca(e.contextElement) : [],
					popper: Ca(t)
				};
				var s = Za($a([].concat(r, i.options.modifiers)));
				return i.orderedModifiers = s.filter(function(e) {
					return e.enabled;
				}), l(), c.update();
			},
			forceUpdate: function() {
				if (!s) {
					var e = i.elements, t = e.reference, n = e.popper;
					if (to(t, n)) {
						i.rects = {
							reference: Ya(t, qi(n), i.options.strategy === "fixed"),
							popper: Bi(n)
						}, i.reset = !1, i.placement = i.options.placement, i.orderedModifiers.forEach(function(e) {
							return i.modifiersData[e.name] = Object.assign({}, e.data);
						});
						for (var r = 0; r < i.orderedModifiers.length; r++) {
							if (i.reset === !0) {
								i.reset = !1, r = -1;
								continue;
							}
							var a = i.orderedModifiers[r], o = a.fn, l = a.options, u = l === void 0 ? {} : l, d = a.name;
							typeof o == "function" && (i = o({
								state: i,
								options: u,
								name: d,
								instance: c
							}) || i);
						}
					}
				}
			},
			update: Qa(function() {
				return new Promise(function(e) {
					c.forceUpdate(), e(i);
				});
			}),
			destroy: function() {
				u(), s = !0;
			}
		};
		if (!to(e, t)) return c;
		c.setOptions(n).then(function(e) {
			!s && n.onFirstUpdate && n.onFirstUpdate(e);
		});
		function l() {
			i.orderedModifiers.forEach(function(e) {
				var t = e.name, n = e.options, r = n === void 0 ? {} : n, a = e.effect;
				if (typeof a == "function") {
					var s = a({
						state: i,
						name: t,
						instance: c,
						options: r
					});
					o.push(s || function() {});
				}
			});
		}
		function u() {
			o.forEach(function(e) {
				return e();
			}), o = [];
		}
		return c;
	};
}
//#endregion
//#region node_modules/.pnpm/react-overlays@5.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-overlays/esm/popper.js
var ro = no({ defaultModifiers: [
	La,
	Ha,
	la,
	fa,
	Ba,
	Na,
	Ga,
	ra
] }), io = function(e) {
	return {
		position: e,
		top: "0",
		left: "0",
		opacity: "0",
		pointerEvents: "none"
	};
}, ao = {
	name: "applyStyles",
	enabled: !1
}, oo = {
	name: "ariaDescribedBy",
	enabled: !0,
	phase: "afterWrite",
	effect: function(e) {
		var t = e.state;
		return function() {
			var e = t.elements, n = e.reference, r = e.popper;
			if ("removeAttribute" in n) {
				var i = (n.getAttribute("aria-describedby") || "").split(",").filter(function(e) {
					return e.trim() !== r.id;
				});
				i.length ? n.setAttribute("aria-describedby", i.join(",")) : n.removeAttribute("aria-describedby");
			}
		};
	},
	fn: function(e) {
		var t = e.state.elements, n = t.popper, r = t.reference, i = n.getAttribute("role")?.toLowerCase();
		if (n.id && i === "tooltip" && "setAttribute" in r) {
			var a = r.getAttribute("aria-describedby");
			if (a && a.split(",").indexOf(n.id) !== -1) return;
			r.setAttribute("aria-describedby", a ? a + "," + n.id : n.id);
		}
	}
}, so = [];
function co(e, t, n) {
	var r = n === void 0 ? {} : n, i = r.enabled, a = i === void 0 ? !0 : i, o = r.placement, s = o === void 0 ? "bottom" : o, c = r.strategy, l = c === void 0 ? "absolute" : c, u = r.modifiers, d = u === void 0 ? so : u, f = Jn(r, [
		"enabled",
		"placement",
		"strategy",
		"modifiers"
	]), p = (0, z.useRef)(), m = (0, z.useCallback)(function() {
		var e;
		(e = p.current) == null || e.update();
	}, []), h = (0, z.useCallback)(function() {
		var e;
		(e = p.current) == null || e.forceUpdate();
	}, []), g = gi((0, z.useState)({
		placement: s,
		update: m,
		forceUpdate: h,
		attributes: {},
		styles: {
			popper: io(l),
			arrow: {}
		}
	})), _ = g[0], v = g[1], y = (0, z.useMemo)(function() {
		return {
			name: "updateStateModifier",
			enabled: !0,
			phase: "write",
			requires: ["computeStyles"],
			fn: function(e) {
				var t = e.state, n = {}, r = {};
				Object.keys(t.elements).forEach(function(e) {
					n[e] = t.styles[e], r[e] = t.attributes[e];
				}), v({
					state: t,
					styles: n,
					attributes: r,
					update: m,
					forceUpdate: h,
					placement: t.placement
				});
			}
		};
	}, [
		m,
		h,
		v
	]);
	return (0, z.useEffect)(function() {
		!p.current || !a || p.current.setOptions({
			placement: s,
			strategy: l,
			modifiers: [].concat(d, [y, ao])
		});
	}, [
		l,
		s,
		y,
		a
	]), (0, z.useEffect)(function() {
		if (!(!a || e == null || t == null)) return p.current = ro(e, t, B({}, f, {
			placement: s,
			strategy: l,
			modifiers: [].concat(d, [oo, y])
		})), function() {
			p.current != null && (p.current.destroy(), p.current = void 0, v(function(e) {
				return B({}, e, {
					attributes: {},
					styles: { popper: io(l) }
				});
			}));
		};
	}, [
		a,
		e,
		t
	]), _;
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/contains.js
function lo(e, t) {
	if (e.contains) return e.contains(t);
	if (e.compareDocumentPosition) return e === t || !!(e.compareDocumentPosition(t) & 16);
}
//#endregion
//#region node_modules/.pnpm/warning@4.0.3/node_modules/warning/warning.js
var uo = /* @__PURE__ */ o(((e, t) => {
	var n = !1, r = function() {};
	if (n) {
		var i = function(e, t) {
			var n = arguments.length;
			t = Array(n > 1 ? n - 1 : 0);
			for (var r = 1; r < n; r++) t[r - 1] = arguments[r];
			var i = 0, a = "Warning: " + e.replace(/%s/g, function() {
				return t[i++];
			});
			typeof console < "u" && console.error(a);
			try {
				throw Error(a);
			} catch {}
		};
		r = function(e, t, n) {
			var r = arguments.length;
			n = Array(r > 2 ? r - 2 : 0);
			for (var a = 2; a < r; a++) n[a - 2] = arguments[a];
			if (t === void 0) throw Error("`warning(condition, format, ...args)` requires a warning message argument");
			e || i.apply(null, [t].concat(n));
		};
	}
	t.exports = r;
}));
//#endregion
//#region node_modules/.pnpm/react-overlays@5.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-overlays/esm/safeFindDOMNode.js
function fo(e) {
	return e && "setState" in e ? wr.findDOMNode(e) : e ?? null;
}
//#endregion
//#region node_modules/.pnpm/react-overlays@5.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-overlays/esm/ownerDocument.js
var po = (function(e) {
	return cr(fo(e));
}), mo = /* @__PURE__ */ c(uo()), ho = 27, go = function() {};
function _o(e) {
	return e.button === 0;
}
function vo(e) {
	return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
var K = function(e) {
	return e && ("current" in e ? e.current : e);
};
function yo(e, t, n) {
	var r = n === void 0 ? {} : n, i = r.disabled, a = r.clickTrigger, o = a === void 0 ? "click" : a, s = (0, z.useRef)(!1), c = t || go, l = (0, z.useCallback)(function(t) {
		var n = K(e);
		(0, mo.default)(!!n, "RootClose captured a close event but does not have a ref to compare it to. useRootClose(), should be passed a ref that resolves to a DOM node"), s.current = !n || vo(t) || !_o(t) || !!lo(n, (t.composedPath == null ? void 0 : t.composedPath()[0]) ?? t.target);
	}, [e]), u = Jr(function(e) {
		s.current || c(e);
	}), d = Jr(function(e) {
		e.keyCode === ho && c(e);
	});
	(0, z.useEffect)(function() {
		if (!(i || e == null)) {
			var t = window.event, n = po(K(e)), r = Rr(n, o, l, !0), a = Rr(n, o, function(e) {
				if (e === t) {
					t = void 0;
					return;
				}
				u(e);
			}), s = Rr(n, "keyup", function(e) {
				if (e === t) {
					t = void 0;
					return;
				}
				d(e);
			}), c = [];
			return "ontouchstart" in n.documentElement && (c = [].slice.call(n.body.children).map(function(e) {
				return Rr(e, "mousemove", go);
			})), function() {
				r(), a(), s(), c.forEach(function(e) {
					return e();
				});
			};
		}
	}, [
		e,
		i,
		o,
		l,
		u,
		d
	]);
}
//#endregion
//#region node_modules/.pnpm/react-overlays@5.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-overlays/esm/mergeOptionsWithPopperConfig.js
function bo(e) {
	var t = {};
	return Array.isArray(e) ? (e?.forEach(function(e) {
		t[e.name] = e;
	}), t) : e || t;
}
function xo(e) {
	return e === void 0 && (e = {}), Array.isArray(e) ? e : Object.keys(e).map(function(t) {
		return e[t].name = t, e[t];
	});
}
function So(e) {
	var t = e.enabled, n = e.enableEvents, r = e.placement, i = e.flip, a = e.offset, o = e.fixed, s = e.containerPadding, c = e.arrowElement, l = e.popperConfig, u = l === void 0 ? {} : l, d = bo(u.modifiers);
	return B({}, u, {
		placement: r,
		enabled: t,
		strategy: o ? "fixed" : u.strategy,
		modifiers: xo(B({}, d, {
			eventListeners: { enabled: n },
			preventOverflow: B({}, d.preventOverflow, { options: s ? B({ padding: s }, d.preventOverflow?.options) : d.preventOverflow?.options }),
			offset: { options: B({ offset: a }, d.offset?.options) },
			arrow: B({}, d.arrow, {
				enabled: !!c,
				options: B({}, d.arrow?.options, { element: c })
			}),
			flip: B({ enabled: !!i }, d.flip)
		}))
	});
}
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useMergedRefs.js
var Co = (e) => !e || typeof e == "function" ? e : (t) => {
	e.current = t;
};
function wo(e, t) {
	let n = Co(e), r = Co(t);
	return (e) => {
		n && n(e), r && r(e);
	};
}
function q(e, t) {
	return (0, z.useMemo)(() => wo(e, t), [e, t]);
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/hasClass.js
function J(e, t) {
	return e.classList ? !!t && e.classList.contains(t) : (" " + (e.className.baseVal || e.className) + " ").indexOf(" " + t + " ") !== -1;
}
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/usePopperMarginModifiers.js
function To(e) {
	var t = window.getComputedStyle(e);
	return {
		top: parseFloat(t.marginTop) || 0,
		right: parseFloat(t.marginRight) || 0,
		bottom: parseFloat(t.marginBottom) || 0,
		left: parseFloat(t.marginLeft) || 0
	};
}
function Eo() {
	var e = (0, z.useRef)(null), t = (0, z.useRef)(null), n = (0, z.useRef)(null), r = sr(void 0, "popover"), i = sr(void 0, "dropdown-menu");
	return [(0, z.useCallback)(function(n) {
		!n || !(J(n, r) || J(n, i)) || (t.current = To(n), n.style.margin = "0", e.current = n);
	}, [r, i]), [
		(0, z.useMemo)(function() {
			return {
				name: "offset",
				options: { offset: function(e) {
					var n = e.placement;
					if (!t.current) return [0, 0];
					var r = t.current, i = r.top, a = r.left, o = r.bottom, s = r.right;
					switch (n.split("-")[0]) {
						case "top": return [0, o];
						case "left": return [0, s];
						case "bottom": return [0, i];
						case "right": return [0, a];
						default: return [0, 0];
					}
				} }
			};
		}, [t]),
		(0, z.useMemo)(function() {
			return {
				name: "arrow",
				options: { padding: function() {
					if (!n.current) return 0;
					var e = n.current, t = e.top, r = e.right, i = t || r;
					return {
						top: i,
						left: i,
						right: i,
						bottom: i
					};
				} }
			};
		}, [n]),
		(0, z.useMemo)(function() {
			return {
				name: "popoverArrowMargins",
				enabled: !0,
				phase: "main",
				fn: function() {},
				requiresIfExists: ["arrow"],
				effect: function(t) {
					var i = t.state;
					if (!(!e.current || !i.elements.arrow || !J(e.current, r))) {
						if (i.modifiersData["arrow#persistent"]) {
							var a = To(i.elements.arrow), o = a.top, s = a.right, c = o || s;
							i.modifiersData["arrow#persistent"].padding = {
								top: c,
								left: c,
								right: c,
								bottom: c
							};
						} else n.current = To(i.elements.arrow);
						return i.elements.arrow.style.margin = "0", function() {
							i.elements.arrow && (i.elements.arrow.style.margin = "");
						};
					}
				}
			};
		}, [r])
	]];
}
//#endregion
//#region node_modules/.pnpm/prop-types-extra@1.1.1_react@18.3.1/node_modules/prop-types-extra/lib/isRequiredForA11y.js
var Do = /* @__PURE__ */ o(((e, t) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = n;
	function n(e) {
		return function(t, n, r, i, a) {
			var o = r || "<<anonymous>>", s = a || n;
			if (t[n] == null) return /* @__PURE__ */ Error("The " + i + " `" + s + "` is required to make " + ("`" + o + "` accessible for users of assistive ") + "technologies such as screen readers.");
			var c = [...arguments].slice(5);
			return e.apply(void 0, [
				t,
				n,
				r,
				i,
				a
			].concat(c));
		};
	}
	t.exports = e.default;
})), Oo = function(e) {
	var t;
	return typeof document > "u" ? null : e == null ? cr().body : (typeof e == "function" && (e = e()), e && "current" in e && (e = e.current), (t = e) != null && t.nodeType && e || null);
};
function ko(e, t) {
	var n = (0, z.useState)(function() {
		return Oo(e);
	}), r = n[0], i = n[1];
	if (!r) {
		var a = Oo(e);
		a && i(a);
	}
	return (0, z.useEffect)(function() {
		t && r && t(r);
	}, [t, r]), (0, z.useEffect)(function() {
		var t = Oo(e);
		t !== r && i(t);
	}, [e, r]), r;
}
//#endregion
//#region node_modules/.pnpm/react-overlays@5.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-overlays/esm/Overlay.js
var Y = /* @__PURE__ */ c(br()), Ao = /* @__PURE__ */ z.forwardRef(function(e, t) {
	var n = e.flip, r = e.offset, i = e.placement, a = e.containerPadding, o = a === void 0 ? 5 : a, s = e.popperConfig, c = s === void 0 ? {} : s, l = e.transition, u = hi(), d = u[0], f = u[1], p = hi(), m = p[0], h = p[1], g = q(f, t), _ = ko(e.container), v = ko(e.target), y = (0, z.useState)(!e.show), b = y[0], x = y[1], S = co(v, d, So({
		placement: i,
		enableEvents: !!e.show,
		containerPadding: o || 5,
		flip: n,
		offset: r,
		arrowElement: m,
		popperConfig: c
	})), C = S.styles, w = S.attributes, T = Jn(S, ["styles", "attributes"]);
	e.show ? b && x(!1) : !e.transition && !b && x(!0);
	var E = function() {
		x(!0), e.onExited && e.onExited.apply(e, arguments);
	}, D = e.show || l && !b;
	if (yo(d, e.onHide, {
		disabled: !e.rootClose || e.rootCloseDisabled,
		clickTrigger: e.rootCloseEvent
	}), !D) return null;
	var O = e.children(B({}, T, {
		show: !!e.show,
		props: B({}, w.popper, {
			style: C.popper,
			ref: g
		}),
		arrowProps: B({}, w.arrow, {
			style: C.arrow,
			ref: h
		})
	}));
	if (l) {
		var k = e.onExit, ee = e.onExiting, A = e.onEnter, j = e.onEntering, te = e.onEntered;
		O = /* @__PURE__ */ z.createElement(l, {
			in: e.show,
			appear: !0,
			onExit: k,
			onExiting: ee,
			onExited: E,
			onEnter: A,
			onEntering: j,
			onEntered: te
		}, O);
	}
	return _ ? /* @__PURE__ */ wr.createPortal(O, _) : null;
});
Ao.displayName = "Overlay", Ao.propTypes = {
	show: Y.default.bool,
	placement: Y.default.oneOf(Oi),
	target: Y.default.any,
	container: Y.default.any,
	flip: Y.default.bool,
	children: Y.default.func.isRequired,
	containerPadding: Y.default.number,
	popperConfig: Y.default.object,
	rootClose: Y.default.bool,
	rootCloseEvent: Y.default.oneOf(["click", "mousedown"]),
	rootCloseDisabled: Y.default.bool,
	onHide: function(e) {
		var t = [...arguments].slice(1);
		if (e.rootClose) {
			var n;
			return (n = Y.default.func).isRequired.apply(n, [e].concat(t));
		}
		return Y.default.func.apply(Y.default, [e].concat(t));
	},
	transition: Y.default.elementType,
	onEnter: Y.default.func,
	onEntering: Y.default.func,
	onEntered: Y.default.func,
	onExit: Y.default.func,
	onExiting: Y.default.func,
	onExited: Y.default.func
};
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Overlay.js
var jo = [
	"children",
	"transition",
	"popperConfig"
], Mo = [
	"props",
	"arrowProps",
	"show",
	"update",
	"forceUpdate",
	"placement",
	"state"
], No = {
	transition: ei,
	rootClose: !1,
	show: !1,
	placement: "top"
};
function Po(e, t) {
	var n = e.ref, r = t.ref;
	e.ref = n.__wrapped ||= function(e) {
		return n(fo(e));
	}, t.ref = r.__wrapped ||= function(e) {
		return r(fo(e));
	};
}
function Fo(e) {
	var t = e.children, n = e.transition, r = e.popperConfig, i = r === void 0 ? {} : r, a = Jn(e, jo), o = (0, z.useRef)({}), s = Eo(), c = s[0], l = s[1], u = n === !0 ? ei : n || null;
	return /* @__PURE__ */ z.createElement(Ao, B({}, a, {
		ref: c,
		popperConfig: B({}, i, { modifiers: l.concat(i.modifiers || []) }),
		transition: u
	}), function(e) {
		var r = e.props, i = e.arrowProps, a = e.show, s = e.update;
		e.forceUpdate;
		var c = e.placement, l = e.state, u = Jn(e, Mo);
		Po(r, i);
		var d = Object.assign(o.current, {
			state: l,
			scheduleUpdate: s,
			placement: c,
			outOfBoundaries: l?.modifiersData.hide?.isReferenceHidden || !1
		});
		return typeof t == "function" ? t(B({}, u, r, {
			placement: c,
			show: a
		}, !n && a && { className: "show" }, {
			popper: d,
			arrowProps: i
		})) : /* @__PURE__ */ z.cloneElement(t, B({}, u, r, {
			placement: c,
			arrowProps: i,
			popper: d,
			className: (0, Yr.default)(t.props.className, !n && a && "show"),
			style: B({}, t.props.style, r.style)
		}));
	});
}
Fo.defaultProps = No;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/OverlayTrigger.js
var Io = [
	"trigger",
	"overlay",
	"children",
	"popperConfig",
	"show",
	"defaultShow",
	"onToggle",
	"delay",
	"placement",
	"flip"
], Lo = /* @__PURE__ */ function(e) {
	nr(t, e);
	function t() {
		return e.apply(this, arguments) || this;
	}
	var n = t.prototype;
	return n.render = function() {
		return this.props.children;
	}, t;
}(z.Component);
function Ro(e) {
	return e && typeof e == "object" ? e : {
		show: e,
		hide: e
	};
}
function zo(e, t, n) {
	var r = t[0], i = r.currentTarget, a = r.relatedTarget || r.nativeEvent[n];
	(!a || a !== i) && !lo(i, a) && e.apply(void 0, t);
}
var Bo = {
	defaultShow: !1,
	trigger: ["hover", "focus"]
};
function Vo(e) {
	var t = e.trigger, n = e.overlay, r = e.children, i = e.popperConfig, a = i === void 0 ? {} : i, o = e.show, s = e.defaultShow, c = s === void 0 ? !1 : s, l = e.onToggle, u = e.delay, d = e.placement, f = e.flip, p = f === void 0 ? d && d.indexOf("auto") !== -1 : f, m = Jn(e, Io), h = (0, z.useRef)(null), g = di(), _ = (0, z.useRef)(""), v = $n(o, c, l), y = v[0], b = v[1], x = Ro(u), S = typeof r == "function" ? {} : z.Children.only(r).props, C = S.onFocus, w = S.onBlur, T = S.onClick, E = (0, z.useCallback)(function() {
		return fo(h.current);
	}, []), D = (0, z.useCallback)(function() {
		if (g.clear(), _.current = "show", !x.show) {
			b(!0);
			return;
		}
		g.set(function() {
			_.current === "show" && b(!0);
		}, x.show);
	}, [
		x.show,
		b,
		g
	]), O = (0, z.useCallback)(function() {
		if (g.clear(), _.current = "hide", !x.hide) {
			b(!1);
			return;
		}
		g.set(function() {
			_.current === "hide" && b(!1);
		}, x.hide);
	}, [
		x.hide,
		b,
		g
	]), k = (0, z.useCallback)(function() {
		D();
		var e = [...arguments];
		C?.apply(void 0, e);
	}, [D, C]), ee = (0, z.useCallback)(function() {
		O();
		var e = [...arguments];
		w?.apply(void 0, e);
	}, [O, w]), A = (0, z.useCallback)(function() {
		b(!y), T && T.apply(void 0, arguments);
	}, [
		T,
		b,
		y
	]), j = (0, z.useCallback)(function() {
		zo(D, [...arguments], "fromElement");
	}, [D]), te = (0, z.useCallback)(function() {
		zo(O, [...arguments], "toElement");
	}, [O]), M = t == null ? [] : [].concat(t), N = {};
	return M.indexOf("click") !== -1 && (N.onClick = A), M.indexOf("focus") !== -1 && (N.onFocus = k, N.onBlur = ee), M.indexOf("hover") !== -1 && (N.onMouseOver = j, N.onMouseOut = te), /* @__PURE__ */ z.createElement(z.Fragment, null, typeof r == "function" ? r(B({}, N, { ref: h })) : /* @__PURE__ */ z.createElement(Lo, { ref: h }, /* @__PURE__ */ (0, z.cloneElement)(r, N)), /* @__PURE__ */ z.createElement(Fo, B({}, m, {
		show: y,
		onHide: O,
		flip: p,
		placement: d,
		popperConfig: a,
		target: E
	}), n));
}
Vo.defaultProps = Bo, Do();
var Ho = [
	"bsPrefix",
	"placement",
	"className",
	"style",
	"children",
	"arrowProps",
	"popper",
	"show"
], Uo = { placement: "right" }, Wo = /* @__PURE__ */ z.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.placement, i = e.className, a = e.style, o = e.children, s = e.arrowProps;
	e.popper, e.show;
	var c = Jn(e, Ho);
	n = sr(n, "tooltip");
	var l = (r?.split("-") || [])[0];
	return /* @__PURE__ */ z.createElement("div", B({
		ref: t,
		style: a,
		role: "tooltip",
		"x-placement": l,
		className: (0, Yr.default)(i, n, "bs-tooltip-" + l)
	}, c), /* @__PURE__ */ z.createElement("div", B({ className: "arrow" }, s)), /* @__PURE__ */ z.createElement("div", { className: n + "-inner" }, o));
});
Wo.defaultProps = Uo, Wo.displayName = "Tooltip";
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/utils/newId.js
var Go = 0, Ko = (e = "id") => (Go += 1, `${e}${Go}`), qo = /* @__PURE__ */ function(e) {
	return e.MOVED = "MOVED", e.REMOVED = "REMOVED", e.FORMAT = "FORMAT", e.MOVED_AND_FORMAT = "MOVED_AND_FORMAT", e;
}({});
function Jo(e, t, n) {
	class r extends z.Component {
		static displayName = `withDeprecatedProps(${t})`;
		constructor(e) {
			super(e), this.transformProps = this.transformProps.bind(this);
		}
		warn(e) {}
		transformProps(e, r) {
			if (n[r] === void 0) return e[r] = this.props[r], e;
			let { deprType: i, newName: a, expect: o, transform: s, message: c } = n[r];
			switch (i) {
				case qo.MOVED:
					this.warn(`${t}: The prop '${r}' has been moved to '${a}'.`), e[a] = this.props[r];
					break;
				case qo.REMOVED:
					this.warn(`${t}: The prop '${r}' has been removed. '${c}'`);
					break;
				case qo.FORMAT:
					o(this.props[r]) ? e[r] = this.props[r] : (this.warn(`${t}: The prop '${r}' expects a new format. ${c}`), e[r] = s(this.props[r], this.props));
					break;
				case qo.MOVED_AND_FORMAT: {
					let n = this.props[r], i = `${t}: The prop '${r}' has been moved to '${a}'`;
					o && !o(n) && (i += " and expects a new format"), i += c ? `. ${c}` : "", this.warn(i), e[a] = s ? s(n, this.props) : n;
					break;
				}
				default:
					e[r] = this.props[r];
					break;
			}
			return e;
		}
		render() {
			let { children: t, ...n } = Object.keys(this.props).reduce(this.transformProps, {});
			return /* @__PURE__ */ z.createElement(e, { ...n }, this.props.children || t);
		}
	}
	return r;
}
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Icon/index.js
function Yo({ src: e, id: t, className: n, hidden: r, screenReaderText: i, svgAttrs: a, size: o, ...s }) {
	if (e) {
		let r = a["aria-label"] || a["aria-labelledby"], c = { ...a };
		return r || (c["aria-label"] = void 0, c["aria-hidden"] = !0), /* @__PURE__ */ z.createElement("span", {
			className: (0, Yr.default)("pgn__icon", { [`pgn__icon__${o}`]: !!o }, n),
			id: t,
			...s
		}, /* @__PURE__ */ z.createElement(e, {
			role: "img",
			focusable: !1,
			...c
		}), i && /* @__PURE__ */ z.createElement("span", { className: "sr-only" }, i));
	}
	return /* @__PURE__ */ z.createElement(z.Fragment, null, /* @__PURE__ */ z.createElement("span", {
		id: t || Ko("Icon"),
		className: n,
		"aria-hidden": r
	}), i && /* @__PURE__ */ z.createElement("span", { className: "sr-only" }, i));
}
Yo.propTypes = {
	src: Y.default.elementType,
	svgAttrs: Y.default.shape({
		"aria-label": Y.default.string,
		"aria-labelledby": Y.default.string
	}),
	id: Y.default.string,
	size: Y.default.oneOf([
		"xs",
		"sm",
		"md",
		"lg"
	]),
	className: Y.default.string,
	hidden: Y.default.bool,
	screenReaderText: Y.default.oneOfType([Y.default.string, Y.default.element])
}, Yo.defaultProps = {
	src: null,
	svgAttrs: {},
	id: void 0,
	hidden: !0,
	screenReaderText: void 0,
	size: void 0,
	className: void 0
};
var Xo = Jo(Yo, "Icon", { className: {
	deprType: qo.FORMAT,
	expect: (e) => typeof e == "string",
	transform: (e) => Array.isArray(e) ? e.join(" ") : e,
	message: "It should be a string."
} }), Zo = /* @__PURE__ */ z.forwardRef(({ children: e, iconAfter: t, iconBefore: n, size: r, ...i }, a) => /* @__PURE__ */ z.createElement(oi, {
	size: r,
	...i,
	className: (0, Yr.default)(i.className),
	ref: a
}, n && /* @__PURE__ */ z.createElement(Xo, {
	className: "btn-icon-before",
	size: r,
	src: n
}), e, t && /* @__PURE__ */ z.createElement(Xo, {
	className: "btn-icon-after",
	size: r,
	src: t
}))), Qo = [
	"auto-start",
	"auto",
	"auto-end",
	"top-start",
	"top",
	"top-end",
	"right-start",
	"right",
	"right-end",
	"bottom-end",
	"bottom",
	"bottom-start",
	"left-end",
	"left",
	"left-start"
], $o = [
	"hover",
	"click",
	"focus"
];
function es(e) {
	return /* @__PURE__ */ z.createElement(Fo, { ...e });
}
function ts(e) {
	return /* @__PURE__ */ z.createElement(Vo, { ...e }, e.children);
}
var ns = Y.default.oneOf($o);
es.propTypes = {
	children: Y.default.node.isRequired,
	container: Y.default.oneOfType([Y.default.elementType, Y.default.func]),
	onEnter: Y.default.func,
	onEntered: Y.default.func,
	onEntering: Y.default.func,
	onExit: Y.default.func,
	onExited: Y.default.func,
	onExiting: Y.default.func,
	onHide: Y.default.func,
	placement: Y.default.oneOf(Qo),
	popperConfig: Y.default.shape({}),
	rootClose: Y.default.bool,
	rootCloseEvent: Y.default.oneOf(["click", "mousedown"]),
	show: Y.default.bool,
	target: Y.default.oneOfType([Y.default.elementType, Y.default.func]),
	transition: Y.default.oneOfType([Y.default.object, Y.default.bool])
}, ts.propTypes = {
	children: Y.default.oneOfType([Y.default.element, Y.default.func]).isRequired,
	overlay: Y.default.oneOfType([Y.default.element, Y.default.func]).isRequired,
	defaultShow: Y.default.bool,
	delay: Y.default.oneOfType([Y.default.number, Y.default.shape({})]),
	flip: Y.default.bool,
	onHide: Y.default.func,
	onToggle: Y.default.func,
	placement: Y.default.oneOf(Qo),
	popperConfig: Y.default.shape({}),
	show: Y.default.bool,
	target: Y.default.instanceOf(EventTarget),
	trigger: Y.default.oneOfType([ns, Y.default.arrayOf(ns)])
}, es.defaultProps = {
	container: void 0,
	onEnter: void 0,
	onEntered: void 0,
	onEntering: void 0,
	onExit: void 0,
	onExited: void 0,
	onExiting: void 0,
	onHide: void 0,
	placement: "top",
	popperConfig: {},
	rootClose: !1,
	rootCloseEvent: void 0,
	show: !1,
	target: void 0,
	transition: ei
}, ts.defaultProps = {
	defaultShow: !1,
	delay: void 0,
	flip: void 0,
	onHide: void 0,
	onToggle: void 0,
	placement: void 0,
	popperConfig: {},
	show: void 0,
	target: void 0,
	trigger: ["hover", "focus"]
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Tooltip/index.js
var rs = [
	"auto-start",
	"auto",
	"auto-end",
	"top-start",
	"top",
	"top-end",
	"right-start",
	"right",
	"right-end",
	"bottom-end",
	"bottom",
	"bottom-start",
	"left-end",
	"left",
	"left-start"
], is = /* @__PURE__ */ z.forwardRef(({ children: e, variant: t, ...n }, r) => /* @__PURE__ */ z.createElement(Wo, {
	...n,
	className: (0, Yr.default)({ "tooltip-light": t === "light" }, n.className),
	ref: r
}, e));
is.propTypes = {
	...Wo.propTypes,
	id: Y.default.string.isRequired,
	placement: Y.default.oneOf(rs),
	arrowProps: Y.default.shape({
		ref: Y.default.oneOfType([Y.default.func, Y.default.shape({ current: Y.default.element })]),
		style: Y.default.shape({})
	}),
	show: Y.default.bool,
	popper: Y.default.shape({}),
	bsPrefix: Y.default.string,
	children: Y.default.node,
	className: Y.default.string,
	variant: Y.default.string
}, is.defaultProps = {
	...is.defaultProps,
	id: void 0,
	placement: "right",
	arrowProps: void 0,
	show: void 0,
	popper: void 0,
	children: void 0,
	className: void 0,
	variant: void 0,
	bsPrefix: "tooltip"
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/IconButton/index.js
var as = /* @__PURE__ */ z.forwardRef(({ className: e, alt: t, invertColors: n = !1, icon: r, src: i, iconClassNames: a, onClick: o = () => {}, size: s = "md", variant: c = "primary", iconAs: l = Xo, isActive: u = !1, children: d, ...f }, p) => {
	let m = n ? "inverse-" : "", h = u ? `${c}-` : "", g = l;
	return /* @__PURE__ */ z.createElement("button", {
		"aria-label": t,
		className: (0, Yr.default)("btn-icon", `btn-icon-${m}${c}`, `btn-icon-${s}`, { [`btn-icon-${m}${h}active`]: u }, e),
		onClick: o,
		type: "button",
		ref: p,
		...f
	}, /* @__PURE__ */ z.createElement("span", { className: "btn-icon__icon-container" }, g && /* @__PURE__ */ z.createElement(g, {
		className: (0, Yr.default)("btn-icon__icon", a),
		icon: r,
		src: i
	})));
});
function os({ tooltipPlacement: e = "top", tooltipContent: t, ...n }) {
	let r = n.invertColors ? "inverse-" : "";
	return /* @__PURE__ */ z.createElement(ts, {
		placement: e,
		overlay: /* @__PURE__ */ z.createElement(is, {
			id: `iconbutton-tooltip-${e}`,
			variant: r ? "light" : void 0
		}, t)
	}, /* @__PURE__ */ z.createElement(as, { ...n }));
}
as.IconButtonWithTooltip = os;
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Stack/index.js
var ss = /* @__PURE__ */ (0, z.forwardRef)(({ direction: e = "vertical", gap: t = 0, reversed: n = !1, children: r, className: i, ...a }, o) => /* @__PURE__ */ z.createElement("div", {
	ref: o,
	className: (0, Yr.default)(e === "horizontal" ? "pgn__hstack" : "pgn__vstack", t ? `pgn__stack-gap--${t}` : "", n ? "pgn__stack-reversed" : "", i),
	...a
}, r));
//#endregion
export { gn as $, oi as A, Yn as B, fa as C, Mi as D, Hi as E, br as F, Gn as G, B as H, sr as I, Bn as J, Hn as K, nr as L, ei as M, Jr as N, hi as O, Ir as P, bn as Q, er as R, Na as S, ra as T, qn as U, Jn as V, zn as W, Pn as X, In as Y, Nn as Z, no as _, Zo as a, w as at, Ba as b, Jo as c, u as ct, Eo as d, v as et, q as f, co as g, uo as h, ts as i, y as it, ri as j, mi as k, Ko as l, o as lt, yo as m, as as n, x as nt, Xo as o, C as ot, So as p, Kn as q, is as r, S as rt, qo as s, m as st, ss as t, b as tt, Do as u, c as ut, Ga as v, la as w, La as x, Ha as y, $n as z };
