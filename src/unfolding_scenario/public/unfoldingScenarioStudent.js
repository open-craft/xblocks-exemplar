import { n as e } from "./rolldown-runtime-CYdcPHCu.js";
import { C as t, E as n, S as r, T as i, a, c as o, d as s, f as c, h as l, i as u, l as d, m as f, n as p, p as m, r as h, t as g, u as _, v, w as y, x as b } from "./IconButton-BcHkVa3s.js";
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Container.js
var x = /* @__PURE__ */ e(f()), S = /* @__PURE__ */ e(n()), C = [
	"bsPrefix",
	"fluid",
	"as",
	"className"
], ee = { fluid: !1 }, w = /*#__PURE__*/ S.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.fluid, i = e.as, a = i === void 0 ? "div" : i, o = e.className, s = c(e, C), l = _(n, "container"), u = typeof r == "string" ? "-" + r : "-fluid";
	return /*#__PURE__*/ S.createElement(a, m({ ref: t }, s, { className: (0, x.default)(o, r ? "" + l + u : l) }));
});
w.displayName = "Container", w.defaultProps = ee;
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Image.js
var T = /* @__PURE__ */ e(d()), te = [
	"bsPrefix",
	"className",
	"fluid",
	"rounded",
	"roundedCircle",
	"thumbnail"
];
T.default.string, T.default.bool, T.default.bool, T.default.bool, T.default.bool;
var E = {
	fluid: !1,
	rounded: !1,
	roundedCircle: !1,
	thumbnail: !1
}, D = /*#__PURE__*/ S.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.className, i = e.fluid, a = e.rounded, o = e.roundedCircle, s = e.thumbnail, l = c(e, te);
	n = _(n, "img");
	var u = (0, x.default)(i && n + "-fluid", a && "rounded", o && "rounded-circle", s && n + "-thumbnail");
	return /*#__PURE__*/ S.createElement("img", m({ ref: t }, l, { className: (0, x.default)(r, u) }));
});
D.displayName = "Image", D.defaultProps = E;
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Row.js
var ne = [
	"bsPrefix",
	"className",
	"noGutters",
	"as"
], re = [
	"xl",
	"lg",
	"md",
	"sm",
	"xs"
], ie = { noGutters: !1 }, O = /*#__PURE__*/ S.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.className, i = e.noGutters, a = e.as, o = a === void 0 ? "div" : a, s = c(e, ne), l = _(n, "row"), u = l + "-cols", d = [];
	return re.forEach(function(e) {
		var t = s[e];
		delete s[e];
		var n = typeof t == "object" && t ? t.cols : t, r = e === "xs" ? "" : "-" + e;
		n != null && d.push("" + u + r + "-" + n);
	}), /*#__PURE__*/ S.createElement(o, m({ ref: t }, s, { className: x.default.apply(void 0, [
		r,
		l,
		i && "no-gutters"
	].concat(d)) }));
});
O.displayName = "Row", O.defaultProps = ie;
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/utils/breakpoints.js
var { sm: k, md: A, lg: ae, xl: oe, xxl: se } = {
	xs: "0",
	sm: "576px",
	md: "768px",
	lg: "992px",
	xl: "1200px",
	xxl: "1400px"
}, j = {
	extraSmall: { maxWidth: parseFloat(k) || 575.98 },
	small: {
		minWidth: parseFloat(k) || 576,
		maxWidth: parseFloat(A) || 767.98
	},
	medium: {
		minWidth: parseFloat(A) || 768,
		maxWidth: parseFloat(ae) || 991.98
	},
	large: {
		minWidth: parseFloat(ae) || 992,
		maxWidth: parseFloat(oe) || 1199.98
	},
	extraLarge: {
		minWidth: parseFloat(oe) || 1200,
		maxWidth: parseFloat(se) || 1399.98
	},
	extraExtraLarge: { minWidth: parseFloat(se) || 1400 }
};
Object.freeze({
	xs: "extraSmall",
	sm: "small",
	md: "medium",
	lg: "large",
	xl: "extraLarge",
	xxl: "extraExtraLarge"
});
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/icons/es5/ArrowForward.js
var ce = (e) => /*#__PURE__*/ S.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /*#__PURE__*/ S.createElement("path", {
	d: "m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8Z",
	fill: "currentColor"
})), M = (e) => /*#__PURE__*/ S.createElement("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	...e
}, /*#__PURE__*/ S.createElement("path", {
	d: "M6 6v2h8.59L5 17.59 6.41 19 16 9.41V18h2V6z",
	fill: "currentColor"
})), le = (e) => /*#__PURE__*/ S.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /*#__PURE__*/ S.createElement("path", {
	d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8-1.41-1.42Z",
	fill: "currentColor"
})), ue = (e) => /*#__PURE__*/ S.createElement("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	...e
}, /*#__PURE__*/ S.createElement("path", {
	d: "M19 7v4H5.83l3.58-3.59L8 6l-6 6 6 6 1.41-1.41L5.83 13H21V7h-2z",
	fill: "currentColor"
})), de = (e) => /*#__PURE__*/ S.createElement("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	...e
}, /*#__PURE__*/ S.createElement("path", {
	d: "M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z",
	fill: "currentColor"
})), fe = (e) => /*#__PURE__*/ S.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /*#__PURE__*/ S.createElement("path", {
	d: "M1 21h22L12 2 1 21Zm12-3h-2v-2h2v2Zm0-4h-2v-4h2v4Z",
	fill: "currentColor"
})), pe = /*#__PURE__*/ function(e) {
	return e.xs = "container-mw-xs", e.sm = "container-mw-sm", e.md = "container-mw-md", e.lg = "container-mw-lg", e.xl = "container-mw-xl", e;
}(pe || {}), N = /*#__PURE__*/ (0, S.forwardRef)(({ size: e, children: t, as: n = "div", bsPrefix: r = "container", fluid: i = !0, ...a }, o) => /*#__PURE__*/ S.createElement(w, {
	...a,
	as: n,
	bsPrefix: r,
	fluid: i,
	ref: o,
	className: (0, x.default)(a.className, e && pe[e])
}, t)), P = "right-scroll-bar-position", F = "width-before-scroll-bar", me = "with-scroll-bars-hidden", he = "--removed-body-scroll-bar-size";
// node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@18.3.31_react@18.3.1/node_modules/use-callback-ref/dist/es2015/assignRef.js
function ge(e, t) {
	return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
// node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@18.3.31_react@18.3.1/node_modules/use-callback-ref/dist/es2015/useRef.js
function _e(e, t) {
	var n = (0, S.useState)(function() {
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
// node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@18.3.31_react@18.3.1/node_modules/use-callback-ref/dist/es2015/useMergeRef.js
var ve = typeof window < "u" ? S.useLayoutEffect : S.useEffect, ye = /* @__PURE__ */ new WeakMap();
function be(e, t) {
	var n = _e(t || null, function(t) {
		return e.forEach(function(e) {
			return ge(e, t);
		});
	});
	return ve(function() {
		var t = ye.get(n);
		if (t) {
			var r = new Set(t), i = new Set(e), a = n.current;
			r.forEach(function(e) {
				i.has(e) || ge(e, null);
			}), i.forEach(function(e) {
				r.has(e) || ge(e, a);
			});
		}
		ye.set(n, e);
	}, [e]), n;
}
// node_modules/.pnpm/use-sidecar@1.1.3_@types+react@18.3.31_react@18.3.1/node_modules/use-sidecar/dist/es2015/medium.js
function xe(e) {
	return e;
}
function Se(e, t) {
	t === void 0 && (t = xe);
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
function Ce(e, t) {
	return t === void 0 && (t = xe), Se(e, t);
}
function we(e) {
	e === void 0 && (e = {});
	var t = Se(null);
	return t.options = b({
		async: !0,
		ssr: !1
	}, e), t;
}
// node_modules/.pnpm/use-sidecar@1.1.3_@types+react@18.3.31_react@18.3.1/node_modules/use-sidecar/dist/es2015/exports.js
var Te = function(e) {
	var t = e.sideCar, n = r(e, ["sideCar"]);
	if (!t) throw Error("Sidecar: please provide `sideCar` property to import the right car");
	var i = t.read();
	if (!i) throw Error("Sidecar medium not found");
	return S.createElement(i, b({}, n));
};
Te.isSideCarExport = !0;
function Ee(e, t) {
	return e.useMedium(t), Te;
}
// node_modules/.pnpm/react-remove-scroll@2.7.2_@types+react@18.3.31_react@18.3.1/node_modules/react-remove-scroll/dist/es2015/medium.js
var De = we(), Oe = function() {}, ke = S.forwardRef(function(e, t) {
	var n = S.useRef(null), i = S.useState({
		onScrollCapture: Oe,
		onWheelCapture: Oe,
		onTouchMoveCapture: Oe
	}), a = i[0], o = i[1], s = e.forwardProps, c = e.children, l = e.className, u = e.removeScrollBar, d = e.enabled, f = e.shards, p = e.sideCar, m = e.noRelative, h = e.noIsolation, g = e.inert, _ = e.allowPinchZoom, v = e.as, y = v === void 0 ? "div" : v, x = e.gapMode, C = r(e, [
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
	]), ee = p, w = be([n, t]), T = b(b({}, C), a);
	return S.createElement(S.Fragment, null, d && S.createElement(ee, {
		sideCar: De,
		removeScrollBar: u,
		shards: f,
		noRelative: m,
		noIsolation: h,
		inert: g,
		setCallbacks: o,
		allowPinchZoom: !!_,
		lockRef: n,
		gapMode: x
	}), s ? S.cloneElement(S.Children.only(c), b(b({}, T), { ref: w })) : S.createElement(y, b({}, T, {
		className: l,
		ref: w
	}), c));
});
ke.defaultProps = {
	enabled: !0,
	removeScrollBar: !0,
	inert: !1
}, ke.classNames = {
	fullWidth: F,
	zeroRight: P
};
// node_modules/.pnpm/focus-lock@1.3.6/node_modules/focus-lock/dist/es2015/constants.js
var Ae = "data-focus-lock", je = "data-focus-lock-disabled", Me = "data-no-focus-lock", Ne = "data-autofocus-inside", Pe = "data-no-autofocus", Fe = {
	width: "1px",
	height: "0px",
	padding: 0,
	overflow: "hidden",
	position: "fixed",
	top: "1px",
	left: "1px"
}, Ie = Ce({}, function(e) {
	return {
		target: e.target,
		currentTarget: e.currentTarget
	};
}), Le = Ce(), Re = Ce(), ze = we({
	async: !0,
	ssr: typeof document < "u"
}), Be = /*#__PURE__*/ (0, S.createContext)(void 0), Ve = [], He = /*#__PURE__*/ (0, S.forwardRef)(function(e, t) {
	var n, r = (0, S.useState)(), i = r[0], a = r[1], o = (0, S.useRef)(), s = (0, S.useRef)(!1), c = (0, S.useRef)(null), l = (0, S.useState)({})[1], u = e.children, d = e.disabled, f = d !== void 0 && d, p = e.noFocusGuards, h = p !== void 0 && p, g = e.persistentFocus, _ = g !== void 0 && g, v = e.crossFrame, y = v === void 0 || v, b = e.autoFocus, x = b === void 0 || b;
	e.allowTextSelection;
	var C = e.group, ee = e.className, w = e.whiteList, T = e.hasPositiveIndices, te = e.shards, E = te === void 0 ? Ve : te, D = e.as, ne = D === void 0 ? "div" : D, re = e.lockProps, ie = re === void 0 ? {} : re, O = e.sideCar, k = e.returnFocus, A = k !== void 0 && k, ae = e.focusOptions, oe = e.onActivation, se = e.onDeactivation, j = (0, S.useState)({})[0], ce = (0, S.useCallback)(function(e) {
		var t = e.captureFocusRestore;
		if (!c.current) {
			var n = document?.activeElement;
			c.current = n, n !== document.body && (c.current = t(n));
		}
		o.current && oe && oe(o.current), s.current = !0, l();
	}, [oe]), M = (0, S.useCallback)(function() {
		s.current = !1, se && se(o.current), l();
	}, [se]), le = (0, S.useCallback)(function(e) {
		var t = c.current;
		if (t) {
			var n = (typeof t == "function" ? t() : t) || document.body, r = typeof A == "function" ? A(n) : A;
			if (r) {
				var i = typeof r == "object" ? r : void 0;
				c.current = null, e ? Promise.resolve().then(function() {
					return n.focus(i);
				}) : n.focus(i);
			}
		}
	}, [A]), ue = (0, S.useCallback)(function(e) {
		s.current && Ie.useMedium(e);
	}, []), de = Le.useMedium, fe = (0, S.useCallback)(function(e) {
		o.current !== e && (o.current = e, a(e));
	}, []), pe = m((n = {}, n[je] = f && "disabled", n[Ae] = C, n), ie), N = h !== !0, P = N && h !== "tail", F = be([t, fe]), me = (0, S.useMemo)(function() {
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
	return /*#__PURE__*/ S.createElement(S.Fragment, null, N && [/*#__PURE__*/ S.createElement("div", {
		key: "guard-first",
		"data-focus-guard": !0,
		tabIndex: f ? -1 : 0,
		style: Fe
	}), T ? /*#__PURE__*/ S.createElement("div", {
		key: "guard-nearest",
		"data-focus-guard": !0,
		tabIndex: f ? -1 : 1,
		style: Fe
	}) : null], !f && /*#__PURE__*/ S.createElement(O, {
		id: j,
		sideCar: ze,
		observed: i,
		disabled: f,
		persistentFocus: _,
		crossFrame: y,
		autoFocus: x,
		whiteList: w,
		shards: E,
		onActivation: ce,
		onDeactivation: M,
		returnFocus: le,
		focusOptions: ae,
		noFocusGuards: h
	}), /*#__PURE__*/ S.createElement(ne, m({ ref: F }, pe, {
		className: ee,
		onBlur: de,
		onFocus: ue
	}), /*#__PURE__*/ S.createElement(Be.Provider, { value: me }, u)), P && /*#__PURE__*/ S.createElement("div", {
		"data-focus-guard": !0,
		tabIndex: f ? -1 : 0,
		style: Fe
	}));
});
He.propTypes = {};
// node_modules/.pnpm/react-focus-lock@2.13.7_@types+react@18.3.31_react@18.3.1/node_modules/react-focus-lock/dist/es2015/util.js
function Ue(e) {
	setTimeout(e, 1);
}
var We = function(e) {
	return e && "current" in e ? e.current : e;
}, Ge = He, Ke = we(), qe = "data-focus-on-hidden", Je = { preventScroll: !0 }, Ye = S.forwardRef(function(e, t) {
	var n = S.useState(!1), i = n[0], a = n[1], o = S.useState(null), s = o[0], c = o[1], l = e.children, u = e.autoFocus, d = e.shards, f = e.crossFrame, p = e.enabled, m = p === void 0 || p, h = e.scrollLock, g = h === void 0 || h, _ = e.focusLock, v = _ === void 0 || _, y = e.returnFocus, x = y === void 0 || y, C = e.inert, ee = e.allowPinchZoom, w = e.sideCar, T = e.className, te = e.shouldIgnore, E = e.preventScrollOnFocus, D = e.style, ne = e.as, re = e.gapMode, ie = r(e, [
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
	]), O = w, k = b(b({}, i), {
		as: ne,
		style: D,
		sideCar: w,
		shards: d,
		allowPinchZoom: ee,
		gapMode: re,
		inert: C,
		enabled: m && g
	}), A = S.useCallback(function(e) {
		c(e);
	}, []), ae = S.useCallback(function() {
		c(null);
	}, []);
	return S.createElement(S.Fragment, null, S.createElement(Ge, {
		ref: t,
		sideCar: w,
		disabled: !(m && v),
		returnFocus: x,
		autoFocus: u,
		shards: d,
		crossFrame: f,
		onActivation: A,
		onDeactivation: ae,
		className: T,
		whiteList: te,
		lockProps: k,
		focusOptions: E ? Je : void 0,
		as: ke
	}, l), m && S.createElement(O, b({}, ie, {
		sideCar: Ke,
		setLockProps: a,
		shards: d,
		activeNode: s
	})));
});
// node_modules/.pnpm/@babel+runtime@7.29.14/node_modules/@babel/runtime/helpers/esm/typeof.js
function I(e) {
	"@babel/helpers - typeof";
	return I = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, I(e);
}
// node_modules/.pnpm/@babel+runtime@7.29.14/node_modules/@babel/runtime/helpers/esm/toPrimitive.js
function Xe(e, t) {
	if (I(e) != "object" || !e) return e;
	var n;
	if (typeof Symbol < "u" && (n = e[Symbol.toPrimitive]) !== void 0) {
		var r = n.call(e, t || "default");
		if (I(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
// node_modules/.pnpm/@babel+runtime@7.29.14/node_modules/@babel/runtime/helpers/esm/toPropertyKey.js
function Ze(e) {
	var t = Xe(e, "string");
	return I(t) == "symbol" ? t : t + "";
}
// node_modules/.pnpm/@babel+runtime@7.29.14/node_modules/@babel/runtime/helpers/esm/defineProperty.js
function Qe(e, t, n) {
	return (t = Ze(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
// node_modules/.pnpm/react-clientside-effect@1.2.8_react@18.3.1/node_modules/react-clientside-effect/lib/index.es.js
function $e(e, t) {
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
		var c = /*#__PURE__*/ function(e) {
			s(t, e);
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
				return /*#__PURE__*/ S.createElement(r, this.props);
			}, t;
		}(S.PureComponent);
		return Qe(c, "displayName", "SideEffect(" + n(r) + ")"), c;
	};
}
// node_modules/.pnpm/focus-lock@1.3.6/node_modules/focus-lock/dist/es2015/utils/array.js
var L = function(e) {
	for (var t = Array(e.length), n = 0; n < e.length; ++n) t[n] = e[n];
	return t;
}, R = function(e) {
	return Array.isArray(e) ? e : [e];
}, et = function(e) {
	return Array.isArray(e) ? e[0] : e;
}, tt = function(e) {
	if (e.nodeType !== Node.ELEMENT_NODE) return !1;
	var t = window.getComputedStyle(e, null);
	return !t || !t.getPropertyValue ? !1 : t.getPropertyValue("display") === "none" || t.getPropertyValue("visibility") === "hidden";
}, nt = function(e) {
	return e.parentNode && e.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? e.parentNode.host : e.parentNode;
}, rt = function(e) {
	return e === document || e && e.nodeType === Node.DOCUMENT_NODE;
}, it = function(e) {
	return e.hasAttribute("inert");
}, at = function(e, t) {
	return !e || rt(e) || !tt(e) && !it(e) && t(nt(e));
}, ot = function(e, t) {
	var n = e.get(t);
	if (n !== void 0) return n;
	var r = at(t, ot.bind(void 0, e));
	return e.set(t, r), r;
}, st = function(e, t) {
	return e && !rt(e) ? mt(e) ? t(nt(e)) : !1 : !0;
}, ct = function(e, t) {
	var n = e.get(t);
	if (n !== void 0) return n;
	var r = st(t, ct.bind(void 0, e));
	return e.set(t, r), r;
}, lt = function(e) {
	return e.dataset;
}, ut = function(e) {
	return e.tagName === "BUTTON";
}, dt = function(e) {
	return e.tagName === "INPUT";
}, ft = function(e) {
	return dt(e) && e.type === "radio";
}, pt = function(e) {
	return !dt(e) && !ut(e) || e.type !== "hidden" && !e.disabled;
}, mt = function(e) {
	var t = e.getAttribute(Pe);
	return ![
		!0,
		"true",
		""
	].includes(t);
}, ht = function(e) {
	return !!(e && lt(e)?.focusGuard);
}, gt = function(e) {
	return !ht(e);
}, _t = function(e) {
	return !!e;
}, vt = function(e, t) {
	var n = Math.max(0, e.tabIndex), r = Math.max(0, t.tabIndex), i = n - r, a = e.index - t.index;
	if (i) {
		if (!n) return 1;
		if (!r) return -1;
	}
	return i || a;
}, yt = function(e) {
	return e.tabIndex < 0 && !e.hasAttribute("tabindex") ? 0 : e.tabIndex;
}, bt = function(e, t, n) {
	return L(e).map(function(e, t) {
		var r = yt(e);
		return {
			node: e,
			index: t,
			tabIndex: n && r === -1 ? (e.dataset || {}).focusGuard ? 0 : -1 : r
		};
	}).filter(function(e) {
		return !t || e.tabIndex >= 0;
	}).sort(vt);
}, xt = "button:enabled,select:enabled,textarea:enabled,input:enabled,a[href],area[href],summary,iframe,object,embed,audio[controls],video[controls],[tabindex],[contenteditable],[autofocus]", St = `${xt}, [data-focus-guard]`, Ct = function(e, t) {
	return L((e.shadowRoot || e).children).reduce(function(e, n) {
		return e.concat(n.matches(t ? St : xt) ? [n] : [], Ct(n));
	}, []);
}, wt = function(e, t) {
	return e instanceof HTMLIFrameElement && e.contentDocument?.body ? z([e.contentDocument.body], t) : [e];
}, z = function(e, t) {
	return e.reduce(function(e, n) {
		var r, i = Ct(n, t), a = (r = []).concat.apply(r, i.map(function(e) {
			return wt(e, t);
		}));
		return e.concat(a, n.parentNode ? L(n.parentNode.querySelectorAll(xt)).filter(function(e) {
			return e === n;
		}) : []);
	}, []);
}, Tt = function(e) {
	return L(e.querySelectorAll(`[${Ne}]`)).map(function(e) {
		return z([e]);
	}).reduce(function(e, t) {
		return e.concat(t);
	}, []);
}, Et = function(e, t) {
	return L(e).filter(function(e) {
		return ot(t, e);
	}).filter(function(e) {
		return pt(e);
	});
}, Dt = function(e, t) {
	return t === void 0 && (t = /* @__PURE__ */ new Map()), L(e).filter(function(e) {
		return ct(t, e);
	});
}, Ot = function(e, t, n) {
	return bt(Et(z(e, n), t), !0, n);
}, B = function(e, t) {
	return bt(Et(z(e), t), !1);
}, kt = function(e, t) {
	return Et(Tt(e), t);
}, V = function(e, t) {
	return e.shadowRoot ? V(e.shadowRoot, t) : Object.getPrototypeOf(e).contains !== void 0 && Object.getPrototypeOf(e).contains.call(e, t) ? !0 : L(e.children).some(function(e) {
		if (e instanceof HTMLIFrameElement) {
			var n = e.contentDocument?.body;
			return n ? V(n, t) : !1;
		}
		return V(e, t);
	});
}, At = function(e) {
	for (var t = /* @__PURE__ */ new Set(), n = e.length, r = 0; r < n; r += 1) for (var i = r + 1; i < n; i += 1) {
		var a = e[r].compareDocumentPosition(e[i]);
		(a & Node.DOCUMENT_POSITION_CONTAINED_BY) > 0 && t.add(i), (a & Node.DOCUMENT_POSITION_CONTAINS) > 0 && t.add(r);
	}
	return e.filter(function(e, n) {
		return !t.has(n);
	});
}, jt = function(e) {
	return e.parentNode ? jt(e.parentNode) : e;
}, Mt = function(e) {
	return R(e).filter(Boolean).reduce(function(e, t) {
		var n = t.getAttribute(Ae);
		return e.push.apply(e, n ? At(L(jt(t).querySelectorAll(`[${Ae}="${n}"]:not([${je}="disabled"])`))) : [t]), e;
	}, []);
}, Nt = function(e) {
	try {
		return e();
	} catch {
		return;
	}
}, H = function(e) {
	if (e === void 0 && (e = document), e && e.activeElement) {
		var t = e.activeElement;
		return t.shadowRoot ? H(t.shadowRoot) : t instanceof HTMLIFrameElement && Nt(function() {
			return t.contentWindow.document;
		}) ? H(t.contentWindow.document) : t;
	}
}, Pt = function(e, t) {
	return e === t;
}, Ft = function(e, t) {
	return !!L(e.querySelectorAll("iframe")).some(function(e) {
		return Pt(e, t);
	});
}, It = function(e, t) {
	return t === void 0 && (t = H(et(e).ownerDocument)), !t || t.dataset && t.dataset.focusGuard ? !1 : Mt(e).some(function(e) {
		return V(e, t) || Ft(e, t);
	});
}, Lt = function(e) {
	e === void 0 && (e = document);
	var t = H(e);
	return t ? L(e.querySelectorAll(`[${Me}]`)).some(function(e) {
		return V(e, t);
	}) : !1;
}, Rt = function(e, t) {
	return t.filter(ft).filter(function(t) {
		return t.name === e.name;
	}).filter(function(e) {
		return e.checked;
	})[0] || e;
}, zt = function(e, t) {
	return ft(e) && e.name ? Rt(e, t) : e;
}, Bt = function(e) {
	var t = /* @__PURE__ */ new Set();
	return e.forEach(function(n) {
		return t.add(zt(n, e));
	}), e.filter(function(e) {
		return t.has(e);
	});
}, Vt = function(e) {
	return e[0] && e.length > 1 ? zt(e[0], e) : e[0];
}, Ht = function(e, t) {
	return e.indexOf(zt(t, e));
}, Ut = "NEW_FOCUS", Wt = function(e, t, n, r, i) {
	var a = e.length, o = e[0], s = e[a - 1], c = ht(r);
	if (!(r && e.indexOf(r) >= 0)) {
		var l = r === void 0 ? -1 : n.indexOf(r), u = i ? n.indexOf(i) : l, d = i ? e.indexOf(i) : -1;
		if (l === -1) return d === -1 ? Ut : d;
		if (d === -1) return Ut;
		var f = l - u, p = n.indexOf(o), m = n.indexOf(s), h = Bt(n), g = r === void 0 ? -1 : h.indexOf(r), _ = i ? h.indexOf(i) : g, v = h.filter(function(e) {
			return e.tabIndex >= 0;
		}), y = r === void 0 ? -1 : v.indexOf(r), b = i ? v.indexOf(i) : y, x = y >= 0 && b >= 0 ? b - y : _ - g;
		if (!f && d >= 0 || t.length === 0) return d;
		var S = Ht(e, t[0]), C = Ht(e, t[t.length - 1]);
		if (l <= p && c && Math.abs(f) > 1) return C;
		if (l >= m && c && Math.abs(f) > 1) return S;
		if (f && Math.abs(x) > 1) return d;
		if (l <= p) return C;
		if (l > m) return S;
		if (f) return Math.abs(f) > 1 ? d : (a + d + f) % a;
	}
}, Gt = function(e) {
	return function(t) {
		var n = lt(t)?.autofocus;
		return t.autofocus || n !== void 0 && n !== "false" || e.indexOf(t) >= 0;
	};
}, Kt = function(e, t, n) {
	var r = Dt(e.map(function(e) {
		return e.node;
	}).filter(Gt(n)));
	return r && r.length ? Vt(r) : Vt(Dt(t));
}, qt = function(e, t) {
	return t === void 0 && (t = []), t.push(e), e.parentNode && qt(e.parentNode.host || e.parentNode, t), t;
}, Jt = function(e, t) {
	for (var n = qt(e), r = qt(t), i = 0; i < n.length; i += 1) {
		var a = n[i];
		if (r.indexOf(a) >= 0) return a;
	}
	return !1;
}, Yt = function(e, t, n) {
	var r = R(e), i = R(t), a = r[0], o = !1;
	return i.filter(Boolean).forEach(function(e) {
		o = Jt(o || e, e) || o, n.filter(Boolean).forEach(function(e) {
			var t = Jt(a, e);
			t && (o = !o || V(t, o) ? t : Jt(t, o));
		});
	}), o;
}, Xt = function(e, t) {
	return e.reduce(function(e, n) {
		return e.concat(kt(n, t));
	}, []);
}, Zt = function(e, t) {
	var n = /* @__PURE__ */ new Map();
	return t.forEach(function(e) {
		return n.set(e.node, e);
	}), e.map(function(e) {
		return n.get(e);
	}).filter(_t);
}, Qt = function(e, t) {
	var n = H(R(e).length > 0 ? document : et(e).ownerDocument), r = Mt(e).filter(gt), i = Yt(n || e, e, r), a = /* @__PURE__ */ new Map(), o = B(r, a), s = o.filter(function(e) {
		var t = e.node;
		return gt(t);
	});
	if (s[0]) {
		var c = B([i], a).map(function(e) {
			return e.node;
		}), l = Zt(c, s), u = l.map(function(e) {
			return e.node;
		}), d = l.filter(function(e) {
			return e.tabIndex >= 0;
		}).map(function(e) {
			return e.node;
		}), f = Wt(u, d, c, n, t);
		if (f === "NEW_FOCUS") {
			var p = Kt(o, d, Xt(r, a)) || Kt(o, u, Xt(r, a));
			if (p) return { node: p };
			console.warn("focus-lock: cannot find any node to move focus into");
		} else return f === void 0 ? f : l[f];
	}
}, $t = function(e) {
	var t = Mt(e).filter(gt), n = bt(z([Yt(e, e, t)], !0), !0, !0), r = z(t, !1);
	return n.map(function(e) {
		var t = e.node;
		return {
			node: t,
			index: e.index,
			lockItem: r.indexOf(t) >= 0,
			guard: ht(t)
		};
	});
}, en = function(e, t) {
	e && ("focus" in e && e.focus(t), "contentWindow" in e && e.contentWindow && e.contentWindow.focus());
}, tn = 0, nn = !1, rn = function(e, t, n) {
	n === void 0 && (n = {});
	var r = Qt(e, t);
	if (!nn && r) {
		if (tn > 2) {
			console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"), nn = !0, setTimeout(function() {
				nn = !1;
			}, 1);
			return;
		}
		tn++, en(r.node, n.focusOptions), tn--;
	}
};
// node_modules/.pnpm/focus-lock@1.3.6/node_modules/focus-lock/dist/es2015/return-focus.js
function U(e) {
	if (!e) return null;
	if (typeof WeakRef > "u") return function() {
		return e || null;
	};
	var t = e ? new WeakRef(e) : null;
	return function() {
		return t?.deref() || null;
	};
}
var an = function(e) {
	if (!e) return null;
	for (var t = [], n = e; n && n !== document.body;) t.push({
		current: U(n),
		parent: U(n.parentElement),
		left: U(n.previousElementSibling),
		right: U(n.nextElementSibling)
	}), n = n.parentElement;
	return {
		element: U(e),
		stack: t,
		ownerDocument: e.ownerDocument
	};
}, on = function(e) {
	if (e) for (var t = e.stack, n = e.ownerDocument, r = /* @__PURE__ */ new Map(), i = 0, a = t; i < a.length; i++) {
		var o = a[i], s = o.parent?.call(o);
		if (s && n.contains(s)) {
			for (var c = o.left?.call(o), l = o.current(), u = s.contains(l) ? l : void 0, d = o.right?.call(o), f = Ot([s], r), p = u ?? c?.nextElementSibling ?? d ?? c; p;) {
				for (var m = 0, h = f; m < h.length; m++) {
					var g = h[m];
					if (p?.contains(g.node)) return g.node;
				}
				p = p.nextElementSibling;
			}
			if (f.length) return f[0].node;
		}
	}
}, sn = function(e) {
	var t = an(e);
	return function() {
		return on(t);
	};
}, cn = function(e, t, n) {
	if (!e || !t) return console.error("no element or scope given"), {};
	var r = R(t);
	if (r.every(function(t) {
		return !V(t, e);
	})) return console.error("Active element is not contained in the scope"), {};
	var i = n ? Ot(r, /* @__PURE__ */ new Map()) : B(r, /* @__PURE__ */ new Map()), a = i.findIndex(function(t) {
		return t.node === e;
	});
	if (a !== -1) return {
		prev: i[a - 1],
		next: i[a + 1],
		first: i[0],
		last: i[i.length - 1]
	};
}, ln = function(e, t) {
	var n = t ? Ot(R(e), /* @__PURE__ */ new Map()) : B(R(e), /* @__PURE__ */ new Map());
	return {
		first: n[0],
		last: n[n.length - 1]
	};
}, un = function(e) {
	return Object.assign({
		scope: document.body,
		cycle: !0,
		onlyTabbable: !0
	}, e);
}, dn = function(e, t, n) {
	t === void 0 && (t = {});
	var r = un(t), i = cn(e, r.scope, r.onlyTabbable);
	if (i) {
		var a = n(i, r.cycle);
		a && en(a.node, r.focusOptions);
	}
}, fn = function(e, t) {
	t === void 0 && (t = {}), dn(e, t, function(e, t) {
		var n = e.next, r = e.first;
		return n || t && r;
	});
}, pn = function(e, t) {
	t === void 0 && (t = {}), dn(e, t, function(e, t) {
		var n = e.prev, r = e.last;
		return n || t && r;
	});
}, mn = function(e, t, n) {
	var r = ln(e, t.onlyTabbable ?? !0)[n];
	r && en(r.node, t.focusOptions);
}, hn = function(e, t) {
	t === void 0 && (t = {}), mn(e, t, "first");
}, gn = function(e, t) {
	t === void 0 && (t = {}), mn(e, t, "last");
}, _n = function() {
	return document && document.activeElement === document.body;
}, vn = function() {
	return _n() || Lt();
}, W = null, G = null, yn = function() {
	return null;
}, K = null, q = !1, bn = !1, xn = function() {
	return !0;
}, Sn = function(e) {
	return (W.whiteList || xn)(e);
}, Cn = function(e, t) {
	K = {
		observerNode: e,
		portaledElement: t
	};
}, wn = function(e) {
	return K && K.portaledElement === e;
};
function Tn(e, t, n, r) {
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
var En = function(e) {
	return e ? !!q : q === "meanwhile";
}, Dn = function e(t, n, r) {
	return n && (n.host === t && (!n.activeElement || r.contains(n.activeElement)) || n.parentNode && e(t, n.parentNode, r));
}, On = function(e, t) {
	return t.some(function(t) {
		return Dn(e, t, t);
	});
}, kn = function(e) {
	return B(e, /* @__PURE__ */ new Map());
}, An = function(e) {
	return !kn([e.parentNode]).some(function(t) {
		return t.node === e;
	});
}, jn = function() {
	var e = !1;
	if (W) {
		var t = W, n = t.observed, r = t.persistentFocus, i = t.autoFocus, a = t.shards, o = t.crossFrame, s = t.focusOptions, c = t.noFocusGuards, l = n || K && K.portaledElement;
		if (_n() && G && G !== document.body && (!document.body.contains(G) || An(G))) {
			var u = yn();
			u && u.focus();
		}
		var d = document && document.activeElement;
		if (l) {
			var f = [l].concat(a.map(We).filter(Boolean));
			if ((!d || Sn(d)) && (r || function() {
				if (!En(o) || !c || !G || bn) return !1;
				var e = kn(f), t = e.findIndex(function(e) {
					return e.node === G;
				});
				return t === 0 || t === e.length - 1;
			}() || !vn() || !G && i) && (l && !(It(f) || d && On(d, f) || wn(d, l)) && (document && !G && d && !i ? (d.blur && d.blur(), document.body.focus()) : (e = rn(f, G, { focusOptions: s }), K = {})), G = document && document.activeElement, G !== document.body && (yn = sn(G)), q = !1), document && d !== document.activeElement && document.querySelector("[data-focus-auto-guard]")) {
				var p = document && document.activeElement, m = $t(f), h = m.map(function(e) {
					return e.node;
				}).indexOf(p);
				h > -1 && (m.filter(function(e) {
					var t = e.guard, n = e.node;
					return t && n.dataset.focusAutoGuard;
				}).forEach(function(e) {
					return e.node.removeAttribute("tabIndex");
				}), Tn(h, m.length, 1, m), Tn(h, -1, -1, m));
			}
		}
	}
	return e;
}, Mn = function(e) {
	jn() && e && (e.stopPropagation(), e.preventDefault());
}, Nn = function() {
	return Ue(jn);
}, Pn = function(e) {
	var t = e.target, n = e.currentTarget;
	n.contains(t) || Cn(n, t);
}, Fn = function() {
	return null;
}, In = function() {
	bn = !0;
}, Ln = function() {
	bn = !1, q = "just", Ue(function() {
		q = "meanwhile";
	});
}, Rn = function() {
	document.addEventListener("focusin", Mn), document.addEventListener("focusout", Nn), window.addEventListener("focus", In), window.addEventListener("blur", Ln);
}, zn = function() {
	document.removeEventListener("focusin", Mn), document.removeEventListener("focusout", Nn), window.removeEventListener("focus", In), window.removeEventListener("blur", Ln);
};
function Bn(e) {
	return e.filter(function(e) {
		return !e.disabled;
	});
}
var Vn = {
	moveFocusInside: rn,
	focusInside: It,
	focusNextElement: fn,
	focusPrevElement: pn,
	focusFirstElement: hn,
	focusLastElement: gn,
	captureFocusRestore: sn
};
function Hn(e) {
	var t = e.slice(-1)[0];
	t && !W && Rn();
	var n = W, r = n && t && t.id === n.id;
	W = t, n && !r && (n.onDeactivation(), e.filter(function(e) {
		return e.id === n.id;
	}).length || n.returnFocus(!t)), t ? (G = null, r && n.observed === t.observed || t.onActivation(Vn), jn(!0), Ue(jn)) : (zn(), G = null);
}
Ie.assignSyncMedium(Pn), Le.assignMedium(Nn), Re.assignMedium(function(e) {
	return e(Vn);
}), Ee(ze, $e(Bn, Hn)(Fn));
// node_modules/.pnpm/get-nonce@1.0.1/node_modules/get-nonce/dist/es2015/index.js
var Un = function() {
	if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
// node_modules/.pnpm/react-style-singleton@2.2.3_@types+react@18.3.31_react@18.3.1/node_modules/react-style-singleton/dist/es2015/singleton.js
function Wn() {
	if (!document) return null;
	var e = document.createElement("style");
	e.type = "text/css";
	var t = Un();
	return t && e.setAttribute("nonce", t), e;
}
function Gn(e, t) {
	e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function Kn(e) {
	(document.head || document.getElementsByTagName("head")[0]).appendChild(e);
}
var qn = function() {
	var e = 0, t = null;
	return {
		add: function(n) {
			e == 0 && (t = Wn()) && (Gn(t, n), Kn(t)), e++;
		},
		remove: function() {
			e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
		}
	};
}, Jn = function() {
	var e = qn();
	return function(t, n) {
		S.useEffect(function() {
			return e.add(t), function() {
				e.remove();
			};
		}, [t && n]);
	};
}, Yn = function() {
	var e = Jn();
	return function(t) {
		var n = t.styles, r = t.dynamic;
		return e(n, r), null;
	};
}, Xn = {
	left: 0,
	top: 0,
	right: 0,
	gap: 0
}, Zn = function(e) {
	return parseInt(e || "", 10) || 0;
}, Qn = function(e) {
	var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], i = t[e === "padding" ? "paddingRight" : "marginRight"];
	return [
		Zn(n),
		Zn(r),
		Zn(i)
	];
}, $n = function(e) {
	if (e === void 0 && (e = "margin"), typeof window > "u") return Xn;
	var t = Qn(e), n = document.documentElement.clientWidth, r = window.innerWidth;
	return {
		left: t[0],
		top: t[1],
		right: t[2],
		gap: Math.max(0, r - n + t[2] - t[0])
	};
}, er = Yn(), J = "data-scroll-locked", tr = function(e, t, n, r) {
	var i = e.left, a = e.top, o = e.right, s = e.gap;
	return n === void 0 && (n = "margin"), `
  .${me} {
   overflow: hidden ${r};
   padding-right: ${s}px ${r};
  }
  body[${J}] {
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
  
  .${P} {
    right: ${s}px ${r};
  }
  
  .${F} {
    margin-right: ${s}px ${r};
  }
  
  .${P} .${P} {
    right: 0 ${r};
  }
  
  .${F} .${F} {
    margin-right: 0 ${r};
  }
  
  body[${J}] {
    ${he}: ${s}px;
  }
`;
}, nr = function() {
	var e = parseInt(document.body.getAttribute("data-scroll-locked") || "0", 10);
	return isFinite(e) ? e : 0;
}, rr = function() {
	S.useEffect(function() {
		return document.body.setAttribute(J, (nr() + 1).toString()), function() {
			var e = nr() - 1;
			e <= 0 ? document.body.removeAttribute(J) : document.body.setAttribute(J, e.toString());
		};
	}, []);
}, ir = function(e) {
	var t = e.noRelative, n = e.noImportant, r = e.gapMode, i = r === void 0 ? "margin" : r;
	rr();
	var a = S.useMemo(function() {
		return $n(i);
	}, [i]);
	return S.createElement(er, { styles: tr(a, !t, i, n ? "" : "!important") });
}, ar = !1;
if (typeof window < "u") try {
	var or = Object.defineProperty({}, "passive", { get: function() {
		return ar = !0, !0;
	} });
	window.addEventListener("test", or, or), window.removeEventListener("test", or, or);
} catch {
	ar = !1;
}
var Y = ar ? { passive: !1 } : !1, sr = function(e) {
	return e.tagName === "TEXTAREA";
}, cr = function(e, t) {
	if (!(e instanceof Element)) return !1;
	var n = window.getComputedStyle(e);
	return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !sr(e) && n[t] === "visible");
}, lr = function(e) {
	return cr(e, "overflowY");
}, ur = function(e) {
	return cr(e, "overflowX");
}, dr = function(e, t) {
	var n = t.ownerDocument, r = t;
	do {
		if (typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host), mr(e, r)) {
			var i = hr(e, r);
			if (i[1] > i[2]) return !0;
		}
		r = r.parentNode;
	} while (r && r !== n.body);
	return !1;
}, fr = function(e) {
	return [
		e.scrollTop,
		e.scrollHeight,
		e.clientHeight
	];
}, pr = function(e) {
	return [
		e.scrollLeft,
		e.scrollWidth,
		e.clientWidth
	];
}, mr = function(e, t) {
	return e === "v" ? lr(t) : ur(t);
}, hr = function(e, t) {
	return e === "v" ? fr(t) : pr(t);
}, gr = function(e, t) {
	return e === "h" && t === "rtl" ? -1 : 1;
}, _r = function(e, t, n, r, i) {
	var a = gr(e, window.getComputedStyle(t).direction), o = a * r, s = n.target, c = t.contains(s), l = !1, u = o > 0, d = 0, f = 0;
	do {
		if (!s) break;
		var p = hr(e, s), m = p[0], h = p[1] - p[2] - a * m;
		(m || h) && mr(e, s) && (d += h, f += m);
		var g = s.parentNode;
		s = g && g.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? g.host : g;
	} while (!c && s !== document.body || c && (t.contains(s) || t === s));
	return (u && (i && Math.abs(d) < 1 || !i && o > d) || !u && (i && Math.abs(f) < 1 || !i && -o > f)) && (l = !0), l;
}, vr = function(e) {
	return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, yr = function(e) {
	return [e.deltaX, e.deltaY];
}, br = function(e) {
	return e && "current" in e ? e.current : e;
}, xr = function(e, t) {
	return e[0] === t[0] && e[1] === t[1];
}, Sr = function(e) {
	return `
  .block-interactivity-${e} {pointer-events: none;}
  .allow-interactivity-${e} {pointer-events: all;}
`;
}, Cr = 0, X = [];
function wr(e) {
	var n = S.useRef([]), r = S.useRef([0, 0]), i = S.useRef(), a = S.useState(Cr++)[0], o = S.useState(Yn)[0], s = S.useRef(e);
	S.useEffect(function() {
		s.current = e;
	}, [e]), S.useEffect(function() {
		if (e.inert) {
			document.body.classList.add(`block-interactivity-${a}`);
			var n = t([e.lockRef.current], (e.shards || []).map(br), !0).filter(Boolean);
			return n.forEach(function(e) {
				return e.classList.add(`allow-interactivity-${a}`);
			}), function() {
				document.body.classList.remove(`block-interactivity-${a}`), n.forEach(function(e) {
					return e.classList.remove(`allow-interactivity-${a}`);
				});
			};
		}
	}, [
		e.inert,
		e.lockRef.current,
		e.shards
	]);
	var c = S.useCallback(function(e, t) {
		if ("touches" in e && e.touches.length === 2 || e.type === "wheel" && e.ctrlKey) return !s.current.allowPinchZoom;
		var n = vr(e), a = r.current, o = "deltaX" in e ? e.deltaX : a[0] - n[0], c = "deltaY" in e ? e.deltaY : a[1] - n[1], l, u = e.target, d = Math.abs(o) > Math.abs(c) ? "h" : "v";
		if ("touches" in e && d === "h" && u.type === "range") return !1;
		var f = window.getSelection(), p = f && f.anchorNode;
		if (p && (p === u || p.contains(u))) return !1;
		var m = dr(d, u);
		if (!m) return !0;
		if (m ? l = d : (l = d === "v" ? "h" : "v", m = dr(d, u)), !m) return !1;
		if (!i.current && "changedTouches" in e && (o || c) && (i.current = l), !l) return !0;
		var h = i.current || l;
		return _r(h, t, e, h === "h" ? o : c, !0);
	}, []), l = S.useCallback(function(e) {
		var t = e;
		if (X.length && X[X.length - 1] === o) {
			var r = "deltaY" in t ? yr(t) : vr(t), i = n.current.filter(function(e) {
				return e.name === t.type && (e.target === t.target || t.target === e.shadowParent) && xr(e.delta, r);
			})[0];
			if (i && i.should) t.cancelable && t.preventDefault();
			else if (!i) {
				var a = (s.current.shards || []).map(br).filter(Boolean).filter(function(e) {
					return e.contains(t.target);
				});
				(a.length > 0 ? c(t, a[0]) : !s.current.noIsolation) && t.cancelable && t.preventDefault();
			}
		}
	}, []), u = S.useCallback(function(e, t, r, i) {
		var a = {
			name: e,
			delta: t,
			target: r,
			should: i,
			shadowParent: Tr(r)
		};
		n.current.push(a), setTimeout(function() {
			n.current = n.current.filter(function(e) {
				return e !== a;
			});
		}, 1);
	}, []), d = S.useCallback(function(e) {
		r.current = vr(e), i.current = void 0;
	}, []), f = S.useCallback(function(t) {
		u(t.type, yr(t), t.target, c(t, e.lockRef.current));
	}, []), p = S.useCallback(function(t) {
		u(t.type, vr(t), t.target, c(t, e.lockRef.current));
	}, []);
	S.useEffect(function() {
		return X.push(o), e.setCallbacks({
			onScrollCapture: f,
			onWheelCapture: f,
			onTouchMoveCapture: p
		}), document.addEventListener("wheel", l, Y), document.addEventListener("touchmove", l, Y), document.addEventListener("touchstart", d, Y), function() {
			X = X.filter(function(e) {
				return e !== o;
			}), document.removeEventListener("wheel", l, Y), document.removeEventListener("touchmove", l, Y), document.removeEventListener("touchstart", d, Y);
		};
	}, []);
	var m = e.removeScrollBar, h = e.inert;
	return S.createElement(S.Fragment, null, h ? S.createElement(o, { styles: Sr(a) }) : null, m ? S.createElement(ir, {
		noRelative: e.noRelative,
		gapMode: e.gapMode
	}) : null);
}
function Tr(e) {
	for (var t = null; e !== null;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
	return t;
}
Ee(De, wr);
// node_modules/.pnpm/aria-hidden@1.2.6/node_modules/aria-hidden/dist/es2015/index.js
var Er = function(e) {
	return typeof document > "u" ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body;
}, Z = /* @__PURE__ */ new WeakMap(), Dr = /* @__PURE__ */ new WeakMap(), Or = {}, kr = 0, Ar = function(e) {
	return e && (e.host || Ar(e.parentNode));
}, jr = function(e, t) {
	return t.map(function(t) {
		if (e.contains(t)) return t;
		var n = Ar(t);
		return n && e.contains(n) ? n : (console.error("aria-hidden", t, "in not contained inside", e, ". Doing nothing"), null);
	}).filter(function(e) {
		return !!e;
	});
}, Mr = function(e, t, n, r) {
	var i = jr(t, Array.isArray(e) ? e : [e]);
	Or[n] || (Or[n] = /* @__PURE__ */ new WeakMap());
	var a = Or[n], o = [], s = /* @__PURE__ */ new Set(), c = new Set(i), l = function(e) {
		e && !s.has(e) && (s.add(e), l(e.parentNode));
	};
	i.forEach(l);
	var u = function(e) {
		e && !c.has(e) && Array.prototype.forEach.call(e.children, function(e) {
			if (s.has(e)) u(e);
			else try {
				var t = e.getAttribute(r), i = t !== null && t !== "false", c = (Z.get(e) || 0) + 1, l = (a.get(e) || 0) + 1;
				Z.set(e, c), a.set(e, l), o.push(e), c === 1 && i && Dr.set(e, !0), l === 1 && e.setAttribute(n, "true"), i || e.setAttribute(r, "true");
			} catch (t) {
				console.error("aria-hidden: cannot operate on ", e, t);
			}
		});
	};
	return u(t), s.clear(), kr++, function() {
		o.forEach(function(e) {
			var t = Z.get(e) - 1, i = a.get(e) - 1;
			Z.set(e, t), a.set(e, i), t || (Dr.has(e) || e.removeAttribute(r), Dr.delete(e)), i || e.removeAttribute(n);
		}), kr--, kr || (Z = /* @__PURE__ */ new WeakMap(), Z = /* @__PURE__ */ new WeakMap(), Dr = /* @__PURE__ */ new WeakMap(), Or = {});
	};
}, Nr = function(e, t, n) {
	n === void 0 && (n = "data-aria-hidden");
	var r = Array.from(Array.isArray(e) ? e : [e]), i = t || Er(e);
	return i ? (r.push.apply(r, Array.from(i.querySelectorAll("[aria-live], script"))), Mr(r, i, n, "aria-hidden")) : function() {
		return null;
	};
}, Pr = Yn(), Fr = "\n [" + qe + "] {\n   pointer-events: none !important;\n }\n", Ir = function() {
	return S.createElement(Pr, { styles: Fr });
}, Lr = function(e) {
	return "current" in e ? e.current : e;
};
function Rr(e) {
	var t = e.setLockProps, n = e.onEscapeKey, r = e.onClickOutside, i = e.shards, a = e.onActivation, o = e.onDeactivation, s = e.noIsolation, c = e.activeNode, l = (0, S.useRef)(null), u = (0, S.useRef)(0);
	return S.useEffect(function() {
		var e = function(e) {
			e.defaultPrevented || (e.code === "Escape" || e.key === "Escape" || e.keyCode === 27) && n && n(e);
		}, t = function(e) {
			e.defaultPrevented || e.target === l.current || e instanceof MouseEvent && e.button !== 0 || i && i.map(Lr).some(function(t) {
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
	]), (0, S.useEffect)(function() {
		if (c) return a && a(c), function() {
			o && o();
		};
	}, [!!c]), (0, S.useEffect)(function() {
		if (!s && c) return Nr(y([c], (i || []).map(Lr)), c.ownerDocument.body, qe);
	}, [c, s]), (0, S.useEffect)(function() {
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
	}, []), S.createElement(Ir, null);
}
// node_modules/.pnpm/react-focus-on@3.10.2_@types+react@18.3.31_react@18.3.1/node_modules/react-focus-on/dist/es2015/sidecar.js
var zr = Ee(Ke, Rr), Br = function(e) {
	return S.createElement(zr, b({}, e));
}, Vr = S.forwardRef(function(e, t) {
	return S.createElement(Ye, b({}, e, {
		ref: t,
		sideCar: Br
	}));
}), Q = v();
function Hr({ onClick: e }) {
	return /*#__PURE__*/ S.createElement("div", {
		className: "pgn__modal-backdrop",
		onClick: e,
		onKeyDown: e,
		"data-testid": "modal-backdrop",
		role: "presentation"
	});
}
// istanbul ignore next
function Ur({ children: e = null }) {
	return /*#__PURE__*/ S.createElement("div", { className: "pgn__modal-content-container" }, e);
}
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/hooks/useWindowSizeHook.js
function $() {
	let [e, t] = (0, S.useState)({
		width: void 0,
		height: void 0
	});
	return (0, S.useLayoutEffect)(() => {
		function e() {
			t({
				width: globalThis.innerWidth,
				height: globalThis.innerHeight
			});
		}
		return globalThis.addEventListener("resize", e), e(), () => globalThis.removeEventListener("resize", e);
	}, []), e;
}
// src/unfolding-scenario-block/student-ui/components/Intro.tsx
var Wr = ({ name: e, introduction: t, onLaunch: n, activityOpen: r }) => {
	let i = ($().width || window.innerWidth) < j.extraSmall.maxWidth;
	return /* @__PURE__ */ (0, Q.jsx)("div", {
		className: "rounded-lg overflow-hidden scenario-intro bg-interact-default",
		children: /* @__PURE__ */ (0, Q.jsxs)(O, {
			className: "p-0",
			children: [/* @__PURE__ */ (0, Q.jsxs)(o, {
				xs: "12",
				lg: "8",
				className: "p-5 d-flex flex-column",
				children: [
					/* @__PURE__ */ (0, Q.jsxs)("div", {
						className: "scenario-name border border-primary d-flex align-items-center p-3 mb-5",
						children: [/* @__PURE__ */ (0, Q.jsx)("div", {
							className: "border-right",
							children: /* @__PURE__ */ (0, Q.jsx)(a, {
								src: M,
								className: "mr-2"
							})
						}), /* @__PURE__ */ (0, Q.jsx)("h5", {
							className: "m-0 ml-3",
							children: e
						})]
					}),
					/* @__PURE__ */ (0, Q.jsx)("h4", {
						className: "text-interact-accent",
						children: t.heading
					}),
					/* @__PURE__ */ (0, Q.jsx)("div", {
						className: "flex-grow-1 text-sec-content",
						dangerouslySetInnerHTML: { __html: t.description }
					}),
					/* @__PURE__ */ (0, Q.jsx)("div", {
						className: "d-flex justify-content-end",
						children: /* @__PURE__ */ (0, Q.jsx)(u, {
							variant: "primary",
							className: `mt-4 ${i ? "w-100" : ""}`,
							onClick: n,
							disabled: r,
							block: i,
							children: "Launch Interactive"
						})
					})
				]
			}), /* @__PURE__ */ (0, Q.jsx)(o, {
				xs: "12",
				lg: "4",
				className: "p-0",
				children: /* @__PURE__ */ (0, Q.jsx)(D, {
					src: t.imageURL,
					style: {
						objectFit: "cover",
						width: "100%",
						height: "100%"
					}
				})
			})]
		})
	});
}, Gr = ({ option: e, interactionType: t, isContinueEnabled: n, onContinue: r, onReturn: i }) => {
	let a = ($().width || window.innerWidth) < j.extraSmall.maxWidth;
	return /* @__PURE__ */ (0, Q.jsx)("div", {
		className: "option-feedback-wrapper bg-interact-raised p-4",
		children: /* @__PURE__ */ (0, Q.jsxs)("div", {
			className: "w-100 h-100 position-relative d-flex flex-column justify-content-center",
			children: [
				/* @__PURE__ */ (0, Q.jsx)("h5", {
					className: "text-interact-headings",
					children: e.value
				}),
				/* @__PURE__ */ (0, Q.jsx)(Kr, { option: e }),
				/* @__PURE__ */ (0, Q.jsx)(g, {
					className: "text-icon-action-sec-neutral",
					src: ue,
					alt: "Return",
					onClick: i
				}),
				t == "SelectOne" && /* @__PURE__ */ (0, Q.jsx)("div", {
					className: "position-absolute w-100 text-right",
					style: { bottom: 0 },
					children: /* @__PURE__ */ (0, Q.jsx)(u, {
						variant: "primary",
						className: `${a ? "w-100" : ""}`,
						disabled: !n,
						onClick: r,
						children: "Continue"
					})
				})
			]
		})
	});
}, Kr = ({ option: e }) => {
	let t = null, n = "", r = "";
	switch (e.type) {
		case "Correct":
			t = le, n = "Correct", r = "positive";
			break;
		case "Incorrect":
			t = h, n = "Incorrect", r = "negative";
			break;
		case "Warning": t = fe, n = "Warning", r = "warning";
	}
	return /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsxs)("p", {
		className: "d-flex",
		children: [/* @__PURE__ */ (0, Q.jsx)(a, {
			src: t,
			className: `text-icon-interact-${r} mr-2`
		}), /* @__PURE__ */ (0, Q.jsx)("span", {
			className: `text-feedback-${r}`,
			children: n
		})]
	}), /* @__PURE__ */ (0, Q.jsx)("p", {
		className: "text-interact-content",
		children: e.feedback
	})] });
}, qr = ({ scenarios: e, selectedOptions: t }) => /* @__PURE__ */ (0, Q.jsx)(N, {
	fluid: !0,
	children: e.map((e, n) => {
		let r = e.options[t.get(n)];
		return /* @__PURE__ */ (0, Q.jsxs)(O, {
			className: "outcome-option-row",
			children: [/* @__PURE__ */ (0, Q.jsxs)(o, {
				xs: "12",
				md: "6",
				className: "bg-interact-raised rounded-lg p-3",
				children: [/* @__PURE__ */ (0, Q.jsxs)("p", {
					className: "font-weight-bold text-interact-headings",
					children: ["Step ", n + 1]
				}), /* @__PURE__ */ (0, Q.jsx)("p", {
					className: "text-interact-content",
					children: r.value
				})]
			}), /* @__PURE__ */ (0, Q.jsx)(o, {
				xs: "12",
				md: "6",
				className: "pt-4",
				children: /* @__PURE__ */ (0, Q.jsx)(Kr, { option: r })
			})]
		});
	})
}), Jr = ({ outcome: e, scenarios: t, selectedOptions: n, onRestart: r, onExit: i, imageURL: o }) => {
	let s = $().width || window.innerWidth, c = "desktop";
	return s < j.extraSmall.maxWidth && (c = "mobile"), /* @__PURE__ */ (0, Q.jsxs)("div", {
		className: "d-flex flex-grow-1 flex-wrap",
		children: [/* @__PURE__ */ (0, Q.jsxs)("div", {
			className: "p-3 m-3 bg-interact-default",
			style: { flex: `0 0 ${c == "desktop" ? "60%" : "100%"}` },
			children: [
				/* @__PURE__ */ (0, Q.jsx)("h5", {
					className: "text-interact-accent",
					children: e.heading
				}),
				/* @__PURE__ */ (0, Q.jsx)("div", {
					className: "text-interact-content pb-3",
					dangerouslySetInnerHTML: { __html: e.description }
				}),
				e.displaySelectedOptions && /* @__PURE__ */ (0, Q.jsx)(qr, {
					scenarios: t,
					selectedOptions: n
				})
			]
		}), /* @__PURE__ */ (0, Q.jsx)("div", {
			className: "d-flex flex-column",
			style: {
				flex: `0 0 ${c == "desktop" ? "40%" : "100%"}`,
				backgroundImage: `linear-gradient(to bottom, transparent 60%, #FFF), url("${o}")`,
				backgroundSize: "cover",
				minHeight: "10rem"
			},
			children: /* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "fixed-bottom align-content-end text-right p-3 m-3",
				children: [/* @__PURE__ */ (0, Q.jsxs)(u, {
					variant: "outline-primary",
					className: `${c == "mobile" ? "w-100 mb-3" : ""}`,
					onClick: r,
					block: c == "mobile",
					children: ["Restart ", /* @__PURE__ */ (0, Q.jsx)(a, { src: de })]
				}), /* @__PURE__ */ (0, Q.jsxs)(u, {
					variant: "primary",
					className: `${c == "mobile" ? "w-100" : "ml-3"}`,
					onClick: i,
					block: c == "mobile",
					children: ["Exit ", /* @__PURE__ */ (0, Q.jsx)(a, { src: p })]
				})]
			})
		})]
	});
}, Yr = ({ index: e, total: t, onReset: n, variant: r }) => /* @__PURE__ */ (0, Q.jsxs)("div", {
	className: `scenario-stepper scenario-stepper-${r}`,
	children: [
		/* @__PURE__ */ (0, Q.jsx)(g, {
			className: "text-icon-action-default bg-main mr-3",
			src: de,
			onClick: n,
			alt: "Reset activity",
			size: "inline"
		}),
		Array.from(Array(t)).map((n, r) => /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)("div", {
			className: `step-indicator ${r <= e ? "active" : ""}`,
			children: r + 1
		}), r < t - 1 && /* @__PURE__ */ (0, Q.jsx)("div", { className: "step-indicator-separator" })] })),
		e >= t && /* @__PURE__ */ (0, Q.jsx)("div", {
			className: "step-indicator-completed",
			children: "Completed!"
		})
	]
}), Xr = ({ onClose: e }) => /* @__PURE__ */ (0, Q.jsx)(g, {
	className: "text-icon-action-sec-neutral",
	src: p,
	onClick: e,
	alt: "Close activity"
}), Zr = ({ onClose: e, title: t, onReset: n, activeScenarioIndex: r, totalScenarios: i }) => /* @__PURE__ */ (0, Q.jsx)("div", {
	className: "sticky-top d-flex w-100 bg-interact-default",
	children: /* @__PURE__ */ (0, Q.jsx)(N, {
		fluid: !0,
		children: /* @__PURE__ */ (0, Q.jsxs)(O, {
			className: "px-3",
			children: [
				/* @__PURE__ */ (0, Q.jsx)(o, {
					className: "d-flex align-items-center mx-3",
					children: /* @__PURE__ */ (0, Q.jsx)("h5", {
						className: "text-interact-headings",
						children: t
					})
				}),
				/* @__PURE__ */ (0, Q.jsx)(o, {
					className: "d-flex justify-content-center",
					children: /* @__PURE__ */ (0, Q.jsx)(Yr, {
						variant: "desktop",
						onReset: n,
						index: r,
						total: i
					})
				}),
				/* @__PURE__ */ (0, Q.jsx)(o, {
					className: "d-flex justify-content-end align-items-center mx-3",
					children: /* @__PURE__ */ (0, Q.jsx)(Xr, { onClose: e })
				})
			]
		})
	})
}), Qr = ({ onClose: e, title: t, activeScenarioIndex: n, totalScenarios: r }) => /* @__PURE__ */ (0, Q.jsx)("div", {
	className: "sticky-top d-flex mx-2 pt-4 pb-2 bg-interact-default",
	children: /* @__PURE__ */ (0, Q.jsxs)(N, {
		fluid: !0,
		className: "d-flex align-items-center",
		children: [
			/* @__PURE__ */ (0, Q.jsx)($r, {
				current: Math.min(n + 1, r),
				total: r
			}),
			/* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "px-2 mx-1 flex-grow-1",
				children: [/* @__PURE__ */ (0, Q.jsx)("h5", {
					className: "text-interact-headings",
					children: t
				}), n >= r && /* @__PURE__ */ (0, Q.jsx)("small", {
					className: "text-interact-accent mt-n1",
					children: /* @__PURE__ */ (0, Q.jsx)("strong", { children: "Completed!" })
				})]
			}),
			/* @__PURE__ */ (0, Q.jsx)(Xr, { onClose: e })
		]
	})
}), $r = ({ current: e, total: t }) => {
	let n = 52 * Math.PI, r = n * (1 - e / t);
	return /* @__PURE__ */ (0, Q.jsxs)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: 56,
		height: 56,
		children: [
			/* @__PURE__ */ (0, Q.jsx)("circle", {
				r: 26,
				cx: 28,
				cy: 28,
				fill: "none",
				stroke: "var(--color-interact-raised-emphasis)",
				"stroke-width": 4,
				"stroke-dashoffset": n - r,
				"stroke-dasharray": n,
				transform: `rotate(${e / t * 360 - 90} 28 28)`
			}),
			/* @__PURE__ */ (0, Q.jsx)("circle", {
				r: 26,
				cx: 28,
				cy: 28,
				fill: "none",
				stroke: "var(--color-interact-emphasis)",
				"stroke-width": 4,
				"stroke-dashoffset": r,
				"stroke-dasharray": n,
				transform: "rotate(-90 28 28)"
			}),
			/* @__PURE__ */ (0, Q.jsx)("foreignObject", {
				x: "0",
				y: "0",
				width: 56,
				height: 56,
				children: /* @__PURE__ */ (0, Q.jsxs)("div", {
					className: "h-100 d-flex justify-content-center align-items-center text-interact-content",
					style: { fontSize: "12px" },
					children: [
						e,
						" of ",
						t
					]
				})
			})
		]
	});
}, ei = ({ onClose: e, title: t, onReset: n, activeScenarioIndex: r, totalScenarios: i }) => /* @__PURE__ */ (0, Q.jsx)("div", {
	className: "sticky-top d-flex w-100 pb-2 bg-interact-default",
	children: /* @__PURE__ */ (0, Q.jsxs)(N, {
		className: "mx-3",
		fluid: !0,
		children: [/* @__PURE__ */ (0, Q.jsxs)(O, { children: [/* @__PURE__ */ (0, Q.jsx)(o, {
			className: "d-flex align-items-center",
			children: /* @__PURE__ */ (0, Q.jsx)("h5", {
				className: "text-interact-headings",
				children: t
			})
		}), /* @__PURE__ */ (0, Q.jsx)(o, {
			className: "d-flex justify-content-end align-items-center",
			children: /* @__PURE__ */ (0, Q.jsx)(Xr, { onClose: e })
		})] }), /* @__PURE__ */ (0, Q.jsx)(O, { children: /* @__PURE__ */ (0, Q.jsx)(o, {
			className: "d-flex justify-content-center",
			children: /* @__PURE__ */ (0, Q.jsx)(Yr, {
				variant: "tablet",
				onReset: n,
				index: r,
				total: i
			})
		}) })]
	})
}), ti = ({ onClose: e, title: t, onReset: n, activeScenarioIndex: r, totalScenarios: i }) => {
	let a = $().width || window.innerWidth;
	return a < j.extraSmall.maxWidth ? /* @__PURE__ */ (0, Q.jsx)(Qr, {
		onClose: e,
		title: t,
		activeScenarioIndex: r,
		totalScenarios: i
	}) : a < j.large.maxWidth ? /* @__PURE__ */ (0, Q.jsx)(ei, {
		onClose: e,
		title: t,
		onReset: n,
		activeScenarioIndex: r,
		totalScenarios: i
	}) : /* @__PURE__ */ (0, Q.jsx)(Zr, {
		onClose: e,
		title: t,
		onReset: n,
		activeScenarioIndex: r,
		totalScenarios: i
	});
}, ni = ({ onClick: e, children: t, active: n, preSelected: r }) => /* @__PURE__ */ (0, Q.jsxs)("button", {
	className: `scenario-option-btn ${n ? "text-interact-content-inverse bg-interact-raised-emphasis active" : "bg-interact-raised text-interact-content"} ${r ? "pre-selected" : ""}`,
	onClick: e,
	children: [/* @__PURE__ */ (0, Q.jsx)("div", {
		className: "flex-grow-1 text-left mx-3 px-3 my-3",
		children: t
	}), /* @__PURE__ */ (0, Q.jsx)("div", {
		className: "hover-arrow",
		children: /* @__PURE__ */ (0, Q.jsx)(a, {
			src: ce,
			size: "lg"
		})
	})]
}), ri = ({ scenario: e, activeOptionIndex: t, preSelectedOptions: n, isContinueEnabled: r, onContinue: i, onSelectOption: o }) => /* @__PURE__ */ (0, Q.jsx)("div", {
	className: "pt-3 mx-3 h-100",
	children: /* @__PURE__ */ (0, Q.jsxs)("div", {
		className: "position-relative w-100 h-100",
		style: { overflowX: "hidden" },
		children: [
			/* @__PURE__ */ (0, Q.jsx)("div", {
				className: `d-flex h-100 w-50 position-absolute align-items-center ${t === null ? "" : "active"} options-pane options-pane-1`,
				children: /* @__PURE__ */ (0, Q.jsxs)("div", { children: [
					/* @__PURE__ */ (0, Q.jsx)("h5", {
						className: "text-interact-accent",
						children: e.heading
					}),
					/* @__PURE__ */ (0, Q.jsx)("div", {
						className: "text-interact-content pb-3",
						dangerouslySetInnerHTML: { __html: e.description }
					}),
					/* @__PURE__ */ (0, Q.jsxs)("div", {
						className: "d-flex align-items-center mt-3 mb-2",
						children: [/* @__PURE__ */ (0, Q.jsx)("div", {
							className: "arrow-bubble",
							children: /* @__PURE__ */ (0, Q.jsx)(a, { src: M })
						}), /* @__PURE__ */ (0, Q.jsx)("span", {
							className: "text-interact-headings font-size-medium font-weight-bold pl-2",
							children: e.instructionTitle
						})]
					}),
					/* @__PURE__ */ (0, Q.jsx)("div", {
						className: "text-interact-content",
						dangerouslySetInnerHTML: { __html: e.instructionDescription }
					})
				] })
			}),
			/* @__PURE__ */ (0, Q.jsxs)("div", {
				className: `d-flex w-50 h-100 position-absolute align-items-center ${t === null ? "" : "active"} options-pane options-pane-2`,
				children: [t !== null && /* @__PURE__ */ (0, Q.jsx)("div", {
					className: "d-flex mr-3 align-items-center",
					children: /* @__PURE__ */ (0, Q.jsx)(g, {
						className: "text-icon-action-sec-neutral",
						src: ue,
						alt: "Return",
						onClick: () => o(null)
					})
				}), /* @__PURE__ */ (0, Q.jsxs)("div", {
					className: "flex-grow-1",
					children: [
						/* @__PURE__ */ (0, Q.jsx)("h5", {
							className: "text-interact-headings",
							children: e.prompt
						}),
						/* @__PURE__ */ (0, Q.jsx)("div", {
							className: "d-flex flex-column flex-grow-1",
							children: e.options.map((e, r) => /* @__PURE__ */ (0, Q.jsx)(ni, {
								active: t === r,
								onClick: () => o(r),
								preSelected: n.has(r),
								children: e.value
							}))
						}),
						/* @__PURE__ */ (0, Q.jsx)("div", {
							className: "d-flex justify-content-end",
							children: /* @__PURE__ */ (0, Q.jsx)(u, {
								variant: "primary",
								disabled: !r,
								onClick: i,
								children: "Continue"
							})
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, Q.jsx)("div", {
				className: `w-50 h-100 p-6 position-absolute d-flex flex-column align-items-start justify-content-center ${t === null ? "" : "active"} options-pane options-pane-3`,
				children: t === null ? null : /* @__PURE__ */ (0, Q.jsx)(Kr, { option: e.options[t] })
			})
		]
	})
}), ii = ({ interactionType: e, scenario: t, activeOptionIndex: n, preSelectedOptions: r, isContinueEnabled: i, onContinue: o, onSelectOption: s }) => /* @__PURE__ */ (0, Q.jsxs)("div", {
	className: "position-relative w-100 h-100",
	style: { overflowX: "hidden" },
	children: [/* @__PURE__ */ (0, Q.jsxs)("div", {
		className: `w-100 h-100 position-absolute p-4 d-flex flex-column ${n === null ? "" : "active"} tablet-options-pane tablet-options-pane-1`,
		children: [
			/* @__PURE__ */ (0, Q.jsxs)("div", { children: [
				/* @__PURE__ */ (0, Q.jsx)("h5", {
					className: "text-interact-accent",
					children: t.heading
				}),
				/* @__PURE__ */ (0, Q.jsx)("div", {
					className: "text-interact-content pb-3",
					dangerouslySetInnerHTML: { __html: t.description }
				}),
				/* @__PURE__ */ (0, Q.jsxs)("div", {
					className: "d-flex align-items-center mt-3 mb-2",
					children: [/* @__PURE__ */ (0, Q.jsx)("div", {
						className: "arrow-bubble",
						children: /* @__PURE__ */ (0, Q.jsx)(a, { src: M })
					}), /* @__PURE__ */ (0, Q.jsx)("span", {
						className: "text-interact-headings font-size-medium font-weight-bold pl-2",
						children: t.instructionTitle
					})]
				})
			] }),
			/* @__PURE__ */ (0, Q.jsx)("div", {
				className: "text-interact-content",
				dangerouslySetInnerHTML: { __html: t.instructionDescription }
			}),
			/* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "flex-grow-1",
				children: [/* @__PURE__ */ (0, Q.jsx)("h5", {
					className: "text-interact-headings",
					children: t.prompt
				}), /* @__PURE__ */ (0, Q.jsx)("div", {
					className: "d-flex flex-column flex-grow-1",
					children: t.options.map((e, t) => /* @__PURE__ */ (0, Q.jsx)(ni, {
						active: n === t,
						onClick: () => s(t),
						preSelected: r.has(t),
						children: e.value
					}))
				})]
			}),
			e != "SelectOne" && /* @__PURE__ */ (0, Q.jsx)("div", {
				className: "d-flex justify-content-end",
				children: /* @__PURE__ */ (0, Q.jsx)(u, {
					variant: "primary",
					disabled: !i,
					onClick: o,
					children: "Continue"
				})
			})
		]
	}), /* @__PURE__ */ (0, Q.jsx)("div", {
		className: `w-100 h-100 position-absolute d-flex flex-column justify-content-center p-3 m-3 bg-interact-raised ${n === null ? "" : "active"} tablet-options-pane tablet-options-pane-2`,
		children: n !== null && /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)(Gr, {
			option: t.options[n],
			interactionType: e,
			isContinueEnabled: i,
			onContinue: o,
			onReturn: () => s(null)
		}), e == "SelectOne" && /* @__PURE__ */ (0, Q.jsx)("div", {
			className: "d-flex justify-content-end",
			children: /* @__PURE__ */ (0, Q.jsx)(u, {
				variant: "primary",
				disabled: !i,
				onClick: o,
				children: "Continue"
			})
		})] })
	})]
}), ai = ({ interactionType: e, scenario: t, activeOptionIndex: n, preSelectedOptions: r, isContinueEnabled: i, onContinue: a, onSelectOption: o }) => {
	let [s, c] = (0, S.useState)("description");
	return s == "description" ? /* @__PURE__ */ (0, Q.jsx)(oi, {
		scenario: t,
		onNext: () => c("options")
	}) : /* @__PURE__ */ (0, Q.jsx)(si, {
		interactionType: e,
		scenario: t,
		activeOptionIndex: n,
		isContinueEnabled: i,
		onContinue: a,
		onSelectOption: o,
		preSelectedOptions: r,
		onBack: () => c("description")
	});
}, oi = ({ scenario: e, onNext: t }) => /* @__PURE__ */ (0, Q.jsx)("div", {
	className: "d-flex flex-column h-100 w-100",
	children: /* @__PURE__ */ (0, Q.jsxs)("div", {
		className: "d-flex flex-column pt-4 px-4 flex-grow-1 w-100 bg-interact-default",
		children: [
			/* @__PURE__ */ (0, Q.jsx)("h5", {
				className: "text-interact-accent",
				children: e.heading
			}),
			/* @__PURE__ */ (0, Q.jsx)("div", {
				className: "text-interact-content pb-3",
				dangerouslySetInnerHTML: { __html: e.description }
			}),
			/* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "d-flex align-items-center mt-3 mb-2",
				children: [/* @__PURE__ */ (0, Q.jsx)("div", {
					className: "arrow-bubble",
					children: /* @__PURE__ */ (0, Q.jsx)(a, { src: M })
				}), /* @__PURE__ */ (0, Q.jsx)("span", {
					className: "text-interact-headings font-size-medium font-weight-bold pl-2",
					children: e.instructionTitle
				})]
			}),
			/* @__PURE__ */ (0, Q.jsx)("div", {
				className: "text-interact-content",
				dangerouslySetInnerHTML: { __html: e.instructionDescription }
			}),
			/* @__PURE__ */ (0, Q.jsx)("div", {
				className: "d-flex flex-column justify-content-end flex-grow-1 w-100 bg-interact-default",
				children: /* @__PURE__ */ (0, Q.jsx)(u, {
					variant: "primary",
					className: "w-100 mb-4",
					onClick: t,
					children: "Continue"
				})
			})
		]
	})
}), si = ({ interactionType: e, scenario: t, activeOptionIndex: n, preSelectedOptions: r, isContinueEnabled: i, onContinue: a, onSelectOption: o, onBack: s }) => /* @__PURE__ */ (0, Q.jsxs)("div", {
	className: "p-4 h-100 w-100 d-flex flex-column bg-interact-default",
	children: [
		/* @__PURE__ */ (0, Q.jsx)(g, {
			className: "text-icon-action-sec-neutral",
			src: ue,
			alt: "Return",
			onClick: s
		}),
		/* @__PURE__ */ (0, Q.jsx)("h5", {
			className: "text-interact-headings",
			children: t.prompt
		}),
		/* @__PURE__ */ (0, Q.jsx)("div", {
			className: "d-flex flex-column flex-grow-1",
			children: t.options.map((e, t) => /* @__PURE__ */ (0, Q.jsx)(ni, {
				active: n === t,
				onClick: () => o(t),
				preSelected: r.has(t),
				children: e.value
			}))
		}),
		e != "SelectOne" && /* @__PURE__ */ (0, Q.jsx)(u, {
			variant: "primary",
			className: "w-100",
			disabled: !i,
			onClick: a,
			children: "Continue"
		}),
		n === null ? null : /* @__PURE__ */ (0, Q.jsx)(Gr, {
			interactionType: e,
			isContinueEnabled: i,
			onContinue: a,
			option: t.options[n],
			onReturn: () => o(null)
		})
	]
}), ci = ({ interactionType: e, scenario: t, onContinue: n, onSelectOption: r }) => {
	let i = $(), [a, o] = (0, S.useState)(null), [s, c] = (0, S.useState)(/* @__PURE__ */ new Set()), l = e == "Explore" && s.size == t.options.length || e == "SelectOne" && a !== null, u = i.width || window.innerWidth;
	return u < j.extraSmall.maxWidth ? /* @__PURE__ */ (0, Q.jsx)(ai, {
		interactionType: e,
		scenario: t,
		activeOptionIndex: a,
		preSelectedOptions: s,
		isContinueEnabled: l,
		onContinue: n,
		onSelectOption: (e) => {
			e === null ? o(null) : (c(/* @__PURE__ */ new Set([...s, e])), o(e), r(e));
		}
	}) : u < j.large.maxWidth ? /* @__PURE__ */ (0, Q.jsx)(ii, {
		interactionType: e,
		scenario: t,
		activeOptionIndex: a,
		preSelectedOptions: s,
		isContinueEnabled: l,
		onContinue: n,
		onSelectOption: (e) => {
			e === null ? o(null) : (c(/* @__PURE__ */ new Set([...s, e])), o(e), r(e));
		}
	}) : /* @__PURE__ */ (0, Q.jsx)(ri, {
		scenario: t,
		activeOptionIndex: a,
		preSelectedOptions: s,
		isContinueEnabled: l,
		onContinue: n,
		onSelectOption: (e) => {
			e === null ? o(null) : (c(/* @__PURE__ */ new Set([...s, e])), o(e), r(e));
		}
	});
}, li = ({ onCancel: e, title: t, children: n }) => /* @__PURE__ */ (0, Q.jsx)(Vr, {
	allowPinchZoom: !0,
	scrollLock: !0,
	enabled: !0,
	onEscapeKey: e,
	onClickOutside: e,
	className: "pgn__modal-layer",
	children: /* @__PURE__ */ (0, Q.jsxs)(Ur, { children: [/* @__PURE__ */ (0, Q.jsx)(Hr, { onClick: e }), /* @__PURE__ */ (0, Q.jsx)("div", {
		role: "dialog",
		"aria-label": t,
		className: "pgn__modal pgn__modal-md pgn__modal-default p-3",
		children: n
	})] })
}), ui = ({ onCancel: e, onConfirm: t }) => {
	let n = ($().width || window.innerWidth) < j.extraSmall.maxWidth;
	return /* @__PURE__ */ (0, Q.jsx)(li, {
		onCancel: e,
		title: "Leave interactive?",
		children: /* @__PURE__ */ (0, Q.jsxs)("div", {
			className: "m-3",
			children: [
				/* @__PURE__ */ (0, Q.jsx)("h5", {
					className: "text-interact-headings",
					children: "Leave interactive?"
				}),
				/* @__PURE__ */ (0, Q.jsx)("p", {
					className: "text-sec-content",
					children: "If you leave now, your progress in this interactive will be lost."
				}),
				/* @__PURE__ */ (0, Q.jsxs)("div", {
					className: "text-center",
					children: [/* @__PURE__ */ (0, Q.jsx)(u, {
						variant: "outline-primary",
						className: `${n ? "w-100 mb-3" : ""}`,
						onClick: t,
						block: n,
						children: "Leave"
					}), /* @__PURE__ */ (0, Q.jsx)(u, {
						variant: "primary",
						className: `${n ? "w-100" : "ml-3"}`,
						onClick: e,
						block: n,
						children: "Stay"
					})]
				})
			]
		})
	});
}, di = ({ onCancel: e, onConfirm: t }) => {
	let n = ($().width || window.innerWidth) < j.extraSmall.maxWidth;
	return /* @__PURE__ */ (0, Q.jsx)(li, {
		onCancel: e,
		title: "Restart interactive?",
		children: /* @__PURE__ */ (0, Q.jsxs)("div", {
			className: "m-3",
			children: [
				/* @__PURE__ */ (0, Q.jsx)("h5", {
					className: "text-interact-headings",
					children: "Restart interactive?"
				}),
				/* @__PURE__ */ (0, Q.jsx)("p", {
					className: "text-sec-content",
					children: "If you restart, your progress in this interactive will be lost."
				}),
				/* @__PURE__ */ (0, Q.jsxs)("div", {
					className: "text-center",
					children: [/* @__PURE__ */ (0, Q.jsx)(u, {
						variant: "outline-primary",
						className: `${n ? "w-100 mb-3" : ""}`,
						onClick: t,
						block: n,
						children: "Restart"
					}), /* @__PURE__ */ (0, Q.jsx)(u, {
						variant: "primary",
						className: `${n ? "w-100" : "ml-3"}`,
						onClick: e,
						block: n,
						children: "Stay"
					})]
				})
			]
		})
	});
}, fi = ({ data: e, onExit: t }) => {
	let [n, r] = (0, S.useState)(0), [i, a] = (0, S.useState)(null), [o, s] = (0, S.useState)(/* @__PURE__ */ new Map());
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		className: "h-100 min-vh-100 bg-interact-default d-flex flex-column",
		children: [
			/* @__PURE__ */ (0, Q.jsx)(ti, {
				onClose: () => a("leave"),
				title: e.name,
				onReset: () => a("restart"),
				activeScenarioIndex: n,
				totalScenarios: e.scenarios.length
			}),
			n < e.scenarios.length ? /* @__PURE__ */ (0, Q.jsx)(ci, {
				scenario: e.scenarios[n],
				interactionType: e.interactionType,
				onContinue: () => {
					(0, S.startTransition)(() => {
						r(n + 1);
					});
				},
				onSelectOption: (e) => s(new Map(o).set(n, e))
			}, n) : e.outcome && /* @__PURE__ */ (0, Q.jsx)(Jr, {
				outcome: e.outcome,
				scenarios: e.scenarios,
				selectedOptions: o,
				onRestart: () => a("restart"),
				onExit: () => a("leave"),
				imageURL: e.introduction.imageURL
			}),
			i == "leave" && /* @__PURE__ */ (0, Q.jsx)(ui, {
				onConfirm: t,
				onCancel: () => a(null)
			}),
			i == "restart" && /* @__PURE__ */ (0, Q.jsx)(di, {
				onConfirm: () => {
					r(0), a(null);
				},
				onCancel: () => a(null)
			})
		]
	});
}, pi = /* @__PURE__ */ e(i(), 1), mi = ({ children: e, className: t, cssContent: n, themeUrls: r, title: i, onClose: a }) => {
	let [o, s] = (0, S.useState)(null);
	if (o === null) {
		let e = document.createElement("div");
		e.className = t, s(e);
	}
	return (0, S.useEffect)(() => {
		if (o) {
			let e = window.open();
			if (e == null) {
				alert("Activity failed to open in a popup window or new tab. Please enable popups and try again."), a();
				return;
			}
			e.addEventListener("beforeunload", () => {
				a();
			});
			let t = e.document.createElement("meta");
			t.name = "viewport", t.content = "width=device-width,initial-scale=1", e.document.head.appendChild(t);
			let s = e.document.createElement("title");
			s.textContent = i, e.document.head.appendChild(s), e.document.body.appendChild(o), r.forEach((t) => {
				let n = e.document.createElement("link");
				n.rel = "stylesheet", n.href = t, e.document.head.appendChild(n.cloneNode());
			});
			let c = e.document.createElement("style");
			return c.textContent = n, e.document.head.appendChild(c), () => e.close();
		}
	}, [o]), o && (0, pi.createPortal)(e, o);
}, hi = ({ data: e, themeUrls: t, cssContent: n }) => {
	let [r, i] = (0, S.useState)(!1), a = "xblock-unfolding-scenario-wrapper";
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		className: a,
		children: [r && /* @__PURE__ */ (0, Q.jsx)(mi, {
			title: e.scenarioData.name,
			className: `${a} min-vh-100`,
			themeUrls: t,
			cssContent: n,
			onClose: () => i(!1),
			children: /* @__PURE__ */ (0, Q.jsx)(fi, {
				data: e.scenarioData,
				onExit: () => i(!1)
			})
		}), /* @__PURE__ */ (0, Q.jsx)(Wr, {
			name: e.scenarioData.name,
			introduction: e.scenarioData.introduction,
			onLaunch: () => i(!0),
			activityOpen: r
		})]
	});
}, gi = ".xblock-unfolding-scenario-wrapper{--unfolding-scenario-button-border-radius-inner:var(--unfolding-scenario-button-radius,var(--pgn-size-btn-border-radius-base,0));--unfolding-scenario-text-interact-accent-inner:var(--unfolding-scenario-text-interact-accent,#2a578d);--unfolding-scenario-color-background-interactive-inner:var(--unfolding-scenario-color-background-interactive,#8cc9d1);--unfolding-scenario-color-text-interactive-inner:var(--unfolding-scenario-color-text-interactive,#2f808e);--unfolding-scenario-color-bg-emphasis-inner:var(--unfolding-scenario-color-bg-emphasis,#223e5d);--unfolding-scenario-color-bg-main-inner:var(--unfolding-scenario-color-bg-main,#1b324a);--unfolding-scenario-color-border-interact-default-inner:var(--unfolding-scenario-color-border-interact-default,#b2d8de);--unfolding-scenario-color-border-interact-emphasis-inner:var(--unfolding-scenario-color-border-interact-emphasis,#327d8a);--unfolding-scenario-color-border-sec-action-focus-inner:var(--unfolding-scenario-color-border-sec-action-focus,#0e1d2f);--unfolding-scenario-color-icon-action-sec-default-inner:var(--unfolding-scenario-color-icon-action-sec-default,#3874bc);--unfolding-scenario-color-icon-interact-default-inner:var(--unfolding-scenario-color-icon-interact-default,#327d8a);--unfolding-scenario-color-interact-default-inner:var(--unfolding-scenario-color-interact-default,#ecf5f7);--unfolding-scenario-color-interact-emphasis-inner:var(--unfolding-scenario-color-interact-emphasis,#d9ebef);--unfolding-scenario-color-interact-raised-emphasis-inner:var(--unfolding-scenario-color-interact-raised-emphasis,#327d8a);--unfolding-scenario-color-txt-interact-content-inverse-inner:var(--unfolding-scenario-color-txt-interact-content-inverse,#fff);--unfolding-scenario-color-txt-interact-content-inner:var(--unfolding-scenario-color-txt-interact-content,#223e5d);--unfolding-scenario-color-txt-interact-headings-inner:var(--unfolding-scenario-color-txt-interact-headings,#327d8a);--unfolding-scenario-color-txt-action-prim-default-inner:var(--unfolding-scenario-color-txt-action-prim-default,#fff);--unfolding-scenario-color-txt-content-inner:var(--unfolding-scenario-color-txt-content,#fff);--unfolding-scenario-color-txt-sec-content-inner:var(--unfolding-scenario-color-txt-sec-content,#223e5d);--unfolding-scenario-color-icon-action-default-inner:var(--unfolding-scenario-color-icon-action-default,#fff);--unfolding-scenario-color-border-default-inner:var(--unfolding-scenario-color-border-default,#4e657d);--unfolding-scenario-color-interact-raised-inner:var(--unfolding-scenario-color-interact-raised,#fff);--unfolding-scenario-color-icon-inverse-inner:var(--unfolding-scenario-color-icon-inverse,#fff);--unfolding-scenario-color-icon-default-inner:var(--unfolding-scenario-color-icon-default,#8cc4ce);--unfolding-scenario-color-icon-action-sec-neutral-inner:var(--unfolding-scenario-color-icon-action-sec-neutral,#1c3a5e);--unfolding-scenario-color-txt-feedback-negative-inner:var(--unfolding-scenario-color-txt-feedback-negative,#db493d);--unfolding-scenario-color-icon-interact-negative-inner:var(--unfolding-scenario-color-icon-interact-negative,#db493d);--unfolding-scenario-color-txt-feedback-positive-inner:var(--unfolding-scenario-color-txt-feedback-positive,#149418);--unfolding-scenario-color-icon-interact-positive-inner:var(--unfolding-scenario-color-icon-interact-positive,#149418);--unfolding-scenario-color-txt-feedback-warning-inner:var(--unfolding-scenario-color-txt-feedback-warning,#ffd900);--unfolding-scenario-color-icon-interact-warning-inner:var(--unfolding-scenario-color-icon-interact-warning,#ffd900)}.xblock-unfolding-scenario-wrapper .btn{border-radius:var(--unfolding-scenario-button-border-radius-inner)}.xblock-unfolding-scenario-wrapper .scenario-intro .scenario-name{color:var(--unfolding-scenario-color-text-interactive-inner);background-color:var(--unfolding-scenario-color-interact-emphasis-inner);border-radius:var(--pgn-spacing-spacer-base);border-bottom-left-radius:0;border-color:var(--unfolding-scenario-color-border-interact-default-inner)!important}.xblock-unfolding-scenario-wrapper .scenario-intro .scenario-name h5{color:var(--unfolding-scenario-color-text-interactive-inner)!important}.xblock-unfolding-scenario-wrapper .scenario-intro .scenario-name .border-right{border-color:var(--unfolding-scenario-color-border-interact-default-inner)!important}.xblock-unfolding-scenario-wrapper .scenario-intro .scenario-name .pgn__icon{color:var(--unfolding-scenario-color-interact-raised-emphasis-inner);zoom:2}.xblock-unfolding-scenario-wrapper .scenario-option-btn{height:calc(var(--pgn-typography-line-height-base) * var(--pgn-typography-font-size-base) * 3 + var(--pgn-spacing-spacer-base) * 2);border-radius:var(--pgn-size-border-radius-sm);margin-bottom:var(--pgn-spacing-spacer-base);border:0;justify-content:flex-start;align-items:center;padding:0;display:flex;overflow:hidden}.xblock-unfolding-scenario-wrapper .scenario-option-btn.pre-selected{outline:2px solid var(--unfolding-scenario-color-border-interact-emphasis-inner)}.xblock-unfolding-scenario-wrapper .scenario-option-btn .hover-arrow{background-color:var(--unfolding-scenario-color-interact-raised-emphasis-inner);align-items:center;min-width:10px;height:100%;display:flex}.xblock-unfolding-scenario-wrapper .scenario-option-btn .hover-arrow .pgn__icon{color:var(--unfolding-scenario-color-icon-inverse-inner);margin:0 var(--pgn-spacing-spacer-base);display:none}.xblock-unfolding-scenario-wrapper .scenario-option-btn:hover .hover-arrow .pgn__icon,.xblock-unfolding-scenario-wrapper .scenario-option-btn.active .hover-arrow .pgn__icon{display:block}.xblock-unfolding-scenario-wrapper .scenario-option-btn:focus-visible{outline:2px solid var(--unfolding-scenario-color-option-focus-border-inner)}.xblock-unfolding-scenario-wrapper .arrow-bubble{background-color:var(--unfolding-scenario-color-interact-emphasis-inner);color:var(--unfolding-scenario-color-icon-interact-default-inner);border:1px solid var(--unfolding-scenario-color-border-interact-default-inner);border-radius:var(--pgn-spacing-spacer-base);padding:calc(var(--pgn-spacing-spacer-base) * .5);border-bottom-left-radius:0;display:inline-block}.xblock-unfolding-scenario-wrapper .options-pane{transition:left .5s}@media (prefers-reduced-motion:reduce){.xblock-unfolding-scenario-wrapper .options-pane{transition:unset}}.xblock-unfolding-scenario-wrapper .options-pane-1{left:0%}.xblock-unfolding-scenario-wrapper .options-pane-2{left:50%}.xblock-unfolding-scenario-wrapper .options-pane-3{left:100%}.xblock-unfolding-scenario-wrapper .active.options-pane-1{left:-50%}.xblock-unfolding-scenario-wrapper .active.options-pane-2{left:0%}.xblock-unfolding-scenario-wrapper .active.options-pane-3{left:50%}.xblock-unfolding-scenario-wrapper .tablet-options-pane{transition:left .5s}@media (prefers-reduced-motion:reduce){.xblock-unfolding-scenario-wrapper .tablet-options-pane{transition:unset}}.xblock-unfolding-scenario-wrapper .tablet-options-pane-1{left:0%}.xblock-unfolding-scenario-wrapper .tablet-options-pane-2{border-left:var(--pgn-spacing-spacer-3) solid var(--unfolding-scenario-color-interact-default-inner);left:100%}.xblock-unfolding-scenario-wrapper .active.tablet-options-pane-1{left:-100%}.xblock-unfolding-scenario-wrapper .active.tablet-options-pane-2{left:0%}.xblock-unfolding-scenario-wrapper .option-feedback-wrapper{z-index:var(--pgn-elevation-zindex-fixed);border-left:var(--pgn-spacing-spacer-4) solid var(--unfolding-scenario-color-interact-default-inner);width:100%;height:100%;position:fixed;inset:0}.xblock-unfolding-scenario-wrapper .outcome-option-row+.outcome-option-row{margin-top:var(--pgn-spacing-spacer-4);padding-top:var(--pgn-spacing-spacer-4);border-top:1px solid var(--unfolding-scenario-color-border-interact-default-inner)}.xblock-unfolding-scenario-wrapper .scenario-stepper-desktop{border-bottom-right-radius:var(--pgn-size-border-radius-lg);border-bottom-left-radius:var(--pgn-size-border-radius-lg);padding-left:calc(var(--pgn-spacing-spacer-base) * .5);display:inline-flex}.xblock-unfolding-scenario-wrapper .scenario-stepper-tablet{border-radius:var(--pgn-size-border-radius-lg);width:100%;display:flex}.xblock-unfolding-scenario-wrapper .scenario-stepper{background-color:var(--unfolding-scenario-color-bg-main-inner);padding:var(--pgn-spacing-spacer-base);justify-content:center;align-items:center}.xblock-unfolding-scenario-wrapper .scenario-stepper .step-indicator{padding:calc(var(--pgn-spacing-spacer-base) * .25);height:var(--pgn-spacing-spacer-4-5);width:var(--pgn-spacing-spacer-4-5);font-size:calc(var(--pgn-typography-font-size-base) * 1.125);color:var(--unfolding-scenario-color-txt-content-inner);background-color:var(--unfolding-scenario-color-bg-emphasis-inner);border-radius:100%;justify-content:center;align-items:center;display:flex}.xblock-unfolding-scenario-wrapper .scenario-stepper .step-indicator.active{background-color:var(--unfolding-scenario-color-icon-default-inner);color:var(--unfolding-scenario-color-txt-interact-content-inner)}.xblock-unfolding-scenario-wrapper .scenario-stepper .step-indicator-separator{background-color:var(--unfolding-scenario-color-border-default-inner);width:17px;height:1px}.xblock-unfolding-scenario-wrapper .scenario-stepper .step-indicator-completed{font-size:calc(var(--pgn-typography-font-size-base) * 1.125);font-weight:var(--pgn-typography-headings-font-weight);margin-left:calc(var(--pgn-spacing-spacer-base) * 1.5);color:var(--unfolding-scenario-color-txt-content-inner)!important}.xblock-unfolding-scenario-wrapper .text-feedback-negative{color:var(--unfolding-scenario-color-txt-feedback-negative-inner)!important}.xblock-unfolding-scenario-wrapper .text-icon-interact-negative{color:var(--unfolding-scenario-color-icon-interact-negative-inner)!important}.xblock-unfolding-scenario-wrapper .text-feedback-positive{color:var(--unfolding-scenario-color-txt-feedback-positive-inner)!important}.xblock-unfolding-scenario-wrapper .text-icon-interact-positive{color:var(--unfolding-scenario-color-icon-interact-positive-inner)!important}.xblock-unfolding-scenario-wrapper .text-feedback-warning{color:var(--unfolding-scenario-color-txt-feedback-warning-inner)!important}.xblock-unfolding-scenario-wrapper .text-icon-interact-warning{color:var(--unfolding-scenario-color-icon-interact-warning-inner)!important}.xblock-unfolding-scenario-wrapper .text-interact-headings{color:var(--unfolding-scenario-color-txt-interact-headings-inner)!important}.xblock-unfolding-scenario-wrapper .text-interact-accent{color:var(--unfolding-scenario-color-txt-interact-accent-inner)!important}.xblock-unfolding-scenario-wrapper .text-interact-content{color:var(--unfolding-scenario-color-txt-interact-content-inner)!important}.xblock-unfolding-scenario-wrapper .text-interact-content-inverse{color:var(--unfolding-scenario-color-txt-interact-content-inverse-inner)!important}.xblock-unfolding-scenario-wrapper .text-content{color:var(--unfolding-scenario-color-txt-content-inner)!important}.xblock-unfolding-scenario-wrapper .text-sec-content{color:var(--unfolding-scenario-color-txt-sec-content-inner)!important}.xblock-unfolding-scenario-wrapper .text-icon-action-default{color:var(--unfolding-scenario-color-icon-action-default-inner)!important}.xblock-unfolding-scenario-wrapper .text-icon-action-sec-neutral{color:var(--unfolding-scenario-color-icon-action-sec-neutral-inner)!important}.xblock-unfolding-scenario-wrapper .bg-interact-raised-emphasis{background-color:var(--unfolding-scenario-color-interact-raised-emphasis-inner)!important}.xblock-unfolding-scenario-wrapper .bg-interact-raised{background-color:var(--unfolding-scenario-color-interact-raised-inner)!important}.xblock-unfolding-scenario-wrapper .bg-emphasis{background-color:var(--unfolding-scenario-color-bg-emphasis-inner)!important}.xblock-unfolding-scenario-wrapper .bg-icon-default{background-color:var(--unfolding-scenario-color-icon-default-inner)!important}.xblock-unfolding-scenario-wrapper .bg-interact-default{background-color:var(--unfolding-scenario-color-interact-default-inner)!important}.xblock-unfolding-scenario-wrapper .bg-main{background-color:var(--unfolding-scenario-color-bg-main-inner)!important}", _i = async (e, t, n) => {
	let r = await vi(n.config.mfe_config_api);
	l({
		runtime: e,
		element: t,
		config: n.config,
		styles: gi
	})(/* @__PURE__ */ (0, Q.jsx)(hi, {
		data: n.data,
		themeUrls: r,
		cssContent: gi
	}));
}, vi = async (e) => {
	let t = {};
	try {
		t = (await (await fetch(e)).json()).PARAGON_THEME_URLS;
	} catch (e) {
		console.error("Failed to fetch theme URLs:", e);
	}
	let n = t?.default?.light;
	return [
		"https://cdn.jsdelivr.net/npm/@openedx/paragon@23/dist/core.min.css",
		t?.core?.urls?.brandOverride,
		"https://cdn.jsdelivr.net/npm/@openedx/paragon@23/dist/light.min.css",
		t?.variants?.[n]?.urls?.brandOverride
	].filter(Boolean);
};
export { _i as renderBlock };
