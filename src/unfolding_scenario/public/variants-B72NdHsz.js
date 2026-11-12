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
	var I = Object.assign, re;
	function ie(e) {
		if (re === void 0) try {
			throw Error();
		} catch (e) {
			var t = e.stack.trim().match(/\n( *(at )?)/);
			re = t && t[1] || "";
		}
		return "\n" + re + e;
	}
	var ae = !1;
	function oe(e, t) {
		if (!e || ae) return "";
		ae = !0;
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
			ae = !1, Error.prepareStackTrace = n;
		}
		return (e = e ? e.displayName || e.name : "") ? ie(e) : "";
	}
	function se(e) {
		switch (e.tag) {
			case 5: return ie(e.type);
			case 16: return ie("Lazy");
			case 13: return ie("Suspense");
			case 19: return ie("SuspenseList");
			case 0:
			case 2:
			case 15: return e = oe(e.type, !1), e;
			case 11: return e = oe(e.type.render, !1), e;
			case 1: return e = oe(e.type, !0), e;
			default: return "";
		}
	}
	function ce(e) {
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
			case N: return t = e.displayName || null, t === null ? ce(e.type) || "Memo" : t;
			case P:
				t = e._payload, e = e._init;
				try {
					return ce(e(t));
				} catch {}
		}
		return null;
	}
	function le(e) {
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
			case 16: return ce(t);
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
	function ue(e) {
		switch (typeof e) {
			case "boolean":
			case "number":
			case "string":
			case "undefined": return e;
			case "object": return e;
			default: return "";
		}
	}
	function de(e) {
		var t = e.type;
		return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
	}
	function fe(e) {
		var t = de(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
	function pe(e) {
		e._valueTracker ||= fe(e);
	}
	function me(e) {
		if (!e) return !1;
		var t = e._valueTracker;
		if (!t) return !0;
		var n = t.getValue(), r = "";
		return e && (r = de(e) ? e.checked ? "true" : "false" : e.value), e = r, e === n ? !1 : (t.setValue(e), !0);
	}
	function he(e) {
		if (e ||= typeof document < "u" ? document : void 0, e === void 0) return null;
		try {
			return e.activeElement || e.body;
		} catch {
			return e.body;
		}
	}
	function ge(e, t) {
		var n = t.checked;
		return I({}, t, {
			defaultChecked: void 0,
			defaultValue: void 0,
			value: void 0,
			checked: n ?? e._wrapperState.initialChecked
		});
	}
	function _e(e, t) {
		var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked == null ? t.defaultChecked : t.checked;
		n = ue(t.value == null ? n : t.value), e._wrapperState = {
			initialChecked: r,
			initialValue: n,
			controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
		};
	}
	function ve(e, t) {
		t = t.checked, t != null && S(e, "checked", t, !1);
	}
	function ye(e, t) {
		ve(e, t);
		var n = ue(t.value), r = t.type;
		if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
		else if (r === "submit" || r === "reset") {
			e.removeAttribute("value");
			return;
		}
		t.hasOwnProperty("value") ? xe(e, t.type, n) : t.hasOwnProperty("defaultValue") && xe(e, t.type, ue(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
	}
	function be(e, t, n) {
		if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
			var r = t.type;
			if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
			t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
		}
		n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
	}
	function xe(e, t, n) {
		(t !== "number" || he(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
	}
	var Se = Array.isArray;
	function Ce(e, t, n, r) {
		if (e = e.options, t) {
			t = {};
			for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
			for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0);
		} else {
			for (n = "" + ue(n), t = null, i = 0; i < e.length; i++) {
				if (e[i].value === n) {
					e[i].selected = !0, r && (e[i].defaultSelected = !0);
					return;
				}
				t !== null || e[i].disabled || (t = e[i]);
			}
			t !== null && (t.selected = !0);
		}
	}
	function we(e, t) {
		if (t.dangerouslySetInnerHTML != null) throw Error(r(91));
		return I({}, t, {
			value: void 0,
			defaultValue: void 0,
			children: "" + e._wrapperState.initialValue
		});
	}
	function Te(e, t) {
		var n = t.value;
		if (n == null) {
			if (n = t.children, t = t.defaultValue, n != null) {
				if (t != null) throw Error(r(92));
				if (Se(n)) {
					if (1 < n.length) throw Error(r(93));
					n = n[0];
				}
				t = n;
			}
			t ??= "", n = t;
		}
		e._wrapperState = { initialValue: ue(n) };
	}
	function Ee(e, t) {
		var n = ue(t.value), r = ue(t.defaultValue);
		n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
	}
	function De(e) {
		var t = e.textContent;
		t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
	}
	function Oe(e) {
		switch (e) {
			case "svg": return "http://www.w3.org/2000/svg";
			case "math": return "http://www.w3.org/1998/Math/MathML";
			default: return "http://www.w3.org/1999/xhtml";
		}
	}
	function ke(e, t) {
		return e == null || e === "http://www.w3.org/1999/xhtml" ? Oe(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
	}
	var Ae, je = function(e) {
		return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
			MSApp.execUnsafeLocalFunction(function() {
				return e(t, n, r, i);
			});
		} : e;
	}(function(e, t) {
		if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
		else {
			for (Ae ||= document.createElement("div"), Ae.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Ae.firstChild; e.firstChild;) e.removeChild(e.firstChild);
			for (; t.firstChild;) e.appendChild(t.firstChild);
		}
	});
	function L(e, t) {
		if (t) {
			var n = e.firstChild;
			if (n && n === e.lastChild && n.nodeType === 3) {
				n.nodeValue = t;
				return;
			}
		}
		e.textContent = t;
	}
	var Me = {
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
	}, Ne = [
		"Webkit",
		"ms",
		"Moz",
		"O"
	];
	Object.keys(Me).forEach(function(e) {
		Ne.forEach(function(t) {
			t = t + e.charAt(0).toUpperCase() + e.substring(1), Me[t] = Me[e];
		});
	});
	function Pe(e, t, n) {
		return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Me.hasOwnProperty(e) && Me[e] ? ("" + t).trim() : t + "px";
	}
	function Fe(e, t) {
		for (var n in e = e.style, t) if (t.hasOwnProperty(n)) {
			var r = n.indexOf("--") === 0, i = Pe(n, t[n], r);
			n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i;
		}
	}
	var Ie = I({ menuitem: !0 }, {
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
	function Le(e, t) {
		if (t) {
			if (Ie[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(r(137, e));
			if (t.dangerouslySetInnerHTML != null) {
				if (t.children != null) throw Error(r(60));
				if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(r(61));
			}
			if (t.style != null && typeof t.style != "object") throw Error(r(62));
		}
	}
	function Re(e, t) {
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
	var ze = null;
	function Be(e) {
		return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
	}
	var Ve = null, He = null, Ue = null;
	function We(e) {
		if (e = Bi(e)) {
			if (typeof Ve != "function") throw Error(r(280));
			var t = e.stateNode;
			t && (t = Hi(t), Ve(e.stateNode, e.type, t));
		}
	}
	function Ge(e) {
		He ? Ue ? Ue.push(e) : Ue = [e] : He = e;
	}
	function Ke() {
		if (He) {
			var e = He, t = Ue;
			if (Ue = He = null, We(e), t) for (e = 0; e < t.length; e++) We(t[e]);
		}
	}
	function qe(e, t) {
		return e(t);
	}
	function Je() {}
	var Ye = !1;
	function Xe(e, t, n) {
		if (Ye) return e(t, n);
		Ye = !0;
		try {
			return qe(e, t, n);
		} finally {
			Ye = !1, (He !== null || Ue !== null) && (Je(), Ke());
		}
	}
	function Ze(e, t) {
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
	var Qe = !1;
	if (c) try {
		var $e = {};
		Object.defineProperty($e, "passive", { get: function() {
			Qe = !0;
		} }), window.addEventListener("test", $e, $e), window.removeEventListener("test", $e, $e);
	} catch {
		Qe = !1;
	}
	function et(e, t, n, r, i, a, o, s, c) {
		var l = Array.prototype.slice.call(arguments, 3);
		try {
			t.apply(n, l);
		} catch (e) {
			this.onError(e);
		}
	}
	var tt = !1, nt = null, rt = !1, it = null, at = { onError: function(e) {
		tt = !0, nt = e;
	} };
	function ot(e, t, n, r, i, a, o, s, c) {
		tt = !1, nt = null, et.apply(at, arguments);
	}
	function st(e, t, n, i, a, o, s, c, l) {
		if (ot.apply(this, arguments), tt) {
			if (tt) {
				var u = nt;
				tt = !1, nt = null;
			} else throw Error(r(198));
			rt || (rt = !0, it = u);
		}
	}
	function ct(e) {
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
	function lt(e) {
		if (e.tag === 13) {
			var t = e.memoizedState;
			if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
		}
		return null;
	}
	function ut(e) {
		if (ct(e) !== e) throw Error(r(188));
	}
	function dt(e) {
		var t = e.alternate;
		if (!t) {
			if (t = ct(e), t === null) throw Error(r(188));
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
					if (o === n) return ut(a), e;
					if (o === i) return ut(a), t;
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
	function ft(e) {
		return e = dt(e), e === null ? null : pt(e);
	}
	function pt(e) {
		if (e.tag === 5 || e.tag === 6) return e;
		for (e = e.child; e !== null;) {
			var t = pt(e);
			if (t !== null) return t;
			e = e.sibling;
		}
		return null;
	}
	var mt = n.unstable_scheduleCallback, ht = n.unstable_cancelCallback, gt = n.unstable_shouldYield, _t = n.unstable_requestPaint, R = n.unstable_now, vt = n.unstable_getCurrentPriorityLevel, yt = n.unstable_ImmediatePriority, bt = n.unstable_UserBlockingPriority, xt = n.unstable_NormalPriority, St = n.unstable_LowPriority, Ct = n.unstable_IdlePriority, wt = null, Tt = null;
	function Et(e) {
		if (Tt && typeof Tt.onCommitFiberRoot == "function") try {
			Tt.onCommitFiberRoot(wt, e, void 0, (e.current.flags & 128) == 128);
		} catch {}
	}
	var Dt = Math.clz32 ? Math.clz32 : At, Ot = Math.log, kt = Math.LN2;
	function At(e) {
		return e >>>= 0, e === 0 ? 32 : 31 - (Ot(e) / kt | 0) | 0;
	}
	var jt = 64, Mt = 4194304;
	function Nt(e) {
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
	function Pt(e, t) {
		var n = e.pendingLanes;
		if (n === 0) return 0;
		var r = 0, i = e.suspendedLanes, a = e.pingedLanes, o = n & 268435455;
		if (o !== 0) {
			var s = o & ~i;
			s === 0 ? (a &= o, a !== 0 && (r = Nt(a))) : r = Nt(s);
		} else o = n & ~i, o === 0 ? a !== 0 && (r = Nt(a)) : r = Nt(o);
		if (r === 0) return 0;
		if (t !== 0 && t !== r && (t & i) === 0 && (i = r & -r, a = t & -t, i >= a || i === 16 && a & 4194240)) return t;
		if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t;) n = 31 - Dt(t), i = 1 << n, r |= e[n], t &= ~i;
		return r;
	}
	function Ft(e, t) {
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
	function It(e, t) {
		for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, a = e.pendingLanes; 0 < a;) {
			var o = 31 - Dt(a), s = 1 << o, c = i[o];
			c === -1 ? ((s & n) === 0 || (s & r) !== 0) && (i[o] = Ft(s, t)) : c <= t && (e.expiredLanes |= s), a &= ~s;
		}
	}
	function Lt(e) {
		return e = e.pendingLanes & -1073741825, e === 0 ? e & 1073741824 ? 1073741824 : 0 : e;
	}
	function Rt() {
		var e = jt;
		return jt <<= 1, !(jt & 4194240) && (jt = 64), e;
	}
	function zt(e) {
		for (var t = [], n = 0; 31 > n; n++) t.push(e);
		return t;
	}
	function Bt(e, t, n) {
		e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Dt(t), e[t] = n;
	}
	function Vt(e, t) {
		var n = e.pendingLanes & ~t;
		e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
		var r = e.eventTimes;
		for (e = e.expirationTimes; 0 < n;) {
			var i = 31 - Dt(n), a = 1 << i;
			t[i] = 0, r[i] = -1, e[i] = -1, n &= ~a;
		}
	}
	function Ht(e, t) {
		var n = e.entangledLanes |= t;
		for (e = e.entanglements; n;) {
			var r = 31 - Dt(n), i = 1 << r;
			i & t | e[r] & t && (e[r] |= t), n &= ~i;
		}
	}
	var z = 0;
	function Ut(e) {
		return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
	}
	var Wt, Gt, Kt, qt, Jt, Yt = !1, Xt = [], Zt = null, Qt = null, $t = null, en = /* @__PURE__ */ new Map(), tn = /* @__PURE__ */ new Map(), nn = [], rn = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
	function an(e, t) {
		switch (e) {
			case "focusin":
			case "focusout":
				Zt = null;
				break;
			case "dragenter":
			case "dragleave":
				Qt = null;
				break;
			case "mouseover":
			case "mouseout":
				$t = null;
				break;
			case "pointerover":
			case "pointerout":
				en.delete(t.pointerId);
				break;
			case "gotpointercapture":
			case "lostpointercapture": tn.delete(t.pointerId);
		}
	}
	function B(e, t, n, r, i, a) {
		return e === null || e.nativeEvent !== a ? (e = {
			blockedOn: t,
			domEventName: n,
			eventSystemFlags: r,
			nativeEvent: a,
			targetContainers: [i]
		}, t !== null && (t = Bi(t), t !== null && Gt(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
	}
	function on(e, t, n, r, i) {
		switch (t) {
			case "focusin": return Zt = B(Zt, e, t, n, r, i), !0;
			case "dragenter": return Qt = B(Qt, e, t, n, r, i), !0;
			case "mouseover": return $t = B($t, e, t, n, r, i), !0;
			case "pointerover":
				var a = i.pointerId;
				return en.set(a, B(en.get(a) || null, e, t, n, r, i)), !0;
			case "gotpointercapture": return a = i.pointerId, tn.set(a, B(tn.get(a) || null, e, t, n, r, i)), !0;
		}
		return !1;
	}
	function sn(e) {
		var t = zi(e.target);
		if (t !== null) {
			var n = ct(t);
			if (n !== null) {
				if (t = n.tag, t === 13) {
					if (t = lt(n), t !== null) {
						e.blockedOn = t, Jt(e.priority, function() {
							Kt(n);
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
	function cn(e) {
		if (e.blockedOn !== null) return !1;
		for (var t = e.targetContainers; 0 < t.length;) {
			var n = yn(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
			if (n === null) {
				n = e.nativeEvent;
				var r = new n.constructor(n.type, n);
				ze = r, n.target.dispatchEvent(r), ze = null;
			} else return t = Bi(n), t !== null && Gt(t), e.blockedOn = n, !1;
			t.shift();
		}
		return !0;
	}
	function ln(e, t, n) {
		cn(e) && n.delete(t);
	}
	function un() {
		Yt = !1, Zt !== null && cn(Zt) && (Zt = null), Qt !== null && cn(Qt) && (Qt = null), $t !== null && cn($t) && ($t = null), en.forEach(ln), tn.forEach(ln);
	}
	function dn(e, t) {
		e.blockedOn === t && (e.blockedOn = null, Yt || (Yt = !0, n.unstable_scheduleCallback(n.unstable_NormalPriority, un)));
	}
	function fn(e) {
		function t(t) {
			return dn(t, e);
		}
		if (0 < Xt.length) {
			dn(Xt[0], e);
			for (var n = 1; n < Xt.length; n++) {
				var r = Xt[n];
				r.blockedOn === e && (r.blockedOn = null);
			}
		}
		for (Zt !== null && dn(Zt, e), Qt !== null && dn(Qt, e), $t !== null && dn($t, e), en.forEach(t), tn.forEach(t), n = 0; n < nn.length; n++) r = nn[n], r.blockedOn === e && (r.blockedOn = null);
		for (; 0 < nn.length && (n = nn[0], n.blockedOn === null);) sn(n), n.blockedOn === null && nn.shift();
	}
	var pn = C.ReactCurrentBatchConfig, mn = !0;
	function hn(e, t, n, r) {
		var i = z, a = pn.transition;
		pn.transition = null;
		try {
			z = 1, _n(e, t, n, r);
		} finally {
			z = i, pn.transition = a;
		}
	}
	function gn(e, t, n, r) {
		var i = z, a = pn.transition;
		pn.transition = null;
		try {
			z = 4, _n(e, t, n, r);
		} finally {
			z = i, pn.transition = a;
		}
	}
	function _n(e, t, n, r) {
		if (mn) {
			var i = yn(e, t, n, r);
			if (i === null) di(e, t, r, vn, n), an(e, r);
			else if (on(i, e, t, n, r)) r.stopPropagation();
			else if (an(e, r), t & 4 && -1 < rn.indexOf(e)) {
				for (; i !== null;) {
					var a = Bi(i);
					if (a !== null && Wt(a), a = yn(e, t, n, r), a === null && di(e, t, r, vn, n), a === i) break;
					i = a;
				}
				i !== null && r.stopPropagation();
			} else di(e, t, r, null, n);
		}
	}
	var vn = null;
	function yn(e, t, n, r) {
		if (vn = null, e = Be(r), e = zi(e), e !== null) if (t = ct(e), t === null) e = null;
		else if (n = t.tag, n === 13) {
			if (e = lt(t), e !== null) return e;
			e = null;
		} else if (n === 3) {
			if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
			e = null;
		} else t !== e && (e = null);
		return vn = e, null;
	}
	function bn(e) {
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
			case "message": switch (vt()) {
				case yt: return 1;
				case bt: return 4;
				case xt:
				case St: return 16;
				case Ct: return 536870912;
				default: return 16;
			}
			default: return 16;
		}
	}
	var xn = null, Sn = null, Cn = null;
	function wn() {
		if (Cn) return Cn;
		var e, t = Sn, n = t.length, r, i = "value" in xn ? xn.value : xn.textContent, a = i.length;
		for (e = 0; e < n && t[e] === i[e]; e++);
		var o = n - e;
		for (r = 1; r <= o && t[n - r] === i[a - r]; r++);
		return Cn = i.slice(e, 1 < r ? 1 - r : void 0);
	}
	function Tn(e) {
		var t = e.keyCode;
		return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
	}
	function En() {
		return !0;
	}
	function Dn() {
		return !1;
	}
	function On(e) {
		function t(t, n, r, i, a) {
			for (var o in this._reactName = t, this._targetInst = r, this.type = n, this.nativeEvent = i, this.target = a, this.currentTarget = null, e) e.hasOwnProperty(o) && (t = e[o], this[o] = t ? t(i) : i[o]);
			return this.isDefaultPrevented = (i.defaultPrevented == null ? !1 === i.returnValue : i.defaultPrevented) ? En : Dn, this.isPropagationStopped = Dn, this;
		}
		return I(t.prototype, {
			preventDefault: function() {
				this.defaultPrevented = !0;
				var e = this.nativeEvent;
				e && (e.preventDefault ? e.preventDefault() : typeof e.returnValue != "unknown" && (e.returnValue = !1), this.isDefaultPrevented = En);
			},
			stopPropagation: function() {
				var e = this.nativeEvent;
				e && (e.stopPropagation ? e.stopPropagation() : typeof e.cancelBubble != "unknown" && (e.cancelBubble = !0), this.isPropagationStopped = En);
			},
			persist: function() {},
			isPersistent: En
		}), t;
	}
	var kn = {
		eventPhase: 0,
		bubbles: 0,
		cancelable: 0,
		timeStamp: function(e) {
			return e.timeStamp || Date.now();
		},
		defaultPrevented: 0,
		isTrusted: 0
	}, An = On(kn), jn = I({}, kn, {
		view: 0,
		detail: 0
	}), Mn = On(jn), Nn, Pn, Fn, In = I({}, jn, {
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
		getModifierState: Kn,
		button: 0,
		buttons: 0,
		relatedTarget: function(e) {
			return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
		},
		movementX: function(e) {
			return "movementX" in e ? e.movementX : (e !== Fn && (Fn && e.type === "mousemove" ? (Nn = e.screenX - Fn.screenX, Pn = e.screenY - Fn.screenY) : Pn = Nn = 0, Fn = e), Nn);
		},
		movementY: function(e) {
			return "movementY" in e ? e.movementY : Pn;
		}
	}), Ln = On(In), Rn = On(I({}, In, { dataTransfer: 0 })), zn = On(I({}, jn, { relatedTarget: 0 })), V = On(I({}, kn, {
		animationName: 0,
		elapsedTime: 0,
		pseudoElement: 0
	})), Bn = On(I({}, kn, { clipboardData: function(e) {
		return "clipboardData" in e ? e.clipboardData : window.clipboardData;
	} })), Vn = On(I({}, kn, { data: 0 })), Hn = {
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
	}, Un = {
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
	}, Wn = {
		Alt: "altKey",
		Control: "ctrlKey",
		Meta: "metaKey",
		Shift: "shiftKey"
	};
	function Gn(e) {
		var t = this.nativeEvent;
		return t.getModifierState ? t.getModifierState(e) : (e = Wn[e]) ? !!t[e] : !1;
	}
	function Kn() {
		return Gn;
	}
	var qn = On(I({}, jn, {
		key: function(e) {
			if (e.key) {
				var t = Hn[e.key] || e.key;
				if (t !== "Unidentified") return t;
			}
			return e.type === "keypress" ? (e = Tn(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Un[e.keyCode] || "Unidentified" : "";
		},
		code: 0,
		location: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		repeat: 0,
		locale: 0,
		getModifierState: Kn,
		charCode: function(e) {
			return e.type === "keypress" ? Tn(e) : 0;
		},
		keyCode: function(e) {
			return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
		},
		which: function(e) {
			return e.type === "keypress" ? Tn(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
		}
	})), Jn = On(I({}, In, {
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
	})), Yn = On(I({}, jn, {
		touches: 0,
		targetTouches: 0,
		changedTouches: 0,
		altKey: 0,
		metaKey: 0,
		ctrlKey: 0,
		shiftKey: 0,
		getModifierState: Kn
	})), Xn = On(I({}, kn, {
		propertyName: 0,
		elapsedTime: 0,
		pseudoElement: 0
	})), Zn = On(I({}, In, {
		deltaX: function(e) {
			return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
		},
		deltaY: function(e) {
			return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
		},
		deltaZ: 0,
		deltaMode: 0
	})), Qn = [
		9,
		13,
		27,
		32
	], $n = c && "CompositionEvent" in window, er = null;
	c && "documentMode" in document && (er = document.documentMode);
	var tr = c && "TextEvent" in window && !er, nr = c && (!$n || er && 8 < er && 11 >= er), rr = " ", ir = !1;
	function ar(e, t) {
		switch (e) {
			case "keyup": return Qn.indexOf(t.keyCode) !== -1;
			case "keydown": return t.keyCode !== 229;
			case "keypress":
			case "mousedown":
			case "focusout": return !0;
			default: return !1;
		}
	}
	function or(e) {
		return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
	}
	var sr = !1;
	function cr(e, t) {
		switch (e) {
			case "compositionend": return or(t);
			case "keypress": return t.which === 32 ? (ir = !0, rr) : null;
			case "textInput": return e = t.data, e === rr && ir ? null : e;
			default: return null;
		}
	}
	function lr(e, t) {
		if (sr) return e === "compositionend" || !$n && ar(e, t) ? (e = wn(), Cn = Sn = xn = null, sr = !1, e) : null;
		switch (e) {
			case "paste": return null;
			case "keypress":
				if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
					if (t.char && 1 < t.char.length) return t.char;
					if (t.which) return String.fromCharCode(t.which);
				}
				return null;
			case "compositionend": return nr && t.locale !== "ko" ? null : t.data;
			default: return null;
		}
	}
	var ur = {
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
	function dr(e) {
		var t = e && e.nodeName && e.nodeName.toLowerCase();
		return t === "input" ? !!ur[e.type] : t === "textarea";
	}
	function fr(e, t, n, r) {
		Ge(r), t = pi(t, "onChange"), 0 < t.length && (n = new An("onChange", "change", null, n, r), e.push({
			event: n,
			listeners: t
		}));
	}
	var pr = null, mr = null;
	function hr(e) {
		oi(e, 0);
	}
	function gr(e) {
		if (me(Vi(e))) return e;
	}
	function _r(e, t) {
		if (e === "change") return t;
	}
	var vr = !1;
	if (c) {
		var yr;
		if (c) {
			var br = "oninput" in document;
			if (!br) {
				var xr = document.createElement("div");
				xr.setAttribute("oninput", "return;"), br = typeof xr.oninput == "function";
			}
			yr = br;
		} else yr = !1;
		vr = yr && (!document.documentMode || 9 < document.documentMode);
	}
	function Sr() {
		pr && (pr.detachEvent("onpropertychange", Cr), mr = pr = null);
	}
	function Cr(e) {
		if (e.propertyName === "value" && gr(mr)) {
			var t = [];
			fr(t, mr, e, Be(e)), Xe(hr, t);
		}
	}
	function wr(e, t, n) {
		e === "focusin" ? (Sr(), pr = t, mr = n, pr.attachEvent("onpropertychange", Cr)) : e === "focusout" && Sr();
	}
	function Tr(e) {
		if (e === "selectionchange" || e === "keyup" || e === "keydown") return gr(mr);
	}
	function Er(e, t) {
		if (e === "click") return gr(t);
	}
	function Dr(e, t) {
		if (e === "input" || e === "change") return gr(t);
	}
	function Or(e, t) {
		return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t;
	}
	var kr = typeof Object.is == "function" ? Object.is : Or;
	function Ar(e, t) {
		if (kr(e, t)) return !0;
		if (typeof e != "object" || !e || typeof t != "object" || !t) return !1;
		var n = Object.keys(e), r = Object.keys(t);
		if (n.length !== r.length) return !1;
		for (r = 0; r < n.length; r++) {
			var i = n[r];
			if (!l.call(t, i) || !kr(e[i], t[i])) return !1;
		}
		return !0;
	}
	function jr(e) {
		for (; e && e.firstChild;) e = e.firstChild;
		return e;
	}
	function Mr(e, t) {
		var n = jr(e);
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
			n = jr(n);
		}
	}
	function Nr(e, t) {
		return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Nr(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
	}
	function Pr() {
		for (var e = window, t = he(); t instanceof e.HTMLIFrameElement;) {
			try {
				var n = typeof t.contentWindow.location.href == "string";
			} catch {
				n = !1;
			}
			if (n) e = t.contentWindow;
			else break;
			t = he(e.document);
		}
		return t;
	}
	function Fr(e) {
		var t = e && e.nodeName && e.nodeName.toLowerCase();
		return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
	}
	function Ir(e) {
		var t = Pr(), n = e.focusedElem, r = e.selectionRange;
		if (t !== n && n && n.ownerDocument && Nr(n.ownerDocument.documentElement, n)) {
			if (r !== null && Fr(n)) {
				if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
				else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
					e = e.getSelection();
					var i = n.textContent.length, a = Math.min(r.start, i);
					r = r.end === void 0 ? a : Math.min(r.end, i), !e.extend && a > r && (i = r, r = a, a = i), i = Mr(n, a);
					var o = Mr(n, r);
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
	var Lr = c && "documentMode" in document && 11 >= document.documentMode, Rr = null, zr = null, Br = null, Vr = !1;
	function Hr(e, t, n) {
		var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
		Vr || Rr == null || Rr !== he(r) || (r = Rr, "selectionStart" in r && Fr(r) ? r = {
			start: r.selectionStart,
			end: r.selectionEnd
		} : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
			anchorNode: r.anchorNode,
			anchorOffset: r.anchorOffset,
			focusNode: r.focusNode,
			focusOffset: r.focusOffset
		}), Br && Ar(Br, r) || (Br = r, r = pi(zr, "onSelect"), 0 < r.length && (t = new An("onSelect", "select", null, t, n), e.push({
			event: t,
			listeners: r
		}), t.target = Rr)));
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
		e.currentTarget = n, st(r, t, void 0, e), e.currentTarget = null;
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
		if (rt) throw e = it, rt = !1, it = null, e;
	}
	function H(e, t) {
		var n = t[Ii];
		n === void 0 && (n = t[Ii] = /* @__PURE__ */ new Set());
		var r = e + "__bubble";
		n.has(r) || (ui(t, e, 2, !1), n.add(r));
	}
	function si(e, t, n) {
		var r = 0;
		t && (r |= 4), ui(n, e, r, t);
	}
	var ci = "_reactListening" + Math.random().toString(36).slice(2);
	function li(e) {
		if (!e[ci]) {
			e[ci] = !0, i.forEach(function(t) {
				t !== "selectionchange" && (ii.has(t) || si(t, !1, e), si(t, !0, e));
			});
			var t = e.nodeType === 9 ? e : e.ownerDocument;
			t === null || t[ci] || (t[ci] = !0, si("selectionchange", !1, t));
		}
	}
	function ui(e, t, n, r) {
		switch (bn(t)) {
			case 1:
				var i = hn;
				break;
			case 4:
				i = gn;
				break;
			default: i = _n;
		}
		n = i.bind(null, t, n, e), i = void 0, !Qe || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i === void 0 ? e.addEventListener(t, n, !0) : e.addEventListener(t, n, {
			capture: !0,
			passive: i
		}) : i === void 0 ? e.addEventListener(t, n, !1) : e.addEventListener(t, n, { passive: i });
	}
	function di(e, t, n, r, i) {
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
		Xe(function() {
			var r = a, i = Be(n), o = [];
			a: {
				var s = Qr.get(e);
				if (s !== void 0) {
					var c = An, l = e;
					switch (e) {
						case "keypress": if (Tn(n) === 0) break a;
						case "keydown":
						case "keyup":
							c = qn;
							break;
						case "focusin":
							l = "focus", c = zn;
							break;
						case "focusout":
							l = "blur", c = zn;
							break;
						case "beforeblur":
						case "afterblur":
							c = zn;
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
							c = Ln;
							break;
						case "drag":
						case "dragend":
						case "dragenter":
						case "dragexit":
						case "dragleave":
						case "dragover":
						case "dragstart":
						case "drop":
							c = Rn;
							break;
						case "touchcancel":
						case "touchend":
						case "touchmove":
						case "touchstart":
							c = Yn;
							break;
						case Jr:
						case Yr:
						case Xr:
							c = V;
							break;
						case Zr:
							c = Xn;
							break;
						case "scroll":
							c = Mn;
							break;
						case "wheel":
							c = Zn;
							break;
						case "copy":
						case "cut":
						case "paste":
							c = Bn;
							break;
						case "gotpointercapture":
						case "lostpointercapture":
						case "pointercancel":
						case "pointerdown":
						case "pointermove":
						case "pointerout":
						case "pointerover":
						case "pointerup": c = Jn;
					}
					var u = (t & 4) != 0, d = !u && e === "scroll", f = u ? s === null ? null : s + "Capture" : s;
					u = [];
					for (var p = r, m; p !== null;) {
						m = p;
						var h = m.stateNode;
						if (m.tag === 5 && h !== null && (m = h, f !== null && (h = Ze(p, f), h != null && u.push(fi(p, h, m)))), d) break;
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
					if (s = e === "mouseover" || e === "pointerover", c = e === "mouseout" || e === "pointerout", s && n !== ze && (l = n.relatedTarget || n.fromElement) && (zi(l) || l[Fi])) break a;
					if ((c || s) && (s = i.window === i ? i : (s = i.ownerDocument) ? s.defaultView || s.parentWindow : window, c ? (l = n.relatedTarget || n.toElement, c = r, l = l ? zi(l) : null, l !== null && (d = ct(l), l !== d || l.tag !== 5 && l.tag !== 6) && (l = null)) : (c = null, l = r), c !== l)) {
						if (u = Ln, h = "onMouseLeave", f = "onMouseEnter", p = "mouse", (e === "pointerout" || e === "pointerover") && (u = Jn, h = "onPointerLeave", f = "onPointerEnter", p = "pointer"), d = c == null ? s : Vi(c), m = l == null ? s : Vi(l), s = new u(h, p + "leave", c, n, i), s.target = d, s.relatedTarget = m, h = null, zi(i) === r && (u = new u(f, p + "enter", l, n, i), u.target = m, u.relatedTarget = d, h = u), d = h, c && l) b: {
							for (u = c, f = l, p = 0, m = u; m; m = mi(m)) p++;
							for (m = 0, h = f; h; h = mi(h)) m++;
							for (; 0 < p - m;) u = mi(u), p--;
							for (; 0 < m - p;) f = mi(f), m--;
							for (; p--;) {
								if (u === f || f !== null && u === f.alternate) break b;
								u = mi(u), f = mi(f);
							}
							u = null;
						}
						else u = null;
						c !== null && hi(o, s, c, u, !1), l !== null && d !== null && hi(o, d, l, u, !0);
					}
				}
				a: {
					if (s = r ? Vi(r) : window, c = s.nodeName && s.nodeName.toLowerCase(), c === "select" || c === "input" && s.type === "file") var g = _r;
					else if (dr(s)) if (vr) g = Dr;
					else {
						g = Tr;
						var _ = wr;
					}
					else (c = s.nodeName) && c.toLowerCase() === "input" && (s.type === "checkbox" || s.type === "radio") && (g = Er);
					if (g &&= g(e, r)) {
						fr(o, g, n, i);
						break a;
					}
					_ && _(e, s, r), e === "focusout" && (_ = s._wrapperState) && _.controlled && s.type === "number" && xe(s, "number", s.value);
				}
				switch (_ = r ? Vi(r) : window, e) {
					case "focusin":
						(dr(_) || _.contentEditable === "true") && (Rr = _, zr = r, Br = null);
						break;
					case "focusout":
						Br = zr = Rr = null;
						break;
					case "mousedown":
						Vr = !0;
						break;
					case "contextmenu":
					case "mouseup":
					case "dragend":
						Vr = !1, Hr(o, n, i);
						break;
					case "selectionchange": if (Lr) break;
					case "keydown":
					case "keyup": Hr(o, n, i);
				}
				var v;
				if ($n) b: {
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
				else sr ? ar(e, n) && (y = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (y = "onCompositionStart");
				y && (nr && n.locale !== "ko" && (sr || y !== "onCompositionStart" ? y === "onCompositionEnd" && sr && (v = wn()) : (xn = i, Sn = "value" in xn ? xn.value : xn.textContent, sr = !0)), _ = pi(r, y), 0 < _.length && (y = new Vn(y, e, null, n, i), o.push({
					event: y,
					listeners: _
				}), v ? y.data = v : (v = or(n), v !== null && (y.data = v)))), (v = tr ? cr(e, n) : lr(e, n)) && (r = pi(r, "onBeforeInput"), 0 < r.length && (i = new Vn("onBeforeInput", "beforeinput", null, n, i), o.push({
					event: i,
					listeners: r
				}), i.data = v));
			}
			oi(o, t);
		});
	}
	function fi(e, t, n) {
		return {
			instance: e,
			listener: t,
			currentTarget: n
		};
	}
	function pi(e, t) {
		for (var n = t + "Capture", r = []; e !== null;) {
			var i = e, a = i.stateNode;
			i.tag === 5 && a !== null && (i = a, a = Ze(e, n), a != null && r.unshift(fi(e, a, i)), a = Ze(e, t), a != null && r.push(fi(e, a, i))), e = e.return;
		}
		return r;
	}
	function mi(e) {
		if (e === null) return null;
		do
			e = e.return;
		while (e && e.tag !== 5);
		return e || null;
	}
	function hi(e, t, n, r, i) {
		for (var a = t._reactName, o = []; n !== null && n !== r;) {
			var s = n, c = s.alternate, l = s.stateNode;
			if (c !== null && c === r) break;
			s.tag === 5 && l !== null && (s = l, i ? (c = Ze(n, a), c != null && o.unshift(fi(n, c, s))) : i || (c = Ze(n, a), c != null && o.push(fi(n, c, s)))), n = n.return;
		}
		o.length !== 0 && e.push({
			event: t,
			listeners: o
		});
	}
	var gi = /\r\n?/g, _i = /\u0000|\uFFFD/g;
	function vi(e) {
		return (typeof e == "string" ? e : "" + e).replace(gi, "\n").replace(_i, "");
	}
	function yi(e, t, n) {
		if (t = vi(t), vi(e) !== t && n) throw Error(r(425));
	}
	function bi() {}
	var xi = null, Si = null;
	function Ci(e, t) {
		return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
	}
	var wi = typeof setTimeout == "function" ? setTimeout : void 0, Ti = typeof clearTimeout == "function" ? clearTimeout : void 0, Ei = typeof Promise == "function" ? Promise : void 0, Di = typeof queueMicrotask == "function" ? queueMicrotask : Ei === void 0 ? wi : function(e) {
		return Ei.resolve(null).then(e).catch(Oi);
	};
	function Oi(e) {
		setTimeout(function() {
			throw e;
		});
	}
	function ki(e, t) {
		var n = t, r = 0;
		do {
			var i = n.nextSibling;
			if (e.removeChild(n), i && i.nodeType === 8) if (n = i.data, n === "/$") {
				if (r === 0) {
					e.removeChild(i), fn(t);
					return;
				}
				r--;
			} else n !== "$" && n !== "$?" && n !== "$!" || r++;
			n = i;
		} while (n);
		fn(t);
	}
	function Ai(e) {
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
		for (var a in i = i.getChildContext(), i) if (!(a in t)) throw Error(r(108, le(e) || "Unknown", a));
		return I({}, n, i);
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
			var e = 0, t = z;
			try {
				var n = ra;
				for (z = 1; e < n.length; e++) {
					var r = n[e];
					do
						r = r(!0);
					while (r !== null);
				}
				ra = null, ia = !1;
			} catch (t) {
				throw ra !== null && (ra = ra.slice(e + 1)), mt(yt, ca), t;
			} finally {
				z = t, aa = !1;
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
		var i = 32 - Dt(r) - 1;
		r &= ~(1 << i), n += 1;
		var a = 32 - Dt(t) + i;
		if (30 < a) {
			var o = i - i % 5;
			a = (r & (1 << o) - 1).toString(32), r >>= o, i -= o, ga = 1 << 32 - Dt(t) + i | n << i | r, _a = a + e;
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
				return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t === null ? !1 : (e.stateNode = t, Sa = e, Ca = Ai(t.firstChild), !0);
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
					t = Ai(n.nextSibling);
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
		if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Ci(e.type, e.memoizedProps)), t &&= Ca) {
			if (Da(e)) throw ja(), Error(r(418));
			for (; t;) Ta(e, t), t = Ai(t.nextSibling);
		}
		if (ka(e), e.tag === 13) {
			if (e = e.memoizedState, e = e === null ? null : e.dehydrated, !e) throw Error(r(317));
			a: {
				for (e = e.nextSibling, t = 0; e;) {
					if (e.nodeType === 8) {
						var n = e.data;
						if (n === "/$") {
							if (t === 0) {
								Ca = Ai(e.nextSibling);
								break a;
							}
							t--;
						} else n !== "$" && n !== "$!" && n !== "$?" || t++;
					}
					e = e.nextSibling;
				}
				Ca = null;
			}
		} else Ca = Sa ? Ai(e.stateNode.nextSibling) : null;
		return !0;
	}
	function ja() {
		for (var e = Ca; e;) e = Ai(e.nextSibling);
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
			return i === E ? d(e, t, n.props.children, r, n.key) : t !== null && (t.elementType === i || typeof i == "object" && i && i.$$typeof === P && La(i) === t.type) ? (r = a(t, n.props), r.ref = Fa(e, t, n), r.return = e, r) : (r = Zl(n.type, n.key, n.props, null, e.mode, r), r.ref = Fa(e, t, n), r.return = e, r);
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
					case P:
						var r = t._init;
						return f(e, r(t._payload), n);
				}
				if (Se(t) || ne(t)) return t = Ql(t, e.mode, n, null), t.return = e, t;
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
					case P: return i = n._init, p(e, t, i(n._payload), r);
				}
				if (Se(n) || ne(n)) return i === null ? d(e, t, n, r, null) : null;
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
					case P:
						var a = r._init;
						return m(e, t, n, a(r._payload), i);
				}
				if (Se(r) || ne(r)) return e = e.get(n) || null, d(t, e, r, i, null);
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
									} else if (l.elementType === c || typeof c == "object" && c && c.$$typeof === P && La(c) === l.type) {
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
					case P: return l = i._init, _(e, r, l(i._payload), o);
				}
				if (Se(i)) return h(e, r, i, o);
				if (ne(i)) return g(e, r, i, o);
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
		Ha = e, Wa = Ua = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (Fs = !0), e.firstContext = null);
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
		if (r = r.shared, X & 2) {
			var i = r.pending;
			return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, $a(e, n);
		}
		return i = r.interleaved, i === null ? (t.next = t, Za(r)) : (t.next = i.next, i.next = t), r.interleaved = t, $a(e, n);
	}
	function ao(e, t, n) {
		if (t = t.updateQueue, t !== null && (t = t.shared, n & 4194240)) {
			var r = t.lanes;
			r &= e.pendingLanes, n |= r, t.lanes = n, Ht(e, n);
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
								d = I({}, d, f);
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
				t = (t = t.documentElement) ? t.namespaceURI : ke(null, "");
				break;
			default: e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = ke(t, e);
		}
		U(uo), W(uo, t);
	}
	function go() {
		U(uo), U(fo), U(po);
	}
	function _o(e) {
		mo(po.current);
		var t = mo(uo.current), n = ke(t, e.type);
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
	function Ao() {
		throw Error(r(321));
	}
	function jo(e, t) {
		if (t === null) return !1;
		for (var n = 0; n < t.length && n < e.length; n++) if (!kr(e[n], t[n])) return !1;
		return !0;
	}
	function Mo(e, t, n, i, a, o) {
		if (wo = o, q = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, So.current = e === null || e.memoizedState === null ? hs : gs, e = n(i, a), Do) {
			o = 0;
			do {
				if (Do = !1, Oo = 0, 25 <= o) throw Error(r(301));
				o += 1, To = J = null, t.updateQueue = null, So.current = _s, e = n(i, a);
			} while (Do);
		}
		if (So.current = ms, t = J !== null && J.next !== null, wo = 0, To = J = q = null, Eo = !1, t) throw Error(r(300));
		return e;
	}
	function No() {
		var e = Oo !== 0;
		return Oo = 0, e;
	}
	function Po() {
		var e = {
			memoizedState: null,
			baseState: null,
			baseQueue: null,
			queue: null,
			next: null
		};
		return To === null ? q.memoizedState = To = e : To = To.next = e, To;
	}
	function Fo() {
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
	function Io(e, t) {
		return typeof t == "function" ? t(e) : t;
	}
	function Lo(e) {
		var t = Fo(), n = t.queue;
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
			l === null ? s = i : l.next = c, kr(i, t.memoizedState) || (Fs = !0), t.memoizedState = i, t.baseState = s, t.baseQueue = l, n.lastRenderedState = i;
		}
		if (e = n.interleaved, e !== null) {
			a = e;
			do
				o = a.lane, q.lanes |= o, Xc |= o, a = a.next;
			while (a !== e);
		} else a === null && (n.lanes = 0);
		return [t.memoizedState, n.dispatch];
	}
	function Ro(e) {
		var t = Fo(), n = t.queue;
		if (n === null) throw Error(r(311));
		n.lastRenderedReducer = e;
		var i = n.dispatch, a = n.pending, o = t.memoizedState;
		if (a !== null) {
			n.pending = null;
			var s = a = a.next;
			do
				o = e(o, s.action), s = s.next;
			while (s !== a);
			kr(o, t.memoizedState) || (Fs = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
		}
		return [o, i];
	}
	function zo() {}
	function Bo(e, t) {
		var n = q, i = Fo(), a = t(), o = !kr(i.memoizedState, a);
		if (o && (i.memoizedState = a, Fs = !0), i = i.queue, Qo(Uo.bind(null, n, i, e), [e]), i.getSnapshot !== t || o || To !== null && To.memoizedState.tag & 1) {
			if (n.flags |= 2048, qo(9, Ho.bind(null, n, i, a, t), void 0, null), Wc === null) throw Error(r(349));
			wo & 30 || Vo(n, t, a);
		}
		return a;
	}
	function Vo(e, t, n) {
		e.flags |= 16384, e = {
			getSnapshot: t,
			value: n
		}, t = q.updateQueue, t === null ? (t = {
			lastEffect: null,
			stores: null
		}, q.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
	}
	function Ho(e, t, n, r) {
		t.value = n, t.getSnapshot = r, Wo(t) && Go(e);
	}
	function Uo(e, t, n) {
		return n(function() {
			Wo(t) && Go(e);
		});
	}
	function Wo(e) {
		var t = e.getSnapshot;
		e = e.value;
		try {
			var n = t();
			return !kr(e, n);
		} catch {
			return !0;
		}
	}
	function Go(e) {
		var t = $a(e, 1);
		t !== null && gl(t, e, 1, -1);
	}
	function Ko(e) {
		var t = Po();
		return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
			pending: null,
			interleaved: null,
			lanes: 0,
			dispatch: null,
			lastRenderedReducer: Io,
			lastRenderedState: e
		}, t.queue = e, e = e.dispatch = us.bind(null, q, e), [t.memoizedState, e];
	}
	function qo(e, t, n, r) {
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
	function Jo() {
		return Fo().memoizedState;
	}
	function Yo(e, t, n, r) {
		var i = Po();
		q.flags |= e, i.memoizedState = qo(1 | t, n, void 0, r === void 0 ? null : r);
	}
	function Xo(e, t, n, r) {
		var i = Fo();
		r = r === void 0 ? null : r;
		var a = void 0;
		if (J !== null) {
			var o = J.memoizedState;
			if (a = o.destroy, r !== null && jo(r, o.deps)) {
				i.memoizedState = qo(t, n, a, r);
				return;
			}
		}
		q.flags |= e, i.memoizedState = qo(1 | t, n, a, r);
	}
	function Zo(e, t) {
		return Yo(8390656, 8, e, t);
	}
	function Qo(e, t) {
		return Xo(2048, 8, e, t);
	}
	function $o(e, t) {
		return Xo(4, 2, e, t);
	}
	function es(e, t) {
		return Xo(4, 4, e, t);
	}
	function ts(e, t) {
		if (typeof t == "function") return e = e(), t(e), function() {
			t(null);
		};
		if (t != null) return e = e(), t.current = e, function() {
			t.current = null;
		};
	}
	function ns(e, t, n) {
		return n = n == null ? null : n.concat([e]), Xo(4, 4, ts.bind(null, t, e), n);
	}
	function rs() {}
	function is(e, t) {
		var n = Fo();
		t = t === void 0 ? null : t;
		var r = n.memoizedState;
		return r !== null && t !== null && jo(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
	}
	function as(e, t) {
		var n = Fo();
		t = t === void 0 ? null : t;
		var r = n.memoizedState;
		return r !== null && t !== null && jo(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
	}
	function os(e, t, n) {
		return wo & 21 ? (kr(n, t) || (n = Rt(), q.lanes |= n, Xc |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Fs = !0), e.memoizedState = n);
	}
	function ss(e, t) {
		var n = z;
		z = n !== 0 && 4 > n ? n : 4, e(!0);
		var r = Co.transition;
		Co.transition = {};
		try {
			e(!1), t();
		} finally {
			z = n, Co.transition = r;
		}
	}
	function cs() {
		return Fo().memoizedState;
	}
	function ls(e, t, n) {
		var r = hl(e);
		if (n = {
			lane: r,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null
		}, ds(e)) fs(t, n);
		else if (n = Qa(e, t, n, r), n !== null) {
			var i = ml();
			gl(n, e, r, i), ps(n, t, r);
		}
	}
	function us(e, t, n) {
		var r = hl(e), i = {
			lane: r,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null
		};
		if (ds(e)) fs(t, i);
		else {
			var a = e.alternate;
			if (e.lanes === 0 && (a === null || a.lanes === 0) && (a = t.lastRenderedReducer, a !== null)) try {
				var o = t.lastRenderedState, s = a(o, n);
				if (i.hasEagerState = !0, i.eagerState = s, kr(s, o)) {
					var c = t.interleaved;
					c === null ? (i.next = i, Za(t)) : (i.next = c.next, c.next = i), t.interleaved = i;
					return;
				}
			} catch {}
			n = Qa(e, t, i, r), n !== null && (i = ml(), gl(n, e, r, i), ps(n, t, r));
		}
	}
	function ds(e) {
		var t = e.alternate;
		return e === q || t !== null && t === q;
	}
	function fs(e, t) {
		Do = Eo = !0;
		var n = e.pending;
		n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
	}
	function ps(e, t, n) {
		if (n & 4194240) {
			var r = t.lanes;
			r &= e.pendingLanes, n |= r, t.lanes = n, Ht(e, n);
		}
	}
	var ms = {
		readContext: Ya,
		useCallback: Ao,
		useContext: Ao,
		useEffect: Ao,
		useImperativeHandle: Ao,
		useInsertionEffect: Ao,
		useLayoutEffect: Ao,
		useMemo: Ao,
		useReducer: Ao,
		useRef: Ao,
		useState: Ao,
		useDebugValue: Ao,
		useDeferredValue: Ao,
		useTransition: Ao,
		useMutableSource: Ao,
		useSyncExternalStore: Ao,
		useId: Ao,
		unstable_isNewReconciler: !1
	}, hs = {
		readContext: Ya,
		useCallback: function(e, t) {
			return Po().memoizedState = [e, t === void 0 ? null : t], e;
		},
		useContext: Ya,
		useEffect: Zo,
		useImperativeHandle: function(e, t, n) {
			return n = n == null ? null : n.concat([e]), Yo(4194308, 4, ts.bind(null, t, e), n);
		},
		useLayoutEffect: function(e, t) {
			return Yo(4194308, 4, e, t);
		},
		useInsertionEffect: function(e, t) {
			return Yo(4, 2, e, t);
		},
		useMemo: function(e, t) {
			var n = Po();
			return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
		},
		useReducer: function(e, t, n) {
			var r = Po();
			return t = n === void 0 ? t : n(t), r.memoizedState = r.baseState = t, e = {
				pending: null,
				interleaved: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: e,
				lastRenderedState: t
			}, r.queue = e, e = e.dispatch = ls.bind(null, q, e), [r.memoizedState, e];
		},
		useRef: function(e) {
			var t = Po();
			return e = { current: e }, t.memoizedState = e;
		},
		useState: Ko,
		useDebugValue: rs,
		useDeferredValue: function(e) {
			return Po().memoizedState = e;
		},
		useTransition: function() {
			var e = Ko(!1), t = e[0];
			return e = ss.bind(null, e[1]), Po().memoizedState = e, [t, e];
		},
		useMutableSource: function() {},
		useSyncExternalStore: function(e, t, n) {
			var i = q, a = Po();
			if (G) {
				if (n === void 0) throw Error(r(407));
				n = n();
			} else {
				if (n = t(), Wc === null) throw Error(r(349));
				wo & 30 || Vo(i, t, n);
			}
			a.memoizedState = n;
			var o = {
				value: n,
				getSnapshot: t
			};
			return a.queue = o, Zo(Uo.bind(null, i, o, e), [e]), i.flags |= 2048, qo(9, Ho.bind(null, i, o, n, t), void 0, null), n;
		},
		useId: function() {
			var e = Po(), t = Wc.identifierPrefix;
			if (G) {
				var n = _a, r = ga;
				n = (r & ~(1 << 32 - Dt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Oo++, 0 < n && (t += "H" + n.toString(32)), t += ":";
			} else n = ko++, t = ":" + t + "r" + n.toString(32) + ":";
			return e.memoizedState = t;
		},
		unstable_isNewReconciler: !1
	}, gs = {
		readContext: Ya,
		useCallback: is,
		useContext: Ya,
		useEffect: Qo,
		useImperativeHandle: ns,
		useInsertionEffect: $o,
		useLayoutEffect: es,
		useMemo: as,
		useReducer: Lo,
		useRef: Jo,
		useState: function() {
			return Lo(Io);
		},
		useDebugValue: rs,
		useDeferredValue: function(e) {
			return os(Fo(), J.memoizedState, e);
		},
		useTransition: function() {
			return [Lo(Io)[0], Fo().memoizedState];
		},
		useMutableSource: zo,
		useSyncExternalStore: Bo,
		useId: cs,
		unstable_isNewReconciler: !1
	}, _s = {
		readContext: Ya,
		useCallback: is,
		useContext: Ya,
		useEffect: Qo,
		useImperativeHandle: ns,
		useInsertionEffect: $o,
		useLayoutEffect: es,
		useMemo: as,
		useReducer: Ro,
		useRef: Jo,
		useState: function() {
			return Ro(Io);
		},
		useDebugValue: rs,
		useDeferredValue: function(e) {
			var t = Fo();
			return J === null ? t.memoizedState = e : os(t, J.memoizedState, e);
		},
		useTransition: function() {
			return [Ro(Io)[0], Fo().memoizedState];
		},
		useMutableSource: zo,
		useSyncExternalStore: Bo,
		useId: cs,
		unstable_isNewReconciler: !1
	};
	function vs(e, t) {
		if (e && e.defaultProps) {
			for (var n in t = I({}, t), e = e.defaultProps, e) t[n] === void 0 && (t[n] = e[n]);
			return t;
		}
		return t;
	}
	function ys(e, t, n, r) {
		t = e.memoizedState, n = n(r, t), n = n == null ? t : I({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
	}
	var bs = {
		isMounted: function(e) {
			return (e = e._reactInternals) ? ct(e) === e : !1;
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
	function xs(e, t, n, r, i, a, o) {
		return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, a, o) : t.prototype && t.prototype.isPureReactComponent ? !Ar(n, r) || !Ar(i, a) : !0;
	}
	function Ss(e, t, n) {
		var r = !1, i = Ki, a = t.contextType;
		return typeof a == "object" && a ? a = Ya(a) : (i = Zi(t) ? Yi : qi.current, r = t.contextTypes, a = (r = r != null) ? Xi(e, i) : Ki), t = new t(n, a), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = bs, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = a), t;
	}
	function Cs(e, t, n, r) {
		e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && bs.enqueueReplaceState(t, t.state, null);
	}
	function ws(e, t, n, r) {
		var i = e.stateNode;
		i.props = n, i.state = e.memoizedState, i.refs = {}, to(e);
		var a = t.contextType;
		typeof a == "object" && a ? i.context = Ya(a) : (a = Zi(t) ? Yi : qi.current, i.context = Xi(e, a)), i.state = e.memoizedState, a = t.getDerivedStateFromProps, typeof a == "function" && (ys(e, t, a, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && bs.enqueueReplaceState(i, i.state, null), so(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308);
	}
	function Ts(e, t) {
		try {
			var n = "", r = t;
			do
				n += se(r), r = r.return;
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
	function Es(e, t, n) {
		return {
			value: e,
			source: null,
			stack: n ?? null,
			digest: t ?? null
		};
	}
	function Ds(e, t) {
		try {
			console.error(t.value);
		} catch (e) {
			setTimeout(function() {
				throw e;
			});
		}
	}
	var Os = typeof WeakMap == "function" ? WeakMap : Map;
	function ks(e, t, n) {
		n = ro(-1, n), n.tag = 3, n.payload = { element: null };
		var r = t.value;
		return n.callback = function() {
			il || (il = !0, al = r), Ds(e, t);
		}, n;
	}
	function As(e, t, n) {
		n = ro(-1, n), n.tag = 3;
		var r = e.type.getDerivedStateFromError;
		if (typeof r == "function") {
			var i = t.value;
			n.payload = function() {
				return r(i);
			}, n.callback = function() {
				Ds(e, t);
			};
		}
		var a = e.stateNode;
		return a !== null && typeof a.componentDidCatch == "function" && (n.callback = function() {
			Ds(e, t), typeof r != "function" && (ol === null ? ol = new Set([this]) : ol.add(this));
			var n = t.stack;
			this.componentDidCatch(t.value, { componentStack: n === null ? "" : n });
		}), n;
	}
	function js(e, t, n) {
		var r = e.pingCache;
		if (r === null) {
			r = e.pingCache = new Os();
			var i = /* @__PURE__ */ new Set();
			r.set(t, i);
		} else i = r.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), r.set(t, i));
		i.has(n) || (i.add(n), e = Bl.bind(null, e, t, n), t.then(e, e));
	}
	function Ms(e) {
		do {
			var t;
			if ((t = e.tag === 13) && (t = e.memoizedState, t = t === null ? !0 : t.dehydrated !== null), t) return e;
			e = e.return;
		} while (e !== null);
		return null;
	}
	function Ns(e, t, n, r, i) {
		return e.mode & 1 ? (e.flags |= 65536, e.lanes = i, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = ro(-1, 1), t.tag = 2, io(n, t, 1))), n.lanes |= 1), e);
	}
	var Ps = C.ReactCurrentOwner, Fs = !1;
	function Is(e, t, n, r) {
		t.child = e === null ? Ba(t, null, n, r) : za(t, e.child, n, r);
	}
	function Ls(e, t, n, r, i) {
		n = n.render;
		var a = t.ref;
		return Ja(t, i), r = Mo(e, t, n, r, a, i), n = No(), e !== null && !Fs ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, rc(e, t, i)) : (G && n && ba(t), t.flags |= 1, Is(e, t, r, i), t.child);
	}
	function Rs(e, t, n, r, i) {
		if (e === null) {
			var a = n.type;
			return typeof a == "function" && !Jl(a) && a.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = a, zs(e, t, a, r, i)) : (e = Zl(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
		}
		if (a = e.child, (e.lanes & i) === 0) {
			var o = a.memoizedProps;
			if (n = n.compare, n = n === null ? Ar : n, n(o, r) && e.ref === t.ref) return rc(e, t, i);
		}
		return t.flags |= 1, e = Xl(a, r), e.ref = t.ref, e.return = t, t.child = e;
	}
	function zs(e, t, n, r, i) {
		if (e !== null) {
			var a = e.memoizedProps;
			if (Ar(a, r) && e.ref === t.ref) if (Fs = !1, t.pendingProps = r = a, (e.lanes & i) !== 0) e.flags & 131072 && (Fs = !0);
			else return t.lanes = e.lanes, rc(e, t, i);
		}
		return Hs(e, t, n, r, i);
	}
	function Bs(e, t, n) {
		var r = t.pendingProps, i = r.children, a = e === null ? null : e.memoizedState;
		if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = {
			baseLanes: 0,
			cachePool: null,
			transitions: null
		}, W(Jc, qc), qc |= n;
		else {
			if (!(n & 1073741824)) return e = a === null ? n : a.baseLanes | n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
				baseLanes: e,
				cachePool: null,
				transitions: null
			}, t.updateQueue = null, W(Jc, qc), qc |= e, null;
			t.memoizedState = {
				baseLanes: 0,
				cachePool: null,
				transitions: null
			}, r = a === null ? n : a.baseLanes, W(Jc, qc), qc |= r;
		}
		else a === null ? r = n : (r = a.baseLanes | n, t.memoizedState = null), W(Jc, qc), qc |= r;
		return Is(e, t, i, n), t.child;
	}
	function Vs(e, t) {
		var n = t.ref;
		(e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
	}
	function Hs(e, t, n, r, i) {
		var a = Zi(n) ? Yi : qi.current;
		return a = Xi(t, a), Ja(t, i), n = Mo(e, t, n, r, a, i), r = No(), e !== null && !Fs ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, rc(e, t, i)) : (G && r && ba(t), t.flags |= 1, Is(e, t, n, i), t.child);
	}
	function Us(e, t, n, r, i) {
		if (Zi(n)) {
			var a = !0;
			ta(t);
		} else a = !1;
		if (Ja(t, i), t.stateNode === null) nc(e, t), Ss(t, n, r), ws(t, n, r, i), r = !0;
		else if (e === null) {
			var o = t.stateNode, s = t.memoizedProps;
			o.props = s;
			var c = o.context, l = n.contextType;
			typeof l == "object" && l ? l = Ya(l) : (l = Zi(n) ? Yi : qi.current, l = Xi(t, l));
			var u = n.getDerivedStateFromProps, d = typeof u == "function" || typeof o.getSnapshotBeforeUpdate == "function";
			d || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (s !== r || c !== l) && Cs(t, o, r, l), eo = !1;
			var f = t.memoizedState;
			o.state = f, so(t, r, o, i), c = t.memoizedState, s !== r || f !== c || Ji.current || eo ? (typeof u == "function" && (ys(t, n, u, r), c = t.memoizedState), (s = eo || xs(t, n, s, r, f, c, l)) ? (d || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = c), o.props = r, o.state = c, o.context = l, r = s) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
		} else {
			o = t.stateNode, no(e, t), s = t.memoizedProps, l = t.type === t.elementType ? s : vs(t.type, s), o.props = l, d = t.pendingProps, f = o.context, c = n.contextType, typeof c == "object" && c ? c = Ya(c) : (c = Zi(n) ? Yi : qi.current, c = Xi(t, c));
			var p = n.getDerivedStateFromProps;
			(u = typeof p == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (s !== d || f !== c) && Cs(t, o, r, c), eo = !1, f = t.memoizedState, o.state = f, so(t, r, o, i);
			var m = t.memoizedState;
			s !== d || f !== m || Ji.current || eo ? (typeof p == "function" && (ys(t, n, p, r), m = t.memoizedState), (l = eo || xs(t, n, l, r, f, m, c) || !1) ? (u || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, m, c), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, m, c)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = m), o.props = r, o.state = m, o.context = c, r = l) : (typeof o.componentDidUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1);
		}
		return Ws(e, t, n, r, a, i);
	}
	function Ws(e, t, n, r, i, a) {
		Vs(e, t);
		var o = (t.flags & 128) != 0;
		if (!r && !o) return i && na(t, n, !1), rc(e, t, a);
		r = t.stateNode, Ps.current = t;
		var s = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
		return t.flags |= 1, e !== null && o ? (t.child = za(t, e.child, null, a), t.child = za(t, null, s, a)) : Is(e, t, s, a), t.memoizedState = r.state, i && na(t, n, !0), t.child;
	}
	function Gs(e) {
		var t = e.stateNode;
		t.pendingContext ? $i(e, t.pendingContext, t.pendingContext !== t.context) : t.context && $i(e, t.context, !1), ho(e, t.containerInfo);
	}
	function Ks(e, t, n, r, i) {
		return Ma(), Na(i), t.flags |= 256, Is(e, t, n, r), t.child;
	}
	var qs = {
		dehydrated: null,
		treeContext: null,
		retryLane: 0
	};
	function Js(e) {
		return {
			baseLanes: e,
			cachePool: null,
			transitions: null
		};
	}
	function Ys(e, t, n) {
		var r = t.pendingProps, i = K.current, a = !1, o = (t.flags & 128) != 0, s;
		if ((s = o) || (s = e !== null && e.memoizedState === null ? !1 : (i & 2) != 0), s ? (a = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), W(K, i & 1), e === null) return Oa(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (o = r.children, e = r.fallback, a ? (r = t.mode, a = t.child, o = {
			mode: "hidden",
			children: o
		}, !(r & 1) && a !== null ? (a.childLanes = 0, a.pendingProps = o) : a = $l(o, r, 0, null), e = Ql(e, r, n, null), a.return = t, e.return = t, a.sibling = e, t.child = a, t.child.memoizedState = Js(n), t.memoizedState = qs, e) : Xs(t, o));
		if (i = e.memoizedState, i !== null && (s = i.dehydrated, s !== null)) return Qs(e, t, o, r, s, i, n);
		if (a) {
			a = r.fallback, o = t.mode, i = e.child, s = i.sibling;
			var c = {
				mode: "hidden",
				children: r.children
			};
			return !(o & 1) && t.child !== i ? (r = t.child, r.childLanes = 0, r.pendingProps = c, t.deletions = null) : (r = Xl(i, c), r.subtreeFlags = i.subtreeFlags & 14680064), s === null ? (a = Ql(a, o, n, null), a.flags |= 2) : a = Xl(s, a), a.return = t, r.return = t, r.sibling = a, t.child = r, r = a, a = t.child, o = e.child.memoizedState, o = o === null ? Js(n) : {
				baseLanes: o.baseLanes | n,
				cachePool: null,
				transitions: o.transitions
			}, a.memoizedState = o, a.childLanes = e.childLanes & ~n, t.memoizedState = qs, r;
		}
		return a = e.child, e = a.sibling, r = Xl(a, {
			mode: "visible",
			children: r.children
		}), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
	}
	function Xs(e, t) {
		return t = $l({
			mode: "visible",
			children: t
		}, e.mode, 0, null), t.return = e, e.child = t;
	}
	function Zs(e, t, n, r) {
		return r !== null && Na(r), za(t, e.child, null, n), e = Xs(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
	}
	function Qs(e, t, n, i, a, o, s) {
		if (n) return t.flags & 256 ? (t.flags &= -257, i = Es(Error(r(422))), Zs(e, t, s, i)) : t.memoizedState === null ? (o = i.fallback, a = t.mode, i = $l({
			mode: "visible",
			children: i.children
		}, a, 0, null), o = Ql(o, a, s, null), o.flags |= 2, i.return = t, o.return = t, i.sibling = o, t.child = i, t.mode & 1 && za(t, e.child, null, s), t.child.memoizedState = Js(s), t.memoizedState = qs, o) : (t.child = e.child, t.flags |= 128, null);
		if (!(t.mode & 1)) return Zs(e, t, s, null);
		if (a.data === "$!") {
			if (i = a.nextSibling && a.nextSibling.dataset, i) var c = i.dgst;
			return i = c, o = Error(r(419)), i = Es(o, i, void 0), Zs(e, t, s, i);
		}
		if (c = (s & e.childLanes) !== 0, Fs || c) {
			if (i = Wc, i !== null) {
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
			return Al(), i = Es(Error(r(421))), Zs(e, t, s, i);
		}
		return a.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Hl.bind(null, e), a._reactRetry = t, null) : (e = o.treeContext, Ca = Ai(a.nextSibling), Sa = t, G = !0, wa = null, e !== null && (pa[ma++] = ga, pa[ma++] = _a, pa[ma++] = ha, ga = e.id, _a = e.overflow, ha = t), t = Xs(t, i.children), t.flags |= 4096, t);
	}
	function $s(e, t, n) {
		e.lanes |= t;
		var r = e.alternate;
		r !== null && (r.lanes |= t), qa(e.return, t, n);
	}
	function ec(e, t, n, r, i) {
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
	function tc(e, t, n) {
		var r = t.pendingProps, i = r.revealOrder, a = r.tail;
		if (Is(e, t, r.children, n), r = K.current, r & 2) r = r & 1 | 2, t.flags |= 128;
		else {
			if (e !== null && e.flags & 128) a: for (e = t.child; e !== null;) {
				if (e.tag === 13) e.memoizedState !== null && $s(e, n, t);
				else if (e.tag === 19) $s(e, n, t);
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
				n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), ec(t, !1, i, n, a);
				break;
			case "backwards":
				for (n = null, i = t.child, t.child = null; i !== null;) {
					if (e = i.alternate, e !== null && yo(e) === null) {
						t.child = i;
						break;
					}
					e = i.sibling, i.sibling = n, n = i, i = e;
				}
				ec(t, !0, n, null, a);
				break;
			case "together":
				ec(t, !1, null, null, void 0);
				break;
			default: t.memoizedState = null;
		}
		return t.child;
	}
	function nc(e, t) {
		!(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
	}
	function rc(e, t, n) {
		if (e !== null && (t.dependencies = e.dependencies), Xc |= t.lanes, (n & t.childLanes) === 0) return null;
		if (e !== null && t.child !== e.child) throw Error(r(153));
		if (t.child !== null) {
			for (e = t.child, n = Xl(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = Xl(e, e.pendingProps), n.return = t;
			n.sibling = null;
		}
		return t.child;
	}
	function ic(e, t, n) {
		switch (t.tag) {
			case 3:
				Gs(t), Ma();
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
				if (r = t.memoizedState, r !== null) return r.dehydrated === null ? (n & t.child.childLanes) === 0 ? (W(K, K.current & 1), e = rc(e, t, n), e === null ? null : e.sibling) : Ys(e, t, n) : (W(K, K.current & 1), t.flags |= 128, null);
				W(K, K.current & 1);
				break;
			case 19:
				if (r = (n & t.childLanes) !== 0, e.flags & 128) {
					if (r) return tc(e, t, n);
					t.flags |= 128;
				}
				if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), W(K, K.current), r) break;
				return null;
			case 22:
			case 23: return t.lanes = 0, Bs(e, t, n);
		}
		return rc(e, t, n);
	}
	var ac = function(e, t) {
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
	}, oc = function(e, t, n, r) {
		var i = e.memoizedProps;
		if (i !== r) {
			e = t.stateNode, mo(uo.current);
			var o = null;
			switch (n) {
				case "input":
					i = ge(e, i), r = ge(e, r), o = [];
					break;
				case "select":
					i = I({}, i, { value: void 0 }), r = I({}, r, { value: void 0 }), o = [];
					break;
				case "textarea":
					i = we(e, i), r = we(e, r), o = [];
					break;
				default: typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = bi);
			}
			Le(n, r);
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
				else u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, c = c ? c.__html : void 0, l != null && c !== l && (o ||= []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (o ||= []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (a.hasOwnProperty(u) ? (l != null && u === "onScroll" && H("scroll", e), o || c === l || (o = [])) : (o ||= []).push(u, l));
			}
			n && (o ||= []).push("style", n);
			var u = o;
			(t.updateQueue = u) && (t.flags |= 4);
		}
	}, sc = function(e, t, n, r) {
		n !== r && (t.flags |= 4);
	};
	function cc(e, t) {
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
	function lc(e) {
		var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
		if (t) for (var i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 14680064, r |= i.flags & 14680064, i.return = e, i = i.sibling;
		else for (i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
		return e.subtreeFlags |= r, e.childLanes = n, t;
	}
	function uc(e, t, n) {
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
			case 14: return lc(t), null;
			case 1: return Zi(t.type) && Qi(), lc(t), null;
			case 3: return i = t.stateNode, go(), U(Ji), U(qi), xo(), i.pendingContext && (i.context = i.pendingContext, i.pendingContext = null), (e === null || e.child === null) && (Aa(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, wa !== null && (bl(wa), wa = null))), lc(t), null;
			case 5:
				vo(t);
				var o = mo(po.current);
				if (n = t.type, e !== null && t.stateNode != null) oc(e, t, n, i, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
				else {
					if (!i) {
						if (t.stateNode === null) throw Error(r(166));
						return lc(t), null;
					}
					if (e = mo(uo.current), Aa(t)) {
						i = t.stateNode, n = t.type;
						var s = t.memoizedProps;
						switch (i[Ni] = t, i[Pi] = s, e = (t.mode & 1) != 0, n) {
							case "dialog":
								H("cancel", i), H("close", i);
								break;
							case "iframe":
							case "object":
							case "embed":
								H("load", i);
								break;
							case "video":
							case "audio":
								for (o = 0; o < ri.length; o++) H(ri[o], i);
								break;
							case "source":
								H("error", i);
								break;
							case "img":
							case "image":
							case "link":
								H("error", i), H("load", i);
								break;
							case "details":
								H("toggle", i);
								break;
							case "input":
								_e(i, s), H("invalid", i);
								break;
							case "select":
								i._wrapperState = { wasMultiple: !!s.multiple }, H("invalid", i);
								break;
							case "textarea": Te(i, s), H("invalid", i);
						}
						for (var c in Le(n, s), o = null, s) if (s.hasOwnProperty(c)) {
							var l = s[c];
							c === "children" ? typeof l == "string" ? i.textContent !== l && (!0 !== s.suppressHydrationWarning && yi(i.textContent, l, e), o = ["children", l]) : typeof l == "number" && i.textContent !== "" + l && (!0 !== s.suppressHydrationWarning && yi(i.textContent, l, e), o = ["children", "" + l]) : a.hasOwnProperty(c) && l != null && c === "onScroll" && H("scroll", i);
						}
						switch (n) {
							case "input":
								pe(i), be(i, s, !0);
								break;
							case "textarea":
								pe(i), De(i);
								break;
							case "select":
							case "option": break;
							default: typeof s.onClick == "function" && (i.onclick = bi);
						}
						i = o, t.updateQueue = i, i !== null && (t.flags |= 4);
					} else {
						c = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Oe(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = c.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof i.is == "string" ? e = c.createElement(n, { is: i.is }) : (e = c.createElement(n), n === "select" && (c = e, i.multiple ? c.multiple = !0 : i.size && (c.size = i.size))) : e = c.createElementNS(e, n), e[Ni] = t, e[Pi] = i, ac(e, t, !1, !1), t.stateNode = e;
						a: {
							switch (c = Re(n, i), n) {
								case "dialog":
									H("cancel", e), H("close", e), o = i;
									break;
								case "iframe":
								case "object":
								case "embed":
									H("load", e), o = i;
									break;
								case "video":
								case "audio":
									for (o = 0; o < ri.length; o++) H(ri[o], e);
									o = i;
									break;
								case "source":
									H("error", e), o = i;
									break;
								case "img":
								case "image":
								case "link":
									H("error", e), H("load", e), o = i;
									break;
								case "details":
									H("toggle", e), o = i;
									break;
								case "input":
									_e(e, i), o = ge(e, i), H("invalid", e);
									break;
								case "option":
									o = i;
									break;
								case "select":
									e._wrapperState = { wasMultiple: !!i.multiple }, o = I({}, i, { value: void 0 }), H("invalid", e);
									break;
								case "textarea":
									Te(e, i), o = we(e, i), H("invalid", e);
									break;
								default: o = i;
							}
							for (s in Le(n, o), l = o, l) if (l.hasOwnProperty(s)) {
								var u = l[s];
								s === "style" ? Fe(e, u) : s === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, u != null && je(e, u)) : s === "children" ? typeof u == "string" ? (n !== "textarea" || u !== "") && L(e, u) : typeof u == "number" && L(e, "" + u) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (a.hasOwnProperty(s) ? u != null && s === "onScroll" && H("scroll", e) : u != null && S(e, s, u, c));
							}
							switch (n) {
								case "input":
									pe(e), be(e, i, !1);
									break;
								case "textarea":
									pe(e), De(e);
									break;
								case "option":
									i.value != null && e.setAttribute("value", "" + ue(i.value));
									break;
								case "select":
									e.multiple = !!i.multiple, s = i.value, s == null ? i.defaultValue != null && Ce(e, !!i.multiple, i.defaultValue, !0) : Ce(e, !!i.multiple, s, !1);
									break;
								default: typeof o.onClick == "function" && (e.onclick = bi);
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
				return lc(t), null;
			case 6:
				if (e && t.stateNode != null) sc(e, t, e.memoizedProps, i);
				else {
					if (typeof i != "string" && t.stateNode === null) throw Error(r(166));
					if (n = mo(po.current), mo(uo.current), Aa(t)) {
						if (i = t.stateNode, n = t.memoizedProps, i[Ni] = t, (s = i.nodeValue !== n) && (e = Sa, e !== null)) switch (e.tag) {
							case 3:
								yi(i.nodeValue, n, (e.mode & 1) != 0);
								break;
							case 5: !0 !== e.memoizedProps.suppressHydrationWarning && yi(i.nodeValue, n, (e.mode & 1) != 0);
						}
						s && (t.flags |= 4);
					} else i = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(i), i[Ni] = t, t.stateNode = i;
				}
				return lc(t), null;
			case 13:
				if (U(K), i = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
					if (G && Ca !== null && t.mode & 1 && !(t.flags & 128)) ja(), Ma(), t.flags |= 98560, s = !1;
					else if (s = Aa(t), i !== null && i.dehydrated !== null) {
						if (e === null) {
							if (!s) throw Error(r(318));
							if (s = t.memoizedState, s = s === null ? null : s.dehydrated, !s) throw Error(r(317));
							s[Ni] = t;
						} else Ma(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
						lc(t), s = !1;
					} else wa !== null && (bl(wa), wa = null), s = !0;
					if (!s) return t.flags & 65536 ? t : null;
				}
				return t.flags & 128 ? (t.lanes = n, t) : (i = i !== null, i !== (e !== null && e.memoizedState !== null) && i && (t.child.flags |= 8192, t.mode & 1 && (e === null || K.current & 1 ? Z === 0 && (Z = 3) : Al())), t.updateQueue !== null && (t.flags |= 4), lc(t), null);
			case 4: return go(), e === null && li(t.stateNode.containerInfo), lc(t), null;
			case 10: return Ka(t.type._context), lc(t), null;
			case 17: return Zi(t.type) && Qi(), lc(t), null;
			case 19:
				if (U(K), s = t.memoizedState, s === null) return lc(t), null;
				if (i = (t.flags & 128) != 0, c = s.rendering, c === null) if (i) cc(s, !1);
				else {
					if (Z !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null;) {
						if (c = yo(e), c !== null) {
							for (t.flags |= 128, cc(s, !1), i = c.updateQueue, i !== null && (t.updateQueue = i, t.flags |= 4), t.subtreeFlags = 0, i = n, n = t.child; n !== null;) s = n, e = i, s.flags &= 14680066, c = s.alternate, c === null ? (s.childLanes = 0, s.lanes = e, s.child = null, s.subtreeFlags = 0, s.memoizedProps = null, s.memoizedState = null, s.updateQueue = null, s.dependencies = null, s.stateNode = null) : (s.childLanes = c.childLanes, s.lanes = c.lanes, s.child = c.child, s.subtreeFlags = 0, s.deletions = null, s.memoizedProps = c.memoizedProps, s.memoizedState = c.memoizedState, s.updateQueue = c.updateQueue, s.type = c.type, e = c.dependencies, s.dependencies = e === null ? null : {
								lanes: e.lanes,
								firstContext: e.firstContext
							}), n = n.sibling;
							return W(K, K.current & 1 | 2), t.child;
						}
						e = e.sibling;
					}
					s.tail !== null && R() > nl && (t.flags |= 128, i = !0, cc(s, !1), t.lanes = 4194304);
				}
				else {
					if (!i) if (e = yo(c), e !== null) {
						if (t.flags |= 128, i = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), cc(s, !0), s.tail === null && s.tailMode === "hidden" && !c.alternate && !G) return lc(t), null;
					} else 2 * R() - s.renderingStartTime > nl && n !== 1073741824 && (t.flags |= 128, i = !0, cc(s, !1), t.lanes = 4194304);
					s.isBackwards ? (c.sibling = t.child, t.child = c) : (n = s.last, n === null ? t.child = c : n.sibling = c, s.last = c);
				}
				return s.tail === null ? (lc(t), null) : (t = s.tail, s.rendering = t, s.tail = t.sibling, s.renderingStartTime = R(), t.sibling = null, n = K.current, W(K, i ? n & 1 | 2 : n & 1), t);
			case 22:
			case 23: return El(), i = t.memoizedState !== null, e !== null && e.memoizedState !== null !== i && (t.flags |= 8192), i && t.mode & 1 ? qc & 1073741824 && (lc(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : lc(t), null;
			case 24: return null;
			case 25: return null;
		}
		throw Error(r(156, t.tag));
	}
	function dc(e, t) {
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
	var fc = !1, pc = !1, mc = typeof WeakSet == "function" ? WeakSet : Set, Y = null;
	function hc(e, t) {
		var n = e.ref;
		if (n !== null) if (typeof n == "function") try {
			n(null);
		} catch (n) {
			Q(e, t, n);
		}
		else n.current = null;
	}
	function gc(e, t, n) {
		try {
			n();
		} catch (n) {
			Q(e, t, n);
		}
	}
	var _c = !1;
	function vc(e, t) {
		if (xi = mn, e = Pr(), Fr(e)) {
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
		for (Si = {
			focusedElem: e,
			selectionRange: n
		}, mn = !1, Y = t; Y !== null;) if (t = Y, e = t.child, t.subtreeFlags & 1028 && e !== null) e.return = t, Y = e;
		else for (; Y !== null;) {
			t = Y;
			try {
				var h = t.alternate;
				if (t.flags & 1024) switch (t.tag) {
					case 0:
					case 11:
					case 15: break;
					case 1:
						if (h !== null) {
							var g = h.memoizedProps, _ = h.memoizedState, v = t.stateNode;
							v.__reactInternalSnapshotBeforeUpdate = v.getSnapshotBeforeUpdate(t.elementType === t.type ? g : vs(t.type, g), _);
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
				e.return = t.return, Y = e;
				break;
			}
			Y = t.return;
		}
		return h = _c, _c = !1, h;
	}
	function yc(e, t, n) {
		var r = t.updateQueue;
		if (r = r === null ? null : r.lastEffect, r !== null) {
			var i = r = r.next;
			do {
				if ((i.tag & e) === e) {
					var a = i.destroy;
					i.destroy = void 0, a !== void 0 && gc(t, n, a);
				}
				i = i.next;
			} while (i !== r);
		}
	}
	function bc(e, t) {
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
	function xc(e) {
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
	function Sc(e) {
		var t = e.alternate;
		t !== null && (e.alternate = null, Sc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Ni], delete t[Pi], delete t[Ii], delete t[Li], delete t[Ri])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
	}
	function Cc(e) {
		return e.tag === 5 || e.tag === 3 || e.tag === 4;
	}
	function wc(e) {
		a: for (;;) {
			for (; e.sibling === null;) {
				if (e.return === null || Cc(e.return)) return null;
				e = e.return;
			}
			for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
				if (e.flags & 2 || e.child === null || e.tag === 4) continue a;
				e.child.return = e, e = e.child;
			}
			if (!(e.flags & 2)) return e.stateNode;
		}
	}
	function Tc(e, t, n) {
		var r = e.tag;
		if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = bi));
		else if (r !== 4 && (e = e.child, e !== null)) for (Tc(e, t, n), e = e.sibling; e !== null;) Tc(e, t, n), e = e.sibling;
	}
	function Ec(e, t, n) {
		var r = e.tag;
		if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
		else if (r !== 4 && (e = e.child, e !== null)) for (Ec(e, t, n), e = e.sibling; e !== null;) Ec(e, t, n), e = e.sibling;
	}
	var Dc = null, Oc = !1;
	function kc(e, t, n) {
		for (n = n.child; n !== null;) Ac(e, t, n), n = n.sibling;
	}
	function Ac(e, t, n) {
		if (Tt && typeof Tt.onCommitFiberUnmount == "function") try {
			Tt.onCommitFiberUnmount(wt, n);
		} catch {}
		switch (n.tag) {
			case 5: pc || hc(n, t);
			case 6:
				var r = Dc, i = Oc;
				Dc = null, kc(e, t, n), Dc = r, Oc = i, Dc !== null && (Oc ? (e = Dc, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Dc.removeChild(n.stateNode));
				break;
			case 18:
				Dc !== null && (Oc ? (e = Dc, n = n.stateNode, e.nodeType === 8 ? ki(e.parentNode, n) : e.nodeType === 1 && ki(e, n), fn(e)) : ki(Dc, n.stateNode));
				break;
			case 4:
				r = Dc, i = Oc, Dc = n.stateNode.containerInfo, Oc = !0, kc(e, t, n), Dc = r, Oc = i;
				break;
			case 0:
			case 11:
			case 14:
			case 15:
				if (!pc && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
					i = r = r.next;
					do {
						var a = i, o = a.destroy;
						a = a.tag, o !== void 0 && (a & 2 || a & 4) && gc(n, t, o), i = i.next;
					} while (i !== r);
				}
				kc(e, t, n);
				break;
			case 1:
				if (!pc && (hc(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
					r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
				} catch (e) {
					Q(n, t, e);
				}
				kc(e, t, n);
				break;
			case 21:
				kc(e, t, n);
				break;
			case 22:
				n.mode & 1 ? (pc = (r = pc) || n.memoizedState !== null, kc(e, t, n), pc = r) : kc(e, t, n);
				break;
			default: kc(e, t, n);
		}
	}
	function jc(e) {
		var t = e.updateQueue;
		if (t !== null) {
			e.updateQueue = null;
			var n = e.stateNode;
			n === null && (n = e.stateNode = new mc()), t.forEach(function(t) {
				var r = Ul.bind(null, e, t);
				n.has(t) || (n.add(t), t.then(r, r));
			});
		}
	}
	function Mc(e, t) {
		var n = t.deletions;
		if (n !== null) for (var i = 0; i < n.length; i++) {
			var a = n[i];
			try {
				var o = e, s = t, c = s;
				a: for (; c !== null;) {
					switch (c.tag) {
						case 5:
							Dc = c.stateNode, Oc = !1;
							break a;
						case 3:
							Dc = c.stateNode.containerInfo, Oc = !0;
							break a;
						case 4:
							Dc = c.stateNode.containerInfo, Oc = !0;
							break a;
					}
					c = c.return;
				}
				if (Dc === null) throw Error(r(160));
				Ac(o, s, a), Dc = null, Oc = !1;
				var l = a.alternate;
				l !== null && (l.return = null), a.return = null;
			} catch (e) {
				Q(a, t, e);
			}
		}
		if (t.subtreeFlags & 12854) for (t = t.child; t !== null;) Nc(t, e), t = t.sibling;
	}
	function Nc(e, t) {
		var n = e.alternate, i = e.flags;
		switch (e.tag) {
			case 0:
			case 11:
			case 14:
			case 15:
				if (Mc(t, e), Pc(e), i & 4) {
					try {
						yc(3, e, e.return), bc(3, e);
					} catch (t) {
						Q(e, e.return, t);
					}
					try {
						yc(5, e, e.return);
					} catch (t) {
						Q(e, e.return, t);
					}
				}
				break;
			case 1:
				Mc(t, e), Pc(e), i & 512 && n !== null && hc(n, n.return);
				break;
			case 5:
				if (Mc(t, e), Pc(e), i & 512 && n !== null && hc(n, n.return), e.flags & 32) {
					var a = e.stateNode;
					try {
						L(a, "");
					} catch (t) {
						Q(e, e.return, t);
					}
				}
				if (i & 4 && (a = e.stateNode, a != null)) {
					var o = e.memoizedProps, s = n === null ? o : n.memoizedProps, c = e.type, l = e.updateQueue;
					if (e.updateQueue = null, l !== null) try {
						c === "input" && o.type === "radio" && o.name != null && ve(a, o), Re(c, s);
						var u = Re(c, o);
						for (s = 0; s < l.length; s += 2) {
							var d = l[s], f = l[s + 1];
							d === "style" ? Fe(a, f) : d === "dangerouslySetInnerHTML" ? je(a, f) : d === "children" ? L(a, f) : S(a, d, f, u);
						}
						switch (c) {
							case "input":
								ye(a, o);
								break;
							case "textarea":
								Ee(a, o);
								break;
							case "select":
								var p = a._wrapperState.wasMultiple;
								a._wrapperState.wasMultiple = !!o.multiple;
								var m = o.value;
								m == null ? p !== !!o.multiple && (o.defaultValue == null ? Ce(a, !!o.multiple, o.multiple ? [] : "", !1) : Ce(a, !!o.multiple, o.defaultValue, !0)) : Ce(a, !!o.multiple, m, !1);
						}
						a[Pi] = o;
					} catch (t) {
						Q(e, e.return, t);
					}
				}
				break;
			case 6:
				if (Mc(t, e), Pc(e), i & 4) {
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
				if (Mc(t, e), Pc(e), i & 4 && n !== null && n.memoizedState.isDehydrated) try {
					fn(t.containerInfo);
				} catch (t) {
					Q(e, e.return, t);
				}
				break;
			case 4:
				Mc(t, e), Pc(e);
				break;
			case 13:
				Mc(t, e), Pc(e), a = e.child, a.flags & 8192 && (o = a.memoizedState !== null, a.stateNode.isHidden = o, !o || a.alternate !== null && a.alternate.memoizedState !== null || (tl = R())), i & 4 && jc(e);
				break;
			case 22:
				if (d = n !== null && n.memoizedState !== null, e.mode & 1 ? (pc = (u = pc) || d, Mc(t, e), pc = u) : Mc(t, e), Pc(e), i & 8192) {
					if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !d && e.mode & 1) for (Y = e, d = e.child; d !== null;) {
						for (f = Y = d; Y !== null;) {
							switch (p = Y, m = p.child, p.tag) {
								case 0:
								case 11:
								case 14:
								case 15:
									yc(4, p, p.return);
									break;
								case 1:
									hc(p, p.return);
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
									hc(p, p.return);
									break;
								case 22: if (p.memoizedState !== null) {
									Rc(f);
									continue;
								}
							}
							m === null ? Rc(f) : (m.return = p, Y = m);
						}
						d = d.sibling;
					}
					a: for (d = null, f = e;;) {
						if (f.tag === 5) {
							if (d === null) {
								d = f;
								try {
									a = f.stateNode, u ? (o = a.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (c = f.stateNode, l = f.memoizedProps.style, s = l != null && l.hasOwnProperty("display") ? l.display : null, c.style.display = Pe("display", s));
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
				Mc(t, e), Pc(e), i & 4 && jc(e);
				break;
			case 21: break;
			default: Mc(t, e), Pc(e);
		}
	}
	function Pc(e) {
		var t = e.flags;
		if (t & 2) {
			try {
				a: {
					for (var n = e.return; n !== null;) {
						if (Cc(n)) {
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
						i.flags & 32 && (L(a, ""), i.flags &= -33), Ec(e, wc(e), a);
						break;
					case 3:
					case 4:
						var o = i.stateNode.containerInfo;
						Tc(e, wc(e), o);
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
	function Fc(e, t, n) {
		Y = e, Ic(e, t, n);
	}
	function Ic(e, t, n) {
		for (var r = (e.mode & 1) != 0; Y !== null;) {
			var i = Y, a = i.child;
			if (i.tag === 22 && r) {
				var o = i.memoizedState !== null || fc;
				if (!o) {
					var s = i.alternate, c = s !== null && s.memoizedState !== null || pc;
					s = fc;
					var l = pc;
					if (fc = o, (pc = c) && !l) for (Y = i; Y !== null;) o = Y, c = o.child, o.tag === 22 && o.memoizedState !== null || c === null ? zc(i) : (c.return = o, Y = c);
					for (; a !== null;) Y = a, Ic(a, t, n), a = a.sibling;
					Y = i, fc = s, pc = l;
				}
				Lc(e, t, n);
			} else i.subtreeFlags & 8772 && a !== null ? (a.return = i, Y = a) : Lc(e, t, n);
		}
	}
	function Lc(e) {
		for (; Y !== null;) {
			var t = Y;
			if (t.flags & 8772) {
				var n = t.alternate;
				try {
					if (t.flags & 8772) switch (t.tag) {
						case 0:
						case 11:
						case 15:
							pc || bc(5, t);
							break;
						case 1:
							var i = t.stateNode;
							if (t.flags & 4 && !pc) if (n === null) i.componentDidMount();
							else {
								var a = t.elementType === t.type ? n.memoizedProps : vs(t.type, n.memoizedProps);
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
										f !== null && fn(f);
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
					pc || t.flags & 512 && xc(t);
				} catch (e) {
					Q(t, t.return, e);
				}
			}
			if (t === e) {
				Y = null;
				break;
			}
			if (n = t.sibling, n !== null) {
				n.return = t.return, Y = n;
				break;
			}
			Y = t.return;
		}
	}
	function Rc(e) {
		for (; Y !== null;) {
			var t = Y;
			if (t === e) {
				Y = null;
				break;
			}
			var n = t.sibling;
			if (n !== null) {
				n.return = t.return, Y = n;
				break;
			}
			Y = t.return;
		}
	}
	function zc(e) {
		for (; Y !== null;) {
			var t = Y;
			try {
				switch (t.tag) {
					case 0:
					case 11:
					case 15:
						var n = t.return;
						try {
							bc(4, t);
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
							xc(t);
						} catch (e) {
							Q(t, a, e);
						}
						break;
					case 5:
						var o = t.return;
						try {
							xc(t);
						} catch (e) {
							Q(t, o, e);
						}
				}
			} catch (e) {
				Q(t, t.return, e);
			}
			if (t === e) {
				Y = null;
				break;
			}
			var s = t.sibling;
			if (s !== null) {
				s.return = t.return, Y = s;
				break;
			}
			Y = t.return;
		}
	}
	var Bc = Math.ceil, Vc = C.ReactCurrentDispatcher, Hc = C.ReactCurrentOwner, Uc = C.ReactCurrentBatchConfig, X = 0, Wc = null, Gc = null, Kc = 0, qc = 0, Jc = Gi(0), Z = 0, Yc = null, Xc = 0, Zc = 0, Qc = 0, $c = null, el = null, tl = 0, nl = Infinity, rl = null, il = !1, al = null, ol = null, sl = !1, cl = null, ll = 0, ul = 0, dl = null, fl = -1, pl = 0;
	function ml() {
		return X & 6 ? R() : fl === -1 ? fl = R() : fl;
	}
	function hl(e) {
		return e.mode & 1 ? X & 2 && Kc !== 0 ? Kc & -Kc : Pa.transition === null ? (e = z, e === 0 ? (e = window.event, e = e === void 0 ? 16 : bn(e.type), e) : e) : (pl === 0 && (pl = Rt()), pl) : 1;
	}
	function gl(e, t, n, i) {
		if (50 < ul) throw ul = 0, dl = null, Error(r(185));
		Bt(e, n, i), (!(X & 2) || e !== Wc) && (e === Wc && (!(X & 2) && (Zc |= n), Z === 4 && Sl(e, Kc)), _l(e, i), n === 1 && X === 0 && !(t.mode & 1) && (nl = R() + 500, ia && ca()));
	}
	function _l(e, t) {
		var n = e.callbackNode;
		It(e, t);
		var r = Pt(e, e === Wc ? Kc : 0);
		if (r === 0) n !== null && ht(n), e.callbackNode = null, e.callbackPriority = 0;
		else if (t = r & -r, e.callbackPriority !== t) {
			if (n != null && ht(n), t === 1) e.tag === 0 ? sa(Cl.bind(null, e)) : oa(Cl.bind(null, e)), Di(function() {
				!(X & 6) && ca();
			}), n = null;
			else {
				switch (Ut(r)) {
					case 1:
						n = yt;
						break;
					case 4:
						n = bt;
						break;
					case 16:
						n = xt;
						break;
					case 536870912:
						n = Ct;
						break;
					default: n = xt;
				}
				n = Gl(n, vl.bind(null, e));
			}
			e.callbackPriority = t, e.callbackNode = n;
		}
	}
	function vl(e, t) {
		if (fl = -1, pl = 0, X & 6) throw Error(r(327));
		var n = e.callbackNode;
		if (Rl() && e.callbackNode !== n) return null;
		var i = Pt(e, e === Wc ? Kc : 0);
		if (i === 0) return null;
		if (i & 30 || (i & e.expiredLanes) !== 0 || t) t = jl(e, i);
		else {
			t = i;
			var a = X;
			X |= 2;
			var o = kl();
			(Wc !== e || Kc !== t) && (rl = null, nl = R() + 500, Dl(e, t));
			do
				try {
					Nl();
					break;
				} catch (t) {
					Ol(e, t);
				}
			while (1);
			Ga(), Vc.current = o, X = a, Gc === null ? (Wc = null, Kc = 0, t = Z) : t = 0;
		}
		if (t !== 0) {
			if (t === 2 && (a = Lt(e), a !== 0 && (i = a, t = yl(e, a))), t === 1) throw n = Yc, Dl(e, 0), Sl(e, i), _l(e, R()), n;
			if (t === 6) Sl(e, i);
			else {
				if (a = e.current.alternate, !(i & 30) && !xl(a) && (t = jl(e, i), t === 2 && (o = Lt(e), o !== 0 && (i = o, t = yl(e, o))), t === 1)) throw n = Yc, Dl(e, 0), Sl(e, i), _l(e, R()), n;
				switch (e.finishedWork = a, e.finishedLanes = i, t) {
					case 0:
					case 1: throw Error(r(345));
					case 2:
						Il(e, el, rl);
						break;
					case 3:
						if (Sl(e, i), (i & 130023424) === i && (t = tl + 500 - R(), 10 < t)) {
							if (Pt(e, 0) !== 0) break;
							if (a = e.suspendedLanes, (a & i) !== i) {
								ml(), e.pingedLanes |= e.suspendedLanes & a;
								break;
							}
							e.timeoutHandle = wi(Il.bind(null, e, el, rl), t);
							break;
						}
						Il(e, el, rl);
						break;
					case 4:
						if (Sl(e, i), (i & 4194240) === i) break;
						for (t = e.eventTimes, a = -1; 0 < i;) {
							var s = 31 - Dt(i);
							o = 1 << s, s = t[s], s > a && (a = s), i &= ~o;
						}
						if (i = a, i = R() - i, i = (120 > i ? 120 : 480 > i ? 480 : 1080 > i ? 1080 : 1920 > i ? 1920 : 3e3 > i ? 3e3 : 4320 > i ? 4320 : 1960 * Bc(i / 1960)) - i, 10 < i) {
							e.timeoutHandle = wi(Il.bind(null, e, el, rl), i);
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
		return _l(e, R()), e.callbackNode === n ? vl.bind(null, e) : null;
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
						if (!kr(a(), i)) return !1;
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
			var n = 31 - Dt(t), r = 1 << n;
			e[n] = -1, t &= ~r;
		}
	}
	function Cl(e) {
		if (X & 6) throw Error(r(327));
		Rl();
		var t = Pt(e, 0);
		if (!(t & 1)) return _l(e, R()), null;
		var n = jl(e, t);
		if (e.tag !== 0 && n === 2) {
			var i = Lt(e);
			i !== 0 && (t = i, n = yl(e, i));
		}
		if (n === 1) throw n = Yc, Dl(e, 0), Sl(e, t), _l(e, R()), n;
		if (n === 6) throw Error(r(345));
		return e.finishedWork = e.current.alternate, e.finishedLanes = t, Il(e, el, rl), _l(e, R()), null;
	}
	function wl(e, t) {
		var n = X;
		X |= 1;
		try {
			return e(t);
		} finally {
			X = n, X === 0 && (nl = R() + 500, ia && ca());
		}
	}
	function Tl(e) {
		cl !== null && cl.tag === 0 && !(X & 6) && Rl();
		var t = X;
		X |= 1;
		var n = Uc.transition, r = z;
		try {
			if (Uc.transition = null, z = 1, e) return e();
		} finally {
			z = r, Uc.transition = n, X = t, !(X & 6) && ca();
		}
	}
	function El() {
		qc = Jc.current, U(Jc);
	}
	function Dl(e, t) {
		e.finishedWork = null, e.finishedLanes = 0;
		var n = e.timeoutHandle;
		if (n !== -1 && (e.timeoutHandle = -1, Ti(n)), Gc !== null) for (n = Gc.return; n !== null;) {
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
		if (Wc = e, Gc = e = Xl(e.current, null), Kc = qc = t, Z = 0, Yc = null, Qc = Zc = Xc = 0, el = $c = null, Xa !== null) {
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
			var n = Gc;
			try {
				if (Ga(), So.current = ms, Eo) {
					for (var i = q.memoizedState; i !== null;) {
						var a = i.queue;
						a !== null && (a.pending = null), i = i.next;
					}
					Eo = !1;
				}
				if (wo = 0, To = J = q = null, Do = !1, Oo = 0, Hc.current = null, n === null || n.return === null) {
					Z = 1, Yc = t, Gc = null;
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
						var m = Ms(s);
						if (m !== null) {
							m.flags &= -257, Ns(m, s, c, o, t), m.mode & 1 && js(o, u, t), t = m, l = u;
							var h = t.updateQueue;
							if (h === null) {
								var g = /* @__PURE__ */ new Set();
								g.add(l), t.updateQueue = g;
							} else h.add(l);
							break a;
						} else {
							if (!(t & 1)) {
								js(o, u, t), Al();
								break a;
							}
							l = Error(r(426));
						}
					} else if (G && c.mode & 1) {
						var _ = Ms(s);
						if (_ !== null) {
							!(_.flags & 65536) && (_.flags |= 256), Ns(_, s, c, o, t), Na(Ts(l, c));
							break a;
						}
					}
					o = l = Ts(l, c), Z !== 4 && (Z = 2), $c === null ? $c = [o] : $c.push(o), o = s;
					do {
						switch (o.tag) {
							case 3:
								o.flags |= 65536, t &= -t, o.lanes |= t;
								var v = ks(o, l, t);
								oo(o, v);
								break a;
							case 1:
								c = l;
								var y = o.type, b = o.stateNode;
								if (!(o.flags & 128) && (typeof y.getDerivedStateFromError == "function" || b !== null && typeof b.componentDidCatch == "function" && (ol === null || !ol.has(b)))) {
									o.flags |= 65536, t &= -t, o.lanes |= t;
									var x = As(o, c, t);
									oo(o, x);
									break a;
								}
						}
						o = o.return;
					} while (o !== null);
				}
				Fl(n);
			} catch (e) {
				t = e, Gc === n && n !== null && (Gc = n = n.return);
				continue;
			}
			break;
		} while (1);
	}
	function kl() {
		var e = Vc.current;
		return Vc.current = ms, e === null ? ms : e;
	}
	function Al() {
		(Z === 0 || Z === 3 || Z === 2) && (Z = 4), Wc === null || !(Xc & 268435455) && !(Zc & 268435455) || Sl(Wc, Kc);
	}
	function jl(e, t) {
		var n = X;
		X |= 2;
		var i = kl();
		(Wc !== e || Kc !== t) && (rl = null, Dl(e, t));
		do
			try {
				Ml();
				break;
			} catch (t) {
				Ol(e, t);
			}
		while (1);
		if (Ga(), X = n, Vc.current = i, Gc !== null) throw Error(r(261));
		return Wc = null, Kc = 0, Z;
	}
	function Ml() {
		for (; Gc !== null;) Pl(Gc);
	}
	function Nl() {
		for (; Gc !== null && !gt();) Pl(Gc);
	}
	function Pl(e) {
		var t = Wl(e.alternate, e, qc);
		e.memoizedProps = e.pendingProps, t === null ? Fl(e) : Gc = t, Hc.current = null;
	}
	function Fl(e) {
		var t = e;
		do {
			var n = t.alternate;
			if (e = t.return, t.flags & 32768) {
				if (n = dc(n, t), n !== null) {
					n.flags &= 32767, Gc = n;
					return;
				}
				if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
				else {
					Z = 6, Gc = null;
					return;
				}
			} else if (n = uc(n, t, qc), n !== null) {
				Gc = n;
				return;
			}
			if (t = t.sibling, t !== null) {
				Gc = t;
				return;
			}
			Gc = t = e;
		} while (t !== null);
		Z === 0 && (Z = 5);
	}
	function Il(e, t, n) {
		var r = z, i = Uc.transition;
		try {
			Uc.transition = null, z = 1, Ll(e, t, n, r);
		} finally {
			Uc.transition = i, z = r;
		}
		return null;
	}
	function Ll(e, t, n, i) {
		do
			Rl();
		while (cl !== null);
		if (X & 6) throw Error(r(327));
		n = e.finishedWork;
		var a = e.finishedLanes;
		if (n === null) return null;
		if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(r(177));
		e.callbackNode = null, e.callbackPriority = 0;
		var o = n.lanes | n.childLanes;
		if (Vt(e, o), e === Wc && (Gc = Wc = null, Kc = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || sl || (sl = !0, Gl(xt, function() {
			return Rl(), null;
		})), o = (n.flags & 15990) != 0, n.subtreeFlags & 15990 || o) {
			o = Uc.transition, Uc.transition = null;
			var s = z;
			z = 1;
			var c = X;
			X |= 4, Hc.current = null, vc(e, n), Nc(n, e), Ir(Si), mn = !!xi, Si = xi = null, e.current = n, Fc(n, e, a), _t(), X = c, z = s, Uc.transition = o;
		} else e.current = n;
		if (sl && (sl = !1, cl = e, ll = a), o = e.pendingLanes, o === 0 && (ol = null), Et(n.stateNode, i), _l(e, R()), t !== null) for (i = e.onRecoverableError, n = 0; n < t.length; n++) a = t[n], i(a.value, {
			componentStack: a.stack,
			digest: a.digest
		});
		if (il) throw il = !1, e = al, al = null, e;
		return ll & 1 && e.tag !== 0 && Rl(), o = e.pendingLanes, o & 1 ? e === dl ? ul++ : (ul = 0, dl = e) : ul = 0, ca(), null;
	}
	function Rl() {
		if (cl !== null) {
			var e = Ut(ll), t = Uc.transition, n = z;
			try {
				if (Uc.transition = null, z = 16 > e ? 16 : e, cl === null) var i = !1;
				else {
					if (e = cl, cl = null, ll = 0, X & 6) throw Error(r(331));
					var a = X;
					for (X |= 4, Y = e.current; Y !== null;) {
						var o = Y, s = o.child;
						if (Y.flags & 16) {
							var c = o.deletions;
							if (c !== null) {
								for (var l = 0; l < c.length; l++) {
									var u = c[l];
									for (Y = u; Y !== null;) {
										var d = Y;
										switch (d.tag) {
											case 0:
											case 11:
											case 15: yc(8, d, o);
										}
										var f = d.child;
										if (f !== null) f.return = d, Y = f;
										else for (; Y !== null;) {
											d = Y;
											var p = d.sibling, m = d.return;
											if (Sc(d), d === u) {
												Y = null;
												break;
											}
											if (p !== null) {
												p.return = m, Y = p;
												break;
											}
											Y = m;
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
								Y = o;
							}
						}
						if (o.subtreeFlags & 2064 && s !== null) s.return = o, Y = s;
						else b: for (; Y !== null;) {
							if (o = Y, o.flags & 2048) switch (o.tag) {
								case 0:
								case 11:
								case 15: yc(9, o, o.return);
							}
							var v = o.sibling;
							if (v !== null) {
								v.return = o.return, Y = v;
								break b;
							}
							Y = o.return;
						}
					}
					var y = e.current;
					for (Y = y; Y !== null;) {
						s = Y;
						var b = s.child;
						if (s.subtreeFlags & 2064 && b !== null) b.return = s, Y = b;
						else b: for (s = y; Y !== null;) {
							if (c = Y, c.flags & 2048) try {
								switch (c.tag) {
									case 0:
									case 11:
									case 15: bc(9, c);
								}
							} catch (e) {
								Q(c, c.return, e);
							}
							if (c === s) {
								Y = null;
								break b;
							}
							var x = c.sibling;
							if (x !== null) {
								x.return = c.return, Y = x;
								break b;
							}
							Y = c.return;
						}
					}
					if (X = a, ca(), Tt && typeof Tt.onPostCommitFiberRoot == "function") try {
						Tt.onPostCommitFiberRoot(wt, e);
					} catch {}
					i = !0;
				}
				return i;
			} finally {
				z = n, Uc.transition = t;
			}
		}
		return !1;
	}
	function zl(e, t, n) {
		t = Ts(n, t), t = ks(e, t, 1), e = io(e, t, 1), t = ml(), e !== null && (Bt(e, 1, t), _l(e, t));
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
					e = Ts(n, e), e = As(t, e, 1), t = io(t, e, 1), e = ml(), t !== null && (Bt(t, 1, e), _l(t, e));
					break;
				}
			}
			t = t.return;
		}
	}
	function Bl(e, t, n) {
		var r = e.pingCache;
		r !== null && r.delete(t), t = ml(), e.pingedLanes |= e.suspendedLanes & n, Wc === e && (Kc & n) === n && (Z === 4 || Z === 3 && (Kc & 130023424) === Kc && 500 > R() - tl ? Dl(e, 0) : Qc |= n), _l(e, t);
	}
	function Vl(e, t) {
		t === 0 && (e.mode & 1 ? (t = Mt, Mt <<= 1, !(Mt & 130023424) && (Mt = 4194304)) : t = 1);
		var n = ml();
		e = $a(e, t), e !== null && (Bt(e, t, n), _l(e, n));
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
		if (e !== null) if (e.memoizedProps !== t.pendingProps || Ji.current) Fs = !0;
		else {
			if ((e.lanes & n) === 0 && !(t.flags & 128)) return Fs = !1, ic(e, t, n);
			Fs = !!(e.flags & 131072);
		}
		else Fs = !1, G && t.flags & 1048576 && ya(t, fa, t.index);
		switch (t.lanes = 0, t.tag) {
			case 2:
				var i = t.type;
				nc(e, t), e = t.pendingProps;
				var a = Xi(t, qi.current);
				Ja(t, n), a = Mo(null, t, i, e, a, n);
				var o = No();
				return t.flags |= 1, typeof a == "object" && a && typeof a.render == "function" && a.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Zi(i) ? (o = !0, ta(t)) : o = !1, t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null, to(t), a.updater = bs, t.stateNode = a, a._reactInternals = t, ws(t, i, e, n), t = Ws(null, t, i, !0, o, n)) : (t.tag = 0, G && o && ba(t), Is(null, t, a, n), t = t.child), t;
			case 16:
				i = t.elementType;
				a: {
					switch (nc(e, t), e = t.pendingProps, a = i._init, i = a(i._payload), t.type = i, a = t.tag = Yl(i), e = vs(i, e), a) {
						case 0:
							t = Hs(null, t, i, e, n);
							break a;
						case 1:
							t = Us(null, t, i, e, n);
							break a;
						case 11:
							t = Ls(null, t, i, e, n);
							break a;
						case 14:
							t = Rs(null, t, i, vs(i.type, e), n);
							break a;
					}
					throw Error(r(306, i, ""));
				}
				return t;
			case 0: return i = t.type, a = t.pendingProps, a = t.elementType === i ? a : vs(i, a), Hs(e, t, i, a, n);
			case 1: return i = t.type, a = t.pendingProps, a = t.elementType === i ? a : vs(i, a), Us(e, t, i, a, n);
			case 3:
				a: {
					if (Gs(t), e === null) throw Error(r(387));
					i = t.pendingProps, o = t.memoizedState, a = o.element, no(e, t), so(t, i, null, n);
					var s = t.memoizedState;
					if (i = s.element, o.isDehydrated) if (o = {
						element: i,
						isDehydrated: !1,
						cache: s.cache,
						pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
						transitions: s.transitions
					}, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
						a = Ts(Error(r(423)), t), t = Ks(e, t, i, n, a);
						break a;
					} else if (i !== a) {
						a = Ts(Error(r(424)), t), t = Ks(e, t, i, n, a);
						break a;
					} else for (Ca = Ai(t.stateNode.containerInfo.firstChild), Sa = t, G = !0, wa = null, n = Ba(t, null, i, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling;
					else {
						if (Ma(), i === a) {
							t = rc(e, t, n);
							break a;
						}
						Is(e, t, i, n);
					}
					t = t.child;
				}
				return t;
			case 5: return _o(t), e === null && Oa(t), i = t.type, a = t.pendingProps, o = e === null ? null : e.memoizedProps, s = a.children, Ci(i, a) ? s = null : o !== null && Ci(i, o) && (t.flags |= 32), Vs(e, t), Is(e, t, s, n), t.child;
			case 6: return e === null && Oa(t), null;
			case 13: return Ys(e, t, n);
			case 4: return ho(t, t.stateNode.containerInfo), i = t.pendingProps, e === null ? t.child = za(t, null, i, n) : Is(e, t, i, n), t.child;
			case 11: return i = t.type, a = t.pendingProps, a = t.elementType === i ? a : vs(i, a), Ls(e, t, i, a, n);
			case 7: return Is(e, t, t.pendingProps, n), t.child;
			case 8: return Is(e, t, t.pendingProps.children, n), t.child;
			case 12: return Is(e, t, t.pendingProps.children, n), t.child;
			case 10:
				a: {
					if (i = t.type._context, a = t.pendingProps, o = t.memoizedProps, s = a.value, W(Va, i._currentValue), i._currentValue = s, o !== null) if (kr(o.value, s)) {
						if (o.children === a.children && !Ji.current) {
							t = rc(e, t, n);
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
					Is(e, t, a.children, n), t = t.child;
				}
				return t;
			case 9: return a = t.type, i = t.pendingProps.children, Ja(t, n), a = Ya(a), i = i(a), t.flags |= 1, Is(e, t, i, n), t.child;
			case 14: return i = t.type, a = vs(i, t.pendingProps), a = vs(i.type, a), Rs(e, t, i, a, n);
			case 15: return zs(e, t, t.type, t.pendingProps, n);
			case 17: return i = t.type, a = t.pendingProps, a = t.elementType === i ? a : vs(i, a), nc(e, t), t.tag = 1, Zi(i) ? (e = !0, ta(t)) : e = !1, Ja(t, n), Ss(t, i, a), ws(t, i, a, n), Ws(null, t, i, !0, e, n);
			case 19: return tc(e, t, n);
			case 22: return Bs(e, t, n);
		}
		throw Error(r(156, t.tag));
	};
	function Gl(e, t) {
		return mt(e, t);
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
		this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = zt(0), this.expirationTimes = zt(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = zt(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null;
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
			if (ct(e) !== e || e.tag !== 1) throw Error(r(170));
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
		return e = ru(n, r, !0, e, i, a, o, s, c), e.context = au(null), n = e.current, r = ml(), i = hl(n), a = ro(r, i), a.callback = t ?? null, io(n, a, i), e.current.lanes = i, Bt(e, i, r), _l(e, r), e;
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
			var t = qt();
			e = {
				blockedOn: null,
				target: e,
				priority: t
			};
			for (var n = 0; n < nn.length && t !== 0 && t < nn[n].priority; n++);
			nn.splice(n, 0, e), n === 0 && sn(e);
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
			return e._reactRootContainer = o, e[Fi] = o.current, li(e.nodeType === 8 ? e.parentNode : e), Tl(), o;
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
		return e._reactRootContainer = c, e[Fi] = c.current, li(e.nodeType === 8 ? e.parentNode : e), Tl(function() {
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
	Wt = function(e) {
		switch (e.tag) {
			case 3:
				var t = e.stateNode;
				if (t.current.memoizedState.isDehydrated) {
					var n = Nt(t.pendingLanes);
					n !== 0 && (Ht(t, n | 1), _l(t, R()), !(X & 6) && (nl = R() + 500, ca()));
				}
				break;
			case 13: Tl(function() {
				var t = $a(e, 1);
				t !== null && gl(t, e, 1, ml());
			}), uu(e, 1);
		}
	}, Gt = function(e) {
		if (e.tag === 13) {
			var t = $a(e, 134217728);
			t !== null && gl(t, e, 134217728, ml()), uu(e, 134217728);
		}
	}, Kt = function(e) {
		if (e.tag === 13) {
			var t = hl(e), n = $a(e, t);
			n !== null && gl(n, e, t, ml()), uu(e, t);
		}
	}, qt = function() {
		return z;
	}, Jt = function(e, t) {
		var n = z;
		try {
			return z = e, t();
		} finally {
			z = n;
		}
	}, Ve = function(e, t, n) {
		switch (t) {
			case "input":
				if (ye(e, n), t = n.name, n.type === "radio" && t != null) {
					for (n = e; n.parentNode;) n = n.parentNode;
					for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + "][type=\"radio\"]"), t = 0; t < n.length; t++) {
						var i = n[t];
						if (i !== e && i.form === e.form) {
							var a = Hi(i);
							if (!a) throw Error(r(90));
							me(i), ye(i, a);
						}
					}
				}
				break;
			case "textarea":
				Ee(e, n);
				break;
			case "select": t = n.value, t != null && Ce(e, !!n.multiple, t, !1);
		}
	}, qe = wl, Je = Tl;
	var bu = {
		usingClientEntryPoint: !1,
		Events: [
			Bi,
			Vi,
			Hi,
			Ge,
			Ke,
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
			return e = ft(e), e === null ? null : e.stateNode;
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
			wt = Cu.inject(Su), Tt = Cu;
		} catch {}
	}
	e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = bu, e.createPortal = function(e, t) {
		var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
		if (!hu(t)) throw Error(r(200));
		return iu(e, t, null, n);
	}, e.createRoot = function(e, t) {
		if (!hu(e)) throw Error(r(299));
		var n = !1, i = "", a = fu;
		return t != null && (!0 === t.unstable_strictMode && (n = !0), t.identifierPrefix !== void 0 && (i = t.identifierPrefix), t.onRecoverableError !== void 0 && (a = t.onRecoverableError)), t = ru(e, 1, !1, null, null, n, !1, i, a), e[Fi] = t.current, li(e.nodeType === 8 ? e.parentNode : e), new pu(t);
	}, e.findDOMNode = function(e) {
		if (e == null) return null;
		if (e.nodeType === 1) return e;
		var t = e._reactInternals;
		if (t === void 0) throw typeof e.render == "function" ? Error(r(188)) : (e = Object.keys(e).join(","), Error(r(268, e)));
		return e = ft(t), e = e === null ? null : e.stateNode, e;
	}, e.flushSync = function(e) {
		return Tl(e);
	}, e.hydrate = function(e, t, n) {
		if (!gu(t)) throw Error(r(200));
		return yu(null, e, t, !0, n);
	}, e.hydrateRoot = function(e, t, n) {
		if (!hu(e)) throw Error(r(405));
		var i = n != null && n.hydratedSources || null, a = !1, o = "", s = fu;
		if (n != null && (!0 === n.unstable_strictMode && (a = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = ou(t, null, e, 1, n ?? null, a, !1, o, s), e[Fi] = t.current, li(e), i) for (e = 0; e < i.length; e++) n = i[e], a = n._getVersion, a = a(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, a] : t.mutableSourceEagerHydrationData.push(n, a);
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
function I(e) {
	return e.type === F.argument;
}
function re(e) {
	return e.type === F.number;
}
function ie(e) {
	return e.type === F.date;
}
function ae(e) {
	return e.type === F.time;
}
function oe(e) {
	return e.type === F.select;
}
function se(e) {
	return e.type === F.plural;
}
function ce(e) {
	return e.type === F.pound;
}
function le(e) {
	return e.type === F.tag;
}
function ue(e) {
	return !!(e && typeof e == "object" && e.type === te.number);
}
function de(e) {
	return !!(e && typeof e == "object" && e.type === te.dateTime);
}
//#endregion
//#region node_modules/.pnpm/@formatjs+icu-messageformat-parser@2.9.4/node_modules/@formatjs/icu-messageformat-parser/lib/regex.generated.js
var fe = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, pe = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function me(e) {
	var t = {};
	return e.replace(pe, function(e) {
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
var he = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
//#endregion
//#region node_modules/.pnpm/@formatjs+icu-skeleton-parser@1.8.8/node_modules/@formatjs/icu-skeleton-parser/lib/number.js
function ge(e) {
	if (e.length === 0) throw Error("Number skeleton cannot be empty");
	for (var t = e.split(he).filter(function(e) {
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
function _e(e) {
	return e.replace(/^(.*?)-/, "");
}
var ve = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, ye = /^(@+)?(\+|#+)?[rs]?$/g, be = /(\*)(0+)|(#+)(0+)|(0+)/g, xe = /^(0+)$/;
function Se(e) {
	var t = {};
	return e[e.length - 1] === "r" ? t.roundingPriority = "morePrecision" : e[e.length - 1] === "s" && (t.roundingPriority = "lessPrecision"), e.replace(ye, function(e, n, r) {
		return typeof r == "string" ? r === "+" ? t.minimumSignificantDigits = n.length : n[0] === "#" ? t.maximumSignificantDigits = n.length : (t.minimumSignificantDigits = n.length, t.maximumSignificantDigits = n.length + (typeof r == "string" ? r.length : 0)) : (t.minimumSignificantDigits = n.length, t.maximumSignificantDigits = n.length), "";
	}), t;
}
function Ce(e) {
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
function we(e) {
	var t;
	if (e[0] === "E" && e[1] === "E" ? (t = { notation: "engineering" }, e = e.slice(2)) : e[0] === "E" && (t = { notation: "scientific" }, e = e.slice(1)), t) {
		var n = e.slice(0, 2);
		if (n === "+!" ? (t.signDisplay = "always", e = e.slice(2)) : n === "+?" && (t.signDisplay = "exceptZero", e = e.slice(2)), !xe.test(e)) throw Error("Malformed concise eng/scientific notation");
		t.minimumIntegerDigits = e.length;
	}
	return t;
}
function Te(e) {
	return Ce(e) || {};
}
function Ee(e) {
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
				t.style = "unit", t.unit = _e(i.options[0]);
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
					return v(v({}, e), Te(t));
				}, {}));
				continue;
			case "engineering":
				t = v(v(v({}, t), { notation: "engineering" }), i.options.reduce(function(e, t) {
					return v(v({}, e), Te(t));
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
				i.options[0].replace(be, function(e, n, r, i, a, o) {
					if (n) t.minimumIntegerDigits = r.length;
					else if (i && a) throw Error("We currently do not support maximum integer digits");
					else if (o) throw Error("We currently do not support exact integer digits");
					return "";
				});
				continue;
		}
		if (xe.test(i.stem)) {
			t.minimumIntegerDigits = i.stem.length;
			continue;
		}
		if (ve.test(i.stem)) {
			if (i.options.length > 1) throw RangeError("Fraction-precision stems only accept a single optional option");
			i.stem.replace(ve, function(e, n, r, i, a, o) {
				return r === "*" ? t.minimumFractionDigits = n.length : i && i[0] === "#" ? t.maximumFractionDigits = i.length : a && o ? (t.minimumFractionDigits = a.length, t.maximumFractionDigits = a.length + o.length) : (t.minimumFractionDigits = n.length, t.maximumFractionDigits = n.length), "";
			});
			var a = i.options[0];
			a === "w" ? t = v(v({}, t), { trailingZeroDisplay: "stripIfInteger" }) : a && (t = v(v({}, t), Se(a)));
			continue;
		}
		if (ye.test(i.stem)) {
			t = v(v({}, t), Se(i.stem));
			continue;
		}
		var o = Ce(i.stem);
		o && (t = v(v({}, t), o));
		var s = we(i.stem);
		s && (t = v(v({}, t), s));
	}
	return t;
}
//#endregion
//#region node_modules/.pnpm/@formatjs+icu-messageformat-parser@2.9.4/node_modules/@formatjs/icu-messageformat-parser/lib/time-data.generated.js
var De = {
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
function Oe(e, t) {
	for (var n = "", r = 0; r < e.length; r++) {
		var i = e.charAt(r);
		if (i === "j") {
			for (var a = 0; r + 1 < e.length && e.charAt(r + 1) === i;) a++, r++;
			var o = 1 + (a & 1), s = a < 2 ? 1 : 3 + (a >> 1), c = "a", l = ke(t);
			for ((l == "H" || l == "k") && (s = 0); s-- > 0;) n += c;
			for (; o-- > 0;) n = l + n;
		} else i === "J" ? n += "H" : n += i;
	}
	return n;
}
function ke(e) {
	var t = e.hourCycle;
	if (t === void 0 && e.hourCycles && e.hourCycles.length && (t = e.hourCycles[0]), t) switch (t) {
		case "h24": return "k";
		case "h23": return "H";
		case "h12": return "h";
		case "h11": return "K";
		default: throw Error("Invalid hourCycle");
	}
	var n = e.language, r;
	return n !== "root" && (r = e.maximize().region), (De[r || ""] || De[n || ""] || De[`${n}-001`] || De["001"])[0];
}
//#endregion
//#region node_modules/.pnpm/@formatjs+icu-messageformat-parser@2.9.4/node_modules/@formatjs/icu-messageformat-parser/lib/parser.js
var Ae = RegExp(`^${fe.source}*`), je = RegExp(`${fe.source}*\$`);
function L(e, t) {
	return {
		start: e,
		end: t
	};
}
var Me = !!String.prototype.startsWith && "_a".startsWith("a", 1), Ne = !!String.fromCodePoint, Pe = !!Object.fromEntries, Fe = !!String.prototype.codePointAt, Ie = !!String.prototype.trimStart, Le = !!String.prototype.trimEnd, Re = Number.isSafeInteger ? Number.isSafeInteger : function(e) {
	return typeof e == "number" && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991;
}, ze = !0;
try {
	ze = Ke("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu").exec("a")?.[0] === "a";
} catch {
	ze = !1;
}
var Be = Me ? function(e, t, n) {
	return e.startsWith(t, n);
} : function(e, t, n) {
	return e.slice(n, n + t.length) === t;
}, Ve = Ne ? String.fromCodePoint : function() {
	for (var e = [...arguments], t = "", n = e.length, r = 0, i; n > r;) {
		if (i = e[r++], i > 1114111) throw RangeError(i + " is not a valid code point");
		t += i < 65536 ? String.fromCharCode(i) : String.fromCharCode(((i -= 65536) >> 10) + 55296, i % 1024 + 56320);
	}
	return t;
}, He = Pe ? Object.fromEntries : function(e) {
	for (var t = {}, n = 0, r = e; n < r.length; n++) {
		var i = r[n], a = i[0];
		t[a] = i[1];
	}
	return t;
}, Ue = Fe ? function(e, t) {
	return e.codePointAt(t);
} : function(e, t) {
	var n = e.length;
	if (!(t < 0 || t >= n)) {
		var r = e.charCodeAt(t), i;
		return r < 55296 || r > 56319 || t + 1 === n || (i = e.charCodeAt(t + 1)) < 56320 || i > 57343 ? r : (r - 55296 << 10) + (i - 56320) + 65536;
	}
}, We = Ie ? function(e) {
	return e.trimStart();
} : function(e) {
	return e.replace(Ae, "");
}, Ge = Le ? function(e) {
	return e.trimEnd();
} : function(e) {
	return e.replace(je, "");
};
function Ke(e, t) {
	return new RegExp(e, t);
}
var qe;
if (ze) {
	var Je = Ke("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
	qe = function(e, t) {
		return Je.lastIndex = t, Je.exec(e)[1] ?? "";
	};
} else qe = function(e, t) {
	for (var n = [];;) {
		var r = Ue(e, t);
		if (r === void 0 || $e(r) || et(r)) break;
		n.push(r), t += r >= 65536 ? 2 : 1;
	}
	return Ve.apply(void 0, n);
};
var Ye = function() {
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
					location: L(o, this.clonePosition())
				});
			} else if (i === 60 && !this.ignoreTag && this.peek() === 47) {
				if (n) break;
				return this.error(P.UNMATCHED_CLOSING_TAG, L(this.clonePosition(), this.clonePosition()));
			} else if (i === 60 && !this.ignoreTag && Xe(this.peek() || 0)) {
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
				location: L(n, this.clonePosition())
			},
			err: null
		};
		if (this.bumpIf(">")) {
			var i = this.parseMessage(e + 1, t, !0);
			if (i.err) return i;
			var a = i.val, o = this.clonePosition();
			if (this.bumpIf("</")) {
				if (this.isEOF() || !Xe(this.char())) return this.error(P.INVALID_TAG, L(o, this.clonePosition()));
				var s = this.clonePosition();
				return r === this.parseTagName() ? (this.bumpSpace(), this.bumpIf(">") ? {
					val: {
						type: F.tag,
						value: r,
						children: a,
						location: L(n, this.clonePosition())
					},
					err: null
				} : this.error(P.INVALID_TAG, L(o, this.clonePosition()))) : this.error(P.UNMATCHED_CLOSING_TAG, L(s, this.clonePosition()));
			} else return this.error(P.UNCLOSED_TAG, L(n, this.clonePosition()));
		} else return this.error(P.INVALID_TAG, L(n, this.clonePosition()));
	}, e.prototype.parseTagName = function() {
		var e = this.offset();
		for (this.bump(); !this.isEOF() && Qe(this.char());) this.bump();
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
		var s = L(n, this.clonePosition());
		return {
			val: {
				type: F.literal,
				value: r,
				location: s
			},
			err: null
		};
	}, e.prototype.tryParseLeftAngleBracket = function() {
		return !this.isEOF() && this.char() === 60 && (this.ignoreTag || !Ze(this.peek() || 0)) ? (this.bump(), "<") : null;
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
		return Ve.apply(void 0, t);
	}, e.prototype.tryParseUnquoted = function(e, t) {
		if (this.isEOF()) return null;
		var n = this.char();
		return n === 60 || n === 123 || n === 35 && (t === "plural" || t === "selectordinal") || n === 125 && e > 0 ? null : (this.bump(), Ve(n));
	}, e.prototype.parseArgument = function(e, t) {
		var n = this.clonePosition();
		if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(P.EXPECT_ARGUMENT_CLOSING_BRACE, L(n, this.clonePosition()));
		if (this.char() === 125) return this.bump(), this.error(P.EMPTY_ARGUMENT, L(n, this.clonePosition()));
		var r = this.parseIdentifierIfPossible().value;
		if (!r) return this.error(P.MALFORMED_ARGUMENT, L(n, this.clonePosition()));
		if (this.bumpSpace(), this.isEOF()) return this.error(P.EXPECT_ARGUMENT_CLOSING_BRACE, L(n, this.clonePosition()));
		switch (this.char()) {
			case 125: return this.bump(), {
				val: {
					type: F.argument,
					value: r,
					location: L(n, this.clonePosition())
				},
				err: null
			};
			case 44: return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(P.EXPECT_ARGUMENT_CLOSING_BRACE, L(n, this.clonePosition())) : this.parseArgumentOptions(e, t, r, n);
			default: return this.error(P.MALFORMED_ARGUMENT, L(n, this.clonePosition()));
		}
	}, e.prototype.parseIdentifierIfPossible = function() {
		var e = this.clonePosition(), t = this.offset(), n = qe(this.message, t), r = t + n.length;
		return this.bumpTo(r), {
			value: n,
			location: L(e, this.clonePosition())
		};
	}, e.prototype.parseArgumentOptions = function(e, t, n, r) {
		var i = this.clonePosition(), a = this.parseIdentifierIfPossible().value, o = this.clonePosition();
		switch (a) {
			case "": return this.error(P.EXPECT_ARGUMENT_TYPE, L(i, o));
			case "number":
			case "date":
			case "time":
				this.bumpSpace();
				var s = null;
				if (this.bumpIf(",")) {
					this.bumpSpace();
					var c = this.clonePosition(), l = this.parseSimpleArgStyleIfPossible();
					if (l.err) return l;
					var u = Ge(l.val);
					if (u.length === 0) return this.error(P.EXPECT_ARGUMENT_STYLE, L(this.clonePosition(), this.clonePosition()));
					s = {
						style: u,
						styleLocation: L(c, this.clonePosition())
					};
				}
				var d = this.tryParseArgumentClose(r);
				if (d.err) return d;
				var f = L(r, this.clonePosition());
				if (s && Be(s?.style, "::", 0)) {
					var p = We(s.style.slice(2));
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
						this.locale && (m = Oe(p, this.locale));
						var u = {
							type: te.dateTime,
							pattern: m,
							location: s.styleLocation,
							parsedOptions: this.shouldParseSkeletons ? me(m) : {}
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
				if (this.bumpSpace(), !this.bumpIf(",")) return this.error(P.EXPECT_SELECT_ARGUMENT_OPTIONS, L(h, v({}, h)));
				this.bumpSpace();
				var g = this.parseIdentifierIfPossible(), _ = 0;
				if (a !== "select" && g.value === "offset") {
					if (!this.bumpIf(":")) return this.error(P.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, L(this.clonePosition(), this.clonePosition()));
					this.bumpSpace();
					var l = this.tryParseDecimalInteger(P.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, P.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
					if (l.err) return l;
					this.bumpSpace(), g = this.parseIdentifierIfPossible(), _ = l.val;
				}
				var y = this.tryParsePluralOrSelectOptions(e, a, t, g);
				if (y.err) return y;
				var d = this.tryParseArgumentClose(r);
				if (d.err) return d;
				var b = L(r, this.clonePosition());
				return a === "select" ? {
					val: {
						type: F.select,
						value: n,
						options: He(y.val),
						location: b
					},
					err: null
				} : {
					val: {
						type: F.plural,
						value: n,
						options: He(y.val),
						offset: _,
						pluralType: a === "plural" ? "cardinal" : "ordinal",
						location: b
					},
					err: null
				};
			default: return this.error(P.INVALID_ARGUMENT_TYPE, L(i, o));
		}
	}, e.prototype.tryParseArgumentClose = function(e) {
		return this.isEOF() || this.char() !== 125 ? this.error(P.EXPECT_ARGUMENT_CLOSING_BRACE, L(e, this.clonePosition())) : (this.bump(), {
			val: !0,
			err: null
		});
	}, e.prototype.parseSimpleArgStyleIfPossible = function() {
		for (var e = 0, t = this.clonePosition(); !this.isEOF();) switch (this.char()) {
			case 39:
				this.bump();
				var n = this.clonePosition();
				if (!this.bumpUntil("'")) return this.error(P.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, L(n, this.clonePosition()));
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
			n = ge(e);
		} catch {
			return this.error(P.INVALID_NUMBER_SKELETON, t);
		}
		return {
			val: {
				type: te.number,
				tokens: n,
				location: t,
				parsedOptions: this.shouldParseSkeletons ? Ee(n) : {}
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
					l = L(u, this.clonePosition()), c = this.message.slice(u.offset, this.offset());
				} else break;
			}
			if (s.has(c)) return this.error(t === "select" ? P.DUPLICATE_SELECT_ARGUMENT_SELECTOR : P.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, l);
			c === "other" && (a = !0), this.bumpSpace();
			var f = this.clonePosition();
			if (!this.bumpIf("{")) return this.error(t === "select" ? P.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : P.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, L(this.clonePosition(), this.clonePosition()));
			var p = this.parseMessage(e + 1, t, n);
			if (p.err) return p;
			var m = this.tryParseArgumentClose(f);
			if (m.err) return m;
			o.push([c, {
				value: p.val,
				location: L(f, this.clonePosition())
			}]), s.add(c), this.bumpSpace(), i = this.parseIdentifierIfPossible(), c = i.value, l = i.location;
		}
		return o.length === 0 ? this.error(t === "select" ? P.EXPECT_SELECT_ARGUMENT_SELECTOR : P.EXPECT_PLURAL_ARGUMENT_SELECTOR, L(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !a ? this.error(P.MISSING_OTHER_CLAUSE, L(this.clonePosition(), this.clonePosition())) : {
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
		var s = L(r, this.clonePosition());
		return i ? (a *= n, Re(a) ? {
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
		var t = Ue(this.message, e);
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
		if (Be(this.message, e, this.offset())) {
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
		for (; !this.isEOF() && $e(this.char());) this.bump();
	}, e.prototype.peek = function() {
		if (this.isEOF()) return null;
		var e = this.char(), t = this.offset();
		return this.message.charCodeAt(t + (e >= 65536 ? 2 : 1)) ?? null;
	}, e;
}();
function Xe(e) {
	return e >= 97 && e <= 122 || e >= 65 && e <= 90;
}
function Ze(e) {
	return Xe(e) || e === 47;
}
function Qe(e) {
	return e === 45 || e === 46 || e >= 48 && e <= 57 || e === 95 || e >= 97 && e <= 122 || e >= 65 && e <= 90 || e == 183 || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039;
}
function $e(e) {
	return e >= 9 && e <= 13 || e === 32 || e === 133 || e >= 8206 && e <= 8207 || e === 8232 || e === 8233;
}
function et(e) {
	return e >= 33 && e <= 35 || e === 36 || e >= 37 && e <= 39 || e === 40 || e === 41 || e === 42 || e === 43 || e === 44 || e === 45 || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || e === 91 || e === 92 || e === 93 || e === 94 || e === 96 || e === 123 || e === 124 || e === 125 || e === 126 || e === 161 || e >= 162 && e <= 165 || e === 166 || e === 167 || e === 169 || e === 171 || e === 172 || e === 174 || e === 176 || e === 177 || e === 182 || e === 187 || e === 191 || e === 215 || e === 247 || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || e === 8216 || e === 8217 || e === 8218 || e >= 8219 && e <= 8220 || e === 8221 || e === 8222 || e === 8223 || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || e === 8249 || e === 8250 || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || e === 8260 || e === 8261 || e === 8262 || e >= 8263 && e <= 8273 || e === 8274 || e === 8275 || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || e === 8608 || e >= 8609 && e <= 8610 || e === 8611 || e >= 8612 && e <= 8613 || e === 8614 || e >= 8615 && e <= 8621 || e === 8622 || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || e === 8658 || e === 8659 || e === 8660 || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || e === 8968 || e === 8969 || e === 8970 || e === 8971 || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || e === 9001 || e === 9002 || e >= 9003 && e <= 9083 || e === 9084 || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || e === 9655 || e >= 9656 && e <= 9664 || e === 9665 || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || e === 9839 || e >= 9840 && e <= 10087 || e === 10088 || e === 10089 || e === 10090 || e === 10091 || e === 10092 || e === 10093 || e === 10094 || e === 10095 || e === 10096 || e === 10097 || e === 10098 || e === 10099 || e === 10100 || e === 10101 || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || e === 10181 || e === 10182 || e >= 10183 && e <= 10213 || e === 10214 || e === 10215 || e === 10216 || e === 10217 || e === 10218 || e === 10219 || e === 10220 || e === 10221 || e === 10222 || e === 10223 || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || e === 10627 || e === 10628 || e === 10629 || e === 10630 || e === 10631 || e === 10632 || e === 10633 || e === 10634 || e === 10635 || e === 10636 || e === 10637 || e === 10638 || e === 10639 || e === 10640 || e === 10641 || e === 10642 || e === 10643 || e === 10644 || e === 10645 || e === 10646 || e === 10647 || e === 10648 || e >= 10649 && e <= 10711 || e === 10712 || e === 10713 || e === 10714 || e === 10715 || e >= 10716 && e <= 10747 || e === 10748 || e === 10749 || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || e === 11158 || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || e === 11778 || e === 11779 || e === 11780 || e === 11781 || e >= 11782 && e <= 11784 || e === 11785 || e === 11786 || e === 11787 || e === 11788 || e === 11789 || e >= 11790 && e <= 11798 || e === 11799 || e >= 11800 && e <= 11801 || e === 11802 || e === 11803 || e === 11804 || e === 11805 || e >= 11806 && e <= 11807 || e === 11808 || e === 11809 || e === 11810 || e === 11811 || e === 11812 || e === 11813 || e === 11814 || e === 11815 || e === 11816 || e === 11817 || e >= 11818 && e <= 11822 || e === 11823 || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || e === 11840 || e === 11841 || e === 11842 || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || e === 11858 || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || e === 12296 || e === 12297 || e === 12298 || e === 12299 || e === 12300 || e === 12301 || e === 12302 || e === 12303 || e === 12304 || e === 12305 || e >= 12306 && e <= 12307 || e === 12308 || e === 12309 || e === 12310 || e === 12311 || e === 12312 || e === 12313 || e === 12314 || e === 12315 || e === 12316 || e === 12317 || e >= 12318 && e <= 12319 || e === 12320 || e === 12336 || e === 64830 || e === 64831 || e >= 65093 && e <= 65094;
}
//#endregion
//#region node_modules/.pnpm/@formatjs+icu-messageformat-parser@2.9.4/node_modules/@formatjs/icu-messageformat-parser/lib/index.js
function tt(e) {
	e.forEach(function(e) {
		if (delete e.location, oe(e) || se(e)) for (var t in e.options) delete e.options[t].location, tt(e.options[t].value);
		else re(e) && ue(e.style) || (ie(e) || ae(e)) && de(e.style) ? delete e.style.location : le(e) && tt(e.children);
	});
}
function nt(e, t) {
	t === void 0 && (t = {}), t = v({
		shouldParseSkeletons: !0,
		requiresOtherClause: !0
	}, t);
	var n = new Ye(e, t).parse();
	if (n.err) {
		var r = SyntaxError(P[n.err.kind]);
		throw r.location = n.err.location, r.originalMessage = n.err.message, r;
	}
	return t?.captureLocation || tt(n.val), n.val;
}
//#endregion
//#region node_modules/.pnpm/intl-messageformat@10.7.7/node_modules/intl-messageformat/lib/src/error.js
var rt;
(function(e) {
	e.MISSING_VALUE = "MISSING_VALUE", e.INVALID_VALUE = "INVALID_VALUE", e.MISSING_INTL_API = "MISSING_INTL_API";
})(rt ||= {});
var it = function(e) {
	_(t, e);
	function t(t, n, r) {
		var i = e.call(this, t) || this;
		return i.code = n, i.originalMessage = r, i;
	}
	return t.prototype.toString = function() {
		return `[formatjs Error: ${this.code}] ${this.message}`;
	}, t;
}(Error), at = function(e) {
	_(t, e);
	function t(t, n, r, i) {
		return e.call(this, `Invalid values for "${t}": "${n}". Options are "${Object.keys(r).join("\", \"")}"`, rt.INVALID_VALUE, i) || this;
	}
	return t;
}(it), ot = function(e) {
	_(t, e);
	function t(t, n, r) {
		return e.call(this, `Value for "${t}" must be of type ${n}`, rt.INVALID_VALUE, r) || this;
	}
	return t;
}(it), st = function(e) {
	_(t, e);
	function t(t, n) {
		return e.call(this, `The intl string context variable "${t}" was not provided to the string "${n}"`, rt.MISSING_VALUE, n) || this;
	}
	return t;
}(it), ct;
(function(e) {
	e[e.literal = 0] = "literal", e[e.object = 1] = "object";
})(ct ||= {});
function lt(e) {
	return e.length < 2 ? e : e.reduce(function(e, t) {
		var n = e[e.length - 1];
		return !n || n.type !== ct.literal || t.type !== ct.literal ? e.push(t) : n.value += t.value, e;
	}, []);
}
function ut(e) {
	return typeof e == "function";
}
function dt(e, t, n, r, i, a, o) {
	if (e.length === 1 && ne(e[0])) return [{
		type: ct.literal,
		value: e[0].value
	}];
	for (var s = [], c = 0, l = e; c < l.length; c++) {
		var u = l[c];
		if (ne(u)) {
			s.push({
				type: ct.literal,
				value: u.value
			});
			continue;
		}
		if (ce(u)) {
			typeof a == "number" && s.push({
				type: ct.literal,
				value: n.getNumberFormat(t).format(a)
			});
			continue;
		}
		var d = u.value;
		if (!(i && d in i)) throw new st(d, o);
		var f = i[d];
		if (I(u)) {
			(!f || typeof f == "string" || typeof f == "number") && (f = typeof f == "string" || typeof f == "number" ? String(f) : ""), s.push({
				type: typeof f == "string" ? ct.literal : ct.object,
				value: f
			});
			continue;
		}
		if (ie(u)) {
			var p = typeof u.style == "string" ? r.date[u.style] : de(u.style) ? u.style.parsedOptions : void 0;
			s.push({
				type: ct.literal,
				value: n.getDateTimeFormat(t, p).format(f)
			});
			continue;
		}
		if (ae(u)) {
			var p = typeof u.style == "string" ? r.time[u.style] : de(u.style) ? u.style.parsedOptions : r.time.medium;
			s.push({
				type: ct.literal,
				value: n.getDateTimeFormat(t, p).format(f)
			});
			continue;
		}
		if (re(u)) {
			var p = typeof u.style == "string" ? r.number[u.style] : ue(u.style) ? u.style.parsedOptions : void 0;
			p && p.scale && (f *= p.scale || 1), s.push({
				type: ct.literal,
				value: n.getNumberFormat(t, p).format(f)
			});
			continue;
		}
		if (le(u)) {
			var m = u.children, h = u.value, g = i[h];
			if (!ut(g)) throw new ot(h, "function", o);
			var _ = g(dt(m, t, n, r, i, a).map(function(e) {
				return e.value;
			}));
			Array.isArray(_) || (_ = [_]), s.push.apply(s, _.map(function(e) {
				return {
					type: typeof e == "string" ? ct.literal : ct.object,
					value: e
				};
			}));
		}
		if (oe(u)) {
			var v = u.options[f] || u.options.other;
			if (!v) throw new at(u.value, f, Object.keys(u.options), o);
			s.push.apply(s, dt(v.value, t, n, r, i));
			continue;
		}
		if (se(u)) {
			var v = u.options[`=${f}`];
			if (!v) {
				if (!Intl.PluralRules) throw new it("Intl.PluralRules is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-pluralrules\"\n", rt.MISSING_INTL_API, o);
				var y = n.getPluralRules(t, { type: u.pluralType }).select(f - (u.offset || 0));
				v = u.options[y] || u.options.other;
			}
			if (!v) throw new at(u.value, f, Object.keys(u.options), o);
			s.push.apply(s, dt(v.value, t, n, r, i, f - (u.offset || 0)));
			continue;
		}
	}
	return lt(s);
}
//#endregion
//#region node_modules/.pnpm/intl-messageformat@10.7.7/node_modules/intl-messageformat/lib/src/core.js
function ft(e, t) {
	return t ? v(v(v({}, e || {}), t || {}), Object.keys(e).reduce(function(n, r) {
		return n[r] = v(v({}, e[r]), t[r] || {}), n;
	}, {})) : e;
}
function pt(e, t) {
	return t ? Object.keys(e).reduce(function(n, r) {
		return n[r] = ft(e[r], t[r]), n;
	}, v({}, e)) : e;
}
function mt(e) {
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
function ht(e) {
	return e === void 0 && (e = {
		number: {},
		dateTime: {},
		pluralRules: {}
	}), {
		getNumberFormat: S(function() {
			for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
			return new ((e = Intl.NumberFormat).bind.apply(e, x([void 0], t, !1)))();
		}, {
			cache: mt(e.number),
			strategy: M.variadic
		}),
		getDateTimeFormat: S(function() {
			for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
			return new ((e = Intl.DateTimeFormat).bind.apply(e, x([void 0], t, !1)))();
		}, {
			cache: mt(e.dateTime),
			strategy: M.variadic
		}),
		getPluralRules: S(function() {
			for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
			return new ((e = Intl.PluralRules).bind.apply(e, x([void 0], t, !1)))();
		}, {
			cache: mt(e.pluralRules),
			strategy: M.variadic
		})
	};
}
var gt = function() {
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
				return !e.length || t.type !== ct.literal || typeof e[e.length - 1] != "string" ? e.push(t.value) : e[e.length - 1] += t.value, e;
			}, []);
			return n.length <= 1 ? n[0] || "" : n;
		}, this.formatToParts = function(e) {
			return dt(a.ast, a.locales, a.formatters, a.formats, e, void 0, a.message);
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
		this.formats = pt(e.formats, r), this.formatters = i && i.formatters || ht(this.formatterCache);
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
	}, e.__parse = nt, e.formats = {
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
}(), _t;
(function(e) {
	e.FORMAT_ERROR = "FORMAT_ERROR", e.UNSUPPORTED_FORMATTER = "UNSUPPORTED_FORMATTER", e.INVALID_CONFIG = "INVALID_CONFIG", e.MISSING_DATA = "MISSING_DATA", e.MISSING_TRANSLATION = "MISSING_TRANSLATION";
})(_t ||= {});
var R = function(e) {
	_(t, e);
	function t(n, r, i) {
		var a = this, o = i ? i instanceof Error ? i : Error(String(i)) : void 0;
		return a = e.call(this, `[@formatjs/intl Error ${n}] ${r}
${o ? `
${o.message}
${o.stack}` : ""}`) || this, a.code = n, typeof Error.captureStackTrace == "function" && Error.captureStackTrace(a, t), a;
	}
	return t;
}(Error), vt = function(e) {
	_(t, e);
	function t(t, n) {
		return e.call(this, _t.UNSUPPORTED_FORMATTER, t, n) || this;
	}
	return t;
}(R), yt = function(e) {
	_(t, e);
	function t(t, n) {
		return e.call(this, _t.INVALID_CONFIG, t, n) || this;
	}
	return t;
}(R), bt = function(e) {
	_(t, e);
	function t(t, n) {
		return e.call(this, _t.MISSING_DATA, t, n) || this;
	}
	return t;
}(R), xt = function(e) {
	_(t, e);
	function t(t, n, r) {
		var i = e.call(this, _t.FORMAT_ERROR, `${t}
Locale: ${n}
`, r) || this;
		return i.locale = n, i;
	}
	return t;
}(R), St = function(e) {
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
}(xt), Ct = function(e) {
	_(t, e);
	function t(t, n) {
		var r = e.call(this, _t.MISSING_TRANSLATION, `Missing message: "${t.id}" for locale "${n}", using ${t.defaultMessage ? `default message (${typeof t.defaultMessage == "string" ? t.defaultMessage : t.defaultMessage.map(function(e) {
			return e.value ?? JSON.stringify(e);
		}).join()})` : "id"} as fallback.`) || this;
		return r.descriptor = t, r;
	}
	return t;
}(R);
//#endregion
//#region node_modules/.pnpm/@formatjs+intl@2.10.15_typescript@5.9.3/node_modules/@formatjs/intl/lib/src/utils.js
function wt(e, t, n) {
	return n === void 0 && (n = {}), t.reduce(function(t, r) {
		return r in e ? t[r] = e[r] : r in n && (t[r] = n[r]), t;
	}, {});
}
var Tt = {
	formats: {},
	messages: {},
	timeZone: void 0,
	defaultLocale: "en",
	defaultFormats: {},
	fallbackOnEmptyString: !0,
	onError: function(e) {},
	onWarn: function(e) {}
};
function Et() {
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
function Dt(e) {
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
function Ot(e) {
	e === void 0 && (e = Et());
	var t = Intl.RelativeTimeFormat, n = Intl.ListFormat, r = Intl.DisplayNames, i = S(function() {
		for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
		return new ((e = Intl.DateTimeFormat).bind.apply(e, x([void 0], t, !1)))();
	}, {
		cache: Dt(e.dateTime),
		strategy: M.variadic
	}), a = S(function() {
		for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
		return new ((e = Intl.NumberFormat).bind.apply(e, x([void 0], t, !1)))();
	}, {
		cache: Dt(e.number),
		strategy: M.variadic
	}), o = S(function() {
		for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
		return new ((e = Intl.PluralRules).bind.apply(e, x([void 0], t, !1)))();
	}, {
		cache: Dt(e.pluralRules),
		strategy: M.variadic
	});
	return {
		getDateTimeFormat: i,
		getNumberFormat: a,
		getMessageFormat: S(function(e, t, n, r) {
			return new gt(e, t, n, v({ formatters: {
				getNumberFormat: a,
				getDateTimeFormat: i,
				getPluralRules: o
			} }, r || {}));
		}, {
			cache: Dt(e.message),
			strategy: M.variadic
		}),
		getRelativeTimeFormat: S(function() {
			var e = [...arguments];
			return new (t.bind.apply(t, x([void 0], e, !1)))();
		}, {
			cache: Dt(e.relativeTime),
			strategy: M.variadic
		}),
		getPluralRules: o,
		getListFormat: S(function() {
			var e = [...arguments];
			return new (n.bind.apply(n, x([void 0], e, !1)))();
		}, {
			cache: Dt(e.list),
			strategy: M.variadic
		}),
		getDisplayNames: S(function() {
			var e = [...arguments];
			return new (r.bind.apply(r, x([void 0], e, !1)))();
		}, {
			cache: Dt(e.displayNames),
			strategy: M.variadic
		})
	};
}
function kt(e, t, n, r) {
	var i = e && e[t], a;
	if (i && (a = i[n]), a) return a;
	r(new vt(`No ${t} format named: ${n}`));
}
//#endregion
//#region node_modules/.pnpm/@formatjs+intl@2.10.15_typescript@5.9.3/node_modules/@formatjs/intl/lib/src/message.js
function At(e, t) {
	return Object.keys(e).reduce(function(n, r) {
		return n[r] = v({ timeZone: t }, e[r]), n;
	}, {});
}
function jt(e, t) {
	return Object.keys(v(v({}, e), t)).reduce(function(n, r) {
		return n[r] = v(v({}, e[r] || {}), t[r] || {}), n;
	}, {});
}
function Mt(e, t) {
	if (!t) return e;
	var n = gt.formats;
	return v(v(v({}, n), e), {
		date: jt(At(n.date, t), At(e.date || {}, t)),
		time: jt(At(n.time, t), At(e.time || {}, t))
	});
}
var Nt = function(e, t, n, r, i) {
	var a = e.locale, o = e.formats, s = e.messages, c = e.defaultLocale, l = e.defaultFormats, u = e.fallbackOnEmptyString, d = e.onError, f = e.timeZone, p = e.defaultRichTextElements;
	n === void 0 && (n = { id: "" });
	var m = n.id, h = n.defaultMessage;
	N(!!m, "[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue");
	var g = String(m), _ = s && Object.prototype.hasOwnProperty.call(s, g) && s[g];
	if (Array.isArray(_) && _.length === 1 && _[0].type === F.literal) return _[0].value;
	if (!r && _ && typeof _ == "string" && !p) return _.replace(/'\{(.*?)\}'/gi, "{$1}");
	if (r = v(v({}, p), r || {}), o = Mt(o, f), l = Mt(l, f), !_) {
		if (u === !1 && _ === "") return _;
		if ((!h || a && a.toLowerCase() !== c.toLowerCase()) && d(new Ct(n, a)), h) try {
			var y = t.getMessageFormat(h, c, l, i);
			return y.format(r);
		} catch (e) {
			return d(new St(`Error formatting default message for: "${g}", rendering default message verbatim`, a, n, e)), typeof h == "string" ? h : g;
		}
		return g;
	}
	try {
		var y = t.getMessageFormat(_, a, o, v({ formatters: t }, i || {}));
		return y.format(r);
	} catch (e) {
		d(new St(`Error formatting message: "${g}", using ${h ? "default message" : "id"} as fallback.`, a, n, e));
	}
	if (h) try {
		var y = t.getMessageFormat(h, c, l, i);
		return y.format(r);
	} catch (e) {
		d(new St(`Error formatting the default message for: "${g}", rendering message verbatim`, a, n, e));
	}
	return typeof _ == "string" ? _ : typeof h == "string" ? h : g;
}, Pt = [
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
function Ft(e, t, n, r) {
	var i = e.locale, a = e.formats, o = e.onError, s = e.timeZone;
	r === void 0 && (r = {});
	var c = r.format, l = v(v({}, s && { timeZone: s }), c && kt(a, t, c, o)), u = wt(r, Pt, l);
	return t === "time" && !u.hour && !u.minute && !u.second && !u.timeStyle && !u.dateStyle && (u = v(v({}, u), {
		hour: "numeric",
		minute: "numeric"
	})), n(i, u);
}
function It(e, t) {
	var n = [...arguments].slice(2), r = n[0], i = n[1], a = i === void 0 ? {} : i, o = typeof r == "string" ? new Date(r || 0) : r;
	try {
		return Ft(e, "date", t, a).format(o);
	} catch (t) {
		e.onError(new xt("Error formatting date.", e.locale, t));
	}
	return String(o);
}
function Lt(e, t) {
	var n = [...arguments].slice(2), r = n[0], i = n[1], a = i === void 0 ? {} : i, o = typeof r == "string" ? new Date(r || 0) : r;
	try {
		return Ft(e, "time", t, a).format(o);
	} catch (t) {
		e.onError(new xt("Error formatting time.", e.locale, t));
	}
	return String(o);
}
function Rt(e, t) {
	var n = [...arguments].slice(2), r = n[0], i = n[1], a = n[2], o = a === void 0 ? {} : a, s = e.timeZone, c = e.locale, l = e.onError, u = wt(o, Pt, s ? { timeZone: s } : {});
	try {
		return t(c, u).formatRange(r, i);
	} catch (t) {
		l(new xt("Error formatting date time range.", e.locale, t));
	}
	return String(r);
}
function zt(e, t) {
	var n = [...arguments].slice(2), r = n[0], i = n[1], a = i === void 0 ? {} : i, o = typeof r == "string" ? new Date(r || 0) : r;
	try {
		return Ft(e, "date", t, a).formatToParts(o);
	} catch (t) {
		e.onError(new xt("Error formatting date.", e.locale, t));
	}
	return [];
}
function Bt(e, t) {
	var n = [...arguments].slice(2), r = n[0], i = n[1], a = i === void 0 ? {} : i, o = typeof r == "string" ? new Date(r || 0) : r;
	try {
		return Ft(e, "time", t, a).formatToParts(o);
	} catch (t) {
		e.onError(new xt("Error formatting time.", e.locale, t));
	}
	return [];
}
//#endregion
//#region node_modules/.pnpm/@formatjs+intl@2.10.15_typescript@5.9.3/node_modules/@formatjs/intl/lib/src/displayName.js
var Vt = [
	"style",
	"type",
	"fallback",
	"languageDisplay"
];
function Ht(e, t, n, r) {
	var i = e.locale, a = e.onError;
	Intl.DisplayNames || a(new it("Intl.DisplayNames is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-displaynames\"\n", rt.MISSING_INTL_API));
	var o = wt(r, Vt);
	try {
		return t(i, o).of(n);
	} catch (e) {
		a(new xt("Error formatting display name.", i, e));
	}
}
//#endregion
//#region node_modules/.pnpm/@formatjs+intl@2.10.15_typescript@5.9.3/node_modules/@formatjs/intl/lib/src/list.js
var z = ["type", "style"], Ut = Date.now();
function Wt(e) {
	return `${Ut}_${e}_${Ut}`;
}
function Gt(e, t, n, r) {
	r === void 0 && (r = {});
	var i = Kt(e, t, n, r).reduce(function(e, t) {
		var n = t.value;
		return typeof n == "string" && typeof e[e.length - 1] == "string" ? e[e.length - 1] += n : e.push(n), e;
	}, []);
	return i.length === 1 ? i[0] : i.length === 0 ? "" : i;
}
function Kt(e, t, n, r) {
	var i = e.locale, a = e.onError;
	r === void 0 && (r = {}), Intl.ListFormat || a(new it("Intl.ListFormat is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-listformat\"\n", rt.MISSING_INTL_API));
	var o = wt(r, z);
	try {
		var s = {}, c = n.map(function(e, t) {
			if (typeof e == "object") {
				var n = Wt(t);
				return s[n] = e, n;
			}
			return String(e);
		});
		return t(i, o).formatToParts(c).map(function(e) {
			return e.type === "literal" ? e : v(v({}, e), { value: s[e.value] || e.value });
		});
	} catch (e) {
		a(new xt("Error formatting list.", i, e));
	}
	return n;
}
//#endregion
//#region node_modules/.pnpm/@formatjs+intl@2.10.15_typescript@5.9.3/node_modules/@formatjs/intl/lib/src/plural.js
var qt = ["type"];
function Jt(e, t, n, r) {
	var i = e.locale, a = e.onError;
	r === void 0 && (r = {}), Intl.PluralRules || a(new it("Intl.PluralRules is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-pluralrules\"\n", rt.MISSING_INTL_API));
	var o = wt(r, qt);
	try {
		return t(i, o).select(n);
	} catch (e) {
		a(new xt("Error formatting plural.", i, e));
	}
	return "other";
}
//#endregion
//#region node_modules/.pnpm/@formatjs+intl@2.10.15_typescript@5.9.3/node_modules/@formatjs/intl/lib/src/relativeTime.js
var Yt = ["numeric", "style"];
function Xt(e, t, n) {
	var r = e.locale, i = e.formats, a = e.onError;
	n === void 0 && (n = {});
	var o = n.format, s = !!o && kt(i, "relative", o, a) || {};
	return t(r, wt(n, Yt, s));
}
function Zt(e, t, n, r, i) {
	i === void 0 && (i = {}), r ||= "second", Intl.RelativeTimeFormat || e.onError(new it("Intl.RelativeTimeFormat is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-relativetimeformat\"\n", rt.MISSING_INTL_API));
	try {
		return Xt(e, t, i).format(n, r);
	} catch (t) {
		e.onError(new xt("Error formatting relative time.", e.locale, t));
	}
	return String(n);
}
//#endregion
//#region node_modules/.pnpm/@formatjs+intl@2.10.15_typescript@5.9.3/node_modules/@formatjs/intl/lib/src/number.js
var Qt = [
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
function $t(e, t, n) {
	var r = e.locale, i = e.formats, a = e.onError;
	n === void 0 && (n = {});
	var o = n.format, s = o && kt(i, "number", o, a) || {};
	return t(r, wt(n, Qt, s));
}
function en(e, t, n, r) {
	r === void 0 && (r = {});
	try {
		return $t(e, t, r).format(n);
	} catch (t) {
		e.onError(new xt("Error formatting number.", e.locale, t));
	}
	return String(n);
}
function tn(e, t, n, r) {
	r === void 0 && (r = {});
	try {
		return $t(e, t, r).formatToParts(n);
	} catch (t) {
		e.onError(new xt("Error formatting number.", e.locale, t));
	}
	return [];
}
//#endregion
//#region node_modules/.pnpm/@formatjs+intl@2.10.15_typescript@5.9.3/node_modules/@formatjs/intl/lib/src/create-intl.js
function nn(e) {
	return typeof (e ? e[Object.keys(e)[0]] : void 0) == "string";
}
function rn(e) {
	e.onWarn && e.defaultRichTextElements && nn(e.messages || {}) && e.onWarn("[@formatjs/intl] \"defaultRichTextElements\" was specified but \"message\" was not pre-compiled. \nPlease consider using \"@formatjs/cli\" to pre-compile your messages for performance.\nFor more details see https://formatjs.io/docs/getting-started/message-distribution");
}
function an(e, t) {
	var n = Ot(t), r = v(v({}, Tt), e), i = r.locale, a = r.defaultLocale, o = r.onError;
	return i ? !Intl.NumberFormat.supportedLocalesOf(i).length && o ? o(new bt(`Missing locale data for locale: "${i}" in Intl.NumberFormat. Using default locale: "${a}" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details`)) : !Intl.DateTimeFormat.supportedLocalesOf(i).length && o && o(new bt(`Missing locale data for locale: "${i}" in Intl.DateTimeFormat. Using default locale: "${a}" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details`)) : (o && o(new yt(`"locale" was not configured, using "${a}" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details`)), r.locale = r.defaultLocale || "en"), rn(r), v(v({}, r), {
		formatters: n,
		formatNumber: en.bind(null, r, n.getNumberFormat),
		formatNumberToParts: tn.bind(null, r, n.getNumberFormat),
		formatRelativeTime: Zt.bind(null, r, n.getRelativeTimeFormat),
		formatDate: It.bind(null, r, n.getDateTimeFormat),
		formatDateToParts: zt.bind(null, r, n.getDateTimeFormat),
		formatTime: Lt.bind(null, r, n.getDateTimeFormat),
		formatDateTimeRange: Rt.bind(null, r, n.getDateTimeFormat),
		formatTimeToParts: Bt.bind(null, r, n.getDateTimeFormat),
		formatPlural: Jt.bind(null, r, n.getPluralRules),
		formatMessage: Nt.bind(null, r, n),
		$t: Nt.bind(null, r, n),
		formatList: Gt.bind(null, r, n.getListFormat),
		formatListToParts: Kt.bind(null, r, n.getListFormat),
		formatDisplayName: Ht.bind(null, r, n.getDisplayNames)
	});
}
//#endregion
//#region node_modules/.pnpm/react-intl@6.8.9_react@18.3.1_typescript@5.9.3/node_modules/react-intl/lib/src/utils.js
var B = /* @__PURE__ */ c(u());
function on(e) {
	N(e, "[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.");
}
var sn = v(v({}, Tt), { textComponent: B.Fragment });
function cn(e) {
	return function(t) {
		return e(B.Children.toArray(t));
	};
}
function ln(e, t) {
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
var un = /* @__PURE__ */ o(((e) => {
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
})), dn = /* @__PURE__ */ o(((e, t) => {
	t.exports = un();
})), fn = /* @__PURE__ */ o(((e, t) => {
	var n = dn(), r = {
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
fn();
var pn = typeof window < "u" && !window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__ ? window.__REACT_INTL_CONTEXT__ || (window.__REACT_INTL_CONTEXT__ = B.createContext(null)) : B.createContext(null);
pn.Consumer;
var mn = pn.Provider, hn = pn;
//#endregion
//#region node_modules/.pnpm/react-intl@6.8.9_react@18.3.1_typescript@5.9.3/node_modules/react-intl/lib/src/components/useIntl.js
function gn() {
	var e = B.useContext(hn);
	return on(e), e;
}
//#endregion
//#region node_modules/.pnpm/react-intl@6.8.9_react@18.3.1_typescript@5.9.3/node_modules/react-intl/lib/src/components/createFormattedComponent.js
var _n;
(function(e) {
	e.formatDate = "FormattedDate", e.formatTime = "FormattedTime", e.formatNumber = "FormattedNumber", e.formatList = "FormattedList", e.formatDisplayName = "FormattedDisplayName";
})(_n ||= {});
var vn;
(function(e) {
	e.formatDate = "FormattedDateParts", e.formatTime = "FormattedTimeParts", e.formatNumber = "FormattedNumberParts", e.formatList = "FormattedListParts";
})(vn ||= {});
var yn = function(e) {
	var t = gn(), n = e.value, r = e.children, i = y(e, ["value", "children"]);
	return r(t.formatNumberToParts(n, i));
};
yn.displayName = "FormattedNumberParts", yn.displayName = "FormattedNumberParts";
function bn(e) {
	var t = function(t) {
		var n = gn(), r = t.value, i = t.children, a = y(t, ["value", "children"]), o = typeof r == "string" ? new Date(r || 0) : r;
		return i(e === "formatDate" ? n.formatDateToParts(o, a) : n.formatTimeToParts(o, a));
	};
	return t.displayName = vn[e], t;
}
function xn(e) {
	var t = function(t) {
		var n = gn(), r = t.value, i = t.children, a = y(t, ["value", "children"]), o = n[e](r, a);
		if (typeof i == "function") return i(o);
		var s = n.textComponent || B.Fragment;
		return B.createElement(s, null, o);
	};
	return t.displayName = _n[e], t;
}
//#endregion
//#region node_modules/.pnpm/react-intl@6.8.9_react@18.3.1_typescript@5.9.3/node_modules/react-intl/lib/src/components/createIntl.js
function Sn(e) {
	return e && Object.keys(e).reduce(function(t, n) {
		var r = e[n];
		return t[n] = ut(r) ? cn(r) : r, t;
	}, {});
}
var Cn = function(e, t, n, r) {
	var i = [...arguments].slice(4), a = Sn(r), o = Nt.apply(void 0, x([
		e,
		t,
		n,
		a
	], i, !1));
	return Array.isArray(o) ? B.Children.toArray(o) : o;
}, wn = function(e, t) {
	var n = e.defaultRichTextElements, r = y(e, ["defaultRichTextElements"]), i = Sn(n), a = an(v(v(v({}, sn), r), { defaultRichTextElements: i }), t), o = {
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
		formatMessage: Cn.bind(null, o, a.formatters),
		$t: Cn.bind(null, o, a.formatters)
	});
};
//#endregion
//#region node_modules/.pnpm/react-intl@6.8.9_react@18.3.1_typescript@5.9.3/node_modules/react-intl/lib/src/components/provider.js
function Tn(e) {
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
var En = function(e) {
	_(t, e);
	function t() {
		var t = e !== null && e.apply(this, arguments) || this;
		return t.cache = Et(), t.state = {
			cache: t.cache,
			intl: wn(Tn(t.props), t.cache),
			prevConfig: Tn(t.props)
		}, t;
	}
	return t.getDerivedStateFromProps = function(e, t) {
		var n = t.prevConfig, r = t.cache, i = Tn(e);
		return ln(n, i) ? null : {
			intl: wn(i, r),
			prevConfig: i
		};
	}, t.prototype.render = function() {
		return on(this.state.intl), B.createElement(mn, { value: this.state.intl }, this.props.children);
	}, t.displayName = "IntlProvider", t.defaultProps = sn, t;
}(B.PureComponent);
//#endregion
//#region node_modules/.pnpm/react-intl@6.8.9_react@18.3.1_typescript@5.9.3/node_modules/react-intl/lib/index.js
function Dn(e) {
	return e;
}
xn("formatDate"), xn("formatTime"), xn("formatNumber"), xn("formatList"), xn("formatDisplayName"), bn("formatDate"), bn("formatTime");
//#endregion
//#region node_modules/.pnpm/react@18.3.1/node_modules/react/cjs/react-jsx-runtime.production.min.js
var On = /* @__PURE__ */ o(((e) => {
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
})), kn = /* @__PURE__ */ o(((e, t) => {
	t.exports = On();
})), An = h(), jn = kn(), Mn = (0, B.createContext)({
	runtime: {
		handlerUrl() {
			return "";
		},
		notify() {}
	},
	element: document.createElement("div")
}), Nn = (e, t) => {
	if (t != null && !(typeof t != "object" && typeof t != "function")) {
		for (let n of Object.getOwnPropertyNames(t)) if (n.startsWith("_jsrt")) {
			let r = n;
			e[r] = t[r];
		}
	}
}, Pn = (e) => {
	let t = e && "jquery" in e ? e[0] : e;
	if (!t || !(t instanceof Element)) throw console.error("Invalid DOM element provided to renderBlock:", e), Error("Invalid DOM Element. See previously logged details.");
	return Nn(t, e), t;
}, Fn = async (e) => {
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
}, In = !0, Ln = ({ runtime: e, element: t, config: n, styles: r }) => async (i) => {
	let { core: a, theme: o } = await Fn(n.mfe_config_api), s = Pn(t), c = null, l = s;
	if (In && (c = s.attachShadow({ mode: "open" }), l = document.createElement("div"), l.classList.add("xblock-root"), c.appendChild(l)), r) {
		let e = document.createElement("style");
		e.textContent = r, c ? c.appendChild(e) : document.head.appendChild(e);
	}
	a.forEach((e) => {
		let t = document.createElement("link");
		t.rel = "stylesheet", t.href = e, c?.appendChild(t), document.head.querySelector(`link[href="${e}"]`) || document.head.appendChild(t.cloneNode());
	}), o.forEach((e) => {
		let t = document.createElement("link");
		t.rel = "stylesheet", t.href = e, c?.appendChild(t), document.head.querySelector(`link[href="${e}"]`) || document.head.appendChild(t.cloneNode());
	}), (0, An.createRoot)(l).render(/* @__PURE__ */ (0, jn.jsx)(B.StrictMode, { children: /* @__PURE__ */ (0, jn.jsx)(Mn.Provider, {
		value: {
			runtime: e,
			element: s
		},
		children: /* @__PURE__ */ (0, jn.jsx)(En, {
			locale: "en",
			children: i
		})
	}) }));
}, Rn = ({ saveUrl: e, data: t, runtime: n, errorMessage: r = "Failed to save configuration" }) => {
	n.notify("save", { state: "start" }), $.post(e, JSON.stringify(t)).done(() => {
		n.notify("save", { state: "end" });
	}).fail((e) => {
		let t = typeof r == "function" ? r(e) : r;
		n.notify("error", {
			title: "Save Error",
			message: t
		});
	});
}, zn = /* @__PURE__ */ o(((e, t) => {
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
function V() {
	return V = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, V.apply(null, arguments);
}
//#endregion
//#region node_modules/.pnpm/@babel+runtime@7.29.2/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function Bn(e, t) {
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
var Vn = /* @__PURE__ */ o(((e, t) => {
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
Vn();
function Hn(e) {
	return "default" + e.charAt(0).toUpperCase() + e.substr(1);
}
//#endregion
//#region node_modules/.pnpm/uncontrollable@7.2.1_react@18.3.1/node_modules/uncontrollable/lib/esm/hook.js
function Un(e) {
	var t = Wn(e, "string");
	return typeof t == "symbol" ? t : String(t);
}
function Wn(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function Gn(e, t, n) {
	var r = (0, B.useRef)(e !== void 0), i = (0, B.useState)(t), a = i[0], o = i[1], s = e !== void 0, c = r.current;
	return r.current = s, !s && c && a !== t && o(t), [s ? e : a, (0, B.useCallback)(function(e) {
		var t = [...arguments].slice(1);
		n && n.apply(void 0, [e].concat(t)), o(e);
	}, [n])];
}
function Kn(e, t) {
	return Object.keys(t).reduce(function(n, r) {
		var i, a = n, o = a[Hn(r)], s = a[r], c = Bn(a, [Hn(r), r].map(Un)), l = t[r], u = Gn(s, o, e[l]), d = u[0], f = u[1];
		return V({}, c, (i = {}, i[r] = d, i[l] = f, i));
	}, e);
}
//#endregion
//#region node_modules/.pnpm/@babel+runtime@7.29.2/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function qn(e, t) {
	return qn = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
		return e.__proto__ = t, e;
	}, qn(e, t);
}
//#endregion
//#region node_modules/.pnpm/@babel+runtime@7.29.2/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
function Jn(e, t) {
	e.prototype = Object.create(t.prototype), e.prototype.constructor = e, qn(e, t);
}
//#endregion
//#region node_modules/.pnpm/react-lifecycles-compat@3.0.4/node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js
function Yn() {
	var e = this.constructor.getDerivedStateFromProps(this.props, this.state);
	e != null && this.setState(e);
}
function Xn(e) {
	function t(t) {
		return this.constructor.getDerivedStateFromProps(e, t) ?? null;
	}
	this.setState(t.bind(this));
}
function Zn(e, t) {
	try {
		var n = this.props, r = this.state;
		this.props = e, this.state = t, this.__reactInternalSnapshotFlag = !0, this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(n, r);
	} finally {
		this.props = n, this.state = r;
	}
}
Yn.__suppressDeprecationWarning = !0, Xn.__suppressDeprecationWarning = !0, Zn.__suppressDeprecationWarning = !0;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/ThemeProvider.js
var Qn = /* @__PURE__ */ B.createContext({});
Qn.Consumer, Qn.Provider;
function $n(e, t) {
	var n = (0, B.useContext)(Qn);
	return e || n[t] || t;
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/ownerDocument.js
function er(e) {
	return e && e.ownerDocument || document;
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/ownerWindow.js
function tr(e) {
	var t = er(e);
	return t && t.defaultView || window;
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/getComputedStyle.js
function nr(e, t) {
	return tr(e).getComputedStyle(e, t);
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/hyphenate.js
var rr = /([A-Z])/g;
function ir(e) {
	return e.replace(rr, "-$1").toLowerCase();
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/hyphenateStyle.js
var ar = /^ms-/;
function or(e) {
	return ir(e).replace(ar, "-ms-");
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/isTransform.js
var sr = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
function cr(e) {
	return !!(e && sr.test(e));
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/css.js
function lr(e, t) {
	var n = "", r = "";
	if (typeof t == "string") return e.style.getPropertyValue(or(t)) || nr(e).getPropertyValue(or(t));
	Object.keys(t).forEach(function(i) {
		var a = t[i];
		!a && a !== 0 ? e.style.removeProperty(or(i)) : cr(i) ? r += i + "(" + a + ") " : n += or(i) + ": " + a + ";";
	}), r && (n += "transform: " + r + ";"), e.style.cssText += ";" + n;
}
//#endregion
//#region node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/lib/ReactPropTypesSecret.js
var ur = /* @__PURE__ */ o(((e, t) => {
	t.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
})), dr = /* @__PURE__ */ o(((e, t) => {
	var n = ur();
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
})), fr = /* @__PURE__ */ o(((e, t) => {
	t.exports = dr()();
})), pr = { disabled: !1 }, mr = B.createContext(null), hr = function(e) {
	return e.scrollTop;
}, gr = /* @__PURE__ */ c(m()), _r = "unmounted", vr = "exited", yr = "entering", br = "entered", xr = "exiting", Sr = /* @__PURE__ */ function(e) {
	Jn(t, e);
	function t(t, n) {
		var r = e.call(this, t, n) || this, i = n, a = i && !i.isMounting ? t.enter : t.appear, o;
		return r.appearStatus = null, t.in ? a ? (o = vr, r.appearStatus = yr) : o = br : o = t.unmountOnExit || t.mountOnEnter ? _r : vr, r.state = { status: o }, r.nextCallback = null, r;
	}
	t.getDerivedStateFromProps = function(e, t) {
		return e.in && t.status === "unmounted" ? { status: vr } : null;
	};
	var n = t.prototype;
	return n.componentDidMount = function() {
		this.updateStatus(!0, this.appearStatus);
	}, n.componentDidUpdate = function(e) {
		var t = null;
		if (e !== this.props) {
			var n = this.state.status;
			this.props.in ? n !== "entering" && n !== "entered" && (t = yr) : (n === "entering" || n === "entered") && (t = xr);
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
				var n = this.props.nodeRef ? this.props.nodeRef.current : gr.findDOMNode(this);
				n && hr(n);
			}
			this.performEnter(e);
		} else this.performExit();
		else this.props.unmountOnExit && this.state.status === "exited" && this.setState({ status: _r });
	}, n.performEnter = function(e) {
		var t = this, n = this.props.enter, r = this.context ? this.context.isMounting : e, i = this.props.nodeRef ? [r] : [gr.findDOMNode(this), r], a = i[0], o = i[1], s = this.getTimeouts(), c = r ? s.appear : s.enter;
		if (!e && !n || pr.disabled) {
			this.safeSetState({ status: br }, function() {
				t.props.onEntered(a);
			});
			return;
		}
		this.props.onEnter(a, o), this.safeSetState({ status: yr }, function() {
			t.props.onEntering(a, o), t.onTransitionEnd(c, function() {
				t.safeSetState({ status: br }, function() {
					t.props.onEntered(a, o);
				});
			});
		});
	}, n.performExit = function() {
		var e = this, t = this.props.exit, n = this.getTimeouts(), r = this.props.nodeRef ? void 0 : gr.findDOMNode(this);
		if (!t || pr.disabled) {
			this.safeSetState({ status: vr }, function() {
				e.props.onExited(r);
			});
			return;
		}
		this.props.onExit(r), this.safeSetState({ status: xr }, function() {
			e.props.onExiting(r), e.onTransitionEnd(n.exit, function() {
				e.safeSetState({ status: vr }, function() {
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
		var n = this.props.nodeRef ? this.props.nodeRef.current : gr.findDOMNode(this), r = e == null && !this.props.addEndListener;
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
		var r = Bn(t, [
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
		return /* @__PURE__ */ B.createElement(mr.Provider, { value: null }, typeof n == "function" ? n(e, r) : B.cloneElement(B.Children.only(n), r));
	}, t;
}(B.Component);
Sr.contextType = mr, Sr.propTypes = {};
function Cr() {}
Sr.defaultProps = {
	in: !1,
	mountOnEnter: !1,
	unmountOnExit: !1,
	appear: !1,
	enter: !0,
	exit: !0,
	onEnter: Cr,
	onEntering: Cr,
	onEntered: Cr,
	onExit: Cr,
	onExiting: Cr,
	onExited: Cr
}, Sr.UNMOUNTED = _r, Sr.EXITED = vr, Sr.ENTERING = yr, Sr.ENTERED = br, Sr.EXITING = xr;
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/canUseDOM.js
var wr = !!(typeof window < "u" && window.document && window.document.createElement), Tr = !1, Er = !1;
try {
	var Dr = {
		get passive() {
			return Tr = !0;
		},
		get once() {
			return Er = Tr = !0;
		}
	};
	wr && (window.addEventListener("test", Dr, Dr), window.removeEventListener("test", Dr, !0));
} catch {}
function Or(e, t, n, r) {
	if (r && typeof r != "boolean" && !Er) {
		var i = r.once, a = r.capture, o = n;
		!Er && i && (o = n.__once || function e(r) {
			this.removeEventListener(t, e, a), n.call(this, r);
		}, n.__once = o), e.addEventListener(t, o, Tr ? r : a);
	}
	e.addEventListener(t, n, r);
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/removeEventListener.js
function kr(e, t, n, r) {
	var i = r && typeof r != "boolean" ? r.capture : r;
	e.removeEventListener(t, n, i), n.__once && e.removeEventListener(t, n.__once, i);
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/listen.js
function Ar(e, t, n, r) {
	return Or(e, t, n, r), function() {
		kr(e, t, n, r);
	};
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/triggerEvent.js
function jr(e, t, n, r) {
	if (n === void 0 && (n = !1), r === void 0 && (r = !0), e) {
		var i = document.createEvent("HTMLEvents");
		i.initEvent(t, n, r), e.dispatchEvent(i);
	}
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/transitionEnd.js
function Mr(e) {
	var t = lr(e, "transitionDuration") || "", n = t.indexOf("ms") === -1 ? 1e3 : 1;
	return parseFloat(t) * n;
}
function Nr(e, t, n) {
	n === void 0 && (n = 5);
	var r = !1, i = setTimeout(function() {
		r || jr(e, "transitionend", !0);
	}, t + n), a = Ar(e, "transitionend", function() {
		r = !0;
	}, { once: !0 });
	return function() {
		clearTimeout(i), a();
	};
}
function Pr(e, t, n, r) {
	n ??= Mr(e) || 0;
	var i = Nr(e, n, r), a = Ar(e, "transitionend", t);
	return function() {
		i(), a();
	};
}
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/transitionEndListener.js
function Fr(e, t) {
	var n = lr(e, t) || "", r = n.indexOf("ms") === -1 ? 1e3 : 1;
	return parseFloat(n) * r;
}
function Ir(e, t) {
	var n = Pr(e, function(r) {
		r.target === e && (n(), t(r));
	}, Fr(e, "transitionDuration") + Fr(e, "transitionDelay"));
}
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/createChainedFunction.js
function Lr() {
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
function Rr(e) {
	e.offsetHeight;
}
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useCommittedRef.js
function zr(e) {
	let t = (0, B.useRef)(e);
	return (0, B.useEffect)(() => {
		t.current = e;
	}, [e]), t;
}
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useEventCallback.js
function Br(e) {
	let t = zr(e);
	return (0, B.useCallback)(function(...e) {
		return t.current && t.current(...e);
	}, [t]);
}
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Fade.js
var Vr = /* @__PURE__ */ c(zn()), Hr = ["className", "children"], Ur, Wr = {
	in: !1,
	timeout: 300,
	mountOnEnter: !1,
	unmountOnExit: !1,
	appear: !1
}, Gr = (Ur = {}, Ur[yr] = "show", Ur[br] = "show", Ur), Kr = /* @__PURE__ */ B.forwardRef(function(e, t) {
	var n = e.className, r = e.children, i = Bn(e, Hr), a = (0, B.useCallback)(function(e) {
		Rr(e), i.onEnter && i.onEnter(e);
	}, [i]);
	return /* @__PURE__ */ B.createElement(Sr, V({
		ref: t,
		addEndListener: Ir
	}, i, { onEnter: a }), function(e, t) {
		return /* @__PURE__ */ B.cloneElement(r, V({}, t, { className: (0, Vr.default)("fade", n, r.props.className, Gr[e]) }));
	});
});
Kr.defaultProps = Wr, Kr.displayName = "Fade";
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/SafeAnchor.js
var qr = [
	"as",
	"disabled",
	"onKeyDown"
];
function Jr(e) {
	return !e || e.trim() === "#";
}
var Yr = /* @__PURE__ */ B.forwardRef(function(e, t) {
	var n = e.as, r = n === void 0 ? "a" : n, i = e.disabled, a = e.onKeyDown, o = Bn(e, qr), s = function(e) {
		var t = o.href, n = o.onClick;
		if ((i || Jr(t)) && e.preventDefault(), i) {
			e.stopPropagation();
			return;
		}
		n && n(e);
	};
	return Jr(o.href) && (o.role = o.role || "button", o.href = o.href || "#"), i && (o.tabIndex = -1, o["aria-disabled"] = !0), /* @__PURE__ */ B.createElement(r, V({ ref: t }, o, {
		onClick: s,
		onKeyDown: Lr(function(e) {
			e.key === " " && (e.preventDefault(), s(e));
		}, a)
	}));
});
Yr.displayName = "SafeAnchor";
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Button.js
var Xr = [
	"bsPrefix",
	"variant",
	"size",
	"active",
	"className",
	"block",
	"type",
	"as"
], Zr = {
	variant: "primary",
	active: !1,
	disabled: !1
}, Qr = /* @__PURE__ */ B.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.variant, i = e.size, a = e.active, o = e.className, s = e.block, c = e.type, l = e.as, u = Bn(e, Xr), d = $n(n, "btn"), f = (0, Vr.default)(o, d, a && "active", r && d + "-" + r, s && d + "-block", i && d + "-" + i);
	if (u.href) return /* @__PURE__ */ B.createElement(Yr, V({}, u, {
		as: l,
		ref: t,
		className: (0, Vr.default)(f, u.disabled && "disabled")
	}));
	t && (u.ref = t), c ? u.type = c : l || (u.type = "button");
	var p = l || "button";
	return /* @__PURE__ */ B.createElement(p, V({}, u, { className: f }));
});
Qr.displayName = "Button", Qr.defaultProps = Zr;
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useMounted.js
function $r() {
	let e = (0, B.useRef)(!0), t = (0, B.useRef)(() => e.current);
	return (0, B.useEffect)(() => (e.current = !0, () => {
		e.current = !1;
	}), []), t.current;
}
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useUpdatedRef.js
function ei(e) {
	let t = (0, B.useRef)(e);
	return t.current = e, t;
}
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useWillUnmount.js
function ti(e) {
	let t = ei(e);
	(0, B.useEffect)(() => () => t.current(), []);
}
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useTimeout.js
var ni = 2 ** 31 - 1;
function ri(e, t, n) {
	let r = n - Date.now();
	e.current = r <= ni ? setTimeout(t, r) : setTimeout(() => ri(e, t, n), ni);
}
function ii() {
	let e = $r(), t = (0, B.useRef)();
	return ti(() => clearTimeout(t.current)), (0, B.useMemo)(() => {
		let n = () => clearTimeout(t.current);
		function r(r, i = 0) {
			e() && (n(), i <= ni ? t.current = setTimeout(r, i) : ri(t, r, Date.now() + i));
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
var ai = [
	"bsPrefix",
	"className",
	"as"
], oi = [
	"xl",
	"lg",
	"md",
	"sm",
	"xs"
], H = /* @__PURE__ */ B.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.className, i = e.as, a = i === void 0 ? "div" : i, o = Bn(e, ai), s = $n(n, "col"), c = [], l = [];
	return oi.forEach(function(e) {
		var t = o[e];
		delete o[e];
		var n, r, i;
		if (typeof t == "object" && t) {
			var a = t.span;
			n = a === void 0 ? !0 : a, r = t.offset, i = t.order;
		} else n = t;
		var u = e === "xs" ? "" : "-" + e;
		n && c.push(n === !0 ? "" + s + u : "" + s + u + "-" + n), i != null && l.push("order" + u + "-" + i), r != null && l.push("offset" + u + "-" + r);
	}), c.length || c.push(s), /* @__PURE__ */ B.createElement(a, V({}, o, {
		ref: t,
		className: Vr.default.apply(void 0, [r].concat(c, l))
	}));
});
H.displayName = "Col";
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useCallbackRef.js
function si() {
	return (0, B.useState)(null);
}
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useSafeState.js
function ci(e) {
	let t = $r();
	return [e[0], (0, B.useCallback)((n) => {
		if (t()) return e[1](n);
	}, [t, e[1]])];
}
var li = "bottom", ui = "right", di = "left", fi = "auto", pi = [
	"top",
	li,
	ui,
	di
], mi = "start", hi = "clippingParents", gi = "viewport", _i = "popper", vi = "reference", yi = /* @__PURE__ */ pi.reduce(function(e, t) {
	return e.concat([t + "-" + mi, t + "-end"]);
}, []), bi = /* @__PURE__ */ [].concat(pi, [fi]).reduce(function(e, t) {
	return e.concat([
		t,
		t + "-" + mi,
		t + "-end"
	]);
}, []), xi = [
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
function Si(e) {
	return e.split("-")[0];
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getWindow.js
function Ci(e) {
	if (e == null) return window;
	if (e.toString() !== "[object Window]") {
		var t = e.ownerDocument;
		return t && t.defaultView || window;
	}
	return e;
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/instanceOf.js
function wi(e) {
	return e instanceof Ci(e).Element || e instanceof Element;
}
function Ti(e) {
	return e instanceof Ci(e).HTMLElement || e instanceof HTMLElement;
}
function Ei(e) {
	return typeof ShadowRoot > "u" ? !1 : e instanceof Ci(e).ShadowRoot || e instanceof ShadowRoot;
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/math.js
var Di = Math.max, Oi = Math.min, ki = Math.round;
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/userAgent.js
function Ai() {
	var e = navigator.userAgentData;
	return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(e) {
		return e.brand + "/" + e.version;
	}).join(" ") : navigator.userAgent;
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/isLayoutViewport.js
function ji() {
	return !/^((?!chrome|android).)*safari/i.test(Ai());
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js
function Mi(e, t, n) {
	t === void 0 && (t = !1), n === void 0 && (n = !1);
	var r = e.getBoundingClientRect(), i = 1, a = 1;
	t && Ti(e) && (i = e.offsetWidth > 0 && ki(r.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && ki(r.height) / e.offsetHeight || 1);
	var o = (wi(e) ? Ci(e) : window).visualViewport, s = !ji() && n, c = (r.left + (s && o ? o.offsetLeft : 0)) / i, l = (r.top + (s && o ? o.offsetTop : 0)) / a, u = r.width / i, d = r.height / a;
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
function Ni(e) {
	var t = Mi(e), n = e.offsetWidth, r = e.offsetHeight;
	return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
		x: e.offsetLeft,
		y: e.offsetTop,
		width: n,
		height: r
	};
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/contains.js
function Pi(e, t) {
	var n = t.getRootNode && t.getRootNode();
	if (e.contains(t)) return !0;
	if (n && Ei(n)) {
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
function Fi(e) {
	return e ? (e.nodeName || "").toLowerCase() : null;
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js
function Ii(e) {
	return Ci(e).getComputedStyle(e);
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/isTableElement.js
function Li(e) {
	return [
		"table",
		"td",
		"th"
	].indexOf(Fi(e)) >= 0;
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js
function Ri(e) {
	return ((wi(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getParentNode.js
function zi(e) {
	return Fi(e) === "html" ? e : e.assignedSlot || e.parentNode || (Ei(e) ? e.host : null) || Ri(e);
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js
function Bi(e) {
	return !Ti(e) || Ii(e).position === "fixed" ? null : e.offsetParent;
}
function Vi(e) {
	var t = /firefox/i.test(Ai());
	if (/Trident/i.test(Ai()) && Ti(e) && Ii(e).position === "fixed") return null;
	var n = zi(e);
	for (Ei(n) && (n = n.host); Ti(n) && ["html", "body"].indexOf(Fi(n)) < 0;) {
		var r = Ii(n);
		if (r.transform !== "none" || r.perspective !== "none" || r.contain === "paint" || ["transform", "perspective"].indexOf(r.willChange) !== -1 || t && r.willChange === "filter" || t && r.filter && r.filter !== "none") return n;
		n = n.parentNode;
	}
	return null;
}
function Hi(e) {
	for (var t = Ci(e), n = Bi(e); n && Li(n) && Ii(n).position === "static";) n = Bi(n);
	return n && (Fi(n) === "html" || Fi(n) === "body" && Ii(n).position === "static") ? t : n || Vi(e) || t;
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js
function Ui(e) {
	return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/within.js
function Wi(e, t, n) {
	return Di(e, Oi(t, n));
}
function Gi(e, t, n) {
	var r = Wi(e, t, n);
	return r > n ? n : r;
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getFreshSideObject.js
function U() {
	return {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0
	};
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/mergePaddingObject.js
function W(e) {
	return Object.assign({}, U(), e);
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/expandToHashMap.js
function Ki(e, t) {
	return t.reduce(function(t, n) {
		return t[n] = e, t;
	}, {});
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/arrow.js
var qi = function(e, t) {
	return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, W(typeof e == "number" ? Ki(e, pi) : e);
};
function Ji(e) {
	var t, n = e.state, r = e.name, i = e.options, a = n.elements.arrow, o = n.modifiersData.popperOffsets, s = Si(n.placement), c = Ui(s), l = ["left", "right"].indexOf(s) >= 0 ? "height" : "width";
	if (!(!a || !o)) {
		var u = qi(i.padding, n), d = Ni(a), f = c === "y" ? "top" : di, p = c === "y" ? li : ui, m = n.rects.reference[l] + n.rects.reference[c] - o[c] - n.rects.popper[l], h = o[c] - n.rects.reference[c], g = Hi(a), _ = g ? c === "y" ? g.clientHeight || 0 : g.clientWidth || 0 : 0, v = m / 2 - h / 2, y = u[f], b = _ - d[l] - u[p], x = _ / 2 - d[l] / 2 + v, S = Wi(y, x, b), C = c;
		n.modifiersData[r] = (t = {}, t[C] = S, t.centerOffset = S - x, t);
	}
}
function Yi(e) {
	var t = e.state, n = e.options.element, r = n === void 0 ? "[data-popper-arrow]" : n;
	r != null && (typeof r == "string" && (r = t.elements.popper.querySelector(r), !r) || Pi(t.elements.popper, r) && (t.elements.arrow = r));
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
		x: ki(n * i) / i || 0,
		y: ki(r * i) / i || 0
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
	var _ = o.hasOwnProperty("x"), v = o.hasOwnProperty("y"), y = di, b = "top", x = window;
	if (l) {
		var S = Hi(n), C = "clientHeight", w = "clientWidth";
		if (S === Ci(n) && (S = Ri(n), Ii(S).position !== "static" && s === "absolute" && (C = "scrollHeight", w = "scrollWidth")), S = S, i === "top" || (i === "left" || i === "right") && a === "end") {
			b = li;
			var T = d && S === x && x.visualViewport ? x.visualViewport.height : S[C];
			h -= T - r.height, h *= c ? 1 : -1;
		}
		if (i === "left" || (i === "top" || i === "bottom") && a === "end") {
			y = ui;
			var E = d && S === x && x.visualViewport ? x.visualViewport.width : S[w];
			p -= E - r.width, p *= c ? 1 : -1;
		}
	}
	var D = Object.assign({ position: s }, l && Qi), O = u === !0 ? $i({
		x: p,
		y: h
	}, Ci(n)) : {
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
		placement: Si(t.placement),
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
	var t = e.state, n = e.instance, r = e.options, i = r.scroll, a = i === void 0 ? !0 : i, o = r.resize, s = o === void 0 ? !0 : o, c = Ci(t.elements.popper), l = [].concat(t.scrollParents.reference, t.scrollParents.popper);
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
	var t = Ci(e);
	return {
		scrollLeft: t.pageXOffset,
		scrollTop: t.pageYOffset
	};
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js
function da(e) {
	return Mi(Ri(e)).left + ua(e).scrollLeft;
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js
function fa(e, t) {
	var n = Ci(e), r = Ri(e), i = n.visualViewport, a = r.clientWidth, o = r.clientHeight, s = 0, c = 0;
	if (i) {
		a = i.width, o = i.height;
		var l = ji();
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
	var t = Ri(e), n = ua(e), r = e.ownerDocument?.body, i = Di(t.scrollWidth, t.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0), a = Di(t.scrollHeight, t.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0), o = -n.scrollLeft + da(e), s = -n.scrollTop;
	return Ii(r || t).direction === "rtl" && (o += Di(t.clientWidth, r ? r.clientWidth : 0) - i), {
		width: i,
		height: a,
		x: o,
		y: s
	};
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js
function ma(e) {
	var t = Ii(e), n = t.overflow, r = t.overflowX, i = t.overflowY;
	return /auto|scroll|overlay|hidden/.test(n + i + r);
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js
function ha(e) {
	return [
		"html",
		"body",
		"#document"
	].indexOf(Fi(e)) >= 0 ? e.ownerDocument.body : Ti(e) && ma(e) ? e : ha(zi(e));
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js
function ga(e, t) {
	t === void 0 && (t = []);
	var n = ha(e), r = n === e.ownerDocument?.body, i = Ci(n), a = r ? [i].concat(i.visualViewport || [], ma(n) ? n : []) : n, o = t.concat(a);
	return r ? o : o.concat(ga(zi(a)));
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
	var n = Mi(e, !1, t === "fixed");
	return n.top += e.clientTop, n.left += e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function ya(e, t, n) {
	return t === "viewport" ? _a(fa(e, n)) : wi(t) ? va(t, n) : _a(pa(Ri(e)));
}
function ba(e) {
	var t = ga(zi(e)), n = ["absolute", "fixed"].indexOf(Ii(e).position) >= 0 && Ti(e) ? Hi(e) : e;
	return wi(n) ? t.filter(function(e) {
		return wi(e) && Pi(e, n) && Fi(e) !== "body";
	}) : [];
}
function xa(e, t, n, r) {
	var i = t === "clippingParents" ? ba(e) : [].concat(t), a = [].concat(i, [n]), o = a[0], s = a.reduce(function(t, n) {
		var i = ya(e, n, r);
		return t.top = Di(i.top, t.top), t.right = Oi(i.right, t.right), t.bottom = Oi(i.bottom, t.bottom), t.left = Di(i.left, t.left), t;
	}, ya(e, o, r));
	return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/computeOffsets.js
function Sa(e) {
	var t = e.reference, n = e.element, r = e.placement, i = r ? Si(r) : null, a = r ? Zi(r) : null, o = t.x + t.width / 2 - n.width / 2, s = t.y + t.height / 2 - n.height / 2, c;
	switch (i) {
		case "top":
			c = {
				x: o,
				y: t.y - n.height
			};
			break;
		case li:
			c = {
				x: o,
				y: t.y + t.height
			};
			break;
		case ui:
			c = {
				x: t.x + t.width,
				y: s
			};
			break;
		case di:
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
	var l = i ? Ui(i) : null;
	if (l != null) {
		var u = l === "y" ? "height" : "width";
		switch (a) {
			case mi:
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
	var n = t, r = n.placement, i = r === void 0 ? e.placement : r, a = n.strategy, o = a === void 0 ? e.strategy : a, s = n.boundary, c = s === void 0 ? hi : s, l = n.rootBoundary, u = l === void 0 ? gi : l, d = n.elementContext, f = d === void 0 ? _i : d, p = n.altBoundary, m = p === void 0 ? !1 : p, h = n.padding, g = h === void 0 ? 0 : h, _ = W(typeof g == "number" ? Ki(g, pi) : g), v = f === "popper" ? vi : _i, y = e.rects.popper, b = e.elements[m ? v : f], x = xa(wi(b) ? b : b.contextElement || Ri(e.elements.popper), c, u, o), S = Mi(e.elements.reference), C = Sa({
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
function G(e, t) {
	t === void 0 && (t = {});
	var n = t, r = n.placement, i = n.boundary, a = n.rootBoundary, o = n.padding, s = n.flipVariations, c = n.allowedAutoPlacements, l = c === void 0 ? bi : c, u = Zi(r), d = u ? s ? yi : yi.filter(function(e) {
		return Zi(e) === u;
	}) : pi, f = d.filter(function(e) {
		return l.indexOf(e) >= 0;
	});
	f.length === 0 && (f = d);
	var p = f.reduce(function(t, n) {
		return t[n] = Ca(e, {
			placement: n,
			boundary: i,
			rootBoundary: a,
			padding: o
		})[Si(n)], t;
	}, {});
	return Object.keys(p).sort(function(e, t) {
		return p[e] - p[t];
	});
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/flip.js
function wa(e) {
	if (Si(e) === "auto") return [];
	var t = sa(e);
	return [
		la(e),
		t,
		la(t)
	];
}
function Ta(e) {
	var t = e.state, n = e.options, r = e.name;
	if (!t.modifiersData[r]._skip) {
		for (var i = n.mainAxis, a = i === void 0 ? !0 : i, o = n.altAxis, s = o === void 0 ? !0 : o, c = n.fallbackPlacements, l = n.padding, u = n.boundary, d = n.rootBoundary, f = n.altBoundary, p = n.flipVariations, m = p === void 0 ? !0 : p, h = n.allowedAutoPlacements, g = t.options.placement, _ = Si(g) === g, v = c || (_ || !m ? [sa(g)] : wa(g)), y = [g].concat(v).reduce(function(e, n) {
			return e.concat(Si(n) === "auto" ? G(t, {
				placement: n,
				boundary: u,
				rootBoundary: d,
				padding: l,
				flipVariations: m,
				allowedAutoPlacements: h
			}) : n);
		}, []), b = t.rects.reference, x = t.rects.popper, S = /* @__PURE__ */ new Map(), C = !0, w = y[0], T = 0; T < y.length; T++) {
			var E = y[T], D = Si(E), O = Zi(E) === mi, k = ["top", li].indexOf(D) >= 0, ee = k ? "width" : "height", A = Ca(t, {
				placement: E,
				boundary: u,
				rootBoundary: d,
				altBoundary: f,
				padding: l
			}), j = k ? O ? ui : di : O ? li : "top";
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
var Ea = {
	name: "flip",
	enabled: !0,
	phase: "main",
	fn: Ta,
	requiresIfExists: ["offset"],
	data: { _skip: !1 }
};
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/hide.js
function Da(e, t, n) {
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
function Oa(e) {
	return [
		"top",
		ui,
		li,
		di
	].some(function(t) {
		return e[t] >= 0;
	});
}
function ka(e) {
	var t = e.state, n = e.name, r = t.rects.reference, i = t.rects.popper, a = t.modifiersData.preventOverflow, o = Ca(t, { elementContext: "reference" }), s = Ca(t, { altBoundary: !0 }), c = Da(o, r), l = Da(s, i, a), u = Oa(c), d = Oa(l);
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
var Aa = {
	name: "hide",
	enabled: !0,
	phase: "main",
	requiresIfExists: ["preventOverflow"],
	fn: ka
};
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/offset.js
function ja(e, t, n) {
	var r = Si(e), i = ["left", "top"].indexOf(r) >= 0 ? -1 : 1, a = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n, o = a[0], s = a[1];
	return o ||= 0, s = (s || 0) * i, ["left", "right"].indexOf(r) >= 0 ? {
		x: s,
		y: o
	} : {
		x: o,
		y: s
	};
}
function Ma(e) {
	var t = e.state, n = e.options, r = e.name, i = n.offset, a = i === void 0 ? [0, 0] : i, o = bi.reduce(function(e, n) {
		return e[n] = ja(n, t.rects, a), e;
	}, {}), s = o[t.placement], c = s.x, l = s.y;
	t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += c, t.modifiersData.popperOffsets.y += l), t.modifiersData[r] = o;
}
var Na = {
	name: "offset",
	enabled: !0,
	phase: "main",
	requires: ["popperOffsets"],
	fn: Ma
};
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/popperOffsets.js
function Pa(e) {
	var t = e.state, n = e.name;
	t.modifiersData[n] = Sa({
		reference: t.rects.reference,
		element: t.rects.popper,
		strategy: "absolute",
		placement: t.placement
	});
}
var Fa = {
	name: "popperOffsets",
	enabled: !0,
	phase: "read",
	fn: Pa,
	data: {}
};
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getAltAxis.js
function Ia(e) {
	return e === "x" ? "y" : "x";
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/preventOverflow.js
function La(e) {
	var t = e.state, n = e.options, r = e.name, i = n.mainAxis, a = i === void 0 ? !0 : i, o = n.altAxis, s = o === void 0 ? !1 : o, c = n.boundary, l = n.rootBoundary, u = n.altBoundary, d = n.padding, f = n.tether, p = f === void 0 ? !0 : f, m = n.tetherOffset, h = m === void 0 ? 0 : m, g = Ca(t, {
		boundary: c,
		rootBoundary: l,
		padding: d,
		altBoundary: u
	}), _ = Si(t.placement), v = Zi(t.placement), y = !v, b = Ui(_), x = Ia(b), S = t.modifiersData.popperOffsets, C = t.rects.reference, w = t.rects.popper, T = typeof h == "function" ? h(Object.assign({}, t.rects, { placement: t.placement })) : h, E = typeof T == "number" ? {
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
			var k = b === "y" ? "top" : di, ee = b === "y" ? li : ui, A = b === "y" ? "height" : "width", j = S[b], M = j + g[k], N = j - g[ee], P = p ? -w[A] / 2 : 0, F = v === "start" ? C[A] : w[A], te = v === "start" ? -w[A] : -C[A], ne = t.elements.arrow, I = p && ne ? Ni(ne) : {
				width: 0,
				height: 0
			}, re = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : U(), ie = re[k], ae = re[ee], oe = Wi(0, C[A], I[A]), se = y ? C[A] / 2 - P - oe - ie - E.mainAxis : F - oe - ie - E.mainAxis, ce = y ? -C[A] / 2 + P + oe + ae + E.mainAxis : te + oe + ae + E.mainAxis, le = t.elements.arrow && Hi(t.elements.arrow), ue = le ? b === "y" ? le.clientTop || 0 : le.clientLeft || 0 : 0, de = D?.[b] ?? 0, fe = j + se - de - ue, pe = j + ce - de, me = Wi(p ? Oi(M, fe) : M, j, p ? Di(N, pe) : N);
			S[b] = me, O[b] = me - j;
		}
		if (s) {
			var he = b === "x" ? "top" : di, ge = b === "x" ? li : ui, _e = S[x], ve = x === "y" ? "height" : "width", ye = _e + g[he], be = _e - g[ge], xe = ["top", di].indexOf(_) !== -1, Se = D?.[x] ?? 0, Ce = xe ? ye : _e - C[ve] - w[ve] - Se + E.altAxis, we = xe ? _e + C[ve] + w[ve] - Se - E.altAxis : be, Te = p && xe ? Gi(Ce, _e, we) : Wi(p ? Ce : ye, _e, p ? we : be);
			S[x] = Te, O[x] = Te - _e;
		}
		t.modifiersData[r] = O;
	}
}
var Ra = {
	name: "preventOverflow",
	enabled: !0,
	phase: "main",
	fn: La,
	requiresIfExists: ["offset"]
};
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js
function za(e) {
	return {
		scrollLeft: e.scrollLeft,
		scrollTop: e.scrollTop
	};
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js
function Ba(e) {
	return e === Ci(e) || !Ti(e) ? ua(e) : za(e);
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js
function Va(e) {
	var t = e.getBoundingClientRect(), n = ki(t.width) / e.offsetWidth || 1, r = ki(t.height) / e.offsetHeight || 1;
	return n !== 1 || r !== 1;
}
function Ha(e, t, n) {
	n === void 0 && (n = !1);
	var r = Ti(t), i = Ti(t) && Va(t), a = Ri(t), o = Mi(e, i, n), s = {
		scrollLeft: 0,
		scrollTop: 0
	}, c = {
		x: 0,
		y: 0
	};
	return (r || !r && !n) && ((Fi(t) !== "body" || ma(a)) && (s = Ba(t)), Ti(t) ? (c = Mi(t, !0), c.x += t.clientLeft, c.y += t.clientTop) : a && (c.x = da(a))), {
		x: o.left + s.scrollLeft - c.x,
		y: o.top + s.scrollTop - c.y,
		width: o.width,
		height: o.height
	};
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/orderModifiers.js
function Ua(e) {
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
function Wa(e) {
	var t = Ua(e);
	return xi.reduce(function(e, n) {
		return e.concat(t.filter(function(e) {
			return e.phase === n;
		}));
	}, []);
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/debounce.js
function Ga(e) {
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
function Ka(e) {
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
var qa = {
	placement: "bottom",
	modifiers: [],
	strategy: "absolute"
};
function Ja() {
	return ![...arguments].some(function(e) {
		return !(e && typeof e.getBoundingClientRect == "function");
	});
}
function Ya(e) {
	e === void 0 && (e = {});
	var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, i = t.defaultOptions, a = i === void 0 ? qa : i;
	return function(e, t, n) {
		n === void 0 && (n = a);
		var i = {
			placement: "bottom",
			orderedModifiers: [],
			options: Object.assign({}, qa, a),
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
					reference: wi(e) ? ga(e) : e.contextElement ? ga(e.contextElement) : [],
					popper: ga(t)
				};
				var s = Wa(Ka([].concat(r, i.options.modifiers)));
				return i.orderedModifiers = s.filter(function(e) {
					return e.enabled;
				}), l(), c.update();
			},
			forceUpdate: function() {
				if (!s) {
					var e = i.elements, t = e.reference, n = e.popper;
					if (Ja(t, n)) {
						i.rects = {
							reference: Ha(t, Hi(n), i.options.strategy === "fixed"),
							popper: Ni(n)
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
			update: Ga(function() {
				return new Promise(function(e) {
					c.forceUpdate(), e(i);
				});
			}),
			destroy: function() {
				u(), s = !0;
			}
		};
		if (!Ja(e, t)) return c;
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
var Xa = Ya({ defaultModifiers: [
	Aa,
	Fa,
	na,
	aa,
	Na,
	Ea,
	Ra,
	Xi
] }), Za = function(e) {
	return {
		position: e,
		top: "0",
		left: "0",
		opacity: "0",
		pointerEvents: "none"
	};
}, Qa = {
	name: "applyStyles",
	enabled: !1
}, $a = {
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
}, eo = [];
function to(e, t, n) {
	var r = n === void 0 ? {} : n, i = r.enabled, a = i === void 0 ? !0 : i, o = r.placement, s = o === void 0 ? "bottom" : o, c = r.strategy, l = c === void 0 ? "absolute" : c, u = r.modifiers, d = u === void 0 ? eo : u, f = Bn(r, [
		"enabled",
		"placement",
		"strategy",
		"modifiers"
	]), p = (0, B.useRef)(), m = (0, B.useCallback)(function() {
		var e;
		(e = p.current) == null || e.update();
	}, []), h = (0, B.useCallback)(function() {
		var e;
		(e = p.current) == null || e.forceUpdate();
	}, []), g = ci((0, B.useState)({
		placement: s,
		update: m,
		forceUpdate: h,
		attributes: {},
		styles: {
			popper: Za(l),
			arrow: {}
		}
	})), _ = g[0], v = g[1], y = (0, B.useMemo)(function() {
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
	return (0, B.useEffect)(function() {
		!p.current || !a || p.current.setOptions({
			placement: s,
			strategy: l,
			modifiers: [].concat(d, [y, Qa])
		});
	}, [
		l,
		s,
		y,
		a
	]), (0, B.useEffect)(function() {
		if (!(!a || e == null || t == null)) return p.current = Xa(e, t, V({}, f, {
			placement: s,
			strategy: l,
			modifiers: [].concat(d, [$a, y])
		})), function() {
			p.current != null && (p.current.destroy(), p.current = void 0, v(function(e) {
				return V({}, e, {
					attributes: {},
					styles: { popper: Za(l) }
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
function no(e, t) {
	if (e.contains) return e.contains(t);
	if (e.compareDocumentPosition) return e === t || !!(e.compareDocumentPosition(t) & 16);
}
//#endregion
//#region node_modules/.pnpm/warning@4.0.3/node_modules/warning/warning.js
var ro = /* @__PURE__ */ o(((e, t) => {
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
function io(e) {
	return e && "setState" in e ? gr.findDOMNode(e) : e ?? null;
}
//#endregion
//#region node_modules/.pnpm/react-overlays@5.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-overlays/esm/ownerDocument.js
var ao = (function(e) {
	return er(io(e));
}), oo = /* @__PURE__ */ c(ro()), so = 27, co = function() {};
function lo(e) {
	return e.button === 0;
}
function uo(e) {
	return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
var fo = function(e) {
	return e && ("current" in e ? e.current : e);
};
function po(e, t, n) {
	var r = n === void 0 ? {} : n, i = r.disabled, a = r.clickTrigger, o = a === void 0 ? "click" : a, s = (0, B.useRef)(!1), c = t || co, l = (0, B.useCallback)(function(t) {
		var n = fo(e);
		(0, oo.default)(!!n, "RootClose captured a close event but does not have a ref to compare it to. useRootClose(), should be passed a ref that resolves to a DOM node"), s.current = !n || uo(t) || !lo(t) || !!no(n, (t.composedPath == null ? void 0 : t.composedPath()[0]) ?? t.target);
	}, [e]), u = Br(function(e) {
		s.current || c(e);
	}), d = Br(function(e) {
		e.keyCode === so && c(e);
	});
	(0, B.useEffect)(function() {
		if (!(i || e == null)) {
			var t = window.event, n = ao(fo(e)), r = Ar(n, o, l, !0), a = Ar(n, o, function(e) {
				if (e === t) {
					t = void 0;
					return;
				}
				u(e);
			}), s = Ar(n, "keyup", function(e) {
				if (e === t) {
					t = void 0;
					return;
				}
				d(e);
			}), c = [];
			return "ontouchstart" in n.documentElement && (c = [].slice.call(n.body.children).map(function(e) {
				return Ar(e, "mousemove", co);
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
function mo(e) {
	var t = {};
	return Array.isArray(e) ? (e?.forEach(function(e) {
		t[e.name] = e;
	}), t) : e || t;
}
function ho(e) {
	return e === void 0 && (e = {}), Array.isArray(e) ? e : Object.keys(e).map(function(t) {
		return e[t].name = t, e[t];
	});
}
function go(e) {
	var t = e.enabled, n = e.enableEvents, r = e.placement, i = e.flip, a = e.offset, o = e.fixed, s = e.containerPadding, c = e.arrowElement, l = e.popperConfig, u = l === void 0 ? {} : l, d = mo(u.modifiers);
	return V({}, u, {
		placement: r,
		enabled: t,
		strategy: o ? "fixed" : u.strategy,
		modifiers: ho(V({}, d, {
			eventListeners: { enabled: n },
			preventOverflow: V({}, d.preventOverflow, { options: s ? V({ padding: s }, d.preventOverflow?.options) : d.preventOverflow?.options }),
			offset: { options: V({ offset: a }, d.offset?.options) },
			arrow: V({}, d.arrow, {
				enabled: !!c,
				options: V({}, d.arrow?.options, { element: c })
			}),
			flip: V({ enabled: !!i }, d.flip)
		}))
	});
}
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useMergedRefs.js
var _o = (e) => !e || typeof e == "function" ? e : (t) => {
	e.current = t;
};
function vo(e, t) {
	let n = _o(e), r = _o(t);
	return (e) => {
		n && n(e), r && r(e);
	};
}
function K(e, t) {
	return (0, B.useMemo)(() => vo(e, t), [e, t]);
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/hasClass.js
function yo(e, t) {
	return e.classList ? !!t && e.classList.contains(t) : (" " + (e.className.baseVal || e.className) + " ").indexOf(" " + t + " ") !== -1;
}
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/usePopperMarginModifiers.js
function bo(e) {
	var t = window.getComputedStyle(e);
	return {
		top: parseFloat(t.marginTop) || 0,
		right: parseFloat(t.marginRight) || 0,
		bottom: parseFloat(t.marginBottom) || 0,
		left: parseFloat(t.marginLeft) || 0
	};
}
function xo() {
	var e = (0, B.useRef)(null), t = (0, B.useRef)(null), n = (0, B.useRef)(null), r = $n(void 0, "popover"), i = $n(void 0, "dropdown-menu");
	return [(0, B.useCallback)(function(n) {
		!n || !(yo(n, r) || yo(n, i)) || (t.current = bo(n), n.style.margin = "0", e.current = n);
	}, [r, i]), [
		(0, B.useMemo)(function() {
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
		(0, B.useMemo)(function() {
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
		(0, B.useMemo)(function() {
			return {
				name: "popoverArrowMargins",
				enabled: !0,
				phase: "main",
				fn: function() {},
				requiresIfExists: ["arrow"],
				effect: function(t) {
					var i = t.state;
					if (!(!e.current || !i.elements.arrow || !yo(e.current, r))) {
						if (i.modifiersData["arrow#persistent"]) {
							var a = bo(i.elements.arrow), o = a.top, s = a.right, c = o || s;
							i.modifiersData["arrow#persistent"].padding = {
								top: c,
								left: c,
								right: c,
								bottom: c
							};
						} else n.current = bo(i.elements.arrow);
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
var So = /* @__PURE__ */ o(((e, t) => {
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
})), Co = function(e) {
	var t;
	return typeof document > "u" ? null : e == null ? er().body : (typeof e == "function" && (e = e()), e && "current" in e && (e = e.current), (t = e) != null && t.nodeType && e || null);
};
function wo(e, t) {
	var n = (0, B.useState)(function() {
		return Co(e);
	}), r = n[0], i = n[1];
	if (!r) {
		var a = Co(e);
		a && i(a);
	}
	return (0, B.useEffect)(function() {
		t && r && t(r);
	}, [t, r]), (0, B.useEffect)(function() {
		var t = Co(e);
		t !== r && i(t);
	}, [e, r]), r;
}
//#endregion
//#region node_modules/.pnpm/react-overlays@5.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-overlays/esm/Overlay.js
var q = /* @__PURE__ */ c(fr()), J = /* @__PURE__ */ B.forwardRef(function(e, t) {
	var n = e.flip, r = e.offset, i = e.placement, a = e.containerPadding, o = a === void 0 ? 5 : a, s = e.popperConfig, c = s === void 0 ? {} : s, l = e.transition, u = si(), d = u[0], f = u[1], p = si(), m = p[0], h = p[1], g = K(f, t), _ = wo(e.container), v = wo(e.target), y = (0, B.useState)(!e.show), b = y[0], x = y[1], S = to(v, d, go({
		placement: i,
		enableEvents: !!e.show,
		containerPadding: o || 5,
		flip: n,
		offset: r,
		arrowElement: m,
		popperConfig: c
	})), C = S.styles, w = S.attributes, T = Bn(S, ["styles", "attributes"]);
	e.show ? b && x(!1) : !e.transition && !b && x(!0);
	var E = function() {
		x(!0), e.onExited && e.onExited.apply(e, arguments);
	}, D = e.show || l && !b;
	if (po(d, e.onHide, {
		disabled: !e.rootClose || e.rootCloseDisabled,
		clickTrigger: e.rootCloseEvent
	}), !D) return null;
	var O = e.children(V({}, T, {
		show: !!e.show,
		props: V({}, w.popper, {
			style: C.popper,
			ref: g
		}),
		arrowProps: V({}, w.arrow, {
			style: C.arrow,
			ref: h
		})
	}));
	if (l) {
		var k = e.onExit, ee = e.onExiting, A = e.onEnter, j = e.onEntering, M = e.onEntered;
		O = /* @__PURE__ */ B.createElement(l, {
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
	return _ ? /* @__PURE__ */ gr.createPortal(O, _) : null;
});
J.displayName = "Overlay", J.propTypes = {
	show: q.default.bool,
	placement: q.default.oneOf(bi),
	target: q.default.any,
	container: q.default.any,
	flip: q.default.bool,
	children: q.default.func.isRequired,
	containerPadding: q.default.number,
	popperConfig: q.default.object,
	rootClose: q.default.bool,
	rootCloseEvent: q.default.oneOf(["click", "mousedown"]),
	rootCloseDisabled: q.default.bool,
	onHide: function(e) {
		var t = [...arguments].slice(1);
		if (e.rootClose) {
			var n;
			return (n = q.default.func).isRequired.apply(n, [e].concat(t));
		}
		return q.default.func.apply(q.default, [e].concat(t));
	},
	transition: q.default.elementType,
	onEnter: q.default.func,
	onEntering: q.default.func,
	onEntered: q.default.func,
	onExit: q.default.func,
	onExiting: q.default.func,
	onExited: q.default.func
};
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Overlay.js
var To = [
	"children",
	"transition",
	"popperConfig"
], Eo = [
	"props",
	"arrowProps",
	"show",
	"update",
	"forceUpdate",
	"placement",
	"state"
], Do = {
	transition: Kr,
	rootClose: !1,
	show: !1,
	placement: "top"
};
function Oo(e, t) {
	var n = e.ref, r = t.ref;
	e.ref = n.__wrapped ||= function(e) {
		return n(io(e));
	}, t.ref = r.__wrapped ||= function(e) {
		return r(io(e));
	};
}
function ko(e) {
	var t = e.children, n = e.transition, r = e.popperConfig, i = r === void 0 ? {} : r, a = Bn(e, To), o = (0, B.useRef)({}), s = xo(), c = s[0], l = s[1], u = n === !0 ? Kr : n || null;
	return /* @__PURE__ */ B.createElement(J, V({}, a, {
		ref: c,
		popperConfig: V({}, i, { modifiers: l.concat(i.modifiers || []) }),
		transition: u
	}), function(e) {
		var r = e.props, i = e.arrowProps, a = e.show, s = e.update;
		e.forceUpdate;
		var c = e.placement, l = e.state, u = Bn(e, Eo);
		Oo(r, i);
		var d = Object.assign(o.current, {
			state: l,
			scheduleUpdate: s,
			placement: c,
			outOfBoundaries: l?.modifiersData.hide?.isReferenceHidden || !1
		});
		return typeof t == "function" ? t(V({}, u, r, {
			placement: c,
			show: a
		}, !n && a && { className: "show" }, {
			popper: d,
			arrowProps: i
		})) : /* @__PURE__ */ B.cloneElement(t, V({}, u, r, {
			placement: c,
			arrowProps: i,
			popper: d,
			className: (0, Vr.default)(t.props.className, !n && a && "show"),
			style: V({}, t.props.style, r.style)
		}));
	});
}
ko.defaultProps = Do;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/OverlayTrigger.js
var Ao = [
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
], jo = /* @__PURE__ */ function(e) {
	Jn(t, e);
	function t() {
		return e.apply(this, arguments) || this;
	}
	var n = t.prototype;
	return n.render = function() {
		return this.props.children;
	}, t;
}(B.Component);
function Mo(e) {
	return e && typeof e == "object" ? e : {
		show: e,
		hide: e
	};
}
function No(e, t, n) {
	var r = t[0], i = r.currentTarget, a = r.relatedTarget || r.nativeEvent[n];
	(!a || a !== i) && !no(i, a) && e.apply(void 0, t);
}
var Po = {
	defaultShow: !1,
	trigger: ["hover", "focus"]
};
function Fo(e) {
	var t = e.trigger, n = e.overlay, r = e.children, i = e.popperConfig, a = i === void 0 ? {} : i, o = e.show, s = e.defaultShow, c = s === void 0 ? !1 : s, l = e.onToggle, u = e.delay, d = e.placement, f = e.flip, p = f === void 0 ? d && d.indexOf("auto") !== -1 : f, m = Bn(e, Ao), h = (0, B.useRef)(null), g = ii(), _ = (0, B.useRef)(""), v = Gn(o, c, l), y = v[0], b = v[1], x = Mo(u), S = typeof r == "function" ? {} : B.Children.only(r).props, C = S.onFocus, w = S.onBlur, T = S.onClick, E = (0, B.useCallback)(function() {
		return io(h.current);
	}, []), D = (0, B.useCallback)(function() {
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
	]), O = (0, B.useCallback)(function() {
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
	]), k = (0, B.useCallback)(function() {
		D();
		var e = [...arguments];
		C?.apply(void 0, e);
	}, [D, C]), ee = (0, B.useCallback)(function() {
		O();
		var e = [...arguments];
		w?.apply(void 0, e);
	}, [O, w]), A = (0, B.useCallback)(function() {
		b(!y), T && T.apply(void 0, arguments);
	}, [
		T,
		b,
		y
	]), j = (0, B.useCallback)(function() {
		No(D, [...arguments], "fromElement");
	}, [D]), M = (0, B.useCallback)(function() {
		No(O, [...arguments], "toElement");
	}, [O]), N = t == null ? [] : [].concat(t), P = {};
	return N.indexOf("click") !== -1 && (P.onClick = A), N.indexOf("focus") !== -1 && (P.onFocus = k, P.onBlur = ee), N.indexOf("hover") !== -1 && (P.onMouseOver = j, P.onMouseOut = M), /* @__PURE__ */ B.createElement(B.Fragment, null, typeof r == "function" ? r(V({}, P, { ref: h })) : /* @__PURE__ */ B.createElement(jo, { ref: h }, /* @__PURE__ */ (0, B.cloneElement)(r, P)), /* @__PURE__ */ B.createElement(ko, V({}, m, {
		show: y,
		onHide: O,
		flip: p,
		placement: d,
		popperConfig: a,
		target: E
	}), n));
}
Fo.defaultProps = Po, So();
var Io = [
	"bsPrefix",
	"placement",
	"className",
	"style",
	"children",
	"arrowProps",
	"popper",
	"show"
], Lo = { placement: "right" }, Ro = /* @__PURE__ */ B.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.placement, i = e.className, a = e.style, o = e.children, s = e.arrowProps;
	e.popper, e.show;
	var c = Bn(e, Io);
	n = $n(n, "tooltip");
	var l = (r?.split("-") || [])[0];
	return /* @__PURE__ */ B.createElement("div", V({
		ref: t,
		style: a,
		role: "tooltip",
		"x-placement": l,
		className: (0, Vr.default)(i, n, "bs-tooltip-" + l)
	}, c), /* @__PURE__ */ B.createElement("div", V({ className: "arrow" }, s)), /* @__PURE__ */ B.createElement("div", { className: n + "-inner" }, o));
});
Ro.defaultProps = Lo, Ro.displayName = "Tooltip";
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/utils/newId.js
var zo = 0, Bo = (e = "id") => (zo += 1, `${e}${zo}`), Vo = /* @__PURE__ */ function(e) {
	return e.MOVED = "MOVED", e.REMOVED = "REMOVED", e.FORMAT = "FORMAT", e.MOVED_AND_FORMAT = "MOVED_AND_FORMAT", e;
}({});
function Ho(e, t, n) {
	class r extends B.Component {
		static displayName = `withDeprecatedProps(${t})`;
		constructor(e) {
			super(e), this.transformProps = this.transformProps.bind(this);
		}
		warn(e) {}
		transformProps(e, r) {
			if (n[r] === void 0) return e[r] = this.props[r], e;
			let { deprType: i, newName: a, expect: o, transform: s, message: c } = n[r];
			switch (i) {
				case Vo.MOVED:
					this.warn(`${t}: The prop '${r}' has been moved to '${a}'.`), e[a] = this.props[r];
					break;
				case Vo.REMOVED:
					this.warn(`${t}: The prop '${r}' has been removed. '${c}'`);
					break;
				case Vo.FORMAT:
					o(this.props[r]) ? e[r] = this.props[r] : (this.warn(`${t}: The prop '${r}' expects a new format. ${c}`), e[r] = s(this.props[r], this.props));
					break;
				case Vo.MOVED_AND_FORMAT: {
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
			return /* @__PURE__ */ B.createElement(e, { ...n }, this.props.children || t);
		}
	}
	return r;
}
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Icon/index.js
function Uo({ src: e, id: t, className: n, hidden: r, screenReaderText: i, svgAttrs: a, size: o, ...s }) {
	if (e) {
		let r = a["aria-label"] || a["aria-labelledby"], c = { ...a };
		return r || (c["aria-label"] = void 0, c["aria-hidden"] = !0), /* @__PURE__ */ B.createElement("span", {
			className: (0, Vr.default)("pgn__icon", { [`pgn__icon__${o}`]: !!o }, n),
			id: t,
			...s
		}, /* @__PURE__ */ B.createElement(e, {
			role: "img",
			focusable: !1,
			...c
		}), i && /* @__PURE__ */ B.createElement("span", { className: "sr-only" }, i));
	}
	return /* @__PURE__ */ B.createElement(B.Fragment, null, /* @__PURE__ */ B.createElement("span", {
		id: t || Bo("Icon"),
		className: n,
		"aria-hidden": r
	}), i && /* @__PURE__ */ B.createElement("span", { className: "sr-only" }, i));
}
Uo.propTypes = {
	src: q.default.elementType,
	svgAttrs: q.default.shape({
		"aria-label": q.default.string,
		"aria-labelledby": q.default.string
	}),
	id: q.default.string,
	size: q.default.oneOf([
		"xs",
		"sm",
		"md",
		"lg"
	]),
	className: q.default.string,
	hidden: q.default.bool,
	screenReaderText: q.default.oneOfType([q.default.string, q.default.element])
}, Uo.defaultProps = {
	src: null,
	svgAttrs: {},
	id: void 0,
	hidden: !0,
	screenReaderText: void 0,
	size: void 0,
	className: void 0
};
var Wo = Ho(Uo, "Icon", { className: {
	deprType: Vo.FORMAT,
	expect: (e) => typeof e == "string",
	transform: (e) => Array.isArray(e) ? e.join(" ") : e,
	message: "It should be a string."
} }), Go = /* @__PURE__ */ B.forwardRef(({ children: e, iconAfter: t, iconBefore: n, size: r, ...i }, a) => /* @__PURE__ */ B.createElement(Qr, {
	size: r,
	...i,
	className: (0, Vr.default)(i.className),
	ref: a
}, n && /* @__PURE__ */ B.createElement(Wo, {
	className: "btn-icon-before",
	size: r,
	src: n
}), e, t && /* @__PURE__ */ B.createElement(Wo, {
	className: "btn-icon-after",
	size: r,
	src: t
}))), Ko = (e) => /* @__PURE__ */ B.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ B.createElement("path", {
	d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2Zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59Z",
	fill: "currentColor"
})), qo = (e) => /* @__PURE__ */ B.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ B.createElement("path", {
	d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8-1.41-1.42Z",
	fill: "currentColor"
})), Jo = (e) => /* @__PURE__ */ B.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ B.createElement("path", {
	d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41Z",
	fill: "currentColor"
})), Yo = (e) => /* @__PURE__ */ B.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ B.createElement("path", {
	d: "M1 21h22L12 2 1 21Zm12-3h-2v-2h2v2Zm0-4h-2v-4h2v4Z",
	fill: "currentColor"
})), Xo = [
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
], Zo = [
	"hover",
	"click",
	"focus"
];
function Qo(e) {
	return /* @__PURE__ */ B.createElement(ko, { ...e });
}
function $o(e) {
	return /* @__PURE__ */ B.createElement(Fo, { ...e }, e.children);
}
var es = q.default.oneOf(Zo);
Qo.propTypes = {
	children: q.default.node.isRequired,
	container: q.default.oneOfType([q.default.elementType, q.default.func]),
	onEnter: q.default.func,
	onEntered: q.default.func,
	onEntering: q.default.func,
	onExit: q.default.func,
	onExited: q.default.func,
	onExiting: q.default.func,
	onHide: q.default.func,
	placement: q.default.oneOf(Xo),
	popperConfig: q.default.shape({}),
	rootClose: q.default.bool,
	rootCloseEvent: q.default.oneOf(["click", "mousedown"]),
	show: q.default.bool,
	target: q.default.oneOfType([q.default.elementType, q.default.func]),
	transition: q.default.oneOfType([q.default.object, q.default.bool])
}, $o.propTypes = {
	children: q.default.oneOfType([q.default.element, q.default.func]).isRequired,
	overlay: q.default.oneOfType([q.default.element, q.default.func]).isRequired,
	defaultShow: q.default.bool,
	delay: q.default.oneOfType([q.default.number, q.default.shape({})]),
	flip: q.default.bool,
	onHide: q.default.func,
	onToggle: q.default.func,
	placement: q.default.oneOf(Xo),
	popperConfig: q.default.shape({}),
	show: q.default.bool,
	target: q.default.instanceOf(EventTarget),
	trigger: q.default.oneOfType([es, q.default.arrayOf(es)])
}, Qo.defaultProps = {
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
	transition: Kr
}, $o.defaultProps = {
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
var ts = [
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
], ns = /* @__PURE__ */ B.forwardRef(({ children: e, variant: t, ...n }, r) => /* @__PURE__ */ B.createElement(Ro, {
	...n,
	className: (0, Vr.default)({ "tooltip-light": t === "light" }, n.className),
	ref: r
}, e));
ns.propTypes = {
	...Ro.propTypes,
	id: q.default.string.isRequired,
	placement: q.default.oneOf(ts),
	arrowProps: q.default.shape({
		ref: q.default.oneOfType([q.default.func, q.default.shape({ current: q.default.element })]),
		style: q.default.shape({})
	}),
	show: q.default.bool,
	popper: q.default.shape({}),
	bsPrefix: q.default.string,
	children: q.default.node,
	className: q.default.string,
	variant: q.default.string
}, ns.defaultProps = {
	...ns.defaultProps,
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
var rs = /* @__PURE__ */ B.forwardRef(({ className: e, alt: t, invertColors: n = !1, icon: r, src: i, iconClassNames: a, onClick: o = () => {}, size: s = "md", variant: c = "primary", iconAs: l = Wo, isActive: u = !1, children: d, ...f }, p) => {
	let m = n ? "inverse-" : "", h = u ? `${c}-` : "", g = l;
	return /* @__PURE__ */ B.createElement("button", {
		"aria-label": t,
		className: (0, Vr.default)("btn-icon", `btn-icon-${m}${c}`, `btn-icon-${s}`, { [`btn-icon-${m}${h}active`]: u }, e),
		onClick: o,
		type: "button",
		ref: p,
		...f
	}, /* @__PURE__ */ B.createElement("span", { className: "btn-icon__icon-container" }, g && /* @__PURE__ */ B.createElement(g, {
		className: (0, Vr.default)("btn-icon__icon", a),
		icon: r,
		src: i
	})));
});
function is({ tooltipPlacement: e = "top", tooltipContent: t, ...n }) {
	let r = n.invertColors ? "inverse-" : "";
	return /* @__PURE__ */ B.createElement($o, {
		placement: e,
		overlay: /* @__PURE__ */ B.createElement(ns, {
			id: `iconbutton-tooltip-${e}`,
			variant: r ? "light" : void 0
		}, t)
	}, /* @__PURE__ */ B.createElement(rs, { ...n }));
}
rs.IconButtonWithTooltip = is;
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Modal/ModalContext.js
var as = /* @__PURE__ */ B.createContext({
	onClose: () => {},
	isOpen: !1,
	isBlocking: !1
});
function os({ onClose: e, isOpen: t, isBlocking: n = !1, children: r = null }) {
	let i = (0, B.useMemo)(() => ({
		onClose: e,
		isOpen: t,
		isBlocking: n
	}), [
		e,
		t,
		n
	]);
	return /* @__PURE__ */ B.createElement(as.Provider, { value: i }, r);
}
//#endregion
//#region node_modules/.pnpm/react-remove-scroll-bar@2.3.8_@types+react@18.3.28_react@18.3.1/node_modules/react-remove-scroll-bar/dist/es2015/constants.js
var ss = "right-scroll-bar-position", cs = "width-before-scroll-bar", ls = "with-scroll-bars-hidden", us = "--removed-body-scroll-bar-size";
//#endregion
//#region node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@18.3.28_react@18.3.1/node_modules/use-callback-ref/dist/es2015/assignRef.js
function ds(e, t) {
	return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
//#endregion
//#region node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@18.3.28_react@18.3.1/node_modules/use-callback-ref/dist/es2015/useRef.js
function fs(e, t) {
	var n = (0, B.useState)(function() {
		return {
			value: e,
			callback: t,
			facade: {
				get current() {
					return n.value;
				},
				set current(e) {
					var t = n.value;
					t !== e && (n.value = e, n.callback(e, t));
				}
			}
		};
	})[0];
	return n.callback = t, n.facade;
}
//#endregion
//#region node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@18.3.28_react@18.3.1/node_modules/use-callback-ref/dist/es2015/useMergeRef.js
var ps = typeof window < "u" ? B.useLayoutEffect : B.useEffect, ms = /* @__PURE__ */ new WeakMap();
function hs(e, t) {
	var n = fs(t || null, function(t) {
		return e.forEach(function(e) {
			return ds(e, t);
		});
	});
	return ps(function() {
		var t = ms.get(n);
		if (t) {
			var r = new Set(t), i = new Set(e), a = n.current;
			r.forEach(function(e) {
				i.has(e) || ds(e, null);
			}), i.forEach(function(e) {
				r.has(e) || ds(e, a);
			});
		}
		ms.set(n, e);
	}, [e]), n;
}
//#endregion
//#region node_modules/.pnpm/use-sidecar@1.1.3_@types+react@18.3.28_react@18.3.1/node_modules/use-sidecar/dist/es2015/medium.js
function gs(e) {
	return e;
}
function _s(e, t) {
	t === void 0 && (t = gs);
	var n = [], r = !1;
	return {
		read: function() {
			if (r) throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
			return n.length ? n[n.length - 1] : e;
		},
		useMedium: function(e) {
			var i = t(e, r);
			return n.push(i), function() {
				n = n.filter(function(e) {
					return e !== i;
				});
			};
		},
		assignSyncMedium: function(e) {
			for (r = !0; n.length;) {
				var t = n;
				n = [], t.forEach(e);
			}
			n = {
				push: function(t) {
					return e(t);
				},
				filter: function() {
					return n;
				}
			};
		},
		assignMedium: function(e) {
			r = !0;
			var t = [];
			if (n.length) {
				var i = n;
				n = [], i.forEach(e), t = n;
			}
			var a = function() {
				var n = t;
				t = [], n.forEach(e);
			}, o = function() {
				return Promise.resolve().then(a);
			};
			o(), n = {
				push: function(e) {
					t.push(e), o();
				},
				filter: function(e) {
					return t = t.filter(e), n;
				}
			};
		}
	};
}
function vs(e, t) {
	return t === void 0 && (t = gs), _s(e, t);
}
function ys(e) {
	e === void 0 && (e = {});
	var t = _s(null);
	return t.options = v({
		async: !0,
		ssr: !1
	}, e), t;
}
//#endregion
//#region node_modules/.pnpm/use-sidecar@1.1.3_@types+react@18.3.28_react@18.3.1/node_modules/use-sidecar/dist/es2015/exports.js
var bs = function(e) {
	var t = e.sideCar, n = y(e, ["sideCar"]);
	if (!t) throw Error("Sidecar: please provide `sideCar` property to import the right car");
	var r = t.read();
	if (!r) throw Error("Sidecar medium not found");
	return B.createElement(r, v({}, n));
};
bs.isSideCarExport = !0;
function xs(e, t) {
	return e.useMedium(t), bs;
}
//#endregion
//#region node_modules/.pnpm/react-remove-scroll@2.7.2_@types+react@18.3.28_react@18.3.1/node_modules/react-remove-scroll/dist/es2015/medium.js
var Ss = ys(), Cs = function() {}, ws = B.forwardRef(function(e, t) {
	var n = B.useRef(null), r = B.useState({
		onScrollCapture: Cs,
		onWheelCapture: Cs,
		onTouchMoveCapture: Cs
	}), i = r[0], a = r[1], o = e.forwardProps, s = e.children, c = e.className, l = e.removeScrollBar, u = e.enabled, d = e.shards, f = e.sideCar, p = e.noRelative, m = e.noIsolation, h = e.inert, g = e.allowPinchZoom, _ = e.as, b = _ === void 0 ? "div" : _, x = e.gapMode, S = y(e, [
		"forwardProps",
		"children",
		"className",
		"removeScrollBar",
		"enabled",
		"shards",
		"sideCar",
		"noRelative",
		"noIsolation",
		"inert",
		"allowPinchZoom",
		"as",
		"gapMode"
	]), C = f, w = hs([n, t]), T = v(v({}, S), i);
	return B.createElement(B.Fragment, null, u && B.createElement(C, {
		sideCar: Ss,
		removeScrollBar: l,
		shards: d,
		noRelative: p,
		noIsolation: m,
		inert: h,
		setCallbacks: a,
		allowPinchZoom: !!g,
		lockRef: n,
		gapMode: x
	}), o ? B.cloneElement(B.Children.only(s), v(v({}, T), { ref: w })) : B.createElement(b, v({}, T, {
		className: c,
		ref: w
	}), s));
});
ws.defaultProps = {
	enabled: !0,
	removeScrollBar: !0,
	inert: !1
}, ws.classNames = {
	fullWidth: cs,
	zeroRight: ss
};
//#endregion
//#region node_modules/.pnpm/focus-lock@1.3.6/node_modules/focus-lock/dist/es2015/constants.js
var Ts = "data-focus-lock", Es = "data-focus-lock-disabled", Ds = "data-no-focus-lock", Os = "data-autofocus-inside", ks = "data-no-autofocus", As = {
	width: "1px",
	height: "0px",
	padding: 0,
	overflow: "hidden",
	position: "fixed",
	top: "1px",
	left: "1px"
}, js = function(e) {
	var t = e.children, n = t === void 0 ? null : t;
	return /* @__PURE__ */ B.createElement(B.Fragment, null, /* @__PURE__ */ B.createElement("div", {
		key: "guard-first",
		"data-focus-guard": !0,
		"data-focus-auto-guard": !0,
		style: As
	}), n, n && /* @__PURE__ */ B.createElement("div", {
		key: "guard-last",
		"data-focus-guard": !0,
		"data-focus-auto-guard": !0,
		style: As
	}));
};
js.propTypes = {};
//#endregion
//#region node_modules/.pnpm/react-focus-lock@2.13.7_@types+react@18.3.28_react@18.3.1/node_modules/react-focus-lock/dist/es2015/medium.js
var Ms = vs({}, function(e) {
	return {
		target: e.target,
		currentTarget: e.currentTarget
	};
}), Ns = vs(), Ps = vs(), Fs = ys({
	async: !0,
	ssr: typeof document < "u"
}), Is = /* @__PURE__ */ (0, B.createContext)(void 0), Ls = [], Rs = /* @__PURE__ */ (0, B.forwardRef)(function(e, t) {
	var n, r = (0, B.useState)(), i = r[0], a = r[1], o = (0, B.useRef)(), s = (0, B.useRef)(!1), c = (0, B.useRef)(null), l = (0, B.useState)({})[1], u = e.children, d = e.disabled, f = d === void 0 ? !1 : d, p = e.noFocusGuards, m = p === void 0 ? !1 : p, h = e.persistentFocus, g = h === void 0 ? !1 : h, _ = e.crossFrame, v = _ === void 0 ? !0 : _, y = e.autoFocus, b = y === void 0 ? !0 : y;
	e.allowTextSelection;
	var x = e.group, S = e.className, C = e.whiteList, w = e.hasPositiveIndices, T = e.shards, E = T === void 0 ? Ls : T, D = e.as, O = D === void 0 ? "div" : D, k = e.lockProps, ee = k === void 0 ? {} : k, A = e.sideCar, j = e.returnFocus, M = j === void 0 ? !1 : j, N = e.focusOptions, P = e.onActivation, F = e.onDeactivation, te = (0, B.useState)({})[0], ne = (0, B.useCallback)(function(e) {
		var t = e.captureFocusRestore;
		if (!c.current) {
			var n = document?.activeElement;
			c.current = n, n !== document.body && (c.current = t(n));
		}
		o.current && P && P(o.current), s.current = !0, l();
	}, [P]), I = (0, B.useCallback)(function() {
		s.current = !1, F && F(o.current), l();
	}, [F]), re = (0, B.useCallback)(function(e) {
		var t = c.current;
		if (t) {
			var n = (typeof t == "function" ? t() : t) || document.body, r = typeof M == "function" ? M(n) : M;
			if (r) {
				var i = typeof r == "object" ? r : void 0;
				c.current = null, e ? Promise.resolve().then(function() {
					return n.focus(i);
				}) : n.focus(i);
			}
		}
	}, [M]), ie = (0, B.useCallback)(function(e) {
		s.current && Ms.useMedium(e);
	}, []), ae = Ns.useMedium, oe = (0, B.useCallback)(function(e) {
		o.current !== e && (o.current = e, a(e));
	}, []), se = V((n = {}, n[Es] = f && "disabled", n[Ts] = x, n), ee), ce = m !== !0, le = ce && m !== "tail", ue = hs([t, oe]), de = (0, B.useMemo)(function() {
		return {
			observed: o,
			shards: E,
			enabled: !f,
			get active() {
				return s.current;
			}
		};
	}, [
		f,
		s,
		E,
		o
	]);
	return /* @__PURE__ */ B.createElement(B.Fragment, null, ce && [/* @__PURE__ */ B.createElement("div", {
		key: "guard-first",
		"data-focus-guard": !0,
		tabIndex: f ? -1 : 0,
		style: As
	}), w ? /* @__PURE__ */ B.createElement("div", {
		key: "guard-nearest",
		"data-focus-guard": !0,
		tabIndex: f ? -1 : 1,
		style: As
	}) : null], !f && /* @__PURE__ */ B.createElement(A, {
		id: te,
		sideCar: Fs,
		observed: i,
		disabled: f,
		persistentFocus: g,
		crossFrame: v,
		autoFocus: b,
		whiteList: C,
		shards: E,
		onActivation: ne,
		onDeactivation: I,
		returnFocus: re,
		focusOptions: N,
		noFocusGuards: m
	}), /* @__PURE__ */ B.createElement(O, V({ ref: ue }, se, {
		className: S,
		onBlur: ae,
		onFocus: ie
	}), /* @__PURE__ */ B.createElement(Is.Provider, { value: de }, u)), le && /* @__PURE__ */ B.createElement("div", {
		"data-focus-guard": !0,
		tabIndex: f ? -1 : 0,
		style: As
	}));
});
Rs.propTypes = {};
//#endregion
//#region node_modules/.pnpm/react-focus-lock@2.13.7_@types+react@18.3.28_react@18.3.1/node_modules/react-focus-lock/dist/es2015/util.js
function zs(e) {
	setTimeout(e, 1);
}
var Bs = function(e) {
	return e && "current" in e ? e.current : e;
}, Vs = Rs, Hs = ys(), Us = "data-focus-on-hidden", Ws = { preventScroll: !0 }, Gs = B.forwardRef(function(e, t) {
	var n = B.useState(!1), r = n[0], i = n[1], a = B.useState(null), o = a[0], s = a[1], c = e.children, l = e.autoFocus, u = e.shards, d = e.crossFrame, f = e.enabled, p = f === void 0 ? !0 : f, m = e.scrollLock, h = m === void 0 ? !0 : m, g = e.focusLock, _ = g === void 0 ? !0 : g, b = e.returnFocus, x = b === void 0 ? !0 : b, S = e.inert, C = e.allowPinchZoom, w = e.sideCar, T = e.className, E = e.shouldIgnore, D = e.preventScrollOnFocus, O = e.style, k = e.as, ee = e.gapMode, A = y(e, [
		"children",
		"autoFocus",
		"shards",
		"crossFrame",
		"enabled",
		"scrollLock",
		"focusLock",
		"returnFocus",
		"inert",
		"allowPinchZoom",
		"sideCar",
		"className",
		"shouldIgnore",
		"preventScrollOnFocus",
		"style",
		"as",
		"gapMode"
	]), j = w, M = v(v({}, r), {
		as: k,
		style: O,
		sideCar: w,
		shards: u,
		allowPinchZoom: C,
		gapMode: ee,
		inert: S,
		enabled: p && h
	}), N = B.useCallback(function(e) {
		s(e);
	}, []), P = B.useCallback(function() {
		s(null);
	}, []);
	return B.createElement(B.Fragment, null, B.createElement(Vs, {
		ref: t,
		sideCar: w,
		disabled: !(p && _),
		returnFocus: x,
		autoFocus: l,
		shards: u,
		crossFrame: d,
		onActivation: N,
		onDeactivation: P,
		className: T,
		whiteList: E,
		lockProps: M,
		focusOptions: D ? Ws : void 0,
		as: ws
	}, c), p && B.createElement(j, v({}, A, {
		sideCar: Hs,
		setLockProps: i,
		shards: u,
		activeNode: o
	})));
});
//#endregion
//#region node_modules/.pnpm/@babel+runtime@7.29.2/node_modules/@babel/runtime/helpers/esm/typeof.js
function Ks(e) {
	"@babel/helpers - typeof";
	return Ks = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, Ks(e);
}
//#endregion
//#region node_modules/.pnpm/@babel+runtime@7.29.2/node_modules/@babel/runtime/helpers/esm/toPrimitive.js
function qs(e, t) {
	if (Ks(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (Ks(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
//#endregion
//#region node_modules/.pnpm/@babel+runtime@7.29.2/node_modules/@babel/runtime/helpers/esm/toPropertyKey.js
function Js(e) {
	var t = qs(e, "string");
	return Ks(t) == "symbol" ? t : t + "";
}
//#endregion
//#region node_modules/.pnpm/@babel+runtime@7.29.2/node_modules/@babel/runtime/helpers/esm/defineProperty.js
function Ys(e, t, n) {
	return (t = Js(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
//#endregion
//#region node_modules/.pnpm/react-clientside-effect@1.2.8_react@18.3.1/node_modules/react-clientside-effect/lib/index.es.js
function Xs(e, t) {
	function n(e) {
		return e.displayName || e.name || "Component";
	}
	return function(r) {
		var i = [], a;
		function o() {
			a = e(i.map(function(e) {
				return e.props;
			})), t(a);
		}
		var s = /* @__PURE__ */ function(e) {
			Jn(t, e);
			function t() {
				return e.apply(this, arguments) || this;
			}
			t.peek = function() {
				return a;
			};
			var n = t.prototype;
			return n.componentDidMount = function() {
				i.push(this), o();
			}, n.componentDidUpdate = function() {
				o();
			}, n.componentWillUnmount = function() {
				var e = i.indexOf(this);
				i.splice(e, 1), o();
			}, n.render = function() {
				return /* @__PURE__ */ B.createElement(r, this.props);
			}, t;
		}(B.PureComponent);
		return Ys(s, "displayName", "SideEffect(" + n(r) + ")"), s;
	};
}
//#endregion
//#region node_modules/.pnpm/focus-lock@1.3.6/node_modules/focus-lock/dist/es2015/utils/array.js
var Zs = function(e) {
	for (var t = Array(e.length), n = 0; n < e.length; ++n) t[n] = e[n];
	return t;
}, Qs = function(e) {
	return Array.isArray(e) ? e : [e];
}, $s = function(e) {
	return Array.isArray(e) ? e[0] : e;
}, ec = function(e) {
	if (e.nodeType !== Node.ELEMENT_NODE) return !1;
	var t = window.getComputedStyle(e, null);
	return !t || !t.getPropertyValue ? !1 : t.getPropertyValue("display") === "none" || t.getPropertyValue("visibility") === "hidden";
}, tc = function(e) {
	return e.parentNode && e.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? e.parentNode.host : e.parentNode;
}, nc = function(e) {
	return e === document || e && e.nodeType === Node.DOCUMENT_NODE;
}, rc = function(e) {
	return e.hasAttribute("inert");
}, ic = function(e, t) {
	return !e || nc(e) || !ec(e) && !rc(e) && t(tc(e));
}, ac = function(e, t) {
	var n = e.get(t);
	if (n !== void 0) return n;
	var r = ic(t, ac.bind(void 0, e));
	return e.set(t, r), r;
}, oc = function(e, t) {
	return e && !nc(e) ? pc(e) ? t(tc(e)) : !1 : !0;
}, sc = function(e, t) {
	var n = e.get(t);
	if (n !== void 0) return n;
	var r = oc(t, sc.bind(void 0, e));
	return e.set(t, r), r;
}, cc = function(e) {
	return e.dataset;
}, lc = function(e) {
	return e.tagName === "BUTTON";
}, uc = function(e) {
	return e.tagName === "INPUT";
}, dc = function(e) {
	return uc(e) && e.type === "radio";
}, fc = function(e) {
	return !((uc(e) || lc(e)) && (e.type === "hidden" || e.disabled));
}, pc = function(e) {
	var t = e.getAttribute(ks);
	return ![
		!0,
		"true",
		""
	].includes(t);
}, mc = function(e) {
	return !!(e && cc(e)?.focusGuard);
}, Y = function(e) {
	return !mc(e);
}, hc = function(e) {
	return !!e;
}, gc = function(e, t) {
	var n = Math.max(0, e.tabIndex), r = Math.max(0, t.tabIndex), i = n - r, a = e.index - t.index;
	if (i) {
		if (!n) return 1;
		if (!r) return -1;
	}
	return i || a;
}, _c = function(e) {
	return e.tabIndex < 0 && !e.hasAttribute("tabindex") ? 0 : e.tabIndex;
}, vc = function(e, t, n) {
	return Zs(e).map(function(e, t) {
		var r = _c(e);
		return {
			node: e,
			index: t,
			tabIndex: n && r === -1 ? (e.dataset || {}).focusGuard ? 0 : -1 : r
		};
	}).filter(function(e) {
		return !t || e.tabIndex >= 0;
	}).sort(gc);
}, yc = [
	"button:enabled",
	"select:enabled",
	"textarea:enabled",
	"input:enabled",
	"a[href]",
	"area[href]",
	"summary",
	"iframe",
	"object",
	"embed",
	"audio[controls]",
	"video[controls]",
	"[tabindex]",
	"[contenteditable]",
	"[autofocus]"
].join(","), bc = `${yc}, [data-focus-guard]`, xc = function(e, t) {
	return Zs((e.shadowRoot || e).children).reduce(function(e, n) {
		return e.concat(n.matches(t ? bc : yc) ? [n] : [], xc(n));
	}, []);
}, Sc = function(e, t) {
	return e instanceof HTMLIFrameElement && e.contentDocument?.body ? Cc([e.contentDocument.body], t) : [e];
}, Cc = function(e, t) {
	return e.reduce(function(e, n) {
		var r, i = xc(n, t), a = (r = []).concat.apply(r, i.map(function(e) {
			return Sc(e, t);
		}));
		return e.concat(a, n.parentNode ? Zs(n.parentNode.querySelectorAll(yc)).filter(function(e) {
			return e === n;
		}) : []);
	}, []);
}, wc = function(e) {
	return Zs(e.querySelectorAll(`[${Os}]`)).map(function(e) {
		return Cc([e]);
	}).reduce(function(e, t) {
		return e.concat(t);
	}, []);
}, Tc = function(e, t) {
	return Zs(e).filter(function(e) {
		return ac(t, e);
	}).filter(function(e) {
		return fc(e);
	});
}, Ec = function(e, t) {
	return t === void 0 && (t = /* @__PURE__ */ new Map()), Zs(e).filter(function(e) {
		return sc(t, e);
	});
}, Dc = function(e, t, n) {
	return vc(Tc(Cc(e, n), t), !0, n);
}, Oc = function(e, t) {
	return vc(Tc(Cc(e), t), !1);
}, kc = function(e, t) {
	return Tc(wc(e), t);
}, Ac = function(e, t) {
	return e.shadowRoot ? Ac(e.shadowRoot, t) : Object.getPrototypeOf(e).contains !== void 0 && Object.getPrototypeOf(e).contains.call(e, t) ? !0 : Zs(e.children).some(function(e) {
		if (e instanceof HTMLIFrameElement) {
			var n = e.contentDocument?.body;
			return n ? Ac(n, t) : !1;
		}
		return Ac(e, t);
	});
}, jc = function(e) {
	for (var t = /* @__PURE__ */ new Set(), n = e.length, r = 0; r < n; r += 1) for (var i = r + 1; i < n; i += 1) {
		var a = e[r].compareDocumentPosition(e[i]);
		(a & Node.DOCUMENT_POSITION_CONTAINED_BY) > 0 && t.add(i), (a & Node.DOCUMENT_POSITION_CONTAINS) > 0 && t.add(r);
	}
	return e.filter(function(e, n) {
		return !t.has(n);
	});
}, Mc = function(e) {
	return e.parentNode ? Mc(e.parentNode) : e;
}, Nc = function(e) {
	return Qs(e).filter(Boolean).reduce(function(e, t) {
		var n = t.getAttribute(Ts);
		return e.push.apply(e, n ? jc(Zs(Mc(t).querySelectorAll(`[${Ts}="${n}"]:not([${Es}="disabled"])`))) : [t]), e;
	}, []);
}, Pc = function(e) {
	try {
		return e();
	} catch {
		return;
	}
}, Fc = function(e) {
	if (e === void 0 && (e = document), !(!e || !e.activeElement)) {
		var t = e.activeElement;
		return t.shadowRoot ? Fc(t.shadowRoot) : t instanceof HTMLIFrameElement && Pc(function() {
			return t.contentWindow.document;
		}) ? Fc(t.contentWindow.document) : t;
	}
}, Ic = function(e, t) {
	return e === t;
}, Lc = function(e, t) {
	return !!Zs(e.querySelectorAll("iframe")).some(function(e) {
		return Ic(e, t);
	});
}, Rc = function(e, t) {
	return t === void 0 && (t = Fc($s(e).ownerDocument)), !t || t.dataset && t.dataset.focusGuard ? !1 : Nc(e).some(function(e) {
		return Ac(e, t) || Lc(e, t);
	});
}, zc = function(e) {
	e === void 0 && (e = document);
	var t = Fc(e);
	return t ? Zs(e.querySelectorAll(`[${Ds}]`)).some(function(e) {
		return Ac(e, t);
	}) : !1;
}, Bc = function(e, t) {
	return t.filter(dc).filter(function(t) {
		return t.name === e.name;
	}).filter(function(e) {
		return e.checked;
	})[0] || e;
}, Vc = function(e, t) {
	return dc(e) && e.name ? Bc(e, t) : e;
}, Hc = function(e) {
	var t = /* @__PURE__ */ new Set();
	return e.forEach(function(n) {
		return t.add(Vc(n, e));
	}), e.filter(function(e) {
		return t.has(e);
	});
}, Uc = function(e) {
	return e[0] && e.length > 1 ? Vc(e[0], e) : e[0];
}, X = function(e, t) {
	return e.indexOf(Vc(t, e));
}, Wc = "NEW_FOCUS", Gc = function(e, t, n, r, i) {
	var a = e.length, o = e[0], s = e[a - 1], c = mc(r);
	if (!(r && e.indexOf(r) >= 0)) {
		var l = r === void 0 ? -1 : n.indexOf(r), u = i ? n.indexOf(i) : l, d = i ? e.indexOf(i) : -1;
		if (l === -1) return d === -1 ? Wc : d;
		if (d === -1) return Wc;
		var f = l - u, p = n.indexOf(o), m = n.indexOf(s), h = Hc(n), g = r === void 0 ? -1 : h.indexOf(r), _ = i ? h.indexOf(i) : g, v = h.filter(function(e) {
			return e.tabIndex >= 0;
		}), y = r === void 0 ? -1 : v.indexOf(r), b = i ? v.indexOf(i) : y, x = y >= 0 && b >= 0 ? b - y : _ - g;
		if (!f && d >= 0 || t.length === 0) return d;
		var S = X(e, t[0]), C = X(e, t[t.length - 1]);
		if (l <= p && c && Math.abs(f) > 1) return C;
		if (l >= m && c && Math.abs(f) > 1) return S;
		if (f && Math.abs(x) > 1) return d;
		if (l <= p) return C;
		if (l > m) return S;
		if (f) return Math.abs(f) > 1 ? d : (a + d + f) % a;
	}
}, Kc = function(e) {
	return function(t) {
		var n = cc(t)?.autofocus;
		return t.autofocus || n !== void 0 && n !== "false" || e.indexOf(t) >= 0;
	};
}, qc = function(e, t, n) {
	var r = Ec(e.map(function(e) {
		return e.node;
	}).filter(Kc(n)));
	return r && r.length ? Uc(r) : Uc(Ec(t));
}, Jc = function(e, t) {
	return t === void 0 && (t = []), t.push(e), e.parentNode && Jc(e.parentNode.host || e.parentNode, t), t;
}, Z = function(e, t) {
	for (var n = Jc(e), r = Jc(t), i = 0; i < n.length; i += 1) {
		var a = n[i];
		if (r.indexOf(a) >= 0) return a;
	}
	return !1;
}, Yc = function(e, t, n) {
	var r = Qs(e), i = Qs(t), a = r[0], o = !1;
	return i.filter(Boolean).forEach(function(e) {
		o = Z(o || e, e) || o, n.filter(Boolean).forEach(function(e) {
			var t = Z(a, e);
			t && (o = !o || Ac(t, o) ? t : Z(t, o));
		});
	}), o;
}, Xc = function(e, t) {
	return e.reduce(function(e, n) {
		return e.concat(kc(n, t));
	}, []);
}, Zc = function(e, t) {
	var n = /* @__PURE__ */ new Map();
	return t.forEach(function(e) {
		return n.set(e.node, e);
	}), e.map(function(e) {
		return n.get(e);
	}).filter(hc);
}, Qc = function(e, t) {
	var n = Fc(Qs(e).length > 0 ? document : $s(e).ownerDocument), r = Nc(e).filter(Y), i = Yc(n || e, e, r), a = /* @__PURE__ */ new Map(), o = Oc(r, a), s = o.filter(function(e) {
		var t = e.node;
		return Y(t);
	});
	if (s[0]) {
		var c = Oc([i], a).map(function(e) {
			return e.node;
		}), l = Zc(c, s), u = l.map(function(e) {
			return e.node;
		}), d = l.filter(function(e) {
			return e.tabIndex >= 0;
		}).map(function(e) {
			return e.node;
		}), f = Gc(u, d, c, n, t);
		if (f === "NEW_FOCUS") {
			var p = qc(o, d, Xc(r, a)) || qc(o, u, Xc(r, a));
			if (p) return { node: p };
			console.warn("focus-lock: cannot find any node to move focus into");
			return;
		}
		return f === void 0 ? f : l[f];
	}
}, $c = function(e) {
	var t = Nc(e).filter(Y), n = vc(Cc([Yc(e, e, t)], !0), !0, !0), r = Cc(t, !1);
	return n.map(function(e) {
		var t = e.node;
		return {
			node: t,
			index: e.index,
			lockItem: r.indexOf(t) >= 0,
			guard: mc(t)
		};
	});
}, el = function(e, t) {
	e && ("focus" in e && e.focus(t), "contentWindow" in e && e.contentWindow && e.contentWindow.focus());
}, tl = 0, nl = !1, rl = function(e, t, n) {
	n === void 0 && (n = {});
	var r = Qc(e, t);
	if (!nl && r) {
		if (tl > 2) {
			console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"), nl = !0, setTimeout(function() {
				nl = !1;
			}, 1);
			return;
		}
		tl++, el(r.node, n.focusOptions), tl--;
	}
};
//#endregion
//#region node_modules/.pnpm/focus-lock@1.3.6/node_modules/focus-lock/dist/es2015/return-focus.js
function il(e) {
	if (!e) return null;
	if (typeof WeakRef > "u") return function() {
		return e || null;
	};
	var t = e ? new WeakRef(e) : null;
	return function() {
		return t?.deref() || null;
	};
}
var al = function(e) {
	if (!e) return null;
	for (var t = [], n = e; n && n !== document.body;) t.push({
		current: il(n),
		parent: il(n.parentElement),
		left: il(n.previousElementSibling),
		right: il(n.nextElementSibling)
	}), n = n.parentElement;
	return {
		element: il(e),
		stack: t,
		ownerDocument: e.ownerDocument
	};
}, ol = function(e) {
	if (e) for (var t = e.stack, n = e.ownerDocument, r = /* @__PURE__ */ new Map(), i = 0, a = t; i < a.length; i++) {
		var o = a[i], s = o.parent?.call(o);
		if (s && n.contains(s)) {
			for (var c = o.left?.call(o), l = o.current(), u = s.contains(l) ? l : void 0, d = o.right?.call(o), f = Dc([s], r), p = u ?? c?.nextElementSibling ?? d ?? c; p;) {
				for (var m = 0, h = f; m < h.length; m++) {
					var g = h[m];
					if (p?.contains(g.node)) return g.node;
				}
				p = p.nextElementSibling;
			}
			if (f.length) return f[0].node;
		}
	}
}, sl = function(e) {
	var t = al(e);
	return function() {
		return ol(t);
	};
}, cl = function(e, t, n) {
	if (!e || !t) return console.error("no element or scope given"), {};
	var r = Qs(t);
	if (r.every(function(t) {
		return !Ac(t, e);
	})) return console.error("Active element is not contained in the scope"), {};
	var i = n ? Dc(r, /* @__PURE__ */ new Map()) : Oc(r, /* @__PURE__ */ new Map()), a = i.findIndex(function(t) {
		return t.node === e;
	});
	if (a !== -1) return {
		prev: i[a - 1],
		next: i[a + 1],
		first: i[0],
		last: i[i.length - 1]
	};
}, ll = function(e, t) {
	var n = t ? Dc(Qs(e), /* @__PURE__ */ new Map()) : Oc(Qs(e), /* @__PURE__ */ new Map());
	return {
		first: n[0],
		last: n[n.length - 1]
	};
}, ul = function(e) {
	return Object.assign({
		scope: document.body,
		cycle: !0,
		onlyTabbable: !0
	}, e);
}, dl = function(e, t, n) {
	t === void 0 && (t = {});
	var r = ul(t), i = cl(e, r.scope, r.onlyTabbable);
	if (i) {
		var a = n(i, r.cycle);
		a && el(a.node, r.focusOptions);
	}
}, fl = function(e, t) {
	t === void 0 && (t = {}), dl(e, t, function(e, t) {
		var n = e.next, r = e.first;
		return n || t && r;
	});
}, pl = function(e, t) {
	t === void 0 && (t = {}), dl(e, t, function(e, t) {
		var n = e.prev, r = e.last;
		return n || t && r;
	});
}, ml = function(e, t, n) {
	var r = ll(e, t.onlyTabbable ?? !0)[n];
	r && el(r.node, t.focusOptions);
}, hl = function(e, t) {
	t === void 0 && (t = {}), ml(e, t, "first");
}, gl = function(e, t) {
	t === void 0 && (t = {}), ml(e, t, "last");
}, _l = function() {
	return document && document.activeElement === document.body;
}, vl = function() {
	return _l() || zc();
}, yl = null, bl = null, xl = function() {
	return null;
}, Sl = null, Cl = !1, wl = !1, Tl = function() {
	return !0;
}, El = function(e) {
	return (yl.whiteList || Tl)(e);
}, Dl = function(e, t) {
	Sl = {
		observerNode: e,
		portaledElement: t
	};
}, Ol = function(e) {
	return Sl && Sl.portaledElement === e;
};
function kl(e, t, n, r) {
	var i = null, a = e;
	do {
		var o = r[a];
		if (o.guard) o.node.dataset.focusAutoGuard && (i = o);
		else if (o.lockItem) {
			if (a !== e) return;
			i = null;
		} else break;
	} while ((a += n) !== t);
	i && (i.node.tabIndex = 0);
}
var Al = function(e) {
	return e ? !!Cl : Cl === "meanwhile";
}, jl = function e(t, n, r) {
	return n && (n.host === t && (!n.activeElement || r.contains(n.activeElement)) || n.parentNode && e(t, n.parentNode, r));
}, Ml = function(e, t) {
	return t.some(function(t) {
		return jl(e, t, t);
	});
}, Nl = function(e) {
	return Oc(e, /* @__PURE__ */ new Map());
}, Pl = function(e) {
	return !Nl([e.parentNode]).some(function(t) {
		return t.node === e;
	});
}, Fl = function() {
	var e = !1;
	if (yl) {
		var t = yl, n = t.observed, r = t.persistentFocus, i = t.autoFocus, a = t.shards, o = t.crossFrame, s = t.focusOptions, c = t.noFocusGuards, l = n || Sl && Sl.portaledElement;
		if (_l() && bl && bl !== document.body && (!document.body.contains(bl) || Pl(bl))) {
			var u = xl();
			u && u.focus();
		}
		var d = document && document.activeElement;
		if (l) {
			var f = [l].concat(a.map(Bs).filter(Boolean));
			if ((!d || El(d)) && (r || function() {
				if (!Al(o) || !c || !bl || wl) return !1;
				var e = Nl(f), t = e.findIndex(function(e) {
					return e.node === bl;
				});
				return t === 0 || t === e.length - 1;
			}() || !vl() || !bl && i) && (l && !(Rc(f) || d && Ml(d, f) || Ol(d, l)) && (document && !bl && d && !i ? (d.blur && d.blur(), document.body.focus()) : (e = rl(f, bl, { focusOptions: s }), Sl = {})), bl = document && document.activeElement, bl !== document.body && (xl = sl(bl)), Cl = !1), document && d !== document.activeElement && document.querySelector("[data-focus-auto-guard]")) {
				var p = document && document.activeElement, m = $c(f), h = m.map(function(e) {
					return e.node;
				}).indexOf(p);
				h > -1 && (m.filter(function(e) {
					var t = e.guard, n = e.node;
					return t && n.dataset.focusAutoGuard;
				}).forEach(function(e) {
					return e.node.removeAttribute("tabIndex");
				}), kl(h, m.length, 1, m), kl(h, -1, -1, m));
			}
		}
	}
	return e;
}, Il = function(e) {
	Fl() && e && (e.stopPropagation(), e.preventDefault());
}, Ll = function() {
	return zs(Fl);
}, Rl = function(e) {
	var t = e.target, n = e.currentTarget;
	n.contains(t) || Dl(n, t);
}, zl = function() {
	return null;
}, Q = function(e) {
	var t = e.children;
	return /* @__PURE__ */ B.createElement("div", {
		onBlur: Ll,
		onFocus: Rl
	}, t);
};
Q.propTypes = {};
var Bl = function() {
	wl = !0;
}, Vl = function() {
	wl = !1, Cl = "just", zs(function() {
		Cl = "meanwhile";
	});
}, Hl = function() {
	document.addEventListener("focusin", Il), document.addEventListener("focusout", Ll), window.addEventListener("focus", Bl), window.addEventListener("blur", Vl);
}, Ul = function() {
	document.removeEventListener("focusin", Il), document.removeEventListener("focusout", Ll), window.removeEventListener("focus", Bl), window.removeEventListener("blur", Vl);
};
function Wl(e) {
	return e.filter(function(e) {
		return !e.disabled;
	});
}
var Gl = {
	moveFocusInside: rl,
	focusInside: Rc,
	focusNextElement: fl,
	focusPrevElement: pl,
	focusFirstElement: hl,
	focusLastElement: gl,
	captureFocusRestore: sl
};
function Kl(e) {
	var t = e.slice(-1)[0];
	t && !yl && Hl();
	var n = yl, r = n && t && t.id === n.id;
	yl = t, n && !r && (n.onDeactivation(), e.filter(function(e) {
		return e.id === n.id;
	}).length || n.returnFocus(!t)), t ? (bl = null, (!r || n.observed !== t.observed) && t.onActivation(Gl), Fl(!0), zs(Fl)) : (Ul(), bl = null);
}
Ms.assignSyncMedium(Rl), Ns.assignMedium(Ll), Ps.assignMedium(function(e) {
	return e(Gl);
}), xs(Fs, Xs(Wl, Kl)(zl));
//#endregion
//#region node_modules/.pnpm/get-nonce@1.0.1/node_modules/get-nonce/dist/es2015/index.js
var ql, Jl = function() {
	if (ql) return ql;
	if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
//#endregion
//#region node_modules/.pnpm/react-style-singleton@2.2.3_@types+react@18.3.28_react@18.3.1/node_modules/react-style-singleton/dist/es2015/singleton.js
function Yl() {
	if (!document) return null;
	var e = document.createElement("style");
	e.type = "text/css";
	var t = Jl();
	return t && e.setAttribute("nonce", t), e;
}
function Xl(e, t) {
	e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function Zl(e) {
	(document.head || document.getElementsByTagName("head")[0]).appendChild(e);
}
var Ql = function() {
	var e = 0, t = null;
	return {
		add: function(n) {
			e == 0 && (t = Yl()) && (Xl(t, n), Zl(t)), e++;
		},
		remove: function() {
			e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
		}
	};
}, $l = function() {
	var e = Ql();
	return function(t, n) {
		B.useEffect(function() {
			return e.add(t), function() {
				e.remove();
			};
		}, [t && n]);
	};
}, eu = function() {
	var e = $l();
	return function(t) {
		var n = t.styles, r = t.dynamic;
		return e(n, r), null;
	};
}, tu = {
	left: 0,
	top: 0,
	right: 0,
	gap: 0
}, nu = function(e) {
	return parseInt(e || "", 10) || 0;
}, ru = function(e) {
	var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], i = t[e === "padding" ? "paddingRight" : "marginRight"];
	return [
		nu(n),
		nu(r),
		nu(i)
	];
}, iu = function(e) {
	if (e === void 0 && (e = "margin"), typeof window > "u") return tu;
	var t = ru(e), n = document.documentElement.clientWidth, r = window.innerWidth;
	return {
		left: t[0],
		top: t[1],
		right: t[2],
		gap: Math.max(0, r - n + t[2] - t[0])
	};
}, au = eu(), ou = "data-scroll-locked", su = function(e, t, n, r) {
	var i = e.left, a = e.top, o = e.right, s = e.gap;
	return n === void 0 && (n = "margin"), `
  .${ls} {
   overflow: hidden ${r};
   padding-right: ${s}px ${r};
  }
  body[${ou}] {
    overflow: hidden ${r};
    overscroll-behavior: contain;
    ${[
		t && `position: relative ${r};`,
		n === "margin" && `
    padding-left: ${i}px;
    padding-top: ${a}px;
    padding-right: ${o}px;
    margin-left:0;
    margin-top:0;
    margin-right: ${s}px ${r};
    `,
		n === "padding" && `padding-right: ${s}px ${r};`
	].filter(Boolean).join("")}
  }
  
  .${ss} {
    right: ${s}px ${r};
  }
  
  .${cs} {
    margin-right: ${s}px ${r};
  }
  
  .${ss} .${ss} {
    right: 0 ${r};
  }
  
  .${cs} .${cs} {
    margin-right: 0 ${r};
  }
  
  body[${ou}] {
    ${us}: ${s}px;
  }
`;
}, cu = function() {
	var e = parseInt(document.body.getAttribute("data-scroll-locked") || "0", 10);
	return isFinite(e) ? e : 0;
}, lu = function() {
	B.useEffect(function() {
		return document.body.setAttribute(ou, (cu() + 1).toString()), function() {
			var e = cu() - 1;
			e <= 0 ? document.body.removeAttribute(ou) : document.body.setAttribute(ou, e.toString());
		};
	}, []);
}, uu = function(e) {
	var t = e.noRelative, n = e.noImportant, r = e.gapMode, i = r === void 0 ? "margin" : r;
	lu();
	var a = B.useMemo(function() {
		return iu(i);
	}, [i]);
	return B.createElement(au, { styles: su(a, !t, i, n ? "" : "!important") });
}, du = !1;
if (typeof window < "u") try {
	var fu = Object.defineProperty({}, "passive", { get: function() {
		return du = !0, !0;
	} });
	window.addEventListener("test", fu, fu), window.removeEventListener("test", fu, fu);
} catch {
	du = !1;
}
var pu = du ? { passive: !1 } : !1, mu = function(e) {
	return e.tagName === "TEXTAREA";
}, hu = function(e, t) {
	if (!(e instanceof Element)) return !1;
	var n = window.getComputedStyle(e);
	return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !mu(e) && n[t] === "visible");
}, gu = function(e) {
	return hu(e, "overflowY");
}, _u = function(e) {
	return hu(e, "overflowX");
}, vu = function(e, t) {
	var n = t.ownerDocument, r = t;
	do {
		if (typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host), xu(e, r)) {
			var i = Su(e, r);
			if (i[1] > i[2]) return !0;
		}
		r = r.parentNode;
	} while (r && r !== n.body);
	return !1;
}, yu = function(e) {
	return [
		e.scrollTop,
		e.scrollHeight,
		e.clientHeight
	];
}, bu = function(e) {
	return [
		e.scrollLeft,
		e.scrollWidth,
		e.clientWidth
	];
}, xu = function(e, t) {
	return e === "v" ? gu(t) : _u(t);
}, Su = function(e, t) {
	return e === "v" ? yu(t) : bu(t);
}, Cu = function(e, t) {
	return e === "h" && t === "rtl" ? -1 : 1;
}, wu = function(e, t, n, r, i) {
	var a = Cu(e, window.getComputedStyle(t).direction), o = a * r, s = n.target, c = t.contains(s), l = !1, u = o > 0, d = 0, f = 0;
	do {
		if (!s) break;
		var p = Su(e, s), m = p[0], h = p[1] - p[2] - a * m;
		(m || h) && xu(e, s) && (d += h, f += m);
		var g = s.parentNode;
		s = g && g.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? g.host : g;
	} while (!c && s !== document.body || c && (t.contains(s) || t === s));
	return (u && (i && Math.abs(d) < 1 || !i && o > d) || !u && (i && Math.abs(f) < 1 || !i && -o > f)) && (l = !0), l;
}, Tu = function(e) {
	return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Eu = function(e) {
	return [e.deltaX, e.deltaY];
}, Du = function(e) {
	return e && "current" in e ? e.current : e;
}, Ou = function(e, t) {
	return e[0] === t[0] && e[1] === t[1];
}, ku = function(e) {
	return `
  .block-interactivity-${e} {pointer-events: none;}
  .allow-interactivity-${e} {pointer-events: all;}
`;
}, Au = 0, ju = [];
function Mu(e) {
	var t = B.useRef([]), n = B.useRef([0, 0]), r = B.useRef(), i = B.useState(Au++)[0], a = B.useState(eu)[0], o = B.useRef(e);
	B.useEffect(function() {
		o.current = e;
	}, [e]), B.useEffect(function() {
		if (e.inert) {
			document.body.classList.add(`block-interactivity-${i}`);
			var t = x([e.lockRef.current], (e.shards || []).map(Du), !0).filter(Boolean);
			return t.forEach(function(e) {
				return e.classList.add(`allow-interactivity-${i}`);
			}), function() {
				document.body.classList.remove(`block-interactivity-${i}`), t.forEach(function(e) {
					return e.classList.remove(`allow-interactivity-${i}`);
				});
			};
		}
	}, [
		e.inert,
		e.lockRef.current,
		e.shards
	]);
	var s = B.useCallback(function(e, t) {
		if ("touches" in e && e.touches.length === 2 || e.type === "wheel" && e.ctrlKey) return !o.current.allowPinchZoom;
		var i = Tu(e), a = n.current, s = "deltaX" in e ? e.deltaX : a[0] - i[0], c = "deltaY" in e ? e.deltaY : a[1] - i[1], l, u = e.target, d = Math.abs(s) > Math.abs(c) ? "h" : "v";
		if ("touches" in e && d === "h" && u.type === "range") return !1;
		var f = window.getSelection(), p = f && f.anchorNode;
		if (p && (p === u || p.contains(u))) return !1;
		var m = vu(d, u);
		if (!m) return !0;
		if (m ? l = d : (l = d === "v" ? "h" : "v", m = vu(d, u)), !m) return !1;
		if (!r.current && "changedTouches" in e && (s || c) && (r.current = l), !l) return !0;
		var h = r.current || l;
		return wu(h, t, e, h === "h" ? s : c, !0);
	}, []), c = B.useCallback(function(e) {
		var n = e;
		if (!(!ju.length || ju[ju.length - 1] !== a)) {
			var r = "deltaY" in n ? Eu(n) : Tu(n), i = t.current.filter(function(e) {
				return e.name === n.type && (e.target === n.target || n.target === e.shadowParent) && Ou(e.delta, r);
			})[0];
			if (i && i.should) {
				n.cancelable && n.preventDefault();
				return;
			}
			if (!i) {
				var c = (o.current.shards || []).map(Du).filter(Boolean).filter(function(e) {
					return e.contains(n.target);
				});
				(c.length > 0 ? s(n, c[0]) : !o.current.noIsolation) && n.cancelable && n.preventDefault();
			}
		}
	}, []), l = B.useCallback(function(e, n, r, i) {
		var a = {
			name: e,
			delta: n,
			target: r,
			should: i,
			shadowParent: Nu(r)
		};
		t.current.push(a), setTimeout(function() {
			t.current = t.current.filter(function(e) {
				return e !== a;
			});
		}, 1);
	}, []), u = B.useCallback(function(e) {
		n.current = Tu(e), r.current = void 0;
	}, []), d = B.useCallback(function(t) {
		l(t.type, Eu(t), t.target, s(t, e.lockRef.current));
	}, []), f = B.useCallback(function(t) {
		l(t.type, Tu(t), t.target, s(t, e.lockRef.current));
	}, []);
	B.useEffect(function() {
		return ju.push(a), e.setCallbacks({
			onScrollCapture: d,
			onWheelCapture: d,
			onTouchMoveCapture: f
		}), document.addEventListener("wheel", c, pu), document.addEventListener("touchmove", c, pu), document.addEventListener("touchstart", u, pu), function() {
			ju = ju.filter(function(e) {
				return e !== a;
			}), document.removeEventListener("wheel", c, pu), document.removeEventListener("touchmove", c, pu), document.removeEventListener("touchstart", u, pu);
		};
	}, []);
	var p = e.removeScrollBar, m = e.inert;
	return B.createElement(B.Fragment, null, m ? B.createElement(a, { styles: ku(i) }) : null, p ? B.createElement(uu, {
		noRelative: e.noRelative,
		gapMode: e.gapMode
	}) : null);
}
function Nu(e) {
	for (var t = null; e !== null;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
	return t;
}
xs(Ss, Mu);
//#endregion
//#region node_modules/.pnpm/aria-hidden@1.2.6/node_modules/aria-hidden/dist/es2015/index.js
var Pu = function(e) {
	return typeof document > "u" ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body;
}, Fu = /* @__PURE__ */ new WeakMap(), Iu = /* @__PURE__ */ new WeakMap(), Lu = {}, Ru = 0, zu = function(e) {
	return e && (e.host || zu(e.parentNode));
}, Bu = function(e, t) {
	return t.map(function(t) {
		if (e.contains(t)) return t;
		var n = zu(t);
		return n && e.contains(n) ? n : (console.error("aria-hidden", t, "in not contained inside", e, ". Doing nothing"), null);
	}).filter(function(e) {
		return !!e;
	});
}, Vu = function(e, t, n, r) {
	var i = Bu(t, Array.isArray(e) ? e : [e]);
	Lu[n] || (Lu[n] = /* @__PURE__ */ new WeakMap());
	var a = Lu[n], o = [], s = /* @__PURE__ */ new Set(), c = new Set(i), l = function(e) {
		!e || s.has(e) || (s.add(e), l(e.parentNode));
	};
	i.forEach(l);
	var u = function(e) {
		!e || c.has(e) || Array.prototype.forEach.call(e.children, function(e) {
			if (s.has(e)) u(e);
			else try {
				var t = e.getAttribute(r), i = t !== null && t !== "false", c = (Fu.get(e) || 0) + 1, l = (a.get(e) || 0) + 1;
				Fu.set(e, c), a.set(e, l), o.push(e), c === 1 && i && Iu.set(e, !0), l === 1 && e.setAttribute(n, "true"), i || e.setAttribute(r, "true");
			} catch (t) {
				console.error("aria-hidden: cannot operate on ", e, t);
			}
		});
	};
	return u(t), s.clear(), Ru++, function() {
		o.forEach(function(e) {
			var t = Fu.get(e) - 1, i = a.get(e) - 1;
			Fu.set(e, t), a.set(e, i), t || (Iu.has(e) || e.removeAttribute(r), Iu.delete(e)), i || e.removeAttribute(n);
		}), Ru--, Ru || (Fu = /* @__PURE__ */ new WeakMap(), Fu = /* @__PURE__ */ new WeakMap(), Iu = /* @__PURE__ */ new WeakMap(), Lu = {});
	};
}, Hu = function(e, t, n) {
	n === void 0 && (n = "data-aria-hidden");
	var r = Array.from(Array.isArray(e) ? e : [e]), i = t || Pu(e);
	return i ? (r.push.apply(r, Array.from(i.querySelectorAll("[aria-live], script"))), Vu(r, i, n, "aria-hidden")) : function() {
		return null;
	};
}, Uu = eu(), Wu = "\n [" + Us + "] {\n   pointer-events: none !important;\n }\n", Gu = function() {
	return B.createElement(Uu, { styles: Wu });
}, Ku = function(e) {
	return "current" in e ? e.current : e;
};
function qu(e) {
	var t = e.setLockProps, n = e.onEscapeKey, r = e.onClickOutside, i = e.shards, a = e.onActivation, o = e.onDeactivation, s = e.noIsolation, c = e.activeNode, l = (0, B.useRef)(null), u = (0, B.useRef)(0);
	return B.useEffect(function() {
		var e = function(e) {
			e.defaultPrevented || (e.code === "Escape" || e.key === "Escape" || e.keyCode === 27) && n && n(e);
		}, t = function(e) {
			e.defaultPrevented || e.target === l.current || e instanceof MouseEvent && e.button !== 0 || i && i.map(Ku).some(function(t) {
				return t && t.contains(e.target) || t === e.target;
			}) || r && r(e);
		}, a = function(e) {
			t(e), u.current = e.touches.length;
		}, o = function(e) {
			u.current = e.touches.length;
		};
		if (c) return c.ownerDocument.addEventListener("keydown", e), c.ownerDocument.addEventListener("mousedown", t), c.ownerDocument.addEventListener("touchstart", a), c.ownerDocument.addEventListener("touchend", o), function() {
			c.ownerDocument.removeEventListener("keydown", e), c.ownerDocument.removeEventListener("mousedown", t), c.ownerDocument.removeEventListener("touchstart", a), c.ownerDocument.removeEventListener("touchend", o);
		};
	}, [
		c,
		r,
		n
	]), (0, B.useEffect)(function() {
		if (c) return a && a(c), function() {
			o && o();
		};
	}, [!!c]), (0, B.useEffect)(function() {
		if (!(s || !c)) return Hu(b([c], (i || []).map(Ku)), c.ownerDocument.body, Us);
	}, [c, s]), (0, B.useEffect)(function() {
		return t({
			onMouseDown: function(e) {
				l.current = e.target;
			},
			onTouchStart: function(e) {
				l.current = e.target;
			}
		}), function() {
			t(!1);
		};
	}, []), B.createElement(Gu, null);
}
//#endregion
//#region node_modules/.pnpm/react-focus-on@3.10.2_@types+react@18.3.28_react@18.3.1/node_modules/react-focus-on/dist/es2015/sidecar.js
var Ju = xs(Hs, qu), Yu = function(e) {
	return B.createElement(Ju, v({}, e));
}, Xu = B.forwardRef(function(e, t) {
	return B.createElement(Gs, v({}, e, {
		ref: t,
		sideCar: Yu
	}));
}), Zu = class extends B.Component {
	constructor(e) {
		// istanbul ignore if
		if (super(e), this.rootName = "paragon-portal-root", typeof document > "u") this.rootElement = null;
		else if (document.getElementById(this.rootName)) this.rootElement = document.getElementById(this.rootName);
		else {
			let e = document.createElement("div");
			e.setAttribute("id", this.rootName), this.rootElement = document.body.appendChild(e);
		}
	}
	render() {
		// istanbul ignore next
		return this.rootElement ? /* @__PURE__ */ gr.createPortal(this.props.children, this.rootElement) : null;
	}
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Modal/ModalLayer.js
function Qu({ onClick: e }) {
	return /* @__PURE__ */ B.createElement("div", {
		className: "pgn__modal-backdrop",
		onClick: e,
		onKeyDown: e,
		"data-testid": "modal-backdrop",
		role: "presentation"
	});
}
// istanbul ignore next
function $u({ children: e = null }) {
	return /* @__PURE__ */ B.createElement("div", { className: "pgn__modal-content-container" }, e);
}
function ed({ children: e, onClose: t, isOpen: n, isBlocking: r = !1, zIndex: i }) {
	if ((0, B.useEffect)(() => (n ? document.body.classList.add("pgn__hidden-scroll-padding-right") : document.body.classList.remove("pgn__hidden-scroll-padding-right"), () => {
		document.body.classList.remove("pgn__hidden-scroll-padding-right");
	}), [n]), !n) return null;
	let a = r ? void 0 : t;
	return /* @__PURE__ */ B.createElement(os, {
		onClose: t,
		isOpen: n,
		isBlocking: r
	}, /* @__PURE__ */ B.createElement(Zu, null, /* @__PURE__ */ B.createElement(Xu, {
		allowPinchZoom: !0,
		scrollLock: !0,
		enabled: n,
		onEscapeKey: a,
		onClickOutside: a,
		className: (0, Vr.default)("pgn__modal-layer", i ? `zindex-${i}` : "")
	}, /* @__PURE__ */ B.createElement($u, null, /* @__PURE__ */ B.createElement(Qu, { onClick: a }), e))));
}
//#endregion
//#region src/unfolding-scenario-block/variants.ts
var td = [
	{
		id: "primary-navy",
		category: "primary",
		label: "Navy",
		tokens: {
			"--color-bg-main": "var(--pgn-wgu-color-background-main-navy, #002855)",
			"--color-bg-emphasis": "var(--pgn-wgu-color-navy-900, #001124)",
			"--color-txt-content": "var(--pgn-wgu-color-text-pure-white, #ffffff)"
		},
		swatch: {
			background: "var(--pgn-wgu-color-background-main-navy, #002855)",
			foregrounds: ["var(--pgn-wgu-color-text-pure-white, #ffffff)", "var(--pgn-wgu-color-navy-200, #8a9cb1)"]
		}
	},
	{
		id: "primary-blue",
		category: "primary",
		label: "Blue",
		tokens: {
			"--color-bg-main": "var(--pgn-wgu-color-background-main-blue, #0070f0)",
			"--color-bg-emphasis": "var(--pgn-wgu-color-blue-800, #003e84)",
			"--color-txt-content": "var(--pgn-wgu-color-text-pure-white, #ffffff)"
		},
		swatch: {
			background: "var(--pgn-wgu-color-background-main-blue, #0070f0)",
			foregrounds: ["var(--pgn-wgu-color-text-pure-white, #ffffff)", "var(--pgn-wgu-color-navy-200, #8a9cb1)"]
		}
	},
	{
		id: "primary-lake",
		category: "primary",
		label: "Lake",
		tokens: {
			"--color-bg-main": "var(--pgn-wgu-color-background-main-lake, #46b1ef)",
			"--color-bg-emphasis": "var(--pgn-wgu-color-lake-900, #1d4a64)",
			"--color-txt-content": "var(--pgn-wgu-color-text-main-navy, #002855)"
		},
		swatch: {
			background: "var(--pgn-wgu-color-background-main-lake, #46b1ef)",
			foregrounds: ["var(--pgn-wgu-color-text-main-navy, #002855)", "var(--pgn-wgu-color-text-pure-white, #ffffff)"]
		}
	}
], nd = (e) => td.find((t) => t.id === e), rd = (e) => {
	let t = nd(e);
	return t ? t.tokens : void 0;
};
//#endregion
export { fr as A, Pn as B, to as C, Yr as D, Qr as E, Bn as F, fn as G, kn as H, V as I, o as J, m as K, zn as L, Kn as M, Gn as N, Br as O, Vn as P, Mn as R, ro as S, H as T, Dn as U, Rn as V, gn as W, c as Y, So as _, $u as a, go as b, as as c, Jo as d, qo as f, Bo as g, Wo as h, Qu as i, $n as j, Or as k, rs as l, Go as m, rd as n, ed as o, Ko as p, u as q, nd as r, Xu as s, td as t, Yo as u, xo as v, si as w, po as x, K as y, Ln as z };
