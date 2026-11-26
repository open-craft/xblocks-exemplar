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
	var x = Array.isArray, ee = Object.prototype.hasOwnProperty, S = { current: null }, te = {
		key: !0,
		ref: !0,
		__self: !0,
		__source: !0
	};
	function ne(e, n, r) {
		var i, a = {}, o = null, s = null;
		if (n != null) for (i in n.ref !== void 0 && (s = n.ref), n.key !== void 0 && (o = "" + n.key), n) ee.call(n, i) && !te.hasOwnProperty(i) && (a[i] = n[i]);
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
			_owner: S.current
		};
	}
	function re(e, n) {
		return {
			$$typeof: t,
			type: e.type,
			key: n,
			ref: e.ref,
			props: e.props,
			_owner: e._owner
		};
	}
	function ie(e) {
		return typeof e == "object" && !!e && e.$$typeof === t;
	}
	function ae(e) {
		var t = {
			"=": "=0",
			":": "=2"
		};
		return "$" + e.replace(/[=:]/g, function(e) {
			return t[e];
		});
	}
	var C = /\/+/g;
	function oe(e, t) {
		return typeof e == "object" && e && e.key != null ? ae("" + e.key) : t.toString(36);
	}
	function w(e, r, i, a, o) {
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
		if (c) return c = e, o = o(c), e = a === "" ? "." + oe(c, 0) : a, x(o) ? (i = "", e != null && (i = e.replace(C, "$&/") + "/"), w(o, r, i, "", function(e) {
			return e;
		})) : o != null && (ie(o) && (o = re(o, i + (!o.key || c && c.key === o.key ? "" : ("" + o.key).replace(C, "$&/") + "/") + e)), r.push(o)), 1;
		if (c = 0, a = a === "" ? "." : a + ":", x(e)) for (var l = 0; l < e.length; l++) {
			s = e[l];
			var u = a + oe(s, l);
			c += w(s, r, i, u, o);
		}
		else if (u = p(e), typeof u == "function") for (e = u.call(e), l = 0; !(s = e.next()).done;) s = s.value, u = a + oe(s, l++), c += w(s, r, i, u, o);
		else if (s === "object") throw r = String(e), Error("Objects are not valid as a React child (found: " + (r === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : r) + "). If you meant to render a collection of children, use an array instead.");
		return c;
	}
	function T(e, t, n) {
		if (e == null) return e;
		var r = [], i = 0;
		return w(e, r, "", "", function(e) {
			return t.call(n, e, i++);
		}), r;
	}
	function se(e) {
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
	var E = { current: null }, ce = { transition: null }, le = {
		ReactCurrentDispatcher: E,
		ReactCurrentBatchConfig: ce,
		ReactCurrentOwner: S
	};
	function ue() {
		throw Error("act(...) is not supported in production builds of React.");
	}
	e.Children = {
		map: T,
		forEach: function(e, t, n) {
			T(e, function() {
				t.apply(this, arguments);
			}, n);
		},
		count: function(e) {
			var t = 0;
			return T(e, function() {
				t++;
			}), t;
		},
		toArray: function(e) {
			return T(e, function(e) {
				return e;
			}) || [];
		},
		only: function(e) {
			if (!ie(e)) throw Error("React.Children.only expected to receive a single React element child.");
			return e;
		}
	}, e.Component = _, e.Fragment = r, e.Profiler = a, e.PureComponent = y, e.StrictMode = i, e.Suspense = l, e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = le, e.act = ue, e.cloneElement = function(e, n, r) {
		if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
		var i = h({}, e.props), a = e.key, o = e.ref, s = e._owner;
		if (n != null) {
			if (n.ref !== void 0 && (o = n.ref, s = S.current), n.key !== void 0 && (a = "" + n.key), e.type && e.type.defaultProps) var c = e.type.defaultProps;
			for (l in n) ee.call(n, l) && !te.hasOwnProperty(l) && (i[l] = n[l] === void 0 && c !== void 0 ? c[l] : n[l]);
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
	}, e.createElement = ne, e.createFactory = function(e) {
		var t = ne.bind(null, e);
		return t.type = e, t;
	}, e.createRef = function() {
		return { current: null };
	}, e.forwardRef = function(e) {
		return {
			$$typeof: c,
			render: e
		};
	}, e.isValidElement = ie, e.lazy = function(e) {
		return {
			$$typeof: d,
			_payload: {
				_status: -1,
				_result: e
			},
			_init: se
		};
	}, e.memo = function(e, t) {
		return {
			$$typeof: u,
			type: e,
			compare: t === void 0 ? null : t
		};
	}, e.startTransition = function(e) {
		var t = ce.transition;
		ce.transition = {};
		try {
			e();
		} finally {
			ce.transition = t;
		}
	}, e.unstable_act = ue, e.useCallback = function(e, t) {
		return E.current.useCallback(e, t);
	}, e.useContext = function(e) {
		return E.current.useContext(e);
	}, e.useDebugValue = function() {}, e.useDeferredValue = function(e) {
		return E.current.useDeferredValue(e);
	}, e.useEffect = function(e, t) {
		return E.current.useEffect(e, t);
	}, e.useId = function() {
		return E.current.useId();
	}, e.useImperativeHandle = function(e, t, n) {
		return E.current.useImperativeHandle(e, t, n);
	}, e.useInsertionEffect = function(e, t) {
		return E.current.useInsertionEffect(e, t);
	}, e.useLayoutEffect = function(e, t) {
		return E.current.useLayoutEffect(e, t);
	}, e.useMemo = function(e, t) {
		return E.current.useMemo(e, t);
	}, e.useReducer = function(e, t, n) {
		return E.current.useReducer(e, t, n);
	}, e.useRef = function(e) {
		return E.current.useRef(e);
	}, e.useState = function(e) {
		return E.current.useState(e);
	}, e.useSyncExternalStore = function(e, t, n) {
		return E.current.useSyncExternalStore(e, t, n);
	}, e.useTransition = function() {
		return E.current.useTransition();
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
			if (n(c) !== null) m = !0, T(x);
			else {
				var t = n(l);
				t !== null && se(b, t.startTime - e);
			}
		}
	}
	function x(t, i) {
		m = !1, h && (h = !1, _(te), te = -1), p = !0;
		var a = f;
		try {
			for (y(i), d = n(c); d !== null && (!(d.expirationTime > i) || t && !ie());) {
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
				g !== null && se(b, g.startTime - i), u = !1;
			}
			return u;
		} finally {
			d = null, f = a, p = !1;
		}
	}
	var ee = !1, S = null, te = -1, ne = 5, re = -1;
	function ie() {
		return !(e.unstable_now() - re < ne);
	}
	function ae() {
		if (S !== null) {
			var t = e.unstable_now();
			re = t;
			var n = !0;
			try {
				n = S(!0, t);
			} finally {
				n ? C() : (ee = !1, S = null);
			}
		} else ee = !1;
	}
	var C;
	if (typeof v == "function") C = function() {
		v(ae);
	};
	else if (typeof MessageChannel < "u") {
		var oe = new MessageChannel(), w = oe.port2;
		oe.port1.onmessage = ae, C = function() {
			w.postMessage(null);
		};
	} else C = function() {
		g(ae, 0);
	};
	function T(e) {
		S = e, ee || (ee = !0, C());
	}
	function se(t, n) {
		te = g(function() {
			t(e.unstable_now());
		}, n);
	}
	e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(e) {
		e.callback = null;
	}, e.unstable_continueExecution = function() {
		m || p || (m = !0, T(x));
	}, e.unstable_forceFrameRate = function(e) {
		0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : ne = 0 < e ? Math.floor(1e3 / e) : 5;
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
		}, a > o ? (r.sortIndex = a, t(l, r), n(c) === null && r === n(l) && (h ? (_(te), te = -1) : h = !0, se(b, a - o))) : (r.sortIndex = s, t(c, r), m || p || (m = !0, T(x))), r;
	}, e.unstable_shouldYield = ie, e.unstable_wrapCallback = function(e) {
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
	function ee(e, t, n, r) {
		var i = y.hasOwnProperty(t) ? y[t] : null;
		(i === null ? r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N" : i.type !== 0) && (_(t, n, i, r) && (n = null), r || i === null ? h(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type !== 3 && "" : n : (t = i.attributeName, r = i.attributeNamespace, n === null ? e.removeAttribute(t) : (i = i.type, n = i === 3 || i === 4 && !0 === n ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
	}
	var S = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, te = Symbol.for("react.element"), ne = Symbol.for("react.portal"), re = Symbol.for("react.fragment"), ie = Symbol.for("react.strict_mode"), ae = Symbol.for("react.profiler"), C = Symbol.for("react.provider"), oe = Symbol.for("react.context"), w = Symbol.for("react.forward_ref"), T = Symbol.for("react.suspense"), se = Symbol.for("react.suspense_list"), E = Symbol.for("react.memo"), ce = Symbol.for("react.lazy"), le = Symbol.for("react.offscreen"), ue = Symbol.iterator;
	function de(e) {
		return typeof e != "object" || !e ? null : (e = ue && e[ue] || e["@@iterator"], typeof e == "function" ? e : null);
	}
	var D = Object.assign, fe;
	function pe(e) {
		if (fe === void 0) try {
			throw Error();
		} catch (e) {
			var t = e.stack.trim().match(/\n( *(at )?)/);
			fe = t && t[1] || "";
		}
		return "\n" + fe + e;
	}
	var me = !1;
	function he(e, t) {
		if (!e || me) return "";
		me = !0;
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
			me = !1, Error.prepareStackTrace = n;
		}
		return (e = e ? e.displayName || e.name : "") ? pe(e) : "";
	}
	function ge(e) {
		switch (e.tag) {
			case 5: return pe(e.type);
			case 16: return pe("Lazy");
			case 13: return pe("Suspense");
			case 19: return pe("SuspenseList");
			case 0:
			case 2:
			case 15: return e = he(e.type, !1), e;
			case 11: return e = he(e.type.render, !1), e;
			case 1: return e = he(e.type, !0), e;
			default: return "";
		}
	}
	function _e(e) {
		if (e == null) return null;
		if (typeof e == "function") return e.displayName || e.name || null;
		if (typeof e == "string") return e;
		switch (e) {
			case re: return "Fragment";
			case ne: return "Portal";
			case ae: return "Profiler";
			case ie: return "StrictMode";
			case T: return "Suspense";
			case se: return "SuspenseList";
		}
		if (typeof e == "object") switch (e.$$typeof) {
			case oe: return (e.displayName || "Context") + ".Consumer";
			case C: return (e._context.displayName || "Context") + ".Provider";
			case w:
				var t = e.render;
				return e = e.displayName, e ||= (e = t.displayName || t.name || "", e === "" ? "ForwardRef" : "ForwardRef(" + e + ")"), e;
			case E: return t = e.displayName || null, t === null ? _e(e.type) || "Memo" : t;
			case ce:
				t = e._payload, e = e._init;
				try {
					return _e(e(t));
				} catch {}
		}
		return null;
	}
	function ve(e) {
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
			case 16: return _e(t);
			case 8: return t === ie ? "StrictMode" : "Mode";
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
	function ye(e) {
		switch (typeof e) {
			case "boolean":
			case "number":
			case "string":
			case "undefined": return e;
			case "object": return e;
			default: return "";
		}
	}
	function be(e) {
		var t = e.type;
		return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
	}
	function xe(e) {
		var t = be(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
	function Se(e) {
		e._valueTracker ||= xe(e);
	}
	function Ce(e) {
		if (!e) return !1;
		var t = e._valueTracker;
		if (!t) return !0;
		var n = t.getValue(), r = "";
		return e && (r = be(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n && (t.setValue(e), !0);
	}
	function we(e) {
		if (e ||= typeof document < "u" ? document : void 0, e === void 0) return null;
		try {
			return e.activeElement || e.body;
		} catch {
			return e.body;
		}
	}
	function Te(e, t) {
		var n = t.checked;
		return D({}, t, {
			defaultChecked: void 0,
			defaultValue: void 0,
			value: void 0,
			checked: n ?? e._wrapperState.initialChecked
		});
	}
	function Ee(e, t) {
		var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked == null ? t.defaultChecked : t.checked;
		n = ye(t.value == null ? n : t.value), e._wrapperState = {
			initialChecked: r,
			initialValue: n,
			controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
		};
	}
	function De(e, t) {
		t = t.checked, t != null && ee(e, "checked", t, !1);
	}
	function Oe(e, t) {
		De(e, t);
		var n = ye(t.value), r = t.type;
		if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
		else if (r === "submit" || r === "reset") {
			e.removeAttribute("value");
			return;
		}
		t.hasOwnProperty("value") ? Ae(e, t.type, n) : t.hasOwnProperty("defaultValue") && Ae(e, t.type, ye(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
	}
	function ke(e, t, n) {
		if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
			var r = t.type;
			if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
			t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
		}
		n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
	}
	function Ae(e, t, n) {
		(t !== "number" || we(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
	}
	var je = Array.isArray;
	function Me(e, t, n, r) {
		if (e = e.options, t) {
			t = {};
			for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
			for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0);
		} else {
			for (n = "" + ye(n), t = null, i = 0; i < e.length; i++) {
				if (e[i].value === n) {
					e[i].selected = !0, r && (e[i].defaultSelected = !0);
					return;
				}
				t !== null || e[i].disabled || (t = e[i]);
			}
			t !== null && (t.selected = !0);
		}
	}
	function Ne(e, t) {
		if (t.dangerouslySetInnerHTML != null) throw Error(i(91));
		return D({}, t, {
			value: void 0,
			defaultValue: void 0,
			children: "" + e._wrapperState.initialValue
		});
	}
	function Pe(e, t) {
		var n = t.value;
		if (n == null) {
			if (n = t.children, t = t.defaultValue, n != null) {
				if (t != null) throw Error(i(92));
				if (je(n)) {
					if (1 < n.length) throw Error(i(93));
					n = n[0];
				}
				t = n;
			}
			t ??= "", n = t;
		}
		e._wrapperState = { initialValue: ye(n) };
	}
	function Fe(e, t) {
		var n = ye(t.value), r = ye(t.defaultValue);
		n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
	}
	function Ie(e) {
		var t = e.textContent;
		t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
	}
	function O(e) {
		switch (e) {
			case "svg": return "http://www.w3.org/2000/svg";
			case "math": return "http://www.w3.org/1998/Math/MathML";
			default: return "http://www.w3.org/1999/xhtml";
		}
	}
	function Le(e, t) {
		return e == null || e === "http://www.w3.org/1999/xhtml" ? O(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
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
	function Be(e, t) {
		if (t) {
			var n = e.firstChild;
			if (n && n === e.lastChild && n.nodeType === 3) {
				n.nodeValue = t;
				return;
			}
		}
		e.textContent = t;
	}
	var Ve = {
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
	}, He = [
		"Webkit",
		"ms",
		"Moz",
		"O"
	];
	Object.keys(Ve).forEach(function(e) {
		He.forEach(function(t) {
			t = t + e.charAt(0).toUpperCase() + e.substring(1), Ve[t] = Ve[e];
		});
	});
	function Ue(e, t, n) {
		return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Ve.hasOwnProperty(e) && Ve[e] ? ("" + t).trim() : t + "px";
	}
	function We(e, t) {
		for (var n in e = e.style, t) if (t.hasOwnProperty(n)) {
			var r = n.indexOf("--") === 0, i = Ue(n, t[n], r);
			n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i;
		}
	}
	var Ge = D({ menuitem: !0 }, {
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
	function Ke(e, t) {
		if (t) {
			if (Ge[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(i(137, e));
			if (t.dangerouslySetInnerHTML != null) {
				if (t.children != null) throw Error(i(60));
				if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(i(61));
			}
			if (t.style != null && typeof t.style != "object") throw Error(i(62));
		}
	}
	function qe(e, t) {
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
	var Je = null;
	function Ye(e) {
		return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
	}
	var Xe = null, Ze = null, Qe = null;
	function $e(e) {
		if (e = Yi(e)) {
			if (typeof Xe != "function") throw Error(i(280));
			var t = e.stateNode;
			t && (t = Zi(t), Xe(e.stateNode, e.type, t));
		}
	}
	function et(e) {
		Ze ? Qe ? Qe.push(e) : Qe = [e] : Ze = e;
	}
	function tt() {
		if (Ze) {
			var e = Ze, t = Qe;
			if (Qe = Ze = null, $e(e), t) for (e = 0; e < t.length; e++) $e(t[e]);
		}
	}
	function nt(e, t) {
		return e(t);
	}
	function rt() {}
	var it = !1;
	function at(e, t, n) {
		if (it) return e(t, n);
		it = !0;
		try {
			return nt(e, t, n);
		} finally {
			it = !1, (Ze !== null || Qe !== null) && (rt(), tt());
		}
	}
	function ot(e, t) {
		var n = e.stateNode;
		if (n === null) return null;
		var r = Zi(n);
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
	var st = !1;
	if (u) try {
		var ct = {};
		Object.defineProperty(ct, "passive", { get: function() {
			st = !0;
		} }), window.addEventListener("test", ct, ct), window.removeEventListener("test", ct, ct);
	} catch {
		st = !1;
	}
	function lt(e, t, n, r, i, a, o, s, c) {
		var l = Array.prototype.slice.call(arguments, 3);
		try {
			t.apply(n, l);
		} catch (e) {
			this.onError(e);
		}
	}
	var ut = !1, dt = null, ft = !1, k = null, pt = { onError: function(e) {
		ut = !0, dt = e;
	} };
	function mt(e, t, n, r, i, a, o, s, c) {
		ut = !1, dt = null, lt.apply(pt, arguments);
	}
	function ht(e, t, n, r, a, o, s, c, l) {
		if (mt.apply(this, arguments), ut) {
			if (ut) {
				var u = dt;
				ut = !1, dt = null;
			} else throw Error(i(198));
			ft || (ft = !0, k = u);
		}
	}
	function gt(e) {
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
	function _t(e) {
		if (e.tag === 13) {
			var t = e.memoizedState;
			if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
		}
		return null;
	}
	function vt(e) {
		if (gt(e) !== e) throw Error(i(188));
	}
	function yt(e) {
		var t = e.alternate;
		if (!t) {
			if (t = gt(e), t === null) throw Error(i(188));
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
					if (o === n) return vt(a), e;
					if (o === r) return vt(a), t;
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
	function bt(e) {
		return e = yt(e), e === null ? null : xt(e);
	}
	function xt(e) {
		if (e.tag === 5 || e.tag === 6) return e;
		for (e = e.child; e !== null;) {
			var t = xt(e);
			if (t !== null) return t;
			e = e.sibling;
		}
		return null;
	}
	var St = n.unstable_scheduleCallback, Ct = n.unstable_cancelCallback, wt = n.unstable_shouldYield, Tt = n.unstable_requestPaint, A = n.unstable_now, Et = n.unstable_getCurrentPriorityLevel, Dt = n.unstable_ImmediatePriority, Ot = n.unstable_UserBlockingPriority, kt = n.unstable_NormalPriority, At = n.unstable_LowPriority, jt = n.unstable_IdlePriority, Mt = null, Nt = null;
	function Pt(e) {
		if (Nt && typeof Nt.onCommitFiberRoot == "function") try {
			Nt.onCommitFiberRoot(Mt, e, void 0, (e.current.flags & 128) == 128);
		} catch {}
	}
	var Ft = Math.clz32 ? Math.clz32 : Rt, It = Math.log, Lt = Math.LN2;
	function Rt(e) {
		return e >>>= 0, e === 0 ? 32 : 31 - (It(e) / Lt | 0) | 0;
	}
	var zt = 64, Bt = 4194304;
	function Vt(e) {
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
	function Ht(e, t) {
		var n = e.pendingLanes;
		if (n === 0) return 0;
		var r = 0, i = e.suspendedLanes, a = e.pingedLanes, o = n & 268435455;
		if (o !== 0) {
			var s = o & ~i;
			s === 0 ? (a &= o, a !== 0 && (r = Vt(a))) : r = Vt(s);
		} else o = n & ~i, o === 0 ? a !== 0 && (r = Vt(a)) : r = Vt(o);
		if (r === 0) return 0;
		if (t !== 0 && t !== r && (t & i) === 0 && (i = r & -r, a = t & -t, i >= a || i === 16 && a & 4194240)) return t;
		if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t;) n = 31 - Ft(t), i = 1 << n, r |= e[n], t &= ~i;
		return r;
	}
	function Ut(e, t) {
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
	function Wt(e, t) {
		for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, a = e.pendingLanes; 0 < a;) {
			var o = 31 - Ft(a), s = 1 << o, c = i[o];
			c === -1 ? ((s & n) === 0 || (s & r) !== 0) && (i[o] = Ut(s, t)) : c <= t && (e.expiredLanes |= s), a &= ~s;
		}
	}
	function Gt(e) {
		return e = e.pendingLanes & -1073741825, e === 0 ? e & 1073741824 ? 1073741824 : 0 : e;
	}
	function Kt() {
		var e = zt;
		return zt <<= 1, !(zt & 4194240) && (zt = 64), e;
	}
	function qt(e) {
		for (var t = [], n = 0; 31 > n; n++) t.push(e);
		return t;
	}
	function Jt(e, t, n) {
		e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Ft(t), e[t] = n;
	}
	function Yt(e, t) {
		var n = e.pendingLanes & ~t;
		e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
		var r = e.eventTimes;
		for (e = e.expirationTimes; 0 < n;) {
			var i = 31 - Ft(n), a = 1 << i;
			t[i] = 0, r[i] = -1, e[i] = -1, n &= ~a;
		}
	}
	function Xt(e, t) {
		var n = e.entangledLanes |= t;
		for (e = e.entanglements; n;) {
			var r = 31 - Ft(n), i = 1 << r;
			i & t | e[r] & t && (e[r] |= t), n &= ~i;
		}
	}
	var j = 0;
	function Zt(e) {
		return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
	}
	var Qt, $t, en, tn, nn, rn = !1, an = [], on = null, sn = null, cn = null, ln = /* @__PURE__ */ new Map(), M = /* @__PURE__ */ new Map(), un = [], dn = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
	function fn(e, t) {
		switch (e) {
			case "focusin":
			case "focusout":
				on = null;
				break;
			case "dragenter":
			case "dragleave":
				sn = null;
				break;
			case "mouseover":
			case "mouseout":
				cn = null;
				break;
			case "pointerover":
			case "pointerout":
				ln.delete(t.pointerId);
				break;
			case "gotpointercapture":
			case "lostpointercapture": M.delete(t.pointerId);
		}
	}
	function pn(e, t, n, r, i, a) {
		return e === null || e.nativeEvent !== a ? (e = {
			blockedOn: t,
			domEventName: n,
			eventSystemFlags: r,
			nativeEvent: a,
			targetContainers: [i]
		}, t !== null && (t = Yi(t), t !== null && $t(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
	}
	function mn(e, t, n, r, i) {
		switch (t) {
			case "focusin": return on = pn(on, e, t, n, r, i), !0;
			case "dragenter": return sn = pn(sn, e, t, n, r, i), !0;
			case "mouseover": return cn = pn(cn, e, t, n, r, i), !0;
			case "pointerover":
				var a = i.pointerId;
				return ln.set(a, pn(ln.get(a) || null, e, t, n, r, i)), !0;
			case "gotpointercapture": return a = i.pointerId, M.set(a, pn(M.get(a) || null, e, t, n, r, i)), !0;
		}
		return !1;
	}
	function hn(e) {
		var t = Ji(e.target);
		if (t !== null) {
			var n = gt(t);
			if (n !== null) {
				if (t = n.tag, t === 13) {
					if (t = _t(n), t !== null) {
						e.blockedOn = t, nn(e.priority, function() {
							en(n);
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
	function gn(e) {
		if (e.blockedOn !== null) return !1;
		for (var t = e.targetContainers; 0 < t.length;) {
			var n = Dn(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
			if (n === null) {
				n = e.nativeEvent;
				var r = new n.constructor(n.type, n);
				Je = r, n.target.dispatchEvent(r), Je = null;
			} else return t = Yi(n), t !== null && $t(t), e.blockedOn = n, !1;
			t.shift();
		}
		return !0;
	}
	function _n(e, t, n) {
		gn(e) && n.delete(t);
	}
	function vn() {
		rn = !1, on !== null && gn(on) && (on = null), sn !== null && gn(sn) && (sn = null), cn !== null && gn(cn) && (cn = null), ln.forEach(_n), M.forEach(_n);
	}
	function yn(e, t) {
		e.blockedOn === t && (e.blockedOn = null, rn || (rn = !0, n.unstable_scheduleCallback(n.unstable_NormalPriority, vn)));
	}
	function bn(e) {
		function t(t) {
			return yn(t, e);
		}
		if (0 < an.length) {
			yn(an[0], e);
			for (var n = 1; n < an.length; n++) {
				var r = an[n];
				r.blockedOn === e && (r.blockedOn = null);
			}
		}
		for (on !== null && yn(on, e), sn !== null && yn(sn, e), cn !== null && yn(cn, e), ln.forEach(t), M.forEach(t), n = 0; n < un.length; n++) r = un[n], r.blockedOn === e && (r.blockedOn = null);
		for (; 0 < un.length && (n = un[0], n.blockedOn === null);) hn(n), n.blockedOn === null && un.shift();
	}
	var xn = S.ReactCurrentBatchConfig, Sn = !0;
	function Cn(e, t, n, r) {
		var i = j, a = xn.transition;
		xn.transition = null;
		try {
			j = 1, Tn(e, t, n, r);
		} finally {
			j = i, xn.transition = a;
		}
	}
	function wn(e, t, n, r) {
		var i = j, a = xn.transition;
		xn.transition = null;
		try {
			j = 4, Tn(e, t, n, r);
		} finally {
			j = i, xn.transition = a;
		}
	}
	function Tn(e, t, n, r) {
		if (Sn) {
			var i = Dn(e, t, n, r);
			if (i === null) bi(e, t, r, En, n), fn(e, r);
			else if (mn(i, e, t, n, r)) r.stopPropagation();
			else if (fn(e, r), t & 4 && -1 < dn.indexOf(e)) {
				for (; i !== null;) {
					var a = Yi(i);
					if (a !== null && Qt(a), a = Dn(e, t, n, r), a === null && bi(e, t, r, En, n), a === i) break;
					i = a;
				}
				i !== null && r.stopPropagation();
			} else bi(e, t, r, null, n);
		}
	}
	var En = null;
	function Dn(e, t, n, r) {
		if (En = null, e = Ye(r), e = Ji(e), e !== null) {
			if (t = gt(e), t === null) e = null;
			else if (n = t.tag, n === 13) {
				if (e = _t(t), e !== null) return e;
				e = null;
			} else if (n === 3) {
				if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
				e = null;
			} else t !== e && (e = null);
		}
		return En = e, null;
	}
	function On(e) {
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
			case "message": switch (Et()) {
				case Dt: return 1;
				case Ot: return 4;
				case kt:
				case At: return 16;
				case jt: return 536870912;
				default: return 16;
			}
			default: return 16;
		}
	}
	var kn = null, An = null, jn = null;
	function Mn() {
		if (jn) return jn;
		var e, t = An, n = t.length, r, i = "value" in kn ? kn.value : kn.textContent, a = i.length;
		for (e = 0; e < n && t[e] === i[e]; e++);
		var o = n - e;
		for (r = 1; r <= o && t[n - r] === i[a - r]; r++);
		return jn = i.slice(e, 1 < r ? 1 - r : void 0);
	}
	function Nn(e) {
		var t = e.keyCode;
		return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
	}
	function Pn() {
		return !0;
	}
	function Fn() {
		return !1;
	}
	function In(e) {
		function t(t, n, r, i, a) {
			for (var o in this._reactName = t, this._targetInst = r, this.type = n, this.nativeEvent = i, this.target = a, this.currentTarget = null, e) e.hasOwnProperty(o) && (t = e[o], this[o] = t ? t(i) : i[o]);
			return this.isDefaultPrevented = (i.defaultPrevented == null ? !1 === i.returnValue : i.defaultPrevented) ? Pn : Fn, this.isPropagationStopped = Fn, this;
		}
		return D(t.prototype, {
			preventDefault: function() {
				this.defaultPrevented = !0;
				var e = this.nativeEvent;
				e && (e.preventDefault ? e.preventDefault() : typeof e.returnValue != "unknown" && (e.returnValue = !1), this.isDefaultPrevented = Pn);
			},
			stopPropagation: function() {
				var e = this.nativeEvent;
				e && (e.stopPropagation ? e.stopPropagation() : typeof e.cancelBubble != "unknown" && (e.cancelBubble = !0), this.isPropagationStopped = Pn);
			},
			persist: function() {},
			isPersistent: Pn
		}), t;
	}
	var Ln = {
		eventPhase: 0,
		bubbles: 0,
		cancelable: 0,
		timeStamp: function(e) {
			return e.timeStamp || Date.now();
		},
		defaultPrevented: 0,
		isTrusted: 0
	}, Rn = In(Ln), zn = D({}, Ln, {
		view: 0,
		detail: 0
	}), Bn = In(zn), Vn, Hn, Un, Wn = D({}, zn, {
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
		getModifierState: tr,
		button: 0,
		buttons: 0,
		relatedTarget: function(e) {
			return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
		},
		movementX: function(e) {
			return "movementX" in e ? e.movementX : (e !== Un && (Un && e.type === "mousemove" ? (Vn = e.screenX - Un.screenX, Hn = e.screenY - Un.screenY) : Hn = Vn = 0, Un = e), Vn);
		},
		movementY: function(e) {
			return "movementY" in e ? e.movementY : Hn;
		}
	}), Gn = In(Wn), Kn = In(D({}, Wn, { dataTransfer: 0 })), qn = In(D({}, zn, { relatedTarget: 0 })), Jn = In(D({}, Ln, {
		animationName: 0,
		elapsedTime: 0,
		pseudoElement: 0
	})), Yn = In(D({}, Ln, { clipboardData: function(e) {
		return "clipboardData" in e ? e.clipboardData : window.clipboardData;
	} })), Xn = In(D({}, Ln, { data: 0 })), Zn = {
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
	}, Qn = {
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
	}, $n = {
		Alt: "altKey",
		Control: "ctrlKey",
		Meta: "metaKey",
		Shift: "shiftKey"
	};
	function er(e) {
		var t = this.nativeEvent;
		return t.getModifierState ? t.getModifierState(e) : (e = $n[e]) ? !!t[e] : !1;
	}
	function tr() {
		return er;
	}
	var nr = In(D({}, zn, {
		key: function(e) {
			if (e.key) {
				var t = Zn[e.key] || e.key;
				if (t !== "Unidentified") return t;
			}
			return e.type === "keypress" ? (e = Nn(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Qn[e.keyCode] || "Unidentified" : "";
		},
		code: 0,
		location: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		repeat: 0,
		locale: 0,
		getModifierState: tr,
		charCode: function(e) {
			return e.type === "keypress" ? Nn(e) : 0;
		},
		keyCode: function(e) {
			return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
		},
		which: function(e) {
			return e.type === "keypress" ? Nn(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
		}
	})), rr = In(D({}, Wn, {
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
	})), ir = In(D({}, zn, {
		touches: 0,
		targetTouches: 0,
		changedTouches: 0,
		altKey: 0,
		metaKey: 0,
		ctrlKey: 0,
		shiftKey: 0,
		getModifierState: tr
	})), ar = In(D({}, Ln, {
		propertyName: 0,
		elapsedTime: 0,
		pseudoElement: 0
	})), or = In(D({}, Wn, {
		deltaX: function(e) {
			return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
		},
		deltaY: function(e) {
			return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
		},
		deltaZ: 0,
		deltaMode: 0
	})), sr = [
		9,
		13,
		27,
		32
	], cr = u && "CompositionEvent" in window, lr = null;
	u && "documentMode" in document && (lr = document.documentMode);
	var ur = u && "TextEvent" in window && !lr, dr = u && (!cr || lr && 8 < lr && 11 >= lr), fr = " ", pr = !1;
	function mr(e, t) {
		switch (e) {
			case "keyup": return sr.indexOf(t.keyCode) !== -1;
			case "keydown": return t.keyCode !== 229;
			case "keypress":
			case "mousedown":
			case "focusout": return !0;
			default: return !1;
		}
	}
	function hr(e) {
		return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
	}
	var gr = !1;
	function _r(e, t) {
		switch (e) {
			case "compositionend": return hr(t);
			case "keypress": return t.which === 32 ? (pr = !0, fr) : null;
			case "textInput": return e = t.data, e === fr && pr ? null : e;
			default: return null;
		}
	}
	function vr(e, t) {
		if (gr) return e === "compositionend" || !cr && mr(e, t) ? (e = Mn(), jn = An = kn = null, gr = !1, e) : null;
		switch (e) {
			case "paste": return null;
			case "keypress":
				if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
					if (t.char && 1 < t.char.length) return t.char;
					if (t.which) return String.fromCharCode(t.which);
				}
				return null;
			case "compositionend": return dr && t.locale !== "ko" ? null : t.data;
			default: return null;
		}
	}
	var yr = {
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
	function br(e) {
		var t = e && e.nodeName && e.nodeName.toLowerCase();
		return t === "input" ? !!yr[e.type] : t === "textarea";
	}
	function xr(e, t, n, r) {
		et(r), t = Si(t, "onChange"), 0 < t.length && (n = new Rn("onChange", "change", null, n, r), e.push({
			event: n,
			listeners: t
		}));
	}
	var Sr = null, Cr = null;
	function wr(e) {
		hi(e, 0);
	}
	function Tr(e) {
		if (Ce(Xi(e))) return e;
	}
	function Er(e, t) {
		if (e === "change") return t;
	}
	var Dr = !1;
	if (u) {
		var Or;
		if (u) {
			var kr = "oninput" in document;
			if (!kr) {
				var Ar = document.createElement("div");
				Ar.setAttribute("oninput", "return;"), kr = typeof Ar.oninput == "function";
			}
			Or = kr;
		} else Or = !1;
		Dr = Or && (!document.documentMode || 9 < document.documentMode);
	}
	function jr() {
		Sr && (Sr.detachEvent("onpropertychange", Mr), Cr = Sr = null);
	}
	function Mr(e) {
		if (e.propertyName === "value" && Tr(Cr)) {
			var t = [];
			xr(t, Cr, e, Ye(e)), at(wr, t);
		}
	}
	function Nr(e, t, n) {
		e === "focusin" ? (jr(), Sr = t, Cr = n, Sr.attachEvent("onpropertychange", Mr)) : e === "focusout" && jr();
	}
	function Pr(e) {
		if (e === "selectionchange" || e === "keyup" || e === "keydown") return Tr(Cr);
	}
	function Fr(e, t) {
		if (e === "click") return Tr(t);
	}
	function Ir(e, t) {
		if (e === "input" || e === "change") return Tr(t);
	}
	function Lr(e, t) {
		return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t;
	}
	var Rr = typeof Object.is == "function" ? Object.is : Lr;
	function zr(e, t) {
		if (Rr(e, t)) return !0;
		if (typeof e != "object" || !e || typeof t != "object" || !t) return !1;
		var n = Object.keys(e), r = Object.keys(t);
		if (n.length !== r.length) return !1;
		for (r = 0; r < n.length; r++) {
			var i = n[r];
			if (!d.call(t, i) || !Rr(e[i], t[i])) return !1;
		}
		return !0;
	}
	function Br(e) {
		for (; e && e.firstChild;) e = e.firstChild;
		return e;
	}
	function Vr(e, t) {
		var n = Br(e);
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
			n = Br(n);
		}
	}
	function Hr(e, t) {
		return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Hr(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
	}
	function Ur() {
		for (var e = window, t = we(); t instanceof e.HTMLIFrameElement;) {
			try {
				var n = typeof t.contentWindow.location.href == "string";
			} catch {
				n = !1;
			}
			if (n) e = t.contentWindow;
			else break;
			t = we(e.document);
		}
		return t;
	}
	function Wr(e) {
		var t = e && e.nodeName && e.nodeName.toLowerCase();
		return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
	}
	function Gr(e) {
		var t = Ur(), n = e.focusedElem, r = e.selectionRange;
		if (t !== n && n && n.ownerDocument && Hr(n.ownerDocument.documentElement, n)) {
			if (r !== null && Wr(n)) {
				if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
				else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
					e = e.getSelection();
					var i = n.textContent.length, a = Math.min(r.start, i);
					r = r.end === void 0 ? a : Math.min(r.end, i), !e.extend && a > r && (i = r, r = a, a = i), i = Vr(n, a);
					var o = Vr(n, r);
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
	var Kr = u && "documentMode" in document && 11 >= document.documentMode, qr = null, Jr = null, Yr = null, Xr = !1;
	function Zr(e, t, n) {
		var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
		Xr || qr == null || qr !== we(r) || (r = qr, "selectionStart" in r && Wr(r) ? r = {
			start: r.selectionStart,
			end: r.selectionEnd
		} : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
			anchorNode: r.anchorNode,
			anchorOffset: r.anchorOffset,
			focusNode: r.focusNode,
			focusOffset: r.focusOffset
		}), Yr && zr(Yr, r) || (Yr = r, r = Si(Jr, "onSelect"), 0 < r.length && (t = new Rn("onSelect", "select", null, t, n), e.push({
			event: t,
			listeners: r
		}), t.target = qr)));
	}
	function Qr(e, t) {
		var n = {};
		return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
	}
	var $r = {
		animationend: Qr("Animation", "AnimationEnd"),
		animationiteration: Qr("Animation", "AnimationIteration"),
		animationstart: Qr("Animation", "AnimationStart"),
		transitionend: Qr("Transition", "TransitionEnd")
	}, ei = {}, ti = {};
	u && (ti = document.createElement("div").style, "AnimationEvent" in window || (delete $r.animationend.animation, delete $r.animationiteration.animation, delete $r.animationstart.animation), "TransitionEvent" in window || delete $r.transitionend.transition);
	function ni(e) {
		if (ei[e]) return ei[e];
		if (!$r[e]) return e;
		var t = $r[e], n;
		for (n in t) if (t.hasOwnProperty(n) && n in ti) return ei[e] = t[n];
		return e;
	}
	var ri = ni("animationend"), ii = ni("animationiteration"), ai = ni("animationstart"), oi = ni("transitionend"), si = /* @__PURE__ */ new Map(), ci = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
	function li(e, t) {
		si.set(e, t), c(t, [e]);
	}
	for (var ui = 0; ui < ci.length; ui++) {
		var di = ci[ui];
		li(di.toLowerCase(), "on" + (di[0].toUpperCase() + di.slice(1)));
	}
	li(ri, "onAnimationEnd"), li(ii, "onAnimationIteration"), li(ai, "onAnimationStart"), li("dblclick", "onDoubleClick"), li("focusin", "onFocus"), li("focusout", "onBlur"), li(oi, "onTransitionEnd"), l("onMouseEnter", ["mouseout", "mouseover"]), l("onMouseLeave", ["mouseout", "mouseover"]), l("onPointerEnter", ["pointerout", "pointerover"]), l("onPointerLeave", ["pointerout", "pointerover"]), c("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), c("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), c("onBeforeInput", [
		"compositionend",
		"keypress",
		"textInput",
		"paste"
	]), c("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), c("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), c("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
	var fi = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), pi = new Set("cancel close invalid load scroll toggle".split(" ").concat(fi));
	function mi(e, t, n) {
		var r = e.type || "unknown-event";
		e.currentTarget = n, ht(r, t, void 0, e), e.currentTarget = null;
	}
	function hi(e, t) {
		t = !!(t & 4);
		for (var n = 0; n < e.length; n++) {
			var r = e[n], i = r.event;
			r = r.listeners;
			a: {
				var a = void 0;
				if (t) for (var o = r.length - 1; 0 <= o; o--) {
					var s = r[o], c = s.instance, l = s.currentTarget;
					if (s = s.listener, c !== a && i.isPropagationStopped()) break a;
					mi(i, s, l), a = c;
				}
				else for (o = 0; o < r.length; o++) {
					if (s = r[o], c = s.instance, l = s.currentTarget, s = s.listener, c !== a && i.isPropagationStopped()) break a;
					mi(i, s, l), a = c;
				}
			}
		}
		if (ft) throw e = k, ft = !1, k = null, e;
	}
	function N(e, t) {
		var n = t[Gi];
		n === void 0 && (n = t[Gi] = /* @__PURE__ */ new Set());
		var r = e + "__bubble";
		n.has(r) || (yi(t, e, 2, !1), n.add(r));
	}
	function gi(e, t, n) {
		var r = 0;
		t && (r |= 4), yi(n, e, r, t);
	}
	var _i = "_reactListening" + Math.random().toString(36).slice(2);
	function vi(e) {
		if (!e[_i]) {
			e[_i] = !0, o.forEach(function(t) {
				t !== "selectionchange" && (pi.has(t) || gi(t, !1, e), gi(t, !0, e));
			});
			var t = e.nodeType === 9 ? e : e.ownerDocument;
			t === null || t[_i] || (t[_i] = !0, gi("selectionchange", !1, t));
		}
	}
	function yi(e, t, n, r) {
		switch (On(t)) {
			case 1:
				var i = Cn;
				break;
			case 4:
				i = wn;
				break;
			default: i = Tn;
		}
		n = i.bind(null, t, n, e), i = void 0, !st || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i === void 0 ? e.addEventListener(t, n, !0) : e.addEventListener(t, n, {
			capture: !0,
			passive: i
		}) : i === void 0 ? e.addEventListener(t, n, !1) : e.addEventListener(t, n, { passive: i });
	}
	function bi(e, t, n, r, i) {
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
					if (o = Ji(s), o === null) return;
					if (c = o.tag, c === 5 || c === 6) {
						r = a = o;
						continue a;
					}
					s = s.parentNode;
				}
			}
			r = r.return;
		}
		at(function() {
			var r = a, i = Ye(n), o = [];
			a: {
				var s = si.get(e);
				if (s !== void 0) {
					var c = Rn, l = e;
					switch (e) {
						case "keypress": if (Nn(n) === 0) break a;
						case "keydown":
						case "keyup":
							c = nr;
							break;
						case "focusin":
							l = "focus", c = qn;
							break;
						case "focusout":
							l = "blur", c = qn;
							break;
						case "beforeblur":
						case "afterblur":
							c = qn;
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
							c = Gn;
							break;
						case "drag":
						case "dragend":
						case "dragenter":
						case "dragexit":
						case "dragleave":
						case "dragover":
						case "dragstart":
						case "drop":
							c = Kn;
							break;
						case "touchcancel":
						case "touchend":
						case "touchmove":
						case "touchstart":
							c = ir;
							break;
						case ri:
						case ii:
						case ai:
							c = Jn;
							break;
						case oi:
							c = ar;
							break;
						case "scroll":
							c = Bn;
							break;
						case "wheel":
							c = or;
							break;
						case "copy":
						case "cut":
						case "paste":
							c = Yn;
							break;
						case "gotpointercapture":
						case "lostpointercapture":
						case "pointercancel":
						case "pointerdown":
						case "pointermove":
						case "pointerout":
						case "pointerover":
						case "pointerup": c = rr;
					}
					var u = !!(t & 4), d = !u && e === "scroll", f = u ? s === null ? null : s + "Capture" : s;
					u = [];
					for (var p = r, m; p !== null;) {
						m = p;
						var h = m.stateNode;
						if (m.tag === 5 && h !== null && (m = h, f !== null && (h = ot(p, f), h != null && u.push(xi(p, h, m)))), d) break;
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
					if (s = e === "mouseover" || e === "pointerover", c = e === "mouseout" || e === "pointerout", s && n !== Je && (l = n.relatedTarget || n.fromElement) && (Ji(l) || l[Wi])) break a;
					if ((c || s) && (s = i.window === i ? i : (s = i.ownerDocument) ? s.defaultView || s.parentWindow : window, c ? (l = n.relatedTarget || n.toElement, c = r, l = l ? Ji(l) : null, l !== null && (d = gt(l), l !== d || l.tag !== 5 && l.tag !== 6) && (l = null)) : (c = null, l = r), c !== l)) {
						if (u = Gn, h = "onMouseLeave", f = "onMouseEnter", p = "mouse", (e === "pointerout" || e === "pointerover") && (u = rr, h = "onPointerLeave", f = "onPointerEnter", p = "pointer"), d = c == null ? s : Xi(c), m = l == null ? s : Xi(l), s = new u(h, p + "leave", c, n, i), s.target = d, s.relatedTarget = m, h = null, Ji(i) === r && (u = new u(f, p + "enter", l, n, i), u.target = m, u.relatedTarget = d, h = u), d = h, c && l) b: {
							for (u = c, f = l, p = 0, m = u; m; m = Ci(m)) p++;
							for (m = 0, h = f; h; h = Ci(h)) m++;
							for (; 0 < p - m;) u = Ci(u), p--;
							for (; 0 < m - p;) f = Ci(f), m--;
							for (; p--;) {
								if (u === f || f !== null && u === f.alternate) break b;
								u = Ci(u), f = Ci(f);
							}
							u = null;
						}
						else u = null;
						c !== null && wi(o, s, c, u, !1), l !== null && d !== null && wi(o, d, l, u, !0);
					}
				}
				a: {
					if (s = r ? Xi(r) : window, c = s.nodeName && s.nodeName.toLowerCase(), c === "select" || c === "input" && s.type === "file") var g = Er;
					else if (br(s)) {
						if (Dr) g = Ir;
						else {
							g = Pr;
							var _ = Nr;
						}
					} else (c = s.nodeName) && c.toLowerCase() === "input" && (s.type === "checkbox" || s.type === "radio") && (g = Fr);
					if (g &&= g(e, r)) {
						xr(o, g, n, i);
						break a;
					}
					_ && _(e, s, r), e === "focusout" && (_ = s._wrapperState) && _.controlled && s.type === "number" && Ae(s, "number", s.value);
				}
				switch (_ = r ? Xi(r) : window, e) {
					case "focusin":
						(br(_) || _.contentEditable === "true") && (qr = _, Jr = r, Yr = null);
						break;
					case "focusout":
						Yr = Jr = qr = null;
						break;
					case "mousedown":
						Xr = !0;
						break;
					case "contextmenu":
					case "mouseup":
					case "dragend":
						Xr = !1, Zr(o, n, i);
						break;
					case "selectionchange": if (Kr) break;
					case "keydown":
					case "keyup": Zr(o, n, i);
				}
				var v;
				if (cr) b: {
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
				else gr ? mr(e, n) && (y = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (y = "onCompositionStart");
				y && (dr && n.locale !== "ko" && (gr || y !== "onCompositionStart" ? y === "onCompositionEnd" && gr && (v = Mn()) : (kn = i, An = "value" in kn ? kn.value : kn.textContent, gr = !0)), _ = Si(r, y), 0 < _.length && (y = new Xn(y, e, null, n, i), o.push({
					event: y,
					listeners: _
				}), v ? y.data = v : (v = hr(n), v !== null && (y.data = v)))), (v = ur ? _r(e, n) : vr(e, n)) && (r = Si(r, "onBeforeInput"), 0 < r.length && (i = new Xn("onBeforeInput", "beforeinput", null, n, i), o.push({
					event: i,
					listeners: r
				}), i.data = v));
			}
			hi(o, t);
		});
	}
	function xi(e, t, n) {
		return {
			instance: e,
			listener: t,
			currentTarget: n
		};
	}
	function Si(e, t) {
		for (var n = t + "Capture", r = []; e !== null;) {
			var i = e, a = i.stateNode;
			i.tag === 5 && a !== null && (i = a, a = ot(e, n), a != null && r.unshift(xi(e, a, i)), a = ot(e, t), a != null && r.push(xi(e, a, i))), e = e.return;
		}
		return r;
	}
	function Ci(e) {
		if (e === null) return null;
		do
			e = e.return;
		while (e && e.tag !== 5);
		return e || null;
	}
	function wi(e, t, n, r, i) {
		for (var a = t._reactName, o = []; n !== null && n !== r;) {
			var s = n, c = s.alternate, l = s.stateNode;
			if (c !== null && c === r) break;
			s.tag === 5 && l !== null && (s = l, i ? (c = ot(n, a), c != null && o.unshift(xi(n, c, s))) : i || (c = ot(n, a), c != null && o.push(xi(n, c, s)))), n = n.return;
		}
		o.length !== 0 && e.push({
			event: t,
			listeners: o
		});
	}
	var Ti = /\r\n?/g, Ei = /\u0000|\uFFFD/g;
	function Di(e) {
		return (typeof e == "string" ? e : "" + e).replace(Ti, "\n").replace(Ei, "");
	}
	function Oi(e, t, n) {
		if (t = Di(t), Di(e) !== t && n) throw Error(i(425));
	}
	function ki() {}
	var Ai = null, ji = null;
	function Mi(e, t) {
		return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
	}
	var Ni = typeof setTimeout == "function" ? setTimeout : void 0, Pi = typeof clearTimeout == "function" ? clearTimeout : void 0, Fi = typeof Promise == "function" ? Promise : void 0, Ii = typeof queueMicrotask == "function" ? queueMicrotask : Fi === void 0 ? Ni : function(e) {
		return Fi.resolve(null).then(e).catch(Li);
	};
	function Li(e) {
		setTimeout(function() {
			throw e;
		});
	}
	function Ri(e, t) {
		var n = t, r = 0;
		do {
			var i = n.nextSibling;
			if (e.removeChild(n), i && i.nodeType === 8) {
				if (n = i.data, n === "/$") {
					if (r === 0) {
						e.removeChild(i), bn(t);
						return;
					}
					r--;
				} else n !== "$" && n !== "$?" && n !== "$!" || r++;
			}
			n = i;
		} while (n);
		bn(t);
	}
	function zi(e) {
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
	function Bi(e) {
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
	var Vi = Math.random().toString(36).slice(2), Hi = "__reactFiber$" + Vi, Ui = "__reactProps$" + Vi, Wi = "__reactContainer$" + Vi, Gi = "__reactEvents$" + Vi, Ki = "__reactListeners$" + Vi, qi = "__reactHandles$" + Vi;
	function Ji(e) {
		var t = e[Hi];
		if (t) return t;
		for (var n = e.parentNode; n;) {
			if (t = n[Wi] || n[Hi]) {
				if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Bi(e); e !== null;) {
					if (n = e[Hi]) return n;
					e = Bi(e);
				}
				return t;
			}
			e = n, n = e.parentNode;
		}
		return null;
	}
	function Yi(e) {
		return e = e[Hi] || e[Wi], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
	}
	function Xi(e) {
		if (e.tag === 5 || e.tag === 6) return e.stateNode;
		throw Error(i(33));
	}
	function Zi(e) {
		return e[Ui] || null;
	}
	var Qi = [], $i = -1;
	function ea(e) {
		return { current: e };
	}
	function P(e) {
		0 > $i || (e.current = Qi[$i], Qi[$i] = null, $i--);
	}
	function F(e, t) {
		$i++, Qi[$i] = e.current, e.current = t;
	}
	var ta = {}, I = ea(ta), na = ea(!1), ra = ta;
	function ia(e, t) {
		var n = e.type.contextTypes;
		if (!n) return ta;
		var r = e.stateNode;
		if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
		var i = {}, a;
		for (a in n) i[a] = t[a];
		return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i;
	}
	function aa(e) {
		return e = e.childContextTypes, e != null;
	}
	function oa() {
		P(na), P(I);
	}
	function sa(e, t, n) {
		if (I.current !== ta) throw Error(i(168));
		F(I, t), F(na, n);
	}
	function ca(e, t, n) {
		var r = e.stateNode;
		if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
		for (var a in r = r.getChildContext(), r) if (!(a in t)) throw Error(i(108, ve(e) || "Unknown", a));
		return D({}, n, r);
	}
	function la(e) {
		return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || ta, ra = I.current, F(I, e), F(na, na.current), !0;
	}
	function ua(e, t, n) {
		var r = e.stateNode;
		if (!r) throw Error(i(169));
		n ? (e = ca(e, t, ra), r.__reactInternalMemoizedMergedChildContext = e, P(na), P(I), F(I, e)) : P(na), F(na, n);
	}
	var da = null, fa = !1, pa = !1;
	function ma(e) {
		da === null ? da = [e] : da.push(e);
	}
	function ha(e) {
		fa = !0, ma(e);
	}
	function ga() {
		if (!pa && da !== null) {
			pa = !0;
			var e = 0, t = j;
			try {
				var n = da;
				for (j = 1; e < n.length; e++) {
					var r = n[e];
					do
						r = r(!0);
					while (r !== null);
				}
				da = null, fa = !1;
			} catch (t) {
				throw da !== null && (da = da.slice(e + 1)), St(Dt, ga), t;
			} finally {
				j = t, pa = !1;
			}
		}
		return null;
	}
	var _a = [], va = 0, ya = null, ba = 0, xa = [], Sa = 0, Ca = null, wa = 1, Ta = "";
	function Ea(e, t) {
		_a[va++] = ba, _a[va++] = ya, ya = e, ba = t;
	}
	function Da(e, t, n) {
		xa[Sa++] = wa, xa[Sa++] = Ta, xa[Sa++] = Ca, Ca = e;
		var r = wa;
		e = Ta;
		var i = 32 - Ft(r) - 1;
		r &= ~(1 << i), n += 1;
		var a = 32 - Ft(t) + i;
		if (30 < a) {
			var o = i - i % 5;
			a = (r & (1 << o) - 1).toString(32), r >>= o, i -= o, wa = 1 << 32 - Ft(t) + i | n << i | r, Ta = a + e;
		} else wa = 1 << a | n << i | r, Ta = e;
	}
	function Oa(e) {
		e.return !== null && (Ea(e, 1), Da(e, 1, 0));
	}
	function ka(e) {
		for (; e === ya;) ya = _a[--va], _a[va] = null, ba = _a[--va], _a[va] = null;
		for (; e === Ca;) Ca = xa[--Sa], xa[Sa] = null, Ta = xa[--Sa], xa[Sa] = null, wa = xa[--Sa], xa[Sa] = null;
	}
	var Aa = null, ja = null, L = !1, Ma = null;
	function Na(e, t) {
		var n = ql(5, null, null, 0);
		n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
	}
	function Pa(e, t) {
		switch (e.tag) {
			case 5:
				var n = e.type;
				return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null && (e.stateNode = t, Aa = e, ja = zi(t.firstChild), !0);
			case 6: return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null && (e.stateNode = t, Aa = e, ja = null, !0);
			case 13: return t = t.nodeType === 8 ? t : null, t !== null && (n = Ca === null ? null : {
				id: wa,
				overflow: Ta
			}, e.memoizedState = {
				dehydrated: t,
				treeContext: n,
				retryLane: 1073741824
			}, n = ql(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Aa = e, ja = null, !0);
			default: return !1;
		}
	}
	function Fa(e) {
		return !!(e.mode & 1) && !(e.flags & 128);
	}
	function Ia(e) {
		if (L) {
			var t = ja;
			if (t) {
				var n = t;
				if (!Pa(e, t)) {
					if (Fa(e)) throw Error(i(418));
					t = zi(n.nextSibling);
					var r = Aa;
					t && Pa(e, t) ? Na(r, n) : (e.flags = e.flags & -4097 | 2, L = !1, Aa = e);
				}
			} else {
				if (Fa(e)) throw Error(i(418));
				e.flags = e.flags & -4097 | 2, L = !1, Aa = e;
			}
		}
	}
	function La(e) {
		for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
		Aa = e;
	}
	function Ra(e) {
		if (e !== Aa) return !1;
		if (!L) return La(e), L = !0, !1;
		var t;
		if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Mi(e.type, e.memoizedProps)), t &&= ja) {
			if (Fa(e)) throw za(), Error(i(418));
			for (; t;) Na(e, t), t = zi(t.nextSibling);
		}
		if (La(e), e.tag === 13) {
			if (e = e.memoizedState, e = e === null ? null : e.dehydrated, !e) throw Error(i(317));
			a: {
				for (e = e.nextSibling, t = 0; e;) {
					if (e.nodeType === 8) {
						var n = e.data;
						if (n === "/$") {
							if (t === 0) {
								ja = zi(e.nextSibling);
								break a;
							}
							t--;
						} else n !== "$" && n !== "$!" && n !== "$?" || t++;
					}
					e = e.nextSibling;
				}
				ja = null;
			}
		} else ja = Aa ? zi(e.stateNode.nextSibling) : null;
		return !0;
	}
	function za() {
		for (var e = ja; e;) e = zi(e.nextSibling);
	}
	function Ba() {
		ja = Aa = null, L = !1;
	}
	function Va(e) {
		Ma === null ? Ma = [e] : Ma.push(e);
	}
	var Ha = S.ReactCurrentBatchConfig;
	function Ua(e, t, n) {
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
	function Wa(e, t) {
		throw e = Object.prototype.toString.call(t), Error(i(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
	}
	function Ga(e) {
		var t = e._init;
		return t(e._payload);
	}
	function Ka(e) {
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
			return i === re ? d(e, t, n.props.children, r, n.key) : t !== null && (t.elementType === i || typeof i == "object" && i && i.$$typeof === ce && Ga(i) === t.type) ? (r = a(t, n.props), r.ref = Ua(e, t, n), r.return = e, r) : (r = Zl(n.type, n.key, n.props, null, e.mode, r), r.ref = Ua(e, t, n), r.return = e, r);
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
					case te: return n = Zl(t.type, t.key, t.props, null, e.mode, n), n.ref = Ua(e, null, t), n.return = e, n;
					case ne: return t = tu(t, e.mode, n), t.return = e, t;
					case ce:
						var r = t._init;
						return f(e, r(t._payload), n);
				}
				if (je(t) || de(t)) return t = Ql(t, e.mode, n, null), t.return = e, t;
				Wa(e, t);
			}
			return null;
		}
		function p(e, t, n, r) {
			var i = t === null ? null : t.key;
			if (typeof n == "string" && n !== "" || typeof n == "number") return i === null ? c(e, t, "" + n, r) : null;
			if (typeof n == "object" && n) {
				switch (n.$$typeof) {
					case te: return n.key === i ? l(e, t, n, r) : null;
					case ne: return n.key === i ? u(e, t, n, r) : null;
					case ce: return i = n._init, p(e, t, i(n._payload), r);
				}
				if (je(n) || de(n)) return i === null ? d(e, t, n, r, null) : null;
				Wa(e, n);
			}
			return null;
		}
		function m(e, t, n, r, i) {
			if (typeof r == "string" && r !== "" || typeof r == "number") return e = e.get(n) || null, c(t, e, "" + r, i);
			if (typeof r == "object" && r) {
				switch (r.$$typeof) {
					case te: return e = e.get(r.key === null ? n : r.key) || null, l(t, e, r, i);
					case ne: return e = e.get(r.key === null ? n : r.key) || null, u(t, e, r, i);
					case ce:
						var a = r._init;
						return m(e, t, n, a(r._payload), i);
				}
				if (je(r) || de(r)) return e = e.get(n) || null, d(t, e, r, i, null);
				Wa(t, r);
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
			if (h === s.length) return n(i, d), L && Ea(i, h), l;
			if (d === null) {
				for (; h < s.length; h++) d = f(i, s[h], c), d !== null && (a = o(d, a, h), u === null ? l = d : u.sibling = d, u = d);
				return L && Ea(i, h), l;
			}
			for (d = r(i, d); h < s.length; h++) g = m(d, i, h, s[h], c), g !== null && (e && g.alternate !== null && d.delete(g.key === null ? h : g.key), a = o(g, a, h), u === null ? l = g : u.sibling = g, u = g);
			return e && d.forEach(function(e) {
				return t(i, e);
			}), L && Ea(i, h), l;
		}
		function g(a, s, c, l) {
			var u = de(c);
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
			if (v.done) return n(a, h), L && Ea(a, g), u;
			if (h === null) {
				for (; !v.done; g++, v = c.next()) v = f(a, v.value, l), v !== null && (s = o(v, s, g), d === null ? u = v : d.sibling = v, d = v);
				return L && Ea(a, g), u;
			}
			for (h = r(a, h); !v.done; g++, v = c.next()) v = m(h, a, g, v.value, l), v !== null && (e && v.alternate !== null && h.delete(v.key === null ? g : v.key), s = o(v, s, g), d === null ? u = v : d.sibling = v, d = v);
			return e && h.forEach(function(e) {
				return t(a, e);
			}), L && Ea(a, g), u;
		}
		function _(e, r, i, o) {
			if (typeof i == "object" && i && i.type === re && i.key === null && (i = i.props.children), typeof i == "object" && i) {
				switch (i.$$typeof) {
					case te:
						a: {
							for (var c = i.key, l = r; l !== null;) {
								if (l.key === c) {
									if (c = i.type, c === re) {
										if (l.tag === 7) {
											n(e, l.sibling), r = a(l, i.props.children), r.return = e, e = r;
											break a;
										}
									} else if (l.elementType === c || typeof c == "object" && c && c.$$typeof === ce && Ga(c) === l.type) {
										n(e, l.sibling), r = a(l, i.props), r.ref = Ua(e, l, i), r.return = e, e = r;
										break a;
									}
									n(e, l);
									break;
								}
								t(e, l), l = l.sibling;
							}
							i.type === re ? (r = Ql(i.props.children, e.mode, o, i.key), r.return = e, e = r) : (o = Zl(i.type, i.key, i.props, null, e.mode, o), o.ref = Ua(e, r, i), o.return = e, e = o);
						}
						return s(e);
					case ne:
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
					case ce: return l = i._init, _(e, r, l(i._payload), o);
				}
				if (je(i)) return h(e, r, i, o);
				if (de(i)) return g(e, r, i, o);
				Wa(e, i);
			}
			return typeof i == "string" && i !== "" || typeof i == "number" ? (i = "" + i, r !== null && r.tag === 6 ? (n(e, r.sibling), r = a(r, i), r.return = e, e = r) : (n(e, r), r = eu(i, e.mode, o), r.return = e, e = r), s(e)) : n(e, r);
		}
		return _;
	}
	var qa = Ka(!0), Ja = Ka(!1), Ya = ea(null), Xa = null, Za = null, Qa = null;
	function $a() {
		Qa = Za = Xa = null;
	}
	function eo(e) {
		var t = Ya.current;
		P(Ya), e._currentValue = t;
	}
	function to(e, t, n) {
		for (; e !== null;) {
			var r = e.alternate;
			if ((e.childLanes & t) === t ? r !== null && (r.childLanes & t) !== t && (r.childLanes |= t) : (e.childLanes |= t, r !== null && (r.childLanes |= t)), e === n) break;
			e = e.return;
		}
	}
	function no(e, t) {
		Xa = e, Qa = Za = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (Vs = !0), e.firstContext = null);
	}
	function ro(e) {
		var t = e._currentValue;
		if (Qa !== e) {
			if (e = {
				context: e,
				memoizedValue: t,
				next: null
			}, Za === null) {
				if (Xa === null) throw Error(i(308));
				Za = e, Xa.dependencies = {
					lanes: 0,
					firstContext: e
				};
			} else Za = Za.next = e;
		}
		return t;
	}
	var io = null;
	function ao(e) {
		io === null ? io = [e] : io.push(e);
	}
	function oo(e, t, n, r) {
		var i = t.interleaved;
		return i === null ? (n.next = n, ao(t)) : (n.next = i.next, i.next = n), t.interleaved = n, so(e, r);
	}
	function so(e, t) {
		e.lanes |= t;
		var n = e.alternate;
		for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
		return n.tag === 3 ? n.stateNode : null;
	}
	var co = !1;
	function lo(e) {
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
	function uo(e, t) {
		e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
			baseState: e.baseState,
			firstBaseUpdate: e.firstBaseUpdate,
			lastBaseUpdate: e.lastBaseUpdate,
			shared: e.shared,
			effects: e.effects
		});
	}
	function fo(e, t) {
		return {
			eventTime: e,
			lane: t,
			tag: 0,
			payload: null,
			callback: null,
			next: null
		};
	}
	function po(e, t, n) {
		var r = e.updateQueue;
		if (r === null) return null;
		if (r = r.shared, q & 2) {
			var i = r.pending;
			return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, so(e, n);
		}
		return i = r.interleaved, i === null ? (t.next = t, ao(r)) : (t.next = i.next, i.next = t), r.interleaved = t, so(e, n);
	}
	function mo(e, t, n) {
		if (t = t.updateQueue, t !== null && (t = t.shared, n & 4194240)) {
			var r = t.lanes;
			r &= e.pendingLanes, n |= r, t.lanes = n, Xt(e, n);
		}
	}
	function ho(e, t) {
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
	function go(e, t, n, r) {
		var i = e.updateQueue;
		co = !1;
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
								d = D({}, d, f);
								break a;
							case 2: co = !0;
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
	function _o(e, t, n) {
		if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
			var r = e[t], a = r.callback;
			if (a !== null) {
				if (r.callback = null, r = n, typeof a != "function") throw Error(i(191, a));
				a.call(r);
			}
		}
	}
	var vo = {}, yo = ea(vo), bo = ea(vo), xo = ea(vo);
	function So(e) {
		if (e === vo) throw Error(i(174));
		return e;
	}
	function Co(e, t) {
		switch (F(xo, t), F(bo, e), F(yo, vo), e = t.nodeType, e) {
			case 9:
			case 11:
				t = (t = t.documentElement) ? t.namespaceURI : Le(null, "");
				break;
			default: e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Le(t, e);
		}
		P(yo), F(yo, t);
	}
	function wo() {
		P(yo), P(bo), P(xo);
	}
	function To(e) {
		So(xo.current);
		var t = So(yo.current), n = Le(t, e.type);
		t !== n && (F(bo, e), F(yo, n));
	}
	function Eo(e) {
		bo.current === e && (P(yo), P(bo));
	}
	var R = ea(0);
	function Do(e) {
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
	var Oo = [];
	function ko() {
		for (var e = 0; e < Oo.length; e++) Oo[e]._workInProgressVersionPrimary = null;
		Oo.length = 0;
	}
	var Ao = S.ReactCurrentDispatcher, jo = S.ReactCurrentBatchConfig, Mo = 0, z = null, B = null, V = null, No = !1, Po = !1, Fo = 0, Io = 0;
	function H() {
		throw Error(i(321));
	}
	function Lo(e, t) {
		if (t === null) return !1;
		for (var n = 0; n < t.length && n < e.length; n++) if (!Rr(e[n], t[n])) return !1;
		return !0;
	}
	function Ro(e, t, n, r, a, o) {
		if (Mo = o, z = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Ao.current = e === null || e.memoizedState === null ? xs : Ss, e = n(r, a), Po) {
			o = 0;
			do {
				if (Po = !1, Fo = 0, 25 <= o) throw Error(i(301));
				o += 1, V = B = null, t.updateQueue = null, Ao.current = Cs, e = n(r, a);
			} while (Po);
		}
		if (Ao.current = bs, t = B !== null && B.next !== null, Mo = 0, V = B = z = null, No = !1, t) throw Error(i(300));
		return e;
	}
	function zo() {
		var e = Fo !== 0;
		return Fo = 0, e;
	}
	function Bo() {
		var e = {
			memoizedState: null,
			baseState: null,
			baseQueue: null,
			queue: null,
			next: null
		};
		return V === null ? z.memoizedState = V = e : V = V.next = e, V;
	}
	function Vo() {
		if (B === null) {
			var e = z.alternate;
			e = e === null ? null : e.memoizedState;
		} else e = B.next;
		var t = V === null ? z.memoizedState : V.next;
		if (t !== null) V = t, B = e;
		else {
			if (e === null) throw Error(i(310));
			B = e, e = {
				memoizedState: B.memoizedState,
				baseState: B.baseState,
				baseQueue: B.baseQueue,
				queue: B.queue,
				next: null
			}, V === null ? z.memoizedState = V = e : V = V.next = e;
		}
		return V;
	}
	function Ho(e, t) {
		return typeof t == "function" ? t(e) : t;
	}
	function Uo(e) {
		var t = Vo(), n = t.queue;
		if (n === null) throw Error(i(311));
		n.lastRenderedReducer = e;
		var r = B, a = r.baseQueue, o = n.pending;
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
				if ((Mo & d) === d) l !== null && (l = l.next = {
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
					l === null ? (c = l = f, s = r) : l = l.next = f, z.lanes |= d, Xc |= d;
				}
				u = u.next;
			} while (u !== null && u !== o);
			l === null ? s = r : l.next = c, Rr(r, t.memoizedState) || (Vs = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = l, n.lastRenderedState = r;
		}
		if (e = n.interleaved, e !== null) {
			a = e;
			do
				o = a.lane, z.lanes |= o, Xc |= o, a = a.next;
			while (a !== e);
		} else a === null && (n.lanes = 0);
		return [t.memoizedState, n.dispatch];
	}
	function Wo(e) {
		var t = Vo(), n = t.queue;
		if (n === null) throw Error(i(311));
		n.lastRenderedReducer = e;
		var r = n.dispatch, a = n.pending, o = t.memoizedState;
		if (a !== null) {
			n.pending = null;
			var s = a = a.next;
			do
				o = e(o, s.action), s = s.next;
			while (s !== a);
			Rr(o, t.memoizedState) || (Vs = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
		}
		return [o, r];
	}
	function Go() {}
	function Ko(e, t) {
		var n = z, r = Vo(), a = t(), o = !Rr(r.memoizedState, a);
		if (o && (r.memoizedState = a, Vs = !0), r = r.queue, is(Yo.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || V !== null && V.memoizedState.tag & 1) {
			if (n.flags |= 2048, $o(9, Jo.bind(null, n, r, a, t), void 0, null), J === null) throw Error(i(349));
			Mo & 30 || qo(n, t, a);
		}
		return a;
	}
	function qo(e, t, n) {
		e.flags |= 16384, e = {
			getSnapshot: t,
			value: n
		}, t = z.updateQueue, t === null ? (t = {
			lastEffect: null,
			stores: null
		}, z.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
	}
	function Jo(e, t, n, r) {
		t.value = n, t.getSnapshot = r, Xo(t) && Zo(e);
	}
	function Yo(e, t, n) {
		return n(function() {
			Xo(t) && Zo(e);
		});
	}
	function Xo(e) {
		var t = e.getSnapshot;
		e = e.value;
		try {
			var n = t();
			return !Rr(e, n);
		} catch {
			return !0;
		}
	}
	function Zo(e) {
		var t = so(e, 1);
		t !== null && gl(t, e, 1, -1);
	}
	function Qo(e) {
		var t = Bo();
		return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
			pending: null,
			interleaved: null,
			lanes: 0,
			dispatch: null,
			lastRenderedReducer: Ho,
			lastRenderedState: e
		}, t.queue = e, e = e.dispatch = gs.bind(null, z, e), [t.memoizedState, e];
	}
	function $o(e, t, n, r) {
		return e = {
			tag: e,
			create: t,
			destroy: n,
			deps: r,
			next: null
		}, t = z.updateQueue, t === null ? (t = {
			lastEffect: null,
			stores: null
		}, z.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
	}
	function es() {
		return Vo().memoizedState;
	}
	function ts(e, t, n, r) {
		var i = Bo();
		z.flags |= e, i.memoizedState = $o(1 | t, n, void 0, r === void 0 ? null : r);
	}
	function ns(e, t, n, r) {
		var i = Vo();
		r = r === void 0 ? null : r;
		var a = void 0;
		if (B !== null) {
			var o = B.memoizedState;
			if (a = o.destroy, r !== null && Lo(r, o.deps)) {
				i.memoizedState = $o(t, n, a, r);
				return;
			}
		}
		z.flags |= e, i.memoizedState = $o(1 | t, n, a, r);
	}
	function rs(e, t) {
		return ts(8390656, 8, e, t);
	}
	function is(e, t) {
		return ns(2048, 8, e, t);
	}
	function as(e, t) {
		return ns(4, 2, e, t);
	}
	function os(e, t) {
		return ns(4, 4, e, t);
	}
	function ss(e, t) {
		if (typeof t == "function") return e = e(), t(e), function() {
			t(null);
		};
		if (t != null) return e = e(), t.current = e, function() {
			t.current = null;
		};
	}
	function cs(e, t, n) {
		return n = n == null ? null : n.concat([e]), ns(4, 4, ss.bind(null, t, e), n);
	}
	function ls() {}
	function us(e, t) {
		var n = Vo();
		t = t === void 0 ? null : t;
		var r = n.memoizedState;
		return r !== null && t !== null && Lo(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
	}
	function ds(e, t) {
		var n = Vo();
		t = t === void 0 ? null : t;
		var r = n.memoizedState;
		return r !== null && t !== null && Lo(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
	}
	function fs(e, t, n) {
		return Mo & 21 ? (Rr(n, t) || (n = Kt(), z.lanes |= n, Xc |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Vs = !0), e.memoizedState = n);
	}
	function ps(e, t) {
		var n = j;
		j = n !== 0 && 4 > n ? n : 4, e(!0);
		var r = jo.transition;
		jo.transition = {};
		try {
			e(!1), t();
		} finally {
			j = n, jo.transition = r;
		}
	}
	function ms() {
		return Vo().memoizedState;
	}
	function hs(e, t, n) {
		var r = hl(e);
		if (n = {
			lane: r,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null
		}, _s(e)) vs(t, n);
		else if (n = oo(e, t, n, r), n !== null) {
			var i = ml();
			gl(n, e, r, i), ys(n, t, r);
		}
	}
	function gs(e, t, n) {
		var r = hl(e), i = {
			lane: r,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null
		};
		if (_s(e)) vs(t, i);
		else {
			var a = e.alternate;
			if (e.lanes === 0 && (a === null || a.lanes === 0) && (a = t.lastRenderedReducer, a !== null)) try {
				var o = t.lastRenderedState, s = a(o, n);
				if (i.hasEagerState = !0, i.eagerState = s, Rr(s, o)) {
					var c = t.interleaved;
					c === null ? (i.next = i, ao(t)) : (i.next = c.next, c.next = i), t.interleaved = i;
					return;
				}
			} catch {}
			n = oo(e, t, i, r), n !== null && (i = ml(), gl(n, e, r, i), ys(n, t, r));
		}
	}
	function _s(e) {
		var t = e.alternate;
		return e === z || t !== null && t === z;
	}
	function vs(e, t) {
		Po = No = !0;
		var n = e.pending;
		n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
	}
	function ys(e, t, n) {
		if (n & 4194240) {
			var r = t.lanes;
			r &= e.pendingLanes, n |= r, t.lanes = n, Xt(e, n);
		}
	}
	var bs = {
		readContext: ro,
		useCallback: H,
		useContext: H,
		useEffect: H,
		useImperativeHandle: H,
		useInsertionEffect: H,
		useLayoutEffect: H,
		useMemo: H,
		useReducer: H,
		useRef: H,
		useState: H,
		useDebugValue: H,
		useDeferredValue: H,
		useTransition: H,
		useMutableSource: H,
		useSyncExternalStore: H,
		useId: H,
		unstable_isNewReconciler: !1
	}, xs = {
		readContext: ro,
		useCallback: function(e, t) {
			return Bo().memoizedState = [e, t === void 0 ? null : t], e;
		},
		useContext: ro,
		useEffect: rs,
		useImperativeHandle: function(e, t, n) {
			return n = n == null ? null : n.concat([e]), ts(4194308, 4, ss.bind(null, t, e), n);
		},
		useLayoutEffect: function(e, t) {
			return ts(4194308, 4, e, t);
		},
		useInsertionEffect: function(e, t) {
			return ts(4, 2, e, t);
		},
		useMemo: function(e, t) {
			var n = Bo();
			return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
		},
		useReducer: function(e, t, n) {
			var r = Bo();
			return t = n === void 0 ? t : n(t), r.memoizedState = r.baseState = t, e = {
				pending: null,
				interleaved: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: e,
				lastRenderedState: t
			}, r.queue = e, e = e.dispatch = hs.bind(null, z, e), [r.memoizedState, e];
		},
		useRef: function(e) {
			var t = Bo();
			return e = { current: e }, t.memoizedState = e;
		},
		useState: Qo,
		useDebugValue: ls,
		useDeferredValue: function(e) {
			return Bo().memoizedState = e;
		},
		useTransition: function() {
			var e = Qo(!1), t = e[0];
			return e = ps.bind(null, e[1]), Bo().memoizedState = e, [t, e];
		},
		useMutableSource: function() {},
		useSyncExternalStore: function(e, t, n) {
			var r = z, a = Bo();
			if (L) {
				if (n === void 0) throw Error(i(407));
				n = n();
			} else {
				if (n = t(), J === null) throw Error(i(349));
				Mo & 30 || qo(r, t, n);
			}
			a.memoizedState = n;
			var o = {
				value: n,
				getSnapshot: t
			};
			return a.queue = o, rs(Yo.bind(null, r, o, e), [e]), r.flags |= 2048, $o(9, Jo.bind(null, r, o, n, t), void 0, null), n;
		},
		useId: function() {
			var e = Bo(), t = J.identifierPrefix;
			if (L) {
				var n = Ta, r = wa;
				n = (r & ~(1 << 32 - Ft(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Fo++, 0 < n && (t += "H" + n.toString(32)), t += ":";
			} else n = Io++, t = ":" + t + "r" + n.toString(32) + ":";
			return e.memoizedState = t;
		},
		unstable_isNewReconciler: !1
	}, Ss = {
		readContext: ro,
		useCallback: us,
		useContext: ro,
		useEffect: is,
		useImperativeHandle: cs,
		useInsertionEffect: as,
		useLayoutEffect: os,
		useMemo: ds,
		useReducer: Uo,
		useRef: es,
		useState: function() {
			return Uo(Ho);
		},
		useDebugValue: ls,
		useDeferredValue: function(e) {
			return fs(Vo(), B.memoizedState, e);
		},
		useTransition: function() {
			return [Uo(Ho)[0], Vo().memoizedState];
		},
		useMutableSource: Go,
		useSyncExternalStore: Ko,
		useId: ms,
		unstable_isNewReconciler: !1
	}, Cs = {
		readContext: ro,
		useCallback: us,
		useContext: ro,
		useEffect: is,
		useImperativeHandle: cs,
		useInsertionEffect: as,
		useLayoutEffect: os,
		useMemo: ds,
		useReducer: Wo,
		useRef: es,
		useState: function() {
			return Wo(Ho);
		},
		useDebugValue: ls,
		useDeferredValue: function(e) {
			var t = Vo();
			return B === null ? t.memoizedState = e : fs(t, B.memoizedState, e);
		},
		useTransition: function() {
			return [Wo(Ho)[0], Vo().memoizedState];
		},
		useMutableSource: Go,
		useSyncExternalStore: Ko,
		useId: ms,
		unstable_isNewReconciler: !1
	};
	function ws(e, t) {
		if (e && e.defaultProps) {
			for (var n in t = D({}, t), e = e.defaultProps, e) t[n] === void 0 && (t[n] = e[n]);
			return t;
		}
		return t;
	}
	function Ts(e, t, n, r) {
		t = e.memoizedState, n = n(r, t), n = n == null ? t : D({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
	}
	var Es = {
		isMounted: function(e) {
			return (e = e._reactInternals) ? gt(e) === e : !1;
		},
		enqueueSetState: function(e, t, n) {
			e = e._reactInternals;
			var r = ml(), i = hl(e), a = fo(r, i);
			a.payload = t, n != null && (a.callback = n), t = po(e, a, i), t !== null && (gl(t, e, i, r), mo(t, e, i));
		},
		enqueueReplaceState: function(e, t, n) {
			e = e._reactInternals;
			var r = ml(), i = hl(e), a = fo(r, i);
			a.tag = 1, a.payload = t, n != null && (a.callback = n), t = po(e, a, i), t !== null && (gl(t, e, i, r), mo(t, e, i));
		},
		enqueueForceUpdate: function(e, t) {
			e = e._reactInternals;
			var n = ml(), r = hl(e), i = fo(n, r);
			i.tag = 2, t != null && (i.callback = t), t = po(e, i, r), t !== null && (gl(t, e, r, n), mo(t, e, r));
		}
	};
	function Ds(e, t, n, r, i, a, o) {
		return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, a, o) : t.prototype && t.prototype.isPureReactComponent ? !zr(n, r) || !zr(i, a) : !0;
	}
	function Os(e, t, n) {
		var r = !1, i = ta, a = t.contextType;
		return typeof a == "object" && a ? a = ro(a) : (i = aa(t) ? ra : I.current, r = t.contextTypes, a = (r = r != null) ? ia(e, i) : ta), t = new t(n, a), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Es, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = a), t;
	}
	function ks(e, t, n, r) {
		e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Es.enqueueReplaceState(t, t.state, null);
	}
	function As(e, t, n, r) {
		var i = e.stateNode;
		i.props = n, i.state = e.memoizedState, i.refs = {}, lo(e);
		var a = t.contextType;
		typeof a == "object" && a ? i.context = ro(a) : (a = aa(t) ? ra : I.current, i.context = ia(e, a)), i.state = e.memoizedState, a = t.getDerivedStateFromProps, typeof a == "function" && (Ts(e, t, a, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && Es.enqueueReplaceState(i, i.state, null), go(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308);
	}
	function js(e, t) {
		try {
			var n = "", r = t;
			do
				n += ge(r), r = r.return;
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
	function Ms(e, t, n) {
		return {
			value: e,
			source: null,
			stack: n ?? null,
			digest: t ?? null
		};
	}
	function Ns(e, t) {
		try {
			console.error(t.value);
		} catch (e) {
			setTimeout(function() {
				throw e;
			});
		}
	}
	var Ps = typeof WeakMap == "function" ? WeakMap : Map;
	function Fs(e, t, n) {
		n = fo(-1, n), n.tag = 3, n.payload = { element: null };
		var r = t.value;
		return n.callback = function() {
			il || (il = !0, al = r), Ns(e, t);
		}, n;
	}
	function Is(e, t, n) {
		n = fo(-1, n), n.tag = 3;
		var r = e.type.getDerivedStateFromError;
		if (typeof r == "function") {
			var i = t.value;
			n.payload = function() {
				return r(i);
			}, n.callback = function() {
				Ns(e, t);
			};
		}
		var a = e.stateNode;
		return a !== null && typeof a.componentDidCatch == "function" && (n.callback = function() {
			Ns(e, t), typeof r != "function" && (ol === null ? ol = /* @__PURE__ */ new Set([this]) : ol.add(this));
			var n = t.stack;
			this.componentDidCatch(t.value, { componentStack: n === null ? "" : n });
		}), n;
	}
	function Ls(e, t, n) {
		var r = e.pingCache;
		if (r === null) {
			r = e.pingCache = new Ps();
			var i = /* @__PURE__ */ new Set();
			r.set(t, i);
		} else i = r.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), r.set(t, i));
		i.has(n) || (i.add(n), e = Bl.bind(null, e, t, n), t.then(e, e));
	}
	function Rs(e) {
		do {
			var t;
			if ((t = e.tag === 13) && (t = e.memoizedState, t = t === null || t.dehydrated !== null), t) return e;
			e = e.return;
		} while (e !== null);
		return null;
	}
	function zs(e, t, n, r, i) {
		return e.mode & 1 ? (e.flags |= 65536, e.lanes = i, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = fo(-1, 1), t.tag = 2, po(n, t, 1))), n.lanes |= 1), e);
	}
	var Bs = S.ReactCurrentOwner, Vs = !1;
	function Hs(e, t, n, r) {
		t.child = e === null ? Ja(t, null, n, r) : qa(t, e.child, n, r);
	}
	function Us(e, t, n, r, i) {
		n = n.render;
		var a = t.ref;
		return no(t, i), r = Ro(e, t, n, r, a, i), n = zo(), e !== null && !Vs ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, lc(e, t, i)) : (L && n && Oa(t), t.flags |= 1, Hs(e, t, r, i), t.child);
	}
	function Ws(e, t, n, r, i) {
		if (e === null) {
			var a = n.type;
			return typeof a == "function" && !Jl(a) && a.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = a, Gs(e, t, a, r, i)) : (e = Zl(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
		}
		if (a = e.child, (e.lanes & i) === 0) {
			var o = a.memoizedProps;
			if (n = n.compare, n = n === null ? zr : n, n(o, r) && e.ref === t.ref) return lc(e, t, i);
		}
		return t.flags |= 1, e = Xl(a, r), e.ref = t.ref, e.return = t, t.child = e;
	}
	function Gs(e, t, n, r, i) {
		if (e !== null) {
			var a = e.memoizedProps;
			if (zr(a, r) && e.ref === t.ref) {
				if (Vs = !1, t.pendingProps = r = a, (e.lanes & i) !== 0) e.flags & 131072 && (Vs = !0);
				else return t.lanes = e.lanes, lc(e, t, i);
			}
		}
		return Js(e, t, n, r, i);
	}
	function Ks(e, t, n) {
		var r = t.pendingProps, i = r.children, a = e === null ? null : e.memoizedState;
		if (r.mode === "hidden") {
			if (!(t.mode & 1)) t.memoizedState = {
				baseLanes: 0,
				cachePool: null,
				transitions: null
			}, F(Jc, qc), qc |= n;
			else {
				if (!(n & 1073741824)) return e = a === null ? n : a.baseLanes | n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
					baseLanes: e,
					cachePool: null,
					transitions: null
				}, t.updateQueue = null, F(Jc, qc), qc |= e, null;
				t.memoizedState = {
					baseLanes: 0,
					cachePool: null,
					transitions: null
				}, r = a === null ? n : a.baseLanes, F(Jc, qc), qc |= r;
			}
		} else a === null ? r = n : (r = a.baseLanes | n, t.memoizedState = null), F(Jc, qc), qc |= r;
		return Hs(e, t, i, n), t.child;
	}
	function qs(e, t) {
		var n = t.ref;
		(e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
	}
	function Js(e, t, n, r, i) {
		var a = aa(n) ? ra : I.current;
		return a = ia(t, a), no(t, i), n = Ro(e, t, n, r, a, i), r = zo(), e !== null && !Vs ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, lc(e, t, i)) : (L && r && Oa(t), t.flags |= 1, Hs(e, t, n, i), t.child);
	}
	function Ys(e, t, n, r, i) {
		if (aa(n)) {
			var a = !0;
			la(t);
		} else a = !1;
		if (no(t, i), t.stateNode === null) cc(e, t), Os(t, n, r), As(t, n, r, i), r = !0;
		else if (e === null) {
			var o = t.stateNode, s = t.memoizedProps;
			o.props = s;
			var c = o.context, l = n.contextType;
			typeof l == "object" && l ? l = ro(l) : (l = aa(n) ? ra : I.current, l = ia(t, l));
			var u = n.getDerivedStateFromProps, d = typeof u == "function" || typeof o.getSnapshotBeforeUpdate == "function";
			d || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (s !== r || c !== l) && ks(t, o, r, l), co = !1;
			var f = t.memoizedState;
			o.state = f, go(t, r, o, i), c = t.memoizedState, s !== r || f !== c || na.current || co ? (typeof u == "function" && (Ts(t, n, u, r), c = t.memoizedState), (s = co || Ds(t, n, s, r, f, c, l)) ? (d || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = c), o.props = r, o.state = c, o.context = l, r = s) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
		} else {
			o = t.stateNode, uo(e, t), s = t.memoizedProps, l = t.type === t.elementType ? s : ws(t.type, s), o.props = l, d = t.pendingProps, f = o.context, c = n.contextType, typeof c == "object" && c ? c = ro(c) : (c = aa(n) ? ra : I.current, c = ia(t, c));
			var p = n.getDerivedStateFromProps;
			(u = typeof p == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (s !== d || f !== c) && ks(t, o, r, c), co = !1, f = t.memoizedState, o.state = f, go(t, r, o, i);
			var m = t.memoizedState;
			s !== d || f !== m || na.current || co ? (typeof p == "function" && (Ts(t, n, p, r), m = t.memoizedState), (l = co || Ds(t, n, l, r, f, m, c) || !1) ? (u || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, m, c), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, m, c)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = m), o.props = r, o.state = m, o.context = c, r = l) : (typeof o.componentDidUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1);
		}
		return Xs(e, t, n, r, a, i);
	}
	function Xs(e, t, n, r, i, a) {
		qs(e, t);
		var o = !!(t.flags & 128);
		if (!r && !o) return i && ua(t, n, !1), lc(e, t, a);
		r = t.stateNode, Bs.current = t;
		var s = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
		return t.flags |= 1, e !== null && o ? (t.child = qa(t, e.child, null, a), t.child = qa(t, null, s, a)) : Hs(e, t, s, a), t.memoizedState = r.state, i && ua(t, n, !0), t.child;
	}
	function Zs(e) {
		var t = e.stateNode;
		t.pendingContext ? sa(e, t.pendingContext, t.pendingContext !== t.context) : t.context && sa(e, t.context, !1), Co(e, t.containerInfo);
	}
	function Qs(e, t, n, r, i) {
		return Ba(), Va(i), t.flags |= 256, Hs(e, t, n, r), t.child;
	}
	var $s = {
		dehydrated: null,
		treeContext: null,
		retryLane: 0
	};
	function ec(e) {
		return {
			baseLanes: e,
			cachePool: null,
			transitions: null
		};
	}
	function tc(e, t, n) {
		var r = t.pendingProps, i = R.current, a = !1, o = !!(t.flags & 128), s;
		if ((s = o) || (s = e !== null && e.memoizedState === null ? !1 : !!(i & 2)), s ? (a = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), F(R, i & 1), e === null) return Ia(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.lanes = t.mode & 1 ? e.data === "$!" ? 8 : 1073741824 : 1, null) : (o = r.children, e = r.fallback, a ? (r = t.mode, a = t.child, o = {
			mode: "hidden",
			children: o
		}, !(r & 1) && a !== null ? (a.childLanes = 0, a.pendingProps = o) : a = $l(o, r, 0, null), e = Ql(e, r, n, null), a.return = t, e.return = t, a.sibling = e, t.child = a, t.child.memoizedState = ec(n), t.memoizedState = $s, e) : nc(t, o));
		if (i = e.memoizedState, i !== null && (s = i.dehydrated, s !== null)) return ic(e, t, o, r, s, i, n);
		if (a) {
			a = r.fallback, o = t.mode, i = e.child, s = i.sibling;
			var c = {
				mode: "hidden",
				children: r.children
			};
			return !(o & 1) && t.child !== i ? (r = t.child, r.childLanes = 0, r.pendingProps = c, t.deletions = null) : (r = Xl(i, c), r.subtreeFlags = i.subtreeFlags & 14680064), s === null ? (a = Ql(a, o, n, null), a.flags |= 2) : a = Xl(s, a), a.return = t, r.return = t, r.sibling = a, t.child = r, r = a, a = t.child, o = e.child.memoizedState, o = o === null ? ec(n) : {
				baseLanes: o.baseLanes | n,
				cachePool: null,
				transitions: o.transitions
			}, a.memoizedState = o, a.childLanes = e.childLanes & ~n, t.memoizedState = $s, r;
		}
		return a = e.child, e = a.sibling, r = Xl(a, {
			mode: "visible",
			children: r.children
		}), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
	}
	function nc(e, t) {
		return t = $l({
			mode: "visible",
			children: t
		}, e.mode, 0, null), t.return = e, e.child = t;
	}
	function rc(e, t, n, r) {
		return r !== null && Va(r), qa(t, e.child, null, n), e = nc(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
	}
	function ic(e, t, n, r, a, o, s) {
		if (n) return t.flags & 256 ? (t.flags &= -257, r = Ms(Error(i(422))), rc(e, t, s, r)) : t.memoizedState === null ? (o = r.fallback, a = t.mode, r = $l({
			mode: "visible",
			children: r.children
		}, a, 0, null), o = Ql(o, a, s, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && qa(t, e.child, null, s), t.child.memoizedState = ec(s), t.memoizedState = $s, o) : (t.child = e.child, t.flags |= 128, null);
		if (!(t.mode & 1)) return rc(e, t, s, null);
		if (a.data === "$!") {
			if (r = a.nextSibling && a.nextSibling.dataset, r) var c = r.dgst;
			return r = c, o = Error(i(419)), r = Ms(o, r, void 0), rc(e, t, s, r);
		}
		if (c = (s & e.childLanes) !== 0, Vs || c) {
			if (r = J, r !== null) {
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
				a = (a & (r.suspendedLanes | s)) === 0 ? a : 0, a !== 0 && a !== o.retryLane && (o.retryLane = a, so(e, a), gl(r, e, a, -1));
			}
			return Al(), r = Ms(Error(i(421))), rc(e, t, s, r);
		}
		return a.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Hl.bind(null, e), a._reactRetry = t, null) : (e = o.treeContext, ja = zi(a.nextSibling), Aa = t, L = !0, Ma = null, e !== null && (xa[Sa++] = wa, xa[Sa++] = Ta, xa[Sa++] = Ca, wa = e.id, Ta = e.overflow, Ca = t), t = nc(t, r.children), t.flags |= 4096, t);
	}
	function ac(e, t, n) {
		e.lanes |= t;
		var r = e.alternate;
		r !== null && (r.lanes |= t), to(e.return, t, n);
	}
	function oc(e, t, n, r, i) {
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
	function sc(e, t, n) {
		var r = t.pendingProps, i = r.revealOrder, a = r.tail;
		if (Hs(e, t, r.children, n), r = R.current, r & 2) r = r & 1 | 2, t.flags |= 128;
		else {
			if (e !== null && e.flags & 128) a: for (e = t.child; e !== null;) {
				if (e.tag === 13) e.memoizedState !== null && ac(e, n, t);
				else if (e.tag === 19) ac(e, n, t);
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
		if (F(R, r), !(t.mode & 1)) t.memoizedState = null;
		else switch (i) {
			case "forwards":
				for (n = t.child, i = null; n !== null;) e = n.alternate, e !== null && Do(e) === null && (i = n), n = n.sibling;
				n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), oc(t, !1, i, n, a);
				break;
			case "backwards":
				for (n = null, i = t.child, t.child = null; i !== null;) {
					if (e = i.alternate, e !== null && Do(e) === null) {
						t.child = i;
						break;
					}
					e = i.sibling, i.sibling = n, n = i, i = e;
				}
				oc(t, !0, n, null, a);
				break;
			case "together":
				oc(t, !1, null, null, void 0);
				break;
			default: t.memoizedState = null;
		}
		return t.child;
	}
	function cc(e, t) {
		!(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
	}
	function lc(e, t, n) {
		if (e !== null && (t.dependencies = e.dependencies), Xc |= t.lanes, (n & t.childLanes) === 0) return null;
		if (e !== null && t.child !== e.child) throw Error(i(153));
		if (t.child !== null) {
			for (e = t.child, n = Xl(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = Xl(e, e.pendingProps), n.return = t;
			n.sibling = null;
		}
		return t.child;
	}
	function uc(e, t, n) {
		switch (t.tag) {
			case 3:
				Zs(t), Ba();
				break;
			case 5:
				To(t);
				break;
			case 1:
				aa(t.type) && la(t);
				break;
			case 4:
				Co(t, t.stateNode.containerInfo);
				break;
			case 10:
				var r = t.type._context, i = t.memoizedProps.value;
				F(Ya, r._currentValue), r._currentValue = i;
				break;
			case 13:
				if (r = t.memoizedState, r !== null) return r.dehydrated === null ? (n & t.child.childLanes) === 0 ? (F(R, R.current & 1), e = lc(e, t, n), e === null ? null : e.sibling) : tc(e, t, n) : (F(R, R.current & 1), t.flags |= 128, null);
				F(R, R.current & 1);
				break;
			case 19:
				if (r = (n & t.childLanes) !== 0, e.flags & 128) {
					if (r) return sc(e, t, n);
					t.flags |= 128;
				}
				if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), F(R, R.current), r) break;
				return null;
			case 22:
			case 23: return t.lanes = 0, Ks(e, t, n);
		}
		return lc(e, t, n);
	}
	var dc = function(e, t) {
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
	}, fc = function(e, t, n, r) {
		var i = e.memoizedProps;
		if (i !== r) {
			e = t.stateNode, So(yo.current);
			var a = null;
			switch (n) {
				case "input":
					i = Te(e, i), r = Te(e, r), a = [];
					break;
				case "select":
					i = D({}, i, { value: void 0 }), r = D({}, r, { value: void 0 }), a = [];
					break;
				case "textarea":
					i = Ne(e, i), r = Ne(e, r), a = [];
					break;
				default: typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = ki);
			}
			Ke(n, r);
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
					} else u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, c = c ? c.__html : void 0, l != null && c !== l && (a ||= []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (a ||= []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (s.hasOwnProperty(u) ? (l != null && u === "onScroll" && N("scroll", e), a || c === l || (a = [])) : (a ||= []).push(u, l));
				}
			}
			n && (a ||= []).push("style", n);
			var u = a;
			(t.updateQueue = u) && (t.flags |= 4);
		}
	}, pc = function(e, t, n, r) {
		n !== r && (t.flags |= 4);
	};
	function mc(e, t) {
		if (!L) switch (e.tailMode) {
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
	function U(e) {
		var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
		if (t) for (var i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 14680064, r |= i.flags & 14680064, i.return = e, i = i.sibling;
		else for (i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
		return e.subtreeFlags |= r, e.childLanes = n, t;
	}
	function hc(e, t, n) {
		var r = t.pendingProps;
		switch (ka(t), t.tag) {
			case 2:
			case 16:
			case 15:
			case 0:
			case 11:
			case 7:
			case 8:
			case 12:
			case 9:
			case 14: return U(t), null;
			case 1: return aa(t.type) && oa(), U(t), null;
			case 3: return r = t.stateNode, wo(), P(na), P(I), ko(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Ra(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Ma !== null && (bl(Ma), Ma = null))), U(t), null;
			case 5:
				Eo(t);
				var a = So(xo.current);
				if (n = t.type, e !== null && t.stateNode != null) fc(e, t, n, r, a), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
				else {
					if (!r) {
						if (t.stateNode === null) throw Error(i(166));
						return U(t), null;
					}
					if (e = So(yo.current), Ra(t)) {
						r = t.stateNode, n = t.type;
						var o = t.memoizedProps;
						switch (r[Hi] = t, r[Ui] = o, e = !!(t.mode & 1), n) {
							case "dialog":
								N("cancel", r), N("close", r);
								break;
							case "iframe":
							case "object":
							case "embed":
								N("load", r);
								break;
							case "video":
							case "audio":
								for (a = 0; a < fi.length; a++) N(fi[a], r);
								break;
							case "source":
								N("error", r);
								break;
							case "img":
							case "image":
							case "link":
								N("error", r), N("load", r);
								break;
							case "details":
								N("toggle", r);
								break;
							case "input":
								Ee(r, o), N("invalid", r);
								break;
							case "select":
								r._wrapperState = { wasMultiple: !!o.multiple }, N("invalid", r);
								break;
							case "textarea": Pe(r, o), N("invalid", r);
						}
						for (var c in Ke(n, o), a = null, o) if (o.hasOwnProperty(c)) {
							var l = o[c];
							c === "children" ? typeof l == "string" ? r.textContent !== l && (!0 !== o.suppressHydrationWarning && Oi(r.textContent, l, e), a = ["children", l]) : typeof l == "number" && r.textContent !== "" + l && (!0 !== o.suppressHydrationWarning && Oi(r.textContent, l, e), a = ["children", "" + l]) : s.hasOwnProperty(c) && l != null && c === "onScroll" && N("scroll", r);
						}
						switch (n) {
							case "input":
								Se(r), ke(r, o, !0);
								break;
							case "textarea":
								Se(r), Ie(r);
								break;
							case "select":
							case "option": break;
							default: typeof o.onClick == "function" && (r.onclick = ki);
						}
						r = a, t.updateQueue = r, r !== null && (t.flags |= 4);
					} else {
						c = a.nodeType === 9 ? a : a.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = O(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = c.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = c.createElement(n, { is: r.is }) : (e = c.createElement(n), n === "select" && (c = e, r.multiple ? c.multiple = !0 : r.size && (c.size = r.size))) : e = c.createElementNS(e, n), e[Hi] = t, e[Ui] = r, dc(e, t, !1, !1), t.stateNode = e;
						a: {
							switch (c = qe(n, r), n) {
								case "dialog":
									N("cancel", e), N("close", e), a = r;
									break;
								case "iframe":
								case "object":
								case "embed":
									N("load", e), a = r;
									break;
								case "video":
								case "audio":
									for (a = 0; a < fi.length; a++) N(fi[a], e);
									a = r;
									break;
								case "source":
									N("error", e), a = r;
									break;
								case "img":
								case "image":
								case "link":
									N("error", e), N("load", e), a = r;
									break;
								case "details":
									N("toggle", e), a = r;
									break;
								case "input":
									Ee(e, r), a = Te(e, r), N("invalid", e);
									break;
								case "option":
									a = r;
									break;
								case "select":
									e._wrapperState = { wasMultiple: !!r.multiple }, a = D({}, r, { value: void 0 }), N("invalid", e);
									break;
								case "textarea":
									Pe(e, r), a = Ne(e, r), N("invalid", e);
									break;
								default: a = r;
							}
							for (o in Ke(n, a), l = a, l) if (l.hasOwnProperty(o)) {
								var u = l[o];
								o === "style" ? We(e, u) : o === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, u != null && ze(e, u)) : o === "children" ? typeof u == "string" ? (n !== "textarea" || u !== "") && Be(e, u) : typeof u == "number" && Be(e, "" + u) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (s.hasOwnProperty(o) ? u != null && o === "onScroll" && N("scroll", e) : u != null && ee(e, o, u, c));
							}
							switch (n) {
								case "input":
									Se(e), ke(e, r, !1);
									break;
								case "textarea":
									Se(e), Ie(e);
									break;
								case "option":
									r.value != null && e.setAttribute("value", "" + ye(r.value));
									break;
								case "select":
									e.multiple = !!r.multiple, o = r.value, o == null ? r.defaultValue != null && Me(e, !!r.multiple, r.defaultValue, !0) : Me(e, !!r.multiple, o, !1);
									break;
								default: typeof a.onClick == "function" && (e.onclick = ki);
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
				return U(t), null;
			case 6:
				if (e && t.stateNode != null) pc(e, t, e.memoizedProps, r);
				else {
					if (typeof r != "string" && t.stateNode === null) throw Error(i(166));
					if (n = So(xo.current), So(yo.current), Ra(t)) {
						if (r = t.stateNode, n = t.memoizedProps, r[Hi] = t, (o = r.nodeValue !== n) && (e = Aa, e !== null)) switch (e.tag) {
							case 3:
								Oi(r.nodeValue, n, !!(e.mode & 1));
								break;
							case 5: !0 !== e.memoizedProps.suppressHydrationWarning && Oi(r.nodeValue, n, !!(e.mode & 1));
						}
						o && (t.flags |= 4);
					} else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Hi] = t, t.stateNode = r;
				}
				return U(t), null;
			case 13:
				if (P(R), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
					if (L && ja !== null && t.mode & 1 && !(t.flags & 128)) za(), Ba(), t.flags |= 98560, o = !1;
					else if (o = Ra(t), r !== null && r.dehydrated !== null) {
						if (e === null) {
							if (!o) throw Error(i(318));
							if (o = t.memoizedState, o = o === null ? null : o.dehydrated, !o) throw Error(i(317));
							o[Hi] = t;
						} else Ba(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
						U(t), o = !1;
					} else Ma !== null && (bl(Ma), Ma = null), o = !0;
					if (!o) return t.flags & 65536 ? t : null;
				}
				return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || R.current & 1 ? Z === 0 && (Z = 3) : Al())), t.updateQueue !== null && (t.flags |= 4), U(t), null);
			case 4: return wo(), e === null && vi(t.stateNode.containerInfo), U(t), null;
			case 10: return eo(t.type._context), U(t), null;
			case 17: return aa(t.type) && oa(), U(t), null;
			case 19:
				if (P(R), o = t.memoizedState, o === null) return U(t), null;
				if (r = !!(t.flags & 128), c = o.rendering, c === null) {
					if (r) mc(o, !1);
					else {
						if (Z !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null;) {
							if (c = Do(e), c !== null) {
								for (t.flags |= 128, mc(o, !1), r = c.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;) o = n, e = r, o.flags &= 14680066, c = o.alternate, c === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = c.childLanes, o.lanes = c.lanes, o.child = c.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = c.memoizedProps, o.memoizedState = c.memoizedState, o.updateQueue = c.updateQueue, o.type = c.type, e = c.dependencies, o.dependencies = e === null ? null : {
									lanes: e.lanes,
									firstContext: e.firstContext
								}), n = n.sibling;
								return F(R, R.current & 1 | 2), t.child;
							}
							e = e.sibling;
						}
						o.tail !== null && A() > nl && (t.flags |= 128, r = !0, mc(o, !1), t.lanes = 4194304);
					}
				} else {
					if (!r) {
						if (e = Do(c), e !== null) {
							if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), mc(o, !0), o.tail === null && o.tailMode === "hidden" && !c.alternate && !L) return U(t), null;
						} else 2 * A() - o.renderingStartTime > nl && n !== 1073741824 && (t.flags |= 128, r = !0, mc(o, !1), t.lanes = 4194304);
					}
					o.isBackwards ? (c.sibling = t.child, t.child = c) : (n = o.last, n === null ? t.child = c : n.sibling = c, o.last = c);
				}
				return o.tail === null ? (U(t), null) : (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = A(), t.sibling = null, n = R.current, F(R, r ? n & 1 | 2 : n & 1), t);
			case 22:
			case 23: return El(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? qc & 1073741824 && (U(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : U(t), null;
			case 24: return null;
			case 25: return null;
		}
		throw Error(i(156, t.tag));
	}
	function gc(e, t) {
		switch (ka(t), t.tag) {
			case 1: return aa(t.type) && oa(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 3: return wo(), P(na), P(I), ko(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
			case 5: return Eo(t), null;
			case 13:
				if (P(R), e = t.memoizedState, e !== null && e.dehydrated !== null) {
					if (t.alternate === null) throw Error(i(340));
					Ba();
				}
				return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 19: return P(R), null;
			case 4: return wo(), null;
			case 10: return eo(t.type._context), null;
			case 22:
			case 23: return El(), null;
			case 24: return null;
			default: return null;
		}
	}
	var _c = !1, W = !1, vc = typeof WeakSet == "function" ? WeakSet : Set, G = null;
	function yc(e, t) {
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
	function bc(e, t, n) {
		try {
			n();
		} catch (n) {
			Q(e, t, n);
		}
	}
	var xc = !1;
	function Sc(e, t) {
		if (Ai = Sn, e = Ur(), Wr(e)) {
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
		for (ji = {
			focusedElem: e,
			selectionRange: n
		}, Sn = !1, G = t; G !== null;) if (t = G, e = t.child, t.subtreeFlags & 1028 && e !== null) e.return = t, G = e;
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
							v.__reactInternalSnapshotBeforeUpdate = v.getSnapshotBeforeUpdate(t.elementType === t.type ? g : ws(t.type, g), _);
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
		t !== null && (e.alternate = null, Ec(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Hi], delete t[Ui], delete t[Gi], delete t[Ki], delete t[qi])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
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
		if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = ki));
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
		if (Nt && typeof Nt.onCommitFiberUnmount == "function") try {
			Nt.onCommitFiberUnmount(Mt, n);
		} catch {}
		switch (n.tag) {
			case 5: W || yc(n, t);
			case 6:
				var r = K, i = jc;
				K = null, Mc(e, t, n), K = r, jc = i, K !== null && (jc ? (e = K, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : K.removeChild(n.stateNode));
				break;
			case 18:
				K !== null && (jc ? (e = K, n = n.stateNode, e.nodeType === 8 ? Ri(e.parentNode, n) : e.nodeType === 1 && Ri(e, n), bn(e)) : Ri(K, n.stateNode));
				break;
			case 4:
				r = K, i = jc, K = n.stateNode.containerInfo, jc = !0, Mc(e, t, n), K = r, jc = i;
				break;
			case 0:
			case 11:
			case 14:
			case 15:
				if (!W && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
					i = r = r.next;
					do {
						var a = i, o = a.destroy;
						a = a.tag, o !== void 0 && (a & 2 || a & 4) && bc(n, t, o), i = i.next;
					} while (i !== r);
				}
				Mc(e, t, n);
				break;
			case 1:
				if (!W && (yc(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
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
				n.mode & 1 ? (W = (r = W) || n.memoizedState !== null, Mc(e, t, n), W = r) : Mc(e, t, n);
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
		if (n !== null) for (var r = 0; r < n.length; r++) {
			var a = n[r];
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
				if (K === null) throw Error(i(160));
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
		var n = e.alternate, r = e.flags;
		switch (e.tag) {
			case 0:
			case 11:
			case 14:
			case 15:
				if (Fc(t, e), Lc(e), r & 4) {
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
				Fc(t, e), Lc(e), r & 512 && n !== null && yc(n, n.return);
				break;
			case 5:
				if (Fc(t, e), Lc(e), r & 512 && n !== null && yc(n, n.return), e.flags & 32) {
					var a = e.stateNode;
					try {
						Be(a, "");
					} catch (t) {
						Q(e, e.return, t);
					}
				}
				if (r & 4 && (a = e.stateNode, a != null)) {
					var o = e.memoizedProps, s = n === null ? o : n.memoizedProps, c = e.type, l = e.updateQueue;
					if (e.updateQueue = null, l !== null) try {
						c === "input" && o.type === "radio" && o.name != null && De(a, o), qe(c, s);
						var u = qe(c, o);
						for (s = 0; s < l.length; s += 2) {
							var d = l[s], f = l[s + 1];
							d === "style" ? We(a, f) : d === "dangerouslySetInnerHTML" ? ze(a, f) : d === "children" ? Be(a, f) : ee(a, d, f, u);
						}
						switch (c) {
							case "input":
								Oe(a, o);
								break;
							case "textarea":
								Fe(a, o);
								break;
							case "select":
								var p = a._wrapperState.wasMultiple;
								a._wrapperState.wasMultiple = !!o.multiple;
								var m = o.value;
								m == null ? p !== !!o.multiple && (o.defaultValue == null ? Me(a, !!o.multiple, o.multiple ? [] : "", !1) : Me(a, !!o.multiple, o.defaultValue, !0)) : Me(a, !!o.multiple, m, !1);
						}
						a[Ui] = o;
					} catch (t) {
						Q(e, e.return, t);
					}
				}
				break;
			case 6:
				if (Fc(t, e), Lc(e), r & 4) {
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
				if (Fc(t, e), Lc(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
					bn(t.containerInfo);
				} catch (t) {
					Q(e, e.return, t);
				}
				break;
			case 4:
				Fc(t, e), Lc(e);
				break;
			case 13:
				Fc(t, e), Lc(e), a = e.child, a.flags & 8192 && (o = a.memoizedState !== null, a.stateNode.isHidden = o, !o || a.alternate !== null && a.alternate.memoizedState !== null || (tl = A())), r & 4 && Pc(e);
				break;
			case 22:
				if (d = n !== null && n.memoizedState !== null, e.mode & 1 ? (W = (u = W) || d, Fc(t, e), W = u) : Fc(t, e), Lc(e), r & 8192) {
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
										r = p, n = p.return;
										try {
											t = r, h.props = t.memoizedProps, h.state = t.memoizedState, h.componentWillUnmount();
										} catch (e) {
											Q(r, n, e);
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
									a = f.stateNode, u ? (o = a.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (c = f.stateNode, l = f.memoizedProps.style, s = l != null && l.hasOwnProperty("display") ? l.display : null, c.style.display = Ue("display", s));
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
				Fc(t, e), Lc(e), r & 4 && Pc(e);
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
						r.flags & 32 && (Be(a, ""), r.flags &= -33), Ac(e, Oc(e), a);
						break;
					case 3:
					case 4:
						var o = r.stateNode.containerInfo;
						kc(e, Oc(e), o);
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
	function Rc(e, t, n) {
		G = e, zc(e, t, n);
	}
	function zc(e, t, n) {
		for (var r = !!(e.mode & 1); G !== null;) {
			var i = G, a = i.child;
			if (i.tag === 22 && r) {
				var o = i.memoizedState !== null || _c;
				if (!o) {
					var s = i.alternate, c = s !== null && s.memoizedState !== null || W;
					s = _c;
					var l = W;
					if (_c = o, (W = c) && !l) for (G = i; G !== null;) o = G, c = o.child, o.tag === 22 && o.memoizedState !== null || c === null ? Hc(i) : (c.return = o, G = c);
					for (; a !== null;) G = a, zc(a, t, n), a = a.sibling;
					G = i, _c = s, W = l;
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
							W || wc(5, t);
							break;
						case 1:
							var r = t.stateNode;
							if (t.flags & 4 && !W) {
								if (n === null) r.componentDidMount();
								else {
									var a = t.elementType === t.type ? n.memoizedProps : ws(t.type, n.memoizedProps);
									r.componentDidUpdate(a, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
								}
							}
							var o = t.updateQueue;
							o !== null && _o(t, o, r);
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
								_o(t, s, n);
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
										f !== null && bn(f);
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
					W || t.flags & 512 && Tc(t);
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
	var Uc = Math.ceil, Wc = S.ReactCurrentDispatcher, Gc = S.ReactCurrentOwner, Kc = S.ReactCurrentBatchConfig, q = 0, J = null, Y = null, X = 0, qc = 0, Jc = ea(0), Z = 0, Yc = null, Xc = 0, Zc = 0, Qc = 0, $c = null, el = null, tl = 0, nl = Infinity, rl = null, il = !1, al = null, ol = null, sl = !1, cl = null, ll = 0, ul = 0, dl = null, fl = -1, pl = 0;
	function ml() {
		return q & 6 ? A() : fl === -1 ? fl = A() : fl;
	}
	function hl(e) {
		return e.mode & 1 ? q & 2 && X !== 0 ? X & -X : Ha.transition === null ? (e = j, e === 0 && (e = window.event, e = e === void 0 ? 16 : On(e.type)), e) : (pl === 0 && (pl = Kt()), pl) : 1;
	}
	function gl(e, t, n, r) {
		if (50 < ul) throw ul = 0, dl = null, Error(i(185));
		Jt(e, n, r), q & 2 && e === J || (e === J && (!(q & 2) && (Zc |= n), Z === 4 && Sl(e, X)), _l(e, r), n === 1 && q === 0 && !(t.mode & 1) && (nl = A() + 500, fa && ga()));
	}
	function _l(e, t) {
		var n = e.callbackNode;
		Wt(e, t);
		var r = Ht(e, e === J ? X : 0);
		if (r === 0) n !== null && Ct(n), e.callbackNode = null, e.callbackPriority = 0;
		else if (t = r & -r, e.callbackPriority !== t) {
			if (n != null && Ct(n), t === 1) e.tag === 0 ? ha(Cl.bind(null, e)) : ma(Cl.bind(null, e)), Ii(function() {
				!(q & 6) && ga();
			}), n = null;
			else {
				switch (Zt(r)) {
					case 1:
						n = Dt;
						break;
					case 4:
						n = Ot;
						break;
					case 16:
						n = kt;
						break;
					case 536870912:
						n = jt;
						break;
					default: n = kt;
				}
				n = Gl(n, vl.bind(null, e));
			}
			e.callbackPriority = t, e.callbackNode = n;
		}
	}
	function vl(e, t) {
		if (fl = -1, pl = 0, q & 6) throw Error(i(327));
		var n = e.callbackNode;
		if (Rl() && e.callbackNode !== n) return null;
		var r = Ht(e, e === J ? X : 0);
		if (r === 0) return null;
		if (r & 30 || (r & e.expiredLanes) !== 0 || t) t = jl(e, r);
		else {
			t = r;
			var a = q;
			q |= 2;
			var o = kl();
			(J !== e || X !== t) && (rl = null, nl = A() + 500, Dl(e, t));
			do
				try {
					Nl();
					break;
				} catch (t) {
					Ol(e, t);
				}
			while (1);
			$a(), Wc.current = o, q = a, Y === null ? (J = null, X = 0, t = Z) : t = 0;
		}
		if (t !== 0) {
			if (t === 2 && (a = Gt(e), a !== 0 && (r = a, t = yl(e, a))), t === 1) throw n = Yc, Dl(e, 0), Sl(e, r), _l(e, A()), n;
			if (t === 6) Sl(e, r);
			else {
				if (a = e.current.alternate, !(r & 30) && !xl(a) && (t = jl(e, r), t === 2 && (o = Gt(e), o !== 0 && (r = o, t = yl(e, o))), t === 1)) throw n = Yc, Dl(e, 0), Sl(e, r), _l(e, A()), n;
				switch (e.finishedWork = a, e.finishedLanes = r, t) {
					case 0:
					case 1: throw Error(i(345));
					case 2:
						Il(e, el, rl);
						break;
					case 3:
						if (Sl(e, r), (r & 130023424) === r && (t = tl + 500 - A(), 10 < t)) {
							if (Ht(e, 0) !== 0) break;
							if (a = e.suspendedLanes, (a & r) !== r) {
								ml(), e.pingedLanes |= e.suspendedLanes & a;
								break;
							}
							e.timeoutHandle = Ni(Il.bind(null, e, el, rl), t);
							break;
						}
						Il(e, el, rl);
						break;
					case 4:
						if (Sl(e, r), (r & 4194240) === r) break;
						for (t = e.eventTimes, a = -1; 0 < r;) {
							var s = 31 - Ft(r);
							o = 1 << s, s = t[s], s > a && (a = s), r &= ~o;
						}
						if (r = a, r = A() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Uc(r / 1960)) - r, 10 < r) {
							e.timeoutHandle = Ni(Il.bind(null, e, el, rl), r);
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
		return _l(e, A()), e.callbackNode === n ? vl.bind(null, e) : null;
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
						if (!Rr(a(), i)) return !1;
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
			var n = 31 - Ft(t), r = 1 << n;
			e[n] = -1, t &= ~r;
		}
	}
	function Cl(e) {
		if (q & 6) throw Error(i(327));
		Rl();
		var t = Ht(e, 0);
		if (!(t & 1)) return _l(e, A()), null;
		var n = jl(e, t);
		if (e.tag !== 0 && n === 2) {
			var r = Gt(e);
			r !== 0 && (t = r, n = yl(e, r));
		}
		if (n === 1) throw n = Yc, Dl(e, 0), Sl(e, t), _l(e, A()), n;
		if (n === 6) throw Error(i(345));
		return e.finishedWork = e.current.alternate, e.finishedLanes = t, Il(e, el, rl), _l(e, A()), null;
	}
	function wl(e, t) {
		var n = q;
		q |= 1;
		try {
			return e(t);
		} finally {
			q = n, q === 0 && (nl = A() + 500, fa && ga());
		}
	}
	function Tl(e) {
		cl !== null && cl.tag === 0 && !(q & 6) && Rl();
		var t = q;
		q |= 1;
		var n = Kc.transition, r = j;
		try {
			if (Kc.transition = null, j = 1, e) return e();
		} finally {
			j = r, Kc.transition = n, q = t, !(q & 6) && ga();
		}
	}
	function El() {
		qc = Jc.current, P(Jc);
	}
	function Dl(e, t) {
		e.finishedWork = null, e.finishedLanes = 0;
		var n = e.timeoutHandle;
		if (n !== -1 && (e.timeoutHandle = -1, Pi(n)), Y !== null) for (n = Y.return; n !== null;) {
			var r = n;
			switch (ka(r), r.tag) {
				case 1:
					r = r.type.childContextTypes, r != null && oa();
					break;
				case 3:
					wo(), P(na), P(I), ko();
					break;
				case 5:
					Eo(r);
					break;
				case 4:
					wo();
					break;
				case 13:
					P(R);
					break;
				case 19:
					P(R);
					break;
				case 10:
					eo(r.type._context);
					break;
				case 22:
				case 23: El();
			}
			n = n.return;
		}
		if (J = e, Y = e = Xl(e.current, null), X = qc = t, Z = 0, Yc = null, Qc = Zc = Xc = 0, el = $c = null, io !== null) {
			for (t = 0; t < io.length; t++) if (n = io[t], r = n.interleaved, r !== null) {
				n.interleaved = null;
				var i = r.next, a = n.pending;
				if (a !== null) {
					var o = a.next;
					a.next = i, r.next = o;
				}
				n.pending = r;
			}
			io = null;
		}
		return e;
	}
	function Ol(e, t) {
		do {
			var n = Y;
			try {
				if ($a(), Ao.current = bs, No) {
					for (var r = z.memoizedState; r !== null;) {
						var a = r.queue;
						a !== null && (a.pending = null), r = r.next;
					}
					No = !1;
				}
				if (Mo = 0, V = B = z = null, Po = !1, Fo = 0, Gc.current = null, n === null || n.return === null) {
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
						var m = Rs(s);
						if (m !== null) {
							m.flags &= -257, zs(m, s, c, o, t), m.mode & 1 && Ls(o, u, t), t = m, l = u;
							var h = t.updateQueue;
							if (h === null) {
								var g = /* @__PURE__ */ new Set();
								g.add(l), t.updateQueue = g;
							} else h.add(l);
							break a;
						}
						if (!(t & 1)) {
							Ls(o, u, t), Al();
							break a;
						}
						l = Error(i(426));
					} else if (L && c.mode & 1) {
						var _ = Rs(s);
						if (_ !== null) {
							!(_.flags & 65536) && (_.flags |= 256), zs(_, s, c, o, t), Va(js(l, c));
							break a;
						}
					}
					o = l = js(l, c), Z !== 4 && (Z = 2), $c === null ? $c = [o] : $c.push(o), o = s;
					do {
						switch (o.tag) {
							case 3:
								o.flags |= 65536, t &= -t, o.lanes |= t;
								var v = Fs(o, l, t);
								ho(o, v);
								break a;
							case 1:
								c = l;
								var y = o.type, b = o.stateNode;
								if (!(o.flags & 128) && (typeof y.getDerivedStateFromError == "function" || b !== null && typeof b.componentDidCatch == "function" && (ol === null || !ol.has(b)))) {
									o.flags |= 65536, t &= -t, o.lanes |= t;
									var x = Is(o, c, t);
									ho(o, x);
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
		return Wc.current = bs, e === null ? bs : e;
	}
	function Al() {
		(Z === 0 || Z === 3 || Z === 2) && (Z = 4), J === null || !(Xc & 268435455) && !(Zc & 268435455) || Sl(J, X);
	}
	function jl(e, t) {
		var n = q;
		q |= 2;
		var r = kl();
		(J !== e || X !== t) && (rl = null, Dl(e, t));
		do
			try {
				Ml();
				break;
			} catch (t) {
				Ol(e, t);
			}
		while (1);
		if ($a(), q = n, Wc.current = r, Y !== null) throw Error(i(261));
		return J = null, X = 0, Z;
	}
	function Ml() {
		for (; Y !== null;) Pl(Y);
	}
	function Nl() {
		for (; Y !== null && !wt();) Pl(Y);
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
				if (n = gc(n, t), n !== null) {
					n.flags &= 32767, Y = n;
					return;
				}
				if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
				else {
					Z = 6, Y = null;
					return;
				}
			} else if (n = hc(n, t, qc), n !== null) {
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
		var r = j, i = Kc.transition;
		try {
			Kc.transition = null, j = 1, Ll(e, t, n, r);
		} finally {
			Kc.transition = i, j = r;
		}
		return null;
	}
	function Ll(e, t, n, r) {
		do
			Rl();
		while (cl !== null);
		if (q & 6) throw Error(i(327));
		n = e.finishedWork;
		var a = e.finishedLanes;
		if (n === null) return null;
		if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(i(177));
		e.callbackNode = null, e.callbackPriority = 0;
		var o = n.lanes | n.childLanes;
		if (Yt(e, o), e === J && (Y = J = null, X = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || sl || (sl = !0, Gl(kt, function() {
			return Rl(), null;
		})), o = !!(n.flags & 15990), n.subtreeFlags & 15990 || o) {
			o = Kc.transition, Kc.transition = null;
			var s = j;
			j = 1;
			var c = q;
			q |= 4, Gc.current = null, Sc(e, n), Ic(n, e), Gr(ji), Sn = !!Ai, ji = Ai = null, e.current = n, Rc(n, e, a), Tt(), q = c, j = s, Kc.transition = o;
		} else e.current = n;
		if (sl && (sl = !1, cl = e, ll = a), o = e.pendingLanes, o === 0 && (ol = null), Pt(n.stateNode, r), _l(e, A()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) a = t[n], r(a.value, {
			componentStack: a.stack,
			digest: a.digest
		});
		if (il) throw il = !1, e = al, al = null, e;
		return ll & 1 && e.tag !== 0 && Rl(), o = e.pendingLanes, o & 1 ? e === dl ? ul++ : (ul = 0, dl = e) : ul = 0, ga(), null;
	}
	function Rl() {
		if (cl !== null) {
			var e = Zt(ll), t = Kc.transition, n = j;
			try {
				if (Kc.transition = null, j = 16 > e ? 16 : e, cl === null) var r = !1;
				else {
					if (e = cl, cl = null, ll = 0, q & 6) throw Error(i(331));
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
					if (q = a, ga(), Nt && typeof Nt.onPostCommitFiberRoot == "function") try {
						Nt.onPostCommitFiberRoot(Mt, e);
					} catch {}
					r = !0;
				}
				return r;
			} finally {
				j = n, Kc.transition = t;
			}
		}
		return !1;
	}
	function zl(e, t, n) {
		t = js(n, t), t = Fs(e, t, 1), e = po(e, t, 1), t = ml(), e !== null && (Jt(e, 1, t), _l(e, t));
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
					e = js(n, e), e = Is(t, e, 1), t = po(t, e, 1), e = ml(), t !== null && (Jt(t, 1, e), _l(t, e));
					break;
				}
			}
			t = t.return;
		}
	}
	function Bl(e, t, n) {
		var r = e.pingCache;
		r !== null && r.delete(t), t = ml(), e.pingedLanes |= e.suspendedLanes & n, J === e && (X & n) === n && (Z === 4 || Z === 3 && (X & 130023424) === X && 500 > A() - tl ? Dl(e, 0) : Qc |= n), _l(e, t);
	}
	function Vl(e, t) {
		t === 0 && (e.mode & 1 ? (t = Bt, Bt <<= 1, !(Bt & 130023424) && (Bt = 4194304)) : t = 1);
		var n = ml();
		e = so(e, t), e !== null && (Jt(e, t, n), _l(e, n));
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
			if (e.memoizedProps !== t.pendingProps || na.current) Vs = !0;
			else {
				if ((e.lanes & n) === 0 && !(t.flags & 128)) return Vs = !1, uc(e, t, n);
				Vs = !!(e.flags & 131072);
			}
		} else Vs = !1, L && t.flags & 1048576 && Da(t, ba, t.index);
		switch (t.lanes = 0, t.tag) {
			case 2:
				var r = t.type;
				cc(e, t), e = t.pendingProps;
				var a = ia(t, I.current);
				no(t, n), a = Ro(null, t, r, e, a, n);
				var o = zo();
				return t.flags |= 1, typeof a == "object" && a && typeof a.render == "function" && a.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, aa(r) ? (o = !0, la(t)) : o = !1, t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null, lo(t), a.updater = Es, t.stateNode = a, a._reactInternals = t, As(t, r, e, n), t = Xs(null, t, r, !0, o, n)) : (t.tag = 0, L && o && Oa(t), Hs(null, t, a, n), t = t.child), t;
			case 16:
				r = t.elementType;
				a: {
					switch (cc(e, t), e = t.pendingProps, a = r._init, r = a(r._payload), t.type = r, a = t.tag = Yl(r), e = ws(r, e), a) {
						case 0:
							t = Js(null, t, r, e, n);
							break a;
						case 1:
							t = Ys(null, t, r, e, n);
							break a;
						case 11:
							t = Us(null, t, r, e, n);
							break a;
						case 14:
							t = Ws(null, t, r, ws(r.type, e), n);
							break a;
					}
					throw Error(i(306, r, ""));
				}
				return t;
			case 0: return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : ws(r, a), Js(e, t, r, a, n);
			case 1: return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : ws(r, a), Ys(e, t, r, a, n);
			case 3:
				a: {
					if (Zs(t), e === null) throw Error(i(387));
					r = t.pendingProps, o = t.memoizedState, a = o.element, uo(e, t), go(t, r, null, n);
					var s = t.memoizedState;
					if (r = s.element, o.isDehydrated) {
						if (o = {
							element: r,
							isDehydrated: !1,
							cache: s.cache,
							pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
							transitions: s.transitions
						}, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
							a = js(Error(i(423)), t), t = Qs(e, t, r, n, a);
							break a;
						}
						if (r !== a) {
							a = js(Error(i(424)), t), t = Qs(e, t, r, n, a);
							break a;
						}
						for (ja = zi(t.stateNode.containerInfo.firstChild), Aa = t, L = !0, Ma = null, n = Ja(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling;
					} else {
						if (Ba(), r === a) {
							t = lc(e, t, n);
							break a;
						}
						Hs(e, t, r, n);
					}
					t = t.child;
				}
				return t;
			case 5: return To(t), e === null && Ia(t), r = t.type, a = t.pendingProps, o = e === null ? null : e.memoizedProps, s = a.children, Mi(r, a) ? s = null : o !== null && Mi(r, o) && (t.flags |= 32), qs(e, t), Hs(e, t, s, n), t.child;
			case 6: return e === null && Ia(t), null;
			case 13: return tc(e, t, n);
			case 4: return Co(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = qa(t, null, r, n) : Hs(e, t, r, n), t.child;
			case 11: return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : ws(r, a), Us(e, t, r, a, n);
			case 7: return Hs(e, t, t.pendingProps, n), t.child;
			case 8: return Hs(e, t, t.pendingProps.children, n), t.child;
			case 12: return Hs(e, t, t.pendingProps.children, n), t.child;
			case 10:
				a: {
					if (r = t.type._context, a = t.pendingProps, o = t.memoizedProps, s = a.value, F(Ya, r._currentValue), r._currentValue = s, o !== null) {
						if (Rr(o.value, s)) {
							if (o.children === a.children && !na.current) {
								t = lc(e, t, n);
								break a;
							}
						} else for (o = t.child, o !== null && (o.return = t); o !== null;) {
							var c = o.dependencies;
							if (c !== null) {
								s = o.child;
								for (var l = c.firstContext; l !== null;) {
									if (l.context === r) {
										if (o.tag === 1) {
											l = fo(-1, n & -n), l.tag = 2;
											var u = o.updateQueue;
											if (u !== null) {
												u = u.shared;
												var d = u.pending;
												d === null ? l.next = l : (l.next = d.next, d.next = l), u.pending = l;
											}
										}
										o.lanes |= n, l = o.alternate, l !== null && (l.lanes |= n), to(o.return, n, t), c.lanes |= n;
										break;
									}
									l = l.next;
								}
							} else if (o.tag === 10) s = o.type === t.type ? null : o.child;
							else if (o.tag === 18) {
								if (s = o.return, s === null) throw Error(i(341));
								s.lanes |= n, c = s.alternate, c !== null && (c.lanes |= n), to(s, n, t), s = o.sibling;
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
					Hs(e, t, a.children, n), t = t.child;
				}
				return t;
			case 9: return a = t.type, r = t.pendingProps.children, no(t, n), a = ro(a), r = r(a), t.flags |= 1, Hs(e, t, r, n), t.child;
			case 14: return r = t.type, a = ws(r, t.pendingProps), a = ws(r.type, a), Ws(e, t, r, a, n);
			case 15: return Gs(e, t, t.type, t.pendingProps, n);
			case 17: return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : ws(r, a), cc(e, t), t.tag = 1, aa(r) ? (e = !0, la(t)) : e = !1, no(t, n), Os(t, r, a), As(t, r, a, n), Xs(null, t, r, !0, e, n);
			case 19: return sc(e, t, n);
			case 22: return Ks(e, t, n);
		}
		throw Error(i(156, t.tag));
	};
	function Gl(e, t) {
		return St(e, t);
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
			if (e = e.$$typeof, e === w) return 11;
			if (e === E) return 14;
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
			case re: return Ql(n.children, a, o, t);
			case ie:
				s = 8, a |= 8;
				break;
			case ae: return e = ql(12, n, t, a | 2), e.elementType = ae, e.lanes = o, e;
			case T: return e = ql(13, n, t, a), e.elementType = T, e.lanes = o, e;
			case se: return e = ql(19, n, t, a), e.elementType = se, e.lanes = o, e;
			case le: return $l(n, a, o, t);
			default:
				if (typeof e == "object" && e) switch (e.$$typeof) {
					case C:
						s = 10;
						break a;
					case oe:
						s = 9;
						break a;
					case w:
						s = 11;
						break a;
					case E:
						s = 14;
						break a;
					case ce:
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
		return e = ql(22, e, r, t), e.elementType = le, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
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
		this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = qt(0), this.expirationTimes = qt(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = qt(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null;
	}
	function ru(e, t, n, r, i, a, o, s, c) {
		return e = new nu(e, t, n, s, c), t === 1 ? (t = 1, !0 === a && (t |= 8)) : t = 0, a = ql(3, null, null, t), e.current = a, a.stateNode = e, a.memoizedState = {
			element: r,
			isDehydrated: n,
			cache: null,
			transitions: null,
			pendingSuspenseBoundaries: null
		}, lo(a), e;
	}
	function iu(e, t, n) {
		var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
		return {
			$$typeof: ne,
			key: r == null ? null : "" + r,
			children: e,
			containerInfo: t,
			implementation: n
		};
	}
	function au(e) {
		if (!e) return ta;
		e = e._reactInternals;
		a: {
			if (gt(e) !== e || e.tag !== 1) throw Error(i(170));
			var t = e;
			do {
				switch (t.tag) {
					case 3:
						t = t.stateNode.context;
						break a;
					case 1: if (aa(t.type)) {
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
			if (aa(n)) return ca(e, n, t);
		}
		return t;
	}
	function ou(e, t, n, r, i, a, o, s, c) {
		return e = ru(n, r, !0, e, i, a, o, s, c), e.context = au(null), n = e.current, r = ml(), i = hl(n), a = fo(r, i), a.callback = t ?? null, po(n, a, i), e.current.lanes = i, Jt(e, i, r), _l(e, r), e;
	}
	function su(e, t, n, r) {
		var i = t.current, a = ml(), o = hl(i);
		return n = au(n), t.context === null ? t.context = n : t.pendingContext = n, t = fo(a, o), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = po(i, t, o), e !== null && (gl(e, i, o, a), mo(e, i, o)), o;
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
			}), t[Wi] = null;
		}
	};
	function mu(e) {
		this._internalRoot = e;
	}
	mu.prototype.unstable_scheduleHydration = function(e) {
		if (e) {
			var t = tn();
			e = {
				blockedOn: null,
				target: e,
				priority: t
			};
			for (var n = 0; n < un.length && t !== 0 && t < un[n].priority; n++);
			un.splice(n, 0, e), n === 0 && hn(e);
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
			return e._reactRootContainer = o, e[Wi] = o.current, vi(e.nodeType === 8 ? e.parentNode : e), Tl(), o;
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
		return e._reactRootContainer = c, e[Wi] = c.current, vi(e.nodeType === 8 ? e.parentNode : e), Tl(function() {
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
	Qt = function(e) {
		switch (e.tag) {
			case 3:
				var t = e.stateNode;
				if (t.current.memoizedState.isDehydrated) {
					var n = Vt(t.pendingLanes);
					n !== 0 && (Xt(t, n | 1), _l(t, A()), !(q & 6) && (nl = A() + 500, ga()));
				}
				break;
			case 13: Tl(function() {
				var t = so(e, 1);
				t !== null && gl(t, e, 1, ml());
			}), uu(e, 1);
		}
	}, $t = function(e) {
		if (e.tag === 13) {
			var t = so(e, 134217728);
			t !== null && gl(t, e, 134217728, ml()), uu(e, 134217728);
		}
	}, en = function(e) {
		if (e.tag === 13) {
			var t = hl(e), n = so(e, t);
			n !== null && gl(n, e, t, ml()), uu(e, t);
		}
	}, tn = function() {
		return j;
	}, nn = function(e, t) {
		var n = j;
		try {
			return j = e, t();
		} finally {
			j = n;
		}
	}, Xe = function(e, t, n) {
		switch (t) {
			case "input":
				if (Oe(e, n), t = n.name, n.type === "radio" && t != null) {
					for (n = e; n.parentNode;) n = n.parentNode;
					for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + "][type=\"radio\"]"), t = 0; t < n.length; t++) {
						var r = n[t];
						if (r !== e && r.form === e.form) {
							var a = Zi(r);
							if (!a) throw Error(i(90));
							Ce(r), Oe(r, a);
						}
					}
				}
				break;
			case "textarea":
				Fe(e, n);
				break;
			case "select": t = n.value, t != null && Me(e, !!n.multiple, t, !1);
		}
	}, nt = wl, rt = Tl;
	var bu = {
		usingClientEntryPoint: !1,
		Events: [
			Yi,
			Xi,
			Zi,
			et,
			tt,
			wl
		]
	}, xu = {
		findFiberByHostInstance: Ji,
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
		currentDispatcherRef: S.ReactCurrentDispatcher,
		findHostInstanceByFiber: function(e) {
			return e = bt(e), e === null ? null : e.stateNode;
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
			Mt = Cu.inject(Su), Nt = Cu;
		} catch {}
	}
	e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = bu, e.createPortal = function(e, t) {
		var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
		if (!hu(t)) throw Error(i(200));
		return iu(e, t, null, n);
	}, e.createRoot = function(e, t) {
		if (!hu(e)) throw Error(i(299));
		var n = !1, r = "", a = fu;
		return t != null && (!0 === t.unstable_strictMode && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (a = t.onRecoverableError)), t = ru(e, 1, !1, null, null, n, !1, r, a), e[Wi] = t.current, vi(e.nodeType === 8 ? e.parentNode : e), new pu(t);
	}, e.findDOMNode = function(e) {
		if (e == null) return null;
		if (e.nodeType === 1) return e;
		var t = e._reactInternals;
		if (t === void 0) throw typeof e.render == "function" ? Error(i(188)) : (e = Object.keys(e).join(","), Error(i(268, e)));
		return e = bt(t), e = e === null ? null : e.stateNode, e;
	}, e.flushSync = function(e) {
		return Tl(e);
	}, e.hydrate = function(e, t, n) {
		if (!gu(t)) throw Error(i(200));
		return yu(null, e, t, !0, n);
	}, e.hydrateRoot = function(e, t, n) {
		if (!hu(e)) throw Error(i(405));
		var r = n != null && n.hydratedSources || null, a = !1, o = "", s = fu;
		if (n != null && (!0 === n.unstable_strictMode && (a = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = ou(t, null, e, 1, n ?? null, a, !1, o, s), e[Wi] = t.current, vi(e), r) for (e = 0; e < r.length; e++) n = r[e], a = n._getVersion, a = a(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, a] : t.mutableSourceEagerHydrationData.push(n, a);
		return new mu(t);
	}, e.render = function(e, t, n) {
		if (!gu(t)) throw Error(i(200));
		return yu(null, e, t, !1, n);
	}, e.unmountComponentAtNode = function(e) {
		if (!gu(e)) throw Error(i(40));
		return e._reactRootContainer ? (Tl(function() {
			yu(null, null, e, !1, function() {
				e._reactRootContainer = null, e[Wi] = null;
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
	var n = t && t.cache ? t.cache : ae, r = t && t.serializer ? t.serializer : re;
	return (t && t.strategy ? t.strategy : S)(e, {
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
function ee(e, t, n, r, i) {
	return n.bind(t, e, r, i);
}
function S(e, t) {
	var n = e.length === 1 ? b : x;
	return ee(e, this, n, t.cache.create(), t.serializer);
}
function te(e, t) {
	return ee(e, this, x, t.cache.create(), t.serializer);
}
function ne(e, t) {
	return ee(e, this, b, t.cache.create(), t.serializer);
}
var re = function() {
	return JSON.stringify(arguments);
};
function ie() {
	this.cache = Object.create(null);
}
ie.prototype.get = function(e) {
	return this.cache[e];
}, ie.prototype.set = function(e, t) {
	this.cache[e] = t;
};
var ae = { create: function() {
	return new ie();
} }, C = {
	variadic: te,
	monadic: ne
};
// node_modules/.pnpm/@formatjs+ecma402-abstract@2.2.4/node_modules/@formatjs/ecma402-abstract/lib/utils.js
function oe(e, t, n) {
	if (n === void 0 && (n = Error), !e) throw new n(t);
}
v(function() {
	var e, t = [...arguments];
	return new ((e = Intl.NumberFormat).bind.apply(e, _([void 0], t, !1)))();
}, { strategy: C.variadic }), v(function() {
	var e, t = [...arguments];
	return new ((e = Intl.DateTimeFormat).bind.apply(e, _([void 0], t, !1)))();
}, { strategy: C.variadic }), v(function() {
	var e, t = [...arguments];
	return new ((e = Intl.PluralRules).bind.apply(e, _([void 0], t, !1)))();
}, { strategy: C.variadic }), v(function() {
	var e, t = [...arguments];
	return new ((e = Intl.Locale).bind.apply(e, _([void 0], t, !1)))();
}, { strategy: C.variadic }), v(function() {
	var e, t = [...arguments];
	return new ((e = Intl.ListFormat).bind.apply(e, _([void 0], t, !1)))();
}, { strategy: C.variadic });
// node_modules/.pnpm/@formatjs+icu-messageformat-parser@2.9.4/node_modules/@formatjs/icu-messageformat-parser/lib/error.js
var w;
(function(e) {
	e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})(w ||= {});
// node_modules/.pnpm/@formatjs+icu-messageformat-parser@2.9.4/node_modules/@formatjs/icu-messageformat-parser/lib/types.js
var T;
(function(e) {
	e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag";
})(T ||= {});
var se;
(function(e) {
	e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime";
})(se ||= {});
function E(e) {
	return e.type === T.literal;
}
function ce(e) {
	return e.type === T.argument;
}
function le(e) {
	return e.type === T.number;
}
function ue(e) {
	return e.type === T.date;
}
function de(e) {
	return e.type === T.time;
}
function D(e) {
	return e.type === T.select;
}
function fe(e) {
	return e.type === T.plural;
}
function pe(e) {
	return e.type === T.pound;
}
function me(e) {
	return e.type === T.tag;
}
function he(e) {
	return !!(e && typeof e == "object" && e.type === se.number);
}
function ge(e) {
	return !!(e && typeof e == "object" && e.type === se.dateTime);
}
// node_modules/.pnpm/@formatjs+icu-messageformat-parser@2.9.4/node_modules/@formatjs/icu-messageformat-parser/lib/regex.generated.js
var _e = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, ve = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function ye(e) {
	var t = {};
	return e.replace(ve, function(e) {
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
var be = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
// node_modules/.pnpm/@formatjs+icu-skeleton-parser@1.8.8/node_modules/@formatjs/icu-skeleton-parser/lib/number.js
function xe(e) {
	if (e.length === 0) throw Error("Number skeleton cannot be empty");
	for (var t = e.split(be).filter(function(e) {
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
function Se(e) {
	return e.replace(/^(.*?)-/, "");
}
var Ce = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, we = /^(@+)?(\+|#+)?[rs]?$/g, Te = /(\*)(0+)|(#+)(0+)|(0+)/g, Ee = /^(0+)$/;
function De(e) {
	var t = {};
	return e[e.length - 1] === "r" ? t.roundingPriority = "morePrecision" : e[e.length - 1] === "s" && (t.roundingPriority = "lessPrecision"), e.replace(we, function(e, n, r) {
		return typeof r == "string" ? r === "+" ? t.minimumSignificantDigits = n.length : n[0] === "#" ? t.maximumSignificantDigits = n.length : (t.minimumSignificantDigits = n.length, t.maximumSignificantDigits = n.length + (typeof r == "string" ? r.length : 0)) : (t.minimumSignificantDigits = n.length, t.maximumSignificantDigits = n.length), "";
	}), t;
}
function Oe(e) {
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
function ke(e) {
	var t;
	if (e[0] === "E" && e[1] === "E" ? (t = { notation: "engineering" }, e = e.slice(2)) : e[0] === "E" && (t = { notation: "scientific" }, e = e.slice(1)), t) {
		var n = e.slice(0, 2);
		if (n === "+!" ? (t.signDisplay = "always", e = e.slice(2)) : n === "+?" && (t.signDisplay = "exceptZero", e = e.slice(2)), !Ee.test(e)) throw Error("Malformed concise eng/scientific notation");
		t.minimumIntegerDigits = e.length;
	}
	return t;
}
function Ae(e) {
	return Oe(e) || {};
}
function je(e) {
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
				t.style = "unit", t.unit = Se(i.options[0]);
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
					return d(d({}, e), Ae(t));
				}, {}));
				continue;
			case "engineering":
				t = d(d(d({}, t), { notation: "engineering" }), i.options.reduce(function(e, t) {
					return d(d({}, e), Ae(t));
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
				i.options[0].replace(Te, function(e, n, r, i, a, o) {
					if (n) t.minimumIntegerDigits = r.length;
					else if (i && a) throw Error("We currently do not support maximum integer digits");
					else if (o) throw Error("We currently do not support exact integer digits");
					return "";
				});
				continue;
		}
		if (Ee.test(i.stem)) t.minimumIntegerDigits = i.stem.length;
		else if (Ce.test(i.stem)) {
			if (i.options.length > 1) throw RangeError("Fraction-precision stems only accept a single optional option");
			i.stem.replace(Ce, function(e, n, r, i, a, o) {
				return r === "*" ? t.minimumFractionDigits = n.length : i && i[0] === "#" ? t.maximumFractionDigits = i.length : a && o ? (t.minimumFractionDigits = a.length, t.maximumFractionDigits = a.length + o.length) : (t.minimumFractionDigits = n.length, t.maximumFractionDigits = n.length), "";
			});
			var a = i.options[0];
			a === "w" ? t = d(d({}, t), { trailingZeroDisplay: "stripIfInteger" }) : a && (t = d(d({}, t), De(a)));
		} else if (we.test(i.stem)) t = d(d({}, t), De(i.stem));
		else {
			var o = Oe(i.stem);
			o && (t = d(d({}, t), o));
			var s = ke(i.stem);
			s && (t = d(d({}, t), s));
		}
	}
	return t;
}
// node_modules/.pnpm/@formatjs+icu-messageformat-parser@2.9.4/node_modules/@formatjs/icu-messageformat-parser/lib/time-data.generated.js
var Me = {
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
function Ne(e, t) {
	for (var n = "", r = 0; r < e.length; r++) {
		var i = e.charAt(r);
		if (i === "j") {
			for (var a = 0; r + 1 < e.length && e.charAt(r + 1) === i;) a++, r++;
			var o = 1 + (a & 1), s = a < 2 ? 1 : 3 + (a >> 1), c = "a", l = Pe(t);
			for ((l == "H" || l == "k") && (s = 0); s-- > 0;) n += c;
			for (; o-- > 0;) n = l + n;
		} else n += i === "J" ? "H" : i;
	}
	return n;
}
function Pe(e) {
	var t = e.hourCycle;
	if (t === void 0 && e.hourCycles && e.hourCycles.length && (t = e.hourCycles[0]), t) switch (t) {
		case "h24": return "k";
		case "h23": return "H";
		case "h12": return "h";
		case "h11": return "K";
		default: throw Error("Invalid hourCycle");
	}
	var n = e.language, r;
	return n !== "root" && (r = e.maximize().region), (Me[r || ""] || Me[n || ""] || Me[`${n}-001`] || Me["001"])[0];
}
// node_modules/.pnpm/@formatjs+icu-messageformat-parser@2.9.4/node_modules/@formatjs/icu-messageformat-parser/lib/parser.js
var Fe = RegExp(`^${_e.source}*`), Ie = RegExp(`${_e.source}*\$`);
function O(e, t) {
	return {
		start: e,
		end: t
	};
}
var Le = !!String.prototype.startsWith && "_a".startsWith("a", 1), Re = !!String.fromCodePoint, ze = !!Object.fromEntries, Be = !!String.prototype.codePointAt, Ve = !!String.prototype.trimStart, He = !!String.prototype.trimEnd, Ue = Number.isSafeInteger ? Number.isSafeInteger : function(e) {
	return typeof e == "number" && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991;
}, We = !0;
try {
	We = Ze("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu").exec("a")?.[0] === "a";
} catch {
	We = !1;
}
var Ge = Le ? function(e, t, n) {
	return e.startsWith(t, n);
} : function(e, t, n) {
	return e.slice(n, n + t.length) === t;
}, Ke = Re ? String.fromCodePoint : function() {
	for (var e = [...arguments], t = "", n = e.length, r = 0, i; n > r;) {
		if (i = e[r++], i > 1114111) throw RangeError(i + " is not a valid code point");
		t += i < 65536 ? String.fromCharCode(i) : String.fromCharCode(((i -= 65536) >> 10) + 55296, i % 1024 + 56320);
	}
	return t;
}, qe = ze ? Object.fromEntries : function(e) {
	for (var t = {}, n = 0, r = e; n < r.length; n++) {
		var i = r[n], a = i[0];
		t[a] = i[1];
	}
	return t;
}, Je = Be ? function(e, t) {
	return e.codePointAt(t);
} : function(e, t) {
	var n = e.length;
	if (!(t < 0 || t >= n)) {
		var r = e.charCodeAt(t), i;
		return r < 55296 || r > 56319 || t + 1 === n || (i = e.charCodeAt(t + 1)) < 56320 || i > 57343 ? r : (r - 55296 << 10) + (i - 56320) + 65536;
	}
}, Ye = Ve ? function(e) {
	return e.trimStart();
} : function(e) {
	return e.replace(Fe, "");
}, Xe = He ? function(e) {
	return e.trimEnd();
} : function(e) {
	return e.replace(Ie, "");
};
function Ze(e, t) {
	return new RegExp(e, t);
}
var Qe;
if (We) {
	var $e = Ze("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
	Qe = function(e, t) {
		return $e.lastIndex = t, $e.exec(e)[1] ?? "";
	};
} else Qe = function(e, t) {
	for (var n = [];;) {
		var r = Je(e, t);
		if (r === void 0 || it(r) || at(r)) break;
		n.push(r), t += r >= 65536 ? 2 : 1;
	}
	return Ke.apply(void 0, n);
};
var et = function() {
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
					type: T.pound,
					location: O(o, this.clonePosition())
				});
			} else if (i === 60 && !this.ignoreTag && this.peek() === 47) {
				if (n) break;
				return this.error(w.UNMATCHED_CLOSING_TAG, O(this.clonePosition(), this.clonePosition()));
			} else if (i === 60 && !this.ignoreTag && tt(this.peek() || 0)) {
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
				type: T.literal,
				value: `<${r}/>`,
				location: O(n, this.clonePosition())
			},
			err: null
		};
		if (this.bumpIf(">")) {
			var i = this.parseMessage(e + 1, t, !0);
			if (i.err) return i;
			var a = i.val, o = this.clonePosition();
			if (this.bumpIf("</")) {
				if (this.isEOF() || !tt(this.char())) return this.error(w.INVALID_TAG, O(o, this.clonePosition()));
				var s = this.clonePosition();
				return r === this.parseTagName() ? (this.bumpSpace(), this.bumpIf(">") ? {
					val: {
						type: T.tag,
						value: r,
						children: a,
						location: O(n, this.clonePosition())
					},
					err: null
				} : this.error(w.INVALID_TAG, O(o, this.clonePosition()))) : this.error(w.UNMATCHED_CLOSING_TAG, O(s, this.clonePosition()));
			}
			return this.error(w.UNCLOSED_TAG, O(n, this.clonePosition()));
		}
		return this.error(w.INVALID_TAG, O(n, this.clonePosition()));
	}, e.prototype.parseTagName = function() {
		var e = this.offset();
		for (this.bump(); !this.isEOF() && rt(this.char());) this.bump();
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
		var s = O(n, this.clonePosition());
		return {
			val: {
				type: T.literal,
				value: r,
				location: s
			},
			err: null
		};
	}, e.prototype.tryParseLeftAngleBracket = function() {
		return !this.isEOF() && this.char() === 60 && (this.ignoreTag || !nt(this.peek() || 0)) ? (this.bump(), "<") : null;
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
		return Ke.apply(void 0, t);
	}, e.prototype.tryParseUnquoted = function(e, t) {
		if (this.isEOF()) return null;
		var n = this.char();
		return n === 60 || n === 123 || n === 35 && (t === "plural" || t === "selectordinal") || n === 125 && e > 0 ? null : (this.bump(), Ke(n));
	}, e.prototype.parseArgument = function(e, t) {
		var n = this.clonePosition();
		if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(w.EXPECT_ARGUMENT_CLOSING_BRACE, O(n, this.clonePosition()));
		if (this.char() === 125) return this.bump(), this.error(w.EMPTY_ARGUMENT, O(n, this.clonePosition()));
		var r = this.parseIdentifierIfPossible().value;
		if (!r) return this.error(w.MALFORMED_ARGUMENT, O(n, this.clonePosition()));
		if (this.bumpSpace(), this.isEOF()) return this.error(w.EXPECT_ARGUMENT_CLOSING_BRACE, O(n, this.clonePosition()));
		switch (this.char()) {
			case 125: return this.bump(), {
				val: {
					type: T.argument,
					value: r,
					location: O(n, this.clonePosition())
				},
				err: null
			};
			case 44: return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(w.EXPECT_ARGUMENT_CLOSING_BRACE, O(n, this.clonePosition())) : this.parseArgumentOptions(e, t, r, n);
			default: return this.error(w.MALFORMED_ARGUMENT, O(n, this.clonePosition()));
		}
	}, e.prototype.parseIdentifierIfPossible = function() {
		var e = this.clonePosition(), t = this.offset(), n = Qe(this.message, t), r = t + n.length;
		return this.bumpTo(r), {
			value: n,
			location: O(e, this.clonePosition())
		};
	}, e.prototype.parseArgumentOptions = function(e, t, n, r) {
		var i = this.clonePosition(), a = this.parseIdentifierIfPossible().value, o = this.clonePosition();
		switch (a) {
			case "": return this.error(w.EXPECT_ARGUMENT_TYPE, O(i, o));
			case "number":
			case "date":
			case "time":
				this.bumpSpace();
				var s = null;
				if (this.bumpIf(",")) {
					this.bumpSpace();
					var c = this.clonePosition(), l = this.parseSimpleArgStyleIfPossible();
					if (l.err) return l;
					var u = Xe(l.val);
					if (u.length === 0) return this.error(w.EXPECT_ARGUMENT_STYLE, O(this.clonePosition(), this.clonePosition()));
					s = {
						style: u,
						styleLocation: O(c, this.clonePosition())
					};
				}
				var f = this.tryParseArgumentClose(r);
				if (f.err) return f;
				var p = O(r, this.clonePosition());
				if (s && Ge(s?.style, "::", 0)) {
					var m = Ye(s.style.slice(2));
					if (a === "number") {
						var l = this.parseNumberSkeletonFromString(m, s.styleLocation);
						return l.err ? l : {
							val: {
								type: T.number,
								value: n,
								location: p,
								style: l.val
							},
							err: null
						};
					}
					if (m.length === 0) return this.error(w.EXPECT_DATE_TIME_SKELETON, p);
					var h = m;
					this.locale && (h = Ne(m, this.locale));
					var u = {
						type: se.dateTime,
						pattern: h,
						location: s.styleLocation,
						parsedOptions: this.shouldParseSkeletons ? ye(h) : {}
					};
					return {
						val: {
							type: a === "date" ? T.date : T.time,
							value: n,
							location: p,
							style: u
						},
						err: null
					};
				}
				return {
					val: {
						type: a === "number" ? T.number : a === "date" ? T.date : T.time,
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
				if (this.bumpSpace(), !this.bumpIf(",")) return this.error(w.EXPECT_SELECT_ARGUMENT_OPTIONS, O(g, d({}, g)));
				this.bumpSpace();
				var _ = this.parseIdentifierIfPossible(), v = 0;
				if (a !== "select" && _.value === "offset") {
					if (!this.bumpIf(":")) return this.error(w.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, O(this.clonePosition(), this.clonePosition()));
					this.bumpSpace();
					var l = this.tryParseDecimalInteger(w.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, w.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
					if (l.err) return l;
					this.bumpSpace(), _ = this.parseIdentifierIfPossible(), v = l.val;
				}
				var y = this.tryParsePluralOrSelectOptions(e, a, t, _);
				if (y.err) return y;
				var f = this.tryParseArgumentClose(r);
				if (f.err) return f;
				var b = O(r, this.clonePosition());
				return a === "select" ? {
					val: {
						type: T.select,
						value: n,
						options: qe(y.val),
						location: b
					},
					err: null
				} : {
					val: {
						type: T.plural,
						value: n,
						options: qe(y.val),
						offset: v,
						pluralType: a === "plural" ? "cardinal" : "ordinal",
						location: b
					},
					err: null
				};
			default: return this.error(w.INVALID_ARGUMENT_TYPE, O(i, o));
		}
	}, e.prototype.tryParseArgumentClose = function(e) {
		return this.isEOF() || this.char() !== 125 ? this.error(w.EXPECT_ARGUMENT_CLOSING_BRACE, O(e, this.clonePosition())) : (this.bump(), {
			val: !0,
			err: null
		});
	}, e.prototype.parseSimpleArgStyleIfPossible = function() {
		for (var e = 0, t = this.clonePosition(); !this.isEOF();) switch (this.char()) {
			case 39:
				this.bump();
				var n = this.clonePosition();
				if (!this.bumpUntil("'")) return this.error(w.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, O(n, this.clonePosition()));
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
			n = xe(e);
		} catch {
			return this.error(w.INVALID_NUMBER_SKELETON, t);
		}
		return {
			val: {
				type: se.number,
				tokens: n,
				location: t,
				parsedOptions: this.shouldParseSkeletons ? je(n) : {}
			},
			err: null
		};
	}, e.prototype.tryParsePluralOrSelectOptions = function(e, t, n, r) {
		for (var i, a = !1, o = [], s = /* @__PURE__ */ new Set(), c = r.value, l = r.location;;) {
			if (c.length === 0) {
				var u = this.clonePosition();
				if (t !== "select" && this.bumpIf("=")) {
					var d = this.tryParseDecimalInteger(w.EXPECT_PLURAL_ARGUMENT_SELECTOR, w.INVALID_PLURAL_ARGUMENT_SELECTOR);
					if (d.err) return d;
					l = O(u, this.clonePosition()), c = this.message.slice(u.offset, this.offset());
				} else break;
			}
			if (s.has(c)) return this.error(t === "select" ? w.DUPLICATE_SELECT_ARGUMENT_SELECTOR : w.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, l);
			c === "other" && (a = !0), this.bumpSpace();
			var f = this.clonePosition();
			if (!this.bumpIf("{")) return this.error(t === "select" ? w.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : w.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, O(this.clonePosition(), this.clonePosition()));
			var p = this.parseMessage(e + 1, t, n);
			if (p.err) return p;
			var m = this.tryParseArgumentClose(f);
			if (m.err) return m;
			o.push([c, {
				value: p.val,
				location: O(f, this.clonePosition())
			}]), s.add(c), this.bumpSpace(), i = this.parseIdentifierIfPossible(), c = i.value, l = i.location;
		}
		return o.length === 0 ? this.error(t === "select" ? w.EXPECT_SELECT_ARGUMENT_SELECTOR : w.EXPECT_PLURAL_ARGUMENT_SELECTOR, O(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !a ? this.error(w.MISSING_OTHER_CLAUSE, O(this.clonePosition(), this.clonePosition())) : {
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
		var s = O(r, this.clonePosition());
		return i ? (a *= n, Ue(a) ? {
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
		var t = Je(this.message, e);
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
		if (Ge(this.message, e, this.offset())) {
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
		for (; !this.isEOF() && it(this.char());) this.bump();
	}, e.prototype.peek = function() {
		if (this.isEOF()) return null;
		var e = this.char(), t = this.offset();
		return this.message.charCodeAt(t + (e >= 65536 ? 2 : 1)) ?? null;
	}, e;
}();
function tt(e) {
	return e >= 97 && e <= 122 || e >= 65 && e <= 90;
}
function nt(e) {
	return tt(e) || e === 47;
}
function rt(e) {
	return e === 45 || e === 46 || e >= 48 && e <= 57 || e === 95 || e >= 97 && e <= 122 || e >= 65 && e <= 90 || e == 183 || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039;
}
function it(e) {
	return e >= 9 && e <= 13 || e === 32 || e === 133 || e >= 8206 && e <= 8207 || e === 8232 || e === 8233;
}
function at(e) {
	return e >= 33 && e <= 35 || e === 36 || e >= 37 && e <= 39 || e === 40 || e === 41 || e === 42 || e === 43 || e === 44 || e === 45 || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || e === 91 || e === 92 || e === 93 || e === 94 || e === 96 || e === 123 || e === 124 || e === 125 || e === 126 || e === 161 || e >= 162 && e <= 165 || e === 166 || e === 167 || e === 169 || e === 171 || e === 172 || e === 174 || e === 176 || e === 177 || e === 182 || e === 187 || e === 191 || e === 215 || e === 247 || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || e === 8216 || e === 8217 || e === 8218 || e >= 8219 && e <= 8220 || e === 8221 || e === 8222 || e === 8223 || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || e === 8249 || e === 8250 || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || e === 8260 || e === 8261 || e === 8262 || e >= 8263 && e <= 8273 || e === 8274 || e === 8275 || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || e === 8608 || e >= 8609 && e <= 8610 || e === 8611 || e >= 8612 && e <= 8613 || e === 8614 || e >= 8615 && e <= 8621 || e === 8622 || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || e === 8658 || e === 8659 || e === 8660 || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || e === 8968 || e === 8969 || e === 8970 || e === 8971 || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || e === 9001 || e === 9002 || e >= 9003 && e <= 9083 || e === 9084 || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || e === 9655 || e >= 9656 && e <= 9664 || e === 9665 || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || e === 9839 || e >= 9840 && e <= 10087 || e === 10088 || e === 10089 || e === 10090 || e === 10091 || e === 10092 || e === 10093 || e === 10094 || e === 10095 || e === 10096 || e === 10097 || e === 10098 || e === 10099 || e === 10100 || e === 10101 || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || e === 10181 || e === 10182 || e >= 10183 && e <= 10213 || e === 10214 || e === 10215 || e === 10216 || e === 10217 || e === 10218 || e === 10219 || e === 10220 || e === 10221 || e === 10222 || e === 10223 || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || e === 10627 || e === 10628 || e === 10629 || e === 10630 || e === 10631 || e === 10632 || e === 10633 || e === 10634 || e === 10635 || e === 10636 || e === 10637 || e === 10638 || e === 10639 || e === 10640 || e === 10641 || e === 10642 || e === 10643 || e === 10644 || e === 10645 || e === 10646 || e === 10647 || e === 10648 || e >= 10649 && e <= 10711 || e === 10712 || e === 10713 || e === 10714 || e === 10715 || e >= 10716 && e <= 10747 || e === 10748 || e === 10749 || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || e === 11158 || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || e === 11778 || e === 11779 || e === 11780 || e === 11781 || e >= 11782 && e <= 11784 || e === 11785 || e === 11786 || e === 11787 || e === 11788 || e === 11789 || e >= 11790 && e <= 11798 || e === 11799 || e >= 11800 && e <= 11801 || e === 11802 || e === 11803 || e === 11804 || e === 11805 || e >= 11806 && e <= 11807 || e === 11808 || e === 11809 || e === 11810 || e === 11811 || e === 11812 || e === 11813 || e === 11814 || e === 11815 || e === 11816 || e === 11817 || e >= 11818 && e <= 11822 || e === 11823 || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || e === 11840 || e === 11841 || e === 11842 || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || e === 11858 || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || e === 12296 || e === 12297 || e === 12298 || e === 12299 || e === 12300 || e === 12301 || e === 12302 || e === 12303 || e === 12304 || e === 12305 || e >= 12306 && e <= 12307 || e === 12308 || e === 12309 || e === 12310 || e === 12311 || e === 12312 || e === 12313 || e === 12314 || e === 12315 || e === 12316 || e === 12317 || e >= 12318 && e <= 12319 || e === 12320 || e === 12336 || e === 64830 || e === 64831 || e >= 65093 && e <= 65094;
}
// node_modules/.pnpm/@formatjs+icu-messageformat-parser@2.9.4/node_modules/@formatjs/icu-messageformat-parser/lib/index.js
function ot(e) {
	e.forEach(function(e) {
		if (delete e.location, D(e) || fe(e)) for (var t in e.options) delete e.options[t].location, ot(e.options[t].value);
		else le(e) && he(e.style) || (ue(e) || de(e)) && ge(e.style) ? delete e.style.location : me(e) && ot(e.children);
	});
}
function st(e, t) {
	t === void 0 && (t = {}), t = d({
		shouldParseSkeletons: !0,
		requiresOtherClause: !0
	}, t);
	var n = new et(e, t).parse();
	if (n.err) {
		var r = SyntaxError(w[n.err.kind]);
		throw r.location = n.err.location, r.originalMessage = n.err.message, r;
	}
	return t?.captureLocation || ot(n.val), n.val;
}
// node_modules/.pnpm/intl-messageformat@10.7.7/node_modules/intl-messageformat/lib/src/error.js
var ct;
(function(e) {
	e.MISSING_VALUE = "MISSING_VALUE", e.INVALID_VALUE = "INVALID_VALUE", e.MISSING_INTL_API = "MISSING_INTL_API";
})(ct ||= {});
var lt = function(e) {
	u(t, e);
	function t(t, n, r) {
		var i = e.call(this, t) || this;
		return i.code = n, i.originalMessage = r, i;
	}
	return t.prototype.toString = function() {
		return `[formatjs Error: ${this.code}] ${this.message}`;
	}, t;
}(Error), ut = function(e) {
	u(t, e);
	function t(t, n, r, i) {
		return e.call(this, `Invalid values for "${t}": "${n}". Options are "${Object.keys(r).join("\", \"")}"`, ct.INVALID_VALUE, i) || this;
	}
	return t;
}(lt), dt = function(e) {
	u(t, e);
	function t(t, n, r) {
		return e.call(this, `Value for "${t}" must be of type ${n}`, ct.INVALID_VALUE, r) || this;
	}
	return t;
}(lt), ft = function(e) {
	u(t, e);
	function t(t, n) {
		return e.call(this, `The intl string context variable "${t}" was not provided to the string "${n}"`, ct.MISSING_VALUE, n) || this;
	}
	return t;
}(lt), k;
(function(e) {
	e[e.literal = 0] = "literal", e[e.object = 1] = "object";
})(k ||= {});
function pt(e) {
	return e.length < 2 ? e : e.reduce(function(e, t) {
		var n = e[e.length - 1];
		return !n || n.type !== k.literal || t.type !== k.literal ? e.push(t) : n.value += t.value, e;
	}, []);
}
function mt(e) {
	return typeof e == "function";
}
function ht(e, t, n, r, i, a, o) {
	if (e.length === 1 && E(e[0])) return [{
		type: k.literal,
		value: e[0].value
	}];
	for (var s = [], c = 0, l = e; c < l.length; c++) {
		var u = l[c];
		if (E(u)) s.push({
			type: k.literal,
			value: u.value
		});
		else if (pe(u)) typeof a == "number" && s.push({
			type: k.literal,
			value: n.getNumberFormat(t).format(a)
		});
		else {
			var d = u.value;
			if (!(i && d in i)) throw new ft(d, o);
			var f = i[d];
			if (ce(u)) f && typeof f != "string" && typeof f != "number" || (f = typeof f == "string" || typeof f == "number" ? String(f) : ""), s.push({
				type: typeof f == "string" ? k.literal : k.object,
				value: f
			});
			else if (ue(u)) {
				var p = typeof u.style == "string" ? r.date[u.style] : ge(u.style) ? u.style.parsedOptions : void 0;
				s.push({
					type: k.literal,
					value: n.getDateTimeFormat(t, p).format(f)
				});
			} else if (de(u)) {
				var p = typeof u.style == "string" ? r.time[u.style] : ge(u.style) ? u.style.parsedOptions : r.time.medium;
				s.push({
					type: k.literal,
					value: n.getDateTimeFormat(t, p).format(f)
				});
			} else if (le(u)) {
				var p = typeof u.style == "string" ? r.number[u.style] : he(u.style) ? u.style.parsedOptions : void 0;
				p && p.scale && (f *= p.scale || 1), s.push({
					type: k.literal,
					value: n.getNumberFormat(t, p).format(f)
				});
			} else {
				if (me(u)) {
					var m = u.children, h = u.value, g = i[h];
					if (!mt(g)) throw new dt(h, "function", o);
					var _ = g(ht(m, t, n, r, i, a).map(function(e) {
						return e.value;
					}));
					Array.isArray(_) || (_ = [_]), s.push.apply(s, _.map(function(e) {
						return {
							type: typeof e == "string" ? k.literal : k.object,
							value: e
						};
					}));
				}
				if (D(u)) {
					var v = u.options[f] || u.options.other;
					if (!v) throw new ut(u.value, f, Object.keys(u.options), o);
					s.push.apply(s, ht(v.value, t, n, r, i));
				} else if (fe(u)) {
					var v = u.options[`=${f}`];
					if (!v) {
						if (!Intl.PluralRules) throw new lt("Intl.PluralRules is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-pluralrules\"\n", ct.MISSING_INTL_API, o);
						var y = n.getPluralRules(t, { type: u.pluralType }).select(f - (u.offset || 0));
						v = u.options[y] || u.options.other;
					}
					if (!v) throw new ut(u.value, f, Object.keys(u.options), o);
					s.push.apply(s, ht(v.value, t, n, r, i, f - (u.offset || 0)));
				}
			}
		}
	}
	return pt(s);
}
// node_modules/.pnpm/intl-messageformat@10.7.7/node_modules/intl-messageformat/lib/src/core.js
function gt(e, t) {
	return t ? d(d(d({}, e || {}), t || {}), Object.keys(e).reduce(function(n, r) {
		return n[r] = d(d({}, e[r]), t[r] || {}), n;
	}, {})) : e;
}
function _t(e, t) {
	return t ? Object.keys(e).reduce(function(n, r) {
		return n[r] = gt(e[r], t[r]), n;
	}, d({}, e)) : e;
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
function yt(e) {
	return e === void 0 && (e = {
		number: {},
		dateTime: {},
		pluralRules: {}
	}), {
		getNumberFormat: v(function() {
			var e, t = [...arguments];
			return new ((e = Intl.NumberFormat).bind.apply(e, _([void 0], t, !1)))();
		}, {
			cache: vt(e.number),
			strategy: C.variadic
		}),
		getDateTimeFormat: v(function() {
			var e, t = [...arguments];
			return new ((e = Intl.DateTimeFormat).bind.apply(e, _([void 0], t, !1)))();
		}, {
			cache: vt(e.dateTime),
			strategy: C.variadic
		}),
		getPluralRules: v(function() {
			var e, t = [...arguments];
			return new ((e = Intl.PluralRules).bind.apply(e, _([void 0], t, !1)))();
		}, {
			cache: vt(e.pluralRules),
			strategy: C.variadic
		})
	};
}
var bt = function() {
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
				return !e.length || t.type !== k.literal || typeof e[e.length - 1] != "string" ? e.push(t.value) : e[e.length - 1] += t.value, e;
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
			var s = f(o, ["formatters"]);
			this.ast = e.__parse(t, d(d({}, s), { locale: this.resolvedLocale }));
		} else this.ast = t;
		if (!Array.isArray(this.ast)) throw TypeError("A message must be provided as a String or AST.");
		this.formats = _t(e.formats, r), this.formatters = i && i.formatters || yt(this.formatterCache);
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
	}, e.__parse = st, e.formats = {
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
}(), xt;
(function(e) {
	e.FORMAT_ERROR = "FORMAT_ERROR", e.UNSUPPORTED_FORMATTER = "UNSUPPORTED_FORMATTER", e.INVALID_CONFIG = "INVALID_CONFIG", e.MISSING_DATA = "MISSING_DATA", e.MISSING_TRANSLATION = "MISSING_TRANSLATION";
})(xt ||= {});
var St = function(e) {
	u(t, e);
	function t(n, r, i) {
		var a = this, o = i ? i instanceof Error ? i : Error(String(i)) : void 0;
		return a = e.call(this, `[@formatjs/intl Error ${n}] ${r}
${o ? `
${o.message}
${o.stack}` : ""}`) || this, a.code = n, typeof Error.captureStackTrace == "function" && Error.captureStackTrace(a, t), a;
	}
	return t;
}(Error), Ct = function(e) {
	u(t, e);
	function t(t, n) {
		return e.call(this, xt.UNSUPPORTED_FORMATTER, t, n) || this;
	}
	return t;
}(St), wt = function(e) {
	u(t, e);
	function t(t, n) {
		return e.call(this, xt.INVALID_CONFIG, t, n) || this;
	}
	return t;
}(St), Tt = function(e) {
	u(t, e);
	function t(t, n) {
		return e.call(this, xt.MISSING_DATA, t, n) || this;
	}
	return t;
}(St), A = function(e) {
	u(t, e);
	function t(t, n, r) {
		var i = e.call(this, xt.FORMAT_ERROR, `${t}
Locale: ${n}
`, r) || this;
		return i.locale = n, i;
	}
	return t;
}(St), Et = function(e) {
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
}(A), Dt = function(e) {
	u(t, e);
	function t(t, n) {
		var r = e.call(this, xt.MISSING_TRANSLATION, `Missing message: "${t.id}" for locale "${n}", using ${t.defaultMessage ? `default message (${typeof t.defaultMessage == "string" ? t.defaultMessage : t.defaultMessage.map(function(e) {
			return e.value ?? JSON.stringify(e);
		}).join()})` : "id"} as fallback.`) || this;
		return r.descriptor = t, r;
	}
	return t;
}(St);
// node_modules/.pnpm/@formatjs+intl@2.10.15_typescript@5.9.3/node_modules/@formatjs/intl/lib/src/utils.js
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
	var t = Intl.RelativeTimeFormat, n = Intl.ListFormat, r = Intl.DisplayNames, i = v(function() {
		var e, t = [...arguments];
		return new ((e = Intl.DateTimeFormat).bind.apply(e, _([void 0], t, !1)))();
	}, {
		cache: jt(e.dateTime),
		strategy: C.variadic
	}), a = v(function() {
		var e, t = [...arguments];
		return new ((e = Intl.NumberFormat).bind.apply(e, _([void 0], t, !1)))();
	}, {
		cache: jt(e.number),
		strategy: C.variadic
	}), o = v(function() {
		var e, t = [...arguments];
		return new ((e = Intl.PluralRules).bind.apply(e, _([void 0], t, !1)))();
	}, {
		cache: jt(e.pluralRules),
		strategy: C.variadic
	});
	return {
		getDateTimeFormat: i,
		getNumberFormat: a,
		getMessageFormat: v(function(e, t, n, r) {
			return new bt(e, t, n, d({ formatters: {
				getNumberFormat: a,
				getDateTimeFormat: i,
				getPluralRules: o
			} }, r || {}));
		}, {
			cache: jt(e.message),
			strategy: C.variadic
		}),
		getRelativeTimeFormat: v(function() {
			var e = [...arguments];
			return new (t.bind.apply(t, _([void 0], e, !1)))();
		}, {
			cache: jt(e.relativeTime),
			strategy: C.variadic
		}),
		getPluralRules: o,
		getListFormat: v(function() {
			var e = [...arguments];
			return new (n.bind.apply(n, _([void 0], e, !1)))();
		}, {
			cache: jt(e.list),
			strategy: C.variadic
		}),
		getDisplayNames: v(function() {
			var e = [...arguments];
			return new (r.bind.apply(r, _([void 0], e, !1)))();
		}, {
			cache: jt(e.displayNames),
			strategy: C.variadic
		})
	};
}
function Nt(e, t, n, r) {
	var i = e && e[t], a;
	if (i && (a = i[n]), a) return a;
	r(new Ct(`No ${t} format named: ${n}`));
}
// node_modules/.pnpm/@formatjs+intl@2.10.15_typescript@5.9.3/node_modules/@formatjs/intl/lib/src/message.js
function Pt(e, t) {
	return Object.keys(e).reduce(function(n, r) {
		return n[r] = d({ timeZone: t }, e[r]), n;
	}, {});
}
function Ft(e, t) {
	return Object.keys(d(d({}, e), t)).reduce(function(n, r) {
		return n[r] = d(d({}, e[r] || {}), t[r] || {}), n;
	}, {});
}
function It(e, t) {
	if (!t) return e;
	var n = bt.formats;
	return d(d(d({}, n), e), {
		date: Ft(Pt(n.date, t), Pt(e.date || {}, t)),
		time: Ft(Pt(n.time, t), Pt(e.time || {}, t))
	});
}
var Lt = function(e, t, n, r, i) {
	var a = e.locale, o = e.formats, s = e.messages, c = e.defaultLocale, l = e.defaultFormats, u = e.fallbackOnEmptyString, f = e.onError, p = e.timeZone, m = e.defaultRichTextElements;
	n === void 0 && (n = { id: "" });
	var h = n.id, g = n.defaultMessage;
	oe(!!h, "[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue");
	var _ = String(h), v = s && Object.prototype.hasOwnProperty.call(s, _) && s[_];
	if (Array.isArray(v) && v.length === 1 && v[0].type === T.literal) return v[0].value;
	if (!r && v && typeof v == "string" && !m) return v.replace(/'\{(.*?)\}'/gi, "{$1}");
	if (r = d(d({}, m), r || {}), o = It(o, p), l = It(l, p), !v) {
		if (u === !1 && v === "") return v;
		if ((!g || a && a.toLowerCase() !== c.toLowerCase()) && f(new Dt(n, a)), g) try {
			var y = t.getMessageFormat(g, c, l, i);
			return y.format(r);
		} catch (e) {
			return f(new Et(`Error formatting default message for: "${_}", rendering default message verbatim`, a, n, e)), typeof g == "string" ? g : _;
		}
		return _;
	}
	try {
		var y = t.getMessageFormat(v, a, o, d({ formatters: t }, i || {}));
		return y.format(r);
	} catch (e) {
		f(new Et(`Error formatting message: "${_}", using ${g ? "default message" : "id"} as fallback.`, a, n, e));
	}
	if (g) try {
		var y = t.getMessageFormat(g, c, l, i);
		return y.format(r);
	} catch (e) {
		f(new Et(`Error formatting the default message for: "${_}", rendering message verbatim`, a, n, e));
	}
	return typeof v == "string" ? v : typeof g == "string" ? g : _;
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
	var c = r.format, l = d(d({}, s && { timeZone: s }), c && Nt(a, t, c, o)), u = Ot(r, Rt, l);
	return t !== "time" || u.hour || u.minute || u.second || u.timeStyle || u.dateStyle || (u = d(d({}, u), {
		hour: "numeric",
		minute: "numeric"
	})), n(i, u);
}
function Bt(e, t) {
	var n = [...arguments].slice(2), r = n[0], i = n[1], a = i === void 0 ? {} : i, o = typeof r == "string" ? new Date(r || 0) : r;
	try {
		return zt(e, "date", t, a).format(o);
	} catch (t) {
		e.onError(new A("Error formatting date.", e.locale, t));
	}
	return String(o);
}
function Vt(e, t) {
	var n = [...arguments].slice(2), r = n[0], i = n[1], a = i === void 0 ? {} : i, o = typeof r == "string" ? new Date(r || 0) : r;
	try {
		return zt(e, "time", t, a).format(o);
	} catch (t) {
		e.onError(new A("Error formatting time.", e.locale, t));
	}
	return String(o);
}
function Ht(e, t) {
	var n = [...arguments].slice(2), r = n[0], i = n[1], a = n[2], o = a === void 0 ? {} : a, s = e.timeZone, c = e.locale, l = e.onError, u = Ot(o, Rt, s ? { timeZone: s } : {});
	try {
		return t(c, u).formatRange(r, i);
	} catch (t) {
		l(new A("Error formatting date time range.", e.locale, t));
	}
	return String(r);
}
function Ut(e, t) {
	var n = [...arguments].slice(2), r = n[0], i = n[1], a = i === void 0 ? {} : i, o = typeof r == "string" ? new Date(r || 0) : r;
	try {
		return zt(e, "date", t, a).formatToParts(o);
	} catch (t) {
		e.onError(new A("Error formatting date.", e.locale, t));
	}
	return [];
}
function Wt(e, t) {
	var n = [...arguments].slice(2), r = n[0], i = n[1], a = i === void 0 ? {} : i, o = typeof r == "string" ? new Date(r || 0) : r;
	try {
		return zt(e, "time", t, a).formatToParts(o);
	} catch (t) {
		e.onError(new A("Error formatting time.", e.locale, t));
	}
	return [];
}
// node_modules/.pnpm/@formatjs+intl@2.10.15_typescript@5.9.3/node_modules/@formatjs/intl/lib/src/displayName.js
var Gt = [
	"style",
	"type",
	"fallback",
	"languageDisplay"
];
function Kt(e, t, n, r) {
	var i = e.locale, a = e.onError;
	Intl.DisplayNames || a(new lt("Intl.DisplayNames is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-displaynames\"\n", ct.MISSING_INTL_API));
	var o = Ot(r, Gt);
	try {
		return t(i, o).of(n);
	} catch (e) {
		a(new A("Error formatting display name.", i, e));
	}
}
// node_modules/.pnpm/@formatjs+intl@2.10.15_typescript@5.9.3/node_modules/@formatjs/intl/lib/src/list.js
var qt = ["type", "style"], Jt = Date.now();
function Yt(e) {
	return `${Jt}_${e}_${Jt}`;
}
function Xt(e, t, n, r) {
	r === void 0 && (r = {});
	var i = j(e, t, n, r).reduce(function(e, t) {
		var n = t.value;
		return typeof n == "string" && typeof e[e.length - 1] == "string" ? e[e.length - 1] += n : e.push(n), e;
	}, []);
	return i.length === 1 ? i[0] : i.length === 0 ? "" : i;
}
function j(e, t, n, r) {
	var i = e.locale, a = e.onError;
	r === void 0 && (r = {}), Intl.ListFormat || a(new lt("Intl.ListFormat is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-listformat\"\n", ct.MISSING_INTL_API));
	var o = Ot(r, qt);
	try {
		var s = {}, c = n.map(function(e, t) {
			if (typeof e == "object") {
				var n = Yt(t);
				return s[n] = e, n;
			}
			return String(e);
		});
		return t(i, o).formatToParts(c).map(function(e) {
			return e.type === "literal" ? e : d(d({}, e), { value: s[e.value] || e.value });
		});
	} catch (e) {
		a(new A("Error formatting list.", i, e));
	}
	return n;
}
// node_modules/.pnpm/@formatjs+intl@2.10.15_typescript@5.9.3/node_modules/@formatjs/intl/lib/src/plural.js
var Zt = ["type"];
function Qt(e, t, n, r) {
	var i = e.locale, a = e.onError;
	r === void 0 && (r = {}), Intl.PluralRules || a(new lt("Intl.PluralRules is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-pluralrules\"\n", ct.MISSING_INTL_API));
	var o = Ot(r, Zt);
	try {
		return t(i, o).select(n);
	} catch (e) {
		a(new A("Error formatting plural.", i, e));
	}
	return "other";
}
// node_modules/.pnpm/@formatjs+intl@2.10.15_typescript@5.9.3/node_modules/@formatjs/intl/lib/src/relativeTime.js
var $t = ["numeric", "style"];
function en(e, t, n) {
	var r = e.locale, i = e.formats, a = e.onError;
	n === void 0 && (n = {});
	var o = n.format, s = !!o && Nt(i, "relative", o, a) || {};
	return t(r, Ot(n, $t, s));
}
function tn(e, t, n, r, i) {
	i === void 0 && (i = {}), r ||= "second", Intl.RelativeTimeFormat || e.onError(new lt("Intl.RelativeTimeFormat is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-relativetimeformat\"\n", ct.MISSING_INTL_API));
	try {
		return en(e, t, i).format(n, r);
	} catch (t) {
		e.onError(new A("Error formatting relative time.", e.locale, t));
	}
	return String(n);
}
// node_modules/.pnpm/@formatjs+intl@2.10.15_typescript@5.9.3/node_modules/@formatjs/intl/lib/src/number.js
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
		e.onError(new A("Error formatting number.", e.locale, t));
	}
	return String(n);
}
function on(e, t, n, r) {
	r === void 0 && (r = {});
	try {
		return rn(e, t, r).formatToParts(n);
	} catch (t) {
		e.onError(new A("Error formatting number.", e.locale, t));
	}
	return [];
}
// node_modules/.pnpm/@formatjs+intl@2.10.15_typescript@5.9.3/node_modules/@formatjs/intl/lib/src/create-intl.js
function sn(e) {
	return typeof (e ? e[Object.keys(e)[0]] : void 0) == "string";
}
function cn(e) {
	e.onWarn && e.defaultRichTextElements && sn(e.messages || {}) && e.onWarn("[@formatjs/intl] \"defaultRichTextElements\" was specified but \"message\" was not pre-compiled. \nPlease consider using \"@formatjs/cli\" to pre-compile your messages for performance.\nFor more details see https://formatjs.io/docs/getting-started/message-distribution");
}
function ln(e, t) {
	var n = Mt(t), r = d(d({}, kt), e), i = r.locale, a = r.defaultLocale, o = r.onError;
	return i ? !Intl.NumberFormat.supportedLocalesOf(i).length && o ? o(new Tt(`Missing locale data for locale: "${i}" in Intl.NumberFormat. Using default locale: "${a}" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details`)) : !Intl.DateTimeFormat.supportedLocalesOf(i).length && o && o(new Tt(`Missing locale data for locale: "${i}" in Intl.DateTimeFormat. Using default locale: "${a}" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details`)) : (o && o(new wt(`"locale" was not configured, using "${a}" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details`)), r.locale = r.defaultLocale || "en"), cn(r), d(d({}, r), {
		formatters: n,
		formatNumber: an.bind(null, r, n.getNumberFormat),
		formatNumberToParts: on.bind(null, r, n.getNumberFormat),
		formatRelativeTime: tn.bind(null, r, n.getRelativeTimeFormat),
		formatDate: Bt.bind(null, r, n.getDateTimeFormat),
		formatDateToParts: Ut.bind(null, r, n.getDateTimeFormat),
		formatTime: Vt.bind(null, r, n.getDateTimeFormat),
		formatDateTimeRange: Ht.bind(null, r, n.getDateTimeFormat),
		formatTimeToParts: Wt.bind(null, r, n.getDateTimeFormat),
		formatPlural: Qt.bind(null, r, n.getPluralRules),
		formatMessage: Lt.bind(null, r, n),
		$t: Lt.bind(null, r, n),
		formatList: Xt.bind(null, r, n.getListFormat),
		formatListToParts: j.bind(null, r, n.getListFormat),
		formatDisplayName: Kt.bind(null, r, n.getDisplayNames)
	});
}
// node_modules/.pnpm/react-intl@6.8.9_react@18.3.1_typescript@5.9.3/node_modules/react-intl/lib/src/utils.js
var M = /* @__PURE__ */ e(r());
function un(e) {
	oe(e, "[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.");
}
var dn = d(d({}, kt), { textComponent: M.Fragment });
function fn(e) {
	return function(t) {
		return e(M.Children.toArray(t));
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
// node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/cjs/react-is.production.min.js
var mn = /* @__PURE__ */ t(((e) => {
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
})), hn = /* @__PURE__ */ t(((e, t) => {
	t.exports = mn();
})), gn = /* @__PURE__ */ t(((e, t) => {
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
var _n = typeof window < "u" && !window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__ ? window.__REACT_INTL_CONTEXT__ || (window.__REACT_INTL_CONTEXT__ = M.createContext(null)) : M.createContext(null);
_n.Consumer;
var vn = _n.Provider, yn = _n;
// node_modules/.pnpm/react-intl@6.8.9_react@18.3.1_typescript@5.9.3/node_modules/react-intl/lib/src/components/createIntl.js
function bn(e) {
	return e && Object.keys(e).reduce(function(t, n) {
		var r = e[n];
		return t[n] = mt(r) ? fn(r) : r, t;
	}, {});
}
var xn = function(e, t, n, r) {
	var i = [...arguments].slice(4), a = bn(r), o = Lt.apply(void 0, _([
		e,
		t,
		n,
		a
	], i, !1));
	return Array.isArray(o) ? M.Children.toArray(o) : o;
}, Sn = function(e, t) {
	var n = e.defaultRichTextElements, r = f(e, ["defaultRichTextElements"]), i = bn(n), a = ln(d(d(d({}, dn), r), { defaultRichTextElements: i }), t), o = {
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
		return t.cache = At(), t.state = {
			cache: t.cache,
			intl: Sn(Cn(t.props), t.cache),
			prevConfig: Cn(t.props)
		}, t;
	}
	return t.getDerivedStateFromProps = function(e, t) {
		var n = t.prevConfig, r = t.cache, i = Cn(e);
		return pn(n, i) ? null : {
			intl: Sn(i, r),
			prevConfig: i
		};
	}, t.prototype.render = function() {
		return un(this.state.intl), M.createElement(vn, { value: this.state.intl }, this.props.children);
	}, t.displayName = "IntlProvider", t.defaultProps = dn, t;
}(M.PureComponent), Tn = /* @__PURE__ */ t(((e) => {
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
})), En = /* @__PURE__ */ t(((e, t) => {
	t.exports = Tn();
})), Dn = c(), On = En(), kn = (0, M.createContext)({
	runtime: {
		handlerUrl() {
			return "";
		},
		notify() {}
	},
	element: document.createElement("div")
}), An = (e) => {
	let t = (0, M.useContext)(kn);
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
	}), (0, Dn.createRoot)(c).render(/* @__PURE__ */ (0, On.jsx)(M.StrictMode, { children: /* @__PURE__ */ (0, On.jsx)(kn.Provider, {
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
function zn() {
	return zn = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, zn.apply(null, arguments);
}
// node_modules/.pnpm/@babel+runtime@7.29.14/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function Bn(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/ThemeProvider.js
var Vn = /* @__PURE__ */ e(Rn()), Hn = /*#__PURE__*/ M.createContext({});
Hn.Consumer, Hn.Provider;
function Un(e, t) {
	var n = (0, M.useContext)(Hn);
	return e || n[t] || t;
}
// node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/lib/ReactPropTypesSecret.js
var Wn = /* @__PURE__ */ t(((e, t) => {
	t.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
})), Gn = /* @__PURE__ */ t(((e, t) => {
	var n = Wn();
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
})), Kn = /* @__PURE__ */ t(((e, t) => {
	t.exports = Gn()();
}));
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/createChainedFunction.js
function qn() {
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
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/SafeAnchor.js
var Jn = [
	"as",
	"disabled",
	"onKeyDown"
];
function Yn(e) {
	return !e || e.trim() === "#";
}
var Xn = /*#__PURE__*/ M.forwardRef(function(e, t) {
	var n = e.as, r = n === void 0 ? "a" : n, i = e.disabled, a = e.onKeyDown, o = Bn(e, Jn), s = function(e) {
		var t = o.href, n = o.onClick;
		(i || Yn(t)) && e.preventDefault(), i ? e.stopPropagation() : n && n(e);
	};
	return Yn(o.href) && (o.role = o.role || "button", o.href = o.href || "#"), i && (o.tabIndex = -1, o["aria-disabled"] = !0), /*#__PURE__*/ M.createElement(r, zn({ ref: t }, o, {
		onClick: s,
		onKeyDown: qn(function(e) {
			e.key === " " && (e.preventDefault(), s(e));
		}, a)
	}));
});
Xn.displayName = "SafeAnchor";
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Button.js
var Zn = [
	"bsPrefix",
	"variant",
	"size",
	"active",
	"className",
	"block",
	"type",
	"as"
], Qn = {
	variant: "primary",
	active: !1,
	disabled: !1
}, $n = /*#__PURE__*/ M.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.variant, i = e.size, a = e.active, o = e.className, s = e.block, c = e.type, l = e.as, u = Bn(e, Zn), d = Un(n, "btn"), f = (0, Vn.default)(o, d, a && "active", r && d + "-" + r, s && d + "-block", i && d + "-" + i);
	if (u.href) return /*#__PURE__*/ M.createElement(Xn, zn({}, u, {
		as: l,
		ref: t,
		className: (0, Vn.default)(f, u.disabled && "disabled")
	}));
	t && (u.ref = t), c ? u.type = c : l || (u.type = "button");
	var p = l || "button";
	return /*#__PURE__*/ M.createElement(p, zn({}, u, { className: f }));
});
$n.displayName = "Button", $n.defaultProps = Qn;
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Col.js
var er = [
	"bsPrefix",
	"className",
	"as"
], tr = [
	"xl",
	"lg",
	"md",
	"sm",
	"xs"
], nr = /*#__PURE__*/ M.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.className, i = e.as, a = i === void 0 ? "div" : i, o = Bn(e, er), s = Un(n, "col"), c = [], l = [];
	return tr.forEach(function(e) {
		var t = o[e];
		delete o[e];
		var n, r, i;
		if (typeof t == "object" && t) {
			var a = t.span;
			n = a === void 0 || a, r = t.offset, i = t.order;
		} else n = t;
		var u = e === "xs" ? "" : "-" + e;
		n && c.push(n === !0 ? "" + s + u : "" + s + u + "-" + n), i != null && l.push("order" + u + "-" + i), r != null && l.push("offset" + u + "-" + r);
	}), c.length || c.push(s), /*#__PURE__*/ M.createElement(a, zn({}, o, {
		ref: t,
		className: Vn.default.apply(void 0, [r].concat(c, l))
	}));
});
nr.displayName = "Col";
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/utils/newId.js
var rr = 0, ir = (e = "id") => (rr += 1, `${e}${rr}`);
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Icon/index.js
function ar({ src: e, id: t, className: n, hidden: r = !0, screenReaderText: i, svgAttrs: a = {}, size: o, ...s }) {
	if (e) {
		let r = a["aria-label"] || a["aria-labelledby"], c = { ...a };
		return r || (c["aria-label"] = void 0, c["aria-hidden"] = !0), /*#__PURE__*/ M.createElement("span", {
			className: (0, Vn.default)("pgn__icon", { [`pgn__icon__${o}`]: !!o }, n),
			id: t,
			...s
		}, /*#__PURE__*/ M.createElement(e, {
			role: "img",
			focusable: !1,
			...c
		}), i && /*#__PURE__*/ M.createElement("span", { className: "sr-only" }, i));
	}
	return /*#__PURE__*/ M.createElement(M.Fragment, null, /*#__PURE__*/ M.createElement("span", {
		id: t || ir("Icon"),
		className: n,
		"aria-hidden": r
	}), i && /*#__PURE__*/ M.createElement("span", { className: "sr-only" }, i));
}
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Button/index.js
var or = /*#__PURE__*/ M.forwardRef(({ children: e, iconAfter: t, iconBefore: n, size: r, ...i }, a) => /*#__PURE__*/ M.createElement($n, {
	size: r,
	...i,
	className: (0, Vn.default)(i.className),
	ref: a
}, n && /*#__PURE__*/ M.createElement(ar, {
	className: "btn-icon-before",
	size: r,
	src: n
}), e, t && /*#__PURE__*/ M.createElement(ar, {
	className: "btn-icon-after",
	size: r,
	src: t
}))), sr = /*#__PURE__*/ (0, M.forwardRef)(({ direction: e = "vertical", gap: t = 0, reversed: n = !1, children: r, className: i, ...a }, o) => /*#__PURE__*/ M.createElement("div", {
	ref: o,
	className: (0, Vn.default)(e === "horizontal" ? "pgn__hstack" : "pgn__vstack", t ? `pgn__stack-gap--${t}` : "", n ? "pgn__stack-reversed" : "", i),
	...a
}, r));
export { g as A, pn as C, h as D, m as E, r as M, f as O, un as S, p as T, Ln as _, nr as a, yn as b, Kn as c, zn as d, Rn as f, Mn as g, Pn as h, ir as i, s as j, _ as k, Un as l, In as m, or as n, $n as o, kn as p, ar as r, Xn as s, sr as t, Bn as u, An as v, d as w, gn as x, En as y };
