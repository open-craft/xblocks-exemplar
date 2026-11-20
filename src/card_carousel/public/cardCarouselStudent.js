import { n as e } from "./rolldown-runtime-CYdcPHCu.js";
import { B as t, D as n, J as r, N as i, P as a, U as o, V as s, Y as c, a as l, n as u, o as d, ot as f, q as p, t as m, z as h } from "./Stack-CqQGcfht.js";
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Badge.js
var g = /* @__PURE__ */ e(s()), _ = /* @__PURE__ */ e(f()), v = [
	"bsPrefix",
	"variant",
	"pill",
	"className",
	"as"
], y = { pill: !1 }, b = /*#__PURE__*/ _.forwardRef(function(e, n) {
	var r = e.bsPrefix, i = e.variant, o = e.pill, s = e.className, c = e.as, l = c === void 0 ? "span" : c, u = h(e, v), d = a(r, "badge");
	return /*#__PURE__*/ _.createElement(l, t({ ref: n }, u, { className: (0, g.default)(s, d, o && d + "-pill", i && d + "-" + i) }));
});
b.displayName = "Badge", b.defaultProps = y;
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Row.js
var x = /* @__PURE__ */ e(i()), S = [
	"bsPrefix",
	"className",
	"noGutters",
	"as"
], C = [
	"xl",
	"lg",
	"md",
	"sm",
	"xs"
], w = { noGutters: !1 }, T = /*#__PURE__*/ _.forwardRef(function(e, n) {
	var r = e.bsPrefix, i = e.className, o = e.noGutters, s = e.as, c = s === void 0 ? "div" : s, l = h(e, S), u = a(r, "row"), d = u + "-cols", f = [];
	return C.forEach(function(e) {
		var t = l[e];
		delete l[e];
		var n = typeof t == "object" && t ? t.cols : t, r = e === "xs" ? "" : "-" + e;
		n != null && f.push("" + d + r + "-" + n);
	}), /*#__PURE__*/ _.createElement(c, t({ ref: n }, l, { className: g.default.apply(void 0, [
		i,
		u,
		o && "no-gutters"
	].concat(f)) }));
});
T.displayName = "Row", T.defaultProps = w;
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Badge/index.js
var E = /*#__PURE__*/ _.forwardRef(({ as: e = "span", variant: t = "primary", pill: n = !1, bsPrefix: r = "badge", ...i }, a) => /*#__PURE__*/ _.createElement(b, {
	as: e,
	variant: t,
	pill: n,
	bsPrefix: r,
	...i,
	ref: a
})), ee = (e) => /*#__PURE__*/ _.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /*#__PURE__*/ _.createElement("path", {
	d: "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2Z",
	fill: "currentColor"
})), te = (e) => /*#__PURE__*/ _.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /*#__PURE__*/ _.createElement("path", {
	d: "m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8Z",
	fill: "currentColor"
})), ne = "pgn__overflow-scroll-item", re = (e) => e?.offsetLeft || 0, ie = ({ overflowRef: e, activeChildElementIndex: t, childrenElements: n, scrollAnimationBehavior: r = "smooth", onScrollPrevious: i, onScrollNext: a, onChangeOffset: o, currentOffset: s, offset: c, offsetType: l = "percentage" }) => {
	let u = (0, _.useCallback)((e, t, n) => {
		let r = parseInt(e, 10);
		return t === "percentage" ? Math.round(r / 100 * n) : r;
	}, []);
	return {
		scrollToPrevious: (0, _.useCallback)(() => {
			if (!e) return;
			let a = (e) => e <= 0 ? n[0] : n[e], d = t - 1, f = re(a(d));
			if (c) {
				let t = e.scrollWidth - e.clientWidth;
				f = s - u(c, l, t), o && o(f < 0 ? 0 : f);
			}
			e.scrollTo({
				left: f,
				behavior: r
			}), i && i({ currentActiveChildElementIndex: d <= 0 ? 0 : d });
		}, [
			e,
			t,
			c,
			r,
			i,
			n,
			u,
			l,
			s,
			o
		]),
		scrollToNext: (0, _.useCallback)(() => {
			if (!e) return;
			let i = n.length - 1, d = t + 1, f = d >= i, p = re(f ? n[i] : n[d]);
			if (c) {
				let t = e.scrollWidth - e.clientWidth;
				p = s + u(c, l, t), o && o(p > t ? t : p);
			}
			e.scrollTo({
				left: p,
				behavior: r
			}), a && a({ currentActiveChildElementIndex: f ? i : d });
		}, [
			e,
			n,
			t,
			c,
			r,
			a,
			u,
			l,
			s,
			o
		])
	};
}, ae = "pgn__overflow-scroll-overflow-container", oe = "linear-gradient(to right, var(--pgn-color-overflow-scroll-opacity-mask-transparent) 0%, black 10%", se = "linear-gradient(to right, black 90%, var(--pgn-color-overflow-scroll-opacity-mask-transparent) 100%", ce = "linear-gradient(to right, var(--pgn-color-overflow-scroll-opacity-mask-transparent) 0%, black 10%, black 90%, var(--pgn-color-overflow-scroll-opacity-mask-transparent) 100%)", le = ({ overflowRef: e, hasInteractiveChildren: t, disableScroll: n, disableOpacityMasks: r, isScrolledToStart: i, isScrolledToEnd: a }) => {
	(0, _.useEffect)(() => {
		if (!e) return;
		t && e.tabIndex !== "-1" && (e.tabIndex = "-1"), !t && e.tabIndex !== "0" && (e.tabIndex = "0");
		let o = globalThis.getComputedStyle(e), s = o.getPropertyValue("position"), c = o.getPropertyValue("overflow-x");
		if (e.classList.contains("pgn__overflow-scroll-overflow-container") || e.classList.add(ae), s !== "relative" && (e.style.position = "relative"), n && c !== "hidden" && (e.style.overflowX = "hidden"), !n && c !== "scroll" && (e.style.overflowX = "scroll"), r) e.style.removeProperty("mask-image"), e.style.removeProperty("webkit-mask-image");
		else {
			let t = (() => {
				if (i && !a) return se;
				if (!i && a) return oe;
				if (!i && !a) return ce;
			})();
			t ? (e.style.maskImage = t, e.style.webkitMaskImage = t) : (e.style.removeProperty("mask-image"), e.style.removeProperty("webkit-mask-image"));
		}
	}, [
		e,
		t,
		n,
		r,
		i,
		a
	]);
}, D = (e) => e ? Math.abs(Math.round(e.scrollLeft)) : 0, ue = ({ overflowRef: e, childrenElements: t, activeChildElementIndex: n, onActiveChildElementIndexChange: r, disableScroll: i, onOverflowElementScrollLeftChange: a }) => {
	let [o, s] = (0, _.useState)(!1), [c, l] = (0, _.useState)(0), u = (0, _.useCallback)(({ isScrollingLeft: i }) => {
		let a = (e) => i ? e.offsetLeft : e.offsetLeft + e.offsetWidth;
		for (let i = 0; i < t.length; i++) {
			let o = t[i];
			if (a(o) > D(e)) {
				i !== n && r(i);
				break;
			}
		}
	}, [
		n,
		t,
		e,
		r
	]), d = (0, _.useCallback)((t) => {
		if (!e?.current || i) return;
		let n = t.deltaX < 0;
		u({ isScrollingLeft: n });
	}, [
		e,
		i,
		u
	]), f = (0, _.useCallback)(() => {
		if (e && e !== document.activeElement) {
			for (let e = 0; e < t.length; e++) if (t[e].contains(document.activeElement) && e !== n) {
				r(e);
				break;
			}
		}
	}, [
		e,
		n,
		t,
		r
	]), p = (0, _.useCallback)(() => {
		let t = D(e);
		a(t), o && (u({ isScrollingLeft: t < c }), l(t));
	}, [
		o,
		e,
		u,
		c,
		a
	]), m = (0, _.useCallback)(() => {
		let t = D(e);
		l(t), s(!0);
	}, [e]), h = (0, _.useCallback)(() => {
		s(!1);
	}, []), g = (0, _.useCallback)((t) => {
		if (t.key === "ArrowLeft" || t.key === "ArrowRight") {
			let t = D(e);
			l(t);
		}
	}, [e]), v = (0, _.useCallback)((t) => {
		if (t.key === "ArrowLeft" || t.key === "ArrowRight") {
			let t = e.scrollLeft < c;
			u({ isScrollingLeft: t });
		}
	}, [
		e,
		c,
		u
	]);
	return (0, _.useEffect)(() => {
		if (!e) return;
		let t = e;
		return t.addEventListener("focusin", f), t.addEventListener("keydown", g), t.addEventListener("keyup", v), t.addEventListener("scroll", p), i || (t.addEventListener("wheel", d), t.addEventListener("mousedown", m), t.addEventListener("mouseup", h)), () => {
			e && (t.removeEventListener("focusin", f), t.removeEventListener("keydown", g), t.removeEventListener("keyup", v), t.removeEventListener("scroll", p), i || (t?.removeEventListener("wheel", d), t?.removeEventListener("mousedown", m), t?.removeEventListener("mouseup", h)));
		};
	}, [
		e,
		i,
		d,
		f,
		g,
		v,
		p,
		h,
		m
	]), {
		updateActiveChildElementIndex: u,
		updateActiveChildElementOnWheel: d,
		updateActiveChildElementOnFocusIn: f,
		handleScrollEvent: p,
		handleMouseDownEvent: m,
		handleMouseUpEvent: h,
		updateActiveChildElementOnKeyDown: g,
		updateActiveChildElementOnKeyUp: v,
		isOverflowElementMouseDown: o,
		previousOverflowScrollLeft: c
	};
}, O = ({ element: e, childQuerySelector: t }) => {
	if (!e) return [];
	let n = t || ".pgn__overflow-scroll-item", r = [...e.querySelectorAll(n)];
	return r.length, r;
}, de = ({ overflowRef: e, childQuerySelector: t, onScrollPrevious: n, onScrollNext: r, hasInteractiveChildren: i = !1, disableScroll: a = !1, disableOpacityMasks: o = !1, scrollAnimationBehavior: s = "smooth", offset: c, offsetType: l = "percentage" }) => {
	let [u, d] = (0, _.useState)(0), [f, p] = (0, _.useState)(!0), [m, h] = (0, _.useState)(!0), [g, v] = (0, _.useState)(0), y = O({
		element: e,
		childQuerySelector: t
	});
	(0, _.useEffect)(() => {
		if (!e) return;
		let n = O({
			element: e,
			childQuerySelector: t
		}).reduce((e, t) => e + t.offsetWidth, 0), r = Math.max(y[0]?.offsetLeft, 0);
		p(g <= r);
		let i = D(e), a = n > e.getBoundingClientRect().width || !1, o = i >= e.scrollWidth - e.clientWidth;
		h(!(a && !o));
	}, [
		e,
		t,
		f,
		m,
		g,
		y
	]);
	let [b, x] = (0, _.useState)(0);
	ue({
		overflowRef: e,
		childrenElements: y,
		activeChildElementIndex: b,
		onActiveChildElementIndexChange: (0, _.useCallback)((e) => {
			x(e);
		}, []),
		disableScroll: a,
		onOverflowElementScrollLeftChange: (0, _.useCallback)((e) => {
			v(e);
		}, [])
	}), le({
		overflowRef: e,
		hasInteractiveChildren: i,
		disableScroll: a,
		disableOpacityMasks: o,
		isScrolledToStart: f,
		isScrolledToEnd: m
	});
	let { scrollToPrevious: S, scrollToNext: C } = ie({
		overflowRef: e,
		activeChildElementIndex: b,
		childrenElements: y,
		scrollAnimationBehavior: s,
		onScrollPrevious: (0, _.useCallback)(() => {
			x((e) => Math.max(e - 1, 0)), n && n();
		}, [n]),
		onScrollNext: (0, _.useCallback)(() => {
			x((e) => Math.min(e + 1, y.length - 1)), r && r();
		}, [y, r]),
		onChangeOffset: d,
		currentOffset: u,
		offset: c,
		offsetType: l
	});
	return {
		scrollToPrevious: S,
		scrollToNext: C,
		isScrolledToStart: f,
		isScrolledToEnd: m,
		activeChildElementIndex: b
	};
}, k = (e) => (0, _.useMemo)(() => _.Children.map(_.Children.toArray(e), (e) => (0, _.cloneElement)(e, { className: (0, g.default)(ne, e.props.className) })), [e]), A = /*#__PURE__*/ (0, _.createContext)();
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/OverflowScroll/OverflowScrollItems.js
function j({ children: e }) {
	return k(e);
}
j.propTypes = { children: x.default.node.isRequired };
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/OverflowScroll/OverflowScroll.js
function M({ ariaLabel: e, children: t, childQuerySelector: n, hasInteractiveChildren: r, disableScroll: i, disableOpacityMasks: a, onScrollPrevious: o, onScrollNext: s, offset: c, offsetType: l }) {
	let [u, d] = (0, _.useState)(), { isScrolledToStart: f, isScrolledToEnd: p, scrollToPrevious: m, scrollToNext: h } = de({
		childQuerySelector: n,
		hasInteractiveChildren: r,
		disableScroll: i,
		disableOpacityMasks: a,
		onScrollPrevious: o,
		onScrollNext: s,
		overflowRef: u,
		offset: c,
		offsetType: l
	}), g = (0, _.useMemo)(() => ({
		overflowRef: u,
		setOverflowRef: d,
		isScrolledToStart: f,
		isScrolledToEnd: p,
		scrollToPrevious: m,
		scrollToNext: h
	}), [
		u,
		d,
		f,
		p,
		m,
		h
	]);
	return /*#__PURE__*/ _.createElement("div", {
		className: "pgn__overflow-scroll",
		role: "region",
		"aria-label": e
	}, /*#__PURE__*/ _.createElement(A.Provider, { value: g }, t));
}
M.Items = j, M.propTypes = {
	ariaLabel: x.default.string.isRequired,
	children: x.default.node.isRequired,
	childQuerySelector: x.default.string,
	hasInteractiveChildren: x.default.bool,
	disableScroll: x.default.bool,
	disableOpacityMasks: x.default.bool,
	onScrollPrevious: x.default.func,
	onScrollNext: x.default.func,
	offset: x.default.oneOfType([x.default.number, x.default.string]),
	offsetType: x.default.oneOf(["percentage", "fixed"])
}, M.defaultProps = {
	childQuerySelector: void 0,
	disableScroll: !1,
	hasInteractiveChildren: !1,
	disableOpacityMasks: !1,
	onScrollPrevious: void 0,
	onScrollNext: void 0,
	offset: void 0,
	offsetType: "percentage"
};
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/withDeprecatedProps.js
var N = /*#__PURE__*/ function(e) {
	return e.MOVED = "MOVED", e.REMOVED = "REMOVED", e.FORMAT = "FORMAT", e.MOVED_AND_FORMAT = "MOVED_AND_FORMAT", e;
}({});
function fe(e, t, n) {
	class r extends _.Component {
		static displayName = `withDeprecatedProps(${t})`;
		constructor(e) {
			super(e), this.transformProps = this.transformProps.bind(this);
		}
		warn(e) {}
		transformProps(e, r) {
			if (n[r] === void 0) return e[r] = this.props[r], e;
			let { deprType: i, newName: a, expect: o, transform: s, message: c } = n[r];
			switch (i) {
				case N.MOVED:
					this.warn(`${t}: The prop '${r}' has been moved to '${a}'.`), e[a] = this.props[r];
					break;
				case N.REMOVED:
					this.warn(`${t}: The prop '${r}' has been removed. '${c}'`);
					break;
				case N.FORMAT:
					o(this.props[r]) ? e[r] = this.props[r] : (this.warn(`${t}: The prop '${r}' expects a new format. ${c}`), e[r] = s(this.props[r], this.props));
					break;
				case N.MOVED_AND_FORMAT: {
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
			return /*#__PURE__*/ _.createElement(e, { ...n }, this.props.children || t);
		}
	}
	return r;
}
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Card/CardBody.js
var P = /*#__PURE__*/ _.forwardRef(({ className: e, children: t, ...n }, r) => /*#__PURE__*/ _.createElement("div", {
	className: (0, g.default)("pgn__card-body", e),
	ref: r,
	...n
}, t)), F = "card", I = /*#__PURE__*/ _.forwardRef(({ prefix: e, className: t, bgColor: n, textColor: r, borderColor: i, hasBody: a = !1, children: o, as: s = "div", ...c }, l) => {
	let u = (0, g.default)(t, e ? `${e}-${F}` : F, n && `bg-${n}`, r && `text-${r}`, i && `border-${i}`);
	return /*#__PURE__*/ _.createElement(s, {
		ref: l,
		...c,
		className: u
	}, a ? /*#__PURE__*/ _.createElement(P, null, o) : o);
}), L = /*#__PURE__*/ (0, _.createContext)({
	orientation: "vertical",
	isLoading: !1,
	variant: "light"
});
function pe({ orientation: e = "vertical", children: t, isLoading: n = !1, variant: r = "light" }) {
	return /*#__PURE__*/ _.createElement(L.Provider, { value: {
		orientation: e,
		isLoading: n,
		variant: r
	} }, t);
}
// node_modules/.pnpm/react-loading-skeleton@3.5.0_react@18.3.1/node_modules/react-loading-skeleton/dist/index.js
var me = _.createContext({}), R = !0;
function he({ baseColor: e, highlightColor: t, width: n, height: r, borderRadius: i, circle: a, direction: o, duration: s, enableAnimation: c = R, customHighlightBackground: l }) {
	let u = {};
	return o === "rtl" && (u["--animation-direction"] = "reverse"), typeof s == "number" && (u["--animation-duration"] = `${s}s`), c || (u["--pseudo-element-display"] = "none"), (typeof n == "string" || typeof n == "number") && (u.width = n), (typeof r == "string" || typeof r == "number") && (u.height = r), (typeof i == "string" || typeof i == "number") && (u.borderRadius = i), a && (u.borderRadius = "50%"), e !== void 0 && (u["--base-color"] = e), t !== void 0 && (u["--highlight-color"] = t), typeof l == "string" && (u["--custom-highlight-background"] = l), u;
}
function z({ count: e = 1, wrapper: t, className: n, containerClassName: r, containerTestId: i, circle: a = !1, style: o, ...s }) {
	let c = _.useContext(me), l = { ...s };
	for (let [e, t] of Object.entries(s)) t === void 0 && delete l[e];
	let u = {
		...c,
		...l,
		circle: a
	}, d = {
		...o,
		...he(u)
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
		let r = _.createElement("span", {
			className: f,
			style: n,
			key: t
		}, "‌");
		p ? m.push(r) : m.push(_.createElement(_.Fragment, { key: t }, r, _.createElement("br", null)));
	}
	return _.createElement("span", {
		className: r,
		"data-testid": i,
		"aria-live": "polite",
		"aria-busy": u.enableAnimation ?? R
	}, t ? m.map((e, n) => _.createElement(t, { key: n }, e)) : m);
}
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Card/CardHeader.js
var ge = 20, B = /*#__PURE__*/ _.forwardRef(({ actions: e, className: t, size: n, subtitle: r, title: i, skeletonHeight: a, skeletonWidth: o }, s) => {
	let { isLoading: c } = (0, _.useContext)(L), l = (0, _.useCallback)((e) => {
		if (/*#__PURE__*/ _.isValidElement(e)) {
			let { children: t } = e.props, r = {
				size: n,
				children: Array.isArray(t) ? t.map(l) : l(t)
			};
			return /*#__PURE__*/ _.cloneElement(e, r);
		}
		return e;
	}, [n]);
	return c ? /*#__PURE__*/ _.createElement("div", { className: (0, g.default)("pgn__card-header", t) }, /*#__PURE__*/ _.createElement(z, {
		containerClassName: "pgn__card-header-loader",
		height: a,
		width: o
	})) : /*#__PURE__*/ _.createElement("div", {
		className: (0, g.default)("pgn__card-header", t),
		ref: s
	}, /*#__PURE__*/ _.createElement("div", { className: "pgn__card-header-content" }, i && /*#__PURE__*/ _.createElement("div", { className: `pgn__card-header-title-${n}` }, i), r && /*#__PURE__*/ _.createElement("div", { className: `pgn__card-header-subtitle-${n}` }, r)), e && /*#__PURE__*/ _.createElement("div", { className: "pgn__card-header-actions" }, n === "md" ? e : l(e)));
});
B.propTypes = {
	actions: x.default.node,
	className: x.default.string,
	title: x.default.node,
	size: x.default.oneOf(["sm", "md"]),
	subtitle: x.default.node,
	skeletonHeight: x.default.number,
	skeletonWidth: x.default.number
}, B.defaultProps = {
	actions: null,
	className: null,
	size: "md",
	title: null,
	subtitle: null,
	skeletonHeight: ge,
	skeletonWidth: null
};
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Card/CardDivider.js
var _e = /*#__PURE__*/ (0, _.forwardRef)(({ className: e, ...t }, n) => /*#__PURE__*/ _.createElement("div", {
	className: (0, g.default)("pgn__card-divider", e),
	ref: n,
	...t
})), ve = 100, V = /*#__PURE__*/ _.forwardRef(({ className: e, children: t, title: n, actions: r, muted: i, skeletonHeight: a, skeletonWidth: o }, s) => {
	let { isLoading: c } = (0, _.useContext)(L);
	return c ? /*#__PURE__*/ _.createElement("div", { className: (0, g.default)("pgn__card-section", e, { "is-muted": i }) }, /*#__PURE__*/ _.createElement(z, {
		containerClassName: "pgn__card-section-loader",
		height: a,
		width: o
	})) : /*#__PURE__*/ _.createElement("div", {
		className: (0, g.default)("pgn__card-section", e, { "is-muted": i }),
		ref: s
	}, n && /*#__PURE__*/ _.createElement("div", { className: "pgn__card-section-title" }, n), t, r && /*#__PURE__*/ _.createElement("div", { className: "pgn__card-section-actions" }, r));
});
V.propTypes = {
	className: x.default.string,
	children: x.default.node,
	title: x.default.node,
	actions: x.default.node,
	muted: x.default.bool,
	skeletonHeight: x.default.number,
	skeletonWidth: x.default.number
}, V.defaultProps = {
	children: null,
	className: void 0,
	title: void 0,
	actions: void 0,
	muted: !1,
	skeletonHeight: ve,
	skeletonWidth: void 0
};
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Card/CardFooter.js
var ye = 18, H = /*#__PURE__*/ _.forwardRef(({ children: e, className: t, isStacked: n, textElement: r, skeletonHeight: i, skeletonWidth: a, orientation: o }, s) => {
	let { orientation: c, isLoading: l } = (0, _.useContext)(L), u = o || c, d = `pgn__card-footer ${u}${n ? "-stacked" : ""}`, f = `pgn__card-footer-text ${u}${n ? "-stacked" : ""}`;
	return l ? /*#__PURE__*/ _.createElement("div", { className: (0, g.default)(t, d) }, /*#__PURE__*/ _.createElement(z, {
		containerClassName: "pgn__card-footer-loader",
		height: i,
		width: a
	})) : /*#__PURE__*/ _.createElement("div", {
		className: (0, g.default)(t, d),
		ref: s
	}, r && /*#__PURE__*/ _.createElement("div", { className: f }, r), e);
});
H.propTypes = {
	children: x.default.node,
	className: x.default.string,
	textElement: x.default.node,
	isStacked: x.default.bool,
	orientation: x.default.oneOf(["horizontal", "vertical"]),
	skeletonHeight: x.default.number,
	skeletonWidth: x.default.number
}, H.defaultProps = {
	children: null,
	className: void 0,
	textElement: void 0,
	isStacked: !1,
	orientation: void 0,
	skeletonHeight: ye,
	skeletonWidth: void 0
};
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Card/CardFallbackDefaultImage.js
var be = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXwAAACMCAYAAAB/AhJnAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAH6SURBVHgB7dRBEYBADACxwuDf5j0QUXywiYhc7zk7APzd3gNAgvABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIp4BaNpp2Q/3/wfPkGyXOQAAAABJRU5ErkJggg==", xe = 140, Se = 41, U = /*#__PURE__*/ _.forwardRef(({ src: e, fallbackSrc: t, srcAlt: n, logoSrc: r, fallbackLogoSrc: i, logoAlt: a, skeletonHeight: o, skeletonWidth: s, logoSkeleton: c, logoSkeletonHeight: l, logoSkeletonWidth: u, className: d, imageLoadingType: f, skeletonDuringImageLoad: p }, m) => {
	let { orientation: h, isLoading: v } = (0, _.useContext)(L), [y, b] = (0, _.useState)(!1), [x, S] = (0, _.useState)(!1), C = `pgn__card-wrapper-image-cap ${h}`, w = () => /*#__PURE__*/ _.createElement(z, {
		containerClassName: "pgn__card-image-cap-loader",
		height: h === "horizontal" ? "100%" : o,
		width: s
	}), T = () => /*#__PURE__*/ _.createElement(z, {
		containerClassName: "pgn__card-logo-cap",
		height: l,
		width: u
	});
	if (v) return /*#__PURE__*/ _.createElement("div", {
		className: (0, g.default)(C, d),
		"data-testid": "image-loader-wrapper"
	}, w(), c && T());
	let E = (e, t, n) => {
		let { currentTarget: r } = e;
		!t || r.src.endsWith(t) ? n === "imageCap" ? r.src = be : S(!1) : r.src = t;
	};
	return /*#__PURE__*/ _.createElement("div", {
		className: (0, g.default)(d, C),
		ref: m
	}, !!e && /*#__PURE__*/ _.createElement(_.Fragment, null, p && !y && w(), /*#__PURE__*/ _.createElement("img", {
		className: (0, g.default)("pgn__card-image-cap", { show: y }),
		src: e,
		onError: (e) => E(e, t, "imageCap"),
		onLoad: () => b(!0),
		alt: n,
		loading: f
	})), !!r && /*#__PURE__*/ _.createElement(_.Fragment, null, p && !x && T(), /*#__PURE__*/ _.createElement("img", {
		className: (0, g.default)("pgn__card-logo-cap", { show: x }),
		src: r,
		onError: (e) => E(e, i, "logoCap"),
		onLoad: () => S(!0),
		alt: a,
		loading: f
	})));
});
U.propTypes = {
	className: x.default.string,
	src: x.default.string,
	fallbackSrc: x.default.string,
	srcAlt: x.default.string,
	logoSrc: x.default.string,
	fallbackLogoSrc: x.default.string,
	logoAlt: x.default.string,
	skeletonHeight: x.default.number,
	skeletonWidth: x.default.number,
	logoSkeleton: x.default.bool,
	logoSkeletonHeight: x.default.number,
	logoSkeletonWidth: x.default.number,
	imageLoadingType: x.default.oneOf(["eager", "lazy"]),
	skeletonDuringImageLoad: x.default.bool
}, U.defaultProps = {
	src: void 0,
	fallbackSrc: be,
	logoSrc: void 0,
	fallbackLogoSrc: void 0,
	className: void 0,
	srcAlt: void 0,
	logoAlt: void 0,
	skeletonHeight: xe,
	logoSkeleton: !1,
	logoSkeletonHeight: Se,
	skeletonWidth: void 0,
	logoSkeletonWidth: void 0,
	imageLoadingType: "eager",
	skeletonDuringImageLoad: !1
};
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Card/CardStatus.js
var W = /*#__PURE__*/ _.forwardRef(({ className: e, children: t, variant: n, icon: r, title: i, actions: a, ...o }, s) => {
	let { isLoading: c } = (0, _.useContext)(L);
	return c ? /*#__PURE__*/ _.createElement("div", {
		className: (0, g.default)("pgn__card-status", e),
		"data-testid": "card-status-skeleton",
		ref: s
	}, /*#__PURE__*/ _.createElement(z, null)) : /*#__PURE__*/ _.createElement("div", {
		className: (0, g.default)("pgn__card-status", `pgn__card-status__${n}`, e),
		ref: s,
		...o
	}, /*#__PURE__*/ _.createElement("div", { className: "pgn__card-status__content" }, r && /*#__PURE__*/ _.createElement(d, {
		className: "pgn__card-status__content-icon",
		src: r
	}), /*#__PURE__*/ _.createElement("div", { className: "pgn__card-status__message-content" }, i && /*#__PURE__*/ _.createElement("div", { className: "pgn__card-status__heading" }, i), t)), !!a && /*#__PURE__*/ _.createElement("div", { className: "pgn__card-status__actions" }, a));
});
W.propTypes = {
	children: x.default.node.isRequired,
	className: x.default.string,
	icon: x.default.func,
	variant: x.default.oneOf([
		"primary",
		"success",
		"danger",
		"warning"
	]),
	title: x.default.oneOfType([x.default.element, x.default.string]),
	actions: x.default.node
}, W.defaultProps = {
	className: void 0,
	icon: void 0,
	variant: "warning",
	title: void 0,
	actions: void 0
};
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Card/CardDeck.js
var G = /*#__PURE__*/ _.forwardRef(({ className: e, children: t, columnSizes: r, hasInteractiveChildren: i, canScrollHorizontal: a, hasOverflowScrollItems: o, hasEqualColumnHeights: s }, c) => {
	let l = (0, _.useMemo)(() => _.Children.map(t, (e) => /*#__PURE__*/ _.createElement(n, {
		...r,
		className: (0, g.default)("pgn__card-deck__card-item", { "pgn__card__disable-equal-column-heights": !s })
	}, e)), [
		t,
		r,
		s
	]), u = k(l), d = (0, _.useMemo)(() => o ? u : l, [
		o,
		u,
		l
	]);
	return /*#__PURE__*/ _.createElement("div", { className: (0, g.default)("pgn__card-deck", { "pgn__card-deck-has-horizontal-scroll": a }, e) }, /*#__PURE__*/ _.createElement(T, {
		className: "pgn__card-deck-row",
		tabIndex: i ? -1 : 0,
		ref: c
	}, d));
});
G.propTypes = {
	className: x.default.string,
	children: x.default.node.isRequired,
	columnSizes: x.default.shape({
		xs: x.default.number,
		sm: x.default.number,
		md: x.default.number,
		lg: x.default.number,
		xl: x.default.number
	}),
	hasInteractiveChildren: x.default.bool,
	canScrollHorizontal: x.default.bool,
	hasOverflowScrollItems: x.default.bool,
	hasEqualColumnHeights: x.default.bool
}, G.defaultProps = {
	className: void 0,
	columnSizes: {
		sm: 12,
		lg: 6,
		xl: 4
	},
	hasInteractiveChildren: !1,
	canScrollHorizontal: !0,
	hasOverflowScrollItems: !1,
	hasEqualColumnHeights: !0
};
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Card/CardCarousel/CardCarouselProvider.js
var K = /*#__PURE__*/ (0, _.createContext)();
function q({ columnSizes: e, hasInteractiveChildren: t, canScrollHorizontal: n, children: r, CardCarouselControls: i }) {
	let { overflowRef: a, setOverflowRef: o, isScrolledToStart: s, isScrolledToEnd: c, scrollToPrevious: l, scrollToNext: u } = (0, _.useContext)(A), d = (0, _.useMemo)(() => ({
		overflowRef: a,
		setOverflowRef: o,
		columnSizes: e,
		hasInteractiveChildren: t,
		canScrollHorizontal: n,
		isScrolledToStart: s,
		isScrolledToEnd: c,
		scrollToPrevious: l,
		scrollToNext: u,
		CardCarouselControls: i
	}), [
		a,
		o,
		e,
		t,
		n,
		s,
		c,
		l,
		u,
		i
	]);
	return /*#__PURE__*/ _.createElement(K.Provider, { value: d }, r);
}
q.propTypes = {
	children: x.default.node.isRequired,
	columnSizes: x.default.shape({
		xs: x.default.number,
		sm: x.default.number,
		md: x.default.number,
		lg: x.default.number,
		xl: x.default.number
	}),
	hasInteractiveChildren: x.default.bool,
	canScrollHorizontal: x.default.bool,
	CardCarouselControls: x.default.elementType
}, q.defaultProps = {
	columnSizes: {
		sm: 12,
		lg: 6,
		xl: 4
	},
	hasInteractiveChildren: !1,
	canScrollHorizontal: !0,
	CardCarouselControls: void 0
};
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Card/CardCarousel/CardCarouselTitle.js
function Ce({ children: e, as: t, className: n }) {
	let r = t || "h2";
	return /*#__PURE__*/ _.createElement(r, { className: (0, g.default)("pgn__card-carousel-title", n) }, e);
}
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Card/CardCarousel/CardCarouselSubtitle.js
function we({ children: e, as: t, className: n }) {
	let r = t || "p";
	return /*#__PURE__*/ _.createElement(r, { className: (0, g.default)("pgn__card-carousel-subtitle", n) }, e);
}
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Card/CardCarousel/messages.js
var Te = r({
	scrollToPrevious: {
		id: "pgn.CardCarousel.scrollToPrevious",
		defaultMessage: "Scroll to previous",
		description: "Accessibility text describing the action for navigating a scrollable carousel to the previous element"
	},
	scrollToNext: {
		id: "pgn.CardCarousel.scrollToNext",
		defaultMessage: "Scroll to next",
		description: "Accessibility text describing the action for navigating a scrollable carousel to the next element"
	}
});
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Card/CardCarousel/CardCarouselControls.js
function Ee() {
	let { isScrolledToStart: e, isScrolledToEnd: t, scrollToPrevious: n, scrollToNext: r } = (0, _.useContext)(K), i = c();
	return e && t ? null : /*#__PURE__*/ _.createElement("div", { className: "pgn__card-carousel-controls" }, /*#__PURE__*/ _.createElement(m, {
		direction: "horizontal",
		gap: 1
	}, /*#__PURE__*/ _.createElement(u, {
		disabled: e,
		src: ee,
		iconAs: d,
		alt: i.formatMessage(Te.scrollToPrevious),
		onClick: n
	}), /*#__PURE__*/ _.createElement(u, {
		disabled: t,
		src: te,
		iconAs: d,
		alt: i.formatMessage(Te.scrollToNext),
		onClick: r
	})));
}
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Card/CardCarousel/CardCarouselHeader.js
var De = (e) => e ? /*#__PURE__*/ (0, _.isValidElement)(e) ? e : /*#__PURE__*/ _.createElement(Ce, null, e) : null, Oe = (e) => e ? /*#__PURE__*/ (0, _.isValidElement)(e) ? e : /*#__PURE__*/ _.createElement(we, null, e) : null;
function J({ title: e, subtitle: t }) {
	let { CardCarouselControls: n } = (0, _.useContext)(K), r = n || Ee, i = De(e), a = Oe(t);
	return /*#__PURE__*/ _.createElement("div", { className: "pgn__card-carousel-header" }, /*#__PURE__*/ _.createElement("div", null, i, a), /*#__PURE__*/ _.createElement(r, null));
}
J.propTypes = {
	title: x.default.node,
	subtitle: x.default.node
}, J.defaultProps = {
	title: void 0,
	subtitle: void 0
};
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Card/CardCarousel/CardCarouselItems.js
function ke({ children: e }) {
	let { columnSizes: t, hasInteractiveChildren: n, canScrollHorizontal: r, setOverflowRef: i } = (0, _.useContext)(K);
	return /*#__PURE__*/ _.createElement(G, {
		ref: i,
		columnSizes: t,
		hasInteractiveChildren: n,
		canScrollHorizontal: r,
		hasOverflowScrollItems: !0
	}, e);
}
ke.propTypes = { children: x.default.node.isRequired };
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Card/CardCarousel/CardCarousel.js
function Y({ ariaLabel: e, children: t, title: n, subtitle: r, columnSizes: i, hasInteractiveChildren: a, canScrollHorizontal: o, disableOpacityMasks: s, onScrollPrevious: c, onScrollNext: l, CardCarouselControls: u }) {
	return /*#__PURE__*/ _.createElement(M, {
		disableScroll: !o,
		hasInteractiveChildren: a,
		disableOpacityMasks: s,
		onScrollPrevious: c,
		onScrollNext: l,
		ariaLabel: e
	}, /*#__PURE__*/ _.createElement(q, {
		columnSizes: i,
		hasInteractiveChildren: a,
		canScrollHorizontal: o,
		CardCarouselControls: u
	}, /*#__PURE__*/ _.createElement("div", { className: "pgn__card-carousel" }, /*#__PURE__*/ _.createElement(J, {
		title: n,
		subtitle: r
	}), /*#__PURE__*/ _.createElement(ke, null, t))));
}
Y.propTypes = {
	children: x.default.node.isRequired,
	ariaLabel: x.default.string.isRequired,
	title: x.default.node,
	subtitle: x.default.node,
	columnSizes: x.default.shape({
		xs: x.default.number,
		sm: x.default.number,
		md: x.default.number,
		lg: x.default.number,
		xl: x.default.number
	}),
	hasInteractiveChildren: x.default.bool,
	canScrollHorizontal: x.default.bool,
	disableOpacityMasks: x.default.bool,
	onScrollPrevious: x.default.func,
	onScrollNext: x.default.func,
	CardCarouselControls: x.default.elementType
}, Y.defaultProps = {
	title: void 0,
	subtitle: void 0,
	columnSizes: {
		sm: 12,
		lg: 6,
		xl: 4
	},
	hasInteractiveChildren: !1,
	canScrollHorizontal: !0,
	disableOpacityMasks: !1,
	onScrollPrevious: void 0,
	onScrollNext: void 0,
	CardCarouselControls: void 0
};
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Card/index.js
var Ae = [
	"light",
	"dark",
	"muted"
], X = /*#__PURE__*/ _.forwardRef(({ orientation: e, isLoading: t, className: n, isClickable: r, muted: i, variant: a, ...o }, s) => {
	let c = i ? "muted" : a;
	return /*#__PURE__*/ _.createElement(pe, {
		orientation: e,
		isLoading: t,
		variant: c
	}, /*#__PURE__*/ _.createElement(I, {
		...o,
		className: (0, g.default)(n, "pgn__card", {
			horizontal: e === "horizontal",
			clickable: r,
			[`pgn__card-${c}`]: c
		}),
		ref: s,
		tabIndex: r ? 0 : -1
	}));
});
X.propTypes = {
	className: x.default.string,
	orientation: x.default.oneOf(["vertical", "horizontal"]),
	isClickable: x.default.bool,
	isLoading: x.default.bool,
	variant: x.default.oneOf(Ae),
	muted: x.default.bool
}, X.defaultProps = {
	...I.defaultProps,
	className: void 0,
	orientation: "vertical",
	isClickable: !1,
	variant: "light",
	isLoading: !1
};
var Z = fe(X, "Card", { muted: {
	deprType: N.REMOVED,
	message: "Use \"variant\" prop instead, i.e. variant=\"muted\""
} });
Z.Status = W, Z.Header = B, Z.Divider = _e, Z.Section = V, Z.Footer = H, Z.ImageCap = U, Z.Context = L, Z.Body = P;
// src/card/common/student-ui/ContentHighlight.tsx
var Q = p();
function je({ title: e, subtitle: t, description: n, orientation: r }) {
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		className: `content-highlight ${r === "HORIZONTAL" ? "content-highlight--horizontal" : "content-highlight--vertical"}`,
		children: [
			/* @__PURE__ */ (0, Q.jsx)("h4", {
				className: "content-highlight-subtitle text-accent",
				children: t
			}),
			/* @__PURE__ */ (0, Q.jsx)("h3", {
				className: "content-highlight-title",
				children: e
			}),
			/* @__PURE__ */ (0, Q.jsx)("p", {
				className: "content-highlight-description",
				children: n
			})
		]
	});
}
// src/card/common/student-ui/MaterialIcon.tsx
function $({ name: e, bg: t, fg: n, size: r }) {
	let i = `${r === "sm" ? "p-2" : "p-3"} ${t || "bg-secondary-500"} ${n || "text-light-100"} rounded-circle`, a = r === "sm" ? "2.5rem" : "3.5rem";
	return /* @__PURE__ */ (0, Q.jsx)("div", {
		className: i,
		style: {
			width: a,
			height: a
		},
		children: /* @__PURE__ */ (0, Q.jsx)("span", {
			className: "material-icons-outlined",
			children: e
		})
	});
}
// src/card/common/student-ui/RichList.tsx
function Me({ items: e }) {
	return /* @__PURE__ */ (0, Q.jsx)("div", {
		className: "rich-list",
		children: e.map((t, n) => /* @__PURE__ */ (0, Q.jsxs)("div", {
			className: "rich-list-item",
			children: [/* @__PURE__ */ (0, Q.jsxs)(m, {
				direction: "horizontal",
				className: "rich-list-row",
				children: [/* @__PURE__ */ (0, Q.jsx)($, { name: t.icon }), /* @__PURE__ */ (0, Q.jsxs)("div", {
					className: "rich-list-content",
					children: [/* @__PURE__ */ (0, Q.jsx)("h4", {
						className: "rich-list-title",
						children: t.title
					}), /* @__PURE__ */ (0, Q.jsx)("p", {
						className: "rich-list-description",
						children: t.description
					})]
				})]
			}), n < e.length - 1 && /* @__PURE__ */ (0, Q.jsx)("hr", { className: "rich-list-divider" })]
		}, n))
	});
}
// src/card/common/student-ui/HoverList.tsx
function Ne({ items: e }) {
	let [t, n] = (0, _.useState)(null);
	return /* @__PURE__ */ (0, Q.jsx)("ol", {
		className: "hover-list",
		children: e.map((e, r) => /* @__PURE__ */ (0, Q.jsx)("li", {
			className: `hover-list-item ${t === r ? "is-active" : ""}`,
			onClick: () => n(t === r ? null : r),
			children: /* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "hover-list-content-wrapper",
				children: [/* @__PURE__ */ (0, Q.jsx)("div", {
					className: "hover-list-description",
					"aria-hidden": t === r,
					style: t === r ? {
						visibility: "hidden",
						opacity: 0
					} : {},
					children: e.description
				}), e.hoverContent && /* @__PURE__ */ (0, Q.jsxs)("div", {
					className: "hover-content",
					"aria-hidden": t !== r,
					style: t === r ? {
						visibility: "visible",
						opacity: 1
					} : {},
					children: [e.icon && /* @__PURE__ */ (0, Q.jsx)($, {
						name: e.icon,
						size: "sm",
						fg: "text-primary-500",
						bg: "bg-light-100"
					}), /* @__PURE__ */ (0, Q.jsx)("div", {
						className: "hover-content-text",
						children: e.hoverContent
					})]
				})]
			})
		}, r))
	});
}
// src/card/common/student-ui/ComplexCard.tsx
var Pe = ({ orientation: e, secondaryContent: t, children: n }) => {
	let r = null;
	switch (t?.kind) {
		case "IMAGE": {
			let e = t;
			return e.useAsBackground ? n : /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)(Z.ImageCap, {
				src: e.location,
				srcAlt: e.altText
			}), n] });
		}
		case "CONTENT_HIGHLIGHT":
			r = /* @__PURE__ */ (0, Q.jsx)(je, {
				...t,
				orientation: e
			});
			break;
		case "RICH_LIST":
			r = /* @__PURE__ */ (0, Q.jsx)(Me, { ...t });
			break;
		default: return n;
	}
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		className: e === "HORIZONTAL" ? "complex-card-layout complex-card-layout--horizontal" : "complex-card-layout complex-card-layout--vertical",
		children: [/* @__PURE__ */ (0, Q.jsx)("div", {
			className: "complex-card-layout-panel complex-card-layout-panel--primary",
			children: n
		}), /* @__PURE__ */ (0, Q.jsx)("div", {
			className: "complex-card-layout-panel complex-card-layout-panel--secondary",
			children: r
		})]
	});
};
function Fe({ orientation: e, data: t, position: n }) {
	let r = t.secondaryContent?.kind === "IMAGE" ? t.secondaryContent : null, i = r?.useAsBackground ?? !1, a = i ? { "--ccblk-card-background-image": `url("${r?.location}")` } : void 0;
	return /* @__PURE__ */ (0, Q.jsx)(Z, {
		orientation: e.toLowerCase(),
		className: "complex-card" + (i ? " complex-card--image-background" : ""),
		style: a,
		children: /* @__PURE__ */ (0, Q.jsx)(Pe, {
			orientation: e,
			secondaryContent: t.secondaryContent,
			children: /* @__PURE__ */ (0, Q.jsxs)(Z.Body, {
				className: t.secondaryContent?.kind === "IMAGE" && e === "HORIZONTAL" && !i ? "complex-card-body complex-card-body--horizontal-image" : "complex-card-body",
				children: [
					n && /* @__PURE__ */ (0, Q.jsx)("div", {
						className: "card-badge",
						children: /* @__PURE__ */ (0, Q.jsx)(E, {
							variant: "primary",
							"aria-label": n,
							className: "rounded-pill",
							children: n
						})
					}),
					/* @__PURE__ */ (0, Q.jsx)(Z.Header, {
						title: t.title,
						subtitle: t.subtitle
					}),
					t.description && /* @__PURE__ */ (0, Q.jsx)(Z.Section, { children: t.description }),
					t.ctaLabel && t.ctaLink && /* @__PURE__ */ (0, Q.jsx)(Z.Section, {
						className: "complex-card-cta-section",
						children: /* @__PURE__ */ (0, Q.jsx)(l, {
							variant: "accent",
							className: "complex-card-cta-button rounded-pill",
							href: t.ctaLink,
							target: "_blank",
							rel: "noopener noreferrer",
							children: /* @__PURE__ */ (0, Q.jsx)("strong", { children: t.ctaLabel })
						})
					}),
					t.secondaryContent?.kind === "HOVER_LIST" && /* @__PURE__ */ (0, Q.jsx)(Z.Section, { children: /* @__PURE__ */ (0, Q.jsx)(Ne, { ...t.secondaryContent }) })
				]
			})
		})
	});
}
// src/card/card-carousel/student-ui/StudentUI.tsx
function Ie({ initData: { cards: e, displayName: t, disableNumbering: n, backgroundColor: r } }) {
	let i = {
		sm: 12,
		md: 8,
		lg: 6,
		xl: 6
	}, a = {
		sm: 12,
		md: 10,
		lg: 10,
		xl: 11
	}, o = { sm: 12 };
	return e.length > 1 && (o = e.some((e) => e.orientation === "HORIZONTAL") ? a : i), /* @__PURE__ */ (0, Q.jsx)("div", {
		className: "card-carousel-xblock",
		style: { backgroundColor: r },
		children: /* @__PURE__ */ (0, Q.jsx)("div", {
			className: "card-carousel-container",
			children: /* @__PURE__ */ (0, Q.jsx)(Y, {
				ariaLabel: t,
				title: t ? /* @__PURE__ */ (0, Q.jsx)("h3", { children: t }) : "",
				canScrollHorizontal: !0,
				disableOpacityMasks: !0,
				columnSizes: o,
				children: e.map((t, r) => /* @__PURE__ */ (0, Q.jsx)(Fe, {
					orientation: t.orientation,
					data: t,
					position: n ? "" : `${r + 1} / ${e.length}`
				}, r))
			})
		})
	});
}
// src/card/common/student-ui/main.css?inline
var Le = ".complex-card{--pgn-color-headings-base:var(--ccblk-typography-headings-color);--ccblk-spacing-badge-spacer-x:var(--pgn-spacing-card-spacer-x);--ccblk-spacing-badge-spacer-y:var(--pgn-spacing-card-spacer-y);--ccblk-typography-headings-color:var(--pgn-color-headings-base);--ccblk-card-padding:var(--pgn-spacing-spacer-4-5,32px);--ccblk-grid-gap:var(--pgn-spacing-spacer-4-5,32px);--ccblk-card-radius-lg:var(--pgn-size-border-radius-lg,24px);height:100%}.complex-card .text-accent{color:var(--pgn-color-accent-a)}.complex-card .btn-accent{background-color:var(--pgn-color-accent-a);color:var(--pgn-color-light-100);background-image:unset}.complex-card .card-badge{margin:0 0 var(--pgn-spacing-spacer-3,16px)}.complex-card .card-badge .badge{padding:var(--ccblk-spacing-badge-spacer-y) var(--ccblk-spacing-badge-spacer-x);font-family:var(--pgn-typography-headings-font-family);font-size:var(--pgn-typography-font-size-h5-base);font-weight:var(--pgn-typography-headings-font-weight)}.complex-card.complex-card--image-background{background-image:var(--ccblk-card-background-image);color:var(--pgn-color-light-100);--ccblk-typography-headings-color:var(--pgn-color-light-100);background-position:50%;background-repeat:no-repeat;background-size:cover;position:relative;overflow:hidden}.complex-card.complex-card--image-background:before{content:\"\";z-index:0;pointer-events:none;background:#00000073;position:absolute;inset:0}.complex-card.complex-card--image-background>*{z-index:1;position:relative}.complex-card.complex-card--image-background .pgn__card-section,.complex-card.complex-card--image-background .pgn__card-header-subtitle-md{color:var(--pgn-color-light-100)}.complex-card .pgn__card{height:100%}.complex-card .pgn__card.horizontal{column-gap:var(--ccblk-grid-gap)}.complex-card .pgn__card .pgn__card-wrapper-image-cap.horizontal,.complex-card .pgn__card .complex-card-body--horizontal-image{flex:0 0 calc(50% - var(--ccblk-grid-gap) / 2);max-width:calc(50% - var(--ccblk-grid-gap) / 2)}.complex-card .pgn__card .pgn__card-wrapper-image-cap.horizontal .pgn__card-image-cap{object-fit:cover;width:100%;max-width:100%;height:100%}.complex-card .pgn__card .pgn__card-header .pgn__card-header-content{margin-top:var(--pgn-spacing-card-spacer-x)}.complex-card .pgn__card .pgn__card-header .pgn__card-header-title-md{font-family:var(--pgn-typography-headings-font-family);color:var(--ccblk-typography-headings-color);font-size:var(--pgn-typography-font-size-h4-base)}.complex-card .pgn__card .pgn__card-header .pgn__card-header-subtitle-md{color:var(--ccblk-typography-headings-color);font-size:var(--pgn-typography-font-size-base);font-weight:700;font-family:var(--pgn-typography-headings-font-family)}.complex-card .complex-card-body{padding:var(--ccblk-card-padding)}.complex-card .complex-card-layout{width:100%;height:100%}.complex-card .complex-card-layout--horizontal{column-gap:var(--ccblk-grid-gap);grid-template-columns:minmax(0,1fr) minmax(0,1fr);display:grid}.complex-card .complex-card-layout--vertical{flex-direction:column;justify-content:space-between;display:flex}.complex-card .complex-card-layout-panel{min-width:0}.complex-card .complex-card-layout-panel--primary,.complex-card .complex-card-layout-panel--secondary{flex:auto}.complex-card .complex-card-cta-section{justify-content:flex-end;display:flex}.complex-card .complex-card-cta-button{padding-inline:var(--ccblk-card-button-padding-inline,32px)}.content-highlight{height:100%;padding:var(--pgn-spacing-spacer-4-5,32px);background-color:var(--pgn-color-primary-500)}.content-highlight--horizontal{border-top-right-radius:var(--pgn-size-border-radius-lg,24px);border-bottom-right-radius:var(--pgn-size-border-radius-lg,24px)}.content-highlight--vertical{border-bottom-right-radius:var(--pgn-size-border-radius-lg,24px);border-bottom-left-radius:var(--pgn-size-border-radius-lg,24px)}.content-highlight-subtitle,.content-highlight-title,.content-highlight-description{margin-top:0}.content-highlight-title{margin-bottom:var(--pgn-spacing-spacer-3,16px);color:var(--pgn-color-light-100)}.content-highlight-description{color:var(--pgn-color-light-100);margin-bottom:0}.rich-list{padding:var(--pgn-spacing-spacer-4-5,32px)}.rich-list-content{margin-left:var(--pgn-spacing-spacer-4,24px)}.rich-list-title{margin-top:0}.rich-list-description{margin-bottom:0}.rich-list-divider{margin-block:var(--pgn-spacing-spacer-3,16px)}.horizontal .hover-list{column-gap:var(--pgn-spacing-spacer-4-5,32px)}.hover-list-description,.hover-content{padding:calc(var(--pgn-spacing-spacer-base))}.hover-list-content-wrapper{min-height:calc(( var(--pgn-spacing-spacer-base) + var(--pgn-typography-font-size-base) * var(--pgn-typography-line-height-base) ) * 2);position:relative}.hover-list-description{opacity:1;visibility:visible;z-index:0}.hover-content{background-color:var(--pgn-color-primary-500);width:100%;color:var(--pgn-color-light-100);border-radius:var(--pgn-size-border-radius-base);opacity:0;visibility:hidden;z-index:10;align-items:center;display:flex;position:absolute;top:0;left:0}.hover-list-item:has(.hover-content){cursor:pointer}:is(.hover-list-item:has(.hover-content):hover,.hover-list-item:has(.hover-content).is-active){margin-left:calc(var(--pgn-spacing-spacer-base) * -2.5);list-style:none}.hover-list-item:has(.hover-content):hover .hover-list-description{opacity:0;visibility:hidden}.hover-list-item:has(.hover-content):hover .hover-content{opacity:1;visibility:visible}.hover-content-icon-wrapper{color:var(--pgn-color-light-100);margin-right:var(--pgn-spacing-spacer-base)}.hover-content-text{margin-left:var(--pgn-spacing-spacer-2,8px)}.material-icons-outlined{text-transform:none;letter-spacing:normal;word-wrap:normal;white-space:nowrap;-webkit-font-smoothing:antialiased;text-rendering:optimizelegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:\"liga\";direction:ltr;font-family:Material Icons Outlined;font-size:24px;font-style:normal;font-weight:400;line-height:1;display:inline-block}.card-carousel-xblock *,.card-carousel-xblock :before,.card-carousel-xblock :after{box-sizing:border-box}.card-carousel-container{max-width:1280px;padding:var(--pgn-spacing-spacer-4-5,32px);margin:0 auto}.card-carousel-container .pgn__card-carousel-title{margin-bottom:var(--pgn-spacing-spacer-4-5,32px)}.card-grid-xblock{--card-grid-gap:var(--pgn-spacing-spacer-4-5,32px)}.card-grid-xblock *,.card-grid-xblock :before,.card-grid-xblock :after{box-sizing:border-box}.card-grid-container{max-width:1280px;padding:var(--pgn-spacing-spacer-4-5,32px);margin:0 auto}.card-grid-description-row,.card-grid-footer-row,.card-grid-cards-row{margin-inline:calc(var(--card-grid-gap) / -2)}.card-grid-description-row>[class*=col],.card-grid-footer-row>[class*=col],.card-grid-card-column{padding-inline:calc(var(--card-grid-gap) / 2)}.card-grid-description-row{margin-bottom:var(--pgn-spacing-spacer-4-5,32px)}.card-grid-cards-row{row-gap:var(--card-grid-gap)}.card-grid-card-column{display:flex}.card-grid-footer-row{margin-top:var(--pgn-spacing-spacer-4-5,32px)}.card-grid-description,.card-grid-footer-description{line-height:var(--pgn-typography-line-height-base,1.5)}.card-grid-description>:last-child,.card-grid-footer-description>:last-child{margin-bottom:0}", Re = (e, t, n) => {
	o({
		runtime: t,
		element: e,
		config: n.config,
		styles: Le
	})(/* @__PURE__ */ (0, Q.jsx)(Ie, {
		runtime: t,
		initData: n.data
	}));
};
export { Re as renderBlock };
