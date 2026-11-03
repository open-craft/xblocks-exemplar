import { F as e, N as t, a as n, b as r, d as i, f as a, g as o, i as s, m as c, n as l, p as u, r as d, s as f, t as p, u as m } from "./Stack-CUJQJksK.js";
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Badge.js
var h = /* @__PURE__ */ e(c()), g = /* @__PURE__ */ e(t()), _ = [
	"bsPrefix",
	"variant",
	"pill",
	"className",
	"as"
], v = { pill: !1 }, y = /* @__PURE__ */ g.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.variant, o = e.pill, s = e.className, c = e.as, l = c === void 0 ? "span" : c, d = a(e, _), f = i(n, "badge");
	return /* @__PURE__ */ g.createElement(l, u({ ref: t }, d, { className: (0, h.default)(s, f, o && f + "-pill", r && f + "-" + r) }));
});
y.displayName = "Badge", y.defaultProps = v;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Row.js
var b = [
	"bsPrefix",
	"className",
	"noGutters",
	"as"
], x = [
	"xl",
	"lg",
	"md",
	"sm",
	"xs"
], S = { noGutters: !1 }, C = /* @__PURE__ */ g.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.className, o = e.noGutters, s = e.as, c = s === void 0 ? "div" : s, l = a(e, b), d = i(n, "row"), f = d + "-cols", p = [];
	return x.forEach(function(e) {
		var t = l[e];
		delete l[e];
		var n = typeof t == "object" && t ? t.cols : t, r = e === "xs" ? "" : "-" + e;
		n != null && p.push("" + f + r + "-" + n);
	}), /* @__PURE__ */ g.createElement(c, u({ ref: t }, l, { className: h.default.apply(void 0, [
		r,
		d,
		o && "no-gutters"
	].concat(p)) }));
});
C.displayName = "Row", C.defaultProps = S;
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Badge/index.js
var w = /* @__PURE__ */ g.forwardRef(({ as: e = "span", variant: t = "primary", pill: n = !1, bsPrefix: r = "badge", ...i }, a) => /* @__PURE__ */ g.createElement(y, {
	as: e,
	variant: t,
	pill: n,
	bsPrefix: r,
	...i,
	ref: a
})), T = /* @__PURE__ */ e(m()), E = /* @__PURE__ */ g.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ g.createElement("div", {
	className: (0, h.default)("pgn__card-body", e),
	ref: r,
	...n
}, t)), D = "card", O = [
	"primary",
	"secondary",
	"success",
	"danger",
	"warning",
	"info",
	"dark",
	"light"
], k = ["white", "muted"], A = /* @__PURE__ */ g.forwardRef(({ prefix: e, className: t, bgColor: n, textColor: r, borderColor: i, hasBody: a = !1, children: o, as: s = "div", ...c }, l) => {
	let u = (0, h.default)(t, e ? `${e}-${D}` : D, n && `bg-${n}`, r && `text-${r}`, i && `border-${i}`);
	return /* @__PURE__ */ g.createElement(s, {
		ref: l,
		...c,
		className: u
	}, a ? /* @__PURE__ */ g.createElement(E, null, o) : o);
});
A.propTypes = {
	prefix: T.default.string,
	bgColor: T.default.oneOf(O),
	textColor: T.default.oneOf([...O, ...k]),
	borderColor: T.default.oneOf(O),
	hasBody: T.default.bool,
	as: T.default.elementType,
	className: T.default.string,
	children: T.default.node
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Card/CardContext.js
var j = /* @__PURE__ */ (0, g.createContext)({
	orientation: "vertical",
	isLoading: !1,
	variant: "light"
});
function M({ orientation: e = "vertical", children: t, isLoading: n = !1, variant: r = "light" }) {
	return /* @__PURE__ */ g.createElement(j.Provider, { value: {
		orientation: e,
		isLoading: n,
		variant: r
	} }, t);
}
//#endregion
//#region node_modules/.pnpm/react-loading-skeleton@3.5.0_react@18.3.1/node_modules/react-loading-skeleton/dist/index.js
var N = g.createContext({}), P = !0;
function F({ baseColor: e, highlightColor: t, width: n, height: r, borderRadius: i, circle: a, direction: o, duration: s, enableAnimation: c = P, customHighlightBackground: l }) {
	let u = {};
	return o === "rtl" && (u["--animation-direction"] = "reverse"), typeof s == "number" && (u["--animation-duration"] = `${s}s`), c || (u["--pseudo-element-display"] = "none"), (typeof n == "string" || typeof n == "number") && (u.width = n), (typeof r == "string" || typeof r == "number") && (u.height = r), (typeof i == "string" || typeof i == "number") && (u.borderRadius = i), a && (u.borderRadius = "50%"), e !== void 0 && (u["--base-color"] = e), t !== void 0 && (u["--highlight-color"] = t), typeof l == "string" && (u["--custom-highlight-background"] = l), u;
}
function I({ count: e = 1, wrapper: t, className: n, containerClassName: r, containerTestId: i, circle: a = !1, style: o, ...s }) {
	let c = g.useContext(N), l = { ...s };
	for (let [e, t] of Object.entries(s)) t === void 0 && delete l[e];
	let u = {
		...c,
		...l,
		circle: a
	}, d = {
		...o,
		...F(u)
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
		let r = g.createElement("span", {
			className: f,
			style: n,
			key: t
		}, "‌");
		p ? m.push(r) : m.push(g.createElement(g.Fragment, { key: t }, r, g.createElement("br", null)));
	}
	return g.createElement("span", {
		className: r,
		"data-testid": i,
		"aria-live": "polite",
		"aria-busy": u.enableAnimation ?? P
	}, t ? m.map((e, n) => g.createElement(t, { key: n }, e)) : m);
}
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Card/CardHeader.js
var L = 20, R = /* @__PURE__ */ g.forwardRef(({ actions: e, className: t, size: n, subtitle: r, title: i, skeletonHeight: a, skeletonWidth: o }, s) => {
	let { isLoading: c } = (0, g.useContext)(j), l = (0, g.useCallback)((e) => {
		if (/* @__PURE__ */ g.isValidElement(e)) {
			let { children: t } = e.props, r = {
				size: n,
				children: Array.isArray(t) ? t.map(l) : l(t)
			};
			return /* @__PURE__ */ g.cloneElement(e, r);
		}
		return e;
	}, [n]);
	return c ? /* @__PURE__ */ g.createElement("div", { className: (0, h.default)("pgn__card-header", t) }, /* @__PURE__ */ g.createElement(I, {
		containerClassName: "pgn__card-header-loader",
		height: a,
		width: o
	})) : /* @__PURE__ */ g.createElement("div", {
		className: (0, h.default)("pgn__card-header", t),
		ref: s
	}, /* @__PURE__ */ g.createElement("div", { className: "pgn__card-header-content" }, i && /* @__PURE__ */ g.createElement("div", { className: `pgn__card-header-title-${n}` }, i), r && /* @__PURE__ */ g.createElement("div", { className: `pgn__card-header-subtitle-${n}` }, r)), e && /* @__PURE__ */ g.createElement("div", { className: "pgn__card-header-actions" }, n === "md" ? e : l(e)));
});
R.propTypes = {
	actions: T.default.node,
	className: T.default.string,
	title: T.default.node,
	size: T.default.oneOf(["sm", "md"]),
	subtitle: T.default.node,
	skeletonHeight: T.default.number,
	skeletonWidth: T.default.number
}, R.defaultProps = {
	actions: null,
	className: null,
	size: "md",
	title: null,
	subtitle: null,
	skeletonHeight: L,
	skeletonWidth: null
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Card/CardDivider.js
var z = /* @__PURE__ */ (0, g.forwardRef)(({ className: e, ...t }, n) => /* @__PURE__ */ g.createElement("div", {
	className: (0, h.default)("pgn__card-divider", e),
	ref: n,
	...t
})), B = 100, V = /* @__PURE__ */ g.forwardRef(({ className: e, children: t, title: n, actions: r, muted: i, skeletonHeight: a, skeletonWidth: o }, s) => {
	let { isLoading: c } = (0, g.useContext)(j);
	return c ? /* @__PURE__ */ g.createElement("div", { className: (0, h.default)("pgn__card-section", e, { "is-muted": i }) }, /* @__PURE__ */ g.createElement(I, {
		containerClassName: "pgn__card-section-loader",
		height: a,
		width: o
	})) : /* @__PURE__ */ g.createElement("div", {
		className: (0, h.default)("pgn__card-section", e, { "is-muted": i }),
		ref: s
	}, n && /* @__PURE__ */ g.createElement("div", { className: "pgn__card-section-title" }, n), t, r && /* @__PURE__ */ g.createElement("div", { className: "pgn__card-section-actions" }, r));
});
V.propTypes = {
	className: T.default.string,
	children: T.default.node,
	title: T.default.node,
	actions: T.default.node,
	muted: T.default.bool,
	skeletonHeight: T.default.number,
	skeletonWidth: T.default.number
}, V.defaultProps = {
	children: null,
	className: void 0,
	title: void 0,
	actions: void 0,
	muted: !1,
	skeletonHeight: B,
	skeletonWidth: void 0
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Card/CardFooter.js
var H = 18, U = /* @__PURE__ */ g.forwardRef(({ children: e, className: t, isStacked: n, textElement: r, skeletonHeight: i, skeletonWidth: a, orientation: o }, s) => {
	let { orientation: c, isLoading: l } = (0, g.useContext)(j), u = o || c, d = `pgn__card-footer ${u}${n ? "-stacked" : ""}`, f = `pgn__card-footer-text ${u}${n ? "-stacked" : ""}`;
	return l ? /* @__PURE__ */ g.createElement("div", { className: (0, h.default)(t, d) }, /* @__PURE__ */ g.createElement(I, {
		containerClassName: "pgn__card-footer-loader",
		height: i,
		width: a
	})) : /* @__PURE__ */ g.createElement("div", {
		className: (0, h.default)(t, d),
		ref: s
	}, r && /* @__PURE__ */ g.createElement("div", { className: f }, r), e);
});
U.propTypes = {
	children: T.default.node,
	className: T.default.string,
	textElement: T.default.node,
	isStacked: T.default.bool,
	orientation: T.default.oneOf(["horizontal", "vertical"]),
	skeletonHeight: T.default.number,
	skeletonWidth: T.default.number
}, U.defaultProps = {
	children: null,
	className: void 0,
	textElement: void 0,
	isStacked: !1,
	orientation: void 0,
	skeletonHeight: H,
	skeletonWidth: void 0
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Card/CardFallbackDefaultImage.js
var W = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXwAAACMCAYAAAB/AhJnAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAH6SURBVHgB7dRBEYBADACxwuDf5j0QUXywiYhc7zk7APzd3gNAgvABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIp4BaNpp2Q/3/wfPkGyXOQAAAABJRU5ErkJggg==", G = 140, K = 41, q = /* @__PURE__ */ g.forwardRef(({ src: e, fallbackSrc: t, srcAlt: n, logoSrc: r, fallbackLogoSrc: i, logoAlt: a, skeletonHeight: o, skeletonWidth: s, logoSkeleton: c, logoSkeletonHeight: l, logoSkeletonWidth: u, className: d, imageLoadingType: f, skeletonDuringImageLoad: p }, m) => {
	let { orientation: _, isLoading: v } = (0, g.useContext)(j), [y, b] = (0, g.useState)(!1), [x, S] = (0, g.useState)(!1), C = `pgn__card-wrapper-image-cap ${_}`, w = () => /* @__PURE__ */ g.createElement(I, {
		containerClassName: "pgn__card-image-cap-loader",
		height: _ === "horizontal" ? "100%" : o,
		width: s
	}), T = () => /* @__PURE__ */ g.createElement(I, {
		containerClassName: "pgn__card-logo-cap",
		height: l,
		width: u
	});
	if (v) return /* @__PURE__ */ g.createElement("div", {
		className: (0, h.default)(C, d),
		"data-testid": "image-loader-wrapper"
	}, w(), c && T());
	let E = (e, t, n) => {
		let { currentTarget: r } = e;
		if (!t || r.src.endsWith(t)) {
			n === "imageCap" ? r.src = W : S(!1);
			return;
		}
		r.src = t;
	};
	return /* @__PURE__ */ g.createElement("div", {
		className: (0, h.default)(d, C),
		ref: m
	}, !!e && /* @__PURE__ */ g.createElement(g.Fragment, null, p && !y && w(), /* @__PURE__ */ g.createElement("img", {
		className: (0, h.default)("pgn__card-image-cap", { show: y }),
		src: e,
		onError: (e) => E(e, t, "imageCap"),
		onLoad: () => b(!0),
		alt: n,
		loading: f
	})), !!r && /* @__PURE__ */ g.createElement(g.Fragment, null, p && !x && T(), /* @__PURE__ */ g.createElement("img", {
		className: (0, h.default)("pgn__card-logo-cap", { show: x }),
		src: r,
		onError: (e) => E(e, i, "logoCap"),
		onLoad: () => S(!0),
		alt: a,
		loading: f
	})));
});
q.propTypes = {
	className: T.default.string,
	src: T.default.string,
	fallbackSrc: T.default.string,
	srcAlt: T.default.string,
	logoSrc: T.default.string,
	fallbackLogoSrc: T.default.string,
	logoAlt: T.default.string,
	skeletonHeight: T.default.number,
	skeletonWidth: T.default.number,
	logoSkeleton: T.default.bool,
	logoSkeletonHeight: T.default.number,
	logoSkeletonWidth: T.default.number,
	imageLoadingType: T.default.oneOf(["eager", "lazy"]),
	skeletonDuringImageLoad: T.default.bool
}, q.defaultProps = {
	src: void 0,
	fallbackSrc: W,
	logoSrc: void 0,
	fallbackLogoSrc: void 0,
	className: void 0,
	srcAlt: void 0,
	logoAlt: void 0,
	skeletonHeight: G,
	logoSkeleton: !1,
	logoSkeletonHeight: K,
	skeletonWidth: void 0,
	logoSkeletonWidth: void 0,
	imageLoadingType: "eager",
	skeletonDuringImageLoad: !1
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Card/CardStatus.js
var J = /* @__PURE__ */ g.forwardRef(({ className: e, children: t, variant: n, icon: r, title: i, actions: a, ...o }, s) => {
	let { isLoading: c } = (0, g.useContext)(j);
	return c ? /* @__PURE__ */ g.createElement("div", {
		className: (0, h.default)("pgn__card-status", e),
		"data-testid": "card-status-skeleton",
		ref: s
	}, /* @__PURE__ */ g.createElement(I, null)) : /* @__PURE__ */ g.createElement("div", {
		className: (0, h.default)("pgn__card-status", `pgn__card-status__${n}`, e),
		ref: s,
		...o
	}, /* @__PURE__ */ g.createElement("div", { className: "pgn__card-status__content" }, r && /* @__PURE__ */ g.createElement(d, {
		className: "pgn__card-status__content-icon",
		src: r
	}), /* @__PURE__ */ g.createElement("div", { className: "pgn__card-status__message-content" }, i && /* @__PURE__ */ g.createElement("div", { className: "pgn__card-status__heading" }, i), t)), !!a && /* @__PURE__ */ g.createElement("div", { className: "pgn__card-status__actions" }, a));
});
J.propTypes = {
	children: T.default.node.isRequired,
	className: T.default.string,
	icon: T.default.func,
	variant: T.default.oneOf([
		"primary",
		"success",
		"danger",
		"warning"
	]),
	title: T.default.oneOfType([T.default.element, T.default.string]),
	actions: T.default.node
}, J.defaultProps = {
	className: void 0,
	icon: void 0,
	variant: "warning",
	title: void 0,
	actions: void 0
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Card/index.js
var Y = [
	"light",
	"dark",
	"muted"
], X = /* @__PURE__ */ g.forwardRef(({ orientation: e, isLoading: t, className: n, isClickable: r, muted: i, variant: a, ...o }, s) => {
	let c = i ? "muted" : a;
	return /* @__PURE__ */ g.createElement(M, {
		orientation: e,
		isLoading: t,
		variant: c
	}, /* @__PURE__ */ g.createElement(A, {
		...o,
		className: (0, h.default)(n, "pgn__card", {
			horizontal: e === "horizontal",
			clickable: r,
			[`pgn__card-${c}`]: c
		}),
		ref: s,
		tabIndex: r ? 0 : -1
	}));
});
X.propTypes = {
	className: T.default.string,
	orientation: T.default.oneOf(["vertical", "horizontal"]),
	isClickable: T.default.bool,
	isLoading: T.default.bool,
	variant: T.default.oneOf(Y),
	muted: T.default.bool
}, X.defaultProps = {
	...A.defaultProps,
	className: void 0,
	orientation: "vertical",
	isClickable: !1,
	variant: "light",
	isLoading: !1
};
var Z = n(X, "Card", { muted: {
	deprType: s.REMOVED,
	message: "Use \"variant\" prop instead, i.e. variant=\"muted\""
} });
Z.Status = J, Z.Header = R, Z.Divider = z, Z.Section = V, Z.Footer = U, Z.ImageCap = q, Z.Context = j, Z.Body = E;
//#endregion
//#region src/card/common/student-ui/ContentHighlight.tsx
var Q = r();
function ee({ title: e, subtitle: t, description: n, orientation: r }) {
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
//#endregion
//#region src/card/common/student-ui/MaterialIcon.tsx
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
//#endregion
//#region src/card/common/student-ui/RichList.tsx
function te({ items: e }) {
	return /* @__PURE__ */ (0, Q.jsx)("div", {
		className: "rich-list",
		children: e.map((t, n) => /* @__PURE__ */ (0, Q.jsxs)("div", {
			className: "rich-list-item",
			children: [/* @__PURE__ */ (0, Q.jsxs)(p, {
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
//#endregion
//#region src/card/common/student-ui/HoverList.tsx
function ne({ items: e }) {
	let [t, n] = (0, g.useState)(null);
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
//#endregion
//#region src/card/common/student-ui/ComplexCard.tsx
var re = ({ orientation: e, secondaryContent: t, children: n }) => {
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
			r = /* @__PURE__ */ (0, Q.jsx)(ee, {
				...t,
				orientation: e
			});
			break;
		case "RICH_LIST":
			r = /* @__PURE__ */ (0, Q.jsx)(te, { ...t });
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
function ie({ orientation: e, data: t, position: n }) {
	let r = t.secondaryContent?.kind === "IMAGE" ? t.secondaryContent : null, i = r?.useAsBackground ?? !1, a = i ? { "--ccblk-card-background-image": `url("${r?.location}")` } : void 0;
	return /* @__PURE__ */ (0, Q.jsx)(Z, {
		orientation: e.toLowerCase(),
		className: "complex-card" + (i ? " complex-card--image-background" : ""),
		style: a,
		children: /* @__PURE__ */ (0, Q.jsx)(re, {
			orientation: e,
			secondaryContent: t.secondaryContent,
			children: /* @__PURE__ */ (0, Q.jsxs)(Z.Body, {
				className: t.secondaryContent?.kind === "IMAGE" && e === "HORIZONTAL" && !i ? "complex-card-body complex-card-body--horizontal-image" : "complex-card-body",
				children: [
					n && /* @__PURE__ */ (0, Q.jsx)("div", {
						className: "card-badge",
						children: /* @__PURE__ */ (0, Q.jsx)(w, {
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
					t.secondaryContent?.kind === "HOVER_LIST" && /* @__PURE__ */ (0, Q.jsx)(Z.Section, { children: /* @__PURE__ */ (0, Q.jsx)(ne, { ...t.secondaryContent }) })
				]
			})
		})
	});
}
//#endregion
//#region src/card/card-grid/student-ui/StudentUI.tsx
function ae({ initData: { cards: e, description: t, orientation: n, backgroundColor: r, footerDescription: i } }) {
	let a = {
		sm: 12,
		md: 6,
		lg: 4
	};
	n === "HORIZONTAL" && (a.lg = 6);
	let o = {};
	return e.length === 1 ? o = {
		lg: {
			span: a.lg,
			offset: a.lg
		},
		md: {
			span: 6,
			offset: 3
		}
	} : e.length == 2 && n !== "HORIZONTAL" && (o = { lg: {
		span: a.lg,
		offset: a.lg / 2
	} }), /* @__PURE__ */ (0, Q.jsx)("div", {
		className: "card-grid-xblock",
		style: { backgroundColor: r },
		children: /* @__PURE__ */ (0, Q.jsxs)("div", {
			className: "card-grid-container",
			children: [
				/* @__PURE__ */ (0, Q.jsx)(C, {
					className: "card-grid-description-row",
					children: /* @__PURE__ */ (0, Q.jsx)(f, {
						xs: 12,
						children: /* @__PURE__ */ (0, Q.jsx)("div", {
							className: "card-grid-description",
							dangerouslySetInnerHTML: { __html: t }
						})
					})
				}),
				/* @__PURE__ */ (0, Q.jsx)(C, {
					className: "card-grid-cards-row",
					children: e.map((e, t) => /* @__PURE__ */ (0, g.createElement)(f, {
						...a,
						className: "card-grid-card-column",
						...t === 0 && o,
						key: e.id ?? t
					}, /* @__PURE__ */ (0, Q.jsx)(ie, {
						orientation: n,
						data: e,
						position: ""
					})))
				}),
				/* @__PURE__ */ (0, Q.jsx)(C, {
					className: "card-grid-footer-row",
					children: /* @__PURE__ */ (0, Q.jsx)(f, {
						xs: 12,
						children: /* @__PURE__ */ (0, Q.jsx)("div", {
							className: "card-grid-footer-description",
							dangerouslySetInnerHTML: { __html: i }
						})
					})
				})
			]
		})
	});
}
//#endregion
//#region src/card/common/student-ui/main.css?inline
var oe = ".complex-card{--pgn-color-headings-base:var(--ccblk-typography-headings-color);--ccblk-spacing-badge-spacer-x:var(--pgn-spacing-card-spacer-x);--ccblk-spacing-badge-spacer-y:var(--pgn-spacing-card-spacer-y);--ccblk-typography-headings-color:var(--pgn-color-headings-base);--ccblk-card-padding:var(--pgn-spacing-spacer-4-5,32px);--ccblk-grid-gap:var(--pgn-spacing-spacer-4-5,32px);--ccblk-card-radius-lg:var(--pgn-size-border-radius-lg,24px);height:100%}.complex-card .text-accent{color:var(--pgn-color-accent-a)}.complex-card .btn-accent{background-color:var(--pgn-color-accent-a);color:var(--pgn-color-light-100);background-image:unset}.complex-card .card-badge{margin:0 0 var(--pgn-spacing-spacer-3,16px)}.complex-card .card-badge .badge{padding:var(--ccblk-spacing-badge-spacer-y) var(--ccblk-spacing-badge-spacer-x);font-family:var(--pgn-typography-headings-font-family);font-size:var(--pgn-typography-font-size-h5-base);font-weight:var(--pgn-typography-headings-font-weight)}.complex-card.complex-card--image-background{background-image:var(--ccblk-card-background-image);color:var(--pgn-color-light-100);--ccblk-typography-headings-color:var(--pgn-color-light-100);background-position:50%;background-repeat:no-repeat;background-size:cover;position:relative;overflow:hidden}.complex-card.complex-card--image-background:before{content:\"\";z-index:0;pointer-events:none;background:#00000073;position:absolute;inset:0}.complex-card.complex-card--image-background>*{z-index:1;position:relative}.complex-card.complex-card--image-background .pgn__card-section,.complex-card.complex-card--image-background .pgn__card-header-subtitle-md{color:var(--pgn-color-light-100)}.complex-card .pgn__card{height:100%}.complex-card .pgn__card.horizontal{column-gap:var(--ccblk-grid-gap)}.complex-card .pgn__card .pgn__card-wrapper-image-cap.horizontal,.complex-card .pgn__card .complex-card-body--horizontal-image{flex:0 0 calc(50% - var(--ccblk-grid-gap) / 2);max-width:calc(50% - var(--ccblk-grid-gap) / 2)}.complex-card .pgn__card .pgn__card-wrapper-image-cap.horizontal .pgn__card-image-cap{object-fit:cover;width:100%;max-width:100%;height:100%}.complex-card .pgn__card .pgn__card-header .pgn__card-header-content{margin-top:var(--pgn-spacing-card-spacer-x)}.complex-card .pgn__card .pgn__card-header .pgn__card-header-title-md{font-family:var(--pgn-typography-headings-font-family);color:var(--ccblk-typography-headings-color);font-size:var(--pgn-typography-font-size-h4-base)}.complex-card .pgn__card .pgn__card-header .pgn__card-header-subtitle-md{color:var(--ccblk-typography-headings-color);font-size:var(--pgn-typography-font-size-base);font-weight:700;font-family:var(--pgn-typography-headings-font-family)}.complex-card .complex-card-body{padding:var(--ccblk-card-padding)}.complex-card .complex-card-layout{width:100%;height:100%}.complex-card .complex-card-layout--horizontal{column-gap:var(--ccblk-grid-gap);grid-template-columns:minmax(0,1fr) minmax(0,1fr);display:grid}.complex-card .complex-card-layout--vertical{flex-direction:column;justify-content:space-between;display:flex}.complex-card .complex-card-layout-panel{min-width:0}.complex-card .complex-card-layout-panel--primary,.complex-card .complex-card-layout-panel--secondary{flex:auto}.complex-card .complex-card-cta-section{justify-content:flex-end;display:flex}.complex-card .complex-card-cta-button{padding-inline:var(--ccblk-card-button-padding-inline,32px)}.content-highlight{height:100%;padding:var(--pgn-spacing-spacer-4-5,32px);background-color:var(--pgn-color-primary-500)}.content-highlight--horizontal{border-top-right-radius:var(--pgn-size-border-radius-lg,24px);border-bottom-right-radius:var(--pgn-size-border-radius-lg,24px)}.content-highlight--vertical{border-bottom-right-radius:var(--pgn-size-border-radius-lg,24px);border-bottom-left-radius:var(--pgn-size-border-radius-lg,24px)}.content-highlight-subtitle,.content-highlight-title,.content-highlight-description{margin-top:0}.content-highlight-title{margin-bottom:var(--pgn-spacing-spacer-3,16px);color:var(--pgn-color-light-100)}.content-highlight-description{color:var(--pgn-color-light-100);margin-bottom:0}.rich-list{padding:var(--pgn-spacing-spacer-4-5,32px)}.rich-list-content{margin-left:var(--pgn-spacing-spacer-4,24px)}.rich-list-title{margin-top:0}.rich-list-description{margin-bottom:0}.rich-list-divider{margin-block:var(--pgn-spacing-spacer-3,16px)}.horizontal .hover-list{column-gap:var(--pgn-spacing-spacer-4-5,32px)}.hover-list-description,.hover-content{padding:calc(var(--pgn-spacing-spacer-base))}.hover-list-content-wrapper{min-height:calc(( var(--pgn-spacing-spacer-base) + var(--pgn-typography-font-size-base) * var(--pgn-typography-line-height-base) ) * 2);position:relative}.hover-list-description{opacity:1;visibility:visible;z-index:0}.hover-content{background-color:var(--pgn-color-primary-500);width:100%;color:var(--pgn-color-light-100);border-radius:var(--pgn-size-border-radius-base);opacity:0;visibility:hidden;z-index:10;align-items:center;display:flex;position:absolute;top:0;left:0}.hover-list-item:has(.hover-content){cursor:pointer}:is(.hover-list-item:has(.hover-content):hover,.hover-list-item:has(.hover-content).is-active){margin-left:calc(var(--pgn-spacing-spacer-base) * -2.5);list-style:none}.hover-list-item:has(.hover-content):hover .hover-list-description{opacity:0;visibility:hidden}.hover-list-item:has(.hover-content):hover .hover-content{opacity:1;visibility:visible}.hover-content-icon-wrapper{color:var(--pgn-color-light-100);margin-right:var(--pgn-spacing-spacer-base)}.hover-content-text{margin-left:var(--pgn-spacing-spacer-2,8px)}.material-icons-outlined{text-transform:none;letter-spacing:normal;word-wrap:normal;white-space:nowrap;-webkit-font-smoothing:antialiased;text-rendering:optimizelegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:\"liga\";direction:ltr;font-family:Material Icons Outlined;font-size:24px;font-style:normal;font-weight:400;line-height:1;display:inline-block}.card-carousel-xblock *,.card-carousel-xblock :before,.card-carousel-xblock :after{box-sizing:border-box}.card-carousel-container{max-width:1280px;padding:var(--pgn-spacing-spacer-4-5,32px);margin:0 auto}.card-carousel-container .pgn__card-carousel-title{margin-bottom:var(--pgn-spacing-spacer-4-5,32px)}.card-grid-xblock{--card-grid-gap:var(--pgn-spacing-spacer-4-5,32px)}.card-grid-xblock *,.card-grid-xblock :before,.card-grid-xblock :after{box-sizing:border-box}.card-grid-container{max-width:1280px;padding:var(--pgn-spacing-spacer-4-5,32px);margin:0 auto}.card-grid-description-row,.card-grid-footer-row,.card-grid-cards-row{margin-inline:calc(var(--card-grid-gap) / -2)}.card-grid-description-row>[class*=col],.card-grid-footer-row>[class*=col],.card-grid-card-column{padding-inline:calc(var(--card-grid-gap) / 2)}.card-grid-description-row{margin-bottom:var(--pgn-spacing-spacer-4-5,32px)}.card-grid-cards-row{row-gap:var(--card-grid-gap)}.card-grid-card-column{display:flex}.card-grid-footer-row{margin-top:var(--pgn-spacing-spacer-4-5,32px)}.card-grid-description,.card-grid-footer-description{line-height:var(--pgn-typography-line-height-base,1.5)}.card-grid-description>:last-child,.card-grid-footer-description>:last-child{margin-bottom:0}", se = (e, t, n) => {
	o({
		runtime: t,
		element: e,
		config: n.config,
		styles: oe
	})(/* @__PURE__ */ (0, Q.jsx)(ae, {
		runtime: t,
		initData: n.data
	}));
};
//#endregion
export { se as renderBlock };
