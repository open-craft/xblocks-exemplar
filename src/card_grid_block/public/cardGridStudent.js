import { n as e } from "./rolldown-runtime-CYdcPHCu.js";
import { M as t, a as n, c as r, d as i, f as a, h as o, l as s, n as c, r as l, t as u, u as d, y as f } from "./Stack-CocSt0mv.js";
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Badge.js
var p = /* @__PURE__ */ e(a()), m = /* @__PURE__ */ e(t()), h = [
	"bsPrefix",
	"variant",
	"pill",
	"className",
	"as"
], g = { pill: !1 }, _ = /*#__PURE__*/ m.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.variant, a = e.pill, o = e.className, c = e.as, l = c === void 0 ? "span" : c, u = d(e, h), f = s(n, "badge");
	return /*#__PURE__*/ m.createElement(l, i({ ref: t }, u, { className: (0, p.default)(o, f, a && f + "-pill", r && f + "-" + r) }));
});
_.displayName = "Badge", _.defaultProps = g;
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Row.js
var v = [
	"bsPrefix",
	"className",
	"noGutters",
	"as"
], y = [
	"xl",
	"lg",
	"md",
	"sm",
	"xs"
], b = { noGutters: !1 }, x = /*#__PURE__*/ m.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.className, a = e.noGutters, o = e.as, c = o === void 0 ? "div" : o, l = d(e, v), u = s(n, "row"), f = u + "-cols", h = [];
	return y.forEach(function(e) {
		var t = l[e];
		delete l[e];
		var n = typeof t == "object" && t ? t.cols : t, r = e === "xs" ? "" : "-" + e;
		n != null && h.push("" + f + r + "-" + n);
	}), /*#__PURE__*/ m.createElement(c, i({ ref: t }, l, { className: p.default.apply(void 0, [
		r,
		u,
		a && "no-gutters"
	].concat(h)) }));
});
x.displayName = "Row", x.defaultProps = b;
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Badge/index.js
var S = /*#__PURE__*/ m.forwardRef(({ as: e = "span", variant: t = "primary", pill: n = !1, bsPrefix: r = "badge", ...i }, a) => /*#__PURE__*/ m.createElement(_, {
	as: e,
	variant: t,
	pill: n,
	bsPrefix: r,
	...i,
	ref: a
})), C = /* @__PURE__ */ e(r()), w = /*#__PURE__*/ function(e) {
	return e.MOVED = "MOVED", e.REMOVED = "REMOVED", e.FORMAT = "FORMAT", e.MOVED_AND_FORMAT = "MOVED_AND_FORMAT", e;
}({});
function T(e, t, n) {
	class r extends m.Component {
		static displayName = `withDeprecatedProps(${t})`;
		constructor(e) {
			super(e), this.transformProps = this.transformProps.bind(this);
		}
		warn(e) {}
		transformProps(e, r) {
			if (n[r] === void 0) return e[r] = this.props[r], e;
			let { deprType: i, newName: a, expect: o, transform: s, message: c } = n[r];
			switch (i) {
				case w.MOVED:
					this.warn(`${t}: The prop '${r}' has been moved to '${a}'.`), e[a] = this.props[r];
					break;
				case w.REMOVED:
					this.warn(`${t}: The prop '${r}' has been removed. '${c}'`);
					break;
				case w.FORMAT:
					o(this.props[r]) ? e[r] = this.props[r] : (this.warn(`${t}: The prop '${r}' expects a new format. ${c}`), e[r] = s(this.props[r], this.props));
					break;
				case w.MOVED_AND_FORMAT: {
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
			return /*#__PURE__*/ m.createElement(e, { ...n }, this.props.children || t);
		}
	}
	return r;
}
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Card/CardBody.js
var E = /*#__PURE__*/ m.forwardRef(({ className: e, children: t, ...n }, r) => /*#__PURE__*/ m.createElement("div", {
	className: (0, p.default)("pgn__card-body", e),
	ref: r,
	...n
}, t)), D = "card", O = /*#__PURE__*/ m.forwardRef(({ prefix: e, className: t, bgColor: n, textColor: r, borderColor: i, hasBody: a = !1, children: o, as: s = "div", ...c }, l) => {
	let u = (0, p.default)(t, e ? `${e}-${D}` : D, n && `bg-${n}`, r && `text-${r}`, i && `border-${i}`);
	return /*#__PURE__*/ m.createElement(s, {
		ref: l,
		...c,
		className: u
	}, a ? /*#__PURE__*/ m.createElement(E, null, o) : o);
}), k = /*#__PURE__*/ (0, m.createContext)({
	orientation: "vertical",
	isLoading: !1,
	variant: "light"
});
function A({ orientation: e = "vertical", children: t, isLoading: n = !1, variant: r = "light" }) {
	return /*#__PURE__*/ m.createElement(k.Provider, { value: {
		orientation: e,
		isLoading: n,
		variant: r
	} }, t);
}
// node_modules/.pnpm/react-loading-skeleton@3.5.0_react@18.3.1/node_modules/react-loading-skeleton/dist/index.js
var j = m.createContext({}), M = !0;
function N({ baseColor: e, highlightColor: t, width: n, height: r, borderRadius: i, circle: a, direction: o, duration: s, enableAnimation: c = M, customHighlightBackground: l }) {
	let u = {};
	return o === "rtl" && (u["--animation-direction"] = "reverse"), typeof s == "number" && (u["--animation-duration"] = `${s}s`), c || (u["--pseudo-element-display"] = "none"), (typeof n == "string" || typeof n == "number") && (u.width = n), (typeof r == "string" || typeof r == "number") && (u.height = r), (typeof i == "string" || typeof i == "number") && (u.borderRadius = i), a && (u.borderRadius = "50%"), e !== void 0 && (u["--base-color"] = e), t !== void 0 && (u["--highlight-color"] = t), typeof l == "string" && (u["--custom-highlight-background"] = l), u;
}
function P({ count: e = 1, wrapper: t, className: n, containerClassName: r, containerTestId: i, circle: a = !1, style: o, ...s }) {
	let c = m.useContext(j), l = { ...s };
	for (let [e, t] of Object.entries(s)) t === void 0 && delete l[e];
	let u = {
		...c,
		...l,
		circle: a
	}, d = {
		...o,
		...N(u)
	}, f = "react-loading-skeleton";
	n && (f += ` ${n}`);
	let p = u.inline ?? !1, h = [], g = Math.ceil(e);
	for (let t = 0; t < g; t++) {
		let n = d;
		if (g > e && t === g - 1) {
			let t = n.width ?? "100%", r = e % 1, i = typeof t == "number" ? t * r : `calc(${t} * ${r})`;
			n = {
				...n,
				width: i
			};
		}
		let r = m.createElement("span", {
			className: f,
			style: n,
			key: t
		}, "‌");
		p ? h.push(r) : h.push(m.createElement(m.Fragment, { key: t }, r, m.createElement("br", null)));
	}
	return m.createElement("span", {
		className: r,
		"data-testid": i,
		"aria-live": "polite",
		"aria-busy": u.enableAnimation ?? M
	}, t ? h.map((e, n) => m.createElement(t, { key: n }, e)) : h);
}
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Card/CardHeader.js
var ee = 20, F = /*#__PURE__*/ m.forwardRef(({ actions: e, className: t, size: n, subtitle: r, title: i, skeletonHeight: a, skeletonWidth: o }, s) => {
	let { isLoading: c } = (0, m.useContext)(k), l = (0, m.useCallback)((e) => {
		if (/*#__PURE__*/ m.isValidElement(e)) {
			let { children: t } = e.props, r = {
				size: n,
				children: Array.isArray(t) ? t.map(l) : l(t)
			};
			return /*#__PURE__*/ m.cloneElement(e, r);
		}
		return e;
	}, [n]);
	return c ? /*#__PURE__*/ m.createElement("div", { className: (0, p.default)("pgn__card-header", t) }, /*#__PURE__*/ m.createElement(P, {
		containerClassName: "pgn__card-header-loader",
		height: a,
		width: o
	})) : /*#__PURE__*/ m.createElement("div", {
		className: (0, p.default)("pgn__card-header", t),
		ref: s
	}, /*#__PURE__*/ m.createElement("div", { className: "pgn__card-header-content" }, i && /*#__PURE__*/ m.createElement("div", { className: `pgn__card-header-title-${n}` }, i), r && /*#__PURE__*/ m.createElement("div", { className: `pgn__card-header-subtitle-${n}` }, r)), e && /*#__PURE__*/ m.createElement("div", { className: "pgn__card-header-actions" }, n === "md" ? e : l(e)));
});
F.propTypes = {
	actions: C.default.node,
	className: C.default.string,
	title: C.default.node,
	size: C.default.oneOf(["sm", "md"]),
	subtitle: C.default.node,
	skeletonHeight: C.default.number,
	skeletonWidth: C.default.number
}, F.defaultProps = {
	actions: null,
	className: null,
	size: "md",
	title: null,
	subtitle: null,
	skeletonHeight: ee,
	skeletonWidth: null
};
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Card/CardDivider.js
var I = /*#__PURE__*/ (0, m.forwardRef)(({ className: e, ...t }, n) => /*#__PURE__*/ m.createElement("div", {
	className: (0, p.default)("pgn__card-divider", e),
	ref: n,
	...t
})), L = 100, R = /*#__PURE__*/ m.forwardRef(({ className: e, children: t, title: n, actions: r, muted: i, skeletonHeight: a, skeletonWidth: o }, s) => {
	let { isLoading: c } = (0, m.useContext)(k);
	return c ? /*#__PURE__*/ m.createElement("div", { className: (0, p.default)("pgn__card-section", e, { "is-muted": i }) }, /*#__PURE__*/ m.createElement(P, {
		containerClassName: "pgn__card-section-loader",
		height: a,
		width: o
	})) : /*#__PURE__*/ m.createElement("div", {
		className: (0, p.default)("pgn__card-section", e, { "is-muted": i }),
		ref: s
	}, n && /*#__PURE__*/ m.createElement("div", { className: "pgn__card-section-title" }, n), t, r && /*#__PURE__*/ m.createElement("div", { className: "pgn__card-section-actions" }, r));
});
R.propTypes = {
	className: C.default.string,
	children: C.default.node,
	title: C.default.node,
	actions: C.default.node,
	muted: C.default.bool,
	skeletonHeight: C.default.number,
	skeletonWidth: C.default.number
}, R.defaultProps = {
	children: null,
	className: void 0,
	title: void 0,
	actions: void 0,
	muted: !1,
	skeletonHeight: L,
	skeletonWidth: void 0
};
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Card/CardFooter.js
var z = 18, B = /*#__PURE__*/ m.forwardRef(({ children: e, className: t, isStacked: n, textElement: r, skeletonHeight: i, skeletonWidth: a, orientation: o }, s) => {
	let { orientation: c, isLoading: l } = (0, m.useContext)(k), u = o || c, d = `pgn__card-footer ${u}${n ? "-stacked" : ""}`, f = `pgn__card-footer-text ${u}${n ? "-stacked" : ""}`;
	return l ? /*#__PURE__*/ m.createElement("div", { className: (0, p.default)(t, d) }, /*#__PURE__*/ m.createElement(P, {
		containerClassName: "pgn__card-footer-loader",
		height: i,
		width: a
	})) : /*#__PURE__*/ m.createElement("div", {
		className: (0, p.default)(t, d),
		ref: s
	}, r && /*#__PURE__*/ m.createElement("div", { className: f }, r), e);
});
B.propTypes = {
	children: C.default.node,
	className: C.default.string,
	textElement: C.default.node,
	isStacked: C.default.bool,
	orientation: C.default.oneOf(["horizontal", "vertical"]),
	skeletonHeight: C.default.number,
	skeletonWidth: C.default.number
}, B.defaultProps = {
	children: null,
	className: void 0,
	textElement: void 0,
	isStacked: !1,
	orientation: void 0,
	skeletonHeight: z,
	skeletonWidth: void 0
};
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Card/CardFallbackDefaultImage.js
var V = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXwAAACMCAYAAAB/AhJnAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAH6SURBVHgB7dRBEYBADACxwuDf5j0QUXywiYhc7zk7APzd3gNAgvABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIp4BaNpp2Q/3/wfPkGyXOQAAAABJRU5ErkJggg==", H = 140, U = 41, W = /*#__PURE__*/ m.forwardRef(({ src: e, fallbackSrc: t, srcAlt: n, logoSrc: r, fallbackLogoSrc: i, logoAlt: a, skeletonHeight: o, skeletonWidth: s, logoSkeleton: c, logoSkeletonHeight: l, logoSkeletonWidth: u, className: d, imageLoadingType: f, skeletonDuringImageLoad: h }, g) => {
	let { orientation: _, isLoading: v } = (0, m.useContext)(k), [y, b] = (0, m.useState)(!1), [x, S] = (0, m.useState)(!1), C = `pgn__card-wrapper-image-cap ${_}`, w = () => /*#__PURE__*/ m.createElement(P, {
		containerClassName: "pgn__card-image-cap-loader",
		height: _ === "horizontal" ? "100%" : o,
		width: s
	}), T = () => /*#__PURE__*/ m.createElement(P, {
		containerClassName: "pgn__card-logo-cap",
		height: l,
		width: u
	});
	if (v) return /*#__PURE__*/ m.createElement("div", {
		className: (0, p.default)(C, d),
		"data-testid": "image-loader-wrapper"
	}, w(), c && T());
	let E = (e, t, n) => {
		let { currentTarget: r } = e;
		!t || r.src.endsWith(t) ? n === "imageCap" ? r.src = V : S(!1) : r.src = t;
	};
	return /*#__PURE__*/ m.createElement("div", {
		className: (0, p.default)(d, C),
		ref: g
	}, !!e && /*#__PURE__*/ m.createElement(m.Fragment, null, h && !y && w(), /*#__PURE__*/ m.createElement("img", {
		className: (0, p.default)("pgn__card-image-cap", { show: y }),
		src: e,
		onError: (e) => E(e, t, "imageCap"),
		onLoad: () => b(!0),
		alt: n,
		loading: f
	})), !!r && /*#__PURE__*/ m.createElement(m.Fragment, null, h && !x && T(), /*#__PURE__*/ m.createElement("img", {
		className: (0, p.default)("pgn__card-logo-cap", { show: x }),
		src: r,
		onError: (e) => E(e, i, "logoCap"),
		onLoad: () => S(!0),
		alt: a,
		loading: f
	})));
});
W.propTypes = {
	className: C.default.string,
	src: C.default.string,
	fallbackSrc: C.default.string,
	srcAlt: C.default.string,
	logoSrc: C.default.string,
	fallbackLogoSrc: C.default.string,
	logoAlt: C.default.string,
	skeletonHeight: C.default.number,
	skeletonWidth: C.default.number,
	logoSkeleton: C.default.bool,
	logoSkeletonHeight: C.default.number,
	logoSkeletonWidth: C.default.number,
	imageLoadingType: C.default.oneOf(["eager", "lazy"]),
	skeletonDuringImageLoad: C.default.bool
}, W.defaultProps = {
	src: void 0,
	fallbackSrc: V,
	logoSrc: void 0,
	fallbackLogoSrc: void 0,
	className: void 0,
	srcAlt: void 0,
	logoAlt: void 0,
	skeletonHeight: H,
	logoSkeleton: !1,
	logoSkeletonHeight: U,
	skeletonWidth: void 0,
	logoSkeletonWidth: void 0,
	imageLoadingType: "eager",
	skeletonDuringImageLoad: !1
};
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Card/CardStatus.js
var G = /*#__PURE__*/ m.forwardRef(({ className: e, children: t, variant: n, icon: r, title: i, actions: a, ...o }, s) => {
	let { isLoading: c } = (0, m.useContext)(k);
	return c ? /*#__PURE__*/ m.createElement("div", {
		className: (0, p.default)("pgn__card-status", e),
		"data-testid": "card-status-skeleton",
		ref: s
	}, /*#__PURE__*/ m.createElement(P, null)) : /*#__PURE__*/ m.createElement("div", {
		className: (0, p.default)("pgn__card-status", `pgn__card-status__${n}`, e),
		ref: s,
		...o
	}, /*#__PURE__*/ m.createElement("div", { className: "pgn__card-status__content" }, r && /*#__PURE__*/ m.createElement(l, {
		className: "pgn__card-status__content-icon",
		src: r
	}), /*#__PURE__*/ m.createElement("div", { className: "pgn__card-status__message-content" }, i && /*#__PURE__*/ m.createElement("div", { className: "pgn__card-status__heading" }, i), t)), !!a && /*#__PURE__*/ m.createElement("div", { className: "pgn__card-status__actions" }, a));
});
G.propTypes = {
	children: C.default.node.isRequired,
	className: C.default.string,
	icon: C.default.func,
	variant: C.default.oneOf([
		"primary",
		"success",
		"danger",
		"warning"
	]),
	title: C.default.oneOfType([C.default.element, C.default.string]),
	actions: C.default.node
}, G.defaultProps = {
	className: void 0,
	icon: void 0,
	variant: "warning",
	title: void 0,
	actions: void 0
};
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Card/index.js
var K = [
	"light",
	"dark",
	"muted"
], q = /*#__PURE__*/ m.forwardRef(({ orientation: e, isLoading: t, className: n, isClickable: r, muted: i, variant: a, ...o }, s) => {
	let c = i ? "muted" : a;
	return /*#__PURE__*/ m.createElement(A, {
		orientation: e,
		isLoading: t,
		variant: c
	}, /*#__PURE__*/ m.createElement(O, {
		...o,
		className: (0, p.default)(n, "pgn__card", {
			horizontal: e === "horizontal",
			clickable: r,
			[`pgn__card-${c}`]: c
		}),
		ref: s,
		tabIndex: r ? 0 : -1
	}));
});
q.propTypes = {
	className: C.default.string,
	orientation: C.default.oneOf(["vertical", "horizontal"]),
	isClickable: C.default.bool,
	isLoading: C.default.bool,
	variant: C.default.oneOf(K),
	muted: C.default.bool
}, q.defaultProps = {
	...O.defaultProps,
	className: void 0,
	orientation: "vertical",
	isClickable: !1,
	variant: "light",
	isLoading: !1
};
var J = T(q, "Card", { muted: {
	deprType: w.REMOVED,
	message: "Use \"variant\" prop instead, i.e. variant=\"muted\""
} });
J.Status = G, J.Header = F, J.Divider = I, J.Section = R, J.Footer = B, J.ImageCap = W, J.Context = k, J.Body = E;
// src/card/common/student-ui/ContentHighlight.tsx
var Y = f();
function X({ title: e, subtitle: t, description: n, orientation: r }) {
	return /* @__PURE__ */ (0, Y.jsxs)("div", {
		className: `content-highlight ${r === "HORIZONTAL" ? "content-highlight--horizontal" : "content-highlight--vertical"}`,
		children: [
			/* @__PURE__ */ (0, Y.jsx)("h4", {
				className: "content-highlight-subtitle text-accent",
				children: t
			}),
			/* @__PURE__ */ (0, Y.jsx)("h3", {
				className: "content-highlight-title",
				children: e
			}),
			/* @__PURE__ */ (0, Y.jsx)("p", {
				className: "content-highlight-description",
				children: n
			})
		]
	});
}
// src/card/common/student-ui/MaterialIcon.tsx
function Z({ name: e, bg: t, fg: n, size: r }) {
	let i = `${r === "sm" ? "p-2" : "p-3"} ${t || "bg-secondary-500"} ${n || "text-light-100"} rounded-circle`, a = r === "sm" ? "2.5rem" : "3.5rem";
	return /* @__PURE__ */ (0, Y.jsx)("div", {
		className: i,
		style: {
			width: a,
			height: a
		},
		children: /* @__PURE__ */ (0, Y.jsx)("span", {
			className: "material-icons-outlined",
			children: e
		})
	});
}
// src/card/common/student-ui/RichList.tsx
function Q({ items: e }) {
	return /* @__PURE__ */ (0, Y.jsx)("div", {
		className: "rich-list",
		children: e.map((t, n) => /* @__PURE__ */ (0, Y.jsxs)("div", {
			className: "rich-list-item",
			children: [/* @__PURE__ */ (0, Y.jsxs)(u, {
				direction: "horizontal",
				className: "rich-list-row",
				children: [/* @__PURE__ */ (0, Y.jsx)(Z, { name: t.icon }), /* @__PURE__ */ (0, Y.jsxs)("div", {
					className: "rich-list-content",
					children: [/* @__PURE__ */ (0, Y.jsx)("h4", {
						className: "rich-list-title",
						children: t.title
					}), /* @__PURE__ */ (0, Y.jsx)("p", {
						className: "rich-list-description",
						children: t.description
					})]
				})]
			}), n < e.length - 1 && /* @__PURE__ */ (0, Y.jsx)("hr", { className: "rich-list-divider" })]
		}, n))
	});
}
// src/card/common/student-ui/HoverList.tsx
function te({ items: e }) {
	let [t, n] = (0, m.useState)(null);
	return /* @__PURE__ */ (0, Y.jsx)("ol", {
		className: "hover-list",
		children: e.map((e, r) => /* @__PURE__ */ (0, Y.jsx)("li", {
			className: `hover-list-item ${t === r ? "is-active" : ""}`,
			onClick: () => n(t === r ? null : r),
			children: /* @__PURE__ */ (0, Y.jsxs)("div", {
				className: "hover-list-content-wrapper",
				children: [/* @__PURE__ */ (0, Y.jsx)("div", {
					className: "hover-list-description",
					"aria-hidden": t === r,
					style: t === r ? {
						visibility: "hidden",
						opacity: 0
					} : {},
					children: e.description
				}), e.hoverContent && /* @__PURE__ */ (0, Y.jsxs)("div", {
					className: "hover-content",
					"aria-hidden": t !== r,
					style: t === r ? {
						visibility: "visible",
						opacity: 1
					} : {},
					children: [e.icon && /* @__PURE__ */ (0, Y.jsx)(Z, {
						name: e.icon,
						size: "sm",
						fg: "text-primary-500",
						bg: "bg-light-100"
					}), /* @__PURE__ */ (0, Y.jsx)("div", {
						className: "hover-content-text",
						children: e.hoverContent
					})]
				})]
			})
		}, r))
	});
}
// src/card/common/student-ui/ComplexCard.tsx
var $ = ({ orientation: e, secondaryContent: t, children: n }) => {
	let r = null;
	switch (t?.kind) {
		case "IMAGE": {
			let e = t;
			return e.useAsBackground ? n : /* @__PURE__ */ (0, Y.jsxs)(Y.Fragment, { children: [/* @__PURE__ */ (0, Y.jsx)(J.ImageCap, {
				src: e.location,
				srcAlt: e.altText
			}), n] });
		}
		case "CONTENT_HIGHLIGHT":
			r = /* @__PURE__ */ (0, Y.jsx)(X, {
				...t,
				orientation: e
			});
			break;
		case "RICH_LIST":
			r = /* @__PURE__ */ (0, Y.jsx)(Q, { ...t });
			break;
		default: return n;
	}
	return /* @__PURE__ */ (0, Y.jsxs)("div", {
		className: e === "HORIZONTAL" ? "complex-card-layout complex-card-layout--horizontal" : "complex-card-layout complex-card-layout--vertical",
		children: [/* @__PURE__ */ (0, Y.jsx)("div", {
			className: "complex-card-layout-panel complex-card-layout-panel--primary",
			children: n
		}), /* @__PURE__ */ (0, Y.jsx)("div", {
			className: "complex-card-layout-panel complex-card-layout-panel--secondary",
			children: r
		})]
	});
};
function ne({ orientation: e, data: t, position: n }) {
	let r = t.secondaryContent?.kind === "IMAGE" ? t.secondaryContent : null, i = r?.useAsBackground ?? !1, a = i ? { "--ccblk-card-background-image": `url("${r?.location}")` } : void 0;
	return /* @__PURE__ */ (0, Y.jsx)(J, {
		orientation: e.toLowerCase(),
		className: "complex-card" + (i ? " complex-card--image-background" : ""),
		style: a,
		children: /* @__PURE__ */ (0, Y.jsx)($, {
			orientation: e,
			secondaryContent: t.secondaryContent,
			children: /* @__PURE__ */ (0, Y.jsxs)(J.Body, {
				className: t.secondaryContent?.kind === "IMAGE" && e === "HORIZONTAL" && !i ? "complex-card-body complex-card-body--horizontal-image" : "complex-card-body",
				children: [
					n && /* @__PURE__ */ (0, Y.jsx)("div", {
						className: "card-badge",
						children: /* @__PURE__ */ (0, Y.jsx)(S, {
							variant: "primary",
							"aria-label": n,
							className: "rounded-pill",
							children: n
						})
					}),
					/* @__PURE__ */ (0, Y.jsx)(J.Header, {
						title: t.title,
						subtitle: t.subtitle
					}),
					t.description && /* @__PURE__ */ (0, Y.jsx)(J.Section, { children: t.description }),
					t.ctaLabel && t.ctaLink && /* @__PURE__ */ (0, Y.jsx)(J.Section, {
						className: "complex-card-cta-section",
						children: /* @__PURE__ */ (0, Y.jsx)(c, {
							variant: "accent",
							className: "complex-card-cta-button rounded-pill",
							href: t.ctaLink,
							target: "_blank",
							rel: "noopener noreferrer",
							children: /* @__PURE__ */ (0, Y.jsx)("strong", { children: t.ctaLabel })
						})
					}),
					t.secondaryContent?.kind === "HOVER_LIST" && /* @__PURE__ */ (0, Y.jsx)(J.Section, { children: /* @__PURE__ */ (0, Y.jsx)(te, { ...t.secondaryContent }) })
				]
			})
		})
	});
}
// src/card/card-grid/student-ui/StudentUI.tsx
function re({ initData: { cards: e, description: t, orientation: r, backgroundColor: i, footerDescription: a } }) {
	let o = {
		sm: 12,
		md: 6,
		lg: 4
	};
	r === "HORIZONTAL" && (o.lg = 6);
	let s = {};
	return e.length === 1 ? s = {
		lg: {
			span: o.lg,
			offset: o.lg
		},
		md: {
			span: 6,
			offset: 3
		}
	} : e.length == 2 && r !== "HORIZONTAL" && (s = { lg: {
		span: o.lg,
		offset: o.lg / 2
	} }), /* @__PURE__ */ (0, Y.jsx)("div", {
		className: "card-grid-xblock",
		style: { backgroundColor: i },
		children: /* @__PURE__ */ (0, Y.jsxs)("div", {
			className: "card-grid-container",
			children: [
				/* @__PURE__ */ (0, Y.jsx)(x, {
					className: "card-grid-description-row",
					children: /* @__PURE__ */ (0, Y.jsx)(n, {
						xs: 12,
						children: /* @__PURE__ */ (0, Y.jsx)("div", {
							className: "card-grid-description",
							dangerouslySetInnerHTML: { __html: t }
						})
					})
				}),
				/* @__PURE__ */ (0, Y.jsx)(x, {
					className: "card-grid-cards-row",
					children: e.map((e, t) => /* @__PURE__ */ (0, m.createElement)(n, {
						...o,
						className: "card-grid-card-column",
						...t === 0 && s,
						key: e.id ?? t
					}, /* @__PURE__ */ (0, Y.jsx)(ne, {
						orientation: r,
						data: e,
						position: ""
					})))
				}),
				/* @__PURE__ */ (0, Y.jsx)(x, {
					className: "card-grid-footer-row",
					children: /* @__PURE__ */ (0, Y.jsx)(n, {
						xs: 12,
						children: /* @__PURE__ */ (0, Y.jsx)("div", {
							className: "card-grid-footer-description",
							dangerouslySetInnerHTML: { __html: a }
						})
					})
				})
			]
		})
	});
}
// src/card/common/student-ui/main.css?inline
var ie = ".complex-card{--pgn-color-headings-base:var(--ccblk-typography-headings-color);--ccblk-spacing-badge-spacer-x:var(--pgn-spacing-card-spacer-x);--ccblk-spacing-badge-spacer-y:var(--pgn-spacing-card-spacer-y);--ccblk-typography-headings-color:var(--pgn-color-headings-base);--ccblk-card-padding:var(--pgn-spacing-spacer-4-5,32px);--ccblk-grid-gap:var(--pgn-spacing-spacer-4-5,32px);--ccblk-card-radius-lg:var(--pgn-size-border-radius-lg,24px);height:100%}.complex-card .text-accent{color:var(--pgn-color-accent-a)}.complex-card .btn-accent{background-color:var(--pgn-color-accent-a);color:var(--pgn-color-light-100);background-image:unset}.complex-card .card-badge{margin:0 0 var(--pgn-spacing-spacer-3,16px)}.complex-card .card-badge .badge{padding:var(--ccblk-spacing-badge-spacer-y) var(--ccblk-spacing-badge-spacer-x);font-family:var(--pgn-typography-headings-font-family);font-size:var(--pgn-typography-font-size-h5-base);font-weight:var(--pgn-typography-headings-font-weight)}.complex-card.complex-card--image-background{background-image:var(--ccblk-card-background-image);color:var(--pgn-color-light-100);--ccblk-typography-headings-color:var(--pgn-color-light-100);background-position:50%;background-repeat:no-repeat;background-size:cover;position:relative;overflow:hidden}.complex-card.complex-card--image-background:before{content:\"\";z-index:0;pointer-events:none;background:#00000073;position:absolute;inset:0}.complex-card.complex-card--image-background>*{z-index:1;position:relative}.complex-card.complex-card--image-background .pgn__card-section,.complex-card.complex-card--image-background .pgn__card-header-subtitle-md{color:var(--pgn-color-light-100)}.complex-card .pgn__card{height:100%}.complex-card .pgn__card.horizontal{column-gap:var(--ccblk-grid-gap)}.complex-card .pgn__card .pgn__card-wrapper-image-cap.horizontal,.complex-card .pgn__card .complex-card-body--horizontal-image{flex:0 0 calc(50% - var(--ccblk-grid-gap) / 2);max-width:calc(50% - var(--ccblk-grid-gap) / 2)}.complex-card .pgn__card .pgn__card-wrapper-image-cap.horizontal .pgn__card-image-cap{object-fit:cover;width:100%;max-width:100%;height:100%}.complex-card .pgn__card .pgn__card-header .pgn__card-header-content{margin-top:var(--pgn-spacing-card-spacer-x)}.complex-card .pgn__card .pgn__card-header .pgn__card-header-title-md{font-family:var(--pgn-typography-headings-font-family);color:var(--ccblk-typography-headings-color);font-size:var(--pgn-typography-font-size-h4-base)}.complex-card .pgn__card .pgn__card-header .pgn__card-header-subtitle-md{color:var(--ccblk-typography-headings-color);font-size:var(--pgn-typography-font-size-base);font-weight:700;font-family:var(--pgn-typography-headings-font-family)}.complex-card .complex-card-body{padding:var(--ccblk-card-padding)}.complex-card .complex-card-layout{width:100%;height:100%}.complex-card .complex-card-layout--horizontal{column-gap:var(--ccblk-grid-gap);grid-template-columns:minmax(0,1fr) minmax(0,1fr);display:grid}.complex-card .complex-card-layout--vertical{flex-direction:column;justify-content:space-between;display:flex}.complex-card .complex-card-layout-panel{min-width:0}.complex-card .complex-card-layout-panel--primary,.complex-card .complex-card-layout-panel--secondary{flex:auto}.complex-card .complex-card-cta-section{justify-content:flex-end;display:flex}.complex-card .complex-card-cta-button{padding-inline:var(--ccblk-card-button-padding-inline,32px)}.content-highlight{height:100%;padding:var(--pgn-spacing-spacer-4-5,32px);background-color:var(--pgn-color-primary-500)}.content-highlight--horizontal{border-top-right-radius:var(--pgn-size-border-radius-lg,24px);border-bottom-right-radius:var(--pgn-size-border-radius-lg,24px)}.content-highlight--vertical{border-bottom-right-radius:var(--pgn-size-border-radius-lg,24px);border-bottom-left-radius:var(--pgn-size-border-radius-lg,24px)}.content-highlight-subtitle,.content-highlight-title,.content-highlight-description{margin-top:0}.content-highlight-title{margin-bottom:var(--pgn-spacing-spacer-3,16px);color:var(--pgn-color-light-100)}.content-highlight-description{color:var(--pgn-color-light-100);margin-bottom:0}.rich-list{padding:var(--pgn-spacing-spacer-4-5,32px)}.rich-list-content{margin-left:var(--pgn-spacing-spacer-4,24px)}.rich-list-title{margin-top:0}.rich-list-description{margin-bottom:0}.rich-list-divider{margin-block:var(--pgn-spacing-spacer-3,16px)}.horizontal .hover-list{column-gap:var(--pgn-spacing-spacer-4-5,32px)}.hover-list-description,.hover-content{padding:calc(var(--pgn-spacing-spacer-base))}.hover-list-content-wrapper{min-height:calc(( var(--pgn-spacing-spacer-base) + var(--pgn-typography-font-size-base) * var(--pgn-typography-line-height-base) ) * 2);position:relative}.hover-list-description{opacity:1;visibility:visible;z-index:0}.hover-content{background-color:var(--pgn-color-primary-500);width:100%;color:var(--pgn-color-light-100);border-radius:var(--pgn-size-border-radius-base);opacity:0;visibility:hidden;z-index:10;align-items:center;display:flex;position:absolute;top:0;left:0}.hover-list-item:has(.hover-content){cursor:pointer}:is(.hover-list-item:has(.hover-content):hover,.hover-list-item:has(.hover-content).is-active){margin-left:calc(var(--pgn-spacing-spacer-base) * -2.5);list-style:none}.hover-list-item:has(.hover-content):hover .hover-list-description{opacity:0;visibility:hidden}.hover-list-item:has(.hover-content):hover .hover-content{opacity:1;visibility:visible}.hover-content-icon-wrapper{color:var(--pgn-color-light-100);margin-right:var(--pgn-spacing-spacer-base)}.hover-content-text{margin-left:var(--pgn-spacing-spacer-2,8px)}.material-icons-outlined{text-transform:none;letter-spacing:normal;word-wrap:normal;white-space:nowrap;-webkit-font-smoothing:antialiased;text-rendering:optimizelegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:\"liga\";direction:ltr;font-family:Material Icons Outlined;font-size:24px;font-style:normal;font-weight:400;line-height:1;display:inline-block}.card-carousel-xblock *,.card-carousel-xblock :before,.card-carousel-xblock :after{box-sizing:border-box}.card-carousel-container{max-width:1280px;padding:var(--pgn-spacing-spacer-4-5,32px);margin:0 auto}.card-carousel-container .pgn__card-carousel-title{margin-bottom:var(--pgn-spacing-spacer-4-5,32px)}.card-carousel-container .pgn__overflow-scroll-overflow-container{scrollbar-width:none}.card-grid-xblock{--card-grid-gap:var(--pgn-spacing-spacer-4-5,32px)}.card-grid-xblock *,.card-grid-xblock :before,.card-grid-xblock :after{box-sizing:border-box}.card-grid-container{max-width:1280px;padding:var(--pgn-spacing-spacer-4-5,32px);margin:0 auto}.card-grid-description-row,.card-grid-footer-row,.card-grid-cards-row{margin-inline:calc(var(--card-grid-gap) / -2)}.card-grid-description-row>[class*=col],.card-grid-footer-row>[class*=col],.card-grid-card-column{padding-inline:calc(var(--card-grid-gap) / 2)}.card-grid-description-row{margin-bottom:var(--pgn-spacing-spacer-4-5,32px)}.card-grid-cards-row{row-gap:var(--card-grid-gap)}.card-grid-card-column{display:flex}.card-grid-footer-row{margin-top:var(--pgn-spacing-spacer-4-5,32px)}.card-grid-description,.card-grid-footer-description{line-height:var(--pgn-typography-line-height-base,1.5)}.card-grid-description>:last-child,.card-grid-footer-description>:last-child{margin-bottom:0}", ae = (e, t, n) => {
	o({
		runtime: t,
		element: e,
		config: n.config,
		styles: ie
	})(/* @__PURE__ */ (0, Y.jsx)(re, {
		runtime: t,
		initData: n.data
	}));
};
export { ae as renderBlock };
