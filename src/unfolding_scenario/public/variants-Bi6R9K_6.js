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
		if (e = zi(e)) {
			if (typeof Ve != "function") throw Error(r(280));
			var t = e.stateNode;
			t && (t = Vi(t), Ve(e.stateNode, e.type, t));
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
		var i = Vi(n);
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
	function R(e) {
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
	function ct(e) {
		if (e.tag === 13) {
			var t = e.memoizedState;
			if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
		}
		return null;
	}
	function lt(e) {
		if (R(e) !== e) throw Error(r(188));
	}
	function ut(e) {
		var t = e.alternate;
		if (!t) {
			if (t = R(e), t === null) throw Error(r(188));
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
					if (o === n) return lt(a), e;
					if (o === i) return lt(a), t;
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
	function dt(e) {
		return e = ut(e), e === null ? null : ft(e);
	}
	function ft(e) {
		if (e.tag === 5 || e.tag === 6) return e;
		for (e = e.child; e !== null;) {
			var t = ft(e);
			if (t !== null) return t;
			e = e.sibling;
		}
		return null;
	}
	var pt = n.unstable_scheduleCallback, mt = n.unstable_cancelCallback, ht = n.unstable_shouldYield, gt = n.unstable_requestPaint, z = n.unstable_now, _t = n.unstable_getCurrentPriorityLevel, vt = n.unstable_ImmediatePriority, yt = n.unstable_UserBlockingPriority, bt = n.unstable_NormalPriority, xt = n.unstable_LowPriority, St = n.unstable_IdlePriority, Ct = null, wt = null;
	function Tt(e) {
		if (wt && typeof wt.onCommitFiberRoot == "function") try {
			wt.onCommitFiberRoot(Ct, e, void 0, (e.current.flags & 128) == 128);
		} catch {}
	}
	var Et = Math.clz32 ? Math.clz32 : kt, Dt = Math.log, Ot = Math.LN2;
	function kt(e) {
		return e >>>= 0, e === 0 ? 32 : 31 - (Dt(e) / Ot | 0) | 0;
	}
	var At = 64, jt = 4194304;
	function Mt(e) {
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
	function Nt(e, t) {
		var n = e.pendingLanes;
		if (n === 0) return 0;
		var r = 0, i = e.suspendedLanes, a = e.pingedLanes, o = n & 268435455;
		if (o !== 0) {
			var s = o & ~i;
			s === 0 ? (a &= o, a !== 0 && (r = Mt(a))) : r = Mt(s);
		} else o = n & ~i, o === 0 ? a !== 0 && (r = Mt(a)) : r = Mt(o);
		if (r === 0) return 0;
		if (t !== 0 && t !== r && (t & i) === 0 && (i = r & -r, a = t & -t, i >= a || i === 16 && a & 4194240)) return t;
		if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t;) n = 31 - Et(t), i = 1 << n, r |= e[n], t &= ~i;
		return r;
	}
	function Pt(e, t) {
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
	function Ft(e, t) {
		for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, a = e.pendingLanes; 0 < a;) {
			var o = 31 - Et(a), s = 1 << o, c = i[o];
			c === -1 ? ((s & n) === 0 || (s & r) !== 0) && (i[o] = Pt(s, t)) : c <= t && (e.expiredLanes |= s), a &= ~s;
		}
	}
	function It(e) {
		return e = e.pendingLanes & -1073741825, e === 0 ? e & 1073741824 ? 1073741824 : 0 : e;
	}
	function Lt() {
		var e = At;
		return At <<= 1, !(At & 4194240) && (At = 64), e;
	}
	function Rt(e) {
		for (var t = [], n = 0; 31 > n; n++) t.push(e);
		return t;
	}
	function zt(e, t, n) {
		e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Et(t), e[t] = n;
	}
	function Bt(e, t) {
		var n = e.pendingLanes & ~t;
		e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
		var r = e.eventTimes;
		for (e = e.expirationTimes; 0 < n;) {
			var i = 31 - Et(n), a = 1 << i;
			t[i] = 0, r[i] = -1, e[i] = -1, n &= ~a;
		}
	}
	function Vt(e, t) {
		var n = e.entangledLanes |= t;
		for (e = e.entanglements; n;) {
			var r = 31 - Et(n), i = 1 << r;
			i & t | e[r] & t && (e[r] |= t), n &= ~i;
		}
	}
	var B = 0;
	function Ht(e) {
		return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
	}
	var Ut, Wt, Gt, Kt, qt, Jt = !1, Yt = [], Xt = null, Zt = null, Qt = null, $t = /* @__PURE__ */ new Map(), en = /* @__PURE__ */ new Map(), tn = [], nn = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
	function rn(e, t) {
		switch (e) {
			case "focusin":
			case "focusout":
				Xt = null;
				break;
			case "dragenter":
			case "dragleave":
				Zt = null;
				break;
			case "mouseover":
			case "mouseout":
				Qt = null;
				break;
			case "pointerover":
			case "pointerout":
				$t.delete(t.pointerId);
				break;
			case "gotpointercapture":
			case "lostpointercapture": en.delete(t.pointerId);
		}
	}
	function V(e, t, n, r, i, a) {
		return e === null || e.nativeEvent !== a ? (e = {
			blockedOn: t,
			domEventName: n,
			eventSystemFlags: r,
			nativeEvent: a,
			targetContainers: [i]
		}, t !== null && (t = zi(t), t !== null && Wt(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
	}
	function an(e, t, n, r, i) {
		switch (t) {
			case "focusin": return Xt = V(Xt, e, t, n, r, i), !0;
			case "dragenter": return Zt = V(Zt, e, t, n, r, i), !0;
			case "mouseover": return Qt = V(Qt, e, t, n, r, i), !0;
			case "pointerover":
				var a = i.pointerId;
				return $t.set(a, V($t.get(a) || null, e, t, n, r, i)), !0;
			case "gotpointercapture": return a = i.pointerId, en.set(a, V(en.get(a) || null, e, t, n, r, i)), !0;
		}
		return !1;
	}
	function on(e) {
		var t = Ri(e.target);
		if (t !== null) {
			var n = R(t);
			if (n !== null) {
				if (t = n.tag, t === 13) {
					if (t = ct(n), t !== null) {
						e.blockedOn = t, qt(e.priority, function() {
							Gt(n);
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
	function sn(e) {
		if (e.blockedOn !== null) return !1;
		for (var t = e.targetContainers; 0 < t.length;) {
			var n = vn(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
			if (n === null) {
				n = e.nativeEvent;
				var r = new n.constructor(n.type, n);
				ze = r, n.target.dispatchEvent(r), ze = null;
			} else return t = zi(n), t !== null && Wt(t), e.blockedOn = n, !1;
			t.shift();
		}
		return !0;
	}
	function cn(e, t, n) {
		sn(e) && n.delete(t);
	}
	function ln() {
		Jt = !1, Xt !== null && sn(Xt) && (Xt = null), Zt !== null && sn(Zt) && (Zt = null), Qt !== null && sn(Qt) && (Qt = null), $t.forEach(cn), en.forEach(cn);
	}
	function un(e, t) {
		e.blockedOn === t && (e.blockedOn = null, Jt || (Jt = !0, n.unstable_scheduleCallback(n.unstable_NormalPriority, ln)));
	}
	function dn(e) {
		function t(t) {
			return un(t, e);
		}
		if (0 < Yt.length) {
			un(Yt[0], e);
			for (var n = 1; n < Yt.length; n++) {
				var r = Yt[n];
				r.blockedOn === e && (r.blockedOn = null);
			}
		}
		for (Xt !== null && un(Xt, e), Zt !== null && un(Zt, e), Qt !== null && un(Qt, e), $t.forEach(t), en.forEach(t), n = 0; n < tn.length; n++) r = tn[n], r.blockedOn === e && (r.blockedOn = null);
		for (; 0 < tn.length && (n = tn[0], n.blockedOn === null);) on(n), n.blockedOn === null && tn.shift();
	}
	var fn = C.ReactCurrentBatchConfig, pn = !0;
	function mn(e, t, n, r) {
		var i = B, a = fn.transition;
		fn.transition = null;
		try {
			B = 1, gn(e, t, n, r);
		} finally {
			B = i, fn.transition = a;
		}
	}
	function hn(e, t, n, r) {
		var i = B, a = fn.transition;
		fn.transition = null;
		try {
			B = 4, gn(e, t, n, r);
		} finally {
			B = i, fn.transition = a;
		}
	}
	function gn(e, t, n, r) {
		if (pn) {
			var i = vn(e, t, n, r);
			if (i === null) ui(e, t, r, _n, n), rn(e, r);
			else if (an(i, e, t, n, r)) r.stopPropagation();
			else if (rn(e, r), t & 4 && -1 < nn.indexOf(e)) {
				for (; i !== null;) {
					var a = zi(i);
					if (a !== null && Ut(a), a = vn(e, t, n, r), a === null && ui(e, t, r, _n, n), a === i) break;
					i = a;
				}
				i !== null && r.stopPropagation();
			} else ui(e, t, r, null, n);
		}
	}
	var _n = null;
	function vn(e, t, n, r) {
		if (_n = null, e = Be(r), e = Ri(e), e !== null) if (t = R(e), t === null) e = null;
		else if (n = t.tag, n === 13) {
			if (e = ct(t), e !== null) return e;
			e = null;
		} else if (n === 3) {
			if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
			e = null;
		} else t !== e && (e = null);
		return _n = e, null;
	}
	function yn(e) {
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
			case "message": switch (_t()) {
				case vt: return 1;
				case yt: return 4;
				case bt:
				case xt: return 16;
				case St: return 536870912;
				default: return 16;
			}
			default: return 16;
		}
	}
	var bn = null, xn = null, Sn = null;
	function Cn() {
		if (Sn) return Sn;
		var e, t = xn, n = t.length, r, i = "value" in bn ? bn.value : bn.textContent, a = i.length;
		for (e = 0; e < n && t[e] === i[e]; e++);
		var o = n - e;
		for (r = 1; r <= o && t[n - r] === i[a - r]; r++);
		return Sn = i.slice(e, 1 < r ? 1 - r : void 0);
	}
	function wn(e) {
		var t = e.keyCode;
		return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
	}
	function Tn() {
		return !0;
	}
	function En() {
		return !1;
	}
	function Dn(e) {
		function t(t, n, r, i, a) {
			for (var o in this._reactName = t, this._targetInst = r, this.type = n, this.nativeEvent = i, this.target = a, this.currentTarget = null, e) e.hasOwnProperty(o) && (t = e[o], this[o] = t ? t(i) : i[o]);
			return this.isDefaultPrevented = (i.defaultPrevented == null ? !1 === i.returnValue : i.defaultPrevented) ? Tn : En, this.isPropagationStopped = En, this;
		}
		return I(t.prototype, {
			preventDefault: function() {
				this.defaultPrevented = !0;
				var e = this.nativeEvent;
				e && (e.preventDefault ? e.preventDefault() : typeof e.returnValue != "unknown" && (e.returnValue = !1), this.isDefaultPrevented = Tn);
			},
			stopPropagation: function() {
				var e = this.nativeEvent;
				e && (e.stopPropagation ? e.stopPropagation() : typeof e.cancelBubble != "unknown" && (e.cancelBubble = !0), this.isPropagationStopped = Tn);
			},
			persist: function() {},
			isPersistent: Tn
		}), t;
	}
	var On = {
		eventPhase: 0,
		bubbles: 0,
		cancelable: 0,
		timeStamp: function(e) {
			return e.timeStamp || Date.now();
		},
		defaultPrevented: 0,
		isTrusted: 0
	}, kn = Dn(On), An = I({}, On, {
		view: 0,
		detail: 0
	}), jn = Dn(An), Mn, Nn, Pn, Fn = I({}, An, {
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
		getModifierState: Gn,
		button: 0,
		buttons: 0,
		relatedTarget: function(e) {
			return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
		},
		movementX: function(e) {
			return "movementX" in e ? e.movementX : (e !== Pn && (Pn && e.type === "mousemove" ? (Mn = e.screenX - Pn.screenX, Nn = e.screenY - Pn.screenY) : Nn = Mn = 0, Pn = e), Mn);
		},
		movementY: function(e) {
			return "movementY" in e ? e.movementY : Nn;
		}
	}), In = Dn(Fn), Ln = Dn(I({}, Fn, { dataTransfer: 0 })), Rn = Dn(I({}, An, { relatedTarget: 0 })), zn = Dn(I({}, On, {
		animationName: 0,
		elapsedTime: 0,
		pseudoElement: 0
	})), Bn = Dn(I({}, On, { clipboardData: function(e) {
		return "clipboardData" in e ? e.clipboardData : window.clipboardData;
	} })), H = Dn(I({}, On, { data: 0 })), Vn = {
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
	}, Hn = {
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
	}, Un = {
		Alt: "altKey",
		Control: "ctrlKey",
		Meta: "metaKey",
		Shift: "shiftKey"
	};
	function Wn(e) {
		var t = this.nativeEvent;
		return t.getModifierState ? t.getModifierState(e) : (e = Un[e]) ? !!t[e] : !1;
	}
	function Gn() {
		return Wn;
	}
	var Kn = Dn(I({}, An, {
		key: function(e) {
			if (e.key) {
				var t = Vn[e.key] || e.key;
				if (t !== "Unidentified") return t;
			}
			return e.type === "keypress" ? (e = wn(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Hn[e.keyCode] || "Unidentified" : "";
		},
		code: 0,
		location: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		repeat: 0,
		locale: 0,
		getModifierState: Gn,
		charCode: function(e) {
			return e.type === "keypress" ? wn(e) : 0;
		},
		keyCode: function(e) {
			return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
		},
		which: function(e) {
			return e.type === "keypress" ? wn(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
		}
	})), qn = Dn(I({}, Fn, {
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
	})), Jn = Dn(I({}, An, {
		touches: 0,
		targetTouches: 0,
		changedTouches: 0,
		altKey: 0,
		metaKey: 0,
		ctrlKey: 0,
		shiftKey: 0,
		getModifierState: Gn
	})), Yn = Dn(I({}, On, {
		propertyName: 0,
		elapsedTime: 0,
		pseudoElement: 0
	})), Xn = Dn(I({}, Fn, {
		deltaX: function(e) {
			return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
		},
		deltaY: function(e) {
			return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
		},
		deltaZ: 0,
		deltaMode: 0
	})), Zn = [
		9,
		13,
		27,
		32
	], Qn = c && "CompositionEvent" in window, $n = null;
	c && "documentMode" in document && ($n = document.documentMode);
	var er = c && "TextEvent" in window && !$n, tr = c && (!Qn || $n && 8 < $n && 11 >= $n), nr = " ", rr = !1;
	function ir(e, t) {
		switch (e) {
			case "keyup": return Zn.indexOf(t.keyCode) !== -1;
			case "keydown": return t.keyCode !== 229;
			case "keypress":
			case "mousedown":
			case "focusout": return !0;
			default: return !1;
		}
	}
	function ar(e) {
		return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
	}
	var or = !1;
	function sr(e, t) {
		switch (e) {
			case "compositionend": return ar(t);
			case "keypress": return t.which === 32 ? (rr = !0, nr) : null;
			case "textInput": return e = t.data, e === nr && rr ? null : e;
			default: return null;
		}
	}
	function cr(e, t) {
		if (or) return e === "compositionend" || !Qn && ir(e, t) ? (e = Cn(), Sn = xn = bn = null, or = !1, e) : null;
		switch (e) {
			case "paste": return null;
			case "keypress":
				if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
					if (t.char && 1 < t.char.length) return t.char;
					if (t.which) return String.fromCharCode(t.which);
				}
				return null;
			case "compositionend": return tr && t.locale !== "ko" ? null : t.data;
			default: return null;
		}
	}
	var lr = {
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
	function ur(e) {
		var t = e && e.nodeName && e.nodeName.toLowerCase();
		return t === "input" ? !!lr[e.type] : t === "textarea";
	}
	function dr(e, t, n, r) {
		Ge(r), t = fi(t, "onChange"), 0 < t.length && (n = new kn("onChange", "change", null, n, r), e.push({
			event: n,
			listeners: t
		}));
	}
	var fr = null, pr = null;
	function mr(e) {
		ai(e, 0);
	}
	function hr(e) {
		if (me(Bi(e))) return e;
	}
	function gr(e, t) {
		if (e === "change") return t;
	}
	var _r = !1;
	if (c) {
		var vr;
		if (c) {
			var yr = "oninput" in document;
			if (!yr) {
				var br = document.createElement("div");
				br.setAttribute("oninput", "return;"), yr = typeof br.oninput == "function";
			}
			vr = yr;
		} else vr = !1;
		_r = vr && (!document.documentMode || 9 < document.documentMode);
	}
	function xr() {
		fr && (fr.detachEvent("onpropertychange", Sr), pr = fr = null);
	}
	function Sr(e) {
		if (e.propertyName === "value" && hr(pr)) {
			var t = [];
			dr(t, pr, e, Be(e)), Xe(mr, t);
		}
	}
	function Cr(e, t, n) {
		e === "focusin" ? (xr(), fr = t, pr = n, fr.attachEvent("onpropertychange", Sr)) : e === "focusout" && xr();
	}
	function wr(e) {
		if (e === "selectionchange" || e === "keyup" || e === "keydown") return hr(pr);
	}
	function Tr(e, t) {
		if (e === "click") return hr(t);
	}
	function Er(e, t) {
		if (e === "input" || e === "change") return hr(t);
	}
	function Dr(e, t) {
		return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t;
	}
	var Or = typeof Object.is == "function" ? Object.is : Dr;
	function kr(e, t) {
		if (Or(e, t)) return !0;
		if (typeof e != "object" || !e || typeof t != "object" || !t) return !1;
		var n = Object.keys(e), r = Object.keys(t);
		if (n.length !== r.length) return !1;
		for (r = 0; r < n.length; r++) {
			var i = n[r];
			if (!l.call(t, i) || !Or(e[i], t[i])) return !1;
		}
		return !0;
	}
	function Ar(e) {
		for (; e && e.firstChild;) e = e.firstChild;
		return e;
	}
	function jr(e, t) {
		var n = Ar(e);
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
			n = Ar(n);
		}
	}
	function Mr(e, t) {
		return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Mr(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
	}
	function Nr() {
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
	function Pr(e) {
		var t = e && e.nodeName && e.nodeName.toLowerCase();
		return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
	}
	function Fr(e) {
		var t = Nr(), n = e.focusedElem, r = e.selectionRange;
		if (t !== n && n && n.ownerDocument && Mr(n.ownerDocument.documentElement, n)) {
			if (r !== null && Pr(n)) {
				if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
				else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
					e = e.getSelection();
					var i = n.textContent.length, a = Math.min(r.start, i);
					r = r.end === void 0 ? a : Math.min(r.end, i), !e.extend && a > r && (i = r, r = a, a = i), i = jr(n, a);
					var o = jr(n, r);
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
	var Ir = c && "documentMode" in document && 11 >= document.documentMode, Lr = null, Rr = null, zr = null, Br = !1;
	function Vr(e, t, n) {
		var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
		Br || Lr == null || Lr !== he(r) || (r = Lr, "selectionStart" in r && Pr(r) ? r = {
			start: r.selectionStart,
			end: r.selectionEnd
		} : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
			anchorNode: r.anchorNode,
			anchorOffset: r.anchorOffset,
			focusNode: r.focusNode,
			focusOffset: r.focusOffset
		}), zr && kr(zr, r) || (zr = r, r = fi(Rr, "onSelect"), 0 < r.length && (t = new kn("onSelect", "select", null, t, n), e.push({
			event: t,
			listeners: r
		}), t.target = Lr)));
	}
	function Hr(e, t) {
		var n = {};
		return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
	}
	var Ur = {
		animationend: Hr("Animation", "AnimationEnd"),
		animationiteration: Hr("Animation", "AnimationIteration"),
		animationstart: Hr("Animation", "AnimationStart"),
		transitionend: Hr("Transition", "TransitionEnd")
	}, Wr = {}, Gr = {};
	c && (Gr = document.createElement("div").style, "AnimationEvent" in window || (delete Ur.animationend.animation, delete Ur.animationiteration.animation, delete Ur.animationstart.animation), "TransitionEvent" in window || delete Ur.transitionend.transition);
	function Kr(e) {
		if (Wr[e]) return Wr[e];
		if (!Ur[e]) return e;
		var t = Ur[e], n;
		for (n in t) if (t.hasOwnProperty(n) && n in Gr) return Wr[e] = t[n];
		return e;
	}
	var qr = Kr("animationend"), Jr = Kr("animationiteration"), Yr = Kr("animationstart"), Xr = Kr("transitionend"), Zr = /* @__PURE__ */ new Map(), Qr = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
	function $r(e, t) {
		Zr.set(e, t), o(t, [e]);
	}
	for (var ei = 0; ei < Qr.length; ei++) {
		var ti = Qr[ei];
		$r(ti.toLowerCase(), "on" + (ti[0].toUpperCase() + ti.slice(1)));
	}
	$r(qr, "onAnimationEnd"), $r(Jr, "onAnimationIteration"), $r(Yr, "onAnimationStart"), $r("dblclick", "onDoubleClick"), $r("focusin", "onFocus"), $r("focusout", "onBlur"), $r(Xr, "onTransitionEnd"), s("onMouseEnter", ["mouseout", "mouseover"]), s("onMouseLeave", ["mouseout", "mouseover"]), s("onPointerEnter", ["pointerout", "pointerover"]), s("onPointerLeave", ["pointerout", "pointerover"]), o("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), o("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), o("onBeforeInput", [
		"compositionend",
		"keypress",
		"textInput",
		"paste"
	]), o("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), o("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), o("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
	var ni = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), ri = new Set("cancel close invalid load scroll toggle".split(" ").concat(ni));
	function ii(e, t, n) {
		var r = e.type || "unknown-event";
		e.currentTarget = n, st(r, t, void 0, e), e.currentTarget = null;
	}
	function ai(e, t) {
		t = (t & 4) != 0;
		for (var n = 0; n < e.length; n++) {
			var r = e[n], i = r.event;
			r = r.listeners;
			a: {
				var a = void 0;
				if (t) for (var o = r.length - 1; 0 <= o; o--) {
					var s = r[o], c = s.instance, l = s.currentTarget;
					if (s = s.listener, c !== a && i.isPropagationStopped()) break a;
					ii(i, s, l), a = c;
				}
				else for (o = 0; o < r.length; o++) {
					if (s = r[o], c = s.instance, l = s.currentTarget, s = s.listener, c !== a && i.isPropagationStopped()) break a;
					ii(i, s, l), a = c;
				}
			}
		}
		if (rt) throw e = it, rt = !1, it = null, e;
	}
	function U(e, t) {
		var n = t[Fi];
		n === void 0 && (n = t[Fi] = /* @__PURE__ */ new Set());
		var r = e + "__bubble";
		n.has(r) || (li(t, e, 2, !1), n.add(r));
	}
	function oi(e, t, n) {
		var r = 0;
		t && (r |= 4), li(n, e, r, t);
	}
	var si = "_reactListening" + Math.random().toString(36).slice(2);
	function ci(e) {
		if (!e[si]) {
			e[si] = !0, i.forEach(function(t) {
				t !== "selectionchange" && (ri.has(t) || oi(t, !1, e), oi(t, !0, e));
			});
			var t = e.nodeType === 9 ? e : e.ownerDocument;
			t === null || t[si] || (t[si] = !0, oi("selectionchange", !1, t));
		}
	}
	function li(e, t, n, r) {
		switch (yn(t)) {
			case 1:
				var i = mn;
				break;
			case 4:
				i = hn;
				break;
			default: i = gn;
		}
		n = i.bind(null, t, n, e), i = void 0, !Qe || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i === void 0 ? e.addEventListener(t, n, !0) : e.addEventListener(t, n, {
			capture: !0,
			passive: i
		}) : i === void 0 ? e.addEventListener(t, n, !1) : e.addEventListener(t, n, { passive: i });
	}
	function ui(e, t, n, r, i) {
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
					if (o = Ri(s), o === null) return;
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
				var s = Zr.get(e);
				if (s !== void 0) {
					var c = kn, l = e;
					switch (e) {
						case "keypress": if (wn(n) === 0) break a;
						case "keydown":
						case "keyup":
							c = Kn;
							break;
						case "focusin":
							l = "focus", c = Rn;
							break;
						case "focusout":
							l = "blur", c = Rn;
							break;
						case "beforeblur":
						case "afterblur":
							c = Rn;
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
							c = In;
							break;
						case "drag":
						case "dragend":
						case "dragenter":
						case "dragexit":
						case "dragleave":
						case "dragover":
						case "dragstart":
						case "drop":
							c = Ln;
							break;
						case "touchcancel":
						case "touchend":
						case "touchmove":
						case "touchstart":
							c = Jn;
							break;
						case qr:
						case Jr:
						case Yr:
							c = zn;
							break;
						case Xr:
							c = Yn;
							break;
						case "scroll":
							c = jn;
							break;
						case "wheel":
							c = Xn;
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
						case "pointerup": c = qn;
					}
					var u = (t & 4) != 0, d = !u && e === "scroll", f = u ? s === null ? null : s + "Capture" : s;
					u = [];
					for (var p = r, m; p !== null;) {
						m = p;
						var h = m.stateNode;
						if (m.tag === 5 && h !== null && (m = h, f !== null && (h = Ze(p, f), h != null && u.push(di(p, h, m)))), d) break;
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
					if (s = e === "mouseover" || e === "pointerover", c = e === "mouseout" || e === "pointerout", s && n !== ze && (l = n.relatedTarget || n.fromElement) && (Ri(l) || l[Pi])) break a;
					if ((c || s) && (s = i.window === i ? i : (s = i.ownerDocument) ? s.defaultView || s.parentWindow : window, c ? (l = n.relatedTarget || n.toElement, c = r, l = l ? Ri(l) : null, l !== null && (d = R(l), l !== d || l.tag !== 5 && l.tag !== 6) && (l = null)) : (c = null, l = r), c !== l)) {
						if (u = In, h = "onMouseLeave", f = "onMouseEnter", p = "mouse", (e === "pointerout" || e === "pointerover") && (u = qn, h = "onPointerLeave", f = "onPointerEnter", p = "pointer"), d = c == null ? s : Bi(c), m = l == null ? s : Bi(l), s = new u(h, p + "leave", c, n, i), s.target = d, s.relatedTarget = m, h = null, Ri(i) === r && (u = new u(f, p + "enter", l, n, i), u.target = m, u.relatedTarget = d, h = u), d = h, c && l) b: {
							for (u = c, f = l, p = 0, m = u; m; m = pi(m)) p++;
							for (m = 0, h = f; h; h = pi(h)) m++;
							for (; 0 < p - m;) u = pi(u), p--;
							for (; 0 < m - p;) f = pi(f), m--;
							for (; p--;) {
								if (u === f || f !== null && u === f.alternate) break b;
								u = pi(u), f = pi(f);
							}
							u = null;
						}
						else u = null;
						c !== null && mi(o, s, c, u, !1), l !== null && d !== null && mi(o, d, l, u, !0);
					}
				}
				a: {
					if (s = r ? Bi(r) : window, c = s.nodeName && s.nodeName.toLowerCase(), c === "select" || c === "input" && s.type === "file") var g = gr;
					else if (ur(s)) if (_r) g = Er;
					else {
						g = wr;
						var _ = Cr;
					}
					else (c = s.nodeName) && c.toLowerCase() === "input" && (s.type === "checkbox" || s.type === "radio") && (g = Tr);
					if (g &&= g(e, r)) {
						dr(o, g, n, i);
						break a;
					}
					_ && _(e, s, r), e === "focusout" && (_ = s._wrapperState) && _.controlled && s.type === "number" && xe(s, "number", s.value);
				}
				switch (_ = r ? Bi(r) : window, e) {
					case "focusin":
						(ur(_) || _.contentEditable === "true") && (Lr = _, Rr = r, zr = null);
						break;
					case "focusout":
						zr = Rr = Lr = null;
						break;
					case "mousedown":
						Br = !0;
						break;
					case "contextmenu":
					case "mouseup":
					case "dragend":
						Br = !1, Vr(o, n, i);
						break;
					case "selectionchange": if (Ir) break;
					case "keydown":
					case "keyup": Vr(o, n, i);
				}
				var v;
				if (Qn) b: {
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
				else or ? ir(e, n) && (y = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (y = "onCompositionStart");
				y && (tr && n.locale !== "ko" && (or || y !== "onCompositionStart" ? y === "onCompositionEnd" && or && (v = Cn()) : (bn = i, xn = "value" in bn ? bn.value : bn.textContent, or = !0)), _ = fi(r, y), 0 < _.length && (y = new H(y, e, null, n, i), o.push({
					event: y,
					listeners: _
				}), v ? y.data = v : (v = ar(n), v !== null && (y.data = v)))), (v = er ? sr(e, n) : cr(e, n)) && (r = fi(r, "onBeforeInput"), 0 < r.length && (i = new H("onBeforeInput", "beforeinput", null, n, i), o.push({
					event: i,
					listeners: r
				}), i.data = v));
			}
			ai(o, t);
		});
	}
	function di(e, t, n) {
		return {
			instance: e,
			listener: t,
			currentTarget: n
		};
	}
	function fi(e, t) {
		for (var n = t + "Capture", r = []; e !== null;) {
			var i = e, a = i.stateNode;
			i.tag === 5 && a !== null && (i = a, a = Ze(e, n), a != null && r.unshift(di(e, a, i)), a = Ze(e, t), a != null && r.push(di(e, a, i))), e = e.return;
		}
		return r;
	}
	function pi(e) {
		if (e === null) return null;
		do
			e = e.return;
		while (e && e.tag !== 5);
		return e || null;
	}
	function mi(e, t, n, r, i) {
		for (var a = t._reactName, o = []; n !== null && n !== r;) {
			var s = n, c = s.alternate, l = s.stateNode;
			if (c !== null && c === r) break;
			s.tag === 5 && l !== null && (s = l, i ? (c = Ze(n, a), c != null && o.unshift(di(n, c, s))) : i || (c = Ze(n, a), c != null && o.push(di(n, c, s)))), n = n.return;
		}
		o.length !== 0 && e.push({
			event: t,
			listeners: o
		});
	}
	var hi = /\r\n?/g, gi = /\u0000|\uFFFD/g;
	function _i(e) {
		return (typeof e == "string" ? e : "" + e).replace(hi, "\n").replace(gi, "");
	}
	function vi(e, t, n) {
		if (t = _i(t), _i(e) !== t && n) throw Error(r(425));
	}
	function yi() {}
	var bi = null, xi = null;
	function Si(e, t) {
		return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
	}
	var Ci = typeof setTimeout == "function" ? setTimeout : void 0, wi = typeof clearTimeout == "function" ? clearTimeout : void 0, Ti = typeof Promise == "function" ? Promise : void 0, Ei = typeof queueMicrotask == "function" ? queueMicrotask : Ti === void 0 ? Ci : function(e) {
		return Ti.resolve(null).then(e).catch(Di);
	};
	function Di(e) {
		setTimeout(function() {
			throw e;
		});
	}
	function Oi(e, t) {
		var n = t, r = 0;
		do {
			var i = n.nextSibling;
			if (e.removeChild(n), i && i.nodeType === 8) if (n = i.data, n === "/$") {
				if (r === 0) {
					e.removeChild(i), dn(t);
					return;
				}
				r--;
			} else n !== "$" && n !== "$?" && n !== "$!" || r++;
			n = i;
		} while (n);
		dn(t);
	}
	function ki(e) {
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
	function Ai(e) {
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
	var ji = Math.random().toString(36).slice(2), Mi = "__reactFiber$" + ji, Ni = "__reactProps$" + ji, Pi = "__reactContainer$" + ji, Fi = "__reactEvents$" + ji, Ii = "__reactListeners$" + ji, Li = "__reactHandles$" + ji;
	function Ri(e) {
		var t = e[Mi];
		if (t) return t;
		for (var n = e.parentNode; n;) {
			if (t = n[Pi] || n[Mi]) {
				if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Ai(e); e !== null;) {
					if (n = e[Mi]) return n;
					e = Ai(e);
				}
				return t;
			}
			e = n, n = e.parentNode;
		}
		return null;
	}
	function zi(e) {
		return e = e[Mi] || e[Pi], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
	}
	function Bi(e) {
		if (e.tag === 5 || e.tag === 6) return e.stateNode;
		throw Error(r(33));
	}
	function Vi(e) {
		return e[Ni] || null;
	}
	var Hi = [], Ui = -1;
	function Wi(e) {
		return { current: e };
	}
	function W(e) {
		0 > Ui || (e.current = Hi[Ui], Hi[Ui] = null, Ui--);
	}
	function G(e, t) {
		Ui++, Hi[Ui] = e.current, e.current = t;
	}
	var Gi = {}, Ki = Wi(Gi), qi = Wi(!1), Ji = Gi;
	function Yi(e, t) {
		var n = e.type.contextTypes;
		if (!n) return Gi;
		var r = e.stateNode;
		if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
		var i = {}, a;
		for (a in n) i[a] = t[a];
		return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i;
	}
	function Xi(e) {
		return e = e.childContextTypes, e != null;
	}
	function Zi() {
		W(qi), W(Ki);
	}
	function Qi(e, t, n) {
		if (Ki.current !== Gi) throw Error(r(168));
		G(Ki, t), G(qi, n);
	}
	function $i(e, t, n) {
		var i = e.stateNode;
		if (t = t.childContextTypes, typeof i.getChildContext != "function") return n;
		for (var a in i = i.getChildContext(), i) if (!(a in t)) throw Error(r(108, le(e) || "Unknown", a));
		return I({}, n, i);
	}
	function ea(e) {
		return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Gi, Ji = Ki.current, G(Ki, e), G(qi, qi.current), !0;
	}
	function ta(e, t, n) {
		var i = e.stateNode;
		if (!i) throw Error(r(169));
		n ? (e = $i(e, t, Ji), i.__reactInternalMemoizedMergedChildContext = e, W(qi), W(Ki), G(Ki, e)) : W(qi), G(qi, n);
	}
	var na = null, ra = !1, ia = !1;
	function aa(e) {
		na === null ? na = [e] : na.push(e);
	}
	function oa(e) {
		ra = !0, aa(e);
	}
	function sa() {
		if (!ia && na !== null) {
			ia = !0;
			var e = 0, t = B;
			try {
				var n = na;
				for (B = 1; e < n.length; e++) {
					var r = n[e];
					do
						r = r(!0);
					while (r !== null);
				}
				na = null, ra = !1;
			} catch (t) {
				throw na !== null && (na = na.slice(e + 1)), pt(vt, sa), t;
			} finally {
				B = t, ia = !1;
			}
		}
		return null;
	}
	var ca = [], la = 0, ua = null, da = 0, fa = [], pa = 0, ma = null, ha = 1, ga = "";
	function _a(e, t) {
		ca[la++] = da, ca[la++] = ua, ua = e, da = t;
	}
	function va(e, t, n) {
		fa[pa++] = ha, fa[pa++] = ga, fa[pa++] = ma, ma = e;
		var r = ha;
		e = ga;
		var i = 32 - Et(r) - 1;
		r &= ~(1 << i), n += 1;
		var a = 32 - Et(t) + i;
		if (30 < a) {
			var o = i - i % 5;
			a = (r & (1 << o) - 1).toString(32), r >>= o, i -= o, ha = 1 << 32 - Et(t) + i | n << i | r, ga = a + e;
		} else ha = 1 << a | n << i | r, ga = e;
	}
	function ya(e) {
		e.return !== null && (_a(e, 1), va(e, 1, 0));
	}
	function ba(e) {
		for (; e === ua;) ua = ca[--la], ca[la] = null, da = ca[--la], ca[la] = null;
		for (; e === ma;) ma = fa[--pa], fa[pa] = null, ga = fa[--pa], fa[pa] = null, ha = fa[--pa], fa[pa] = null;
	}
	var xa = null, Sa = null, K = !1, Ca = null;
	function wa(e, t) {
		var n = Kl(5, null, null, 0);
		n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
	}
	function Ta(e, t) {
		switch (e.tag) {
			case 5:
				var n = e.type;
				return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t === null ? !1 : (e.stateNode = t, xa = e, Sa = ki(t.firstChild), !0);
			case 6: return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t === null ? !1 : (e.stateNode = t, xa = e, Sa = null, !0);
			case 13: return t = t.nodeType === 8 ? t : null, t === null ? !1 : (n = ma === null ? null : {
				id: ha,
				overflow: ga
			}, e.memoizedState = {
				dehydrated: t,
				treeContext: n,
				retryLane: 1073741824
			}, n = Kl(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, xa = e, Sa = null, !0);
			default: return !1;
		}
	}
	function Ea(e) {
		return (e.mode & 1) != 0 && (e.flags & 128) == 0;
	}
	function Da(e) {
		if (K) {
			var t = Sa;
			if (t) {
				var n = t;
				if (!Ta(e, t)) {
					if (Ea(e)) throw Error(r(418));
					t = ki(n.nextSibling);
					var i = xa;
					t && Ta(e, t) ? wa(i, n) : (e.flags = e.flags & -4097 | 2, K = !1, xa = e);
				}
			} else {
				if (Ea(e)) throw Error(r(418));
				e.flags = e.flags & -4097 | 2, K = !1, xa = e;
			}
		}
	}
	function Oa(e) {
		for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
		xa = e;
	}
	function ka(e) {
		if (e !== xa) return !1;
		if (!K) return Oa(e), K = !0, !1;
		var t;
		if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Si(e.type, e.memoizedProps)), t &&= Sa) {
			if (Ea(e)) throw Aa(), Error(r(418));
			for (; t;) wa(e, t), t = ki(t.nextSibling);
		}
		if (Oa(e), e.tag === 13) {
			if (e = e.memoizedState, e = e === null ? null : e.dehydrated, !e) throw Error(r(317));
			a: {
				for (e = e.nextSibling, t = 0; e;) {
					if (e.nodeType === 8) {
						var n = e.data;
						if (n === "/$") {
							if (t === 0) {
								Sa = ki(e.nextSibling);
								break a;
							}
							t--;
						} else n !== "$" && n !== "$!" && n !== "$?" || t++;
					}
					e = e.nextSibling;
				}
				Sa = null;
			}
		} else Sa = xa ? ki(e.stateNode.nextSibling) : null;
		return !0;
	}
	function Aa() {
		for (var e = Sa; e;) e = ki(e.nextSibling);
	}
	function ja() {
		Sa = xa = null, K = !1;
	}
	function Ma(e) {
		Ca === null ? Ca = [e] : Ca.push(e);
	}
	var Na = C.ReactCurrentBatchConfig;
	function Pa(e, t, n) {
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
	function Fa(e, t) {
		throw e = Object.prototype.toString.call(t), Error(r(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
	}
	function Ia(e) {
		var t = e._init;
		return t(e._payload);
	}
	function La(e) {
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
			return e = Yl(e, t), e.index = 0, e.sibling = null, e;
		}
		function o(t, n, r) {
			return t.index = r, e ? (r = t.alternate, r === null ? (t.flags |= 2, n) : (r = r.index, r < n ? (t.flags |= 2, n) : r)) : (t.flags |= 1048576, n);
		}
		function s(t) {
			return e && t.alternate === null && (t.flags |= 2), t;
		}
		function c(e, t, n, r) {
			return t === null || t.tag !== 6 ? (t = $l(n, e.mode, r), t.return = e, t) : (t = a(t, n), t.return = e, t);
		}
		function l(e, t, n, r) {
			var i = n.type;
			return i === E ? d(e, t, n.props.children, r, n.key) : t !== null && (t.elementType === i || typeof i == "object" && i && i.$$typeof === P && Ia(i) === t.type) ? (r = a(t, n.props), r.ref = Pa(e, t, n), r.return = e, r) : (r = Xl(n.type, n.key, n.props, null, e.mode, r), r.ref = Pa(e, t, n), r.return = e, r);
		}
		function u(e, t, n, r) {
			return t === null || t.tag !== 4 || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? (t = eu(n, e.mode, r), t.return = e, t) : (t = a(t, n.children || []), t.return = e, t);
		}
		function d(e, t, n, r, i) {
			return t === null || t.tag !== 7 ? (t = Zl(n, e.mode, r, i), t.return = e, t) : (t = a(t, n), t.return = e, t);
		}
		function f(e, t, n) {
			if (typeof t == "string" && t !== "" || typeof t == "number") return t = $l("" + t, e.mode, n), t.return = e, t;
			if (typeof t == "object" && t) {
				switch (t.$$typeof) {
					case w: return n = Xl(t.type, t.key, t.props, null, e.mode, n), n.ref = Pa(e, null, t), n.return = e, n;
					case T: return t = eu(t, e.mode, n), t.return = e, t;
					case P:
						var r = t._init;
						return f(e, r(t._payload), n);
				}
				if (Se(t) || ne(t)) return t = Zl(t, e.mode, n, null), t.return = e, t;
				Fa(e, t);
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
				Fa(e, n);
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
				Fa(t, r);
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
			if (h === s.length) return n(r, d), K && _a(r, h), l;
			if (d === null) {
				for (; h < s.length; h++) d = f(r, s[h], c), d !== null && (a = o(d, a, h), u === null ? l = d : u.sibling = d, u = d);
				return K && _a(r, h), l;
			}
			for (d = i(r, d); h < s.length; h++) g = m(d, r, h, s[h], c), g !== null && (e && g.alternate !== null && d.delete(g.key === null ? h : g.key), a = o(g, a, h), u === null ? l = g : u.sibling = g, u = g);
			return e && d.forEach(function(e) {
				return t(r, e);
			}), K && _a(r, h), l;
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
			if (v.done) return n(a, h), K && _a(a, g), u;
			if (h === null) {
				for (; !v.done; g++, v = c.next()) v = f(a, v.value, l), v !== null && (s = o(v, s, g), d === null ? u = v : d.sibling = v, d = v);
				return K && _a(a, g), u;
			}
			for (h = i(a, h); !v.done; g++, v = c.next()) v = m(h, a, g, v.value, l), v !== null && (e && v.alternate !== null && h.delete(v.key === null ? g : v.key), s = o(v, s, g), d === null ? u = v : d.sibling = v, d = v);
			return e && h.forEach(function(e) {
				return t(a, e);
			}), K && _a(a, g), u;
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
									} else if (l.elementType === c || typeof c == "object" && c && c.$$typeof === P && Ia(c) === l.type) {
										n(e, l.sibling), r = a(l, i.props), r.ref = Pa(e, l, i), r.return = e, e = r;
										break a;
									}
									n(e, l);
									break;
								} else t(e, l);
								l = l.sibling;
							}
							i.type === E ? (r = Zl(i.props.children, e.mode, o, i.key), r.return = e, e = r) : (o = Xl(i.type, i.key, i.props, null, e.mode, o), o.ref = Pa(e, r, i), o.return = e, e = o);
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
							r = eu(i, e.mode, o), r.return = e, e = r;
						}
						return s(e);
					case P: return l = i._init, _(e, r, l(i._payload), o);
				}
				if (Se(i)) return h(e, r, i, o);
				if (ne(i)) return g(e, r, i, o);
				Fa(e, i);
			}
			return typeof i == "string" && i !== "" || typeof i == "number" ? (i = "" + i, r !== null && r.tag === 6 ? (n(e, r.sibling), r = a(r, i), r.return = e, e = r) : (n(e, r), r = $l(i, e.mode, o), r.return = e, e = r), s(e)) : n(e, r);
		}
		return _;
	}
	var Ra = La(!0), za = La(!1), Ba = Wi(null), Va = null, Ha = null, Ua = null;
	function Wa() {
		Ua = Ha = Va = null;
	}
	function Ga(e) {
		var t = Ba.current;
		W(Ba), e._currentValue = t;
	}
	function Ka(e, t, n) {
		for (; e !== null;) {
			var r = e.alternate;
			if ((e.childLanes & t) === t ? r !== null && (r.childLanes & t) !== t && (r.childLanes |= t) : (e.childLanes |= t, r !== null && (r.childLanes |= t)), e === n) break;
			e = e.return;
		}
	}
	function qa(e, t) {
		Va = e, Ua = Ha = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (Ps = !0), e.firstContext = null);
	}
	function Ja(e) {
		var t = e._currentValue;
		if (Ua !== e) if (e = {
			context: e,
			memoizedValue: t,
			next: null
		}, Ha === null) {
			if (Va === null) throw Error(r(308));
			Ha = e, Va.dependencies = {
				lanes: 0,
				firstContext: e
			};
		} else Ha = Ha.next = e;
		return t;
	}
	var Ya = null;
	function Xa(e) {
		Ya === null ? Ya = [e] : Ya.push(e);
	}
	function Za(e, t, n, r) {
		var i = t.interleaved;
		return i === null ? (n.next = n, Xa(t)) : (n.next = i.next, i.next = n), t.interleaved = n, Qa(e, r);
	}
	function Qa(e, t) {
		e.lanes |= t;
		var n = e.alternate;
		for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
		return n.tag === 3 ? n.stateNode : null;
	}
	var $a = !1;
	function eo(e) {
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
	function to(e, t) {
		e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
			baseState: e.baseState,
			firstBaseUpdate: e.firstBaseUpdate,
			lastBaseUpdate: e.lastBaseUpdate,
			shared: e.shared,
			effects: e.effects
		});
	}
	function no(e, t) {
		return {
			eventTime: e,
			lane: t,
			tag: 0,
			payload: null,
			callback: null,
			next: null
		};
	}
	function ro(e, t, n) {
		var r = e.updateQueue;
		if (r === null) return null;
		if (r = r.shared, Z & 2) {
			var i = r.pending;
			return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, Qa(e, n);
		}
		return i = r.interleaved, i === null ? (t.next = t, Xa(r)) : (t.next = i.next, i.next = t), r.interleaved = t, Qa(e, n);
	}
	function io(e, t, n) {
		if (t = t.updateQueue, t !== null && (t = t.shared, n & 4194240)) {
			var r = t.lanes;
			r &= e.pendingLanes, n |= r, t.lanes = n, Vt(e, n);
		}
	}
	function ao(e, t) {
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
	function oo(e, t, n, r) {
		var i = e.updateQueue;
		$a = !1;
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
							case 2: $a = !0;
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
			Yc |= o, e.lanes = o, e.memoizedState = d;
		}
	}
	function so(e, t, n) {
		if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
			var i = e[t], a = i.callback;
			if (a !== null) {
				if (i.callback = null, i = n, typeof a != "function") throw Error(r(191, a));
				a.call(i);
			}
		}
	}
	var co = {}, lo = Wi(co), uo = Wi(co), fo = Wi(co);
	function po(e) {
		if (e === co) throw Error(r(174));
		return e;
	}
	function mo(e, t) {
		switch (G(fo, t), G(uo, e), G(lo, co), e = t.nodeType, e) {
			case 9:
			case 11:
				t = (t = t.documentElement) ? t.namespaceURI : ke(null, "");
				break;
			default: e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = ke(t, e);
		}
		W(lo), G(lo, t);
	}
	function ho() {
		W(lo), W(uo), W(fo);
	}
	function go(e) {
		po(fo.current);
		var t = po(lo.current), n = ke(t, e.type);
		t !== n && (G(uo, e), G(lo, n));
	}
	function _o(e) {
		uo.current === e && (W(lo), W(uo));
	}
	var q = Wi(0);
	function vo(e) {
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
	var yo = [];
	function bo() {
		for (var e = 0; e < yo.length; e++) yo[e]._workInProgressVersionPrimary = null;
		yo.length = 0;
	}
	var xo = C.ReactCurrentDispatcher, So = C.ReactCurrentBatchConfig, Co = 0, J = null, wo = null, Y = null, To = !1, Eo = !1, Do = 0, Oo = 0;
	function ko() {
		throw Error(r(321));
	}
	function Ao(e, t) {
		if (t === null) return !1;
		for (var n = 0; n < t.length && n < e.length; n++) if (!Or(e[n], t[n])) return !1;
		return !0;
	}
	function jo(e, t, n, i, a, o) {
		if (Co = o, J = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, xo.current = e === null || e.memoizedState === null ? ms : hs, e = n(i, a), Eo) {
			o = 0;
			do {
				if (Eo = !1, Do = 0, 25 <= o) throw Error(r(301));
				o += 1, Y = wo = null, t.updateQueue = null, xo.current = gs, e = n(i, a);
			} while (Eo);
		}
		if (xo.current = ps, t = wo !== null && wo.next !== null, Co = 0, Y = wo = J = null, To = !1, t) throw Error(r(300));
		return e;
	}
	function Mo() {
		var e = Do !== 0;
		return Do = 0, e;
	}
	function No() {
		var e = {
			memoizedState: null,
			baseState: null,
			baseQueue: null,
			queue: null,
			next: null
		};
		return Y === null ? J.memoizedState = Y = e : Y = Y.next = e, Y;
	}
	function Po() {
		if (wo === null) {
			var e = J.alternate;
			e = e === null ? null : e.memoizedState;
		} else e = wo.next;
		var t = Y === null ? J.memoizedState : Y.next;
		if (t !== null) Y = t, wo = e;
		else {
			if (e === null) throw Error(r(310));
			wo = e, e = {
				memoizedState: wo.memoizedState,
				baseState: wo.baseState,
				baseQueue: wo.baseQueue,
				queue: wo.queue,
				next: null
			}, Y === null ? J.memoizedState = Y = e : Y = Y.next = e;
		}
		return Y;
	}
	function Fo(e, t) {
		return typeof t == "function" ? t(e) : t;
	}
	function Io(e) {
		var t = Po(), n = t.queue;
		if (n === null) throw Error(r(311));
		n.lastRenderedReducer = e;
		var i = wo, a = i.baseQueue, o = n.pending;
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
				if ((Co & d) === d) l !== null && (l = l.next = {
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
					l === null ? (c = l = f, s = i) : l = l.next = f, J.lanes |= d, Yc |= d;
				}
				u = u.next;
			} while (u !== null && u !== o);
			l === null ? s = i : l.next = c, Or(i, t.memoizedState) || (Ps = !0), t.memoizedState = i, t.baseState = s, t.baseQueue = l, n.lastRenderedState = i;
		}
		if (e = n.interleaved, e !== null) {
			a = e;
			do
				o = a.lane, J.lanes |= o, Yc |= o, a = a.next;
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
			Or(o, t.memoizedState) || (Ps = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
		}
		return [o, i];
	}
	function Ro() {}
	function zo(e, t) {
		var n = J, i = Po(), a = t(), o = !Or(i.memoizedState, a);
		if (o && (i.memoizedState = a, Ps = !0), i = i.queue, Zo(Ho.bind(null, n, i, e), [e]), i.getSnapshot !== t || o || Y !== null && Y.memoizedState.tag & 1) {
			if (n.flags |= 2048, Ko(9, Vo.bind(null, n, i, a, t), void 0, null), Uc === null) throw Error(r(349));
			Co & 30 || Bo(n, t, a);
		}
		return a;
	}
	function Bo(e, t, n) {
		e.flags |= 16384, e = {
			getSnapshot: t,
			value: n
		}, t = J.updateQueue, t === null ? (t = {
			lastEffect: null,
			stores: null
		}, J.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
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
			return !Or(e, n);
		} catch {
			return !0;
		}
	}
	function Wo(e) {
		var t = Qa(e, 1);
		t !== null && hl(t, e, 1, -1);
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
		}, t.queue = e, e = e.dispatch = ls.bind(null, J, e), [t.memoizedState, e];
	}
	function Ko(e, t, n, r) {
		return e = {
			tag: e,
			create: t,
			destroy: n,
			deps: r,
			next: null
		}, t = J.updateQueue, t === null ? (t = {
			lastEffect: null,
			stores: null
		}, J.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
	}
	function qo() {
		return Po().memoizedState;
	}
	function Jo(e, t, n, r) {
		var i = No();
		J.flags |= e, i.memoizedState = Ko(1 | t, n, void 0, r === void 0 ? null : r);
	}
	function Yo(e, t, n, r) {
		var i = Po();
		r = r === void 0 ? null : r;
		var a = void 0;
		if (wo !== null) {
			var o = wo.memoizedState;
			if (a = o.destroy, r !== null && Ao(r, o.deps)) {
				i.memoizedState = Ko(t, n, a, r);
				return;
			}
		}
		J.flags |= e, i.memoizedState = Ko(1 | t, n, a, r);
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
		return Co & 21 ? (Or(n, t) || (n = Lt(), J.lanes |= n, Yc |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Ps = !0), e.memoizedState = n);
	}
	function os(e, t) {
		var n = B;
		B = n !== 0 && 4 > n ? n : 4, e(!0);
		var r = So.transition;
		So.transition = {};
		try {
			e(!1), t();
		} finally {
			B = n, So.transition = r;
		}
	}
	function ss() {
		return Po().memoizedState;
	}
	function cs(e, t, n) {
		var r = ml(e);
		if (n = {
			lane: r,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null
		}, us(e)) ds(t, n);
		else if (n = Za(e, t, n, r), n !== null) {
			var i = pl();
			hl(n, e, r, i), fs(n, t, r);
		}
	}
	function ls(e, t, n) {
		var r = ml(e), i = {
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
				if (i.hasEagerState = !0, i.eagerState = s, Or(s, o)) {
					var c = t.interleaved;
					c === null ? (i.next = i, Xa(t)) : (i.next = c.next, c.next = i), t.interleaved = i;
					return;
				}
			} catch {}
			n = Za(e, t, i, r), n !== null && (i = pl(), hl(n, e, r, i), fs(n, t, r));
		}
	}
	function us(e) {
		var t = e.alternate;
		return e === J || t !== null && t === J;
	}
	function ds(e, t) {
		Eo = To = !0;
		var n = e.pending;
		n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
	}
	function fs(e, t, n) {
		if (n & 4194240) {
			var r = t.lanes;
			r &= e.pendingLanes, n |= r, t.lanes = n, Vt(e, n);
		}
	}
	var ps = {
		readContext: Ja,
		useCallback: ko,
		useContext: ko,
		useEffect: ko,
		useImperativeHandle: ko,
		useInsertionEffect: ko,
		useLayoutEffect: ko,
		useMemo: ko,
		useReducer: ko,
		useRef: ko,
		useState: ko,
		useDebugValue: ko,
		useDeferredValue: ko,
		useTransition: ko,
		useMutableSource: ko,
		useSyncExternalStore: ko,
		useId: ko,
		unstable_isNewReconciler: !1
	}, ms = {
		readContext: Ja,
		useCallback: function(e, t) {
			return No().memoizedState = [e, t === void 0 ? null : t], e;
		},
		useContext: Ja,
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
			}, r.queue = e, e = e.dispatch = cs.bind(null, J, e), [r.memoizedState, e];
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
			var i = J, a = No();
			if (K) {
				if (n === void 0) throw Error(r(407));
				n = n();
			} else {
				if (n = t(), Uc === null) throw Error(r(349));
				Co & 30 || Bo(i, t, n);
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
			if (K) {
				var n = ga, r = ha;
				n = (r & ~(1 << 32 - Et(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Do++, 0 < n && (t += "H" + n.toString(32)), t += ":";
			} else n = Oo++, t = ":" + t + "r" + n.toString(32) + ":";
			return e.memoizedState = t;
		},
		unstable_isNewReconciler: !1
	}, hs = {
		readContext: Ja,
		useCallback: rs,
		useContext: Ja,
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
			return as(Po(), wo.memoizedState, e);
		},
		useTransition: function() {
			return [Io(Fo)[0], Po().memoizedState];
		},
		useMutableSource: Ro,
		useSyncExternalStore: zo,
		useId: ss,
		unstable_isNewReconciler: !1
	}, gs = {
		readContext: Ja,
		useCallback: rs,
		useContext: Ja,
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
			return wo === null ? t.memoizedState = e : as(t, wo.memoizedState, e);
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
			for (var n in t = I({}, t), e = e.defaultProps, e) t[n] === void 0 && (t[n] = e[n]);
			return t;
		}
		return t;
	}
	function vs(e, t, n, r) {
		t = e.memoizedState, n = n(r, t), n = n == null ? t : I({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
	}
	var ys = {
		isMounted: function(e) {
			return (e = e._reactInternals) ? R(e) === e : !1;
		},
		enqueueSetState: function(e, t, n) {
			e = e._reactInternals;
			var r = pl(), i = ml(e), a = no(r, i);
			a.payload = t, n != null && (a.callback = n), t = ro(e, a, i), t !== null && (hl(t, e, i, r), io(t, e, i));
		},
		enqueueReplaceState: function(e, t, n) {
			e = e._reactInternals;
			var r = pl(), i = ml(e), a = no(r, i);
			a.tag = 1, a.payload = t, n != null && (a.callback = n), t = ro(e, a, i), t !== null && (hl(t, e, i, r), io(t, e, i));
		},
		enqueueForceUpdate: function(e, t) {
			e = e._reactInternals;
			var n = pl(), r = ml(e), i = no(n, r);
			i.tag = 2, t != null && (i.callback = t), t = ro(e, i, r), t !== null && (hl(t, e, r, n), io(t, e, r));
		}
	};
	function bs(e, t, n, r, i, a, o) {
		return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, a, o) : t.prototype && t.prototype.isPureReactComponent ? !kr(n, r) || !kr(i, a) : !0;
	}
	function xs(e, t, n) {
		var r = !1, i = Gi, a = t.contextType;
		return typeof a == "object" && a ? a = Ja(a) : (i = Xi(t) ? Ji : Ki.current, r = t.contextTypes, a = (r = r != null) ? Yi(e, i) : Gi), t = new t(n, a), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = ys, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = a), t;
	}
	function Ss(e, t, n, r) {
		e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && ys.enqueueReplaceState(t, t.state, null);
	}
	function Cs(e, t, n, r) {
		var i = e.stateNode;
		i.props = n, i.state = e.memoizedState, i.refs = {}, eo(e);
		var a = t.contextType;
		typeof a == "object" && a ? i.context = Ja(a) : (a = Xi(t) ? Ji : Ki.current, i.context = Yi(e, a)), i.state = e.memoizedState, a = t.getDerivedStateFromProps, typeof a == "function" && (vs(e, t, a, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && ys.enqueueReplaceState(i, i.state, null), oo(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308);
	}
	function ws(e, t) {
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
		n = no(-1, n), n.tag = 3, n.payload = { element: null };
		var r = t.value;
		return n.callback = function() {
			rl || (rl = !0, il = r), Es(e, t);
		}, n;
	}
	function ks(e, t, n) {
		n = no(-1, n), n.tag = 3;
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
			Es(e, t), typeof r != "function" && (al === null ? al = new Set([this]) : al.add(this));
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
		i.has(n) || (i.add(n), e = zl.bind(null, e, t, n), t.then(e, e));
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
		return e.mode & 1 ? (e.flags |= 65536, e.lanes = i, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = no(-1, 1), t.tag = 2, ro(n, t, 1))), n.lanes |= 1), e);
	}
	var Ns = C.ReactCurrentOwner, Ps = !1;
	function Fs(e, t, n, r) {
		t.child = e === null ? za(t, null, n, r) : Ra(t, e.child, n, r);
	}
	function Is(e, t, n, r, i) {
		n = n.render;
		var a = t.ref;
		return qa(t, i), r = jo(e, t, n, r, a, i), n = Mo(), e !== null && !Ps ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, nc(e, t, i)) : (K && n && ya(t), t.flags |= 1, Fs(e, t, r, i), t.child);
	}
	function Ls(e, t, n, r, i) {
		if (e === null) {
			var a = n.type;
			return typeof a == "function" && !ql(a) && a.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = a, Rs(e, t, a, r, i)) : (e = Xl(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
		}
		if (a = e.child, (e.lanes & i) === 0) {
			var o = a.memoizedProps;
			if (n = n.compare, n = n === null ? kr : n, n(o, r) && e.ref === t.ref) return nc(e, t, i);
		}
		return t.flags |= 1, e = Yl(a, r), e.ref = t.ref, e.return = t, t.child = e;
	}
	function Rs(e, t, n, r, i) {
		if (e !== null) {
			var a = e.memoizedProps;
			if (kr(a, r) && e.ref === t.ref) if (Ps = !1, t.pendingProps = r = a, (e.lanes & i) !== 0) e.flags & 131072 && (Ps = !0);
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
		}, G(Kc, Gc), Gc |= n;
		else {
			if (!(n & 1073741824)) return e = a === null ? n : a.baseLanes | n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
				baseLanes: e,
				cachePool: null,
				transitions: null
			}, t.updateQueue = null, G(Kc, Gc), Gc |= e, null;
			t.memoizedState = {
				baseLanes: 0,
				cachePool: null,
				transitions: null
			}, r = a === null ? n : a.baseLanes, G(Kc, Gc), Gc |= r;
		}
		else a === null ? r = n : (r = a.baseLanes | n, t.memoizedState = null), G(Kc, Gc), Gc |= r;
		return Fs(e, t, i, n), t.child;
	}
	function Bs(e, t) {
		var n = t.ref;
		(e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
	}
	function Vs(e, t, n, r, i) {
		var a = Xi(n) ? Ji : Ki.current;
		return a = Yi(t, a), qa(t, i), n = jo(e, t, n, r, a, i), r = Mo(), e !== null && !Ps ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, nc(e, t, i)) : (K && r && ya(t), t.flags |= 1, Fs(e, t, n, i), t.child);
	}
	function Hs(e, t, n, r, i) {
		if (Xi(n)) {
			var a = !0;
			ea(t);
		} else a = !1;
		if (qa(t, i), t.stateNode === null) tc(e, t), xs(t, n, r), Cs(t, n, r, i), r = !0;
		else if (e === null) {
			var o = t.stateNode, s = t.memoizedProps;
			o.props = s;
			var c = o.context, l = n.contextType;
			typeof l == "object" && l ? l = Ja(l) : (l = Xi(n) ? Ji : Ki.current, l = Yi(t, l));
			var u = n.getDerivedStateFromProps, d = typeof u == "function" || typeof o.getSnapshotBeforeUpdate == "function";
			d || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (s !== r || c !== l) && Ss(t, o, r, l), $a = !1;
			var f = t.memoizedState;
			o.state = f, oo(t, r, o, i), c = t.memoizedState, s !== r || f !== c || qi.current || $a ? (typeof u == "function" && (vs(t, n, u, r), c = t.memoizedState), (s = $a || bs(t, n, s, r, f, c, l)) ? (d || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = c), o.props = r, o.state = c, o.context = l, r = s) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
		} else {
			o = t.stateNode, to(e, t), s = t.memoizedProps, l = t.type === t.elementType ? s : _s(t.type, s), o.props = l, d = t.pendingProps, f = o.context, c = n.contextType, typeof c == "object" && c ? c = Ja(c) : (c = Xi(n) ? Ji : Ki.current, c = Yi(t, c));
			var p = n.getDerivedStateFromProps;
			(u = typeof p == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (s !== d || f !== c) && Ss(t, o, r, c), $a = !1, f = t.memoizedState, o.state = f, oo(t, r, o, i);
			var m = t.memoizedState;
			s !== d || f !== m || qi.current || $a ? (typeof p == "function" && (vs(t, n, p, r), m = t.memoizedState), (l = $a || bs(t, n, l, r, f, m, c) || !1) ? (u || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, m, c), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, m, c)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = m), o.props = r, o.state = m, o.context = c, r = l) : (typeof o.componentDidUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1);
		}
		return Us(e, t, n, r, a, i);
	}
	function Us(e, t, n, r, i, a) {
		Bs(e, t);
		var o = (t.flags & 128) != 0;
		if (!r && !o) return i && ta(t, n, !1), nc(e, t, a);
		r = t.stateNode, Ns.current = t;
		var s = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
		return t.flags |= 1, e !== null && o ? (t.child = Ra(t, e.child, null, a), t.child = Ra(t, null, s, a)) : Fs(e, t, s, a), t.memoizedState = r.state, i && ta(t, n, !0), t.child;
	}
	function Ws(e) {
		var t = e.stateNode;
		t.pendingContext ? Qi(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Qi(e, t.context, !1), mo(e, t.containerInfo);
	}
	function Gs(e, t, n, r, i) {
		return ja(), Ma(i), t.flags |= 256, Fs(e, t, n, r), t.child;
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
		var r = t.pendingProps, i = q.current, a = !1, o = (t.flags & 128) != 0, s;
		if ((s = o) || (s = e !== null && e.memoizedState === null ? !1 : (i & 2) != 0), s ? (a = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), G(q, i & 1), e === null) return Da(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (o = r.children, e = r.fallback, a ? (r = t.mode, a = t.child, o = {
			mode: "hidden",
			children: o
		}, !(r & 1) && a !== null ? (a.childLanes = 0, a.pendingProps = o) : a = Ql(o, r, 0, null), e = Zl(e, r, n, null), a.return = t, e.return = t, a.sibling = e, t.child = a, t.child.memoizedState = qs(n), t.memoizedState = Ks, e) : Ys(t, o));
		if (i = e.memoizedState, i !== null && (s = i.dehydrated, s !== null)) return Zs(e, t, o, r, s, i, n);
		if (a) {
			a = r.fallback, o = t.mode, i = e.child, s = i.sibling;
			var c = {
				mode: "hidden",
				children: r.children
			};
			return !(o & 1) && t.child !== i ? (r = t.child, r.childLanes = 0, r.pendingProps = c, t.deletions = null) : (r = Yl(i, c), r.subtreeFlags = i.subtreeFlags & 14680064), s === null ? (a = Zl(a, o, n, null), a.flags |= 2) : a = Yl(s, a), a.return = t, r.return = t, r.sibling = a, t.child = r, r = a, a = t.child, o = e.child.memoizedState, o = o === null ? qs(n) : {
				baseLanes: o.baseLanes | n,
				cachePool: null,
				transitions: o.transitions
			}, a.memoizedState = o, a.childLanes = e.childLanes & ~n, t.memoizedState = Ks, r;
		}
		return a = e.child, e = a.sibling, r = Yl(a, {
			mode: "visible",
			children: r.children
		}), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
	}
	function Ys(e, t) {
		return t = Ql({
			mode: "visible",
			children: t
		}, e.mode, 0, null), t.return = e, e.child = t;
	}
	function Xs(e, t, n, r) {
		return r !== null && Ma(r), Ra(t, e.child, null, n), e = Ys(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
	}
	function Zs(e, t, n, i, a, o, s) {
		if (n) return t.flags & 256 ? (t.flags &= -257, i = Ts(Error(r(422))), Xs(e, t, s, i)) : t.memoizedState === null ? (o = i.fallback, a = t.mode, i = Ql({
			mode: "visible",
			children: i.children
		}, a, 0, null), o = Zl(o, a, s, null), o.flags |= 2, i.return = t, o.return = t, i.sibling = o, t.child = i, t.mode & 1 && Ra(t, e.child, null, s), t.child.memoizedState = qs(s), t.memoizedState = Ks, o) : (t.child = e.child, t.flags |= 128, null);
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
				a = (a & (i.suspendedLanes | s)) === 0 ? a : 0, a !== 0 && a !== o.retryLane && (o.retryLane = a, Qa(e, a), hl(i, e, a, -1));
			}
			return kl(), i = Ts(Error(r(421))), Xs(e, t, s, i);
		}
		return a.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Vl.bind(null, e), a._reactRetry = t, null) : (e = o.treeContext, Sa = ki(a.nextSibling), xa = t, K = !0, Ca = null, e !== null && (fa[pa++] = ha, fa[pa++] = ga, fa[pa++] = ma, ha = e.id, ga = e.overflow, ma = t), t = Ys(t, i.children), t.flags |= 4096, t);
	}
	function Qs(e, t, n) {
		e.lanes |= t;
		var r = e.alternate;
		r !== null && (r.lanes |= t), Ka(e.return, t, n);
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
		if (Fs(e, t, r.children, n), r = q.current, r & 2) r = r & 1 | 2, t.flags |= 128;
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
		if (G(q, r), !(t.mode & 1)) t.memoizedState = null;
		else switch (i) {
			case "forwards":
				for (n = t.child, i = null; n !== null;) e = n.alternate, e !== null && vo(e) === null && (i = n), n = n.sibling;
				n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), $s(t, !1, i, n, a);
				break;
			case "backwards":
				for (n = null, i = t.child, t.child = null; i !== null;) {
					if (e = i.alternate, e !== null && vo(e) === null) {
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
		if (e !== null && (t.dependencies = e.dependencies), Yc |= t.lanes, (n & t.childLanes) === 0) return null;
		if (e !== null && t.child !== e.child) throw Error(r(153));
		if (t.child !== null) {
			for (e = t.child, n = Yl(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = Yl(e, e.pendingProps), n.return = t;
			n.sibling = null;
		}
		return t.child;
	}
	function rc(e, t, n) {
		switch (t.tag) {
			case 3:
				Ws(t), ja();
				break;
			case 5:
				go(t);
				break;
			case 1:
				Xi(t.type) && ea(t);
				break;
			case 4:
				mo(t, t.stateNode.containerInfo);
				break;
			case 10:
				var r = t.type._context, i = t.memoizedProps.value;
				G(Ba, r._currentValue), r._currentValue = i;
				break;
			case 13:
				if (r = t.memoizedState, r !== null) return r.dehydrated === null ? (n & t.child.childLanes) === 0 ? (G(q, q.current & 1), e = nc(e, t, n), e === null ? null : e.sibling) : Js(e, t, n) : (G(q, q.current & 1), t.flags |= 128, null);
				G(q, q.current & 1);
				break;
			case 19:
				if (r = (n & t.childLanes) !== 0, e.flags & 128) {
					if (r) return ec(e, t, n);
					t.flags |= 128;
				}
				if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), G(q, q.current), r) break;
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
			e = t.stateNode, po(lo.current);
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
				default: typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = yi);
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
				else u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, c = c ? c.__html : void 0, l != null && c !== l && (o ||= []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (o ||= []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (a.hasOwnProperty(u) ? (l != null && u === "onScroll" && U("scroll", e), o || c === l || (o = [])) : (o ||= []).push(u, l));
			}
			n && (o ||= []).push("style", n);
			var u = o;
			(t.updateQueue = u) && (t.flags |= 4);
		}
	}, oc = function(e, t, n, r) {
		n !== r && (t.flags |= 4);
	};
	function sc(e, t) {
		if (!K) switch (e.tailMode) {
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
		switch (ba(t), t.tag) {
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
			case 1: return Xi(t.type) && Zi(), cc(t), null;
			case 3: return i = t.stateNode, ho(), W(qi), W(Ki), bo(), i.pendingContext && (i.context = i.pendingContext, i.pendingContext = null), (e === null || e.child === null) && (ka(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Ca !== null && (yl(Ca), Ca = null))), cc(t), null;
			case 5:
				_o(t);
				var o = po(fo.current);
				if (n = t.type, e !== null && t.stateNode != null) ac(e, t, n, i, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
				else {
					if (!i) {
						if (t.stateNode === null) throw Error(r(166));
						return cc(t), null;
					}
					if (e = po(lo.current), ka(t)) {
						i = t.stateNode, n = t.type;
						var s = t.memoizedProps;
						switch (i[Mi] = t, i[Ni] = s, e = (t.mode & 1) != 0, n) {
							case "dialog":
								U("cancel", i), U("close", i);
								break;
							case "iframe":
							case "object":
							case "embed":
								U("load", i);
								break;
							case "video":
							case "audio":
								for (o = 0; o < ni.length; o++) U(ni[o], i);
								break;
							case "source":
								U("error", i);
								break;
							case "img":
							case "image":
							case "link":
								U("error", i), U("load", i);
								break;
							case "details":
								U("toggle", i);
								break;
							case "input":
								_e(i, s), U("invalid", i);
								break;
							case "select":
								i._wrapperState = { wasMultiple: !!s.multiple }, U("invalid", i);
								break;
							case "textarea": Te(i, s), U("invalid", i);
						}
						for (var c in Le(n, s), o = null, s) if (s.hasOwnProperty(c)) {
							var l = s[c];
							c === "children" ? typeof l == "string" ? i.textContent !== l && (!0 !== s.suppressHydrationWarning && vi(i.textContent, l, e), o = ["children", l]) : typeof l == "number" && i.textContent !== "" + l && (!0 !== s.suppressHydrationWarning && vi(i.textContent, l, e), o = ["children", "" + l]) : a.hasOwnProperty(c) && l != null && c === "onScroll" && U("scroll", i);
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
							default: typeof s.onClick == "function" && (i.onclick = yi);
						}
						i = o, t.updateQueue = i, i !== null && (t.flags |= 4);
					} else {
						c = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Oe(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = c.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof i.is == "string" ? e = c.createElement(n, { is: i.is }) : (e = c.createElement(n), n === "select" && (c = e, i.multiple ? c.multiple = !0 : i.size && (c.size = i.size))) : e = c.createElementNS(e, n), e[Mi] = t, e[Ni] = i, ic(e, t, !1, !1), t.stateNode = e;
						a: {
							switch (c = Re(n, i), n) {
								case "dialog":
									U("cancel", e), U("close", e), o = i;
									break;
								case "iframe":
								case "object":
								case "embed":
									U("load", e), o = i;
									break;
								case "video":
								case "audio":
									for (o = 0; o < ni.length; o++) U(ni[o], e);
									o = i;
									break;
								case "source":
									U("error", e), o = i;
									break;
								case "img":
								case "image":
								case "link":
									U("error", e), U("load", e), o = i;
									break;
								case "details":
									U("toggle", e), o = i;
									break;
								case "input":
									_e(e, i), o = ge(e, i), U("invalid", e);
									break;
								case "option":
									o = i;
									break;
								case "select":
									e._wrapperState = { wasMultiple: !!i.multiple }, o = I({}, i, { value: void 0 }), U("invalid", e);
									break;
								case "textarea":
									Te(e, i), o = we(e, i), U("invalid", e);
									break;
								default: o = i;
							}
							for (s in Le(n, o), l = o, l) if (l.hasOwnProperty(s)) {
								var u = l[s];
								s === "style" ? Fe(e, u) : s === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, u != null && je(e, u)) : s === "children" ? typeof u == "string" ? (n !== "textarea" || u !== "") && L(e, u) : typeof u == "number" && L(e, "" + u) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (a.hasOwnProperty(s) ? u != null && s === "onScroll" && U("scroll", e) : u != null && S(e, s, u, c));
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
								default: typeof o.onClick == "function" && (e.onclick = yi);
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
					if (n = po(fo.current), po(lo.current), ka(t)) {
						if (i = t.stateNode, n = t.memoizedProps, i[Mi] = t, (s = i.nodeValue !== n) && (e = xa, e !== null)) switch (e.tag) {
							case 3:
								vi(i.nodeValue, n, (e.mode & 1) != 0);
								break;
							case 5: !0 !== e.memoizedProps.suppressHydrationWarning && vi(i.nodeValue, n, (e.mode & 1) != 0);
						}
						s && (t.flags |= 4);
					} else i = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(i), i[Mi] = t, t.stateNode = i;
				}
				return cc(t), null;
			case 13:
				if (W(q), i = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
					if (K && Sa !== null && t.mode & 1 && !(t.flags & 128)) Aa(), ja(), t.flags |= 98560, s = !1;
					else if (s = ka(t), i !== null && i.dehydrated !== null) {
						if (e === null) {
							if (!s) throw Error(r(318));
							if (s = t.memoizedState, s = s === null ? null : s.dehydrated, !s) throw Error(r(317));
							s[Mi] = t;
						} else ja(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
						cc(t), s = !1;
					} else Ca !== null && (yl(Ca), Ca = null), s = !0;
					if (!s) return t.flags & 65536 ? t : null;
				}
				return t.flags & 128 ? (t.lanes = n, t) : (i = i !== null, i !== (e !== null && e.memoizedState !== null) && i && (t.child.flags |= 8192, t.mode & 1 && (e === null || q.current & 1 ? qc === 0 && (qc = 3) : kl())), t.updateQueue !== null && (t.flags |= 4), cc(t), null);
			case 4: return ho(), e === null && ci(t.stateNode.containerInfo), cc(t), null;
			case 10: return Ga(t.type._context), cc(t), null;
			case 17: return Xi(t.type) && Zi(), cc(t), null;
			case 19:
				if (W(q), s = t.memoizedState, s === null) return cc(t), null;
				if (i = (t.flags & 128) != 0, c = s.rendering, c === null) if (i) sc(s, !1);
				else {
					if (qc !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null;) {
						if (c = vo(e), c !== null) {
							for (t.flags |= 128, sc(s, !1), i = c.updateQueue, i !== null && (t.updateQueue = i, t.flags |= 4), t.subtreeFlags = 0, i = n, n = t.child; n !== null;) s = n, e = i, s.flags &= 14680066, c = s.alternate, c === null ? (s.childLanes = 0, s.lanes = e, s.child = null, s.subtreeFlags = 0, s.memoizedProps = null, s.memoizedState = null, s.updateQueue = null, s.dependencies = null, s.stateNode = null) : (s.childLanes = c.childLanes, s.lanes = c.lanes, s.child = c.child, s.subtreeFlags = 0, s.deletions = null, s.memoizedProps = c.memoizedProps, s.memoizedState = c.memoizedState, s.updateQueue = c.updateQueue, s.type = c.type, e = c.dependencies, s.dependencies = e === null ? null : {
								lanes: e.lanes,
								firstContext: e.firstContext
							}), n = n.sibling;
							return G(q, q.current & 1 | 2), t.child;
						}
						e = e.sibling;
					}
					s.tail !== null && z() > tl && (t.flags |= 128, i = !0, sc(s, !1), t.lanes = 4194304);
				}
				else {
					if (!i) if (e = vo(c), e !== null) {
						if (t.flags |= 128, i = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), sc(s, !0), s.tail === null && s.tailMode === "hidden" && !c.alternate && !K) return cc(t), null;
					} else 2 * z() - s.renderingStartTime > tl && n !== 1073741824 && (t.flags |= 128, i = !0, sc(s, !1), t.lanes = 4194304);
					s.isBackwards ? (c.sibling = t.child, t.child = c) : (n = s.last, n === null ? t.child = c : n.sibling = c, s.last = c);
				}
				return s.tail === null ? (cc(t), null) : (t = s.tail, s.rendering = t, s.tail = t.sibling, s.renderingStartTime = z(), t.sibling = null, n = q.current, G(q, i ? n & 1 | 2 : n & 1), t);
			case 22:
			case 23: return Tl(), i = t.memoizedState !== null, e !== null && e.memoizedState !== null !== i && (t.flags |= 8192), i && t.mode & 1 ? Gc & 1073741824 && (cc(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : cc(t), null;
			case 24: return null;
			case 25: return null;
		}
		throw Error(r(156, t.tag));
	}
	function uc(e, t) {
		switch (ba(t), t.tag) {
			case 1: return Xi(t.type) && Zi(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 3: return ho(), W(qi), W(Ki), bo(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
			case 5: return _o(t), null;
			case 13:
				if (W(q), e = t.memoizedState, e !== null && e.dehydrated !== null) {
					if (t.alternate === null) throw Error(r(340));
					ja();
				}
				return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 19: return W(q), null;
			case 4: return ho(), null;
			case 10: return Ga(t.type._context), null;
			case 22:
			case 23: return Tl(), null;
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
			$(e, t, n);
		}
		else n.current = null;
	}
	function hc(e, t, n) {
		try {
			n();
		} catch (n) {
			$(e, t, n);
		}
	}
	var gc = !1;
	function _c(e, t) {
		if (bi = pn, e = Nr(), Pr(e)) {
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
		for (xi = {
			focusedElem: e,
			selectionRange: n
		}, pn = !1, X = t; X !== null;) if (t = X, e = t.child, t.subtreeFlags & 1028 && e !== null) e.return = t, X = e;
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
				$(t, t.return, e);
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
		t !== null && (e.alternate = null, xc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Mi], delete t[Ni], delete t[Fi], delete t[Ii], delete t[Li])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
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
		if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = yi));
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
		if (wt && typeof wt.onCommitFiberUnmount == "function") try {
			wt.onCommitFiberUnmount(Ct, n);
		} catch {}
		switch (n.tag) {
			case 5: fc || mc(n, t);
			case 6:
				var r = Ec, i = Dc;
				Ec = null, Oc(e, t, n), Ec = r, Dc = i, Ec !== null && (Dc ? (e = Ec, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Ec.removeChild(n.stateNode));
				break;
			case 18:
				Ec !== null && (Dc ? (e = Ec, n = n.stateNode, e.nodeType === 8 ? Oi(e.parentNode, n) : e.nodeType === 1 && Oi(e, n), dn(e)) : Oi(Ec, n.stateNode));
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
					$(n, t, e);
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
				var r = Hl.bind(null, e, t);
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
				$(a, t, e);
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
						$(e, e.return, t);
					}
					try {
						vc(5, e, e.return);
					} catch (t) {
						$(e, e.return, t);
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
						L(a, "");
					} catch (t) {
						$(e, e.return, t);
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
						a[Ni] = o;
					} catch (t) {
						$(e, e.return, t);
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
						$(e, e.return, t);
					}
				}
				break;
			case 3:
				if (jc(t, e), Nc(e), i & 4 && n !== null && n.memoizedState.isDehydrated) try {
					dn(t.containerInfo);
				} catch (t) {
					$(e, e.return, t);
				}
				break;
			case 4:
				jc(t, e), Nc(e);
				break;
			case 13:
				jc(t, e), Nc(e), a = e.child, a.flags & 8192 && (o = a.memoizedState !== null, a.stateNode.isHidden = o, !o || a.alternate !== null && a.alternate.memoizedState !== null || (el = z())), i & 4 && Ac(e);
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
											$(i, n, e);
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
									a = f.stateNode, u ? (o = a.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (c = f.stateNode, l = f.memoizedProps.style, s = l != null && l.hasOwnProperty("display") ? l.display : null, c.style.display = Pe("display", s));
								} catch (t) {
									$(e, e.return, t);
								}
							}
						} else if (f.tag === 6) {
							if (d === null) try {
								f.stateNode.nodeValue = u ? "" : f.memoizedProps;
							} catch (t) {
								$(e, e.return, t);
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
						i.flags & 32 && (L(a, ""), i.flags &= -33), Tc(e, Cc(e), a);
						break;
					case 3:
					case 4:
						var o = i.stateNode.containerInfo;
						wc(e, Cc(e), o);
						break;
					default: throw Error(r(161));
				}
			} catch (t) {
				$(e, e.return, t);
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
							o !== null && so(t, o, i);
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
								so(t, s, n);
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
										f !== null && dn(f);
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
					$(t, t.return, e);
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
							$(t, n, e);
						}
						break;
					case 1:
						var r = t.stateNode;
						if (typeof r.componentDidMount == "function") {
							var i = t.return;
							try {
								r.componentDidMount();
							} catch (e) {
								$(t, i, e);
							}
						}
						var a = t.return;
						try {
							bc(t);
						} catch (e) {
							$(t, a, e);
						}
						break;
					case 5:
						var o = t.return;
						try {
							bc(t);
						} catch (e) {
							$(t, o, e);
						}
				}
			} catch (e) {
				$(t, t.return, e);
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
	var zc = Math.ceil, Bc = C.ReactCurrentDispatcher, Vc = C.ReactCurrentOwner, Hc = C.ReactCurrentBatchConfig, Z = 0, Uc = null, Q = null, Wc = 0, Gc = 0, Kc = Wi(0), qc = 0, Jc = null, Yc = 0, Xc = 0, Zc = 0, Qc = null, $c = null, el = 0, tl = Infinity, nl = null, rl = !1, il = null, al = null, ol = !1, sl = null, cl = 0, ll = 0, ul = null, dl = -1, fl = 0;
	function pl() {
		return Z & 6 ? z() : dl === -1 ? dl = z() : dl;
	}
	function ml(e) {
		return e.mode & 1 ? Z & 2 && Wc !== 0 ? Wc & -Wc : Na.transition === null ? (e = B, e === 0 ? (e = window.event, e = e === void 0 ? 16 : yn(e.type), e) : e) : (fl === 0 && (fl = Lt()), fl) : 1;
	}
	function hl(e, t, n, i) {
		if (50 < ll) throw ll = 0, ul = null, Error(r(185));
		zt(e, n, i), (!(Z & 2) || e !== Uc) && (e === Uc && (!(Z & 2) && (Xc |= n), qc === 4 && xl(e, Wc)), gl(e, i), n === 1 && Z === 0 && !(t.mode & 1) && (tl = z() + 500, ra && sa()));
	}
	function gl(e, t) {
		var n = e.callbackNode;
		Ft(e, t);
		var r = Nt(e, e === Uc ? Wc : 0);
		if (r === 0) n !== null && mt(n), e.callbackNode = null, e.callbackPriority = 0;
		else if (t = r & -r, e.callbackPriority !== t) {
			if (n != null && mt(n), t === 1) e.tag === 0 ? oa(Sl.bind(null, e)) : aa(Sl.bind(null, e)), Ei(function() {
				!(Z & 6) && sa();
			}), n = null;
			else {
				switch (Ht(r)) {
					case 1:
						n = vt;
						break;
					case 4:
						n = yt;
						break;
					case 16:
						n = bt;
						break;
					case 536870912:
						n = St;
						break;
					default: n = bt;
				}
				n = Wl(n, _l.bind(null, e));
			}
			e.callbackPriority = t, e.callbackNode = n;
		}
	}
	function _l(e, t) {
		if (dl = -1, fl = 0, Z & 6) throw Error(r(327));
		var n = e.callbackNode;
		if (Ll() && e.callbackNode !== n) return null;
		var i = Nt(e, e === Uc ? Wc : 0);
		if (i === 0) return null;
		if (i & 30 || (i & e.expiredLanes) !== 0 || t) t = Al(e, i);
		else {
			t = i;
			var a = Z;
			Z |= 2;
			var o = Ol();
			(Uc !== e || Wc !== t) && (nl = null, tl = z() + 500, El(e, t));
			do
				try {
					Ml();
					break;
				} catch (t) {
					Dl(e, t);
				}
			while (1);
			Wa(), Bc.current = o, Z = a, Q === null ? (Uc = null, Wc = 0, t = qc) : t = 0;
		}
		if (t !== 0) {
			if (t === 2 && (a = It(e), a !== 0 && (i = a, t = vl(e, a))), t === 1) throw n = Jc, El(e, 0), xl(e, i), gl(e, z()), n;
			if (t === 6) xl(e, i);
			else {
				if (a = e.current.alternate, !(i & 30) && !bl(a) && (t = Al(e, i), t === 2 && (o = It(e), o !== 0 && (i = o, t = vl(e, o))), t === 1)) throw n = Jc, El(e, 0), xl(e, i), gl(e, z()), n;
				switch (e.finishedWork = a, e.finishedLanes = i, t) {
					case 0:
					case 1: throw Error(r(345));
					case 2:
						Fl(e, $c, nl);
						break;
					case 3:
						if (xl(e, i), (i & 130023424) === i && (t = el + 500 - z(), 10 < t)) {
							if (Nt(e, 0) !== 0) break;
							if (a = e.suspendedLanes, (a & i) !== i) {
								pl(), e.pingedLanes |= e.suspendedLanes & a;
								break;
							}
							e.timeoutHandle = Ci(Fl.bind(null, e, $c, nl), t);
							break;
						}
						Fl(e, $c, nl);
						break;
					case 4:
						if (xl(e, i), (i & 4194240) === i) break;
						for (t = e.eventTimes, a = -1; 0 < i;) {
							var s = 31 - Et(i);
							o = 1 << s, s = t[s], s > a && (a = s), i &= ~o;
						}
						if (i = a, i = z() - i, i = (120 > i ? 120 : 480 > i ? 480 : 1080 > i ? 1080 : 1920 > i ? 1920 : 3e3 > i ? 3e3 : 4320 > i ? 4320 : 1960 * zc(i / 1960)) - i, 10 < i) {
							e.timeoutHandle = Ci(Fl.bind(null, e, $c, nl), i);
							break;
						}
						Fl(e, $c, nl);
						break;
					case 5:
						Fl(e, $c, nl);
						break;
					default: throw Error(r(329));
				}
			}
		}
		return gl(e, z()), e.callbackNode === n ? _l.bind(null, e) : null;
	}
	function vl(e, t) {
		var n = Qc;
		return e.current.memoizedState.isDehydrated && (El(e, t).flags |= 256), e = Al(e, t), e !== 2 && (t = $c, $c = n, t !== null && yl(t)), e;
	}
	function yl(e) {
		$c === null ? $c = e : $c.push.apply($c, e);
	}
	function bl(e) {
		for (var t = e;;) {
			if (t.flags & 16384) {
				var n = t.updateQueue;
				if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
					var i = n[r], a = i.getSnapshot;
					i = i.value;
					try {
						if (!Or(a(), i)) return !1;
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
		for (t &= ~Zc, t &= ~Xc, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
			var n = 31 - Et(t), r = 1 << n;
			e[n] = -1, t &= ~r;
		}
	}
	function Sl(e) {
		if (Z & 6) throw Error(r(327));
		Ll();
		var t = Nt(e, 0);
		if (!(t & 1)) return gl(e, z()), null;
		var n = Al(e, t);
		if (e.tag !== 0 && n === 2) {
			var i = It(e);
			i !== 0 && (t = i, n = vl(e, i));
		}
		if (n === 1) throw n = Jc, El(e, 0), xl(e, t), gl(e, z()), n;
		if (n === 6) throw Error(r(345));
		return e.finishedWork = e.current.alternate, e.finishedLanes = t, Fl(e, $c, nl), gl(e, z()), null;
	}
	function Cl(e, t) {
		var n = Z;
		Z |= 1;
		try {
			return e(t);
		} finally {
			Z = n, Z === 0 && (tl = z() + 500, ra && sa());
		}
	}
	function wl(e) {
		sl !== null && sl.tag === 0 && !(Z & 6) && Ll();
		var t = Z;
		Z |= 1;
		var n = Hc.transition, r = B;
		try {
			if (Hc.transition = null, B = 1, e) return e();
		} finally {
			B = r, Hc.transition = n, Z = t, !(Z & 6) && sa();
		}
	}
	function Tl() {
		Gc = Kc.current, W(Kc);
	}
	function El(e, t) {
		e.finishedWork = null, e.finishedLanes = 0;
		var n = e.timeoutHandle;
		if (n !== -1 && (e.timeoutHandle = -1, wi(n)), Q !== null) for (n = Q.return; n !== null;) {
			var r = n;
			switch (ba(r), r.tag) {
				case 1:
					r = r.type.childContextTypes, r != null && Zi();
					break;
				case 3:
					ho(), W(qi), W(Ki), bo();
					break;
				case 5:
					_o(r);
					break;
				case 4:
					ho();
					break;
				case 13:
					W(q);
					break;
				case 19:
					W(q);
					break;
				case 10:
					Ga(r.type._context);
					break;
				case 22:
				case 23: Tl();
			}
			n = n.return;
		}
		if (Uc = e, Q = e = Yl(e.current, null), Wc = Gc = t, qc = 0, Jc = null, Zc = Xc = Yc = 0, $c = Qc = null, Ya !== null) {
			for (t = 0; t < Ya.length; t++) if (n = Ya[t], r = n.interleaved, r !== null) {
				n.interleaved = null;
				var i = r.next, a = n.pending;
				if (a !== null) {
					var o = a.next;
					a.next = i, r.next = o;
				}
				n.pending = r;
			}
			Ya = null;
		}
		return e;
	}
	function Dl(e, t) {
		do {
			var n = Q;
			try {
				if (Wa(), xo.current = ps, To) {
					for (var i = J.memoizedState; i !== null;) {
						var a = i.queue;
						a !== null && (a.pending = null), i = i.next;
					}
					To = !1;
				}
				if (Co = 0, Y = wo = J = null, Eo = !1, Do = 0, Vc.current = null, n === null || n.return === null) {
					qc = 1, Jc = t, Q = null;
					break;
				}
				a: {
					var o = e, s = n.return, c = n, l = t;
					if (t = Wc, c.flags |= 32768, typeof l == "object" && l && typeof l.then == "function") {
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
								As(o, u, t), kl();
								break a;
							}
							l = Error(r(426));
						}
					} else if (K && c.mode & 1) {
						var _ = js(s);
						if (_ !== null) {
							!(_.flags & 65536) && (_.flags |= 256), Ms(_, s, c, o, t), Ma(ws(l, c));
							break a;
						}
					}
					o = l = ws(l, c), qc !== 4 && (qc = 2), Qc === null ? Qc = [o] : Qc.push(o), o = s;
					do {
						switch (o.tag) {
							case 3:
								o.flags |= 65536, t &= -t, o.lanes |= t;
								var v = Os(o, l, t);
								ao(o, v);
								break a;
							case 1:
								c = l;
								var y = o.type, b = o.stateNode;
								if (!(o.flags & 128) && (typeof y.getDerivedStateFromError == "function" || b !== null && typeof b.componentDidCatch == "function" && (al === null || !al.has(b)))) {
									o.flags |= 65536, t &= -t, o.lanes |= t;
									var x = ks(o, c, t);
									ao(o, x);
									break a;
								}
						}
						o = o.return;
					} while (o !== null);
				}
				Pl(n);
			} catch (e) {
				t = e, Q === n && n !== null && (Q = n = n.return);
				continue;
			}
			break;
		} while (1);
	}
	function Ol() {
		var e = Bc.current;
		return Bc.current = ps, e === null ? ps : e;
	}
	function kl() {
		(qc === 0 || qc === 3 || qc === 2) && (qc = 4), Uc === null || !(Yc & 268435455) && !(Xc & 268435455) || xl(Uc, Wc);
	}
	function Al(e, t) {
		var n = Z;
		Z |= 2;
		var i = Ol();
		(Uc !== e || Wc !== t) && (nl = null, El(e, t));
		do
			try {
				jl();
				break;
			} catch (t) {
				Dl(e, t);
			}
		while (1);
		if (Wa(), Z = n, Bc.current = i, Q !== null) throw Error(r(261));
		return Uc = null, Wc = 0, qc;
	}
	function jl() {
		for (; Q !== null;) Nl(Q);
	}
	function Ml() {
		for (; Q !== null && !ht();) Nl(Q);
	}
	function Nl(e) {
		var t = Ul(e.alternate, e, Gc);
		e.memoizedProps = e.pendingProps, t === null ? Pl(e) : Q = t, Vc.current = null;
	}
	function Pl(e) {
		var t = e;
		do {
			var n = t.alternate;
			if (e = t.return, t.flags & 32768) {
				if (n = uc(n, t), n !== null) {
					n.flags &= 32767, Q = n;
					return;
				}
				if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
				else {
					qc = 6, Q = null;
					return;
				}
			} else if (n = lc(n, t, Gc), n !== null) {
				Q = n;
				return;
			}
			if (t = t.sibling, t !== null) {
				Q = t;
				return;
			}
			Q = t = e;
		} while (t !== null);
		qc === 0 && (qc = 5);
	}
	function Fl(e, t, n) {
		var r = B, i = Hc.transition;
		try {
			Hc.transition = null, B = 1, Il(e, t, n, r);
		} finally {
			Hc.transition = i, B = r;
		}
		return null;
	}
	function Il(e, t, n, i) {
		do
			Ll();
		while (sl !== null);
		if (Z & 6) throw Error(r(327));
		n = e.finishedWork;
		var a = e.finishedLanes;
		if (n === null) return null;
		if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(r(177));
		e.callbackNode = null, e.callbackPriority = 0;
		var o = n.lanes | n.childLanes;
		if (Bt(e, o), e === Uc && (Q = Uc = null, Wc = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || ol || (ol = !0, Wl(bt, function() {
			return Ll(), null;
		})), o = (n.flags & 15990) != 0, n.subtreeFlags & 15990 || o) {
			o = Hc.transition, Hc.transition = null;
			var s = B;
			B = 1;
			var c = Z;
			Z |= 4, Vc.current = null, _c(e, n), Mc(n, e), Fr(xi), pn = !!bi, xi = bi = null, e.current = n, Pc(n, e, a), gt(), Z = c, B = s, Hc.transition = o;
		} else e.current = n;
		if (ol && (ol = !1, sl = e, cl = a), o = e.pendingLanes, o === 0 && (al = null), Tt(n.stateNode, i), gl(e, z()), t !== null) for (i = e.onRecoverableError, n = 0; n < t.length; n++) a = t[n], i(a.value, {
			componentStack: a.stack,
			digest: a.digest
		});
		if (rl) throw rl = !1, e = il, il = null, e;
		return cl & 1 && e.tag !== 0 && Ll(), o = e.pendingLanes, o & 1 ? e === ul ? ll++ : (ll = 0, ul = e) : ll = 0, sa(), null;
	}
	function Ll() {
		if (sl !== null) {
			var e = Ht(cl), t = Hc.transition, n = B;
			try {
				if (Hc.transition = null, B = 16 > e ? 16 : e, sl === null) var i = !1;
				else {
					if (e = sl, sl = null, cl = 0, Z & 6) throw Error(r(331));
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
								$(c, c.return, e);
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
					if (Z = a, sa(), wt && typeof wt.onPostCommitFiberRoot == "function") try {
						wt.onPostCommitFiberRoot(Ct, e);
					} catch {}
					i = !0;
				}
				return i;
			} finally {
				B = n, Hc.transition = t;
			}
		}
		return !1;
	}
	function Rl(e, t, n) {
		t = ws(n, t), t = Os(e, t, 1), e = ro(e, t, 1), t = pl(), e !== null && (zt(e, 1, t), gl(e, t));
	}
	function $(e, t, n) {
		if (e.tag === 3) Rl(e, e, n);
		else for (; t !== null;) {
			if (t.tag === 3) {
				Rl(t, e, n);
				break;
			} else if (t.tag === 1) {
				var r = t.stateNode;
				if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (al === null || !al.has(r))) {
					e = ws(n, e), e = ks(t, e, 1), t = ro(t, e, 1), e = pl(), t !== null && (zt(t, 1, e), gl(t, e));
					break;
				}
			}
			t = t.return;
		}
	}
	function zl(e, t, n) {
		var r = e.pingCache;
		r !== null && r.delete(t), t = pl(), e.pingedLanes |= e.suspendedLanes & n, Uc === e && (Wc & n) === n && (qc === 4 || qc === 3 && (Wc & 130023424) === Wc && 500 > z() - el ? El(e, 0) : Zc |= n), gl(e, t);
	}
	function Bl(e, t) {
		t === 0 && (e.mode & 1 ? (t = jt, jt <<= 1, !(jt & 130023424) && (jt = 4194304)) : t = 1);
		var n = pl();
		e = Qa(e, t), e !== null && (zt(e, t, n), gl(e, n));
	}
	function Vl(e) {
		var t = e.memoizedState, n = 0;
		t !== null && (n = t.retryLane), Bl(e, n);
	}
	function Hl(e, t) {
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
		i !== null && i.delete(t), Bl(e, n);
	}
	var Ul = function(e, t, n) {
		if (e !== null) if (e.memoizedProps !== t.pendingProps || qi.current) Ps = !0;
		else {
			if ((e.lanes & n) === 0 && !(t.flags & 128)) return Ps = !1, rc(e, t, n);
			Ps = !!(e.flags & 131072);
		}
		else Ps = !1, K && t.flags & 1048576 && va(t, da, t.index);
		switch (t.lanes = 0, t.tag) {
			case 2:
				var i = t.type;
				tc(e, t), e = t.pendingProps;
				var a = Yi(t, Ki.current);
				qa(t, n), a = jo(null, t, i, e, a, n);
				var o = Mo();
				return t.flags |= 1, typeof a == "object" && a && typeof a.render == "function" && a.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Xi(i) ? (o = !0, ea(t)) : o = !1, t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null, eo(t), a.updater = ys, t.stateNode = a, a._reactInternals = t, Cs(t, i, e, n), t = Us(null, t, i, !0, o, n)) : (t.tag = 0, K && o && ya(t), Fs(null, t, a, n), t = t.child), t;
			case 16:
				i = t.elementType;
				a: {
					switch (tc(e, t), e = t.pendingProps, a = i._init, i = a(i._payload), t.type = i, a = t.tag = Jl(i), e = _s(i, e), a) {
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
					i = t.pendingProps, o = t.memoizedState, a = o.element, to(e, t), oo(t, i, null, n);
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
					} else for (Sa = ki(t.stateNode.containerInfo.firstChild), xa = t, K = !0, Ca = null, n = za(t, null, i, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling;
					else {
						if (ja(), i === a) {
							t = nc(e, t, n);
							break a;
						}
						Fs(e, t, i, n);
					}
					t = t.child;
				}
				return t;
			case 5: return go(t), e === null && Da(t), i = t.type, a = t.pendingProps, o = e === null ? null : e.memoizedProps, s = a.children, Si(i, a) ? s = null : o !== null && Si(i, o) && (t.flags |= 32), Bs(e, t), Fs(e, t, s, n), t.child;
			case 6: return e === null && Da(t), null;
			case 13: return Js(e, t, n);
			case 4: return mo(t, t.stateNode.containerInfo), i = t.pendingProps, e === null ? t.child = Ra(t, null, i, n) : Fs(e, t, i, n), t.child;
			case 11: return i = t.type, a = t.pendingProps, a = t.elementType === i ? a : _s(i, a), Is(e, t, i, a, n);
			case 7: return Fs(e, t, t.pendingProps, n), t.child;
			case 8: return Fs(e, t, t.pendingProps.children, n), t.child;
			case 12: return Fs(e, t, t.pendingProps.children, n), t.child;
			case 10:
				a: {
					if (i = t.type._context, a = t.pendingProps, o = t.memoizedProps, s = a.value, G(Ba, i._currentValue), i._currentValue = s, o !== null) if (Or(o.value, s)) {
						if (o.children === a.children && !qi.current) {
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
										l = no(-1, n & -n), l.tag = 2;
										var u = o.updateQueue;
										if (u !== null) {
											u = u.shared;
											var d = u.pending;
											d === null ? l.next = l : (l.next = d.next, d.next = l), u.pending = l;
										}
									}
									o.lanes |= n, l = o.alternate, l !== null && (l.lanes |= n), Ka(o.return, n, t), c.lanes |= n;
									break;
								}
								l = l.next;
							}
						} else if (o.tag === 10) s = o.type === t.type ? null : o.child;
						else if (o.tag === 18) {
							if (s = o.return, s === null) throw Error(r(341));
							s.lanes |= n, c = s.alternate, c !== null && (c.lanes |= n), Ka(s, n, t), s = o.sibling;
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
			case 9: return a = t.type, i = t.pendingProps.children, qa(t, n), a = Ja(a), i = i(a), t.flags |= 1, Fs(e, t, i, n), t.child;
			case 14: return i = t.type, a = _s(i, t.pendingProps), a = _s(i.type, a), Ls(e, t, i, a, n);
			case 15: return Rs(e, t, t.type, t.pendingProps, n);
			case 17: return i = t.type, a = t.pendingProps, a = t.elementType === i ? a : _s(i, a), tc(e, t), t.tag = 1, Xi(i) ? (e = !0, ea(t)) : e = !1, qa(t, n), xs(t, i, a), Cs(t, i, a, n), Us(null, t, i, !0, e, n);
			case 19: return ec(e, t, n);
			case 22: return zs(e, t, n);
		}
		throw Error(r(156, t.tag));
	};
	function Wl(e, t) {
		return pt(e, t);
	}
	function Gl(e, t, n, r) {
		this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
	}
	function Kl(e, t, n, r) {
		return new Gl(e, t, n, r);
	}
	function ql(e) {
		return e = e.prototype, !(!e || !e.isReactComponent);
	}
	function Jl(e) {
		if (typeof e == "function") return ql(e) ? 1 : 0;
		if (e != null) {
			if (e = e.$$typeof, e === A) return 11;
			if (e === N) return 14;
		}
		return 2;
	}
	function Yl(e, t) {
		var n = e.alternate;
		return n === null ? (n = Kl(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
			lanes: t.lanes,
			firstContext: t.firstContext
		}, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
	}
	function Xl(e, t, n, i, a, o) {
		var s = 2;
		if (i = e, typeof e == "function") ql(e) && (s = 1);
		else if (typeof e == "string") s = 5;
		else a: switch (e) {
			case E: return Zl(n.children, a, o, t);
			case D:
				s = 8, a |= 8;
				break;
			case O: return e = Kl(12, n, t, a | 2), e.elementType = O, e.lanes = o, e;
			case j: return e = Kl(13, n, t, a), e.elementType = j, e.lanes = o, e;
			case M: return e = Kl(19, n, t, a), e.elementType = M, e.lanes = o, e;
			case F: return Ql(n, a, o, t);
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
		return t = Kl(s, n, t, a), t.elementType = e, t.type = i, t.lanes = o, t;
	}
	function Zl(e, t, n, r) {
		return e = Kl(7, e, r, t), e.lanes = n, e;
	}
	function Ql(e, t, n, r) {
		return e = Kl(22, e, r, t), e.elementType = F, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
	}
	function $l(e, t, n) {
		return e = Kl(6, e, null, t), e.lanes = n, e;
	}
	function eu(e, t, n) {
		return t = Kl(4, e.children === null ? [] : e.children, e.key, t), t.lanes = n, t.stateNode = {
			containerInfo: e.containerInfo,
			pendingChildren: null,
			implementation: e.implementation
		}, t;
	}
	function tu(e, t, n, r, i) {
		this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Rt(0), this.expirationTimes = Rt(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Rt(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null;
	}
	function nu(e, t, n, r, i, a, o, s, c) {
		return e = new tu(e, t, n, s, c), t === 1 ? (t = 1, !0 === a && (t |= 8)) : t = 0, a = Kl(3, null, null, t), e.current = a, a.stateNode = e, a.memoizedState = {
			element: r,
			isDehydrated: n,
			cache: null,
			transitions: null,
			pendingSuspenseBoundaries: null
		}, eo(a), e;
	}
	function ru(e, t, n) {
		var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
		return {
			$$typeof: T,
			key: r == null ? null : "" + r,
			children: e,
			containerInfo: t,
			implementation: n
		};
	}
	function iu(e) {
		if (!e) return Gi;
		e = e._reactInternals;
		a: {
			if (R(e) !== e || e.tag !== 1) throw Error(r(170));
			var t = e;
			do {
				switch (t.tag) {
					case 3:
						t = t.stateNode.context;
						break a;
					case 1: if (Xi(t.type)) {
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
			if (Xi(n)) return $i(e, n, t);
		}
		return t;
	}
	function au(e, t, n, r, i, a, o, s, c) {
		return e = nu(n, r, !0, e, i, a, o, s, c), e.context = iu(null), n = e.current, r = pl(), i = ml(n), a = no(r, i), a.callback = t ?? null, ro(n, a, i), e.current.lanes = i, zt(e, i, r), gl(e, r), e;
	}
	function ou(e, t, n, r) {
		var i = t.current, a = pl(), o = ml(i);
		return n = iu(n), t.context === null ? t.context = n : t.pendingContext = n, t = no(a, o), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = ro(i, t, o), e !== null && (hl(e, i, o, a), io(e, i, o)), o;
	}
	function su(e) {
		if (e = e.current, !e.child) return null;
		switch (e.child.tag) {
			case 5: return e.child.stateNode;
			default: return e.child.stateNode;
		}
	}
	function cu(e, t) {
		if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
			var n = e.retryLane;
			e.retryLane = n !== 0 && n < t ? n : t;
		}
	}
	function lu(e, t) {
		cu(e, t), (e = e.alternate) && cu(e, t);
	}
	function uu() {
		return null;
	}
	var du = typeof reportError == "function" ? reportError : function(e) {
		console.error(e);
	};
	function fu(e) {
		this._internalRoot = e;
	}
	pu.prototype.render = fu.prototype.render = function(e) {
		var t = this._internalRoot;
		if (t === null) throw Error(r(409));
		ou(e, t, null, null);
	}, pu.prototype.unmount = fu.prototype.unmount = function() {
		var e = this._internalRoot;
		if (e !== null) {
			this._internalRoot = null;
			var t = e.containerInfo;
			wl(function() {
				ou(null, e, null, null);
			}), t[Pi] = null;
		}
	};
	function pu(e) {
		this._internalRoot = e;
	}
	pu.prototype.unstable_scheduleHydration = function(e) {
		if (e) {
			var t = Kt();
			e = {
				blockedOn: null,
				target: e,
				priority: t
			};
			for (var n = 0; n < tn.length && t !== 0 && t < tn[n].priority; n++);
			tn.splice(n, 0, e), n === 0 && on(e);
		}
	};
	function mu(e) {
		return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
	}
	function hu(e) {
		return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
	}
	function gu() {}
	function _u(e, t, n, r, i) {
		if (i) {
			if (typeof r == "function") {
				var a = r;
				r = function() {
					var e = su(o);
					a.call(e);
				};
			}
			var o = au(t, r, e, 0, null, !1, !1, "", gu);
			return e._reactRootContainer = o, e[Pi] = o.current, ci(e.nodeType === 8 ? e.parentNode : e), wl(), o;
		}
		for (; i = e.lastChild;) e.removeChild(i);
		if (typeof r == "function") {
			var s = r;
			r = function() {
				var e = su(c);
				s.call(e);
			};
		}
		var c = nu(e, 0, !1, null, null, !1, !1, "", gu);
		return e._reactRootContainer = c, e[Pi] = c.current, ci(e.nodeType === 8 ? e.parentNode : e), wl(function() {
			ou(t, c, n, r);
		}), c;
	}
	function vu(e, t, n, r, i) {
		var a = n._reactRootContainer;
		if (a) {
			var o = a;
			if (typeof i == "function") {
				var s = i;
				i = function() {
					var e = su(o);
					s.call(e);
				};
			}
			ou(t, o, e, i);
		} else o = _u(n, t, e, i, r);
		return su(o);
	}
	Ut = function(e) {
		switch (e.tag) {
			case 3:
				var t = e.stateNode;
				if (t.current.memoizedState.isDehydrated) {
					var n = Mt(t.pendingLanes);
					n !== 0 && (Vt(t, n | 1), gl(t, z()), !(Z & 6) && (tl = z() + 500, sa()));
				}
				break;
			case 13: wl(function() {
				var t = Qa(e, 1);
				t !== null && hl(t, e, 1, pl());
			}), lu(e, 1);
		}
	}, Wt = function(e) {
		if (e.tag === 13) {
			var t = Qa(e, 134217728);
			t !== null && hl(t, e, 134217728, pl()), lu(e, 134217728);
		}
	}, Gt = function(e) {
		if (e.tag === 13) {
			var t = ml(e), n = Qa(e, t);
			n !== null && hl(n, e, t, pl()), lu(e, t);
		}
	}, Kt = function() {
		return B;
	}, qt = function(e, t) {
		var n = B;
		try {
			return B = e, t();
		} finally {
			B = n;
		}
	}, Ve = function(e, t, n) {
		switch (t) {
			case "input":
				if (ye(e, n), t = n.name, n.type === "radio" && t != null) {
					for (n = e; n.parentNode;) n = n.parentNode;
					for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + "][type=\"radio\"]"), t = 0; t < n.length; t++) {
						var i = n[t];
						if (i !== e && i.form === e.form) {
							var a = Vi(i);
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
	}, qe = Cl, Je = wl;
	var yu = {
		usingClientEntryPoint: !1,
		Events: [
			zi,
			Bi,
			Vi,
			Ge,
			Ke,
			Cl
		]
	}, bu = {
		findFiberByHostInstance: Ri,
		bundleType: 0,
		version: "18.3.1",
		rendererPackageName: "react-dom"
	}, xu = {
		bundleType: bu.bundleType,
		version: bu.version,
		rendererPackageName: bu.rendererPackageName,
		rendererConfig: bu.rendererConfig,
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
			return e = dt(e), e === null ? null : e.stateNode;
		},
		findFiberByHostInstance: bu.findFiberByHostInstance || uu,
		findHostInstancesForRefresh: null,
		scheduleRefresh: null,
		scheduleRoot: null,
		setRefreshHandler: null,
		getCurrentFiber: null,
		reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
	};
	if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
		var Su = __REACT_DEVTOOLS_GLOBAL_HOOK__;
		if (!Su.isDisabled && Su.supportsFiber) try {
			Ct = Su.inject(xu), wt = Su;
		} catch {}
	}
	e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = yu, e.createPortal = function(e, t) {
		var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
		if (!mu(t)) throw Error(r(200));
		return ru(e, t, null, n);
	}, e.createRoot = function(e, t) {
		if (!mu(e)) throw Error(r(299));
		var n = !1, i = "", a = du;
		return t != null && (!0 === t.unstable_strictMode && (n = !0), t.identifierPrefix !== void 0 && (i = t.identifierPrefix), t.onRecoverableError !== void 0 && (a = t.onRecoverableError)), t = nu(e, 1, !1, null, null, n, !1, i, a), e[Pi] = t.current, ci(e.nodeType === 8 ? e.parentNode : e), new fu(t);
	}, e.findDOMNode = function(e) {
		if (e == null) return null;
		if (e.nodeType === 1) return e;
		var t = e._reactInternals;
		if (t === void 0) throw typeof e.render == "function" ? Error(r(188)) : (e = Object.keys(e).join(","), Error(r(268, e)));
		return e = dt(t), e = e === null ? null : e.stateNode, e;
	}, e.flushSync = function(e) {
		return wl(e);
	}, e.hydrate = function(e, t, n) {
		if (!hu(t)) throw Error(r(200));
		return vu(null, e, t, !0, n);
	}, e.hydrateRoot = function(e, t, n) {
		if (!mu(e)) throw Error(r(405));
		var i = n != null && n.hydratedSources || null, a = !1, o = "", s = du;
		if (n != null && (!0 === n.unstable_strictMode && (a = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = au(t, null, e, 1, n ?? null, a, !1, o, s), e[Pi] = t.current, ci(e), i) for (e = 0; e < i.length; e++) n = i[e], a = n._getVersion, a = a(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, a] : t.mutableSourceEagerHydrationData.push(n, a);
		return new pu(t);
	}, e.render = function(e, t, n) {
		if (!hu(t)) throw Error(r(200));
		return vu(null, e, t, !1, n);
	}, e.unmountComponentAtNode = function(e) {
		if (!hu(e)) throw Error(r(40));
		return e._reactRootContainer ? (wl(function() {
			vu(null, null, e, !1, function() {
				e._reactRootContainer = null, e[Pi] = null;
			});
		}), !0) : !1;
	}, e.unstable_batchedUpdates = Cl, e.unstable_renderSubtreeIntoContainer = function(e, t, n, i) {
		if (!hu(n)) throw Error(r(200));
		if (e == null || e._reactInternals === void 0) throw Error(r(38));
		return vu(e, t, n, !1, i);
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
}(it), R;
(function(e) {
	e[e.literal = 0] = "literal", e[e.object = 1] = "object";
})(R ||= {});
function ct(e) {
	return e.length < 2 ? e : e.reduce(function(e, t) {
		var n = e[e.length - 1];
		return !n || n.type !== R.literal || t.type !== R.literal ? e.push(t) : n.value += t.value, e;
	}, []);
}
function lt(e) {
	return typeof e == "function";
}
function ut(e, t, n, r, i, a, o) {
	if (e.length === 1 && ne(e[0])) return [{
		type: R.literal,
		value: e[0].value
	}];
	for (var s = [], c = 0, l = e; c < l.length; c++) {
		var u = l[c];
		if (ne(u)) {
			s.push({
				type: R.literal,
				value: u.value
			});
			continue;
		}
		if (ce(u)) {
			typeof a == "number" && s.push({
				type: R.literal,
				value: n.getNumberFormat(t).format(a)
			});
			continue;
		}
		var d = u.value;
		if (!(i && d in i)) throw new st(d, o);
		var f = i[d];
		if (I(u)) {
			(!f || typeof f == "string" || typeof f == "number") && (f = typeof f == "string" || typeof f == "number" ? String(f) : ""), s.push({
				type: typeof f == "string" ? R.literal : R.object,
				value: f
			});
			continue;
		}
		if (ie(u)) {
			var p = typeof u.style == "string" ? r.date[u.style] : de(u.style) ? u.style.parsedOptions : void 0;
			s.push({
				type: R.literal,
				value: n.getDateTimeFormat(t, p).format(f)
			});
			continue;
		}
		if (ae(u)) {
			var p = typeof u.style == "string" ? r.time[u.style] : de(u.style) ? u.style.parsedOptions : r.time.medium;
			s.push({
				type: R.literal,
				value: n.getDateTimeFormat(t, p).format(f)
			});
			continue;
		}
		if (re(u)) {
			var p = typeof u.style == "string" ? r.number[u.style] : ue(u.style) ? u.style.parsedOptions : void 0;
			p && p.scale && (f *= p.scale || 1), s.push({
				type: R.literal,
				value: n.getNumberFormat(t, p).format(f)
			});
			continue;
		}
		if (le(u)) {
			var m = u.children, h = u.value, g = i[h];
			if (!lt(g)) throw new ot(h, "function", o);
			var _ = g(ut(m, t, n, r, i, a).map(function(e) {
				return e.value;
			}));
			Array.isArray(_) || (_ = [_]), s.push.apply(s, _.map(function(e) {
				return {
					type: typeof e == "string" ? R.literal : R.object,
					value: e
				};
			}));
		}
		if (oe(u)) {
			var v = u.options[f] || u.options.other;
			if (!v) throw new at(u.value, f, Object.keys(u.options), o);
			s.push.apply(s, ut(v.value, t, n, r, i));
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
			s.push.apply(s, ut(v.value, t, n, r, i, f - (u.offset || 0)));
			continue;
		}
	}
	return ct(s);
}
//#endregion
//#region node_modules/.pnpm/intl-messageformat@10.7.7/node_modules/intl-messageformat/lib/src/core.js
function dt(e, t) {
	return t ? v(v(v({}, e || {}), t || {}), Object.keys(e).reduce(function(n, r) {
		return n[r] = v(v({}, e[r]), t[r] || {}), n;
	}, {})) : e;
}
function ft(e, t) {
	return t ? Object.keys(e).reduce(function(n, r) {
		return n[r] = dt(e[r], t[r]), n;
	}, v({}, e)) : e;
}
function pt(e) {
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
function mt(e) {
	return e === void 0 && (e = {
		number: {},
		dateTime: {},
		pluralRules: {}
	}), {
		getNumberFormat: S(function() {
			for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
			return new ((e = Intl.NumberFormat).bind.apply(e, x([void 0], t, !1)))();
		}, {
			cache: pt(e.number),
			strategy: M.variadic
		}),
		getDateTimeFormat: S(function() {
			for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
			return new ((e = Intl.DateTimeFormat).bind.apply(e, x([void 0], t, !1)))();
		}, {
			cache: pt(e.dateTime),
			strategy: M.variadic
		}),
		getPluralRules: S(function() {
			for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
			return new ((e = Intl.PluralRules).bind.apply(e, x([void 0], t, !1)))();
		}, {
			cache: pt(e.pluralRules),
			strategy: M.variadic
		})
	};
}
var ht = function() {
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
				return !e.length || t.type !== R.literal || typeof e[e.length - 1] != "string" ? e.push(t.value) : e[e.length - 1] += t.value, e;
			}, []);
			return n.length <= 1 ? n[0] || "" : n;
		}, this.formatToParts = function(e) {
			return ut(a.ast, a.locales, a.formatters, a.formats, e, void 0, a.message);
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
		this.formats = ft(e.formats, r), this.formatters = i && i.formatters || mt(this.formatterCache);
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
}(), gt;
(function(e) {
	e.FORMAT_ERROR = "FORMAT_ERROR", e.UNSUPPORTED_FORMATTER = "UNSUPPORTED_FORMATTER", e.INVALID_CONFIG = "INVALID_CONFIG", e.MISSING_DATA = "MISSING_DATA", e.MISSING_TRANSLATION = "MISSING_TRANSLATION";
})(gt ||= {});
var z = function(e) {
	_(t, e);
	function t(n, r, i) {
		var a = this, o = i ? i instanceof Error ? i : Error(String(i)) : void 0;
		return a = e.call(this, `[@formatjs/intl Error ${n}] ${r}
${o ? `
${o.message}
${o.stack}` : ""}`) || this, a.code = n, typeof Error.captureStackTrace == "function" && Error.captureStackTrace(a, t), a;
	}
	return t;
}(Error), _t = function(e) {
	_(t, e);
	function t(t, n) {
		return e.call(this, gt.UNSUPPORTED_FORMATTER, t, n) || this;
	}
	return t;
}(z), vt = function(e) {
	_(t, e);
	function t(t, n) {
		return e.call(this, gt.INVALID_CONFIG, t, n) || this;
	}
	return t;
}(z), yt = function(e) {
	_(t, e);
	function t(t, n) {
		return e.call(this, gt.MISSING_DATA, t, n) || this;
	}
	return t;
}(z), bt = function(e) {
	_(t, e);
	function t(t, n, r) {
		var i = e.call(this, gt.FORMAT_ERROR, `${t}
Locale: ${n}
`, r) || this;
		return i.locale = n, i;
	}
	return t;
}(z), xt = function(e) {
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
}(bt), St = function(e) {
	_(t, e);
	function t(t, n) {
		var r = e.call(this, gt.MISSING_TRANSLATION, `Missing message: "${t.id}" for locale "${n}", using ${t.defaultMessage ? `default message (${typeof t.defaultMessage == "string" ? t.defaultMessage : t.defaultMessage.map(function(e) {
			return e.value ?? JSON.stringify(e);
		}).join()})` : "id"} as fallback.`) || this;
		return r.descriptor = t, r;
	}
	return t;
}(z);
//#endregion
//#region node_modules/.pnpm/@formatjs+intl@2.10.15_typescript@5.9.3/node_modules/@formatjs/intl/lib/src/utils.js
function Ct(e, t, n) {
	return n === void 0 && (n = {}), t.reduce(function(t, r) {
		return r in e ? t[r] = e[r] : r in n && (t[r] = n[r]), t;
	}, {});
}
var wt = {
	formats: {},
	messages: {},
	timeZone: void 0,
	defaultLocale: "en",
	defaultFormats: {},
	fallbackOnEmptyString: !0,
	onError: function(e) {},
	onWarn: function(e) {}
};
function Tt() {
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
function Et(e) {
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
function Dt(e) {
	e === void 0 && (e = Tt());
	var t = Intl.RelativeTimeFormat, n = Intl.ListFormat, r = Intl.DisplayNames, i = S(function() {
		for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
		return new ((e = Intl.DateTimeFormat).bind.apply(e, x([void 0], t, !1)))();
	}, {
		cache: Et(e.dateTime),
		strategy: M.variadic
	}), a = S(function() {
		for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
		return new ((e = Intl.NumberFormat).bind.apply(e, x([void 0], t, !1)))();
	}, {
		cache: Et(e.number),
		strategy: M.variadic
	}), o = S(function() {
		for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
		return new ((e = Intl.PluralRules).bind.apply(e, x([void 0], t, !1)))();
	}, {
		cache: Et(e.pluralRules),
		strategy: M.variadic
	});
	return {
		getDateTimeFormat: i,
		getNumberFormat: a,
		getMessageFormat: S(function(e, t, n, r) {
			return new ht(e, t, n, v({ formatters: {
				getNumberFormat: a,
				getDateTimeFormat: i,
				getPluralRules: o
			} }, r || {}));
		}, {
			cache: Et(e.message),
			strategy: M.variadic
		}),
		getRelativeTimeFormat: S(function() {
			var e = [...arguments];
			return new (t.bind.apply(t, x([void 0], e, !1)))();
		}, {
			cache: Et(e.relativeTime),
			strategy: M.variadic
		}),
		getPluralRules: o,
		getListFormat: S(function() {
			var e = [...arguments];
			return new (n.bind.apply(n, x([void 0], e, !1)))();
		}, {
			cache: Et(e.list),
			strategy: M.variadic
		}),
		getDisplayNames: S(function() {
			var e = [...arguments];
			return new (r.bind.apply(r, x([void 0], e, !1)))();
		}, {
			cache: Et(e.displayNames),
			strategy: M.variadic
		})
	};
}
function Ot(e, t, n, r) {
	var i = e && e[t], a;
	if (i && (a = i[n]), a) return a;
	r(new _t(`No ${t} format named: ${n}`));
}
//#endregion
//#region node_modules/.pnpm/@formatjs+intl@2.10.15_typescript@5.9.3/node_modules/@formatjs/intl/lib/src/message.js
function kt(e, t) {
	return Object.keys(e).reduce(function(n, r) {
		return n[r] = v({ timeZone: t }, e[r]), n;
	}, {});
}
function At(e, t) {
	return Object.keys(v(v({}, e), t)).reduce(function(n, r) {
		return n[r] = v(v({}, e[r] || {}), t[r] || {}), n;
	}, {});
}
function jt(e, t) {
	if (!t) return e;
	var n = ht.formats;
	return v(v(v({}, n), e), {
		date: At(kt(n.date, t), kt(e.date || {}, t)),
		time: At(kt(n.time, t), kt(e.time || {}, t))
	});
}
var Mt = function(e, t, n, r, i) {
	var a = e.locale, o = e.formats, s = e.messages, c = e.defaultLocale, l = e.defaultFormats, u = e.fallbackOnEmptyString, d = e.onError, f = e.timeZone, p = e.defaultRichTextElements;
	n === void 0 && (n = { id: "" });
	var m = n.id, h = n.defaultMessage;
	N(!!m, "[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue");
	var g = String(m), _ = s && Object.prototype.hasOwnProperty.call(s, g) && s[g];
	if (Array.isArray(_) && _.length === 1 && _[0].type === F.literal) return _[0].value;
	if (!r && _ && typeof _ == "string" && !p) return _.replace(/'\{(.*?)\}'/gi, "{$1}");
	if (r = v(v({}, p), r || {}), o = jt(o, f), l = jt(l, f), !_) {
		if (u === !1 && _ === "") return _;
		if ((!h || a && a.toLowerCase() !== c.toLowerCase()) && d(new St(n, a)), h) try {
			var y = t.getMessageFormat(h, c, l, i);
			return y.format(r);
		} catch (e) {
			return d(new xt(`Error formatting default message for: "${g}", rendering default message verbatim`, a, n, e)), typeof h == "string" ? h : g;
		}
		return g;
	}
	try {
		var y = t.getMessageFormat(_, a, o, v({ formatters: t }, i || {}));
		return y.format(r);
	} catch (e) {
		d(new xt(`Error formatting message: "${g}", using ${h ? "default message" : "id"} as fallback.`, a, n, e));
	}
	if (h) try {
		var y = t.getMessageFormat(h, c, l, i);
		return y.format(r);
	} catch (e) {
		d(new xt(`Error formatting the default message for: "${g}", rendering message verbatim`, a, n, e));
	}
	return typeof _ == "string" ? _ : typeof h == "string" ? h : g;
}, Nt = [
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
function Pt(e, t, n, r) {
	var i = e.locale, a = e.formats, o = e.onError, s = e.timeZone;
	r === void 0 && (r = {});
	var c = r.format, l = v(v({}, s && { timeZone: s }), c && Ot(a, t, c, o)), u = Ct(r, Nt, l);
	return t === "time" && !u.hour && !u.minute && !u.second && !u.timeStyle && !u.dateStyle && (u = v(v({}, u), {
		hour: "numeric",
		minute: "numeric"
	})), n(i, u);
}
function Ft(e, t) {
	var n = [...arguments].slice(2), r = n[0], i = n[1], a = i === void 0 ? {} : i, o = typeof r == "string" ? new Date(r || 0) : r;
	try {
		return Pt(e, "date", t, a).format(o);
	} catch (t) {
		e.onError(new bt("Error formatting date.", e.locale, t));
	}
	return String(o);
}
function It(e, t) {
	var n = [...arguments].slice(2), r = n[0], i = n[1], a = i === void 0 ? {} : i, o = typeof r == "string" ? new Date(r || 0) : r;
	try {
		return Pt(e, "time", t, a).format(o);
	} catch (t) {
		e.onError(new bt("Error formatting time.", e.locale, t));
	}
	return String(o);
}
function Lt(e, t) {
	var n = [...arguments].slice(2), r = n[0], i = n[1], a = n[2], o = a === void 0 ? {} : a, s = e.timeZone, c = e.locale, l = e.onError, u = Ct(o, Nt, s ? { timeZone: s } : {});
	try {
		return t(c, u).formatRange(r, i);
	} catch (t) {
		l(new bt("Error formatting date time range.", e.locale, t));
	}
	return String(r);
}
function Rt(e, t) {
	var n = [...arguments].slice(2), r = n[0], i = n[1], a = i === void 0 ? {} : i, o = typeof r == "string" ? new Date(r || 0) : r;
	try {
		return Pt(e, "date", t, a).formatToParts(o);
	} catch (t) {
		e.onError(new bt("Error formatting date.", e.locale, t));
	}
	return [];
}
function zt(e, t) {
	var n = [...arguments].slice(2), r = n[0], i = n[1], a = i === void 0 ? {} : i, o = typeof r == "string" ? new Date(r || 0) : r;
	try {
		return Pt(e, "time", t, a).formatToParts(o);
	} catch (t) {
		e.onError(new bt("Error formatting time.", e.locale, t));
	}
	return [];
}
//#endregion
//#region node_modules/.pnpm/@formatjs+intl@2.10.15_typescript@5.9.3/node_modules/@formatjs/intl/lib/src/displayName.js
var Bt = [
	"style",
	"type",
	"fallback",
	"languageDisplay"
];
function Vt(e, t, n, r) {
	var i = e.locale, a = e.onError;
	Intl.DisplayNames || a(new it("Intl.DisplayNames is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-displaynames\"\n", rt.MISSING_INTL_API));
	var o = Ct(r, Bt);
	try {
		return t(i, o).of(n);
	} catch (e) {
		a(new bt("Error formatting display name.", i, e));
	}
}
//#endregion
//#region node_modules/.pnpm/@formatjs+intl@2.10.15_typescript@5.9.3/node_modules/@formatjs/intl/lib/src/list.js
var B = ["type", "style"], Ht = Date.now();
function Ut(e) {
	return `${Ht}_${e}_${Ht}`;
}
function Wt(e, t, n, r) {
	r === void 0 && (r = {});
	var i = Gt(e, t, n, r).reduce(function(e, t) {
		var n = t.value;
		return typeof n == "string" && typeof e[e.length - 1] == "string" ? e[e.length - 1] += n : e.push(n), e;
	}, []);
	return i.length === 1 ? i[0] : i.length === 0 ? "" : i;
}
function Gt(e, t, n, r) {
	var i = e.locale, a = e.onError;
	r === void 0 && (r = {}), Intl.ListFormat || a(new it("Intl.ListFormat is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-listformat\"\n", rt.MISSING_INTL_API));
	var o = Ct(r, B);
	try {
		var s = {}, c = n.map(function(e, t) {
			if (typeof e == "object") {
				var n = Ut(t);
				return s[n] = e, n;
			}
			return String(e);
		});
		return t(i, o).formatToParts(c).map(function(e) {
			return e.type === "literal" ? e : v(v({}, e), { value: s[e.value] || e.value });
		});
	} catch (e) {
		a(new bt("Error formatting list.", i, e));
	}
	return n;
}
//#endregion
//#region node_modules/.pnpm/@formatjs+intl@2.10.15_typescript@5.9.3/node_modules/@formatjs/intl/lib/src/plural.js
var Kt = ["type"];
function qt(e, t, n, r) {
	var i = e.locale, a = e.onError;
	r === void 0 && (r = {}), Intl.PluralRules || a(new it("Intl.PluralRules is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-pluralrules\"\n", rt.MISSING_INTL_API));
	var o = Ct(r, Kt);
	try {
		return t(i, o).select(n);
	} catch (e) {
		a(new bt("Error formatting plural.", i, e));
	}
	return "other";
}
//#endregion
//#region node_modules/.pnpm/@formatjs+intl@2.10.15_typescript@5.9.3/node_modules/@formatjs/intl/lib/src/relativeTime.js
var Jt = ["numeric", "style"];
function Yt(e, t, n) {
	var r = e.locale, i = e.formats, a = e.onError;
	n === void 0 && (n = {});
	var o = n.format, s = !!o && Ot(i, "relative", o, a) || {};
	return t(r, Ct(n, Jt, s));
}
function Xt(e, t, n, r, i) {
	i === void 0 && (i = {}), r ||= "second", Intl.RelativeTimeFormat || e.onError(new it("Intl.RelativeTimeFormat is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-relativetimeformat\"\n", rt.MISSING_INTL_API));
	try {
		return Yt(e, t, i).format(n, r);
	} catch (t) {
		e.onError(new bt("Error formatting relative time.", e.locale, t));
	}
	return String(n);
}
//#endregion
//#region node_modules/.pnpm/@formatjs+intl@2.10.15_typescript@5.9.3/node_modules/@formatjs/intl/lib/src/number.js
var Zt = [
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
function Qt(e, t, n) {
	var r = e.locale, i = e.formats, a = e.onError;
	n === void 0 && (n = {});
	var o = n.format, s = o && Ot(i, "number", o, a) || {};
	return t(r, Ct(n, Zt, s));
}
function $t(e, t, n, r) {
	r === void 0 && (r = {});
	try {
		return Qt(e, t, r).format(n);
	} catch (t) {
		e.onError(new bt("Error formatting number.", e.locale, t));
	}
	return String(n);
}
function en(e, t, n, r) {
	r === void 0 && (r = {});
	try {
		return Qt(e, t, r).formatToParts(n);
	} catch (t) {
		e.onError(new bt("Error formatting number.", e.locale, t));
	}
	return [];
}
//#endregion
//#region node_modules/.pnpm/@formatjs+intl@2.10.15_typescript@5.9.3/node_modules/@formatjs/intl/lib/src/create-intl.js
function tn(e) {
	return typeof (e ? e[Object.keys(e)[0]] : void 0) == "string";
}
function nn(e) {
	e.onWarn && e.defaultRichTextElements && tn(e.messages || {}) && e.onWarn("[@formatjs/intl] \"defaultRichTextElements\" was specified but \"message\" was not pre-compiled. \nPlease consider using \"@formatjs/cli\" to pre-compile your messages for performance.\nFor more details see https://formatjs.io/docs/getting-started/message-distribution");
}
function rn(e, t) {
	var n = Dt(t), r = v(v({}, wt), e), i = r.locale, a = r.defaultLocale, o = r.onError;
	return i ? !Intl.NumberFormat.supportedLocalesOf(i).length && o ? o(new yt(`Missing locale data for locale: "${i}" in Intl.NumberFormat. Using default locale: "${a}" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details`)) : !Intl.DateTimeFormat.supportedLocalesOf(i).length && o && o(new yt(`Missing locale data for locale: "${i}" in Intl.DateTimeFormat. Using default locale: "${a}" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details`)) : (o && o(new vt(`"locale" was not configured, using "${a}" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details`)), r.locale = r.defaultLocale || "en"), nn(r), v(v({}, r), {
		formatters: n,
		formatNumber: $t.bind(null, r, n.getNumberFormat),
		formatNumberToParts: en.bind(null, r, n.getNumberFormat),
		formatRelativeTime: Xt.bind(null, r, n.getRelativeTimeFormat),
		formatDate: Ft.bind(null, r, n.getDateTimeFormat),
		formatDateToParts: Rt.bind(null, r, n.getDateTimeFormat),
		formatTime: It.bind(null, r, n.getDateTimeFormat),
		formatDateTimeRange: Lt.bind(null, r, n.getDateTimeFormat),
		formatTimeToParts: zt.bind(null, r, n.getDateTimeFormat),
		formatPlural: qt.bind(null, r, n.getPluralRules),
		formatMessage: Mt.bind(null, r, n),
		$t: Mt.bind(null, r, n),
		formatList: Wt.bind(null, r, n.getListFormat),
		formatListToParts: Gt.bind(null, r, n.getListFormat),
		formatDisplayName: Vt.bind(null, r, n.getDisplayNames)
	});
}
//#endregion
//#region node_modules/.pnpm/react-intl@6.8.9_react@18.3.1_typescript@5.9.3/node_modules/react-intl/lib/src/utils.js
var V = /* @__PURE__ */ c(u());
function an(e) {
	N(e, "[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.");
}
var on = v(v({}, wt), { textComponent: V.Fragment });
function sn(e) {
	return function(t) {
		return e(V.Children.toArray(t));
	};
}
function cn(e, t) {
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
var ln = /* @__PURE__ */ o(((e) => {
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
})), un = /* @__PURE__ */ o(((e, t) => {
	t.exports = ln();
})), dn = /* @__PURE__ */ o(((e, t) => {
	var n = un(), r = {
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
dn();
var fn = typeof window < "u" && !window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__ ? window.__REACT_INTL_CONTEXT__ || (window.__REACT_INTL_CONTEXT__ = V.createContext(null)) : V.createContext(null);
fn.Consumer;
var pn = fn.Provider, mn = fn;
//#endregion
//#region node_modules/.pnpm/react-intl@6.8.9_react@18.3.1_typescript@5.9.3/node_modules/react-intl/lib/src/components/useIntl.js
function hn() {
	var e = V.useContext(mn);
	return an(e), e;
}
//#endregion
//#region node_modules/.pnpm/react-intl@6.8.9_react@18.3.1_typescript@5.9.3/node_modules/react-intl/lib/src/components/createFormattedComponent.js
var gn;
(function(e) {
	e.formatDate = "FormattedDate", e.formatTime = "FormattedTime", e.formatNumber = "FormattedNumber", e.formatList = "FormattedList", e.formatDisplayName = "FormattedDisplayName";
})(gn ||= {});
var _n;
(function(e) {
	e.formatDate = "FormattedDateParts", e.formatTime = "FormattedTimeParts", e.formatNumber = "FormattedNumberParts", e.formatList = "FormattedListParts";
})(_n ||= {});
var vn = function(e) {
	var t = hn(), n = e.value, r = e.children, i = y(e, ["value", "children"]);
	return r(t.formatNumberToParts(n, i));
};
vn.displayName = "FormattedNumberParts", vn.displayName = "FormattedNumberParts";
function yn(e) {
	var t = function(t) {
		var n = hn(), r = t.value, i = t.children, a = y(t, ["value", "children"]), o = typeof r == "string" ? new Date(r || 0) : r;
		return i(e === "formatDate" ? n.formatDateToParts(o, a) : n.formatTimeToParts(o, a));
	};
	return t.displayName = _n[e], t;
}
function bn(e) {
	var t = function(t) {
		var n = hn(), r = t.value, i = t.children, a = y(t, ["value", "children"]), o = n[e](r, a);
		if (typeof i == "function") return i(o);
		var s = n.textComponent || V.Fragment;
		return V.createElement(s, null, o);
	};
	return t.displayName = gn[e], t;
}
//#endregion
//#region node_modules/.pnpm/react-intl@6.8.9_react@18.3.1_typescript@5.9.3/node_modules/react-intl/lib/src/components/createIntl.js
function xn(e) {
	return e && Object.keys(e).reduce(function(t, n) {
		var r = e[n];
		return t[n] = lt(r) ? sn(r) : r, t;
	}, {});
}
var Sn = function(e, t, n, r) {
	var i = [...arguments].slice(4), a = xn(r), o = Mt.apply(void 0, x([
		e,
		t,
		n,
		a
	], i, !1));
	return Array.isArray(o) ? V.Children.toArray(o) : o;
}, Cn = function(e, t) {
	var n = e.defaultRichTextElements, r = y(e, ["defaultRichTextElements"]), i = xn(n), a = rn(v(v(v({}, on), r), { defaultRichTextElements: i }), t), o = {
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
		formatMessage: Sn.bind(null, o, a.formatters),
		$t: Sn.bind(null, o, a.formatters)
	});
};
//#endregion
//#region node_modules/.pnpm/react-intl@6.8.9_react@18.3.1_typescript@5.9.3/node_modules/react-intl/lib/src/components/provider.js
function wn(e) {
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
var Tn = function(e) {
	_(t, e);
	function t() {
		var t = e !== null && e.apply(this, arguments) || this;
		return t.cache = Tt(), t.state = {
			cache: t.cache,
			intl: Cn(wn(t.props), t.cache),
			prevConfig: wn(t.props)
		}, t;
	}
	return t.getDerivedStateFromProps = function(e, t) {
		var n = t.prevConfig, r = t.cache, i = wn(e);
		return cn(n, i) ? null : {
			intl: Cn(i, r),
			prevConfig: i
		};
	}, t.prototype.render = function() {
		return an(this.state.intl), V.createElement(pn, { value: this.state.intl }, this.props.children);
	}, t.displayName = "IntlProvider", t.defaultProps = on, t;
}(V.PureComponent);
//#endregion
//#region node_modules/.pnpm/react-intl@6.8.9_react@18.3.1_typescript@5.9.3/node_modules/react-intl/lib/src/components/message.js
function En(e, t) {
	var n = e.values, r = y(e, ["values"]), i = t.values, a = y(t, ["values"]);
	return cn(i, n) && cn(r, a);
}
function Dn(e) {
	var t = hn(), n = t.formatMessage, r = t.textComponent, i = r === void 0 ? V.Fragment : r, a = e.id, o = e.description, s = e.defaultMessage, c = e.values, l = e.children, u = e.tagName, d = u === void 0 ? i : u, f = e.ignoreTag, p = n({
		id: a,
		description: o,
		defaultMessage: s
	}, c, { ignoreTag: f });
	return typeof l == "function" ? l(Array.isArray(p) ? p : [p]) : d ? V.createElement(d, null, V.Children.toArray(p)) : V.createElement(V.Fragment, null, p);
}
Dn.displayName = "FormattedMessage";
var On = V.memo(Dn, En);
On.displayName = "MemoizedFormattedMessage";
//#endregion
//#region node_modules/.pnpm/react-intl@6.8.9_react@18.3.1_typescript@5.9.3/node_modules/react-intl/lib/index.js
function kn(e) {
	return e;
}
bn("formatDate"), bn("formatTime"), bn("formatNumber"), bn("formatList"), bn("formatDisplayName"), yn("formatDate"), yn("formatTime");
//#endregion
//#region node_modules/.pnpm/react@18.3.1/node_modules/react/cjs/react-jsx-runtime.production.min.js
var An = /* @__PURE__ */ o(((e) => {
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
})), jn = /* @__PURE__ */ o(((e, t) => {
	t.exports = An();
})), Mn = h(), Nn = jn(), Pn = (0, V.createContext)({
	runtime: {
		handlerUrl() {
			return "";
		},
		notify() {}
	},
	element: document.createElement("div")
}), Fn = (e, t) => {
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
	}), (0, Mn.createRoot)(l).render(/* @__PURE__ */ (0, Nn.jsx)(V.StrictMode, { children: /* @__PURE__ */ (0, Nn.jsx)(Pn.Provider, {
		value: {
			runtime: e,
			element: s
		},
		children: /* @__PURE__ */ (0, Nn.jsx)(Tn, {
			locale: "en",
			children: i
		})
	}) }));
}, Bn = /* @__PURE__ */ o(((e, t) => {
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
function H() {
	return H = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, H.apply(null, arguments);
}
//#endregion
//#region node_modules/.pnpm/@babel+runtime@7.29.2/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function Vn(e, t) {
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
	var r = (0, V.useRef)(e !== void 0), i = (0, V.useState)(t), a = i[0], o = i[1], s = e !== void 0, c = r.current;
	return r.current = s, !s && c && a !== t && o(t), [s ? e : a, (0, V.useCallback)(function(e) {
		var t = [...arguments].slice(1);
		n && n.apply(void 0, [e].concat(t)), o(e);
	}, [n])];
}
function qn(e, t) {
	return Object.keys(t).reduce(function(n, r) {
		var i, a = n, o = a[Un(r)], s = a[r], c = Vn(a, [Un(r), r].map(Wn)), l = t[r], u = Kn(s, o, e[l]), d = u[0], f = u[1];
		return H({}, c, (i = {}, i[r] = d, i[l] = f, i));
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
var $n = /* @__PURE__ */ V.createContext({});
$n.Consumer, $n.Provider;
function er(e, t) {
	var n = (0, V.useContext)($n);
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
})), mr = { disabled: !1 }, hr = V.createContext(null), gr = function(e) {
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
		var r = Vn(t, [
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
		return /* @__PURE__ */ V.createElement(hr.Provider, { value: null }, typeof n == "function" ? n(e, r) : V.cloneElement(V.Children.only(n), r));
	}, t;
}(V.Component);
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
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/createChainedFunction.js
function Rr() {
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
function zr(e) {
	e.offsetHeight;
}
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useCommittedRef.js
function Br(e) {
	let t = (0, V.useRef)(e);
	return (0, V.useEffect)(() => {
		t.current = e;
	}, [e]), t;
}
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useEventCallback.js
function Vr(e) {
	let t = Br(e);
	return (0, V.useCallback)(function(...e) {
		return t.current && t.current(...e);
	}, [t]);
}
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Fade.js
var Hr = /* @__PURE__ */ c(Bn()), Ur = ["className", "children"], Wr, Gr = {
	in: !1,
	timeout: 300,
	mountOnEnter: !1,
	unmountOnExit: !1,
	appear: !1
}, Kr = (Wr = {}, Wr[br] = "show", Wr[xr] = "show", Wr), qr = /* @__PURE__ */ V.forwardRef(function(e, t) {
	var n = e.className, r = e.children, i = Vn(e, Ur), a = (0, V.useCallback)(function(e) {
		zr(e), i.onEnter && i.onEnter(e);
	}, [i]);
	return /* @__PURE__ */ V.createElement(Cr, H({
		ref: t,
		addEndListener: Lr
	}, i, { onEnter: a }), function(e, t) {
		return /* @__PURE__ */ V.cloneElement(r, H({}, t, { className: (0, Hr.default)("fade", n, r.props.className, Kr[e]) }));
	});
});
qr.defaultProps = Gr, qr.displayName = "Fade";
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/SafeAnchor.js
var Jr = [
	"as",
	"disabled",
	"onKeyDown"
];
function Yr(e) {
	return !e || e.trim() === "#";
}
var Xr = /* @__PURE__ */ V.forwardRef(function(e, t) {
	var n = e.as, r = n === void 0 ? "a" : n, i = e.disabled, a = e.onKeyDown, o = Vn(e, Jr), s = function(e) {
		var t = o.href, n = o.onClick;
		if ((i || Yr(t)) && e.preventDefault(), i) {
			e.stopPropagation();
			return;
		}
		n && n(e);
	};
	return Yr(o.href) && (o.role = o.role || "button", o.href = o.href || "#"), i && (o.tabIndex = -1, o["aria-disabled"] = !0), /* @__PURE__ */ V.createElement(r, H({ ref: t }, o, {
		onClick: s,
		onKeyDown: Rr(function(e) {
			e.key === " " && (e.preventDefault(), s(e));
		}, a)
	}));
});
Xr.displayName = "SafeAnchor";
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Button.js
var Zr = [
	"bsPrefix",
	"variant",
	"size",
	"active",
	"className",
	"block",
	"type",
	"as"
], Qr = {
	variant: "primary",
	active: !1,
	disabled: !1
}, $r = /* @__PURE__ */ V.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.variant, i = e.size, a = e.active, o = e.className, s = e.block, c = e.type, l = e.as, u = Vn(e, Zr), d = er(n, "btn"), f = (0, Hr.default)(o, d, a && "active", r && d + "-" + r, s && d + "-block", i && d + "-" + i);
	if (u.href) return /* @__PURE__ */ V.createElement(Xr, H({}, u, {
		as: l,
		ref: t,
		className: (0, Hr.default)(f, u.disabled && "disabled")
	}));
	t && (u.ref = t), c ? u.type = c : l || (u.type = "button");
	var p = l || "button";
	return /* @__PURE__ */ V.createElement(p, H({}, u, { className: f }));
});
$r.displayName = "Button", $r.defaultProps = Qr;
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useMounted.js
function ei() {
	let e = (0, V.useRef)(!0), t = (0, V.useRef)(() => e.current);
	return (0, V.useEffect)(() => (e.current = !0, () => {
		e.current = !1;
	}), []), t.current;
}
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useUpdatedRef.js
function ti(e) {
	let t = (0, V.useRef)(e);
	return t.current = e, t;
}
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useWillUnmount.js
function ni(e) {
	let t = ti(e);
	(0, V.useEffect)(() => () => t.current(), []);
}
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useTimeout.js
var ri = 2 ** 31 - 1;
function ii(e, t, n) {
	let r = n - Date.now();
	e.current = r <= ri ? setTimeout(t, r) : setTimeout(() => ii(e, t, n), ri);
}
function ai() {
	let e = ei(), t = (0, V.useRef)();
	return ni(() => clearTimeout(t.current)), (0, V.useMemo)(() => {
		let n = () => clearTimeout(t.current);
		function r(r, i = 0) {
			e() && (n(), i <= ri ? t.current = setTimeout(r, i) : ii(t, r, Date.now() + i));
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
var U = [
	"bsPrefix",
	"className",
	"as"
], oi = [
	"xl",
	"lg",
	"md",
	"sm",
	"xs"
], si = /* @__PURE__ */ V.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.className, i = e.as, a = i === void 0 ? "div" : i, o = Vn(e, U), s = er(n, "col"), c = [], l = [];
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
	}), c.length || c.push(s), /* @__PURE__ */ V.createElement(a, H({}, o, {
		ref: t,
		className: Hr.default.apply(void 0, [r].concat(c, l))
	}));
});
si.displayName = "Col";
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useCallbackRef.js
function ci() {
	return (0, V.useState)(null);
}
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useSafeState.js
function li(e) {
	let t = ei();
	return [e[0], (0, V.useCallback)((n) => {
		if (t()) return e[1](n);
	}, [t, e[1]])];
}
var ui = "bottom", di = "right", fi = "left", pi = "auto", mi = [
	"top",
	ui,
	di,
	fi
], hi = "start", gi = "clippingParents", _i = "viewport", vi = "popper", yi = "reference", bi = /* @__PURE__ */ mi.reduce(function(e, t) {
	return e.concat([t + "-" + hi, t + "-end"]);
}, []), xi = /* @__PURE__ */ [].concat(mi, [pi]).reduce(function(e, t) {
	return e.concat([
		t,
		t + "-" + hi,
		t + "-end"
	]);
}, []), Si = [
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
function Ci(e) {
	return e.split("-")[0];
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getWindow.js
function wi(e) {
	if (e == null) return window;
	if (e.toString() !== "[object Window]") {
		var t = e.ownerDocument;
		return t && t.defaultView || window;
	}
	return e;
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/instanceOf.js
function Ti(e) {
	return e instanceof wi(e).Element || e instanceof Element;
}
function Ei(e) {
	return e instanceof wi(e).HTMLElement || e instanceof HTMLElement;
}
function Di(e) {
	return typeof ShadowRoot > "u" ? !1 : e instanceof wi(e).ShadowRoot || e instanceof ShadowRoot;
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/math.js
var Oi = Math.max, ki = Math.min, Ai = Math.round;
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/userAgent.js
function ji() {
	var e = navigator.userAgentData;
	return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(e) {
		return e.brand + "/" + e.version;
	}).join(" ") : navigator.userAgent;
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/isLayoutViewport.js
function Mi() {
	return !/^((?!chrome|android).)*safari/i.test(ji());
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js
function Ni(e, t, n) {
	t === void 0 && (t = !1), n === void 0 && (n = !1);
	var r = e.getBoundingClientRect(), i = 1, a = 1;
	t && Ei(e) && (i = e.offsetWidth > 0 && Ai(r.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && Ai(r.height) / e.offsetHeight || 1);
	var o = (Ti(e) ? wi(e) : window).visualViewport, s = !Mi() && n, c = (r.left + (s && o ? o.offsetLeft : 0)) / i, l = (r.top + (s && o ? o.offsetTop : 0)) / a, u = r.width / i, d = r.height / a;
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
function Pi(e) {
	var t = Ni(e), n = e.offsetWidth, r = e.offsetHeight;
	return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
		x: e.offsetLeft,
		y: e.offsetTop,
		width: n,
		height: r
	};
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/contains.js
function Fi(e, t) {
	var n = t.getRootNode && t.getRootNode();
	if (e.contains(t)) return !0;
	if (n && Di(n)) {
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
function Ii(e) {
	return e ? (e.nodeName || "").toLowerCase() : null;
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js
function Li(e) {
	return wi(e).getComputedStyle(e);
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/isTableElement.js
function Ri(e) {
	return [
		"table",
		"td",
		"th"
	].indexOf(Ii(e)) >= 0;
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js
function zi(e) {
	return ((Ti(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getParentNode.js
function Bi(e) {
	return Ii(e) === "html" ? e : e.assignedSlot || e.parentNode || (Di(e) ? e.host : null) || zi(e);
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js
function Vi(e) {
	return !Ei(e) || Li(e).position === "fixed" ? null : e.offsetParent;
}
function Hi(e) {
	var t = /firefox/i.test(ji());
	if (/Trident/i.test(ji()) && Ei(e) && Li(e).position === "fixed") return null;
	var n = Bi(e);
	for (Di(n) && (n = n.host); Ei(n) && ["html", "body"].indexOf(Ii(n)) < 0;) {
		var r = Li(n);
		if (r.transform !== "none" || r.perspective !== "none" || r.contain === "paint" || ["transform", "perspective"].indexOf(r.willChange) !== -1 || t && r.willChange === "filter" || t && r.filter && r.filter !== "none") return n;
		n = n.parentNode;
	}
	return null;
}
function Ui(e) {
	for (var t = wi(e), n = Vi(e); n && Ri(n) && Li(n).position === "static";) n = Vi(n);
	return n && (Ii(n) === "html" || Ii(n) === "body" && Li(n).position === "static") ? t : n || Hi(e) || t;
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js
function Wi(e) {
	return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/within.js
function W(e, t, n) {
	return Oi(e, ki(t, n));
}
function G(e, t, n) {
	var r = W(e, t, n);
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
function qi(e, t) {
	return t.reduce(function(t, n) {
		return t[n] = e, t;
	}, {});
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/arrow.js
var Ji = function(e, t) {
	return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, Ki(typeof e == "number" ? qi(e, mi) : e);
};
function Yi(e) {
	var t, n = e.state, r = e.name, i = e.options, a = n.elements.arrow, o = n.modifiersData.popperOffsets, s = Ci(n.placement), c = Wi(s), l = ["left", "right"].indexOf(s) >= 0 ? "height" : "width";
	if (!(!a || !o)) {
		var u = Ji(i.padding, n), d = Pi(a), f = c === "y" ? "top" : fi, p = c === "y" ? ui : di, m = n.rects.reference[l] + n.rects.reference[c] - o[c] - n.rects.popper[l], h = o[c] - n.rects.reference[c], g = Ui(a), _ = g ? c === "y" ? g.clientHeight || 0 : g.clientWidth || 0 : 0, v = m / 2 - h / 2, y = u[f], b = _ - d[l] - u[p], x = _ / 2 - d[l] / 2 + v, S = W(y, x, b), C = c;
		n.modifiersData[r] = (t = {}, t[C] = S, t.centerOffset = S - x, t);
	}
}
function Xi(e) {
	var t = e.state, n = e.options.element, r = n === void 0 ? "[data-popper-arrow]" : n;
	r != null && (typeof r == "string" && (r = t.elements.popper.querySelector(r), !r) || Fi(t.elements.popper, r) && (t.elements.arrow = r));
}
var Zi = {
	name: "arrow",
	enabled: !0,
	phase: "main",
	fn: Yi,
	effect: Xi,
	requires: ["popperOffsets"],
	requiresIfExists: ["preventOverflow"]
};
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getVariation.js
function Qi(e) {
	return e.split("-")[1];
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/computeStyles.js
var $i = {
	top: "auto",
	right: "auto",
	bottom: "auto",
	left: "auto"
};
function ea(e, t) {
	var n = e.x, r = e.y, i = t.devicePixelRatio || 1;
	return {
		x: Ai(n * i) / i || 0,
		y: Ai(r * i) / i || 0
	};
}
function ta(e) {
	var t, n = e.popper, r = e.popperRect, i = e.placement, a = e.variation, o = e.offsets, s = e.position, c = e.gpuAcceleration, l = e.adaptive, u = e.roundOffsets, d = e.isFixed, f = o.x, p = f === void 0 ? 0 : f, m = o.y, h = m === void 0 ? 0 : m, g = typeof u == "function" ? u({
		x: p,
		y: h
	}) : {
		x: p,
		y: h
	};
	p = g.x, h = g.y;
	var _ = o.hasOwnProperty("x"), v = o.hasOwnProperty("y"), y = fi, b = "top", x = window;
	if (l) {
		var S = Ui(n), C = "clientHeight", w = "clientWidth";
		if (S === wi(n) && (S = zi(n), Li(S).position !== "static" && s === "absolute" && (C = "scrollHeight", w = "scrollWidth")), S = S, i === "top" || (i === "left" || i === "right") && a === "end") {
			b = ui;
			var T = d && S === x && x.visualViewport ? x.visualViewport.height : S[C];
			h -= T - r.height, h *= c ? 1 : -1;
		}
		if (i === "left" || (i === "top" || i === "bottom") && a === "end") {
			y = di;
			var E = d && S === x && x.visualViewport ? x.visualViewport.width : S[w];
			p -= E - r.width, p *= c ? 1 : -1;
		}
	}
	var D = Object.assign({ position: s }, l && $i), O = u === !0 ? ea({
		x: p,
		y: h
	}, wi(n)) : {
		x: p,
		y: h
	};
	if (p = O.x, h = O.y, c) {
		var k;
		return Object.assign({}, D, (k = {}, k[b] = v ? "0" : "", k[y] = _ ? "0" : "", k.transform = (x.devicePixelRatio || 1) <= 1 ? "translate(" + p + "px, " + h + "px)" : "translate3d(" + p + "px, " + h + "px, 0)", k));
	}
	return Object.assign({}, D, (t = {}, t[b] = v ? h + "px" : "", t[y] = _ ? p + "px" : "", t.transform = "", t));
}
function na(e) {
	var t = e.state, n = e.options, r = n.gpuAcceleration, i = r === void 0 ? !0 : r, a = n.adaptive, o = a === void 0 ? !0 : a, s = n.roundOffsets, c = s === void 0 ? !0 : s, l = {
		placement: Ci(t.placement),
		variation: Qi(t.placement),
		popper: t.elements.popper,
		popperRect: t.rects.popper,
		gpuAcceleration: i,
		isFixed: t.options.strategy === "fixed"
	};
	t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, ta(Object.assign({}, l, {
		offsets: t.modifiersData.popperOffsets,
		position: t.options.strategy,
		adaptive: o,
		roundOffsets: c
	})))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, ta(Object.assign({}, l, {
		offsets: t.modifiersData.arrow,
		position: "absolute",
		adaptive: !1,
		roundOffsets: c
	})))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
var ra = {
	name: "computeStyles",
	enabled: !0,
	phase: "beforeWrite",
	fn: na,
	data: {}
}, ia = { passive: !0 };
function aa(e) {
	var t = e.state, n = e.instance, r = e.options, i = r.scroll, a = i === void 0 ? !0 : i, o = r.resize, s = o === void 0 ? !0 : o, c = wi(t.elements.popper), l = [].concat(t.scrollParents.reference, t.scrollParents.popper);
	return a && l.forEach(function(e) {
		e.addEventListener("scroll", n.update, ia);
	}), s && c.addEventListener("resize", n.update, ia), function() {
		a && l.forEach(function(e) {
			e.removeEventListener("scroll", n.update, ia);
		}), s && c.removeEventListener("resize", n.update, ia);
	};
}
var oa = {
	name: "eventListeners",
	enabled: !0,
	phase: "write",
	fn: function() {},
	effect: aa,
	data: {}
}, sa = {
	left: "right",
	right: "left",
	bottom: "top",
	top: "bottom"
};
function ca(e) {
	return e.replace(/left|right|bottom|top/g, function(e) {
		return sa[e];
	});
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js
var la = {
	start: "end",
	end: "start"
};
function ua(e) {
	return e.replace(/start|end/g, function(e) {
		return la[e];
	});
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js
function da(e) {
	var t = wi(e);
	return {
		scrollLeft: t.pageXOffset,
		scrollTop: t.pageYOffset
	};
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js
function fa(e) {
	return Ni(zi(e)).left + da(e).scrollLeft;
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js
function pa(e, t) {
	var n = wi(e), r = zi(e), i = n.visualViewport, a = r.clientWidth, o = r.clientHeight, s = 0, c = 0;
	if (i) {
		a = i.width, o = i.height;
		var l = Mi();
		(l || !l && t === "fixed") && (s = i.offsetLeft, c = i.offsetTop);
	}
	return {
		width: a,
		height: o,
		x: s + fa(e),
		y: c
	};
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js
function ma(e) {
	var t = zi(e), n = da(e), r = e.ownerDocument?.body, i = Oi(t.scrollWidth, t.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0), a = Oi(t.scrollHeight, t.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0), o = -n.scrollLeft + fa(e), s = -n.scrollTop;
	return Li(r || t).direction === "rtl" && (o += Oi(t.clientWidth, r ? r.clientWidth : 0) - i), {
		width: i,
		height: a,
		x: o,
		y: s
	};
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js
function ha(e) {
	var t = Li(e), n = t.overflow, r = t.overflowX, i = t.overflowY;
	return /auto|scroll|overlay|hidden/.test(n + i + r);
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js
function ga(e) {
	return [
		"html",
		"body",
		"#document"
	].indexOf(Ii(e)) >= 0 ? e.ownerDocument.body : Ei(e) && ha(e) ? e : ga(Bi(e));
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js
function _a(e, t) {
	t === void 0 && (t = []);
	var n = ga(e), r = n === e.ownerDocument?.body, i = wi(n), a = r ? [i].concat(i.visualViewport || [], ha(n) ? n : []) : n, o = t.concat(a);
	return r ? o : o.concat(_a(Bi(a)));
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/rectToClientRect.js
function va(e) {
	return Object.assign({}, e, {
		left: e.x,
		top: e.y,
		right: e.x + e.width,
		bottom: e.y + e.height
	});
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js
function ya(e, t) {
	var n = Ni(e, !1, t === "fixed");
	return n.top += e.clientTop, n.left += e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function ba(e, t, n) {
	return t === "viewport" ? va(pa(e, n)) : Ti(t) ? ya(t, n) : va(ma(zi(e)));
}
function xa(e) {
	var t = _a(Bi(e)), n = ["absolute", "fixed"].indexOf(Li(e).position) >= 0 && Ei(e) ? Ui(e) : e;
	return Ti(n) ? t.filter(function(e) {
		return Ti(e) && Fi(e, n) && Ii(e) !== "body";
	}) : [];
}
function Sa(e, t, n, r) {
	var i = t === "clippingParents" ? xa(e) : [].concat(t), a = [].concat(i, [n]), o = a[0], s = a.reduce(function(t, n) {
		var i = ba(e, n, r);
		return t.top = Oi(i.top, t.top), t.right = ki(i.right, t.right), t.bottom = ki(i.bottom, t.bottom), t.left = Oi(i.left, t.left), t;
	}, ba(e, o, r));
	return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/computeOffsets.js
function K(e) {
	var t = e.reference, n = e.element, r = e.placement, i = r ? Ci(r) : null, a = r ? Qi(r) : null, o = t.x + t.width / 2 - n.width / 2, s = t.y + t.height / 2 - n.height / 2, c;
	switch (i) {
		case "top":
			c = {
				x: o,
				y: t.y - n.height
			};
			break;
		case ui:
			c = {
				x: o,
				y: t.y + t.height
			};
			break;
		case di:
			c = {
				x: t.x + t.width,
				y: s
			};
			break;
		case fi:
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
	var l = i ? Wi(i) : null;
	if (l != null) {
		var u = l === "y" ? "height" : "width";
		switch (a) {
			case hi:
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
	var n = t, r = n.placement, i = r === void 0 ? e.placement : r, a = n.strategy, o = a === void 0 ? e.strategy : a, s = n.boundary, c = s === void 0 ? gi : s, l = n.rootBoundary, u = l === void 0 ? _i : l, d = n.elementContext, f = d === void 0 ? vi : d, p = n.altBoundary, m = p === void 0 ? !1 : p, h = n.padding, g = h === void 0 ? 0 : h, _ = Ki(typeof g == "number" ? qi(g, mi) : g), v = f === "popper" ? yi : vi, y = e.rects.popper, b = e.elements[m ? v : f], x = Sa(Ti(b) ? b : b.contextElement || zi(e.elements.popper), c, u, o), S = Ni(e.elements.reference), C = K({
		reference: S,
		element: y,
		strategy: "absolute",
		placement: i
	}), w = va(Object.assign({}, y, C)), T = f === "popper" ? w : S, E = {
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
	var n = t, r = n.placement, i = n.boundary, a = n.rootBoundary, o = n.padding, s = n.flipVariations, c = n.allowedAutoPlacements, l = c === void 0 ? xi : c, u = Qi(r), d = u ? s ? bi : bi.filter(function(e) {
		return Qi(e) === u;
	}) : mi, f = d.filter(function(e) {
		return l.indexOf(e) >= 0;
	});
	f.length === 0 && (f = d);
	var p = f.reduce(function(t, n) {
		return t[n] = Ca(e, {
			placement: n,
			boundary: i,
			rootBoundary: a,
			padding: o
		})[Ci(n)], t;
	}, {});
	return Object.keys(p).sort(function(e, t) {
		return p[e] - p[t];
	});
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/flip.js
function Ta(e) {
	if (Ci(e) === "auto") return [];
	var t = ca(e);
	return [
		ua(e),
		t,
		ua(t)
	];
}
function Ea(e) {
	var t = e.state, n = e.options, r = e.name;
	if (!t.modifiersData[r]._skip) {
		for (var i = n.mainAxis, a = i === void 0 ? !0 : i, o = n.altAxis, s = o === void 0 ? !0 : o, c = n.fallbackPlacements, l = n.padding, u = n.boundary, d = n.rootBoundary, f = n.altBoundary, p = n.flipVariations, m = p === void 0 ? !0 : p, h = n.allowedAutoPlacements, g = t.options.placement, _ = Ci(g) === g, v = c || (_ || !m ? [ca(g)] : Ta(g)), y = [g].concat(v).reduce(function(e, n) {
			return e.concat(Ci(n) === "auto" ? wa(t, {
				placement: n,
				boundary: u,
				rootBoundary: d,
				padding: l,
				flipVariations: m,
				allowedAutoPlacements: h
			}) : n);
		}, []), b = t.rects.reference, x = t.rects.popper, S = /* @__PURE__ */ new Map(), C = !0, w = y[0], T = 0; T < y.length; T++) {
			var E = y[T], D = Ci(E), O = Qi(E) === hi, k = ["top", ui].indexOf(D) >= 0, ee = k ? "width" : "height", A = Ca(t, {
				placement: E,
				boundary: u,
				rootBoundary: d,
				altBoundary: f,
				padding: l
			}), j = k ? O ? di : fi : O ? ui : "top";
			b[ee] > x[ee] && (j = ca(j));
			var M = ca(j), N = [];
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
		di,
		ui,
		fi
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
	var r = Ci(e), i = ["left", "top"].indexOf(r) >= 0 ? -1 : 1, a = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n, o = a[0], s = a[1];
	return o ||= 0, s = (s || 0) * i, ["left", "right"].indexOf(r) >= 0 ? {
		x: s,
		y: o
	} : {
		x: o,
		y: s
	};
}
function Na(e) {
	var t = e.state, n = e.options, r = e.name, i = n.offset, a = i === void 0 ? [0, 0] : i, o = xi.reduce(function(e, n) {
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
	t.modifiersData[n] = K({
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
	}), _ = Ci(t.placement), v = Qi(t.placement), y = !v, b = Wi(_), x = La(b), S = t.modifiersData.popperOffsets, C = t.rects.reference, w = t.rects.popper, T = typeof h == "function" ? h(Object.assign({}, t.rects, { placement: t.placement })) : h, E = typeof T == "number" ? {
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
			var k = b === "y" ? "top" : fi, ee = b === "y" ? ui : di, A = b === "y" ? "height" : "width", j = S[b], M = j + g[k], N = j - g[ee], P = p ? -w[A] / 2 : 0, F = v === "start" ? C[A] : w[A], te = v === "start" ? -w[A] : -C[A], ne = t.elements.arrow, I = p && ne ? Pi(ne) : {
				width: 0,
				height: 0
			}, re = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Gi(), ie = re[k], ae = re[ee], oe = W(0, C[A], I[A]), se = y ? C[A] / 2 - P - oe - ie - E.mainAxis : F - oe - ie - E.mainAxis, ce = y ? -C[A] / 2 + P + oe + ae + E.mainAxis : te + oe + ae + E.mainAxis, le = t.elements.arrow && Ui(t.elements.arrow), ue = le ? b === "y" ? le.clientTop || 0 : le.clientLeft || 0 : 0, de = D?.[b] ?? 0, fe = j + se - de - ue, pe = j + ce - de, me = W(p ? ki(M, fe) : M, j, p ? Oi(N, pe) : N);
			S[b] = me, O[b] = me - j;
		}
		if (s) {
			var he = b === "x" ? "top" : fi, ge = b === "x" ? ui : di, _e = S[x], ve = x === "y" ? "height" : "width", ye = _e + g[he], be = _e - g[ge], xe = ["top", fi].indexOf(_) !== -1, Se = D?.[x] ?? 0, Ce = xe ? ye : _e - C[ve] - w[ve] - Se + E.altAxis, we = xe ? _e + C[ve] + w[ve] - Se - E.altAxis : be, Te = p && xe ? G(Ce, _e, we) : W(p ? Ce : ye, _e, p ? we : be);
			S[x] = Te, O[x] = Te - _e;
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
	return e === wi(e) || !Ei(e) ? da(e) : Ba(e);
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js
function Ha(e) {
	var t = e.getBoundingClientRect(), n = Ai(t.width) / e.offsetWidth || 1, r = Ai(t.height) / e.offsetHeight || 1;
	return n !== 1 || r !== 1;
}
function Ua(e, t, n) {
	n === void 0 && (n = !1);
	var r = Ei(t), i = Ei(t) && Ha(t), a = zi(t), o = Ni(e, i, n), s = {
		scrollLeft: 0,
		scrollTop: 0
	}, c = {
		x: 0,
		y: 0
	};
	return (r || !r && !n) && ((Ii(t) !== "body" || ha(a)) && (s = Va(t)), Ei(t) ? (c = Ni(t, !0), c.x += t.clientLeft, c.y += t.clientTop) : a && (c.x = fa(a))), {
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
	return Si.reduce(function(e, n) {
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
					reference: Ti(e) ? _a(e) : e.contextElement ? _a(e.contextElement) : [],
					popper: _a(t)
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
							reference: Ua(t, Ui(n), i.options.strategy === "fixed"),
							popper: Pi(n)
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
	ra,
	oa,
	Pa,
	Da,
	za,
	Zi
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
	var r = n === void 0 ? {} : n, i = r.enabled, a = i === void 0 ? !0 : i, o = r.placement, s = o === void 0 ? "bottom" : o, c = r.strategy, l = c === void 0 ? "absolute" : c, u = r.modifiers, d = u === void 0 ? to : u, f = Vn(r, [
		"enabled",
		"placement",
		"strategy",
		"modifiers"
	]), p = (0, V.useRef)(), m = (0, V.useCallback)(function() {
		var e;
		(e = p.current) == null || e.update();
	}, []), h = (0, V.useCallback)(function() {
		var e;
		(e = p.current) == null || e.forceUpdate();
	}, []), g = li((0, V.useState)({
		placement: s,
		update: m,
		forceUpdate: h,
		attributes: {},
		styles: {
			popper: Qa(l),
			arrow: {}
		}
	})), _ = g[0], v = g[1], y = (0, V.useMemo)(function() {
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
	return (0, V.useEffect)(function() {
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
	]), (0, V.useEffect)(function() {
		if (!(!a || e == null || t == null)) return p.current = Za(e, t, H({}, f, {
			placement: s,
			strategy: l,
			modifiers: [].concat(d, [eo, y])
		})), function() {
			p.current != null && (p.current.destroy(), p.current = void 0, v(function(e) {
				return H({}, e, {
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
	var r = n === void 0 ? {} : n, i = r.disabled, a = r.clickTrigger, o = a === void 0 ? "click" : a, s = (0, V.useRef)(!1), c = t || lo, l = (0, V.useCallback)(function(t) {
		var n = po(e);
		(0, so.default)(!!n, "RootClose captured a close event but does not have a ref to compare it to. useRootClose(), should be passed a ref that resolves to a DOM node"), s.current = !n || fo(t) || !uo(t) || !!ro(n, (t.composedPath == null ? void 0 : t.composedPath()[0]) ?? t.target);
	}, [e]), u = Vr(function(e) {
		s.current || c(e);
	}), d = Vr(function(e) {
		e.keyCode === co && c(e);
	});
	(0, V.useEffect)(function() {
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
	return H({}, u, {
		placement: r,
		enabled: t,
		strategy: o ? "fixed" : u.strategy,
		modifiers: go(H({}, d, {
			eventListeners: { enabled: n },
			preventOverflow: H({}, d.preventOverflow, { options: s ? H({ padding: s }, d.preventOverflow?.options) : d.preventOverflow?.options }),
			offset: { options: H({ offset: a }, d.offset?.options) },
			arrow: H({}, d.arrow, {
				enabled: !!c,
				options: H({}, d.arrow?.options, { element: c })
			}),
			flip: H({ enabled: !!i }, d.flip)
		}))
	});
}
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useMergedRefs.js
var q = (e) => !e || typeof e == "function" ? e : (t) => {
	e.current = t;
};
function vo(e, t) {
	let n = q(e), r = q(t);
	return (e) => {
		n && n(e), r && r(e);
	};
}
function yo(e, t) {
	return (0, V.useMemo)(() => vo(e, t), [e, t]);
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/hasClass.js
function bo(e, t) {
	return e.classList ? !!t && e.classList.contains(t) : (" " + (e.className.baseVal || e.className) + " ").indexOf(" " + t + " ") !== -1;
}
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/usePopperMarginModifiers.js
function xo(e) {
	var t = window.getComputedStyle(e);
	return {
		top: parseFloat(t.marginTop) || 0,
		right: parseFloat(t.marginRight) || 0,
		bottom: parseFloat(t.marginBottom) || 0,
		left: parseFloat(t.marginLeft) || 0
	};
}
function So() {
	var e = (0, V.useRef)(null), t = (0, V.useRef)(null), n = (0, V.useRef)(null), r = er(void 0, "popover"), i = er(void 0, "dropdown-menu");
	return [(0, V.useCallback)(function(n) {
		!n || !(bo(n, r) || bo(n, i)) || (t.current = xo(n), n.style.margin = "0", e.current = n);
	}, [r, i]), [
		(0, V.useMemo)(function() {
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
		(0, V.useMemo)(function() {
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
		(0, V.useMemo)(function() {
			return {
				name: "popoverArrowMargins",
				enabled: !0,
				phase: "main",
				fn: function() {},
				requiresIfExists: ["arrow"],
				effect: function(t) {
					var i = t.state;
					if (!(!e.current || !i.elements.arrow || !bo(e.current, r))) {
						if (i.modifiersData["arrow#persistent"]) {
							var a = xo(i.elements.arrow), o = a.top, s = a.right, c = o || s;
							i.modifiersData["arrow#persistent"].padding = {
								top: c,
								left: c,
								right: c,
								bottom: c
							};
						} else n.current = xo(i.elements.arrow);
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
var Co = /* @__PURE__ */ o(((e, t) => {
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
})), J = function(e) {
	var t;
	return typeof document > "u" ? null : e == null ? tr().body : (typeof e == "function" && (e = e()), e && "current" in e && (e = e.current), (t = e) != null && t.nodeType && e || null);
};
function wo(e, t) {
	var n = (0, V.useState)(function() {
		return J(e);
	}), r = n[0], i = n[1];
	if (!r) {
		var a = J(e);
		a && i(a);
	}
	return (0, V.useEffect)(function() {
		t && r && t(r);
	}, [t, r]), (0, V.useEffect)(function() {
		var t = J(e);
		t !== r && i(t);
	}, [e, r]), r;
}
//#endregion
//#region node_modules/.pnpm/react-overlays@5.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-overlays/esm/Overlay.js
var Y = /* @__PURE__ */ c(pr()), To = /* @__PURE__ */ V.forwardRef(function(e, t) {
	var n = e.flip, r = e.offset, i = e.placement, a = e.containerPadding, o = a === void 0 ? 5 : a, s = e.popperConfig, c = s === void 0 ? {} : s, l = e.transition, u = ci(), d = u[0], f = u[1], p = ci(), m = p[0], h = p[1], g = yo(f, t), _ = wo(e.container), v = wo(e.target), y = (0, V.useState)(!e.show), b = y[0], x = y[1], S = no(v, d, _o({
		placement: i,
		enableEvents: !!e.show,
		containerPadding: o || 5,
		flip: n,
		offset: r,
		arrowElement: m,
		popperConfig: c
	})), C = S.styles, w = S.attributes, T = Vn(S, ["styles", "attributes"]);
	e.show ? b && x(!1) : !e.transition && !b && x(!0);
	var E = function() {
		x(!0), e.onExited && e.onExited.apply(e, arguments);
	}, D = e.show || l && !b;
	if (mo(d, e.onHide, {
		disabled: !e.rootClose || e.rootCloseDisabled,
		clickTrigger: e.rootCloseEvent
	}), !D) return null;
	var O = e.children(H({}, T, {
		show: !!e.show,
		props: H({}, w.popper, {
			style: C.popper,
			ref: g
		}),
		arrowProps: H({}, w.arrow, {
			style: C.arrow,
			ref: h
		})
	}));
	if (l) {
		var k = e.onExit, ee = e.onExiting, A = e.onEnter, j = e.onEntering, M = e.onEntered;
		O = /* @__PURE__ */ V.createElement(l, {
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
To.displayName = "Overlay", To.propTypes = {
	show: Y.default.bool,
	placement: Y.default.oneOf(xi),
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
var Eo = [
	"children",
	"transition",
	"popperConfig"
], Do = [
	"props",
	"arrowProps",
	"show",
	"update",
	"forceUpdate",
	"placement",
	"state"
], Oo = {
	transition: qr,
	rootClose: !1,
	show: !1,
	placement: "top"
};
function ko(e, t) {
	var n = e.ref, r = t.ref;
	e.ref = n.__wrapped ||= function(e) {
		return n(ao(e));
	}, t.ref = r.__wrapped ||= function(e) {
		return r(ao(e));
	};
}
function Ao(e) {
	var t = e.children, n = e.transition, r = e.popperConfig, i = r === void 0 ? {} : r, a = Vn(e, Eo), o = (0, V.useRef)({}), s = So(), c = s[0], l = s[1], u = n === !0 ? qr : n || null;
	return /* @__PURE__ */ V.createElement(To, H({}, a, {
		ref: c,
		popperConfig: H({}, i, { modifiers: l.concat(i.modifiers || []) }),
		transition: u
	}), function(e) {
		var r = e.props, i = e.arrowProps, a = e.show, s = e.update;
		e.forceUpdate;
		var c = e.placement, l = e.state, u = Vn(e, Do);
		ko(r, i);
		var d = Object.assign(o.current, {
			state: l,
			scheduleUpdate: s,
			placement: c,
			outOfBoundaries: l?.modifiersData.hide?.isReferenceHidden || !1
		});
		return typeof t == "function" ? t(H({}, u, r, {
			placement: c,
			show: a
		}, !n && a && { className: "show" }, {
			popper: d,
			arrowProps: i
		})) : /* @__PURE__ */ V.cloneElement(t, H({}, u, r, {
			placement: c,
			arrowProps: i,
			popper: d,
			className: (0, Hr.default)(t.props.className, !n && a && "show"),
			style: H({}, t.props.style, r.style)
		}));
	});
}
Ao.defaultProps = Oo;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/OverlayTrigger.js
var jo = [
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
], Mo = /* @__PURE__ */ function(e) {
	Yn(t, e);
	function t() {
		return e.apply(this, arguments) || this;
	}
	var n = t.prototype;
	return n.render = function() {
		return this.props.children;
	}, t;
}(V.Component);
function No(e) {
	return e && typeof e == "object" ? e : {
		show: e,
		hide: e
	};
}
function Po(e, t, n) {
	var r = t[0], i = r.currentTarget, a = r.relatedTarget || r.nativeEvent[n];
	(!a || a !== i) && !ro(i, a) && e.apply(void 0, t);
}
var Fo = {
	defaultShow: !1,
	trigger: ["hover", "focus"]
};
function Io(e) {
	var t = e.trigger, n = e.overlay, r = e.children, i = e.popperConfig, a = i === void 0 ? {} : i, o = e.show, s = e.defaultShow, c = s === void 0 ? !1 : s, l = e.onToggle, u = e.delay, d = e.placement, f = e.flip, p = f === void 0 ? d && d.indexOf("auto") !== -1 : f, m = Vn(e, jo), h = (0, V.useRef)(null), g = ai(), _ = (0, V.useRef)(""), v = Kn(o, c, l), y = v[0], b = v[1], x = No(u), S = typeof r == "function" ? {} : V.Children.only(r).props, C = S.onFocus, w = S.onBlur, T = S.onClick, E = (0, V.useCallback)(function() {
		return ao(h.current);
	}, []), D = (0, V.useCallback)(function() {
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
	]), O = (0, V.useCallback)(function() {
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
	]), k = (0, V.useCallback)(function() {
		D();
		var e = [...arguments];
		C?.apply(void 0, e);
	}, [D, C]), ee = (0, V.useCallback)(function() {
		O();
		var e = [...arguments];
		w?.apply(void 0, e);
	}, [O, w]), A = (0, V.useCallback)(function() {
		b(!y), T && T.apply(void 0, arguments);
	}, [
		T,
		b,
		y
	]), j = (0, V.useCallback)(function() {
		Po(D, [...arguments], "fromElement");
	}, [D]), M = (0, V.useCallback)(function() {
		Po(O, [...arguments], "toElement");
	}, [O]), N = t == null ? [] : [].concat(t), P = {};
	return N.indexOf("click") !== -1 && (P.onClick = A), N.indexOf("focus") !== -1 && (P.onFocus = k, P.onBlur = ee), N.indexOf("hover") !== -1 && (P.onMouseOver = j, P.onMouseOut = M), /* @__PURE__ */ V.createElement(V.Fragment, null, typeof r == "function" ? r(H({}, P, { ref: h })) : /* @__PURE__ */ V.createElement(Mo, { ref: h }, /* @__PURE__ */ (0, V.cloneElement)(r, P)), /* @__PURE__ */ V.createElement(Ao, H({}, m, {
		show: y,
		onHide: O,
		flip: p,
		placement: d,
		popperConfig: a,
		target: E
	}), n));
}
Io.defaultProps = Fo, Co();
var Lo = [
	"bsPrefix",
	"placement",
	"className",
	"style",
	"children",
	"arrowProps",
	"popper",
	"show"
], Ro = { placement: "right" }, zo = /* @__PURE__ */ V.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.placement, i = e.className, a = e.style, o = e.children, s = e.arrowProps;
	e.popper, e.show;
	var c = Vn(e, Lo);
	n = er(n, "tooltip");
	var l = (r?.split("-") || [])[0];
	return /* @__PURE__ */ V.createElement("div", H({
		ref: t,
		style: a,
		role: "tooltip",
		"x-placement": l,
		className: (0, Hr.default)(i, n, "bs-tooltip-" + l)
	}, c), /* @__PURE__ */ V.createElement("div", H({ className: "arrow" }, s)), /* @__PURE__ */ V.createElement("div", { className: n + "-inner" }, o));
});
zo.defaultProps = Ro, zo.displayName = "Tooltip";
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/utils/newId.js
var Bo = 0, Vo = (e = "id") => (Bo += 1, `${e}${Bo}`), Ho = /* @__PURE__ */ function(e) {
	return e.MOVED = "MOVED", e.REMOVED = "REMOVED", e.FORMAT = "FORMAT", e.MOVED_AND_FORMAT = "MOVED_AND_FORMAT", e;
}({});
function Uo(e, t, n) {
	class r extends V.Component {
		static displayName = `withDeprecatedProps(${t})`;
		constructor(e) {
			super(e), this.transformProps = this.transformProps.bind(this);
		}
		warn(e) {}
		transformProps(e, r) {
			if (n[r] === void 0) return e[r] = this.props[r], e;
			let { deprType: i, newName: a, expect: o, transform: s, message: c } = n[r];
			switch (i) {
				case Ho.MOVED:
					this.warn(`${t}: The prop '${r}' has been moved to '${a}'.`), e[a] = this.props[r];
					break;
				case Ho.REMOVED:
					this.warn(`${t}: The prop '${r}' has been removed. '${c}'`);
					break;
				case Ho.FORMAT:
					o(this.props[r]) ? e[r] = this.props[r] : (this.warn(`${t}: The prop '${r}' expects a new format. ${c}`), e[r] = s(this.props[r], this.props));
					break;
				case Ho.MOVED_AND_FORMAT: {
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
			return /* @__PURE__ */ V.createElement(e, { ...n }, this.props.children || t);
		}
	}
	return r;
}
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Icon/index.js
function Wo({ src: e, id: t, className: n, hidden: r, screenReaderText: i, svgAttrs: a, size: o, ...s }) {
	if (e) {
		let r = a["aria-label"] || a["aria-labelledby"], c = { ...a };
		return r || (c["aria-label"] = void 0, c["aria-hidden"] = !0), /* @__PURE__ */ V.createElement("span", {
			className: (0, Hr.default)("pgn__icon", { [`pgn__icon__${o}`]: !!o }, n),
			id: t,
			...s
		}, /* @__PURE__ */ V.createElement(e, {
			role: "img",
			focusable: !1,
			...c
		}), i && /* @__PURE__ */ V.createElement("span", { className: "sr-only" }, i));
	}
	return /* @__PURE__ */ V.createElement(V.Fragment, null, /* @__PURE__ */ V.createElement("span", {
		id: t || Vo("Icon"),
		className: n,
		"aria-hidden": r
	}), i && /* @__PURE__ */ V.createElement("span", { className: "sr-only" }, i));
}
Wo.propTypes = {
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
}, Wo.defaultProps = {
	src: null,
	svgAttrs: {},
	id: void 0,
	hidden: !0,
	screenReaderText: void 0,
	size: void 0,
	className: void 0
};
var Go = Uo(Wo, "Icon", { className: {
	deprType: Ho.FORMAT,
	expect: (e) => typeof e == "string",
	transform: (e) => Array.isArray(e) ? e.join(" ") : e,
	message: "It should be a string."
} }), { sm: Ko, md: qo, lg: Jo, xl: Yo, xxl: Xo } = {
	xs: "0",
	sm: "576px",
	md: "768px",
	lg: "992px",
	xl: "1200px",
	xxl: "1400px"
}, Zo = {
	extraSmall: { maxWidth: parseFloat(Ko) || 575.98 },
	small: {
		minWidth: parseFloat(Ko) || 576,
		maxWidth: parseFloat(qo) || 767.98
	},
	medium: {
		minWidth: parseFloat(qo) || 768,
		maxWidth: parseFloat(Jo) || 991.98
	},
	large: {
		minWidth: parseFloat(Jo) || 992,
		maxWidth: parseFloat(Yo) || 1199.98
	},
	extraLarge: {
		minWidth: parseFloat(Yo) || 1200,
		maxWidth: parseFloat(Xo) || 1399.98
	},
	extraExtraLarge: { minWidth: parseFloat(Xo) || 1400 }
};
Object.freeze({
	xs: "extraSmall",
	sm: "small",
	md: "medium",
	lg: "large",
	xl: "extraLarge",
	xxl: "extraExtraLarge"
});
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Button/index.js
var Qo = /* @__PURE__ */ V.forwardRef(({ children: e, iconAfter: t, iconBefore: n, size: r, ...i }, a) => /* @__PURE__ */ V.createElement($r, {
	size: r,
	...i,
	className: (0, Hr.default)(i.className),
	ref: a
}, n && /* @__PURE__ */ V.createElement(Go, {
	className: "btn-icon-before",
	size: r,
	src: n
}), e, t && /* @__PURE__ */ V.createElement(Go, {
	className: "btn-icon-after",
	size: r,
	src: t
}))), $o = (e) => /* @__PURE__ */ V.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ V.createElement("path", {
	d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2Zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59Z",
	fill: "currentColor"
})), es = (e) => /* @__PURE__ */ V.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ V.createElement("path", {
	d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8-1.41-1.42Z",
	fill: "currentColor"
})), ts = (e) => /* @__PURE__ */ V.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ V.createElement("path", {
	d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41Z",
	fill: "currentColor"
})), ns = (e) => /* @__PURE__ */ V.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ V.createElement("path", {
	d: "M1 21h22L12 2 1 21Zm12-3h-2v-2h2v2Zm0-4h-2v-4h2v4Z",
	fill: "currentColor"
})), rs = [
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
], is = [
	"hover",
	"click",
	"focus"
];
function as(e) {
	return /* @__PURE__ */ V.createElement(Ao, { ...e });
}
function os(e) {
	return /* @__PURE__ */ V.createElement(Io, { ...e }, e.children);
}
var ss = Y.default.oneOf(is);
as.propTypes = {
	children: Y.default.node.isRequired,
	container: Y.default.oneOfType([Y.default.elementType, Y.default.func]),
	onEnter: Y.default.func,
	onEntered: Y.default.func,
	onEntering: Y.default.func,
	onExit: Y.default.func,
	onExited: Y.default.func,
	onExiting: Y.default.func,
	onHide: Y.default.func,
	placement: Y.default.oneOf(rs),
	popperConfig: Y.default.shape({}),
	rootClose: Y.default.bool,
	rootCloseEvent: Y.default.oneOf(["click", "mousedown"]),
	show: Y.default.bool,
	target: Y.default.oneOfType([Y.default.elementType, Y.default.func]),
	transition: Y.default.oneOfType([Y.default.object, Y.default.bool])
}, os.propTypes = {
	children: Y.default.oneOfType([Y.default.element, Y.default.func]).isRequired,
	overlay: Y.default.oneOfType([Y.default.element, Y.default.func]).isRequired,
	defaultShow: Y.default.bool,
	delay: Y.default.oneOfType([Y.default.number, Y.default.shape({})]),
	flip: Y.default.bool,
	onHide: Y.default.func,
	onToggle: Y.default.func,
	placement: Y.default.oneOf(rs),
	popperConfig: Y.default.shape({}),
	show: Y.default.bool,
	target: Y.default.instanceOf(EventTarget),
	trigger: Y.default.oneOfType([ss, Y.default.arrayOf(ss)])
}, as.defaultProps = {
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
	transition: qr
}, os.defaultProps = {
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
var cs = [
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
], ls = /* @__PURE__ */ V.forwardRef(({ children: e, variant: t, ...n }, r) => /* @__PURE__ */ V.createElement(zo, {
	...n,
	className: (0, Hr.default)({ "tooltip-light": t === "light" }, n.className),
	ref: r
}, e));
ls.propTypes = {
	...zo.propTypes,
	id: Y.default.string.isRequired,
	placement: Y.default.oneOf(cs),
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
}, ls.defaultProps = {
	...ls.defaultProps,
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
var us = /* @__PURE__ */ V.forwardRef(({ className: e, alt: t, invertColors: n = !1, icon: r, src: i, iconClassNames: a, onClick: o = () => {}, size: s = "md", variant: c = "primary", iconAs: l = Go, isActive: u = !1, children: d, ...f }, p) => {
	let m = n ? "inverse-" : "", h = u ? `${c}-` : "", g = l;
	return /* @__PURE__ */ V.createElement("button", {
		"aria-label": t,
		className: (0, Hr.default)("btn-icon", `btn-icon-${m}${c}`, `btn-icon-${s}`, { [`btn-icon-${m}${h}active`]: u }, e),
		onClick: o,
		type: "button",
		ref: p,
		...f
	}, /* @__PURE__ */ V.createElement("span", { className: "btn-icon__icon-container" }, g && /* @__PURE__ */ V.createElement(g, {
		className: (0, Hr.default)("btn-icon__icon", a),
		icon: r,
		src: i
	})));
});
function ds({ tooltipPlacement: e = "top", tooltipContent: t, ...n }) {
	let r = n.invertColors ? "inverse-" : "";
	return /* @__PURE__ */ V.createElement(os, {
		placement: e,
		overlay: /* @__PURE__ */ V.createElement(ls, {
			id: `iconbutton-tooltip-${e}`,
			variant: r ? "light" : void 0
		}, t)
	}, /* @__PURE__ */ V.createElement(us, { ...n }));
}
us.IconButtonWithTooltip = ds;
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Modal/ModalContext.js
var fs = /* @__PURE__ */ V.createContext({
	onClose: () => {},
	isOpen: !1,
	isBlocking: !1
});
function ps({ onClose: e, isOpen: t, isBlocking: n = !1, children: r = null }) {
	let i = (0, V.useMemo)(() => ({
		onClose: e,
		isOpen: t,
		isBlocking: n
	}), [
		e,
		t,
		n
	]);
	return /* @__PURE__ */ V.createElement(fs.Provider, { value: i }, r);
}
//#endregion
//#region node_modules/.pnpm/react-remove-scroll-bar@2.3.8_@types+react@18.3.28_react@18.3.1/node_modules/react-remove-scroll-bar/dist/es2015/constants.js
var ms = "right-scroll-bar-position", hs = "width-before-scroll-bar", gs = "with-scroll-bars-hidden", _s = "--removed-body-scroll-bar-size";
//#endregion
//#region node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@18.3.28_react@18.3.1/node_modules/use-callback-ref/dist/es2015/assignRef.js
function vs(e, t) {
	return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
//#endregion
//#region node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@18.3.28_react@18.3.1/node_modules/use-callback-ref/dist/es2015/useRef.js
function ys(e, t) {
	var n = (0, V.useState)(function() {
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
var bs = typeof window < "u" ? V.useLayoutEffect : V.useEffect, xs = /* @__PURE__ */ new WeakMap();
function Ss(e, t) {
	var n = ys(t || null, function(t) {
		return e.forEach(function(e) {
			return vs(e, t);
		});
	});
	return bs(function() {
		var t = xs.get(n);
		if (t) {
			var r = new Set(t), i = new Set(e), a = n.current;
			r.forEach(function(e) {
				i.has(e) || vs(e, null);
			}), i.forEach(function(e) {
				r.has(e) || vs(e, a);
			});
		}
		xs.set(n, e);
	}, [e]), n;
}
//#endregion
//#region node_modules/.pnpm/use-sidecar@1.1.3_@types+react@18.3.28_react@18.3.1/node_modules/use-sidecar/dist/es2015/medium.js
function Cs(e) {
	return e;
}
function ws(e, t) {
	t === void 0 && (t = Cs);
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
function Ts(e, t) {
	return t === void 0 && (t = Cs), ws(e, t);
}
function Es(e) {
	e === void 0 && (e = {});
	var t = ws(null);
	return t.options = v({
		async: !0,
		ssr: !1
	}, e), t;
}
//#endregion
//#region node_modules/.pnpm/use-sidecar@1.1.3_@types+react@18.3.28_react@18.3.1/node_modules/use-sidecar/dist/es2015/exports.js
var Ds = function(e) {
	var t = e.sideCar, n = y(e, ["sideCar"]);
	if (!t) throw Error("Sidecar: please provide `sideCar` property to import the right car");
	var r = t.read();
	if (!r) throw Error("Sidecar medium not found");
	return V.createElement(r, v({}, n));
};
Ds.isSideCarExport = !0;
function Os(e, t) {
	return e.useMedium(t), Ds;
}
//#endregion
//#region node_modules/.pnpm/react-remove-scroll@2.7.2_@types+react@18.3.28_react@18.3.1/node_modules/react-remove-scroll/dist/es2015/medium.js
var ks = Es(), As = function() {}, js = V.forwardRef(function(e, t) {
	var n = V.useRef(null), r = V.useState({
		onScrollCapture: As,
		onWheelCapture: As,
		onTouchMoveCapture: As
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
	]), C = f, w = Ss([n, t]), T = v(v({}, S), i);
	return V.createElement(V.Fragment, null, u && V.createElement(C, {
		sideCar: ks,
		removeScrollBar: l,
		shards: d,
		noRelative: p,
		noIsolation: m,
		inert: h,
		setCallbacks: a,
		allowPinchZoom: !!g,
		lockRef: n,
		gapMode: x
	}), o ? V.cloneElement(V.Children.only(s), v(v({}, T), { ref: w })) : V.createElement(b, v({}, T, {
		className: c,
		ref: w
	}), s));
});
js.defaultProps = {
	enabled: !0,
	removeScrollBar: !0,
	inert: !1
}, js.classNames = {
	fullWidth: hs,
	zeroRight: ms
};
//#endregion
//#region node_modules/.pnpm/focus-lock@1.3.6/node_modules/focus-lock/dist/es2015/constants.js
var Ms = "data-focus-lock", Ns = "data-focus-lock-disabled", Ps = "data-no-focus-lock", Fs = "data-autofocus-inside", Is = "data-no-autofocus", Ls = {
	width: "1px",
	height: "0px",
	padding: 0,
	overflow: "hidden",
	position: "fixed",
	top: "1px",
	left: "1px"
}, Rs = function(e) {
	var t = e.children, n = t === void 0 ? null : t;
	return /* @__PURE__ */ V.createElement(V.Fragment, null, /* @__PURE__ */ V.createElement("div", {
		key: "guard-first",
		"data-focus-guard": !0,
		"data-focus-auto-guard": !0,
		style: Ls
	}), n, n && /* @__PURE__ */ V.createElement("div", {
		key: "guard-last",
		"data-focus-guard": !0,
		"data-focus-auto-guard": !0,
		style: Ls
	}));
};
Rs.propTypes = {};
//#endregion
//#region node_modules/.pnpm/react-focus-lock@2.13.7_@types+react@18.3.28_react@18.3.1/node_modules/react-focus-lock/dist/es2015/medium.js
var zs = Ts({}, function(e) {
	return {
		target: e.target,
		currentTarget: e.currentTarget
	};
}), Bs = Ts(), Vs = Ts(), Hs = Es({
	async: !0,
	ssr: typeof document < "u"
}), Us = /* @__PURE__ */ (0, V.createContext)(void 0), Ws = [], Gs = /* @__PURE__ */ (0, V.forwardRef)(function(e, t) {
	var n, r = (0, V.useState)(), i = r[0], a = r[1], o = (0, V.useRef)(), s = (0, V.useRef)(!1), c = (0, V.useRef)(null), l = (0, V.useState)({})[1], u = e.children, d = e.disabled, f = d === void 0 ? !1 : d, p = e.noFocusGuards, m = p === void 0 ? !1 : p, h = e.persistentFocus, g = h === void 0 ? !1 : h, _ = e.crossFrame, v = _ === void 0 ? !0 : _, y = e.autoFocus, b = y === void 0 ? !0 : y;
	e.allowTextSelection;
	var x = e.group, S = e.className, C = e.whiteList, w = e.hasPositiveIndices, T = e.shards, E = T === void 0 ? Ws : T, D = e.as, O = D === void 0 ? "div" : D, k = e.lockProps, ee = k === void 0 ? {} : k, A = e.sideCar, j = e.returnFocus, M = j === void 0 ? !1 : j, N = e.focusOptions, P = e.onActivation, F = e.onDeactivation, te = (0, V.useState)({})[0], ne = (0, V.useCallback)(function(e) {
		var t = e.captureFocusRestore;
		if (!c.current) {
			var n = document?.activeElement;
			c.current = n, n !== document.body && (c.current = t(n));
		}
		o.current && P && P(o.current), s.current = !0, l();
	}, [P]), I = (0, V.useCallback)(function() {
		s.current = !1, F && F(o.current), l();
	}, [F]), re = (0, V.useCallback)(function(e) {
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
	}, [M]), ie = (0, V.useCallback)(function(e) {
		s.current && zs.useMedium(e);
	}, []), ae = Bs.useMedium, oe = (0, V.useCallback)(function(e) {
		o.current !== e && (o.current = e, a(e));
	}, []), se = H((n = {}, n[Ns] = f && "disabled", n[Ms] = x, n), ee), ce = m !== !0, le = ce && m !== "tail", ue = Ss([t, oe]), de = (0, V.useMemo)(function() {
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
	return /* @__PURE__ */ V.createElement(V.Fragment, null, ce && [/* @__PURE__ */ V.createElement("div", {
		key: "guard-first",
		"data-focus-guard": !0,
		tabIndex: f ? -1 : 0,
		style: Ls
	}), w ? /* @__PURE__ */ V.createElement("div", {
		key: "guard-nearest",
		"data-focus-guard": !0,
		tabIndex: f ? -1 : 1,
		style: Ls
	}) : null], !f && /* @__PURE__ */ V.createElement(A, {
		id: te,
		sideCar: Hs,
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
	}), /* @__PURE__ */ V.createElement(O, H({ ref: ue }, se, {
		className: S,
		onBlur: ae,
		onFocus: ie
	}), /* @__PURE__ */ V.createElement(Us.Provider, { value: de }, u)), le && /* @__PURE__ */ V.createElement("div", {
		"data-focus-guard": !0,
		tabIndex: f ? -1 : 0,
		style: Ls
	}));
});
Gs.propTypes = {};
//#endregion
//#region node_modules/.pnpm/react-focus-lock@2.13.7_@types+react@18.3.28_react@18.3.1/node_modules/react-focus-lock/dist/es2015/util.js
function Ks(e) {
	setTimeout(e, 1);
}
var qs = function(e) {
	return e && "current" in e ? e.current : e;
}, Js = Gs, Ys = Es(), Xs = "data-focus-on-hidden", Zs = { preventScroll: !0 }, Qs = V.forwardRef(function(e, t) {
	var n = V.useState(!1), r = n[0], i = n[1], a = V.useState(null), o = a[0], s = a[1], c = e.children, l = e.autoFocus, u = e.shards, d = e.crossFrame, f = e.enabled, p = f === void 0 ? !0 : f, m = e.scrollLock, h = m === void 0 ? !0 : m, g = e.focusLock, _ = g === void 0 ? !0 : g, b = e.returnFocus, x = b === void 0 ? !0 : b, S = e.inert, C = e.allowPinchZoom, w = e.sideCar, T = e.className, E = e.shouldIgnore, D = e.preventScrollOnFocus, O = e.style, k = e.as, ee = e.gapMode, A = y(e, [
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
	}), N = V.useCallback(function(e) {
		s(e);
	}, []), P = V.useCallback(function() {
		s(null);
	}, []);
	return V.createElement(V.Fragment, null, V.createElement(Js, {
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
		focusOptions: D ? Zs : void 0,
		as: js
	}, c), p && V.createElement(j, v({}, A, {
		sideCar: Ys,
		setLockProps: i,
		shards: u,
		activeNode: o
	})));
});
//#endregion
//#region node_modules/.pnpm/@babel+runtime@7.29.2/node_modules/@babel/runtime/helpers/esm/typeof.js
function $s(e) {
	"@babel/helpers - typeof";
	return $s = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, $s(e);
}
//#endregion
//#region node_modules/.pnpm/@babel+runtime@7.29.2/node_modules/@babel/runtime/helpers/esm/toPrimitive.js
function ec(e, t) {
	if ($s(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if ($s(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
//#endregion
//#region node_modules/.pnpm/@babel+runtime@7.29.2/node_modules/@babel/runtime/helpers/esm/toPropertyKey.js
function tc(e) {
	var t = ec(e, "string");
	return $s(t) == "symbol" ? t : t + "";
}
//#endregion
//#region node_modules/.pnpm/@babel+runtime@7.29.2/node_modules/@babel/runtime/helpers/esm/defineProperty.js
function nc(e, t, n) {
	return (t = tc(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
//#endregion
//#region node_modules/.pnpm/react-clientside-effect@1.2.8_react@18.3.1/node_modules/react-clientside-effect/lib/index.es.js
function rc(e, t) {
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
			Yn(t, e);
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
				return /* @__PURE__ */ V.createElement(r, this.props);
			}, t;
		}(V.PureComponent);
		return nc(s, "displayName", "SideEffect(" + n(r) + ")"), s;
	};
}
//#endregion
//#region node_modules/.pnpm/focus-lock@1.3.6/node_modules/focus-lock/dist/es2015/utils/array.js
var ic = function(e) {
	for (var t = Array(e.length), n = 0; n < e.length; ++n) t[n] = e[n];
	return t;
}, ac = function(e) {
	return Array.isArray(e) ? e : [e];
}, oc = function(e) {
	return Array.isArray(e) ? e[0] : e;
}, sc = function(e) {
	if (e.nodeType !== Node.ELEMENT_NODE) return !1;
	var t = window.getComputedStyle(e, null);
	return !t || !t.getPropertyValue ? !1 : t.getPropertyValue("display") === "none" || t.getPropertyValue("visibility") === "hidden";
}, cc = function(e) {
	return e.parentNode && e.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? e.parentNode.host : e.parentNode;
}, lc = function(e) {
	return e === document || e && e.nodeType === Node.DOCUMENT_NODE;
}, uc = function(e) {
	return e.hasAttribute("inert");
}, dc = function(e, t) {
	return !e || lc(e) || !sc(e) && !uc(e) && t(cc(e));
}, fc = function(e, t) {
	var n = e.get(t);
	if (n !== void 0) return n;
	var r = dc(t, fc.bind(void 0, e));
	return e.set(t, r), r;
}, pc = function(e, t) {
	return e && !lc(e) ? yc(e) ? t(cc(e)) : !1 : !0;
}, X = function(e, t) {
	var n = e.get(t);
	if (n !== void 0) return n;
	var r = pc(t, X.bind(void 0, e));
	return e.set(t, r), r;
}, mc = function(e) {
	return e.dataset;
}, hc = function(e) {
	return e.tagName === "BUTTON";
}, gc = function(e) {
	return e.tagName === "INPUT";
}, _c = function(e) {
	return gc(e) && e.type === "radio";
}, vc = function(e) {
	return !((gc(e) || hc(e)) && (e.type === "hidden" || e.disabled));
}, yc = function(e) {
	var t = e.getAttribute(Is);
	return ![
		!0,
		"true",
		""
	].includes(t);
}, bc = function(e) {
	return !!(e && mc(e)?.focusGuard);
}, xc = function(e) {
	return !bc(e);
}, Sc = function(e) {
	return !!e;
}, Cc = function(e, t) {
	var n = Math.max(0, e.tabIndex), r = Math.max(0, t.tabIndex), i = n - r, a = e.index - t.index;
	if (i) {
		if (!n) return 1;
		if (!r) return -1;
	}
	return i || a;
}, wc = function(e) {
	return e.tabIndex < 0 && !e.hasAttribute("tabindex") ? 0 : e.tabIndex;
}, Tc = function(e, t, n) {
	return ic(e).map(function(e, t) {
		var r = wc(e);
		return {
			node: e,
			index: t,
			tabIndex: n && r === -1 ? (e.dataset || {}).focusGuard ? 0 : -1 : r
		};
	}).filter(function(e) {
		return !t || e.tabIndex >= 0;
	}).sort(Cc);
}, Ec = [
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
].join(","), Dc = `${Ec}, [data-focus-guard]`, Oc = function(e, t) {
	return ic((e.shadowRoot || e).children).reduce(function(e, n) {
		return e.concat(n.matches(t ? Dc : Ec) ? [n] : [], Oc(n));
	}, []);
}, kc = function(e, t) {
	return e instanceof HTMLIFrameElement && e.contentDocument?.body ? Ac([e.contentDocument.body], t) : [e];
}, Ac = function(e, t) {
	return e.reduce(function(e, n) {
		var r, i = Oc(n, t), a = (r = []).concat.apply(r, i.map(function(e) {
			return kc(e, t);
		}));
		return e.concat(a, n.parentNode ? ic(n.parentNode.querySelectorAll(Ec)).filter(function(e) {
			return e === n;
		}) : []);
	}, []);
}, jc = function(e) {
	return ic(e.querySelectorAll(`[${Fs}]`)).map(function(e) {
		return Ac([e]);
	}).reduce(function(e, t) {
		return e.concat(t);
	}, []);
}, Mc = function(e, t) {
	return ic(e).filter(function(e) {
		return fc(t, e);
	}).filter(function(e) {
		return vc(e);
	});
}, Nc = function(e, t) {
	return t === void 0 && (t = /* @__PURE__ */ new Map()), ic(e).filter(function(e) {
		return X(t, e);
	});
}, Pc = function(e, t, n) {
	return Tc(Mc(Ac(e, n), t), !0, n);
}, Fc = function(e, t) {
	return Tc(Mc(Ac(e), t), !1);
}, Ic = function(e, t) {
	return Mc(jc(e), t);
}, Lc = function(e, t) {
	return e.shadowRoot ? Lc(e.shadowRoot, t) : Object.getPrototypeOf(e).contains !== void 0 && Object.getPrototypeOf(e).contains.call(e, t) ? !0 : ic(e.children).some(function(e) {
		if (e instanceof HTMLIFrameElement) {
			var n = e.contentDocument?.body;
			return n ? Lc(n, t) : !1;
		}
		return Lc(e, t);
	});
}, Rc = function(e) {
	for (var t = /* @__PURE__ */ new Set(), n = e.length, r = 0; r < n; r += 1) for (var i = r + 1; i < n; i += 1) {
		var a = e[r].compareDocumentPosition(e[i]);
		(a & Node.DOCUMENT_POSITION_CONTAINED_BY) > 0 && t.add(i), (a & Node.DOCUMENT_POSITION_CONTAINS) > 0 && t.add(r);
	}
	return e.filter(function(e, n) {
		return !t.has(n);
	});
}, zc = function(e) {
	return e.parentNode ? zc(e.parentNode) : e;
}, Bc = function(e) {
	return ac(e).filter(Boolean).reduce(function(e, t) {
		var n = t.getAttribute(Ms);
		return e.push.apply(e, n ? Rc(ic(zc(t).querySelectorAll(`[${Ms}="${n}"]:not([${Ns}="disabled"])`))) : [t]), e;
	}, []);
}, Vc = function(e) {
	try {
		return e();
	} catch {
		return;
	}
}, Hc = function(e) {
	if (e === void 0 && (e = document), !(!e || !e.activeElement)) {
		var t = e.activeElement;
		return t.shadowRoot ? Hc(t.shadowRoot) : t instanceof HTMLIFrameElement && Vc(function() {
			return t.contentWindow.document;
		}) ? Hc(t.contentWindow.document) : t;
	}
}, Z = function(e, t) {
	return e === t;
}, Uc = function(e, t) {
	return !!ic(e.querySelectorAll("iframe")).some(function(e) {
		return Z(e, t);
	});
}, Q = function(e, t) {
	return t === void 0 && (t = Hc(oc(e).ownerDocument)), !t || t.dataset && t.dataset.focusGuard ? !1 : Bc(e).some(function(e) {
		return Lc(e, t) || Uc(e, t);
	});
}, Wc = function(e) {
	e === void 0 && (e = document);
	var t = Hc(e);
	return t ? ic(e.querySelectorAll(`[${Ps}]`)).some(function(e) {
		return Lc(e, t);
	}) : !1;
}, Gc = function(e, t) {
	return t.filter(_c).filter(function(t) {
		return t.name === e.name;
	}).filter(function(e) {
		return e.checked;
	})[0] || e;
}, Kc = function(e, t) {
	return _c(e) && e.name ? Gc(e, t) : e;
}, qc = function(e) {
	var t = /* @__PURE__ */ new Set();
	return e.forEach(function(n) {
		return t.add(Kc(n, e));
	}), e.filter(function(e) {
		return t.has(e);
	});
}, Jc = function(e) {
	return e[0] && e.length > 1 ? Kc(e[0], e) : e[0];
}, Yc = function(e, t) {
	return e.indexOf(Kc(t, e));
}, Xc = "NEW_FOCUS", Zc = function(e, t, n, r, i) {
	var a = e.length, o = e[0], s = e[a - 1], c = bc(r);
	if (!(r && e.indexOf(r) >= 0)) {
		var l = r === void 0 ? -1 : n.indexOf(r), u = i ? n.indexOf(i) : l, d = i ? e.indexOf(i) : -1;
		if (l === -1) return d === -1 ? Xc : d;
		if (d === -1) return Xc;
		var f = l - u, p = n.indexOf(o), m = n.indexOf(s), h = qc(n), g = r === void 0 ? -1 : h.indexOf(r), _ = i ? h.indexOf(i) : g, v = h.filter(function(e) {
			return e.tabIndex >= 0;
		}), y = r === void 0 ? -1 : v.indexOf(r), b = i ? v.indexOf(i) : y, x = y >= 0 && b >= 0 ? b - y : _ - g;
		if (!f && d >= 0 || t.length === 0) return d;
		var S = Yc(e, t[0]), C = Yc(e, t[t.length - 1]);
		if (l <= p && c && Math.abs(f) > 1) return C;
		if (l >= m && c && Math.abs(f) > 1) return S;
		if (f && Math.abs(x) > 1) return d;
		if (l <= p) return C;
		if (l > m) return S;
		if (f) return Math.abs(f) > 1 ? d : (a + d + f) % a;
	}
}, Qc = function(e) {
	return function(t) {
		var n = mc(t)?.autofocus;
		return t.autofocus || n !== void 0 && n !== "false" || e.indexOf(t) >= 0;
	};
}, $c = function(e, t, n) {
	var r = Nc(e.map(function(e) {
		return e.node;
	}).filter(Qc(n)));
	return r && r.length ? Jc(r) : Jc(Nc(t));
}, el = function(e, t) {
	return t === void 0 && (t = []), t.push(e), e.parentNode && el(e.parentNode.host || e.parentNode, t), t;
}, tl = function(e, t) {
	for (var n = el(e), r = el(t), i = 0; i < n.length; i += 1) {
		var a = n[i];
		if (r.indexOf(a) >= 0) return a;
	}
	return !1;
}, nl = function(e, t, n) {
	var r = ac(e), i = ac(t), a = r[0], o = !1;
	return i.filter(Boolean).forEach(function(e) {
		o = tl(o || e, e) || o, n.filter(Boolean).forEach(function(e) {
			var t = tl(a, e);
			t && (o = !o || Lc(t, o) ? t : tl(t, o));
		});
	}), o;
}, rl = function(e, t) {
	return e.reduce(function(e, n) {
		return e.concat(Ic(n, t));
	}, []);
}, il = function(e, t) {
	var n = /* @__PURE__ */ new Map();
	return t.forEach(function(e) {
		return n.set(e.node, e);
	}), e.map(function(e) {
		return n.get(e);
	}).filter(Sc);
}, al = function(e, t) {
	var n = Hc(ac(e).length > 0 ? document : oc(e).ownerDocument), r = Bc(e).filter(xc), i = nl(n || e, e, r), a = /* @__PURE__ */ new Map(), o = Fc(r, a), s = o.filter(function(e) {
		var t = e.node;
		return xc(t);
	});
	if (s[0]) {
		var c = Fc([i], a).map(function(e) {
			return e.node;
		}), l = il(c, s), u = l.map(function(e) {
			return e.node;
		}), d = l.filter(function(e) {
			return e.tabIndex >= 0;
		}).map(function(e) {
			return e.node;
		}), f = Zc(u, d, c, n, t);
		if (f === "NEW_FOCUS") {
			var p = $c(o, d, rl(r, a)) || $c(o, u, rl(r, a));
			if (p) return { node: p };
			console.warn("focus-lock: cannot find any node to move focus into");
			return;
		}
		return f === void 0 ? f : l[f];
	}
}, ol = function(e) {
	var t = Bc(e).filter(xc), n = Tc(Ac([nl(e, e, t)], !0), !0, !0), r = Ac(t, !1);
	return n.map(function(e) {
		var t = e.node;
		return {
			node: t,
			index: e.index,
			lockItem: r.indexOf(t) >= 0,
			guard: bc(t)
		};
	});
}, sl = function(e, t) {
	e && ("focus" in e && e.focus(t), "contentWindow" in e && e.contentWindow && e.contentWindow.focus());
}, cl = 0, ll = !1, ul = function(e, t, n) {
	n === void 0 && (n = {});
	var r = al(e, t);
	if (!ll && r) {
		if (cl > 2) {
			console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"), ll = !0, setTimeout(function() {
				ll = !1;
			}, 1);
			return;
		}
		cl++, sl(r.node, n.focusOptions), cl--;
	}
};
//#endregion
//#region node_modules/.pnpm/focus-lock@1.3.6/node_modules/focus-lock/dist/es2015/return-focus.js
function dl(e) {
	if (!e) return null;
	if (typeof WeakRef > "u") return function() {
		return e || null;
	};
	var t = e ? new WeakRef(e) : null;
	return function() {
		return t?.deref() || null;
	};
}
var fl = function(e) {
	if (!e) return null;
	for (var t = [], n = e; n && n !== document.body;) t.push({
		current: dl(n),
		parent: dl(n.parentElement),
		left: dl(n.previousElementSibling),
		right: dl(n.nextElementSibling)
	}), n = n.parentElement;
	return {
		element: dl(e),
		stack: t,
		ownerDocument: e.ownerDocument
	};
}, pl = function(e) {
	if (e) for (var t = e.stack, n = e.ownerDocument, r = /* @__PURE__ */ new Map(), i = 0, a = t; i < a.length; i++) {
		var o = a[i], s = o.parent?.call(o);
		if (s && n.contains(s)) {
			for (var c = o.left?.call(o), l = o.current(), u = s.contains(l) ? l : void 0, d = o.right?.call(o), f = Pc([s], r), p = u ?? c?.nextElementSibling ?? d ?? c; p;) {
				for (var m = 0, h = f; m < h.length; m++) {
					var g = h[m];
					if (p?.contains(g.node)) return g.node;
				}
				p = p.nextElementSibling;
			}
			if (f.length) return f[0].node;
		}
	}
}, ml = function(e) {
	var t = fl(e);
	return function() {
		return pl(t);
	};
}, hl = function(e, t, n) {
	if (!e || !t) return console.error("no element or scope given"), {};
	var r = ac(t);
	if (r.every(function(t) {
		return !Lc(t, e);
	})) return console.error("Active element is not contained in the scope"), {};
	var i = n ? Pc(r, /* @__PURE__ */ new Map()) : Fc(r, /* @__PURE__ */ new Map()), a = i.findIndex(function(t) {
		return t.node === e;
	});
	if (a !== -1) return {
		prev: i[a - 1],
		next: i[a + 1],
		first: i[0],
		last: i[i.length - 1]
	};
}, gl = function(e, t) {
	var n = t ? Pc(ac(e), /* @__PURE__ */ new Map()) : Fc(ac(e), /* @__PURE__ */ new Map());
	return {
		first: n[0],
		last: n[n.length - 1]
	};
}, _l = function(e) {
	return Object.assign({
		scope: document.body,
		cycle: !0,
		onlyTabbable: !0
	}, e);
}, vl = function(e, t, n) {
	t === void 0 && (t = {});
	var r = _l(t), i = hl(e, r.scope, r.onlyTabbable);
	if (i) {
		var a = n(i, r.cycle);
		a && sl(a.node, r.focusOptions);
	}
}, yl = function(e, t) {
	t === void 0 && (t = {}), vl(e, t, function(e, t) {
		var n = e.next, r = e.first;
		return n || t && r;
	});
}, bl = function(e, t) {
	t === void 0 && (t = {}), vl(e, t, function(e, t) {
		var n = e.prev, r = e.last;
		return n || t && r;
	});
}, xl = function(e, t, n) {
	var r = gl(e, t.onlyTabbable ?? !0)[n];
	r && sl(r.node, t.focusOptions);
}, Sl = function(e, t) {
	t === void 0 && (t = {}), xl(e, t, "first");
}, Cl = function(e, t) {
	t === void 0 && (t = {}), xl(e, t, "last");
}, wl = function() {
	return document && document.activeElement === document.body;
}, Tl = function() {
	return wl() || Wc();
}, El = null, Dl = null, Ol = function() {
	return null;
}, kl = null, Al = !1, jl = !1, Ml = function() {
	return !0;
}, Nl = function(e) {
	return (El.whiteList || Ml)(e);
}, Pl = function(e, t) {
	kl = {
		observerNode: e,
		portaledElement: t
	};
}, Fl = function(e) {
	return kl && kl.portaledElement === e;
};
function Il(e, t, n, r) {
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
var Ll = function(e) {
	return e ? !!Al : Al === "meanwhile";
}, Rl = function e(t, n, r) {
	return n && (n.host === t && (!n.activeElement || r.contains(n.activeElement)) || n.parentNode && e(t, n.parentNode, r));
}, $ = function(e, t) {
	return t.some(function(t) {
		return Rl(e, t, t);
	});
}, zl = function(e) {
	return Fc(e, /* @__PURE__ */ new Map());
}, Bl = function(e) {
	return !zl([e.parentNode]).some(function(t) {
		return t.node === e;
	});
}, Vl = function() {
	var e = !1;
	if (El) {
		var t = El, n = t.observed, r = t.persistentFocus, i = t.autoFocus, a = t.shards, o = t.crossFrame, s = t.focusOptions, c = t.noFocusGuards, l = n || kl && kl.portaledElement;
		if (wl() && Dl && Dl !== document.body && (!document.body.contains(Dl) || Bl(Dl))) {
			var u = Ol();
			u && u.focus();
		}
		var d = document && document.activeElement;
		if (l) {
			var f = [l].concat(a.map(qs).filter(Boolean));
			if ((!d || Nl(d)) && (r || function() {
				if (!Ll(o) || !c || !Dl || jl) return !1;
				var e = zl(f), t = e.findIndex(function(e) {
					return e.node === Dl;
				});
				return t === 0 || t === e.length - 1;
			}() || !Tl() || !Dl && i) && (l && !(Q(f) || d && $(d, f) || Fl(d, l)) && (document && !Dl && d && !i ? (d.blur && d.blur(), document.body.focus()) : (e = ul(f, Dl, { focusOptions: s }), kl = {})), Dl = document && document.activeElement, Dl !== document.body && (Ol = ml(Dl)), Al = !1), document && d !== document.activeElement && document.querySelector("[data-focus-auto-guard]")) {
				var p = document && document.activeElement, m = ol(f), h = m.map(function(e) {
					return e.node;
				}).indexOf(p);
				h > -1 && (m.filter(function(e) {
					var t = e.guard, n = e.node;
					return t && n.dataset.focusAutoGuard;
				}).forEach(function(e) {
					return e.node.removeAttribute("tabIndex");
				}), Il(h, m.length, 1, m), Il(h, -1, -1, m));
			}
		}
	}
	return e;
}, Hl = function(e) {
	Vl() && e && (e.stopPropagation(), e.preventDefault());
}, Ul = function() {
	return Ks(Vl);
}, Wl = function(e) {
	var t = e.target, n = e.currentTarget;
	n.contains(t) || Pl(n, t);
}, Gl = function() {
	return null;
}, Kl = function(e) {
	var t = e.children;
	return /* @__PURE__ */ V.createElement("div", {
		onBlur: Ul,
		onFocus: Wl
	}, t);
};
Kl.propTypes = {};
var ql = function() {
	jl = !0;
}, Jl = function() {
	jl = !1, Al = "just", Ks(function() {
		Al = "meanwhile";
	});
}, Yl = function() {
	document.addEventListener("focusin", Hl), document.addEventListener("focusout", Ul), window.addEventListener("focus", ql), window.addEventListener("blur", Jl);
}, Xl = function() {
	document.removeEventListener("focusin", Hl), document.removeEventListener("focusout", Ul), window.removeEventListener("focus", ql), window.removeEventListener("blur", Jl);
};
function Zl(e) {
	return e.filter(function(e) {
		return !e.disabled;
	});
}
var Ql = {
	moveFocusInside: ul,
	focusInside: Q,
	focusNextElement: yl,
	focusPrevElement: bl,
	focusFirstElement: Sl,
	focusLastElement: Cl,
	captureFocusRestore: ml
};
function $l(e) {
	var t = e.slice(-1)[0];
	t && !El && Yl();
	var n = El, r = n && t && t.id === n.id;
	El = t, n && !r && (n.onDeactivation(), e.filter(function(e) {
		return e.id === n.id;
	}).length || n.returnFocus(!t)), t ? (Dl = null, (!r || n.observed !== t.observed) && t.onActivation(Ql), Vl(!0), Ks(Vl)) : (Xl(), Dl = null);
}
zs.assignSyncMedium(Wl), Bs.assignMedium(Ul), Vs.assignMedium(function(e) {
	return e(Ql);
}), Os(Hs, rc(Zl, $l)(Gl));
//#endregion
//#region node_modules/.pnpm/get-nonce@1.0.1/node_modules/get-nonce/dist/es2015/index.js
var eu, tu = function() {
	if (eu) return eu;
	if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
//#endregion
//#region node_modules/.pnpm/react-style-singleton@2.2.3_@types+react@18.3.28_react@18.3.1/node_modules/react-style-singleton/dist/es2015/singleton.js
function nu() {
	if (!document) return null;
	var e = document.createElement("style");
	e.type = "text/css";
	var t = tu();
	return t && e.setAttribute("nonce", t), e;
}
function ru(e, t) {
	e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function iu(e) {
	(document.head || document.getElementsByTagName("head")[0]).appendChild(e);
}
var au = function() {
	var e = 0, t = null;
	return {
		add: function(n) {
			e == 0 && (t = nu()) && (ru(t, n), iu(t)), e++;
		},
		remove: function() {
			e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
		}
	};
}, ou = function() {
	var e = au();
	return function(t, n) {
		V.useEffect(function() {
			return e.add(t), function() {
				e.remove();
			};
		}, [t && n]);
	};
}, su = function() {
	var e = ou();
	return function(t) {
		var n = t.styles, r = t.dynamic;
		return e(n, r), null;
	};
}, cu = {
	left: 0,
	top: 0,
	right: 0,
	gap: 0
}, lu = function(e) {
	return parseInt(e || "", 10) || 0;
}, uu = function(e) {
	var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], i = t[e === "padding" ? "paddingRight" : "marginRight"];
	return [
		lu(n),
		lu(r),
		lu(i)
	];
}, du = function(e) {
	if (e === void 0 && (e = "margin"), typeof window > "u") return cu;
	var t = uu(e), n = document.documentElement.clientWidth, r = window.innerWidth;
	return {
		left: t[0],
		top: t[1],
		right: t[2],
		gap: Math.max(0, r - n + t[2] - t[0])
	};
}, fu = su(), pu = "data-scroll-locked", mu = function(e, t, n, r) {
	var i = e.left, a = e.top, o = e.right, s = e.gap;
	return n === void 0 && (n = "margin"), `
  .${gs} {
   overflow: hidden ${r};
   padding-right: ${s}px ${r};
  }
  body[${pu}] {
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
  
  .${ms} {
    right: ${s}px ${r};
  }
  
  .${hs} {
    margin-right: ${s}px ${r};
  }
  
  .${ms} .${ms} {
    right: 0 ${r};
  }
  
  .${hs} .${hs} {
    margin-right: 0 ${r};
  }
  
  body[${pu}] {
    ${_s}: ${s}px;
  }
`;
}, hu = function() {
	var e = parseInt(document.body.getAttribute("data-scroll-locked") || "0", 10);
	return isFinite(e) ? e : 0;
}, gu = function() {
	V.useEffect(function() {
		return document.body.setAttribute(pu, (hu() + 1).toString()), function() {
			var e = hu() - 1;
			e <= 0 ? document.body.removeAttribute(pu) : document.body.setAttribute(pu, e.toString());
		};
	}, []);
}, _u = function(e) {
	var t = e.noRelative, n = e.noImportant, r = e.gapMode, i = r === void 0 ? "margin" : r;
	gu();
	var a = V.useMemo(function() {
		return du(i);
	}, [i]);
	return V.createElement(fu, { styles: mu(a, !t, i, n ? "" : "!important") });
}, vu = !1;
if (typeof window < "u") try {
	var yu = Object.defineProperty({}, "passive", { get: function() {
		return vu = !0, !0;
	} });
	window.addEventListener("test", yu, yu), window.removeEventListener("test", yu, yu);
} catch {
	vu = !1;
}
var bu = vu ? { passive: !1 } : !1, xu = function(e) {
	return e.tagName === "TEXTAREA";
}, Su = function(e, t) {
	if (!(e instanceof Element)) return !1;
	var n = window.getComputedStyle(e);
	return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !xu(e) && n[t] === "visible");
}, Cu = function(e) {
	return Su(e, "overflowY");
}, wu = function(e) {
	return Su(e, "overflowX");
}, Tu = function(e, t) {
	var n = t.ownerDocument, r = t;
	do {
		if (typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host), Ou(e, r)) {
			var i = ku(e, r);
			if (i[1] > i[2]) return !0;
		}
		r = r.parentNode;
	} while (r && r !== n.body);
	return !1;
}, Eu = function(e) {
	return [
		e.scrollTop,
		e.scrollHeight,
		e.clientHeight
	];
}, Du = function(e) {
	return [
		e.scrollLeft,
		e.scrollWidth,
		e.clientWidth
	];
}, Ou = function(e, t) {
	return e === "v" ? Cu(t) : wu(t);
}, ku = function(e, t) {
	return e === "v" ? Eu(t) : Du(t);
}, Au = function(e, t) {
	return e === "h" && t === "rtl" ? -1 : 1;
}, ju = function(e, t, n, r, i) {
	var a = Au(e, window.getComputedStyle(t).direction), o = a * r, s = n.target, c = t.contains(s), l = !1, u = o > 0, d = 0, f = 0;
	do {
		if (!s) break;
		var p = ku(e, s), m = p[0], h = p[1] - p[2] - a * m;
		(m || h) && Ou(e, s) && (d += h, f += m);
		var g = s.parentNode;
		s = g && g.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? g.host : g;
	} while (!c && s !== document.body || c && (t.contains(s) || t === s));
	return (u && (i && Math.abs(d) < 1 || !i && o > d) || !u && (i && Math.abs(f) < 1 || !i && -o > f)) && (l = !0), l;
}, Mu = function(e) {
	return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Nu = function(e) {
	return [e.deltaX, e.deltaY];
}, Pu = function(e) {
	return e && "current" in e ? e.current : e;
}, Fu = function(e, t) {
	return e[0] === t[0] && e[1] === t[1];
}, Iu = function(e) {
	return `
  .block-interactivity-${e} {pointer-events: none;}
  .allow-interactivity-${e} {pointer-events: all;}
`;
}, Lu = 0, Ru = [];
function zu(e) {
	var t = V.useRef([]), n = V.useRef([0, 0]), r = V.useRef(), i = V.useState(Lu++)[0], a = V.useState(su)[0], o = V.useRef(e);
	V.useEffect(function() {
		o.current = e;
	}, [e]), V.useEffect(function() {
		if (e.inert) {
			document.body.classList.add(`block-interactivity-${i}`);
			var t = x([e.lockRef.current], (e.shards || []).map(Pu), !0).filter(Boolean);
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
	var s = V.useCallback(function(e, t) {
		if ("touches" in e && e.touches.length === 2 || e.type === "wheel" && e.ctrlKey) return !o.current.allowPinchZoom;
		var i = Mu(e), a = n.current, s = "deltaX" in e ? e.deltaX : a[0] - i[0], c = "deltaY" in e ? e.deltaY : a[1] - i[1], l, u = e.target, d = Math.abs(s) > Math.abs(c) ? "h" : "v";
		if ("touches" in e && d === "h" && u.type === "range") return !1;
		var f = window.getSelection(), p = f && f.anchorNode;
		if (p && (p === u || p.contains(u))) return !1;
		var m = Tu(d, u);
		if (!m) return !0;
		if (m ? l = d : (l = d === "v" ? "h" : "v", m = Tu(d, u)), !m) return !1;
		if (!r.current && "changedTouches" in e && (s || c) && (r.current = l), !l) return !0;
		var h = r.current || l;
		return ju(h, t, e, h === "h" ? s : c, !0);
	}, []), c = V.useCallback(function(e) {
		var n = e;
		if (!(!Ru.length || Ru[Ru.length - 1] !== a)) {
			var r = "deltaY" in n ? Nu(n) : Mu(n), i = t.current.filter(function(e) {
				return e.name === n.type && (e.target === n.target || n.target === e.shadowParent) && Fu(e.delta, r);
			})[0];
			if (i && i.should) {
				n.cancelable && n.preventDefault();
				return;
			}
			if (!i) {
				var c = (o.current.shards || []).map(Pu).filter(Boolean).filter(function(e) {
					return e.contains(n.target);
				});
				(c.length > 0 ? s(n, c[0]) : !o.current.noIsolation) && n.cancelable && n.preventDefault();
			}
		}
	}, []), l = V.useCallback(function(e, n, r, i) {
		var a = {
			name: e,
			delta: n,
			target: r,
			should: i,
			shadowParent: Bu(r)
		};
		t.current.push(a), setTimeout(function() {
			t.current = t.current.filter(function(e) {
				return e !== a;
			});
		}, 1);
	}, []), u = V.useCallback(function(e) {
		n.current = Mu(e), r.current = void 0;
	}, []), d = V.useCallback(function(t) {
		l(t.type, Nu(t), t.target, s(t, e.lockRef.current));
	}, []), f = V.useCallback(function(t) {
		l(t.type, Mu(t), t.target, s(t, e.lockRef.current));
	}, []);
	V.useEffect(function() {
		return Ru.push(a), e.setCallbacks({
			onScrollCapture: d,
			onWheelCapture: d,
			onTouchMoveCapture: f
		}), document.addEventListener("wheel", c, bu), document.addEventListener("touchmove", c, bu), document.addEventListener("touchstart", u, bu), function() {
			Ru = Ru.filter(function(e) {
				return e !== a;
			}), document.removeEventListener("wheel", c, bu), document.removeEventListener("touchmove", c, bu), document.removeEventListener("touchstart", u, bu);
		};
	}, []);
	var p = e.removeScrollBar, m = e.inert;
	return V.createElement(V.Fragment, null, m ? V.createElement(a, { styles: Iu(i) }) : null, p ? V.createElement(_u, {
		noRelative: e.noRelative,
		gapMode: e.gapMode
	}) : null);
}
function Bu(e) {
	for (var t = null; e !== null;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
	return t;
}
Os(ks, zu);
//#endregion
//#region node_modules/.pnpm/aria-hidden@1.2.6/node_modules/aria-hidden/dist/es2015/index.js
var Vu = function(e) {
	return typeof document > "u" ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body;
}, Hu = /* @__PURE__ */ new WeakMap(), Uu = /* @__PURE__ */ new WeakMap(), Wu = {}, Gu = 0, Ku = function(e) {
	return e && (e.host || Ku(e.parentNode));
}, qu = function(e, t) {
	return t.map(function(t) {
		if (e.contains(t)) return t;
		var n = Ku(t);
		return n && e.contains(n) ? n : (console.error("aria-hidden", t, "in not contained inside", e, ". Doing nothing"), null);
	}).filter(function(e) {
		return !!e;
	});
}, Ju = function(e, t, n, r) {
	var i = qu(t, Array.isArray(e) ? e : [e]);
	Wu[n] || (Wu[n] = /* @__PURE__ */ new WeakMap());
	var a = Wu[n], o = [], s = /* @__PURE__ */ new Set(), c = new Set(i), l = function(e) {
		!e || s.has(e) || (s.add(e), l(e.parentNode));
	};
	i.forEach(l);
	var u = function(e) {
		!e || c.has(e) || Array.prototype.forEach.call(e.children, function(e) {
			if (s.has(e)) u(e);
			else try {
				var t = e.getAttribute(r), i = t !== null && t !== "false", c = (Hu.get(e) || 0) + 1, l = (a.get(e) || 0) + 1;
				Hu.set(e, c), a.set(e, l), o.push(e), c === 1 && i && Uu.set(e, !0), l === 1 && e.setAttribute(n, "true"), i || e.setAttribute(r, "true");
			} catch (t) {
				console.error("aria-hidden: cannot operate on ", e, t);
			}
		});
	};
	return u(t), s.clear(), Gu++, function() {
		o.forEach(function(e) {
			var t = Hu.get(e) - 1, i = a.get(e) - 1;
			Hu.set(e, t), a.set(e, i), t || (Uu.has(e) || e.removeAttribute(r), Uu.delete(e)), i || e.removeAttribute(n);
		}), Gu--, Gu || (Hu = /* @__PURE__ */ new WeakMap(), Hu = /* @__PURE__ */ new WeakMap(), Uu = /* @__PURE__ */ new WeakMap(), Wu = {});
	};
}, Yu = function(e, t, n) {
	n === void 0 && (n = "data-aria-hidden");
	var r = Array.from(Array.isArray(e) ? e : [e]), i = t || Vu(e);
	return i ? (r.push.apply(r, Array.from(i.querySelectorAll("[aria-live], script"))), Ju(r, i, n, "aria-hidden")) : function() {
		return null;
	};
}, Xu = su(), Zu = "\n [" + Xs + "] {\n   pointer-events: none !important;\n }\n", Qu = function() {
	return V.createElement(Xu, { styles: Zu });
}, $u = function(e) {
	return "current" in e ? e.current : e;
};
function ed(e) {
	var t = e.setLockProps, n = e.onEscapeKey, r = e.onClickOutside, i = e.shards, a = e.onActivation, o = e.onDeactivation, s = e.noIsolation, c = e.activeNode, l = (0, V.useRef)(null), u = (0, V.useRef)(0);
	return V.useEffect(function() {
		var e = function(e) {
			e.defaultPrevented || (e.code === "Escape" || e.key === "Escape" || e.keyCode === 27) && n && n(e);
		}, t = function(e) {
			e.defaultPrevented || e.target === l.current || e instanceof MouseEvent && e.button !== 0 || i && i.map($u).some(function(t) {
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
	]), (0, V.useEffect)(function() {
		if (c) return a && a(c), function() {
			o && o();
		};
	}, [!!c]), (0, V.useEffect)(function() {
		if (!(s || !c)) return Yu(b([c], (i || []).map($u)), c.ownerDocument.body, Xs);
	}, [c, s]), (0, V.useEffect)(function() {
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
	}, []), V.createElement(Qu, null);
}
//#endregion
//#region node_modules/.pnpm/react-focus-on@3.10.2_@types+react@18.3.28_react@18.3.1/node_modules/react-focus-on/dist/es2015/sidecar.js
var td = Os(Ys, ed), nd = function(e) {
	return V.createElement(td, v({}, e));
}, rd = V.forwardRef(function(e, t) {
	return V.createElement(Qs, v({}, e, {
		ref: t,
		sideCar: nd
	}));
}), id = class extends V.Component {
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
		return this.rootElement ? /* @__PURE__ */ _r.createPortal(this.props.children, this.rootElement) : null;
	}
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Modal/ModalLayer.js
function ad({ onClick: e }) {
	return /* @__PURE__ */ V.createElement("div", {
		className: "pgn__modal-backdrop",
		onClick: e,
		onKeyDown: e,
		"data-testid": "modal-backdrop",
		role: "presentation"
	});
}
// istanbul ignore next
function od({ children: e = null }) {
	return /* @__PURE__ */ V.createElement("div", { className: "pgn__modal-content-container" }, e);
}
function sd({ children: e, onClose: t, isOpen: n, isBlocking: r = !1, zIndex: i }) {
	if ((0, V.useEffect)(() => (n ? document.body.classList.add("pgn__hidden-scroll-padding-right") : document.body.classList.remove("pgn__hidden-scroll-padding-right"), () => {
		document.body.classList.remove("pgn__hidden-scroll-padding-right");
	}), [n]), !n) return null;
	let a = r ? void 0 : t;
	return /* @__PURE__ */ V.createElement(ps, {
		onClose: t,
		isOpen: n,
		isBlocking: r
	}, /* @__PURE__ */ V.createElement(id, null, /* @__PURE__ */ V.createElement(rd, {
		allowPinchZoom: !0,
		scrollLock: !0,
		enabled: n,
		onEscapeKey: a,
		onClickOutside: a,
		className: (0, Hr.default)("pgn__modal-layer", i ? `zindex-${i}` : "")
	}, /* @__PURE__ */ V.createElement(od, null, /* @__PURE__ */ V.createElement(ad, { onClick: a }), e))));
}
//#endregion
//#region src/unfolding-scenario-block/variants.ts
var cd = [
	{
		id: "primary-navy",
		category: "primary",
		label: "Navy",
		tokens: {
			"--color-bg-main": "var(--pgn-wgu-color-background-main-navy, #002855)",
			"--color-bg-emphasis": "var(--pgn-wgu-color-navy-900, #001124)",
			"--color-txt-content": "var(--pgn-wgu-color-text-pure-white, #ffffff)"
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
		}
	}
], ld = (e) => [{
	background: e.tokens["--color-bg-main"],
	color: e.tokens["--color-txt-content"]
}, {
	background: e.tokens["--color-bg-emphasis"],
	color: e.tokens["--color-txt-content"]
}], ud = (e) => cd.find((t) => t.id === e), dd = (e) => {
	let t = ud(e);
	return t ? t.tokens : void 0;
};
//#endregion
export { qr as A, Bn as B, mo as C, si as D, ci as E, qn as F, kn as G, zn as H, Kn as I, dn as J, On as K, Hn as L, kr as M, pr as N, $r as O, er as P, c as Q, Vn as R, _o as S, no as T, In as U, Pn as V, jn as W, u as X, m as Y, o as Z, Go as _, ad as a, So as b, rd as c, ns as d, ts as f, Zo as g, Qo as h, ld as i, Vr as j, Xr as k, fs as l, $o as m, dd as n, od as o, es as p, hn as q, ud as r, sd as s, cd as t, us as u, Vo as v, io as w, yo as x, Co as y, H as z };
