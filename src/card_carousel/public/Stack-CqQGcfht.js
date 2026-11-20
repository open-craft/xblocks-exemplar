import { n as e, t } from "./rolldown-runtime-CYdcPHCu.js";
// node_modules/.pnpm/react@18.3.1/node_modules/react/cjs/react.production.min.js
var n = /* @__PURE__ */ t(((e) => {
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
})), r = /* @__PURE__ */ t(((e, t) => {
	t.exports = n();
})), i = /* @__PURE__ */ t(((e) => {
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
		if (h = !1, y(e), !m) {
			if (n(c) !== null) m = !0, j(x);
			else {
				var t = n(l);
				t !== null && te(b, t.startTime - e);
			}
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
})), a = /* @__PURE__ */ t(((e, t) => {
	t.exports = i();
})), o = /* @__PURE__ */ t(((e) => {
	var t = r(), n = a();
	function i(e) {
		for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
		return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
	}
	var o = /* @__PURE__ */ new Set(), s = {};
	function c(e, t) {
		l(e, t), l(e + "Capture", t);
	}
	function l(e, t) {
		for (s[e] = t, e = 0; e < t.length; e++) o.add(t[e]);
	}
	var u = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0, d = Object.prototype.hasOwnProperty, f = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, p = {}, m = {};
	function h(e) {
		return d.call(m, e) ? !0 : d.call(p, e) ? !1 : f.test(e) ? m[e] = !0 : (p[e] = !0, !1);
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
		(i === null ? r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N" : i.type !== 0) && (_(t, n, i, r) && (n = null), r || i === null ? h(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type !== 3 && "" : n : (t = i.attributeName, r = i.attributeNamespace, n === null ? e.removeAttribute(t) : (i = i.type, n = i === 3 || i === 4 && !0 === n ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
	}
	var C = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, w = Symbol.for("react.element"), T = Symbol.for("react.portal"), E = Symbol.for("react.fragment"), D = Symbol.for("react.strict_mode"), O = Symbol.for("react.profiler"), k = Symbol.for("react.provider"), ee = Symbol.for("react.context"), A = Symbol.for("react.forward_ref"), j = Symbol.for("react.suspense"), te = Symbol.for("react.suspense_list"), M = Symbol.for("react.memo"), N = Symbol.for("react.lazy"), ne = Symbol.for("react.offscreen"), re = Symbol.iterator;
	function ie(e) {
		return typeof e != "object" || !e ? null : (e = re && e[re] || e["@@iterator"], typeof e == "function" ? e : null);
	}
	var P = Object.assign, ae;
	function oe(e) {
		if (ae === void 0) try {
			throw Error();
		} catch (e) {
			var t = e.stack.trim().match(/\n( *(at )?)/);
			ae = t && t[1] || "";
		}
		return "\n" + ae + e;
	}
	var se = !1;
	function ce(e, t) {
		if (!e || se) return "";
		se = !0;
		var n = Error.prepareStackTrace;
		Error.prepareStackTrace = void 0;
		try {
			if (t) {
				if (t = function() {
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
			} else {
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
			se = !1, Error.prepareStackTrace = n;
		}
		return (e = e ? e.displayName || e.name : "") ? oe(e) : "";
	}
	function le(e) {
		switch (e.tag) {
			case 5: return oe(e.type);
			case 16: return oe("Lazy");
			case 13: return oe("Suspense");
			case 19: return oe("SuspenseList");
			case 0:
			case 2:
			case 15: return e = ce(e.type, !1), e;
			case 11: return e = ce(e.type.render, !1), e;
			case 1: return e = ce(e.type, !0), e;
			default: return "";
		}
	}
	function ue(e) {
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
			case M: return t = e.displayName || null, t === null ? ue(e.type) || "Memo" : t;
			case N:
				t = e._payload, e = e._init;
				try {
					return ue(e(t));
				} catch {}
		}
		return null;
	}
	function de(e) {
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
			case 16: return ue(t);
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
	function fe(e) {
		switch (typeof e) {
			case "boolean":
			case "number":
			case "string":
			case "undefined": return e;
			case "object": return e;
			default: return "";
		}
	}
	function pe(e) {
		var t = e.type;
		return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
	}
	function me(e) {
		var t = pe(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
	function he(e) {
		e._valueTracker ||= me(e);
	}
	function ge(e) {
		if (!e) return !1;
		var t = e._valueTracker;
		if (!t) return !0;
		var n = t.getValue(), r = "";
		return e && (r = pe(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n && (t.setValue(e), !0);
	}
	function _e(e) {
		if (e ||= typeof document < "u" ? document : void 0, e === void 0) return null;
		try {
			return e.activeElement || e.body;
		} catch {
			return e.body;
		}
	}
	function ve(e, t) {
		var n = t.checked;
		return P({}, t, {
			defaultChecked: void 0,
			defaultValue: void 0,
			value: void 0,
			checked: n ?? e._wrapperState.initialChecked
		});
	}
	function ye(e, t) {
		var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked == null ? t.defaultChecked : t.checked;
		n = fe(t.value == null ? n : t.value), e._wrapperState = {
			initialChecked: r,
			initialValue: n,
			controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
		};
	}
	function be(e, t) {
		t = t.checked, t != null && S(e, "checked", t, !1);
	}
	function xe(e, t) {
		be(e, t);
		var n = fe(t.value), r = t.type;
		if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
		else if (r === "submit" || r === "reset") {
			e.removeAttribute("value");
			return;
		}
		t.hasOwnProperty("value") ? Ce(e, t.type, n) : t.hasOwnProperty("defaultValue") && Ce(e, t.type, fe(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
	}
	function Se(e, t, n) {
		if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
			var r = t.type;
			if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
			t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
		}
		n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
	}
	function Ce(e, t, n) {
		(t !== "number" || _e(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
	}
	var we = Array.isArray;
	function Te(e, t, n, r) {
		if (e = e.options, t) {
			t = {};
			for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
			for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0);
		} else {
			for (n = "" + fe(n), t = null, i = 0; i < e.length; i++) {
				if (e[i].value === n) {
					e[i].selected = !0, r && (e[i].defaultSelected = !0);
					return;
				}
				t !== null || e[i].disabled || (t = e[i]);
			}
			t !== null && (t.selected = !0);
		}
	}
	function Ee(e, t) {
		if (t.dangerouslySetInnerHTML != null) throw Error(i(91));
		return P({}, t, {
			value: void 0,
			defaultValue: void 0,
			children: "" + e._wrapperState.initialValue
		});
	}
	function De(e, t) {
		var n = t.value;
		if (n == null) {
			if (n = t.children, t = t.defaultValue, n != null) {
				if (t != null) throw Error(i(92));
				if (we(n)) {
					if (1 < n.length) throw Error(i(93));
					n = n[0];
				}
				t = n;
			}
			t ??= "", n = t;
		}
		e._wrapperState = { initialValue: fe(n) };
	}
	function Oe(e, t) {
		var n = fe(t.value), r = fe(t.defaultValue);
		n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
	}
	function ke(e) {
		var t = e.textContent;
		t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
	}
	function F(e) {
		switch (e) {
			case "svg": return "http://www.w3.org/2000/svg";
			case "math": return "http://www.w3.org/1998/Math/MathML";
			default: return "http://www.w3.org/1999/xhtml";
		}
	}
	function Ae(e, t) {
		return e == null || e === "http://www.w3.org/1999/xhtml" ? F(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
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
	function Ie(e, t, n) {
		return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Pe.hasOwnProperty(e) && Pe[e] ? ("" + t).trim() : t + "px";
	}
	function Le(e, t) {
		for (var n in e = e.style, t) if (t.hasOwnProperty(n)) {
			var r = n.indexOf("--") === 0, i = Ie(n, t[n], r);
			n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i;
		}
	}
	var Re = P({ menuitem: !0 }, {
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
	function ze(e, t) {
		if (t) {
			if (Re[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(i(137, e));
			if (t.dangerouslySetInnerHTML != null) {
				if (t.children != null) throw Error(i(60));
				if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(i(61));
			}
			if (t.style != null && typeof t.style != "object") throw Error(i(62));
		}
	}
	function Be(e, t) {
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
	var Ve = null;
	function He(e) {
		return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
	}
	var Ue = null, We = null, Ge = null;
	function Ke(e) {
		if (e = Hi(e)) {
			if (typeof Ue != "function") throw Error(i(280));
			var t = e.stateNode;
			t && (t = Wi(t), Ue(e.stateNode, e.type, t));
		}
	}
	function qe(e) {
		We ? Ge ? Ge.push(e) : Ge = [e] : We = e;
	}
	function Je() {
		if (We) {
			var e = We, t = Ge;
			if (Ge = We = null, Ke(e), t) for (e = 0; e < t.length; e++) Ke(t[e]);
		}
	}
	function Ye(e, t) {
		return e(t);
	}
	function Xe() {}
	var Ze = !1;
	function Qe(e, t, n) {
		if (Ze) return e(t, n);
		Ze = !0;
		try {
			return Ye(e, t, n);
		} finally {
			Ze = !1, (We !== null || Ge !== null) && (Xe(), Je());
		}
	}
	function $e(e, t) {
		var n = e.stateNode;
		if (n === null) return null;
		var r = Wi(n);
		if (r === null) return null;
		n = r[t];
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
				(r = !r.disabled) || (e = e.type, r = e !== "button" && e !== "input" && e !== "select" && e !== "textarea"), e = !r;
				break a;
			default: e = !1;
		}
		if (e) return null;
		if (n && typeof n != "function") throw Error(i(231, t, typeof n));
		return n;
	}
	var et = !1;
	if (u) try {
		var tt = {};
		Object.defineProperty(tt, "passive", { get: function() {
			et = !0;
		} }), window.addEventListener("test", tt, tt), window.removeEventListener("test", tt, tt);
	} catch {
		et = !1;
	}
	function nt(e, t, n, r, i, a, o, s, c) {
		var l = Array.prototype.slice.call(arguments, 3);
		try {
			t.apply(n, l);
		} catch (e) {
			this.onError(e);
		}
	}
	var rt = !1, it = null, at = !1, ot = null, st = { onError: function(e) {
		rt = !0, it = e;
	} };
	function ct(e, t, n, r, i, a, o, s, c) {
		rt = !1, it = null, nt.apply(st, arguments);
	}
	function lt(e, t, n, r, a, o, s, c, l) {
		if (ct.apply(this, arguments), rt) {
			if (rt) {
				var u = it;
				rt = !1, it = null;
			} else throw Error(i(198));
			at || (at = !0, ot = u);
		}
	}
	function ut(e) {
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
	function dt(e) {
		if (e.tag === 13) {
			var t = e.memoizedState;
			if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
		}
		return null;
	}
	function ft(e) {
		if (ut(e) !== e) throw Error(i(188));
	}
	function pt(e) {
		var t = e.alternate;
		if (!t) {
			if (t = ut(e), t === null) throw Error(i(188));
			return t === e ? e : null;
		}
		for (var n = e, r = t;;) {
			var a = n.return;
			if (a === null) break;
			var o = a.alternate;
			if (o === null) {
				if (r = a.return, r !== null) {
					n = r;
					continue;
				}
				break;
			}
			if (a.child === o.child) {
				for (o = a.child; o;) {
					if (o === n) return ft(a), e;
					if (o === r) return ft(a), t;
					o = o.sibling;
				}
				throw Error(i(188));
			}
			if (n.return !== r.return) n = a, r = o;
			else {
				for (var s = !1, c = a.child; c;) {
					if (c === n) {
						s = !0, n = a, r = o;
						break;
					}
					if (c === r) {
						s = !0, r = a, n = o;
						break;
					}
					c = c.sibling;
				}
				if (!s) {
					for (c = o.child; c;) {
						if (c === n) {
							s = !0, n = o, r = a;
							break;
						}
						if (c === r) {
							s = !0, r = o, n = a;
							break;
						}
						c = c.sibling;
					}
					if (!s) throw Error(i(189));
				}
			}
			if (n.alternate !== r) throw Error(i(190));
		}
		if (n.tag !== 3) throw Error(i(188));
		return n.stateNode.current === n ? e : t;
	}
	function mt(e) {
		return e = pt(e), e === null ? null : ht(e);
	}
	function ht(e) {
		if (e.tag === 5 || e.tag === 6) return e;
		for (e = e.child; e !== null;) {
			var t = ht(e);
			if (t !== null) return t;
			e = e.sibling;
		}
		return null;
	}
	var gt = n.unstable_scheduleCallback, _t = n.unstable_cancelCallback, vt = n.unstable_shouldYield, yt = n.unstable_requestPaint, I = n.unstable_now, bt = n.unstable_getCurrentPriorityLevel, xt = n.unstable_ImmediatePriority, St = n.unstable_UserBlockingPriority, Ct = n.unstable_NormalPriority, wt = n.unstable_LowPriority, Tt = n.unstable_IdlePriority, Et = null, Dt = null;
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
	var Kt, qt, Jt, Yt, Xt, Zt = !1, Qt = [], $t = null, en = null, tn = null, nn = /* @__PURE__ */ new Map(), rn = /* @__PURE__ */ new Map(), R = [], an = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
	function on(e, t) {
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
	function sn(e, t, n, r, i, a) {
		return e === null || e.nativeEvent !== a ? (e = {
			blockedOn: t,
			domEventName: n,
			eventSystemFlags: r,
			nativeEvent: a,
			targetContainers: [i]
		}, t !== null && (t = Hi(t), t !== null && qt(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
	}
	function cn(e, t, n, r, i) {
		switch (t) {
			case "focusin": return $t = sn($t, e, t, n, r, i), !0;
			case "dragenter": return en = sn(en, e, t, n, r, i), !0;
			case "mouseover": return tn = sn(tn, e, t, n, r, i), !0;
			case "pointerover":
				var a = i.pointerId;
				return nn.set(a, sn(nn.get(a) || null, e, t, n, r, i)), !0;
			case "gotpointercapture": return a = i.pointerId, rn.set(a, sn(rn.get(a) || null, e, t, n, r, i)), !0;
		}
		return !1;
	}
	function ln(e) {
		var t = Vi(e.target);
		if (t !== null) {
			var n = ut(t);
			if (n !== null) {
				if (t = n.tag, t === 13) {
					if (t = dt(n), t !== null) {
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
				Ve = r, n.target.dispatchEvent(r), Ve = null;
			} else return t = Hi(n), t !== null && qt(t), e.blockedOn = n, !1;
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
		for ($t !== null && pn($t, e), en !== null && pn(en, e), tn !== null && pn(tn, e), nn.forEach(t), rn.forEach(t), n = 0; n < R.length; n++) r = R[n], r.blockedOn === e && (r.blockedOn = null);
		for (; 0 < R.length && (n = R[0], n.blockedOn === null);) ln(n), n.blockedOn === null && R.shift();
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
			if (i === null) pi(e, t, r, bn, n), on(e, r);
			else if (cn(i, e, t, n, r)) r.stopPropagation();
			else if (on(e, r), t & 4 && -1 < an.indexOf(e)) {
				for (; i !== null;) {
					var a = Hi(i);
					if (a !== null && Kt(a), a = xn(e, t, n, r), a === null && pi(e, t, r, bn, n), a === i) break;
					i = a;
				}
				i !== null && r.stopPropagation();
			} else pi(e, t, r, null, n);
		}
	}
	var bn = null;
	function xn(e, t, n, r) {
		if (bn = null, e = He(r), e = Vi(e), e !== null) {
			if (t = ut(e), t === null) e = null;
			else if (n = t.tag, n === 13) {
				if (e = dt(t), e !== null) return e;
				e = null;
			} else if (n === 3) {
				if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
				e = null;
			} else t !== e && (e = null);
		}
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
		return P(t.prototype, {
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
	}, Mn = An(jn), Nn = P({}, jn, {
		view: 0,
		detail: 0
	}), Pn = An(Nn), Fn, In, Ln, Rn = P({}, Nn, {
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
		getModifierState: Jn,
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
	}), z = An(Rn), zn = An(P({}, Rn, { dataTransfer: 0 })), Bn = An(P({}, Nn, { relatedTarget: 0 })), Vn = An(P({}, jn, {
		animationName: 0,
		elapsedTime: 0,
		pseudoElement: 0
	})), Hn = An(P({}, jn, { clipboardData: function(e) {
		return "clipboardData" in e ? e.clipboardData : window.clipboardData;
	} })), Un = An(P({}, jn, { data: 0 })), Wn = {
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
	function Jn() {
		return qn;
	}
	var Yn = An(P({}, Nn, {
		key: function(e) {
			if (e.key) {
				var t = Wn[e.key] || e.key;
				if (t !== "Unidentified") return t;
			}
			return e.type === "keypress" ? (e = Dn(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Gn[e.keyCode] || "Unidentified" : "";
		},
		code: 0,
		location: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		repeat: 0,
		locale: 0,
		getModifierState: Jn,
		charCode: function(e) {
			return e.type === "keypress" ? Dn(e) : 0;
		},
		keyCode: function(e) {
			return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
		},
		which: function(e) {
			return e.type === "keypress" ? Dn(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
		}
	})), Xn = An(P({}, Rn, {
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
	})), Zn = An(P({}, Nn, {
		touches: 0,
		targetTouches: 0,
		changedTouches: 0,
		altKey: 0,
		metaKey: 0,
		ctrlKey: 0,
		shiftKey: 0,
		getModifierState: Jn
	})), Qn = An(P({}, jn, {
		propertyName: 0,
		elapsedTime: 0,
		pseudoElement: 0
	})), $n = An(P({}, Rn, {
		deltaX: function(e) {
			return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
		},
		deltaY: function(e) {
			return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
		},
		deltaZ: 0,
		deltaMode: 0
	})), er = [
		9,
		13,
		27,
		32
	], tr = u && "CompositionEvent" in window, nr = null;
	u && "documentMode" in document && (nr = document.documentMode);
	var rr = u && "TextEvent" in window && !nr, ir = u && (!tr || nr && 8 < nr && 11 >= nr), ar = " ", or = !1;
	function sr(e, t) {
		switch (e) {
			case "keyup": return er.indexOf(t.keyCode) !== -1;
			case "keydown": return t.keyCode !== 229;
			case "keypress":
			case "mousedown":
			case "focusout": return !0;
			default: return !1;
		}
	}
	function cr(e) {
		return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
	}
	var lr = !1;
	function ur(e, t) {
		switch (e) {
			case "compositionend": return cr(t);
			case "keypress": return t.which === 32 ? (or = !0, ar) : null;
			case "textInput": return e = t.data, e === ar && or ? null : e;
			default: return null;
		}
	}
	function dr(e, t) {
		if (lr) return e === "compositionend" || !tr && sr(e, t) ? (e = En(), Tn = wn = Cn = null, lr = !1, e) : null;
		switch (e) {
			case "paste": return null;
			case "keypress":
				if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
					if (t.char && 1 < t.char.length) return t.char;
					if (t.which) return String.fromCharCode(t.which);
				}
				return null;
			case "compositionend": return ir && t.locale !== "ko" ? null : t.data;
			default: return null;
		}
	}
	var fr = {
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
	function pr(e) {
		var t = e && e.nodeName && e.nodeName.toLowerCase();
		return t === "input" ? !!fr[e.type] : t === "textarea";
	}
	function mr(e, t, n, r) {
		qe(r), t = hi(t, "onChange"), 0 < t.length && (n = new Mn("onChange", "change", null, n, r), e.push({
			event: n,
			listeners: t
		}));
	}
	var hr = null, gr = null;
	function _r(e) {
		ci(e, 0);
	}
	function vr(e) {
		if (ge(Ui(e))) return e;
	}
	function yr(e, t) {
		if (e === "change") return t;
	}
	var br = !1;
	if (u) {
		var xr;
		if (u) {
			var Sr = "oninput" in document;
			if (!Sr) {
				var Cr = document.createElement("div");
				Cr.setAttribute("oninput", "return;"), Sr = typeof Cr.oninput == "function";
			}
			xr = Sr;
		} else xr = !1;
		br = xr && (!document.documentMode || 9 < document.documentMode);
	}
	function wr() {
		hr && (hr.detachEvent("onpropertychange", Tr), gr = hr = null);
	}
	function Tr(e) {
		if (e.propertyName === "value" && vr(gr)) {
			var t = [];
			mr(t, gr, e, He(e)), Qe(_r, t);
		}
	}
	function Er(e, t, n) {
		e === "focusin" ? (wr(), hr = t, gr = n, hr.attachEvent("onpropertychange", Tr)) : e === "focusout" && wr();
	}
	function Dr(e) {
		if (e === "selectionchange" || e === "keyup" || e === "keydown") return vr(gr);
	}
	function Or(e, t) {
		if (e === "click") return vr(t);
	}
	function kr(e, t) {
		if (e === "input" || e === "change") return vr(t);
	}
	function Ar(e, t) {
		return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t;
	}
	var jr = typeof Object.is == "function" ? Object.is : Ar;
	function Mr(e, t) {
		if (jr(e, t)) return !0;
		if (typeof e != "object" || !e || typeof t != "object" || !t) return !1;
		var n = Object.keys(e), r = Object.keys(t);
		if (n.length !== r.length) return !1;
		for (r = 0; r < n.length; r++) {
			var i = n[r];
			if (!d.call(t, i) || !jr(e[i], t[i])) return !1;
		}
		return !0;
	}
	function Nr(e) {
		for (; e && e.firstChild;) e = e.firstChild;
		return e;
	}
	function Pr(e, t) {
		var n = Nr(e);
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
			n = Nr(n);
		}
	}
	function Fr(e, t) {
		return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Fr(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
	}
	function Ir() {
		for (var e = window, t = _e(); t instanceof e.HTMLIFrameElement;) {
			try {
				var n = typeof t.contentWindow.location.href == "string";
			} catch {
				n = !1;
			}
			if (n) e = t.contentWindow;
			else break;
			t = _e(e.document);
		}
		return t;
	}
	function Lr(e) {
		var t = e && e.nodeName && e.nodeName.toLowerCase();
		return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
	}
	function Rr(e) {
		var t = Ir(), n = e.focusedElem, r = e.selectionRange;
		if (t !== n && n && n.ownerDocument && Fr(n.ownerDocument.documentElement, n)) {
			if (r !== null && Lr(n)) {
				if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
				else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
					e = e.getSelection();
					var i = n.textContent.length, a = Math.min(r.start, i);
					r = r.end === void 0 ? a : Math.min(r.end, i), !e.extend && a > r && (i = r, r = a, a = i), i = Pr(n, a);
					var o = Pr(n, r);
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
	var zr = u && "documentMode" in document && 11 >= document.documentMode, Br = null, Vr = null, Hr = null, Ur = !1;
	function Wr(e, t, n) {
		var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
		Ur || Br == null || Br !== _e(r) || (r = Br, "selectionStart" in r && Lr(r) ? r = {
			start: r.selectionStart,
			end: r.selectionEnd
		} : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
			anchorNode: r.anchorNode,
			anchorOffset: r.anchorOffset,
			focusNode: r.focusNode,
			focusOffset: r.focusOffset
		}), Hr && Mr(Hr, r) || (Hr = r, r = hi(Vr, "onSelect"), 0 < r.length && (t = new Mn("onSelect", "select", null, t, n), e.push({
			event: t,
			listeners: r
		}), t.target = Br)));
	}
	function Gr(e, t) {
		var n = {};
		return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
	}
	var Kr = {
		animationend: Gr("Animation", "AnimationEnd"),
		animationiteration: Gr("Animation", "AnimationIteration"),
		animationstart: Gr("Animation", "AnimationStart"),
		transitionend: Gr("Transition", "TransitionEnd")
	}, qr = {}, Jr = {};
	u && (Jr = document.createElement("div").style, "AnimationEvent" in window || (delete Kr.animationend.animation, delete Kr.animationiteration.animation, delete Kr.animationstart.animation), "TransitionEvent" in window || delete Kr.transitionend.transition);
	function Yr(e) {
		if (qr[e]) return qr[e];
		if (!Kr[e]) return e;
		var t = Kr[e], n;
		for (n in t) if (t.hasOwnProperty(n) && n in Jr) return qr[e] = t[n];
		return e;
	}
	var Xr = Yr("animationend"), Zr = Yr("animationiteration"), Qr = Yr("animationstart"), $r = Yr("transitionend"), ei = /* @__PURE__ */ new Map(), ti = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
	function ni(e, t) {
		ei.set(e, t), c(t, [e]);
	}
	for (var ri = 0; ri < ti.length; ri++) {
		var ii = ti[ri];
		ni(ii.toLowerCase(), "on" + (ii[0].toUpperCase() + ii.slice(1)));
	}
	ni(Xr, "onAnimationEnd"), ni(Zr, "onAnimationIteration"), ni(Qr, "onAnimationStart"), ni("dblclick", "onDoubleClick"), ni("focusin", "onFocus"), ni("focusout", "onBlur"), ni($r, "onTransitionEnd"), l("onMouseEnter", ["mouseout", "mouseover"]), l("onMouseLeave", ["mouseout", "mouseover"]), l("onPointerEnter", ["pointerout", "pointerover"]), l("onPointerLeave", ["pointerout", "pointerover"]), c("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), c("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), c("onBeforeInput", [
		"compositionend",
		"keypress",
		"textInput",
		"paste"
	]), c("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), c("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), c("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
	var ai = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), oi = new Set("cancel close invalid load scroll toggle".split(" ").concat(ai));
	function si(e, t, n) {
		var r = e.type || "unknown-event";
		e.currentTarget = n, lt(r, t, void 0, e), e.currentTarget = null;
	}
	function ci(e, t) {
		t = !!(t & 4);
		for (var n = 0; n < e.length; n++) {
			var r = e[n], i = r.event;
			r = r.listeners;
			a: {
				var a = void 0;
				if (t) for (var o = r.length - 1; 0 <= o; o--) {
					var s = r[o], c = s.instance, l = s.currentTarget;
					if (s = s.listener, c !== a && i.isPropagationStopped()) break a;
					si(i, s, l), a = c;
				}
				else for (o = 0; o < r.length; o++) {
					if (s = r[o], c = s.instance, l = s.currentTarget, s = s.listener, c !== a && i.isPropagationStopped()) break a;
					si(i, s, l), a = c;
				}
			}
		}
		if (at) throw e = ot, at = !1, ot = null, e;
	}
	function B(e, t) {
		var n = t[Ri];
		n === void 0 && (n = t[Ri] = /* @__PURE__ */ new Set());
		var r = e + "__bubble";
		n.has(r) || (fi(t, e, 2, !1), n.add(r));
	}
	function li(e, t, n) {
		var r = 0;
		t && (r |= 4), fi(n, e, r, t);
	}
	var ui = "_reactListening" + Math.random().toString(36).slice(2);
	function di(e) {
		if (!e[ui]) {
			e[ui] = !0, o.forEach(function(t) {
				t !== "selectionchange" && (oi.has(t) || li(t, !1, e), li(t, !0, e));
			});
			var t = e.nodeType === 9 ? e : e.ownerDocument;
			t === null || t[ui] || (t[ui] = !0, li("selectionchange", !1, t));
		}
	}
	function fi(e, t, n, r) {
		switch (Sn(t)) {
			case 1:
				var i = _n;
				break;
			case 4:
				i = vn;
				break;
			default: i = yn;
		}
		n = i.bind(null, t, n, e), i = void 0, !et || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i === void 0 ? e.addEventListener(t, n, !0) : e.addEventListener(t, n, {
			capture: !0,
			passive: i
		}) : i === void 0 ? e.addEventListener(t, n, !1) : e.addEventListener(t, n, { passive: i });
	}
	function pi(e, t, n, r, i) {
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
					if (o = Vi(s), o === null) return;
					if (c = o.tag, c === 5 || c === 6) {
						r = a = o;
						continue a;
					}
					s = s.parentNode;
				}
			}
			r = r.return;
		}
		Qe(function() {
			var r = a, i = He(n), o = [];
			a: {
				var s = ei.get(e);
				if (s !== void 0) {
					var c = Mn, l = e;
					switch (e) {
						case "keypress": if (Dn(n) === 0) break a;
						case "keydown":
						case "keyup":
							c = Yn;
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
							c = z;
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
							c = Zn;
							break;
						case Xr:
						case Zr:
						case Qr:
							c = Vn;
							break;
						case $r:
							c = Qn;
							break;
						case "scroll":
							c = Pn;
							break;
						case "wheel":
							c = $n;
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
						case "pointerup": c = Xn;
					}
					var u = !!(t & 4), d = !u && e === "scroll", f = u ? s === null ? null : s + "Capture" : s;
					u = [];
					for (var p = r, m; p !== null;) {
						m = p;
						var h = m.stateNode;
						if (m.tag === 5 && h !== null && (m = h, f !== null && (h = $e(p, f), h != null && u.push(mi(p, h, m)))), d) break;
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
					if (s = e === "mouseover" || e === "pointerover", c = e === "mouseout" || e === "pointerout", s && n !== Ve && (l = n.relatedTarget || n.fromElement) && (Vi(l) || l[Li])) break a;
					if ((c || s) && (s = i.window === i ? i : (s = i.ownerDocument) ? s.defaultView || s.parentWindow : window, c ? (l = n.relatedTarget || n.toElement, c = r, l = l ? Vi(l) : null, l !== null && (d = ut(l), l !== d || l.tag !== 5 && l.tag !== 6) && (l = null)) : (c = null, l = r), c !== l)) {
						if (u = z, h = "onMouseLeave", f = "onMouseEnter", p = "mouse", (e === "pointerout" || e === "pointerover") && (u = Xn, h = "onPointerLeave", f = "onPointerEnter", p = "pointer"), d = c == null ? s : Ui(c), m = l == null ? s : Ui(l), s = new u(h, p + "leave", c, n, i), s.target = d, s.relatedTarget = m, h = null, Vi(i) === r && (u = new u(f, p + "enter", l, n, i), u.target = m, u.relatedTarget = d, h = u), d = h, c && l) b: {
							for (u = c, f = l, p = 0, m = u; m; m = gi(m)) p++;
							for (m = 0, h = f; h; h = gi(h)) m++;
							for (; 0 < p - m;) u = gi(u), p--;
							for (; 0 < m - p;) f = gi(f), m--;
							for (; p--;) {
								if (u === f || f !== null && u === f.alternate) break b;
								u = gi(u), f = gi(f);
							}
							u = null;
						}
						else u = null;
						c !== null && _i(o, s, c, u, !1), l !== null && d !== null && _i(o, d, l, u, !0);
					}
				}
				a: {
					if (s = r ? Ui(r) : window, c = s.nodeName && s.nodeName.toLowerCase(), c === "select" || c === "input" && s.type === "file") var g = yr;
					else if (pr(s)) {
						if (br) g = kr;
						else {
							g = Dr;
							var _ = Er;
						}
					} else (c = s.nodeName) && c.toLowerCase() === "input" && (s.type === "checkbox" || s.type === "radio") && (g = Or);
					if (g &&= g(e, r)) {
						mr(o, g, n, i);
						break a;
					}
					_ && _(e, s, r), e === "focusout" && (_ = s._wrapperState) && _.controlled && s.type === "number" && Ce(s, "number", s.value);
				}
				switch (_ = r ? Ui(r) : window, e) {
					case "focusin":
						(pr(_) || _.contentEditable === "true") && (Br = _, Vr = r, Hr = null);
						break;
					case "focusout":
						Hr = Vr = Br = null;
						break;
					case "mousedown":
						Ur = !0;
						break;
					case "contextmenu":
					case "mouseup":
					case "dragend":
						Ur = !1, Wr(o, n, i);
						break;
					case "selectionchange": if (zr) break;
					case "keydown":
					case "keyup": Wr(o, n, i);
				}
				var v;
				if (tr) b: {
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
				else lr ? sr(e, n) && (y = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (y = "onCompositionStart");
				y && (ir && n.locale !== "ko" && (lr || y !== "onCompositionStart" ? y === "onCompositionEnd" && lr && (v = En()) : (Cn = i, wn = "value" in Cn ? Cn.value : Cn.textContent, lr = !0)), _ = hi(r, y), 0 < _.length && (y = new Un(y, e, null, n, i), o.push({
					event: y,
					listeners: _
				}), v ? y.data = v : (v = cr(n), v !== null && (y.data = v)))), (v = rr ? ur(e, n) : dr(e, n)) && (r = hi(r, "onBeforeInput"), 0 < r.length && (i = new Un("onBeforeInput", "beforeinput", null, n, i), o.push({
					event: i,
					listeners: r
				}), i.data = v));
			}
			ci(o, t);
		});
	}
	function mi(e, t, n) {
		return {
			instance: e,
			listener: t,
			currentTarget: n
		};
	}
	function hi(e, t) {
		for (var n = t + "Capture", r = []; e !== null;) {
			var i = e, a = i.stateNode;
			i.tag === 5 && a !== null && (i = a, a = $e(e, n), a != null && r.unshift(mi(e, a, i)), a = $e(e, t), a != null && r.push(mi(e, a, i))), e = e.return;
		}
		return r;
	}
	function gi(e) {
		if (e === null) return null;
		do
			e = e.return;
		while (e && e.tag !== 5);
		return e || null;
	}
	function _i(e, t, n, r, i) {
		for (var a = t._reactName, o = []; n !== null && n !== r;) {
			var s = n, c = s.alternate, l = s.stateNode;
			if (c !== null && c === r) break;
			s.tag === 5 && l !== null && (s = l, i ? (c = $e(n, a), c != null && o.unshift(mi(n, c, s))) : i || (c = $e(n, a), c != null && o.push(mi(n, c, s)))), n = n.return;
		}
		o.length !== 0 && e.push({
			event: t,
			listeners: o
		});
	}
	var vi = /\r\n?/g, yi = /\u0000|\uFFFD/g;
	function bi(e) {
		return (typeof e == "string" ? e : "" + e).replace(vi, "\n").replace(yi, "");
	}
	function xi(e, t, n) {
		if (t = bi(t), bi(e) !== t && n) throw Error(i(425));
	}
	function Si() {}
	var Ci = null, wi = null;
	function Ti(e, t) {
		return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
	}
	var Ei = typeof setTimeout == "function" ? setTimeout : void 0, Di = typeof clearTimeout == "function" ? clearTimeout : void 0, Oi = typeof Promise == "function" ? Promise : void 0, ki = typeof queueMicrotask == "function" ? queueMicrotask : Oi === void 0 ? Ei : function(e) {
		return Oi.resolve(null).then(e).catch(Ai);
	};
	function Ai(e) {
		setTimeout(function() {
			throw e;
		});
	}
	function ji(e, t) {
		var n = t, r = 0;
		do {
			var i = n.nextSibling;
			if (e.removeChild(n), i && i.nodeType === 8) {
				if (n = i.data, n === "/$") {
					if (r === 0) {
						e.removeChild(i), mn(t);
						return;
					}
					r--;
				} else n !== "$" && n !== "$?" && n !== "$!" || r++;
			}
			n = i;
		} while (n);
		mn(t);
	}
	function Mi(e) {
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
	function Ni(e) {
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
	var Pi = Math.random().toString(36).slice(2), Fi = "__reactFiber$" + Pi, Ii = "__reactProps$" + Pi, Li = "__reactContainer$" + Pi, Ri = "__reactEvents$" + Pi, zi = "__reactListeners$" + Pi, Bi = "__reactHandles$" + Pi;
	function Vi(e) {
		var t = e[Fi];
		if (t) return t;
		for (var n = e.parentNode; n;) {
			if (t = n[Li] || n[Fi]) {
				if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Ni(e); e !== null;) {
					if (n = e[Fi]) return n;
					e = Ni(e);
				}
				return t;
			}
			e = n, n = e.parentNode;
		}
		return null;
	}
	function Hi(e) {
		return e = e[Fi] || e[Li], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
	}
	function Ui(e) {
		if (e.tag === 5 || e.tag === 6) return e.stateNode;
		throw Error(i(33));
	}
	function Wi(e) {
		return e[Ii] || null;
	}
	var Gi = [], Ki = -1;
	function qi(e) {
		return { current: e };
	}
	function V(e) {
		0 > Ki || (e.current = Gi[Ki], Gi[Ki] = null, Ki--);
	}
	function H(e, t) {
		Ki++, Gi[Ki] = e.current, e.current = t;
	}
	var Ji = {}, Yi = qi(Ji), Xi = qi(!1), Zi = Ji;
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
		V(Xi), V(Yi);
	}
	function ta(e, t, n) {
		if (Yi.current !== Ji) throw Error(i(168));
		H(Yi, t), H(Xi, n);
	}
	function na(e, t, n) {
		var r = e.stateNode;
		if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
		for (var a in r = r.getChildContext(), r) if (!(a in t)) throw Error(i(108, de(e) || "Unknown", a));
		return P({}, n, r);
	}
	function ra(e) {
		return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Ji, Zi = Yi.current, H(Yi, e), H(Xi, Xi.current), !0;
	}
	function ia(e, t, n) {
		var r = e.stateNode;
		if (!r) throw Error(i(169));
		n ? (e = na(e, t, Zi), r.__reactInternalMemoizedMergedChildContext = e, V(Xi), V(Yi), H(Yi, e)) : V(Xi), H(Xi, n);
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
				throw aa !== null && (aa = aa.slice(e + 1)), gt(xt, ua), t;
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
	var wa = null, Ta = null, U = !1, Ea = null;
	function Da(e, t) {
		var n = ql(5, null, null, 0);
		n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
	}
	function Oa(e, t) {
		switch (e.tag) {
			case 5:
				var n = e.type;
				return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null && (e.stateNode = t, wa = e, Ta = Mi(t.firstChild), !0);
			case 6: return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null && (e.stateNode = t, wa = e, Ta = null, !0);
			case 13: return t = t.nodeType === 8 ? t : null, t !== null && (n = _a === null ? null : {
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
	function ka(e) {
		return !!(e.mode & 1) && !(e.flags & 128);
	}
	function Aa(e) {
		if (U) {
			var t = Ta;
			if (t) {
				var n = t;
				if (!Oa(e, t)) {
					if (ka(e)) throw Error(i(418));
					t = Mi(n.nextSibling);
					var r = wa;
					t && Oa(e, t) ? Da(r, n) : (e.flags = e.flags & -4097 | 2, U = !1, wa = e);
				}
			} else {
				if (ka(e)) throw Error(i(418));
				e.flags = e.flags & -4097 | 2, U = !1, wa = e;
			}
		}
	}
	function ja(e) {
		for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
		wa = e;
	}
	function Ma(e) {
		if (e !== wa) return !1;
		if (!U) return ja(e), U = !0, !1;
		var t;
		if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Ti(e.type, e.memoizedProps)), t &&= Ta) {
			if (ka(e)) throw Na(), Error(i(418));
			for (; t;) Da(e, t), t = Mi(t.nextSibling);
		}
		if (ja(e), e.tag === 13) {
			if (e = e.memoizedState, e = e === null ? null : e.dehydrated, !e) throw Error(i(317));
			a: {
				for (e = e.nextSibling, t = 0; e;) {
					if (e.nodeType === 8) {
						var n = e.data;
						if (n === "/$") {
							if (t === 0) {
								Ta = Mi(e.nextSibling);
								break a;
							}
							t--;
						} else n !== "$" && n !== "$!" && n !== "$?" || t++;
					}
					e = e.nextSibling;
				}
				Ta = null;
			}
		} else Ta = wa ? Mi(e.stateNode.nextSibling) : null;
		return !0;
	}
	function Na() {
		for (var e = Ta; e;) e = Mi(e.nextSibling);
	}
	function Pa() {
		Ta = wa = null, U = !1;
	}
	function Fa(e) {
		Ea === null ? Ea = [e] : Ea.push(e);
	}
	var Ia = C.ReactCurrentBatchConfig;
	function La(e, t, n) {
		if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
			if (n._owner) {
				if (n = n._owner, n) {
					if (n.tag !== 1) throw Error(i(309));
					var r = n.stateNode;
				}
				if (!r) throw Error(i(147, e));
				var a = r, o = "" + e;
				return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(e) {
					var t = a.refs;
					e === null ? delete t[o] : t[o] = e;
				}, t._stringRef = o, t);
			}
			if (typeof e != "string") throw Error(i(284));
			if (!n._owner) throw Error(i(290, e));
		}
		return e;
	}
	function Ra(e, t) {
		throw e = Object.prototype.toString.call(t), Error(i(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
	}
	function za(e) {
		var t = e._init;
		return t(e._payload);
	}
	function Ba(e) {
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
		function r(e, t) {
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
			return i === E ? d(e, t, n.props.children, r, n.key) : t !== null && (t.elementType === i || typeof i == "object" && i && i.$$typeof === N && za(i) === t.type) ? (r = a(t, n.props), r.ref = La(e, t, n), r.return = e, r) : (r = Zl(n.type, n.key, n.props, null, e.mode, r), r.ref = La(e, t, n), r.return = e, r);
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
					case w: return n = Zl(t.type, t.key, t.props, null, e.mode, n), n.ref = La(e, null, t), n.return = e, n;
					case T: return t = tu(t, e.mode, n), t.return = e, t;
					case N:
						var r = t._init;
						return f(e, r(t._payload), n);
				}
				if (we(t) || ie(t)) return t = Ql(t, e.mode, n, null), t.return = e, t;
				Ra(e, t);
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
				if (we(n) || ie(n)) return i === null ? d(e, t, n, r, null) : null;
				Ra(e, n);
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
				if (we(r) || ie(r)) return e = e.get(n) || null, d(t, e, r, i, null);
				Ra(t, r);
			}
			return null;
		}
		function h(i, a, s, c) {
			for (var l = null, u = null, d = a, h = a = 0, g = null; d !== null && h < s.length; h++) {
				d.index > h ? (g = d, d = null) : g = d.sibling;
				var _ = p(i, d, s[h], c);
				if (_ === null) {
					d === null && (d = g);
					break;
				}
				e && d && _.alternate === null && t(i, d), a = o(_, a, h), u === null ? l = _ : u.sibling = _, u = _, d = g;
			}
			if (h === s.length) return n(i, d), U && ba(i, h), l;
			if (d === null) {
				for (; h < s.length; h++) d = f(i, s[h], c), d !== null && (a = o(d, a, h), u === null ? l = d : u.sibling = d, u = d);
				return U && ba(i, h), l;
			}
			for (d = r(i, d); h < s.length; h++) g = m(d, i, h, s[h], c), g !== null && (e && g.alternate !== null && d.delete(g.key === null ? h : g.key), a = o(g, a, h), u === null ? l = g : u.sibling = g, u = g);
			return e && d.forEach(function(e) {
				return t(i, e);
			}), U && ba(i, h), l;
		}
		function g(a, s, c, l) {
			var u = ie(c);
			if (typeof u != "function") throw Error(i(150));
			if (c = u.call(c), c == null) throw Error(i(151));
			for (var d = u = null, h = s, g = s = 0, _ = null, v = c.next(); h !== null && !v.done; g++, v = c.next()) {
				h.index > g ? (_ = h, h = null) : _ = h.sibling;
				var y = p(a, h, v.value, l);
				if (y === null) {
					h === null && (h = _);
					break;
				}
				e && h && y.alternate === null && t(a, h), s = o(y, s, g), d === null ? u = y : d.sibling = y, d = y, h = _;
			}
			if (v.done) return n(a, h), U && ba(a, g), u;
			if (h === null) {
				for (; !v.done; g++, v = c.next()) v = f(a, v.value, l), v !== null && (s = o(v, s, g), d === null ? u = v : d.sibling = v, d = v);
				return U && ba(a, g), u;
			}
			for (h = r(a, h); !v.done; g++, v = c.next()) v = m(h, a, g, v.value, l), v !== null && (e && v.alternate !== null && h.delete(v.key === null ? g : v.key), s = o(v, s, g), d === null ? u = v : d.sibling = v, d = v);
			return e && h.forEach(function(e) {
				return t(a, e);
			}), U && ba(a, g), u;
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
									} else if (l.elementType === c || typeof c == "object" && c && c.$$typeof === N && za(c) === l.type) {
										n(e, l.sibling), r = a(l, i.props), r.ref = La(e, l, i), r.return = e, e = r;
										break a;
									}
									n(e, l);
									break;
								}
								t(e, l), l = l.sibling;
							}
							i.type === E ? (r = Ql(i.props.children, e.mode, o, i.key), r.return = e, e = r) : (o = Zl(i.type, i.key, i.props, null, e.mode, o), o.ref = La(e, r, i), o.return = e, e = o);
						}
						return s(e);
					case T:
						a: {
							for (l = i.key; r !== null;) {
								if (r.key === l) {
									if (r.tag === 4 && r.stateNode.containerInfo === i.containerInfo && r.stateNode.implementation === i.implementation) {
										n(e, r.sibling), r = a(r, i.children || []), r.return = e, e = r;
										break a;
									}
									n(e, r);
									break;
								}
								t(e, r), r = r.sibling;
							}
							r = tu(i, e.mode, o), r.return = e, e = r;
						}
						return s(e);
					case N: return l = i._init, _(e, r, l(i._payload), o);
				}
				if (we(i)) return h(e, r, i, o);
				if (ie(i)) return g(e, r, i, o);
				Ra(e, i);
			}
			return typeof i == "string" && i !== "" || typeof i == "number" ? (i = "" + i, r !== null && r.tag === 6 ? (n(e, r.sibling), r = a(r, i), r.return = e, e = r) : (n(e, r), r = eu(i, e.mode, o), r.return = e, e = r), s(e)) : n(e, r);
		}
		return _;
	}
	var Va = Ba(!0), Ha = Ba(!1), Ua = qi(null), Wa = null, Ga = null, Ka = null;
	function qa() {
		Ka = Ga = Wa = null;
	}
	function Ja(e) {
		var t = Ua.current;
		V(Ua), e._currentValue = t;
	}
	function Ya(e, t, n) {
		for (; e !== null;) {
			var r = e.alternate;
			if ((e.childLanes & t) === t ? r !== null && (r.childLanes & t) !== t && (r.childLanes |= t) : (e.childLanes |= t, r !== null && (r.childLanes |= t)), e === n) break;
			e = e.return;
		}
	}
	function Xa(e, t) {
		Wa = e, Ka = Ga = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (Fs = !0), e.firstContext = null);
	}
	function Za(e) {
		var t = e._currentValue;
		if (Ka !== e) {
			if (e = {
				context: e,
				memoizedValue: t,
				next: null
			}, Ga === null) {
				if (Wa === null) throw Error(i(308));
				Ga = e, Wa.dependencies = {
					lanes: 0,
					firstContext: e
				};
			} else Ga = Ga.next = e;
		}
		return t;
	}
	var Qa = null;
	function $a(e) {
		Qa === null ? Qa = [e] : Qa.push(e);
	}
	function eo(e, t, n, r) {
		var i = t.interleaved;
		return i === null ? (n.next = n, $a(t)) : (n.next = i.next, i.next = n), t.interleaved = n, to(e, r);
	}
	function to(e, t) {
		e.lanes |= t;
		var n = e.alternate;
		for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
		return n.tag === 3 ? n.stateNode : null;
	}
	var no = !1;
	function ro(e) {
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
	function io(e, t) {
		e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
			baseState: e.baseState,
			firstBaseUpdate: e.firstBaseUpdate,
			lastBaseUpdate: e.lastBaseUpdate,
			shared: e.shared,
			effects: e.effects
		});
	}
	function ao(e, t) {
		return {
			eventTime: e,
			lane: t,
			tag: 0,
			payload: null,
			callback: null,
			next: null
		};
	}
	function oo(e, t, n) {
		var r = e.updateQueue;
		if (r === null) return null;
		if (r = r.shared, X & 2) {
			var i = r.pending;
			return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, to(e, n);
		}
		return i = r.interleaved, i === null ? (t.next = t, $a(r)) : (t.next = i.next, i.next = t), r.interleaved = t, to(e, n);
	}
	function so(e, t, n) {
		if (t = t.updateQueue, t !== null && (t = t.shared, n & 4194240)) {
			var r = t.lanes;
			r &= e.pendingLanes, n |= r, t.lanes = n, Wt(e, n);
		}
	}
	function co(e, t) {
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
		} else e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
	}
	function lo(e, t, n, r) {
		var i = e.updateQueue;
		no = !1;
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
								d = P({}, d, f);
								break a;
							case 2: no = !0;
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
	function uo(e, t, n) {
		if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
			var r = e[t], a = r.callback;
			if (a !== null) {
				if (r.callback = null, r = n, typeof a != "function") throw Error(i(191, a));
				a.call(r);
			}
		}
	}
	var fo = {}, po = qi(fo), mo = qi(fo), ho = qi(fo);
	function go(e) {
		if (e === fo) throw Error(i(174));
		return e;
	}
	function _o(e, t) {
		switch (H(ho, t), H(mo, e), H(po, fo), e = t.nodeType, e) {
			case 9:
			case 11:
				t = (t = t.documentElement) ? t.namespaceURI : Ae(null, "");
				break;
			default: e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Ae(t, e);
		}
		V(po), H(po, t);
	}
	function vo() {
		V(po), V(mo), V(ho);
	}
	function yo(e) {
		go(ho.current);
		var t = go(po.current), n = Ae(t, e.type);
		t !== n && (H(mo, e), H(po, n));
	}
	function bo(e) {
		mo.current === e && (V(po), V(mo));
	}
	var W = qi(0);
	function G(e) {
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
	var xo = [];
	function So() {
		for (var e = 0; e < xo.length; e++) xo[e]._workInProgressVersionPrimary = null;
		xo.length = 0;
	}
	var Co = C.ReactCurrentDispatcher, wo = C.ReactCurrentBatchConfig, To = 0, K = null, q = null, J = null, Eo = !1, Do = !1, Oo = 0, ko = 0;
	function Ao() {
		throw Error(i(321));
	}
	function jo(e, t) {
		if (t === null) return !1;
		for (var n = 0; n < t.length && n < e.length; n++) if (!jr(e[n], t[n])) return !1;
		return !0;
	}
	function Mo(e, t, n, r, a, o) {
		if (To = o, K = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Co.current = e === null || e.memoizedState === null ? hs : gs, e = n(r, a), Do) {
			o = 0;
			do {
				if (Do = !1, Oo = 0, 25 <= o) throw Error(i(301));
				o += 1, J = q = null, t.updateQueue = null, Co.current = _s, e = n(r, a);
			} while (Do);
		}
		if (Co.current = ms, t = q !== null && q.next !== null, To = 0, J = q = K = null, Eo = !1, t) throw Error(i(300));
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
		return J === null ? K.memoizedState = J = e : J = J.next = e, J;
	}
	function Fo() {
		if (q === null) {
			var e = K.alternate;
			e = e === null ? null : e.memoizedState;
		} else e = q.next;
		var t = J === null ? K.memoizedState : J.next;
		if (t !== null) J = t, q = e;
		else {
			if (e === null) throw Error(i(310));
			q = e, e = {
				memoizedState: q.memoizedState,
				baseState: q.baseState,
				baseQueue: q.baseQueue,
				queue: q.queue,
				next: null
			}, J === null ? K.memoizedState = J = e : J = J.next = e;
		}
		return J;
	}
	function Io(e, t) {
		return typeof t == "function" ? t(e) : t;
	}
	function Lo(e) {
		var t = Fo(), n = t.queue;
		if (n === null) throw Error(i(311));
		n.lastRenderedReducer = e;
		var r = q, a = r.baseQueue, o = n.pending;
		if (o !== null) {
			if (a !== null) {
				var s = a.next;
				a.next = o.next, o.next = s;
			}
			r.baseQueue = a = o, n.pending = null;
		}
		if (a !== null) {
			o = a.next, r = r.baseState;
			var c = s = null, l = null, u = o;
			do {
				var d = u.lane;
				if ((To & d) === d) l !== null && (l = l.next = {
					lane: 0,
					action: u.action,
					hasEagerState: u.hasEagerState,
					eagerState: u.eagerState,
					next: null
				}), r = u.hasEagerState ? u.eagerState : e(r, u.action);
				else {
					var f = {
						lane: d,
						action: u.action,
						hasEagerState: u.hasEagerState,
						eagerState: u.eagerState,
						next: null
					};
					l === null ? (c = l = f, s = r) : l = l.next = f, K.lanes |= d, Xc |= d;
				}
				u = u.next;
			} while (u !== null && u !== o);
			l === null ? s = r : l.next = c, jr(r, t.memoizedState) || (Fs = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = l, n.lastRenderedState = r;
		}
		if (e = n.interleaved, e !== null) {
			a = e;
			do
				o = a.lane, K.lanes |= o, Xc |= o, a = a.next;
			while (a !== e);
		} else a === null && (n.lanes = 0);
		return [t.memoizedState, n.dispatch];
	}
	function Ro(e) {
		var t = Fo(), n = t.queue;
		if (n === null) throw Error(i(311));
		n.lastRenderedReducer = e;
		var r = n.dispatch, a = n.pending, o = t.memoizedState;
		if (a !== null) {
			n.pending = null;
			var s = a = a.next;
			do
				o = e(o, s.action), s = s.next;
			while (s !== a);
			jr(o, t.memoizedState) || (Fs = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
		}
		return [o, r];
	}
	function zo() {}
	function Bo(e, t) {
		var n = K, r = Fo(), a = t(), o = !jr(r.memoizedState, a);
		if (o && (r.memoizedState = a, Fs = !0), r = r.queue, Qo(Uo.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || J !== null && J.memoizedState.tag & 1) {
			if (n.flags |= 2048, qo(9, Ho.bind(null, n, r, a, t), void 0, null), Wc === null) throw Error(i(349));
			To & 30 || Vo(n, t, a);
		}
		return a;
	}
	function Vo(e, t, n) {
		e.flags |= 16384, e = {
			getSnapshot: t,
			value: n
		}, t = K.updateQueue, t === null ? (t = {
			lastEffect: null,
			stores: null
		}, K.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
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
			return !jr(e, n);
		} catch {
			return !0;
		}
	}
	function Go(e) {
		var t = to(e, 1);
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
		}, t.queue = e, e = e.dispatch = us.bind(null, K, e), [t.memoizedState, e];
	}
	function qo(e, t, n, r) {
		return e = {
			tag: e,
			create: t,
			destroy: n,
			deps: r,
			next: null
		}, t = K.updateQueue, t === null ? (t = {
			lastEffect: null,
			stores: null
		}, K.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
	}
	function Jo() {
		return Fo().memoizedState;
	}
	function Yo(e, t, n, r) {
		var i = Po();
		K.flags |= e, i.memoizedState = qo(1 | t, n, void 0, r === void 0 ? null : r);
	}
	function Xo(e, t, n, r) {
		var i = Fo();
		r = r === void 0 ? null : r;
		var a = void 0;
		if (q !== null) {
			var o = q.memoizedState;
			if (a = o.destroy, r !== null && jo(r, o.deps)) {
				i.memoizedState = qo(t, n, a, r);
				return;
			}
		}
		K.flags |= e, i.memoizedState = qo(1 | t, n, a, r);
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
		return To & 21 ? (jr(n, t) || (n = Bt(), K.lanes |= n, Xc |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Fs = !0), e.memoizedState = n);
	}
	function ss(e, t) {
		var n = L;
		L = n !== 0 && 4 > n ? n : 4, e(!0);
		var r = wo.transition;
		wo.transition = {};
		try {
			e(!1), t();
		} finally {
			L = n, wo.transition = r;
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
		else if (n = eo(e, t, n, r), n !== null) {
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
				if (i.hasEagerState = !0, i.eagerState = s, jr(s, o)) {
					var c = t.interleaved;
					c === null ? (i.next = i, $a(t)) : (i.next = c.next, c.next = i), t.interleaved = i;
					return;
				}
			} catch {}
			n = eo(e, t, i, r), n !== null && (i = ml(), gl(n, e, r, i), ps(n, t, r));
		}
	}
	function ds(e) {
		var t = e.alternate;
		return e === K || t !== null && t === K;
	}
	function fs(e, t) {
		Do = Eo = !0;
		var n = e.pending;
		n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
	}
	function ps(e, t, n) {
		if (n & 4194240) {
			var r = t.lanes;
			r &= e.pendingLanes, n |= r, t.lanes = n, Wt(e, n);
		}
	}
	var ms = {
		readContext: Za,
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
		readContext: Za,
		useCallback: function(e, t) {
			return Po().memoizedState = [e, t === void 0 ? null : t], e;
		},
		useContext: Za,
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
			}, r.queue = e, e = e.dispatch = ls.bind(null, K, e), [r.memoizedState, e];
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
			var r = K, a = Po();
			if (U) {
				if (n === void 0) throw Error(i(407));
				n = n();
			} else {
				if (n = t(), Wc === null) throw Error(i(349));
				To & 30 || Vo(r, t, n);
			}
			a.memoizedState = n;
			var o = {
				value: n,
				getSnapshot: t
			};
			return a.queue = o, Zo(Uo.bind(null, r, o, e), [e]), r.flags |= 2048, qo(9, Ho.bind(null, r, o, n, t), void 0, null), n;
		},
		useId: function() {
			var e = Po(), t = Wc.identifierPrefix;
			if (U) {
				var n = ya, r = va;
				n = (r & ~(1 << 32 - kt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Oo++, 0 < n && (t += "H" + n.toString(32)), t += ":";
			} else n = ko++, t = ":" + t + "r" + n.toString(32) + ":";
			return e.memoizedState = t;
		},
		unstable_isNewReconciler: !1
	}, gs = {
		readContext: Za,
		useCallback: is,
		useContext: Za,
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
			return os(Fo(), q.memoizedState, e);
		},
		useTransition: function() {
			return [Lo(Io)[0], Fo().memoizedState];
		},
		useMutableSource: zo,
		useSyncExternalStore: Bo,
		useId: cs,
		unstable_isNewReconciler: !1
	}, _s = {
		readContext: Za,
		useCallback: is,
		useContext: Za,
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
			return q === null ? t.memoizedState = e : os(t, q.memoizedState, e);
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
			for (var n in t = P({}, t), e = e.defaultProps, e) t[n] === void 0 && (t[n] = e[n]);
			return t;
		}
		return t;
	}
	function ys(e, t, n, r) {
		t = e.memoizedState, n = n(r, t), n = n == null ? t : P({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
	}
	var bs = {
		isMounted: function(e) {
			return (e = e._reactInternals) ? ut(e) === e : !1;
		},
		enqueueSetState: function(e, t, n) {
			e = e._reactInternals;
			var r = ml(), i = hl(e), a = ao(r, i);
			a.payload = t, n != null && (a.callback = n), t = oo(e, a, i), t !== null && (gl(t, e, i, r), so(t, e, i));
		},
		enqueueReplaceState: function(e, t, n) {
			e = e._reactInternals;
			var r = ml(), i = hl(e), a = ao(r, i);
			a.tag = 1, a.payload = t, n != null && (a.callback = n), t = oo(e, a, i), t !== null && (gl(t, e, i, r), so(t, e, i));
		},
		enqueueForceUpdate: function(e, t) {
			e = e._reactInternals;
			var n = ml(), r = hl(e), i = ao(n, r);
			i.tag = 2, t != null && (i.callback = t), t = oo(e, i, r), t !== null && (gl(t, e, r, n), so(t, e, r));
		}
	};
	function xs(e, t, n, r, i, a, o) {
		return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, a, o) : t.prototype && t.prototype.isPureReactComponent ? !Mr(n, r) || !Mr(i, a) : !0;
	}
	function Ss(e, t, n) {
		var r = !1, i = Ji, a = t.contextType;
		return typeof a == "object" && a ? a = Za(a) : (i = $i(t) ? Zi : Yi.current, r = t.contextTypes, a = (r = r != null) ? Qi(e, i) : Ji), t = new t(n, a), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = bs, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = a), t;
	}
	function Cs(e, t, n, r) {
		e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && bs.enqueueReplaceState(t, t.state, null);
	}
	function ws(e, t, n, r) {
		var i = e.stateNode;
		i.props = n, i.state = e.memoizedState, i.refs = {}, ro(e);
		var a = t.contextType;
		typeof a == "object" && a ? i.context = Za(a) : (a = $i(t) ? Zi : Yi.current, i.context = Qi(e, a)), i.state = e.memoizedState, a = t.getDerivedStateFromProps, typeof a == "function" && (ys(e, t, a, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && bs.enqueueReplaceState(i, i.state, null), lo(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308);
	}
	function Ts(e, t) {
		try {
			var n = "", r = t;
			do
				n += le(r), r = r.return;
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
		n = ao(-1, n), n.tag = 3, n.payload = { element: null };
		var r = t.value;
		return n.callback = function() {
			il || (il = !0, al = r), Ds(e, t);
		}, n;
	}
	function As(e, t, n) {
		n = ao(-1, n), n.tag = 3;
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
			Ds(e, t), typeof r != "function" && (ol === null ? ol = /* @__PURE__ */ new Set([this]) : ol.add(this));
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
			if ((t = e.tag === 13) && (t = e.memoizedState, t = t === null || t.dehydrated !== null), t) return e;
			e = e.return;
		} while (e !== null);
		return null;
	}
	function Ns(e, t, n, r, i) {
		return e.mode & 1 ? (e.flags |= 65536, e.lanes = i, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = ao(-1, 1), t.tag = 2, oo(n, t, 1))), n.lanes |= 1), e);
	}
	var Ps = C.ReactCurrentOwner, Fs = !1;
	function Is(e, t, n, r) {
		t.child = e === null ? Ha(t, null, n, r) : Va(t, e.child, n, r);
	}
	function Ls(e, t, n, r, i) {
		n = n.render;
		var a = t.ref;
		return Xa(t, i), r = Mo(e, t, n, r, a, i), n = No(), e !== null && !Fs ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, rc(e, t, i)) : (U && n && Sa(t), t.flags |= 1, Is(e, t, r, i), t.child);
	}
	function Rs(e, t, n, r, i) {
		if (e === null) {
			var a = n.type;
			return typeof a == "function" && !Jl(a) && a.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = a, zs(e, t, a, r, i)) : (e = Zl(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
		}
		if (a = e.child, (e.lanes & i) === 0) {
			var o = a.memoizedProps;
			if (n = n.compare, n = n === null ? Mr : n, n(o, r) && e.ref === t.ref) return rc(e, t, i);
		}
		return t.flags |= 1, e = Xl(a, r), e.ref = t.ref, e.return = t, t.child = e;
	}
	function zs(e, t, n, r, i) {
		if (e !== null) {
			var a = e.memoizedProps;
			if (Mr(a, r) && e.ref === t.ref) {
				if (Fs = !1, t.pendingProps = r = a, (e.lanes & i) !== 0) e.flags & 131072 && (Fs = !0);
				else return t.lanes = e.lanes, rc(e, t, i);
			}
		}
		return Hs(e, t, n, r, i);
	}
	function Bs(e, t, n) {
		var r = t.pendingProps, i = r.children, a = e === null ? null : e.memoizedState;
		if (r.mode === "hidden") {
			if (!(t.mode & 1)) t.memoizedState = {
				baseLanes: 0,
				cachePool: null,
				transitions: null
			}, H(qc, Kc), Kc |= n;
			else {
				if (!(n & 1073741824)) return e = a === null ? n : a.baseLanes | n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
					baseLanes: e,
					cachePool: null,
					transitions: null
				}, t.updateQueue = null, H(qc, Kc), Kc |= e, null;
				t.memoizedState = {
					baseLanes: 0,
					cachePool: null,
					transitions: null
				}, r = a === null ? n : a.baseLanes, H(qc, Kc), Kc |= r;
			}
		} else a === null ? r = n : (r = a.baseLanes | n, t.memoizedState = null), H(qc, Kc), Kc |= r;
		return Is(e, t, i, n), t.child;
	}
	function Vs(e, t) {
		var n = t.ref;
		(e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
	}
	function Hs(e, t, n, r, i) {
		var a = $i(n) ? Zi : Yi.current;
		return a = Qi(t, a), Xa(t, i), n = Mo(e, t, n, r, a, i), r = No(), e !== null && !Fs ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, rc(e, t, i)) : (U && r && Sa(t), t.flags |= 1, Is(e, t, n, i), t.child);
	}
	function Us(e, t, n, r, i) {
		if ($i(n)) {
			var a = !0;
			ra(t);
		} else a = !1;
		if (Xa(t, i), t.stateNode === null) nc(e, t), Ss(t, n, r), ws(t, n, r, i), r = !0;
		else if (e === null) {
			var o = t.stateNode, s = t.memoizedProps;
			o.props = s;
			var c = o.context, l = n.contextType;
			typeof l == "object" && l ? l = Za(l) : (l = $i(n) ? Zi : Yi.current, l = Qi(t, l));
			var u = n.getDerivedStateFromProps, d = typeof u == "function" || typeof o.getSnapshotBeforeUpdate == "function";
			d || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (s !== r || c !== l) && Cs(t, o, r, l), no = !1;
			var f = t.memoizedState;
			o.state = f, lo(t, r, o, i), c = t.memoizedState, s !== r || f !== c || Xi.current || no ? (typeof u == "function" && (ys(t, n, u, r), c = t.memoizedState), (s = no || xs(t, n, s, r, f, c, l)) ? (d || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = c), o.props = r, o.state = c, o.context = l, r = s) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
		} else {
			o = t.stateNode, io(e, t), s = t.memoizedProps, l = t.type === t.elementType ? s : vs(t.type, s), o.props = l, d = t.pendingProps, f = o.context, c = n.contextType, typeof c == "object" && c ? c = Za(c) : (c = $i(n) ? Zi : Yi.current, c = Qi(t, c));
			var p = n.getDerivedStateFromProps;
			(u = typeof p == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (s !== d || f !== c) && Cs(t, o, r, c), no = !1, f = t.memoizedState, o.state = f, lo(t, r, o, i);
			var m = t.memoizedState;
			s !== d || f !== m || Xi.current || no ? (typeof p == "function" && (ys(t, n, p, r), m = t.memoizedState), (l = no || xs(t, n, l, r, f, m, c) || !1) ? (u || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, m, c), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, m, c)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = m), o.props = r, o.state = m, o.context = c, r = l) : (typeof o.componentDidUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1);
		}
		return Ws(e, t, n, r, a, i);
	}
	function Ws(e, t, n, r, i, a) {
		Vs(e, t);
		var o = !!(t.flags & 128);
		if (!r && !o) return i && ia(t, n, !1), rc(e, t, a);
		r = t.stateNode, Ps.current = t;
		var s = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
		return t.flags |= 1, e !== null && o ? (t.child = Va(t, e.child, null, a), t.child = Va(t, null, s, a)) : Is(e, t, s, a), t.memoizedState = r.state, i && ia(t, n, !0), t.child;
	}
	function Gs(e) {
		var t = e.stateNode;
		t.pendingContext ? ta(e, t.pendingContext, t.pendingContext !== t.context) : t.context && ta(e, t.context, !1), _o(e, t.containerInfo);
	}
	function Ks(e, t, n, r, i) {
		return Pa(), Fa(i), t.flags |= 256, Is(e, t, n, r), t.child;
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
		var r = t.pendingProps, i = W.current, a = !1, o = !!(t.flags & 128), s;
		if ((s = o) || (s = e !== null && e.memoizedState === null ? !1 : !!(i & 2)), s ? (a = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), H(W, i & 1), e === null) return Aa(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.lanes = t.mode & 1 ? e.data === "$!" ? 8 : 1073741824 : 1, null) : (o = r.children, e = r.fallback, a ? (r = t.mode, a = t.child, o = {
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
		return r !== null && Fa(r), Va(t, e.child, null, n), e = Xs(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
	}
	function Qs(e, t, n, r, a, o, s) {
		if (n) return t.flags & 256 ? (t.flags &= -257, r = Es(Error(i(422))), Zs(e, t, s, r)) : t.memoizedState === null ? (o = r.fallback, a = t.mode, r = $l({
			mode: "visible",
			children: r.children
		}, a, 0, null), o = Ql(o, a, s, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && Va(t, e.child, null, s), t.child.memoizedState = Js(s), t.memoizedState = qs, o) : (t.child = e.child, t.flags |= 128, null);
		if (!(t.mode & 1)) return Zs(e, t, s, null);
		if (a.data === "$!") {
			if (r = a.nextSibling && a.nextSibling.dataset, r) var c = r.dgst;
			return r = c, o = Error(i(419)), r = Es(o, r, void 0), Zs(e, t, s, r);
		}
		if (c = (s & e.childLanes) !== 0, Fs || c) {
			if (r = Wc, r !== null) {
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
				a = (a & (r.suspendedLanes | s)) === 0 ? a : 0, a !== 0 && a !== o.retryLane && (o.retryLane = a, to(e, a), gl(r, e, a, -1));
			}
			return Al(), r = Es(Error(i(421))), Zs(e, t, s, r);
		}
		return a.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Hl.bind(null, e), a._reactRetry = t, null) : (e = o.treeContext, Ta = Mi(a.nextSibling), wa = t, U = !0, Ea = null, e !== null && (ha[ga++] = va, ha[ga++] = ya, ha[ga++] = _a, va = e.id, ya = e.overflow, _a = t), t = Xs(t, r.children), t.flags |= 4096, t);
	}
	function $s(e, t, n) {
		e.lanes |= t;
		var r = e.alternate;
		r !== null && (r.lanes |= t), Ya(e.return, t, n);
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
		if (Is(e, t, r.children, n), r = W.current, r & 2) r = r & 1 | 2, t.flags |= 128;
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
		if (H(W, r), !(t.mode & 1)) t.memoizedState = null;
		else switch (i) {
			case "forwards":
				for (n = t.child, i = null; n !== null;) e = n.alternate, e !== null && G(e) === null && (i = n), n = n.sibling;
				n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), ec(t, !1, i, n, a);
				break;
			case "backwards":
				for (n = null, i = t.child, t.child = null; i !== null;) {
					if (e = i.alternate, e !== null && G(e) === null) {
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
		if (e !== null && t.child !== e.child) throw Error(i(153));
		if (t.child !== null) {
			for (e = t.child, n = Xl(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = Xl(e, e.pendingProps), n.return = t;
			n.sibling = null;
		}
		return t.child;
	}
	function ic(e, t, n) {
		switch (t.tag) {
			case 3:
				Gs(t), Pa();
				break;
			case 5:
				yo(t);
				break;
			case 1:
				$i(t.type) && ra(t);
				break;
			case 4:
				_o(t, t.stateNode.containerInfo);
				break;
			case 10:
				var r = t.type._context, i = t.memoizedProps.value;
				H(Ua, r._currentValue), r._currentValue = i;
				break;
			case 13:
				if (r = t.memoizedState, r !== null) return r.dehydrated === null ? (n & t.child.childLanes) === 0 ? (H(W, W.current & 1), e = rc(e, t, n), e === null ? null : e.sibling) : Ys(e, t, n) : (H(W, W.current & 1), t.flags |= 128, null);
				H(W, W.current & 1);
				break;
			case 19:
				if (r = (n & t.childLanes) !== 0, e.flags & 128) {
					if (r) return tc(e, t, n);
					t.flags |= 128;
				}
				if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), H(W, W.current), r) break;
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
			e = t.stateNode, go(po.current);
			var a = null;
			switch (n) {
				case "input":
					i = ve(e, i), r = ve(e, r), a = [];
					break;
				case "select":
					i = P({}, i, { value: void 0 }), r = P({}, r, { value: void 0 }), a = [];
					break;
				case "textarea":
					i = Ee(e, i), r = Ee(e, r), a = [];
					break;
				default: typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Si);
			}
			ze(n, r);
			var o;
			for (u in n = null, i) if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null) {
				if (u === "style") {
					var c = i[u];
					for (o in c) c.hasOwnProperty(o) && (n ||= {}, n[o] = "");
				} else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (s.hasOwnProperty(u) ? a ||= [] : (a ||= []).push(u, null));
			}
			for (u in r) {
				var l = r[u];
				if (c = i?.[u], r.hasOwnProperty(u) && l !== c && (l != null || c != null)) {
					if (u === "style") {
						if (c) {
							for (o in c) !c.hasOwnProperty(o) || l && l.hasOwnProperty(o) || (n ||= {}, n[o] = "");
							for (o in l) l.hasOwnProperty(o) && c[o] !== l[o] && (n ||= {}, n[o] = l[o]);
						} else n || (a ||= [], a.push(u, n)), n = l;
					} else u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, c = c ? c.__html : void 0, l != null && c !== l && (a ||= []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (a ||= []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (s.hasOwnProperty(u) ? (l != null && u === "onScroll" && B("scroll", e), a || c === l || (a = [])) : (a ||= []).push(u, l));
				}
			}
			n && (a ||= []).push("style", n);
			var u = a;
			(t.updateQueue = u) && (t.flags |= 4);
		}
	}, sc = function(e, t, n, r) {
		n !== r && (t.flags |= 4);
	};
	function cc(e, t) {
		if (!U) switch (e.tailMode) {
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
		var r = t.pendingProps;
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
			case 14: return lc(t), null;
			case 1: return $i(t.type) && ea(), lc(t), null;
			case 3: return r = t.stateNode, vo(), V(Xi), V(Yi), So(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Ma(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Ea !== null && (bl(Ea), Ea = null))), lc(t), null;
			case 5:
				bo(t);
				var a = go(ho.current);
				if (n = t.type, e !== null && t.stateNode != null) oc(e, t, n, r, a), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
				else {
					if (!r) {
						if (t.stateNode === null) throw Error(i(166));
						return lc(t), null;
					}
					if (e = go(po.current), Ma(t)) {
						r = t.stateNode, n = t.type;
						var o = t.memoizedProps;
						switch (r[Fi] = t, r[Ii] = o, e = !!(t.mode & 1), n) {
							case "dialog":
								B("cancel", r), B("close", r);
								break;
							case "iframe":
							case "object":
							case "embed":
								B("load", r);
								break;
							case "video":
							case "audio":
								for (a = 0; a < ai.length; a++) B(ai[a], r);
								break;
							case "source":
								B("error", r);
								break;
							case "img":
							case "image":
							case "link":
								B("error", r), B("load", r);
								break;
							case "details":
								B("toggle", r);
								break;
							case "input":
								ye(r, o), B("invalid", r);
								break;
							case "select":
								r._wrapperState = { wasMultiple: !!o.multiple }, B("invalid", r);
								break;
							case "textarea": De(r, o), B("invalid", r);
						}
						for (var c in ze(n, o), a = null, o) if (o.hasOwnProperty(c)) {
							var l = o[c];
							c === "children" ? typeof l == "string" ? r.textContent !== l && (!0 !== o.suppressHydrationWarning && xi(r.textContent, l, e), a = ["children", l]) : typeof l == "number" && r.textContent !== "" + l && (!0 !== o.suppressHydrationWarning && xi(r.textContent, l, e), a = ["children", "" + l]) : s.hasOwnProperty(c) && l != null && c === "onScroll" && B("scroll", r);
						}
						switch (n) {
							case "input":
								he(r), Se(r, o, !0);
								break;
							case "textarea":
								he(r), ke(r);
								break;
							case "select":
							case "option": break;
							default: typeof o.onClick == "function" && (r.onclick = Si);
						}
						r = a, t.updateQueue = r, r !== null && (t.flags |= 4);
					} else {
						c = a.nodeType === 9 ? a : a.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = F(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = c.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = c.createElement(n, { is: r.is }) : (e = c.createElement(n), n === "select" && (c = e, r.multiple ? c.multiple = !0 : r.size && (c.size = r.size))) : e = c.createElementNS(e, n), e[Fi] = t, e[Ii] = r, ac(e, t, !1, !1), t.stateNode = e;
						a: {
							switch (c = Be(n, r), n) {
								case "dialog":
									B("cancel", e), B("close", e), a = r;
									break;
								case "iframe":
								case "object":
								case "embed":
									B("load", e), a = r;
									break;
								case "video":
								case "audio":
									for (a = 0; a < ai.length; a++) B(ai[a], e);
									a = r;
									break;
								case "source":
									B("error", e), a = r;
									break;
								case "img":
								case "image":
								case "link":
									B("error", e), B("load", e), a = r;
									break;
								case "details":
									B("toggle", e), a = r;
									break;
								case "input":
									ye(e, r), a = ve(e, r), B("invalid", e);
									break;
								case "option":
									a = r;
									break;
								case "select":
									e._wrapperState = { wasMultiple: !!r.multiple }, a = P({}, r, { value: void 0 }), B("invalid", e);
									break;
								case "textarea":
									De(e, r), a = Ee(e, r), B("invalid", e);
									break;
								default: a = r;
							}
							for (o in ze(n, a), l = a, l) if (l.hasOwnProperty(o)) {
								var u = l[o];
								o === "style" ? Le(e, u) : o === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, u != null && Me(e, u)) : o === "children" ? typeof u == "string" ? (n !== "textarea" || u !== "") && Ne(e, u) : typeof u == "number" && Ne(e, "" + u) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (s.hasOwnProperty(o) ? u != null && o === "onScroll" && B("scroll", e) : u != null && S(e, o, u, c));
							}
							switch (n) {
								case "input":
									he(e), Se(e, r, !1);
									break;
								case "textarea":
									he(e), ke(e);
									break;
								case "option":
									r.value != null && e.setAttribute("value", "" + fe(r.value));
									break;
								case "select":
									e.multiple = !!r.multiple, o = r.value, o == null ? r.defaultValue != null && Te(e, !!r.multiple, r.defaultValue, !0) : Te(e, !!r.multiple, o, !1);
									break;
								default: typeof a.onClick == "function" && (e.onclick = Si);
							}
							switch (n) {
								case "button":
								case "input":
								case "select":
								case "textarea":
									r = !!r.autoFocus;
									break a;
								case "img":
									r = !0;
									break a;
								default: r = !1;
							}
						}
						r && (t.flags |= 4);
					}
					t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
				}
				return lc(t), null;
			case 6:
				if (e && t.stateNode != null) sc(e, t, e.memoizedProps, r);
				else {
					if (typeof r != "string" && t.stateNode === null) throw Error(i(166));
					if (n = go(ho.current), go(po.current), Ma(t)) {
						if (r = t.stateNode, n = t.memoizedProps, r[Fi] = t, (o = r.nodeValue !== n) && (e = wa, e !== null)) switch (e.tag) {
							case 3:
								xi(r.nodeValue, n, !!(e.mode & 1));
								break;
							case 5: !0 !== e.memoizedProps.suppressHydrationWarning && xi(r.nodeValue, n, !!(e.mode & 1));
						}
						o && (t.flags |= 4);
					} else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Fi] = t, t.stateNode = r;
				}
				return lc(t), null;
			case 13:
				if (V(W), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
					if (U && Ta !== null && t.mode & 1 && !(t.flags & 128)) Na(), Pa(), t.flags |= 98560, o = !1;
					else if (o = Ma(t), r !== null && r.dehydrated !== null) {
						if (e === null) {
							if (!o) throw Error(i(318));
							if (o = t.memoizedState, o = o === null ? null : o.dehydrated, !o) throw Error(i(317));
							o[Fi] = t;
						} else Pa(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
						lc(t), o = !1;
					} else Ea !== null && (bl(Ea), Ea = null), o = !0;
					if (!o) return t.flags & 65536 ? t : null;
				}
				return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || W.current & 1 ? Jc === 0 && (Jc = 3) : Al())), t.updateQueue !== null && (t.flags |= 4), lc(t), null);
			case 4: return vo(), e === null && di(t.stateNode.containerInfo), lc(t), null;
			case 10: return Ja(t.type._context), lc(t), null;
			case 17: return $i(t.type) && ea(), lc(t), null;
			case 19:
				if (V(W), o = t.memoizedState, o === null) return lc(t), null;
				if (r = !!(t.flags & 128), c = o.rendering, c === null) {
					if (r) cc(o, !1);
					else {
						if (Jc !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null;) {
							if (c = G(e), c !== null) {
								for (t.flags |= 128, cc(o, !1), r = c.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;) o = n, e = r, o.flags &= 14680066, c = o.alternate, c === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = c.childLanes, o.lanes = c.lanes, o.child = c.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = c.memoizedProps, o.memoizedState = c.memoizedState, o.updateQueue = c.updateQueue, o.type = c.type, e = c.dependencies, o.dependencies = e === null ? null : {
									lanes: e.lanes,
									firstContext: e.firstContext
								}), n = n.sibling;
								return H(W, W.current & 1 | 2), t.child;
							}
							e = e.sibling;
						}
						o.tail !== null && I() > nl && (t.flags |= 128, r = !0, cc(o, !1), t.lanes = 4194304);
					}
				} else {
					if (!r) {
						if (e = G(c), e !== null) {
							if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), cc(o, !0), o.tail === null && o.tailMode === "hidden" && !c.alternate && !U) return lc(t), null;
						} else 2 * I() - o.renderingStartTime > nl && n !== 1073741824 && (t.flags |= 128, r = !0, cc(o, !1), t.lanes = 4194304);
					}
					o.isBackwards ? (c.sibling = t.child, t.child = c) : (n = o.last, n === null ? t.child = c : n.sibling = c, o.last = c);
				}
				return o.tail === null ? (lc(t), null) : (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = I(), t.sibling = null, n = W.current, H(W, r ? n & 1 | 2 : n & 1), t);
			case 22:
			case 23: return El(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Kc & 1073741824 && (lc(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : lc(t), null;
			case 24: return null;
			case 25: return null;
		}
		throw Error(i(156, t.tag));
	}
	function dc(e, t) {
		switch (Ca(t), t.tag) {
			case 1: return $i(t.type) && ea(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 3: return vo(), V(Xi), V(Yi), So(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
			case 5: return bo(t), null;
			case 13:
				if (V(W), e = t.memoizedState, e !== null && e.dehydrated !== null) {
					if (t.alternate === null) throw Error(i(340));
					Pa();
				}
				return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 19: return V(W), null;
			case 4: return vo(), null;
			case 10: return Ja(t.type._context), null;
			case 22:
			case 23: return El(), null;
			case 24: return null;
			default: return null;
		}
	}
	var fc = !1, pc = !1, mc = typeof WeakSet == "function" ? WeakSet : Set, Y = null;
	function hc(e, t) {
		var n = e.ref;
		if (n !== null) {
			if (typeof n == "function") try {
				n(null);
			} catch (n) {
				Q(e, t, n);
			}
			else n.current = null;
		}
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
		if (Ci = gn, e = Ir(), Lr(e)) {
			if ("selectionStart" in e) var n = {
				start: e.selectionStart,
				end: e.selectionEnd
			};
			else a: {
				n = (n = e.ownerDocument) && n.defaultView || window;
				var r = n.getSelection && n.getSelection();
				if (r && r.rangeCount !== 0) {
					n = r.anchorNode;
					var a = r.anchorOffset, o = r.focusNode;
					r = r.focusOffset;
					try {
						n.nodeType, o.nodeType;
					} catch {
						n = null;
						break a;
					}
					var s = 0, c = -1, l = -1, u = 0, d = 0, f = e, p = null;
					b: for (;;) {
						for (var m; f !== n || a !== 0 && f.nodeType !== 3 || (c = s + a), f !== o || r !== 0 && f.nodeType !== 3 || (l = s + r), f.nodeType === 3 && (s += f.nodeValue.length), (m = f.firstChild) !== null;) p = f, f = m;
						for (;;) {
							if (f === e) break b;
							if (p === n && ++u === a && (c = s), p === o && ++d === r && (l = s), (m = f.nextSibling) !== null) break;
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
		for (wi = {
			focusedElem: e,
			selectionRange: n
		}, gn = !1, Y = t; Y !== null;) if (t = Y, e = t.child, t.subtreeFlags & 1028 && e !== null) e.return = t, Y = e;
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
					default: throw Error(i(163));
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
		t !== null && (e.alternate = null, Sc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Fi], delete t[Ii], delete t[Ri], delete t[zi], delete t[Bi])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
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
		if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Si));
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
		if (Dt && typeof Dt.onCommitFiberUnmount == "function") try {
			Dt.onCommitFiberUnmount(Et, n);
		} catch {}
		switch (n.tag) {
			case 5: pc || hc(n, t);
			case 6:
				var r = Dc, i = Oc;
				Dc = null, kc(e, t, n), Dc = r, Oc = i, Dc !== null && (Oc ? (e = Dc, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Dc.removeChild(n.stateNode));
				break;
			case 18:
				Dc !== null && (Oc ? (e = Dc, n = n.stateNode, e.nodeType === 8 ? ji(e.parentNode, n) : e.nodeType === 1 && ji(e, n), mn(e)) : ji(Dc, n.stateNode));
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
		if (n !== null) for (var r = 0; r < n.length; r++) {
			var a = n[r];
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
				if (Dc === null) throw Error(i(160));
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
		var n = e.alternate, r = e.flags;
		switch (e.tag) {
			case 0:
			case 11:
			case 14:
			case 15:
				if (Mc(t, e), Pc(e), r & 4) {
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
				Mc(t, e), Pc(e), r & 512 && n !== null && hc(n, n.return);
				break;
			case 5:
				if (Mc(t, e), Pc(e), r & 512 && n !== null && hc(n, n.return), e.flags & 32) {
					var a = e.stateNode;
					try {
						Ne(a, "");
					} catch (t) {
						Q(e, e.return, t);
					}
				}
				if (r & 4 && (a = e.stateNode, a != null)) {
					var o = e.memoizedProps, s = n === null ? o : n.memoizedProps, c = e.type, l = e.updateQueue;
					if (e.updateQueue = null, l !== null) try {
						c === "input" && o.type === "radio" && o.name != null && be(a, o), Be(c, s);
						var u = Be(c, o);
						for (s = 0; s < l.length; s += 2) {
							var d = l[s], f = l[s + 1];
							d === "style" ? Le(a, f) : d === "dangerouslySetInnerHTML" ? Me(a, f) : d === "children" ? Ne(a, f) : S(a, d, f, u);
						}
						switch (c) {
							case "input":
								xe(a, o);
								break;
							case "textarea":
								Oe(a, o);
								break;
							case "select":
								var p = a._wrapperState.wasMultiple;
								a._wrapperState.wasMultiple = !!o.multiple;
								var m = o.value;
								m == null ? p !== !!o.multiple && (o.defaultValue == null ? Te(a, !!o.multiple, o.multiple ? [] : "", !1) : Te(a, !!o.multiple, o.defaultValue, !0)) : Te(a, !!o.multiple, m, !1);
						}
						a[Ii] = o;
					} catch (t) {
						Q(e, e.return, t);
					}
				}
				break;
			case 6:
				if (Mc(t, e), Pc(e), r & 4) {
					if (e.stateNode === null) throw Error(i(162));
					a = e.stateNode, o = e.memoizedProps;
					try {
						a.nodeValue = o;
					} catch (t) {
						Q(e, e.return, t);
					}
				}
				break;
			case 3:
				if (Mc(t, e), Pc(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
					mn(t.containerInfo);
				} catch (t) {
					Q(e, e.return, t);
				}
				break;
			case 4:
				Mc(t, e), Pc(e);
				break;
			case 13:
				Mc(t, e), Pc(e), a = e.child, a.flags & 8192 && (o = a.memoizedState !== null, a.stateNode.isHidden = o, !o || a.alternate !== null && a.alternate.memoizedState !== null || (tl = I())), r & 4 && jc(e);
				break;
			case 22:
				if (d = n !== null && n.memoizedState !== null, e.mode & 1 ? (pc = (u = pc) || d, Mc(t, e), pc = u) : Mc(t, e), Pc(e), r & 8192) {
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
										r = p, n = p.return;
										try {
											t = r, h.props = t.memoizedProps, h.state = t.memoizedState, h.componentWillUnmount();
										} catch (e) {
											Q(r, n, e);
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
									a = f.stateNode, u ? (o = a.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (c = f.stateNode, l = f.memoizedProps.style, s = l != null && l.hasOwnProperty("display") ? l.display : null, c.style.display = Ie("display", s));
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
				Mc(t, e), Pc(e), r & 4 && jc(e);
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
							var r = n;
							break a;
						}
						n = n.return;
					}
					throw Error(i(160));
				}
				switch (r.tag) {
					case 5:
						var a = r.stateNode;
						r.flags & 32 && (Ne(a, ""), r.flags &= -33), Ec(e, wc(e), a);
						break;
					case 3:
					case 4:
						var o = r.stateNode.containerInfo;
						Tc(e, wc(e), o);
						break;
					default: throw Error(i(161));
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
		for (var r = !!(e.mode & 1); Y !== null;) {
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
							var r = t.stateNode;
							if (t.flags & 4 && !pc) {
								if (n === null) r.componentDidMount();
								else {
									var a = t.elementType === t.type ? n.memoizedProps : vs(t.type, n.memoizedProps);
									r.componentDidUpdate(a, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
								}
							}
							var o = t.updateQueue;
							o !== null && uo(t, o, r);
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
								uo(t, s, n);
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
						default: throw Error(i(163));
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
	var Bc = Math.ceil, Vc = C.ReactCurrentDispatcher, Hc = C.ReactCurrentOwner, Uc = C.ReactCurrentBatchConfig, X = 0, Wc = null, Z = null, Gc = 0, Kc = 0, qc = qi(0), Jc = 0, Yc = null, Xc = 0, Zc = 0, Qc = 0, $c = null, el = null, tl = 0, nl = Infinity, rl = null, il = !1, al = null, ol = null, sl = !1, cl = null, ll = 0, ul = 0, dl = null, fl = -1, pl = 0;
	function ml() {
		return X & 6 ? I() : fl === -1 ? fl = I() : fl;
	}
	function hl(e) {
		return e.mode & 1 ? X & 2 && Gc !== 0 ? Gc & -Gc : Ia.transition === null ? (e = L, e === 0 && (e = window.event, e = e === void 0 ? 16 : Sn(e.type)), e) : (pl === 0 && (pl = Bt()), pl) : 1;
	}
	function gl(e, t, n, r) {
		if (50 < ul) throw ul = 0, dl = null, Error(i(185));
		Ht(e, n, r), X & 2 && e === Wc || (e === Wc && (!(X & 2) && (Zc |= n), Jc === 4 && Sl(e, Gc)), _l(e, r), n === 1 && X === 0 && !(t.mode & 1) && (nl = I() + 500, oa && ua()));
	}
	function _l(e, t) {
		var n = e.callbackNode;
		Rt(e, t);
		var r = It(e, e === Wc ? Gc : 0);
		if (r === 0) n !== null && _t(n), e.callbackNode = null, e.callbackPriority = 0;
		else if (t = r & -r, e.callbackPriority !== t) {
			if (n != null && _t(n), t === 1) e.tag === 0 ? la(Cl.bind(null, e)) : ca(Cl.bind(null, e)), ki(function() {
				!(X & 6) && ua();
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
				n = Gl(n, vl.bind(null, e));
			}
			e.callbackPriority = t, e.callbackNode = n;
		}
	}
	function vl(e, t) {
		if (fl = -1, pl = 0, X & 6) throw Error(i(327));
		var n = e.callbackNode;
		if (Rl() && e.callbackNode !== n) return null;
		var r = It(e, e === Wc ? Gc : 0);
		if (r === 0) return null;
		if (r & 30 || (r & e.expiredLanes) !== 0 || t) t = jl(e, r);
		else {
			t = r;
			var a = X;
			X |= 2;
			var o = kl();
			(Wc !== e || Gc !== t) && (rl = null, nl = I() + 500, Dl(e, t));
			do
				try {
					Nl();
					break;
				} catch (t) {
					Ol(e, t);
				}
			while (1);
			qa(), Vc.current = o, X = a, Z === null ? (Wc = null, Gc = 0, t = Jc) : t = 0;
		}
		if (t !== 0) {
			if (t === 2 && (a = zt(e), a !== 0 && (r = a, t = yl(e, a))), t === 1) throw n = Yc, Dl(e, 0), Sl(e, r), _l(e, I()), n;
			if (t === 6) Sl(e, r);
			else {
				if (a = e.current.alternate, !(r & 30) && !xl(a) && (t = jl(e, r), t === 2 && (o = zt(e), o !== 0 && (r = o, t = yl(e, o))), t === 1)) throw n = Yc, Dl(e, 0), Sl(e, r), _l(e, I()), n;
				switch (e.finishedWork = a, e.finishedLanes = r, t) {
					case 0:
					case 1: throw Error(i(345));
					case 2:
						Il(e, el, rl);
						break;
					case 3:
						if (Sl(e, r), (r & 130023424) === r && (t = tl + 500 - I(), 10 < t)) {
							if (It(e, 0) !== 0) break;
							if (a = e.suspendedLanes, (a & r) !== r) {
								ml(), e.pingedLanes |= e.suspendedLanes & a;
								break;
							}
							e.timeoutHandle = Ei(Il.bind(null, e, el, rl), t);
							break;
						}
						Il(e, el, rl);
						break;
					case 4:
						if (Sl(e, r), (r & 4194240) === r) break;
						for (t = e.eventTimes, a = -1; 0 < r;) {
							var s = 31 - kt(r);
							o = 1 << s, s = t[s], s > a && (a = s), r &= ~o;
						}
						if (r = a, r = I() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Bc(r / 1960)) - r, 10 < r) {
							e.timeoutHandle = Ei(Il.bind(null, e, el, rl), r);
							break;
						}
						Il(e, el, rl);
						break;
					case 5:
						Il(e, el, rl);
						break;
					default: throw Error(i(329));
				}
			}
		}
		return _l(e, I()), e.callbackNode === n ? vl.bind(null, e) : null;
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
						if (!jr(a(), i)) return !1;
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
			var n = 31 - kt(t), r = 1 << n;
			e[n] = -1, t &= ~r;
		}
	}
	function Cl(e) {
		if (X & 6) throw Error(i(327));
		Rl();
		var t = It(e, 0);
		if (!(t & 1)) return _l(e, I()), null;
		var n = jl(e, t);
		if (e.tag !== 0 && n === 2) {
			var r = zt(e);
			r !== 0 && (t = r, n = yl(e, r));
		}
		if (n === 1) throw n = Yc, Dl(e, 0), Sl(e, t), _l(e, I()), n;
		if (n === 6) throw Error(i(345));
		return e.finishedWork = e.current.alternate, e.finishedLanes = t, Il(e, el, rl), _l(e, I()), null;
	}
	function wl(e, t) {
		var n = X;
		X |= 1;
		try {
			return e(t);
		} finally {
			X = n, X === 0 && (nl = I() + 500, oa && ua());
		}
	}
	function Tl(e) {
		cl !== null && cl.tag === 0 && !(X & 6) && Rl();
		var t = X;
		X |= 1;
		var n = Uc.transition, r = L;
		try {
			if (Uc.transition = null, L = 1, e) return e();
		} finally {
			L = r, Uc.transition = n, X = t, !(X & 6) && ua();
		}
	}
	function El() {
		Kc = qc.current, V(qc);
	}
	function Dl(e, t) {
		e.finishedWork = null, e.finishedLanes = 0;
		var n = e.timeoutHandle;
		if (n !== -1 && (e.timeoutHandle = -1, Di(n)), Z !== null) for (n = Z.return; n !== null;) {
			var r = n;
			switch (Ca(r), r.tag) {
				case 1:
					r = r.type.childContextTypes, r != null && ea();
					break;
				case 3:
					vo(), V(Xi), V(Yi), So();
					break;
				case 5:
					bo(r);
					break;
				case 4:
					vo();
					break;
				case 13:
					V(W);
					break;
				case 19:
					V(W);
					break;
				case 10:
					Ja(r.type._context);
					break;
				case 22:
				case 23: El();
			}
			n = n.return;
		}
		if (Wc = e, Z = e = Xl(e.current, null), Gc = Kc = t, Jc = 0, Yc = null, Qc = Zc = Xc = 0, el = $c = null, Qa !== null) {
			for (t = 0; t < Qa.length; t++) if (n = Qa[t], r = n.interleaved, r !== null) {
				n.interleaved = null;
				var i = r.next, a = n.pending;
				if (a !== null) {
					var o = a.next;
					a.next = i, r.next = o;
				}
				n.pending = r;
			}
			Qa = null;
		}
		return e;
	}
	function Ol(e, t) {
		do {
			var n = Z;
			try {
				if (qa(), Co.current = ms, Eo) {
					for (var r = K.memoizedState; r !== null;) {
						var a = r.queue;
						a !== null && (a.pending = null), r = r.next;
					}
					Eo = !1;
				}
				if (To = 0, J = q = K = null, Do = !1, Oo = 0, Hc.current = null, n === null || n.return === null) {
					Jc = 1, Yc = t, Z = null;
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
						var m = Ms(s);
						if (m !== null) {
							m.flags &= -257, Ns(m, s, c, o, t), m.mode & 1 && js(o, u, t), t = m, l = u;
							var h = t.updateQueue;
							if (h === null) {
								var g = /* @__PURE__ */ new Set();
								g.add(l), t.updateQueue = g;
							} else h.add(l);
							break a;
						}
						if (!(t & 1)) {
							js(o, u, t), Al();
							break a;
						}
						l = Error(i(426));
					} else if (U && c.mode & 1) {
						var _ = Ms(s);
						if (_ !== null) {
							!(_.flags & 65536) && (_.flags |= 256), Ns(_, s, c, o, t), Fa(Ts(l, c));
							break a;
						}
					}
					o = l = Ts(l, c), Jc !== 4 && (Jc = 2), $c === null ? $c = [o] : $c.push(o), o = s;
					do {
						switch (o.tag) {
							case 3:
								o.flags |= 65536, t &= -t, o.lanes |= t;
								var v = ks(o, l, t);
								co(o, v);
								break a;
							case 1:
								c = l;
								var y = o.type, b = o.stateNode;
								if (!(o.flags & 128) && (typeof y.getDerivedStateFromError == "function" || b !== null && typeof b.componentDidCatch == "function" && (ol === null || !ol.has(b)))) {
									o.flags |= 65536, t &= -t, o.lanes |= t;
									var x = As(o, c, t);
									co(o, x);
									break a;
								}
						}
						o = o.return;
					} while (o !== null);
				}
				Fl(n);
			} catch (e) {
				t = e, Z === n && n !== null && (Z = n = n.return);
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
		(Jc === 0 || Jc === 3 || Jc === 2) && (Jc = 4), Wc === null || !(Xc & 268435455) && !(Zc & 268435455) || Sl(Wc, Gc);
	}
	function jl(e, t) {
		var n = X;
		X |= 2;
		var r = kl();
		(Wc !== e || Gc !== t) && (rl = null, Dl(e, t));
		do
			try {
				Ml();
				break;
			} catch (t) {
				Ol(e, t);
			}
		while (1);
		if (qa(), X = n, Vc.current = r, Z !== null) throw Error(i(261));
		return Wc = null, Gc = 0, Jc;
	}
	function Ml() {
		for (; Z !== null;) Pl(Z);
	}
	function Nl() {
		for (; Z !== null && !vt();) Pl(Z);
	}
	function Pl(e) {
		var t = Wl(e.alternate, e, Kc);
		e.memoizedProps = e.pendingProps, t === null ? Fl(e) : Z = t, Hc.current = null;
	}
	function Fl(e) {
		var t = e;
		do {
			var n = t.alternate;
			if (e = t.return, t.flags & 32768) {
				if (n = dc(n, t), n !== null) {
					n.flags &= 32767, Z = n;
					return;
				}
				if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
				else {
					Jc = 6, Z = null;
					return;
				}
			} else if (n = uc(n, t, Kc), n !== null) {
				Z = n;
				return;
			}
			if (t = t.sibling, t !== null) {
				Z = t;
				return;
			}
			Z = t = e;
		} while (t !== null);
		Jc === 0 && (Jc = 5);
	}
	function Il(e, t, n) {
		var r = L, i = Uc.transition;
		try {
			Uc.transition = null, L = 1, Ll(e, t, n, r);
		} finally {
			Uc.transition = i, L = r;
		}
		return null;
	}
	function Ll(e, t, n, r) {
		do
			Rl();
		while (cl !== null);
		if (X & 6) throw Error(i(327));
		n = e.finishedWork;
		var a = e.finishedLanes;
		if (n === null) return null;
		if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(i(177));
		e.callbackNode = null, e.callbackPriority = 0;
		var o = n.lanes | n.childLanes;
		if (Ut(e, o), e === Wc && (Z = Wc = null, Gc = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || sl || (sl = !0, Gl(Ct, function() {
			return Rl(), null;
		})), o = !!(n.flags & 15990), n.subtreeFlags & 15990 || o) {
			o = Uc.transition, Uc.transition = null;
			var s = L;
			L = 1;
			var c = X;
			X |= 4, Hc.current = null, vc(e, n), Nc(n, e), Rr(wi), gn = !!Ci, wi = Ci = null, e.current = n, Fc(n, e, a), yt(), X = c, L = s, Uc.transition = o;
		} else e.current = n;
		if (sl && (sl = !1, cl = e, ll = a), o = e.pendingLanes, o === 0 && (ol = null), Ot(n.stateNode, r), _l(e, I()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) a = t[n], r(a.value, {
			componentStack: a.stack,
			digest: a.digest
		});
		if (il) throw il = !1, e = al, al = null, e;
		return ll & 1 && e.tag !== 0 && Rl(), o = e.pendingLanes, o & 1 ? e === dl ? ul++ : (ul = 0, dl = e) : ul = 0, ua(), null;
	}
	function Rl() {
		if (cl !== null) {
			var e = Gt(ll), t = Uc.transition, n = L;
			try {
				if (Uc.transition = null, L = 16 > e ? 16 : e, cl === null) var r = !1;
				else {
					if (e = cl, cl = null, ll = 0, X & 6) throw Error(i(331));
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
					if (X = a, ua(), Dt && typeof Dt.onPostCommitFiberRoot == "function") try {
						Dt.onPostCommitFiberRoot(Et, e);
					} catch {}
					r = !0;
				}
				return r;
			} finally {
				L = n, Uc.transition = t;
			}
		}
		return !1;
	}
	function zl(e, t, n) {
		t = Ts(n, t), t = ks(e, t, 1), e = oo(e, t, 1), t = ml(), e !== null && (Ht(e, 1, t), _l(e, t));
	}
	function Q(e, t, n) {
		if (e.tag === 3) zl(e, e, n);
		else for (; t !== null;) {
			if (t.tag === 3) {
				zl(t, e, n);
				break;
			}
			if (t.tag === 1) {
				var r = t.stateNode;
				if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (ol === null || !ol.has(r))) {
					e = Ts(n, e), e = As(t, e, 1), t = oo(t, e, 1), e = ml(), t !== null && (Ht(t, 1, e), _l(t, e));
					break;
				}
			}
			t = t.return;
		}
	}
	function Bl(e, t, n) {
		var r = e.pingCache;
		r !== null && r.delete(t), t = ml(), e.pingedLanes |= e.suspendedLanes & n, Wc === e && (Gc & n) === n && (Jc === 4 || Jc === 3 && (Gc & 130023424) === Gc && 500 > I() - tl ? Dl(e, 0) : Qc |= n), _l(e, t);
	}
	function Vl(e, t) {
		t === 0 && (e.mode & 1 ? (t = Pt, Pt <<= 1, !(Pt & 130023424) && (Pt = 4194304)) : t = 1);
		var n = ml();
		e = to(e, t), e !== null && (Ht(e, t, n), _l(e, n));
	}
	function Hl(e) {
		var t = e.memoizedState, n = 0;
		t !== null && (n = t.retryLane), Vl(e, n);
	}
	function Ul(e, t) {
		var n = 0;
		switch (e.tag) {
			case 13:
				var r = e.stateNode, a = e.memoizedState;
				a !== null && (n = a.retryLane);
				break;
			case 19:
				r = e.stateNode;
				break;
			default: throw Error(i(314));
		}
		r !== null && r.delete(t), Vl(e, n);
	}
	var Wl = function(e, t, n) {
		if (e !== null) {
			if (e.memoizedProps !== t.pendingProps || Xi.current) Fs = !0;
			else {
				if ((e.lanes & n) === 0 && !(t.flags & 128)) return Fs = !1, ic(e, t, n);
				Fs = !!(e.flags & 131072);
			}
		} else Fs = !1, U && t.flags & 1048576 && xa(t, ma, t.index);
		switch (t.lanes = 0, t.tag) {
			case 2:
				var r = t.type;
				nc(e, t), e = t.pendingProps;
				var a = Qi(t, Yi.current);
				Xa(t, n), a = Mo(null, t, r, e, a, n);
				var o = No();
				return t.flags |= 1, typeof a == "object" && a && typeof a.render == "function" && a.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, $i(r) ? (o = !0, ra(t)) : o = !1, t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null, ro(t), a.updater = bs, t.stateNode = a, a._reactInternals = t, ws(t, r, e, n), t = Ws(null, t, r, !0, o, n)) : (t.tag = 0, U && o && Sa(t), Is(null, t, a, n), t = t.child), t;
			case 16:
				r = t.elementType;
				a: {
					switch (nc(e, t), e = t.pendingProps, a = r._init, r = a(r._payload), t.type = r, a = t.tag = Yl(r), e = vs(r, e), a) {
						case 0:
							t = Hs(null, t, r, e, n);
							break a;
						case 1:
							t = Us(null, t, r, e, n);
							break a;
						case 11:
							t = Ls(null, t, r, e, n);
							break a;
						case 14:
							t = Rs(null, t, r, vs(r.type, e), n);
							break a;
					}
					throw Error(i(306, r, ""));
				}
				return t;
			case 0: return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : vs(r, a), Hs(e, t, r, a, n);
			case 1: return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : vs(r, a), Us(e, t, r, a, n);
			case 3:
				a: {
					if (Gs(t), e === null) throw Error(i(387));
					r = t.pendingProps, o = t.memoizedState, a = o.element, io(e, t), lo(t, r, null, n);
					var s = t.memoizedState;
					if (r = s.element, o.isDehydrated) {
						if (o = {
							element: r,
							isDehydrated: !1,
							cache: s.cache,
							pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
							transitions: s.transitions
						}, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
							a = Ts(Error(i(423)), t), t = Ks(e, t, r, n, a);
							break a;
						}
						if (r !== a) {
							a = Ts(Error(i(424)), t), t = Ks(e, t, r, n, a);
							break a;
						}
						for (Ta = Mi(t.stateNode.containerInfo.firstChild), wa = t, U = !0, Ea = null, n = Ha(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling;
					} else {
						if (Pa(), r === a) {
							t = rc(e, t, n);
							break a;
						}
						Is(e, t, r, n);
					}
					t = t.child;
				}
				return t;
			case 5: return yo(t), e === null && Aa(t), r = t.type, a = t.pendingProps, o = e === null ? null : e.memoizedProps, s = a.children, Ti(r, a) ? s = null : o !== null && Ti(r, o) && (t.flags |= 32), Vs(e, t), Is(e, t, s, n), t.child;
			case 6: return e === null && Aa(t), null;
			case 13: return Ys(e, t, n);
			case 4: return _o(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Va(t, null, r, n) : Is(e, t, r, n), t.child;
			case 11: return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : vs(r, a), Ls(e, t, r, a, n);
			case 7: return Is(e, t, t.pendingProps, n), t.child;
			case 8: return Is(e, t, t.pendingProps.children, n), t.child;
			case 12: return Is(e, t, t.pendingProps.children, n), t.child;
			case 10:
				a: {
					if (r = t.type._context, a = t.pendingProps, o = t.memoizedProps, s = a.value, H(Ua, r._currentValue), r._currentValue = s, o !== null) {
						if (jr(o.value, s)) {
							if (o.children === a.children && !Xi.current) {
								t = rc(e, t, n);
								break a;
							}
						} else for (o = t.child, o !== null && (o.return = t); o !== null;) {
							var c = o.dependencies;
							if (c !== null) {
								s = o.child;
								for (var l = c.firstContext; l !== null;) {
									if (l.context === r) {
										if (o.tag === 1) {
											l = ao(-1, n & -n), l.tag = 2;
											var u = o.updateQueue;
											if (u !== null) {
												u = u.shared;
												var d = u.pending;
												d === null ? l.next = l : (l.next = d.next, d.next = l), u.pending = l;
											}
										}
										o.lanes |= n, l = o.alternate, l !== null && (l.lanes |= n), Ya(o.return, n, t), c.lanes |= n;
										break;
									}
									l = l.next;
								}
							} else if (o.tag === 10) s = o.type === t.type ? null : o.child;
							else if (o.tag === 18) {
								if (s = o.return, s === null) throw Error(i(341));
								s.lanes |= n, c = s.alternate, c !== null && (c.lanes |= n), Ya(s, n, t), s = o.sibling;
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
					}
					Is(e, t, a.children, n), t = t.child;
				}
				return t;
			case 9: return a = t.type, r = t.pendingProps.children, Xa(t, n), a = Za(a), r = r(a), t.flags |= 1, Is(e, t, r, n), t.child;
			case 14: return r = t.type, a = vs(r, t.pendingProps), a = vs(r.type, a), Rs(e, t, r, a, n);
			case 15: return zs(e, t, t.type, t.pendingProps, n);
			case 17: return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : vs(r, a), nc(e, t), t.tag = 1, $i(r) ? (e = !0, ra(t)) : e = !1, Xa(t, n), Ss(t, r, a), ws(t, r, a, n), Ws(null, t, r, !0, e, n);
			case 19: return tc(e, t, n);
			case 22: return Bs(e, t, n);
		}
		throw Error(i(156, t.tag));
	};
	function Gl(e, t) {
		return gt(e, t);
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
		if (typeof e == "function") return +!!Jl(e);
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
	function Zl(e, t, n, r, a, o) {
		var s = 2;
		if (r = e, typeof e == "function") Jl(e) && (s = 1);
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
						s = 16, r = null;
						break a;
				}
				throw Error(i(130, e == null ? e : typeof e, ""));
		}
		return t = ql(s, n, t, a), t.elementType = e, t.type = r, t.lanes = o, t;
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
		this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Vt(0), this.expirationTimes = Vt(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Vt(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null;
	}
	function ru(e, t, n, r, i, a, o, s, c) {
		return e = new nu(e, t, n, s, c), t === 1 ? (t = 1, !0 === a && (t |= 8)) : t = 0, a = ql(3, null, null, t), e.current = a, a.stateNode = e, a.memoizedState = {
			element: r,
			isDehydrated: n,
			cache: null,
			transitions: null,
			pendingSuspenseBoundaries: null
		}, ro(a), e;
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
			if (ut(e) !== e || e.tag !== 1) throw Error(i(170));
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
			throw Error(i(171));
		}
		if (e.tag === 1) {
			var n = e.type;
			if ($i(n)) return na(e, n, t);
		}
		return t;
	}
	function ou(e, t, n, r, i, a, o, s, c) {
		return e = ru(n, r, !0, e, i, a, o, s, c), e.context = au(null), n = e.current, r = ml(), i = hl(n), a = ao(r, i), a.callback = t ?? null, oo(n, a, i), e.current.lanes = i, Ht(e, i, r), _l(e, r), e;
	}
	function su(e, t, n, r) {
		var i = t.current, a = ml(), o = hl(i);
		return n = au(n), t.context === null ? t.context = n : t.pendingContext = n, t = ao(a, o), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = oo(i, t, o), e !== null && (gl(e, i, o, a), so(e, i, o)), o;
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
		if (t === null) throw Error(i(409));
		su(e, t, null, null);
	}, mu.prototype.unmount = pu.prototype.unmount = function() {
		var e = this._internalRoot;
		if (e !== null) {
			this._internalRoot = null;
			var t = e.containerInfo;
			Tl(function() {
				su(null, e, null, null);
			}), t[Li] = null;
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
			for (var n = 0; n < R.length && t !== 0 && t < R[n].priority; n++);
			R.splice(n, 0, e), n === 0 && ln(e);
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
			return e._reactRootContainer = o, e[Li] = o.current, di(e.nodeType === 8 ? e.parentNode : e), Tl(), o;
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
		return e._reactRootContainer = c, e[Li] = c.current, di(e.nodeType === 8 ? e.parentNode : e), Tl(function() {
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
					n !== 0 && (Wt(t, n | 1), _l(t, I()), !(X & 6) && (nl = I() + 500, ua()));
				}
				break;
			case 13: Tl(function() {
				var t = to(e, 1);
				t !== null && gl(t, e, 1, ml());
			}), uu(e, 1);
		}
	}, qt = function(e) {
		if (e.tag === 13) {
			var t = to(e, 134217728);
			t !== null && gl(t, e, 134217728, ml()), uu(e, 134217728);
		}
	}, Jt = function(e) {
		if (e.tag === 13) {
			var t = hl(e), n = to(e, t);
			n !== null && gl(n, e, t, ml()), uu(e, t);
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
	}, Ue = function(e, t, n) {
		switch (t) {
			case "input":
				if (xe(e, n), t = n.name, n.type === "radio" && t != null) {
					for (n = e; n.parentNode;) n = n.parentNode;
					for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + "][type=\"radio\"]"), t = 0; t < n.length; t++) {
						var r = n[t];
						if (r !== e && r.form === e.form) {
							var a = Wi(r);
							if (!a) throw Error(i(90));
							ge(r), xe(r, a);
						}
					}
				}
				break;
			case "textarea":
				Oe(e, n);
				break;
			case "select": t = n.value, t != null && Te(e, !!n.multiple, t, !1);
		}
	}, Ye = wl, Xe = Tl;
	var bu = {
		usingClientEntryPoint: !1,
		Events: [
			Hi,
			Ui,
			Wi,
			qe,
			Je,
			wl
		]
	}, xu = {
		findFiberByHostInstance: Vi,
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
			return e = mt(e), e === null ? null : e.stateNode;
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
		if (!hu(t)) throw Error(i(200));
		return iu(e, t, null, n);
	}, e.createRoot = function(e, t) {
		if (!hu(e)) throw Error(i(299));
		var n = !1, r = "", a = fu;
		return t != null && (!0 === t.unstable_strictMode && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (a = t.onRecoverableError)), t = ru(e, 1, !1, null, null, n, !1, r, a), e[Li] = t.current, di(e.nodeType === 8 ? e.parentNode : e), new pu(t);
	}, e.findDOMNode = function(e) {
		if (e == null) return null;
		if (e.nodeType === 1) return e;
		var t = e._reactInternals;
		if (t === void 0) throw typeof e.render == "function" ? Error(i(188)) : (e = Object.keys(e).join(","), Error(i(268, e)));
		return e = mt(t), e = e === null ? null : e.stateNode, e;
	}, e.flushSync = function(e) {
		return Tl(e);
	}, e.hydrate = function(e, t, n) {
		if (!gu(t)) throw Error(i(200));
		return yu(null, e, t, !0, n);
	}, e.hydrateRoot = function(e, t, n) {
		if (!hu(e)) throw Error(i(405));
		var r = n != null && n.hydratedSources || null, a = !1, o = "", s = fu;
		if (n != null && (!0 === n.unstable_strictMode && (a = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = ou(t, null, e, 1, n ?? null, a, !1, o, s), e[Li] = t.current, di(e), r) for (e = 0; e < r.length; e++) n = r[e], a = n._getVersion, a = a(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, a] : t.mutableSourceEagerHydrationData.push(n, a);
		return new mu(t);
	}, e.render = function(e, t, n) {
		if (!gu(t)) throw Error(i(200));
		return yu(null, e, t, !1, n);
	}, e.unmountComponentAtNode = function(e) {
		if (!gu(e)) throw Error(i(40));
		return e._reactRootContainer ? (Tl(function() {
			yu(null, null, e, !1, function() {
				e._reactRootContainer = null, e[Li] = null;
			});
		}), !0) : !1;
	}, e.unstable_batchedUpdates = wl, e.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
		if (!gu(n)) throw Error(i(200));
		if (e == null || e._reactInternals === void 0) throw Error(i(38));
		return yu(e, t, n, !1, r);
	}, e.version = "18.3.1-next-f1338f8080-20240426";
})), s = /* @__PURE__ */ t(((e, t) => {
	function n() {
		if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE == "function") try {
			__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
		} catch (e) {
			console.error(e);
		}
	}
	n(), t.exports = o();
})), c = /* @__PURE__ */ t(((e) => {
	var t = s();
	e.createRoot = t.createRoot, e.hydrateRoot = t.hydrateRoot;
})), l = function(e, t) {
	return l = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
		e.__proto__ = t;
	} || function(e, t) {
		for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
	}, l(e, t);
};
function u(e, t) {
	if (typeof t != "function" && t !== null) throw TypeError("Class extends value " + String(t) + " is not a constructor or null");
	l(e, t);
	function n() {
		this.constructor = e;
	}
	e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
}
var d = function() {
	return d = Object.assign || function(e) {
		for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
		return e;
	}, d.apply(this, arguments);
};
function f(e, t) {
	var n = {};
	for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
	return n;
}
function p(e, t, n, r) {
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
function m(e, t) {
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
					if (a = n.trys, !(a = a.length > 0 && a[a.length - 1]) && (s[0] === 6 || s[0] === 2)) {
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
function h(e, t) {
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
function g() {
	for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
	for (var r = Array(e), i = 0, t = 0; t < n; t++) for (var a = arguments[t], o = 0, s = a.length; o < s; o++, i++) r[i] = a[o];
	return r;
}
function _(e, t, n) {
	if (n || arguments.length === 2) for (var r = 0, i = t.length, a; r < i; r++) (a || !(r in t)) && (a ||= Array.prototype.slice.call(t, 0, r), a[r] = t[r]);
	return e.concat(a || Array.prototype.slice.call(t));
}
// node_modules/.pnpm/@formatjs+fast-memoize@2.2.3/node_modules/@formatjs/fast-memoize/lib/index.js
function v(e, t) {
	var n = t && t.cache ? t.cache : O, r = t && t.serializer ? t.serializer : E;
	return (t && t.strategy ? t.strategy : C)(e, {
		cache: n,
		serializer: r
	});
}
function y(e) {
	return e == null || typeof e == "number" || typeof e == "boolean";
}
function b(e, t, n, r) {
	var i = y(r) ? r : n(r), a = t.get(i);
	return a === void 0 && (a = e.call(this, r), t.set(i, a)), a;
}
function x(e, t, n) {
	var r = Array.prototype.slice.call(arguments, 3), i = n(r), a = t.get(i);
	return a === void 0 && (a = e.apply(this, r), t.set(i, a)), a;
}
function S(e, t, n, r, i) {
	return n.bind(t, e, r, i);
}
function C(e, t) {
	var n = e.length === 1 ? b : x;
	return S(e, this, n, t.cache.create(), t.serializer);
}
function w(e, t) {
	return S(e, this, x, t.cache.create(), t.serializer);
}
function T(e, t) {
	return S(e, this, b, t.cache.create(), t.serializer);
}
var E = function() {
	return JSON.stringify(arguments);
};
function D() {
	this.cache = Object.create(null);
}
D.prototype.get = function(e) {
	return this.cache[e];
}, D.prototype.set = function(e, t) {
	this.cache[e] = t;
};
var O = { create: function() {
	return new D();
} }, k = {
	variadic: w,
	monadic: T
};
// node_modules/.pnpm/@formatjs+ecma402-abstract@2.2.4/node_modules/@formatjs/ecma402-abstract/lib/utils.js
function ee(e, t, n) {
	if (n === void 0 && (n = Error), !e) throw new n(t);
}
v(function() {
	var e, t = [...arguments];
	return new ((e = Intl.NumberFormat).bind.apply(e, _([void 0], t, !1)))();
}, { strategy: k.variadic }), v(function() {
	var e, t = [...arguments];
	return new ((e = Intl.DateTimeFormat).bind.apply(e, _([void 0], t, !1)))();
}, { strategy: k.variadic }), v(function() {
	var e, t = [...arguments];
	return new ((e = Intl.PluralRules).bind.apply(e, _([void 0], t, !1)))();
}, { strategy: k.variadic }), v(function() {
	var e, t = [...arguments];
	return new ((e = Intl.Locale).bind.apply(e, _([void 0], t, !1)))();
}, { strategy: k.variadic }), v(function() {
	var e, t = [...arguments];
	return new ((e = Intl.ListFormat).bind.apply(e, _([void 0], t, !1)))();
}, { strategy: k.variadic });
// node_modules/.pnpm/@formatjs+icu-messageformat-parser@2.9.4/node_modules/@formatjs/icu-messageformat-parser/lib/error.js
var A;
(function(e) {
	e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})(A ||= {});
// node_modules/.pnpm/@formatjs+icu-messageformat-parser@2.9.4/node_modules/@formatjs/icu-messageformat-parser/lib/types.js
var j;
(function(e) {
	e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag";
})(j ||= {});
var te;
(function(e) {
	e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime";
})(te ||= {});
function M(e) {
	return e.type === j.literal;
}
function N(e) {
	return e.type === j.argument;
}
function ne(e) {
	return e.type === j.number;
}
function re(e) {
	return e.type === j.date;
}
function ie(e) {
	return e.type === j.time;
}
function P(e) {
	return e.type === j.select;
}
function ae(e) {
	return e.type === j.plural;
}
function oe(e) {
	return e.type === j.pound;
}
function se(e) {
	return e.type === j.tag;
}
function ce(e) {
	return !!(e && typeof e == "object" && e.type === te.number);
}
function le(e) {
	return !!(e && typeof e == "object" && e.type === te.dateTime);
}
// node_modules/.pnpm/@formatjs+icu-messageformat-parser@2.9.4/node_modules/@formatjs/icu-messageformat-parser/lib/regex.generated.js
var ue = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, de = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function fe(e) {
	var t = {};
	return e.replace(de, function(e) {
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
// node_modules/.pnpm/@formatjs+icu-skeleton-parser@1.8.8/node_modules/@formatjs/icu-skeleton-parser/lib/regex.generated.js
var pe = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
// node_modules/.pnpm/@formatjs+icu-skeleton-parser@1.8.8/node_modules/@formatjs/icu-skeleton-parser/lib/number.js
function me(e) {
	if (e.length === 0) throw Error("Number skeleton cannot be empty");
	for (var t = e.split(pe).filter(function(e) {
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
function he(e) {
	return e.replace(/^(.*?)-/, "");
}
var ge = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, _e = /^(@+)?(\+|#+)?[rs]?$/g, ve = /(\*)(0+)|(#+)(0+)|(0+)/g, ye = /^(0+)$/;
function be(e) {
	var t = {};
	return e[e.length - 1] === "r" ? t.roundingPriority = "morePrecision" : e[e.length - 1] === "s" && (t.roundingPriority = "lessPrecision"), e.replace(_e, function(e, n, r) {
		return typeof r == "string" ? r === "+" ? t.minimumSignificantDigits = n.length : n[0] === "#" ? t.maximumSignificantDigits = n.length : (t.minimumSignificantDigits = n.length, t.maximumSignificantDigits = n.length + (typeof r == "string" ? r.length : 0)) : (t.minimumSignificantDigits = n.length, t.maximumSignificantDigits = n.length), "";
	}), t;
}
function xe(e) {
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
function Se(e) {
	var t;
	if (e[0] === "E" && e[1] === "E" ? (t = { notation: "engineering" }, e = e.slice(2)) : e[0] === "E" && (t = { notation: "scientific" }, e = e.slice(1)), t) {
		var n = e.slice(0, 2);
		if (n === "+!" ? (t.signDisplay = "always", e = e.slice(2)) : n === "+?" && (t.signDisplay = "exceptZero", e = e.slice(2)), !ye.test(e)) throw Error("Malformed concise eng/scientific notation");
		t.minimumIntegerDigits = e.length;
	}
	return t;
}
function Ce(e) {
	return xe(e) || {};
}
function we(e) {
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
				t.style = "unit", t.unit = he(i.options[0]);
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
				t = d(d(d({}, t), { notation: "scientific" }), i.options.reduce(function(e, t) {
					return d(d({}, e), Ce(t));
				}, {}));
				continue;
			case "engineering":
				t = d(d(d({}, t), { notation: "engineering" }), i.options.reduce(function(e, t) {
					return d(d({}, e), Ce(t));
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
				i.options[0].replace(ve, function(e, n, r, i, a, o) {
					if (n) t.minimumIntegerDigits = r.length;
					else if (i && a) throw Error("We currently do not support maximum integer digits");
					else if (o) throw Error("We currently do not support exact integer digits");
					return "";
				});
				continue;
		}
		if (ye.test(i.stem)) t.minimumIntegerDigits = i.stem.length;
		else if (ge.test(i.stem)) {
			if (i.options.length > 1) throw RangeError("Fraction-precision stems only accept a single optional option");
			i.stem.replace(ge, function(e, n, r, i, a, o) {
				return r === "*" ? t.minimumFractionDigits = n.length : i && i[0] === "#" ? t.maximumFractionDigits = i.length : a && o ? (t.minimumFractionDigits = a.length, t.maximumFractionDigits = a.length + o.length) : (t.minimumFractionDigits = n.length, t.maximumFractionDigits = n.length), "";
			});
			var a = i.options[0];
			a === "w" ? t = d(d({}, t), { trailingZeroDisplay: "stripIfInteger" }) : a && (t = d(d({}, t), be(a)));
		} else if (_e.test(i.stem)) t = d(d({}, t), be(i.stem));
		else {
			var o = xe(i.stem);
			o && (t = d(d({}, t), o));
			var s = Se(i.stem);
			s && (t = d(d({}, t), s));
		}
	}
	return t;
}
// node_modules/.pnpm/@formatjs+icu-messageformat-parser@2.9.4/node_modules/@formatjs/icu-messageformat-parser/lib/time-data.generated.js
var Te = {
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
// node_modules/.pnpm/@formatjs+icu-messageformat-parser@2.9.4/node_modules/@formatjs/icu-messageformat-parser/lib/date-time-pattern-generator.js
function Ee(e, t) {
	for (var n = "", r = 0; r < e.length; r++) {
		var i = e.charAt(r);
		if (i === "j") {
			for (var a = 0; r + 1 < e.length && e.charAt(r + 1) === i;) a++, r++;
			var o = 1 + (a & 1), s = a < 2 ? 1 : 3 + (a >> 1), c = "a", l = De(t);
			for ((l == "H" || l == "k") && (s = 0); s-- > 0;) n += c;
			for (; o-- > 0;) n = l + n;
		} else n += i === "J" ? "H" : i;
	}
	return n;
}
function De(e) {
	var t = e.hourCycle;
	if (t === void 0 && e.hourCycles && e.hourCycles.length && (t = e.hourCycles[0]), t) switch (t) {
		case "h24": return "k";
		case "h23": return "H";
		case "h12": return "h";
		case "h11": return "K";
		default: throw Error("Invalid hourCycle");
	}
	var n = e.language, r;
	return n !== "root" && (r = e.maximize().region), (Te[r || ""] || Te[n || ""] || Te[`${n}-001`] || Te["001"])[0];
}
// node_modules/.pnpm/@formatjs+icu-messageformat-parser@2.9.4/node_modules/@formatjs/icu-messageformat-parser/lib/parser.js
var Oe = RegExp(`^${ue.source}*`), ke = RegExp(`${ue.source}*\$`);
function F(e, t) {
	return {
		start: e,
		end: t
	};
}
var Ae = !!String.prototype.startsWith && "_a".startsWith("a", 1), je = !!String.fromCodePoint, Me = !!Object.fromEntries, Ne = !!String.prototype.codePointAt, Pe = !!String.prototype.trimStart, Fe = !!String.prototype.trimEnd, Ie = Number.isSafeInteger ? Number.isSafeInteger : function(e) {
	return typeof e == "number" && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991;
}, Le = !0;
try {
	Le = We("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu").exec("a")?.[0] === "a";
} catch {
	Le = !1;
}
var Re = Ae ? function(e, t, n) {
	return e.startsWith(t, n);
} : function(e, t, n) {
	return e.slice(n, n + t.length) === t;
}, ze = je ? String.fromCodePoint : function() {
	for (var e = [...arguments], t = "", n = e.length, r = 0, i; n > r;) {
		if (i = e[r++], i > 1114111) throw RangeError(i + " is not a valid code point");
		t += i < 65536 ? String.fromCharCode(i) : String.fromCharCode(((i -= 65536) >> 10) + 55296, i % 1024 + 56320);
	}
	return t;
}, Be = Me ? Object.fromEntries : function(e) {
	for (var t = {}, n = 0, r = e; n < r.length; n++) {
		var i = r[n], a = i[0];
		t[a] = i[1];
	}
	return t;
}, Ve = Ne ? function(e, t) {
	return e.codePointAt(t);
} : function(e, t) {
	var n = e.length;
	if (!(t < 0 || t >= n)) {
		var r = e.charCodeAt(t), i;
		return r < 55296 || r > 56319 || t + 1 === n || (i = e.charCodeAt(t + 1)) < 56320 || i > 57343 ? r : (r - 55296 << 10) + (i - 56320) + 65536;
	}
}, He = Pe ? function(e) {
	return e.trimStart();
} : function(e) {
	return e.replace(Oe, "");
}, Ue = Fe ? function(e) {
	return e.trimEnd();
} : function(e) {
	return e.replace(ke, "");
};
function We(e, t) {
	return new RegExp(e, t);
}
var Ge;
if (Le) {
	var Ke = We("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
	Ge = function(e, t) {
		return Ke.lastIndex = t, Ke.exec(e)[1] ?? "";
	};
} else Ge = function(e, t) {
	for (var n = [];;) {
		var r = Ve(e, t);
		if (r === void 0 || Ze(r) || Qe(r)) break;
		n.push(r), t += r >= 65536 ? 2 : 1;
	}
	return ze.apply(void 0, n);
};
var qe = function() {
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
					type: j.pound,
					location: F(o, this.clonePosition())
				});
			} else if (i === 60 && !this.ignoreTag && this.peek() === 47) {
				if (n) break;
				return this.error(A.UNMATCHED_CLOSING_TAG, F(this.clonePosition(), this.clonePosition()));
			} else if (i === 60 && !this.ignoreTag && Je(this.peek() || 0)) {
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
				type: j.literal,
				value: `<${r}/>`,
				location: F(n, this.clonePosition())
			},
			err: null
		};
		if (this.bumpIf(">")) {
			var i = this.parseMessage(e + 1, t, !0);
			if (i.err) return i;
			var a = i.val, o = this.clonePosition();
			if (this.bumpIf("</")) {
				if (this.isEOF() || !Je(this.char())) return this.error(A.INVALID_TAG, F(o, this.clonePosition()));
				var s = this.clonePosition();
				return r === this.parseTagName() ? (this.bumpSpace(), this.bumpIf(">") ? {
					val: {
						type: j.tag,
						value: r,
						children: a,
						location: F(n, this.clonePosition())
					},
					err: null
				} : this.error(A.INVALID_TAG, F(o, this.clonePosition()))) : this.error(A.UNMATCHED_CLOSING_TAG, F(s, this.clonePosition()));
			}
			return this.error(A.UNCLOSED_TAG, F(n, this.clonePosition()));
		}
		return this.error(A.INVALID_TAG, F(n, this.clonePosition()));
	}, e.prototype.parseTagName = function() {
		var e = this.offset();
		for (this.bump(); !this.isEOF() && Xe(this.char());) this.bump();
		return this.message.slice(e, this.offset());
	}, e.prototype.parseLiteral = function(e, t) {
		for (var n = this.clonePosition(), r = "";;) {
			var i = this.tryParseQuote(t);
			if (i) r += i;
			else {
				var a = this.tryParseUnquoted(e, t);
				if (a) r += a;
				else {
					var o = this.tryParseLeftAngleBracket();
					if (o) r += o;
					else break;
				}
			}
		}
		var s = F(n, this.clonePosition());
		return {
			val: {
				type: j.literal,
				value: r,
				location: s
			},
			err: null
		};
	}, e.prototype.tryParseLeftAngleBracket = function() {
		return !this.isEOF() && this.char() === 60 && (this.ignoreTag || !Ye(this.peek() || 0)) ? (this.bump(), "<") : null;
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
			if (n === 39) {
				if (this.peek() === 39) t.push(39), this.bump();
				else {
					this.bump();
					break;
				}
			} else t.push(n);
			this.bump();
		}
		return ze.apply(void 0, t);
	}, e.prototype.tryParseUnquoted = function(e, t) {
		if (this.isEOF()) return null;
		var n = this.char();
		return n === 60 || n === 123 || n === 35 && (t === "plural" || t === "selectordinal") || n === 125 && e > 0 ? null : (this.bump(), ze(n));
	}, e.prototype.parseArgument = function(e, t) {
		var n = this.clonePosition();
		if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(A.EXPECT_ARGUMENT_CLOSING_BRACE, F(n, this.clonePosition()));
		if (this.char() === 125) return this.bump(), this.error(A.EMPTY_ARGUMENT, F(n, this.clonePosition()));
		var r = this.parseIdentifierIfPossible().value;
		if (!r) return this.error(A.MALFORMED_ARGUMENT, F(n, this.clonePosition()));
		if (this.bumpSpace(), this.isEOF()) return this.error(A.EXPECT_ARGUMENT_CLOSING_BRACE, F(n, this.clonePosition()));
		switch (this.char()) {
			case 125: return this.bump(), {
				val: {
					type: j.argument,
					value: r,
					location: F(n, this.clonePosition())
				},
				err: null
			};
			case 44: return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(A.EXPECT_ARGUMENT_CLOSING_BRACE, F(n, this.clonePosition())) : this.parseArgumentOptions(e, t, r, n);
			default: return this.error(A.MALFORMED_ARGUMENT, F(n, this.clonePosition()));
		}
	}, e.prototype.parseIdentifierIfPossible = function() {
		var e = this.clonePosition(), t = this.offset(), n = Ge(this.message, t), r = t + n.length;
		return this.bumpTo(r), {
			value: n,
			location: F(e, this.clonePosition())
		};
	}, e.prototype.parseArgumentOptions = function(e, t, n, r) {
		var i = this.clonePosition(), a = this.parseIdentifierIfPossible().value, o = this.clonePosition();
		switch (a) {
			case "": return this.error(A.EXPECT_ARGUMENT_TYPE, F(i, o));
			case "number":
			case "date":
			case "time":
				this.bumpSpace();
				var s = null;
				if (this.bumpIf(",")) {
					this.bumpSpace();
					var c = this.clonePosition(), l = this.parseSimpleArgStyleIfPossible();
					if (l.err) return l;
					var u = Ue(l.val);
					if (u.length === 0) return this.error(A.EXPECT_ARGUMENT_STYLE, F(this.clonePosition(), this.clonePosition()));
					s = {
						style: u,
						styleLocation: F(c, this.clonePosition())
					};
				}
				var f = this.tryParseArgumentClose(r);
				if (f.err) return f;
				var p = F(r, this.clonePosition());
				if (s && Re(s?.style, "::", 0)) {
					var m = He(s.style.slice(2));
					if (a === "number") {
						var l = this.parseNumberSkeletonFromString(m, s.styleLocation);
						return l.err ? l : {
							val: {
								type: j.number,
								value: n,
								location: p,
								style: l.val
							},
							err: null
						};
					}
					if (m.length === 0) return this.error(A.EXPECT_DATE_TIME_SKELETON, p);
					var h = m;
					this.locale && (h = Ee(m, this.locale));
					var u = {
						type: te.dateTime,
						pattern: h,
						location: s.styleLocation,
						parsedOptions: this.shouldParseSkeletons ? fe(h) : {}
					};
					return {
						val: {
							type: a === "date" ? j.date : j.time,
							value: n,
							location: p,
							style: u
						},
						err: null
					};
				}
				return {
					val: {
						type: a === "number" ? j.number : a === "date" ? j.date : j.time,
						value: n,
						location: p,
						style: s?.style ?? null
					},
					err: null
				};
			case "plural":
			case "selectordinal":
			case "select":
				var g = this.clonePosition();
				if (this.bumpSpace(), !this.bumpIf(",")) return this.error(A.EXPECT_SELECT_ARGUMENT_OPTIONS, F(g, d({}, g)));
				this.bumpSpace();
				var _ = this.parseIdentifierIfPossible(), v = 0;
				if (a !== "select" && _.value === "offset") {
					if (!this.bumpIf(":")) return this.error(A.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, F(this.clonePosition(), this.clonePosition()));
					this.bumpSpace();
					var l = this.tryParseDecimalInteger(A.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, A.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
					if (l.err) return l;
					this.bumpSpace(), _ = this.parseIdentifierIfPossible(), v = l.val;
				}
				var y = this.tryParsePluralOrSelectOptions(e, a, t, _);
				if (y.err) return y;
				var f = this.tryParseArgumentClose(r);
				if (f.err) return f;
				var b = F(r, this.clonePosition());
				return a === "select" ? {
					val: {
						type: j.select,
						value: n,
						options: Be(y.val),
						location: b
					},
					err: null
				} : {
					val: {
						type: j.plural,
						value: n,
						options: Be(y.val),
						offset: v,
						pluralType: a === "plural" ? "cardinal" : "ordinal",
						location: b
					},
					err: null
				};
			default: return this.error(A.INVALID_ARGUMENT_TYPE, F(i, o));
		}
	}, e.prototype.tryParseArgumentClose = function(e) {
		return this.isEOF() || this.char() !== 125 ? this.error(A.EXPECT_ARGUMENT_CLOSING_BRACE, F(e, this.clonePosition())) : (this.bump(), {
			val: !0,
			err: null
		});
	}, e.prototype.parseSimpleArgStyleIfPossible = function() {
		for (var e = 0, t = this.clonePosition(); !this.isEOF();) switch (this.char()) {
			case 39:
				this.bump();
				var n = this.clonePosition();
				if (!this.bumpUntil("'")) return this.error(A.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, F(n, this.clonePosition()));
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
			default: this.bump();
		}
		return {
			val: this.message.slice(t.offset, this.offset()),
			err: null
		};
	}, e.prototype.parseNumberSkeletonFromString = function(e, t) {
		var n = [];
		try {
			n = me(e);
		} catch {
			return this.error(A.INVALID_NUMBER_SKELETON, t);
		}
		return {
			val: {
				type: te.number,
				tokens: n,
				location: t,
				parsedOptions: this.shouldParseSkeletons ? we(n) : {}
			},
			err: null
		};
	}, e.prototype.tryParsePluralOrSelectOptions = function(e, t, n, r) {
		for (var i, a = !1, o = [], s = /* @__PURE__ */ new Set(), c = r.value, l = r.location;;) {
			if (c.length === 0) {
				var u = this.clonePosition();
				if (t !== "select" && this.bumpIf("=")) {
					var d = this.tryParseDecimalInteger(A.EXPECT_PLURAL_ARGUMENT_SELECTOR, A.INVALID_PLURAL_ARGUMENT_SELECTOR);
					if (d.err) return d;
					l = F(u, this.clonePosition()), c = this.message.slice(u.offset, this.offset());
				} else break;
			}
			if (s.has(c)) return this.error(t === "select" ? A.DUPLICATE_SELECT_ARGUMENT_SELECTOR : A.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, l);
			c === "other" && (a = !0), this.bumpSpace();
			var f = this.clonePosition();
			if (!this.bumpIf("{")) return this.error(t === "select" ? A.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : A.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, F(this.clonePosition(), this.clonePosition()));
			var p = this.parseMessage(e + 1, t, n);
			if (p.err) return p;
			var m = this.tryParseArgumentClose(f);
			if (m.err) return m;
			o.push([c, {
				value: p.val,
				location: F(f, this.clonePosition())
			}]), s.add(c), this.bumpSpace(), i = this.parseIdentifierIfPossible(), c = i.value, l = i.location;
		}
		return o.length === 0 ? this.error(t === "select" ? A.EXPECT_SELECT_ARGUMENT_SELECTOR : A.EXPECT_PLURAL_ARGUMENT_SELECTOR, F(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !a ? this.error(A.MISSING_OTHER_CLAUSE, F(this.clonePosition(), this.clonePosition())) : {
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
		var s = F(r, this.clonePosition());
		return i ? (a *= n, Ie(a) ? {
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
		var t = Ve(this.message, e);
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
		if (Re(this.message, e, this.offset())) {
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
		for (; !this.isEOF() && Ze(this.char());) this.bump();
	}, e.prototype.peek = function() {
		if (this.isEOF()) return null;
		var e = this.char(), t = this.offset();
		return this.message.charCodeAt(t + (e >= 65536 ? 2 : 1)) ?? null;
	}, e;
}();
function Je(e) {
	return e >= 97 && e <= 122 || e >= 65 && e <= 90;
}
function Ye(e) {
	return Je(e) || e === 47;
}
function Xe(e) {
	return e === 45 || e === 46 || e >= 48 && e <= 57 || e === 95 || e >= 97 && e <= 122 || e >= 65 && e <= 90 || e == 183 || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039;
}
function Ze(e) {
	return e >= 9 && e <= 13 || e === 32 || e === 133 || e >= 8206 && e <= 8207 || e === 8232 || e === 8233;
}
function Qe(e) {
	return e >= 33 && e <= 35 || e === 36 || e >= 37 && e <= 39 || e === 40 || e === 41 || e === 42 || e === 43 || e === 44 || e === 45 || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || e === 91 || e === 92 || e === 93 || e === 94 || e === 96 || e === 123 || e === 124 || e === 125 || e === 126 || e === 161 || e >= 162 && e <= 165 || e === 166 || e === 167 || e === 169 || e === 171 || e === 172 || e === 174 || e === 176 || e === 177 || e === 182 || e === 187 || e === 191 || e === 215 || e === 247 || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || e === 8216 || e === 8217 || e === 8218 || e >= 8219 && e <= 8220 || e === 8221 || e === 8222 || e === 8223 || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || e === 8249 || e === 8250 || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || e === 8260 || e === 8261 || e === 8262 || e >= 8263 && e <= 8273 || e === 8274 || e === 8275 || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || e === 8608 || e >= 8609 && e <= 8610 || e === 8611 || e >= 8612 && e <= 8613 || e === 8614 || e >= 8615 && e <= 8621 || e === 8622 || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || e === 8658 || e === 8659 || e === 8660 || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || e === 8968 || e === 8969 || e === 8970 || e === 8971 || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || e === 9001 || e === 9002 || e >= 9003 && e <= 9083 || e === 9084 || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || e === 9655 || e >= 9656 && e <= 9664 || e === 9665 || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || e === 9839 || e >= 9840 && e <= 10087 || e === 10088 || e === 10089 || e === 10090 || e === 10091 || e === 10092 || e === 10093 || e === 10094 || e === 10095 || e === 10096 || e === 10097 || e === 10098 || e === 10099 || e === 10100 || e === 10101 || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || e === 10181 || e === 10182 || e >= 10183 && e <= 10213 || e === 10214 || e === 10215 || e === 10216 || e === 10217 || e === 10218 || e === 10219 || e === 10220 || e === 10221 || e === 10222 || e === 10223 || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || e === 10627 || e === 10628 || e === 10629 || e === 10630 || e === 10631 || e === 10632 || e === 10633 || e === 10634 || e === 10635 || e === 10636 || e === 10637 || e === 10638 || e === 10639 || e === 10640 || e === 10641 || e === 10642 || e === 10643 || e === 10644 || e === 10645 || e === 10646 || e === 10647 || e === 10648 || e >= 10649 && e <= 10711 || e === 10712 || e === 10713 || e === 10714 || e === 10715 || e >= 10716 && e <= 10747 || e === 10748 || e === 10749 || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || e === 11158 || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || e === 11778 || e === 11779 || e === 11780 || e === 11781 || e >= 11782 && e <= 11784 || e === 11785 || e === 11786 || e === 11787 || e === 11788 || e === 11789 || e >= 11790 && e <= 11798 || e === 11799 || e >= 11800 && e <= 11801 || e === 11802 || e === 11803 || e === 11804 || e === 11805 || e >= 11806 && e <= 11807 || e === 11808 || e === 11809 || e === 11810 || e === 11811 || e === 11812 || e === 11813 || e === 11814 || e === 11815 || e === 11816 || e === 11817 || e >= 11818 && e <= 11822 || e === 11823 || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || e === 11840 || e === 11841 || e === 11842 || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || e === 11858 || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || e === 12296 || e === 12297 || e === 12298 || e === 12299 || e === 12300 || e === 12301 || e === 12302 || e === 12303 || e === 12304 || e === 12305 || e >= 12306 && e <= 12307 || e === 12308 || e === 12309 || e === 12310 || e === 12311 || e === 12312 || e === 12313 || e === 12314 || e === 12315 || e === 12316 || e === 12317 || e >= 12318 && e <= 12319 || e === 12320 || e === 12336 || e === 64830 || e === 64831 || e >= 65093 && e <= 65094;
}
// node_modules/.pnpm/@formatjs+icu-messageformat-parser@2.9.4/node_modules/@formatjs/icu-messageformat-parser/lib/index.js
function $e(e) {
	e.forEach(function(e) {
		if (delete e.location, P(e) || ae(e)) for (var t in e.options) delete e.options[t].location, $e(e.options[t].value);
		else ne(e) && ce(e.style) || (re(e) || ie(e)) && le(e.style) ? delete e.style.location : se(e) && $e(e.children);
	});
}
function et(e, t) {
	t === void 0 && (t = {}), t = d({
		shouldParseSkeletons: !0,
		requiresOtherClause: !0
	}, t);
	var n = new qe(e, t).parse();
	if (n.err) {
		var r = SyntaxError(A[n.err.kind]);
		throw r.location = n.err.location, r.originalMessage = n.err.message, r;
	}
	return t?.captureLocation || $e(n.val), n.val;
}
// node_modules/.pnpm/intl-messageformat@10.7.7/node_modules/intl-messageformat/lib/src/error.js
var tt;
(function(e) {
	e.MISSING_VALUE = "MISSING_VALUE", e.INVALID_VALUE = "INVALID_VALUE", e.MISSING_INTL_API = "MISSING_INTL_API";
})(tt ||= {});
var nt = function(e) {
	u(t, e);
	function t(t, n, r) {
		var i = e.call(this, t) || this;
		return i.code = n, i.originalMessage = r, i;
	}
	return t.prototype.toString = function() {
		return `[formatjs Error: ${this.code}] ${this.message}`;
	}, t;
}(Error), rt = function(e) {
	u(t, e);
	function t(t, n, r, i) {
		return e.call(this, `Invalid values for "${t}": "${n}". Options are "${Object.keys(r).join("\", \"")}"`, tt.INVALID_VALUE, i) || this;
	}
	return t;
}(nt), it = function(e) {
	u(t, e);
	function t(t, n, r) {
		return e.call(this, `Value for "${t}" must be of type ${n}`, tt.INVALID_VALUE, r) || this;
	}
	return t;
}(nt), at = function(e) {
	u(t, e);
	function t(t, n) {
		return e.call(this, `The intl string context variable "${t}" was not provided to the string "${n}"`, tt.MISSING_VALUE, n) || this;
	}
	return t;
}(nt), ot;
(function(e) {
	e[e.literal = 0] = "literal", e[e.object = 1] = "object";
})(ot ||= {});
function st(e) {
	return e.length < 2 ? e : e.reduce(function(e, t) {
		var n = e[e.length - 1];
		return !n || n.type !== ot.literal || t.type !== ot.literal ? e.push(t) : n.value += t.value, e;
	}, []);
}
function ct(e) {
	return typeof e == "function";
}
function lt(e, t, n, r, i, a, o) {
	if (e.length === 1 && M(e[0])) return [{
		type: ot.literal,
		value: e[0].value
	}];
	for (var s = [], c = 0, l = e; c < l.length; c++) {
		var u = l[c];
		if (M(u)) s.push({
			type: ot.literal,
			value: u.value
		});
		else if (oe(u)) typeof a == "number" && s.push({
			type: ot.literal,
			value: n.getNumberFormat(t).format(a)
		});
		else {
			var d = u.value;
			if (!(i && d in i)) throw new at(d, o);
			var f = i[d];
			if (N(u)) f && typeof f != "string" && typeof f != "number" || (f = typeof f == "string" || typeof f == "number" ? String(f) : ""), s.push({
				type: typeof f == "string" ? ot.literal : ot.object,
				value: f
			});
			else if (re(u)) {
				var p = typeof u.style == "string" ? r.date[u.style] : le(u.style) ? u.style.parsedOptions : void 0;
				s.push({
					type: ot.literal,
					value: n.getDateTimeFormat(t, p).format(f)
				});
			} else if (ie(u)) {
				var p = typeof u.style == "string" ? r.time[u.style] : le(u.style) ? u.style.parsedOptions : r.time.medium;
				s.push({
					type: ot.literal,
					value: n.getDateTimeFormat(t, p).format(f)
				});
			} else if (ne(u)) {
				var p = typeof u.style == "string" ? r.number[u.style] : ce(u.style) ? u.style.parsedOptions : void 0;
				p && p.scale && (f *= p.scale || 1), s.push({
					type: ot.literal,
					value: n.getNumberFormat(t, p).format(f)
				});
			} else {
				if (se(u)) {
					var m = u.children, h = u.value, g = i[h];
					if (!ct(g)) throw new it(h, "function", o);
					var _ = g(lt(m, t, n, r, i, a).map(function(e) {
						return e.value;
					}));
					Array.isArray(_) || (_ = [_]), s.push.apply(s, _.map(function(e) {
						return {
							type: typeof e == "string" ? ot.literal : ot.object,
							value: e
						};
					}));
				}
				if (P(u)) {
					var v = u.options[f] || u.options.other;
					if (!v) throw new rt(u.value, f, Object.keys(u.options), o);
					s.push.apply(s, lt(v.value, t, n, r, i));
				} else if (ae(u)) {
					var v = u.options[`=${f}`];
					if (!v) {
						if (!Intl.PluralRules) throw new nt("Intl.PluralRules is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-pluralrules\"\n", tt.MISSING_INTL_API, o);
						var y = n.getPluralRules(t, { type: u.pluralType }).select(f - (u.offset || 0));
						v = u.options[y] || u.options.other;
					}
					if (!v) throw new rt(u.value, f, Object.keys(u.options), o);
					s.push.apply(s, lt(v.value, t, n, r, i, f - (u.offset || 0)));
				}
			}
		}
	}
	return st(s);
}
// node_modules/.pnpm/intl-messageformat@10.7.7/node_modules/intl-messageformat/lib/src/core.js
function ut(e, t) {
	return t ? d(d(d({}, e || {}), t || {}), Object.keys(e).reduce(function(n, r) {
		return n[r] = d(d({}, e[r]), t[r] || {}), n;
	}, {})) : e;
}
function dt(e, t) {
	return t ? Object.keys(e).reduce(function(n, r) {
		return n[r] = ut(e[r], t[r]), n;
	}, d({}, e)) : e;
}
function ft(e) {
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
function pt(e) {
	return e === void 0 && (e = {
		number: {},
		dateTime: {},
		pluralRules: {}
	}), {
		getNumberFormat: v(function() {
			var e, t = [...arguments];
			return new ((e = Intl.NumberFormat).bind.apply(e, _([void 0], t, !1)))();
		}, {
			cache: ft(e.number),
			strategy: k.variadic
		}),
		getDateTimeFormat: v(function() {
			var e, t = [...arguments];
			return new ((e = Intl.DateTimeFormat).bind.apply(e, _([void 0], t, !1)))();
		}, {
			cache: ft(e.dateTime),
			strategy: k.variadic
		}),
		getPluralRules: v(function() {
			var e, t = [...arguments];
			return new ((e = Intl.PluralRules).bind.apply(e, _([void 0], t, !1)))();
		}, {
			cache: ft(e.pluralRules),
			strategy: k.variadic
		})
	};
}
var mt = function() {
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
				return !e.length || t.type !== ot.literal || typeof e[e.length - 1] != "string" ? e.push(t.value) : e[e.length - 1] += t.value, e;
			}, []);
			return n.length <= 1 ? n[0] || "" : n;
		}, this.formatToParts = function(e) {
			return lt(a.ast, a.locales, a.formatters, a.formats, e, void 0, a.message);
		}, this.resolvedOptions = function() {
			return { locale: a.resolvedLocale?.toString() || Intl.NumberFormat.supportedLocalesOf(a.locales)[0] };
		}, this.getAst = function() {
			return a.ast;
		}, this.locales = n, this.resolvedLocale = e.resolveLocale(n), typeof t == "string") {
			if (this.message = t, !e.__parse) throw TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
			var o = i || {};
			o.formatters;
			var s = f(o, ["formatters"]);
			this.ast = e.__parse(t, d(d({}, s), { locale: this.resolvedLocale }));
		} else this.ast = t;
		if (!Array.isArray(this.ast)) throw TypeError("A message must be provided as a String or AST.");
		this.formats = dt(e.formats, r), this.formatters = i && i.formatters || pt(this.formatterCache);
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
	}, e.__parse = et, e.formats = {
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
}(), ht;
(function(e) {
	e.FORMAT_ERROR = "FORMAT_ERROR", e.UNSUPPORTED_FORMATTER = "UNSUPPORTED_FORMATTER", e.INVALID_CONFIG = "INVALID_CONFIG", e.MISSING_DATA = "MISSING_DATA", e.MISSING_TRANSLATION = "MISSING_TRANSLATION";
})(ht ||= {});
var gt = function(e) {
	u(t, e);
	function t(n, r, i) {
		var a = this, o = i ? i instanceof Error ? i : Error(String(i)) : void 0;
		return a = e.call(this, `[@formatjs/intl Error ${n}] ${r}
${o ? `
${o.message}
${o.stack}` : ""}`) || this, a.code = n, typeof Error.captureStackTrace == "function" && Error.captureStackTrace(a, t), a;
	}
	return t;
}(Error), _t = function(e) {
	u(t, e);
	function t(t, n) {
		return e.call(this, ht.UNSUPPORTED_FORMATTER, t, n) || this;
	}
	return t;
}(gt), vt = function(e) {
	u(t, e);
	function t(t, n) {
		return e.call(this, ht.INVALID_CONFIG, t, n) || this;
	}
	return t;
}(gt), yt = function(e) {
	u(t, e);
	function t(t, n) {
		return e.call(this, ht.MISSING_DATA, t, n) || this;
	}
	return t;
}(gt), I = function(e) {
	u(t, e);
	function t(t, n, r) {
		var i = e.call(this, ht.FORMAT_ERROR, `${t}
Locale: ${n}
`, r) || this;
		return i.locale = n, i;
	}
	return t;
}(gt), bt = function(e) {
	u(t, e);
	function t(t, n, r, i) {
		var a = e.call(this, `${t}
MessageID: ${r?.id}
Default Message: ${r?.defaultMessage}
Description: ${r?.description}
`, n, i) || this;
		return a.descriptor = r, a.locale = n, a;
	}
	return t;
}(I), xt = function(e) {
	u(t, e);
	function t(t, n) {
		var r = e.call(this, ht.MISSING_TRANSLATION, `Missing message: "${t.id}" for locale "${n}", using ${t.defaultMessage ? `default message (${typeof t.defaultMessage == "string" ? t.defaultMessage : t.defaultMessage.map(function(e) {
			return e.value ?? JSON.stringify(e);
		}).join()})` : "id"} as fallback.`) || this;
		return r.descriptor = t, r;
	}
	return t;
}(gt);
// node_modules/.pnpm/@formatjs+intl@2.10.15_typescript@5.9.3/node_modules/@formatjs/intl/lib/src/utils.js
function St(e, t, n) {
	return n === void 0 && (n = {}), t.reduce(function(t, r) {
		return r in e ? t[r] = e[r] : r in n && (t[r] = n[r]), t;
	}, {});
}
var Ct = {
	formats: {},
	messages: {},
	timeZone: void 0,
	defaultLocale: "en",
	defaultFormats: {},
	fallbackOnEmptyString: !0,
	onError: function(e) {},
	onWarn: function(e) {}
};
function wt() {
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
function Tt(e) {
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
function Et(e) {
	e === void 0 && (e = wt());
	var t = Intl.RelativeTimeFormat, n = Intl.ListFormat, r = Intl.DisplayNames, i = v(function() {
		var e, t = [...arguments];
		return new ((e = Intl.DateTimeFormat).bind.apply(e, _([void 0], t, !1)))();
	}, {
		cache: Tt(e.dateTime),
		strategy: k.variadic
	}), a = v(function() {
		var e, t = [...arguments];
		return new ((e = Intl.NumberFormat).bind.apply(e, _([void 0], t, !1)))();
	}, {
		cache: Tt(e.number),
		strategy: k.variadic
	}), o = v(function() {
		var e, t = [...arguments];
		return new ((e = Intl.PluralRules).bind.apply(e, _([void 0], t, !1)))();
	}, {
		cache: Tt(e.pluralRules),
		strategy: k.variadic
	});
	return {
		getDateTimeFormat: i,
		getNumberFormat: a,
		getMessageFormat: v(function(e, t, n, r) {
			return new mt(e, t, n, d({ formatters: {
				getNumberFormat: a,
				getDateTimeFormat: i,
				getPluralRules: o
			} }, r || {}));
		}, {
			cache: Tt(e.message),
			strategy: k.variadic
		}),
		getRelativeTimeFormat: v(function() {
			var e = [...arguments];
			return new (t.bind.apply(t, _([void 0], e, !1)))();
		}, {
			cache: Tt(e.relativeTime),
			strategy: k.variadic
		}),
		getPluralRules: o,
		getListFormat: v(function() {
			var e = [...arguments];
			return new (n.bind.apply(n, _([void 0], e, !1)))();
		}, {
			cache: Tt(e.list),
			strategy: k.variadic
		}),
		getDisplayNames: v(function() {
			var e = [...arguments];
			return new (r.bind.apply(r, _([void 0], e, !1)))();
		}, {
			cache: Tt(e.displayNames),
			strategy: k.variadic
		})
	};
}
function Dt(e, t, n, r) {
	var i = e && e[t], a;
	if (i && (a = i[n]), a) return a;
	r(new _t(`No ${t} format named: ${n}`));
}
// node_modules/.pnpm/@formatjs+intl@2.10.15_typescript@5.9.3/node_modules/@formatjs/intl/lib/src/message.js
function Ot(e, t) {
	return Object.keys(e).reduce(function(n, r) {
		return n[r] = d({ timeZone: t }, e[r]), n;
	}, {});
}
function kt(e, t) {
	return Object.keys(d(d({}, e), t)).reduce(function(n, r) {
		return n[r] = d(d({}, e[r] || {}), t[r] || {}), n;
	}, {});
}
function At(e, t) {
	if (!t) return e;
	var n = mt.formats;
	return d(d(d({}, n), e), {
		date: kt(Ot(n.date, t), Ot(e.date || {}, t)),
		time: kt(Ot(n.time, t), Ot(e.time || {}, t))
	});
}
var jt = function(e, t, n, r, i) {
	var a = e.locale, o = e.formats, s = e.messages, c = e.defaultLocale, l = e.defaultFormats, u = e.fallbackOnEmptyString, f = e.onError, p = e.timeZone, m = e.defaultRichTextElements;
	n === void 0 && (n = { id: "" });
	var h = n.id, g = n.defaultMessage;
	ee(!!h, "[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue");
	var _ = String(h), v = s && Object.prototype.hasOwnProperty.call(s, _) && s[_];
	if (Array.isArray(v) && v.length === 1 && v[0].type === j.literal) return v[0].value;
	if (!r && v && typeof v == "string" && !m) return v.replace(/'\{(.*?)\}'/gi, "{$1}");
	if (r = d(d({}, m), r || {}), o = At(o, p), l = At(l, p), !v) {
		if (u === !1 && v === "") return v;
		if ((!g || a && a.toLowerCase() !== c.toLowerCase()) && f(new xt(n, a)), g) try {
			var y = t.getMessageFormat(g, c, l, i);
			return y.format(r);
		} catch (e) {
			return f(new bt(`Error formatting default message for: "${_}", rendering default message verbatim`, a, n, e)), typeof g == "string" ? g : _;
		}
		return _;
	}
	try {
		var y = t.getMessageFormat(v, a, o, d({ formatters: t }, i || {}));
		return y.format(r);
	} catch (e) {
		f(new bt(`Error formatting message: "${_}", using ${g ? "default message" : "id"} as fallback.`, a, n, e));
	}
	if (g) try {
		var y = t.getMessageFormat(g, c, l, i);
		return y.format(r);
	} catch (e) {
		f(new bt(`Error formatting the default message for: "${_}", rendering message verbatim`, a, n, e));
	}
	return typeof v == "string" ? v : typeof g == "string" ? g : _;
}, Mt = [
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
function Nt(e, t, n, r) {
	var i = e.locale, a = e.formats, o = e.onError, s = e.timeZone;
	r === void 0 && (r = {});
	var c = r.format, l = d(d({}, s && { timeZone: s }), c && Dt(a, t, c, o)), u = St(r, Mt, l);
	return t !== "time" || u.hour || u.minute || u.second || u.timeStyle || u.dateStyle || (u = d(d({}, u), {
		hour: "numeric",
		minute: "numeric"
	})), n(i, u);
}
function Pt(e, t) {
	var n = [...arguments].slice(2), r = n[0], i = n[1], a = i === void 0 ? {} : i, o = typeof r == "string" ? new Date(r || 0) : r;
	try {
		return Nt(e, "date", t, a).format(o);
	} catch (t) {
		e.onError(new I("Error formatting date.", e.locale, t));
	}
	return String(o);
}
function Ft(e, t) {
	var n = [...arguments].slice(2), r = n[0], i = n[1], a = i === void 0 ? {} : i, o = typeof r == "string" ? new Date(r || 0) : r;
	try {
		return Nt(e, "time", t, a).format(o);
	} catch (t) {
		e.onError(new I("Error formatting time.", e.locale, t));
	}
	return String(o);
}
function It(e, t) {
	var n = [...arguments].slice(2), r = n[0], i = n[1], a = n[2], o = a === void 0 ? {} : a, s = e.timeZone, c = e.locale, l = e.onError, u = St(o, Mt, s ? { timeZone: s } : {});
	try {
		return t(c, u).formatRange(r, i);
	} catch (t) {
		l(new I("Error formatting date time range.", e.locale, t));
	}
	return String(r);
}
function Lt(e, t) {
	var n = [...arguments].slice(2), r = n[0], i = n[1], a = i === void 0 ? {} : i, o = typeof r == "string" ? new Date(r || 0) : r;
	try {
		return Nt(e, "date", t, a).formatToParts(o);
	} catch (t) {
		e.onError(new I("Error formatting date.", e.locale, t));
	}
	return [];
}
function Rt(e, t) {
	var n = [...arguments].slice(2), r = n[0], i = n[1], a = i === void 0 ? {} : i, o = typeof r == "string" ? new Date(r || 0) : r;
	try {
		return Nt(e, "time", t, a).formatToParts(o);
	} catch (t) {
		e.onError(new I("Error formatting time.", e.locale, t));
	}
	return [];
}
// node_modules/.pnpm/@formatjs+intl@2.10.15_typescript@5.9.3/node_modules/@formatjs/intl/lib/src/displayName.js
var zt = [
	"style",
	"type",
	"fallback",
	"languageDisplay"
];
function Bt(e, t, n, r) {
	var i = e.locale, a = e.onError;
	Intl.DisplayNames || a(new nt("Intl.DisplayNames is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-displaynames\"\n", tt.MISSING_INTL_API));
	var o = St(r, zt);
	try {
		return t(i, o).of(n);
	} catch (e) {
		a(new I("Error formatting display name.", i, e));
	}
}
// node_modules/.pnpm/@formatjs+intl@2.10.15_typescript@5.9.3/node_modules/@formatjs/intl/lib/src/list.js
var Vt = ["type", "style"], Ht = Date.now();
function Ut(e) {
	return `${Ht}_${e}_${Ht}`;
}
function Wt(e, t, n, r) {
	r === void 0 && (r = {});
	var i = L(e, t, n, r).reduce(function(e, t) {
		var n = t.value;
		return typeof n == "string" && typeof e[e.length - 1] == "string" ? e[e.length - 1] += n : e.push(n), e;
	}, []);
	return i.length === 1 ? i[0] : i.length === 0 ? "" : i;
}
function L(e, t, n, r) {
	var i = e.locale, a = e.onError;
	r === void 0 && (r = {}), Intl.ListFormat || a(new nt("Intl.ListFormat is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-listformat\"\n", tt.MISSING_INTL_API));
	var o = St(r, Vt);
	try {
		var s = {}, c = n.map(function(e, t) {
			if (typeof e == "object") {
				var n = Ut(t);
				return s[n] = e, n;
			}
			return String(e);
		});
		return t(i, o).formatToParts(c).map(function(e) {
			return e.type === "literal" ? e : d(d({}, e), { value: s[e.value] || e.value });
		});
	} catch (e) {
		a(new I("Error formatting list.", i, e));
	}
	return n;
}
// node_modules/.pnpm/@formatjs+intl@2.10.15_typescript@5.9.3/node_modules/@formatjs/intl/lib/src/plural.js
var Gt = ["type"];
function Kt(e, t, n, r) {
	var i = e.locale, a = e.onError;
	r === void 0 && (r = {}), Intl.PluralRules || a(new nt("Intl.PluralRules is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-pluralrules\"\n", tt.MISSING_INTL_API));
	var o = St(r, Gt);
	try {
		return t(i, o).select(n);
	} catch (e) {
		a(new I("Error formatting plural.", i, e));
	}
	return "other";
}
// node_modules/.pnpm/@formatjs+intl@2.10.15_typescript@5.9.3/node_modules/@formatjs/intl/lib/src/relativeTime.js
var qt = ["numeric", "style"];
function Jt(e, t, n) {
	var r = e.locale, i = e.formats, a = e.onError;
	n === void 0 && (n = {});
	var o = n.format, s = !!o && Dt(i, "relative", o, a) || {};
	return t(r, St(n, qt, s));
}
function Yt(e, t, n, r, i) {
	i === void 0 && (i = {}), r ||= "second", Intl.RelativeTimeFormat || e.onError(new nt("Intl.RelativeTimeFormat is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-relativetimeformat\"\n", tt.MISSING_INTL_API));
	try {
		return Jt(e, t, i).format(n, r);
	} catch (t) {
		e.onError(new I("Error formatting relative time.", e.locale, t));
	}
	return String(n);
}
// node_modules/.pnpm/@formatjs+intl@2.10.15_typescript@5.9.3/node_modules/@formatjs/intl/lib/src/number.js
var Xt = [
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
function Zt(e, t, n) {
	var r = e.locale, i = e.formats, a = e.onError;
	n === void 0 && (n = {});
	var o = n.format, s = o && Dt(i, "number", o, a) || {};
	return t(r, St(n, Xt, s));
}
function Qt(e, t, n, r) {
	r === void 0 && (r = {});
	try {
		return Zt(e, t, r).format(n);
	} catch (t) {
		e.onError(new I("Error formatting number.", e.locale, t));
	}
	return String(n);
}
function $t(e, t, n, r) {
	r === void 0 && (r = {});
	try {
		return Zt(e, t, r).formatToParts(n);
	} catch (t) {
		e.onError(new I("Error formatting number.", e.locale, t));
	}
	return [];
}
// node_modules/.pnpm/@formatjs+intl@2.10.15_typescript@5.9.3/node_modules/@formatjs/intl/lib/src/create-intl.js
function en(e) {
	return typeof (e ? e[Object.keys(e)[0]] : void 0) == "string";
}
function tn(e) {
	e.onWarn && e.defaultRichTextElements && en(e.messages || {}) && e.onWarn("[@formatjs/intl] \"defaultRichTextElements\" was specified but \"message\" was not pre-compiled. \nPlease consider using \"@formatjs/cli\" to pre-compile your messages for performance.\nFor more details see https://formatjs.io/docs/getting-started/message-distribution");
}
function nn(e, t) {
	var n = Et(t), r = d(d({}, Ct), e), i = r.locale, a = r.defaultLocale, o = r.onError;
	return i ? !Intl.NumberFormat.supportedLocalesOf(i).length && o ? o(new yt(`Missing locale data for locale: "${i}" in Intl.NumberFormat. Using default locale: "${a}" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details`)) : !Intl.DateTimeFormat.supportedLocalesOf(i).length && o && o(new yt(`Missing locale data for locale: "${i}" in Intl.DateTimeFormat. Using default locale: "${a}" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details`)) : (o && o(new vt(`"locale" was not configured, using "${a}" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details`)), r.locale = r.defaultLocale || "en"), tn(r), d(d({}, r), {
		formatters: n,
		formatNumber: Qt.bind(null, r, n.getNumberFormat),
		formatNumberToParts: $t.bind(null, r, n.getNumberFormat),
		formatRelativeTime: Yt.bind(null, r, n.getRelativeTimeFormat),
		formatDate: Pt.bind(null, r, n.getDateTimeFormat),
		formatDateToParts: Lt.bind(null, r, n.getDateTimeFormat),
		formatTime: Ft.bind(null, r, n.getDateTimeFormat),
		formatDateTimeRange: It.bind(null, r, n.getDateTimeFormat),
		formatTimeToParts: Rt.bind(null, r, n.getDateTimeFormat),
		formatPlural: Kt.bind(null, r, n.getPluralRules),
		formatMessage: jt.bind(null, r, n),
		$t: jt.bind(null, r, n),
		formatList: Wt.bind(null, r, n.getListFormat),
		formatListToParts: L.bind(null, r, n.getListFormat),
		formatDisplayName: Bt.bind(null, r, n.getDisplayNames)
	});
}
// node_modules/.pnpm/react-intl@6.8.9_react@18.3.1_typescript@5.9.3/node_modules/react-intl/lib/src/utils.js
var rn = c(), R = /* @__PURE__ */ e(r());
function an(e) {
	ee(e, "[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.");
}
var on = d(d({}, Ct), { textComponent: R.Fragment });
function sn(e) {
	return function(t) {
		return e(R.Children.toArray(t));
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
// node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/cjs/react-is.production.min.js
var ln = /* @__PURE__ */ t(((e) => {
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
})), un = /* @__PURE__ */ t(((e, t) => {
	t.exports = ln();
})), dn = /* @__PURE__ */ t(((e, t) => {
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
var fn = typeof window < "u" && !window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__ ? window.__REACT_INTL_CONTEXT__ || (window.__REACT_INTL_CONTEXT__ = R.createContext(null)) : R.createContext(null);
fn.Consumer;
var pn = fn.Provider, mn = fn;
// node_modules/.pnpm/react-intl@6.8.9_react@18.3.1_typescript@5.9.3/node_modules/react-intl/lib/src/components/useIntl.js
function hn() {
	var e = R.useContext(mn);
	return an(e), e;
}
// node_modules/.pnpm/react-intl@6.8.9_react@18.3.1_typescript@5.9.3/node_modules/react-intl/lib/src/components/createFormattedComponent.js
var gn;
(function(e) {
	e.formatDate = "FormattedDate", e.formatTime = "FormattedTime", e.formatNumber = "FormattedNumber", e.formatList = "FormattedList", e.formatDisplayName = "FormattedDisplayName";
})(gn ||= {});
var _n;
(function(e) {
	e.formatDate = "FormattedDateParts", e.formatTime = "FormattedTimeParts", e.formatNumber = "FormattedNumberParts", e.formatList = "FormattedListParts";
})(_n ||= {});
function vn(e) {
	var t = function(t) {
		var n = hn(), r = t.value, i = t.children, a = f(t, ["value", "children"]), o = typeof r == "string" ? new Date(r || 0) : r;
		return i(e === "formatDate" ? n.formatDateToParts(o, a) : n.formatTimeToParts(o, a));
	};
	return t.displayName = _n[e], t;
}
function yn(e) {
	var t = function(t) {
		var n = hn(), r = t.value, i = t.children, a = f(t, ["value", "children"]), o = n[e](r, a);
		if (typeof i == "function") return i(o);
		var s = n.textComponent || R.Fragment;
		return R.createElement(s, null, o);
	};
	return t.displayName = gn[e], t;
}
// node_modules/.pnpm/react-intl@6.8.9_react@18.3.1_typescript@5.9.3/node_modules/react-intl/lib/src/components/createIntl.js
function bn(e) {
	return e && Object.keys(e).reduce(function(t, n) {
		var r = e[n];
		return t[n] = ct(r) ? sn(r) : r, t;
	}, {});
}
var xn = function(e, t, n, r) {
	var i = [...arguments].slice(4), a = bn(r), o = jt.apply(void 0, _([
		e,
		t,
		n,
		a
	], i, !1));
	return Array.isArray(o) ? R.Children.toArray(o) : o;
}, Sn = function(e, t) {
	var n = e.defaultRichTextElements, r = f(e, ["defaultRichTextElements"]), i = bn(n), a = nn(d(d(d({}, on), r), { defaultRichTextElements: i }), t), o = {
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
	return d(d({}, a), {
		formatMessage: xn.bind(null, o, a.formatters),
		$t: xn.bind(null, o, a.formatters)
	});
};
// node_modules/.pnpm/react-intl@6.8.9_react@18.3.1_typescript@5.9.3/node_modules/react-intl/lib/src/components/provider.js
function Cn(e) {
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
var wn = function(e) {
	u(t, e);
	function t() {
		var t = e !== null && e.apply(this, arguments) || this;
		return t.cache = wt(), t.state = {
			cache: t.cache,
			intl: Sn(Cn(t.props), t.cache),
			prevConfig: Cn(t.props)
		}, t;
	}
	return t.getDerivedStateFromProps = function(e, t) {
		var n = t.prevConfig, r = t.cache, i = Cn(e);
		return cn(n, i) ? null : {
			intl: Sn(i, r),
			prevConfig: i
		};
	}, t.prototype.render = function() {
		return an(this.state.intl), R.createElement(pn, { value: this.state.intl }, this.props.children);
	}, t.displayName = "IntlProvider", t.defaultProps = on, t;
}(R.PureComponent);
// node_modules/.pnpm/react-intl@6.8.9_react@18.3.1_typescript@5.9.3/node_modules/react-intl/lib/index.js
function Tn(e) {
	return e;
}
yn("formatDate"), yn("formatTime"), yn("formatNumber"), yn("formatList"), yn("formatDisplayName"), vn("formatDate"), vn("formatTime");
// node_modules/.pnpm/react@18.3.1/node_modules/react/cjs/react-jsx-runtime.production.min.js
var En = /* @__PURE__ */ t(((e) => {
	var t = r(), n = Symbol.for("react.element"), i = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, o = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = {
		key: !0,
		ref: !0,
		__self: !0,
		__source: !0
	};
	function c(e, t, r) {
		var i, c = {}, l = null, u = null;
		for (i in r !== void 0 && (l = "" + r), t.key !== void 0 && (l = "" + t.key), t.ref !== void 0 && (u = t.ref), t) a.call(t, i) && !s.hasOwnProperty(i) && (c[i] = t[i]);
		if (e && e.defaultProps) for (i in t = e.defaultProps, t) c[i] === void 0 && (c[i] = t[i]);
		return {
			$$typeof: n,
			type: e,
			key: l,
			ref: u,
			props: c,
			_owner: o.current
		};
	}
	e.Fragment = i, e.jsx = c, e.jsxs = c;
})), Dn = /* @__PURE__ */ t(((e, t) => {
	t.exports = En();
})), On = Dn(), kn = (0, R.createContext)({
	runtime: {
		handlerUrl() {
			return "";
		},
		notify() {}
	},
	element: document.createElement("div")
}), An = (e) => {
	let t = (0, R.useContext)(kn);
	return t.runtime.handlerUrl(t.element, e);
}, jn = (e, t) => {
	for (let n of Object.getOwnPropertyNames(t)) if (n.startsWith("_jsrt")) {
		let r = n;
		e[r] = t[r];
	}
}, Mn = (e) => {
	let t = e && "jquery" in e ? e[0] : e;
	if (!t || !(t instanceof Element)) throw console.error("Invalid DOM element provided to renderBlock:", e), Error("Invalid DOM Element. See previously logged details.");
	return jn(t, e), t;
}, Nn = async (e) => {
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
}, Pn = ({ runtime: e, element: t, config: n, styles: r }) => async (i) => {
	let { core: a, theme: o } = await Nn(n.mfe_config_api), s = Mn(t), c = s, l = s.attachShadow({ mode: "open" });
	if (c = document.createElement("div"), c.classList.add("xblock-root"), l.appendChild(c), r) {
		let e = document.createElement("style");
		e.textContent = r, l.appendChild(e);
	}
	return a.forEach((e) => {
		let t = document.createElement("link");
		t.rel = "stylesheet", t.href = e, l?.appendChild(t), document.head.querySelector(`link[href="${e}"]`) || document.head.appendChild(t.cloneNode());
	}), o.forEach((e) => {
		let t = document.createElement("link");
		t.rel = "stylesheet", t.href = e, l?.appendChild(t), document.head.querySelector(`link[href="${e}"]`) || document.head.appendChild(t.cloneNode());
	}), (0, rn.createRoot)(c).render(/* @__PURE__ */ (0, On.jsx)(R.StrictMode, { children: /* @__PURE__ */ (0, On.jsx)(kn.Provider, {
		value: {
			runtime: e,
			element: s
		},
		children: /* @__PURE__ */ (0, On.jsx)(wn, {
			locale: "en",
			children: i
		})
	}) }));
}, Fn = () => ({
	contentType: "application/json",
	method: "POST"
}), In = (e) => {
	let t = {
		...Fn(),
		...e
	};
	return typeof t.data == "object" && t.data !== null && t.contentType === "application/json" && (t.data = JSON.stringify(t.data)), new Promise((e, n) => {
		$.ajax(t).done(e).fail(n);
	});
}, Ln = async ({ saveUrl: e, data: t, runtime: n, errorMessage: r = "Failed to save configuration" }) => {
	n.notify("save", { state: "start" });
	let i;
	try {
		i = await In({
			url: e,
			data: t
		}), n.notify("save", { state: "end" });
	} catch (e) {
		let t = typeof r == "function" ? r(e) : r;
		throw n.notify("error", {
			title: "Save Error",
			message: t
		}), e;
	}
	return i;
}, Rn = /* @__PURE__ */ t(((e, t) => {
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
// node_modules/.pnpm/@babel+runtime@7.29.14/node_modules/@babel/runtime/helpers/esm/extends.js
function z() {
	return z = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, z.apply(null, arguments);
}
// node_modules/.pnpm/@babel+runtime@7.29.14/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function zn(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
// node_modules/.pnpm/invariant@2.2.4/node_modules/invariant/browser.js
var Bn = /* @__PURE__ */ t(((e, t) => {
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
})), Vn = /* @__PURE__ */ e(s()), Hn = /* @__PURE__ */ e(Rn());
Bn();
function Un(e) {
	return "default" + e.charAt(0).toUpperCase() + e.substr(1);
}
// node_modules/.pnpm/uncontrollable@7.2.1_react@18.3.1/node_modules/uncontrollable/lib/esm/hook.js
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
		var i, a = n, o = a[Un(r)], s = a[r], c = zn(a, [Un(r), r].map(Wn)), l = t[r], u = Kn(s, o, e[l]), d = u[0], f = u[1];
		return z({}, c, (i = {}, i[r] = d, i[l] = f, i));
	}, e);
}
// node_modules/.pnpm/@babel+runtime@7.29.14/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function Jn(e, t) {
	return Jn = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
		return e.__proto__ = t, e;
	}, Jn(e, t);
}
// node_modules/.pnpm/@babel+runtime@7.29.14/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
function Yn(e, t) {
	e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Jn(e, t);
}
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/ThemeProvider.js
var Xn = /*#__PURE__*/ R.createContext({});
Xn.Consumer, Xn.Provider;
function Zn(e, t) {
	var n = (0, R.useContext)(Xn);
	return e || n[t] || t;
}
// node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/ownerDocument.js
function Qn(e) {
	return e && e.ownerDocument || document;
}
// node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/ownerWindow.js
function $n(e) {
	var t = Qn(e);
	return t && t.defaultView || window;
}
// node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/getComputedStyle.js
function er(e, t) {
	return $n(e).getComputedStyle(e, t);
}
// node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/hyphenate.js
var tr = /([A-Z])/g;
function nr(e) {
	return e.replace(tr, "-$1").toLowerCase();
}
// node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/hyphenateStyle.js
var rr = /^ms-/;
function ir(e) {
	return nr(e).replace(rr, "-ms-");
}
// node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/isTransform.js
var ar = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
function or(e) {
	return !!(e && ar.test(e));
}
// node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/css.js
function sr(e, t) {
	var n = "", r = "";
	if (typeof t == "string") return e.style.getPropertyValue(ir(t)) || er(e).getPropertyValue(ir(t));
	Object.keys(t).forEach(function(i) {
		var a = t[i];
		!a && a !== 0 ? e.style.removeProperty(ir(i)) : or(i) ? r += i + "(" + a + ") " : n += ir(i) + ": " + a + ";";
	}), r && (n += "transform: " + r + ";"), e.style.cssText += ";" + n;
}
// node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/lib/ReactPropTypesSecret.js
var cr = /* @__PURE__ */ t(((e, t) => {
	t.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
})), lr = /* @__PURE__ */ t(((e, t) => {
	var n = cr();
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
})), ur = /* @__PURE__ */ t(((e, t) => {
	t.exports = lr()();
})), dr = { disabled: !1 }, fr = R.createContext(null), pr = function(e) {
	return e.scrollTop;
}, mr = "unmounted", hr = "exited", gr = "entering", _r = "entered", vr = "exiting", yr = /*#__PURE__*/ function(e) {
	Yn(t, e);
	function t(t, n) {
		var r = e.call(this, t, n) || this, i = n, a = i && !i.isMounting ? t.enter : t.appear, o;
		return r.appearStatus = null, t.in ? a ? (o = hr, r.appearStatus = gr) : o = _r : o = t.unmountOnExit || t.mountOnEnter ? mr : hr, r.state = { status: o }, r.nextCallback = null, r;
	}
	t.getDerivedStateFromProps = function(e, t) {
		return e.in && t.status === "unmounted" ? { status: hr } : null;
	};
	var n = t.prototype;
	return n.componentDidMount = function() {
		this.updateStatus(!0, this.appearStatus);
	}, n.componentDidUpdate = function(e) {
		var t = null;
		if (e !== this.props) {
			var n = this.state.status;
			this.props.in ? n !== "entering" && n !== "entered" && (t = gr) : (n === "entering" || n === "entered") && (t = vr);
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
		if (e === void 0 && (e = !1), t !== null) {
			if (this.cancelNextCallback(), t === "entering") {
				if (this.props.unmountOnExit || this.props.mountOnEnter) {
					var n = this.props.nodeRef ? this.props.nodeRef.current : Vn.findDOMNode(this);
					n && pr(n);
				}
				this.performEnter(e);
			} else this.performExit();
		} else this.props.unmountOnExit && this.state.status === "exited" && this.setState({ status: mr });
	}, n.performEnter = function(e) {
		var t = this, n = this.props.enter, r = this.context ? this.context.isMounting : e, i = this.props.nodeRef ? [r] : [Vn.findDOMNode(this), r], a = i[0], o = i[1], s = this.getTimeouts(), c = r ? s.appear : s.enter;
		!e && !n || dr.disabled ? this.safeSetState({ status: _r }, function() {
			t.props.onEntered(a);
		}) : (this.props.onEnter(a, o), this.safeSetState({ status: gr }, function() {
			t.props.onEntering(a, o), t.onTransitionEnd(c, function() {
				t.safeSetState({ status: _r }, function() {
					t.props.onEntered(a, o);
				});
			});
		}));
	}, n.performExit = function() {
		var e = this, t = this.props.exit, n = this.getTimeouts(), r = this.props.nodeRef ? void 0 : Vn.findDOMNode(this);
		!t || dr.disabled ? this.safeSetState({ status: hr }, function() {
			e.props.onExited(r);
		}) : (this.props.onExit(r), this.safeSetState({ status: vr }, function() {
			e.props.onExiting(r), e.onTransitionEnd(n.exit, function() {
				e.safeSetState({ status: hr }, function() {
					e.props.onExited(r);
				});
			});
		}));
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
		var n = this.props.nodeRef ? this.props.nodeRef.current : Vn.findDOMNode(this), r = e == null && !this.props.addEndListener;
		if (!n || r) setTimeout(this.nextCallback, 0);
		else {
			if (this.props.addEndListener) {
				var i = this.props.nodeRef ? [this.nextCallback] : [n, this.nextCallback], a = i[0], o = i[1];
				this.props.addEndListener(a, o);
			}
			e != null && setTimeout(this.nextCallback, e);
		}
	}, n.render = function() {
		var e = this.state.status;
		if (e === "unmounted") return null;
		var t = this.props, n = t.children;
		t.in, t.mountOnEnter, t.unmountOnExit, t.appear, t.enter, t.exit, t.timeout, t.addEndListener, t.onEnter, t.onEntering, t.onEntered, t.onExit, t.onExiting, t.onExited, t.nodeRef;
		var r = zn(t, [
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
		return /*#__PURE__*/ R.createElement(fr.Provider, { value: null }, typeof n == "function" ? n(e, r) : R.cloneElement(R.Children.only(n), r));
	}, t;
}(R.Component);
yr.contextType = fr, yr.propTypes = {};
function br() {}
yr.defaultProps = {
	in: !1,
	mountOnEnter: !1,
	unmountOnExit: !1,
	appear: !1,
	enter: !0,
	exit: !0,
	onEnter: br,
	onEntering: br,
	onEntered: br,
	onExit: br,
	onExiting: br,
	onExited: br
}, yr.UNMOUNTED = mr, yr.EXITED = hr, yr.ENTERING = gr, yr.ENTERED = _r, yr.EXITING = vr;
// node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/canUseDOM.js
var xr = !!(typeof window < "u" && window.document && window.document.createElement), Sr = !1, Cr = !1;
try {
	var wr = {
		get passive() {
			return Sr = !0;
		},
		get once() {
			return Cr = Sr = !0;
		}
	};
	xr && (window.addEventListener("test", wr, wr), window.removeEventListener("test", wr, !0));
} catch {}
function Tr(e, t, n, r) {
	if (r && typeof r != "boolean" && !Cr) {
		var i = r.once, a = r.capture, o = n;
		!Cr && i && (o = n.__once || function e(r) {
			this.removeEventListener(t, e, a), n.call(this, r);
		}, n.__once = o), e.addEventListener(t, o, Sr ? r : a);
	}
	e.addEventListener(t, n, r);
}
// node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/removeEventListener.js
function Er(e, t, n, r) {
	var i = r && typeof r != "boolean" ? r.capture : r;
	e.removeEventListener(t, n, i), n.__once && e.removeEventListener(t, n.__once, i);
}
// node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/listen.js
function Dr(e, t, n, r) {
	return Tr(e, t, n, r), function() {
		Er(e, t, n, r);
	};
}
// node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/triggerEvent.js
function Or(e, t, n, r) {
	if (n === void 0 && (n = !1), r === void 0 && (r = !0), e) {
		var i = document.createEvent("HTMLEvents");
		i.initEvent(t, n, r), e.dispatchEvent(i);
	}
}
// node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/transitionEnd.js
function kr(e) {
	var t = sr(e, "transitionDuration") || "", n = t.indexOf("ms") === -1 ? 1e3 : 1;
	return parseFloat(t) * n;
}
function Ar(e, t, n) {
	n === void 0 && (n = 5);
	var r = !1, i = setTimeout(function() {
		r || Or(e, "transitionend", !0);
	}, t + n), a = Dr(e, "transitionend", function() {
		r = !0;
	}, { once: !0 });
	return function() {
		clearTimeout(i), a();
	};
}
function jr(e, t, n, r) {
	n ??= kr(e) || 0;
	var i = Ar(e, n, r), a = Dr(e, "transitionend", t);
	return function() {
		i(), a();
	};
}
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/transitionEndListener.js
function Mr(e, t) {
	var n = sr(e, t) || "", r = n.indexOf("ms") === -1 ? 1e3 : 1;
	return parseFloat(n) * r;
}
function Nr(e, t) {
	var n = jr(e, function(r) {
		r.target === e && (n(), t(r));
	}, Mr(e, "transitionDuration") + Mr(e, "transitionDelay"));
}
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/createChainedFunction.js
function Pr() {
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
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/triggerBrowserReflow.js
function Fr(e) {
	e.offsetHeight;
}
// node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useCommittedRef.js
function Ir(e) {
	let t = (0, R.useRef)(e);
	return (0, R.useEffect)(() => {
		t.current = e;
	}, [e]), t;
}
// node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useEventCallback.js
function Lr(e) {
	let t = Ir(e);
	return (0, R.useCallback)(function(...e) {
		return t.current && t.current(...e);
	}, [t]);
}
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Fade.js
var Rr = ["className", "children"], zr, Br = {
	in: !1,
	timeout: 300,
	mountOnEnter: !1,
	unmountOnExit: !1,
	appear: !1
}, Vr = (zr = {}, zr[gr] = "show", zr[_r] = "show", zr), Hr = /*#__PURE__*/ R.forwardRef(function(e, t) {
	var n = e.className, r = e.children, i = zn(e, Rr), a = (0, R.useCallback)(function(e) {
		Fr(e), i.onEnter && i.onEnter(e);
	}, [i]);
	return /*#__PURE__*/ R.createElement(yr, z({
		ref: t,
		addEndListener: Nr
	}, i, { onEnter: a }), function(e, t) {
		return /*#__PURE__*/ R.cloneElement(r, z({}, t, { className: (0, Hn.default)("fade", n, r.props.className, Vr[e]) }));
	});
});
Hr.defaultProps = Br, Hr.displayName = "Fade";
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/SafeAnchor.js
var Ur = [
	"as",
	"disabled",
	"onKeyDown"
];
function Wr(e) {
	return !e || e.trim() === "#";
}
var Gr = /*#__PURE__*/ R.forwardRef(function(e, t) {
	var n = e.as, r = n === void 0 ? "a" : n, i = e.disabled, a = e.onKeyDown, o = zn(e, Ur), s = function(e) {
		var t = o.href, n = o.onClick;
		(i || Wr(t)) && e.preventDefault(), i ? e.stopPropagation() : n && n(e);
	};
	return Wr(o.href) && (o.role = o.role || "button", o.href = o.href || "#"), i && (o.tabIndex = -1, o["aria-disabled"] = !0), /*#__PURE__*/ R.createElement(r, z({ ref: t }, o, {
		onClick: s,
		onKeyDown: Pr(function(e) {
			e.key === " " && (e.preventDefault(), s(e));
		}, a)
	}));
});
Gr.displayName = "SafeAnchor";
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Button.js
var Kr = [
	"bsPrefix",
	"variant",
	"size",
	"active",
	"className",
	"block",
	"type",
	"as"
], qr = {
	variant: "primary",
	active: !1,
	disabled: !1
}, Jr = /*#__PURE__*/ R.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.variant, i = e.size, a = e.active, o = e.className, s = e.block, c = e.type, l = e.as, u = zn(e, Kr), d = Zn(n, "btn"), f = (0, Hn.default)(o, d, a && "active", r && d + "-" + r, s && d + "-block", i && d + "-" + i);
	if (u.href) return /*#__PURE__*/ R.createElement(Gr, z({}, u, {
		as: l,
		ref: t,
		className: (0, Hn.default)(f, u.disabled && "disabled")
	}));
	t && (u.ref = t), c ? u.type = c : l || (u.type = "button");
	var p = l || "button";
	return /*#__PURE__*/ R.createElement(p, z({}, u, { className: f }));
});
Jr.displayName = "Button", Jr.defaultProps = qr;
// node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useMounted.js
function Yr() {
	let e = (0, R.useRef)(!0), t = (0, R.useRef)(() => e.current);
	return (0, R.useEffect)(() => (e.current = !0, () => {
		e.current = !1;
	}), []), t.current;
}
// node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useUpdatedRef.js
function Xr(e) {
	let t = (0, R.useRef)(e);
	return t.current = e, t;
}
// node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useWillUnmount.js
function Zr(e) {
	let t = Xr(e);
	(0, R.useEffect)(() => () => t.current(), []);
}
// node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useTimeout.js
var Qr = 2 ** 31 - 1;
function $r(e, t, n) {
	let r = n - Date.now();
	e.current = r <= Qr ? setTimeout(t, r) : setTimeout(() => $r(e, t, n), Qr);
}
function ei() {
	let e = Yr(), t = (0, R.useRef)();
	return Zr(() => clearTimeout(t.current)), (0, R.useMemo)(() => {
		let n = () => clearTimeout(t.current);
		function r(r, i = 0) {
			e() && (n(), i <= Qr ? t.current = setTimeout(r, i) : $r(t, r, Date.now() + i));
		}
		return {
			set: r,
			clear: n,
			handleRef: t
		};
	}, []);
}
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Col.js
var ti = [
	"bsPrefix",
	"className",
	"as"
], ni = [
	"xl",
	"lg",
	"md",
	"sm",
	"xs"
], ri = /*#__PURE__*/ R.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.className, i = e.as, a = i === void 0 ? "div" : i, o = zn(e, ti), s = Zn(n, "col"), c = [], l = [];
	return ni.forEach(function(e) {
		var t = o[e];
		delete o[e];
		var n, r, i;
		if (typeof t == "object" && t) {
			var a = t.span;
			n = a === void 0 || a, r = t.offset, i = t.order;
		} else n = t;
		var u = e === "xs" ? "" : "-" + e;
		n && c.push(n === !0 ? "" + s + u : "" + s + u + "-" + n), i != null && l.push("order" + u + "-" + i), r != null && l.push("offset" + u + "-" + r);
	}), c.length || c.push(s), /*#__PURE__*/ R.createElement(a, z({}, o, {
		ref: t,
		className: Hn.default.apply(void 0, [r].concat(c, l))
	}));
});
ri.displayName = "Col";
// node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useCallbackRef.js
function ii() {
	return (0, R.useState)(null);
}
// node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useSafeState.js
function ai(e) {
	let t = Yr();
	return [e[0], (0, R.useCallback)((n) => {
		if (t()) return e[1](n);
	}, [t, e[1]])];
}
var oi = "bottom", si = "right", ci = "left", B = "auto", li = [
	"top",
	oi,
	si,
	ci
], ui = "start", di = "clippingParents", fi = "viewport", pi = "popper", mi = "reference", hi = /*#__PURE__*/ li.reduce(function(e, t) {
	return e.concat([t + "-" + ui, t + "-end"]);
}, []), gi = /*#__PURE__*/ [].concat(li, [B]).reduce(function(e, t) {
	return e.concat([
		t,
		t + "-" + ui,
		t + "-end"
	]);
}, []), _i = [
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
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getBasePlacement.js
function vi(e) {
	return e.split("-")[0];
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getWindow.js
function yi(e) {
	if (e == null) return window;
	if (e.toString() !== "[object Window]") {
		var t = e.ownerDocument;
		return t && t.defaultView || window;
	}
	return e;
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/instanceOf.js
function bi(e) {
	return e instanceof yi(e).Element || e instanceof Element;
}
function xi(e) {
	return e instanceof yi(e).HTMLElement || e instanceof HTMLElement;
}
function Si(e) {
	return typeof ShadowRoot > "u" ? !1 : e instanceof yi(e).ShadowRoot || e instanceof ShadowRoot;
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/math.js
var Ci = Math.max, wi = Math.min, Ti = Math.round;
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/userAgent.js
function Ei() {
	var e = navigator.userAgentData;
	return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(e) {
		return e.brand + "/" + e.version;
	}).join(" ") : navigator.userAgent;
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/isLayoutViewport.js
function Di() {
	return !/^((?!chrome|android).)*safari/i.test(Ei());
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js
function Oi(e, t, n) {
	t === void 0 && (t = !1), n === void 0 && (n = !1);
	var r = e.getBoundingClientRect(), i = 1, a = 1;
	t && xi(e) && (i = e.offsetWidth > 0 && Ti(r.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && Ti(r.height) / e.offsetHeight || 1);
	var o = (bi(e) ? yi(e) : window).visualViewport, s = !Di() && n, c = (r.left + (s && o ? o.offsetLeft : 0)) / i, l = (r.top + (s && o ? o.offsetTop : 0)) / a, u = r.width / i, d = r.height / a;
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
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js
function ki(e) {
	var t = Oi(e), n = e.offsetWidth, r = e.offsetHeight;
	return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
		x: e.offsetLeft,
		y: e.offsetTop,
		width: n,
		height: r
	};
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/contains.js
function Ai(e, t) {
	var n = t.getRootNode && t.getRootNode();
	if (e.contains(t)) return !0;
	if (n && Si(n)) {
		var r = t;
		do {
			if (r && e.isSameNode(r)) return !0;
			r = r.parentNode || r.host;
		} while (r);
	}
	return !1;
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getNodeName.js
function ji(e) {
	return e ? (e.nodeName || "").toLowerCase() : null;
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js
function Mi(e) {
	return yi(e).getComputedStyle(e);
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/isTableElement.js
function Ni(e) {
	return [
		"table",
		"td",
		"th"
	].indexOf(ji(e)) >= 0;
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js
function Pi(e) {
	return ((bi(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getParentNode.js
function Fi(e) {
	return ji(e) === "html" ? e : e.assignedSlot || e.parentNode || (Si(e) ? e.host : null) || Pi(e);
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js
function Ii(e) {
	return !xi(e) || Mi(e).position === "fixed" ? null : e.offsetParent;
}
function Li(e) {
	var t = /firefox/i.test(Ei());
	if (/Trident/i.test(Ei()) && xi(e) && Mi(e).position === "fixed") return null;
	var n = Fi(e);
	for (Si(n) && (n = n.host); xi(n) && ["html", "body"].indexOf(ji(n)) < 0;) {
		var r = Mi(n);
		if (r.transform !== "none" || r.perspective !== "none" || r.contain === "paint" || ["transform", "perspective"].indexOf(r.willChange) !== -1 || t && r.willChange === "filter" || t && r.filter && r.filter !== "none") return n;
		n = n.parentNode;
	}
	return null;
}
function Ri(e) {
	for (var t = yi(e), n = Ii(e); n && Ni(n) && Mi(n).position === "static";) n = Ii(n);
	return n && (ji(n) === "html" || ji(n) === "body" && Mi(n).position === "static") ? t : n || Li(e) || t;
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js
function zi(e) {
	return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/within.js
function Bi(e, t, n) {
	return Ci(e, wi(t, n));
}
function Vi(e, t, n) {
	var r = Bi(e, t, n);
	return r > n ? n : r;
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getFreshSideObject.js
function Hi() {
	return {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0
	};
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/mergePaddingObject.js
function Ui(e) {
	return Object.assign({}, Hi(), e);
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/expandToHashMap.js
function Wi(e, t) {
	return t.reduce(function(t, n) {
		return t[n] = e, t;
	}, {});
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/arrow.js
var Gi = function(e, t) {
	return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, Ui(typeof e == "number" ? Wi(e, li) : e);
};
function Ki(e) {
	var t, n = e.state, r = e.name, i = e.options, a = n.elements.arrow, o = n.modifiersData.popperOffsets, s = vi(n.placement), c = zi(s), l = ["left", "right"].indexOf(s) >= 0 ? "height" : "width";
	if (a && o) {
		var u = Gi(i.padding, n), d = ki(a), f = c === "y" ? "top" : ci, p = c === "y" ? oi : si, m = n.rects.reference[l] + n.rects.reference[c] - o[c] - n.rects.popper[l], h = o[c] - n.rects.reference[c], g = Ri(a), _ = g ? c === "y" ? g.clientHeight || 0 : g.clientWidth || 0 : 0, v = m / 2 - h / 2, y = u[f], b = _ - d[l] - u[p], x = _ / 2 - d[l] / 2 + v, S = Bi(y, x, b), C = c;
		n.modifiersData[r] = (t = {}, t[C] = S, t.centerOffset = S - x, t);
	}
}
function qi(e) {
	var t = e.state, n = e.options.element, r = n === void 0 ? "[data-popper-arrow]" : n;
	r != null && (typeof r == "string" && (r = t.elements.popper.querySelector(r), !r) || Ai(t.elements.popper, r) && (t.elements.arrow = r));
}
var V = {
	name: "arrow",
	enabled: !0,
	phase: "main",
	fn: Ki,
	effect: qi,
	requires: ["popperOffsets"],
	requiresIfExists: ["preventOverflow"]
};
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getVariation.js
function H(e) {
	return e.split("-")[1];
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/computeStyles.js
var Ji = {
	top: "auto",
	right: "auto",
	bottom: "auto",
	left: "auto"
};
function Yi(e, t) {
	var n = e.x, r = e.y, i = t.devicePixelRatio || 1;
	return {
		x: Ti(n * i) / i || 0,
		y: Ti(r * i) / i || 0
	};
}
function Xi(e) {
	var t, n = e.popper, r = e.popperRect, i = e.placement, a = e.variation, o = e.offsets, s = e.position, c = e.gpuAcceleration, l = e.adaptive, u = e.roundOffsets, d = e.isFixed, f = o.x, p = f === void 0 ? 0 : f, m = o.y, h = m === void 0 ? 0 : m, g = typeof u == "function" ? u({
		x: p,
		y: h
	}) : {
		x: p,
		y: h
	};
	p = g.x, h = g.y;
	var _ = o.hasOwnProperty("x"), v = o.hasOwnProperty("y"), y = ci, b = "top", x = window;
	if (l) {
		var S = Ri(n), C = "clientHeight", w = "clientWidth";
		if (S === yi(n) && (S = Pi(n), Mi(S).position !== "static" && s === "absolute" && (C = "scrollHeight", w = "scrollWidth")), S = S, i === "top" || (i === "left" || i === "right") && a === "end") {
			b = oi;
			var T = d && S === x && x.visualViewport ? x.visualViewport.height : S[C];
			h -= T - r.height, h *= c ? 1 : -1;
		}
		if (i === "left" || (i === "top" || i === "bottom") && a === "end") {
			y = si;
			var E = d && S === x && x.visualViewport ? x.visualViewport.width : S[w];
			p -= E - r.width, p *= c ? 1 : -1;
		}
	}
	var D = Object.assign({ position: s }, l && Ji), O = u === !0 ? Yi({
		x: p,
		y: h
	}, yi(n)) : {
		x: p,
		y: h
	};
	if (p = O.x, h = O.y, c) {
		var k;
		return Object.assign({}, D, (k = {}, k[b] = v ? "0" : "", k[y] = _ ? "0" : "", k.transform = (x.devicePixelRatio || 1) <= 1 ? "translate(" + p + "px, " + h + "px)" : "translate3d(" + p + "px, " + h + "px, 0)", k));
	}
	return Object.assign({}, D, (t = {}, t[b] = v ? h + "px" : "", t[y] = _ ? p + "px" : "", t.transform = "", t));
}
function Zi(e) {
	var t = e.state, n = e.options, r = n.gpuAcceleration, i = r === void 0 || r, a = n.adaptive, o = a === void 0 || a, s = n.roundOffsets, c = s === void 0 || s, l = {
		placement: vi(t.placement),
		variation: H(t.placement),
		popper: t.elements.popper,
		popperRect: t.rects.popper,
		gpuAcceleration: i,
		isFixed: t.options.strategy === "fixed"
	};
	t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Xi(Object.assign({}, l, {
		offsets: t.modifiersData.popperOffsets,
		position: t.options.strategy,
		adaptive: o,
		roundOffsets: c
	})))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Xi(Object.assign({}, l, {
		offsets: t.modifiersData.arrow,
		position: "absolute",
		adaptive: !1,
		roundOffsets: c
	})))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
var Qi = {
	name: "computeStyles",
	enabled: !0,
	phase: "beforeWrite",
	fn: Zi,
	data: {}
}, $i = { passive: !0 };
function ea(e) {
	var t = e.state, n = e.instance, r = e.options, i = r.scroll, a = i === void 0 || i, o = r.resize, s = o === void 0 || o, c = yi(t.elements.popper), l = [].concat(t.scrollParents.reference, t.scrollParents.popper);
	return a && l.forEach(function(e) {
		e.addEventListener("scroll", n.update, $i);
	}), s && c.addEventListener("resize", n.update, $i), function() {
		a && l.forEach(function(e) {
			e.removeEventListener("scroll", n.update, $i);
		}), s && c.removeEventListener("resize", n.update, $i);
	};
}
var ta = {
	name: "eventListeners",
	enabled: !0,
	phase: "write",
	fn: function() {},
	effect: ea,
	data: {}
}, na = {
	left: "right",
	right: "left",
	bottom: "top",
	top: "bottom"
};
function ra(e) {
	return e.replace(/left|right|bottom|top/g, function(e) {
		return na[e];
	});
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js
var ia = {
	start: "end",
	end: "start"
};
function aa(e) {
	return e.replace(/start|end/g, function(e) {
		return ia[e];
	});
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js
function oa(e) {
	var t = yi(e);
	return {
		scrollLeft: t.pageXOffset,
		scrollTop: t.pageYOffset
	};
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js
function sa(e) {
	return Oi(Pi(e)).left + oa(e).scrollLeft;
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js
function ca(e, t) {
	var n = yi(e), r = Pi(e), i = n.visualViewport, a = r.clientWidth, o = r.clientHeight, s = 0, c = 0;
	if (i) {
		a = i.width, o = i.height;
		var l = Di();
		(l || !l && t === "fixed") && (s = i.offsetLeft, c = i.offsetTop);
	}
	return {
		width: a,
		height: o,
		x: s + sa(e),
		y: c
	};
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js
function la(e) {
	var t = Pi(e), n = oa(e), r = e.ownerDocument?.body, i = Ci(t.scrollWidth, t.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0), a = Ci(t.scrollHeight, t.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0), o = -n.scrollLeft + sa(e), s = -n.scrollTop;
	return Mi(r || t).direction === "rtl" && (o += Ci(t.clientWidth, r ? r.clientWidth : 0) - i), {
		width: i,
		height: a,
		x: o,
		y: s
	};
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js
function ua(e) {
	var t = Mi(e), n = t.overflow, r = t.overflowX, i = t.overflowY;
	return /auto|scroll|overlay|hidden/.test(n + i + r);
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js
function da(e) {
	return [
		"html",
		"body",
		"#document"
	].indexOf(ji(e)) >= 0 ? e.ownerDocument.body : xi(e) && ua(e) ? e : da(Fi(e));
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js
function fa(e, t) {
	t === void 0 && (t = []);
	var n = da(e), r = n === e.ownerDocument?.body, i = yi(n), a = r ? [i].concat(i.visualViewport || [], ua(n) ? n : []) : n, o = t.concat(a);
	return r ? o : o.concat(fa(Fi(a)));
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/rectToClientRect.js
function pa(e) {
	return Object.assign({}, e, {
		left: e.x,
		top: e.y,
		right: e.x + e.width,
		bottom: e.y + e.height
	});
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js
function ma(e, t) {
	var n = Oi(e, !1, t === "fixed");
	return n.top += e.clientTop, n.left += e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function ha(e, t, n) {
	return t === "viewport" ? pa(ca(e, n)) : bi(t) ? ma(t, n) : pa(la(Pi(e)));
}
function ga(e) {
	var t = fa(Fi(e)), n = ["absolute", "fixed"].indexOf(Mi(e).position) >= 0 && xi(e) ? Ri(e) : e;
	return bi(n) ? t.filter(function(e) {
		return bi(e) && Ai(e, n) && ji(e) !== "body";
	}) : [];
}
function _a(e, t, n, r) {
	var i = t === "clippingParents" ? ga(e) : [].concat(t), a = [].concat(i, [n]), o = a[0], s = a.reduce(function(t, n) {
		var i = ha(e, n, r);
		return t.top = Ci(i.top, t.top), t.right = wi(i.right, t.right), t.bottom = wi(i.bottom, t.bottom), t.left = Ci(i.left, t.left), t;
	}, ha(e, o, r));
	return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/computeOffsets.js
function va(e) {
	var t = e.reference, n = e.element, r = e.placement, i = r ? vi(r) : null, a = r ? H(r) : null, o = t.x + t.width / 2 - n.width / 2, s = t.y + t.height / 2 - n.height / 2, c;
	switch (i) {
		case "top":
			c = {
				x: o,
				y: t.y - n.height
			};
			break;
		case oi:
			c = {
				x: o,
				y: t.y + t.height
			};
			break;
		case si:
			c = {
				x: t.x + t.width,
				y: s
			};
			break;
		case ci:
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
	var l = i ? zi(i) : null;
	if (l != null) {
		var u = l === "y" ? "height" : "width";
		switch (a) {
			case ui:
				c[l] = c[l] - (t[u] / 2 - n[u] / 2);
				break;
			case "end": c[l] = c[l] + (t[u] / 2 - n[u] / 2);
		}
	}
	return c;
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/detectOverflow.js
function ya(e, t) {
	t === void 0 && (t = {});
	var n = t, r = n.placement, i = r === void 0 ? e.placement : r, a = n.strategy, o = a === void 0 ? e.strategy : a, s = n.boundary, c = s === void 0 ? di : s, l = n.rootBoundary, u = l === void 0 ? fi : l, d = n.elementContext, f = d === void 0 ? pi : d, p = n.altBoundary, m = p !== void 0 && p, h = n.padding, g = h === void 0 ? 0 : h, _ = Ui(typeof g == "number" ? Wi(g, li) : g), v = f === "popper" ? mi : pi, y = e.rects.popper, b = e.elements[m ? v : f], x = _a(bi(b) ? b : b.contextElement || Pi(e.elements.popper), c, u, o), S = Oi(e.elements.reference), C = va({
		reference: S,
		element: y,
		strategy: "absolute",
		placement: i
	}), w = pa(Object.assign({}, y, C)), T = f === "popper" ? w : S, E = {
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
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js
function ba(e, t) {
	t === void 0 && (t = {});
	var n = t, r = n.placement, i = n.boundary, a = n.rootBoundary, o = n.padding, s = n.flipVariations, c = n.allowedAutoPlacements, l = c === void 0 ? gi : c, u = H(r), d = u ? s ? hi : hi.filter(function(e) {
		return H(e) === u;
	}) : li, f = d.filter(function(e) {
		return l.indexOf(e) >= 0;
	});
	f.length === 0 && (f = d);
	var p = f.reduce(function(t, n) {
		return t[n] = ya(e, {
			placement: n,
			boundary: i,
			rootBoundary: a,
			padding: o
		})[vi(n)], t;
	}, {});
	return Object.keys(p).sort(function(e, t) {
		return p[e] - p[t];
	});
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/flip.js
function xa(e) {
	if (vi(e) === "auto") return [];
	var t = ra(e);
	return [
		aa(e),
		t,
		aa(t)
	];
}
function Sa(e) {
	var t = e.state, n = e.options, r = e.name;
	if (!t.modifiersData[r]._skip) {
		for (var i = n.mainAxis, a = i === void 0 || i, o = n.altAxis, s = o === void 0 || o, c = n.fallbackPlacements, l = n.padding, u = n.boundary, d = n.rootBoundary, f = n.altBoundary, p = n.flipVariations, m = p === void 0 || p, h = n.allowedAutoPlacements, g = t.options.placement, _ = vi(g) === g, v = c || (_ || !m ? [ra(g)] : xa(g)), y = [g].concat(v).reduce(function(e, n) {
			return e.concat(vi(n) === "auto" ? ba(t, {
				placement: n,
				boundary: u,
				rootBoundary: d,
				padding: l,
				flipVariations: m,
				allowedAutoPlacements: h
			}) : n);
		}, []), b = t.rects.reference, x = t.rects.popper, S = /* @__PURE__ */ new Map(), C = !0, w = y[0], T = 0; T < y.length; T++) {
			var E = y[T], D = vi(E), O = H(E) === ui, k = ["top", oi].indexOf(D) >= 0, ee = k ? "width" : "height", A = ya(t, {
				placement: E,
				boundary: u,
				rootBoundary: d,
				altBoundary: f,
				padding: l
			}), j = k ? O ? si : ci : O ? oi : "top";
			b[ee] > x[ee] && (j = ra(j));
			var te = ra(j), M = [];
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
var Ca = {
	name: "flip",
	enabled: !0,
	phase: "main",
	fn: Sa,
	requiresIfExists: ["offset"],
	data: { _skip: !1 }
};
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/hide.js
function wa(e, t, n) {
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
function Ta(e) {
	return [
		"top",
		si,
		oi,
		ci
	].some(function(t) {
		return e[t] >= 0;
	});
}
function U(e) {
	var t = e.state, n = e.name, r = t.rects.reference, i = t.rects.popper, a = t.modifiersData.preventOverflow, o = ya(t, { elementContext: "reference" }), s = ya(t, { altBoundary: !0 }), c = wa(o, r), l = wa(s, i, a), u = Ta(c), d = Ta(l);
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
var Ea = {
	name: "hide",
	enabled: !0,
	phase: "main",
	requiresIfExists: ["preventOverflow"],
	fn: U
};
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/offset.js
function Da(e, t, n) {
	var r = vi(e), i = ["left", "top"].indexOf(r) >= 0 ? -1 : 1, a = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n, o = a[0], s = a[1];
	return o ||= 0, s = (s || 0) * i, ["left", "right"].indexOf(r) >= 0 ? {
		x: s,
		y: o
	} : {
		x: o,
		y: s
	};
}
function Oa(e) {
	var t = e.state, n = e.options, r = e.name, i = n.offset, a = i === void 0 ? [0, 0] : i, o = gi.reduce(function(e, n) {
		return e[n] = Da(n, t.rects, a), e;
	}, {}), s = o[t.placement], c = s.x, l = s.y;
	t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += c, t.modifiersData.popperOffsets.y += l), t.modifiersData[r] = o;
}
var ka = {
	name: "offset",
	enabled: !0,
	phase: "main",
	requires: ["popperOffsets"],
	fn: Oa
};
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/popperOffsets.js
function Aa(e) {
	var t = e.state, n = e.name;
	t.modifiersData[n] = va({
		reference: t.rects.reference,
		element: t.rects.popper,
		strategy: "absolute",
		placement: t.placement
	});
}
var ja = {
	name: "popperOffsets",
	enabled: !0,
	phase: "read",
	fn: Aa,
	data: {}
};
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getAltAxis.js
function Ma(e) {
	return e === "x" ? "y" : "x";
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/preventOverflow.js
function Na(e) {
	var t = e.state, n = e.options, r = e.name, i = n.mainAxis, a = i === void 0 || i, o = n.altAxis, s = o !== void 0 && o, c = n.boundary, l = n.rootBoundary, u = n.altBoundary, d = n.padding, f = n.tether, p = f === void 0 || f, m = n.tetherOffset, h = m === void 0 ? 0 : m, g = ya(t, {
		boundary: c,
		rootBoundary: l,
		padding: d,
		altBoundary: u
	}), _ = vi(t.placement), v = H(t.placement), y = !v, b = zi(_), x = Ma(b), S = t.modifiersData.popperOffsets, C = t.rects.reference, w = t.rects.popper, T = typeof h == "function" ? h(Object.assign({}, t.rects, { placement: t.placement })) : h, E = typeof T == "number" ? {
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
			var k = b === "y" ? "top" : ci, ee = b === "y" ? oi : si, A = b === "y" ? "height" : "width", j = S[b], te = j + g[k], M = j - g[ee], N = p ? -w[A] / 2 : 0, ne = v === "start" ? C[A] : w[A], re = v === "start" ? -w[A] : -C[A], ie = t.elements.arrow, P = p && ie ? ki(ie) : {
				width: 0,
				height: 0
			}, ae = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Hi(), oe = ae[k], se = ae[ee], ce = Bi(0, C[A], P[A]), le = y ? C[A] / 2 - N - ce - oe - E.mainAxis : ne - ce - oe - E.mainAxis, ue = y ? -C[A] / 2 + N + ce + se + E.mainAxis : re + ce + se + E.mainAxis, de = t.elements.arrow && Ri(t.elements.arrow), fe = de ? b === "y" ? de.clientTop || 0 : de.clientLeft || 0 : 0, pe = D?.[b] ?? 0, me = j + le - pe - fe, he = j + ue - pe, ge = Bi(p ? wi(te, me) : te, j, p ? Ci(M, he) : M);
			S[b] = ge, O[b] = ge - j;
		}
		if (s) {
			var _e = b === "x" ? "top" : ci, ve = b === "x" ? oi : si, ye = S[x], be = x === "y" ? "height" : "width", xe = ye + g[_e], Se = ye - g[ve], Ce = ["top", ci].indexOf(_) !== -1, we = D?.[x] ?? 0, Te = Ce ? xe : ye - C[be] - w[be] - we + E.altAxis, Ee = Ce ? ye + C[be] + w[be] - we - E.altAxis : Se, De = p && Ce ? Vi(Te, ye, Ee) : Bi(p ? Te : xe, ye, p ? Ee : Se);
			S[x] = De, O[x] = De - ye;
		}
		t.modifiersData[r] = O;
	}
}
var Pa = {
	name: "preventOverflow",
	enabled: !0,
	phase: "main",
	fn: Na,
	requiresIfExists: ["offset"]
};
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js
function Fa(e) {
	return {
		scrollLeft: e.scrollLeft,
		scrollTop: e.scrollTop
	};
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js
function Ia(e) {
	return e === yi(e) || !xi(e) ? oa(e) : Fa(e);
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js
function La(e) {
	var t = e.getBoundingClientRect(), n = Ti(t.width) / e.offsetWidth || 1, r = Ti(t.height) / e.offsetHeight || 1;
	return n !== 1 || r !== 1;
}
function Ra(e, t, n) {
	n === void 0 && (n = !1);
	var r = xi(t), i = xi(t) && La(t), a = Pi(t), o = Oi(e, i, n), s = {
		scrollLeft: 0,
		scrollTop: 0
	}, c = {
		x: 0,
		y: 0
	};
	return (r || !r && !n) && ((ji(t) !== "body" || ua(a)) && (s = Ia(t)), xi(t) ? (c = Oi(t, !0), c.x += t.clientLeft, c.y += t.clientTop) : a && (c.x = sa(a))), {
		x: o.left + s.scrollLeft - c.x,
		y: o.top + s.scrollTop - c.y,
		width: o.width,
		height: o.height
	};
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/orderModifiers.js
function za(e) {
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
function Ba(e) {
	var t = za(e);
	return _i.reduce(function(e, n) {
		return e.concat(t.filter(function(e) {
			return e.phase === n;
		}));
	}, []);
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/debounce.js
function Va(e) {
	var t;
	return function() {
		return t ||= new Promise(function(n) {
			Promise.resolve().then(function() {
				t = void 0, n(e());
			});
		}), t;
	};
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/mergeByName.js
function Ha(e) {
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
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/createPopper.js
var Ua = {
	placement: "bottom",
	modifiers: [],
	strategy: "absolute"
};
function Wa() {
	return ![...arguments].some(function(e) {
		return !(e && typeof e.getBoundingClientRect == "function");
	});
}
function Ga(e) {
	e === void 0 && (e = {});
	var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, i = t.defaultOptions, a = i === void 0 ? Ua : i;
	return function(e, t, n) {
		n === void 0 && (n = a);
		var i = {
			placement: "bottom",
			orderedModifiers: [],
			options: Object.assign({}, Ua, a),
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
					reference: bi(e) ? fa(e) : e.contextElement ? fa(e.contextElement) : [],
					popper: fa(t)
				};
				var s = Ba(Ha([].concat(r, i.options.modifiers)));
				return i.orderedModifiers = s.filter(function(e) {
					return e.enabled;
				}), l(), c.update();
			},
			forceUpdate: function() {
				if (!s) {
					var e = i.elements, t = e.reference, n = e.popper;
					if (Wa(t, n)) {
						i.rects = {
							reference: Ra(t, Ri(n), i.options.strategy === "fixed"),
							popper: ki(n)
						}, i.reset = !1, i.placement = i.options.placement, i.orderedModifiers.forEach(function(e) {
							return i.modifiersData[e.name] = Object.assign({}, e.data);
						});
						for (var r = 0; r < i.orderedModifiers.length; r++) if (i.reset === !0) i.reset = !1, r = -1;
						else {
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
			update: Va(function() {
				return new Promise(function(e) {
					c.forceUpdate(), e(i);
				});
			}),
			destroy: function() {
				u(), s = !0;
			}
		};
		if (!Wa(e, t)) return c;
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
// node_modules/.pnpm/react-overlays@5.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-overlays/esm/popper.js
var Ka = Ga({ defaultModifiers: [
	Ea,
	ja,
	Qi,
	ta,
	ka,
	Ca,
	Pa,
	V
] }), qa = function(e) {
	return {
		position: e,
		top: "0",
		left: "0",
		opacity: "0",
		pointerEvents: "none"
	};
}, Ja = {
	name: "applyStyles",
	enabled: !1
}, Ya = {
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
}, Xa = [];
function Za(e, t, n) {
	var r = n === void 0 ? {} : n, i = r.enabled, a = i === void 0 || i, o = r.placement, s = o === void 0 ? "bottom" : o, c = r.strategy, l = c === void 0 ? "absolute" : c, u = r.modifiers, d = u === void 0 ? Xa : u, f = zn(r, [
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
	}, []), g = ai((0, R.useState)({
		placement: s,
		update: m,
		forceUpdate: h,
		attributes: {},
		styles: {
			popper: qa(l),
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
		p.current && a && p.current.setOptions({
			placement: s,
			strategy: l,
			modifiers: [].concat(d, [y, Ja])
		});
	}, [
		l,
		s,
		y,
		a
	]), (0, R.useEffect)(function() {
		if (a && e != null && t != null) return p.current = Ka(e, t, z({}, f, {
			placement: s,
			strategy: l,
			modifiers: [].concat(d, [Ya, y])
		})), function() {
			p.current != null && (p.current.destroy(), p.current = void 0, v(function(e) {
				return z({}, e, {
					attributes: {},
					styles: { popper: qa(l) }
				});
			}));
		};
	}, [
		a,
		e,
		t
	]), _;
}
// node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/contains.js
function Qa(e, t) {
	if (e.contains) return e.contains(t);
	if (e.compareDocumentPosition) return e === t || !!(e.compareDocumentPosition(t) & 16);
}
// node_modules/.pnpm/warning@4.0.3/node_modules/warning/warning.js
var $a = /* @__PURE__ */ t(((e, t) => {
	t.exports = function() {};
})), eo = /* @__PURE__ */ e($a());
function to(e) {
	return e && "setState" in e ? Vn.findDOMNode(e) : e ?? null;
}
// node_modules/.pnpm/react-overlays@5.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-overlays/esm/ownerDocument.js
var no = (function(e) {
	return Qn(to(e));
}), ro = 27, io = function() {};
function ao(e) {
	return e.button === 0;
}
function oo(e) {
	return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
var so = function(e) {
	return e && ("current" in e ? e.current : e);
};
function co(e, t, n) {
	var r = n === void 0 ? {} : n, i = r.disabled, a = r.clickTrigger, o = a === void 0 ? "click" : a, s = (0, R.useRef)(!1), c = t || io, l = (0, R.useCallback)(function(t) {
		var n = so(e);
		(0, eo.default)(!!n, "RootClose captured a close event but does not have a ref to compare it to. useRootClose(), should be passed a ref that resolves to a DOM node"), s.current = !n || oo(t) || !ao(t) || !!Qa(n, (t.composedPath == null ? void 0 : t.composedPath()[0]) ?? t.target);
	}, [e]), u = Lr(function(e) {
		s.current || c(e);
	}), d = Lr(function(e) {
		e.keyCode === ro && c(e);
	});
	(0, R.useEffect)(function() {
		if (!(i || e == null)) {
			var t = window.event, n = no(so(e)), r = Dr(n, o, l, !0), a = Dr(n, o, function(e) {
				e === t ? t = void 0 : u(e);
			}), s = Dr(n, "keyup", function(e) {
				e === t ? t = void 0 : d(e);
			}), c = [];
			return "ontouchstart" in n.documentElement && (c = [].slice.call(n.body.children).map(function(e) {
				return Dr(e, "mousemove", io);
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
// node_modules/.pnpm/react-overlays@5.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-overlays/esm/mergeOptionsWithPopperConfig.js
function lo(e) {
	var t = {};
	return Array.isArray(e) ? (e?.forEach(function(e) {
		t[e.name] = e;
	}), t) : e || t;
}
function uo(e) {
	return e === void 0 && (e = {}), Array.isArray(e) ? e : Object.keys(e).map(function(t) {
		return e[t].name = t, e[t];
	});
}
function fo(e) {
	var t = e.enabled, n = e.enableEvents, r = e.placement, i = e.flip, a = e.offset, o = e.fixed, s = e.containerPadding, c = e.arrowElement, l = e.popperConfig, u = l === void 0 ? {} : l, d = lo(u.modifiers);
	return z({}, u, {
		placement: r,
		enabled: t,
		strategy: o ? "fixed" : u.strategy,
		modifiers: uo(z({}, d, {
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
// node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useMergedRefs.js
var po = (e) => !e || typeof e == "function" ? e : (t) => {
	e.current = t;
};
function mo(e, t) {
	let n = po(e), r = po(t);
	return (e) => {
		n && n(e), r && r(e);
	};
}
function ho(e, t) {
	return (0, R.useMemo)(() => mo(e, t), [e, t]);
}
// node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/hasClass.js
function go(e, t) {
	return e.classList ? !!t && e.classList.contains(t) : (" " + (e.className.baseVal || e.className) + " ").indexOf(" " + t + " ") !== -1;
}
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/usePopperMarginModifiers.js
function _o(e) {
	var t = window.getComputedStyle(e);
	return {
		top: parseFloat(t.marginTop) || 0,
		right: parseFloat(t.marginRight) || 0,
		bottom: parseFloat(t.marginBottom) || 0,
		left: parseFloat(t.marginLeft) || 0
	};
}
function vo() {
	var e = (0, R.useRef)(null), t = (0, R.useRef)(null), n = (0, R.useRef)(null), r = Zn(void 0, "popover"), i = Zn(void 0, "dropdown-menu");
	return [(0, R.useCallback)(function(n) {
		n && (go(n, r) || go(n, i)) && (t.current = _o(n), n.style.margin = "0", e.current = n);
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
					if (e.current && i.elements.arrow && go(e.current, r)) {
						if (i.modifiersData["arrow#persistent"]) {
							var a = _o(i.elements.arrow), o = a.top, s = a.right, c = o || s;
							i.modifiersData["arrow#persistent"].padding = {
								top: c,
								left: c,
								right: c,
								bottom: c
							};
						} else n.current = _o(i.elements.arrow);
						return i.elements.arrow.style.margin = "0", function() {
							i.elements.arrow && (i.elements.arrow.style.margin = "");
						};
					}
				}
			};
		}, [r])
	]];
}
// node_modules/.pnpm/prop-types-extra@1.1.1_react@18.3.1/node_modules/prop-types-extra/lib/isRequiredForA11y.js
var yo = /* @__PURE__ */ t(((e, t) => {
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
})), bo = function(e) {
	var t;
	return typeof document > "u" ? null : e == null ? Qn().body : (typeof e == "function" && (e = e()), e && "current" in e && (e = e.current), (t = e) != null && t.nodeType && e || null);
};
function W(e, t) {
	var n = (0, R.useState)(function() {
		return bo(e);
	}), r = n[0], i = n[1];
	if (!r) {
		var a = bo(e);
		a && i(a);
	}
	return (0, R.useEffect)(function() {
		t && r && t(r);
	}, [t, r]), (0, R.useEffect)(function() {
		var t = bo(e);
		t !== r && i(t);
	}, [e, r]), r;
}
// node_modules/.pnpm/react-overlays@5.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-overlays/esm/Overlay.js
var G = /* @__PURE__ */ e(ur()), xo = /*#__PURE__*/ R.forwardRef(function(e, t) {
	var n = e.flip, r = e.offset, i = e.placement, a = e.containerPadding, o = a === void 0 ? 5 : a, s = e.popperConfig, c = s === void 0 ? {} : s, l = e.transition, u = ii(), d = u[0], f = u[1], p = ii(), m = p[0], h = p[1], g = ho(f, t), _ = W(e.container), v = W(e.target), y = (0, R.useState)(!e.show), b = y[0], x = y[1], S = Za(v, d, fo({
		placement: i,
		enableEvents: !!e.show,
		containerPadding: o || 5,
		flip: n,
		offset: r,
		arrowElement: m,
		popperConfig: c
	})), C = S.styles, w = S.attributes, T = zn(S, ["styles", "attributes"]);
	e.show ? b && x(!1) : !e.transition && !b && x(!0);
	var E = function() {
		x(!0), e.onExited && e.onExited.apply(e, arguments);
	}, D = e.show || l && !b;
	if (co(d, e.onHide, {
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
		var k = e.onExit, ee = e.onExiting, A = e.onEnter, j = e.onEntering, te = e.onEntered;
		O = /*#__PURE__*/ R.createElement(l, {
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
	return _ ? /*#__PURE__*/ Vn.createPortal(O, _) : null;
});
xo.displayName = "Overlay", xo.propTypes = {
	show: G.default.bool,
	placement: G.default.oneOf(gi),
	target: G.default.any,
	container: G.default.any,
	flip: G.default.bool,
	children: G.default.func.isRequired,
	containerPadding: G.default.number,
	popperConfig: G.default.object,
	rootClose: G.default.bool,
	rootCloseEvent: G.default.oneOf(["click", "mousedown"]),
	rootCloseDisabled: G.default.bool,
	onHide: function(e) {
		var t = [...arguments].slice(1);
		if (e.rootClose) {
			var n;
			return (n = G.default.func).isRequired.apply(n, [e].concat(t));
		}
		return G.default.func.apply(G.default, [e].concat(t));
	},
	transition: G.default.elementType,
	onEnter: G.default.func,
	onEntering: G.default.func,
	onEntered: G.default.func,
	onExit: G.default.func,
	onExiting: G.default.func,
	onExited: G.default.func
};
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Overlay.js
var So = [
	"children",
	"transition",
	"popperConfig"
], Co = [
	"props",
	"arrowProps",
	"show",
	"update",
	"forceUpdate",
	"placement",
	"state"
], wo = {
	transition: Hr,
	rootClose: !1,
	show: !1,
	placement: "top"
};
function To(e, t) {
	var n = e.ref, r = t.ref;
	e.ref = n.__wrapped ||= function(e) {
		return n(to(e));
	}, t.ref = r.__wrapped ||= function(e) {
		return r(to(e));
	};
}
function K(e) {
	var t = e.children, n = e.transition, r = e.popperConfig, i = r === void 0 ? {} : r, a = zn(e, So), o = (0, R.useRef)({}), s = vo(), c = s[0], l = s[1], u = n === !0 ? Hr : n || null;
	return /*#__PURE__*/ R.createElement(xo, z({}, a, {
		ref: c,
		popperConfig: z({}, i, { modifiers: l.concat(i.modifiers || []) }),
		transition: u
	}), function(e) {
		var r = e.props, i = e.arrowProps, a = e.show, s = e.update;
		e.forceUpdate;
		var c = e.placement, l = e.state, u = zn(e, Co);
		To(r, i);
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
		})) : /*#__PURE__*/ R.cloneElement(t, z({}, u, r, {
			placement: c,
			arrowProps: i,
			popper: d,
			className: (0, Hn.default)(t.props.className, !n && a && "show"),
			style: z({}, t.props.style, r.style)
		}));
	});
}
K.defaultProps = wo;
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/OverlayTrigger.js
var q = [
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
], J = /*#__PURE__*/ function(e) {
	Yn(t, e);
	function t() {
		return e.apply(this, arguments) || this;
	}
	var n = t.prototype;
	return n.render = function() {
		return this.props.children;
	}, t;
}(R.Component);
function Eo(e) {
	return e && typeof e == "object" ? e : {
		show: e,
		hide: e
	};
}
function Do(e, t, n) {
	var r = t[0], i = r.currentTarget, a = r.relatedTarget || r.nativeEvent[n];
	a && a === i || Qa(i, a) || e.apply(void 0, t);
}
var Oo = {
	defaultShow: !1,
	trigger: ["hover", "focus"]
};
function ko(e) {
	var t = e.trigger, n = e.overlay, r = e.children, i = e.popperConfig, a = i === void 0 ? {} : i, o = e.show, s = e.defaultShow, c = s !== void 0 && s, l = e.onToggle, u = e.delay, d = e.placement, f = e.flip, p = f === void 0 ? d && d.indexOf("auto") !== -1 : f, m = zn(e, q), h = (0, R.useRef)(null), g = ei(), _ = (0, R.useRef)(""), v = Kn(o, c, l), y = v[0], b = v[1], x = Eo(u), S = typeof r == "function" ? {} : R.Children.only(r).props, C = S.onFocus, w = S.onBlur, T = S.onClick, E = (0, R.useCallback)(function() {
		return to(h.current);
	}, []), D = (0, R.useCallback)(function() {
		g.clear(), _.current = "show", x.show ? g.set(function() {
			_.current === "show" && b(!0);
		}, x.show) : b(!0);
	}, [
		x.show,
		b,
		g
	]), O = (0, R.useCallback)(function() {
		g.clear(), _.current = "hide", x.hide ? g.set(function() {
			_.current === "hide" && b(!1);
		}, x.hide) : b(!1);
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
		Do(D, [...arguments], "fromElement");
	}, [D]), te = (0, R.useCallback)(function() {
		Do(O, [...arguments], "toElement");
	}, [O]), M = t == null ? [] : [].concat(t), N = {};
	return M.indexOf("click") !== -1 && (N.onClick = A), M.indexOf("focus") !== -1 && (N.onFocus = k, N.onBlur = ee), M.indexOf("hover") !== -1 && (N.onMouseOver = j, N.onMouseOut = te), /*#__PURE__*/ R.createElement(R.Fragment, null, typeof r == "function" ? r(z({}, N, { ref: h })) : /*#__PURE__*/ R.createElement(J, { ref: h }, /*#__PURE__*/ (0, R.cloneElement)(r, N)), /*#__PURE__*/ R.createElement(K, z({}, m, {
		show: y,
		onHide: O,
		flip: p,
		placement: d,
		popperConfig: a,
		target: E
	}), n));
}
ko.defaultProps = Oo, yo();
var Ao = [
	"bsPrefix",
	"placement",
	"className",
	"style",
	"children",
	"arrowProps",
	"popper",
	"show"
], jo = { placement: "right" }, Mo = /*#__PURE__*/ R.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.placement, i = e.className, a = e.style, o = e.children, s = e.arrowProps;
	e.popper, e.show;
	var c = zn(e, Ao);
	n = Zn(n, "tooltip");
	var l = (r?.split("-") || [])[0];
	return /*#__PURE__*/ R.createElement("div", z({
		ref: t,
		style: a,
		role: "tooltip",
		"x-placement": l,
		className: (0, Hn.default)(i, n, "bs-tooltip-" + l)
	}, c), /*#__PURE__*/ R.createElement("div", z({ className: "arrow" }, s)), /*#__PURE__*/ R.createElement("div", { className: n + "-inner" }, o));
});
Mo.defaultProps = jo, Mo.displayName = "Tooltip";
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/utils/newId.js
var No = 0, Po = (e = "id") => (No += 1, `${e}${No}`);
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Icon/index.js
function Fo({ src: e, id: t, className: n, hidden: r = !0, screenReaderText: i, svgAttrs: a = {}, size: o, ...s }) {
	if (e) {
		let r = a["aria-label"] || a["aria-labelledby"], c = { ...a };
		return r || (c["aria-label"] = void 0, c["aria-hidden"] = !0), /*#__PURE__*/ R.createElement("span", {
			className: (0, Hn.default)("pgn__icon", { [`pgn__icon__${o}`]: !!o }, n),
			id: t,
			...s
		}, /*#__PURE__*/ R.createElement(e, {
			role: "img",
			focusable: !1,
			...c
		}), i && /*#__PURE__*/ R.createElement("span", { className: "sr-only" }, i));
	}
	return /*#__PURE__*/ R.createElement(R.Fragment, null, /*#__PURE__*/ R.createElement("span", {
		id: t || Po("Icon"),
		className: n,
		"aria-hidden": r
	}), i && /*#__PURE__*/ R.createElement("span", { className: "sr-only" }, i));
}
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Button/index.js
var Io = /*#__PURE__*/ R.forwardRef(({ children: e, iconAfter: t, iconBefore: n, size: r, ...i }, a) => /*#__PURE__*/ R.createElement(Jr, {
	size: r,
	...i,
	className: (0, Hn.default)(i.className),
	ref: a
}, n && /*#__PURE__*/ R.createElement(Fo, {
	className: "btn-icon-before",
	size: r,
	src: n
}), e, t && /*#__PURE__*/ R.createElement(Fo, {
	className: "btn-icon-after",
	size: r,
	src: t
})));
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Overlay/index.js
function Lo({ defaultShow: e = !1, popperConfig: t = {}, trigger: n = ["hover", "focus"], ...r }) {
	return /*#__PURE__*/ R.createElement(ko, {
		defaultShow: e,
		popperConfig: t,
		trigger: n,
		...r
	}, r.children);
}
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Tooltip/index.js
var Ro = /*#__PURE__*/ R.forwardRef(({ children: e, variant: t, placement: n = "right", bsPrefix: r = "tooltip", ...i }, a) => /*#__PURE__*/ R.createElement(Mo, {
	...i,
	placement: n,
	bsPrefix: r,
	className: (0, Hn.default)({ "tooltip-light": t === "light" }, i.className),
	ref: a
}, e)), zo = /*#__PURE__*/ R.forwardRef(({ className: e, alt: t, invertColors: n = !1, icon: r, src: i, iconClassNames: a, onClick: o = () => {}, size: s = "md", variant: c = "primary", iconAs: l = Fo, isActive: u = !1, children: d, ...f }, p) => {
	let m = n ? "inverse-" : "", h = u ? `${c}-` : "", g = l;
	return /*#__PURE__*/ R.createElement("button", {
		"aria-label": t,
		className: (0, Hn.default)("btn-icon", `btn-icon-${m}${c}`, `btn-icon-${s}`, { [`btn-icon-${m}${h}active`]: u }, e),
		onClick: o,
		type: "button",
		ref: p,
		...f
	}, /*#__PURE__*/ R.createElement("span", { className: "btn-icon__icon-container" }, g && /*#__PURE__*/ R.createElement(g, {
		className: (0, Hn.default)("btn-icon__icon", a),
		icon: r,
		src: i
	})));
});
function Bo({ tooltipPlacement: e = "top", tooltipContent: t, ...n }) {
	let r = n.invertColors ? "inverse-" : "";
	return /*#__PURE__*/ R.createElement(Lo, {
		placement: e,
		overlay: /*#__PURE__*/ R.createElement(Ro, {
			id: `iconbutton-tooltip-${e}`,
			variant: r ? "light" : void 0
		}, t)
	}, /*#__PURE__*/ R.createElement(zo, { ...n }));
}
zo.IconButtonWithTooltip = Bo;
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Stack/index.js
var Vo = /*#__PURE__*/ (0, R.forwardRef)(({ direction: e = "vertical", gap: t = 0, reversed: n = !1, children: r, className: i, ...a }, o) => /*#__PURE__*/ R.createElement("div", {
	ref: o,
	className: (0, Hn.default)(e === "horizontal" ? "pgn__hstack" : "pgn__vstack", t ? `pgn__stack-gap--${t}` : "", n ? "pgn__stack-reversed" : "", i),
	...a
}, r));
export { p as $, Hr as A, z as B, V as C, ri as D, ii as E, Yn as F, Ln as G, kn as H, qn as I, Tn as J, An as K, Kn as L, Tr as M, ur as N, Jr as O, Zn as P, d as Q, Bn as R, Qi as S, xi as T, Pn as U, Rn as V, Mn as W, dn as X, hn as Y, cn as Z, ja as _, Io as a, s as at, Ca as b, yo as c, fo as d, m as et, co as f, Pa as g, Ga as h, Lo as i, g as it, Lr as j, Gr as k, vo as l, Za as m, zo as n, f as nt, Fo as o, r as ot, $a as p, Dn as q, Ro as r, _ as rt, Po as s, Vo as t, h as tt, ho as u, ka as v, ji as w, ta as x, Ea as y, zn as z };
