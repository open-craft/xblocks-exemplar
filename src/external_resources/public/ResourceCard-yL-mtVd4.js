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
	function M(e) {
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
	var N = { current: null }, P = { transition: null }, F = {
		ReactCurrentDispatcher: N,
		ReactCurrentBatchConfig: P,
		ReactCurrentOwner: C
	};
	function te() {
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
	}, e.Component = _, e.Fragment = r, e.Profiler = a, e.PureComponent = y, e.StrictMode = i, e.Suspense = l, e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = F, e.act = te, e.cloneElement = function(e, n, r) {
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
			_init: M
		};
	}, e.memo = function(e, t) {
		return {
			$$typeof: u,
			type: e,
			compare: t === void 0 ? null : t
		};
	}, e.startTransition = function(e) {
		var t = P.transition;
		P.transition = {};
		try {
			e();
		} finally {
			P.transition = t;
		}
	}, e.unstable_act = te, e.useCallback = function(e, t) {
		return N.current.useCallback(e, t);
	}, e.useContext = function(e) {
		return N.current.useContext(e);
	}, e.useDebugValue = function() {}, e.useDeferredValue = function(e) {
		return N.current.useDeferredValue(e);
	}, e.useEffect = function(e, t) {
		return N.current.useEffect(e, t);
	}, e.useId = function() {
		return N.current.useId();
	}, e.useImperativeHandle = function(e, t, n) {
		return N.current.useImperativeHandle(e, t, n);
	}, e.useInsertionEffect = function(e, t) {
		return N.current.useInsertionEffect(e, t);
	}, e.useLayoutEffect = function(e, t) {
		return N.current.useLayoutEffect(e, t);
	}, e.useMemo = function(e, t) {
		return N.current.useMemo(e, t);
	}, e.useReducer = function(e, t, n) {
		return N.current.useReducer(e, t, n);
	}, e.useRef = function(e) {
		return N.current.useRef(e);
	}, e.useState = function(e) {
		return N.current.useState(e);
	}, e.useSyncExternalStore = function(e, t, n) {
		return N.current.useSyncExternalStore(e, t, n);
	}, e.useTransition = function() {
		return N.current.useTransition();
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
			t !== null && M(b, t.startTime - e);
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
				g !== null && M(b, g.startTime - i), u = !1;
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
	function M(t, n) {
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
		}, a > o ? (r.sortIndex = a, t(l, r), n(c) === null && r === n(l) && (h ? (_(w), w = -1) : h = !0, M(b, a - o))) : (r.sortIndex = s, t(c, r), m || p || (m = !0, j(x))), r;
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
	var C = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, w = Symbol.for("react.element"), T = Symbol.for("react.portal"), E = Symbol.for("react.fragment"), D = Symbol.for("react.strict_mode"), O = Symbol.for("react.profiler"), k = Symbol.for("react.provider"), ee = Symbol.for("react.context"), A = Symbol.for("react.forward_ref"), j = Symbol.for("react.suspense"), M = Symbol.for("react.suspense_list"), N = Symbol.for("react.memo"), P = Symbol.for("react.lazy"), F = Symbol.for("react.offscreen"), te = Symbol.iterator;
	function ne(e) {
		return typeof e != "object" || !e ? null : (e = te && e[te] || e["@@iterator"], typeof e == "function" ? e : null);
	}
	var re = Object.assign, ie;
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
			case M: return "SuspenseList";
		}
		if (typeof e == "object") switch (e.$$typeof) {
			case ee: return (e.displayName || "Context") + ".Consumer";
			case k: return (e._context.displayName || "Context") + ".Provider";
			case A:
				var t = e.render;
				return e = e.displayName, e ||= (e = t.displayName || t.name || "", e === "" ? "ForwardRef" : "ForwardRef(" + e + ")"), e;
			case N: return t = e.displayName || null, t === null ? le(e.type) || "Memo" : t;
			case P:
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
		return re({}, t, {
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
		return re({}, t, {
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
	function I(e, t) {
		if (t) {
			var n = e.firstChild;
			if (n && n === e.lastChild && n.nodeType === 3) {
				n.nodeValue = t;
				return;
			}
		}
		e.textContent = t;
	}
	var Ne = {
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
	}, Pe = [
		"Webkit",
		"ms",
		"Moz",
		"O"
	];
	Object.keys(Ne).forEach(function(e) {
		Pe.forEach(function(t) {
			t = t + e.charAt(0).toUpperCase() + e.substring(1), Ne[t] = Ne[e];
		});
	});
	function Fe(e, t, n) {
		return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Ne.hasOwnProperty(e) && Ne[e] ? ("" + t).trim() : t + "px";
	}
	function Ie(e, t) {
		for (var n in e = e.style, t) if (t.hasOwnProperty(n)) {
			var r = n.indexOf("--") === 0, i = Fe(n, t[n], r);
			n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i;
		}
	}
	var Le = re({ menuitem: !0 }, {
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
		if (e = Vi(e)) {
			if (typeof He != "function") throw Error(r(280));
			var t = e.stateNode;
			t && (t = Ui(t), He(e.stateNode, e.type, t));
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
		var i = Ui(n);
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
	var ht = n.unstable_scheduleCallback, gt = n.unstable_cancelCallback, _t = n.unstable_shouldYield, vt = n.unstable_requestPaint, yt = n.unstable_now, bt = n.unstable_getCurrentPriorityLevel, xt = n.unstable_ImmediatePriority, St = n.unstable_UserBlockingPriority, Ct = n.unstable_NormalPriority, wt = n.unstable_LowPriority, Tt = n.unstable_IdlePriority, Et = null, Dt = null;
	function Ot(e) {
		if (Dt && typeof Dt.onCommitFiberRoot == "function") try {
			Dt.onCommitFiberRoot(Et, e, void 0, (e.current.flags & 128) == 128);
		} catch {}
	}
	var kt = Math.clz32 ? Math.clz32 : Mt, At = Math.log, jt = Math.LN2;
	function Mt(e) {
		return e >>>= 0, e === 0 ? 32 : 31 - (At(e) / jt | 0) | 0;
	}
	var Nt = 64, Pt = 4194304;
	function Ft(e) {
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
	function It(e, t) {
		var n = e.pendingLanes;
		if (n === 0) return 0;
		var r = 0, i = e.suspendedLanes, a = e.pingedLanes, o = n & 268435455;
		if (o !== 0) {
			var s = o & ~i;
			s === 0 ? (a &= o, a !== 0 && (r = Ft(a))) : r = Ft(s);
		} else o = n & ~i, o === 0 ? a !== 0 && (r = Ft(a)) : r = Ft(o);
		if (r === 0) return 0;
		if (t !== 0 && t !== r && (t & i) === 0 && (i = r & -r, a = t & -t, i >= a || i === 16 && a & 4194240)) return t;
		if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t;) n = 31 - kt(t), i = 1 << n, r |= e[n], t &= ~i;
		return r;
	}
	function Lt(e, t) {
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
	function Rt(e, t) {
		for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, a = e.pendingLanes; 0 < a;) {
			var o = 31 - kt(a), s = 1 << o, c = i[o];
			c === -1 ? ((s & n) === 0 || (s & r) !== 0) && (i[o] = Lt(s, t)) : c <= t && (e.expiredLanes |= s), a &= ~s;
		}
	}
	function zt(e) {
		return e = e.pendingLanes & -1073741825, e === 0 ? e & 1073741824 ? 1073741824 : 0 : e;
	}
	function Bt() {
		var e = Nt;
		return Nt <<= 1, !(Nt & 4194240) && (Nt = 64), e;
	}
	function Vt(e) {
		for (var t = [], n = 0; 31 > n; n++) t.push(e);
		return t;
	}
	function Ht(e, t, n) {
		e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - kt(t), e[t] = n;
	}
	function Ut(e, t) {
		var n = e.pendingLanes & ~t;
		e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
		var r = e.eventTimes;
		for (e = e.expirationTimes; 0 < n;) {
			var i = 31 - kt(n), a = 1 << i;
			t[i] = 0, r[i] = -1, e[i] = -1, n &= ~a;
		}
	}
	function Wt(e, t) {
		var n = e.entangledLanes |= t;
		for (e = e.entanglements; n;) {
			var r = 31 - kt(n), i = 1 << r;
			i & t | e[r] & t && (e[r] |= t), n &= ~i;
		}
	}
	var L = 0;
	function Gt(e) {
		return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
	}
	var Kt, qt, Jt, Yt, Xt, Zt = !1, Qt = [], $t = null, en = null, tn = null, nn = /* @__PURE__ */ new Map(), rn = /* @__PURE__ */ new Map(), an = [], on = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
	function sn(e, t) {
		switch (e) {
			case "focusin":
			case "focusout":
				$t = null;
				break;
			case "dragenter":
			case "dragleave":
				en = null;
				break;
			case "mouseover":
			case "mouseout":
				tn = null;
				break;
			case "pointerover":
			case "pointerout":
				nn.delete(t.pointerId);
				break;
			case "gotpointercapture":
			case "lostpointercapture": rn.delete(t.pointerId);
		}
	}
	function R(e, t, n, r, i, a) {
		return e === null || e.nativeEvent !== a ? (e = {
			blockedOn: t,
			domEventName: n,
			eventSystemFlags: r,
			nativeEvent: a,
			targetContainers: [i]
		}, t !== null && (t = Vi(t), t !== null && qt(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
	}
	function cn(e, t, n, r, i) {
		switch (t) {
			case "focusin": return $t = R($t, e, t, n, r, i), !0;
			case "dragenter": return en = R(en, e, t, n, r, i), !0;
			case "mouseover": return tn = R(tn, e, t, n, r, i), !0;
			case "pointerover":
				var a = i.pointerId;
				return nn.set(a, R(nn.get(a) || null, e, t, n, r, i)), !0;
			case "gotpointercapture": return a = i.pointerId, rn.set(a, R(rn.get(a) || null, e, t, n, r, i)), !0;
		}
		return !1;
	}
	function ln(e) {
		var t = Bi(e.target);
		if (t !== null) {
			var n = lt(t);
			if (n !== null) {
				if (t = n.tag, t === 13) {
					if (t = ut(n), t !== null) {
						e.blockedOn = t, Xt(e.priority, function() {
							Jt(n);
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
	function un(e) {
		if (e.blockedOn !== null) return !1;
		for (var t = e.targetContainers; 0 < t.length;) {
			var n = xn(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
			if (n === null) {
				n = e.nativeEvent;
				var r = new n.constructor(n.type, n);
				Be = r, n.target.dispatchEvent(r), Be = null;
			} else return t = Vi(n), t !== null && qt(t), e.blockedOn = n, !1;
			t.shift();
		}
		return !0;
	}
	function dn(e, t, n) {
		un(e) && n.delete(t);
	}
	function fn() {
		Zt = !1, $t !== null && un($t) && ($t = null), en !== null && un(en) && (en = null), tn !== null && un(tn) && (tn = null), nn.forEach(dn), rn.forEach(dn);
	}
	function pn(e, t) {
		e.blockedOn === t && (e.blockedOn = null, Zt || (Zt = !0, n.unstable_scheduleCallback(n.unstable_NormalPriority, fn)));
	}
	function mn(e) {
		function t(t) {
			return pn(t, e);
		}
		if (0 < Qt.length) {
			pn(Qt[0], e);
			for (var n = 1; n < Qt.length; n++) {
				var r = Qt[n];
				r.blockedOn === e && (r.blockedOn = null);
			}
		}
		for ($t !== null && pn($t, e), en !== null && pn(en, e), tn !== null && pn(tn, e), nn.forEach(t), rn.forEach(t), n = 0; n < an.length; n++) r = an[n], r.blockedOn === e && (r.blockedOn = null);
		for (; 0 < an.length && (n = an[0], n.blockedOn === null);) ln(n), n.blockedOn === null && an.shift();
	}
	var hn = C.ReactCurrentBatchConfig, gn = !0;
	function _n(e, t, n, r) {
		var i = L, a = hn.transition;
		hn.transition = null;
		try {
			L = 1, yn(e, t, n, r);
		} finally {
			L = i, hn.transition = a;
		}
	}
	function vn(e, t, n, r) {
		var i = L, a = hn.transition;
		hn.transition = null;
		try {
			L = 4, yn(e, t, n, r);
		} finally {
			L = i, hn.transition = a;
		}
	}
	function yn(e, t, n, r) {
		if (gn) {
			var i = xn(e, t, n, r);
			if (i === null) fi(e, t, r, bn, n), sn(e, r);
			else if (cn(i, e, t, n, r)) r.stopPropagation();
			else if (sn(e, r), t & 4 && -1 < on.indexOf(e)) {
				for (; i !== null;) {
					var a = Vi(i);
					if (a !== null && Kt(a), a = xn(e, t, n, r), a === null && fi(e, t, r, bn, n), a === i) break;
					i = a;
				}
				i !== null && r.stopPropagation();
			} else fi(e, t, r, null, n);
		}
	}
	var bn = null;
	function xn(e, t, n, r) {
		if (bn = null, e = Ve(r), e = Bi(e), e !== null) if (t = lt(e), t === null) e = null;
		else if (n = t.tag, n === 13) {
			if (e = ut(t), e !== null) return e;
			e = null;
		} else if (n === 3) {
			if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
			e = null;
		} else t !== e && (e = null);
		return bn = e, null;
	}
	function Sn(e) {
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
			case "message": switch (bt()) {
				case xt: return 1;
				case St: return 4;
				case Ct:
				case wt: return 16;
				case Tt: return 536870912;
				default: return 16;
			}
			default: return 16;
		}
	}
	var Cn = null, wn = null, Tn = null;
	function En() {
		if (Tn) return Tn;
		var e, t = wn, n = t.length, r, i = "value" in Cn ? Cn.value : Cn.textContent, a = i.length;
		for (e = 0; e < n && t[e] === i[e]; e++);
		var o = n - e;
		for (r = 1; r <= o && t[n - r] === i[a - r]; r++);
		return Tn = i.slice(e, 1 < r ? 1 - r : void 0);
	}
	function Dn(e) {
		var t = e.keyCode;
		return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
	}
	function On() {
		return !0;
	}
	function kn() {
		return !1;
	}
	function An(e) {
		function t(t, n, r, i, a) {
			for (var o in this._reactName = t, this._targetInst = r, this.type = n, this.nativeEvent = i, this.target = a, this.currentTarget = null, e) e.hasOwnProperty(o) && (t = e[o], this[o] = t ? t(i) : i[o]);
			return this.isDefaultPrevented = (i.defaultPrevented == null ? !1 === i.returnValue : i.defaultPrevented) ? On : kn, this.isPropagationStopped = kn, this;
		}
		return re(t.prototype, {
			preventDefault: function() {
				this.defaultPrevented = !0;
				var e = this.nativeEvent;
				e && (e.preventDefault ? e.preventDefault() : typeof e.returnValue != "unknown" && (e.returnValue = !1), this.isDefaultPrevented = On);
			},
			stopPropagation: function() {
				var e = this.nativeEvent;
				e && (e.stopPropagation ? e.stopPropagation() : typeof e.cancelBubble != "unknown" && (e.cancelBubble = !0), this.isPropagationStopped = On);
			},
			persist: function() {},
			isPersistent: On
		}), t;
	}
	var jn = {
		eventPhase: 0,
		bubbles: 0,
		cancelable: 0,
		timeStamp: function(e) {
			return e.timeStamp || Date.now();
		},
		defaultPrevented: 0,
		isTrusted: 0
	}, Mn = An(jn), Nn = re({}, jn, {
		view: 0,
		detail: 0
	}), Pn = An(Nn), Fn, In, Ln, Rn = re({}, Nn, {
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
		getModifierState: qn,
		button: 0,
		buttons: 0,
		relatedTarget: function(e) {
			return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
		},
		movementX: function(e) {
			return "movementX" in e ? e.movementX : (e !== Ln && (Ln && e.type === "mousemove" ? (Fn = e.screenX - Ln.screenX, In = e.screenY - Ln.screenY) : In = Fn = 0, Ln = e), Fn);
		},
		movementY: function(e) {
			return "movementY" in e ? e.movementY : In;
		}
	}), zn = An(Rn), Bn = An(re({}, Rn, { dataTransfer: 0 })), Vn = An(re({}, Nn, { relatedTarget: 0 })), z = An(re({}, jn, {
		animationName: 0,
		elapsedTime: 0,
		pseudoElement: 0
	})), B = An(re({}, jn, { clipboardData: function(e) {
		return "clipboardData" in e ? e.clipboardData : window.clipboardData;
	} })), Hn = An(re({}, jn, { data: 0 })), Un = {
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
	}, Wn = {
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
	}, Gn = {
		Alt: "altKey",
		Control: "ctrlKey",
		Meta: "metaKey",
		Shift: "shiftKey"
	};
	function Kn(e) {
		var t = this.nativeEvent;
		return t.getModifierState ? t.getModifierState(e) : (e = Gn[e]) ? !!t[e] : !1;
	}
	function qn() {
		return Kn;
	}
	var Jn = An(re({}, Nn, {
		key: function(e) {
			if (e.key) {
				var t = Un[e.key] || e.key;
				if (t !== "Unidentified") return t;
			}
			return e.type === "keypress" ? (e = Dn(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Wn[e.keyCode] || "Unidentified" : "";
		},
		code: 0,
		location: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		repeat: 0,
		locale: 0,
		getModifierState: qn,
		charCode: function(e) {
			return e.type === "keypress" ? Dn(e) : 0;
		},
		keyCode: function(e) {
			return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
		},
		which: function(e) {
			return e.type === "keypress" ? Dn(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
		}
	})), Yn = An(re({}, Rn, {
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
	})), Xn = An(re({}, Nn, {
		touches: 0,
		targetTouches: 0,
		changedTouches: 0,
		altKey: 0,
		metaKey: 0,
		ctrlKey: 0,
		shiftKey: 0,
		getModifierState: qn
	})), Zn = An(re({}, jn, {
		propertyName: 0,
		elapsedTime: 0,
		pseudoElement: 0
	})), Qn = An(re({}, Rn, {
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
		if (cr) return e === "compositionend" || !er && or(e, t) ? (e = En(), Tn = wn = Cn = null, cr = !1, e) : null;
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
		Ke(r), t = mi(t, "onChange"), 0 < t.length && (n = new Mn("onChange", "change", null, n, r), e.push({
			event: n,
			listeners: t
		}));
	}
	var mr = null, hr = null;
	function gr(e) {
		oi(e, 0);
	}
	function _r(e) {
		if (he(Hi(e))) return e;
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
	var Rr = c && "documentMode" in document && 11 >= document.documentMode, zr = null, Br = null, V = null, Vr = !1;
	function Hr(e, t, n) {
		var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
		Vr || zr == null || zr !== ge(r) || (r = zr, "selectionStart" in r && Ir(r) ? r = {
			start: r.selectionStart,
			end: r.selectionEnd
		} : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
			anchorNode: r.anchorNode,
			anchorOffset: r.anchorOffset,
			focusNode: r.focusNode,
			focusOffset: r.focusOffset
		}), V && jr(V, r) || (V = r, r = mi(Br, "onSelect"), 0 < r.length && (t = new Mn("onSelect", "select", null, t, n), e.push({
			event: t,
			listeners: r
		}), t.target = zr)));
	}
	function Ur(e, t) {
		var n = {};
		return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
	}
	var Wr = {
		animationend: Ur("Animation", "AnimationEnd"),
		animationiteration: Ur("Animation", "AnimationIteration"),
		animationstart: Ur("Animation", "AnimationStart"),
		transitionend: Ur("Transition", "TransitionEnd")
	}, Gr = {}, Kr = {};
	c && (Kr = document.createElement("div").style, "AnimationEvent" in window || (delete Wr.animationend.animation, delete Wr.animationiteration.animation, delete Wr.animationstart.animation), "TransitionEvent" in window || delete Wr.transitionend.transition);
	function qr(e) {
		if (Gr[e]) return Gr[e];
		if (!Wr[e]) return e;
		var t = Wr[e], n;
		for (n in t) if (t.hasOwnProperty(n) && n in Kr) return Gr[e] = t[n];
		return e;
	}
	var Jr = qr("animationend"), Yr = qr("animationiteration"), Xr = qr("animationstart"), Zr = qr("transitionend"), Qr = /* @__PURE__ */ new Map(), $r = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
	function ei(e, t) {
		Qr.set(e, t), o(t, [e]);
	}
	for (var ti = 0; ti < $r.length; ti++) {
		var ni = $r[ti];
		ei(ni.toLowerCase(), "on" + (ni[0].toUpperCase() + ni.slice(1)));
	}
	ei(Jr, "onAnimationEnd"), ei(Yr, "onAnimationIteration"), ei(Xr, "onAnimationStart"), ei("dblclick", "onDoubleClick"), ei("focusin", "onFocus"), ei("focusout", "onBlur"), ei(Zr, "onTransitionEnd"), s("onMouseEnter", ["mouseout", "mouseover"]), s("onMouseLeave", ["mouseout", "mouseover"]), s("onPointerEnter", ["pointerout", "pointerover"]), s("onPointerLeave", ["pointerout", "pointerover"]), o("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), o("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), o("onBeforeInput", [
		"compositionend",
		"keypress",
		"textInput",
		"paste"
	]), o("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), o("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), o("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
	var ri = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), ii = new Set("cancel close invalid load scroll toggle".split(" ").concat(ri));
	function ai(e, t, n) {
		var r = e.type || "unknown-event";
		e.currentTarget = n, ct(r, t, void 0, e), e.currentTarget = null;
	}
	function oi(e, t) {
		t = (t & 4) != 0;
		for (var n = 0; n < e.length; n++) {
			var r = e[n], i = r.event;
			r = r.listeners;
			a: {
				var a = void 0;
				if (t) for (var o = r.length - 1; 0 <= o; o--) {
					var s = r[o], c = s.instance, l = s.currentTarget;
					if (s = s.listener, c !== a && i.isPropagationStopped()) break a;
					ai(i, s, l), a = c;
				}
				else for (o = 0; o < r.length; o++) {
					if (s = r[o], c = s.instance, l = s.currentTarget, s = s.listener, c !== a && i.isPropagationStopped()) break a;
					ai(i, s, l), a = c;
				}
			}
		}
		if (it) throw e = at, it = !1, at = null, e;
	}
	function si(e, t) {
		var n = t[Li];
		n === void 0 && (n = t[Li] = /* @__PURE__ */ new Set());
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
				t !== "selectionchange" && (ii.has(t) || ci(t, !1, e), ci(t, !0, e));
			});
			var t = e.nodeType === 9 ? e : e.ownerDocument;
			t === null || t[li] || (t[li] = !0, ci("selectionchange", !1, t));
		}
	}
	function di(e, t, n, r) {
		switch (Sn(t)) {
			case 1:
				var i = _n;
				break;
			case 4:
				i = vn;
				break;
			default: i = yn;
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
					if (o = Bi(s), o === null) return;
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
				var s = Qr.get(e);
				if (s !== void 0) {
					var c = Mn, l = e;
					switch (e) {
						case "keypress": if (Dn(n) === 0) break a;
						case "keydown":
						case "keyup":
							c = Jn;
							break;
						case "focusin":
							l = "focus", c = Vn;
							break;
						case "focusout":
							l = "blur", c = Vn;
							break;
						case "beforeblur":
						case "afterblur":
							c = Vn;
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
							c = zn;
							break;
						case "drag":
						case "dragend":
						case "dragenter":
						case "dragexit":
						case "dragleave":
						case "dragover":
						case "dragstart":
						case "drop":
							c = Bn;
							break;
						case "touchcancel":
						case "touchend":
						case "touchmove":
						case "touchstart":
							c = Xn;
							break;
						case Jr:
						case Yr:
						case Xr:
							c = z;
							break;
						case Zr:
							c = Zn;
							break;
						case "scroll":
							c = Pn;
							break;
						case "wheel":
							c = Qn;
							break;
						case "copy":
						case "cut":
						case "paste":
							c = B;
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
					if (s = e === "mouseover" || e === "pointerover", c = e === "mouseout" || e === "pointerout", s && n !== Be && (l = n.relatedTarget || n.fromElement) && (Bi(l) || l[Ii])) break a;
					if ((c || s) && (s = i.window === i ? i : (s = i.ownerDocument) ? s.defaultView || s.parentWindow : window, c ? (l = n.relatedTarget || n.toElement, c = r, l = l ? Bi(l) : null, l !== null && (d = lt(l), l !== d || l.tag !== 5 && l.tag !== 6) && (l = null)) : (c = null, l = r), c !== l)) {
						if (u = zn, h = "onMouseLeave", f = "onMouseEnter", p = "mouse", (e === "pointerout" || e === "pointerover") && (u = Yn, h = "onPointerLeave", f = "onPointerEnter", p = "pointer"), d = c == null ? s : Hi(c), m = l == null ? s : Hi(l), s = new u(h, p + "leave", c, n, i), s.target = d, s.relatedTarget = m, h = null, Bi(i) === r && (u = new u(f, p + "enter", l, n, i), u.target = m, u.relatedTarget = d, h = u), d = h, c && l) b: {
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
					if (s = r ? Hi(r) : window, c = s.nodeName && s.nodeName.toLowerCase(), c === "select" || c === "input" && s.type === "file") var g = vr;
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
				switch (_ = r ? Hi(r) : window, e) {
					case "focusin":
						(fr(_) || _.contentEditable === "true") && (zr = _, Br = r, V = null);
						break;
					case "focusout":
						V = Br = zr = null;
						break;
					case "mousedown":
						Vr = !0;
						break;
					case "contextmenu":
					case "mouseup":
					case "dragend":
						Vr = !1, Hr(o, n, i);
						break;
					case "selectionchange": if (Rr) break;
					case "keydown":
					case "keyup": Hr(o, n, i);
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
				y && (rr && n.locale !== "ko" && (cr || y !== "onCompositionStart" ? y === "onCompositionEnd" && cr && (v = En()) : (Cn = i, wn = "value" in Cn ? Cn.value : Cn.textContent, cr = !0)), _ = mi(r, y), 0 < _.length && (y = new Hn(y, e, null, n, i), o.push({
					event: y,
					listeners: _
				}), v ? y.data = v : (v = sr(n), v !== null && (y.data = v)))), (v = nr ? lr(e, n) : ur(e, n)) && (r = mi(r, "onBeforeInput"), 0 < r.length && (i = new Hn("onBeforeInput", "beforeinput", null, n, i), o.push({
					event: i,
					listeners: r
				}), i.data = v));
			}
			oi(o, t);
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
					e.removeChild(i), mn(t);
					return;
				}
				r--;
			} else n !== "$" && n !== "$?" && n !== "$!" || r++;
			n = i;
		} while (n);
		mn(t);
	}
	function ji(e) {
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
	function Mi(e) {
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
	var Ni = Math.random().toString(36).slice(2), Pi = "__reactFiber$" + Ni, Fi = "__reactProps$" + Ni, Ii = "__reactContainer$" + Ni, Li = "__reactEvents$" + Ni, Ri = "__reactListeners$" + Ni, zi = "__reactHandles$" + Ni;
	function Bi(e) {
		var t = e[Pi];
		if (t) return t;
		for (var n = e.parentNode; n;) {
			if (t = n[Ii] || n[Pi]) {
				if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Mi(e); e !== null;) {
					if (n = e[Pi]) return n;
					e = Mi(e);
				}
				return t;
			}
			e = n, n = e.parentNode;
		}
		return null;
	}
	function Vi(e) {
		return e = e[Pi] || e[Ii], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
	}
	function Hi(e) {
		if (e.tag === 5 || e.tag === 6) return e.stateNode;
		throw Error(r(33));
	}
	function Ui(e) {
		return e[Fi] || null;
	}
	var Wi = [], Gi = -1;
	function Ki(e) {
		return { current: e };
	}
	function H(e) {
		0 > Gi || (e.current = Wi[Gi], Wi[Gi] = null, Gi--);
	}
	function qi(e, t) {
		Gi++, Wi[Gi] = e.current, e.current = t;
	}
	var Ji = {}, Yi = Ki(Ji), Xi = Ki(!1), Zi = Ji;
	function Qi(e, t) {
		var n = e.type.contextTypes;
		if (!n) return Ji;
		var r = e.stateNode;
		if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
		var i = {}, a;
		for (a in n) i[a] = t[a];
		return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i;
	}
	function $i(e) {
		return e = e.childContextTypes, e != null;
	}
	function ea() {
		H(Xi), H(Yi);
	}
	function ta(e, t, n) {
		if (Yi.current !== Ji) throw Error(r(168));
		qi(Yi, t), qi(Xi, n);
	}
	function na(e, t, n) {
		var i = e.stateNode;
		if (t = t.childContextTypes, typeof i.getChildContext != "function") return n;
		for (var a in i = i.getChildContext(), i) if (!(a in t)) throw Error(r(108, ue(e) || "Unknown", a));
		return re({}, n, i);
	}
	function ra(e) {
		return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Ji, Zi = Yi.current, qi(Yi, e), qi(Xi, Xi.current), !0;
	}
	function ia(e, t, n) {
		var i = e.stateNode;
		if (!i) throw Error(r(169));
		n ? (e = na(e, t, Zi), i.__reactInternalMemoizedMergedChildContext = e, H(Xi), H(Yi), qi(Yi, e)) : H(Xi), qi(Xi, n);
	}
	var aa = null, oa = !1, sa = !1;
	function ca(e) {
		aa === null ? aa = [e] : aa.push(e);
	}
	function la(e) {
		oa = !0, ca(e);
	}
	function ua() {
		if (!sa && aa !== null) {
			sa = !0;
			var e = 0, t = L;
			try {
				var n = aa;
				for (L = 1; e < n.length; e++) {
					var r = n[e];
					do
						r = r(!0);
					while (r !== null);
				}
				aa = null, oa = !1;
			} catch (t) {
				throw aa !== null && (aa = aa.slice(e + 1)), ht(xt, ua), t;
			} finally {
				L = t, sa = !1;
			}
		}
		return null;
	}
	var da = [], fa = 0, pa = null, ma = 0, ha = [], ga = 0, _a = null, va = 1, ya = "";
	function ba(e, t) {
		da[fa++] = ma, da[fa++] = pa, pa = e, ma = t;
	}
	function xa(e, t, n) {
		ha[ga++] = va, ha[ga++] = ya, ha[ga++] = _a, _a = e;
		var r = va;
		e = ya;
		var i = 32 - kt(r) - 1;
		r &= ~(1 << i), n += 1;
		var a = 32 - kt(t) + i;
		if (30 < a) {
			var o = i - i % 5;
			a = (r & (1 << o) - 1).toString(32), r >>= o, i -= o, va = 1 << 32 - kt(t) + i | n << i | r, ya = a + e;
		} else va = 1 << a | n << i | r, ya = e;
	}
	function Sa(e) {
		e.return !== null && (ba(e, 1), xa(e, 1, 0));
	}
	function Ca(e) {
		for (; e === pa;) pa = da[--fa], da[fa] = null, ma = da[--fa], da[fa] = null;
		for (; e === _a;) _a = ha[--ga], ha[ga] = null, ya = ha[--ga], ha[ga] = null, va = ha[--ga], ha[ga] = null;
	}
	var wa = null, Ta = null, Ea = !1, Da = null;
	function Oa(e, t) {
		var n = ql(5, null, null, 0);
		n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
	}
	function ka(e, t) {
		switch (e.tag) {
			case 5:
				var n = e.type;
				return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t === null ? !1 : (e.stateNode = t, wa = e, Ta = ji(t.firstChild), !0);
			case 6: return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t === null ? !1 : (e.stateNode = t, wa = e, Ta = null, !0);
			case 13: return t = t.nodeType === 8 ? t : null, t === null ? !1 : (n = _a === null ? null : {
				id: va,
				overflow: ya
			}, e.memoizedState = {
				dehydrated: t,
				treeContext: n,
				retryLane: 1073741824
			}, n = ql(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, wa = e, Ta = null, !0);
			default: return !1;
		}
	}
	function Aa(e) {
		return (e.mode & 1) != 0 && (e.flags & 128) == 0;
	}
	function ja(e) {
		if (Ea) {
			var t = Ta;
			if (t) {
				var n = t;
				if (!ka(e, t)) {
					if (Aa(e)) throw Error(r(418));
					t = ji(n.nextSibling);
					var i = wa;
					t && ka(e, t) ? Oa(i, n) : (e.flags = e.flags & -4097 | 2, Ea = !1, wa = e);
				}
			} else {
				if (Aa(e)) throw Error(r(418));
				e.flags = e.flags & -4097 | 2, Ea = !1, wa = e;
			}
		}
	}
	function Ma(e) {
		for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
		wa = e;
	}
	function Na(e) {
		if (e !== wa) return !1;
		if (!Ea) return Ma(e), Ea = !0, !1;
		var t;
		if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !wi(e.type, e.memoizedProps)), t &&= Ta) {
			if (Aa(e)) throw Pa(), Error(r(418));
			for (; t;) Oa(e, t), t = ji(t.nextSibling);
		}
		if (Ma(e), e.tag === 13) {
			if (e = e.memoizedState, e = e === null ? null : e.dehydrated, !e) throw Error(r(317));
			a: {
				for (e = e.nextSibling, t = 0; e;) {
					if (e.nodeType === 8) {
						var n = e.data;
						if (n === "/$") {
							if (t === 0) {
								Ta = ji(e.nextSibling);
								break a;
							}
							t--;
						} else n !== "$" && n !== "$!" && n !== "$?" || t++;
					}
					e = e.nextSibling;
				}
				Ta = null;
			}
		} else Ta = wa ? ji(e.stateNode.nextSibling) : null;
		return !0;
	}
	function Pa() {
		for (var e = Ta; e;) e = ji(e.nextSibling);
	}
	function Fa() {
		Ta = wa = null, Ea = !1;
	}
	function Ia(e) {
		Da === null ? Da = [e] : Da.push(e);
	}
	var La = C.ReactCurrentBatchConfig;
	function Ra(e, t, n) {
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
	function za(e, t) {
		throw e = Object.prototype.toString.call(t), Error(r(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
	}
	function Ba(e) {
		var t = e._init;
		return t(e._payload);
	}
	function Va(e) {
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
			return i === E ? d(e, t, n.props.children, r, n.key) : t !== null && (t.elementType === i || typeof i == "object" && i && i.$$typeof === P && Ba(i) === t.type) ? (r = a(t, n.props), r.ref = Ra(e, t, n), r.return = e, r) : (r = Zl(n.type, n.key, n.props, null, e.mode, r), r.ref = Ra(e, t, n), r.return = e, r);
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
					case w: return n = Zl(t.type, t.key, t.props, null, e.mode, n), n.ref = Ra(e, null, t), n.return = e, n;
					case T: return t = tu(t, e.mode, n), t.return = e, t;
					case P:
						var r = t._init;
						return f(e, r(t._payload), n);
				}
				if (Ce(t) || ne(t)) return t = Ql(t, e.mode, n, null), t.return = e, t;
				za(e, t);
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
					case P: return i = n._init, p(e, t, i(n._payload), r);
				}
				if (Ce(n) || ne(n)) return i === null ? d(e, t, n, r, null) : null;
				za(e, n);
			}
			return null;
		}
		function m(e, t, n, r, i) {
			if (typeof r == "string" && r !== "" || typeof r == "number") return e = e.get(n) || null, c(t, e, "" + r, i);
			if (typeof r == "object" && r) {
				switch (r.$$typeof) {
					case w: return e = e.get(r.key === null ? n : r.key) || null, l(t, e, r, i);
					case T: return e = e.get(r.key === null ? n : r.key) || null, u(t, e, r, i);
					case P:
						var a = r._init;
						return m(e, t, n, a(r._payload), i);
				}
				if (Ce(r) || ne(r)) return e = e.get(n) || null, d(t, e, r, i, null);
				za(t, r);
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
			if (h === s.length) return n(r, d), Ea && ba(r, h), l;
			if (d === null) {
				for (; h < s.length; h++) d = f(r, s[h], c), d !== null && (a = o(d, a, h), u === null ? l = d : u.sibling = d, u = d);
				return Ea && ba(r, h), l;
			}
			for (d = i(r, d); h < s.length; h++) g = m(d, r, h, s[h], c), g !== null && (e && g.alternate !== null && d.delete(g.key === null ? h : g.key), a = o(g, a, h), u === null ? l = g : u.sibling = g, u = g);
			return e && d.forEach(function(e) {
				return t(r, e);
			}), Ea && ba(r, h), l;
		}
		function g(a, s, c, l) {
			var u = ne(c);
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
			if (v.done) return n(a, h), Ea && ba(a, g), u;
			if (h === null) {
				for (; !v.done; g++, v = c.next()) v = f(a, v.value, l), v !== null && (s = o(v, s, g), d === null ? u = v : d.sibling = v, d = v);
				return Ea && ba(a, g), u;
			}
			for (h = i(a, h); !v.done; g++, v = c.next()) v = m(h, a, g, v.value, l), v !== null && (e && v.alternate !== null && h.delete(v.key === null ? g : v.key), s = o(v, s, g), d === null ? u = v : d.sibling = v, d = v);
			return e && h.forEach(function(e) {
				return t(a, e);
			}), Ea && ba(a, g), u;
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
									} else if (l.elementType === c || typeof c == "object" && c && c.$$typeof === P && Ba(c) === l.type) {
										n(e, l.sibling), r = a(l, i.props), r.ref = Ra(e, l, i), r.return = e, e = r;
										break a;
									}
									n(e, l);
									break;
								} else t(e, l);
								l = l.sibling;
							}
							i.type === E ? (r = Ql(i.props.children, e.mode, o, i.key), r.return = e, e = r) : (o = Zl(i.type, i.key, i.props, null, e.mode, o), o.ref = Ra(e, r, i), o.return = e, e = o);
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
					case P: return l = i._init, _(e, r, l(i._payload), o);
				}
				if (Ce(i)) return h(e, r, i, o);
				if (ne(i)) return g(e, r, i, o);
				za(e, i);
			}
			return typeof i == "string" && i !== "" || typeof i == "number" ? (i = "" + i, r !== null && r.tag === 6 ? (n(e, r.sibling), r = a(r, i), r.return = e, e = r) : (n(e, r), r = eu(i, e.mode, o), r.return = e, e = r), s(e)) : n(e, r);
		}
		return _;
	}
	var Ha = Va(!0), Ua = Va(!1), Wa = Ki(null), Ga = null, Ka = null, qa = null;
	function Ja() {
		qa = Ka = Ga = null;
	}
	function Ya(e) {
		var t = Wa.current;
		H(Wa), e._currentValue = t;
	}
	function Xa(e, t, n) {
		for (; e !== null;) {
			var r = e.alternate;
			if ((e.childLanes & t) === t ? r !== null && (r.childLanes & t) !== t && (r.childLanes |= t) : (e.childLanes |= t, r !== null && (r.childLanes |= t)), e === n) break;
			e = e.return;
		}
	}
	function Za(e, t) {
		Ga = e, qa = Ka = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (zs = !0), e.firstContext = null);
	}
	function Qa(e) {
		var t = e._currentValue;
		if (qa !== e) if (e = {
			context: e,
			memoizedValue: t,
			next: null
		}, Ka === null) {
			if (Ga === null) throw Error(r(308));
			Ka = e, Ga.dependencies = {
				lanes: 0,
				firstContext: e
			};
		} else Ka = Ka.next = e;
		return t;
	}
	var $a = null;
	function eo(e) {
		$a === null ? $a = [e] : $a.push(e);
	}
	function to(e, t, n, r) {
		var i = t.interleaved;
		return i === null ? (n.next = n, eo(t)) : (n.next = i.next, i.next = n), t.interleaved = n, no(e, r);
	}
	function no(e, t) {
		e.lanes |= t;
		var n = e.alternate;
		for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
		return n.tag === 3 ? n.stateNode : null;
	}
	var ro = !1;
	function io(e) {
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
	function ao(e, t) {
		e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
			baseState: e.baseState,
			firstBaseUpdate: e.firstBaseUpdate,
			lastBaseUpdate: e.lastBaseUpdate,
			shared: e.shared,
			effects: e.effects
		});
	}
	function oo(e, t) {
		return {
			eventTime: e,
			lane: t,
			tag: 0,
			payload: null,
			callback: null,
			next: null
		};
	}
	function so(e, t, n) {
		var r = e.updateQueue;
		if (r === null) return null;
		if (r = r.shared, Y & 2) {
			var i = r.pending;
			return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, no(e, n);
		}
		return i = r.interleaved, i === null ? (t.next = t, eo(r)) : (t.next = i.next, i.next = t), r.interleaved = t, no(e, n);
	}
	function co(e, t, n) {
		if (t = t.updateQueue, t !== null && (t = t.shared, n & 4194240)) {
			var r = t.lanes;
			r &= e.pendingLanes, n |= r, t.lanes = n, Wt(e, n);
		}
	}
	function lo(e, t) {
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
	function uo(e, t, n, r) {
		var i = e.updateQueue;
		ro = !1;
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
								d = re({}, d, f);
								break a;
							case 2: ro = !0;
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
	function fo(e, t, n) {
		if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
			var i = e[t], a = i.callback;
			if (a !== null) {
				if (i.callback = null, i = n, typeof a != "function") throw Error(r(191, a));
				a.call(i);
			}
		}
	}
	var po = {}, mo = Ki(po), ho = Ki(po), go = Ki(po);
	function _o(e) {
		if (e === po) throw Error(r(174));
		return e;
	}
	function vo(e, t) {
		switch (qi(go, t), qi(ho, e), qi(mo, po), e = t.nodeType, e) {
			case 9:
			case 11:
				t = (t = t.documentElement) ? t.namespaceURI : Ae(null, "");
				break;
			default: e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Ae(t, e);
		}
		H(mo), qi(mo, t);
	}
	function yo() {
		H(mo), H(ho), H(go);
	}
	function bo(e) {
		_o(go.current);
		var t = _o(mo.current), n = Ae(t, e.type);
		t !== n && (qi(ho, e), qi(mo, n));
	}
	function xo(e) {
		ho.current === e && (H(mo), H(ho));
	}
	var So = Ki(0);
	function Co(e) {
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
	var wo = [];
	function To() {
		for (var e = 0; e < wo.length; e++) wo[e]._workInProgressVersionPrimary = null;
		wo.length = 0;
	}
	var Eo = C.ReactCurrentDispatcher, U = C.ReactCurrentBatchConfig, Do = 0, Oo = null, ko = null, W = null, Ao = !1, jo = !1, Mo = 0, No = 0;
	function Po() {
		throw Error(r(321));
	}
	function Fo(e, t) {
		if (t === null) return !1;
		for (var n = 0; n < t.length && n < e.length; n++) if (!Ar(e[n], t[n])) return !1;
		return !0;
	}
	function Io(e, t, n, i, a, o) {
		if (Do = o, Oo = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Eo.current = e === null || e.memoizedState === null ? ys : bs, e = n(i, a), jo) {
			o = 0;
			do {
				if (jo = !1, Mo = 0, 25 <= o) throw Error(r(301));
				o += 1, W = ko = null, t.updateQueue = null, Eo.current = xs, e = n(i, a);
			} while (jo);
		}
		if (Eo.current = vs, t = ko !== null && ko.next !== null, Do = 0, W = ko = Oo = null, Ao = !1, t) throw Error(r(300));
		return e;
	}
	function Lo() {
		var e = Mo !== 0;
		return Mo = 0, e;
	}
	function Ro() {
		var e = {
			memoizedState: null,
			baseState: null,
			baseQueue: null,
			queue: null,
			next: null
		};
		return W === null ? Oo.memoizedState = W = e : W = W.next = e, W;
	}
	function zo() {
		if (ko === null) {
			var e = Oo.alternate;
			e = e === null ? null : e.memoizedState;
		} else e = ko.next;
		var t = W === null ? Oo.memoizedState : W.next;
		if (t !== null) W = t, ko = e;
		else {
			if (e === null) throw Error(r(310));
			ko = e, e = {
				memoizedState: ko.memoizedState,
				baseState: ko.baseState,
				baseQueue: ko.baseQueue,
				queue: ko.queue,
				next: null
			}, W === null ? Oo.memoizedState = W = e : W = W.next = e;
		}
		return W;
	}
	function Bo(e, t) {
		return typeof t == "function" ? t(e) : t;
	}
	function Vo(e) {
		var t = zo(), n = t.queue;
		if (n === null) throw Error(r(311));
		n.lastRenderedReducer = e;
		var i = ko, a = i.baseQueue, o = n.pending;
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
				if ((Do & d) === d) l !== null && (l = l.next = {
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
					l === null ? (c = l = f, s = i) : l = l.next = f, Oo.lanes |= d, Xc |= d;
				}
				u = u.next;
			} while (u !== null && u !== o);
			l === null ? s = i : l.next = c, Ar(i, t.memoizedState) || (zs = !0), t.memoizedState = i, t.baseState = s, t.baseQueue = l, n.lastRenderedState = i;
		}
		if (e = n.interleaved, e !== null) {
			a = e;
			do
				o = a.lane, Oo.lanes |= o, Xc |= o, a = a.next;
			while (a !== e);
		} else a === null && (n.lanes = 0);
		return [t.memoizedState, n.dispatch];
	}
	function Ho(e) {
		var t = zo(), n = t.queue;
		if (n === null) throw Error(r(311));
		n.lastRenderedReducer = e;
		var i = n.dispatch, a = n.pending, o = t.memoizedState;
		if (a !== null) {
			n.pending = null;
			var s = a = a.next;
			do
				o = e(o, s.action), s = s.next;
			while (s !== a);
			Ar(o, t.memoizedState) || (zs = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
		}
		return [o, i];
	}
	function Uo() {}
	function Wo(e, t) {
		var n = Oo, i = zo(), a = t(), o = !Ar(i.memoizedState, a);
		if (o && (i.memoizedState = a, zs = !0), i = i.queue, ns(qo.bind(null, n, i, e), [e]), i.getSnapshot !== t || o || W !== null && W.memoizedState.tag & 1) {
			if (n.flags |= 2048, Zo(9, Ko.bind(null, n, i, a, t), void 0, null), Gc === null) throw Error(r(349));
			Do & 30 || Go(n, t, a);
		}
		return a;
	}
	function Go(e, t, n) {
		e.flags |= 16384, e = {
			getSnapshot: t,
			value: n
		}, t = Oo.updateQueue, t === null ? (t = {
			lastEffect: null,
			stores: null
		}, Oo.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
	}
	function Ko(e, t, n, r) {
		t.value = n, t.getSnapshot = r, Jo(t) && Yo(e);
	}
	function qo(e, t, n) {
		return n(function() {
			Jo(t) && Yo(e);
		});
	}
	function Jo(e) {
		var t = e.getSnapshot;
		e = e.value;
		try {
			var n = t();
			return !Ar(e, n);
		} catch {
			return !0;
		}
	}
	function Yo(e) {
		var t = no(e, 1);
		t !== null && Q(t, e, 1, -1);
	}
	function Xo(e) {
		var t = Ro();
		return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
			pending: null,
			interleaved: null,
			lanes: 0,
			dispatch: null,
			lastRenderedReducer: Bo,
			lastRenderedState: e
		}, t.queue = e, e = e.dispatch = ms.bind(null, Oo, e), [t.memoizedState, e];
	}
	function Zo(e, t, n, r) {
		return e = {
			tag: e,
			create: t,
			destroy: n,
			deps: r,
			next: null
		}, t = Oo.updateQueue, t === null ? (t = {
			lastEffect: null,
			stores: null
		}, Oo.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
	}
	function Qo() {
		return zo().memoizedState;
	}
	function $o(e, t, n, r) {
		var i = Ro();
		Oo.flags |= e, i.memoizedState = Zo(1 | t, n, void 0, r === void 0 ? null : r);
	}
	function es(e, t, n, r) {
		var i = zo();
		r = r === void 0 ? null : r;
		var a = void 0;
		if (ko !== null) {
			var o = ko.memoizedState;
			if (a = o.destroy, r !== null && Fo(r, o.deps)) {
				i.memoizedState = Zo(t, n, a, r);
				return;
			}
		}
		Oo.flags |= e, i.memoizedState = Zo(1 | t, n, a, r);
	}
	function ts(e, t) {
		return $o(8390656, 8, e, t);
	}
	function ns(e, t) {
		return es(2048, 8, e, t);
	}
	function rs(e, t) {
		return es(4, 2, e, t);
	}
	function is(e, t) {
		return es(4, 4, e, t);
	}
	function as(e, t) {
		if (typeof t == "function") return e = e(), t(e), function() {
			t(null);
		};
		if (t != null) return e = e(), t.current = e, function() {
			t.current = null;
		};
	}
	function os(e, t, n) {
		return n = n == null ? null : n.concat([e]), es(4, 4, as.bind(null, t, e), n);
	}
	function ss() {}
	function cs(e, t) {
		var n = zo();
		t = t === void 0 ? null : t;
		var r = n.memoizedState;
		return r !== null && t !== null && Fo(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
	}
	function ls(e, t) {
		var n = zo();
		t = t === void 0 ? null : t;
		var r = n.memoizedState;
		return r !== null && t !== null && Fo(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
	}
	function us(e, t, n) {
		return Do & 21 ? (Ar(n, t) || (n = Bt(), Oo.lanes |= n, Xc |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, zs = !0), e.memoizedState = n);
	}
	function ds(e, t) {
		var n = L;
		L = n !== 0 && 4 > n ? n : 4, e(!0);
		var r = U.transition;
		U.transition = {};
		try {
			e(!1), t();
		} finally {
			L = n, U.transition = r;
		}
	}
	function fs() {
		return zo().memoizedState;
	}
	function ps(e, t, n) {
		var r = hl(e);
		if (n = {
			lane: r,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null
		}, hs(e)) gs(t, n);
		else if (n = to(e, t, n, r), n !== null) {
			var i = ml();
			Q(n, e, r, i), _s(n, t, r);
		}
	}
	function ms(e, t, n) {
		var r = hl(e), i = {
			lane: r,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null
		};
		if (hs(e)) gs(t, i);
		else {
			var a = e.alternate;
			if (e.lanes === 0 && (a === null || a.lanes === 0) && (a = t.lastRenderedReducer, a !== null)) try {
				var o = t.lastRenderedState, s = a(o, n);
				if (i.hasEagerState = !0, i.eagerState = s, Ar(s, o)) {
					var c = t.interleaved;
					c === null ? (i.next = i, eo(t)) : (i.next = c.next, c.next = i), t.interleaved = i;
					return;
				}
			} catch {}
			n = to(e, t, i, r), n !== null && (i = ml(), Q(n, e, r, i), _s(n, t, r));
		}
	}
	function hs(e) {
		var t = e.alternate;
		return e === Oo || t !== null && t === Oo;
	}
	function gs(e, t) {
		jo = Ao = !0;
		var n = e.pending;
		n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
	}
	function _s(e, t, n) {
		if (n & 4194240) {
			var r = t.lanes;
			r &= e.pendingLanes, n |= r, t.lanes = n, Wt(e, n);
		}
	}
	var vs = {
		readContext: Qa,
		useCallback: Po,
		useContext: Po,
		useEffect: Po,
		useImperativeHandle: Po,
		useInsertionEffect: Po,
		useLayoutEffect: Po,
		useMemo: Po,
		useReducer: Po,
		useRef: Po,
		useState: Po,
		useDebugValue: Po,
		useDeferredValue: Po,
		useTransition: Po,
		useMutableSource: Po,
		useSyncExternalStore: Po,
		useId: Po,
		unstable_isNewReconciler: !1
	}, ys = {
		readContext: Qa,
		useCallback: function(e, t) {
			return Ro().memoizedState = [e, t === void 0 ? null : t], e;
		},
		useContext: Qa,
		useEffect: ts,
		useImperativeHandle: function(e, t, n) {
			return n = n == null ? null : n.concat([e]), $o(4194308, 4, as.bind(null, t, e), n);
		},
		useLayoutEffect: function(e, t) {
			return $o(4194308, 4, e, t);
		},
		useInsertionEffect: function(e, t) {
			return $o(4, 2, e, t);
		},
		useMemo: function(e, t) {
			var n = Ro();
			return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
		},
		useReducer: function(e, t, n) {
			var r = Ro();
			return t = n === void 0 ? t : n(t), r.memoizedState = r.baseState = t, e = {
				pending: null,
				interleaved: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: e,
				lastRenderedState: t
			}, r.queue = e, e = e.dispatch = ps.bind(null, Oo, e), [r.memoizedState, e];
		},
		useRef: function(e) {
			var t = Ro();
			return e = { current: e }, t.memoizedState = e;
		},
		useState: Xo,
		useDebugValue: ss,
		useDeferredValue: function(e) {
			return Ro().memoizedState = e;
		},
		useTransition: function() {
			var e = Xo(!1), t = e[0];
			return e = ds.bind(null, e[1]), Ro().memoizedState = e, [t, e];
		},
		useMutableSource: function() {},
		useSyncExternalStore: function(e, t, n) {
			var i = Oo, a = Ro();
			if (Ea) {
				if (n === void 0) throw Error(r(407));
				n = n();
			} else {
				if (n = t(), Gc === null) throw Error(r(349));
				Do & 30 || Go(i, t, n);
			}
			a.memoizedState = n;
			var o = {
				value: n,
				getSnapshot: t
			};
			return a.queue = o, ts(qo.bind(null, i, o, e), [e]), i.flags |= 2048, Zo(9, Ko.bind(null, i, o, n, t), void 0, null), n;
		},
		useId: function() {
			var e = Ro(), t = Gc.identifierPrefix;
			if (Ea) {
				var n = ya, r = va;
				n = (r & ~(1 << 32 - kt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Mo++, 0 < n && (t += "H" + n.toString(32)), t += ":";
			} else n = No++, t = ":" + t + "r" + n.toString(32) + ":";
			return e.memoizedState = t;
		},
		unstable_isNewReconciler: !1
	}, bs = {
		readContext: Qa,
		useCallback: cs,
		useContext: Qa,
		useEffect: ns,
		useImperativeHandle: os,
		useInsertionEffect: rs,
		useLayoutEffect: is,
		useMemo: ls,
		useReducer: Vo,
		useRef: Qo,
		useState: function() {
			return Vo(Bo);
		},
		useDebugValue: ss,
		useDeferredValue: function(e) {
			return us(zo(), ko.memoizedState, e);
		},
		useTransition: function() {
			return [Vo(Bo)[0], zo().memoizedState];
		},
		useMutableSource: Uo,
		useSyncExternalStore: Wo,
		useId: fs,
		unstable_isNewReconciler: !1
	}, xs = {
		readContext: Qa,
		useCallback: cs,
		useContext: Qa,
		useEffect: ns,
		useImperativeHandle: os,
		useInsertionEffect: rs,
		useLayoutEffect: is,
		useMemo: ls,
		useReducer: Ho,
		useRef: Qo,
		useState: function() {
			return Ho(Bo);
		},
		useDebugValue: ss,
		useDeferredValue: function(e) {
			var t = zo();
			return ko === null ? t.memoizedState = e : us(t, ko.memoizedState, e);
		},
		useTransition: function() {
			return [Ho(Bo)[0], zo().memoizedState];
		},
		useMutableSource: Uo,
		useSyncExternalStore: Wo,
		useId: fs,
		unstable_isNewReconciler: !1
	};
	function Ss(e, t) {
		if (e && e.defaultProps) {
			for (var n in t = re({}, t), e = e.defaultProps, e) t[n] === void 0 && (t[n] = e[n]);
			return t;
		}
		return t;
	}
	function Cs(e, t, n, r) {
		t = e.memoizedState, n = n(r, t), n = n == null ? t : re({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
	}
	var ws = {
		isMounted: function(e) {
			return (e = e._reactInternals) ? lt(e) === e : !1;
		},
		enqueueSetState: function(e, t, n) {
			e = e._reactInternals;
			var r = ml(), i = hl(e), a = oo(r, i);
			a.payload = t, n != null && (a.callback = n), t = so(e, a, i), t !== null && (Q(t, e, i, r), co(t, e, i));
		},
		enqueueReplaceState: function(e, t, n) {
			e = e._reactInternals;
			var r = ml(), i = hl(e), a = oo(r, i);
			a.tag = 1, a.payload = t, n != null && (a.callback = n), t = so(e, a, i), t !== null && (Q(t, e, i, r), co(t, e, i));
		},
		enqueueForceUpdate: function(e, t) {
			e = e._reactInternals;
			var n = ml(), r = hl(e), i = oo(n, r);
			i.tag = 2, t != null && (i.callback = t), t = so(e, i, r), t !== null && (Q(t, e, r, n), co(t, e, r));
		}
	};
	function Ts(e, t, n, r, i, a, o) {
		return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, a, o) : t.prototype && t.prototype.isPureReactComponent ? !jr(n, r) || !jr(i, a) : !0;
	}
	function Es(e, t, n) {
		var r = !1, i = Ji, a = t.contextType;
		return typeof a == "object" && a ? a = Qa(a) : (i = $i(t) ? Zi : Yi.current, r = t.contextTypes, a = (r = r != null) ? Qi(e, i) : Ji), t = new t(n, a), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = ws, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = a), t;
	}
	function Ds(e, t, n, r) {
		e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && ws.enqueueReplaceState(t, t.state, null);
	}
	function Os(e, t, n, r) {
		var i = e.stateNode;
		i.props = n, i.state = e.memoizedState, i.refs = {}, io(e);
		var a = t.contextType;
		typeof a == "object" && a ? i.context = Qa(a) : (a = $i(t) ? Zi : Yi.current, i.context = Qi(e, a)), i.state = e.memoizedState, a = t.getDerivedStateFromProps, typeof a == "function" && (Cs(e, t, a, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && ws.enqueueReplaceState(i, i.state, null), uo(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308);
	}
	function ks(e, t) {
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
	function As(e, t, n) {
		return {
			value: e,
			source: null,
			stack: n ?? null,
			digest: t ?? null
		};
	}
	function js(e, t) {
		try {
			console.error(t.value);
		} catch (e) {
			setTimeout(function() {
				throw e;
			});
		}
	}
	var Ms = typeof WeakMap == "function" ? WeakMap : Map;
	function Ns(e, t, n) {
		n = oo(-1, n), n.tag = 3, n.payload = { element: null };
		var r = t.value;
		return n.callback = function() {
			il || (il = !0, al = r), js(e, t);
		}, n;
	}
	function Ps(e, t, n) {
		n = oo(-1, n), n.tag = 3;
		var r = e.type.getDerivedStateFromError;
		if (typeof r == "function") {
			var i = t.value;
			n.payload = function() {
				return r(i);
			}, n.callback = function() {
				js(e, t);
			};
		}
		var a = e.stateNode;
		return a !== null && typeof a.componentDidCatch == "function" && (n.callback = function() {
			js(e, t), typeof r != "function" && (ol === null ? ol = new Set([this]) : ol.add(this));
			var n = t.stack;
			this.componentDidCatch(t.value, { componentStack: n === null ? "" : n });
		}), n;
	}
	function Fs(e, t, n) {
		var r = e.pingCache;
		if (r === null) {
			r = e.pingCache = new Ms();
			var i = /* @__PURE__ */ new Set();
			r.set(t, i);
		} else i = r.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), r.set(t, i));
		i.has(n) || (i.add(n), e = Bl.bind(null, e, t, n), t.then(e, e));
	}
	function Is(e) {
		do {
			var t;
			if ((t = e.tag === 13) && (t = e.memoizedState, t = t === null ? !0 : t.dehydrated !== null), t) return e;
			e = e.return;
		} while (e !== null);
		return null;
	}
	function Ls(e, t, n, r, i) {
		return e.mode & 1 ? (e.flags |= 65536, e.lanes = i, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = oo(-1, 1), t.tag = 2, so(n, t, 1))), n.lanes |= 1), e);
	}
	var Rs = C.ReactCurrentOwner, zs = !1;
	function Bs(e, t, n, r) {
		t.child = e === null ? Ua(t, null, n, r) : Ha(t, e.child, n, r);
	}
	function Vs(e, t, n, r, i) {
		n = n.render;
		var a = t.ref;
		return Za(t, i), r = Io(e, t, n, r, a, i), n = Lo(), e !== null && !zs ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, oc(e, t, i)) : (Ea && n && Sa(t), t.flags |= 1, Bs(e, t, r, i), t.child);
	}
	function Hs(e, t, n, r, i) {
		if (e === null) {
			var a = n.type;
			return typeof a == "function" && !Jl(a) && a.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = a, Us(e, t, a, r, i)) : (e = Zl(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
		}
		if (a = e.child, (e.lanes & i) === 0) {
			var o = a.memoizedProps;
			if (n = n.compare, n = n === null ? jr : n, n(o, r) && e.ref === t.ref) return oc(e, t, i);
		}
		return t.flags |= 1, e = Xl(a, r), e.ref = t.ref, e.return = t, t.child = e;
	}
	function Us(e, t, n, r, i) {
		if (e !== null) {
			var a = e.memoizedProps;
			if (jr(a, r) && e.ref === t.ref) if (zs = !1, t.pendingProps = r = a, (e.lanes & i) !== 0) e.flags & 131072 && (zs = !0);
			else return t.lanes = e.lanes, oc(e, t, i);
		}
		return Ks(e, t, n, r, i);
	}
	function Ws(e, t, n) {
		var r = t.pendingProps, i = r.children, a = e === null ? null : e.memoizedState;
		if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = {
			baseLanes: 0,
			cachePool: null,
			transitions: null
		}, qi(Jc, qc), qc |= n;
		else {
			if (!(n & 1073741824)) return e = a === null ? n : a.baseLanes | n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
				baseLanes: e,
				cachePool: null,
				transitions: null
			}, t.updateQueue = null, qi(Jc, qc), qc |= e, null;
			t.memoizedState = {
				baseLanes: 0,
				cachePool: null,
				transitions: null
			}, r = a === null ? n : a.baseLanes, qi(Jc, qc), qc |= r;
		}
		else a === null ? r = n : (r = a.baseLanes | n, t.memoizedState = null), qi(Jc, qc), qc |= r;
		return Bs(e, t, i, n), t.child;
	}
	function Gs(e, t) {
		var n = t.ref;
		(e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
	}
	function Ks(e, t, n, r, i) {
		var a = $i(n) ? Zi : Yi.current;
		return a = Qi(t, a), Za(t, i), n = Io(e, t, n, r, a, i), r = Lo(), e !== null && !zs ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, oc(e, t, i)) : (Ea && r && Sa(t), t.flags |= 1, Bs(e, t, n, i), t.child);
	}
	function qs(e, t, n, r, i) {
		if ($i(n)) {
			var a = !0;
			ra(t);
		} else a = !1;
		if (Za(t, i), t.stateNode === null) ac(e, t), Es(t, n, r), Os(t, n, r, i), r = !0;
		else if (e === null) {
			var o = t.stateNode, s = t.memoizedProps;
			o.props = s;
			var c = o.context, l = n.contextType;
			typeof l == "object" && l ? l = Qa(l) : (l = $i(n) ? Zi : Yi.current, l = Qi(t, l));
			var u = n.getDerivedStateFromProps, d = typeof u == "function" || typeof o.getSnapshotBeforeUpdate == "function";
			d || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (s !== r || c !== l) && Ds(t, o, r, l), ro = !1;
			var f = t.memoizedState;
			o.state = f, uo(t, r, o, i), c = t.memoizedState, s !== r || f !== c || Xi.current || ro ? (typeof u == "function" && (Cs(t, n, u, r), c = t.memoizedState), (s = ro || Ts(t, n, s, r, f, c, l)) ? (d || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = c), o.props = r, o.state = c, o.context = l, r = s) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
		} else {
			o = t.stateNode, ao(e, t), s = t.memoizedProps, l = t.type === t.elementType ? s : Ss(t.type, s), o.props = l, d = t.pendingProps, f = o.context, c = n.contextType, typeof c == "object" && c ? c = Qa(c) : (c = $i(n) ? Zi : Yi.current, c = Qi(t, c));
			var p = n.getDerivedStateFromProps;
			(u = typeof p == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (s !== d || f !== c) && Ds(t, o, r, c), ro = !1, f = t.memoizedState, o.state = f, uo(t, r, o, i);
			var m = t.memoizedState;
			s !== d || f !== m || Xi.current || ro ? (typeof p == "function" && (Cs(t, n, p, r), m = t.memoizedState), (l = ro || Ts(t, n, l, r, f, m, c) || !1) ? (u || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, m, c), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, m, c)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = m), o.props = r, o.state = m, o.context = c, r = l) : (typeof o.componentDidUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1);
		}
		return Js(e, t, n, r, a, i);
	}
	function Js(e, t, n, r, i, a) {
		Gs(e, t);
		var o = (t.flags & 128) != 0;
		if (!r && !o) return i && ia(t, n, !1), oc(e, t, a);
		r = t.stateNode, Rs.current = t;
		var s = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
		return t.flags |= 1, e !== null && o ? (t.child = Ha(t, e.child, null, a), t.child = Ha(t, null, s, a)) : Bs(e, t, s, a), t.memoizedState = r.state, i && ia(t, n, !0), t.child;
	}
	function Ys(e) {
		var t = e.stateNode;
		t.pendingContext ? ta(e, t.pendingContext, t.pendingContext !== t.context) : t.context && ta(e, t.context, !1), vo(e, t.containerInfo);
	}
	function Xs(e, t, n, r, i) {
		return Fa(), Ia(i), t.flags |= 256, Bs(e, t, n, r), t.child;
	}
	var Zs = {
		dehydrated: null,
		treeContext: null,
		retryLane: 0
	};
	function Qs(e) {
		return {
			baseLanes: e,
			cachePool: null,
			transitions: null
		};
	}
	function $s(e, t, n) {
		var r = t.pendingProps, i = So.current, a = !1, o = (t.flags & 128) != 0, s;
		if ((s = o) || (s = e !== null && e.memoizedState === null ? !1 : (i & 2) != 0), s ? (a = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), qi(So, i & 1), e === null) return ja(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (o = r.children, e = r.fallback, a ? (r = t.mode, a = t.child, o = {
			mode: "hidden",
			children: o
		}, !(r & 1) && a !== null ? (a.childLanes = 0, a.pendingProps = o) : a = $l(o, r, 0, null), e = Ql(e, r, n, null), a.return = t, e.return = t, a.sibling = e, t.child = a, t.child.memoizedState = Qs(n), t.memoizedState = Zs, e) : ec(t, o));
		if (i = e.memoizedState, i !== null && (s = i.dehydrated, s !== null)) return nc(e, t, o, r, s, i, n);
		if (a) {
			a = r.fallback, o = t.mode, i = e.child, s = i.sibling;
			var c = {
				mode: "hidden",
				children: r.children
			};
			return !(o & 1) && t.child !== i ? (r = t.child, r.childLanes = 0, r.pendingProps = c, t.deletions = null) : (r = Xl(i, c), r.subtreeFlags = i.subtreeFlags & 14680064), s === null ? (a = Ql(a, o, n, null), a.flags |= 2) : a = Xl(s, a), a.return = t, r.return = t, r.sibling = a, t.child = r, r = a, a = t.child, o = e.child.memoizedState, o = o === null ? Qs(n) : {
				baseLanes: o.baseLanes | n,
				cachePool: null,
				transitions: o.transitions
			}, a.memoizedState = o, a.childLanes = e.childLanes & ~n, t.memoizedState = Zs, r;
		}
		return a = e.child, e = a.sibling, r = Xl(a, {
			mode: "visible",
			children: r.children
		}), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
	}
	function ec(e, t) {
		return t = $l({
			mode: "visible",
			children: t
		}, e.mode, 0, null), t.return = e, e.child = t;
	}
	function tc(e, t, n, r) {
		return r !== null && Ia(r), Ha(t, e.child, null, n), e = ec(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
	}
	function nc(e, t, n, i, a, o, s) {
		if (n) return t.flags & 256 ? (t.flags &= -257, i = As(Error(r(422))), tc(e, t, s, i)) : t.memoizedState === null ? (o = i.fallback, a = t.mode, i = $l({
			mode: "visible",
			children: i.children
		}, a, 0, null), o = Ql(o, a, s, null), o.flags |= 2, i.return = t, o.return = t, i.sibling = o, t.child = i, t.mode & 1 && Ha(t, e.child, null, s), t.child.memoizedState = Qs(s), t.memoizedState = Zs, o) : (t.child = e.child, t.flags |= 128, null);
		if (!(t.mode & 1)) return tc(e, t, s, null);
		if (a.data === "$!") {
			if (i = a.nextSibling && a.nextSibling.dataset, i) var c = i.dgst;
			return i = c, o = Error(r(419)), i = As(o, i, void 0), tc(e, t, s, i);
		}
		if (c = (s & e.childLanes) !== 0, zs || c) {
			if (i = Gc, i !== null) {
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
				a = (a & (i.suspendedLanes | s)) === 0 ? a : 0, a !== 0 && a !== o.retryLane && (o.retryLane = a, no(e, a), Q(i, e, a, -1));
			}
			return kl(), i = As(Error(r(421))), tc(e, t, s, i);
		}
		return a.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Hl.bind(null, e), a._reactRetry = t, null) : (e = o.treeContext, Ta = ji(a.nextSibling), wa = t, Ea = !0, Da = null, e !== null && (ha[ga++] = va, ha[ga++] = ya, ha[ga++] = _a, va = e.id, ya = e.overflow, _a = t), t = ec(t, i.children), t.flags |= 4096, t);
	}
	function rc(e, t, n) {
		e.lanes |= t;
		var r = e.alternate;
		r !== null && (r.lanes |= t), Xa(e.return, t, n);
	}
	function G(e, t, n, r, i) {
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
	function ic(e, t, n) {
		var r = t.pendingProps, i = r.revealOrder, a = r.tail;
		if (Bs(e, t, r.children, n), r = So.current, r & 2) r = r & 1 | 2, t.flags |= 128;
		else {
			if (e !== null && e.flags & 128) a: for (e = t.child; e !== null;) {
				if (e.tag === 13) e.memoizedState !== null && rc(e, n, t);
				else if (e.tag === 19) rc(e, n, t);
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
		if (qi(So, r), !(t.mode & 1)) t.memoizedState = null;
		else switch (i) {
			case "forwards":
				for (n = t.child, i = null; n !== null;) e = n.alternate, e !== null && Co(e) === null && (i = n), n = n.sibling;
				n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), G(t, !1, i, n, a);
				break;
			case "backwards":
				for (n = null, i = t.child, t.child = null; i !== null;) {
					if (e = i.alternate, e !== null && Co(e) === null) {
						t.child = i;
						break;
					}
					e = i.sibling, i.sibling = n, n = i, i = e;
				}
				G(t, !0, n, null, a);
				break;
			case "together":
				G(t, !1, null, null, void 0);
				break;
			default: t.memoizedState = null;
		}
		return t.child;
	}
	function ac(e, t) {
		!(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
	}
	function oc(e, t, n) {
		if (e !== null && (t.dependencies = e.dependencies), Xc |= t.lanes, (n & t.childLanes) === 0) return null;
		if (e !== null && t.child !== e.child) throw Error(r(153));
		if (t.child !== null) {
			for (e = t.child, n = Xl(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = Xl(e, e.pendingProps), n.return = t;
			n.sibling = null;
		}
		return t.child;
	}
	function sc(e, t, n) {
		switch (t.tag) {
			case 3:
				Ys(t), Fa();
				break;
			case 5:
				bo(t);
				break;
			case 1:
				$i(t.type) && ra(t);
				break;
			case 4:
				vo(t, t.stateNode.containerInfo);
				break;
			case 10:
				var r = t.type._context, i = t.memoizedProps.value;
				qi(Wa, r._currentValue), r._currentValue = i;
				break;
			case 13:
				if (r = t.memoizedState, r !== null) return r.dehydrated === null ? (n & t.child.childLanes) === 0 ? (qi(So, So.current & 1), e = oc(e, t, n), e === null ? null : e.sibling) : $s(e, t, n) : (qi(So, So.current & 1), t.flags |= 128, null);
				qi(So, So.current & 1);
				break;
			case 19:
				if (r = (n & t.childLanes) !== 0, e.flags & 128) {
					if (r) return ic(e, t, n);
					t.flags |= 128;
				}
				if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), qi(So, So.current), r) break;
				return null;
			case 22:
			case 23: return t.lanes = 0, Ws(e, t, n);
		}
		return oc(e, t, n);
	}
	var K = function(e, t) {
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
	}, cc = function(e, t, n, r) {
		var i = e.memoizedProps;
		if (i !== r) {
			e = t.stateNode, _o(mo.current);
			var o = null;
			switch (n) {
				case "input":
					i = _e(e, i), r = _e(e, r), o = [];
					break;
				case "select":
					i = re({}, i, { value: void 0 }), r = re({}, r, { value: void 0 }), o = [];
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
				else u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, c = c ? c.__html : void 0, l != null && c !== l && (o ||= []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (o ||= []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (a.hasOwnProperty(u) ? (l != null && u === "onScroll" && si("scroll", e), o || c === l || (o = [])) : (o ||= []).push(u, l));
			}
			n && (o ||= []).push("style", n);
			var u = o;
			(t.updateQueue = u) && (t.flags |= 4);
		}
	}, lc = function(e, t, n, r) {
		n !== r && (t.flags |= 4);
	};
	function uc(e, t) {
		if (!Ea) switch (e.tailMode) {
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
	function dc(e) {
		var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
		if (t) for (var i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 14680064, r |= i.flags & 14680064, i.return = e, i = i.sibling;
		else for (i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
		return e.subtreeFlags |= r, e.childLanes = n, t;
	}
	function fc(e, t, n) {
		var i = t.pendingProps;
		switch (Ca(t), t.tag) {
			case 2:
			case 16:
			case 15:
			case 0:
			case 11:
			case 7:
			case 8:
			case 12:
			case 9:
			case 14: return dc(t), null;
			case 1: return $i(t.type) && ea(), dc(t), null;
			case 3: return i = t.stateNode, yo(), H(Xi), H(Yi), To(), i.pendingContext && (i.context = i.pendingContext, i.pendingContext = null), (e === null || e.child === null) && (Na(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Da !== null && (yl(Da), Da = null))), dc(t), null;
			case 5:
				xo(t);
				var o = _o(go.current);
				if (n = t.type, e !== null && t.stateNode != null) cc(e, t, n, i, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
				else {
					if (!i) {
						if (t.stateNode === null) throw Error(r(166));
						return dc(t), null;
					}
					if (e = _o(mo.current), Na(t)) {
						i = t.stateNode, n = t.type;
						var s = t.memoizedProps;
						switch (i[Pi] = t, i[Fi] = s, e = (t.mode & 1) != 0, n) {
							case "dialog":
								si("cancel", i), si("close", i);
								break;
							case "iframe":
							case "object":
							case "embed":
								si("load", i);
								break;
							case "video":
							case "audio":
								for (o = 0; o < ri.length; o++) si(ri[o], i);
								break;
							case "source":
								si("error", i);
								break;
							case "img":
							case "image":
							case "link":
								si("error", i), si("load", i);
								break;
							case "details":
								si("toggle", i);
								break;
							case "input":
								ve(i, s), si("invalid", i);
								break;
							case "select":
								i._wrapperState = { wasMultiple: !!s.multiple }, si("invalid", i);
								break;
							case "textarea": Ee(i, s), si("invalid", i);
						}
						for (var c in Re(n, s), o = null, s) if (s.hasOwnProperty(c)) {
							var l = s[c];
							c === "children" ? typeof l == "string" ? i.textContent !== l && (!0 !== s.suppressHydrationWarning && bi(i.textContent, l, e), o = ["children", l]) : typeof l == "number" && i.textContent !== "" + l && (!0 !== s.suppressHydrationWarning && bi(i.textContent, l, e), o = ["children", "" + l]) : a.hasOwnProperty(c) && l != null && c === "onScroll" && si("scroll", i);
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
						c = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = ke(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = c.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof i.is == "string" ? e = c.createElement(n, { is: i.is }) : (e = c.createElement(n), n === "select" && (c = e, i.multiple ? c.multiple = !0 : i.size && (c.size = i.size))) : e = c.createElementNS(e, n), e[Pi] = t, e[Fi] = i, K(e, t, !1, !1), t.stateNode = e;
						a: {
							switch (c = ze(n, i), n) {
								case "dialog":
									si("cancel", e), si("close", e), o = i;
									break;
								case "iframe":
								case "object":
								case "embed":
									si("load", e), o = i;
									break;
								case "video":
								case "audio":
									for (o = 0; o < ri.length; o++) si(ri[o], e);
									o = i;
									break;
								case "source":
									si("error", e), o = i;
									break;
								case "img":
								case "image":
								case "link":
									si("error", e), si("load", e), o = i;
									break;
								case "details":
									si("toggle", e), o = i;
									break;
								case "input":
									ve(e, i), o = _e(e, i), si("invalid", e);
									break;
								case "option":
									o = i;
									break;
								case "select":
									e._wrapperState = { wasMultiple: !!i.multiple }, o = re({}, i, { value: void 0 }), si("invalid", e);
									break;
								case "textarea":
									Ee(e, i), o = Te(e, i), si("invalid", e);
									break;
								default: o = i;
							}
							for (s in Re(n, o), l = o, l) if (l.hasOwnProperty(s)) {
								var u = l[s];
								s === "style" ? Ie(e, u) : s === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, u != null && Me(e, u)) : s === "children" ? typeof u == "string" ? (n !== "textarea" || u !== "") && I(e, u) : typeof u == "number" && I(e, "" + u) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (a.hasOwnProperty(s) ? u != null && s === "onScroll" && si("scroll", e) : u != null && S(e, s, u, c));
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
				return dc(t), null;
			case 6:
				if (e && t.stateNode != null) lc(e, t, e.memoizedProps, i);
				else {
					if (typeof i != "string" && t.stateNode === null) throw Error(r(166));
					if (n = _o(go.current), _o(mo.current), Na(t)) {
						if (i = t.stateNode, n = t.memoizedProps, i[Pi] = t, (s = i.nodeValue !== n) && (e = wa, e !== null)) switch (e.tag) {
							case 3:
								bi(i.nodeValue, n, (e.mode & 1) != 0);
								break;
							case 5: !0 !== e.memoizedProps.suppressHydrationWarning && bi(i.nodeValue, n, (e.mode & 1) != 0);
						}
						s && (t.flags |= 4);
					} else i = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(i), i[Pi] = t, t.stateNode = i;
				}
				return dc(t), null;
			case 13:
				if (H(So), i = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
					if (Ea && Ta !== null && t.mode & 1 && !(t.flags & 128)) Pa(), Fa(), t.flags |= 98560, s = !1;
					else if (s = Na(t), i !== null && i.dehydrated !== null) {
						if (e === null) {
							if (!s) throw Error(r(318));
							if (s = t.memoizedState, s = s === null ? null : s.dehydrated, !s) throw Error(r(317));
							s[Pi] = t;
						} else Fa(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
						dc(t), s = !1;
					} else Da !== null && (yl(Da), Da = null), s = !0;
					if (!s) return t.flags & 65536 ? t : null;
				}
				return t.flags & 128 ? (t.lanes = n, t) : (i = i !== null, i !== (e !== null && e.memoizedState !== null) && i && (t.child.flags |= 8192, t.mode & 1 && (e === null || So.current & 1 ? Z === 0 && (Z = 3) : kl())), t.updateQueue !== null && (t.flags |= 4), dc(t), null);
			case 4: return yo(), e === null && ui(t.stateNode.containerInfo), dc(t), null;
			case 10: return Ya(t.type._context), dc(t), null;
			case 17: return $i(t.type) && ea(), dc(t), null;
			case 19:
				if (H(So), s = t.memoizedState, s === null) return dc(t), null;
				if (i = (t.flags & 128) != 0, c = s.rendering, c === null) if (i) uc(s, !1);
				else {
					if (Z !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null;) {
						if (c = Co(e), c !== null) {
							for (t.flags |= 128, uc(s, !1), i = c.updateQueue, i !== null && (t.updateQueue = i, t.flags |= 4), t.subtreeFlags = 0, i = n, n = t.child; n !== null;) s = n, e = i, s.flags &= 14680066, c = s.alternate, c === null ? (s.childLanes = 0, s.lanes = e, s.child = null, s.subtreeFlags = 0, s.memoizedProps = null, s.memoizedState = null, s.updateQueue = null, s.dependencies = null, s.stateNode = null) : (s.childLanes = c.childLanes, s.lanes = c.lanes, s.child = c.child, s.subtreeFlags = 0, s.deletions = null, s.memoizedProps = c.memoizedProps, s.memoizedState = c.memoizedState, s.updateQueue = c.updateQueue, s.type = c.type, e = c.dependencies, s.dependencies = e === null ? null : {
								lanes: e.lanes,
								firstContext: e.firstContext
							}), n = n.sibling;
							return qi(So, So.current & 1 | 2), t.child;
						}
						e = e.sibling;
					}
					s.tail !== null && yt() > nl && (t.flags |= 128, i = !0, uc(s, !1), t.lanes = 4194304);
				}
				else {
					if (!i) if (e = Co(c), e !== null) {
						if (t.flags |= 128, i = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), uc(s, !0), s.tail === null && s.tailMode === "hidden" && !c.alternate && !Ea) return dc(t), null;
					} else 2 * yt() - s.renderingStartTime > nl && n !== 1073741824 && (t.flags |= 128, i = !0, uc(s, !1), t.lanes = 4194304);
					s.isBackwards ? (c.sibling = t.child, t.child = c) : (n = s.last, n === null ? t.child = c : n.sibling = c, s.last = c);
				}
				return s.tail === null ? (dc(t), null) : (t = s.tail, s.rendering = t, s.tail = t.sibling, s.renderingStartTime = yt(), t.sibling = null, n = So.current, qi(So, i ? n & 1 | 2 : n & 1), t);
			case 22:
			case 23: return Tl(), i = t.memoizedState !== null, e !== null && e.memoizedState !== null !== i && (t.flags |= 8192), i && t.mode & 1 ? qc & 1073741824 && (dc(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : dc(t), null;
			case 24: return null;
			case 25: return null;
		}
		throw Error(r(156, t.tag));
	}
	function pc(e, t) {
		switch (Ca(t), t.tag) {
			case 1: return $i(t.type) && ea(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 3: return yo(), H(Xi), H(Yi), To(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
			case 5: return xo(t), null;
			case 13:
				if (H(So), e = t.memoizedState, e !== null && e.dehydrated !== null) {
					if (t.alternate === null) throw Error(r(340));
					Fa();
				}
				return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 19: return H(So), null;
			case 4: return yo(), null;
			case 10: return Ya(t.type._context), null;
			case 22:
			case 23: return Tl(), null;
			case 24: return null;
			default: return null;
		}
	}
	var mc = !1, hc = !1, gc = typeof WeakSet == "function" ? WeakSet : Set, q = null;
	function J(e, t) {
		var n = e.ref;
		if (n !== null) if (typeof n == "function") try {
			n(null);
		} catch (n) {
			zl(e, t, n);
		}
		else n.current = null;
	}
	function _c(e, t, n) {
		try {
			n();
		} catch (n) {
			zl(e, t, n);
		}
	}
	var vc = !1;
	function yc(e, t) {
		if (Si = gn, e = Fr(), Ir(e)) {
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
		}, gn = !1, q = t; q !== null;) if (t = q, e = t.child, t.subtreeFlags & 1028 && e !== null) e.return = t, q = e;
		else for (; q !== null;) {
			t = q;
			try {
				var h = t.alternate;
				if (t.flags & 1024) switch (t.tag) {
					case 0:
					case 11:
					case 15: break;
					case 1:
						if (h !== null) {
							var g = h.memoizedProps, _ = h.memoizedState, v = t.stateNode;
							v.__reactInternalSnapshotBeforeUpdate = v.getSnapshotBeforeUpdate(t.elementType === t.type ? g : Ss(t.type, g), _);
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
				zl(t, t.return, e);
			}
			if (e = t.sibling, e !== null) {
				e.return = t.return, q = e;
				break;
			}
			q = t.return;
		}
		return h = vc, vc = !1, h;
	}
	function bc(e, t, n) {
		var r = t.updateQueue;
		if (r = r === null ? null : r.lastEffect, r !== null) {
			var i = r = r.next;
			do {
				if ((i.tag & e) === e) {
					var a = i.destroy;
					i.destroy = void 0, a !== void 0 && _c(t, n, a);
				}
				i = i.next;
			} while (i !== r);
		}
	}
	function xc(e, t) {
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
	function Sc(e) {
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
	function Cc(e) {
		var t = e.alternate;
		t !== null && (e.alternate = null, Cc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Pi], delete t[Fi], delete t[Li], delete t[Ri], delete t[zi])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
	}
	function wc(e) {
		return e.tag === 5 || e.tag === 3 || e.tag === 4;
	}
	function Tc(e) {
		a: for (;;) {
			for (; e.sibling === null;) {
				if (e.return === null || wc(e.return)) return null;
				e = e.return;
			}
			for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
				if (e.flags & 2 || e.child === null || e.tag === 4) continue a;
				e.child.return = e, e = e.child;
			}
			if (!(e.flags & 2)) return e.stateNode;
		}
	}
	function Ec(e, t, n) {
		var r = e.tag;
		if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = xi));
		else if (r !== 4 && (e = e.child, e !== null)) for (Ec(e, t, n), e = e.sibling; e !== null;) Ec(e, t, n), e = e.sibling;
	}
	function Dc(e, t, n) {
		var r = e.tag;
		if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
		else if (r !== 4 && (e = e.child, e !== null)) for (Dc(e, t, n), e = e.sibling; e !== null;) Dc(e, t, n), e = e.sibling;
	}
	var Oc = null, kc = !1;
	function Ac(e, t, n) {
		for (n = n.child; n !== null;) jc(e, t, n), n = n.sibling;
	}
	function jc(e, t, n) {
		if (Dt && typeof Dt.onCommitFiberUnmount == "function") try {
			Dt.onCommitFiberUnmount(Et, n);
		} catch {}
		switch (n.tag) {
			case 5: hc || J(n, t);
			case 6:
				var r = Oc, i = kc;
				Oc = null, Ac(e, t, n), Oc = r, kc = i, Oc !== null && (kc ? (e = Oc, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Oc.removeChild(n.stateNode));
				break;
			case 18:
				Oc !== null && (kc ? (e = Oc, n = n.stateNode, e.nodeType === 8 ? Ai(e.parentNode, n) : e.nodeType === 1 && Ai(e, n), mn(e)) : Ai(Oc, n.stateNode));
				break;
			case 4:
				r = Oc, i = kc, Oc = n.stateNode.containerInfo, kc = !0, Ac(e, t, n), Oc = r, kc = i;
				break;
			case 0:
			case 11:
			case 14:
			case 15:
				if (!hc && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
					i = r = r.next;
					do {
						var a = i, o = a.destroy;
						a = a.tag, o !== void 0 && (a & 2 || a & 4) && _c(n, t, o), i = i.next;
					} while (i !== r);
				}
				Ac(e, t, n);
				break;
			case 1:
				if (!hc && (J(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
					r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
				} catch (e) {
					zl(n, t, e);
				}
				Ac(e, t, n);
				break;
			case 21:
				Ac(e, t, n);
				break;
			case 22:
				n.mode & 1 ? (hc = (r = hc) || n.memoizedState !== null, Ac(e, t, n), hc = r) : Ac(e, t, n);
				break;
			default: Ac(e, t, n);
		}
	}
	function Mc(e) {
		var t = e.updateQueue;
		if (t !== null) {
			e.updateQueue = null;
			var n = e.stateNode;
			n === null && (n = e.stateNode = new gc()), t.forEach(function(t) {
				var r = Ul.bind(null, e, t);
				n.has(t) || (n.add(t), t.then(r, r));
			});
		}
	}
	function Nc(e, t) {
		var n = t.deletions;
		if (n !== null) for (var i = 0; i < n.length; i++) {
			var a = n[i];
			try {
				var o = e, s = t, c = s;
				a: for (; c !== null;) {
					switch (c.tag) {
						case 5:
							Oc = c.stateNode, kc = !1;
							break a;
						case 3:
							Oc = c.stateNode.containerInfo, kc = !0;
							break a;
						case 4:
							Oc = c.stateNode.containerInfo, kc = !0;
							break a;
					}
					c = c.return;
				}
				if (Oc === null) throw Error(r(160));
				jc(o, s, a), Oc = null, kc = !1;
				var l = a.alternate;
				l !== null && (l.return = null), a.return = null;
			} catch (e) {
				zl(a, t, e);
			}
		}
		if (t.subtreeFlags & 12854) for (t = t.child; t !== null;) Pc(t, e), t = t.sibling;
	}
	function Pc(e, t) {
		var n = e.alternate, i = e.flags;
		switch (e.tag) {
			case 0:
			case 11:
			case 14:
			case 15:
				if (Nc(t, e), Fc(e), i & 4) {
					try {
						bc(3, e, e.return), xc(3, e);
					} catch (t) {
						zl(e, e.return, t);
					}
					try {
						bc(5, e, e.return);
					} catch (t) {
						zl(e, e.return, t);
					}
				}
				break;
			case 1:
				Nc(t, e), Fc(e), i & 512 && n !== null && J(n, n.return);
				break;
			case 5:
				if (Nc(t, e), Fc(e), i & 512 && n !== null && J(n, n.return), e.flags & 32) {
					var a = e.stateNode;
					try {
						I(a, "");
					} catch (t) {
						zl(e, e.return, t);
					}
				}
				if (i & 4 && (a = e.stateNode, a != null)) {
					var o = e.memoizedProps, s = n === null ? o : n.memoizedProps, c = e.type, l = e.updateQueue;
					if (e.updateQueue = null, l !== null) try {
						c === "input" && o.type === "radio" && o.name != null && ye(a, o), ze(c, s);
						var u = ze(c, o);
						for (s = 0; s < l.length; s += 2) {
							var d = l[s], f = l[s + 1];
							d === "style" ? Ie(a, f) : d === "dangerouslySetInnerHTML" ? Me(a, f) : d === "children" ? I(a, f) : S(a, d, f, u);
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
						a[Fi] = o;
					} catch (t) {
						zl(e, e.return, t);
					}
				}
				break;
			case 6:
				if (Nc(t, e), Fc(e), i & 4) {
					if (e.stateNode === null) throw Error(r(162));
					a = e.stateNode, o = e.memoizedProps;
					try {
						a.nodeValue = o;
					} catch (t) {
						zl(e, e.return, t);
					}
				}
				break;
			case 3:
				if (Nc(t, e), Fc(e), i & 4 && n !== null && n.memoizedState.isDehydrated) try {
					mn(t.containerInfo);
				} catch (t) {
					zl(e, e.return, t);
				}
				break;
			case 4:
				Nc(t, e), Fc(e);
				break;
			case 13:
				Nc(t, e), Fc(e), a = e.child, a.flags & 8192 && (o = a.memoizedState !== null, a.stateNode.isHidden = o, !o || a.alternate !== null && a.alternate.memoizedState !== null || (tl = yt())), i & 4 && Mc(e);
				break;
			case 22:
				if (d = n !== null && n.memoizedState !== null, e.mode & 1 ? (hc = (u = hc) || d, Nc(t, e), hc = u) : Nc(t, e), Fc(e), i & 8192) {
					if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !d && e.mode & 1) for (q = e, d = e.child; d !== null;) {
						for (f = q = d; q !== null;) {
							switch (p = q, m = p.child, p.tag) {
								case 0:
								case 11:
								case 14:
								case 15:
									bc(4, p, p.return);
									break;
								case 1:
									J(p, p.return);
									var h = p.stateNode;
									if (typeof h.componentWillUnmount == "function") {
										i = p, n = p.return;
										try {
											t = i, h.props = t.memoizedProps, h.state = t.memoizedState, h.componentWillUnmount();
										} catch (e) {
											zl(i, n, e);
										}
									}
									break;
								case 5:
									J(p, p.return);
									break;
								case 22: if (p.memoizedState !== null) {
									zc(f);
									continue;
								}
							}
							m === null ? zc(f) : (m.return = p, q = m);
						}
						d = d.sibling;
					}
					a: for (d = null, f = e;;) {
						if (f.tag === 5) {
							if (d === null) {
								d = f;
								try {
									a = f.stateNode, u ? (o = a.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (c = f.stateNode, l = f.memoizedProps.style, s = l != null && l.hasOwnProperty("display") ? l.display : null, c.style.display = Fe("display", s));
								} catch (t) {
									zl(e, e.return, t);
								}
							}
						} else if (f.tag === 6) {
							if (d === null) try {
								f.stateNode.nodeValue = u ? "" : f.memoizedProps;
							} catch (t) {
								zl(e, e.return, t);
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
				Nc(t, e), Fc(e), i & 4 && Mc(e);
				break;
			case 21: break;
			default: Nc(t, e), Fc(e);
		}
	}
	function Fc(e) {
		var t = e.flags;
		if (t & 2) {
			try {
				a: {
					for (var n = e.return; n !== null;) {
						if (wc(n)) {
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
						i.flags & 32 && (I(a, ""), i.flags &= -33), Dc(e, Tc(e), a);
						break;
					case 3:
					case 4:
						var o = i.stateNode.containerInfo;
						Ec(e, Tc(e), o);
						break;
					default: throw Error(r(161));
				}
			} catch (t) {
				zl(e, e.return, t);
			}
			e.flags &= -3;
		}
		t & 4096 && (e.flags &= -4097);
	}
	function Ic(e, t, n) {
		q = e, Lc(e, t, n);
	}
	function Lc(e, t, n) {
		for (var r = (e.mode & 1) != 0; q !== null;) {
			var i = q, a = i.child;
			if (i.tag === 22 && r) {
				var o = i.memoizedState !== null || mc;
				if (!o) {
					var s = i.alternate, c = s !== null && s.memoizedState !== null || hc;
					s = mc;
					var l = hc;
					if (mc = o, (hc = c) && !l) for (q = i; q !== null;) o = q, c = o.child, o.tag === 22 && o.memoizedState !== null || c === null ? Bc(i) : (c.return = o, q = c);
					for (; a !== null;) q = a, Lc(a, t, n), a = a.sibling;
					q = i, mc = s, hc = l;
				}
				Rc(e, t, n);
			} else i.subtreeFlags & 8772 && a !== null ? (a.return = i, q = a) : Rc(e, t, n);
		}
	}
	function Rc(e) {
		for (; q !== null;) {
			var t = q;
			if (t.flags & 8772) {
				var n = t.alternate;
				try {
					if (t.flags & 8772) switch (t.tag) {
						case 0:
						case 11:
						case 15:
							hc || xc(5, t);
							break;
						case 1:
							var i = t.stateNode;
							if (t.flags & 4 && !hc) if (n === null) i.componentDidMount();
							else {
								var a = t.elementType === t.type ? n.memoizedProps : Ss(t.type, n.memoizedProps);
								i.componentDidUpdate(a, n.memoizedState, i.__reactInternalSnapshotBeforeUpdate);
							}
							var o = t.updateQueue;
							o !== null && fo(t, o, i);
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
								fo(t, s, n);
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
										f !== null && mn(f);
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
					hc || t.flags & 512 && Sc(t);
				} catch (e) {
					zl(t, t.return, e);
				}
			}
			if (t === e) {
				q = null;
				break;
			}
			if (n = t.sibling, n !== null) {
				n.return = t.return, q = n;
				break;
			}
			q = t.return;
		}
	}
	function zc(e) {
		for (; q !== null;) {
			var t = q;
			if (t === e) {
				q = null;
				break;
			}
			var n = t.sibling;
			if (n !== null) {
				n.return = t.return, q = n;
				break;
			}
			q = t.return;
		}
	}
	function Bc(e) {
		for (; q !== null;) {
			var t = q;
			try {
				switch (t.tag) {
					case 0:
					case 11:
					case 15:
						var n = t.return;
						try {
							xc(4, t);
						} catch (e) {
							zl(t, n, e);
						}
						break;
					case 1:
						var r = t.stateNode;
						if (typeof r.componentDidMount == "function") {
							var i = t.return;
							try {
								r.componentDidMount();
							} catch (e) {
								zl(t, i, e);
							}
						}
						var a = t.return;
						try {
							Sc(t);
						} catch (e) {
							zl(t, a, e);
						}
						break;
					case 5:
						var o = t.return;
						try {
							Sc(t);
						} catch (e) {
							zl(t, o, e);
						}
				}
			} catch (e) {
				zl(t, t.return, e);
			}
			if (t === e) {
				q = null;
				break;
			}
			var s = t.sibling;
			if (s !== null) {
				s.return = t.return, q = s;
				break;
			}
			q = t.return;
		}
	}
	var Vc = Math.ceil, Hc = C.ReactCurrentDispatcher, Uc = C.ReactCurrentOwner, Wc = C.ReactCurrentBatchConfig, Y = 0, Gc = null, X = null, Kc = 0, qc = 0, Jc = Ki(0), Z = 0, Yc = null, Xc = 0, Zc = 0, Qc = 0, $c = null, el = null, tl = 0, nl = Infinity, rl = null, il = !1, al = null, ol = null, sl = !1, cl = null, ll = 0, ul = 0, dl = null, fl = -1, pl = 0;
	function ml() {
		return Y & 6 ? yt() : fl === -1 ? fl = yt() : fl;
	}
	function hl(e) {
		return e.mode & 1 ? Y & 2 && Kc !== 0 ? Kc & -Kc : La.transition === null ? (e = L, e === 0 ? (e = window.event, e = e === void 0 ? 16 : Sn(e.type), e) : e) : (pl === 0 && (pl = Bt()), pl) : 1;
	}
	function Q(e, t, n, i) {
		if (50 < ul) throw ul = 0, dl = null, Error(r(185));
		Ht(e, n, i), (!(Y & 2) || e !== Gc) && (e === Gc && (!(Y & 2) && (Zc |= n), Z === 4 && xl(e, Kc)), gl(e, i), n === 1 && Y === 0 && !(t.mode & 1) && (nl = yt() + 500, oa && ua()));
	}
	function gl(e, t) {
		var n = e.callbackNode;
		Rt(e, t);
		var r = It(e, e === Gc ? Kc : 0);
		if (r === 0) n !== null && gt(n), e.callbackNode = null, e.callbackPriority = 0;
		else if (t = r & -r, e.callbackPriority !== t) {
			if (n != null && gt(n), t === 1) e.tag === 0 ? la(Sl.bind(null, e)) : ca(Sl.bind(null, e)), Oi(function() {
				!(Y & 6) && ua();
			}), n = null;
			else {
				switch (Gt(r)) {
					case 1:
						n = xt;
						break;
					case 4:
						n = St;
						break;
					case 16:
						n = Ct;
						break;
					case 536870912:
						n = Tt;
						break;
					default: n = Ct;
				}
				n = Gl(n, _l.bind(null, e));
			}
			e.callbackPriority = t, e.callbackNode = n;
		}
	}
	function _l(e, t) {
		if (fl = -1, pl = 0, Y & 6) throw Error(r(327));
		var n = e.callbackNode;
		if (Ll() && e.callbackNode !== n) return null;
		var i = It(e, e === Gc ? Kc : 0);
		if (i === 0) return null;
		if (i & 30 || (i & e.expiredLanes) !== 0 || t) t = Al(e, i);
		else {
			t = i;
			var a = Y;
			Y |= 2;
			var o = Ol();
			(Gc !== e || Kc !== t) && (rl = null, nl = yt() + 500, El(e, t));
			do
				try {
					Ml();
					break;
				} catch (t) {
					Dl(e, t);
				}
			while (1);
			Ja(), Hc.current = o, Y = a, X === null ? (Gc = null, Kc = 0, t = Z) : t = 0;
		}
		if (t !== 0) {
			if (t === 2 && (a = zt(e), a !== 0 && (i = a, t = vl(e, a))), t === 1) throw n = Yc, El(e, 0), xl(e, i), gl(e, yt()), n;
			if (t === 6) xl(e, i);
			else {
				if (a = e.current.alternate, !(i & 30) && !bl(a) && (t = Al(e, i), t === 2 && (o = zt(e), o !== 0 && (i = o, t = vl(e, o))), t === 1)) throw n = Yc, El(e, 0), xl(e, i), gl(e, yt()), n;
				switch (e.finishedWork = a, e.finishedLanes = i, t) {
					case 0:
					case 1: throw Error(r(345));
					case 2:
						Fl(e, el, rl);
						break;
					case 3:
						if (xl(e, i), (i & 130023424) === i && (t = tl + 500 - yt(), 10 < t)) {
							if (It(e, 0) !== 0) break;
							if (a = e.suspendedLanes, (a & i) !== i) {
								ml(), e.pingedLanes |= e.suspendedLanes & a;
								break;
							}
							e.timeoutHandle = Ti(Fl.bind(null, e, el, rl), t);
							break;
						}
						Fl(e, el, rl);
						break;
					case 4:
						if (xl(e, i), (i & 4194240) === i) break;
						for (t = e.eventTimes, a = -1; 0 < i;) {
							var s = 31 - kt(i);
							o = 1 << s, s = t[s], s > a && (a = s), i &= ~o;
						}
						if (i = a, i = yt() - i, i = (120 > i ? 120 : 480 > i ? 480 : 1080 > i ? 1080 : 1920 > i ? 1920 : 3e3 > i ? 3e3 : 4320 > i ? 4320 : 1960 * Vc(i / 1960)) - i, 10 < i) {
							e.timeoutHandle = Ti(Fl.bind(null, e, el, rl), i);
							break;
						}
						Fl(e, el, rl);
						break;
					case 5:
						Fl(e, el, rl);
						break;
					default: throw Error(r(329));
				}
			}
		}
		return gl(e, yt()), e.callbackNode === n ? _l.bind(null, e) : null;
	}
	function vl(e, t) {
		var n = $c;
		return e.current.memoizedState.isDehydrated && (El(e, t).flags |= 256), e = Al(e, t), e !== 2 && (t = el, el = n, t !== null && yl(t)), e;
	}
	function yl(e) {
		el === null ? el = e : el.push.apply(el, e);
	}
	function bl(e) {
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
	function xl(e, t) {
		for (t &= ~Qc, t &= ~Zc, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
			var n = 31 - kt(t), r = 1 << n;
			e[n] = -1, t &= ~r;
		}
	}
	function Sl(e) {
		if (Y & 6) throw Error(r(327));
		Ll();
		var t = It(e, 0);
		if (!(t & 1)) return gl(e, yt()), null;
		var n = Al(e, t);
		if (e.tag !== 0 && n === 2) {
			var i = zt(e);
			i !== 0 && (t = i, n = vl(e, i));
		}
		if (n === 1) throw n = Yc, El(e, 0), xl(e, t), gl(e, yt()), n;
		if (n === 6) throw Error(r(345));
		return e.finishedWork = e.current.alternate, e.finishedLanes = t, Fl(e, el, rl), gl(e, yt()), null;
	}
	function Cl(e, t) {
		var n = Y;
		Y |= 1;
		try {
			return e(t);
		} finally {
			Y = n, Y === 0 && (nl = yt() + 500, oa && ua());
		}
	}
	function wl(e) {
		cl !== null && cl.tag === 0 && !(Y & 6) && Ll();
		var t = Y;
		Y |= 1;
		var n = Wc.transition, r = L;
		try {
			if (Wc.transition = null, L = 1, e) return e();
		} finally {
			L = r, Wc.transition = n, Y = t, !(Y & 6) && ua();
		}
	}
	function Tl() {
		qc = Jc.current, H(Jc);
	}
	function El(e, t) {
		e.finishedWork = null, e.finishedLanes = 0;
		var n = e.timeoutHandle;
		if (n !== -1 && (e.timeoutHandle = -1, Ei(n)), X !== null) for (n = X.return; n !== null;) {
			var r = n;
			switch (Ca(r), r.tag) {
				case 1:
					r = r.type.childContextTypes, r != null && ea();
					break;
				case 3:
					yo(), H(Xi), H(Yi), To();
					break;
				case 5:
					xo(r);
					break;
				case 4:
					yo();
					break;
				case 13:
					H(So);
					break;
				case 19:
					H(So);
					break;
				case 10:
					Ya(r.type._context);
					break;
				case 22:
				case 23: Tl();
			}
			n = n.return;
		}
		if (Gc = e, X = e = Xl(e.current, null), Kc = qc = t, Z = 0, Yc = null, Qc = Zc = Xc = 0, el = $c = null, $a !== null) {
			for (t = 0; t < $a.length; t++) if (n = $a[t], r = n.interleaved, r !== null) {
				n.interleaved = null;
				var i = r.next, a = n.pending;
				if (a !== null) {
					var o = a.next;
					a.next = i, r.next = o;
				}
				n.pending = r;
			}
			$a = null;
		}
		return e;
	}
	function Dl(e, t) {
		do {
			var n = X;
			try {
				if (Ja(), Eo.current = vs, Ao) {
					for (var i = Oo.memoizedState; i !== null;) {
						var a = i.queue;
						a !== null && (a.pending = null), i = i.next;
					}
					Ao = !1;
				}
				if (Do = 0, W = ko = Oo = null, jo = !1, Mo = 0, Uc.current = null, n === null || n.return === null) {
					Z = 1, Yc = t, X = null;
					break;
				}
				a: {
					var o = e, s = n.return, c = n, l = t;
					if (t = Kc, c.flags |= 32768, typeof l == "object" && l && typeof l.then == "function") {
						var u = l, d = c, f = d.tag;
						if (!(d.mode & 1) && (f === 0 || f === 11 || f === 15)) {
							var p = d.alternate;
							p ? (d.updateQueue = p.updateQueue, d.memoizedState = p.memoizedState, d.lanes = p.lanes) : (d.updateQueue = null, d.memoizedState = null);
						}
						var m = Is(s);
						if (m !== null) {
							m.flags &= -257, Ls(m, s, c, o, t), m.mode & 1 && Fs(o, u, t), t = m, l = u;
							var h = t.updateQueue;
							if (h === null) {
								var g = /* @__PURE__ */ new Set();
								g.add(l), t.updateQueue = g;
							} else h.add(l);
							break a;
						} else {
							if (!(t & 1)) {
								Fs(o, u, t), kl();
								break a;
							}
							l = Error(r(426));
						}
					} else if (Ea && c.mode & 1) {
						var _ = Is(s);
						if (_ !== null) {
							!(_.flags & 65536) && (_.flags |= 256), Ls(_, s, c, o, t), Ia(ks(l, c));
							break a;
						}
					}
					o = l = ks(l, c), Z !== 4 && (Z = 2), $c === null ? $c = [o] : $c.push(o), o = s;
					do {
						switch (o.tag) {
							case 3:
								o.flags |= 65536, t &= -t, o.lanes |= t;
								var v = Ns(o, l, t);
								lo(o, v);
								break a;
							case 1:
								c = l;
								var y = o.type, b = o.stateNode;
								if (!(o.flags & 128) && (typeof y.getDerivedStateFromError == "function" || b !== null && typeof b.componentDidCatch == "function" && (ol === null || !ol.has(b)))) {
									o.flags |= 65536, t &= -t, o.lanes |= t;
									var x = Ps(o, c, t);
									lo(o, x);
									break a;
								}
						}
						o = o.return;
					} while (o !== null);
				}
				Pl(n);
			} catch (e) {
				t = e, X === n && n !== null && (X = n = n.return);
				continue;
			}
			break;
		} while (1);
	}
	function Ol() {
		var e = Hc.current;
		return Hc.current = vs, e === null ? vs : e;
	}
	function kl() {
		(Z === 0 || Z === 3 || Z === 2) && (Z = 4), Gc === null || !(Xc & 268435455) && !(Zc & 268435455) || xl(Gc, Kc);
	}
	function Al(e, t) {
		var n = Y;
		Y |= 2;
		var i = Ol();
		(Gc !== e || Kc !== t) && (rl = null, El(e, t));
		do
			try {
				jl();
				break;
			} catch (t) {
				Dl(e, t);
			}
		while (1);
		if (Ja(), Y = n, Hc.current = i, X !== null) throw Error(r(261));
		return Gc = null, Kc = 0, Z;
	}
	function jl() {
		for (; X !== null;) Nl(X);
	}
	function Ml() {
		for (; X !== null && !_t();) Nl(X);
	}
	function Nl(e) {
		var t = Wl(e.alternate, e, qc);
		e.memoizedProps = e.pendingProps, t === null ? Pl(e) : X = t, Uc.current = null;
	}
	function Pl(e) {
		var t = e;
		do {
			var n = t.alternate;
			if (e = t.return, t.flags & 32768) {
				if (n = pc(n, t), n !== null) {
					n.flags &= 32767, X = n;
					return;
				}
				if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
				else {
					Z = 6, X = null;
					return;
				}
			} else if (n = fc(n, t, qc), n !== null) {
				X = n;
				return;
			}
			if (t = t.sibling, t !== null) {
				X = t;
				return;
			}
			X = t = e;
		} while (t !== null);
		Z === 0 && (Z = 5);
	}
	function Fl(e, t, n) {
		var r = L, i = Wc.transition;
		try {
			Wc.transition = null, L = 1, Il(e, t, n, r);
		} finally {
			Wc.transition = i, L = r;
		}
		return null;
	}
	function Il(e, t, n, i) {
		do
			Ll();
		while (cl !== null);
		if (Y & 6) throw Error(r(327));
		n = e.finishedWork;
		var a = e.finishedLanes;
		if (n === null) return null;
		if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(r(177));
		e.callbackNode = null, e.callbackPriority = 0;
		var o = n.lanes | n.childLanes;
		if (Ut(e, o), e === Gc && (X = Gc = null, Kc = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || sl || (sl = !0, Gl(Ct, function() {
			return Ll(), null;
		})), o = (n.flags & 15990) != 0, n.subtreeFlags & 15990 || o) {
			o = Wc.transition, Wc.transition = null;
			var s = L;
			L = 1;
			var c = Y;
			Y |= 4, Uc.current = null, yc(e, n), Pc(n, e), Lr(Ci), gn = !!Si, Ci = Si = null, e.current = n, Ic(n, e, a), vt(), Y = c, L = s, Wc.transition = o;
		} else e.current = n;
		if (sl && (sl = !1, cl = e, ll = a), o = e.pendingLanes, o === 0 && (ol = null), Ot(n.stateNode, i), gl(e, yt()), t !== null) for (i = e.onRecoverableError, n = 0; n < t.length; n++) a = t[n], i(a.value, {
			componentStack: a.stack,
			digest: a.digest
		});
		if (il) throw il = !1, e = al, al = null, e;
		return ll & 1 && e.tag !== 0 && Ll(), o = e.pendingLanes, o & 1 ? e === dl ? ul++ : (ul = 0, dl = e) : ul = 0, ua(), null;
	}
	function Ll() {
		if (cl !== null) {
			var e = Gt(ll), t = Wc.transition, n = L;
			try {
				if (Wc.transition = null, L = 16 > e ? 16 : e, cl === null) var i = !1;
				else {
					if (e = cl, cl = null, ll = 0, Y & 6) throw Error(r(331));
					var a = Y;
					for (Y |= 4, q = e.current; q !== null;) {
						var o = q, s = o.child;
						if (q.flags & 16) {
							var c = o.deletions;
							if (c !== null) {
								for (var l = 0; l < c.length; l++) {
									var u = c[l];
									for (q = u; q !== null;) {
										var d = q;
										switch (d.tag) {
											case 0:
											case 11:
											case 15: bc(8, d, o);
										}
										var f = d.child;
										if (f !== null) f.return = d, q = f;
										else for (; q !== null;) {
											d = q;
											var p = d.sibling, m = d.return;
											if (Cc(d), d === u) {
												q = null;
												break;
											}
											if (p !== null) {
												p.return = m, q = p;
												break;
											}
											q = m;
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
								q = o;
							}
						}
						if (o.subtreeFlags & 2064 && s !== null) s.return = o, q = s;
						else b: for (; q !== null;) {
							if (o = q, o.flags & 2048) switch (o.tag) {
								case 0:
								case 11:
								case 15: bc(9, o, o.return);
							}
							var v = o.sibling;
							if (v !== null) {
								v.return = o.return, q = v;
								break b;
							}
							q = o.return;
						}
					}
					var y = e.current;
					for (q = y; q !== null;) {
						s = q;
						var b = s.child;
						if (s.subtreeFlags & 2064 && b !== null) b.return = s, q = b;
						else b: for (s = y; q !== null;) {
							if (c = q, c.flags & 2048) try {
								switch (c.tag) {
									case 0:
									case 11:
									case 15: xc(9, c);
								}
							} catch (e) {
								zl(c, c.return, e);
							}
							if (c === s) {
								q = null;
								break b;
							}
							var x = c.sibling;
							if (x !== null) {
								x.return = c.return, q = x;
								break b;
							}
							q = c.return;
						}
					}
					if (Y = a, ua(), Dt && typeof Dt.onPostCommitFiberRoot == "function") try {
						Dt.onPostCommitFiberRoot(Et, e);
					} catch {}
					i = !0;
				}
				return i;
			} finally {
				L = n, Wc.transition = t;
			}
		}
		return !1;
	}
	function Rl(e, t, n) {
		t = ks(n, t), t = Ns(e, t, 1), e = so(e, t, 1), t = ml(), e !== null && (Ht(e, 1, t), gl(e, t));
	}
	function zl(e, t, n) {
		if (e.tag === 3) Rl(e, e, n);
		else for (; t !== null;) {
			if (t.tag === 3) {
				Rl(t, e, n);
				break;
			} else if (t.tag === 1) {
				var r = t.stateNode;
				if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (ol === null || !ol.has(r))) {
					e = ks(n, e), e = Ps(t, e, 1), t = so(t, e, 1), e = ml(), t !== null && (Ht(t, 1, e), gl(t, e));
					break;
				}
			}
			t = t.return;
		}
	}
	function Bl(e, t, n) {
		var r = e.pingCache;
		r !== null && r.delete(t), t = ml(), e.pingedLanes |= e.suspendedLanes & n, Gc === e && (Kc & n) === n && (Z === 4 || Z === 3 && (Kc & 130023424) === Kc && 500 > yt() - tl ? El(e, 0) : Qc |= n), gl(e, t);
	}
	function Vl(e, t) {
		t === 0 && (e.mode & 1 ? (t = Pt, Pt <<= 1, !(Pt & 130023424) && (Pt = 4194304)) : t = 1);
		var n = ml();
		e = no(e, t), e !== null && (Ht(e, t, n), gl(e, n));
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
		if (e !== null) if (e.memoizedProps !== t.pendingProps || Xi.current) zs = !0;
		else {
			if ((e.lanes & n) === 0 && !(t.flags & 128)) return zs = !1, sc(e, t, n);
			zs = !!(e.flags & 131072);
		}
		else zs = !1, Ea && t.flags & 1048576 && xa(t, ma, t.index);
		switch (t.lanes = 0, t.tag) {
			case 2:
				var i = t.type;
				ac(e, t), e = t.pendingProps;
				var a = Qi(t, Yi.current);
				Za(t, n), a = Io(null, t, i, e, a, n);
				var o = Lo();
				return t.flags |= 1, typeof a == "object" && a && typeof a.render == "function" && a.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, $i(i) ? (o = !0, ra(t)) : o = !1, t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null, io(t), a.updater = ws, t.stateNode = a, a._reactInternals = t, Os(t, i, e, n), t = Js(null, t, i, !0, o, n)) : (t.tag = 0, Ea && o && Sa(t), Bs(null, t, a, n), t = t.child), t;
			case 16:
				i = t.elementType;
				a: {
					switch (ac(e, t), e = t.pendingProps, a = i._init, i = a(i._payload), t.type = i, a = t.tag = Yl(i), e = Ss(i, e), a) {
						case 0:
							t = Ks(null, t, i, e, n);
							break a;
						case 1:
							t = qs(null, t, i, e, n);
							break a;
						case 11:
							t = Vs(null, t, i, e, n);
							break a;
						case 14:
							t = Hs(null, t, i, Ss(i.type, e), n);
							break a;
					}
					throw Error(r(306, i, ""));
				}
				return t;
			case 0: return i = t.type, a = t.pendingProps, a = t.elementType === i ? a : Ss(i, a), Ks(e, t, i, a, n);
			case 1: return i = t.type, a = t.pendingProps, a = t.elementType === i ? a : Ss(i, a), qs(e, t, i, a, n);
			case 3:
				a: {
					if (Ys(t), e === null) throw Error(r(387));
					i = t.pendingProps, o = t.memoizedState, a = o.element, ao(e, t), uo(t, i, null, n);
					var s = t.memoizedState;
					if (i = s.element, o.isDehydrated) if (o = {
						element: i,
						isDehydrated: !1,
						cache: s.cache,
						pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
						transitions: s.transitions
					}, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
						a = ks(Error(r(423)), t), t = Xs(e, t, i, n, a);
						break a;
					} else if (i !== a) {
						a = ks(Error(r(424)), t), t = Xs(e, t, i, n, a);
						break a;
					} else for (Ta = ji(t.stateNode.containerInfo.firstChild), wa = t, Ea = !0, Da = null, n = Ua(t, null, i, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling;
					else {
						if (Fa(), i === a) {
							t = oc(e, t, n);
							break a;
						}
						Bs(e, t, i, n);
					}
					t = t.child;
				}
				return t;
			case 5: return bo(t), e === null && ja(t), i = t.type, a = t.pendingProps, o = e === null ? null : e.memoizedProps, s = a.children, wi(i, a) ? s = null : o !== null && wi(i, o) && (t.flags |= 32), Gs(e, t), Bs(e, t, s, n), t.child;
			case 6: return e === null && ja(t), null;
			case 13: return $s(e, t, n);
			case 4: return vo(t, t.stateNode.containerInfo), i = t.pendingProps, e === null ? t.child = Ha(t, null, i, n) : Bs(e, t, i, n), t.child;
			case 11: return i = t.type, a = t.pendingProps, a = t.elementType === i ? a : Ss(i, a), Vs(e, t, i, a, n);
			case 7: return Bs(e, t, t.pendingProps, n), t.child;
			case 8: return Bs(e, t, t.pendingProps.children, n), t.child;
			case 12: return Bs(e, t, t.pendingProps.children, n), t.child;
			case 10:
				a: {
					if (i = t.type._context, a = t.pendingProps, o = t.memoizedProps, s = a.value, qi(Wa, i._currentValue), i._currentValue = s, o !== null) if (Ar(o.value, s)) {
						if (o.children === a.children && !Xi.current) {
							t = oc(e, t, n);
							break a;
						}
					} else for (o = t.child, o !== null && (o.return = t); o !== null;) {
						var c = o.dependencies;
						if (c !== null) {
							s = o.child;
							for (var l = c.firstContext; l !== null;) {
								if (l.context === i) {
									if (o.tag === 1) {
										l = oo(-1, n & -n), l.tag = 2;
										var u = o.updateQueue;
										if (u !== null) {
											u = u.shared;
											var d = u.pending;
											d === null ? l.next = l : (l.next = d.next, d.next = l), u.pending = l;
										}
									}
									o.lanes |= n, l = o.alternate, l !== null && (l.lanes |= n), Xa(o.return, n, t), c.lanes |= n;
									break;
								}
								l = l.next;
							}
						} else if (o.tag === 10) s = o.type === t.type ? null : o.child;
						else if (o.tag === 18) {
							if (s = o.return, s === null) throw Error(r(341));
							s.lanes |= n, c = s.alternate, c !== null && (c.lanes |= n), Xa(s, n, t), s = o.sibling;
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
					Bs(e, t, a.children, n), t = t.child;
				}
				return t;
			case 9: return a = t.type, i = t.pendingProps.children, Za(t, n), a = Qa(a), i = i(a), t.flags |= 1, Bs(e, t, i, n), t.child;
			case 14: return i = t.type, a = Ss(i, t.pendingProps), a = Ss(i.type, a), Hs(e, t, i, a, n);
			case 15: return Us(e, t, t.type, t.pendingProps, n);
			case 17: return i = t.type, a = t.pendingProps, a = t.elementType === i ? a : Ss(i, a), ac(e, t), t.tag = 1, $i(i) ? (e = !0, ra(t)) : e = !1, Za(t, n), Es(t, i, a), Os(t, i, a, n), Js(null, t, i, !0, e, n);
			case 19: return ic(e, t, n);
			case 22: return Ws(e, t, n);
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
			if (e === N) return 14;
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
			case M: return e = ql(19, n, t, a), e.elementType = M, e.lanes = o, e;
			case F: return $l(n, a, o, t);
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
					case N:
						s = 14;
						break a;
					case P:
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
		return e = ql(22, e, r, t), e.elementType = F, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
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
		this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Vt(0), this.expirationTimes = Vt(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Vt(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null;
	}
	function ru(e, t, n, r, i, a, o, s, c) {
		return e = new nu(e, t, n, s, c), t === 1 ? (t = 1, !0 === a && (t |= 8)) : t = 0, a = ql(3, null, null, t), e.current = a, a.stateNode = e, a.memoizedState = {
			element: r,
			isDehydrated: n,
			cache: null,
			transitions: null,
			pendingSuspenseBoundaries: null
		}, io(a), e;
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
		if (!e) return Ji;
		e = e._reactInternals;
		a: {
			if (lt(e) !== e || e.tag !== 1) throw Error(r(170));
			var t = e;
			do {
				switch (t.tag) {
					case 3:
						t = t.stateNode.context;
						break a;
					case 1: if ($i(t.type)) {
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
			if ($i(n)) return na(e, n, t);
		}
		return t;
	}
	function ou(e, t, n, r, i, a, o, s, c) {
		return e = ru(n, r, !0, e, i, a, o, s, c), e.context = au(null), n = e.current, r = ml(), i = hl(n), a = oo(r, i), a.callback = t ?? null, so(n, a, i), e.current.lanes = i, Ht(e, i, r), gl(e, r), e;
	}
	function su(e, t, n, r) {
		var i = t.current, a = ml(), o = hl(i);
		return n = au(n), t.context === null ? t.context = n : t.pendingContext = n, t = oo(a, o), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = so(i, t, o), e !== null && (Q(e, i, o, a), co(e, i, o)), o;
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
			wl(function() {
				su(null, e, null, null);
			}), t[Ii] = null;
		}
	};
	function mu(e) {
		this._internalRoot = e;
	}
	mu.prototype.unstable_scheduleHydration = function(e) {
		if (e) {
			var t = Yt();
			e = {
				blockedOn: null,
				target: e,
				priority: t
			};
			for (var n = 0; n < an.length && t !== 0 && t < an[n].priority; n++);
			an.splice(n, 0, e), n === 0 && ln(e);
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
			return e._reactRootContainer = o, e[Ii] = o.current, ui(e.nodeType === 8 ? e.parentNode : e), wl(), o;
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
		return e._reactRootContainer = c, e[Ii] = c.current, ui(e.nodeType === 8 ? e.parentNode : e), wl(function() {
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
	Kt = function(e) {
		switch (e.tag) {
			case 3:
				var t = e.stateNode;
				if (t.current.memoizedState.isDehydrated) {
					var n = Ft(t.pendingLanes);
					n !== 0 && (Wt(t, n | 1), gl(t, yt()), !(Y & 6) && (nl = yt() + 500, ua()));
				}
				break;
			case 13: wl(function() {
				var t = no(e, 1);
				t !== null && Q(t, e, 1, ml());
			}), uu(e, 1);
		}
	}, qt = function(e) {
		if (e.tag === 13) {
			var t = no(e, 134217728);
			t !== null && Q(t, e, 134217728, ml()), uu(e, 134217728);
		}
	}, Jt = function(e) {
		if (e.tag === 13) {
			var t = hl(e), n = no(e, t);
			n !== null && Q(n, e, t, ml()), uu(e, t);
		}
	}, Yt = function() {
		return L;
	}, Xt = function(e, t) {
		var n = L;
		try {
			return L = e, t();
		} finally {
			L = n;
		}
	}, He = function(e, t, n) {
		switch (t) {
			case "input":
				if (be(e, n), t = n.name, n.type === "radio" && t != null) {
					for (n = e; n.parentNode;) n = n.parentNode;
					for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + "][type=\"radio\"]"), t = 0; t < n.length; t++) {
						var i = n[t];
						if (i !== e && i.form === e.form) {
							var a = Ui(i);
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
	}, Je = Cl, Ye = wl;
	var bu = {
		usingClientEntryPoint: !1,
		Events: [
			Vi,
			Hi,
			Ui,
			Ke,
			qe,
			Cl
		]
	}, xu = {
		findFiberByHostInstance: Bi,
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
			Et = Cu.inject(Su), Dt = Cu;
		} catch {}
	}
	e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = bu, e.createPortal = function(e, t) {
		var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
		if (!hu(t)) throw Error(r(200));
		return iu(e, t, null, n);
	}, e.createRoot = function(e, t) {
		if (!hu(e)) throw Error(r(299));
		var n = !1, i = "", a = fu;
		return t != null && (!0 === t.unstable_strictMode && (n = !0), t.identifierPrefix !== void 0 && (i = t.identifierPrefix), t.onRecoverableError !== void 0 && (a = t.onRecoverableError)), t = ru(e, 1, !1, null, null, n, !1, i, a), e[Ii] = t.current, ui(e.nodeType === 8 ? e.parentNode : e), new pu(t);
	}, e.findDOMNode = function(e) {
		if (e == null) return null;
		if (e.nodeType === 1) return e;
		var t = e._reactInternals;
		if (t === void 0) throw typeof e.render == "function" ? Error(r(188)) : (e = Object.keys(e).join(","), Error(r(268, e)));
		return e = pt(t), e = e === null ? null : e.stateNode, e;
	}, e.flushSync = function(e) {
		return wl(e);
	}, e.hydrate = function(e, t, n) {
		if (!gu(t)) throw Error(r(200));
		return yu(null, e, t, !0, n);
	}, e.hydrateRoot = function(e, t, n) {
		if (!hu(e)) throw Error(r(405));
		var i = n != null && n.hydratedSources || null, a = !1, o = "", s = fu;
		if (n != null && (!0 === n.unstable_strictMode && (a = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = ou(t, null, e, 1, n ?? null, a, !1, o, s), e[Ii] = t.current, ui(e), i) for (e = 0; e < i.length; e++) n = i[e], a = n._getVersion, a = a(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, a] : t.mutableSourceEagerHydrationData.push(n, a);
		return new mu(t);
	}, e.render = function(e, t, n) {
		if (!gu(t)) throw Error(r(200));
		return yu(null, e, t, !1, n);
	}, e.unmountComponentAtNode = function(e) {
		if (!gu(e)) throw Error(r(40));
		return e._reactRootContainer ? (wl(function() {
			yu(null, null, e, !1, function() {
				e._reactRootContainer = null, e[Ii] = null;
			});
		}), !0) : !1;
	}, e.unstable_batchedUpdates = Cl, e.unstable_renderSubtreeIntoContainer = function(e, t, n, i) {
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
function b() {
	for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
	for (var r = Array(e), i = 0, t = 0; t < n; t++) for (var a = arguments[t], o = 0, s = a.length; o < s; o++, i++) r[i] = a[o];
	return r;
}
function x(e, t, n) {
	if (n || arguments.length === 2) for (var r = 0, i = t.length, a; r < i; r++) (a || !(r in t)) && (a ||= Array.prototype.slice.call(t, 0, r), a[r] = t[r]);
	return e.concat(a || Array.prototype.slice.call(t));
}
//#endregion
//#region node_modules/.pnpm/@formatjs+fast-memoize@2.2.3/node_modules/@formatjs/fast-memoize/lib/index.js
function S(e, t) {
	var n = t && t.cache ? t.cache : j, r = t && t.serializer ? t.serializer : ee;
	return (t && t.strategy ? t.strategy : D)(e, {
		cache: n,
		serializer: r
	});
}
function C(e) {
	return e == null || typeof e == "number" || typeof e == "boolean";
}
function w(e, t, n, r) {
	var i = C(r) ? r : n(r), a = t.get(i);
	return a === void 0 && (a = e.call(this, r), t.set(i, a)), a;
}
function T(e, t, n) {
	var r = Array.prototype.slice.call(arguments, 3), i = n(r), a = t.get(i);
	return a === void 0 && (a = e.apply(this, r), t.set(i, a)), a;
}
function E(e, t, n, r, i) {
	return n.bind(t, e, r, i);
}
function D(e, t) {
	var n = e.length === 1 ? w : T;
	return E(e, this, n, t.cache.create(), t.serializer);
}
function O(e, t) {
	return E(e, this, T, t.cache.create(), t.serializer);
}
function k(e, t) {
	return E(e, this, w, t.cache.create(), t.serializer);
}
var ee = function() {
	return JSON.stringify(arguments);
};
function A() {
	this.cache = Object.create(null);
}
A.prototype.get = function(e) {
	return this.cache[e];
}, A.prototype.set = function(e, t) {
	this.cache[e] = t;
};
var j = { create: function() {
	return new A();
} }, M = {
	variadic: O,
	monadic: k
};
//#endregion
//#region node_modules/.pnpm/@formatjs+ecma402-abstract@2.2.4/node_modules/@formatjs/ecma402-abstract/lib/utils.js
function N(e, t, n) {
	if (n === void 0 && (n = Error), !e) throw new n(t);
}
S(function() {
	for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
	return new ((e = Intl.NumberFormat).bind.apply(e, x([void 0], t, !1)))();
}, { strategy: M.variadic }), S(function() {
	for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
	return new ((e = Intl.DateTimeFormat).bind.apply(e, x([void 0], t, !1)))();
}, { strategy: M.variadic }), S(function() {
	for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
	return new ((e = Intl.PluralRules).bind.apply(e, x([void 0], t, !1)))();
}, { strategy: M.variadic }), S(function() {
	for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
	return new ((e = Intl.Locale).bind.apply(e, x([void 0], t, !1)))();
}, { strategy: M.variadic }), S(function() {
	for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
	return new ((e = Intl.ListFormat).bind.apply(e, x([void 0], t, !1)))();
}, { strategy: M.variadic });
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
var te;
(function(e) {
	e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime";
})(te ||= {});
function ne(e) {
	return e.type === F.literal;
}
function re(e) {
	return e.type === F.argument;
}
function ie(e) {
	return e.type === F.number;
}
function ae(e) {
	return e.type === F.date;
}
function oe(e) {
	return e.type === F.time;
}
function se(e) {
	return e.type === F.select;
}
function ce(e) {
	return e.type === F.plural;
}
function le(e) {
	return e.type === F.pound;
}
function ue(e) {
	return e.type === F.tag;
}
function de(e) {
	return !!(e && typeof e == "object" && e.type === te.number);
}
function fe(e) {
	return !!(e && typeof e == "object" && e.type === te.dateTime);
}
//#endregion
//#region node_modules/.pnpm/@formatjs+icu-messageformat-parser@2.9.4/node_modules/@formatjs/icu-messageformat-parser/lib/regex.generated.js
var pe = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, me = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function he(e) {
	var t = {};
	return e.replace(me, function(e) {
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
var ge = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
//#endregion
//#region node_modules/.pnpm/@formatjs+icu-skeleton-parser@1.8.8/node_modules/@formatjs/icu-skeleton-parser/lib/number.js
function _e(e) {
	if (e.length === 0) throw Error("Number skeleton cannot be empty");
	for (var t = e.split(ge).filter(function(e) {
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
function ve(e) {
	return e.replace(/^(.*?)-/, "");
}
var ye = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, be = /^(@+)?(\+|#+)?[rs]?$/g, xe = /(\*)(0+)|(#+)(0+)|(0+)/g, Se = /^(0+)$/;
function Ce(e) {
	var t = {};
	return e[e.length - 1] === "r" ? t.roundingPriority = "morePrecision" : e[e.length - 1] === "s" && (t.roundingPriority = "lessPrecision"), e.replace(be, function(e, n, r) {
		return typeof r == "string" ? r === "+" ? t.minimumSignificantDigits = n.length : n[0] === "#" ? t.maximumSignificantDigits = n.length : (t.minimumSignificantDigits = n.length, t.maximumSignificantDigits = n.length + (typeof r == "string" ? r.length : 0)) : (t.minimumSignificantDigits = n.length, t.maximumSignificantDigits = n.length), "";
	}), t;
}
function we(e) {
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
function Te(e) {
	var t;
	if (e[0] === "E" && e[1] === "E" ? (t = { notation: "engineering" }, e = e.slice(2)) : e[0] === "E" && (t = { notation: "scientific" }, e = e.slice(1)), t) {
		var n = e.slice(0, 2);
		if (n === "+!" ? (t.signDisplay = "always", e = e.slice(2)) : n === "+?" && (t.signDisplay = "exceptZero", e = e.slice(2)), !Se.test(e)) throw Error("Malformed concise eng/scientific notation");
		t.minimumIntegerDigits = e.length;
	}
	return t;
}
function Ee(e) {
	return we(e) || {};
}
function De(e) {
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
				t.style = "unit", t.unit = ve(i.options[0]);
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
					return v(v({}, e), Ee(t));
				}, {}));
				continue;
			case "engineering":
				t = v(v(v({}, t), { notation: "engineering" }), i.options.reduce(function(e, t) {
					return v(v({}, e), Ee(t));
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
				i.options[0].replace(xe, function(e, n, r, i, a, o) {
					if (n) t.minimumIntegerDigits = r.length;
					else if (i && a) throw Error("We currently do not support maximum integer digits");
					else if (o) throw Error("We currently do not support exact integer digits");
					return "";
				});
				continue;
		}
		if (Se.test(i.stem)) {
			t.minimumIntegerDigits = i.stem.length;
			continue;
		}
		if (ye.test(i.stem)) {
			if (i.options.length > 1) throw RangeError("Fraction-precision stems only accept a single optional option");
			i.stem.replace(ye, function(e, n, r, i, a, o) {
				return r === "*" ? t.minimumFractionDigits = n.length : i && i[0] === "#" ? t.maximumFractionDigits = i.length : a && o ? (t.minimumFractionDigits = a.length, t.maximumFractionDigits = a.length + o.length) : (t.minimumFractionDigits = n.length, t.maximumFractionDigits = n.length), "";
			});
			var a = i.options[0];
			a === "w" ? t = v(v({}, t), { trailingZeroDisplay: "stripIfInteger" }) : a && (t = v(v({}, t), Ce(a)));
			continue;
		}
		if (be.test(i.stem)) {
			t = v(v({}, t), Ce(i.stem));
			continue;
		}
		var o = we(i.stem);
		o && (t = v(v({}, t), o));
		var s = Te(i.stem);
		s && (t = v(v({}, t), s));
	}
	return t;
}
//#endregion
//#region node_modules/.pnpm/@formatjs+icu-messageformat-parser@2.9.4/node_modules/@formatjs/icu-messageformat-parser/lib/time-data.generated.js
var Oe = {
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
function ke(e, t) {
	for (var n = "", r = 0; r < e.length; r++) {
		var i = e.charAt(r);
		if (i === "j") {
			for (var a = 0; r + 1 < e.length && e.charAt(r + 1) === i;) a++, r++;
			var o = 1 + (a & 1), s = a < 2 ? 1 : 3 + (a >> 1), c = "a", l = Ae(t);
			for ((l == "H" || l == "k") && (s = 0); s-- > 0;) n += c;
			for (; o-- > 0;) n = l + n;
		} else i === "J" ? n += "H" : n += i;
	}
	return n;
}
function Ae(e) {
	var t = e.hourCycle;
	if (t === void 0 && e.hourCycles && e.hourCycles.length && (t = e.hourCycles[0]), t) switch (t) {
		case "h24": return "k";
		case "h23": return "H";
		case "h12": return "h";
		case "h11": return "K";
		default: throw Error("Invalid hourCycle");
	}
	var n = e.language, r;
	return n !== "root" && (r = e.maximize().region), (Oe[r || ""] || Oe[n || ""] || Oe[`${n}-001`] || Oe["001"])[0];
}
//#endregion
//#region node_modules/.pnpm/@formatjs+icu-messageformat-parser@2.9.4/node_modules/@formatjs/icu-messageformat-parser/lib/parser.js
var je = RegExp(`^${pe.source}*`), Me = RegExp(`${pe.source}*\$`);
function I(e, t) {
	return {
		start: e,
		end: t
	};
}
var Ne = !!String.prototype.startsWith && "_a".startsWith("a", 1), Pe = !!String.fromCodePoint, Fe = !!Object.fromEntries, Ie = !!String.prototype.codePointAt, Le = !!String.prototype.trimStart, Re = !!String.prototype.trimEnd, ze = Number.isSafeInteger ? Number.isSafeInteger : function(e) {
	return typeof e == "number" && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991;
}, Be = !0;
try {
	Be = qe("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu").exec("a")?.[0] === "a";
} catch {
	Be = !1;
}
var Ve = Ne ? function(e, t, n) {
	return e.startsWith(t, n);
} : function(e, t, n) {
	return e.slice(n, n + t.length) === t;
}, He = Pe ? String.fromCodePoint : function() {
	for (var e = [...arguments], t = "", n = e.length, r = 0, i; n > r;) {
		if (i = e[r++], i > 1114111) throw RangeError(i + " is not a valid code point");
		t += i < 65536 ? String.fromCharCode(i) : String.fromCharCode(((i -= 65536) >> 10) + 55296, i % 1024 + 56320);
	}
	return t;
}, Ue = Fe ? Object.fromEntries : function(e) {
	for (var t = {}, n = 0, r = e; n < r.length; n++) {
		var i = r[n], a = i[0];
		t[a] = i[1];
	}
	return t;
}, We = Ie ? function(e, t) {
	return e.codePointAt(t);
} : function(e, t) {
	var n = e.length;
	if (!(t < 0 || t >= n)) {
		var r = e.charCodeAt(t), i;
		return r < 55296 || r > 56319 || t + 1 === n || (i = e.charCodeAt(t + 1)) < 56320 || i > 57343 ? r : (r - 55296 << 10) + (i - 56320) + 65536;
	}
}, Ge = Le ? function(e) {
	return e.trimStart();
} : function(e) {
	return e.replace(je, "");
}, Ke = Re ? function(e) {
	return e.trimEnd();
} : function(e) {
	return e.replace(Me, "");
};
function qe(e, t) {
	return new RegExp(e, t);
}
var Je;
if (Be) {
	var Ye = qe("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
	Je = function(e, t) {
		return Ye.lastIndex = t, Ye.exec(e)[1] ?? "";
	};
} else Je = function(e, t) {
	for (var n = [];;) {
		var r = We(e, t);
		if (r === void 0 || et(r) || tt(r)) break;
		n.push(r), t += r >= 65536 ? 2 : 1;
	}
	return He.apply(void 0, n);
};
var Xe = function() {
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
			} else if (i === 60 && !this.ignoreTag && Ze(this.peek() || 0)) {
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
				if (this.isEOF() || !Ze(this.char())) return this.error(P.INVALID_TAG, I(o, this.clonePosition()));
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
		for (this.bump(); !this.isEOF() && $e(this.char());) this.bump();
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
		return !this.isEOF() && this.char() === 60 && (this.ignoreTag || !Qe(this.peek() || 0)) ? (this.bump(), "<") : null;
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
		return He.apply(void 0, t);
	}, e.prototype.tryParseUnquoted = function(e, t) {
		if (this.isEOF()) return null;
		var n = this.char();
		return n === 60 || n === 123 || n === 35 && (t === "plural" || t === "selectordinal") || n === 125 && e > 0 ? null : (this.bump(), He(n));
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
		var e = this.clonePosition(), t = this.offset(), n = Je(this.message, t), r = t + n.length;
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
					var u = Ke(l.val);
					if (u.length === 0) return this.error(P.EXPECT_ARGUMENT_STYLE, I(this.clonePosition(), this.clonePosition()));
					s = {
						style: u,
						styleLocation: I(c, this.clonePosition())
					};
				}
				var d = this.tryParseArgumentClose(r);
				if (d.err) return d;
				var f = I(r, this.clonePosition());
				if (s && Ve(s?.style, "::", 0)) {
					var p = Ge(s.style.slice(2));
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
						this.locale && (m = ke(p, this.locale));
						var u = {
							type: te.dateTime,
							pattern: m,
							location: s.styleLocation,
							parsedOptions: this.shouldParseSkeletons ? he(m) : {}
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
						options: Ue(y.val),
						location: b
					},
					err: null
				} : {
					val: {
						type: F.plural,
						value: n,
						options: Ue(y.val),
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
			n = _e(e);
		} catch {
			return this.error(P.INVALID_NUMBER_SKELETON, t);
		}
		return {
			val: {
				type: te.number,
				tokens: n,
				location: t,
				parsedOptions: this.shouldParseSkeletons ? De(n) : {}
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
		return i ? (a *= n, ze(a) ? {
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
		var t = We(this.message, e);
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
		if (Ve(this.message, e, this.offset())) {
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
		for (; !this.isEOF() && et(this.char());) this.bump();
	}, e.prototype.peek = function() {
		if (this.isEOF()) return null;
		var e = this.char(), t = this.offset();
		return this.message.charCodeAt(t + (e >= 65536 ? 2 : 1)) ?? null;
	}, e;
}();
function Ze(e) {
	return e >= 97 && e <= 122 || e >= 65 && e <= 90;
}
function Qe(e) {
	return Ze(e) || e === 47;
}
function $e(e) {
	return e === 45 || e === 46 || e >= 48 && e <= 57 || e === 95 || e >= 97 && e <= 122 || e >= 65 && e <= 90 || e == 183 || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039;
}
function et(e) {
	return e >= 9 && e <= 13 || e === 32 || e === 133 || e >= 8206 && e <= 8207 || e === 8232 || e === 8233;
}
function tt(e) {
	return e >= 33 && e <= 35 || e === 36 || e >= 37 && e <= 39 || e === 40 || e === 41 || e === 42 || e === 43 || e === 44 || e === 45 || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || e === 91 || e === 92 || e === 93 || e === 94 || e === 96 || e === 123 || e === 124 || e === 125 || e === 126 || e === 161 || e >= 162 && e <= 165 || e === 166 || e === 167 || e === 169 || e === 171 || e === 172 || e === 174 || e === 176 || e === 177 || e === 182 || e === 187 || e === 191 || e === 215 || e === 247 || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || e === 8216 || e === 8217 || e === 8218 || e >= 8219 && e <= 8220 || e === 8221 || e === 8222 || e === 8223 || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || e === 8249 || e === 8250 || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || e === 8260 || e === 8261 || e === 8262 || e >= 8263 && e <= 8273 || e === 8274 || e === 8275 || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || e === 8608 || e >= 8609 && e <= 8610 || e === 8611 || e >= 8612 && e <= 8613 || e === 8614 || e >= 8615 && e <= 8621 || e === 8622 || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || e === 8658 || e === 8659 || e === 8660 || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || e === 8968 || e === 8969 || e === 8970 || e === 8971 || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || e === 9001 || e === 9002 || e >= 9003 && e <= 9083 || e === 9084 || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || e === 9655 || e >= 9656 && e <= 9664 || e === 9665 || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || e === 9839 || e >= 9840 && e <= 10087 || e === 10088 || e === 10089 || e === 10090 || e === 10091 || e === 10092 || e === 10093 || e === 10094 || e === 10095 || e === 10096 || e === 10097 || e === 10098 || e === 10099 || e === 10100 || e === 10101 || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || e === 10181 || e === 10182 || e >= 10183 && e <= 10213 || e === 10214 || e === 10215 || e === 10216 || e === 10217 || e === 10218 || e === 10219 || e === 10220 || e === 10221 || e === 10222 || e === 10223 || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || e === 10627 || e === 10628 || e === 10629 || e === 10630 || e === 10631 || e === 10632 || e === 10633 || e === 10634 || e === 10635 || e === 10636 || e === 10637 || e === 10638 || e === 10639 || e === 10640 || e === 10641 || e === 10642 || e === 10643 || e === 10644 || e === 10645 || e === 10646 || e === 10647 || e === 10648 || e >= 10649 && e <= 10711 || e === 10712 || e === 10713 || e === 10714 || e === 10715 || e >= 10716 && e <= 10747 || e === 10748 || e === 10749 || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || e === 11158 || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || e === 11778 || e === 11779 || e === 11780 || e === 11781 || e >= 11782 && e <= 11784 || e === 11785 || e === 11786 || e === 11787 || e === 11788 || e === 11789 || e >= 11790 && e <= 11798 || e === 11799 || e >= 11800 && e <= 11801 || e === 11802 || e === 11803 || e === 11804 || e === 11805 || e >= 11806 && e <= 11807 || e === 11808 || e === 11809 || e === 11810 || e === 11811 || e === 11812 || e === 11813 || e === 11814 || e === 11815 || e === 11816 || e === 11817 || e >= 11818 && e <= 11822 || e === 11823 || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || e === 11840 || e === 11841 || e === 11842 || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || e === 11858 || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || e === 12296 || e === 12297 || e === 12298 || e === 12299 || e === 12300 || e === 12301 || e === 12302 || e === 12303 || e === 12304 || e === 12305 || e >= 12306 && e <= 12307 || e === 12308 || e === 12309 || e === 12310 || e === 12311 || e === 12312 || e === 12313 || e === 12314 || e === 12315 || e === 12316 || e === 12317 || e >= 12318 && e <= 12319 || e === 12320 || e === 12336 || e === 64830 || e === 64831 || e >= 65093 && e <= 65094;
}
//#endregion
//#region node_modules/.pnpm/@formatjs+icu-messageformat-parser@2.9.4/node_modules/@formatjs/icu-messageformat-parser/lib/index.js
function nt(e) {
	e.forEach(function(e) {
		if (delete e.location, se(e) || ce(e)) for (var t in e.options) delete e.options[t].location, nt(e.options[t].value);
		else ie(e) && de(e.style) || (ae(e) || oe(e)) && fe(e.style) ? delete e.style.location : ue(e) && nt(e.children);
	});
}
function rt(e, t) {
	t === void 0 && (t = {}), t = v({
		shouldParseSkeletons: !0,
		requiresOtherClause: !0
	}, t);
	var n = new Xe(e, t).parse();
	if (n.err) {
		var r = SyntaxError(P[n.err.kind]);
		throw r.location = n.err.location, r.originalMessage = n.err.message, r;
	}
	return t?.captureLocation || nt(n.val), n.val;
}
//#endregion
//#region node_modules/.pnpm/intl-messageformat@10.7.7/node_modules/intl-messageformat/lib/src/error.js
var it;
(function(e) {
	e.MISSING_VALUE = "MISSING_VALUE", e.INVALID_VALUE = "INVALID_VALUE", e.MISSING_INTL_API = "MISSING_INTL_API";
})(it ||= {});
var at = function(e) {
	_(t, e);
	function t(t, n, r) {
		var i = e.call(this, t) || this;
		return i.code = n, i.originalMessage = r, i;
	}
	return t.prototype.toString = function() {
		return `[formatjs Error: ${this.code}] ${this.message}`;
	}, t;
}(Error), ot = function(e) {
	_(t, e);
	function t(t, n, r, i) {
		return e.call(this, `Invalid values for "${t}": "${n}". Options are "${Object.keys(r).join("\", \"")}"`, it.INVALID_VALUE, i) || this;
	}
	return t;
}(at), st = function(e) {
	_(t, e);
	function t(t, n, r) {
		return e.call(this, `Value for "${t}" must be of type ${n}`, it.INVALID_VALUE, r) || this;
	}
	return t;
}(at), ct = function(e) {
	_(t, e);
	function t(t, n) {
		return e.call(this, `The intl string context variable "${t}" was not provided to the string "${n}"`, it.MISSING_VALUE, n) || this;
	}
	return t;
}(at), lt;
(function(e) {
	e[e.literal = 0] = "literal", e[e.object = 1] = "object";
})(lt ||= {});
function ut(e) {
	return e.length < 2 ? e : e.reduce(function(e, t) {
		var n = e[e.length - 1];
		return !n || n.type !== lt.literal || t.type !== lt.literal ? e.push(t) : n.value += t.value, e;
	}, []);
}
function dt(e) {
	return typeof e == "function";
}
function ft(e, t, n, r, i, a, o) {
	if (e.length === 1 && ne(e[0])) return [{
		type: lt.literal,
		value: e[0].value
	}];
	for (var s = [], c = 0, l = e; c < l.length; c++) {
		var u = l[c];
		if (ne(u)) {
			s.push({
				type: lt.literal,
				value: u.value
			});
			continue;
		}
		if (le(u)) {
			typeof a == "number" && s.push({
				type: lt.literal,
				value: n.getNumberFormat(t).format(a)
			});
			continue;
		}
		var d = u.value;
		if (!(i && d in i)) throw new ct(d, o);
		var f = i[d];
		if (re(u)) {
			(!f || typeof f == "string" || typeof f == "number") && (f = typeof f == "string" || typeof f == "number" ? String(f) : ""), s.push({
				type: typeof f == "string" ? lt.literal : lt.object,
				value: f
			});
			continue;
		}
		if (ae(u)) {
			var p = typeof u.style == "string" ? r.date[u.style] : fe(u.style) ? u.style.parsedOptions : void 0;
			s.push({
				type: lt.literal,
				value: n.getDateTimeFormat(t, p).format(f)
			});
			continue;
		}
		if (oe(u)) {
			var p = typeof u.style == "string" ? r.time[u.style] : fe(u.style) ? u.style.parsedOptions : r.time.medium;
			s.push({
				type: lt.literal,
				value: n.getDateTimeFormat(t, p).format(f)
			});
			continue;
		}
		if (ie(u)) {
			var p = typeof u.style == "string" ? r.number[u.style] : de(u.style) ? u.style.parsedOptions : void 0;
			p && p.scale && (f *= p.scale || 1), s.push({
				type: lt.literal,
				value: n.getNumberFormat(t, p).format(f)
			});
			continue;
		}
		if (ue(u)) {
			var m = u.children, h = u.value, g = i[h];
			if (!dt(g)) throw new st(h, "function", o);
			var _ = g(ft(m, t, n, r, i, a).map(function(e) {
				return e.value;
			}));
			Array.isArray(_) || (_ = [_]), s.push.apply(s, _.map(function(e) {
				return {
					type: typeof e == "string" ? lt.literal : lt.object,
					value: e
				};
			}));
		}
		if (se(u)) {
			var v = u.options[f] || u.options.other;
			if (!v) throw new ot(u.value, f, Object.keys(u.options), o);
			s.push.apply(s, ft(v.value, t, n, r, i));
			continue;
		}
		if (ce(u)) {
			var v = u.options[`=${f}`];
			if (!v) {
				if (!Intl.PluralRules) throw new at("Intl.PluralRules is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-pluralrules\"\n", it.MISSING_INTL_API, o);
				var y = n.getPluralRules(t, { type: u.pluralType }).select(f - (u.offset || 0));
				v = u.options[y] || u.options.other;
			}
			if (!v) throw new ot(u.value, f, Object.keys(u.options), o);
			s.push.apply(s, ft(v.value, t, n, r, i, f - (u.offset || 0)));
			continue;
		}
	}
	return ut(s);
}
//#endregion
//#region node_modules/.pnpm/intl-messageformat@10.7.7/node_modules/intl-messageformat/lib/src/core.js
function pt(e, t) {
	return t ? v(v(v({}, e || {}), t || {}), Object.keys(e).reduce(function(n, r) {
		return n[r] = v(v({}, e[r]), t[r] || {}), n;
	}, {})) : e;
}
function mt(e, t) {
	return t ? Object.keys(e).reduce(function(n, r) {
		return n[r] = pt(e[r], t[r]), n;
	}, v({}, e)) : e;
}
function ht(e) {
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
function gt(e) {
	return e === void 0 && (e = {
		number: {},
		dateTime: {},
		pluralRules: {}
	}), {
		getNumberFormat: S(function() {
			for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
			return new ((e = Intl.NumberFormat).bind.apply(e, x([void 0], t, !1)))();
		}, {
			cache: ht(e.number),
			strategy: M.variadic
		}),
		getDateTimeFormat: S(function() {
			for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
			return new ((e = Intl.DateTimeFormat).bind.apply(e, x([void 0], t, !1)))();
		}, {
			cache: ht(e.dateTime),
			strategy: M.variadic
		}),
		getPluralRules: S(function() {
			for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
			return new ((e = Intl.PluralRules).bind.apply(e, x([void 0], t, !1)))();
		}, {
			cache: ht(e.pluralRules),
			strategy: M.variadic
		})
	};
}
var _t = function() {
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
				return !e.length || t.type !== lt.literal || typeof e[e.length - 1] != "string" ? e.push(t.value) : e[e.length - 1] += t.value, e;
			}, []);
			return n.length <= 1 ? n[0] || "" : n;
		}, this.formatToParts = function(e) {
			return ft(a.ast, a.locales, a.formatters, a.formats, e, void 0, a.message);
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
		this.formats = mt(e.formats, r), this.formatters = i && i.formatters || gt(this.formatterCache);
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
	}, e.__parse = rt, e.formats = {
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
}(), vt;
(function(e) {
	e.FORMAT_ERROR = "FORMAT_ERROR", e.UNSUPPORTED_FORMATTER = "UNSUPPORTED_FORMATTER", e.INVALID_CONFIG = "INVALID_CONFIG", e.MISSING_DATA = "MISSING_DATA", e.MISSING_TRANSLATION = "MISSING_TRANSLATION";
})(vt ||= {});
var yt = function(e) {
	_(t, e);
	function t(n, r, i) {
		var a = this, o = i ? i instanceof Error ? i : Error(String(i)) : void 0;
		return a = e.call(this, `[@formatjs/intl Error ${n}] ${r}
${o ? `
${o.message}
${o.stack}` : ""}`) || this, a.code = n, typeof Error.captureStackTrace == "function" && Error.captureStackTrace(a, t), a;
	}
	return t;
}(Error), bt = function(e) {
	_(t, e);
	function t(t, n) {
		return e.call(this, vt.UNSUPPORTED_FORMATTER, t, n) || this;
	}
	return t;
}(yt), xt = function(e) {
	_(t, e);
	function t(t, n) {
		return e.call(this, vt.INVALID_CONFIG, t, n) || this;
	}
	return t;
}(yt), St = function(e) {
	_(t, e);
	function t(t, n) {
		return e.call(this, vt.MISSING_DATA, t, n) || this;
	}
	return t;
}(yt), Ct = function(e) {
	_(t, e);
	function t(t, n, r) {
		var i = e.call(this, vt.FORMAT_ERROR, `${t}
Locale: ${n}
`, r) || this;
		return i.locale = n, i;
	}
	return t;
}(yt), wt = function(e) {
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
}(Ct), Tt = function(e) {
	_(t, e);
	function t(t, n) {
		var r = e.call(this, vt.MISSING_TRANSLATION, `Missing message: "${t.id}" for locale "${n}", using ${t.defaultMessage ? `default message (${typeof t.defaultMessage == "string" ? t.defaultMessage : t.defaultMessage.map(function(e) {
			return e.value ?? JSON.stringify(e);
		}).join()})` : "id"} as fallback.`) || this;
		return r.descriptor = t, r;
	}
	return t;
}(yt);
//#endregion
//#region node_modules/.pnpm/@formatjs+intl@2.10.15_typescript@5.9.3/node_modules/@formatjs/intl/lib/src/utils.js
function Et(e, t, n) {
	return n === void 0 && (n = {}), t.reduce(function(t, r) {
		return r in e ? t[r] = e[r] : r in n && (t[r] = n[r]), t;
	}, {});
}
var Dt = {
	formats: {},
	messages: {},
	timeZone: void 0,
	defaultLocale: "en",
	defaultFormats: {},
	fallbackOnEmptyString: !0,
	onError: function(e) {},
	onWarn: function(e) {}
};
function Ot() {
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
function kt(e) {
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
function At(e) {
	e === void 0 && (e = Ot());
	var t = Intl.RelativeTimeFormat, n = Intl.ListFormat, r = Intl.DisplayNames, i = S(function() {
		for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
		return new ((e = Intl.DateTimeFormat).bind.apply(e, x([void 0], t, !1)))();
	}, {
		cache: kt(e.dateTime),
		strategy: M.variadic
	}), a = S(function() {
		for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
		return new ((e = Intl.NumberFormat).bind.apply(e, x([void 0], t, !1)))();
	}, {
		cache: kt(e.number),
		strategy: M.variadic
	}), o = S(function() {
		for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
		return new ((e = Intl.PluralRules).bind.apply(e, x([void 0], t, !1)))();
	}, {
		cache: kt(e.pluralRules),
		strategy: M.variadic
	});
	return {
		getDateTimeFormat: i,
		getNumberFormat: a,
		getMessageFormat: S(function(e, t, n, r) {
			return new _t(e, t, n, v({ formatters: {
				getNumberFormat: a,
				getDateTimeFormat: i,
				getPluralRules: o
			} }, r || {}));
		}, {
			cache: kt(e.message),
			strategy: M.variadic
		}),
		getRelativeTimeFormat: S(function() {
			var e = [...arguments];
			return new (t.bind.apply(t, x([void 0], e, !1)))();
		}, {
			cache: kt(e.relativeTime),
			strategy: M.variadic
		}),
		getPluralRules: o,
		getListFormat: S(function() {
			var e = [...arguments];
			return new (n.bind.apply(n, x([void 0], e, !1)))();
		}, {
			cache: kt(e.list),
			strategy: M.variadic
		}),
		getDisplayNames: S(function() {
			var e = [...arguments];
			return new (r.bind.apply(r, x([void 0], e, !1)))();
		}, {
			cache: kt(e.displayNames),
			strategy: M.variadic
		})
	};
}
function jt(e, t, n, r) {
	var i = e && e[t], a;
	if (i && (a = i[n]), a) return a;
	r(new bt(`No ${t} format named: ${n}`));
}
//#endregion
//#region node_modules/.pnpm/@formatjs+intl@2.10.15_typescript@5.9.3/node_modules/@formatjs/intl/lib/src/message.js
function Mt(e, t) {
	return Object.keys(e).reduce(function(n, r) {
		return n[r] = v({ timeZone: t }, e[r]), n;
	}, {});
}
function Nt(e, t) {
	return Object.keys(v(v({}, e), t)).reduce(function(n, r) {
		return n[r] = v(v({}, e[r] || {}), t[r] || {}), n;
	}, {});
}
function Pt(e, t) {
	if (!t) return e;
	var n = _t.formats;
	return v(v(v({}, n), e), {
		date: Nt(Mt(n.date, t), Mt(e.date || {}, t)),
		time: Nt(Mt(n.time, t), Mt(e.time || {}, t))
	});
}
var Ft = function(e, t, n, r, i) {
	var a = e.locale, o = e.formats, s = e.messages, c = e.defaultLocale, l = e.defaultFormats, u = e.fallbackOnEmptyString, d = e.onError, f = e.timeZone, p = e.defaultRichTextElements;
	n === void 0 && (n = { id: "" });
	var m = n.id, h = n.defaultMessage;
	N(!!m, "[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue");
	var g = String(m), _ = s && Object.prototype.hasOwnProperty.call(s, g) && s[g];
	if (Array.isArray(_) && _.length === 1 && _[0].type === F.literal) return _[0].value;
	if (!r && _ && typeof _ == "string" && !p) return _.replace(/'\{(.*?)\}'/gi, "{$1}");
	if (r = v(v({}, p), r || {}), o = Pt(o, f), l = Pt(l, f), !_) {
		if (u === !1 && _ === "") return _;
		if ((!h || a && a.toLowerCase() !== c.toLowerCase()) && d(new Tt(n, a)), h) try {
			var y = t.getMessageFormat(h, c, l, i);
			return y.format(r);
		} catch (e) {
			return d(new wt(`Error formatting default message for: "${g}", rendering default message verbatim`, a, n, e)), typeof h == "string" ? h : g;
		}
		return g;
	}
	try {
		var y = t.getMessageFormat(_, a, o, v({ formatters: t }, i || {}));
		return y.format(r);
	} catch (e) {
		d(new wt(`Error formatting message: "${g}", using ${h ? "default message" : "id"} as fallback.`, a, n, e));
	}
	if (h) try {
		var y = t.getMessageFormat(h, c, l, i);
		return y.format(r);
	} catch (e) {
		d(new wt(`Error formatting the default message for: "${g}", rendering message verbatim`, a, n, e));
	}
	return typeof _ == "string" ? _ : typeof h == "string" ? h : g;
}, It = [
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
function Lt(e, t, n, r) {
	var i = e.locale, a = e.formats, o = e.onError, s = e.timeZone;
	r === void 0 && (r = {});
	var c = r.format, l = v(v({}, s && { timeZone: s }), c && jt(a, t, c, o)), u = Et(r, It, l);
	return t === "time" && !u.hour && !u.minute && !u.second && !u.timeStyle && !u.dateStyle && (u = v(v({}, u), {
		hour: "numeric",
		minute: "numeric"
	})), n(i, u);
}
function Rt(e, t) {
	var n = [...arguments].slice(2), r = n[0], i = n[1], a = i === void 0 ? {} : i, o = typeof r == "string" ? new Date(r || 0) : r;
	try {
		return Lt(e, "date", t, a).format(o);
	} catch (t) {
		e.onError(new Ct("Error formatting date.", e.locale, t));
	}
	return String(o);
}
function zt(e, t) {
	var n = [...arguments].slice(2), r = n[0], i = n[1], a = i === void 0 ? {} : i, o = typeof r == "string" ? new Date(r || 0) : r;
	try {
		return Lt(e, "time", t, a).format(o);
	} catch (t) {
		e.onError(new Ct("Error formatting time.", e.locale, t));
	}
	return String(o);
}
function Bt(e, t) {
	var n = [...arguments].slice(2), r = n[0], i = n[1], a = n[2], o = a === void 0 ? {} : a, s = e.timeZone, c = e.locale, l = e.onError, u = Et(o, It, s ? { timeZone: s } : {});
	try {
		return t(c, u).formatRange(r, i);
	} catch (t) {
		l(new Ct("Error formatting date time range.", e.locale, t));
	}
	return String(r);
}
function Vt(e, t) {
	var n = [...arguments].slice(2), r = n[0], i = n[1], a = i === void 0 ? {} : i, o = typeof r == "string" ? new Date(r || 0) : r;
	try {
		return Lt(e, "date", t, a).formatToParts(o);
	} catch (t) {
		e.onError(new Ct("Error formatting date.", e.locale, t));
	}
	return [];
}
function Ht(e, t) {
	var n = [...arguments].slice(2), r = n[0], i = n[1], a = i === void 0 ? {} : i, o = typeof r == "string" ? new Date(r || 0) : r;
	try {
		return Lt(e, "time", t, a).formatToParts(o);
	} catch (t) {
		e.onError(new Ct("Error formatting time.", e.locale, t));
	}
	return [];
}
//#endregion
//#region node_modules/.pnpm/@formatjs+intl@2.10.15_typescript@5.9.3/node_modules/@formatjs/intl/lib/src/displayName.js
var Ut = [
	"style",
	"type",
	"fallback",
	"languageDisplay"
];
function Wt(e, t, n, r) {
	var i = e.locale, a = e.onError;
	Intl.DisplayNames || a(new at("Intl.DisplayNames is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-displaynames\"\n", it.MISSING_INTL_API));
	var o = Et(r, Ut);
	try {
		return t(i, o).of(n);
	} catch (e) {
		a(new Ct("Error formatting display name.", i, e));
	}
}
//#endregion
//#region node_modules/.pnpm/@formatjs+intl@2.10.15_typescript@5.9.3/node_modules/@formatjs/intl/lib/src/list.js
var L = ["type", "style"], Gt = Date.now();
function Kt(e) {
	return `${Gt}_${e}_${Gt}`;
}
function qt(e, t, n, r) {
	r === void 0 && (r = {});
	var i = Jt(e, t, n, r).reduce(function(e, t) {
		var n = t.value;
		return typeof n == "string" && typeof e[e.length - 1] == "string" ? e[e.length - 1] += n : e.push(n), e;
	}, []);
	return i.length === 1 ? i[0] : i.length === 0 ? "" : i;
}
function Jt(e, t, n, r) {
	var i = e.locale, a = e.onError;
	r === void 0 && (r = {}), Intl.ListFormat || a(new at("Intl.ListFormat is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-listformat\"\n", it.MISSING_INTL_API));
	var o = Et(r, L);
	try {
		var s = {}, c = n.map(function(e, t) {
			if (typeof e == "object") {
				var n = Kt(t);
				return s[n] = e, n;
			}
			return String(e);
		});
		return t(i, o).formatToParts(c).map(function(e) {
			return e.type === "literal" ? e : v(v({}, e), { value: s[e.value] || e.value });
		});
	} catch (e) {
		a(new Ct("Error formatting list.", i, e));
	}
	return n;
}
//#endregion
//#region node_modules/.pnpm/@formatjs+intl@2.10.15_typescript@5.9.3/node_modules/@formatjs/intl/lib/src/plural.js
var Yt = ["type"];
function Xt(e, t, n, r) {
	var i = e.locale, a = e.onError;
	r === void 0 && (r = {}), Intl.PluralRules || a(new at("Intl.PluralRules is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-pluralrules\"\n", it.MISSING_INTL_API));
	var o = Et(r, Yt);
	try {
		return t(i, o).select(n);
	} catch (e) {
		a(new Ct("Error formatting plural.", i, e));
	}
	return "other";
}
//#endregion
//#region node_modules/.pnpm/@formatjs+intl@2.10.15_typescript@5.9.3/node_modules/@formatjs/intl/lib/src/relativeTime.js
var Zt = ["numeric", "style"];
function Qt(e, t, n) {
	var r = e.locale, i = e.formats, a = e.onError;
	n === void 0 && (n = {});
	var o = n.format, s = !!o && jt(i, "relative", o, a) || {};
	return t(r, Et(n, Zt, s));
}
function $t(e, t, n, r, i) {
	i === void 0 && (i = {}), r ||= "second", Intl.RelativeTimeFormat || e.onError(new at("Intl.RelativeTimeFormat is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-relativetimeformat\"\n", it.MISSING_INTL_API));
	try {
		return Qt(e, t, i).format(n, r);
	} catch (t) {
		e.onError(new Ct("Error formatting relative time.", e.locale, t));
	}
	return String(n);
}
//#endregion
//#region node_modules/.pnpm/@formatjs+intl@2.10.15_typescript@5.9.3/node_modules/@formatjs/intl/lib/src/number.js
var en = [
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
function tn(e, t, n) {
	var r = e.locale, i = e.formats, a = e.onError;
	n === void 0 && (n = {});
	var o = n.format, s = o && jt(i, "number", o, a) || {};
	return t(r, Et(n, en, s));
}
function nn(e, t, n, r) {
	r === void 0 && (r = {});
	try {
		return tn(e, t, r).format(n);
	} catch (t) {
		e.onError(new Ct("Error formatting number.", e.locale, t));
	}
	return String(n);
}
function rn(e, t, n, r) {
	r === void 0 && (r = {});
	try {
		return tn(e, t, r).formatToParts(n);
	} catch (t) {
		e.onError(new Ct("Error formatting number.", e.locale, t));
	}
	return [];
}
//#endregion
//#region node_modules/.pnpm/@formatjs+intl@2.10.15_typescript@5.9.3/node_modules/@formatjs/intl/lib/src/create-intl.js
function an(e) {
	return typeof (e ? e[Object.keys(e)[0]] : void 0) == "string";
}
function on(e) {
	e.onWarn && e.defaultRichTextElements && an(e.messages || {}) && e.onWarn("[@formatjs/intl] \"defaultRichTextElements\" was specified but \"message\" was not pre-compiled. \nPlease consider using \"@formatjs/cli\" to pre-compile your messages for performance.\nFor more details see https://formatjs.io/docs/getting-started/message-distribution");
}
function sn(e, t) {
	var n = At(t), r = v(v({}, Dt), e), i = r.locale, a = r.defaultLocale, o = r.onError;
	return i ? !Intl.NumberFormat.supportedLocalesOf(i).length && o ? o(new St(`Missing locale data for locale: "${i}" in Intl.NumberFormat. Using default locale: "${a}" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details`)) : !Intl.DateTimeFormat.supportedLocalesOf(i).length && o && o(new St(`Missing locale data for locale: "${i}" in Intl.DateTimeFormat. Using default locale: "${a}" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details`)) : (o && o(new xt(`"locale" was not configured, using "${a}" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details`)), r.locale = r.defaultLocale || "en"), on(r), v(v({}, r), {
		formatters: n,
		formatNumber: nn.bind(null, r, n.getNumberFormat),
		formatNumberToParts: rn.bind(null, r, n.getNumberFormat),
		formatRelativeTime: $t.bind(null, r, n.getRelativeTimeFormat),
		formatDate: Rt.bind(null, r, n.getDateTimeFormat),
		formatDateToParts: Vt.bind(null, r, n.getDateTimeFormat),
		formatTime: zt.bind(null, r, n.getDateTimeFormat),
		formatDateTimeRange: Bt.bind(null, r, n.getDateTimeFormat),
		formatTimeToParts: Ht.bind(null, r, n.getDateTimeFormat),
		formatPlural: Xt.bind(null, r, n.getPluralRules),
		formatMessage: Ft.bind(null, r, n),
		$t: Ft.bind(null, r, n),
		formatList: qt.bind(null, r, n.getListFormat),
		formatListToParts: Jt.bind(null, r, n.getListFormat),
		formatDisplayName: Wt.bind(null, r, n.getDisplayNames)
	});
}
//#endregion
//#region node_modules/.pnpm/react-intl@6.8.9_react@18.3.1_typescript@5.9.3/node_modules/react-intl/lib/src/utils.js
var R = /* @__PURE__ */ c(u());
function cn(e) {
	N(e, "[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.");
}
var ln = v(v({}, Dt), { textComponent: R.Fragment });
function un(e) {
	return function(t) {
		return e(R.Children.toArray(t));
	};
}
function dn(e, t) {
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
var fn = /* @__PURE__ */ o(((e) => {
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
})), pn = /* @__PURE__ */ o(((e, t) => {
	t.exports = fn();
}));
(/* @__PURE__ */ o(((e, t) => {
	var n = pn(), r = {
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
})))();
var mn = typeof window < "u" && !window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__ ? window.__REACT_INTL_CONTEXT__ || (window.__REACT_INTL_CONTEXT__ = R.createContext(null)) : R.createContext(null);
mn.Consumer;
var hn = mn.Provider, gn = mn;
//#endregion
//#region node_modules/.pnpm/react-intl@6.8.9_react@18.3.1_typescript@5.9.3/node_modules/react-intl/lib/src/components/useIntl.js
function _n() {
	var e = R.useContext(gn);
	return cn(e), e;
}
//#endregion
//#region node_modules/.pnpm/react-intl@6.8.9_react@18.3.1_typescript@5.9.3/node_modules/react-intl/lib/src/components/createFormattedComponent.js
var vn;
(function(e) {
	e.formatDate = "FormattedDate", e.formatTime = "FormattedTime", e.formatNumber = "FormattedNumber", e.formatList = "FormattedList", e.formatDisplayName = "FormattedDisplayName";
})(vn ||= {});
var yn;
(function(e) {
	e.formatDate = "FormattedDateParts", e.formatTime = "FormattedTimeParts", e.formatNumber = "FormattedNumberParts", e.formatList = "FormattedListParts";
})(yn ||= {});
var bn = function(e) {
	var t = _n(), n = e.value, r = e.children, i = y(e, ["value", "children"]);
	return r(t.formatNumberToParts(n, i));
};
bn.displayName = "FormattedNumberParts", bn.displayName = "FormattedNumberParts";
function xn(e) {
	var t = function(t) {
		var n = _n(), r = t.value, i = t.children, a = y(t, ["value", "children"]), o = typeof r == "string" ? new Date(r || 0) : r;
		return i(e === "formatDate" ? n.formatDateToParts(o, a) : n.formatTimeToParts(o, a));
	};
	return t.displayName = yn[e], t;
}
function Sn(e) {
	var t = function(t) {
		var n = _n(), r = t.value, i = t.children, a = y(t, ["value", "children"]), o = n[e](r, a);
		if (typeof i == "function") return i(o);
		var s = n.textComponent || R.Fragment;
		return R.createElement(s, null, o);
	};
	return t.displayName = vn[e], t;
}
//#endregion
//#region node_modules/.pnpm/react-intl@6.8.9_react@18.3.1_typescript@5.9.3/node_modules/react-intl/lib/src/components/createIntl.js
function Cn(e) {
	return e && Object.keys(e).reduce(function(t, n) {
		var r = e[n];
		return t[n] = dt(r) ? un(r) : r, t;
	}, {});
}
var wn = function(e, t, n, r) {
	var i = [...arguments].slice(4), a = Cn(r), o = Ft.apply(void 0, x([
		e,
		t,
		n,
		a
	], i, !1));
	return Array.isArray(o) ? R.Children.toArray(o) : o;
}, Tn = function(e, t) {
	var n = e.defaultRichTextElements, r = y(e, ["defaultRichTextElements"]), i = Cn(n), a = sn(v(v(v({}, ln), r), { defaultRichTextElements: i }), t), o = {
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
		formatMessage: wn.bind(null, o, a.formatters),
		$t: wn.bind(null, o, a.formatters)
	});
};
//#endregion
//#region node_modules/.pnpm/react-intl@6.8.9_react@18.3.1_typescript@5.9.3/node_modules/react-intl/lib/src/components/provider.js
function En(e) {
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
var Dn = function(e) {
	_(t, e);
	function t() {
		var t = e !== null && e.apply(this, arguments) || this;
		return t.cache = Ot(), t.state = {
			cache: t.cache,
			intl: Tn(En(t.props), t.cache),
			prevConfig: En(t.props)
		}, t;
	}
	return t.getDerivedStateFromProps = function(e, t) {
		var n = t.prevConfig, r = t.cache, i = En(e);
		return dn(n, i) ? null : {
			intl: Tn(i, r),
			prevConfig: i
		};
	}, t.prototype.render = function() {
		return cn(this.state.intl), R.createElement(hn, { value: this.state.intl }, this.props.children);
	}, t.displayName = "IntlProvider", t.defaultProps = ln, t;
}(R.PureComponent);
//#endregion
//#region node_modules/.pnpm/react-intl@6.8.9_react@18.3.1_typescript@5.9.3/node_modules/react-intl/lib/index.js
function On(e) {
	return e;
}
Sn("formatDate"), Sn("formatTime"), Sn("formatNumber"), Sn("formatList"), Sn("formatDisplayName"), xn("formatDate"), xn("formatTime");
//#endregion
//#region node_modules/.pnpm/react@18.3.1/node_modules/react/cjs/react-jsx-runtime.production.min.js
var kn = /* @__PURE__ */ o(((e) => {
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
})), An = /* @__PURE__ */ o(((e, t) => {
	t.exports = kn();
})), jn = h(), Mn = An(), Nn = (0, R.createContext)({
	runtime: {
		handlerUrl() {
			return "";
		},
		notify() {}
	},
	element: document.createElement("div")
}), Pn = (e) => {
	let t = (0, R.useContext)(Nn);
	return t.runtime.handlerUrl(t.element, e);
}, Fn = (e, t) => {
	if (t != null && !(typeof t != "object" && typeof t != "function")) {
		for (let n of Object.getOwnPropertyNames(t)) if (n.startsWith("_jsrt")) {
			let r = n;
			e[r] = t[r];
		}
	}
}, In = (e) => {
	let t = e && "jquery" in e ? e[0] : e;
	if (!t || !(t instanceof Element)) throw console.error("Invalid DOM element provided to renderBlock:", e), Error("Invalid DOM Element. See previously logged details.");
	return Fn(t, e), t;
}, Ln = async (e) => {
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
}, Rn = !0, zn = ({ runtime: e, element: t, config: n, styles: r }) => async (i) => {
	let { core: a, theme: o } = await Ln(n.mfe_config_api), s = In(t), c = null, l = s;
	if (Rn && (c = s.attachShadow({ mode: "open" }), l = document.createElement("div"), l.classList.add("xblock-root"), c.appendChild(l)), r) {
		let e = document.createElement("style");
		e.textContent = r, c ? c.appendChild(e) : document.head.appendChild(e);
	}
	a.forEach((e) => {
		let t = document.createElement("link");
		t.rel = "stylesheet", t.href = e, c?.appendChild(t), document.head.querySelector(`link[href="${e}"]`) || document.head.appendChild(t.cloneNode());
	}), o.forEach((e) => {
		let t = document.createElement("link");
		t.rel = "stylesheet", t.href = e, c?.appendChild(t), document.head.querySelector(`link[href="${e}"]`) || document.head.appendChild(t.cloneNode());
	}), (0, jn.createRoot)(l).render(/* @__PURE__ */ (0, Mn.jsx)(R.StrictMode, { children: /* @__PURE__ */ (0, Mn.jsx)(Nn.Provider, {
		value: {
			runtime: e,
			element: s
		},
		children: /* @__PURE__ */ (0, Mn.jsx)(Dn, {
			locale: "en",
			children: i
		})
	}) }));
}, Bn = ({ saveUrl: e, data: t, runtime: n, errorMessage: r = "Failed to save configuration" }) => {
	n.notify("save", { state: "start" }), $.post(e, JSON.stringify(t)).done(() => {
		n.notify("save", { state: "end" });
	}).fail((e) => {
		let t = typeof r == "function" ? r(e) : r;
		n.notify("error", {
			title: "Save Error",
			message: t
		});
	});
}, Vn = /* @__PURE__ */ o(((e, t) => {
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
function z() {
	return z = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, z.apply(null, arguments);
}
//#endregion
//#region node_modules/.pnpm/@babel+runtime@7.29.2/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function B(e, t) {
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
var Hn = /* @__PURE__ */ o(((e, t) => {
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
Hn();
function Un(e) {
	return "default" + e.charAt(0).toUpperCase() + e.substr(1);
}
//#endregion
//#region node_modules/.pnpm/uncontrollable@7.2.1_react@18.3.1/node_modules/uncontrollable/lib/esm/hook.js
function Wn(e) {
	var t = Gn(e, "string");
	return typeof t == "symbol" ? t : String(t);
}
function Gn(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function Kn(e, t, n) {
	var r = (0, R.useRef)(e !== void 0), i = (0, R.useState)(t), a = i[0], o = i[1], s = e !== void 0, c = r.current;
	return r.current = s, !s && c && a !== t && o(t), [s ? e : a, (0, R.useCallback)(function(e) {
		var t = [...arguments].slice(1);
		n && n.apply(void 0, [e].concat(t)), o(e);
	}, [n])];
}
function qn(e, t) {
	return Object.keys(t).reduce(function(n, r) {
		var i, a = n, o = a[Un(r)], s = a[r], c = B(a, [Un(r), r].map(Wn)), l = t[r], u = Kn(s, o, e[l]), d = u[0], f = u[1];
		return z({}, c, (i = {}, i[r] = d, i[l] = f, i));
	}, e);
}
//#endregion
//#region node_modules/.pnpm/@babel+runtime@7.29.2/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function Jn(e, t) {
	return Jn = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
		return e.__proto__ = t, e;
	}, Jn(e, t);
}
//#endregion
//#region node_modules/.pnpm/@babel+runtime@7.29.2/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
function Yn(e, t) {
	e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Jn(e, t);
}
//#endregion
//#region node_modules/.pnpm/react-lifecycles-compat@3.0.4/node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js
function Xn() {
	var e = this.constructor.getDerivedStateFromProps(this.props, this.state);
	e != null && this.setState(e);
}
function Zn(e) {
	function t(t) {
		return this.constructor.getDerivedStateFromProps(e, t) ?? null;
	}
	this.setState(t.bind(this));
}
function Qn(e, t) {
	try {
		var n = this.props, r = this.state;
		this.props = e, this.state = t, this.__reactInternalSnapshotFlag = !0, this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(n, r);
	} finally {
		this.props = n, this.state = r;
	}
}
Xn.__suppressDeprecationWarning = !0, Zn.__suppressDeprecationWarning = !0, Qn.__suppressDeprecationWarning = !0;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/ThemeProvider.js
var $n = /* @__PURE__ */ R.createContext({});
$n.Consumer, $n.Provider;
function er(e, t) {
	var n = (0, R.useContext)($n);
	return e || n[t] || t;
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/ownerDocument.js
function tr(e) {
	return e && e.ownerDocument || document;
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/ownerWindow.js
function nr(e) {
	var t = tr(e);
	return t && t.defaultView || window;
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/getComputedStyle.js
function rr(e, t) {
	return nr(e).getComputedStyle(e, t);
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/hyphenate.js
var ir = /([A-Z])/g;
function ar(e) {
	return e.replace(ir, "-$1").toLowerCase();
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/hyphenateStyle.js
var or = /^ms-/;
function sr(e) {
	return ar(e).replace(or, "-ms-");
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/isTransform.js
var cr = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
function lr(e) {
	return !!(e && cr.test(e));
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/css.js
function ur(e, t) {
	var n = "", r = "";
	if (typeof t == "string") return e.style.getPropertyValue(sr(t)) || rr(e).getPropertyValue(sr(t));
	Object.keys(t).forEach(function(i) {
		var a = t[i];
		!a && a !== 0 ? e.style.removeProperty(sr(i)) : lr(i) ? r += i + "(" + a + ") " : n += sr(i) + ": " + a + ";";
	}), r && (n += "transform: " + r + ";"), e.style.cssText += ";" + n;
}
//#endregion
//#region node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/lib/ReactPropTypesSecret.js
var dr = /* @__PURE__ */ o(((e, t) => {
	t.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
})), fr = /* @__PURE__ */ o(((e, t) => {
	var n = dr();
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
})), pr = /* @__PURE__ */ o(((e, t) => {
	t.exports = fr()();
})), mr = { disabled: !1 }, hr = R.createContext(null), gr = function(e) {
	return e.scrollTop;
}, _r = /* @__PURE__ */ c(m()), vr = "unmounted", yr = "exited", br = "entering", xr = "entered", Sr = "exiting", Cr = /* @__PURE__ */ function(e) {
	Yn(t, e);
	function t(t, n) {
		var r = e.call(this, t, n) || this, i = n, a = i && !i.isMounting ? t.enter : t.appear, o;
		return r.appearStatus = null, t.in ? a ? (o = yr, r.appearStatus = br) : o = xr : o = t.unmountOnExit || t.mountOnEnter ? vr : yr, r.state = { status: o }, r.nextCallback = null, r;
	}
	t.getDerivedStateFromProps = function(e, t) {
		return e.in && t.status === "unmounted" ? { status: yr } : null;
	};
	var n = t.prototype;
	return n.componentDidMount = function() {
		this.updateStatus(!0, this.appearStatus);
	}, n.componentDidUpdate = function(e) {
		var t = null;
		if (e !== this.props) {
			var n = this.state.status;
			this.props.in ? n !== "entering" && n !== "entered" && (t = br) : (n === "entering" || n === "entered") && (t = Sr);
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
				var n = this.props.nodeRef ? this.props.nodeRef.current : _r.findDOMNode(this);
				n && gr(n);
			}
			this.performEnter(e);
		} else this.performExit();
		else this.props.unmountOnExit && this.state.status === "exited" && this.setState({ status: vr });
	}, n.performEnter = function(e) {
		var t = this, n = this.props.enter, r = this.context ? this.context.isMounting : e, i = this.props.nodeRef ? [r] : [_r.findDOMNode(this), r], a = i[0], o = i[1], s = this.getTimeouts(), c = r ? s.appear : s.enter;
		if (!e && !n || mr.disabled) {
			this.safeSetState({ status: xr }, function() {
				t.props.onEntered(a);
			});
			return;
		}
		this.props.onEnter(a, o), this.safeSetState({ status: br }, function() {
			t.props.onEntering(a, o), t.onTransitionEnd(c, function() {
				t.safeSetState({ status: xr }, function() {
					t.props.onEntered(a, o);
				});
			});
		});
	}, n.performExit = function() {
		var e = this, t = this.props.exit, n = this.getTimeouts(), r = this.props.nodeRef ? void 0 : _r.findDOMNode(this);
		if (!t || mr.disabled) {
			this.safeSetState({ status: yr }, function() {
				e.props.onExited(r);
			});
			return;
		}
		this.props.onExit(r), this.safeSetState({ status: Sr }, function() {
			e.props.onExiting(r), e.onTransitionEnd(n.exit, function() {
				e.safeSetState({ status: yr }, function() {
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
		var n = this.props.nodeRef ? this.props.nodeRef.current : _r.findDOMNode(this), r = e == null && !this.props.addEndListener;
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
		var r = B(t, [
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
		return /* @__PURE__ */ R.createElement(hr.Provider, { value: null }, typeof n == "function" ? n(e, r) : R.cloneElement(R.Children.only(n), r));
	}, t;
}(R.Component);
Cr.contextType = hr, Cr.propTypes = {};
function wr() {}
Cr.defaultProps = {
	in: !1,
	mountOnEnter: !1,
	unmountOnExit: !1,
	appear: !1,
	enter: !0,
	exit: !0,
	onEnter: wr,
	onEntering: wr,
	onEntered: wr,
	onExit: wr,
	onExiting: wr,
	onExited: wr
}, Cr.UNMOUNTED = vr, Cr.EXITED = yr, Cr.ENTERING = br, Cr.ENTERED = xr, Cr.EXITING = Sr;
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/canUseDOM.js
var Tr = !!(typeof window < "u" && window.document && window.document.createElement), Er = !1, Dr = !1;
try {
	var Or = {
		get passive() {
			return Er = !0;
		},
		get once() {
			return Dr = Er = !0;
		}
	};
	Tr && (window.addEventListener("test", Or, Or), window.removeEventListener("test", Or, !0));
} catch {}
function kr(e, t, n, r) {
	if (r && typeof r != "boolean" && !Dr) {
		var i = r.once, a = r.capture, o = n;
		!Dr && i && (o = n.__once || function e(r) {
			this.removeEventListener(t, e, a), n.call(this, r);
		}, n.__once = o), e.addEventListener(t, o, Er ? r : a);
	}
	e.addEventListener(t, n, r);
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/removeEventListener.js
function Ar(e, t, n, r) {
	var i = r && typeof r != "boolean" ? r.capture : r;
	e.removeEventListener(t, n, i), n.__once && e.removeEventListener(t, n.__once, i);
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/listen.js
function jr(e, t, n, r) {
	return kr(e, t, n, r), function() {
		Ar(e, t, n, r);
	};
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/triggerEvent.js
function Mr(e, t, n, r) {
	if (n === void 0 && (n = !1), r === void 0 && (r = !0), e) {
		var i = document.createEvent("HTMLEvents");
		i.initEvent(t, n, r), e.dispatchEvent(i);
	}
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/transitionEnd.js
function Nr(e) {
	var t = ur(e, "transitionDuration") || "", n = t.indexOf("ms") === -1 ? 1e3 : 1;
	return parseFloat(t) * n;
}
function Pr(e, t, n) {
	n === void 0 && (n = 5);
	var r = !1, i = setTimeout(function() {
		r || Mr(e, "transitionend", !0);
	}, t + n), a = jr(e, "transitionend", function() {
		r = !0;
	}, { once: !0 });
	return function() {
		clearTimeout(i), a();
	};
}
function Fr(e, t, n, r) {
	n ??= Nr(e) || 0;
	var i = Pr(e, n, r), a = jr(e, "transitionend", t);
	return function() {
		i(), a();
	};
}
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/transitionEndListener.js
function Ir(e, t) {
	var n = ur(e, t) || "", r = n.indexOf("ms") === -1 ? 1e3 : 1;
	return parseFloat(n) * r;
}
function Lr(e, t) {
	var n = Fr(e, function(r) {
		r.target === e && (n(), t(r));
	}, Ir(e, "transitionDuration") + Ir(e, "transitionDelay"));
}
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/triggerBrowserReflow.js
function Rr(e) {
	e.offsetHeight;
}
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useCommittedRef.js
function zr(e) {
	let t = (0, R.useRef)(e);
	return (0, R.useEffect)(() => {
		t.current = e;
	}, [e]), t;
}
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useEventCallback.js
function Br(e) {
	let t = zr(e);
	return (0, R.useCallback)(function(...e) {
		return t.current && t.current(...e);
	}, [t]);
}
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Fade.js
var V = /* @__PURE__ */ c(Vn()), Vr = ["className", "children"], Hr, Ur = {
	in: !1,
	timeout: 300,
	mountOnEnter: !1,
	unmountOnExit: !1,
	appear: !1
}, Wr = (Hr = {}, Hr[br] = "show", Hr[xr] = "show", Hr), Gr = /* @__PURE__ */ R.forwardRef(function(e, t) {
	var n = e.className, r = e.children, i = B(e, Vr), a = (0, R.useCallback)(function(e) {
		Rr(e), i.onEnter && i.onEnter(e);
	}, [i]);
	return /* @__PURE__ */ R.createElement(Cr, z({
		ref: t,
		addEndListener: Lr
	}, i, { onEnter: a }), function(e, t) {
		return /* @__PURE__ */ R.cloneElement(r, z({}, t, { className: (0, V.default)("fade", n, r.props.className, Wr[e]) }));
	});
});
Gr.defaultProps = Ur, Gr.displayName = "Fade";
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/camelize.js
var Kr = /-(.)/g;
function qr(e) {
	return e.replace(Kr, function(e, t) {
		return t.toUpperCase();
	});
}
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/createWithBsPrefix.js
var Jr = [
	"className",
	"bsPrefix",
	"as"
], Yr = function(e) {
	return e[0].toUpperCase() + qr(e).slice(1);
};
function Xr(e, t) {
	var n = t === void 0 ? {} : t, r = n.displayName, i = r === void 0 ? Yr(e) : r, a = n.Component, o = n.defaultProps, s = /* @__PURE__ */ R.forwardRef(function(t, n) {
		var r = t.className, i = t.bsPrefix, o = t.as, s = o === void 0 ? a || "div" : o, c = B(t, Jr), l = er(i, e);
		return /* @__PURE__ */ R.createElement(s, z({
			ref: n,
			className: (0, V.default)(r, l)
		}, c));
	});
	return s.defaultProps = o, s.displayName = i, s;
}
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useMounted.js
function Zr() {
	let e = (0, R.useRef)(!0), t = (0, R.useRef)(() => e.current);
	return (0, R.useEffect)(() => (e.current = !0, () => {
		e.current = !1;
	}), []), t.current;
}
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useUpdatedRef.js
function Qr(e) {
	let t = (0, R.useRef)(e);
	return t.current = e, t;
}
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useWillUnmount.js
function $r(e) {
	let t = Qr(e);
	(0, R.useEffect)(() => () => t.current(), []);
}
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useTimeout.js
var ei = 2 ** 31 - 1;
function ti(e, t, n) {
	let r = n - Date.now();
	e.current = r <= ei ? setTimeout(t, r) : setTimeout(() => ti(e, t, n), ei);
}
function ni() {
	let e = Zr(), t = (0, R.useRef)();
	return $r(() => clearTimeout(t.current)), (0, R.useMemo)(() => {
		let n = () => clearTimeout(t.current);
		function r(r, i = 0) {
			e() && (n(), i <= ei ? t.current = setTimeout(r, i) : ti(t, r, Date.now() + i));
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
var ri = [
	"bsPrefix",
	"className",
	"as"
], ii = [
	"xl",
	"lg",
	"md",
	"sm",
	"xs"
], ai = /* @__PURE__ */ R.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.className, i = e.as, a = i === void 0 ? "div" : i, o = B(e, ri), s = er(n, "col"), c = [], l = [];
	return ii.forEach(function(e) {
		var t = o[e];
		delete o[e];
		var n, r, i;
		if (typeof t == "object" && t) {
			var a = t.span;
			n = a === void 0 ? !0 : a, r = t.offset, i = t.order;
		} else n = t;
		var u = e === "xs" ? "" : "-" + e;
		n && c.push(n === !0 ? "" + s + u : "" + s + u + "-" + n), i != null && l.push("order" + u + "-" + i), r != null && l.push("offset" + u + "-" + r);
	}), c.length || c.push(s), /* @__PURE__ */ R.createElement(a, z({}, o, {
		ref: t,
		className: V.default.apply(void 0, [r].concat(c, l))
	}));
});
ai.displayName = "Col";
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useCallbackRef.js
function oi() {
	return (0, R.useState)(null);
}
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useSafeState.js
function si(e) {
	let t = Zr();
	return [e[0], (0, R.useCallback)((n) => {
		if (t()) return e[1](n);
	}, [t, e[1]])];
}
var ci = "bottom", li = "right", ui = "left", di = "auto", fi = [
	"top",
	ci,
	li,
	ui
], pi = "start", mi = "clippingParents", hi = "viewport", gi = "popper", _i = "reference", vi = /* @__PURE__ */ fi.reduce(function(e, t) {
	return e.concat([t + "-" + pi, t + "-end"]);
}, []), yi = /* @__PURE__ */ [].concat(fi, [di]).reduce(function(e, t) {
	return e.concat([
		t,
		t + "-" + pi,
		t + "-end"
	]);
}, []), bi = [
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
function xi(e) {
	return e.split("-")[0];
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getWindow.js
function Si(e) {
	if (e == null) return window;
	if (e.toString() !== "[object Window]") {
		var t = e.ownerDocument;
		return t && t.defaultView || window;
	}
	return e;
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/instanceOf.js
function Ci(e) {
	return e instanceof Si(e).Element || e instanceof Element;
}
function wi(e) {
	return e instanceof Si(e).HTMLElement || e instanceof HTMLElement;
}
function Ti(e) {
	return typeof ShadowRoot > "u" ? !1 : e instanceof Si(e).ShadowRoot || e instanceof ShadowRoot;
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/math.js
var Ei = Math.max, Di = Math.min, Oi = Math.round;
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/userAgent.js
function ki() {
	var e = navigator.userAgentData;
	return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(e) {
		return e.brand + "/" + e.version;
	}).join(" ") : navigator.userAgent;
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/isLayoutViewport.js
function Ai() {
	return !/^((?!chrome|android).)*safari/i.test(ki());
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js
function ji(e, t, n) {
	t === void 0 && (t = !1), n === void 0 && (n = !1);
	var r = e.getBoundingClientRect(), i = 1, a = 1;
	t && wi(e) && (i = e.offsetWidth > 0 && Oi(r.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && Oi(r.height) / e.offsetHeight || 1);
	var o = (Ci(e) ? Si(e) : window).visualViewport, s = !Ai() && n, c = (r.left + (s && o ? o.offsetLeft : 0)) / i, l = (r.top + (s && o ? o.offsetTop : 0)) / a, u = r.width / i, d = r.height / a;
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
function Mi(e) {
	var t = ji(e), n = e.offsetWidth, r = e.offsetHeight;
	return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
		x: e.offsetLeft,
		y: e.offsetTop,
		width: n,
		height: r
	};
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/contains.js
function Ni(e, t) {
	var n = t.getRootNode && t.getRootNode();
	if (e.contains(t)) return !0;
	if (n && Ti(n)) {
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
function Pi(e) {
	return e ? (e.nodeName || "").toLowerCase() : null;
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js
function Fi(e) {
	return Si(e).getComputedStyle(e);
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/isTableElement.js
function Ii(e) {
	return [
		"table",
		"td",
		"th"
	].indexOf(Pi(e)) >= 0;
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js
function Li(e) {
	return ((Ci(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getParentNode.js
function Ri(e) {
	return Pi(e) === "html" ? e : e.assignedSlot || e.parentNode || (Ti(e) ? e.host : null) || Li(e);
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js
function zi(e) {
	return !wi(e) || Fi(e).position === "fixed" ? null : e.offsetParent;
}
function Bi(e) {
	var t = /firefox/i.test(ki());
	if (/Trident/i.test(ki()) && wi(e) && Fi(e).position === "fixed") return null;
	var n = Ri(e);
	for (Ti(n) && (n = n.host); wi(n) && ["html", "body"].indexOf(Pi(n)) < 0;) {
		var r = Fi(n);
		if (r.transform !== "none" || r.perspective !== "none" || r.contain === "paint" || ["transform", "perspective"].indexOf(r.willChange) !== -1 || t && r.willChange === "filter" || t && r.filter && r.filter !== "none") return n;
		n = n.parentNode;
	}
	return null;
}
function Vi(e) {
	for (var t = Si(e), n = zi(e); n && Ii(n) && Fi(n).position === "static";) n = zi(n);
	return n && (Pi(n) === "html" || Pi(n) === "body" && Fi(n).position === "static") ? t : n || Bi(e) || t;
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js
function Hi(e) {
	return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/within.js
function Ui(e, t, n) {
	return Ei(e, Di(t, n));
}
function Wi(e, t, n) {
	var r = Ui(e, t, n);
	return r > n ? n : r;
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getFreshSideObject.js
function Gi() {
	return {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0
	};
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/mergePaddingObject.js
function Ki(e) {
	return Object.assign({}, Gi(), e);
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/expandToHashMap.js
function H(e, t) {
	return t.reduce(function(t, n) {
		return t[n] = e, t;
	}, {});
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/arrow.js
var qi = function(e, t) {
	return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, Ki(typeof e == "number" ? H(e, fi) : e);
};
function Ji(e) {
	var t, n = e.state, r = e.name, i = e.options, a = n.elements.arrow, o = n.modifiersData.popperOffsets, s = xi(n.placement), c = Hi(s), l = ["left", "right"].indexOf(s) >= 0 ? "height" : "width";
	if (!(!a || !o)) {
		var u = qi(i.padding, n), d = Mi(a), f = c === "y" ? "top" : ui, p = c === "y" ? ci : li, m = n.rects.reference[l] + n.rects.reference[c] - o[c] - n.rects.popper[l], h = o[c] - n.rects.reference[c], g = Vi(a), _ = g ? c === "y" ? g.clientHeight || 0 : g.clientWidth || 0 : 0, v = m / 2 - h / 2, y = u[f], b = _ - d[l] - u[p], x = _ / 2 - d[l] / 2 + v, S = Ui(y, x, b), C = c;
		n.modifiersData[r] = (t = {}, t[C] = S, t.centerOffset = S - x, t);
	}
}
function Yi(e) {
	var t = e.state, n = e.options.element, r = n === void 0 ? "[data-popper-arrow]" : n;
	r != null && (typeof r == "string" && (r = t.elements.popper.querySelector(r), !r) || Ni(t.elements.popper, r) && (t.elements.arrow = r));
}
var Xi = {
	name: "arrow",
	enabled: !0,
	phase: "main",
	fn: Ji,
	effect: Yi,
	requires: ["popperOffsets"],
	requiresIfExists: ["preventOverflow"]
};
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getVariation.js
function Zi(e) {
	return e.split("-")[1];
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/computeStyles.js
var Qi = {
	top: "auto",
	right: "auto",
	bottom: "auto",
	left: "auto"
};
function $i(e, t) {
	var n = e.x, r = e.y, i = t.devicePixelRatio || 1;
	return {
		x: Oi(n * i) / i || 0,
		y: Oi(r * i) / i || 0
	};
}
function ea(e) {
	var t, n = e.popper, r = e.popperRect, i = e.placement, a = e.variation, o = e.offsets, s = e.position, c = e.gpuAcceleration, l = e.adaptive, u = e.roundOffsets, d = e.isFixed, f = o.x, p = f === void 0 ? 0 : f, m = o.y, h = m === void 0 ? 0 : m, g = typeof u == "function" ? u({
		x: p,
		y: h
	}) : {
		x: p,
		y: h
	};
	p = g.x, h = g.y;
	var _ = o.hasOwnProperty("x"), v = o.hasOwnProperty("y"), y = ui, b = "top", x = window;
	if (l) {
		var S = Vi(n), C = "clientHeight", w = "clientWidth";
		if (S === Si(n) && (S = Li(n), Fi(S).position !== "static" && s === "absolute" && (C = "scrollHeight", w = "scrollWidth")), S = S, i === "top" || (i === "left" || i === "right") && a === "end") {
			b = ci;
			var T = d && S === x && x.visualViewport ? x.visualViewport.height : S[C];
			h -= T - r.height, h *= c ? 1 : -1;
		}
		if (i === "left" || (i === "top" || i === "bottom") && a === "end") {
			y = li;
			var E = d && S === x && x.visualViewport ? x.visualViewport.width : S[w];
			p -= E - r.width, p *= c ? 1 : -1;
		}
	}
	var D = Object.assign({ position: s }, l && Qi), O = u === !0 ? $i({
		x: p,
		y: h
	}, Si(n)) : {
		x: p,
		y: h
	};
	if (p = O.x, h = O.y, c) {
		var k;
		return Object.assign({}, D, (k = {}, k[b] = v ? "0" : "", k[y] = _ ? "0" : "", k.transform = (x.devicePixelRatio || 1) <= 1 ? "translate(" + p + "px, " + h + "px)" : "translate3d(" + p + "px, " + h + "px, 0)", k));
	}
	return Object.assign({}, D, (t = {}, t[b] = v ? h + "px" : "", t[y] = _ ? p + "px" : "", t.transform = "", t));
}
function ta(e) {
	var t = e.state, n = e.options, r = n.gpuAcceleration, i = r === void 0 ? !0 : r, a = n.adaptive, o = a === void 0 ? !0 : a, s = n.roundOffsets, c = s === void 0 ? !0 : s, l = {
		placement: xi(t.placement),
		variation: Zi(t.placement),
		popper: t.elements.popper,
		popperRect: t.rects.popper,
		gpuAcceleration: i,
		isFixed: t.options.strategy === "fixed"
	};
	t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, ea(Object.assign({}, l, {
		offsets: t.modifiersData.popperOffsets,
		position: t.options.strategy,
		adaptive: o,
		roundOffsets: c
	})))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, ea(Object.assign({}, l, {
		offsets: t.modifiersData.arrow,
		position: "absolute",
		adaptive: !1,
		roundOffsets: c
	})))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
var na = {
	name: "computeStyles",
	enabled: !0,
	phase: "beforeWrite",
	fn: ta,
	data: {}
}, ra = { passive: !0 };
function ia(e) {
	var t = e.state, n = e.instance, r = e.options, i = r.scroll, a = i === void 0 ? !0 : i, o = r.resize, s = o === void 0 ? !0 : o, c = Si(t.elements.popper), l = [].concat(t.scrollParents.reference, t.scrollParents.popper);
	return a && l.forEach(function(e) {
		e.addEventListener("scroll", n.update, ra);
	}), s && c.addEventListener("resize", n.update, ra), function() {
		a && l.forEach(function(e) {
			e.removeEventListener("scroll", n.update, ra);
		}), s && c.removeEventListener("resize", n.update, ra);
	};
}
var aa = {
	name: "eventListeners",
	enabled: !0,
	phase: "write",
	fn: function() {},
	effect: ia,
	data: {}
}, oa = {
	left: "right",
	right: "left",
	bottom: "top",
	top: "bottom"
};
function sa(e) {
	return e.replace(/left|right|bottom|top/g, function(e) {
		return oa[e];
	});
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js
var ca = {
	start: "end",
	end: "start"
};
function la(e) {
	return e.replace(/start|end/g, function(e) {
		return ca[e];
	});
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js
function ua(e) {
	var t = Si(e);
	return {
		scrollLeft: t.pageXOffset,
		scrollTop: t.pageYOffset
	};
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js
function da(e) {
	return ji(Li(e)).left + ua(e).scrollLeft;
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js
function fa(e, t) {
	var n = Si(e), r = Li(e), i = n.visualViewport, a = r.clientWidth, o = r.clientHeight, s = 0, c = 0;
	if (i) {
		a = i.width, o = i.height;
		var l = Ai();
		(l || !l && t === "fixed") && (s = i.offsetLeft, c = i.offsetTop);
	}
	return {
		width: a,
		height: o,
		x: s + da(e),
		y: c
	};
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js
function pa(e) {
	var t = Li(e), n = ua(e), r = e.ownerDocument?.body, i = Ei(t.scrollWidth, t.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0), a = Ei(t.scrollHeight, t.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0), o = -n.scrollLeft + da(e), s = -n.scrollTop;
	return Fi(r || t).direction === "rtl" && (o += Ei(t.clientWidth, r ? r.clientWidth : 0) - i), {
		width: i,
		height: a,
		x: o,
		y: s
	};
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js
function ma(e) {
	var t = Fi(e), n = t.overflow, r = t.overflowX, i = t.overflowY;
	return /auto|scroll|overlay|hidden/.test(n + i + r);
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js
function ha(e) {
	return [
		"html",
		"body",
		"#document"
	].indexOf(Pi(e)) >= 0 ? e.ownerDocument.body : wi(e) && ma(e) ? e : ha(Ri(e));
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js
function ga(e, t) {
	t === void 0 && (t = []);
	var n = ha(e), r = n === e.ownerDocument?.body, i = Si(n), a = r ? [i].concat(i.visualViewport || [], ma(n) ? n : []) : n, o = t.concat(a);
	return r ? o : o.concat(ga(Ri(a)));
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/rectToClientRect.js
function _a(e) {
	return Object.assign({}, e, {
		left: e.x,
		top: e.y,
		right: e.x + e.width,
		bottom: e.y + e.height
	});
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js
function va(e, t) {
	var n = ji(e, !1, t === "fixed");
	return n.top += e.clientTop, n.left += e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function ya(e, t, n) {
	return t === "viewport" ? _a(fa(e, n)) : Ci(t) ? va(t, n) : _a(pa(Li(e)));
}
function ba(e) {
	var t = ga(Ri(e)), n = ["absolute", "fixed"].indexOf(Fi(e).position) >= 0 && wi(e) ? Vi(e) : e;
	return Ci(n) ? t.filter(function(e) {
		return Ci(e) && Ni(e, n) && Pi(e) !== "body";
	}) : [];
}
function xa(e, t, n, r) {
	var i = t === "clippingParents" ? ba(e) : [].concat(t), a = [].concat(i, [n]), o = a[0], s = a.reduce(function(t, n) {
		var i = ya(e, n, r);
		return t.top = Ei(i.top, t.top), t.right = Di(i.right, t.right), t.bottom = Di(i.bottom, t.bottom), t.left = Ei(i.left, t.left), t;
	}, ya(e, o, r));
	return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/computeOffsets.js
function Sa(e) {
	var t = e.reference, n = e.element, r = e.placement, i = r ? xi(r) : null, a = r ? Zi(r) : null, o = t.x + t.width / 2 - n.width / 2, s = t.y + t.height / 2 - n.height / 2, c;
	switch (i) {
		case "top":
			c = {
				x: o,
				y: t.y - n.height
			};
			break;
		case ci:
			c = {
				x: o,
				y: t.y + t.height
			};
			break;
		case li:
			c = {
				x: t.x + t.width,
				y: s
			};
			break;
		case ui:
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
	var l = i ? Hi(i) : null;
	if (l != null) {
		var u = l === "y" ? "height" : "width";
		switch (a) {
			case pi:
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
function Ca(e, t) {
	t === void 0 && (t = {});
	var n = t, r = n.placement, i = r === void 0 ? e.placement : r, a = n.strategy, o = a === void 0 ? e.strategy : a, s = n.boundary, c = s === void 0 ? mi : s, l = n.rootBoundary, u = l === void 0 ? hi : l, d = n.elementContext, f = d === void 0 ? gi : d, p = n.altBoundary, m = p === void 0 ? !1 : p, h = n.padding, g = h === void 0 ? 0 : h, _ = Ki(typeof g == "number" ? H(g, fi) : g), v = f === "popper" ? _i : gi, y = e.rects.popper, b = e.elements[m ? v : f], x = xa(Ci(b) ? b : b.contextElement || Li(e.elements.popper), c, u, o), S = ji(e.elements.reference), C = Sa({
		reference: S,
		element: y,
		strategy: "absolute",
		placement: i
	}), w = _a(Object.assign({}, y, C)), T = f === "popper" ? w : S, E = {
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
function wa(e, t) {
	t === void 0 && (t = {});
	var n = t, r = n.placement, i = n.boundary, a = n.rootBoundary, o = n.padding, s = n.flipVariations, c = n.allowedAutoPlacements, l = c === void 0 ? yi : c, u = Zi(r), d = u ? s ? vi : vi.filter(function(e) {
		return Zi(e) === u;
	}) : fi, f = d.filter(function(e) {
		return l.indexOf(e) >= 0;
	});
	f.length === 0 && (f = d);
	var p = f.reduce(function(t, n) {
		return t[n] = Ca(e, {
			placement: n,
			boundary: i,
			rootBoundary: a,
			padding: o
		})[xi(n)], t;
	}, {});
	return Object.keys(p).sort(function(e, t) {
		return p[e] - p[t];
	});
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/flip.js
function Ta(e) {
	if (xi(e) === "auto") return [];
	var t = sa(e);
	return [
		la(e),
		t,
		la(t)
	];
}
function Ea(e) {
	var t = e.state, n = e.options, r = e.name;
	if (!t.modifiersData[r]._skip) {
		for (var i = n.mainAxis, a = i === void 0 ? !0 : i, o = n.altAxis, s = o === void 0 ? !0 : o, c = n.fallbackPlacements, l = n.padding, u = n.boundary, d = n.rootBoundary, f = n.altBoundary, p = n.flipVariations, m = p === void 0 ? !0 : p, h = n.allowedAutoPlacements, g = t.options.placement, _ = xi(g) === g, v = c || (_ || !m ? [sa(g)] : Ta(g)), y = [g].concat(v).reduce(function(e, n) {
			return e.concat(xi(n) === "auto" ? wa(t, {
				placement: n,
				boundary: u,
				rootBoundary: d,
				padding: l,
				flipVariations: m,
				allowedAutoPlacements: h
			}) : n);
		}, []), b = t.rects.reference, x = t.rects.popper, S = /* @__PURE__ */ new Map(), C = !0, w = y[0], T = 0; T < y.length; T++) {
			var E = y[T], D = xi(E), O = Zi(E) === pi, k = ["top", ci].indexOf(D) >= 0, ee = k ? "width" : "height", A = Ca(t, {
				placement: E,
				boundary: u,
				rootBoundary: d,
				altBoundary: f,
				padding: l
			}), j = k ? O ? li : ui : O ? ci : "top";
			b[ee] > x[ee] && (j = sa(j));
			var M = sa(j), N = [];
			if (a && N.push(A[D] <= 0), s && N.push(A[j] <= 0, A[M] <= 0), N.every(function(e) {
				return e;
			})) {
				w = E, C = !1;
				break;
			}
			S.set(E, N);
		}
		if (C) for (var P = m ? 3 : 1, F = function(e) {
			var t = y.find(function(t) {
				var n = S.get(t);
				if (n) return n.slice(0, e).every(function(e) {
					return e;
				});
			});
			if (t) return w = t, "break";
		}, te = P; te > 0 && F(te) !== "break"; te--);
		t.placement !== w && (t.modifiersData[r]._skip = !0, t.placement = w, t.reset = !0);
	}
}
var Da = {
	name: "flip",
	enabled: !0,
	phase: "main",
	fn: Ea,
	requiresIfExists: ["offset"],
	data: { _skip: !1 }
};
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/hide.js
function Oa(e, t, n) {
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
function ka(e) {
	return [
		"top",
		li,
		ci,
		ui
	].some(function(t) {
		return e[t] >= 0;
	});
}
function Aa(e) {
	var t = e.state, n = e.name, r = t.rects.reference, i = t.rects.popper, a = t.modifiersData.preventOverflow, o = Ca(t, { elementContext: "reference" }), s = Ca(t, { altBoundary: !0 }), c = Oa(o, r), l = Oa(s, i, a), u = ka(c), d = ka(l);
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
var ja = {
	name: "hide",
	enabled: !0,
	phase: "main",
	requiresIfExists: ["preventOverflow"],
	fn: Aa
};
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/offset.js
function Ma(e, t, n) {
	var r = xi(e), i = ["left", "top"].indexOf(r) >= 0 ? -1 : 1, a = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n, o = a[0], s = a[1];
	return o ||= 0, s = (s || 0) * i, ["left", "right"].indexOf(r) >= 0 ? {
		x: s,
		y: o
	} : {
		x: o,
		y: s
	};
}
function Na(e) {
	var t = e.state, n = e.options, r = e.name, i = n.offset, a = i === void 0 ? [0, 0] : i, o = yi.reduce(function(e, n) {
		return e[n] = Ma(n, t.rects, a), e;
	}, {}), s = o[t.placement], c = s.x, l = s.y;
	t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += c, t.modifiersData.popperOffsets.y += l), t.modifiersData[r] = o;
}
var Pa = {
	name: "offset",
	enabled: !0,
	phase: "main",
	requires: ["popperOffsets"],
	fn: Na
};
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/popperOffsets.js
function Fa(e) {
	var t = e.state, n = e.name;
	t.modifiersData[n] = Sa({
		reference: t.rects.reference,
		element: t.rects.popper,
		strategy: "absolute",
		placement: t.placement
	});
}
var Ia = {
	name: "popperOffsets",
	enabled: !0,
	phase: "read",
	fn: Fa,
	data: {}
};
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getAltAxis.js
function La(e) {
	return e === "x" ? "y" : "x";
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/preventOverflow.js
function Ra(e) {
	var t = e.state, n = e.options, r = e.name, i = n.mainAxis, a = i === void 0 ? !0 : i, o = n.altAxis, s = o === void 0 ? !1 : o, c = n.boundary, l = n.rootBoundary, u = n.altBoundary, d = n.padding, f = n.tether, p = f === void 0 ? !0 : f, m = n.tetherOffset, h = m === void 0 ? 0 : m, g = Ca(t, {
		boundary: c,
		rootBoundary: l,
		padding: d,
		altBoundary: u
	}), _ = xi(t.placement), v = Zi(t.placement), y = !v, b = Hi(_), x = La(b), S = t.modifiersData.popperOffsets, C = t.rects.reference, w = t.rects.popper, T = typeof h == "function" ? h(Object.assign({}, t.rects, { placement: t.placement })) : h, E = typeof T == "number" ? {
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
			var k = b === "y" ? "top" : ui, ee = b === "y" ? ci : li, A = b === "y" ? "height" : "width", j = S[b], M = j + g[k], N = j - g[ee], P = p ? -w[A] / 2 : 0, F = v === "start" ? C[A] : w[A], te = v === "start" ? -w[A] : -C[A], ne = t.elements.arrow, re = p && ne ? Mi(ne) : {
				width: 0,
				height: 0
			}, ie = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Gi(), ae = ie[k], oe = ie[ee], se = Ui(0, C[A], re[A]), ce = y ? C[A] / 2 - P - se - ae - E.mainAxis : F - se - ae - E.mainAxis, le = y ? -C[A] / 2 + P + se + oe + E.mainAxis : te + se + oe + E.mainAxis, ue = t.elements.arrow && Vi(t.elements.arrow), de = ue ? b === "y" ? ue.clientTop || 0 : ue.clientLeft || 0 : 0, fe = D?.[b] ?? 0, pe = j + ce - fe - de, me = j + le - fe, he = Ui(p ? Di(M, pe) : M, j, p ? Ei(N, me) : N);
			S[b] = he, O[b] = he - j;
		}
		if (s) {
			var ge = b === "x" ? "top" : ui, _e = b === "x" ? ci : li, ve = S[x], ye = x === "y" ? "height" : "width", be = ve + g[ge], xe = ve - g[_e], Se = ["top", ui].indexOf(_) !== -1, Ce = D?.[x] ?? 0, we = Se ? be : ve - C[ye] - w[ye] - Ce + E.altAxis, Te = Se ? ve + C[ye] + w[ye] - Ce - E.altAxis : xe, Ee = p && Se ? Wi(we, ve, Te) : Ui(p ? we : be, ve, p ? Te : xe);
			S[x] = Ee, O[x] = Ee - ve;
		}
		t.modifiersData[r] = O;
	}
}
var za = {
	name: "preventOverflow",
	enabled: !0,
	phase: "main",
	fn: Ra,
	requiresIfExists: ["offset"]
};
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js
function Ba(e) {
	return {
		scrollLeft: e.scrollLeft,
		scrollTop: e.scrollTop
	};
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js
function Va(e) {
	return e === Si(e) || !wi(e) ? ua(e) : Ba(e);
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js
function Ha(e) {
	var t = e.getBoundingClientRect(), n = Oi(t.width) / e.offsetWidth || 1, r = Oi(t.height) / e.offsetHeight || 1;
	return n !== 1 || r !== 1;
}
function Ua(e, t, n) {
	n === void 0 && (n = !1);
	var r = wi(t), i = wi(t) && Ha(t), a = Li(t), o = ji(e, i, n), s = {
		scrollLeft: 0,
		scrollTop: 0
	}, c = {
		x: 0,
		y: 0
	};
	return (r || !r && !n) && ((Pi(t) !== "body" || ma(a)) && (s = Va(t)), wi(t) ? (c = ji(t, !0), c.x += t.clientLeft, c.y += t.clientTop) : a && (c.x = da(a))), {
		x: o.left + s.scrollLeft - c.x,
		y: o.top + s.scrollTop - c.y,
		width: o.width,
		height: o.height
	};
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/orderModifiers.js
function Wa(e) {
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
function Ga(e) {
	var t = Wa(e);
	return bi.reduce(function(e, n) {
		return e.concat(t.filter(function(e) {
			return e.phase === n;
		}));
	}, []);
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/debounce.js
function Ka(e) {
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
function qa(e) {
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
var Ja = {
	placement: "bottom",
	modifiers: [],
	strategy: "absolute"
};
function Ya() {
	return ![...arguments].some(function(e) {
		return !(e && typeof e.getBoundingClientRect == "function");
	});
}
function Xa(e) {
	e === void 0 && (e = {});
	var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, i = t.defaultOptions, a = i === void 0 ? Ja : i;
	return function(e, t, n) {
		n === void 0 && (n = a);
		var i = {
			placement: "bottom",
			orderedModifiers: [],
			options: Object.assign({}, Ja, a),
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
					reference: Ci(e) ? ga(e) : e.contextElement ? ga(e.contextElement) : [],
					popper: ga(t)
				};
				var s = Ga(qa([].concat(r, i.options.modifiers)));
				return i.orderedModifiers = s.filter(function(e) {
					return e.enabled;
				}), l(), c.update();
			},
			forceUpdate: function() {
				if (!s) {
					var e = i.elements, t = e.reference, n = e.popper;
					if (Ya(t, n)) {
						i.rects = {
							reference: Ua(t, Vi(n), i.options.strategy === "fixed"),
							popper: Mi(n)
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
			update: Ka(function() {
				return new Promise(function(e) {
					c.forceUpdate(), e(i);
				});
			}),
			destroy: function() {
				u(), s = !0;
			}
		};
		if (!Ya(e, t)) return c;
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
var Za = Xa({ defaultModifiers: [
	ja,
	Ia,
	na,
	aa,
	Pa,
	Da,
	za,
	Xi
] }), Qa = function(e) {
	return {
		position: e,
		top: "0",
		left: "0",
		opacity: "0",
		pointerEvents: "none"
	};
}, $a = {
	name: "applyStyles",
	enabled: !1
}, eo = {
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
}, to = [];
function no(e, t, n) {
	var r = n === void 0 ? {} : n, i = r.enabled, a = i === void 0 ? !0 : i, o = r.placement, s = o === void 0 ? "bottom" : o, c = r.strategy, l = c === void 0 ? "absolute" : c, u = r.modifiers, d = u === void 0 ? to : u, f = B(r, [
		"enabled",
		"placement",
		"strategy",
		"modifiers"
	]), p = (0, R.useRef)(), m = (0, R.useCallback)(function() {
		var e;
		(e = p.current) == null || e.update();
	}, []), h = (0, R.useCallback)(function() {
		var e;
		(e = p.current) == null || e.forceUpdate();
	}, []), g = si((0, R.useState)({
		placement: s,
		update: m,
		forceUpdate: h,
		attributes: {},
		styles: {
			popper: Qa(l),
			arrow: {}
		}
	})), _ = g[0], v = g[1], y = (0, R.useMemo)(function() {
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
	return (0, R.useEffect)(function() {
		!p.current || !a || p.current.setOptions({
			placement: s,
			strategy: l,
			modifiers: [].concat(d, [y, $a])
		});
	}, [
		l,
		s,
		y,
		a
	]), (0, R.useEffect)(function() {
		if (!(!a || e == null || t == null)) return p.current = Za(e, t, z({}, f, {
			placement: s,
			strategy: l,
			modifiers: [].concat(d, [eo, y])
		})), function() {
			p.current != null && (p.current.destroy(), p.current = void 0, v(function(e) {
				return z({}, e, {
					attributes: {},
					styles: { popper: Qa(l) }
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
function ro(e, t) {
	if (e.contains) return e.contains(t);
	if (e.compareDocumentPosition) return e === t || !!(e.compareDocumentPosition(t) & 16);
}
//#endregion
//#region node_modules/.pnpm/warning@4.0.3/node_modules/warning/warning.js
var io = /* @__PURE__ */ o(((e, t) => {
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
function ao(e) {
	return e && "setState" in e ? _r.findDOMNode(e) : e ?? null;
}
//#endregion
//#region node_modules/.pnpm/react-overlays@5.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-overlays/esm/ownerDocument.js
var oo = (function(e) {
	return tr(ao(e));
}), so = /* @__PURE__ */ c(io()), co = 27, lo = function() {};
function uo(e) {
	return e.button === 0;
}
function fo(e) {
	return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
var po = function(e) {
	return e && ("current" in e ? e.current : e);
};
function mo(e, t, n) {
	var r = n === void 0 ? {} : n, i = r.disabled, a = r.clickTrigger, o = a === void 0 ? "click" : a, s = (0, R.useRef)(!1), c = t || lo, l = (0, R.useCallback)(function(t) {
		var n = po(e);
		(0, so.default)(!!n, "RootClose captured a close event but does not have a ref to compare it to. useRootClose(), should be passed a ref that resolves to a DOM node"), s.current = !n || fo(t) || !uo(t) || !!ro(n, (t.composedPath == null ? void 0 : t.composedPath()[0]) ?? t.target);
	}, [e]), u = Br(function(e) {
		s.current || c(e);
	}), d = Br(function(e) {
		e.keyCode === co && c(e);
	});
	(0, R.useEffect)(function() {
		if (!(i || e == null)) {
			var t = window.event, n = oo(po(e)), r = jr(n, o, l, !0), a = jr(n, o, function(e) {
				if (e === t) {
					t = void 0;
					return;
				}
				u(e);
			}), s = jr(n, "keyup", function(e) {
				if (e === t) {
					t = void 0;
					return;
				}
				d(e);
			}), c = [];
			return "ontouchstart" in n.documentElement && (c = [].slice.call(n.body.children).map(function(e) {
				return jr(e, "mousemove", lo);
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
function ho(e) {
	var t = {};
	return Array.isArray(e) ? (e?.forEach(function(e) {
		t[e.name] = e;
	}), t) : e || t;
}
function go(e) {
	return e === void 0 && (e = {}), Array.isArray(e) ? e : Object.keys(e).map(function(t) {
		return e[t].name = t, e[t];
	});
}
function _o(e) {
	var t = e.enabled, n = e.enableEvents, r = e.placement, i = e.flip, a = e.offset, o = e.fixed, s = e.containerPadding, c = e.arrowElement, l = e.popperConfig, u = l === void 0 ? {} : l, d = ho(u.modifiers);
	return z({}, u, {
		placement: r,
		enabled: t,
		strategy: o ? "fixed" : u.strategy,
		modifiers: go(z({}, d, {
			eventListeners: { enabled: n },
			preventOverflow: z({}, d.preventOverflow, { options: s ? z({ padding: s }, d.preventOverflow?.options) : d.preventOverflow?.options }),
			offset: { options: z({ offset: a }, d.offset?.options) },
			arrow: z({}, d.arrow, {
				enabled: !!c,
				options: z({}, d.arrow?.options, { element: c })
			}),
			flip: z({ enabled: !!i }, d.flip)
		}))
	});
}
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useMergedRefs.js
var vo = (e) => !e || typeof e == "function" ? e : (t) => {
	e.current = t;
};
function yo(e, t) {
	let n = vo(e), r = vo(t);
	return (e) => {
		n && n(e), r && r(e);
	};
}
function bo(e, t) {
	return (0, R.useMemo)(() => yo(e, t), [e, t]);
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/hasClass.js
function xo(e, t) {
	return e.classList ? !!t && e.classList.contains(t) : (" " + (e.className.baseVal || e.className) + " ").indexOf(" " + t + " ") !== -1;
}
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/usePopperMarginModifiers.js
function So(e) {
	var t = window.getComputedStyle(e);
	return {
		top: parseFloat(t.marginTop) || 0,
		right: parseFloat(t.marginRight) || 0,
		bottom: parseFloat(t.marginBottom) || 0,
		left: parseFloat(t.marginLeft) || 0
	};
}
function Co() {
	var e = (0, R.useRef)(null), t = (0, R.useRef)(null), n = (0, R.useRef)(null), r = er(void 0, "popover"), i = er(void 0, "dropdown-menu");
	return [(0, R.useCallback)(function(n) {
		!n || !(xo(n, r) || xo(n, i)) || (t.current = So(n), n.style.margin = "0", e.current = n);
	}, [r, i]), [
		(0, R.useMemo)(function() {
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
		(0, R.useMemo)(function() {
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
		(0, R.useMemo)(function() {
			return {
				name: "popoverArrowMargins",
				enabled: !0,
				phase: "main",
				fn: function() {},
				requiresIfExists: ["arrow"],
				effect: function(t) {
					var i = t.state;
					if (!(!e.current || !i.elements.arrow || !xo(e.current, r))) {
						if (i.modifiersData["arrow#persistent"]) {
							var a = So(i.elements.arrow), o = a.top, s = a.right, c = o || s;
							i.modifiersData["arrow#persistent"].padding = {
								top: c,
								left: c,
								right: c,
								bottom: c
							};
						} else n.current = So(i.elements.arrow);
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
var wo = /* @__PURE__ */ o(((e, t) => {
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
})), To = /* @__PURE__ */ o(((e, t) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = n;
	function n(e) {
		function t(t, n, r, i, a, o) {
			var s = i || "<<anonymous>>", c = o || r;
			if (n[r] == null) return t ? /* @__PURE__ */ Error("Required " + a + " `" + c + "` was not specified " + ("in `" + s + "`.")) : null;
			var l = [...arguments].slice(6);
			return e.apply(void 0, [
				n,
				r,
				s,
				a,
				c
			].concat(l));
		}
		var n = t.bind(null, !1);
		return n.isRequired = t.bind(null, !0), n;
	}
	t.exports = e.default;
})), Eo = /* @__PURE__ */ o(((e, t) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = i;
	var n = r(To());
	function r(e) {
		return e && e.__esModule ? e : { default: e };
	}
	function i() {
		var e = [...arguments];
		function t() {
			var t = [...arguments], n = null;
			return e.forEach(function(e) {
				if (n == null) {
					var r = e.apply(void 0, t);
					r != null && (n = r);
				}
			}), n;
		}
		return (0, n.default)(t);
	}
	t.exports = e.default;
})), U = /* @__PURE__ */ c(pr()), Do = [
	"as",
	"className",
	"type",
	"tooltip"
], Oo = {
	type: U.default.string,
	tooltip: U.default.bool,
	as: U.default.elementType
}, ko = /* @__PURE__ */ R.forwardRef(function(e, t) {
	var n = e.as, r = n === void 0 ? "div" : n, i = e.className, a = e.type, o = a === void 0 ? "valid" : a, s = e.tooltip, c = s === void 0 ? !1 : s, l = B(e, Do);
	return /* @__PURE__ */ R.createElement(r, z({}, l, {
		ref: t,
		className: (0, V.default)(i, o + "-" + (c ? "tooltip" : "feedback"))
	}));
});
ko.displayName = "Feedback", ko.propTypes = Oo;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormContext.js
var W = /* @__PURE__ */ R.createContext({ controlId: void 0 }), Ao = [
	"id",
	"bsPrefix",
	"bsCustomPrefix",
	"className",
	"type",
	"isValid",
	"isInvalid",
	"isStatic",
	"as"
], jo = /* @__PURE__ */ R.forwardRef(function(e, t) {
	var n = e.id, r = e.bsPrefix, i = e.bsCustomPrefix, a = e.className, o = e.type, s = o === void 0 ? "checkbox" : o, c = e.isValid, l = c === void 0 ? !1 : c, u = e.isInvalid, d = u === void 0 ? !1 : u, f = e.isStatic, p = e.as, m = p === void 0 ? "input" : p, h = B(e, Ao), g = (0, R.useContext)(W), _ = g.controlId, v = g.custom ? [i, "custom-control-input"] : [r, "form-check-input"], y = v[0], b = v[1];
	return r = er(y, b), /* @__PURE__ */ R.createElement(m, z({}, h, {
		ref: t,
		type: s,
		id: n || _,
		className: (0, V.default)(a, r, l && "is-valid", d && "is-invalid", f && "position-static")
	}));
});
jo.displayName = "FormCheckInput";
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormCheckLabel.js
var Mo = [
	"bsPrefix",
	"bsCustomPrefix",
	"className",
	"htmlFor"
], No = /* @__PURE__ */ R.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.bsCustomPrefix, i = e.className, a = e.htmlFor, o = B(e, Mo), s = (0, R.useContext)(W), c = s.controlId, l = s.custom ? [r, "custom-control-label"] : [n, "form-check-label"], u = l[0], d = l[1];
	return n = er(u, d), /* @__PURE__ */ R.createElement("label", z({}, o, {
		ref: t,
		htmlFor: a || c,
		className: (0, V.default)(i, n)
	}));
});
No.displayName = "FormCheckLabel", Eo();
var Po = [
	"id",
	"bsPrefix",
	"bsCustomPrefix",
	"inline",
	"disabled",
	"isValid",
	"isInvalid",
	"feedbackTooltip",
	"feedback",
	"className",
	"style",
	"title",
	"type",
	"label",
	"children",
	"custom",
	"as"
], Fo = /* @__PURE__ */ R.forwardRef(function(e, t) {
	var n = e.id, r = e.bsPrefix, i = e.bsCustomPrefix, a = e.inline, o = a === void 0 ? !1 : a, s = e.disabled, c = s === void 0 ? !1 : s, l = e.isValid, u = l === void 0 ? !1 : l, d = e.isInvalid, f = d === void 0 ? !1 : d, p = e.feedbackTooltip, m = p === void 0 ? !1 : p, h = e.feedback, g = e.className, _ = e.style, v = e.title, y = v === void 0 ? "" : v, b = e.type, x = b === void 0 ? "checkbox" : b, S = e.label, C = e.children, w = e.custom, T = e.as, E = T === void 0 ? "input" : T, D = B(e, Po), O = x === "switch" ? !0 : w, k = O ? [i, "custom-control"] : [r, "form-check"], ee = k[0], A = k[1];
	r = er(ee, A);
	var j = (0, R.useContext)(W).controlId, M = (0, R.useMemo)(function() {
		return {
			controlId: n || j,
			custom: O
		};
	}, [
		j,
		O,
		n
	]), N = O || S != null && S !== !1 && !C, P = /* @__PURE__ */ R.createElement(jo, z({}, D, {
		type: x === "switch" ? "checkbox" : x,
		ref: t,
		isValid: u,
		isInvalid: f,
		isStatic: !N,
		disabled: c,
		as: E
	}));
	return /* @__PURE__ */ R.createElement(W.Provider, { value: M }, /* @__PURE__ */ R.createElement("div", {
		style: _,
		className: (0, V.default)(g, r, O && "custom-" + x, o && r + "-inline")
	}, C || /* @__PURE__ */ R.createElement(R.Fragment, null, P, N && /* @__PURE__ */ R.createElement(No, { title: y }, S), (u || f) && /* @__PURE__ */ R.createElement(ko, {
		type: u ? "valid" : "invalid",
		tooltip: m
	}, h))));
});
Fo.displayName = "FormCheck", Fo.Input = jo, Fo.Label = No;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormFileInput.js
var Io = [
	"id",
	"bsPrefix",
	"bsCustomPrefix",
	"className",
	"isValid",
	"isInvalid",
	"lang",
	"as"
], Lo = /* @__PURE__ */ R.forwardRef(function(e, t) {
	var n = e.id, r = e.bsPrefix, i = e.bsCustomPrefix, a = e.className, o = e.isValid, s = e.isInvalid, c = e.lang, l = e.as, u = l === void 0 ? "input" : l, d = B(e, Io), f = (0, R.useContext)(W), p = f.controlId, m = f.custom, h = "file", g = m ? [i, "custom-file-input"] : [r, "form-control-file"], _ = g[0], v = g[1];
	return r = er(_, v), /* @__PURE__ */ R.createElement(u, z({}, d, {
		ref: t,
		id: n || p,
		type: h,
		lang: c,
		className: (0, V.default)(a, r, o && "is-valid", s && "is-invalid")
	}));
});
Lo.displayName = "FormFileInput";
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormFileLabel.js
var Ro = [
	"bsPrefix",
	"bsCustomPrefix",
	"className",
	"htmlFor"
], zo = /* @__PURE__ */ R.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.bsCustomPrefix, i = e.className, a = e.htmlFor, o = B(e, Ro), s = (0, R.useContext)(W), c = s.controlId, l = s.custom ? [r, "custom-file-label"] : [n, "form-file-label"], u = l[0], d = l[1];
	return n = er(u, d), /* @__PURE__ */ R.createElement("label", z({}, o, {
		ref: t,
		htmlFor: a || c,
		className: (0, V.default)(i, n),
		"data-browse": o["data-browse"]
	}));
});
zo.displayName = "FormFileLabel";
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormFile.js
var Bo = [
	"id",
	"bsPrefix",
	"bsCustomPrefix",
	"disabled",
	"isValid",
	"isInvalid",
	"feedbackTooltip",
	"feedback",
	"className",
	"style",
	"label",
	"children",
	"custom",
	"lang",
	"data-browse",
	"as",
	"inputAs"
], Vo = /* @__PURE__ */ R.forwardRef(function(e, t) {
	var n = e.id, r = e.bsPrefix, i = e.bsCustomPrefix, a = e.disabled, o = a === void 0 ? !1 : a, s = e.isValid, c = s === void 0 ? !1 : s, l = e.isInvalid, u = l === void 0 ? !1 : l, d = e.feedbackTooltip, f = d === void 0 ? !1 : d, p = e.feedback, m = e.className, h = e.style, g = e.label, _ = e.children, v = e.custom, y = e.lang, b = e["data-browse"], x = e.as, S = x === void 0 ? "div" : x, C = e.inputAs, w = C === void 0 ? "input" : C, T = B(e, Bo), E = v ? [i, "custom"] : [r, "form-file"], D = E[0], O = E[1];
	r = er(D, O);
	var k = "file", ee = (0, R.useContext)(W).controlId, A = (0, R.useMemo)(function() {
		return {
			controlId: n || ee,
			custom: v
		};
	}, [
		ee,
		v,
		n
	]), j = g != null && g !== !1 && !_, M = /* @__PURE__ */ R.createElement(Lo, z({}, T, {
		ref: t,
		isValid: c,
		isInvalid: u,
		disabled: o,
		as: w,
		lang: y
	}));
	return /* @__PURE__ */ R.createElement(W.Provider, { value: A }, /* @__PURE__ */ R.createElement(S, {
		style: h,
		className: (0, V.default)(m, r, v && "custom-" + k)
	}, _ || /* @__PURE__ */ R.createElement(R.Fragment, null, v ? /* @__PURE__ */ R.createElement(R.Fragment, null, M, j && /* @__PURE__ */ R.createElement(zo, { "data-browse": b }, g)) : /* @__PURE__ */ R.createElement(R.Fragment, null, j && /* @__PURE__ */ R.createElement(zo, null, g), M), (c || u) && /* @__PURE__ */ R.createElement(ko, {
		type: c ? "valid" : "invalid",
		tooltip: f
	}, p))));
});
Vo.displayName = "FormFile", Vo.Input = Lo, Vo.Label = zo;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormControl.js
var Ho = [
	"bsPrefix",
	"bsCustomPrefix",
	"type",
	"size",
	"htmlSize",
	"id",
	"className",
	"isValid",
	"isInvalid",
	"plaintext",
	"readOnly",
	"custom",
	"as"
], Uo = /* @__PURE__ */ R.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.bsCustomPrefix, i = e.type, a = e.size, o = e.htmlSize, s = e.id, c = e.className, l = e.isValid, u = l === void 0 ? !1 : l, d = e.isInvalid, f = d === void 0 ? !1 : d, p = e.plaintext, m = e.readOnly, h = e.custom, g = e.as, _ = g === void 0 ? "input" : g, v = B(e, Ho), y = (0, R.useContext)(W).controlId, b = h ? [r, "custom"] : [n, "form-control"], x = b[0], S = b[1];
	n = er(x, S);
	var C;
	if (p) {
		var w;
		C = (w = {}, w[n + "-plaintext"] = !0, w);
	} else if (i === "file") {
		var T;
		C = (T = {}, T[n + "-file"] = !0, T);
	} else if (i === "range") {
		var E;
		C = (E = {}, E[n + "-range"] = !0, E);
	} else if (_ === "select" && h) {
		var D;
		C = (D = {}, D[n + "-select"] = !0, D[n + "-select-" + a] = a, D);
	} else {
		var O;
		C = (O = {}, O[n] = !0, O[n + "-" + a] = a, O);
	}
	return /* @__PURE__ */ R.createElement(_, z({}, v, {
		type: i,
		size: o,
		ref: t,
		readOnly: m,
		id: s || y,
		className: (0, V.default)(c, C, u && "is-valid", f && "is-invalid")
	}));
});
Uo.displayName = "FormControl";
var Wo = Object.assign(Uo, { Feedback: ko }), Go = [
	"bsPrefix",
	"className",
	"children",
	"controlId",
	"as"
], Ko = /* @__PURE__ */ R.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.className, i = e.children, a = e.controlId, o = e.as, s = o === void 0 ? "div" : o, c = B(e, Go);
	n = er(n, "form-group");
	var l = (0, R.useMemo)(function() {
		return { controlId: a };
	}, [a]);
	return /* @__PURE__ */ R.createElement(W.Provider, { value: l }, /* @__PURE__ */ R.createElement(s, z({}, c, {
		ref: t,
		className: (0, V.default)(r, n)
	}), i));
});
Ko.displayName = "FormGroup";
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormLabel.js
var qo = [
	"as",
	"bsPrefix",
	"column",
	"srOnly",
	"className",
	"htmlFor"
], Jo = {
	column: !1,
	srOnly: !1
}, Yo = /* @__PURE__ */ R.forwardRef(function(e, t) {
	var n = e.as, r = n === void 0 ? "label" : n, i = e.bsPrefix, a = e.column, o = e.srOnly, s = e.className, c = e.htmlFor, l = B(e, qo), u = (0, R.useContext)(W).controlId;
	i = er(i, "form-label");
	var d = "col-form-label";
	typeof a == "string" && (d = d + " " + d + "-" + a);
	var f = (0, V.default)(s, i, o && "sr-only", a && d);
	return c ||= u, a ? /* @__PURE__ */ R.createElement(ai, z({
		ref: t,
		as: "label",
		className: f,
		htmlFor: c
	}, l)) : /* @__PURE__ */ R.createElement(r, z({
		ref: t,
		className: f,
		htmlFor: c
	}, l));
});
Yo.displayName = "FormLabel", Yo.defaultProps = Jo;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormText.js
var Xo = [
	"bsPrefix",
	"className",
	"as",
	"muted"
], Zo = /* @__PURE__ */ R.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.className, i = e.as, a = i === void 0 ? "small" : i, o = e.muted, s = B(e, Xo);
	return n = er(n, "form-text"), /* @__PURE__ */ R.createElement(a, z({}, s, {
		ref: t,
		className: (0, V.default)(r, n, o && "text-muted")
	}));
});
Zo.displayName = "FormText";
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Switch.js
var Qo = /* @__PURE__ */ R.forwardRef(function(e, t) {
	return /* @__PURE__ */ R.createElement(Fo, z({}, e, {
		ref: t,
		type: "switch"
	}));
});
Qo.displayName = "Switch", Qo.Input = Fo.Input, Qo.Label = Fo.Label;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Form.js
var $o = [
	"bsPrefix",
	"inline",
	"className",
	"validated",
	"as"
], es = Xr("form-row"), ts = { inline: !1 }, ns = /* @__PURE__ */ R.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.inline, i = e.className, a = e.validated, o = e.as, s = o === void 0 ? "form" : o, c = B(e, $o);
	return n = er(n, "form"), /* @__PURE__ */ R.createElement(s, z({}, c, {
		ref: t,
		className: (0, V.default)(i, a && "was-validated", r && n + "-inline")
	}));
});
ns.displayName = "Form", ns.defaultProps = ts, ns.Row = es, ns.Group = Ko, ns.Control = Wo, ns.Check = Fo, ns.File = Vo, ns.Switch = Qo, ns.Label = Yo, ns.Text = Zo;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Image.js
var rs = [
	"bsPrefix",
	"className",
	"fluid",
	"rounded",
	"roundedCircle",
	"thumbnail"
];
U.default.string, U.default.bool, U.default.bool, U.default.bool, U.default.bool;
var is = {
	fluid: !1,
	rounded: !1,
	roundedCircle: !1,
	thumbnail: !1
}, as = /* @__PURE__ */ R.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.className, i = e.fluid, a = e.rounded, o = e.roundedCircle, s = e.thumbnail, c = B(e, rs);
	n = er(n, "img");
	var l = (0, V.default)(i && n + "-fluid", a && "rounded", o && "rounded-circle", s && n + "-thumbnail");
	return /* @__PURE__ */ R.createElement("img", z({ ref: t }, c, { className: (0, V.default)(r, l) }));
});
as.displayName = "Image", as.defaultProps = is;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/InputGroup.js
var os = [
	"bsPrefix",
	"size",
	"hasValidation",
	"className",
	"as"
], ss = Xr("input-group-append"), cs = Xr("input-group-prepend"), ls = Xr("input-group-text", { Component: "span" }), us = function(e) {
	return /* @__PURE__ */ R.createElement(ls, null, /* @__PURE__ */ R.createElement("input", z({ type: "checkbox" }, e)));
}, ds = function(e) {
	return /* @__PURE__ */ R.createElement(ls, null, /* @__PURE__ */ R.createElement("input", z({ type: "radio" }, e)));
}, fs = /* @__PURE__ */ R.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.size, i = e.hasValidation, a = e.className, o = e.as, s = o === void 0 ? "div" : o, c = B(e, os);
	return n = er(n, "input-group"), /* @__PURE__ */ R.createElement(s, z({ ref: t }, c, { className: (0, V.default)(a, n, r && n + "-" + r, i && "has-validation") }));
});
fs.displayName = "InputGroup", fs.Text = ls, fs.Radio = ds, fs.Checkbox = us, fs.Append = ss, fs.Prepend = cs;
//#endregion
//#region node_modules/.pnpm/react-overlays@5.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-overlays/esm/useWaitForDOMRef.js
var ps = function(e) {
	var t;
	return typeof document > "u" ? null : e == null ? tr().body : (typeof e == "function" && (e = e()), e && "current" in e && (e = e.current), (t = e) != null && t.nodeType && e || null);
};
function ms(e, t) {
	var n = (0, R.useState)(function() {
		return ps(e);
	}), r = n[0], i = n[1];
	if (!r) {
		var a = ps(e);
		a && i(a);
	}
	return (0, R.useEffect)(function() {
		t && r && t(r);
	}, [t, r]), (0, R.useEffect)(function() {
		var t = ps(e);
		t !== r && i(t);
	}, [e, r]), r;
}
//#endregion
//#region node_modules/.pnpm/react-overlays@5.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-overlays/esm/Overlay.js
var hs = /* @__PURE__ */ R.forwardRef(function(e, t) {
	var n = e.flip, r = e.offset, i = e.placement, a = e.containerPadding, o = a === void 0 ? 5 : a, s = e.popperConfig, c = s === void 0 ? {} : s, l = e.transition, u = oi(), d = u[0], f = u[1], p = oi(), m = p[0], h = p[1], g = bo(f, t), _ = ms(e.container), v = ms(e.target), y = (0, R.useState)(!e.show), b = y[0], x = y[1], S = no(v, d, _o({
		placement: i,
		enableEvents: !!e.show,
		containerPadding: o || 5,
		flip: n,
		offset: r,
		arrowElement: m,
		popperConfig: c
	})), C = S.styles, w = S.attributes, T = B(S, ["styles", "attributes"]);
	e.show ? b && x(!1) : !e.transition && !b && x(!0);
	var E = function() {
		x(!0), e.onExited && e.onExited.apply(e, arguments);
	}, D = e.show || l && !b;
	if (mo(d, e.onHide, {
		disabled: !e.rootClose || e.rootCloseDisabled,
		clickTrigger: e.rootCloseEvent
	}), !D) return null;
	var O = e.children(z({}, T, {
		show: !!e.show,
		props: z({}, w.popper, {
			style: C.popper,
			ref: g
		}),
		arrowProps: z({}, w.arrow, {
			style: C.arrow,
			ref: h
		})
	}));
	if (l) {
		var k = e.onExit, ee = e.onExiting, A = e.onEnter, j = e.onEntering, M = e.onEntered;
		O = /* @__PURE__ */ R.createElement(l, {
			in: e.show,
			appear: !0,
			onExit: k,
			onExiting: ee,
			onExited: E,
			onEnter: A,
			onEntering: j,
			onEntered: M
		}, O);
	}
	return _ ? /* @__PURE__ */ _r.createPortal(O, _) : null;
});
hs.displayName = "Overlay", hs.propTypes = {
	show: U.default.bool,
	placement: U.default.oneOf(yi),
	target: U.default.any,
	container: U.default.any,
	flip: U.default.bool,
	children: U.default.func.isRequired,
	containerPadding: U.default.number,
	popperConfig: U.default.object,
	rootClose: U.default.bool,
	rootCloseEvent: U.default.oneOf(["click", "mousedown"]),
	rootCloseDisabled: U.default.bool,
	onHide: function(e) {
		var t = [...arguments].slice(1);
		if (e.rootClose) {
			var n;
			return (n = U.default.func).isRequired.apply(n, [e].concat(t));
		}
		return U.default.func.apply(U.default, [e].concat(t));
	},
	transition: U.default.elementType,
	onEnter: U.default.func,
	onEntering: U.default.func,
	onEntered: U.default.func,
	onExit: U.default.func,
	onExiting: U.default.func,
	onExited: U.default.func
};
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Overlay.js
var gs = [
	"children",
	"transition",
	"popperConfig"
], _s = [
	"props",
	"arrowProps",
	"show",
	"update",
	"forceUpdate",
	"placement",
	"state"
], vs = {
	transition: Gr,
	rootClose: !1,
	show: !1,
	placement: "top"
};
function ys(e, t) {
	var n = e.ref, r = t.ref;
	e.ref = n.__wrapped ||= function(e) {
		return n(ao(e));
	}, t.ref = r.__wrapped ||= function(e) {
		return r(ao(e));
	};
}
function bs(e) {
	var t = e.children, n = e.transition, r = e.popperConfig, i = r === void 0 ? {} : r, a = B(e, gs), o = (0, R.useRef)({}), s = Co(), c = s[0], l = s[1], u = n === !0 ? Gr : n || null;
	return /* @__PURE__ */ R.createElement(hs, z({}, a, {
		ref: c,
		popperConfig: z({}, i, { modifiers: l.concat(i.modifiers || []) }),
		transition: u
	}), function(e) {
		var r = e.props, i = e.arrowProps, a = e.show, s = e.update;
		e.forceUpdate;
		var c = e.placement, l = e.state, u = B(e, _s);
		ys(r, i);
		var d = Object.assign(o.current, {
			state: l,
			scheduleUpdate: s,
			placement: c,
			outOfBoundaries: l?.modifiersData.hide?.isReferenceHidden || !1
		});
		return typeof t == "function" ? t(z({}, u, r, {
			placement: c,
			show: a
		}, !n && a && { className: "show" }, {
			popper: d,
			arrowProps: i
		})) : /* @__PURE__ */ R.cloneElement(t, z({}, u, r, {
			placement: c,
			arrowProps: i,
			popper: d,
			className: (0, V.default)(t.props.className, !n && a && "show"),
			style: z({}, t.props.style, r.style)
		}));
	});
}
bs.defaultProps = vs;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/OverlayTrigger.js
var xs = [
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
], Ss = /* @__PURE__ */ function(e) {
	Yn(t, e);
	function t() {
		return e.apply(this, arguments) || this;
	}
	var n = t.prototype;
	return n.render = function() {
		return this.props.children;
	}, t;
}(R.Component);
function Cs(e) {
	return e && typeof e == "object" ? e : {
		show: e,
		hide: e
	};
}
function ws(e, t, n) {
	var r = t[0], i = r.currentTarget, a = r.relatedTarget || r.nativeEvent[n];
	(!a || a !== i) && !ro(i, a) && e.apply(void 0, t);
}
var Ts = {
	defaultShow: !1,
	trigger: ["hover", "focus"]
};
function Es(e) {
	var t = e.trigger, n = e.overlay, r = e.children, i = e.popperConfig, a = i === void 0 ? {} : i, o = e.show, s = e.defaultShow, c = s === void 0 ? !1 : s, l = e.onToggle, u = e.delay, d = e.placement, f = e.flip, p = f === void 0 ? d && d.indexOf("auto") !== -1 : f, m = B(e, xs), h = (0, R.useRef)(null), g = ni(), _ = (0, R.useRef)(""), v = Kn(o, c, l), y = v[0], b = v[1], x = Cs(u), S = typeof r == "function" ? {} : R.Children.only(r).props, C = S.onFocus, w = S.onBlur, T = S.onClick, E = (0, R.useCallback)(function() {
		return ao(h.current);
	}, []), D = (0, R.useCallback)(function() {
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
	]), O = (0, R.useCallback)(function() {
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
	]), k = (0, R.useCallback)(function() {
		D();
		var e = [...arguments];
		C?.apply(void 0, e);
	}, [D, C]), ee = (0, R.useCallback)(function() {
		O();
		var e = [...arguments];
		w?.apply(void 0, e);
	}, [O, w]), A = (0, R.useCallback)(function() {
		b(!y), T && T.apply(void 0, arguments);
	}, [
		T,
		b,
		y
	]), j = (0, R.useCallback)(function() {
		ws(D, [...arguments], "fromElement");
	}, [D]), M = (0, R.useCallback)(function() {
		ws(O, [...arguments], "toElement");
	}, [O]), N = t == null ? [] : [].concat(t), P = {};
	return N.indexOf("click") !== -1 && (P.onClick = A), N.indexOf("focus") !== -1 && (P.onFocus = k, P.onBlur = ee), N.indexOf("hover") !== -1 && (P.onMouseOver = j, P.onMouseOut = M), /* @__PURE__ */ R.createElement(R.Fragment, null, typeof r == "function" ? r(z({}, P, { ref: h })) : /* @__PURE__ */ R.createElement(Ss, { ref: h }, /* @__PURE__ */ (0, R.cloneElement)(r, P)), /* @__PURE__ */ R.createElement(bs, z({}, m, {
		show: y,
		onHide: O,
		flip: p,
		placement: d,
		popperConfig: a,
		target: E
	}), n));
}
Es.defaultProps = Ts;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Spinner.js
var Ds = [
	"bsPrefix",
	"variant",
	"animation",
	"size",
	"children",
	"as",
	"className"
], Os = /* @__PURE__ */ R.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.variant, i = e.animation, a = e.size, o = e.children, s = e.as, c = s === void 0 ? "div" : s, l = e.className, u = B(e, Ds);
	n = er(n, "spinner");
	var d = n + "-" + i;
	return /* @__PURE__ */ R.createElement(c, z({ ref: t }, u, { className: (0, V.default)(l, d, a && d + "-" + a, r && "text-" + r) }), o);
});
Os.displayName = "Spinner", wo();
var ks = [
	"bsPrefix",
	"placement",
	"className",
	"style",
	"children",
	"arrowProps",
	"popper",
	"show"
], As = { placement: "right" }, js = /* @__PURE__ */ R.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.placement, i = e.className, a = e.style, o = e.children, s = e.arrowProps;
	e.popper, e.show;
	var c = B(e, ks);
	n = er(n, "tooltip");
	var l = (r?.split("-") || [])[0];
	return /* @__PURE__ */ R.createElement("div", z({
		ref: t,
		style: a,
		role: "tooltip",
		"x-placement": l,
		className: (0, V.default)(i, n, "bs-tooltip-" + l)
	}, c), /* @__PURE__ */ R.createElement("div", z({ className: "arrow" }, s)), /* @__PURE__ */ R.createElement("div", { className: n + "-inner" }, o));
});
js.defaultProps = As, js.displayName = "Tooltip";
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/utils/newId.js
var Ms = 0, Ns = (e = "id") => (Ms += 1, `${e}${Ms}`), Ps = /* @__PURE__ */ function(e) {
	return e.MOVED = "MOVED", e.REMOVED = "REMOVED", e.FORMAT = "FORMAT", e.MOVED_AND_FORMAT = "MOVED_AND_FORMAT", e;
}({});
function Fs(e, t, n) {
	class r extends R.Component {
		static displayName = `withDeprecatedProps(${t})`;
		constructor(e) {
			super(e), this.transformProps = this.transformProps.bind(this);
		}
		warn(e) {}
		transformProps(e, r) {
			if (n[r] === void 0) return e[r] = this.props[r], e;
			let { deprType: i, newName: a, expect: o, transform: s, message: c } = n[r];
			switch (i) {
				case Ps.MOVED:
					this.warn(`${t}: The prop '${r}' has been moved to '${a}'.`), e[a] = this.props[r];
					break;
				case Ps.REMOVED:
					this.warn(`${t}: The prop '${r}' has been removed. '${c}'`);
					break;
				case Ps.FORMAT:
					o(this.props[r]) ? e[r] = this.props[r] : (this.warn(`${t}: The prop '${r}' expects a new format. ${c}`), e[r] = s(this.props[r], this.props));
					break;
				case Ps.MOVED_AND_FORMAT: {
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
			return /* @__PURE__ */ R.createElement(e, { ...n }, this.props.children || t);
		}
	}
	return r;
}
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Icon/index.js
function Is({ src: e, id: t, className: n, hidden: r, screenReaderText: i, svgAttrs: a, size: o, ...s }) {
	if (e) {
		let r = a["aria-label"] || a["aria-labelledby"], c = { ...a };
		return r || (c["aria-label"] = void 0, c["aria-hidden"] = !0), /* @__PURE__ */ R.createElement("span", {
			className: (0, V.default)("pgn__icon", { [`pgn__icon__${o}`]: !!o }, n),
			id: t,
			...s
		}, /* @__PURE__ */ R.createElement(e, {
			role: "img",
			focusable: !1,
			...c
		}), i && /* @__PURE__ */ R.createElement("span", { className: "sr-only" }, i));
	}
	return /* @__PURE__ */ R.createElement(R.Fragment, null, /* @__PURE__ */ R.createElement("span", {
		id: t || Ns("Icon"),
		className: n,
		"aria-hidden": r
	}), i && /* @__PURE__ */ R.createElement("span", { className: "sr-only" }, i));
}
Is.propTypes = {
	src: U.default.elementType,
	svgAttrs: U.default.shape({
		"aria-label": U.default.string,
		"aria-labelledby": U.default.string
	}),
	id: U.default.string,
	size: U.default.oneOf([
		"xs",
		"sm",
		"md",
		"lg"
	]),
	className: U.default.string,
	hidden: U.default.bool,
	screenReaderText: U.default.oneOfType([U.default.string, U.default.element])
}, Is.defaultProps = {
	src: null,
	svgAttrs: {},
	id: void 0,
	hidden: !0,
	screenReaderText: void 0,
	size: void 0,
	className: void 0
};
var Ls = Fs(Is, "Icon", { className: {
	deprType: Ps.FORMAT,
	expect: (e) => typeof e == "string",
	transform: (e) => Array.isArray(e) ? e.join(" ") : e,
	message: "It should be a string."
} }), Rs = (e) => /* @__PURE__ */ R.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ R.createElement("path", {
	d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2Zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59Z",
	fill: "currentColor"
})), zs = (e) => /* @__PURE__ */ R.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ R.createElement("path", {
	d: "M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2Z",
	fill: "currentColor"
})), Bs = (e) => /* @__PURE__ */ R.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ R.createElement("path", {
	d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9Z",
	fill: "currentColor"
})), Vs = (e) => /* @__PURE__ */ R.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ R.createElement("path", {
	d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41Z",
	fill: "currentColor"
})), Hs = (e) => /* @__PURE__ */ R.createElement("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	...e
}, /* @__PURE__ */ R.createElement("path", {
	d: "M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",
	fill: "currentColor"
})), Us = (e) => /* @__PURE__ */ R.createElement("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	...e
}, /* @__PURE__ */ R.createElement("path", {
	d: "M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z",
	fill: "currentColor"
})), Ws = (e) => /* @__PURE__ */ R.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ R.createElement("path", {
	d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8Z",
	fill: "currentColor"
})), Gs = (e) => /* @__PURE__ */ R.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ R.createElement("path", {
	xmlns: "http://www.w3.org/2000/svg",
	d: "M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z",
	fill: "currentColor"
})), Ks = [
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
], qs = [
	"hover",
	"click",
	"focus"
];
function Js(e) {
	return /* @__PURE__ */ R.createElement(bs, { ...e });
}
function Ys(e) {
	return /* @__PURE__ */ R.createElement(Es, { ...e }, e.children);
}
var Xs = U.default.oneOf(qs);
Js.propTypes = {
	children: U.default.node.isRequired,
	container: U.default.oneOfType([U.default.elementType, U.default.func]),
	onEnter: U.default.func,
	onEntered: U.default.func,
	onEntering: U.default.func,
	onExit: U.default.func,
	onExited: U.default.func,
	onExiting: U.default.func,
	onHide: U.default.func,
	placement: U.default.oneOf(Ks),
	popperConfig: U.default.shape({}),
	rootClose: U.default.bool,
	rootCloseEvent: U.default.oneOf(["click", "mousedown"]),
	show: U.default.bool,
	target: U.default.oneOfType([U.default.elementType, U.default.func]),
	transition: U.default.oneOfType([U.default.object, U.default.bool])
}, Ys.propTypes = {
	children: U.default.oneOfType([U.default.element, U.default.func]).isRequired,
	overlay: U.default.oneOfType([U.default.element, U.default.func]).isRequired,
	defaultShow: U.default.bool,
	delay: U.default.oneOfType([U.default.number, U.default.shape({})]),
	flip: U.default.bool,
	onHide: U.default.func,
	onToggle: U.default.func,
	placement: U.default.oneOf(Ks),
	popperConfig: U.default.shape({}),
	show: U.default.bool,
	target: U.default.instanceOf(EventTarget),
	trigger: U.default.oneOfType([Xs, U.default.arrayOf(Xs)])
}, Js.defaultProps = {
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
	transition: Gr
}, Ys.defaultProps = {
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
var Zs = [
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
], Qs = /* @__PURE__ */ R.forwardRef(({ children: e, variant: t, ...n }, r) => /* @__PURE__ */ R.createElement(js, {
	...n,
	className: (0, V.default)({ "tooltip-light": t === "light" }, n.className),
	ref: r
}, e));
Qs.propTypes = {
	...js.propTypes,
	id: U.default.string.isRequired,
	placement: U.default.oneOf(Zs),
	arrowProps: U.default.shape({
		ref: U.default.oneOfType([U.default.func, U.default.shape({ current: U.default.element })]),
		style: U.default.shape({})
	}),
	show: U.default.bool,
	popper: U.default.shape({}),
	bsPrefix: U.default.string,
	children: U.default.node,
	className: U.default.string,
	variant: U.default.string
}, Qs.defaultProps = {
	...Qs.defaultProps,
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
var $s = /* @__PURE__ */ R.forwardRef(({ className: e, alt: t, invertColors: n = !1, icon: r, src: i, iconClassNames: a, onClick: o = () => {}, size: s = "md", variant: c = "primary", iconAs: l = Ls, isActive: u = !1, children: d, ...f }, p) => {
	let m = n ? "inverse-" : "", h = u ? `${c}-` : "", g = l;
	return /* @__PURE__ */ R.createElement("button", {
		"aria-label": t,
		className: (0, V.default)("btn-icon", `btn-icon-${m}${c}`, `btn-icon-${s}`, { [`btn-icon-${m}${h}active`]: u }, e),
		onClick: o,
		type: "button",
		ref: p,
		...f
	}, /* @__PURE__ */ R.createElement("span", { className: "btn-icon__icon-container" }, g && /* @__PURE__ */ R.createElement(g, {
		className: (0, V.default)("btn-icon__icon", a),
		icon: r,
		src: i
	})));
});
function ec({ tooltipPlacement: e = "top", tooltipContent: t, ...n }) {
	let r = n.invertColors ? "inverse-" : "";
	return /* @__PURE__ */ R.createElement(Ys, {
		placement: e,
		overlay: /* @__PURE__ */ R.createElement(Qs, {
			id: `iconbutton-tooltip-${e}`,
			variant: r ? "light" : void 0
		}, t)
	}, /* @__PURE__ */ R.createElement($s, { ...n }));
}
$s.IconButtonWithTooltip = ec;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/core/utils.js
function tc(e) {
	return typeof e == "string" || e instanceof String;
}
function nc(e) {
	var t;
	return typeof e == "object" && !!e && (e == null || (t = e.constructor) == null ? void 0 : t.name) === "Object";
}
function rc(e, t) {
	return Array.isArray(t) ? rc(e, (e, n) => t.includes(n)) : Object.entries(e).reduce((e, n) => {
		let [r, i] = n;
		return t(i, r) && (e[r] = i), e;
	}, {});
}
var G = {
	NONE: "NONE",
	LEFT: "LEFT",
	FORCE_LEFT: "FORCE_LEFT",
	RIGHT: "RIGHT",
	FORCE_RIGHT: "FORCE_RIGHT"
};
function ic(e) {
	switch (e) {
		case G.LEFT: return G.FORCE_LEFT;
		case G.RIGHT: return G.FORCE_RIGHT;
		default: return e;
	}
}
function ac(e) {
	return e.replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1");
}
function oc(e, t) {
	if (t === e) return !0;
	let n = Array.isArray(t), r = Array.isArray(e), i;
	if (n && r) {
		if (t.length != e.length) return !1;
		for (i = 0; i < t.length; i++) if (!oc(t[i], e[i])) return !1;
		return !0;
	}
	if (n != r) return !1;
	if (t && e && typeof t == "object" && typeof e == "object") {
		let n = t instanceof Date, r = e instanceof Date;
		if (n && r) return t.getTime() == e.getTime();
		if (n != r) return !1;
		let a = t instanceof RegExp, o = e instanceof RegExp;
		if (a && o) return t.toString() == e.toString();
		if (a != o) return !1;
		let s = Object.keys(t);
		for (i = 0; i < s.length; i++) if (!Object.prototype.hasOwnProperty.call(e, s[i])) return !1;
		for (i = 0; i < s.length; i++) if (!oc(e[s[i]], t[s[i]])) return !1;
		return !0;
	} else if (t && e && typeof t == "function" && typeof e == "function") return t.toString() === e.toString();
	return !1;
}
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/core/action-details.js
var sc = class {
	constructor(e) {
		for (Object.assign(this, e); this.value.slice(0, this.startChangePos) !== this.oldValue.slice(0, this.startChangePos);) --this.oldSelection.start;
		if (this.insertedCount) for (; this.value.slice(this.cursorPos) !== this.oldValue.slice(this.oldSelection.end);) this.value.length - this.cursorPos < this.oldValue.length - this.oldSelection.end ? ++this.oldSelection.end : ++this.cursorPos;
	}
	get startChangePos() {
		return Math.min(this.cursorPos, this.oldSelection.start);
	}
	get insertedCount() {
		return this.cursorPos - this.startChangePos;
	}
	get inserted() {
		return this.value.substr(this.startChangePos, this.insertedCount);
	}
	get removedCount() {
		return Math.max(this.oldSelection.end - this.startChangePos || this.oldValue.length - this.value.length, 0);
	}
	get removed() {
		return this.oldValue.substr(this.startChangePos, this.removedCount);
	}
	get head() {
		return this.value.substring(0, this.startChangePos);
	}
	get tail() {
		return this.value.substring(this.startChangePos + this.insertedCount);
	}
	get removeDirection() {
		return !this.removedCount || this.insertedCount ? G.NONE : (this.oldSelection.end === this.cursorPos || this.oldSelection.start === this.cursorPos) && this.oldSelection.end === this.oldSelection.start ? G.RIGHT : G.LEFT;
	}
};
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/core/holder.js
function K(e, t) {
	return new K.InputMask(e, t);
}
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/factory.js
function cc(e) {
	if (e == null) throw Error("mask property should be defined");
	return e instanceof RegExp ? K.MaskedRegExp : tc(e) ? K.MaskedPattern : e === Date ? K.MaskedDate : e === Number ? K.MaskedNumber : Array.isArray(e) || e === Array ? K.MaskedDynamic : K.Masked && e.prototype instanceof K.Masked ? e : K.Masked && e instanceof K.Masked ? e.constructor : e instanceof Function ? K.MaskedFunction : (console.warn("Mask not found for mask", e), K.Masked);
}
function lc(e) {
	if (!e) throw Error("Options in not defined");
	if (K.Masked) {
		if (e.prototype instanceof K.Masked) return { mask: e };
		let { mask: t = void 0, ...n } = e instanceof K.Masked ? { mask: e } : nc(e) && e.mask instanceof K.Masked ? e : {};
		if (t) {
			let e = t.mask;
			return {
				...rc(t, (e, t) => !t.startsWith("_")),
				mask: t.constructor,
				_mask: e,
				...n
			};
		}
	}
	return nc(e) ? { ...e } : { mask: e };
}
function uc(e) {
	if (K.Masked && e instanceof K.Masked) return e;
	let t = lc(e), n = cc(t.mask);
	if (!n) throw Error("Masked class is not found for provided mask " + t.mask + ", appropriate module needs to be imported manually before creating mask.");
	return t.mask === n && delete t.mask, t._mask && (t.mask = t._mask, delete t._mask), new n(t);
}
K.createMask = uc;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/controls/mask-element.js
var dc = class {
	get selectionStart() {
		let e;
		try {
			e = this._unsafeSelectionStart;
		} catch {}
		return e ?? this.value.length;
	}
	get selectionEnd() {
		let e;
		try {
			e = this._unsafeSelectionEnd;
		} catch {}
		return e ?? this.value.length;
	}
	select(e, t) {
		if (!(e == null || t == null || e === this.selectionStart && t === this.selectionEnd)) try {
			this._unsafeSelect(e, t);
		} catch {}
	}
	get isActive() {
		return !1;
	}
};
K.MaskElement = dc;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/controls/html-mask-element.js
var fc = 90, pc = 89, mc = class extends dc {
	constructor(e) {
		super(), this.input = e, this._onKeydown = this._onKeydown.bind(this), this._onInput = this._onInput.bind(this), this._onBeforeinput = this._onBeforeinput.bind(this), this._onCompositionEnd = this._onCompositionEnd.bind(this);
	}
	get rootElement() {
		var e;
		return (e = this.input).getRootNode?.call(e) ?? document;
	}
	get isActive() {
		return this.input === this.rootElement.activeElement;
	}
	bindEvents(e) {
		this.input.addEventListener("keydown", this._onKeydown), this.input.addEventListener("input", this._onInput), this.input.addEventListener("beforeinput", this._onBeforeinput), this.input.addEventListener("compositionend", this._onCompositionEnd), this.input.addEventListener("drop", e.drop), this.input.addEventListener("click", e.click), this.input.addEventListener("focus", e.focus), this.input.addEventListener("blur", e.commit), this._handlers = e;
	}
	_onKeydown(e) {
		if (this._handlers.redo && (e.keyCode === fc && e.shiftKey && (e.metaKey || e.ctrlKey) || e.keyCode === pc && e.ctrlKey)) return e.preventDefault(), this._handlers.redo(e);
		if (this._handlers.undo && e.keyCode === fc && (e.metaKey || e.ctrlKey)) return e.preventDefault(), this._handlers.undo(e);
		e.isComposing || this._handlers.selectionChange(e);
	}
	_onBeforeinput(e) {
		if (e.inputType === "historyUndo" && this._handlers.undo) return e.preventDefault(), this._handlers.undo(e);
		if (e.inputType === "historyRedo" && this._handlers.redo) return e.preventDefault(), this._handlers.redo(e);
	}
	_onCompositionEnd(e) {
		this._handlers.input(e);
	}
	_onInput(e) {
		e.isComposing || this._handlers.input(e);
	}
	unbindEvents() {
		this.input.removeEventListener("keydown", this._onKeydown), this.input.removeEventListener("input", this._onInput), this.input.removeEventListener("beforeinput", this._onBeforeinput), this.input.removeEventListener("compositionend", this._onCompositionEnd), this.input.removeEventListener("drop", this._handlers.drop), this.input.removeEventListener("click", this._handlers.click), this.input.removeEventListener("focus", this._handlers.focus), this.input.removeEventListener("blur", this._handlers.commit), this._handlers = {};
	}
};
K.HTMLMaskElement = mc;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/controls/html-input-mask-element.js
var hc = class extends mc {
	constructor(e) {
		super(e), this.input = e;
	}
	get _unsafeSelectionStart() {
		return this.input.selectionStart == null ? this.value.length : this.input.selectionStart;
	}
	get _unsafeSelectionEnd() {
		return this.input.selectionEnd;
	}
	_unsafeSelect(e, t) {
		this.input.setSelectionRange(e, t);
	}
	get value() {
		return this.input.value;
	}
	set value(e) {
		this.input.value = e;
	}
};
K.HTMLMaskElement = mc;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/controls/html-contenteditable-mask-element.js
var gc = class extends mc {
	get _unsafeSelectionStart() {
		let e = this.rootElement, t = e.getSelection && e.getSelection(), n = t && t.anchorOffset, r = t && t.focusOffset;
		return r == null || n == null || n < r ? n : r;
	}
	get _unsafeSelectionEnd() {
		let e = this.rootElement, t = e.getSelection && e.getSelection(), n = t && t.anchorOffset, r = t && t.focusOffset;
		return r == null || n == null || n > r ? n : r;
	}
	_unsafeSelect(e, t) {
		if (!this.rootElement.createRange) return;
		let n = this.rootElement.createRange();
		n.setStart(this.input.firstChild || this.input, e), n.setEnd(this.input.lastChild || this.input, t);
		let r = this.rootElement, i = r.getSelection && r.getSelection();
		i && (i.removeAllRanges(), i.addRange(n));
	}
	get value() {
		return this.input.textContent || "";
	}
	set value(e) {
		this.input.textContent = e;
	}
};
K.HTMLContenteditableMaskElement = gc;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/controls/input-history.js
var q = class e {
	constructor() {
		this.states = [], this.currentIndex = 0;
	}
	get currentState() {
		return this.states[this.currentIndex];
	}
	get isEmpty() {
		return this.states.length === 0;
	}
	push(t) {
		this.currentIndex < this.states.length - 1 && (this.states.length = this.currentIndex + 1), this.states.push(t), this.states.length > e.MAX_LENGTH && this.states.shift(), this.currentIndex = this.states.length - 1;
	}
	go(e) {
		return this.currentIndex = Math.min(Math.max(this.currentIndex + e, 0), this.states.length - 1), this.currentState;
	}
	undo() {
		return this.go(-1);
	}
	redo() {
		return this.go(1);
	}
	clear() {
		this.states.length = 0, this.currentIndex = 0;
	}
};
q.MAX_LENGTH = 100, K.InputMask = class {
	constructor(e, t) {
		this.el = e instanceof dc ? e : e.isContentEditable && e.tagName !== "INPUT" && e.tagName !== "TEXTAREA" ? new gc(e) : new hc(e), this.masked = uc(t), this._listeners = {}, this._value = "", this._unmaskedValue = "", this._rawInputValue = "", this.history = new q(), this._saveSelection = this._saveSelection.bind(this), this._onInput = this._onInput.bind(this), this._onChange = this._onChange.bind(this), this._onDrop = this._onDrop.bind(this), this._onFocus = this._onFocus.bind(this), this._onClick = this._onClick.bind(this), this._onUndo = this._onUndo.bind(this), this._onRedo = this._onRedo.bind(this), this.alignCursor = this.alignCursor.bind(this), this.alignCursorFriendly = this.alignCursorFriendly.bind(this), this._bindEvents(), this.updateValue(), this._onChange();
	}
	maskEquals(e) {
		return e == null || this.masked?.maskEquals(e);
	}
	get mask() {
		return this.masked.mask;
	}
	set mask(e) {
		if (this.maskEquals(e)) return;
		if (!(e instanceof K.Masked) && this.masked.constructor === cc(e)) {
			this.masked.updateOptions({ mask: e });
			return;
		}
		let t = e instanceof K.Masked ? e : uc({ mask: e });
		t.unmaskedValue = this.masked.unmaskedValue, this.masked = t;
	}
	get value() {
		return this._value;
	}
	set value(e) {
		this.value !== e && (this.masked.value = e, this.updateControl("auto"));
	}
	get unmaskedValue() {
		return this._unmaskedValue;
	}
	set unmaskedValue(e) {
		this.unmaskedValue !== e && (this.masked.unmaskedValue = e, this.updateControl("auto"));
	}
	get rawInputValue() {
		return this._rawInputValue;
	}
	set rawInputValue(e) {
		this.rawInputValue !== e && (this.masked.rawInputValue = e, this.updateControl(), this.alignCursor());
	}
	get typedValue() {
		return this.masked.typedValue;
	}
	set typedValue(e) {
		this.masked.typedValueEquals(e) || (this.masked.typedValue = e, this.updateControl("auto"));
	}
	get displayValue() {
		return this.masked.displayValue;
	}
	_bindEvents() {
		this.el.bindEvents({
			selectionChange: this._saveSelection,
			input: this._onInput,
			drop: this._onDrop,
			click: this._onClick,
			focus: this._onFocus,
			commit: this._onChange,
			undo: this._onUndo,
			redo: this._onRedo
		});
	}
	_unbindEvents() {
		this.el && this.el.unbindEvents();
	}
	_fireEvent(e, t) {
		let n = this._listeners[e];
		n && n.forEach((e) => e(t));
	}
	get selectionStart() {
		return this._cursorChanging ? this._changingCursorPos : this.el.selectionStart;
	}
	get cursorPos() {
		return this._cursorChanging ? this._changingCursorPos : this.el.selectionEnd;
	}
	set cursorPos(e) {
		!this.el || !this.el.isActive || (this.el.select(e, e), this._saveSelection());
	}
	_saveSelection() {
		this.displayValue !== this.el.value && console.warn("Element value was changed outside of mask. Syncronize mask using `mask.updateValue()` to work properly."), this._selection = {
			start: this.selectionStart,
			end: this.cursorPos
		};
	}
	updateValue() {
		this.masked.value = this.el.value, this._value = this.masked.value, this._unmaskedValue = this.masked.unmaskedValue, this._rawInputValue = this.masked.rawInputValue;
	}
	updateControl(e) {
		let t = this.masked.unmaskedValue, n = this.masked.value, r = this.masked.rawInputValue, i = this.displayValue, a = this.unmaskedValue !== t || this.value !== n || this._rawInputValue !== r;
		this._unmaskedValue = t, this._value = n, this._rawInputValue = r, this.el.value !== i && (this.el.value = i), e === "auto" ? this.alignCursor() : e != null && (this.cursorPos = e), a && this._fireChangeEvents(), !this._historyChanging && (a || this.history.isEmpty) && this.history.push({
			unmaskedValue: t,
			selection: {
				start: this.selectionStart,
				end: this.cursorPos
			}
		});
	}
	updateOptions(e) {
		let { mask: t, ...n } = e, r = !this.maskEquals(t), i = this.masked.optionsIsChanged(n);
		r && (this.mask = t), i && this.masked.updateOptions(n), (r || i) && this.updateControl();
	}
	updateCursor(e) {
		e != null && (this.cursorPos = e, this._delayUpdateCursor(e));
	}
	_delayUpdateCursor(e) {
		this._abortUpdateCursor(), this._changingCursorPos = e, this._cursorChanging = setTimeout(() => {
			this.el && (this.cursorPos = this._changingCursorPos, this._abortUpdateCursor());
		}, 10);
	}
	_fireChangeEvents() {
		this._fireEvent("accept", this._inputEvent), this.masked.isComplete && this._fireEvent("complete", this._inputEvent);
	}
	_abortUpdateCursor() {
		this._cursorChanging && (clearTimeout(this._cursorChanging), delete this._cursorChanging);
	}
	alignCursor() {
		this.cursorPos = this.masked.nearestInputPos(this.masked.nearestInputPos(this.cursorPos, G.LEFT));
	}
	alignCursorFriendly() {
		this.selectionStart === this.cursorPos && this.alignCursor();
	}
	on(e, t) {
		return this._listeners[e] || (this._listeners[e] = []), this._listeners[e].push(t), this;
	}
	off(e, t) {
		if (!this._listeners[e]) return this;
		if (!t) return delete this._listeners[e], this;
		let n = this._listeners[e].indexOf(t);
		return n >= 0 && this._listeners[e].splice(n, 1), this;
	}
	_onInput(e) {
		this._inputEvent = e, this._abortUpdateCursor();
		let t = new sc({
			value: this.el.value,
			cursorPos: this.cursorPos,
			oldValue: this.displayValue,
			oldSelection: this._selection
		}), n = this.masked.rawInputValue, r = this.masked.splice(t.startChangePos, t.removed.length, t.inserted, t.removeDirection, {
			input: !0,
			raw: !0
		}).offset, i = n === this.masked.rawInputValue ? t.removeDirection : G.NONE, a = this.masked.nearestInputPos(t.startChangePos + r, i);
		i !== G.NONE && (a = this.masked.nearestInputPos(a, G.NONE)), this.updateControl(a), delete this._inputEvent;
	}
	_onChange() {
		this.displayValue !== this.el.value && this.updateValue(), this.masked.doCommit(), this.updateControl(), this._saveSelection();
	}
	_onDrop(e) {
		e.preventDefault(), e.stopPropagation();
	}
	_onFocus(e) {
		this.alignCursorFriendly();
	}
	_onClick(e) {
		this.alignCursorFriendly();
	}
	_onUndo() {
		this._applyHistoryState(this.history.undo());
	}
	_onRedo() {
		this._applyHistoryState(this.history.redo());
	}
	_applyHistoryState(e) {
		e && (this._historyChanging = !0, this.unmaskedValue = e.unmaskedValue, this.el.select(e.selection.start, e.selection.end), this._saveSelection(), this._historyChanging = !1);
	}
	destroy() {
		this._unbindEvents(), this._listeners.length = 0, delete this.el;
	}
};
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/core/change-details.js
var J = class e {
	static normalize(t) {
		return Array.isArray(t) ? t : [t, new e()];
	}
	constructor(e) {
		Object.assign(this, {
			inserted: "",
			rawInserted: "",
			tailShift: 0,
			skip: !1
		}, e);
	}
	aggregate(e) {
		return this.inserted += e.inserted, this.rawInserted += e.rawInserted, this.tailShift += e.tailShift, this.skip = this.skip || e.skip, this;
	}
	get offset() {
		return this.tailShift + this.inserted.length;
	}
	get consumed() {
		return !!this.rawInserted || this.skip;
	}
	equals(e) {
		return this.inserted === e.inserted && this.tailShift === e.tailShift && this.rawInserted === e.rawInserted && this.skip === e.skip;
	}
};
K.ChangeDetails = J;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/core/continuous-tail-details.js
var _c = class {
	constructor(e, t, n) {
		e === void 0 && (e = ""), t === void 0 && (t = 0), this.value = e, this.from = t, this.stop = n;
	}
	toString() {
		return this.value;
	}
	extend(e) {
		this.value += String(e);
	}
	appendTo(e) {
		return e.append(this.toString(), { tail: !0 }).aggregate(e._appendPlaceholder());
	}
	get state() {
		return {
			value: this.value,
			from: this.from,
			stop: this.stop
		};
	}
	set state(e) {
		Object.assign(this, e);
	}
	unshift(e) {
		if (!this.value.length || e != null && this.from >= e) return "";
		let t = this.value[0];
		return this.value = this.value.slice(1), t;
	}
	shift() {
		if (!this.value.length) return "";
		let e = this.value[this.value.length - 1];
		return this.value = this.value.slice(0, -1), e;
	}
}, vc = class e {
	constructor(t) {
		this._value = "", this._update({
			...e.DEFAULTS,
			...t
		}), this._initialized = !0;
	}
	updateOptions(e) {
		this.optionsIsChanged(e) && this.withValueRefresh(this._update.bind(this, e));
	}
	_update(e) {
		Object.assign(this, e);
	}
	get state() {
		return {
			_value: this.value,
			_rawInputValue: this.rawInputValue
		};
	}
	set state(e) {
		this._value = e._value;
	}
	reset() {
		this._value = "";
	}
	get value() {
		return this._value;
	}
	set value(e) {
		this.resolve(e, { input: !0 });
	}
	resolve(e, t) {
		t === void 0 && (t = { input: !0 }), this.reset(), this.append(e, t, ""), this.doCommit();
	}
	get unmaskedValue() {
		return this.value;
	}
	set unmaskedValue(e) {
		this.resolve(e, {});
	}
	get typedValue() {
		return this.parse ? this.parse(this.value, this) : this.unmaskedValue;
	}
	set typedValue(e) {
		this.format ? this.value = this.format(e, this) : this.unmaskedValue = String(e);
	}
	get rawInputValue() {
		return this.extractInput(0, this.displayValue.length, { raw: !0 });
	}
	set rawInputValue(e) {
		this.resolve(e, { raw: !0 });
	}
	get displayValue() {
		return this.value;
	}
	get isComplete() {
		return !0;
	}
	get isFilled() {
		return this.isComplete;
	}
	nearestInputPos(e, t) {
		return e;
	}
	totalInputPositions(e, t) {
		return e === void 0 && (e = 0), t === void 0 && (t = this.displayValue.length), Math.min(this.displayValue.length, t - e);
	}
	extractInput(e, t, n) {
		return e === void 0 && (e = 0), t === void 0 && (t = this.displayValue.length), this.displayValue.slice(e, t);
	}
	extractTail(e, t) {
		return e === void 0 && (e = 0), t === void 0 && (t = this.displayValue.length), new _c(this.extractInput(e, t), e);
	}
	appendTail(e) {
		return tc(e) && (e = new _c(String(e))), e.appendTo(this);
	}
	_appendCharRaw(e, t) {
		return e ? (this._value += e, new J({
			inserted: e,
			rawInserted: e
		})) : new J();
	}
	_appendChar(e, t, n) {
		t === void 0 && (t = {});
		let r = this.state, i;
		if ([e, i] = this.doPrepareChar(e, t), e && (i = i.aggregate(this._appendCharRaw(e, t)), !i.rawInserted && this.autofix === "pad")) {
			let n = this.state;
			this.state = r;
			let a = this.pad(t), o = this._appendCharRaw(e, t);
			a = a.aggregate(o), o.rawInserted || a.equals(i) ? i = a : this.state = n;
		}
		if (i.inserted) {
			let e, a = this.doValidate(t) !== !1;
			if (a && n != null) {
				let t = this.state;
				if (this.overwrite === !0) {
					e = n.state;
					for (let e = 0; e < i.rawInserted.length; ++e) n.unshift(this.displayValue.length - i.tailShift);
				}
				let r = this.appendTail(n);
				if (a = r.rawInserted.length === n.toString().length, !(a && r.inserted) && this.overwrite === "shift") {
					this.state = t, e = n.state;
					for (let e = 0; e < i.rawInserted.length; ++e) n.shift();
					r = this.appendTail(n), a = r.rawInserted.length === n.toString().length;
				}
				a && r.inserted && (this.state = t);
			}
			a || (i = new J(), this.state = r, n && e && (n.state = e));
		}
		return i;
	}
	_appendPlaceholder() {
		return new J();
	}
	_appendEager() {
		return new J();
	}
	append(e, t, n) {
		if (!tc(e)) throw Error("value should be string");
		let r = tc(n) ? new _c(String(n)) : n;
		t != null && t.tail && (t._beforeTailState = this.state);
		let i;
		[e, i] = this.doPrepare(e, t);
		for (let n = 0; n < e.length; ++n) {
			let a = this._appendChar(e[n], t, r);
			if (!a.rawInserted && !this.doSkipInvalid(e[n], t, r)) break;
			i.aggregate(a);
		}
		return (this.eager === !0 || this.eager === "append") && t != null && t.input && e && i.aggregate(this._appendEager()), r != null && (i.tailShift += this.appendTail(r).tailShift), i;
	}
	remove(e, t) {
		return e === void 0 && (e = 0), t === void 0 && (t = this.displayValue.length), this._value = this.displayValue.slice(0, e) + this.displayValue.slice(t), new J();
	}
	withValueRefresh(e) {
		if (this._refreshing || !this._initialized) return e();
		this._refreshing = !0;
		let t = this.rawInputValue, n = this.value, r = e();
		return this.rawInputValue = t, this.value && this.value !== n && n.indexOf(this.value) === 0 && (this.append(n.slice(this.displayValue.length), {}, ""), this.doCommit()), delete this._refreshing, r;
	}
	runIsolated(e) {
		if (this._isolated || !this._initialized) return e(this);
		this._isolated = !0;
		let t = this.state, n = e(this);
		return this.state = t, delete this._isolated, n;
	}
	doSkipInvalid(e, t, n) {
		return !!this.skipInvalid;
	}
	doPrepare(e, t) {
		return t === void 0 && (t = {}), J.normalize(this.prepare ? this.prepare(e, this, t) : e);
	}
	doPrepareChar(e, t) {
		return t === void 0 && (t = {}), J.normalize(this.prepareChar ? this.prepareChar(e, this, t) : e);
	}
	doValidate(e) {
		return (!this.validate || this.validate(this.value, this, e)) && (!this.parent || this.parent.doValidate(e));
	}
	doCommit() {
		this.commit && this.commit(this.value, this);
	}
	splice(e, t, n, r, i) {
		n === void 0 && (n = ""), r === void 0 && (r = G.NONE), i === void 0 && (i = { input: !0 });
		let a = e + t, o = this.extractTail(a), s = this.eager === !0 || this.eager === "remove", c;
		s && (r = ic(r), c = this.extractInput(0, a, { raw: !0 }));
		let l = e, u = new J();
		if (r !== G.NONE && (l = this.nearestInputPos(e, t > 1 && e !== 0 && !s ? G.NONE : r), u.tailShift = l - e), u.aggregate(this.remove(l)), s && r !== G.NONE && c === this.rawInputValue) if (r === G.FORCE_LEFT) {
			let e;
			for (; c === this.rawInputValue && (e = this.displayValue.length);) u.aggregate(new J({ tailShift: -1 })).aggregate(this.remove(e - 1));
		} else r === G.FORCE_RIGHT && o.unshift();
		return u.aggregate(this.append(n, i, o));
	}
	maskEquals(e) {
		return this.mask === e;
	}
	optionsIsChanged(e) {
		return !oc(this, e);
	}
	typedValueEquals(t) {
		let n = this.typedValue;
		return t === n || e.EMPTY_VALUES.includes(t) && e.EMPTY_VALUES.includes(n) || (this.format ? this.format(t, this) === this.format(this.typedValue, this) : !1);
	}
	pad(e) {
		return new J();
	}
};
vc.DEFAULTS = { skipInvalid: !0 }, vc.EMPTY_VALUES = [
	void 0,
	null,
	""
], K.Masked = vc;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/pattern/chunk-tail-details.js
var yc = class e {
	constructor(e, t) {
		e === void 0 && (e = []), t === void 0 && (t = 0), this.chunks = e, this.from = t;
	}
	toString() {
		return this.chunks.map(String).join("");
	}
	extend(t) {
		if (!String(t)) return;
		t = tc(t) ? new _c(String(t)) : t;
		let n = this.chunks[this.chunks.length - 1], r = n && (n.stop === t.stop || t.stop == null) && t.from === n.from + n.toString().length;
		if (t instanceof _c) r ? n.extend(t.toString()) : this.chunks.push(t);
		else if (t instanceof e) {
			if (t.stop == null) {
				let e;
				for (; t.chunks.length && t.chunks[0].stop == null;) e = t.chunks.shift(), e.from += t.from, this.extend(e);
			}
			t.toString() && (t.stop = t.blockIndex, this.chunks.push(t));
		}
	}
	appendTo(t) {
		if (!(t instanceof K.MaskedPattern)) return new _c(this.toString()).appendTo(t);
		let n = new J();
		for (let r = 0; r < this.chunks.length; ++r) {
			let i = this.chunks[r], a = t._mapPosToBlock(t.displayValue.length), o = i.stop, s;
			if (o != null && (!a || a.index <= o) && ((i instanceof e || t._stops.indexOf(o) >= 0) && n.aggregate(t._appendPlaceholder(o)), s = i instanceof e && t._blocks[o]), s) {
				let e = s.appendTail(i);
				n.aggregate(e);
				let r = i.toString().slice(e.rawInserted.length);
				r && n.aggregate(t.append(r, { tail: !0 }));
			} else n.aggregate(t.append(i.toString(), { tail: !0 }));
		}
		return n;
	}
	get state() {
		return {
			chunks: this.chunks.map((e) => e.state),
			from: this.from,
			stop: this.stop,
			blockIndex: this.blockIndex
		};
	}
	set state(t) {
		let { chunks: n, ...r } = t;
		Object.assign(this, r), this.chunks = n.map((t) => {
			let n = "chunks" in t ? new e() : new _c();
			return n.state = t, n;
		});
	}
	unshift(e) {
		if (!this.chunks.length || e != null && this.from >= e) return "";
		let t = e == null ? e : e - this.from, n = 0;
		for (; n < this.chunks.length;) {
			let e = this.chunks[n], r = e.unshift(t);
			if (e.toString()) {
				if (!r) break;
				++n;
			} else this.chunks.splice(n, 1);
			if (r) return r;
		}
		return "";
	}
	shift() {
		if (!this.chunks.length) return "";
		let e = this.chunks.length - 1;
		for (; 0 <= e;) {
			let t = this.chunks[e], n = t.shift();
			if (t.toString()) {
				if (!n) break;
				--e;
			} else this.chunks.splice(e, 1);
			if (n) return n;
		}
		return "";
	}
}, bc = class {
	constructor(e, t) {
		this.masked = e, this._log = [];
		let { offset: n, index: r } = e._mapPosToBlock(t) || (t < 0 ? {
			index: 0,
			offset: 0
		} : {
			index: this.masked._blocks.length,
			offset: 0
		});
		this.offset = n, this.index = r, this.ok = !1;
	}
	get block() {
		return this.masked._blocks[this.index];
	}
	get pos() {
		return this.masked._blockStartPos(this.index) + this.offset;
	}
	get state() {
		return {
			index: this.index,
			offset: this.offset,
			ok: this.ok
		};
	}
	set state(e) {
		Object.assign(this, e);
	}
	pushState() {
		this._log.push(this.state);
	}
	popState() {
		let e = this._log.pop();
		return e && (this.state = e), e;
	}
	bindBlock() {
		this.block || (this.index < 0 && (this.index = 0, this.offset = 0), this.index >= this.masked._blocks.length && (this.index = this.masked._blocks.length - 1, this.offset = this.block.displayValue.length));
	}
	_pushLeft(e) {
		for (this.pushState(), this.bindBlock(); 0 <= this.index; --this.index, this.offset = (t = this.block)?.displayValue.length || 0) {
			var t;
			if (e()) return this.ok = !0;
		}
		return this.ok = !1;
	}
	_pushRight(e) {
		for (this.pushState(), this.bindBlock(); this.index < this.masked._blocks.length; ++this.index, this.offset = 0) if (e()) return this.ok = !0;
		return this.ok = !1;
	}
	pushLeftBeforeFilled() {
		return this._pushLeft(() => {
			if (!(this.block.isFixed || !this.block.value) && (this.offset = this.block.nearestInputPos(this.offset, G.FORCE_LEFT), this.offset !== 0)) return !0;
		});
	}
	pushLeftBeforeInput() {
		return this._pushLeft(() => {
			if (!this.block.isFixed) return this.offset = this.block.nearestInputPos(this.offset, G.LEFT), !0;
		});
	}
	pushLeftBeforeRequired() {
		return this._pushLeft(() => {
			if (!(this.block.isFixed || this.block.isOptional && !this.block.value)) return this.offset = this.block.nearestInputPos(this.offset, G.LEFT), !0;
		});
	}
	pushRightBeforeFilled() {
		return this._pushRight(() => {
			if (!(this.block.isFixed || !this.block.value) && (this.offset = this.block.nearestInputPos(this.offset, G.FORCE_RIGHT), this.offset !== this.block.value.length)) return !0;
		});
	}
	pushRightBeforeInput() {
		return this._pushRight(() => {
			if (!this.block.isFixed) return this.offset = this.block.nearestInputPos(this.offset, G.NONE), !0;
		});
	}
	pushRightBeforeRequired() {
		return this._pushRight(() => {
			if (!(this.block.isFixed || this.block.isOptional && !this.block.value)) return this.offset = this.block.nearestInputPos(this.offset, G.NONE), !0;
		});
	}
}, xc = class {
	constructor(e) {
		Object.assign(this, e), this._value = "", this.isFixed = !0;
	}
	get value() {
		return this._value;
	}
	get unmaskedValue() {
		return this.isUnmasking ? this.value : "";
	}
	get rawInputValue() {
		return this._isRawInput ? this.value : "";
	}
	get displayValue() {
		return this.value;
	}
	reset() {
		this._isRawInput = !1, this._value = "";
	}
	remove(e, t) {
		return e === void 0 && (e = 0), t === void 0 && (t = this._value.length), this._value = this._value.slice(0, e) + this._value.slice(t), this._value || (this._isRawInput = !1), new J();
	}
	nearestInputPos(e, t) {
		t === void 0 && (t = G.NONE);
		let n = this._value.length;
		switch (t) {
			case G.LEFT:
			case G.FORCE_LEFT: return 0;
			case G.NONE:
			case G.RIGHT:
			case G.FORCE_RIGHT:
			default: return n;
		}
	}
	totalInputPositions(e, t) {
		return e === void 0 && (e = 0), t === void 0 && (t = this._value.length), this._isRawInput ? t - e : 0;
	}
	extractInput(e, t, n) {
		return e === void 0 && (e = 0), t === void 0 && (t = this._value.length), n === void 0 && (n = {}), n.raw && this._isRawInput && this._value.slice(e, t) || "";
	}
	get isComplete() {
		return !0;
	}
	get isFilled() {
		return !!this._value;
	}
	_appendChar(e, t) {
		if (t === void 0 && (t = {}), this.isFilled) return new J();
		let n = this.eager === !0 || this.eager === "append", r = this.char === e && (this.isUnmasking || t.input || t.raw) && (!t.raw || !n) && !t.tail, i = new J({
			inserted: this.char,
			rawInserted: r ? this.char : ""
		});
		return this._value = this.char, this._isRawInput = r && (t.raw || t.input), i;
	}
	_appendEager() {
		return this._appendChar(this.char, { tail: !0 });
	}
	_appendPlaceholder() {
		let e = new J();
		return this.isFilled || (this._value = e.inserted = this.char), e;
	}
	extractTail() {
		return new _c("");
	}
	appendTail(e) {
		return tc(e) && (e = new _c(String(e))), e.appendTo(this);
	}
	append(e, t, n) {
		let r = this._appendChar(e[0], t);
		return n != null && (r.tailShift += this.appendTail(n).tailShift), r;
	}
	doCommit() {}
	get state() {
		return {
			_value: this._value,
			_rawInputValue: this.rawInputValue
		};
	}
	set state(e) {
		this._value = e._value, this._isRawInput = !!e._rawInputValue;
	}
	pad(e) {
		return this._appendPlaceholder();
	}
}, Sc = class {
	constructor(e) {
		let { parent: t, isOptional: n, placeholderChar: r, displayChar: i, lazy: a, eager: o, ...s } = e;
		this.masked = uc(s), Object.assign(this, {
			parent: t,
			isOptional: n,
			placeholderChar: r,
			displayChar: i,
			lazy: a,
			eager: o
		});
	}
	reset() {
		this.isFilled = !1, this.masked.reset();
	}
	remove(e, t) {
		return e === void 0 && (e = 0), t === void 0 && (t = this.value.length), e === 0 && t >= 1 ? (this.isFilled = !1, this.masked.remove(e, t)) : new J();
	}
	get value() {
		return this.masked.value || (this.isFilled && !this.isOptional ? this.placeholderChar : "");
	}
	get unmaskedValue() {
		return this.masked.unmaskedValue;
	}
	get rawInputValue() {
		return this.masked.rawInputValue;
	}
	get displayValue() {
		return this.masked.value && this.displayChar || this.value;
	}
	get isComplete() {
		return !!this.masked.value || this.isOptional;
	}
	_appendChar(e, t) {
		if (t === void 0 && (t = {}), this.isFilled) return new J();
		let n = this.masked.state, r = this.masked._appendChar(e, this.currentMaskFlags(t));
		return r.inserted && this.doValidate(t) === !1 && (r = new J(), this.masked.state = n), !r.inserted && !this.isOptional && !this.lazy && !t.input && (r.inserted = this.placeholderChar), r.skip = !r.inserted && !this.isOptional, this.isFilled = !!r.inserted, r;
	}
	append(e, t, n) {
		return this.masked.append(e, this.currentMaskFlags(t), n);
	}
	_appendPlaceholder() {
		return this.isFilled || this.isOptional ? new J() : (this.isFilled = !0, new J({ inserted: this.placeholderChar }));
	}
	_appendEager() {
		return new J();
	}
	extractTail(e, t) {
		return this.masked.extractTail(e, t);
	}
	appendTail(e) {
		return this.masked.appendTail(e);
	}
	extractInput(e, t, n) {
		return e === void 0 && (e = 0), t === void 0 && (t = this.value.length), this.masked.extractInput(e, t, n);
	}
	nearestInputPos(e, t) {
		t === void 0 && (t = G.NONE);
		let n = this.value.length, r = Math.min(Math.max(e, 0), n);
		switch (t) {
			case G.LEFT:
			case G.FORCE_LEFT: return this.isComplete ? r : 0;
			case G.RIGHT:
			case G.FORCE_RIGHT: return this.isComplete ? r : n;
			case G.NONE:
			default: return r;
		}
	}
	totalInputPositions(e, t) {
		return e === void 0 && (e = 0), t === void 0 && (t = this.value.length), this.value.slice(e, t).length;
	}
	doValidate(e) {
		return this.masked.doValidate(this.currentMaskFlags(e)) && (!this.parent || this.parent.doValidate(this.currentMaskFlags(e)));
	}
	doCommit() {
		this.masked.doCommit();
	}
	get state() {
		return {
			_value: this.value,
			_rawInputValue: this.rawInputValue,
			masked: this.masked.state,
			isFilled: this.isFilled
		};
	}
	set state(e) {
		this.masked.state = e.masked, this.isFilled = e.isFilled;
	}
	currentMaskFlags(e) {
		var t;
		return {
			...e,
			_beforeTailState: (e == null || (t = e._beforeTailState) == null ? void 0 : t.masked) || e?._beforeTailState
		};
	}
	pad(e) {
		return new J();
	}
};
Sc.DEFAULT_DEFINITIONS = {
	0: /\d/,
	a: /[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
	"*": /./
}, K.MaskedRegExp = class extends vc {
	updateOptions(e) {
		super.updateOptions(e);
	}
	_update(e) {
		let t = e.mask;
		t && (e.validate = (e) => e.search(t) >= 0), super._update(e);
	}
};
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/pattern.js
var Cc = class e extends vc {
	constructor(t) {
		super({
			...e.DEFAULTS,
			...t,
			definitions: Object.assign({}, Sc.DEFAULT_DEFINITIONS, t?.definitions)
		});
	}
	updateOptions(e) {
		super.updateOptions(e);
	}
	_update(e) {
		e.definitions = Object.assign({}, this.definitions, e.definitions), super._update(e), this._rebuildMask();
	}
	_rebuildMask() {
		let t = this.definitions;
		this._blocks = [], this.exposeBlock = void 0, this._stops = [], this._maskedBlocks = {};
		let n = this.mask;
		if (!n || !t) return;
		let r = !1, i = !1;
		for (let a = 0; a < n.length; ++a) {
			if (this.blocks) {
				let e = n.slice(a), t = Object.keys(this.blocks).filter((t) => e.indexOf(t) === 0);
				t.sort((e, t) => t.length - e.length);
				let r = t[0];
				if (r) {
					let { expose: e, repeat: t, ...n } = lc(this.blocks[r]), i = {
						lazy: this.lazy,
						eager: this.eager,
						placeholderChar: this.placeholderChar,
						displayChar: this.displayChar,
						overwrite: this.overwrite,
						autofix: this.autofix,
						...n,
						repeat: t,
						parent: this
					}, o = t == null ? uc(i) : new K.RepeatBlock(i);
					o && (this._blocks.push(o), e && (this.exposeBlock = o), this._maskedBlocks[r] || (this._maskedBlocks[r] = []), this._maskedBlocks[r].push(this._blocks.length - 1)), a += r.length - 1;
					continue;
				}
			}
			let o = n[a], s = o in t;
			if (o === e.STOP_CHAR) {
				this._stops.push(this._blocks.length);
				continue;
			}
			if (o === "{" || o === "}") {
				r = !r;
				continue;
			}
			if (o === "[" || o === "]") {
				i = !i;
				continue;
			}
			if (o === e.ESCAPE_CHAR) {
				if (++a, o = n[a], !o) break;
				s = !1;
			}
			let c = s ? new Sc({
				isOptional: i,
				lazy: this.lazy,
				eager: this.eager,
				placeholderChar: this.placeholderChar,
				displayChar: this.displayChar,
				...lc(t[o]),
				parent: this
			}) : new xc({
				char: o,
				eager: this.eager,
				isUnmasking: r
			});
			this._blocks.push(c);
		}
	}
	get state() {
		return {
			...super.state,
			_blocks: this._blocks.map((e) => e.state)
		};
	}
	set state(e) {
		if (!e) {
			this.reset();
			return;
		}
		let { _blocks: t, ...n } = e;
		this._blocks.forEach((e, n) => e.state = t[n]), super.state = n;
	}
	reset() {
		super.reset(), this._blocks.forEach((e) => e.reset());
	}
	get isComplete() {
		return this.exposeBlock ? this.exposeBlock.isComplete : this._blocks.every((e) => e.isComplete);
	}
	get isFilled() {
		return this._blocks.every((e) => e.isFilled);
	}
	get isFixed() {
		return this._blocks.every((e) => e.isFixed);
	}
	get isOptional() {
		return this._blocks.every((e) => e.isOptional);
	}
	doCommit() {
		this._blocks.forEach((e) => e.doCommit()), super.doCommit();
	}
	get unmaskedValue() {
		return this.exposeBlock ? this.exposeBlock.unmaskedValue : this._blocks.reduce((e, t) => e += t.unmaskedValue, "");
	}
	set unmaskedValue(e) {
		if (this.exposeBlock) {
			let t = this.extractTail(this._blockStartPos(this._blocks.indexOf(this.exposeBlock)) + this.exposeBlock.displayValue.length);
			this.exposeBlock.unmaskedValue = e, this.appendTail(t), this.doCommit();
		} else super.unmaskedValue = e;
	}
	get value() {
		return this.exposeBlock ? this.exposeBlock.value : this._blocks.reduce((e, t) => e += t.value, "");
	}
	set value(e) {
		if (this.exposeBlock) {
			let t = this.extractTail(this._blockStartPos(this._blocks.indexOf(this.exposeBlock)) + this.exposeBlock.displayValue.length);
			this.exposeBlock.value = e, this.appendTail(t), this.doCommit();
		} else super.value = e;
	}
	get typedValue() {
		return this.exposeBlock ? this.exposeBlock.typedValue : super.typedValue;
	}
	set typedValue(e) {
		if (this.exposeBlock) {
			let t = this.extractTail(this._blockStartPos(this._blocks.indexOf(this.exposeBlock)) + this.exposeBlock.displayValue.length);
			this.exposeBlock.typedValue = e, this.appendTail(t), this.doCommit();
		} else super.typedValue = e;
	}
	get displayValue() {
		return this._blocks.reduce((e, t) => e += t.displayValue, "");
	}
	appendTail(e) {
		return super.appendTail(e).aggregate(this._appendPlaceholder());
	}
	_appendEager() {
		let e = new J(), t = this._mapPosToBlock(this.displayValue.length)?.index;
		if (t == null) return e;
		this._blocks[t].isFilled && ++t;
		for (let n = t; n < this._blocks.length; ++n) {
			let t = this._blocks[n]._appendEager();
			if (!t.inserted) break;
			e.aggregate(t);
		}
		return e;
	}
	_appendCharRaw(e, t) {
		t === void 0 && (t = {});
		let n = this._mapPosToBlock(this.displayValue.length), r = new J();
		if (!n) return r;
		for (let a = n.index, o; o = this._blocks[a]; ++a) {
			var i;
			let n = o._appendChar(e, {
				...t,
				_beforeTailState: (i = t._beforeTailState) == null || (i = i._blocks) == null ? void 0 : i[a]
			});
			if (r.aggregate(n), n.consumed) break;
		}
		return r;
	}
	extractTail(e, t) {
		e === void 0 && (e = 0), t === void 0 && (t = this.displayValue.length);
		let n = new yc();
		return e === t || this._forEachBlocksInRange(e, t, (e, t, r, i) => {
			let a = e.extractTail(r, i);
			a.stop = this._findStopBefore(t), a.from = this._blockStartPos(t), a instanceof yc && (a.blockIndex = t), n.extend(a);
		}), n;
	}
	extractInput(e, t, n) {
		if (e === void 0 && (e = 0), t === void 0 && (t = this.displayValue.length), n === void 0 && (n = {}), e === t) return "";
		let r = "";
		return this._forEachBlocksInRange(e, t, (e, t, i, a) => {
			r += e.extractInput(i, a, n);
		}), r;
	}
	_findStopBefore(e) {
		let t;
		for (let n = 0; n < this._stops.length; ++n) {
			let r = this._stops[n];
			if (r <= e) t = r;
			else break;
		}
		return t;
	}
	_appendPlaceholder(e) {
		let t = new J();
		if (this.lazy && e == null) return t;
		let n = this._mapPosToBlock(this.displayValue.length);
		if (!n) return t;
		let r = n.index, i = e ?? this._blocks.length;
		return this._blocks.slice(r, i).forEach((n) => {
			(!n.lazy || e != null) && t.aggregate(n._appendPlaceholder(n._blocks?.length));
		}), t;
	}
	_mapPosToBlock(e) {
		let t = "";
		for (let n = 0; n < this._blocks.length; ++n) {
			let r = this._blocks[n], i = t.length;
			if (t += r.displayValue, e <= t.length) return {
				index: n,
				offset: e - i
			};
		}
	}
	_blockStartPos(e) {
		return this._blocks.slice(0, e).reduce((e, t) => e += t.displayValue.length, 0);
	}
	_forEachBlocksInRange(e, t, n) {
		t === void 0 && (t = this.displayValue.length);
		let r = this._mapPosToBlock(e);
		if (r) {
			let e = this._mapPosToBlock(t), i = e && r.index === e.index, a = r.offset, o = e && i ? e.offset : this._blocks[r.index].displayValue.length;
			if (n(this._blocks[r.index], r.index, a, o), e && !i) {
				for (let t = r.index + 1; t < e.index; ++t) n(this._blocks[t], t, 0, this._blocks[t].displayValue.length);
				n(this._blocks[e.index], e.index, 0, e.offset);
			}
		}
	}
	remove(e, t) {
		e === void 0 && (e = 0), t === void 0 && (t = this.displayValue.length);
		let n = super.remove(e, t);
		return this._forEachBlocksInRange(e, t, (e, t, r, i) => {
			n.aggregate(e.remove(r, i));
		}), n;
	}
	nearestInputPos(e, t) {
		if (t === void 0 && (t = G.NONE), !this._blocks.length) return 0;
		let n = new bc(this, e);
		if (t === G.NONE) return n.pushRightBeforeInput() || (n.popState(), n.pushLeftBeforeInput()) ? n.pos : this.displayValue.length;
		if (t === G.LEFT || t === G.FORCE_LEFT) {
			if (t === G.LEFT) {
				if (n.pushRightBeforeFilled(), n.ok && n.pos === e) return e;
				n.popState();
			}
			if (n.pushLeftBeforeInput(), n.pushLeftBeforeRequired(), n.pushLeftBeforeFilled(), t === G.LEFT) {
				if (n.pushRightBeforeInput(), n.pushRightBeforeRequired(), n.ok && n.pos <= e || (n.popState(), n.ok && n.pos <= e)) return n.pos;
				n.popState();
			}
			return n.ok ? n.pos : t === G.FORCE_LEFT ? 0 : (n.popState(), n.ok || (n.popState(), n.ok) ? n.pos : 0);
		}
		return t === G.RIGHT || t === G.FORCE_RIGHT ? (n.pushRightBeforeInput(), n.pushRightBeforeRequired(), n.pushRightBeforeFilled() ? n.pos : t === G.FORCE_RIGHT ? this.displayValue.length : (n.popState(), n.ok || (n.popState(), n.ok) ? n.pos : this.nearestInputPos(e, G.LEFT))) : e;
	}
	totalInputPositions(e, t) {
		e === void 0 && (e = 0), t === void 0 && (t = this.displayValue.length);
		let n = 0;
		return this._forEachBlocksInRange(e, t, (e, t, r, i) => {
			n += e.totalInputPositions(r, i);
		}), n;
	}
	maskedBlock(e) {
		return this.maskedBlocks(e)[0];
	}
	maskedBlocks(e) {
		let t = this._maskedBlocks[e];
		return t ? t.map((e) => this._blocks[e]) : [];
	}
	pad(e) {
		let t = new J();
		return this._forEachBlocksInRange(0, this.displayValue.length, (n) => t.aggregate(n.pad(e))), t;
	}
};
Cc.DEFAULTS = {
	...vc.DEFAULTS,
	lazy: !0,
	placeholderChar: "_"
}, Cc.STOP_CHAR = "`", Cc.ESCAPE_CHAR = "\\", Cc.InputDefinition = Sc, Cc.FixedDefinition = xc, K.MaskedPattern = Cc;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/range.js
var wc = class extends Cc {
	get _matchFrom() {
		return this.maxLength - String(this.from).length;
	}
	constructor(e) {
		super(e);
	}
	updateOptions(e) {
		super.updateOptions(e);
	}
	_update(e) {
		let { to: t = this.to || 0, from: n = this.from || 0, maxLength: r = this.maxLength || 0, autofix: i = this.autofix, ...a } = e;
		this.to = t, this.from = n, this.maxLength = Math.max(String(t).length, r), this.autofix = i;
		let o = String(this.from).padStart(this.maxLength, "0"), s = String(this.to).padStart(this.maxLength, "0"), c = 0;
		for (; c < s.length && s[c] === o[c];) ++c;
		a.mask = s.slice(0, c).replace(/0/g, "\\0") + "0".repeat(this.maxLength - c), super._update(a);
	}
	get isComplete() {
		return super.isComplete && !!this.value;
	}
	boundaries(e) {
		let t = "", n = "", [, r, i] = e.match(/^(\D*)(\d*)(\D*)/) || [];
		return i && (t = "0".repeat(r.length) + i, n = "9".repeat(r.length) + i), t = t.padEnd(this.maxLength, "0"), n = n.padEnd(this.maxLength, "9"), [t, n];
	}
	doPrepareChar(e, t) {
		t === void 0 && (t = {});
		let n;
		return [e, n] = super.doPrepareChar(e.replace(/\D/g, ""), t), e || (n.skip = !this.isComplete), [e, n];
	}
	_appendCharRaw(e, t) {
		if (t === void 0 && (t = {}), !this.autofix || this.value.length + 1 > this.maxLength) return super._appendCharRaw(e, t);
		let n = String(this.from).padStart(this.maxLength, "0"), r = String(this.to).padStart(this.maxLength, "0"), [i, a] = this.boundaries(this.value + e);
		return Number(a) < this.from ? super._appendCharRaw(n[this.value.length], t) : Number(i) > this.to ? !t.tail && this.autofix === "pad" && this.value.length + 1 < this.maxLength ? super._appendCharRaw(n[this.value.length], t).aggregate(this._appendCharRaw(e, t)) : super._appendCharRaw(r[this.value.length], t) : super._appendCharRaw(e, t);
	}
	doValidate(e) {
		let t = this.value;
		if (t.search(/[^0]/) === -1 && t.length <= this._matchFrom) return !0;
		let [n, r] = this.boundaries(t);
		return this.from <= Number(r) && Number(n) <= this.to && super.doValidate(e);
	}
	pad(e) {
		let t = new J();
		if (this.value.length === this.maxLength) return t;
		let n = this.value, r = this.maxLength - this.value.length;
		if (r) {
			this.reset();
			for (let n = 0; n < r; ++n) t.aggregate(super._appendCharRaw("0", e));
			n.split("").forEach((e) => this._appendCharRaw(e));
		}
		return t;
	}
};
K.MaskedRange = wc;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/date.js
var Tc = "d{.}`m{.}`Y", Ec = class e extends Cc {
	static extractPatternOptions(e) {
		let { mask: t, pattern: n, ...r } = e;
		return {
			...r,
			mask: tc(t) ? t : n
		};
	}
	constructor(t) {
		super(e.extractPatternOptions({
			...e.DEFAULTS,
			...t
		}));
	}
	updateOptions(e) {
		super.updateOptions(e);
	}
	_update(t) {
		let { mask: n, pattern: r, blocks: i, ...a } = {
			...e.DEFAULTS,
			...t
		}, o = Object.assign({}, e.GET_DEFAULT_BLOCKS());
		t.min && (o.Y.from = t.min.getFullYear()), t.max && (o.Y.to = t.max.getFullYear()), t.min && t.max && o.Y.from === o.Y.to && (o.m.from = t.min.getMonth() + 1, o.m.to = t.max.getMonth() + 1, o.m.from === o.m.to && (o.d.from = t.min.getDate(), o.d.to = t.max.getDate())), Object.assign(o, this.blocks, i), super._update({
			...a,
			mask: tc(n) ? n : r,
			blocks: o
		});
	}
	doValidate(e) {
		let t = this.date;
		return super.doValidate(e) && (!this.isComplete || this.isDateExist(this.value) && t != null && (this.min == null || this.min <= t) && (this.max == null || t <= this.max));
	}
	isDateExist(e) {
		return this.format(this.parse(e, this), this).indexOf(e) >= 0;
	}
	get date() {
		return this.typedValue;
	}
	set date(e) {
		this.typedValue = e;
	}
	get typedValue() {
		return this.isComplete ? super.typedValue : null;
	}
	set typedValue(e) {
		super.typedValue = e;
	}
	maskEquals(e) {
		return e === Date || super.maskEquals(e);
	}
	optionsIsChanged(t) {
		return super.optionsIsChanged(e.extractPatternOptions(t));
	}
};
Ec.GET_DEFAULT_BLOCKS = () => ({
	d: {
		mask: wc,
		from: 1,
		to: 31,
		maxLength: 2
	},
	m: {
		mask: wc,
		from: 1,
		to: 12,
		maxLength: 2
	},
	Y: {
		mask: wc,
		from: 1900,
		to: 9999
	}
}), Ec.DEFAULTS = {
	...Cc.DEFAULTS,
	mask: Date,
	pattern: Tc,
	format: (e, t) => e ? [
		String(e.getDate()).padStart(2, "0"),
		String(e.getMonth() + 1).padStart(2, "0"),
		e.getFullYear()
	].join(".") : "",
	parse: (e, t) => {
		let [n, r, i] = e.split(".").map(Number);
		return new Date(i, r - 1, n);
	}
}, K.MaskedDate = Ec;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/dynamic.js
var Dc = class e extends vc {
	constructor(t) {
		super({
			...e.DEFAULTS,
			...t
		}), this.currentMask = void 0;
	}
	updateOptions(e) {
		super.updateOptions(e);
	}
	_update(e) {
		super._update(e), "mask" in e && (this.exposeMask = void 0, this.compiledMasks = Array.isArray(e.mask) ? e.mask.map((e) => {
			let { expose: t, ...n } = lc(e), r = uc({
				overwrite: this._overwrite,
				eager: this._eager,
				skipInvalid: this._skipInvalid,
				...n
			});
			return t && (this.exposeMask = r), r;
		}) : []);
	}
	_appendCharRaw(e, t) {
		t === void 0 && (t = {});
		let n = this._applyDispatch(e, t);
		return this.currentMask && n.aggregate(this.currentMask._appendChar(e, this.currentMaskFlags(t))), n;
	}
	_applyDispatch(e, t, n) {
		e === void 0 && (e = ""), t === void 0 && (t = {}), n === void 0 && (n = "");
		let r = t.tail && t._beforeTailState != null ? t._beforeTailState._value : this.value, i = this.rawInputValue, a = t.tail && t._beforeTailState != null ? t._beforeTailState._rawInputValue : i, o = i.slice(a.length), s = this.currentMask, c = new J(), l = s?.state;
		return this.currentMask = this.doDispatch(e, { ...t }, n), this.currentMask && (this.currentMask === s ? l && (this.currentMask.state = l) : (this.currentMask.reset(), a && (this.currentMask.append(a, { raw: !0 }), c.tailShift = this.currentMask.value.length - r.length), o && (c.tailShift += this.currentMask.append(o, {
			raw: !0,
			tail: !0
		}).tailShift))), c;
	}
	_appendPlaceholder() {
		let e = this._applyDispatch();
		return this.currentMask && e.aggregate(this.currentMask._appendPlaceholder()), e;
	}
	_appendEager() {
		let e = this._applyDispatch();
		return this.currentMask && e.aggregate(this.currentMask._appendEager()), e;
	}
	appendTail(e) {
		let t = new J();
		return e && t.aggregate(this._applyDispatch("", {}, e)), t.aggregate(this.currentMask ? this.currentMask.appendTail(e) : super.appendTail(e));
	}
	currentMaskFlags(e) {
		return {
			...e,
			_beforeTailState: e._beforeTailState?.currentMaskRef === this.currentMask && e._beforeTailState?.currentMask || e._beforeTailState
		};
	}
	doDispatch(e, t, n) {
		return t === void 0 && (t = {}), n === void 0 && (n = ""), this.dispatch(e, this, t, n);
	}
	doValidate(e) {
		return super.doValidate(e) && (!this.currentMask || this.currentMask.doValidate(this.currentMaskFlags(e)));
	}
	doPrepare(e, t) {
		t === void 0 && (t = {});
		let [n, r] = super.doPrepare(e, t);
		if (this.currentMask) {
			let e;
			[n, e] = super.doPrepare(n, this.currentMaskFlags(t)), r = r.aggregate(e);
		}
		return [n, r];
	}
	doPrepareChar(e, t) {
		t === void 0 && (t = {});
		let [n, r] = super.doPrepareChar(e, t);
		if (this.currentMask) {
			let e;
			[n, e] = super.doPrepareChar(n, this.currentMaskFlags(t)), r = r.aggregate(e);
		}
		return [n, r];
	}
	reset() {
		var e;
		(e = this.currentMask) == null || e.reset(), this.compiledMasks.forEach((e) => e.reset());
	}
	get value() {
		return this.exposeMask ? this.exposeMask.value : this.currentMask ? this.currentMask.value : "";
	}
	set value(e) {
		this.exposeMask ? (this.exposeMask.value = e, this.currentMask = this.exposeMask, this._applyDispatch()) : super.value = e;
	}
	get unmaskedValue() {
		return this.exposeMask ? this.exposeMask.unmaskedValue : this.currentMask ? this.currentMask.unmaskedValue : "";
	}
	set unmaskedValue(e) {
		this.exposeMask ? (this.exposeMask.unmaskedValue = e, this.currentMask = this.exposeMask, this._applyDispatch()) : super.unmaskedValue = e;
	}
	get typedValue() {
		return this.exposeMask ? this.exposeMask.typedValue : this.currentMask ? this.currentMask.typedValue : "";
	}
	set typedValue(e) {
		if (this.exposeMask) {
			this.exposeMask.typedValue = e, this.currentMask = this.exposeMask, this._applyDispatch();
			return;
		}
		let t = String(e);
		this.currentMask && (this.currentMask.typedValue = e, t = this.currentMask.unmaskedValue), this.unmaskedValue = t;
	}
	get displayValue() {
		return this.currentMask ? this.currentMask.displayValue : "";
	}
	get isComplete() {
		return !!this.currentMask?.isComplete;
	}
	get isFilled() {
		return !!this.currentMask?.isFilled;
	}
	remove(e, t) {
		let n = new J();
		return this.currentMask && n.aggregate(this.currentMask.remove(e, t)).aggregate(this._applyDispatch()), n;
	}
	get state() {
		return {
			...super.state,
			_rawInputValue: this.rawInputValue,
			compiledMasks: this.compiledMasks.map((e) => e.state),
			currentMaskRef: this.currentMask,
			currentMask: this.currentMask?.state
		};
	}
	set state(e) {
		let { compiledMasks: t, currentMaskRef: n, currentMask: r, ...i } = e;
		t && this.compiledMasks.forEach((e, n) => e.state = t[n]), n != null && (this.currentMask = n, this.currentMask.state = r), super.state = i;
	}
	extractInput(e, t, n) {
		return this.currentMask ? this.currentMask.extractInput(e, t, n) : "";
	}
	extractTail(e, t) {
		return this.currentMask ? this.currentMask.extractTail(e, t) : super.extractTail(e, t);
	}
	doCommit() {
		this.currentMask && this.currentMask.doCommit(), super.doCommit();
	}
	nearestInputPos(e, t) {
		return this.currentMask ? this.currentMask.nearestInputPos(e, t) : super.nearestInputPos(e, t);
	}
	get overwrite() {
		return this.currentMask ? this.currentMask.overwrite : this._overwrite;
	}
	set overwrite(e) {
		this._overwrite = e;
	}
	get eager() {
		return this.currentMask ? this.currentMask.eager : this._eager;
	}
	set eager(e) {
		this._eager = e;
	}
	get skipInvalid() {
		return this.currentMask ? this.currentMask.skipInvalid : this._skipInvalid;
	}
	set skipInvalid(e) {
		this._skipInvalid = e;
	}
	get autofix() {
		return this.currentMask ? this.currentMask.autofix : this._autofix;
	}
	set autofix(e) {
		this._autofix = e;
	}
	maskEquals(e) {
		return Array.isArray(e) ? this.compiledMasks.every((t, n) => {
			if (!e[n]) return;
			let { mask: r, ...i } = e[n];
			return oc(t, i) && t.maskEquals(r);
		}) : super.maskEquals(e);
	}
	typedValueEquals(e) {
		return !!this.currentMask?.typedValueEquals(e);
	}
};
Dc.DEFAULTS = {
	...vc.DEFAULTS,
	dispatch: (e, t, n, r) => {
		if (!t.compiledMasks.length) return;
		let i = t.rawInputValue, a = t.compiledMasks.map((a, o) => {
			let s = t.currentMask === a, c = s ? a.displayValue.length : a.nearestInputPos(a.displayValue.length, G.FORCE_LEFT);
			return a.rawInputValue === i ? s || a.remove(c) : (a.reset(), a.append(i, { raw: !0 })), a.append(e, t.currentMaskFlags(n)), a.appendTail(r), {
				index: o,
				weight: a.rawInputValue.length,
				totalInputPositions: a.totalInputPositions(0, Math.max(c, a.nearestInputPos(a.displayValue.length, G.FORCE_LEFT)))
			};
		});
		return a.sort((e, t) => t.weight - e.weight || t.totalInputPositions - e.totalInputPositions), t.compiledMasks[a[0].index];
	}
}, K.MaskedDynamic = Dc;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/enum.js
var Oc = class e extends Cc {
	constructor(t) {
		super({
			...e.DEFAULTS,
			...t
		});
	}
	updateOptions(e) {
		super.updateOptions(e);
	}
	_update(e) {
		let { enum: t, ...n } = e;
		if (t) {
			let e = t.map((e) => e.length), r = Math.min(...e), i = Math.max(...e) - r;
			n.mask = "*".repeat(r), i && (n.mask += "[" + "*".repeat(i) + "]"), this.enum = t;
		}
		super._update(n);
	}
	_appendCharRaw(e, t) {
		t === void 0 && (t = {});
		let n = Math.min(this.nearestInputPos(0, G.FORCE_RIGHT), this.value.length), r = this.enum.filter((t) => this.matchValue(t, this.unmaskedValue + e, n));
		if (r.length) {
			r.length === 1 && this._forEachBlocksInRange(0, this.value.length, (e, n) => {
				let i = r[0][n];
				n >= this.value.length || i === e.value || (e.reset(), e._appendChar(i, t));
			});
			let e = super._appendCharRaw(r[0][this.value.length], t);
			return r.length === 1 && r[0].slice(this.unmaskedValue.length).split("").forEach((t) => e.aggregate(super._appendCharRaw(t))), e;
		}
		return new J({ skip: !this.isComplete });
	}
	extractTail(e, t) {
		return e === void 0 && (e = 0), t === void 0 && (t = this.displayValue.length), new _c("", e);
	}
	remove(e, t) {
		if (e === void 0 && (e = 0), t === void 0 && (t = this.displayValue.length), e === t) return new J();
		let n = Math.min(super.nearestInputPos(0, G.FORCE_RIGHT), this.value.length), r;
		for (r = e; r >= 0 && !(this.enum.filter((e) => this.matchValue(e, this.value.slice(n, r), n)).length > 1); --r);
		let i = super.remove(r, t);
		return i.tailShift += r - e, i;
	}
	get isComplete() {
		return this.enum.indexOf(this.value) >= 0;
	}
};
Oc.DEFAULTS = {
	...Cc.DEFAULTS,
	matchValue: (e, t, n) => e.indexOf(t, n) === n
}, K.MaskedEnum = Oc, K.MaskedFunction = class extends vc {
	updateOptions(e) {
		super.updateOptions(e);
	}
	_update(e) {
		super._update({
			...e,
			validate: e.mask
		});
	}
};
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/number.js
var kc, Ac = class e extends vc {
	constructor(t) {
		super({
			...e.DEFAULTS,
			...t
		});
	}
	updateOptions(e) {
		super.updateOptions(e);
	}
	_update(e) {
		super._update(e), this._updateRegExps();
	}
	_updateRegExps() {
		let e = "^" + (this.allowNegative ? "[+|\\-]?" : ""), t = (this.scale ? "(" + ac(this.radix) + "\\d{0," + this.scale + "})?" : "") + "$";
		this._numberRegExp = RegExp(e + "\\d*" + t), this._mapToRadixRegExp = RegExp("[" + this.mapToRadix.map(ac).join("") + "]", "g"), this._thousandsSeparatorRegExp = new RegExp(ac(this.thousandsSeparator), "g");
	}
	_removeThousandsSeparators(e) {
		return e.replace(this._thousandsSeparatorRegExp, "");
	}
	_insertThousandsSeparators(e) {
		let t = e.split(this.radix);
		return t[0] = t[0].replace(/\B(?=(\d{3})+(?!\d))/g, this.thousandsSeparator), t.join(this.radix);
	}
	doPrepareChar(e, t) {
		t === void 0 && (t = {});
		let [n, r] = super.doPrepareChar(this._removeThousandsSeparators(this.scale && this.mapToRadix.length && (t.input && t.raw || !t.input && !t.raw) ? e.replace(this._mapToRadixRegExp, this.radix) : e), t);
		return e && !n && (r.skip = !0), n && !this.allowPositive && !this.value && n !== "-" && r.aggregate(this._appendChar("-")), [n, r];
	}
	_separatorsCount(e, t) {
		t === void 0 && (t = !1);
		let n = 0;
		for (let r = 0; r < e; ++r) this._value.indexOf(this.thousandsSeparator, r) === r && (++n, t && (e += this.thousandsSeparator.length));
		return n;
	}
	_separatorsCountFromSlice(e) {
		return e === void 0 && (e = this._value), this._separatorsCount(this._removeThousandsSeparators(e).length, !0);
	}
	extractInput(e, t, n) {
		return e === void 0 && (e = 0), t === void 0 && (t = this.displayValue.length), [e, t] = this._adjustRangeWithSeparators(e, t), this._removeThousandsSeparators(super.extractInput(e, t, n));
	}
	_appendCharRaw(t, n) {
		n === void 0 && (n = {});
		let r = n.tail && n._beforeTailState ? n._beforeTailState._value : this._value, i = this._separatorsCountFromSlice(r);
		this._value = this._removeThousandsSeparators(this.value);
		let a = this._value;
		this._value += t;
		let o = this.number, s = !isNaN(o), c = !1;
		if (s) {
			let t;
			this.min != null && this.min < 0 && this.number < this.min && (t = this.min), this.max != null && this.max > 0 && this.number > this.max && (t = this.max), t != null && (this.autofix ? (this._value = this.format(t, this).replace(e.UNMASKED_RADIX, this.radix), c ||= a === this._value && !n.tail) : s = !1), s &&= !!this._value.match(this._numberRegExp);
		}
		let l;
		s ? l = new J({
			inserted: this._value.slice(a.length),
			rawInserted: c ? "" : t,
			skip: c
		}) : (this._value = a, l = new J()), this._value = this._insertThousandsSeparators(this._value);
		let u = n.tail && n._beforeTailState ? n._beforeTailState._value : this._value, d = this._separatorsCountFromSlice(u);
		return l.tailShift += (d - i) * this.thousandsSeparator.length, l;
	}
	_findSeparatorAround(e) {
		if (this.thousandsSeparator) {
			let t = e - this.thousandsSeparator.length + 1, n = this.value.indexOf(this.thousandsSeparator, t);
			if (n <= e) return n;
		}
		return -1;
	}
	_adjustRangeWithSeparators(e, t) {
		let n = this._findSeparatorAround(e);
		n >= 0 && (e = n);
		let r = this._findSeparatorAround(t);
		return r >= 0 && (t = r + this.thousandsSeparator.length), [e, t];
	}
	remove(e, t) {
		e === void 0 && (e = 0), t === void 0 && (t = this.displayValue.length), [e, t] = this._adjustRangeWithSeparators(e, t);
		let n = this.value.slice(0, e), r = this.value.slice(t), i = this._separatorsCount(n.length);
		return this._value = this._insertThousandsSeparators(this._removeThousandsSeparators(n + r)), new J({ tailShift: (this._separatorsCountFromSlice(n) - i) * this.thousandsSeparator.length });
	}
	nearestInputPos(e, t) {
		if (!this.thousandsSeparator) return e;
		switch (t) {
			case G.NONE:
			case G.LEFT:
			case G.FORCE_LEFT: {
				let n = this._findSeparatorAround(e - 1);
				if (n >= 0) {
					let r = n + this.thousandsSeparator.length;
					if (e < r || this.value.length <= r || t === G.FORCE_LEFT) return n;
				}
				break;
			}
			case G.RIGHT:
			case G.FORCE_RIGHT: {
				let t = this._findSeparatorAround(e);
				if (t >= 0) return t + this.thousandsSeparator.length;
			}
		}
		return e;
	}
	doCommit() {
		if (this.value) {
			let e = this.number, t = e;
			this.min != null && (t = Math.max(t, this.min)), this.max != null && (t = Math.min(t, this.max)), t !== e && (this.unmaskedValue = this.format(t, this));
			let n = this.value;
			this.normalizeZeros && (n = this._normalizeZeros(n)), this.padFractionalZeros && this.scale > 0 && (n = this._padFractionalZeros(n)), this._value = n;
		}
		super.doCommit();
	}
	_normalizeZeros(e) {
		let t = this._removeThousandsSeparators(e).split(this.radix);
		return t[0] = t[0].replace(/^(\D*)(0*)(\d*)/, (e, t, n, r) => t + r), e.length && !/\d$/.test(t[0]) && (t[0] += "0"), t.length > 1 && (t[1] = t[1].replace(/0*$/, ""), t[1].length || (t.length = 1)), this._insertThousandsSeparators(t.join(this.radix));
	}
	_padFractionalZeros(e) {
		if (!e) return e;
		let t = e.split(this.radix);
		return t.length < 2 && t.push(""), t[1] = t[1].padEnd(this.scale, "0"), t.join(this.radix);
	}
	doSkipInvalid(t, n, r) {
		n === void 0 && (n = {});
		let i = this.scale === 0 && t !== this.thousandsSeparator && (t === this.radix || t === e.UNMASKED_RADIX || this.mapToRadix.includes(t));
		return super.doSkipInvalid(t, n, r) && !i;
	}
	get unmaskedValue() {
		return this._removeThousandsSeparators(this._normalizeZeros(this.value)).replace(this.radix, e.UNMASKED_RADIX);
	}
	set unmaskedValue(e) {
		super.unmaskedValue = e;
	}
	get typedValue() {
		return this.parse(this.unmaskedValue, this);
	}
	set typedValue(t) {
		this.rawInputValue = this.format(t, this).replace(e.UNMASKED_RADIX, this.radix);
	}
	get number() {
		return this.typedValue;
	}
	set number(e) {
		this.typedValue = e;
	}
	get allowNegative() {
		return this.min != null && this.min < 0 || this.max != null && this.max < 0;
	}
	get allowPositive() {
		return this.min != null && this.min > 0 || this.max != null && this.max > 0;
	}
	typedValueEquals(t) {
		return (super.typedValueEquals(t) || e.EMPTY_VALUES.includes(t) && e.EMPTY_VALUES.includes(this.typedValue)) && !(t === 0 && this.value === "");
	}
};
kc = Ac, Ac.UNMASKED_RADIX = ".", Ac.EMPTY_VALUES = [...vc.EMPTY_VALUES, 0], Ac.DEFAULTS = {
	...vc.DEFAULTS,
	mask: Number,
	radix: ",",
	thousandsSeparator: "",
	mapToRadix: [kc.UNMASKED_RADIX],
	min: -(2 ** 53 - 1),
	max: 2 ** 53 - 1,
	scale: 2,
	normalizeZeros: !0,
	padFractionalZeros: !1,
	parse: Number,
	format: (e) => e.toLocaleString("en-US", {
		useGrouping: !1,
		maximumFractionDigits: 20
	})
}, K.MaskedNumber = Ac;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/pipe.js
var jc = {
	MASKED: "value",
	UNMASKED: "unmaskedValue",
	TYPED: "typedValue"
};
function Mc(e, t, n) {
	t === void 0 && (t = jc.MASKED), n === void 0 && (n = jc.MASKED);
	let r = uc(e);
	return (e) => r.runIsolated((r) => (r[t] = e, r[n]));
}
function Nc(e, t, n, r) {
	return Mc(t, n, r)(e);
}
K.PIPE_TYPE = jc, K.createPipe = Mc, K.pipe = Nc, K.RepeatBlock = class extends Cc {
	get repeatFrom() {
		return (Array.isArray(this.repeat) ? this.repeat[0] : this.repeat === Infinity ? 0 : this.repeat) ?? 0;
	}
	get repeatTo() {
		return (Array.isArray(this.repeat) ? this.repeat[1] : this.repeat) ?? Infinity;
	}
	constructor(e) {
		super(e);
	}
	updateOptions(e) {
		super.updateOptions(e);
	}
	_update(e) {
		let { repeat: t, ...n } = lc(e);
		this._blockOpts = Object.assign({}, this._blockOpts, n);
		let r = uc(this._blockOpts);
		this.repeat = t ?? r.repeat ?? this.repeat ?? Infinity, super._update({
			mask: "m".repeat(Math.max(this.repeatTo === Infinity && this._blocks?.length || 0, this.repeatFrom)),
			blocks: { m: r },
			eager: r.eager,
			overwrite: r.overwrite,
			skipInvalid: r.skipInvalid,
			lazy: r.lazy,
			placeholderChar: r.placeholderChar,
			displayChar: r.displayChar
		});
	}
	_allocateBlock(e) {
		if (e < this._blocks.length) return this._blocks[e];
		if (this.repeatTo === Infinity || this._blocks.length < this.repeatTo) return this._blocks.push(uc(this._blockOpts)), this.mask += "m", this._blocks[this._blocks.length - 1];
	}
	_appendCharRaw(e, t) {
		t === void 0 && (t = {});
		let n = new J();
		for (let s = (r = (i = this._mapPosToBlock(this.displayValue.length))?.index) ?? Math.max(this._blocks.length - 1, 0), c, l; c = (a = this._blocks[s]) ?? (l = !l && this._allocateBlock(s)); ++s) {
			var r, i, a, o;
			let u = c._appendChar(e, {
				...t,
				_beforeTailState: (o = t._beforeTailState) == null || (o = o._blocks) == null ? void 0 : o[s]
			});
			if (u.skip && l) {
				this._blocks.pop(), this.mask = this.mask.slice(1);
				break;
			}
			if (n.aggregate(u), u.consumed) break;
		}
		return n;
	}
	_trimEmptyTail(e, t) {
		e === void 0 && (e = 0);
		let n = Math.max(this._mapPosToBlock(e)?.index || 0, this.repeatFrom, 0), r;
		t != null && (r = this._mapPosToBlock(t)?.index), r ??= this._blocks.length - 1;
		let i = 0;
		for (let e = r; n <= e && !this._blocks[e].unmaskedValue; --e, ++i);
		i && (this._blocks.splice(r - i + 1, i), this.mask = this.mask.slice(i));
	}
	reset() {
		super.reset(), this._trimEmptyTail();
	}
	remove(e, t) {
		e === void 0 && (e = 0), t === void 0 && (t = this.displayValue.length);
		let n = super.remove(e, t);
		return this._trimEmptyTail(e, t), n;
	}
	totalInputPositions(e, t) {
		return e === void 0 && (e = 0), t == null && this.repeatTo === Infinity ? Infinity : super.totalInputPositions(e, t);
	}
	get state() {
		return super.state;
	}
	set state(e) {
		this._blocks.length = e._blocks.length, this.mask = this.mask.slice(0, this._blocks.length), super.state = e;
	}
};
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/index.js
try {
	globalThis.IMask = K;
} catch {}
//#endregion
//#region node_modules/.pnpm/react-imask@7.6.1_react@18.3.1/node_modules/react-imask/esm/mixin.js
var Pc = {
	mask: U.default.oneOfType([
		U.default.array,
		U.default.func,
		U.default.string,
		U.default.instanceOf(RegExp),
		U.default.oneOf([
			Date,
			Number,
			K.Masked
		]),
		U.default.instanceOf(K.Masked)
	]),
	value: U.default.any,
	unmask: U.default.oneOfType([U.default.bool, U.default.oneOf(["typed"])]),
	prepare: U.default.func,
	prepareChar: U.default.func,
	validate: U.default.func,
	commit: U.default.func,
	overwrite: U.default.oneOfType([U.default.bool, U.default.oneOf(["shift"])]),
	eager: U.default.oneOfType([U.default.bool, U.default.oneOf(["append", "remove"])]),
	skipInvalid: U.default.bool,
	onAccept: U.default.func,
	onComplete: U.default.func,
	placeholderChar: U.default.string,
	displayChar: U.default.string,
	lazy: U.default.bool,
	definitions: U.default.object,
	blocks: U.default.object,
	enum: U.default.arrayOf(U.default.string),
	maxLength: U.default.number,
	from: U.default.number,
	to: U.default.number,
	pattern: U.default.string,
	format: U.default.func,
	parse: U.default.func,
	autofix: U.default.oneOfType([U.default.bool, U.default.oneOf(["pad"])]),
	radix: U.default.string,
	thousandsSeparator: U.default.string,
	mapToRadix: U.default.arrayOf(U.default.string),
	scale: U.default.number,
	normalizeZeros: U.default.bool,
	padFractionalZeros: U.default.bool,
	min: U.default.oneOfType([U.default.number, U.default.instanceOf(Date)]),
	max: U.default.oneOfType([U.default.number, U.default.instanceOf(Date)]),
	dispatch: U.default.func,
	inputRef: U.default.oneOfType([U.default.func, U.default.shape({ current: U.default.object })])
}, Fc = Object.keys(Pc).filter((e) => e !== "value"), Ic = [
	"value",
	"unmask",
	"onAccept",
	"onComplete",
	"inputRef"
], Lc = Fc.filter((e) => Ic.indexOf(e) < 0);
function Rc(e) {
	var t;
	let n = (t = class extends R.Component {
		constructor(e) {
			super(e), this._inputRef = this._inputRef.bind(this);
		}
		componentDidMount() {
			this.props.mask && this.initMask();
		}
		componentDidUpdate() {
			let e = this.props, t = this._extractMaskOptionsFromProps(e);
			if (t.mask) this.maskRef ? (this.maskRef.updateOptions(t), "value" in e && e.value !== void 0 && (this.maskValue = e.value)) : this.initMask(t);
			else if (this.destroyMask(), "value" in e && e.value !== void 0) {
				var n;
				(n = this.element) != null && n.isContentEditable && this.element.tagName !== "INPUT" && this.element.tagName !== "TEXTAREA" ? this.element.textContent = e.value : this.element.value = e.value;
			}
		}
		componentWillUnmount() {
			this.destroyMask();
		}
		_inputRef(e) {
			this.element = e, this.props.inputRef && (Object.prototype.hasOwnProperty.call(this.props.inputRef, "current") ? this.props.inputRef.current = e : this.props.inputRef(e));
		}
		initMask(e) {
			e === void 0 && (e = this._extractMaskOptionsFromProps(this.props)), this.maskRef = K(this.element, e).on("accept", this._onAccept.bind(this)).on("complete", this._onComplete.bind(this)), "value" in this.props && this.props.value !== void 0 && (this.maskValue = this.props.value);
		}
		destroyMask() {
			this.maskRef && (this.maskRef.destroy(), delete this.maskRef);
		}
		_extractMaskOptionsFromProps(e) {
			let { ...t } = e;
			return Object.keys(t).filter((e) => Lc.indexOf(e) < 0).forEach((e) => {
				delete t[e];
			}), t;
		}
		_extractNonMaskProps(e) {
			let { ...t } = e;
			return Fc.forEach((e) => {
				e !== "maxLength" && delete t[e];
			}), "defaultValue" in t || (t.defaultValue = e.mask ? "" : t.value), delete t.value, t;
		}
		get maskValue() {
			return this.maskRef ? this.props.unmask === "typed" ? this.maskRef.typedValue : this.props.unmask ? this.maskRef.unmaskedValue : this.maskRef.value : "";
		}
		set maskValue(e) {
			this.maskRef && (e = e == null && this.props.unmask !== "typed" ? "" : e, this.props.unmask === "typed" ? this.maskRef.typedValue = e : this.props.unmask ? this.maskRef.unmaskedValue = e : this.maskRef.value = e);
		}
		_onAccept(e) {
			this.props.onAccept && this.maskRef && this.props.onAccept(this.maskValue, this.maskRef, e);
		}
		_onComplete(e) {
			this.props.onComplete && this.maskRef && this.props.onComplete(this.maskValue, this.maskRef, e);
		}
		render() {
			return R.createElement(e, {
				...this._extractNonMaskProps(this.props),
				inputRef: this._inputRef
			});
		}
	}, t.displayName = void 0, t.propTypes = void 0, t);
	return n.displayName = "IMask(" + (e.displayName || e.name || "Component") + ")", n.propTypes = Pc, R.forwardRef((e, t) => R.createElement(n, {
		...e,
		ref: t
	}));
}
//#endregion
//#region node_modules/.pnpm/react-imask@7.6.1_react@18.3.1/node_modules/react-imask/esm/input.js
var zc = Rc((e) => {
	let { inputRef: t, ...n } = e;
	return R.createElement("input", {
		...n,
		ref: t
	});
}), Bc = R.forwardRef((e, t) => R.createElement(zc, {
	...e,
	ref: t
})), Vc = (e = {}) => Object.entries(e).reduce((e, [t, n]) => (n !== void 0 && (e[t] = n), e), {}), Hc = (...e) => (t) => {
	e.filter((e) => typeof e == "function").forEach((e) => e(t));
}, Uc = ({ defaultValue: e, value: t }) => {
	let [n, r] = (0, R.useState)(!!e || e === 0);
	return [!!t || t === 0 || n, (e) => r(!!e.target.value)];
}, Wc = (e, t) => {
	let [n, r] = (0, R.useState)(t || []), i = (e) => (r((t) => [...t, e]), e), a = () => i(Ns(`${e}-`)), o = (e) => {
		r((t) => t.filter((t) => t !== e));
	};
	return [n, (e) => {
		let [t, n] = (0, R.useState)(e);
		return (0, R.useEffect)(() => (e ? i(e) : t || n(a()), () => o(t)), [t, e]), t;
	}];
}, Y = (e) => e, Gc = /* @__PURE__ */ R.createContext({
	getControlProps: Y,
	useSetIsControlGroupEffect: () => {},
	getLabelProps: Y,
	getDescriptorProps: Y,
	hasFormGroupProvider: !1
}), X = () => R.useContext(Gc);
function Kc(e) {
	let [t, n] = (0, R.useState)(e);
	return [t, (e) => {
		(0, R.useEffect)(() => n(e), [e]);
	}];
}
function qc({ children: e, controlId: t, isInvalid: n, isValid: r, size: i }) {
	let a = (0, R.useMemo)(() => t || Ns("form-field"), [t]), [o, s] = Wc(a), [c, l] = Wc(a), [u, d] = Kc(!1), f = {
		getControlProps: (0, R.useCallback)((e) => {
			let t = u ? c : void 0;
			return Vc({
				...e,
				"aria-describedby": (0, V.default)(e["aria-describedby"], o) || void 0,
				"aria-labelledby": (0, V.default)(e["aria-labelledby"], t) || void 0,
				id: a
			});
		}, [
			u,
			o,
			c,
			a
		]),
		getLabelProps: (e) => {
			let t = l(e?.id);
			return u ? {
				...e,
				id: t
			} : {
				...e,
				htmlFor: a
			};
		},
		getDescriptorProps: (e) => {
			let t = s(e?.id);
			return {
				...e,
				id: t
			};
		},
		useSetIsControlGroupEffect: d,
		isControlGroup: u,
		controlId: a,
		isInvalid: n,
		isValid: r,
		size: i,
		hasFormGroupProvider: !0
	};
	return /* @__PURE__ */ R.createElement(Gc.Provider, { value: f }, e);
}
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/constants.js
var Jc = {
	SMALL: "sm",
	LARGE: "lg"
}, Z = {
	DEFAULT: "default",
	VALID: "valid",
	INVALID: "invalid",
	WARNING: "warning",
	CRITERIA_EMPTY: "criteria-empty",
	CRITERIA_VALID: "criteria-valid",
	CRITERIA_INVALID: "criteria-invalid"
}, Yc = {
	[Z.DEFAULT]: null,
	[Z.VALID]: zs,
	[Z.INVALID]: Vs,
	[Z.WARNING]: Gs,
	[Z.CRITERIA_EMPTY]: Ws,
	[Z.CRITERIA_VALID]: Bs,
	[Z.CRITERIA_INVALID]: Rs
}, Xc = ({ isInvalid: e, isValid: t }) => t ? Z.VALID : e ? Z.INVALID : Z.DEFAULT;
function Zc({ type: e, customIcon: t }) {
	if (t) return t;
	let n = Yc[e];
	return n ? /* @__PURE__ */ R.createElement(Ls, { src: n }) : null;
}
Zc.propTypes = {
	type: U.default.oneOf(Object.values(Z)),
	customIcon: U.default.node
}, Zc.defaultProps = {
	type: void 0,
	customIcon: void 0
};
function Qc({ children: e, type: t, icon: n, muted: r, hasIcon: i, ...a }) {
	let o = (0, V.default)(a.className, "pgn__form-text", `pgn__form-text-${t}`, { "text-muted": r });
	return /* @__PURE__ */ R.createElement("div", {
		...a,
		className: o
	}, i && /* @__PURE__ */ R.createElement(Zc, {
		customIcon: n,
		type: t
	}), /* @__PURE__ */ R.createElement("div", null, e));
}
Qc.propTypes = {
	children: U.default.node.isRequired,
	className: U.default.string,
	hasIcon: U.default.bool,
	type: U.default.oneOf([
		"default",
		"valid",
		"invalid",
		"warning",
		"criteria-empty",
		"criteria-valid",
		"criteria-invalid"
	]),
	icon: U.default.node,
	muted: U.default.bool
}, Qc.defaultProps = {
	hasIcon: !0,
	type: "default",
	icon: void 0,
	className: void 0,
	muted: !1
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormControlFeedback.js
function $c({ children: e, ...t }) {
	let { getDescriptorProps: n, isInvalid: r, isValid: i } = X(), a = n(t), o = (0, V.default)("pgn__form-control-description", t.className), s = t.type || Xc({
		isInvalid: r,
		isValid: i
	});
	return /* @__PURE__ */ R.createElement(Qc, {
		...a,
		className: o,
		type: s
	}, e);
}
$c.propTypes = {
	children: U.default.node.isRequired,
	className: U.default.string,
	hasIcon: U.default.bool,
	type: U.default.oneOf([
		"default",
		"valid",
		"invalid",
		"warning",
		"criteria-empty",
		"criteria-valid",
		"criteria-invalid"
	]),
	icon: U.default.node,
	muted: U.default.bool
}, $c.defaultProps = {
	hasIcon: !0,
	type: void 0,
	icon: void 0,
	className: void 0,
	muted: !1
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormControlFloatingLabel.js
function el({ children: e }) {
	let { controlId: t } = X();
	return /* @__PURE__ */ R.createElement("div", { className: "pgn__form-control-floating-label" }, /* @__PURE__ */ R.createElement("div", { className: "pgn__form-control-floating-label-content" }, /* @__PURE__ */ R.createElement("label", {
		className: "pgn__form-control-floating-label-text",
		htmlFor: t
	}, e)));
}
el.propTypes = { children: U.default.node.isRequired };
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormControlDecorator.js
function tl({ children: e, location: t }) {
	return /* @__PURE__ */ R.createElement("div", { className: `pgn__form-control-decorator pgn__form-control-decorator-${t}` }, e);
}
tl.propTypes = {
	children: U.default.node.isRequired,
	location: U.default.oneOf(["leading", "trailing"])
}, tl.defaultProps = { location: "leading" };
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormControlDecoratorGroup.js
function nl({ children: e, leadingElement: t, trailingElement: n, floatingLabel: r, className: i, ...a }) {
	let o = X(a), s = a.size || o.size;
	return /* @__PURE__ */ R.createElement("div", {
		className: (0, V.default)("pgn__form-control-decorator-group", {
			"has-prepended-node": !!t,
			"has-appended-node": !!n,
			"has-leading-element": !!t,
			"has-trailing-element": !!n,
			"has-floating-label": !!r,
			"pgn__form-control-decorator-group-lg": s === Jc.LARGE,
			"pgn__form-control-decorator-group-sm": s === Jc.SMALL
		}, i),
		...a
	}, e, t && /* @__PURE__ */ R.createElement(tl, { location: "leading" }, t), n && /* @__PURE__ */ R.createElement(tl, { location: "trailing" }, n), r && /* @__PURE__ */ R.createElement(el, null, r));
}
nl.propTypes = {
	children: U.default.node.isRequired,
	leadingElement: U.default.node,
	trailingElement: U.default.node,
	floatingLabel: U.default.node,
	className: U.default.string,
	size: U.default.oneOf([Jc.SMALL, Jc.LARGE])
}, nl.defaultProps = {
	leadingElement: void 0,
	trailingElement: void 0,
	floatingLabel: void 0,
	className: void 0,
	size: void 0
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormControl.js
var rl = /* @__PURE__ */ R.forwardRef(({ as: e, className: t, controlClassName: n, leadingElement: r, trailingElement: i, floatingLabel: a, autoResize: o, onChange: s, inputMask: c, ...l }, u) => {
	let { isInvalid: d, isValid: f, getControlProps: p, ...m } = X(), h = R.useRef(), g = u || h, _ = l.size || m.size, [v, y] = Uc({
		defaultValue: l.defaultValue,
		value: l.value
	}), b = (0, R.useCallback)(() => {
		e === "textarea" && o && (!g.current.initialHeight && !g.current.offsets && (g.current.initialHeight = g.current.offsetHeight, g.current.offsets = g.current.offsetHeight - g.current.clientHeight), g.current.style.height = `${g.current.initialHeight}px`, g.current.style.height = `${g.current.scrollHeight + g.current.offsets}px`);
	}, [
		e,
		o,
		g
	]);
	(0, R.useEffect)(() => {
		b();
	}, [b]);
	let x = p({
		...l,
		onBlur: Hc(y, l.onBlur)
	}), S = (e) => {
		b(), s && s(e);
	};
	return /* @__PURE__ */ R.createElement(nl, {
		size: _,
		leadingElement: r,
		trailingElement: i,
		floatingLabel: a,
		className: t
	}, /* @__PURE__ */ R.createElement(Wo, {
		as: c ? Bc : e,
		ref: g,
		size: _,
		isInvalid: d,
		isValid: f,
		className: (0, V.default)(n, { "has-value": v }),
		onChange: S,
		mask: c,
		...x
	}));
});
rl.Feedback = $c, rl.Description = $c, rl.propTypes = {
	className: U.default.string,
	as: U.default.elementType,
	onChange: U.default.func,
	defaultValue: U.default.oneOfType([U.default.string, U.default.number]),
	value: U.default.oneOfType([U.default.string, U.default.number]),
	id: U.default.string,
	controlClassName: U.default.string,
	size: U.default.oneOf(["sm", "lg"]),
	leadingElement: U.default.node,
	trailingElement: U.default.node,
	floatingLabel: U.default.node,
	plaintext: U.default.bool,
	isValid: U.default.bool,
	isInvalid: U.default.bool,
	autoResize: U.default.bool,
	inputMask: U.default.string
}, rl.defaultProps = {
	as: "input",
	className: void 0,
	id: void 0,
	controlClassName: void 0,
	onChange: void 0,
	defaultValue: void 0,
	value: void 0,
	size: void 0,
	leadingElement: void 0,
	trailingElement: void 0,
	floatingLabel: void 0,
	plaintext: !1,
	isValid: void 0,
	isInvalid: void 0,
	autoResize: !1,
	inputMask: void 0
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormLabel.js
function il({ children: e, isInline: t = !1, ...n }) {
	let { size: r, isControlGroup: i, getLabelProps: a } = X(), o = (0, V.default)("pgn__form-label", {
		"pgn__form-label-inline": t,
		"pgn__form-label-lg": r === Jc.LARGE,
		"pgn__form-label-sm": r === Jc.SMALL
	}, n.className), s = a({
		...n,
		className: o
	}), c = i ? "p" : "label";
	return /* @__PURE__ */ R.createElement(c, s, e);
}
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormGroup.js
function al({ children: e, controlId: t, isInvalid: n = !1, isValid: r = !1, size: i, as: a, ...o }) {
	return /* @__PURE__ */ R.createElement(a ?? "div", {
		...o,
		className: (0, V.default)("pgn__form-group", o.className)
	}, /* @__PURE__ */ R.createElement(qc, {
		controlId: t,
		isInvalid: n,
		isValid: r,
		size: i
	}, e));
}
var ol = /* @__PURE__ */ R.createContext({
	getRadioControlProps: (e) => e,
	hasRadioSetProvider: !1
}), sl = () => (0, R.useContext)(ol);
function cl({ children: e, name: t, onBlur: n, onFocus: r, onChange: i, value: a, defaultValue: o }) {
	let s = !o && a !== void 0, c = {
		name: t,
		value: a,
		defaultValue: o,
		getRadioControlProps: (e) => ({
			...e,
			name: t,
			onBlur: e.onBlur ? Hc(n, e.onBlur) : n,
			onFocus: e.onFocus ? Hc(r, e.onFocus) : r,
			onChange: e.onChange ? Hc(i, e.onChange) : i,
			checked: s ? a === e.value : void 0,
			defaultChecked: s ? void 0 : o === e.value
		}),
		onBlur: n,
		onFocus: r,
		onChange: i,
		hasRadioSetProvider: !0
	};
	return /* @__PURE__ */ R.createElement(ol.Provider, { value: c }, e);
}
cl.propTypes = {
	children: U.default.node.isRequired,
	name: U.default.string.isRequired,
	onBlur: U.default.func,
	onFocus: U.default.func,
	onChange: U.default.func,
	value: U.default.string,
	defaultValue: U.default.string
}, cl.defaultProps = {
	onBlur: void 0,
	onFocus: void 0,
	onChange: void 0,
	value: void 0,
	defaultValue: void 0
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormRadio.js
var ll = /* @__PURE__ */ R.forwardRef((e, t) => {
	let { getControlProps: n } = X(), { getRadioControlProps: r, hasRadioSetProvider: i } = sl(), a = n({
		...e,
		className: (0, V.default)("pgn__form-radio-input", e.className)
	});
	return i && (a = r(a)), /* @__PURE__ */ R.createElement("input", {
		...a,
		type: "radio",
		ref: t
	});
});
ll.propTypes = { className: U.default.string }, ll.defaultProps = { className: void 0 };
var ul = /* @__PURE__ */ R.forwardRef(({ children: e, className: t, controlClassName: n, labelClassName: r, description: i, isInvalid: a, isValid: o, ...s }, c) => /* @__PURE__ */ R.createElement(qc, {
	controlId: s.id,
	isInvalid: a,
	isValid: o
}, /* @__PURE__ */ R.createElement("div", { className: (0, V.default)("pgn__form-radio", t, {
	"pgn__form-control-valid": o,
	"pgn__form-control-invalid": a,
	"pgn__form-control-disabled": s.disabled
}) }, /* @__PURE__ */ R.createElement(ll, {
	ref: c,
	className: n,
	...s
}), /* @__PURE__ */ R.createElement("div", null, /* @__PURE__ */ R.createElement(il, { className: r }, e), i && /* @__PURE__ */ R.createElement($c, { hasIcon: !1 }, i)))));
ul.propTypes = {
	id: U.default.string,
	children: U.default.node.isRequired,
	className: U.default.string,
	controlClassName: U.default.string,
	labelClassName: U.default.string,
	description: U.default.node,
	isInvalid: U.default.bool,
	isValid: U.default.bool,
	disabled: U.default.bool
}, ul.defaultProps = {
	id: void 0,
	className: void 0,
	controlClassName: void 0,
	labelClassName: void 0,
	description: void 0,
	isInvalid: !1,
	isValid: !1,
	disabled: !1
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormControlSet.js
function dl({ as: e, className: t, isInline: n, children: r, ...i }) {
	return /* @__PURE__ */ R.createElement(e, {
		className: (0, V.default)(t, {
			"pgn__form-control-set": !n,
			"pgn__form-control-set-inline": n
		}),
		...i
	}, r);
}
dl.propTypes = {
	as: U.default.elementType,
	className: U.default.string,
	isInline: U.default.bool,
	children: U.default.node
}, dl.defaultProps = {
	as: "div",
	className: void 0,
	isInline: !1,
	children: null
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormRadioSet.js
function fl({ children: e, name: t, value: n, defaultValue: r, isInline: i, onChange: a, onFocus: o, onBlur: s, ...c }) {
	let { getControlProps: l, useSetIsControlGroupEffect: u } = X();
	u(!0);
	let d = l(c);
	return /* @__PURE__ */ R.createElement(cl, {
		name: t,
		value: n,
		defaultValue: r,
		onFocus: o,
		onBlur: s,
		onChange: a
	}, /* @__PURE__ */ R.createElement(dl, {
		role: "radiogroup",
		isInline: i,
		...d
	}, e));
}
fl.propTypes = {
	children: U.default.node.isRequired,
	className: U.default.string,
	name: U.default.string.isRequired,
	value: U.default.string,
	defaultValue: U.default.string,
	isInline: U.default.bool,
	onChange: U.default.func,
	onFocus: U.default.func,
	onBlur: U.default.func
}, fl.defaultProps = {
	className: void 0,
	value: void 0,
	defaultValue: void 0,
	isInline: !1,
	onChange: void 0,
	onFocus: void 0,
	onBlur: void 0
};
//#endregion
//#region node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/rng.js
var pl, ml = new Uint8Array(16);
function hl() {
	if (!pl && (pl = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !pl)) throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
	return pl(ml);
}
//#endregion
//#region node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/stringify.js
var Q = [];
for (let e = 0; e < 256; ++e) Q.push((e + 256).toString(16).slice(1));
function gl(e, t = 0) {
	return Q[e[t + 0]] + Q[e[t + 1]] + Q[e[t + 2]] + Q[e[t + 3]] + "-" + Q[e[t + 4]] + Q[e[t + 5]] + "-" + Q[e[t + 6]] + Q[e[t + 7]] + "-" + Q[e[t + 8]] + Q[e[t + 9]] + "-" + Q[e[t + 10]] + Q[e[t + 11]] + Q[e[t + 12]] + Q[e[t + 13]] + Q[e[t + 14]] + Q[e[t + 15]];
}
var _l = { randomUUID: typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto) };
//#endregion
//#region node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/v4.js
function vl(e, t, n) {
	if (_l.randomUUID && !t && !e) return _l.randomUUID();
	e ||= {};
	let r = e.random || (e.rng || hl)();
	if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, t) {
		n ||= 0;
		for (let e = 0; e < 16; ++e) t[n + e] = r[e];
		return t;
	}
	return gl(r);
}
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/utils/propTypes/utils.js
var yl = (e, t, n) => ((r, i, a, ...o) => t(r) && r[i] === void 0 ? /* @__PURE__ */ Error(`${a}: ${i} is required when ${n}`) : e(r, i, a, ...o)), bl = (e, t) => t.every((t) => e[t] !== void 0), xl = (e, t) => yl(e, (e) => Array.isArray(t) ? bl(e, t) : e[t] === !0, `${t} ${Array.isArray(t) ? "are defined" : "is truthy"}`), Sl = (e, t) => yl(e, (e) => !e[t], `not ${t}`), Cl = /* @__PURE__ */ R.forwardRef(({ className: e, screenReaderText: t, ...n }, r) => {
	let i = {
		...n,
		className: (0, V.default)("pgn__spinner", e),
		role: t ? "status" : void 0
	};
	return /* @__PURE__ */ R.createElement(Os, {
		...i,
		ref: r
	}, t && /* @__PURE__ */ R.createElement("span", { className: "sr-only" }, t));
});
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/hooks/useArrowKeyNavigationHook.js
function wl({ event: e, currentIndex: t, activeElement: n }) {
	t !== -1 && (n.click(), e.preventDefault());
}
function Tl({ event: e, currentIndex: t, availableElements: n }) {
	t === -1 && n[0].focus();
	let r;
	(e.key === "ArrowDown" || e.key === "ArrowRight") && (r = n[(t + 1) % n.length]), (e.key === "ArrowUp" || e.key === "ArrowLeft") && (r = t - 1 < 0 ? n[t - 1 + n.length] : n[t - 1]), e.key === "End" && (r = n[n.length - 1]), e.key === "Home" && ([r] = n), r?.focus(), e.preventDefault();
}
function El({ event: e, ignoredKeys: t = [], parentNode: n, selectors: r = "a,button,input" }) {
	if (!n) return;
	let { key: i } = e;
	if (![
		"ArrowUp",
		"ArrowDown",
		"ArrowRight",
		"ArrowLeft",
		"Enter",
		"Home",
		"End"
	].includes(i) || t.includes(i)) return;
	let { activeElement: a } = document;
	if (!n.contains(a)) return;
	let o = n.querySelectorAll(r);
	if (!o.length) return;
	let s = Array.from(o).findIndex((e) => e === a);
	i === "Enter" && a && wl({
		event: e,
		currentIndex: s,
		activeElement: a
	}), Tl({
		event: e,
		currentIndex: s,
		availableElements: o
	});
}
function Dl(e = {}) {
	let { selectors: t, ignoredKeys: n } = e, r = (0, R.useRef)();
	return (0, R.useEffect)(() => {
		let e = (e) => {
			El({
				event: e,
				ignoredKeys: n,
				parentNode: r.current,
				selectors: t
			});
		};
		return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e);
	}, [n, t]), r;
}
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/messages.js
var Ol = On({
	iconButtonOpened: {
		id: "pgn.FormAutosuggest.iconButtonOpened",
		defaultMessage: "Open the options menu",
		description: "A message shown in case when the autosuggest menu is closed."
	},
	iconButtonClosed: {
		id: "pgn.FormAutosuggest.iconButtonClosed",
		defaultMessage: "Close the options menu",
		description: "A message shown in case when the autosuggest menu is opened."
	}
}), kl = /* @__PURE__ */ (0, R.forwardRef)(({ children: e, arrowKeyNavigationSelector: t, ignoredArrowKeysNames: n, screenReaderText: r, value: i, isLoading: a, isValueRequired: o, valueRequiredErrorMessageText: s, isSelectionRequired: c, selectionRequiredErrorMessageText: l, hasCustomError: u, customErrorMessageText: d, onChange: f, helpMessage: p, ...m }, h) => {
	let g = _n(), _ = (0, R.useRef)(), v = Dl({
		selectors: t,
		ignoredKeys: n
	}), [y, b] = (0, R.useState)(!1), [x, S] = (0, R.useState)(!1), [C, w] = (0, R.useState)(!1), [T, E] = (0, R.useState)(!1), [D, O] = (0, R.useState)(i?.userProvidedText || ""), [k, ee] = (0, R.useState)([]), [A, j] = (0, R.useState)(null), [M, N] = (0, R.useState)(!0), [P, F] = (0, R.useState)(""), te = (e) => {
		j(e);
	}, ne = () => {
		ee([]), b(!1), j(null);
	}, re = (e, t) => {
		let n = e.currentTarget.getAttribute("data-value"), r = e.currentTarget.id;
		w(!0), E(!0), O(n), f && (!i || i && n !== i.selectionValue) && f({
			userProvidedText: n,
			selectionValue: n,
			selectionId: r
		}), ne(), t && t(e);
	};
	function ie(t = "") {
		let n = R.Children.map(e, (e) => {
			let { children: t, onClick: n, ...r } = e.props, i = e.props.id ?? vl();
			return /* @__PURE__ */ R.cloneElement(e, {
				...r,
				children: t,
				"data-value": t,
				onClick: (e) => re(e, n),
				id: i,
				onFocus: () => te(i)
			});
		});
		return t.length > 0 && (n = n.filter((e) => e.props.children.toLowerCase().includes(t.toLowerCase()))), n;
	}
	let ae = () => {
		ee(ie(D)), N(!0), F(""), b(!0);
	}, oe = () => {
		y ? ne() : ae();
	}, se = /* @__PURE__ */ R.createElement($s, {
		className: "pgn__form-autosuggest__icon-button",
		"data-testid": "autosuggest-iconbutton",
		tabIndex: "-1",
		src: y ? Us : Hs,
		iconAs: Ls,
		size: "sm",
		variant: "secondary",
		alt: y ? g.formatMessage(Ol.iconButtonClosed) : g.formatMessage(Ol.iconButtonOpened),
		onClick: oe
	}), ce = () => {
		S(!0);
	}, le = () => {
		if (u) {
			N(!1), F(d);
			return;
		}
		if (o && !C) {
			N(!1), F(s);
			return;
		}
		if (C && c && !T) {
			N(!1), F(l);
			return;
		}
		N(!0), F("");
	};
	(0, R.useImperativeHandle)(h, () => ({ updateErrorStateAndErrorMessage: le }));
	let ue = () => {
		S(!1), ne(), le();
	}, de = (e) => {
		if (x) {
			if (e.key === "Escape") {
				e.preventDefault(), _ && _.current.focus(), ne();
				return;
			}
			e.key === "Tab" && ue();
		}
	}, fe = (e) => {
		v.current && !v.current.contains(e.target) && x && ue();
	};
	(0, R.useEffect)(() => (document.addEventListener("keydown", de), document.addEventListener("click", fe, !0), () => {
		document.removeEventListener("click", fe, !0), document.removeEventListener("keydown", de);
	})), (0, R.useEffect)(() => {
		O(i ? i.userProvidedText ?? "" : ""), w(!!i && !!i.userProvidedText), E(!!i && !!i.selectionValue);
	}, [i]);
	let pe = () => {
		ae();
	}, me = (e) => {
		let t = e.target.value;
		if (!t.length) {
			O(""), w(!1), E(!1), ee([]), ne(), f && f({
				userProvidedText: "",
				selectionValue: "",
				selectionId: ""
			});
			return;
		}
		w(!0);
		let n = ie(t);
		ee(n);
		let r = n.find((e) => e.props.children.toLowerCase() === t.toLowerCase());
		if (!r) {
			E(!1), O(t), f && f({
				userProvidedText: t,
				selectionValue: "",
				selectionId: ""
			});
			return;
		}
		E(!0), O(r.props.children), f && f({
			userProvidedText: r.props.children,
			selectionValue: r.props.children,
			selectionId: r.props.id
		});
	}, { getControlProps: he } = X(), ge = he(m);
	return /* @__PURE__ */ R.createElement("div", {
		className: "pgn__form-autosuggest__wrapper",
		ref: v,
		onFocus: ce
	}, /* @__PURE__ */ R.createElement("div", {
		"aria-live": "assertive",
		className: "sr-only",
		"data-testid": "autosuggest-screen-reader-options-count"
	}, `${k.length} options found`), /* @__PURE__ */ R.createElement(qc, {
		controlId: ge.id,
		isInvalid: !M
	}, /* @__PURE__ */ R.createElement(rl, {
		ref: _,
		"aria-expanded": (k.length > 0).toString(),
		"aria-owns": "pgn__form-autosuggest__dropdown-box",
		role: "combobox",
		"aria-autocomplete": "list",
		autoComplete: "off",
		value: D,
		"aria-invalid": P,
		"aria-activedescendant": A,
		onChange: me,
		onClick: pe,
		trailingElement: se,
		"data-testid": "autosuggest-textbox-input",
		...ge
	}), p && M && /* @__PURE__ */ R.createElement($c, { type: "default" }, p), !M && /* @__PURE__ */ R.createElement($c, {
		type: "invalid",
		"feedback-for": ge.name
	}, P)), /* @__PURE__ */ R.createElement("ul", {
		id: "pgn__form-autosuggest__dropdown-box",
		className: "pgn__form-autosuggest__dropdown",
		role: "listbox"
	}, a ? /* @__PURE__ */ R.createElement("div", { className: "pgn__form-autosuggest__dropdown-loading" }, /* @__PURE__ */ R.createElement(Cl, {
		animation: "border",
		variant: "dark",
		screenReaderText: r,
		"data-testid": "autosuggest-loading-spinner"
	})) : k.length > 0 && k));
});
kl.defaultProps = {
	arrowKeyNavigationSelector: "a:not(:disabled),li:not(:disabled, .btn-icon),input:not(:disabled)",
	ignoredArrowKeysNames: ["ArrowRight", "ArrowLeft"],
	isLoading: !1,
	className: null,
	floatingLabel: null,
	onChange: null,
	helpMessage: "",
	placeholder: "",
	value: null,
	isValueRequired: !1,
	valueRequiredErrorMessageText: null,
	isSelectionRequired: !1,
	selectionRequiredErrorMessageText: null,
	hasCustomError: !1,
	customErrorMessageText: null,
	readOnly: !1,
	children: null,
	name: "form-autosuggest",
	screenReaderText: "loading"
}, kl.propTypes = {
	arrowKeyNavigationSelector: U.default.string,
	ignoredArrowKeysNames: U.default.arrayOf(U.default.string),
	isLoading: U.default.bool,
	className: U.default.string,
	floatingLabel: U.default.string,
	onChange: U.default.func,
	helpMessage: U.default.string,
	placeholder: U.default.string,
	value: U.default.shape({
		userProvidedText: U.default.string,
		selectionValue: U.default.string,
		selectionId: U.default.string
	}),
	isValueRequired: U.default.bool,
	valueRequiredErrorMessageText: xl(U.default.string, "isValueRequired"),
	isSelectionRequired: U.default.bool,
	selectionRequiredErrorMessageText: xl(U.default.string, "isSelectionRequired"),
	hasCustomError: U.default.bool,
	customErrorMessageText: xl(U.default.string, "hasCustomError"),
	name: U.default.string,
	readOnly: U.default.bool,
	children: U.default.node,
	screenReaderText: U.default.string
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Menu/MenuItem.js
function Al({ as: e = "button", children: t, defaultSelected: n = !1, iconAfter: r, iconBefore: i, ...a }) {
	let o = (0, V.default)(a.className, "pgn__menu-item");
	return /* @__PURE__ */ (0, R.createElement)(e, {
		...a,
		className: o
	}, /* @__PURE__ */ R.createElement(R.Fragment, null, i && /* @__PURE__ */ R.createElement(Ls, {
		className: "btn-icon-before",
		src: i
	}), /* @__PURE__ */ R.createElement("span", { className: "pgn__menu-item-text" }, t), /* @__PURE__ */ R.createElement("span", { className: "pgn__menu-item-content-spacer" }), r && /* @__PURE__ */ R.createElement(Ls, {
		className: "btn-icon-after",
		src: r
	})));
}
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormAutosuggestOption.js
function jl({ children: e, className: t, onClick: n, ...r }) {
	return /* @__PURE__ */ R.createElement(Al, {
		as: "li",
		"data-testid": "autosuggest-optionitem",
		role: "option",
		tabIndex: "-1",
		onClick: n,
		className: (0, V.default)(t, "dropdown-item"),
		...r
	}, e);
}
jl.defaultProps = {
	className: null,
	children: null,
	onClick: null
}, jl.propTypes = {
	className: U.default.string,
	children: U.default.string,
	onClick: U.default.func
};
var Ml = /* @__PURE__ */ R.createContext({
	getCheckboxControlProps: (e) => e,
	hasCheckboxSetProvider: !1
}), Nl = () => (0, R.useContext)(Ml);
function Pl({ children: e, name: t, onBlur: n, onFocus: r, onChange: i, value: a, defaultValue: o }) {
	let s = !o && Array.isArray(a), c = {
		name: t,
		value: a,
		defaultValue: o,
		getCheckboxControlProps: (e) => ({
			...e,
			name: t,
			onBlur: e.onBlur ? Hc(n, e.onBlur) : n,
			onFocus: e.onFocus ? Hc(r, e.onFocus) : r,
			onChange: e.onChange ? Hc(i, e.onChange) : i,
			checked: s ? a.includes(e.value) : void 0,
			defaultChecked: s ? void 0 : o && o.includes(e.value)
		}),
		onBlur: n,
		onFocus: r,
		onChange: i,
		hasCheckboxSetProvider: !0
	};
	return /* @__PURE__ */ R.createElement(Ml.Provider, { value: c }, e);
}
Pl.propTypes = {
	children: U.default.node.isRequired,
	name: U.default.string,
	onBlur: U.default.func,
	onFocus: U.default.func,
	onChange: U.default.func,
	value: U.default.arrayOf(U.default.string),
	defaultValue: U.default.arrayOf(U.default.string)
}, Pl.defaultProps = {
	onBlur: void 0,
	name: void 0,
	onFocus: void 0,
	onChange: void 0,
	value: void 0,
	defaultValue: void 0
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormCheckbox.js
var Fl = /* @__PURE__ */ R.forwardRef(({ isIndeterminate: e, ...t }, n) => {
	let { getCheckboxControlProps: r, hasCheckboxSetProvider: i } = Nl(), a = R.useRef(), o = n || a, { getControlProps: s } = X(), c = s({
		...t,
		className: (0, V.default)("pgn__form-checkbox-input", t.className)
	});
	return i && (c = r(c)), R.useEffect(() => {
		o.current && (o.current.indeterminate = e);
	}, [o, e]), /* @__PURE__ */ R.createElement("input", {
		type: "checkbox",
		...c,
		ref: o
	});
});
Fl.propTypes = {
	isIndeterminate: U.default.bool,
	className: U.default.string
}, Fl.defaultProps = {
	isIndeterminate: !1,
	className: void 0
};
var Il = /* @__PURE__ */ R.forwardRef(({ children: e, className: t, controlClassName: n, labelClassName: r, description: i, isInvalid: a, isValid: o, controlAs: s, floatLabelLeft: c, ...l }, u) => {
	let { hasCheckboxSetProvider: d } = Nl(), { hasFormGroupProvider: f, useSetIsControlGroupEffect: p, getControlProps: m } = X();
	p(!0);
	let h = f && !d ? {
		...m({}),
		role: "group"
	} : {}, g = /* @__PURE__ */ R.createElement(s, {
		...l,
		className: n,
		ref: u
	});
	return /* @__PURE__ */ R.createElement(qc, {
		controlId: l.id,
		isInvalid: a,
		isValid: o
	}, /* @__PURE__ */ R.createElement("div", {
		className: (0, V.default)("pgn__form-checkbox", t, {
			"pgn__form-control-valid": o,
			"pgn__form-control-invalid": a,
			"pgn__form-control-disabled": l.disabled,
			"pgn__form-control-label-left": !!c
		}),
		...h
	}, g, /* @__PURE__ */ R.createElement("div", null, /* @__PURE__ */ R.createElement(il, { className: r }, e), i && /* @__PURE__ */ R.createElement($c, { hasIcon: !1 }, i))));
});
Il.propTypes = {
	id: U.default.string,
	children: U.default.node.isRequired,
	className: U.default.string,
	controlClassName: U.default.string,
	labelClassName: U.default.string,
	description: U.default.node,
	isInvalid: U.default.bool,
	isValid: U.default.bool,
	controlAs: U.default.elementType,
	floatLabelLeft: U.default.bool,
	disabled: U.default.bool
}, Il.defaultProps = {
	id: void 0,
	className: void 0,
	controlClassName: void 0,
	labelClassName: void 0,
	description: void 0,
	isInvalid: !1,
	isValid: !1,
	controlAs: Fl,
	floatLabelLeft: !1,
	disabled: !1
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormSwitch.js
var Ll = /* @__PURE__ */ R.forwardRef(({ isIndeterminate: e, ...t }, n) => {
	let r = R.useRef(), i = n || r, { getControlProps: a } = X(), o = a({
		...t,
		className: (0, V.default)("pgn__form-switch-input", t.className)
	});
	return R.useEffect(() => {
		i.current && (i.current.indeterminate = e);
	}, [i, e]), /* @__PURE__ */ R.createElement("input", {
		type: "checkbox",
		...o,
		ref: i
	});
});
Ll.propTypes = {
	isIndeterminate: U.default.bool,
	className: U.default.string
}, Ll.defaultProps = {
	isIndeterminate: !1,
	className: void 0
};
var Rl = /* @__PURE__ */ R.forwardRef(({ children: e, className: t, helperText: n, ...r }, i) => /* @__PURE__ */ R.createElement("div", { className: "d-inline-flex flex-column" }, /* @__PURE__ */ R.createElement(Il, {
	className: (0, V.default)("pgn__form-switch", t),
	...r,
	role: "switch",
	ref: i,
	controlAs: Ll,
	isValid: null,
	isInvalid: null,
	description: null
}, e), n && /* @__PURE__ */ R.createElement("div", { className: "pgn__form-switch-helper-text" }, n)));
Rl.propTypes = {
	children: U.default.node.isRequired,
	className: U.default.string,
	labelClassName: U.default.string,
	helperText: U.default.node,
	floatLabelLeft: U.default.bool
}, Rl.defaultProps = {
	className: void 0,
	labelClassName: void 0,
	helperText: void 0,
	floatLabelLeft: !1
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormCheckboxSet.js
function zl({ children: e, name: t, value: n, defaultValue: r, isInline: i, onChange: a, onFocus: o, onBlur: s, ...c }) {
	let { getControlProps: l, useSetIsControlGroupEffect: u } = X();
	u(!0);
	let d = l(c);
	return /* @__PURE__ */ R.createElement(Pl, {
		name: t,
		value: n,
		defaultValue: r,
		onFocus: o,
		onBlur: s,
		onChange: a
	}, /* @__PURE__ */ R.createElement(dl, {
		role: "group",
		isInline: i,
		...d
	}, e));
}
zl.propTypes = {
	children: U.default.node.isRequired,
	className: U.default.string,
	name: U.default.string.isRequired,
	value: U.default.arrayOf(U.default.string),
	defaultValue: U.default.arrayOf(U.default.string),
	isInline: U.default.bool,
	onChange: U.default.func,
	onFocus: U.default.func,
	onBlur: U.default.func
}, zl.defaultProps = {
	className: void 0,
	value: void 0,
	defaultValue: void 0,
	isInline: !1,
	onChange: void 0,
	onFocus: void 0,
	onBlur: void 0
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormSwitchSet.js
var Bl = zl, Vl = ns;
Vl.Control = rl, Vl.Radio = ul, Vl.RadioSet = fl, Vl.Autosuggest = kl, Vl.AutosuggestOption = jl, Vl.Checkbox = Il, Vl.CheckboxSet = zl, Vl.Switch = Rl, Vl.SwitchSet = Bl, Vl.Label = il, Vl.Group = al, Vl.Text = Qc;
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Stack/index.js
var Hl = /* @__PURE__ */ (0, R.forwardRef)(({ direction: e = "vertical", gap: t = 0, reversed: n = !1, children: r, className: i, ...a }, o) => /* @__PURE__ */ R.createElement("div", {
	ref: o,
	className: (0, V.default)(e === "horizontal" ? "pgn__hstack" : "pgn__vstack", t ? `pgn__stack-gap--${t}` : "", n ? "pgn__stack-reversed" : "", i),
	...a
}, r)), Ul = /* @__PURE__ */ R.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ R.createElement("div", {
	className: (0, V.default)("pgn__card-body", e),
	ref: r,
	...n
}, t)), Wl = "card", Gl = [
	"primary",
	"secondary",
	"success",
	"danger",
	"warning",
	"info",
	"dark",
	"light"
], Kl = ["white", "muted"], ql = /* @__PURE__ */ R.forwardRef(({ prefix: e, className: t, bgColor: n, textColor: r, borderColor: i, hasBody: a = !1, children: o, as: s = "div", ...c }, l) => {
	let u = (0, V.default)(t, e ? `${e}-${Wl}` : Wl, n && `bg-${n}`, r && `text-${r}`, i && `border-${i}`);
	return /* @__PURE__ */ R.createElement(s, {
		ref: l,
		...c,
		className: u
	}, a ? /* @__PURE__ */ R.createElement(Ul, null, o) : o);
});
ql.propTypes = {
	prefix: U.default.string,
	bgColor: U.default.oneOf(Gl),
	textColor: U.default.oneOf([...Gl, ...Kl]),
	borderColor: U.default.oneOf(Gl),
	hasBody: U.default.bool,
	as: U.default.elementType,
	className: U.default.string,
	children: U.default.node
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Card/CardContext.js
var Jl = /* @__PURE__ */ (0, R.createContext)({
	orientation: "vertical",
	isLoading: !1,
	variant: "light"
});
function Yl({ orientation: e = "vertical", children: t, isLoading: n = !1, variant: r = "light" }) {
	return /* @__PURE__ */ R.createElement(Jl.Provider, { value: {
		orientation: e,
		isLoading: n,
		variant: r
	} }, t);
}
//#endregion
//#region node_modules/.pnpm/react-loading-skeleton@3.5.0_react@18.3.1/node_modules/react-loading-skeleton/dist/index.js
var Xl = R.createContext({}), Zl = !0;
function Ql({ baseColor: e, highlightColor: t, width: n, height: r, borderRadius: i, circle: a, direction: o, duration: s, enableAnimation: c = Zl, customHighlightBackground: l }) {
	let u = {};
	return o === "rtl" && (u["--animation-direction"] = "reverse"), typeof s == "number" && (u["--animation-duration"] = `${s}s`), c || (u["--pseudo-element-display"] = "none"), (typeof n == "string" || typeof n == "number") && (u.width = n), (typeof r == "string" || typeof r == "number") && (u.height = r), (typeof i == "string" || typeof i == "number") && (u.borderRadius = i), a && (u.borderRadius = "50%"), e !== void 0 && (u["--base-color"] = e), t !== void 0 && (u["--highlight-color"] = t), typeof l == "string" && (u["--custom-highlight-background"] = l), u;
}
function $l({ count: e = 1, wrapper: t, className: n, containerClassName: r, containerTestId: i, circle: a = !1, style: o, ...s }) {
	let c = R.useContext(Xl), l = { ...s };
	for (let [e, t] of Object.entries(s)) t === void 0 && delete l[e];
	let u = {
		...c,
		...l,
		circle: a
	}, d = {
		...o,
		...Ql(u)
	}, f = "react-loading-skeleton";
	n && (f += ` ${n}`);
	let p = u.inline ?? !1, m = [], h = Math.ceil(e);
	for (let t = 0; t < h; t++) {
		let n = d;
		if (h > e && t === h - 1) {
			let t = n.width ?? "100%", r = e % 1, i = typeof t == "number" ? t * r : `calc(${t} * ${r})`;
			n = {
				...n,
				width: i
			};
		}
		let r = R.createElement("span", {
			className: f,
			style: n,
			key: t
		}, "‌");
		p ? m.push(r) : m.push(R.createElement(R.Fragment, { key: t }, r, R.createElement("br", null)));
	}
	return R.createElement("span", {
		className: r,
		"data-testid": i,
		"aria-live": "polite",
		"aria-busy": u.enableAnimation ?? Zl
	}, t ? m.map((e, n) => R.createElement(t, { key: n }, e)) : m);
}
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Card/CardHeader.js
var eu = 20, tu = /* @__PURE__ */ R.forwardRef(({ actions: e, className: t, size: n, subtitle: r, title: i, skeletonHeight: a, skeletonWidth: o }, s) => {
	let { isLoading: c } = (0, R.useContext)(Jl), l = (0, R.useCallback)((e) => {
		if (/* @__PURE__ */ R.isValidElement(e)) {
			let { children: t } = e.props, r = {
				size: n,
				children: Array.isArray(t) ? t.map(l) : l(t)
			};
			return /* @__PURE__ */ R.cloneElement(e, r);
		}
		return e;
	}, [n]);
	return c ? /* @__PURE__ */ R.createElement("div", { className: (0, V.default)("pgn__card-header", t) }, /* @__PURE__ */ R.createElement($l, {
		containerClassName: "pgn__card-header-loader",
		height: a,
		width: o
	})) : /* @__PURE__ */ R.createElement("div", {
		className: (0, V.default)("pgn__card-header", t),
		ref: s
	}, /* @__PURE__ */ R.createElement("div", { className: "pgn__card-header-content" }, i && /* @__PURE__ */ R.createElement("div", { className: `pgn__card-header-title-${n}` }, i), r && /* @__PURE__ */ R.createElement("div", { className: `pgn__card-header-subtitle-${n}` }, r)), e && /* @__PURE__ */ R.createElement("div", { className: "pgn__card-header-actions" }, n === "md" ? e : l(e)));
});
tu.propTypes = {
	actions: U.default.node,
	className: U.default.string,
	title: U.default.node,
	size: U.default.oneOf(["sm", "md"]),
	subtitle: U.default.node,
	skeletonHeight: U.default.number,
	skeletonWidth: U.default.number
}, tu.defaultProps = {
	actions: null,
	className: null,
	size: "md",
	title: null,
	subtitle: null,
	skeletonHeight: eu,
	skeletonWidth: null
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Card/CardDivider.js
var nu = /* @__PURE__ */ (0, R.forwardRef)(({ className: e, ...t }, n) => /* @__PURE__ */ R.createElement("div", {
	className: (0, V.default)("pgn__card-divider", e),
	ref: n,
	...t
})), ru = 100, iu = /* @__PURE__ */ R.forwardRef(({ className: e, children: t, title: n, actions: r, muted: i, skeletonHeight: a, skeletonWidth: o }, s) => {
	let { isLoading: c } = (0, R.useContext)(Jl);
	return c ? /* @__PURE__ */ R.createElement("div", { className: (0, V.default)("pgn__card-section", e, { "is-muted": i }) }, /* @__PURE__ */ R.createElement($l, {
		containerClassName: "pgn__card-section-loader",
		height: a,
		width: o
	})) : /* @__PURE__ */ R.createElement("div", {
		className: (0, V.default)("pgn__card-section", e, { "is-muted": i }),
		ref: s
	}, n && /* @__PURE__ */ R.createElement("div", { className: "pgn__card-section-title" }, n), t, r && /* @__PURE__ */ R.createElement("div", { className: "pgn__card-section-actions" }, r));
});
iu.propTypes = {
	className: U.default.string,
	children: U.default.node,
	title: U.default.node,
	actions: U.default.node,
	muted: U.default.bool,
	skeletonHeight: U.default.number,
	skeletonWidth: U.default.number
}, iu.defaultProps = {
	children: null,
	className: void 0,
	title: void 0,
	actions: void 0,
	muted: !1,
	skeletonHeight: ru,
	skeletonWidth: void 0
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Card/CardFooter.js
var au = 18, ou = /* @__PURE__ */ R.forwardRef(({ children: e, className: t, isStacked: n, textElement: r, skeletonHeight: i, skeletonWidth: a, orientation: o }, s) => {
	let { orientation: c, isLoading: l } = (0, R.useContext)(Jl), u = o || c, d = `pgn__card-footer ${u}${n ? "-stacked" : ""}`, f = `pgn__card-footer-text ${u}${n ? "-stacked" : ""}`;
	return l ? /* @__PURE__ */ R.createElement("div", { className: (0, V.default)(t, d) }, /* @__PURE__ */ R.createElement($l, {
		containerClassName: "pgn__card-footer-loader",
		height: i,
		width: a
	})) : /* @__PURE__ */ R.createElement("div", {
		className: (0, V.default)(t, d),
		ref: s
	}, r && /* @__PURE__ */ R.createElement("div", { className: f }, r), e);
});
ou.propTypes = {
	children: U.default.node,
	className: U.default.string,
	textElement: U.default.node,
	isStacked: U.default.bool,
	orientation: U.default.oneOf(["horizontal", "vertical"]),
	skeletonHeight: U.default.number,
	skeletonWidth: U.default.number
}, ou.defaultProps = {
	children: null,
	className: void 0,
	textElement: void 0,
	isStacked: !1,
	orientation: void 0,
	skeletonHeight: au,
	skeletonWidth: void 0
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Card/CardFallbackDefaultImage.js
var su = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXwAAACMCAYAAAB/AhJnAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAH6SURBVHgB7dRBEYBADACxwuDf5j0QUXywiYhc7zk7APzd3gNAgvABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIp4BaNpp2Q/3/wfPkGyXOQAAAABJRU5ErkJggg==", cu = 140, lu = 41, uu = /* @__PURE__ */ R.forwardRef(({ src: e, fallbackSrc: t, srcAlt: n, logoSrc: r, fallbackLogoSrc: i, logoAlt: a, skeletonHeight: o, skeletonWidth: s, logoSkeleton: c, logoSkeletonHeight: l, logoSkeletonWidth: u, className: d, imageLoadingType: f, skeletonDuringImageLoad: p }, m) => {
	let { orientation: h, isLoading: g } = (0, R.useContext)(Jl), [_, v] = (0, R.useState)(!1), [y, b] = (0, R.useState)(!1), x = `pgn__card-wrapper-image-cap ${h}`, S = () => /* @__PURE__ */ R.createElement($l, {
		containerClassName: "pgn__card-image-cap-loader",
		height: h === "horizontal" ? "100%" : o,
		width: s
	}), C = () => /* @__PURE__ */ R.createElement($l, {
		containerClassName: "pgn__card-logo-cap",
		height: l,
		width: u
	});
	if (g) return /* @__PURE__ */ R.createElement("div", {
		className: (0, V.default)(x, d),
		"data-testid": "image-loader-wrapper"
	}, S(), c && C());
	let w = (e, t, n) => {
		let { currentTarget: r } = e;
		if (!t || r.src.endsWith(t)) {
			n === "imageCap" ? r.src = su : b(!1);
			return;
		}
		r.src = t;
	};
	return /* @__PURE__ */ R.createElement("div", {
		className: (0, V.default)(d, x),
		ref: m
	}, !!e && /* @__PURE__ */ R.createElement(R.Fragment, null, p && !_ && S(), /* @__PURE__ */ R.createElement("img", {
		className: (0, V.default)("pgn__card-image-cap", { show: _ }),
		src: e,
		onError: (e) => w(e, t, "imageCap"),
		onLoad: () => v(!0),
		alt: n,
		loading: f
	})), !!r && /* @__PURE__ */ R.createElement(R.Fragment, null, p && !y && C(), /* @__PURE__ */ R.createElement("img", {
		className: (0, V.default)("pgn__card-logo-cap", { show: y }),
		src: r,
		onError: (e) => w(e, i, "logoCap"),
		onLoad: () => b(!0),
		alt: a,
		loading: f
	})));
});
uu.propTypes = {
	className: U.default.string,
	src: U.default.string,
	fallbackSrc: U.default.string,
	srcAlt: U.default.string,
	logoSrc: U.default.string,
	fallbackLogoSrc: U.default.string,
	logoAlt: U.default.string,
	skeletonHeight: U.default.number,
	skeletonWidth: U.default.number,
	logoSkeleton: U.default.bool,
	logoSkeletonHeight: U.default.number,
	logoSkeletonWidth: U.default.number,
	imageLoadingType: U.default.oneOf(["eager", "lazy"]),
	skeletonDuringImageLoad: U.default.bool
}, uu.defaultProps = {
	src: void 0,
	fallbackSrc: su,
	logoSrc: void 0,
	fallbackLogoSrc: void 0,
	className: void 0,
	srcAlt: void 0,
	logoAlt: void 0,
	skeletonHeight: cu,
	logoSkeleton: !1,
	logoSkeletonHeight: lu,
	skeletonWidth: void 0,
	logoSkeletonWidth: void 0,
	imageLoadingType: "eager",
	skeletonDuringImageLoad: !1
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Card/CardStatus.js
var du = /* @__PURE__ */ R.forwardRef(({ className: e, children: t, variant: n, icon: r, title: i, actions: a, ...o }, s) => {
	let { isLoading: c } = (0, R.useContext)(Jl);
	return c ? /* @__PURE__ */ R.createElement("div", {
		className: (0, V.default)("pgn__card-status", e),
		"data-testid": "card-status-skeleton",
		ref: s
	}, /* @__PURE__ */ R.createElement($l, null)) : /* @__PURE__ */ R.createElement("div", {
		className: (0, V.default)("pgn__card-status", `pgn__card-status__${n}`, e),
		ref: s,
		...o
	}, /* @__PURE__ */ R.createElement("div", { className: "pgn__card-status__content" }, r && /* @__PURE__ */ R.createElement(Ls, {
		className: "pgn__card-status__content-icon",
		src: r
	}), /* @__PURE__ */ R.createElement("div", { className: "pgn__card-status__message-content" }, i && /* @__PURE__ */ R.createElement("div", { className: "pgn__card-status__heading" }, i), t)), !!a && /* @__PURE__ */ R.createElement("div", { className: "pgn__card-status__actions" }, a));
});
du.propTypes = {
	children: U.default.node.isRequired,
	className: U.default.string,
	icon: U.default.func,
	variant: U.default.oneOf([
		"primary",
		"success",
		"danger",
		"warning"
	]),
	title: U.default.oneOfType([U.default.element, U.default.string]),
	actions: U.default.node
}, du.defaultProps = {
	className: void 0,
	icon: void 0,
	variant: "warning",
	title: void 0,
	actions: void 0
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Card/index.js
var fu = [
	"light",
	"dark",
	"muted"
], pu = /* @__PURE__ */ R.forwardRef(({ orientation: e, isLoading: t, className: n, isClickable: r, muted: i, variant: a, ...o }, s) => {
	let c = i ? "muted" : a;
	return /* @__PURE__ */ R.createElement(Yl, {
		orientation: e,
		isLoading: t,
		variant: c
	}, /* @__PURE__ */ R.createElement(ql, {
		...o,
		className: (0, V.default)(n, "pgn__card", {
			horizontal: e === "horizontal",
			clickable: r,
			[`pgn__card-${c}`]: c
		}),
		ref: s,
		tabIndex: r ? 0 : -1
	}));
});
pu.propTypes = {
	className: U.default.string,
	orientation: U.default.oneOf(["vertical", "horizontal"]),
	isClickable: U.default.bool,
	isLoading: U.default.bool,
	variant: U.default.oneOf(fu),
	muted: U.default.bool
}, pu.defaultProps = {
	...ql.defaultProps,
	className: void 0,
	orientation: "vertical",
	isClickable: !1,
	variant: "light",
	isLoading: !1
};
var mu = Fs(pu, "Card", { muted: {
	deprType: Ps.REMOVED,
	message: "Use \"variant\" prop instead, i.e. variant=\"muted\""
} });
mu.Status = du, mu.Header = tu, mu.Divider = nu, mu.Section = iu, mu.Footer = ou, mu.ImageCap = uu, mu.Context = Jl, mu.Body = Ul;
//#endregion
//#region src/external-resources/apiTypes.ts
var hu = /* @__PURE__ */ function(e) {
	return e.ARTICLE = "ARTICLE", e.VIDEO = "VIDEO", e.PDF = "PDF", e.TEXTBOOK = "TEXTBOOK", e.VIRTUAL_MACHINE = "VIRTUAL_MACHINE", e.INTERACTIVE_ACTIVITY = "INTERACTIVE_ACTIVITY", e.WGU_LIBRARY = "WGU_LIBRARY", e.CUSTOM = "CUSTOM", e;
}({}), gu = {
	[hu.ARTICLE]: "Articles",
	[hu.VIDEO]: "Video",
	[hu.PDF]: "PDF",
	[hu.TEXTBOOK]: "Textbook / Book",
	[hu.VIRTUAL_MACHINE]: "Virtual machines",
	[hu.INTERACTIVE_ACTIVITY]: "Interactive activities",
	[hu.WGU_LIBRARY]: "WGU Library"
}, _u = {
	[hu.ARTICLE]: "article",
	[hu.VIDEO]: "smart_display",
	[hu.PDF]: "picture_as_pdf",
	[hu.TEXTBOOK]: "menu_book",
	[hu.VIRTUAL_MACHINE]: "laptop",
	[hu.INTERACTIVE_ACTIVITY]: "touch_app",
	[hu.WGU_LIBRARY]: "local_library",
	[hu.CUSTOM]: "description"
}, vu = ({ item: e, itemAlt: t, variant: n }) => /* @__PURE__ */ (0, Mn.jsx)("div", {
	className: "external-resource-thumbnail",
	children: n === "icon" ? /* @__PURE__ */ (0, Mn.jsx)("div", {
		className: "external-resource-icon-container",
		children: /* @__PURE__ */ (0, Mn.jsx)("div", {
			className: "external-resource-icon rounded d-flex align-items-center justify-content-center",
			children: /* @__PURE__ */ (0, Mn.jsx)("span", {
				className: "material-icons-outlined",
				"aria-hidden": "true",
				children: e
			})
		})
	}) : /* @__PURE__ */ (0, Mn.jsx)(as, {
		className: "external-resource-image",
		src: e,
		alt: t,
		rounded: !0
	})
}), yu = ({ resource: e, isClickable: t = !1, actions: n, className: r }) => {
	let i = e.fileType === hu.CUSTOM ? e.customFileType ?? "" : gu[e.fileType], a = e.thumbnailIcon || _u[e.fileType];
	return /* @__PURE__ */ (0, Mn.jsxs)(mu, {
		orientation: "horizontal",
		className: `external-resource-card ${t ? "is-clickable" : ""} ${r ?? ""}`,
		onClick: () => t ? window.open(e.url, "_blank", "noopener,noreferrer") : null,
		children: [
			/* @__PURE__ */ (0, Mn.jsx)(vu, {
				variant: e.thumbnailUrl ? "image" : "icon",
				item: e.thumbnailUrl || a,
				itemAlt: e.thumbnailAltText
			}),
			/* @__PURE__ */ (0, Mn.jsx)(mu.Body, { children: /* @__PURE__ */ (0, Mn.jsxs)(mu.Section, { children: [/* @__PURE__ */ (0, Mn.jsxs)(Hl, {
				direction: "horizontal",
				gap: 1,
				className: "card-type text-uppercase",
				children: [
					/* @__PURE__ */ (0, Mn.jsx)("span", { children: i }),
					/* @__PURE__ */ (0, Mn.jsx)("span", { children: "·" }),
					/* @__PURE__ */ (0, Mn.jsxs)("span", { children: [e.expectedMinutes, " min"] })
				]
			}), /* @__PURE__ */ (0, Mn.jsxs)(Hl, { children: [/* @__PURE__ */ (0, Mn.jsx)("span", {
				className: "card-title",
				children: e.title
			}), /* @__PURE__ */ (0, Mn.jsx)("span", {
				className: "card-publisher",
				children: e.publisher
			})] })] }) }),
			n && /* @__PURE__ */ (0, Mn.jsx)(mu.Footer, {
				className: "d-flex align-items-start justify-content-end",
				children: /* @__PURE__ */ (0, Mn.jsx)("div", {
					onClick: (e) => e.stopPropagation(),
					children: n
				})
			})
		]
	});
};
//#endregion
export { c as $, er as A, In as B, no as C, Br as D, Gr as E, B as F, _n as G, Pn as H, z as I, x as J, v as K, Vn as L, qn as M, Kn as N, kr as O, Hn as P, o as Q, Nn as R, io as S, Xr as T, An as U, Bn as V, On as W, m as X, b as Y, u as Z, wo as _, hu as a, _o as b, Vl as c, Us as d, Hs as f, Eo as g, fs as h, gu as i, Yn as j, pr as k, Sl as l, Ls as m, vu as n, mu as o, Vs as p, y as q, _u as r, Hl as s, yu as t, $s as u, Co as v, oi as w, mo as x, bo as y, zn as z };
