import { n as e } from "./rolldown-runtime-CYdcPHCu.js";
import { C as t, S as n, T as r, a as i, c as a, d as o, f as s, h as c, i as l, l as u, m as d, n as f, p, r as m, t as h, u as g, v as _, w as v, x as y } from "./IconButton-Dy-MX8JQ.js";
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Container.js
var b = /* @__PURE__ */ e(d()), x = /* @__PURE__ */ e(r()), S = [
	"bsPrefix",
	"fluid",
	"as",
	"className"
], C = { fluid: !1 }, w = /*#__PURE__*/ x.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.fluid, i = e.as, a = i === void 0 ? "div" : i, o = e.className, c = s(e, S), l = g(n, "container"), u = typeof r == "string" ? "-" + r : "-fluid";
	return /*#__PURE__*/ x.createElement(a, p({ ref: t }, c, { className: (0, b.default)(o, r ? "" + l + u : l) }));
});
w.displayName = "Container", w.defaultProps = C;
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Image.js
var T = /* @__PURE__ */ e(u()), E = [
	"bsPrefix",
	"className",
	"fluid",
	"rounded",
	"roundedCircle",
	"thumbnail"
];
T.default.string, T.default.bool, T.default.bool, T.default.bool, T.default.bool;
var ee = {
	fluid: !1,
	rounded: !1,
	roundedCircle: !1,
	thumbnail: !1
}, D = /*#__PURE__*/ x.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.className, i = e.fluid, a = e.rounded, o = e.roundedCircle, c = e.thumbnail, l = s(e, E);
	n = g(n, "img");
	var u = (0, b.default)(i && n + "-fluid", a && "rounded", o && "rounded-circle", c && n + "-thumbnail");
	return /*#__PURE__*/ x.createElement("img", p({ ref: t }, l, { className: (0, b.default)(r, u) }));
});
D.displayName = "Image", D.defaultProps = ee;
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Row.js
var te = [
	"bsPrefix",
	"className",
	"noGutters",
	"as"
], ne = [
	"xl",
	"lg",
	"md",
	"sm",
	"xs"
], re = { noGutters: !1 }, O = /*#__PURE__*/ x.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.className, i = e.noGutters, a = e.as, o = a === void 0 ? "div" : a, c = s(e, te), l = g(n, "row"), u = l + "-cols", d = [];
	return ne.forEach(function(e) {
		var t = c[e];
		delete c[e];
		var n = typeof t == "object" && t ? t.cols : t, r = e === "xs" ? "" : "-" + e;
		n != null && d.push("" + u + r + "-" + n);
	}), /*#__PURE__*/ x.createElement(o, p({ ref: t }, c, { className: b.default.apply(void 0, [
		r,
		l,
		i && "no-gutters"
	].concat(d)) }));
});
O.displayName = "Row", O.defaultProps = re;
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/utils/breakpoints.js
var { sm: ie, md: ae, lg: k, xl: oe, xxl: A } = {
	xs: "0",
	sm: "576px",
	md: "768px",
	lg: "992px",
	xl: "1200px",
	xxl: "1400px"
}, j = {
	extraSmall: { maxWidth: parseFloat(ie) || 575.98 },
	small: {
		minWidth: parseFloat(ie) || 576,
		maxWidth: parseFloat(ae) || 767.98
	},
	medium: {
		minWidth: parseFloat(ae) || 768,
		maxWidth: parseFloat(k) || 991.98
	},
	large: {
		minWidth: parseFloat(k) || 992,
		maxWidth: parseFloat(oe) || 1199.98
	},
	extraLarge: {
		minWidth: parseFloat(oe) || 1200,
		maxWidth: parseFloat(A) || 1399.98
	},
	extraExtraLarge: { minWidth: parseFloat(A) || 1400 }
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
var se = (e) => /*#__PURE__*/ x.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /*#__PURE__*/ x.createElement("path", {
	d: "m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8Z",
	fill: "currentColor"
})), M = (e) => /*#__PURE__*/ x.createElement("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	...e
}, /*#__PURE__*/ x.createElement("path", {
	d: "M6 6v2h8.59L5 17.59 6.41 19 16 9.41V18h2V6z",
	fill: "currentColor"
})), ce = (e) => /*#__PURE__*/ x.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /*#__PURE__*/ x.createElement("path", {
	d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8-1.41-1.42Z",
	fill: "currentColor"
})), le = (e) => /*#__PURE__*/ x.createElement("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	...e
}, /*#__PURE__*/ x.createElement("path", {
	d: "M19 7v4H5.83l3.58-3.59L8 6l-6 6 6 6 1.41-1.41L5.83 13H21V7h-2z",
	fill: "currentColor"
})), ue = (e) => /*#__PURE__*/ x.createElement("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	...e
}, /*#__PURE__*/ x.createElement("path", {
	d: "M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z",
	fill: "currentColor"
})), de = (e) => /*#__PURE__*/ x.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /*#__PURE__*/ x.createElement("path", {
	d: "M1 21h22L12 2 1 21Zm12-3h-2v-2h2v2Zm0-4h-2v-4h2v4Z",
	fill: "currentColor"
})), fe = /*#__PURE__*/ function(e) {
	return e.xs = "container-mw-xs", e.sm = "container-mw-sm", e.md = "container-mw-md", e.lg = "container-mw-lg", e.xl = "container-mw-xl", e;
}(fe || {}), N = /*#__PURE__*/ (0, x.forwardRef)(({ size: e, children: t, as: n = "div", bsPrefix: r = "container", fluid: i = !0, ...a }, o) => /*#__PURE__*/ x.createElement(w, {
	...a,
	as: n,
	bsPrefix: r,
	fluid: i,
	ref: o,
	className: (0, b.default)(a.className, e && fe[e])
}, t)), P = "right-scroll-bar-position", F = "width-before-scroll-bar", pe = "with-scroll-bars-hidden", me = "--removed-body-scroll-bar-size";
// node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@18.3.31_react@18.3.1/node_modules/use-callback-ref/dist/es2015/assignRef.js
function he(e, t) {
	return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
// node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@18.3.31_react@18.3.1/node_modules/use-callback-ref/dist/es2015/useRef.js
function ge(e, t) {
	var n = (0, x.useState)(function() {
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
var _e = typeof window < "u" ? x.useLayoutEffect : x.useEffect, ve = /* @__PURE__ */ new WeakMap();
function ye(e, t) {
	var n = ge(t || null, function(t) {
		return e.forEach(function(e) {
			return he(e, t);
		});
	});
	return _e(function() {
		var t = ve.get(n);
		if (t) {
			var r = new Set(t), i = new Set(e), a = n.current;
			r.forEach(function(e) {
				i.has(e) || he(e, null);
			}), i.forEach(function(e) {
				r.has(e) || he(e, a);
			});
		}
		ve.set(n, e);
	}, [e]), n;
}
// node_modules/.pnpm/use-sidecar@1.1.3_@types+react@18.3.31_react@18.3.1/node_modules/use-sidecar/dist/es2015/medium.js
function be(e) {
	return e;
}
function xe(e, t) {
	t === void 0 && (t = be);
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
function Se(e, t) {
	return t === void 0 && (t = be), xe(e, t);
}
function Ce(e) {
	e === void 0 && (e = {});
	var t = xe(null);
	return t.options = y({
		async: !0,
		ssr: !1
	}, e), t;
}
// node_modules/.pnpm/use-sidecar@1.1.3_@types+react@18.3.31_react@18.3.1/node_modules/use-sidecar/dist/es2015/exports.js
var we = function(e) {
	var t = e.sideCar, r = n(e, ["sideCar"]);
	if (!t) throw Error("Sidecar: please provide `sideCar` property to import the right car");
	var i = t.read();
	if (!i) throw Error("Sidecar medium not found");
	return x.createElement(i, y({}, r));
};
we.isSideCarExport = !0;
function Te(e, t) {
	return e.useMedium(t), we;
}
// node_modules/.pnpm/react-remove-scroll@2.7.2_@types+react@18.3.31_react@18.3.1/node_modules/react-remove-scroll/dist/es2015/medium.js
var Ee = Ce(), De = function() {}, Oe = x.forwardRef(function(e, t) {
	var r = x.useRef(null), i = x.useState({
		onScrollCapture: De,
		onWheelCapture: De,
		onTouchMoveCapture: De
	}), a = i[0], o = i[1], s = e.forwardProps, c = e.children, l = e.className, u = e.removeScrollBar, d = e.enabled, f = e.shards, p = e.sideCar, m = e.noRelative, h = e.noIsolation, g = e.inert, _ = e.allowPinchZoom, v = e.as, b = v === void 0 ? "div" : v, S = e.gapMode, C = n(e, [
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
	]), w = p, T = ye([r, t]), E = y(y({}, C), a);
	return x.createElement(x.Fragment, null, d && x.createElement(w, {
		sideCar: Ee,
		removeScrollBar: u,
		shards: f,
		noRelative: m,
		noIsolation: h,
		inert: g,
		setCallbacks: o,
		allowPinchZoom: !!_,
		lockRef: r,
		gapMode: S
	}), s ? x.cloneElement(x.Children.only(c), y(y({}, E), { ref: T })) : x.createElement(b, y({}, E, {
		className: l,
		ref: T
	}), c));
});
Oe.defaultProps = {
	enabled: !0,
	removeScrollBar: !0,
	inert: !1
}, Oe.classNames = {
	fullWidth: F,
	zeroRight: P
};
// node_modules/.pnpm/focus-lock@1.3.6/node_modules/focus-lock/dist/es2015/constants.js
var ke = "data-focus-lock", Ae = "data-focus-lock-disabled", je = "data-no-focus-lock", Me = "data-autofocus-inside", Ne = "data-no-autofocus", Pe = {
	width: "1px",
	height: "0px",
	padding: 0,
	overflow: "hidden",
	position: "fixed",
	top: "1px",
	left: "1px"
}, Fe = Se({}, function(e) {
	return {
		target: e.target,
		currentTarget: e.currentTarget
	};
}), Ie = Se(), Le = Se(), Re = Ce({
	async: !0,
	ssr: typeof document < "u"
}), ze = /*#__PURE__*/ (0, x.createContext)(void 0), Be = [], Ve = /*#__PURE__*/ (0, x.forwardRef)(function(e, t) {
	var n, r = (0, x.useState)(), i = r[0], a = r[1], o = (0, x.useRef)(), s = (0, x.useRef)(!1), c = (0, x.useRef)(null), l = (0, x.useState)({})[1], u = e.children, d = e.disabled, f = d !== void 0 && d, m = e.noFocusGuards, h = m !== void 0 && m, g = e.persistentFocus, _ = g !== void 0 && g, v = e.crossFrame, y = v === void 0 || v, b = e.autoFocus, S = b === void 0 || b;
	e.allowTextSelection;
	var C = e.group, w = e.className, T = e.whiteList, E = e.hasPositiveIndices, ee = e.shards, D = ee === void 0 ? Be : ee, te = e.as, ne = te === void 0 ? "div" : te, re = e.lockProps, O = re === void 0 ? {} : re, ie = e.sideCar, ae = e.returnFocus, k = ae !== void 0 && ae, oe = e.focusOptions, A = e.onActivation, j = e.onDeactivation, se = (0, x.useState)({})[0], M = (0, x.useCallback)(function(e) {
		var t = e.captureFocusRestore;
		if (!c.current) {
			var n = document?.activeElement;
			c.current = n, n !== document.body && (c.current = t(n));
		}
		o.current && A && A(o.current), s.current = !0, l();
	}, [A]), ce = (0, x.useCallback)(function() {
		s.current = !1, j && j(o.current), l();
	}, [j]), le = (0, x.useCallback)(function(e) {
		var t = c.current;
		if (t) {
			var n = (typeof t == "function" ? t() : t) || document.body, r = typeof k == "function" ? k(n) : k;
			if (r) {
				var i = typeof r == "object" ? r : void 0;
				c.current = null, e ? Promise.resolve().then(function() {
					return n.focus(i);
				}) : n.focus(i);
			}
		}
	}, [k]), ue = (0, x.useCallback)(function(e) {
		s.current && Fe.useMedium(e);
	}, []), de = Ie.useMedium, fe = (0, x.useCallback)(function(e) {
		o.current !== e && (o.current = e, a(e));
	}, []), N = p((n = {}, n[Ae] = f && "disabled", n[ke] = C, n), O), P = h !== !0, F = P && h !== "tail", pe = ye([t, fe]), me = (0, x.useMemo)(function() {
		return {
			observed: o,
			shards: D,
			enabled: !f,
			get active() {
				return s.current;
			}
		};
	}, [
		f,
		s,
		D,
		o
	]);
	return /*#__PURE__*/ x.createElement(x.Fragment, null, P && [/*#__PURE__*/ x.createElement("div", {
		key: "guard-first",
		"data-focus-guard": !0,
		tabIndex: f ? -1 : 0,
		style: Pe
	}), E ? /*#__PURE__*/ x.createElement("div", {
		key: "guard-nearest",
		"data-focus-guard": !0,
		tabIndex: f ? -1 : 1,
		style: Pe
	}) : null], !f && /*#__PURE__*/ x.createElement(ie, {
		id: se,
		sideCar: Re,
		observed: i,
		disabled: f,
		persistentFocus: _,
		crossFrame: y,
		autoFocus: S,
		whiteList: T,
		shards: D,
		onActivation: M,
		onDeactivation: ce,
		returnFocus: le,
		focusOptions: oe,
		noFocusGuards: h
	}), /*#__PURE__*/ x.createElement(ne, p({ ref: pe }, N, {
		className: w,
		onBlur: de,
		onFocus: ue
	}), /*#__PURE__*/ x.createElement(ze.Provider, { value: me }, u)), F && /*#__PURE__*/ x.createElement("div", {
		"data-focus-guard": !0,
		tabIndex: f ? -1 : 0,
		style: Pe
	}));
});
Ve.propTypes = {};
// node_modules/.pnpm/react-focus-lock@2.13.7_@types+react@18.3.31_react@18.3.1/node_modules/react-focus-lock/dist/es2015/util.js
function He(e) {
	setTimeout(e, 1);
}
var Ue = function(e) {
	return e && "current" in e ? e.current : e;
}, We = Ve, Ge = Ce(), Ke = "data-focus-on-hidden", qe = { preventScroll: !0 }, Je = x.forwardRef(function(e, t) {
	var r = x.useState(!1), i = r[0], a = r[1], o = x.useState(null), s = o[0], c = o[1], l = e.children, u = e.autoFocus, d = e.shards, f = e.crossFrame, p = e.enabled, m = p === void 0 || p, h = e.scrollLock, g = h === void 0 || h, _ = e.focusLock, v = _ === void 0 || _, b = e.returnFocus, S = b === void 0 || b, C = e.inert, w = e.allowPinchZoom, T = e.sideCar, E = e.className, ee = e.shouldIgnore, D = e.preventScrollOnFocus, te = e.style, ne = e.as, re = e.gapMode, O = n(e, [
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
	]), ie = T, ae = y(y({}, i), {
		as: ne,
		style: te,
		sideCar: T,
		shards: d,
		allowPinchZoom: w,
		gapMode: re,
		inert: C,
		enabled: m && g
	}), k = x.useCallback(function(e) {
		c(e);
	}, []), oe = x.useCallback(function() {
		c(null);
	}, []);
	return x.createElement(x.Fragment, null, x.createElement(We, {
		ref: t,
		sideCar: T,
		disabled: !(m && v),
		returnFocus: S,
		autoFocus: u,
		shards: d,
		crossFrame: f,
		onActivation: k,
		onDeactivation: oe,
		className: E,
		whiteList: ee,
		lockProps: ae,
		focusOptions: D ? qe : void 0,
		as: Oe
	}, l), m && x.createElement(ie, y({}, O, {
		sideCar: Ge,
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
function Ye(e, t) {
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
function Xe(e) {
	var t = Ye(e, "string");
	return I(t) == "symbol" ? t : t + "";
}
// node_modules/.pnpm/@babel+runtime@7.29.14/node_modules/@babel/runtime/helpers/esm/defineProperty.js
function Ze(e, t, n) {
	return (t = Xe(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
// node_modules/.pnpm/react-clientside-effect@1.2.8_react@18.3.1/node_modules/react-clientside-effect/lib/index.es.js
function Qe(e, t) {
	function n(e) {
		return e.displayName || e.name || "Component";
	}
	return function(r) {
		var i = [], a;
		function s() {
			a = e(i.map(function(e) {
				return e.props;
			})), t(a);
		}
		var c = /*#__PURE__*/ function(e) {
			o(t, e);
			function t() {
				return e.apply(this, arguments) || this;
			}
			t.peek = function() {
				return a;
			};
			var n = t.prototype;
			return n.componentDidMount = function() {
				i.push(this), s();
			}, n.componentDidUpdate = function() {
				s();
			}, n.componentWillUnmount = function() {
				var e = i.indexOf(this);
				i.splice(e, 1), s();
			}, n.render = function() {
				return /*#__PURE__*/ x.createElement(r, this.props);
			}, t;
		}(x.PureComponent);
		return Ze(c, "displayName", "SideEffect(" + n(r) + ")"), c;
	};
}
// node_modules/.pnpm/focus-lock@1.3.6/node_modules/focus-lock/dist/es2015/utils/array.js
var L = function(e) {
	for (var t = Array(e.length), n = 0; n < e.length; ++n) t[n] = e[n];
	return t;
}, R = function(e) {
	return Array.isArray(e) ? e : [e];
}, $e = function(e) {
	return Array.isArray(e) ? e[0] : e;
}, et = function(e) {
	if (e.nodeType !== Node.ELEMENT_NODE) return !1;
	var t = window.getComputedStyle(e, null);
	return !t || !t.getPropertyValue ? !1 : t.getPropertyValue("display") === "none" || t.getPropertyValue("visibility") === "hidden";
}, tt = function(e) {
	return e.parentNode && e.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? e.parentNode.host : e.parentNode;
}, nt = function(e) {
	return e === document || e && e.nodeType === Node.DOCUMENT_NODE;
}, rt = function(e) {
	return e.hasAttribute("inert");
}, it = function(e, t) {
	return !e || nt(e) || !et(e) && !rt(e) && t(tt(e));
}, at = function(e, t) {
	var n = e.get(t);
	if (n !== void 0) return n;
	var r = it(t, at.bind(void 0, e));
	return e.set(t, r), r;
}, ot = function(e, t) {
	return e && !nt(e) ? pt(e) ? t(tt(e)) : !1 : !0;
}, st = function(e, t) {
	var n = e.get(t);
	if (n !== void 0) return n;
	var r = ot(t, st.bind(void 0, e));
	return e.set(t, r), r;
}, ct = function(e) {
	return e.dataset;
}, lt = function(e) {
	return e.tagName === "BUTTON";
}, ut = function(e) {
	return e.tagName === "INPUT";
}, dt = function(e) {
	return ut(e) && e.type === "radio";
}, ft = function(e) {
	return !ut(e) && !lt(e) || e.type !== "hidden" && !e.disabled;
}, pt = function(e) {
	var t = e.getAttribute(Ne);
	return ![
		!0,
		"true",
		""
	].includes(t);
}, mt = function(e) {
	return !!(e && ct(e)?.focusGuard);
}, ht = function(e) {
	return !mt(e);
}, gt = function(e) {
	return !!e;
}, _t = function(e, t) {
	var n = Math.max(0, e.tabIndex), r = Math.max(0, t.tabIndex), i = n - r, a = e.index - t.index;
	if (i) {
		if (!n) return 1;
		if (!r) return -1;
	}
	return i || a;
}, vt = function(e) {
	return e.tabIndex < 0 && !e.hasAttribute("tabindex") ? 0 : e.tabIndex;
}, yt = function(e, t, n) {
	return L(e).map(function(e, t) {
		var r = vt(e);
		return {
			node: e,
			index: t,
			tabIndex: n && r === -1 ? (e.dataset || {}).focusGuard ? 0 : -1 : r
		};
	}).filter(function(e) {
		return !t || e.tabIndex >= 0;
	}).sort(_t);
}, bt = "button:enabled,select:enabled,textarea:enabled,input:enabled,a[href],area[href],summary,iframe,object,embed,audio[controls],video[controls],[tabindex],[contenteditable],[autofocus]", xt = `${bt}, [data-focus-guard]`, St = function(e, t) {
	return L((e.shadowRoot || e).children).reduce(function(e, n) {
		return e.concat(n.matches(t ? xt : bt) ? [n] : [], St(n));
	}, []);
}, Ct = function(e, t) {
	return e instanceof HTMLIFrameElement && e.contentDocument?.body ? z([e.contentDocument.body], t) : [e];
}, z = function(e, t) {
	return e.reduce(function(e, n) {
		var r, i = St(n, t), a = (r = []).concat.apply(r, i.map(function(e) {
			return Ct(e, t);
		}));
		return e.concat(a, n.parentNode ? L(n.parentNode.querySelectorAll(bt)).filter(function(e) {
			return e === n;
		}) : []);
	}, []);
}, wt = function(e) {
	return L(e.querySelectorAll(`[${Me}]`)).map(function(e) {
		return z([e]);
	}).reduce(function(e, t) {
		return e.concat(t);
	}, []);
}, Tt = function(e, t) {
	return L(e).filter(function(e) {
		return at(t, e);
	}).filter(function(e) {
		return ft(e);
	});
}, Et = function(e, t) {
	return t === void 0 && (t = /* @__PURE__ */ new Map()), L(e).filter(function(e) {
		return st(t, e);
	});
}, Dt = function(e, t, n) {
	return yt(Tt(z(e, n), t), !0, n);
}, B = function(e, t) {
	return yt(Tt(z(e), t), !1);
}, Ot = function(e, t) {
	return Tt(wt(e), t);
}, V = function(e, t) {
	return e.shadowRoot ? V(e.shadowRoot, t) : Object.getPrototypeOf(e).contains !== void 0 && Object.getPrototypeOf(e).contains.call(e, t) ? !0 : L(e.children).some(function(e) {
		if (e instanceof HTMLIFrameElement) {
			var n = e.contentDocument?.body;
			return n ? V(n, t) : !1;
		}
		return V(e, t);
	});
}, kt = function(e) {
	for (var t = /* @__PURE__ */ new Set(), n = e.length, r = 0; r < n; r += 1) for (var i = r + 1; i < n; i += 1) {
		var a = e[r].compareDocumentPosition(e[i]);
		(a & Node.DOCUMENT_POSITION_CONTAINED_BY) > 0 && t.add(i), (a & Node.DOCUMENT_POSITION_CONTAINS) > 0 && t.add(r);
	}
	return e.filter(function(e, n) {
		return !t.has(n);
	});
}, At = function(e) {
	return e.parentNode ? At(e.parentNode) : e;
}, jt = function(e) {
	return R(e).filter(Boolean).reduce(function(e, t) {
		var n = t.getAttribute(ke);
		return e.push.apply(e, n ? kt(L(At(t).querySelectorAll(`[${ke}="${n}"]:not([${Ae}="disabled"])`))) : [t]), e;
	}, []);
}, Mt = function(e) {
	try {
		return e();
	} catch {
		return;
	}
}, H = function(e) {
	if (e === void 0 && (e = document), e && e.activeElement) {
		var t = e.activeElement;
		return t.shadowRoot ? H(t.shadowRoot) : t instanceof HTMLIFrameElement && Mt(function() {
			return t.contentWindow.document;
		}) ? H(t.contentWindow.document) : t;
	}
}, Nt = function(e, t) {
	return e === t;
}, Pt = function(e, t) {
	return !!L(e.querySelectorAll("iframe")).some(function(e) {
		return Nt(e, t);
	});
}, Ft = function(e, t) {
	return t === void 0 && (t = H($e(e).ownerDocument)), !t || t.dataset && t.dataset.focusGuard ? !1 : jt(e).some(function(e) {
		return V(e, t) || Pt(e, t);
	});
}, It = function(e) {
	e === void 0 && (e = document);
	var t = H(e);
	return t ? L(e.querySelectorAll(`[${je}]`)).some(function(e) {
		return V(e, t);
	}) : !1;
}, Lt = function(e, t) {
	return t.filter(dt).filter(function(t) {
		return t.name === e.name;
	}).filter(function(e) {
		return e.checked;
	})[0] || e;
}, Rt = function(e, t) {
	return dt(e) && e.name ? Lt(e, t) : e;
}, zt = function(e) {
	var t = /* @__PURE__ */ new Set();
	return e.forEach(function(n) {
		return t.add(Rt(n, e));
	}), e.filter(function(e) {
		return t.has(e);
	});
}, Bt = function(e) {
	return e[0] && e.length > 1 ? Rt(e[0], e) : e[0];
}, Vt = function(e, t) {
	return e.indexOf(Rt(t, e));
}, Ht = "NEW_FOCUS", Ut = function(e, t, n, r, i) {
	var a = e.length, o = e[0], s = e[a - 1], c = mt(r);
	if (!(r && e.indexOf(r) >= 0)) {
		var l = r === void 0 ? -1 : n.indexOf(r), u = i ? n.indexOf(i) : l, d = i ? e.indexOf(i) : -1;
		if (l === -1) return d === -1 ? Ht : d;
		if (d === -1) return Ht;
		var f = l - u, p = n.indexOf(o), m = n.indexOf(s), h = zt(n), g = r === void 0 ? -1 : h.indexOf(r), _ = i ? h.indexOf(i) : g, v = h.filter(function(e) {
			return e.tabIndex >= 0;
		}), y = r === void 0 ? -1 : v.indexOf(r), b = i ? v.indexOf(i) : y, x = y >= 0 && b >= 0 ? b - y : _ - g;
		if (!f && d >= 0 || t.length === 0) return d;
		var S = Vt(e, t[0]), C = Vt(e, t[t.length - 1]);
		if (l <= p && c && Math.abs(f) > 1) return C;
		if (l >= m && c && Math.abs(f) > 1) return S;
		if (f && Math.abs(x) > 1) return d;
		if (l <= p) return C;
		if (l > m) return S;
		if (f) return Math.abs(f) > 1 ? d : (a + d + f) % a;
	}
}, Wt = function(e) {
	return function(t) {
		var n = ct(t)?.autofocus;
		return t.autofocus || n !== void 0 && n !== "false" || e.indexOf(t) >= 0;
	};
}, Gt = function(e, t, n) {
	var r = Et(e.map(function(e) {
		return e.node;
	}).filter(Wt(n)));
	return r && r.length ? Bt(r) : Bt(Et(t));
}, Kt = function(e, t) {
	return t === void 0 && (t = []), t.push(e), e.parentNode && Kt(e.parentNode.host || e.parentNode, t), t;
}, qt = function(e, t) {
	for (var n = Kt(e), r = Kt(t), i = 0; i < n.length; i += 1) {
		var a = n[i];
		if (r.indexOf(a) >= 0) return a;
	}
	return !1;
}, Jt = function(e, t, n) {
	var r = R(e), i = R(t), a = r[0], o = !1;
	return i.filter(Boolean).forEach(function(e) {
		o = qt(o || e, e) || o, n.filter(Boolean).forEach(function(e) {
			var t = qt(a, e);
			t && (o = !o || V(t, o) ? t : qt(t, o));
		});
	}), o;
}, Yt = function(e, t) {
	return e.reduce(function(e, n) {
		return e.concat(Ot(n, t));
	}, []);
}, Xt = function(e, t) {
	var n = /* @__PURE__ */ new Map();
	return t.forEach(function(e) {
		return n.set(e.node, e);
	}), e.map(function(e) {
		return n.get(e);
	}).filter(gt);
}, Zt = function(e, t) {
	var n = H(R(e).length > 0 ? document : $e(e).ownerDocument), r = jt(e).filter(ht), i = Jt(n || e, e, r), a = /* @__PURE__ */ new Map(), o = B(r, a), s = o.filter(function(e) {
		var t = e.node;
		return ht(t);
	});
	if (s[0]) {
		var c = B([i], a).map(function(e) {
			return e.node;
		}), l = Xt(c, s), u = l.map(function(e) {
			return e.node;
		}), d = l.filter(function(e) {
			return e.tabIndex >= 0;
		}).map(function(e) {
			return e.node;
		}), f = Ut(u, d, c, n, t);
		if (f === "NEW_FOCUS") {
			var p = Gt(o, d, Yt(r, a)) || Gt(o, u, Yt(r, a));
			if (p) return { node: p };
			console.warn("focus-lock: cannot find any node to move focus into");
		} else return f === void 0 ? f : l[f];
	}
}, Qt = function(e) {
	var t = jt(e).filter(ht), n = yt(z([Jt(e, e, t)], !0), !0, !0), r = z(t, !1);
	return n.map(function(e) {
		var t = e.node;
		return {
			node: t,
			index: e.index,
			lockItem: r.indexOf(t) >= 0,
			guard: mt(t)
		};
	});
}, $t = function(e, t) {
	e && ("focus" in e && e.focus(t), "contentWindow" in e && e.contentWindow && e.contentWindow.focus());
}, en = 0, tn = !1, nn = function(e, t, n) {
	n === void 0 && (n = {});
	var r = Zt(e, t);
	if (!tn && r) {
		if (en > 2) {
			console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"), tn = !0, setTimeout(function() {
				tn = !1;
			}, 1);
			return;
		}
		en++, $t(r.node, n.focusOptions), en--;
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
var rn = function(e) {
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
}, an = function(e) {
	if (e) for (var t = e.stack, n = e.ownerDocument, r = /* @__PURE__ */ new Map(), i = 0, a = t; i < a.length; i++) {
		var o = a[i], s = o.parent?.call(o);
		if (s && n.contains(s)) {
			for (var c = o.left?.call(o), l = o.current(), u = s.contains(l) ? l : void 0, d = o.right?.call(o), f = Dt([s], r), p = u ?? c?.nextElementSibling ?? d ?? c; p;) {
				for (var m = 0, h = f; m < h.length; m++) {
					var g = h[m];
					if (p?.contains(g.node)) return g.node;
				}
				p = p.nextElementSibling;
			}
			if (f.length) return f[0].node;
		}
	}
}, on = function(e) {
	var t = rn(e);
	return function() {
		return an(t);
	};
}, sn = function(e, t, n) {
	if (!e || !t) return console.error("no element or scope given"), {};
	var r = R(t);
	if (r.every(function(t) {
		return !V(t, e);
	})) return console.error("Active element is not contained in the scope"), {};
	var i = n ? Dt(r, /* @__PURE__ */ new Map()) : B(r, /* @__PURE__ */ new Map()), a = i.findIndex(function(t) {
		return t.node === e;
	});
	if (a !== -1) return {
		prev: i[a - 1],
		next: i[a + 1],
		first: i[0],
		last: i[i.length - 1]
	};
}, cn = function(e, t) {
	var n = t ? Dt(R(e), /* @__PURE__ */ new Map()) : B(R(e), /* @__PURE__ */ new Map());
	return {
		first: n[0],
		last: n[n.length - 1]
	};
}, ln = function(e) {
	return Object.assign({
		scope: document.body,
		cycle: !0,
		onlyTabbable: !0
	}, e);
}, un = function(e, t, n) {
	t === void 0 && (t = {});
	var r = ln(t), i = sn(e, r.scope, r.onlyTabbable);
	if (i) {
		var a = n(i, r.cycle);
		a && $t(a.node, r.focusOptions);
	}
}, dn = function(e, t) {
	t === void 0 && (t = {}), un(e, t, function(e, t) {
		var n = e.next, r = e.first;
		return n || t && r;
	});
}, fn = function(e, t) {
	t === void 0 && (t = {}), un(e, t, function(e, t) {
		var n = e.prev, r = e.last;
		return n || t && r;
	});
}, pn = function(e, t, n) {
	var r = cn(e, t.onlyTabbable ?? !0)[n];
	r && $t(r.node, t.focusOptions);
}, mn = function(e, t) {
	t === void 0 && (t = {}), pn(e, t, "first");
}, hn = function(e, t) {
	t === void 0 && (t = {}), pn(e, t, "last");
}, gn = function() {
	return document && document.activeElement === document.body;
}, _n = function() {
	return gn() || It();
}, W = null, G = null, vn = function() {
	return null;
}, K = null, q = !1, yn = !1, bn = function() {
	return !0;
}, xn = function(e) {
	return (W.whiteList || bn)(e);
}, Sn = function(e, t) {
	K = {
		observerNode: e,
		portaledElement: t
	};
}, Cn = function(e) {
	return K && K.portaledElement === e;
};
function wn(e, t, n, r) {
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
var Tn = function(e) {
	return e ? !!q : q === "meanwhile";
}, En = function e(t, n, r) {
	return n && (n.host === t && (!n.activeElement || r.contains(n.activeElement)) || n.parentNode && e(t, n.parentNode, r));
}, Dn = function(e, t) {
	return t.some(function(t) {
		return En(e, t, t);
	});
}, On = function(e) {
	return B(e, /* @__PURE__ */ new Map());
}, kn = function(e) {
	return !On([e.parentNode]).some(function(t) {
		return t.node === e;
	});
}, An = function() {
	var e = !1;
	if (W) {
		var t = W, n = t.observed, r = t.persistentFocus, i = t.autoFocus, a = t.shards, o = t.crossFrame, s = t.focusOptions, c = t.noFocusGuards, l = n || K && K.portaledElement;
		if (gn() && G && G !== document.body && (!document.body.contains(G) || kn(G))) {
			var u = vn();
			u && u.focus();
		}
		var d = document && document.activeElement;
		if (l) {
			var f = [l].concat(a.map(Ue).filter(Boolean));
			if ((!d || xn(d)) && (r || function() {
				if (!Tn(o) || !c || !G || yn) return !1;
				var e = On(f), t = e.findIndex(function(e) {
					return e.node === G;
				});
				return t === 0 || t === e.length - 1;
			}() || !_n() || !G && i) && (l && !(Ft(f) || d && Dn(d, f) || Cn(d, l)) && (document && !G && d && !i ? (d.blur && d.blur(), document.body.focus()) : (e = nn(f, G, { focusOptions: s }), K = {})), G = document && document.activeElement, G !== document.body && (vn = on(G)), q = !1), document && d !== document.activeElement && document.querySelector("[data-focus-auto-guard]")) {
				var p = document && document.activeElement, m = Qt(f), h = m.map(function(e) {
					return e.node;
				}).indexOf(p);
				h > -1 && (m.filter(function(e) {
					var t = e.guard, n = e.node;
					return t && n.dataset.focusAutoGuard;
				}).forEach(function(e) {
					return e.node.removeAttribute("tabIndex");
				}), wn(h, m.length, 1, m), wn(h, -1, -1, m));
			}
		}
	}
	return e;
}, jn = function(e) {
	An() && e && (e.stopPropagation(), e.preventDefault());
}, Mn = function() {
	return He(An);
}, Nn = function(e) {
	var t = e.target, n = e.currentTarget;
	n.contains(t) || Sn(n, t);
}, Pn = function() {
	return null;
}, Fn = function() {
	yn = !0;
}, In = function() {
	yn = !1, q = "just", He(function() {
		q = "meanwhile";
	});
}, Ln = function() {
	document.addEventListener("focusin", jn), document.addEventListener("focusout", Mn), window.addEventListener("focus", Fn), window.addEventListener("blur", In);
}, Rn = function() {
	document.removeEventListener("focusin", jn), document.removeEventListener("focusout", Mn), window.removeEventListener("focus", Fn), window.removeEventListener("blur", In);
};
function zn(e) {
	return e.filter(function(e) {
		return !e.disabled;
	});
}
var Bn = {
	moveFocusInside: nn,
	focusInside: Ft,
	focusNextElement: dn,
	focusPrevElement: fn,
	focusFirstElement: mn,
	focusLastElement: hn,
	captureFocusRestore: on
};
function Vn(e) {
	var t = e.slice(-1)[0];
	t && !W && Ln();
	var n = W, r = n && t && t.id === n.id;
	W = t, n && !r && (n.onDeactivation(), e.filter(function(e) {
		return e.id === n.id;
	}).length || n.returnFocus(!t)), t ? (G = null, r && n.observed === t.observed || t.onActivation(Bn), An(!0), He(An)) : (Rn(), G = null);
}
Fe.assignSyncMedium(Nn), Ie.assignMedium(Mn), Le.assignMedium(function(e) {
	return e(Bn);
}), Te(Re, Qe(zn, Vn)(Pn));
// node_modules/.pnpm/get-nonce@1.0.1/node_modules/get-nonce/dist/es2015/index.js
var Hn = function() {
	if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
// node_modules/.pnpm/react-style-singleton@2.2.3_@types+react@18.3.31_react@18.3.1/node_modules/react-style-singleton/dist/es2015/singleton.js
function Un() {
	if (!document) return null;
	var e = document.createElement("style");
	e.type = "text/css";
	var t = Hn();
	return t && e.setAttribute("nonce", t), e;
}
function Wn(e, t) {
	e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function Gn(e) {
	(document.head || document.getElementsByTagName("head")[0]).appendChild(e);
}
var Kn = function() {
	var e = 0, t = null;
	return {
		add: function(n) {
			e == 0 && (t = Un()) && (Wn(t, n), Gn(t)), e++;
		},
		remove: function() {
			e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
		}
	};
}, qn = function() {
	var e = Kn();
	return function(t, n) {
		x.useEffect(function() {
			return e.add(t), function() {
				e.remove();
			};
		}, [t && n]);
	};
}, Jn = function() {
	var e = qn();
	return function(t) {
		var n = t.styles, r = t.dynamic;
		return e(n, r), null;
	};
}, Yn = {
	left: 0,
	top: 0,
	right: 0,
	gap: 0
}, Xn = function(e) {
	return parseInt(e || "", 10) || 0;
}, Zn = function(e) {
	var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], i = t[e === "padding" ? "paddingRight" : "marginRight"];
	return [
		Xn(n),
		Xn(r),
		Xn(i)
	];
}, Qn = function(e) {
	if (e === void 0 && (e = "margin"), typeof window > "u") return Yn;
	var t = Zn(e), n = document.documentElement.clientWidth, r = window.innerWidth;
	return {
		left: t[0],
		top: t[1],
		right: t[2],
		gap: Math.max(0, r - n + t[2] - t[0])
	};
}, $n = Jn(), J = "data-scroll-locked", er = function(e, t, n, r) {
	var i = e.left, a = e.top, o = e.right, s = e.gap;
	return n === void 0 && (n = "margin"), `
  .${pe} {
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
    ${me}: ${s}px;
  }
`;
}, tr = function() {
	var e = parseInt(document.body.getAttribute("data-scroll-locked") || "0", 10);
	return isFinite(e) ? e : 0;
}, nr = function() {
	x.useEffect(function() {
		return document.body.setAttribute(J, (tr() + 1).toString()), function() {
			var e = tr() - 1;
			e <= 0 ? document.body.removeAttribute(J) : document.body.setAttribute(J, e.toString());
		};
	}, []);
}, rr = function(e) {
	var t = e.noRelative, n = e.noImportant, r = e.gapMode, i = r === void 0 ? "margin" : r;
	nr();
	var a = x.useMemo(function() {
		return Qn(i);
	}, [i]);
	return x.createElement($n, { styles: er(a, !t, i, n ? "" : "!important") });
}, ir = !1;
if (typeof window < "u") try {
	var ar = Object.defineProperty({}, "passive", { get: function() {
		return ir = !0, !0;
	} });
	window.addEventListener("test", ar, ar), window.removeEventListener("test", ar, ar);
} catch {
	ir = !1;
}
var Y = ir ? { passive: !1 } : !1, or = function(e) {
	return e.tagName === "TEXTAREA";
}, sr = function(e, t) {
	if (!(e instanceof Element)) return !1;
	var n = window.getComputedStyle(e);
	return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !or(e) && n[t] === "visible");
}, cr = function(e) {
	return sr(e, "overflowY");
}, lr = function(e) {
	return sr(e, "overflowX");
}, ur = function(e, t) {
	var n = t.ownerDocument, r = t;
	do {
		if (typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host), pr(e, r)) {
			var i = mr(e, r);
			if (i[1] > i[2]) return !0;
		}
		r = r.parentNode;
	} while (r && r !== n.body);
	return !1;
}, dr = function(e) {
	return [
		e.scrollTop,
		e.scrollHeight,
		e.clientHeight
	];
}, fr = function(e) {
	return [
		e.scrollLeft,
		e.scrollWidth,
		e.clientWidth
	];
}, pr = function(e, t) {
	return e === "v" ? cr(t) : lr(t);
}, mr = function(e, t) {
	return e === "v" ? dr(t) : fr(t);
}, hr = function(e, t) {
	return e === "h" && t === "rtl" ? -1 : 1;
}, gr = function(e, t, n, r, i) {
	var a = hr(e, window.getComputedStyle(t).direction), o = a * r, s = n.target, c = t.contains(s), l = !1, u = o > 0, d = 0, f = 0;
	do {
		if (!s) break;
		var p = mr(e, s), m = p[0], h = p[1] - p[2] - a * m;
		(m || h) && pr(e, s) && (d += h, f += m);
		var g = s.parentNode;
		s = g && g.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? g.host : g;
	} while (!c && s !== document.body || c && (t.contains(s) || t === s));
	return (u && (i && Math.abs(d) < 1 || !i && o > d) || !u && (i && Math.abs(f) < 1 || !i && -o > f)) && (l = !0), l;
}, _r = function(e) {
	return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, vr = function(e) {
	return [e.deltaX, e.deltaY];
}, yr = function(e) {
	return e && "current" in e ? e.current : e;
}, br = function(e, t) {
	return e[0] === t[0] && e[1] === t[1];
}, xr = function(e) {
	return `
  .block-interactivity-${e} {pointer-events: none;}
  .allow-interactivity-${e} {pointer-events: all;}
`;
}, Sr = 0, X = [];
function Cr(e) {
	var n = x.useRef([]), r = x.useRef([0, 0]), i = x.useRef(), a = x.useState(Sr++)[0], o = x.useState(Jn)[0], s = x.useRef(e);
	x.useEffect(function() {
		s.current = e;
	}, [e]), x.useEffect(function() {
		if (e.inert) {
			document.body.classList.add(`block-interactivity-${a}`);
			var n = t([e.lockRef.current], (e.shards || []).map(yr), !0).filter(Boolean);
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
	var c = x.useCallback(function(e, t) {
		if ("touches" in e && e.touches.length === 2 || e.type === "wheel" && e.ctrlKey) return !s.current.allowPinchZoom;
		var n = _r(e), a = r.current, o = "deltaX" in e ? e.deltaX : a[0] - n[0], c = "deltaY" in e ? e.deltaY : a[1] - n[1], l, u = e.target, d = Math.abs(o) > Math.abs(c) ? "h" : "v";
		if ("touches" in e && d === "h" && u.type === "range") return !1;
		var f = window.getSelection(), p = f && f.anchorNode;
		if (p && (p === u || p.contains(u))) return !1;
		var m = ur(d, u);
		if (!m) return !0;
		if (m ? l = d : (l = d === "v" ? "h" : "v", m = ur(d, u)), !m) return !1;
		if (!i.current && "changedTouches" in e && (o || c) && (i.current = l), !l) return !0;
		var h = i.current || l;
		return gr(h, t, e, h === "h" ? o : c, !0);
	}, []), l = x.useCallback(function(e) {
		var t = e;
		if (X.length && X[X.length - 1] === o) {
			var r = "deltaY" in t ? vr(t) : _r(t), i = n.current.filter(function(e) {
				return e.name === t.type && (e.target === t.target || t.target === e.shadowParent) && br(e.delta, r);
			})[0];
			if (i && i.should) t.cancelable && t.preventDefault();
			else if (!i) {
				var a = (s.current.shards || []).map(yr).filter(Boolean).filter(function(e) {
					return e.contains(t.target);
				});
				(a.length > 0 ? c(t, a[0]) : !s.current.noIsolation) && t.cancelable && t.preventDefault();
			}
		}
	}, []), u = x.useCallback(function(e, t, r, i) {
		var a = {
			name: e,
			delta: t,
			target: r,
			should: i,
			shadowParent: wr(r)
		};
		n.current.push(a), setTimeout(function() {
			n.current = n.current.filter(function(e) {
				return e !== a;
			});
		}, 1);
	}, []), d = x.useCallback(function(e) {
		r.current = _r(e), i.current = void 0;
	}, []), f = x.useCallback(function(t) {
		u(t.type, vr(t), t.target, c(t, e.lockRef.current));
	}, []), p = x.useCallback(function(t) {
		u(t.type, _r(t), t.target, c(t, e.lockRef.current));
	}, []);
	x.useEffect(function() {
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
	return x.createElement(x.Fragment, null, h ? x.createElement(o, { styles: xr(a) }) : null, m ? x.createElement(rr, {
		noRelative: e.noRelative,
		gapMode: e.gapMode
	}) : null);
}
function wr(e) {
	for (var t = null; e !== null;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
	return t;
}
Te(Ee, Cr);
// node_modules/.pnpm/aria-hidden@1.2.6/node_modules/aria-hidden/dist/es2015/index.js
var Tr = function(e) {
	return typeof document > "u" ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body;
}, Z = /* @__PURE__ */ new WeakMap(), Er = /* @__PURE__ */ new WeakMap(), Dr = {}, Or = 0, kr = function(e) {
	return e && (e.host || kr(e.parentNode));
}, Ar = function(e, t) {
	return t.map(function(t) {
		if (e.contains(t)) return t;
		var n = kr(t);
		return n && e.contains(n) ? n : (console.error("aria-hidden", t, "in not contained inside", e, ". Doing nothing"), null);
	}).filter(function(e) {
		return !!e;
	});
}, jr = function(e, t, n, r) {
	var i = Ar(t, Array.isArray(e) ? e : [e]);
	Dr[n] || (Dr[n] = /* @__PURE__ */ new WeakMap());
	var a = Dr[n], o = [], s = /* @__PURE__ */ new Set(), c = new Set(i), l = function(e) {
		e && !s.has(e) && (s.add(e), l(e.parentNode));
	};
	i.forEach(l);
	var u = function(e) {
		e && !c.has(e) && Array.prototype.forEach.call(e.children, function(e) {
			if (s.has(e)) u(e);
			else try {
				var t = e.getAttribute(r), i = t !== null && t !== "false", c = (Z.get(e) || 0) + 1, l = (a.get(e) || 0) + 1;
				Z.set(e, c), a.set(e, l), o.push(e), c === 1 && i && Er.set(e, !0), l === 1 && e.setAttribute(n, "true"), i || e.setAttribute(r, "true");
			} catch (t) {
				console.error("aria-hidden: cannot operate on ", e, t);
			}
		});
	};
	return u(t), s.clear(), Or++, function() {
		o.forEach(function(e) {
			var t = Z.get(e) - 1, i = a.get(e) - 1;
			Z.set(e, t), a.set(e, i), t || (Er.has(e) || e.removeAttribute(r), Er.delete(e)), i || e.removeAttribute(n);
		}), Or--, Or || (Z = /* @__PURE__ */ new WeakMap(), Z = /* @__PURE__ */ new WeakMap(), Er = /* @__PURE__ */ new WeakMap(), Dr = {});
	};
}, Mr = function(e, t, n) {
	n === void 0 && (n = "data-aria-hidden");
	var r = Array.from(Array.isArray(e) ? e : [e]), i = t || Tr(e);
	return i ? (r.push.apply(r, Array.from(i.querySelectorAll("[aria-live], script"))), jr(r, i, n, "aria-hidden")) : function() {
		return null;
	};
}, Nr = Jn(), Pr = "\n [" + Ke + "] {\n   pointer-events: none !important;\n }\n", Fr = function() {
	return x.createElement(Nr, { styles: Pr });
}, Ir = function(e) {
	return "current" in e ? e.current : e;
};
function Lr(e) {
	var t = e.setLockProps, n = e.onEscapeKey, r = e.onClickOutside, i = e.shards, a = e.onActivation, o = e.onDeactivation, s = e.noIsolation, c = e.activeNode, l = (0, x.useRef)(null), u = (0, x.useRef)(0);
	return x.useEffect(function() {
		var e = function(e) {
			e.defaultPrevented || (e.code === "Escape" || e.key === "Escape" || e.keyCode === 27) && n && n(e);
		}, t = function(e) {
			e.defaultPrevented || e.target === l.current || e instanceof MouseEvent && e.button !== 0 || i && i.map(Ir).some(function(t) {
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
	]), (0, x.useEffect)(function() {
		if (c) return a && a(c), function() {
			o && o();
		};
	}, [!!c]), (0, x.useEffect)(function() {
		if (!s && c) return Mr(v([c], (i || []).map(Ir)), c.ownerDocument.body, Ke);
	}, [c, s]), (0, x.useEffect)(function() {
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
	}, []), x.createElement(Fr, null);
}
// node_modules/.pnpm/react-focus-on@3.10.2_@types+react@18.3.31_react@18.3.1/node_modules/react-focus-on/dist/es2015/sidecar.js
var Rr = Te(Ge, Lr), zr = function(e) {
	return x.createElement(Rr, y({}, e));
}, Br = x.forwardRef(function(e, t) {
	return x.createElement(Je, y({}, e, {
		ref: t,
		sideCar: zr
	}));
}), Q = _();
function Vr({ onClick: e }) {
	return /*#__PURE__*/ x.createElement("div", {
		className: "pgn__modal-backdrop",
		onClick: e,
		onKeyDown: e,
		"data-testid": "modal-backdrop",
		role: "presentation"
	});
}
// istanbul ignore next
function Hr({ children: e = null }) {
	return /*#__PURE__*/ x.createElement("div", { className: "pgn__modal-content-container" }, e);
}
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/hooks/useWindowSizeHook.js
function $() {
	let [e, t] = (0, x.useState)({
		width: void 0,
		height: void 0
	});
	return (0, x.useLayoutEffect)(() => {
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
var Ur = ({ name: e, introduction: t, onLaunch: n }) => {
	let r = ($().width || window.innerWidth) < j.extraSmall.maxWidth;
	return /* @__PURE__ */ (0, Q.jsx)("div", {
		className: "rounded-lg overflow-hidden scenario-intro bg-interact-default",
		children: /* @__PURE__ */ (0, Q.jsxs)(O, {
			className: "p-0",
			children: [/* @__PURE__ */ (0, Q.jsxs)(a, {
				xs: "12",
				lg: "8",
				className: "p-5 d-flex flex-column",
				children: [
					/* @__PURE__ */ (0, Q.jsxs)("div", {
						className: "scenario-name border border-primary d-flex align-items-center p-3 mb-5",
						children: [/* @__PURE__ */ (0, Q.jsx)("div", {
							className: "border-right",
							children: /* @__PURE__ */ (0, Q.jsx)(i, {
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
						children: /* @__PURE__ */ (0, Q.jsx)(l, {
							variant: "primary",
							className: `mt-4 ${r ? "w-100" : ""}`,
							onClick: n,
							block: r,
							children: "Launch Interactive"
						})
					})
				]
			}), /* @__PURE__ */ (0, Q.jsx)(a, {
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
}, Wr = ({ option: e, interactionType: t, isContinueEnabled: n, onContinue: r, onReturn: i }) => {
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
				/* @__PURE__ */ (0, Q.jsx)(Gr, { option: e }),
				/* @__PURE__ */ (0, Q.jsx)(h, {
					className: "text-icon-action-sec-neutral",
					src: le,
					alt: "Return",
					onClick: i
				}),
				t == "SelectOne" && /* @__PURE__ */ (0, Q.jsx)("div", {
					className: "position-absolute w-100 text-right",
					style: { bottom: 0 },
					children: /* @__PURE__ */ (0, Q.jsx)(l, {
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
}, Gr = ({ option: e }) => {
	let t = null, n = "", r = "";
	switch (e.type) {
		case "Correct":
			t = ce, n = "Correct", r = "positive";
			break;
		case "Incorrect":
			t = m, n = "Incorrect", r = "negative";
			break;
		case "Warning": t = de, n = "Warning", r = "warning";
	}
	return /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsxs)("p", {
		className: "d-flex",
		children: [/* @__PURE__ */ (0, Q.jsx)(i, {
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
}, Kr = ({ scenarios: e, selectedOptions: t }) => /* @__PURE__ */ (0, Q.jsx)(N, {
	fluid: !0,
	children: e.map((e, n) => {
		let r = e.options[t.get(n)];
		return /* @__PURE__ */ (0, Q.jsxs)(O, {
			className: "outcome-option-row",
			children: [/* @__PURE__ */ (0, Q.jsxs)(a, {
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
			}), /* @__PURE__ */ (0, Q.jsx)(a, {
				xs: "12",
				md: "6",
				className: "pt-4",
				children: /* @__PURE__ */ (0, Q.jsx)(Gr, { option: r })
			})]
		});
	})
}), qr = ({ outcome: e, scenarios: t, selectedOptions: n, onRestart: r, onExit: a, imageURL: o }) => {
	let s = $().width || window.innerWidth, c = "desktop";
	return s < j.extraSmall.maxWidth && (c = "mobile"), /* @__PURE__ */ (0, Q.jsxs)("div", {
		className: "d-flex flex-grow-1 flex-wrap mh-100 overflow-auto",
		children: [/* @__PURE__ */ (0, Q.jsxs)("div", {
			className: "p-4 bg-interact-default",
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
				e.displaySelectedOptions && /* @__PURE__ */ (0, Q.jsx)(Kr, {
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
				children: [/* @__PURE__ */ (0, Q.jsxs)(l, {
					variant: "outline-primary",
					className: `${c == "mobile" ? "w-100 mb-3" : ""}`,
					onClick: r,
					block: c == "mobile",
					children: ["Restart ", /* @__PURE__ */ (0, Q.jsx)(i, { src: ue })]
				}), /* @__PURE__ */ (0, Q.jsxs)(l, {
					variant: "primary",
					className: `${c == "mobile" ? "w-100" : "ml-3"}`,
					onClick: a,
					block: c == "mobile",
					children: ["Exit ", /* @__PURE__ */ (0, Q.jsx)(i, { src: f })]
				})]
			})
		})]
	});
}, Jr = ({ index: e, total: t, onReset: n, variant: r }) => /* @__PURE__ */ (0, Q.jsxs)("div", {
	className: `scenario-stepper scenario-stepper-${r}`,
	children: [
		/* @__PURE__ */ (0, Q.jsx)(h, {
			className: "text-icon-action-default bg-main mr-3",
			src: ue,
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
}), Yr = ({ onClose: e }) => /* @__PURE__ */ (0, Q.jsx)(h, {
	className: "text-icon-action-sec-neutral",
	src: f,
	onClick: e,
	alt: "Close activity"
}), Xr = ({ onClose: e, title: t, onReset: n, activeScenarioIndex: r, totalScenarios: i }) => /* @__PURE__ */ (0, Q.jsx)("div", {
	className: "sticky-top d-flex w-100 bg-interact-default",
	children: /* @__PURE__ */ (0, Q.jsx)(N, {
		fluid: !0,
		children: /* @__PURE__ */ (0, Q.jsxs)(O, {
			className: "px-3",
			children: [
				/* @__PURE__ */ (0, Q.jsx)(a, {
					className: "d-flex align-items-center mx-3",
					children: /* @__PURE__ */ (0, Q.jsx)("h5", {
						className: "text-interact-headings",
						children: t
					})
				}),
				/* @__PURE__ */ (0, Q.jsx)(a, {
					className: "d-flex justify-content-center",
					children: /* @__PURE__ */ (0, Q.jsx)(Jr, {
						variant: "desktop",
						onReset: n,
						index: r,
						total: i
					})
				}),
				/* @__PURE__ */ (0, Q.jsx)(a, {
					className: "d-flex justify-content-end align-items-center mx-3",
					children: /* @__PURE__ */ (0, Q.jsx)(Yr, { onClose: e })
				})
			]
		})
	})
}), Zr = ({ onClose: e, title: t, activeScenarioIndex: n, totalScenarios: r }) => /* @__PURE__ */ (0, Q.jsx)("div", {
	className: "sticky-top d-flex mx-2 pt-4 pb-2 bg-interact-default",
	children: /* @__PURE__ */ (0, Q.jsxs)(N, {
		fluid: !0,
		className: "d-flex align-items-center",
		children: [
			/* @__PURE__ */ (0, Q.jsx)(Qr, {
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
			/* @__PURE__ */ (0, Q.jsx)(Yr, { onClose: e })
		]
	})
}), Qr = ({ current: e, total: t }) => {
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
				stroke: "var(--unfolding-scenario-color-interact-emphasis-inner)",
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
				stroke: "var(--unfolding-scenario-color-interact-raised-emphasis-inner)",
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
}, $r = ({ onClose: e, title: t, onReset: n, activeScenarioIndex: r, totalScenarios: i }) => /* @__PURE__ */ (0, Q.jsx)("div", {
	className: "sticky-top d-flex w-100 pb-2 bg-interact-default",
	children: /* @__PURE__ */ (0, Q.jsxs)(N, {
		className: "mx-3",
		fluid: !0,
		children: [/* @__PURE__ */ (0, Q.jsxs)(O, { children: [/* @__PURE__ */ (0, Q.jsx)(a, {
			className: "d-flex align-items-center py-3",
			children: /* @__PURE__ */ (0, Q.jsx)("h5", {
				className: "text-interact-headings m-0",
				children: t
			})
		}), /* @__PURE__ */ (0, Q.jsx)(a, {
			className: "d-flex justify-content-end align-items-center",
			children: /* @__PURE__ */ (0, Q.jsx)(Yr, { onClose: e })
		})] }), /* @__PURE__ */ (0, Q.jsx)(O, { children: /* @__PURE__ */ (0, Q.jsx)(a, {
			className: "d-flex justify-content-center",
			children: /* @__PURE__ */ (0, Q.jsx)(Jr, {
				variant: "tablet",
				onReset: n,
				index: r,
				total: i
			})
		}) })]
	})
}), ei = ({ onClose: e, title: t, onReset: n, activeScenarioIndex: r, totalScenarios: i }) => {
	let a = $().width || window.innerWidth;
	return a < j.extraSmall.maxWidth ? /* @__PURE__ */ (0, Q.jsx)(Zr, {
		onClose: e,
		title: t,
		activeScenarioIndex: r,
		totalScenarios: i
	}) : a < j.large.maxWidth ? /* @__PURE__ */ (0, Q.jsx)($r, {
		onClose: e,
		title: t,
		onReset: n,
		activeScenarioIndex: r,
		totalScenarios: i
	}) : /* @__PURE__ */ (0, Q.jsx)(Xr, {
		onClose: e,
		title: t,
		onReset: n,
		activeScenarioIndex: r,
		totalScenarios: i
	});
}, ti = ({ onClick: e, children: t, active: n, preSelected: r }) => /* @__PURE__ */ (0, Q.jsxs)("button", {
	className: `scenario-option-btn ${n ? "text-interact-content-inverse bg-interact-raised-emphasis active" : "bg-interact-raised text-interact-content"} ${r ? "pre-selected" : ""}`,
	onClick: e,
	children: [/* @__PURE__ */ (0, Q.jsx)("div", {
		className: "flex-grow-1 text-left mx-3 px-3 my-3",
		children: t
	}), /* @__PURE__ */ (0, Q.jsx)("div", {
		className: "hover-arrow",
		children: /* @__PURE__ */ (0, Q.jsx)(i, {
			src: se,
			size: "lg"
		})
	})]
}), ni = ({ scenario: e, activeOptionIndex: t, preSelectedOptions: n, isContinueEnabled: r, onContinue: a, onSelectOption: o }) => /* @__PURE__ */ (0, Q.jsx)("div", {
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
							children: /* @__PURE__ */ (0, Q.jsx)(i, { src: M })
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
					children: /* @__PURE__ */ (0, Q.jsx)(h, {
						className: "text-icon-action-sec-neutral",
						src: le,
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
							children: e.options.map((e, r) => /* @__PURE__ */ (0, Q.jsx)(ti, {
								active: t === r,
								onClick: () => o(r),
								preSelected: n.has(r),
								children: e.value
							}))
						}),
						/* @__PURE__ */ (0, Q.jsx)("div", {
							className: "d-flex justify-content-end",
							children: /* @__PURE__ */ (0, Q.jsx)(l, {
								variant: "primary",
								disabled: !r,
								onClick: a,
								children: "Continue"
							})
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, Q.jsx)("div", {
				className: `w-50 h-100 p-6 position-absolute d-flex flex-column align-items-start justify-content-center ${t === null ? "" : "active"} options-pane options-pane-3`,
				children: t === null ? null : /* @__PURE__ */ (0, Q.jsx)(Gr, { option: e.options[t] })
			})
		]
	})
}), ri = ({ interactionType: e, scenario: t, activeOptionIndex: n, preSelectedOptions: r, isContinueEnabled: a, onContinue: o, onSelectOption: s }) => /* @__PURE__ */ (0, Q.jsxs)("div", {
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
						children: /* @__PURE__ */ (0, Q.jsx)(i, { src: M })
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
					children: t.options.map((e, t) => /* @__PURE__ */ (0, Q.jsx)(ti, {
						active: n === t,
						onClick: () => s(t),
						preSelected: r.has(t),
						children: e.value
					}))
				})]
			}),
			e != "SelectOne" && /* @__PURE__ */ (0, Q.jsx)("div", {
				className: "d-flex justify-content-end",
				children: /* @__PURE__ */ (0, Q.jsx)(l, {
					variant: "primary",
					disabled: !a,
					onClick: o,
					children: "Continue"
				})
			})
		]
	}), /* @__PURE__ */ (0, Q.jsx)("div", {
		className: `w-100 h-100 position-absolute d-flex flex-column justify-content-center p-3 m-3 bg-interact-raised ${n === null ? "" : "active"} tablet-options-pane tablet-options-pane-2`,
		children: n !== null && /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)(Wr, {
			option: t.options[n],
			interactionType: e,
			isContinueEnabled: a,
			onContinue: o,
			onReturn: () => s(null)
		}), e == "SelectOne" && /* @__PURE__ */ (0, Q.jsx)("div", {
			className: "d-flex justify-content-end",
			children: /* @__PURE__ */ (0, Q.jsx)(l, {
				variant: "primary",
				disabled: !a,
				onClick: o,
				children: "Continue"
			})
		})] })
	})]
}), ii = ({ interactionType: e, scenario: t, activeOptionIndex: n, preSelectedOptions: r, isContinueEnabled: i, onContinue: a, onSelectOption: o }) => {
	let [s, c] = (0, x.useState)("description");
	return s == "description" ? /* @__PURE__ */ (0, Q.jsx)(ai, {
		scenario: t,
		onNext: () => c("options")
	}) : /* @__PURE__ */ (0, Q.jsx)(oi, {
		interactionType: e,
		scenario: t,
		activeOptionIndex: n,
		isContinueEnabled: i,
		onContinue: a,
		onSelectOption: o,
		preSelectedOptions: r,
		onBack: () => c("description")
	});
}, ai = ({ scenario: e, onNext: t }) => /* @__PURE__ */ (0, Q.jsx)("div", {
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
					children: /* @__PURE__ */ (0, Q.jsx)(i, { src: M })
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
				children: /* @__PURE__ */ (0, Q.jsx)(l, {
					variant: "primary",
					className: "w-100 mb-4",
					onClick: t,
					children: "Continue"
				})
			})
		]
	})
}), oi = ({ interactionType: e, scenario: t, activeOptionIndex: n, preSelectedOptions: r, isContinueEnabled: i, onContinue: a, onSelectOption: o, onBack: s }) => /* @__PURE__ */ (0, Q.jsxs)("div", {
	className: "p-4 h-100 w-100 d-flex flex-column bg-interact-default",
	children: [
		/* @__PURE__ */ (0, Q.jsx)(h, {
			className: "text-icon-action-sec-neutral",
			src: le,
			alt: "Return",
			onClick: s
		}),
		/* @__PURE__ */ (0, Q.jsx)("h5", {
			className: "text-interact-headings",
			children: t.prompt
		}),
		/* @__PURE__ */ (0, Q.jsx)("div", {
			className: "d-flex flex-column flex-grow-1",
			children: t.options.map((e, t) => /* @__PURE__ */ (0, Q.jsx)(ti, {
				active: n === t,
				onClick: () => o(t),
				preSelected: r.has(t),
				children: e.value
			}))
		}),
		e != "SelectOne" && /* @__PURE__ */ (0, Q.jsx)(l, {
			variant: "primary",
			className: "w-100",
			disabled: !i,
			onClick: a,
			children: "Continue"
		}),
		n === null ? null : /* @__PURE__ */ (0, Q.jsx)(Wr, {
			interactionType: e,
			isContinueEnabled: i,
			onContinue: a,
			option: t.options[n],
			onReturn: () => o(null)
		})
	]
}), si = ({ interactionType: e, scenario: t, onContinue: n, onSelectOption: r }) => {
	let i = $(), [a, o] = (0, x.useState)(null), [s, c] = (0, x.useState)(/* @__PURE__ */ new Set()), l = e == "Explore" && s.size == t.options.length || e == "SelectOne" && a !== null, u = i.width || window.innerWidth;
	return u < j.extraSmall.maxWidth ? /* @__PURE__ */ (0, Q.jsx)(ii, {
		interactionType: e,
		scenario: t,
		activeOptionIndex: a,
		preSelectedOptions: s,
		isContinueEnabled: l,
		onContinue: n,
		onSelectOption: (e) => {
			e === null ? o(null) : (c(/* @__PURE__ */ new Set([...s, e])), o(e), r(e));
		}
	}) : u < j.large.maxWidth ? /* @__PURE__ */ (0, Q.jsx)(ri, {
		interactionType: e,
		scenario: t,
		activeOptionIndex: a,
		preSelectedOptions: s,
		isContinueEnabled: l,
		onContinue: n,
		onSelectOption: (e) => {
			e === null ? o(null) : (c(/* @__PURE__ */ new Set([...s, e])), o(e), r(e));
		}
	}) : /* @__PURE__ */ (0, Q.jsx)(ni, {
		scenario: t,
		activeOptionIndex: a,
		preSelectedOptions: s,
		isContinueEnabled: l,
		onContinue: n,
		onSelectOption: (e) => {
			e === null ? o(null) : (c(/* @__PURE__ */ new Set([...s, e])), o(e), r(e));
		}
	});
}, ci = ({ onCancel: e, title: t, children: n }) => /* @__PURE__ */ (0, Q.jsx)(Br, {
	allowPinchZoom: !0,
	scrollLock: !0,
	enabled: !0,
	onEscapeKey: e,
	onClickOutside: () => {},
	className: "pgn__modal-layer",
	children: /* @__PURE__ */ (0, Q.jsxs)(Hr, { children: [/* @__PURE__ */ (0, Q.jsx)(Vr, { onClick: e }), /* @__PURE__ */ (0, Q.jsx)("div", {
		role: "dialog",
		"aria-label": t,
		className: "pgn__modal pgn__modal-md pgn__modal-default p-3",
		children: n
	})] })
}), li = ({ onCancel: e, onConfirm: t }) => {
	let n = ($().width || window.innerWidth) < j.extraSmall.maxWidth;
	return /* @__PURE__ */ (0, Q.jsx)(ci, {
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
					children: [/* @__PURE__ */ (0, Q.jsx)(l, {
						variant: "outline-primary",
						className: `${n ? "w-100 mb-3" : ""}`,
						onClick: t,
						block: n,
						children: "Leave"
					}), /* @__PURE__ */ (0, Q.jsx)(l, {
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
}, ui = ({ onCancel: e, onConfirm: t }) => {
	let n = ($().width || window.innerWidth) < j.extraSmall.maxWidth;
	return /* @__PURE__ */ (0, Q.jsx)(ci, {
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
					children: [/* @__PURE__ */ (0, Q.jsx)(l, {
						variant: "outline-primary",
						className: `${n ? "w-100 mb-3" : ""}`,
						onClick: t,
						block: n,
						children: "Restart"
					}), /* @__PURE__ */ (0, Q.jsx)(l, {
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
}, di = ({ data: e, onExit: t }) => {
	let [n, r] = (0, x.useState)(0), [i, a] = (0, x.useState)(null), [o, s] = (0, x.useState)(/* @__PURE__ */ new Map());
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		className: "fullscreen-activity",
		children: [
			/* @__PURE__ */ (0, Q.jsx)(ei, {
				onClose: () => a("leave"),
				title: e.name,
				onReset: () => a("restart"),
				activeScenarioIndex: n,
				totalScenarios: e.scenarios.length
			}),
			n < e.scenarios.length ? /* @__PURE__ */ (0, Q.jsx)(si, {
				scenario: e.scenarios[n],
				interactionType: e.interactionType,
				onContinue: () => {
					(0, x.startTransition)(() => {
						r(n + 1);
					});
				},
				onSelectOption: (e) => s(new Map(o).set(n, e))
			}, n) : e.outcome && /* @__PURE__ */ (0, Q.jsx)(qr, {
				outcome: e.outcome,
				scenarios: e.scenarios,
				selectedOptions: o,
				onRestart: () => a("restart"),
				onExit: () => a("leave"),
				imageURL: e.introduction.imageURL
			}),
			i == "leave" && /* @__PURE__ */ (0, Q.jsx)(li, {
				onConfirm: t,
				onCancel: () => a(null)
			}),
			i == "restart" && /* @__PURE__ */ (0, Q.jsx)(ui, {
				onConfirm: () => {
					r(0), a(null);
				},
				onCancel: () => a(null)
			})
		]
	});
}, fi = "unfolding-scenario-modal", pi = (e) => new URLSearchParams(window.location.search).has(fi) ? /* @__PURE__ */ (0, Q.jsx)(mi, { ...e }) : /* @__PURE__ */ (0, Q.jsx)(hi, { ...e }), mi = ({ data: e }) => /* @__PURE__ */ (0, Q.jsx)("div", {
	className: "xblock-unfolding-scenario-wrapper",
	children: /* @__PURE__ */ (0, Q.jsx)(di, {
		data: e.scenarioData,
		onExit: () => {
			window.parent.postMessage({ type: "plugin.modal-close" }, "*");
		}
	})
}), hi = ({ data: e, usageId: t }) => ((0, x.useEffect)(() => {
	let e = (e) => {
		if (e.source === window.parent && e.data?.type === "plugin.modal-close") {
			let e = document.getElementById("content") ?? document.body;
			window.parent.postMessage({
				type: "plugin.resize",
				payload: {
					width: e.offsetWidth,
					height: e.offsetHeight
				}
			}, "*"), window.setTimeout(() => {
				window.parent.postMessage({
					type: "plugin.videoFullScreen",
					payload: { open: !1 }
				}, "*");
			}, 150);
		}
	};
	return window.addEventListener("message", e), () => window.removeEventListener("message", e);
}, []), /* @__PURE__ */ (0, Q.jsx)("div", {
	className: "xblock-unfolding-scenario-wrapper",
	children: /* @__PURE__ */ (0, Q.jsx)(Ur, {
		name: e.scenarioData.name,
		introduction: e.scenarioData.introduction,
		onLaunch: () => {
			window.parent.postMessage({
				type: "plugin.videoFullScreen",
				payload: { open: !0 }
			}, "*");
			let n = new URLSearchParams(window.location.search);
			n.set(fi, "1"), window.parent.postMessage({
				type: "plugin.modal",
				payload: {
					url: `${window.location.origin}/xblock/${t}?${n}`,
					title: e.displayName,
					isFullscreen: !0,
					height: "100vh",
					modalBodyClassName: "unfolding-scenario-fullscreen-modal p-0 overflow-hidden w-100 vh-100"
				}
			}, "*");
		}
	})
})), gi = ".xblock-unfolding-scenario-wrapper{--unfolding-scenario-button-border-radius-inner:var(--unfolding-scenario-button-radius,var(--pgn-size-btn-border-radius-base,0));--unfolding-scenario-text-interact-accent-inner:var(--unfolding-scenario-text-interact-accent,#2a578d);--unfolding-scenario-color-background-interactive-inner:var(--unfolding-scenario-color-background-interactive,#8cc9d1);--unfolding-scenario-color-text-interactive-inner:var(--unfolding-scenario-color-text-interactive,#2f808e);--unfolding-scenario-color-bg-emphasis-inner:var(--unfolding-scenario-color-bg-emphasis,#223e5d);--unfolding-scenario-color-bg-main-inner:var(--unfolding-scenario-color-bg-main,#1b324a);--unfolding-scenario-color-border-interact-default-inner:var(--unfolding-scenario-color-border-interact-default,#b2d8de);--unfolding-scenario-color-border-interact-emphasis-inner:var(--unfolding-scenario-color-border-interact-emphasis,#327d8a);--unfolding-scenario-color-border-sec-action-focus-inner:var(--unfolding-scenario-color-border-sec-action-focus,#0e1d2f);--unfolding-scenario-color-icon-action-sec-default-inner:var(--unfolding-scenario-color-icon-action-sec-default,#3874bc);--unfolding-scenario-color-icon-interact-default-inner:var(--unfolding-scenario-color-icon-interact-default,#327d8a);--unfolding-scenario-color-interact-default-inner:var(--unfolding-scenario-color-interact-default,#ecf5f7);--unfolding-scenario-color-interact-emphasis-inner:var(--unfolding-scenario-color-interact-emphasis,#d9ebef);--unfolding-scenario-color-interact-raised-emphasis-inner:var(--unfolding-scenario-color-interact-raised-emphasis,#327d8a);--unfolding-scenario-color-txt-interact-content-inverse-inner:var(--unfolding-scenario-color-txt-interact-content-inverse,#fff);--unfolding-scenario-color-txt-interact-content-inner:var(--unfolding-scenario-color-txt-interact-content,#223e5d);--unfolding-scenario-color-txt-interact-headings-inner:var(--unfolding-scenario-color-txt-interact-headings,#327d8a);--unfolding-scenario-color-txt-action-prim-default-inner:var(--unfolding-scenario-color-txt-action-prim-default,#fff);--unfolding-scenario-color-txt-content-inner:var(--unfolding-scenario-color-txt-content,#fff);--unfolding-scenario-color-txt-sec-content-inner:var(--unfolding-scenario-color-txt-sec-content,#223e5d);--unfolding-scenario-color-icon-action-default-inner:var(--unfolding-scenario-color-icon-action-default,#fff);--unfolding-scenario-color-border-default-inner:var(--unfolding-scenario-color-border-default,#4e657d);--unfolding-scenario-color-interact-raised-inner:var(--unfolding-scenario-color-interact-raised,#fff);--unfolding-scenario-color-icon-inverse-inner:var(--unfolding-scenario-color-icon-inverse,#fff);--unfolding-scenario-color-icon-default-inner:var(--unfolding-scenario-color-icon-default,#8cc4ce);--unfolding-scenario-color-icon-action-sec-neutral-inner:var(--unfolding-scenario-color-icon-action-sec-neutral,#1c3a5e);--unfolding-scenario-color-txt-feedback-negative-inner:var(--unfolding-scenario-color-txt-feedback-negative,#db493d);--unfolding-scenario-color-icon-interact-negative-inner:var(--unfolding-scenario-color-icon-interact-negative,#db493d);--unfolding-scenario-color-txt-feedback-positive-inner:var(--unfolding-scenario-color-txt-feedback-positive,#149418);--unfolding-scenario-color-icon-interact-positive-inner:var(--unfolding-scenario-color-icon-interact-positive,#149418);--unfolding-scenario-color-txt-feedback-warning-inner:var(--unfolding-scenario-color-txt-feedback-warning,#ffd900);--unfolding-scenario-color-icon-interact-warning-inner:var(--unfolding-scenario-color-icon-interact-warning,#ffd900)}.xblock-unfolding-scenario-wrapper .btn{border-radius:var(--unfolding-scenario-button-border-radius-inner)}.xblock-unfolding-scenario-wrapper .scenario-intro .scenario-name{color:var(--unfolding-scenario-color-text-interactive-inner);background-color:var(--unfolding-scenario-color-interact-emphasis-inner);border-radius:var(--pgn-spacing-spacer-base);border-bottom-left-radius:0;border-color:var(--unfolding-scenario-color-border-interact-default-inner)!important}.xblock-unfolding-scenario-wrapper .scenario-intro .scenario-name h5{color:var(--unfolding-scenario-color-text-interactive-inner)!important}.xblock-unfolding-scenario-wrapper .scenario-intro .scenario-name .border-right{border-color:var(--unfolding-scenario-color-border-interact-default-inner)!important}.xblock-unfolding-scenario-wrapper .scenario-intro .scenario-name .pgn__icon{color:var(--unfolding-scenario-color-interact-raised-emphasis-inner);zoom:2}.xblock-unfolding-scenario-wrapper .scenario-option-btn{height:calc(var(--pgn-typography-line-height-base) * var(--pgn-typography-font-size-base) * 3 + var(--pgn-spacing-spacer-base) * 2);border-radius:var(--pgn-size-border-radius-sm);margin-bottom:var(--pgn-spacing-spacer-base);border:0;justify-content:flex-start;align-items:center;padding:0;display:flex;overflow:hidden}.xblock-unfolding-scenario-wrapper .scenario-option-btn.pre-selected{outline:2px solid var(--unfolding-scenario-color-border-interact-emphasis-inner)}.xblock-unfolding-scenario-wrapper .scenario-option-btn .hover-arrow{background-color:var(--unfolding-scenario-color-interact-raised-emphasis-inner);align-items:center;min-width:10px;height:100%;display:flex}.xblock-unfolding-scenario-wrapper .scenario-option-btn .hover-arrow .pgn__icon{color:var(--unfolding-scenario-color-icon-inverse-inner);margin:0 var(--pgn-spacing-spacer-base);display:none}.xblock-unfolding-scenario-wrapper .scenario-option-btn:hover .hover-arrow .pgn__icon,.xblock-unfolding-scenario-wrapper .scenario-option-btn.active .hover-arrow .pgn__icon{display:block}.xblock-unfolding-scenario-wrapper .scenario-option-btn:focus-visible{outline:2px solid var(--unfolding-scenario-color-option-focus-border-inner)}.xblock-unfolding-scenario-wrapper .arrow-bubble{background-color:var(--unfolding-scenario-color-interact-emphasis-inner);color:var(--unfolding-scenario-color-icon-interact-default-inner);border:1px solid var(--unfolding-scenario-color-border-interact-default-inner);border-radius:var(--pgn-spacing-spacer-base);padding:calc(var(--pgn-spacing-spacer-base) * .5);border-bottom-left-radius:0;display:inline-block}.xblock-unfolding-scenario-wrapper .options-pane{transition:left .5s}@media (prefers-reduced-motion:reduce){.xblock-unfolding-scenario-wrapper .options-pane{transition:unset}}.xblock-unfolding-scenario-wrapper .options-pane-1{left:0%}.xblock-unfolding-scenario-wrapper .options-pane-2{left:50%}.xblock-unfolding-scenario-wrapper .options-pane-3{left:100%}.xblock-unfolding-scenario-wrapper .active.options-pane-1{left:-50%}.xblock-unfolding-scenario-wrapper .active.options-pane-2{left:0%}.xblock-unfolding-scenario-wrapper .active.options-pane-3{left:50%}.xblock-unfolding-scenario-wrapper .tablet-options-pane{transition:left .5s}@media (prefers-reduced-motion:reduce){.xblock-unfolding-scenario-wrapper .tablet-options-pane{transition:unset}}.xblock-unfolding-scenario-wrapper .tablet-options-pane-1{left:0%}.xblock-unfolding-scenario-wrapper .tablet-options-pane-2{border-left:var(--pgn-spacing-spacer-3) solid var(--unfolding-scenario-color-interact-default-inner);left:100%}.xblock-unfolding-scenario-wrapper .active.tablet-options-pane-1{left:-100%}.xblock-unfolding-scenario-wrapper .active.tablet-options-pane-2{left:0%}.xblock-unfolding-scenario-wrapper .option-feedback-wrapper{z-index:var(--pgn-elevation-zindex-fixed);border-left:var(--pgn-spacing-spacer-4) solid var(--unfolding-scenario-color-interact-default-inner);width:100%;height:100%;position:fixed;inset:0}.xblock-unfolding-scenario-wrapper .outcome-option-row+.outcome-option-row{margin-top:var(--pgn-spacing-spacer-4);padding-top:var(--pgn-spacing-spacer-4);border-top:1px solid var(--unfolding-scenario-color-border-interact-default-inner)}.xblock-unfolding-scenario-wrapper .scenario-stepper-desktop{border-bottom-right-radius:var(--pgn-size-border-radius-lg);border-bottom-left-radius:var(--pgn-size-border-radius-lg);padding-left:calc(var(--pgn-spacing-spacer-base) * .5);display:inline-flex}.xblock-unfolding-scenario-wrapper .scenario-stepper-tablet{border-radius:var(--pgn-size-border-radius-lg);width:100%;display:flex}.xblock-unfolding-scenario-wrapper .scenario-stepper{background-color:var(--unfolding-scenario-color-bg-main-inner);padding:var(--pgn-spacing-spacer-base);justify-content:center;align-items:center}.xblock-unfolding-scenario-wrapper .scenario-stepper .step-indicator{padding:calc(var(--pgn-spacing-spacer-base) * .25);height:var(--pgn-spacing-spacer-4-5);width:var(--pgn-spacing-spacer-4-5);font-size:calc(var(--pgn-typography-font-size-base) * 1.125);color:var(--unfolding-scenario-color-txt-content-inner);background-color:var(--unfolding-scenario-color-bg-emphasis-inner);border-radius:100%;justify-content:center;align-items:center;display:flex}.xblock-unfolding-scenario-wrapper .scenario-stepper .step-indicator.active{background-color:var(--unfolding-scenario-color-icon-default-inner);color:var(--unfolding-scenario-color-txt-interact-content-inner)}.xblock-unfolding-scenario-wrapper .scenario-stepper .step-indicator-separator{background-color:var(--unfolding-scenario-color-border-default-inner);width:17px;height:1px}.xblock-unfolding-scenario-wrapper .scenario-stepper .step-indicator-completed{font-size:calc(var(--pgn-typography-font-size-base) * 1.125);font-weight:var(--pgn-typography-headings-font-weight);margin-left:calc(var(--pgn-spacing-spacer-base) * 1.5);color:var(--unfolding-scenario-color-txt-content-inner)!important}.xblock-unfolding-scenario-wrapper .fullscreen-activity{background-color:var(--unfolding-scenario-color-interact-default-inner);flex-direction:column;display:flex;position:fixed;inset:0}.xblock-unfolding-scenario-wrapper .text-feedback-negative{color:var(--unfolding-scenario-color-txt-feedback-negative-inner)!important}.xblock-unfolding-scenario-wrapper .text-icon-interact-negative{color:var(--unfolding-scenario-color-icon-interact-negative-inner)!important}.xblock-unfolding-scenario-wrapper .text-feedback-positive{color:var(--unfolding-scenario-color-txt-feedback-positive-inner)!important}.xblock-unfolding-scenario-wrapper .text-icon-interact-positive{color:var(--unfolding-scenario-color-icon-interact-positive-inner)!important}.xblock-unfolding-scenario-wrapper .text-feedback-warning{color:var(--unfolding-scenario-color-txt-feedback-warning-inner)!important}.xblock-unfolding-scenario-wrapper .text-icon-interact-warning{color:var(--unfolding-scenario-color-icon-interact-warning-inner)!important}.xblock-unfolding-scenario-wrapper .text-interact-headings{color:var(--unfolding-scenario-color-txt-interact-headings-inner)!important}.xblock-unfolding-scenario-wrapper .text-interact-accent{color:var(--unfolding-scenario-color-txt-interact-accent-inner)!important}.xblock-unfolding-scenario-wrapper .text-interact-content{color:var(--unfolding-scenario-color-txt-interact-content-inner)!important}.xblock-unfolding-scenario-wrapper .text-interact-content-inverse{color:var(--unfolding-scenario-color-txt-interact-content-inverse-inner)!important}.xblock-unfolding-scenario-wrapper .text-content{color:var(--unfolding-scenario-color-txt-content-inner)!important}.xblock-unfolding-scenario-wrapper .text-sec-content{color:var(--unfolding-scenario-color-txt-sec-content-inner)!important}.xblock-unfolding-scenario-wrapper .text-icon-action-default{color:var(--unfolding-scenario-color-icon-action-default-inner)!important}.xblock-unfolding-scenario-wrapper .text-icon-action-sec-neutral{color:var(--unfolding-scenario-color-icon-action-sec-neutral-inner)!important}.xblock-unfolding-scenario-wrapper .bg-interact-raised-emphasis{background-color:var(--unfolding-scenario-color-interact-raised-emphasis-inner)!important}.xblock-unfolding-scenario-wrapper .bg-interact-raised{background-color:var(--unfolding-scenario-color-interact-raised-inner)!important}.xblock-unfolding-scenario-wrapper .bg-emphasis{background-color:var(--unfolding-scenario-color-bg-emphasis-inner)!important}.xblock-unfolding-scenario-wrapper .bg-icon-default{background-color:var(--unfolding-scenario-color-icon-default-inner)!important}.xblock-unfolding-scenario-wrapper .bg-interact-default{background-color:var(--unfolding-scenario-color-interact-default-inner)!important}.xblock-unfolding-scenario-wrapper .bg-main{background-color:var(--unfolding-scenario-color-bg-main-inner)!important}", _i = async (e, t, n) => {
	c({
		runtime: e,
		element: t,
		config: n.config,
		styles: gi
	})(/* @__PURE__ */ (0, Q.jsx)(pi, {
		usageId: t.dataset.usageId || "",
		data: n.data
	}));
};
export { _i as renderBlock };
