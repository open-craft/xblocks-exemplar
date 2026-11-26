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
	function F(e, t) {
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
	function De(e, t) {
		var n = fe(t.value), r = fe(t.defaultValue);
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
		if (e = Bi(e)) {
			if (typeof Ue != "function") throw Error(i(280));
			var t = e.stateNode;
			t && (t = Hi(t), Ue(e.stateNode, e.type, t));
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
		var r = Hi(n);
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
	var Kt, qt, Jt, Yt, Xt, Zt = !1, Qt = [], $t = null, en = null, R = null, tn = /* @__PURE__ */ new Map(), nn = /* @__PURE__ */ new Map(), rn = [], an = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
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
				R = null;
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
		}, t !== null && (t = Bi(t), t !== null && qt(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
	}
	function cn(e, t, n, r, i) {
		switch (t) {
			case "focusin": return $t = sn($t, e, t, n, r, i), !0;
			case "dragenter": return en = sn(en, e, t, n, r, i), !0;
			case "mouseover": return R = sn(R, e, t, n, r, i), !0;
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
			} else return t = Bi(n), t !== null && qt(t), e.blockedOn = n, !1;
			t.shift();
		}
		return !0;
	}
	function dn(e, t, n) {
		un(e) && n.delete(t);
	}
	function fn() {
		Zt = !1, $t !== null && un($t) && ($t = null), en !== null && un(en) && (en = null), R !== null && un(R) && (R = null), tn.forEach(dn), nn.forEach(dn);
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
		for ($t !== null && pn($t, e), en !== null && pn(en, e), R !== null && pn(R, e), tn.forEach(t), nn.forEach(t), n = 0; n < rn.length; n++) r = rn[n], r.blockedOn === e && (r.blockedOn = null);
		for (; 0 < rn.length && (n = rn[0], n.blockedOn === null);) ln(n), n.blockedOn === null && rn.shift();
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
			if (i === null) di(e, t, r, bn, n), on(e, r);
			else if (cn(i, e, t, n, r)) r.stopPropagation();
			else if (on(e, r), t & 4 && -1 < an.indexOf(e)) {
				for (; i !== null;) {
					var a = Bi(i);
					if (a !== null && Kt(a), a = xn(e, t, n, r), a === null && di(e, t, r, bn, n), a === i) break;
					i = a;
				}
				i !== null && r.stopPropagation();
			} else di(e, t, r, null, n);
		}
	}
	var bn = null;
	function xn(e, t, n, r) {
		if (bn = null, e = He(r), e = zi(e), e !== null) {
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
	}), Pn = An(Nn), z, B, Fn, In = P({}, Nn, {
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
			return "movementX" in e ? e.movementX : (e !== Fn && (Fn && e.type === "mousemove" ? (z = e.screenX - Fn.screenX, B = e.screenY - Fn.screenY) : B = z = 0, Fn = e), z);
		},
		movementY: function(e) {
			return "movementY" in e ? e.movementY : B;
		}
	}), V = An(In), Ln = An(P({}, In, { dataTransfer: 0 })), Rn = An(P({}, Nn, { relatedTarget: 0 })), zn = An(P({}, jn, {
		animationName: 0,
		elapsedTime: 0,
		pseudoElement: 0
	})), Bn = An(P({}, jn, { clipboardData: function(e) {
		return "clipboardData" in e ? e.clipboardData : window.clipboardData;
	} })), Vn = An(P({}, jn, { data: 0 })), Hn = {
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
	var qn = An(P({}, Nn, {
		key: function(e) {
			if (e.key) {
				var t = Hn[e.key] || e.key;
				if (t !== "Unidentified") return t;
			}
			return e.type === "keypress" ? (e = Dn(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Un[e.keyCode] || "Unidentified" : "";
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
			return e.type === "keypress" ? Dn(e) : 0;
		},
		keyCode: function(e) {
			return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
		},
		which: function(e) {
			return e.type === "keypress" ? Dn(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
		}
	})), Jn = An(P({}, In, {
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
	})), Yn = An(P({}, Nn, {
		touches: 0,
		targetTouches: 0,
		changedTouches: 0,
		altKey: 0,
		metaKey: 0,
		ctrlKey: 0,
		shiftKey: 0,
		getModifierState: Kn
	})), Xn = An(P({}, jn, {
		propertyName: 0,
		elapsedTime: 0,
		pseudoElement: 0
	})), Zn = An(P({}, In, {
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
	], $n = u && "CompositionEvent" in window, er = null;
	u && "documentMode" in document && (er = document.documentMode);
	var tr = u && "TextEvent" in window && !er, nr = u && (!$n || er && 8 < er && 11 >= er), rr = " ", ir = !1;
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
		if (sr) return e === "compositionend" || !$n && ar(e, t) ? (e = En(), Tn = wn = Cn = null, sr = !1, e) : null;
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
		qe(r), t = pi(t, "onChange"), 0 < t.length && (n = new Mn("onChange", "change", null, n, r), e.push({
			event: n,
			listeners: t
		}));
	}
	var pr = null, mr = null;
	function hr(e) {
		oi(e, 0);
	}
	function gr(e) {
		if (ge(Vi(e))) return e;
	}
	function _r(e, t) {
		if (e === "change") return t;
	}
	var vr = !1;
	if (u) {
		var yr;
		if (u) {
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
			fr(t, mr, e, He(e)), Qe(hr, t);
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
			if (!d.call(t, i) || !kr(e[i], t[i])) return !1;
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
	var Lr = u && "documentMode" in document && 11 >= document.documentMode, Rr = null, zr = null, Br = null, Vr = !1;
	function Hr(e, t, n) {
		var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
		Vr || Rr == null || Rr !== _e(r) || (r = Rr, "selectionStart" in r && Fr(r) ? r = {
			start: r.selectionStart,
			end: r.selectionEnd
		} : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
			anchorNode: r.anchorNode,
			anchorOffset: r.anchorOffset,
			focusNode: r.focusNode,
			focusOffset: r.focusOffset
		}), Br && Ar(Br, r) || (Br = r, r = pi(zr, "onSelect"), 0 < r.length && (t = new Mn("onSelect", "select", null, t, n), e.push({
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
	u && (Kr = document.createElement("div").style, "AnimationEvent" in window || (delete Wr.animationend.animation, delete Wr.animationiteration.animation, delete Wr.animationstart.animation), "TransitionEvent" in window || delete Wr.transitionend.transition);
	function qr(e) {
		if (Gr[e]) return Gr[e];
		if (!Wr[e]) return e;
		var t = Wr[e], n;
		for (n in t) if (t.hasOwnProperty(n) && n in Kr) return Gr[e] = t[n];
		return e;
	}
	var Jr = qr("animationend"), Yr = qr("animationiteration"), Xr = qr("animationstart"), Zr = qr("transitionend"), Qr = /* @__PURE__ */ new Map(), $r = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
	function ei(e, t) {
		Qr.set(e, t), c(t, [e]);
	}
	for (var ti = 0; ti < $r.length; ti++) {
		var ni = $r[ti];
		ei(ni.toLowerCase(), "on" + (ni[0].toUpperCase() + ni.slice(1)));
	}
	ei(Jr, "onAnimationEnd"), ei(Yr, "onAnimationIteration"), ei(Xr, "onAnimationStart"), ei("dblclick", "onDoubleClick"), ei("focusin", "onFocus"), ei("focusout", "onBlur"), ei(Zr, "onTransitionEnd"), l("onMouseEnter", ["mouseout", "mouseover"]), l("onMouseLeave", ["mouseout", "mouseover"]), l("onPointerEnter", ["pointerout", "pointerover"]), l("onPointerLeave", ["pointerout", "pointerover"]), c("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), c("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), c("onBeforeInput", [
		"compositionend",
		"keypress",
		"textInput",
		"paste"
	]), c("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), c("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), c("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
	var ri = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), ii = new Set("cancel close invalid load scroll toggle".split(" ").concat(ri));
	function ai(e, t, n) {
		var r = e.type || "unknown-event";
		e.currentTarget = n, lt(r, t, void 0, e), e.currentTarget = null;
	}
	function oi(e, t) {
		t = !!(t & 4);
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
		if (at) throw e = ot, at = !1, ot = null, e;
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
			e[ci] = !0, o.forEach(function(t) {
				t !== "selectionchange" && (ii.has(t) || si(t, !1, e), si(t, !0, e));
			});
			var t = e.nodeType === 9 ? e : e.ownerDocument;
			t === null || t[ci] || (t[ci] = !0, si("selectionchange", !1, t));
		}
	}
	function ui(e, t, n, r) {
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
		Qe(function() {
			var r = a, i = He(n), o = [];
			a: {
				var s = Qr.get(e);
				if (s !== void 0) {
					var c = Mn, l = e;
					switch (e) {
						case "keypress": if (Dn(n) === 0) break a;
						case "keydown":
						case "keyup":
							c = qn;
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
							c = V;
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
							c = Yn;
							break;
						case Jr:
						case Yr:
						case Xr:
							c = zn;
							break;
						case Zr:
							c = Xn;
							break;
						case "scroll":
							c = Pn;
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
					var u = !!(t & 4), d = !u && e === "scroll", f = u ? s === null ? null : s + "Capture" : s;
					u = [];
					for (var p = r, m; p !== null;) {
						m = p;
						var h = m.stateNode;
						if (m.tag === 5 && h !== null && (m = h, f !== null && (h = $e(p, f), h != null && u.push(fi(p, h, m)))), d) break;
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
					if (s = e === "mouseover" || e === "pointerover", c = e === "mouseout" || e === "pointerout", s && n !== Ve && (l = n.relatedTarget || n.fromElement) && (zi(l) || l[Fi])) break a;
					if ((c || s) && (s = i.window === i ? i : (s = i.ownerDocument) ? s.defaultView || s.parentWindow : window, c ? (l = n.relatedTarget || n.toElement, c = r, l = l ? zi(l) : null, l !== null && (d = ut(l), l !== d || l.tag !== 5 && l.tag !== 6) && (l = null)) : (c = null, l = r), c !== l)) {
						if (u = V, h = "onMouseLeave", f = "onMouseEnter", p = "mouse", (e === "pointerout" || e === "pointerover") && (u = Jn, h = "onPointerLeave", f = "onPointerEnter", p = "pointer"), d = c == null ? s : Vi(c), m = l == null ? s : Vi(l), s = new u(h, p + "leave", c, n, i), s.target = d, s.relatedTarget = m, h = null, zi(i) === r && (u = new u(f, p + "enter", l, n, i), u.target = m, u.relatedTarget = d, h = u), d = h, c && l) b: {
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
					else if (dr(s)) {
						if (vr) g = Dr;
						else {
							g = Tr;
							var _ = wr;
						}
					} else (c = s.nodeName) && c.toLowerCase() === "input" && (s.type === "checkbox" || s.type === "radio") && (g = Er);
					if (g &&= g(e, r)) {
						fr(o, g, n, i);
						break a;
					}
					_ && _(e, s, r), e === "focusout" && (_ = s._wrapperState) && _.controlled && s.type === "number" && Ce(s, "number", s.value);
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
				y && (nr && n.locale !== "ko" && (sr || y !== "onCompositionStart" ? y === "onCompositionEnd" && sr && (v = En()) : (Cn = i, wn = "value" in Cn ? Cn.value : Cn.textContent, sr = !0)), _ = pi(r, y), 0 < _.length && (y = new Vn(y, e, null, n, i), o.push({
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
			i.tag === 5 && a !== null && (i = a, a = $e(e, n), a != null && r.unshift(fi(e, a, i)), a = $e(e, t), a != null && r.push(fi(e, a, i))), e = e.return;
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
			s.tag === 5 && l !== null && (s = l, i ? (c = $e(n, a), c != null && o.unshift(fi(n, c, s))) : i || (c = $e(n, a), c != null && o.push(fi(n, c, s)))), n = n.return;
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
		if (t = vi(t), vi(e) !== t && n) throw Error(i(425));
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
		throw Error(i(33));
	}
	function Hi(e) {
		return e[Pi] || null;
	}
	var Ui = [], Wi = -1;
	function Gi(e) {
		return { current: e };
	}
	function Ki(e) {
		0 > Wi || (e.current = Ui[Wi], Ui[Wi] = null, Wi--);
	}
	function U(e, t) {
		Wi++, Ui[Wi] = e.current, e.current = t;
	}
	var qi = {}, Ji = Gi(qi), Yi = Gi(!1), Xi = qi;
	function Zi(e, t) {
		var n = e.type.contextTypes;
		if (!n) return qi;
		var r = e.stateNode;
		if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
		var i = {}, a;
		for (a in n) i[a] = t[a];
		return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i;
	}
	function Qi(e) {
		return e = e.childContextTypes, e != null;
	}
	function $i() {
		Ki(Yi), Ki(Ji);
	}
	function ea(e, t, n) {
		if (Ji.current !== qi) throw Error(i(168));
		U(Ji, t), U(Yi, n);
	}
	function ta(e, t, n) {
		var r = e.stateNode;
		if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
		for (var a in r = r.getChildContext(), r) if (!(a in t)) throw Error(i(108, de(e) || "Unknown", a));
		return P({}, n, r);
	}
	function na(e) {
		return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || qi, Xi = Ji.current, U(Ji, e), U(Yi, Yi.current), !0;
	}
	function ra(e, t, n) {
		var r = e.stateNode;
		if (!r) throw Error(i(169));
		n ? (e = ta(e, t, Xi), r.__reactInternalMemoizedMergedChildContext = e, Ki(Yi), Ki(Ji), U(Ji, e)) : Ki(Yi), U(Yi, n);
	}
	var ia = null, aa = !1, oa = !1;
	function sa(e) {
		ia === null ? ia = [e] : ia.push(e);
	}
	function ca(e) {
		aa = !0, sa(e);
	}
	function la() {
		if (!oa && ia !== null) {
			oa = !0;
			var e = 0, t = L;
			try {
				var n = ia;
				for (L = 1; e < n.length; e++) {
					var r = n[e];
					do
						r = r(!0);
					while (r !== null);
				}
				ia = null, aa = !1;
			} catch (t) {
				throw ia !== null && (ia = ia.slice(e + 1)), gt(xt, la), t;
			} finally {
				L = t, oa = !1;
			}
		}
		return null;
	}
	var ua = [], da = 0, fa = null, pa = 0, ma = [], ha = 0, ga = null, _a = 1, va = "";
	function ya(e, t) {
		ua[da++] = pa, ua[da++] = fa, fa = e, pa = t;
	}
	function ba(e, t, n) {
		ma[ha++] = _a, ma[ha++] = va, ma[ha++] = ga, ga = e;
		var r = _a;
		e = va;
		var i = 32 - kt(r) - 1;
		r &= ~(1 << i), n += 1;
		var a = 32 - kt(t) + i;
		if (30 < a) {
			var o = i - i % 5;
			a = (r & (1 << o) - 1).toString(32), r >>= o, i -= o, _a = 1 << 32 - kt(t) + i | n << i | r, va = a + e;
		} else _a = 1 << a | n << i | r, va = e;
	}
	function xa(e) {
		e.return !== null && (ya(e, 1), ba(e, 1, 0));
	}
	function Sa(e) {
		for (; e === fa;) fa = ua[--da], ua[da] = null, pa = ua[--da], ua[da] = null;
		for (; e === ga;) ga = ma[--ha], ma[ha] = null, va = ma[--ha], ma[ha] = null, _a = ma[--ha], ma[ha] = null;
	}
	var Ca = null, wa = null, Ta = !1, Ea = null;
	function Da(e, t) {
		var n = ql(5, null, null, 0);
		n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
	}
	function Oa(e, t) {
		switch (e.tag) {
			case 5:
				var n = e.type;
				return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null && (e.stateNode = t, Ca = e, wa = Ai(t.firstChild), !0);
			case 6: return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null && (e.stateNode = t, Ca = e, wa = null, !0);
			case 13: return t = t.nodeType === 8 ? t : null, t !== null && (n = ga === null ? null : {
				id: _a,
				overflow: va
			}, e.memoizedState = {
				dehydrated: t,
				treeContext: n,
				retryLane: 1073741824
			}, n = ql(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Ca = e, wa = null, !0);
			default: return !1;
		}
	}
	function ka(e) {
		return !!(e.mode & 1) && !(e.flags & 128);
	}
	function Aa(e) {
		if (Ta) {
			var t = wa;
			if (t) {
				var n = t;
				if (!Oa(e, t)) {
					if (ka(e)) throw Error(i(418));
					t = Ai(n.nextSibling);
					var r = Ca;
					t && Oa(e, t) ? Da(r, n) : (e.flags = e.flags & -4097 | 2, Ta = !1, Ca = e);
				}
			} else {
				if (ka(e)) throw Error(i(418));
				e.flags = e.flags & -4097 | 2, Ta = !1, Ca = e;
			}
		}
	}
	function ja(e) {
		for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
		Ca = e;
	}
	function Ma(e) {
		if (e !== Ca) return !1;
		if (!Ta) return ja(e), Ta = !0, !1;
		var t;
		if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Ci(e.type, e.memoizedProps)), t &&= wa) {
			if (ka(e)) throw Na(), Error(i(418));
			for (; t;) Da(e, t), t = Ai(t.nextSibling);
		}
		if (ja(e), e.tag === 13) {
			if (e = e.memoizedState, e = e === null ? null : e.dehydrated, !e) throw Error(i(317));
			a: {
				for (e = e.nextSibling, t = 0; e;) {
					if (e.nodeType === 8) {
						var n = e.data;
						if (n === "/$") {
							if (t === 0) {
								wa = Ai(e.nextSibling);
								break a;
							}
							t--;
						} else n !== "$" && n !== "$!" && n !== "$?" || t++;
					}
					e = e.nextSibling;
				}
				wa = null;
			}
		} else wa = Ca ? Ai(e.stateNode.nextSibling) : null;
		return !0;
	}
	function Na() {
		for (var e = wa; e;) e = Ai(e.nextSibling);
	}
	function Pa() {
		wa = Ca = null, Ta = !1;
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
			if (h === s.length) return n(i, d), Ta && ya(i, h), l;
			if (d === null) {
				for (; h < s.length; h++) d = f(i, s[h], c), d !== null && (a = o(d, a, h), u === null ? l = d : u.sibling = d, u = d);
				return Ta && ya(i, h), l;
			}
			for (d = r(i, d); h < s.length; h++) g = m(d, i, h, s[h], c), g !== null && (e && g.alternate !== null && d.delete(g.key === null ? h : g.key), a = o(g, a, h), u === null ? l = g : u.sibling = g, u = g);
			return e && d.forEach(function(e) {
				return t(i, e);
			}), Ta && ya(i, h), l;
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
			if (v.done) return n(a, h), Ta && ya(a, g), u;
			if (h === null) {
				for (; !v.done; g++, v = c.next()) v = f(a, v.value, l), v !== null && (s = o(v, s, g), d === null ? u = v : d.sibling = v, d = v);
				return Ta && ya(a, g), u;
			}
			for (h = r(a, h); !v.done; g++, v = c.next()) v = m(h, a, g, v.value, l), v !== null && (e && v.alternate !== null && h.delete(v.key === null ? g : v.key), s = o(v, s, g), d === null ? u = v : d.sibling = v, d = v);
			return e && h.forEach(function(e) {
				return t(a, e);
			}), Ta && ya(a, g), u;
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
	var Va = Ba(!0), Ha = Ba(!1), Ua = Gi(null), Wa = null, Ga = null, Ka = null;
	function qa() {
		Ka = Ga = Wa = null;
	}
	function Ja(e) {
		var t = Ua.current;
		Ki(Ua), e._currentValue = t;
	}
	function Ya(e, t, n) {
		for (; e !== null;) {
			var r = e.alternate;
			if ((e.childLanes & t) === t ? r !== null && (r.childLanes & t) !== t && (r.childLanes |= t) : (e.childLanes |= t, r !== null && (r.childLanes |= t)), e === n) break;
			e = e.return;
		}
	}
	function Xa(e, t) {
		Wa = e, Ka = Ga = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (Is = !0), e.firstContext = null);
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
	var fo = {}, po = Gi(fo), mo = Gi(fo), ho = Gi(fo);
	function W(e) {
		if (e === fo) throw Error(i(174));
		return e;
	}
	function go(e, t) {
		switch (U(ho, t), U(mo, e), U(po, fo), e = t.nodeType, e) {
			case 9:
			case 11:
				t = (t = t.documentElement) ? t.namespaceURI : Ae(null, "");
				break;
			default: e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Ae(t, e);
		}
		Ki(po), U(po, t);
	}
	function _o() {
		Ki(po), Ki(mo), Ki(ho);
	}
	function vo(e) {
		W(ho.current);
		var t = W(po.current), n = Ae(t, e.type);
		t !== n && (U(mo, e), U(po, n));
	}
	function yo(e) {
		mo.current === e && (Ki(po), Ki(mo));
	}
	var bo = Gi(0);
	function xo(e) {
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
	var So = [];
	function Co() {
		for (var e = 0; e < So.length; e++) So[e]._workInProgressVersionPrimary = null;
		So.length = 0;
	}
	var wo = C.ReactCurrentDispatcher, To = C.ReactCurrentBatchConfig, Eo = 0, G = null, Do = null, Oo = null, ko = !1, Ao = !1, jo = 0, Mo = 0;
	function No() {
		throw Error(i(321));
	}
	function Po(e, t) {
		if (t === null) return !1;
		for (var n = 0; n < t.length && n < e.length; n++) if (!kr(e[n], t[n])) return !1;
		return !0;
	}
	function Fo(e, t, n, r, a, o) {
		if (Eo = o, G = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, wo.current = e === null || e.memoizedState === null ? vs : ys, e = n(r, a), Ao) {
			o = 0;
			do {
				if (Ao = !1, jo = 0, 25 <= o) throw Error(i(301));
				o += 1, Oo = Do = null, t.updateQueue = null, wo.current = bs, e = n(r, a);
			} while (Ao);
		}
		if (wo.current = _s, t = Do !== null && Do.next !== null, Eo = 0, Oo = Do = G = null, ko = !1, t) throw Error(i(300));
		return e;
	}
	function Io() {
		var e = jo !== 0;
		return jo = 0, e;
	}
	function Lo() {
		var e = {
			memoizedState: null,
			baseState: null,
			baseQueue: null,
			queue: null,
			next: null
		};
		return Oo === null ? G.memoizedState = Oo = e : Oo = Oo.next = e, Oo;
	}
	function Ro() {
		if (Do === null) {
			var e = G.alternate;
			e = e === null ? null : e.memoizedState;
		} else e = Do.next;
		var t = Oo === null ? G.memoizedState : Oo.next;
		if (t !== null) Oo = t, Do = e;
		else {
			if (e === null) throw Error(i(310));
			Do = e, e = {
				memoizedState: Do.memoizedState,
				baseState: Do.baseState,
				baseQueue: Do.baseQueue,
				queue: Do.queue,
				next: null
			}, Oo === null ? G.memoizedState = Oo = e : Oo = Oo.next = e;
		}
		return Oo;
	}
	function zo(e, t) {
		return typeof t == "function" ? t(e) : t;
	}
	function Bo(e) {
		var t = Ro(), n = t.queue;
		if (n === null) throw Error(i(311));
		n.lastRenderedReducer = e;
		var r = Do, a = r.baseQueue, o = n.pending;
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
				if ((Eo & d) === d) l !== null && (l = l.next = {
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
					l === null ? (c = l = f, s = r) : l = l.next = f, G.lanes |= d, Xc |= d;
				}
				u = u.next;
			} while (u !== null && u !== o);
			l === null ? s = r : l.next = c, kr(r, t.memoizedState) || (Is = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = l, n.lastRenderedState = r;
		}
		if (e = n.interleaved, e !== null) {
			a = e;
			do
				o = a.lane, G.lanes |= o, Xc |= o, a = a.next;
			while (a !== e);
		} else a === null && (n.lanes = 0);
		return [t.memoizedState, n.dispatch];
	}
	function Vo(e) {
		var t = Ro(), n = t.queue;
		if (n === null) throw Error(i(311));
		n.lastRenderedReducer = e;
		var r = n.dispatch, a = n.pending, o = t.memoizedState;
		if (a !== null) {
			n.pending = null;
			var s = a = a.next;
			do
				o = e(o, s.action), s = s.next;
			while (s !== a);
			kr(o, t.memoizedState) || (Is = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
		}
		return [o, r];
	}
	function Ho() {}
	function Uo(e, t) {
		var n = G, r = Ro(), a = t(), o = !kr(r.memoizedState, a);
		if (o && (r.memoizedState = a, Is = !0), r = r.queue, ts(Ko.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || Oo !== null && Oo.memoizedState.tag & 1) {
			if (n.flags |= 2048, Xo(9, Go.bind(null, n, r, a, t), void 0, null), Wc === null) throw Error(i(349));
			Eo & 30 || Wo(n, t, a);
		}
		return a;
	}
	function Wo(e, t, n) {
		e.flags |= 16384, e = {
			getSnapshot: t,
			value: n
		}, t = G.updateQueue, t === null ? (t = {
			lastEffect: null,
			stores: null
		}, G.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
	}
	function Go(e, t, n, r) {
		t.value = n, t.getSnapshot = r, qo(t) && Jo(e);
	}
	function Ko(e, t, n) {
		return n(function() {
			qo(t) && Jo(e);
		});
	}
	function qo(e) {
		var t = e.getSnapshot;
		e = e.value;
		try {
			var n = t();
			return !kr(e, n);
		} catch {
			return !0;
		}
	}
	function Jo(e) {
		var t = to(e, 1);
		t !== null && gl(t, e, 1, -1);
	}
	function Yo(e) {
		var t = Lo();
		return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
			pending: null,
			interleaved: null,
			lanes: 0,
			dispatch: null,
			lastRenderedReducer: zo,
			lastRenderedState: e
		}, t.queue = e, e = e.dispatch = ps.bind(null, G, e), [t.memoizedState, e];
	}
	function Xo(e, t, n, r) {
		return e = {
			tag: e,
			create: t,
			destroy: n,
			deps: r,
			next: null
		}, t = G.updateQueue, t === null ? (t = {
			lastEffect: null,
			stores: null
		}, G.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
	}
	function Zo() {
		return Ro().memoizedState;
	}
	function Qo(e, t, n, r) {
		var i = Lo();
		G.flags |= e, i.memoizedState = Xo(1 | t, n, void 0, r === void 0 ? null : r);
	}
	function $o(e, t, n, r) {
		var i = Ro();
		r = r === void 0 ? null : r;
		var a = void 0;
		if (Do !== null) {
			var o = Do.memoizedState;
			if (a = o.destroy, r !== null && Po(r, o.deps)) {
				i.memoizedState = Xo(t, n, a, r);
				return;
			}
		}
		G.flags |= e, i.memoizedState = Xo(1 | t, n, a, r);
	}
	function es(e, t) {
		return Qo(8390656, 8, e, t);
	}
	function ts(e, t) {
		return $o(2048, 8, e, t);
	}
	function ns(e, t) {
		return $o(4, 2, e, t);
	}
	function rs(e, t) {
		return $o(4, 4, e, t);
	}
	function is(e, t) {
		if (typeof t == "function") return e = e(), t(e), function() {
			t(null);
		};
		if (t != null) return e = e(), t.current = e, function() {
			t.current = null;
		};
	}
	function as(e, t, n) {
		return n = n == null ? null : n.concat([e]), $o(4, 4, is.bind(null, t, e), n);
	}
	function os() {}
	function ss(e, t) {
		var n = Ro();
		t = t === void 0 ? null : t;
		var r = n.memoizedState;
		return r !== null && t !== null && Po(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
	}
	function cs(e, t) {
		var n = Ro();
		t = t === void 0 ? null : t;
		var r = n.memoizedState;
		return r !== null && t !== null && Po(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
	}
	function ls(e, t, n) {
		return Eo & 21 ? (kr(n, t) || (n = Bt(), G.lanes |= n, Xc |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Is = !0), e.memoizedState = n);
	}
	function us(e, t) {
		var n = L;
		L = n !== 0 && 4 > n ? n : 4, e(!0);
		var r = To.transition;
		To.transition = {};
		try {
			e(!1), t();
		} finally {
			L = n, To.transition = r;
		}
	}
	function ds() {
		return Ro().memoizedState;
	}
	function fs(e, t, n) {
		var r = hl(e);
		if (n = {
			lane: r,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null
		}, ms(e)) hs(t, n);
		else if (n = eo(e, t, n, r), n !== null) {
			var i = ml();
			gl(n, e, r, i), gs(n, t, r);
		}
	}
	function ps(e, t, n) {
		var r = hl(e), i = {
			lane: r,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null
		};
		if (ms(e)) hs(t, i);
		else {
			var a = e.alternate;
			if (e.lanes === 0 && (a === null || a.lanes === 0) && (a = t.lastRenderedReducer, a !== null)) try {
				var o = t.lastRenderedState, s = a(o, n);
				if (i.hasEagerState = !0, i.eagerState = s, kr(s, o)) {
					var c = t.interleaved;
					c === null ? (i.next = i, $a(t)) : (i.next = c.next, c.next = i), t.interleaved = i;
					return;
				}
			} catch {}
			n = eo(e, t, i, r), n !== null && (i = ml(), gl(n, e, r, i), gs(n, t, r));
		}
	}
	function ms(e) {
		var t = e.alternate;
		return e === G || t !== null && t === G;
	}
	function hs(e, t) {
		Ao = ko = !0;
		var n = e.pending;
		n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
	}
	function gs(e, t, n) {
		if (n & 4194240) {
			var r = t.lanes;
			r &= e.pendingLanes, n |= r, t.lanes = n, Wt(e, n);
		}
	}
	var _s = {
		readContext: Za,
		useCallback: No,
		useContext: No,
		useEffect: No,
		useImperativeHandle: No,
		useInsertionEffect: No,
		useLayoutEffect: No,
		useMemo: No,
		useReducer: No,
		useRef: No,
		useState: No,
		useDebugValue: No,
		useDeferredValue: No,
		useTransition: No,
		useMutableSource: No,
		useSyncExternalStore: No,
		useId: No,
		unstable_isNewReconciler: !1
	}, vs = {
		readContext: Za,
		useCallback: function(e, t) {
			return Lo().memoizedState = [e, t === void 0 ? null : t], e;
		},
		useContext: Za,
		useEffect: es,
		useImperativeHandle: function(e, t, n) {
			return n = n == null ? null : n.concat([e]), Qo(4194308, 4, is.bind(null, t, e), n);
		},
		useLayoutEffect: function(e, t) {
			return Qo(4194308, 4, e, t);
		},
		useInsertionEffect: function(e, t) {
			return Qo(4, 2, e, t);
		},
		useMemo: function(e, t) {
			var n = Lo();
			return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
		},
		useReducer: function(e, t, n) {
			var r = Lo();
			return t = n === void 0 ? t : n(t), r.memoizedState = r.baseState = t, e = {
				pending: null,
				interleaved: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: e,
				lastRenderedState: t
			}, r.queue = e, e = e.dispatch = fs.bind(null, G, e), [r.memoizedState, e];
		},
		useRef: function(e) {
			var t = Lo();
			return e = { current: e }, t.memoizedState = e;
		},
		useState: Yo,
		useDebugValue: os,
		useDeferredValue: function(e) {
			return Lo().memoizedState = e;
		},
		useTransition: function() {
			var e = Yo(!1), t = e[0];
			return e = us.bind(null, e[1]), Lo().memoizedState = e, [t, e];
		},
		useMutableSource: function() {},
		useSyncExternalStore: function(e, t, n) {
			var r = G, a = Lo();
			if (Ta) {
				if (n === void 0) throw Error(i(407));
				n = n();
			} else {
				if (n = t(), Wc === null) throw Error(i(349));
				Eo & 30 || Wo(r, t, n);
			}
			a.memoizedState = n;
			var o = {
				value: n,
				getSnapshot: t
			};
			return a.queue = o, es(Ko.bind(null, r, o, e), [e]), r.flags |= 2048, Xo(9, Go.bind(null, r, o, n, t), void 0, null), n;
		},
		useId: function() {
			var e = Lo(), t = Wc.identifierPrefix;
			if (Ta) {
				var n = va, r = _a;
				n = (r & ~(1 << 32 - kt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = jo++, 0 < n && (t += "H" + n.toString(32)), t += ":";
			} else n = Mo++, t = ":" + t + "r" + n.toString(32) + ":";
			return e.memoizedState = t;
		},
		unstable_isNewReconciler: !1
	}, ys = {
		readContext: Za,
		useCallback: ss,
		useContext: Za,
		useEffect: ts,
		useImperativeHandle: as,
		useInsertionEffect: ns,
		useLayoutEffect: rs,
		useMemo: cs,
		useReducer: Bo,
		useRef: Zo,
		useState: function() {
			return Bo(zo);
		},
		useDebugValue: os,
		useDeferredValue: function(e) {
			return ls(Ro(), Do.memoizedState, e);
		},
		useTransition: function() {
			return [Bo(zo)[0], Ro().memoizedState];
		},
		useMutableSource: Ho,
		useSyncExternalStore: Uo,
		useId: ds,
		unstable_isNewReconciler: !1
	}, bs = {
		readContext: Za,
		useCallback: ss,
		useContext: Za,
		useEffect: ts,
		useImperativeHandle: as,
		useInsertionEffect: ns,
		useLayoutEffect: rs,
		useMemo: cs,
		useReducer: Vo,
		useRef: Zo,
		useState: function() {
			return Vo(zo);
		},
		useDebugValue: os,
		useDeferredValue: function(e) {
			var t = Ro();
			return Do === null ? t.memoizedState = e : ls(t, Do.memoizedState, e);
		},
		useTransition: function() {
			return [Vo(zo)[0], Ro().memoizedState];
		},
		useMutableSource: Ho,
		useSyncExternalStore: Uo,
		useId: ds,
		unstable_isNewReconciler: !1
	};
	function xs(e, t) {
		if (e && e.defaultProps) {
			for (var n in t = P({}, t), e = e.defaultProps, e) t[n] === void 0 && (t[n] = e[n]);
			return t;
		}
		return t;
	}
	function Ss(e, t, n, r) {
		t = e.memoizedState, n = n(r, t), n = n == null ? t : P({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
	}
	var Cs = {
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
	function ws(e, t, n, r, i, a, o) {
		return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, a, o) : t.prototype && t.prototype.isPureReactComponent ? !Ar(n, r) || !Ar(i, a) : !0;
	}
	function Ts(e, t, n) {
		var r = !1, i = qi, a = t.contextType;
		return typeof a == "object" && a ? a = Za(a) : (i = Qi(t) ? Xi : Ji.current, r = t.contextTypes, a = (r = r != null) ? Zi(e, i) : qi), t = new t(n, a), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Cs, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = a), t;
	}
	function Es(e, t, n, r) {
		e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Cs.enqueueReplaceState(t, t.state, null);
	}
	function Ds(e, t, n, r) {
		var i = e.stateNode;
		i.props = n, i.state = e.memoizedState, i.refs = {}, ro(e);
		var a = t.contextType;
		typeof a == "object" && a ? i.context = Za(a) : (a = Qi(t) ? Xi : Ji.current, i.context = Zi(e, a)), i.state = e.memoizedState, a = t.getDerivedStateFromProps, typeof a == "function" && (Ss(e, t, a, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && Cs.enqueueReplaceState(i, i.state, null), lo(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308);
	}
	function Os(e, t) {
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
	function ks(e, t, n) {
		return {
			value: e,
			source: null,
			stack: n ?? null,
			digest: t ?? null
		};
	}
	function As(e, t) {
		try {
			console.error(t.value);
		} catch (e) {
			setTimeout(function() {
				throw e;
			});
		}
	}
	var js = typeof WeakMap == "function" ? WeakMap : Map;
	function K(e, t, n) {
		n = ao(-1, n), n.tag = 3, n.payload = { element: null };
		var r = t.value;
		return n.callback = function() {
			il || (il = !0, al = r), As(e, t);
		}, n;
	}
	function Ms(e, t, n) {
		n = ao(-1, n), n.tag = 3;
		var r = e.type.getDerivedStateFromError;
		if (typeof r == "function") {
			var i = t.value;
			n.payload = function() {
				return r(i);
			}, n.callback = function() {
				As(e, t);
			};
		}
		var a = e.stateNode;
		return a !== null && typeof a.componentDidCatch == "function" && (n.callback = function() {
			As(e, t), typeof r != "function" && (ol === null ? ol = /* @__PURE__ */ new Set([this]) : ol.add(this));
			var n = t.stack;
			this.componentDidCatch(t.value, { componentStack: n === null ? "" : n });
		}), n;
	}
	function Ns(e, t, n) {
		var r = e.pingCache;
		if (r === null) {
			r = e.pingCache = new js();
			var i = /* @__PURE__ */ new Set();
			r.set(t, i);
		} else i = r.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), r.set(t, i));
		i.has(n) || (i.add(n), e = Bl.bind(null, e, t, n), t.then(e, e));
	}
	function Ps(e) {
		do {
			var t;
			if ((t = e.tag === 13) && (t = e.memoizedState, t = t === null || t.dehydrated !== null), t) return e;
			e = e.return;
		} while (e !== null);
		return null;
	}
	function Fs(e, t, n, r, i) {
		return e.mode & 1 ? (e.flags |= 65536, e.lanes = i, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = ao(-1, 1), t.tag = 2, oo(n, t, 1))), n.lanes |= 1), e);
	}
	var q = C.ReactCurrentOwner, Is = !1;
	function Ls(e, t, n, r) {
		t.child = e === null ? Ha(t, null, n, r) : Va(t, e.child, n, r);
	}
	function Rs(e, t, n, r, i) {
		n = n.render;
		var a = t.ref;
		return Xa(t, i), r = Fo(e, t, n, r, a, i), n = Io(), e !== null && !Is ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, rc(e, t, i)) : (Ta && n && xa(t), t.flags |= 1, Ls(e, t, r, i), t.child);
	}
	function zs(e, t, n, r, i) {
		if (e === null) {
			var a = n.type;
			return typeof a == "function" && !Jl(a) && a.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = a, Bs(e, t, a, r, i)) : (e = Zl(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
		}
		if (a = e.child, (e.lanes & i) === 0) {
			var o = a.memoizedProps;
			if (n = n.compare, n = n === null ? Ar : n, n(o, r) && e.ref === t.ref) return rc(e, t, i);
		}
		return t.flags |= 1, e = Xl(a, r), e.ref = t.ref, e.return = t, t.child = e;
	}
	function Bs(e, t, n, r, i) {
		if (e !== null) {
			var a = e.memoizedProps;
			if (Ar(a, r) && e.ref === t.ref) {
				if (Is = !1, t.pendingProps = r = a, (e.lanes & i) !== 0) e.flags & 131072 && (Is = !0);
				else return t.lanes = e.lanes, rc(e, t, i);
			}
		}
		return Us(e, t, n, r, i);
	}
	function Vs(e, t, n) {
		var r = t.pendingProps, i = r.children, a = e === null ? null : e.memoizedState;
		if (r.mode === "hidden") {
			if (!(t.mode & 1)) t.memoizedState = {
				baseLanes: 0,
				cachePool: null,
				transitions: null
			}, U(qc, Kc), Kc |= n;
			else {
				if (!(n & 1073741824)) return e = a === null ? n : a.baseLanes | n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
					baseLanes: e,
					cachePool: null,
					transitions: null
				}, t.updateQueue = null, U(qc, Kc), Kc |= e, null;
				t.memoizedState = {
					baseLanes: 0,
					cachePool: null,
					transitions: null
				}, r = a === null ? n : a.baseLanes, U(qc, Kc), Kc |= r;
			}
		} else a === null ? r = n : (r = a.baseLanes | n, t.memoizedState = null), U(qc, Kc), Kc |= r;
		return Ls(e, t, i, n), t.child;
	}
	function Hs(e, t) {
		var n = t.ref;
		(e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
	}
	function Us(e, t, n, r, i) {
		var a = Qi(n) ? Xi : Ji.current;
		return a = Zi(t, a), Xa(t, i), n = Fo(e, t, n, r, a, i), r = Io(), e !== null && !Is ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, rc(e, t, i)) : (Ta && r && xa(t), t.flags |= 1, Ls(e, t, n, i), t.child);
	}
	function Ws(e, t, n, r, i) {
		if (Qi(n)) {
			var a = !0;
			na(t);
		} else a = !1;
		if (Xa(t, i), t.stateNode === null) nc(e, t), Ts(t, n, r), Ds(t, n, r, i), r = !0;
		else if (e === null) {
			var o = t.stateNode, s = t.memoizedProps;
			o.props = s;
			var c = o.context, l = n.contextType;
			typeof l == "object" && l ? l = Za(l) : (l = Qi(n) ? Xi : Ji.current, l = Zi(t, l));
			var u = n.getDerivedStateFromProps, d = typeof u == "function" || typeof o.getSnapshotBeforeUpdate == "function";
			d || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (s !== r || c !== l) && Es(t, o, r, l), no = !1;
			var f = t.memoizedState;
			o.state = f, lo(t, r, o, i), c = t.memoizedState, s !== r || f !== c || Yi.current || no ? (typeof u == "function" && (Ss(t, n, u, r), c = t.memoizedState), (s = no || ws(t, n, s, r, f, c, l)) ? (d || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = c), o.props = r, o.state = c, o.context = l, r = s) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
		} else {
			o = t.stateNode, io(e, t), s = t.memoizedProps, l = t.type === t.elementType ? s : xs(t.type, s), o.props = l, d = t.pendingProps, f = o.context, c = n.contextType, typeof c == "object" && c ? c = Za(c) : (c = Qi(n) ? Xi : Ji.current, c = Zi(t, c));
			var p = n.getDerivedStateFromProps;
			(u = typeof p == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (s !== d || f !== c) && Es(t, o, r, c), no = !1, f = t.memoizedState, o.state = f, lo(t, r, o, i);
			var m = t.memoizedState;
			s !== d || f !== m || Yi.current || no ? (typeof p == "function" && (Ss(t, n, p, r), m = t.memoizedState), (l = no || ws(t, n, l, r, f, m, c) || !1) ? (u || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, m, c), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, m, c)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = m), o.props = r, o.state = m, o.context = c, r = l) : (typeof o.componentDidUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1);
		}
		return Gs(e, t, n, r, a, i);
	}
	function Gs(e, t, n, r, i, a) {
		Hs(e, t);
		var o = !!(t.flags & 128);
		if (!r && !o) return i && ra(t, n, !1), rc(e, t, a);
		r = t.stateNode, q.current = t;
		var s = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
		return t.flags |= 1, e !== null && o ? (t.child = Va(t, e.child, null, a), t.child = Va(t, null, s, a)) : Ls(e, t, s, a), t.memoizedState = r.state, i && ra(t, n, !0), t.child;
	}
	function J(e) {
		var t = e.stateNode;
		t.pendingContext ? ea(e, t.pendingContext, t.pendingContext !== t.context) : t.context && ea(e, t.context, !1), go(e, t.containerInfo);
	}
	function Ks(e, t, n, r, i) {
		return Pa(), Fa(i), t.flags |= 256, Ls(e, t, n, r), t.child;
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
		var r = t.pendingProps, i = bo.current, a = !1, o = !!(t.flags & 128), s;
		if ((s = o) || (s = e !== null && e.memoizedState === null ? !1 : !!(i & 2)), s ? (a = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), U(bo, i & 1), e === null) return Aa(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.lanes = t.mode & 1 ? e.data === "$!" ? 8 : 1073741824 : 1, null) : (o = r.children, e = r.fallback, a ? (r = t.mode, a = t.child, o = {
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
		if (n) return t.flags & 256 ? (t.flags &= -257, r = ks(Error(i(422))), Zs(e, t, s, r)) : t.memoizedState === null ? (o = r.fallback, a = t.mode, r = $l({
			mode: "visible",
			children: r.children
		}, a, 0, null), o = Ql(o, a, s, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && Va(t, e.child, null, s), t.child.memoizedState = Js(s), t.memoizedState = qs, o) : (t.child = e.child, t.flags |= 128, null);
		if (!(t.mode & 1)) return Zs(e, t, s, null);
		if (a.data === "$!") {
			if (r = a.nextSibling && a.nextSibling.dataset, r) var c = r.dgst;
			return r = c, o = Error(i(419)), r = ks(o, r, void 0), Zs(e, t, s, r);
		}
		if (c = (s & e.childLanes) !== 0, Is || c) {
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
			return kl(), r = ks(Error(i(421))), Zs(e, t, s, r);
		}
		return a.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Hl.bind(null, e), a._reactRetry = t, null) : (e = o.treeContext, wa = Ai(a.nextSibling), Ca = t, Ta = !0, Ea = null, e !== null && (ma[ha++] = _a, ma[ha++] = va, ma[ha++] = ga, _a = e.id, va = e.overflow, ga = t), t = Xs(t, r.children), t.flags |= 4096, t);
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
		if (Ls(e, t, r.children, n), r = bo.current, r & 2) r = r & 1 | 2, t.flags |= 128;
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
		if (U(bo, r), !(t.mode & 1)) t.memoizedState = null;
		else switch (i) {
			case "forwards":
				for (n = t.child, i = null; n !== null;) e = n.alternate, e !== null && xo(e) === null && (i = n), n = n.sibling;
				n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), ec(t, !1, i, n, a);
				break;
			case "backwards":
				for (n = null, i = t.child, t.child = null; i !== null;) {
					if (e = i.alternate, e !== null && xo(e) === null) {
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
				J(t), Pa();
				break;
			case 5:
				vo(t);
				break;
			case 1:
				Qi(t.type) && na(t);
				break;
			case 4:
				go(t, t.stateNode.containerInfo);
				break;
			case 10:
				var r = t.type._context, i = t.memoizedProps.value;
				U(Ua, r._currentValue), r._currentValue = i;
				break;
			case 13:
				if (r = t.memoizedState, r !== null) return r.dehydrated === null ? (n & t.child.childLanes) === 0 ? (U(bo, bo.current & 1), e = rc(e, t, n), e === null ? null : e.sibling) : Ys(e, t, n) : (U(bo, bo.current & 1), t.flags |= 128, null);
				U(bo, bo.current & 1);
				break;
			case 19:
				if (r = (n & t.childLanes) !== 0, e.flags & 128) {
					if (r) return tc(e, t, n);
					t.flags |= 128;
				}
				if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), U(bo, bo.current), r) break;
				return null;
			case 22:
			case 23: return t.lanes = 0, Vs(e, t, n);
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
			e = t.stateNode, W(po.current);
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
				default: typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = bi);
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
					} else u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, c = c ? c.__html : void 0, l != null && c !== l && (a ||= []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (a ||= []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (s.hasOwnProperty(u) ? (l != null && u === "onScroll" && H("scroll", e), a || c === l || (a = [])) : (a ||= []).push(u, l));
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
		if (!Ta) switch (e.tailMode) {
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
		switch (Sa(t), t.tag) {
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
			case 1: return Qi(t.type) && $i(), lc(t), null;
			case 3: return r = t.stateNode, _o(), Ki(Yi), Ki(Ji), Co(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Ma(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Ea !== null && (yl(Ea), Ea = null))), lc(t), null;
			case 5:
				yo(t);
				var a = W(ho.current);
				if (n = t.type, e !== null && t.stateNode != null) oc(e, t, n, r, a), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
				else {
					if (!r) {
						if (t.stateNode === null) throw Error(i(166));
						return lc(t), null;
					}
					if (e = W(po.current), Ma(t)) {
						r = t.stateNode, n = t.type;
						var o = t.memoizedProps;
						switch (r[Ni] = t, r[Pi] = o, e = !!(t.mode & 1), n) {
							case "dialog":
								H("cancel", r), H("close", r);
								break;
							case "iframe":
							case "object":
							case "embed":
								H("load", r);
								break;
							case "video":
							case "audio":
								for (a = 0; a < ri.length; a++) H(ri[a], r);
								break;
							case "source":
								H("error", r);
								break;
							case "img":
							case "image":
							case "link":
								H("error", r), H("load", r);
								break;
							case "details":
								H("toggle", r);
								break;
							case "input":
								ye(r, o), H("invalid", r);
								break;
							case "select":
								r._wrapperState = { wasMultiple: !!o.multiple }, H("invalid", r);
								break;
							case "textarea": F(r, o), H("invalid", r);
						}
						for (var c in ze(n, o), a = null, o) if (o.hasOwnProperty(c)) {
							var l = o[c];
							c === "children" ? typeof l == "string" ? r.textContent !== l && (!0 !== o.suppressHydrationWarning && yi(r.textContent, l, e), a = ["children", l]) : typeof l == "number" && r.textContent !== "" + l && (!0 !== o.suppressHydrationWarning && yi(r.textContent, l, e), a = ["children", "" + l]) : s.hasOwnProperty(c) && l != null && c === "onScroll" && H("scroll", r);
						}
						switch (n) {
							case "input":
								he(r), Se(r, o, !0);
								break;
							case "textarea":
								he(r), Oe(r);
								break;
							case "select":
							case "option": break;
							default: typeof o.onClick == "function" && (r.onclick = bi);
						}
						r = a, t.updateQueue = r, r !== null && (t.flags |= 4);
					} else {
						c = a.nodeType === 9 ? a : a.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = ke(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = c.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = c.createElement(n, { is: r.is }) : (e = c.createElement(n), n === "select" && (c = e, r.multiple ? c.multiple = !0 : r.size && (c.size = r.size))) : e = c.createElementNS(e, n), e[Ni] = t, e[Pi] = r, ac(e, t, !1, !1), t.stateNode = e;
						a: {
							switch (c = Be(n, r), n) {
								case "dialog":
									H("cancel", e), H("close", e), a = r;
									break;
								case "iframe":
								case "object":
								case "embed":
									H("load", e), a = r;
									break;
								case "video":
								case "audio":
									for (a = 0; a < ri.length; a++) H(ri[a], e);
									a = r;
									break;
								case "source":
									H("error", e), a = r;
									break;
								case "img":
								case "image":
								case "link":
									H("error", e), H("load", e), a = r;
									break;
								case "details":
									H("toggle", e), a = r;
									break;
								case "input":
									ye(e, r), a = ve(e, r), H("invalid", e);
									break;
								case "option":
									a = r;
									break;
								case "select":
									e._wrapperState = { wasMultiple: !!r.multiple }, a = P({}, r, { value: void 0 }), H("invalid", e);
									break;
								case "textarea":
									F(e, r), a = Ee(e, r), H("invalid", e);
									break;
								default: a = r;
							}
							for (o in ze(n, a), l = a, l) if (l.hasOwnProperty(o)) {
								var u = l[o];
								o === "style" ? Le(e, u) : o === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, u != null && Me(e, u)) : o === "children" ? typeof u == "string" ? (n !== "textarea" || u !== "") && Ne(e, u) : typeof u == "number" && Ne(e, "" + u) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (s.hasOwnProperty(o) ? u != null && o === "onScroll" && H("scroll", e) : u != null && S(e, o, u, c));
							}
							switch (n) {
								case "input":
									he(e), Se(e, r, !1);
									break;
								case "textarea":
									he(e), Oe(e);
									break;
								case "option":
									r.value != null && e.setAttribute("value", "" + fe(r.value));
									break;
								case "select":
									e.multiple = !!r.multiple, o = r.value, o == null ? r.defaultValue != null && Te(e, !!r.multiple, r.defaultValue, !0) : Te(e, !!r.multiple, o, !1);
									break;
								default: typeof a.onClick == "function" && (e.onclick = bi);
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
					if (n = W(ho.current), W(po.current), Ma(t)) {
						if (r = t.stateNode, n = t.memoizedProps, r[Ni] = t, (o = r.nodeValue !== n) && (e = Ca, e !== null)) switch (e.tag) {
							case 3:
								yi(r.nodeValue, n, !!(e.mode & 1));
								break;
							case 5: !0 !== e.memoizedProps.suppressHydrationWarning && yi(r.nodeValue, n, !!(e.mode & 1));
						}
						o && (t.flags |= 4);
					} else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Ni] = t, t.stateNode = r;
				}
				return lc(t), null;
			case 13:
				if (Ki(bo), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
					if (Ta && wa !== null && t.mode & 1 && !(t.flags & 128)) Na(), Pa(), t.flags |= 98560, o = !1;
					else if (o = Ma(t), r !== null && r.dehydrated !== null) {
						if (e === null) {
							if (!o) throw Error(i(318));
							if (o = t.memoizedState, o = o === null ? null : o.dehydrated, !o) throw Error(i(317));
							o[Ni] = t;
						} else Pa(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
						lc(t), o = !1;
					} else Ea !== null && (yl(Ea), Ea = null), o = !0;
					if (!o) return t.flags & 65536 ? t : null;
				}
				return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || bo.current & 1 ? Jc === 0 && (Jc = 3) : kl())), t.updateQueue !== null && (t.flags |= 4), lc(t), null);
			case 4: return _o(), e === null && li(t.stateNode.containerInfo), lc(t), null;
			case 10: return Ja(t.type._context), lc(t), null;
			case 17: return Qi(t.type) && $i(), lc(t), null;
			case 19:
				if (Ki(bo), o = t.memoizedState, o === null) return lc(t), null;
				if (r = !!(t.flags & 128), c = o.rendering, c === null) {
					if (r) cc(o, !1);
					else {
						if (Jc !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null;) {
							if (c = xo(e), c !== null) {
								for (t.flags |= 128, cc(o, !1), r = c.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;) o = n, e = r, o.flags &= 14680066, c = o.alternate, c === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = c.childLanes, o.lanes = c.lanes, o.child = c.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = c.memoizedProps, o.memoizedState = c.memoizedState, o.updateQueue = c.updateQueue, o.type = c.type, e = c.dependencies, o.dependencies = e === null ? null : {
									lanes: e.lanes,
									firstContext: e.firstContext
								}), n = n.sibling;
								return U(bo, bo.current & 1 | 2), t.child;
							}
							e = e.sibling;
						}
						o.tail !== null && I() > nl && (t.flags |= 128, r = !0, cc(o, !1), t.lanes = 4194304);
					}
				} else {
					if (!r) {
						if (e = xo(c), e !== null) {
							if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), cc(o, !0), o.tail === null && o.tailMode === "hidden" && !c.alternate && !Ta) return lc(t), null;
						} else 2 * I() - o.renderingStartTime > nl && n !== 1073741824 && (t.flags |= 128, r = !0, cc(o, !1), t.lanes = 4194304);
					}
					o.isBackwards ? (c.sibling = t.child, t.child = c) : (n = o.last, n === null ? t.child = c : n.sibling = c, o.last = c);
				}
				return o.tail === null ? (lc(t), null) : (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = I(), t.sibling = null, n = bo.current, U(bo, r ? n & 1 | 2 : n & 1), t);
			case 22:
			case 23: return Tl(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Kc & 1073741824 && (lc(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : lc(t), null;
			case 24: return null;
			case 25: return null;
		}
		throw Error(i(156, t.tag));
	}
	function dc(e, t) {
		switch (Sa(t), t.tag) {
			case 1: return Qi(t.type) && $i(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 3: return _o(), Ki(Yi), Ki(Ji), Co(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
			case 5: return yo(t), null;
			case 13:
				if (Ki(bo), e = t.memoizedState, e !== null && e.dehydrated !== null) {
					if (t.alternate === null) throw Error(i(340));
					Pa();
				}
				return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 19: return Ki(bo), null;
			case 4: return _o(), null;
			case 10: return Ja(t.type._context), null;
			case 22:
			case 23: return Tl(), null;
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
				zl(e, t, n);
			}
			else n.current = null;
		}
	}
	function gc(e, t, n) {
		try {
			n();
		} catch (n) {
			zl(e, t, n);
		}
	}
	var _c = !1;
	function vc(e, t) {
		if (xi = gn, e = Pr(), Fr(e)) {
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
		for (Si = {
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
							v.__reactInternalSnapshotBeforeUpdate = v.getSnapshotBeforeUpdate(t.elementType === t.type ? g : xs(t.type, g), _);
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
				zl(t, t.return, e);
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
				Dc !== null && (Oc ? (e = Dc, n = n.stateNode, e.nodeType === 8 ? ki(e.parentNode, n) : e.nodeType === 1 && ki(e, n), mn(e)) : ki(Dc, n.stateNode));
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
					zl(n, t, e);
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
				zl(a, t, e);
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
						zl(e, e.return, t);
					}
					try {
						yc(5, e, e.return);
					} catch (t) {
						zl(e, e.return, t);
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
						zl(e, e.return, t);
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
								De(a, o);
								break;
							case "select":
								var p = a._wrapperState.wasMultiple;
								a._wrapperState.wasMultiple = !!o.multiple;
								var m = o.value;
								m == null ? p !== !!o.multiple && (o.defaultValue == null ? Te(a, !!o.multiple, o.multiple ? [] : "", !1) : Te(a, !!o.multiple, o.defaultValue, !0)) : Te(a, !!o.multiple, m, !1);
						}
						a[Pi] = o;
					} catch (t) {
						zl(e, e.return, t);
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
						zl(e, e.return, t);
					}
				}
				break;
			case 3:
				if (Mc(t, e), Pc(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
					mn(t.containerInfo);
				} catch (t) {
					zl(e, e.return, t);
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
											zl(r, n, e);
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
				zl(e, e.return, t);
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
									var a = t.elementType === t.type ? n.memoizedProps : xs(t.type, n.memoizedProps);
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
					zl(t, t.return, e);
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
							xc(t);
						} catch (e) {
							zl(t, a, e);
						}
						break;
					case 5:
						var o = t.return;
						try {
							xc(t);
						} catch (e) {
							zl(t, o, e);
						}
				}
			} catch (e) {
				zl(t, t.return, e);
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
	var Bc = Math.ceil, Vc = C.ReactCurrentDispatcher, Hc = C.ReactCurrentOwner, Uc = C.ReactCurrentBatchConfig, X = 0, Wc = null, Gc = null, Z = 0, Kc = 0, qc = Gi(0), Jc = 0, Yc = null, Xc = 0, Zc = 0, Qc = 0, $c = null, el = null, tl = 0, nl = Infinity, rl = null, il = !1, al = null, ol = null, sl = !1, cl = null, ll = 0, ul = 0, dl = null, fl = -1, pl = 0;
	function ml() {
		return X & 6 ? I() : fl === -1 ? fl = I() : fl;
	}
	function hl(e) {
		return e.mode & 1 ? X & 2 && Z !== 0 ? Z & -Z : Ia.transition === null ? (e = L, e === 0 && (e = window.event, e = e === void 0 ? 16 : Sn(e.type)), e) : (pl === 0 && (pl = Bt()), pl) : 1;
	}
	function gl(e, t, n, r) {
		if (50 < ul) throw ul = 0, dl = null, Error(i(185));
		Ht(e, n, r), X & 2 && e === Wc || (e === Wc && (!(X & 2) && (Zc |= n), Jc === 4 && xl(e, Z)), Q(e, r), n === 1 && X === 0 && !(t.mode & 1) && (nl = I() + 500, aa && la()));
	}
	function Q(e, t) {
		var n = e.callbackNode;
		Rt(e, t);
		var r = It(e, e === Wc ? Z : 0);
		if (r === 0) n !== null && _t(n), e.callbackNode = null, e.callbackPriority = 0;
		else if (t = r & -r, e.callbackPriority !== t) {
			if (n != null && _t(n), t === 1) e.tag === 0 ? ca(Sl.bind(null, e)) : sa(Sl.bind(null, e)), Di(function() {
				!(X & 6) && la();
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
		if (fl = -1, pl = 0, X & 6) throw Error(i(327));
		var n = e.callbackNode;
		if (Ll() && e.callbackNode !== n) return null;
		var r = It(e, e === Wc ? Z : 0);
		if (r === 0) return null;
		if (r & 30 || (r & e.expiredLanes) !== 0 || t) t = Al(e, r);
		else {
			t = r;
			var a = X;
			X |= 2;
			var o = Ol();
			(Wc !== e || Z !== t) && (rl = null, nl = I() + 500, El(e, t));
			do
				try {
					Ml();
					break;
				} catch (t) {
					Dl(e, t);
				}
			while (1);
			qa(), Vc.current = o, X = a, Gc === null ? (Wc = null, Z = 0, t = Jc) : t = 0;
		}
		if (t !== 0) {
			if (t === 2 && (a = zt(e), a !== 0 && (r = a, t = vl(e, a))), t === 1) throw n = Yc, El(e, 0), xl(e, r), Q(e, I()), n;
			if (t === 6) xl(e, r);
			else {
				if (a = e.current.alternate, !(r & 30) && !bl(a) && (t = Al(e, r), t === 2 && (o = zt(e), o !== 0 && (r = o, t = vl(e, o))), t === 1)) throw n = Yc, El(e, 0), xl(e, r), Q(e, I()), n;
				switch (e.finishedWork = a, e.finishedLanes = r, t) {
					case 0:
					case 1: throw Error(i(345));
					case 2:
						Fl(e, el, rl);
						break;
					case 3:
						if (xl(e, r), (r & 130023424) === r && (t = tl + 500 - I(), 10 < t)) {
							if (It(e, 0) !== 0) break;
							if (a = e.suspendedLanes, (a & r) !== r) {
								ml(), e.pingedLanes |= e.suspendedLanes & a;
								break;
							}
							e.timeoutHandle = wi(Fl.bind(null, e, el, rl), t);
							break;
						}
						Fl(e, el, rl);
						break;
					case 4:
						if (xl(e, r), (r & 4194240) === r) break;
						for (t = e.eventTimes, a = -1; 0 < r;) {
							var s = 31 - kt(r);
							o = 1 << s, s = t[s], s > a && (a = s), r &= ~o;
						}
						if (r = a, r = I() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Bc(r / 1960)) - r, 10 < r) {
							e.timeoutHandle = wi(Fl.bind(null, e, el, rl), r);
							break;
						}
						Fl(e, el, rl);
						break;
					case 5:
						Fl(e, el, rl);
						break;
					default: throw Error(i(329));
				}
			}
		}
		return Q(e, I()), e.callbackNode === n ? _l.bind(null, e) : null;
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
	function xl(e, t) {
		for (t &= ~Qc, t &= ~Zc, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
			var n = 31 - kt(t), r = 1 << n;
			e[n] = -1, t &= ~r;
		}
	}
	function Sl(e) {
		if (X & 6) throw Error(i(327));
		Ll();
		var t = It(e, 0);
		if (!(t & 1)) return Q(e, I()), null;
		var n = Al(e, t);
		if (e.tag !== 0 && n === 2) {
			var r = zt(e);
			r !== 0 && (t = r, n = vl(e, r));
		}
		if (n === 1) throw n = Yc, El(e, 0), xl(e, t), Q(e, I()), n;
		if (n === 6) throw Error(i(345));
		return e.finishedWork = e.current.alternate, e.finishedLanes = t, Fl(e, el, rl), Q(e, I()), null;
	}
	function Cl(e, t) {
		var n = X;
		X |= 1;
		try {
			return e(t);
		} finally {
			X = n, X === 0 && (nl = I() + 500, aa && la());
		}
	}
	function wl(e) {
		cl !== null && cl.tag === 0 && !(X & 6) && Ll();
		var t = X;
		X |= 1;
		var n = Uc.transition, r = L;
		try {
			if (Uc.transition = null, L = 1, e) return e();
		} finally {
			L = r, Uc.transition = n, X = t, !(X & 6) && la();
		}
	}
	function Tl() {
		Kc = qc.current, Ki(qc);
	}
	function El(e, t) {
		e.finishedWork = null, e.finishedLanes = 0;
		var n = e.timeoutHandle;
		if (n !== -1 && (e.timeoutHandle = -1, Ti(n)), Gc !== null) for (n = Gc.return; n !== null;) {
			var r = n;
			switch (Sa(r), r.tag) {
				case 1:
					r = r.type.childContextTypes, r != null && $i();
					break;
				case 3:
					_o(), Ki(Yi), Ki(Ji), Co();
					break;
				case 5:
					yo(r);
					break;
				case 4:
					_o();
					break;
				case 13:
					Ki(bo);
					break;
				case 19:
					Ki(bo);
					break;
				case 10:
					Ja(r.type._context);
					break;
				case 22:
				case 23: Tl();
			}
			n = n.return;
		}
		if (Wc = e, Gc = e = Xl(e.current, null), Z = Kc = t, Jc = 0, Yc = null, Qc = Zc = Xc = 0, el = $c = null, Qa !== null) {
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
	function Dl(e, t) {
		do {
			var n = Gc;
			try {
				if (qa(), wo.current = _s, ko) {
					for (var r = G.memoizedState; r !== null;) {
						var a = r.queue;
						a !== null && (a.pending = null), r = r.next;
					}
					ko = !1;
				}
				if (Eo = 0, Oo = Do = G = null, Ao = !1, jo = 0, Hc.current = null, n === null || n.return === null) {
					Jc = 1, Yc = t, Gc = null;
					break;
				}
				a: {
					var o = e, s = n.return, c = n, l = t;
					if (t = Z, c.flags |= 32768, typeof l == "object" && l && typeof l.then == "function") {
						var u = l, d = c, f = d.tag;
						if (!(d.mode & 1) && (f === 0 || f === 11 || f === 15)) {
							var p = d.alternate;
							p ? (d.updateQueue = p.updateQueue, d.memoizedState = p.memoizedState, d.lanes = p.lanes) : (d.updateQueue = null, d.memoizedState = null);
						}
						var m = Ps(s);
						if (m !== null) {
							m.flags &= -257, Fs(m, s, c, o, t), m.mode & 1 && Ns(o, u, t), t = m, l = u;
							var h = t.updateQueue;
							if (h === null) {
								var g = /* @__PURE__ */ new Set();
								g.add(l), t.updateQueue = g;
							} else h.add(l);
							break a;
						}
						if (!(t & 1)) {
							Ns(o, u, t), kl();
							break a;
						}
						l = Error(i(426));
					} else if (Ta && c.mode & 1) {
						var _ = Ps(s);
						if (_ !== null) {
							!(_.flags & 65536) && (_.flags |= 256), Fs(_, s, c, o, t), Fa(Os(l, c));
							break a;
						}
					}
					o = l = Os(l, c), Jc !== 4 && (Jc = 2), $c === null ? $c = [o] : $c.push(o), o = s;
					do {
						switch (o.tag) {
							case 3:
								o.flags |= 65536, t &= -t, o.lanes |= t;
								var v = K(o, l, t);
								co(o, v);
								break a;
							case 1:
								c = l;
								var y = o.type, b = o.stateNode;
								if (!(o.flags & 128) && (typeof y.getDerivedStateFromError == "function" || b !== null && typeof b.componentDidCatch == "function" && (ol === null || !ol.has(b)))) {
									o.flags |= 65536, t &= -t, o.lanes |= t;
									var x = Ms(o, c, t);
									co(o, x);
									break a;
								}
						}
						o = o.return;
					} while (o !== null);
				}
				Pl(n);
			} catch (e) {
				t = e, Gc === n && n !== null && (Gc = n = n.return);
				continue;
			}
			break;
		} while (1);
	}
	function Ol() {
		var e = Vc.current;
		return Vc.current = _s, e === null ? _s : e;
	}
	function kl() {
		(Jc === 0 || Jc === 3 || Jc === 2) && (Jc = 4), Wc === null || !(Xc & 268435455) && !(Zc & 268435455) || xl(Wc, Z);
	}
	function Al(e, t) {
		var n = X;
		X |= 2;
		var r = Ol();
		(Wc !== e || Z !== t) && (rl = null, El(e, t));
		do
			try {
				jl();
				break;
			} catch (t) {
				Dl(e, t);
			}
		while (1);
		if (qa(), X = n, Vc.current = r, Gc !== null) throw Error(i(261));
		return Wc = null, Z = 0, Jc;
	}
	function jl() {
		for (; Gc !== null;) Nl(Gc);
	}
	function Ml() {
		for (; Gc !== null && !vt();) Nl(Gc);
	}
	function Nl(e) {
		var t = Wl(e.alternate, e, Kc);
		e.memoizedProps = e.pendingProps, t === null ? Pl(e) : Gc = t, Hc.current = null;
	}
	function Pl(e) {
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
					Jc = 6, Gc = null;
					return;
				}
			} else if (n = uc(n, t, Kc), n !== null) {
				Gc = n;
				return;
			}
			if (t = t.sibling, t !== null) {
				Gc = t;
				return;
			}
			Gc = t = e;
		} while (t !== null);
		Jc === 0 && (Jc = 5);
	}
	function Fl(e, t, n) {
		var r = L, i = Uc.transition;
		try {
			Uc.transition = null, L = 1, Il(e, t, n, r);
		} finally {
			Uc.transition = i, L = r;
		}
		return null;
	}
	function Il(e, t, n, r) {
		do
			Ll();
		while (cl !== null);
		if (X & 6) throw Error(i(327));
		n = e.finishedWork;
		var a = e.finishedLanes;
		if (n === null) return null;
		if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(i(177));
		e.callbackNode = null, e.callbackPriority = 0;
		var o = n.lanes | n.childLanes;
		if (Ut(e, o), e === Wc && (Gc = Wc = null, Z = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || sl || (sl = !0, Gl(Ct, function() {
			return Ll(), null;
		})), o = !!(n.flags & 15990), n.subtreeFlags & 15990 || o) {
			o = Uc.transition, Uc.transition = null;
			var s = L;
			L = 1;
			var c = X;
			X |= 4, Hc.current = null, vc(e, n), Nc(n, e), Ir(Si), gn = !!xi, Si = xi = null, e.current = n, Fc(n, e, a), yt(), X = c, L = s, Uc.transition = o;
		} else e.current = n;
		if (sl && (sl = !1, cl = e, ll = a), o = e.pendingLanes, o === 0 && (ol = null), Ot(n.stateNode, r), Q(e, I()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) a = t[n], r(a.value, {
			componentStack: a.stack,
			digest: a.digest
		});
		if (il) throw il = !1, e = al, al = null, e;
		return ll & 1 && e.tag !== 0 && Ll(), o = e.pendingLanes, o & 1 ? e === dl ? ul++ : (ul = 0, dl = e) : ul = 0, la(), null;
	}
	function Ll() {
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
								zl(c, c.return, e);
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
					if (X = a, la(), Dt && typeof Dt.onPostCommitFiberRoot == "function") try {
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
	function Rl(e, t, n) {
		t = Os(n, t), t = K(e, t, 1), e = oo(e, t, 1), t = ml(), e !== null && (Ht(e, 1, t), Q(e, t));
	}
	function zl(e, t, n) {
		if (e.tag === 3) Rl(e, e, n);
		else for (; t !== null;) {
			if (t.tag === 3) {
				Rl(t, e, n);
				break;
			}
			if (t.tag === 1) {
				var r = t.stateNode;
				if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (ol === null || !ol.has(r))) {
					e = Os(n, e), e = Ms(t, e, 1), t = oo(t, e, 1), e = ml(), t !== null && (Ht(t, 1, e), Q(t, e));
					break;
				}
			}
			t = t.return;
		}
	}
	function Bl(e, t, n) {
		var r = e.pingCache;
		r !== null && r.delete(t), t = ml(), e.pingedLanes |= e.suspendedLanes & n, Wc === e && (Z & n) === n && (Jc === 4 || Jc === 3 && (Z & 130023424) === Z && 500 > I() - tl ? El(e, 0) : Qc |= n), Q(e, t);
	}
	function Vl(e, t) {
		t === 0 && (e.mode & 1 ? (t = Pt, Pt <<= 1, !(Pt & 130023424) && (Pt = 4194304)) : t = 1);
		var n = ml();
		e = to(e, t), e !== null && (Ht(e, t, n), Q(e, n));
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
			if (e.memoizedProps !== t.pendingProps || Yi.current) Is = !0;
			else {
				if ((e.lanes & n) === 0 && !(t.flags & 128)) return Is = !1, ic(e, t, n);
				Is = !!(e.flags & 131072);
			}
		} else Is = !1, Ta && t.flags & 1048576 && ba(t, pa, t.index);
		switch (t.lanes = 0, t.tag) {
			case 2:
				var r = t.type;
				nc(e, t), e = t.pendingProps;
				var a = Zi(t, Ji.current);
				Xa(t, n), a = Fo(null, t, r, e, a, n);
				var o = Io();
				return t.flags |= 1, typeof a == "object" && a && typeof a.render == "function" && a.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Qi(r) ? (o = !0, na(t)) : o = !1, t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null, ro(t), a.updater = Cs, t.stateNode = a, a._reactInternals = t, Ds(t, r, e, n), t = Gs(null, t, r, !0, o, n)) : (t.tag = 0, Ta && o && xa(t), Ls(null, t, a, n), t = t.child), t;
			case 16:
				r = t.elementType;
				a: {
					switch (nc(e, t), e = t.pendingProps, a = r._init, r = a(r._payload), t.type = r, a = t.tag = Yl(r), e = xs(r, e), a) {
						case 0:
							t = Us(null, t, r, e, n);
							break a;
						case 1:
							t = Ws(null, t, r, e, n);
							break a;
						case 11:
							t = Rs(null, t, r, e, n);
							break a;
						case 14:
							t = zs(null, t, r, xs(r.type, e), n);
							break a;
					}
					throw Error(i(306, r, ""));
				}
				return t;
			case 0: return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : xs(r, a), Us(e, t, r, a, n);
			case 1: return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : xs(r, a), Ws(e, t, r, a, n);
			case 3:
				a: {
					if (J(t), e === null) throw Error(i(387));
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
							a = Os(Error(i(423)), t), t = Ks(e, t, r, n, a);
							break a;
						}
						if (r !== a) {
							a = Os(Error(i(424)), t), t = Ks(e, t, r, n, a);
							break a;
						}
						for (wa = Ai(t.stateNode.containerInfo.firstChild), Ca = t, Ta = !0, Ea = null, n = Ha(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling;
					} else {
						if (Pa(), r === a) {
							t = rc(e, t, n);
							break a;
						}
						Ls(e, t, r, n);
					}
					t = t.child;
				}
				return t;
			case 5: return vo(t), e === null && Aa(t), r = t.type, a = t.pendingProps, o = e === null ? null : e.memoizedProps, s = a.children, Ci(r, a) ? s = null : o !== null && Ci(r, o) && (t.flags |= 32), Hs(e, t), Ls(e, t, s, n), t.child;
			case 6: return e === null && Aa(t), null;
			case 13: return Ys(e, t, n);
			case 4: return go(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Va(t, null, r, n) : Ls(e, t, r, n), t.child;
			case 11: return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : xs(r, a), Rs(e, t, r, a, n);
			case 7: return Ls(e, t, t.pendingProps, n), t.child;
			case 8: return Ls(e, t, t.pendingProps.children, n), t.child;
			case 12: return Ls(e, t, t.pendingProps.children, n), t.child;
			case 10:
				a: {
					if (r = t.type._context, a = t.pendingProps, o = t.memoizedProps, s = a.value, U(Ua, r._currentValue), r._currentValue = s, o !== null) {
						if (kr(o.value, s)) {
							if (o.children === a.children && !Yi.current) {
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
					Ls(e, t, a.children, n), t = t.child;
				}
				return t;
			case 9: return a = t.type, r = t.pendingProps.children, Xa(t, n), a = Za(a), r = r(a), t.flags |= 1, Ls(e, t, r, n), t.child;
			case 14: return r = t.type, a = xs(r, t.pendingProps), a = xs(r.type, a), zs(e, t, r, a, n);
			case 15: return Bs(e, t, t.type, t.pendingProps, n);
			case 17: return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : xs(r, a), nc(e, t), t.tag = 1, Qi(r) ? (e = !0, na(t)) : e = !1, Xa(t, n), Ts(t, r, a), Ds(t, r, a, n), Gs(null, t, r, !0, e, n);
			case 19: return tc(e, t, n);
			case 22: return Vs(e, t, n);
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
		if (!e) return qi;
		e = e._reactInternals;
		a: {
			if (ut(e) !== e || e.tag !== 1) throw Error(i(170));
			var t = e;
			do {
				switch (t.tag) {
					case 3:
						t = t.stateNode.context;
						break a;
					case 1: if (Qi(t.type)) {
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
			if (Qi(n)) return ta(e, n, t);
		}
		return t;
	}
	function ou(e, t, n, r, i, a, o, s, c) {
		return e = ru(n, r, !0, e, i, a, o, s, c), e.context = au(null), n = e.current, r = ml(), i = hl(n), a = ao(r, i), a.callback = t ?? null, oo(n, a, i), e.current.lanes = i, Ht(e, i, r), Q(e, r), e;
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
			wl(function() {
				su(null, e, null, null);
			}), t[Fi] = null;
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
			return e._reactRootContainer = o, e[Fi] = o.current, li(e.nodeType === 8 ? e.parentNode : e), wl(), o;
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
		return e._reactRootContainer = c, e[Fi] = c.current, li(e.nodeType === 8 ? e.parentNode : e), wl(function() {
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
					n !== 0 && (Wt(t, n | 1), Q(t, I()), !(X & 6) && (nl = I() + 500, la()));
				}
				break;
			case 13: wl(function() {
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
							var a = Hi(r);
							if (!a) throw Error(i(90));
							ge(r), xe(r, a);
						}
					}
				}
				break;
			case "textarea":
				De(e, n);
				break;
			case "select": t = n.value, t != null && Te(e, !!n.multiple, t, !1);
		}
	}, Ye = Cl, Xe = wl;
	var bu = {
		usingClientEntryPoint: !1,
		Events: [
			Bi,
			Vi,
			Hi,
			qe,
			Je,
			Cl
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
		return t != null && (!0 === t.unstable_strictMode && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (a = t.onRecoverableError)), t = ru(e, 1, !1, null, null, n, !1, r, a), e[Fi] = t.current, li(e.nodeType === 8 ? e.parentNode : e), new pu(t);
	}, e.findDOMNode = function(e) {
		if (e == null) return null;
		if (e.nodeType === 1) return e;
		var t = e._reactInternals;
		if (t === void 0) throw typeof e.render == "function" ? Error(i(188)) : (e = Object.keys(e).join(","), Error(i(268, e)));
		return e = mt(t), e = e === null ? null : e.stateNode, e;
	}, e.flushSync = function(e) {
		return wl(e);
	}, e.hydrate = function(e, t, n) {
		if (!gu(t)) throw Error(i(200));
		return yu(null, e, t, !0, n);
	}, e.hydrateRoot = function(e, t, n) {
		if (!hu(e)) throw Error(i(405));
		var r = n != null && n.hydratedSources || null, a = !1, o = "", s = fu;
		if (n != null && (!0 === n.unstable_strictMode && (a = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = ou(t, null, e, 1, n ?? null, a, !1, o, s), e[Fi] = t.current, li(e), r) for (e = 0; e < r.length; e++) n = r[e], a = n._getVersion, a = a(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, a] : t.mutableSourceEagerHydrationData.push(n, a);
		return new mu(t);
	}, e.render = function(e, t, n) {
		if (!gu(t)) throw Error(i(200));
		return yu(null, e, t, !1, n);
	}, e.unmountComponentAtNode = function(e) {
		if (!gu(e)) throw Error(i(40));
		return e._reactRootContainer ? (wl(function() {
			yu(null, null, e, !1, function() {
				e._reactRootContainer = null, e[Fi] = null;
			});
		}), !0) : !1;
	}, e.unstable_batchedUpdates = Cl, e.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
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
function p() {
	for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
	for (var r = Array(e), i = 0, t = 0; t < n; t++) for (var a = arguments[t], o = 0, s = a.length; o < s; o++, i++) r[i] = a[o];
	return r;
}
function m(e, t, n) {
	if (n || arguments.length === 2) for (var r = 0, i = t.length, a; r < i; r++) (a || !(r in t)) && (a ||= Array.prototype.slice.call(t, 0, r), a[r] = t[r]);
	return e.concat(a || Array.prototype.slice.call(t));
}
// node_modules/.pnpm/@formatjs+fast-memoize@2.2.3/node_modules/@formatjs/fast-memoize/lib/index.js
function h(e, t) {
	var n = t && t.cache ? t.cache : T, r = t && t.serializer ? t.serializer : C;
	return (t && t.strategy ? t.strategy : b)(e, {
		cache: n,
		serializer: r
	});
}
function g(e) {
	return e == null || typeof e == "number" || typeof e == "boolean";
}
function _(e, t, n, r) {
	var i = g(r) ? r : n(r), a = t.get(i);
	return a === void 0 && (a = e.call(this, r), t.set(i, a)), a;
}
function v(e, t, n) {
	var r = Array.prototype.slice.call(arguments, 3), i = n(r), a = t.get(i);
	return a === void 0 && (a = e.apply(this, r), t.set(i, a)), a;
}
function y(e, t, n, r, i) {
	return n.bind(t, e, r, i);
}
function b(e, t) {
	var n = e.length === 1 ? _ : v;
	return y(e, this, n, t.cache.create(), t.serializer);
}
function x(e, t) {
	return y(e, this, v, t.cache.create(), t.serializer);
}
function S(e, t) {
	return y(e, this, _, t.cache.create(), t.serializer);
}
var C = function() {
	return JSON.stringify(arguments);
};
function w() {
	this.cache = Object.create(null);
}
w.prototype.get = function(e) {
	return this.cache[e];
}, w.prototype.set = function(e, t) {
	this.cache[e] = t;
};
var T = { create: function() {
	return new w();
} }, E = {
	variadic: x,
	monadic: S
};
// node_modules/.pnpm/@formatjs+ecma402-abstract@2.2.4/node_modules/@formatjs/ecma402-abstract/lib/utils.js
function D(e, t, n) {
	if (n === void 0 && (n = Error), !e) throw new n(t);
}
h(function() {
	var e, t = [...arguments];
	return new ((e = Intl.NumberFormat).bind.apply(e, m([void 0], t, !1)))();
}, { strategy: E.variadic }), h(function() {
	var e, t = [...arguments];
	return new ((e = Intl.DateTimeFormat).bind.apply(e, m([void 0], t, !1)))();
}, { strategy: E.variadic }), h(function() {
	var e, t = [...arguments];
	return new ((e = Intl.PluralRules).bind.apply(e, m([void 0], t, !1)))();
}, { strategy: E.variadic }), h(function() {
	var e, t = [...arguments];
	return new ((e = Intl.Locale).bind.apply(e, m([void 0], t, !1)))();
}, { strategy: E.variadic }), h(function() {
	var e, t = [...arguments];
	return new ((e = Intl.ListFormat).bind.apply(e, m([void 0], t, !1)))();
}, { strategy: E.variadic });
// node_modules/.pnpm/@formatjs+icu-messageformat-parser@2.9.4/node_modules/@formatjs/icu-messageformat-parser/lib/error.js
var O;
(function(e) {
	e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})(O ||= {});
// node_modules/.pnpm/@formatjs+icu-messageformat-parser@2.9.4/node_modules/@formatjs/icu-messageformat-parser/lib/types.js
var k;
(function(e) {
	e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag";
})(k ||= {});
var ee;
(function(e) {
	e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime";
})(ee ||= {});
function A(e) {
	return e.type === k.literal;
}
function j(e) {
	return e.type === k.argument;
}
function te(e) {
	return e.type === k.number;
}
function M(e) {
	return e.type === k.date;
}
function N(e) {
	return e.type === k.time;
}
function ne(e) {
	return e.type === k.select;
}
function re(e) {
	return e.type === k.plural;
}
function ie(e) {
	return e.type === k.pound;
}
function P(e) {
	return e.type === k.tag;
}
function ae(e) {
	return !!(e && typeof e == "object" && e.type === ee.number);
}
function oe(e) {
	return !!(e && typeof e == "object" && e.type === ee.dateTime);
}
// node_modules/.pnpm/@formatjs+icu-messageformat-parser@2.9.4/node_modules/@formatjs/icu-messageformat-parser/lib/regex.generated.js
var se = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, ce = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function le(e) {
	var t = {};
	return e.replace(ce, function(e) {
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
var ue = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
// node_modules/.pnpm/@formatjs+icu-skeleton-parser@1.8.8/node_modules/@formatjs/icu-skeleton-parser/lib/number.js
function de(e) {
	if (e.length === 0) throw Error("Number skeleton cannot be empty");
	for (var t = e.split(ue).filter(function(e) {
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
function fe(e) {
	return e.replace(/^(.*?)-/, "");
}
var pe = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, me = /^(@+)?(\+|#+)?[rs]?$/g, he = /(\*)(0+)|(#+)(0+)|(0+)/g, ge = /^(0+)$/;
function _e(e) {
	var t = {};
	return e[e.length - 1] === "r" ? t.roundingPriority = "morePrecision" : e[e.length - 1] === "s" && (t.roundingPriority = "lessPrecision"), e.replace(me, function(e, n, r) {
		return typeof r == "string" ? r === "+" ? t.minimumSignificantDigits = n.length : n[0] === "#" ? t.maximumSignificantDigits = n.length : (t.minimumSignificantDigits = n.length, t.maximumSignificantDigits = n.length + (typeof r == "string" ? r.length : 0)) : (t.minimumSignificantDigits = n.length, t.maximumSignificantDigits = n.length), "";
	}), t;
}
function ve(e) {
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
function ye(e) {
	var t;
	if (e[0] === "E" && e[1] === "E" ? (t = { notation: "engineering" }, e = e.slice(2)) : e[0] === "E" && (t = { notation: "scientific" }, e = e.slice(1)), t) {
		var n = e.slice(0, 2);
		if (n === "+!" ? (t.signDisplay = "always", e = e.slice(2)) : n === "+?" && (t.signDisplay = "exceptZero", e = e.slice(2)), !ge.test(e)) throw Error("Malformed concise eng/scientific notation");
		t.minimumIntegerDigits = e.length;
	}
	return t;
}
function be(e) {
	return ve(e) || {};
}
function xe(e) {
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
				t.style = "unit", t.unit = fe(i.options[0]);
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
					return d(d({}, e), be(t));
				}, {}));
				continue;
			case "engineering":
				t = d(d(d({}, t), { notation: "engineering" }), i.options.reduce(function(e, t) {
					return d(d({}, e), be(t));
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
				i.options[0].replace(he, function(e, n, r, i, a, o) {
					if (n) t.minimumIntegerDigits = r.length;
					else if (i && a) throw Error("We currently do not support maximum integer digits");
					else if (o) throw Error("We currently do not support exact integer digits");
					return "";
				});
				continue;
		}
		if (ge.test(i.stem)) t.minimumIntegerDigits = i.stem.length;
		else if (pe.test(i.stem)) {
			if (i.options.length > 1) throw RangeError("Fraction-precision stems only accept a single optional option");
			i.stem.replace(pe, function(e, n, r, i, a, o) {
				return r === "*" ? t.minimumFractionDigits = n.length : i && i[0] === "#" ? t.maximumFractionDigits = i.length : a && o ? (t.minimumFractionDigits = a.length, t.maximumFractionDigits = a.length + o.length) : (t.minimumFractionDigits = n.length, t.maximumFractionDigits = n.length), "";
			});
			var a = i.options[0];
			a === "w" ? t = d(d({}, t), { trailingZeroDisplay: "stripIfInteger" }) : a && (t = d(d({}, t), _e(a)));
		} else if (me.test(i.stem)) t = d(d({}, t), _e(i.stem));
		else {
			var o = ve(i.stem);
			o && (t = d(d({}, t), o));
			var s = ye(i.stem);
			s && (t = d(d({}, t), s));
		}
	}
	return t;
}
// node_modules/.pnpm/@formatjs+icu-messageformat-parser@2.9.4/node_modules/@formatjs/icu-messageformat-parser/lib/time-data.generated.js
var Se = {
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
function Ce(e, t) {
	for (var n = "", r = 0; r < e.length; r++) {
		var i = e.charAt(r);
		if (i === "j") {
			for (var a = 0; r + 1 < e.length && e.charAt(r + 1) === i;) a++, r++;
			var o = 1 + (a & 1), s = a < 2 ? 1 : 3 + (a >> 1), c = "a", l = we(t);
			for ((l == "H" || l == "k") && (s = 0); s-- > 0;) n += c;
			for (; o-- > 0;) n = l + n;
		} else n += i === "J" ? "H" : i;
	}
	return n;
}
function we(e) {
	var t = e.hourCycle;
	if (t === void 0 && e.hourCycles && e.hourCycles.length && (t = e.hourCycles[0]), t) switch (t) {
		case "h24": return "k";
		case "h23": return "H";
		case "h12": return "h";
		case "h11": return "K";
		default: throw Error("Invalid hourCycle");
	}
	var n = e.language, r;
	return n !== "root" && (r = e.maximize().region), (Se[r || ""] || Se[n || ""] || Se[`${n}-001`] || Se["001"])[0];
}
// node_modules/.pnpm/@formatjs+icu-messageformat-parser@2.9.4/node_modules/@formatjs/icu-messageformat-parser/lib/parser.js
var Te = RegExp(`^${se.source}*`), Ee = RegExp(`${se.source}*\$`);
function F(e, t) {
	return {
		start: e,
		end: t
	};
}
var De = !!String.prototype.startsWith && "_a".startsWith("a", 1), Oe = !!String.fromCodePoint, ke = !!Object.fromEntries, Ae = !!String.prototype.codePointAt, je = !!String.prototype.trimStart, Me = !!String.prototype.trimEnd, Ne = Number.isSafeInteger ? Number.isSafeInteger : function(e) {
	return typeof e == "number" && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991;
}, Pe = !0;
try {
	Pe = Ve("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu").exec("a")?.[0] === "a";
} catch {
	Pe = !1;
}
var Fe = De ? function(e, t, n) {
	return e.startsWith(t, n);
} : function(e, t, n) {
	return e.slice(n, n + t.length) === t;
}, Ie = Oe ? String.fromCodePoint : function() {
	for (var e = [...arguments], t = "", n = e.length, r = 0, i; n > r;) {
		if (i = e[r++], i > 1114111) throw RangeError(i + " is not a valid code point");
		t += i < 65536 ? String.fromCharCode(i) : String.fromCharCode(((i -= 65536) >> 10) + 55296, i % 1024 + 56320);
	}
	return t;
}, Le = ke ? Object.fromEntries : function(e) {
	for (var t = {}, n = 0, r = e; n < r.length; n++) {
		var i = r[n], a = i[0];
		t[a] = i[1];
	}
	return t;
}, Re = Ae ? function(e, t) {
	return e.codePointAt(t);
} : function(e, t) {
	var n = e.length;
	if (!(t < 0 || t >= n)) {
		var r = e.charCodeAt(t), i;
		return r < 55296 || r > 56319 || t + 1 === n || (i = e.charCodeAt(t + 1)) < 56320 || i > 57343 ? r : (r - 55296 << 10) + (i - 56320) + 65536;
	}
}, ze = je ? function(e) {
	return e.trimStart();
} : function(e) {
	return e.replace(Te, "");
}, Be = Me ? function(e) {
	return e.trimEnd();
} : function(e) {
	return e.replace(Ee, "");
};
function Ve(e, t) {
	return new RegExp(e, t);
}
var He;
if (Pe) {
	var Ue = Ve("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
	He = function(e, t) {
		return Ue.lastIndex = t, Ue.exec(e)[1] ?? "";
	};
} else He = function(e, t) {
	for (var n = [];;) {
		var r = Re(e, t);
		if (r === void 0 || Je(r) || Ye(r)) break;
		n.push(r), t += r >= 65536 ? 2 : 1;
	}
	return Ie.apply(void 0, n);
};
var We = function() {
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
					type: k.pound,
					location: F(o, this.clonePosition())
				});
			} else if (i === 60 && !this.ignoreTag && this.peek() === 47) {
				if (n) break;
				return this.error(O.UNMATCHED_CLOSING_TAG, F(this.clonePosition(), this.clonePosition()));
			} else if (i === 60 && !this.ignoreTag && Ge(this.peek() || 0)) {
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
				type: k.literal,
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
				if (this.isEOF() || !Ge(this.char())) return this.error(O.INVALID_TAG, F(o, this.clonePosition()));
				var s = this.clonePosition();
				return r === this.parseTagName() ? (this.bumpSpace(), this.bumpIf(">") ? {
					val: {
						type: k.tag,
						value: r,
						children: a,
						location: F(n, this.clonePosition())
					},
					err: null
				} : this.error(O.INVALID_TAG, F(o, this.clonePosition()))) : this.error(O.UNMATCHED_CLOSING_TAG, F(s, this.clonePosition()));
			}
			return this.error(O.UNCLOSED_TAG, F(n, this.clonePosition()));
		}
		return this.error(O.INVALID_TAG, F(n, this.clonePosition()));
	}, e.prototype.parseTagName = function() {
		var e = this.offset();
		for (this.bump(); !this.isEOF() && qe(this.char());) this.bump();
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
				type: k.literal,
				value: r,
				location: s
			},
			err: null
		};
	}, e.prototype.tryParseLeftAngleBracket = function() {
		return !this.isEOF() && this.char() === 60 && (this.ignoreTag || !Ke(this.peek() || 0)) ? (this.bump(), "<") : null;
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
		return Ie.apply(void 0, t);
	}, e.prototype.tryParseUnquoted = function(e, t) {
		if (this.isEOF()) return null;
		var n = this.char();
		return n === 60 || n === 123 || n === 35 && (t === "plural" || t === "selectordinal") || n === 125 && e > 0 ? null : (this.bump(), Ie(n));
	}, e.prototype.parseArgument = function(e, t) {
		var n = this.clonePosition();
		if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(O.EXPECT_ARGUMENT_CLOSING_BRACE, F(n, this.clonePosition()));
		if (this.char() === 125) return this.bump(), this.error(O.EMPTY_ARGUMENT, F(n, this.clonePosition()));
		var r = this.parseIdentifierIfPossible().value;
		if (!r) return this.error(O.MALFORMED_ARGUMENT, F(n, this.clonePosition()));
		if (this.bumpSpace(), this.isEOF()) return this.error(O.EXPECT_ARGUMENT_CLOSING_BRACE, F(n, this.clonePosition()));
		switch (this.char()) {
			case 125: return this.bump(), {
				val: {
					type: k.argument,
					value: r,
					location: F(n, this.clonePosition())
				},
				err: null
			};
			case 44: return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(O.EXPECT_ARGUMENT_CLOSING_BRACE, F(n, this.clonePosition())) : this.parseArgumentOptions(e, t, r, n);
			default: return this.error(O.MALFORMED_ARGUMENT, F(n, this.clonePosition()));
		}
	}, e.prototype.parseIdentifierIfPossible = function() {
		var e = this.clonePosition(), t = this.offset(), n = He(this.message, t), r = t + n.length;
		return this.bumpTo(r), {
			value: n,
			location: F(e, this.clonePosition())
		};
	}, e.prototype.parseArgumentOptions = function(e, t, n, r) {
		var i = this.clonePosition(), a = this.parseIdentifierIfPossible().value, o = this.clonePosition();
		switch (a) {
			case "": return this.error(O.EXPECT_ARGUMENT_TYPE, F(i, o));
			case "number":
			case "date":
			case "time":
				this.bumpSpace();
				var s = null;
				if (this.bumpIf(",")) {
					this.bumpSpace();
					var c = this.clonePosition(), l = this.parseSimpleArgStyleIfPossible();
					if (l.err) return l;
					var u = Be(l.val);
					if (u.length === 0) return this.error(O.EXPECT_ARGUMENT_STYLE, F(this.clonePosition(), this.clonePosition()));
					s = {
						style: u,
						styleLocation: F(c, this.clonePosition())
					};
				}
				var f = this.tryParseArgumentClose(r);
				if (f.err) return f;
				var p = F(r, this.clonePosition());
				if (s && Fe(s?.style, "::", 0)) {
					var m = ze(s.style.slice(2));
					if (a === "number") {
						var l = this.parseNumberSkeletonFromString(m, s.styleLocation);
						return l.err ? l : {
							val: {
								type: k.number,
								value: n,
								location: p,
								style: l.val
							},
							err: null
						};
					}
					if (m.length === 0) return this.error(O.EXPECT_DATE_TIME_SKELETON, p);
					var h = m;
					this.locale && (h = Ce(m, this.locale));
					var u = {
						type: ee.dateTime,
						pattern: h,
						location: s.styleLocation,
						parsedOptions: this.shouldParseSkeletons ? le(h) : {}
					};
					return {
						val: {
							type: a === "date" ? k.date : k.time,
							value: n,
							location: p,
							style: u
						},
						err: null
					};
				}
				return {
					val: {
						type: a === "number" ? k.number : a === "date" ? k.date : k.time,
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
				if (this.bumpSpace(), !this.bumpIf(",")) return this.error(O.EXPECT_SELECT_ARGUMENT_OPTIONS, F(g, d({}, g)));
				this.bumpSpace();
				var _ = this.parseIdentifierIfPossible(), v = 0;
				if (a !== "select" && _.value === "offset") {
					if (!this.bumpIf(":")) return this.error(O.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, F(this.clonePosition(), this.clonePosition()));
					this.bumpSpace();
					var l = this.tryParseDecimalInteger(O.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, O.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
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
						type: k.select,
						value: n,
						options: Le(y.val),
						location: b
					},
					err: null
				} : {
					val: {
						type: k.plural,
						value: n,
						options: Le(y.val),
						offset: v,
						pluralType: a === "plural" ? "cardinal" : "ordinal",
						location: b
					},
					err: null
				};
			default: return this.error(O.INVALID_ARGUMENT_TYPE, F(i, o));
		}
	}, e.prototype.tryParseArgumentClose = function(e) {
		return this.isEOF() || this.char() !== 125 ? this.error(O.EXPECT_ARGUMENT_CLOSING_BRACE, F(e, this.clonePosition())) : (this.bump(), {
			val: !0,
			err: null
		});
	}, e.prototype.parseSimpleArgStyleIfPossible = function() {
		for (var e = 0, t = this.clonePosition(); !this.isEOF();) switch (this.char()) {
			case 39:
				this.bump();
				var n = this.clonePosition();
				if (!this.bumpUntil("'")) return this.error(O.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, F(n, this.clonePosition()));
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
			n = de(e);
		} catch {
			return this.error(O.INVALID_NUMBER_SKELETON, t);
		}
		return {
			val: {
				type: ee.number,
				tokens: n,
				location: t,
				parsedOptions: this.shouldParseSkeletons ? xe(n) : {}
			},
			err: null
		};
	}, e.prototype.tryParsePluralOrSelectOptions = function(e, t, n, r) {
		for (var i, a = !1, o = [], s = /* @__PURE__ */ new Set(), c = r.value, l = r.location;;) {
			if (c.length === 0) {
				var u = this.clonePosition();
				if (t !== "select" && this.bumpIf("=")) {
					var d = this.tryParseDecimalInteger(O.EXPECT_PLURAL_ARGUMENT_SELECTOR, O.INVALID_PLURAL_ARGUMENT_SELECTOR);
					if (d.err) return d;
					l = F(u, this.clonePosition()), c = this.message.slice(u.offset, this.offset());
				} else break;
			}
			if (s.has(c)) return this.error(t === "select" ? O.DUPLICATE_SELECT_ARGUMENT_SELECTOR : O.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, l);
			c === "other" && (a = !0), this.bumpSpace();
			var f = this.clonePosition();
			if (!this.bumpIf("{")) return this.error(t === "select" ? O.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : O.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, F(this.clonePosition(), this.clonePosition()));
			var p = this.parseMessage(e + 1, t, n);
			if (p.err) return p;
			var m = this.tryParseArgumentClose(f);
			if (m.err) return m;
			o.push([c, {
				value: p.val,
				location: F(f, this.clonePosition())
			}]), s.add(c), this.bumpSpace(), i = this.parseIdentifierIfPossible(), c = i.value, l = i.location;
		}
		return o.length === 0 ? this.error(t === "select" ? O.EXPECT_SELECT_ARGUMENT_SELECTOR : O.EXPECT_PLURAL_ARGUMENT_SELECTOR, F(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !a ? this.error(O.MISSING_OTHER_CLAUSE, F(this.clonePosition(), this.clonePosition())) : {
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
		return i ? (a *= n, Ne(a) ? {
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
		var t = Re(this.message, e);
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
		if (Fe(this.message, e, this.offset())) {
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
		for (; !this.isEOF() && Je(this.char());) this.bump();
	}, e.prototype.peek = function() {
		if (this.isEOF()) return null;
		var e = this.char(), t = this.offset();
		return this.message.charCodeAt(t + (e >= 65536 ? 2 : 1)) ?? null;
	}, e;
}();
function Ge(e) {
	return e >= 97 && e <= 122 || e >= 65 && e <= 90;
}
function Ke(e) {
	return Ge(e) || e === 47;
}
function qe(e) {
	return e === 45 || e === 46 || e >= 48 && e <= 57 || e === 95 || e >= 97 && e <= 122 || e >= 65 && e <= 90 || e == 183 || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039;
}
function Je(e) {
	return e >= 9 && e <= 13 || e === 32 || e === 133 || e >= 8206 && e <= 8207 || e === 8232 || e === 8233;
}
function Ye(e) {
	return e >= 33 && e <= 35 || e === 36 || e >= 37 && e <= 39 || e === 40 || e === 41 || e === 42 || e === 43 || e === 44 || e === 45 || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || e === 91 || e === 92 || e === 93 || e === 94 || e === 96 || e === 123 || e === 124 || e === 125 || e === 126 || e === 161 || e >= 162 && e <= 165 || e === 166 || e === 167 || e === 169 || e === 171 || e === 172 || e === 174 || e === 176 || e === 177 || e === 182 || e === 187 || e === 191 || e === 215 || e === 247 || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || e === 8216 || e === 8217 || e === 8218 || e >= 8219 && e <= 8220 || e === 8221 || e === 8222 || e === 8223 || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || e === 8249 || e === 8250 || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || e === 8260 || e === 8261 || e === 8262 || e >= 8263 && e <= 8273 || e === 8274 || e === 8275 || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || e === 8608 || e >= 8609 && e <= 8610 || e === 8611 || e >= 8612 && e <= 8613 || e === 8614 || e >= 8615 && e <= 8621 || e === 8622 || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || e === 8658 || e === 8659 || e === 8660 || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || e === 8968 || e === 8969 || e === 8970 || e === 8971 || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || e === 9001 || e === 9002 || e >= 9003 && e <= 9083 || e === 9084 || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || e === 9655 || e >= 9656 && e <= 9664 || e === 9665 || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || e === 9839 || e >= 9840 && e <= 10087 || e === 10088 || e === 10089 || e === 10090 || e === 10091 || e === 10092 || e === 10093 || e === 10094 || e === 10095 || e === 10096 || e === 10097 || e === 10098 || e === 10099 || e === 10100 || e === 10101 || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || e === 10181 || e === 10182 || e >= 10183 && e <= 10213 || e === 10214 || e === 10215 || e === 10216 || e === 10217 || e === 10218 || e === 10219 || e === 10220 || e === 10221 || e === 10222 || e === 10223 || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || e === 10627 || e === 10628 || e === 10629 || e === 10630 || e === 10631 || e === 10632 || e === 10633 || e === 10634 || e === 10635 || e === 10636 || e === 10637 || e === 10638 || e === 10639 || e === 10640 || e === 10641 || e === 10642 || e === 10643 || e === 10644 || e === 10645 || e === 10646 || e === 10647 || e === 10648 || e >= 10649 && e <= 10711 || e === 10712 || e === 10713 || e === 10714 || e === 10715 || e >= 10716 && e <= 10747 || e === 10748 || e === 10749 || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || e === 11158 || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || e === 11778 || e === 11779 || e === 11780 || e === 11781 || e >= 11782 && e <= 11784 || e === 11785 || e === 11786 || e === 11787 || e === 11788 || e === 11789 || e >= 11790 && e <= 11798 || e === 11799 || e >= 11800 && e <= 11801 || e === 11802 || e === 11803 || e === 11804 || e === 11805 || e >= 11806 && e <= 11807 || e === 11808 || e === 11809 || e === 11810 || e === 11811 || e === 11812 || e === 11813 || e === 11814 || e === 11815 || e === 11816 || e === 11817 || e >= 11818 && e <= 11822 || e === 11823 || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || e === 11840 || e === 11841 || e === 11842 || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || e === 11858 || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || e === 12296 || e === 12297 || e === 12298 || e === 12299 || e === 12300 || e === 12301 || e === 12302 || e === 12303 || e === 12304 || e === 12305 || e >= 12306 && e <= 12307 || e === 12308 || e === 12309 || e === 12310 || e === 12311 || e === 12312 || e === 12313 || e === 12314 || e === 12315 || e === 12316 || e === 12317 || e >= 12318 && e <= 12319 || e === 12320 || e === 12336 || e === 64830 || e === 64831 || e >= 65093 && e <= 65094;
}
// node_modules/.pnpm/@formatjs+icu-messageformat-parser@2.9.4/node_modules/@formatjs/icu-messageformat-parser/lib/index.js
function Xe(e) {
	e.forEach(function(e) {
		if (delete e.location, ne(e) || re(e)) for (var t in e.options) delete e.options[t].location, Xe(e.options[t].value);
		else te(e) && ae(e.style) || (M(e) || N(e)) && oe(e.style) ? delete e.style.location : P(e) && Xe(e.children);
	});
}
function Ze(e, t) {
	t === void 0 && (t = {}), t = d({
		shouldParseSkeletons: !0,
		requiresOtherClause: !0
	}, t);
	var n = new We(e, t).parse();
	if (n.err) {
		var r = SyntaxError(O[n.err.kind]);
		throw r.location = n.err.location, r.originalMessage = n.err.message, r;
	}
	return t?.captureLocation || Xe(n.val), n.val;
}
// node_modules/.pnpm/intl-messageformat@10.7.7/node_modules/intl-messageformat/lib/src/error.js
var Qe;
(function(e) {
	e.MISSING_VALUE = "MISSING_VALUE", e.INVALID_VALUE = "INVALID_VALUE", e.MISSING_INTL_API = "MISSING_INTL_API";
})(Qe ||= {});
var $e = function(e) {
	u(t, e);
	function t(t, n, r) {
		var i = e.call(this, t) || this;
		return i.code = n, i.originalMessage = r, i;
	}
	return t.prototype.toString = function() {
		return `[formatjs Error: ${this.code}] ${this.message}`;
	}, t;
}(Error), et = function(e) {
	u(t, e);
	function t(t, n, r, i) {
		return e.call(this, `Invalid values for "${t}": "${n}". Options are "${Object.keys(r).join("\", \"")}"`, Qe.INVALID_VALUE, i) || this;
	}
	return t;
}($e), tt = function(e) {
	u(t, e);
	function t(t, n, r) {
		return e.call(this, `Value for "${t}" must be of type ${n}`, Qe.INVALID_VALUE, r) || this;
	}
	return t;
}($e), nt = function(e) {
	u(t, e);
	function t(t, n) {
		return e.call(this, `The intl string context variable "${t}" was not provided to the string "${n}"`, Qe.MISSING_VALUE, n) || this;
	}
	return t;
}($e), rt;
(function(e) {
	e[e.literal = 0] = "literal", e[e.object = 1] = "object";
})(rt ||= {});
function it(e) {
	return e.length < 2 ? e : e.reduce(function(e, t) {
		var n = e[e.length - 1];
		return !n || n.type !== rt.literal || t.type !== rt.literal ? e.push(t) : n.value += t.value, e;
	}, []);
}
function at(e) {
	return typeof e == "function";
}
function ot(e, t, n, r, i, a, o) {
	if (e.length === 1 && A(e[0])) return [{
		type: rt.literal,
		value: e[0].value
	}];
	for (var s = [], c = 0, l = e; c < l.length; c++) {
		var u = l[c];
		if (A(u)) s.push({
			type: rt.literal,
			value: u.value
		});
		else if (ie(u)) typeof a == "number" && s.push({
			type: rt.literal,
			value: n.getNumberFormat(t).format(a)
		});
		else {
			var d = u.value;
			if (!(i && d in i)) throw new nt(d, o);
			var f = i[d];
			if (j(u)) f && typeof f != "string" && typeof f != "number" || (f = typeof f == "string" || typeof f == "number" ? String(f) : ""), s.push({
				type: typeof f == "string" ? rt.literal : rt.object,
				value: f
			});
			else if (M(u)) {
				var p = typeof u.style == "string" ? r.date[u.style] : oe(u.style) ? u.style.parsedOptions : void 0;
				s.push({
					type: rt.literal,
					value: n.getDateTimeFormat(t, p).format(f)
				});
			} else if (N(u)) {
				var p = typeof u.style == "string" ? r.time[u.style] : oe(u.style) ? u.style.parsedOptions : r.time.medium;
				s.push({
					type: rt.literal,
					value: n.getDateTimeFormat(t, p).format(f)
				});
			} else if (te(u)) {
				var p = typeof u.style == "string" ? r.number[u.style] : ae(u.style) ? u.style.parsedOptions : void 0;
				p && p.scale && (f *= p.scale || 1), s.push({
					type: rt.literal,
					value: n.getNumberFormat(t, p).format(f)
				});
			} else {
				if (P(u)) {
					var m = u.children, h = u.value, g = i[h];
					if (!at(g)) throw new tt(h, "function", o);
					var _ = g(ot(m, t, n, r, i, a).map(function(e) {
						return e.value;
					}));
					Array.isArray(_) || (_ = [_]), s.push.apply(s, _.map(function(e) {
						return {
							type: typeof e == "string" ? rt.literal : rt.object,
							value: e
						};
					}));
				}
				if (ne(u)) {
					var v = u.options[f] || u.options.other;
					if (!v) throw new et(u.value, f, Object.keys(u.options), o);
					s.push.apply(s, ot(v.value, t, n, r, i));
				} else if (re(u)) {
					var v = u.options[`=${f}`];
					if (!v) {
						if (!Intl.PluralRules) throw new $e("Intl.PluralRules is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-pluralrules\"\n", Qe.MISSING_INTL_API, o);
						var y = n.getPluralRules(t, { type: u.pluralType }).select(f - (u.offset || 0));
						v = u.options[y] || u.options.other;
					}
					if (!v) throw new et(u.value, f, Object.keys(u.options), o);
					s.push.apply(s, ot(v.value, t, n, r, i, f - (u.offset || 0)));
				}
			}
		}
	}
	return it(s);
}
// node_modules/.pnpm/intl-messageformat@10.7.7/node_modules/intl-messageformat/lib/src/core.js
function st(e, t) {
	return t ? d(d(d({}, e || {}), t || {}), Object.keys(e).reduce(function(n, r) {
		return n[r] = d(d({}, e[r]), t[r] || {}), n;
	}, {})) : e;
}
function ct(e, t) {
	return t ? Object.keys(e).reduce(function(n, r) {
		return n[r] = st(e[r], t[r]), n;
	}, d({}, e)) : e;
}
function lt(e) {
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
function ut(e) {
	return e === void 0 && (e = {
		number: {},
		dateTime: {},
		pluralRules: {}
	}), {
		getNumberFormat: h(function() {
			var e, t = [...arguments];
			return new ((e = Intl.NumberFormat).bind.apply(e, m([void 0], t, !1)))();
		}, {
			cache: lt(e.number),
			strategy: E.variadic
		}),
		getDateTimeFormat: h(function() {
			var e, t = [...arguments];
			return new ((e = Intl.DateTimeFormat).bind.apply(e, m([void 0], t, !1)))();
		}, {
			cache: lt(e.dateTime),
			strategy: E.variadic
		}),
		getPluralRules: h(function() {
			var e, t = [...arguments];
			return new ((e = Intl.PluralRules).bind.apply(e, m([void 0], t, !1)))();
		}, {
			cache: lt(e.pluralRules),
			strategy: E.variadic
		})
	};
}
var dt = function() {
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
				return !e.length || t.type !== rt.literal || typeof e[e.length - 1] != "string" ? e.push(t.value) : e[e.length - 1] += t.value, e;
			}, []);
			return n.length <= 1 ? n[0] || "" : n;
		}, this.formatToParts = function(e) {
			return ot(a.ast, a.locales, a.formatters, a.formats, e, void 0, a.message);
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
		this.formats = ct(e.formats, r), this.formatters = i && i.formatters || ut(this.formatterCache);
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
	}, e.__parse = Ze, e.formats = {
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
}(), ft;
(function(e) {
	e.FORMAT_ERROR = "FORMAT_ERROR", e.UNSUPPORTED_FORMATTER = "UNSUPPORTED_FORMATTER", e.INVALID_CONFIG = "INVALID_CONFIG", e.MISSING_DATA = "MISSING_DATA", e.MISSING_TRANSLATION = "MISSING_TRANSLATION";
})(ft ||= {});
var pt = function(e) {
	u(t, e);
	function t(n, r, i) {
		var a = this, o = i ? i instanceof Error ? i : Error(String(i)) : void 0;
		return a = e.call(this, `[@formatjs/intl Error ${n}] ${r}
${o ? `
${o.message}
${o.stack}` : ""}`) || this, a.code = n, typeof Error.captureStackTrace == "function" && Error.captureStackTrace(a, t), a;
	}
	return t;
}(Error), mt = function(e) {
	u(t, e);
	function t(t, n) {
		return e.call(this, ft.UNSUPPORTED_FORMATTER, t, n) || this;
	}
	return t;
}(pt), ht = function(e) {
	u(t, e);
	function t(t, n) {
		return e.call(this, ft.INVALID_CONFIG, t, n) || this;
	}
	return t;
}(pt), gt = function(e) {
	u(t, e);
	function t(t, n) {
		return e.call(this, ft.MISSING_DATA, t, n) || this;
	}
	return t;
}(pt), _t = function(e) {
	u(t, e);
	function t(t, n, r) {
		var i = e.call(this, ft.FORMAT_ERROR, `${t}
Locale: ${n}
`, r) || this;
		return i.locale = n, i;
	}
	return t;
}(pt), vt = function(e) {
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
}(_t), yt = function(e) {
	u(t, e);
	function t(t, n) {
		var r = e.call(this, ft.MISSING_TRANSLATION, `Missing message: "${t.id}" for locale "${n}", using ${t.defaultMessage ? `default message (${typeof t.defaultMessage == "string" ? t.defaultMessage : t.defaultMessage.map(function(e) {
			return e.value ?? JSON.stringify(e);
		}).join()})` : "id"} as fallback.`) || this;
		return r.descriptor = t, r;
	}
	return t;
}(pt);
// node_modules/.pnpm/@formatjs+intl@2.10.15_typescript@5.9.3/node_modules/@formatjs/intl/lib/src/utils.js
function I(e, t, n) {
	return n === void 0 && (n = {}), t.reduce(function(t, r) {
		return r in e ? t[r] = e[r] : r in n && (t[r] = n[r]), t;
	}, {});
}
var bt = {
	formats: {},
	messages: {},
	timeZone: void 0,
	defaultLocale: "en",
	defaultFormats: {},
	fallbackOnEmptyString: !0,
	onError: function(e) {},
	onWarn: function(e) {}
};
function xt() {
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
function St(e) {
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
function Ct(e) {
	e === void 0 && (e = xt());
	var t = Intl.RelativeTimeFormat, n = Intl.ListFormat, r = Intl.DisplayNames, i = h(function() {
		var e, t = [...arguments];
		return new ((e = Intl.DateTimeFormat).bind.apply(e, m([void 0], t, !1)))();
	}, {
		cache: St(e.dateTime),
		strategy: E.variadic
	}), a = h(function() {
		var e, t = [...arguments];
		return new ((e = Intl.NumberFormat).bind.apply(e, m([void 0], t, !1)))();
	}, {
		cache: St(e.number),
		strategy: E.variadic
	}), o = h(function() {
		var e, t = [...arguments];
		return new ((e = Intl.PluralRules).bind.apply(e, m([void 0], t, !1)))();
	}, {
		cache: St(e.pluralRules),
		strategy: E.variadic
	});
	return {
		getDateTimeFormat: i,
		getNumberFormat: a,
		getMessageFormat: h(function(e, t, n, r) {
			return new dt(e, t, n, d({ formatters: {
				getNumberFormat: a,
				getDateTimeFormat: i,
				getPluralRules: o
			} }, r || {}));
		}, {
			cache: St(e.message),
			strategy: E.variadic
		}),
		getRelativeTimeFormat: h(function() {
			var e = [...arguments];
			return new (t.bind.apply(t, m([void 0], e, !1)))();
		}, {
			cache: St(e.relativeTime),
			strategy: E.variadic
		}),
		getPluralRules: o,
		getListFormat: h(function() {
			var e = [...arguments];
			return new (n.bind.apply(n, m([void 0], e, !1)))();
		}, {
			cache: St(e.list),
			strategy: E.variadic
		}),
		getDisplayNames: h(function() {
			var e = [...arguments];
			return new (r.bind.apply(r, m([void 0], e, !1)))();
		}, {
			cache: St(e.displayNames),
			strategy: E.variadic
		})
	};
}
function wt(e, t, n, r) {
	var i = e && e[t], a;
	if (i && (a = i[n]), a) return a;
	r(new mt(`No ${t} format named: ${n}`));
}
// node_modules/.pnpm/@formatjs+intl@2.10.15_typescript@5.9.3/node_modules/@formatjs/intl/lib/src/message.js
function Tt(e, t) {
	return Object.keys(e).reduce(function(n, r) {
		return n[r] = d({ timeZone: t }, e[r]), n;
	}, {});
}
function Et(e, t) {
	return Object.keys(d(d({}, e), t)).reduce(function(n, r) {
		return n[r] = d(d({}, e[r] || {}), t[r] || {}), n;
	}, {});
}
function Dt(e, t) {
	if (!t) return e;
	var n = dt.formats;
	return d(d(d({}, n), e), {
		date: Et(Tt(n.date, t), Tt(e.date || {}, t)),
		time: Et(Tt(n.time, t), Tt(e.time || {}, t))
	});
}
var Ot = function(e, t, n, r, i) {
	var a = e.locale, o = e.formats, s = e.messages, c = e.defaultLocale, l = e.defaultFormats, u = e.fallbackOnEmptyString, f = e.onError, p = e.timeZone, m = e.defaultRichTextElements;
	n === void 0 && (n = { id: "" });
	var h = n.id, g = n.defaultMessage;
	D(!!h, "[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue");
	var _ = String(h), v = s && Object.prototype.hasOwnProperty.call(s, _) && s[_];
	if (Array.isArray(v) && v.length === 1 && v[0].type === k.literal) return v[0].value;
	if (!r && v && typeof v == "string" && !m) return v.replace(/'\{(.*?)\}'/gi, "{$1}");
	if (r = d(d({}, m), r || {}), o = Dt(o, p), l = Dt(l, p), !v) {
		if (u === !1 && v === "") return v;
		if ((!g || a && a.toLowerCase() !== c.toLowerCase()) && f(new yt(n, a)), g) try {
			var y = t.getMessageFormat(g, c, l, i);
			return y.format(r);
		} catch (e) {
			return f(new vt(`Error formatting default message for: "${_}", rendering default message verbatim`, a, n, e)), typeof g == "string" ? g : _;
		}
		return _;
	}
	try {
		var y = t.getMessageFormat(v, a, o, d({ formatters: t }, i || {}));
		return y.format(r);
	} catch (e) {
		f(new vt(`Error formatting message: "${_}", using ${g ? "default message" : "id"} as fallback.`, a, n, e));
	}
	if (g) try {
		var y = t.getMessageFormat(g, c, l, i);
		return y.format(r);
	} catch (e) {
		f(new vt(`Error formatting the default message for: "${_}", rendering message verbatim`, a, n, e));
	}
	return typeof v == "string" ? v : typeof g == "string" ? g : _;
}, kt = [
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
function At(e, t, n, r) {
	var i = e.locale, a = e.formats, o = e.onError, s = e.timeZone;
	r === void 0 && (r = {});
	var c = r.format, l = d(d({}, s && { timeZone: s }), c && wt(a, t, c, o)), u = I(r, kt, l);
	return t !== "time" || u.hour || u.minute || u.second || u.timeStyle || u.dateStyle || (u = d(d({}, u), {
		hour: "numeric",
		minute: "numeric"
	})), n(i, u);
}
function jt(e, t) {
	var n = [...arguments].slice(2), r = n[0], i = n[1], a = i === void 0 ? {} : i, o = typeof r == "string" ? new Date(r || 0) : r;
	try {
		return At(e, "date", t, a).format(o);
	} catch (t) {
		e.onError(new _t("Error formatting date.", e.locale, t));
	}
	return String(o);
}
function Mt(e, t) {
	var n = [...arguments].slice(2), r = n[0], i = n[1], a = i === void 0 ? {} : i, o = typeof r == "string" ? new Date(r || 0) : r;
	try {
		return At(e, "time", t, a).format(o);
	} catch (t) {
		e.onError(new _t("Error formatting time.", e.locale, t));
	}
	return String(o);
}
function Nt(e, t) {
	var n = [...arguments].slice(2), r = n[0], i = n[1], a = n[2], o = a === void 0 ? {} : a, s = e.timeZone, c = e.locale, l = e.onError, u = I(o, kt, s ? { timeZone: s } : {});
	try {
		return t(c, u).formatRange(r, i);
	} catch (t) {
		l(new _t("Error formatting date time range.", e.locale, t));
	}
	return String(r);
}
function Pt(e, t) {
	var n = [...arguments].slice(2), r = n[0], i = n[1], a = i === void 0 ? {} : i, o = typeof r == "string" ? new Date(r || 0) : r;
	try {
		return At(e, "date", t, a).formatToParts(o);
	} catch (t) {
		e.onError(new _t("Error formatting date.", e.locale, t));
	}
	return [];
}
function Ft(e, t) {
	var n = [...arguments].slice(2), r = n[0], i = n[1], a = i === void 0 ? {} : i, o = typeof r == "string" ? new Date(r || 0) : r;
	try {
		return At(e, "time", t, a).formatToParts(o);
	} catch (t) {
		e.onError(new _t("Error formatting time.", e.locale, t));
	}
	return [];
}
// node_modules/.pnpm/@formatjs+intl@2.10.15_typescript@5.9.3/node_modules/@formatjs/intl/lib/src/displayName.js
var It = [
	"style",
	"type",
	"fallback",
	"languageDisplay"
];
function Lt(e, t, n, r) {
	var i = e.locale, a = e.onError;
	Intl.DisplayNames || a(new $e("Intl.DisplayNames is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-displaynames\"\n", Qe.MISSING_INTL_API));
	var o = I(r, It);
	try {
		return t(i, o).of(n);
	} catch (e) {
		a(new _t("Error formatting display name.", i, e));
	}
}
// node_modules/.pnpm/@formatjs+intl@2.10.15_typescript@5.9.3/node_modules/@formatjs/intl/lib/src/list.js
var Rt = ["type", "style"], zt = Date.now();
function Bt(e) {
	return `${zt}_${e}_${zt}`;
}
function Vt(e, t, n, r) {
	r === void 0 && (r = {});
	var i = Ht(e, t, n, r).reduce(function(e, t) {
		var n = t.value;
		return typeof n == "string" && typeof e[e.length - 1] == "string" ? e[e.length - 1] += n : e.push(n), e;
	}, []);
	return i.length === 1 ? i[0] : i.length === 0 ? "" : i;
}
function Ht(e, t, n, r) {
	var i = e.locale, a = e.onError;
	r === void 0 && (r = {}), Intl.ListFormat || a(new $e("Intl.ListFormat is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-listformat\"\n", Qe.MISSING_INTL_API));
	var o = I(r, Rt);
	try {
		var s = {}, c = n.map(function(e, t) {
			if (typeof e == "object") {
				var n = Bt(t);
				return s[n] = e, n;
			}
			return String(e);
		});
		return t(i, o).formatToParts(c).map(function(e) {
			return e.type === "literal" ? e : d(d({}, e), { value: s[e.value] || e.value });
		});
	} catch (e) {
		a(new _t("Error formatting list.", i, e));
	}
	return n;
}
// node_modules/.pnpm/@formatjs+intl@2.10.15_typescript@5.9.3/node_modules/@formatjs/intl/lib/src/plural.js
var Ut = ["type"];
function Wt(e, t, n, r) {
	var i = e.locale, a = e.onError;
	r === void 0 && (r = {}), Intl.PluralRules || a(new $e("Intl.PluralRules is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-pluralrules\"\n", Qe.MISSING_INTL_API));
	var o = I(r, Ut);
	try {
		return t(i, o).select(n);
	} catch (e) {
		a(new _t("Error formatting plural.", i, e));
	}
	return "other";
}
// node_modules/.pnpm/@formatjs+intl@2.10.15_typescript@5.9.3/node_modules/@formatjs/intl/lib/src/relativeTime.js
var L = ["numeric", "style"];
function Gt(e, t, n) {
	var r = e.locale, i = e.formats, a = e.onError;
	n === void 0 && (n = {});
	var o = n.format, s = !!o && wt(i, "relative", o, a) || {};
	return t(r, I(n, L, s));
}
function Kt(e, t, n, r, i) {
	i === void 0 && (i = {}), r ||= "second", Intl.RelativeTimeFormat || e.onError(new $e("Intl.RelativeTimeFormat is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-relativetimeformat\"\n", Qe.MISSING_INTL_API));
	try {
		return Gt(e, t, i).format(n, r);
	} catch (t) {
		e.onError(new _t("Error formatting relative time.", e.locale, t));
	}
	return String(n);
}
// node_modules/.pnpm/@formatjs+intl@2.10.15_typescript@5.9.3/node_modules/@formatjs/intl/lib/src/number.js
var qt = [
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
function Jt(e, t, n) {
	var r = e.locale, i = e.formats, a = e.onError;
	n === void 0 && (n = {});
	var o = n.format, s = o && wt(i, "number", o, a) || {};
	return t(r, I(n, qt, s));
}
function Yt(e, t, n, r) {
	r === void 0 && (r = {});
	try {
		return Jt(e, t, r).format(n);
	} catch (t) {
		e.onError(new _t("Error formatting number.", e.locale, t));
	}
	return String(n);
}
function Xt(e, t, n, r) {
	r === void 0 && (r = {});
	try {
		return Jt(e, t, r).formatToParts(n);
	} catch (t) {
		e.onError(new _t("Error formatting number.", e.locale, t));
	}
	return [];
}
// node_modules/.pnpm/@formatjs+intl@2.10.15_typescript@5.9.3/node_modules/@formatjs/intl/lib/src/create-intl.js
function Zt(e) {
	return typeof (e ? e[Object.keys(e)[0]] : void 0) == "string";
}
function Qt(e) {
	e.onWarn && e.defaultRichTextElements && Zt(e.messages || {}) && e.onWarn("[@formatjs/intl] \"defaultRichTextElements\" was specified but \"message\" was not pre-compiled. \nPlease consider using \"@formatjs/cli\" to pre-compile your messages for performance.\nFor more details see https://formatjs.io/docs/getting-started/message-distribution");
}
function $t(e, t) {
	var n = Ct(t), r = d(d({}, bt), e), i = r.locale, a = r.defaultLocale, o = r.onError;
	return i ? !Intl.NumberFormat.supportedLocalesOf(i).length && o ? o(new gt(`Missing locale data for locale: "${i}" in Intl.NumberFormat. Using default locale: "${a}" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details`)) : !Intl.DateTimeFormat.supportedLocalesOf(i).length && o && o(new gt(`Missing locale data for locale: "${i}" in Intl.DateTimeFormat. Using default locale: "${a}" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details`)) : (o && o(new ht(`"locale" was not configured, using "${a}" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details`)), r.locale = r.defaultLocale || "en"), Qt(r), d(d({}, r), {
		formatters: n,
		formatNumber: Yt.bind(null, r, n.getNumberFormat),
		formatNumberToParts: Xt.bind(null, r, n.getNumberFormat),
		formatRelativeTime: Kt.bind(null, r, n.getRelativeTimeFormat),
		formatDate: jt.bind(null, r, n.getDateTimeFormat),
		formatDateToParts: Pt.bind(null, r, n.getDateTimeFormat),
		formatTime: Mt.bind(null, r, n.getDateTimeFormat),
		formatDateTimeRange: Nt.bind(null, r, n.getDateTimeFormat),
		formatTimeToParts: Ft.bind(null, r, n.getDateTimeFormat),
		formatPlural: Wt.bind(null, r, n.getPluralRules),
		formatMessage: Ot.bind(null, r, n),
		$t: Ot.bind(null, r, n),
		formatList: Vt.bind(null, r, n.getListFormat),
		formatListToParts: Ht.bind(null, r, n.getListFormat),
		formatDisplayName: Lt.bind(null, r, n.getDisplayNames)
	});
}
// node_modules/.pnpm/react-intl@6.8.9_react@18.3.1_typescript@5.9.3/node_modules/react-intl/lib/src/utils.js
var en = c(), R = /* @__PURE__ */ e(r());
function tn(e) {
	D(e, "[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.");
}
var nn = d(d({}, bt), { textComponent: R.Fragment });
function rn(e) {
	return function(t) {
		return e(R.Children.toArray(t));
	};
}
function an(e, t) {
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
var on = /* @__PURE__ */ t(((e) => {
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
})), sn = /* @__PURE__ */ t(((e, t) => {
	t.exports = on();
}));
(/* @__PURE__ */ t(((e, t) => {
	var n = sn(), r = {
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
var cn = typeof window < "u" && !window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__ ? window.__REACT_INTL_CONTEXT__ || (window.__REACT_INTL_CONTEXT__ = R.createContext(null)) : R.createContext(null);
cn.Consumer;
var ln = cn.Provider, un = cn;
// node_modules/.pnpm/react-intl@6.8.9_react@18.3.1_typescript@5.9.3/node_modules/react-intl/lib/src/components/useIntl.js
function dn() {
	var e = R.useContext(un);
	return tn(e), e;
}
// node_modules/.pnpm/react-intl@6.8.9_react@18.3.1_typescript@5.9.3/node_modules/react-intl/lib/src/components/createFormattedComponent.js
var fn;
(function(e) {
	e.formatDate = "FormattedDate", e.formatTime = "FormattedTime", e.formatNumber = "FormattedNumber", e.formatList = "FormattedList", e.formatDisplayName = "FormattedDisplayName";
})(fn ||= {});
var pn;
(function(e) {
	e.formatDate = "FormattedDateParts", e.formatTime = "FormattedTimeParts", e.formatNumber = "FormattedNumberParts", e.formatList = "FormattedListParts";
})(pn ||= {});
function mn(e) {
	var t = function(t) {
		var n = dn(), r = t.value, i = t.children, a = f(t, ["value", "children"]), o = typeof r == "string" ? new Date(r || 0) : r;
		return i(e === "formatDate" ? n.formatDateToParts(o, a) : n.formatTimeToParts(o, a));
	};
	return t.displayName = pn[e], t;
}
function hn(e) {
	var t = function(t) {
		var n = dn(), r = t.value, i = t.children, a = f(t, ["value", "children"]), o = n[e](r, a);
		if (typeof i == "function") return i(o);
		var s = n.textComponent || R.Fragment;
		return R.createElement(s, null, o);
	};
	return t.displayName = fn[e], t;
}
// node_modules/.pnpm/react-intl@6.8.9_react@18.3.1_typescript@5.9.3/node_modules/react-intl/lib/src/components/createIntl.js
function gn(e) {
	return e && Object.keys(e).reduce(function(t, n) {
		var r = e[n];
		return t[n] = at(r) ? rn(r) : r, t;
	}, {});
}
var _n = function(e, t, n, r) {
	var i = [...arguments].slice(4), a = gn(r), o = Ot.apply(void 0, m([
		e,
		t,
		n,
		a
	], i, !1));
	return Array.isArray(o) ? R.Children.toArray(o) : o;
}, vn = function(e, t) {
	var n = e.defaultRichTextElements, r = f(e, ["defaultRichTextElements"]), i = gn(n), a = $t(d(d(d({}, nn), r), { defaultRichTextElements: i }), t), o = {
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
		formatMessage: _n.bind(null, o, a.formatters),
		$t: _n.bind(null, o, a.formatters)
	});
};
// node_modules/.pnpm/react-intl@6.8.9_react@18.3.1_typescript@5.9.3/node_modules/react-intl/lib/src/components/provider.js
function yn(e) {
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
var bn = function(e) {
	u(t, e);
	function t() {
		var t = e !== null && e.apply(this, arguments) || this;
		return t.cache = xt(), t.state = {
			cache: t.cache,
			intl: vn(yn(t.props), t.cache),
			prevConfig: yn(t.props)
		}, t;
	}
	return t.getDerivedStateFromProps = function(e, t) {
		var n = t.prevConfig, r = t.cache, i = yn(e);
		return an(n, i) ? null : {
			intl: vn(i, r),
			prevConfig: i
		};
	}, t.prototype.render = function() {
		return tn(this.state.intl), R.createElement(ln, { value: this.state.intl }, this.props.children);
	}, t.displayName = "IntlProvider", t.defaultProps = nn, t;
}(R.PureComponent);
// node_modules/.pnpm/react-intl@6.8.9_react@18.3.1_typescript@5.9.3/node_modules/react-intl/lib/index.js
function xn(e) {
	return e;
}
hn("formatDate"), hn("formatTime"), hn("formatNumber"), hn("formatList"), hn("formatDisplayName"), mn("formatDate"), mn("formatTime");
// node_modules/.pnpm/react@18.3.1/node_modules/react/cjs/react-jsx-runtime.production.min.js
var Sn = /* @__PURE__ */ t(((e) => {
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
})), Cn = /* @__PURE__ */ t(((e, t) => {
	t.exports = Sn();
})), wn = Cn(), Tn = (0, R.createContext)({
	runtime: {
		handlerUrl() {
			return "";
		},
		notify() {}
	},
	element: document.createElement("div")
}), En = (e) => {
	let t = (0, R.useContext)(Tn);
	return t.runtime.handlerUrl(t.element, e);
}, Dn = (e, t) => {
	for (let n of Object.getOwnPropertyNames(t)) if (n.startsWith("_jsrt")) {
		let r = n;
		e[r] = t[r];
	}
}, On = (e) => {
	let t = e && "jquery" in e ? e[0] : e;
	if (!t || !(t instanceof Element)) throw console.error("Invalid DOM element provided to renderBlock:", e), Error("Invalid DOM Element. See previously logged details.");
	return Dn(t, e), t;
}, kn = async (e) => {
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
}, An = ({ runtime: e, element: t, config: n, styles: r }) => async (i) => {
	let { core: a, theme: o } = await kn(n.mfe_config_api), s = On(t), c = s, l = s.attachShadow({ mode: "open" });
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
	}), (0, en.createRoot)(c).render(/* @__PURE__ */ (0, wn.jsx)(R.StrictMode, { children: /* @__PURE__ */ (0, wn.jsx)(Tn.Provider, {
		value: {
			runtime: e,
			element: s
		},
		children: /* @__PURE__ */ (0, wn.jsx)(bn, {
			locale: "en",
			children: i
		})
	}) }));
}, jn = () => ({
	contentType: "application/json",
	method: "POST"
}), Mn = (e) => {
	let t = {
		...jn(),
		...e
	};
	return typeof t.data == "object" && t.data !== null && t.contentType === "application/json" && (t.data = JSON.stringify(t.data)), new Promise((e, n) => {
		$.ajax(t).done(e).fail(n);
	});
}, Nn = async ({ saveUrl: e, data: t, runtime: n, errorMessage: r = "Failed to save configuration" }) => {
	n.notify("save", { state: "start" });
	let i;
	try {
		i = await Mn({
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
}, Pn = /* @__PURE__ */ t(((e, t) => {
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
function B(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
// node_modules/.pnpm/invariant@2.2.4/node_modules/invariant/browser.js
var Fn = /* @__PURE__ */ t(((e, t) => {
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
})), In = /* @__PURE__ */ e(s()), V = /* @__PURE__ */ e(Pn());
Fn();
function Ln(e) {
	return "default" + e.charAt(0).toUpperCase() + e.substr(1);
}
// node_modules/.pnpm/uncontrollable@7.2.1_react@18.3.1/node_modules/uncontrollable/lib/esm/hook.js
function Rn(e) {
	var t = zn(e, "string");
	return typeof t == "symbol" ? t : String(t);
}
function zn(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function Bn(e, t, n) {
	var r = (0, R.useRef)(e !== void 0), i = (0, R.useState)(t), a = i[0], o = i[1], s = e !== void 0, c = r.current;
	return r.current = s, !s && c && a !== t && o(t), [s ? e : a, (0, R.useCallback)(function(e) {
		var t = [...arguments].slice(1);
		n && n.apply(void 0, [e].concat(t)), o(e);
	}, [n])];
}
function Vn(e, t) {
	return Object.keys(t).reduce(function(n, r) {
		var i, a = n, o = a[Ln(r)], s = a[r], c = B(a, [Ln(r), r].map(Rn)), l = t[r], u = Bn(s, o, e[l]), d = u[0], f = u[1];
		return z({}, c, (i = {}, i[r] = d, i[l] = f, i));
	}, e);
}
// node_modules/.pnpm/@babel+runtime@7.29.14/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function Hn(e, t) {
	return Hn = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
		return e.__proto__ = t, e;
	}, Hn(e, t);
}
// node_modules/.pnpm/@babel+runtime@7.29.14/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
function Un(e, t) {
	e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Hn(e, t);
}
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/ThemeProvider.js
var Wn = /*#__PURE__*/ R.createContext({});
Wn.Consumer, Wn.Provider;
function Gn(e, t) {
	var n = (0, R.useContext)(Wn);
	return e || n[t] || t;
}
// node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/ownerDocument.js
function Kn(e) {
	return e && e.ownerDocument || document;
}
// node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/ownerWindow.js
function qn(e) {
	var t = Kn(e);
	return t && t.defaultView || window;
}
// node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/getComputedStyle.js
function Jn(e, t) {
	return qn(e).getComputedStyle(e, t);
}
// node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/hyphenate.js
var Yn = /([A-Z])/g;
function Xn(e) {
	return e.replace(Yn, "-$1").toLowerCase();
}
// node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/hyphenateStyle.js
var Zn = /^ms-/;
function Qn(e) {
	return Xn(e).replace(Zn, "-ms-");
}
// node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/isTransform.js
var $n = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
function er(e) {
	return !!(e && $n.test(e));
}
// node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/css.js
function tr(e, t) {
	var n = "", r = "";
	if (typeof t == "string") return e.style.getPropertyValue(Qn(t)) || Jn(e).getPropertyValue(Qn(t));
	Object.keys(t).forEach(function(i) {
		var a = t[i];
		!a && a !== 0 ? e.style.removeProperty(Qn(i)) : er(i) ? r += i + "(" + a + ") " : n += Qn(i) + ": " + a + ";";
	}), r && (n += "transform: " + r + ";"), e.style.cssText += ";" + n;
}
// node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/lib/ReactPropTypesSecret.js
var nr = /* @__PURE__ */ t(((e, t) => {
	t.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
})), rr = /* @__PURE__ */ t(((e, t) => {
	var n = nr();
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
})), ir = /* @__PURE__ */ t(((e, t) => {
	t.exports = rr()();
})), ar = { disabled: !1 }, or = R.createContext(null), sr = function(e) {
	return e.scrollTop;
}, cr = "unmounted", lr = "exited", ur = "entering", dr = "entered", fr = "exiting", pr = /*#__PURE__*/ function(e) {
	Un(t, e);
	function t(t, n) {
		var r = e.call(this, t, n) || this, i = n, a = i && !i.isMounting ? t.enter : t.appear, o;
		return r.appearStatus = null, t.in ? a ? (o = lr, r.appearStatus = ur) : o = dr : o = t.unmountOnExit || t.mountOnEnter ? cr : lr, r.state = { status: o }, r.nextCallback = null, r;
	}
	t.getDerivedStateFromProps = function(e, t) {
		return e.in && t.status === "unmounted" ? { status: lr } : null;
	};
	var n = t.prototype;
	return n.componentDidMount = function() {
		this.updateStatus(!0, this.appearStatus);
	}, n.componentDidUpdate = function(e) {
		var t = null;
		if (e !== this.props) {
			var n = this.state.status;
			this.props.in ? n !== "entering" && n !== "entered" && (t = ur) : (n === "entering" || n === "entered") && (t = fr);
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
					var n = this.props.nodeRef ? this.props.nodeRef.current : In.findDOMNode(this);
					n && sr(n);
				}
				this.performEnter(e);
			} else this.performExit();
		} else this.props.unmountOnExit && this.state.status === "exited" && this.setState({ status: cr });
	}, n.performEnter = function(e) {
		var t = this, n = this.props.enter, r = this.context ? this.context.isMounting : e, i = this.props.nodeRef ? [r] : [In.findDOMNode(this), r], a = i[0], o = i[1], s = this.getTimeouts(), c = r ? s.appear : s.enter;
		!e && !n || ar.disabled ? this.safeSetState({ status: dr }, function() {
			t.props.onEntered(a);
		}) : (this.props.onEnter(a, o), this.safeSetState({ status: ur }, function() {
			t.props.onEntering(a, o), t.onTransitionEnd(c, function() {
				t.safeSetState({ status: dr }, function() {
					t.props.onEntered(a, o);
				});
			});
		}));
	}, n.performExit = function() {
		var e = this, t = this.props.exit, n = this.getTimeouts(), r = this.props.nodeRef ? void 0 : In.findDOMNode(this);
		!t || ar.disabled ? this.safeSetState({ status: lr }, function() {
			e.props.onExited(r);
		}) : (this.props.onExit(r), this.safeSetState({ status: fr }, function() {
			e.props.onExiting(r), e.onTransitionEnd(n.exit, function() {
				e.safeSetState({ status: lr }, function() {
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
		var n = this.props.nodeRef ? this.props.nodeRef.current : In.findDOMNode(this), r = e == null && !this.props.addEndListener;
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
		return /*#__PURE__*/ R.createElement(or.Provider, { value: null }, typeof n == "function" ? n(e, r) : R.cloneElement(R.Children.only(n), r));
	}, t;
}(R.Component);
pr.contextType = or, pr.propTypes = {};
function mr() {}
pr.defaultProps = {
	in: !1,
	mountOnEnter: !1,
	unmountOnExit: !1,
	appear: !1,
	enter: !0,
	exit: !0,
	onEnter: mr,
	onEntering: mr,
	onEntered: mr,
	onExit: mr,
	onExiting: mr,
	onExited: mr
}, pr.UNMOUNTED = cr, pr.EXITED = lr, pr.ENTERING = ur, pr.ENTERED = dr, pr.EXITING = fr;
// node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/canUseDOM.js
var hr = !!(typeof window < "u" && window.document && window.document.createElement), gr = !1, _r = !1;
try {
	var vr = {
		get passive() {
			return gr = !0;
		},
		get once() {
			return _r = gr = !0;
		}
	};
	hr && (window.addEventListener("test", vr, vr), window.removeEventListener("test", vr, !0));
} catch {}
function yr(e, t, n, r) {
	if (r && typeof r != "boolean" && !_r) {
		var i = r.once, a = r.capture, o = n;
		!_r && i && (o = n.__once || function e(r) {
			this.removeEventListener(t, e, a), n.call(this, r);
		}, n.__once = o), e.addEventListener(t, o, gr ? r : a);
	}
	e.addEventListener(t, n, r);
}
// node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/removeEventListener.js
function br(e, t, n, r) {
	var i = r && typeof r != "boolean" ? r.capture : r;
	e.removeEventListener(t, n, i), n.__once && e.removeEventListener(t, n.__once, i);
}
// node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/listen.js
function xr(e, t, n, r) {
	return yr(e, t, n, r), function() {
		br(e, t, n, r);
	};
}
// node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/triggerEvent.js
function Sr(e, t, n, r) {
	if (n === void 0 && (n = !1), r === void 0 && (r = !0), e) {
		var i = document.createEvent("HTMLEvents");
		i.initEvent(t, n, r), e.dispatchEvent(i);
	}
}
// node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/transitionEnd.js
function Cr(e) {
	var t = tr(e, "transitionDuration") || "", n = t.indexOf("ms") === -1 ? 1e3 : 1;
	return parseFloat(t) * n;
}
function wr(e, t, n) {
	n === void 0 && (n = 5);
	var r = !1, i = setTimeout(function() {
		r || Sr(e, "transitionend", !0);
	}, t + n), a = xr(e, "transitionend", function() {
		r = !0;
	}, { once: !0 });
	return function() {
		clearTimeout(i), a();
	};
}
function Tr(e, t, n, r) {
	n ??= Cr(e) || 0;
	var i = wr(e, n, r), a = xr(e, "transitionend", t);
	return function() {
		i(), a();
	};
}
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/transitionEndListener.js
function Er(e, t) {
	var n = tr(e, t) || "", r = n.indexOf("ms") === -1 ? 1e3 : 1;
	return parseFloat(n) * r;
}
function Dr(e, t) {
	var n = Tr(e, function(r) {
		r.target === e && (n(), t(r));
	}, Er(e, "transitionDuration") + Er(e, "transitionDelay"));
}
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/triggerBrowserReflow.js
function Or(e) {
	e.offsetHeight;
}
// node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useCommittedRef.js
function kr(e) {
	let t = (0, R.useRef)(e);
	return (0, R.useEffect)(() => {
		t.current = e;
	}, [e]), t;
}
// node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useEventCallback.js
function Ar(e) {
	let t = kr(e);
	return (0, R.useCallback)(function(...e) {
		return t.current && t.current(...e);
	}, [t]);
}
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Fade.js
var jr = ["className", "children"], Mr, Nr = {
	in: !1,
	timeout: 300,
	mountOnEnter: !1,
	unmountOnExit: !1,
	appear: !1
}, Pr = (Mr = {}, Mr[ur] = "show", Mr[dr] = "show", Mr), Fr = /*#__PURE__*/ R.forwardRef(function(e, t) {
	var n = e.className, r = e.children, i = B(e, jr), a = (0, R.useCallback)(function(e) {
		Or(e), i.onEnter && i.onEnter(e);
	}, [i]);
	return /*#__PURE__*/ R.createElement(pr, z({
		ref: t,
		addEndListener: Dr
	}, i, { onEnter: a }), function(e, t) {
		return /*#__PURE__*/ R.cloneElement(r, z({}, t, { className: (0, V.default)("fade", n, r.props.className, Pr[e]) }));
	});
});
Fr.defaultProps = Nr, Fr.displayName = "Fade";
// node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/camelize.js
var Ir = /-(.)/g;
function Lr(e) {
	return e.replace(Ir, function(e, t) {
		return t.toUpperCase();
	});
}
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/createWithBsPrefix.js
var Rr = [
	"className",
	"bsPrefix",
	"as"
], zr = function(e) {
	return e[0].toUpperCase() + Lr(e).slice(1);
};
function Br(e, t) {
	var n = t === void 0 ? {} : t, r = n.displayName, i = r === void 0 ? zr(e) : r, a = n.Component, o = n.defaultProps, s = /*#__PURE__*/ R.forwardRef(function(t, n) {
		var r = t.className, i = t.bsPrefix, o = t.as, s = o === void 0 ? a || "div" : o, c = B(t, Rr), l = Gn(i, e);
		return /*#__PURE__*/ R.createElement(s, z({
			ref: n,
			className: (0, V.default)(r, l)
		}, c));
	});
	return s.defaultProps = o, s.displayName = i, s;
}
// node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useMounted.js
function Vr() {
	let e = (0, R.useRef)(!0), t = (0, R.useRef)(() => e.current);
	return (0, R.useEffect)(() => (e.current = !0, () => {
		e.current = !1;
	}), []), t.current;
}
// node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useUpdatedRef.js
function Hr(e) {
	let t = (0, R.useRef)(e);
	return t.current = e, t;
}
// node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useWillUnmount.js
function Ur(e) {
	let t = Hr(e);
	(0, R.useEffect)(() => () => t.current(), []);
}
// node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useTimeout.js
var Wr = 2 ** 31 - 1;
function Gr(e, t, n) {
	let r = n - Date.now();
	e.current = r <= Wr ? setTimeout(t, r) : setTimeout(() => Gr(e, t, n), Wr);
}
function Kr() {
	let e = Vr(), t = (0, R.useRef)();
	return Ur(() => clearTimeout(t.current)), (0, R.useMemo)(() => {
		let n = () => clearTimeout(t.current);
		function r(r, i = 0) {
			e() && (n(), i <= Wr ? t.current = setTimeout(r, i) : Gr(t, r, Date.now() + i));
		}
		return {
			set: r,
			clear: n,
			handleRef: t
		};
	}, []);
}
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Col.js
var qr = [
	"bsPrefix",
	"className",
	"as"
], Jr = [
	"xl",
	"lg",
	"md",
	"sm",
	"xs"
], Yr = /*#__PURE__*/ R.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.className, i = e.as, a = i === void 0 ? "div" : i, o = B(e, qr), s = Gn(n, "col"), c = [], l = [];
	return Jr.forEach(function(e) {
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
		className: V.default.apply(void 0, [r].concat(c, l))
	}));
});
Yr.displayName = "Col";
// node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useCallbackRef.js
function Xr() {
	return (0, R.useState)(null);
}
// node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useSafeState.js
function Zr(e) {
	let t = Vr();
	return [e[0], (0, R.useCallback)((n) => {
		if (t()) return e[1](n);
	}, [t, e[1]])];
}
var Qr = "bottom", $r = "right", ei = "left", ti = "auto", ni = [
	"top",
	Qr,
	$r,
	ei
], ri = "start", ii = "clippingParents", ai = "viewport", oi = "popper", H = "reference", si = /*#__PURE__*/ ni.reduce(function(e, t) {
	return e.concat([t + "-" + ri, t + "-end"]);
}, []), ci = /*#__PURE__*/ [].concat(ni, [ti]).reduce(function(e, t) {
	return e.concat([
		t,
		t + "-" + ri,
		t + "-end"
	]);
}, []), li = [
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
function ui(e) {
	return e.split("-")[0];
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getWindow.js
function di(e) {
	if (e == null) return window;
	if (e.toString() !== "[object Window]") {
		var t = e.ownerDocument;
		return t && t.defaultView || window;
	}
	return e;
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/instanceOf.js
function fi(e) {
	return e instanceof di(e).Element || e instanceof Element;
}
function pi(e) {
	return e instanceof di(e).HTMLElement || e instanceof HTMLElement;
}
function mi(e) {
	return typeof ShadowRoot > "u" ? !1 : e instanceof di(e).ShadowRoot || e instanceof ShadowRoot;
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/math.js
var hi = Math.max, gi = Math.min, _i = Math.round;
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/userAgent.js
function vi() {
	var e = navigator.userAgentData;
	return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(e) {
		return e.brand + "/" + e.version;
	}).join(" ") : navigator.userAgent;
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/isLayoutViewport.js
function yi() {
	return !/^((?!chrome|android).)*safari/i.test(vi());
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js
function bi(e, t, n) {
	t === void 0 && (t = !1), n === void 0 && (n = !1);
	var r = e.getBoundingClientRect(), i = 1, a = 1;
	t && pi(e) && (i = e.offsetWidth > 0 && _i(r.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && _i(r.height) / e.offsetHeight || 1);
	var o = (fi(e) ? di(e) : window).visualViewport, s = !yi() && n, c = (r.left + (s && o ? o.offsetLeft : 0)) / i, l = (r.top + (s && o ? o.offsetTop : 0)) / a, u = r.width / i, d = r.height / a;
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
function xi(e) {
	var t = bi(e), n = e.offsetWidth, r = e.offsetHeight;
	return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
		x: e.offsetLeft,
		y: e.offsetTop,
		width: n,
		height: r
	};
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/contains.js
function Si(e, t) {
	var n = t.getRootNode && t.getRootNode();
	if (e.contains(t)) return !0;
	if (n && mi(n)) {
		var r = t;
		do {
			if (r && e.isSameNode(r)) return !0;
			r = r.parentNode || r.host;
		} while (r);
	}
	return !1;
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getNodeName.js
function Ci(e) {
	return e ? (e.nodeName || "").toLowerCase() : null;
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js
function wi(e) {
	return di(e).getComputedStyle(e);
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/isTableElement.js
function Ti(e) {
	return [
		"table",
		"td",
		"th"
	].indexOf(Ci(e)) >= 0;
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js
function Ei(e) {
	return ((fi(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getParentNode.js
function Di(e) {
	return Ci(e) === "html" ? e : e.assignedSlot || e.parentNode || (mi(e) ? e.host : null) || Ei(e);
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js
function Oi(e) {
	return !pi(e) || wi(e).position === "fixed" ? null : e.offsetParent;
}
function ki(e) {
	var t = /firefox/i.test(vi());
	if (/Trident/i.test(vi()) && pi(e) && wi(e).position === "fixed") return null;
	var n = Di(e);
	for (mi(n) && (n = n.host); pi(n) && ["html", "body"].indexOf(Ci(n)) < 0;) {
		var r = wi(n);
		if (r.transform !== "none" || r.perspective !== "none" || r.contain === "paint" || ["transform", "perspective"].indexOf(r.willChange) !== -1 || t && r.willChange === "filter" || t && r.filter && r.filter !== "none") return n;
		n = n.parentNode;
	}
	return null;
}
function Ai(e) {
	for (var t = di(e), n = Oi(e); n && Ti(n) && wi(n).position === "static";) n = Oi(n);
	return n && (Ci(n) === "html" || Ci(n) === "body" && wi(n).position === "static") ? t : n || ki(e) || t;
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js
function ji(e) {
	return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/within.js
function Mi(e, t, n) {
	return hi(e, gi(t, n));
}
function Ni(e, t, n) {
	var r = Mi(e, t, n);
	return r > n ? n : r;
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getFreshSideObject.js
function Pi() {
	return {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0
	};
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/mergePaddingObject.js
function Fi(e) {
	return Object.assign({}, Pi(), e);
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/expandToHashMap.js
function Ii(e, t) {
	return t.reduce(function(t, n) {
		return t[n] = e, t;
	}, {});
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/arrow.js
var Li = function(e, t) {
	return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, Fi(typeof e == "number" ? Ii(e, ni) : e);
};
function Ri(e) {
	var t, n = e.state, r = e.name, i = e.options, a = n.elements.arrow, o = n.modifiersData.popperOffsets, s = ui(n.placement), c = ji(s), l = ["left", "right"].indexOf(s) >= 0 ? "height" : "width";
	if (a && o) {
		var u = Li(i.padding, n), d = xi(a), f = c === "y" ? "top" : ei, p = c === "y" ? Qr : $r, m = n.rects.reference[l] + n.rects.reference[c] - o[c] - n.rects.popper[l], h = o[c] - n.rects.reference[c], g = Ai(a), _ = g ? c === "y" ? g.clientHeight || 0 : g.clientWidth || 0 : 0, v = m / 2 - h / 2, y = u[f], b = _ - d[l] - u[p], x = _ / 2 - d[l] / 2 + v, S = Mi(y, x, b), C = c;
		n.modifiersData[r] = (t = {}, t[C] = S, t.centerOffset = S - x, t);
	}
}
function zi(e) {
	var t = e.state, n = e.options.element, r = n === void 0 ? "[data-popper-arrow]" : n;
	r != null && (typeof r == "string" && (r = t.elements.popper.querySelector(r), !r) || Si(t.elements.popper, r) && (t.elements.arrow = r));
}
var Bi = {
	name: "arrow",
	enabled: !0,
	phase: "main",
	fn: Ri,
	effect: zi,
	requires: ["popperOffsets"],
	requiresIfExists: ["preventOverflow"]
};
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getVariation.js
function Vi(e) {
	return e.split("-")[1];
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/computeStyles.js
var Hi = {
	top: "auto",
	right: "auto",
	bottom: "auto",
	left: "auto"
};
function Ui(e, t) {
	var n = e.x, r = e.y, i = t.devicePixelRatio || 1;
	return {
		x: _i(n * i) / i || 0,
		y: _i(r * i) / i || 0
	};
}
function Wi(e) {
	var t, n = e.popper, r = e.popperRect, i = e.placement, a = e.variation, o = e.offsets, s = e.position, c = e.gpuAcceleration, l = e.adaptive, u = e.roundOffsets, d = e.isFixed, f = o.x, p = f === void 0 ? 0 : f, m = o.y, h = m === void 0 ? 0 : m, g = typeof u == "function" ? u({
		x: p,
		y: h
	}) : {
		x: p,
		y: h
	};
	p = g.x, h = g.y;
	var _ = o.hasOwnProperty("x"), v = o.hasOwnProperty("y"), y = ei, b = "top", x = window;
	if (l) {
		var S = Ai(n), C = "clientHeight", w = "clientWidth";
		if (S === di(n) && (S = Ei(n), wi(S).position !== "static" && s === "absolute" && (C = "scrollHeight", w = "scrollWidth")), S = S, i === "top" || (i === "left" || i === "right") && a === "end") {
			b = Qr;
			var T = d && S === x && x.visualViewport ? x.visualViewport.height : S[C];
			h -= T - r.height, h *= c ? 1 : -1;
		}
		if (i === "left" || (i === "top" || i === "bottom") && a === "end") {
			y = $r;
			var E = d && S === x && x.visualViewport ? x.visualViewport.width : S[w];
			p -= E - r.width, p *= c ? 1 : -1;
		}
	}
	var D = Object.assign({ position: s }, l && Hi), O = u === !0 ? Ui({
		x: p,
		y: h
	}, di(n)) : {
		x: p,
		y: h
	};
	if (p = O.x, h = O.y, c) {
		var k;
		return Object.assign({}, D, (k = {}, k[b] = v ? "0" : "", k[y] = _ ? "0" : "", k.transform = (x.devicePixelRatio || 1) <= 1 ? "translate(" + p + "px, " + h + "px)" : "translate3d(" + p + "px, " + h + "px, 0)", k));
	}
	return Object.assign({}, D, (t = {}, t[b] = v ? h + "px" : "", t[y] = _ ? p + "px" : "", t.transform = "", t));
}
function Gi(e) {
	var t = e.state, n = e.options, r = n.gpuAcceleration, i = r === void 0 || r, a = n.adaptive, o = a === void 0 || a, s = n.roundOffsets, c = s === void 0 || s, l = {
		placement: ui(t.placement),
		variation: Vi(t.placement),
		popper: t.elements.popper,
		popperRect: t.rects.popper,
		gpuAcceleration: i,
		isFixed: t.options.strategy === "fixed"
	};
	t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Wi(Object.assign({}, l, {
		offsets: t.modifiersData.popperOffsets,
		position: t.options.strategy,
		adaptive: o,
		roundOffsets: c
	})))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Wi(Object.assign({}, l, {
		offsets: t.modifiersData.arrow,
		position: "absolute",
		adaptive: !1,
		roundOffsets: c
	})))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
var Ki = {
	name: "computeStyles",
	enabled: !0,
	phase: "beforeWrite",
	fn: Gi,
	data: {}
}, U = { passive: !0 };
function qi(e) {
	var t = e.state, n = e.instance, r = e.options, i = r.scroll, a = i === void 0 || i, o = r.resize, s = o === void 0 || o, c = di(t.elements.popper), l = [].concat(t.scrollParents.reference, t.scrollParents.popper);
	return a && l.forEach(function(e) {
		e.addEventListener("scroll", n.update, U);
	}), s && c.addEventListener("resize", n.update, U), function() {
		a && l.forEach(function(e) {
			e.removeEventListener("scroll", n.update, U);
		}), s && c.removeEventListener("resize", n.update, U);
	};
}
var Ji = {
	name: "eventListeners",
	enabled: !0,
	phase: "write",
	fn: function() {},
	effect: qi,
	data: {}
}, Yi = {
	left: "right",
	right: "left",
	bottom: "top",
	top: "bottom"
};
function Xi(e) {
	return e.replace(/left|right|bottom|top/g, function(e) {
		return Yi[e];
	});
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js
var Zi = {
	start: "end",
	end: "start"
};
function Qi(e) {
	return e.replace(/start|end/g, function(e) {
		return Zi[e];
	});
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js
function $i(e) {
	var t = di(e);
	return {
		scrollLeft: t.pageXOffset,
		scrollTop: t.pageYOffset
	};
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js
function ea(e) {
	return bi(Ei(e)).left + $i(e).scrollLeft;
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js
function ta(e, t) {
	var n = di(e), r = Ei(e), i = n.visualViewport, a = r.clientWidth, o = r.clientHeight, s = 0, c = 0;
	if (i) {
		a = i.width, o = i.height;
		var l = yi();
		(l || !l && t === "fixed") && (s = i.offsetLeft, c = i.offsetTop);
	}
	return {
		width: a,
		height: o,
		x: s + ea(e),
		y: c
	};
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js
function na(e) {
	var t = Ei(e), n = $i(e), r = e.ownerDocument?.body, i = hi(t.scrollWidth, t.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0), a = hi(t.scrollHeight, t.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0), o = -n.scrollLeft + ea(e), s = -n.scrollTop;
	return wi(r || t).direction === "rtl" && (o += hi(t.clientWidth, r ? r.clientWidth : 0) - i), {
		width: i,
		height: a,
		x: o,
		y: s
	};
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js
function ra(e) {
	var t = wi(e), n = t.overflow, r = t.overflowX, i = t.overflowY;
	return /auto|scroll|overlay|hidden/.test(n + i + r);
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js
function ia(e) {
	return [
		"html",
		"body",
		"#document"
	].indexOf(Ci(e)) >= 0 ? e.ownerDocument.body : pi(e) && ra(e) ? e : ia(Di(e));
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js
function aa(e, t) {
	t === void 0 && (t = []);
	var n = ia(e), r = n === e.ownerDocument?.body, i = di(n), a = r ? [i].concat(i.visualViewport || [], ra(n) ? n : []) : n, o = t.concat(a);
	return r ? o : o.concat(aa(Di(a)));
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/rectToClientRect.js
function oa(e) {
	return Object.assign({}, e, {
		left: e.x,
		top: e.y,
		right: e.x + e.width,
		bottom: e.y + e.height
	});
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js
function sa(e, t) {
	var n = bi(e, !1, t === "fixed");
	return n.top += e.clientTop, n.left += e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function ca(e, t, n) {
	return t === "viewport" ? oa(ta(e, n)) : fi(t) ? sa(t, n) : oa(na(Ei(e)));
}
function la(e) {
	var t = aa(Di(e)), n = ["absolute", "fixed"].indexOf(wi(e).position) >= 0 && pi(e) ? Ai(e) : e;
	return fi(n) ? t.filter(function(e) {
		return fi(e) && Si(e, n) && Ci(e) !== "body";
	}) : [];
}
function ua(e, t, n, r) {
	var i = t === "clippingParents" ? la(e) : [].concat(t), a = [].concat(i, [n]), o = a[0], s = a.reduce(function(t, n) {
		var i = ca(e, n, r);
		return t.top = hi(i.top, t.top), t.right = gi(i.right, t.right), t.bottom = gi(i.bottom, t.bottom), t.left = hi(i.left, t.left), t;
	}, ca(e, o, r));
	return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/computeOffsets.js
function da(e) {
	var t = e.reference, n = e.element, r = e.placement, i = r ? ui(r) : null, a = r ? Vi(r) : null, o = t.x + t.width / 2 - n.width / 2, s = t.y + t.height / 2 - n.height / 2, c;
	switch (i) {
		case "top":
			c = {
				x: o,
				y: t.y - n.height
			};
			break;
		case Qr:
			c = {
				x: o,
				y: t.y + t.height
			};
			break;
		case $r:
			c = {
				x: t.x + t.width,
				y: s
			};
			break;
		case ei:
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
	var l = i ? ji(i) : null;
	if (l != null) {
		var u = l === "y" ? "height" : "width";
		switch (a) {
			case ri:
				c[l] = c[l] - (t[u] / 2 - n[u] / 2);
				break;
			case "end": c[l] = c[l] + (t[u] / 2 - n[u] / 2);
		}
	}
	return c;
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/detectOverflow.js
function fa(e, t) {
	t === void 0 && (t = {});
	var n = t, r = n.placement, i = r === void 0 ? e.placement : r, a = n.strategy, o = a === void 0 ? e.strategy : a, s = n.boundary, c = s === void 0 ? ii : s, l = n.rootBoundary, u = l === void 0 ? ai : l, d = n.elementContext, f = d === void 0 ? oi : d, p = n.altBoundary, m = p !== void 0 && p, h = n.padding, g = h === void 0 ? 0 : h, _ = Fi(typeof g == "number" ? Ii(g, ni) : g), v = f === "popper" ? H : oi, y = e.rects.popper, b = e.elements[m ? v : f], x = ua(fi(b) ? b : b.contextElement || Ei(e.elements.popper), c, u, o), S = bi(e.elements.reference), C = da({
		reference: S,
		element: y,
		strategy: "absolute",
		placement: i
	}), w = oa(Object.assign({}, y, C)), T = f === "popper" ? w : S, E = {
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
function pa(e, t) {
	t === void 0 && (t = {});
	var n = t, r = n.placement, i = n.boundary, a = n.rootBoundary, o = n.padding, s = n.flipVariations, c = n.allowedAutoPlacements, l = c === void 0 ? ci : c, u = Vi(r), d = u ? s ? si : si.filter(function(e) {
		return Vi(e) === u;
	}) : ni, f = d.filter(function(e) {
		return l.indexOf(e) >= 0;
	});
	f.length === 0 && (f = d);
	var p = f.reduce(function(t, n) {
		return t[n] = fa(e, {
			placement: n,
			boundary: i,
			rootBoundary: a,
			padding: o
		})[ui(n)], t;
	}, {});
	return Object.keys(p).sort(function(e, t) {
		return p[e] - p[t];
	});
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/flip.js
function ma(e) {
	if (ui(e) === "auto") return [];
	var t = Xi(e);
	return [
		Qi(e),
		t,
		Qi(t)
	];
}
function ha(e) {
	var t = e.state, n = e.options, r = e.name;
	if (!t.modifiersData[r]._skip) {
		for (var i = n.mainAxis, a = i === void 0 || i, o = n.altAxis, s = o === void 0 || o, c = n.fallbackPlacements, l = n.padding, u = n.boundary, d = n.rootBoundary, f = n.altBoundary, p = n.flipVariations, m = p === void 0 || p, h = n.allowedAutoPlacements, g = t.options.placement, _ = ui(g) === g, v = c || (_ || !m ? [Xi(g)] : ma(g)), y = [g].concat(v).reduce(function(e, n) {
			return e.concat(ui(n) === "auto" ? pa(t, {
				placement: n,
				boundary: u,
				rootBoundary: d,
				padding: l,
				flipVariations: m,
				allowedAutoPlacements: h
			}) : n);
		}, []), b = t.rects.reference, x = t.rects.popper, S = /* @__PURE__ */ new Map(), C = !0, w = y[0], T = 0; T < y.length; T++) {
			var E = y[T], D = ui(E), O = Vi(E) === ri, k = ["top", Qr].indexOf(D) >= 0, ee = k ? "width" : "height", A = fa(t, {
				placement: E,
				boundary: u,
				rootBoundary: d,
				altBoundary: f,
				padding: l
			}), j = k ? O ? $r : ei : O ? Qr : "top";
			b[ee] > x[ee] && (j = Xi(j));
			var te = Xi(j), M = [];
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
var ga = {
	name: "flip",
	enabled: !0,
	phase: "main",
	fn: ha,
	requiresIfExists: ["offset"],
	data: { _skip: !1 }
};
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/hide.js
function _a(e, t, n) {
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
function va(e) {
	return [
		"top",
		$r,
		Qr,
		ei
	].some(function(t) {
		return e[t] >= 0;
	});
}
function ya(e) {
	var t = e.state, n = e.name, r = t.rects.reference, i = t.rects.popper, a = t.modifiersData.preventOverflow, o = fa(t, { elementContext: "reference" }), s = fa(t, { altBoundary: !0 }), c = _a(o, r), l = _a(s, i, a), u = va(c), d = va(l);
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
var ba = {
	name: "hide",
	enabled: !0,
	phase: "main",
	requiresIfExists: ["preventOverflow"],
	fn: ya
};
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/offset.js
function xa(e, t, n) {
	var r = ui(e), i = ["left", "top"].indexOf(r) >= 0 ? -1 : 1, a = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n, o = a[0], s = a[1];
	return o ||= 0, s = (s || 0) * i, ["left", "right"].indexOf(r) >= 0 ? {
		x: s,
		y: o
	} : {
		x: o,
		y: s
	};
}
function Sa(e) {
	var t = e.state, n = e.options, r = e.name, i = n.offset, a = i === void 0 ? [0, 0] : i, o = ci.reduce(function(e, n) {
		return e[n] = xa(n, t.rects, a), e;
	}, {}), s = o[t.placement], c = s.x, l = s.y;
	t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += c, t.modifiersData.popperOffsets.y += l), t.modifiersData[r] = o;
}
var Ca = {
	name: "offset",
	enabled: !0,
	phase: "main",
	requires: ["popperOffsets"],
	fn: Sa
};
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/popperOffsets.js
function wa(e) {
	var t = e.state, n = e.name;
	t.modifiersData[n] = da({
		reference: t.rects.reference,
		element: t.rects.popper,
		strategy: "absolute",
		placement: t.placement
	});
}
var Ta = {
	name: "popperOffsets",
	enabled: !0,
	phase: "read",
	fn: wa,
	data: {}
};
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getAltAxis.js
function Ea(e) {
	return e === "x" ? "y" : "x";
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/preventOverflow.js
function Da(e) {
	var t = e.state, n = e.options, r = e.name, i = n.mainAxis, a = i === void 0 || i, o = n.altAxis, s = o !== void 0 && o, c = n.boundary, l = n.rootBoundary, u = n.altBoundary, d = n.padding, f = n.tether, p = f === void 0 || f, m = n.tetherOffset, h = m === void 0 ? 0 : m, g = fa(t, {
		boundary: c,
		rootBoundary: l,
		padding: d,
		altBoundary: u
	}), _ = ui(t.placement), v = Vi(t.placement), y = !v, b = ji(_), x = Ea(b), S = t.modifiersData.popperOffsets, C = t.rects.reference, w = t.rects.popper, T = typeof h == "function" ? h(Object.assign({}, t.rects, { placement: t.placement })) : h, E = typeof T == "number" ? {
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
			var k = b === "y" ? "top" : ei, ee = b === "y" ? Qr : $r, A = b === "y" ? "height" : "width", j = S[b], te = j + g[k], M = j - g[ee], N = p ? -w[A] / 2 : 0, ne = v === "start" ? C[A] : w[A], re = v === "start" ? -w[A] : -C[A], ie = t.elements.arrow, P = p && ie ? xi(ie) : {
				width: 0,
				height: 0
			}, ae = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Pi(), oe = ae[k], se = ae[ee], ce = Mi(0, C[A], P[A]), le = y ? C[A] / 2 - N - ce - oe - E.mainAxis : ne - ce - oe - E.mainAxis, ue = y ? -C[A] / 2 + N + ce + se + E.mainAxis : re + ce + se + E.mainAxis, de = t.elements.arrow && Ai(t.elements.arrow), fe = de ? b === "y" ? de.clientTop || 0 : de.clientLeft || 0 : 0, pe = D?.[b] ?? 0, me = j + le - pe - fe, he = j + ue - pe, ge = Mi(p ? gi(te, me) : te, j, p ? hi(M, he) : M);
			S[b] = ge, O[b] = ge - j;
		}
		if (s) {
			var _e = b === "x" ? "top" : ei, ve = b === "x" ? Qr : $r, ye = S[x], be = x === "y" ? "height" : "width", xe = ye + g[_e], Se = ye - g[ve], Ce = ["top", ei].indexOf(_) !== -1, we = D?.[x] ?? 0, Te = Ce ? xe : ye - C[be] - w[be] - we + E.altAxis, Ee = Ce ? ye + C[be] + w[be] - we - E.altAxis : Se, F = p && Ce ? Ni(Te, ye, Ee) : Mi(p ? Te : xe, ye, p ? Ee : Se);
			S[x] = F, O[x] = F - ye;
		}
		t.modifiersData[r] = O;
	}
}
var Oa = {
	name: "preventOverflow",
	enabled: !0,
	phase: "main",
	fn: Da,
	requiresIfExists: ["offset"]
};
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js
function ka(e) {
	return {
		scrollLeft: e.scrollLeft,
		scrollTop: e.scrollTop
	};
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js
function Aa(e) {
	return e === di(e) || !pi(e) ? $i(e) : ka(e);
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js
function ja(e) {
	var t = e.getBoundingClientRect(), n = _i(t.width) / e.offsetWidth || 1, r = _i(t.height) / e.offsetHeight || 1;
	return n !== 1 || r !== 1;
}
function Ma(e, t, n) {
	n === void 0 && (n = !1);
	var r = pi(t), i = pi(t) && ja(t), a = Ei(t), o = bi(e, i, n), s = {
		scrollLeft: 0,
		scrollTop: 0
	}, c = {
		x: 0,
		y: 0
	};
	return (r || !r && !n) && ((Ci(t) !== "body" || ra(a)) && (s = Aa(t)), pi(t) ? (c = bi(t, !0), c.x += t.clientLeft, c.y += t.clientTop) : a && (c.x = ea(a))), {
		x: o.left + s.scrollLeft - c.x,
		y: o.top + s.scrollTop - c.y,
		width: o.width,
		height: o.height
	};
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/orderModifiers.js
function Na(e) {
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
function Pa(e) {
	var t = Na(e);
	return li.reduce(function(e, n) {
		return e.concat(t.filter(function(e) {
			return e.phase === n;
		}));
	}, []);
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/debounce.js
function Fa(e) {
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
function Ia(e) {
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
var La = {
	placement: "bottom",
	modifiers: [],
	strategy: "absolute"
};
function Ra() {
	return ![...arguments].some(function(e) {
		return !(e && typeof e.getBoundingClientRect == "function");
	});
}
function za(e) {
	e === void 0 && (e = {});
	var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, i = t.defaultOptions, a = i === void 0 ? La : i;
	return function(e, t, n) {
		n === void 0 && (n = a);
		var i = {
			placement: "bottom",
			orderedModifiers: [],
			options: Object.assign({}, La, a),
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
					reference: fi(e) ? aa(e) : e.contextElement ? aa(e.contextElement) : [],
					popper: aa(t)
				};
				var s = Pa(Ia([].concat(r, i.options.modifiers)));
				return i.orderedModifiers = s.filter(function(e) {
					return e.enabled;
				}), l(), c.update();
			},
			forceUpdate: function() {
				if (!s) {
					var e = i.elements, t = e.reference, n = e.popper;
					if (Ra(t, n)) {
						i.rects = {
							reference: Ma(t, Ai(n), i.options.strategy === "fixed"),
							popper: xi(n)
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
			update: Fa(function() {
				return new Promise(function(e) {
					c.forceUpdate(), e(i);
				});
			}),
			destroy: function() {
				u(), s = !0;
			}
		};
		if (!Ra(e, t)) return c;
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
var Ba = za({ defaultModifiers: [
	ba,
	Ta,
	Ki,
	Ji,
	Ca,
	ga,
	Oa,
	Bi
] }), Va = function(e) {
	return {
		position: e,
		top: "0",
		left: "0",
		opacity: "0",
		pointerEvents: "none"
	};
}, Ha = {
	name: "applyStyles",
	enabled: !1
}, Ua = {
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
}, Wa = [];
function Ga(e, t, n) {
	var r = n === void 0 ? {} : n, i = r.enabled, a = i === void 0 || i, o = r.placement, s = o === void 0 ? "bottom" : o, c = r.strategy, l = c === void 0 ? "absolute" : c, u = r.modifiers, d = u === void 0 ? Wa : u, f = B(r, [
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
	}, []), g = Zr((0, R.useState)({
		placement: s,
		update: m,
		forceUpdate: h,
		attributes: {},
		styles: {
			popper: Va(l),
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
			modifiers: [].concat(d, [y, Ha])
		});
	}, [
		l,
		s,
		y,
		a
	]), (0, R.useEffect)(function() {
		if (a && e != null && t != null) return p.current = Ba(e, t, z({}, f, {
			placement: s,
			strategy: l,
			modifiers: [].concat(d, [Ua, y])
		})), function() {
			p.current != null && (p.current.destroy(), p.current = void 0, v(function(e) {
				return z({}, e, {
					attributes: {},
					styles: { popper: Va(l) }
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
function Ka(e, t) {
	if (e.contains) return e.contains(t);
	if (e.compareDocumentPosition) return e === t || !!(e.compareDocumentPosition(t) & 16);
}
// node_modules/.pnpm/warning@4.0.3/node_modules/warning/warning.js
var qa = /* @__PURE__ */ t(((e, t) => {
	t.exports = function() {};
})), Ja = /* @__PURE__ */ e(qa());
function Ya(e) {
	return e && "setState" in e ? In.findDOMNode(e) : e ?? null;
}
// node_modules/.pnpm/react-overlays@5.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-overlays/esm/ownerDocument.js
var Xa = (function(e) {
	return Kn(Ya(e));
}), Za = 27, Qa = function() {};
function $a(e) {
	return e.button === 0;
}
function eo(e) {
	return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
var to = function(e) {
	return e && ("current" in e ? e.current : e);
};
function no(e, t, n) {
	var r = n === void 0 ? {} : n, i = r.disabled, a = r.clickTrigger, o = a === void 0 ? "click" : a, s = (0, R.useRef)(!1), c = t || Qa, l = (0, R.useCallback)(function(t) {
		var n = to(e);
		(0, Ja.default)(!!n, "RootClose captured a close event but does not have a ref to compare it to. useRootClose(), should be passed a ref that resolves to a DOM node"), s.current = !n || eo(t) || !$a(t) || !!Ka(n, (t.composedPath == null ? void 0 : t.composedPath()[0]) ?? t.target);
	}, [e]), u = Ar(function(e) {
		s.current || c(e);
	}), d = Ar(function(e) {
		e.keyCode === Za && c(e);
	});
	(0, R.useEffect)(function() {
		if (!(i || e == null)) {
			var t = window.event, n = Xa(to(e)), r = xr(n, o, l, !0), a = xr(n, o, function(e) {
				e === t ? t = void 0 : u(e);
			}), s = xr(n, "keyup", function(e) {
				e === t ? t = void 0 : d(e);
			}), c = [];
			return "ontouchstart" in n.documentElement && (c = [].slice.call(n.body.children).map(function(e) {
				return xr(e, "mousemove", Qa);
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
function ro(e) {
	var t = {};
	return Array.isArray(e) ? (e?.forEach(function(e) {
		t[e.name] = e;
	}), t) : e || t;
}
function io(e) {
	return e === void 0 && (e = {}), Array.isArray(e) ? e : Object.keys(e).map(function(t) {
		return e[t].name = t, e[t];
	});
}
function ao(e) {
	var t = e.enabled, n = e.enableEvents, r = e.placement, i = e.flip, a = e.offset, o = e.fixed, s = e.containerPadding, c = e.arrowElement, l = e.popperConfig, u = l === void 0 ? {} : l, d = ro(u.modifiers);
	return z({}, u, {
		placement: r,
		enabled: t,
		strategy: o ? "fixed" : u.strategy,
		modifiers: io(z({}, d, {
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
var oo = (e) => !e || typeof e == "function" ? e : (t) => {
	e.current = t;
};
function so(e, t) {
	let n = oo(e), r = oo(t);
	return (e) => {
		n && n(e), r && r(e);
	};
}
function co(e, t) {
	return (0, R.useMemo)(() => so(e, t), [e, t]);
}
// node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/hasClass.js
function lo(e, t) {
	return e.classList ? !!t && e.classList.contains(t) : (" " + (e.className.baseVal || e.className) + " ").indexOf(" " + t + " ") !== -1;
}
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/usePopperMarginModifiers.js
function uo(e) {
	var t = window.getComputedStyle(e);
	return {
		top: parseFloat(t.marginTop) || 0,
		right: parseFloat(t.marginRight) || 0,
		bottom: parseFloat(t.marginBottom) || 0,
		left: parseFloat(t.marginLeft) || 0
	};
}
function fo() {
	var e = (0, R.useRef)(null), t = (0, R.useRef)(null), n = (0, R.useRef)(null), r = Gn(void 0, "popover"), i = Gn(void 0, "dropdown-menu");
	return [(0, R.useCallback)(function(n) {
		n && (lo(n, r) || lo(n, i)) && (t.current = uo(n), n.style.margin = "0", e.current = n);
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
					if (e.current && i.elements.arrow && lo(e.current, r)) {
						if (i.modifiersData["arrow#persistent"]) {
							var a = uo(i.elements.arrow), o = a.top, s = a.right, c = o || s;
							i.modifiersData["arrow#persistent"].padding = {
								top: c,
								left: c,
								right: c,
								bottom: c
							};
						} else n.current = uo(i.elements.arrow);
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
var po = /* @__PURE__ */ t(((e, t) => {
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
})), mo = /* @__PURE__ */ t(((e, t) => {
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
})), ho = /* @__PURE__ */ t(((e, t) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = i;
	var n = r(mo());
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
}));
ho();
var W = /* @__PURE__ */ e(ir()), go = [
	"as",
	"className",
	"type",
	"tooltip"
], _o = {
	type: W.default.string,
	tooltip: W.default.bool,
	as: W.default.elementType
}, vo = /*#__PURE__*/ R.forwardRef(function(e, t) {
	var n = e.as, r = n === void 0 ? "div" : n, i = e.className, a = e.type, o = a === void 0 ? "valid" : a, s = e.tooltip, c = s !== void 0 && s, l = B(e, go);
	return /*#__PURE__*/ R.createElement(r, z({}, l, {
		ref: t,
		className: (0, V.default)(i, o + "-" + (c ? "tooltip" : "feedback"))
	}));
});
vo.displayName = "Feedback", vo.propTypes = _o;
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormContext.js
var yo = /*#__PURE__*/ R.createContext({ controlId: void 0 }), bo = [
	"id",
	"bsPrefix",
	"bsCustomPrefix",
	"className",
	"type",
	"isValid",
	"isInvalid",
	"isStatic",
	"as"
], xo = /*#__PURE__*/ R.forwardRef(function(e, t) {
	var n = e.id, r = e.bsPrefix, i = e.bsCustomPrefix, a = e.className, o = e.type, s = o === void 0 ? "checkbox" : o, c = e.isValid, l = c !== void 0 && c, u = e.isInvalid, d = u !== void 0 && u, f = e.isStatic, p = e.as, m = p === void 0 ? "input" : p, h = B(e, bo), g = (0, R.useContext)(yo), _ = g.controlId, v = g.custom ? [i, "custom-control-input"] : [r, "form-check-input"], y = v[0], b = v[1];
	return r = Gn(y, b), /*#__PURE__*/ R.createElement(m, z({}, h, {
		ref: t,
		type: s,
		id: n || _,
		className: (0, V.default)(a, r, l && "is-valid", d && "is-invalid", f && "position-static")
	}));
});
xo.displayName = "FormCheckInput";
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormCheckLabel.js
var So = [
	"bsPrefix",
	"bsCustomPrefix",
	"className",
	"htmlFor"
], Co = /*#__PURE__*/ R.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.bsCustomPrefix, i = e.className, a = e.htmlFor, o = B(e, So), s = (0, R.useContext)(yo), c = s.controlId, l = s.custom ? [r, "custom-control-label"] : [n, "form-check-label"], u = l[0], d = l[1];
	return n = Gn(u, d), /*#__PURE__*/ R.createElement("label", z({}, o, {
		ref: t,
		htmlFor: a || c,
		className: (0, V.default)(i, n)
	}));
});
Co.displayName = "FormCheckLabel";
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormCheck.js
var wo = [
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
], To = /*#__PURE__*/ R.forwardRef(function(e, t) {
	var n = e.id, r = e.bsPrefix, i = e.bsCustomPrefix, a = e.inline, o = a !== void 0 && a, s = e.disabled, c = s !== void 0 && s, l = e.isValid, u = l !== void 0 && l, d = e.isInvalid, f = d !== void 0 && d, p = e.feedbackTooltip, m = p !== void 0 && p, h = e.feedback, g = e.className, _ = e.style, v = e.title, y = v === void 0 ? "" : v, b = e.type, x = b === void 0 ? "checkbox" : b, S = e.label, C = e.children, w = e.custom, T = e.as, E = T === void 0 ? "input" : T, D = B(e, wo), O = x === "switch" || w, k = O ? [i, "custom-control"] : [r, "form-check"], ee = k[0], A = k[1];
	r = Gn(ee, A);
	var j = (0, R.useContext)(yo).controlId, te = (0, R.useMemo)(function() {
		return {
			controlId: n || j,
			custom: O
		};
	}, [
		j,
		O,
		n
	]), M = O || S != null && S !== !1 && !C, N = /*#__PURE__*/ R.createElement(xo, z({}, D, {
		type: x === "switch" ? "checkbox" : x,
		ref: t,
		isValid: u,
		isInvalid: f,
		isStatic: !M,
		disabled: c,
		as: E
	}));
	return /*#__PURE__*/ R.createElement(yo.Provider, { value: te }, /*#__PURE__*/ R.createElement("div", {
		style: _,
		className: (0, V.default)(g, r, O && "custom-" + x, o && r + "-inline")
	}, C || /*#__PURE__*/ R.createElement(R.Fragment, null, N, M && /*#__PURE__*/ R.createElement(Co, { title: y }, S), (u || f) && /*#__PURE__*/ R.createElement(vo, {
		type: u ? "valid" : "invalid",
		tooltip: m
	}, h))));
});
To.displayName = "FormCheck", To.Input = xo, To.Label = Co;
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormFileInput.js
var Eo = [
	"id",
	"bsPrefix",
	"bsCustomPrefix",
	"className",
	"isValid",
	"isInvalid",
	"lang",
	"as"
], G = /*#__PURE__*/ R.forwardRef(function(e, t) {
	var n = e.id, r = e.bsPrefix, i = e.bsCustomPrefix, a = e.className, o = e.isValid, s = e.isInvalid, c = e.lang, l = e.as, u = l === void 0 ? "input" : l, d = B(e, Eo), f = (0, R.useContext)(yo), p = f.controlId, m = f.custom, h = "file", g = m ? [i, "custom-file-input"] : [r, "form-control-file"], _ = g[0], v = g[1];
	return r = Gn(_, v), /*#__PURE__*/ R.createElement(u, z({}, d, {
		ref: t,
		id: n || p,
		type: h,
		lang: c,
		className: (0, V.default)(a, r, o && "is-valid", s && "is-invalid")
	}));
});
G.displayName = "FormFileInput";
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormFileLabel.js
var Do = [
	"bsPrefix",
	"bsCustomPrefix",
	"className",
	"htmlFor"
], Oo = /*#__PURE__*/ R.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.bsCustomPrefix, i = e.className, a = e.htmlFor, o = B(e, Do), s = (0, R.useContext)(yo), c = s.controlId, l = s.custom ? [r, "custom-file-label"] : [n, "form-file-label"], u = l[0], d = l[1];
	return n = Gn(u, d), /*#__PURE__*/ R.createElement("label", z({}, o, {
		ref: t,
		htmlFor: a || c,
		className: (0, V.default)(i, n),
		"data-browse": o["data-browse"]
	}));
});
Oo.displayName = "FormFileLabel";
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormFile.js
var ko = [
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
], Ao = /*#__PURE__*/ R.forwardRef(function(e, t) {
	var n = e.id, r = e.bsPrefix, i = e.bsCustomPrefix, a = e.disabled, o = a !== void 0 && a, s = e.isValid, c = s !== void 0 && s, l = e.isInvalid, u = l !== void 0 && l, d = e.feedbackTooltip, f = d !== void 0 && d, p = e.feedback, m = e.className, h = e.style, g = e.label, _ = e.children, v = e.custom, y = e.lang, b = e["data-browse"], x = e.as, S = x === void 0 ? "div" : x, C = e.inputAs, w = C === void 0 ? "input" : C, T = B(e, ko), E = v ? [i, "custom"] : [r, "form-file"], D = E[0], O = E[1];
	r = Gn(D, O);
	var k = "file", ee = (0, R.useContext)(yo).controlId, A = (0, R.useMemo)(function() {
		return {
			controlId: n || ee,
			custom: v
		};
	}, [
		ee,
		v,
		n
	]), j = g != null && g !== !1 && !_, te = /*#__PURE__*/ R.createElement(G, z({}, T, {
		ref: t,
		isValid: c,
		isInvalid: u,
		disabled: o,
		as: w,
		lang: y
	}));
	return /*#__PURE__*/ R.createElement(yo.Provider, { value: A }, /*#__PURE__*/ R.createElement(S, {
		style: h,
		className: (0, V.default)(m, r, v && "custom-" + k)
	}, _ || /*#__PURE__*/ R.createElement(R.Fragment, null, v ? /*#__PURE__*/ R.createElement(R.Fragment, null, te, j && /*#__PURE__*/ R.createElement(Oo, { "data-browse": b }, g)) : /*#__PURE__*/ R.createElement(R.Fragment, null, j && /*#__PURE__*/ R.createElement(Oo, null, g), te), (c || u) && /*#__PURE__*/ R.createElement(vo, {
		type: c ? "valid" : "invalid",
		tooltip: f
	}, p))));
});
Ao.displayName = "FormFile", Ao.Input = G, Ao.Label = Oo;
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormControl.js
var jo = [
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
], Mo = /*#__PURE__*/ R.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.bsCustomPrefix, i = e.type, a = e.size, o = e.htmlSize, s = e.id, c = e.className, l = e.isValid, u = l !== void 0 && l, d = e.isInvalid, f = d !== void 0 && d, p = e.plaintext, m = e.readOnly, h = e.custom, g = e.as, _ = g === void 0 ? "input" : g, v = B(e, jo), y = (0, R.useContext)(yo).controlId, b = h ? [r, "custom"] : [n, "form-control"], x = b[0], S = b[1];
	n = Gn(x, S);
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
	return /*#__PURE__*/ R.createElement(_, z({}, v, {
		type: i,
		size: o,
		ref: t,
		readOnly: m,
		id: s || y,
		className: (0, V.default)(c, C, u && "is-valid", f && "is-invalid")
	}));
});
Mo.displayName = "FormControl";
var No = Object.assign(Mo, { Feedback: vo }), Po = [
	"bsPrefix",
	"className",
	"children",
	"controlId",
	"as"
], Fo = /*#__PURE__*/ R.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.className, i = e.children, a = e.controlId, o = e.as, s = o === void 0 ? "div" : o, c = B(e, Po);
	n = Gn(n, "form-group");
	var l = (0, R.useMemo)(function() {
		return { controlId: a };
	}, [a]);
	return /*#__PURE__*/ R.createElement(yo.Provider, { value: l }, /*#__PURE__*/ R.createElement(s, z({}, c, {
		ref: t,
		className: (0, V.default)(r, n)
	}), i));
});
Fo.displayName = "FormGroup";
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormLabel.js
var Io = [
	"as",
	"bsPrefix",
	"column",
	"srOnly",
	"className",
	"htmlFor"
], Lo = {
	column: !1,
	srOnly: !1
}, Ro = /*#__PURE__*/ R.forwardRef(function(e, t) {
	var n = e.as, r = n === void 0 ? "label" : n, i = e.bsPrefix, a = e.column, o = e.srOnly, s = e.className, c = e.htmlFor, l = B(e, Io), u = (0, R.useContext)(yo).controlId;
	i = Gn(i, "form-label");
	var d = "col-form-label";
	typeof a == "string" && (d = d + " " + d + "-" + a);
	var f = (0, V.default)(s, i, o && "sr-only", a && d);
	return c ||= u, a ? /*#__PURE__*/ R.createElement(Yr, z({
		ref: t,
		as: "label",
		className: f,
		htmlFor: c
	}, l)) : /*#__PURE__*/ R.createElement(r, z({
		ref: t,
		className: f,
		htmlFor: c
	}, l));
});
Ro.displayName = "FormLabel", Ro.defaultProps = Lo;
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormText.js
var zo = [
	"bsPrefix",
	"className",
	"as",
	"muted"
], Bo = /*#__PURE__*/ R.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.className, i = e.as, a = i === void 0 ? "small" : i, o = e.muted, s = B(e, zo);
	return n = Gn(n, "form-text"), /*#__PURE__*/ R.createElement(a, z({}, s, {
		ref: t,
		className: (0, V.default)(r, n, o && "text-muted")
	}));
});
Bo.displayName = "FormText";
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Switch.js
var Vo = /*#__PURE__*/ R.forwardRef(function(e, t) {
	return /*#__PURE__*/ R.createElement(To, z({}, e, {
		ref: t,
		type: "switch"
	}));
});
Vo.displayName = "Switch", Vo.Input = To.Input, Vo.Label = To.Label;
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Form.js
var Ho = [
	"bsPrefix",
	"inline",
	"className",
	"validated",
	"as"
], Uo = Br("form-row"), Wo = { inline: !1 }, Go = /*#__PURE__*/ R.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.inline, i = e.className, a = e.validated, o = e.as, s = o === void 0 ? "form" : o, c = B(e, Ho);
	return n = Gn(n, "form"), /*#__PURE__*/ R.createElement(s, z({}, c, {
		ref: t,
		className: (0, V.default)(i, a && "was-validated", r && n + "-inline")
	}));
});
Go.displayName = "Form", Go.defaultProps = Wo, Go.Row = Uo, Go.Group = Fo, Go.Control = No, Go.Check = To, Go.File = Ao, Go.Switch = Vo, Go.Label = Ro, Go.Text = Bo;
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Image.js
var Ko = [
	"bsPrefix",
	"className",
	"fluid",
	"rounded",
	"roundedCircle",
	"thumbnail"
];
W.default.string, W.default.bool, W.default.bool, W.default.bool, W.default.bool;
var qo = {
	fluid: !1,
	rounded: !1,
	roundedCircle: !1,
	thumbnail: !1
}, Jo = /*#__PURE__*/ R.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.className, i = e.fluid, a = e.rounded, o = e.roundedCircle, s = e.thumbnail, c = B(e, Ko);
	n = Gn(n, "img");
	var l = (0, V.default)(i && n + "-fluid", a && "rounded", o && "rounded-circle", s && n + "-thumbnail");
	return /*#__PURE__*/ R.createElement("img", z({ ref: t }, c, { className: (0, V.default)(r, l) }));
});
Jo.displayName = "Image", Jo.defaultProps = qo;
// node_modules/.pnpm/react-overlays@5.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-overlays/esm/useWaitForDOMRef.js
var Yo = function(e) {
	var t;
	return typeof document > "u" ? null : e == null ? Kn().body : (typeof e == "function" && (e = e()), e && "current" in e && (e = e.current), (t = e) != null && t.nodeType && e || null);
};
function Xo(e, t) {
	var n = (0, R.useState)(function() {
		return Yo(e);
	}), r = n[0], i = n[1];
	if (!r) {
		var a = Yo(e);
		a && i(a);
	}
	return (0, R.useEffect)(function() {
		t && r && t(r);
	}, [t, r]), (0, R.useEffect)(function() {
		var t = Yo(e);
		t !== r && i(t);
	}, [e, r]), r;
}
// node_modules/.pnpm/react-overlays@5.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-overlays/esm/Overlay.js
var Zo = /*#__PURE__*/ R.forwardRef(function(e, t) {
	var n = e.flip, r = e.offset, i = e.placement, a = e.containerPadding, o = a === void 0 ? 5 : a, s = e.popperConfig, c = s === void 0 ? {} : s, l = e.transition, u = Xr(), d = u[0], f = u[1], p = Xr(), m = p[0], h = p[1], g = co(f, t), _ = Xo(e.container), v = Xo(e.target), y = (0, R.useState)(!e.show), b = y[0], x = y[1], S = Ga(v, d, ao({
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
	if (no(d, e.onHide, {
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
	return _ ? /*#__PURE__*/ In.createPortal(O, _) : null;
});
Zo.displayName = "Overlay", Zo.propTypes = {
	show: W.default.bool,
	placement: W.default.oneOf(ci),
	target: W.default.any,
	container: W.default.any,
	flip: W.default.bool,
	children: W.default.func.isRequired,
	containerPadding: W.default.number,
	popperConfig: W.default.object,
	rootClose: W.default.bool,
	rootCloseEvent: W.default.oneOf(["click", "mousedown"]),
	rootCloseDisabled: W.default.bool,
	onHide: function(e) {
		var t = [...arguments].slice(1);
		if (e.rootClose) {
			var n;
			return (n = W.default.func).isRequired.apply(n, [e].concat(t));
		}
		return W.default.func.apply(W.default, [e].concat(t));
	},
	transition: W.default.elementType,
	onEnter: W.default.func,
	onEntering: W.default.func,
	onEntered: W.default.func,
	onExit: W.default.func,
	onExiting: W.default.func,
	onExited: W.default.func
};
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Overlay.js
var Qo = [
	"children",
	"transition",
	"popperConfig"
], $o = [
	"props",
	"arrowProps",
	"show",
	"update",
	"forceUpdate",
	"placement",
	"state"
], es = {
	transition: Fr,
	rootClose: !1,
	show: !1,
	placement: "top"
};
function ts(e, t) {
	var n = e.ref, r = t.ref;
	e.ref = n.__wrapped ||= function(e) {
		return n(Ya(e));
	}, t.ref = r.__wrapped ||= function(e) {
		return r(Ya(e));
	};
}
function ns(e) {
	var t = e.children, n = e.transition, r = e.popperConfig, i = r === void 0 ? {} : r, a = B(e, Qo), o = (0, R.useRef)({}), s = fo(), c = s[0], l = s[1], u = n === !0 ? Fr : n || null;
	return /*#__PURE__*/ R.createElement(Zo, z({}, a, {
		ref: c,
		popperConfig: z({}, i, { modifiers: l.concat(i.modifiers || []) }),
		transition: u
	}), function(e) {
		var r = e.props, i = e.arrowProps, a = e.show, s = e.update;
		e.forceUpdate;
		var c = e.placement, l = e.state, u = B(e, $o);
		ts(r, i);
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
			className: (0, V.default)(t.props.className, !n && a && "show"),
			style: z({}, t.props.style, r.style)
		}));
	});
}
ns.defaultProps = es;
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/OverlayTrigger.js
var rs = [
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
], is = /*#__PURE__*/ function(e) {
	Un(t, e);
	function t() {
		return e.apply(this, arguments) || this;
	}
	var n = t.prototype;
	return n.render = function() {
		return this.props.children;
	}, t;
}(R.Component);
function as(e) {
	return e && typeof e == "object" ? e : {
		show: e,
		hide: e
	};
}
function os(e, t, n) {
	var r = t[0], i = r.currentTarget, a = r.relatedTarget || r.nativeEvent[n];
	a && a === i || Ka(i, a) || e.apply(void 0, t);
}
var ss = {
	defaultShow: !1,
	trigger: ["hover", "focus"]
};
function cs(e) {
	var t = e.trigger, n = e.overlay, r = e.children, i = e.popperConfig, a = i === void 0 ? {} : i, o = e.show, s = e.defaultShow, c = s !== void 0 && s, l = e.onToggle, u = e.delay, d = e.placement, f = e.flip, p = f === void 0 ? d && d.indexOf("auto") !== -1 : f, m = B(e, rs), h = (0, R.useRef)(null), g = Kr(), _ = (0, R.useRef)(""), v = Bn(o, c, l), y = v[0], b = v[1], x = as(u), S = typeof r == "function" ? {} : R.Children.only(r).props, C = S.onFocus, w = S.onBlur, T = S.onClick, E = (0, R.useCallback)(function() {
		return Ya(h.current);
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
		os(D, [...arguments], "fromElement");
	}, [D]), te = (0, R.useCallback)(function() {
		os(O, [...arguments], "toElement");
	}, [O]), M = t == null ? [] : [].concat(t), N = {};
	return M.indexOf("click") !== -1 && (N.onClick = A), M.indexOf("focus") !== -1 && (N.onFocus = k, N.onBlur = ee), M.indexOf("hover") !== -1 && (N.onMouseOver = j, N.onMouseOut = te), /*#__PURE__*/ R.createElement(R.Fragment, null, typeof r == "function" ? r(z({}, N, { ref: h })) : /*#__PURE__*/ R.createElement(is, { ref: h }, /*#__PURE__*/ (0, R.cloneElement)(r, N)), /*#__PURE__*/ R.createElement(ns, z({}, m, {
		show: y,
		onHide: O,
		flip: p,
		placement: d,
		popperConfig: a,
		target: E
	}), n));
}
cs.defaultProps = ss, po();
var ls = [
	"bsPrefix",
	"variant",
	"animation",
	"size",
	"children",
	"as",
	"className"
], us = /*#__PURE__*/ R.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.variant, i = e.animation, a = e.size, o = e.children, s = e.as, c = s === void 0 ? "div" : s, l = e.className, u = B(e, ls);
	n = Gn(n, "spinner");
	var d = n + "-" + i;
	return /*#__PURE__*/ R.createElement(c, z({ ref: t }, u, { className: (0, V.default)(l, d, a && d + "-" + a, r && "text-" + r) }), o);
});
us.displayName = "Spinner";
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Tooltip.js
var ds = [
	"bsPrefix",
	"placement",
	"className",
	"style",
	"children",
	"arrowProps",
	"popper",
	"show"
], fs = { placement: "right" }, ps = /*#__PURE__*/ R.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.placement, i = e.className, a = e.style, o = e.children, s = e.arrowProps;
	e.popper, e.show;
	var c = B(e, ds);
	n = Gn(n, "tooltip");
	var l = (r?.split("-") || [])[0];
	return /*#__PURE__*/ R.createElement("div", z({
		ref: t,
		style: a,
		role: "tooltip",
		"x-placement": l,
		className: (0, V.default)(i, n, "bs-tooltip-" + l)
	}, c), /*#__PURE__*/ R.createElement("div", z({ className: "arrow" }, s)), /*#__PURE__*/ R.createElement("div", { className: n + "-inner" }, o));
});
ps.defaultProps = fs, ps.displayName = "Tooltip";
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/utils/newId.js
var ms = 0, hs = (e = "id") => (ms += 1, `${e}${ms}`);
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Icon/index.js
function gs({ src: e, id: t, className: n, hidden: r = !0, screenReaderText: i, svgAttrs: a = {}, size: o, ...s }) {
	if (e) {
		let r = a["aria-label"] || a["aria-labelledby"], c = { ...a };
		return r || (c["aria-label"] = void 0, c["aria-hidden"] = !0), /*#__PURE__*/ R.createElement("span", {
			className: (0, V.default)("pgn__icon", { [`pgn__icon__${o}`]: !!o }, n),
			id: t,
			...s
		}, /*#__PURE__*/ R.createElement(e, {
			role: "img",
			focusable: !1,
			...c
		}), i && /*#__PURE__*/ R.createElement("span", { className: "sr-only" }, i));
	}
	return /*#__PURE__*/ R.createElement(R.Fragment, null, /*#__PURE__*/ R.createElement("span", {
		id: t || hs("Icon"),
		className: n,
		"aria-hidden": r
	}), i && /*#__PURE__*/ R.createElement("span", { className: "sr-only" }, i));
}
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/icons/es5/Cancel.js
var _s = (e) => /*#__PURE__*/ R.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /*#__PURE__*/ R.createElement("path", {
	d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2Zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59Z",
	fill: "currentColor"
})), vs = (e) => /*#__PURE__*/ R.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /*#__PURE__*/ R.createElement("path", {
	d: "M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2Z",
	fill: "currentColor"
})), ys = (e) => /*#__PURE__*/ R.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /*#__PURE__*/ R.createElement("path", {
	d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9Z",
	fill: "currentColor"
})), bs = (e) => /*#__PURE__*/ R.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /*#__PURE__*/ R.createElement("path", {
	d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41Z",
	fill: "currentColor"
})), xs = (e) => /*#__PURE__*/ R.createElement("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	...e
}, /*#__PURE__*/ R.createElement("path", {
	d: "M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",
	fill: "currentColor"
})), Ss = (e) => /*#__PURE__*/ R.createElement("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	...e
}, /*#__PURE__*/ R.createElement("path", {
	d: "M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z",
	fill: "currentColor"
})), Cs = (e) => /*#__PURE__*/ R.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /*#__PURE__*/ R.createElement("path", {
	d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8Z",
	fill: "currentColor"
})), ws = (e) => /*#__PURE__*/ R.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /*#__PURE__*/ R.createElement("path", {
	xmlns: "http://www.w3.org/2000/svg",
	d: "M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z",
	fill: "currentColor"
}));
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Overlay/index.js
function Ts({ defaultShow: e = !1, popperConfig: t = {}, trigger: n = ["hover", "focus"], ...r }) {
	return /*#__PURE__*/ R.createElement(cs, {
		defaultShow: e,
		popperConfig: t,
		trigger: n,
		...r
	}, r.children);
}
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Tooltip/index.js
var Es = /*#__PURE__*/ R.forwardRef(({ children: e, variant: t, placement: n = "right", bsPrefix: r = "tooltip", ...i }, a) => /*#__PURE__*/ R.createElement(ps, {
	...i,
	placement: n,
	bsPrefix: r,
	className: (0, V.default)({ "tooltip-light": t === "light" }, i.className),
	ref: a
}, e)), Ds = /*#__PURE__*/ R.forwardRef(({ className: e, alt: t, invertColors: n = !1, icon: r, src: i, iconClassNames: a, onClick: o = () => {}, size: s = "md", variant: c = "primary", iconAs: l = gs, isActive: u = !1, children: d, ...f }, p) => {
	let m = n ? "inverse-" : "", h = u ? `${c}-` : "", g = l;
	return /*#__PURE__*/ R.createElement("button", {
		"aria-label": t,
		className: (0, V.default)("btn-icon", `btn-icon-${m}${c}`, `btn-icon-${s}`, { [`btn-icon-${m}${h}active`]: u }, e),
		onClick: o,
		type: "button",
		ref: p,
		...f
	}, /*#__PURE__*/ R.createElement("span", { className: "btn-icon__icon-container" }, g && /*#__PURE__*/ R.createElement(g, {
		className: (0, V.default)("btn-icon__icon", a),
		icon: r,
		src: i
	})));
});
function Os({ tooltipPlacement: e = "top", tooltipContent: t, ...n }) {
	let r = n.invertColors ? "inverse-" : "";
	return /*#__PURE__*/ R.createElement(Ts, {
		placement: e,
		overlay: /*#__PURE__*/ R.createElement(Es, {
			id: `iconbutton-tooltip-${e}`,
			variant: r ? "light" : void 0
		}, t)
	}, /*#__PURE__*/ R.createElement(Ds, { ...n }));
}
Ds.IconButtonWithTooltip = Os;
// node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/core/utils.js
function ks(e) {
	return typeof e == "string" || e instanceof String;
}
function As(e) {
	var t;
	return typeof e == "object" && !!e && (e == null || (t = e.constructor) == null ? void 0 : t.name) === "Object";
}
function js(e, t) {
	return Array.isArray(t) ? js(e, (e, n) => t.includes(n)) : Object.entries(e).reduce((e, n) => {
		let [r, i] = n;
		return t(i, r) && (e[r] = i), e;
	}, {});
}
var K = {
	NONE: "NONE",
	LEFT: "LEFT",
	FORCE_LEFT: "FORCE_LEFT",
	RIGHT: "RIGHT",
	FORCE_RIGHT: "FORCE_RIGHT"
};
function Ms(e) {
	switch (e) {
		case K.LEFT: return K.FORCE_LEFT;
		case K.RIGHT: return K.FORCE_RIGHT;
		default: return e;
	}
}
function Ns(e) {
	return e.replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1");
}
function Ps(e, t) {
	if (t === e) return !0;
	let n = Array.isArray(t), r = Array.isArray(e), i;
	if (n && r) {
		if (t.length != e.length) return !1;
		for (i = 0; i < t.length; i++) if (!Ps(t[i], e[i])) return !1;
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
		for (i = 0; i < s.length; i++) if (!Ps(e[s[i]], t[s[i]])) return !1;
		return !0;
	}
	return t && e && typeof t == "function" && typeof e == "function" ? t.toString() === e.toString() : !1;
}
// node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/core/action-details.js
var Fs = class {
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
		return !this.removedCount || this.insertedCount ? K.NONE : (this.oldSelection.end === this.cursorPos || this.oldSelection.start === this.cursorPos) && this.oldSelection.end === this.oldSelection.start ? K.RIGHT : K.LEFT;
	}
};
// node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/core/holder.js
function q(e, t) {
	return new q.InputMask(e, t);
}
// node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/factory.js
function Is(e) {
	if (e == null) throw Error("mask property should be defined");
	return e instanceof RegExp ? q.MaskedRegExp : ks(e) ? q.MaskedPattern : e === Date ? q.MaskedDate : e === Number ? q.MaskedNumber : Array.isArray(e) || e === Array ? q.MaskedDynamic : q.Masked && e.prototype instanceof q.Masked ? e : q.Masked && e instanceof q.Masked ? e.constructor : e instanceof Function ? q.MaskedFunction : (console.warn("Mask not found for mask", e), q.Masked);
}
function Ls(e) {
	if (!e) throw Error("Options in not defined");
	if (q.Masked) {
		if (e.prototype instanceof q.Masked) return { mask: e };
		let { mask: t = void 0, ...n } = e instanceof q.Masked ? { mask: e } : As(e) && e.mask instanceof q.Masked ? e : {};
		if (t) {
			let e = t.mask;
			return {
				...js(t, (e, t) => !t.startsWith("_")),
				mask: t.constructor,
				_mask: e,
				...n
			};
		}
	}
	return As(e) ? { ...e } : { mask: e };
}
function Rs(e) {
	if (q.Masked && e instanceof q.Masked) return e;
	let t = Ls(e), n = Is(t.mask);
	if (!n) throw Error("Masked class is not found for provided mask " + t.mask + ", appropriate module needs to be imported manually before creating mask.");
	return t.mask === n && delete t.mask, t._mask && (t.mask = t._mask, delete t._mask), new n(t);
}
q.createMask = Rs;
// node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/controls/mask-element.js
var zs = class {
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
q.MaskElement = zs;
// node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/controls/html-mask-element.js
var Bs = 90, Vs = 89, Hs = class extends zs {
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
		if (this._handlers.redo && (e.keyCode === Bs && e.shiftKey && (e.metaKey || e.ctrlKey) || e.keyCode === Vs && e.ctrlKey)) return e.preventDefault(), this._handlers.redo(e);
		if (this._handlers.undo && e.keyCode === Bs && (e.metaKey || e.ctrlKey)) return e.preventDefault(), this._handlers.undo(e);
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
q.HTMLMaskElement = Hs;
// node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/controls/html-input-mask-element.js
var Us = class extends Hs {
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
q.HTMLMaskElement = Hs;
// node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/controls/html-contenteditable-mask-element.js
var Ws = class extends Hs {
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
q.HTMLContenteditableMaskElement = Ws;
// node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/controls/input-history.js
var Gs = class e {
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
Gs.MAX_LENGTH = 100, q.InputMask = class {
	constructor(e, t) {
		this.el = e instanceof zs ? e : e.isContentEditable && e.tagName !== "INPUT" && e.tagName !== "TEXTAREA" ? new Ws(e) : new Us(e), this.masked = Rs(t), this._listeners = {}, this._value = "", this._unmaskedValue = "", this._rawInputValue = "", this.history = new Gs(), this._saveSelection = this._saveSelection.bind(this), this._onInput = this._onInput.bind(this), this._onChange = this._onChange.bind(this), this._onDrop = this._onDrop.bind(this), this._onFocus = this._onFocus.bind(this), this._onClick = this._onClick.bind(this), this._onUndo = this._onUndo.bind(this), this._onRedo = this._onRedo.bind(this), this.alignCursor = this.alignCursor.bind(this), this.alignCursorFriendly = this.alignCursorFriendly.bind(this), this._bindEvents(), this.updateValue(), this._onChange();
	}
	maskEquals(e) {
		return e == null || this.masked?.maskEquals(e);
	}
	get mask() {
		return this.masked.mask;
	}
	set mask(e) {
		if (this.maskEquals(e)) return;
		if (!(e instanceof q.Masked) && this.masked.constructor === Is(e)) {
			this.masked.updateOptions({ mask: e });
			return;
		}
		let t = e instanceof q.Masked ? e : Rs({ mask: e });
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
		this.el && this.el.isActive && (this.el.select(e, e), this._saveSelection());
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
		this.cursorPos = this.masked.nearestInputPos(this.masked.nearestInputPos(this.cursorPos, K.LEFT));
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
		let t = new Fs({
			value: this.el.value,
			cursorPos: this.cursorPos,
			oldValue: this.displayValue,
			oldSelection: this._selection
		}), n = this.masked.rawInputValue, r = this.masked.splice(t.startChangePos, t.removed.length, t.inserted, t.removeDirection, {
			input: !0,
			raw: !0
		}).offset, i = n === this.masked.rawInputValue ? t.removeDirection : K.NONE, a = this.masked.nearestInputPos(t.startChangePos + r, i);
		i !== K.NONE && (a = this.masked.nearestInputPos(a, K.NONE)), this.updateControl(a), delete this._inputEvent;
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
// node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/core/change-details.js
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
q.ChangeDetails = J;
// node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/core/continuous-tail-details.js
var Ks = class {
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
}, qs = class e {
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
		return e === void 0 && (e = 0), t === void 0 && (t = this.displayValue.length), new Ks(this.extractInput(e, t), e);
	}
	appendTail(e) {
		return ks(e) && (e = new Ks(String(e))), e.appendTo(this);
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
		if (!ks(e)) throw Error("value should be string");
		let r = ks(n) ? new Ks(String(n)) : n;
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
		n === void 0 && (n = ""), r === void 0 && (r = K.NONE), i === void 0 && (i = { input: !0 });
		let a = e + t, o = this.extractTail(a), s = this.eager === !0 || this.eager === "remove", c;
		s && (r = Ms(r), c = this.extractInput(0, a, { raw: !0 }));
		let l = e, u = new J();
		if (r !== K.NONE && (l = this.nearestInputPos(e, t > 1 && e !== 0 && !s ? K.NONE : r), u.tailShift = l - e), u.aggregate(this.remove(l)), s && r !== K.NONE && c === this.rawInputValue) {
			if (r === K.FORCE_LEFT) {
				let e;
				for (; c === this.rawInputValue && (e = this.displayValue.length);) u.aggregate(new J({ tailShift: -1 })).aggregate(this.remove(e - 1));
			} else r === K.FORCE_RIGHT && o.unshift();
		}
		return u.aggregate(this.append(n, i, o));
	}
	maskEquals(e) {
		return this.mask === e;
	}
	optionsIsChanged(e) {
		return !Ps(this, e);
	}
	typedValueEquals(t) {
		let n = this.typedValue;
		return t === n || e.EMPTY_VALUES.includes(t) && e.EMPTY_VALUES.includes(n) || (this.format ? this.format(t, this) === this.format(this.typedValue, this) : !1);
	}
	pad(e) {
		return new J();
	}
};
qs.DEFAULTS = { skipInvalid: !0 }, qs.EMPTY_VALUES = [
	void 0,
	null,
	""
], q.Masked = qs;
// node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/pattern/chunk-tail-details.js
var Js = class e {
	constructor(e, t) {
		e === void 0 && (e = []), t === void 0 && (t = 0), this.chunks = e, this.from = t;
	}
	toString() {
		return this.chunks.map(String).join("");
	}
	extend(t) {
		if (!String(t)) return;
		t = ks(t) ? new Ks(String(t)) : t;
		let n = this.chunks[this.chunks.length - 1], r = n && (n.stop === t.stop || t.stop == null) && t.from === n.from + n.toString().length;
		if (t instanceof Ks) r ? n.extend(t.toString()) : this.chunks.push(t);
		else if (t instanceof e) {
			if (t.stop == null) {
				let e;
				for (; t.chunks.length && t.chunks[0].stop == null;) e = t.chunks.shift(), e.from += t.from, this.extend(e);
			}
			t.toString() && (t.stop = t.blockIndex, this.chunks.push(t));
		}
	}
	appendTo(t) {
		if (!(t instanceof q.MaskedPattern)) return new Ks(this.toString()).appendTo(t);
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
			let n = "chunks" in t ? new e() : new Ks();
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
}, Ys = class {
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
			if (!this.block.isFixed && this.block.value && (this.offset = this.block.nearestInputPos(this.offset, K.FORCE_LEFT), this.offset !== 0)) return !0;
		});
	}
	pushLeftBeforeInput() {
		return this._pushLeft(() => {
			if (!this.block.isFixed) return this.offset = this.block.nearestInputPos(this.offset, K.LEFT), !0;
		});
	}
	pushLeftBeforeRequired() {
		return this._pushLeft(() => {
			if (!(this.block.isFixed || this.block.isOptional && !this.block.value)) return this.offset = this.block.nearestInputPos(this.offset, K.LEFT), !0;
		});
	}
	pushRightBeforeFilled() {
		return this._pushRight(() => {
			if (!this.block.isFixed && this.block.value && (this.offset = this.block.nearestInputPos(this.offset, K.FORCE_RIGHT), this.offset !== this.block.value.length)) return !0;
		});
	}
	pushRightBeforeInput() {
		return this._pushRight(() => {
			if (!this.block.isFixed) return this.offset = this.block.nearestInputPos(this.offset, K.NONE), !0;
		});
	}
	pushRightBeforeRequired() {
		return this._pushRight(() => {
			if (!(this.block.isFixed || this.block.isOptional && !this.block.value)) return this.offset = this.block.nearestInputPos(this.offset, K.NONE), !0;
		});
	}
}, Xs = class {
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
		t === void 0 && (t = K.NONE);
		let n = this._value.length;
		switch (t) {
			case K.LEFT:
			case K.FORCE_LEFT: return 0;
			case K.NONE:
			case K.RIGHT:
			case K.FORCE_RIGHT:
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
		return new Ks("");
	}
	appendTail(e) {
		return ks(e) && (e = new Ks(String(e))), e.appendTo(this);
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
}, Zs = class {
	constructor(e) {
		let { parent: t, isOptional: n, placeholderChar: r, displayChar: i, lazy: a, eager: o, ...s } = e;
		this.masked = Rs(s), Object.assign(this, {
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
		return r.inserted && this.doValidate(t) === !1 && (r = new J(), this.masked.state = n), r.inserted || this.isOptional || this.lazy || t.input || (r.inserted = this.placeholderChar), r.skip = !r.inserted && !this.isOptional, this.isFilled = !!r.inserted, r;
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
		t === void 0 && (t = K.NONE);
		let n = this.value.length, r = Math.min(Math.max(e, 0), n);
		switch (t) {
			case K.LEFT:
			case K.FORCE_LEFT: return this.isComplete ? r : 0;
			case K.RIGHT:
			case K.FORCE_RIGHT: return this.isComplete ? r : n;
			case K.NONE:
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
Zs.DEFAULT_DEFINITIONS = {
	0: /\d/,
	a: /[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
	"*": /./
}, q.MaskedRegExp = class extends qs {
	updateOptions(e) {
		super.updateOptions(e);
	}
	_update(e) {
		let t = e.mask;
		t && (e.validate = (e) => e.search(t) >= 0), super._update(e);
	}
};
// node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/pattern.js
var Qs = class e extends qs {
	constructor(t) {
		super({
			...e.DEFAULTS,
			...t,
			definitions: Object.assign({}, Zs.DEFAULT_DEFINITIONS, t?.definitions)
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
					let { expose: e, repeat: t, ...n } = Ls(this.blocks[r]), i = {
						lazy: this.lazy,
						eager: this.eager,
						placeholderChar: this.placeholderChar,
						displayChar: this.displayChar,
						overwrite: this.overwrite,
						autofix: this.autofix,
						...n,
						repeat: t,
						parent: this
					}, o = t == null ? Rs(i) : new q.RepeatBlock(i);
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
			let c = s ? new Zs({
				isOptional: i,
				lazy: this.lazy,
				eager: this.eager,
				placeholderChar: this.placeholderChar,
				displayChar: this.displayChar,
				...Ls(t[o]),
				parent: this
			}) : new Xs({
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
		let n = new Js();
		return e === t || this._forEachBlocksInRange(e, t, (e, t, r, i) => {
			let a = e.extractTail(r, i);
			a.stop = this._findStopBefore(t), a.from = this._blockStartPos(t), a instanceof Js && (a.blockIndex = t), n.extend(a);
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
			n.lazy && e == null || t.aggregate(n._appendPlaceholder(n._blocks?.length));
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
		if (t === void 0 && (t = K.NONE), !this._blocks.length) return 0;
		let n = new Ys(this, e);
		if (t === K.NONE) return n.pushRightBeforeInput() || (n.popState(), n.pushLeftBeforeInput()) ? n.pos : this.displayValue.length;
		if (t === K.LEFT || t === K.FORCE_LEFT) {
			if (t === K.LEFT) {
				if (n.pushRightBeforeFilled(), n.ok && n.pos === e) return e;
				n.popState();
			}
			if (n.pushLeftBeforeInput(), n.pushLeftBeforeRequired(), n.pushLeftBeforeFilled(), t === K.LEFT) {
				if (n.pushRightBeforeInput(), n.pushRightBeforeRequired(), n.ok && n.pos <= e || (n.popState(), n.ok && n.pos <= e)) return n.pos;
				n.popState();
			}
			return n.ok ? n.pos : t === K.FORCE_LEFT ? 0 : (n.popState(), n.ok || (n.popState(), n.ok) ? n.pos : 0);
		}
		return t === K.RIGHT || t === K.FORCE_RIGHT ? (n.pushRightBeforeInput(), n.pushRightBeforeRequired(), n.pushRightBeforeFilled() ? n.pos : t === K.FORCE_RIGHT ? this.displayValue.length : (n.popState(), n.ok || (n.popState(), n.ok) ? n.pos : this.nearestInputPos(e, K.LEFT))) : e;
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
Qs.DEFAULTS = {
	...qs.DEFAULTS,
	lazy: !0,
	placeholderChar: "_"
}, Qs.STOP_CHAR = "`", Qs.ESCAPE_CHAR = "\\", Qs.InputDefinition = Zs, Qs.FixedDefinition = Xs, q.MaskedPattern = Qs;
// node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/range.js
var $s = class extends Qs {
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
q.MaskedRange = $s;
// node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/date.js
var ec = "d{.}`m{.}`Y", tc = class e extends Qs {
	static extractPatternOptions(e) {
		let { mask: t, pattern: n, ...r } = e;
		return {
			...r,
			mask: ks(t) ? t : n
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
			mask: ks(n) ? n : r,
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
tc.GET_DEFAULT_BLOCKS = () => ({
	d: {
		mask: $s,
		from: 1,
		to: 31,
		maxLength: 2
	},
	m: {
		mask: $s,
		from: 1,
		to: 12,
		maxLength: 2
	},
	Y: {
		mask: $s,
		from: 1900,
		to: 9999
	}
}), tc.DEFAULTS = {
	...Qs.DEFAULTS,
	mask: Date,
	pattern: ec,
	format: (e, t) => e ? [
		String(e.getDate()).padStart(2, "0"),
		String(e.getMonth() + 1).padStart(2, "0"),
		e.getFullYear()
	].join(".") : "",
	parse: (e, t) => {
		let [n, r, i] = e.split(".").map(Number);
		return new Date(i, r - 1, n);
	}
}, q.MaskedDate = tc;
// node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/dynamic.js
var nc = class e extends qs {
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
			let { expose: t, ...n } = Ls(e), r = Rs({
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
			return Ps(t, i) && t.maskEquals(r);
		}) : super.maskEquals(e);
	}
	typedValueEquals(e) {
		return !!this.currentMask?.typedValueEquals(e);
	}
};
nc.DEFAULTS = {
	...qs.DEFAULTS,
	dispatch: (e, t, n, r) => {
		if (!t.compiledMasks.length) return;
		let i = t.rawInputValue, a = t.compiledMasks.map((a, o) => {
			let s = t.currentMask === a, c = s ? a.displayValue.length : a.nearestInputPos(a.displayValue.length, K.FORCE_LEFT);
			return a.rawInputValue === i ? s || a.remove(c) : (a.reset(), a.append(i, { raw: !0 })), a.append(e, t.currentMaskFlags(n)), a.appendTail(r), {
				index: o,
				weight: a.rawInputValue.length,
				totalInputPositions: a.totalInputPositions(0, Math.max(c, a.nearestInputPos(a.displayValue.length, K.FORCE_LEFT)))
			};
		});
		return a.sort((e, t) => t.weight - e.weight || t.totalInputPositions - e.totalInputPositions), t.compiledMasks[a[0].index];
	}
}, q.MaskedDynamic = nc;
// node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/enum.js
var rc = class e extends Qs {
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
		let n = Math.min(this.nearestInputPos(0, K.FORCE_RIGHT), this.value.length), r = this.enum.filter((t) => this.matchValue(t, this.unmaskedValue + e, n));
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
		return e === void 0 && (e = 0), t === void 0 && (t = this.displayValue.length), new Ks("", e);
	}
	remove(e, t) {
		if (e === void 0 && (e = 0), t === void 0 && (t = this.displayValue.length), e === t) return new J();
		let n = Math.min(super.nearestInputPos(0, K.FORCE_RIGHT), this.value.length), r;
		for (r = e; r >= 0 && !(this.enum.filter((e) => this.matchValue(e, this.value.slice(n, r), n)).length > 1); --r);
		let i = super.remove(r, t);
		return i.tailShift += r - e, i;
	}
	get isComplete() {
		return this.enum.indexOf(this.value) >= 0;
	}
};
rc.DEFAULTS = {
	...Qs.DEFAULTS,
	matchValue: (e, t, n) => e.indexOf(t, n) === n
}, q.MaskedEnum = rc, q.MaskedFunction = class extends qs {
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
// node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/number.js
var ic, ac = class e extends qs {
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
		let e = "^" + (this.allowNegative ? "[+|\\-]?" : ""), t = (this.scale ? "(" + Ns(this.radix) + "\\d{0," + this.scale + "})?" : "") + "$";
		this._numberRegExp = RegExp(e + "\\d*" + t), this._mapToRadixRegExp = RegExp("[" + this.mapToRadix.map(Ns).join("") + "]", "g"), this._thousandsSeparatorRegExp = new RegExp(Ns(this.thousandsSeparator), "g");
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
			case K.NONE:
			case K.LEFT:
			case K.FORCE_LEFT: {
				let n = this._findSeparatorAround(e - 1);
				if (n >= 0) {
					let r = n + this.thousandsSeparator.length;
					if (e < r || this.value.length <= r || t === K.FORCE_LEFT) return n;
				}
				break;
			}
			case K.RIGHT:
			case K.FORCE_RIGHT: {
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
		return (super.typedValueEquals(t) || e.EMPTY_VALUES.includes(t) && e.EMPTY_VALUES.includes(this.typedValue)) && (t !== 0 || this.value !== "");
	}
};
ic = ac, ac.UNMASKED_RADIX = ".", ac.EMPTY_VALUES = [...qs.EMPTY_VALUES, 0], ac.DEFAULTS = {
	...qs.DEFAULTS,
	mask: Number,
	radix: ",",
	thousandsSeparator: "",
	mapToRadix: [ic.UNMASKED_RADIX],
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
}, q.MaskedNumber = ac;
// node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/pipe.js
var oc = {
	MASKED: "value",
	UNMASKED: "unmaskedValue",
	TYPED: "typedValue"
};
function sc(e, t, n) {
	t === void 0 && (t = oc.MASKED), n === void 0 && (n = oc.MASKED);
	let r = Rs(e);
	return (e) => r.runIsolated((r) => (r[t] = e, r[n]));
}
function cc(e, t, n, r) {
	return sc(t, n, r)(e);
}
q.PIPE_TYPE = oc, q.createPipe = sc, q.pipe = cc, q.RepeatBlock = class extends Qs {
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
		let { repeat: t, ...n } = Ls(e);
		this._blockOpts = Object.assign({}, this._blockOpts, n);
		let r = Rs(this._blockOpts);
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
		if (this.repeatTo === Infinity || this._blocks.length < this.repeatTo) return this._blocks.push(Rs(this._blockOpts)), this.mask += "m", this._blocks[this._blocks.length - 1];
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
// node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/index.js
try {
	globalThis.IMask = q;
} catch {}
// node_modules/.pnpm/react-imask@7.6.1_react@18.3.1/node_modules/react-imask/esm/mixin.js
var lc = {
	mask: W.default.oneOfType([
		W.default.array,
		W.default.func,
		W.default.string,
		W.default.instanceOf(RegExp),
		W.default.oneOf([
			Date,
			Number,
			q.Masked
		]),
		W.default.instanceOf(q.Masked)
	]),
	value: W.default.any,
	unmask: W.default.oneOfType([W.default.bool, W.default.oneOf(["typed"])]),
	prepare: W.default.func,
	prepareChar: W.default.func,
	validate: W.default.func,
	commit: W.default.func,
	overwrite: W.default.oneOfType([W.default.bool, W.default.oneOf(["shift"])]),
	eager: W.default.oneOfType([W.default.bool, W.default.oneOf(["append", "remove"])]),
	skipInvalid: W.default.bool,
	onAccept: W.default.func,
	onComplete: W.default.func,
	placeholderChar: W.default.string,
	displayChar: W.default.string,
	lazy: W.default.bool,
	definitions: W.default.object,
	blocks: W.default.object,
	enum: W.default.arrayOf(W.default.string),
	maxLength: W.default.number,
	from: W.default.number,
	to: W.default.number,
	pattern: W.default.string,
	format: W.default.func,
	parse: W.default.func,
	autofix: W.default.oneOfType([W.default.bool, W.default.oneOf(["pad"])]),
	radix: W.default.string,
	thousandsSeparator: W.default.string,
	mapToRadix: W.default.arrayOf(W.default.string),
	scale: W.default.number,
	normalizeZeros: W.default.bool,
	padFractionalZeros: W.default.bool,
	min: W.default.oneOfType([W.default.number, W.default.instanceOf(Date)]),
	max: W.default.oneOfType([W.default.number, W.default.instanceOf(Date)]),
	dispatch: W.default.func,
	inputRef: W.default.oneOfType([W.default.func, W.default.shape({ current: W.default.object })])
}, uc = Object.keys(lc).filter((e) => e !== "value"), dc = [
	"value",
	"unmask",
	"onAccept",
	"onComplete",
	"inputRef"
], fc = uc.filter((e) => dc.indexOf(e) < 0);
function pc(e) {
	var t = class extends R.Component {
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
			e === void 0 && (e = this._extractMaskOptionsFromProps(this.props)), this.maskRef = q(this.element, e).on("accept", this._onAccept.bind(this)).on("complete", this._onComplete.bind(this)), "value" in this.props && this.props.value !== void 0 && (this.maskValue = this.props.value);
		}
		destroyMask() {
			this.maskRef && (this.maskRef.destroy(), delete this.maskRef);
		}
		_extractMaskOptionsFromProps(e) {
			let { ...t } = e;
			return Object.keys(t).filter((e) => fc.indexOf(e) < 0).forEach((e) => {
				delete t[e];
			}), t;
		}
		_extractNonMaskProps(e) {
			let { ...t } = e;
			return uc.forEach((e) => {
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
	};
	let n = (t.displayName = void 0, t.propTypes = void 0, t);
	return n.displayName = "IMask(" + (e.displayName || e.name || "Component") + ")", n.propTypes = lc, R.forwardRef((e, t) => R.createElement(n, {
		...e,
		ref: t
	}));
}
// node_modules/.pnpm/react-imask@7.6.1_react@18.3.1/node_modules/react-imask/esm/input.js
var mc = pc((e) => {
	let { inputRef: t, ...n } = e;
	return R.createElement("input", {
		...n,
		ref: t
	});
}), Y = R.forwardRef((e, t) => R.createElement(mc, {
	...e,
	ref: t
})), hc = (e = {}) => Object.entries(e).reduce((e, [t, n]) => (n !== void 0 && (e[t] = n), e), {}), gc = (...e) => (t) => {
	e.filter((e) => typeof e == "function").forEach((e) => e(t));
}, _c = ({ defaultValue: e, value: t }) => {
	let [n, r] = (0, R.useState)(!!e || e === 0);
	return [!!t || t === 0 || n, (e) => r(!!e.target.value)];
}, vc = (e, t) => {
	let [n, r] = (0, R.useState)(t || []), i = (e) => (r((t) => [...t, e]), e), a = () => {
		let t = hs(`${e}-`);
		return i(t);
	}, o = (e) => {
		r((t) => t.filter((t) => t !== e));
	};
	return [n, (e) => {
		let [t, n] = (0, R.useState)(e);
		return (0, R.useEffect)(() => (e ? i(e) : t || n(a()), () => o(t)), [t, e]), t;
	}];
}, yc = (e) => e, bc = /*#__PURE__*/ R.createContext({
	getControlProps: yc,
	useSetIsControlGroupEffect: () => {},
	getLabelProps: yc,
	getDescriptorProps: yc,
	hasFormGroupProvider: !1
}), xc = () => R.useContext(bc);
function Sc(e) {
	let [t, n] = (0, R.useState)(e);
	return [t, (e) => {
		(0, R.useEffect)(() => n(e), [e]);
	}];
}
function Cc({ children: e, controlId: t, isInvalid: n, isValid: r, size: i }) {
	let a = (0, R.useMemo)(() => t || hs("form-field"), [t]), [o, s] = vc(a), [c, l] = vc(a), [u, d] = Sc(!1), f = {
		getControlProps: (0, R.useCallback)((e) => {
			let t = u ? c : void 0;
			return hc({
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
	return /*#__PURE__*/ R.createElement(bc.Provider, { value: f }, e);
}
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Form/constants.js
var wc = {
	SMALL: "sm",
	LARGE: "lg"
}, Tc = {
	DEFAULT: "default",
	VALID: "valid",
	INVALID: "invalid",
	WARNING: "warning",
	CRITERIA_EMPTY: "criteria-empty",
	CRITERIA_VALID: "criteria-valid",
	CRITERIA_INVALID: "criteria-invalid"
}, Ec = {
	[Tc.DEFAULT]: null,
	[Tc.VALID]: vs,
	[Tc.INVALID]: bs,
	[Tc.WARNING]: ws,
	[Tc.CRITERIA_EMPTY]: Cs,
	[Tc.CRITERIA_VALID]: ys,
	[Tc.CRITERIA_INVALID]: _s
}, Dc = ({ isInvalid: e, isValid: t }) => t ? Tc.VALID : e ? Tc.INVALID : Tc.DEFAULT;
function Oc({ type: e, customIcon: t }) {
	if (t) return t;
	let n = Ec[e];
	return n ? /*#__PURE__*/ R.createElement(gs, { src: n }) : null;
}
Oc.propTypes = {
	type: W.default.oneOf(Object.values(Tc)),
	customIcon: W.default.node
}, Oc.defaultProps = {
	type: void 0,
	customIcon: void 0
};
function kc({ children: e, type: t, icon: n, muted: r, hasIcon: i, ...a }) {
	let o = (0, V.default)(a.className, "pgn__form-text", `pgn__form-text-${t}`, { "text-muted": r });
	return /*#__PURE__*/ R.createElement("div", {
		...a,
		className: o
	}, i && /*#__PURE__*/ R.createElement(Oc, {
		customIcon: n,
		type: t
	}), /*#__PURE__*/ R.createElement("div", null, e));
}
kc.propTypes = {
	children: W.default.node.isRequired,
	className: W.default.string,
	hasIcon: W.default.bool,
	type: W.default.oneOf([
		"default",
		"valid",
		"invalid",
		"warning",
		"criteria-empty",
		"criteria-valid",
		"criteria-invalid"
	]),
	icon: W.default.node,
	muted: W.default.bool
}, kc.defaultProps = {
	hasIcon: !0,
	type: "default",
	icon: void 0,
	className: void 0,
	muted: !1
};
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Form/FormControlFeedback.js
function Ac({ children: e, ...t }) {
	let { getDescriptorProps: n, isInvalid: r, isValid: i } = xc(), a = n(t), o = (0, V.default)("pgn__form-control-description", t.className), s = t.type || Dc({
		isInvalid: r,
		isValid: i
	});
	return /*#__PURE__*/ R.createElement(kc, {
		...a,
		className: o,
		type: s
	}, e);
}
Ac.propTypes = {
	children: W.default.node.isRequired,
	className: W.default.string,
	hasIcon: W.default.bool,
	type: W.default.oneOf([
		"default",
		"valid",
		"invalid",
		"warning",
		"criteria-empty",
		"criteria-valid",
		"criteria-invalid"
	]),
	icon: W.default.node,
	muted: W.default.bool
}, Ac.defaultProps = {
	hasIcon: !0,
	type: void 0,
	icon: void 0,
	className: void 0,
	muted: !1
};
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Form/FormControlFloatingLabel.js
function jc({ children: e }) {
	let { controlId: t } = xc();
	return /*#__PURE__*/ R.createElement("div", { className: "pgn__form-control-floating-label" }, /*#__PURE__*/ R.createElement("div", { className: "pgn__form-control-floating-label-content" }, /*#__PURE__*/ R.createElement("label", {
		className: "pgn__form-control-floating-label-text",
		htmlFor: t
	}, e)));
}
jc.propTypes = { children: W.default.node.isRequired };
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Form/FormControlDecorator.js
function Mc({ children: e, location: t }) {
	return /*#__PURE__*/ R.createElement("div", { className: `pgn__form-control-decorator pgn__form-control-decorator-${t}` }, e);
}
Mc.propTypes = {
	children: W.default.node.isRequired,
	location: W.default.oneOf(["leading", "trailing"])
}, Mc.defaultProps = { location: "leading" };
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Form/FormControlDecoratorGroup.js
function Nc({ children: e, leadingElement: t, trailingElement: n, floatingLabel: r, className: i, ...a }) {
	let o = xc(a), s = a.size || o.size;
	return /*#__PURE__*/ R.createElement("div", {
		className: (0, V.default)("pgn__form-control-decorator-group", {
			"has-prepended-node": !!t,
			"has-appended-node": !!n,
			"has-leading-element": !!t,
			"has-trailing-element": !!n,
			"has-floating-label": !!r,
			"pgn__form-control-decorator-group-lg": s === wc.LARGE,
			"pgn__form-control-decorator-group-sm": s === wc.SMALL
		}, i),
		...a
	}, e, t && /*#__PURE__*/ R.createElement(Mc, { location: "leading" }, t), n && /*#__PURE__*/ R.createElement(Mc, { location: "trailing" }, n), r && /*#__PURE__*/ R.createElement(jc, null, r));
}
Nc.propTypes = {
	children: W.default.node.isRequired,
	leadingElement: W.default.node,
	trailingElement: W.default.node,
	floatingLabel: W.default.node,
	className: W.default.string,
	size: W.default.oneOf([wc.SMALL, wc.LARGE])
}, Nc.defaultProps = {
	leadingElement: void 0,
	trailingElement: void 0,
	floatingLabel: void 0,
	className: void 0,
	size: void 0
};
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Form/FormControl.js
var Pc = /*#__PURE__*/ R.forwardRef(({ as: e, className: t, controlClassName: n, leadingElement: r, trailingElement: i, floatingLabel: a, autoResize: o, onChange: s, inputMask: c, ...l }, u) => {
	let { isInvalid: d, isValid: f, getControlProps: p, ...m } = xc(), h = R.useRef(), g = u || h, _ = l.size || m.size, [v, y] = _c({
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
		onBlur: gc(y, l.onBlur)
	});
	return /*#__PURE__*/ R.createElement(Nc, {
		size: _,
		leadingElement: r,
		trailingElement: i,
		floatingLabel: a,
		className: t
	}, /*#__PURE__*/ R.createElement(No, {
		as: c ? Y : e,
		ref: g,
		size: _,
		isInvalid: d,
		isValid: f,
		className: (0, V.default)(n, { "has-value": v }),
		onChange: (e) => {
			b(), s && s(e);
		},
		mask: c,
		...x
	}));
});
Pc.Feedback = Ac, Pc.Description = Ac, Pc.propTypes = {
	className: W.default.string,
	as: W.default.elementType,
	onChange: W.default.func,
	defaultValue: W.default.oneOfType([W.default.string, W.default.number]),
	value: W.default.oneOfType([W.default.string, W.default.number]),
	id: W.default.string,
	controlClassName: W.default.string,
	size: W.default.oneOf(["sm", "lg"]),
	leadingElement: W.default.node,
	trailingElement: W.default.node,
	floatingLabel: W.default.node,
	plaintext: W.default.bool,
	isValid: W.default.bool,
	isInvalid: W.default.bool,
	autoResize: W.default.bool,
	inputMask: W.default.string
}, Pc.defaultProps = {
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
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Form/FormLabel.js
function Fc({ children: e, isInline: t = !1, ...n }) {
	let { size: r, isControlGroup: i, getLabelProps: a } = xc(), o = (0, V.default)("pgn__form-label", {
		"pgn__form-label-inline": t,
		"pgn__form-label-lg": r === wc.LARGE,
		"pgn__form-label-sm": r === wc.SMALL
	}, n.className), s = a({
		...n,
		className: o
	}), c = i ? "p" : "label";
	return /*#__PURE__*/ R.createElement(c, s, e);
}
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Form/FormGroup.js
function Ic({ children: e, controlId: t, isInvalid: n = !1, isValid: r = !1, size: i, as: a, ...o }) {
	return /*#__PURE__*/ R.createElement(a ?? "div", {
		...o,
		className: (0, V.default)("pgn__form-group", o.className)
	}, /*#__PURE__*/ R.createElement(Cc, {
		controlId: t,
		isInvalid: n,
		isValid: r,
		size: i
	}, e));
}
var Lc = /*#__PURE__*/ R.createContext({
	getRadioControlProps: (e) => e,
	hasRadioSetProvider: !1
}), Rc = () => (0, R.useContext)(Lc);
function zc({ children: e, name: t, onBlur: n, onFocus: r, onChange: i, value: a, defaultValue: o }) {
	let s = !o && a !== void 0, c = {
		name: t,
		value: a,
		defaultValue: o,
		getRadioControlProps: (e) => ({
			...e,
			name: t,
			/* istanbul ignore next */
			onBlur: e.onBlur ? gc(n, e.onBlur) : n,
			/* istanbul ignore next */
			onFocus: e.onFocus ? gc(r, e.onFocus) : r,
			/* istanbul ignore next */
			onChange: e.onChange ? gc(i, e.onChange) : i,
			checked: s ? a === e.value : void 0,
			defaultChecked: s ? void 0 : o === e.value
		}),
		onBlur: n,
		onFocus: r,
		onChange: i,
		hasRadioSetProvider: !0
	};
	return /*#__PURE__*/ R.createElement(Lc.Provider, { value: c }, e);
}
zc.propTypes = {
	children: W.default.node.isRequired,
	name: W.default.string.isRequired,
	onBlur: W.default.func,
	onFocus: W.default.func,
	onChange: W.default.func,
	value: W.default.string,
	defaultValue: W.default.string
}, zc.defaultProps = {
	onBlur: void 0,
	onFocus: void 0,
	onChange: void 0,
	value: void 0,
	defaultValue: void 0
};
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Form/FormRadio.js
var Bc = /*#__PURE__*/ R.forwardRef((e, t) => {
	let { getControlProps: n } = xc(), { getRadioControlProps: r, hasRadioSetProvider: i } = Rc(), a = n({
		...e,
		className: (0, V.default)("pgn__form-radio-input", e.className)
	});
	return i && (a = r(a)), /*#__PURE__*/ R.createElement("input", {
		...a,
		type: "radio",
		ref: t
	});
});
Bc.propTypes = { className: W.default.string }, Bc.defaultProps = { className: void 0 };
var Vc = /*#__PURE__*/ R.forwardRef(({ children: e, className: t, controlClassName: n, labelClassName: r, description: i, isInvalid: a, isValid: o, ...s }, c) => /*#__PURE__*/ R.createElement(Cc, {
	controlId: s.id,
	isInvalid: a,
	isValid: o
}, /*#__PURE__*/ R.createElement("div", { className: (0, V.default)("pgn__form-radio", t, {
	"pgn__form-control-valid": o,
	"pgn__form-control-invalid": a,
	"pgn__form-control-disabled": s.disabled
}) }, /*#__PURE__*/ R.createElement(Bc, {
	ref: c,
	className: n,
	...s
}), /*#__PURE__*/ R.createElement("div", null, /*#__PURE__*/ R.createElement(Fc, { className: r }, e), i && /*#__PURE__*/ R.createElement(Ac, { hasIcon: !1 }, i)))));
Vc.propTypes = {
	id: W.default.string,
	children: W.default.node.isRequired,
	className: W.default.string,
	controlClassName: W.default.string,
	labelClassName: W.default.string,
	description: W.default.node,
	isInvalid: W.default.bool,
	isValid: W.default.bool,
	disabled: W.default.bool
}, Vc.defaultProps = {
	id: void 0,
	className: void 0,
	controlClassName: void 0,
	labelClassName: void 0,
	description: void 0,
	isInvalid: !1,
	isValid: !1,
	disabled: !1
};
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Form/FormControlSet.js
function Hc({ as: e, className: t, isInline: n, children: r, ...i }) {
	return /*#__PURE__*/ R.createElement(e, {
		className: (0, V.default)(t, {
			"pgn__form-control-set": !n,
			"pgn__form-control-set-inline": n
		}),
		...i
	}, r);
}
Hc.propTypes = {
	as: W.default.elementType,
	className: W.default.string,
	isInline: W.default.bool,
	children: W.default.node
}, Hc.defaultProps = {
	as: "div",
	className: void 0,
	isInline: !1,
	children: null
};
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Form/FormRadioSet.js
function Uc({ children: e, name: t, value: n, defaultValue: r, isInline: i, onChange: a, onFocus: o, onBlur: s, ...c }) {
	let { getControlProps: l, useSetIsControlGroupEffect: u } = xc();
	u(!0);
	let d = l(c);
	return /*#__PURE__*/ R.createElement(zc, {
		name: t,
		value: n,
		defaultValue: r,
		onFocus: o,
		onBlur: s,
		onChange: a
	}, /*#__PURE__*/ R.createElement(Hc, {
		role: "radiogroup",
		isInline: i,
		...d
	}, e));
}
Uc.propTypes = {
	children: W.default.node.isRequired,
	className: W.default.string,
	name: W.default.string.isRequired,
	value: W.default.string,
	defaultValue: W.default.string,
	isInline: W.default.bool,
	onChange: W.default.func,
	onFocus: W.default.func,
	onBlur: W.default.func
}, Uc.defaultProps = {
	className: void 0,
	value: void 0,
	defaultValue: void 0,
	isInline: !1,
	onChange: void 0,
	onFocus: void 0,
	onBlur: void 0
};
// node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/rng.js
var X, Wc = /* @__PURE__ */ new Uint8Array(16);
function Gc() {
	if (!X && (X = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !X)) throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
	return X(Wc);
}
// node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/stringify.js
var Z = [];
for (let e = 0; e < 256; ++e) Z.push((e + 256).toString(16).slice(1));
function Kc(e, t = 0) {
	return Z[e[t + 0]] + Z[e[t + 1]] + Z[e[t + 2]] + Z[e[t + 3]] + "-" + Z[e[t + 4]] + Z[e[t + 5]] + "-" + Z[e[t + 6]] + Z[e[t + 7]] + "-" + Z[e[t + 8]] + Z[e[t + 9]] + "-" + Z[e[t + 10]] + Z[e[t + 11]] + Z[e[t + 12]] + Z[e[t + 13]] + Z[e[t + 14]] + Z[e[t + 15]];
}
var qc = { randomUUID: typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto) };
// node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/v4.js
function Jc(e, t, n) {
	if (qc.randomUUID && !t && !e) return qc.randomUUID();
	e ||= {};
	let r = e.random || (e.rng || Gc)();
	if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, t) {
		n ||= 0;
		for (let e = 0; e < 16; ++e) t[n + e] = r[e];
		return t;
	}
	return Kc(r);
}
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/utils/propTypes/utils.js
var Yc = (e, t, n) => ((r, i, a, ...o) => t(r) && r[i] === void 0 ? /* @__PURE__ */ Error(`${a}: ${i} is required when ${n}`) : e(r, i, a, ...o)), Xc = (e, t) => t.every((t) => e[t] !== void 0), Zc = (e, t) => Yc(e, (e) => Array.isArray(t) ? Xc(e, t) : e[t] === !0, `${t} ${Array.isArray(t) ? "are defined" : "is truthy"}`), Qc = (e, t) => Yc(e, (e) => !e[t], `not ${t}`), $c = /*#__PURE__*/ R.forwardRef(({ className: e, screenReaderText: t, ...n }, r) => {
	let i = {
		...n,
		className: (0, V.default)("pgn__spinner", e),
		role: t ? "status" : void 0
	};
	return /*#__PURE__*/ R.createElement(us, {
		...i,
		ref: r
	}, t && /*#__PURE__*/ R.createElement("span", { className: "sr-only" }, t));
});
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/hooks/useArrowKeyNavigationHook.js
function el({ event: e, currentIndex: t, activeElement: n }) {
	t !== -1 && (n.click(), e.preventDefault());
}
function tl({ event: e, currentIndex: t, availableElements: n }) {
	t === -1 && n[0].focus();
	let r;
	(e.key === "ArrowDown" || e.key === "ArrowRight") && (r = n[(t + 1) % n.length]), (e.key === "ArrowUp" || e.key === "ArrowLeft") && (r = t - 1 < 0 ? n[t - 1 + n.length] : n[t - 1]), e.key === "End" && (r = n[n.length - 1]), e.key === "Home" && ([r] = n), r?.focus(), e.preventDefault();
}
function nl({ event: e, ignoredKeys: t = [], parentNode: n, selectors: r = "a,button,input" }) {
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
	i === "Enter" && a && el({
		event: e,
		currentIndex: s,
		activeElement: a
	}), tl({
		event: e,
		currentIndex: s,
		availableElements: o
	});
}
function rl(e = {}) {
	let { selectors: t, ignoredKeys: n } = e, r = (0, R.useRef)();
	return (0, R.useEffect)(() => {
		let e = (e) => {
			nl({
				event: e,
				ignoredKeys: n,
				parentNode: r.current,
				selectors: t
			});
		};
		return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e);
	}, [n, t]), r;
}
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Form/messages.js
var il = xn({
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
}), al = /*#__PURE__*/ (0, R.forwardRef)(({ children: e, arrowKeyNavigationSelector: t, ignoredArrowKeysNames: n, screenReaderText: r, value: i, isLoading: a, isValueRequired: o, valueRequiredErrorMessageText: s, isSelectionRequired: c, selectionRequiredErrorMessageText: l, hasCustomError: u, customErrorMessageText: d, onChange: f, helpMessage: p, ...m }, h) => {
	let g = dn(), _ = (0, R.useRef)(), v = rl({
		selectors: t,
		ignoredKeys: n
	}), [y, b] = (0, R.useState)(!1), [x, S] = (0, R.useState)(!1), [C, w] = (0, R.useState)(!1), [T, E] = (0, R.useState)(!1), [D, O] = (0, R.useState)(i?.userProvidedText || ""), [k, ee] = (0, R.useState)([]), [A, j] = (0, R.useState)(null), [te, M] = (0, R.useState)(!0), [N, ne] = (0, R.useState)(""), re = (e) => {
		j(e);
	}, ie = () => {
		ee([]), b(!1), j(null);
	}, P = (e, t) => {
		let n = e.currentTarget.getAttribute("data-value"), r = e.currentTarget.id;
		w(!0), E(!0), O(n), f && (!i || i && n !== i.selectionValue) && f({
			userProvidedText: n,
			selectionValue: n,
			selectionId: r
		}), ie(), t && t(e);
	};
	function ae(t = "") {
		let n = R.Children.map(e, (e) => {
			let { children: t, onClick: n, ...r } = e.props, i = e.props.id ?? Jc();
			return /*#__PURE__*/ R.cloneElement(e, {
				...r,
				children: t,
				"data-value": t,
				onClick: (e) => P(e, n),
				id: i,
				onFocus: () => re(i)
			});
		});
		return t.length > 0 && (n = n.filter((e) => e.props.children.toLowerCase().includes(t.toLowerCase()))), n;
	}
	let oe = () => {
		ee(ae(D)), M(!0), ne(""), b(!0);
	}, se = /*#__PURE__*/ R.createElement(Ds, {
		className: "pgn__form-autosuggest__icon-button",
		"data-testid": "autosuggest-iconbutton",
		tabIndex: "-1",
		src: y ? Ss : xs,
		iconAs: gs,
		size: "sm",
		variant: "secondary",
		alt: y ? g.formatMessage(il.iconButtonClosed) : g.formatMessage(il.iconButtonOpened),
		onClick: () => {
			y ? ie() : oe();
		}
	}), ce = () => {
		S(!0);
	}, le = () => {
		u ? (M(!1), ne(d)) : o && !C ? (M(!1), ne(s)) : C && c && !T ? (M(!1), ne(l)) : (M(!0), ne(""));
	};
	(0, R.useImperativeHandle)(h, () => ({ updateErrorStateAndErrorMessage: le }));
	let ue = () => {
		S(!1), ie(), le();
	}, de = (e) => {
		x && (e.key === "Escape" ? (e.preventDefault(), _ && _.current.focus(), ie()) : e.key === "Tab" && ue());
	}, fe = (e) => {
		v.current && !v.current.contains(e.target) && x && ue();
	};
	(0, R.useEffect)(() => (document.addEventListener("keydown", de), document.addEventListener("click", fe, !0), () => {
		document.removeEventListener("click", fe, !0), document.removeEventListener("keydown", de);
	})), (0, R.useEffect)(() => {
		O(i ? i.userProvidedText ?? "" : ""), w(!!i && !!i.userProvidedText), E(!!i && !!i.selectionValue);
	}, [i]);
	let pe = () => {
		oe();
	}, me = (e) => {
		let t = e.target.value;
		if (!t.length) {
			O(""), w(!1), E(!1), ee([]), ie(), f && f({
				userProvidedText: "",
				selectionValue: "",
				selectionId: ""
			});
			return;
		}
		w(!0);
		let n = ae(t);
		ee(n);
		let r = n.find((e) => e.props.children.toLowerCase() === t.toLowerCase());
		r ? (E(!0), O(r.props.children), f && f({
			userProvidedText: r.props.children,
			selectionValue: r.props.children,
			selectionId: r.props.id
		})) : (E(!1), O(t), f && f({
			userProvidedText: t,
			selectionValue: "",
			selectionId: ""
		}));
	}, { getControlProps: he } = xc(), ge = he(m);
	return /*#__PURE__*/ R.createElement("div", {
		className: "pgn__form-autosuggest__wrapper",
		ref: v,
		onFocus: ce
	}, /*#__PURE__*/ R.createElement("div", {
		"aria-live": "assertive",
		className: "sr-only",
		"data-testid": "autosuggest-screen-reader-options-count"
	}, `${k.length} options found`), /*#__PURE__*/ R.createElement(Cc, {
		controlId: ge.id,
		isInvalid: !te
	}, /*#__PURE__*/ R.createElement(Pc, {
		ref: _,
		"aria-expanded": (k.length > 0).toString(),
		"aria-owns": "pgn__form-autosuggest__dropdown-box",
		role: "combobox",
		"aria-autocomplete": "list",
		autoComplete: "off",
		value: D,
		"aria-invalid": N,
		"aria-activedescendant": A,
		onChange: me,
		onClick: pe,
		trailingElement: se,
		"data-testid": "autosuggest-textbox-input",
		...ge
	}), p && te && /*#__PURE__*/ R.createElement(Ac, { type: "default" }, p), !te && /*#__PURE__*/ R.createElement(Ac, {
		type: "invalid",
		"feedback-for": ge.name
	}, N)), /*#__PURE__*/ R.createElement("ul", {
		id: "pgn__form-autosuggest__dropdown-box",
		className: "pgn__form-autosuggest__dropdown",
		role: "listbox"
	}, a ? /*#__PURE__*/ R.createElement("div", { className: "pgn__form-autosuggest__dropdown-loading" }, /*#__PURE__*/ R.createElement($c, {
		animation: "border",
		variant: "dark",
		screenReaderText: r,
		"data-testid": "autosuggest-loading-spinner"
	})) : k.length > 0 && k));
});
al.defaultProps = {
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
}, al.propTypes = {
	arrowKeyNavigationSelector: W.default.string,
	ignoredArrowKeysNames: W.default.arrayOf(W.default.string),
	isLoading: W.default.bool,
	className: W.default.string,
	floatingLabel: W.default.string,
	onChange: W.default.func,
	helpMessage: W.default.string,
	placeholder: W.default.string,
	value: W.default.shape({
		userProvidedText: W.default.string,
		selectionValue: W.default.string,
		selectionId: W.default.string
	}),
	isValueRequired: W.default.bool,
	valueRequiredErrorMessageText: Zc(W.default.string, "isValueRequired"),
	isSelectionRequired: W.default.bool,
	selectionRequiredErrorMessageText: Zc(W.default.string, "isSelectionRequired"),
	hasCustomError: W.default.bool,
	customErrorMessageText: Zc(W.default.string, "hasCustomError"),
	name: W.default.string,
	readOnly: W.default.bool,
	children: W.default.node,
	screenReaderText: W.default.string
};
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Menu/MenuItem.js
function ol({ as: e = "button", children: t, defaultSelected: n = !1, iconAfter: r, iconBefore: i, ...a }) {
	let o = (0, V.default)(a.className, "pgn__menu-item");
	return /*#__PURE__*/ (0, R.createElement)(e, {
		...a,
		className: o
	}, /*#__PURE__*/ R.createElement(R.Fragment, null, i && /*#__PURE__*/ R.createElement(gs, {
		className: "btn-icon-before",
		src: i
	}), /*#__PURE__*/ R.createElement("span", { className: "pgn__menu-item-text" }, t), /*#__PURE__*/ R.createElement("span", { className: "pgn__menu-item-content-spacer" }), r && /*#__PURE__*/ R.createElement(gs, {
		className: "btn-icon-after",
		src: r
	})));
}
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Form/FormAutosuggestOption.js
function sl({ children: e, className: t, onClick: n, ...r }) {
	return /*#__PURE__*/ R.createElement(ol, {
		as: "li",
		"data-testid": "autosuggest-optionitem",
		role: "option",
		tabIndex: "-1",
		onClick: n,
		className: (0, V.default)(t, "dropdown-item"),
		...r
	}, e);
}
sl.defaultProps = {
	className: null,
	children: null,
	onClick: null
}, sl.propTypes = {
	className: W.default.string,
	children: W.default.string,
	onClick: W.default.func
};
var cl = /*#__PURE__*/ R.createContext({
	getCheckboxControlProps: (e) => e,
	hasCheckboxSetProvider: !1
}), ll = () => (0, R.useContext)(cl);
function ul({ children: e, name: t, onBlur: n, onFocus: r, onChange: i, value: a, defaultValue: o }) {
	let s = !o && Array.isArray(a), c = {
		name: t,
		value: a,
		defaultValue: o,
		getCheckboxControlProps: (e) => ({
			...e,
			name: t,
			/* istanbul ignore next */
			onBlur: e.onBlur ? gc(n, e.onBlur) : n,
			/* istanbul ignore next */
			onFocus: e.onFocus ? gc(r, e.onFocus) : r,
			/* istanbul ignore next */
			onChange: e.onChange ? gc(i, e.onChange) : i,
			checked: s ? a.includes(e.value) : void 0,
			defaultChecked: s ? void 0 : o && o.includes(e.value)
		}),
		onBlur: n,
		onFocus: r,
		onChange: i,
		hasCheckboxSetProvider: !0
	};
	return /*#__PURE__*/ R.createElement(cl.Provider, { value: c }, e);
}
ul.propTypes = {
	children: W.default.node.isRequired,
	name: W.default.string,
	onBlur: W.default.func,
	onFocus: W.default.func,
	onChange: W.default.func,
	value: W.default.arrayOf(W.default.string),
	defaultValue: W.default.arrayOf(W.default.string)
}, ul.defaultProps = {
	onBlur: void 0,
	name: void 0,
	onFocus: void 0,
	onChange: void 0,
	value: void 0,
	defaultValue: void 0
};
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Form/FormCheckbox.js
var dl = /*#__PURE__*/ R.forwardRef(({ isIndeterminate: e, ...t }, n) => {
	let { getCheckboxControlProps: r, hasCheckboxSetProvider: i } = ll(), a = R.useRef(), o = n || a, { getControlProps: s } = xc(), c = s({
		...t,
		className: (0, V.default)("pgn__form-checkbox-input", t.className)
	});
	return i && (c = r(c)), R.useEffect(() => {
		o.current && (o.current.indeterminate = e);
	}, [o, e]), /*#__PURE__*/ R.createElement("input", {
		type: "checkbox",
		...c,
		ref: o
	});
});
dl.propTypes = {
	isIndeterminate: W.default.bool,
	className: W.default.string
}, dl.defaultProps = {
	isIndeterminate: !1,
	className: void 0
};
var fl = /*#__PURE__*/ R.forwardRef(({ children: e, className: t, controlClassName: n, labelClassName: r, description: i, isInvalid: a, isValid: o, controlAs: s, floatLabelLeft: c, ...l }, u) => {
	let { hasCheckboxSetProvider: d } = ll(), { hasFormGroupProvider: f, useSetIsControlGroupEffect: p, getControlProps: m } = xc();
	p(!0);
	let h = f && !d ? {
		...m({}),
		role: "group"
	} : {}, g = /*#__PURE__*/ R.createElement(s, {
		...l,
		className: n,
		ref: u
	});
	return /*#__PURE__*/ R.createElement(Cc, {
		controlId: l.id,
		isInvalid: a,
		isValid: o
	}, /*#__PURE__*/ R.createElement("div", {
		className: (0, V.default)("pgn__form-checkbox", t, {
			"pgn__form-control-valid": o,
			"pgn__form-control-invalid": a,
			"pgn__form-control-disabled": l.disabled,
			"pgn__form-control-label-left": !!c
		}),
		...h
	}, g, /*#__PURE__*/ R.createElement("div", null, /*#__PURE__*/ R.createElement(Fc, { className: r }, e), i && /*#__PURE__*/ R.createElement(Ac, { hasIcon: !1 }, i))));
});
fl.propTypes = {
	id: W.default.string,
	children: W.default.node.isRequired,
	className: W.default.string,
	controlClassName: W.default.string,
	labelClassName: W.default.string,
	description: W.default.node,
	isInvalid: W.default.bool,
	isValid: W.default.bool,
	controlAs: W.default.elementType,
	floatLabelLeft: W.default.bool,
	disabled: W.default.bool
}, fl.defaultProps = {
	id: void 0,
	className: void 0,
	controlClassName: void 0,
	labelClassName: void 0,
	description: void 0,
	isInvalid: !1,
	isValid: !1,
	controlAs: dl,
	floatLabelLeft: !1,
	disabled: !1
};
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Form/FormSwitch.js
var pl = /*#__PURE__*/ R.forwardRef(({ isIndeterminate: e, ...t }, n) => {
	let r = R.useRef(), i = n || r, { getControlProps: a } = xc(), o = a({
		...t,
		className: (0, V.default)("pgn__form-switch-input", t.className)
	});
	return R.useEffect(() => {
		i.current && (i.current.indeterminate = e);
	}, [i, e]), /*#__PURE__*/ R.createElement("input", {
		type: "checkbox",
		...o,
		ref: i
	});
});
pl.propTypes = {
	isIndeterminate: W.default.bool,
	className: W.default.string
}, pl.defaultProps = {
	isIndeterminate: !1,
	className: void 0
};
var ml = /*#__PURE__*/ R.forwardRef(({ children: e, className: t, helperText: n, ...r }, i) => /*#__PURE__*/ R.createElement("div", { className: "d-inline-flex flex-column" }, /*#__PURE__*/ R.createElement(fl, {
	className: (0, V.default)("pgn__form-switch", t),
	...r,
	role: "switch",
	ref: i,
	controlAs: pl,
	isValid: null,
	isInvalid: null,
	description: null
}, e), n && /*#__PURE__*/ R.createElement("div", { className: "pgn__form-switch-helper-text" }, n)));
ml.propTypes = {
	children: W.default.node.isRequired,
	className: W.default.string,
	labelClassName: W.default.string,
	helperText: W.default.node,
	floatLabelLeft: W.default.bool
}, ml.defaultProps = {
	className: void 0,
	labelClassName: void 0,
	helperText: void 0,
	floatLabelLeft: !1
};
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Form/FormCheckboxSet.js
function hl({ children: e, name: t, value: n, defaultValue: r, isInline: i, onChange: a, onFocus: o, onBlur: s, ...c }) {
	let { getControlProps: l, useSetIsControlGroupEffect: u } = xc();
	u(!0);
	let d = l(c);
	return /*#__PURE__*/ R.createElement(ul, {
		name: t,
		value: n,
		defaultValue: r,
		onFocus: o,
		onBlur: s,
		onChange: a
	}, /*#__PURE__*/ R.createElement(Hc, {
		role: "group",
		isInline: i,
		...d
	}, e));
}
hl.propTypes = {
	children: W.default.node.isRequired,
	className: W.default.string,
	name: W.default.string.isRequired,
	value: W.default.arrayOf(W.default.string),
	defaultValue: W.default.arrayOf(W.default.string),
	isInline: W.default.bool,
	onChange: W.default.func,
	onFocus: W.default.func,
	onBlur: W.default.func
}, hl.defaultProps = {
	className: void 0,
	value: void 0,
	defaultValue: void 0,
	isInline: !1,
	onChange: void 0,
	onFocus: void 0,
	onBlur: void 0
};
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Form/FormSwitchSet.js
var gl = hl, Q = Go;
Q.Control = Pc, Q.Radio = Vc, Q.RadioSet = Uc, Q.Autosuggest = al, Q.AutosuggestOption = sl, Q.Checkbox = fl, Q.CheckboxSet = hl, Q.Switch = ml, Q.SwitchSet = gl, Q.Label = Fc, Q.Group = Ic, Q.Text = kc;
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Stack/index.js
var _l = /*#__PURE__*/ (0, R.forwardRef)(({ direction: e = "vertical", gap: t = 0, reversed: n = !1, children: r, className: i, ...a }, o) => /*#__PURE__*/ R.createElement("div", {
	ref: o,
	className: (0, V.default)(e === "horizontal" ? "pgn__hstack" : "pgn__vstack", t ? `pgn__stack-gap--${t}` : "", n ? "pgn__stack-reversed" : "", i),
	...a
}, r)), vl = /*#__PURE__*/ function(e) {
	return e.MOVED = "MOVED", e.REMOVED = "REMOVED", e.FORMAT = "FORMAT", e.MOVED_AND_FORMAT = "MOVED_AND_FORMAT", e;
}({});
function yl(e, t, n) {
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
				case vl.MOVED:
					this.warn(`${t}: The prop '${r}' has been moved to '${a}'.`), e[a] = this.props[r];
					break;
				case vl.REMOVED:
					this.warn(`${t}: The prop '${r}' has been removed. '${c}'`);
					break;
				case vl.FORMAT:
					o(this.props[r]) ? e[r] = this.props[r] : (this.warn(`${t}: The prop '${r}' expects a new format. ${c}`), e[r] = s(this.props[r], this.props));
					break;
				case vl.MOVED_AND_FORMAT: {
					let n = this.props[r], i = `${t}: The prop '${r}' has been moved to '${a}'`;
					o && !o(n) && (i += " and expects a new format"), i += c ? `. ${c}` : "", this.warn(i), e[a] = s ? s(n, this.props) : n;
					break;
				}
				default: e[r] = this.props[r];
			}
			return e;
		}
		render() {
			let { children: t, ...n } = Object.keys(this.props).reduce(this.transformProps, {});
			return /*#__PURE__*/ R.createElement(e, { ...n }, this.props.children || t);
		}
	}
	return r;
}
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Card/CardBody.js
var bl = /*#__PURE__*/ R.forwardRef(({ className: e, children: t, ...n }, r) => /*#__PURE__*/ R.createElement("div", {
	className: (0, V.default)("pgn__card-body", e),
	ref: r,
	...n
}, t)), xl = "card", Sl = /*#__PURE__*/ R.forwardRef(({ prefix: e, className: t, bgColor: n, textColor: r, borderColor: i, hasBody: a = !1, children: o, as: s = "div", ...c }, l) => {
	let u = (0, V.default)(t, e ? `${e}-${xl}` : xl, n && `bg-${n}`, r && `text-${r}`, i && `border-${i}`);
	return /*#__PURE__*/ R.createElement(s, {
		ref: l,
		...c,
		className: u
	}, a ? /*#__PURE__*/ R.createElement(bl, null, o) : o);
}), Cl = /*#__PURE__*/ (0, R.createContext)({
	orientation: "vertical",
	isLoading: !1,
	variant: "light"
});
function wl({ orientation: e = "vertical", children: t, isLoading: n = !1, variant: r = "light" }) {
	return /*#__PURE__*/ R.createElement(Cl.Provider, { value: {
		orientation: e,
		isLoading: n,
		variant: r
	} }, t);
}
// node_modules/.pnpm/react-loading-skeleton@3.5.0_react@18.3.1/node_modules/react-loading-skeleton/dist/index.js
var Tl = R.createContext({}), El = !0;
function Dl({ baseColor: e, highlightColor: t, width: n, height: r, borderRadius: i, circle: a, direction: o, duration: s, enableAnimation: c = El, customHighlightBackground: l }) {
	let u = {};
	return o === "rtl" && (u["--animation-direction"] = "reverse"), typeof s == "number" && (u["--animation-duration"] = `${s}s`), c || (u["--pseudo-element-display"] = "none"), (typeof n == "string" || typeof n == "number") && (u.width = n), (typeof r == "string" || typeof r == "number") && (u.height = r), (typeof i == "string" || typeof i == "number") && (u.borderRadius = i), a && (u.borderRadius = "50%"), e !== void 0 && (u["--base-color"] = e), t !== void 0 && (u["--highlight-color"] = t), typeof l == "string" && (u["--custom-highlight-background"] = l), u;
}
function Ol({ count: e = 1, wrapper: t, className: n, containerClassName: r, containerTestId: i, circle: a = !1, style: o, ...s }) {
	let c = R.useContext(Tl), l = { ...s };
	for (let [e, t] of Object.entries(s)) t === void 0 && delete l[e];
	let u = {
		...c,
		...l,
		circle: a
	}, d = {
		...o,
		...Dl(u)
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
		"aria-busy": u.enableAnimation ?? El
	}, t ? m.map((e, n) => R.createElement(t, { key: n }, e)) : m);
}
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Card/CardHeader.js
var kl = 20, Al = /*#__PURE__*/ R.forwardRef(({ actions: e, className: t, size: n, subtitle: r, title: i, skeletonHeight: a, skeletonWidth: o }, s) => {
	let { isLoading: c } = (0, R.useContext)(Cl), l = (0, R.useCallback)((e) => {
		if (/*#__PURE__*/ R.isValidElement(e)) {
			let { children: t } = e.props, r = {
				size: n,
				children: Array.isArray(t) ? t.map(l) : l(t)
			};
			return /*#__PURE__*/ R.cloneElement(e, r);
		}
		return e;
	}, [n]);
	return c ? /*#__PURE__*/ R.createElement("div", { className: (0, V.default)("pgn__card-header", t) }, /*#__PURE__*/ R.createElement(Ol, {
		containerClassName: "pgn__card-header-loader",
		height: a,
		width: o
	})) : /*#__PURE__*/ R.createElement("div", {
		className: (0, V.default)("pgn__card-header", t),
		ref: s
	}, /*#__PURE__*/ R.createElement("div", { className: "pgn__card-header-content" }, i && /*#__PURE__*/ R.createElement("div", { className: `pgn__card-header-title-${n}` }, i), r && /*#__PURE__*/ R.createElement("div", { className: `pgn__card-header-subtitle-${n}` }, r)), e && /*#__PURE__*/ R.createElement("div", { className: "pgn__card-header-actions" }, n === "md" ? e : l(e)));
});
Al.propTypes = {
	actions: W.default.node,
	className: W.default.string,
	title: W.default.node,
	size: W.default.oneOf(["sm", "md"]),
	subtitle: W.default.node,
	skeletonHeight: W.default.number,
	skeletonWidth: W.default.number
}, Al.defaultProps = {
	actions: null,
	className: null,
	size: "md",
	title: null,
	subtitle: null,
	skeletonHeight: kl,
	skeletonWidth: null
};
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Card/CardDivider.js
var jl = /*#__PURE__*/ (0, R.forwardRef)(({ className: e, ...t }, n) => /*#__PURE__*/ R.createElement("div", {
	className: (0, V.default)("pgn__card-divider", e),
	ref: n,
	...t
})), Ml = 100, Nl = /*#__PURE__*/ R.forwardRef(({ className: e, children: t, title: n, actions: r, muted: i, skeletonHeight: a, skeletonWidth: o }, s) => {
	let { isLoading: c } = (0, R.useContext)(Cl);
	return c ? /*#__PURE__*/ R.createElement("div", { className: (0, V.default)("pgn__card-section", e, { "is-muted": i }) }, /*#__PURE__*/ R.createElement(Ol, {
		containerClassName: "pgn__card-section-loader",
		height: a,
		width: o
	})) : /*#__PURE__*/ R.createElement("div", {
		className: (0, V.default)("pgn__card-section", e, { "is-muted": i }),
		ref: s
	}, n && /*#__PURE__*/ R.createElement("div", { className: "pgn__card-section-title" }, n), t, r && /*#__PURE__*/ R.createElement("div", { className: "pgn__card-section-actions" }, r));
});
Nl.propTypes = {
	className: W.default.string,
	children: W.default.node,
	title: W.default.node,
	actions: W.default.node,
	muted: W.default.bool,
	skeletonHeight: W.default.number,
	skeletonWidth: W.default.number
}, Nl.defaultProps = {
	children: null,
	className: void 0,
	title: void 0,
	actions: void 0,
	muted: !1,
	skeletonHeight: Ml,
	skeletonWidth: void 0
};
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Card/CardFooter.js
var Pl = 18, Fl = /*#__PURE__*/ R.forwardRef(({ children: e, className: t, isStacked: n, textElement: r, skeletonHeight: i, skeletonWidth: a, orientation: o }, s) => {
	let { orientation: c, isLoading: l } = (0, R.useContext)(Cl), u = o || c, d = `pgn__card-footer ${u}${n ? "-stacked" : ""}`, f = `pgn__card-footer-text ${u}${n ? "-stacked" : ""}`;
	return l ? /*#__PURE__*/ R.createElement("div", { className: (0, V.default)(t, d) }, /*#__PURE__*/ R.createElement(Ol, {
		containerClassName: "pgn__card-footer-loader",
		height: i,
		width: a
	})) : /*#__PURE__*/ R.createElement("div", {
		className: (0, V.default)(t, d),
		ref: s
	}, r && /*#__PURE__*/ R.createElement("div", { className: f }, r), e);
});
Fl.propTypes = {
	children: W.default.node,
	className: W.default.string,
	textElement: W.default.node,
	isStacked: W.default.bool,
	orientation: W.default.oneOf(["horizontal", "vertical"]),
	skeletonHeight: W.default.number,
	skeletonWidth: W.default.number
}, Fl.defaultProps = {
	children: null,
	className: void 0,
	textElement: void 0,
	isStacked: !1,
	orientation: void 0,
	skeletonHeight: Pl,
	skeletonWidth: void 0
};
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Card/CardFallbackDefaultImage.js
var Il = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXwAAACMCAYAAAB/AhJnAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAH6SURBVHgB7dRBEYBADACxwuDf5j0QUXywiYhc7zk7APzd3gNAgvABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIp4BaNpp2Q/3/wfPkGyXOQAAAABJRU5ErkJggg==", Ll = 140, Rl = 41, zl = /*#__PURE__*/ R.forwardRef(({ src: e, fallbackSrc: t, srcAlt: n, logoSrc: r, fallbackLogoSrc: i, logoAlt: a, skeletonHeight: o, skeletonWidth: s, logoSkeleton: c, logoSkeletonHeight: l, logoSkeletonWidth: u, className: d, imageLoadingType: f, skeletonDuringImageLoad: p }, m) => {
	let { orientation: h, isLoading: g } = (0, R.useContext)(Cl), [_, v] = (0, R.useState)(!1), [y, b] = (0, R.useState)(!1), x = `pgn__card-wrapper-image-cap ${h}`, S = () => /*#__PURE__*/ R.createElement(Ol, {
		containerClassName: "pgn__card-image-cap-loader",
		height: h === "horizontal" ? "100%" : o,
		width: s
	}), C = () => /*#__PURE__*/ R.createElement(Ol, {
		containerClassName: "pgn__card-logo-cap",
		height: l,
		width: u
	});
	if (g) return /*#__PURE__*/ R.createElement("div", {
		className: (0, V.default)(x, d),
		"data-testid": "image-loader-wrapper"
	}, S(), c && C());
	let w = (e, t, n) => {
		let { currentTarget: r } = e;
		!t || r.src.endsWith(t) ? n === "imageCap" ? r.src = Il : b(!1) : r.src = t;
	};
	return /*#__PURE__*/ R.createElement("div", {
		className: (0, V.default)(d, x),
		ref: m
	}, !!e && /*#__PURE__*/ R.createElement(R.Fragment, null, p && !_ && S(), /*#__PURE__*/ R.createElement("img", {
		className: (0, V.default)("pgn__card-image-cap", { show: _ }),
		src: e,
		onError: (e) => w(e, t, "imageCap"),
		onLoad: () => v(!0),
		alt: n,
		loading: f
	})), !!r && /*#__PURE__*/ R.createElement(R.Fragment, null, p && !y && C(), /*#__PURE__*/ R.createElement("img", {
		className: (0, V.default)("pgn__card-logo-cap", { show: y }),
		src: r,
		onError: (e) => w(e, i, "logoCap"),
		onLoad: () => b(!0),
		alt: a,
		loading: f
	})));
});
zl.propTypes = {
	className: W.default.string,
	src: W.default.string,
	fallbackSrc: W.default.string,
	srcAlt: W.default.string,
	logoSrc: W.default.string,
	fallbackLogoSrc: W.default.string,
	logoAlt: W.default.string,
	skeletonHeight: W.default.number,
	skeletonWidth: W.default.number,
	logoSkeleton: W.default.bool,
	logoSkeletonHeight: W.default.number,
	logoSkeletonWidth: W.default.number,
	imageLoadingType: W.default.oneOf(["eager", "lazy"]),
	skeletonDuringImageLoad: W.default.bool
}, zl.defaultProps = {
	src: void 0,
	fallbackSrc: Il,
	logoSrc: void 0,
	fallbackLogoSrc: void 0,
	className: void 0,
	srcAlt: void 0,
	logoAlt: void 0,
	skeletonHeight: Ll,
	logoSkeleton: !1,
	logoSkeletonHeight: Rl,
	skeletonWidth: void 0,
	logoSkeletonWidth: void 0,
	imageLoadingType: "eager",
	skeletonDuringImageLoad: !1
};
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Card/CardStatus.js
var Bl = /*#__PURE__*/ R.forwardRef(({ className: e, children: t, variant: n, icon: r, title: i, actions: a, ...o }, s) => {
	let { isLoading: c } = (0, R.useContext)(Cl);
	return c ? /*#__PURE__*/ R.createElement("div", {
		className: (0, V.default)("pgn__card-status", e),
		"data-testid": "card-status-skeleton",
		ref: s
	}, /*#__PURE__*/ R.createElement(Ol, null)) : /*#__PURE__*/ R.createElement("div", {
		className: (0, V.default)("pgn__card-status", `pgn__card-status__${n}`, e),
		ref: s,
		...o
	}, /*#__PURE__*/ R.createElement("div", { className: "pgn__card-status__content" }, r && /*#__PURE__*/ R.createElement(gs, {
		className: "pgn__card-status__content-icon",
		src: r
	}), /*#__PURE__*/ R.createElement("div", { className: "pgn__card-status__message-content" }, i && /*#__PURE__*/ R.createElement("div", { className: "pgn__card-status__heading" }, i), t)), !!a && /*#__PURE__*/ R.createElement("div", { className: "pgn__card-status__actions" }, a));
});
Bl.propTypes = {
	children: W.default.node.isRequired,
	className: W.default.string,
	icon: W.default.func,
	variant: W.default.oneOf([
		"primary",
		"success",
		"danger",
		"warning"
	]),
	title: W.default.oneOfType([W.default.element, W.default.string]),
	actions: W.default.node
}, Bl.defaultProps = {
	className: void 0,
	icon: void 0,
	variant: "warning",
	title: void 0,
	actions: void 0
};
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Card/index.js
var Vl = [
	"light",
	"dark",
	"muted"
], Hl = /*#__PURE__*/ R.forwardRef(({ orientation: e, isLoading: t, className: n, isClickable: r, muted: i, variant: a, ...o }, s) => {
	let c = i ? "muted" : a;
	return /*#__PURE__*/ R.createElement(wl, {
		orientation: e,
		isLoading: t,
		variant: c
	}, /*#__PURE__*/ R.createElement(Sl, {
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
Hl.propTypes = {
	className: W.default.string,
	orientation: W.default.oneOf(["vertical", "horizontal"]),
	isClickable: W.default.bool,
	isLoading: W.default.bool,
	variant: W.default.oneOf(Vl),
	muted: W.default.bool
}, Hl.defaultProps = {
	...Sl.defaultProps,
	className: void 0,
	orientation: "vertical",
	isClickable: !1,
	variant: "light",
	isLoading: !1
};
var Ul = yl(Hl, "Card", { muted: {
	deprType: vl.REMOVED,
	message: "Use \"variant\" prop instead, i.e. variant=\"muted\""
} });
Ul.Status = Bl, Ul.Header = Al, Ul.Divider = jl, Ul.Section = Nl, Ul.Footer = Fl, Ul.ImageCap = zl, Ul.Context = Cl, Ul.Body = bl;
// src/external-resources/apiTypes.ts
var Wl = /* @__PURE__ */ function(e) {
	return e.ARTICLE = "ARTICLE", e.VIDEO = "VIDEO", e.PDF = "PDF", e.TEXTBOOK = "TEXTBOOK", e.VIRTUAL_MACHINE = "VIRTUAL_MACHINE", e.INTERACTIVE_ACTIVITY = "INTERACTIVE_ACTIVITY", e.LIBRARY = "LIBRARY", e.CUSTOM = "CUSTOM", e;
}({}), Gl = {
	[Wl.ARTICLE]: "Articles",
	[Wl.VIDEO]: "Video",
	[Wl.PDF]: "PDF",
	[Wl.TEXTBOOK]: "Textbook / Book",
	[Wl.VIRTUAL_MACHINE]: "Virtual machines",
	[Wl.INTERACTIVE_ACTIVITY]: "Interactive activities",
	[Wl.LIBRARY]: "Library"
}, Kl = {
	[Wl.ARTICLE]: "article",
	[Wl.VIDEO]: "smart_display",
	[Wl.PDF]: "picture_as_pdf",
	[Wl.TEXTBOOK]: "menu_book",
	[Wl.VIRTUAL_MACHINE]: "laptop",
	[Wl.INTERACTIVE_ACTIVITY]: "touch_app",
	[Wl.LIBRARY]: "local_library",
	[Wl.CUSTOM]: "description"
}, ql = ({ item: e, itemAlt: t, variant: n }) => /* @__PURE__ */ (0, wn.jsx)("div", {
	className: "external-resource-thumbnail",
	children: n === "icon" ? /* @__PURE__ */ (0, wn.jsx)("div", {
		className: "external-resource-icon-container",
		children: /* @__PURE__ */ (0, wn.jsx)("div", {
			className: "external-resource-icon rounded d-flex align-items-center justify-content-center",
			children: /* @__PURE__ */ (0, wn.jsx)("span", {
				className: "material-icons-outlined",
				"aria-hidden": "true",
				children: e
			})
		})
	}) : /* @__PURE__ */ (0, wn.jsx)(Jo, {
		className: "external-resource-image",
		src: e,
		alt: t,
		rounded: !0
	})
}), Jl = ({ resource: e, isClickable: t = !1, actions: n, className: r }) => {
	let i = e.fileType === Wl.CUSTOM ? e.customFileType ?? "" : Gl[e.fileType], a = e.thumbnailIcon || Kl[e.fileType];
	return /* @__PURE__ */ (0, wn.jsxs)(Ul, {
		orientation: "horizontal",
		className: `external-resource-card ${t ? "is-clickable" : ""} ${r ?? ""}`,
		onClick: () => t ? window.open(e.url, "_blank", "noopener,noreferrer") : null,
		children: [
			/* @__PURE__ */ (0, wn.jsx)(ql, {
				variant: e.thumbnailUrl ? "image" : "icon",
				item: e.thumbnailUrl || a,
				itemAlt: e.thumbnailAltText
			}),
			/* @__PURE__ */ (0, wn.jsx)(Ul.Body, {
				className: "flex-grow-1 w-auto",
				children: /* @__PURE__ */ (0, wn.jsxs)(Ul.Section, { children: [/* @__PURE__ */ (0, wn.jsxs)(_l, {
					direction: "horizontal",
					gap: 1,
					className: "card-type text-uppercase",
					children: [
						/* @__PURE__ */ (0, wn.jsx)("span", { children: i }),
						/* @__PURE__ */ (0, wn.jsx)("span", { children: "·" }),
						/* @__PURE__ */ (0, wn.jsxs)("span", { children: [e.expectedMinutes, " min"] })
					]
				}), /* @__PURE__ */ (0, wn.jsxs)(_l, { children: [/* @__PURE__ */ (0, wn.jsx)("span", {
					className: "card-title",
					children: e.title
				}), /* @__PURE__ */ (0, wn.jsx)("span", {
					className: "card-publisher",
					children: e.publisher
				})] })] })
			}),
			n && /* @__PURE__ */ (0, wn.jsx)(Ul.Footer, {
				className: "flex-grow-0 flex-shrink-0 w-auto d-flex align-items-start justify-content-end",
				children: /* @__PURE__ */ (0, wn.jsx)("div", {
					onClick: (e) => e.stopPropagation(),
					children: n
				})
			})
		]
	});
};
export { Un as A, Nn as B, Xr as C, yr as D, Ar as E, z as F, d as G, Cn as H, Pn as I, p as J, f as K, Tn as L, Bn as M, Fn as N, ir as O, B as P, An as R, Ga as S, Fr as T, xn as U, En as V, dn as W, r as X, s as Y, fo as _, Wl as a, no as b, Q as c, Ss as d, xs as f, po as g, ho as h, Gl as i, Vn as j, Gn as k, Qc as l, gs as m, ql as n, Ul as o, bs as p, m as q, Kl as r, _l as s, Jl as t, Ds as u, co as v, Br as w, qa as x, ao as y, On as z };
