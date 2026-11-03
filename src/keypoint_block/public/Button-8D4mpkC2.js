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
	var x = Array.isArray, S = Object.prototype.hasOwnProperty, C = { current: null }, ee = {
		key: !0,
		ref: !0,
		__self: !0,
		__source: !0
	};
	function te(e, n, r) {
		var i, a = {}, o = null, s = null;
		if (n != null) for (i in n.ref !== void 0 && (s = n.ref), n.key !== void 0 && (o = "" + n.key), n) S.call(n, i) && !ee.hasOwnProperty(i) && (a[i] = n[i]);
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
	function ne(e, n) {
		return {
			$$typeof: t,
			type: e.type,
			key: n,
			ref: e.ref,
			props: e.props,
			_owner: e._owner
		};
	}
	function re(e) {
		return typeof e == "object" && !!e && e.$$typeof === t;
	}
	function ie(e) {
		var t = {
			"=": "=0",
			":": "=2"
		};
		return "$" + e.replace(/[=:]/g, function(e) {
			return t[e];
		});
	}
	var ae = /\/+/g;
	function oe(e, t) {
		return typeof e == "object" && e && e.key != null ? ie("" + e.key) : t.toString(36);
	}
	function se(e, r, i, a, o) {
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
		if (c) return c = e, o = o(c), e = a === "" ? "." + oe(c, 0) : a, x(o) ? (i = "", e != null && (i = e.replace(ae, "$&/") + "/"), se(o, r, i, "", function(e) {
			return e;
		})) : o != null && (re(o) && (o = ne(o, i + (!o.key || c && c.key === o.key ? "" : ("" + o.key).replace(ae, "$&/") + "/") + e)), r.push(o)), 1;
		if (c = 0, a = a === "" ? "." : a + ":", x(e)) for (var l = 0; l < e.length; l++) {
			s = e[l];
			var u = a + oe(s, l);
			c += se(s, r, i, u, o);
		}
		else if (u = p(e), typeof u == "function") for (e = u.call(e), l = 0; !(s = e.next()).done;) s = s.value, u = a + oe(s, l++), c += se(s, r, i, u, o);
		else if (s === "object") throw r = String(e), Error("Objects are not valid as a React child (found: " + (r === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : r) + "). If you meant to render a collection of children, use an array instead.");
		return c;
	}
	function ce(e, t, n) {
		if (e == null) return e;
		var r = [], i = 0;
		return se(e, r, "", "", function(e) {
			return t.call(n, e, i++);
		}), r;
	}
	function w(e) {
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
	var T = { current: null }, E = { transition: null }, D = {
		ReactCurrentDispatcher: T,
		ReactCurrentBatchConfig: E,
		ReactCurrentOwner: C
	};
	function le() {
		throw Error("act(...) is not supported in production builds of React.");
	}
	e.Children = {
		map: ce,
		forEach: function(e, t, n) {
			ce(e, function() {
				t.apply(this, arguments);
			}, n);
		},
		count: function(e) {
			var t = 0;
			return ce(e, function() {
				t++;
			}), t;
		},
		toArray: function(e) {
			return ce(e, function(e) {
				return e;
			}) || [];
		},
		only: function(e) {
			if (!re(e)) throw Error("React.Children.only expected to receive a single React element child.");
			return e;
		}
	}, e.Component = _, e.Fragment = r, e.Profiler = a, e.PureComponent = y, e.StrictMode = i, e.Suspense = l, e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = D, e.act = le, e.cloneElement = function(e, n, r) {
		if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
		var i = h({}, e.props), a = e.key, o = e.ref, s = e._owner;
		if (n != null) {
			if (n.ref !== void 0 && (o = n.ref, s = C.current), n.key !== void 0 && (a = "" + n.key), e.type && e.type.defaultProps) var c = e.type.defaultProps;
			for (l in n) S.call(n, l) && !ee.hasOwnProperty(l) && (i[l] = n[l] === void 0 && c !== void 0 ? c[l] : n[l]);
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
	}, e.createElement = te, e.createFactory = function(e) {
		var t = te.bind(null, e);
		return t.type = e, t;
	}, e.createRef = function() {
		return { current: null };
	}, e.forwardRef = function(e) {
		return {
			$$typeof: c,
			render: e
		};
	}, e.isValidElement = re, e.lazy = function(e) {
		return {
			$$typeof: d,
			_payload: {
				_status: -1,
				_result: e
			},
			_init: w
		};
	}, e.memo = function(e, t) {
		return {
			$$typeof: u,
			type: e,
			compare: t === void 0 ? null : t
		};
	}, e.startTransition = function(e) {
		var t = E.transition;
		E.transition = {};
		try {
			e();
		} finally {
			E.transition = t;
		}
	}, e.unstable_act = le, e.useCallback = function(e, t) {
		return T.current.useCallback(e, t);
	}, e.useContext = function(e) {
		return T.current.useContext(e);
	}, e.useDebugValue = function() {}, e.useDeferredValue = function(e) {
		return T.current.useDeferredValue(e);
	}, e.useEffect = function(e, t) {
		return T.current.useEffect(e, t);
	}, e.useId = function() {
		return T.current.useId();
	}, e.useImperativeHandle = function(e, t, n) {
		return T.current.useImperativeHandle(e, t, n);
	}, e.useInsertionEffect = function(e, t) {
		return T.current.useInsertionEffect(e, t);
	}, e.useLayoutEffect = function(e, t) {
		return T.current.useLayoutEffect(e, t);
	}, e.useMemo = function(e, t) {
		return T.current.useMemo(e, t);
	}, e.useReducer = function(e, t, n) {
		return T.current.useReducer(e, t, n);
	}, e.useRef = function(e) {
		return T.current.useRef(e);
	}, e.useState = function(e) {
		return T.current.useState(e);
	}, e.useSyncExternalStore = function(e, t, n) {
		return T.current.useSyncExternalStore(e, t, n);
	}, e.useTransition = function() {
		return T.current.useTransition();
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
		if (h = !1, y(e), !m) if (n(c) !== null) m = !0, ce(x);
		else {
			var t = n(l);
			t !== null && w(b, t.startTime - e);
		}
	}
	function x(t, i) {
		m = !1, h && (h = !1, _(ee), ee = -1), p = !0;
		var a = f;
		try {
			for (y(i), d = n(c); d !== null && (!(d.expirationTime > i) || t && !re());) {
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
				g !== null && w(b, g.startTime - i), u = !1;
			}
			return u;
		} finally {
			d = null, f = a, p = !1;
		}
	}
	var S = !1, C = null, ee = -1, te = 5, ne = -1;
	function re() {
		return !(e.unstable_now() - ne < te);
	}
	function ie() {
		if (C !== null) {
			var t = e.unstable_now();
			ne = t;
			var n = !0;
			try {
				n = C(!0, t);
			} finally {
				n ? ae() : (S = !1, C = null);
			}
		} else S = !1;
	}
	var ae;
	if (typeof v == "function") ae = function() {
		v(ie);
	};
	else if (typeof MessageChannel < "u") {
		var oe = new MessageChannel(), se = oe.port2;
		oe.port1.onmessage = ie, ae = function() {
			se.postMessage(null);
		};
	} else ae = function() {
		g(ie, 0);
	};
	function ce(e) {
		C = e, S || (S = !0, ae());
	}
	function w(t, n) {
		ee = g(function() {
			t(e.unstable_now());
		}, n);
	}
	e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(e) {
		e.callback = null;
	}, e.unstable_continueExecution = function() {
		m || p || (m = !0, ce(x));
	}, e.unstable_forceFrameRate = function(e) {
		0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : te = 0 < e ? Math.floor(1e3 / e) : 5;
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
		}, a > o ? (r.sortIndex = a, t(l, r), n(c) === null && r === n(l) && (h ? (_(ee), ee = -1) : h = !0, w(b, a - o))) : (r.sortIndex = s, t(c, r), m || p || (m = !0, ce(x))), r;
	}, e.unstable_shouldYield = re, e.unstable_wrapCallback = function(e) {
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
	var C = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ee = Symbol.for("react.element"), te = Symbol.for("react.portal"), ne = Symbol.for("react.fragment"), re = Symbol.for("react.strict_mode"), ie = Symbol.for("react.profiler"), ae = Symbol.for("react.provider"), oe = Symbol.for("react.context"), se = Symbol.for("react.forward_ref"), ce = Symbol.for("react.suspense"), w = Symbol.for("react.suspense_list"), T = Symbol.for("react.memo"), E = Symbol.for("react.lazy"), D = Symbol.for("react.offscreen"), le = Symbol.iterator;
	function ue(e) {
		return typeof e != "object" || !e ? null : (e = le && e[le] || e["@@iterator"], typeof e == "function" ? e : null);
	}
	var O = Object.assign, de;
	function fe(e) {
		if (de === void 0) try {
			throw Error();
		} catch (e) {
			var t = e.stack.trim().match(/\n( *(at )?)/);
			de = t && t[1] || "";
		}
		return "\n" + de + e;
	}
	var pe = !1;
	function me(e, t) {
		if (!e || pe) return "";
		pe = !0;
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
			pe = !1, Error.prepareStackTrace = n;
		}
		return (e = e ? e.displayName || e.name : "") ? fe(e) : "";
	}
	function he(e) {
		switch (e.tag) {
			case 5: return fe(e.type);
			case 16: return fe("Lazy");
			case 13: return fe("Suspense");
			case 19: return fe("SuspenseList");
			case 0:
			case 2:
			case 15: return e = me(e.type, !1), e;
			case 11: return e = me(e.type.render, !1), e;
			case 1: return e = me(e.type, !0), e;
			default: return "";
		}
	}
	function ge(e) {
		if (e == null) return null;
		if (typeof e == "function") return e.displayName || e.name || null;
		if (typeof e == "string") return e;
		switch (e) {
			case ne: return "Fragment";
			case te: return "Portal";
			case ie: return "Profiler";
			case re: return "StrictMode";
			case ce: return "Suspense";
			case w: return "SuspenseList";
		}
		if (typeof e == "object") switch (e.$$typeof) {
			case oe: return (e.displayName || "Context") + ".Consumer";
			case ae: return (e._context.displayName || "Context") + ".Provider";
			case se:
				var t = e.render;
				return e = e.displayName, e ||= (e = t.displayName || t.name || "", e === "" ? "ForwardRef" : "ForwardRef(" + e + ")"), e;
			case T: return t = e.displayName || null, t === null ? ge(e.type) || "Memo" : t;
			case E:
				t = e._payload, e = e._init;
				try {
					return ge(e(t));
				} catch {}
		}
		return null;
	}
	function _e(e) {
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
			case 16: return ge(t);
			case 8: return t === re ? "StrictMode" : "Mode";
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
	function ve(e) {
		switch (typeof e) {
			case "boolean":
			case "number":
			case "string":
			case "undefined": return e;
			case "object": return e;
			default: return "";
		}
	}
	function ye(e) {
		var t = e.type;
		return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
	}
	function be(e) {
		var t = ye(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
	function xe(e) {
		e._valueTracker ||= be(e);
	}
	function Se(e) {
		if (!e) return !1;
		var t = e._valueTracker;
		if (!t) return !0;
		var n = t.getValue(), r = "";
		return e && (r = ye(e) ? e.checked ? "true" : "false" : e.value), e = r, e === n ? !1 : (t.setValue(e), !0);
	}
	function Ce(e) {
		if (e ||= typeof document < "u" ? document : void 0, e === void 0) return null;
		try {
			return e.activeElement || e.body;
		} catch {
			return e.body;
		}
	}
	function we(e, t) {
		var n = t.checked;
		return O({}, t, {
			defaultChecked: void 0,
			defaultValue: void 0,
			value: void 0,
			checked: n ?? e._wrapperState.initialChecked
		});
	}
	function Te(e, t) {
		var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked == null ? t.defaultChecked : t.checked;
		n = ve(t.value == null ? n : t.value), e._wrapperState = {
			initialChecked: r,
			initialValue: n,
			controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
		};
	}
	function Ee(e, t) {
		t = t.checked, t != null && S(e, "checked", t, !1);
	}
	function De(e, t) {
		Ee(e, t);
		var n = ve(t.value), r = t.type;
		if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
		else if (r === "submit" || r === "reset") {
			e.removeAttribute("value");
			return;
		}
		t.hasOwnProperty("value") ? ke(e, t.type, n) : t.hasOwnProperty("defaultValue") && ke(e, t.type, ve(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
	}
	function Oe(e, t, n) {
		if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
			var r = t.type;
			if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
			t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
		}
		n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
	}
	function ke(e, t, n) {
		(t !== "number" || Ce(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
	}
	var Ae = Array.isArray;
	function je(e, t, n, r) {
		if (e = e.options, t) {
			t = {};
			for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
			for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0);
		} else {
			for (n = "" + ve(n), t = null, i = 0; i < e.length; i++) {
				if (e[i].value === n) {
					e[i].selected = !0, r && (e[i].defaultSelected = !0);
					return;
				}
				t !== null || e[i].disabled || (t = e[i]);
			}
			t !== null && (t.selected = !0);
		}
	}
	function Me(e, t) {
		if (t.dangerouslySetInnerHTML != null) throw Error(r(91));
		return O({}, t, {
			value: void 0,
			defaultValue: void 0,
			children: "" + e._wrapperState.initialValue
		});
	}
	function Ne(e, t) {
		var n = t.value;
		if (n == null) {
			if (n = t.children, t = t.defaultValue, n != null) {
				if (t != null) throw Error(r(92));
				if (Ae(n)) {
					if (1 < n.length) throw Error(r(93));
					n = n[0];
				}
				t = n;
			}
			t ??= "", n = t;
		}
		e._wrapperState = { initialValue: ve(n) };
	}
	function Pe(e, t) {
		var n = ve(t.value), r = ve(t.defaultValue);
		n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
	}
	function Fe(e) {
		var t = e.textContent;
		t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
	}
	function Ie(e) {
		switch (e) {
			case "svg": return "http://www.w3.org/2000/svg";
			case "math": return "http://www.w3.org/1998/Math/MathML";
			default: return "http://www.w3.org/1999/xhtml";
		}
	}
	function Le(e, t) {
		return e == null || e === "http://www.w3.org/1999/xhtml" ? Ie(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
	}
	var Re, ze = function(e) {
		return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
			MSApp.execUnsafeLocalFunction(function() {
				return e(t, n, r, i);
			});
		} : e;
	}(function(e, t) {
		if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
		else {
			for (Re ||= document.createElement("div"), Re.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Re.firstChild; e.firstChild;) e.removeChild(e.firstChild);
			for (; t.firstChild;) e.appendChild(t.firstChild);
		}
	});
	function k(e, t) {
		if (t) {
			var n = e.firstChild;
			if (n && n === e.lastChild && n.nodeType === 3) {
				n.nodeValue = t;
				return;
			}
		}
		e.textContent = t;
	}
	var Be = {
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
	}, Ve = [
		"Webkit",
		"ms",
		"Moz",
		"O"
	];
	Object.keys(Be).forEach(function(e) {
		Ve.forEach(function(t) {
			t = t + e.charAt(0).toUpperCase() + e.substring(1), Be[t] = Be[e];
		});
	});
	function He(e, t, n) {
		return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Be.hasOwnProperty(e) && Be[e] ? ("" + t).trim() : t + "px";
	}
	function Ue(e, t) {
		for (var n in e = e.style, t) if (t.hasOwnProperty(n)) {
			var r = n.indexOf("--") === 0, i = He(n, t[n], r);
			n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i;
		}
	}
	var We = O({ menuitem: !0 }, {
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
	function Ge(e, t) {
		if (t) {
			if (We[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(r(137, e));
			if (t.dangerouslySetInnerHTML != null) {
				if (t.children != null) throw Error(r(60));
				if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(r(61));
			}
			if (t.style != null && typeof t.style != "object") throw Error(r(62));
		}
	}
	function Ke(e, t) {
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
	var qe = null;
	function Je(e) {
		return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
	}
	var Ye = null, Xe = null, Ze = null;
	function Qe(e) {
		if (e = Ki(e)) {
			if (typeof Ye != "function") throw Error(r(280));
			var t = e.stateNode;
			t && (t = Ji(t), Ye(e.stateNode, e.type, t));
		}
	}
	function $e(e) {
		Xe ? Ze ? Ze.push(e) : Ze = [e] : Xe = e;
	}
	function et() {
		if (Xe) {
			var e = Xe, t = Ze;
			if (Ze = Xe = null, Qe(e), t) for (e = 0; e < t.length; e++) Qe(t[e]);
		}
	}
	function tt(e, t) {
		return e(t);
	}
	function nt() {}
	var rt = !1;
	function it(e, t, n) {
		if (rt) return e(t, n);
		rt = !0;
		try {
			return tt(e, t, n);
		} finally {
			rt = !1, (Xe !== null || Ze !== null) && (nt(), et());
		}
	}
	function at(e, t) {
		var n = e.stateNode;
		if (n === null) return null;
		var i = Ji(n);
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
	var ot = !1;
	if (c) try {
		var st = {};
		Object.defineProperty(st, "passive", { get: function() {
			ot = !0;
		} }), window.addEventListener("test", st, st), window.removeEventListener("test", st, st);
	} catch {
		ot = !1;
	}
	function ct(e, t, n, r, i, a, o, s, c) {
		var l = Array.prototype.slice.call(arguments, 3);
		try {
			t.apply(n, l);
		} catch (e) {
			this.onError(e);
		}
	}
	var lt = !1, ut = null, dt = !1, ft = null, pt = { onError: function(e) {
		lt = !0, ut = e;
	} };
	function mt(e, t, n, r, i, a, o, s, c) {
		lt = !1, ut = null, ct.apply(pt, arguments);
	}
	function ht(e, t, n, i, a, o, s, c, l) {
		if (mt.apply(this, arguments), lt) {
			if (lt) {
				var u = ut;
				lt = !1, ut = null;
			} else throw Error(r(198));
			dt || (dt = !0, ft = u);
		}
	}
	function A(e) {
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
	function gt(e) {
		if (e.tag === 13) {
			var t = e.memoizedState;
			if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
		}
		return null;
	}
	function _t(e) {
		if (A(e) !== e) throw Error(r(188));
	}
	function vt(e) {
		var t = e.alternate;
		if (!t) {
			if (t = A(e), t === null) throw Error(r(188));
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
					if (o === n) return _t(a), e;
					if (o === i) return _t(a), t;
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
	function yt(e) {
		return e = vt(e), e === null ? null : bt(e);
	}
	function bt(e) {
		if (e.tag === 5 || e.tag === 6) return e;
		for (e = e.child; e !== null;) {
			var t = bt(e);
			if (t !== null) return t;
			e = e.sibling;
		}
		return null;
	}
	var xt = n.unstable_scheduleCallback, St = n.unstable_cancelCallback, Ct = n.unstable_shouldYield, wt = n.unstable_requestPaint, j = n.unstable_now, Tt = n.unstable_getCurrentPriorityLevel, Et = n.unstable_ImmediatePriority, Dt = n.unstable_UserBlockingPriority, M = n.unstable_NormalPriority, Ot = n.unstable_LowPriority, kt = n.unstable_IdlePriority, At = null, jt = null;
	function Mt(e) {
		if (jt && typeof jt.onCommitFiberRoot == "function") try {
			jt.onCommitFiberRoot(At, e, void 0, (e.current.flags & 128) == 128);
		} catch {}
	}
	var N = Math.clz32 ? Math.clz32 : Ft, Nt = Math.log, Pt = Math.LN2;
	function Ft(e) {
		return e >>>= 0, e === 0 ? 32 : 31 - (Nt(e) / Pt | 0) | 0;
	}
	var It = 64, Lt = 4194304;
	function Rt(e) {
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
	function zt(e, t) {
		var n = e.pendingLanes;
		if (n === 0) return 0;
		var r = 0, i = e.suspendedLanes, a = e.pingedLanes, o = n & 268435455;
		if (o !== 0) {
			var s = o & ~i;
			s === 0 ? (a &= o, a !== 0 && (r = Rt(a))) : r = Rt(s);
		} else o = n & ~i, o === 0 ? a !== 0 && (r = Rt(a)) : r = Rt(o);
		if (r === 0) return 0;
		if (t !== 0 && t !== r && (t & i) === 0 && (i = r & -r, a = t & -t, i >= a || i === 16 && a & 4194240)) return t;
		if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t;) n = 31 - N(t), i = 1 << n, r |= e[n], t &= ~i;
		return r;
	}
	function Bt(e, t) {
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
	function Vt(e, t) {
		for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, a = e.pendingLanes; 0 < a;) {
			var o = 31 - N(a), s = 1 << o, c = i[o];
			c === -1 ? ((s & n) === 0 || (s & r) !== 0) && (i[o] = Bt(s, t)) : c <= t && (e.expiredLanes |= s), a &= ~s;
		}
	}
	function Ht(e) {
		return e = e.pendingLanes & -1073741825, e === 0 ? e & 1073741824 ? 1073741824 : 0 : e;
	}
	function Ut() {
		var e = It;
		return It <<= 1, !(It & 4194240) && (It = 64), e;
	}
	function Wt(e) {
		for (var t = [], n = 0; 31 > n; n++) t.push(e);
		return t;
	}
	function Gt(e, t, n) {
		e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - N(t), e[t] = n;
	}
	function Kt(e, t) {
		var n = e.pendingLanes & ~t;
		e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
		var r = e.eventTimes;
		for (e = e.expirationTimes; 0 < n;) {
			var i = 31 - N(n), a = 1 << i;
			t[i] = 0, r[i] = -1, e[i] = -1, n &= ~a;
		}
	}
	function qt(e, t) {
		var n = e.entangledLanes |= t;
		for (e = e.entanglements; n;) {
			var r = 31 - N(n), i = 1 << r;
			i & t | e[r] & t && (e[r] |= t), n &= ~i;
		}
	}
	var P = 0;
	function Jt(e) {
		return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
	}
	var Yt, Xt, Zt, Qt, $t, en = !1, tn = [], nn = null, rn = null, an = null, on = /* @__PURE__ */ new Map(), sn = /* @__PURE__ */ new Map(), cn = [], ln = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
	function un(e, t) {
		switch (e) {
			case "focusin":
			case "focusout":
				nn = null;
				break;
			case "dragenter":
			case "dragleave":
				rn = null;
				break;
			case "mouseover":
			case "mouseout":
				an = null;
				break;
			case "pointerover":
			case "pointerout":
				on.delete(t.pointerId);
				break;
			case "gotpointercapture":
			case "lostpointercapture": sn.delete(t.pointerId);
		}
	}
	function F(e, t, n, r, i, a) {
		return e === null || e.nativeEvent !== a ? (e = {
			blockedOn: t,
			domEventName: n,
			eventSystemFlags: r,
			nativeEvent: a,
			targetContainers: [i]
		}, t !== null && (t = Ki(t), t !== null && Xt(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
	}
	function dn(e, t, n, r, i) {
		switch (t) {
			case "focusin": return nn = F(nn, e, t, n, r, i), !0;
			case "dragenter": return rn = F(rn, e, t, n, r, i), !0;
			case "mouseover": return an = F(an, e, t, n, r, i), !0;
			case "pointerover":
				var a = i.pointerId;
				return on.set(a, F(on.get(a) || null, e, t, n, r, i)), !0;
			case "gotpointercapture": return a = i.pointerId, sn.set(a, F(sn.get(a) || null, e, t, n, r, i)), !0;
		}
		return !1;
	}
	function fn(e) {
		var t = Gi(e.target);
		if (t !== null) {
			var n = A(t);
			if (n !== null) {
				if (t = n.tag, t === 13) {
					if (t = gt(n), t !== null) {
						e.blockedOn = t, $t(e.priority, function() {
							Zt(n);
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
	function pn(e) {
		if (e.blockedOn !== null) return !1;
		for (var t = e.targetContainers; 0 < t.length;) {
			var n = wn(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
			if (n === null) {
				n = e.nativeEvent;
				var r = new n.constructor(n.type, n);
				qe = r, n.target.dispatchEvent(r), qe = null;
			} else return t = Ki(n), t !== null && Xt(t), e.blockedOn = n, !1;
			t.shift();
		}
		return !0;
	}
	function mn(e, t, n) {
		pn(e) && n.delete(t);
	}
	function hn() {
		en = !1, nn !== null && pn(nn) && (nn = null), rn !== null && pn(rn) && (rn = null), an !== null && pn(an) && (an = null), on.forEach(mn), sn.forEach(mn);
	}
	function gn(e, t) {
		e.blockedOn === t && (e.blockedOn = null, en || (en = !0, n.unstable_scheduleCallback(n.unstable_NormalPriority, hn)));
	}
	function _n(e) {
		function t(t) {
			return gn(t, e);
		}
		if (0 < tn.length) {
			gn(tn[0], e);
			for (var n = 1; n < tn.length; n++) {
				var r = tn[n];
				r.blockedOn === e && (r.blockedOn = null);
			}
		}
		for (nn !== null && gn(nn, e), rn !== null && gn(rn, e), an !== null && gn(an, e), on.forEach(t), sn.forEach(t), n = 0; n < cn.length; n++) r = cn[n], r.blockedOn === e && (r.blockedOn = null);
		for (; 0 < cn.length && (n = cn[0], n.blockedOn === null);) fn(n), n.blockedOn === null && cn.shift();
	}
	var vn = C.ReactCurrentBatchConfig, yn = !0;
	function bn(e, t, n, r) {
		var i = P, a = vn.transition;
		vn.transition = null;
		try {
			P = 1, Sn(e, t, n, r);
		} finally {
			P = i, vn.transition = a;
		}
	}
	function xn(e, t, n, r) {
		var i = P, a = vn.transition;
		vn.transition = null;
		try {
			P = 4, Sn(e, t, n, r);
		} finally {
			P = i, vn.transition = a;
		}
	}
	function Sn(e, t, n, r) {
		if (yn) {
			var i = wn(e, t, n, r);
			if (i === null) _i(e, t, r, Cn, n), un(e, r);
			else if (dn(i, e, t, n, r)) r.stopPropagation();
			else if (un(e, r), t & 4 && -1 < ln.indexOf(e)) {
				for (; i !== null;) {
					var a = Ki(i);
					if (a !== null && Yt(a), a = wn(e, t, n, r), a === null && _i(e, t, r, Cn, n), a === i) break;
					i = a;
				}
				i !== null && r.stopPropagation();
			} else _i(e, t, r, null, n);
		}
	}
	var Cn = null;
	function wn(e, t, n, r) {
		if (Cn = null, e = Je(r), e = Gi(e), e !== null) if (t = A(e), t === null) e = null;
		else if (n = t.tag, n === 13) {
			if (e = gt(t), e !== null) return e;
			e = null;
		} else if (n === 3) {
			if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
			e = null;
		} else t !== e && (e = null);
		return Cn = e, null;
	}
	function Tn(e) {
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
			case "message": switch (Tt()) {
				case Et: return 1;
				case Dt: return 4;
				case M:
				case Ot: return 16;
				case kt: return 536870912;
				default: return 16;
			}
			default: return 16;
		}
	}
	var En = null, Dn = null, On = null;
	function kn() {
		if (On) return On;
		var e, t = Dn, n = t.length, r, i = "value" in En ? En.value : En.textContent, a = i.length;
		for (e = 0; e < n && t[e] === i[e]; e++);
		var o = n - e;
		for (r = 1; r <= o && t[n - r] === i[a - r]; r++);
		return On = i.slice(e, 1 < r ? 1 - r : void 0);
	}
	function An(e) {
		var t = e.keyCode;
		return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
	}
	function jn() {
		return !0;
	}
	function Mn() {
		return !1;
	}
	function Nn(e) {
		function t(t, n, r, i, a) {
			for (var o in this._reactName = t, this._targetInst = r, this.type = n, this.nativeEvent = i, this.target = a, this.currentTarget = null, e) e.hasOwnProperty(o) && (t = e[o], this[o] = t ? t(i) : i[o]);
			return this.isDefaultPrevented = (i.defaultPrevented == null ? !1 === i.returnValue : i.defaultPrevented) ? jn : Mn, this.isPropagationStopped = Mn, this;
		}
		return O(t.prototype, {
			preventDefault: function() {
				this.defaultPrevented = !0;
				var e = this.nativeEvent;
				e && (e.preventDefault ? e.preventDefault() : typeof e.returnValue != "unknown" && (e.returnValue = !1), this.isDefaultPrevented = jn);
			},
			stopPropagation: function() {
				var e = this.nativeEvent;
				e && (e.stopPropagation ? e.stopPropagation() : typeof e.cancelBubble != "unknown" && (e.cancelBubble = !0), this.isPropagationStopped = jn);
			},
			persist: function() {},
			isPersistent: jn
		}), t;
	}
	var Pn = {
		eventPhase: 0,
		bubbles: 0,
		cancelable: 0,
		timeStamp: function(e) {
			return e.timeStamp || Date.now();
		},
		defaultPrevented: 0,
		isTrusted: 0
	}, Fn = Nn(Pn), In = O({}, Pn, {
		view: 0,
		detail: 0
	}), Ln = Nn(In), Rn, zn, Bn, Vn = O({}, In, {
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
		getModifierState: Qn,
		button: 0,
		buttons: 0,
		relatedTarget: function(e) {
			return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
		},
		movementX: function(e) {
			return "movementX" in e ? e.movementX : (e !== Bn && (Bn && e.type === "mousemove" ? (Rn = e.screenX - Bn.screenX, zn = e.screenY - Bn.screenY) : zn = Rn = 0, Bn = e), Rn);
		},
		movementY: function(e) {
			return "movementY" in e ? e.movementY : zn;
		}
	}), Hn = Nn(Vn), Un = Nn(O({}, Vn, { dataTransfer: 0 })), Wn = Nn(O({}, In, { relatedTarget: 0 })), Gn = Nn(O({}, Pn, {
		animationName: 0,
		elapsedTime: 0,
		pseudoElement: 0
	})), Kn = Nn(O({}, Pn, { clipboardData: function(e) {
		return "clipboardData" in e ? e.clipboardData : window.clipboardData;
	} })), qn = Nn(O({}, Pn, { data: 0 })), Jn = {
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
	}, Yn = {
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
	}, Xn = {
		Alt: "altKey",
		Control: "ctrlKey",
		Meta: "metaKey",
		Shift: "shiftKey"
	};
	function Zn(e) {
		var t = this.nativeEvent;
		return t.getModifierState ? t.getModifierState(e) : (e = Xn[e]) ? !!t[e] : !1;
	}
	function Qn() {
		return Zn;
	}
	var $n = Nn(O({}, In, {
		key: function(e) {
			if (e.key) {
				var t = Jn[e.key] || e.key;
				if (t !== "Unidentified") return t;
			}
			return e.type === "keypress" ? (e = An(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Yn[e.keyCode] || "Unidentified" : "";
		},
		code: 0,
		location: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		repeat: 0,
		locale: 0,
		getModifierState: Qn,
		charCode: function(e) {
			return e.type === "keypress" ? An(e) : 0;
		},
		keyCode: function(e) {
			return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
		},
		which: function(e) {
			return e.type === "keypress" ? An(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
		}
	})), er = Nn(O({}, Vn, {
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
	})), tr = Nn(O({}, In, {
		touches: 0,
		targetTouches: 0,
		changedTouches: 0,
		altKey: 0,
		metaKey: 0,
		ctrlKey: 0,
		shiftKey: 0,
		getModifierState: Qn
	})), nr = Nn(O({}, Pn, {
		propertyName: 0,
		elapsedTime: 0,
		pseudoElement: 0
	})), rr = Nn(O({}, Vn, {
		deltaX: function(e) {
			return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
		},
		deltaY: function(e) {
			return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
		},
		deltaZ: 0,
		deltaMode: 0
	})), ir = [
		9,
		13,
		27,
		32
	], ar = c && "CompositionEvent" in window, or = null;
	c && "documentMode" in document && (or = document.documentMode);
	var sr = c && "TextEvent" in window && !or, cr = c && (!ar || or && 8 < or && 11 >= or), lr = " ", ur = !1;
	function dr(e, t) {
		switch (e) {
			case "keyup": return ir.indexOf(t.keyCode) !== -1;
			case "keydown": return t.keyCode !== 229;
			case "keypress":
			case "mousedown":
			case "focusout": return !0;
			default: return !1;
		}
	}
	function fr(e) {
		return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
	}
	var pr = !1;
	function mr(e, t) {
		switch (e) {
			case "compositionend": return fr(t);
			case "keypress": return t.which === 32 ? (ur = !0, lr) : null;
			case "textInput": return e = t.data, e === lr && ur ? null : e;
			default: return null;
		}
	}
	function hr(e, t) {
		if (pr) return e === "compositionend" || !ar && dr(e, t) ? (e = kn(), On = Dn = En = null, pr = !1, e) : null;
		switch (e) {
			case "paste": return null;
			case "keypress":
				if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
					if (t.char && 1 < t.char.length) return t.char;
					if (t.which) return String.fromCharCode(t.which);
				}
				return null;
			case "compositionend": return cr && t.locale !== "ko" ? null : t.data;
			default: return null;
		}
	}
	var gr = {
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
	function _r(e) {
		var t = e && e.nodeName && e.nodeName.toLowerCase();
		return t === "input" ? !!gr[e.type] : t === "textarea";
	}
	function vr(e, t, n, r) {
		$e(r), t = yi(t, "onChange"), 0 < t.length && (n = new Fn("onChange", "change", null, n, r), e.push({
			event: n,
			listeners: t
		}));
	}
	var yr = null, br = null;
	function xr(e) {
		fi(e, 0);
	}
	function Sr(e) {
		if (Se(qi(e))) return e;
	}
	function Cr(e, t) {
		if (e === "change") return t;
	}
	var wr = !1;
	if (c) {
		var Tr;
		if (c) {
			var Er = "oninput" in document;
			if (!Er) {
				var Dr = document.createElement("div");
				Dr.setAttribute("oninput", "return;"), Er = typeof Dr.oninput == "function";
			}
			Tr = Er;
		} else Tr = !1;
		wr = Tr && (!document.documentMode || 9 < document.documentMode);
	}
	function Or() {
		yr && (yr.detachEvent("onpropertychange", kr), br = yr = null);
	}
	function kr(e) {
		if (e.propertyName === "value" && Sr(br)) {
			var t = [];
			vr(t, br, e, Je(e)), it(xr, t);
		}
	}
	function Ar(e, t, n) {
		e === "focusin" ? (Or(), yr = t, br = n, yr.attachEvent("onpropertychange", kr)) : e === "focusout" && Or();
	}
	function jr(e) {
		if (e === "selectionchange" || e === "keyup" || e === "keydown") return Sr(br);
	}
	function Mr(e, t) {
		if (e === "click") return Sr(t);
	}
	function Nr(e, t) {
		if (e === "input" || e === "change") return Sr(t);
	}
	function Pr(e, t) {
		return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t;
	}
	var Fr = typeof Object.is == "function" ? Object.is : Pr;
	function Ir(e, t) {
		if (Fr(e, t)) return !0;
		if (typeof e != "object" || !e || typeof t != "object" || !t) return !1;
		var n = Object.keys(e), r = Object.keys(t);
		if (n.length !== r.length) return !1;
		for (r = 0; r < n.length; r++) {
			var i = n[r];
			if (!l.call(t, i) || !Fr(e[i], t[i])) return !1;
		}
		return !0;
	}
	function Lr(e) {
		for (; e && e.firstChild;) e = e.firstChild;
		return e;
	}
	function Rr(e, t) {
		var n = Lr(e);
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
			n = Lr(n);
		}
	}
	function zr(e, t) {
		return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? zr(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
	}
	function Br() {
		for (var e = window, t = Ce(); t instanceof e.HTMLIFrameElement;) {
			try {
				var n = typeof t.contentWindow.location.href == "string";
			} catch {
				n = !1;
			}
			if (n) e = t.contentWindow;
			else break;
			t = Ce(e.document);
		}
		return t;
	}
	function Vr(e) {
		var t = e && e.nodeName && e.nodeName.toLowerCase();
		return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
	}
	function Hr(e) {
		var t = Br(), n = e.focusedElem, r = e.selectionRange;
		if (t !== n && n && n.ownerDocument && zr(n.ownerDocument.documentElement, n)) {
			if (r !== null && Vr(n)) {
				if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
				else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
					e = e.getSelection();
					var i = n.textContent.length, a = Math.min(r.start, i);
					r = r.end === void 0 ? a : Math.min(r.end, i), !e.extend && a > r && (i = r, r = a, a = i), i = Rr(n, a);
					var o = Rr(n, r);
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
	var Ur = c && "documentMode" in document && 11 >= document.documentMode, Wr = null, Gr = null, Kr = null, qr = !1;
	function Jr(e, t, n) {
		var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
		qr || Wr == null || Wr !== Ce(r) || (r = Wr, "selectionStart" in r && Vr(r) ? r = {
			start: r.selectionStart,
			end: r.selectionEnd
		} : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
			anchorNode: r.anchorNode,
			anchorOffset: r.anchorOffset,
			focusNode: r.focusNode,
			focusOffset: r.focusOffset
		}), Kr && Ir(Kr, r) || (Kr = r, r = yi(Gr, "onSelect"), 0 < r.length && (t = new Fn("onSelect", "select", null, t, n), e.push({
			event: t,
			listeners: r
		}), t.target = Wr)));
	}
	function Yr(e, t) {
		var n = {};
		return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
	}
	var Xr = {
		animationend: Yr("Animation", "AnimationEnd"),
		animationiteration: Yr("Animation", "AnimationIteration"),
		animationstart: Yr("Animation", "AnimationStart"),
		transitionend: Yr("Transition", "TransitionEnd")
	}, Zr = {}, Qr = {};
	c && (Qr = document.createElement("div").style, "AnimationEvent" in window || (delete Xr.animationend.animation, delete Xr.animationiteration.animation, delete Xr.animationstart.animation), "TransitionEvent" in window || delete Xr.transitionend.transition);
	function $r(e) {
		if (Zr[e]) return Zr[e];
		if (!Xr[e]) return e;
		var t = Xr[e], n;
		for (n in t) if (t.hasOwnProperty(n) && n in Qr) return Zr[e] = t[n];
		return e;
	}
	var ei = $r("animationend"), ti = $r("animationiteration"), ni = $r("animationstart"), ri = $r("transitionend"), ii = /* @__PURE__ */ new Map(), ai = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
	function oi(e, t) {
		ii.set(e, t), o(t, [e]);
	}
	for (var si = 0; si < ai.length; si++) {
		var ci = ai[si];
		oi(ci.toLowerCase(), "on" + (ci[0].toUpperCase() + ci.slice(1)));
	}
	oi(ei, "onAnimationEnd"), oi(ti, "onAnimationIteration"), oi(ni, "onAnimationStart"), oi("dblclick", "onDoubleClick"), oi("focusin", "onFocus"), oi("focusout", "onBlur"), oi(ri, "onTransitionEnd"), s("onMouseEnter", ["mouseout", "mouseover"]), s("onMouseLeave", ["mouseout", "mouseover"]), s("onPointerEnter", ["pointerout", "pointerover"]), s("onPointerLeave", ["pointerout", "pointerover"]), o("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), o("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), o("onBeforeInput", [
		"compositionend",
		"keypress",
		"textInput",
		"paste"
	]), o("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), o("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), o("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
	var li = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), ui = new Set("cancel close invalid load scroll toggle".split(" ").concat(li));
	function di(e, t, n) {
		var r = e.type || "unknown-event";
		e.currentTarget = n, ht(r, t, void 0, e), e.currentTarget = null;
	}
	function fi(e, t) {
		t = (t & 4) != 0;
		for (var n = 0; n < e.length; n++) {
			var r = e[n], i = r.event;
			r = r.listeners;
			a: {
				var a = void 0;
				if (t) for (var o = r.length - 1; 0 <= o; o--) {
					var s = r[o], c = s.instance, l = s.currentTarget;
					if (s = s.listener, c !== a && i.isPropagationStopped()) break a;
					di(i, s, l), a = c;
				}
				else for (o = 0; o < r.length; o++) {
					if (s = r[o], c = s.instance, l = s.currentTarget, s = s.listener, c !== a && i.isPropagationStopped()) break a;
					di(i, s, l), a = c;
				}
			}
		}
		if (dt) throw e = ft, dt = !1, ft = null, e;
	}
	function I(e, t) {
		var n = t[Hi];
		n === void 0 && (n = t[Hi] = /* @__PURE__ */ new Set());
		var r = e + "__bubble";
		n.has(r) || (gi(t, e, 2, !1), n.add(r));
	}
	function pi(e, t, n) {
		var r = 0;
		t && (r |= 4), gi(n, e, r, t);
	}
	var mi = "_reactListening" + Math.random().toString(36).slice(2);
	function hi(e) {
		if (!e[mi]) {
			e[mi] = !0, i.forEach(function(t) {
				t !== "selectionchange" && (ui.has(t) || pi(t, !1, e), pi(t, !0, e));
			});
			var t = e.nodeType === 9 ? e : e.ownerDocument;
			t === null || t[mi] || (t[mi] = !0, pi("selectionchange", !1, t));
		}
	}
	function gi(e, t, n, r) {
		switch (Tn(t)) {
			case 1:
				var i = bn;
				break;
			case 4:
				i = xn;
				break;
			default: i = Sn;
		}
		n = i.bind(null, t, n, e), i = void 0, !ot || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i === void 0 ? e.addEventListener(t, n, !0) : e.addEventListener(t, n, {
			capture: !0,
			passive: i
		}) : i === void 0 ? e.addEventListener(t, n, !1) : e.addEventListener(t, n, { passive: i });
	}
	function _i(e, t, n, r, i) {
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
					if (o = Gi(s), o === null) return;
					if (c = o.tag, c === 5 || c === 6) {
						r = a = o;
						continue a;
					}
					s = s.parentNode;
				}
			}
			r = r.return;
		}
		it(function() {
			var r = a, i = Je(n), o = [];
			a: {
				var s = ii.get(e);
				if (s !== void 0) {
					var c = Fn, l = e;
					switch (e) {
						case "keypress": if (An(n) === 0) break a;
						case "keydown":
						case "keyup":
							c = $n;
							break;
						case "focusin":
							l = "focus", c = Wn;
							break;
						case "focusout":
							l = "blur", c = Wn;
							break;
						case "beforeblur":
						case "afterblur":
							c = Wn;
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
							c = Hn;
							break;
						case "drag":
						case "dragend":
						case "dragenter":
						case "dragexit":
						case "dragleave":
						case "dragover":
						case "dragstart":
						case "drop":
							c = Un;
							break;
						case "touchcancel":
						case "touchend":
						case "touchmove":
						case "touchstart":
							c = tr;
							break;
						case ei:
						case ti:
						case ni:
							c = Gn;
							break;
						case ri:
							c = nr;
							break;
						case "scroll":
							c = Ln;
							break;
						case "wheel":
							c = rr;
							break;
						case "copy":
						case "cut":
						case "paste":
							c = Kn;
							break;
						case "gotpointercapture":
						case "lostpointercapture":
						case "pointercancel":
						case "pointerdown":
						case "pointermove":
						case "pointerout":
						case "pointerover":
						case "pointerup": c = er;
					}
					var u = (t & 4) != 0, d = !u && e === "scroll", f = u ? s === null ? null : s + "Capture" : s;
					u = [];
					for (var p = r, m; p !== null;) {
						m = p;
						var h = m.stateNode;
						if (m.tag === 5 && h !== null && (m = h, f !== null && (h = at(p, f), h != null && u.push(vi(p, h, m)))), d) break;
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
					if (s = e === "mouseover" || e === "pointerover", c = e === "mouseout" || e === "pointerout", s && n !== qe && (l = n.relatedTarget || n.fromElement) && (Gi(l) || l[Vi])) break a;
					if ((c || s) && (s = i.window === i ? i : (s = i.ownerDocument) ? s.defaultView || s.parentWindow : window, c ? (l = n.relatedTarget || n.toElement, c = r, l = l ? Gi(l) : null, l !== null && (d = A(l), l !== d || l.tag !== 5 && l.tag !== 6) && (l = null)) : (c = null, l = r), c !== l)) {
						if (u = Hn, h = "onMouseLeave", f = "onMouseEnter", p = "mouse", (e === "pointerout" || e === "pointerover") && (u = er, h = "onPointerLeave", f = "onPointerEnter", p = "pointer"), d = c == null ? s : qi(c), m = l == null ? s : qi(l), s = new u(h, p + "leave", c, n, i), s.target = d, s.relatedTarget = m, h = null, Gi(i) === r && (u = new u(f, p + "enter", l, n, i), u.target = m, u.relatedTarget = d, h = u), d = h, c && l) b: {
							for (u = c, f = l, p = 0, m = u; m; m = bi(m)) p++;
							for (m = 0, h = f; h; h = bi(h)) m++;
							for (; 0 < p - m;) u = bi(u), p--;
							for (; 0 < m - p;) f = bi(f), m--;
							for (; p--;) {
								if (u === f || f !== null && u === f.alternate) break b;
								u = bi(u), f = bi(f);
							}
							u = null;
						}
						else u = null;
						c !== null && xi(o, s, c, u, !1), l !== null && d !== null && xi(o, d, l, u, !0);
					}
				}
				a: {
					if (s = r ? qi(r) : window, c = s.nodeName && s.nodeName.toLowerCase(), c === "select" || c === "input" && s.type === "file") var g = Cr;
					else if (_r(s)) if (wr) g = Nr;
					else {
						g = jr;
						var _ = Ar;
					}
					else (c = s.nodeName) && c.toLowerCase() === "input" && (s.type === "checkbox" || s.type === "radio") && (g = Mr);
					if (g &&= g(e, r)) {
						vr(o, g, n, i);
						break a;
					}
					_ && _(e, s, r), e === "focusout" && (_ = s._wrapperState) && _.controlled && s.type === "number" && ke(s, "number", s.value);
				}
				switch (_ = r ? qi(r) : window, e) {
					case "focusin":
						(_r(_) || _.contentEditable === "true") && (Wr = _, Gr = r, Kr = null);
						break;
					case "focusout":
						Kr = Gr = Wr = null;
						break;
					case "mousedown":
						qr = !0;
						break;
					case "contextmenu":
					case "mouseup":
					case "dragend":
						qr = !1, Jr(o, n, i);
						break;
					case "selectionchange": if (Ur) break;
					case "keydown":
					case "keyup": Jr(o, n, i);
				}
				var v;
				if (ar) b: {
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
				else pr ? dr(e, n) && (y = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (y = "onCompositionStart");
				y && (cr && n.locale !== "ko" && (pr || y !== "onCompositionStart" ? y === "onCompositionEnd" && pr && (v = kn()) : (En = i, Dn = "value" in En ? En.value : En.textContent, pr = !0)), _ = yi(r, y), 0 < _.length && (y = new qn(y, e, null, n, i), o.push({
					event: y,
					listeners: _
				}), v ? y.data = v : (v = fr(n), v !== null && (y.data = v)))), (v = sr ? mr(e, n) : hr(e, n)) && (r = yi(r, "onBeforeInput"), 0 < r.length && (i = new qn("onBeforeInput", "beforeinput", null, n, i), o.push({
					event: i,
					listeners: r
				}), i.data = v));
			}
			fi(o, t);
		});
	}
	function vi(e, t, n) {
		return {
			instance: e,
			listener: t,
			currentTarget: n
		};
	}
	function yi(e, t) {
		for (var n = t + "Capture", r = []; e !== null;) {
			var i = e, a = i.stateNode;
			i.tag === 5 && a !== null && (i = a, a = at(e, n), a != null && r.unshift(vi(e, a, i)), a = at(e, t), a != null && r.push(vi(e, a, i))), e = e.return;
		}
		return r;
	}
	function bi(e) {
		if (e === null) return null;
		do
			e = e.return;
		while (e && e.tag !== 5);
		return e || null;
	}
	function xi(e, t, n, r, i) {
		for (var a = t._reactName, o = []; n !== null && n !== r;) {
			var s = n, c = s.alternate, l = s.stateNode;
			if (c !== null && c === r) break;
			s.tag === 5 && l !== null && (s = l, i ? (c = at(n, a), c != null && o.unshift(vi(n, c, s))) : i || (c = at(n, a), c != null && o.push(vi(n, c, s)))), n = n.return;
		}
		o.length !== 0 && e.push({
			event: t,
			listeners: o
		});
	}
	var Si = /\r\n?/g, Ci = /\u0000|\uFFFD/g;
	function wi(e) {
		return (typeof e == "string" ? e : "" + e).replace(Si, "\n").replace(Ci, "");
	}
	function Ti(e, t, n) {
		if (t = wi(t), wi(e) !== t && n) throw Error(r(425));
	}
	function Ei() {}
	var Di = null, Oi = null;
	function ki(e, t) {
		return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
	}
	var Ai = typeof setTimeout == "function" ? setTimeout : void 0, ji = typeof clearTimeout == "function" ? clearTimeout : void 0, Mi = typeof Promise == "function" ? Promise : void 0, Ni = typeof queueMicrotask == "function" ? queueMicrotask : Mi === void 0 ? Ai : function(e) {
		return Mi.resolve(null).then(e).catch(Pi);
	};
	function Pi(e) {
		setTimeout(function() {
			throw e;
		});
	}
	function Fi(e, t) {
		var n = t, r = 0;
		do {
			var i = n.nextSibling;
			if (e.removeChild(n), i && i.nodeType === 8) if (n = i.data, n === "/$") {
				if (r === 0) {
					e.removeChild(i), _n(t);
					return;
				}
				r--;
			} else n !== "$" && n !== "$?" && n !== "$!" || r++;
			n = i;
		} while (n);
		_n(t);
	}
	function Ii(e) {
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
	function Li(e) {
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
	var Ri = Math.random().toString(36).slice(2), zi = "__reactFiber$" + Ri, Bi = "__reactProps$" + Ri, Vi = "__reactContainer$" + Ri, Hi = "__reactEvents$" + Ri, Ui = "__reactListeners$" + Ri, Wi = "__reactHandles$" + Ri;
	function Gi(e) {
		var t = e[zi];
		if (t) return t;
		for (var n = e.parentNode; n;) {
			if (t = n[Vi] || n[zi]) {
				if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Li(e); e !== null;) {
					if (n = e[zi]) return n;
					e = Li(e);
				}
				return t;
			}
			e = n, n = e.parentNode;
		}
		return null;
	}
	function Ki(e) {
		return e = e[zi] || e[Vi], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
	}
	function qi(e) {
		if (e.tag === 5 || e.tag === 6) return e.stateNode;
		throw Error(r(33));
	}
	function Ji(e) {
		return e[Bi] || null;
	}
	var Yi = [], Xi = -1;
	function Zi(e) {
		return { current: e };
	}
	function L(e) {
		0 > Xi || (e.current = Yi[Xi], Yi[Xi] = null, Xi--);
	}
	function R(e, t) {
		Xi++, Yi[Xi] = e.current, e.current = t;
	}
	var Qi = {}, z = Zi(Qi), $i = Zi(!1), ea = Qi;
	function ta(e, t) {
		var n = e.type.contextTypes;
		if (!n) return Qi;
		var r = e.stateNode;
		if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
		var i = {}, a;
		for (a in n) i[a] = t[a];
		return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i;
	}
	function na(e) {
		return e = e.childContextTypes, e != null;
	}
	function ra() {
		L($i), L(z);
	}
	function ia(e, t, n) {
		if (z.current !== Qi) throw Error(r(168));
		R(z, t), R($i, n);
	}
	function aa(e, t, n) {
		var i = e.stateNode;
		if (t = t.childContextTypes, typeof i.getChildContext != "function") return n;
		for (var a in i = i.getChildContext(), i) if (!(a in t)) throw Error(r(108, _e(e) || "Unknown", a));
		return O({}, n, i);
	}
	function oa(e) {
		return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Qi, ea = z.current, R(z, e), R($i, $i.current), !0;
	}
	function sa(e, t, n) {
		var i = e.stateNode;
		if (!i) throw Error(r(169));
		n ? (e = aa(e, t, ea), i.__reactInternalMemoizedMergedChildContext = e, L($i), L(z), R(z, e)) : L($i), R($i, n);
	}
	var ca = null, la = !1, ua = !1;
	function da(e) {
		ca === null ? ca = [e] : ca.push(e);
	}
	function fa(e) {
		la = !0, da(e);
	}
	function pa() {
		if (!ua && ca !== null) {
			ua = !0;
			var e = 0, t = P;
			try {
				var n = ca;
				for (P = 1; e < n.length; e++) {
					var r = n[e];
					do
						r = r(!0);
					while (r !== null);
				}
				ca = null, la = !1;
			} catch (t) {
				throw ca !== null && (ca = ca.slice(e + 1)), xt(Et, pa), t;
			} finally {
				P = t, ua = !1;
			}
		}
		return null;
	}
	var ma = [], ha = 0, ga = null, _a = 0, va = [], ya = 0, ba = null, xa = 1, Sa = "";
	function Ca(e, t) {
		ma[ha++] = _a, ma[ha++] = ga, ga = e, _a = t;
	}
	function wa(e, t, n) {
		va[ya++] = xa, va[ya++] = Sa, va[ya++] = ba, ba = e;
		var r = xa;
		e = Sa;
		var i = 32 - N(r) - 1;
		r &= ~(1 << i), n += 1;
		var a = 32 - N(t) + i;
		if (30 < a) {
			var o = i - i % 5;
			a = (r & (1 << o) - 1).toString(32), r >>= o, i -= o, xa = 1 << 32 - N(t) + i | n << i | r, Sa = a + e;
		} else xa = 1 << a | n << i | r, Sa = e;
	}
	function Ta(e) {
		e.return !== null && (Ca(e, 1), wa(e, 1, 0));
	}
	function Ea(e) {
		for (; e === ga;) ga = ma[--ha], ma[ha] = null, _a = ma[--ha], ma[ha] = null;
		for (; e === ba;) ba = va[--ya], va[ya] = null, Sa = va[--ya], va[ya] = null, xa = va[--ya], va[ya] = null;
	}
	var Da = null, Oa = null, B = !1, ka = null;
	function Aa(e, t) {
		var n = ql(5, null, null, 0);
		n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
	}
	function ja(e, t) {
		switch (e.tag) {
			case 5:
				var n = e.type;
				return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t === null ? !1 : (e.stateNode = t, Da = e, Oa = Ii(t.firstChild), !0);
			case 6: return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t === null ? !1 : (e.stateNode = t, Da = e, Oa = null, !0);
			case 13: return t = t.nodeType === 8 ? t : null, t === null ? !1 : (n = ba === null ? null : {
				id: xa,
				overflow: Sa
			}, e.memoizedState = {
				dehydrated: t,
				treeContext: n,
				retryLane: 1073741824
			}, n = ql(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Da = e, Oa = null, !0);
			default: return !1;
		}
	}
	function Ma(e) {
		return (e.mode & 1) != 0 && (e.flags & 128) == 0;
	}
	function Na(e) {
		if (B) {
			var t = Oa;
			if (t) {
				var n = t;
				if (!ja(e, t)) {
					if (Ma(e)) throw Error(r(418));
					t = Ii(n.nextSibling);
					var i = Da;
					t && ja(e, t) ? Aa(i, n) : (e.flags = e.flags & -4097 | 2, B = !1, Da = e);
				}
			} else {
				if (Ma(e)) throw Error(r(418));
				e.flags = e.flags & -4097 | 2, B = !1, Da = e;
			}
		}
	}
	function Pa(e) {
		for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
		Da = e;
	}
	function Fa(e) {
		if (e !== Da) return !1;
		if (!B) return Pa(e), B = !0, !1;
		var t;
		if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !ki(e.type, e.memoizedProps)), t &&= Oa) {
			if (Ma(e)) throw Ia(), Error(r(418));
			for (; t;) Aa(e, t), t = Ii(t.nextSibling);
		}
		if (Pa(e), e.tag === 13) {
			if (e = e.memoizedState, e = e === null ? null : e.dehydrated, !e) throw Error(r(317));
			a: {
				for (e = e.nextSibling, t = 0; e;) {
					if (e.nodeType === 8) {
						var n = e.data;
						if (n === "/$") {
							if (t === 0) {
								Oa = Ii(e.nextSibling);
								break a;
							}
							t--;
						} else n !== "$" && n !== "$!" && n !== "$?" || t++;
					}
					e = e.nextSibling;
				}
				Oa = null;
			}
		} else Oa = Da ? Ii(e.stateNode.nextSibling) : null;
		return !0;
	}
	function Ia() {
		for (var e = Oa; e;) e = Ii(e.nextSibling);
	}
	function La() {
		Oa = Da = null, B = !1;
	}
	function Ra(e) {
		ka === null ? ka = [e] : ka.push(e);
	}
	var za = C.ReactCurrentBatchConfig;
	function Ba(e, t, n) {
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
	function Va(e, t) {
		throw e = Object.prototype.toString.call(t), Error(r(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
	}
	function Ha(e) {
		var t = e._init;
		return t(e._payload);
	}
	function Ua(e) {
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
			return i === ne ? d(e, t, n.props.children, r, n.key) : t !== null && (t.elementType === i || typeof i == "object" && i && i.$$typeof === E && Ha(i) === t.type) ? (r = a(t, n.props), r.ref = Ba(e, t, n), r.return = e, r) : (r = Zl(n.type, n.key, n.props, null, e.mode, r), r.ref = Ba(e, t, n), r.return = e, r);
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
					case ee: return n = Zl(t.type, t.key, t.props, null, e.mode, n), n.ref = Ba(e, null, t), n.return = e, n;
					case te: return t = tu(t, e.mode, n), t.return = e, t;
					case E:
						var r = t._init;
						return f(e, r(t._payload), n);
				}
				if (Ae(t) || ue(t)) return t = Ql(t, e.mode, n, null), t.return = e, t;
				Va(e, t);
			}
			return null;
		}
		function p(e, t, n, r) {
			var i = t === null ? null : t.key;
			if (typeof n == "string" && n !== "" || typeof n == "number") return i === null ? c(e, t, "" + n, r) : null;
			if (typeof n == "object" && n) {
				switch (n.$$typeof) {
					case ee: return n.key === i ? l(e, t, n, r) : null;
					case te: return n.key === i ? u(e, t, n, r) : null;
					case E: return i = n._init, p(e, t, i(n._payload), r);
				}
				if (Ae(n) || ue(n)) return i === null ? d(e, t, n, r, null) : null;
				Va(e, n);
			}
			return null;
		}
		function m(e, t, n, r, i) {
			if (typeof r == "string" && r !== "" || typeof r == "number") return e = e.get(n) || null, c(t, e, "" + r, i);
			if (typeof r == "object" && r) {
				switch (r.$$typeof) {
					case ee: return e = e.get(r.key === null ? n : r.key) || null, l(t, e, r, i);
					case te: return e = e.get(r.key === null ? n : r.key) || null, u(t, e, r, i);
					case E:
						var a = r._init;
						return m(e, t, n, a(r._payload), i);
				}
				if (Ae(r) || ue(r)) return e = e.get(n) || null, d(t, e, r, i, null);
				Va(t, r);
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
			if (h === s.length) return n(r, d), B && Ca(r, h), l;
			if (d === null) {
				for (; h < s.length; h++) d = f(r, s[h], c), d !== null && (a = o(d, a, h), u === null ? l = d : u.sibling = d, u = d);
				return B && Ca(r, h), l;
			}
			for (d = i(r, d); h < s.length; h++) g = m(d, r, h, s[h], c), g !== null && (e && g.alternate !== null && d.delete(g.key === null ? h : g.key), a = o(g, a, h), u === null ? l = g : u.sibling = g, u = g);
			return e && d.forEach(function(e) {
				return t(r, e);
			}), B && Ca(r, h), l;
		}
		function g(a, s, c, l) {
			var u = ue(c);
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
			if (v.done) return n(a, h), B && Ca(a, g), u;
			if (h === null) {
				for (; !v.done; g++, v = c.next()) v = f(a, v.value, l), v !== null && (s = o(v, s, g), d === null ? u = v : d.sibling = v, d = v);
				return B && Ca(a, g), u;
			}
			for (h = i(a, h); !v.done; g++, v = c.next()) v = m(h, a, g, v.value, l), v !== null && (e && v.alternate !== null && h.delete(v.key === null ? g : v.key), s = o(v, s, g), d === null ? u = v : d.sibling = v, d = v);
			return e && h.forEach(function(e) {
				return t(a, e);
			}), B && Ca(a, g), u;
		}
		function _(e, r, i, o) {
			if (typeof i == "object" && i && i.type === ne && i.key === null && (i = i.props.children), typeof i == "object" && i) {
				switch (i.$$typeof) {
					case ee:
						a: {
							for (var c = i.key, l = r; l !== null;) {
								if (l.key === c) {
									if (c = i.type, c === ne) {
										if (l.tag === 7) {
											n(e, l.sibling), r = a(l, i.props.children), r.return = e, e = r;
											break a;
										}
									} else if (l.elementType === c || typeof c == "object" && c && c.$$typeof === E && Ha(c) === l.type) {
										n(e, l.sibling), r = a(l, i.props), r.ref = Ba(e, l, i), r.return = e, e = r;
										break a;
									}
									n(e, l);
									break;
								} else t(e, l);
								l = l.sibling;
							}
							i.type === ne ? (r = Ql(i.props.children, e.mode, o, i.key), r.return = e, e = r) : (o = Zl(i.type, i.key, i.props, null, e.mode, o), o.ref = Ba(e, r, i), o.return = e, e = o);
						}
						return s(e);
					case te:
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
					case E: return l = i._init, _(e, r, l(i._payload), o);
				}
				if (Ae(i)) return h(e, r, i, o);
				if (ue(i)) return g(e, r, i, o);
				Va(e, i);
			}
			return typeof i == "string" && i !== "" || typeof i == "number" ? (i = "" + i, r !== null && r.tag === 6 ? (n(e, r.sibling), r = a(r, i), r.return = e, e = r) : (n(e, r), r = eu(i, e.mode, o), r.return = e, e = r), s(e)) : n(e, r);
		}
		return _;
	}
	var Wa = Ua(!0), Ga = Ua(!1), Ka = Zi(null), qa = null, Ja = null, Ya = null;
	function Xa() {
		Ya = Ja = qa = null;
	}
	function Za(e) {
		var t = Ka.current;
		L(Ka), e._currentValue = t;
	}
	function Qa(e, t, n) {
		for (; e !== null;) {
			var r = e.alternate;
			if ((e.childLanes & t) === t ? r !== null && (r.childLanes & t) !== t && (r.childLanes |= t) : (e.childLanes |= t, r !== null && (r.childLanes |= t)), e === n) break;
			e = e.return;
		}
	}
	function $a(e, t) {
		qa = e, Ya = Ja = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (zs = !0), e.firstContext = null);
	}
	function eo(e) {
		var t = e._currentValue;
		if (Ya !== e) if (e = {
			context: e,
			memoizedValue: t,
			next: null
		}, Ja === null) {
			if (qa === null) throw Error(r(308));
			Ja = e, qa.dependencies = {
				lanes: 0,
				firstContext: e
			};
		} else Ja = Ja.next = e;
		return t;
	}
	var to = null;
	function no(e) {
		to === null ? to = [e] : to.push(e);
	}
	function ro(e, t, n, r) {
		var i = t.interleaved;
		return i === null ? (n.next = n, no(t)) : (n.next = i.next, i.next = n), t.interleaved = n, io(e, r);
	}
	function io(e, t) {
		e.lanes |= t;
		var n = e.alternate;
		for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
		return n.tag === 3 ? n.stateNode : null;
	}
	var ao = !1;
	function oo(e) {
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
	function so(e, t) {
		e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
			baseState: e.baseState,
			firstBaseUpdate: e.firstBaseUpdate,
			lastBaseUpdate: e.lastBaseUpdate,
			shared: e.shared,
			effects: e.effects
		});
	}
	function co(e, t) {
		return {
			eventTime: e,
			lane: t,
			tag: 0,
			payload: null,
			callback: null,
			next: null
		};
	}
	function lo(e, t, n) {
		var r = e.updateQueue;
		if (r === null) return null;
		if (r = r.shared, q & 2) {
			var i = r.pending;
			return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, io(e, n);
		}
		return i = r.interleaved, i === null ? (t.next = t, no(r)) : (t.next = i.next, i.next = t), r.interleaved = t, io(e, n);
	}
	function uo(e, t, n) {
		if (t = t.updateQueue, t !== null && (t = t.shared, n & 4194240)) {
			var r = t.lanes;
			r &= e.pendingLanes, n |= r, t.lanes = n, qt(e, n);
		}
	}
	function fo(e, t) {
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
	function po(e, t, n, r) {
		var i = e.updateQueue;
		ao = !1;
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
								d = O({}, d, f);
								break a;
							case 2: ao = !0;
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
	function mo(e, t, n) {
		if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
			var i = e[t], a = i.callback;
			if (a !== null) {
				if (i.callback = null, i = n, typeof a != "function") throw Error(r(191, a));
				a.call(i);
			}
		}
	}
	var ho = {}, go = Zi(ho), _o = Zi(ho), vo = Zi(ho);
	function yo(e) {
		if (e === ho) throw Error(r(174));
		return e;
	}
	function bo(e, t) {
		switch (R(vo, t), R(_o, e), R(go, ho), e = t.nodeType, e) {
			case 9:
			case 11:
				t = (t = t.documentElement) ? t.namespaceURI : Le(null, "");
				break;
			default: e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Le(t, e);
		}
		L(go), R(go, t);
	}
	function xo() {
		L(go), L(_o), L(vo);
	}
	function So(e) {
		yo(vo.current);
		var t = yo(go.current), n = Le(t, e.type);
		t !== n && (R(_o, e), R(go, n));
	}
	function Co(e) {
		_o.current === e && (L(go), L(_o));
	}
	var V = Zi(0);
	function wo(e) {
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
	var To = [];
	function Eo() {
		for (var e = 0; e < To.length; e++) To[e]._workInProgressVersionPrimary = null;
		To.length = 0;
	}
	var Do = C.ReactCurrentDispatcher, Oo = C.ReactCurrentBatchConfig, ko = 0, H = null, U = null, W = null, Ao = !1, jo = !1, Mo = 0, No = 0;
	function Po() {
		throw Error(r(321));
	}
	function Fo(e, t) {
		if (t === null) return !1;
		for (var n = 0; n < t.length && n < e.length; n++) if (!Fr(e[n], t[n])) return !1;
		return !0;
	}
	function Io(e, t, n, i, a, o) {
		if (ko = o, H = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Do.current = e === null || e.memoizedState === null ? ys : bs, e = n(i, a), jo) {
			o = 0;
			do {
				if (jo = !1, Mo = 0, 25 <= o) throw Error(r(301));
				o += 1, W = U = null, t.updateQueue = null, Do.current = xs, e = n(i, a);
			} while (jo);
		}
		if (Do.current = vs, t = U !== null && U.next !== null, ko = 0, W = U = H = null, Ao = !1, t) throw Error(r(300));
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
		return W === null ? H.memoizedState = W = e : W = W.next = e, W;
	}
	function zo() {
		if (U === null) {
			var e = H.alternate;
			e = e === null ? null : e.memoizedState;
		} else e = U.next;
		var t = W === null ? H.memoizedState : W.next;
		if (t !== null) W = t, U = e;
		else {
			if (e === null) throw Error(r(310));
			U = e, e = {
				memoizedState: U.memoizedState,
				baseState: U.baseState,
				baseQueue: U.baseQueue,
				queue: U.queue,
				next: null
			}, W === null ? H.memoizedState = W = e : W = W.next = e;
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
		var i = U, a = i.baseQueue, o = n.pending;
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
				if ((ko & d) === d) l !== null && (l = l.next = {
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
					l === null ? (c = l = f, s = i) : l = l.next = f, H.lanes |= d, Xc |= d;
				}
				u = u.next;
			} while (u !== null && u !== o);
			l === null ? s = i : l.next = c, Fr(i, t.memoizedState) || (zs = !0), t.memoizedState = i, t.baseState = s, t.baseQueue = l, n.lastRenderedState = i;
		}
		if (e = n.interleaved, e !== null) {
			a = e;
			do
				o = a.lane, H.lanes |= o, Xc |= o, a = a.next;
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
			Fr(o, t.memoizedState) || (zs = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
		}
		return [o, i];
	}
	function Uo() {}
	function Wo(e, t) {
		var n = H, i = zo(), a = t(), o = !Fr(i.memoizedState, a);
		if (o && (i.memoizedState = a, zs = !0), i = i.queue, ns(qo.bind(null, n, i, e), [e]), i.getSnapshot !== t || o || W !== null && W.memoizedState.tag & 1) {
			if (n.flags |= 2048, Zo(9, Ko.bind(null, n, i, a, t), void 0, null), J === null) throw Error(r(349));
			ko & 30 || Go(n, t, a);
		}
		return a;
	}
	function Go(e, t, n) {
		e.flags |= 16384, e = {
			getSnapshot: t,
			value: n
		}, t = H.updateQueue, t === null ? (t = {
			lastEffect: null,
			stores: null
		}, H.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
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
			return !Fr(e, n);
		} catch {
			return !0;
		}
	}
	function Yo(e) {
		var t = io(e, 1);
		t !== null && gl(t, e, 1, -1);
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
		}, t.queue = e, e = e.dispatch = ms.bind(null, H, e), [t.memoizedState, e];
	}
	function Zo(e, t, n, r) {
		return e = {
			tag: e,
			create: t,
			destroy: n,
			deps: r,
			next: null
		}, t = H.updateQueue, t === null ? (t = {
			lastEffect: null,
			stores: null
		}, H.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
	}
	function Qo() {
		return zo().memoizedState;
	}
	function $o(e, t, n, r) {
		var i = Ro();
		H.flags |= e, i.memoizedState = Zo(1 | t, n, void 0, r === void 0 ? null : r);
	}
	function es(e, t, n, r) {
		var i = zo();
		r = r === void 0 ? null : r;
		var a = void 0;
		if (U !== null) {
			var o = U.memoizedState;
			if (a = o.destroy, r !== null && Fo(r, o.deps)) {
				i.memoizedState = Zo(t, n, a, r);
				return;
			}
		}
		H.flags |= e, i.memoizedState = Zo(1 | t, n, a, r);
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
		return ko & 21 ? (Fr(n, t) || (n = Ut(), H.lanes |= n, Xc |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, zs = !0), e.memoizedState = n);
	}
	function ds(e, t) {
		var n = P;
		P = n !== 0 && 4 > n ? n : 4, e(!0);
		var r = Oo.transition;
		Oo.transition = {};
		try {
			e(!1), t();
		} finally {
			P = n, Oo.transition = r;
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
		else if (n = ro(e, t, n, r), n !== null) {
			var i = ml();
			gl(n, e, r, i), _s(n, t, r);
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
				if (i.hasEagerState = !0, i.eagerState = s, Fr(s, o)) {
					var c = t.interleaved;
					c === null ? (i.next = i, no(t)) : (i.next = c.next, c.next = i), t.interleaved = i;
					return;
				}
			} catch {}
			n = ro(e, t, i, r), n !== null && (i = ml(), gl(n, e, r, i), _s(n, t, r));
		}
	}
	function hs(e) {
		var t = e.alternate;
		return e === H || t !== null && t === H;
	}
	function gs(e, t) {
		jo = Ao = !0;
		var n = e.pending;
		n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
	}
	function _s(e, t, n) {
		if (n & 4194240) {
			var r = t.lanes;
			r &= e.pendingLanes, n |= r, t.lanes = n, qt(e, n);
		}
	}
	var vs = {
		readContext: eo,
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
		readContext: eo,
		useCallback: function(e, t) {
			return Ro().memoizedState = [e, t === void 0 ? null : t], e;
		},
		useContext: eo,
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
			}, r.queue = e, e = e.dispatch = ps.bind(null, H, e), [r.memoizedState, e];
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
			var i = H, a = Ro();
			if (B) {
				if (n === void 0) throw Error(r(407));
				n = n();
			} else {
				if (n = t(), J === null) throw Error(r(349));
				ko & 30 || Go(i, t, n);
			}
			a.memoizedState = n;
			var o = {
				value: n,
				getSnapshot: t
			};
			return a.queue = o, ts(qo.bind(null, i, o, e), [e]), i.flags |= 2048, Zo(9, Ko.bind(null, i, o, n, t), void 0, null), n;
		},
		useId: function() {
			var e = Ro(), t = J.identifierPrefix;
			if (B) {
				var n = Sa, r = xa;
				n = (r & ~(1 << 32 - N(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Mo++, 0 < n && (t += "H" + n.toString(32)), t += ":";
			} else n = No++, t = ":" + t + "r" + n.toString(32) + ":";
			return e.memoizedState = t;
		},
		unstable_isNewReconciler: !1
	}, bs = {
		readContext: eo,
		useCallback: cs,
		useContext: eo,
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
			return us(zo(), U.memoizedState, e);
		},
		useTransition: function() {
			return [Vo(Bo)[0], zo().memoizedState];
		},
		useMutableSource: Uo,
		useSyncExternalStore: Wo,
		useId: fs,
		unstable_isNewReconciler: !1
	}, xs = {
		readContext: eo,
		useCallback: cs,
		useContext: eo,
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
			return U === null ? t.memoizedState = e : us(t, U.memoizedState, e);
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
			for (var n in t = O({}, t), e = e.defaultProps, e) t[n] === void 0 && (t[n] = e[n]);
			return t;
		}
		return t;
	}
	function Cs(e, t, n, r) {
		t = e.memoizedState, n = n(r, t), n = n == null ? t : O({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
	}
	var ws = {
		isMounted: function(e) {
			return (e = e._reactInternals) ? A(e) === e : !1;
		},
		enqueueSetState: function(e, t, n) {
			e = e._reactInternals;
			var r = ml(), i = hl(e), a = co(r, i);
			a.payload = t, n != null && (a.callback = n), t = lo(e, a, i), t !== null && (gl(t, e, i, r), uo(t, e, i));
		},
		enqueueReplaceState: function(e, t, n) {
			e = e._reactInternals;
			var r = ml(), i = hl(e), a = co(r, i);
			a.tag = 1, a.payload = t, n != null && (a.callback = n), t = lo(e, a, i), t !== null && (gl(t, e, i, r), uo(t, e, i));
		},
		enqueueForceUpdate: function(e, t) {
			e = e._reactInternals;
			var n = ml(), r = hl(e), i = co(n, r);
			i.tag = 2, t != null && (i.callback = t), t = lo(e, i, r), t !== null && (gl(t, e, r, n), uo(t, e, r));
		}
	};
	function Ts(e, t, n, r, i, a, o) {
		return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, a, o) : t.prototype && t.prototype.isPureReactComponent ? !Ir(n, r) || !Ir(i, a) : !0;
	}
	function Es(e, t, n) {
		var r = !1, i = Qi, a = t.contextType;
		return typeof a == "object" && a ? a = eo(a) : (i = na(t) ? ea : z.current, r = t.contextTypes, a = (r = r != null) ? ta(e, i) : Qi), t = new t(n, a), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = ws, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = a), t;
	}
	function Ds(e, t, n, r) {
		e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && ws.enqueueReplaceState(t, t.state, null);
	}
	function Os(e, t, n, r) {
		var i = e.stateNode;
		i.props = n, i.state = e.memoizedState, i.refs = {}, oo(e);
		var a = t.contextType;
		typeof a == "object" && a ? i.context = eo(a) : (a = na(t) ? ea : z.current, i.context = ta(e, a)), i.state = e.memoizedState, a = t.getDerivedStateFromProps, typeof a == "function" && (Cs(e, t, a, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && ws.enqueueReplaceState(i, i.state, null), po(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308);
	}
	function ks(e, t) {
		try {
			var n = "", r = t;
			do
				n += he(r), r = r.return;
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
		n = co(-1, n), n.tag = 3, n.payload = { element: null };
		var r = t.value;
		return n.callback = function() {
			il || (il = !0, al = r), js(e, t);
		}, n;
	}
	function Ps(e, t, n) {
		n = co(-1, n), n.tag = 3;
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
		return e.mode & 1 ? (e.flags |= 65536, e.lanes = i, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = co(-1, 1), t.tag = 2, lo(n, t, 1))), n.lanes |= 1), e);
	}
	var Rs = C.ReactCurrentOwner, zs = !1;
	function Bs(e, t, n, r) {
		t.child = e === null ? Ga(t, null, n, r) : Wa(t, e.child, n, r);
	}
	function Vs(e, t, n, r, i) {
		n = n.render;
		var a = t.ref;
		return $a(t, i), r = Io(e, t, n, r, a, i), n = Lo(), e !== null && !zs ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, sc(e, t, i)) : (B && n && Ta(t), t.flags |= 1, Bs(e, t, r, i), t.child);
	}
	function Hs(e, t, n, r, i) {
		if (e === null) {
			var a = n.type;
			return typeof a == "function" && !Jl(a) && a.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = a, Us(e, t, a, r, i)) : (e = Zl(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
		}
		if (a = e.child, (e.lanes & i) === 0) {
			var o = a.memoizedProps;
			if (n = n.compare, n = n === null ? Ir : n, n(o, r) && e.ref === t.ref) return sc(e, t, i);
		}
		return t.flags |= 1, e = Xl(a, r), e.ref = t.ref, e.return = t, t.child = e;
	}
	function Us(e, t, n, r, i) {
		if (e !== null) {
			var a = e.memoizedProps;
			if (Ir(a, r) && e.ref === t.ref) if (zs = !1, t.pendingProps = r = a, (e.lanes & i) !== 0) e.flags & 131072 && (zs = !0);
			else return t.lanes = e.lanes, sc(e, t, i);
		}
		return Ks(e, t, n, r, i);
	}
	function Ws(e, t, n) {
		var r = t.pendingProps, i = r.children, a = e === null ? null : e.memoizedState;
		if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = {
			baseLanes: 0,
			cachePool: null,
			transitions: null
		}, R(Jc, qc), qc |= n;
		else {
			if (!(n & 1073741824)) return e = a === null ? n : a.baseLanes | n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
				baseLanes: e,
				cachePool: null,
				transitions: null
			}, t.updateQueue = null, R(Jc, qc), qc |= e, null;
			t.memoizedState = {
				baseLanes: 0,
				cachePool: null,
				transitions: null
			}, r = a === null ? n : a.baseLanes, R(Jc, qc), qc |= r;
		}
		else a === null ? r = n : (r = a.baseLanes | n, t.memoizedState = null), R(Jc, qc), qc |= r;
		return Bs(e, t, i, n), t.child;
	}
	function Gs(e, t) {
		var n = t.ref;
		(e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
	}
	function Ks(e, t, n, r, i) {
		var a = na(n) ? ea : z.current;
		return a = ta(t, a), $a(t, i), n = Io(e, t, n, r, a, i), r = Lo(), e !== null && !zs ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, sc(e, t, i)) : (B && r && Ta(t), t.flags |= 1, Bs(e, t, n, i), t.child);
	}
	function qs(e, t, n, r, i) {
		if (na(n)) {
			var a = !0;
			oa(t);
		} else a = !1;
		if ($a(t, i), t.stateNode === null) oc(e, t), Es(t, n, r), Os(t, n, r, i), r = !0;
		else if (e === null) {
			var o = t.stateNode, s = t.memoizedProps;
			o.props = s;
			var c = o.context, l = n.contextType;
			typeof l == "object" && l ? l = eo(l) : (l = na(n) ? ea : z.current, l = ta(t, l));
			var u = n.getDerivedStateFromProps, d = typeof u == "function" || typeof o.getSnapshotBeforeUpdate == "function";
			d || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (s !== r || c !== l) && Ds(t, o, r, l), ao = !1;
			var f = t.memoizedState;
			o.state = f, po(t, r, o, i), c = t.memoizedState, s !== r || f !== c || $i.current || ao ? (typeof u == "function" && (Cs(t, n, u, r), c = t.memoizedState), (s = ao || Ts(t, n, s, r, f, c, l)) ? (d || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = c), o.props = r, o.state = c, o.context = l, r = s) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
		} else {
			o = t.stateNode, so(e, t), s = t.memoizedProps, l = t.type === t.elementType ? s : Ss(t.type, s), o.props = l, d = t.pendingProps, f = o.context, c = n.contextType, typeof c == "object" && c ? c = eo(c) : (c = na(n) ? ea : z.current, c = ta(t, c));
			var p = n.getDerivedStateFromProps;
			(u = typeof p == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (s !== d || f !== c) && Ds(t, o, r, c), ao = !1, f = t.memoizedState, o.state = f, po(t, r, o, i);
			var m = t.memoizedState;
			s !== d || f !== m || $i.current || ao ? (typeof p == "function" && (Cs(t, n, p, r), m = t.memoizedState), (l = ao || Ts(t, n, l, r, f, m, c) || !1) ? (u || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, m, c), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, m, c)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = m), o.props = r, o.state = m, o.context = c, r = l) : (typeof o.componentDidUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1);
		}
		return Js(e, t, n, r, a, i);
	}
	function Js(e, t, n, r, i, a) {
		Gs(e, t);
		var o = (t.flags & 128) != 0;
		if (!r && !o) return i && sa(t, n, !1), sc(e, t, a);
		r = t.stateNode, Rs.current = t;
		var s = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
		return t.flags |= 1, e !== null && o ? (t.child = Wa(t, e.child, null, a), t.child = Wa(t, null, s, a)) : Bs(e, t, s, a), t.memoizedState = r.state, i && sa(t, n, !0), t.child;
	}
	function Ys(e) {
		var t = e.stateNode;
		t.pendingContext ? ia(e, t.pendingContext, t.pendingContext !== t.context) : t.context && ia(e, t.context, !1), bo(e, t.containerInfo);
	}
	function Xs(e, t, n, r, i) {
		return La(), Ra(i), t.flags |= 256, Bs(e, t, n, r), t.child;
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
		var r = t.pendingProps, i = V.current, a = !1, o = (t.flags & 128) != 0, s;
		if ((s = o) || (s = e !== null && e.memoizedState === null ? !1 : (i & 2) != 0), s ? (a = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), R(V, i & 1), e === null) return Na(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (o = r.children, e = r.fallback, a ? (r = t.mode, a = t.child, o = {
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
		return r !== null && Ra(r), Wa(t, e.child, null, n), e = ec(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
	}
	function nc(e, t, n, i, a, o, s) {
		if (n) return t.flags & 256 ? (t.flags &= -257, i = As(Error(r(422))), tc(e, t, s, i)) : t.memoizedState === null ? (o = i.fallback, a = t.mode, i = $l({
			mode: "visible",
			children: i.children
		}, a, 0, null), o = Ql(o, a, s, null), o.flags |= 2, i.return = t, o.return = t, i.sibling = o, t.child = i, t.mode & 1 && Wa(t, e.child, null, s), t.child.memoizedState = Qs(s), t.memoizedState = Zs, o) : (t.child = e.child, t.flags |= 128, null);
		if (!(t.mode & 1)) return tc(e, t, s, null);
		if (a.data === "$!") {
			if (i = a.nextSibling && a.nextSibling.dataset, i) var c = i.dgst;
			return i = c, o = Error(r(419)), i = As(o, i, void 0), tc(e, t, s, i);
		}
		if (c = (s & e.childLanes) !== 0, zs || c) {
			if (i = J, i !== null) {
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
				a = (a & (i.suspendedLanes | s)) === 0 ? a : 0, a !== 0 && a !== o.retryLane && (o.retryLane = a, io(e, a), gl(i, e, a, -1));
			}
			return Al(), i = As(Error(r(421))), tc(e, t, s, i);
		}
		return a.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Hl.bind(null, e), a._reactRetry = t, null) : (e = o.treeContext, Oa = Ii(a.nextSibling), Da = t, B = !0, ka = null, e !== null && (va[ya++] = xa, va[ya++] = Sa, va[ya++] = ba, xa = e.id, Sa = e.overflow, ba = t), t = ec(t, i.children), t.flags |= 4096, t);
	}
	function rc(e, t, n) {
		e.lanes |= t;
		var r = e.alternate;
		r !== null && (r.lanes |= t), Qa(e.return, t, n);
	}
	function ic(e, t, n, r, i) {
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
	function ac(e, t, n) {
		var r = t.pendingProps, i = r.revealOrder, a = r.tail;
		if (Bs(e, t, r.children, n), r = V.current, r & 2) r = r & 1 | 2, t.flags |= 128;
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
		if (R(V, r), !(t.mode & 1)) t.memoizedState = null;
		else switch (i) {
			case "forwards":
				for (n = t.child, i = null; n !== null;) e = n.alternate, e !== null && wo(e) === null && (i = n), n = n.sibling;
				n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), ic(t, !1, i, n, a);
				break;
			case "backwards":
				for (n = null, i = t.child, t.child = null; i !== null;) {
					if (e = i.alternate, e !== null && wo(e) === null) {
						t.child = i;
						break;
					}
					e = i.sibling, i.sibling = n, n = i, i = e;
				}
				ic(t, !0, n, null, a);
				break;
			case "together":
				ic(t, !1, null, null, void 0);
				break;
			default: t.memoizedState = null;
		}
		return t.child;
	}
	function oc(e, t) {
		!(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
	}
	function sc(e, t, n) {
		if (e !== null && (t.dependencies = e.dependencies), Xc |= t.lanes, (n & t.childLanes) === 0) return null;
		if (e !== null && t.child !== e.child) throw Error(r(153));
		if (t.child !== null) {
			for (e = t.child, n = Xl(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = Xl(e, e.pendingProps), n.return = t;
			n.sibling = null;
		}
		return t.child;
	}
	function cc(e, t, n) {
		switch (t.tag) {
			case 3:
				Ys(t), La();
				break;
			case 5:
				So(t);
				break;
			case 1:
				na(t.type) && oa(t);
				break;
			case 4:
				bo(t, t.stateNode.containerInfo);
				break;
			case 10:
				var r = t.type._context, i = t.memoizedProps.value;
				R(Ka, r._currentValue), r._currentValue = i;
				break;
			case 13:
				if (r = t.memoizedState, r !== null) return r.dehydrated === null ? (n & t.child.childLanes) === 0 ? (R(V, V.current & 1), e = sc(e, t, n), e === null ? null : e.sibling) : $s(e, t, n) : (R(V, V.current & 1), t.flags |= 128, null);
				R(V, V.current & 1);
				break;
			case 19:
				if (r = (n & t.childLanes) !== 0, e.flags & 128) {
					if (r) return ac(e, t, n);
					t.flags |= 128;
				}
				if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), R(V, V.current), r) break;
				return null;
			case 22:
			case 23: return t.lanes = 0, Ws(e, t, n);
		}
		return sc(e, t, n);
	}
	var lc = function(e, t) {
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
	}, uc = function(e, t, n, r) {
		var i = e.memoizedProps;
		if (i !== r) {
			e = t.stateNode, yo(go.current);
			var o = null;
			switch (n) {
				case "input":
					i = we(e, i), r = we(e, r), o = [];
					break;
				case "select":
					i = O({}, i, { value: void 0 }), r = O({}, r, { value: void 0 }), o = [];
					break;
				case "textarea":
					i = Me(e, i), r = Me(e, r), o = [];
					break;
				default: typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Ei);
			}
			Ge(n, r);
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
				else u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, c = c ? c.__html : void 0, l != null && c !== l && (o ||= []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (o ||= []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (a.hasOwnProperty(u) ? (l != null && u === "onScroll" && I("scroll", e), o || c === l || (o = [])) : (o ||= []).push(u, l));
			}
			n && (o ||= []).push("style", n);
			var u = o;
			(t.updateQueue = u) && (t.flags |= 4);
		}
	}, dc = function(e, t, n, r) {
		n !== r && (t.flags |= 4);
	};
	function fc(e, t) {
		if (!B) switch (e.tailMode) {
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
	function pc(e) {
		var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
		if (t) for (var i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 14680064, r |= i.flags & 14680064, i.return = e, i = i.sibling;
		else for (i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
		return e.subtreeFlags |= r, e.childLanes = n, t;
	}
	function mc(e, t, n) {
		var i = t.pendingProps;
		switch (Ea(t), t.tag) {
			case 2:
			case 16:
			case 15:
			case 0:
			case 11:
			case 7:
			case 8:
			case 12:
			case 9:
			case 14: return pc(t), null;
			case 1: return na(t.type) && ra(), pc(t), null;
			case 3: return i = t.stateNode, xo(), L($i), L(z), Eo(), i.pendingContext && (i.context = i.pendingContext, i.pendingContext = null), (e === null || e.child === null) && (Fa(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, ka !== null && (bl(ka), ka = null))), pc(t), null;
			case 5:
				Co(t);
				var o = yo(vo.current);
				if (n = t.type, e !== null && t.stateNode != null) uc(e, t, n, i, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
				else {
					if (!i) {
						if (t.stateNode === null) throw Error(r(166));
						return pc(t), null;
					}
					if (e = yo(go.current), Fa(t)) {
						i = t.stateNode, n = t.type;
						var s = t.memoizedProps;
						switch (i[zi] = t, i[Bi] = s, e = (t.mode & 1) != 0, n) {
							case "dialog":
								I("cancel", i), I("close", i);
								break;
							case "iframe":
							case "object":
							case "embed":
								I("load", i);
								break;
							case "video":
							case "audio":
								for (o = 0; o < li.length; o++) I(li[o], i);
								break;
							case "source":
								I("error", i);
								break;
							case "img":
							case "image":
							case "link":
								I("error", i), I("load", i);
								break;
							case "details":
								I("toggle", i);
								break;
							case "input":
								Te(i, s), I("invalid", i);
								break;
							case "select":
								i._wrapperState = { wasMultiple: !!s.multiple }, I("invalid", i);
								break;
							case "textarea": Ne(i, s), I("invalid", i);
						}
						for (var c in Ge(n, s), o = null, s) if (s.hasOwnProperty(c)) {
							var l = s[c];
							c === "children" ? typeof l == "string" ? i.textContent !== l && (!0 !== s.suppressHydrationWarning && Ti(i.textContent, l, e), o = ["children", l]) : typeof l == "number" && i.textContent !== "" + l && (!0 !== s.suppressHydrationWarning && Ti(i.textContent, l, e), o = ["children", "" + l]) : a.hasOwnProperty(c) && l != null && c === "onScroll" && I("scroll", i);
						}
						switch (n) {
							case "input":
								xe(i), Oe(i, s, !0);
								break;
							case "textarea":
								xe(i), Fe(i);
								break;
							case "select":
							case "option": break;
							default: typeof s.onClick == "function" && (i.onclick = Ei);
						}
						i = o, t.updateQueue = i, i !== null && (t.flags |= 4);
					} else {
						c = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Ie(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = c.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof i.is == "string" ? e = c.createElement(n, { is: i.is }) : (e = c.createElement(n), n === "select" && (c = e, i.multiple ? c.multiple = !0 : i.size && (c.size = i.size))) : e = c.createElementNS(e, n), e[zi] = t, e[Bi] = i, lc(e, t, !1, !1), t.stateNode = e;
						a: {
							switch (c = Ke(n, i), n) {
								case "dialog":
									I("cancel", e), I("close", e), o = i;
									break;
								case "iframe":
								case "object":
								case "embed":
									I("load", e), o = i;
									break;
								case "video":
								case "audio":
									for (o = 0; o < li.length; o++) I(li[o], e);
									o = i;
									break;
								case "source":
									I("error", e), o = i;
									break;
								case "img":
								case "image":
								case "link":
									I("error", e), I("load", e), o = i;
									break;
								case "details":
									I("toggle", e), o = i;
									break;
								case "input":
									Te(e, i), o = we(e, i), I("invalid", e);
									break;
								case "option":
									o = i;
									break;
								case "select":
									e._wrapperState = { wasMultiple: !!i.multiple }, o = O({}, i, { value: void 0 }), I("invalid", e);
									break;
								case "textarea":
									Ne(e, i), o = Me(e, i), I("invalid", e);
									break;
								default: o = i;
							}
							for (s in Ge(n, o), l = o, l) if (l.hasOwnProperty(s)) {
								var u = l[s];
								s === "style" ? Ue(e, u) : s === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, u != null && ze(e, u)) : s === "children" ? typeof u == "string" ? (n !== "textarea" || u !== "") && k(e, u) : typeof u == "number" && k(e, "" + u) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (a.hasOwnProperty(s) ? u != null && s === "onScroll" && I("scroll", e) : u != null && S(e, s, u, c));
							}
							switch (n) {
								case "input":
									xe(e), Oe(e, i, !1);
									break;
								case "textarea":
									xe(e), Fe(e);
									break;
								case "option":
									i.value != null && e.setAttribute("value", "" + ve(i.value));
									break;
								case "select":
									e.multiple = !!i.multiple, s = i.value, s == null ? i.defaultValue != null && je(e, !!i.multiple, i.defaultValue, !0) : je(e, !!i.multiple, s, !1);
									break;
								default: typeof o.onClick == "function" && (e.onclick = Ei);
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
				return pc(t), null;
			case 6:
				if (e && t.stateNode != null) dc(e, t, e.memoizedProps, i);
				else {
					if (typeof i != "string" && t.stateNode === null) throw Error(r(166));
					if (n = yo(vo.current), yo(go.current), Fa(t)) {
						if (i = t.stateNode, n = t.memoizedProps, i[zi] = t, (s = i.nodeValue !== n) && (e = Da, e !== null)) switch (e.tag) {
							case 3:
								Ti(i.nodeValue, n, (e.mode & 1) != 0);
								break;
							case 5: !0 !== e.memoizedProps.suppressHydrationWarning && Ti(i.nodeValue, n, (e.mode & 1) != 0);
						}
						s && (t.flags |= 4);
					} else i = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(i), i[zi] = t, t.stateNode = i;
				}
				return pc(t), null;
			case 13:
				if (L(V), i = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
					if (B && Oa !== null && t.mode & 1 && !(t.flags & 128)) Ia(), La(), t.flags |= 98560, s = !1;
					else if (s = Fa(t), i !== null && i.dehydrated !== null) {
						if (e === null) {
							if (!s) throw Error(r(318));
							if (s = t.memoizedState, s = s === null ? null : s.dehydrated, !s) throw Error(r(317));
							s[zi] = t;
						} else La(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
						pc(t), s = !1;
					} else ka !== null && (bl(ka), ka = null), s = !0;
					if (!s) return t.flags & 65536 ? t : null;
				}
				return t.flags & 128 ? (t.lanes = n, t) : (i = i !== null, i !== (e !== null && e.memoizedState !== null) && i && (t.child.flags |= 8192, t.mode & 1 && (e === null || V.current & 1 ? Z === 0 && (Z = 3) : Al())), t.updateQueue !== null && (t.flags |= 4), pc(t), null);
			case 4: return xo(), e === null && hi(t.stateNode.containerInfo), pc(t), null;
			case 10: return Za(t.type._context), pc(t), null;
			case 17: return na(t.type) && ra(), pc(t), null;
			case 19:
				if (L(V), s = t.memoizedState, s === null) return pc(t), null;
				if (i = (t.flags & 128) != 0, c = s.rendering, c === null) if (i) fc(s, !1);
				else {
					if (Z !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null;) {
						if (c = wo(e), c !== null) {
							for (t.flags |= 128, fc(s, !1), i = c.updateQueue, i !== null && (t.updateQueue = i, t.flags |= 4), t.subtreeFlags = 0, i = n, n = t.child; n !== null;) s = n, e = i, s.flags &= 14680066, c = s.alternate, c === null ? (s.childLanes = 0, s.lanes = e, s.child = null, s.subtreeFlags = 0, s.memoizedProps = null, s.memoizedState = null, s.updateQueue = null, s.dependencies = null, s.stateNode = null) : (s.childLanes = c.childLanes, s.lanes = c.lanes, s.child = c.child, s.subtreeFlags = 0, s.deletions = null, s.memoizedProps = c.memoizedProps, s.memoizedState = c.memoizedState, s.updateQueue = c.updateQueue, s.type = c.type, e = c.dependencies, s.dependencies = e === null ? null : {
								lanes: e.lanes,
								firstContext: e.firstContext
							}), n = n.sibling;
							return R(V, V.current & 1 | 2), t.child;
						}
						e = e.sibling;
					}
					s.tail !== null && j() > nl && (t.flags |= 128, i = !0, fc(s, !1), t.lanes = 4194304);
				}
				else {
					if (!i) if (e = wo(c), e !== null) {
						if (t.flags |= 128, i = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), fc(s, !0), s.tail === null && s.tailMode === "hidden" && !c.alternate && !B) return pc(t), null;
					} else 2 * j() - s.renderingStartTime > nl && n !== 1073741824 && (t.flags |= 128, i = !0, fc(s, !1), t.lanes = 4194304);
					s.isBackwards ? (c.sibling = t.child, t.child = c) : (n = s.last, n === null ? t.child = c : n.sibling = c, s.last = c);
				}
				return s.tail === null ? (pc(t), null) : (t = s.tail, s.rendering = t, s.tail = t.sibling, s.renderingStartTime = j(), t.sibling = null, n = V.current, R(V, i ? n & 1 | 2 : n & 1), t);
			case 22:
			case 23: return El(), i = t.memoizedState !== null, e !== null && e.memoizedState !== null !== i && (t.flags |= 8192), i && t.mode & 1 ? qc & 1073741824 && (pc(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : pc(t), null;
			case 24: return null;
			case 25: return null;
		}
		throw Error(r(156, t.tag));
	}
	function hc(e, t) {
		switch (Ea(t), t.tag) {
			case 1: return na(t.type) && ra(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 3: return xo(), L($i), L(z), Eo(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
			case 5: return Co(t), null;
			case 13:
				if (L(V), e = t.memoizedState, e !== null && e.dehydrated !== null) {
					if (t.alternate === null) throw Error(r(340));
					La();
				}
				return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 19: return L(V), null;
			case 4: return xo(), null;
			case 10: return Za(t.type._context), null;
			case 22:
			case 23: return El(), null;
			case 24: return null;
			default: return null;
		}
	}
	var gc = !1, _c = !1, vc = typeof WeakSet == "function" ? WeakSet : Set, G = null;
	function yc(e, t) {
		var n = e.ref;
		if (n !== null) if (typeof n == "function") try {
			n(null);
		} catch (n) {
			Q(e, t, n);
		}
		else n.current = null;
	}
	function bc(e, t, n) {
		try {
			n();
		} catch (n) {
			Q(e, t, n);
		}
	}
	var xc = !1;
	function Sc(e, t) {
		if (Di = yn, e = Br(), Vr(e)) {
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
		for (Oi = {
			focusedElem: e,
			selectionRange: n
		}, yn = !1, G = t; G !== null;) if (t = G, e = t.child, t.subtreeFlags & 1028 && e !== null) e.return = t, G = e;
		else for (; G !== null;) {
			t = G;
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
				Q(t, t.return, e);
			}
			if (e = t.sibling, e !== null) {
				e.return = t.return, G = e;
				break;
			}
			G = t.return;
		}
		return h = xc, xc = !1, h;
	}
	function Cc(e, t, n) {
		var r = t.updateQueue;
		if (r = r === null ? null : r.lastEffect, r !== null) {
			var i = r = r.next;
			do {
				if ((i.tag & e) === e) {
					var a = i.destroy;
					i.destroy = void 0, a !== void 0 && bc(t, n, a);
				}
				i = i.next;
			} while (i !== r);
		}
	}
	function wc(e, t) {
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
	function Tc(e) {
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
	function Ec(e) {
		var t = e.alternate;
		t !== null && (e.alternate = null, Ec(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[zi], delete t[Bi], delete t[Hi], delete t[Ui], delete t[Wi])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
	}
	function Dc(e) {
		return e.tag === 5 || e.tag === 3 || e.tag === 4;
	}
	function Oc(e) {
		a: for (;;) {
			for (; e.sibling === null;) {
				if (e.return === null || Dc(e.return)) return null;
				e = e.return;
			}
			for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
				if (e.flags & 2 || e.child === null || e.tag === 4) continue a;
				e.child.return = e, e = e.child;
			}
			if (!(e.flags & 2)) return e.stateNode;
		}
	}
	function kc(e, t, n) {
		var r = e.tag;
		if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Ei));
		else if (r !== 4 && (e = e.child, e !== null)) for (kc(e, t, n), e = e.sibling; e !== null;) kc(e, t, n), e = e.sibling;
	}
	function Ac(e, t, n) {
		var r = e.tag;
		if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
		else if (r !== 4 && (e = e.child, e !== null)) for (Ac(e, t, n), e = e.sibling; e !== null;) Ac(e, t, n), e = e.sibling;
	}
	var K = null, jc = !1;
	function Mc(e, t, n) {
		for (n = n.child; n !== null;) Nc(e, t, n), n = n.sibling;
	}
	function Nc(e, t, n) {
		if (jt && typeof jt.onCommitFiberUnmount == "function") try {
			jt.onCommitFiberUnmount(At, n);
		} catch {}
		switch (n.tag) {
			case 5: _c || yc(n, t);
			case 6:
				var r = K, i = jc;
				K = null, Mc(e, t, n), K = r, jc = i, K !== null && (jc ? (e = K, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : K.removeChild(n.stateNode));
				break;
			case 18:
				K !== null && (jc ? (e = K, n = n.stateNode, e.nodeType === 8 ? Fi(e.parentNode, n) : e.nodeType === 1 && Fi(e, n), _n(e)) : Fi(K, n.stateNode));
				break;
			case 4:
				r = K, i = jc, K = n.stateNode.containerInfo, jc = !0, Mc(e, t, n), K = r, jc = i;
				break;
			case 0:
			case 11:
			case 14:
			case 15:
				if (!_c && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
					i = r = r.next;
					do {
						var a = i, o = a.destroy;
						a = a.tag, o !== void 0 && (a & 2 || a & 4) && bc(n, t, o), i = i.next;
					} while (i !== r);
				}
				Mc(e, t, n);
				break;
			case 1:
				if (!_c && (yc(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
					r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
				} catch (e) {
					Q(n, t, e);
				}
				Mc(e, t, n);
				break;
			case 21:
				Mc(e, t, n);
				break;
			case 22:
				n.mode & 1 ? (_c = (r = _c) || n.memoizedState !== null, Mc(e, t, n), _c = r) : Mc(e, t, n);
				break;
			default: Mc(e, t, n);
		}
	}
	function Pc(e) {
		var t = e.updateQueue;
		if (t !== null) {
			e.updateQueue = null;
			var n = e.stateNode;
			n === null && (n = e.stateNode = new vc()), t.forEach(function(t) {
				var r = Ul.bind(null, e, t);
				n.has(t) || (n.add(t), t.then(r, r));
			});
		}
	}
	function Fc(e, t) {
		var n = t.deletions;
		if (n !== null) for (var i = 0; i < n.length; i++) {
			var a = n[i];
			try {
				var o = e, s = t, c = s;
				a: for (; c !== null;) {
					switch (c.tag) {
						case 5:
							K = c.stateNode, jc = !1;
							break a;
						case 3:
							K = c.stateNode.containerInfo, jc = !0;
							break a;
						case 4:
							K = c.stateNode.containerInfo, jc = !0;
							break a;
					}
					c = c.return;
				}
				if (K === null) throw Error(r(160));
				Nc(o, s, a), K = null, jc = !1;
				var l = a.alternate;
				l !== null && (l.return = null), a.return = null;
			} catch (e) {
				Q(a, t, e);
			}
		}
		if (t.subtreeFlags & 12854) for (t = t.child; t !== null;) Ic(t, e), t = t.sibling;
	}
	function Ic(e, t) {
		var n = e.alternate, i = e.flags;
		switch (e.tag) {
			case 0:
			case 11:
			case 14:
			case 15:
				if (Fc(t, e), Lc(e), i & 4) {
					try {
						Cc(3, e, e.return), wc(3, e);
					} catch (t) {
						Q(e, e.return, t);
					}
					try {
						Cc(5, e, e.return);
					} catch (t) {
						Q(e, e.return, t);
					}
				}
				break;
			case 1:
				Fc(t, e), Lc(e), i & 512 && n !== null && yc(n, n.return);
				break;
			case 5:
				if (Fc(t, e), Lc(e), i & 512 && n !== null && yc(n, n.return), e.flags & 32) {
					var a = e.stateNode;
					try {
						k(a, "");
					} catch (t) {
						Q(e, e.return, t);
					}
				}
				if (i & 4 && (a = e.stateNode, a != null)) {
					var o = e.memoizedProps, s = n === null ? o : n.memoizedProps, c = e.type, l = e.updateQueue;
					if (e.updateQueue = null, l !== null) try {
						c === "input" && o.type === "radio" && o.name != null && Ee(a, o), Ke(c, s);
						var u = Ke(c, o);
						for (s = 0; s < l.length; s += 2) {
							var d = l[s], f = l[s + 1];
							d === "style" ? Ue(a, f) : d === "dangerouslySetInnerHTML" ? ze(a, f) : d === "children" ? k(a, f) : S(a, d, f, u);
						}
						switch (c) {
							case "input":
								De(a, o);
								break;
							case "textarea":
								Pe(a, o);
								break;
							case "select":
								var p = a._wrapperState.wasMultiple;
								a._wrapperState.wasMultiple = !!o.multiple;
								var m = o.value;
								m == null ? p !== !!o.multiple && (o.defaultValue == null ? je(a, !!o.multiple, o.multiple ? [] : "", !1) : je(a, !!o.multiple, o.defaultValue, !0)) : je(a, !!o.multiple, m, !1);
						}
						a[Bi] = o;
					} catch (t) {
						Q(e, e.return, t);
					}
				}
				break;
			case 6:
				if (Fc(t, e), Lc(e), i & 4) {
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
				if (Fc(t, e), Lc(e), i & 4 && n !== null && n.memoizedState.isDehydrated) try {
					_n(t.containerInfo);
				} catch (t) {
					Q(e, e.return, t);
				}
				break;
			case 4:
				Fc(t, e), Lc(e);
				break;
			case 13:
				Fc(t, e), Lc(e), a = e.child, a.flags & 8192 && (o = a.memoizedState !== null, a.stateNode.isHidden = o, !o || a.alternate !== null && a.alternate.memoizedState !== null || (tl = j())), i & 4 && Pc(e);
				break;
			case 22:
				if (d = n !== null && n.memoizedState !== null, e.mode & 1 ? (_c = (u = _c) || d, Fc(t, e), _c = u) : Fc(t, e), Lc(e), i & 8192) {
					if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !d && e.mode & 1) for (G = e, d = e.child; d !== null;) {
						for (f = G = d; G !== null;) {
							switch (p = G, m = p.child, p.tag) {
								case 0:
								case 11:
								case 14:
								case 15:
									Cc(4, p, p.return);
									break;
								case 1:
									yc(p, p.return);
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
									yc(p, p.return);
									break;
								case 22: if (p.memoizedState !== null) {
									Vc(f);
									continue;
								}
							}
							m === null ? Vc(f) : (m.return = p, G = m);
						}
						d = d.sibling;
					}
					a: for (d = null, f = e;;) {
						if (f.tag === 5) {
							if (d === null) {
								d = f;
								try {
									a = f.stateNode, u ? (o = a.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (c = f.stateNode, l = f.memoizedProps.style, s = l != null && l.hasOwnProperty("display") ? l.display : null, c.style.display = He("display", s));
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
				Fc(t, e), Lc(e), i & 4 && Pc(e);
				break;
			case 21: break;
			default: Fc(t, e), Lc(e);
		}
	}
	function Lc(e) {
		var t = e.flags;
		if (t & 2) {
			try {
				a: {
					for (var n = e.return; n !== null;) {
						if (Dc(n)) {
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
						i.flags & 32 && (k(a, ""), i.flags &= -33), Ac(e, Oc(e), a);
						break;
					case 3:
					case 4:
						var o = i.stateNode.containerInfo;
						kc(e, Oc(e), o);
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
	function Rc(e, t, n) {
		G = e, zc(e, t, n);
	}
	function zc(e, t, n) {
		for (var r = (e.mode & 1) != 0; G !== null;) {
			var i = G, a = i.child;
			if (i.tag === 22 && r) {
				var o = i.memoizedState !== null || gc;
				if (!o) {
					var s = i.alternate, c = s !== null && s.memoizedState !== null || _c;
					s = gc;
					var l = _c;
					if (gc = o, (_c = c) && !l) for (G = i; G !== null;) o = G, c = o.child, o.tag === 22 && o.memoizedState !== null || c === null ? Hc(i) : (c.return = o, G = c);
					for (; a !== null;) G = a, zc(a, t, n), a = a.sibling;
					G = i, gc = s, _c = l;
				}
				Bc(e, t, n);
			} else i.subtreeFlags & 8772 && a !== null ? (a.return = i, G = a) : Bc(e, t, n);
		}
	}
	function Bc(e) {
		for (; G !== null;) {
			var t = G;
			if (t.flags & 8772) {
				var n = t.alternate;
				try {
					if (t.flags & 8772) switch (t.tag) {
						case 0:
						case 11:
						case 15:
							_c || wc(5, t);
							break;
						case 1:
							var i = t.stateNode;
							if (t.flags & 4 && !_c) if (n === null) i.componentDidMount();
							else {
								var a = t.elementType === t.type ? n.memoizedProps : Ss(t.type, n.memoizedProps);
								i.componentDidUpdate(a, n.memoizedState, i.__reactInternalSnapshotBeforeUpdate);
							}
							var o = t.updateQueue;
							o !== null && mo(t, o, i);
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
								mo(t, s, n);
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
										f !== null && _n(f);
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
					_c || t.flags & 512 && Tc(t);
				} catch (e) {
					Q(t, t.return, e);
				}
			}
			if (t === e) {
				G = null;
				break;
			}
			if (n = t.sibling, n !== null) {
				n.return = t.return, G = n;
				break;
			}
			G = t.return;
		}
	}
	function Vc(e) {
		for (; G !== null;) {
			var t = G;
			if (t === e) {
				G = null;
				break;
			}
			var n = t.sibling;
			if (n !== null) {
				n.return = t.return, G = n;
				break;
			}
			G = t.return;
		}
	}
	function Hc(e) {
		for (; G !== null;) {
			var t = G;
			try {
				switch (t.tag) {
					case 0:
					case 11:
					case 15:
						var n = t.return;
						try {
							wc(4, t);
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
							Tc(t);
						} catch (e) {
							Q(t, a, e);
						}
						break;
					case 5:
						var o = t.return;
						try {
							Tc(t);
						} catch (e) {
							Q(t, o, e);
						}
				}
			} catch (e) {
				Q(t, t.return, e);
			}
			if (t === e) {
				G = null;
				break;
			}
			var s = t.sibling;
			if (s !== null) {
				s.return = t.return, G = s;
				break;
			}
			G = t.return;
		}
	}
	var Uc = Math.ceil, Wc = C.ReactCurrentDispatcher, Gc = C.ReactCurrentOwner, Kc = C.ReactCurrentBatchConfig, q = 0, J = null, Y = null, X = 0, qc = 0, Jc = Zi(0), Z = 0, Yc = null, Xc = 0, Zc = 0, Qc = 0, $c = null, el = null, tl = 0, nl = Infinity, rl = null, il = !1, al = null, ol = null, sl = !1, cl = null, ll = 0, ul = 0, dl = null, fl = -1, pl = 0;
	function ml() {
		return q & 6 ? j() : fl === -1 ? fl = j() : fl;
	}
	function hl(e) {
		return e.mode & 1 ? q & 2 && X !== 0 ? X & -X : za.transition === null ? (e = P, e === 0 ? (e = window.event, e = e === void 0 ? 16 : Tn(e.type), e) : e) : (pl === 0 && (pl = Ut()), pl) : 1;
	}
	function gl(e, t, n, i) {
		if (50 < ul) throw ul = 0, dl = null, Error(r(185));
		Gt(e, n, i), (!(q & 2) || e !== J) && (e === J && (!(q & 2) && (Zc |= n), Z === 4 && Sl(e, X)), _l(e, i), n === 1 && q === 0 && !(t.mode & 1) && (nl = j() + 500, la && pa()));
	}
	function _l(e, t) {
		var n = e.callbackNode;
		Vt(e, t);
		var r = zt(e, e === J ? X : 0);
		if (r === 0) n !== null && St(n), e.callbackNode = null, e.callbackPriority = 0;
		else if (t = r & -r, e.callbackPriority !== t) {
			if (n != null && St(n), t === 1) e.tag === 0 ? fa(Cl.bind(null, e)) : da(Cl.bind(null, e)), Ni(function() {
				!(q & 6) && pa();
			}), n = null;
			else {
				switch (Jt(r)) {
					case 1:
						n = Et;
						break;
					case 4:
						n = Dt;
						break;
					case 16:
						n = M;
						break;
					case 536870912:
						n = kt;
						break;
					default: n = M;
				}
				n = Gl(n, vl.bind(null, e));
			}
			e.callbackPriority = t, e.callbackNode = n;
		}
	}
	function vl(e, t) {
		if (fl = -1, pl = 0, q & 6) throw Error(r(327));
		var n = e.callbackNode;
		if (Rl() && e.callbackNode !== n) return null;
		var i = zt(e, e === J ? X : 0);
		if (i === 0) return null;
		if (i & 30 || (i & e.expiredLanes) !== 0 || t) t = jl(e, i);
		else {
			t = i;
			var a = q;
			q |= 2;
			var o = kl();
			(J !== e || X !== t) && (rl = null, nl = j() + 500, Dl(e, t));
			do
				try {
					Nl();
					break;
				} catch (t) {
					Ol(e, t);
				}
			while (1);
			Xa(), Wc.current = o, q = a, Y === null ? (J = null, X = 0, t = Z) : t = 0;
		}
		if (t !== 0) {
			if (t === 2 && (a = Ht(e), a !== 0 && (i = a, t = yl(e, a))), t === 1) throw n = Yc, Dl(e, 0), Sl(e, i), _l(e, j()), n;
			if (t === 6) Sl(e, i);
			else {
				if (a = e.current.alternate, !(i & 30) && !xl(a) && (t = jl(e, i), t === 2 && (o = Ht(e), o !== 0 && (i = o, t = yl(e, o))), t === 1)) throw n = Yc, Dl(e, 0), Sl(e, i), _l(e, j()), n;
				switch (e.finishedWork = a, e.finishedLanes = i, t) {
					case 0:
					case 1: throw Error(r(345));
					case 2:
						Il(e, el, rl);
						break;
					case 3:
						if (Sl(e, i), (i & 130023424) === i && (t = tl + 500 - j(), 10 < t)) {
							if (zt(e, 0) !== 0) break;
							if (a = e.suspendedLanes, (a & i) !== i) {
								ml(), e.pingedLanes |= e.suspendedLanes & a;
								break;
							}
							e.timeoutHandle = Ai(Il.bind(null, e, el, rl), t);
							break;
						}
						Il(e, el, rl);
						break;
					case 4:
						if (Sl(e, i), (i & 4194240) === i) break;
						for (t = e.eventTimes, a = -1; 0 < i;) {
							var s = 31 - N(i);
							o = 1 << s, s = t[s], s > a && (a = s), i &= ~o;
						}
						if (i = a, i = j() - i, i = (120 > i ? 120 : 480 > i ? 480 : 1080 > i ? 1080 : 1920 > i ? 1920 : 3e3 > i ? 3e3 : 4320 > i ? 4320 : 1960 * Uc(i / 1960)) - i, 10 < i) {
							e.timeoutHandle = Ai(Il.bind(null, e, el, rl), i);
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
		return _l(e, j()), e.callbackNode === n ? vl.bind(null, e) : null;
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
						if (!Fr(a(), i)) return !1;
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
			var n = 31 - N(t), r = 1 << n;
			e[n] = -1, t &= ~r;
		}
	}
	function Cl(e) {
		if (q & 6) throw Error(r(327));
		Rl();
		var t = zt(e, 0);
		if (!(t & 1)) return _l(e, j()), null;
		var n = jl(e, t);
		if (e.tag !== 0 && n === 2) {
			var i = Ht(e);
			i !== 0 && (t = i, n = yl(e, i));
		}
		if (n === 1) throw n = Yc, Dl(e, 0), Sl(e, t), _l(e, j()), n;
		if (n === 6) throw Error(r(345));
		return e.finishedWork = e.current.alternate, e.finishedLanes = t, Il(e, el, rl), _l(e, j()), null;
	}
	function wl(e, t) {
		var n = q;
		q |= 1;
		try {
			return e(t);
		} finally {
			q = n, q === 0 && (nl = j() + 500, la && pa());
		}
	}
	function Tl(e) {
		cl !== null && cl.tag === 0 && !(q & 6) && Rl();
		var t = q;
		q |= 1;
		var n = Kc.transition, r = P;
		try {
			if (Kc.transition = null, P = 1, e) return e();
		} finally {
			P = r, Kc.transition = n, q = t, !(q & 6) && pa();
		}
	}
	function El() {
		qc = Jc.current, L(Jc);
	}
	function Dl(e, t) {
		e.finishedWork = null, e.finishedLanes = 0;
		var n = e.timeoutHandle;
		if (n !== -1 && (e.timeoutHandle = -1, ji(n)), Y !== null) for (n = Y.return; n !== null;) {
			var r = n;
			switch (Ea(r), r.tag) {
				case 1:
					r = r.type.childContextTypes, r != null && ra();
					break;
				case 3:
					xo(), L($i), L(z), Eo();
					break;
				case 5:
					Co(r);
					break;
				case 4:
					xo();
					break;
				case 13:
					L(V);
					break;
				case 19:
					L(V);
					break;
				case 10:
					Za(r.type._context);
					break;
				case 22:
				case 23: El();
			}
			n = n.return;
		}
		if (J = e, Y = e = Xl(e.current, null), X = qc = t, Z = 0, Yc = null, Qc = Zc = Xc = 0, el = $c = null, to !== null) {
			for (t = 0; t < to.length; t++) if (n = to[t], r = n.interleaved, r !== null) {
				n.interleaved = null;
				var i = r.next, a = n.pending;
				if (a !== null) {
					var o = a.next;
					a.next = i, r.next = o;
				}
				n.pending = r;
			}
			to = null;
		}
		return e;
	}
	function Ol(e, t) {
		do {
			var n = Y;
			try {
				if (Xa(), Do.current = vs, Ao) {
					for (var i = H.memoizedState; i !== null;) {
						var a = i.queue;
						a !== null && (a.pending = null), i = i.next;
					}
					Ao = !1;
				}
				if (ko = 0, W = U = H = null, jo = !1, Mo = 0, Gc.current = null, n === null || n.return === null) {
					Z = 1, Yc = t, Y = null;
					break;
				}
				a: {
					var o = e, s = n.return, c = n, l = t;
					if (t = X, c.flags |= 32768, typeof l == "object" && l && typeof l.then == "function") {
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
								Fs(o, u, t), Al();
								break a;
							}
							l = Error(r(426));
						}
					} else if (B && c.mode & 1) {
						var _ = Is(s);
						if (_ !== null) {
							!(_.flags & 65536) && (_.flags |= 256), Ls(_, s, c, o, t), Ra(ks(l, c));
							break a;
						}
					}
					o = l = ks(l, c), Z !== 4 && (Z = 2), $c === null ? $c = [o] : $c.push(o), o = s;
					do {
						switch (o.tag) {
							case 3:
								o.flags |= 65536, t &= -t, o.lanes |= t;
								var v = Ns(o, l, t);
								fo(o, v);
								break a;
							case 1:
								c = l;
								var y = o.type, b = o.stateNode;
								if (!(o.flags & 128) && (typeof y.getDerivedStateFromError == "function" || b !== null && typeof b.componentDidCatch == "function" && (ol === null || !ol.has(b)))) {
									o.flags |= 65536, t &= -t, o.lanes |= t;
									var x = Ps(o, c, t);
									fo(o, x);
									break a;
								}
						}
						o = o.return;
					} while (o !== null);
				}
				Fl(n);
			} catch (e) {
				t = e, Y === n && n !== null && (Y = n = n.return);
				continue;
			}
			break;
		} while (1);
	}
	function kl() {
		var e = Wc.current;
		return Wc.current = vs, e === null ? vs : e;
	}
	function Al() {
		(Z === 0 || Z === 3 || Z === 2) && (Z = 4), J === null || !(Xc & 268435455) && !(Zc & 268435455) || Sl(J, X);
	}
	function jl(e, t) {
		var n = q;
		q |= 2;
		var i = kl();
		(J !== e || X !== t) && (rl = null, Dl(e, t));
		do
			try {
				Ml();
				break;
			} catch (t) {
				Ol(e, t);
			}
		while (1);
		if (Xa(), q = n, Wc.current = i, Y !== null) throw Error(r(261));
		return J = null, X = 0, Z;
	}
	function Ml() {
		for (; Y !== null;) Pl(Y);
	}
	function Nl() {
		for (; Y !== null && !Ct();) Pl(Y);
	}
	function Pl(e) {
		var t = Wl(e.alternate, e, qc);
		e.memoizedProps = e.pendingProps, t === null ? Fl(e) : Y = t, Gc.current = null;
	}
	function Fl(e) {
		var t = e;
		do {
			var n = t.alternate;
			if (e = t.return, t.flags & 32768) {
				if (n = hc(n, t), n !== null) {
					n.flags &= 32767, Y = n;
					return;
				}
				if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
				else {
					Z = 6, Y = null;
					return;
				}
			} else if (n = mc(n, t, qc), n !== null) {
				Y = n;
				return;
			}
			if (t = t.sibling, t !== null) {
				Y = t;
				return;
			}
			Y = t = e;
		} while (t !== null);
		Z === 0 && (Z = 5);
	}
	function Il(e, t, n) {
		var r = P, i = Kc.transition;
		try {
			Kc.transition = null, P = 1, Ll(e, t, n, r);
		} finally {
			Kc.transition = i, P = r;
		}
		return null;
	}
	function Ll(e, t, n, i) {
		do
			Rl();
		while (cl !== null);
		if (q & 6) throw Error(r(327));
		n = e.finishedWork;
		var a = e.finishedLanes;
		if (n === null) return null;
		if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(r(177));
		e.callbackNode = null, e.callbackPriority = 0;
		var o = n.lanes | n.childLanes;
		if (Kt(e, o), e === J && (Y = J = null, X = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || sl || (sl = !0, Gl(M, function() {
			return Rl(), null;
		})), o = (n.flags & 15990) != 0, n.subtreeFlags & 15990 || o) {
			o = Kc.transition, Kc.transition = null;
			var s = P;
			P = 1;
			var c = q;
			q |= 4, Gc.current = null, Sc(e, n), Ic(n, e), Hr(Oi), yn = !!Di, Oi = Di = null, e.current = n, Rc(n, e, a), wt(), q = c, P = s, Kc.transition = o;
		} else e.current = n;
		if (sl && (sl = !1, cl = e, ll = a), o = e.pendingLanes, o === 0 && (ol = null), Mt(n.stateNode, i), _l(e, j()), t !== null) for (i = e.onRecoverableError, n = 0; n < t.length; n++) a = t[n], i(a.value, {
			componentStack: a.stack,
			digest: a.digest
		});
		if (il) throw il = !1, e = al, al = null, e;
		return ll & 1 && e.tag !== 0 && Rl(), o = e.pendingLanes, o & 1 ? e === dl ? ul++ : (ul = 0, dl = e) : ul = 0, pa(), null;
	}
	function Rl() {
		if (cl !== null) {
			var e = Jt(ll), t = Kc.transition, n = P;
			try {
				if (Kc.transition = null, P = 16 > e ? 16 : e, cl === null) var i = !1;
				else {
					if (e = cl, cl = null, ll = 0, q & 6) throw Error(r(331));
					var a = q;
					for (q |= 4, G = e.current; G !== null;) {
						var o = G, s = o.child;
						if (G.flags & 16) {
							var c = o.deletions;
							if (c !== null) {
								for (var l = 0; l < c.length; l++) {
									var u = c[l];
									for (G = u; G !== null;) {
										var d = G;
										switch (d.tag) {
											case 0:
											case 11:
											case 15: Cc(8, d, o);
										}
										var f = d.child;
										if (f !== null) f.return = d, G = f;
										else for (; G !== null;) {
											d = G;
											var p = d.sibling, m = d.return;
											if (Ec(d), d === u) {
												G = null;
												break;
											}
											if (p !== null) {
												p.return = m, G = p;
												break;
											}
											G = m;
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
								G = o;
							}
						}
						if (o.subtreeFlags & 2064 && s !== null) s.return = o, G = s;
						else b: for (; G !== null;) {
							if (o = G, o.flags & 2048) switch (o.tag) {
								case 0:
								case 11:
								case 15: Cc(9, o, o.return);
							}
							var v = o.sibling;
							if (v !== null) {
								v.return = o.return, G = v;
								break b;
							}
							G = o.return;
						}
					}
					var y = e.current;
					for (G = y; G !== null;) {
						s = G;
						var b = s.child;
						if (s.subtreeFlags & 2064 && b !== null) b.return = s, G = b;
						else b: for (s = y; G !== null;) {
							if (c = G, c.flags & 2048) try {
								switch (c.tag) {
									case 0:
									case 11:
									case 15: wc(9, c);
								}
							} catch (e) {
								Q(c, c.return, e);
							}
							if (c === s) {
								G = null;
								break b;
							}
							var x = c.sibling;
							if (x !== null) {
								x.return = c.return, G = x;
								break b;
							}
							G = c.return;
						}
					}
					if (q = a, pa(), jt && typeof jt.onPostCommitFiberRoot == "function") try {
						jt.onPostCommitFiberRoot(At, e);
					} catch {}
					i = !0;
				}
				return i;
			} finally {
				P = n, Kc.transition = t;
			}
		}
		return !1;
	}
	function zl(e, t, n) {
		t = ks(n, t), t = Ns(e, t, 1), e = lo(e, t, 1), t = ml(), e !== null && (Gt(e, 1, t), _l(e, t));
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
					e = ks(n, e), e = Ps(t, e, 1), t = lo(t, e, 1), e = ml(), t !== null && (Gt(t, 1, e), _l(t, e));
					break;
				}
			}
			t = t.return;
		}
	}
	function Bl(e, t, n) {
		var r = e.pingCache;
		r !== null && r.delete(t), t = ml(), e.pingedLanes |= e.suspendedLanes & n, J === e && (X & n) === n && (Z === 4 || Z === 3 && (X & 130023424) === X && 500 > j() - tl ? Dl(e, 0) : Qc |= n), _l(e, t);
	}
	function Vl(e, t) {
		t === 0 && (e.mode & 1 ? (t = Lt, Lt <<= 1, !(Lt & 130023424) && (Lt = 4194304)) : t = 1);
		var n = ml();
		e = io(e, t), e !== null && (Gt(e, t, n), _l(e, n));
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
		if (e !== null) if (e.memoizedProps !== t.pendingProps || $i.current) zs = !0;
		else {
			if ((e.lanes & n) === 0 && !(t.flags & 128)) return zs = !1, cc(e, t, n);
			zs = !!(e.flags & 131072);
		}
		else zs = !1, B && t.flags & 1048576 && wa(t, _a, t.index);
		switch (t.lanes = 0, t.tag) {
			case 2:
				var i = t.type;
				oc(e, t), e = t.pendingProps;
				var a = ta(t, z.current);
				$a(t, n), a = Io(null, t, i, e, a, n);
				var o = Lo();
				return t.flags |= 1, typeof a == "object" && a && typeof a.render == "function" && a.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, na(i) ? (o = !0, oa(t)) : o = !1, t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null, oo(t), a.updater = ws, t.stateNode = a, a._reactInternals = t, Os(t, i, e, n), t = Js(null, t, i, !0, o, n)) : (t.tag = 0, B && o && Ta(t), Bs(null, t, a, n), t = t.child), t;
			case 16:
				i = t.elementType;
				a: {
					switch (oc(e, t), e = t.pendingProps, a = i._init, i = a(i._payload), t.type = i, a = t.tag = Yl(i), e = Ss(i, e), a) {
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
					i = t.pendingProps, o = t.memoizedState, a = o.element, so(e, t), po(t, i, null, n);
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
					} else for (Oa = Ii(t.stateNode.containerInfo.firstChild), Da = t, B = !0, ka = null, n = Ga(t, null, i, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling;
					else {
						if (La(), i === a) {
							t = sc(e, t, n);
							break a;
						}
						Bs(e, t, i, n);
					}
					t = t.child;
				}
				return t;
			case 5: return So(t), e === null && Na(t), i = t.type, a = t.pendingProps, o = e === null ? null : e.memoizedProps, s = a.children, ki(i, a) ? s = null : o !== null && ki(i, o) && (t.flags |= 32), Gs(e, t), Bs(e, t, s, n), t.child;
			case 6: return e === null && Na(t), null;
			case 13: return $s(e, t, n);
			case 4: return bo(t, t.stateNode.containerInfo), i = t.pendingProps, e === null ? t.child = Wa(t, null, i, n) : Bs(e, t, i, n), t.child;
			case 11: return i = t.type, a = t.pendingProps, a = t.elementType === i ? a : Ss(i, a), Vs(e, t, i, a, n);
			case 7: return Bs(e, t, t.pendingProps, n), t.child;
			case 8: return Bs(e, t, t.pendingProps.children, n), t.child;
			case 12: return Bs(e, t, t.pendingProps.children, n), t.child;
			case 10:
				a: {
					if (i = t.type._context, a = t.pendingProps, o = t.memoizedProps, s = a.value, R(Ka, i._currentValue), i._currentValue = s, o !== null) if (Fr(o.value, s)) {
						if (o.children === a.children && !$i.current) {
							t = sc(e, t, n);
							break a;
						}
					} else for (o = t.child, o !== null && (o.return = t); o !== null;) {
						var c = o.dependencies;
						if (c !== null) {
							s = o.child;
							for (var l = c.firstContext; l !== null;) {
								if (l.context === i) {
									if (o.tag === 1) {
										l = co(-1, n & -n), l.tag = 2;
										var u = o.updateQueue;
										if (u !== null) {
											u = u.shared;
											var d = u.pending;
											d === null ? l.next = l : (l.next = d.next, d.next = l), u.pending = l;
										}
									}
									o.lanes |= n, l = o.alternate, l !== null && (l.lanes |= n), Qa(o.return, n, t), c.lanes |= n;
									break;
								}
								l = l.next;
							}
						} else if (o.tag === 10) s = o.type === t.type ? null : o.child;
						else if (o.tag === 18) {
							if (s = o.return, s === null) throw Error(r(341));
							s.lanes |= n, c = s.alternate, c !== null && (c.lanes |= n), Qa(s, n, t), s = o.sibling;
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
			case 9: return a = t.type, i = t.pendingProps.children, $a(t, n), a = eo(a), i = i(a), t.flags |= 1, Bs(e, t, i, n), t.child;
			case 14: return i = t.type, a = Ss(i, t.pendingProps), a = Ss(i.type, a), Hs(e, t, i, a, n);
			case 15: return Us(e, t, t.type, t.pendingProps, n);
			case 17: return i = t.type, a = t.pendingProps, a = t.elementType === i ? a : Ss(i, a), oc(e, t), t.tag = 1, na(i) ? (e = !0, oa(t)) : e = !1, $a(t, n), Es(t, i, a), Os(t, i, a, n), Js(null, t, i, !0, e, n);
			case 19: return ac(e, t, n);
			case 22: return Ws(e, t, n);
		}
		throw Error(r(156, t.tag));
	};
	function Gl(e, t) {
		return xt(e, t);
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
			if (e = e.$$typeof, e === se) return 11;
			if (e === T) return 14;
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
			case ne: return Ql(n.children, a, o, t);
			case re:
				s = 8, a |= 8;
				break;
			case ie: return e = ql(12, n, t, a | 2), e.elementType = ie, e.lanes = o, e;
			case ce: return e = ql(13, n, t, a), e.elementType = ce, e.lanes = o, e;
			case w: return e = ql(19, n, t, a), e.elementType = w, e.lanes = o, e;
			case D: return $l(n, a, o, t);
			default:
				if (typeof e == "object" && e) switch (e.$$typeof) {
					case ae:
						s = 10;
						break a;
					case oe:
						s = 9;
						break a;
					case se:
						s = 11;
						break a;
					case T:
						s = 14;
						break a;
					case E:
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
		return e = ql(22, e, r, t), e.elementType = D, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
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
		this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Wt(0), this.expirationTimes = Wt(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Wt(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null;
	}
	function ru(e, t, n, r, i, a, o, s, c) {
		return e = new nu(e, t, n, s, c), t === 1 ? (t = 1, !0 === a && (t |= 8)) : t = 0, a = ql(3, null, null, t), e.current = a, a.stateNode = e, a.memoizedState = {
			element: r,
			isDehydrated: n,
			cache: null,
			transitions: null,
			pendingSuspenseBoundaries: null
		}, oo(a), e;
	}
	function iu(e, t, n) {
		var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
		return {
			$$typeof: te,
			key: r == null ? null : "" + r,
			children: e,
			containerInfo: t,
			implementation: n
		};
	}
	function au(e) {
		if (!e) return Qi;
		e = e._reactInternals;
		a: {
			if (A(e) !== e || e.tag !== 1) throw Error(r(170));
			var t = e;
			do {
				switch (t.tag) {
					case 3:
						t = t.stateNode.context;
						break a;
					case 1: if (na(t.type)) {
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
			if (na(n)) return aa(e, n, t);
		}
		return t;
	}
	function ou(e, t, n, r, i, a, o, s, c) {
		return e = ru(n, r, !0, e, i, a, o, s, c), e.context = au(null), n = e.current, r = ml(), i = hl(n), a = co(r, i), a.callback = t ?? null, lo(n, a, i), e.current.lanes = i, Gt(e, i, r), _l(e, r), e;
	}
	function su(e, t, n, r) {
		var i = t.current, a = ml(), o = hl(i);
		return n = au(n), t.context === null ? t.context = n : t.pendingContext = n, t = co(a, o), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = lo(i, t, o), e !== null && (gl(e, i, o, a), uo(e, i, o)), o;
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
			}), t[Vi] = null;
		}
	};
	function mu(e) {
		this._internalRoot = e;
	}
	mu.prototype.unstable_scheduleHydration = function(e) {
		if (e) {
			var t = Qt();
			e = {
				blockedOn: null,
				target: e,
				priority: t
			};
			for (var n = 0; n < cn.length && t !== 0 && t < cn[n].priority; n++);
			cn.splice(n, 0, e), n === 0 && fn(e);
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
			return e._reactRootContainer = o, e[Vi] = o.current, hi(e.nodeType === 8 ? e.parentNode : e), Tl(), o;
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
		return e._reactRootContainer = c, e[Vi] = c.current, hi(e.nodeType === 8 ? e.parentNode : e), Tl(function() {
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
	Yt = function(e) {
		switch (e.tag) {
			case 3:
				var t = e.stateNode;
				if (t.current.memoizedState.isDehydrated) {
					var n = Rt(t.pendingLanes);
					n !== 0 && (qt(t, n | 1), _l(t, j()), !(q & 6) && (nl = j() + 500, pa()));
				}
				break;
			case 13: Tl(function() {
				var t = io(e, 1);
				t !== null && gl(t, e, 1, ml());
			}), uu(e, 1);
		}
	}, Xt = function(e) {
		if (e.tag === 13) {
			var t = io(e, 134217728);
			t !== null && gl(t, e, 134217728, ml()), uu(e, 134217728);
		}
	}, Zt = function(e) {
		if (e.tag === 13) {
			var t = hl(e), n = io(e, t);
			n !== null && gl(n, e, t, ml()), uu(e, t);
		}
	}, Qt = function() {
		return P;
	}, $t = function(e, t) {
		var n = P;
		try {
			return P = e, t();
		} finally {
			P = n;
		}
	}, Ye = function(e, t, n) {
		switch (t) {
			case "input":
				if (De(e, n), t = n.name, n.type === "radio" && t != null) {
					for (n = e; n.parentNode;) n = n.parentNode;
					for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + "][type=\"radio\"]"), t = 0; t < n.length; t++) {
						var i = n[t];
						if (i !== e && i.form === e.form) {
							var a = Ji(i);
							if (!a) throw Error(r(90));
							Se(i), De(i, a);
						}
					}
				}
				break;
			case "textarea":
				Pe(e, n);
				break;
			case "select": t = n.value, t != null && je(e, !!n.multiple, t, !1);
		}
	}, tt = wl, nt = Tl;
	var bu = {
		usingClientEntryPoint: !1,
		Events: [
			Ki,
			qi,
			Ji,
			$e,
			et,
			wl
		]
	}, xu = {
		findFiberByHostInstance: Gi,
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
			return e = yt(e), e === null ? null : e.stateNode;
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
			At = Cu.inject(Su), jt = Cu;
		} catch {}
	}
	e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = bu, e.createPortal = function(e, t) {
		var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
		if (!hu(t)) throw Error(r(200));
		return iu(e, t, null, n);
	}, e.createRoot = function(e, t) {
		if (!hu(e)) throw Error(r(299));
		var n = !1, i = "", a = fu;
		return t != null && (!0 === t.unstable_strictMode && (n = !0), t.identifierPrefix !== void 0 && (i = t.identifierPrefix), t.onRecoverableError !== void 0 && (a = t.onRecoverableError)), t = ru(e, 1, !1, null, null, n, !1, i, a), e[Vi] = t.current, hi(e.nodeType === 8 ? e.parentNode : e), new pu(t);
	}, e.findDOMNode = function(e) {
		if (e == null) return null;
		if (e.nodeType === 1) return e;
		var t = e._reactInternals;
		if (t === void 0) throw typeof e.render == "function" ? Error(r(188)) : (e = Object.keys(e).join(","), Error(r(268, e)));
		return e = yt(t), e = e === null ? null : e.stateNode, e;
	}, e.flushSync = function(e) {
		return Tl(e);
	}, e.hydrate = function(e, t, n) {
		if (!gu(t)) throw Error(r(200));
		return yu(null, e, t, !0, n);
	}, e.hydrateRoot = function(e, t, n) {
		if (!hu(e)) throw Error(r(405));
		var i = n != null && n.hydratedSources || null, a = !1, o = "", s = fu;
		if (n != null && (!0 === n.unstable_strictMode && (a = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = ou(t, null, e, 1, n ?? null, a, !1, o, s), e[Vi] = t.current, hi(e), i) for (e = 0; e < i.length; e++) n = i[e], a = n._getVersion, a = a(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, a] : t.mutableSourceEagerHydrationData.push(n, a);
		return new mu(t);
	}, e.render = function(e, t, n) {
		if (!gu(t)) throw Error(r(200));
		return yu(null, e, t, !1, n);
	}, e.unmountComponentAtNode = function(e) {
		if (!gu(e)) throw Error(r(40));
		return e._reactRootContainer ? (Tl(function() {
			yu(null, null, e, !1, function() {
				e._reactRootContainer = null, e[Vi] = null;
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
	var n = t && t.cache ? t.cache : ce, r = t && t.serializer ? t.serializer : oe;
	return (t && t.strategy ? t.strategy : re)(e, {
		cache: n,
		serializer: r
	});
}
function C(e) {
	return e == null || typeof e == "number" || typeof e == "boolean";
}
function ee(e, t, n, r) {
	var i = C(r) ? r : n(r), a = t.get(i);
	return a === void 0 && (a = e.call(this, r), t.set(i, a)), a;
}
function te(e, t, n) {
	var r = Array.prototype.slice.call(arguments, 3), i = n(r), a = t.get(i);
	return a === void 0 && (a = e.apply(this, r), t.set(i, a)), a;
}
function ne(e, t, n, r, i) {
	return n.bind(t, e, r, i);
}
function re(e, t) {
	var n = e.length === 1 ? ee : te;
	return ne(e, this, n, t.cache.create(), t.serializer);
}
function ie(e, t) {
	return ne(e, this, te, t.cache.create(), t.serializer);
}
function ae(e, t) {
	return ne(e, this, ee, t.cache.create(), t.serializer);
}
var oe = function() {
	return JSON.stringify(arguments);
};
function se() {
	this.cache = Object.create(null);
}
se.prototype.get = function(e) {
	return this.cache[e];
}, se.prototype.set = function(e, t) {
	this.cache[e] = t;
};
var ce = { create: function() {
	return new se();
} }, w = {
	variadic: ie,
	monadic: ae
};
//#endregion
//#region node_modules/.pnpm/@formatjs+ecma402-abstract@2.2.4/node_modules/@formatjs/ecma402-abstract/lib/utils.js
function T(e, t, n) {
	if (n === void 0 && (n = Error), !e) throw new n(t);
}
S(function() {
	for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
	return new ((e = Intl.NumberFormat).bind.apply(e, x([void 0], t, !1)))();
}, { strategy: w.variadic }), S(function() {
	for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
	return new ((e = Intl.DateTimeFormat).bind.apply(e, x([void 0], t, !1)))();
}, { strategy: w.variadic }), S(function() {
	for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
	return new ((e = Intl.PluralRules).bind.apply(e, x([void 0], t, !1)))();
}, { strategy: w.variadic }), S(function() {
	for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
	return new ((e = Intl.Locale).bind.apply(e, x([void 0], t, !1)))();
}, { strategy: w.variadic }), S(function() {
	for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
	return new ((e = Intl.ListFormat).bind.apply(e, x([void 0], t, !1)))();
}, { strategy: w.variadic });
//#endregion
//#region node_modules/.pnpm/@formatjs+icu-messageformat-parser@2.9.4/node_modules/@formatjs/icu-messageformat-parser/lib/error.js
var E;
(function(e) {
	e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})(E ||= {});
//#endregion
//#region node_modules/.pnpm/@formatjs+icu-messageformat-parser@2.9.4/node_modules/@formatjs/icu-messageformat-parser/lib/types.js
var D;
(function(e) {
	e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag";
})(D ||= {});
var le;
(function(e) {
	e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime";
})(le ||= {});
function ue(e) {
	return e.type === D.literal;
}
function O(e) {
	return e.type === D.argument;
}
function de(e) {
	return e.type === D.number;
}
function fe(e) {
	return e.type === D.date;
}
function pe(e) {
	return e.type === D.time;
}
function me(e) {
	return e.type === D.select;
}
function he(e) {
	return e.type === D.plural;
}
function ge(e) {
	return e.type === D.pound;
}
function _e(e) {
	return e.type === D.tag;
}
function ve(e) {
	return !!(e && typeof e == "object" && e.type === le.number);
}
function ye(e) {
	return !!(e && typeof e == "object" && e.type === le.dateTime);
}
//#endregion
//#region node_modules/.pnpm/@formatjs+icu-messageformat-parser@2.9.4/node_modules/@formatjs/icu-messageformat-parser/lib/regex.generated.js
var be = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, xe = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function Se(e) {
	var t = {};
	return e.replace(xe, function(e) {
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
var Ce = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
//#endregion
//#region node_modules/.pnpm/@formatjs+icu-skeleton-parser@1.8.8/node_modules/@formatjs/icu-skeleton-parser/lib/number.js
function we(e) {
	if (e.length === 0) throw Error("Number skeleton cannot be empty");
	for (var t = e.split(Ce).filter(function(e) {
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
function Te(e) {
	return e.replace(/^(.*?)-/, "");
}
var Ee = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, De = /^(@+)?(\+|#+)?[rs]?$/g, Oe = /(\*)(0+)|(#+)(0+)|(0+)/g, ke = /^(0+)$/;
function Ae(e) {
	var t = {};
	return e[e.length - 1] === "r" ? t.roundingPriority = "morePrecision" : e[e.length - 1] === "s" && (t.roundingPriority = "lessPrecision"), e.replace(De, function(e, n, r) {
		return typeof r == "string" ? r === "+" ? t.minimumSignificantDigits = n.length : n[0] === "#" ? t.maximumSignificantDigits = n.length : (t.minimumSignificantDigits = n.length, t.maximumSignificantDigits = n.length + (typeof r == "string" ? r.length : 0)) : (t.minimumSignificantDigits = n.length, t.maximumSignificantDigits = n.length), "";
	}), t;
}
function je(e) {
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
function Me(e) {
	var t;
	if (e[0] === "E" && e[1] === "E" ? (t = { notation: "engineering" }, e = e.slice(2)) : e[0] === "E" && (t = { notation: "scientific" }, e = e.slice(1)), t) {
		var n = e.slice(0, 2);
		if (n === "+!" ? (t.signDisplay = "always", e = e.slice(2)) : n === "+?" && (t.signDisplay = "exceptZero", e = e.slice(2)), !ke.test(e)) throw Error("Malformed concise eng/scientific notation");
		t.minimumIntegerDigits = e.length;
	}
	return t;
}
function Ne(e) {
	return je(e) || {};
}
function Pe(e) {
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
				t.style = "unit", t.unit = Te(i.options[0]);
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
					return v(v({}, e), Ne(t));
				}, {}));
				continue;
			case "engineering":
				t = v(v(v({}, t), { notation: "engineering" }), i.options.reduce(function(e, t) {
					return v(v({}, e), Ne(t));
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
				i.options[0].replace(Oe, function(e, n, r, i, a, o) {
					if (n) t.minimumIntegerDigits = r.length;
					else if (i && a) throw Error("We currently do not support maximum integer digits");
					else if (o) throw Error("We currently do not support exact integer digits");
					return "";
				});
				continue;
		}
		if (ke.test(i.stem)) {
			t.minimumIntegerDigits = i.stem.length;
			continue;
		}
		if (Ee.test(i.stem)) {
			if (i.options.length > 1) throw RangeError("Fraction-precision stems only accept a single optional option");
			i.stem.replace(Ee, function(e, n, r, i, a, o) {
				return r === "*" ? t.minimumFractionDigits = n.length : i && i[0] === "#" ? t.maximumFractionDigits = i.length : a && o ? (t.minimumFractionDigits = a.length, t.maximumFractionDigits = a.length + o.length) : (t.minimumFractionDigits = n.length, t.maximumFractionDigits = n.length), "";
			});
			var a = i.options[0];
			a === "w" ? t = v(v({}, t), { trailingZeroDisplay: "stripIfInteger" }) : a && (t = v(v({}, t), Ae(a)));
			continue;
		}
		if (De.test(i.stem)) {
			t = v(v({}, t), Ae(i.stem));
			continue;
		}
		var o = je(i.stem);
		o && (t = v(v({}, t), o));
		var s = Me(i.stem);
		s && (t = v(v({}, t), s));
	}
	return t;
}
//#endregion
//#region node_modules/.pnpm/@formatjs+icu-messageformat-parser@2.9.4/node_modules/@formatjs/icu-messageformat-parser/lib/time-data.generated.js
var Fe = {
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
function Ie(e, t) {
	for (var n = "", r = 0; r < e.length; r++) {
		var i = e.charAt(r);
		if (i === "j") {
			for (var a = 0; r + 1 < e.length && e.charAt(r + 1) === i;) a++, r++;
			var o = 1 + (a & 1), s = a < 2 ? 1 : 3 + (a >> 1), c = "a", l = Le(t);
			for ((l == "H" || l == "k") && (s = 0); s-- > 0;) n += c;
			for (; o-- > 0;) n = l + n;
		} else i === "J" ? n += "H" : n += i;
	}
	return n;
}
function Le(e) {
	var t = e.hourCycle;
	if (t === void 0 && e.hourCycles && e.hourCycles.length && (t = e.hourCycles[0]), t) switch (t) {
		case "h24": return "k";
		case "h23": return "H";
		case "h12": return "h";
		case "h11": return "K";
		default: throw Error("Invalid hourCycle");
	}
	var n = e.language, r;
	return n !== "root" && (r = e.maximize().region), (Fe[r || ""] || Fe[n || ""] || Fe[`${n}-001`] || Fe["001"])[0];
}
//#endregion
//#region node_modules/.pnpm/@formatjs+icu-messageformat-parser@2.9.4/node_modules/@formatjs/icu-messageformat-parser/lib/parser.js
var Re = RegExp(`^${be.source}*`), ze = RegExp(`${be.source}*\$`);
function k(e, t) {
	return {
		start: e,
		end: t
	};
}
var Be = !!String.prototype.startsWith && "_a".startsWith("a", 1), Ve = !!String.fromCodePoint, He = !!Object.fromEntries, Ue = !!String.prototype.codePointAt, We = !!String.prototype.trimStart, Ge = !!String.prototype.trimEnd, Ke = Number.isSafeInteger ? Number.isSafeInteger : function(e) {
	return typeof e == "number" && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991;
}, qe = !0;
try {
	qe = et("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu").exec("a")?.[0] === "a";
} catch {
	qe = !1;
}
var Je = Be ? function(e, t, n) {
	return e.startsWith(t, n);
} : function(e, t, n) {
	return e.slice(n, n + t.length) === t;
}, Ye = Ve ? String.fromCodePoint : function() {
	for (var e = [...arguments], t = "", n = e.length, r = 0, i; n > r;) {
		if (i = e[r++], i > 1114111) throw RangeError(i + " is not a valid code point");
		t += i < 65536 ? String.fromCharCode(i) : String.fromCharCode(((i -= 65536) >> 10) + 55296, i % 1024 + 56320);
	}
	return t;
}, Xe = He ? Object.fromEntries : function(e) {
	for (var t = {}, n = 0, r = e; n < r.length; n++) {
		var i = r[n], a = i[0];
		t[a] = i[1];
	}
	return t;
}, Ze = Ue ? function(e, t) {
	return e.codePointAt(t);
} : function(e, t) {
	var n = e.length;
	if (!(t < 0 || t >= n)) {
		var r = e.charCodeAt(t), i;
		return r < 55296 || r > 56319 || t + 1 === n || (i = e.charCodeAt(t + 1)) < 56320 || i > 57343 ? r : (r - 55296 << 10) + (i - 56320) + 65536;
	}
}, Qe = We ? function(e) {
	return e.trimStart();
} : function(e) {
	return e.replace(Re, "");
}, $e = Ge ? function(e) {
	return e.trimEnd();
} : function(e) {
	return e.replace(ze, "");
};
function et(e, t) {
	return new RegExp(e, t);
}
var tt;
if (qe) {
	var nt = et("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
	tt = function(e, t) {
		return nt.lastIndex = t, nt.exec(e)[1] ?? "";
	};
} else tt = function(e, t) {
	for (var n = [];;) {
		var r = Ze(e, t);
		if (r === void 0 || st(r) || ct(r)) break;
		n.push(r), t += r >= 65536 ? 2 : 1;
	}
	return Ye.apply(void 0, n);
};
var rt = function() {
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
					type: D.pound,
					location: k(o, this.clonePosition())
				});
			} else if (i === 60 && !this.ignoreTag && this.peek() === 47) {
				if (n) break;
				return this.error(E.UNMATCHED_CLOSING_TAG, k(this.clonePosition(), this.clonePosition()));
			} else if (i === 60 && !this.ignoreTag && it(this.peek() || 0)) {
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
				type: D.literal,
				value: `<${r}/>`,
				location: k(n, this.clonePosition())
			},
			err: null
		};
		if (this.bumpIf(">")) {
			var i = this.parseMessage(e + 1, t, !0);
			if (i.err) return i;
			var a = i.val, o = this.clonePosition();
			if (this.bumpIf("</")) {
				if (this.isEOF() || !it(this.char())) return this.error(E.INVALID_TAG, k(o, this.clonePosition()));
				var s = this.clonePosition();
				return r === this.parseTagName() ? (this.bumpSpace(), this.bumpIf(">") ? {
					val: {
						type: D.tag,
						value: r,
						children: a,
						location: k(n, this.clonePosition())
					},
					err: null
				} : this.error(E.INVALID_TAG, k(o, this.clonePosition()))) : this.error(E.UNMATCHED_CLOSING_TAG, k(s, this.clonePosition()));
			} else return this.error(E.UNCLOSED_TAG, k(n, this.clonePosition()));
		} else return this.error(E.INVALID_TAG, k(n, this.clonePosition()));
	}, e.prototype.parseTagName = function() {
		var e = this.offset();
		for (this.bump(); !this.isEOF() && ot(this.char());) this.bump();
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
		var s = k(n, this.clonePosition());
		return {
			val: {
				type: D.literal,
				value: r,
				location: s
			},
			err: null
		};
	}, e.prototype.tryParseLeftAngleBracket = function() {
		return !this.isEOF() && this.char() === 60 && (this.ignoreTag || !at(this.peek() || 0)) ? (this.bump(), "<") : null;
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
		return Ye.apply(void 0, t);
	}, e.prototype.tryParseUnquoted = function(e, t) {
		if (this.isEOF()) return null;
		var n = this.char();
		return n === 60 || n === 123 || n === 35 && (t === "plural" || t === "selectordinal") || n === 125 && e > 0 ? null : (this.bump(), Ye(n));
	}, e.prototype.parseArgument = function(e, t) {
		var n = this.clonePosition();
		if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(E.EXPECT_ARGUMENT_CLOSING_BRACE, k(n, this.clonePosition()));
		if (this.char() === 125) return this.bump(), this.error(E.EMPTY_ARGUMENT, k(n, this.clonePosition()));
		var r = this.parseIdentifierIfPossible().value;
		if (!r) return this.error(E.MALFORMED_ARGUMENT, k(n, this.clonePosition()));
		if (this.bumpSpace(), this.isEOF()) return this.error(E.EXPECT_ARGUMENT_CLOSING_BRACE, k(n, this.clonePosition()));
		switch (this.char()) {
			case 125: return this.bump(), {
				val: {
					type: D.argument,
					value: r,
					location: k(n, this.clonePosition())
				},
				err: null
			};
			case 44: return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(E.EXPECT_ARGUMENT_CLOSING_BRACE, k(n, this.clonePosition())) : this.parseArgumentOptions(e, t, r, n);
			default: return this.error(E.MALFORMED_ARGUMENT, k(n, this.clonePosition()));
		}
	}, e.prototype.parseIdentifierIfPossible = function() {
		var e = this.clonePosition(), t = this.offset(), n = tt(this.message, t), r = t + n.length;
		return this.bumpTo(r), {
			value: n,
			location: k(e, this.clonePosition())
		};
	}, e.prototype.parseArgumentOptions = function(e, t, n, r) {
		var i = this.clonePosition(), a = this.parseIdentifierIfPossible().value, o = this.clonePosition();
		switch (a) {
			case "": return this.error(E.EXPECT_ARGUMENT_TYPE, k(i, o));
			case "number":
			case "date":
			case "time":
				this.bumpSpace();
				var s = null;
				if (this.bumpIf(",")) {
					this.bumpSpace();
					var c = this.clonePosition(), l = this.parseSimpleArgStyleIfPossible();
					if (l.err) return l;
					var u = $e(l.val);
					if (u.length === 0) return this.error(E.EXPECT_ARGUMENT_STYLE, k(this.clonePosition(), this.clonePosition()));
					s = {
						style: u,
						styleLocation: k(c, this.clonePosition())
					};
				}
				var d = this.tryParseArgumentClose(r);
				if (d.err) return d;
				var f = k(r, this.clonePosition());
				if (s && Je(s?.style, "::", 0)) {
					var p = Qe(s.style.slice(2));
					if (a === "number") {
						var l = this.parseNumberSkeletonFromString(p, s.styleLocation);
						return l.err ? l : {
							val: {
								type: D.number,
								value: n,
								location: f,
								style: l.val
							},
							err: null
						};
					} else {
						if (p.length === 0) return this.error(E.EXPECT_DATE_TIME_SKELETON, f);
						var m = p;
						this.locale && (m = Ie(p, this.locale));
						var u = {
							type: le.dateTime,
							pattern: m,
							location: s.styleLocation,
							parsedOptions: this.shouldParseSkeletons ? Se(m) : {}
						};
						return {
							val: {
								type: a === "date" ? D.date : D.time,
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
						type: a === "number" ? D.number : a === "date" ? D.date : D.time,
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
				if (this.bumpSpace(), !this.bumpIf(",")) return this.error(E.EXPECT_SELECT_ARGUMENT_OPTIONS, k(h, v({}, h)));
				this.bumpSpace();
				var g = this.parseIdentifierIfPossible(), _ = 0;
				if (a !== "select" && g.value === "offset") {
					if (!this.bumpIf(":")) return this.error(E.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, k(this.clonePosition(), this.clonePosition()));
					this.bumpSpace();
					var l = this.tryParseDecimalInteger(E.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, E.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
					if (l.err) return l;
					this.bumpSpace(), g = this.parseIdentifierIfPossible(), _ = l.val;
				}
				var y = this.tryParsePluralOrSelectOptions(e, a, t, g);
				if (y.err) return y;
				var d = this.tryParseArgumentClose(r);
				if (d.err) return d;
				var b = k(r, this.clonePosition());
				return a === "select" ? {
					val: {
						type: D.select,
						value: n,
						options: Xe(y.val),
						location: b
					},
					err: null
				} : {
					val: {
						type: D.plural,
						value: n,
						options: Xe(y.val),
						offset: _,
						pluralType: a === "plural" ? "cardinal" : "ordinal",
						location: b
					},
					err: null
				};
			default: return this.error(E.INVALID_ARGUMENT_TYPE, k(i, o));
		}
	}, e.prototype.tryParseArgumentClose = function(e) {
		return this.isEOF() || this.char() !== 125 ? this.error(E.EXPECT_ARGUMENT_CLOSING_BRACE, k(e, this.clonePosition())) : (this.bump(), {
			val: !0,
			err: null
		});
	}, e.prototype.parseSimpleArgStyleIfPossible = function() {
		for (var e = 0, t = this.clonePosition(); !this.isEOF();) switch (this.char()) {
			case 39:
				this.bump();
				var n = this.clonePosition();
				if (!this.bumpUntil("'")) return this.error(E.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, k(n, this.clonePosition()));
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
			n = we(e);
		} catch {
			return this.error(E.INVALID_NUMBER_SKELETON, t);
		}
		return {
			val: {
				type: le.number,
				tokens: n,
				location: t,
				parsedOptions: this.shouldParseSkeletons ? Pe(n) : {}
			},
			err: null
		};
	}, e.prototype.tryParsePluralOrSelectOptions = function(e, t, n, r) {
		for (var i, a = !1, o = [], s = /* @__PURE__ */ new Set(), c = r.value, l = r.location;;) {
			if (c.length === 0) {
				var u = this.clonePosition();
				if (t !== "select" && this.bumpIf("=")) {
					var d = this.tryParseDecimalInteger(E.EXPECT_PLURAL_ARGUMENT_SELECTOR, E.INVALID_PLURAL_ARGUMENT_SELECTOR);
					if (d.err) return d;
					l = k(u, this.clonePosition()), c = this.message.slice(u.offset, this.offset());
				} else break;
			}
			if (s.has(c)) return this.error(t === "select" ? E.DUPLICATE_SELECT_ARGUMENT_SELECTOR : E.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, l);
			c === "other" && (a = !0), this.bumpSpace();
			var f = this.clonePosition();
			if (!this.bumpIf("{")) return this.error(t === "select" ? E.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : E.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, k(this.clonePosition(), this.clonePosition()));
			var p = this.parseMessage(e + 1, t, n);
			if (p.err) return p;
			var m = this.tryParseArgumentClose(f);
			if (m.err) return m;
			o.push([c, {
				value: p.val,
				location: k(f, this.clonePosition())
			}]), s.add(c), this.bumpSpace(), i = this.parseIdentifierIfPossible(), c = i.value, l = i.location;
		}
		return o.length === 0 ? this.error(t === "select" ? E.EXPECT_SELECT_ARGUMENT_SELECTOR : E.EXPECT_PLURAL_ARGUMENT_SELECTOR, k(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !a ? this.error(E.MISSING_OTHER_CLAUSE, k(this.clonePosition(), this.clonePosition())) : {
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
		var s = k(r, this.clonePosition());
		return i ? (a *= n, Ke(a) ? {
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
		var t = Ze(this.message, e);
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
		if (Je(this.message, e, this.offset())) {
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
		for (; !this.isEOF() && st(this.char());) this.bump();
	}, e.prototype.peek = function() {
		if (this.isEOF()) return null;
		var e = this.char(), t = this.offset();
		return this.message.charCodeAt(t + (e >= 65536 ? 2 : 1)) ?? null;
	}, e;
}();
function it(e) {
	return e >= 97 && e <= 122 || e >= 65 && e <= 90;
}
function at(e) {
	return it(e) || e === 47;
}
function ot(e) {
	return e === 45 || e === 46 || e >= 48 && e <= 57 || e === 95 || e >= 97 && e <= 122 || e >= 65 && e <= 90 || e == 183 || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039;
}
function st(e) {
	return e >= 9 && e <= 13 || e === 32 || e === 133 || e >= 8206 && e <= 8207 || e === 8232 || e === 8233;
}
function ct(e) {
	return e >= 33 && e <= 35 || e === 36 || e >= 37 && e <= 39 || e === 40 || e === 41 || e === 42 || e === 43 || e === 44 || e === 45 || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || e === 91 || e === 92 || e === 93 || e === 94 || e === 96 || e === 123 || e === 124 || e === 125 || e === 126 || e === 161 || e >= 162 && e <= 165 || e === 166 || e === 167 || e === 169 || e === 171 || e === 172 || e === 174 || e === 176 || e === 177 || e === 182 || e === 187 || e === 191 || e === 215 || e === 247 || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || e === 8216 || e === 8217 || e === 8218 || e >= 8219 && e <= 8220 || e === 8221 || e === 8222 || e === 8223 || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || e === 8249 || e === 8250 || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || e === 8260 || e === 8261 || e === 8262 || e >= 8263 && e <= 8273 || e === 8274 || e === 8275 || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || e === 8608 || e >= 8609 && e <= 8610 || e === 8611 || e >= 8612 && e <= 8613 || e === 8614 || e >= 8615 && e <= 8621 || e === 8622 || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || e === 8658 || e === 8659 || e === 8660 || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || e === 8968 || e === 8969 || e === 8970 || e === 8971 || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || e === 9001 || e === 9002 || e >= 9003 && e <= 9083 || e === 9084 || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || e === 9655 || e >= 9656 && e <= 9664 || e === 9665 || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || e === 9839 || e >= 9840 && e <= 10087 || e === 10088 || e === 10089 || e === 10090 || e === 10091 || e === 10092 || e === 10093 || e === 10094 || e === 10095 || e === 10096 || e === 10097 || e === 10098 || e === 10099 || e === 10100 || e === 10101 || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || e === 10181 || e === 10182 || e >= 10183 && e <= 10213 || e === 10214 || e === 10215 || e === 10216 || e === 10217 || e === 10218 || e === 10219 || e === 10220 || e === 10221 || e === 10222 || e === 10223 || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || e === 10627 || e === 10628 || e === 10629 || e === 10630 || e === 10631 || e === 10632 || e === 10633 || e === 10634 || e === 10635 || e === 10636 || e === 10637 || e === 10638 || e === 10639 || e === 10640 || e === 10641 || e === 10642 || e === 10643 || e === 10644 || e === 10645 || e === 10646 || e === 10647 || e === 10648 || e >= 10649 && e <= 10711 || e === 10712 || e === 10713 || e === 10714 || e === 10715 || e >= 10716 && e <= 10747 || e === 10748 || e === 10749 || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || e === 11158 || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || e === 11778 || e === 11779 || e === 11780 || e === 11781 || e >= 11782 && e <= 11784 || e === 11785 || e === 11786 || e === 11787 || e === 11788 || e === 11789 || e >= 11790 && e <= 11798 || e === 11799 || e >= 11800 && e <= 11801 || e === 11802 || e === 11803 || e === 11804 || e === 11805 || e >= 11806 && e <= 11807 || e === 11808 || e === 11809 || e === 11810 || e === 11811 || e === 11812 || e === 11813 || e === 11814 || e === 11815 || e === 11816 || e === 11817 || e >= 11818 && e <= 11822 || e === 11823 || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || e === 11840 || e === 11841 || e === 11842 || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || e === 11858 || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || e === 12296 || e === 12297 || e === 12298 || e === 12299 || e === 12300 || e === 12301 || e === 12302 || e === 12303 || e === 12304 || e === 12305 || e >= 12306 && e <= 12307 || e === 12308 || e === 12309 || e === 12310 || e === 12311 || e === 12312 || e === 12313 || e === 12314 || e === 12315 || e === 12316 || e === 12317 || e >= 12318 && e <= 12319 || e === 12320 || e === 12336 || e === 64830 || e === 64831 || e >= 65093 && e <= 65094;
}
//#endregion
//#region node_modules/.pnpm/@formatjs+icu-messageformat-parser@2.9.4/node_modules/@formatjs/icu-messageformat-parser/lib/index.js
function lt(e) {
	e.forEach(function(e) {
		if (delete e.location, me(e) || he(e)) for (var t in e.options) delete e.options[t].location, lt(e.options[t].value);
		else de(e) && ve(e.style) || (fe(e) || pe(e)) && ye(e.style) ? delete e.style.location : _e(e) && lt(e.children);
	});
}
function ut(e, t) {
	t === void 0 && (t = {}), t = v({
		shouldParseSkeletons: !0,
		requiresOtherClause: !0
	}, t);
	var n = new rt(e, t).parse();
	if (n.err) {
		var r = SyntaxError(E[n.err.kind]);
		throw r.location = n.err.location, r.originalMessage = n.err.message, r;
	}
	return t?.captureLocation || lt(n.val), n.val;
}
//#endregion
//#region node_modules/.pnpm/intl-messageformat@10.7.7/node_modules/intl-messageformat/lib/src/error.js
var dt;
(function(e) {
	e.MISSING_VALUE = "MISSING_VALUE", e.INVALID_VALUE = "INVALID_VALUE", e.MISSING_INTL_API = "MISSING_INTL_API";
})(dt ||= {});
var ft = function(e) {
	_(t, e);
	function t(t, n, r) {
		var i = e.call(this, t) || this;
		return i.code = n, i.originalMessage = r, i;
	}
	return t.prototype.toString = function() {
		return `[formatjs Error: ${this.code}] ${this.message}`;
	}, t;
}(Error), pt = function(e) {
	_(t, e);
	function t(t, n, r, i) {
		return e.call(this, `Invalid values for "${t}": "${n}". Options are "${Object.keys(r).join("\", \"")}"`, dt.INVALID_VALUE, i) || this;
	}
	return t;
}(ft), mt = function(e) {
	_(t, e);
	function t(t, n, r) {
		return e.call(this, `Value for "${t}" must be of type ${n}`, dt.INVALID_VALUE, r) || this;
	}
	return t;
}(ft), ht = function(e) {
	_(t, e);
	function t(t, n) {
		return e.call(this, `The intl string context variable "${t}" was not provided to the string "${n}"`, dt.MISSING_VALUE, n) || this;
	}
	return t;
}(ft), A;
(function(e) {
	e[e.literal = 0] = "literal", e[e.object = 1] = "object";
})(A ||= {});
function gt(e) {
	return e.length < 2 ? e : e.reduce(function(e, t) {
		var n = e[e.length - 1];
		return !n || n.type !== A.literal || t.type !== A.literal ? e.push(t) : n.value += t.value, e;
	}, []);
}
function _t(e) {
	return typeof e == "function";
}
function vt(e, t, n, r, i, a, o) {
	if (e.length === 1 && ue(e[0])) return [{
		type: A.literal,
		value: e[0].value
	}];
	for (var s = [], c = 0, l = e; c < l.length; c++) {
		var u = l[c];
		if (ue(u)) {
			s.push({
				type: A.literal,
				value: u.value
			});
			continue;
		}
		if (ge(u)) {
			typeof a == "number" && s.push({
				type: A.literal,
				value: n.getNumberFormat(t).format(a)
			});
			continue;
		}
		var d = u.value;
		if (!(i && d in i)) throw new ht(d, o);
		var f = i[d];
		if (O(u)) {
			(!f || typeof f == "string" || typeof f == "number") && (f = typeof f == "string" || typeof f == "number" ? String(f) : ""), s.push({
				type: typeof f == "string" ? A.literal : A.object,
				value: f
			});
			continue;
		}
		if (fe(u)) {
			var p = typeof u.style == "string" ? r.date[u.style] : ye(u.style) ? u.style.parsedOptions : void 0;
			s.push({
				type: A.literal,
				value: n.getDateTimeFormat(t, p).format(f)
			});
			continue;
		}
		if (pe(u)) {
			var p = typeof u.style == "string" ? r.time[u.style] : ye(u.style) ? u.style.parsedOptions : r.time.medium;
			s.push({
				type: A.literal,
				value: n.getDateTimeFormat(t, p).format(f)
			});
			continue;
		}
		if (de(u)) {
			var p = typeof u.style == "string" ? r.number[u.style] : ve(u.style) ? u.style.parsedOptions : void 0;
			p && p.scale && (f *= p.scale || 1), s.push({
				type: A.literal,
				value: n.getNumberFormat(t, p).format(f)
			});
			continue;
		}
		if (_e(u)) {
			var m = u.children, h = u.value, g = i[h];
			if (!_t(g)) throw new mt(h, "function", o);
			var _ = g(vt(m, t, n, r, i, a).map(function(e) {
				return e.value;
			}));
			Array.isArray(_) || (_ = [_]), s.push.apply(s, _.map(function(e) {
				return {
					type: typeof e == "string" ? A.literal : A.object,
					value: e
				};
			}));
		}
		if (me(u)) {
			var v = u.options[f] || u.options.other;
			if (!v) throw new pt(u.value, f, Object.keys(u.options), o);
			s.push.apply(s, vt(v.value, t, n, r, i));
			continue;
		}
		if (he(u)) {
			var v = u.options[`=${f}`];
			if (!v) {
				if (!Intl.PluralRules) throw new ft("Intl.PluralRules is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-pluralrules\"\n", dt.MISSING_INTL_API, o);
				var y = n.getPluralRules(t, { type: u.pluralType }).select(f - (u.offset || 0));
				v = u.options[y] || u.options.other;
			}
			if (!v) throw new pt(u.value, f, Object.keys(u.options), o);
			s.push.apply(s, vt(v.value, t, n, r, i, f - (u.offset || 0)));
			continue;
		}
	}
	return gt(s);
}
//#endregion
//#region node_modules/.pnpm/intl-messageformat@10.7.7/node_modules/intl-messageformat/lib/src/core.js
function yt(e, t) {
	return t ? v(v(v({}, e || {}), t || {}), Object.keys(e).reduce(function(n, r) {
		return n[r] = v(v({}, e[r]), t[r] || {}), n;
	}, {})) : e;
}
function bt(e, t) {
	return t ? Object.keys(e).reduce(function(n, r) {
		return n[r] = yt(e[r], t[r]), n;
	}, v({}, e)) : e;
}
function xt(e) {
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
function St(e) {
	return e === void 0 && (e = {
		number: {},
		dateTime: {},
		pluralRules: {}
	}), {
		getNumberFormat: S(function() {
			for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
			return new ((e = Intl.NumberFormat).bind.apply(e, x([void 0], t, !1)))();
		}, {
			cache: xt(e.number),
			strategy: w.variadic
		}),
		getDateTimeFormat: S(function() {
			for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
			return new ((e = Intl.DateTimeFormat).bind.apply(e, x([void 0], t, !1)))();
		}, {
			cache: xt(e.dateTime),
			strategy: w.variadic
		}),
		getPluralRules: S(function() {
			for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
			return new ((e = Intl.PluralRules).bind.apply(e, x([void 0], t, !1)))();
		}, {
			cache: xt(e.pluralRules),
			strategy: w.variadic
		})
	};
}
var Ct = function() {
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
				return !e.length || t.type !== A.literal || typeof e[e.length - 1] != "string" ? e.push(t.value) : e[e.length - 1] += t.value, e;
			}, []);
			return n.length <= 1 ? n[0] || "" : n;
		}, this.formatToParts = function(e) {
			return vt(a.ast, a.locales, a.formatters, a.formats, e, void 0, a.message);
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
		this.formats = bt(e.formats, r), this.formatters = i && i.formatters || St(this.formatterCache);
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
	}, e.__parse = ut, e.formats = {
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
}(), wt;
(function(e) {
	e.FORMAT_ERROR = "FORMAT_ERROR", e.UNSUPPORTED_FORMATTER = "UNSUPPORTED_FORMATTER", e.INVALID_CONFIG = "INVALID_CONFIG", e.MISSING_DATA = "MISSING_DATA", e.MISSING_TRANSLATION = "MISSING_TRANSLATION";
})(wt ||= {});
var j = function(e) {
	_(t, e);
	function t(n, r, i) {
		var a = this, o = i ? i instanceof Error ? i : Error(String(i)) : void 0;
		return a = e.call(this, `[@formatjs/intl Error ${n}] ${r}
${o ? `
${o.message}
${o.stack}` : ""}`) || this, a.code = n, typeof Error.captureStackTrace == "function" && Error.captureStackTrace(a, t), a;
	}
	return t;
}(Error), Tt = function(e) {
	_(t, e);
	function t(t, n) {
		return e.call(this, wt.UNSUPPORTED_FORMATTER, t, n) || this;
	}
	return t;
}(j), Et = function(e) {
	_(t, e);
	function t(t, n) {
		return e.call(this, wt.INVALID_CONFIG, t, n) || this;
	}
	return t;
}(j), Dt = function(e) {
	_(t, e);
	function t(t, n) {
		return e.call(this, wt.MISSING_DATA, t, n) || this;
	}
	return t;
}(j), M = function(e) {
	_(t, e);
	function t(t, n, r) {
		var i = e.call(this, wt.FORMAT_ERROR, `${t}
Locale: ${n}
`, r) || this;
		return i.locale = n, i;
	}
	return t;
}(j), Ot = function(e) {
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
}(M), kt = function(e) {
	_(t, e);
	function t(t, n) {
		var r = e.call(this, wt.MISSING_TRANSLATION, `Missing message: "${t.id}" for locale "${n}", using ${t.defaultMessage ? `default message (${typeof t.defaultMessage == "string" ? t.defaultMessage : t.defaultMessage.map(function(e) {
			return e.value ?? JSON.stringify(e);
		}).join()})` : "id"} as fallback.`) || this;
		return r.descriptor = t, r;
	}
	return t;
}(j);
//#endregion
//#region node_modules/.pnpm/@formatjs+intl@2.10.15_typescript@5.9.3/node_modules/@formatjs/intl/lib/src/utils.js
function At(e, t, n) {
	return n === void 0 && (n = {}), t.reduce(function(t, r) {
		return r in e ? t[r] = e[r] : r in n && (t[r] = n[r]), t;
	}, {});
}
var jt = {
	formats: {},
	messages: {},
	timeZone: void 0,
	defaultLocale: "en",
	defaultFormats: {},
	fallbackOnEmptyString: !0,
	onError: function(e) {},
	onWarn: function(e) {}
};
function Mt() {
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
function N(e) {
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
function Nt(e) {
	e === void 0 && (e = Mt());
	var t = Intl.RelativeTimeFormat, n = Intl.ListFormat, r = Intl.DisplayNames, i = S(function() {
		for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
		return new ((e = Intl.DateTimeFormat).bind.apply(e, x([void 0], t, !1)))();
	}, {
		cache: N(e.dateTime),
		strategy: w.variadic
	}), a = S(function() {
		for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
		return new ((e = Intl.NumberFormat).bind.apply(e, x([void 0], t, !1)))();
	}, {
		cache: N(e.number),
		strategy: w.variadic
	}), o = S(function() {
		for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
		return new ((e = Intl.PluralRules).bind.apply(e, x([void 0], t, !1)))();
	}, {
		cache: N(e.pluralRules),
		strategy: w.variadic
	});
	return {
		getDateTimeFormat: i,
		getNumberFormat: a,
		getMessageFormat: S(function(e, t, n, r) {
			return new Ct(e, t, n, v({ formatters: {
				getNumberFormat: a,
				getDateTimeFormat: i,
				getPluralRules: o
			} }, r || {}));
		}, {
			cache: N(e.message),
			strategy: w.variadic
		}),
		getRelativeTimeFormat: S(function() {
			var e = [...arguments];
			return new (t.bind.apply(t, x([void 0], e, !1)))();
		}, {
			cache: N(e.relativeTime),
			strategy: w.variadic
		}),
		getPluralRules: o,
		getListFormat: S(function() {
			var e = [...arguments];
			return new (n.bind.apply(n, x([void 0], e, !1)))();
		}, {
			cache: N(e.list),
			strategy: w.variadic
		}),
		getDisplayNames: S(function() {
			var e = [...arguments];
			return new (r.bind.apply(r, x([void 0], e, !1)))();
		}, {
			cache: N(e.displayNames),
			strategy: w.variadic
		})
	};
}
function Pt(e, t, n, r) {
	var i = e && e[t], a;
	if (i && (a = i[n]), a) return a;
	r(new Tt(`No ${t} format named: ${n}`));
}
//#endregion
//#region node_modules/.pnpm/@formatjs+intl@2.10.15_typescript@5.9.3/node_modules/@formatjs/intl/lib/src/message.js
function Ft(e, t) {
	return Object.keys(e).reduce(function(n, r) {
		return n[r] = v({ timeZone: t }, e[r]), n;
	}, {});
}
function It(e, t) {
	return Object.keys(v(v({}, e), t)).reduce(function(n, r) {
		return n[r] = v(v({}, e[r] || {}), t[r] || {}), n;
	}, {});
}
function Lt(e, t) {
	if (!t) return e;
	var n = Ct.formats;
	return v(v(v({}, n), e), {
		date: It(Ft(n.date, t), Ft(e.date || {}, t)),
		time: It(Ft(n.time, t), Ft(e.time || {}, t))
	});
}
var Rt = function(e, t, n, r, i) {
	var a = e.locale, o = e.formats, s = e.messages, c = e.defaultLocale, l = e.defaultFormats, u = e.fallbackOnEmptyString, d = e.onError, f = e.timeZone, p = e.defaultRichTextElements;
	n === void 0 && (n = { id: "" });
	var m = n.id, h = n.defaultMessage;
	T(!!m, "[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue");
	var g = String(m), _ = s && Object.prototype.hasOwnProperty.call(s, g) && s[g];
	if (Array.isArray(_) && _.length === 1 && _[0].type === D.literal) return _[0].value;
	if (!r && _ && typeof _ == "string" && !p) return _.replace(/'\{(.*?)\}'/gi, "{$1}");
	if (r = v(v({}, p), r || {}), o = Lt(o, f), l = Lt(l, f), !_) {
		if (u === !1 && _ === "") return _;
		if ((!h || a && a.toLowerCase() !== c.toLowerCase()) && d(new kt(n, a)), h) try {
			var y = t.getMessageFormat(h, c, l, i);
			return y.format(r);
		} catch (e) {
			return d(new Ot(`Error formatting default message for: "${g}", rendering default message verbatim`, a, n, e)), typeof h == "string" ? h : g;
		}
		return g;
	}
	try {
		var y = t.getMessageFormat(_, a, o, v({ formatters: t }, i || {}));
		return y.format(r);
	} catch (e) {
		d(new Ot(`Error formatting message: "${g}", using ${h ? "default message" : "id"} as fallback.`, a, n, e));
	}
	if (h) try {
		var y = t.getMessageFormat(h, c, l, i);
		return y.format(r);
	} catch (e) {
		d(new Ot(`Error formatting the default message for: "${g}", rendering message verbatim`, a, n, e));
	}
	return typeof _ == "string" ? _ : typeof h == "string" ? h : g;
}, zt = [
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
function Bt(e, t, n, r) {
	var i = e.locale, a = e.formats, o = e.onError, s = e.timeZone;
	r === void 0 && (r = {});
	var c = r.format, l = v(v({}, s && { timeZone: s }), c && Pt(a, t, c, o)), u = At(r, zt, l);
	return t === "time" && !u.hour && !u.minute && !u.second && !u.timeStyle && !u.dateStyle && (u = v(v({}, u), {
		hour: "numeric",
		minute: "numeric"
	})), n(i, u);
}
function Vt(e, t) {
	var n = [...arguments].slice(2), r = n[0], i = n[1], a = i === void 0 ? {} : i, o = typeof r == "string" ? new Date(r || 0) : r;
	try {
		return Bt(e, "date", t, a).format(o);
	} catch (t) {
		e.onError(new M("Error formatting date.", e.locale, t));
	}
	return String(o);
}
function Ht(e, t) {
	var n = [...arguments].slice(2), r = n[0], i = n[1], a = i === void 0 ? {} : i, o = typeof r == "string" ? new Date(r || 0) : r;
	try {
		return Bt(e, "time", t, a).format(o);
	} catch (t) {
		e.onError(new M("Error formatting time.", e.locale, t));
	}
	return String(o);
}
function Ut(e, t) {
	var n = [...arguments].slice(2), r = n[0], i = n[1], a = n[2], o = a === void 0 ? {} : a, s = e.timeZone, c = e.locale, l = e.onError, u = At(o, zt, s ? { timeZone: s } : {});
	try {
		return t(c, u).formatRange(r, i);
	} catch (t) {
		l(new M("Error formatting date time range.", e.locale, t));
	}
	return String(r);
}
function Wt(e, t) {
	var n = [...arguments].slice(2), r = n[0], i = n[1], a = i === void 0 ? {} : i, o = typeof r == "string" ? new Date(r || 0) : r;
	try {
		return Bt(e, "date", t, a).formatToParts(o);
	} catch (t) {
		e.onError(new M("Error formatting date.", e.locale, t));
	}
	return [];
}
function Gt(e, t) {
	var n = [...arguments].slice(2), r = n[0], i = n[1], a = i === void 0 ? {} : i, o = typeof r == "string" ? new Date(r || 0) : r;
	try {
		return Bt(e, "time", t, a).formatToParts(o);
	} catch (t) {
		e.onError(new M("Error formatting time.", e.locale, t));
	}
	return [];
}
//#endregion
//#region node_modules/.pnpm/@formatjs+intl@2.10.15_typescript@5.9.3/node_modules/@formatjs/intl/lib/src/displayName.js
var Kt = [
	"style",
	"type",
	"fallback",
	"languageDisplay"
];
function qt(e, t, n, r) {
	var i = e.locale, a = e.onError;
	Intl.DisplayNames || a(new ft("Intl.DisplayNames is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-displaynames\"\n", dt.MISSING_INTL_API));
	var o = At(r, Kt);
	try {
		return t(i, o).of(n);
	} catch (e) {
		a(new M("Error formatting display name.", i, e));
	}
}
//#endregion
//#region node_modules/.pnpm/@formatjs+intl@2.10.15_typescript@5.9.3/node_modules/@formatjs/intl/lib/src/list.js
var P = ["type", "style"], Jt = Date.now();
function Yt(e) {
	return `${Jt}_${e}_${Jt}`;
}
function Xt(e, t, n, r) {
	r === void 0 && (r = {});
	var i = Zt(e, t, n, r).reduce(function(e, t) {
		var n = t.value;
		return typeof n == "string" && typeof e[e.length - 1] == "string" ? e[e.length - 1] += n : e.push(n), e;
	}, []);
	return i.length === 1 ? i[0] : i.length === 0 ? "" : i;
}
function Zt(e, t, n, r) {
	var i = e.locale, a = e.onError;
	r === void 0 && (r = {}), Intl.ListFormat || a(new ft("Intl.ListFormat is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-listformat\"\n", dt.MISSING_INTL_API));
	var o = At(r, P);
	try {
		var s = {}, c = n.map(function(e, t) {
			if (typeof e == "object") {
				var n = Yt(t);
				return s[n] = e, n;
			}
			return String(e);
		});
		return t(i, o).formatToParts(c).map(function(e) {
			return e.type === "literal" ? e : v(v({}, e), { value: s[e.value] || e.value });
		});
	} catch (e) {
		a(new M("Error formatting list.", i, e));
	}
	return n;
}
//#endregion
//#region node_modules/.pnpm/@formatjs+intl@2.10.15_typescript@5.9.3/node_modules/@formatjs/intl/lib/src/plural.js
var Qt = ["type"];
function $t(e, t, n, r) {
	var i = e.locale, a = e.onError;
	r === void 0 && (r = {}), Intl.PluralRules || a(new ft("Intl.PluralRules is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-pluralrules\"\n", dt.MISSING_INTL_API));
	var o = At(r, Qt);
	try {
		return t(i, o).select(n);
	} catch (e) {
		a(new M("Error formatting plural.", i, e));
	}
	return "other";
}
//#endregion
//#region node_modules/.pnpm/@formatjs+intl@2.10.15_typescript@5.9.3/node_modules/@formatjs/intl/lib/src/relativeTime.js
var en = ["numeric", "style"];
function tn(e, t, n) {
	var r = e.locale, i = e.formats, a = e.onError;
	n === void 0 && (n = {});
	var o = n.format, s = !!o && Pt(i, "relative", o, a) || {};
	return t(r, At(n, en, s));
}
function nn(e, t, n, r, i) {
	i === void 0 && (i = {}), r ||= "second", Intl.RelativeTimeFormat || e.onError(new ft("Intl.RelativeTimeFormat is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-relativetimeformat\"\n", dt.MISSING_INTL_API));
	try {
		return tn(e, t, i).format(n, r);
	} catch (t) {
		e.onError(new M("Error formatting relative time.", e.locale, t));
	}
	return String(n);
}
//#endregion
//#region node_modules/.pnpm/@formatjs+intl@2.10.15_typescript@5.9.3/node_modules/@formatjs/intl/lib/src/number.js
var rn = [
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
function an(e, t, n) {
	var r = e.locale, i = e.formats, a = e.onError;
	n === void 0 && (n = {});
	var o = n.format, s = o && Pt(i, "number", o, a) || {};
	return t(r, At(n, rn, s));
}
function on(e, t, n, r) {
	r === void 0 && (r = {});
	try {
		return an(e, t, r).format(n);
	} catch (t) {
		e.onError(new M("Error formatting number.", e.locale, t));
	}
	return String(n);
}
function sn(e, t, n, r) {
	r === void 0 && (r = {});
	try {
		return an(e, t, r).formatToParts(n);
	} catch (t) {
		e.onError(new M("Error formatting number.", e.locale, t));
	}
	return [];
}
//#endregion
//#region node_modules/.pnpm/@formatjs+intl@2.10.15_typescript@5.9.3/node_modules/@formatjs/intl/lib/src/create-intl.js
function cn(e) {
	return typeof (e ? e[Object.keys(e)[0]] : void 0) == "string";
}
function ln(e) {
	e.onWarn && e.defaultRichTextElements && cn(e.messages || {}) && e.onWarn("[@formatjs/intl] \"defaultRichTextElements\" was specified but \"message\" was not pre-compiled. \nPlease consider using \"@formatjs/cli\" to pre-compile your messages for performance.\nFor more details see https://formatjs.io/docs/getting-started/message-distribution");
}
function un(e, t) {
	var n = Nt(t), r = v(v({}, jt), e), i = r.locale, a = r.defaultLocale, o = r.onError;
	return i ? !Intl.NumberFormat.supportedLocalesOf(i).length && o ? o(new Dt(`Missing locale data for locale: "${i}" in Intl.NumberFormat. Using default locale: "${a}" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details`)) : !Intl.DateTimeFormat.supportedLocalesOf(i).length && o && o(new Dt(`Missing locale data for locale: "${i}" in Intl.DateTimeFormat. Using default locale: "${a}" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details`)) : (o && o(new Et(`"locale" was not configured, using "${a}" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details`)), r.locale = r.defaultLocale || "en"), ln(r), v(v({}, r), {
		formatters: n,
		formatNumber: on.bind(null, r, n.getNumberFormat),
		formatNumberToParts: sn.bind(null, r, n.getNumberFormat),
		formatRelativeTime: nn.bind(null, r, n.getRelativeTimeFormat),
		formatDate: Vt.bind(null, r, n.getDateTimeFormat),
		formatDateToParts: Wt.bind(null, r, n.getDateTimeFormat),
		formatTime: Ht.bind(null, r, n.getDateTimeFormat),
		formatDateTimeRange: Ut.bind(null, r, n.getDateTimeFormat),
		formatTimeToParts: Gt.bind(null, r, n.getDateTimeFormat),
		formatPlural: $t.bind(null, r, n.getPluralRules),
		formatMessage: Rt.bind(null, r, n),
		$t: Rt.bind(null, r, n),
		formatList: Xt.bind(null, r, n.getListFormat),
		formatListToParts: Zt.bind(null, r, n.getListFormat),
		formatDisplayName: qt.bind(null, r, n.getDisplayNames)
	});
}
//#endregion
//#region node_modules/.pnpm/react-intl@6.8.9_react@18.3.1_typescript@5.9.3/node_modules/react-intl/lib/src/utils.js
var F = /* @__PURE__ */ c(u());
function dn(e) {
	T(e, "[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.");
}
var fn = v(v({}, jt), { textComponent: F.Fragment });
function pn(e) {
	return function(t) {
		return e(F.Children.toArray(t));
	};
}
function mn(e, t) {
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
var hn = /* @__PURE__ */ o(((e) => {
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
})), gn = /* @__PURE__ */ o(((e, t) => {
	t.exports = hn();
}));
(/* @__PURE__ */ o(((e, t) => {
	var n = gn(), r = {
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
var _n = typeof window < "u" && !window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__ ? window.__REACT_INTL_CONTEXT__ || (window.__REACT_INTL_CONTEXT__ = F.createContext(null)) : F.createContext(null);
_n.Consumer;
var vn = _n.Provider, yn = _n;
//#endregion
//#region node_modules/.pnpm/react-intl@6.8.9_react@18.3.1_typescript@5.9.3/node_modules/react-intl/lib/src/components/useIntl.js
function bn() {
	var e = F.useContext(yn);
	return dn(e), e;
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
		var s = n.textComponent || F.Fragment;
		return F.createElement(s, null, o);
	};
	return t.displayName = xn[e], t;
}
//#endregion
//#region node_modules/.pnpm/react-intl@6.8.9_react@18.3.1_typescript@5.9.3/node_modules/react-intl/lib/src/components/createIntl.js
function En(e) {
	return e && Object.keys(e).reduce(function(t, n) {
		var r = e[n];
		return t[n] = _t(r) ? pn(r) : r, t;
	}, {});
}
var Dn = function(e, t, n, r) {
	var i = [...arguments].slice(4), a = En(r), o = Rt.apply(void 0, x([
		e,
		t,
		n,
		a
	], i, !1));
	return Array.isArray(o) ? F.Children.toArray(o) : o;
}, On = function(e, t) {
	var n = e.defaultRichTextElements, r = y(e, ["defaultRichTextElements"]), i = En(n), a = un(v(v(v({}, fn), r), { defaultRichTextElements: i }), t), o = {
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
		return t.cache = Mt(), t.state = {
			cache: t.cache,
			intl: On(kn(t.props), t.cache),
			prevConfig: kn(t.props)
		}, t;
	}
	return t.getDerivedStateFromProps = function(e, t) {
		var n = t.prevConfig, r = t.cache, i = kn(e);
		return mn(n, i) ? null : {
			intl: On(i, r),
			prevConfig: i
		};
	}, t.prototype.render = function() {
		return dn(this.state.intl), F.createElement(vn, { value: this.state.intl }, this.props.children);
	}, t.displayName = "IntlProvider", t.defaultProps = fn, t;
}(F.PureComponent);
//#endregion
//#region node_modules/.pnpm/react-intl@6.8.9_react@18.3.1_typescript@5.9.3/node_modules/react-intl/lib/index.js
function jn(e) {
	return e;
}
Tn("formatDate"), Tn("formatTime"), Tn("formatNumber"), Tn("formatList"), Tn("formatDisplayName"), wn("formatDate"), wn("formatTime");
//#endregion
//#region node_modules/.pnpm/react@18.3.1/node_modules/react/cjs/react-jsx-runtime.production.min.js
var Mn = /* @__PURE__ */ o(((e) => {
	var t = u(), n = Symbol.for("react.element"), r = Object.prototype.hasOwnProperty, i = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = {
		key: !0,
		ref: !0,
		__self: !0,
		__source: !0
	};
	function o(e, t, o) {
		var s, c = {}, l = null, u = null;
		for (s in o !== void 0 && (l = "" + o), t.key !== void 0 && (l = "" + t.key), t.ref !== void 0 && (u = t.ref), t) r.call(t, s) && !a.hasOwnProperty(s) && (c[s] = t[s]);
		if (e && e.defaultProps) for (s in t = e.defaultProps, t) c[s] === void 0 && (c[s] = t[s]);
		return {
			$$typeof: n,
			type: e,
			key: l,
			ref: u,
			props: c,
			_owner: i.current
		};
	}
	e.jsx = o, e.jsxs = o;
})), Nn = /* @__PURE__ */ o(((e, t) => {
	t.exports = Mn();
})), Pn = h(), Fn = Nn(), In = (0, F.createContext)({
	runtime: {
		handlerUrl() {
			return "";
		},
		notify() {}
	},
	element: document.createElement("div")
}), Ln = (e) => {
	let t = (0, F.useContext)(In);
	return t.runtime.handlerUrl(t.element, e);
}, Rn = (e, t) => {
	if (t != null && !(typeof t != "object" && typeof t != "function")) {
		for (let n of Object.getOwnPropertyNames(t)) if (n.startsWith("_jsrt")) {
			let r = n;
			e[r] = t[r];
		}
	}
}, zn = (e) => {
	let t = e && "jquery" in e ? e[0] : e;
	if (!t || !(t instanceof Element)) throw console.error("Invalid DOM element provided to renderBlock:", e), Error("Invalid DOM Element. See previously logged details.");
	return Rn(t, e), t;
}, Bn = async (e) => {
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
}, Vn = !0, Hn = ({ runtime: e, element: t, config: n, styles: r }) => async (i) => {
	let { core: a, theme: o } = await Bn(n.mfe_config_api), s = zn(t), c = null, l = s;
	if (Vn && (c = s.attachShadow({ mode: "open" }), l = document.createElement("div"), l.classList.add("xblock-root"), c.appendChild(l)), r) {
		let e = document.createElement("style");
		e.textContent = r, c ? c.appendChild(e) : document.head.appendChild(e);
	}
	a.forEach((e) => {
		let t = document.createElement("link");
		t.rel = "stylesheet", t.href = e, c?.appendChild(t), document.head.querySelector(`link[href="${e}"]`) || document.head.appendChild(t.cloneNode());
	}), o.forEach((e) => {
		let t = document.createElement("link");
		t.rel = "stylesheet", t.href = e, c?.appendChild(t), document.head.querySelector(`link[href="${e}"]`) || document.head.appendChild(t.cloneNode());
	}), (0, Pn.createRoot)(l).render(/* @__PURE__ */ (0, Fn.jsx)(F.StrictMode, { children: /* @__PURE__ */ (0, Fn.jsx)(In.Provider, {
		value: {
			runtime: e,
			element: s
		},
		children: /* @__PURE__ */ (0, Fn.jsx)(An, {
			locale: "en",
			children: i
		})
	}) }));
}, Un = ({ saveUrl: e, data: t, runtime: n, errorMessage: r = "Failed to save configuration" }) => {
	n.notify("save", { state: "start" }), $.post(e, JSON.stringify(t)).done(() => {
		n.notify("save", { state: "end" });
	}).fail((e) => {
		let t = typeof r == "function" ? r(e) : r;
		n.notify("error", {
			title: "Save Error",
			message: t
		});
	});
}, Wn = /* @__PURE__ */ o(((e, t) => {
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
function Gn() {
	return Gn = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, Gn.apply(null, arguments);
}
//#endregion
//#region node_modules/.pnpm/@babel+runtime@7.29.2/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function Kn(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/ThemeProvider.js
var qn = /* @__PURE__ */ F.createContext({});
qn.Consumer, qn.Provider;
function Jn(e, t) {
	var n = (0, F.useContext)(qn);
	return e || n[t] || t;
}
//#endregion
//#region node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/lib/ReactPropTypesSecret.js
var Yn = /* @__PURE__ */ o(((e, t) => {
	t.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
})), Xn = /* @__PURE__ */ o(((e, t) => {
	var n = Yn();
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
})), Zn = /* @__PURE__ */ o(((e, t) => {
	t.exports = Xn()();
}));
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/createChainedFunction.js
function Qn() {
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
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/SafeAnchor.js
var $n = [
	"as",
	"disabled",
	"onKeyDown"
];
function er(e) {
	return !e || e.trim() === "#";
}
var tr = /* @__PURE__ */ F.forwardRef(function(e, t) {
	var n = e.as, r = n === void 0 ? "a" : n, i = e.disabled, a = e.onKeyDown, o = Kn(e, $n), s = function(e) {
		var t = o.href, n = o.onClick;
		if ((i || er(t)) && e.preventDefault(), i) {
			e.stopPropagation();
			return;
		}
		n && n(e);
	};
	return er(o.href) && (o.role = o.role || "button", o.href = o.href || "#"), i && (o.tabIndex = -1, o["aria-disabled"] = !0), /* @__PURE__ */ F.createElement(r, Gn({ ref: t }, o, {
		onClick: s,
		onKeyDown: Qn(function(e) {
			e.key === " " && (e.preventDefault(), s(e));
		}, a)
	}));
});
tr.displayName = "SafeAnchor";
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Button.js
var nr = /* @__PURE__ */ c(Wn()), rr = [
	"bsPrefix",
	"variant",
	"size",
	"active",
	"className",
	"block",
	"type",
	"as"
], ir = {
	variant: "primary",
	active: !1,
	disabled: !1
}, ar = /* @__PURE__ */ F.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.variant, i = e.size, a = e.active, o = e.className, s = e.block, c = e.type, l = e.as, u = Kn(e, rr), d = Jn(n, "btn"), f = (0, nr.default)(o, d, a && "active", r && d + "-" + r, s && d + "-block", i && d + "-" + i);
	if (u.href) return /* @__PURE__ */ F.createElement(tr, Gn({}, u, {
		as: l,
		ref: t,
		className: (0, nr.default)(f, u.disabled && "disabled")
	}));
	t && (u.ref = t), c ? u.type = c : l || (u.type = "button");
	var p = l || "button";
	return /* @__PURE__ */ F.createElement(p, Gn({}, u, { className: f }));
});
ar.displayName = "Button", ar.defaultProps = ir;
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/utils/newId.js
var or = 0, sr = (e = "id") => (or += 1, `${e}${or}`), cr = /* @__PURE__ */ function(e) {
	return e.MOVED = "MOVED", e.REMOVED = "REMOVED", e.FORMAT = "FORMAT", e.MOVED_AND_FORMAT = "MOVED_AND_FORMAT", e;
}({});
function lr(e, t, n) {
	class r extends F.Component {
		static displayName = `withDeprecatedProps(${t})`;
		constructor(e) {
			super(e), this.transformProps = this.transformProps.bind(this);
		}
		warn(e) {}
		transformProps(e, r) {
			if (n[r] === void 0) return e[r] = this.props[r], e;
			let { deprType: i, newName: a, expect: o, transform: s, message: c } = n[r];
			switch (i) {
				case cr.MOVED:
					this.warn(`${t}: The prop '${r}' has been moved to '${a}'.`), e[a] = this.props[r];
					break;
				case cr.REMOVED:
					this.warn(`${t}: The prop '${r}' has been removed. '${c}'`);
					break;
				case cr.FORMAT:
					o(this.props[r]) ? e[r] = this.props[r] : (this.warn(`${t}: The prop '${r}' expects a new format. ${c}`), e[r] = s(this.props[r], this.props));
					break;
				case cr.MOVED_AND_FORMAT: {
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
			return /* @__PURE__ */ F.createElement(e, { ...n }, this.props.children || t);
		}
	}
	return r;
}
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Icon/index.js
var ur = /* @__PURE__ */ c(Zn());
function dr({ src: e, id: t, className: n, hidden: r, screenReaderText: i, svgAttrs: a, size: o, ...s }) {
	if (e) {
		let r = a["aria-label"] || a["aria-labelledby"], c = { ...a };
		return r || (c["aria-label"] = void 0, c["aria-hidden"] = !0), /* @__PURE__ */ F.createElement("span", {
			className: (0, nr.default)("pgn__icon", { [`pgn__icon__${o}`]: !!o }, n),
			id: t,
			...s
		}, /* @__PURE__ */ F.createElement(e, {
			role: "img",
			focusable: !1,
			...c
		}), i && /* @__PURE__ */ F.createElement("span", { className: "sr-only" }, i));
	}
	return /* @__PURE__ */ F.createElement(F.Fragment, null, /* @__PURE__ */ F.createElement("span", {
		id: t || sr("Icon"),
		className: n,
		"aria-hidden": r
	}), i && /* @__PURE__ */ F.createElement("span", { className: "sr-only" }, i));
}
dr.propTypes = {
	src: ur.default.elementType,
	svgAttrs: ur.default.shape({
		"aria-label": ur.default.string,
		"aria-labelledby": ur.default.string
	}),
	id: ur.default.string,
	size: ur.default.oneOf([
		"xs",
		"sm",
		"md",
		"lg"
	]),
	className: ur.default.string,
	hidden: ur.default.bool,
	screenReaderText: ur.default.oneOfType([ur.default.string, ur.default.element])
}, dr.defaultProps = {
	src: null,
	svgAttrs: {},
	id: void 0,
	hidden: !0,
	screenReaderText: void 0,
	size: void 0,
	className: void 0
};
var fr = lr(dr, "Icon", { className: {
	deprType: cr.FORMAT,
	expect: (e) => typeof e == "string",
	transform: (e) => Array.isArray(e) ? e.join(" ") : e,
	message: "It should be a string."
} }), pr = /* @__PURE__ */ F.forwardRef(({ children: e, iconAfter: t, iconBefore: n, size: r, ...i }, a) => /* @__PURE__ */ F.createElement(ar, {
	size: r,
	...i,
	className: (0, nr.default)(i.className),
	ref: a
}, n && /* @__PURE__ */ F.createElement(fr, {
	className: "btn-icon-before",
	size: r,
	src: n
}), e, t && /* @__PURE__ */ F.createElement(fr, {
	className: "btn-icon-after",
	size: r,
	src: t
})));
//#endregion
export { u as C, m as S, c as T, bn as _, tr as a, x as b, Kn as c, In as d, Hn as f, jn as g, Nn as h, ar as i, Gn as l, Ln as m, fr as n, Zn as o, Un as p, sr as r, Jn as s, pr as t, Wn as u, v, o as w, b as x, y };
