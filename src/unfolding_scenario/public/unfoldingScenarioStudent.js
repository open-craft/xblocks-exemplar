import { C as e, E as t, O as n, S as r, T as i, c as a, d as o, f as s, h as c, l, m as u, n as d, o as f, p, r as m, s as h, t as g, u as _, v, w as y, x as b } from "./IconButton-Cu-C9xMd.js";
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/icons/es5/ArrowForward.js
var x = /* @__PURE__ */ n(t()), S = (e) => /* @__PURE__ */ x.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ x.createElement("path", {
	d: "m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8Z",
	fill: "currentColor"
})), C = (e) => /* @__PURE__ */ x.createElement("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	...e
}, /* @__PURE__ */ x.createElement("path", {
	d: "M6 6v2h8.59L5 17.59 6.41 19 16 9.41V18h2V6z",
	fill: "currentColor"
})), ee = (e) => /* @__PURE__ */ x.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ x.createElement("path", {
	d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8-1.41-1.42Z",
	fill: "currentColor"
})), w = (e) => /* @__PURE__ */ x.createElement("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	...e
}, /* @__PURE__ */ x.createElement("path", {
	d: "M19 7v4H5.83l3.58-3.59L8 6l-6 6 6 6 1.41-1.41L5.83 13H21V7h-2z",
	fill: "currentColor"
})), T = (e) => /* @__PURE__ */ x.createElement("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	...e
}, /* @__PURE__ */ x.createElement("path", {
	d: "M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z",
	fill: "currentColor"
})), te = (e) => /* @__PURE__ */ x.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ x.createElement("path", {
	d: "M1 21h22L12 2 1 21Zm12-3h-2v-2h2v2Zm0-4h-2v-4h2v4Z",
	fill: "currentColor"
})), E = /* @__PURE__ */ n(s()), ne = [
	"bsPrefix",
	"fluid",
	"as",
	"className"
], re = { fluid: !1 }, D = /* @__PURE__ */ x.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.fluid, i = e.as, s = i === void 0 ? "div" : i, c = e.className, l = _(e, ne), u = a(n, "container"), d = typeof r == "string" ? "-" + r : "-fluid";
	return /* @__PURE__ */ x.createElement(s, o({ ref: t }, l, { className: (0, E.default)(c, r ? "" + u + d : u) }));
});
D.displayName = "Container", D.defaultProps = re;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Image.js
var O = /* @__PURE__ */ n(h()), ie = [
	"bsPrefix",
	"className",
	"fluid",
	"rounded",
	"roundedCircle",
	"thumbnail"
];
O.default.string, O.default.bool, O.default.bool, O.default.bool, O.default.bool;
var ae = {
	fluid: !1,
	rounded: !1,
	roundedCircle: !1,
	thumbnail: !1
}, k = /* @__PURE__ */ x.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.className, i = e.fluid, s = e.rounded, c = e.roundedCircle, l = e.thumbnail, u = _(e, ie);
	n = a(n, "img");
	var d = (0, E.default)(i && n + "-fluid", s && "rounded", c && "rounded-circle", l && n + "-thumbnail");
	return /* @__PURE__ */ x.createElement("img", o({ ref: t }, u, { className: (0, E.default)(r, d) }));
});
k.displayName = "Image", k.defaultProps = ae;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Row.js
var oe = [
	"bsPrefix",
	"className",
	"noGutters",
	"as"
], se = [
	"xl",
	"lg",
	"md",
	"sm",
	"xs"
], A = { noGutters: !1 }, j = /* @__PURE__ */ x.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.className, i = e.noGutters, s = e.as, c = s === void 0 ? "div" : s, l = _(e, oe), u = a(n, "row"), d = u + "-cols", f = [];
	return se.forEach(function(e) {
		var t = l[e];
		delete l[e];
		var n = typeof t == "object" && t ? t.cols : t, r = e === "xs" ? "" : "-" + e;
		n != null && f.push("" + d + r + "-" + n);
	}), /* @__PURE__ */ x.createElement(c, o({ ref: t }, l, { className: E.default.apply(void 0, [
		r,
		u,
		i && "no-gutters"
	].concat(f)) }));
});
j.displayName = "Row", j.defaultProps = A;
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/utils/breakpoints.js
var { sm: ce, md: le, lg: ue, xl: de, xxl: fe } = {
	xs: "0",
	sm: "576px",
	md: "768px",
	lg: "992px",
	xl: "1200px",
	xxl: "1400px"
}, M = {
	extraSmall: { maxWidth: parseFloat(ce) || 575.98 },
	small: {
		minWidth: parseFloat(ce) || 576,
		maxWidth: parseFloat(le) || 767.98
	},
	medium: {
		minWidth: parseFloat(le) || 768,
		maxWidth: parseFloat(ue) || 991.98
	},
	large: {
		minWidth: parseFloat(ue) || 992,
		maxWidth: parseFloat(de) || 1199.98
	},
	extraLarge: {
		minWidth: parseFloat(de) || 1200,
		maxWidth: parseFloat(fe) || 1399.98
	},
	extraExtraLarge: { minWidth: parseFloat(fe) || 1400 }
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
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Container/index.js
var pe = /* @__PURE__ */ function(e) {
	return e.xs = "container-mw-xs", e.sm = "container-mw-sm", e.md = "container-mw-md", e.lg = "container-mw-lg", e.xl = "container-mw-xl", e;
}(pe || {}), N = /* @__PURE__ */ (0, x.forwardRef)(({ size: e, children: t, as: n = "div", bsPrefix: r = "container", fluid: i = !0, ...a }, o) => /* @__PURE__ */ x.createElement(D, {
	...a,
	as: n,
	bsPrefix: r,
	fluid: i,
	ref: o,
	className: (0, E.default)(a.className, e && pe[e])
}, t)), P = "right-scroll-bar-position", F = "width-before-scroll-bar", me = "with-scroll-bars-hidden", he = "--removed-body-scroll-bar-size";
//#endregion
//#region node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@18.3.28_react@18.3.1/node_modules/use-callback-ref/dist/es2015/assignRef.js
function ge(e, t) {
	return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
//#endregion
//#region node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@18.3.28_react@18.3.1/node_modules/use-callback-ref/dist/es2015/useRef.js
function _e(e, t) {
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
//#endregion
//#region node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@18.3.28_react@18.3.1/node_modules/use-callback-ref/dist/es2015/useMergeRef.js
var ve = typeof window < "u" ? x.useLayoutEffect : x.useEffect, ye = /* @__PURE__ */ new WeakMap();
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
//#endregion
//#region node_modules/.pnpm/use-sidecar@1.1.3_@types+react@18.3.28_react@18.3.1/node_modules/use-sidecar/dist/es2015/medium.js
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
//#endregion
//#region node_modules/.pnpm/use-sidecar@1.1.3_@types+react@18.3.28_react@18.3.1/node_modules/use-sidecar/dist/es2015/exports.js
var Te = function(e) {
	var t = e.sideCar, n = r(e, ["sideCar"]);
	if (!t) throw Error("Sidecar: please provide `sideCar` property to import the right car");
	var i = t.read();
	if (!i) throw Error("Sidecar medium not found");
	return x.createElement(i, b({}, n));
};
Te.isSideCarExport = !0;
function Ee(e, t) {
	return e.useMedium(t), Te;
}
//#endregion
//#region node_modules/.pnpm/react-remove-scroll@2.7.2_@types+react@18.3.28_react@18.3.1/node_modules/react-remove-scroll/dist/es2015/medium.js
var De = we(), Oe = function() {}, ke = x.forwardRef(function(e, t) {
	var n = x.useRef(null), i = x.useState({
		onScrollCapture: Oe,
		onWheelCapture: Oe,
		onTouchMoveCapture: Oe
	}), a = i[0], o = i[1], s = e.forwardProps, c = e.children, l = e.className, u = e.removeScrollBar, d = e.enabled, f = e.shards, p = e.sideCar, m = e.noRelative, h = e.noIsolation, g = e.inert, _ = e.allowPinchZoom, v = e.as, y = v === void 0 ? "div" : v, S = e.gapMode, C = r(e, [
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
	return x.createElement(x.Fragment, null, d && x.createElement(ee, {
		sideCar: De,
		removeScrollBar: u,
		shards: f,
		noRelative: m,
		noIsolation: h,
		inert: g,
		setCallbacks: o,
		allowPinchZoom: !!_,
		lockRef: n,
		gapMode: S
	}), s ? x.cloneElement(x.Children.only(c), b(b({}, T), { ref: w })) : x.createElement(y, b({}, T, {
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
//#endregion
//#region node_modules/.pnpm/focus-lock@1.3.6/node_modules/focus-lock/dist/es2015/constants.js
var Ae = "data-focus-lock", je = "data-focus-lock-disabled", Me = "data-no-focus-lock", Ne = "data-autofocus-inside", Pe = "data-no-autofocus", I = {
	width: "1px",
	height: "0px",
	padding: 0,
	overflow: "hidden",
	position: "fixed",
	top: "1px",
	left: "1px"
}, Fe = function(e) {
	var t = e.children, n = t === void 0 ? null : t;
	return /* @__PURE__ */ x.createElement(x.Fragment, null, /* @__PURE__ */ x.createElement("div", {
		key: "guard-first",
		"data-focus-guard": !0,
		"data-focus-auto-guard": !0,
		style: I
	}), n, n && /* @__PURE__ */ x.createElement("div", {
		key: "guard-last",
		"data-focus-guard": !0,
		"data-focus-auto-guard": !0,
		style: I
	}));
};
Fe.propTypes = {};
//#endregion
//#region node_modules/.pnpm/react-focus-lock@2.13.7_@types+react@18.3.28_react@18.3.1/node_modules/react-focus-lock/dist/es2015/medium.js
var Ie = Ce({}, function(e) {
	return {
		target: e.target,
		currentTarget: e.currentTarget
	};
}), Le = Ce(), Re = Ce(), ze = we({
	async: !0,
	ssr: typeof document < "u"
}), Be = /* @__PURE__ */ (0, x.createContext)(void 0), Ve = [], He = /* @__PURE__ */ (0, x.forwardRef)(function(e, t) {
	var n, r = (0, x.useState)(), i = r[0], a = r[1], s = (0, x.useRef)(), c = (0, x.useRef)(!1), l = (0, x.useRef)(null), u = (0, x.useState)({})[1], d = e.children, f = e.disabled, p = f === void 0 ? !1 : f, m = e.noFocusGuards, h = m === void 0 ? !1 : m, g = e.persistentFocus, _ = g === void 0 ? !1 : g, v = e.crossFrame, y = v === void 0 ? !0 : v, b = e.autoFocus, S = b === void 0 ? !0 : b;
	e.allowTextSelection;
	var C = e.group, ee = e.className, w = e.whiteList, T = e.hasPositiveIndices, te = e.shards, E = te === void 0 ? Ve : te, ne = e.as, re = ne === void 0 ? "div" : ne, D = e.lockProps, O = D === void 0 ? {} : D, ie = e.sideCar, ae = e.returnFocus, k = ae === void 0 ? !1 : ae, oe = e.focusOptions, se = e.onActivation, A = e.onDeactivation, j = (0, x.useState)({})[0], ce = (0, x.useCallback)(function(e) {
		var t = e.captureFocusRestore;
		if (!l.current) {
			var n = document?.activeElement;
			l.current = n, n !== document.body && (l.current = t(n));
		}
		s.current && se && se(s.current), c.current = !0, u();
	}, [se]), le = (0, x.useCallback)(function() {
		c.current = !1, A && A(s.current), u();
	}, [A]), ue = (0, x.useCallback)(function(e) {
		var t = l.current;
		if (t) {
			var n = (typeof t == "function" ? t() : t) || document.body, r = typeof k == "function" ? k(n) : k;
			if (r) {
				var i = typeof r == "object" ? r : void 0;
				l.current = null, e ? Promise.resolve().then(function() {
					return n.focus(i);
				}) : n.focus(i);
			}
		}
	}, [k]), de = (0, x.useCallback)(function(e) {
		c.current && Ie.useMedium(e);
	}, []), fe = Le.useMedium, M = (0, x.useCallback)(function(e) {
		s.current !== e && (s.current = e, a(e));
	}, []), pe = o((n = {}, n[je] = p && "disabled", n[Ae] = C, n), O), N = h !== !0, P = N && h !== "tail", F = be([t, M]), me = (0, x.useMemo)(function() {
		return {
			observed: s,
			shards: E,
			enabled: !p,
			get active() {
				return c.current;
			}
		};
	}, [
		p,
		c,
		E,
		s
	]);
	return /* @__PURE__ */ x.createElement(x.Fragment, null, N && [/* @__PURE__ */ x.createElement("div", {
		key: "guard-first",
		"data-focus-guard": !0,
		tabIndex: p ? -1 : 0,
		style: I
	}), T ? /* @__PURE__ */ x.createElement("div", {
		key: "guard-nearest",
		"data-focus-guard": !0,
		tabIndex: p ? -1 : 1,
		style: I
	}) : null], !p && /* @__PURE__ */ x.createElement(ie, {
		id: j,
		sideCar: ze,
		observed: i,
		disabled: p,
		persistentFocus: _,
		crossFrame: y,
		autoFocus: S,
		whiteList: w,
		shards: E,
		onActivation: ce,
		onDeactivation: le,
		returnFocus: ue,
		focusOptions: oe,
		noFocusGuards: h
	}), /* @__PURE__ */ x.createElement(re, o({ ref: F }, pe, {
		className: ee,
		onBlur: fe,
		onFocus: de
	}), /* @__PURE__ */ x.createElement(Be.Provider, { value: me }, d)), P && /* @__PURE__ */ x.createElement("div", {
		"data-focus-guard": !0,
		tabIndex: p ? -1 : 0,
		style: I
	}));
});
He.propTypes = {};
//#endregion
//#region node_modules/.pnpm/react-focus-lock@2.13.7_@types+react@18.3.28_react@18.3.1/node_modules/react-focus-lock/dist/es2015/util.js
function Ue(e) {
	setTimeout(e, 1);
}
var We = function(e) {
	return e && "current" in e ? e.current : e;
}, Ge = He, Ke = we(), qe = "data-focus-on-hidden", Je = { preventScroll: !0 }, Ye = x.forwardRef(function(e, t) {
	var n = x.useState(!1), i = n[0], a = n[1], o = x.useState(null), s = o[0], c = o[1], l = e.children, u = e.autoFocus, d = e.shards, f = e.crossFrame, p = e.enabled, m = p === void 0 ? !0 : p, h = e.scrollLock, g = h === void 0 ? !0 : h, _ = e.focusLock, v = _ === void 0 ? !0 : _, y = e.returnFocus, S = y === void 0 ? !0 : y, C = e.inert, ee = e.allowPinchZoom, w = e.sideCar, T = e.className, te = e.shouldIgnore, E = e.preventScrollOnFocus, ne = e.style, re = e.as, D = e.gapMode, O = r(e, [
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
	]), ie = w, ae = b(b({}, i), {
		as: re,
		style: ne,
		sideCar: w,
		shards: d,
		allowPinchZoom: ee,
		gapMode: D,
		inert: C,
		enabled: m && g
	}), k = x.useCallback(function(e) {
		c(e);
	}, []), oe = x.useCallback(function() {
		c(null);
	}, []);
	return x.createElement(x.Fragment, null, x.createElement(Ge, {
		ref: t,
		sideCar: w,
		disabled: !(m && v),
		returnFocus: S,
		autoFocus: u,
		shards: d,
		crossFrame: f,
		onActivation: k,
		onDeactivation: oe,
		className: T,
		whiteList: te,
		lockProps: ae,
		focusOptions: E ? Je : void 0,
		as: ke
	}, l), m && x.createElement(ie, b({}, O, {
		sideCar: Ke,
		setLockProps: a,
		shards: d,
		activeNode: s
	})));
});
//#endregion
//#region node_modules/.pnpm/@babel+runtime@7.29.2/node_modules/@babel/runtime/helpers/esm/typeof.js
function L(e) {
	"@babel/helpers - typeof";
	return L = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, L(e);
}
//#endregion
//#region node_modules/.pnpm/@babel+runtime@7.29.2/node_modules/@babel/runtime/helpers/esm/toPrimitive.js
function Xe(e, t) {
	if (L(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (L(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
//#endregion
//#region node_modules/.pnpm/@babel+runtime@7.29.2/node_modules/@babel/runtime/helpers/esm/toPropertyKey.js
function Ze(e) {
	var t = Xe(e, "string");
	return L(t) == "symbol" ? t : t + "";
}
//#endregion
//#region node_modules/.pnpm/@babel+runtime@7.29.2/node_modules/@babel/runtime/helpers/esm/defineProperty.js
function Qe(e, t, n) {
	return (t = Ze(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
//#endregion
//#region node_modules/.pnpm/react-clientside-effect@1.2.8_react@18.3.1/node_modules/react-clientside-effect/lib/index.es.js
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
		var s = /* @__PURE__ */ function(e) {
			l(t, e);
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
				return /* @__PURE__ */ x.createElement(r, this.props);
			}, t;
		}(x.PureComponent);
		return Qe(s, "displayName", "SideEffect(" + n(r) + ")"), s;
	};
}
//#endregion
//#region node_modules/.pnpm/focus-lock@1.3.6/node_modules/focus-lock/dist/es2015/utils/array.js
var R = function(e) {
	for (var t = Array(e.length), n = 0; n < e.length; ++n) t[n] = e[n];
	return t;
}, z = function(e) {
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
	return !((dt(e) || ut(e)) && (e.type === "hidden" || e.disabled));
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
	return R(e).map(function(e, t) {
		var r = yt(e);
		return {
			node: e,
			index: t,
			tabIndex: n && r === -1 ? (e.dataset || {}).focusGuard ? 0 : -1 : r
		};
	}).filter(function(e) {
		return !t || e.tabIndex >= 0;
	}).sort(vt);
}, xt = [
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
].join(","), St = `${xt}, [data-focus-guard]`, Ct = function(e, t) {
	return R((e.shadowRoot || e).children).reduce(function(e, n) {
		return e.concat(n.matches(t ? St : xt) ? [n] : [], Ct(n));
	}, []);
}, wt = function(e, t) {
	return e instanceof HTMLIFrameElement && e.contentDocument?.body ? B([e.contentDocument.body], t) : [e];
}, B = function(e, t) {
	return e.reduce(function(e, n) {
		var r, i = Ct(n, t), a = (r = []).concat.apply(r, i.map(function(e) {
			return wt(e, t);
		}));
		return e.concat(a, n.parentNode ? R(n.parentNode.querySelectorAll(xt)).filter(function(e) {
			return e === n;
		}) : []);
	}, []);
}, Tt = function(e) {
	return R(e.querySelectorAll(`[${Ne}]`)).map(function(e) {
		return B([e]);
	}).reduce(function(e, t) {
		return e.concat(t);
	}, []);
}, Et = function(e, t) {
	return R(e).filter(function(e) {
		return ot(t, e);
	}).filter(function(e) {
		return pt(e);
	});
}, Dt = function(e, t) {
	return t === void 0 && (t = /* @__PURE__ */ new Map()), R(e).filter(function(e) {
		return ct(t, e);
	});
}, Ot = function(e, t, n) {
	return bt(Et(B(e, n), t), !0, n);
}, V = function(e, t) {
	return bt(Et(B(e), t), !1);
}, kt = function(e, t) {
	return Et(Tt(e), t);
}, H = function(e, t) {
	return e.shadowRoot ? H(e.shadowRoot, t) : Object.getPrototypeOf(e).contains !== void 0 && Object.getPrototypeOf(e).contains.call(e, t) ? !0 : R(e.children).some(function(e) {
		if (e instanceof HTMLIFrameElement) {
			var n = e.contentDocument?.body;
			return n ? H(n, t) : !1;
		}
		return H(e, t);
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
	return z(e).filter(Boolean).reduce(function(e, t) {
		var n = t.getAttribute(Ae);
		return e.push.apply(e, n ? At(R(jt(t).querySelectorAll(`[${Ae}="${n}"]:not([${je}="disabled"])`))) : [t]), e;
	}, []);
}, Nt = function(e) {
	try {
		return e();
	} catch {
		return;
	}
}, U = function(e) {
	if (e === void 0 && (e = document), !(!e || !e.activeElement)) {
		var t = e.activeElement;
		return t.shadowRoot ? U(t.shadowRoot) : t instanceof HTMLIFrameElement && Nt(function() {
			return t.contentWindow.document;
		}) ? U(t.contentWindow.document) : t;
	}
}, Pt = function(e, t) {
	return e === t;
}, Ft = function(e, t) {
	return !!R(e.querySelectorAll("iframe")).some(function(e) {
		return Pt(e, t);
	});
}, It = function(e, t) {
	return t === void 0 && (t = U(et(e).ownerDocument)), !t || t.dataset && t.dataset.focusGuard ? !1 : Mt(e).some(function(e) {
		return H(e, t) || Ft(e, t);
	});
}, Lt = function(e) {
	e === void 0 && (e = document);
	var t = U(e);
	return t ? R(e.querySelectorAll(`[${Me}]`)).some(function(e) {
		return H(e, t);
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
	var r = z(e), i = z(t), a = r[0], o = !1;
	return i.filter(Boolean).forEach(function(e) {
		o = Jt(o || e, e) || o, n.filter(Boolean).forEach(function(e) {
			var t = Jt(a, e);
			t && (o = !o || H(t, o) ? t : Jt(t, o));
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
	var n = U(z(e).length > 0 ? document : et(e).ownerDocument), r = Mt(e).filter(gt), i = Yt(n || e, e, r), a = /* @__PURE__ */ new Map(), o = V(r, a), s = o.filter(function(e) {
		var t = e.node;
		return gt(t);
	});
	if (s[0]) {
		var c = V([i], a).map(function(e) {
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
			return;
		}
		return f === void 0 ? f : l[f];
	}
}, $t = function(e) {
	var t = Mt(e).filter(gt), n = bt(B([Yt(e, e, t)], !0), !0, !0), r = B(t, !1);
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
//#endregion
//#region node_modules/.pnpm/focus-lock@1.3.6/node_modules/focus-lock/dist/es2015/return-focus.js
function W(e) {
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
		current: W(n),
		parent: W(n.parentElement),
		left: W(n.previousElementSibling),
		right: W(n.nextElementSibling)
	}), n = n.parentElement;
	return {
		element: W(e),
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
	var r = z(t);
	if (r.every(function(t) {
		return !H(t, e);
	})) return console.error("Active element is not contained in the scope"), {};
	var i = n ? Ot(r, /* @__PURE__ */ new Map()) : V(r, /* @__PURE__ */ new Map()), a = i.findIndex(function(t) {
		return t.node === e;
	});
	if (a !== -1) return {
		prev: i[a - 1],
		next: i[a + 1],
		first: i[0],
		last: i[i.length - 1]
	};
}, ln = function(e, t) {
	var n = t ? Ot(z(e), /* @__PURE__ */ new Map()) : V(z(e), /* @__PURE__ */ new Map());
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
}, G = null, K = null, yn = function() {
	return null;
}, q = null, J = !1, bn = !1, xn = function() {
	return !0;
}, Sn = function(e) {
	return (G.whiteList || xn)(e);
}, Cn = function(e, t) {
	q = {
		observerNode: e,
		portaledElement: t
	};
}, wn = function(e) {
	return q && q.portaledElement === e;
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
	return e ? !!J : J === "meanwhile";
}, Dn = function e(t, n, r) {
	return n && (n.host === t && (!n.activeElement || r.contains(n.activeElement)) || n.parentNode && e(t, n.parentNode, r));
}, On = function(e, t) {
	return t.some(function(t) {
		return Dn(e, t, t);
	});
}, kn = function(e) {
	return V(e, /* @__PURE__ */ new Map());
}, An = function(e) {
	return !kn([e.parentNode]).some(function(t) {
		return t.node === e;
	});
}, jn = function() {
	var e = !1;
	if (G) {
		var t = G, n = t.observed, r = t.persistentFocus, i = t.autoFocus, a = t.shards, o = t.crossFrame, s = t.focusOptions, c = t.noFocusGuards, l = n || q && q.portaledElement;
		if (_n() && K && K !== document.body && (!document.body.contains(K) || An(K))) {
			var u = yn();
			u && u.focus();
		}
		var d = document && document.activeElement;
		if (l) {
			var f = [l].concat(a.map(We).filter(Boolean));
			if ((!d || Sn(d)) && (r || function() {
				if (!En(o) || !c || !K || bn) return !1;
				var e = kn(f), t = e.findIndex(function(e) {
					return e.node === K;
				});
				return t === 0 || t === e.length - 1;
			}() || !vn() || !K && i) && (l && !(It(f) || d && On(d, f) || wn(d, l)) && (document && !K && d && !i ? (d.blur && d.blur(), document.body.focus()) : (e = rn(f, K, { focusOptions: s }), q = {})), K = document && document.activeElement, K !== document.body && (yn = sn(K)), J = !1), document && d !== document.activeElement && document.querySelector("[data-focus-auto-guard]")) {
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
}, In = function(e) {
	var t = e.children;
	return /* @__PURE__ */ x.createElement("div", {
		onBlur: Nn,
		onFocus: Pn
	}, t);
};
In.propTypes = {};
var Ln = function() {
	bn = !0;
}, Rn = function() {
	bn = !1, J = "just", Ue(function() {
		J = "meanwhile";
	});
}, zn = function() {
	document.addEventListener("focusin", Mn), document.addEventListener("focusout", Nn), window.addEventListener("focus", Ln), window.addEventListener("blur", Rn);
}, Bn = function() {
	document.removeEventListener("focusin", Mn), document.removeEventListener("focusout", Nn), window.removeEventListener("focus", Ln), window.removeEventListener("blur", Rn);
};
function Vn(e) {
	return e.filter(function(e) {
		return !e.disabled;
	});
}
var Hn = {
	moveFocusInside: rn,
	focusInside: It,
	focusNextElement: fn,
	focusPrevElement: pn,
	focusFirstElement: hn,
	focusLastElement: gn,
	captureFocusRestore: sn
};
function Un(e) {
	var t = e.slice(-1)[0];
	t && !G && zn();
	var n = G, r = n && t && t.id === n.id;
	G = t, n && !r && (n.onDeactivation(), e.filter(function(e) {
		return e.id === n.id;
	}).length || n.returnFocus(!t)), t ? (K = null, (!r || n.observed !== t.observed) && t.onActivation(Hn), jn(!0), Ue(jn)) : (Bn(), K = null);
}
Ie.assignSyncMedium(Pn), Le.assignMedium(Nn), Re.assignMedium(function(e) {
	return e(Hn);
}), Ee(ze, $e(Vn, Un)(Fn));
//#endregion
//#region node_modules/.pnpm/get-nonce@1.0.1/node_modules/get-nonce/dist/es2015/index.js
var Wn, Gn = function() {
	if (Wn) return Wn;
	if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
//#endregion
//#region node_modules/.pnpm/react-style-singleton@2.2.3_@types+react@18.3.28_react@18.3.1/node_modules/react-style-singleton/dist/es2015/singleton.js
function Kn() {
	if (!document) return null;
	var e = document.createElement("style");
	e.type = "text/css";
	var t = Gn();
	return t && e.setAttribute("nonce", t), e;
}
function qn(e, t) {
	e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function Jn(e) {
	(document.head || document.getElementsByTagName("head")[0]).appendChild(e);
}
var Yn = function() {
	var e = 0, t = null;
	return {
		add: function(n) {
			e == 0 && (t = Kn()) && (qn(t, n), Jn(t)), e++;
		},
		remove: function() {
			e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
		}
	};
}, Xn = function() {
	var e = Yn();
	return function(t, n) {
		x.useEffect(function() {
			return e.add(t), function() {
				e.remove();
			};
		}, [t && n]);
	};
}, Zn = function() {
	var e = Xn();
	return function(t) {
		var n = t.styles, r = t.dynamic;
		return e(n, r), null;
	};
}, Qn = {
	left: 0,
	top: 0,
	right: 0,
	gap: 0
}, $n = function(e) {
	return parseInt(e || "", 10) || 0;
}, er = function(e) {
	var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], i = t[e === "padding" ? "paddingRight" : "marginRight"];
	return [
		$n(n),
		$n(r),
		$n(i)
	];
}, tr = function(e) {
	if (e === void 0 && (e = "margin"), typeof window > "u") return Qn;
	var t = er(e), n = document.documentElement.clientWidth, r = window.innerWidth;
	return {
		left: t[0],
		top: t[1],
		right: t[2],
		gap: Math.max(0, r - n + t[2] - t[0])
	};
}, nr = Zn(), Y = "data-scroll-locked", rr = function(e, t, n, r) {
	var i = e.left, a = e.top, o = e.right, s = e.gap;
	return n === void 0 && (n = "margin"), `
  .${me} {
   overflow: hidden ${r};
   padding-right: ${s}px ${r};
  }
  body[${Y}] {
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
  
  body[${Y}] {
    ${he}: ${s}px;
  }
`;
}, ir = function() {
	var e = parseInt(document.body.getAttribute("data-scroll-locked") || "0", 10);
	return isFinite(e) ? e : 0;
}, ar = function() {
	x.useEffect(function() {
		return document.body.setAttribute(Y, (ir() + 1).toString()), function() {
			var e = ir() - 1;
			e <= 0 ? document.body.removeAttribute(Y) : document.body.setAttribute(Y, e.toString());
		};
	}, []);
}, or = function(e) {
	var t = e.noRelative, n = e.noImportant, r = e.gapMode, i = r === void 0 ? "margin" : r;
	ar();
	var a = x.useMemo(function() {
		return tr(i);
	}, [i]);
	return x.createElement(nr, { styles: rr(a, !t, i, n ? "" : "!important") });
}, sr = !1;
if (typeof window < "u") try {
	var cr = Object.defineProperty({}, "passive", { get: function() {
		return sr = !0, !0;
	} });
	window.addEventListener("test", cr, cr), window.removeEventListener("test", cr, cr);
} catch {
	sr = !1;
}
var X = sr ? { passive: !1 } : !1, lr = function(e) {
	return e.tagName === "TEXTAREA";
}, ur = function(e, t) {
	if (!(e instanceof Element)) return !1;
	var n = window.getComputedStyle(e);
	return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !lr(e) && n[t] === "visible");
}, dr = function(e) {
	return ur(e, "overflowY");
}, fr = function(e) {
	return ur(e, "overflowX");
}, pr = function(e, t) {
	var n = t.ownerDocument, r = t;
	do {
		if (typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host), gr(e, r)) {
			var i = _r(e, r);
			if (i[1] > i[2]) return !0;
		}
		r = r.parentNode;
	} while (r && r !== n.body);
	return !1;
}, mr = function(e) {
	return [
		e.scrollTop,
		e.scrollHeight,
		e.clientHeight
	];
}, hr = function(e) {
	return [
		e.scrollLeft,
		e.scrollWidth,
		e.clientWidth
	];
}, gr = function(e, t) {
	return e === "v" ? dr(t) : fr(t);
}, _r = function(e, t) {
	return e === "v" ? mr(t) : hr(t);
}, vr = function(e, t) {
	return e === "h" && t === "rtl" ? -1 : 1;
}, yr = function(e, t, n, r, i) {
	var a = vr(e, window.getComputedStyle(t).direction), o = a * r, s = n.target, c = t.contains(s), l = !1, u = o > 0, d = 0, f = 0;
	do {
		if (!s) break;
		var p = _r(e, s), m = p[0], h = p[1] - p[2] - a * m;
		(m || h) && gr(e, s) && (d += h, f += m);
		var g = s.parentNode;
		s = g && g.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? g.host : g;
	} while (!c && s !== document.body || c && (t.contains(s) || t === s));
	return (u && (i && Math.abs(d) < 1 || !i && o > d) || !u && (i && Math.abs(f) < 1 || !i && -o > f)) && (l = !0), l;
}, br = function(e) {
	return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, xr = function(e) {
	return [e.deltaX, e.deltaY];
}, Sr = function(e) {
	return e && "current" in e ? e.current : e;
}, Cr = function(e, t) {
	return e[0] === t[0] && e[1] === t[1];
}, wr = function(e) {
	return `
  .block-interactivity-${e} {pointer-events: none;}
  .allow-interactivity-${e} {pointer-events: all;}
`;
}, Tr = 0, Z = [];
function Er(t) {
	var n = x.useRef([]), r = x.useRef([0, 0]), i = x.useRef(), a = x.useState(Tr++)[0], o = x.useState(Zn)[0], s = x.useRef(t);
	x.useEffect(function() {
		s.current = t;
	}, [t]), x.useEffect(function() {
		if (t.inert) {
			document.body.classList.add(`block-interactivity-${a}`);
			var n = e([t.lockRef.current], (t.shards || []).map(Sr), !0).filter(Boolean);
			return n.forEach(function(e) {
				return e.classList.add(`allow-interactivity-${a}`);
			}), function() {
				document.body.classList.remove(`block-interactivity-${a}`), n.forEach(function(e) {
					return e.classList.remove(`allow-interactivity-${a}`);
				});
			};
		}
	}, [
		t.inert,
		t.lockRef.current,
		t.shards
	]);
	var c = x.useCallback(function(e, t) {
		if ("touches" in e && e.touches.length === 2 || e.type === "wheel" && e.ctrlKey) return !s.current.allowPinchZoom;
		var n = br(e), a = r.current, o = "deltaX" in e ? e.deltaX : a[0] - n[0], c = "deltaY" in e ? e.deltaY : a[1] - n[1], l, u = e.target, d = Math.abs(o) > Math.abs(c) ? "h" : "v";
		if ("touches" in e && d === "h" && u.type === "range") return !1;
		var f = window.getSelection(), p = f && f.anchorNode;
		if (p && (p === u || p.contains(u))) return !1;
		var m = pr(d, u);
		if (!m) return !0;
		if (m ? l = d : (l = d === "v" ? "h" : "v", m = pr(d, u)), !m) return !1;
		if (!i.current && "changedTouches" in e && (o || c) && (i.current = l), !l) return !0;
		var h = i.current || l;
		return yr(h, t, e, h === "h" ? o : c, !0);
	}, []), l = x.useCallback(function(e) {
		var t = e;
		if (!(!Z.length || Z[Z.length - 1] !== o)) {
			var r = "deltaY" in t ? xr(t) : br(t), i = n.current.filter(function(e) {
				return e.name === t.type && (e.target === t.target || t.target === e.shadowParent) && Cr(e.delta, r);
			})[0];
			if (i && i.should) {
				t.cancelable && t.preventDefault();
				return;
			}
			if (!i) {
				var a = (s.current.shards || []).map(Sr).filter(Boolean).filter(function(e) {
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
			shadowParent: Dr(r)
		};
		n.current.push(a), setTimeout(function() {
			n.current = n.current.filter(function(e) {
				return e !== a;
			});
		}, 1);
	}, []), d = x.useCallback(function(e) {
		r.current = br(e), i.current = void 0;
	}, []), f = x.useCallback(function(e) {
		u(e.type, xr(e), e.target, c(e, t.lockRef.current));
	}, []), p = x.useCallback(function(e) {
		u(e.type, br(e), e.target, c(e, t.lockRef.current));
	}, []);
	x.useEffect(function() {
		return Z.push(o), t.setCallbacks({
			onScrollCapture: f,
			onWheelCapture: f,
			onTouchMoveCapture: p
		}), document.addEventListener("wheel", l, X), document.addEventListener("touchmove", l, X), document.addEventListener("touchstart", d, X), function() {
			Z = Z.filter(function(e) {
				return e !== o;
			}), document.removeEventListener("wheel", l, X), document.removeEventListener("touchmove", l, X), document.removeEventListener("touchstart", d, X);
		};
	}, []);
	var m = t.removeScrollBar, h = t.inert;
	return x.createElement(x.Fragment, null, h ? x.createElement(o, { styles: wr(a) }) : null, m ? x.createElement(or, {
		noRelative: t.noRelative,
		gapMode: t.gapMode
	}) : null);
}
function Dr(e) {
	for (var t = null; e !== null;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
	return t;
}
Ee(De, Er);
//#endregion
//#region node_modules/.pnpm/aria-hidden@1.2.6/node_modules/aria-hidden/dist/es2015/index.js
var Or = function(e) {
	return typeof document > "u" ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body;
}, Q = /* @__PURE__ */ new WeakMap(), kr = /* @__PURE__ */ new WeakMap(), Ar = {}, jr = 0, Mr = function(e) {
	return e && (e.host || Mr(e.parentNode));
}, Nr = function(e, t) {
	return t.map(function(t) {
		if (e.contains(t)) return t;
		var n = Mr(t);
		return n && e.contains(n) ? n : (console.error("aria-hidden", t, "in not contained inside", e, ". Doing nothing"), null);
	}).filter(function(e) {
		return !!e;
	});
}, Pr = function(e, t, n, r) {
	var i = Nr(t, Array.isArray(e) ? e : [e]);
	Ar[n] || (Ar[n] = /* @__PURE__ */ new WeakMap());
	var a = Ar[n], o = [], s = /* @__PURE__ */ new Set(), c = new Set(i), l = function(e) {
		!e || s.has(e) || (s.add(e), l(e.parentNode));
	};
	i.forEach(l);
	var u = function(e) {
		!e || c.has(e) || Array.prototype.forEach.call(e.children, function(e) {
			if (s.has(e)) u(e);
			else try {
				var t = e.getAttribute(r), i = t !== null && t !== "false", c = (Q.get(e) || 0) + 1, l = (a.get(e) || 0) + 1;
				Q.set(e, c), a.set(e, l), o.push(e), c === 1 && i && kr.set(e, !0), l === 1 && e.setAttribute(n, "true"), i || e.setAttribute(r, "true");
			} catch (t) {
				console.error("aria-hidden: cannot operate on ", e, t);
			}
		});
	};
	return u(t), s.clear(), jr++, function() {
		o.forEach(function(e) {
			var t = Q.get(e) - 1, i = a.get(e) - 1;
			Q.set(e, t), a.set(e, i), t || (kr.has(e) || e.removeAttribute(r), kr.delete(e)), i || e.removeAttribute(n);
		}), jr--, jr || (Q = /* @__PURE__ */ new WeakMap(), Q = /* @__PURE__ */ new WeakMap(), kr = /* @__PURE__ */ new WeakMap(), Ar = {});
	};
}, Fr = function(e, t, n) {
	n === void 0 && (n = "data-aria-hidden");
	var r = Array.from(Array.isArray(e) ? e : [e]), i = t || Or(e);
	return i ? (r.push.apply(r, Array.from(i.querySelectorAll("[aria-live], script"))), Pr(r, i, n, "aria-hidden")) : function() {
		return null;
	};
}, Ir = Zn(), Lr = "\n [" + qe + "] {\n   pointer-events: none !important;\n }\n", Rr = function() {
	return x.createElement(Ir, { styles: Lr });
}, zr = function(e) {
	return "current" in e ? e.current : e;
};
function Br(e) {
	var t = e.setLockProps, n = e.onEscapeKey, r = e.onClickOutside, i = e.shards, a = e.onActivation, o = e.onDeactivation, s = e.noIsolation, c = e.activeNode, l = (0, x.useRef)(null), u = (0, x.useRef)(0);
	return x.useEffect(function() {
		var e = function(e) {
			e.defaultPrevented || (e.code === "Escape" || e.key === "Escape" || e.keyCode === 27) && n && n(e);
		}, t = function(e) {
			e.defaultPrevented || e.target === l.current || e instanceof MouseEvent && e.button !== 0 || i && i.map(zr).some(function(t) {
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
		if (!(s || !c)) return Fr(y([c], (i || []).map(zr)), c.ownerDocument.body, qe);
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
	}, []), x.createElement(Rr, null);
}
//#endregion
//#region node_modules/.pnpm/react-focus-on@3.10.2_@types+react@18.3.28_react@18.3.1/node_modules/react-focus-on/dist/es2015/sidecar.js
var Vr = Ee(Ke, Br), Hr = function(e) {
	return x.createElement(Vr, b({}, e));
}, Ur = x.forwardRef(function(e, t) {
	return x.createElement(Ye, b({}, e, {
		ref: t,
		sideCar: Hr
	}));
}), $ = v();
function Wr({ onClick: e }) {
	return /* @__PURE__ */ x.createElement("div", {
		className: "pgn__modal-backdrop",
		onClick: e,
		onKeyDown: e,
		"data-testid": "modal-backdrop",
		role: "presentation"
	});
}
// istanbul ignore next
function Gr({ children: e = null }) {
	return /* @__PURE__ */ x.createElement("div", { className: "pgn__modal-content-container" }, e);
}
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/hooks/useWindowSizeHook.js
function Kr() {
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
//#endregion
//#region src/unfolding-scenario-block/student-ui/components/Intro.tsx
var qr = ({ name: e, introduction: t, onLaunch: n, activityOpen: r }) => /* @__PURE__ */ (0, $.jsx)("div", {
	className: "rounded-lg overflow-hidden scenario-intro bg-interact-default",
	children: /* @__PURE__ */ (0, $.jsxs)(j, {
		className: "p-0",
		children: [/* @__PURE__ */ (0, $.jsxs)(f, {
			xs: "12",
			md: "8",
			className: "p-5 d-flex flex-column",
			children: [
				/* @__PURE__ */ (0, $.jsxs)("div", {
					className: "scenario-name border border-primary d-flex align-items-center p-3 mb-5",
					children: [/* @__PURE__ */ (0, $.jsx)("div", {
						className: "border-right",
						children: /* @__PURE__ */ (0, $.jsx)(m, {
							src: C,
							className: "mr-2"
						})
					}), /* @__PURE__ */ (0, $.jsx)("span", {
						className: "ml-3 small-heading",
						children: e
					})]
				}),
				/* @__PURE__ */ (0, $.jsx)("h4", {
					className: "text-interact-accent",
					children: t.heading
				}),
				/* @__PURE__ */ (0, $.jsx)("div", {
					className: "flex-grow-1 text-sec-content",
					dangerouslySetInnerHTML: { __html: t.description }
				}),
				/* @__PURE__ */ (0, $.jsx)("div", {
					className: "d-flex justify-content-end",
					children: /* @__PURE__ */ (0, $.jsx)(d, {
						variant: "unfolding-scenario-action",
						className: "rounded-pill",
						onClick: n,
						disabled: r,
						children: "Launch Interactive"
					})
				})
			]
		}), /* @__PURE__ */ (0, $.jsx)(f, {
			xs: "12",
			md: "4",
			className: "p-0",
			children: /* @__PURE__ */ (0, $.jsx)(k, {
				src: t.imageURL,
				style: {
					objectFit: "cover",
					width: "100%",
					height: "100%"
				}
			})
		})]
	})
}), Jr = ({ option: e }) => /* @__PURE__ */ (0, $.jsxs)("div", { children: [/* @__PURE__ */ (0, $.jsx)(Yr, { type: e.type }), /* @__PURE__ */ (0, $.jsx)("p", {
	className: "text-interact-content",
	children: e.feedback
})] }), Yr = ({ type: e }) => {
	switch (e) {
		case "Correct": return /* @__PURE__ */ (0, $.jsxs)("p", {
			className: "d-flex",
			children: [/* @__PURE__ */ (0, $.jsx)(m, {
				src: ee,
				className: "text-icon-interact-positive mr-2"
			}), /* @__PURE__ */ (0, $.jsx)("span", {
				className: "text-feedback-positive",
				children: "Correct"
			})]
		});
		case "Incorrect": return /* @__PURE__ */ (0, $.jsxs)("p", {
			className: "d-flex",
			children: [/* @__PURE__ */ (0, $.jsx)(m, {
				src: u,
				className: "text-icon-interact-negative mr-2"
			}), /* @__PURE__ */ (0, $.jsx)("span", {
				className: "text-feedback-negative",
				children: "Incorrect"
			})]
		});
		case "Warning": return /* @__PURE__ */ (0, $.jsxs)("p", {
			className: "d-flex",
			children: [/* @__PURE__ */ (0, $.jsx)(m, {
				src: te,
				className: "text-icon-interact-warning mr-2"
			}), /* @__PURE__ */ (0, $.jsx)("span", {
				className: "text-feedback-warning",
				children: "Warning"
			})]
		});
	}
}, Xr = ({ scenarios: e, selectedOptions: t }) => /* @__PURE__ */ (0, $.jsx)(N, {
	fluid: !0,
	children: e.map((e, n) => {
		let r = e.options[t.get(n)];
		return /* @__PURE__ */ (0, $.jsxs)(j, {
			className: "outcome-option-row",
			children: [/* @__PURE__ */ (0, $.jsxs)(f, {
				className: "bg-interact-raised rounded-lg p-3",
				children: [/* @__PURE__ */ (0, $.jsxs)("p", {
					className: "font-weight-bold text-interact-headings",
					children: ["Step ", n + 1]
				}), /* @__PURE__ */ (0, $.jsx)("p", {
					className: "text-interact-content",
					children: r.value
				})]
			}), /* @__PURE__ */ (0, $.jsx)(f, {
				className: "",
				children: /* @__PURE__ */ (0, $.jsx)(Jr, { option: r })
			})]
		});
	})
}), Zr = ({ outcome: e, scenarios: t, selectedOptions: n, onRestart: r, onExit: i, imageURL: a }) => /* @__PURE__ */ (0, $.jsxs)("div", {
	className: "d-flex flex-grow-1",
	children: [/* @__PURE__ */ (0, $.jsxs)("div", {
		className: "p-4-5",
		style: { flex: "0 0 60%" },
		children: [
			/* @__PURE__ */ (0, $.jsx)("p", {
				className: "font-size-lg font-weight-bold text-interact-accent",
				children: e.heading
			}),
			/* @__PURE__ */ (0, $.jsx)("div", {
				className: "text-interact-content pb-3",
				dangerouslySetInnerHTML: { __html: e.description }
			}),
			e.displaySelectedOptions && /* @__PURE__ */ (0, $.jsx)(Xr, {
				scenarios: t,
				selectedOptions: n
			})
		]
	}), /* @__PURE__ */ (0, $.jsx)("div", {
		className: "d-flex flex-column",
		style: {
			flex: "0 0 40%",
			backgroundImage: `linear-gradient(to bottom, transparent 60%, #FFF), url("${a}")`,
			backgroundSize: "cover"
		},
		children: /* @__PURE__ */ (0, $.jsxs)("div", {
			className: "fixed-bottom align-content-end text-right p-4-5",
			children: [/* @__PURE__ */ (0, $.jsxs)(d, {
				variant: "outline-unfolding-scenario-action",
				className: "rounded-pill",
				onClick: r,
				children: ["Restart ", /* @__PURE__ */ (0, $.jsx)(m, { src: T })]
			}), /* @__PURE__ */ (0, $.jsxs)(d, {
				variant: "unfolding-scenario-action",
				className: "rounded-pill ml-3",
				onClick: i,
				children: ["Exit ", /* @__PURE__ */ (0, $.jsx)(m, { src: p })]
			})]
		})
	})]
}), Qr = ({ index: e, total: t, onReset: n, className: r }) => /* @__PURE__ */ (0, $.jsxs)("div", {
	className: `align-items-center justify-content-center bg-main ${r}`,
	children: [
		/* @__PURE__ */ (0, $.jsx)(g, {
			className: "text-icon-action-default bg-main mr-3",
			src: T,
			onClick: n,
			alt: "Reset activity",
			size: "inline"
		}),
		Array.from(Array(t)).map((n, r) => /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)("div", {
			className: `step-indicator d-flex justify-content-center align-items-center rounded-pill p-1 ${r <= e ? "bg-icon-default text-interact-content" : "bg-emphasis text-content"}`,
			children: r + 1
		}), r < t - 1 && /* @__PURE__ */ (0, $.jsx)("div", { className: "step-indicator-separator" })] })),
		e >= t && /* @__PURE__ */ (0, $.jsx)("span", {
			className: "ml-4 text-content font-size-md font-weight-bold",
			children: "Completed!"
		})
	]
}), $r = ({ onClose: e }) => /* @__PURE__ */ (0, $.jsx)(g, {
	className: "text-icon-action-sec-neutral",
	src: p,
	onClick: e,
	alt: "Close activity"
}), ei = ({ onClose: e, title: t, onReset: n, activeScenarioIndex: r, totalScenarios: i }) => /* @__PURE__ */ (0, $.jsx)("div", {
	className: "sticky-top d-flex w-100 bg-interact-default",
	children: /* @__PURE__ */ (0, $.jsx)(N, {
		fluid: !0,
		children: /* @__PURE__ */ (0, $.jsxs)(j, {
			className: "px-3",
			children: [
				/* @__PURE__ */ (0, $.jsx)(f, {
					className: "d-flex align-items-center mx-3 small-heading text-interact-headings",
					children: t
				}),
				/* @__PURE__ */ (0, $.jsx)(f, {
					className: "d-flex justify-content-center",
					children: /* @__PURE__ */ (0, $.jsx)(Qr, {
						onReset: n,
						index: r,
						total: i,
						className: "d-inline-flex rounded-lg-bottom py-3 pl-2 pr-3"
					})
				}),
				/* @__PURE__ */ (0, $.jsx)(f, {
					className: "d-flex justify-content-end align-items-center mx-3",
					children: /* @__PURE__ */ (0, $.jsx)($r, { onClose: e })
				})
			]
		})
	})
}), ti = ({ onClose: e, title: t, activeScenarioIndex: n, totalScenarios: r }) => /* @__PURE__ */ (0, $.jsx)("div", {
	className: "sticky-top d-flex mx-2 mt-4 pb-2 bg-interact-default",
	children: /* @__PURE__ */ (0, $.jsxs)(N, {
		fluid: !0,
		className: "d-flex align-items-center",
		children: [
			/* @__PURE__ */ (0, $.jsx)(ni, {
				current: Math.min(n + 1, r),
				total: r
			}),
			/* @__PURE__ */ (0, $.jsxs)("div", {
				className: "px-2 mx-1 flex-grow-1",
				children: [/* @__PURE__ */ (0, $.jsx)("div", {
					className: "typography-headings font-weight-bold font-size-md text-interact-headings",
					children: t
				}), n >= r && /* @__PURE__ */ (0, $.jsx)("div", {
					className: "text-interact-accent font-size-sm-md font-weight-lessbold typography-headings mt-n1",
					children: "Completed!"
				})]
			}),
			/* @__PURE__ */ (0, $.jsx)($r, { onClose: e })
		]
	})
}), ni = ({ current: e, total: t }) => {
	let n = 52 * Math.PI, r = n * (1 - e / t);
	return /* @__PURE__ */ (0, $.jsxs)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: 56,
		height: 56,
		children: [
			/* @__PURE__ */ (0, $.jsx)("circle", {
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
			/* @__PURE__ */ (0, $.jsx)("circle", {
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
			/* @__PURE__ */ (0, $.jsx)("foreignObject", {
				x: "0",
				y: "0",
				width: 56,
				height: 56,
				children: /* @__PURE__ */ (0, $.jsxs)("div", {
					className: "h-100 d-flex justify-content-center align-items-center text-interact-content font-size-sm",
					children: [
						e,
						" of ",
						t
					]
				})
			})
		]
	});
}, ri = ({ onClose: e, title: t, onReset: n, activeScenarioIndex: r, totalScenarios: i }) => /* @__PURE__ */ (0, $.jsx)("div", {
	className: "sticky-top d-flex w-100 pb-2 bg-interact-default",
	children: /* @__PURE__ */ (0, $.jsxs)(N, {
		className: "mx-3",
		fluid: !0,
		children: [/* @__PURE__ */ (0, $.jsxs)(j, { children: [/* @__PURE__ */ (0, $.jsx)(f, {
			className: "d-flex align-items-center small-heading text-interact-headings",
			children: t
		}), /* @__PURE__ */ (0, $.jsx)(f, {
			className: "d-flex justify-content-end align-items-center",
			children: /* @__PURE__ */ (0, $.jsx)($r, { onClose: e })
		})] }), /* @__PURE__ */ (0, $.jsx)(j, { children: /* @__PURE__ */ (0, $.jsx)(f, {
			className: "d-flex justify-content-center",
			children: /* @__PURE__ */ (0, $.jsx)(Qr, {
				onReset: n,
				index: r,
				total: i,
				className: "d-flex w-100 p-3 rounded-lg"
			})
		}) })]
	})
}), ii = ({ onClose: e, title: t, onReset: n, activeScenarioIndex: r, totalScenarios: i }) => {
	let a = Kr().width || window.innerWidth;
	return a < M.extraSmall.maxWidth ? /* @__PURE__ */ (0, $.jsx)(ti, {
		onClose: e,
		title: t,
		activeScenarioIndex: r,
		totalScenarios: i
	}) : a < M.large.maxWidth ? /* @__PURE__ */ (0, $.jsx)(ri, {
		onClose: e,
		title: t,
		onReset: n,
		activeScenarioIndex: r,
		totalScenarios: i
	}) : /* @__PURE__ */ (0, $.jsx)(ei, {
		onClose: e,
		title: t,
		onReset: n,
		activeScenarioIndex: r,
		totalScenarios: i
	});
}, ai = ({ onClick: e, children: t, active: n, preSelected: r }) => /* @__PURE__ */ (0, $.jsxs)("button", {
	className: `scenario-option-btn rounded-sm d-flex justify-content-start border-0 overflow-hidden align-items-center p-0 mb-3 ${n ? "text-interact-content-inverse bg-interact-raised-emphasis active" : "bg-interact-raised text-interact-content"} ${r ? "pre-selected" : ""}`,
	onClick: e,
	children: [/* @__PURE__ */ (0, $.jsx)("div", {
		className: "flex-grow-1 text-left mx-3 px-3 my-3",
		children: t
	}), /* @__PURE__ */ (0, $.jsx)("div", {
		className: "h-100 bg-interact-raised-emphasis d-flex align-items-center hover-arrow",
		children: /* @__PURE__ */ (0, $.jsx)(m, {
			src: S,
			size: "lg",
			className: "text-icon-inverse mx-3"
		})
	})]
}), oi = ({ scenario: e, activeOptionIndex: t, preSelectedOptions: n, isContinueEnabled: r, onContinue: i, onSelectOption: a }) => /* @__PURE__ */ (0, $.jsx)("div", {
	className: "pt-3 mx-3 h-100",
	children: /* @__PURE__ */ (0, $.jsxs)("div", {
		className: "position-relative w-100 h-100 overflow-hidden",
		children: [
			/* @__PURE__ */ (0, $.jsx)("div", {
				className: `d-flex h-100 w-50 position-absolute align-items-center ${t === null ? "" : "active"} options-pane options-pane-1`,
				children: /* @__PURE__ */ (0, $.jsxs)("div", { children: [
					/* @__PURE__ */ (0, $.jsx)("p", {
						className: "font-size-lg font-weight-bold text-interact-accent",
						children: e.heading
					}),
					/* @__PURE__ */ (0, $.jsx)("div", {
						className: "text-interact-content pb-3",
						dangerouslySetInnerHTML: { __html: e.description }
					}),
					/* @__PURE__ */ (0, $.jsxs)("div", {
						className: "d-flex align-items-center mt-3 mb-2",
						children: [/* @__PURE__ */ (0, $.jsx)("div", {
							className: "arrow-bubble p-2 text-icon-interact-default",
							children: /* @__PURE__ */ (0, $.jsx)(m, { src: C })
						}), /* @__PURE__ */ (0, $.jsx)("span", {
							className: "text-interact-headings font-size-medium font-weight-bold pl-2",
							children: e.instructionTitle
						})]
					}),
					/* @__PURE__ */ (0, $.jsx)("div", {
						className: "text-interact-content",
						dangerouslySetInnerHTML: { __html: e.instructionDescription }
					})
				] })
			}),
			/* @__PURE__ */ (0, $.jsxs)("div", {
				className: `d-flex w-50 h-100 position-absolute align-items-center ${t === null ? "" : "active"} options-pane options-pane-2`,
				children: [t !== null && /* @__PURE__ */ (0, $.jsx)("div", {
					className: "d-flex mr-3 align-items-center",
					children: /* @__PURE__ */ (0, $.jsx)(g, {
						className: "text-icon-action-sec-neutral",
						src: w,
						alt: "Return",
						onClick: () => a(null)
					})
				}), /* @__PURE__ */ (0, $.jsxs)("div", {
					className: "flex-grow-1",
					children: [
						/* @__PURE__ */ (0, $.jsx)("p", {
							className: "text-interact-headings font-size-md font-weight-bold",
							children: e.prompt
						}),
						/* @__PURE__ */ (0, $.jsx)("div", {
							className: "d-flex flex-column flex-grow-1",
							children: e.options.map((e, r) => /* @__PURE__ */ (0, $.jsx)(ai, {
								active: t === r,
								onClick: () => a(r),
								preSelected: n.has(r),
								children: e.value
							}))
						}),
						/* @__PURE__ */ (0, $.jsx)("div", {
							className: "d-flex justify-content-end",
							children: /* @__PURE__ */ (0, $.jsx)(d, {
								variant: "unfolding-scenario-action",
								className: "rounded-pill",
								disabled: !r,
								onClick: i,
								children: "Continue"
							})
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, $.jsx)("div", {
				className: `w-50 h-100 p-6 position-absolute d-flex align-items-center ${t === null ? "" : "active"} options-pane options-pane-3`,
				children: t === null ? null : /* @__PURE__ */ (0, $.jsx)(Jr, { option: e.options[t] })
			})
		]
	})
}), si = ({ scenario: e, activeOptionIndex: t, preSelectedOptions: n, isContinueEnabled: r, onContinue: i, onSelectOption: a }) => /* @__PURE__ */ (0, $.jsxs)("div", {
	className: "position-relative w-100 h-100 overflow-hidden",
	children: [/* @__PURE__ */ (0, $.jsxs)("div", {
		className: `w-100 h-100 position-absolute p-4 d-flex flex-column ${t === null ? "" : "active"} tablet-options-pane tablet-options-pane-1`,
		children: [
			/* @__PURE__ */ (0, $.jsxs)("div", { children: [
				/* @__PURE__ */ (0, $.jsx)("p", {
					className: "font-size-lg font-weight-bold text-interact-accent",
					children: e.heading
				}),
				/* @__PURE__ */ (0, $.jsx)("div", {
					className: "text-interact-content pb-3",
					dangerouslySetInnerHTML: { __html: e.description }
				}),
				/* @__PURE__ */ (0, $.jsxs)("div", {
					className: "d-flex align-items-center mt-3 mb-2",
					children: [/* @__PURE__ */ (0, $.jsx)("div", {
						className: "arrow-bubble p-2 text-icon-interact-default",
						children: /* @__PURE__ */ (0, $.jsx)(m, { src: C })
					}), /* @__PURE__ */ (0, $.jsx)("span", {
						className: "text-interact-headings font-size-medium font-weight-bold pl-2",
						children: e.instructionTitle
					})]
				})
			] }),
			/* @__PURE__ */ (0, $.jsx)("div", {
				className: "text-interact-content",
				dangerouslySetInnerHTML: { __html: e.instructionDescription }
			}),
			/* @__PURE__ */ (0, $.jsxs)("div", {
				className: "flex-grow-1",
				children: [/* @__PURE__ */ (0, $.jsx)("p", {
					className: "text-interact-headings font-size-md font-weight-bold",
					children: e.prompt
				}), /* @__PURE__ */ (0, $.jsx)("div", {
					className: "d-flex flex-column flex-grow-1",
					children: e.options.map((e, r) => /* @__PURE__ */ (0, $.jsx)(ai, {
						active: t === r,
						onClick: () => a(r),
						preSelected: n.has(r),
						children: e.value
					}))
				})]
			}),
			/* @__PURE__ */ (0, $.jsx)("div", {
				className: "d-flex justify-content-end",
				children: /* @__PURE__ */ (0, $.jsx)(d, {
					variant: "unfolding-scenario-action",
					className: "rounded-pill",
					disabled: !r,
					onClick: i,
					children: "Continue"
				})
			})
		]
	}), /* @__PURE__ */ (0, $.jsx)("div", {
		className: `w-100 h-100 position-absolute d-flex flex-column justify-content-center p-4-5 bg-interact-raised ${t === null ? "" : "active"} tablet-options-pane tablet-options-pane-2`,
		children: t !== null && /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [
			/* @__PURE__ */ (0, $.jsx)("p", {
				className: "text-interact-headings font-size-md font-weight-bold",
				children: e.options[t].value
			}),
			/* @__PURE__ */ (0, $.jsx)(Jr, { option: e.options[t] }),
			/* @__PURE__ */ (0, $.jsx)(g, {
				className: "text-icon-action-sec-neutral",
				src: w,
				alt: "Return",
				onClick: () => a(null)
			})
		] })
	})]
}), ci = ({ scenario: e, activeOptionIndex: t, preSelectedOptions: n, isContinueEnabled: r, onContinue: i, onSelectOption: a }) => /* @__PURE__ */ (0, $.jsx)("div", {
	className: "pt-3 mx-3 h-100",
	children: /* @__PURE__ */ (0, $.jsxs)("div", {
		className: "position-relative w-100 h-100 overflow-hidden",
		children: [
			/* @__PURE__ */ (0, $.jsx)("div", {
				className: `d-flex h-100 w-50 position-absolute align-items-center ${t === null ? "" : "active"} options-pane options-pane-1`,
				children: /* @__PURE__ */ (0, $.jsxs)("div", { children: [
					/* @__PURE__ */ (0, $.jsx)("p", {
						className: "font-size-lg font-weight-bold text-interact-accent",
						children: e.heading
					}),
					/* @__PURE__ */ (0, $.jsx)("div", {
						className: "text-interact-content pb-3",
						dangerouslySetInnerHTML: { __html: e.description }
					}),
					/* @__PURE__ */ (0, $.jsxs)("div", {
						className: "d-flex align-items-center mt-3 mb-2",
						children: [/* @__PURE__ */ (0, $.jsx)("div", {
							className: "arrow-bubble p-2 text-icon-interact-default",
							children: /* @__PURE__ */ (0, $.jsx)(m, { src: C })
						}), /* @__PURE__ */ (0, $.jsx)("span", {
							className: "text-interact-headings font-size-medium font-weight-bold pl-2",
							children: e.instructionTitle
						})]
					}),
					/* @__PURE__ */ (0, $.jsx)("div", {
						className: "text-interact-content",
						dangerouslySetInnerHTML: { __html: e.instructionDescription }
					})
				] })
			}),
			/* @__PURE__ */ (0, $.jsxs)("div", {
				className: `d-flex w-50 h-100 position-absolute align-items-center ${t === null ? "" : "active"} options-pane options-pane-2`,
				children: [t !== null && /* @__PURE__ */ (0, $.jsx)("div", {
					className: "d-flex mr-3 align-items-center",
					children: /* @__PURE__ */ (0, $.jsx)(g, {
						className: "text-icon-action-sec-neutral",
						src: w,
						alt: "Return",
						onClick: () => a(null)
					})
				}), /* @__PURE__ */ (0, $.jsxs)("div", {
					className: "flex-grow-1",
					children: [
						/* @__PURE__ */ (0, $.jsx)("p", {
							className: "text-interact-headings font-size-md font-weight-bold",
							children: e.prompt
						}),
						/* @__PURE__ */ (0, $.jsx)("div", {
							className: "d-flex flex-column flex-grow-1",
							children: e.options.map((e, r) => /* @__PURE__ */ (0, $.jsx)(ai, {
								active: t === r,
								onClick: () => a(r),
								preSelected: n.has(r),
								children: e.value
							}))
						}),
						/* @__PURE__ */ (0, $.jsx)("div", {
							className: "d-flex justify-content-end",
							children: /* @__PURE__ */ (0, $.jsx)(d, {
								variant: "unfolding-scenario-action",
								className: "rounded-pill",
								disabled: !r,
								onClick: i,
								children: "Continue"
							})
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, $.jsx)("div", {
				className: `w-50 h-100 p-6 position-absolute d-flex align-items-center ${t === null ? "" : "active"} options-pane options-pane-3`,
				children: t === null ? null : /* @__PURE__ */ (0, $.jsx)(Jr, { option: e.options[t] })
			})
		]
	})
}), li = ({ interactionType: e, scenario: t, onContinue: n, onSelectOption: r }) => {
	let i = Kr(), [a, o] = (0, x.useState)(null), [s, c] = (0, x.useState)(/* @__PURE__ */ new Set()), l = e == "Explore" && s.size == t.options.length || e == "SelectOne" && a !== null, u = i.width || window.innerWidth;
	return u < M.extraSmall.maxWidth ? /* @__PURE__ */ (0, $.jsx)(ci, {
		scenario: t,
		activeOptionIndex: a,
		preSelectedOptions: s,
		isContinueEnabled: l,
		onContinue: n,
		onSelectOption: (e) => {
			e === null ? o(null) : (c(new Set([...s, e])), o(e), r(e));
		}
	}) : u < M.large.maxWidth ? /* @__PURE__ */ (0, $.jsx)(si, {
		scenario: t,
		activeOptionIndex: a,
		preSelectedOptions: s,
		isContinueEnabled: l,
		onContinue: n,
		onSelectOption: (e) => {
			e === null ? o(null) : (c(new Set([...s, e])), o(e), r(e));
		}
	}) : /* @__PURE__ */ (0, $.jsx)(oi, {
		scenario: t,
		activeOptionIndex: a,
		preSelectedOptions: s,
		isContinueEnabled: l,
		onContinue: n,
		onSelectOption: (e) => {
			e === null ? o(null) : (c(new Set([...s, e])), o(e), r(e));
		}
	});
}, ui = ({ onCancel: e, title: t, children: n }) => /* @__PURE__ */ (0, $.jsx)(Ur, {
	allowPinchZoom: !0,
	scrollLock: !0,
	enabled: !0,
	onEscapeKey: e,
	onClickOutside: e,
	className: "pgn__modal-layer",
	children: /* @__PURE__ */ (0, $.jsxs)(Gr, { children: [/* @__PURE__ */ (0, $.jsx)(Wr, { onClick: e }), /* @__PURE__ */ (0, $.jsx)("div", {
		role: "dialog",
		"aria-label": t,
		className: "pgn__modal pgn__modal-md pgn__modal-default p-3",
		children: n
	})] })
}), di = ({ onCancel: e, onConfirm: t }) => /* @__PURE__ */ (0, $.jsx)(ui, {
	onCancel: e,
	title: "Leave interactive?",
	children: /* @__PURE__ */ (0, $.jsxs)("div", {
		className: "m-3",
		children: [
			/* @__PURE__ */ (0, $.jsx)("p", {
				className: "font-size-md text-interact-headings font-weight-bold",
				children: "Leave interactive?"
			}),
			/* @__PURE__ */ (0, $.jsx)("p", {
				className: "text-sec-content",
				children: "If you leave now, your progress in this interactive will be lost."
			}),
			/* @__PURE__ */ (0, $.jsxs)("div", {
				className: "d-flex justify-content-between",
				children: [/* @__PURE__ */ (0, $.jsx)(d, {
					variant: "outline-unfolding-scenario-action",
					className: "rounded-pill",
					onClick: t,
					children: "Leave"
				}), /* @__PURE__ */ (0, $.jsx)(d, {
					variant: "unfolding-scenario-action",
					className: "rounded-pill",
					onClick: e,
					children: "Stay"
				})]
			})
		]
	})
}), fi = ({ onCancel: e, onConfirm: t }) => /* @__PURE__ */ (0, $.jsx)(ui, {
	onCancel: e,
	title: "Restart interactive?",
	children: /* @__PURE__ */ (0, $.jsxs)("div", {
		className: "m-3",
		children: [
			/* @__PURE__ */ (0, $.jsx)("p", {
				className: "font-size-md text-interact-headings font-weight-bold",
				children: "Restart interactive?"
			}),
			/* @__PURE__ */ (0, $.jsx)("p", {
				className: "text-sec-content",
				children: "If you restart, your progress in this interactive will be lost."
			}),
			/* @__PURE__ */ (0, $.jsxs)("div", {
				className: "d-flex justify-content-between",
				children: [/* @__PURE__ */ (0, $.jsx)(d, {
					variant: "outline-unfolding-scenario-action",
					className: "rounded-pill",
					onClick: t,
					children: "Restart"
				}), /* @__PURE__ */ (0, $.jsx)(d, {
					variant: "unfolding-scenario-action",
					className: "rounded-pill",
					onClick: e,
					children: "Stay"
				})]
			})
		]
	})
}), pi = ({ data: e, onExit: t }) => {
	let [n, r] = (0, x.useState)(0), [i, a] = (0, x.useState)(null), [o, s] = (0, x.useState)(/* @__PURE__ */ new Map());
	return /* @__PURE__ */ (0, $.jsxs)("div", {
		className: "unfolding-scenario-activity-wrapper min-vh-100 bg-interact-default d-flex flex-column",
		children: [
			/* @__PURE__ */ (0, $.jsx)(ii, {
				onClose: () => a("leave"),
				title: e.name,
				onReset: () => a("restart"),
				activeScenarioIndex: n,
				totalScenarios: e.scenarios.length
			}),
			n < e.scenarios.length ? /* @__PURE__ */ (0, $.jsx)(li, {
				scenario: e.scenarios[n],
				interactionType: e.interactionType,
				onContinue: () => {
					(0, x.startTransition)(() => {
						r(n + 1);
					});
				},
				onSelectOption: (e) => s(new Map(o).set(n, e))
			}, n) : e.outcome && /* @__PURE__ */ (0, $.jsx)(Zr, {
				outcome: e.outcome,
				scenarios: e.scenarios,
				selectedOptions: o,
				onRestart: () => a("restart"),
				onExit: t,
				imageURL: e.introduction.imageURL
			}),
			i == "leave" && /* @__PURE__ */ (0, $.jsx)(di, {
				onConfirm: t,
				onCancel: () => a(null)
			}),
			i == "restart" && /* @__PURE__ */ (0, $.jsx)(fi, {
				onConfirm: () => {
					r(0), a(null);
				},
				onCancel: () => a(null)
			})
		]
	});
}, mi = /* @__PURE__ */ n(i(), 1), hi = ({ children: e, className: t, cssContent: n, themeUrls: r, title: i, onClose: a }) => {
	let [o, s] = (0, x.useState)(null);
	if (o === null) {
		let e = document.createElement("div");
		e.className = t, s(e);
	}
	return (0, x.useEffect)(() => {
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
	}, [o]), o && (0, mi.createPortal)(e, o);
}, gi = ({ data: e, themeUrls: t, cssContent: n }) => {
	let [r, i] = (0, x.useState)(!1), a = "xblock-unfolding-scenario-wrapper";
	return /* @__PURE__ */ (0, $.jsxs)("div", {
		className: a,
		children: [r && /* @__PURE__ */ (0, $.jsx)(hi, {
			title: e.scenarioData.name,
			className: `${a} min-vh-100`,
			themeUrls: t,
			cssContent: n,
			onClose: () => i(!1),
			children: /* @__PURE__ */ (0, $.jsx)(pi, {
				data: e.scenarioData,
				onExit: () => i(!1)
			})
		}), /* @__PURE__ */ (0, $.jsx)(qr, {
			name: e.scenarioData.name,
			introduction: e.scenarioData.introduction,
			onLaunch: () => i(!0),
			activityOpen: r
		})]
	});
}, _i = ".xblock-unfolding-scenario-wrapper{--color-action-default:var(--pgn-unfolding-scenario-color-action-default,#3874bc);--color-background-interactive:var(--pgn-unfolding-scenario-color-background-interactive,#8cc9d1);--color-text-interactive:var(--pgn-unfolding-scenario-color-text-interactive,#2f808e);--color-bg-emphasis:var(--pgn-unfolding-scenario-color-bg-emphasis,#223e5d);--color-bg-main:var(--pgn-unfolding-scenario-color-bg-main,#1b324a);--color-border-interact-default:var(--pgn-unfolding-scenario-color-border-interact-default,#b2d8de);--color-border-interact-emphasis:var(--pgn-unfolding-scenario-color-border-interact-emphasis,#327d8a);--color-border-sec-action-focus:var(--pgn-unfolding-scenario-color-border-sec-action-focus,#0e1d2f);--color-icon-action-sec-default:var(--pgn-unfolding-scenario-color-icon-action-sec-default,#3874bc);--color-icon-interact-default:var(--pgn-unfolding-scenario-color-icon-interact-default,#327d8a);--color-interact-default:var(--pgn-unfolding-scenario-color-interact-default,#ecf5f7);--color-interact-emphasis:var(--pgn-unfolding-scenario-color-interact-emphasis,#d9ebef);--color-interact-raised-emphasis:var(--pgn-unfolding-scenario-color-interact-raised-emphasis,#327d8a);--color-txt-interact-accent:var(--pgn-unfolding-scenario-color-txt-interact-accent,#2a578d);--color-txt-interact-content-inverse:var(--pgn-unfolding-scenario-color-txt-interact-content-inverse,#fff);--color-txt-interact-content:var(--pgn-unfolding-scenario-color-txt-interact-content,#223e5d);--color-txt-interact-headings:var(--pgn-unfolding-scenario-color-txt-interact-headings,#327d8a);--color-txt-action-prim-default:var(--pgn-unfolding-scenario-color-txt-action-prim-default,#fff);--color-txt-content:var(--pgn-unfolding-scenario-color-txt-content,#fff);--color-txt-sec-content:var(--pgn-unfolding-scenario-color-txt-sec-content,#223e5d);--color-icon-action-default:var(--pgn-unfolding-scenario-color-icon-action-default,#fff);--color-border-default:var(--pgn-unfolding-scenario-color-border-default,#4e657d);--color-interact-raised:var(--pgn-unfolding-scenario-color-interact-raised,#fff);--color-icon-inverse:var(--pgn-unfolding-scenario-color-icon-inverse,#fff);--color-icon-default:var(--pgn-unfolding-scenario-color-icon-default,#8cc4ce);--color-icon-action-sec-neutral:var(--pgn-unfolding-scenario-color-icon-action-sec-neutral,#1c3a5e);--color-txt-feedback-negative:var(--pgn-unfolding-scenario-color-txt-feedback-negative,#db493d);--color-icon-interact-negative:var(--pgn-unfolding-scenario-color-icon-interact-negative,#db493d);--color-txt-feedback-positive:var(--pgn-unfolding-scenario-color-txt-feedback-positive,#149418);--color-icon-interact-positive:var(--pgn-unfolding-scenario-color-icon-interact-positive,#149418);--color-txt-feedback-warning:var(--pgn-unfolding-scenario-color-txt-feedback-warning,#ffd900);--color-icon-interact-warning:var(--pgn-unfolding-scenario-color-icon-interact-warning,#ffd900);--btn-min-width:var(--pgn-unfolding-scenario-btn-min-width,200px)}.xblock-unfolding-scenario-wrapper .text-interact-headings{color:var(--color-txt-interact-headings)!important}.xblock-unfolding-scenario-wrapper .text-interact-accent{color:var(--color-txt-interact-accent)!important}.xblock-unfolding-scenario-wrapper .text-interact-content{color:var(--color-txt-interact-content)!important}.xblock-unfolding-scenario-wrapper .text-interact-content-inverse{color:var(--color-txt-interact-content-inverse)!important}.xblock-unfolding-scenario-wrapper .text-content{color:var(--color-txt-content)!important}.xblock-unfolding-scenario-wrapper .text-sec-content{color:var(--color-txt-sec-content)!important}.xblock-unfolding-scenario-wrapper .text-icon-inverse{color:var(--color-icon-inverse)!important}.xblock-unfolding-scenario-wrapper .text-icon-action-default{color:var(--color-icon-action-default)!important}.xblock-unfolding-scenario-wrapper .text-icon-action-sec-default{color:var(--color-icon-action-sec-default)!important}.xblock-unfolding-scenario-wrapper .text-icon-action-sec-neutral{color:var(--color-icon-action-sec-neutral)!important}.xblock-unfolding-scenario-wrapper .text-feedback-negative{color:var(--color-txt-feedback-negative)!important}.xblock-unfolding-scenario-wrapper .text-icon-interact-negative{color:var(--color-icon-interact-negative)!important}.xblock-unfolding-scenario-wrapper .text-feedback-positive{color:var(--color-txt-feedback-positive)!important}.xblock-unfolding-scenario-wrapper .text-icon-interact-positive{color:var(--color-icon-interact-positive)!important}.xblock-unfolding-scenario-wrapper .text-feedback-warning{color:var(--color-txt-feedback-warning)!important}.xblock-unfolding-scenario-wrapper .text-icon-interact-warning{color:var(--color-icon-interact-warning)!important}.xblock-unfolding-scenario-wrapper .bg-interact-raised-emphasis{background-color:var(--color-interact-raised-emphasis)!important}.xblock-unfolding-scenario-wrapper .bg-interact-raised{background-color:var(--color-interact-raised)!important}.xblock-unfolding-scenario-wrapper .bg-emphasis{background-color:var(--color-bg-emphasis)!important}.xblock-unfolding-scenario-wrapper .bg-icon-default{background-color:var(--color-icon-default)!important}.xblock-unfolding-scenario-wrapper .bg-interact-default{background-color:var(--color-interact-default)!important}.xblock-unfolding-scenario-wrapper .bg-main{background-color:var(--color-bg-main)!important}.xblock-unfolding-scenario-wrapper .rounded-lg-bottom{border-bottom-right-radius:var(--pgn-size-border-radius-lg)!important;border-bottom-left-radius:var(--pgn-size-border-radius-lg)!important}.xblock-unfolding-scenario-wrapper .scenario-intro .scenario-name{color:var(--color-text-interactive);background-color:var(--color-interact-emphasis);border-radius:var(--pgn-spacing-spacer-base);border-bottom-left-radius:0;border-color:var(--color-border-interact-default)!important}.xblock-unfolding-scenario-wrapper .scenario-intro .scenario-name .border-right{border-color:var(--color-border-interact-default)!important}.xblock-unfolding-scenario-wrapper .scenario-intro .scenario-name .pgn__icon{color:var(--color-interact-raised-emphasis);zoom:2}.xblock-unfolding-scenario-wrapper .btn-unfolding-scenario-action{--pgn-btn-bg:var(--color-action-default);--pgn-btn-color:var(--color-txt-action-prim-default);--pgn-btn-hover-bg:var(--color-action-default);--pgn-btn-hover-color:var(--color-txt-action-prim-default);--pgn-btn-focus-bg:var(--color-action-default);--pgn-btn-focus-color:var(--color-txt-action-prim-default);--pgn-btn-focus-outline-color:var(--color-border-sec-action-focus);--pgn-btn-active-bg:var(--color-action-default);--pgn-btn-active-color:var(--color-txt-action-prim-default)}.xblock-unfolding-scenario-wrapper .btn-outline-unfolding-scenario-action{--pgn-size-btn-border-width:2px;--pgn-btn-bg:var(--color-txt-action-prim-default);--pgn-btn-color:var(--color-action-default);--pgn-btn-border-color:var(--color-action-default);--pgn-btn-hover-bg:var(--color-txt-action-prim-default);--pgn-btn-hover-color:var(--color-action-default);--pgn-btn-hover-border-color:var(--color-action-default);--pgn-btn-focus-bg:var(--color-txt-action-prim-default);--pgn-btn-focus-color:var(--color-action-default);--pgn-btn-focus-border-color:var(--color-action-default);--pgn-btn-focus-outline-color:var(--color-action-default);--pgn-btn-active-bg:var(--color-txt-action-prim-default);--pgn-btn-active-color:var(--color-action-default);--pgn-btn-active-border-color:var(--color-action-default)}.xblock-unfolding-scenario-wrapper .btn{min-width:var(--btn-min-width);padding:var(--pgn-spacing-spacer-2-5) var(--pgn-spacing-spacer-4-5)}.xblock-unfolding-scenario-wrapper .small-heading{font-size:calc(var(--pgn-typography-font-size-base) * 1.125);font-family:var(--pgn-typography-headings-font-family);font-weight:var(--pgn-typography-font-weight-bold)}.xblock-unfolding-scenario-wrapper .font-weight-lessbold{font-weight:calc(var(--pgn-typography-font-weight-bold) - 100)}.xblock-unfolding-scenario-wrapper .typography-headings{font-family:var(--pgn-typography-headings-font-family)}.xblock-unfolding-scenario-wrapper .font-size-lg{font-size:calc(var(--pgn-typography-font-size-base) * 1.25)}.xblock-unfolding-scenario-wrapper .font-size-md{font-size:calc(var(--pgn-typography-font-size-base) * 1.125)}.xblock-unfolding-scenario-wrapper .font-size-sm-md{font-size:calc(var(--pgn-typography-font-size-base) * .875)}.xblock-unfolding-scenario-wrapper .font-size-sm{font-size:calc(var(--pgn-typography-font-size-base) * .75)}.xblock-unfolding-scenario-wrapper .m-4-5{margin:var(--pgn-spacing-spacer-4-5)!important}.xblock-unfolding-scenario-wrapper .ml-4-5,.xblock-unfolding-scenario-wrapper .mx-4-5{margin-left:var(--pgn-spacing-spacer-4-5)!important}.xblock-unfolding-scenario-wrapper .mr-4-5,.xblock-unfolding-scenario-wrapper .mx-4-5{margin-right:var(--pgn-spacing-spacer-4-5)!important}.xblock-unfolding-scenario-wrapper .mt-4-5,.xblock-unfolding-scenario-wrapper .my-4-5{margin-top:var(--pgn-spacing-spacer-4-5)!important}.xblock-unfolding-scenario-wrapper .mb-4-5,.xblock-unfolding-scenario-wrapper .my-4-5{margin-bottom:var(--pgn-spacing-spacer-4-5)!important}.xblock-unfolding-scenario-wrapper .p-4-5{padding:var(--pgn-spacing-spacer-4-5)!important}.xblock-unfolding-scenario-wrapper .pl-4-5,.xblock-unfolding-scenario-wrapper .px-4-5{padding-left:var(--pgn-spacing-spacer-4-5)!important}.xblock-unfolding-scenario-wrapper .pr-4-5,.xblock-unfolding-scenario-wrapper .px-4-5{padding-right:var(--pgn-spacing-spacer-4-5)!important}.xblock-unfolding-scenario-wrapper .pt-4-5,.xblock-unfolding-scenario-wrapper .py-4-5{padding-top:var(--pgn-spacing-spacer-4-5)!important}.xblock-unfolding-scenario-wrapper .pb-4-5,.xblock-unfolding-scenario-wrapper .py-4-5{padding-bottom:var(--pgn-spacing-spacer-4-5)!important}.xblock-unfolding-scenario-wrapper .unfolding-scenario-activity-wrapper{height:100%}.xblock-unfolding-scenario-wrapper .step-indicator{height:var(--pgn-spacing-spacer-4-5);width:var(--pgn-spacing-spacer-4-5);font-size:calc(var(--pgn-typography-font-size-base) * 1.125)}.xblock-unfolding-scenario-wrapper .step-indicator-separator{background-color:var(--color-border-default);width:17px;height:1px}.xblock-unfolding-scenario-wrapper .arrow-bubble{background-color:var(--color-interact-emphasis);color:var(--color-icon-interact-default);border:1px solid var(--color-border-interact-default);border-radius:var(--pgn-spacing-spacer-base);border-bottom-left-radius:0;display:inline-block}.xblock-unfolding-scenario-wrapper .scenario-option-btn{height:calc(var(--pgn-typography-line-height-base) * var(--pgn-typography-font-size-base) * 3 + var(--pgn-spacing-spacer-base) * 2)}.xblock-unfolding-scenario-wrapper .scenario-option-btn.pre-selected{outline:2px solid var(--color-border-interact-emphasis)}.xblock-unfolding-scenario-wrapper .scenario-option-btn .hover-arrow{min-width:10px}.xblock-unfolding-scenario-wrapper .scenario-option-btn .hover-arrow .pgn__icon{display:none}.xblock-unfolding-scenario-wrapper .scenario-option-btn:hover .hover-arrow .pgn__icon,.xblock-unfolding-scenario-wrapper .scenario-option-btn.active .hover-arrow .pgn__icon{display:block}.xblock-unfolding-scenario-wrapper .scenario-option-btn:focus-visible{outline:2px solid var(--color-option-focus-border)}.xblock-unfolding-scenario-wrapper .outcome-option-row+.outcome-option-row{margin-top:var(--pgn-spacing-spacer-4);padding-top:var(--pgn-spacing-spacer-4);border-top:1px solid var(--color-border-interact-default)}.xblock-unfolding-scenario-wrapper .options-pane{transition:left .5s}@media (prefers-reduced-motion:reduce){.xblock-unfolding-scenario-wrapper .options-pane{transition:unset}}.xblock-unfolding-scenario-wrapper .options-pane-1{left:0%}.xblock-unfolding-scenario-wrapper .options-pane-2{left:50%}.xblock-unfolding-scenario-wrapper .options-pane-3{left:100%}.xblock-unfolding-scenario-wrapper .active.options-pane-1{left:-50%}.xblock-unfolding-scenario-wrapper .active.options-pane-2{left:0%}.xblock-unfolding-scenario-wrapper .active.options-pane-3{left:50%}.xblock-unfolding-scenario-wrapper .tablet-options-pane{transition:left .5s}@media (prefers-reduced-motion:reduce){.xblock-unfolding-scenario-wrapper .tablet-options-pane{transition:unset}}.xblock-unfolding-scenario-wrapper .tablet-options-pane-1{left:0%}.xblock-unfolding-scenario-wrapper .tablet-options-pane-2{border-left:var(--pgn-spacing-spacer-3) solid var(--color-interact-default);left:100%}.xblock-unfolding-scenario-wrapper .active.tablet-options-pane-1{left:-100%}.xblock-unfolding-scenario-wrapper .active.tablet-options-pane-2{left:0%}", vi = async (e, t, n) => {
	let r = await yi(n.config.mfe_config_api);
	c({
		runtime: e,
		element: t,
		config: n.config,
		styles: _i
	})(/* @__PURE__ */ (0, $.jsx)(gi, {
		data: n.data,
		themeUrls: r,
		cssContent: _i
	}));
}, yi = async (e) => {
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
//#endregion
export { vi as renderBlock };
