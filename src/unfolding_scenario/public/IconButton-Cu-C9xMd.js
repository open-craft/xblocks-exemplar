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
	var ee = /\/+/g;
	function te(e, t) {
		return typeof e == "object" && e && e.key != null ? O("" + e.key) : t.toString(36);
	}
	function k(e, r, i, a, o) {
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
		if (c) return c = e, o = o(c), e = a === "" ? "." + te(c, 0) : a, x(o) ? (i = "", e != null && (i = e.replace(ee, "$&/") + "/"), k(o, r, i, "", function(e) {
			return e;
		})) : o != null && (D(o) && (o = E(o, i + (!o.key || c && c.key === o.key ? "" : ("" + o.key).replace(ee, "$&/") + "/") + e)), r.push(o)), 1;
		if (c = 0, a = a === "" ? "." : a + ":", x(e)) for (var l = 0; l < e.length; l++) {
			s = e[l];
			var u = a + te(s, l);
			c += k(s, r, i, u, o);
		}
		else if (u = p(e), typeof u == "function") for (e = u.call(e), l = 0; !(s = e.next()).done;) s = s.value, u = a + te(s, l++), c += k(s, r, i, u, o);
		else if (s === "object") throw r = String(e), Error("Objects are not valid as a React child (found: " + (r === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : r) + "). If you meant to render a collection of children, use an array instead.");
		return c;
	}
	function A(e, t, n) {
		if (e == null) return e;
		var r = [], i = 0;
		return k(e, r, "", "", function(e) {
			return t.call(n, e, i++);
		}), r;
	}
	function j(e) {
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
	var M = { current: null }, N = { transition: null }, P = {
		ReactCurrentDispatcher: M,
		ReactCurrentBatchConfig: N,
		ReactCurrentOwner: C
	};
	function ne() {
		throw Error("act(...) is not supported in production builds of React.");
	}
	e.Children = {
		map: A,
		forEach: function(e, t, n) {
			A(e, function() {
				t.apply(this, arguments);
			}, n);
		},
		count: function(e) {
			var t = 0;
			return A(e, function() {
				t++;
			}), t;
		},
		toArray: function(e) {
			return A(e, function(e) {
				return e;
			}) || [];
		},
		only: function(e) {
			if (!D(e)) throw Error("React.Children.only expected to receive a single React element child.");
			return e;
		}
	}, e.Component = _, e.Fragment = r, e.Profiler = a, e.PureComponent = y, e.StrictMode = i, e.Suspense = l, e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = P, e.act = ne, e.cloneElement = function(e, n, r) {
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
			_init: j
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
	}, e.unstable_act = ne, e.useCallback = function(e, t) {
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
		if (h = !1, y(e), !m) if (n(c) !== null) m = !0, A(x);
		else {
			var t = n(l);
			t !== null && j(b, t.startTime - e);
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
				g !== null && j(b, g.startTime - i), u = !1;
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
				n ? ee() : (S = !1, C = null);
			}
		} else S = !1;
	}
	var ee;
	if (typeof v == "function") ee = function() {
		v(O);
	};
	else if (typeof MessageChannel < "u") {
		var te = new MessageChannel(), k = te.port2;
		te.port1.onmessage = O, ee = function() {
			k.postMessage(null);
		};
	} else ee = function() {
		g(O, 0);
	};
	function A(e) {
		C = e, S || (S = !0, ee());
	}
	function j(t, n) {
		w = g(function() {
			t(e.unstable_now());
		}, n);
	}
	e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(e) {
		e.callback = null;
	}, e.unstable_continueExecution = function() {
		m || p || (m = !0, A(x));
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
		}, a > o ? (r.sortIndex = a, t(l, r), n(c) === null && r === n(l) && (h ? (_(w), w = -1) : h = !0, j(b, a - o))) : (r.sortIndex = s, t(c, r), m || p || (m = !0, A(x))), r;
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
	var C = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, w = Symbol.for("react.element"), T = Symbol.for("react.portal"), E = Symbol.for("react.fragment"), D = Symbol.for("react.strict_mode"), O = Symbol.for("react.profiler"), ee = Symbol.for("react.provider"), te = Symbol.for("react.context"), k = Symbol.for("react.forward_ref"), A = Symbol.for("react.suspense"), j = Symbol.for("react.suspense_list"), M = Symbol.for("react.memo"), N = Symbol.for("react.lazy"), P = Symbol.for("react.offscreen"), ne = Symbol.iterator;
	function re(e) {
		return typeof e != "object" || !e ? null : (e = ne && e[ne] || e["@@iterator"], typeof e == "function" ? e : null);
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
			case A: return "Suspense";
			case j: return "SuspenseList";
		}
		if (typeof e == "object") switch (e.$$typeof) {
			case te: return (e.displayName || "Context") + ".Consumer";
			case ee: return (e._context.displayName || "Context") + ".Provider";
			case k:
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
	function L(e) {
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
		if (L(e) !== e) throw Error(r(188));
	}
	function dt(e) {
		var t = e.alternate;
		if (!t) {
			if (t = L(e), t === null) throw Error(r(188));
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
			var n = L(t);
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
				Be = r, n.target.dispatchEvent(r), Be = null;
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
		if (vn = null, e = Ve(r), e = zi(e), e !== null) if (t = L(e), t === null) e = null;
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
		return F(t.prototype, {
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
	}, An = On(kn), jn = F({}, kn, {
		view: 0,
		detail: 0
	}), Mn = On(jn), Nn, Pn, Fn, In = F({}, jn, {
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
	}), Ln = On(In), Rn = On(F({}, In, { dataTransfer: 0 })), zn = On(F({}, jn, { relatedTarget: 0 })), Bn = On(F({}, kn, {
		animationName: 0,
		elapsedTime: 0,
		pseudoElement: 0
	})), V = On(F({}, kn, { clipboardData: function(e) {
		return "clipboardData" in e ? e.clipboardData : window.clipboardData;
	} })), Vn = On(F({}, kn, { data: 0 })), Hn = {
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
	var qn = On(F({}, jn, {
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
	})), Jn = On(F({}, In, {
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
	})), Yn = On(F({}, jn, {
		touches: 0,
		targetTouches: 0,
		changedTouches: 0,
		altKey: 0,
		metaKey: 0,
		ctrlKey: 0,
		shiftKey: 0,
		getModifierState: Kn
	})), Xn = On(F({}, kn, {
		propertyName: 0,
		elapsedTime: 0,
		pseudoElement: 0
	})), Zn = On(F({}, In, {
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
		Ke(r), t = pi(t, "onChange"), 0 < t.length && (n = new An("onChange", "change", null, n, r), e.push({
			event: n,
			listeners: t
		}));
	}
	var pr = null, mr = null;
	function hr(e) {
		oi(e, 0);
	}
	function gr(e) {
		if (he(Vi(e))) return e;
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
			fr(t, mr, e, Ve(e)), Ze(hr, t);
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
		Vr || Rr == null || Rr !== ge(r) || (r = Rr, "selectionStart" in r && Fr(r) ? r = {
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
		n = i.bind(null, t, n, e), i = void 0, !$e || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i === void 0 ? e.addEventListener(t, n, !0) : e.addEventListener(t, n, {
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
		Ze(function() {
			var r = a, i = Ve(n), o = [];
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
							c = Bn;
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
							c = V;
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
						if (m.tag === 5 && h !== null && (m = h, f !== null && (h = Qe(p, f), h != null && u.push(fi(p, h, m)))), d) break;
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
					if ((c || s) && (s = i.window === i ? i : (s = i.ownerDocument) ? s.defaultView || s.parentWindow : window, c ? (l = n.relatedTarget || n.toElement, c = r, l = l ? zi(l) : null, l !== null && (d = L(l), l !== d || l.tag !== 5 && l.tag !== 6) && (l = null)) : (c = null, l = r), c !== l)) {
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
					_ && _(e, s, r), e === "focusout" && (_ = s._wrapperState) && _.controlled && s.type === "number" && Se(s, "number", s.value);
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
			i.tag === 5 && a !== null && (i = a, a = Qe(e, n), a != null && r.unshift(fi(e, a, i)), a = Qe(e, t), a != null && r.push(fi(e, a, i))), e = e.return;
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
			s.tag === 5 && l !== null && (s = l, i ? (c = Qe(n, a), c != null && o.unshift(fi(n, c, s))) : i || (c = Qe(n, a), c != null && o.push(fi(n, c, s)))), n = n.return;
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
	var Ki = {}, G = Gi(Ki), qi = Gi(!1), Ji = Ki;
	function Yi(e, t) {
		var n = e.type.contextTypes;
		if (!n) return Ki;
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
		U(qi), U(G);
	}
	function Qi(e, t, n) {
		if (G.current !== Ki) throw Error(r(168));
		W(G, t), W(qi, n);
	}
	function $i(e, t, n) {
		var i = e.stateNode;
		if (t = t.childContextTypes, typeof i.getChildContext != "function") return n;
		for (var a in i = i.getChildContext(), i) if (!(a in t)) throw Error(r(108, ue(e) || "Unknown", a));
		return F({}, n, i);
	}
	function ea(e) {
		return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Ki, Ji = G.current, W(G, e), W(qi, qi.current), !0;
	}
	function ta(e, t, n) {
		var i = e.stateNode;
		if (!i) throw Error(r(169));
		n ? (e = $i(e, t, Ji), i.__reactInternalMemoizedMergedChildContext = e, U(qi), U(G), W(G, e)) : U(qi), W(qi, n);
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
			var e = 0, t = z;
			try {
				var n = na;
				for (z = 1; e < n.length; e++) {
					var r = n[e];
					do
						r = r(!0);
					while (r !== null);
				}
				na = null, ra = !1;
			} catch (t) {
				throw na !== null && (na = na.slice(e + 1)), mt(yt, sa), t;
			} finally {
				z = t, ia = !1;
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
		var i = 32 - Dt(r) - 1;
		r &= ~(1 << i), n += 1;
		var a = 32 - Dt(t) + i;
		if (30 < a) {
			var o = i - i % 5;
			a = (r & (1 << o) - 1).toString(32), r >>= o, i -= o, ha = 1 << 32 - Dt(t) + i | n << i | r, ga = a + e;
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
		var n = ql(5, null, null, 0);
		n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
	}
	function Ta(e, t) {
		switch (e.tag) {
			case 5:
				var n = e.type;
				return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t === null ? !1 : (e.stateNode = t, xa = e, Sa = Ai(t.firstChild), !0);
			case 6: return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t === null ? !1 : (e.stateNode = t, xa = e, Sa = null, !0);
			case 13: return t = t.nodeType === 8 ? t : null, t === null ? !1 : (n = ma === null ? null : {
				id: ha,
				overflow: ga
			}, e.memoizedState = {
				dehydrated: t,
				treeContext: n,
				retryLane: 1073741824
			}, n = ql(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, xa = e, Sa = null, !0);
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
					t = Ai(n.nextSibling);
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
		if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Ci(e.type, e.memoizedProps)), t &&= Sa) {
			if (Ea(e)) throw Aa(), Error(r(418));
			for (; t;) wa(e, t), t = Ai(t.nextSibling);
		}
		if (Oa(e), e.tag === 13) {
			if (e = e.memoizedState, e = e === null ? null : e.dehydrated, !e) throw Error(r(317));
			a: {
				for (e = e.nextSibling, t = 0; e;) {
					if (e.nodeType === 8) {
						var n = e.data;
						if (n === "/$") {
							if (t === 0) {
								Sa = Ai(e.nextSibling);
								break a;
							}
							t--;
						} else n !== "$" && n !== "$!" && n !== "$?" || t++;
					}
					e = e.nextSibling;
				}
				Sa = null;
			}
		} else Sa = xa ? Ai(e.stateNode.nextSibling) : null;
		return !0;
	}
	function Aa() {
		for (var e = Sa; e;) e = Ai(e.nextSibling);
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
			return i === E ? d(e, t, n.props.children, r, n.key) : t !== null && (t.elementType === i || typeof i == "object" && i && i.$$typeof === N && Ia(i) === t.type) ? (r = a(t, n.props), r.ref = Pa(e, t, n), r.return = e, r) : (r = Zl(n.type, n.key, n.props, null, e.mode, r), r.ref = Pa(e, t, n), r.return = e, r);
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
					case w: return n = Zl(t.type, t.key, t.props, null, e.mode, n), n.ref = Pa(e, null, t), n.return = e, n;
					case T: return t = tu(t, e.mode, n), t.return = e, t;
					case N:
						var r = t._init;
						return f(e, r(t._payload), n);
				}
				if (Ce(t) || re(t)) return t = Ql(t, e.mode, n, null), t.return = e, t;
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
					case N: return i = n._init, p(e, t, i(n._payload), r);
				}
				if (Ce(n) || re(n)) return i === null ? d(e, t, n, r, null) : null;
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
					case N:
						var a = r._init;
						return m(e, t, n, a(r._payload), i);
				}
				if (Ce(r) || re(r)) return e = e.get(n) || null, d(t, e, r, i, null);
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
			var u = re(c);
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
									} else if (l.elementType === c || typeof c == "object" && c && c.$$typeof === N && Ia(c) === l.type) {
										n(e, l.sibling), r = a(l, i.props), r.ref = Pa(e, l, i), r.return = e, e = r;
										break a;
									}
									n(e, l);
									break;
								} else t(e, l);
								l = l.sibling;
							}
							i.type === E ? (r = Ql(i.props.children, e.mode, o, i.key), r.return = e, e = r) : (o = Zl(i.type, i.key, i.props, null, e.mode, o), o.ref = Pa(e, r, i), o.return = e, e = o);
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
				if (re(i)) return g(e, r, i, o);
				Fa(e, i);
			}
			return typeof i == "string" && i !== "" || typeof i == "number" ? (i = "" + i, r !== null && r.tag === 6 ? (n(e, r.sibling), r = a(r, i), r.return = e, e = r) : (n(e, r), r = eu(i, e.mode, o), r.return = e, e = r), s(e)) : n(e, r);
		}
		return _;
	}
	var Ra = La(!0), za = La(!1), Ba = Gi(null), Va = null, Ha = null, Ua = null;
	function Wa() {
		Ua = Ha = Va = null;
	}
	function Ga(e) {
		var t = Ba.current;
		U(Ba), e._currentValue = t;
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
			r &= e.pendingLanes, n |= r, t.lanes = n, Ht(e, n);
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
								d = F({}, d, f);
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
			Xc |= o, e.lanes = o, e.memoizedState = d;
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
	var co = {}, lo = Gi(co), uo = Gi(co), fo = Gi(co);
	function po(e) {
		if (e === co) throw Error(r(174));
		return e;
	}
	function mo(e, t) {
		switch (W(fo, t), W(uo, e), W(lo, co), e = t.nodeType, e) {
			case 9:
			case 11:
				t = (t = t.documentElement) ? t.namespaceURI : Ae(null, "");
				break;
			default: e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Ae(t, e);
		}
		U(lo), W(lo, t);
	}
	function ho() {
		U(lo), U(uo), U(fo);
	}
	function go(e) {
		po(fo.current);
		var t = po(lo.current), n = Ae(t, e.type);
		t !== n && (W(uo, e), W(lo, n));
	}
	function _o(e) {
		uo.current === e && (U(lo), U(uo));
	}
	var q = Gi(0);
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
	function J() {
		for (var e = 0; e < yo.length; e++) yo[e]._workInProgressVersionPrimary = null;
		yo.length = 0;
	}
	var bo = C.ReactCurrentDispatcher, xo = C.ReactCurrentBatchConfig, So = 0, Y = null, Co = null, wo = null, To = !1, Eo = !1, Do = 0, Oo = 0;
	function ko() {
		throw Error(r(321));
	}
	function Ao(e, t) {
		if (t === null) return !1;
		for (var n = 0; n < t.length && n < e.length; n++) if (!kr(e[n], t[n])) return !1;
		return !0;
	}
	function jo(e, t, n, i, a, o) {
		if (So = o, Y = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, bo.current = e === null || e.memoizedState === null ? ms : hs, e = n(i, a), Eo) {
			o = 0;
			do {
				if (Eo = !1, Do = 0, 25 <= o) throw Error(r(301));
				o += 1, wo = Co = null, t.updateQueue = null, bo.current = gs, e = n(i, a);
			} while (Eo);
		}
		if (bo.current = ps, t = Co !== null && Co.next !== null, So = 0, wo = Co = Y = null, To = !1, t) throw Error(r(300));
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
		return wo === null ? Y.memoizedState = wo = e : wo = wo.next = e, wo;
	}
	function Po() {
		if (Co === null) {
			var e = Y.alternate;
			e = e === null ? null : e.memoizedState;
		} else e = Co.next;
		var t = wo === null ? Y.memoizedState : wo.next;
		if (t !== null) wo = t, Co = e;
		else {
			if (e === null) throw Error(r(310));
			Co = e, e = {
				memoizedState: Co.memoizedState,
				baseState: Co.baseState,
				baseQueue: Co.baseQueue,
				queue: Co.queue,
				next: null
			}, wo === null ? Y.memoizedState = wo = e : wo = wo.next = e;
		}
		return wo;
	}
	function Fo(e, t) {
		return typeof t == "function" ? t(e) : t;
	}
	function Io(e) {
		var t = Po(), n = t.queue;
		if (n === null) throw Error(r(311));
		n.lastRenderedReducer = e;
		var i = Co, a = i.baseQueue, o = n.pending;
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
				if ((So & d) === d) l !== null && (l = l.next = {
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
					l === null ? (c = l = f, s = i) : l = l.next = f, Y.lanes |= d, Xc |= d;
				}
				u = u.next;
			} while (u !== null && u !== o);
			l === null ? s = i : l.next = c, kr(i, t.memoizedState) || (Ps = !0), t.memoizedState = i, t.baseState = s, t.baseQueue = l, n.lastRenderedState = i;
		}
		if (e = n.interleaved, e !== null) {
			a = e;
			do
				o = a.lane, Y.lanes |= o, Xc |= o, a = a.next;
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
			kr(o, t.memoizedState) || (Ps = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
		}
		return [o, i];
	}
	function Ro() {}
	function zo(e, t) {
		var n = Y, i = Po(), a = t(), o = !kr(i.memoizedState, a);
		if (o && (i.memoizedState = a, Ps = !0), i = i.queue, Zo(Ho.bind(null, n, i, e), [e]), i.getSnapshot !== t || o || wo !== null && wo.memoizedState.tag & 1) {
			if (n.flags |= 2048, Ko(9, Vo.bind(null, n, i, a, t), void 0, null), Uc === null) throw Error(r(349));
			So & 30 || Bo(n, t, a);
		}
		return a;
	}
	function Bo(e, t, n) {
		e.flags |= 16384, e = {
			getSnapshot: t,
			value: n
		}, t = Y.updateQueue, t === null ? (t = {
			lastEffect: null,
			stores: null
		}, Y.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
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
			return !kr(e, n);
		} catch {
			return !0;
		}
	}
	function Wo(e) {
		var t = Qa(e, 1);
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
		}, t.queue = e, e = e.dispatch = ls.bind(null, Y, e), [t.memoizedState, e];
	}
	function Ko(e, t, n, r) {
		return e = {
			tag: e,
			create: t,
			destroy: n,
			deps: r,
			next: null
		}, t = Y.updateQueue, t === null ? (t = {
			lastEffect: null,
			stores: null
		}, Y.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
	}
	function qo() {
		return Po().memoizedState;
	}
	function Jo(e, t, n, r) {
		var i = No();
		Y.flags |= e, i.memoizedState = Ko(1 | t, n, void 0, r === void 0 ? null : r);
	}
	function Yo(e, t, n, r) {
		var i = Po();
		r = r === void 0 ? null : r;
		var a = void 0;
		if (Co !== null) {
			var o = Co.memoizedState;
			if (a = o.destroy, r !== null && Ao(r, o.deps)) {
				i.memoizedState = Ko(t, n, a, r);
				return;
			}
		}
		Y.flags |= e, i.memoizedState = Ko(1 | t, n, a, r);
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
		return So & 21 ? (kr(n, t) || (n = Rt(), Y.lanes |= n, Xc |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Ps = !0), e.memoizedState = n);
	}
	function os(e, t) {
		var n = z;
		z = n !== 0 && 4 > n ? n : 4, e(!0);
		var r = xo.transition;
		xo.transition = {};
		try {
			e(!1), t();
		} finally {
			z = n, xo.transition = r;
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
		else if (n = Za(e, t, n, r), n !== null) {
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
				if (i.hasEagerState = !0, i.eagerState = s, kr(s, o)) {
					var c = t.interleaved;
					c === null ? (i.next = i, Xa(t)) : (i.next = c.next, c.next = i), t.interleaved = i;
					return;
				}
			} catch {}
			n = Za(e, t, i, r), n !== null && (i = ml(), gl(n, e, r, i), fs(n, t, r));
		}
	}
	function us(e) {
		var t = e.alternate;
		return e === Y || t !== null && t === Y;
	}
	function ds(e, t) {
		Eo = To = !0;
		var n = e.pending;
		n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
	}
	function fs(e, t, n) {
		if (n & 4194240) {
			var r = t.lanes;
			r &= e.pendingLanes, n |= r, t.lanes = n, Ht(e, n);
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
			}, r.queue = e, e = e.dispatch = cs.bind(null, Y, e), [r.memoizedState, e];
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
			var i = Y, a = No();
			if (K) {
				if (n === void 0) throw Error(r(407));
				n = n();
			} else {
				if (n = t(), Uc === null) throw Error(r(349));
				So & 30 || Bo(i, t, n);
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
				n = (r & ~(1 << 32 - Dt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Do++, 0 < n && (t += "H" + n.toString(32)), t += ":";
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
			return as(Po(), Co.memoizedState, e);
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
			return Co === null ? t.memoizedState = e : as(t, Co.memoizedState, e);
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
			return (e = e._reactInternals) ? L(e) === e : !1;
		},
		enqueueSetState: function(e, t, n) {
			e = e._reactInternals;
			var r = ml(), i = hl(e), a = no(r, i);
			a.payload = t, n != null && (a.callback = n), t = ro(e, a, i), t !== null && (gl(t, e, i, r), io(t, e, i));
		},
		enqueueReplaceState: function(e, t, n) {
			e = e._reactInternals;
			var r = ml(), i = hl(e), a = no(r, i);
			a.tag = 1, a.payload = t, n != null && (a.callback = n), t = ro(e, a, i), t !== null && (gl(t, e, i, r), io(t, e, i));
		},
		enqueueForceUpdate: function(e, t) {
			e = e._reactInternals;
			var n = ml(), r = hl(e), i = no(n, r);
			i.tag = 2, t != null && (i.callback = t), t = ro(e, i, r), t !== null && (gl(t, e, r, n), io(t, e, r));
		}
	};
	function bs(e, t, n, r, i, a, o) {
		return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, a, o) : t.prototype && t.prototype.isPureReactComponent ? !Ar(n, r) || !Ar(i, a) : !0;
	}
	function xs(e, t, n) {
		var r = !1, i = Ki, a = t.contextType;
		return typeof a == "object" && a ? a = Ja(a) : (i = Xi(t) ? Ji : G.current, r = t.contextTypes, a = (r = r != null) ? Yi(e, i) : Ki), t = new t(n, a), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = ys, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = a), t;
	}
	function Ss(e, t, n, r) {
		e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && ys.enqueueReplaceState(t, t.state, null);
	}
	function Cs(e, t, n, r) {
		var i = e.stateNode;
		i.props = n, i.state = e.memoizedState, i.refs = {}, eo(e);
		var a = t.contextType;
		typeof a == "object" && a ? i.context = Ja(a) : (a = Xi(t) ? Ji : G.current, i.context = Yi(e, a)), i.state = e.memoizedState, a = t.getDerivedStateFromProps, typeof a == "function" && (vs(e, t, a, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && ys.enqueueReplaceState(i, i.state, null), oo(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308);
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
		n = no(-1, n), n.tag = 3, n.payload = { element: null };
		var r = t.value;
		return n.callback = function() {
			il || (il = !0, al = r), Es(e, t);
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
			return typeof a == "function" && !Jl(a) && a.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = a, Rs(e, t, a, r, i)) : (e = Zl(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
		}
		if (a = e.child, (e.lanes & i) === 0) {
			var o = a.memoizedProps;
			if (n = n.compare, n = n === null ? Ar : n, n(o, r) && e.ref === t.ref) return nc(e, t, i);
		}
		return t.flags |= 1, e = Xl(a, r), e.ref = t.ref, e.return = t, t.child = e;
	}
	function Rs(e, t, n, r, i) {
		if (e !== null) {
			var a = e.memoizedProps;
			if (Ar(a, r) && e.ref === t.ref) if (Ps = !1, t.pendingProps = r = a, (e.lanes & i) !== 0) e.flags & 131072 && (Ps = !0);
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
		var a = Xi(n) ? Ji : G.current;
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
			typeof l == "object" && l ? l = Ja(l) : (l = Xi(n) ? Ji : G.current, l = Yi(t, l));
			var u = n.getDerivedStateFromProps, d = typeof u == "function" || typeof o.getSnapshotBeforeUpdate == "function";
			d || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (s !== r || c !== l) && Ss(t, o, r, l), $a = !1;
			var f = t.memoizedState;
			o.state = f, oo(t, r, o, i), c = t.memoizedState, s !== r || f !== c || qi.current || $a ? (typeof u == "function" && (vs(t, n, u, r), c = t.memoizedState), (s = $a || bs(t, n, s, r, f, c, l)) ? (d || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = c), o.props = r, o.state = c, o.context = l, r = s) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
		} else {
			o = t.stateNode, to(e, t), s = t.memoizedProps, l = t.type === t.elementType ? s : _s(t.type, s), o.props = l, d = t.pendingProps, f = o.context, c = n.contextType, typeof c == "object" && c ? c = Ja(c) : (c = Xi(n) ? Ji : G.current, c = Yi(t, c));
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
		if ((s = o) || (s = e !== null && e.memoizedState === null ? !1 : (i & 2) != 0), s ? (a = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), W(q, i & 1), e === null) return Da(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (o = r.children, e = r.fallback, a ? (r = t.mode, a = t.child, o = {
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
		return r !== null && Ma(r), Ra(t, e.child, null, n), e = Ys(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
	}
	function Zs(e, t, n, i, a, o, s) {
		if (n) return t.flags & 256 ? (t.flags &= -257, i = Ts(Error(r(422))), Xs(e, t, s, i)) : t.memoizedState === null ? (o = i.fallback, a = t.mode, i = $l({
			mode: "visible",
			children: i.children
		}, a, 0, null), o = Ql(o, a, s, null), o.flags |= 2, i.return = t, o.return = t, i.sibling = o, t.child = i, t.mode & 1 && Ra(t, e.child, null, s), t.child.memoizedState = qs(s), t.memoizedState = Ks, o) : (t.child = e.child, t.flags |= 128, null);
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
				a = (a & (i.suspendedLanes | s)) === 0 ? a : 0, a !== 0 && a !== o.retryLane && (o.retryLane = a, Qa(e, a), gl(i, e, a, -1));
			}
			return Al(), i = Ts(Error(r(421))), Xs(e, t, s, i);
		}
		return a.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Hl.bind(null, e), a._reactRetry = t, null) : (e = o.treeContext, Sa = Ai(a.nextSibling), xa = t, K = !0, Ca = null, e !== null && (fa[pa++] = ha, fa[pa++] = ga, fa[pa++] = ma, ha = e.id, ga = e.overflow, ma = t), t = Ys(t, i.children), t.flags |= 4096, t);
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
		if (W(q, r), !(t.mode & 1)) t.memoizedState = null;
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
				W(Ba, r._currentValue), r._currentValue = i;
				break;
			case 13:
				if (r = t.memoizedState, r !== null) return r.dehydrated === null ? (n & t.child.childLanes) === 0 ? (W(q, q.current & 1), e = nc(e, t, n), e === null ? null : e.sibling) : Js(e, t, n) : (W(q, q.current & 1), t.flags |= 128, null);
				W(q, q.current & 1);
				break;
			case 19:
				if (r = (n & t.childLanes) !== 0, e.flags & 128) {
					if (r) return ec(e, t, n);
					t.flags |= 128;
				}
				if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), W(q, q.current), r) break;
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
					i = _e(e, i), r = _e(e, r), o = [];
					break;
				case "select":
					i = F({}, i, { value: void 0 }), r = F({}, r, { value: void 0 }), o = [];
					break;
				case "textarea":
					i = Te(e, i), r = Te(e, r), o = [];
					break;
				default: typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = bi);
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
				else u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, c = c ? c.__html : void 0, l != null && c !== l && (o ||= []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (o ||= []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (a.hasOwnProperty(u) ? (l != null && u === "onScroll" && H("scroll", e), o || c === l || (o = [])) : (o ||= []).push(u, l));
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
			case 3: return i = t.stateNode, ho(), U(qi), U(G), J(), i.pendingContext && (i.context = i.pendingContext, i.pendingContext = null), (e === null || e.child === null) && (ka(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Ca !== null && (bl(Ca), Ca = null))), cc(t), null;
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
								ve(i, s), H("invalid", i);
								break;
							case "select":
								i._wrapperState = { wasMultiple: !!s.multiple }, H("invalid", i);
								break;
							case "textarea": Ee(i, s), H("invalid", i);
						}
						for (var c in Re(n, s), o = null, s) if (s.hasOwnProperty(c)) {
							var l = s[c];
							c === "children" ? typeof l == "string" ? i.textContent !== l && (!0 !== s.suppressHydrationWarning && yi(i.textContent, l, e), o = ["children", l]) : typeof l == "number" && i.textContent !== "" + l && (!0 !== s.suppressHydrationWarning && yi(i.textContent, l, e), o = ["children", "" + l]) : a.hasOwnProperty(c) && l != null && c === "onScroll" && H("scroll", i);
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
							default: typeof s.onClick == "function" && (i.onclick = bi);
						}
						i = o, t.updateQueue = i, i !== null && (t.flags |= 4);
					} else {
						c = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = ke(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = c.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof i.is == "string" ? e = c.createElement(n, { is: i.is }) : (e = c.createElement(n), n === "select" && (c = e, i.multiple ? c.multiple = !0 : i.size && (c.size = i.size))) : e = c.createElementNS(e, n), e[Ni] = t, e[Pi] = i, ic(e, t, !1, !1), t.stateNode = e;
						a: {
							switch (c = ze(n, i), n) {
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
									ve(e, i), o = _e(e, i), H("invalid", e);
									break;
								case "option":
									o = i;
									break;
								case "select":
									e._wrapperState = { wasMultiple: !!i.multiple }, o = F({}, i, { value: void 0 }), H("invalid", e);
									break;
								case "textarea":
									Ee(e, i), o = Te(e, i), H("invalid", e);
									break;
								default: o = i;
							}
							for (s in Re(n, o), l = o, l) if (l.hasOwnProperty(s)) {
								var u = l[s];
								s === "style" ? Ie(e, u) : s === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, u != null && Me(e, u)) : s === "children" ? typeof u == "string" ? (n !== "textarea" || u !== "") && I(e, u) : typeof u == "number" && I(e, "" + u) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (a.hasOwnProperty(s) ? u != null && s === "onScroll" && H("scroll", e) : u != null && S(e, s, u, c));
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
				return cc(t), null;
			case 6:
				if (e && t.stateNode != null) oc(e, t, e.memoizedProps, i);
				else {
					if (typeof i != "string" && t.stateNode === null) throw Error(r(166));
					if (n = po(fo.current), po(lo.current), ka(t)) {
						if (i = t.stateNode, n = t.memoizedProps, i[Ni] = t, (s = i.nodeValue !== n) && (e = xa, e !== null)) switch (e.tag) {
							case 3:
								yi(i.nodeValue, n, (e.mode & 1) != 0);
								break;
							case 5: !0 !== e.memoizedProps.suppressHydrationWarning && yi(i.nodeValue, n, (e.mode & 1) != 0);
						}
						s && (t.flags |= 4);
					} else i = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(i), i[Ni] = t, t.stateNode = i;
				}
				return cc(t), null;
			case 13:
				if (U(q), i = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
					if (K && Sa !== null && t.mode & 1 && !(t.flags & 128)) Aa(), ja(), t.flags |= 98560, s = !1;
					else if (s = ka(t), i !== null && i.dehydrated !== null) {
						if (e === null) {
							if (!s) throw Error(r(318));
							if (s = t.memoizedState, s = s === null ? null : s.dehydrated, !s) throw Error(r(317));
							s[Ni] = t;
						} else ja(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
						cc(t), s = !1;
					} else Ca !== null && (bl(Ca), Ca = null), s = !0;
					if (!s) return t.flags & 65536 ? t : null;
				}
				return t.flags & 128 ? (t.lanes = n, t) : (i = i !== null, i !== (e !== null && e.memoizedState !== null) && i && (t.child.flags |= 8192, t.mode & 1 && (e === null || q.current & 1 ? Jc === 0 && (Jc = 3) : Al())), t.updateQueue !== null && (t.flags |= 4), cc(t), null);
			case 4: return ho(), e === null && li(t.stateNode.containerInfo), cc(t), null;
			case 10: return Ga(t.type._context), cc(t), null;
			case 17: return Xi(t.type) && Zi(), cc(t), null;
			case 19:
				if (U(q), s = t.memoizedState, s === null) return cc(t), null;
				if (i = (t.flags & 128) != 0, c = s.rendering, c === null) if (i) sc(s, !1);
				else {
					if (Jc !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null;) {
						if (c = vo(e), c !== null) {
							for (t.flags |= 128, sc(s, !1), i = c.updateQueue, i !== null && (t.updateQueue = i, t.flags |= 4), t.subtreeFlags = 0, i = n, n = t.child; n !== null;) s = n, e = i, s.flags &= 14680066, c = s.alternate, c === null ? (s.childLanes = 0, s.lanes = e, s.child = null, s.subtreeFlags = 0, s.memoizedProps = null, s.memoizedState = null, s.updateQueue = null, s.dependencies = null, s.stateNode = null) : (s.childLanes = c.childLanes, s.lanes = c.lanes, s.child = c.child, s.subtreeFlags = 0, s.deletions = null, s.memoizedProps = c.memoizedProps, s.memoizedState = c.memoizedState, s.updateQueue = c.updateQueue, s.type = c.type, e = c.dependencies, s.dependencies = e === null ? null : {
								lanes: e.lanes,
								firstContext: e.firstContext
							}), n = n.sibling;
							return W(q, q.current & 1 | 2), t.child;
						}
						e = e.sibling;
					}
					s.tail !== null && R() > nl && (t.flags |= 128, i = !0, sc(s, !1), t.lanes = 4194304);
				}
				else {
					if (!i) if (e = vo(c), e !== null) {
						if (t.flags |= 128, i = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), sc(s, !0), s.tail === null && s.tailMode === "hidden" && !c.alternate && !K) return cc(t), null;
					} else 2 * R() - s.renderingStartTime > nl && n !== 1073741824 && (t.flags |= 128, i = !0, sc(s, !1), t.lanes = 4194304);
					s.isBackwards ? (c.sibling = t.child, t.child = c) : (n = s.last, n === null ? t.child = c : n.sibling = c, s.last = c);
				}
				return s.tail === null ? (cc(t), null) : (t = s.tail, s.rendering = t, s.tail = t.sibling, s.renderingStartTime = R(), t.sibling = null, n = q.current, W(q, i ? n & 1 | 2 : n & 1), t);
			case 22:
			case 23: return El(), i = t.memoizedState !== null, e !== null && e.memoizedState !== null !== i && (t.flags |= 8192), i && t.mode & 1 ? Kc & 1073741824 && (cc(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : cc(t), null;
			case 24: return null;
			case 25: return null;
		}
		throw Error(r(156, t.tag));
	}
	function uc(e, t) {
		switch (ba(t), t.tag) {
			case 1: return Xi(t.type) && Zi(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 3: return ho(), U(qi), U(G), J(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
			case 5: return _o(t), null;
			case 13:
				if (U(q), e = t.memoizedState, e !== null && e.dehydrated !== null) {
					if (t.alternate === null) throw Error(r(340));
					ja();
				}
				return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 19: return U(q), null;
			case 4: return ho(), null;
			case 10: return Ga(t.type._context), null;
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
		}, mn = !1, X = t; X !== null;) if (t = X, e = t.child, t.subtreeFlags & 1028 && e !== null) e.return = t, X = e;
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
		if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = bi));
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
		if (Tt && typeof Tt.onCommitFiberUnmount == "function") try {
			Tt.onCommitFiberUnmount(wt, n);
		} catch {}
		switch (n.tag) {
			case 5: fc || mc(n, t);
			case 6:
				var r = Ec, i = Dc;
				Ec = null, Oc(e, t, n), Ec = r, Dc = i, Ec !== null && (Dc ? (e = Ec, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Ec.removeChild(n.stateNode));
				break;
			case 18:
				Ec !== null && (Dc ? (e = Ec, n = n.stateNode, e.nodeType === 8 ? ki(e.parentNode, n) : e.nodeType === 1 && ki(e, n), fn(e)) : ki(Ec, n.stateNode));
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
						I(a, "");
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
					fn(t.containerInfo);
				} catch (t) {
					Q(e, e.return, t);
				}
				break;
			case 4:
				jc(t, e), Nc(e);
				break;
			case 13:
				jc(t, e), Nc(e), a = e.child, a.flags & 8192 && (o = a.memoizedState !== null, a.stateNode.isHidden = o, !o || a.alternate !== null && a.alternate.memoizedState !== null || (tl = R())), i & 4 && Ac(e);
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
									a = f.stateNode, u ? (o = a.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (c = f.stateNode, l = f.memoizedProps.style, s = l != null && l.hasOwnProperty("display") ? l.display : null, c.style.display = Fe("display", s));
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
						i.flags & 32 && (I(a, ""), i.flags &= -33), Tc(e, Cc(e), a);
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
		return Z & 6 ? R() : fl === -1 ? fl = R() : fl;
	}
	function hl(e) {
		return e.mode & 1 ? Z & 2 && Gc !== 0 ? Gc & -Gc : Na.transition === null ? (e = z, e === 0 ? (e = window.event, e = e === void 0 ? 16 : bn(e.type), e) : e) : (pl === 0 && (pl = Rt()), pl) : 1;
	}
	function gl(e, t, n, i) {
		if (50 < ul) throw ul = 0, dl = null, Error(r(185));
		Bt(e, n, i), (!(Z & 2) || e !== Uc) && (e === Uc && (!(Z & 2) && (Zc |= n), Jc === 4 && Sl(e, Gc)), _l(e, i), n === 1 && Z === 0 && !(t.mode & 1) && (nl = R() + 500, ra && sa()));
	}
	function _l(e, t) {
		var n = e.callbackNode;
		It(e, t);
		var r = Pt(e, e === Uc ? Gc : 0);
		if (r === 0) n !== null && ht(n), e.callbackNode = null, e.callbackPriority = 0;
		else if (t = r & -r, e.callbackPriority !== t) {
			if (n != null && ht(n), t === 1) e.tag === 0 ? oa(Cl.bind(null, e)) : aa(Cl.bind(null, e)), Di(function() {
				!(Z & 6) && sa();
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
		if (fl = -1, pl = 0, Z & 6) throw Error(r(327));
		var n = e.callbackNode;
		if (Rl() && e.callbackNode !== n) return null;
		var i = Pt(e, e === Uc ? Gc : 0);
		if (i === 0) return null;
		if (i & 30 || (i & e.expiredLanes) !== 0 || t) t = jl(e, i);
		else {
			t = i;
			var a = Z;
			Z |= 2;
			var o = kl();
			(Uc !== e || Gc !== t) && (rl = null, nl = R() + 500, Dl(e, t));
			do
				try {
					Nl();
					break;
				} catch (t) {
					Ol(e, t);
				}
			while (1);
			Wa(), Bc.current = o, Z = a, Wc === null ? (Uc = null, Gc = 0, t = Jc) : t = 0;
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
						if (i = a, i = R() - i, i = (120 > i ? 120 : 480 > i ? 480 : 1080 > i ? 1080 : 1920 > i ? 1920 : 3e3 > i ? 3e3 : 4320 > i ? 4320 : 1960 * zc(i / 1960)) - i, 10 < i) {
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
		if (Z & 6) throw Error(r(327));
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
		var n = Z;
		Z |= 1;
		try {
			return e(t);
		} finally {
			Z = n, Z === 0 && (nl = R() + 500, ra && sa());
		}
	}
	function Tl(e) {
		cl !== null && cl.tag === 0 && !(Z & 6) && Rl();
		var t = Z;
		Z |= 1;
		var n = Hc.transition, r = z;
		try {
			if (Hc.transition = null, z = 1, e) return e();
		} finally {
			z = r, Hc.transition = n, Z = t, !(Z & 6) && sa();
		}
	}
	function El() {
		Kc = qc.current, U(qc);
	}
	function Dl(e, t) {
		e.finishedWork = null, e.finishedLanes = 0;
		var n = e.timeoutHandle;
		if (n !== -1 && (e.timeoutHandle = -1, Ti(n)), Wc !== null) for (n = Wc.return; n !== null;) {
			var r = n;
			switch (ba(r), r.tag) {
				case 1:
					r = r.type.childContextTypes, r != null && Zi();
					break;
				case 3:
					ho(), U(qi), U(G), J();
					break;
				case 5:
					_o(r);
					break;
				case 4:
					ho();
					break;
				case 13:
					U(q);
					break;
				case 19:
					U(q);
					break;
				case 10:
					Ga(r.type._context);
					break;
				case 22:
				case 23: El();
			}
			n = n.return;
		}
		if (Uc = e, Wc = e = Xl(e.current, null), Gc = Kc = t, Jc = 0, Yc = null, Qc = Zc = Xc = 0, el = $c = null, Ya !== null) {
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
	function Ol(e, t) {
		do {
			var n = Wc;
			try {
				if (Wa(), bo.current = ps, To) {
					for (var i = Y.memoizedState; i !== null;) {
						var a = i.queue;
						a !== null && (a.pending = null), i = i.next;
					}
					To = !1;
				}
				if (So = 0, wo = Co = Y = null, Eo = !1, Do = 0, Vc.current = null, n === null || n.return === null) {
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
					} else if (K && c.mode & 1) {
						var _ = js(s);
						if (_ !== null) {
							!(_.flags & 65536) && (_.flags |= 256), Ms(_, s, c, o, t), Ma(ws(l, c));
							break a;
						}
					}
					o = l = ws(l, c), Jc !== 4 && (Jc = 2), $c === null ? $c = [o] : $c.push(o), o = s;
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
								if (!(o.flags & 128) && (typeof y.getDerivedStateFromError == "function" || b !== null && typeof b.componentDidCatch == "function" && (ol === null || !ol.has(b)))) {
									o.flags |= 65536, t &= -t, o.lanes |= t;
									var x = ks(o, c, t);
									ao(o, x);
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
		if (Wa(), Z = n, Bc.current = i, Wc !== null) throw Error(r(261));
		return Uc = null, Gc = 0, Jc;
	}
	function Ml() {
		for (; Wc !== null;) Pl(Wc);
	}
	function Nl() {
		for (; Wc !== null && !gt();) Pl(Wc);
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
		var r = z, i = Hc.transition;
		try {
			Hc.transition = null, z = 1, Ll(e, t, n, r);
		} finally {
			Hc.transition = i, z = r;
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
		if (Vt(e, o), e === Uc && (Wc = Uc = null, Gc = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || sl || (sl = !0, Gl(xt, function() {
			return Rl(), null;
		})), o = (n.flags & 15990) != 0, n.subtreeFlags & 15990 || o) {
			o = Hc.transition, Hc.transition = null;
			var s = z;
			z = 1;
			var c = Z;
			Z |= 4, Vc.current = null, _c(e, n), Mc(n, e), Ir(Si), mn = !!xi, Si = xi = null, e.current = n, Pc(n, e, a), _t(), Z = c, z = s, Hc.transition = o;
		} else e.current = n;
		if (sl && (sl = !1, cl = e, ll = a), o = e.pendingLanes, o === 0 && (ol = null), Et(n.stateNode, i), _l(e, R()), t !== null) for (i = e.onRecoverableError, n = 0; n < t.length; n++) a = t[n], i(a.value, {
			componentStack: a.stack,
			digest: a.digest
		});
		if (il) throw il = !1, e = al, al = null, e;
		return ll & 1 && e.tag !== 0 && Rl(), o = e.pendingLanes, o & 1 ? e === dl ? ul++ : (ul = 0, dl = e) : ul = 0, sa(), null;
	}
	function Rl() {
		if (cl !== null) {
			var e = Ut(ll), t = Hc.transition, n = z;
			try {
				if (Hc.transition = null, z = 16 > e ? 16 : e, cl === null) var i = !1;
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
					if (Z = a, sa(), Tt && typeof Tt.onPostCommitFiberRoot == "function") try {
						Tt.onPostCommitFiberRoot(wt, e);
					} catch {}
					i = !0;
				}
				return i;
			} finally {
				z = n, Hc.transition = t;
			}
		}
		return !1;
	}
	function zl(e, t, n) {
		t = ws(n, t), t = Os(e, t, 1), e = ro(e, t, 1), t = ml(), e !== null && (Bt(e, 1, t), _l(e, t));
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
					e = ws(n, e), e = ks(t, e, 1), t = ro(t, e, 1), e = ml(), t !== null && (Bt(t, 1, e), _l(t, e));
					break;
				}
			}
			t = t.return;
		}
	}
	function Bl(e, t, n) {
		var r = e.pingCache;
		r !== null && r.delete(t), t = ml(), e.pingedLanes |= e.suspendedLanes & n, Uc === e && (Gc & n) === n && (Jc === 4 || Jc === 3 && (Gc & 130023424) === Gc && 500 > R() - tl ? Dl(e, 0) : Qc |= n), _l(e, t);
	}
	function Vl(e, t) {
		t === 0 && (e.mode & 1 ? (t = Mt, Mt <<= 1, !(Mt & 130023424) && (Mt = 4194304)) : t = 1);
		var n = ml();
		e = Qa(e, t), e !== null && (Bt(e, t, n), _l(e, n));
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
				var a = Yi(t, G.current);
				qa(t, n), a = jo(null, t, i, e, a, n);
				var o = Mo();
				return t.flags |= 1, typeof a == "object" && a && typeof a.render == "function" && a.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Xi(i) ? (o = !0, ea(t)) : o = !1, t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null, eo(t), a.updater = ys, t.stateNode = a, a._reactInternals = t, Cs(t, i, e, n), t = Us(null, t, i, !0, o, n)) : (t.tag = 0, K && o && ya(t), Fs(null, t, a, n), t = t.child), t;
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
					} else for (Sa = Ai(t.stateNode.containerInfo.firstChild), xa = t, K = !0, Ca = null, n = za(t, null, i, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling;
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
			case 5: return go(t), e === null && Da(t), i = t.type, a = t.pendingProps, o = e === null ? null : e.memoizedProps, s = a.children, Ci(i, a) ? s = null : o !== null && Ci(i, o) && (t.flags |= 32), Bs(e, t), Fs(e, t, s, n), t.child;
			case 6: return e === null && Da(t), null;
			case 13: return Js(e, t, n);
			case 4: return mo(t, t.stateNode.containerInfo), i = t.pendingProps, e === null ? t.child = Ra(t, null, i, n) : Fs(e, t, i, n), t.child;
			case 11: return i = t.type, a = t.pendingProps, a = t.elementType === i ? a : _s(i, a), Is(e, t, i, a, n);
			case 7: return Fs(e, t, t.pendingProps, n), t.child;
			case 8: return Fs(e, t, t.pendingProps.children, n), t.child;
			case 12: return Fs(e, t, t.pendingProps.children, n), t.child;
			case 10:
				a: {
					if (i = t.type._context, a = t.pendingProps, o = t.memoizedProps, s = a.value, W(Ba, i._currentValue), i._currentValue = s, o !== null) if (kr(o.value, s)) {
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
			if (e = e.$$typeof, e === k) return 11;
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
			case A: return e = ql(13, n, t, a), e.elementType = A, e.lanes = o, e;
			case j: return e = ql(19, n, t, a), e.elementType = j, e.lanes = o, e;
			case P: return $l(n, a, o, t);
			default:
				if (typeof e == "object" && e) switch (e.$$typeof) {
					case ee:
						s = 10;
						break a;
					case te:
						s = 9;
						break a;
					case k:
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
		return e = ql(22, e, r, t), e.elementType = P, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
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
		}, eo(a), e;
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
			if (L(e) !== e || e.tag !== 1) throw Error(r(170));
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
	function ou(e, t, n, r, i, a, o, s, c) {
		return e = ru(n, r, !0, e, i, a, o, s, c), e.context = au(null), n = e.current, r = ml(), i = hl(n), a = no(r, i), a.callback = t ?? null, ro(n, a, i), e.current.lanes = i, Bt(e, i, r), _l(e, r), e;
	}
	function su(e, t, n, r) {
		var i = t.current, a = ml(), o = hl(i);
		return n = au(n), t.context === null ? t.context = n : t.pendingContext = n, t = no(a, o), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = ro(i, t, o), e !== null && (gl(e, i, o, a), io(e, i, o)), o;
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
					n !== 0 && (Ht(t, n | 1), _l(t, R()), !(Z & 6) && (nl = R() + 500, sa()));
				}
				break;
			case 13: Tl(function() {
				var t = Qa(e, 1);
				t !== null && gl(t, e, 1, ml());
			}), uu(e, 1);
		}
	}, Gt = function(e) {
		if (e.tag === 13) {
			var t = Qa(e, 134217728);
			t !== null && gl(t, e, 134217728, ml()), uu(e, 134217728);
		}
	}, Kt = function(e) {
		if (e.tag === 13) {
			var t = hl(e), n = Qa(e, t);
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
	var n = t && t.cache ? t.cache : A, r = t && t.serializer ? t.serializer : te;
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
function ee(e, t) {
	return E(e, this, w, t.cache.create(), t.serializer);
}
var te = function() {
	return JSON.stringify(arguments);
};
function k() {
	this.cache = Object.create(null);
}
k.prototype.get = function(e) {
	return this.cache[e];
}, k.prototype.set = function(e, t) {
	this.cache[e] = t;
};
var A = { create: function() {
	return new k();
} }, j = {
	variadic: O,
	monadic: ee
};
//#endregion
//#region node_modules/.pnpm/@formatjs+ecma402-abstract@2.2.4/node_modules/@formatjs/ecma402-abstract/lib/utils.js
function M(e, t, n) {
	if (n === void 0 && (n = Error), !e) throw new n(t);
}
S(function() {
	for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
	return new ((e = Intl.NumberFormat).bind.apply(e, x([void 0], t, !1)))();
}, { strategy: j.variadic }), S(function() {
	for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
	return new ((e = Intl.DateTimeFormat).bind.apply(e, x([void 0], t, !1)))();
}, { strategy: j.variadic }), S(function() {
	for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
	return new ((e = Intl.PluralRules).bind.apply(e, x([void 0], t, !1)))();
}, { strategy: j.variadic }), S(function() {
	for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
	return new ((e = Intl.Locale).bind.apply(e, x([void 0], t, !1)))();
}, { strategy: j.variadic }), S(function() {
	for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
	return new ((e = Intl.ListFormat).bind.apply(e, x([void 0], t, !1)))();
}, { strategy: j.variadic });
//#endregion
//#region node_modules/.pnpm/@formatjs+icu-messageformat-parser@2.9.4/node_modules/@formatjs/icu-messageformat-parser/lib/error.js
var N;
(function(e) {
	e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})(N ||= {});
//#endregion
//#region node_modules/.pnpm/@formatjs+icu-messageformat-parser@2.9.4/node_modules/@formatjs/icu-messageformat-parser/lib/types.js
var P;
(function(e) {
	e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag";
})(P ||= {});
var ne;
(function(e) {
	e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime";
})(ne ||= {});
function re(e) {
	return e.type === P.literal;
}
function F(e) {
	return e.type === P.argument;
}
function ie(e) {
	return e.type === P.number;
}
function ae(e) {
	return e.type === P.date;
}
function oe(e) {
	return e.type === P.time;
}
function se(e) {
	return e.type === P.select;
}
function ce(e) {
	return e.type === P.plural;
}
function le(e) {
	return e.type === P.pound;
}
function ue(e) {
	return e.type === P.tag;
}
function de(e) {
	return !!(e && typeof e == "object" && e.type === ne.number);
}
function fe(e) {
	return !!(e && typeof e == "object" && e.type === ne.dateTime);
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
					type: P.pound,
					location: I(o, this.clonePosition())
				});
			} else if (i === 60 && !this.ignoreTag && this.peek() === 47) {
				if (n) break;
				return this.error(N.UNMATCHED_CLOSING_TAG, I(this.clonePosition(), this.clonePosition()));
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
				type: P.literal,
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
				if (this.isEOF() || !Ze(this.char())) return this.error(N.INVALID_TAG, I(o, this.clonePosition()));
				var s = this.clonePosition();
				return r === this.parseTagName() ? (this.bumpSpace(), this.bumpIf(">") ? {
					val: {
						type: P.tag,
						value: r,
						children: a,
						location: I(n, this.clonePosition())
					},
					err: null
				} : this.error(N.INVALID_TAG, I(o, this.clonePosition()))) : this.error(N.UNMATCHED_CLOSING_TAG, I(s, this.clonePosition()));
			} else return this.error(N.UNCLOSED_TAG, I(n, this.clonePosition()));
		} else return this.error(N.INVALID_TAG, I(n, this.clonePosition()));
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
				type: P.literal,
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
		if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(N.EXPECT_ARGUMENT_CLOSING_BRACE, I(n, this.clonePosition()));
		if (this.char() === 125) return this.bump(), this.error(N.EMPTY_ARGUMENT, I(n, this.clonePosition()));
		var r = this.parseIdentifierIfPossible().value;
		if (!r) return this.error(N.MALFORMED_ARGUMENT, I(n, this.clonePosition()));
		if (this.bumpSpace(), this.isEOF()) return this.error(N.EXPECT_ARGUMENT_CLOSING_BRACE, I(n, this.clonePosition()));
		switch (this.char()) {
			case 125: return this.bump(), {
				val: {
					type: P.argument,
					value: r,
					location: I(n, this.clonePosition())
				},
				err: null
			};
			case 44: return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(N.EXPECT_ARGUMENT_CLOSING_BRACE, I(n, this.clonePosition())) : this.parseArgumentOptions(e, t, r, n);
			default: return this.error(N.MALFORMED_ARGUMENT, I(n, this.clonePosition()));
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
			case "": return this.error(N.EXPECT_ARGUMENT_TYPE, I(i, o));
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
					if (u.length === 0) return this.error(N.EXPECT_ARGUMENT_STYLE, I(this.clonePosition(), this.clonePosition()));
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
								type: P.number,
								value: n,
								location: f,
								style: l.val
							},
							err: null
						};
					} else {
						if (p.length === 0) return this.error(N.EXPECT_DATE_TIME_SKELETON, f);
						var m = p;
						this.locale && (m = ke(p, this.locale));
						var u = {
							type: ne.dateTime,
							pattern: m,
							location: s.styleLocation,
							parsedOptions: this.shouldParseSkeletons ? he(m) : {}
						};
						return {
							val: {
								type: a === "date" ? P.date : P.time,
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
						type: a === "number" ? P.number : a === "date" ? P.date : P.time,
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
				if (this.bumpSpace(), !this.bumpIf(",")) return this.error(N.EXPECT_SELECT_ARGUMENT_OPTIONS, I(h, v({}, h)));
				this.bumpSpace();
				var g = this.parseIdentifierIfPossible(), _ = 0;
				if (a !== "select" && g.value === "offset") {
					if (!this.bumpIf(":")) return this.error(N.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, I(this.clonePosition(), this.clonePosition()));
					this.bumpSpace();
					var l = this.tryParseDecimalInteger(N.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, N.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
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
						type: P.select,
						value: n,
						options: Ue(y.val),
						location: b
					},
					err: null
				} : {
					val: {
						type: P.plural,
						value: n,
						options: Ue(y.val),
						offset: _,
						pluralType: a === "plural" ? "cardinal" : "ordinal",
						location: b
					},
					err: null
				};
			default: return this.error(N.INVALID_ARGUMENT_TYPE, I(i, o));
		}
	}, e.prototype.tryParseArgumentClose = function(e) {
		return this.isEOF() || this.char() !== 125 ? this.error(N.EXPECT_ARGUMENT_CLOSING_BRACE, I(e, this.clonePosition())) : (this.bump(), {
			val: !0,
			err: null
		});
	}, e.prototype.parseSimpleArgStyleIfPossible = function() {
		for (var e = 0, t = this.clonePosition(); !this.isEOF();) switch (this.char()) {
			case 39:
				this.bump();
				var n = this.clonePosition();
				if (!this.bumpUntil("'")) return this.error(N.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, I(n, this.clonePosition()));
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
			return this.error(N.INVALID_NUMBER_SKELETON, t);
		}
		return {
			val: {
				type: ne.number,
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
					var d = this.tryParseDecimalInteger(N.EXPECT_PLURAL_ARGUMENT_SELECTOR, N.INVALID_PLURAL_ARGUMENT_SELECTOR);
					if (d.err) return d;
					l = I(u, this.clonePosition()), c = this.message.slice(u.offset, this.offset());
				} else break;
			}
			if (s.has(c)) return this.error(t === "select" ? N.DUPLICATE_SELECT_ARGUMENT_SELECTOR : N.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, l);
			c === "other" && (a = !0), this.bumpSpace();
			var f = this.clonePosition();
			if (!this.bumpIf("{")) return this.error(t === "select" ? N.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : N.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, I(this.clonePosition(), this.clonePosition()));
			var p = this.parseMessage(e + 1, t, n);
			if (p.err) return p;
			var m = this.tryParseArgumentClose(f);
			if (m.err) return m;
			o.push([c, {
				value: p.val,
				location: I(f, this.clonePosition())
			}]), s.add(c), this.bumpSpace(), i = this.parseIdentifierIfPossible(), c = i.value, l = i.location;
		}
		return o.length === 0 ? this.error(t === "select" ? N.EXPECT_SELECT_ARGUMENT_SELECTOR : N.EXPECT_PLURAL_ARGUMENT_SELECTOR, I(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !a ? this.error(N.MISSING_OTHER_CLAUSE, I(this.clonePosition(), this.clonePosition())) : {
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
		var r = SyntaxError(N[n.err.kind]);
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
}(at), L;
(function(e) {
	e[e.literal = 0] = "literal", e[e.object = 1] = "object";
})(L ||= {});
function lt(e) {
	return e.length < 2 ? e : e.reduce(function(e, t) {
		var n = e[e.length - 1];
		return !n || n.type !== L.literal || t.type !== L.literal ? e.push(t) : n.value += t.value, e;
	}, []);
}
function ut(e) {
	return typeof e == "function";
}
function dt(e, t, n, r, i, a, o) {
	if (e.length === 1 && re(e[0])) return [{
		type: L.literal,
		value: e[0].value
	}];
	for (var s = [], c = 0, l = e; c < l.length; c++) {
		var u = l[c];
		if (re(u)) {
			s.push({
				type: L.literal,
				value: u.value
			});
			continue;
		}
		if (le(u)) {
			typeof a == "number" && s.push({
				type: L.literal,
				value: n.getNumberFormat(t).format(a)
			});
			continue;
		}
		var d = u.value;
		if (!(i && d in i)) throw new ct(d, o);
		var f = i[d];
		if (F(u)) {
			(!f || typeof f == "string" || typeof f == "number") && (f = typeof f == "string" || typeof f == "number" ? String(f) : ""), s.push({
				type: typeof f == "string" ? L.literal : L.object,
				value: f
			});
			continue;
		}
		if (ae(u)) {
			var p = typeof u.style == "string" ? r.date[u.style] : fe(u.style) ? u.style.parsedOptions : void 0;
			s.push({
				type: L.literal,
				value: n.getDateTimeFormat(t, p).format(f)
			});
			continue;
		}
		if (oe(u)) {
			var p = typeof u.style == "string" ? r.time[u.style] : fe(u.style) ? u.style.parsedOptions : r.time.medium;
			s.push({
				type: L.literal,
				value: n.getDateTimeFormat(t, p).format(f)
			});
			continue;
		}
		if (ie(u)) {
			var p = typeof u.style == "string" ? r.number[u.style] : de(u.style) ? u.style.parsedOptions : void 0;
			p && p.scale && (f *= p.scale || 1), s.push({
				type: L.literal,
				value: n.getNumberFormat(t, p).format(f)
			});
			continue;
		}
		if (ue(u)) {
			var m = u.children, h = u.value, g = i[h];
			if (!ut(g)) throw new st(h, "function", o);
			var _ = g(dt(m, t, n, r, i, a).map(function(e) {
				return e.value;
			}));
			Array.isArray(_) || (_ = [_]), s.push.apply(s, _.map(function(e) {
				return {
					type: typeof e == "string" ? L.literal : L.object,
					value: e
				};
			}));
		}
		if (se(u)) {
			var v = u.options[f] || u.options.other;
			if (!v) throw new ot(u.value, f, Object.keys(u.options), o);
			s.push.apply(s, dt(v.value, t, n, r, i));
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
			strategy: j.variadic
		}),
		getDateTimeFormat: S(function() {
			for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
			return new ((e = Intl.DateTimeFormat).bind.apply(e, x([void 0], t, !1)))();
		}, {
			cache: mt(e.dateTime),
			strategy: j.variadic
		}),
		getPluralRules: S(function() {
			for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
			return new ((e = Intl.PluralRules).bind.apply(e, x([void 0], t, !1)))();
		}, {
			cache: mt(e.pluralRules),
			strategy: j.variadic
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
				return !e.length || t.type !== L.literal || typeof e[e.length - 1] != "string" ? e.push(t.value) : e[e.length - 1] += t.value, e;
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
		strategy: j.variadic
	}), a = S(function() {
		for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
		return new ((e = Intl.NumberFormat).bind.apply(e, x([void 0], t, !1)))();
	}, {
		cache: Dt(e.number),
		strategy: j.variadic
	}), o = S(function() {
		for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
		return new ((e = Intl.PluralRules).bind.apply(e, x([void 0], t, !1)))();
	}, {
		cache: Dt(e.pluralRules),
		strategy: j.variadic
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
			strategy: j.variadic
		}),
		getRelativeTimeFormat: S(function() {
			var e = [...arguments];
			return new (t.bind.apply(t, x([void 0], e, !1)))();
		}, {
			cache: Dt(e.relativeTime),
			strategy: j.variadic
		}),
		getPluralRules: o,
		getListFormat: S(function() {
			var e = [...arguments];
			return new (n.bind.apply(n, x([void 0], e, !1)))();
		}, {
			cache: Dt(e.list),
			strategy: j.variadic
		}),
		getDisplayNames: S(function() {
			var e = [...arguments];
			return new (r.bind.apply(r, x([void 0], e, !1)))();
		}, {
			cache: Dt(e.displayNames),
			strategy: j.variadic
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
	M(!!m, "[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue");
	var g = String(m), _ = s && Object.prototype.hasOwnProperty.call(s, g) && s[g];
	if (Array.isArray(_) && _.length === 1 && _[0].type === P.literal) return _[0].value;
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
	Intl.DisplayNames || a(new at("Intl.DisplayNames is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-displaynames\"\n", it.MISSING_INTL_API));
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
	r === void 0 && (r = {}), Intl.ListFormat || a(new at("Intl.ListFormat is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-listformat\"\n", it.MISSING_INTL_API));
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
	r === void 0 && (r = {}), Intl.PluralRules || a(new at("Intl.PluralRules is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-pluralrules\"\n", it.MISSING_INTL_API));
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
	i === void 0 && (i = {}), r ||= "second", Intl.RelativeTimeFormat || e.onError(new at("Intl.RelativeTimeFormat is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-relativetimeformat\"\n", it.MISSING_INTL_API));
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
	M(e, "[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.");
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
}));
(/* @__PURE__ */ o(((e, t) => {
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
})))();
var fn = typeof window < "u" && !window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__ ? window.__REACT_INTL_CONTEXT__ || (window.__REACT_INTL_CONTEXT__ = B.createContext(null)) : B.createContext(null);
fn.Consumer;
var pn = fn.Provider, mn = fn;
//#endregion
//#region node_modules/.pnpm/react-intl@6.8.9_react@18.3.1_typescript@5.9.3/node_modules/react-intl/lib/src/components/useIntl.js
function hn() {
	var e = B.useContext(mn);
	return on(e), e;
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
		var s = n.textComponent || B.Fragment;
		return B.createElement(s, null, o);
	};
	return t.displayName = gn[e], t;
}
//#endregion
//#region node_modules/.pnpm/react-intl@6.8.9_react@18.3.1_typescript@5.9.3/node_modules/react-intl/lib/src/components/createIntl.js
function xn(e) {
	return e && Object.keys(e).reduce(function(t, n) {
		var r = e[n];
		return t[n] = ut(r) ? cn(r) : r, t;
	}, {});
}
var Sn = function(e, t, n, r) {
	var i = [...arguments].slice(4), a = xn(r), o = Nt.apply(void 0, x([
		e,
		t,
		n,
		a
	], i, !1));
	return Array.isArray(o) ? B.Children.toArray(o) : o;
}, Cn = function(e, t) {
	var n = e.defaultRichTextElements, r = y(e, ["defaultRichTextElements"]), i = xn(n), a = an(v(v(v({}, sn), r), { defaultRichTextElements: i }), t), o = {
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
		return t.cache = Et(), t.state = {
			cache: t.cache,
			intl: Cn(wn(t.props), t.cache),
			prevConfig: wn(t.props)
		}, t;
	}
	return t.getDerivedStateFromProps = function(e, t) {
		var n = t.prevConfig, r = t.cache, i = wn(e);
		return ln(n, i) ? null : {
			intl: Cn(i, r),
			prevConfig: i
		};
	}, t.prototype.render = function() {
		return on(this.state.intl), B.createElement(pn, { value: this.state.intl }, this.props.children);
	}, t.displayName = "IntlProvider", t.defaultProps = sn, t;
}(B.PureComponent);
//#endregion
//#region node_modules/.pnpm/react-intl@6.8.9_react@18.3.1_typescript@5.9.3/node_modules/react-intl/lib/index.js
function En(e) {
	return e;
}
bn("formatDate"), bn("formatTime"), bn("formatNumber"), bn("formatList"), bn("formatDisplayName"), yn("formatDate"), yn("formatTime");
//#endregion
//#region node_modules/.pnpm/react@18.3.1/node_modules/react/cjs/react-jsx-runtime.production.min.js
var Dn = /* @__PURE__ */ o(((e) => {
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
})), On = /* @__PURE__ */ o(((e, t) => {
	t.exports = Dn();
})), kn = h(), An = On(), jn = (0, B.createContext)({
	runtime: {
		handlerUrl() {
			return "";
		},
		notify() {}
	},
	element: document.createElement("div")
}), Mn = (e, t) => {
	if (t != null && !(typeof t != "object" && typeof t != "function")) {
		for (let n of Object.getOwnPropertyNames(t)) if (n.startsWith("_jsrt")) {
			let r = n;
			e[r] = t[r];
		}
	}
}, Nn = (e) => {
	let t = e && "jquery" in e ? e[0] : e;
	if (!t || !(t instanceof Element)) throw console.error("Invalid DOM element provided to renderBlock:", e), Error("Invalid DOM Element. See previously logged details.");
	return Mn(t, e), t;
}, Pn = async (e) => {
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
}, Fn = !0, In = ({ runtime: e, element: t, config: n, styles: r }) => async (i) => {
	let { core: a, theme: o } = await Pn(n.mfe_config_api), s = Nn(t), c = null, l = s;
	if (Fn && (c = s.attachShadow({ mode: "open" }), l = document.createElement("div"), l.classList.add("xblock-root"), c.appendChild(l)), r) {
		let e = document.createElement("style");
		e.textContent = r, c ? c.appendChild(e) : document.head.appendChild(e);
	}
	a.forEach((e) => {
		let t = document.createElement("link");
		t.rel = "stylesheet", t.href = e, c?.appendChild(t), document.head.querySelector(`link[href="${e}"]`) || document.head.appendChild(t.cloneNode());
	}), o.forEach((e) => {
		let t = document.createElement("link");
		t.rel = "stylesheet", t.href = e, c?.appendChild(t), document.head.querySelector(`link[href="${e}"]`) || document.head.appendChild(t.cloneNode());
	}), (0, kn.createRoot)(l).render(/* @__PURE__ */ (0, An.jsx)(B.StrictMode, { children: /* @__PURE__ */ (0, An.jsx)(jn.Provider, {
		value: {
			runtime: e,
			element: s
		},
		children: /* @__PURE__ */ (0, An.jsx)(Tn, {
			locale: "en",
			children: i
		})
	}) }));
}, Ln = ({ saveUrl: e, data: t, runtime: n, errorMessage: r = "Failed to save configuration" }) => {
	n.notify("save", { state: "start" }), $.post(e, JSON.stringify(t)).done(() => {
		n.notify("save", { state: "end" });
	}).fail((e) => {
		let t = typeof r == "function" ? r(e) : r;
		n.notify("error", {
			title: "Save Error",
			message: t
		});
	});
}, Rn = (e) => /* @__PURE__ */ B.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ B.createElement("path", {
	d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2Zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59Z",
	fill: "currentColor"
})), zn = (e) => /* @__PURE__ */ B.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ B.createElement("path", {
	d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41Z",
	fill: "currentColor"
})), Bn = /* @__PURE__ */ o(((e, t) => {
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
function Vn(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
(/* @__PURE__ */ o(((e, t) => {
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
})))();
//#endregion
//#region node_modules/.pnpm/uncontrollable@7.2.1_react@18.3.1/node_modules/uncontrollable/lib/esm/hook.js
function Hn(e, t, n) {
	var r = (0, B.useRef)(e !== void 0), i = (0, B.useState)(t), a = i[0], o = i[1], s = e !== void 0, c = r.current;
	return r.current = s, !s && c && a !== t && o(t), [s ? e : a, (0, B.useCallback)(function(e) {
		var t = [...arguments].slice(1);
		n && n.apply(void 0, [e].concat(t)), o(e);
	}, [n])];
}
//#endregion
//#region node_modules/.pnpm/@babel+runtime@7.29.2/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function Un(e, t) {
	return Un = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
		return e.__proto__ = t, e;
	}, Un(e, t);
}
//#endregion
//#region node_modules/.pnpm/@babel+runtime@7.29.2/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
function Wn(e, t) {
	e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Un(e, t);
}
//#endregion
//#region node_modules/.pnpm/react-lifecycles-compat@3.0.4/node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js
function Gn() {
	var e = this.constructor.getDerivedStateFromProps(this.props, this.state);
	e != null && this.setState(e);
}
function Kn(e) {
	function t(t) {
		return this.constructor.getDerivedStateFromProps(e, t) ?? null;
	}
	this.setState(t.bind(this));
}
function qn(e, t) {
	try {
		var n = this.props, r = this.state;
		this.props = e, this.state = t, this.__reactInternalSnapshotFlag = !0, this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(n, r);
	} finally {
		this.props = n, this.state = r;
	}
}
Gn.__suppressDeprecationWarning = !0, Kn.__suppressDeprecationWarning = !0, qn.__suppressDeprecationWarning = !0;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/ThemeProvider.js
var Jn = /* @__PURE__ */ B.createContext({});
Jn.Consumer, Jn.Provider;
function Yn(e, t) {
	var n = (0, B.useContext)(Jn);
	return e || n[t] || t;
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/ownerDocument.js
function Xn(e) {
	return e && e.ownerDocument || document;
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/ownerWindow.js
function Zn(e) {
	var t = Xn(e);
	return t && t.defaultView || window;
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/getComputedStyle.js
function Qn(e, t) {
	return Zn(e).getComputedStyle(e, t);
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/hyphenate.js
var $n = /([A-Z])/g;
function er(e) {
	return e.replace($n, "-$1").toLowerCase();
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/hyphenateStyle.js
var tr = /^ms-/;
function nr(e) {
	return er(e).replace(tr, "-ms-");
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/isTransform.js
var rr = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
function ir(e) {
	return !!(e && rr.test(e));
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/css.js
function ar(e, t) {
	var n = "", r = "";
	if (typeof t == "string") return e.style.getPropertyValue(nr(t)) || Qn(e).getPropertyValue(nr(t));
	Object.keys(t).forEach(function(i) {
		var a = t[i];
		!a && a !== 0 ? e.style.removeProperty(nr(i)) : ir(i) ? r += i + "(" + a + ") " : n += nr(i) + ": " + a + ";";
	}), r && (n += "transform: " + r + ";"), e.style.cssText += ";" + n;
}
//#endregion
//#region node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/lib/ReactPropTypesSecret.js
var or = /* @__PURE__ */ o(((e, t) => {
	t.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
})), sr = /* @__PURE__ */ o(((e, t) => {
	var n = or();
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
})), cr = /* @__PURE__ */ o(((e, t) => {
	t.exports = sr()();
})), lr = { disabled: !1 }, ur = B.createContext(null), dr = function(e) {
	return e.scrollTop;
}, fr = /* @__PURE__ */ c(m()), pr = "unmounted", mr = "exited", hr = "entering", gr = "entered", _r = "exiting", vr = /* @__PURE__ */ function(e) {
	Wn(t, e);
	function t(t, n) {
		var r = e.call(this, t, n) || this, i = n, a = i && !i.isMounting ? t.enter : t.appear, o;
		return r.appearStatus = null, t.in ? a ? (o = mr, r.appearStatus = hr) : o = gr : o = t.unmountOnExit || t.mountOnEnter ? pr : mr, r.state = { status: o }, r.nextCallback = null, r;
	}
	t.getDerivedStateFromProps = function(e, t) {
		return e.in && t.status === "unmounted" ? { status: mr } : null;
	};
	var n = t.prototype;
	return n.componentDidMount = function() {
		this.updateStatus(!0, this.appearStatus);
	}, n.componentDidUpdate = function(e) {
		var t = null;
		if (e !== this.props) {
			var n = this.state.status;
			this.props.in ? n !== "entering" && n !== "entered" && (t = hr) : (n === "entering" || n === "entered") && (t = _r);
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
				var n = this.props.nodeRef ? this.props.nodeRef.current : fr.findDOMNode(this);
				n && dr(n);
			}
			this.performEnter(e);
		} else this.performExit();
		else this.props.unmountOnExit && this.state.status === "exited" && this.setState({ status: pr });
	}, n.performEnter = function(e) {
		var t = this, n = this.props.enter, r = this.context ? this.context.isMounting : e, i = this.props.nodeRef ? [r] : [fr.findDOMNode(this), r], a = i[0], o = i[1], s = this.getTimeouts(), c = r ? s.appear : s.enter;
		if (!e && !n || lr.disabled) {
			this.safeSetState({ status: gr }, function() {
				t.props.onEntered(a);
			});
			return;
		}
		this.props.onEnter(a, o), this.safeSetState({ status: hr }, function() {
			t.props.onEntering(a, o), t.onTransitionEnd(c, function() {
				t.safeSetState({ status: gr }, function() {
					t.props.onEntered(a, o);
				});
			});
		});
	}, n.performExit = function() {
		var e = this, t = this.props.exit, n = this.getTimeouts(), r = this.props.nodeRef ? void 0 : fr.findDOMNode(this);
		if (!t || lr.disabled) {
			this.safeSetState({ status: mr }, function() {
				e.props.onExited(r);
			});
			return;
		}
		this.props.onExit(r), this.safeSetState({ status: _r }, function() {
			e.props.onExiting(r), e.onTransitionEnd(n.exit, function() {
				e.safeSetState({ status: mr }, function() {
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
		var n = this.props.nodeRef ? this.props.nodeRef.current : fr.findDOMNode(this), r = e == null && !this.props.addEndListener;
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
		return /* @__PURE__ */ B.createElement(ur.Provider, { value: null }, typeof n == "function" ? n(e, r) : B.cloneElement(B.Children.only(n), r));
	}, t;
}(B.Component);
vr.contextType = ur, vr.propTypes = {};
function yr() {}
vr.defaultProps = {
	in: !1,
	mountOnEnter: !1,
	unmountOnExit: !1,
	appear: !1,
	enter: !0,
	exit: !0,
	onEnter: yr,
	onEntering: yr,
	onEntered: yr,
	onExit: yr,
	onExiting: yr,
	onExited: yr
}, vr.UNMOUNTED = pr, vr.EXITED = mr, vr.ENTERING = hr, vr.ENTERED = gr, vr.EXITING = _r;
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/canUseDOM.js
var br = !!(typeof window < "u" && window.document && window.document.createElement), xr = !1, Sr = !1;
try {
	var Cr = {
		get passive() {
			return xr = !0;
		},
		get once() {
			return Sr = xr = !0;
		}
	};
	br && (window.addEventListener("test", Cr, Cr), window.removeEventListener("test", Cr, !0));
} catch {}
function wr(e, t, n, r) {
	if (r && typeof r != "boolean" && !Sr) {
		var i = r.once, a = r.capture, o = n;
		!Sr && i && (o = n.__once || function e(r) {
			this.removeEventListener(t, e, a), n.call(this, r);
		}, n.__once = o), e.addEventListener(t, o, xr ? r : a);
	}
	e.addEventListener(t, n, r);
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/removeEventListener.js
function Tr(e, t, n, r) {
	var i = r && typeof r != "boolean" ? r.capture : r;
	e.removeEventListener(t, n, i), n.__once && e.removeEventListener(t, n.__once, i);
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/listen.js
function Er(e, t, n, r) {
	return wr(e, t, n, r), function() {
		Tr(e, t, n, r);
	};
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/triggerEvent.js
function Dr(e, t, n, r) {
	if (n === void 0 && (n = !1), r === void 0 && (r = !0), e) {
		var i = document.createEvent("HTMLEvents");
		i.initEvent(t, n, r), e.dispatchEvent(i);
	}
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/transitionEnd.js
function Or(e) {
	var t = ar(e, "transitionDuration") || "", n = t.indexOf("ms") === -1 ? 1e3 : 1;
	return parseFloat(t) * n;
}
function kr(e, t, n) {
	n === void 0 && (n = 5);
	var r = !1, i = setTimeout(function() {
		r || Dr(e, "transitionend", !0);
	}, t + n), a = Er(e, "transitionend", function() {
		r = !0;
	}, { once: !0 });
	return function() {
		clearTimeout(i), a();
	};
}
function Ar(e, t, n, r) {
	n ??= Or(e) || 0;
	var i = kr(e, n, r), a = Er(e, "transitionend", t);
	return function() {
		i(), a();
	};
}
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/transitionEndListener.js
function jr(e, t) {
	var n = ar(e, t) || "", r = n.indexOf("ms") === -1 ? 1e3 : 1;
	return parseFloat(n) * r;
}
function Mr(e, t) {
	var n = Ar(e, function(r) {
		r.target === e && (n(), t(r));
	}, jr(e, "transitionDuration") + jr(e, "transitionDelay"));
}
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/createChainedFunction.js
function Nr() {
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
function Pr(e) {
	e.offsetHeight;
}
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useCommittedRef.js
function Fr(e) {
	let t = (0, B.useRef)(e);
	return (0, B.useEffect)(() => {
		t.current = e;
	}, [e]), t;
}
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useEventCallback.js
function Ir(e) {
	let t = Fr(e);
	return (0, B.useCallback)(function(...e) {
		return t.current && t.current(...e);
	}, [t]);
}
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Fade.js
var Lr = /* @__PURE__ */ c(Bn()), Rr = ["className", "children"], zr, Br = {
	in: !1,
	timeout: 300,
	mountOnEnter: !1,
	unmountOnExit: !1,
	appear: !1
}, Vr = (zr = {}, zr[hr] = "show", zr[gr] = "show", zr), Hr = /* @__PURE__ */ B.forwardRef(function(e, t) {
	var n = e.className, r = e.children, i = Vn(e, Rr), a = (0, B.useCallback)(function(e) {
		Pr(e), i.onEnter && i.onEnter(e);
	}, [i]);
	return /* @__PURE__ */ B.createElement(vr, V({
		ref: t,
		addEndListener: Mr
	}, i, { onEnter: a }), function(e, t) {
		return /* @__PURE__ */ B.cloneElement(r, V({}, t, { className: (0, Lr.default)("fade", n, r.props.className, Vr[e]) }));
	});
});
Hr.defaultProps = Br, Hr.displayName = "Fade";
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/SafeAnchor.js
var Ur = [
	"as",
	"disabled",
	"onKeyDown"
];
function Wr(e) {
	return !e || e.trim() === "#";
}
var Gr = /* @__PURE__ */ B.forwardRef(function(e, t) {
	var n = e.as, r = n === void 0 ? "a" : n, i = e.disabled, a = e.onKeyDown, o = Vn(e, Ur), s = function(e) {
		var t = o.href, n = o.onClick;
		if ((i || Wr(t)) && e.preventDefault(), i) {
			e.stopPropagation();
			return;
		}
		n && n(e);
	};
	return Wr(o.href) && (o.role = o.role || "button", o.href = o.href || "#"), i && (o.tabIndex = -1, o["aria-disabled"] = !0), /* @__PURE__ */ B.createElement(r, V({ ref: t }, o, {
		onClick: s,
		onKeyDown: Nr(function(e) {
			e.key === " " && (e.preventDefault(), s(e));
		}, a)
	}));
});
Gr.displayName = "SafeAnchor";
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Button.js
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
}, Jr = /* @__PURE__ */ B.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.variant, i = e.size, a = e.active, o = e.className, s = e.block, c = e.type, l = e.as, u = Vn(e, Kr), d = Yn(n, "btn"), f = (0, Lr.default)(o, d, a && "active", r && d + "-" + r, s && d + "-block", i && d + "-" + i);
	if (u.href) return /* @__PURE__ */ B.createElement(Gr, V({}, u, {
		as: l,
		ref: t,
		className: (0, Lr.default)(f, u.disabled && "disabled")
	}));
	t && (u.ref = t), c ? u.type = c : l || (u.type = "button");
	var p = l || "button";
	return /* @__PURE__ */ B.createElement(p, V({}, u, { className: f }));
});
Jr.displayName = "Button", Jr.defaultProps = qr;
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useMounted.js
function Yr() {
	let e = (0, B.useRef)(!0), t = (0, B.useRef)(() => e.current);
	return (0, B.useEffect)(() => (e.current = !0, () => {
		e.current = !1;
	}), []), t.current;
}
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useUpdatedRef.js
function Xr(e) {
	let t = (0, B.useRef)(e);
	return t.current = e, t;
}
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useWillUnmount.js
function Zr(e) {
	let t = Xr(e);
	(0, B.useEffect)(() => () => t.current(), []);
}
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useTimeout.js
var Qr = 2 ** 31 - 1;
function $r(e, t, n) {
	let r = n - Date.now();
	e.current = r <= Qr ? setTimeout(t, r) : setTimeout(() => $r(e, t, n), Qr);
}
function ei() {
	let e = Yr(), t = (0, B.useRef)();
	return Zr(() => clearTimeout(t.current)), (0, B.useMemo)(() => {
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
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Col.js
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
], ri = /* @__PURE__ */ B.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.className, i = e.as, a = i === void 0 ? "div" : i, o = Vn(e, ti), s = Yn(n, "col"), c = [], l = [];
	return ni.forEach(function(e) {
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
		className: Lr.default.apply(void 0, [r].concat(c, l))
	}));
});
ri.displayName = "Col";
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useCallbackRef.js
function ii() {
	return (0, B.useState)(null);
}
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useSafeState.js
function ai(e) {
	let t = Yr();
	return [e[0], (0, B.useCallback)((n) => {
		if (t()) return e[1](n);
	}, [t, e[1]])];
}
var oi = "bottom", H = "right", si = "left", ci = "auto", li = [
	"top",
	oi,
	H,
	si
], ui = "start", di = "clippingParents", fi = "viewport", pi = "popper", mi = "reference", hi = /* @__PURE__ */ li.reduce(function(e, t) {
	return e.concat([t + "-" + ui, t + "-end"]);
}, []), gi = /* @__PURE__ */ [].concat(li, [ci]).reduce(function(e, t) {
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
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getBasePlacement.js
function vi(e) {
	return e.split("-")[0];
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getWindow.js
function yi(e) {
	if (e == null) return window;
	if (e.toString() !== "[object Window]") {
		var t = e.ownerDocument;
		return t && t.defaultView || window;
	}
	return e;
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/instanceOf.js
function bi(e) {
	return e instanceof yi(e).Element || e instanceof Element;
}
function xi(e) {
	return e instanceof yi(e).HTMLElement || e instanceof HTMLElement;
}
function Si(e) {
	return typeof ShadowRoot > "u" ? !1 : e instanceof yi(e).ShadowRoot || e instanceof ShadowRoot;
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/math.js
var Ci = Math.max, wi = Math.min, Ti = Math.round;
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/userAgent.js
function Ei() {
	var e = navigator.userAgentData;
	return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(e) {
		return e.brand + "/" + e.version;
	}).join(" ") : navigator.userAgent;
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/isLayoutViewport.js
function Di() {
	return !/^((?!chrome|android).)*safari/i.test(Ei());
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js
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
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js
function ki(e) {
	var t = Oi(e), n = e.offsetWidth, r = e.offsetHeight;
	return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
		x: e.offsetLeft,
		y: e.offsetTop,
		width: n,
		height: r
	};
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/contains.js
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
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getNodeName.js
function ji(e) {
	return e ? (e.nodeName || "").toLowerCase() : null;
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js
function Mi(e) {
	return yi(e).getComputedStyle(e);
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/isTableElement.js
function Ni(e) {
	return [
		"table",
		"td",
		"th"
	].indexOf(ji(e)) >= 0;
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js
function Pi(e) {
	return ((bi(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getParentNode.js
function Fi(e) {
	return ji(e) === "html" ? e : e.assignedSlot || e.parentNode || (Si(e) ? e.host : null) || Pi(e);
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js
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
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js
function zi(e) {
	return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/within.js
function Bi(e, t, n) {
	return Ci(e, wi(t, n));
}
function Vi(e, t, n) {
	var r = Bi(e, t, n);
	return r > n ? n : r;
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getFreshSideObject.js
function Hi() {
	return {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0
	};
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/mergePaddingObject.js
function Ui(e) {
	return Object.assign({}, Hi(), e);
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/expandToHashMap.js
function Wi(e, t) {
	return t.reduce(function(t, n) {
		return t[n] = e, t;
	}, {});
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/arrow.js
var Gi = function(e, t) {
	return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, Ui(typeof e == "number" ? Wi(e, li) : e);
};
function U(e) {
	var t, n = e.state, r = e.name, i = e.options, a = n.elements.arrow, o = n.modifiersData.popperOffsets, s = vi(n.placement), c = zi(s), l = ["left", "right"].indexOf(s) >= 0 ? "height" : "width";
	if (!(!a || !o)) {
		var u = Gi(i.padding, n), d = ki(a), f = c === "y" ? "top" : si, p = c === "y" ? oi : H, m = n.rects.reference[l] + n.rects.reference[c] - o[c] - n.rects.popper[l], h = o[c] - n.rects.reference[c], g = Ri(a), _ = g ? c === "y" ? g.clientHeight || 0 : g.clientWidth || 0 : 0, v = m / 2 - h / 2, y = u[f], b = _ - d[l] - u[p], x = _ / 2 - d[l] / 2 + v, S = Bi(y, x, b), C = c;
		n.modifiersData[r] = (t = {}, t[C] = S, t.centerOffset = S - x, t);
	}
}
function W(e) {
	var t = e.state, n = e.options.element, r = n === void 0 ? "[data-popper-arrow]" : n;
	r != null && (typeof r == "string" && (r = t.elements.popper.querySelector(r), !r) || Ai(t.elements.popper, r) && (t.elements.arrow = r));
}
var Ki = {
	name: "arrow",
	enabled: !0,
	phase: "main",
	fn: U,
	effect: W,
	requires: ["popperOffsets"],
	requiresIfExists: ["preventOverflow"]
};
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getVariation.js
function G(e) {
	return e.split("-")[1];
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/computeStyles.js
var qi = {
	top: "auto",
	right: "auto",
	bottom: "auto",
	left: "auto"
};
function Ji(e, t) {
	var n = e.x, r = e.y, i = t.devicePixelRatio || 1;
	return {
		x: Ti(n * i) / i || 0,
		y: Ti(r * i) / i || 0
	};
}
function Yi(e) {
	var t, n = e.popper, r = e.popperRect, i = e.placement, a = e.variation, o = e.offsets, s = e.position, c = e.gpuAcceleration, l = e.adaptive, u = e.roundOffsets, d = e.isFixed, f = o.x, p = f === void 0 ? 0 : f, m = o.y, h = m === void 0 ? 0 : m, g = typeof u == "function" ? u({
		x: p,
		y: h
	}) : {
		x: p,
		y: h
	};
	p = g.x, h = g.y;
	var _ = o.hasOwnProperty("x"), v = o.hasOwnProperty("y"), y = si, b = "top", x = window;
	if (l) {
		var S = Ri(n), C = "clientHeight", w = "clientWidth";
		if (S === yi(n) && (S = Pi(n), Mi(S).position !== "static" && s === "absolute" && (C = "scrollHeight", w = "scrollWidth")), S = S, i === "top" || (i === "left" || i === "right") && a === "end") {
			b = oi;
			var T = d && S === x && x.visualViewport ? x.visualViewport.height : S[C];
			h -= T - r.height, h *= c ? 1 : -1;
		}
		if (i === "left" || (i === "top" || i === "bottom") && a === "end") {
			y = H;
			var E = d && S === x && x.visualViewport ? x.visualViewport.width : S[w];
			p -= E - r.width, p *= c ? 1 : -1;
		}
	}
	var D = Object.assign({ position: s }, l && qi), O = u === !0 ? Ji({
		x: p,
		y: h
	}, yi(n)) : {
		x: p,
		y: h
	};
	if (p = O.x, h = O.y, c) {
		var ee;
		return Object.assign({}, D, (ee = {}, ee[b] = v ? "0" : "", ee[y] = _ ? "0" : "", ee.transform = (x.devicePixelRatio || 1) <= 1 ? "translate(" + p + "px, " + h + "px)" : "translate3d(" + p + "px, " + h + "px, 0)", ee));
	}
	return Object.assign({}, D, (t = {}, t[b] = v ? h + "px" : "", t[y] = _ ? p + "px" : "", t.transform = "", t));
}
function Xi(e) {
	var t = e.state, n = e.options, r = n.gpuAcceleration, i = r === void 0 ? !0 : r, a = n.adaptive, o = a === void 0 ? !0 : a, s = n.roundOffsets, c = s === void 0 ? !0 : s, l = {
		placement: vi(t.placement),
		variation: G(t.placement),
		popper: t.elements.popper,
		popperRect: t.rects.popper,
		gpuAcceleration: i,
		isFixed: t.options.strategy === "fixed"
	};
	t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Yi(Object.assign({}, l, {
		offsets: t.modifiersData.popperOffsets,
		position: t.options.strategy,
		adaptive: o,
		roundOffsets: c
	})))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Yi(Object.assign({}, l, {
		offsets: t.modifiersData.arrow,
		position: "absolute",
		adaptive: !1,
		roundOffsets: c
	})))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
var Zi = {
	name: "computeStyles",
	enabled: !0,
	phase: "beforeWrite",
	fn: Xi,
	data: {}
}, Qi = { passive: !0 };
function $i(e) {
	var t = e.state, n = e.instance, r = e.options, i = r.scroll, a = i === void 0 ? !0 : i, o = r.resize, s = o === void 0 ? !0 : o, c = yi(t.elements.popper), l = [].concat(t.scrollParents.reference, t.scrollParents.popper);
	return a && l.forEach(function(e) {
		e.addEventListener("scroll", n.update, Qi);
	}), s && c.addEventListener("resize", n.update, Qi), function() {
		a && l.forEach(function(e) {
			e.removeEventListener("scroll", n.update, Qi);
		}), s && c.removeEventListener("resize", n.update, Qi);
	};
}
var ea = {
	name: "eventListeners",
	enabled: !0,
	phase: "write",
	fn: function() {},
	effect: $i,
	data: {}
}, ta = {
	left: "right",
	right: "left",
	bottom: "top",
	top: "bottom"
};
function na(e) {
	return e.replace(/left|right|bottom|top/g, function(e) {
		return ta[e];
	});
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js
var ra = {
	start: "end",
	end: "start"
};
function ia(e) {
	return e.replace(/start|end/g, function(e) {
		return ra[e];
	});
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js
function aa(e) {
	var t = yi(e);
	return {
		scrollLeft: t.pageXOffset,
		scrollTop: t.pageYOffset
	};
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js
function oa(e) {
	return Oi(Pi(e)).left + aa(e).scrollLeft;
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js
function sa(e, t) {
	var n = yi(e), r = Pi(e), i = n.visualViewport, a = r.clientWidth, o = r.clientHeight, s = 0, c = 0;
	if (i) {
		a = i.width, o = i.height;
		var l = Di();
		(l || !l && t === "fixed") && (s = i.offsetLeft, c = i.offsetTop);
	}
	return {
		width: a,
		height: o,
		x: s + oa(e),
		y: c
	};
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js
function ca(e) {
	var t = Pi(e), n = aa(e), r = e.ownerDocument?.body, i = Ci(t.scrollWidth, t.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0), a = Ci(t.scrollHeight, t.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0), o = -n.scrollLeft + oa(e), s = -n.scrollTop;
	return Mi(r || t).direction === "rtl" && (o += Ci(t.clientWidth, r ? r.clientWidth : 0) - i), {
		width: i,
		height: a,
		x: o,
		y: s
	};
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js
function la(e) {
	var t = Mi(e), n = t.overflow, r = t.overflowX, i = t.overflowY;
	return /auto|scroll|overlay|hidden/.test(n + i + r);
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js
function ua(e) {
	return [
		"html",
		"body",
		"#document"
	].indexOf(ji(e)) >= 0 ? e.ownerDocument.body : xi(e) && la(e) ? e : ua(Fi(e));
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js
function da(e, t) {
	t === void 0 && (t = []);
	var n = ua(e), r = n === e.ownerDocument?.body, i = yi(n), a = r ? [i].concat(i.visualViewport || [], la(n) ? n : []) : n, o = t.concat(a);
	return r ? o : o.concat(da(Fi(a)));
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/rectToClientRect.js
function fa(e) {
	return Object.assign({}, e, {
		left: e.x,
		top: e.y,
		right: e.x + e.width,
		bottom: e.y + e.height
	});
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js
function pa(e, t) {
	var n = Oi(e, !1, t === "fixed");
	return n.top += e.clientTop, n.left += e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function ma(e, t, n) {
	return t === "viewport" ? fa(sa(e, n)) : bi(t) ? pa(t, n) : fa(ca(Pi(e)));
}
function ha(e) {
	var t = da(Fi(e)), n = ["absolute", "fixed"].indexOf(Mi(e).position) >= 0 && xi(e) ? Ri(e) : e;
	return bi(n) ? t.filter(function(e) {
		return bi(e) && Ai(e, n) && ji(e) !== "body";
	}) : [];
}
function ga(e, t, n, r) {
	var i = t === "clippingParents" ? ha(e) : [].concat(t), a = [].concat(i, [n]), o = a[0], s = a.reduce(function(t, n) {
		var i = ma(e, n, r);
		return t.top = Ci(i.top, t.top), t.right = wi(i.right, t.right), t.bottom = wi(i.bottom, t.bottom), t.left = Ci(i.left, t.left), t;
	}, ma(e, o, r));
	return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/computeOffsets.js
function _a(e) {
	var t = e.reference, n = e.element, r = e.placement, i = r ? vi(r) : null, a = r ? G(r) : null, o = t.x + t.width / 2 - n.width / 2, s = t.y + t.height / 2 - n.height / 2, c;
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
		case H:
			c = {
				x: t.x + t.width,
				y: s
			};
			break;
		case si:
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
function va(e, t) {
	t === void 0 && (t = {});
	var n = t, r = n.placement, i = r === void 0 ? e.placement : r, a = n.strategy, o = a === void 0 ? e.strategy : a, s = n.boundary, c = s === void 0 ? di : s, l = n.rootBoundary, u = l === void 0 ? fi : l, d = n.elementContext, f = d === void 0 ? pi : d, p = n.altBoundary, m = p === void 0 ? !1 : p, h = n.padding, g = h === void 0 ? 0 : h, _ = Ui(typeof g == "number" ? Wi(g, li) : g), v = f === "popper" ? mi : pi, y = e.rects.popper, b = e.elements[m ? v : f], x = ga(bi(b) ? b : b.contextElement || Pi(e.elements.popper), c, u, o), S = Oi(e.elements.reference), C = _a({
		reference: S,
		element: y,
		strategy: "absolute",
		placement: i
	}), w = fa(Object.assign({}, y, C)), T = f === "popper" ? w : S, E = {
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
function ya(e, t) {
	t === void 0 && (t = {});
	var n = t, r = n.placement, i = n.boundary, a = n.rootBoundary, o = n.padding, s = n.flipVariations, c = n.allowedAutoPlacements, l = c === void 0 ? gi : c, u = G(r), d = u ? s ? hi : hi.filter(function(e) {
		return G(e) === u;
	}) : li, f = d.filter(function(e) {
		return l.indexOf(e) >= 0;
	});
	f.length === 0 && (f = d);
	var p = f.reduce(function(t, n) {
		return t[n] = va(e, {
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
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/flip.js
function ba(e) {
	if (vi(e) === "auto") return [];
	var t = na(e);
	return [
		ia(e),
		t,
		ia(t)
	];
}
function xa(e) {
	var t = e.state, n = e.options, r = e.name;
	if (!t.modifiersData[r]._skip) {
		for (var i = n.mainAxis, a = i === void 0 ? !0 : i, o = n.altAxis, s = o === void 0 ? !0 : o, c = n.fallbackPlacements, l = n.padding, u = n.boundary, d = n.rootBoundary, f = n.altBoundary, p = n.flipVariations, m = p === void 0 ? !0 : p, h = n.allowedAutoPlacements, g = t.options.placement, _ = vi(g) === g, v = c || (_ || !m ? [na(g)] : ba(g)), y = [g].concat(v).reduce(function(e, n) {
			return e.concat(vi(n) === "auto" ? ya(t, {
				placement: n,
				boundary: u,
				rootBoundary: d,
				padding: l,
				flipVariations: m,
				allowedAutoPlacements: h
			}) : n);
		}, []), b = t.rects.reference, x = t.rects.popper, S = /* @__PURE__ */ new Map(), C = !0, w = y[0], T = 0; T < y.length; T++) {
			var E = y[T], D = vi(E), O = G(E) === ui, ee = ["top", oi].indexOf(D) >= 0, te = ee ? "width" : "height", k = va(t, {
				placement: E,
				boundary: u,
				rootBoundary: d,
				altBoundary: f,
				padding: l
			}), A = ee ? O ? H : si : O ? oi : "top";
			b[te] > x[te] && (A = na(A));
			var j = na(A), M = [];
			if (a && M.push(k[D] <= 0), s && M.push(k[A] <= 0, k[j] <= 0), M.every(function(e) {
				return e;
			})) {
				w = E, C = !1;
				break;
			}
			S.set(E, M);
		}
		if (C) for (var N = m ? 3 : 1, P = function(e) {
			var t = y.find(function(t) {
				var n = S.get(t);
				if (n) return n.slice(0, e).every(function(e) {
					return e;
				});
			});
			if (t) return w = t, "break";
		}, ne = N; ne > 0 && P(ne) !== "break"; ne--);
		t.placement !== w && (t.modifiersData[r]._skip = !0, t.placement = w, t.reset = !0);
	}
}
var Sa = {
	name: "flip",
	enabled: !0,
	phase: "main",
	fn: xa,
	requiresIfExists: ["offset"],
	data: { _skip: !1 }
};
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/hide.js
function K(e, t, n) {
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
function Ca(e) {
	return [
		"top",
		H,
		oi,
		si
	].some(function(t) {
		return e[t] >= 0;
	});
}
function wa(e) {
	var t = e.state, n = e.name, r = t.rects.reference, i = t.rects.popper, a = t.modifiersData.preventOverflow, o = va(t, { elementContext: "reference" }), s = va(t, { altBoundary: !0 }), c = K(o, r), l = K(s, i, a), u = Ca(c), d = Ca(l);
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
var Ta = {
	name: "hide",
	enabled: !0,
	phase: "main",
	requiresIfExists: ["preventOverflow"],
	fn: wa
};
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/offset.js
function Ea(e, t, n) {
	var r = vi(e), i = ["left", "top"].indexOf(r) >= 0 ? -1 : 1, a = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n, o = a[0], s = a[1];
	return o ||= 0, s = (s || 0) * i, ["left", "right"].indexOf(r) >= 0 ? {
		x: s,
		y: o
	} : {
		x: o,
		y: s
	};
}
function Da(e) {
	var t = e.state, n = e.options, r = e.name, i = n.offset, a = i === void 0 ? [0, 0] : i, o = gi.reduce(function(e, n) {
		return e[n] = Ea(n, t.rects, a), e;
	}, {}), s = o[t.placement], c = s.x, l = s.y;
	t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += c, t.modifiersData.popperOffsets.y += l), t.modifiersData[r] = o;
}
var Oa = {
	name: "offset",
	enabled: !0,
	phase: "main",
	requires: ["popperOffsets"],
	fn: Da
};
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/popperOffsets.js
function ka(e) {
	var t = e.state, n = e.name;
	t.modifiersData[n] = _a({
		reference: t.rects.reference,
		element: t.rects.popper,
		strategy: "absolute",
		placement: t.placement
	});
}
var Aa = {
	name: "popperOffsets",
	enabled: !0,
	phase: "read",
	fn: ka,
	data: {}
};
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getAltAxis.js
function ja(e) {
	return e === "x" ? "y" : "x";
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/preventOverflow.js
function Ma(e) {
	var t = e.state, n = e.options, r = e.name, i = n.mainAxis, a = i === void 0 ? !0 : i, o = n.altAxis, s = o === void 0 ? !1 : o, c = n.boundary, l = n.rootBoundary, u = n.altBoundary, d = n.padding, f = n.tether, p = f === void 0 ? !0 : f, m = n.tetherOffset, h = m === void 0 ? 0 : m, g = va(t, {
		boundary: c,
		rootBoundary: l,
		padding: d,
		altBoundary: u
	}), _ = vi(t.placement), v = G(t.placement), y = !v, b = zi(_), x = ja(b), S = t.modifiersData.popperOffsets, C = t.rects.reference, w = t.rects.popper, T = typeof h == "function" ? h(Object.assign({}, t.rects, { placement: t.placement })) : h, E = typeof T == "number" ? {
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
			var ee = b === "y" ? "top" : si, te = b === "y" ? oi : H, k = b === "y" ? "height" : "width", A = S[b], j = A + g[ee], M = A - g[te], N = p ? -w[k] / 2 : 0, P = v === "start" ? C[k] : w[k], ne = v === "start" ? -w[k] : -C[k], re = t.elements.arrow, F = p && re ? ki(re) : {
				width: 0,
				height: 0
			}, ie = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Hi(), ae = ie[ee], oe = ie[te], se = Bi(0, C[k], F[k]), ce = y ? C[k] / 2 - N - se - ae - E.mainAxis : P - se - ae - E.mainAxis, le = y ? -C[k] / 2 + N + se + oe + E.mainAxis : ne + se + oe + E.mainAxis, ue = t.elements.arrow && Ri(t.elements.arrow), de = ue ? b === "y" ? ue.clientTop || 0 : ue.clientLeft || 0 : 0, fe = D?.[b] ?? 0, pe = A + ce - fe - de, me = A + le - fe, he = Bi(p ? wi(j, pe) : j, A, p ? Ci(M, me) : M);
			S[b] = he, O[b] = he - A;
		}
		if (s) {
			var ge = b === "x" ? "top" : si, _e = b === "x" ? oi : H, ve = S[x], ye = x === "y" ? "height" : "width", be = ve + g[ge], xe = ve - g[_e], Se = ["top", si].indexOf(_) !== -1, Ce = D?.[x] ?? 0, we = Se ? be : ve - C[ye] - w[ye] - Ce + E.altAxis, Te = Se ? ve + C[ye] + w[ye] - Ce - E.altAxis : xe, Ee = p && Se ? Vi(we, ve, Te) : Bi(p ? we : be, ve, p ? Te : xe);
			S[x] = Ee, O[x] = Ee - ve;
		}
		t.modifiersData[r] = O;
	}
}
var Na = {
	name: "preventOverflow",
	enabled: !0,
	phase: "main",
	fn: Ma,
	requiresIfExists: ["offset"]
};
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js
function Pa(e) {
	return {
		scrollLeft: e.scrollLeft,
		scrollTop: e.scrollTop
	};
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js
function Fa(e) {
	return e === yi(e) || !xi(e) ? aa(e) : Pa(e);
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js
function Ia(e) {
	var t = e.getBoundingClientRect(), n = Ti(t.width) / e.offsetWidth || 1, r = Ti(t.height) / e.offsetHeight || 1;
	return n !== 1 || r !== 1;
}
function La(e, t, n) {
	n === void 0 && (n = !1);
	var r = xi(t), i = xi(t) && Ia(t), a = Pi(t), o = Oi(e, i, n), s = {
		scrollLeft: 0,
		scrollTop: 0
	}, c = {
		x: 0,
		y: 0
	};
	return (r || !r && !n) && ((ji(t) !== "body" || la(a)) && (s = Fa(t)), xi(t) ? (c = Oi(t, !0), c.x += t.clientLeft, c.y += t.clientTop) : a && (c.x = oa(a))), {
		x: o.left + s.scrollLeft - c.x,
		y: o.top + s.scrollTop - c.y,
		width: o.width,
		height: o.height
	};
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/orderModifiers.js
function Ra(e) {
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
function za(e) {
	var t = Ra(e);
	return _i.reduce(function(e, n) {
		return e.concat(t.filter(function(e) {
			return e.phase === n;
		}));
	}, []);
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/debounce.js
function Ba(e) {
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
function Va(e) {
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
var Ha = {
	placement: "bottom",
	modifiers: [],
	strategy: "absolute"
};
function Ua() {
	return ![...arguments].some(function(e) {
		return !(e && typeof e.getBoundingClientRect == "function");
	});
}
function Wa(e) {
	e === void 0 && (e = {});
	var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, i = t.defaultOptions, a = i === void 0 ? Ha : i;
	return function(e, t, n) {
		n === void 0 && (n = a);
		var i = {
			placement: "bottom",
			orderedModifiers: [],
			options: Object.assign({}, Ha, a),
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
					reference: bi(e) ? da(e) : e.contextElement ? da(e.contextElement) : [],
					popper: da(t)
				};
				var s = za(Va([].concat(r, i.options.modifiers)));
				return i.orderedModifiers = s.filter(function(e) {
					return e.enabled;
				}), l(), c.update();
			},
			forceUpdate: function() {
				if (!s) {
					var e = i.elements, t = e.reference, n = e.popper;
					if (Ua(t, n)) {
						i.rects = {
							reference: La(t, Ri(n), i.options.strategy === "fixed"),
							popper: ki(n)
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
			update: Ba(function() {
				return new Promise(function(e) {
					c.forceUpdate(), e(i);
				});
			}),
			destroy: function() {
				u(), s = !0;
			}
		};
		if (!Ua(e, t)) return c;
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
var Ga = Wa({ defaultModifiers: [
	Ta,
	Aa,
	Zi,
	ea,
	Oa,
	Sa,
	Na,
	Ki
] }), Ka = function(e) {
	return {
		position: e,
		top: "0",
		left: "0",
		opacity: "0",
		pointerEvents: "none"
	};
}, qa = {
	name: "applyStyles",
	enabled: !1
}, Ja = {
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
}, Ya = [];
function Xa(e, t, n) {
	var r = n === void 0 ? {} : n, i = r.enabled, a = i === void 0 ? !0 : i, o = r.placement, s = o === void 0 ? "bottom" : o, c = r.strategy, l = c === void 0 ? "absolute" : c, u = r.modifiers, d = u === void 0 ? Ya : u, f = Vn(r, [
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
	}, []), g = ai((0, B.useState)({
		placement: s,
		update: m,
		forceUpdate: h,
		attributes: {},
		styles: {
			popper: Ka(l),
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
			modifiers: [].concat(d, [y, qa])
		});
	}, [
		l,
		s,
		y,
		a
	]), (0, B.useEffect)(function() {
		if (!(!a || e == null || t == null)) return p.current = Ga(e, t, V({}, f, {
			placement: s,
			strategy: l,
			modifiers: [].concat(d, [Ja, y])
		})), function() {
			p.current != null && (p.current.destroy(), p.current = void 0, v(function(e) {
				return V({}, e, {
					attributes: {},
					styles: { popper: Ka(l) }
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
function Za(e, t) {
	if (e.contains) return e.contains(t);
	if (e.compareDocumentPosition) return e === t || !!(e.compareDocumentPosition(t) & 16);
}
//#endregion
//#region node_modules/.pnpm/warning@4.0.3/node_modules/warning/warning.js
var Qa = /* @__PURE__ */ o(((e, t) => {
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
function $a(e) {
	return e && "setState" in e ? fr.findDOMNode(e) : e ?? null;
}
//#endregion
//#region node_modules/.pnpm/react-overlays@5.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-overlays/esm/ownerDocument.js
var eo = (function(e) {
	return Xn($a(e));
}), to = /* @__PURE__ */ c(Qa()), no = 27, ro = function() {};
function io(e) {
	return e.button === 0;
}
function ao(e) {
	return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
var oo = function(e) {
	return e && ("current" in e ? e.current : e);
};
function so(e, t, n) {
	var r = n === void 0 ? {} : n, i = r.disabled, a = r.clickTrigger, o = a === void 0 ? "click" : a, s = (0, B.useRef)(!1), c = t || ro, l = (0, B.useCallback)(function(t) {
		var n = oo(e);
		(0, to.default)(!!n, "RootClose captured a close event but does not have a ref to compare it to. useRootClose(), should be passed a ref that resolves to a DOM node"), s.current = !n || ao(t) || !io(t) || !!Za(n, (t.composedPath == null ? void 0 : t.composedPath()[0]) ?? t.target);
	}, [e]), u = Ir(function(e) {
		s.current || c(e);
	}), d = Ir(function(e) {
		e.keyCode === no && c(e);
	});
	(0, B.useEffect)(function() {
		if (!(i || e == null)) {
			var t = window.event, n = eo(oo(e)), r = Er(n, o, l, !0), a = Er(n, o, function(e) {
				if (e === t) {
					t = void 0;
					return;
				}
				u(e);
			}), s = Er(n, "keyup", function(e) {
				if (e === t) {
					t = void 0;
					return;
				}
				d(e);
			}), c = [];
			return "ontouchstart" in n.documentElement && (c = [].slice.call(n.body.children).map(function(e) {
				return Er(e, "mousemove", ro);
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
function co(e) {
	var t = {};
	return Array.isArray(e) ? (e?.forEach(function(e) {
		t[e.name] = e;
	}), t) : e || t;
}
function lo(e) {
	return e === void 0 && (e = {}), Array.isArray(e) ? e : Object.keys(e).map(function(t) {
		return e[t].name = t, e[t];
	});
}
function uo(e) {
	var t = e.enabled, n = e.enableEvents, r = e.placement, i = e.flip, a = e.offset, o = e.fixed, s = e.containerPadding, c = e.arrowElement, l = e.popperConfig, u = l === void 0 ? {} : l, d = co(u.modifiers);
	return V({}, u, {
		placement: r,
		enabled: t,
		strategy: o ? "fixed" : u.strategy,
		modifiers: lo(V({}, d, {
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
var fo = (e) => !e || typeof e == "function" ? e : (t) => {
	e.current = t;
};
function po(e, t) {
	let n = fo(e), r = fo(t);
	return (e) => {
		n && n(e), r && r(e);
	};
}
function mo(e, t) {
	return (0, B.useMemo)(() => po(e, t), [e, t]);
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/hasClass.js
function ho(e, t) {
	return e.classList ? !!t && e.classList.contains(t) : (" " + (e.className.baseVal || e.className) + " ").indexOf(" " + t + " ") !== -1;
}
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/usePopperMarginModifiers.js
function go(e) {
	var t = window.getComputedStyle(e);
	return {
		top: parseFloat(t.marginTop) || 0,
		right: parseFloat(t.marginRight) || 0,
		bottom: parseFloat(t.marginBottom) || 0,
		left: parseFloat(t.marginLeft) || 0
	};
}
function _o() {
	var e = (0, B.useRef)(null), t = (0, B.useRef)(null), n = (0, B.useRef)(null), r = Yn(void 0, "popover"), i = Yn(void 0, "dropdown-menu");
	return [(0, B.useCallback)(function(n) {
		!n || !(ho(n, r) || ho(n, i)) || (t.current = go(n), n.style.margin = "0", e.current = n);
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
					if (!(!e.current || !i.elements.arrow || !ho(e.current, r))) {
						if (i.modifiersData["arrow#persistent"]) {
							var a = go(i.elements.arrow), o = a.top, s = a.right, c = o || s;
							i.modifiersData["arrow#persistent"].padding = {
								top: c,
								left: c,
								right: c,
								bottom: c
							};
						} else n.current = go(i.elements.arrow);
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
var q = /* @__PURE__ */ o(((e, t) => {
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
})), vo = function(e) {
	var t;
	return typeof document > "u" ? null : e == null ? Xn().body : (typeof e == "function" && (e = e()), e && "current" in e && (e = e.current), (t = e) != null && t.nodeType && e || null);
};
function yo(e, t) {
	var n = (0, B.useState)(function() {
		return vo(e);
	}), r = n[0], i = n[1];
	if (!r) {
		var a = vo(e);
		a && i(a);
	}
	return (0, B.useEffect)(function() {
		t && r && t(r);
	}, [t, r]), (0, B.useEffect)(function() {
		var t = vo(e);
		t !== r && i(t);
	}, [e, r]), r;
}
//#endregion
//#region node_modules/.pnpm/react-overlays@5.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-overlays/esm/Overlay.js
var J = /* @__PURE__ */ c(cr()), bo = /* @__PURE__ */ B.forwardRef(function(e, t) {
	var n = e.flip, r = e.offset, i = e.placement, a = e.containerPadding, o = a === void 0 ? 5 : a, s = e.popperConfig, c = s === void 0 ? {} : s, l = e.transition, u = ii(), d = u[0], f = u[1], p = ii(), m = p[0], h = p[1], g = mo(f, t), _ = yo(e.container), v = yo(e.target), y = (0, B.useState)(!e.show), b = y[0], x = y[1], S = Xa(v, d, uo({
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
	if (so(d, e.onHide, {
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
		var ee = e.onExit, te = e.onExiting, k = e.onEnter, A = e.onEntering, j = e.onEntered;
		O = /* @__PURE__ */ B.createElement(l, {
			in: e.show,
			appear: !0,
			onExit: ee,
			onExiting: te,
			onExited: E,
			onEnter: k,
			onEntering: A,
			onEntered: j
		}, O);
	}
	return _ ? /* @__PURE__ */ fr.createPortal(O, _) : null;
});
bo.displayName = "Overlay", bo.propTypes = {
	show: J.default.bool,
	placement: J.default.oneOf(gi),
	target: J.default.any,
	container: J.default.any,
	flip: J.default.bool,
	children: J.default.func.isRequired,
	containerPadding: J.default.number,
	popperConfig: J.default.object,
	rootClose: J.default.bool,
	rootCloseEvent: J.default.oneOf(["click", "mousedown"]),
	rootCloseDisabled: J.default.bool,
	onHide: function(e) {
		var t = [...arguments].slice(1);
		if (e.rootClose) {
			var n;
			return (n = J.default.func).isRequired.apply(n, [e].concat(t));
		}
		return J.default.func.apply(J.default, [e].concat(t));
	},
	transition: J.default.elementType,
	onEnter: J.default.func,
	onEntering: J.default.func,
	onEntered: J.default.func,
	onExit: J.default.func,
	onExiting: J.default.func,
	onExited: J.default.func
};
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Overlay.js
var xo = [
	"children",
	"transition",
	"popperConfig"
], So = [
	"props",
	"arrowProps",
	"show",
	"update",
	"forceUpdate",
	"placement",
	"state"
], Y = {
	transition: Hr,
	rootClose: !1,
	show: !1,
	placement: "top"
};
function Co(e, t) {
	var n = e.ref, r = t.ref;
	e.ref = n.__wrapped ||= function(e) {
		return n($a(e));
	}, t.ref = r.__wrapped ||= function(e) {
		return r($a(e));
	};
}
function wo(e) {
	var t = e.children, n = e.transition, r = e.popperConfig, i = r === void 0 ? {} : r, a = Vn(e, xo), o = (0, B.useRef)({}), s = _o(), c = s[0], l = s[1], u = n === !0 ? Hr : n || null;
	return /* @__PURE__ */ B.createElement(bo, V({}, a, {
		ref: c,
		popperConfig: V({}, i, { modifiers: l.concat(i.modifiers || []) }),
		transition: u
	}), function(e) {
		var r = e.props, i = e.arrowProps, a = e.show, s = e.update;
		e.forceUpdate;
		var c = e.placement, l = e.state, u = Vn(e, So);
		Co(r, i);
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
			className: (0, Lr.default)(t.props.className, !n && a && "show"),
			style: V({}, t.props.style, r.style)
		}));
	});
}
wo.defaultProps = Y;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/OverlayTrigger.js
var To = [
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
], Eo = /* @__PURE__ */ function(e) {
	Wn(t, e);
	function t() {
		return e.apply(this, arguments) || this;
	}
	var n = t.prototype;
	return n.render = function() {
		return this.props.children;
	}, t;
}(B.Component);
function Do(e) {
	return e && typeof e == "object" ? e : {
		show: e,
		hide: e
	};
}
function Oo(e, t, n) {
	var r = t[0], i = r.currentTarget, a = r.relatedTarget || r.nativeEvent[n];
	(!a || a !== i) && !Za(i, a) && e.apply(void 0, t);
}
var ko = {
	defaultShow: !1,
	trigger: ["hover", "focus"]
};
function Ao(e) {
	var t = e.trigger, n = e.overlay, r = e.children, i = e.popperConfig, a = i === void 0 ? {} : i, o = e.show, s = e.defaultShow, c = s === void 0 ? !1 : s, l = e.onToggle, u = e.delay, d = e.placement, f = e.flip, p = f === void 0 ? d && d.indexOf("auto") !== -1 : f, m = Vn(e, To), h = (0, B.useRef)(null), g = ei(), _ = (0, B.useRef)(""), v = Hn(o, c, l), y = v[0], b = v[1], x = Do(u), S = typeof r == "function" ? {} : B.Children.only(r).props, C = S.onFocus, w = S.onBlur, T = S.onClick, E = (0, B.useCallback)(function() {
		return $a(h.current);
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
	]), ee = (0, B.useCallback)(function() {
		D();
		var e = [...arguments];
		C?.apply(void 0, e);
	}, [D, C]), te = (0, B.useCallback)(function() {
		O();
		var e = [...arguments];
		w?.apply(void 0, e);
	}, [O, w]), k = (0, B.useCallback)(function() {
		b(!y), T && T.apply(void 0, arguments);
	}, [
		T,
		b,
		y
	]), A = (0, B.useCallback)(function() {
		Oo(D, [...arguments], "fromElement");
	}, [D]), j = (0, B.useCallback)(function() {
		Oo(O, [...arguments], "toElement");
	}, [O]), M = t == null ? [] : [].concat(t), N = {};
	return M.indexOf("click") !== -1 && (N.onClick = k), M.indexOf("focus") !== -1 && (N.onFocus = ee, N.onBlur = te), M.indexOf("hover") !== -1 && (N.onMouseOver = A, N.onMouseOut = j), /* @__PURE__ */ B.createElement(B.Fragment, null, typeof r == "function" ? r(V({}, N, { ref: h })) : /* @__PURE__ */ B.createElement(Eo, { ref: h }, /* @__PURE__ */ (0, B.cloneElement)(r, N)), /* @__PURE__ */ B.createElement(wo, V({}, m, {
		show: y,
		onHide: O,
		flip: p,
		placement: d,
		popperConfig: a,
		target: E
	}), n));
}
Ao.defaultProps = ko, q();
var jo = [
	"bsPrefix",
	"placement",
	"className",
	"style",
	"children",
	"arrowProps",
	"popper",
	"show"
], Mo = { placement: "right" }, No = /* @__PURE__ */ B.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.placement, i = e.className, a = e.style, o = e.children, s = e.arrowProps;
	e.popper, e.show;
	var c = Vn(e, jo);
	n = Yn(n, "tooltip");
	var l = (r?.split("-") || [])[0];
	return /* @__PURE__ */ B.createElement("div", V({
		ref: t,
		style: a,
		role: "tooltip",
		"x-placement": l,
		className: (0, Lr.default)(i, n, "bs-tooltip-" + l)
	}, c), /* @__PURE__ */ B.createElement("div", V({ className: "arrow" }, s)), /* @__PURE__ */ B.createElement("div", { className: n + "-inner" }, o));
});
No.defaultProps = Mo, No.displayName = "Tooltip";
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/utils/newId.js
var Po = 0, Fo = (e = "id") => (Po += 1, `${e}${Po}`), Io = /* @__PURE__ */ function(e) {
	return e.MOVED = "MOVED", e.REMOVED = "REMOVED", e.FORMAT = "FORMAT", e.MOVED_AND_FORMAT = "MOVED_AND_FORMAT", e;
}({});
function Lo(e, t, n) {
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
				case Io.MOVED:
					this.warn(`${t}: The prop '${r}' has been moved to '${a}'.`), e[a] = this.props[r];
					break;
				case Io.REMOVED:
					this.warn(`${t}: The prop '${r}' has been removed. '${c}'`);
					break;
				case Io.FORMAT:
					o(this.props[r]) ? e[r] = this.props[r] : (this.warn(`${t}: The prop '${r}' expects a new format. ${c}`), e[r] = s(this.props[r], this.props));
					break;
				case Io.MOVED_AND_FORMAT: {
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
function Ro({ src: e, id: t, className: n, hidden: r, screenReaderText: i, svgAttrs: a, size: o, ...s }) {
	if (e) {
		let r = a["aria-label"] || a["aria-labelledby"], c = { ...a };
		return r || (c["aria-label"] = void 0, c["aria-hidden"] = !0), /* @__PURE__ */ B.createElement("span", {
			className: (0, Lr.default)("pgn__icon", { [`pgn__icon__${o}`]: !!o }, n),
			id: t,
			...s
		}, /* @__PURE__ */ B.createElement(e, {
			role: "img",
			focusable: !1,
			...c
		}), i && /* @__PURE__ */ B.createElement("span", { className: "sr-only" }, i));
	}
	return /* @__PURE__ */ B.createElement(B.Fragment, null, /* @__PURE__ */ B.createElement("span", {
		id: t || Fo("Icon"),
		className: n,
		"aria-hidden": r
	}), i && /* @__PURE__ */ B.createElement("span", { className: "sr-only" }, i));
}
Ro.propTypes = {
	src: J.default.elementType,
	svgAttrs: J.default.shape({
		"aria-label": J.default.string,
		"aria-labelledby": J.default.string
	}),
	id: J.default.string,
	size: J.default.oneOf([
		"xs",
		"sm",
		"md",
		"lg"
	]),
	className: J.default.string,
	hidden: J.default.bool,
	screenReaderText: J.default.oneOfType([J.default.string, J.default.element])
}, Ro.defaultProps = {
	src: null,
	svgAttrs: {},
	id: void 0,
	hidden: !0,
	screenReaderText: void 0,
	size: void 0,
	className: void 0
};
var zo = Lo(Ro, "Icon", { className: {
	deprType: Io.FORMAT,
	expect: (e) => typeof e == "string",
	transform: (e) => Array.isArray(e) ? e.join(" ") : e,
	message: "It should be a string."
} }), Bo = /* @__PURE__ */ B.forwardRef(({ children: e, iconAfter: t, iconBefore: n, size: r, ...i }, a) => /* @__PURE__ */ B.createElement(Jr, {
	size: r,
	...i,
	className: (0, Lr.default)(i.className),
	ref: a
}, n && /* @__PURE__ */ B.createElement(zo, {
	className: "btn-icon-before",
	size: r,
	src: n
}), e, t && /* @__PURE__ */ B.createElement(zo, {
	className: "btn-icon-after",
	size: r,
	src: t
}))), Vo = [
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
], Ho = [
	"hover",
	"click",
	"focus"
];
function Uo(e) {
	return /* @__PURE__ */ B.createElement(wo, { ...e });
}
function Wo(e) {
	return /* @__PURE__ */ B.createElement(Ao, { ...e }, e.children);
}
var Go = J.default.oneOf(Ho);
Uo.propTypes = {
	children: J.default.node.isRequired,
	container: J.default.oneOfType([J.default.elementType, J.default.func]),
	onEnter: J.default.func,
	onEntered: J.default.func,
	onEntering: J.default.func,
	onExit: J.default.func,
	onExited: J.default.func,
	onExiting: J.default.func,
	onHide: J.default.func,
	placement: J.default.oneOf(Vo),
	popperConfig: J.default.shape({}),
	rootClose: J.default.bool,
	rootCloseEvent: J.default.oneOf(["click", "mousedown"]),
	show: J.default.bool,
	target: J.default.oneOfType([J.default.elementType, J.default.func]),
	transition: J.default.oneOfType([J.default.object, J.default.bool])
}, Wo.propTypes = {
	children: J.default.oneOfType([J.default.element, J.default.func]).isRequired,
	overlay: J.default.oneOfType([J.default.element, J.default.func]).isRequired,
	defaultShow: J.default.bool,
	delay: J.default.oneOfType([J.default.number, J.default.shape({})]),
	flip: J.default.bool,
	onHide: J.default.func,
	onToggle: J.default.func,
	placement: J.default.oneOf(Vo),
	popperConfig: J.default.shape({}),
	show: J.default.bool,
	target: J.default.instanceOf(EventTarget),
	trigger: J.default.oneOfType([Go, J.default.arrayOf(Go)])
}, Uo.defaultProps = {
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
	transition: Hr
}, Wo.defaultProps = {
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
var Ko = [
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
], qo = /* @__PURE__ */ B.forwardRef(({ children: e, variant: t, ...n }, r) => /* @__PURE__ */ B.createElement(No, {
	...n,
	className: (0, Lr.default)({ "tooltip-light": t === "light" }, n.className),
	ref: r
}, e));
qo.propTypes = {
	...No.propTypes,
	id: J.default.string.isRequired,
	placement: J.default.oneOf(Ko),
	arrowProps: J.default.shape({
		ref: J.default.oneOfType([J.default.func, J.default.shape({ current: J.default.element })]),
		style: J.default.shape({})
	}),
	show: J.default.bool,
	popper: J.default.shape({}),
	bsPrefix: J.default.string,
	children: J.default.node,
	className: J.default.string,
	variant: J.default.string
}, qo.defaultProps = {
	...qo.defaultProps,
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
var Jo = /* @__PURE__ */ B.forwardRef(({ className: e, alt: t, invertColors: n = !1, icon: r, src: i, iconClassNames: a, onClick: o = () => {}, size: s = "md", variant: c = "primary", iconAs: l = zo, isActive: u = !1, children: d, ...f }, p) => {
	let m = n ? "inverse-" : "", h = u ? `${c}-` : "", g = l;
	return /* @__PURE__ */ B.createElement("button", {
		"aria-label": t,
		className: (0, Lr.default)("btn-icon", `btn-icon-${m}${c}`, `btn-icon-${s}`, { [`btn-icon-${m}${h}active`]: u }, e),
		onClick: o,
		type: "button",
		ref: p,
		...f
	}, /* @__PURE__ */ B.createElement("span", { className: "btn-icon__icon-container" }, g && /* @__PURE__ */ B.createElement(g, {
		className: (0, Lr.default)("btn-icon__icon", a),
		icon: r,
		src: i
	})));
});
function Yo({ tooltipPlacement: e = "top", tooltipContent: t, ...n }) {
	let r = n.invertColors ? "inverse-" : "";
	return /* @__PURE__ */ B.createElement(Wo, {
		placement: e,
		overlay: /* @__PURE__ */ B.createElement(qo, {
			id: `iconbutton-tooltip-${e}`,
			variant: r ? "light" : void 0
		}, t)
	}, /* @__PURE__ */ B.createElement(Jo, { ...n }));
}
Jo.IconButtonWithTooltip = Yo;
//#endregion
export { x as C, o as D, u as E, c as O, y as S, m as T, Ln as _, Qa as a, hn as b, Yn as c, V as d, Bn as f, Nn as g, In as h, Fo as i, Wn as l, Rn as m, Bo as n, ri as o, zn as p, zo as r, cr as s, Jo as t, Vn as u, On as v, b as w, v as x, En as y };
