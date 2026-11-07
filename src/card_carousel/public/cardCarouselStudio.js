import { $ as e, A as t, B as n, C as r, D as i, E as a, F as o, G as s, H as c, I as l, J as u, K as d, L as f, M as p, N as m, O as h, P as g, Q as _, R as v, S as y, T as b, U as x, V as S, W as C, X as w, Y as T, Z as E, _ as D, a as O, at as k, b as A, ct as j, d as ee, et as M, f as N, g as te, h as P, i as ne, it as re, j as ie, k as ae, l as oe, lt as se, m as ce, n as le, nt as ue, o as de, ot as fe, p as pe, q as me, r as he, rt as ge, st as _e, t as ve, tt as ye, u as be, v as xe, w as Se, x as Ce, y as we, z as Te } from "./Stack-CeJT3khC.js";
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/ActionRow/index.js
var F = u(), Ee = /* @__PURE__ */ se(_()), De = /* @__PURE__ */ se(fe()), I = /* @__PURE__ */ se(_e()), L = /* @__PURE__ */ se(x());
function Oe({ as: e = "div", isStacked: t = !1, children: n, ...r }) {
	return /* @__PURE__ */ I.createElement(e, {
		...r,
		className: (0, L.default)(r.className, {
			"pgn__action-row": !t,
			"pgn__action-row-stacked": t
		})
	}, n);
}
function ke() {
	return /* @__PURE__ */ I.createElement("span", { className: "pgn__action-row-spacer" });
}
Oe.Spacer = ke;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/SelectableContext.js
var Ae = /* @__PURE__ */ I.createContext(null), je = function(e, t) {
	return t === void 0 && (t = null), e == null ? t || null : String(e);
}, R = /* @__PURE__ */ se(o()), Me = [
	"label",
	"onClick",
	"className"
], Ne = {
	label: R.default.string.isRequired,
	onClick: R.default.func
}, Pe = { label: "Close" }, Fe = /* @__PURE__ */ I.forwardRef(function(e, t) {
	var n = e.label, r = e.onClick, i = e.className, a = S(e, Me);
	return /* @__PURE__ */ I.createElement("button", c({
		ref: t,
		type: "button",
		className: (0, L.default)("close", i),
		onClick: r
	}, a), /* @__PURE__ */ I.createElement("span", { "aria-hidden": "true" }, "×"), /* @__PURE__ */ I.createElement("span", { className: "sr-only" }, n));
});
Fe.displayName = "CloseButton", Fe.propTypes = Ne, Fe.defaultProps = Pe;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/divWithClassName.js
var Ie = (function(e) {
	return /* @__PURE__ */ I.forwardRef(function(t, n) {
		return /* @__PURE__ */ I.createElement("div", c({}, t, {
			ref: n,
			className: (0, L.default)(t.className, e)
		}));
	});
}), Le = /-(.)/g;
function Re(e) {
	return e.replace(Le, function(e, t) {
		return t.toUpperCase();
	});
}
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/createWithBsPrefix.js
var ze = [
	"className",
	"bsPrefix",
	"as"
], Be = function(e) {
	return e[0].toUpperCase() + Re(e).slice(1);
};
function Ve(e, t) {
	var n = t === void 0 ? {} : t, r = n.displayName, i = r === void 0 ? Be(e) : r, a = n.Component, o = n.defaultProps, s = /* @__PURE__ */ I.forwardRef(function(t, n) {
		var r = t.className, i = t.bsPrefix, o = t.as, s = o === void 0 ? a || "div" : o, u = S(t, ze), d = l(i, e);
		return /* @__PURE__ */ I.createElement(s, c({
			ref: n,
			className: (0, L.default)(r, d)
		}, u));
	});
	return s.defaultProps = o, s.displayName = i, s;
}
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Alert.js
var He = [
	"bsPrefix",
	"show",
	"closeLabel",
	"className",
	"children",
	"variant",
	"onClose",
	"dismissible",
	"transition"
], Ue = Ie("h4");
Ue.displayName = "DivStyledAsH4";
var We = Ve("alert-heading", { Component: Ue }), Ge = Ve("alert-link", { Component: ie }), Ke = {
	show: !0,
	transition: p,
	closeLabel: "Close alert"
}, qe = /* @__PURE__ */ I.forwardRef(function(e, t) {
	var n = v(e, { show: "onClose" }), r = n.bsPrefix, i = n.show, a = n.closeLabel, o = n.className, s = n.children, u = n.variant, d = n.onClose, f = n.dismissible, h = n.transition, g = S(n, He), _ = l(r, "alert"), y = m(function(e) {
		d && d(!1, e);
	}), b = h === !0 ? p : h, x = /* @__PURE__ */ I.createElement("div", c({ role: "alert" }, b ? void 0 : g, {
		ref: t,
		className: (0, L.default)(o, _, u && _ + "-" + u, f && _ + "-dismissible")
	}), f && /* @__PURE__ */ I.createElement(Fe, {
		onClick: y,
		label: a
	}), s);
	return b ? /* @__PURE__ */ I.createElement(b, c({ unmountOnExit: !0 }, g, {
		ref: void 0,
		in: i
	}), x) : i ? x : null;
});
qe.displayName = "Alert", qe.defaultProps = Ke, qe.Link = Ge, qe.Heading = We;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/CardContext.js
var Je = /* @__PURE__ */ I.createContext(null);
Je.displayName = "CardContext";
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/ElementChildren.js
function Ye(e, t) {
	var n = 0;
	return I.Children.map(e, function(e) {
		return /* @__PURE__ */ I.isValidElement(e) ? t(e, n++) : e;
	});
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/matches.js
var Xe;
function Ze(e, t) {
	if (!Xe) {
		var n = document.body, r = n.matches || n.matchesSelector || n.webkitMatchesSelector || n.mozMatchesSelector || n.msMatchesSelector;
		Xe = function(e, t) {
			return r.call(e, t);
		};
	}
	return Xe(e, t);
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/querySelectorAll.js
var Qe = Function.prototype.bind.call(Function.prototype.call, [].slice);
function $e(e, t) {
	return Qe(e.querySelectorAll(t));
}
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/usePrevious.js
function et(e) {
	let t = (0, I.useRef)(null);
	return (0, I.useEffect)(() => {
		t.current = e;
	}), t.current;
}
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useForceUpdate.js
function tt() {
	let [, e] = (0, I.useReducer)((e) => !e, !1);
	return e;
}
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useEventListener.js
function nt(e, t, n, r = !1) {
	let i = m(n);
	(0, I.useEffect)(() => {
		let n = typeof e == "function" ? e() : e;
		return n.addEventListener(t, i, r), () => n.removeEventListener(t, i, r);
	}, [e]);
}
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useGlobalListener.js
function rt(e, t, n = !1) {
	return nt((0, I.useCallback)(() => document, []), e, t, n);
}
//#endregion
//#region node_modules/.pnpm/react-overlays@5.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-overlays/esm/DropdownContext.js
var it = /* @__PURE__ */ I.createContext(null), at = function() {};
function ot(e) {
	e === void 0 && (e = {});
	var t = (0, I.useContext)(it), n = h(), r = n[0], i = n[1], a = (0, I.useRef)(!1), o = e, s = o.flip, l = o.offset, u = o.rootCloseEvent, d = o.fixed, f = d === void 0 ? !1 : d, p = o.popperConfig, m = p === void 0 ? {} : p, g = o.usePopper, _ = g === void 0 ? !!t : g, v = t?.show == null ? !!e.show : t.show, y = t?.alignEnd == null ? e.alignEnd : t.alignEnd;
	v && !a.current && (a.current = !0);
	var b = function(e) {
		t?.toggle(!1, e);
	}, x = t || {}, S = x.drop, C = x.setMenu, w = x.menuElement, T = x.toggleElement, E = y ? "bottom-end" : "bottom-start";
	S === "up" ? E = y ? "top-end" : "top-start" : S === "right" ? E = y ? "right-end" : "right-start" : S === "left" && (E = y ? "left-end" : "left-start");
	var D = te(T, w, pe({
		placement: E,
		enabled: !!(_ && v),
		enableEvents: v,
		offset: l,
		flip: s,
		fixed: f,
		arrowElement: r,
		popperConfig: m
	})), O = c({
		ref: C || at,
		"aria-labelledby": T?.id
	}, D.attributes.popper, { style: D.styles.popper }), k = {
		show: v,
		alignEnd: y,
		hasShown: a.current,
		toggle: t?.toggle,
		popper: _ ? D : null,
		arrowProps: _ ? c({ ref: i }, D.attributes.arrow, { style: D.styles.arrow }) : {}
	};
	return ce(w, b, {
		clickTrigger: u,
		disabled: !v
	}), [O, k];
}
var st = {
	children: R.default.func.isRequired,
	show: R.default.bool,
	alignEnd: R.default.bool,
	flip: R.default.bool,
	usePopper: R.default.oneOf([!0, !1]),
	popperConfig: R.default.object,
	rootCloseEvent: R.default.string
}, ct = { usePopper: !0 };
function lt(e) {
	var t = e.children, n = ot(S(e, ["children"])), r = n[0], i = n[1];
	return /* @__PURE__ */ I.createElement(I.Fragment, null, i.hasShown ? t(r, i) : null);
}
lt.displayName = "ReactOverlaysDropdownMenu", lt.propTypes = st, lt.defaultProps = ct;
//#endregion
//#region node_modules/.pnpm/react-overlays@5.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-overlays/esm/DropdownToggle.js
var ut = function() {};
function dt() {
	var e = (0, I.useContext)(it) || {}, t = e.show, n = t === void 0 ? !1 : t, r = e.toggle, i = r === void 0 ? ut : r, a = e.setToggle, o = (0, I.useCallback)(function(e) {
		i(!n, e);
	}, [n, i]);
	return [{
		ref: a || ut,
		onClick: o,
		"aria-haspopup": !0,
		"aria-expanded": !!n
	}, {
		show: n,
		toggle: i
	}];
}
var ft = { children: R.default.func.isRequired };
function pt(e) {
	var t = e.children, n = dt(), r = n[0], i = n[1];
	return /* @__PURE__ */ I.createElement(I.Fragment, null, t(r, i));
}
pt.displayName = "ReactOverlaysDropdownToggle", pt.propTypes = ft;
//#endregion
//#region node_modules/.pnpm/react-overlays@5.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-overlays/esm/Dropdown.js
var mt = {
	children: R.default.node,
	drop: R.default.oneOf([
		"up",
		"left",
		"right",
		"down"
	]),
	focusFirstItemOnShow: R.default.oneOf([
		!1,
		!0,
		"keyboard"
	]),
	itemSelector: R.default.string,
	alignEnd: R.default.bool,
	show: R.default.bool,
	defaultShow: R.default.bool,
	onToggle: R.default.func
};
function ht() {
	var e = tt(), t = (0, I.useRef)(null);
	return [t, (0, I.useCallback)(function(n) {
		t.current = n, e();
	}, [e])];
}
function gt(e) {
	var t = e.drop, n = e.alignEnd, r = e.defaultShow, i = e.show, a = e.onToggle, o = e.itemSelector, s = o === void 0 ? "* > *" : o, c = e.focusFirstItemOnShow, l = e.children, u = Te(i, r, a), d = u[0], f = u[1], p = ht(), h = p[0], _ = p[1], v = h.current, y = ht(), b = y[0], x = y[1], S = b.current, C = et(d), w = (0, I.useRef)(null), T = (0, I.useRef)(!1), E = (0, I.useCallback)(function(e, t) {
		f(e, t);
	}, [f]), D = (0, I.useMemo)(function() {
		return {
			toggle: E,
			drop: t,
			show: d,
			alignEnd: n,
			menuElement: v,
			toggleElement: S,
			setMenu: _,
			setToggle: x
		};
	}, [
		E,
		t,
		d,
		n,
		v,
		S,
		_,
		x
	]);
	v && C && !d && (T.current = v.contains(document.activeElement));
	var O = m(function() {
		S && S.focus && S.focus();
	}), k = m(function() {
		var e = w.current, t = c;
		if (t ??= h.current && Ze(h.current, "[role=menu]") ? "keyboard" : !1, !(t === !1 || t === "keyboard" && !/^key.+$/.test(e))) {
			var n = $e(h.current, s)[0];
			n && n.focus && n.focus();
		}
	});
	(0, I.useEffect)(function() {
		d ? k() : T.current && (T.current = !1, O());
	}, [
		d,
		T,
		O,
		k
	]), (0, I.useEffect)(function() {
		w.current = null;
	});
	var A = function(e, t) {
		if (!h.current) return null;
		var n = $e(h.current, s), r = n.indexOf(e) + t;
		return r = Math.max(0, Math.min(r, n.length)), n[r];
	};
	return rt("keydown", function(e) {
		var t = e.key, n = e.target, r = h.current?.contains(n), i = b.current?.contains(n);
		if (!(/input|textarea/i.test(n.tagName) && (t === " " || t !== "Escape" && r)) && !(!r && !i) && !(!h.current && t === "Tab")) switch (w.current = e.type, t) {
			case "ArrowUp":
				var a = A(n, -1);
				a && a.focus && a.focus(), e.preventDefault();
				return;
			case "ArrowDown":
				if (e.preventDefault(), !d) f(!0, e);
				else {
					var o = A(n, 1);
					o && o.focus && o.focus();
				}
				return;
			case "Tab":
				g(document, "keyup", function(t) {
					var n;
					(t.key === "Tab" && !t.target || !((n = h.current) != null && n.contains(t.target))) && f(!1, e);
				}, { once: !0 });
				break;
			case "Escape":
				e.preventDefault(), e.stopPropagation(), f(!1, e);
				break;
			default:
		}
	}), /* @__PURE__ */ I.createElement(it.Provider, { value: D }, l);
}
gt.displayName = "ReactOverlaysDropdown", gt.propTypes = mt, gt.Menu = lt, gt.Toggle = pt;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/NavContext.js
var _t = /* @__PURE__ */ I.createContext(null);
_t.displayName = "NavContext";
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/DropdownItem.js
var vt = [
	"bsPrefix",
	"className",
	"children",
	"eventKey",
	"disabled",
	"href",
	"onClick",
	"onSelect",
	"active",
	"as"
], yt = {
	as: ie,
	disabled: !1
}, bt = /* @__PURE__ */ I.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.className, i = e.children, a = e.eventKey, o = e.disabled, s = e.href, u = e.onClick, d = e.onSelect, f = e.active, p = e.as, h = S(e, vt), g = l(n, "dropdown-item"), _ = (0, I.useContext)(Ae), v = ((0, I.useContext)(_t) || {}).activeKey, y = je(a, s), b = f == null && y != null ? je(v) === y : f, x = m(function(e) {
		o || (u && u(e), _ && _(y, e), d && d(y, e));
	});
	return /* @__PURE__ */ I.createElement(p, c({}, h, {
		ref: t,
		href: s,
		disabled: o,
		className: (0, L.default)(r, g, b && "active", o && "disabled"),
		onClick: x
	}), i);
});
bt.displayName = "DropdownItem", bt.defaultProps = yt;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/NavbarContext.js
var xt = /* @__PURE__ */ I.createContext(null);
xt.displayName = "NavbarContext", n();
function St(e, t) {
	return e;
}
P();
var Ct = [
	"bsPrefix",
	"className",
	"align",
	"alignRight",
	"rootCloseEvent",
	"flip",
	"show",
	"renderOnMount",
	"as",
	"popperConfig"
], wt = R.default.oneOf(["left", "right"]);
R.default.oneOfType([
	wt,
	R.default.shape({ sm: wt }),
	R.default.shape({ md: wt }),
	R.default.shape({ lg: wt }),
	R.default.shape({ xl: wt })
]);
var Tt = {
	align: "left",
	alignRight: !1,
	flip: !0
}, Et = /* @__PURE__ */ I.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.className, i = e.align, a = e.alignRight, o = e.rootCloseEvent, s = e.flip, u = e.show, d = e.renderOnMount, f = e.as, p = f === void 0 ? "div" : f, m = e.popperConfig, h = S(e, Ct), g = (0, I.useContext)(xt), _ = l(n, "dropdown-menu"), v = ee(), y = v[0], b = v[1], x = [];
	if (i) if (typeof i == "object") {
		var C = Object.keys(i);
		if (C.length) {
			var w = C[0], T = i[w];
			a = T === "left", x.push(_ + "-" + w + "-" + T);
		}
	} else i === "right" && (a = !0);
	var E = ot({
		flip: s,
		rootCloseEvent: o,
		show: u,
		alignEnd: a,
		usePopper: !g && x.length === 0,
		popperConfig: c({}, m, { modifiers: b.concat(m?.modifiers || []) })
	}), D = E[0], O = E[1], k = O.hasShown, A = O.popper, j = O.show, M = O.alignEnd, te = O.toggle;
	if (D.ref = N(y, N(St(t, "DropdownMenu"), D.ref)), !k && !d) return null;
	typeof p != "string" && (D.show = j, D.close = function() {
		return te?.(!1);
	}, D.alignRight = M);
	var P = h.style;
	return A != null && A.placement && (P = c({}, h.style, D.style), h["x-placement"] = A.placement), /* @__PURE__ */ I.createElement(p, c({}, h, D, {
		style: P,
		className: L.default.apply(void 0, [
			r,
			_,
			j && "show",
			M && _ + "-right"
		].concat(x))
	}));
});
Et.displayName = "DropdownMenu", Et.defaultProps = Tt, be();
var Dt = [
	"bsPrefix",
	"split",
	"className",
	"childBsPrefix",
	"as"
], Ot = /* @__PURE__ */ I.forwardRef(function(e, n) {
	var r = e.bsPrefix, i = e.split, a = e.className, o = e.childBsPrefix, s = e.as, u = s === void 0 ? t : s, d = S(e, Dt), f = l(r, "dropdown-toggle");
	o !== void 0 && (d.bsPrefix = o);
	var p = dt()[0];
	return p.ref = N(p.ref, St(n, "DropdownToggle")), /* @__PURE__ */ I.createElement(u, c({ className: (0, L.default)(a, f, i && f + "-split") }, p, d));
});
Ot.displayName = "DropdownToggle";
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Dropdown.js
var kt = [
	"bsPrefix",
	"drop",
	"show",
	"className",
	"alignRight",
	"onSelect",
	"onToggle",
	"focusFirstItemOnShow",
	"as",
	"navbar"
], At = Ve("dropdown-header", { defaultProps: { role: "heading" } }), jt = Ve("dropdown-divider", { defaultProps: { role: "separator" } }), Mt = Ve("dropdown-item-text", { Component: "span" }), Nt = { navbar: !1 }, Pt = /* @__PURE__ */ I.forwardRef(function(e, t) {
	var n = v(e, { show: "onToggle" }), r = n.bsPrefix, i = n.drop, a = n.show, o = n.className, s = n.alignRight, u = n.onSelect, d = n.onToggle, f = n.focusFirstItemOnShow, p = n.as, h = p === void 0 ? "div" : p;
	n.navbar;
	var g = S(n, kt), _ = (0, I.useContext)(Ae), y = l(r, "dropdown"), b = m(function(e, t, n) {
		n === void 0 && (n = t.type), t.currentTarget === document && (n !== "keydown" || t.key === "Escape") && (n = "rootClose"), d && d(e, t, { source: n });
	}), x = m(function(e, t) {
		_ && _(e, t), u && u(e, t), b(!1, t, "select");
	});
	return /* @__PURE__ */ I.createElement(Ae.Provider, { value: x }, /* @__PURE__ */ I.createElement(gt, {
		drop: i,
		show: a,
		alignEnd: s,
		onToggle: b,
		focusFirstItemOnShow: f,
		itemSelector: "." + y + "-item:not(.disabled):not(:disabled)"
	}, /* @__PURE__ */ I.createElement(h, c({}, g, {
		ref: t,
		className: (0, L.default)(o, a && "show", (!i || i === "down") && y, i === "up" && "dropup", i === "right" && "dropright", i === "left" && "dropleft")
	}))));
});
Pt.displayName = "Dropdown", Pt.defaultProps = Nt, Pt.Divider = jt, Pt.Header = At, Pt.Item = bt, Pt.ItemText = Mt, Pt.Menu = Et, Pt.Toggle = Ot;
//#endregion
//#region node_modules/.pnpm/prop-types-extra@1.1.1_react@18.3.1/node_modules/prop-types-extra/lib/utils/createChainableTypeChecker.js
var Ft = /* @__PURE__ */ j(((e, t) => {
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
}));
(/* @__PURE__ */ j(((e, t) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = i;
	var n = r(Ft());
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
})))();
var It = [
	"as",
	"className",
	"type",
	"tooltip"
], Lt = {
	type: R.default.string,
	tooltip: R.default.bool,
	as: R.default.elementType
}, Rt = /* @__PURE__ */ I.forwardRef(function(e, t) {
	var n = e.as, r = n === void 0 ? "div" : n, i = e.className, a = e.type, o = a === void 0 ? "valid" : a, s = e.tooltip, l = s === void 0 ? !1 : s, u = S(e, It);
	return /* @__PURE__ */ I.createElement(r, c({}, u, {
		ref: t,
		className: (0, L.default)(i, o + "-" + (l ? "tooltip" : "feedback"))
	}));
});
Rt.displayName = "Feedback", Rt.propTypes = Lt;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormContext.js
var zt = /* @__PURE__ */ I.createContext({ controlId: void 0 }), Bt = [
	"id",
	"bsPrefix",
	"bsCustomPrefix",
	"className",
	"type",
	"isValid",
	"isInvalid",
	"isStatic",
	"as"
], Vt = /* @__PURE__ */ I.forwardRef(function(e, t) {
	var n = e.id, r = e.bsPrefix, i = e.bsCustomPrefix, a = e.className, o = e.type, s = o === void 0 ? "checkbox" : o, u = e.isValid, d = u === void 0 ? !1 : u, f = e.isInvalid, p = f === void 0 ? !1 : f, m = e.isStatic, h = e.as, g = h === void 0 ? "input" : h, _ = S(e, Bt), v = (0, I.useContext)(zt), y = v.controlId, b = v.custom ? [i, "custom-control-input"] : [r, "form-check-input"], x = b[0], C = b[1];
	return r = l(x, C), /* @__PURE__ */ I.createElement(g, c({}, _, {
		ref: t,
		type: s,
		id: n || y,
		className: (0, L.default)(a, r, d && "is-valid", p && "is-invalid", m && "position-static")
	}));
});
Vt.displayName = "FormCheckInput";
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormCheckLabel.js
var Ht = [
	"bsPrefix",
	"bsCustomPrefix",
	"className",
	"htmlFor"
], Ut = /* @__PURE__ */ I.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.bsCustomPrefix, i = e.className, a = e.htmlFor, o = S(e, Ht), s = (0, I.useContext)(zt), u = s.controlId, d = s.custom ? [r, "custom-control-label"] : [n, "form-check-label"], f = d[0], p = d[1];
	return n = l(f, p), /* @__PURE__ */ I.createElement("label", c({}, o, {
		ref: t,
		htmlFor: a || u,
		className: (0, L.default)(i, n)
	}));
});
Ut.displayName = "FormCheckLabel";
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormCheck.js
var Wt = [
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
], Gt = /* @__PURE__ */ I.forwardRef(function(e, t) {
	var n = e.id, r = e.bsPrefix, i = e.bsCustomPrefix, a = e.inline, o = a === void 0 ? !1 : a, s = e.disabled, u = s === void 0 ? !1 : s, d = e.isValid, f = d === void 0 ? !1 : d, p = e.isInvalid, m = p === void 0 ? !1 : p, h = e.feedbackTooltip, g = h === void 0 ? !1 : h, _ = e.feedback, v = e.className, y = e.style, b = e.title, x = b === void 0 ? "" : b, C = e.type, w = C === void 0 ? "checkbox" : C, T = e.label, E = e.children, D = e.custom, O = e.as, k = O === void 0 ? "input" : O, A = S(e, Wt), j = w === "switch" ? !0 : D, ee = j ? [i, "custom-control"] : [r, "form-check"], M = ee[0], N = ee[1];
	r = l(M, N);
	var te = (0, I.useContext)(zt).controlId, P = (0, I.useMemo)(function() {
		return {
			controlId: n || te,
			custom: j
		};
	}, [
		te,
		j,
		n
	]), ne = j || T != null && T !== !1 && !E, re = /* @__PURE__ */ I.createElement(Vt, c({}, A, {
		type: w === "switch" ? "checkbox" : w,
		ref: t,
		isValid: f,
		isInvalid: m,
		isStatic: !ne,
		disabled: u,
		as: k
	}));
	return /* @__PURE__ */ I.createElement(zt.Provider, { value: P }, /* @__PURE__ */ I.createElement("div", {
		style: y,
		className: (0, L.default)(v, r, j && "custom-" + w, o && r + "-inline")
	}, E || /* @__PURE__ */ I.createElement(I.Fragment, null, re, ne && /* @__PURE__ */ I.createElement(Ut, { title: x }, T), (f || m) && /* @__PURE__ */ I.createElement(Rt, {
		type: f ? "valid" : "invalid",
		tooltip: g
	}, _))));
});
Gt.displayName = "FormCheck", Gt.Input = Vt, Gt.Label = Ut;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormFileInput.js
var Kt = [
	"id",
	"bsPrefix",
	"bsCustomPrefix",
	"className",
	"isValid",
	"isInvalid",
	"lang",
	"as"
], qt = /* @__PURE__ */ I.forwardRef(function(e, t) {
	var n = e.id, r = e.bsPrefix, i = e.bsCustomPrefix, a = e.className, o = e.isValid, s = e.isInvalid, u = e.lang, d = e.as, f = d === void 0 ? "input" : d, p = S(e, Kt), m = (0, I.useContext)(zt), h = m.controlId, g = m.custom, _ = "file", v = g ? [i, "custom-file-input"] : [r, "form-control-file"], y = v[0], b = v[1];
	return r = l(y, b), /* @__PURE__ */ I.createElement(f, c({}, p, {
		ref: t,
		id: n || h,
		type: _,
		lang: u,
		className: (0, L.default)(a, r, o && "is-valid", s && "is-invalid")
	}));
});
qt.displayName = "FormFileInput";
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormFileLabel.js
var Jt = [
	"bsPrefix",
	"bsCustomPrefix",
	"className",
	"htmlFor"
], Yt = /* @__PURE__ */ I.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.bsCustomPrefix, i = e.className, a = e.htmlFor, o = S(e, Jt), s = (0, I.useContext)(zt), u = s.controlId, d = s.custom ? [r, "custom-file-label"] : [n, "form-file-label"], f = d[0], p = d[1];
	return n = l(f, p), /* @__PURE__ */ I.createElement("label", c({}, o, {
		ref: t,
		htmlFor: a || u,
		className: (0, L.default)(i, n),
		"data-browse": o["data-browse"]
	}));
});
Yt.displayName = "FormFileLabel";
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormFile.js
var Xt = [
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
], Zt = /* @__PURE__ */ I.forwardRef(function(e, t) {
	var n = e.id, r = e.bsPrefix, i = e.bsCustomPrefix, a = e.disabled, o = a === void 0 ? !1 : a, s = e.isValid, u = s === void 0 ? !1 : s, d = e.isInvalid, f = d === void 0 ? !1 : d, p = e.feedbackTooltip, m = p === void 0 ? !1 : p, h = e.feedback, g = e.className, _ = e.style, v = e.label, y = e.children, b = e.custom, x = e.lang, C = e["data-browse"], w = e.as, T = w === void 0 ? "div" : w, E = e.inputAs, D = E === void 0 ? "input" : E, O = S(e, Xt), k = b ? [i, "custom"] : [r, "form-file"], A = k[0], j = k[1];
	r = l(A, j);
	var ee = "file", M = (0, I.useContext)(zt).controlId, N = (0, I.useMemo)(function() {
		return {
			controlId: n || M,
			custom: b
		};
	}, [
		M,
		b,
		n
	]), te = v != null && v !== !1 && !y, P = /* @__PURE__ */ I.createElement(qt, c({}, O, {
		ref: t,
		isValid: u,
		isInvalid: f,
		disabled: o,
		as: D,
		lang: x
	}));
	return /* @__PURE__ */ I.createElement(zt.Provider, { value: N }, /* @__PURE__ */ I.createElement(T, {
		style: _,
		className: (0, L.default)(g, r, b && "custom-" + ee)
	}, y || /* @__PURE__ */ I.createElement(I.Fragment, null, b ? /* @__PURE__ */ I.createElement(I.Fragment, null, P, te && /* @__PURE__ */ I.createElement(Yt, { "data-browse": C }, v)) : /* @__PURE__ */ I.createElement(I.Fragment, null, te && /* @__PURE__ */ I.createElement(Yt, null, v), P), (u || f) && /* @__PURE__ */ I.createElement(Rt, {
		type: u ? "valid" : "invalid",
		tooltip: m
	}, h))));
});
Zt.displayName = "FormFile", Zt.Input = qt, Zt.Label = Yt;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormControl.js
var Qt = [
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
], $t = /* @__PURE__ */ I.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.bsCustomPrefix, i = e.type, a = e.size, o = e.htmlSize, s = e.id, u = e.className, d = e.isValid, f = d === void 0 ? !1 : d, p = e.isInvalid, m = p === void 0 ? !1 : p, h = e.plaintext, g = e.readOnly, _ = e.custom, v = e.as, y = v === void 0 ? "input" : v, b = S(e, Qt), x = (0, I.useContext)(zt).controlId, C = _ ? [r, "custom"] : [n, "form-control"], w = C[0], T = C[1];
	n = l(w, T);
	var E;
	if (h) {
		var D;
		E = (D = {}, D[n + "-plaintext"] = !0, D);
	} else if (i === "file") {
		var O;
		E = (O = {}, O[n + "-file"] = !0, O);
	} else if (i === "range") {
		var k;
		E = (k = {}, k[n + "-range"] = !0, k);
	} else if (y === "select" && _) {
		var A;
		E = (A = {}, A[n + "-select"] = !0, A[n + "-select-" + a] = a, A);
	} else {
		var j;
		E = (j = {}, j[n] = !0, j[n + "-" + a] = a, j);
	}
	return /* @__PURE__ */ I.createElement(y, c({}, b, {
		type: i,
		size: o,
		ref: t,
		readOnly: g,
		id: s || x,
		className: (0, L.default)(u, E, f && "is-valid", m && "is-invalid")
	}));
});
$t.displayName = "FormControl";
var en = Object.assign($t, { Feedback: Rt }), tn = [
	"bsPrefix",
	"className",
	"children",
	"controlId",
	"as"
], nn = /* @__PURE__ */ I.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.className, i = e.children, a = e.controlId, o = e.as, s = o === void 0 ? "div" : o, u = S(e, tn);
	n = l(n, "form-group");
	var d = (0, I.useMemo)(function() {
		return { controlId: a };
	}, [a]);
	return /* @__PURE__ */ I.createElement(zt.Provider, { value: d }, /* @__PURE__ */ I.createElement(s, c({}, u, {
		ref: t,
		className: (0, L.default)(r, n)
	}), i));
});
nn.displayName = "FormGroup";
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormLabel.js
var rn = [
	"as",
	"bsPrefix",
	"column",
	"srOnly",
	"className",
	"htmlFor"
], an = {
	column: !1,
	srOnly: !1
}, on = /* @__PURE__ */ I.forwardRef(function(e, t) {
	var n = e.as, r = n === void 0 ? "label" : n, i = e.bsPrefix, a = e.column, o = e.srOnly, s = e.className, u = e.htmlFor, d = S(e, rn), f = (0, I.useContext)(zt).controlId;
	i = l(i, "form-label");
	var p = "col-form-label";
	typeof a == "string" && (p = p + " " + p + "-" + a);
	var m = (0, L.default)(s, i, o && "sr-only", a && p);
	return u ||= f, a ? /* @__PURE__ */ I.createElement(ae, c({
		ref: t,
		as: "label",
		className: m,
		htmlFor: u
	}, d)) : /* @__PURE__ */ I.createElement(r, c({
		ref: t,
		className: m,
		htmlFor: u
	}, d));
});
on.displayName = "FormLabel", on.defaultProps = an;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormText.js
var sn = [
	"bsPrefix",
	"className",
	"as",
	"muted"
], cn = /* @__PURE__ */ I.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.className, i = e.as, a = i === void 0 ? "small" : i, o = e.muted, s = S(e, sn);
	return n = l(n, "form-text"), /* @__PURE__ */ I.createElement(a, c({}, s, {
		ref: t,
		className: (0, L.default)(r, n, o && "text-muted")
	}));
});
cn.displayName = "FormText";
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Switch.js
var ln = /* @__PURE__ */ I.forwardRef(function(e, t) {
	return /* @__PURE__ */ I.createElement(Gt, c({}, e, {
		ref: t,
		type: "switch"
	}));
});
ln.displayName = "Switch", ln.Input = Gt.Input, ln.Label = Gt.Label;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Form.js
var un = [
	"bsPrefix",
	"inline",
	"className",
	"validated",
	"as"
], dn = Ve("form-row"), fn = { inline: !1 }, pn = /* @__PURE__ */ I.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.inline, i = e.className, a = e.validated, o = e.as, s = o === void 0 ? "form" : o, u = S(e, un);
	return n = l(n, "form"), /* @__PURE__ */ I.createElement(s, c({}, u, {
		ref: t,
		className: (0, L.default)(i, a && "was-validated", r && n + "-inline")
	}));
});
pn.displayName = "Form", pn.defaultProps = fn, pn.Row = dn, pn.Group = nn, pn.Control = en, pn.Check = Gt, pn.File = Zt, pn.Switch = ln, pn.Label = on, pn.Text = cn;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/InputGroup.js
var mn = [
	"bsPrefix",
	"size",
	"hasValidation",
	"className",
	"as"
], hn = Ve("input-group-append"), gn = Ve("input-group-prepend"), _n = Ve("input-group-text", { Component: "span" }), vn = function(e) {
	return /* @__PURE__ */ I.createElement(_n, null, /* @__PURE__ */ I.createElement("input", c({ type: "checkbox" }, e)));
}, yn = function(e) {
	return /* @__PURE__ */ I.createElement(_n, null, /* @__PURE__ */ I.createElement("input", c({ type: "radio" }, e)));
}, bn = /* @__PURE__ */ I.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.size, i = e.hasValidation, a = e.className, o = e.as, s = o === void 0 ? "div" : o, u = S(e, mn);
	return n = l(n, "input-group"), /* @__PURE__ */ I.createElement(s, c({ ref: t }, u, { className: (0, L.default)(a, n, r && n + "-" + r, i && "has-validation") }));
});
bn.displayName = "InputGroup", bn.Text = _n, bn.Radio = yn, bn.Checkbox = vn, bn.Append = hn, bn.Prepend = gn;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/TabContext.js
var xn = /* @__PURE__ */ I.createContext(null), Sn = [
	"as",
	"onSelect",
	"activeKey",
	"role",
	"onKeyDown"
], Cn = function() {}, wn = /* @__PURE__ */ I.forwardRef(function(e, t) {
	var n = e.as, r = n === void 0 ? "ul" : n, i = e.onSelect, a = e.activeKey, o = e.role, s = e.onKeyDown, l = S(e, Sn), u = tt(), d = (0, I.useRef)(!1), f = (0, I.useContext)(Ae), p = (0, I.useContext)(xn), m, h;
	p && (o ||= "tablist", a = p.activeKey, m = p.getControlledId, h = p.getControllerId);
	var g = (0, I.useRef)(null), _ = function(e) {
		var t = g.current;
		if (!t) return null;
		var n = $e(t, "[data-rb-event-key]:not(.disabled)"), r = t.querySelector(".active");
		if (!r) return null;
		var i = n.indexOf(r);
		if (i === -1) return null;
		var a = i + e;
		return a >= n.length && (a = 0), a < 0 && (a = n.length - 1), n[a];
	}, v = function(e, t) {
		e != null && (i && i(e, t), f && f(e, t));
	}, y = function(e) {
		s && s(e);
		var t;
		switch (e.key) {
			case "ArrowLeft":
			case "ArrowUp":
				t = _(-1);
				break;
			case "ArrowRight":
			case "ArrowDown":
				t = _(1);
				break;
			default: return;
		}
		t && (e.preventDefault(), v(t.dataset.rbEventKey, e), d.current = !0, u());
	};
	(0, I.useEffect)(function() {
		if (g.current && d.current) {
			var e = g.current.querySelector("[data-rb-event-key].active");
			e && e.focus();
		}
		d.current = !1;
	});
	var b = N(t, g);
	return /* @__PURE__ */ I.createElement(Ae.Provider, { value: v }, /* @__PURE__ */ I.createElement(_t.Provider, { value: {
		role: o,
		activeKey: je(a),
		getControlledId: m || Cn,
		getControllerId: h || Cn
	} }, /* @__PURE__ */ I.createElement(r, c({}, l, {
		onKeyDown: y,
		ref: b,
		role: o
	}))));
}), Tn = [
	"active",
	"className",
	"eventKey",
	"onSelect",
	"onClick",
	"as"
], En = { disabled: !1 }, Dn = /* @__PURE__ */ I.forwardRef(function(e, t) {
	var n = e.active, r = e.className, i = e.eventKey, a = e.onSelect, o = e.onClick, s = e.as, l = S(e, Tn), u = je(i, l.href), d = (0, I.useContext)(Ae), f = (0, I.useContext)(_t), p = n;
	if (f) {
		!l.role && f.role === "tablist" && (l.role = "tab");
		var h = f.getControllerId(u), g = f.getControlledId(u);
		l["data-rb-event-key"] = u, l.id = h || l.id, l["aria-controls"] = g || l["aria-controls"], p = n == null && u != null ? f.activeKey === u : n;
	}
	l.role === "tab" && (l.disabled && (l.tabIndex = -1, l["aria-disabled"] = !0), l["aria-selected"] = p);
	var _ = m(function(e) {
		o && o(e), u != null && (a && a(u, e), d && d(u, e));
	});
	return /* @__PURE__ */ I.createElement(s, c({}, l, {
		ref: t,
		onClick: _,
		className: (0, L.default)(r, p && "active")
	}));
});
Dn.defaultProps = En;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/NavItem.js
var On = [
	"bsPrefix",
	"className",
	"children",
	"as"
], kn = /* @__PURE__ */ I.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.className, i = e.children, a = e.as, o = a === void 0 ? "div" : a, s = S(e, On);
	return n = l(n, "nav-item"), /* @__PURE__ */ I.createElement(o, c({}, s, {
		ref: t,
		className: (0, L.default)(r, n)
	}), i);
});
kn.displayName = "NavItem";
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/NavLink.js
var An = [
	"bsPrefix",
	"disabled",
	"className",
	"href",
	"eventKey",
	"onSelect",
	"as"
], jn = {
	disabled: !1,
	as: ie
}, Mn = /* @__PURE__ */ I.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.disabled, i = e.className, a = e.href, o = e.eventKey, s = e.onSelect, u = e.as, d = S(e, An);
	return n = l(n, "nav-link"), /* @__PURE__ */ I.createElement(Dn, c({}, d, {
		href: a,
		ref: t,
		eventKey: o,
		as: u,
		disabled: r,
		onSelect: s,
		className: (0, L.default)(i, n, r && "disabled")
	}));
});
Mn.displayName = "NavLink", Mn.defaultProps = jn;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Nav.js
var Nn = [
	"as",
	"bsPrefix",
	"variant",
	"fill",
	"justify",
	"navbar",
	"navbarScroll",
	"className",
	"children",
	"activeKey"
], Pn = {
	justify: !1,
	fill: !1
}, Fn = /* @__PURE__ */ I.forwardRef(function(e, t) {
	var n, r = v(e, { activeKey: "onSelect" }), i = r.as, a = i === void 0 ? "div" : i, o = r.bsPrefix, s = r.variant, u = r.fill, d = r.justify, f = r.navbar, p = r.navbarScroll, m = r.className, h = r.children, g = r.activeKey, _ = S(r, Nn), y = l(o, "nav"), b, x, C = !1, w = (0, I.useContext)(xt), T = (0, I.useContext)(Je);
	return w ? (b = w.bsPrefix, C = f ?? !0) : T && (x = T.cardHeaderBsPrefix), /* @__PURE__ */ I.createElement(wn, c({
		as: a,
		ref: t,
		activeKey: g,
		className: (0, L.default)(m, (n = {}, n[y] = !C, n[b + "-nav"] = C, n[b + "-nav-scroll"] = C && p, n[x + "-" + s] = !!x, n[y + "-" + s] = !!s, n[y + "-fill"] = u, n[y + "-justified"] = d, n))
	}, _), h);
});
Fn.displayName = "Nav", Fn.defaultProps = Pn, Fn.Item = kn, Fn.Link = Mn;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/NavDropdown.js
var In = [
	"id",
	"title",
	"children",
	"bsPrefix",
	"className",
	"rootCloseEvent",
	"menuRole",
	"disabled",
	"active",
	"renderMenuOnMount"
], Ln = /* @__PURE__ */ I.forwardRef(function(e, t) {
	var n = e.id, r = e.title, i = e.children, a = e.bsPrefix, o = e.className, s = e.rootCloseEvent, u = e.menuRole, d = e.disabled, f = e.active, p = e.renderMenuOnMount, m = S(e, In), h = l(void 0, "nav-item");
	return /* @__PURE__ */ I.createElement(Pt, c({ ref: t }, m, { className: (0, L.default)(o, h) }), /* @__PURE__ */ I.createElement(Pt.Toggle, {
		id: n,
		eventKey: null,
		active: f,
		disabled: d,
		childBsPrefix: a,
		as: Mn
	}, r), /* @__PURE__ */ I.createElement(Pt.Menu, {
		role: u,
		renderOnMount: p,
		rootCloseEvent: s
	}, i));
});
Ln.displayName = "NavDropdown", Ln.Item = Pt.Item, Ln.ItemText = Pt.ItemText, Ln.Divider = Pt.Divider, Ln.Header = Pt.Header;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/ProgressBar.js
var Rn = [
	"min",
	"now",
	"max",
	"label",
	"srOnly",
	"striped",
	"animated",
	"className",
	"style",
	"variant",
	"bsPrefix"
], zn = ["isChild"], Bn = [
	"min",
	"now",
	"max",
	"label",
	"srOnly",
	"striped",
	"animated",
	"bsPrefix",
	"variant",
	"className",
	"children"
], Vn = 1e3, Hn = {
	min: 0,
	max: 100,
	animated: !1,
	isChild: !1,
	srOnly: !1,
	striped: !1
};
function Un(e, t, n) {
	var r = (e - t) / (n - t) * 100;
	return Math.round(r * Vn) / Vn;
}
function Wn(e, t) {
	var n, r = e.min, i = e.now, a = e.max, o = e.label, s = e.srOnly, l = e.striped, u = e.animated, d = e.className, f = e.style, p = e.variant, m = e.bsPrefix, h = S(e, Rn);
	return /* @__PURE__ */ I.createElement("div", c({ ref: t }, h, {
		role: "progressbar",
		className: (0, L.default)(d, m + "-bar", (n = {}, n["bg-" + p] = p, n[m + "-bar-animated"] = u, n[m + "-bar-striped"] = u || l, n)),
		style: c({ width: Un(i, r, a) + "%" }, f),
		"aria-valuenow": i,
		"aria-valuemin": r,
		"aria-valuemax": a
	}), s ? /* @__PURE__ */ I.createElement("span", { className: "sr-only" }, o) : o);
}
var Gn = /* @__PURE__ */ I.forwardRef(function(e, t) {
	var n = e.isChild, r = S(e, zn);
	if (r.bsPrefix = l(r.bsPrefix, "progress"), n) return Wn(r, t);
	var i = r.min, a = r.now, o = r.max, s = r.label, u = r.srOnly, d = r.striped, f = r.animated, p = r.bsPrefix, m = r.variant, h = r.className, g = r.children, _ = S(r, Bn);
	return /* @__PURE__ */ I.createElement("div", c({ ref: t }, _, { className: (0, L.default)(h, p) }), g ? Ye(g, function(e) {
		return /* @__PURE__ */ (0, I.cloneElement)(e, { isChild: !0 });
	}) : Wn({
		min: i,
		now: a,
		max: o,
		label: s,
		srOnly: u,
		striped: d,
		animated: f,
		bsPrefix: p,
		variant: m
	}, t));
});
Gn.displayName = "ProgressBar", Gn.defaultProps = Hn;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Spinner.js
var Kn = [
	"bsPrefix",
	"variant",
	"animation",
	"size",
	"children",
	"as",
	"className"
], qn = /* @__PURE__ */ I.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.variant, i = e.animation, a = e.size, o = e.children, s = e.as, u = s === void 0 ? "div" : s, d = e.className, f = S(e, Kn);
	n = l(n, "spinner");
	var p = n + "-" + i;
	return /* @__PURE__ */ I.createElement(u, c({ ref: t }, f, { className: (0, L.default)(d, p, a && p + "-" + a, r && "text-" + r) }), o);
});
qn.displayName = "Spinner";
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/TabContainer.js
var Jn = function(e) {
	var t = v(e, { activeKey: "onSelect" }), n = t.id, r = t.generateChildId, i = t.onSelect, a = t.activeKey, o = t.transition, s = t.mountOnEnter, c = t.unmountOnExit, l = t.children, u = (0, I.useMemo)(function() {
		return r || function(e, t) {
			return n ? n + "-" + t + "-" + e : null;
		};
	}, [n, r]), d = (0, I.useMemo)(function() {
		return {
			onSelect: i,
			activeKey: a,
			transition: o,
			mountOnEnter: s || !1,
			unmountOnExit: c || !1,
			getControlledId: function(e) {
				return u(e, "tabpane");
			},
			getControllerId: function(e) {
				return u(e, "tab");
			}
		};
	}, [
		i,
		a,
		o,
		s,
		c,
		u
	]);
	return /* @__PURE__ */ I.createElement(xn.Provider, { value: d }, /* @__PURE__ */ I.createElement(Ae.Provider, { value: i || null }, l));
}, Yn = [
	"bsPrefix",
	"as",
	"className"
], Xn = /* @__PURE__ */ I.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.as, i = r === void 0 ? "div" : r, a = e.className, o = S(e, Yn), s = l(n, "tab-content");
	return /* @__PURE__ */ I.createElement(i, c({ ref: t }, o, { className: (0, L.default)(a, s) }));
}), Zn = [
	"activeKey",
	"getControlledId",
	"getControllerId"
], Qn = [
	"bsPrefix",
	"className",
	"active",
	"onEnter",
	"onEntering",
	"onEntered",
	"onExit",
	"onExiting",
	"onExited",
	"mountOnEnter",
	"unmountOnExit",
	"transition",
	"as",
	"eventKey"
];
function $n(e) {
	var t = (0, I.useContext)(xn);
	if (!t) return e;
	var n = t.activeKey, r = t.getControlledId, i = t.getControllerId, a = S(t, Zn), o = e.transition !== !1 && a.transition !== !1, s = je(e.eventKey);
	return c({}, e, {
		active: e.active == null && s != null ? je(n) === s : e.active,
		id: r(e.eventKey),
		"aria-labelledby": i(e.eventKey),
		transition: o && (e.transition || a.transition || p),
		mountOnEnter: e.mountOnEnter == null ? a.mountOnEnter : e.mountOnEnter,
		unmountOnExit: e.unmountOnExit == null ? a.unmountOnExit : e.unmountOnExit
	});
}
var er = /* @__PURE__ */ I.forwardRef(function(e, t) {
	var n = $n(e), r = n.bsPrefix, i = n.className, a = n.active, o = n.onEnter, s = n.onEntering, u = n.onEntered, d = n.onExit, f = n.onExiting, p = n.onExited, m = n.mountOnEnter, h = n.unmountOnExit, g = n.transition, _ = n.as, v = _ === void 0 ? "div" : _;
	n.eventKey;
	var y = S(n, Qn), b = l(r, "tab-pane");
	if (!a && !g && h) return null;
	var x = /* @__PURE__ */ I.createElement(v, c({}, y, {
		ref: t,
		role: "tabpanel",
		"aria-hidden": !a,
		className: (0, L.default)(i, b, { active: a })
	}));
	return g && (x = /* @__PURE__ */ I.createElement(g, {
		in: a,
		onEnter: o,
		onEntering: s,
		onEntered: u,
		onExit: d,
		onExiting: f,
		onExited: p,
		mountOnEnter: m,
		unmountOnExit: h
	}, x)), /* @__PURE__ */ I.createElement(xn.Provider, { value: null }, /* @__PURE__ */ I.createElement(Ae.Provider, { value: null }, x));
});
er.displayName = "TabPane";
//#endregion
//#region node_modules/.pnpm/css-mediaquery@0.1.2/node_modules/css-mediaquery/index.js
var tr = /* @__PURE__ */ j(((e) => {
	e.match = o, e.parse = s;
	var t = /(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i, n = /\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/, r = /^(?:(min|max)-)?(.+)/, i = /(em|rem|px|cm|mm|in|pt|pc)?$/, a = /(dpi|dpcm|dppx)?$/;
	function o(e, t) {
		return s(e).some(function(e) {
			var n = e.inverse, r = e.type === "all" || t.type === e.type;
			if (r && n || !(r || n)) return !1;
			var i = e.expressions.every(function(e) {
				var n = e.feature, r = e.modifier, i = e.value, a = t[n];
				if (!a) return !1;
				switch (n) {
					case "orientation":
					case "scan": return a.toLowerCase() === i.toLowerCase();
					case "width":
					case "height":
					case "device-width":
					case "device-height":
						i = u(i), a = u(a);
						break;
					case "resolution":
						i = l(i), a = l(a);
						break;
					case "aspect-ratio":
					case "device-aspect-ratio":
					case "device-pixel-ratio":
						i = c(i), a = c(a);
						break;
					case "grid":
					case "color":
					case "color-index":
					case "monochrome":
						i = parseInt(i, 10) || 1, a = parseInt(a, 10) || 0;
						break;
				}
				switch (r) {
					case "min": return a >= i;
					case "max": return a <= i;
					default: return a === i;
				}
			});
			return i && !n || !i && n;
		});
	}
	function s(e) {
		return e.split(",").map(function(e) {
			e = e.trim();
			var i = e.match(t), a = i[1], o = i[2], s = i[3] || "", c = {};
			return c.inverse = !!a && a.toLowerCase() === "not", c.type = o ? o.toLowerCase() : "all", s = s.match(/\([^\)]+\)/g) || [], c.expressions = s.map(function(e) {
				var t = e.match(n), i = t[1].toLowerCase().match(r);
				return {
					modifier: i[1],
					feature: i[2],
					value: t[2]
				};
			}), c;
		});
	}
	function c(e) {
		var t = Number(e), n;
		return t ||= (n = e.match(/^(\d+)\s*\/\s*(\d+)$/), n[1] / n[2]), t;
	}
	function l(e) {
		var t = parseFloat(e);
		switch (String(e).match(a)[1]) {
			case "dpcm": return t / 2.54;
			case "dppx": return t * 96;
			default: return t;
		}
	}
	function u(e) {
		var t = parseFloat(e);
		switch (String(e).match(i)[1]) {
			case "em": return t * 16;
			case "rem": return t * 16;
			case "cm": return t * 96 / 2.54;
			case "mm": return t * 96 / 2.54 / 10;
			case "in": return t * 96;
			case "pt": return t * 72;
			case "pc": return t * 72 / 12;
			default: return t;
		}
	}
})), nr = /* @__PURE__ */ se((/* @__PURE__ */ j(((e, t) => {
	var n = tr().match, r = typeof window < "u" ? window.matchMedia : null;
	function i(e, t, i) {
		var a = this, o;
		r && !i && (o = r.call(window, e)), o ? (this.matches = o.matches, this.media = o.media, o.addListener(l)) : (this.matches = n(e, t), this.media = e), this.addListener = s, this.removeListener = c, this.dispose = u;
		function s(e) {
			o && o.addListener(e);
		}
		function c(e) {
			o && o.removeListener(e);
		}
		function l(e) {
			a.matches = e.matches, a.media = e.media;
		}
		function u() {
			o && o.removeListener(l);
		}
	}
	function a(e, t, n) {
		return new i(e, t, n);
	}
	t.exports = a;
})))()), rr = /[A-Z]/g, ir = /^ms-/, ar = {};
function or(e) {
	return "-" + e.toLowerCase();
}
function sr(e) {
	if (ar.hasOwnProperty(e)) return ar[e];
	var t = e.replace(rr, or);
	return ar[e] = ir.test(t) ? "-" + t : t;
}
//#endregion
//#region node_modules/.pnpm/shallow-equal@3.1.0/node_modules/shallow-equal/dist/index.modern.mjs
function cr(e, t) {
	if (e === t) return !0;
	if (!e || !t) return !1;
	let n = Object.keys(e), r = Object.keys(t), i = n.length;
	if (r.length !== i) return !1;
	for (let r = 0; r < i; r++) {
		let i = n[r];
		if (e[i] !== t[i] || !Object.prototype.hasOwnProperty.call(t, i)) return !1;
	}
	return !0;
}
//#endregion
//#region node_modules/.pnpm/react-responsive@10.0.1_react@18.3.1/node_modules/react-responsive/dist/esm/index.js
var lr = R.default.oneOfType([R.default.string, R.default.number]), ur = {
	all: R.default.bool,
	grid: R.default.bool,
	aural: R.default.bool,
	braille: R.default.bool,
	handheld: R.default.bool,
	print: R.default.bool,
	projection: R.default.bool,
	screen: R.default.bool,
	tty: R.default.bool,
	tv: R.default.bool,
	embossed: R.default.bool
}, dr = {
	orientation: R.default.oneOf(["portrait", "landscape"]),
	scan: R.default.oneOf(["progressive", "interlace"]),
	aspectRatio: R.default.string,
	deviceAspectRatio: R.default.string,
	height: lr,
	deviceHeight: lr,
	width: lr,
	deviceWidth: lr,
	color: R.default.bool,
	colorIndex: R.default.bool,
	monochrome: R.default.bool,
	resolution: lr,
	type: Object.keys(ur)
}, { type: fr, ...pr } = dr, mr = {
	minAspectRatio: R.default.string,
	maxAspectRatio: R.default.string,
	minDeviceAspectRatio: R.default.string,
	maxDeviceAspectRatio: R.default.string,
	minHeight: lr,
	maxHeight: lr,
	minDeviceHeight: lr,
	maxDeviceHeight: lr,
	minWidth: lr,
	maxWidth: lr,
	minDeviceWidth: lr,
	maxDeviceWidth: lr,
	minColor: R.default.number,
	maxColor: R.default.number,
	minColorIndex: R.default.number,
	maxColorIndex: R.default.number,
	minMonochrome: R.default.number,
	maxMonochrome: R.default.number,
	minResolution: lr,
	maxResolution: lr,
	...pr
}, hr = {
	all: {
		...ur,
		...mr
	},
	types: ur,
	matchers: dr,
	features: mr
}, gr = (e) => `not ${e}`, _r = (e, t) => {
	let n = sr(e);
	return typeof t == "number" && (t = `${t}px`), t === !0 ? n : t === !1 ? gr(n) : `(${n}: ${t})`;
}, vr = (e) => e.join(" and "), yr = (e) => {
	let t = [];
	return Object.keys(hr.all).forEach((n) => {
		let r = e[n];
		r != null && t.push(_r(n, r));
	}), vr(t);
}, br = (0, I.createContext)(void 0), xr = (e) => e.query || yr(e), Sr = (e) => {
	if (e) return Object.keys(e).reduce((t, n) => (t[sr(n)] = e[n], t), {});
}, Cr = () => {
	let e = (0, I.useRef)(!1);
	return (0, I.useEffect)(() => {
		e.current = !0;
	}, []), e.current;
}, wr = (e) => {
	let t = (0, I.useContext)(br), n = () => Sr(e) || Sr(t), [r, i] = (0, I.useState)(n);
	return (0, I.useEffect)(() => {
		let e = n();
		cr(r, e) || i(e);
	}, [e, t]), r;
}, Tr = (e) => {
	let t = () => xr(e), [n, r] = (0, I.useState)(t);
	return (0, I.useEffect)(() => {
		let e = t();
		n !== e && r(e);
	}, [e]), n;
}, Er = (e, t) => {
	let n = () => (0, nr.default)(e, t || {}, !!t), [r, i] = (0, I.useState)(n), a = Cr();
	return (0, I.useEffect)(() => {
		if (a) {
			let e = n();
			return i(e), () => {
				e && e.dispose();
			};
		}
	}, [e, t]), r;
}, Dr = (e) => {
	let [t, n] = (0, I.useState)(e.matches);
	return (0, I.useEffect)(() => {
		let t = (e) => {
			n(e.matches);
		};
		return e.addListener(t), n(e.matches), () => {
			e.removeListener(t);
		};
	}, [e]), t;
}, Or = (e, t, n) => {
	let r = wr(t), i = Tr(e);
	if (!i) throw Error("Invalid or missing MediaQuery!");
	let a = Er(i, r), o = Dr(a), s = Cr();
	return (0, I.useEffect)(() => {
		s && n && n(o);
	}, [o]), (0, I.useEffect)(() => () => {
		a && a.dispose();
	}, []), o;
}, { sm: kr, md: Ar, lg: jr, xl: Mr, xxl: Nr } = {
	xs: "0",
	sm: "576px",
	md: "768px",
	lg: "992px",
	xl: "1200px",
	xxl: "1400px"
}, Pr = {
	extraSmall: { maxWidth: parseFloat(kr) || 575.98 },
	small: {
		minWidth: parseFloat(kr) || 576,
		maxWidth: parseFloat(Ar) || 767.98
	},
	medium: {
		minWidth: parseFloat(Ar) || 768,
		maxWidth: parseFloat(jr) || 991.98
	},
	large: {
		minWidth: parseFloat(jr) || 992,
		maxWidth: parseFloat(Mr) || 1199.98
	},
	extraLarge: {
		minWidth: parseFloat(Mr) || 1200,
		maxWidth: parseFloat(Nr) || 1399.98
	},
	extraExtraLarge: { minWidth: parseFloat(Nr) || 1400 }
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
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Alert/index.js
var Fr = /* @__PURE__ */ (0, I.forwardRef)(({ children: e, icon: t, actions: n, dismissible: r = !1, onClose: i = () => {}, closeLabel: a, stacked: o = !1, show: s = !0, ...c }, l) => {
	let [u, d] = (0, I.useState)(o), f = Or({ maxWidth: Pr.extraSmall.maxWidth });
	(0, I.useEffect)(() => {
		d(f ? !0 : o);
	}, [f, o]);
	let p = (0, I.useCallback)((e) => /* @__PURE__ */ (0, I.cloneElement)(e, {
		size: "sm",
		key: e.props.children
	}), []);
	return /* @__PURE__ */ I.createElement(qe, {
		...c,
		className: (0, L.default)("alert-content", c.className),
		show: s,
		ref: l
	}, t && /* @__PURE__ */ I.createElement(de, {
		src: t,
		className: "alert-icon"
	}), /* @__PURE__ */ I.createElement("div", { className: (0, L.default)({
		"pgn__alert-message-wrapper": !u,
		"pgn__alert-message-wrapper-stacked": u
	}) }, /* @__PURE__ */ I.createElement("div", { className: "alert-message-content" }, e), (r || n && n.length > 0) && /* @__PURE__ */ I.createElement(Oe, { className: "pgn__alert-actions" }, /* @__PURE__ */ I.createElement(Oe.Spacer, null), r && /* @__PURE__ */ I.createElement(O, {
		size: "sm",
		variant: "tertiary",
		onClick: i
	}, a || /* @__PURE__ */ I.createElement(w, {
		id: "pgn.Alert.closeLabel",
		defaultMessage: "Dismiss",
		description: "Label of a close button on Alert component"
	})), n && n.map(p))));
}), Ir = Ie("h4");
Ir.displayName = "DivStyledAsH4";
function Lr({ as: e = Ir, bsPrefix: t = "alert-heading", ...n }) {
	return /* @__PURE__ */ I.createElement(qe.Heading, {
		as: e,
		bsPrefix: t,
		...n
	});
}
function Rr({ as: e = "a", bsPrefix: t = "alert-link", ...n }) {
	return /* @__PURE__ */ I.createElement(qe.Link, {
		as: e,
		bsPrefix: t,
		...n
	});
}
Fr.Heading = Lr, Fr.Link = Rr;
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Annotation/index.js
var zr = /* @__PURE__ */ I.forwardRef(({ className: e, variant: t = "success", children: n, arrowPlacement: r = "bottom", ...i }, a) => /* @__PURE__ */ I.createElement("span", {
	className: (0, L.default)(e, "pgn__annotation", `pgn__annotation-${t}-${r}`),
	ref: a,
	...i
}, n)), Br = (e) => /* @__PURE__ */ I.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ I.createElement("path", {
	d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2Z",
	fill: "currentColor"
})), Vr = (e) => /* @__PURE__ */ I.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ I.createElement("path", {
	d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2Zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59Z",
	fill: "currentColor"
})), Hr = (e) => /* @__PURE__ */ I.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ I.createElement("path", {
	d: "M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2Z",
	fill: "currentColor"
})), Ur = (e) => /* @__PURE__ */ I.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ I.createElement("path", {
	d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9Z",
	fill: "currentColor"
})), Wr = (e) => /* @__PURE__ */ I.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ I.createElement("path", {
	d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41Z",
	fill: "currentColor"
})), Gr = (e) => /* @__PURE__ */ I.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ I.createElement("path", {
	d: "m14.06 9.02.92.92L5.92 19H5v-.92l9.06-9.06ZM17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83a.996.996 0 0 0 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29Zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75Z",
	fill: "currentColor"
})), Kr = (e) => /* @__PURE__ */ I.createElement("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	...e
}, /* @__PURE__ */ I.createElement("path", {
	d: "M5 10h4v6h6v-6h4l-7-7-7 7zm0 8v2h14v-2H5z",
	fill: "currentColor"
})), qr = (e) => /* @__PURE__ */ I.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ I.createElement("path", {
	d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm1 15h-2v-6h2v6Zm0-8h-2V7h2v2Z",
	fill: "currentColor"
})), Jr = (e) => /* @__PURE__ */ I.createElement("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	...e
}, /* @__PURE__ */ I.createElement("path", {
	d: "M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",
	fill: "currentColor"
})), Yr = (e) => /* @__PURE__ */ I.createElement("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	...e
}, /* @__PURE__ */ I.createElement("path", {
	d: "M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z",
	fill: "currentColor"
})), Xr = (e) => /* @__PURE__ */ I.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ I.createElement("path", {
	d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8Z",
	fill: "currentColor"
})), Zr = (e) => /* @__PURE__ */ I.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ I.createElement("path", {
	xmlns: "http://www.w3.org/2000/svg",
	d: "M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z",
	fill: "currentColor"
}));
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/core/utils.js
function Qr(e) {
	return typeof e == "string" || e instanceof String;
}
function $r(e) {
	var t;
	return typeof e == "object" && !!e && (e == null || (t = e.constructor) == null ? void 0 : t.name) === "Object";
}
function ei(e, t) {
	return Array.isArray(t) ? ei(e, (e, n) => t.includes(n)) : Object.entries(e).reduce((e, n) => {
		let [r, i] = n;
		return t(i, r) && (e[r] = i), e;
	}, {});
}
var z = {
	NONE: "NONE",
	LEFT: "LEFT",
	FORCE_LEFT: "FORCE_LEFT",
	RIGHT: "RIGHT",
	FORCE_RIGHT: "FORCE_RIGHT"
};
function ti(e) {
	switch (e) {
		case z.LEFT: return z.FORCE_LEFT;
		case z.RIGHT: return z.FORCE_RIGHT;
		default: return e;
	}
}
function ni(e) {
	return e.replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1");
}
function ri(e, t) {
	if (t === e) return !0;
	let n = Array.isArray(t), r = Array.isArray(e), i;
	if (n && r) {
		if (t.length != e.length) return !1;
		for (i = 0; i < t.length; i++) if (!ri(t[i], e[i])) return !1;
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
		for (i = 0; i < s.length; i++) if (!ri(e[s[i]], t[s[i]])) return !1;
		return !0;
	} else if (t && e && typeof t == "function" && typeof e == "function") return t.toString() === e.toString();
	return !1;
}
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/core/action-details.js
var ii = class {
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
		return !this.removedCount || this.insertedCount ? z.NONE : (this.oldSelection.end === this.cursorPos || this.oldSelection.start === this.cursorPos) && this.oldSelection.end === this.oldSelection.start ? z.RIGHT : z.LEFT;
	}
};
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/core/holder.js
function B(e, t) {
	return new B.InputMask(e, t);
}
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/factory.js
function ai(e) {
	if (e == null) throw Error("mask property should be defined");
	return e instanceof RegExp ? B.MaskedRegExp : Qr(e) ? B.MaskedPattern : e === Date ? B.MaskedDate : e === Number ? B.MaskedNumber : Array.isArray(e) || e === Array ? B.MaskedDynamic : B.Masked && e.prototype instanceof B.Masked ? e : B.Masked && e instanceof B.Masked ? e.constructor : e instanceof Function ? B.MaskedFunction : (console.warn("Mask not found for mask", e), B.Masked);
}
function oi(e) {
	if (!e) throw Error("Options in not defined");
	if (B.Masked) {
		if (e.prototype instanceof B.Masked) return { mask: e };
		let { mask: t = void 0, ...n } = e instanceof B.Masked ? { mask: e } : $r(e) && e.mask instanceof B.Masked ? e : {};
		if (t) {
			let e = t.mask;
			return {
				...ei(t, (e, t) => !t.startsWith("_")),
				mask: t.constructor,
				_mask: e,
				...n
			};
		}
	}
	return $r(e) ? { ...e } : { mask: e };
}
function si(e) {
	if (B.Masked && e instanceof B.Masked) return e;
	let t = oi(e), n = ai(t.mask);
	if (!n) throw Error("Masked class is not found for provided mask " + t.mask + ", appropriate module needs to be imported manually before creating mask.");
	return t.mask === n && delete t.mask, t._mask && (t.mask = t._mask, delete t._mask), new n(t);
}
B.createMask = si;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/controls/mask-element.js
var ci = class {
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
B.MaskElement = ci;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/controls/html-mask-element.js
var li = 90, ui = 89, di = class extends ci {
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
		if (this._handlers.redo && (e.keyCode === li && e.shiftKey && (e.metaKey || e.ctrlKey) || e.keyCode === ui && e.ctrlKey)) return e.preventDefault(), this._handlers.redo(e);
		if (this._handlers.undo && e.keyCode === li && (e.metaKey || e.ctrlKey)) return e.preventDefault(), this._handlers.undo(e);
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
B.HTMLMaskElement = di;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/controls/html-input-mask-element.js
var fi = class extends di {
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
B.HTMLMaskElement = di;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/controls/html-contenteditable-mask-element.js
var pi = class extends di {
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
B.HTMLContenteditableMaskElement = pi;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/controls/input-history.js
var mi = class e {
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
mi.MAX_LENGTH = 100, B.InputMask = class {
	constructor(e, t) {
		this.el = e instanceof ci ? e : e.isContentEditable && e.tagName !== "INPUT" && e.tagName !== "TEXTAREA" ? new pi(e) : new fi(e), this.masked = si(t), this._listeners = {}, this._value = "", this._unmaskedValue = "", this._rawInputValue = "", this.history = new mi(), this._saveSelection = this._saveSelection.bind(this), this._onInput = this._onInput.bind(this), this._onChange = this._onChange.bind(this), this._onDrop = this._onDrop.bind(this), this._onFocus = this._onFocus.bind(this), this._onClick = this._onClick.bind(this), this._onUndo = this._onUndo.bind(this), this._onRedo = this._onRedo.bind(this), this.alignCursor = this.alignCursor.bind(this), this.alignCursorFriendly = this.alignCursorFriendly.bind(this), this._bindEvents(), this.updateValue(), this._onChange();
	}
	maskEquals(e) {
		return e == null || this.masked?.maskEquals(e);
	}
	get mask() {
		return this.masked.mask;
	}
	set mask(e) {
		if (this.maskEquals(e)) return;
		if (!(e instanceof B.Masked) && this.masked.constructor === ai(e)) {
			this.masked.updateOptions({ mask: e });
			return;
		}
		let t = e instanceof B.Masked ? e : si({ mask: e });
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
		!this.el || !this.el.isActive || (this.el.select(e, e), this._saveSelection());
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
		this.cursorPos = this.masked.nearestInputPos(this.masked.nearestInputPos(this.cursorPos, z.LEFT));
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
		let t = new ii({
			value: this.el.value,
			cursorPos: this.cursorPos,
			oldValue: this.displayValue,
			oldSelection: this._selection
		}), n = this.masked.rawInputValue, r = this.masked.splice(t.startChangePos, t.removed.length, t.inserted, t.removeDirection, {
			input: !0,
			raw: !0
		}).offset, i = n === this.masked.rawInputValue ? t.removeDirection : z.NONE, a = this.masked.nearestInputPos(t.startChangePos + r, i);
		i !== z.NONE && (a = this.masked.nearestInputPos(a, z.NONE)), this.updateControl(a), delete this._inputEvent;
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
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/core/change-details.js
var V = class e {
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
B.ChangeDetails = V;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/core/continuous-tail-details.js
var hi = class {
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
}, gi = class e {
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
		return e === void 0 && (e = 0), t === void 0 && (t = this.displayValue.length), new hi(this.extractInput(e, t), e);
	}
	appendTail(e) {
		return Qr(e) && (e = new hi(String(e))), e.appendTo(this);
	}
	_appendCharRaw(e, t) {
		return e ? (this._value += e, new V({
			inserted: e,
			rawInserted: e
		})) : new V();
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
			a || (i = new V(), this.state = r, n && e && (n.state = e));
		}
		return i;
	}
	_appendPlaceholder() {
		return new V();
	}
	_appendEager() {
		return new V();
	}
	append(e, t, n) {
		if (!Qr(e)) throw Error("value should be string");
		let r = Qr(n) ? new hi(String(n)) : n;
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
		return e === void 0 && (e = 0), t === void 0 && (t = this.displayValue.length), this._value = this.displayValue.slice(0, e) + this.displayValue.slice(t), new V();
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
		return t === void 0 && (t = {}), V.normalize(this.prepare ? this.prepare(e, this, t) : e);
	}
	doPrepareChar(e, t) {
		return t === void 0 && (t = {}), V.normalize(this.prepareChar ? this.prepareChar(e, this, t) : e);
	}
	doValidate(e) {
		return (!this.validate || this.validate(this.value, this, e)) && (!this.parent || this.parent.doValidate(e));
	}
	doCommit() {
		this.commit && this.commit(this.value, this);
	}
	splice(e, t, n, r, i) {
		n === void 0 && (n = ""), r === void 0 && (r = z.NONE), i === void 0 && (i = { input: !0 });
		let a = e + t, o = this.extractTail(a), s = this.eager === !0 || this.eager === "remove", c;
		s && (r = ti(r), c = this.extractInput(0, a, { raw: !0 }));
		let l = e, u = new V();
		if (r !== z.NONE && (l = this.nearestInputPos(e, t > 1 && e !== 0 && !s ? z.NONE : r), u.tailShift = l - e), u.aggregate(this.remove(l)), s && r !== z.NONE && c === this.rawInputValue) if (r === z.FORCE_LEFT) {
			let e;
			for (; c === this.rawInputValue && (e = this.displayValue.length);) u.aggregate(new V({ tailShift: -1 })).aggregate(this.remove(e - 1));
		} else r === z.FORCE_RIGHT && o.unshift();
		return u.aggregate(this.append(n, i, o));
	}
	maskEquals(e) {
		return this.mask === e;
	}
	optionsIsChanged(e) {
		return !ri(this, e);
	}
	typedValueEquals(t) {
		let n = this.typedValue;
		return t === n || e.EMPTY_VALUES.includes(t) && e.EMPTY_VALUES.includes(n) || (this.format ? this.format(t, this) === this.format(this.typedValue, this) : !1);
	}
	pad(e) {
		return new V();
	}
};
gi.DEFAULTS = { skipInvalid: !0 }, gi.EMPTY_VALUES = [
	void 0,
	null,
	""
], B.Masked = gi;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/pattern/chunk-tail-details.js
var _i = class e {
	constructor(e, t) {
		e === void 0 && (e = []), t === void 0 && (t = 0), this.chunks = e, this.from = t;
	}
	toString() {
		return this.chunks.map(String).join("");
	}
	extend(t) {
		if (!String(t)) return;
		t = Qr(t) ? new hi(String(t)) : t;
		let n = this.chunks[this.chunks.length - 1], r = n && (n.stop === t.stop || t.stop == null) && t.from === n.from + n.toString().length;
		if (t instanceof hi) r ? n.extend(t.toString()) : this.chunks.push(t);
		else if (t instanceof e) {
			if (t.stop == null) {
				let e;
				for (; t.chunks.length && t.chunks[0].stop == null;) e = t.chunks.shift(), e.from += t.from, this.extend(e);
			}
			t.toString() && (t.stop = t.blockIndex, this.chunks.push(t));
		}
	}
	appendTo(t) {
		if (!(t instanceof B.MaskedPattern)) return new hi(this.toString()).appendTo(t);
		let n = new V();
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
			let n = "chunks" in t ? new e() : new hi();
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
}, vi = class {
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
			if (!(this.block.isFixed || !this.block.value) && (this.offset = this.block.nearestInputPos(this.offset, z.FORCE_LEFT), this.offset !== 0)) return !0;
		});
	}
	pushLeftBeforeInput() {
		return this._pushLeft(() => {
			if (!this.block.isFixed) return this.offset = this.block.nearestInputPos(this.offset, z.LEFT), !0;
		});
	}
	pushLeftBeforeRequired() {
		return this._pushLeft(() => {
			if (!(this.block.isFixed || this.block.isOptional && !this.block.value)) return this.offset = this.block.nearestInputPos(this.offset, z.LEFT), !0;
		});
	}
	pushRightBeforeFilled() {
		return this._pushRight(() => {
			if (!(this.block.isFixed || !this.block.value) && (this.offset = this.block.nearestInputPos(this.offset, z.FORCE_RIGHT), this.offset !== this.block.value.length)) return !0;
		});
	}
	pushRightBeforeInput() {
		return this._pushRight(() => {
			if (!this.block.isFixed) return this.offset = this.block.nearestInputPos(this.offset, z.NONE), !0;
		});
	}
	pushRightBeforeRequired() {
		return this._pushRight(() => {
			if (!(this.block.isFixed || this.block.isOptional && !this.block.value)) return this.offset = this.block.nearestInputPos(this.offset, z.NONE), !0;
		});
	}
}, yi = class {
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
		return e === void 0 && (e = 0), t === void 0 && (t = this._value.length), this._value = this._value.slice(0, e) + this._value.slice(t), this._value || (this._isRawInput = !1), new V();
	}
	nearestInputPos(e, t) {
		t === void 0 && (t = z.NONE);
		let n = this._value.length;
		switch (t) {
			case z.LEFT:
			case z.FORCE_LEFT: return 0;
			case z.NONE:
			case z.RIGHT:
			case z.FORCE_RIGHT:
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
		if (t === void 0 && (t = {}), this.isFilled) return new V();
		let n = this.eager === !0 || this.eager === "append", r = this.char === e && (this.isUnmasking || t.input || t.raw) && (!t.raw || !n) && !t.tail, i = new V({
			inserted: this.char,
			rawInserted: r ? this.char : ""
		});
		return this._value = this.char, this._isRawInput = r && (t.raw || t.input), i;
	}
	_appendEager() {
		return this._appendChar(this.char, { tail: !0 });
	}
	_appendPlaceholder() {
		let e = new V();
		return this.isFilled || (this._value = e.inserted = this.char), e;
	}
	extractTail() {
		return new hi("");
	}
	appendTail(e) {
		return Qr(e) && (e = new hi(String(e))), e.appendTo(this);
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
}, bi = class {
	constructor(e) {
		let { parent: t, isOptional: n, placeholderChar: r, displayChar: i, lazy: a, eager: o, ...s } = e;
		this.masked = si(s), Object.assign(this, {
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
		return e === void 0 && (e = 0), t === void 0 && (t = this.value.length), e === 0 && t >= 1 ? (this.isFilled = !1, this.masked.remove(e, t)) : new V();
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
		if (t === void 0 && (t = {}), this.isFilled) return new V();
		let n = this.masked.state, r = this.masked._appendChar(e, this.currentMaskFlags(t));
		return r.inserted && this.doValidate(t) === !1 && (r = new V(), this.masked.state = n), !r.inserted && !this.isOptional && !this.lazy && !t.input && (r.inserted = this.placeholderChar), r.skip = !r.inserted && !this.isOptional, this.isFilled = !!r.inserted, r;
	}
	append(e, t, n) {
		return this.masked.append(e, this.currentMaskFlags(t), n);
	}
	_appendPlaceholder() {
		return this.isFilled || this.isOptional ? new V() : (this.isFilled = !0, new V({ inserted: this.placeholderChar }));
	}
	_appendEager() {
		return new V();
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
		t === void 0 && (t = z.NONE);
		let n = this.value.length, r = Math.min(Math.max(e, 0), n);
		switch (t) {
			case z.LEFT:
			case z.FORCE_LEFT: return this.isComplete ? r : 0;
			case z.RIGHT:
			case z.FORCE_RIGHT: return this.isComplete ? r : n;
			case z.NONE:
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
		return new V();
	}
};
bi.DEFAULT_DEFINITIONS = {
	0: /\d/,
	a: /[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
	"*": /./
}, B.MaskedRegExp = class extends gi {
	updateOptions(e) {
		super.updateOptions(e);
	}
	_update(e) {
		let t = e.mask;
		t && (e.validate = (e) => e.search(t) >= 0), super._update(e);
	}
};
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/pattern.js
var xi = class e extends gi {
	constructor(t) {
		super({
			...e.DEFAULTS,
			...t,
			definitions: Object.assign({}, bi.DEFAULT_DEFINITIONS, t?.definitions)
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
					let { expose: e, repeat: t, ...n } = oi(this.blocks[r]), i = {
						lazy: this.lazy,
						eager: this.eager,
						placeholderChar: this.placeholderChar,
						displayChar: this.displayChar,
						overwrite: this.overwrite,
						autofix: this.autofix,
						...n,
						repeat: t,
						parent: this
					}, o = t == null ? si(i) : new B.RepeatBlock(i);
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
			let c = s ? new bi({
				isOptional: i,
				lazy: this.lazy,
				eager: this.eager,
				placeholderChar: this.placeholderChar,
				displayChar: this.displayChar,
				...oi(t[o]),
				parent: this
			}) : new yi({
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
		let e = new V(), t = this._mapPosToBlock(this.displayValue.length)?.index;
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
		let n = this._mapPosToBlock(this.displayValue.length), r = new V();
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
		let n = new _i();
		return e === t || this._forEachBlocksInRange(e, t, (e, t, r, i) => {
			let a = e.extractTail(r, i);
			a.stop = this._findStopBefore(t), a.from = this._blockStartPos(t), a instanceof _i && (a.blockIndex = t), n.extend(a);
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
		let t = new V();
		if (this.lazy && e == null) return t;
		let n = this._mapPosToBlock(this.displayValue.length);
		if (!n) return t;
		let r = n.index, i = e ?? this._blocks.length;
		return this._blocks.slice(r, i).forEach((n) => {
			(!n.lazy || e != null) && t.aggregate(n._appendPlaceholder(n._blocks?.length));
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
		if (t === void 0 && (t = z.NONE), !this._blocks.length) return 0;
		let n = new vi(this, e);
		if (t === z.NONE) return n.pushRightBeforeInput() || (n.popState(), n.pushLeftBeforeInput()) ? n.pos : this.displayValue.length;
		if (t === z.LEFT || t === z.FORCE_LEFT) {
			if (t === z.LEFT) {
				if (n.pushRightBeforeFilled(), n.ok && n.pos === e) return e;
				n.popState();
			}
			if (n.pushLeftBeforeInput(), n.pushLeftBeforeRequired(), n.pushLeftBeforeFilled(), t === z.LEFT) {
				if (n.pushRightBeforeInput(), n.pushRightBeforeRequired(), n.ok && n.pos <= e || (n.popState(), n.ok && n.pos <= e)) return n.pos;
				n.popState();
			}
			return n.ok ? n.pos : t === z.FORCE_LEFT ? 0 : (n.popState(), n.ok || (n.popState(), n.ok) ? n.pos : 0);
		}
		return t === z.RIGHT || t === z.FORCE_RIGHT ? (n.pushRightBeforeInput(), n.pushRightBeforeRequired(), n.pushRightBeforeFilled() ? n.pos : t === z.FORCE_RIGHT ? this.displayValue.length : (n.popState(), n.ok || (n.popState(), n.ok) ? n.pos : this.nearestInputPos(e, z.LEFT))) : e;
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
		let t = new V();
		return this._forEachBlocksInRange(0, this.displayValue.length, (n) => t.aggregate(n.pad(e))), t;
	}
};
xi.DEFAULTS = {
	...gi.DEFAULTS,
	lazy: !0,
	placeholderChar: "_"
}, xi.STOP_CHAR = "`", xi.ESCAPE_CHAR = "\\", xi.InputDefinition = bi, xi.FixedDefinition = yi, B.MaskedPattern = xi;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/range.js
var Si = class extends xi {
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
		let t = new V();
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
B.MaskedRange = Si;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/date.js
var Ci = "d{.}`m{.}`Y", wi = class e extends xi {
	static extractPatternOptions(e) {
		let { mask: t, pattern: n, ...r } = e;
		return {
			...r,
			mask: Qr(t) ? t : n
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
			mask: Qr(n) ? n : r,
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
wi.GET_DEFAULT_BLOCKS = () => ({
	d: {
		mask: Si,
		from: 1,
		to: 31,
		maxLength: 2
	},
	m: {
		mask: Si,
		from: 1,
		to: 12,
		maxLength: 2
	},
	Y: {
		mask: Si,
		from: 1900,
		to: 9999
	}
}), wi.DEFAULTS = {
	...xi.DEFAULTS,
	mask: Date,
	pattern: Ci,
	format: (e, t) => e ? [
		String(e.getDate()).padStart(2, "0"),
		String(e.getMonth() + 1).padStart(2, "0"),
		e.getFullYear()
	].join(".") : "",
	parse: (e, t) => {
		let [n, r, i] = e.split(".").map(Number);
		return new Date(i, r - 1, n);
	}
}, B.MaskedDate = wi;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/dynamic.js
var Ti = class e extends gi {
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
			let { expose: t, ...n } = oi(e), r = si({
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
		let r = t.tail && t._beforeTailState != null ? t._beforeTailState._value : this.value, i = this.rawInputValue, a = t.tail && t._beforeTailState != null ? t._beforeTailState._rawInputValue : i, o = i.slice(a.length), s = this.currentMask, c = new V(), l = s?.state;
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
		let t = new V();
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
		let n = new V();
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
			return ri(t, i) && t.maskEquals(r);
		}) : super.maskEquals(e);
	}
	typedValueEquals(e) {
		return !!this.currentMask?.typedValueEquals(e);
	}
};
Ti.DEFAULTS = {
	...gi.DEFAULTS,
	dispatch: (e, t, n, r) => {
		if (!t.compiledMasks.length) return;
		let i = t.rawInputValue, a = t.compiledMasks.map((a, o) => {
			let s = t.currentMask === a, c = s ? a.displayValue.length : a.nearestInputPos(a.displayValue.length, z.FORCE_LEFT);
			return a.rawInputValue === i ? s || a.remove(c) : (a.reset(), a.append(i, { raw: !0 })), a.append(e, t.currentMaskFlags(n)), a.appendTail(r), {
				index: o,
				weight: a.rawInputValue.length,
				totalInputPositions: a.totalInputPositions(0, Math.max(c, a.nearestInputPos(a.displayValue.length, z.FORCE_LEFT)))
			};
		});
		return a.sort((e, t) => t.weight - e.weight || t.totalInputPositions - e.totalInputPositions), t.compiledMasks[a[0].index];
	}
}, B.MaskedDynamic = Ti;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/enum.js
var Ei = class e extends xi {
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
		let n = Math.min(this.nearestInputPos(0, z.FORCE_RIGHT), this.value.length), r = this.enum.filter((t) => this.matchValue(t, this.unmaskedValue + e, n));
		if (r.length) {
			r.length === 1 && this._forEachBlocksInRange(0, this.value.length, (e, n) => {
				let i = r[0][n];
				n >= this.value.length || i === e.value || (e.reset(), e._appendChar(i, t));
			});
			let e = super._appendCharRaw(r[0][this.value.length], t);
			return r.length === 1 && r[0].slice(this.unmaskedValue.length).split("").forEach((t) => e.aggregate(super._appendCharRaw(t))), e;
		}
		return new V({ skip: !this.isComplete });
	}
	extractTail(e, t) {
		return e === void 0 && (e = 0), t === void 0 && (t = this.displayValue.length), new hi("", e);
	}
	remove(e, t) {
		if (e === void 0 && (e = 0), t === void 0 && (t = this.displayValue.length), e === t) return new V();
		let n = Math.min(super.nearestInputPos(0, z.FORCE_RIGHT), this.value.length), r;
		for (r = e; r >= 0 && !(this.enum.filter((e) => this.matchValue(e, this.value.slice(n, r), n)).length > 1); --r);
		let i = super.remove(r, t);
		return i.tailShift += r - e, i;
	}
	get isComplete() {
		return this.enum.indexOf(this.value) >= 0;
	}
};
Ei.DEFAULTS = {
	...xi.DEFAULTS,
	matchValue: (e, t, n) => e.indexOf(t, n) === n
}, B.MaskedEnum = Ei, B.MaskedFunction = class extends gi {
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
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/number.js
var Di, Oi = class e extends gi {
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
		let e = "^" + (this.allowNegative ? "[+|\\-]?" : ""), t = (this.scale ? "(" + ni(this.radix) + "\\d{0," + this.scale + "})?" : "") + "$";
		this._numberRegExp = RegExp(e + "\\d*" + t), this._mapToRadixRegExp = RegExp("[" + this.mapToRadix.map(ni).join("") + "]", "g"), this._thousandsSeparatorRegExp = new RegExp(ni(this.thousandsSeparator), "g");
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
		s ? l = new V({
			inserted: this._value.slice(a.length),
			rawInserted: c ? "" : t,
			skip: c
		}) : (this._value = a, l = new V()), this._value = this._insertThousandsSeparators(this._value);
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
		return this._value = this._insertThousandsSeparators(this._removeThousandsSeparators(n + r)), new V({ tailShift: (this._separatorsCountFromSlice(n) - i) * this.thousandsSeparator.length });
	}
	nearestInputPos(e, t) {
		if (!this.thousandsSeparator) return e;
		switch (t) {
			case z.NONE:
			case z.LEFT:
			case z.FORCE_LEFT: {
				let n = this._findSeparatorAround(e - 1);
				if (n >= 0) {
					let r = n + this.thousandsSeparator.length;
					if (e < r || this.value.length <= r || t === z.FORCE_LEFT) return n;
				}
				break;
			}
			case z.RIGHT:
			case z.FORCE_RIGHT: {
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
		return (super.typedValueEquals(t) || e.EMPTY_VALUES.includes(t) && e.EMPTY_VALUES.includes(this.typedValue)) && !(t === 0 && this.value === "");
	}
};
Di = Oi, Oi.UNMASKED_RADIX = ".", Oi.EMPTY_VALUES = [...gi.EMPTY_VALUES, 0], Oi.DEFAULTS = {
	...gi.DEFAULTS,
	mask: Number,
	radix: ",",
	thousandsSeparator: "",
	mapToRadix: [Di.UNMASKED_RADIX],
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
}, B.MaskedNumber = Oi;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/pipe.js
var ki = {
	MASKED: "value",
	UNMASKED: "unmaskedValue",
	TYPED: "typedValue"
};
function Ai(e, t, n) {
	t === void 0 && (t = ki.MASKED), n === void 0 && (n = ki.MASKED);
	let r = si(e);
	return (e) => r.runIsolated((r) => (r[t] = e, r[n]));
}
function ji(e, t, n, r) {
	return Ai(t, n, r)(e);
}
B.PIPE_TYPE = ki, B.createPipe = Ai, B.pipe = ji, B.RepeatBlock = class extends xi {
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
		let { repeat: t, ...n } = oi(e);
		this._blockOpts = Object.assign({}, this._blockOpts, n);
		let r = si(this._blockOpts);
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
		if (this.repeatTo === Infinity || this._blocks.length < this.repeatTo) return this._blocks.push(si(this._blockOpts)), this.mask += "m", this._blocks[this._blocks.length - 1];
	}
	_appendCharRaw(e, t) {
		t === void 0 && (t = {});
		let n = new V();
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
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/index.js
try {
	globalThis.IMask = B;
} catch {}
//#endregion
//#region node_modules/.pnpm/react-imask@7.6.1_react@18.3.1/node_modules/react-imask/esm/mixin.js
var Mi = {
	mask: R.default.oneOfType([
		R.default.array,
		R.default.func,
		R.default.string,
		R.default.instanceOf(RegExp),
		R.default.oneOf([
			Date,
			Number,
			B.Masked
		]),
		R.default.instanceOf(B.Masked)
	]),
	value: R.default.any,
	unmask: R.default.oneOfType([R.default.bool, R.default.oneOf(["typed"])]),
	prepare: R.default.func,
	prepareChar: R.default.func,
	validate: R.default.func,
	commit: R.default.func,
	overwrite: R.default.oneOfType([R.default.bool, R.default.oneOf(["shift"])]),
	eager: R.default.oneOfType([R.default.bool, R.default.oneOf(["append", "remove"])]),
	skipInvalid: R.default.bool,
	onAccept: R.default.func,
	onComplete: R.default.func,
	placeholderChar: R.default.string,
	displayChar: R.default.string,
	lazy: R.default.bool,
	definitions: R.default.object,
	blocks: R.default.object,
	enum: R.default.arrayOf(R.default.string),
	maxLength: R.default.number,
	from: R.default.number,
	to: R.default.number,
	pattern: R.default.string,
	format: R.default.func,
	parse: R.default.func,
	autofix: R.default.oneOfType([R.default.bool, R.default.oneOf(["pad"])]),
	radix: R.default.string,
	thousandsSeparator: R.default.string,
	mapToRadix: R.default.arrayOf(R.default.string),
	scale: R.default.number,
	normalizeZeros: R.default.bool,
	padFractionalZeros: R.default.bool,
	min: R.default.oneOfType([R.default.number, R.default.instanceOf(Date)]),
	max: R.default.oneOfType([R.default.number, R.default.instanceOf(Date)]),
	dispatch: R.default.func,
	inputRef: R.default.oneOfType([R.default.func, R.default.shape({ current: R.default.object })])
}, Ni = Object.keys(Mi).filter((e) => e !== "value"), Pi = [
	"value",
	"unmask",
	"onAccept",
	"onComplete",
	"inputRef"
], Fi = Ni.filter((e) => Pi.indexOf(e) < 0);
function Ii(e) {
	var t;
	let n = (t = class extends I.Component {
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
			e === void 0 && (e = this._extractMaskOptionsFromProps(this.props)), this.maskRef = B(this.element, e).on("accept", this._onAccept.bind(this)).on("complete", this._onComplete.bind(this)), "value" in this.props && this.props.value !== void 0 && (this.maskValue = this.props.value);
		}
		destroyMask() {
			this.maskRef && (this.maskRef.destroy(), delete this.maskRef);
		}
		_extractMaskOptionsFromProps(e) {
			let { ...t } = e;
			return Object.keys(t).filter((e) => Fi.indexOf(e) < 0).forEach((e) => {
				delete t[e];
			}), t;
		}
		_extractNonMaskProps(e) {
			let { ...t } = e;
			return Ni.forEach((e) => {
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
			return I.createElement(e, {
				...this._extractNonMaskProps(this.props),
				inputRef: this._inputRef
			});
		}
	}, t.displayName = void 0, t.propTypes = void 0, t);
	return n.displayName = "IMask(" + (e.displayName || e.name || "Component") + ")", n.propTypes = Mi, I.forwardRef((e, t) => I.createElement(n, {
		...e,
		ref: t
	}));
}
//#endregion
//#region node_modules/.pnpm/react-imask@7.6.1_react@18.3.1/node_modules/react-imask/esm/input.js
var Li = Ii((e) => {
	let { inputRef: t, ...n } = e;
	return I.createElement("input", {
		...n,
		ref: t
	});
}), Ri = I.forwardRef((e, t) => I.createElement(Li, {
	...e,
	ref: t
})), zi = (e = {}) => Object.entries(e).reduce((e, [t, n]) => (n !== void 0 && (e[t] = n), e), {}), Bi = (...e) => (t) => {
	e.filter((e) => typeof e == "function").forEach((e) => e(t));
}, Vi = ({ defaultValue: e, value: t }) => {
	let [n, r] = (0, I.useState)(!!e || e === 0);
	return [!!t || t === 0 || n, (e) => r(!!e.target.value)];
}, Hi = (e, t) => {
	let [n, r] = (0, I.useState)(t || []), i = (e) => (r((t) => [...t, e]), e), a = () => i(oe(`${e}-`)), o = (e) => {
		r((t) => t.filter((t) => t !== e));
	};
	return [n, (e) => {
		let [t, n] = (0, I.useState)(e);
		return (0, I.useEffect)(() => (e ? i(e) : t || n(a()), () => o(t)), [t, e]), t;
	}];
}, Ui = (e) => e, Wi = /* @__PURE__ */ I.createContext({
	getControlProps: Ui,
	useSetIsControlGroupEffect: () => {},
	getLabelProps: Ui,
	getDescriptorProps: Ui,
	hasFormGroupProvider: !1
}), Gi = () => I.useContext(Wi);
function Ki(e) {
	let [t, n] = (0, I.useState)(e);
	return [t, (e) => {
		(0, I.useEffect)(() => n(e), [e]);
	}];
}
function qi({ children: e, controlId: t, isInvalid: n, isValid: r, size: i }) {
	let a = (0, I.useMemo)(() => t || oe("form-field"), [t]), [o, s] = Hi(a), [c, l] = Hi(a), [u, d] = Ki(!1), f = {
		getControlProps: (0, I.useCallback)((e) => {
			let t = u ? c : void 0;
			return zi({
				...e,
				"aria-describedby": (0, L.default)(e["aria-describedby"], o) || void 0,
				"aria-labelledby": (0, L.default)(e["aria-labelledby"], t) || void 0,
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
	return /* @__PURE__ */ I.createElement(Wi.Provider, { value: f }, e);
}
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/constants.js
var Ji = {
	SMALL: "sm",
	LARGE: "lg"
}, Yi = {
	DEFAULT: "default",
	VALID: "valid",
	INVALID: "invalid",
	WARNING: "warning",
	CRITERIA_EMPTY: "criteria-empty",
	CRITERIA_VALID: "criteria-valid",
	CRITERIA_INVALID: "criteria-invalid"
}, Xi = {
	[Yi.DEFAULT]: null,
	[Yi.VALID]: Hr,
	[Yi.INVALID]: Wr,
	[Yi.WARNING]: Zr,
	[Yi.CRITERIA_EMPTY]: Xr,
	[Yi.CRITERIA_VALID]: Ur,
	[Yi.CRITERIA_INVALID]: Vr
}, Zi = ({ isInvalid: e, isValid: t }) => t ? Yi.VALID : e ? Yi.INVALID : Yi.DEFAULT;
function Qi({ type: e, customIcon: t }) {
	if (t) return t;
	let n = Xi[e];
	return n ? /* @__PURE__ */ I.createElement(de, { src: n }) : null;
}
Qi.propTypes = {
	type: R.default.oneOf(Object.values(Yi)),
	customIcon: R.default.node
}, Qi.defaultProps = {
	type: void 0,
	customIcon: void 0
};
function $i({ children: e, type: t, icon: n, muted: r, hasIcon: i, ...a }) {
	let o = (0, L.default)(a.className, "pgn__form-text", `pgn__form-text-${t}`, { "text-muted": r });
	return /* @__PURE__ */ I.createElement("div", {
		...a,
		className: o
	}, i && /* @__PURE__ */ I.createElement(Qi, {
		customIcon: n,
		type: t
	}), /* @__PURE__ */ I.createElement("div", null, e));
}
$i.propTypes = {
	children: R.default.node.isRequired,
	className: R.default.string,
	hasIcon: R.default.bool,
	type: R.default.oneOf([
		"default",
		"valid",
		"invalid",
		"warning",
		"criteria-empty",
		"criteria-valid",
		"criteria-invalid"
	]),
	icon: R.default.node,
	muted: R.default.bool
}, $i.defaultProps = {
	hasIcon: !0,
	type: "default",
	icon: void 0,
	className: void 0,
	muted: !1
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormControlFeedback.js
function ea({ children: e, ...t }) {
	let { getDescriptorProps: n, isInvalid: r, isValid: i } = Gi(), a = n(t), o = (0, L.default)("pgn__form-control-description", t.className), s = t.type || Zi({
		isInvalid: r,
		isValid: i
	});
	return /* @__PURE__ */ I.createElement($i, {
		...a,
		className: o,
		type: s
	}, e);
}
ea.propTypes = {
	children: R.default.node.isRequired,
	className: R.default.string,
	hasIcon: R.default.bool,
	type: R.default.oneOf([
		"default",
		"valid",
		"invalid",
		"warning",
		"criteria-empty",
		"criteria-valid",
		"criteria-invalid"
	]),
	icon: R.default.node,
	muted: R.default.bool
}, ea.defaultProps = {
	hasIcon: !0,
	type: void 0,
	icon: void 0,
	className: void 0,
	muted: !1
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormControlFloatingLabel.js
function ta({ children: e }) {
	let { controlId: t } = Gi();
	return /* @__PURE__ */ I.createElement("div", { className: "pgn__form-control-floating-label" }, /* @__PURE__ */ I.createElement("div", { className: "pgn__form-control-floating-label-content" }, /* @__PURE__ */ I.createElement("label", {
		className: "pgn__form-control-floating-label-text",
		htmlFor: t
	}, e)));
}
ta.propTypes = { children: R.default.node.isRequired };
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormControlDecorator.js
function na({ children: e, location: t }) {
	return /* @__PURE__ */ I.createElement("div", { className: `pgn__form-control-decorator pgn__form-control-decorator-${t}` }, e);
}
na.propTypes = {
	children: R.default.node.isRequired,
	location: R.default.oneOf(["leading", "trailing"])
}, na.defaultProps = { location: "leading" };
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormControlDecoratorGroup.js
function ra({ children: e, leadingElement: t, trailingElement: n, floatingLabel: r, className: i, ...a }) {
	let o = Gi(a), s = a.size || o.size;
	return /* @__PURE__ */ I.createElement("div", {
		className: (0, L.default)("pgn__form-control-decorator-group", {
			"has-prepended-node": !!t,
			"has-appended-node": !!n,
			"has-leading-element": !!t,
			"has-trailing-element": !!n,
			"has-floating-label": !!r,
			"pgn__form-control-decorator-group-lg": s === Ji.LARGE,
			"pgn__form-control-decorator-group-sm": s === Ji.SMALL
		}, i),
		...a
	}, e, t && /* @__PURE__ */ I.createElement(na, { location: "leading" }, t), n && /* @__PURE__ */ I.createElement(na, { location: "trailing" }, n), r && /* @__PURE__ */ I.createElement(ta, null, r));
}
ra.propTypes = {
	children: R.default.node.isRequired,
	leadingElement: R.default.node,
	trailingElement: R.default.node,
	floatingLabel: R.default.node,
	className: R.default.string,
	size: R.default.oneOf([Ji.SMALL, Ji.LARGE])
}, ra.defaultProps = {
	leadingElement: void 0,
	trailingElement: void 0,
	floatingLabel: void 0,
	className: void 0,
	size: void 0
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormControl.js
var ia = /* @__PURE__ */ I.forwardRef(({ as: e, className: t, controlClassName: n, leadingElement: r, trailingElement: i, floatingLabel: a, autoResize: o, onChange: s, inputMask: c, ...l }, u) => {
	let { isInvalid: d, isValid: f, getControlProps: p, ...m } = Gi(), h = I.useRef(), g = u || h, _ = l.size || m.size, [v, y] = Vi({
		defaultValue: l.defaultValue,
		value: l.value
	}), b = (0, I.useCallback)(() => {
		e === "textarea" && o && (!g.current.initialHeight && !g.current.offsets && (g.current.initialHeight = g.current.offsetHeight, g.current.offsets = g.current.offsetHeight - g.current.clientHeight), g.current.style.height = `${g.current.initialHeight}px`, g.current.style.height = `${g.current.scrollHeight + g.current.offsets}px`);
	}, [
		e,
		o,
		g
	]);
	(0, I.useEffect)(() => {
		b();
	}, [b]);
	let x = p({
		...l,
		onBlur: Bi(y, l.onBlur)
	}), S = (e) => {
		b(), s && s(e);
	};
	return /* @__PURE__ */ I.createElement(ra, {
		size: _,
		leadingElement: r,
		trailingElement: i,
		floatingLabel: a,
		className: t
	}, /* @__PURE__ */ I.createElement(en, {
		as: c ? Ri : e,
		ref: g,
		size: _,
		isInvalid: d,
		isValid: f,
		className: (0, L.default)(n, { "has-value": v }),
		onChange: S,
		mask: c,
		...x
	}));
});
ia.Feedback = ea, ia.Description = ea, ia.propTypes = {
	className: R.default.string,
	as: R.default.elementType,
	onChange: R.default.func,
	defaultValue: R.default.oneOfType([R.default.string, R.default.number]),
	value: R.default.oneOfType([R.default.string, R.default.number]),
	id: R.default.string,
	controlClassName: R.default.string,
	size: R.default.oneOf(["sm", "lg"]),
	leadingElement: R.default.node,
	trailingElement: R.default.node,
	floatingLabel: R.default.node,
	plaintext: R.default.bool,
	isValid: R.default.bool,
	isInvalid: R.default.bool,
	autoResize: R.default.bool,
	inputMask: R.default.string
}, ia.defaultProps = {
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
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormLabel.js
function aa({ children: e, isInline: t = !1, ...n }) {
	let { size: r, isControlGroup: i, getLabelProps: a } = Gi(), o = (0, L.default)("pgn__form-label", {
		"pgn__form-label-inline": t,
		"pgn__form-label-lg": r === Ji.LARGE,
		"pgn__form-label-sm": r === Ji.SMALL
	}, n.className), s = a({
		...n,
		className: o
	}), c = i ? "p" : "label";
	return /* @__PURE__ */ I.createElement(c, s, e);
}
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormGroup.js
function oa({ children: e, controlId: t, isInvalid: n = !1, isValid: r = !1, size: i, as: a, ...o }) {
	return /* @__PURE__ */ I.createElement(a ?? "div", {
		...o,
		className: (0, L.default)("pgn__form-group", o.className)
	}, /* @__PURE__ */ I.createElement(qi, {
		controlId: t,
		isInvalid: n,
		isValid: r,
		size: i
	}, e));
}
var sa = /* @__PURE__ */ I.createContext({
	getRadioControlProps: (e) => e,
	hasRadioSetProvider: !1
}), ca = () => (0, I.useContext)(sa);
function la({ children: e, name: t, onBlur: n, onFocus: r, onChange: i, value: a, defaultValue: o }) {
	let s = !o && a !== void 0, c = {
		name: t,
		value: a,
		defaultValue: o,
		getRadioControlProps: (e) => ({
			...e,
			name: t,
			onBlur: e.onBlur ? Bi(n, e.onBlur) : n,
			onFocus: e.onFocus ? Bi(r, e.onFocus) : r,
			onChange: e.onChange ? Bi(i, e.onChange) : i,
			checked: s ? a === e.value : void 0,
			defaultChecked: s ? void 0 : o === e.value
		}),
		onBlur: n,
		onFocus: r,
		onChange: i,
		hasRadioSetProvider: !0
	};
	return /* @__PURE__ */ I.createElement(sa.Provider, { value: c }, e);
}
la.propTypes = {
	children: R.default.node.isRequired,
	name: R.default.string.isRequired,
	onBlur: R.default.func,
	onFocus: R.default.func,
	onChange: R.default.func,
	value: R.default.string,
	defaultValue: R.default.string
}, la.defaultProps = {
	onBlur: void 0,
	onFocus: void 0,
	onChange: void 0,
	value: void 0,
	defaultValue: void 0
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormRadio.js
var ua = /* @__PURE__ */ I.forwardRef((e, t) => {
	let { getControlProps: n } = Gi(), { getRadioControlProps: r, hasRadioSetProvider: i } = ca(), a = n({
		...e,
		className: (0, L.default)("pgn__form-radio-input", e.className)
	});
	return i && (a = r(a)), /* @__PURE__ */ I.createElement("input", {
		...a,
		type: "radio",
		ref: t
	});
});
ua.propTypes = { className: R.default.string }, ua.defaultProps = { className: void 0 };
var da = /* @__PURE__ */ I.forwardRef(({ children: e, className: t, controlClassName: n, labelClassName: r, description: i, isInvalid: a, isValid: o, ...s }, c) => /* @__PURE__ */ I.createElement(qi, {
	controlId: s.id,
	isInvalid: a,
	isValid: o
}, /* @__PURE__ */ I.createElement("div", { className: (0, L.default)("pgn__form-radio", t, {
	"pgn__form-control-valid": o,
	"pgn__form-control-invalid": a,
	"pgn__form-control-disabled": s.disabled
}) }, /* @__PURE__ */ I.createElement(ua, {
	ref: c,
	className: n,
	...s
}), /* @__PURE__ */ I.createElement("div", null, /* @__PURE__ */ I.createElement(aa, { className: r }, e), i && /* @__PURE__ */ I.createElement(ea, { hasIcon: !1 }, i)))));
da.propTypes = {
	id: R.default.string,
	children: R.default.node.isRequired,
	className: R.default.string,
	controlClassName: R.default.string,
	labelClassName: R.default.string,
	description: R.default.node,
	isInvalid: R.default.bool,
	isValid: R.default.bool,
	disabled: R.default.bool
}, da.defaultProps = {
	id: void 0,
	className: void 0,
	controlClassName: void 0,
	labelClassName: void 0,
	description: void 0,
	isInvalid: !1,
	isValid: !1,
	disabled: !1
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormControlSet.js
function fa({ as: e, className: t, isInline: n, children: r, ...i }) {
	return /* @__PURE__ */ I.createElement(e, {
		className: (0, L.default)(t, {
			"pgn__form-control-set": !n,
			"pgn__form-control-set-inline": n
		}),
		...i
	}, r);
}
fa.propTypes = {
	as: R.default.elementType,
	className: R.default.string,
	isInline: R.default.bool,
	children: R.default.node
}, fa.defaultProps = {
	as: "div",
	className: void 0,
	isInline: !1,
	children: null
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormRadioSet.js
function pa({ children: e, name: t, value: n, defaultValue: r, isInline: i, onChange: a, onFocus: o, onBlur: s, ...c }) {
	let { getControlProps: l, useSetIsControlGroupEffect: u } = Gi();
	u(!0);
	let d = l(c);
	return /* @__PURE__ */ I.createElement(la, {
		name: t,
		value: n,
		defaultValue: r,
		onFocus: o,
		onBlur: s,
		onChange: a
	}, /* @__PURE__ */ I.createElement(fa, {
		role: "radiogroup",
		isInline: i,
		...d
	}, e));
}
pa.propTypes = {
	children: R.default.node.isRequired,
	className: R.default.string,
	name: R.default.string.isRequired,
	value: R.default.string,
	defaultValue: R.default.string,
	isInline: R.default.bool,
	onChange: R.default.func,
	onFocus: R.default.func,
	onBlur: R.default.func
}, pa.defaultProps = {
	className: void 0,
	value: void 0,
	defaultValue: void 0,
	isInline: !1,
	onChange: void 0,
	onFocus: void 0,
	onBlur: void 0
};
//#endregion
//#region node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/rng.js
var ma, ha = new Uint8Array(16);
function ga() {
	if (!ma && (ma = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !ma)) throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
	return ma(ha);
}
//#endregion
//#region node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/stringify.js
var _a = [];
for (let e = 0; e < 256; ++e) _a.push((e + 256).toString(16).slice(1));
function va(e, t = 0) {
	return _a[e[t + 0]] + _a[e[t + 1]] + _a[e[t + 2]] + _a[e[t + 3]] + "-" + _a[e[t + 4]] + _a[e[t + 5]] + "-" + _a[e[t + 6]] + _a[e[t + 7]] + "-" + _a[e[t + 8]] + _a[e[t + 9]] + "-" + _a[e[t + 10]] + _a[e[t + 11]] + _a[e[t + 12]] + _a[e[t + 13]] + _a[e[t + 14]] + _a[e[t + 15]];
}
var ya = { randomUUID: typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto) };
//#endregion
//#region node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/v4.js
function ba(e, t, n) {
	if (ya.randomUUID && !t && !e) return ya.randomUUID();
	e ||= {};
	let r = e.random || (e.rng || ga)();
	if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, t) {
		n ||= 0;
		for (let e = 0; e < 16; ++e) t[n + e] = r[e];
		return t;
	}
	return va(r);
}
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/utils/propTypes/utils.js
var xa = (e, t, n) => ((r, i, a, ...o) => t(r) && r[i] === void 0 ? /* @__PURE__ */ Error(`${a}: ${i} is required when ${n}`) : e(r, i, a, ...o)), Sa = (e, t) => t.every((t) => e[t] !== void 0), Ca = (e, t) => xa(e, (e) => Array.isArray(t) ? Sa(e, t) : e[t] === !0, `${t} ${Array.isArray(t) ? "are defined" : "is truthy"}`), wa = /* @__PURE__ */ I.forwardRef(({ className: e, screenReaderText: t, ...n }, r) => {
	let i = {
		...n,
		className: (0, L.default)("pgn__spinner", e),
		role: t ? "status" : void 0
	};
	return /* @__PURE__ */ I.createElement(qn, {
		...i,
		ref: r
	}, t && /* @__PURE__ */ I.createElement("span", { className: "sr-only" }, t));
});
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/hooks/useArrowKeyNavigationHook.js
function Ta({ event: e, currentIndex: t, activeElement: n }) {
	t !== -1 && (n.click(), e.preventDefault());
}
function Ea({ event: e, currentIndex: t, availableElements: n }) {
	t === -1 && n[0].focus();
	let r;
	(e.key === "ArrowDown" || e.key === "ArrowRight") && (r = n[(t + 1) % n.length]), (e.key === "ArrowUp" || e.key === "ArrowLeft") && (r = t - 1 < 0 ? n[t - 1 + n.length] : n[t - 1]), e.key === "End" && (r = n[n.length - 1]), e.key === "Home" && ([r] = n), r?.focus(), e.preventDefault();
}
function Da({ event: e, ignoredKeys: t = [], parentNode: n, selectors: r = "a,button,input" }) {
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
	i === "Enter" && a && Ta({
		event: e,
		currentIndex: s,
		activeElement: a
	}), Ea({
		event: e,
		currentIndex: s,
		availableElements: o
	});
}
function Oa(e = {}) {
	let { selectors: t, ignoredKeys: n } = e, r = (0, I.useRef)();
	return (0, I.useEffect)(() => {
		let e = (e) => {
			Da({
				event: e,
				ignoredKeys: n,
				parentNode: r.current,
				selectors: t
			});
		};
		return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e);
	}, [n, t]), r;
}
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/messages.js
var ka = T({
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
}), Aa = /* @__PURE__ */ (0, I.forwardRef)(({ children: e, arrowKeyNavigationSelector: t, ignoredArrowKeysNames: n, screenReaderText: r, value: i, isLoading: a, isValueRequired: o, valueRequiredErrorMessageText: s, isSelectionRequired: c, selectionRequiredErrorMessageText: l, hasCustomError: u, customErrorMessageText: d, onChange: f, helpMessage: p, ...m }, h) => {
	let g = E(), _ = (0, I.useRef)(), v = Oa({
		selectors: t,
		ignoredKeys: n
	}), [y, b] = (0, I.useState)(!1), [x, S] = (0, I.useState)(!1), [C, w] = (0, I.useState)(!1), [T, D] = (0, I.useState)(!1), [O, k] = (0, I.useState)(i?.userProvidedText || ""), [A, j] = (0, I.useState)([]), [ee, M] = (0, I.useState)(null), [N, te] = (0, I.useState)(!0), [P, ne] = (0, I.useState)(""), re = (e) => {
		M(e);
	}, ie = () => {
		j([]), b(!1), M(null);
	}, ae = (e, t) => {
		let n = e.currentTarget.getAttribute("data-value"), r = e.currentTarget.id;
		w(!0), D(!0), k(n), f && (!i || i && n !== i.selectionValue) && f({
			userProvidedText: n,
			selectionValue: n,
			selectionId: r
		}), ie(), t && t(e);
	};
	function oe(t = "") {
		let n = I.Children.map(e, (e) => {
			let { children: t, onClick: n, ...r } = e.props, i = e.props.id ?? ba();
			return /* @__PURE__ */ I.cloneElement(e, {
				...r,
				children: t,
				"data-value": t,
				onClick: (e) => ae(e, n),
				id: i,
				onFocus: () => re(i)
			});
		});
		return t.length > 0 && (n = n.filter((e) => e.props.children.toLowerCase().includes(t.toLowerCase()))), n;
	}
	let se = () => {
		j(oe(O)), te(!0), ne(""), b(!0);
	}, ce = () => {
		y ? ie() : se();
	}, ue = /* @__PURE__ */ I.createElement(le, {
		className: "pgn__form-autosuggest__icon-button",
		"data-testid": "autosuggest-iconbutton",
		tabIndex: "-1",
		src: y ? Yr : Jr,
		iconAs: de,
		size: "sm",
		variant: "secondary",
		alt: y ? g.formatMessage(ka.iconButtonClosed) : g.formatMessage(ka.iconButtonOpened),
		onClick: ce
	}), fe = () => {
		S(!0);
	}, pe = () => {
		if (u) {
			te(!1), ne(d);
			return;
		}
		if (o && !C) {
			te(!1), ne(s);
			return;
		}
		if (C && c && !T) {
			te(!1), ne(l);
			return;
		}
		te(!0), ne("");
	};
	(0, I.useImperativeHandle)(h, () => ({ updateErrorStateAndErrorMessage: pe }));
	let me = () => {
		S(!1), ie(), pe();
	}, he = (e) => {
		if (x) {
			if (e.key === "Escape") {
				e.preventDefault(), _ && _.current.focus(), ie();
				return;
			}
			e.key === "Tab" && me();
		}
	}, ge = (e) => {
		v.current && !v.current.contains(e.target) && x && me();
	};
	(0, I.useEffect)(() => (document.addEventListener("keydown", he), document.addEventListener("click", ge, !0), () => {
		document.removeEventListener("click", ge, !0), document.removeEventListener("keydown", he);
	})), (0, I.useEffect)(() => {
		k(i ? i.userProvidedText ?? "" : ""), w(!!i && !!i.userProvidedText), D(!!i && !!i.selectionValue);
	}, [i]);
	let _e = () => {
		se();
	}, ve = (e) => {
		let t = e.target.value;
		if (!t.length) {
			k(""), w(!1), D(!1), j([]), ie(), f && f({
				userProvidedText: "",
				selectionValue: "",
				selectionId: ""
			});
			return;
		}
		w(!0);
		let n = oe(t);
		j(n);
		let r = n.find((e) => e.props.children.toLowerCase() === t.toLowerCase());
		if (!r) {
			D(!1), k(t), f && f({
				userProvidedText: t,
				selectionValue: "",
				selectionId: ""
			});
			return;
		}
		D(!0), k(r.props.children), f && f({
			userProvidedText: r.props.children,
			selectionValue: r.props.children,
			selectionId: r.props.id
		});
	}, { getControlProps: ye } = Gi(), be = ye(m);
	return /* @__PURE__ */ I.createElement("div", {
		className: "pgn__form-autosuggest__wrapper",
		ref: v,
		onFocus: fe
	}, /* @__PURE__ */ I.createElement("div", {
		"aria-live": "assertive",
		className: "sr-only",
		"data-testid": "autosuggest-screen-reader-options-count"
	}, `${A.length} options found`), /* @__PURE__ */ I.createElement(qi, {
		controlId: be.id,
		isInvalid: !N
	}, /* @__PURE__ */ I.createElement(ia, {
		ref: _,
		"aria-expanded": (A.length > 0).toString(),
		"aria-owns": "pgn__form-autosuggest__dropdown-box",
		role: "combobox",
		"aria-autocomplete": "list",
		autoComplete: "off",
		value: O,
		"aria-invalid": P,
		"aria-activedescendant": ee,
		onChange: ve,
		onClick: _e,
		trailingElement: ue,
		"data-testid": "autosuggest-textbox-input",
		...be
	}), p && N && /* @__PURE__ */ I.createElement(ea, { type: "default" }, p), !N && /* @__PURE__ */ I.createElement(ea, {
		type: "invalid",
		"feedback-for": be.name
	}, P)), /* @__PURE__ */ I.createElement("ul", {
		id: "pgn__form-autosuggest__dropdown-box",
		className: "pgn__form-autosuggest__dropdown",
		role: "listbox"
	}, a ? /* @__PURE__ */ I.createElement("div", { className: "pgn__form-autosuggest__dropdown-loading" }, /* @__PURE__ */ I.createElement(wa, {
		animation: "border",
		variant: "dark",
		screenReaderText: r,
		"data-testid": "autosuggest-loading-spinner"
	})) : A.length > 0 && A));
});
Aa.defaultProps = {
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
}, Aa.propTypes = {
	arrowKeyNavigationSelector: R.default.string,
	ignoredArrowKeysNames: R.default.arrayOf(R.default.string),
	isLoading: R.default.bool,
	className: R.default.string,
	floatingLabel: R.default.string,
	onChange: R.default.func,
	helpMessage: R.default.string,
	placeholder: R.default.string,
	value: R.default.shape({
		userProvidedText: R.default.string,
		selectionValue: R.default.string,
		selectionId: R.default.string
	}),
	isValueRequired: R.default.bool,
	valueRequiredErrorMessageText: Ca(R.default.string, "isValueRequired"),
	isSelectionRequired: R.default.bool,
	selectionRequiredErrorMessageText: Ca(R.default.string, "isSelectionRequired"),
	hasCustomError: R.default.bool,
	customErrorMessageText: Ca(R.default.string, "hasCustomError"),
	name: R.default.string,
	readOnly: R.default.bool,
	children: R.default.node,
	screenReaderText: R.default.string
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Menu/MenuItem.js
function ja({ as: e = "button", children: t, defaultSelected: n = !1, iconAfter: r, iconBefore: i, ...a }) {
	let o = (0, L.default)(a.className, "pgn__menu-item");
	return /* @__PURE__ */ (0, I.createElement)(e, {
		...a,
		className: o
	}, /* @__PURE__ */ I.createElement(I.Fragment, null, i && /* @__PURE__ */ I.createElement(de, {
		className: "btn-icon-before",
		src: i
	}), /* @__PURE__ */ I.createElement("span", { className: "pgn__menu-item-text" }, t), /* @__PURE__ */ I.createElement("span", { className: "pgn__menu-item-content-spacer" }), r && /* @__PURE__ */ I.createElement(de, {
		className: "btn-icon-after",
		src: r
	})));
}
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormAutosuggestOption.js
function Ma({ children: e, className: t, onClick: n, ...r }) {
	return /* @__PURE__ */ I.createElement(ja, {
		as: "li",
		"data-testid": "autosuggest-optionitem",
		role: "option",
		tabIndex: "-1",
		onClick: n,
		className: (0, L.default)(t, "dropdown-item"),
		...r
	}, e);
}
Ma.defaultProps = {
	className: null,
	children: null,
	onClick: null
}, Ma.propTypes = {
	className: R.default.string,
	children: R.default.string,
	onClick: R.default.func
};
var Na = /* @__PURE__ */ I.createContext({
	getCheckboxControlProps: (e) => e,
	hasCheckboxSetProvider: !1
}), Pa = () => (0, I.useContext)(Na);
function Fa({ children: e, name: t, onBlur: n, onFocus: r, onChange: i, value: a, defaultValue: o }) {
	let s = !o && Array.isArray(a), c = {
		name: t,
		value: a,
		defaultValue: o,
		getCheckboxControlProps: (e) => ({
			...e,
			name: t,
			onBlur: e.onBlur ? Bi(n, e.onBlur) : n,
			onFocus: e.onFocus ? Bi(r, e.onFocus) : r,
			onChange: e.onChange ? Bi(i, e.onChange) : i,
			checked: s ? a.includes(e.value) : void 0,
			defaultChecked: s ? void 0 : o && o.includes(e.value)
		}),
		onBlur: n,
		onFocus: r,
		onChange: i,
		hasCheckboxSetProvider: !0
	};
	return /* @__PURE__ */ I.createElement(Na.Provider, { value: c }, e);
}
Fa.propTypes = {
	children: R.default.node.isRequired,
	name: R.default.string,
	onBlur: R.default.func,
	onFocus: R.default.func,
	onChange: R.default.func,
	value: R.default.arrayOf(R.default.string),
	defaultValue: R.default.arrayOf(R.default.string)
}, Fa.defaultProps = {
	onBlur: void 0,
	name: void 0,
	onFocus: void 0,
	onChange: void 0,
	value: void 0,
	defaultValue: void 0
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormCheckbox.js
var Ia = /* @__PURE__ */ I.forwardRef(({ isIndeterminate: e, ...t }, n) => {
	let { getCheckboxControlProps: r, hasCheckboxSetProvider: i } = Pa(), a = I.useRef(), o = n || a, { getControlProps: s } = Gi(), c = s({
		...t,
		className: (0, L.default)("pgn__form-checkbox-input", t.className)
	});
	return i && (c = r(c)), I.useEffect(() => {
		o.current && (o.current.indeterminate = e);
	}, [o, e]), /* @__PURE__ */ I.createElement("input", {
		type: "checkbox",
		...c,
		ref: o
	});
});
Ia.propTypes = {
	isIndeterminate: R.default.bool,
	className: R.default.string
}, Ia.defaultProps = {
	isIndeterminate: !1,
	className: void 0
};
var La = /* @__PURE__ */ I.forwardRef(({ children: e, className: t, controlClassName: n, labelClassName: r, description: i, isInvalid: a, isValid: o, controlAs: s, floatLabelLeft: c, ...l }, u) => {
	let { hasCheckboxSetProvider: d } = Pa(), { hasFormGroupProvider: f, useSetIsControlGroupEffect: p, getControlProps: m } = Gi();
	p(!0);
	let h = f && !d ? {
		...m({}),
		role: "group"
	} : {}, g = /* @__PURE__ */ I.createElement(s, {
		...l,
		className: n,
		ref: u
	});
	return /* @__PURE__ */ I.createElement(qi, {
		controlId: l.id,
		isInvalid: a,
		isValid: o
	}, /* @__PURE__ */ I.createElement("div", {
		className: (0, L.default)("pgn__form-checkbox", t, {
			"pgn__form-control-valid": o,
			"pgn__form-control-invalid": a,
			"pgn__form-control-disabled": l.disabled,
			"pgn__form-control-label-left": !!c
		}),
		...h
	}, g, /* @__PURE__ */ I.createElement("div", null, /* @__PURE__ */ I.createElement(aa, { className: r }, e), i && /* @__PURE__ */ I.createElement(ea, { hasIcon: !1 }, i))));
});
La.propTypes = {
	id: R.default.string,
	children: R.default.node.isRequired,
	className: R.default.string,
	controlClassName: R.default.string,
	labelClassName: R.default.string,
	description: R.default.node,
	isInvalid: R.default.bool,
	isValid: R.default.bool,
	controlAs: R.default.elementType,
	floatLabelLeft: R.default.bool,
	disabled: R.default.bool
}, La.defaultProps = {
	id: void 0,
	className: void 0,
	controlClassName: void 0,
	labelClassName: void 0,
	description: void 0,
	isInvalid: !1,
	isValid: !1,
	controlAs: Ia,
	floatLabelLeft: !1,
	disabled: !1
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormSwitch.js
var Ra = /* @__PURE__ */ I.forwardRef(({ isIndeterminate: e, ...t }, n) => {
	let r = I.useRef(), i = n || r, { getControlProps: a } = Gi(), o = a({
		...t,
		className: (0, L.default)("pgn__form-switch-input", t.className)
	});
	return I.useEffect(() => {
		i.current && (i.current.indeterminate = e);
	}, [i, e]), /* @__PURE__ */ I.createElement("input", {
		type: "checkbox",
		...o,
		ref: i
	});
});
Ra.propTypes = {
	isIndeterminate: R.default.bool,
	className: R.default.string
}, Ra.defaultProps = {
	isIndeterminate: !1,
	className: void 0
};
var za = /* @__PURE__ */ I.forwardRef(({ children: e, className: t, helperText: n, ...r }, i) => /* @__PURE__ */ I.createElement("div", { className: "d-inline-flex flex-column" }, /* @__PURE__ */ I.createElement(La, {
	className: (0, L.default)("pgn__form-switch", t),
	...r,
	role: "switch",
	ref: i,
	controlAs: Ra,
	isValid: null,
	isInvalid: null,
	description: null
}, e), n && /* @__PURE__ */ I.createElement("div", { className: "pgn__form-switch-helper-text" }, n)));
za.propTypes = {
	children: R.default.node.isRequired,
	className: R.default.string,
	labelClassName: R.default.string,
	helperText: R.default.node,
	floatLabelLeft: R.default.bool
}, za.defaultProps = {
	className: void 0,
	labelClassName: void 0,
	helperText: void 0,
	floatLabelLeft: !1
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormCheckboxSet.js
function Ba({ children: e, name: t, value: n, defaultValue: r, isInline: i, onChange: a, onFocus: o, onBlur: s, ...c }) {
	let { getControlProps: l, useSetIsControlGroupEffect: u } = Gi();
	u(!0);
	let d = l(c);
	return /* @__PURE__ */ I.createElement(Fa, {
		name: t,
		value: n,
		defaultValue: r,
		onFocus: o,
		onBlur: s,
		onChange: a
	}, /* @__PURE__ */ I.createElement(fa, {
		role: "group",
		isInline: i,
		...d
	}, e));
}
Ba.propTypes = {
	children: R.default.node.isRequired,
	className: R.default.string,
	name: R.default.string.isRequired,
	value: R.default.arrayOf(R.default.string),
	defaultValue: R.default.arrayOf(R.default.string),
	isInline: R.default.bool,
	onChange: R.default.func,
	onFocus: R.default.func,
	onBlur: R.default.func
}, Ba.defaultProps = {
	className: void 0,
	value: void 0,
	defaultValue: void 0,
	isInline: !1,
	onChange: void 0,
	onFocus: void 0,
	onBlur: void 0
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormSwitchSet.js
var Va = Ba, H = pn;
H.Control = ia, H.Radio = da, H.RadioSet = pa, H.Autosuggest = Aa, H.AutosuggestOption = Ma, H.Checkbox = La, H.CheckboxSet = Ba, H.Switch = za, H.SwitchSet = Va, H.Label = aa, H.Group = oa, H.Text = $i;
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Modal/ModalContext.js
var Ha = /* @__PURE__ */ I.createContext({
	onClose: () => {},
	isOpen: !1,
	isBlocking: !1
});
function Ua({ onClose: e, isOpen: t, isBlocking: n = !1, children: r = null }) {
	let i = (0, I.useMemo)(() => ({
		onClose: e,
		isOpen: t,
		isBlocking: n
	}), [
		e,
		t,
		n
	]);
	return /* @__PURE__ */ I.createElement(Ha.Provider, { value: i }, r);
}
//#endregion
//#region node_modules/.pnpm/react-remove-scroll-bar@2.3.8_@types+react@18.3.28_react@18.3.1/node_modules/react-remove-scroll-bar/dist/es2015/constants.js
var Wa = "right-scroll-bar-position", Ga = "width-before-scroll-bar", Ka = "with-scroll-bars-hidden", qa = "--removed-body-scroll-bar-size";
//#endregion
//#region node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@18.3.28_react@18.3.1/node_modules/use-callback-ref/dist/es2015/assignRef.js
function Ja(e, t) {
	return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
//#endregion
//#region node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@18.3.28_react@18.3.1/node_modules/use-callback-ref/dist/es2015/useRef.js
function Ya(e, t) {
	var n = (0, I.useState)(function() {
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
var Xa = typeof window < "u" ? I.useLayoutEffect : I.useEffect, Za = /* @__PURE__ */ new WeakMap();
function Qa(e, t) {
	var n = Ya(t || null, function(t) {
		return e.forEach(function(e) {
			return Ja(e, t);
		});
	});
	return Xa(function() {
		var t = Za.get(n);
		if (t) {
			var r = new Set(t), i = new Set(e), a = n.current;
			r.forEach(function(e) {
				i.has(e) || Ja(e, null);
			}), i.forEach(function(e) {
				r.has(e) || Ja(e, a);
			});
		}
		Za.set(n, e);
	}, [e]), n;
}
//#endregion
//#region node_modules/.pnpm/use-sidecar@1.1.3_@types+react@18.3.28_react@18.3.1/node_modules/use-sidecar/dist/es2015/medium.js
function $a(e) {
	return e;
}
function eo(e, t) {
	t === void 0 && (t = $a);
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
function to(e, t) {
	return t === void 0 && (t = $a), eo(e, t);
}
function no(t) {
	t === void 0 && (t = {});
	var n = eo(null);
	return n.options = e({
		async: !0,
		ssr: !1
	}, t), n;
}
//#endregion
//#region node_modules/.pnpm/use-sidecar@1.1.3_@types+react@18.3.28_react@18.3.1/node_modules/use-sidecar/dist/es2015/exports.js
var ro = function(t) {
	var n = t.sideCar, r = ge(t, ["sideCar"]);
	if (!n) throw Error("Sidecar: please provide `sideCar` property to import the right car");
	var i = n.read();
	if (!i) throw Error("Sidecar medium not found");
	return I.createElement(i, e({}, r));
};
ro.isSideCarExport = !0;
function io(e, t) {
	return e.useMedium(t), ro;
}
//#endregion
//#region node_modules/.pnpm/react-remove-scroll@2.7.2_@types+react@18.3.28_react@18.3.1/node_modules/react-remove-scroll/dist/es2015/medium.js
var ao = no(), oo = function() {}, so = I.forwardRef(function(t, n) {
	var r = I.useRef(null), i = I.useState({
		onScrollCapture: oo,
		onWheelCapture: oo,
		onTouchMoveCapture: oo
	}), a = i[0], o = i[1], s = t.forwardProps, c = t.children, l = t.className, u = t.removeScrollBar, d = t.enabled, f = t.shards, p = t.sideCar, m = t.noRelative, h = t.noIsolation, g = t.inert, _ = t.allowPinchZoom, v = t.as, y = v === void 0 ? "div" : v, b = t.gapMode, x = ge(t, [
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
	]), S = p, C = Qa([r, n]), w = e(e({}, x), a);
	return I.createElement(I.Fragment, null, d && I.createElement(S, {
		sideCar: ao,
		removeScrollBar: u,
		shards: f,
		noRelative: m,
		noIsolation: h,
		inert: g,
		setCallbacks: o,
		allowPinchZoom: !!_,
		lockRef: r,
		gapMode: b
	}), s ? I.cloneElement(I.Children.only(c), e(e({}, w), { ref: C })) : I.createElement(y, e({}, w, {
		className: l,
		ref: C
	}), c));
});
so.defaultProps = {
	enabled: !0,
	removeScrollBar: !0,
	inert: !1
}, so.classNames = {
	fullWidth: Ga,
	zeroRight: Wa
};
//#endregion
//#region node_modules/.pnpm/focus-lock@1.3.6/node_modules/focus-lock/dist/es2015/constants.js
var co = "data-focus-lock", lo = "data-focus-lock-disabled", uo = "data-no-focus-lock", fo = "data-autofocus-inside", po = "data-no-autofocus", mo = {
	width: "1px",
	height: "0px",
	padding: 0,
	overflow: "hidden",
	position: "fixed",
	top: "1px",
	left: "1px"
}, ho = function(e) {
	var t = e.children, n = t === void 0 ? null : t;
	return /* @__PURE__ */ I.createElement(I.Fragment, null, /* @__PURE__ */ I.createElement("div", {
		key: "guard-first",
		"data-focus-guard": !0,
		"data-focus-auto-guard": !0,
		style: mo
	}), n, n && /* @__PURE__ */ I.createElement("div", {
		key: "guard-last",
		"data-focus-guard": !0,
		"data-focus-auto-guard": !0,
		style: mo
	}));
};
ho.propTypes = {};
//#endregion
//#region node_modules/.pnpm/react-focus-lock@2.13.7_@types+react@18.3.28_react@18.3.1/node_modules/react-focus-lock/dist/es2015/medium.js
var go = to({}, function(e) {
	return {
		target: e.target,
		currentTarget: e.currentTarget
	};
}), _o = to(), vo = to(), yo = no({
	async: !0,
	ssr: typeof document < "u"
}), bo = /* @__PURE__ */ (0, I.createContext)(void 0), xo = [], So = /* @__PURE__ */ (0, I.forwardRef)(function(e, t) {
	var n, r = (0, I.useState)(), i = r[0], a = r[1], o = (0, I.useRef)(), s = (0, I.useRef)(!1), l = (0, I.useRef)(null), u = (0, I.useState)({})[1], d = e.children, f = e.disabled, p = f === void 0 ? !1 : f, m = e.noFocusGuards, h = m === void 0 ? !1 : m, g = e.persistentFocus, _ = g === void 0 ? !1 : g, v = e.crossFrame, y = v === void 0 ? !0 : v, b = e.autoFocus, x = b === void 0 ? !0 : b;
	e.allowTextSelection;
	var S = e.group, C = e.className, w = e.whiteList, T = e.hasPositiveIndices, E = e.shards, D = E === void 0 ? xo : E, O = e.as, k = O === void 0 ? "div" : O, A = e.lockProps, j = A === void 0 ? {} : A, ee = e.sideCar, M = e.returnFocus, N = M === void 0 ? !1 : M, te = e.focusOptions, P = e.onActivation, ne = e.onDeactivation, re = (0, I.useState)({})[0], ie = (0, I.useCallback)(function(e) {
		var t = e.captureFocusRestore;
		if (!l.current) {
			var n = document?.activeElement;
			l.current = n, n !== document.body && (l.current = t(n));
		}
		o.current && P && P(o.current), s.current = !0, u();
	}, [P]), ae = (0, I.useCallback)(function() {
		s.current = !1, ne && ne(o.current), u();
	}, [ne]), oe = (0, I.useCallback)(function(e) {
		var t = l.current;
		if (t) {
			var n = (typeof t == "function" ? t() : t) || document.body, r = typeof N == "function" ? N(n) : N;
			if (r) {
				var i = typeof r == "object" ? r : void 0;
				l.current = null, e ? Promise.resolve().then(function() {
					return n.focus(i);
				}) : n.focus(i);
			}
		}
	}, [N]), se = (0, I.useCallback)(function(e) {
		s.current && go.useMedium(e);
	}, []), ce = _o.useMedium, le = (0, I.useCallback)(function(e) {
		o.current !== e && (o.current = e, a(e));
	}, []), ue = c((n = {}, n[lo] = p && "disabled", n[co] = S, n), j), de = h !== !0, fe = de && h !== "tail", pe = Qa([t, le]), me = (0, I.useMemo)(function() {
		return {
			observed: o,
			shards: D,
			enabled: !p,
			get active() {
				return s.current;
			}
		};
	}, [
		p,
		s,
		D,
		o
	]);
	return /* @__PURE__ */ I.createElement(I.Fragment, null, de && [/* @__PURE__ */ I.createElement("div", {
		key: "guard-first",
		"data-focus-guard": !0,
		tabIndex: p ? -1 : 0,
		style: mo
	}), T ? /* @__PURE__ */ I.createElement("div", {
		key: "guard-nearest",
		"data-focus-guard": !0,
		tabIndex: p ? -1 : 1,
		style: mo
	}) : null], !p && /* @__PURE__ */ I.createElement(ee, {
		id: re,
		sideCar: yo,
		observed: i,
		disabled: p,
		persistentFocus: _,
		crossFrame: y,
		autoFocus: x,
		whiteList: w,
		shards: D,
		onActivation: ie,
		onDeactivation: ae,
		returnFocus: oe,
		focusOptions: te,
		noFocusGuards: h
	}), /* @__PURE__ */ I.createElement(k, c({ ref: pe }, ue, {
		className: C,
		onBlur: ce,
		onFocus: se
	}), /* @__PURE__ */ I.createElement(bo.Provider, { value: me }, d)), fe && /* @__PURE__ */ I.createElement("div", {
		"data-focus-guard": !0,
		tabIndex: p ? -1 : 0,
		style: mo
	}));
});
So.propTypes = {};
//#endregion
//#region node_modules/.pnpm/react-focus-lock@2.13.7_@types+react@18.3.28_react@18.3.1/node_modules/react-focus-lock/dist/es2015/util.js
function Co(e) {
	setTimeout(e, 1);
}
var wo = function(e) {
	return e && "current" in e ? e.current : e;
}, To = So, Eo = no(), Do = "data-focus-on-hidden", Oo = { preventScroll: !0 }, ko = I.forwardRef(function(t, n) {
	var r = I.useState(!1), i = r[0], a = r[1], o = I.useState(null), s = o[0], c = o[1], l = t.children, u = t.autoFocus, d = t.shards, f = t.crossFrame, p = t.enabled, m = p === void 0 ? !0 : p, h = t.scrollLock, g = h === void 0 ? !0 : h, _ = t.focusLock, v = _ === void 0 ? !0 : _, y = t.returnFocus, b = y === void 0 ? !0 : y, x = t.inert, S = t.allowPinchZoom, C = t.sideCar, w = t.className, T = t.shouldIgnore, E = t.preventScrollOnFocus, D = t.style, O = t.as, k = t.gapMode, A = ge(t, [
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
	]), j = C, ee = e(e({}, i), {
		as: O,
		style: D,
		sideCar: C,
		shards: d,
		allowPinchZoom: S,
		gapMode: k,
		inert: x,
		enabled: m && g
	}), M = I.useCallback(function(e) {
		c(e);
	}, []), N = I.useCallback(function() {
		c(null);
	}, []);
	return I.createElement(I.Fragment, null, I.createElement(To, {
		ref: n,
		sideCar: C,
		disabled: !(m && v),
		returnFocus: b,
		autoFocus: u,
		shards: d,
		crossFrame: f,
		onActivation: M,
		onDeactivation: N,
		className: w,
		whiteList: T,
		lockProps: ee,
		focusOptions: E ? Oo : void 0,
		as: so
	}, l), m && I.createElement(j, e({}, A, {
		sideCar: Eo,
		setLockProps: a,
		shards: d,
		activeNode: s
	})));
});
//#endregion
//#region node_modules/.pnpm/@babel+runtime@7.29.2/node_modules/@babel/runtime/helpers/esm/typeof.js
function Ao(e) {
	"@babel/helpers - typeof";
	return Ao = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, Ao(e);
}
//#endregion
//#region node_modules/.pnpm/@babel+runtime@7.29.2/node_modules/@babel/runtime/helpers/esm/toPrimitive.js
function jo(e, t) {
	if (Ao(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (Ao(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
//#endregion
//#region node_modules/.pnpm/@babel+runtime@7.29.2/node_modules/@babel/runtime/helpers/esm/toPropertyKey.js
function Mo(e) {
	var t = jo(e, "string");
	return Ao(t) == "symbol" ? t : t + "";
}
//#endregion
//#region node_modules/.pnpm/@babel+runtime@7.29.2/node_modules/@babel/runtime/helpers/esm/defineProperty.js
function No(e, t, n) {
	return (t = Mo(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
//#endregion
//#region node_modules/.pnpm/react-clientside-effect@1.2.8_react@18.3.1/node_modules/react-clientside-effect/lib/index.es.js
function Po(e, t) {
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
			f(t, e);
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
				return /* @__PURE__ */ I.createElement(r, this.props);
			}, t;
		}(I.PureComponent);
		return No(s, "displayName", "SideEffect(" + n(r) + ")"), s;
	};
}
//#endregion
//#region node_modules/.pnpm/focus-lock@1.3.6/node_modules/focus-lock/dist/es2015/utils/array.js
var Fo = function(e) {
	for (var t = Array(e.length), n = 0; n < e.length; ++n) t[n] = e[n];
	return t;
}, Io = function(e) {
	return Array.isArray(e) ? e : [e];
}, Lo = function(e) {
	return Array.isArray(e) ? e[0] : e;
}, Ro = function(e) {
	if (e.nodeType !== Node.ELEMENT_NODE) return !1;
	var t = window.getComputedStyle(e, null);
	return !t || !t.getPropertyValue ? !1 : t.getPropertyValue("display") === "none" || t.getPropertyValue("visibility") === "hidden";
}, zo = function(e) {
	return e.parentNode && e.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? e.parentNode.host : e.parentNode;
}, Bo = function(e) {
	return e === document || e && e.nodeType === Node.DOCUMENT_NODE;
}, Vo = function(e) {
	return e.hasAttribute("inert");
}, Ho = function(e, t) {
	return !e || Bo(e) || !Ro(e) && !Vo(e) && t(zo(e));
}, Uo = function(e, t) {
	var n = e.get(t);
	if (n !== void 0) return n;
	var r = Ho(t, Uo.bind(void 0, e));
	return e.set(t, r), r;
}, Wo = function(e, t) {
	return e && !Bo(e) ? Zo(e) ? t(zo(e)) : !1 : !0;
}, Go = function(e, t) {
	var n = e.get(t);
	if (n !== void 0) return n;
	var r = Wo(t, Go.bind(void 0, e));
	return e.set(t, r), r;
}, Ko = function(e) {
	return e.dataset;
}, qo = function(e) {
	return e.tagName === "BUTTON";
}, Jo = function(e) {
	return e.tagName === "INPUT";
}, Yo = function(e) {
	return Jo(e) && e.type === "radio";
}, Xo = function(e) {
	return !((Jo(e) || qo(e)) && (e.type === "hidden" || e.disabled));
}, Zo = function(e) {
	var t = e.getAttribute(po);
	return ![
		!0,
		"true",
		""
	].includes(t);
}, Qo = function(e) {
	return !!(e && Ko(e)?.focusGuard);
}, $o = function(e) {
	return !Qo(e);
}, es = function(e) {
	return !!e;
}, ts = function(e, t) {
	var n = Math.max(0, e.tabIndex), r = Math.max(0, t.tabIndex), i = n - r, a = e.index - t.index;
	if (i) {
		if (!n) return 1;
		if (!r) return -1;
	}
	return i || a;
}, ns = function(e) {
	return e.tabIndex < 0 && !e.hasAttribute("tabindex") ? 0 : e.tabIndex;
}, rs = function(e, t, n) {
	return Fo(e).map(function(e, t) {
		var r = ns(e);
		return {
			node: e,
			index: t,
			tabIndex: n && r === -1 ? (e.dataset || {}).focusGuard ? 0 : -1 : r
		};
	}).filter(function(e) {
		return !t || e.tabIndex >= 0;
	}).sort(ts);
}, is = [
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
].join(","), as = `${is}, [data-focus-guard]`, os = function(e, t) {
	return Fo((e.shadowRoot || e).children).reduce(function(e, n) {
		return e.concat(n.matches(t ? as : is) ? [n] : [], os(n));
	}, []);
}, ss = function(e, t) {
	return e instanceof HTMLIFrameElement && e.contentDocument?.body ? cs([e.contentDocument.body], t) : [e];
}, cs = function(e, t) {
	return e.reduce(function(e, n) {
		var r, i = os(n, t), a = (r = []).concat.apply(r, i.map(function(e) {
			return ss(e, t);
		}));
		return e.concat(a, n.parentNode ? Fo(n.parentNode.querySelectorAll(is)).filter(function(e) {
			return e === n;
		}) : []);
	}, []);
}, ls = function(e) {
	return Fo(e.querySelectorAll(`[${fo}]`)).map(function(e) {
		return cs([e]);
	}).reduce(function(e, t) {
		return e.concat(t);
	}, []);
}, us = function(e, t) {
	return Fo(e).filter(function(e) {
		return Uo(t, e);
	}).filter(function(e) {
		return Xo(e);
	});
}, ds = function(e, t) {
	return t === void 0 && (t = /* @__PURE__ */ new Map()), Fo(e).filter(function(e) {
		return Go(t, e);
	});
}, fs = function(e, t, n) {
	return rs(us(cs(e, n), t), !0, n);
}, ps = function(e, t) {
	return rs(us(cs(e), t), !1);
}, ms = function(e, t) {
	return us(ls(e), t);
}, hs = function(e, t) {
	return e.shadowRoot ? hs(e.shadowRoot, t) : Object.getPrototypeOf(e).contains !== void 0 && Object.getPrototypeOf(e).contains.call(e, t) ? !0 : Fo(e.children).some(function(e) {
		if (e instanceof HTMLIFrameElement) {
			var n = e.contentDocument?.body;
			return n ? hs(n, t) : !1;
		}
		return hs(e, t);
	});
}, gs = function(e) {
	for (var t = /* @__PURE__ */ new Set(), n = e.length, r = 0; r < n; r += 1) for (var i = r + 1; i < n; i += 1) {
		var a = e[r].compareDocumentPosition(e[i]);
		(a & Node.DOCUMENT_POSITION_CONTAINED_BY) > 0 && t.add(i), (a & Node.DOCUMENT_POSITION_CONTAINS) > 0 && t.add(r);
	}
	return e.filter(function(e, n) {
		return !t.has(n);
	});
}, _s = function(e) {
	return e.parentNode ? _s(e.parentNode) : e;
}, vs = function(e) {
	return Io(e).filter(Boolean).reduce(function(e, t) {
		var n = t.getAttribute(co);
		return e.push.apply(e, n ? gs(Fo(_s(t).querySelectorAll(`[${co}="${n}"]:not([${lo}="disabled"])`))) : [t]), e;
	}, []);
}, ys = function(e) {
	try {
		return e();
	} catch {
		return;
	}
}, bs = function(e) {
	if (e === void 0 && (e = document), !(!e || !e.activeElement)) {
		var t = e.activeElement;
		return t.shadowRoot ? bs(t.shadowRoot) : t instanceof HTMLIFrameElement && ys(function() {
			return t.contentWindow.document;
		}) ? bs(t.contentWindow.document) : t;
	}
}, xs = function(e, t) {
	return e === t;
}, Ss = function(e, t) {
	return !!Fo(e.querySelectorAll("iframe")).some(function(e) {
		return xs(e, t);
	});
}, Cs = function(e, t) {
	return t === void 0 && (t = bs(Lo(e).ownerDocument)), !t || t.dataset && t.dataset.focusGuard ? !1 : vs(e).some(function(e) {
		return hs(e, t) || Ss(e, t);
	});
}, ws = function(e) {
	e === void 0 && (e = document);
	var t = bs(e);
	return t ? Fo(e.querySelectorAll(`[${uo}]`)).some(function(e) {
		return hs(e, t);
	}) : !1;
}, Ts = function(e, t) {
	return t.filter(Yo).filter(function(t) {
		return t.name === e.name;
	}).filter(function(e) {
		return e.checked;
	})[0] || e;
}, Es = function(e, t) {
	return Yo(e) && e.name ? Ts(e, t) : e;
}, Ds = function(e) {
	var t = /* @__PURE__ */ new Set();
	return e.forEach(function(n) {
		return t.add(Es(n, e));
	}), e.filter(function(e) {
		return t.has(e);
	});
}, Os = function(e) {
	return e[0] && e.length > 1 ? Es(e[0], e) : e[0];
}, ks = function(e, t) {
	return e.indexOf(Es(t, e));
}, As = "NEW_FOCUS", js = function(e, t, n, r, i) {
	var a = e.length, o = e[0], s = e[a - 1], c = Qo(r);
	if (!(r && e.indexOf(r) >= 0)) {
		var l = r === void 0 ? -1 : n.indexOf(r), u = i ? n.indexOf(i) : l, d = i ? e.indexOf(i) : -1;
		if (l === -1) return d === -1 ? As : d;
		if (d === -1) return As;
		var f = l - u, p = n.indexOf(o), m = n.indexOf(s), h = Ds(n), g = r === void 0 ? -1 : h.indexOf(r), _ = i ? h.indexOf(i) : g, v = h.filter(function(e) {
			return e.tabIndex >= 0;
		}), y = r === void 0 ? -1 : v.indexOf(r), b = i ? v.indexOf(i) : y, x = y >= 0 && b >= 0 ? b - y : _ - g;
		if (!f && d >= 0 || t.length === 0) return d;
		var S = ks(e, t[0]), C = ks(e, t[t.length - 1]);
		if (l <= p && c && Math.abs(f) > 1) return C;
		if (l >= m && c && Math.abs(f) > 1) return S;
		if (f && Math.abs(x) > 1) return d;
		if (l <= p) return C;
		if (l > m) return S;
		if (f) return Math.abs(f) > 1 ? d : (a + d + f) % a;
	}
}, Ms = function(e) {
	return function(t) {
		var n = Ko(t)?.autofocus;
		return t.autofocus || n !== void 0 && n !== "false" || e.indexOf(t) >= 0;
	};
}, Ns = function(e, t, n) {
	var r = ds(e.map(function(e) {
		return e.node;
	}).filter(Ms(n)));
	return r && r.length ? Os(r) : Os(ds(t));
}, Ps = function(e, t) {
	return t === void 0 && (t = []), t.push(e), e.parentNode && Ps(e.parentNode.host || e.parentNode, t), t;
}, Fs = function(e, t) {
	for (var n = Ps(e), r = Ps(t), i = 0; i < n.length; i += 1) {
		var a = n[i];
		if (r.indexOf(a) >= 0) return a;
	}
	return !1;
}, Is = function(e, t, n) {
	var r = Io(e), i = Io(t), a = r[0], o = !1;
	return i.filter(Boolean).forEach(function(e) {
		o = Fs(o || e, e) || o, n.filter(Boolean).forEach(function(e) {
			var t = Fs(a, e);
			t && (o = !o || hs(t, o) ? t : Fs(t, o));
		});
	}), o;
}, Ls = function(e, t) {
	return e.reduce(function(e, n) {
		return e.concat(ms(n, t));
	}, []);
}, Rs = function(e, t) {
	var n = /* @__PURE__ */ new Map();
	return t.forEach(function(e) {
		return n.set(e.node, e);
	}), e.map(function(e) {
		return n.get(e);
	}).filter(es);
}, zs = function(e, t) {
	var n = bs(Io(e).length > 0 ? document : Lo(e).ownerDocument), r = vs(e).filter($o), i = Is(n || e, e, r), a = /* @__PURE__ */ new Map(), o = ps(r, a), s = o.filter(function(e) {
		var t = e.node;
		return $o(t);
	});
	if (s[0]) {
		var c = ps([i], a).map(function(e) {
			return e.node;
		}), l = Rs(c, s), u = l.map(function(e) {
			return e.node;
		}), d = l.filter(function(e) {
			return e.tabIndex >= 0;
		}).map(function(e) {
			return e.node;
		}), f = js(u, d, c, n, t);
		if (f === "NEW_FOCUS") {
			var p = Ns(o, d, Ls(r, a)) || Ns(o, u, Ls(r, a));
			if (p) return { node: p };
			console.warn("focus-lock: cannot find any node to move focus into");
			return;
		}
		return f === void 0 ? f : l[f];
	}
}, Bs = function(e) {
	var t = vs(e).filter($o), n = rs(cs([Is(e, e, t)], !0), !0, !0), r = cs(t, !1);
	return n.map(function(e) {
		var t = e.node;
		return {
			node: t,
			index: e.index,
			lockItem: r.indexOf(t) >= 0,
			guard: Qo(t)
		};
	});
}, Vs = function(e, t) {
	e && ("focus" in e && e.focus(t), "contentWindow" in e && e.contentWindow && e.contentWindow.focus());
}, Hs = 0, Us = !1, Ws = function(e, t, n) {
	n === void 0 && (n = {});
	var r = zs(e, t);
	if (!Us && r) {
		if (Hs > 2) {
			console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"), Us = !0, setTimeout(function() {
				Us = !1;
			}, 1);
			return;
		}
		Hs++, Vs(r.node, n.focusOptions), Hs--;
	}
};
//#endregion
//#region node_modules/.pnpm/focus-lock@1.3.6/node_modules/focus-lock/dist/es2015/return-focus.js
function Gs(e) {
	if (!e) return null;
	if (typeof WeakRef > "u") return function() {
		return e || null;
	};
	var t = e ? new WeakRef(e) : null;
	return function() {
		return t?.deref() || null;
	};
}
var Ks = function(e) {
	if (!e) return null;
	for (var t = [], n = e; n && n !== document.body;) t.push({
		current: Gs(n),
		parent: Gs(n.parentElement),
		left: Gs(n.previousElementSibling),
		right: Gs(n.nextElementSibling)
	}), n = n.parentElement;
	return {
		element: Gs(e),
		stack: t,
		ownerDocument: e.ownerDocument
	};
}, qs = function(e) {
	if (e) for (var t = e.stack, n = e.ownerDocument, r = /* @__PURE__ */ new Map(), i = 0, a = t; i < a.length; i++) {
		var o = a[i], s = o.parent?.call(o);
		if (s && n.contains(s)) {
			for (var c = o.left?.call(o), l = o.current(), u = s.contains(l) ? l : void 0, d = o.right?.call(o), f = fs([s], r), p = u ?? c?.nextElementSibling ?? d ?? c; p;) {
				for (var m = 0, h = f; m < h.length; m++) {
					var g = h[m];
					if (p?.contains(g.node)) return g.node;
				}
				p = p.nextElementSibling;
			}
			if (f.length) return f[0].node;
		}
	}
}, Js = function(e) {
	var t = Ks(e);
	return function() {
		return qs(t);
	};
}, Ys = function(e, t, n) {
	if (!e || !t) return console.error("no element or scope given"), {};
	var r = Io(t);
	if (r.every(function(t) {
		return !hs(t, e);
	})) return console.error("Active element is not contained in the scope"), {};
	var i = n ? fs(r, /* @__PURE__ */ new Map()) : ps(r, /* @__PURE__ */ new Map()), a = i.findIndex(function(t) {
		return t.node === e;
	});
	if (a !== -1) return {
		prev: i[a - 1],
		next: i[a + 1],
		first: i[0],
		last: i[i.length - 1]
	};
}, Xs = function(e, t) {
	var n = t ? fs(Io(e), /* @__PURE__ */ new Map()) : ps(Io(e), /* @__PURE__ */ new Map());
	return {
		first: n[0],
		last: n[n.length - 1]
	};
}, Zs = function(e) {
	return Object.assign({
		scope: document.body,
		cycle: !0,
		onlyTabbable: !0
	}, e);
}, Qs = function(e, t, n) {
	t === void 0 && (t = {});
	var r = Zs(t), i = Ys(e, r.scope, r.onlyTabbable);
	if (i) {
		var a = n(i, r.cycle);
		a && Vs(a.node, r.focusOptions);
	}
}, $s = function(e, t) {
	t === void 0 && (t = {}), Qs(e, t, function(e, t) {
		var n = e.next, r = e.first;
		return n || t && r;
	});
}, ec = function(e, t) {
	t === void 0 && (t = {}), Qs(e, t, function(e, t) {
		var n = e.prev, r = e.last;
		return n || t && r;
	});
}, tc = function(e, t, n) {
	var r = Xs(e, t.onlyTabbable ?? !0)[n];
	r && Vs(r.node, t.focusOptions);
}, nc = function(e, t) {
	t === void 0 && (t = {}), tc(e, t, "first");
}, rc = function(e, t) {
	t === void 0 && (t = {}), tc(e, t, "last");
}, ic = function() {
	return document && document.activeElement === document.body;
}, ac = function() {
	return ic() || ws();
}, oc = null, sc = null, cc = function() {
	return null;
}, lc = null, uc = !1, dc = !1, fc = function() {
	return !0;
}, pc = function(e) {
	return (oc.whiteList || fc)(e);
}, mc = function(e, t) {
	lc = {
		observerNode: e,
		portaledElement: t
	};
}, hc = function(e) {
	return lc && lc.portaledElement === e;
};
function gc(e, t, n, r) {
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
var _c = function(e) {
	return e ? !!uc : uc === "meanwhile";
}, vc = function e(t, n, r) {
	return n && (n.host === t && (!n.activeElement || r.contains(n.activeElement)) || n.parentNode && e(t, n.parentNode, r));
}, yc = function(e, t) {
	return t.some(function(t) {
		return vc(e, t, t);
	});
}, bc = function(e) {
	return ps(e, /* @__PURE__ */ new Map());
}, xc = function(e) {
	return !bc([e.parentNode]).some(function(t) {
		return t.node === e;
	});
}, Sc = function() {
	var e = !1;
	if (oc) {
		var t = oc, n = t.observed, r = t.persistentFocus, i = t.autoFocus, a = t.shards, o = t.crossFrame, s = t.focusOptions, c = t.noFocusGuards, l = n || lc && lc.portaledElement;
		if (ic() && sc && sc !== document.body && (!document.body.contains(sc) || xc(sc))) {
			var u = cc();
			u && u.focus();
		}
		var d = document && document.activeElement;
		if (l) {
			var f = [l].concat(a.map(wo).filter(Boolean));
			if ((!d || pc(d)) && (r || function() {
				if (!_c(o) || !c || !sc || dc) return !1;
				var e = bc(f), t = e.findIndex(function(e) {
					return e.node === sc;
				});
				return t === 0 || t === e.length - 1;
			}() || !ac() || !sc && i) && (l && !(Cs(f) || d && yc(d, f) || hc(d, l)) && (document && !sc && d && !i ? (d.blur && d.blur(), document.body.focus()) : (e = Ws(f, sc, { focusOptions: s }), lc = {})), sc = document && document.activeElement, sc !== document.body && (cc = Js(sc)), uc = !1), document && d !== document.activeElement && document.querySelector("[data-focus-auto-guard]")) {
				var p = document && document.activeElement, m = Bs(f), h = m.map(function(e) {
					return e.node;
				}).indexOf(p);
				h > -1 && (m.filter(function(e) {
					var t = e.guard, n = e.node;
					return t && n.dataset.focusAutoGuard;
				}).forEach(function(e) {
					return e.node.removeAttribute("tabIndex");
				}), gc(h, m.length, 1, m), gc(h, -1, -1, m));
			}
		}
	}
	return e;
}, Cc = function(e) {
	Sc() && e && (e.stopPropagation(), e.preventDefault());
}, wc = function() {
	return Co(Sc);
}, Tc = function(e) {
	var t = e.target, n = e.currentTarget;
	n.contains(t) || mc(n, t);
}, Ec = function() {
	return null;
}, Dc = function(e) {
	var t = e.children;
	return /* @__PURE__ */ I.createElement("div", {
		onBlur: wc,
		onFocus: Tc
	}, t);
};
Dc.propTypes = {};
var Oc = function() {
	dc = !0;
}, kc = function() {
	dc = !1, uc = "just", Co(function() {
		uc = "meanwhile";
	});
}, Ac = function() {
	document.addEventListener("focusin", Cc), document.addEventListener("focusout", wc), window.addEventListener("focus", Oc), window.addEventListener("blur", kc);
}, jc = function() {
	document.removeEventListener("focusin", Cc), document.removeEventListener("focusout", wc), window.removeEventListener("focus", Oc), window.removeEventListener("blur", kc);
};
function Mc(e) {
	return e.filter(function(e) {
		return !e.disabled;
	});
}
var Nc = {
	moveFocusInside: Ws,
	focusInside: Cs,
	focusNextElement: $s,
	focusPrevElement: ec,
	focusFirstElement: nc,
	focusLastElement: rc,
	captureFocusRestore: Js
};
function Pc(e) {
	var t = e.slice(-1)[0];
	t && !oc && Ac();
	var n = oc, r = n && t && t.id === n.id;
	oc = t, n && !r && (n.onDeactivation(), e.filter(function(e) {
		return e.id === n.id;
	}).length || n.returnFocus(!t)), t ? (sc = null, (!r || n.observed !== t.observed) && t.onActivation(Nc), Sc(!0), Co(Sc)) : (jc(), sc = null);
}
go.assignSyncMedium(Tc), _o.assignMedium(wc), vo.assignMedium(function(e) {
	return e(Nc);
}), io(yo, Po(Mc, Pc)(Ec));
//#endregion
//#region node_modules/.pnpm/get-nonce@1.0.1/node_modules/get-nonce/dist/es2015/index.js
var Fc, Ic = function() {
	if (Fc) return Fc;
	if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
//#endregion
//#region node_modules/.pnpm/react-style-singleton@2.2.3_@types+react@18.3.28_react@18.3.1/node_modules/react-style-singleton/dist/es2015/singleton.js
function Lc() {
	if (!document) return null;
	var e = document.createElement("style");
	e.type = "text/css";
	var t = Ic();
	return t && e.setAttribute("nonce", t), e;
}
function Rc(e, t) {
	e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function zc(e) {
	(document.head || document.getElementsByTagName("head")[0]).appendChild(e);
}
var Bc = function() {
	var e = 0, t = null;
	return {
		add: function(n) {
			e == 0 && (t = Lc()) && (Rc(t, n), zc(t)), e++;
		},
		remove: function() {
			e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
		}
	};
}, Vc = function() {
	var e = Bc();
	return function(t, n) {
		I.useEffect(function() {
			return e.add(t), function() {
				e.remove();
			};
		}, [t && n]);
	};
}, Hc = function() {
	var e = Vc();
	return function(t) {
		var n = t.styles, r = t.dynamic;
		return e(n, r), null;
	};
}, Uc = {
	left: 0,
	top: 0,
	right: 0,
	gap: 0
}, Wc = function(e) {
	return parseInt(e || "", 10) || 0;
}, Gc = function(e) {
	var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], i = t[e === "padding" ? "paddingRight" : "marginRight"];
	return [
		Wc(n),
		Wc(r),
		Wc(i)
	];
}, Kc = function(e) {
	if (e === void 0 && (e = "margin"), typeof window > "u") return Uc;
	var t = Gc(e), n = document.documentElement.clientWidth, r = window.innerWidth;
	return {
		left: t[0],
		top: t[1],
		right: t[2],
		gap: Math.max(0, r - n + t[2] - t[0])
	};
}, qc = Hc(), Jc = "data-scroll-locked", Yc = function(e, t, n, r) {
	var i = e.left, a = e.top, o = e.right, s = e.gap;
	return n === void 0 && (n = "margin"), `
  .${Ka} {
   overflow: hidden ${r};
   padding-right: ${s}px ${r};
  }
  body[${Jc}] {
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
  
  .${Wa} {
    right: ${s}px ${r};
  }
  
  .${Ga} {
    margin-right: ${s}px ${r};
  }
  
  .${Wa} .${Wa} {
    right: 0 ${r};
  }
  
  .${Ga} .${Ga} {
    margin-right: 0 ${r};
  }
  
  body[${Jc}] {
    ${qa}: ${s}px;
  }
`;
}, Xc = function() {
	var e = parseInt(document.body.getAttribute("data-scroll-locked") || "0", 10);
	return isFinite(e) ? e : 0;
}, Zc = function() {
	I.useEffect(function() {
		return document.body.setAttribute(Jc, (Xc() + 1).toString()), function() {
			var e = Xc() - 1;
			e <= 0 ? document.body.removeAttribute(Jc) : document.body.setAttribute(Jc, e.toString());
		};
	}, []);
}, Qc = function(e) {
	var t = e.noRelative, n = e.noImportant, r = e.gapMode, i = r === void 0 ? "margin" : r;
	Zc();
	var a = I.useMemo(function() {
		return Kc(i);
	}, [i]);
	return I.createElement(qc, { styles: Yc(a, !t, i, n ? "" : "!important") });
}, $c = !1;
if (typeof window < "u") try {
	var el = Object.defineProperty({}, "passive", { get: function() {
		return $c = !0, !0;
	} });
	window.addEventListener("test", el, el), window.removeEventListener("test", el, el);
} catch {
	$c = !1;
}
var tl = $c ? { passive: !1 } : !1, nl = function(e) {
	return e.tagName === "TEXTAREA";
}, rl = function(e, t) {
	if (!(e instanceof Element)) return !1;
	var n = window.getComputedStyle(e);
	return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !nl(e) && n[t] === "visible");
}, il = function(e) {
	return rl(e, "overflowY");
}, al = function(e) {
	return rl(e, "overflowX");
}, ol = function(e, t) {
	var n = t.ownerDocument, r = t;
	do {
		if (typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host), ll(e, r)) {
			var i = ul(e, r);
			if (i[1] > i[2]) return !0;
		}
		r = r.parentNode;
	} while (r && r !== n.body);
	return !1;
}, sl = function(e) {
	return [
		e.scrollTop,
		e.scrollHeight,
		e.clientHeight
	];
}, cl = function(e) {
	return [
		e.scrollLeft,
		e.scrollWidth,
		e.clientWidth
	];
}, ll = function(e, t) {
	return e === "v" ? il(t) : al(t);
}, ul = function(e, t) {
	return e === "v" ? sl(t) : cl(t);
}, dl = function(e, t) {
	return e === "h" && t === "rtl" ? -1 : 1;
}, fl = function(e, t, n, r, i) {
	var a = dl(e, window.getComputedStyle(t).direction), o = a * r, s = n.target, c = t.contains(s), l = !1, u = o > 0, d = 0, f = 0;
	do {
		if (!s) break;
		var p = ul(e, s), m = p[0], h = p[1] - p[2] - a * m;
		(m || h) && ll(e, s) && (d += h, f += m);
		var g = s.parentNode;
		s = g && g.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? g.host : g;
	} while (!c && s !== document.body || c && (t.contains(s) || t === s));
	return (u && (i && Math.abs(d) < 1 || !i && o > d) || !u && (i && Math.abs(f) < 1 || !i && -o > f)) && (l = !0), l;
}, pl = function(e) {
	return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, ml = function(e) {
	return [e.deltaX, e.deltaY];
}, hl = function(e) {
	return e && "current" in e ? e.current : e;
}, gl = function(e, t) {
	return e[0] === t[0] && e[1] === t[1];
}, _l = function(e) {
	return `
  .block-interactivity-${e} {pointer-events: none;}
  .allow-interactivity-${e} {pointer-events: all;}
`;
}, vl = 0, yl = [];
function bl(e) {
	var t = I.useRef([]), n = I.useRef([0, 0]), r = I.useRef(), i = I.useState(vl++)[0], a = I.useState(Hc)[0], o = I.useRef(e);
	I.useEffect(function() {
		o.current = e;
	}, [e]), I.useEffect(function() {
		if (e.inert) {
			document.body.classList.add(`block-interactivity-${i}`);
			var t = re([e.lockRef.current], (e.shards || []).map(hl), !0).filter(Boolean);
			return t.forEach(function(e) {
				return e.classList.add(`allow-interactivity-${i}`);
			}), function() {
				document.body.classList.remove(`block-interactivity-${i}`), t.forEach(function(e) {
					return e.classList.remove(`allow-interactivity-${i}`);
				});
			};
		}
	}, [
		e.inert,
		e.lockRef.current,
		e.shards
	]);
	var s = I.useCallback(function(e, t) {
		if ("touches" in e && e.touches.length === 2 || e.type === "wheel" && e.ctrlKey) return !o.current.allowPinchZoom;
		var i = pl(e), a = n.current, s = "deltaX" in e ? e.deltaX : a[0] - i[0], c = "deltaY" in e ? e.deltaY : a[1] - i[1], l, u = e.target, d = Math.abs(s) > Math.abs(c) ? "h" : "v";
		if ("touches" in e && d === "h" && u.type === "range") return !1;
		var f = window.getSelection(), p = f && f.anchorNode;
		if (p && (p === u || p.contains(u))) return !1;
		var m = ol(d, u);
		if (!m) return !0;
		if (m ? l = d : (l = d === "v" ? "h" : "v", m = ol(d, u)), !m) return !1;
		if (!r.current && "changedTouches" in e && (s || c) && (r.current = l), !l) return !0;
		var h = r.current || l;
		return fl(h, t, e, h === "h" ? s : c, !0);
	}, []), c = I.useCallback(function(e) {
		var n = e;
		if (!(!yl.length || yl[yl.length - 1] !== a)) {
			var r = "deltaY" in n ? ml(n) : pl(n), i = t.current.filter(function(e) {
				return e.name === n.type && (e.target === n.target || n.target === e.shadowParent) && gl(e.delta, r);
			})[0];
			if (i && i.should) {
				n.cancelable && n.preventDefault();
				return;
			}
			if (!i) {
				var c = (o.current.shards || []).map(hl).filter(Boolean).filter(function(e) {
					return e.contains(n.target);
				});
				(c.length > 0 ? s(n, c[0]) : !o.current.noIsolation) && n.cancelable && n.preventDefault();
			}
		}
	}, []), l = I.useCallback(function(e, n, r, i) {
		var a = {
			name: e,
			delta: n,
			target: r,
			should: i,
			shadowParent: xl(r)
		};
		t.current.push(a), setTimeout(function() {
			t.current = t.current.filter(function(e) {
				return e !== a;
			});
		}, 1);
	}, []), u = I.useCallback(function(e) {
		n.current = pl(e), r.current = void 0;
	}, []), d = I.useCallback(function(t) {
		l(t.type, ml(t), t.target, s(t, e.lockRef.current));
	}, []), f = I.useCallback(function(t) {
		l(t.type, pl(t), t.target, s(t, e.lockRef.current));
	}, []);
	I.useEffect(function() {
		return yl.push(a), e.setCallbacks({
			onScrollCapture: d,
			onWheelCapture: d,
			onTouchMoveCapture: f
		}), document.addEventListener("wheel", c, tl), document.addEventListener("touchmove", c, tl), document.addEventListener("touchstart", u, tl), function() {
			yl = yl.filter(function(e) {
				return e !== a;
			}), document.removeEventListener("wheel", c, tl), document.removeEventListener("touchmove", c, tl), document.removeEventListener("touchstart", u, tl);
		};
	}, []);
	var p = e.removeScrollBar, m = e.inert;
	return I.createElement(I.Fragment, null, m ? I.createElement(a, { styles: _l(i) }) : null, p ? I.createElement(Qc, {
		noRelative: e.noRelative,
		gapMode: e.gapMode
	}) : null);
}
function xl(e) {
	for (var t = null; e !== null;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
	return t;
}
io(ao, bl);
//#endregion
//#region node_modules/.pnpm/aria-hidden@1.2.6/node_modules/aria-hidden/dist/es2015/index.js
var Sl = function(e) {
	return typeof document > "u" ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body;
}, Cl = /* @__PURE__ */ new WeakMap(), wl = /* @__PURE__ */ new WeakMap(), Tl = {}, El = 0, Dl = function(e) {
	return e && (e.host || Dl(e.parentNode));
}, Ol = function(e, t) {
	return t.map(function(t) {
		if (e.contains(t)) return t;
		var n = Dl(t);
		return n && e.contains(n) ? n : (console.error("aria-hidden", t, "in not contained inside", e, ". Doing nothing"), null);
	}).filter(function(e) {
		return !!e;
	});
}, kl = function(e, t, n, r) {
	var i = Ol(t, Array.isArray(e) ? e : [e]);
	Tl[n] || (Tl[n] = /* @__PURE__ */ new WeakMap());
	var a = Tl[n], o = [], s = /* @__PURE__ */ new Set(), c = new Set(i), l = function(e) {
		!e || s.has(e) || (s.add(e), l(e.parentNode));
	};
	i.forEach(l);
	var u = function(e) {
		!e || c.has(e) || Array.prototype.forEach.call(e.children, function(e) {
			if (s.has(e)) u(e);
			else try {
				var t = e.getAttribute(r), i = t !== null && t !== "false", c = (Cl.get(e) || 0) + 1, l = (a.get(e) || 0) + 1;
				Cl.set(e, c), a.set(e, l), o.push(e), c === 1 && i && wl.set(e, !0), l === 1 && e.setAttribute(n, "true"), i || e.setAttribute(r, "true");
			} catch (t) {
				console.error("aria-hidden: cannot operate on ", e, t);
			}
		});
	};
	return u(t), s.clear(), El++, function() {
		o.forEach(function(e) {
			var t = Cl.get(e) - 1, i = a.get(e) - 1;
			Cl.set(e, t), a.set(e, i), t || (wl.has(e) || e.removeAttribute(r), wl.delete(e)), i || e.removeAttribute(n);
		}), El--, El || (Cl = /* @__PURE__ */ new WeakMap(), Cl = /* @__PURE__ */ new WeakMap(), wl = /* @__PURE__ */ new WeakMap(), Tl = {});
	};
}, Al = function(e, t, n) {
	n === void 0 && (n = "data-aria-hidden");
	var r = Array.from(Array.isArray(e) ? e : [e]), i = t || Sl(e);
	return i ? (r.push.apply(r, Array.from(i.querySelectorAll("[aria-live], script"))), kl(r, i, n, "aria-hidden")) : function() {
		return null;
	};
}, jl = Hc(), Ml = "\n [" + Do + "] {\n   pointer-events: none !important;\n }\n", Nl = function() {
	return I.createElement(jl, { styles: Ml });
}, Pl = function(e) {
	return "current" in e ? e.current : e;
};
function Fl(e) {
	var t = e.setLockProps, n = e.onEscapeKey, r = e.onClickOutside, i = e.shards, a = e.onActivation, o = e.onDeactivation, s = e.noIsolation, c = e.activeNode, l = (0, I.useRef)(null), u = (0, I.useRef)(0);
	return I.useEffect(function() {
		var e = function(e) {
			e.defaultPrevented || (e.code === "Escape" || e.key === "Escape" || e.keyCode === 27) && n && n(e);
		}, t = function(e) {
			e.defaultPrevented || e.target === l.current || e instanceof MouseEvent && e.button !== 0 || i && i.map(Pl).some(function(t) {
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
	]), (0, I.useEffect)(function() {
		if (c) return a && a(c), function() {
			o && o();
		};
	}, [!!c]), (0, I.useEffect)(function() {
		if (!(s || !c)) return Al(k([c], (i || []).map(Pl)), c.ownerDocument.body, Do);
	}, [c, s]), (0, I.useEffect)(function() {
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
	}, []), I.createElement(Nl, null);
}
//#endregion
//#region node_modules/.pnpm/react-focus-on@3.10.2_@types+react@18.3.28_react@18.3.1/node_modules/react-focus-on/dist/es2015/sidecar.js
var Il = io(Eo, Fl), Ll = function(t) {
	return I.createElement(Il, e({}, t));
}, Rl = I.forwardRef(function(t, n) {
	return I.createElement(ko, e({}, t, {
		ref: n,
		sideCar: Ll
	}));
}), zl = class extends I.Component {
	constructor(e) {
		// istanbul ignore if
		if (super(e), this.rootName = "paragon-portal-root", typeof document > "u") this.rootElement = null;
		else if (document.getElementById(this.rootName)) this.rootElement = document.getElementById(this.rootName);
		else {
			let e = document.createElement("div");
			e.setAttribute("id", this.rootName), this.rootElement = document.body.appendChild(e);
		}
	}
	render() {
		// istanbul ignore next
		return this.rootElement ? /* @__PURE__ */ De.createPortal(this.props.children, this.rootElement) : null;
	}
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Modal/ModalLayer.js
function Bl({ onClick: e }) {
	return /* @__PURE__ */ I.createElement("div", {
		className: "pgn__modal-backdrop",
		onClick: e,
		onKeyDown: e,
		"data-testid": "modal-backdrop",
		role: "presentation"
	});
}
// istanbul ignore next
function Vl({ children: e = null }) {
	return /* @__PURE__ */ I.createElement("div", { className: "pgn__modal-content-container" }, e);
}
function Hl({ children: e, onClose: t, isOpen: n, isBlocking: r = !1, zIndex: i }) {
	if ((0, I.useEffect)(() => (n ? document.body.classList.add("pgn__hidden-scroll-padding-right") : document.body.classList.remove("pgn__hidden-scroll-padding-right"), () => {
		document.body.classList.remove("pgn__hidden-scroll-padding-right");
	}), [n]), !n) return null;
	let a = r ? void 0 : t;
	return /* @__PURE__ */ I.createElement(Ua, {
		onClose: t,
		isOpen: n,
		isBlocking: r
	}, /* @__PURE__ */ I.createElement(zl, null, /* @__PURE__ */ I.createElement(Rl, {
		allowPinchZoom: !0,
		scrollLock: !0,
		enabled: n,
		onEscapeKey: a,
		onClickOutside: a,
		className: (0, L.default)("pgn__modal-layer", i ? `zindex-${i}` : "")
	}, /* @__PURE__ */ I.createElement(Vl, null, /* @__PURE__ */ I.createElement(Bl, { onClick: a }), e))));
}
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Modal/ModalCloseButton.js
var Ul = /* @__PURE__ */ I.forwardRef(({ as: e, children: t, ...n }, r) => {
	let { onClose: i } = (0, I.useContext)(Ha), a = e, o = {
		...n,
		className: (0, L.default)("pgn__modal-close-button", n.className),
		onClick: () => {
			i(), n.onClick && n.onClick();
		},
		ref: r
	};
	return /* @__PURE__ */ I.createElement(a, o, t);
});
Ul.propTypes = {
	as: R.default.elementType,
	children: R.default.node,
	className: R.default.string,
	onClick: R.default.func
}, Ul.defaultProps = {
	as: O,
	onClick: void 0,
	className: void 0,
	children: null
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Modal/ModalDialogHeader.js
var Wl = /* @__PURE__ */ I.forwardRef(({ as: e = "div", children: t, ...n }, r) => /* @__PURE__ */ I.createElement(e, {
	...n,
	ref: r,
	className: (0, L.default)("pgn__modal-header", n.className)
}, t));
Wl.propTypes = {
	as: R.default.elementType,
	children: R.default.node.isRequired,
	className: R.default.string
}, Wl.defaultProps = {
	as: "div",
	className: ""
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Modal/ModalDialogTitle.js
function Gl({ as: e, children: t, ...n }) {
	return /* @__PURE__ */ I.createElement(e, {
		...n,
		className: (0, L.default)("pgn__modal-title", n.className)
	}, t);
}
Gl.propTypes = {
	as: R.default.elementType,
	children: R.default.node.isRequired,
	className: R.default.string
}, Gl.defaultProps = {
	as: "h2",
	className: void 0
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Modal/ModalDialogFooter.js
function Kl({ as: e, children: t, ...n }) {
	return /* @__PURE__ */ I.createElement(e, {
		...n,
		className: (0, L.default)("pgn__modal-footer", n.className)
	}, t);
}
Kl.propTypes = {
	as: R.default.elementType,
	children: R.default.node.isRequired,
	className: R.default.string
}, Kl.defaultProps = {
	as: "div",
	className: void 0
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/hooks/useIsVisibleHook.js
var ql = (e = !0) => {
	let t = (0, I.useRef)(null), [n, r] = (0, I.useState)(e);
	return (0, I.useEffect)(() => {
		try {
			if (t.current) {
				let e = new IntersectionObserver((e) => {
					e.forEach(({ isIntersecting: e }) => {
						r(e);
					});
				}, {});
				return e.observe(t.current), () => {
					e.disconnect();
				};
			}
		} catch (e) {
			if (!(e instanceof ReferenceError)) throw e;
		}
		return () => {};
	}, []), [n, t];
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Modal/ModalDialogBody.js
function Jl({ as: e, children: t, ...n }) {
	let [r, i] = ql(), [a, o] = ql(), s = (0, L.default)("pgn__modal-body", n.className, {
		"pgn__modal-body-scroll-top": r,
		"pgn__modal-body-scroll-bottom": a
	});
	return /* @__PURE__ */ I.createElement(e, {
		...n,
		className: s
	}, /* @__PURE__ */ I.createElement(I.Fragment, null, /* @__PURE__ */ I.createElement("div", { ref: i }), /* @__PURE__ */ I.createElement("div", { className: "pgn__modal-body-content" }, t), /* @__PURE__ */ I.createElement("div", { ref: o })));
}
Jl.propTypes = {
	as: R.default.elementType,
	children: R.default.node.isRequired,
	className: R.default.string
}, Jl.defaultProps = {
	as: "div",
	className: void 0
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Modal/ModalDialogHeroContent.js
function Yl({ as: e, children: t, ...n }) {
	return /* @__PURE__ */ I.createElement(e, {
		...n,
		className: (0, L.default)("pgn__modal-hero-content", n.className)
	}, t);
}
Yl.propTypes = {
	as: R.default.elementType,
	children: R.default.node.isRequired,
	className: R.default.string
}, Yl.defaultProps = {
	as: "div",
	className: void 0
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Modal/ModalDialogHeroBackground.js
function Xl({ as: e, backgroundSrc: t, children: n, ...r }) {
	return /* @__PURE__ */ I.createElement(e, {
		...r,
		className: (0, L.default)("pgn__modal-hero-bg", r.className),
		style: {
			backgroundImage: t ? `url(${t})` : void 0,
			...r.style
		}
	}, n);
}
Xl.propTypes = {
	as: R.default.elementType,
	backgroundSrc: R.default.string,
	children: R.default.node,
	className: R.default.string,
	style: R.default.shape({})
}, Xl.defaultProps = {
	as: "div",
	backgroundSrc: void 0,
	children: null,
	className: void 0,
	style: {}
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Modal/ModalDialogHero.js
function Zl({ as: e, children: t, ...n }) {
	return /* @__PURE__ */ I.createElement(e, {
		...n,
		className: (0, L.default)("pgn__modal-hero", n.className)
	}, t);
}
Zl.propTypes = {
	as: R.default.elementType,
	children: R.default.node.isRequired,
	className: R.default.string
}, Zl.defaultProps = {
	as: "div",
	className: void 0
}, Zl.Content = Yl, Zl.Background = Xl;
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Modal/messages.js
var Ql = T({ closeButtonText: {
	id: "pgn.Modal.closeButon",
	defaultMessage: "Close",
	description: "Accessible name for the close button in the modal dialog"
} });
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Modal/ModalDialog.js
function $l({ children: e, title: t, isOpen: n = !1, onClose: r, size: i = "md", variant: a = "default", hasCloseButton: o = !0, closeLabel: s, isFullscreenScroll: c = !1, className: l, isFullscreenOnMobile: u = !1, isBlocking: d = !1, zIndex: f, isOverflowVisible: p }) {
	let m = E(), h = s || m.formatMessage(Ql.closeButtonText), g = Or({ query: "(max-width: 767.98px)" }), _ = u && g;
	return /* @__PURE__ */ I.createElement(Hl, {
		isOpen: n,
		onClose: r,
		isBlocking: d,
		zIndex: f
	}, /* @__PURE__ */ I.createElement("div", {
		role: "dialog",
		"aria-label": t,
		className: (0, L.default)("pgn__modal", {
			[`pgn__modal-${_ ? "fullscreen" : i}`]: i,
			[`pgn__modal-${a}`]: a,
			"pgn__modal-scroll-fullscreen": c,
			"pgn__modal-visible-overflow": p
		}, l)
	}, o && /* @__PURE__ */ I.createElement("div", { className: "pgn__modal-close-container" }, /* @__PURE__ */ I.createElement(Ul, {
		as: le,
		iconAs: de,
		invertColors: a === "dark",
		src: Wr,
		alt: h
	})), e));
}
$l.Header = Wl, $l.Title = Gl, $l.Footer = Kl, $l.CloseButton = Ul, $l.Body = Jl, $l.Hero = Zl;
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/hooks/useToggleHook.js
function eu(e = !1, t = {}) {
	let { handleToggleOn: n, handleToggleOff: r, handleToggle: i } = t, [a, o] = (0, I.useState)(e), s = (0, I.useCallback)(() => {
		o(!0), n?.(), i?.(!0);
	}, [n, i]), c = (0, I.useCallback)(() => {
		o(!1), r?.(), i?.(!1);
	}, [r, i]);
	return [
		a,
		s,
		c,
		(0, I.useCallback)(() => {
			(a ? c : s)();
		}, [
			a,
			s,
			c
		])
	];
}
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Dropdown/index.js
var tu = /* @__PURE__ */ I.forwardRef(({ show: e, autoClose: t, onToggle: n, variant: r, className: i, ...a }, o) => {
	let [s, c] = I.useState(e), l = (e) => t === !1 ? e === "click" : t === "inside" ? e !== "rootClose" : t === "outside" ? e !== "select" : !0, u = (e, t, r) => {
		if (e) {
			c(!0), n?.(e, t, r);
			return;
		}
		let { source: i } = { ...r };
		t.currentTarget === document && (i !== "keydown" || t.key === "Escape") && (i = "rootClose"), l(i) && (c(!1), n?.(e, t, r));
	};
	return /* @__PURE__ */ I.createElement(Pt, {
		className: (0, L.default)("pgn__dropdown", `pgn__dropdown-${r}`, i),
		"data-testid": "dropdown",
		onToggle: u,
		ref: o,
		show: s,
		...a
	});
});
tu.propTypes = {
	autoClose: R.default.oneOfType([R.default.string, R.default.bool]),
	className: R.default.string,
	onToggle: R.default.func,
	show: R.default.bool,
	variant: R.default.oneOf(["light", "dark"])
}, tu.defaultProps = {
	autoClose: !0,
	className: "",
	onToggle: void 0,
	show: !1,
	variant: "light"
};
var nu = /* @__PURE__ */ I.forwardRef(({ as: e, bsPrefix: t, ...n }, r) => {
	let i = e === le ? "pgn__dropdown-toggle-iconbutton" : t;
	return /* @__PURE__ */ I.createElement(Ot, {
		...n,
		as: e,
		bsPrefix: i,
		ref: r
	});
});
nu.propTypes = {
	as: R.default.elementType,
	bsPrefix: R.default.string,
	id: R.default.oneOfType([R.default.string, R.default.number]).isRequired
}, nu.defaultProps = {
	as: O,
	bsPrefix: "dropdown-toggle"
}, tu.Item = /* @__PURE__ */ I.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ I.createElement(bt, {
	className: (0, L.default)(e, "pgn__dropdown-item"),
	ref: n,
	...t
})), tu.Item.propTypes = { className: R.default.string }, tu.Item.defaultProps = { className: void 0 }, tu.Toggle = nu, tu.Menu = Et, tu.Header = Pt.Header, tu.Divider = Pt.Divider;
//#endregion
//#region node_modules/.pnpm/react-popper@2.3.0_@popperjs+core@2.11.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-popper/lib/esm/utils.js
var ru = function(e) {
	return e.reduce(function(e, t) {
		var n = t[0];
		return e[n] = t[1], e;
	}, {});
}, iu = typeof window < "u" && window.document && window.document.createElement ? I.useLayoutEffect : I.useEffect;
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/applyStyles.js
function au(e) {
	var t = e.state;
	Object.keys(t.elements).forEach(function(e) {
		var n = t.styles[e] || {}, r = t.attributes[e] || {}, o = t.elements[e];
		!i(o) || !a(o) || (Object.assign(o.style, n), Object.keys(r).forEach(function(e) {
			var t = r[e];
			t === !1 ? o.removeAttribute(e) : o.setAttribute(e, t === !0 ? "" : t);
		}));
	});
}
function ou(e) {
	var t = e.state, n = {
		popper: {
			position: t.options.strategy,
			left: "0",
			top: "0",
			margin: "0"
		},
		arrow: { position: "absolute" },
		reference: {}
	};
	return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
		Object.keys(t.elements).forEach(function(e) {
			var r = t.elements[e], o = t.attributes[e] || {}, s = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]).reduce(function(e, t) {
				return e[t] = "", e;
			}, {});
			!i(r) || !a(r) || (Object.assign(r.style, s), Object.keys(o).forEach(function(e) {
				r.removeAttribute(e);
			}));
		});
	};
}
var su = /* @__PURE__ */ D({ defaultModifiers: [
	r,
	we,
	Se,
	{
		name: "applyStyles",
		enabled: !0,
		phase: "write",
		fn: au,
		effect: ou,
		requires: ["computeStyles"]
	},
	A,
	y,
	xe,
	b,
	Ce
] }), cu = /* @__PURE__ */ se((/* @__PURE__ */ j(((e, t) => {
	var n = typeof Element < "u", r = typeof Map == "function", i = typeof Set == "function", a = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
	function o(e, t) {
		if (e === t) return !0;
		if (e && t && typeof e == "object" && typeof t == "object") {
			if (e.constructor !== t.constructor) return !1;
			var s, c, l;
			if (Array.isArray(e)) {
				if (s = e.length, s != t.length) return !1;
				for (c = s; c-- !== 0;) if (!o(e[c], t[c])) return !1;
				return !0;
			}
			var u;
			if (r && e instanceof Map && t instanceof Map) {
				if (e.size !== t.size) return !1;
				for (u = e.entries(); !(c = u.next()).done;) if (!t.has(c.value[0])) return !1;
				for (u = e.entries(); !(c = u.next()).done;) if (!o(c.value[1], t.get(c.value[0]))) return !1;
				return !0;
			}
			if (i && e instanceof Set && t instanceof Set) {
				if (e.size !== t.size) return !1;
				for (u = e.entries(); !(c = u.next()).done;) if (!t.has(c.value[0])) return !1;
				return !0;
			}
			if (a && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
				if (s = e.length, s != t.length) return !1;
				for (c = s; c-- !== 0;) if (e[c] !== t[c]) return !1;
				return !0;
			}
			if (e.constructor === RegExp) return e.source === t.source && e.flags === t.flags;
			if (e.valueOf !== Object.prototype.valueOf && typeof e.valueOf == "function" && typeof t.valueOf == "function") return e.valueOf() === t.valueOf();
			if (e.toString !== Object.prototype.toString && typeof e.toString == "function" && typeof t.toString == "function") return e.toString() === t.toString();
			if (l = Object.keys(e), s = l.length, s !== Object.keys(t).length) return !1;
			for (c = s; c-- !== 0;) if (!Object.prototype.hasOwnProperty.call(t, l[c])) return !1;
			if (n && e instanceof Element) return !1;
			for (c = s; c-- !== 0;) if (!((l[c] === "_owner" || l[c] === "__v" || l[c] === "__o") && e.$$typeof) && !o(e[l[c]], t[l[c]])) return !1;
			return !0;
		}
		return e !== e && t !== t;
	}
	t.exports = function(e, t) {
		try {
			return o(e, t);
		} catch (e) {
			if ((e.message || "").match(/stack|recursion/i)) return console.warn("react-fast-compare cannot handle circular refs"), !1;
			throw e;
		}
	};
})))()), lu = [], uu = function(e, t, n) {
	n === void 0 && (n = {});
	var r = I.useRef(null), i = {
		onFirstUpdate: n.onFirstUpdate,
		placement: n.placement || "bottom",
		strategy: n.strategy || "absolute",
		modifiers: n.modifiers || lu
	}, a = I.useState({
		styles: {
			popper: {
				position: i.strategy,
				left: "0",
				top: "0"
			},
			arrow: { position: "absolute" }
		},
		attributes: {}
	}), o = a[0], s = a[1], c = I.useMemo(function() {
		return {
			name: "updateState",
			enabled: !0,
			phase: "write",
			fn: function(e) {
				var t = e.state, n = Object.keys(t.elements);
				De.flushSync(function() {
					s({
						styles: ru(n.map(function(e) {
							return [e, t.styles[e] || {}];
						})),
						attributes: ru(n.map(function(e) {
							return [e, t.attributes[e]];
						}))
					});
				});
			},
			requires: ["computeStyles"]
		};
	}, []), l = I.useMemo(function() {
		var e = {
			onFirstUpdate: i.onFirstUpdate,
			placement: i.placement,
			strategy: i.strategy,
			modifiers: [].concat(i.modifiers, [c, {
				name: "applyStyles",
				enabled: !1
			}])
		};
		return (0, cu.default)(r.current, e) ? r.current || e : (r.current = e, e);
	}, [
		i.onFirstUpdate,
		i.placement,
		i.strategy,
		i.modifiers,
		c
	]), u = I.useRef();
	return iu(function() {
		u.current && u.current.setOptions(l);
	}, [l]), iu(function() {
		if (!(e == null || t == null)) {
			var r = (n.createPopper || su)(e, t, l);
			return u.current = r, function() {
				r.destroy(), u.current = null;
			};
		}
	}, [
		e,
		t,
		n.createPopper
	]), {
		state: u.current ? u.current.state : null,
		styles: o.styles,
		attributes: o.attributes,
		update: u.current ? u.current.update : null,
		forceUpdate: u.current ? u.current.forceUpdate : null
	};
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Modal/PopperElement.js
function du({ children: e, target: t, strategy: n, placement: r, modifiers: i }) {
	let [a, o] = (0, I.useState)(null), { styles: s, attributes: c } = uu(t, a, {
		modifiers: i,
		strategy: n,
		placement: r
	});
	return t ? /* @__PURE__ */ I.createElement("div", {
		ref: o,
		style: {
			...s.popper,
			zIndex: 2e3
		},
		...c.popper
	}, e) : null;
}
du.defaultProps = { target: void 0 }, du.propTypes = {
	children: R.default.node,
	target: R.default.shape({ current: R.default.shape({}) }),
	strategy: R.default.oneOf(["absolute", "fixed"]),
	placement: R.default.oneOf([
		"auto",
		"auto-start",
		"auto-end",
		"top",
		"top-start",
		"top-end",
		"bottom",
		"bottom-start",
		"bottom-end",
		"right",
		"right-start",
		"right-end",
		"left",
		"left-start",
		"left-end"
	]),
	modifiers: R.default.arrayOf(R.default.shape({}))
}, du.defaultProps = {
	children: void 0,
	strategy: "absolute",
	placement: "bottom-start",
	modifiers: [{
		name: "flip",
		enabled: !0
	}, {
		name: "preventOverflow",
		options: { tether: !1 }
	}]
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Modal/ModalPopup.js
var fu = {
	right: [-2, 10],
	left: [-2, 10]
};
function pu({ children: e, onClose: t, isOpen: n, positionRef: r, isBlocking: i, withPortal: a, placement: o, hasArrow: s, ...c }) {
	let l = a ? zl : I.Fragment, u = fu[o] || [0, 10], d = [{
		name: "eventListeners",
		options: { scroll: !1 }
	}, {
		name: "offset",
		options: { offset: () => u }
	}], f = (e) => {
		e.type !== "touchstart" && t();
	};
	return /* @__PURE__ */ I.createElement(Ua, {
		onClose: t,
		isOpen: n,
		isBlocking: i
	}, /* @__PURE__ */ I.createElement(l, null, /* @__PURE__ */ I.createElement(du, {
		modifiers: s ? d : null,
		target: r,
		placement: o,
		...c
	}, /* @__PURE__ */ I.createElement(Rl, {
		scrollLock: !1,
		enabled: n,
		onEscapeKey: t,
		onClickOutside: f
	}, n && /* @__PURE__ */ I.createElement("div", { className: "pgn__modal-popup__tooltip" }, e, s && /* @__PURE__ */ I.createElement("div", {
		id: "arrow",
		"data-testid": "modal-popup-arrow",
		className: `pgn__modal-popup__arrow pgn__modal-popup__arrow-${o}`,
		"data-popper-arrow": ""
	}))))));
}
pu.propTypes = {
	children: R.default.node.isRequired,
	onClose: R.default.func.isRequired,
	isOpen: R.default.bool.isRequired,
	isBlocking: R.default.bool,
	withPortal: R.default.bool,
	positionRef: R.default.oneOfType([R.default.func, R.default.shape({ current: R.default.shape({}) })]),
	placement: du.propTypes.placement,
	hasArrow: R.default.bool
}, pu.defaultProps = {
	isBlocking: !1,
	withPortal: !1,
	placement: "bottom-start",
	positionRef: null,
	hasArrow: !1
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Modal/StandardModal.js
var mu = "Close";
function hu({ children: e, footerNode: t, beforeBodyNode: n, afterBodyNode: r, ...i }) {
	return /* @__PURE__ */ I.createElement($l, { ...i }, /* @__PURE__ */ I.createElement($l.Header, null, /* @__PURE__ */ I.createElement($l.Title, null, i.title)), n, /* @__PURE__ */ I.createElement($l.Body, null, e), r, t && /* @__PURE__ */ I.createElement($l.Footer, null, t));
}
hu.propTypes = {
	children: R.default.node.isRequired,
	title: R.default.string.isRequired,
	onClose: R.default.func.isRequired,
	isOpen: R.default.bool,
	hasCloseButton: R.default.bool,
	size: R.default.oneOf([
		"sm",
		"md",
		"lg",
		"xl",
		"fullscreen"
	]),
	variant: R.default.oneOf([
		"default",
		"warning",
		"danger",
		"success",
		"dark"
	]),
	closeLabel: R.default.string,
	className: R.default.string,
	isFullscreenScroll: R.default.bool,
	footerNode: R.default.node,
	beforeBodyNode: R.default.node,
	afterBodyNode: R.default.node
}, hu.defaultProps = {
	isOpen: !1,
	hasCloseButton: !0,
	size: "md",
	variant: "default",
	closeLabel: mu,
	className: void 0,
	isFullscreenScroll: !1,
	footerNode: null,
	beforeBodyNode: null,
	afterBodyNode: null
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Nav/index.js
function gu(e) {
	return /* @__PURE__ */ I.createElement(Fn, { ...e });
}
function _u(e) {
	return /* @__PURE__ */ I.createElement(kn, { ...e });
}
function vu(e) {
	return /* @__PURE__ */ I.createElement(Mn, { ...e });
}
function yu(e) {
	return /* @__PURE__ */ I.createElement(Ln, { ...e });
}
function bu(e) {
	return /* @__PURE__ */ I.createElement(Ln.Item, { ...e });
}
function xu(e) {
	return /* @__PURE__ */ I.createElement(Ln.Divider, { ...e });
}
gu.propTypes = {
	cardHeaderBsPrefix: R.default.string,
	defaultActiveKey: R.default.oneOfType([R.default.string, R.default.number]),
	activeKey: R.default.oneOfType([R.default.string, R.default.number]),
	as: R.default.elementType,
	fill: R.default.bool,
	justify: R.default.bool,
	navbar: R.default.bool,
	onKeyDown: R.default.func,
	onSelect: R.default.func,
	role: R.default.string,
	variant: R.default.oneOf(["tabs", "pills"]),
	bsPrefix: R.default.string
}, _u.propTypes = {
	role: R.default.string,
	as: R.default.elementType,
	bsPrefix: R.default.string
}, vu.propTypes = {
	onSelect: R.default.string,
	active: R.default.bool,
	as: R.default.elementType,
	disabled: R.default.bool,
	eventKey: R.default.oneOfType([R.default.string, R.default.number]),
	href: R.default.string,
	role: R.default.string,
	bsPrefix: R.default.string
}, yu.propTypes = {
	id: R.default.string.isRequired,
	title: R.default.node.isRequired,
	active: R.default.bool,
	disabled: R.default.bool,
	menuRole: R.default.string,
	menuVariant: R.default.oneOf(["dark"]),
	onClick: R.default.func,
	renderMenuOnMount: R.default.bool,
	rootCloseEvent: R.default.string,
	bsPrefix: R.default.string
}, gu.defaultProps = { ...Fn.defaultProps }, yu.defaultProps = { ...Ln.defaultProps }, _u.defaultProps = { ...kn.defaultProps }, vu.defaultProps = { ...Mn.defaultProps }, gu.Item = _u, gu.Link = vu, yu.Item = bu, yu.Divider = xu;
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/ProgressBar/utils.js
var Su = (e, t = "ltr", n = !0, r = "pgn__annotation") => {
	if (!e.current || !e.current.style) return !1;
	let { children: i } = e.current, a = 0;
	for (let e = 0; e < i.length; e++) {
		let t = i[e].getBoundingClientRect();
		i[e].className.includes(r) ? a += t.width / 2 : a += n ? 0 : t.width;
	}
	return e.current.style[t === "rtl" ? "marginRight" : "marginLeft"] = `${-a}px`, !0;
}, Cu = (e, t) => t === "rtl" ? { right: `${e}%` } : { left: `${e}%` }, wu = "pgn__annotation", Tu = 50, Eu = "warning", Du = "dark", Ou = [
	"dark",
	"warning",
	"success",
	"error"
];
function ku(e) {
	return /* @__PURE__ */ I.createElement(Gn, { ...e });
}
function Au({ now: e, label: t, variant: n, threshold: r, thresholdLabel: i, thresholdVariant: a, progressHint: o, thresholdHint: s, ...c }) {
	let l = I.useRef(), u = I.useRef(), d = (r || 0) - (e || 0), f = e < Tu, p = r < Tu, m = Ou.includes(n) ? n : Eu, h = Ou.includes(a) ? a : Du, g = window.getComputedStyle(document.body).getPropertyValue("direction"), _ = (0, I.useCallback)(() => {
		Su(l, g, f, wu), Su(u, g, p, wu);
	}, [
		g,
		f,
		p
	]);
	(0, I.useEffect)(() => {
		_();
		let e = new ResizeObserver(() => {
			_();
		}), t = l.current;
		return e.observe(t), () => t && e.unobserve(t);
	}, [_]);
	let v = (e) => /* @__PURE__ */ I.createElement("span", {
		className: "pgn__progress-hint",
		"data-testid": "progress-hint"
	}, e);
	return /* @__PURE__ */ I.createElement("div", { className: "pgn__progress-annotated" }, !!t && /* @__PURE__ */ I.createElement("div", {
		className: "pgn__progress-info",
		style: Cu(e, g),
		ref: l
	}, !f && v(o), /* @__PURE__ */ I.createElement(zr, { variant: m }, t), f && v(o)), /* @__PURE__ */ I.createElement(Gn, null, /* @__PURE__ */ I.createElement(Gn, {
		...c,
		now: e,
		className: (0, L.default)(`pgn__progress-bar--${m}`, d > 0 ? "pgn__progress-tick--white" : "pgn__progress-tick--black"),
		srOnly: !0
	}), !!r && /* @__PURE__ */ I.createElement(Gn, {
		now: d,
		className: `pgn__progress-bar--${h}`,
		srOnly: !0
	})), !!r && !!i && /* @__PURE__ */ I.createElement("div", {
		className: "pgn__progress-info",
		style: Cu(r, g),
		ref: u
	}, !p && v(s), /* @__PURE__ */ I.createElement(zr, {
		arrowPlacement: "top",
		variant: h
	}, i), p && v(s)));
}
Au.propTypes = {
	now: R.default.number,
	label: R.default.node,
	variant: R.default.oneOf(Ou),
	className: R.default.string,
	threshold: R.default.number,
	thresholdLabel: R.default.node,
	thresholdVariant: R.default.oneOf(Ou),
	progressHint: R.default.node,
	thresholdHint: R.default.node
}, Au.defaultProps = {
	now: void 0,
	label: void 0,
	variant: Eu,
	className: void 0,
	threshold: void 0,
	thresholdLabel: void 0,
	thresholdVariant: Du,
	progressHint: void 0,
	thresholdHint: void 0
}, ku.Annotated = Au;
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Sticky/index.js
var ju = ["top", "bottom"], Mu = /* @__PURE__ */ I.forwardRef(({ position: e, children: t, offset: n, className: r, ...i }, a) => {
	let [o, s] = (0, I.useState)(!1), c = I.useRef(), l = a || c;
	return (0, I.useLayoutEffect)(() => {
		if (l.current) {
			let t = l.current, n = window.getComputedStyle(t)[e || "top"], r = 1 + (parseInt(n, 10) || 0), i = new IntersectionObserver(([e]) => s(e.intersectionRatio < 1), {
				threshold: [1],
				rootMargin: e === "bottom" ? `0px 0px -${r}px 0px` : `-${r}px 0px 0px 0px`
			});
			return i.observe(t), () => {
				i.unobserve(t);
			};
		}
	}, [e, l]), /* @__PURE__ */ I.createElement("div", {
		className: (0, L.default)("pgn__sticky", `pgn__sticky-${e || "top"}`, n ? `pgn__sticky-offset--${n}` : "", { "pgn__sticky-shadow": o }, r),
		ref: l,
		...i
	}, t);
});
Mu.propTypes = {
	children: R.default.node.isRequired,
	position: R.default.oneOf(ju),
	offset: R.default.oneOfType([R.default.number, R.default.string]),
	className: R.default.string
}, Mu.defaultProps = {
	position: "top",
	offset: void 0,
	className: void 0
};
//#endregion
//#region node_modules/.pnpm/file-selector@2.1.2/node_modules/file-selector/dist/es2015/file.js
var Nu = new Map([
	["1km", "application/vnd.1000minds.decision-model+xml"],
	["3dml", "text/vnd.in3d.3dml"],
	["3ds", "image/x-3ds"],
	["3g2", "video/3gpp2"],
	["3gp", "video/3gp"],
	["3gpp", "video/3gpp"],
	["3mf", "model/3mf"],
	["7z", "application/x-7z-compressed"],
	["7zip", "application/x-7z-compressed"],
	["123", "application/vnd.lotus-1-2-3"],
	["aab", "application/x-authorware-bin"],
	["aac", "audio/x-acc"],
	["aam", "application/x-authorware-map"],
	["aas", "application/x-authorware-seg"],
	["abw", "application/x-abiword"],
	["ac", "application/vnd.nokia.n-gage.ac+xml"],
	["ac3", "audio/ac3"],
	["acc", "application/vnd.americandynamics.acc"],
	["ace", "application/x-ace-compressed"],
	["acu", "application/vnd.acucobol"],
	["acutc", "application/vnd.acucorp"],
	["adp", "audio/adpcm"],
	["aep", "application/vnd.audiograph"],
	["afm", "application/x-font-type1"],
	["afp", "application/vnd.ibm.modcap"],
	["ahead", "application/vnd.ahead.space"],
	["ai", "application/pdf"],
	["aif", "audio/x-aiff"],
	["aifc", "audio/x-aiff"],
	["aiff", "audio/x-aiff"],
	["air", "application/vnd.adobe.air-application-installer-package+zip"],
	["ait", "application/vnd.dvb.ait"],
	["ami", "application/vnd.amiga.ami"],
	["amr", "audio/amr"],
	["apk", "application/vnd.android.package-archive"],
	["apng", "image/apng"],
	["appcache", "text/cache-manifest"],
	["application", "application/x-ms-application"],
	["apr", "application/vnd.lotus-approach"],
	["arc", "application/x-freearc"],
	["arj", "application/x-arj"],
	["asc", "application/pgp-signature"],
	["asf", "video/x-ms-asf"],
	["asm", "text/x-asm"],
	["aso", "application/vnd.accpac.simply.aso"],
	["asx", "video/x-ms-asf"],
	["atc", "application/vnd.acucorp"],
	["atom", "application/atom+xml"],
	["atomcat", "application/atomcat+xml"],
	["atomdeleted", "application/atomdeleted+xml"],
	["atomsvc", "application/atomsvc+xml"],
	["atx", "application/vnd.antix.game-component"],
	["au", "audio/x-au"],
	["avi", "video/x-msvideo"],
	["avif", "image/avif"],
	["aw", "application/applixware"],
	["azf", "application/vnd.airzip.filesecure.azf"],
	["azs", "application/vnd.airzip.filesecure.azs"],
	["azv", "image/vnd.airzip.accelerator.azv"],
	["azw", "application/vnd.amazon.ebook"],
	["b16", "image/vnd.pco.b16"],
	["bat", "application/x-msdownload"],
	["bcpio", "application/x-bcpio"],
	["bdf", "application/x-font-bdf"],
	["bdm", "application/vnd.syncml.dm+wbxml"],
	["bdoc", "application/x-bdoc"],
	["bed", "application/vnd.realvnc.bed"],
	["bh2", "application/vnd.fujitsu.oasysprs"],
	["bin", "application/octet-stream"],
	["blb", "application/x-blorb"],
	["blorb", "application/x-blorb"],
	["bmi", "application/vnd.bmi"],
	["bmml", "application/vnd.balsamiq.bmml+xml"],
	["bmp", "image/bmp"],
	["book", "application/vnd.framemaker"],
	["box", "application/vnd.previewsystems.box"],
	["boz", "application/x-bzip2"],
	["bpk", "application/octet-stream"],
	["bpmn", "application/octet-stream"],
	["bsp", "model/vnd.valve.source.compiled-map"],
	["btif", "image/prs.btif"],
	["buffer", "application/octet-stream"],
	["bz", "application/x-bzip"],
	["bz2", "application/x-bzip2"],
	["c", "text/x-c"],
	["c4d", "application/vnd.clonk.c4group"],
	["c4f", "application/vnd.clonk.c4group"],
	["c4g", "application/vnd.clonk.c4group"],
	["c4p", "application/vnd.clonk.c4group"],
	["c4u", "application/vnd.clonk.c4group"],
	["c11amc", "application/vnd.cluetrust.cartomobile-config"],
	["c11amz", "application/vnd.cluetrust.cartomobile-config-pkg"],
	["cab", "application/vnd.ms-cab-compressed"],
	["caf", "audio/x-caf"],
	["cap", "application/vnd.tcpdump.pcap"],
	["car", "application/vnd.curl.car"],
	["cat", "application/vnd.ms-pki.seccat"],
	["cb7", "application/x-cbr"],
	["cba", "application/x-cbr"],
	["cbr", "application/x-cbr"],
	["cbt", "application/x-cbr"],
	["cbz", "application/x-cbr"],
	["cc", "text/x-c"],
	["cco", "application/x-cocoa"],
	["cct", "application/x-director"],
	["ccxml", "application/ccxml+xml"],
	["cdbcmsg", "application/vnd.contact.cmsg"],
	["cda", "application/x-cdf"],
	["cdf", "application/x-netcdf"],
	["cdfx", "application/cdfx+xml"],
	["cdkey", "application/vnd.mediastation.cdkey"],
	["cdmia", "application/cdmi-capability"],
	["cdmic", "application/cdmi-container"],
	["cdmid", "application/cdmi-domain"],
	["cdmio", "application/cdmi-object"],
	["cdmiq", "application/cdmi-queue"],
	["cdr", "application/cdr"],
	["cdx", "chemical/x-cdx"],
	["cdxml", "application/vnd.chemdraw+xml"],
	["cdy", "application/vnd.cinderella"],
	["cer", "application/pkix-cert"],
	["cfs", "application/x-cfs-compressed"],
	["cgm", "image/cgm"],
	["chat", "application/x-chat"],
	["chm", "application/vnd.ms-htmlhelp"],
	["chrt", "application/vnd.kde.kchart"],
	["cif", "chemical/x-cif"],
	["cii", "application/vnd.anser-web-certificate-issue-initiation"],
	["cil", "application/vnd.ms-artgalry"],
	["cjs", "application/node"],
	["cla", "application/vnd.claymore"],
	["class", "application/octet-stream"],
	["clkk", "application/vnd.crick.clicker.keyboard"],
	["clkp", "application/vnd.crick.clicker.palette"],
	["clkt", "application/vnd.crick.clicker.template"],
	["clkw", "application/vnd.crick.clicker.wordbank"],
	["clkx", "application/vnd.crick.clicker"],
	["clp", "application/x-msclip"],
	["cmc", "application/vnd.cosmocaller"],
	["cmdf", "chemical/x-cmdf"],
	["cml", "chemical/x-cml"],
	["cmp", "application/vnd.yellowriver-custom-menu"],
	["cmx", "image/x-cmx"],
	["cod", "application/vnd.rim.cod"],
	["coffee", "text/coffeescript"],
	["com", "application/x-msdownload"],
	["conf", "text/plain"],
	["cpio", "application/x-cpio"],
	["cpp", "text/x-c"],
	["cpt", "application/mac-compactpro"],
	["crd", "application/x-mscardfile"],
	["crl", "application/pkix-crl"],
	["crt", "application/x-x509-ca-cert"],
	["crx", "application/x-chrome-extension"],
	["cryptonote", "application/vnd.rig.cryptonote"],
	["csh", "application/x-csh"],
	["csl", "application/vnd.citationstyles.style+xml"],
	["csml", "chemical/x-csml"],
	["csp", "application/vnd.commonspace"],
	["csr", "application/octet-stream"],
	["css", "text/css"],
	["cst", "application/x-director"],
	["csv", "text/csv"],
	["cu", "application/cu-seeme"],
	["curl", "text/vnd.curl"],
	["cww", "application/prs.cww"],
	["cxt", "application/x-director"],
	["cxx", "text/x-c"],
	["dae", "model/vnd.collada+xml"],
	["daf", "application/vnd.mobius.daf"],
	["dart", "application/vnd.dart"],
	["dataless", "application/vnd.fdsn.seed"],
	["davmount", "application/davmount+xml"],
	["dbf", "application/vnd.dbf"],
	["dbk", "application/docbook+xml"],
	["dcr", "application/x-director"],
	["dcurl", "text/vnd.curl.dcurl"],
	["dd2", "application/vnd.oma.dd2+xml"],
	["ddd", "application/vnd.fujixerox.ddd"],
	["ddf", "application/vnd.syncml.dmddf+xml"],
	["dds", "image/vnd.ms-dds"],
	["deb", "application/x-debian-package"],
	["def", "text/plain"],
	["deploy", "application/octet-stream"],
	["der", "application/x-x509-ca-cert"],
	["dfac", "application/vnd.dreamfactory"],
	["dgc", "application/x-dgc-compressed"],
	["dic", "text/x-c"],
	["dir", "application/x-director"],
	["dis", "application/vnd.mobius.dis"],
	["disposition-notification", "message/disposition-notification"],
	["dist", "application/octet-stream"],
	["distz", "application/octet-stream"],
	["djv", "image/vnd.djvu"],
	["djvu", "image/vnd.djvu"],
	["dll", "application/octet-stream"],
	["dmg", "application/x-apple-diskimage"],
	["dmn", "application/octet-stream"],
	["dmp", "application/vnd.tcpdump.pcap"],
	["dms", "application/octet-stream"],
	["dna", "application/vnd.dna"],
	["doc", "application/msword"],
	["docm", "application/vnd.ms-word.template.macroEnabled.12"],
	["docx", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"],
	["dot", "application/msword"],
	["dotm", "application/vnd.ms-word.template.macroEnabled.12"],
	["dotx", "application/vnd.openxmlformats-officedocument.wordprocessingml.template"],
	["dp", "application/vnd.osgi.dp"],
	["dpg", "application/vnd.dpgraph"],
	["dra", "audio/vnd.dra"],
	["drle", "image/dicom-rle"],
	["dsc", "text/prs.lines.tag"],
	["dssc", "application/dssc+der"],
	["dtb", "application/x-dtbook+xml"],
	["dtd", "application/xml-dtd"],
	["dts", "audio/vnd.dts"],
	["dtshd", "audio/vnd.dts.hd"],
	["dump", "application/octet-stream"],
	["dvb", "video/vnd.dvb.file"],
	["dvi", "application/x-dvi"],
	["dwd", "application/atsc-dwd+xml"],
	["dwf", "model/vnd.dwf"],
	["dwg", "image/vnd.dwg"],
	["dxf", "image/vnd.dxf"],
	["dxp", "application/vnd.spotfire.dxp"],
	["dxr", "application/x-director"],
	["ear", "application/java-archive"],
	["ecelp4800", "audio/vnd.nuera.ecelp4800"],
	["ecelp7470", "audio/vnd.nuera.ecelp7470"],
	["ecelp9600", "audio/vnd.nuera.ecelp9600"],
	["ecma", "application/ecmascript"],
	["edm", "application/vnd.novadigm.edm"],
	["edx", "application/vnd.novadigm.edx"],
	["efif", "application/vnd.picsel"],
	["ei6", "application/vnd.pg.osasli"],
	["elc", "application/octet-stream"],
	["emf", "image/emf"],
	["eml", "message/rfc822"],
	["emma", "application/emma+xml"],
	["emotionml", "application/emotionml+xml"],
	["emz", "application/x-msmetafile"],
	["eol", "audio/vnd.digital-winds"],
	["eot", "application/vnd.ms-fontobject"],
	["eps", "application/postscript"],
	["epub", "application/epub+zip"],
	["es", "application/ecmascript"],
	["es3", "application/vnd.eszigno3+xml"],
	["esa", "application/vnd.osgi.subsystem"],
	["esf", "application/vnd.epson.esf"],
	["et3", "application/vnd.eszigno3+xml"],
	["etx", "text/x-setext"],
	["eva", "application/x-eva"],
	["evy", "application/x-envoy"],
	["exe", "application/octet-stream"],
	["exi", "application/exi"],
	["exp", "application/express"],
	["exr", "image/aces"],
	["ext", "application/vnd.novadigm.ext"],
	["ez", "application/andrew-inset"],
	["ez2", "application/vnd.ezpix-album"],
	["ez3", "application/vnd.ezpix-package"],
	["f", "text/x-fortran"],
	["f4v", "video/mp4"],
	["f77", "text/x-fortran"],
	["f90", "text/x-fortran"],
	["fbs", "image/vnd.fastbidsheet"],
	["fcdt", "application/vnd.adobe.formscentral.fcdt"],
	["fcs", "application/vnd.isac.fcs"],
	["fdf", "application/vnd.fdf"],
	["fdt", "application/fdt+xml"],
	["fe_launch", "application/vnd.denovo.fcselayout-link"],
	["fg5", "application/vnd.fujitsu.oasysgp"],
	["fgd", "application/x-director"],
	["fh", "image/x-freehand"],
	["fh4", "image/x-freehand"],
	["fh5", "image/x-freehand"],
	["fh7", "image/x-freehand"],
	["fhc", "image/x-freehand"],
	["fig", "application/x-xfig"],
	["fits", "image/fits"],
	["flac", "audio/x-flac"],
	["fli", "video/x-fli"],
	["flo", "application/vnd.micrografx.flo"],
	["flv", "video/x-flv"],
	["flw", "application/vnd.kde.kivio"],
	["flx", "text/vnd.fmi.flexstor"],
	["fly", "text/vnd.fly"],
	["fm", "application/vnd.framemaker"],
	["fnc", "application/vnd.frogans.fnc"],
	["fo", "application/vnd.software602.filler.form+xml"],
	["for", "text/x-fortran"],
	["fpx", "image/vnd.fpx"],
	["frame", "application/vnd.framemaker"],
	["fsc", "application/vnd.fsc.weblaunch"],
	["fst", "image/vnd.fst"],
	["ftc", "application/vnd.fluxtime.clip"],
	["fti", "application/vnd.anser-web-funds-transfer-initiation"],
	["fvt", "video/vnd.fvt"],
	["fxp", "application/vnd.adobe.fxp"],
	["fxpl", "application/vnd.adobe.fxp"],
	["fzs", "application/vnd.fuzzysheet"],
	["g2w", "application/vnd.geoplan"],
	["g3", "image/g3fax"],
	["g3w", "application/vnd.geospace"],
	["gac", "application/vnd.groove-account"],
	["gam", "application/x-tads"],
	["gbr", "application/rpki-ghostbusters"],
	["gca", "application/x-gca-compressed"],
	["gdl", "model/vnd.gdl"],
	["gdoc", "application/vnd.google-apps.document"],
	["geo", "application/vnd.dynageo"],
	["geojson", "application/geo+json"],
	["gex", "application/vnd.geometry-explorer"],
	["ggb", "application/vnd.geogebra.file"],
	["ggt", "application/vnd.geogebra.tool"],
	["ghf", "application/vnd.groove-help"],
	["gif", "image/gif"],
	["gim", "application/vnd.groove-identity-message"],
	["glb", "model/gltf-binary"],
	["gltf", "model/gltf+json"],
	["gml", "application/gml+xml"],
	["gmx", "application/vnd.gmx"],
	["gnumeric", "application/x-gnumeric"],
	["gpg", "application/gpg-keys"],
	["gph", "application/vnd.flographit"],
	["gpx", "application/gpx+xml"],
	["gqf", "application/vnd.grafeq"],
	["gqs", "application/vnd.grafeq"],
	["gram", "application/srgs"],
	["gramps", "application/x-gramps-xml"],
	["gre", "application/vnd.geometry-explorer"],
	["grv", "application/vnd.groove-injector"],
	["grxml", "application/srgs+xml"],
	["gsf", "application/x-font-ghostscript"],
	["gsheet", "application/vnd.google-apps.spreadsheet"],
	["gslides", "application/vnd.google-apps.presentation"],
	["gtar", "application/x-gtar"],
	["gtm", "application/vnd.groove-tool-message"],
	["gtw", "model/vnd.gtw"],
	["gv", "text/vnd.graphviz"],
	["gxf", "application/gxf"],
	["gxt", "application/vnd.geonext"],
	["gz", "application/gzip"],
	["gzip", "application/gzip"],
	["h", "text/x-c"],
	["h261", "video/h261"],
	["h263", "video/h263"],
	["h264", "video/h264"],
	["hal", "application/vnd.hal+xml"],
	["hbci", "application/vnd.hbci"],
	["hbs", "text/x-handlebars-template"],
	["hdd", "application/x-virtualbox-hdd"],
	["hdf", "application/x-hdf"],
	["heic", "image/heic"],
	["heics", "image/heic-sequence"],
	["heif", "image/heif"],
	["heifs", "image/heif-sequence"],
	["hej2", "image/hej2k"],
	["held", "application/atsc-held+xml"],
	["hh", "text/x-c"],
	["hjson", "application/hjson"],
	["hlp", "application/winhlp"],
	["hpgl", "application/vnd.hp-hpgl"],
	["hpid", "application/vnd.hp-hpid"],
	["hps", "application/vnd.hp-hps"],
	["hqx", "application/mac-binhex40"],
	["hsj2", "image/hsj2"],
	["htc", "text/x-component"],
	["htke", "application/vnd.kenameaapp"],
	["htm", "text/html"],
	["html", "text/html"],
	["hvd", "application/vnd.yamaha.hv-dic"],
	["hvp", "application/vnd.yamaha.hv-voice"],
	["hvs", "application/vnd.yamaha.hv-script"],
	["i2g", "application/vnd.intergeo"],
	["icc", "application/vnd.iccprofile"],
	["ice", "x-conference/x-cooltalk"],
	["icm", "application/vnd.iccprofile"],
	["ico", "image/x-icon"],
	["ics", "text/calendar"],
	["ief", "image/ief"],
	["ifb", "text/calendar"],
	["ifm", "application/vnd.shana.informed.formdata"],
	["iges", "model/iges"],
	["igl", "application/vnd.igloader"],
	["igm", "application/vnd.insors.igm"],
	["igs", "model/iges"],
	["igx", "application/vnd.micrografx.igx"],
	["iif", "application/vnd.shana.informed.interchange"],
	["img", "application/octet-stream"],
	["imp", "application/vnd.accpac.simply.imp"],
	["ims", "application/vnd.ms-ims"],
	["in", "text/plain"],
	["ini", "text/plain"],
	["ink", "application/inkml+xml"],
	["inkml", "application/inkml+xml"],
	["install", "application/x-install-instructions"],
	["iota", "application/vnd.astraea-software.iota"],
	["ipfix", "application/ipfix"],
	["ipk", "application/vnd.shana.informed.package"],
	["irm", "application/vnd.ibm.rights-management"],
	["irp", "application/vnd.irepository.package+xml"],
	["iso", "application/x-iso9660-image"],
	["itp", "application/vnd.shana.informed.formtemplate"],
	["its", "application/its+xml"],
	["ivp", "application/vnd.immervision-ivp"],
	["ivu", "application/vnd.immervision-ivu"],
	["jad", "text/vnd.sun.j2me.app-descriptor"],
	["jade", "text/jade"],
	["jam", "application/vnd.jam"],
	["jar", "application/java-archive"],
	["jardiff", "application/x-java-archive-diff"],
	["java", "text/x-java-source"],
	["jhc", "image/jphc"],
	["jisp", "application/vnd.jisp"],
	["jls", "image/jls"],
	["jlt", "application/vnd.hp-jlyt"],
	["jng", "image/x-jng"],
	["jnlp", "application/x-java-jnlp-file"],
	["joda", "application/vnd.joost.joda-archive"],
	["jp2", "image/jp2"],
	["jpe", "image/jpeg"],
	["jpeg", "image/jpeg"],
	["jpf", "image/jpx"],
	["jpg", "image/jpeg"],
	["jpg2", "image/jp2"],
	["jpgm", "video/jpm"],
	["jpgv", "video/jpeg"],
	["jph", "image/jph"],
	["jpm", "video/jpm"],
	["jpx", "image/jpx"],
	["js", "application/javascript"],
	["json", "application/json"],
	["json5", "application/json5"],
	["jsonld", "application/ld+json"],
	["jsonl", "application/jsonl"],
	["jsonml", "application/jsonml+json"],
	["jsx", "text/jsx"],
	["jxr", "image/jxr"],
	["jxra", "image/jxra"],
	["jxrs", "image/jxrs"],
	["jxs", "image/jxs"],
	["jxsc", "image/jxsc"],
	["jxsi", "image/jxsi"],
	["jxss", "image/jxss"],
	["kar", "audio/midi"],
	["karbon", "application/vnd.kde.karbon"],
	["kdb", "application/octet-stream"],
	["kdbx", "application/x-keepass2"],
	["key", "application/x-iwork-keynote-sffkey"],
	["kfo", "application/vnd.kde.kformula"],
	["kia", "application/vnd.kidspiration"],
	["kml", "application/vnd.google-earth.kml+xml"],
	["kmz", "application/vnd.google-earth.kmz"],
	["kne", "application/vnd.kinar"],
	["knp", "application/vnd.kinar"],
	["kon", "application/vnd.kde.kontour"],
	["kpr", "application/vnd.kde.kpresenter"],
	["kpt", "application/vnd.kde.kpresenter"],
	["kpxx", "application/vnd.ds-keypoint"],
	["ksp", "application/vnd.kde.kspread"],
	["ktr", "application/vnd.kahootz"],
	["ktx", "image/ktx"],
	["ktx2", "image/ktx2"],
	["ktz", "application/vnd.kahootz"],
	["kwd", "application/vnd.kde.kword"],
	["kwt", "application/vnd.kde.kword"],
	["lasxml", "application/vnd.las.las+xml"],
	["latex", "application/x-latex"],
	["lbd", "application/vnd.llamagraphics.life-balance.desktop"],
	["lbe", "application/vnd.llamagraphics.life-balance.exchange+xml"],
	["les", "application/vnd.hhe.lesson-player"],
	["less", "text/less"],
	["lgr", "application/lgr+xml"],
	["lha", "application/octet-stream"],
	["link66", "application/vnd.route66.link66+xml"],
	["list", "text/plain"],
	["list3820", "application/vnd.ibm.modcap"],
	["listafp", "application/vnd.ibm.modcap"],
	["litcoffee", "text/coffeescript"],
	["lnk", "application/x-ms-shortcut"],
	["log", "text/plain"],
	["lostxml", "application/lost+xml"],
	["lrf", "application/octet-stream"],
	["lrm", "application/vnd.ms-lrm"],
	["ltf", "application/vnd.frogans.ltf"],
	["lua", "text/x-lua"],
	["luac", "application/x-lua-bytecode"],
	["lvp", "audio/vnd.lucent.voice"],
	["lwp", "application/vnd.lotus-wordpro"],
	["lzh", "application/octet-stream"],
	["m1v", "video/mpeg"],
	["m2a", "audio/mpeg"],
	["m2v", "video/mpeg"],
	["m3a", "audio/mpeg"],
	["m3u", "text/plain"],
	["m3u8", "application/vnd.apple.mpegurl"],
	["m4a", "audio/x-m4a"],
	["m4p", "application/mp4"],
	["m4s", "video/iso.segment"],
	["m4u", "application/vnd.mpegurl"],
	["m4v", "video/x-m4v"],
	["m13", "application/x-msmediaview"],
	["m14", "application/x-msmediaview"],
	["m21", "application/mp21"],
	["ma", "application/mathematica"],
	["mads", "application/mads+xml"],
	["maei", "application/mmt-aei+xml"],
	["mag", "application/vnd.ecowin.chart"],
	["maker", "application/vnd.framemaker"],
	["man", "text/troff"],
	["manifest", "text/cache-manifest"],
	["map", "application/json"],
	["mar", "application/octet-stream"],
	["markdown", "text/markdown"],
	["mathml", "application/mathml+xml"],
	["mb", "application/mathematica"],
	["mbk", "application/vnd.mobius.mbk"],
	["mbox", "application/mbox"],
	["mc1", "application/vnd.medcalcdata"],
	["mcd", "application/vnd.mcd"],
	["mcurl", "text/vnd.curl.mcurl"],
	["md", "text/markdown"],
	["mdb", "application/x-msaccess"],
	["mdi", "image/vnd.ms-modi"],
	["mdx", "text/mdx"],
	["me", "text/troff"],
	["mesh", "model/mesh"],
	["meta4", "application/metalink4+xml"],
	["metalink", "application/metalink+xml"],
	["mets", "application/mets+xml"],
	["mfm", "application/vnd.mfmp"],
	["mft", "application/rpki-manifest"],
	["mgp", "application/vnd.osgeo.mapguide.package"],
	["mgz", "application/vnd.proteus.magazine"],
	["mid", "audio/midi"],
	["midi", "audio/midi"],
	["mie", "application/x-mie"],
	["mif", "application/vnd.mif"],
	["mime", "message/rfc822"],
	["mj2", "video/mj2"],
	["mjp2", "video/mj2"],
	["mjs", "application/javascript"],
	["mk3d", "video/x-matroska"],
	["mka", "audio/x-matroska"],
	["mkd", "text/x-markdown"],
	["mks", "video/x-matroska"],
	["mkv", "video/x-matroska"],
	["mlp", "application/vnd.dolby.mlp"],
	["mmd", "application/vnd.chipnuts.karaoke-mmd"],
	["mmf", "application/vnd.smaf"],
	["mml", "text/mathml"],
	["mmr", "image/vnd.fujixerox.edmics-mmr"],
	["mng", "video/x-mng"],
	["mny", "application/x-msmoney"],
	["mobi", "application/x-mobipocket-ebook"],
	["mods", "application/mods+xml"],
	["mov", "video/quicktime"],
	["movie", "video/x-sgi-movie"],
	["mp2", "audio/mpeg"],
	["mp2a", "audio/mpeg"],
	["mp3", "audio/mpeg"],
	["mp4", "video/mp4"],
	["mp4a", "audio/mp4"],
	["mp4s", "application/mp4"],
	["mp4v", "video/mp4"],
	["mp21", "application/mp21"],
	["mpc", "application/vnd.mophun.certificate"],
	["mpd", "application/dash+xml"],
	["mpe", "video/mpeg"],
	["mpeg", "video/mpeg"],
	["mpg", "video/mpeg"],
	["mpg4", "video/mp4"],
	["mpga", "audio/mpeg"],
	["mpkg", "application/vnd.apple.installer+xml"],
	["mpm", "application/vnd.blueice.multipass"],
	["mpn", "application/vnd.mophun.application"],
	["mpp", "application/vnd.ms-project"],
	["mpt", "application/vnd.ms-project"],
	["mpy", "application/vnd.ibm.minipay"],
	["mqy", "application/vnd.mobius.mqy"],
	["mrc", "application/marc"],
	["mrcx", "application/marcxml+xml"],
	["ms", "text/troff"],
	["mscml", "application/mediaservercontrol+xml"],
	["mseed", "application/vnd.fdsn.mseed"],
	["mseq", "application/vnd.mseq"],
	["msf", "application/vnd.epson.msf"],
	["msg", "application/vnd.ms-outlook"],
	["msh", "model/mesh"],
	["msi", "application/x-msdownload"],
	["msl", "application/vnd.mobius.msl"],
	["msm", "application/octet-stream"],
	["msp", "application/octet-stream"],
	["msty", "application/vnd.muvee.style"],
	["mtl", "model/mtl"],
	["mts", "model/vnd.mts"],
	["mus", "application/vnd.musician"],
	["musd", "application/mmt-usd+xml"],
	["musicxml", "application/vnd.recordare.musicxml+xml"],
	["mvb", "application/x-msmediaview"],
	["mvt", "application/vnd.mapbox-vector-tile"],
	["mwf", "application/vnd.mfer"],
	["mxf", "application/mxf"],
	["mxl", "application/vnd.recordare.musicxml"],
	["mxmf", "audio/mobile-xmf"],
	["mxml", "application/xv+xml"],
	["mxs", "application/vnd.triscape.mxs"],
	["mxu", "video/vnd.mpegurl"],
	["n-gage", "application/vnd.nokia.n-gage.symbian.install"],
	["n3", "text/n3"],
	["nb", "application/mathematica"],
	["nbp", "application/vnd.wolfram.player"],
	["nc", "application/x-netcdf"],
	["ncx", "application/x-dtbncx+xml"],
	["nfo", "text/x-nfo"],
	["ngdat", "application/vnd.nokia.n-gage.data"],
	["nitf", "application/vnd.nitf"],
	["nlu", "application/vnd.neurolanguage.nlu"],
	["nml", "application/vnd.enliven"],
	["nnd", "application/vnd.noblenet-directory"],
	["nns", "application/vnd.noblenet-sealer"],
	["nnw", "application/vnd.noblenet-web"],
	["npx", "image/vnd.net-fpx"],
	["nq", "application/n-quads"],
	["nsc", "application/x-conference"],
	["nsf", "application/vnd.lotus-notes"],
	["nt", "application/n-triples"],
	["ntf", "application/vnd.nitf"],
	["numbers", "application/x-iwork-numbers-sffnumbers"],
	["nzb", "application/x-nzb"],
	["oa2", "application/vnd.fujitsu.oasys2"],
	["oa3", "application/vnd.fujitsu.oasys3"],
	["oas", "application/vnd.fujitsu.oasys"],
	["obd", "application/x-msbinder"],
	["obgx", "application/vnd.openblox.game+xml"],
	["obj", "model/obj"],
	["oda", "application/oda"],
	["odb", "application/vnd.oasis.opendocument.database"],
	["odc", "application/vnd.oasis.opendocument.chart"],
	["odf", "application/vnd.oasis.opendocument.formula"],
	["odft", "application/vnd.oasis.opendocument.formula-template"],
	["odg", "application/vnd.oasis.opendocument.graphics"],
	["odi", "application/vnd.oasis.opendocument.image"],
	["odm", "application/vnd.oasis.opendocument.text-master"],
	["odp", "application/vnd.oasis.opendocument.presentation"],
	["ods", "application/vnd.oasis.opendocument.spreadsheet"],
	["odt", "application/vnd.oasis.opendocument.text"],
	["oga", "audio/ogg"],
	["ogex", "model/vnd.opengex"],
	["ogg", "audio/ogg"],
	["ogv", "video/ogg"],
	["ogx", "application/ogg"],
	["omdoc", "application/omdoc+xml"],
	["onepkg", "application/onenote"],
	["onetmp", "application/onenote"],
	["onetoc", "application/onenote"],
	["onetoc2", "application/onenote"],
	["opf", "application/oebps-package+xml"],
	["opml", "text/x-opml"],
	["oprc", "application/vnd.palm"],
	["opus", "audio/ogg"],
	["org", "text/x-org"],
	["osf", "application/vnd.yamaha.openscoreformat"],
	["osfpvg", "application/vnd.yamaha.openscoreformat.osfpvg+xml"],
	["osm", "application/vnd.openstreetmap.data+xml"],
	["otc", "application/vnd.oasis.opendocument.chart-template"],
	["otf", "font/otf"],
	["otg", "application/vnd.oasis.opendocument.graphics-template"],
	["oth", "application/vnd.oasis.opendocument.text-web"],
	["oti", "application/vnd.oasis.opendocument.image-template"],
	["otp", "application/vnd.oasis.opendocument.presentation-template"],
	["ots", "application/vnd.oasis.opendocument.spreadsheet-template"],
	["ott", "application/vnd.oasis.opendocument.text-template"],
	["ova", "application/x-virtualbox-ova"],
	["ovf", "application/x-virtualbox-ovf"],
	["owl", "application/rdf+xml"],
	["oxps", "application/oxps"],
	["oxt", "application/vnd.openofficeorg.extension"],
	["p", "text/x-pascal"],
	["p7a", "application/x-pkcs7-signature"],
	["p7b", "application/x-pkcs7-certificates"],
	["p7c", "application/pkcs7-mime"],
	["p7m", "application/pkcs7-mime"],
	["p7r", "application/x-pkcs7-certreqresp"],
	["p7s", "application/pkcs7-signature"],
	["p8", "application/pkcs8"],
	["p10", "application/x-pkcs10"],
	["p12", "application/x-pkcs12"],
	["pac", "application/x-ns-proxy-autoconfig"],
	["pages", "application/x-iwork-pages-sffpages"],
	["pas", "text/x-pascal"],
	["paw", "application/vnd.pawaafile"],
	["pbd", "application/vnd.powerbuilder6"],
	["pbm", "image/x-portable-bitmap"],
	["pcap", "application/vnd.tcpdump.pcap"],
	["pcf", "application/x-font-pcf"],
	["pcl", "application/vnd.hp-pcl"],
	["pclxl", "application/vnd.hp-pclxl"],
	["pct", "image/x-pict"],
	["pcurl", "application/vnd.curl.pcurl"],
	["pcx", "image/x-pcx"],
	["pdb", "application/x-pilot"],
	["pde", "text/x-processing"],
	["pdf", "application/pdf"],
	["pem", "application/x-x509-user-cert"],
	["pfa", "application/x-font-type1"],
	["pfb", "application/x-font-type1"],
	["pfm", "application/x-font-type1"],
	["pfr", "application/font-tdpfr"],
	["pfx", "application/x-pkcs12"],
	["pgm", "image/x-portable-graymap"],
	["pgn", "application/x-chess-pgn"],
	["pgp", "application/pgp"],
	["php", "application/x-httpd-php"],
	["php3", "application/x-httpd-php"],
	["php4", "application/x-httpd-php"],
	["phps", "application/x-httpd-php-source"],
	["phtml", "application/x-httpd-php"],
	["pic", "image/x-pict"],
	["pkg", "application/octet-stream"],
	["pki", "application/pkixcmp"],
	["pkipath", "application/pkix-pkipath"],
	["pkpass", "application/vnd.apple.pkpass"],
	["pl", "application/x-perl"],
	["plb", "application/vnd.3gpp.pic-bw-large"],
	["plc", "application/vnd.mobius.plc"],
	["plf", "application/vnd.pocketlearn"],
	["pls", "application/pls+xml"],
	["pm", "application/x-perl"],
	["pml", "application/vnd.ctc-posml"],
	["png", "image/png"],
	["pnm", "image/x-portable-anymap"],
	["portpkg", "application/vnd.macports.portpkg"],
	["pot", "application/vnd.ms-powerpoint"],
	["potm", "application/vnd.ms-powerpoint.presentation.macroEnabled.12"],
	["potx", "application/vnd.openxmlformats-officedocument.presentationml.template"],
	["ppa", "application/vnd.ms-powerpoint"],
	["ppam", "application/vnd.ms-powerpoint.addin.macroEnabled.12"],
	["ppd", "application/vnd.cups-ppd"],
	["ppm", "image/x-portable-pixmap"],
	["pps", "application/vnd.ms-powerpoint"],
	["ppsm", "application/vnd.ms-powerpoint.slideshow.macroEnabled.12"],
	["ppsx", "application/vnd.openxmlformats-officedocument.presentationml.slideshow"],
	["ppt", "application/powerpoint"],
	["pptm", "application/vnd.ms-powerpoint.presentation.macroEnabled.12"],
	["pptx", "application/vnd.openxmlformats-officedocument.presentationml.presentation"],
	["pqa", "application/vnd.palm"],
	["prc", "application/x-pilot"],
	["pre", "application/vnd.lotus-freelance"],
	["prf", "application/pics-rules"],
	["provx", "application/provenance+xml"],
	["ps", "application/postscript"],
	["psb", "application/vnd.3gpp.pic-bw-small"],
	["psd", "application/x-photoshop"],
	["psf", "application/x-font-linux-psf"],
	["pskcxml", "application/pskc+xml"],
	["pti", "image/prs.pti"],
	["ptid", "application/vnd.pvi.ptid1"],
	["pub", "application/x-mspublisher"],
	["pvb", "application/vnd.3gpp.pic-bw-var"],
	["pwn", "application/vnd.3m.post-it-notes"],
	["pya", "audio/vnd.ms-playready.media.pya"],
	["pyv", "video/vnd.ms-playready.media.pyv"],
	["qam", "application/vnd.epson.quickanime"],
	["qbo", "application/vnd.intu.qbo"],
	["qfx", "application/vnd.intu.qfx"],
	["qps", "application/vnd.publishare-delta-tree"],
	["qt", "video/quicktime"],
	["qwd", "application/vnd.quark.quarkxpress"],
	["qwt", "application/vnd.quark.quarkxpress"],
	["qxb", "application/vnd.quark.quarkxpress"],
	["qxd", "application/vnd.quark.quarkxpress"],
	["qxl", "application/vnd.quark.quarkxpress"],
	["qxt", "application/vnd.quark.quarkxpress"],
	["ra", "audio/x-realaudio"],
	["ram", "audio/x-pn-realaudio"],
	["raml", "application/raml+yaml"],
	["rapd", "application/route-apd+xml"],
	["rar", "application/x-rar"],
	["ras", "image/x-cmu-raster"],
	["rcprofile", "application/vnd.ipunplugged.rcprofile"],
	["rdf", "application/rdf+xml"],
	["rdz", "application/vnd.data-vision.rdz"],
	["relo", "application/p2p-overlay+xml"],
	["rep", "application/vnd.businessobjects"],
	["res", "application/x-dtbresource+xml"],
	["rgb", "image/x-rgb"],
	["rif", "application/reginfo+xml"],
	["rip", "audio/vnd.rip"],
	["ris", "application/x-research-info-systems"],
	["rl", "application/resource-lists+xml"],
	["rlc", "image/vnd.fujixerox.edmics-rlc"],
	["rld", "application/resource-lists-diff+xml"],
	["rm", "audio/x-pn-realaudio"],
	["rmi", "audio/midi"],
	["rmp", "audio/x-pn-realaudio-plugin"],
	["rms", "application/vnd.jcp.javame.midlet-rms"],
	["rmvb", "application/vnd.rn-realmedia-vbr"],
	["rnc", "application/relax-ng-compact-syntax"],
	["rng", "application/xml"],
	["roa", "application/rpki-roa"],
	["roff", "text/troff"],
	["rp9", "application/vnd.cloanto.rp9"],
	["rpm", "audio/x-pn-realaudio-plugin"],
	["rpss", "application/vnd.nokia.radio-presets"],
	["rpst", "application/vnd.nokia.radio-preset"],
	["rq", "application/sparql-query"],
	["rs", "application/rls-services+xml"],
	["rsa", "application/x-pkcs7"],
	["rsat", "application/atsc-rsat+xml"],
	["rsd", "application/rsd+xml"],
	["rsheet", "application/urc-ressheet+xml"],
	["rss", "application/rss+xml"],
	["rtf", "text/rtf"],
	["rtx", "text/richtext"],
	["run", "application/x-makeself"],
	["rusd", "application/route-usd+xml"],
	["rv", "video/vnd.rn-realvideo"],
	["s", "text/x-asm"],
	["s3m", "audio/s3m"],
	["saf", "application/vnd.yamaha.smaf-audio"],
	["sass", "text/x-sass"],
	["sbml", "application/sbml+xml"],
	["sc", "application/vnd.ibm.secure-container"],
	["scd", "application/x-msschedule"],
	["scm", "application/vnd.lotus-screencam"],
	["scq", "application/scvp-cv-request"],
	["scs", "application/scvp-cv-response"],
	["scss", "text/x-scss"],
	["scurl", "text/vnd.curl.scurl"],
	["sda", "application/vnd.stardivision.draw"],
	["sdc", "application/vnd.stardivision.calc"],
	["sdd", "application/vnd.stardivision.impress"],
	["sdkd", "application/vnd.solent.sdkm+xml"],
	["sdkm", "application/vnd.solent.sdkm+xml"],
	["sdp", "application/sdp"],
	["sdw", "application/vnd.stardivision.writer"],
	["sea", "application/octet-stream"],
	["see", "application/vnd.seemail"],
	["seed", "application/vnd.fdsn.seed"],
	["sema", "application/vnd.sema"],
	["semd", "application/vnd.semd"],
	["semf", "application/vnd.semf"],
	["senmlx", "application/senml+xml"],
	["sensmlx", "application/sensml+xml"],
	["ser", "application/java-serialized-object"],
	["setpay", "application/set-payment-initiation"],
	["setreg", "application/set-registration-initiation"],
	["sfd-hdstx", "application/vnd.hydrostatix.sof-data"],
	["sfs", "application/vnd.spotfire.sfs"],
	["sfv", "text/x-sfv"],
	["sgi", "image/sgi"],
	["sgl", "application/vnd.stardivision.writer-global"],
	["sgm", "text/sgml"],
	["sgml", "text/sgml"],
	["sh", "application/x-sh"],
	["shar", "application/x-shar"],
	["shex", "text/shex"],
	["shf", "application/shf+xml"],
	["shtml", "text/html"],
	["sid", "image/x-mrsid-image"],
	["sieve", "application/sieve"],
	["sig", "application/pgp-signature"],
	["sil", "audio/silk"],
	["silo", "model/mesh"],
	["sis", "application/vnd.symbian.install"],
	["sisx", "application/vnd.symbian.install"],
	["sit", "application/x-stuffit"],
	["sitx", "application/x-stuffitx"],
	["siv", "application/sieve"],
	["skd", "application/vnd.koan"],
	["skm", "application/vnd.koan"],
	["skp", "application/vnd.koan"],
	["skt", "application/vnd.koan"],
	["sldm", "application/vnd.ms-powerpoint.slide.macroenabled.12"],
	["sldx", "application/vnd.openxmlformats-officedocument.presentationml.slide"],
	["slim", "text/slim"],
	["slm", "text/slim"],
	["sls", "application/route-s-tsid+xml"],
	["slt", "application/vnd.epson.salt"],
	["sm", "application/vnd.stepmania.stepchart"],
	["smf", "application/vnd.stardivision.math"],
	["smi", "application/smil"],
	["smil", "application/smil"],
	["smv", "video/x-smv"],
	["smzip", "application/vnd.stepmania.package"],
	["snd", "audio/basic"],
	["snf", "application/x-font-snf"],
	["so", "application/octet-stream"],
	["spc", "application/x-pkcs7-certificates"],
	["spdx", "text/spdx"],
	["spf", "application/vnd.yamaha.smaf-phrase"],
	["spl", "application/x-futuresplash"],
	["spot", "text/vnd.in3d.spot"],
	["spp", "application/scvp-vp-response"],
	["spq", "application/scvp-vp-request"],
	["spx", "audio/ogg"],
	["sql", "application/x-sql"],
	["src", "application/x-wais-source"],
	["srt", "application/x-subrip"],
	["sru", "application/sru+xml"],
	["srx", "application/sparql-results+xml"],
	["ssdl", "application/ssdl+xml"],
	["sse", "application/vnd.kodak-descriptor"],
	["ssf", "application/vnd.epson.ssf"],
	["ssml", "application/ssml+xml"],
	["sst", "application/octet-stream"],
	["st", "application/vnd.sailingtracker.track"],
	["stc", "application/vnd.sun.xml.calc.template"],
	["std", "application/vnd.sun.xml.draw.template"],
	["stf", "application/vnd.wt.stf"],
	["sti", "application/vnd.sun.xml.impress.template"],
	["stk", "application/hyperstudio"],
	["stl", "model/stl"],
	["stpx", "model/step+xml"],
	["stpxz", "model/step-xml+zip"],
	["stpz", "model/step+zip"],
	["str", "application/vnd.pg.format"],
	["stw", "application/vnd.sun.xml.writer.template"],
	["styl", "text/stylus"],
	["stylus", "text/stylus"],
	["sub", "text/vnd.dvb.subtitle"],
	["sus", "application/vnd.sus-calendar"],
	["susp", "application/vnd.sus-calendar"],
	["sv4cpio", "application/x-sv4cpio"],
	["sv4crc", "application/x-sv4crc"],
	["svc", "application/vnd.dvb.service"],
	["svd", "application/vnd.svd"],
	["svg", "image/svg+xml"],
	["svgz", "image/svg+xml"],
	["swa", "application/x-director"],
	["swf", "application/x-shockwave-flash"],
	["swi", "application/vnd.aristanetworks.swi"],
	["swidtag", "application/swid+xml"],
	["sxc", "application/vnd.sun.xml.calc"],
	["sxd", "application/vnd.sun.xml.draw"],
	["sxg", "application/vnd.sun.xml.writer.global"],
	["sxi", "application/vnd.sun.xml.impress"],
	["sxm", "application/vnd.sun.xml.math"],
	["sxw", "application/vnd.sun.xml.writer"],
	["t", "text/troff"],
	["t3", "application/x-t3vm-image"],
	["t38", "image/t38"],
	["taglet", "application/vnd.mynfc"],
	["tao", "application/vnd.tao.intent-module-archive"],
	["tap", "image/vnd.tencent.tap"],
	["tar", "application/x-tar"],
	["tcap", "application/vnd.3gpp2.tcap"],
	["tcl", "application/x-tcl"],
	["td", "application/urc-targetdesc+xml"],
	["teacher", "application/vnd.smart.teacher"],
	["tei", "application/tei+xml"],
	["teicorpus", "application/tei+xml"],
	["tex", "application/x-tex"],
	["texi", "application/x-texinfo"],
	["texinfo", "application/x-texinfo"],
	["text", "text/plain"],
	["tfi", "application/thraud+xml"],
	["tfm", "application/x-tex-tfm"],
	["tfx", "image/tiff-fx"],
	["tga", "image/x-tga"],
	["tgz", "application/x-tar"],
	["thmx", "application/vnd.ms-officetheme"],
	["tif", "image/tiff"],
	["tiff", "image/tiff"],
	["tk", "application/x-tcl"],
	["tmo", "application/vnd.tmobile-livetv"],
	["toml", "application/toml"],
	["torrent", "application/x-bittorrent"],
	["tpl", "application/vnd.groove-tool-template"],
	["tpt", "application/vnd.trid.tpt"],
	["tr", "text/troff"],
	["tra", "application/vnd.trueapp"],
	["trig", "application/trig"],
	["trm", "application/x-msterminal"],
	["ts", "video/mp2t"],
	["tsd", "application/timestamped-data"],
	["tsv", "text/tab-separated-values"],
	["ttc", "font/collection"],
	["ttf", "font/ttf"],
	["ttl", "text/turtle"],
	["ttml", "application/ttml+xml"],
	["twd", "application/vnd.simtech-mindmapper"],
	["twds", "application/vnd.simtech-mindmapper"],
	["txd", "application/vnd.genomatix.tuxedo"],
	["txf", "application/vnd.mobius.txf"],
	["txt", "text/plain"],
	["u8dsn", "message/global-delivery-status"],
	["u8hdr", "message/global-headers"],
	["u8mdn", "message/global-disposition-notification"],
	["u8msg", "message/global"],
	["u32", "application/x-authorware-bin"],
	["ubj", "application/ubjson"],
	["udeb", "application/x-debian-package"],
	["ufd", "application/vnd.ufdl"],
	["ufdl", "application/vnd.ufdl"],
	["ulx", "application/x-glulx"],
	["umj", "application/vnd.umajin"],
	["unityweb", "application/vnd.unity"],
	["uoml", "application/vnd.uoml+xml"],
	["uri", "text/uri-list"],
	["uris", "text/uri-list"],
	["urls", "text/uri-list"],
	["usdz", "model/vnd.usdz+zip"],
	["ustar", "application/x-ustar"],
	["utz", "application/vnd.uiq.theme"],
	["uu", "text/x-uuencode"],
	["uva", "audio/vnd.dece.audio"],
	["uvd", "application/vnd.dece.data"],
	["uvf", "application/vnd.dece.data"],
	["uvg", "image/vnd.dece.graphic"],
	["uvh", "video/vnd.dece.hd"],
	["uvi", "image/vnd.dece.graphic"],
	["uvm", "video/vnd.dece.mobile"],
	["uvp", "video/vnd.dece.pd"],
	["uvs", "video/vnd.dece.sd"],
	["uvt", "application/vnd.dece.ttml+xml"],
	["uvu", "video/vnd.uvvu.mp4"],
	["uvv", "video/vnd.dece.video"],
	["uvva", "audio/vnd.dece.audio"],
	["uvvd", "application/vnd.dece.data"],
	["uvvf", "application/vnd.dece.data"],
	["uvvg", "image/vnd.dece.graphic"],
	["uvvh", "video/vnd.dece.hd"],
	["uvvi", "image/vnd.dece.graphic"],
	["uvvm", "video/vnd.dece.mobile"],
	["uvvp", "video/vnd.dece.pd"],
	["uvvs", "video/vnd.dece.sd"],
	["uvvt", "application/vnd.dece.ttml+xml"],
	["uvvu", "video/vnd.uvvu.mp4"],
	["uvvv", "video/vnd.dece.video"],
	["uvvx", "application/vnd.dece.unspecified"],
	["uvvz", "application/vnd.dece.zip"],
	["uvx", "application/vnd.dece.unspecified"],
	["uvz", "application/vnd.dece.zip"],
	["vbox", "application/x-virtualbox-vbox"],
	["vbox-extpack", "application/x-virtualbox-vbox-extpack"],
	["vcard", "text/vcard"],
	["vcd", "application/x-cdlink"],
	["vcf", "text/x-vcard"],
	["vcg", "application/vnd.groove-vcard"],
	["vcs", "text/x-vcalendar"],
	["vcx", "application/vnd.vcx"],
	["vdi", "application/x-virtualbox-vdi"],
	["vds", "model/vnd.sap.vds"],
	["vhd", "application/x-virtualbox-vhd"],
	["vis", "application/vnd.visionary"],
	["viv", "video/vnd.vivo"],
	["vlc", "application/videolan"],
	["vmdk", "application/x-virtualbox-vmdk"],
	["vob", "video/x-ms-vob"],
	["vor", "application/vnd.stardivision.writer"],
	["vox", "application/x-authorware-bin"],
	["vrml", "model/vrml"],
	["vsd", "application/vnd.visio"],
	["vsf", "application/vnd.vsf"],
	["vss", "application/vnd.visio"],
	["vst", "application/vnd.visio"],
	["vsw", "application/vnd.visio"],
	["vtf", "image/vnd.valve.source.texture"],
	["vtt", "text/vtt"],
	["vtu", "model/vnd.vtu"],
	["vxml", "application/voicexml+xml"],
	["w3d", "application/x-director"],
	["wad", "application/x-doom"],
	["wadl", "application/vnd.sun.wadl+xml"],
	["war", "application/java-archive"],
	["wasm", "application/wasm"],
	["wav", "audio/x-wav"],
	["wax", "audio/x-ms-wax"],
	["wbmp", "image/vnd.wap.wbmp"],
	["wbs", "application/vnd.criticaltools.wbs+xml"],
	["wbxml", "application/wbxml"],
	["wcm", "application/vnd.ms-works"],
	["wdb", "application/vnd.ms-works"],
	["wdp", "image/vnd.ms-photo"],
	["weba", "audio/webm"],
	["webapp", "application/x-web-app-manifest+json"],
	["webm", "video/webm"],
	["webmanifest", "application/manifest+json"],
	["webp", "image/webp"],
	["wg", "application/vnd.pmi.widget"],
	["wgt", "application/widget"],
	["wks", "application/vnd.ms-works"],
	["wm", "video/x-ms-wm"],
	["wma", "audio/x-ms-wma"],
	["wmd", "application/x-ms-wmd"],
	["wmf", "image/wmf"],
	["wml", "text/vnd.wap.wml"],
	["wmlc", "application/wmlc"],
	["wmls", "text/vnd.wap.wmlscript"],
	["wmlsc", "application/vnd.wap.wmlscriptc"],
	["wmv", "video/x-ms-wmv"],
	["wmx", "video/x-ms-wmx"],
	["wmz", "application/x-msmetafile"],
	["woff", "font/woff"],
	["woff2", "font/woff2"],
	["word", "application/msword"],
	["wpd", "application/vnd.wordperfect"],
	["wpl", "application/vnd.ms-wpl"],
	["wps", "application/vnd.ms-works"],
	["wqd", "application/vnd.wqd"],
	["wri", "application/x-mswrite"],
	["wrl", "model/vrml"],
	["wsc", "message/vnd.wfa.wsc"],
	["wsdl", "application/wsdl+xml"],
	["wspolicy", "application/wspolicy+xml"],
	["wtb", "application/vnd.webturbo"],
	["wvx", "video/x-ms-wvx"],
	["x3d", "model/x3d+xml"],
	["x3db", "model/x3d+fastinfoset"],
	["x3dbz", "model/x3d+binary"],
	["x3dv", "model/x3d-vrml"],
	["x3dvz", "model/x3d+vrml"],
	["x3dz", "model/x3d+xml"],
	["x32", "application/x-authorware-bin"],
	["x_b", "model/vnd.parasolid.transmit.binary"],
	["x_t", "model/vnd.parasolid.transmit.text"],
	["xaml", "application/xaml+xml"],
	["xap", "application/x-silverlight-app"],
	["xar", "application/vnd.xara"],
	["xav", "application/xcap-att+xml"],
	["xbap", "application/x-ms-xbap"],
	["xbd", "application/vnd.fujixerox.docuworks.binder"],
	["xbm", "image/x-xbitmap"],
	["xca", "application/xcap-caps+xml"],
	["xcs", "application/calendar+xml"],
	["xdf", "application/xcap-diff+xml"],
	["xdm", "application/vnd.syncml.dm+xml"],
	["xdp", "application/vnd.adobe.xdp+xml"],
	["xdssc", "application/dssc+xml"],
	["xdw", "application/vnd.fujixerox.docuworks"],
	["xel", "application/xcap-el+xml"],
	["xenc", "application/xenc+xml"],
	["xer", "application/patch-ops-error+xml"],
	["xfdf", "application/vnd.adobe.xfdf"],
	["xfdl", "application/vnd.xfdl"],
	["xht", "application/xhtml+xml"],
	["xhtml", "application/xhtml+xml"],
	["xhvml", "application/xv+xml"],
	["xif", "image/vnd.xiff"],
	["xl", "application/excel"],
	["xla", "application/vnd.ms-excel"],
	["xlam", "application/vnd.ms-excel.addin.macroEnabled.12"],
	["xlc", "application/vnd.ms-excel"],
	["xlf", "application/xliff+xml"],
	["xlm", "application/vnd.ms-excel"],
	["xls", "application/vnd.ms-excel"],
	["xlsb", "application/vnd.ms-excel.sheet.binary.macroEnabled.12"],
	["xlsm", "application/vnd.ms-excel.sheet.macroEnabled.12"],
	["xlsx", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],
	["xlt", "application/vnd.ms-excel"],
	["xltm", "application/vnd.ms-excel.template.macroEnabled.12"],
	["xltx", "application/vnd.openxmlformats-officedocument.spreadsheetml.template"],
	["xlw", "application/vnd.ms-excel"],
	["xm", "audio/xm"],
	["xml", "application/xml"],
	["xns", "application/xcap-ns+xml"],
	["xo", "application/vnd.olpc-sugar"],
	["xop", "application/xop+xml"],
	["xpi", "application/x-xpinstall"],
	["xpl", "application/xproc+xml"],
	["xpm", "image/x-xpixmap"],
	["xpr", "application/vnd.is-xpr"],
	["xps", "application/vnd.ms-xpsdocument"],
	["xpw", "application/vnd.intercon.formnet"],
	["xpx", "application/vnd.intercon.formnet"],
	["xsd", "application/xml"],
	["xsl", "application/xml"],
	["xslt", "application/xslt+xml"],
	["xsm", "application/vnd.syncml+xml"],
	["xspf", "application/xspf+xml"],
	["xul", "application/vnd.mozilla.xul+xml"],
	["xvm", "application/xv+xml"],
	["xvml", "application/xv+xml"],
	["xwd", "image/x-xwindowdump"],
	["xyz", "chemical/x-xyz"],
	["xz", "application/x-xz"],
	["yaml", "text/yaml"],
	["yang", "application/yang"],
	["yin", "application/yin+xml"],
	["yml", "text/yaml"],
	["ymp", "text/x-suse-ymp"],
	["z", "application/x-compress"],
	["z1", "application/x-zmachine"],
	["z2", "application/x-zmachine"],
	["z3", "application/x-zmachine"],
	["z4", "application/x-zmachine"],
	["z5", "application/x-zmachine"],
	["z6", "application/x-zmachine"],
	["z7", "application/x-zmachine"],
	["z8", "application/x-zmachine"],
	["zaz", "application/vnd.zzazz.deck+xml"],
	["zip", "application/zip"],
	["zir", "application/vnd.zul"],
	["zirz", "application/vnd.zul"],
	["zmm", "application/vnd.handheld-entertainment+xml"],
	["zsh", "text/x-scriptzsh"]
]);
function Pu(e, t, n) {
	let r = Fu(e), { webkitRelativePath: i } = e, a = typeof t == "string" ? t : typeof i == "string" && i.length > 0 ? i : `./${e.name}`;
	return typeof r.path != "string" && Iu(r, "path", a), n !== void 0 && Object.defineProperty(r, "handle", {
		value: n,
		writable: !1,
		configurable: !1,
		enumerable: !0
	}), Iu(r, "relativePath", a), r;
}
function Fu(e) {
	let { name: t } = e;
	if (t && t.lastIndexOf(".") !== -1 && !e.type) {
		let n = t.split(".").pop().toLowerCase(), r = Nu.get(n);
		r && Object.defineProperty(e, "type", {
			value: r,
			writable: !1,
			configurable: !1,
			enumerable: !0
		});
	}
	return e;
}
function Iu(e, t, n) {
	Object.defineProperty(e, t, {
		value: n,
		writable: !1,
		configurable: !1,
		enumerable: !0
	});
}
//#endregion
//#region node_modules/.pnpm/file-selector@2.1.2/node_modules/file-selector/dist/es2015/file-selector.js
var Lu = [".DS_Store", "Thumbs.db"];
function Ru(e) {
	return M(this, void 0, void 0, function* () {
		return Vu(e) && zu(e.dataTransfer) ? Wu(e.dataTransfer, e.type) : Bu(e) ? Hu(e) : Array.isArray(e) && e.every((e) => "getFile" in e && typeof e.getFile == "function") ? Uu(e) : [];
	});
}
function zu(e) {
	return Vu(e);
}
function Bu(e) {
	return Vu(e) && Vu(e.target);
}
function Vu(e) {
	return typeof e == "object" && !!e;
}
function Hu(e) {
	return Ku(e.target.files).map((e) => Pu(e));
}
function Uu(e) {
	return M(this, void 0, void 0, function* () {
		return (yield Promise.all(e.map((e) => e.getFile()))).map((e) => Pu(e));
	});
}
function Wu(e, t) {
	return M(this, void 0, void 0, function* () {
		if (e.items) {
			let n = Ku(e.items).filter((e) => e.kind === "file");
			return t === "drop" ? Gu(Ju(yield Promise.all(n.map(qu)))) : n;
		}
		return Gu(Ku(e.files).map((e) => Pu(e)));
	});
}
function Gu(e) {
	return e.filter((e) => Lu.indexOf(e.name) === -1);
}
function Ku(e) {
	if (e === null) return [];
	let t = [];
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		t.push(r);
	}
	return t;
}
function qu(e) {
	if (typeof e.webkitGetAsEntry != "function") return Yu(e);
	let t = e.webkitGetAsEntry();
	return t && t.isDirectory ? Zu(t) : Yu(e, t);
}
function Ju(e) {
	return e.reduce((e, t) => [...e, ...Array.isArray(t) ? Ju(t) : [t]], []);
}
function Yu(e, t) {
	return M(this, void 0, void 0, function* () {
		if (globalThis.isSecureContext && typeof e.getAsFileSystemHandle == "function") {
			let t = yield e.getAsFileSystemHandle();
			if (t === null) throw Error(`${e} is not a File`);
			if (t !== void 0) {
				let e = yield t.getFile();
				return e.handle = t, Pu(e);
			}
		}
		let n = e.getAsFile();
		if (!n) throw Error(`${e} is not a File`);
		return Pu(n, t?.fullPath ?? void 0);
	});
}
function Xu(e) {
	return M(this, void 0, void 0, function* () {
		return e.isDirectory ? Zu(e) : Qu(e);
	});
}
function Zu(e) {
	let t = e.createReader();
	return new Promise((e, n) => {
		let r = [];
		function i() {
			t.readEntries((t) => M(this, void 0, void 0, function* () {
				if (t.length) {
					let e = Promise.all(t.map(Xu));
					r.push(e), i();
				} else try {
					e(yield Promise.all(r));
				} catch (e) {
					n(e);
				}
			}), (e) => {
				n(e);
			});
		}
		i();
	});
}
function Qu(e) {
	return M(this, void 0, void 0, function* () {
		return new Promise((t, n) => {
			e.file((n) => {
				t(Pu(n, e.fullPath));
			}, (e) => {
				n(e);
			});
		});
	});
}
//#endregion
//#region node_modules/.pnpm/react-dropzone@14.4.1_react@18.3.1/node_modules/react-dropzone/dist/es/utils/index.js
var $u = /* @__PURE__ */ se((/* @__PURE__ */ j(((e) => {
	e.__esModule = !0, e.default = function(e, t) {
		if (e && t) {
			var n = Array.isArray(t) ? t : t.split(",");
			if (n.length === 0) return !0;
			var r = e.name || "", i = (e.type || "").toLowerCase(), a = i.replace(/\/.*$/, "");
			return n.some(function(e) {
				var t = e.trim().toLowerCase();
				return t.charAt(0) === "." ? r.toLowerCase().endsWith(t) : t.endsWith("/*") ? a === t.replace(/\/.*$/, "") : i === t;
			});
		}
		return !0;
	};
})))());
function ed(e) {
	return rd(e) || nd(e) || ld(e) || td();
}
function td() {
	throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function nd(e) {
	if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function rd(e) {
	if (Array.isArray(e)) return ud(e);
}
function id(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function ad(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? id(Object(n), !0).forEach(function(t) {
			od(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : id(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function od(e, t, n) {
	return t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function sd(e, t) {
	return fd(e) || dd(e, t) || ld(e, t) || cd();
}
function cd() {
	throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function ld(e, t) {
	if (e) {
		if (typeof e == "string") return ud(e, t);
		var n = Object.prototype.toString.call(e).slice(8, -1);
		if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
		if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ud(e, t);
	}
}
function ud(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function dd(e, t) {
	var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
	if (n != null) {
		var r = [], i = !0, a = !1, o, s;
		try {
			for (n = n.call(e); !(i = (o = n.next()).done) && (r.push(o.value), !(t && r.length === t)); i = !0);
		} catch (e) {
			a = !0, s = e;
		} finally {
			try {
				!i && n.return != null && n.return();
			} finally {
				if (a) throw s;
			}
		}
		return r;
	}
}
function fd(e) {
	if (Array.isArray(e)) return e;
}
var pd = typeof $u.default == "function" ? $u.default : $u.default.default, md = "file-invalid-type", hd = "file-too-large", gd = "file-too-small", _d = "too-many-files", vd = {
	FileInvalidType: md,
	FileTooLarge: hd,
	FileTooSmall: gd,
	TooManyFiles: _d
}, yd = function() {
	var e = (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "").split(",");
	return {
		code: md,
		message: `File type must be ${e.length > 1 ? `one of ${e.join(", ")}` : e[0]}`
	};
}, bd = function(e) {
	return {
		code: hd,
		message: `File is larger than ${e} ${e === 1 ? "byte" : "bytes"}`
	};
}, xd = function(e) {
	return {
		code: gd,
		message: `File is smaller than ${e} ${e === 1 ? "byte" : "bytes"}`
	};
}, Sd = {
	code: _d,
	message: "Too many files"
};
function Cd(e) {
	return e.type === "" && typeof e.getAsFile == "function";
}
function wd(e, t) {
	var n = e.type === "application/x-moz-file" || pd(e, t) || Cd(e);
	return [n, n ? null : yd(t)];
}
function Td(e, t, n) {
	if (Ed(e.size)) {
		if (Ed(t) && Ed(n)) {
			if (e.size > n) return [!1, bd(n)];
			if (e.size < t) return [!1, xd(t)];
		} else if (Ed(t) && e.size < t) return [!1, xd(t)];
		else if (Ed(n) && e.size > n) return [!1, bd(n)];
	}
	return [!0, null];
}
function Ed(e) {
	return e != null;
}
function Dd(e) {
	var t = e.files, n = e.accept, r = e.minSize, i = e.maxSize, a = e.multiple, o = e.maxFiles, s = e.validator;
	return !a && t.length > 1 || a && o >= 1 && t.length > o ? !1 : t.every(function(e) {
		var t = sd(wd(e, n), 1)[0], a = sd(Td(e, r, i), 1)[0], o = s ? s(e) : null;
		return t && a && !o;
	});
}
function Od(e) {
	return typeof e.isPropagationStopped == "function" ? e.isPropagationStopped() : e.cancelBubble === void 0 ? !1 : e.cancelBubble;
}
function kd(e) {
	return e.dataTransfer ? Array.prototype.some.call(e.dataTransfer.types, function(e) {
		return e === "Files" || e === "application/x-moz-file";
	}) : !!e.target && !!e.target.files;
}
function Ad(e) {
	e.preventDefault();
}
function jd(e) {
	return e.indexOf("MSIE") !== -1 || e.indexOf("Trident/") !== -1;
}
function Md(e) {
	return e.indexOf("Edge/") !== -1;
}
function Nd() {
	var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : window.navigator.userAgent;
	return jd(e) || Md(e);
}
function Pd() {
	var e = [...arguments];
	return function(t) {
		var n = [...arguments].slice(1);
		return e.some(function(e) {
			return !Od(t) && e && e.apply(void 0, [t].concat(n)), Od(t);
		});
	};
}
function Fd() {
	return "showOpenFilePicker" in window;
}
function Id(e) {
	return Ed(e) ? [{
		description: "Files",
		accept: Object.entries(e).filter(function(e) {
			var t = sd(e, 2), n = t[0], r = t[1], i = !0;
			return Bd(n) || (console.warn(`Skipped "${n}" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.`), i = !1), (!Array.isArray(r) || !r.every(Vd)) && (console.warn(`Skipped "${n}" because an invalid file extension was provided.`), i = !1), i;
		}).reduce(function(e, t) {
			var n = sd(t, 2), r = n[0], i = n[1];
			return ad(ad({}, e), {}, od({}, r, i));
		}, {})
	}] : e;
}
function Ld(e) {
	if (Ed(e)) return Object.entries(e).reduce(function(e, t) {
		var n = sd(t, 2), r = n[0], i = n[1];
		return [].concat(ed(e), [r], ed(i));
	}, []).filter(function(e) {
		return Bd(e) || Vd(e);
	}).join(",");
}
function Rd(e) {
	return e instanceof DOMException && (e.name === "AbortError" || e.code === e.ABORT_ERR);
}
function zd(e) {
	return e instanceof DOMException && (e.name === "SecurityError" || e.code === e.SECURITY_ERR);
}
function Bd(e) {
	return e === "audio/*" || e === "video/*" || e === "image/*" || e === "text/*" || e === "application/*" || /\w+\/[-+.\w]+/g.test(e);
}
function Vd(e) {
	return /^.*\.[\w]+$/.test(e);
}
//#endregion
//#region node_modules/.pnpm/react-dropzone@14.4.1_react@18.3.1/node_modules/react-dropzone/dist/es/index.js
var Hd = ["children"], Ud = ["open"], Wd = [
	"refKey",
	"role",
	"onKeyDown",
	"onFocus",
	"onBlur",
	"onClick",
	"onDragEnter",
	"onDragOver",
	"onDragLeave",
	"onDrop"
], Gd = [
	"refKey",
	"onChange",
	"onClick"
];
function Kd(e) {
	return Yd(e) || Jd(e) || Qd(e) || qd();
}
function qd() {
	throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function Jd(e) {
	if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Yd(e) {
	if (Array.isArray(e)) return $d(e);
}
function Xd(e, t) {
	return tf(e) || ef(e, t) || Qd(e, t) || Zd();
}
function Zd() {
	throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function Qd(e, t) {
	if (e) {
		if (typeof e == "string") return $d(e, t);
		var n = Object.prototype.toString.call(e).slice(8, -1);
		if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
		if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return $d(e, t);
	}
}
function $d(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function ef(e, t) {
	var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
	if (n != null) {
		var r = [], i = !0, a = !1, o, s;
		try {
			for (n = n.call(e); !(i = (o = n.next()).done) && (r.push(o.value), !(t && r.length === t)); i = !0);
		} catch (e) {
			a = !0, s = e;
		} finally {
			try {
				!i && n.return != null && n.return();
			} finally {
				if (a) throw s;
			}
		}
		return r;
	}
}
function tf(e) {
	if (Array.isArray(e)) return e;
}
function nf(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function rf(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? nf(Object(n), !0).forEach(function(t) {
			af(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : nf(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function af(e, t, n) {
	return t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function of(e, t) {
	if (e == null) return {};
	var n = sf(e, t), r, i;
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (i = 0; i < a.length; i++) r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
	}
	return n;
}
function sf(e, t) {
	if (e == null) return {};
	var n = {}, r = Object.keys(e), i, a;
	for (a = 0; a < r.length; a++) i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
	return n;
}
var cf = /* @__PURE__ */ (0, I.forwardRef)(function(e, t) {
	var n = e.children, r = df(of(e, Hd)), i = r.open, a = of(r, Ud);
	return (0, I.useImperativeHandle)(t, function() {
		return { open: i };
	}, [i]), /* @__PURE__ */ I.createElement(I.Fragment, null, n(rf(rf({}, a), {}, { open: i })));
});
cf.displayName = "Dropzone";
var lf = {
	disabled: !1,
	getFilesFromEvent: Ru,
	maxSize: Infinity,
	minSize: 0,
	multiple: !0,
	maxFiles: 0,
	preventDropOnDocument: !0,
	noClick: !1,
	noKeyboard: !1,
	noDrag: !1,
	noDragEventsBubbling: !1,
	validator: null,
	useFsAccessApi: !1,
	autoFocus: !1
};
cf.defaultProps = lf, cf.propTypes = {
	children: R.default.func,
	accept: R.default.objectOf(R.default.arrayOf(R.default.string)),
	multiple: R.default.bool,
	preventDropOnDocument: R.default.bool,
	noClick: R.default.bool,
	noKeyboard: R.default.bool,
	noDrag: R.default.bool,
	noDragEventsBubbling: R.default.bool,
	minSize: R.default.number,
	maxSize: R.default.number,
	maxFiles: R.default.number,
	disabled: R.default.bool,
	getFilesFromEvent: R.default.func,
	onFileDialogCancel: R.default.func,
	onFileDialogOpen: R.default.func,
	useFsAccessApi: R.default.bool,
	autoFocus: R.default.bool,
	onDragEnter: R.default.func,
	onDragLeave: R.default.func,
	onDragOver: R.default.func,
	onDrop: R.default.func,
	onDropAccepted: R.default.func,
	onDropRejected: R.default.func,
	onError: R.default.func,
	validator: R.default.func
};
var uf = {
	isFocused: !1,
	isFileDialogActive: !1,
	isDragActive: !1,
	isDragAccept: !1,
	isDragReject: !1,
	isDragGlobal: !1,
	acceptedFiles: [],
	fileRejections: []
};
function df() {
	var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = rf(rf({}, lf), e), n = t.accept, r = t.disabled, i = t.getFilesFromEvent, a = t.maxSize, o = t.minSize, s = t.multiple, c = t.maxFiles, l = t.onDragEnter, u = t.onDragLeave, d = t.onDragOver, f = t.onDrop, p = t.onDropAccepted, m = t.onDropRejected, h = t.onFileDialogCancel, g = t.onFileDialogOpen, _ = t.useFsAccessApi, v = t.autoFocus, y = t.preventDropOnDocument, b = t.noClick, x = t.noKeyboard, S = t.noDrag, C = t.noDragEventsBubbling, w = t.onError, T = t.validator, E = (0, I.useMemo)(function() {
		return Ld(n);
	}, [n]), D = (0, I.useMemo)(function() {
		return Id(n);
	}, [n]), O = (0, I.useMemo)(function() {
		return typeof g == "function" ? g : pf;
	}, [g]), k = (0, I.useMemo)(function() {
		return typeof h == "function" ? h : pf;
	}, [h]), A = (0, I.useRef)(null), j = (0, I.useRef)(null), ee = Xd((0, I.useReducer)(ff, uf), 2), M = ee[0], N = ee[1], te = M.isFocused, P = M.isFileDialogActive, ne = (0, I.useRef)(typeof window < "u" && window.isSecureContext && _ && Fd()), re = function() {
		!ne.current && P && setTimeout(function() {
			j.current && (j.current.files.length || (N({ type: "closeDialog" }), k()));
		}, 300);
	};
	(0, I.useEffect)(function() {
		return window.addEventListener("focus", re, !1), function() {
			window.removeEventListener("focus", re, !1);
		};
	}, [
		j,
		P,
		k,
		ne
	]);
	var ie = (0, I.useRef)([]), ae = (0, I.useRef)([]), oe = function(e) {
		A.current && A.current.contains(e.target) || (e.preventDefault(), ie.current = []);
	};
	(0, I.useEffect)(function() {
		return y && (document.addEventListener("dragover", Ad, !1), document.addEventListener("drop", oe, !1)), function() {
			y && (document.removeEventListener("dragover", Ad), document.removeEventListener("drop", oe));
		};
	}, [A, y]), (0, I.useEffect)(function() {
		var e = function(e) {
			ae.current = [].concat(Kd(ae.current), [e.target]), kd(e) && N({
				isDragGlobal: !0,
				type: "setDragGlobal"
			});
		}, t = function(e) {
			ae.current = ae.current.filter(function(t) {
				return t !== e.target && t !== null;
			}), !(ae.current.length > 0) && N({
				isDragGlobal: !1,
				type: "setDragGlobal"
			});
		}, n = function() {
			ae.current = [], N({
				isDragGlobal: !1,
				type: "setDragGlobal"
			});
		}, r = function() {
			ae.current = [], N({
				isDragGlobal: !1,
				type: "setDragGlobal"
			});
		};
		return document.addEventListener("dragenter", e, !1), document.addEventListener("dragleave", t, !1), document.addEventListener("dragend", n, !1), document.addEventListener("drop", r, !1), function() {
			document.removeEventListener("dragenter", e), document.removeEventListener("dragleave", t), document.removeEventListener("dragend", n), document.removeEventListener("drop", r);
		};
	}, [A]), (0, I.useEffect)(function() {
		return !r && v && A.current && A.current.focus(), function() {};
	}, [
		A,
		v,
		r
	]);
	var se = (0, I.useCallback)(function(e) {
		w ? w(e) : console.error(e);
	}, [w]), ce = (0, I.useCallback)(function(e) {
		e.preventDefault(), e.persist(), xe(e), ie.current = [].concat(Kd(ie.current), [e.target]), kd(e) && Promise.resolve(i(e)).then(function(t) {
			if (!(Od(e) && !C)) {
				var n = t.length, r = n > 0 && Dd({
					files: t,
					accept: E,
					minSize: o,
					maxSize: a,
					multiple: s,
					maxFiles: c,
					validator: T
				});
				N({
					isDragAccept: r,
					isDragReject: n > 0 && !r,
					isDragActive: !0,
					type: "setDraggedFiles"
				}), l && l(e);
			}
		}).catch(function(e) {
			return se(e);
		});
	}, [
		i,
		l,
		se,
		C,
		E,
		o,
		a,
		s,
		c,
		T
	]), le = (0, I.useCallback)(function(e) {
		e.preventDefault(), e.persist(), xe(e);
		var t = kd(e);
		if (t && e.dataTransfer) try {
			e.dataTransfer.dropEffect = "copy";
		} catch {}
		return t && d && d(e), !1;
	}, [d, C]), ue = (0, I.useCallback)(function(e) {
		e.preventDefault(), e.persist(), xe(e);
		var t = ie.current.filter(function(e) {
			return A.current && A.current.contains(e);
		}), n = t.indexOf(e.target);
		n !== -1 && t.splice(n, 1), ie.current = t, !(t.length > 0) && (N({
			type: "setDraggedFiles",
			isDragActive: !1,
			isDragAccept: !1,
			isDragReject: !1
		}), kd(e) && u && u(e));
	}, [
		A,
		u,
		C
	]), de = (0, I.useCallback)(function(e, t) {
		var n = [], r = [];
		e.forEach(function(e) {
			var t = Xd(wd(e, E), 2), i = t[0], s = t[1], c = Xd(Td(e, o, a), 2), l = c[0], u = c[1], d = T ? T(e) : null;
			if (i && l && !d) n.push(e);
			else {
				var f = [s, u];
				d && (f = f.concat(d)), r.push({
					file: e,
					errors: f.filter(function(e) {
						return e;
					})
				});
			}
		}), (!s && n.length > 1 || s && c >= 1 && n.length > c) && (n.forEach(function(e) {
			r.push({
				file: e,
				errors: [Sd]
			});
		}), n.splice(0)), N({
			acceptedFiles: n,
			fileRejections: r,
			isDragReject: r.length > 0,
			type: "setFiles"
		}), f && f(n, r, t), r.length > 0 && m && m(r, t), n.length > 0 && p && p(n, t);
	}, [
		N,
		s,
		E,
		o,
		a,
		c,
		f,
		p,
		m,
		T
	]), fe = (0, I.useCallback)(function(e) {
		e.preventDefault(), e.persist(), xe(e), ie.current = [], kd(e) && Promise.resolve(i(e)).then(function(t) {
			Od(e) && !C || de(t, e);
		}).catch(function(e) {
			return se(e);
		}), N({ type: "reset" });
	}, [
		i,
		de,
		se,
		C
	]), pe = (0, I.useCallback)(function() {
		if (ne.current) {
			N({ type: "openDialog" }), O();
			var e = {
				multiple: s,
				types: D
			};
			window.showOpenFilePicker(e).then(function(e) {
				return i(e);
			}).then(function(e) {
				de(e, null), N({ type: "closeDialog" });
			}).catch(function(e) {
				Rd(e) ? (k(e), N({ type: "closeDialog" })) : zd(e) ? (ne.current = !1, j.current ? (j.current.value = null, j.current.click()) : se(/* @__PURE__ */ Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))) : se(e);
			});
			return;
		}
		j.current && (N({ type: "openDialog" }), O(), j.current.value = null, j.current.click());
	}, [
		N,
		O,
		k,
		_,
		de,
		se,
		D,
		s
	]), me = (0, I.useCallback)(function(e) {
		!A.current || !A.current.isEqualNode(e.target) || (e.key === " " || e.key === "Enter" || e.keyCode === 32 || e.keyCode === 13) && (e.preventDefault(), pe());
	}, [A, pe]), he = (0, I.useCallback)(function() {
		N({ type: "focus" });
	}, []), ge = (0, I.useCallback)(function() {
		N({ type: "blur" });
	}, []), _e = (0, I.useCallback)(function() {
		b || (Nd() ? setTimeout(pe, 0) : pe());
	}, [b, pe]), ve = function(e) {
		return r ? null : e;
	}, ye = function(e) {
		return x ? null : ve(e);
	}, be = function(e) {
		return S ? null : ve(e);
	}, xe = function(e) {
		C && e.stopPropagation();
	}, Se = (0, I.useMemo)(function() {
		return function() {
			var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.refKey, n = t === void 0 ? "ref" : t, i = e.role, a = e.onKeyDown, o = e.onFocus, s = e.onBlur, c = e.onClick, l = e.onDragEnter, u = e.onDragOver, d = e.onDragLeave, f = e.onDrop, p = of(e, Wd);
			return rf(rf(af({
				onKeyDown: ye(Pd(a, me)),
				onFocus: ye(Pd(o, he)),
				onBlur: ye(Pd(s, ge)),
				onClick: ve(Pd(c, _e)),
				onDragEnter: be(Pd(l, ce)),
				onDragOver: be(Pd(u, le)),
				onDragLeave: be(Pd(d, ue)),
				onDrop: be(Pd(f, fe)),
				role: typeof i == "string" && i !== "" ? i : "presentation"
			}, n, A), !r && !x ? { tabIndex: 0 } : {}), p);
		};
	}, [
		A,
		me,
		he,
		ge,
		_e,
		ce,
		le,
		ue,
		fe,
		x,
		S,
		r
	]), Ce = (0, I.useCallback)(function(e) {
		e.stopPropagation();
	}, []), we = (0, I.useMemo)(function() {
		return function() {
			var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.refKey, n = t === void 0 ? "ref" : t, r = e.onChange, i = e.onClick, a = of(e, Gd);
			return rf(rf({}, af({
				accept: E,
				multiple: s,
				type: "file",
				style: {
					border: 0,
					clip: "rect(0, 0, 0, 0)",
					clipPath: "inset(50%)",
					height: "1px",
					margin: "0 -1px -1px 0",
					overflow: "hidden",
					padding: 0,
					position: "absolute",
					width: "1px",
					whiteSpace: "nowrap"
				},
				onChange: ve(Pd(r, fe)),
				onClick: ve(Pd(i, Ce)),
				tabIndex: -1
			}, n, j)), a);
		};
	}, [
		j,
		n,
		s,
		fe,
		r
	]);
	return rf(rf({}, M), {}, {
		isFocused: te && !r,
		getRootProps: Se,
		getInputProps: we,
		rootRef: A,
		inputRef: j,
		open: ve(pe)
	});
}
function ff(e, t) {
	/* istanbul ignore next */
	switch (t.type) {
		case "focus": return rf(rf({}, e), {}, { isFocused: !0 });
		case "blur": return rf(rf({}, e), {}, { isFocused: !1 });
		case "openDialog": return rf(rf({}, uf), {}, { isFileDialogActive: !0 });
		case "closeDialog": return rf(rf({}, e), {}, { isFileDialogActive: !1 });
		case "setDraggedFiles": return rf(rf({}, e), {}, {
			isDragActive: t.isDragActive,
			isDragAccept: t.isDragAccept,
			isDragReject: t.isDragReject
		});
		case "setFiles": return rf(rf({}, e), {}, {
			acceptedFiles: t.acceptedFiles,
			fileRejections: t.fileRejections,
			isDragReject: t.isDragReject
		});
		case "setDragGlobal": return rf(rf({}, e), {}, { isDragGlobal: t.isDragGlobal });
		case "reset": return rf({}, uf);
		default: return e;
	}
}
function pf() {}
//#endregion
//#region node_modules/.pnpm/file-selector@0.10.0/node_modules/file-selector/dist/es5/file.js
var mf = new Map([
	["1km", "application/vnd.1000minds.decision-model+xml"],
	["3dml", "text/vnd.in3d.3dml"],
	["3ds", "image/x-3ds"],
	["3g2", "video/3gpp2"],
	["3gp", "video/3gp"],
	["3gpp", "video/3gpp"],
	["3mf", "model/3mf"],
	["7z", "application/x-7z-compressed"],
	["7zip", "application/x-7z-compressed"],
	["123", "application/vnd.lotus-1-2-3"],
	["aab", "application/x-authorware-bin"],
	["aac", "audio/x-acc"],
	["aam", "application/x-authorware-map"],
	["aas", "application/x-authorware-seg"],
	["abw", "application/x-abiword"],
	["ac", "application/vnd.nokia.n-gage.ac+xml"],
	["ac3", "audio/ac3"],
	["acc", "application/vnd.americandynamics.acc"],
	["ace", "application/x-ace-compressed"],
	["acu", "application/vnd.acucobol"],
	["acutc", "application/vnd.acucorp"],
	["adp", "audio/adpcm"],
	["aep", "application/vnd.audiograph"],
	["afm", "application/x-font-type1"],
	["afp", "application/vnd.ibm.modcap"],
	["ahead", "application/vnd.ahead.space"],
	["ai", "application/pdf"],
	["aif", "audio/x-aiff"],
	["aifc", "audio/x-aiff"],
	["aiff", "audio/x-aiff"],
	["air", "application/vnd.adobe.air-application-installer-package+zip"],
	["ait", "application/vnd.dvb.ait"],
	["ami", "application/vnd.amiga.ami"],
	["amr", "audio/amr"],
	["apk", "application/vnd.android.package-archive"],
	["apng", "image/apng"],
	["appcache", "text/cache-manifest"],
	["application", "application/x-ms-application"],
	["apr", "application/vnd.lotus-approach"],
	["arc", "application/x-freearc"],
	["arj", "application/x-arj"],
	["asc", "application/pgp-signature"],
	["asf", "video/x-ms-asf"],
	["asm", "text/x-asm"],
	["aso", "application/vnd.accpac.simply.aso"],
	["asx", "video/x-ms-asf"],
	["atc", "application/vnd.acucorp"],
	["atom", "application/atom+xml"],
	["atomcat", "application/atomcat+xml"],
	["atomdeleted", "application/atomdeleted+xml"],
	["atomsvc", "application/atomsvc+xml"],
	["atx", "application/vnd.antix.game-component"],
	["au", "audio/x-au"],
	["avi", "video/x-msvideo"],
	["avif", "image/avif"],
	["aw", "application/applixware"],
	["azf", "application/vnd.airzip.filesecure.azf"],
	["azs", "application/vnd.airzip.filesecure.azs"],
	["azv", "image/vnd.airzip.accelerator.azv"],
	["azw", "application/vnd.amazon.ebook"],
	["b16", "image/vnd.pco.b16"],
	["bat", "application/x-msdownload"],
	["bcpio", "application/x-bcpio"],
	["bdf", "application/x-font-bdf"],
	["bdm", "application/vnd.syncml.dm+wbxml"],
	["bdoc", "application/x-bdoc"],
	["bed", "application/vnd.realvnc.bed"],
	["bh2", "application/vnd.fujitsu.oasysprs"],
	["bin", "application/octet-stream"],
	["blb", "application/x-blorb"],
	["blorb", "application/x-blorb"],
	["bmi", "application/vnd.bmi"],
	["bmml", "application/vnd.balsamiq.bmml+xml"],
	["bmp", "image/bmp"],
	["book", "application/vnd.framemaker"],
	["box", "application/vnd.previewsystems.box"],
	["boz", "application/x-bzip2"],
	["bpk", "application/octet-stream"],
	["bpmn", "application/octet-stream"],
	["bsp", "model/vnd.valve.source.compiled-map"],
	["btif", "image/prs.btif"],
	["buffer", "application/octet-stream"],
	["bz", "application/x-bzip"],
	["bz2", "application/x-bzip2"],
	["c", "text/x-c"],
	["c4d", "application/vnd.clonk.c4group"],
	["c4f", "application/vnd.clonk.c4group"],
	["c4g", "application/vnd.clonk.c4group"],
	["c4p", "application/vnd.clonk.c4group"],
	["c4u", "application/vnd.clonk.c4group"],
	["c11amc", "application/vnd.cluetrust.cartomobile-config"],
	["c11amz", "application/vnd.cluetrust.cartomobile-config-pkg"],
	["cab", "application/vnd.ms-cab-compressed"],
	["caf", "audio/x-caf"],
	["cap", "application/vnd.tcpdump.pcap"],
	["car", "application/vnd.curl.car"],
	["cat", "application/vnd.ms-pki.seccat"],
	["cb7", "application/x-cbr"],
	["cba", "application/x-cbr"],
	["cbr", "application/x-cbr"],
	["cbt", "application/x-cbr"],
	["cbz", "application/x-cbr"],
	["cc", "text/x-c"],
	["cco", "application/x-cocoa"],
	["cct", "application/x-director"],
	["ccxml", "application/ccxml+xml"],
	["cdbcmsg", "application/vnd.contact.cmsg"],
	["cda", "application/x-cdf"],
	["cdf", "application/x-netcdf"],
	["cdfx", "application/cdfx+xml"],
	["cdkey", "application/vnd.mediastation.cdkey"],
	["cdmia", "application/cdmi-capability"],
	["cdmic", "application/cdmi-container"],
	["cdmid", "application/cdmi-domain"],
	["cdmio", "application/cdmi-object"],
	["cdmiq", "application/cdmi-queue"],
	["cdr", "application/cdr"],
	["cdx", "chemical/x-cdx"],
	["cdxml", "application/vnd.chemdraw+xml"],
	["cdy", "application/vnd.cinderella"],
	["cer", "application/pkix-cert"],
	["cfs", "application/x-cfs-compressed"],
	["cgm", "image/cgm"],
	["chat", "application/x-chat"],
	["chm", "application/vnd.ms-htmlhelp"],
	["chrt", "application/vnd.kde.kchart"],
	["cif", "chemical/x-cif"],
	["cii", "application/vnd.anser-web-certificate-issue-initiation"],
	["cil", "application/vnd.ms-artgalry"],
	["cjs", "application/node"],
	["cla", "application/vnd.claymore"],
	["class", "application/octet-stream"],
	["clkk", "application/vnd.crick.clicker.keyboard"],
	["clkp", "application/vnd.crick.clicker.palette"],
	["clkt", "application/vnd.crick.clicker.template"],
	["clkw", "application/vnd.crick.clicker.wordbank"],
	["clkx", "application/vnd.crick.clicker"],
	["clp", "application/x-msclip"],
	["cmc", "application/vnd.cosmocaller"],
	["cmdf", "chemical/x-cmdf"],
	["cml", "chemical/x-cml"],
	["cmp", "application/vnd.yellowriver-custom-menu"],
	["cmx", "image/x-cmx"],
	["cod", "application/vnd.rim.cod"],
	["coffee", "text/coffeescript"],
	["com", "application/x-msdownload"],
	["conf", "text/plain"],
	["cpio", "application/x-cpio"],
	["cpp", "text/x-c"],
	["cpt", "application/mac-compactpro"],
	["crd", "application/x-mscardfile"],
	["crl", "application/pkix-crl"],
	["crt", "application/x-x509-ca-cert"],
	["crx", "application/x-chrome-extension"],
	["cryptonote", "application/vnd.rig.cryptonote"],
	["csh", "application/x-csh"],
	["csl", "application/vnd.citationstyles.style+xml"],
	["csml", "chemical/x-csml"],
	["csp", "application/vnd.commonspace"],
	["csr", "application/octet-stream"],
	["css", "text/css"],
	["cst", "application/x-director"],
	["csv", "text/csv"],
	["cu", "application/cu-seeme"],
	["curl", "text/vnd.curl"],
	["cww", "application/prs.cww"],
	["cxt", "application/x-director"],
	["cxx", "text/x-c"],
	["dae", "model/vnd.collada+xml"],
	["daf", "application/vnd.mobius.daf"],
	["dart", "application/vnd.dart"],
	["dataless", "application/vnd.fdsn.seed"],
	["davmount", "application/davmount+xml"],
	["dbf", "application/vnd.dbf"],
	["dbk", "application/docbook+xml"],
	["dcr", "application/x-director"],
	["dcurl", "text/vnd.curl.dcurl"],
	["dd2", "application/vnd.oma.dd2+xml"],
	["ddd", "application/vnd.fujixerox.ddd"],
	["ddf", "application/vnd.syncml.dmddf+xml"],
	["dds", "image/vnd.ms-dds"],
	["deb", "application/x-debian-package"],
	["def", "text/plain"],
	["deploy", "application/octet-stream"],
	["der", "application/x-x509-ca-cert"],
	["dfac", "application/vnd.dreamfactory"],
	["dgc", "application/x-dgc-compressed"],
	["dic", "text/x-c"],
	["dir", "application/x-director"],
	["dis", "application/vnd.mobius.dis"],
	["disposition-notification", "message/disposition-notification"],
	["dist", "application/octet-stream"],
	["distz", "application/octet-stream"],
	["djv", "image/vnd.djvu"],
	["djvu", "image/vnd.djvu"],
	["dll", "application/octet-stream"],
	["dmg", "application/x-apple-diskimage"],
	["dmn", "application/octet-stream"],
	["dmp", "application/vnd.tcpdump.pcap"],
	["dms", "application/octet-stream"],
	["dna", "application/vnd.dna"],
	["doc", "application/msword"],
	["docm", "application/vnd.ms-word.template.macroEnabled.12"],
	["docx", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"],
	["dot", "application/msword"],
	["dotm", "application/vnd.ms-word.template.macroEnabled.12"],
	["dotx", "application/vnd.openxmlformats-officedocument.wordprocessingml.template"],
	["dp", "application/vnd.osgi.dp"],
	["dpg", "application/vnd.dpgraph"],
	["dra", "audio/vnd.dra"],
	["drle", "image/dicom-rle"],
	["dsc", "text/prs.lines.tag"],
	["dssc", "application/dssc+der"],
	["dtb", "application/x-dtbook+xml"],
	["dtd", "application/xml-dtd"],
	["dts", "audio/vnd.dts"],
	["dtshd", "audio/vnd.dts.hd"],
	["dump", "application/octet-stream"],
	["dvb", "video/vnd.dvb.file"],
	["dvi", "application/x-dvi"],
	["dwd", "application/atsc-dwd+xml"],
	["dwf", "model/vnd.dwf"],
	["dwg", "image/vnd.dwg"],
	["dxf", "image/vnd.dxf"],
	["dxp", "application/vnd.spotfire.dxp"],
	["dxr", "application/x-director"],
	["ear", "application/java-archive"],
	["ecelp4800", "audio/vnd.nuera.ecelp4800"],
	["ecelp7470", "audio/vnd.nuera.ecelp7470"],
	["ecelp9600", "audio/vnd.nuera.ecelp9600"],
	["ecma", "application/ecmascript"],
	["edm", "application/vnd.novadigm.edm"],
	["edx", "application/vnd.novadigm.edx"],
	["efif", "application/vnd.picsel"],
	["ei6", "application/vnd.pg.osasli"],
	["elc", "application/octet-stream"],
	["emf", "image/emf"],
	["eml", "message/rfc822"],
	["emma", "application/emma+xml"],
	["emotionml", "application/emotionml+xml"],
	["emz", "application/x-msmetafile"],
	["eol", "audio/vnd.digital-winds"],
	["eot", "application/vnd.ms-fontobject"],
	["eps", "application/postscript"],
	["epub", "application/epub+zip"],
	["es", "application/ecmascript"],
	["es3", "application/vnd.eszigno3+xml"],
	["esa", "application/vnd.osgi.subsystem"],
	["esf", "application/vnd.epson.esf"],
	["et3", "application/vnd.eszigno3+xml"],
	["etx", "text/x-setext"],
	["eva", "application/x-eva"],
	["evy", "application/x-envoy"],
	["exe", "application/octet-stream"],
	["exi", "application/exi"],
	["exp", "application/express"],
	["exr", "image/aces"],
	["ext", "application/vnd.novadigm.ext"],
	["ez", "application/andrew-inset"],
	["ez2", "application/vnd.ezpix-album"],
	["ez3", "application/vnd.ezpix-package"],
	["f", "text/x-fortran"],
	["f4v", "video/mp4"],
	["f77", "text/x-fortran"],
	["f90", "text/x-fortran"],
	["fbs", "image/vnd.fastbidsheet"],
	["fcdt", "application/vnd.adobe.formscentral.fcdt"],
	["fcs", "application/vnd.isac.fcs"],
	["fdf", "application/vnd.fdf"],
	["fdt", "application/fdt+xml"],
	["fe_launch", "application/vnd.denovo.fcselayout-link"],
	["fg5", "application/vnd.fujitsu.oasysgp"],
	["fgd", "application/x-director"],
	["fh", "image/x-freehand"],
	["fh4", "image/x-freehand"],
	["fh5", "image/x-freehand"],
	["fh7", "image/x-freehand"],
	["fhc", "image/x-freehand"],
	["fig", "application/x-xfig"],
	["fits", "image/fits"],
	["flac", "audio/x-flac"],
	["fli", "video/x-fli"],
	["flo", "application/vnd.micrografx.flo"],
	["flv", "video/x-flv"],
	["flw", "application/vnd.kde.kivio"],
	["flx", "text/vnd.fmi.flexstor"],
	["fly", "text/vnd.fly"],
	["fm", "application/vnd.framemaker"],
	["fnc", "application/vnd.frogans.fnc"],
	["fo", "application/vnd.software602.filler.form+xml"],
	["for", "text/x-fortran"],
	["fpx", "image/vnd.fpx"],
	["frame", "application/vnd.framemaker"],
	["fsc", "application/vnd.fsc.weblaunch"],
	["fst", "image/vnd.fst"],
	["ftc", "application/vnd.fluxtime.clip"],
	["fti", "application/vnd.anser-web-funds-transfer-initiation"],
	["fvt", "video/vnd.fvt"],
	["fxp", "application/vnd.adobe.fxp"],
	["fxpl", "application/vnd.adobe.fxp"],
	["fzs", "application/vnd.fuzzysheet"],
	["g2w", "application/vnd.geoplan"],
	["g3", "image/g3fax"],
	["g3w", "application/vnd.geospace"],
	["gac", "application/vnd.groove-account"],
	["gam", "application/x-tads"],
	["gbr", "application/rpki-ghostbusters"],
	["gca", "application/x-gca-compressed"],
	["gdl", "model/vnd.gdl"],
	["gdoc", "application/vnd.google-apps.document"],
	["geo", "application/vnd.dynageo"],
	["geojson", "application/geo+json"],
	["gex", "application/vnd.geometry-explorer"],
	["ggb", "application/vnd.geogebra.file"],
	["ggt", "application/vnd.geogebra.tool"],
	["ghf", "application/vnd.groove-help"],
	["gif", "image/gif"],
	["gim", "application/vnd.groove-identity-message"],
	["glb", "model/gltf-binary"],
	["gltf", "model/gltf+json"],
	["gml", "application/gml+xml"],
	["gmx", "application/vnd.gmx"],
	["gnumeric", "application/x-gnumeric"],
	["gpg", "application/gpg-keys"],
	["gph", "application/vnd.flographit"],
	["gpx", "application/gpx+xml"],
	["gqf", "application/vnd.grafeq"],
	["gqs", "application/vnd.grafeq"],
	["gram", "application/srgs"],
	["gramps", "application/x-gramps-xml"],
	["gre", "application/vnd.geometry-explorer"],
	["grv", "application/vnd.groove-injector"],
	["grxml", "application/srgs+xml"],
	["gsf", "application/x-font-ghostscript"],
	["gsheet", "application/vnd.google-apps.spreadsheet"],
	["gslides", "application/vnd.google-apps.presentation"],
	["gtar", "application/x-gtar"],
	["gtm", "application/vnd.groove-tool-message"],
	["gtw", "model/vnd.gtw"],
	["gv", "text/vnd.graphviz"],
	["gxf", "application/gxf"],
	["gxt", "application/vnd.geonext"],
	["gz", "application/gzip"],
	["gzip", "application/gzip"],
	["h", "text/x-c"],
	["h261", "video/h261"],
	["h263", "video/h263"],
	["h264", "video/h264"],
	["hal", "application/vnd.hal+xml"],
	["hbci", "application/vnd.hbci"],
	["hbs", "text/x-handlebars-template"],
	["hdd", "application/x-virtualbox-hdd"],
	["hdf", "application/x-hdf"],
	["heic", "image/heic"],
	["heics", "image/heic-sequence"],
	["heif", "image/heif"],
	["heifs", "image/heif-sequence"],
	["hej2", "image/hej2k"],
	["held", "application/atsc-held+xml"],
	["hh", "text/x-c"],
	["hjson", "application/hjson"],
	["hlp", "application/winhlp"],
	["hpgl", "application/vnd.hp-hpgl"],
	["hpid", "application/vnd.hp-hpid"],
	["hps", "application/vnd.hp-hps"],
	["hqx", "application/mac-binhex40"],
	["hsj2", "image/hsj2"],
	["htc", "text/x-component"],
	["htke", "application/vnd.kenameaapp"],
	["htm", "text/html"],
	["html", "text/html"],
	["hvd", "application/vnd.yamaha.hv-dic"],
	["hvp", "application/vnd.yamaha.hv-voice"],
	["hvs", "application/vnd.yamaha.hv-script"],
	["i2g", "application/vnd.intergeo"],
	["icc", "application/vnd.iccprofile"],
	["ice", "x-conference/x-cooltalk"],
	["icm", "application/vnd.iccprofile"],
	["ico", "image/x-icon"],
	["ics", "text/calendar"],
	["ief", "image/ief"],
	["ifb", "text/calendar"],
	["ifm", "application/vnd.shana.informed.formdata"],
	["iges", "model/iges"],
	["igl", "application/vnd.igloader"],
	["igm", "application/vnd.insors.igm"],
	["igs", "model/iges"],
	["igx", "application/vnd.micrografx.igx"],
	["iif", "application/vnd.shana.informed.interchange"],
	["img", "application/octet-stream"],
	["imp", "application/vnd.accpac.simply.imp"],
	["ims", "application/vnd.ms-ims"],
	["in", "text/plain"],
	["ini", "text/plain"],
	["ink", "application/inkml+xml"],
	["inkml", "application/inkml+xml"],
	["install", "application/x-install-instructions"],
	["iota", "application/vnd.astraea-software.iota"],
	["ipfix", "application/ipfix"],
	["ipk", "application/vnd.shana.informed.package"],
	["irm", "application/vnd.ibm.rights-management"],
	["irp", "application/vnd.irepository.package+xml"],
	["iso", "application/x-iso9660-image"],
	["itp", "application/vnd.shana.informed.formtemplate"],
	["its", "application/its+xml"],
	["ivp", "application/vnd.immervision-ivp"],
	["ivu", "application/vnd.immervision-ivu"],
	["jad", "text/vnd.sun.j2me.app-descriptor"],
	["jade", "text/jade"],
	["jam", "application/vnd.jam"],
	["jar", "application/java-archive"],
	["jardiff", "application/x-java-archive-diff"],
	["java", "text/x-java-source"],
	["jhc", "image/jphc"],
	["jisp", "application/vnd.jisp"],
	["jls", "image/jls"],
	["jlt", "application/vnd.hp-jlyt"],
	["jng", "image/x-jng"],
	["jnlp", "application/x-java-jnlp-file"],
	["joda", "application/vnd.joost.joda-archive"],
	["jp2", "image/jp2"],
	["jpe", "image/jpeg"],
	["jpeg", "image/jpeg"],
	["jpf", "image/jpx"],
	["jpg", "image/jpeg"],
	["jpg2", "image/jp2"],
	["jpgm", "video/jpm"],
	["jpgv", "video/jpeg"],
	["jph", "image/jph"],
	["jpm", "video/jpm"],
	["jpx", "image/jpx"],
	["js", "application/javascript"],
	["json", "application/json"],
	["json5", "application/json5"],
	["jsonld", "application/ld+json"],
	["jsonml", "application/jsonml+json"],
	["jsx", "text/jsx"],
	["jxr", "image/jxr"],
	["jxra", "image/jxra"],
	["jxrs", "image/jxrs"],
	["jxs", "image/jxs"],
	["jxsc", "image/jxsc"],
	["jxsi", "image/jxsi"],
	["jxss", "image/jxss"],
	["kar", "audio/midi"],
	["karbon", "application/vnd.kde.karbon"],
	["kdb", "application/octet-stream"],
	["kdbx", "application/x-keepass2"],
	["key", "application/x-iwork-keynote-sffkey"],
	["kfo", "application/vnd.kde.kformula"],
	["kia", "application/vnd.kidspiration"],
	["kml", "application/vnd.google-earth.kml+xml"],
	["kmz", "application/vnd.google-earth.kmz"],
	["kne", "application/vnd.kinar"],
	["knp", "application/vnd.kinar"],
	["kon", "application/vnd.kde.kontour"],
	["kpr", "application/vnd.kde.kpresenter"],
	["kpt", "application/vnd.kde.kpresenter"],
	["kpxx", "application/vnd.ds-keypoint"],
	["ksp", "application/vnd.kde.kspread"],
	["ktr", "application/vnd.kahootz"],
	["ktx", "image/ktx"],
	["ktx2", "image/ktx2"],
	["ktz", "application/vnd.kahootz"],
	["kwd", "application/vnd.kde.kword"],
	["kwt", "application/vnd.kde.kword"],
	["lasxml", "application/vnd.las.las+xml"],
	["latex", "application/x-latex"],
	["lbd", "application/vnd.llamagraphics.life-balance.desktop"],
	["lbe", "application/vnd.llamagraphics.life-balance.exchange+xml"],
	["les", "application/vnd.hhe.lesson-player"],
	["less", "text/less"],
	["lgr", "application/lgr+xml"],
	["lha", "application/octet-stream"],
	["link66", "application/vnd.route66.link66+xml"],
	["list", "text/plain"],
	["list3820", "application/vnd.ibm.modcap"],
	["listafp", "application/vnd.ibm.modcap"],
	["litcoffee", "text/coffeescript"],
	["lnk", "application/x-ms-shortcut"],
	["log", "text/plain"],
	["lostxml", "application/lost+xml"],
	["lrf", "application/octet-stream"],
	["lrm", "application/vnd.ms-lrm"],
	["ltf", "application/vnd.frogans.ltf"],
	["lua", "text/x-lua"],
	["luac", "application/x-lua-bytecode"],
	["lvp", "audio/vnd.lucent.voice"],
	["lwp", "application/vnd.lotus-wordpro"],
	["lzh", "application/octet-stream"],
	["m1v", "video/mpeg"],
	["m2a", "audio/mpeg"],
	["m2v", "video/mpeg"],
	["m3a", "audio/mpeg"],
	["m3u", "text/plain"],
	["m3u8", "application/vnd.apple.mpegurl"],
	["m4a", "audio/x-m4a"],
	["m4p", "application/mp4"],
	["m4s", "video/iso.segment"],
	["m4u", "application/vnd.mpegurl"],
	["m4v", "video/x-m4v"],
	["m13", "application/x-msmediaview"],
	["m14", "application/x-msmediaview"],
	["m21", "application/mp21"],
	["ma", "application/mathematica"],
	["mads", "application/mads+xml"],
	["maei", "application/mmt-aei+xml"],
	["mag", "application/vnd.ecowin.chart"],
	["maker", "application/vnd.framemaker"],
	["man", "text/troff"],
	["manifest", "text/cache-manifest"],
	["map", "application/json"],
	["mar", "application/octet-stream"],
	["markdown", "text/markdown"],
	["mathml", "application/mathml+xml"],
	["mb", "application/mathematica"],
	["mbk", "application/vnd.mobius.mbk"],
	["mbox", "application/mbox"],
	["mc1", "application/vnd.medcalcdata"],
	["mcd", "application/vnd.mcd"],
	["mcurl", "text/vnd.curl.mcurl"],
	["md", "text/markdown"],
	["mdb", "application/x-msaccess"],
	["mdi", "image/vnd.ms-modi"],
	["mdx", "text/mdx"],
	["me", "text/troff"],
	["mesh", "model/mesh"],
	["meta4", "application/metalink4+xml"],
	["metalink", "application/metalink+xml"],
	["mets", "application/mets+xml"],
	["mfm", "application/vnd.mfmp"],
	["mft", "application/rpki-manifest"],
	["mgp", "application/vnd.osgeo.mapguide.package"],
	["mgz", "application/vnd.proteus.magazine"],
	["mid", "audio/midi"],
	["midi", "audio/midi"],
	["mie", "application/x-mie"],
	["mif", "application/vnd.mif"],
	["mime", "message/rfc822"],
	["mj2", "video/mj2"],
	["mjp2", "video/mj2"],
	["mjs", "application/javascript"],
	["mk3d", "video/x-matroska"],
	["mka", "audio/x-matroska"],
	["mkd", "text/x-markdown"],
	["mks", "video/x-matroska"],
	["mkv", "video/x-matroska"],
	["mlp", "application/vnd.dolby.mlp"],
	["mmd", "application/vnd.chipnuts.karaoke-mmd"],
	["mmf", "application/vnd.smaf"],
	["mml", "text/mathml"],
	["mmr", "image/vnd.fujixerox.edmics-mmr"],
	["mng", "video/x-mng"],
	["mny", "application/x-msmoney"],
	["mobi", "application/x-mobipocket-ebook"],
	["mods", "application/mods+xml"],
	["mov", "video/quicktime"],
	["movie", "video/x-sgi-movie"],
	["mp2", "audio/mpeg"],
	["mp2a", "audio/mpeg"],
	["mp3", "audio/mpeg"],
	["mp4", "video/mp4"],
	["mp4a", "audio/mp4"],
	["mp4s", "application/mp4"],
	["mp4v", "video/mp4"],
	["mp21", "application/mp21"],
	["mpc", "application/vnd.mophun.certificate"],
	["mpd", "application/dash+xml"],
	["mpe", "video/mpeg"],
	["mpeg", "video/mpeg"],
	["mpg", "video/mpeg"],
	["mpg4", "video/mp4"],
	["mpga", "audio/mpeg"],
	["mpkg", "application/vnd.apple.installer+xml"],
	["mpm", "application/vnd.blueice.multipass"],
	["mpn", "application/vnd.mophun.application"],
	["mpp", "application/vnd.ms-project"],
	["mpt", "application/vnd.ms-project"],
	["mpy", "application/vnd.ibm.minipay"],
	["mqy", "application/vnd.mobius.mqy"],
	["mrc", "application/marc"],
	["mrcx", "application/marcxml+xml"],
	["ms", "text/troff"],
	["mscml", "application/mediaservercontrol+xml"],
	["mseed", "application/vnd.fdsn.mseed"],
	["mseq", "application/vnd.mseq"],
	["msf", "application/vnd.epson.msf"],
	["msg", "application/vnd.ms-outlook"],
	["msh", "model/mesh"],
	["msi", "application/x-msdownload"],
	["msl", "application/vnd.mobius.msl"],
	["msm", "application/octet-stream"],
	["msp", "application/octet-stream"],
	["msty", "application/vnd.muvee.style"],
	["mtl", "model/mtl"],
	["mts", "model/vnd.mts"],
	["mus", "application/vnd.musician"],
	["musd", "application/mmt-usd+xml"],
	["musicxml", "application/vnd.recordare.musicxml+xml"],
	["mvb", "application/x-msmediaview"],
	["mvt", "application/vnd.mapbox-vector-tile"],
	["mwf", "application/vnd.mfer"],
	["mxf", "application/mxf"],
	["mxl", "application/vnd.recordare.musicxml"],
	["mxmf", "audio/mobile-xmf"],
	["mxml", "application/xv+xml"],
	["mxs", "application/vnd.triscape.mxs"],
	["mxu", "video/vnd.mpegurl"],
	["n-gage", "application/vnd.nokia.n-gage.symbian.install"],
	["n3", "text/n3"],
	["nb", "application/mathematica"],
	["nbp", "application/vnd.wolfram.player"],
	["nc", "application/x-netcdf"],
	["ncx", "application/x-dtbncx+xml"],
	["nfo", "text/x-nfo"],
	["ngdat", "application/vnd.nokia.n-gage.data"],
	["nitf", "application/vnd.nitf"],
	["nlu", "application/vnd.neurolanguage.nlu"],
	["nml", "application/vnd.enliven"],
	["nnd", "application/vnd.noblenet-directory"],
	["nns", "application/vnd.noblenet-sealer"],
	["nnw", "application/vnd.noblenet-web"],
	["npx", "image/vnd.net-fpx"],
	["nq", "application/n-quads"],
	["nsc", "application/x-conference"],
	["nsf", "application/vnd.lotus-notes"],
	["nt", "application/n-triples"],
	["ntf", "application/vnd.nitf"],
	["numbers", "application/x-iwork-numbers-sffnumbers"],
	["nzb", "application/x-nzb"],
	["oa2", "application/vnd.fujitsu.oasys2"],
	["oa3", "application/vnd.fujitsu.oasys3"],
	["oas", "application/vnd.fujitsu.oasys"],
	["obd", "application/x-msbinder"],
	["obgx", "application/vnd.openblox.game+xml"],
	["obj", "model/obj"],
	["oda", "application/oda"],
	["odb", "application/vnd.oasis.opendocument.database"],
	["odc", "application/vnd.oasis.opendocument.chart"],
	["odf", "application/vnd.oasis.opendocument.formula"],
	["odft", "application/vnd.oasis.opendocument.formula-template"],
	["odg", "application/vnd.oasis.opendocument.graphics"],
	["odi", "application/vnd.oasis.opendocument.image"],
	["odm", "application/vnd.oasis.opendocument.text-master"],
	["odp", "application/vnd.oasis.opendocument.presentation"],
	["ods", "application/vnd.oasis.opendocument.spreadsheet"],
	["odt", "application/vnd.oasis.opendocument.text"],
	["oga", "audio/ogg"],
	["ogex", "model/vnd.opengex"],
	["ogg", "audio/ogg"],
	["ogv", "video/ogg"],
	["ogx", "application/ogg"],
	["omdoc", "application/omdoc+xml"],
	["onepkg", "application/onenote"],
	["onetmp", "application/onenote"],
	["onetoc", "application/onenote"],
	["onetoc2", "application/onenote"],
	["opf", "application/oebps-package+xml"],
	["opml", "text/x-opml"],
	["oprc", "application/vnd.palm"],
	["opus", "audio/ogg"],
	["org", "text/x-org"],
	["osf", "application/vnd.yamaha.openscoreformat"],
	["osfpvg", "application/vnd.yamaha.openscoreformat.osfpvg+xml"],
	["osm", "application/vnd.openstreetmap.data+xml"],
	["otc", "application/vnd.oasis.opendocument.chart-template"],
	["otf", "font/otf"],
	["otg", "application/vnd.oasis.opendocument.graphics-template"],
	["oth", "application/vnd.oasis.opendocument.text-web"],
	["oti", "application/vnd.oasis.opendocument.image-template"],
	["otp", "application/vnd.oasis.opendocument.presentation-template"],
	["ots", "application/vnd.oasis.opendocument.spreadsheet-template"],
	["ott", "application/vnd.oasis.opendocument.text-template"],
	["ova", "application/x-virtualbox-ova"],
	["ovf", "application/x-virtualbox-ovf"],
	["owl", "application/rdf+xml"],
	["oxps", "application/oxps"],
	["oxt", "application/vnd.openofficeorg.extension"],
	["p", "text/x-pascal"],
	["p7a", "application/x-pkcs7-signature"],
	["p7b", "application/x-pkcs7-certificates"],
	["p7c", "application/pkcs7-mime"],
	["p7m", "application/pkcs7-mime"],
	["p7r", "application/x-pkcs7-certreqresp"],
	["p7s", "application/pkcs7-signature"],
	["p8", "application/pkcs8"],
	["p10", "application/x-pkcs10"],
	["p12", "application/x-pkcs12"],
	["pac", "application/x-ns-proxy-autoconfig"],
	["pages", "application/x-iwork-pages-sffpages"],
	["pas", "text/x-pascal"],
	["paw", "application/vnd.pawaafile"],
	["pbd", "application/vnd.powerbuilder6"],
	["pbm", "image/x-portable-bitmap"],
	["pcap", "application/vnd.tcpdump.pcap"],
	["pcf", "application/x-font-pcf"],
	["pcl", "application/vnd.hp-pcl"],
	["pclxl", "application/vnd.hp-pclxl"],
	["pct", "image/x-pict"],
	["pcurl", "application/vnd.curl.pcurl"],
	["pcx", "image/x-pcx"],
	["pdb", "application/x-pilot"],
	["pde", "text/x-processing"],
	["pdf", "application/pdf"],
	["pem", "application/x-x509-user-cert"],
	["pfa", "application/x-font-type1"],
	["pfb", "application/x-font-type1"],
	["pfm", "application/x-font-type1"],
	["pfr", "application/font-tdpfr"],
	["pfx", "application/x-pkcs12"],
	["pgm", "image/x-portable-graymap"],
	["pgn", "application/x-chess-pgn"],
	["pgp", "application/pgp"],
	["php", "application/x-httpd-php"],
	["php3", "application/x-httpd-php"],
	["php4", "application/x-httpd-php"],
	["phps", "application/x-httpd-php-source"],
	["phtml", "application/x-httpd-php"],
	["pic", "image/x-pict"],
	["pkg", "application/octet-stream"],
	["pki", "application/pkixcmp"],
	["pkipath", "application/pkix-pkipath"],
	["pkpass", "application/vnd.apple.pkpass"],
	["pl", "application/x-perl"],
	["plb", "application/vnd.3gpp.pic-bw-large"],
	["plc", "application/vnd.mobius.plc"],
	["plf", "application/vnd.pocketlearn"],
	["pls", "application/pls+xml"],
	["pm", "application/x-perl"],
	["pml", "application/vnd.ctc-posml"],
	["png", "image/png"],
	["pnm", "image/x-portable-anymap"],
	["portpkg", "application/vnd.macports.portpkg"],
	["pot", "application/vnd.ms-powerpoint"],
	["potm", "application/vnd.ms-powerpoint.presentation.macroEnabled.12"],
	["potx", "application/vnd.openxmlformats-officedocument.presentationml.template"],
	["ppa", "application/vnd.ms-powerpoint"],
	["ppam", "application/vnd.ms-powerpoint.addin.macroEnabled.12"],
	["ppd", "application/vnd.cups-ppd"],
	["ppm", "image/x-portable-pixmap"],
	["pps", "application/vnd.ms-powerpoint"],
	["ppsm", "application/vnd.ms-powerpoint.slideshow.macroEnabled.12"],
	["ppsx", "application/vnd.openxmlformats-officedocument.presentationml.slideshow"],
	["ppt", "application/powerpoint"],
	["pptm", "application/vnd.ms-powerpoint.presentation.macroEnabled.12"],
	["pptx", "application/vnd.openxmlformats-officedocument.presentationml.presentation"],
	["pqa", "application/vnd.palm"],
	["prc", "application/x-pilot"],
	["pre", "application/vnd.lotus-freelance"],
	["prf", "application/pics-rules"],
	["provx", "application/provenance+xml"],
	["ps", "application/postscript"],
	["psb", "application/vnd.3gpp.pic-bw-small"],
	["psd", "application/x-photoshop"],
	["psf", "application/x-font-linux-psf"],
	["pskcxml", "application/pskc+xml"],
	["pti", "image/prs.pti"],
	["ptid", "application/vnd.pvi.ptid1"],
	["pub", "application/x-mspublisher"],
	["pvb", "application/vnd.3gpp.pic-bw-var"],
	["pwn", "application/vnd.3m.post-it-notes"],
	["pya", "audio/vnd.ms-playready.media.pya"],
	["pyv", "video/vnd.ms-playready.media.pyv"],
	["qam", "application/vnd.epson.quickanime"],
	["qbo", "application/vnd.intu.qbo"],
	["qfx", "application/vnd.intu.qfx"],
	["qps", "application/vnd.publishare-delta-tree"],
	["qt", "video/quicktime"],
	["qwd", "application/vnd.quark.quarkxpress"],
	["qwt", "application/vnd.quark.quarkxpress"],
	["qxb", "application/vnd.quark.quarkxpress"],
	["qxd", "application/vnd.quark.quarkxpress"],
	["qxl", "application/vnd.quark.quarkxpress"],
	["qxt", "application/vnd.quark.quarkxpress"],
	["ra", "audio/x-realaudio"],
	["ram", "audio/x-pn-realaudio"],
	["raml", "application/raml+yaml"],
	["rapd", "application/route-apd+xml"],
	["rar", "application/x-rar"],
	["ras", "image/x-cmu-raster"],
	["rcprofile", "application/vnd.ipunplugged.rcprofile"],
	["rdf", "application/rdf+xml"],
	["rdz", "application/vnd.data-vision.rdz"],
	["relo", "application/p2p-overlay+xml"],
	["rep", "application/vnd.businessobjects"],
	["res", "application/x-dtbresource+xml"],
	["rgb", "image/x-rgb"],
	["rif", "application/reginfo+xml"],
	["rip", "audio/vnd.rip"],
	["ris", "application/x-research-info-systems"],
	["rl", "application/resource-lists+xml"],
	["rlc", "image/vnd.fujixerox.edmics-rlc"],
	["rld", "application/resource-lists-diff+xml"],
	["rm", "audio/x-pn-realaudio"],
	["rmi", "audio/midi"],
	["rmp", "audio/x-pn-realaudio-plugin"],
	["rms", "application/vnd.jcp.javame.midlet-rms"],
	["rmvb", "application/vnd.rn-realmedia-vbr"],
	["rnc", "application/relax-ng-compact-syntax"],
	["rng", "application/xml"],
	["roa", "application/rpki-roa"],
	["roff", "text/troff"],
	["rp9", "application/vnd.cloanto.rp9"],
	["rpm", "audio/x-pn-realaudio-plugin"],
	["rpss", "application/vnd.nokia.radio-presets"],
	["rpst", "application/vnd.nokia.radio-preset"],
	["rq", "application/sparql-query"],
	["rs", "application/rls-services+xml"],
	["rsa", "application/x-pkcs7"],
	["rsat", "application/atsc-rsat+xml"],
	["rsd", "application/rsd+xml"],
	["rsheet", "application/urc-ressheet+xml"],
	["rss", "application/rss+xml"],
	["rtf", "text/rtf"],
	["rtx", "text/richtext"],
	["run", "application/x-makeself"],
	["rusd", "application/route-usd+xml"],
	["rv", "video/vnd.rn-realvideo"],
	["s", "text/x-asm"],
	["s3m", "audio/s3m"],
	["saf", "application/vnd.yamaha.smaf-audio"],
	["sass", "text/x-sass"],
	["sbml", "application/sbml+xml"],
	["sc", "application/vnd.ibm.secure-container"],
	["scd", "application/x-msschedule"],
	["scm", "application/vnd.lotus-screencam"],
	["scq", "application/scvp-cv-request"],
	["scs", "application/scvp-cv-response"],
	["scss", "text/x-scss"],
	["scurl", "text/vnd.curl.scurl"],
	["sda", "application/vnd.stardivision.draw"],
	["sdc", "application/vnd.stardivision.calc"],
	["sdd", "application/vnd.stardivision.impress"],
	["sdkd", "application/vnd.solent.sdkm+xml"],
	["sdkm", "application/vnd.solent.sdkm+xml"],
	["sdp", "application/sdp"],
	["sdw", "application/vnd.stardivision.writer"],
	["sea", "application/octet-stream"],
	["see", "application/vnd.seemail"],
	["seed", "application/vnd.fdsn.seed"],
	["sema", "application/vnd.sema"],
	["semd", "application/vnd.semd"],
	["semf", "application/vnd.semf"],
	["senmlx", "application/senml+xml"],
	["sensmlx", "application/sensml+xml"],
	["ser", "application/java-serialized-object"],
	["setpay", "application/set-payment-initiation"],
	["setreg", "application/set-registration-initiation"],
	["sfd-hdstx", "application/vnd.hydrostatix.sof-data"],
	["sfs", "application/vnd.spotfire.sfs"],
	["sfv", "text/x-sfv"],
	["sgi", "image/sgi"],
	["sgl", "application/vnd.stardivision.writer-global"],
	["sgm", "text/sgml"],
	["sgml", "text/sgml"],
	["sh", "application/x-sh"],
	["shar", "application/x-shar"],
	["shex", "text/shex"],
	["shf", "application/shf+xml"],
	["shtml", "text/html"],
	["sid", "image/x-mrsid-image"],
	["sieve", "application/sieve"],
	["sig", "application/pgp-signature"],
	["sil", "audio/silk"],
	["silo", "model/mesh"],
	["sis", "application/vnd.symbian.install"],
	["sisx", "application/vnd.symbian.install"],
	["sit", "application/x-stuffit"],
	["sitx", "application/x-stuffitx"],
	["siv", "application/sieve"],
	["skd", "application/vnd.koan"],
	["skm", "application/vnd.koan"],
	["skp", "application/vnd.koan"],
	["skt", "application/vnd.koan"],
	["sldm", "application/vnd.ms-powerpoint.slide.macroenabled.12"],
	["sldx", "application/vnd.openxmlformats-officedocument.presentationml.slide"],
	["slim", "text/slim"],
	["slm", "text/slim"],
	["sls", "application/route-s-tsid+xml"],
	["slt", "application/vnd.epson.salt"],
	["sm", "application/vnd.stepmania.stepchart"],
	["smf", "application/vnd.stardivision.math"],
	["smi", "application/smil"],
	["smil", "application/smil"],
	["smv", "video/x-smv"],
	["smzip", "application/vnd.stepmania.package"],
	["snd", "audio/basic"],
	["snf", "application/x-font-snf"],
	["so", "application/octet-stream"],
	["spc", "application/x-pkcs7-certificates"],
	["spdx", "text/spdx"],
	["spf", "application/vnd.yamaha.smaf-phrase"],
	["spl", "application/x-futuresplash"],
	["spot", "text/vnd.in3d.spot"],
	["spp", "application/scvp-vp-response"],
	["spq", "application/scvp-vp-request"],
	["spx", "audio/ogg"],
	["sql", "application/x-sql"],
	["src", "application/x-wais-source"],
	["srt", "application/x-subrip"],
	["sru", "application/sru+xml"],
	["srx", "application/sparql-results+xml"],
	["ssdl", "application/ssdl+xml"],
	["sse", "application/vnd.kodak-descriptor"],
	["ssf", "application/vnd.epson.ssf"],
	["ssml", "application/ssml+xml"],
	["sst", "application/octet-stream"],
	["st", "application/vnd.sailingtracker.track"],
	["stc", "application/vnd.sun.xml.calc.template"],
	["std", "application/vnd.sun.xml.draw.template"],
	["stf", "application/vnd.wt.stf"],
	["sti", "application/vnd.sun.xml.impress.template"],
	["stk", "application/hyperstudio"],
	["stl", "model/stl"],
	["stpx", "model/step+xml"],
	["stpxz", "model/step-xml+zip"],
	["stpz", "model/step+zip"],
	["str", "application/vnd.pg.format"],
	["stw", "application/vnd.sun.xml.writer.template"],
	["styl", "text/stylus"],
	["stylus", "text/stylus"],
	["sub", "text/vnd.dvb.subtitle"],
	["sus", "application/vnd.sus-calendar"],
	["susp", "application/vnd.sus-calendar"],
	["sv4cpio", "application/x-sv4cpio"],
	["sv4crc", "application/x-sv4crc"],
	["svc", "application/vnd.dvb.service"],
	["svd", "application/vnd.svd"],
	["svg", "image/svg+xml"],
	["svgz", "image/svg+xml"],
	["swa", "application/x-director"],
	["swf", "application/x-shockwave-flash"],
	["swi", "application/vnd.aristanetworks.swi"],
	["swidtag", "application/swid+xml"],
	["sxc", "application/vnd.sun.xml.calc"],
	["sxd", "application/vnd.sun.xml.draw"],
	["sxg", "application/vnd.sun.xml.writer.global"],
	["sxi", "application/vnd.sun.xml.impress"],
	["sxm", "application/vnd.sun.xml.math"],
	["sxw", "application/vnd.sun.xml.writer"],
	["t", "text/troff"],
	["t3", "application/x-t3vm-image"],
	["t38", "image/t38"],
	["taglet", "application/vnd.mynfc"],
	["tao", "application/vnd.tao.intent-module-archive"],
	["tap", "image/vnd.tencent.tap"],
	["tar", "application/x-tar"],
	["tcap", "application/vnd.3gpp2.tcap"],
	["tcl", "application/x-tcl"],
	["td", "application/urc-targetdesc+xml"],
	["teacher", "application/vnd.smart.teacher"],
	["tei", "application/tei+xml"],
	["teicorpus", "application/tei+xml"],
	["tex", "application/x-tex"],
	["texi", "application/x-texinfo"],
	["texinfo", "application/x-texinfo"],
	["text", "text/plain"],
	["tfi", "application/thraud+xml"],
	["tfm", "application/x-tex-tfm"],
	["tfx", "image/tiff-fx"],
	["tga", "image/x-tga"],
	["tgz", "application/x-tar"],
	["thmx", "application/vnd.ms-officetheme"],
	["tif", "image/tiff"],
	["tiff", "image/tiff"],
	["tk", "application/x-tcl"],
	["tmo", "application/vnd.tmobile-livetv"],
	["toml", "application/toml"],
	["torrent", "application/x-bittorrent"],
	["tpl", "application/vnd.groove-tool-template"],
	["tpt", "application/vnd.trid.tpt"],
	["tr", "text/troff"],
	["tra", "application/vnd.trueapp"],
	["trig", "application/trig"],
	["trm", "application/x-msterminal"],
	["ts", "video/mp2t"],
	["tsd", "application/timestamped-data"],
	["tsv", "text/tab-separated-values"],
	["ttc", "font/collection"],
	["ttf", "font/ttf"],
	["ttl", "text/turtle"],
	["ttml", "application/ttml+xml"],
	["twd", "application/vnd.simtech-mindmapper"],
	["twds", "application/vnd.simtech-mindmapper"],
	["txd", "application/vnd.genomatix.tuxedo"],
	["txf", "application/vnd.mobius.txf"],
	["txt", "text/plain"],
	["u8dsn", "message/global-delivery-status"],
	["u8hdr", "message/global-headers"],
	["u8mdn", "message/global-disposition-notification"],
	["u8msg", "message/global"],
	["u32", "application/x-authorware-bin"],
	["ubj", "application/ubjson"],
	["udeb", "application/x-debian-package"],
	["ufd", "application/vnd.ufdl"],
	["ufdl", "application/vnd.ufdl"],
	["ulx", "application/x-glulx"],
	["umj", "application/vnd.umajin"],
	["unityweb", "application/vnd.unity"],
	["uoml", "application/vnd.uoml+xml"],
	["uri", "text/uri-list"],
	["uris", "text/uri-list"],
	["urls", "text/uri-list"],
	["usdz", "model/vnd.usdz+zip"],
	["ustar", "application/x-ustar"],
	["utz", "application/vnd.uiq.theme"],
	["uu", "text/x-uuencode"],
	["uva", "audio/vnd.dece.audio"],
	["uvd", "application/vnd.dece.data"],
	["uvf", "application/vnd.dece.data"],
	["uvg", "image/vnd.dece.graphic"],
	["uvh", "video/vnd.dece.hd"],
	["uvi", "image/vnd.dece.graphic"],
	["uvm", "video/vnd.dece.mobile"],
	["uvp", "video/vnd.dece.pd"],
	["uvs", "video/vnd.dece.sd"],
	["uvt", "application/vnd.dece.ttml+xml"],
	["uvu", "video/vnd.uvvu.mp4"],
	["uvv", "video/vnd.dece.video"],
	["uvva", "audio/vnd.dece.audio"],
	["uvvd", "application/vnd.dece.data"],
	["uvvf", "application/vnd.dece.data"],
	["uvvg", "image/vnd.dece.graphic"],
	["uvvh", "video/vnd.dece.hd"],
	["uvvi", "image/vnd.dece.graphic"],
	["uvvm", "video/vnd.dece.mobile"],
	["uvvp", "video/vnd.dece.pd"],
	["uvvs", "video/vnd.dece.sd"],
	["uvvt", "application/vnd.dece.ttml+xml"],
	["uvvu", "video/vnd.uvvu.mp4"],
	["uvvv", "video/vnd.dece.video"],
	["uvvx", "application/vnd.dece.unspecified"],
	["uvvz", "application/vnd.dece.zip"],
	["uvx", "application/vnd.dece.unspecified"],
	["uvz", "application/vnd.dece.zip"],
	["vbox", "application/x-virtualbox-vbox"],
	["vbox-extpack", "application/x-virtualbox-vbox-extpack"],
	["vcard", "text/vcard"],
	["vcd", "application/x-cdlink"],
	["vcf", "text/x-vcard"],
	["vcg", "application/vnd.groove-vcard"],
	["vcs", "text/x-vcalendar"],
	["vcx", "application/vnd.vcx"],
	["vdi", "application/x-virtualbox-vdi"],
	["vds", "model/vnd.sap.vds"],
	["vhd", "application/x-virtualbox-vhd"],
	["vis", "application/vnd.visionary"],
	["viv", "video/vnd.vivo"],
	["vlc", "application/videolan"],
	["vmdk", "application/x-virtualbox-vmdk"],
	["vob", "video/x-ms-vob"],
	["vor", "application/vnd.stardivision.writer"],
	["vox", "application/x-authorware-bin"],
	["vrml", "model/vrml"],
	["vsd", "application/vnd.visio"],
	["vsf", "application/vnd.vsf"],
	["vss", "application/vnd.visio"],
	["vst", "application/vnd.visio"],
	["vsw", "application/vnd.visio"],
	["vtf", "image/vnd.valve.source.texture"],
	["vtt", "text/vtt"],
	["vtu", "model/vnd.vtu"],
	["vxml", "application/voicexml+xml"],
	["w3d", "application/x-director"],
	["wad", "application/x-doom"],
	["wadl", "application/vnd.sun.wadl+xml"],
	["war", "application/java-archive"],
	["wasm", "application/wasm"],
	["wav", "audio/x-wav"],
	["wax", "audio/x-ms-wax"],
	["wbmp", "image/vnd.wap.wbmp"],
	["wbs", "application/vnd.criticaltools.wbs+xml"],
	["wbxml", "application/wbxml"],
	["wcm", "application/vnd.ms-works"],
	["wdb", "application/vnd.ms-works"],
	["wdp", "image/vnd.ms-photo"],
	["weba", "audio/webm"],
	["webapp", "application/x-web-app-manifest+json"],
	["webm", "video/webm"],
	["webmanifest", "application/manifest+json"],
	["webp", "image/webp"],
	["wg", "application/vnd.pmi.widget"],
	["wgt", "application/widget"],
	["wks", "application/vnd.ms-works"],
	["wm", "video/x-ms-wm"],
	["wma", "audio/x-ms-wma"],
	["wmd", "application/x-ms-wmd"],
	["wmf", "image/wmf"],
	["wml", "text/vnd.wap.wml"],
	["wmlc", "application/wmlc"],
	["wmls", "text/vnd.wap.wmlscript"],
	["wmlsc", "application/vnd.wap.wmlscriptc"],
	["wmv", "video/x-ms-wmv"],
	["wmx", "video/x-ms-wmx"],
	["wmz", "application/x-msmetafile"],
	["woff", "font/woff"],
	["woff2", "font/woff2"],
	["word", "application/msword"],
	["wpd", "application/vnd.wordperfect"],
	["wpl", "application/vnd.ms-wpl"],
	["wps", "application/vnd.ms-works"],
	["wqd", "application/vnd.wqd"],
	["wri", "application/x-mswrite"],
	["wrl", "model/vrml"],
	["wsc", "message/vnd.wfa.wsc"],
	["wsdl", "application/wsdl+xml"],
	["wspolicy", "application/wspolicy+xml"],
	["wtb", "application/vnd.webturbo"],
	["wvx", "video/x-ms-wvx"],
	["x3d", "model/x3d+xml"],
	["x3db", "model/x3d+fastinfoset"],
	["x3dbz", "model/x3d+binary"],
	["x3dv", "model/x3d-vrml"],
	["x3dvz", "model/x3d+vrml"],
	["x3dz", "model/x3d+xml"],
	["x32", "application/x-authorware-bin"],
	["x_b", "model/vnd.parasolid.transmit.binary"],
	["x_t", "model/vnd.parasolid.transmit.text"],
	["xaml", "application/xaml+xml"],
	["xap", "application/x-silverlight-app"],
	["xar", "application/vnd.xara"],
	["xav", "application/xcap-att+xml"],
	["xbap", "application/x-ms-xbap"],
	["xbd", "application/vnd.fujixerox.docuworks.binder"],
	["xbm", "image/x-xbitmap"],
	["xca", "application/xcap-caps+xml"],
	["xcs", "application/calendar+xml"],
	["xdf", "application/xcap-diff+xml"],
	["xdm", "application/vnd.syncml.dm+xml"],
	["xdp", "application/vnd.adobe.xdp+xml"],
	["xdssc", "application/dssc+xml"],
	["xdw", "application/vnd.fujixerox.docuworks"],
	["xel", "application/xcap-el+xml"],
	["xenc", "application/xenc+xml"],
	["xer", "application/patch-ops-error+xml"],
	["xfdf", "application/vnd.adobe.xfdf"],
	["xfdl", "application/vnd.xfdl"],
	["xht", "application/xhtml+xml"],
	["xhtml", "application/xhtml+xml"],
	["xhvml", "application/xv+xml"],
	["xif", "image/vnd.xiff"],
	["xl", "application/excel"],
	["xla", "application/vnd.ms-excel"],
	["xlam", "application/vnd.ms-excel.addin.macroEnabled.12"],
	["xlc", "application/vnd.ms-excel"],
	["xlf", "application/xliff+xml"],
	["xlm", "application/vnd.ms-excel"],
	["xls", "application/vnd.ms-excel"],
	["xlsb", "application/vnd.ms-excel.sheet.binary.macroEnabled.12"],
	["xlsm", "application/vnd.ms-excel.sheet.macroEnabled.12"],
	["xlsx", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],
	["xlt", "application/vnd.ms-excel"],
	["xltm", "application/vnd.ms-excel.template.macroEnabled.12"],
	["xltx", "application/vnd.openxmlformats-officedocument.spreadsheetml.template"],
	["xlw", "application/vnd.ms-excel"],
	["xm", "audio/xm"],
	["xml", "application/xml"],
	["xns", "application/xcap-ns+xml"],
	["xo", "application/vnd.olpc-sugar"],
	["xop", "application/xop+xml"],
	["xpi", "application/x-xpinstall"],
	["xpl", "application/xproc+xml"],
	["xpm", "image/x-xpixmap"],
	["xpr", "application/vnd.is-xpr"],
	["xps", "application/vnd.ms-xpsdocument"],
	["xpw", "application/vnd.intercon.formnet"],
	["xpx", "application/vnd.intercon.formnet"],
	["xsd", "application/xml"],
	["xsl", "application/xml"],
	["xslt", "application/xslt+xml"],
	["xsm", "application/vnd.syncml+xml"],
	["xspf", "application/xspf+xml"],
	["xul", "application/vnd.mozilla.xul+xml"],
	["xvm", "application/xv+xml"],
	["xvml", "application/xv+xml"],
	["xwd", "image/x-xwindowdump"],
	["xyz", "chemical/x-xyz"],
	["xz", "application/x-xz"],
	["yaml", "text/yaml"],
	["yang", "application/yang"],
	["yin", "application/yin+xml"],
	["yml", "text/yaml"],
	["ymp", "text/x-suse-ymp"],
	["z", "application/x-compress"],
	["z1", "application/x-zmachine"],
	["z2", "application/x-zmachine"],
	["z3", "application/x-zmachine"],
	["z4", "application/x-zmachine"],
	["z5", "application/x-zmachine"],
	["z6", "application/x-zmachine"],
	["z7", "application/x-zmachine"],
	["z8", "application/x-zmachine"],
	["zaz", "application/vnd.zzazz.deck+xml"],
	["zip", "application/zip"],
	["zir", "application/vnd.zul"],
	["zirz", "application/vnd.zul"],
	["zmm", "application/vnd.handheld-entertainment+xml"],
	["zsh", "text/x-scriptzsh"]
]);
function hf(e, t) {
	var n = gf(e);
	if (typeof n.path != "string") {
		var r = e.webkitRelativePath;
		Object.defineProperty(n, "path", {
			value: typeof t == "string" ? t : typeof r == "string" && r.length > 0 ? r : e.name,
			writable: !1,
			configurable: !1,
			enumerable: !0
		});
	}
	return n;
}
function gf(e) {
	var t = e.name;
	if (t && t.lastIndexOf(".") !== -1 && !e.type) {
		var n = t.split(".").pop().toLowerCase(), r = mf.get(n);
		r && Object.defineProperty(e, "type", {
			value: r,
			writable: !1,
			configurable: !1,
			enumerable: !0
		});
	}
	return e;
}
//#endregion
//#region node_modules/.pnpm/file-selector@0.10.0/node_modules/file-selector/dist/es5/file-selector.js
var _f = [".DS_Store", "Thumbs.db"];
function vf(e) {
	return M(this, void 0, void 0, function() {
		return ye(this, function(t) {
			return xf(e) && yf(e.dataTransfer) ? [2, wf(e.dataTransfer, e.type)] : bf(e) ? [2, Sf(e)] : Array.isArray(e) && e.every(function(e) {
				return "getFile" in e && typeof e.getFile == "function";
			}) ? [2, Cf(e)] : [2, []];
		});
	});
}
function yf(e) {
	return xf(e);
}
function bf(e) {
	return xf(e) && xf(e.target);
}
function xf(e) {
	return typeof e == "object" && !!e;
}
function Sf(e) {
	return Ef(e.target.files).map(function(e) {
		return hf(e);
	});
}
function Cf(e) {
	return M(this, void 0, void 0, function() {
		var t;
		return ye(this, function(n) {
			switch (n.label) {
				case 0: return [4, Promise.all(e.map(function(e) {
					return e.getFile();
				}))];
				case 1: return t = n.sent(), [2, t.map(function(e) {
					return hf(e);
				})];
			}
		});
	});
}
function wf(e, t) {
	return M(this, void 0, void 0, function() {
		var n, r;
		return ye(this, function(i) {
			switch (i.label) {
				case 0: return e.items ? (n = Ef(e.items).filter(function(e) {
					return e.kind === "file";
				}), t === "drop" ? [4, Promise.all(n.map(Df))] : [2, n]) : [3, 2];
				case 1: return r = i.sent(), [2, Tf(Of(r))];
				case 2: return [2, Tf(Ef(e.files).map(function(e) {
					return hf(e);
				}))];
			}
		});
	});
}
function Tf(e) {
	return e.filter(function(e) {
		return _f.indexOf(e.name) === -1;
	});
}
function Ef(e) {
	if (e === null) return [];
	for (var t = [], n = 0; n < e.length; n++) {
		var r = e[n];
		t.push(r);
	}
	return t;
}
function Df(e) {
	if (typeof e.webkitGetAsEntry != "function") return kf(e);
	var t = e.webkitGetAsEntry();
	return t && t.isDirectory ? jf(t) : kf(e);
}
function Of(e) {
	return e.reduce(function(e, t) {
		return re(re([], ue(e), !1), ue(Array.isArray(t) ? Of(t) : [t]), !1);
	}, []);
}
function kf(e) {
	var t = e.getAsFile();
	if (!t) return Promise.reject(`${e} is not a File`);
	var n = hf(t);
	return Promise.resolve(n);
}
function Af(e) {
	return M(this, void 0, void 0, function() {
		return ye(this, function(t) {
			return [2, e.isDirectory ? jf(e) : Mf(e)];
		});
	});
}
function jf(e) {
	var t = e.createReader();
	return new Promise(function(e, n) {
		var r = [];
		function i() {
			var a = this;
			t.readEntries(function(t) {
				return M(a, void 0, void 0, function() {
					var a, o, s;
					return ye(this, function(c) {
						switch (c.label) {
							case 0:
								if (t.length) return [3, 5];
								c.label = 1;
							case 1: return c.trys.push([
								1,
								3,
								,
								4
							]), [4, Promise.all(r)];
							case 2: return a = c.sent(), e(a), [3, 4];
							case 3: return o = c.sent(), n(o), [3, 4];
							case 4: return [3, 6];
							case 5: s = Promise.all(t.map(Af)), r.push(s), i(), c.label = 6;
							case 6: return [2];
						}
					});
				});
			}, function(e) {
				n(e);
			});
		}
		i();
	});
}
function Mf(e) {
	return M(this, void 0, void 0, function() {
		return ye(this, function(t) {
			return [2, new Promise(function(t, n) {
				e.file(function(n) {
					t(hf(n, e.fullPath));
				}, function(e) {
					n(e);
				});
			})];
		});
	});
}
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Dropzone/DragError.js
function Nf({ message: e }) {
	return /* @__PURE__ */ I.createElement("div", { className: "pgn__dropzone-error-wrapper" }, e);
}
Nf.propTypes = { message: R.default.oneOfType([R.default.string, R.default.element]).isRequired };
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Dropzone/GenericError.js
function Pf({ errorMsgs: e, ...t }) {
	return /* @__PURE__ */ I.createElement(Fr, {
		variant: "danger",
		icon: qr,
		className: "pgn__dropzone-generic-alert",
		...t
	}, e.map((e) => /* @__PURE__ */ I.createElement("span", { key: e }, e)));
}
Pf.propTypes = { errorMsgs: R.default.arrayOf(R.default.string).isRequired };
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Dropzone/UploadProgress.js
function Ff({ percent: e, variant: t, name: n, onCancel: r }) {
	return t === "spinner" ? /* @__PURE__ */ I.createElement(wa, {
		animation: "border",
		"aria-live": "polite",
		screenReaderText: `Uploading ${n}, ${e}% done.`,
		"data-testid": "upload-spinner"
	}) : /* @__PURE__ */ I.createElement("div", { className: "w-50" }, /* @__PURE__ */ I.createElement("p", { className: "text-muted" }, /* @__PURE__ */ I.createElement(w, {
		id: "pgn.Dropzone.UploadProgress.uploadLabel",
		defaultMessage: "Uploading {filename}.",
		description: "A text that is shown near a progress bar during file upload in Dropzone component.",
		values: { filename: n }
	})), /* @__PURE__ */ I.createElement("div", { className: "d-flex justify-content-between align-items-center w-100" }, /* @__PURE__ */ I.createElement(ku, {
		now: e,
		label: `${e}%`,
		variant: "success",
		className: "flex-grow-1",
		"data-testid": "upload-progress-bar"
	}), /* @__PURE__ */ I.createElement(O, {
		variant: "tertiary",
		className: "ml-3",
		onClick: r
	}, /* @__PURE__ */ I.createElement(w, {
		id: "pgn.Dropzone.UploadProgress.cancelLabel",
		defaultMessage: "Cancel",
		description: "Label of a cancel button that is shown during file upload in Dropzone component."
	}))));
}
Ff.propTypes = {
	variant: R.default.oneOf(["spinner", "bar"]).isRequired,
	percent: R.default.number.isRequired,
	name: R.default.string.isRequired,
	onCancel: R.default.func.isRequired
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Dropzone/utils.js
var If = (e) => Object.keys(e).length > 1 ? !0 : Object.keys(e).length === 0 ? !1 : Object.values(e)[0].length > 1, Lf = (e) => Object.entries(e).reduce((e, t) => {
	let [n, r] = t, i;
	return i = r.length > 0 ? `${r.join(", ").replaceAll(".", "").toUpperCase()}, ` : n.endsWith("/*") ? `${n.slice(0, -2)}, ` : `${n.split("/").pop().toUpperCase()}, `, e + i;
}, "").slice(0, -2), Rf = (e) => {
	if (e === 0) return "0 Bytes";
	let t = 1024, n = [
		"Bytes",
		"KB",
		"MB",
		"GB",
		"TB",
		"PB",
		"EB",
		"ZB",
		"YB"
	], r = Math.floor(Math.log(e) / Math.log(t));
	return `${parseFloat((e / t ** r).toFixed(2))}${n[r]}`;
}, zf = T({
	uploadError: {
		id: "dropzone.Dropzone.uploadError",
		defaultMessage: "A problem occured while uploading your file. Please try again.",
		description: "A message shown in case file upload in Dropzone component results in an error."
	},
	multipleDragged: {
		id: "dropzone.Dropzone.multipleDraggedError",
		defaultMessage: "Only one upload permitted.",
		description: "A message shown when multiple files are dragged over Dropzone."
	},
	invalidSizeLess: {
		id: "dropzone.Dropzone.invalidSizeLessError",
		defaultMessage: "File must be larger than {size}.",
		description: "A message shown when a file with less than minimum allowed size is being uploaded in Dropzone."
	},
	invalidSizeMore: {
		id: "dropzone.Dropzone.invalidSizeMoreError",
		defaultMessage: "File must be less than {size}.",
		description: "A message shown when a file with more than maximum allowed size is being uploaded in Dropzone."
	},
	invalidType: {
		id: "dropzone.Dropzone.invalidType",
		defaultMessage: "The file type must be {count, plural, one {{typeString} file} other {one of {typeString} files}}.",
		description: "A message shown when a file with wrong MIME type is being uploaded."
	},
	unexpectedValidationError: {
		id: "dropzone.Dropzone.unexpectedValidationError",
		defaultMessage: "An unexpected problem occured during file validation. Please try again.",
		description: "A message shown in case file validation in Dropzone component for unknown reason."
	},
	fileSizeBetween: {
		id: "pgn.Dropzone.DefaultContent.fileSizeBetween",
		defaultMessage: "Between {sizeMin} and {sizeMax}",
		description: "A message shown when uploaded file's size must be in given range."
	},
	fileSizeMax: {
		id: "pgn.Dropzone.DefaultContent.fileSizeMax",
		defaultMessage: "Max {sizeMax}",
		description: "A message shown when uploaded file's size must be more than some value."
	},
	fileSizeMin: {
		id: "pgn.Dropzone.DefaultContent.fileSizeMin",
		defaultMessage: "Min {sizeMin}",
		description: "A message shown when uploaded file's size must be more than some value."
	},
	fileTypeRestriction: {
		id: "pgn.Dropzone.DefaultContent.fileTypeRestriction",
		defaultMessage: "Upload {count, plural, one {{firstPart} files} other {{firstPart} or {secondPart} files}}",
		description: "A message shown when uploaded file must be of certain type(s)."
	}
});
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Dropzone/DefaultContent.js
function Bf({ accept: e, minSize: t, maxSize: n }) {
	let r = E();
	return /* @__PURE__ */ I.createElement(I.Fragment, null, /* @__PURE__ */ I.createElement("div", { className: "pgn__dropzone__upload-icon-wrapper" }, /* @__PURE__ */ I.createElement(de, {
		src: Kr,
		className: "pgn__dropzone__upload-icon"
	})), /* @__PURE__ */ I.createElement("p", null, /* @__PURE__ */ I.createElement(w, {
		id: "pgn.Dropzone.DefaultContent.label",
		description: "A text that appears as a label for input of Dropzone component.",
		defaultMessage: "Drag and drop your file here or click to upload."
	})), [
		e,
		t,
		n
	].some((e) => e) && /* @__PURE__ */ I.createElement("p", { className: "pgn__dropzone__upload-restriction-message" }, (() => {
		let i, a;
		if (e) {
			let t = Lf(e), n = t.lastIndexOf(",");
			i = r.formatMessage(zf.fileTypeRestriction, {
				count: n === -1 ? 1 : 2,
				firstPart: n === -1 ? t : t.slice(0, n),
				secondPart: n !== -1 && t.slice(n + 1)
			});
		}
		return t && n && Number.isFinite(n) ? a = r.formatMessage(zf.fileSizeBetween, {
			sizeMin: Rf(t),
			sizeMax: Rf(n)
		}) : n && Number.isFinite(n) ? a = r.formatMessage(zf.fileSizeMax, { sizeMax: Rf(n) }) : t && (a = r.formatMessage(zf.fileSizeMin, { sizeMin: Rf(t) })), i && a ? `${i} (${a})` : i || a;
	})()));
}
Bf.propTypes = {
	accept: R.default.objectOf(R.default.arrayOf(R.default.string)),
	maxSize: R.default.number,
	minSize: R.default.number
}, Bf.defaultProps = {
	accept: void 0,
	maxSize: void 0,
	minSize: void 0
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Dropzone/index.js
function Vf({ className: e, accept: t, minSize: n, maxSize: r, validator: i, errorMessages: a, progressVariant: o, inputComponent: s, onProcessUpload: c, onUploadProgress: l, onUploadCancel: u, ...d }) {
	let [f, p] = (0, I.useState)(!1), [m, h] = (0, I.useState)([]), [g, _] = (0, I.useState)(0), [v, y] = (0, I.useState)(void 0), [b, x] = (0, I.useState)(void 0), S = E(), { uploadError: C, invalidSizeLess: w, invalidSizeMore: T, invalidType: D, multipleDragged: O } = a, k = async (e) => {
		m && h([]);
		let t = await vf(e);
		t && t.length > 1 && p(!0);
	}, A = () => {
		f && p(!1);
	}, j = (e) => {
		f ? p(!1) : h(e[0].errors.map((e) => {
			switch (e.code) {
				case vd.FileTooLarge: return T || S.formatMessage(zf.invalidSizeMore, { size: Rf(r) });
				case vd.FileTooSmall: return w || S.formatMessage(zf.invalidSizeLess, { size: Rf(n) });
				case vd.FileInvalidType: return D || S.formatMessage(zf.invalidType, {
					count: If(t) ? 2 : 1,
					typeString: Lf(t)
				});
				default: return S.formatMessage(zf.unexpectedValidationError);
			}
		}));
	}, ee = (e) => {
		let t = Math.round(e.loaded * 100 / e.total);
		_(t), l(t, e);
	}, M = (e) => {
		e.code !== "ERR_CANCELED" && (_(0), h([C || S.formatMessage(zf.uploadError)]));
	}, N = (e) => {
		let t = new AbortController();
		x(t), c({
			fileData: e,
			requestConfig: {
				onUploadProgress: ee,
				signal: t.signal
			},
			handleError: M
		});
	}, te = async (e) => {
		let t = e[0];
		if (i) {
			let e = await i(t);
			if (e) {
				h([e]);
				return;
			}
		}
		m && h([]);
		let n = new FormData();
		n.append("file", t), y(t.name), N(n);
	}, P = () => {
		b.abort(), _(0), u();
	}, { getRootProps: ne, getInputProps: re, isDragActive: ie, isDragReject: ae } = df({
		multiple: !1,
		maxFiles: 1,
		maxSize: r,
		minSize: n,
		onDragLeave: A,
		onDragEnter: k,
		onDropRejected: j,
		onDropAccepted: te,
		accept: t,
		disabled: g && g !== 100
	}), oe = () => f ? /* @__PURE__ */ I.createElement(Nf, { message: O || S.formatMessage(zf.multipleDragged) }) : m.length > 0 ? /* @__PURE__ */ I.createElement(I.Fragment, null, /* @__PURE__ */ I.createElement(Pf, { errorMsgs: m }), s || /* @__PURE__ */ I.createElement(Bf, {
		minSize: n,
		maxSize: r,
		accept: t
	})) : g && g !== 100 ? /* @__PURE__ */ I.createElement(Ff, {
		variant: o,
		percent: g,
		name: v,
		onCancel: P
	}) : s || /* @__PURE__ */ I.createElement(Bf, {
		minSize: n,
		maxSize: r,
		accept: t
	});
	return /* @__PURE__ */ I.createElement("div", {
		"data-testid": "dropzone-container",
		...ne({ className: (0, L.default)("pgn__dropzone", e, {
			"pgn__dropzone-validation-error": f || m.length > 0 || ae,
			"pgn__dropzone-active": ie && !ae
		}) }),
		...d
	}, /* @__PURE__ */ I.createElement("input", { ...re() }), /* @__PURE__ */ I.createElement("div", { className: "d-flex flex-column justify-content-around align-items-center w-100" }, oe()));
}
Vf.defaultProps = {
	className: void 0,
	accept: void 0,
	maxSize: Infinity,
	minSize: 0,
	onUploadProgress: () => {},
	onUploadCancel: () => {},
	errorMessages: {
		invalidType: void 0,
		invalidSizeLess: void 0,
		invalidSizeMore: void 0,
		multipleDragged: void 0,
		uploadError: void 0
	},
	progressVariant: "spinner",
	validator: void 0,
	inputComponent: void 0
}, Vf.propTypes = {
	className: R.default.string,
	accept: R.default.objectOf(R.default.arrayOf(R.default.string)),
	maxSize: R.default.number,
	minSize: R.default.number,
	onUploadProgress: R.default.func,
	onUploadCancel: R.default.func,
	onProcessUpload: R.default.func.isRequired,
	errorMessages: R.default.shape({
		invalidType: R.default.oneOfType([R.default.string, R.default.element]),
		invalidSizeLess: R.default.oneOfType([R.default.string, R.default.element]),
		invalidSizeMore: R.default.oneOfType([R.default.string, R.default.element]),
		multipleDragged: R.default.oneOfType([R.default.string, R.default.element]),
		uploadError: R.default.oneOfType([R.default.string, R.default.element])
	}),
	progressVariant: R.default.oneOf(["spinner", "bar"]),
	validator: R.default.func,
	inputComponent: R.default.oneOfType([R.default.elementType, R.default.node])
};
//#endregion
//#region node_modules/.pnpm/react-colorful@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-colorful/dist/index.mjs
function Hf() {
	return (Hf = Object.assign || function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}).apply(this, arguments);
}
function Uf(e, t) {
	if (e == null) return {};
	var n, r, i = {}, a = Object.keys(e);
	for (r = 0; r < a.length; r++) t.indexOf(n = a[r]) >= 0 || (i[n] = e[n]);
	return i;
}
function Wf(e) {
	var t = (0, I.useRef)(e), n = (0, I.useRef)(function(e) {
		t.current && t.current(e);
	});
	return t.current = e, n.current;
}
var Gf = function(e, t, n) {
	return t === void 0 && (t = 0), n === void 0 && (n = 1), e > n ? n : e < t ? t : e;
}, Kf = function(e) {
	return "touches" in e;
}, qf = function(e) {
	return e && e.ownerDocument.defaultView || self;
}, Jf = function(e, t, n) {
	var r = e.getBoundingClientRect(), i = Kf(t) ? function(e, t) {
		for (var n = 0; n < e.length; n++) if (e[n].identifier === t) return e[n];
		return e[0];
	}(t.touches, n) : t;
	return {
		left: Gf((i.pageX - (r.left + qf(e).pageXOffset)) / r.width),
		top: Gf((i.pageY - (r.top + qf(e).pageYOffset)) / r.height)
	};
}, Yf = function(e) {
	!Kf(e) && e.preventDefault();
}, Xf = I.memo(function(e) {
	var t = e.onMove, n = e.onKey, r = Uf(e, ["onMove", "onKey"]), i = (0, I.useRef)(null), a = Wf(t), o = Wf(n), s = (0, I.useRef)(null), c = (0, I.useRef)(!1), l = (0, I.useMemo)(function() {
		var e = function(e) {
			Yf(e), (Kf(e) ? e.touches.length > 0 : e.buttons > 0) && i.current ? a(Jf(i.current, e, s.current)) : n(!1);
		}, t = function() {
			return n(!1);
		};
		function n(n) {
			var r = c.current, a = qf(i.current), o = n ? a.addEventListener : a.removeEventListener;
			o(r ? "touchmove" : "mousemove", e), o(r ? "touchend" : "mouseup", t);
		}
		return [
			function(e) {
				var t = e.nativeEvent, r = i.current;
				if (r && (Yf(t), !function(e, t) {
					return t && !Kf(e);
				}(t, c.current) && r)) {
					if (Kf(t)) {
						c.current = !0;
						var o = t.changedTouches || [];
						o.length && (s.current = o[0].identifier);
					}
					r.focus(), a(Jf(r, t, s.current)), n(!0);
				}
			},
			function(e) {
				var t = e.which || e.keyCode;
				t < 37 || t > 40 || (e.preventDefault(), o({
					left: t === 39 ? .05 : t === 37 ? -.05 : 0,
					top: t === 40 ? .05 : t === 38 ? -.05 : 0
				}));
			},
			n
		];
	}, [o, a]), u = l[0], d = l[1], f = l[2];
	return (0, I.useEffect)(function() {
		return f;
	}, [f]), I.createElement("div", Hf({}, r, {
		onTouchStart: u,
		onMouseDown: u,
		className: "react-colorful__interactive",
		ref: i,
		onKeyDown: d,
		tabIndex: 0,
		role: "slider"
	}));
}), Zf = function(e) {
	return e.filter(Boolean).join(" ");
}, Qf = function(e) {
	var t = e.color, n = e.left, r = e.top, i = r === void 0 ? .5 : r, a = Zf(["react-colorful__pointer", e.className]);
	return I.createElement("div", {
		className: a,
		style: {
			top: 100 * i + "%",
			left: 100 * n + "%"
		}
	}, I.createElement("div", {
		className: "react-colorful__pointer-fill",
		style: { backgroundColor: t }
	}));
}, $f = function(e, t, n) {
	return t === void 0 && (t = 0), n === void 0 && (n = 10 ** t), Math.round(n * e) / n;
};
360 / (2 * Math.PI);
var ep = function(e) {
	return cp(tp(e));
}, tp = function(e) {
	return e[0] === "#" && (e = e.substring(1)), e.length < 6 ? {
		r: parseInt(e[0] + e[0], 16),
		g: parseInt(e[1] + e[1], 16),
		b: parseInt(e[2] + e[2], 16),
		a: e.length === 4 ? $f(parseInt(e[3] + e[3], 16) / 255, 2) : 1
	} : {
		r: parseInt(e.substring(0, 2), 16),
		g: parseInt(e.substring(2, 4), 16),
		b: parseInt(e.substring(4, 6), 16),
		a: e.length === 8 ? $f(parseInt(e.substring(6, 8), 16) / 255, 2) : 1
	};
}, np = function(e) {
	return sp(ap(e));
}, rp = function(e) {
	var t = e.s, n = e.v, r = e.a, i = (200 - t) * n / 100;
	return {
		h: $f(e.h),
		s: $f(i > 0 && i < 200 ? t * n / 100 / (i <= 100 ? i : 200 - i) * 100 : 0),
		l: $f(i / 2),
		a: $f(r, 2)
	};
}, ip = function(e) {
	var t = rp(e);
	return "hsl(" + t.h + ", " + t.s + "%, " + t.l + "%)";
}, ap = function(e) {
	var t = e.h, n = e.s, r = e.v, i = e.a;
	t = t / 360 * 6, n /= 100, r /= 100;
	var a = Math.floor(t), o = r * (1 - n), s = r * (1 - (t - a) * n), c = r * (1 - (1 - t + a) * n), l = a % 6;
	return {
		r: $f(255 * [
			r,
			s,
			o,
			o,
			c,
			r
		][l]),
		g: $f(255 * [
			c,
			r,
			r,
			s,
			o,
			o
		][l]),
		b: $f(255 * [
			o,
			o,
			c,
			r,
			r,
			s
		][l]),
		a: $f(i, 2)
	};
}, op = function(e) {
	var t = e.toString(16);
	return t.length < 2 ? "0" + t : t;
}, sp = function(e) {
	var t = e.r, n = e.g, r = e.b, i = e.a, a = i < 1 ? op($f(255 * i)) : "";
	return "#" + op(t) + op(n) + op(r) + a;
}, cp = function(e) {
	var t = e.r, n = e.g, r = e.b, i = e.a, a = Math.max(t, n, r), o = a - Math.min(t, n, r), s = o ? a === t ? (n - r) / o : a === n ? 2 + (r - t) / o : 4 + (t - n) / o : 0;
	return {
		h: $f(60 * (s < 0 ? s + 6 : s)),
		s: $f(a ? o / a * 100 : 0),
		v: $f(a / 255 * 100),
		a: i
	};
}, lp = I.memo(function(e) {
	var t = e.hue, n = e.onChange, r = Zf(["react-colorful__hue", e.className]);
	return I.createElement("div", { className: r }, I.createElement(Xf, {
		onMove: function(e) {
			n({ h: 360 * e.left });
		},
		onKey: function(e) {
			n({ h: Gf(t + 360 * e.left, 0, 360) });
		},
		"aria-label": "Hue",
		"aria-valuenow": $f(t),
		"aria-valuemax": "360",
		"aria-valuemin": "0"
	}, I.createElement(Qf, {
		className: "react-colorful__hue-pointer",
		left: t / 360,
		color: ip({
			h: t,
			s: 100,
			v: 100,
			a: 1
		})
	})));
}), up = I.memo(function(e) {
	var t = e.hsva, n = e.onChange, r = { backgroundColor: ip({
		h: t.h,
		s: 100,
		v: 100,
		a: 1
	}) };
	return I.createElement("div", {
		className: "react-colorful__saturation",
		style: r
	}, I.createElement(Xf, {
		onMove: function(e) {
			n({
				s: 100 * e.left,
				v: 100 - 100 * e.top
			});
		},
		onKey: function(e) {
			n({
				s: Gf(t.s + 100 * e.left, 0, 100),
				v: Gf(t.v - 100 * e.top, 0, 100)
			});
		},
		"aria-label": "Color",
		"aria-valuetext": "Saturation " + $f(t.s) + "%, Brightness " + $f(t.v) + "%"
	}, I.createElement(Qf, {
		className: "react-colorful__saturation-pointer",
		top: 1 - t.v / 100,
		left: t.s / 100,
		color: ip(t)
	})));
}), dp = function(e, t) {
	if (e === t) return !0;
	for (var n in e) if (e[n] !== t[n]) return !1;
	return !0;
}, fp = function(e, t) {
	return e.toLowerCase() === t.toLowerCase() || dp(tp(e), tp(t));
};
function pp(e, t, n) {
	var r = Wf(n), i = (0, I.useState)(function() {
		return e.toHsva(t);
	}), a = i[0], o = i[1], s = (0, I.useRef)({
		color: t,
		hsva: a
	});
	return (0, I.useEffect)(function() {
		if (!e.equal(t, s.current.color)) {
			var n = e.toHsva(t);
			s.current = {
				hsva: n,
				color: t
			}, o(n);
		}
	}, [t, e]), (0, I.useEffect)(function() {
		var t;
		dp(a, s.current.hsva) || e.equal(t = e.fromHsva(a), s.current.color) || (s.current = {
			hsva: a,
			color: t
		}, r(t));
	}, [
		a,
		e,
		r
	]), [a, (0, I.useCallback)(function(e) {
		o(function(t) {
			return Object.assign({}, t, e);
		});
	}, [])];
}
var mp, hp = typeof window < "u" ? I.useLayoutEffect : I.useEffect, gp = function() {
	return mp || (typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : void 0);
}, _p = /* @__PURE__ */ new Map(), vp = function(e) {
	hp(function() {
		var t = e.current ? e.current.ownerDocument : document;
		if (t !== void 0 && !_p.has(t)) {
			var n = t.createElement("style");
			n.innerHTML = ".react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:\"\";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill-opacity=\".05\"><path d=\"M8 0h8v8H8zM0 8h8v8H0z\"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}", _p.set(t, n);
			var r = gp();
			r && n.setAttribute("nonce", r), t.head.appendChild(n);
		}
	}, []);
}, yp = function(e) {
	var t = e.className, n = e.colorModel, r = e.color, i = r === void 0 ? n.defaultColor : r, a = e.onChange, o = Uf(e, [
		"className",
		"colorModel",
		"color",
		"onChange"
	]), s = (0, I.useRef)(null);
	vp(s);
	var c = pp(n, i, a), l = c[0], u = c[1], d = Zf(["react-colorful", t]);
	return I.createElement("div", Hf({}, o, {
		ref: s,
		className: d
	}), I.createElement(up, {
		hsva: l,
		onChange: u
	}), I.createElement(lp, {
		hue: l.h,
		onChange: u,
		className: "react-colorful__last-control"
	}));
}, bp = {
	defaultColor: "000",
	toHsva: ep,
	fromHsva: function(e) {
		return np({
			h: e.h,
			s: e.s,
			v: e.v,
			a: 1
		});
	},
	equal: fp
}, xp = function(e) {
	return I.createElement(yp, Hf({}, e, { colorModel: bp }));
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/ColorPicker/index.js
function Sp({ color: e, setColor: t, className: n, size: r }) {
	let [i, a, o] = eu(!1), [s, c] = I.useState(null), l = (e) => /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(e), u = (e) => e.startsWith("#") ? e.slice(0, 7) : `#${e}`.slice(0, 7), [d, f] = I.useState(() => e === "" || l(u(e))), [p, m] = I.useState(() => e === "" ? "" : u(e)), [h, g] = I.useState(() => {
		let t = u(e);
		return l(t) ? t : "#fff";
	}), _ = (e) => {
		if (e === "") {
			f(!0), t(""), m(""), g("#fff");
			return;
		}
		let n = u(e);
		if (l(n)) {
			f(!0), t(n), m(n), g(n);
			return;
		}
		f(!1), m(n), t(n);
	};
	return /* @__PURE__ */ I.createElement(I.Fragment, null, /* @__PURE__ */ I.createElement("span", { className: "d-flex" }, /* @__PURE__ */ I.createElement(ne, {
		placement: "top",
		overlay: /* @__PURE__ */ I.createElement(he, { id: "color-picker-tooltip" }, "Color picker")
	}, /* @__PURE__ */ I.createElement(O, {
		ref: c,
		className: (0, L.default)(n, "pgn__color-picker", `pgn__color-picker-${r}`),
		style: { ...e && d ? { background: `${e}` } : {} },
		onClick: a
	}))), /* @__PURE__ */ I.createElement(pu, {
		positionRef: s,
		isOpen: i,
		style: { background: "black" },
		onClose: o
	}, /* @__PURE__ */ I.createElement("div", {
		className: "pgn__color-modal rounded shadow",
		style: { textAlign: "start" }
	}, /* @__PURE__ */ I.createElement(xp, {
		color: h,
		onChange: _
	}), /* @__PURE__ */ I.createElement(H.Group, {
		className: "pgn__hex-form",
		size: "sm"
	}, /* @__PURE__ */ I.createElement("div", null, /* @__PURE__ */ I.createElement(H.Label, { className: "pgn__hex-label" }, "Hex"), /* @__PURE__ */ I.createElement(H.Control, {
		className: "pgn__hex-field",
		isInvalid: !d,
		value: p,
		onChange: (e) => _(e.target.value),
		"data-testid": "hex-input",
		spellCheck: "false"
	})), !d && /* @__PURE__ */ I.createElement(H.Control.Feedback, {
		className: "pgn__color-error",
		type: "invalid"
	}, "Colors must be in hexadecimal format.")))));
}
Sp.defaultProps = {
	color: "",
	className: void 0,
	size: "md"
}, Sp.propTypes = {
	color: R.default.string,
	setColor: R.default.func.isRequired,
	className: R.default.string,
	size: R.default.oneOf(["sm", "md"])
};
//#endregion
//#region src/lib/context.ts
var Cp = (0, I.createContext)(null), wp = () => (0, I.useContext)(Cp), Tp = function(e) {
	return Ep(e) && !Dp(e);
};
function Ep(e) {
	return !!e && typeof e == "object";
}
function Dp(e) {
	var t = Object.prototype.toString.call(e);
	return t === "[object RegExp]" || t === "[object Date]" || kp(e);
}
var Op = typeof Symbol == "function" && Symbol.for ? Symbol.for("react.element") : 60103;
function kp(e) {
	return e.$$typeof === Op;
}
function Ap(e) {
	return Array.isArray(e) ? [] : {};
}
function jp(e, t) {
	return t.clone !== !1 && t.isMergeableObject(e) ? Pp(Ap(e), e, t) : e;
}
function Mp(e, t, n) {
	return e.concat(t).map(function(e) {
		return jp(e, n);
	});
}
function Np(e, t, n) {
	var r = {};
	return n.isMergeableObject(e) && Object.keys(e).forEach(function(t) {
		r[t] = jp(e[t], n);
	}), Object.keys(t).forEach(function(i) {
		!n.isMergeableObject(t[i]) || !e[i] ? r[i] = jp(t[i], n) : r[i] = Pp(e[i], t[i], n);
	}), r;
}
function Pp(e, t, n) {
	n ||= {}, n.arrayMerge = n.arrayMerge || Mp, n.isMergeableObject = n.isMergeableObject || Tp;
	var r = Array.isArray(t);
	return r === Array.isArray(e) ? r ? n.arrayMerge(e, t, n) : Np(e, t, n) : jp(t, n);
}
Pp.all = function(e, t) {
	if (!Array.isArray(e)) throw Error("first argument should be an array");
	return e.reduce(function(e, n) {
		return Pp(e, n, t);
	}, {});
};
var Fp = Pp, Ip = typeof globalThis == "object" && globalThis && globalThis.Object === Object && globalThis, Lp = typeof self == "object" && self && self.Object === Object && self, Rp = Ip || Lp || Function("return this")(), zp = Rp.Symbol, Bp = Object.prototype, Vp = Bp.hasOwnProperty, Hp = Bp.toString, Up = zp ? zp.toStringTag : void 0;
function Wp(e) {
	var t = Vp.call(e, Up), n = e[Up];
	try {
		e[Up] = void 0;
		var r = !0;
	} catch {}
	var i = Hp.call(e);
	return r && (t ? e[Up] = n : delete e[Up]), i;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_objectToString.js
var Gp = Object.prototype.toString;
function Kp(e) {
	return Gp.call(e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseGetTag.js
var qp = "[object Null]", Jp = "[object Undefined]", Yp = zp ? zp.toStringTag : void 0;
function Xp(e) {
	return e == null ? e === void 0 ? Jp : qp : Yp && Yp in Object(e) ? Wp(e) : Kp(e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_overArg.js
function Zp(e, t) {
	return function(n) {
		return e(t(n));
	};
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_getPrototype.js
var Qp = Zp(Object.getPrototypeOf, Object);
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isObjectLike.js
function $p(e) {
	return typeof e == "object" && !!e;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isPlainObject.js
var em = "[object Object]", tm = Function.prototype, nm = Object.prototype, rm = tm.toString, im = nm.hasOwnProperty, am = rm.call(Object);
function om(e) {
	if (!$p(e) || Xp(e) != em) return !1;
	var t = Qp(e);
	if (t === null) return !0;
	var n = im.call(t, "constructor") && t.constructor;
	return typeof n == "function" && n instanceof n && rm.call(n) == am;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_listCacheClear.js
function sm() {
	this.__data__ = [], this.size = 0;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/eq.js
function cm(e, t) {
	return e === t || e !== e && t !== t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_assocIndexOf.js
function lm(e, t) {
	for (var n = e.length; n--;) if (cm(e[n][0], t)) return n;
	return -1;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_listCacheDelete.js
var um = Array.prototype.splice;
function dm(e) {
	var t = this.__data__, n = lm(t, e);
	return n < 0 ? !1 : (n == t.length - 1 ? t.pop() : um.call(t, n, 1), --this.size, !0);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_listCacheGet.js
function fm(e) {
	var t = this.__data__, n = lm(t, e);
	return n < 0 ? void 0 : t[n][1];
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_listCacheHas.js
function pm(e) {
	return lm(this.__data__, e) > -1;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_listCacheSet.js
function mm(e, t) {
	var n = this.__data__, r = lm(n, e);
	return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_ListCache.js
function hm(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.clear(); ++t < n;) {
		var r = e[t];
		this.set(r[0], r[1]);
	}
}
hm.prototype.clear = sm, hm.prototype.delete = dm, hm.prototype.get = fm, hm.prototype.has = pm, hm.prototype.set = mm;
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_stackClear.js
function gm() {
	this.__data__ = new hm(), this.size = 0;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_stackDelete.js
function _m(e) {
	var t = this.__data__, n = t.delete(e);
	return this.size = t.size, n;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_stackGet.js
function vm(e) {
	return this.__data__.get(e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_stackHas.js
function ym(e) {
	return this.__data__.has(e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isObject.js
function bm(e) {
	var t = typeof e;
	return e != null && (t == "object" || t == "function");
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isFunction.js
var xm = "[object AsyncFunction]", Sm = "[object Function]", Cm = "[object GeneratorFunction]", wm = "[object Proxy]";
function Tm(e) {
	if (!bm(e)) return !1;
	var t = Xp(e);
	return t == Sm || t == Cm || t == xm || t == wm;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_coreJsData.js
var Em = Rp["__core-js_shared__"], Dm = function() {
	var e = /[^.]+$/.exec(Em && Em.keys && Em.keys.IE_PROTO || "");
	return e ? "Symbol(src)_1." + e : "";
}();
function Om(e) {
	return !!Dm && Dm in e;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_toSource.js
var km = Function.prototype.toString;
function Am(e) {
	if (e != null) {
		try {
			return km.call(e);
		} catch {}
		try {
			return e + "";
		} catch {}
	}
	return "";
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseIsNative.js
var jm = /[\\^$.*+?()[\]{}|]/g, Mm = /^\[object .+?Constructor\]$/, Nm = Function.prototype, Pm = Object.prototype, Fm = Nm.toString, Im = Pm.hasOwnProperty, Lm = RegExp("^" + Fm.call(Im).replace(jm, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function Rm(e) {
	return !bm(e) || Om(e) ? !1 : (Tm(e) ? Lm : Mm).test(Am(e));
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_getValue.js
function zm(e, t) {
	return e?.[t];
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_getNative.js
function Bm(e, t) {
	var n = zm(e, t);
	return Rm(n) ? n : void 0;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_Map.js
var Vm = Bm(Rp, "Map"), Hm = Bm(Object, "create");
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_hashClear.js
function Um() {
	this.__data__ = Hm ? Hm(null) : {}, this.size = 0;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_hashDelete.js
function Wm(e) {
	var t = this.has(e) && delete this.__data__[e];
	return this.size -= t ? 1 : 0, t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_hashGet.js
var Gm = "__lodash_hash_undefined__", Km = Object.prototype.hasOwnProperty;
function qm(e) {
	var t = this.__data__;
	if (Hm) {
		var n = t[e];
		return n === Gm ? void 0 : n;
	}
	return Km.call(t, e) ? t[e] : void 0;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_hashHas.js
var Jm = Object.prototype.hasOwnProperty;
function Ym(e) {
	var t = this.__data__;
	return Hm ? t[e] !== void 0 : Jm.call(t, e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_hashSet.js
var Xm = "__lodash_hash_undefined__";
function Zm(e, t) {
	var n = this.__data__;
	return this.size += this.has(e) ? 0 : 1, n[e] = Hm && t === void 0 ? Xm : t, this;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_Hash.js
function Qm(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.clear(); ++t < n;) {
		var r = e[t];
		this.set(r[0], r[1]);
	}
}
Qm.prototype.clear = Um, Qm.prototype.delete = Wm, Qm.prototype.get = qm, Qm.prototype.has = Ym, Qm.prototype.set = Zm;
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_mapCacheClear.js
function $m() {
	this.size = 0, this.__data__ = {
		hash: new Qm(),
		map: new (Vm || hm)(),
		string: new Qm()
	};
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_isKeyable.js
function eh(e) {
	var t = typeof e;
	return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_getMapData.js
function th(e, t) {
	var n = e.__data__;
	return eh(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_mapCacheDelete.js
function nh(e) {
	var t = th(this, e).delete(e);
	return this.size -= t ? 1 : 0, t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_mapCacheGet.js
function rh(e) {
	return th(this, e).get(e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_mapCacheHas.js
function ih(e) {
	return th(this, e).has(e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_mapCacheSet.js
function ah(e, t) {
	var n = th(this, e), r = n.size;
	return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_MapCache.js
function oh(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.clear(); ++t < n;) {
		var r = e[t];
		this.set(r[0], r[1]);
	}
}
oh.prototype.clear = $m, oh.prototype.delete = nh, oh.prototype.get = rh, oh.prototype.has = ih, oh.prototype.set = ah;
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_stackSet.js
var sh = 200;
function ch(e, t) {
	var n = this.__data__;
	if (n instanceof hm) {
		var r = n.__data__;
		if (!Vm || r.length < sh - 1) return r.push([e, t]), this.size = ++n.size, this;
		n = this.__data__ = new oh(r);
	}
	return n.set(e, t), this.size = n.size, this;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_Stack.js
function lh(e) {
	this.size = (this.__data__ = new hm(e)).size;
}
lh.prototype.clear = gm, lh.prototype.delete = _m, lh.prototype.get = vm, lh.prototype.has = ym, lh.prototype.set = ch;
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_arrayEach.js
function uh(e, t) {
	for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1;);
	return e;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_defineProperty.js
var dh = function() {
	try {
		var e = Bm(Object, "defineProperty");
		return e({}, "", {}), e;
	} catch {}
}();
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseAssignValue.js
function fh(e, t, n) {
	t == "__proto__" && dh ? dh(e, t, {
		configurable: !0,
		enumerable: !0,
		value: n,
		writable: !0
	}) : e[t] = n;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_assignValue.js
var ph = Object.prototype.hasOwnProperty;
function mh(e, t, n) {
	var r = e[t];
	(!(ph.call(e, t) && cm(r, n)) || n === void 0 && !(t in e)) && fh(e, t, n);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_copyObject.js
function hh(e, t, n, r) {
	var i = !n;
	n ||= {};
	for (var a = -1, o = t.length; ++a < o;) {
		var s = t[a], c = r ? r(n[s], e[s], s, n, e) : void 0;
		c === void 0 && (c = e[s]), i ? fh(n, s, c) : mh(n, s, c);
	}
	return n;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseTimes.js
function gh(e, t) {
	for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
	return r;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseIsArguments.js
var _h = "[object Arguments]";
function vh(e) {
	return $p(e) && Xp(e) == _h;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isArguments.js
var yh = Object.prototype, bh = yh.hasOwnProperty, xh = yh.propertyIsEnumerable, Sh = vh(function() {
	return arguments;
}()) ? vh : function(e) {
	return $p(e) && bh.call(e, "callee") && !xh.call(e, "callee");
}, Ch = Array.isArray;
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/stubFalse.js
function wh() {
	return !1;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isBuffer.js
var Th = typeof exports == "object" && exports && !exports.nodeType && exports, Eh = Th && typeof module == "object" && module && !module.nodeType && module, Dh = Eh && Eh.exports === Th ? Rp.Buffer : void 0, Oh = (Dh ? Dh.isBuffer : void 0) || wh, kh = 9007199254740991, Ah = /^(?:0|[1-9]\d*)$/;
function jh(e, t) {
	var n = typeof e;
	return t ??= kh, !!t && (n == "number" || n != "symbol" && Ah.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isLength.js
var Mh = 9007199254740991;
function Nh(e) {
	return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Mh;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseIsTypedArray.js
var Ph = "[object Arguments]", Fh = "[object Array]", Ih = "[object Boolean]", Lh = "[object Date]", Rh = "[object Error]", zh = "[object Function]", Bh = "[object Map]", Vh = "[object Number]", Hh = "[object Object]", Uh = "[object RegExp]", Wh = "[object Set]", Gh = "[object String]", Kh = "[object WeakMap]", qh = "[object ArrayBuffer]", Jh = "[object DataView]", Yh = "[object Float32Array]", Xh = "[object Float64Array]", Zh = "[object Int8Array]", Qh = "[object Int16Array]", $h = "[object Int32Array]", eg = "[object Uint8Array]", tg = "[object Uint8ClampedArray]", ng = "[object Uint16Array]", rg = "[object Uint32Array]", ig = {};
ig[Yh] = ig[Xh] = ig[Zh] = ig[Qh] = ig[$h] = ig[eg] = ig[tg] = ig[ng] = ig[rg] = !0, ig[Ph] = ig[Fh] = ig[qh] = ig[Ih] = ig[Jh] = ig[Lh] = ig[Rh] = ig[zh] = ig[Bh] = ig[Vh] = ig[Hh] = ig[Uh] = ig[Wh] = ig[Gh] = ig[Kh] = !1;
function ag(e) {
	return $p(e) && Nh(e.length) && !!ig[Xp(e)];
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseUnary.js
function og(e) {
	return function(t) {
		return e(t);
	};
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_nodeUtil.js
var sg = typeof exports == "object" && exports && !exports.nodeType && exports, cg = sg && typeof module == "object" && module && !module.nodeType && module, lg = cg && cg.exports === sg && Ip.process, ug = function() {
	try {
		return cg && cg.require && cg.require("util").types || lg && lg.binding && lg.binding("util");
	} catch {}
}(), dg = ug && ug.isTypedArray, fg = dg ? og(dg) : ag, pg = Object.prototype.hasOwnProperty;
function mg(e, t) {
	var n = Ch(e), r = !n && Sh(e), i = !n && !r && Oh(e), a = !n && !r && !i && fg(e), o = n || r || i || a, s = o ? gh(e.length, String) : [], c = s.length;
	for (var l in e) (t || pg.call(e, l)) && !(o && (l == "length" || i && (l == "offset" || l == "parent") || a && (l == "buffer" || l == "byteLength" || l == "byteOffset") || jh(l, c))) && s.push(l);
	return s;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_isPrototype.js
var hg = Object.prototype;
function gg(e) {
	var t = e && e.constructor;
	return e === (typeof t == "function" && t.prototype || hg);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_nativeKeys.js
var _g = Zp(Object.keys, Object), vg = Object.prototype.hasOwnProperty;
function yg(e) {
	if (!gg(e)) return _g(e);
	var t = [];
	for (var n in Object(e)) vg.call(e, n) && n != "constructor" && t.push(n);
	return t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isArrayLike.js
function bg(e) {
	return e != null && Nh(e.length) && !Tm(e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/keys.js
function xg(e) {
	return bg(e) ? mg(e) : yg(e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseAssign.js
function Sg(e, t) {
	return e && hh(t, xg(t), e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_nativeKeysIn.js
function Cg(e) {
	var t = [];
	if (e != null) for (var n in Object(e)) t.push(n);
	return t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseKeysIn.js
var wg = Object.prototype.hasOwnProperty;
function Tg(e) {
	if (!bm(e)) return Cg(e);
	var t = gg(e), n = [];
	for (var r in e) r == "constructor" && (t || !wg.call(e, r)) || n.push(r);
	return n;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/keysIn.js
function Eg(e) {
	return bg(e) ? mg(e, !0) : Tg(e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseAssignIn.js
function Dg(e, t) {
	return e && hh(t, Eg(t), e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_cloneBuffer.js
var Og = typeof exports == "object" && exports && !exports.nodeType && exports, kg = Og && typeof module == "object" && module && !module.nodeType && module, Ag = kg && kg.exports === Og ? Rp.Buffer : void 0, jg = Ag ? Ag.allocUnsafe : void 0;
function Mg(e, t) {
	if (t) return e.slice();
	var n = e.length, r = jg ? jg(n) : new e.constructor(n);
	return e.copy(r), r;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_copyArray.js
function Ng(e, t) {
	var n = -1, r = e.length;
	for (t ||= Array(r); ++n < r;) t[n] = e[n];
	return t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_arrayFilter.js
function Pg(e, t) {
	for (var n = -1, r = e == null ? 0 : e.length, i = 0, a = []; ++n < r;) {
		var o = e[n];
		t(o, n, e) && (a[i++] = o);
	}
	return a;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/stubArray.js
function Fg() {
	return [];
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_getSymbols.js
var Ig = Object.prototype.propertyIsEnumerable, Lg = Object.getOwnPropertySymbols, Rg = Lg ? function(e) {
	return e == null ? [] : (e = Object(e), Pg(Lg(e), function(t) {
		return Ig.call(e, t);
	}));
} : Fg;
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_copySymbols.js
function zg(e, t) {
	return hh(e, Rg(e), t);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_arrayPush.js
function Bg(e, t) {
	for (var n = -1, r = t.length, i = e.length; ++n < r;) e[i + n] = t[n];
	return e;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_getSymbolsIn.js
var Vg = Object.getOwnPropertySymbols ? function(e) {
	for (var t = []; e;) Bg(t, Rg(e)), e = Qp(e);
	return t;
} : Fg;
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_copySymbolsIn.js
function Hg(e, t) {
	return hh(e, Vg(e), t);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseGetAllKeys.js
function Ug(e, t, n) {
	var r = t(e);
	return Ch(e) ? r : Bg(r, n(e));
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_getAllKeys.js
function Wg(e) {
	return Ug(e, xg, Rg);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_getAllKeysIn.js
function Gg(e) {
	return Ug(e, Eg, Vg);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_DataView.js
var Kg = Bm(Rp, "DataView"), qg = Bm(Rp, "Promise"), Jg = Bm(Rp, "Set"), Yg = Bm(Rp, "WeakMap"), Xg = "[object Map]", Zg = "[object Object]", Qg = "[object Promise]", $g = "[object Set]", e_ = "[object WeakMap]", t_ = "[object DataView]", n_ = Am(Kg), r_ = Am(Vm), i_ = Am(qg), a_ = Am(Jg), o_ = Am(Yg), s_ = Xp;
(Kg && s_(new Kg(/* @__PURE__ */ new ArrayBuffer(1))) != t_ || Vm && s_(new Vm()) != Xg || qg && s_(qg.resolve()) != Qg || Jg && s_(new Jg()) != $g || Yg && s_(new Yg()) != e_) && (s_ = function(e) {
	var t = Xp(e), n = t == Zg ? e.constructor : void 0, r = n ? Am(n) : "";
	if (r) switch (r) {
		case n_: return t_;
		case r_: return Xg;
		case i_: return Qg;
		case a_: return $g;
		case o_: return e_;
	}
	return t;
});
var c_ = s_, l_ = Object.prototype.hasOwnProperty;
function u_(e) {
	var t = e.length, n = new e.constructor(t);
	return t && typeof e[0] == "string" && l_.call(e, "index") && (n.index = e.index, n.input = e.input), n;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_Uint8Array.js
var d_ = Rp.Uint8Array;
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_cloneArrayBuffer.js
function f_(e) {
	var t = new e.constructor(e.byteLength);
	return new d_(t).set(new d_(e)), t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_cloneDataView.js
function p_(e, t) {
	var n = t ? f_(e.buffer) : e.buffer;
	return new e.constructor(n, e.byteOffset, e.byteLength);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_cloneRegExp.js
var m_ = /\w*$/;
function h_(e) {
	var t = new e.constructor(e.source, m_.exec(e));
	return t.lastIndex = e.lastIndex, t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_cloneSymbol.js
var g_ = zp ? zp.prototype : void 0, __ = g_ ? g_.valueOf : void 0;
function v_(e) {
	return __ ? Object(__.call(e)) : {};
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_cloneTypedArray.js
function y_(e, t) {
	var n = t ? f_(e.buffer) : e.buffer;
	return new e.constructor(n, e.byteOffset, e.length);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_initCloneByTag.js
var b_ = "[object Boolean]", x_ = "[object Date]", S_ = "[object Map]", C_ = "[object Number]", w_ = "[object RegExp]", T_ = "[object Set]", E_ = "[object String]", D_ = "[object Symbol]", O_ = "[object ArrayBuffer]", k_ = "[object DataView]", A_ = "[object Float32Array]", j_ = "[object Float64Array]", M_ = "[object Int8Array]", N_ = "[object Int16Array]", P_ = "[object Int32Array]", F_ = "[object Uint8Array]", I_ = "[object Uint8ClampedArray]", L_ = "[object Uint16Array]", R_ = "[object Uint32Array]";
function z_(e, t, n) {
	var r = e.constructor;
	switch (t) {
		case O_: return f_(e);
		case b_:
		case x_: return new r(+e);
		case k_: return p_(e, n);
		case A_:
		case j_:
		case M_:
		case N_:
		case P_:
		case F_:
		case I_:
		case L_:
		case R_: return y_(e, n);
		case S_: return new r();
		case C_:
		case E_: return new r(e);
		case w_: return h_(e);
		case T_: return new r();
		case D_: return v_(e);
	}
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseCreate.js
var B_ = Object.create, V_ = function() {
	function e() {}
	return function(t) {
		if (!bm(t)) return {};
		if (B_) return B_(t);
		e.prototype = t;
		var n = new e();
		return e.prototype = void 0, n;
	};
}();
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_initCloneObject.js
function H_(e) {
	return typeof e.constructor == "function" && !gg(e) ? V_(Qp(e)) : {};
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseIsMap.js
var U_ = "[object Map]";
function W_(e) {
	return $p(e) && c_(e) == U_;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isMap.js
var G_ = ug && ug.isMap, K_ = G_ ? og(G_) : W_, q_ = "[object Set]";
function J_(e) {
	return $p(e) && c_(e) == q_;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isSet.js
var Y_ = ug && ug.isSet, X_ = Y_ ? og(Y_) : J_, Z_ = 1, Q_ = 2, $_ = 4, ev = "[object Arguments]", tv = "[object Array]", nv = "[object Boolean]", rv = "[object Date]", iv = "[object Error]", av = "[object Function]", ov = "[object GeneratorFunction]", sv = "[object Map]", cv = "[object Number]", lv = "[object Object]", uv = "[object RegExp]", dv = "[object Set]", fv = "[object String]", pv = "[object Symbol]", mv = "[object WeakMap]", hv = "[object ArrayBuffer]", gv = "[object DataView]", _v = "[object Float32Array]", vv = "[object Float64Array]", yv = "[object Int8Array]", bv = "[object Int16Array]", xv = "[object Int32Array]", Sv = "[object Uint8Array]", Cv = "[object Uint8ClampedArray]", wv = "[object Uint16Array]", Tv = "[object Uint32Array]", U = {};
U[ev] = U[tv] = U[hv] = U[gv] = U[nv] = U[rv] = U[_v] = U[vv] = U[yv] = U[bv] = U[xv] = U[sv] = U[cv] = U[lv] = U[uv] = U[dv] = U[fv] = U[pv] = U[Sv] = U[Cv] = U[wv] = U[Tv] = !0, U[iv] = U[av] = U[mv] = !1;
function Ev(e, t, n, r, i, a) {
	var o, s = t & Z_, c = t & Q_, l = t & $_;
	if (n && (o = i ? n(e, r, i, a) : n(e)), o !== void 0) return o;
	if (!bm(e)) return e;
	var u = Ch(e);
	if (u) {
		if (o = u_(e), !s) return Ng(e, o);
	} else {
		var d = c_(e), f = d == av || d == ov;
		if (Oh(e)) return Mg(e, s);
		if (d == lv || d == ev || f && !i) {
			if (o = c || f ? {} : H_(e), !s) return c ? Hg(e, Dg(o, e)) : zg(e, Sg(o, e));
		} else {
			if (!U[d]) return i ? e : {};
			o = z_(e, d, s);
		}
	}
	a ||= new lh();
	var p = a.get(e);
	if (p) return p;
	a.set(e, o), X_(e) ? e.forEach(function(r) {
		o.add(Ev(r, t, n, r, e, a));
	}) : K_(e) && e.forEach(function(r, i) {
		o.set(i, Ev(r, t, n, i, e, a));
	});
	var m = u ? void 0 : (l ? c ? Gg : Wg : c ? Eg : xg)(e);
	return uh(m || e, function(r, i) {
		m && (i = r, r = e[i]), mh(o, i, Ev(r, t, n, i, e, a));
	}), o;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/cloneDeep.js
var Dv = 1, Ov = 4;
function kv(e) {
	return Ev(e, Dv | Ov);
}
//#endregion
//#region node_modules/.pnpm/tiny-warning@1.0.3/node_modules/tiny-warning/dist/tiny-warning.esm.js
var Av = /* @__PURE__ */ se((/* @__PURE__ */ j(((e, t) => {
	var n = Array.isArray, r = Object.keys, i = Object.prototype.hasOwnProperty, a = typeof Element < "u";
	function o(e, t) {
		if (e === t) return !0;
		if (e && t && typeof e == "object" && typeof t == "object") {
			var s = n(e), c = n(t), l, u, d;
			if (s && c) {
				if (u = e.length, u != t.length) return !1;
				for (l = u; l-- !== 0;) if (!o(e[l], t[l])) return !1;
				return !0;
			}
			if (s != c) return !1;
			var f = e instanceof Date, p = t instanceof Date;
			if (f != p) return !1;
			if (f && p) return e.getTime() == t.getTime();
			var m = e instanceof RegExp, h = t instanceof RegExp;
			if (m != h) return !1;
			if (m && h) return e.toString() == t.toString();
			var g = r(e);
			if (u = g.length, u !== r(t).length) return !1;
			for (l = u; l-- !== 0;) if (!i.call(t, g[l])) return !1;
			if (a && e instanceof Element && t instanceof Element) return e === t;
			for (l = u; l-- !== 0;) if (d = g[l], !(d === "_owner" && e.$$typeof) && !o(e[d], t[d])) return !1;
			return !0;
		}
		return e !== e && t !== t;
	}
	t.exports = function(e, t) {
		try {
			return o(e, t);
		} catch (e) {
			if (e.message && e.message.match(/stack|recursion/i) || e.number === -2146828260) return console.warn("Warning: react-fast-compare does not handle circular references.", e.name, e.message), !1;
			throw e;
		}
	};
})))()), jv = !0;
function Mv(e, t) {
	if (!jv) {
		if (e) return;
		var n = "Warning: " + t;
		typeof console < "u" && console.warn(n);
		try {
			throw Error(n);
		} catch {}
	}
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/clone.js
var Nv = 4;
function Pv(e) {
	return Ev(e, Nv);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_arrayMap.js
function Fv(e, t) {
	for (var n = -1, r = e == null ? 0 : e.length, i = Array(r); ++n < r;) i[n] = t(e[n], n, e);
	return i;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isSymbol.js
var Iv = "[object Symbol]";
function Lv(e) {
	return typeof e == "symbol" || $p(e) && Xp(e) == Iv;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/memoize.js
var Rv = "Expected a function";
function zv(e, t) {
	if (typeof e != "function" || t != null && typeof t != "function") throw TypeError(Rv);
	var n = function() {
		var r = arguments, i = t ? t.apply(this, r) : r[0], a = n.cache;
		if (a.has(i)) return a.get(i);
		var o = e.apply(this, r);
		return n.cache = a.set(i, o) || a, o;
	};
	return n.cache = new (zv.Cache || oh)(), n;
}
zv.Cache = oh;
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_memoizeCapped.js
var Bv = 500;
function Vv(e) {
	var t = zv(e, function(e) {
		return n.size === Bv && n.clear(), e;
	}), n = t.cache;
	return t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_stringToPath.js
var Hv = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Uv = /\\(\\)?/g, Wv = Vv(function(e) {
	var t = [];
	return e.charCodeAt(0) === 46 && t.push(""), e.replace(Hv, function(e, n, r, i) {
		t.push(r ? i.replace(Uv, "$1") : n || e);
	}), t;
}), Gv = Infinity;
function Kv(e) {
	if (typeof e == "string" || Lv(e)) return e;
	var t = e + "";
	return t == "0" && 1 / e == -Gv ? "-0" : t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseToString.js
var qv = Infinity, Jv = zp ? zp.prototype : void 0, Yv = Jv ? Jv.toString : void 0;
function Xv(e) {
	if (typeof e == "string") return e;
	if (Ch(e)) return Fv(e, Xv) + "";
	if (Lv(e)) return Yv ? Yv.call(e) : "";
	var t = e + "";
	return t == "0" && 1 / e == -qv ? "-0" : t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/toString.js
function Zv(e) {
	return e == null ? "" : Xv(e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/toPath.js
function Qv(e) {
	return Ch(e) ? Fv(e, Kv) : Lv(e) ? [e] : Ng(Wv(Zv(e)));
}
//#endregion
//#region node_modules/.pnpm/formik@2.4.9_@types+react@18.3.28_react@18.3.1/node_modules/formik/dist/formik.esm.js
function $v() {
	return $v = Object.assign || function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, $v.apply(this, arguments);
}
function ey(e, t) {
	e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t;
}
function ty(e, t) {
	if (e == null) return {};
	var n = {}, r = Object.keys(e), i, a;
	for (a = 0; a < r.length; a++) i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
	return n;
}
function ny(e) {
	if (e === void 0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
	return e;
}
var ry = /* @__PURE__ */ (0, I.createContext)(void 0);
ry.displayName = "FormikContext";
var iy = ry.Provider, ay = ry.Consumer;
function oy() {
	var e = (0, I.useContext)(ry);
	return !e && Mv(!1), e;
}
var sy = function(e) {
	return Array.isArray(e) && e.length === 0;
}, cy = function(e) {
	return typeof e == "function";
}, ly = function(e) {
	return typeof e == "object" && !!e;
}, uy = function(e) {
	return String(Math.floor(Number(e))) === e;
}, dy = function(e) {
	return Object.prototype.toString.call(e) === "[object String]";
}, fy = function(e) {
	return I.Children.count(e) === 0;
}, py = function(e) {
	return ly(e) && cy(e.then);
};
function my(e, t, n, r) {
	r === void 0 && (r = 0);
	for (var i = Qv(t); e && r < i.length;) e = e[i[r++]];
	return r !== i.length && !e || e === void 0 ? n : e;
}
function hy(e, t, n) {
	for (var r = Pv(e), i = r, a = 0, o = Qv(t); a < o.length - 1; a++) {
		var s = o[a], c = my(e, o.slice(0, a + 1));
		if (c && (ly(c) || Array.isArray(c))) i = i[s] = Pv(c);
		else {
			var l = o[a + 1];
			i = i[s] = uy(l) && Number(l) >= 0 ? [] : {};
		}
	}
	return (a === 0 ? e : i)[o[a]] === n ? e : (n === void 0 ? delete i[o[a]] : i[o[a]] = n, a === 0 && n === void 0 && delete r[o[a]], r);
}
function gy(e, t, n, r) {
	n === void 0 && (n = /* @__PURE__ */ new WeakMap()), r === void 0 && (r = {});
	for (var i = 0, a = Object.keys(e); i < a.length; i++) {
		var o = a[i], s = e[o];
		ly(s) ? n.get(s) || (n.set(s, !0), r[o] = Array.isArray(s) ? [] : {}, gy(s, t, n, r[o])) : r[o] = t;
	}
	return r;
}
function _y(e, t) {
	switch (t.type) {
		case "SET_VALUES": return $v({}, e, { values: t.payload });
		case "SET_TOUCHED": return $v({}, e, { touched: t.payload });
		case "SET_ERRORS": return (0, Av.default)(e.errors, t.payload) ? e : $v({}, e, { errors: t.payload });
		case "SET_STATUS": return $v({}, e, { status: t.payload });
		case "SET_ISSUBMITTING": return $v({}, e, { isSubmitting: t.payload });
		case "SET_ISVALIDATING": return $v({}, e, { isValidating: t.payload });
		case "SET_FIELD_VALUE": return $v({}, e, { values: hy(e.values, t.payload.field, t.payload.value) });
		case "SET_FIELD_TOUCHED": return $v({}, e, { touched: hy(e.touched, t.payload.field, t.payload.value) });
		case "SET_FIELD_ERROR": return $v({}, e, { errors: hy(e.errors, t.payload.field, t.payload.value) });
		case "RESET_FORM": return $v({}, e, t.payload);
		case "SET_FORMIK_STATE": return t.payload(e);
		case "SUBMIT_ATTEMPT": return $v({}, e, {
			touched: gy(e.values, !0),
			isSubmitting: !0,
			submitCount: e.submitCount + 1
		});
		case "SUBMIT_FAILURE": return $v({}, e, { isSubmitting: !1 });
		case "SUBMIT_SUCCESS": return $v({}, e, { isSubmitting: !1 });
		default: return e;
	}
}
var vy = {}, yy = {};
function by(e) {
	var t = e.validateOnChange, n = t === void 0 ? !0 : t, r = e.validateOnBlur, i = r === void 0 ? !0 : r, a = e.validateOnMount, o = a === void 0 ? !1 : a, s = e.isInitialValid, c = e.enableReinitialize, l = c === void 0 ? !1 : c, u = e.onSubmit, d = ty(e, [
		"validateOnChange",
		"validateOnBlur",
		"validateOnMount",
		"isInitialValid",
		"enableReinitialize",
		"onSubmit"
	]), f = $v({
		validateOnChange: n,
		validateOnBlur: i,
		validateOnMount: o,
		onSubmit: u
	}, d), p = (0, I.useRef)(f.initialValues), m = (0, I.useRef)(f.initialErrors || vy), h = (0, I.useRef)(f.initialTouched || yy), g = (0, I.useRef)(f.initialStatus), _ = (0, I.useRef)(!1), v = (0, I.useRef)({});
	(0, I.useEffect)(function() {
		return _.current = !0, function() {
			_.current = !1;
		};
	}, []);
	var y = (0, I.useState)(0)[1], b = (0, I.useRef)({
		values: kv(f.initialValues),
		errors: kv(f.initialErrors) || vy,
		touched: kv(f.initialTouched) || yy,
		status: kv(f.initialStatus),
		isSubmitting: !1,
		isValidating: !1,
		submitCount: 0
	}), x = b.current, S = (0, I.useCallback)(function(e) {
		var t = b.current;
		b.current = _y(t, e), t !== b.current && y(function(e) {
			return e + 1;
		});
	}, []), C = (0, I.useCallback)(function(e, t) {
		return new Promise(function(n, r) {
			var i = f.validate(e, t);
			i == null ? n(vy) : py(i) ? i.then(function(e) {
				n(e || vy);
			}, function(e) {
				r(e);
			}) : n(i);
		});
	}, [f.validate]), w = (0, I.useCallback)(function(e, t) {
		var n = f.validationSchema, r = cy(n) ? n(t) : n, i = t && r.validateAt ? r.validateAt(t, e) : Cy(e, r);
		return new Promise(function(e, t) {
			i.then(function() {
				e(vy);
			}, function(n) {
				n.name === "ValidationError" ? e(Sy(n)) : t(n);
			});
		});
	}, [f.validationSchema]), T = (0, I.useCallback)(function(e, t) {
		return new Promise(function(n) {
			return n(v.current[e].validate(t));
		});
	}, []), E = (0, I.useCallback)(function(e) {
		var t = Object.keys(v.current).filter(function(e) {
			return cy(v.current[e].validate);
		}), n = t.length > 0 ? t.map(function(t) {
			return T(t, my(e, t));
		}) : [Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];
		return Promise.all(n).then(function(e) {
			return e.reduce(function(e, n, r) {
				return n === "DO_NOT_DELETE_YOU_WILL_BE_FIRED" || n && (e = hy(e, t[r], n)), e;
			}, {});
		});
	}, [T]), D = (0, I.useCallback)(function(e) {
		return Promise.all([
			E(e),
			f.validationSchema ? w(e) : {},
			f.validate ? C(e) : {}
		]).then(function(e) {
			var t = e[0], n = e[1], r = e[2];
			return Fp.all([
				t,
				n,
				r
			], { arrayMerge: Ty });
		});
	}, [
		f.validate,
		f.validationSchema,
		E,
		C,
		w
	]), O = ky(function(e) {
		return e === void 0 && (e = x.values), S({
			type: "SET_ISVALIDATING",
			payload: !0
		}), D(e).then(function(e) {
			return _.current && (S({
				type: "SET_ISVALIDATING",
				payload: !1
			}), S({
				type: "SET_ERRORS",
				payload: e
			})), e;
		});
	});
	(0, I.useEffect)(function() {
		o && _.current === !0 && (0, Av.default)(p.current, f.initialValues) && O(p.current);
	}, [o, O]);
	var k = (0, I.useCallback)(function(e) {
		var t = e && e.values ? e.values : p.current, n = e && e.errors ? e.errors : m.current ? m.current : f.initialErrors || {}, r = e && e.touched ? e.touched : h.current ? h.current : f.initialTouched || {}, i = e && e.status ? e.status : g.current ? g.current : f.initialStatus;
		p.current = t, m.current = n, h.current = r, g.current = i;
		var a = function() {
			S({
				type: "RESET_FORM",
				payload: {
					isSubmitting: !!e && !!e.isSubmitting,
					errors: n,
					touched: r,
					status: i,
					values: t,
					isValidating: !!e && !!e.isValidating,
					submitCount: e && e.submitCount && typeof e.submitCount == "number" ? e.submitCount : 0
				}
			});
		};
		if (f.onReset) {
			var o = f.onReset(x.values, pe);
			py(o) ? o.then(a) : a();
		} else a();
	}, [
		f.initialErrors,
		f.initialStatus,
		f.initialTouched,
		f.onReset
	]);
	(0, I.useEffect)(function() {
		_.current === !0 && !(0, Av.default)(p.current, f.initialValues) && l && (p.current = f.initialValues, k(), o && O(p.current));
	}, [
		l,
		f.initialValues,
		k,
		o,
		O
	]), (0, I.useEffect)(function() {
		l && _.current === !0 && !(0, Av.default)(m.current, f.initialErrors) && (m.current = f.initialErrors || vy, S({
			type: "SET_ERRORS",
			payload: f.initialErrors || vy
		}));
	}, [l, f.initialErrors]), (0, I.useEffect)(function() {
		l && _.current === !0 && !(0, Av.default)(h.current, f.initialTouched) && (h.current = f.initialTouched || yy, S({
			type: "SET_TOUCHED",
			payload: f.initialTouched || yy
		}));
	}, [l, f.initialTouched]), (0, I.useEffect)(function() {
		l && _.current === !0 && !(0, Av.default)(g.current, f.initialStatus) && (g.current = f.initialStatus, S({
			type: "SET_STATUS",
			payload: f.initialStatus
		}));
	}, [
		l,
		f.initialStatus,
		f.initialTouched
	]);
	var A = ky(function(e) {
		if (v.current[e] && cy(v.current[e].validate)) {
			var t = my(x.values, e), n = v.current[e].validate(t);
			return py(n) ? (S({
				type: "SET_ISVALIDATING",
				payload: !0
			}), n.then(function(e) {
				return e;
			}).then(function(t) {
				S({
					type: "SET_FIELD_ERROR",
					payload: {
						field: e,
						value: t
					}
				}), S({
					type: "SET_ISVALIDATING",
					payload: !1
				});
			})) : (S({
				type: "SET_FIELD_ERROR",
				payload: {
					field: e,
					value: n
				}
			}), Promise.resolve(n));
		} else if (f.validationSchema) return S({
			type: "SET_ISVALIDATING",
			payload: !0
		}), w(x.values, e).then(function(e) {
			return e;
		}).then(function(t) {
			S({
				type: "SET_FIELD_ERROR",
				payload: {
					field: e,
					value: my(t, e)
				}
			}), S({
				type: "SET_ISVALIDATING",
				payload: !1
			});
		});
		return Promise.resolve();
	}), j = (0, I.useCallback)(function(e, t) {
		var n = t.validate;
		v.current[e] = { validate: n };
	}, []), ee = (0, I.useCallback)(function(e) {
		delete v.current[e];
	}, []), M = ky(function(e, t) {
		return S({
			type: "SET_TOUCHED",
			payload: e
		}), (t === void 0 ? i : t) ? O(x.values) : Promise.resolve();
	}), N = (0, I.useCallback)(function(e) {
		S({
			type: "SET_ERRORS",
			payload: e
		});
	}, []), te = ky(function(e, t) {
		var r = cy(e) ? e(x.values) : e;
		return S({
			type: "SET_VALUES",
			payload: r
		}), (t === void 0 ? n : t) ? O(r) : Promise.resolve();
	}), P = (0, I.useCallback)(function(e, t) {
		S({
			type: "SET_FIELD_ERROR",
			payload: {
				field: e,
				value: t
			}
		});
	}, []), ne = ky(function(e, t, r) {
		var i = cy(t) ? t(my(x.values, e)) : t;
		return S({
			type: "SET_FIELD_VALUE",
			payload: {
				field: e,
				value: i
			}
		}), (r === void 0 ? n : r) ? O(hy(x.values, e, i)) : Promise.resolve();
	}), re = (0, I.useCallback)(function(e, t) {
		var n = t, r = e, i;
		if (!dy(e)) {
			e.persist && e.persist();
			var a = e.target ? e.target : e.currentTarget, o = a.type, s = a.name, c = a.id, l = a.value, u = a.checked;
			a.outerHTML;
			var d = a.options, f = a.multiple;
			n = t || s || c, r = /number|range/.test(o) ? (i = parseFloat(l), isNaN(i) ? "" : i) : /checkbox/.test(o) ? Dy(my(x.values, n), u, l) : d && f ? Ey(d) : l;
		}
		n && ne(n, r);
	}, [ne, x.values]), ie = ky(function(e) {
		if (dy(e)) return function(t) {
			return re(t, e);
		};
		re(e);
	}), ae = ky(function(e, t, n) {
		return t === void 0 && (t = !0), S({
			type: "SET_FIELD_TOUCHED",
			payload: {
				field: e,
				value: t
			}
		}), (n === void 0 ? i : n) ? O(x.values) : Promise.resolve();
	}), oe = (0, I.useCallback)(function(e, t) {
		e.persist && e.persist();
		var n = e.target, r = n.name, i = n.id;
		n.outerHTML, ae(t || r || i, !0);
	}, [ae]), se = ky(function(e) {
		if (dy(e)) return function(t) {
			return oe(t, e);
		};
		oe(e);
	}), ce = (0, I.useCallback)(function(e) {
		cy(e) ? S({
			type: "SET_FORMIK_STATE",
			payload: e
		}) : S({
			type: "SET_FORMIK_STATE",
			payload: function() {
				return e;
			}
		});
	}, []), le = (0, I.useCallback)(function(e) {
		S({
			type: "SET_STATUS",
			payload: e
		});
	}, []), ue = (0, I.useCallback)(function(e) {
		S({
			type: "SET_ISSUBMITTING",
			payload: e
		});
	}, []), de = ky(function() {
		return S({ type: "SUBMIT_ATTEMPT" }), O().then(function(e) {
			var t = e instanceof Error;
			if (!t && Object.keys(e).length === 0) {
				var n;
				try {
					if (n = me(), n === void 0) return;
				} catch (e) {
					throw e;
				}
				return Promise.resolve(n).then(function(e) {
					return _.current && S({ type: "SUBMIT_SUCCESS" }), e;
				}).catch(function(e) {
					if (_.current) throw S({ type: "SUBMIT_FAILURE" }), e;
				});
			} else if (_.current && (S({ type: "SUBMIT_FAILURE" }), t)) throw e;
		});
	}), fe = ky(function(e) {
		e && e.preventDefault && cy(e.preventDefault) && e.preventDefault(), e && e.stopPropagation && cy(e.stopPropagation) && e.stopPropagation(), de().catch(function(e) {
			console.warn("Warning: An unhandled error was caught from submitForm()", e);
		});
	}), pe = {
		resetForm: k,
		validateForm: O,
		validateField: A,
		setErrors: N,
		setFieldError: P,
		setFieldTouched: ae,
		setFieldValue: ne,
		setStatus: le,
		setSubmitting: ue,
		setTouched: M,
		setValues: te,
		setFormikState: ce,
		submitForm: de
	}, me = ky(function() {
		return u(x.values, pe);
	}), he = ky(function(e) {
		e && e.preventDefault && cy(e.preventDefault) && e.preventDefault(), e && e.stopPropagation && cy(e.stopPropagation) && e.stopPropagation(), k();
	}), ge = (0, I.useCallback)(function(e) {
		return {
			value: my(x.values, e),
			error: my(x.errors, e),
			touched: !!my(x.touched, e),
			initialValue: my(p.current, e),
			initialTouched: !!my(h.current, e),
			initialError: my(m.current, e)
		};
	}, [
		x.errors,
		x.touched,
		x.values
	]), _e = (0, I.useCallback)(function(e) {
		return {
			setValue: function(t, n) {
				return ne(e, t, n);
			},
			setTouched: function(t, n) {
				return ae(e, t, n);
			},
			setError: function(t) {
				return P(e, t);
			}
		};
	}, [
		ne,
		ae,
		P
	]), ve = (0, I.useCallback)(function(e) {
		var t = ly(e), n = t ? e.name : e, r = my(x.values, n), i = {
			name: n,
			value: r,
			onChange: ie,
			onBlur: se
		};
		if (t) {
			var a = e.type, o = e.value, s = e.as, c = e.multiple;
			a === "checkbox" ? o === void 0 ? i.checked = !!r : (i.checked = !!(Array.isArray(r) && ~r.indexOf(o)), i.value = o) : a === "radio" ? (i.checked = r === o, i.value = o) : s === "select" && c && (i.value = i.value || [], i.multiple = !0);
		}
		return i;
	}, [
		se,
		ie,
		x.values
	]), ye = (0, I.useMemo)(function() {
		return !(0, Av.default)(p.current, x.values);
	}, [p.current, x.values]), be = (0, I.useMemo)(function() {
		return s === void 0 || ye ? x.errors && Object.keys(x.errors).length === 0 : s !== !1 && cy(s) ? s(f) : s;
	}, [
		s,
		ye,
		x.errors,
		f
	]);
	return $v({}, x, {
		initialValues: p.current,
		initialErrors: m.current,
		initialTouched: h.current,
		initialStatus: g.current,
		handleBlur: se,
		handleChange: ie,
		handleReset: he,
		handleSubmit: fe,
		resetForm: k,
		setErrors: N,
		setFormikState: ce,
		setFieldTouched: ae,
		setFieldValue: ne,
		setFieldError: P,
		setStatus: le,
		setSubmitting: ue,
		setTouched: M,
		setValues: te,
		submitForm: de,
		validateForm: O,
		validateField: A,
		isValid: be,
		dirty: ye,
		unregisterField: ee,
		registerField: j,
		getFieldProps: ve,
		getFieldMeta: ge,
		getFieldHelpers: _e,
		validateOnBlur: i,
		validateOnChange: n,
		validateOnMount: o
	});
}
function xy(e) {
	var t = by(e), n = e.component, r = e.children, i = e.render, a = e.innerRef;
	return (0, I.useImperativeHandle)(a, function() {
		return t;
	}), (0, I.createElement)(iy, { value: t }, n ? (0, I.createElement)(n, t) : i ? i(t) : r ? cy(r) ? r(t) : fy(r) ? null : I.Children.only(r) : null);
}
function Sy(e) {
	var t = {};
	if (e.inner) {
		if (e.inner.length === 0) return hy(t, e.path, e.message);
		for (var n = e.inner, r = Array.isArray(n), i = 0, n = r ? n : n[Symbol.iterator]();;) {
			var a;
			if (r) {
				if (i >= n.length) break;
				a = n[i++];
			} else {
				if (i = n.next(), i.done) break;
				a = i.value;
			}
			var o = a;
			my(t, o.path) || (t = hy(t, o.path, o.message));
		}
	}
	return t;
}
function Cy(e, t, n, r) {
	n === void 0 && (n = !1);
	var i = wy(e);
	return t[n ? "validateSync" : "validate"](i, {
		abortEarly: !1,
		context: r || i
	});
}
function wy(e) {
	var t = Array.isArray(e) ? [] : {};
	for (var n in e) if (Object.prototype.hasOwnProperty.call(e, n)) {
		var r = String(n);
		Array.isArray(e[r]) === !0 ? t[r] = e[r].map(function(e) {
			return Array.isArray(e) === !0 || om(e) ? wy(e) : e === "" ? void 0 : e;
		}) : om(e[r]) ? t[r] = wy(e[r]) : t[r] = e[r] === "" ? void 0 : e[r];
	}
	return t;
}
function Ty(e, t, n) {
	var r = e.slice();
	return t.forEach(function(t, i) {
		r[i] === void 0 ? r[i] = n.clone !== !1 && n.isMergeableObject(t) ? Fp(Array.isArray(t) ? [] : {}, t, n) : t : n.isMergeableObject(t) ? r[i] = Fp(e[i], t, n) : e.indexOf(t) === -1 && r.push(t);
	}), r;
}
function Ey(e) {
	return Array.from(e).filter(function(e) {
		return e.selected;
	}).map(function(e) {
		return e.value;
	});
}
function Dy(e, t, n) {
	if (typeof e == "boolean") return !!t;
	var r = [], i = !1, a = -1;
	if (Array.isArray(e)) r = e, a = e.indexOf(n), i = a >= 0;
	else if (!n || n == "true" || n == "false") return !!t;
	return t && n && !i ? r.concat(n) : i ? r.slice(0, a).concat(r.slice(a + 1)) : r;
}
var Oy = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0 ? I.useLayoutEffect : I.useEffect;
function ky(e) {
	var t = (0, I.useRef)(e);
	return Oy(function() {
		t.current = e;
	}), (0, I.useCallback)(function() {
		var e = [...arguments];
		return t.current.apply(void 0, e);
	}, []);
}
var Ay = /* @__PURE__ */ (0, I.forwardRef)(function(e, t) {
	var n = e.action, r = ty(e, ["action"]), i = n ?? "#", a = oy(), o = a.handleReset, s = a.handleSubmit;
	return (0, I.createElement)("form", $v({
		onSubmit: s,
		ref: t,
		onReset: o,
		action: i
	}, r));
});
Ay.displayName = "Form";
function jy(e) {
	var t = function(t) {
		return (0, I.createElement)(ay, null, function(n) {
			return !n && Mv(!1), (0, I.createElement)(e, $v({}, t, { formik: n }));
		});
	}, n = e.displayName || e.name || e.constructor && e.constructor.name || "Component";
	return t.WrappedComponent = e, t.displayName = "FormikConnect(" + n + ")", (0, Ee.default)(t, e);
}
var My = function(e, t, n) {
	var r = Iy(e), i = r[t];
	return r.splice(t, 1), r.splice(n, 0, i), r;
}, Ny = function(e, t, n) {
	var r = Iy(e), i = r[t];
	return r[t] = r[n], r[n] = i, r;
}, Py = function(e, t, n) {
	var r = Iy(e);
	return r.splice(t, 0, n), r;
}, Fy = function(e, t, n) {
	var r = Iy(e);
	return r[t] = n, r;
}, Iy = function(e) {
	if (!e) return [];
	if (Array.isArray(e)) return [].concat(e);
	var t = Object.keys(e).map(function(e) {
		return parseInt(e);
	}).reduce(function(e, t) {
		return t > e ? t : e;
	}, 0);
	return Array.from($v({}, e, { length: t + 1 }));
}, Ly = function(e, t) {
	var n = typeof e == "function" ? e : t;
	return function(e) {
		return Array.isArray(e) || ly(e) ? n(Iy(e)) : e;
	};
}, Ry = /* @__PURE__ */ function(e) {
	ey(t, e);
	function t(t) {
		var n = e.call(this, t) || this;
		return n.updateArrayField = function(e, t, r) {
			var i = n.props, a = i.name, o = i.formik.setFormikState;
			o(function(n) {
				var i = Ly(r, e), o = Ly(t, e), s = hy(n.values, a, e(my(n.values, a))), c = r ? i(my(n.errors, a)) : void 0, l = t ? o(my(n.touched, a)) : void 0;
				return sy(c) && (c = void 0), sy(l) && (l = void 0), $v({}, n, {
					values: s,
					errors: r ? hy(n.errors, a, c) : n.errors,
					touched: t ? hy(n.touched, a, l) : n.touched
				});
			});
		}, n.push = function(e) {
			return n.updateArrayField(function(t) {
				return [].concat(Iy(t), [kv(e)]);
			}, !1, !1);
		}, n.handlePush = function(e) {
			return function() {
				return n.push(e);
			};
		}, n.swap = function(e, t) {
			return n.updateArrayField(function(n) {
				return Ny(n, e, t);
			}, !0, !0);
		}, n.handleSwap = function(e, t) {
			return function() {
				return n.swap(e, t);
			};
		}, n.move = function(e, t) {
			return n.updateArrayField(function(n) {
				return My(n, e, t);
			}, !0, !0);
		}, n.handleMove = function(e, t) {
			return function() {
				return n.move(e, t);
			};
		}, n.insert = function(e, t) {
			return n.updateArrayField(function(n) {
				return Py(n, e, t);
			}, function(t) {
				return Py(t, e, null);
			}, function(t) {
				return Py(t, e, null);
			});
		}, n.handleInsert = function(e, t) {
			return function() {
				return n.insert(e, t);
			};
		}, n.replace = function(e, t) {
			return n.updateArrayField(function(n) {
				return Fy(n, e, t);
			}, !1, !1);
		}, n.handleReplace = function(e, t) {
			return function() {
				return n.replace(e, t);
			};
		}, n.unshift = function(e) {
			var t = -1;
			return n.updateArrayField(function(n) {
				var r = n ? [e].concat(n) : [e];
				return t = r.length, r;
			}, function(e) {
				return e ? [null].concat(e) : [null];
			}, function(e) {
				return e ? [null].concat(e) : [null];
			}), t;
		}, n.handleUnshift = function(e) {
			return function() {
				return n.unshift(e);
			};
		}, n.handleRemove = function(e) {
			return function() {
				return n.remove(e);
			};
		}, n.handlePop = function() {
			return function() {
				return n.pop();
			};
		}, n.remove = n.remove.bind(ny(n)), n.pop = n.pop.bind(ny(n)), n;
	}
	var n = t.prototype;
	return n.componentDidUpdate = function(e) {
		this.props.validateOnChange && this.props.formik.validateOnChange && !(0, Av.default)(my(e.formik.values, e.name), my(this.props.formik.values, this.props.name)) && this.props.formik.validateForm(this.props.formik.values);
	}, n.remove = function(e) {
		var t;
		return this.updateArrayField(function(n) {
			var r = n ? Iy(n) : [];
			return t ||= r[e], cy(r.splice) && r.splice(e, 1), cy(r.every) && r.every(function(e) {
				return e === void 0;
			}) ? [] : r;
		}, !0, !0), t;
	}, n.pop = function() {
		var e;
		return this.updateArrayField(function(t) {
			var n = t.slice();
			return e ||= n && n.pop && n.pop(), n;
		}, !0, !0), e;
	}, n.render = function() {
		var e = {
			push: this.push,
			pop: this.pop,
			swap: this.swap,
			move: this.move,
			insert: this.insert,
			replace: this.replace,
			unshift: this.unshift,
			remove: this.remove,
			handlePush: this.handlePush,
			handlePop: this.handlePop,
			handleSwap: this.handleSwap,
			handleMove: this.handleMove,
			handleInsert: this.handleInsert,
			handleReplace: this.handleReplace,
			handleUnshift: this.handleUnshift,
			handleRemove: this.handleRemove
		}, t = this.props, n = t.component, r = t.render, i = t.children, a = t.name, o = t.formik, s = ty(o, ["validate", "validationSchema"]), c = $v({}, e, {
			form: s,
			name: a
		});
		return n ? (0, I.createElement)(n, c) : r ? r(c) : i ? typeof i == "function" ? i(c) : fy(i) ? null : I.Children.only(i) : null;
	}, t;
}(I.Component);
Ry.defaultProps = { validateOnChange: !0 };
var zy = /* @__PURE__ */ jy(Ry);
//#endregion
//#region src/card/common/utils.ts
function By(e = [], t) {
	let n = e.length ? Math.max(...e.map((e) => e.id)) + 1 : 1;
	return {
		id: n,
		name: `Card #${n}`,
		title: "",
		subtitle: "",
		secondaryContent: null,
		...t
	};
}
//#endregion
//#region src/card/card-carousel/studio-ui/SettingsForm.tsx
function Vy() {
	let { values: e, setFieldValue: t, handleChange: n } = oy();
	return /* @__PURE__ */ (0, F.jsxs)("div", {
		className: "card-carousel-create-form",
		children: [
			/* @__PURE__ */ (0, F.jsxs)(H.Group, {
				className: "card-carousel-studio-field",
				children: [
					/* @__PURE__ */ (0, F.jsx)(H.Label, { children: "Display Name" }),
					/* @__PURE__ */ (0, F.jsx)(H.Text, {
						muted: !0,
						children: "Name of the XBlock component in Studio."
					}),
					/* @__PURE__ */ (0, F.jsx)(H.Control, {
						type: "text",
						name: "displayName",
						value: e.displayName,
						onChange: n
					})
				]
			}),
			/* @__PURE__ */ (0, F.jsxs)(H.Group, {
				className: "card-carousel-studio-field",
				children: [/* @__PURE__ */ (0, F.jsx)(H.Checkbox, {
					name: "disableNumbering",
					checked: !e.disableNumbering,
					onChange: (e) => t("disableNumbering", !e.currentTarget.checked),
					children: "Add card numbers"
				}), /* @__PURE__ */ (0, F.jsx)(H.Text, {
					className: "card-carousel-studio-help-text",
					children: "Displays progress. For e.g., (2/4)"
				})]
			}),
			/* @__PURE__ */ (0, F.jsxs)(H.Group, {
				className: "card-carousel-studio-field card-carousel-studio-field--last",
				children: [/* @__PURE__ */ (0, F.jsx)(H.Label, { children: "Background Color" }), /* @__PURE__ */ (0, F.jsx)(Sp, {
					color: e.backgroundColor,
					setColor: (e) => t("backgroundColor", e)
				})]
			})
		]
	});
}
//#endregion
//#region src/shared/components/constants.ts
var Hy = [
	{
		key: "content",
		label: "Content"
	},
	{
		key: "settings",
		label: "Settings"
	},
	{
		key: "json",
		label: "JSON"
	}
];
//#endregion
//#region src/shared/components/StudioHeader.tsx
function Uy({ title: e, onTitleChange: t, activeTab: n, tabs: r = Hy }) {
	let [i, a] = (0, I.useState)(!1);
	return /* @__PURE__ */ (0, F.jsx)($l.Header, {
		className: "shadow-sm studio-header",
		children: /* @__PURE__ */ (0, F.jsxs)("div", {
			className: "d-flex flex-row justify-content-between",
			children: [
				/* @__PURE__ */ (0, F.jsx)(Oe, { children: i ? /* @__PURE__ */ (0, F.jsx)(H.Control, {
					type: "text",
					name: "studio-title",
					"aria-label": "Display name",
					value: e,
					onChange: (e) => t(e.target.value),
					onBlur: () => a(!1),
					onKeyDown: (e) => {
						(e.key === "Enter" || e.key === "Escape") && (a(!1), e.preventDefault());
					}
				}) : /* @__PURE__ */ (0, F.jsx)("h3", {
					className: "h3 col pl-0",
					children: /* @__PURE__ */ (0, F.jsxs)("div", {
						className: "d-flex flex-row align-items-center mt-1",
						children: [
							"Editing: ",
							e,
							/* @__PURE__ */ (0, F.jsx)(le, {
								alt: "Edit display name",
								className: "studio-header-title-edit",
								size: "sm",
								src: Gr,
								onClick: () => a(!0)
							})
						]
					})
				}) }),
				/* @__PURE__ */ (0, F.jsx)(Oe.Spacer, {}),
				r.length > 0 && /* @__PURE__ */ (0, F.jsx)(gu, {
					role: "tablist",
					variant: "button-group",
					activeKey: n,
					className: "studio-header-tabs-nav pgn__tabs",
					"aria-label": "Editor Sections",
					children: r.map(({ key: e, label: t }) => /* @__PURE__ */ (0, F.jsx)(gu.Link, {
						as: "button",
						type: "button",
						eventKey: e,
						tabIndex: n === e ? 0 : -1,
						children: t
					}, e))
				})
			]
		})
	});
}
//#endregion
//#region src/card/common/studio-ui/secondary-content/ListItemContainer.tsx
function Wy({ heading: e, index: t, onRemoveItem: n, children: r }) {
	return /* @__PURE__ */ (0, F.jsx)("div", {
		className: "m-2 bg-light-200",
		children: /* @__PURE__ */ (0, F.jsxs)("div", {
			className: "border rounded-sm shadow-sm icon-item-form mb-4",
			children: [/* @__PURE__ */ (0, F.jsxs)("div", {
				className: "d-flex justify-content-between border-bottom align-items-center",
				children: [/* @__PURE__ */ (0, F.jsx)("h5", {
					className: "ml-2 mb-0",
					children: e
				}), /* @__PURE__ */ (0, F.jsxs)(O, {
					variant: "tertiary",
					size: "sm",
					className: "d-flex align-items-center",
					onClick: () => n(t),
					children: [
						/* @__PURE__ */ (0, F.jsx)("span", {
							className: "material-icons-outlined text-danger",
							children: "delete_outline"
						}),
						" ",
						"Delete"
					]
				})]
			}), /* @__PURE__ */ (0, F.jsx)("div", {
				className: "p-2",
				children: r
			})]
		})
	});
}
//#endregion
//#region node_modules/.pnpm/fuse.js@7.1.0/node_modules/fuse.js/dist/fuse.mjs
function Gy(e) {
	return Array.isArray ? Array.isArray(e) : nb(e) === "[object Array]";
}
var Ky = Infinity;
function qy(e) {
	if (typeof e == "string") return e;
	let t = e + "";
	return t == "0" && 1 / e == -Ky ? "-0" : t;
}
function Jy(e) {
	return e == null ? "" : qy(e);
}
function Yy(e) {
	return typeof e == "string";
}
function Xy(e) {
	return typeof e == "number";
}
function Zy(e) {
	return e === !0 || e === !1 || $y(e) && nb(e) == "[object Boolean]";
}
function Qy(e) {
	return typeof e == "object";
}
function $y(e) {
	return Qy(e) && e !== null;
}
function eb(e) {
	return e != null;
}
function tb(e) {
	return !e.trim().length;
}
function nb(e) {
	return e == null ? e === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(e);
}
var rb = "Incorrect 'index' type", ib = (e) => `Invalid value for key ${e}`, ab = (e) => `Pattern length exceeds max of ${e}.`, ob = (e) => `Missing ${e} property in key`, sb = (e) => `Property 'weight' in key '${e}' must be a positive integer`, cb = Object.prototype.hasOwnProperty, lb = class {
	constructor(e) {
		this._keys = [], this._keyMap = {};
		let t = 0;
		e.forEach((e) => {
			let n = ub(e);
			this._keys.push(n), this._keyMap[n.id] = n, t += n.weight;
		}), this._keys.forEach((e) => {
			e.weight /= t;
		});
	}
	get(e) {
		return this._keyMap[e];
	}
	keys() {
		return this._keys;
	}
	toJSON() {
		return JSON.stringify(this._keys);
	}
};
function ub(e) {
	let t = null, n = null, r = null, i = 1, a = null;
	if (Yy(e) || Gy(e)) r = e, t = db(e), n = fb(e);
	else {
		if (!cb.call(e, "name")) throw Error(ob("name"));
		let o = e.name;
		if (r = o, cb.call(e, "weight") && (i = e.weight, i <= 0)) throw Error(sb(o));
		t = db(o), n = fb(o), a = e.getFn;
	}
	return {
		path: t,
		id: n,
		weight: i,
		src: r,
		getFn: a
	};
}
function db(e) {
	return Gy(e) ? e : e.split(".");
}
function fb(e) {
	return Gy(e) ? e.join(".") : e;
}
function pb(e, t) {
	let n = [], r = !1, i = (e, t, a) => {
		if (eb(e)) if (!t[a]) n.push(e);
		else {
			let o = e[t[a]];
			if (!eb(o)) return;
			if (a === t.length - 1 && (Yy(o) || Xy(o) || Zy(o))) n.push(Jy(o));
			else if (Gy(o)) {
				r = !0;
				for (let e = 0, n = o.length; e < n; e += 1) i(o[e], t, a + 1);
			} else t.length && i(o, t, a + 1);
		}
	};
	return i(e, Yy(t) ? t.split(".") : t, 0), r ? n : n[0];
}
var mb = {
	includeMatches: !1,
	findAllMatches: !1,
	minMatchCharLength: 1
}, hb = {
	isCaseSensitive: !1,
	ignoreDiacritics: !1,
	includeScore: !1,
	keys: [],
	shouldSort: !0,
	sortFn: (e, t) => e.score === t.score ? e.idx < t.idx ? -1 : 1 : e.score < t.score ? -1 : 1
}, gb = {
	location: 0,
	threshold: .6,
	distance: 100
}, _b = {
	useExtendedSearch: !1,
	getFn: pb,
	ignoreLocation: !1,
	ignoreFieldNorm: !1,
	fieldNormWeight: 1
}, W = {
	...hb,
	...mb,
	...gb,
	..._b
}, vb = /[^ ]+/g;
function yb(e = 1, t = 3) {
	let n = /* @__PURE__ */ new Map(), r = 10 ** t;
	return {
		get(t) {
			let i = t.match(vb).length;
			if (n.has(i)) return n.get(i);
			let a = 1 / i ** (.5 * e), o = parseFloat(Math.round(a * r) / r);
			return n.set(i, o), o;
		},
		clear() {
			n.clear();
		}
	};
}
var bb = class {
	constructor({ getFn: e = W.getFn, fieldNormWeight: t = W.fieldNormWeight } = {}) {
		this.norm = yb(t, 3), this.getFn = e, this.isCreated = !1, this.setIndexRecords();
	}
	setSources(e = []) {
		this.docs = e;
	}
	setIndexRecords(e = []) {
		this.records = e;
	}
	setKeys(e = []) {
		this.keys = e, this._keysMap = {}, e.forEach((e, t) => {
			this._keysMap[e.id] = t;
		});
	}
	create() {
		this.isCreated || !this.docs.length || (this.isCreated = !0, Yy(this.docs[0]) ? this.docs.forEach((e, t) => {
			this._addString(e, t);
		}) : this.docs.forEach((e, t) => {
			this._addObject(e, t);
		}), this.norm.clear());
	}
	add(e) {
		let t = this.size();
		Yy(e) ? this._addString(e, t) : this._addObject(e, t);
	}
	removeAt(e) {
		this.records.splice(e, 1);
		for (let t = e, n = this.size(); t < n; t += 1) --this.records[t].i;
	}
	getValueForItemAtKeyId(e, t) {
		return e[this._keysMap[t]];
	}
	size() {
		return this.records.length;
	}
	_addString(e, t) {
		if (!eb(e) || tb(e)) return;
		let n = {
			v: e,
			i: t,
			n: this.norm.get(e)
		};
		this.records.push(n);
	}
	_addObject(e, t) {
		let n = {
			i: t,
			$: {}
		};
		this.keys.forEach((t, r) => {
			let i = t.getFn ? t.getFn(e) : this.getFn(e, t.path);
			if (eb(i)) {
				if (Gy(i)) {
					let e = [], t = [{
						nestedArrIndex: -1,
						value: i
					}];
					for (; t.length;) {
						let { nestedArrIndex: n, value: r } = t.pop();
						if (eb(r)) if (Yy(r) && !tb(r)) {
							let t = {
								v: r,
								i: n,
								n: this.norm.get(r)
							};
							e.push(t);
						} else Gy(r) && r.forEach((e, n) => {
							t.push({
								nestedArrIndex: n,
								value: e
							});
						});
					}
					n.$[r] = e;
				} else if (Yy(i) && !tb(i)) {
					let e = {
						v: i,
						n: this.norm.get(i)
					};
					n.$[r] = e;
				}
			}
		}), this.records.push(n);
	}
	toJSON() {
		return {
			keys: this.keys,
			records: this.records
		};
	}
};
function xb(e, t, { getFn: n = W.getFn, fieldNormWeight: r = W.fieldNormWeight } = {}) {
	let i = new bb({
		getFn: n,
		fieldNormWeight: r
	});
	return i.setKeys(e.map(ub)), i.setSources(t), i.create(), i;
}
function Sb(e, { getFn: t = W.getFn, fieldNormWeight: n = W.fieldNormWeight } = {}) {
	let { keys: r, records: i } = e, a = new bb({
		getFn: t,
		fieldNormWeight: n
	});
	return a.setKeys(r), a.setIndexRecords(i), a;
}
function Cb(e, { errors: t = 0, currentLocation: n = 0, expectedLocation: r = 0, distance: i = W.distance, ignoreLocation: a = W.ignoreLocation } = {}) {
	let o = t / e.length;
	if (a) return o;
	let s = Math.abs(r - n);
	return i ? o + s / i : s ? 1 : o;
}
function wb(e = [], t = W.minMatchCharLength) {
	let n = [], r = -1, i = -1, a = 0;
	for (let o = e.length; a < o; a += 1) {
		let o = e[a];
		o && r === -1 ? r = a : !o && r !== -1 && (i = a - 1, i - r + 1 >= t && n.push([r, i]), r = -1);
	}
	return e[a - 1] && a - r >= t && n.push([r, a - 1]), n;
}
var Tb = 32;
function Eb(e, t, n, { location: r = W.location, distance: i = W.distance, threshold: a = W.threshold, findAllMatches: o = W.findAllMatches, minMatchCharLength: s = W.minMatchCharLength, includeMatches: c = W.includeMatches, ignoreLocation: l = W.ignoreLocation } = {}) {
	if (t.length > Tb) throw Error(ab(Tb));
	let u = t.length, d = e.length, f = Math.max(0, Math.min(r, d)), p = a, m = f, h = s > 1 || c, g = h ? Array(d) : [], _;
	for (; (_ = e.indexOf(t, m)) > -1;) {
		let e = Cb(t, {
			currentLocation: _,
			expectedLocation: f,
			distance: i,
			ignoreLocation: l
		});
		if (p = Math.min(e, p), m = _ + u, h) {
			let e = 0;
			for (; e < u;) g[_ + e] = 1, e += 1;
		}
	}
	m = -1;
	let v = [], y = 1, b = u + d, x = 1 << u - 1;
	for (let r = 0; r < u; r += 1) {
		let a = 0, s = b;
		for (; a < s;) Cb(t, {
			errors: r,
			currentLocation: f + s,
			expectedLocation: f,
			distance: i,
			ignoreLocation: l
		}) <= p ? a = s : b = s, s = Math.floor((b - a) / 2 + a);
		b = s;
		let c = Math.max(1, f - s + 1), _ = o ? d : Math.min(f + s, d) + u, S = Array(_ + 2);
		S[_ + 1] = (1 << r) - 1;
		for (let a = _; a >= c; --a) {
			let o = a - 1, s = n[e.charAt(o)];
			if (h && (g[o] = +!!s), S[a] = (S[a + 1] << 1 | 1) & s, r && (S[a] |= (v[a + 1] | v[a]) << 1 | 1 | v[a + 1]), S[a] & x && (y = Cb(t, {
				errors: r,
				currentLocation: o,
				expectedLocation: f,
				distance: i,
				ignoreLocation: l
			}), y <= p)) {
				if (p = y, m = o, m <= f) break;
				c = Math.max(1, 2 * f - m);
			}
		}
		if (Cb(t, {
			errors: r + 1,
			currentLocation: f,
			expectedLocation: f,
			distance: i,
			ignoreLocation: l
		}) > p) break;
		v = S;
	}
	let S = {
		isMatch: m >= 0,
		score: Math.max(.001, y)
	};
	if (h) {
		let e = wb(g, s);
		e.length ? c && (S.indices = e) : S.isMatch = !1;
	}
	return S;
}
function Db(e) {
	let t = {};
	for (let n = 0, r = e.length; n < r; n += 1) {
		let i = e.charAt(n);
		t[i] = (t[i] || 0) | 1 << r - n - 1;
	}
	return t;
}
var Ob = String.prototype.normalize ? ((e) => e.normalize("NFD").replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g, "")) : ((e) => e), kb = class {
	constructor(e, { location: t = W.location, threshold: n = W.threshold, distance: r = W.distance, includeMatches: i = W.includeMatches, findAllMatches: a = W.findAllMatches, minMatchCharLength: o = W.minMatchCharLength, isCaseSensitive: s = W.isCaseSensitive, ignoreDiacritics: c = W.ignoreDiacritics, ignoreLocation: l = W.ignoreLocation } = {}) {
		if (this.options = {
			location: t,
			threshold: n,
			distance: r,
			includeMatches: i,
			findAllMatches: a,
			minMatchCharLength: o,
			isCaseSensitive: s,
			ignoreDiacritics: c,
			ignoreLocation: l
		}, e = s ? e : e.toLowerCase(), e = c ? Ob(e) : e, this.pattern = e, this.chunks = [], !this.pattern.length) return;
		let u = (e, t) => {
			this.chunks.push({
				pattern: e,
				alphabet: Db(e),
				startIndex: t
			});
		}, d = this.pattern.length;
		if (d > Tb) {
			let e = 0, t = d % Tb, n = d - t;
			for (; e < n;) u(this.pattern.substr(e, Tb), e), e += Tb;
			if (t) {
				let e = d - Tb;
				u(this.pattern.substr(e), e);
			}
		} else u(this.pattern, 0);
	}
	searchIn(e) {
		let { isCaseSensitive: t, ignoreDiacritics: n, includeMatches: r } = this.options;
		if (e = t ? e : e.toLowerCase(), e = n ? Ob(e) : e, this.pattern === e) {
			let t = {
				isMatch: !0,
				score: 0
			};
			return r && (t.indices = [[0, e.length - 1]]), t;
		}
		let { location: i, distance: a, threshold: o, findAllMatches: s, minMatchCharLength: c, ignoreLocation: l } = this.options, u = [], d = 0, f = !1;
		this.chunks.forEach(({ pattern: t, alphabet: n, startIndex: p }) => {
			let { isMatch: m, score: h, indices: g } = Eb(e, t, n, {
				location: i + p,
				distance: a,
				threshold: o,
				findAllMatches: s,
				minMatchCharLength: c,
				includeMatches: r,
				ignoreLocation: l
			});
			m && (f = !0), d += h, m && g && (u = [...u, ...g]);
		});
		let p = {
			isMatch: f,
			score: f ? d / this.chunks.length : 1
		};
		return f && r && (p.indices = u), p;
	}
}, Ab = class {
	constructor(e) {
		this.pattern = e;
	}
	static isMultiMatch(e) {
		return jb(e, this.multiRegex);
	}
	static isSingleMatch(e) {
		return jb(e, this.singleRegex);
	}
	search() {}
};
function jb(e, t) {
	let n = e.match(t);
	return n ? n[1] : null;
}
var Mb = class extends Ab {
	constructor(e) {
		super(e);
	}
	static get type() {
		return "exact";
	}
	static get multiRegex() {
		return /^="(.*)"$/;
	}
	static get singleRegex() {
		return /^=(.*)$/;
	}
	search(e) {
		let t = e === this.pattern;
		return {
			isMatch: t,
			score: t ? 0 : 1,
			indices: [0, this.pattern.length - 1]
		};
	}
}, Nb = class extends Ab {
	constructor(e) {
		super(e);
	}
	static get type() {
		return "inverse-exact";
	}
	static get multiRegex() {
		return /^!"(.*)"$/;
	}
	static get singleRegex() {
		return /^!(.*)$/;
	}
	search(e) {
		let t = e.indexOf(this.pattern) === -1;
		return {
			isMatch: t,
			score: t ? 0 : 1,
			indices: [0, e.length - 1]
		};
	}
}, Pb = class extends Ab {
	constructor(e) {
		super(e);
	}
	static get type() {
		return "prefix-exact";
	}
	static get multiRegex() {
		return /^\^"(.*)"$/;
	}
	static get singleRegex() {
		return /^\^(.*)$/;
	}
	search(e) {
		let t = e.startsWith(this.pattern);
		return {
			isMatch: t,
			score: t ? 0 : 1,
			indices: [0, this.pattern.length - 1]
		};
	}
}, Fb = class extends Ab {
	constructor(e) {
		super(e);
	}
	static get type() {
		return "inverse-prefix-exact";
	}
	static get multiRegex() {
		return /^!\^"(.*)"$/;
	}
	static get singleRegex() {
		return /^!\^(.*)$/;
	}
	search(e) {
		let t = !e.startsWith(this.pattern);
		return {
			isMatch: t,
			score: t ? 0 : 1,
			indices: [0, e.length - 1]
		};
	}
}, Ib = class extends Ab {
	constructor(e) {
		super(e);
	}
	static get type() {
		return "suffix-exact";
	}
	static get multiRegex() {
		return /^"(.*)"\$$/;
	}
	static get singleRegex() {
		return /^(.*)\$$/;
	}
	search(e) {
		let t = e.endsWith(this.pattern);
		return {
			isMatch: t,
			score: t ? 0 : 1,
			indices: [e.length - this.pattern.length, e.length - 1]
		};
	}
}, Lb = class extends Ab {
	constructor(e) {
		super(e);
	}
	static get type() {
		return "inverse-suffix-exact";
	}
	static get multiRegex() {
		return /^!"(.*)"\$$/;
	}
	static get singleRegex() {
		return /^!(.*)\$$/;
	}
	search(e) {
		let t = !e.endsWith(this.pattern);
		return {
			isMatch: t,
			score: t ? 0 : 1,
			indices: [0, e.length - 1]
		};
	}
}, Rb = class extends Ab {
	constructor(e, { location: t = W.location, threshold: n = W.threshold, distance: r = W.distance, includeMatches: i = W.includeMatches, findAllMatches: a = W.findAllMatches, minMatchCharLength: o = W.minMatchCharLength, isCaseSensitive: s = W.isCaseSensitive, ignoreDiacritics: c = W.ignoreDiacritics, ignoreLocation: l = W.ignoreLocation } = {}) {
		super(e), this._bitapSearch = new kb(e, {
			location: t,
			threshold: n,
			distance: r,
			includeMatches: i,
			findAllMatches: a,
			minMatchCharLength: o,
			isCaseSensitive: s,
			ignoreDiacritics: c,
			ignoreLocation: l
		});
	}
	static get type() {
		return "fuzzy";
	}
	static get multiRegex() {
		return /^"(.*)"$/;
	}
	static get singleRegex() {
		return /^(.*)$/;
	}
	search(e) {
		return this._bitapSearch.searchIn(e);
	}
}, zb = class extends Ab {
	constructor(e) {
		super(e);
	}
	static get type() {
		return "include";
	}
	static get multiRegex() {
		return /^'"(.*)"$/;
	}
	static get singleRegex() {
		return /^'(.*)$/;
	}
	search(e) {
		let t = 0, n, r = [], i = this.pattern.length;
		for (; (n = e.indexOf(this.pattern, t)) > -1;) t = n + i, r.push([n, t - 1]);
		let a = !!r.length;
		return {
			isMatch: a,
			score: a ? 0 : 1,
			indices: r
		};
	}
}, Bb = [
	Mb,
	zb,
	Pb,
	Fb,
	Lb,
	Ib,
	Nb,
	Rb
], Vb = Bb.length, Hb = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/, Ub = "|";
function Wb(e, t = {}) {
	return e.split(Ub).map((e) => {
		let n = e.trim().split(Hb).filter((e) => e && !!e.trim()), r = [];
		for (let e = 0, i = n.length; e < i; e += 1) {
			let i = n[e], a = !1, o = -1;
			for (; !a && ++o < Vb;) {
				let e = Bb[o], n = e.isMultiMatch(i);
				n && (r.push(new e(n, t)), a = !0);
			}
			if (!a) for (o = -1; ++o < Vb;) {
				let e = Bb[o], n = e.isSingleMatch(i);
				if (n) {
					r.push(new e(n, t));
					break;
				}
			}
		}
		return r;
	});
}
var Gb = new Set([Rb.type, zb.type]), Kb = class {
	constructor(e, { isCaseSensitive: t = W.isCaseSensitive, ignoreDiacritics: n = W.ignoreDiacritics, includeMatches: r = W.includeMatches, minMatchCharLength: i = W.minMatchCharLength, ignoreLocation: a = W.ignoreLocation, findAllMatches: o = W.findAllMatches, location: s = W.location, threshold: c = W.threshold, distance: l = W.distance } = {}) {
		this.query = null, this.options = {
			isCaseSensitive: t,
			ignoreDiacritics: n,
			includeMatches: r,
			minMatchCharLength: i,
			findAllMatches: o,
			ignoreLocation: a,
			location: s,
			threshold: c,
			distance: l
		}, e = t ? e : e.toLowerCase(), e = n ? Ob(e) : e, this.pattern = e, this.query = Wb(this.pattern, this.options);
	}
	static condition(e, t) {
		return t.useExtendedSearch;
	}
	searchIn(e) {
		let t = this.query;
		if (!t) return {
			isMatch: !1,
			score: 1
		};
		let { includeMatches: n, isCaseSensitive: r, ignoreDiacritics: i } = this.options;
		e = r ? e : e.toLowerCase(), e = i ? Ob(e) : e;
		let a = 0, o = [], s = 0;
		for (let r = 0, i = t.length; r < i; r += 1) {
			let i = t[r];
			o.length = 0, a = 0;
			for (let t = 0, r = i.length; t < r; t += 1) {
				let r = i[t], { isMatch: c, indices: l, score: u } = r.search(e);
				if (c) {
					if (a += 1, s += u, n) {
						let e = r.constructor.type;
						Gb.has(e) ? o = [...o, ...l] : o.push(l);
					}
				} else {
					s = 0, a = 0, o.length = 0;
					break;
				}
			}
			if (a) {
				let e = {
					isMatch: !0,
					score: s / a
				};
				return n && (e.indices = o), e;
			}
		}
		return {
			isMatch: !1,
			score: 1
		};
	}
}, qb = [];
function Jb(...e) {
	qb.push(...e);
}
function Yb(e, t) {
	for (let n = 0, r = qb.length; n < r; n += 1) {
		let r = qb[n];
		if (r.condition(e, t)) return new r(e, t);
	}
	return new kb(e, t);
}
var Xb = {
	AND: "$and",
	OR: "$or"
}, Zb = {
	PATH: "$path",
	PATTERN: "$val"
}, Qb = (e) => !!(e[Xb.AND] || e[Xb.OR]), $b = (e) => !!e[Zb.PATH], ex = (e) => !Gy(e) && Qy(e) && !Qb(e), tx = (e) => ({ [Xb.AND]: Object.keys(e).map((t) => ({ [t]: e[t] })) });
function nx(e, t, { auto: n = !0 } = {}) {
	let r = (e) => {
		let i = Object.keys(e), a = $b(e);
		if (!a && i.length > 1 && !Qb(e)) return r(tx(e));
		if (ex(e)) {
			let r = a ? e[Zb.PATH] : i[0], o = a ? e[Zb.PATTERN] : e[r];
			if (!Yy(o)) throw Error(ib(r));
			let s = {
				keyId: fb(r),
				pattern: o
			};
			return n && (s.searcher = Yb(o, t)), s;
		}
		let o = {
			children: [],
			operator: i[0]
		};
		return i.forEach((t) => {
			let n = e[t];
			Gy(n) && n.forEach((e) => {
				o.children.push(r(e));
			});
		}), o;
	};
	return Qb(e) || (e = tx(e)), r(e);
}
function rx(e, { ignoreFieldNorm: t = W.ignoreFieldNorm }) {
	e.forEach((e) => {
		let n = 1;
		e.matches.forEach(({ key: e, norm: r, score: i }) => {
			let a = e ? e.weight : null;
			n *= (i === 0 && a ? 2 ** -52 : i) ** +((a || 1) * (t ? 1 : r));
		}), e.score = n;
	});
}
function ix(e, t) {
	let n = e.matches;
	t.matches = [], eb(n) && n.forEach((e) => {
		if (!eb(e.indices) || !e.indices.length) return;
		let { indices: n, value: r } = e, i = {
			indices: n,
			value: r
		};
		e.key && (i.key = e.key.src), e.idx > -1 && (i.refIndex = e.idx), t.matches.push(i);
	});
}
function ax(e, t) {
	t.score = e.score;
}
function ox(e, t, { includeMatches: n = W.includeMatches, includeScore: r = W.includeScore } = {}) {
	let i = [];
	return n && i.push(ix), r && i.push(ax), e.map((e) => {
		let { idx: n } = e, r = {
			item: t[n],
			refIndex: n
		};
		return i.length && i.forEach((t) => {
			t(e, r);
		}), r;
	});
}
var sx = class {
	constructor(e, t = {}, n) {
		this.options = {
			...W,
			...t
		}, this.options.useExtendedSearch, this._keyStore = new lb(this.options.keys), this.setCollection(e, n);
	}
	setCollection(e, t) {
		if (this._docs = e, t && !(t instanceof bb)) throw Error(rb);
		this._myIndex = t || xb(this.options.keys, this._docs, {
			getFn: this.options.getFn,
			fieldNormWeight: this.options.fieldNormWeight
		});
	}
	add(e) {
		eb(e) && (this._docs.push(e), this._myIndex.add(e));
	}
	remove(e = () => !1) {
		let t = [];
		for (let n = 0, r = this._docs.length; n < r; n += 1) {
			let i = this._docs[n];
			e(i, n) && (this.removeAt(n), --n, --r, t.push(i));
		}
		return t;
	}
	removeAt(e) {
		this._docs.splice(e, 1), this._myIndex.removeAt(e);
	}
	getIndex() {
		return this._myIndex;
	}
	search(e, { limit: t = -1 } = {}) {
		let { includeMatches: n, includeScore: r, shouldSort: i, sortFn: a, ignoreFieldNorm: o } = this.options, s = Yy(e) ? Yy(this._docs[0]) ? this._searchStringList(e) : this._searchObjectList(e) : this._searchLogical(e);
		return rx(s, { ignoreFieldNorm: o }), i && s.sort(a), Xy(t) && t > -1 && (s = s.slice(0, t)), ox(s, this._docs, {
			includeMatches: n,
			includeScore: r
		});
	}
	_searchStringList(e) {
		let t = Yb(e, this.options), { records: n } = this._myIndex, r = [];
		return n.forEach(({ v: e, i: n, n: i }) => {
			if (!eb(e)) return;
			let { isMatch: a, score: o, indices: s } = t.searchIn(e);
			a && r.push({
				item: e,
				idx: n,
				matches: [{
					score: o,
					value: e,
					norm: i,
					indices: s
				}]
			});
		}), r;
	}
	_searchLogical(e) {
		let t = nx(e, this.options), n = (e, t, r) => {
			if (!e.children) {
				let { keyId: n, searcher: i } = e, a = this._findMatches({
					key: this._keyStore.get(n),
					value: this._myIndex.getValueForItemAtKeyId(t, n),
					searcher: i
				});
				return a && a.length ? [{
					idx: r,
					item: t,
					matches: a
				}] : [];
			}
			let i = [];
			for (let a = 0, o = e.children.length; a < o; a += 1) {
				let o = e.children[a], s = n(o, t, r);
				if (s.length) i.push(...s);
				else if (e.operator === Xb.AND) return [];
			}
			return i;
		}, r = this._myIndex.records, i = {}, a = [];
		return r.forEach(({ $: e, i: r }) => {
			if (eb(e)) {
				let o = n(t, e, r);
				o.length && (i[r] || (i[r] = {
					idx: r,
					item: e,
					matches: []
				}, a.push(i[r])), o.forEach(({ matches: e }) => {
					i[r].matches.push(...e);
				}));
			}
		}), a;
	}
	_searchObjectList(e) {
		let t = Yb(e, this.options), { keys: n, records: r } = this._myIndex, i = [];
		return r.forEach(({ $: e, i: r }) => {
			if (!eb(e)) return;
			let a = [];
			n.forEach((n, r) => {
				a.push(...this._findMatches({
					key: n,
					value: e[r],
					searcher: t
				}));
			}), a.length && i.push({
				idx: r,
				item: e,
				matches: a
			});
		}), i;
	}
	_findMatches({ key: e, value: t, searcher: n }) {
		if (!eb(t)) return [];
		let r = [];
		if (Gy(t)) t.forEach(({ v: t, i, n: a }) => {
			if (!eb(t)) return;
			let { isMatch: o, score: s, indices: c } = n.searchIn(t);
			o && r.push({
				score: s,
				key: e,
				value: t,
				idx: i,
				norm: a,
				indices: c
			});
		});
		else {
			let { v: i, n: a } = t, { isMatch: o, score: s, indices: c } = n.searchIn(i);
			o && r.push({
				score: s,
				key: e,
				value: i,
				norm: a,
				indices: c
			});
		}
		return r;
	}
};
sx.version = "7.1.0", sx.createIndex = xb, sx.parseIndex = Sb, sx.config = W, sx.parseQuery = nx, Jb(Kb);
//#endregion
//#region src/shared/components/IconPicker/index.tsx
var cx = new sx(/* @__PURE__ */ "10k.10mp.11mp.123.12mp.13mp.14mp.15mp.16mp.17mp.18_up_rating.18mp.19mp.1k.1k_plus.1x_mobiledata.20mp.21mp.22mp.23mp.24mp.2k.2k_plus.2mp.30fps.30fps_select.360.3d_rotation.3g_mobiledata.3k.3k_plus.3mp.3p.4g_mobiledata.4g_plus_mobiledata.4k.4k_plus.4mp.5g.5k.5k_plus.5mp.60fps.60fps_select.6_ft_apart.6k.6k_plus.6mp.7k.7k_plus.7mp.8k.8k_plus.8mp.9k.9k_plus.9mp.abc.ac_unit.access_alarm.access_alarms.access_time.access_time_filled.accessibility.accessibility_new.accessible.accessible_forward.account_balance.account_balance_wallet.account_box.account_circle.account_tree.ad_units.adb.add.add_a_photo.add_alarm.add_alert.add_box.add_business.add_card.add_chart.add_circle.add_circle_outline.add_comment.add_home.add_home_work.add_ic_call.add_link.add_location.add_location_alt.add_moderator.add_photo_alternate.add_reaction.add_road.add_shopping_cart.add_task.add_to_drive.add_to_home_screen.add_to_photos.add_to_queue.addchart.adf_scanner.adjust.admin_panel_settings.ads_click.agriculture.air.airline_seat_flat.airline_seat_flat_angled.airline_seat_individual_suite.airline_seat_legroom_extra.airline_seat_legroom_normal.airline_seat_legroom_reduced.airline_seat_recline_extra.airline_seat_recline_normal.airline_stops.airlines.airplane_ticket.airplanemode_active.airplanemode_inactive.airplay.airport_shuttle.alarm.alarm_add.alarm_off.alarm_on.album.align_horizontal_center.align_horizontal_left.align_horizontal_right.align_vertical_bottom.align_vertical_center.align_vertical_top.all_inbox.all_inclusive.all_out.alt_route.alternate_email.analytics.anchor.android.animation.announcement.aod.apartment.api.app_blocking.app_registration.app_settings_alt.app_shortcut.approval.apps.apps_outage.architecture.archive.area_chart.arrow_back.arrow_back_ios.arrow_back_ios_new.arrow_circle_down.arrow_circle_left.arrow_circle_right.arrow_circle_up.arrow_downward.arrow_drop_down.arrow_drop_down_circle.arrow_drop_up.arrow_forward.arrow_forward_ios.arrow_left.arrow_outward.arrow_right.arrow_right_alt.arrow_upward.art_track.article.aspect_ratio.assessment.assignment.assignment_ind.assignment_late.assignment_return.assignment_returned.assignment_turned_in.assist_walker.assistant.assistant_direction.assistant_photo.assured_workload.atm.attach_email.attach_file.attach_money.attachment.attractions.attribution.audio_file.audiotrack.auto_awesome.auto_awesome_mosaic.auto_awesome_motion.auto_delete.auto_fix_high.auto_fix_normal.auto_fix_off.auto_graph.auto_mode.auto_stories.autofps_select.autorenew.av_timer.baby_changing_station.back_hand.backpack.backspace.backup.backup_table.badge.bakery_dining.balance.balcony.ballot.bar_chart.batch_prediction.bathroom.bathtub.battery_0_bar.battery_1_bar.battery_2_bar.battery_3_bar.battery_4_bar.battery_5_bar.battery_6_bar.battery_alert.battery_charging_full.battery_full.battery_saver.battery_std.battery_unknown.beach_access.bed.bedroom_baby.bedroom_child.bedroom_parent.bedtime.bedtime_off.beenhere.bento.bike_scooter.biotech.blender.blind.blinds.blinds_closed.block.bloodtype.bluetooth.bluetooth_audio.bluetooth_connected.bluetooth_disabled.bluetooth_drive.bluetooth_searching.blur_circular.blur_linear.blur_off.blur_on.bolt.book.book_online.bookmark.bookmark_add.bookmark_added.bookmark_border.bookmark_remove.bookmarks.border_all.border_bottom.border_clear.border_color.border_horizontal.border_inner.border_left.border_outer.border_right.border_style.border_top.border_vertical.boy.branding_watermark.breakfast_dining.brightness_1.brightness_2.brightness_3.brightness_4.brightness_5.brightness_6.brightness_7.brightness_auto.brightness_high.brightness_low.brightness_medium.broadcast_on_home.broadcast_on_personal.broken_image.browse_gallery.browser_not_supported.browser_updated.brunch_dining.brush.bubble_chart.bug_report.build.build_circle.bungalow.burst_mode.bus_alert.business.business_center.cabin.cable.cached.cake.calculate.calendar_month.calendar_today.calendar_view_day.calendar_view_month.calendar_view_week.call.call_end.call_made.call_merge.call_missed.call_missed_outgoing.call_received.call_split.call_to_action.camera.camera_alt.camera_enhance.camera_front.camera_indoor.camera_outdoor.camera_rear.camera_roll.cameraswitch.campaign.cancel.cancel_presentation.cancel_schedule_send.candlestick_chart.car_crash.car_rental.car_repair.card_giftcard.card_membership.card_travel.carpenter.cases.casino.cast.cast_connected.cast_for_education.castle.catching_pokemon.category.celebration.cell_tower.cell_wifi.center_focus_strong.center_focus_weak.chair.chair_alt.chalet.change_circle.change_history.charging_station.chat.chat_bubble.chat_bubble_outline.check.check_box.check_box_outline_blank.check_circle.check_circle_outline.checklist.checklist_rtl.checkroom.chevron_left.chevron_right.child_care.child_friendly.chrome_reader_mode.church.circle.circle_notifications.class.clean_hands.cleaning_services.clear.clear_all.close.close_fullscreen.closed_caption.closed_caption_disabled.closed_caption_off.cloud.cloud_circle.cloud_done.cloud_download.cloud_off.cloud_queue.cloud_sync.cloud_upload.co2.co_present.code.code_off.coffee.coffee_maker.collections.collections_bookmark.color_lens.colorize.comment.comment_bank.comments_disabled.commit.commute.compare.compare_arrows.compass_calibration.compost.compress.computer.confirmation_number.connect_without_contact.connected_tv.connecting_airports.construction.contact_emergency.contact_mail.contact_page.contact_phone.contact_support.contactless.contacts.content_copy.content_cut.content_paste.content_paste_go.content_paste_off.content_paste_search.contrast.control_camera.control_point.control_point_duplicate.cookie.copy_all.copyright.coronavirus.corporate_fare.cottage.countertops.create.create_new_folder.credit_card.credit_card_off.credit_score.crib.crisis_alert.crop.crop_16_9.crop_3_2.crop_5_4.crop_7_5.crop_din.crop_free.crop_landscape.crop_original.crop_portrait.crop_rotate.crop_square.cruelty_free.css.currency_bitcoin.currency_exchange.currency_franc.currency_lira.currency_pound.currency_ruble.currency_rupee.currency_yen.currency_yuan.curtains.curtains_closed.cyclone.dangerous.dark_mode.dashboard.dashboard_customize.data_array.data_exploration.data_object.data_saver_off.data_saver_on.data_thresholding.data_usage.dataset.dataset_linked.date_range.deblur.deck.dehaze.delete.delete_forever.delete_outline.delete_sweep.delivery_dining.density_large.density_medium.density_small.departure_board.description.deselect.design_services.desk.desktop_access_disabled.desktop_mac.desktop_windows.details.developer_board.developer_board_off.developer_mode.device_hub.device_thermostat.device_unknown.devices.devices_fold.devices_other.dialer_sip.dialpad.diamond.difference.dining.dinner_dining.directions.directions_bike.directions_boat.directions_boat_filled.directions_bus.directions_bus_filled.directions_car.directions_car_filled.directions_off.directions_railway.directions_railway_filled.directions_run.directions_subway.directions_subway_filled.directions_transit.directions_transit_filled.directions_walk.dirty_lens.disabled_by_default.disabled_visible.disc_full.discount.display_settings.diversity_1.diversity_2.diversity_3.dns.do_disturb.do_disturb_alt.do_disturb_off.do_disturb_on.do_not_disturb.do_not_disturb_alt.do_not_disturb_off.do_not_disturb_on.do_not_disturb_on_total_silence.do_not_step.do_not_touch.dock.document_scanner.domain.domain_add.domain_disabled.domain_verification.done.done_all.done_outline.donut_large.donut_small.door_back.door_front.door_sliding.doorbell.double_arrow.downhill_skiing.download.download_done.download_for_offline.downloading.drafts.drag_handle.drag_indicator.draw.drive_eta.drive_file_move.drive_file_move_rtl.drive_file_rename_outline.drive_folder_upload.dry.dry_cleaning.duo.dvr.dynamic_feed.dynamic_form.e_mobiledata.earbuds.earbuds_battery.east.edgesensor_high.edgesensor_low.edit.edit_attributes.edit_calendar.edit_location.edit_location_alt.edit_note.edit_notifications.edit_off.edit_road.egg.egg_alt.eject.elderly.elderly_woman.electric_bike.electric_bolt.electric_car.electric_meter.electric_moped.electric_rickshaw.electric_scooter.electrical_services.elevator.email.emergency.emergency_recording.emergency_share.emoji_emotions.emoji_events.emoji_food_beverage.emoji_nature.emoji_objects.emoji_people.emoji_symbols.emoji_transportation.energy_savings_leaf.engineering.enhanced_encryption.equalizer.error.error_outline.escalator.escalator_warning.euro.euro_symbol.ev_station.event.event_available.event_busy.event_note.event_repeat.event_seat.exit_to_app.expand.expand_circle_down.expand_less.expand_more.explicit.explore.explore_off.exposure.exposure_neg_1.exposure_neg_2.exposure_plus_1.exposure_plus_2.exposure_zero.extension.extension_off.face.face_2.face_3.face_4.face_5.face_6.face_retouching_natural.face_retouching_off.fact_check.factory.family_restroom.fast_forward.fast_rewind.fastfood.favorite.favorite_border.fax.featured_play_list.featured_video.feed.feedback.female.fence.festival.fiber_dvr.fiber_manual_record.fiber_new.fiber_pin.fiber_smart_record.file_copy.file_download.file_download_done.file_download_off.file_open.file_present.file_upload.filter.filter_1.filter_2.filter_3.filter_4.filter_5.filter_6.filter_7.filter_8.filter_9.filter_9_plus.filter_alt.filter_alt_off.filter_b_and_w.filter_center_focus.filter_drama.filter_frames.filter_hdr.filter_list.filter_list_off.filter_none.filter_tilt_shift.filter_vintage.find_in_page.find_replace.fingerprint.fire_extinguisher.fire_hydrant_alt.fire_truck.fireplace.first_page.fit_screen.fitbit.fitness_center.flag.flag_circle.flaky.flare.flash_auto.flash_off.flash_on.flashlight_off.flashlight_on.flatware.flight.flight_class.flight_land.flight_takeoff.flip.flip_camera_android.flip_camera_ios.flip_to_back.flip_to_front.flood.fluorescent.flutter_dash.fmd_bad.fmd_good.folder.folder_copy.folder_delete.folder_off.folder_open.folder_shared.folder_special.folder_zip.follow_the_signs.font_download.font_download_off.food_bank.forest.fork_left.fork_right.format_align_center.format_align_justify.format_align_left.format_align_right.format_bold.format_clear.format_color_fill.format_color_reset.format_color_text.format_indent_decrease.format_indent_increase.format_italic.format_line_spacing.format_list_bulleted.format_list_numbered.format_list_numbered_rtl.format_overline.format_paint.format_quote.format_shapes.format_size.format_strikethrough.format_textdirection_l_to_r.format_textdirection_r_to_l.format_underlined.fort.forum.forward.forward_10.forward_30.forward_5.forward_to_inbox.foundation.free_breakfast.free_cancellation.front_hand.fullscreen.fullscreen_exit.functions.g_mobiledata.g_translate.gamepad.games.garage.gas_meter.gavel.generating_tokens.gesture.get_app.gif.gif_box.girl.gite.golf_course.gpp_bad.gpp_good.gpp_maybe.gps_fixed.gps_not_fixed.gps_off.grade.gradient.grading.grain.graphic_eq.grass.grid_3x3.grid_4x4.grid_goldenratio.grid_off.grid_on.grid_view.group.group_add.group_off.group_remove.group_work.groups.groups_2.groups_3.h_mobiledata.h_plus_mobiledata.hail.handshake.handyman.hardware.hd.hdr_auto.hdr_auto_select.hdr_enhanced_select.hdr_off.hdr_off_select.hdr_on.hdr_on_select.hdr_plus.hdr_strong.hdr_weak.headphones.headphones_battery.headset.headset_mic.headset_off.healing.health_and_safety.hearing.hearing_disabled.heart_broken.heat_pump.height.help.help_center.help_outline.hevc.hexagon.hide_image.hide_source.high_quality.highlight.highlight_alt.highlight_off.hiking.history.history_edu.history_toggle_off.hive.hls.hls_off.holiday_village.home.home_max.home_mini.home_repair_service.home_work.horizontal_distribute.horizontal_rule.horizontal_split.hot_tub.hotel.hotel_class.hourglass_bottom.hourglass_disabled.hourglass_empty.hourglass_full.hourglass_top.house.house_siding.houseboat.how_to_reg.how_to_vote.html.http.https.hub.hvac.ice_skating.icecream.image.image_aspect_ratio.image_not_supported.image_search.imagesearch_roller.import_contacts.import_export.important_devices.inbox.incomplete_circle.indeterminate_check_box.info.input.insert_chart.insert_chart_outlined.insert_comment.insert_drive_file.insert_emoticon.insert_invitation.insert_link.insert_page_break.insert_photo.insights.install_desktop.install_mobile.integration_instructions.interests.interpreter_mode.inventory.inventory_2.invert_colors.invert_colors_off.ios_share.iron.iso.javascript.join_full.join_inner.join_left.join_right.kayaking.kebab_dining.key.key_off.keyboard.keyboard_alt.keyboard_arrow_down.keyboard_arrow_left.keyboard_arrow_right.keyboard_arrow_up.keyboard_backspace.keyboard_capslock.keyboard_command_key.keyboard_control_key.keyboard_double_arrow_down.keyboard_double_arrow_left.keyboard_double_arrow_right.keyboard_double_arrow_up.keyboard_hide.keyboard_option_key.keyboard_return.keyboard_tab.keyboard_voice.king_bed.kitchen.kitesurfing.label.label_important.label_off.lan.landscape.landslide.language.laptop.laptop_chromebook.laptop_mac.laptop_windows.last_page.launch.layers.layers_clear.leaderboard.leak_add.leak_remove.legend_toggle.lens.lens_blur.library_add.library_add_check.library_books.library_music.light.light_mode.lightbulb.lightbulb_circle.line_axis.line_style.line_weight.linear_scale.link.link_off.linked_camera.liquor.list.list_alt.live_help.live_tv.living.local_activity.local_airport.local_atm.local_bar.local_cafe.local_car_wash.local_convenience_store.local_dining.local_drink.local_fire_department.local_florist.local_gas_station.local_grocery_store.local_hospital.local_hotel.local_laundry_service.local_library.local_mall.local_movies.local_offer.local_parking.local_pharmacy.local_phone.local_pizza.local_play.local_police.local_post_office.local_printshop.local_see.local_shipping.local_taxi.location_city.location_disabled.location_off.location_on.location_searching.lock.lock_clock.lock_open.lock_person.lock_reset.login.logo_dev.logout.looks.looks_3.looks_4.looks_5.looks_6.looks_one.looks_two.loop.loupe.low_priority.loyalty.lte_mobiledata.lte_plus_mobiledata.luggage.lunch_dining.lyrics.macro_off.mail.mail_lock.mail_outline.male.man.man_2.man_3.man_4.manage_accounts.manage_history.manage_search.map.maps_home_work.maps_ugc.margin.mark_as_unread.mark_chat_read.mark_chat_unread.mark_email_read.mark_email_unread.mark_unread_chat_alt.markunread.markunread_mailbox.masks.maximize.media_bluetooth_off.media_bluetooth_on.mediation.medical_information.medical_services.medication.medication_liquid.meeting_room.memory.menu.menu_book.menu_open.merge.merge_type.message.mic.mic_external_off.mic_external_on.mic_none.mic_off.microwave.military_tech.minimize.minor_crash.miscellaneous_services.missed_video_call.mms.mobile_friendly.mobile_off.mobile_screen_share.mobiledata_off.mode.mode_comment.mode_edit.mode_edit_outline.mode_fan_off.mode_night.mode_of_travel.mode_standby.model_training.monetization_on.money.money_off.money_off_csred.monitor.monitor_heart.monitor_weight.monochrome_photos.mood.mood_bad.moped.more.more_horiz.more_time.more_vert.mosque.motion_photos_auto.motion_photos_off.motion_photos_on.motion_photos_pause.motion_photos_paused.mouse.move_down.move_to_inbox.move_up.movie.movie_creation.movie_filter.moving.mp.multiline_chart.multiple_stop.museum.music_note.music_off.music_video.my_location.nat.nature.nature_people.navigate_before.navigate_next.navigation.near_me.near_me_disabled.nearby_error.nearby_off.nest_cam_wired_stand.network_cell.network_check.network_locked.network_ping.network_wifi.network_wifi_1_bar.network_wifi_2_bar.network_wifi_3_bar.new_label.new_releases.newspaper.next_plan.next_week.nfc.night_shelter.nightlife.nightlight.nightlight_round.nights_stay.no_accounts.no_adult_content.no_backpack.no_cell.no_crash.no_drinks.no_encryption.no_encryption_gmailerrorred.no_flash.no_food.no_luggage.no_meals.no_meeting_room.no_photography.no_sim.no_stroller.no_transfer.noise_aware.noise_control_off.nordic_walking.north.north_east.north_west.not_accessible.not_interested.not_listed_location.not_started.note.note_add.note_alt.notes.notification_add.notification_important.notifications.notifications_active.notifications_none.notifications_off.notifications_paused.numbers.offline_bolt.offline_pin.offline_share.oil_barrel.on_device_training.ondemand_video.online_prediction.opacity.open_in_browser.open_in_full.open_in_new.open_in_new_off.open_with.other_houses.outbound.outbox.outdoor_grill.outlet.outlined_flag.output.padding.pages.pageview.paid.palette.pan_tool.pan_tool_alt.panorama.panorama_fish_eye.panorama_horizontal.panorama_horizontal_select.panorama_photosphere.panorama_photosphere_select.panorama_vertical.panorama_vertical_select.panorama_wide_angle.panorama_wide_angle_select.paragliding.park.party_mode.password.pattern.pause.pause_circle.pause_circle_filled.pause_circle_outline.pause_presentation.payment.payments.pedal_bike.pending.pending_actions.pentagon.people.people_alt.people_outline.percent.perm_camera_mic.perm_contact_calendar.perm_data_setting.perm_device_information.perm_identity.perm_media.perm_phone_msg.perm_scan_wifi.person.person_2.person_3.person_4.person_add.person_add_alt.person_add_alt_1.person_add_disabled.person_off.person_outline.person_pin.person_pin_circle.person_remove.person_remove_alt_1.person_search.personal_injury.personal_video.pest_control.pest_control_rodent.pets.phishing.phone.phone_android.phone_bluetooth_speaker.phone_callback.phone_disabled.phone_enabled.phone_forwarded.phone_iphone.phone_locked.phone_missed.phone_paused.phonelink.phonelink_erase.phonelink_lock.phonelink_off.phonelink_ring.phonelink_setup.photo.photo_album.photo_camera.photo_camera_back.photo_camera_front.photo_filter.photo_library.photo_size_select_actual.photo_size_select_large.photo_size_select_small.php.piano.piano_off.picture_as_pdf.picture_in_picture.picture_in_picture_alt.pie_chart.pie_chart_outline.pin.pin_drop.pin_end.pin_invoke.pinch.pivot_table_chart.pix.place.plagiarism.play_arrow.play_circle.play_circle_filled.play_circle_outline.play_disabled.play_for_work.play_lesson.playlist_add.playlist_add_check.playlist_add_check_circle.playlist_add_circle.playlist_play.playlist_remove.plumbing.plus_one.podcasts.point_of_sale.policy.poll.polyline.polymer.pool.portable_wifi_off.portrait.post_add.power.power_input.power_off.power_settings_new.precision_manufacturing.pregnant_woman.present_to_all.preview.price_change.price_check.print.print_disabled.priority_high.privacy_tip.private_connectivity.production_quantity_limits.propane.propane_tank.psychology.psychology_alt.public.public_off.publish.published_with_changes.punch_clock.push_pin.qr_code.qr_code_2.qr_code_scanner.query_builder.query_stats.question_answer.question_mark.queue.queue_music.queue_play_next.quickreply.quiz.r_mobiledata.radar.radio.radio_button_checked.radio_button_unchecked.railway_alert.ramen_dining.ramp_left.ramp_right.rate_review.raw_off.raw_on.read_more.real_estate_agent.receipt.receipt_long.recent_actors.recommend.record_voice_over.rectangle.recycling.redeem.redo.reduce_capacity.refresh.remember_me.remove.remove_circle.remove_circle_outline.remove_done.remove_from_queue.remove_moderator.remove_red_eye.remove_road.remove_shopping_cart.reorder.repartition.repeat.repeat_on.repeat_one.repeat_one_on.replay.replay_10.replay_30.replay_5.replay_circle_filled.reply.reply_all.report.report_gmailerrorred.report_off.report_problem.request_page.request_quote.reset_tv.restart_alt.restaurant.restaurant_menu.restore.restore_from_trash.restore_page.reviews.rice_bowl.ring_volume.rocket.rocket_launch.roller_shades.roller_shades_closed.roller_skating.roofing.room.room_preferences.room_service.rotate_90_degrees_ccw.rotate_90_degrees_cw.rotate_left.rotate_right.roundabout_left.roundabout_right.rounded_corner.route.router.rowing.rss_feed.rsvp.rtt.rule.rule_folder.run_circle.running_with_errors.rv_hookup.safety_check.safety_divider.sailing.sanitizer.satellite.satellite_alt.save.save_alt.save_as.saved_search.savings.scale.scanner.scatter_plot.schedule.schedule_send.schema.school.science.score.scoreboard.screen_lock_landscape.screen_lock_portrait.screen_lock_rotation.screen_rotation.screen_rotation_alt.screen_search_desktop.screen_share.screenshot.screenshot_monitor.scuba_diving.sd.sd_card.sd_card_alert.sd_storage.search.search_off.security.security_update.security_update_good.security_update_warning.segment.select_all.self_improvement.sell.send.send_and_archive.send_time_extension.send_to_mobile.sensor_door.sensor_occupied.sensor_window.sensors.sensors_off.sentiment_dissatisfied.sentiment_neutral.sentiment_satisfied.sentiment_satisfied_alt.sentiment_very_dissatisfied.sentiment_very_satisfied.set_meal.settings.settings_accessibility.settings_applications.settings_backup_restore.settings_bluetooth.settings_brightness.settings_cell.settings_ethernet.settings_input_antenna.settings_input_component.settings_input_composite.settings_input_hdmi.settings_input_svideo.settings_overscan.settings_phone.settings_power.settings_remote.settings_suggest.settings_system_daydream.settings_voice.severe_cold.shape_line.share.share_location.shield.shield_moon.shop.shop_2.shop_two.shopping_bag.shopping_basket.shopping_cart.shopping_cart_checkout.short_text.shortcut.show_chart.shower.shuffle.shuffle_on.shutter_speed.sick.sign_language.signal_cellular_0_bar.signal_cellular_4_bar.signal_cellular_alt.signal_cellular_alt_1_bar.signal_cellular_alt_2_bar.signal_cellular_connected_no_internet_0_bar.signal_cellular_connected_no_internet_4_bar.signal_cellular_no_sim.signal_cellular_nodata.signal_cellular_null.signal_cellular_off.signal_wifi_0_bar.signal_wifi_4_bar.signal_wifi_4_bar_lock.signal_wifi_bad.signal_wifi_connected_no_internet_4.signal_wifi_off.signal_wifi_statusbar_4_bar.signal_wifi_statusbar_connected_no_internet_4.signal_wifi_statusbar_null.signpost.sim_card.sim_card_alert.sim_card_download.single_bed.sip.skateboarding.skip_next.skip_previous.sledding.slideshow.slow_motion_video.smart_button.smart_display.smart_screen.smart_toy.smartphone.smoke_free.smoking_rooms.sms.sms_failed.snippet_folder.snooze.snowboarding.snowmobile.snowshoeing.soap.social_distance.solar_power.sort.sort_by_alpha.sos.soup_kitchen.source.south.south_america.south_east.south_west.spa.space_bar.space_dashboard.spatial_audio.spatial_audio_off.spatial_tracking.speaker.speaker_group.speaker_notes.speaker_notes_off.speaker_phone.speed.spellcheck.splitscreen.spoke.sports.sports_bar.sports_baseball.sports_basketball.sports_cricket.sports_esports.sports_football.sports_golf.sports_gymnastics.sports_handball.sports_hockey.sports_kabaddi.sports_martial_arts.sports_mma.sports_motorsports.sports_rugby.sports_score.sports_soccer.sports_tennis.sports_volleyball.square.square_foot.ssid_chart.stacked_bar_chart.stacked_line_chart.stadium.stairs.star.star_border.star_border_purple500.star_half.star_outline.star_purple500.star_rate.stars.start.stay_current_landscape.stay_current_portrait.stay_primary_landscape.stay_primary_portrait.sticky_note_2.stop.stop_circle.stop_screen_share.storage.store.store_mall_directory.storefront.storm.straight.straighten.stream.streetview.strikethrough_s.stroller.style.subdirectory_arrow_left.subdirectory_arrow_right.subject.subscript.subscriptions.subtitles.subtitles_off.subway.summarize.superscript.supervised_user_circle.supervisor_account.support.support_agent.surfing.surround_sound.swap_calls.swap_horiz.swap_horizontal_circle.swap_vert.swap_vertical_circle.swipe.swipe_down.swipe_down_alt.swipe_left.swipe_left_alt.swipe_right.swipe_right_alt.swipe_up.swipe_up_alt.swipe_vertical.switch_access_shortcut.switch_access_shortcut_add.switch_account.switch_camera.switch_left.switch_right.switch_video.synagogue.sync.sync_alt.sync_disabled.sync_lock.sync_problem.system_security_update.system_security_update_good.system_security_update_warning.system_update.system_update_alt.tab.tab_unselected.table_bar.table_chart.table_restaurant.table_rows.table_view.tablet.tablet_android.tablet_mac.tag.tag_faces.takeout_dining.tap_and_play.tapas.task.task_alt.taxi_alert.temple_buddhist.temple_hindu.terminal.terrain.text_decrease.text_fields.text_format.text_increase.text_rotate_up.text_rotate_vertical.text_rotation_angledown.text_rotation_angleup.text_rotation_down.text_rotation_none.text_snippet.textsms.texture.theater_comedy.theaters.thermostat.thermostat_auto.thumb_down.thumb_down_alt.thumb_down_off_alt.thumb_up.thumb_up_alt.thumb_up_off_alt.thumbs_up_down.thunderstorm.time_to_leave.timelapse.timeline.timer.timer_10.timer_10_select.timer_3.timer_3_select.timer_off.tips_and_updates.tire_repair.title.toc.today.toggle_off.toggle_on.token.toll.tonality.topic.tornado.touch_app.tour.toys.track_changes.traffic.train.tram.transcribe.transfer_within_a_station.transform.transgender.transit_enterexit.translate.travel_explore.trending_down.trending_flat.trending_up.trip_origin.troubleshoot.try.tsunami.tty.tune.tungsten.turn_left.turn_right.turn_sharp_left.turn_sharp_right.turn_slight_left.turn_slight_right.turned_in.turned_in_not.tv.tv_off.two_wheeler.type_specimen.u_turn_left.u_turn_right.umbrella.unarchive.undo.unfold_less.unfold_less_double.unfold_more.unfold_more_double.unpublished.unsubscribe.upcoming.update.update_disabled.upgrade.upload.upload_file.usb.usb_off.vaccines.vape_free.vaping_rooms.verified.verified_user.vertical_align_bottom.vertical_align_center.vertical_align_top.vertical_distribute.vertical_shades.vertical_shades_closed.vertical_split.vibration.video_call.video_camera_back.video_camera_front.video_chat.video_file.video_label.video_library.video_settings.video_stable.videocam.videocam_off.videogame_asset.videogame_asset_off.view_agenda.view_array.view_carousel.view_column.view_comfy.view_comfy_alt.view_compact.view_compact_alt.view_cozy.view_day.view_headline.view_in_ar.view_kanban.view_list.view_module.view_quilt.view_sidebar.view_stream.view_timeline.view_week.vignette.villa.visibility.visibility_off.voice_chat.voice_over_off.voicemail.volcano.volume_down.volume_mute.volume_off.volume_up.volunteer_activism.vpn_key.vpn_key_off.vpn_lock.vrpano.wallet.wallpaper.warehouse.warning.warning_amber.wash.watch.watch_later.watch_off.water.water_damage.water_drop.waterfall_chart.waves.waving_hand.wb_auto.wb_cloudy.wb_incandescent.wb_iridescent.wb_shade.wb_sunny.wb_twilight.wc.web.web_asset.web_asset_off.web_stories.webhook.weekend.west.whatshot.wheelchair_pickup.where_to_vote.widgets.width_full.width_normal.width_wide.wifi.wifi_1_bar.wifi_2_bar.wifi_calling.wifi_calling_3.wifi_channel.wifi_find.wifi_lock.wifi_off.wifi_password.wifi_protected_setup.wifi_tethering.wifi_tethering_error.wifi_tethering_off.wind_power.window.wine_bar.woman.woman_2.work.work_history.work_off.work_outline.workspace_premium.workspaces.wrap_text.wrong_location.wysiwyg.yard.youtube_searched_for.zoom_in.zoom_in_map.zoom_out.zoom_out_map".split("."), {
	threshold: .3,
	minMatchCharLength: 2
});
function lx({ defaultIcons: e, selectedIcon: t, onSelect: n, autoFocus: r = !1, itemAs: i = "button" }) {
	let [a, o] = (0, I.useState)(""), s = (0, I.useMemo)(() => a ? cx.search(a).map((e) => e.item) : e, [a, e]);
	return /* @__PURE__ */ (0, F.jsxs)("div", {
		className: "icon-picker",
		children: [/* @__PURE__ */ (0, F.jsx)(Mu, { children: /* @__PURE__ */ (0, F.jsx)(H.Group, {
			size: "sm",
			children: /* @__PURE__ */ (0, F.jsx)(H.Control, {
				autoFocus: r,
				type: "text",
				className: "m-0",
				placeholder: "Search icons",
				"aria-label": "Search icons",
				trailingElement: /* @__PURE__ */ (0, F.jsx)("span", {
					className: "material-icons-outlined medium text-gray-500",
					children: "search"
				}),
				value: a,
				onChange: (e) => o(e.currentTarget.value)
			})
		}) }), /* @__PURE__ */ (0, F.jsx)("div", {
			className: "icon-list d-flex flex-wrap justify-items-start",
			children: s.map((e) => /* @__PURE__ */ (0, F.jsx)(i, {
				as: i === "button" ? void 0 : "button",
				eventKey: i === "button" ? void 0 : e,
				type: "button",
				className: `icon-symbol p-2 ${e === t ? "active" : ""}`,
				title: e,
				"aria-label": e,
				"aria-pressed": e === t,
				onClick: () => n(e),
				children: /* @__PURE__ */ (0, F.jsx)("span", {
					className: "material-icons-outlined",
					"aria-hidden": "true",
					children: e
				})
			}, e))
		})]
	});
}
//#endregion
//#region src/card/common/studio-ui/secondary-content/IconSelector/index.tsx
var ux = (0, I.forwardRef)(({ variant: e, ...t }, n) => {
	let { onClick: r, ...i } = t, a = (0, I.useRef)(null);
	return (0, I.useEffect)(() => {
		let e = a.current;
		if (!e || !r) return;
		let t = r;
		return e.addEventListener("click", t), () => e.removeEventListener("click", t);
	}, [r]), /* @__PURE__ */ (0, F.jsx)("button", {
		ref: (0, I.useCallback)((e) => {
			a.current = e, typeof n == "function" ? n(e) : n && (n.current = e);
		}, [n]),
		...i,
		className: [i.className, e && `btn btn-${e}`].filter(Boolean).join(" "),
		type: "button"
	});
});
ux.displayName = "IconSelectorToggle";
var dx = (0, I.forwardRef)(({ show: e, close: t, alignRight: n, ...r }, i) => /* @__PURE__ */ (0, F.jsx)("div", {
	ref: i,
	...r
}));
dx.displayName = "IconSelectorMenu";
var fx = /* @__PURE__ */ "search.home.info.check_circle.delete.visibility.book.favorite.description.lock.schedule.language.help_outline.verified.face.thumb_up.filter_alt.dashboard.event.fingerprint.list.help.paid.assignment.question_answer.article.lightbulb.credit_card.account_balance.trending_up".split(".");
function px({ currentIcon: e, onIconSelected: t }) {
	let [n, r] = (0, I.useState)(0), i = (0, I.useId)();
	return /* @__PURE__ */ (0, F.jsxs)(tu, {
		onToggle: (e) => {
			e && r((e) => e + 1);
		},
		children: [/* @__PURE__ */ (0, F.jsx)(tu.Toggle, {
			as: ux,
			variant: e ? "outline-dark" : "success",
			className: "d-block icon-selector pb-1",
			id: i,
			children: /* @__PURE__ */ (0, F.jsx)("span", {
				className: "material-icons-outlined mb-0",
				children: e || "add"
			})
		}), /* @__PURE__ */ (0, F.jsx)(tu.Menu, {
			as: dx,
			className: "p-0 border-0",
			popperConfig: { strategy: "fixed" },
			children: /* @__PURE__ */ (0, F.jsx)("div", {
				className: "icon-list-popup border rounded-sm shadow",
				children: /* @__PURE__ */ (0, F.jsx)(lx, {
					autoFocus: !0,
					defaultIcons: fx,
					selectedIcon: e,
					onSelect: t,
					itemAs: tu.Item
				}, n)
			})
		})]
	});
}
//#endregion
//#region src/card/common/studio-ui/secondary-content/HoverListItemForm.tsx
function mx({ cardIndex: e, itemIndex: t, onRemove: n }) {
	let { values: r, handleChange: i, setFieldValue: a } = oy(), o = `cards[${e}].secondaryContent.items[${t}]`, s = r.cards[e].secondaryContent.items[t];
	return /* @__PURE__ */ (0, F.jsx)(Wy, {
		heading: `List Item ${t + 1}`,
		index: t,
		onRemoveItem: n,
		children: /* @__PURE__ */ (0, F.jsxs)("div", {
			className: "p-2",
			children: [/* @__PURE__ */ (0, F.jsxs)(H.Group, { children: [/* @__PURE__ */ (0, F.jsx)(H.Label, {
				className: "x-small",
				children: "Main Text"
			}), /* @__PURE__ */ (0, F.jsx)(H.Control, {
				as: "textarea",
				autoResize: !0,
				name: `${o}.description`,
				value: s.description,
				onChange: i
			})] }), /* @__PURE__ */ (0, F.jsxs)("div", {
				className: "d-flex",
				children: [/* @__PURE__ */ (0, F.jsxs)(H.Group, {
					className: "flex-grow-0",
					children: [/* @__PURE__ */ (0, F.jsx)(H.Label, {
						className: "x-small",
						children: "Icon"
					}), /* @__PURE__ */ (0, F.jsx)(px, {
						currentIcon: s.icon || "",
						onIconSelected: (e) => a(`${o}.icon`, e)
					})]
				}), /* @__PURE__ */ (0, F.jsxs)(H.Group, {
					className: "flex-grow-1 ml-2",
					children: [/* @__PURE__ */ (0, F.jsx)(H.Label, {
						className: "x-small",
						children: "Hover Text"
					}), /* @__PURE__ */ (0, F.jsx)(H.Control, {
						as: "textarea",
						autoResize: !0,
						name: `${o}.hoverContent`,
						value: s.hoverContent,
						onChange: i
					})]
				})]
			})]
		})
	});
}
function hx({ cardIndex: e }) {
	return /* @__PURE__ */ (0, F.jsx)(zy, {
		name: `cards[${e}].secondaryContent.items`,
		children: ({ push: t, remove: n, form: r }) => {
			let i = r.values.cards[e].secondaryContent.items;
			return /* @__PURE__ */ (0, F.jsxs)("div", { children: [i.map((t, r) => /* @__PURE__ */ (0, F.jsx)(mx, {
				cardIndex: e,
				itemIndex: r,
				onRemove: () => n(r)
			}, r)), /* @__PURE__ */ (0, F.jsx)(O, {
				variant: "success",
				onClick: () => t({
					description: "",
					hoverContent: "",
					icon: ""
				}),
				children: "Add List Item"
			})] });
		}
	});
}
//#endregion
//#region src/shared/components/FilePickerModal.tsx
var gx = ({ fileTypes: e, onFileSelect: t, onError: n, onClose: r }) => {
	let [i, a] = (0, I.useState)(null), { element: o } = (0, I.useContext)(C), s = wp(), c = (0, I.useRef)(null), l = o.getAttribute("data-usage-id");
	if ((0, I.useEffect)(() => {
		let e = async ({ data: e, source: t }) => {
			if (t === c.current?.contentWindow && e.type === "org.openedx.assets.selected.v1") try {
				e.data.length === 0 ? a(null) : a(e.data[0].externalUrl), n(null);
			} catch {
				n("Invalid response from server.");
			}
		};
		return window.addEventListener("message", e), () => window.removeEventListener("message", e);
	}, [n]), !s?.file_picker_url) return null;
	let u = new URL(s.file_picker_url);
	return u.searchParams.set("multiSelect", "false"), u.searchParams.set("embedded", "true"), e && u.searchParams.set("fileTypes", e.join(",")), u.searchParams.set("usageKey", l), /* @__PURE__ */ (0, F.jsx)(hu, {
		title: "File Picker",
		size: "xl",
		isOpen: !0,
		className: "bg-light-200",
		onClose: r,
		footerNode: /* @__PURE__ */ (0, F.jsxs)(Oe, { children: [
			/* @__PURE__ */ (0, F.jsx)(Oe.Spacer, {}),
			/* @__PURE__ */ (0, F.jsx)(O, {
				variant: "tertiary",
				onClick: r,
				children: "Cancel"
			}),
			/* @__PURE__ */ (0, F.jsx)(O, {
				disabled: !i,
				onClick: async () => {
					await t(i);
				},
				children: "Use Selected File"
			})
		] }),
		isOverflowVisible: !0,
		children: /* @__PURE__ */ (0, F.jsx)("iframe", {
			title: "File Picker",
			ref: c,
			width: "100%",
			height: "800",
			src: u.toString()
		})
	});
}, _x = ({ children: e, setValue: t, fileTypes: n = null }) => {
	let [r, i] = (0, I.useState)(!1), [a, o] = (0, I.useState)(null), s = wp(), c = (0, I.useCallback)(async (e) => {
		try {
			await t(e), o(null);
		} catch (e) {
			o(e.message);
		}
		i(!1);
	}, [t]);
	return s?.file_picker_url ? /* @__PURE__ */ (0, F.jsxs)(F.Fragment, { children: [
		/* @__PURE__ */ (0, F.jsxs)(bn, { children: [e, /* @__PURE__ */ (0, F.jsx)(bn.Append, { children: /* @__PURE__ */ (0, F.jsx)(O, {
			variant: "outline-secondary",
			onClick: () => i(!0),
			children: "Select File"
		}) })] }),
		a && /* @__PURE__ */ (0, F.jsx)(H.Control.Feedback, {
			type: "default",
			children: a
		}),
		r && /* @__PURE__ */ (0, F.jsx)(gx, {
			fileTypes: n,
			onFileSelect: c,
			onError: o,
			onClose: () => i(!1)
		})
	] }) : e;
};
//#endregion
//#region src/card/common/studio-ui/secondary-content/ImageForm.tsx
function vx({ cardIndex: e }) {
	let { values: t, handleChange: n, setFieldValue: r } = oy(), [i, a] = (0, I.useState)(!1), o = t.cards[e], s = `cards[${e}].secondaryContent`, c = o.secondaryContent, l = o.orientation, u = null;
	switch (l) {
		case "HORIZONTAL":
			u = "Recommended image size: 700 × 1200 px. Use a portrait image to avoid cropping in the side panel.";
			break;
		case "VERTICAL":
			u = "Recommended image size: 1200 × 300 px. Use a wide banner image to avoid cropping.";
			break;
	}
	function d(e) {
		a(e.currentTarget.checked), e.currentTarget.checked && r(`${s}.altText`, "");
	}
	return /* @__PURE__ */ (0, F.jsxs)(F.Fragment, { children: [
		/* @__PURE__ */ (0, F.jsxs)(H.Group, { children: [
			/* @__PURE__ */ (0, F.jsx)(H.Label, { children: "Image Source URL" }),
			/* @__PURE__ */ (0, F.jsx)(_x, {
				setValue: (e) => r(`${s}.location`, e),
				fileTypes: ["image"],
				children: /* @__PURE__ */ (0, F.jsx)(H.Control, {
					name: `${s}.location`,
					value: c.location,
					onChange: n,
					placeholder: "URL"
				})
			}),
			!c.useAsBackground && u && /* @__PURE__ */ (0, F.jsx)(H.Text, {
				className: "small",
				children: u
			})
		] }),
		/* @__PURE__ */ (0, F.jsxs)(H.Group, { children: [/* @__PURE__ */ (0, F.jsx)(H.Checkbox, {
			name: `${s}.useAsBackground`,
			checked: c.useAsBackground ?? !1,
			onChange: (e) => r(`${s}.useAsBackground`, e.currentTarget.checked),
			children: "Use image as card background"
		}), /* @__PURE__ */ (0, F.jsx)(H.Text, {
			className: "small",
			children: "The image will fill the full card background. Text will appear over the image."
		})] }),
		/* @__PURE__ */ (0, F.jsxs)(H.Group, { children: [
			/* @__PURE__ */ (0, F.jsx)(H.Label, { children: "Alt Text" }),
			/* @__PURE__ */ (0, F.jsx)("div", {
				className: "mb-0",
				children: /* @__PURE__ */ (0, F.jsx)(H.Checkbox, {
					checked: i,
					onChange: d,
					size: "sm",
					children: "Decorative Image"
				})
			}),
			/* @__PURE__ */ (0, F.jsx)(H.Control, {
				name: `${s}.altText`,
				value: c.altText,
				onChange: n,
				placeholder: "Alt Text",
				disabled: i
			})
		] })
	] });
}
//#endregion
//#region src/card/common/studio-ui/secondary-content/IconListItemForm.tsx
function yx({ cardIndex: e, itemIndex: t, onRemove: n }) {
	let { values: r, handleChange: i, setFieldValue: a } = oy(), o = `cards[${e}].secondaryContent.items[${t}]`, s = r.cards[e].secondaryContent.items?.[t];
	return /* @__PURE__ */ (0, F.jsx)(Wy, {
		heading: `List Item ${t + 1}`,
		index: t,
		onRemoveItem: n,
		children: /* @__PURE__ */ (0, F.jsxs)("div", {
			className: "p-2",
			children: [/* @__PURE__ */ (0, F.jsxs)("div", {
				className: "d-flex",
				children: [/* @__PURE__ */ (0, F.jsxs)(H.Group, {
					className: "flex-grow-0",
					children: [/* @__PURE__ */ (0, F.jsx)(H.Label, {
						className: "x-small",
						children: "Icon"
					}), /* @__PURE__ */ (0, F.jsx)(px, {
						currentIcon: s?.icon ?? "",
						onIconSelected: (e) => a(`${o}.icon`, e)
					})]
				}), /* @__PURE__ */ (0, F.jsxs)(H.Group, {
					className: "flex-grow-1 ml-2",
					children: [/* @__PURE__ */ (0, F.jsx)(H.Label, {
						className: "x-small",
						children: "Heading"
					}), /* @__PURE__ */ (0, F.jsx)(H.Control, {
						type: "text",
						name: `${o}.title`,
						value: s?.title ?? "",
						onChange: i
					})]
				})]
			}), /* @__PURE__ */ (0, F.jsxs)(H.Group, { children: [/* @__PURE__ */ (0, F.jsx)(H.Label, {
				className: "x-small",
				children: "Description"
			}), /* @__PURE__ */ (0, F.jsx)(H.Control, {
				as: "textarea",
				autoResize: !0,
				name: `${o}.description`,
				value: s?.description ?? "",
				onChange: i
			})] })]
		})
	});
}
function bx({ cardIndex: e }) {
	return /* @__PURE__ */ (0, F.jsx)(zy, {
		name: `cards[${e}].secondaryContent.items`,
		children: ({ push: t, remove: n, form: r }) => {
			let i = r.values.cards[e].secondaryContent.items;
			return /* @__PURE__ */ (0, F.jsxs)("div", { children: [i.map((t, r) => /* @__PURE__ */ (0, F.jsx)(yx, {
				cardIndex: e,
				itemIndex: r,
				onRemove: () => n(r)
			}, r)), /* @__PURE__ */ (0, F.jsx)(O, {
				variant: "success",
				onClick: () => t({
					icon: "",
					title: "",
					description: ""
				}),
				children: "Add List Item"
			})] });
		}
	});
}
//#endregion
//#region src/card/common/studio-ui/secondary-content/ContentHiglightForm.tsx
function xx({ cardIndex: e }) {
	let { values: t, handleChange: n } = oy(), r = `cards[${e}].secondaryContent`, i = t.cards[e].secondaryContent;
	return /* @__PURE__ */ (0, F.jsxs)(F.Fragment, { children: [
		/* @__PURE__ */ (0, F.jsxs)(H.Group, { children: [/* @__PURE__ */ (0, F.jsx)(H.Label, { children: "Title" }), /* @__PURE__ */ (0, F.jsx)(H.Control, {
			name: `${r}.title`,
			value: i.title,
			onChange: n
		})] }),
		/* @__PURE__ */ (0, F.jsxs)(H.Group, { children: [/* @__PURE__ */ (0, F.jsx)(H.Label, { children: "Subtitle" }), /* @__PURE__ */ (0, F.jsx)(H.Control, {
			name: `${r}.subtitle`,
			value: i.subtitle,
			onChange: n
		})] }),
		/* @__PURE__ */ (0, F.jsxs)(H.Group, { children: [/* @__PURE__ */ (0, F.jsx)(H.Label, { children: "Description" }), /* @__PURE__ */ (0, F.jsx)(H.Control, {
			as: "textarea",
			autoResize: !0,
			name: `${r}.description`,
			value: i.description,
			onChange: n
		})] })
	] });
}
//#endregion
//#region src/card/common/studio-ui/CardEditor.tsx
function Sx(e) {
	switch (e) {
		case "IMAGE": return {
			kind: e,
			location: "",
			altText: ""
		};
		case "CONTENT_HIGHLIGHT": return {
			kind: e,
			title: "",
			subtitle: "",
			description: ""
		};
		case "RICH_LIST": return {
			kind: e,
			items: [{
				icon: "",
				title: "",
				description: ""
			}]
		};
		case "HOVER_LIST": return {
			kind: e,
			items: [{
				icon: "",
				description: "",
				hoverContent: ""
			}]
		};
		default: return null;
	}
}
var Cx = {
	IMAGE: vx,
	RICH_LIST: bx,
	CONTENT_HIGHLIGHT: xx,
	HOVER_LIST: hx
};
function wx({ cardIndex: e }) {
	let { values: t, handleChange: n, handleBlur: r, setFieldValue: i } = oy(), a = t.cards[e], o = `cards[${e}]`, s = !!(a?.ctaLink && a?.ctaLabel), [c, l] = (0, I.useState)(s), u = a.secondaryContent?.kind ? Cx[a.secondaryContent.kind] : null;
	return (0, I.useEffect)(() => {
		l(s);
	}, [s]), /* @__PURE__ */ (0, F.jsxs)("div", {
		className: "row mt-5",
		children: [/* @__PURE__ */ (0, F.jsxs)("div", {
			className: "col border-right",
			children: [
				/* @__PURE__ */ (0, F.jsxs)(H.Group, { children: [/* @__PURE__ */ (0, F.jsx)(H.Label, { children: "Title" }), /* @__PURE__ */ (0, F.jsx)(H.Control, {
					name: `${o}.title`,
					value: a.title,
					onChange: n,
					onBlur: r
				})] }),
				/* @__PURE__ */ (0, F.jsxs)(H.Group, { children: [/* @__PURE__ */ (0, F.jsx)(H.Label, { children: "Subtitle" }), /* @__PURE__ */ (0, F.jsx)(H.Control, {
					name: `${o}.subtitle`,
					value: a.subtitle,
					onChange: n,
					onBlur: r
				})] }),
				a.secondaryContent?.kind !== "HOVER_LIST" && /* @__PURE__ */ (0, F.jsxs)(F.Fragment, { children: [
					/* @__PURE__ */ (0, F.jsxs)(H.Group, { children: [/* @__PURE__ */ (0, F.jsx)(H.Label, { children: "Body Content" }), /* @__PURE__ */ (0, F.jsx)(H.Control, {
						as: "textarea",
						autoResize: !0,
						name: `${o}.description`,
						value: a?.description ?? "",
						onChange: n,
						onBlur: r
					})] }),
					/* @__PURE__ */ (0, F.jsxs)(H.Group, { children: [/* @__PURE__ */ (0, F.jsx)(H.Checkbox, {
						checked: c,
						onChange: (e) => {
							l(e.currentTarget.checked), e.currentTarget.checked || (i(`${o}.ctaLabel`, ""), i(`${o}.ctaLink`, ""));
						},
						children: "Add a button"
					}), /* @__PURE__ */ (0, F.jsx)(H.Text, { children: "Link to another page or resource" })] }),
					c && /* @__PURE__ */ (0, F.jsxs)(F.Fragment, { children: [/* @__PURE__ */ (0, F.jsxs)(H.Group, { children: [/* @__PURE__ */ (0, F.jsx)(H.Label, { children: "Button Label" }), /* @__PURE__ */ (0, F.jsx)(H.Control, {
						name: `${o}.ctaLabel`,
						value: a?.ctaLabel ?? "",
						onChange: n
					})] }), /* @__PURE__ */ (0, F.jsxs)(H.Group, { children: [/* @__PURE__ */ (0, F.jsx)(H.Label, { children: "Button Link" }), /* @__PURE__ */ (0, F.jsx)(H.Control, {
						name: `${o}.ctaLink`,
						value: a?.ctaLink ?? "",
						onChange: n
					})] })] })
				] })
			]
		}), /* @__PURE__ */ (0, F.jsx)("div", {
			className: "col",
			children: u && /* @__PURE__ */ (0, F.jsx)(u, { cardIndex: e })
		})]
	});
}
function Tx({ cardIndex: e, enableOrientation: t = !1 }) {
	let { values: n, setFieldValue: r, handleChange: i, handleBlur: a } = oy(), o = n.cards[e], s = `cards[${e}]`, c = o.orientation;
	return /* @__PURE__ */ (0, F.jsxs)("div", { children: [
		/* @__PURE__ */ (0, F.jsxs)(H.Group, { children: [
			/* @__PURE__ */ (0, F.jsx)(H.Label, { children: "Card Name" }),
			/* @__PURE__ */ (0, F.jsx)(H.Text, {
				className: "micro",
				children: "Name of the card in Studio"
			}),
			/* @__PURE__ */ (0, F.jsx)(H.Control, {
				name: `${s}.name`,
				value: o.name,
				onChange: i,
				onBlur: a
			})
		] }),
		t && /* @__PURE__ */ (0, F.jsxs)(H.Group, { children: [
			/* @__PURE__ */ (0, F.jsx)(H.Label, { children: "Card Layout" }),
			/* @__PURE__ */ (0, F.jsx)(H.Text, { children: "Choose whether this card uses a vertical or horizontal layout." }),
			/* @__PURE__ */ (0, F.jsxs)(ve, {
				direction: "horizontal",
				gap: 4,
				children: [/* @__PURE__ */ (0, F.jsxs)(O, {
					className: "flex flex-column mt-4 p-4",
					variant: c === "VERTICAL" ? "outline-success" : "outline-secondary",
					onClick: () => r(`${s}.orientation`, "VERTICAL"),
					children: [
						/* @__PURE__ */ (0, F.jsx)("p", { children: /* @__PURE__ */ (0, F.jsx)("span", {
							className: "material-icons-outlined",
							children: "splitscreen"
						}) }),
						/* @__PURE__ */ (0, F.jsx)("p", {
							className: "mt-0",
							children: /* @__PURE__ */ (0, F.jsx)("strong", { children: "Vertical Card" })
						}),
						/* @__PURE__ */ (0, F.jsx)("p", {
							className: "small",
							children: "Content sits above and below"
						})
					]
				}), /* @__PURE__ */ (0, F.jsxs)(O, {
					className: "flex flex-column mt-4 p-4",
					variant: c === "HORIZONTAL" ? "outline-success" : "outline-secondary",
					onClick: () => r(`${s}.orientation`, "HORIZONTAL"),
					children: [
						/* @__PURE__ */ (0, F.jsx)("p", { children: /* @__PURE__ */ (0, F.jsx)("span", {
							className: "material-icons-outlined",
							children: "vertical_split"
						}) }),
						/* @__PURE__ */ (0, F.jsx)("p", {
							className: "mt-0",
							children: /* @__PURE__ */ (0, F.jsx)("strong", { children: "Horizontal Card" })
						}),
						/* @__PURE__ */ (0, F.jsx)("p", {
							className: "small",
							children: "Content sits side-by-side"
						})
					]
				})]
			})
		] }),
		/* @__PURE__ */ (0, F.jsxs)(H.Group, { children: [/* @__PURE__ */ (0, F.jsx)(H.Label, { children: "Supporting Content" }), /* @__PURE__ */ (0, F.jsxs)(H.Control, {
			as: "select",
			name: `${s}.cardType`,
			value: o.secondaryContent?.kind ?? "UNKNOWN",
			onChange: (e) => {
				r(`${s}.cardType`, e.currentTarget.value), r(`${s}.secondaryContent`, Sx(e.currentTarget.value));
			},
			onBlur: a,
			children: [
				/* @__PURE__ */ (0, F.jsx)("option", {
					value: "UNKNOWN",
					children: "Choose Content Type"
				}),
				/* @__PURE__ */ (0, F.jsx)("option", {
					value: "IMAGE",
					children: "Image"
				}),
				/* @__PURE__ */ (0, F.jsx)("option", {
					value: "CONTENT_HIGHLIGHT",
					children: "Highlighted Text"
				}),
				/* @__PURE__ */ (0, F.jsx)("option", {
					value: "RICH_LIST",
					children: "Icon List"
				}),
				/* @__PURE__ */ (0, F.jsx)("option", {
					value: "HOVER_LIST",
					children: "Interactive List"
				})
			]
		})] }),
		o.secondaryContent?.kind && /* @__PURE__ */ (0, F.jsx)(wx, { cardIndex: e })
	] });
}
//#endregion
//#region node_modules/.pnpm/@preact+signals-core@1.14.1/node_modules/@preact/signals-core/dist/signals-core.module.js
var Ex = Symbol.for("preact-signals");
function Dx() {
	if (jx > 1) jx--;
	else {
		var e, t = !1;
		for ((function() {
			var e = Fx;
			for (Fx = void 0; e !== void 0;) e.S.v === e.v && (e.S.i = e.i), e = e.o;
		})(); Ax !== void 0;) {
			var n = Ax;
			for (Ax = void 0, Mx++; n !== void 0;) {
				var r = n.u;
				if (n.u = void 0, n.f &= -3, !(8 & n.f) && Bx(n)) try {
					n.c();
				} catch (n) {
					t ||= (e = n, !0);
				}
				n = r;
			}
		}
		if (Mx = 0, jx--, t) throw e;
	}
}
function Ox(e) {
	if (jx > 0) return e();
	Px = ++Nx, jx++;
	try {
		return e();
	} finally {
		Dx();
	}
}
var G = void 0;
function K(e) {
	var t = G;
	G = void 0;
	try {
		return e();
	} finally {
		G = t;
	}
}
var kx, Ax = void 0, jx = 0, Mx = 0, Nx = 0, Px = 0, Fx = void 0, Ix = 0;
function Lx(e) {
	if (G !== void 0) {
		var t = e.n;
		if (t === void 0 || t.t !== G) return t = {
			i: 0,
			S: e,
			p: G.s,
			n: void 0,
			t: G,
			e: void 0,
			x: void 0,
			r: t
		}, G.s !== void 0 && (G.s.n = t), G.s = t, e.n = t, 32 & G.f && e.S(t), t;
		if (t.i === -1) return t.i = 0, t.n !== void 0 && (t.n.p = t.p, t.p !== void 0 && (t.p.n = t.n), t.p = G.s, t.n = void 0, G.s.n = t, G.s = t), t;
	}
}
function Rx(e, t) {
	this.v = e, this.i = 0, this.n = void 0, this.t = void 0, this.l = 0, this.W = t?.watched, this.Z = t?.unwatched, this.name = t?.name;
}
Rx.prototype.brand = Ex, Rx.prototype.h = function() {
	return !0;
}, Rx.prototype.S = function(e) {
	var t = this, n = this.t;
	n !== e && e.e === void 0 && (e.x = n, this.t = e, n === void 0 ? K(function() {
		var e;
		(e = t.W) == null || e.call(t);
	}) : n.e = e);
}, Rx.prototype.U = function(e) {
	var t = this;
	if (this.t !== void 0) {
		var n = e.e, r = e.x;
		n !== void 0 && (n.x = r, e.e = void 0), r !== void 0 && (r.e = n, e.x = void 0), e === this.t && (this.t = r, r === void 0 && K(function() {
			var e;
			(e = t.Z) == null || e.call(t);
		}));
	}
}, Rx.prototype.subscribe = function(e) {
	var t = this;
	return Yx(function() {
		var n = t.value, r = G;
		G = void 0;
		try {
			e(n);
		} finally {
			G = r;
		}
	}, { name: "sub" });
}, Rx.prototype.valueOf = function() {
	return this.value;
}, Rx.prototype.toString = function() {
	return this.value + "";
}, Rx.prototype.toJSON = function() {
	return this.value;
}, Rx.prototype.peek = function() {
	var e = G;
	G = void 0;
	try {
		return this.value;
	} finally {
		G = e;
	}
}, Object.defineProperty(Rx.prototype, "value", {
	get: function() {
		var e = Lx(this);
		return e !== void 0 && (e.i = this.i), this.v;
	},
	set: function(e) {
		if (e !== this.v) {
			if (Mx > 100) throw Error("Cycle detected");
			(function(e) {
				jx !== 0 && Mx === 0 && e.l !== Px && (e.l = Px, Fx = {
					S: e,
					v: e.v,
					i: e.i,
					o: Fx
				});
			})(this), this.v = e, this.i++, Ix++, jx++;
			try {
				for (var t = this.t; t !== void 0; t = t.x) t.t.N();
			} finally {
				Dx();
			}
		}
	}
});
function zx(e, t) {
	return new Rx(e, t);
}
function Bx(e) {
	for (var t = e.s; t !== void 0; t = t.n) if (t.S.i !== t.i || !t.S.h() || t.S.i !== t.i) return !0;
	return !1;
}
function Vx(e) {
	for (var t = e.s; t !== void 0; t = t.n) {
		var n = t.S.n;
		if (n !== void 0 && (t.r = n), t.S.n = t, t.i = -1, t.n === void 0) {
			e.s = t;
			break;
		}
	}
}
function Hx(e) {
	for (var t = e.s, n = void 0; t !== void 0;) {
		var r = t.p;
		t.i === -1 ? (t.S.U(t), r !== void 0 && (r.n = t.n), t.n !== void 0 && (t.n.p = r)) : n = t, t.S.n = t.r, t.r !== void 0 && (t.r = void 0), t = r;
	}
	e.s = n;
}
function Ux(e, t) {
	Rx.call(this, void 0), this.x = e, this.s = void 0, this.g = Ix - 1, this.f = 4, this.W = t?.watched, this.Z = t?.unwatched, this.name = t?.name;
}
Ux.prototype = new Rx(), Ux.prototype.h = function() {
	if (this.f &= -3, 1 & this.f) return !1;
	if ((36 & this.f) == 32 || (this.f &= -5, this.g === Ix)) return !0;
	if (this.g = Ix, this.f |= 1, this.i > 0 && !Bx(this)) return this.f &= -2, !0;
	var e = G;
	try {
		Vx(this), G = this;
		var t = this.x();
		(16 & this.f || this.v !== t || this.i === 0) && (this.v = t, this.f &= -17, this.i++);
	} catch (e) {
		this.v = e, this.f |= 16, this.i++;
	}
	return G = e, Hx(this), this.f &= -2, !0;
}, Ux.prototype.S = function(e) {
	if (this.t === void 0) {
		this.f |= 36;
		for (var t = this.s; t !== void 0; t = t.n) t.S.S(t);
	}
	Rx.prototype.S.call(this, e);
}, Ux.prototype.U = function(e) {
	if (this.t !== void 0 && (Rx.prototype.U.call(this, e), this.t === void 0)) {
		this.f &= -33;
		for (var t = this.s; t !== void 0; t = t.n) t.S.U(t);
	}
}, Ux.prototype.N = function() {
	if (!(2 & this.f)) {
		this.f |= 6;
		for (var e = this.t; e !== void 0; e = e.x) e.t.N();
	}
}, Object.defineProperty(Ux.prototype, "value", { get: function() {
	if (1 & this.f) throw Error("Cycle detected");
	var e = Lx(this);
	if (this.h(), e !== void 0 && (e.i = this.i), 16 & this.f) throw this.v;
	return this.v;
} });
function Wx(e, t) {
	return new Ux(e, t);
}
function Gx(e) {
	var t = e.m;
	if (e.m = void 0, typeof t == "function") {
		jx++;
		var n = G;
		G = void 0;
		try {
			t();
		} catch (t) {
			throw e.f &= -2, e.f |= 8, Kx(e), t;
		} finally {
			G = n, Dx();
		}
	}
}
function Kx(e) {
	for (var t = e.s; t !== void 0; t = t.n) t.S.U(t);
	e.x = void 0, e.s = void 0, Gx(e);
}
function qx(e) {
	if (G !== this) throw Error("Out-of-order effect");
	Hx(this), G = e, this.f &= -2, 8 & this.f && Kx(this), Dx();
}
function Jx(e, t) {
	this.x = e, this.m = void 0, this.s = void 0, this.u = void 0, this.f = 32, this.name = t?.name, kx && kx.push(this);
}
Jx.prototype.c = function() {
	var e = this.S();
	try {
		if (8 & this.f || this.x === void 0) return;
		var t = this.x();
		typeof t == "function" && (this.m = t);
	} finally {
		e();
	}
}, Jx.prototype.S = function() {
	if (1 & this.f) throw Error("Cycle detected");
	this.f |= 1, this.f &= -9, Gx(this), Vx(this), jx++;
	var e = G;
	return G = this, qx.bind(this, e);
}, Jx.prototype.N = function() {
	2 & this.f || (this.f |= 2, this.u = Ax, Ax = this);
}, Jx.prototype.d = function() {
	this.f |= 8, 1 & this.f || Kx(this);
}, Jx.prototype.dispose = function() {
	this.d();
};
function Yx(e, t) {
	var n = new Jx(e, t);
	try {
		n.c();
	} catch (e) {
		throw n.d(), e;
	}
	var r = n.d.bind(n);
	return r[Symbol.dispose] = r, r;
}
//#endregion
//#region node_modules/.pnpm/@dnd-kit+state@0.3.2/node_modules/@dnd-kit/state/dist/index.mjs
var Xx = Object.create, Zx = Object.defineProperty, Qx = Object.defineProperties, $x = Object.getOwnPropertyDescriptor, eS = Object.getOwnPropertyDescriptors, tS = Object.getOwnPropertySymbols, nS = Object.prototype.hasOwnProperty, rS = Object.prototype.propertyIsEnumerable, iS = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e), aS = (e) => {
	throw TypeError(e);
}, oS = (e, t, n) => t in e ? Zx(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, sS = (e, t) => {
	for (var n in t ||= {}) nS.call(t, n) && oS(e, n, t[n]);
	if (tS) for (var n of tS(t)) rS.call(t, n) && oS(e, n, t[n]);
	return e;
}, cS = (e, t) => Qx(e, eS(t)), lS = (e, t) => Zx(e, "name", {
	value: t,
	configurable: !0
}), uS = (e) => [
	,
	,
	,
	Xx(e?.[iS("metadata")] ?? null)
], dS = [
	"class",
	"method",
	"getter",
	"setter",
	"accessor",
	"field",
	"value",
	"get",
	"set"
], fS = (e) => e !== void 0 && typeof e != "function" ? aS("Function expected") : e, pS = (e, t, n, r, i) => ({
	kind: dS[e],
	name: t,
	metadata: r,
	addInitializer: (e) => n._ ? aS("Already initialized") : i.push(fS(e || null))
}), mS = (e, t) => oS(t, iS("metadata"), e[3]), hS = (e, t, n, r) => {
	for (var i = 0, a = e[t >> 1], o = a && a.length; i < o; i++) t & 1 ? a[i].call(n) : r = a[i].call(n, r);
	return r;
}, gS = (e, t, n, r, i, a) => {
	var o, s, c, l, u, d = t & 7, f = !!(t & 8), p = !!(t & 16), m = d > 3 ? e.length + 1 : d ? f ? 1 : 2 : 0, h = dS[d + 5], g = d > 3 && (e[m - 1] = []), _ = e[m] || (e[m] = []), v = d && (!p && !f && (i = i.prototype), d < 5 && (d > 3 || !p) && $x(d < 4 ? i : {
		get [n]() {
			return yS(this, a);
		},
		set [n](e) {
			return xS(this, a, e);
		}
	}, n));
	d ? p && d < 4 && lS(a, (d > 2 ? "set " : d > 1 ? "get " : "") + n) : lS(i, n);
	for (var y = r.length - 1; y >= 0; y--) l = pS(d, n, c = {}, e[3], _), d && (l.static = f, l.private = p, u = l.access = { has: p ? (e) => vS(i, e) : (e) => n in e }, d ^ 3 && (u.get = p ? (e) => (d ^ 1 ? yS : SS)(e, i, d ^ 4 ? a : v.get) : (e) => e[n]), d > 2 && (u.set = p ? (e, t) => xS(e, i, t, d ^ 4 ? a : v.set) : (e, t) => e[n] = t)), s = (0, r[y])(d ? d < 4 ? p ? a : v[h] : d > 4 ? void 0 : {
		get: v.get,
		set: v.set
	} : i, l), c._ = 1, d ^ 4 || s === void 0 ? fS(s) && (d > 4 ? g.unshift(s) : d ? p ? a = s : v[h] = s : i = s) : typeof s != "object" || !s ? aS("Object expected") : (fS(o = s.get) && (v.get = o), fS(o = s.set) && (v.set = o), fS(o = s.init) && g.unshift(o));
	return d || mS(e, i), v && Zx(i, n, v), p ? d ^ 4 ? a : v : i;
}, _S = (e, t, n) => t.has(e) || aS("Cannot " + n), vS = (e, t) => Object(t) === t ? e.has(t) : aS("Cannot use the \"in\" operator on this value"), yS = (e, t, n) => (_S(e, t, "read from private field"), n ? n.call(e) : t.get(e)), bS = (e, t, n) => t.has(e) ? aS("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), xS = (e, t, n, r) => (_S(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), SS = (e, t, n) => (_S(e, t, "access private method"), n);
function CS(e, t) {
	if (t) {
		let n;
		return Wx(() => {
			let r = e();
			return r && n && t(n, r) ? n : (n = r, r);
		});
	}
	return Wx(e);
}
function wS(e, t) {
	if (Object.is(e, t)) return !0;
	if (e === null || t === null) return !1;
	if (typeof e == "function" && typeof t == "function") return e === t;
	if (e instanceof Set && t instanceof Set) {
		if (e.size !== t.size) return !1;
		for (let n of e) if (!t.has(n)) return !1;
		return !0;
	}
	if (Array.isArray(e)) return !Array.isArray(t) || e.length !== t.length ? !1 : !e.some((e, n) => !wS(e, t[n]));
	if (typeof e == "object" && typeof t == "object") {
		let n = Object.keys(e), r = Object.keys(t);
		return n.length === r.length ? !n.some((n) => !wS(e[n], t[n])) : !1;
	}
	return !1;
}
function q({ get: e }, t) {
	return {
		init(e) {
			return zx(e);
		},
		get() {
			return e.call(this).value;
		},
		set(t) {
			let n = e.call(this);
			n.peek() !== t && (n.value = t);
		}
	};
}
function TS(e, t) {
	let n = /* @__PURE__ */ new WeakMap();
	return function() {
		let t = n.get(this);
		return t || (t = CS(e.bind(this)), n.set(this, t)), t.value;
	};
}
function ES(e = !0) {
	return function(t, n) {
		n.addInitializer(function() {
			let t = n.kind === "field" || n.static ? this : Object.getPrototypeOf(this), r = Object.getOwnPropertyDescriptor(t, n.name);
			r && Object.defineProperty(t, n.name, cS(sS({}, r), { enumerable: e }));
		});
	};
}
function DS(...e) {
	let t = e.map((e) => Yx(e));
	return () => t.forEach((e) => e());
}
var OS, kS, AS, jS, MS, NS = [q], PS, FS, IS, LS, RS, zS, BS, VS, HS, US, WS, GS, KS, qS;
MS = [q], jS = [q], AS = [ES()], kS = [ES()], OS = [ES()];
var JS = class {
	constructor(e, t = Object.is) {
		this.defaultValue = e, this.equals = t, hS(PS, 5, this), bS(this, zS), bS(this, FS, hS(PS, 8, this)), hS(PS, 11, this), bS(this, BS, hS(PS, 12, this)), hS(PS, 15, this), bS(this, WS, hS(PS, 16, this)), hS(PS, 19, this), this.reset = this.reset.bind(this), this.reset();
	}
	get current() {
		return yS(this, zS, KS);
	}
	get initial() {
		return yS(this, zS, LS);
	}
	get previous() {
		return yS(this, zS, HS);
	}
	set current(e) {
		let t = K(() => yS(this, zS, KS));
		e && t && this.equals(t, e) || Ox(() => {
			yS(this, zS, LS) || xS(this, zS, e, RS), xS(this, zS, t, US), xS(this, zS, e, qS);
		});
	}
	reset(e = this.defaultValue) {
		Ox(() => {
			xS(this, zS, void 0, US), xS(this, zS, e, RS), xS(this, zS, e, qS);
		});
	}
};
PS = uS(null), FS = /* @__PURE__ */ new WeakMap(), zS = /* @__PURE__ */ new WeakSet(), BS = /* @__PURE__ */ new WeakMap(), WS = /* @__PURE__ */ new WeakMap(), IS = gS(PS, 20, "#initial", NS, zS, FS), LS = IS.get, RS = IS.set, VS = gS(PS, 20, "#previous", MS, zS, BS), HS = VS.get, US = VS.set, GS = gS(PS, 20, "#current", jS, zS, WS), KS = GS.get, qS = GS.set, gS(PS, 2, "current", AS, JS), gS(PS, 2, "initial", kS, JS), gS(PS, 2, "previous", OS, JS), mS(PS, JS);
function YS(e) {
	return K(() => {
		let t = {};
		for (let n in e) t[n] = e[n];
		return t;
	});
}
var XS, ZS = class {
	constructor() {
		bS(this, XS, /* @__PURE__ */ new WeakMap());
	}
	get(e, t) {
		return e ? yS(this, XS).get(e)?.get(t) : void 0;
	}
	set(e, t, n) {
		if (e) return yS(this, XS).has(e) || yS(this, XS).set(e, /* @__PURE__ */ new Map()), yS(this, XS).get(e)?.set(t, n);
	}
	clear(e) {
		return e ? yS(this, XS).get(e)?.clear() : void 0;
	}
};
XS = /* @__PURE__ */ new WeakMap();
//#endregion
//#region node_modules/.pnpm/@dnd-kit+geometry@0.3.2/node_modules/@dnd-kit/geometry/dist/index.mjs
var QS = Object.create, $S = Object.defineProperty, eC = Object.getOwnPropertyDescriptor, tC = Object.getOwnPropertySymbols, nC = Object.prototype.hasOwnProperty, rC = Object.prototype.propertyIsEnumerable, iC = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e), aC = (e) => {
	throw TypeError(e);
}, oC = Math.pow, sC = (e, t, n) => t in e ? $S(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, cC = (e, t) => {
	for (var n in t ||= {}) nC.call(t, n) && sC(e, n, t[n]);
	if (tC) for (var n of tC(t)) rC.call(t, n) && sC(e, n, t[n]);
	return e;
}, lC = (e, t) => $S(e, "name", {
	value: t,
	configurable: !0
}), uC = (e) => [
	,
	,
	,
	QS(e?.[iC("metadata")] ?? null)
], dC = [
	"class",
	"method",
	"getter",
	"setter",
	"accessor",
	"field",
	"value",
	"get",
	"set"
], fC = (e) => e !== void 0 && typeof e != "function" ? aC("Function expected") : e, pC = (e, t, n, r, i) => ({
	kind: dC[e],
	name: t,
	metadata: r,
	addInitializer: (e) => n._ ? aC("Already initialized") : i.push(fC(e || null))
}), mC = (e, t) => sC(t, iC("metadata"), e[3]), hC = (e, t, n, r) => {
	for (var i = 0, a = e[t >> 1], o = a && a.length; i < o; i++) t & 1 ? a[i].call(n) : r = a[i].call(n, r);
	return r;
}, gC = (e, t, n, r, i, a) => {
	var o, s, c, l, u, d = t & 7, f = !!(t & 8), p = !!(t & 16), m = d > 3 ? e.length + 1 : d ? f ? 1 : 2 : 0, h = dC[d + 5], g = d > 3 && (e[m - 1] = []), _ = e[m] || (e[m] = []), v = d && (!p && !f && (i = i.prototype), d < 5 && (d > 3 || !p) && eC(d < 4 ? i : {
		get [n]() {
			return yC(this, a);
		},
		set [n](e) {
			return xC(this, a, e);
		}
	}, n));
	d ? p && d < 4 && lC(a, (d > 2 ? "set " : d > 1 ? "get " : "") + n) : lC(i, n);
	for (var y = r.length - 1; y >= 0; y--) l = pC(d, n, c = {}, e[3], _), d && (l.static = f, l.private = p, u = l.access = { has: p ? (e) => vC(i, e) : (e) => n in e }, d ^ 3 && (u.get = p ? (e) => (d ^ 1 ? yC : SC)(e, i, d ^ 4 ? a : v.get) : (e) => e[n]), d > 2 && (u.set = p ? (e, t) => xC(e, i, t, d ^ 4 ? a : v.set) : (e, t) => e[n] = t)), s = (0, r[y])(d ? d < 4 ? p ? a : v[h] : d > 4 ? void 0 : {
		get: v.get,
		set: v.set
	} : i, l), c._ = 1, d ^ 4 || s === void 0 ? fC(s) && (d > 4 ? g.unshift(s) : d ? p ? a = s : v[h] = s : i = s) : typeof s != "object" || !s ? aC("Object expected") : (fC(o = s.get) && (v.get = o), fC(o = s.set) && (v.set = o), fC(o = s.init) && g.unshift(o));
	return d || mC(e, i), v && $S(i, n, v), p ? d ^ 4 ? a : v : i;
}, _C = (e, t, n) => t.has(e) || aC("Cannot " + n), vC = (e, t) => Object(t) === t ? e.has(t) : aC("Cannot use the \"in\" operator on this value"), yC = (e, t, n) => (_C(e, t, "read from private field"), n ? n.call(e) : t.get(e)), bC = (e, t, n) => t.has(e) ? aC("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), xC = (e, t, n, r) => (_C(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), SC = (e, t, n) => (_C(e, t, "access private method"), n), CC = class e {
	constructor(e, t) {
		this.x = e, this.y = t;
	}
	static delta(t, n) {
		return new e(t.x - n.x, t.y - n.y);
	}
	static distance(e, t) {
		return Math.hypot(e.x - t.x, e.y - t.y);
	}
	static equals(e, t) {
		return e.x === t.x && e.y === t.y;
	}
	static from({ x: t, y: n }) {
		return new e(t, n);
	}
}, wC = class e {
	constructor(e, t, n, r) {
		this.left = e, this.top = t, this.width = n, this.height = r, this.scale = {
			x: 1,
			y: 1
		};
	}
	get inverseScale() {
		return {
			x: 1 / this.scale.x,
			y: 1 / this.scale.y
		};
	}
	translate(t, n) {
		let { top: r, left: i, width: a, height: o, scale: s } = this, c = new e(i + t, r + n, a, o);
		return c.scale = cC({}, s), c;
	}
	get boundingRectangle() {
		let { width: e, height: t, left: n, top: r, right: i, bottom: a } = this;
		return {
			width: e,
			height: t,
			left: n,
			top: r,
			right: i,
			bottom: a
		};
	}
	get center() {
		let { left: e, top: t, right: n, bottom: r } = this;
		return new CC((e + n) / 2, (t + r) / 2);
	}
	get area() {
		let { width: e, height: t } = this;
		return e * t;
	}
	equals(t) {
		if (!(t instanceof e)) return !1;
		let { left: n, top: r, width: i, height: a } = this;
		return n === t.left && r === t.top && i === t.width && a === t.height;
	}
	containsPoint(e) {
		let { top: t, left: n, bottom: r, right: i } = this;
		return t <= e.y && e.y <= r && n <= e.x && e.x <= i;
	}
	intersectionArea(t) {
		return t instanceof e ? TC(this, t) : 0;
	}
	intersectionRatio(e) {
		let { area: t } = this, n = this.intersectionArea(e);
		return n / (e.area + t - n);
	}
	get bottom() {
		let { top: e, height: t } = this;
		return e + t;
	}
	get right() {
		let { left: e, width: t } = this;
		return e + t;
	}
	get aspectRatio() {
		let { width: e, height: t } = this;
		return e / t;
	}
	get corners() {
		return [
			{
				x: this.left,
				y: this.top
			},
			{
				x: this.right,
				y: this.top
			},
			{
				x: this.left,
				y: this.bottom
			},
			{
				x: this.right,
				y: this.bottom
			}
		];
	}
	static from({ top: t, left: n, width: r, height: i }) {
		return new e(n, t, r, i);
	}
	static delta(e, t, n = {
		x: "center",
		y: "center"
	}) {
		let r = (e, t) => {
			let r = n[t], i = t === "x" ? e.left : e.top, a = t === "x" ? e.width : e.height;
			return r == "start" ? i : r == "end" ? i + a : i + a / 2;
		};
		return CC.delta({
			x: r(e, "x"),
			y: r(e, "y")
		}, {
			x: r(t, "x"),
			y: r(t, "y")
		});
	}
	static intersectionRatio(t, n) {
		return e.from(t).intersectionRatio(e.from(n));
	}
};
function TC(e, t) {
	let n = Math.max(t.top, e.top), r = Math.max(t.left, e.left), i = Math.min(t.left + t.width, e.left + e.width), a = Math.min(t.top + t.height, e.top + e.height), o = i - r, s = a - n;
	return r < i && n < a ? o * s : 0;
}
var EC, DC, OC, kC, AC, jC = class extends (OC = JS, DC = [TS], EC = [TS], OC) {
	constructor(e) {
		let t = CC.from(e);
		super(t, (e, t) => CC.equals(e, t)), hC(AC, 5, this), bC(this, kC, 0), this.velocity = {
			x: 0,
			y: 0
		};
	}
	get delta() {
		return CC.delta(this.current, this.initial);
	}
	get direction() {
		let { current: e, previous: t } = this;
		if (!t) return null;
		let n = {
			x: e.x - t.x,
			y: e.y - t.y
		};
		return !n.x && !n.y ? null : Math.abs(n.x) > Math.abs(n.y) ? n.x > 0 ? "right" : "left" : n.y > 0 ? "down" : "up";
	}
	get current() {
		return super.current;
	}
	set current(e) {
		let { current: t } = this, n = CC.from(e), r = {
			x: n.x - t.x,
			y: n.y - t.y
		}, i = Date.now(), a = i - yC(this, kC), o = (e) => Math.round(e / a * 100);
		Ox(() => {
			xC(this, kC, i), this.velocity = {
				x: o(r.x),
				y: o(r.y)
			}, super.current = n;
		});
	}
	reset(e = this.defaultValue) {
		super.reset(CC.from(e)), this.velocity = {
			x: 0,
			y: 0
		};
	}
};
AC = uC(OC), kC = /* @__PURE__ */ new WeakMap(), gC(AC, 2, "delta", DC, jC), gC(AC, 2, "direction", EC, jC), mC(AC, jC);
function MC({ x: e, y: t }, n) {
	let r = Math.abs(e), i = Math.abs(t);
	return typeof n == "number" ? Math.sqrt(oC(r, 2) + oC(i, 2)) > n : "x" in n && "y" in n ? r > n.x && i > n.y : "x" in n ? r > n.x : "y" in n ? i > n.y : !1;
}
var NC = /* @__PURE__ */ ((e) => (e.Horizontal = "x", e.Vertical = "y", e))(NC || {}), PC = Object.values(NC), FC = Object.create, IC = Object.defineProperty, LC = Object.defineProperties, RC = Object.getOwnPropertyDescriptor, zC = Object.getOwnPropertyDescriptors, BC = Object.getOwnPropertySymbols, VC = Object.prototype.hasOwnProperty, HC = Object.prototype.propertyIsEnumerable, UC = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e), WC = (e) => {
	throw TypeError(e);
}, GC = (e, t, n) => t in e ? IC(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, KC = (e, t) => {
	for (var n in t ||= {}) VC.call(t, n) && GC(e, n, t[n]);
	if (BC) for (var n of BC(t)) HC.call(t, n) && GC(e, n, t[n]);
	return e;
}, qC = (e, t) => LC(e, zC(t)), JC = (e, t) => IC(e, "name", {
	value: t,
	configurable: !0
}), YC = (e, t) => {
	var n = {};
	for (var r in e) VC.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && BC) for (var r of BC(e)) t.indexOf(r) < 0 && HC.call(e, r) && (n[r] = e[r]);
	return n;
}, XC = (e) => [
	,
	,
	,
	FC(e?.[UC("metadata")] ?? null)
], ZC = [
	"class",
	"method",
	"getter",
	"setter",
	"accessor",
	"field",
	"value",
	"get",
	"set"
], QC = (e) => e !== void 0 && typeof e != "function" ? WC("Function expected") : e, $C = (e, t, n, r, i) => ({
	kind: ZC[e],
	name: t,
	metadata: r,
	addInitializer: (e) => n._ ? WC("Already initialized") : i.push(QC(e || null))
}), ew = (e, t) => GC(t, UC("metadata"), e[3]), J = (e, t, n, r) => {
	for (var i = 0, a = e[t >> 1], o = a && a.length; i < o; i++) t & 1 ? a[i].call(n) : r = a[i].call(n, r);
	return r;
}, Y = (e, t, n, r, i, a) => {
	var o, s, c, l, u, d = t & 7, f = !!(t & 8), p = !!(t & 16), m = d > 3 ? e.length + 1 : d ? f ? 1 : 2 : 0, h = ZC[d + 5], g = d > 3 && (e[m - 1] = []), _ = e[m] || (e[m] = []), v = d && (!p && !f && (i = i.prototype), d < 5 && (d > 3 || !p) && RC(d < 4 ? i : {
		get [n]() {
			return rw(this, a);
		},
		set [n](e) {
			return iw(this, a, e);
		}
	}, n));
	d ? p && d < 4 && JC(a, (d > 2 ? "set " : d > 1 ? "get " : "") + n) : JC(i, n);
	for (var y = r.length - 1; y >= 0; y--) l = $C(d, n, c = {}, e[3], _), d && (l.static = f, l.private = p, u = l.access = { has: p ? (e) => nw(i, e) : (e) => n in e }, d ^ 3 && (u.get = p ? (e) => (d ^ 1 ? rw : aw)(e, i, d ^ 4 ? a : v.get) : (e) => e[n]), d > 2 && (u.set = p ? (e, t) => iw(e, i, t, d ^ 4 ? a : v.set) : (e, t) => e[n] = t)), s = (0, r[y])(d ? d < 4 ? p ? a : v[h] : d > 4 ? void 0 : {
		get: v.get,
		set: v.set
	} : i, l), c._ = 1, d ^ 4 || s === void 0 ? QC(s) && (d > 4 ? g.unshift(s) : d ? p ? a = s : v[h] = s : i = s) : typeof s != "object" || !s ? WC("Object expected") : (QC(o = s.get) && (v.get = o), QC(o = s.set) && (v.set = o), QC(o = s.init) && g.unshift(o));
	return d || ew(e, i), v && IC(i, n, v), p ? d ^ 4 ? a : v : i;
}, tw = (e, t, n) => t.has(e) || WC("Cannot " + n), nw = (e, t) => Object(t) === t ? e.has(t) : WC("Cannot use the \"in\" operator on this value"), rw = (e, t, n) => (tw(e, t, "read from private field"), n ? n.call(e) : t.get(e)), X = (e, t, n) => t.has(e) ? WC("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), iw = (e, t, n, r) => (tw(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), aw = (e, t, n) => (tw(e, t, "access private method"), n);
function ow(e, t) {
	return {
		plugin: e,
		options: t
	};
}
function sw(e) {
	return (t) => ow(e, t);
}
function cw(e) {
	return typeof e == "function" ? {
		plugin: e,
		options: void 0
	} : e;
}
var lw = [q], uw, dw, fw, pw = class {
	constructor(e, t) {
		this.manager = e, this.options = t, X(this, dw, J(uw, 8, this, !1)), J(uw, 11, this), X(this, fw, /* @__PURE__ */ new Set());
	}
	enable() {
		this.disabled = !1;
	}
	disable() {
		this.disabled = !0;
	}
	isDisabled() {
		return K(() => this.disabled);
	}
	configure(e) {
		this.options = e;
	}
	registerEffect(e) {
		let t = Yx(e.bind(this));
		return rw(this, fw).add(t), t;
	}
	destroy() {
		rw(this, fw).forEach((e) => e());
	}
	static configure(e) {
		return ow(this, e);
	}
};
uw = XC(null), dw = /* @__PURE__ */ new WeakMap(), fw = /* @__PURE__ */ new WeakMap(), Y(uw, 4, "disabled", lw, pw, dw), ew(uw, pw);
var mw = class extends pw {}, hw, gw = class {
	constructor(e) {
		this.manager = e, this.instances = /* @__PURE__ */ new Map(), X(this, hw, []);
	}
	get values() {
		return Array.from(this.instances.values());
	}
	set values(e) {
		let t = e.map(cw).reduceRight((e, t) => e.some(({ plugin: e }) => e === t.plugin) ? e : [t, ...e], []), n = t.map(({ plugin: e }) => e);
		for (let e of rw(this, hw)) if (!n.includes(e)) {
			if (e.prototype instanceof mw) continue;
			this.unregister(e);
		}
		for (let { plugin: e, options: n } of t) this.register(e, n);
		iw(this, hw, n);
	}
	get(e) {
		return this.instances.get(e);
	}
	register(e, t) {
		let n = this.instances.get(e);
		if (n) return n.options !== t && (n.options = t), n;
		let r = new e(this.manager, t);
		return this.instances.set(e, r), r;
	}
	unregister(e) {
		let t = this.instances.get(e);
		t && (t.destroy(), this.instances.delete(e));
	}
	destroy() {
		for (let e of this.instances.values()) e.destroy();
		this.instances.clear();
	}
};
hw = /* @__PURE__ */ new WeakMap();
function _w(e, t) {
	return e.priority === t.priority ? e.type === t.type ? t.value - e.value : t.type - e.type : t.priority - e.priority;
}
var vw = [], yw, bw, xw = class extends pw {
	constructor(e) {
		super(e), X(this, yw), X(this, bw), this.computeCollisions = this.computeCollisions.bind(this), iw(this, bw, zx(vw)), this.destroy = DS(() => {
			let e = this.computeCollisions(), t = K(() => this.manager.dragOperation.position.current);
			if (e !== vw) {
				let e = rw(this, yw);
				if (iw(this, yw, t), e && t.x == e.x && t.y == e.y) return;
			} else iw(this, yw, void 0);
			rw(this, bw).value = e;
		}, () => {
			let { dragOperation: e } = this.manager;
			e.status.initialized && this.forceUpdate();
		});
	}
	forceUpdate(e = !0) {
		K(() => {
			e ? rw(this, bw).value = this.computeCollisions() : iw(this, yw, void 0);
		});
	}
	computeCollisions(e, t) {
		let { registry: n, dragOperation: r } = this.manager, { source: i, shape: a, status: o } = r;
		if (!o.initialized || !a) return vw;
		let s = [], c = [];
		for (let a of e ?? n.droppables) {
			if (a.disabled || i && !a.accepts(i)) continue;
			let e = t ?? a.collisionDetector;
			if (!e) continue;
			c.push(a), a.shape;
			let n = K(() => e({
				droppable: a,
				dragOperation: r
			}));
			n && (a.collisionPriority != null && (n.priority = a.collisionPriority), s.push(n));
		}
		return c.length === 0 ? vw : (s.sort(_w), s);
	}
	get collisions() {
		return rw(this, bw).value;
	}
};
yw = /* @__PURE__ */ new WeakMap(), bw = /* @__PURE__ */ new WeakMap();
var Sw = class {
	constructor() {
		this.registry = /* @__PURE__ */ new Map();
	}
	addEventListener(e, t) {
		let { registry: n } = this, r = new Set(n.get(e));
		return r.add(t), n.set(e, r), () => this.removeEventListener(e, t);
	}
	removeEventListener(e, t) {
		let { registry: n } = this, r = new Set(n.get(e));
		r.delete(t), n.set(e, r);
	}
	dispatch(e, ...t) {
		let { registry: n } = this, r = n.get(e);
		if (r) for (let e of r) e(...t);
	}
}, Cw = class extends Sw {
	constructor(e) {
		super(), this.manager = e;
	}
	dispatch(e, t) {
		let n = [t, this.manager];
		super.dispatch(e, ...n);
	}
};
function ww(e, t = !0) {
	let n = !1;
	return qC(KC({}, e), {
		cancelable: t,
		get defaultPrevented() {
			return n;
		},
		preventDefault() {
			t && (n = !0);
		}
	});
}
var Tw = class extends mw {
	constructor(e) {
		super(e);
		let t = (e, t) => e.map(({ id: e }) => e).join("") === t.map(({ id: e }) => e).join(""), n = [];
		this.destroy = DS(() => {
			let { dragOperation: t, collisionObserver: r } = e;
			t.status.initializing && (n = [], r.enable());
		}, () => {
			let { collisionObserver: r, monitor: i } = e, { collisions: a } = r;
			if (r.isDisabled()) return;
			let o = ww({ collisions: a });
			if (i.dispatch("collision", o), o.defaultPrevented || t(a, n)) return;
			n = a;
			let [s] = a;
			K(() => {
				s?.id !== e.dragOperation.target?.id && (r.disable(), e.actions.setDropTarget(s?.id).then(() => {
					r.enable();
				}));
			});
		});
	}
}, Ew = /* @__PURE__ */ ((e) => (e[e.Lowest = 0] = "Lowest", e[e.Low = 1] = "Low", e[e.Normal = 2] = "Normal", e[e.High = 3] = "High", e[e.Highest = 4] = "Highest", e))(Ew || {}), Dw = /* @__PURE__ */ ((e) => (e[e.Collision = 0] = "Collision", e[e.ShapeIntersection = 1] = "ShapeIntersection", e[e.PointerIntersection = 2] = "PointerIntersection", e))(Dw || {}), Ow, kw, Aw, jw, Mw, Nw, Pw = [q], Fw, Iw;
Nw = [TS], Mw = [TS], jw = [TS], Aw = [TS], kw = [TS], Ow = [TS];
var Lw = class {
	constructor() {
		J(Fw, 5, this), X(this, Iw, J(Fw, 8, this, "idle")), J(Fw, 11, this);
	}
	get current() {
		return this.value;
	}
	get idle() {
		return this.value === "idle";
	}
	get initializing() {
		return this.value === "initializing";
	}
	get initialized() {
		let { value: e } = this;
		return e !== "idle" && e !== "initialization-pending";
	}
	get dragging() {
		return this.value === "dragging";
	}
	get dropped() {
		return this.value === "dropped";
	}
	set(e) {
		this.value = e;
	}
};
Fw = XC(null), Iw = /* @__PURE__ */ new WeakMap(), Y(Fw, 4, "value", Pw, Lw, Iw), Y(Fw, 2, "current", Nw, Lw), Y(Fw, 2, "idle", Mw, Lw), Y(Fw, 2, "initializing", jw, Lw), Y(Fw, 2, "initialized", Aw, Lw), Y(Fw, 2, "dragging", kw, Lw), Y(Fw, 2, "dropped", Ow, Lw), ew(Fw, Lw);
var Rw = class {
	constructor(e) {
		this.manager = e;
	}
	setDragSource(e) {
		let { dragOperation: t } = this.manager;
		t.sourceIdentifier = typeof e == "string" || typeof e == "number" ? e : e.id;
	}
	setDropTarget(e) {
		return K(() => {
			let { dragOperation: t } = this.manager, n = e ?? null;
			if (t.targetIdentifier === n) return Promise.resolve(!1);
			t.targetIdentifier = n;
			let r = ww({ operation: t.snapshot() });
			return t.status.dragging && this.manager.monitor.dispatch("dragover", r), this.manager.renderer.rendering.then(() => r.defaultPrevented);
		});
	}
	start(e) {
		return K(() => {
			let { dragOperation: t } = this.manager;
			if (e.source != null && this.setDragSource(e.source), !t.source) throw Error("Cannot start a drag operation without a drag source");
			if (!t.status.idle) throw Error("Cannot start a drag operation while another is active");
			let n = new AbortController(), { event: r, coordinates: i } = e;
			Ox(() => {
				t.status.set("initialization-pending"), t.shape = null, t.canceled = !1, t.activatorEvent = r ?? null, t.position.reset(i);
			});
			let a = ww({ operation: t.snapshot() });
			return this.manager.monitor.dispatch("beforedragstart", a), a.defaultPrevented ? (t.reset(), n.abort(), n) : (t.status.set("initializing"), t.controller = n, this.manager.renderer.rendering.then(() => {
				if (n.signal.aborted) return;
				let { status: e } = t;
				e.current === "initializing" && (t.status.set("dragging"), this.manager.monitor.dispatch("dragstart", {
					nativeEvent: r,
					operation: t.snapshot(),
					cancelable: !1
				}));
			}), n);
		});
	}
	move(e) {
		return K(() => {
			let { dragOperation: t } = this.manager, { status: n, controller: r } = t;
			if (!n.dragging || !r || r.signal.aborted) return;
			let i = ww({
				nativeEvent: e.event,
				operation: t.snapshot(),
				by: e.by,
				to: e.to
			}, e.cancelable ?? !0);
			(e.propagate ?? !0) && this.manager.monitor.dispatch("dragmove", i), queueMicrotask(() => {
				if (i.defaultPrevented) return;
				let n = e.to ?? {
					x: t.position.current.x + (e.by?.x ?? 0),
					y: t.position.current.y + (e.by?.y ?? 0)
				};
				t.position.current = n;
			});
		});
	}
	stop(e = {}) {
		return K(() => {
			let { dragOperation: t } = this.manager, { controller: n } = t;
			if (!n || n.signal.aborted) return;
			let r, i = () => {
				let e = {
					resume: () => {},
					abort: () => {}
				};
				return r = new Promise((t, n) => {
					e.resume = t, e.abort = n;
				}), e;
			};
			n.abort();
			let a = () => {
				this.manager.renderer.rendering.then(() => {
					t.status.set("dropped");
					let e = K(() => t.source?.status === "dropping"), r = () => {
						t.controller === n && (t.controller = void 0), t.reset();
					};
					if (e) {
						let { source: e } = t, n = Yx(() => {
							e?.status === "idle" && (n(), r());
						});
					} else this.manager.renderer.rendering.then(r);
				});
			};
			t.canceled = e.canceled ?? !1, this.manager.monitor.dispatch("dragend", {
				nativeEvent: e.event,
				operation: t.snapshot(),
				canceled: e.canceled ?? !1,
				suspend: i
			}), r ? r.then(a).catch(() => t.reset()) : a();
		});
	}
}, zw, Bw, Vw, Hw = [q], Uw, Ww, Gw, Kw, qw;
Vw = [q], Bw = [q], zw = [q];
var Jw = class {
	constructor(e, t) {
		X(this, Ww, J(Uw, 8, this)), J(Uw, 11, this), X(this, Gw, J(Uw, 12, this)), J(Uw, 15, this), X(this, Kw, J(Uw, 16, this)), J(Uw, 19, this), X(this, qw, J(Uw, 20, this)), J(Uw, 23, this);
		let { effects: n, id: r, data: i = {}, disabled: a = !1, register: o = !0 } = e, s = r;
		this.manager = t, this.id = r, this.data = i, this.disabled = a, this.effects = () => [() => {
			let { id: e, manager: t } = this;
			if (e !== s) return t?.registry.register(this), () => t?.registry.unregister(this);
		}, ...n?.() ?? []], this.register = this.register.bind(this), this.unregister = this.unregister.bind(this), this.destroy = this.destroy.bind(this), t && o && queueMicrotask(this.register);
	}
	register() {
		return this.manager?.registry.register(this);
	}
	unregister() {
		var e;
		(e = this.manager) == null || e.registry.unregister(this);
	}
	destroy() {
		var e;
		(e = this.manager) == null || e.registry.unregister(this);
	}
};
Uw = XC(null), Ww = /* @__PURE__ */ new WeakMap(), Gw = /* @__PURE__ */ new WeakMap(), Kw = /* @__PURE__ */ new WeakMap(), qw = /* @__PURE__ */ new WeakMap(), Y(Uw, 4, "manager", Hw, Jw, Ww), Y(Uw, 4, "id", Vw, Jw, Gw), Y(Uw, 4, "data", Bw, Jw, Kw), Y(Uw, 4, "disabled", zw, Jw, qw), ew(Uw, Jw);
var Yw = class {
	constructor() {
		this.map = zx(/* @__PURE__ */ new Map()), this.cleanupFunctions = /* @__PURE__ */ new WeakMap(), this.register = (e, t) => {
			let n = this.map.peek(), r = n.get(e), i = () => this.unregister(e, t);
			if (r === t) return i;
			r && (this.cleanupFunctions.get(r)?.(), this.cleanupFunctions.delete(r));
			let a = new Map(n);
			a.set(e, t), this.map.value = a;
			let o = DS(...t.effects());
			return this.cleanupFunctions.set(t, o), i;
		}, this.unregister = (e, t) => {
			let n = this.map.peek();
			if (n.get(e) !== t) return;
			this.cleanupFunctions.get(t)?.(), this.cleanupFunctions.delete(t);
			let r = new Map(n);
			r.delete(e), this.map.value = r;
		};
	}
	[Symbol.iterator]() {
		return this.map.peek().values();
	}
	get value() {
		return this.map.value.values();
	}
	has(e) {
		return this.map.value.has(e);
	}
	get(e) {
		return this.map.value.get(e);
	}
	destroy() {
		for (let e of this) this.cleanupFunctions.get(e)?.(), e.destroy();
		this.map.value = /* @__PURE__ */ new Map();
	}
}, Xw, Zw, Qw, $w, eT, tT, nT, rT, iT, aT, oT, sT = class extends (nT = Jw, tT = [q], eT = [q], $w = [q], Qw = [TS], Zw = [TS], Xw = [TS], nT) {
	constructor(e, t) {
		var n = e, { modifiers: r, type: i, sensors: a } = n, o = YC(n, [
			"modifiers",
			"type",
			"sensors"
		]);
		super(o, t), J(rT, 5, this), X(this, iT, J(rT, 8, this)), J(rT, 11, this), X(this, aT, J(rT, 12, this)), J(rT, 15, this), X(this, oT, J(rT, 16, this, this.isDragSource ? "dragging" : "idle")), J(rT, 19, this), this.type = i, this.sensors = a, this.modifiers = r, this.alignment = o.alignment;
	}
	get isDropping() {
		return this.status === "dropping" && this.isDragSource;
	}
	get isDragging() {
		return this.status === "dragging" && this.isDragSource;
	}
	get isDragSource() {
		return this.manager?.dragOperation.source?.id === this.id;
	}
};
rT = XC(nT), iT = /* @__PURE__ */ new WeakMap(), aT = /* @__PURE__ */ new WeakMap(), oT = /* @__PURE__ */ new WeakMap(), Y(rT, 4, "type", tT, sT, iT), Y(rT, 4, "modifiers", eT, sT, aT), Y(rT, 4, "status", $w, sT, oT), Y(rT, 2, "isDropping", Qw, sT), Y(rT, 2, "isDragging", Zw, sT), Y(rT, 2, "isDragSource", Xw, sT), ew(rT, sT);
var cT, lT, uT, dT, fT, pT, mT, hT, gT, _T, vT, yT, bT, xT = class extends (mT = Jw, pT = [q], fT = [q], dT = [q], uT = [q], lT = [q], cT = [TS], mT) {
	constructor(e, t) {
		var n = e, { accept: r, collisionDetector: i, collisionPriority: a, type: o } = n, s = YC(n, [
			"accept",
			"collisionDetector",
			"collisionPriority",
			"type"
		]);
		super(s, t), J(hT, 5, this), X(this, gT, J(hT, 8, this)), J(hT, 11, this), X(this, _T, J(hT, 12, this)), J(hT, 15, this), X(this, vT, J(hT, 16, this)), J(hT, 19, this), X(this, yT, J(hT, 20, this)), J(hT, 23, this), X(this, bT, J(hT, 24, this)), J(hT, 27, this), this.accept = r, this.collisionDetector = i, this.collisionPriority = a, this.type = o;
	}
	accepts(e) {
		let { accept: t } = this;
		return t ? typeof t == "function" ? t(e) : e.type ? Array.isArray(t) ? t.includes(e.type) : e.type === t : !1 : !0;
	}
	get isDropTarget() {
		return this.manager?.dragOperation.target?.id === this.id;
	}
};
hT = XC(mT), gT = /* @__PURE__ */ new WeakMap(), _T = /* @__PURE__ */ new WeakMap(), vT = /* @__PURE__ */ new WeakMap(), yT = /* @__PURE__ */ new WeakMap(), bT = /* @__PURE__ */ new WeakMap(), Y(hT, 4, "accept", pT, xT, gT), Y(hT, 4, "type", fT, xT, _T), Y(hT, 4, "collisionDetector", dT, xT, vT), Y(hT, 4, "collisionPriority", uT, xT, yT), Y(hT, 4, "shape", lT, xT, bT), Y(hT, 2, "isDropTarget", cT, xT), ew(hT, xT);
var ST = class extends pw {
	constructor(e, t) {
		super(e, t), this.manager = e, this.options = t;
	}
}, CT = class extends AbortController {
	constructor(e, t) {
		super(), this.constraints = e, this.onActivate = t, this.activated = !1;
		for (let t of e ?? []) t.controller = this;
	}
	onEvent(e) {
		if (!this.activated) if (this.constraints?.length) for (let t of this.constraints) t.onEvent(e);
		else this.activate(e);
	}
	activate(e) {
		this.activated || (this.activated = !0, this.onActivate(e));
	}
	abort(e) {
		this.activated = !1, super.abort(e);
	}
}, wT, TT = class {
	constructor(e) {
		this.options = e, X(this, wT);
	}
	set controller(e) {
		iw(this, wT, e), e.signal.addEventListener("abort", () => this.abort());
	}
	activate(e) {
		var t;
		(t = rw(this, wT)) == null || t.activate(e);
	}
};
wT = /* @__PURE__ */ new WeakMap();
var ET = class extends pw {
	constructor(e, t) {
		super(e, t), this.manager = e, this.options = t;
	}
	apply(e) {
		return e.transform;
	}
}, DT = class {
	constructor(e) {
		this.draggables = new Yw(), this.droppables = new Yw(), this.plugins = new gw(e), this.sensors = new gw(e), this.modifiers = new gw(e);
	}
	register(e, t) {
		if (e instanceof sT) return this.draggables.register(e.id, e);
		if (e instanceof xT) return this.droppables.register(e.id, e);
		if (e.prototype instanceof ET) return this.modifiers.register(e, t);
		if (e.prototype instanceof ST) return this.sensors.register(e, t);
		if (e.prototype instanceof pw) return this.plugins.register(e, t);
		throw Error("Invalid instance type");
	}
	unregister(e) {
		if (e instanceof Jw) return e instanceof sT ? this.draggables.unregister(e.id, e) : e instanceof xT ? this.droppables.unregister(e.id, e) : () => {};
		if (e.prototype instanceof ET) return this.modifiers.unregister(e);
		if (e.prototype instanceof ST) return this.sensors.unregister(e);
		if (e.prototype instanceof pw) return this.plugins.unregister(e);
		throw Error("Invalid instance type");
	}
	destroy() {
		this.draggables.destroy(), this.droppables.destroy(), this.plugins.destroy(), this.sensors.destroy(), this.modifiers.destroy();
	}
}, OT, kT, AT, jT, MT, NT, PT, FT, IT = [TS], LT, RT, zT, BT, VT, HT, UT, WT, GT, KT;
FT = [q], PT = [q], NT = [q], MT = [q], jT = [q], AT = [TS], kT = [TS], OT = [TS];
var qT = class {
	constructor(e) {
		J(BT, 5, this), X(this, LT), X(this, RT), X(this, zT, new JS(void 0, (e, t) => e && t ? e.equals(t) : e === t)), this.status = new Lw(), X(this, VT, J(BT, 8, this, !1)), J(BT, 11, this), X(this, HT, J(BT, 12, this, null)), J(BT, 15, this), X(this, UT, J(BT, 16, this, null)), J(BT, 19, this), X(this, WT, J(BT, 20, this, null)), J(BT, 23, this), X(this, GT, J(BT, 24, this, [])), J(BT, 27, this), this.position = new jC({
			x: 0,
			y: 0
		}), X(this, KT, {
			x: 0,
			y: 0
		}), iw(this, LT, e);
	}
	get shape() {
		let { current: e, initial: t, previous: n } = rw(this, zT);
		return !e || !t ? null : {
			current: e,
			initial: t,
			previous: n
		};
	}
	set shape(e) {
		e ? rw(this, zT).current = e : rw(this, zT).reset();
	}
	get source() {
		let e = this.sourceIdentifier;
		if (e == null) return null;
		let t = rw(this, LT).registry.draggables.get(e);
		return t && iw(this, RT, t), t ?? rw(this, RT) ?? null;
	}
	get target() {
		let e = this.targetIdentifier;
		return e == null ? null : rw(this, LT).registry.droppables.get(e) ?? null;
	}
	get transform() {
		let { x: e, y: t } = this.position.delta, n = {
			x: e,
			y: t
		};
		for (let e of this.modifiers) n = e.apply(qC(KC({}, this.snapshot()), { transform: n }));
		return iw(this, KT, n), n;
	}
	snapshot() {
		return K(() => ({
			source: this.source,
			target: this.target,
			activatorEvent: this.activatorEvent,
			transform: rw(this, KT),
			shape: this.shape ? YS(this.shape) : null,
			position: YS(this.position),
			status: YS(this.status),
			canceled: this.canceled
		}));
	}
	reset() {
		Ox(() => {
			this.status.set("idle"), this.sourceIdentifier = null, this.targetIdentifier = null, rw(this, zT).reset(), this.position.reset({
				x: 0,
				y: 0
			}), iw(this, KT, {
				x: 0,
				y: 0
			}), this.modifiers = [];
		});
	}
};
BT = XC(null), LT = /* @__PURE__ */ new WeakMap(), RT = /* @__PURE__ */ new WeakMap(), zT = /* @__PURE__ */ new WeakMap(), VT = /* @__PURE__ */ new WeakMap(), HT = /* @__PURE__ */ new WeakMap(), UT = /* @__PURE__ */ new WeakMap(), WT = /* @__PURE__ */ new WeakMap(), GT = /* @__PURE__ */ new WeakMap(), KT = /* @__PURE__ */ new WeakMap(), Y(BT, 2, "shape", IT, qT), Y(BT, 4, "canceled", FT, qT, VT), Y(BT, 4, "activatorEvent", PT, qT, HT), Y(BT, 4, "sourceIdentifier", NT, qT, UT), Y(BT, 4, "targetIdentifier", MT, qT, WT), Y(BT, 4, "modifiers", jT, qT, GT), Y(BT, 2, "source", AT, qT), Y(BT, 2, "target", kT, qT), Y(BT, 2, "transform", OT, qT), ew(BT, qT);
var JT = { get rendering() {
	return Promise.resolve();
} };
function YT(e, t) {
	return typeof e == "function" ? e(t) : e ?? t;
}
var XT = class {
	constructor(e) {
		this.destroy = () => {
			this.dragOperation.status.idle || this.actions.stop({ canceled: !0 }), this.dragOperation.modifiers.forEach((e) => e.destroy()), this.registry.destroy(), this.collisionObserver.destroy();
		};
		let t = e ?? {}, n = YT(t.plugins, []), r = YT(t.sensors, []), i = YT(t.modifiers, []), a = t.renderer ?? JT, o = new Cw(this);
		this.registry = new DT(this), this.monitor = o, this.renderer = a, this.actions = new Rw(this), this.dragOperation = new qT(this), this.collisionObserver = new xw(this), this.plugins = [Tw, ...n], this.modifiers = i, this.sensors = r;
		let { destroy: s } = this, c = DS(() => {
			let e = K(() => this.dragOperation.modifiers), t = this.modifiers;
			for (let n of e) t.includes(n) || n.destroy();
			this.dragOperation.modifiers = (this.dragOperation.source?.modifiers)?.map((e) => {
				let { plugin: t, options: n } = cw(e);
				return new t(this, n);
			}) ?? t;
		});
		this.destroy = () => {
			c(), s();
		};
	}
	get plugins() {
		return this.registry.plugins.values;
	}
	set plugins(e) {
		this.registry.plugins.values = e;
	}
	get modifiers() {
		return this.registry.modifiers.values;
	}
	set modifiers(e) {
		this.registry.modifiers.values = e;
	}
	get sensors() {
		return this.registry.sensors.values;
	}
	set sensors(e) {
		this.registry.sensors.values = e;
	}
}, ZT = ({ dragOperation: e, droppable: t }) => {
	let n = e.position.current;
	if (!n) return null;
	let { id: r } = t;
	return t.shape && t.shape.containsPoint(n) ? {
		id: r,
		value: 1 / CC.distance(t.shape.center, n),
		type: Dw.PointerIntersection,
		priority: Ew.High
	} : null;
}, QT = ({ dragOperation: e, droppable: t }) => {
	let { shape: n } = e;
	if (!t.shape || !n?.current) return null;
	let r = n.current.intersectionArea(t.shape);
	if (r) {
		let { position: i } = e, a = CC.distance(t.shape.center, i.current), o = r / (n.current.area + t.shape.area - r) / a;
		return {
			id: t.id,
			value: o,
			type: Dw.ShapeIntersection,
			priority: Ew.Normal
		};
	}
	return null;
}, $T = (e) => ZT(e) ?? QT(e), eE = (e) => {
	let { dragOperation: t, droppable: n } = e, { shape: r, position: i } = t;
	if (!n.shape) return null;
	let a = r ? wC.from(r.current.boundingRectangle).corners : void 0, o = wC.from(n.shape.boundingRectangle).corners.reduce((e, t, n) => e + CC.distance(CC.from(t), a?.[n] ?? i.current), 0) / 4;
	return {
		id: n.id,
		value: 1 / o,
		type: Dw.Collision,
		priority: Ew.Normal
	};
}, tE = (e) => {
	throw TypeError(e);
}, nE = (e, t, n) => t.has(e) || tE("Cannot " + n), Z = (e, t, n) => (nE(e, t, "read from private field"), t.get(e)), rE = (e, t, n) => t.has(e) ? tE("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), iE = (e, t, n, r) => (nE(e, t, "write to private field"), t.set(e, n), n), aE = (e, t, n) => (nE(e, t, "access private method"), n);
function oE(e) {
	return e ? e instanceof KeyframeEffect ? !0 : "getKeyframes" in e && typeof e.getKeyframes == "function" : !1;
}
function sE(e, t) {
	let n = e.getAnimations();
	if (n.length > 0) for (let e of n) {
		if (e.playState !== "running") continue;
		let { effect: n } = e, r = (oE(n) ? n.getKeyframes() : []).filter(t);
		if (r.length > 0) return [r[r.length - 1], e];
	}
	return null;
}
function cE(e) {
	let { width: t, height: n, top: r, left: i, bottom: a, right: o } = e.getBoundingClientRect();
	return {
		width: t,
		height: n,
		top: r,
		left: i,
		bottom: a,
		right: o
	};
}
function lE(e) {
	let t = Object.prototype.toString.call(e);
	return t === "[object Window]" || t === "[object global]";
}
function uE(e) {
	return "nodeType" in e;
}
function dE(e) {
	return e ? lE(e) ? e : uE(e) ? "defaultView" in e ? e.defaultView ?? window : e.ownerDocument?.defaultView ?? window : window : window;
}
function fE(e) {
	let { Document: t } = dE(e);
	return e instanceof t || "nodeType" in e && e.nodeType === Node.DOCUMENT_NODE;
}
function pE(e) {
	return !e || lE(e) ? !1 : e instanceof dE(e).HTMLElement || "namespaceURI" in e && typeof e.namespaceURI == "string" && e.namespaceURI.endsWith("html");
}
function mE(e) {
	return e instanceof dE(e).SVGElement || "namespaceURI" in e && typeof e.namespaceURI == "string" && e.namespaceURI.endsWith("svg");
}
function hE(e) {
	return e ? lE(e) ? e.document : uE(e) ? fE(e) ? e : pE(e) || mE(e) ? e.ownerDocument : document : document : document;
}
function gE(e) {
	let { documentElement: t } = hE(e), n = dE(e).visualViewport, r = n?.width ?? t.clientWidth, i = n?.height ?? t.clientHeight, a = n?.offsetTop ?? 0, o = n?.offsetLeft ?? 0;
	return {
		top: a,
		left: o,
		right: o + r,
		bottom: a + i,
		width: r,
		height: i
	};
}
function _E(e, t) {
	if (vE(e) && e.open === !1) return !1;
	let { overflow: n, overflowX: r, overflowY: i } = getComputedStyle(e);
	return n === "visible" && r === "visible" && i === "visible";
}
function vE(e) {
	return e.tagName === "DETAILS";
}
function yE(e, t = e.getBoundingClientRect(), n = 0) {
	let r = t, { ownerDocument: i } = e, a = i.defaultView ?? window, o = e.parentElement;
	for (; o && o !== i.documentElement;) {
		if (!_E(o)) {
			let e = o.getBoundingClientRect(), t = n * (e.bottom - e.top), i = n * (e.right - e.left), a = n * (e.bottom - e.top), s = n * (e.right - e.left);
			r = {
				top: Math.max(r.top, e.top - t),
				right: Math.min(r.right, e.right + i),
				bottom: Math.min(r.bottom, e.bottom + a),
				left: Math.max(r.left, e.left - s),
				width: 0,
				height: 0
			}, r.width = r.right - r.left, r.height = r.bottom - r.top;
		}
		o = o.parentElement;
	}
	let s = a.visualViewport, c = s?.offsetTop ?? 0, l = s?.offsetLeft ?? 0, u = s?.width ?? a.innerWidth, d = s?.height ?? a.innerHeight, f = n * d, p = n * u;
	return r = {
		top: Math.max(r.top, c - f),
		right: Math.min(r.right, l + u + p),
		bottom: Math.min(r.bottom, c + d + f),
		left: Math.max(r.left, l - p),
		width: 0,
		height: 0
	}, r.width = r.right - r.left, r.height = r.bottom - r.top, r.width < 0 && (r.width = 0), r.height < 0 && (r.height = 0), r;
}
function bE(e) {
	return {
		x: e.clientX,
		y: e.clientY
	};
}
var xE = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0;
function SE(e = document, t = /* @__PURE__ */ new Set()) {
	if (t.has(e)) return [];
	t.add(e);
	let n = [e];
	for (let r of Array.from(e.querySelectorAll("iframe, frame"))) try {
		let e = r.contentDocument;
		e && !t.has(e) && n.push(...SE(e, t));
	} catch {}
	try {
		let r = e.defaultView;
		if (r && r !== window.top) {
			let i = r.parent;
			i && i.document && i.document !== e && n.push(...SE(i.document, t));
		}
	} catch {}
	return n;
}
function CE() {
	return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}
function wE() {
	let e = CE() ? window.visualViewport : null;
	return {
		x: e?.offsetLeft ?? 0,
		y: e?.offsetTop ?? 0
	};
}
function TE(e) {
	return !e || !uE(e) ? !1 : e instanceof dE(e).ShadowRoot;
}
function EE(e) {
	if (e && uE(e)) {
		let t = e.getRootNode();
		if (TE(t) || t instanceof Document) return t;
	}
	return hE(e);
}
function DE(e) {
	return e.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function OE(e) {
	let t = "input, textarea, select, canvas, [contenteditable]", n = e.cloneNode(!0), r = Array.from(e.querySelectorAll(t));
	return Array.from(n.querySelectorAll(t)).forEach((e, t) => {
		let n = r[t];
		kE(e) && kE(n) && (e.type !== "file" && (e.value = n.value), e.type === "radio" && e.name && (e.name = `Cloned__${e.name}`)), AE(e) && AE(n) && n.width > 0 && n.height > 0 && e.getContext("2d")?.drawImage(n, 0, 0);
	}), n;
}
function kE(e) {
	return "value" in e;
}
function AE(e) {
	return e.tagName === "CANVAS";
}
function jE(e, { x: t, y: n }) {
	let r = e.elementFromPoint(t, n);
	if (ME(r)) {
		let { contentDocument: e } = r;
		if (e) {
			let { left: i, top: a } = r.getBoundingClientRect();
			return jE(e, {
				x: t - i,
				y: n - a
			});
		}
	}
	return r;
}
function ME(e) {
	return e?.tagName === "IFRAME";
}
var NE = /* @__PURE__ */ new WeakMap();
function PE(e) {
	return !!e.closest("\n      input:not([disabled]),\n      select:not([disabled]),\n      textarea:not([disabled]),\n      button:not([disabled]),\n      a[href],\n      [contenteditable]:not([contenteditable=\"false\"])\n    ");
}
var FE = class {
	constructor() {
		this.entries = /* @__PURE__ */ new Set(), this.clear = () => {
			for (let e of this.entries) {
				let [t, { type: n, listener: r, options: i }] = e;
				t.removeEventListener(n, r, i);
			}
			this.entries.clear();
		};
	}
	bind(e, t) {
		let n = Array.isArray(e) ? e : [e], r = Array.isArray(t) ? t : [t], i = [];
		for (let e of n) for (let t of r) {
			let { type: n, listener: r, options: a } = t, o = [e, t];
			e.addEventListener(n, r, a), this.entries.add(o), i.push(o);
		}
		return function() {
			for (let [e, { type: t, listener: n, options: r }] of i) e.removeEventListener(t, n, r);
		};
	}
};
function IE(e) {
	let t = e?.ownerDocument.defaultView;
	if (t && t.self !== t.parent) return t.frameElement;
}
function LE(e) {
	let t = /* @__PURE__ */ new Set(), n = IE(e);
	for (; n;) t.add(n), n = IE(n);
	return t;
}
function RE(e, t) {
	let n = setTimeout(e, t);
	return () => clearTimeout(n);
}
function zE(e, t) {
	let n = () => performance.now(), r, i;
	return function(...a) {
		let o = this;
		i ? (r?.(), r = RE(() => {
			e.apply(o, a), i = n();
		}, t - (n() - i))) : (e.apply(o, a), i = n());
	};
}
function BE(e, t) {
	return e === t ? !0 : !e || !t ? !1 : e.top == t.top && e.left == t.left && e.right == t.right && e.bottom == t.bottom;
}
function VE(e, t = e.getBoundingClientRect()) {
	let { width: n, height: r } = yE(e, t);
	return n > 0 && r > 0;
}
var HE = xE ? ResizeObserver : class {
	observe() {}
	unobserve() {}
	disconnect() {}
}, UE, WE = class extends HE {
	constructor(e) {
		super((t) => {
			if (!Z(this, UE)) {
				iE(this, UE, !0);
				return;
			}
			e(t, this);
		}), rE(this, UE, !1);
	}
};
UE = /* @__PURE__ */ new WeakMap();
var GE = Array.from({ length: 100 }, (e, t) => t / 100), KE = 75, qE, JE, YE, XE, ZE, QE, $E, eD, tD, nD, rD, iD = class {
	constructor(e, t, n = {
		debug: !1,
		skipInitial: !1
	}) {
		this.element = e, this.callback = t, rE(this, tD), this.disconnect = () => {
			var e, t, n;
			iE(this, $E, !0), (e = Z(this, YE)) == null || e.disconnect(), (t = Z(this, XE)) == null || t.disconnect(), Z(this, ZE).disconnect(), (n = Z(this, QE)) == null || n.remove();
		}, rE(this, qE, !0), rE(this, JE), rE(this, YE), rE(this, XE), rE(this, ZE), rE(this, QE), rE(this, $E, !1), rE(this, eD, zE(() => {
			var e;
			let { element: t } = this;
			if ((e = Z(this, XE)) == null || e.disconnect(), Z(this, $E) || !Z(this, qE) || !t.isConnected) return;
			let n = t.ownerDocument ?? document, { innerHeight: r, innerWidth: i } = n.defaultView ?? window, a = t.getBoundingClientRect(), { top: o, left: s, bottom: c, right: l } = yE(t, a), u = -Math.floor(o), d = -Math.floor(s), f = `${u}px ${-Math.floor(i - l)}px ${-Math.floor(r - c)}px ${d}px`;
			this.boundingClientRect = a, iE(this, XE, new IntersectionObserver((e) => {
				let [n] = e, { intersectionRect: r } = n;
				(n.intersectionRatio === 1 ? wC.intersectionRatio(r, yE(t)) : n.intersectionRatio) !== 1 && Z(this, eD).call(this);
			}, {
				threshold: GE,
				rootMargin: f,
				root: n
			})), Z(this, XE).observe(t), aE(this, tD, nD).call(this);
		}, KE)), this.boundingClientRect = e.getBoundingClientRect(), iE(this, qE, VE(e, this.boundingClientRect));
		let r = !0;
		this.callback = (e) => {
			r && (r = !1, n.skipInitial) || t(e);
		};
		let i = e.ownerDocument;
		n?.debug && (iE(this, QE, document.createElement("div")), Z(this, QE).style.background = "rgba(0,0,0,0.15)", Z(this, QE).style.position = "fixed", Z(this, QE).style.pointerEvents = "none", i.body.appendChild(Z(this, QE))), iE(this, ZE, new IntersectionObserver((t) => {
			var n, r;
			let { boundingClientRect: i, isIntersecting: a } = t[t.length - 1], { width: o, height: s } = i, c = Z(this, qE);
			iE(this, qE, a), !(!o && !s) && (c && !a ? ((n = Z(this, XE)) == null || n.disconnect(), this.callback(null), (r = Z(this, YE)) == null || r.disconnect(), iE(this, YE, void 0), Z(this, QE) && (Z(this, QE).style.visibility = "hidden")) : Z(this, eD).call(this), a && !Z(this, YE) && (iE(this, YE, new WE(Z(this, eD))), Z(this, YE).observe(e)));
		}, {
			threshold: GE,
			root: i
		})), Z(this, qE) && !n.skipInitial && this.callback(this.boundingClientRect), Z(this, ZE).observe(e);
	}
};
qE = /* @__PURE__ */ new WeakMap(), JE = /* @__PURE__ */ new WeakMap(), YE = /* @__PURE__ */ new WeakMap(), XE = /* @__PURE__ */ new WeakMap(), ZE = /* @__PURE__ */ new WeakMap(), QE = /* @__PURE__ */ new WeakMap(), $E = /* @__PURE__ */ new WeakMap(), eD = /* @__PURE__ */ new WeakMap(), tD = /* @__PURE__ */ new WeakSet(), nD = function() {
	Z(this, $E) || (aE(this, tD, rD).call(this), !BE(this.boundingClientRect, Z(this, JE)) && (this.callback(this.boundingClientRect), iE(this, JE, this.boundingClientRect)));
}, rD = function() {
	if (Z(this, QE)) {
		let { top: e, left: t, width: n, height: r } = yE(this.element);
		Z(this, QE).style.overflow = "hidden", Z(this, QE).style.visibility = "visible", Z(this, QE).style.top = `${Math.floor(e)}px`, Z(this, QE).style.left = `${Math.floor(t)}px`, Z(this, QE).style.width = `${Math.floor(n)}px`, Z(this, QE).style.height = `${Math.floor(r)}px`;
	}
};
var aD = /* @__PURE__ */ new WeakMap(), oD = /* @__PURE__ */ new WeakMap();
function sD(e, t) {
	let n = aD.get(e);
	return n ||= {
		disconnect: new iD(e, (t) => {
			let n = aD.get(e);
			n && n.callbacks.forEach((e) => e(t));
		}, { skipInitial: !0 }).disconnect,
		callbacks: /* @__PURE__ */ new Set()
	}, n.callbacks.add(t), aD.set(e, n), () => {
		n.callbacks.delete(t), n.callbacks.size === 0 && (aD.delete(e), n.disconnect());
	};
}
function cD(e, t) {
	let n = /* @__PURE__ */ new Set();
	for (let r of e) {
		let e = sD(r, t);
		n.add(e);
	}
	return () => n.forEach((e) => e());
}
function lD(e, t) {
	let n = e.ownerDocument;
	if (!oD.has(n)) {
		let e = new AbortController(), t = /* @__PURE__ */ new Set();
		document.addEventListener("scroll", (e) => t.forEach((t) => t(e)), {
			capture: !0,
			passive: !0,
			signal: e.signal
		}), oD.set(n, {
			disconnect: () => e.abort(),
			listeners: t
		});
	}
	let { listeners: r, disconnect: i } = oD.get(n) ?? {};
	return !r || !i ? () => {} : (r.add(t), () => {
		r.delete(t), r.size === 0 && (i(), oD.delete(n));
	});
}
var uD, dD, fD, pD, mD = class {
	constructor(e, t, n) {
		this.callback = t, rE(this, uD), rE(this, dD, !1), rE(this, fD), rE(this, pD, zE((e) => {
			if (!Z(this, dD) && e.target && "contains" in e.target && typeof e.target.contains == "function") {
				for (let t of Z(this, fD)) if (e.target.contains(t)) {
					this.callback(Z(this, uD).boundingClientRect);
					break;
				}
			}
		}, KE));
		let r = LE(e), i = cD(r, t), a = lD(e, Z(this, pD));
		iE(this, fD, r), iE(this, uD, new iD(e, t, n)), this.disconnect = () => {
			Z(this, dD) || (iE(this, dD, !0), i(), a(), Z(this, uD).disconnect());
		};
	}
};
uD = /* @__PURE__ */ new WeakMap(), dD = /* @__PURE__ */ new WeakMap(), fD = /* @__PURE__ */ new WeakMap(), pD = /* @__PURE__ */ new WeakMap();
function hD(e) {
	return "showPopover" in e && "hidePopover" in e && typeof e.showPopover == "function" && typeof e.hidePopover == "function";
}
function gD(e) {
	try {
		hD(e) && e.isConnected && e.hasAttribute("popover") && !e.matches(":popover-open") && e.showPopover();
	} catch {}
}
function _D(e) {
	return !xE || !e ? !1 : e === hE(e).scrollingElement;
}
function vD(e) {
	let t = dE(e), n = _D(e) ? gE(e) : cE(e), r = t.visualViewport, i = _D(e) ? {
		height: r?.height ?? t.innerHeight,
		width: r?.width ?? t.innerWidth
	} : {
		height: e.clientHeight,
		width: e.clientWidth
	}, a = {
		current: {
			x: e.scrollLeft,
			y: e.scrollTop
		},
		max: {
			x: e.scrollWidth - i.width,
			y: e.scrollHeight - i.height
		}
	};
	return {
		rect: n,
		position: a,
		isTop: a.current.y <= 0,
		isLeft: a.current.x <= 0,
		isBottom: a.current.y >= a.max.y,
		isRight: a.current.x >= a.max.x
	};
}
function yD(e, t) {
	let { isTop: n, isBottom: r, isLeft: i, isRight: a, position: o } = vD(e), { x: s, y: c } = t ?? {
		x: 0,
		y: 0
	}, l = !n && o.current.y + c > 0, u = !r && o.current.y + c < o.max.y, d = !i && o.current.x + s > 0, f = !a && o.current.x + s < o.max.x;
	return {
		top: l,
		bottom: u,
		left: d,
		right: f,
		x: d || f,
		y: l || u
	};
}
var bD = class {
	constructor(e) {
		this.scheduler = e, this.pending = !1, this.tasks = /* @__PURE__ */ new Set(), this.resolvers = /* @__PURE__ */ new Set(), this.flush = () => {
			let { tasks: e, resolvers: t } = this;
			this.pending = !1, this.tasks = /* @__PURE__ */ new Set(), this.resolvers = /* @__PURE__ */ new Set();
			for (let t of e) t();
			for (let e of t) e();
		};
	}
	schedule(e) {
		return this.tasks.add(e), this.pending || (this.pending = !0, this.scheduler(this.flush)), new Promise((e) => this.resolvers.add(e));
	}
}, xD = new bD((e) => {
	typeof requestAnimationFrame == "function" ? requestAnimationFrame(e) : e();
}), SD = new bD((e) => setTimeout(e, 50)), CD = /* @__PURE__ */ new Map(), wD = CD.clear.bind(CD);
function TD(e, t = !1) {
	if (!t) return ED(e);
	let n = CD.get(e);
	return n || (n = ED(e), CD.set(e, n), SD.schedule(wD), n);
}
function ED(e) {
	return dE(e).getComputedStyle(e);
}
function DD(e, t = TD(e, !0)) {
	return t.position === "fixed" || t.position === "sticky";
}
function OD(e, t = TD(e, !0)) {
	let n = /(auto|scroll|overlay)/;
	return [
		"overflow",
		"overflowX",
		"overflowY"
	].some((e) => {
		let r = t[e];
		return typeof r == "string" ? n.test(r) : !1;
	});
}
var kD = {
	excludeElement: !0,
	escapeShadowDOM: !0
};
function AD(e, t = kD) {
	let { limit: n, excludeElement: r, escapeShadowDOM: i } = t, a = /* @__PURE__ */ new Set();
	function o(t) {
		if (n != null && a.size >= n || !t) return a;
		if (fE(t) && t.scrollingElement != null && !a.has(t.scrollingElement)) return a.add(t.scrollingElement), a;
		if (i && TE(t)) return o(t.host);
		if (!pE(t)) return mE(t) ? o(t.parentElement) : a;
		if (a.has(t)) return a;
		let s = TD(t, !0);
		if (r && t === e || OD(t, s) && a.add(t), DD(t, s)) {
			let { scrollingElement: e } = t.ownerDocument;
			return e && a.add(e), a;
		}
		return o(t.parentNode);
	}
	return e ? o(e) : a;
}
function jD(e) {
	let [t] = AD(e, { limit: 1 });
	return t ?? null;
}
function MD(e, t = window.frameElement) {
	let n = {
		x: 0,
		y: 0,
		scaleX: 1,
		scaleY: 1
	};
	if (!e) return n;
	let r = IE(e);
	for (; r;) {
		if (r === t) return n;
		let e = cE(r), { x: i, y: a } = ND(r, e);
		n.x += e.left, n.y += e.top, n.scaleX *= i, n.scaleY *= a, r = IE(r);
	}
	return n;
}
function ND(e, t = cE(e)) {
	let n = Math.round(t.width), r = Math.round(t.height);
	if (pE(e)) return {
		x: n / e.offsetWidth,
		y: r / e.offsetHeight
	};
	let i = TD(e, !0);
	return {
		x: (parseFloat(i.width) || n) / n,
		y: (parseFloat(i.height) || r) / r
	};
}
function PD(e) {
	if (e === "none") return null;
	let t = e.split(" "), n = parseFloat(t[0]), r = parseFloat(t[1]);
	return isNaN(n) && isNaN(r) ? null : {
		x: isNaN(n) ? r : n,
		y: isNaN(r) ? n : r
	};
}
function FD(e) {
	if (e === "none") return null;
	let [t, n, r = "0"] = e.split(" "), i = {
		x: parseFloat(t),
		y: parseFloat(n),
		z: parseInt(r, 10)
	};
	return isNaN(i.x) && isNaN(i.y) ? null : {
		x: isNaN(i.x) ? 0 : i.x,
		y: isNaN(i.y) ? 0 : i.y,
		z: isNaN(i.z) ? 0 : i.z
	};
}
function ID(e) {
	let { scale: t, transform: n, translate: r } = e, i = PD(t), a = FD(r), o = LD(n);
	if (!o && !i && !a) return null;
	let s = {
		x: i?.x ?? 1,
		y: i?.y ?? 1
	}, c = {
		x: a?.x ?? 0,
		y: a?.y ?? 0
	}, l = {
		x: o?.x ?? 0,
		y: o?.y ?? 0,
		scaleX: o?.scaleX ?? 1,
		scaleY: o?.scaleY ?? 1
	};
	return {
		x: c.x + l.x,
		y: c.y + l.y,
		z: a?.z ?? 0,
		scaleX: s.x * l.scaleX,
		scaleY: s.y * l.scaleY
	};
}
function LD(e) {
	if (e.startsWith("matrix3d(")) {
		let t = e.slice(9, -1).split(/, /);
		return {
			x: +t[12],
			y: +t[13],
			scaleX: +t[0],
			scaleY: +t[5]
		};
	} else if (e.startsWith("matrix(")) {
		let t = e.slice(7, -1).split(/, /);
		return {
			x: +t[4],
			y: +t[5],
			scaleX: +t[0],
			scaleY: +t[3]
		};
	}
	return null;
}
var RD = /* @__PURE__ */ ((e) => (e[e.Idle = 0] = "Idle", e[e.Forward = 1] = "Forward", e[e.Reverse = -1] = "Reverse", e))(RD || {}), zD = {
	x: .2,
	y: .2
}, BD = {
	x: 10,
	y: 10
};
function VD(e, t, n, r = 25, i = zD, a = BD) {
	let { x: o, y: s } = t, { rect: c, isTop: l, isBottom: u, isLeft: d, isRight: f } = vD(e), p = MD(e), m = ID(TD(e, !0)), h = m === null ? !1 : m?.scaleX < 0, g = m === null ? !1 : m?.scaleY < 0, _ = new wC(c.left * p.scaleX + p.x, c.top * p.scaleY + p.y, c.width * p.scaleX, c.height * p.scaleY), v = {
		x: 0,
		y: 0
	}, y = {
		x: 0,
		y: 0
	}, b = {
		height: _.height * i.y,
		width: _.width * i.x
	};
	return (!l || g && !u) && s <= _.top + b.height && n?.y !== 1 && o >= _.left - a.x && o <= _.right + a.x ? (v.y = g ? 1 : -1, y.y = r * Math.abs((_.top + b.height - s) / b.height)) : (!u || g && !l) && s >= _.bottom - b.height && n?.y !== -1 && o >= _.left - a.x && o <= _.right + a.x && (v.y = g ? -1 : 1, y.y = r * Math.abs((_.bottom - b.height - s) / b.height)), (!f || h && !d) && o >= _.right - b.width && n?.x !== -1 && s >= _.top - a.y && s <= _.bottom + a.y ? (v.x = h ? -1 : 1, y.x = r * Math.abs((_.right - b.width - o) / b.width)) : (!d || h && !f) && o <= _.left + b.width && n?.x !== 1 && s >= _.top - a.y && s <= _.bottom + a.y && (v.x = h ? 1 : -1, y.x = r * Math.abs((_.left + b.width - o) / b.width)), {
		direction: v,
		speed: y
	};
}
function HD(e) {
	return "scrollIntoViewIfNeeded" in e && typeof e.scrollIntoViewIfNeeded == "function";
}
function UD(e, t = !1) {
	if (HD(e)) {
		e.scrollIntoViewIfNeeded(t);
		return;
	}
	if (!pE(e)) return e.scrollIntoView();
	var n = jD(e);
	if (!pE(n)) return;
	let r = TD(n, !0), i = parseInt(r.getPropertyValue("border-top-width")), a = parseInt(r.getPropertyValue("border-left-width")), o = e.offsetTop - n.offsetTop < n.scrollTop, s = e.offsetTop - n.offsetTop + e.clientHeight - i > n.scrollTop + n.clientHeight, c = e.offsetLeft - n.offsetLeft < n.scrollLeft, l = e.offsetLeft - n.offsetLeft + e.clientWidth - a > n.scrollLeft + n.clientWidth, u = o && !s;
	(o || s) && t && (n.scrollTop = e.offsetTop - n.offsetTop - n.clientHeight / 2 - i + e.clientHeight / 2), (c || l) && t && (n.scrollLeft = e.offsetLeft - n.offsetLeft - n.clientWidth / 2 - a + e.clientWidth / 2), (o || s || c || l) && !t && e.scrollIntoView(u);
}
function WD(e, t, n) {
	let { scaleX: r, scaleY: i, x: a, y: o } = t, s = e.left + a + (1 - r) * parseFloat(n), c = e.top + o + (1 - i) * parseFloat(n.slice(n.indexOf(" ") + 1)), l = r ? e.width * r : e.width, u = i ? e.height * i : e.height;
	return {
		width: l,
		height: u,
		top: c,
		right: s + l,
		bottom: c + u,
		left: s
	};
}
function GD(e, t, n) {
	let { scaleX: r, scaleY: i, x: a, y: o } = t, s = e.left - a - (1 - r) * parseFloat(n), c = e.top - o - (1 - i) * parseFloat(n.slice(n.indexOf(" ") + 1)), l = r ? e.width / r : e.width, u = i ? e.height / i : e.height;
	return {
		width: l,
		height: u,
		top: c,
		right: s + l,
		bottom: c + u,
		left: s
	};
}
function KD({ element: e, keyframes: t, options: n }) {
	return e.animate(t, n).finished;
}
function qD(e, t = TD(e).translate, n = !0) {
	if (n) {
		let t = sE(e, (e) => "translate" in e);
		if (t) {
			let { translate: e = "" } = t[0];
			if (typeof e == "string") {
				let t = FD(e);
				if (t) return t;
			}
		}
	}
	if (t) {
		let e = FD(t);
		if (e) return e;
	}
	return {
		x: 0,
		y: 0,
		z: 0
	};
}
var JD = new bD((e) => setTimeout(e, 0)), YD = /* @__PURE__ */ new Map(), XD = YD.clear.bind(YD);
function ZD(e) {
	let t = e.ownerDocument, n = YD.get(t);
	if (n) return n;
	n = t.getAnimations(), YD.set(t, n), JD.schedule(XD);
	let r = n.filter((t) => oE(t.effect) && t.effect.target === e);
	return YD.set(e, r), n;
}
function QD(e, t) {
	let n = ZD(e).filter((e) => {
		if (oE(e.effect)) {
			let { target: n } = e.effect;
			if ((n && t.isValidTarget?.call(t, n)) ?? !0) return e.effect.getKeyframes().some((e) => {
				for (let n of t.properties) if (e[n]) return !0;
			});
		}
	}).map((e) => {
		let { effect: t, currentTime: n } = e, r = t?.getComputedTiming().duration;
		if (!(e.pending || e.playState === "finished") && typeof r == "number" && typeof n == "number" && n < r) return e.currentTime = r, () => {
			e.currentTime = n;
		};
	});
	if (n.length > 0) return () => n.forEach((e) => e?.());
}
var $D = class extends wC {
	constructor(e, t = {}) {
		let { frameTransform: n = MD(e), ignoreTransforms: r, getBoundingClientRect: i = cE } = t, a = QD(e, {
			properties: [
				"transform",
				"translate",
				"scale",
				"width",
				"height"
			],
			isValidTarget: (t) => (t !== e || CE()) && t.contains(e)
		}), o = i(e), { top: s, left: c, width: l, height: u } = o, d, f = TD(e), p = ID(f), m = {
			x: p?.scaleX ?? 1,
			y: p?.scaleY ?? 1
		}, h = eO(e, f);
		a?.(), p && (d = GD(o, p, f.transformOrigin), (r || h) && (s = d.top, c = d.left, l = d.width, u = d.height));
		let g = {
			width: d?.width ?? l,
			height: d?.height ?? u
		};
		if (h && !r && d) {
			let e = WD(d, h, f.transformOrigin);
			s = e.top, c = e.left, l = e.width, u = e.height, m.x = h.scaleX, m.y = h.scaleY;
		}
		n && (r || (c *= n.scaleX, l *= n.scaleX, s *= n.scaleY, u *= n.scaleY), c += n.x, s += n.y), super(c, s, l, u), this.scale = m, this.intrinsicWidth = g.width, this.intrinsicHeight = g.height;
	}
};
function eO(e, t) {
	let n = e.getAnimations(), r = null;
	if (!n.length) return null;
	for (let e of n) {
		if (e.playState !== "running") continue;
		let n = oE(e.effect) ? e.effect.getKeyframes() : [], i = n[n.length - 1];
		if (!i) continue;
		let { transform: a, translate: o, scale: s } = i;
		if (a || o || s) {
			let e = ID({
				transform: typeof a == "string" && a ? a : t.transform,
				translate: typeof o == "string" && o ? o : t.translate,
				scale: typeof s == "string" && s ? s : t.scale
			});
			e && (r = r ? {
				x: r.x + e.x,
				y: r.y + e.y,
				z: r.z ?? e.z,
				scaleX: r.scaleX * e.scaleX,
				scaleY: r.scaleY * e.scaleY
			} : e);
		}
	}
	return r;
}
function tO(e) {
	return "style" in e && typeof e.style == "object" && e.style !== null && "setProperty" in e.style && "removeProperty" in e.style && typeof e.style.setProperty == "function" && typeof e.style.removeProperty == "function";
}
var nO = class {
	constructor(e) {
		this.element = e, this.initial = /* @__PURE__ */ new Map();
	}
	set(e, t = "") {
		let { element: n } = this;
		if (tO(n)) for (let [r, i] of Object.entries(e)) {
			let e = `${t}${r}`;
			this.initial.has(e) || this.initial.set(e, n.style.getPropertyValue(e)), n.style.setProperty(e, typeof i == "string" ? i : `${i}px`);
		}
	}
	remove(e, t = "") {
		let { element: n } = this;
		if (tO(n)) for (let r of e) {
			let e = `${t}${r}`;
			n.style.removeProperty(e);
		}
	}
	reset() {
		let { element: e } = this;
		if (tO(e)) {
			for (let [t, n] of this.initial) e.style.setProperty(t, n);
			e.getAttribute("style") === "" && e.removeAttribute("style");
		}
	}
};
function rO(e) {
	return e ? e instanceof dE(e).Element || uE(e) && e.nodeType === Node.ELEMENT_NODE : !1;
}
function iO(e) {
	if (!e) return !1;
	let { KeyboardEvent: t } = dE(e.target);
	return e instanceof t;
}
function aO(e) {
	if (!e) return !1;
	let { PointerEvent: t } = dE(e.target);
	return e instanceof t;
}
function oO(e) {
	if (!rO(e)) return !1;
	let { tagName: t } = e;
	return t === "INPUT" || t === "TEXTAREA" || sO(e);
}
function sO(e) {
	return e.hasAttribute("contenteditable") && e.getAttribute("contenteditable") !== "false";
}
var cO = {};
function lO(e) {
	let t = cO[e] == null ? 0 : cO[e] + 1;
	return cO[e] = t, `${e}-${t}`;
}
//#endregion
//#region node_modules/.pnpm/@dnd-kit+dom@0.3.2/node_modules/@dnd-kit/dom/index.js
var uO = Object.create, dO = Object.defineProperty, fO = Object.defineProperties, pO = Object.getOwnPropertyDescriptor, mO = Object.getOwnPropertyDescriptors, hO = Object.getOwnPropertySymbols, gO = Object.prototype.hasOwnProperty, _O = Object.prototype.propertyIsEnumerable, vO = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e), yO = (e) => {
	throw TypeError(e);
}, bO = (e, t, n) => t in e ? dO(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, xO = (e, t) => {
	for (var n in t ||= {}) gO.call(t, n) && bO(e, n, t[n]);
	if (hO) for (var n of hO(t)) _O.call(t, n) && bO(e, n, t[n]);
	return e;
}, SO = (e, t) => fO(e, mO(t)), CO = (e, t) => dO(e, "name", {
	value: t,
	configurable: !0
}), wO = (e, t) => {
	var n = {};
	for (var r in e) gO.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && hO) for (var r of hO(e)) t.indexOf(r) < 0 && _O.call(e, r) && (n[r] = e[r]);
	return n;
}, TO = (e) => [
	,
	,
	,
	uO(e?.[vO("metadata")] ?? null)
], EO = [
	"class",
	"method",
	"getter",
	"setter",
	"accessor",
	"field",
	"value",
	"get",
	"set"
], DO = (e) => e !== void 0 && typeof e != "function" ? yO("Function expected") : e, OO = (e, t, n, r, i) => ({
	kind: EO[e],
	name: t,
	metadata: r,
	addInitializer: (e) => n._ ? yO("Already initialized") : i.push(DO(e || null))
}), kO = (e, t) => bO(t, vO("metadata"), e[3]), AO = (e, t, n, r) => {
	for (var i = 0, a = e[t >> 1], o = a && a.length; i < o; i++) t & 1 ? a[i].call(n) : r = a[i].call(n, r);
	return r;
}, jO = (e, t, n, r, i, a) => {
	var o, s, c, l, u, d = t & 7, f = !!(t & 8), p = !!(t & 16), m = d > 3 ? e.length + 1 : d ? f ? 1 : 2 : 0, h = EO[d + 5], g = d > 3 && (e[m - 1] = []), _ = e[m] || (e[m] = []), v = d && (!p && !f && (i = i.prototype), d < 5 && (d > 3 || !p) && pO(d < 4 ? i : {
		get [n]() {
			return Q(this, a);
		},
		set [n](e) {
			return FO(this, a, e);
		}
	}, n));
	d ? p && d < 4 && CO(a, (d > 2 ? "set " : d > 1 ? "get " : "") + n) : CO(i, n);
	for (var y = r.length - 1; y >= 0; y--) l = OO(d, n, c = {}, e[3], _), d && (l.static = f, l.private = p, u = l.access = { has: p ? (e) => NO(i, e) : (e) => n in e }, d ^ 3 && (u.get = p ? (e) => (d ^ 1 ? Q : IO)(e, i, d ^ 4 ? a : v.get) : (e) => e[n]), d > 2 && (u.set = p ? (e, t) => FO(e, i, t, d ^ 4 ? a : v.set) : (e, t) => e[n] = t)), s = (0, r[y])(d ? d < 4 ? p ? a : v[h] : d > 4 ? void 0 : {
		get: v.get,
		set: v.set
	} : i, l), c._ = 1, d ^ 4 || s === void 0 ? DO(s) && (d > 4 ? g.unshift(s) : d ? p ? a = s : v[h] = s : i = s) : typeof s != "object" || !s ? yO("Object expected") : (DO(o = s.get) && (v.get = o), DO(o = s.set) && (v.set = o), DO(o = s.init) && g.unshift(o));
	return d || kO(e, i), v && dO(i, n, v), p ? d ^ 4 ? a : v : i;
}, MO = (e, t, n) => t.has(e) || yO("Cannot " + n), NO = (e, t) => Object(t) === t ? e.has(t) : yO("Cannot use the \"in\" operator on this value"), Q = (e, t, n) => (MO(e, t, "read from private field"), n ? n.call(e) : t.get(e)), PO = (e, t, n) => t.has(e) ? yO("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), FO = (e, t, n, r) => (MO(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), IO = (e, t, n) => (MO(e, t, "access private method"), n), LO = {
	role: "button",
	roleDescription: "draggable"
}, RO = "dnd-kit-description", zO = "dnd-kit-announcement", BO = { draggable: "To pick up a draggable item, press the space bar. While dragging, use the arrow keys to move the item in a given direction. Press space again to drop the item in its new position, or press escape to cancel." }, VO = {
	dragstart({ operation: { source: e } }) {
		if (e) return `Picked up draggable item ${e.id}.`;
	},
	dragover({ operation: { source: e, target: t } }) {
		if (!(!e || e.id === t?.id)) return t ? `Draggable item ${e.id} was moved over droppable target ${t.id}.` : `Draggable item ${e.id} is no longer over a droppable target.`;
	},
	dragend({ operation: { source: e, target: t }, canceled: n }) {
		if (e) return n ? `Dragging was cancelled. Draggable item ${e.id} was dropped.` : t ? `Draggable item ${e.id} was dropped over droppable target ${t.id}` : `Draggable item ${e.id} was dropped.`;
	}
};
function HO(e) {
	let t = e.tagName.toLowerCase();
	return [
		"input",
		"select",
		"textarea",
		"a",
		"button"
	].includes(t);
}
function UO(e, t) {
	let n = document.createElement("div");
	return n.id = e, n.style.setProperty("display", "none"), n.textContent = t, n;
}
function WO(e) {
	let t = document.createElement("div");
	return t.id = e, t.setAttribute("role", "status"), t.setAttribute("aria-live", "polite"), t.setAttribute("aria-atomic", "true"), t.style.setProperty("position", "fixed"), t.style.setProperty("width", "1px"), t.style.setProperty("height", "1px"), t.style.setProperty("margin", "-1px"), t.style.setProperty("border", "0"), t.style.setProperty("padding", "0"), t.style.setProperty("overflow", "hidden"), t.style.setProperty("clip", "rect(0 0 0 0)"), t.style.setProperty("clip-path", "inset(100%)"), t.style.setProperty("white-space", "nowrap"), t;
}
var GO = ["dragover", "dragmove"], KO = class extends pw {
	constructor(e, t) {
		super(e);
		let { id: n, idPrefix: { description: r = RO, announcement: i = zO } = {}, announcements: a = VO, screenReaderInstructions: o = BO, debounce: s = 500 } = t ?? {}, c = n ? `${r}-${n}` : lO(r), l = n ? `${i}-${n}` : lO(i), u, d, f, p, m = (e = p) => {
			!f || !e || f?.nodeValue !== e && (f.nodeValue = e);
		}, h = () => xD.schedule(m), g = qO(h, s), _ = Object.entries(a).map(([e, t]) => this.manager.monitor.addEventListener(e, (n, r) => {
			let i = f;
			if (!i) return;
			let a = t?.(n, r);
			a && i.nodeValue !== a && (p = a, GO.includes(e) ? g() : (h(), g.cancel()));
		})), v = () => {
			let e = [];
			u?.isConnected || (u = UO(c, o.draggable), e.push(u)), d?.isConnected || (d = WO(l), f = document.createTextNode(""), d.appendChild(f), e.push(d)), e.length > 0 && document.body.append(...e);
		}, y = /* @__PURE__ */ new Set();
		function b() {
			for (let e of y) e();
		}
		this.registerEffect(() => {
			y.clear();
			for (let e of this.manager.registry.draggables.value) {
				let t = e.handle ?? e.element;
				if (t) {
					(!u || !d) && y.add(v), (!HO(t) || CE()) && !t.hasAttribute("tabindex") && y.add(() => t.setAttribute("tabindex", "0")), !t.hasAttribute("role") && t.tagName.toLowerCase() !== "button" && y.add(() => t.setAttribute("role", LO.role)), t.hasAttribute("aria-roledescription") || y.add(() => t.setAttribute("aria-roledescription", LO.roleDescription)), t.hasAttribute("aria-describedby") || y.add(() => t.setAttribute("aria-describedby", c));
					for (let n of ["aria-pressed", "aria-grabbed"]) {
						let r = String(e.isDragging);
						t.getAttribute(n) !== r && y.add(() => t.setAttribute(n, r));
					}
					let n = String(e.disabled);
					t.getAttribute("aria-disabled") !== n && y.add(() => t.setAttribute("aria-disabled", n));
				}
			}
			y.size > 0 && xD.schedule(b);
		}), this.destroy = () => {
			super.destroy(), u?.remove(), d?.remove(), _.forEach((e) => e());
		};
	}
};
function qO(e, t) {
	let n, r = () => {
		clearTimeout(n), n = setTimeout(e, t);
	};
	return r.cancel = () => clearTimeout(n), r;
}
var JO = class extends pw {
	constructor(e, t) {
		super(e, t), this.manager = e;
		let n = CS(() => hE(this.manager.dragOperation.source?.element));
		this.destroy = Yx(() => {
			let { dragOperation: e } = this.manager, { cursor: t = "grabbing", nonce: r } = this.options ?? {};
			if (e.status.initialized) {
				let e = n.value, i = e.createElement("style");
				return r && i.setAttribute("nonce", r), i.textContent = `* { cursor: ${t} !important; }`, e.head.appendChild(i), () => i.remove();
			}
		});
	}
}, YO = /* @__PURE__ */ new Map(), XO, ZO, QO, $O, ek, tk, nk, rk, ik, ak, ok, sk, ck, lk = class extends (ek = mw, $O = [q], QO = [TS], ZO = [TS], XO = [TS], ek) {
	constructor(e) {
		super(e), AO(nk, 5, this), PO(this, ik), PO(this, tk, /* @__PURE__ */ new Set()), PO(this, rk, AO(nk, 8, this, /* @__PURE__ */ new Set())), AO(nk, 11, this), this.registerEffect(IO(this, ik, ak));
	}
	register(e) {
		return Q(this, tk).add(e), () => {
			Q(this, tk).delete(e);
		};
	}
	addRoot(e) {
		return K(() => {
			let t = new Set(this.additionalRoots);
			t.add(e), this.additionalRoots = t;
		}), () => {
			K(() => {
				let t = new Set(this.additionalRoots);
				t.delete(e), this.additionalRoots = t;
			});
		};
	}
	get sourceRoot() {
		let { source: e } = this.manager.dragOperation;
		return EE(e?.element ?? null);
	}
	get targetRoot() {
		let { target: e } = this.manager.dragOperation;
		return EE(e?.element ?? null);
	}
	get roots() {
		let { status: e } = this.manager.dragOperation;
		if (e.initializing || e.initialized) {
			let e = [this.sourceRoot, this.targetRoot].filter((e) => e != null);
			return /* @__PURE__ */ new Set([...e, ...this.additionalRoots]);
		}
		return /* @__PURE__ */ new Set();
	}
};
nk = TO(ek), tk = /* @__PURE__ */ new WeakMap(), rk = /* @__PURE__ */ new WeakMap(), ik = /* @__PURE__ */ new WeakSet(), ak = function() {
	let { roots: e } = this, t = [];
	for (let n of e) for (let e of Q(this, tk)) t.push(IO(this, ik, ok).call(this, n, e));
	return () => {
		for (let e of t) e();
	};
}, ok = function(e, t) {
	let n = YO.get(e);
	n || (n = /* @__PURE__ */ new Map(), YO.set(e, n));
	let r = n.get(t);
	if (!r) {
		let i = fE(e) ? IO(this, ik, sk).call(this, e, n, t) : IO(this, ik, ck).call(this, e, n, t);
		if (!i) return () => {};
		r = i, n.set(t, r);
	}
	r.refCount++;
	let i = !1;
	return () => {
		i || (i = !0, r.refCount--, r.refCount === 0 && r.cleanup());
	};
}, sk = function(e, t, n) {
	let r = e.createElement("style");
	r.textContent = n, e.head.prepend(r);
	let i = new MutationObserver((t) => {
		for (let n of t) for (let t of Array.from(n.removedNodes)) if (t === r) {
			e.head.prepend(r);
			return;
		}
	});
	return i.observe(e.head, { childList: !0 }), {
		refCount: 0,
		cleanup: () => {
			i.disconnect(), r.remove(), t.delete(n), t.size === 0 && YO.delete(e);
		}
	};
}, ck = function(e, t, n) {
	"adoptedStyleSheets" in e && Array.isArray(e.adoptedStyleSheets);
	let { CSSStyleSheet: r } = e.ownerDocument.defaultView ?? {};
	if (!r) return null;
	let i = new r();
	return i.replaceSync(n), e.adoptedStyleSheets.push(i), {
		refCount: 0,
		cleanup: () => {
			if (TE(e) && e.host?.isConnected) {
				let t = e.adoptedStyleSheets.indexOf(i);
				t !== -1 && e.adoptedStyleSheets.splice(t, 1);
			}
			t.delete(n), t.size === 0 && YO.delete(e);
		}
	};
}, jO(nk, 4, "additionalRoots", $O, lk, rk), jO(nk, 2, "sourceRoot", QO, lk), jO(nk, 2, "targetRoot", ZO, lk), jO(nk, 2, "roots", XO, lk), kO(nk, lk);
var uk = "data-dnd-", dk = `${uk}dropping`, fk = "--dnd-", pk = `${uk}dragging`, mk = `${uk}placeholder`, hk = [
	pk,
	mk,
	"popover",
	"aria-pressed",
	"aria-grabbing"
], gk = ["view-transition-name"], _k = `
  :is(:root,:host) [${pk}] {
    position: fixed !important;
    pointer-events: none !important;
    touch-action: none;
    z-index: calc(infinity);
    will-change: translate;
    top: var(${fk}top, 0px) !important;
    left: var(${fk}left, 0px) !important;
    right: unset !important;
    bottom: unset !important;
    width: var(${fk}width, auto);
    max-width: var(${fk}width, auto);
    height: var(${fk}height, auto);
    max-height: var(${fk}height, auto);
    transition: var(${fk}transition) !important;
  }

  :is(:root,:host) [${mk}] {
    transition: none;
  }

  :is(:root,:host) [${mk}='hidden'] {
    visibility: hidden;
  }

  [${pk}] * {
    pointer-events: none !important;
  }

  [${pk}]:not([${dk}]) {
    translate: var(${fk}translate) !important;
  }

  [${pk}][style*='${fk}scale'] {
    scale: var(${fk}scale) !important;
    transform-origin: var(${fk}transform-origin) !important;
  }

  @layer dnd-kit {
    :where([${pk}][popover]) {
      overflow: visible;
      background: unset;
      border: unset;
      margin: unset;
      padding: unset;
      color: inherit;

      &:is(input, button) {
        border: revert;
        background: revert;
      }
    }
  }
  [${pk}]::backdrop, [${uk}overlay]:not([${pk}]) {
    display: none;
    visibility: hidden;
  }
`.replace(/\n+/g, " ").replace(/\s+/g, " ").trim();
function vk(e, t = "hidden") {
	return K(() => {
		let { element: n, manager: r } = e;
		if (!n || !r) return;
		let i = yk(n, r.registry.droppables), a = [], o = OE(n), { remove: s } = o;
		return bk(i, o, a), xk(o, t), o.remove = () => {
			a.forEach((e) => e()), s.call(o);
		}, o;
	});
}
function yk(e, t) {
	let n = /* @__PURE__ */ new Map();
	for (let r of t) if (r.element && (e === r.element || e.contains(r.element))) {
		let e = `${uk}${lO("dom-id")}`;
		r.element.setAttribute(e, ""), n.set(r, e);
	}
	return n;
}
function bk(e, t, n) {
	for (let [r, i] of e) {
		if (!r.element) continue;
		let e = `[${i}]`, a = t.matches(e) ? t : t.querySelector(e);
		if (r.element.removeAttribute(i), !a) continue;
		let o = r.element;
		r.proxy = a, a.removeAttribute(i), NE.set(o, a), n.push(() => {
			NE.delete(o), r.proxy = void 0;
		});
	}
}
function xk(e, t = "hidden") {
	e.setAttribute("inert", "true"), e.setAttribute("tab-index", "-1"), e.setAttribute("aria-hidden", "true"), e.setAttribute(mk, t);
}
function Sk(e, t) {
	return e === t ? !0 : IE(e) === IE(t);
}
function Ck(e) {
	let { target: t } = e;
	"newState" in e && e.newState === "closed" && rO(t) && t.hasAttribute("popover") && requestAnimationFrame(() => gD(t));
}
function wk(e) {
	return e.tagName === "TR";
}
function Tk(e, t, n) {
	let r = new MutationObserver((r) => {
		let i = !1;
		for (let n of r) {
			if (n.target !== e) {
				i = !0;
				continue;
			}
			if (n.type !== "attributes") continue;
			let r = n.attributeName;
			if (r.startsWith("aria-") || hk.includes(r)) continue;
			let a = e.getAttribute(r);
			if (r === "style") {
				if (tO(e) && tO(t)) {
					let n = e.style;
					for (let e of Array.from(t.style)) n.getPropertyValue(e) === "" && t.style.removeProperty(e);
					for (let e of Array.from(n)) {
						if (gk.includes(e) || e.startsWith(fk)) continue;
						let r = n.getPropertyValue(e);
						t.style.setProperty(e, r);
					}
				}
			} else a === null ? t.removeAttribute(r) : t.setAttribute(r, a);
		}
		i && n && (t.innerHTML = e.innerHTML);
	});
	return r.observe(e, {
		attributes: !0,
		subtree: !0,
		childList: !0
	}), r;
}
function Ek(e, t, n) {
	let r = new MutationObserver((r) => {
		for (let i of r) if (i.addedNodes.length !== 0) for (let r of Array.from(i.addedNodes)) {
			if (r.contains(e) && e.nextElementSibling !== t) {
				e.insertAdjacentElement("afterend", t), gD(n);
				return;
			}
			if (r.contains(t) && t.previousElementSibling !== e) {
				t.insertAdjacentElement("beforebegin", e), gD(n);
				return;
			}
		}
	});
	return r.observe(e.ownerDocument.body, {
		childList: !0,
		subtree: !0
	}), r;
}
function Dk(e) {
	return new ResizeObserver(() => {
		var t;
		let n = new $D(e.placeholder, {
			frameTransform: e.frameTransform,
			ignoreTransforms: !0
		}), r = e.transformOrigin ?? {
			x: 1,
			y: 1
		}, i = (e.width - n.width) * r.x + e.delta.x, a = (e.height - n.height) * r.y + e.delta.y, o = wE();
		if (e.styles.set({
			width: n.width - e.widthOffset,
			height: n.height - e.heightOffset,
			top: e.top + a + o.y,
			left: e.left + i + o.x
		}, fk), (t = e.getElementMutationObserver()) == null || t.takeRecords(), wk(e.element) && wk(e.placeholder)) {
			let t = Array.from(e.element.cells), n = Array.from(e.placeholder.cells);
			e.getSavedCellWidths() || e.setSavedCellWidths(t.map((e) => e.style.width));
			for (let [e, r] of t.entries()) {
				let t = n[e];
				r.style.width = `${t.getBoundingClientRect().width}px`;
			}
		}
		e.dragOperation.shape = new $D(e.feedbackElement);
	});
}
var Ok = 250, kk = "ease";
function Ak(e) {
	var t;
	let { animation: n } = e;
	if (typeof n == "function") {
		let t = n({
			element: e.element,
			feedbackElement: e.feedbackElement,
			placeholder: e.placeholder,
			translate: e.translate,
			moved: e.moved
		});
		Promise.resolve(t).then(() => {
			e.cleanup(), requestAnimationFrame(e.restoreFocus);
		});
		return;
	}
	let { duration: r = Ok, easing: i = kk } = n ?? {};
	gD(e.feedbackElement);
	let [, a] = sE(e.feedbackElement, (e) => "translate" in e) ?? [];
	a?.pause();
	let o = e.placeholder ?? e.element, s = { frameTransform: Sk(e.feedbackElement, o) ? null : void 0 }, c = new $D(e.feedbackElement, s), l = FD(TD(e.feedbackElement).translate) ?? e.translate, u = new $D(o, s), d = wC.delta(c, u, e.alignment), f = {
		x: l.x - d.x,
		y: l.y - d.y
	}, p = Math.round(c.intrinsicHeight) === Math.round(u.intrinsicHeight) ? {} : {
		minHeight: [`${c.intrinsicHeight}px`, `${u.intrinsicHeight}px`],
		maxHeight: [`${c.intrinsicHeight}px`, `${u.intrinsicHeight}px`]
	}, m = Math.round(c.intrinsicWidth) === Math.round(u.intrinsicWidth) ? {} : {
		minWidth: [`${c.intrinsicWidth}px`, `${u.intrinsicWidth}px`],
		maxWidth: [`${c.intrinsicWidth}px`, `${u.intrinsicWidth}px`]
	};
	e.styles.set({ transition: e.transition }, fk), e.feedbackElement.setAttribute(dk, ""), (t = e.getElementMutationObserver()) == null || t.takeRecords(), KD({
		element: e.feedbackElement,
		keyframes: SO(xO(xO({}, p), m), { translate: [`${l.x}px ${l.y}px 0`, `${f.x}px ${f.y}px 0`] }),
		options: {
			duration: DE(dE(e.feedbackElement)) ? 0 : e.moved || e.feedbackElement !== e.element ? r : 0,
			easing: i
		}
	}).then(() => {
		e.feedbackElement.removeAttribute(dk), a?.finish(), e.cleanup(), requestAnimationFrame(e.restoreFocus);
	});
}
var jk, Mk, Nk, Pk, Fk, Ik, Lk, Rk = class extends (Mk = pw, jk = [q], Mk) {
	constructor(e, t) {
		super(e, t), PO(this, Fk), PO(this, Pk, AO(Nk, 8, this)), AO(Nk, 11, this), this.state = {
			initial: {},
			current: {}
		};
		let n = e.registry.plugins.get(lk), r = n?.register(_k);
		if (r) {
			let e = this.destroy.bind(this);
			this.destroy = () => {
				r(), e();
			};
		}
		this.registerEffect(IO(this, Fk, Ik).bind(this, n)), this.registerEffect(IO(this, Fk, Lk));
	}
};
Nk = TO(Mk), Pk = /* @__PURE__ */ new WeakMap(), Fk = /* @__PURE__ */ new WeakSet(), Ik = function(e) {
	let { overlay: t } = this;
	if (!t || !e) return;
	let n = EE(t);
	if (n) return e.addRoot(n);
}, Lk = function() {
	let { state: e, manager: t, options: n } = this, { dragOperation: r } = t, { position: i, source: a, status: o } = r;
	if (o.idle) {
		e.current = {}, e.initial = {};
		return;
	}
	if (!a) return;
	let { element: s, feedback: c } = a;
	if (!s || c === "none" || !o.initialized || o.initializing) return;
	let { initial: l } = e, u = this.overlay ?? s, d = MD(u), f = MD(s), p = !Sk(s, u), m = new $D(s, {
		frameTransform: p ? f : null,
		ignoreTransforms: !p
	}), h = {
		x: f.scaleX / d.scaleX,
		y: f.scaleY / d.scaleY
	}, { width: g, height: _, top: v, left: y } = m;
	p && (g /= h.x, _ /= h.y);
	let b = new nO(u), { transition: x, translate: S, boxSizing: C, paddingBlockStart: w, paddingBlockEnd: T, paddingInlineStart: E, paddingInlineEnd: D, borderInlineStartWidth: O, borderInlineEndWidth: k, borderBlockStartWidth: A, borderBlockEndWidth: j } = TD(s), ee = c === "clone", M = C === "content-box", N = M ? parseInt(E) + parseInt(D) + parseInt(O) + parseInt(k) : 0, te = M ? parseInt(w) + parseInt(T) + parseInt(A) + parseInt(j) : 0, P = c !== "move" && !this.overlay ? vk(a, ee ? "clone" : "hidden") : null, ne = K(() => iO(t.dragOperation.activatorEvent));
	if (S !== "none") {
		let e = FD(S);
		e && !l.translate && (l.translate = e);
	}
	if (!l.transformOrigin) {
		let e = K(() => i.current);
		l.transformOrigin = {
			x: (e.x - y * d.scaleX - d.x) / (g * d.scaleX),
			y: (e.y - v * d.scaleY - d.y) / (_ * d.scaleY)
		};
	}
	let { transformOrigin: re } = l, ie = v * d.scaleY + d.y, ae = y * d.scaleX + d.x;
	if (!l.coordinates && (l.coordinates = {
		x: ae,
		y: ie
	}, h.x !== 1 || h.y !== 1)) {
		let { scaleX: e, scaleY: t } = f, { x: n, y: r } = re;
		l.coordinates.x += (g * e - g) * n, l.coordinates.y += (_ * t - _) * r;
	}
	l.dimensions ||= {
		width: g,
		height: _
	}, l.frameTransform ||= d;
	let oe = {
		x: l.coordinates.x - ae,
		y: l.coordinates.y - ie
	}, se = {
		width: (l.dimensions.width * l.frameTransform.scaleX - g * d.scaleX) * re.x,
		height: (l.dimensions.height * l.frameTransform.scaleY - _ * d.scaleY) * re.y
	}, ce = {
		x: oe.x / d.scaleX + se.width,
		y: oe.y / d.scaleY + se.height
	}, le = {
		left: y + ce.x,
		top: v + ce.y
	};
	u.setAttribute(pk, "true");
	let ue = K(() => r.transform), de = l.translate ?? {
		x: 0,
		y: 0
	}, fe = ue.x * d.scaleX + de.x, pe = ue.y * d.scaleY + de.y, me = wE();
	b.set({
		width: g - N,
		height: _ - te,
		top: le.top + me.y,
		left: le.left + me.x,
		translate: `${fe}px ${pe}px 0`,
		transition: x ? `${x}, translate 0ms linear` : "",
		scale: p ? `${h.x} ${h.y}` : "",
		"transform-origin": `${re.x * 100}% ${re.y * 100}%`
	}, fk), P && (s.insertAdjacentElement("afterend", P), n?.rootElement && (typeof n.rootElement == "function" ? n.rootElement(a) : n.rootElement).appendChild(s)), hD(u) && (u.hasAttribute("popover") || u.setAttribute("popover", "manual"), gD(u), u.addEventListener("beforetoggle", Ck));
	let he, ge, _e, ve = Dk({
		placeholder: P,
		element: s,
		feedbackElement: u,
		frameTransform: d,
		transformOrigin: re,
		width: g,
		height: _,
		top: v,
		left: y,
		widthOffset: N,
		heightOffset: te,
		delta: ce,
		styles: b,
		dragOperation: r,
		getElementMutationObserver: () => he,
		getSavedCellWidths: () => _e,
		setSavedCellWidths: (e) => {
			_e = e;
		}
	}), ye = new $D(u);
	K(() => r.shape = ye);
	let be = dE(u), xe = (e) => {
		this.manager.actions.stop({ event: e });
	}, Se = DE(be);
	ne && be.addEventListener("resize", xe), K(() => a.status) === "idle" && requestAnimationFrame(() => a.status = "dragging"), P && (ve.observe(P), he = Tk(s, P, ee), ge = Ek(s, P, u));
	let Ce = t.dragOperation.source?.id, we = () => {
		if (!ne || Ce == null) return;
		let e = t.registry.draggables.get(Ce), n = e?.handle ?? e?.element;
		pE(n) && n.focus();
	}, Te = () => {
		if (he?.disconnect(), ge?.disconnect(), ve.disconnect(), be.removeEventListener("resize", xe), hD(u) && (u.removeEventListener("beforetoggle", Ck), u.removeAttribute("popover")), u.removeAttribute(pk), b.reset(), _e && wk(s)) {
			let e = Array.from(s.cells);
			for (let [t, n] of e.entries()) n.style.width = _e[t] ?? "";
		}
		a.status = "idle";
		let t = e.current.translate != null;
		P && (t || P.parentElement !== u.parentElement) && u.isConnected && P.replaceWith(u), P?.remove();
	}, F = n?.dropAnimation, Ee = this, De = DS(() => {
		let { transform: t, status: n } = r;
		if (!(!t.x && !t.y && !e.current.translate) && n.dragging) {
			let n = l.translate ?? {
				x: 0,
				y: 0
			}, i = {
				x: t.x / d.scaleX + n.x,
				y: t.y / d.scaleY + n.y
			}, a = e.current.translate, o = K(() => r.modifiers), s = K(() => r.shape?.current), c = ne && !Se ? "250ms cubic-bezier(0.25, 1, 0.5, 1)" : "0ms linear";
			if (b.set({
				transition: `${x}, translate ${c}`,
				translate: `${i.x}px ${i.y}px 0`
			}, fk), he?.takeRecords(), s && s !== ye && a && !o.length) {
				let e = CC.delta(i, a);
				r.shape = wC.from(s.boundingRectangle).translate(e.x * d.scaleX, e.y * d.scaleY);
			} else r.shape = new $D(u);
			e.current.translate = i;
		}
	}, function() {
		if (r.status.dropped) {
			this.dispose(), a.status = "dropping";
			let n = Ee.dropAnimation === void 0 ? F : Ee.dropAnimation, r = e.current.translate, i = r != null;
			if (!r && s !== u && (r = {
				x: 0,
				y: 0
			}), !r || n === null) {
				Te();
				return;
			}
			t.renderer.rendering.then(() => {
				Ak({
					element: s,
					feedbackElement: u,
					placeholder: P,
					translate: r,
					moved: i,
					transition: x,
					alignment: a.alignment,
					styles: b,
					animation: n ?? void 0,
					getElementMutationObserver: () => he,
					cleanup: Te,
					restoreFocus: we
				});
			});
		}
	});
	return () => {
		Te(), De();
	};
}, jO(Nk, 4, "overlay", jk, Rk, Pk), kO(Nk, Rk), Rk.configure = sw(Rk);
var zk = Rk, Bk = !0, Vk = !1, Hk, Uk, Wk, Gk = (Wk = [q], RD.Forward), Kk, qk, Jk;
Uk = (Hk = [q], RD.Reverse);
var Yk = class {
	constructor() {
		PO(this, qk, AO(Kk, 8, this, Bk)), AO(Kk, 11, this), PO(this, Jk, AO(Kk, 12, this, Bk)), AO(Kk, 15, this);
	}
	isLocked(e) {
		return e === RD.Idle ? !1 : e == null ? this[RD.Forward] === Bk && this[RD.Reverse] === Bk : this[e] === Bk;
	}
	unlock(e) {
		e !== RD.Idle && (this[e] = Vk);
	}
};
Kk = TO(null), qk = /* @__PURE__ */ new WeakMap(), Jk = /* @__PURE__ */ new WeakMap(), jO(Kk, 4, Gk, Wk, Yk, qk), jO(Kk, 4, Uk, Hk, Yk, Jk), kO(Kk, Yk);
var Xk = [RD.Forward, RD.Reverse], Zk = class {
	constructor() {
		this.x = new Yk(), this.y = new Yk();
	}
	isLocked() {
		return this.x.isLocked() && this.y.isLocked();
	}
}, Qk = class extends pw {
	constructor(e) {
		super(e);
		let t = zx(new Zk()), n = null;
		this.signal = t, Yx(() => {
			let { status: r } = e.dragOperation;
			if (!r.initialized) {
				n = null, t.value = new Zk();
				return;
			}
			let { delta: i } = e.dragOperation.position;
			if (n) {
				let e = {
					x: $k(i.x, n.x),
					y: $k(i.y, n.y)
				}, r = t.peek();
				Ox(() => {
					for (let t of PC) for (let n of Xk) e[t] === n && r[t].unlock(n);
					t.value = r;
				});
			}
			n = i;
		});
	}
	get current() {
		return this.signal.peek();
	}
};
function $k(e, t) {
	return Math.sign(e - t);
}
var eA, tA, nA, rA, iA, aA, oA = class extends (tA = mw, eA = [q], tA) {
	constructor(e) {
		super(e), PO(this, rA, AO(nA, 8, this, !1)), AO(nA, 11, this), PO(this, iA), PO(this, aA, () => {
			if (!Q(this, iA)) return;
			let { element: e, by: t } = Q(this, iA);
			t.y && (e.scrollTop += t.y), t.x && (e.scrollLeft += t.x);
		}), this.scroll = (e) => {
			if (this.disabled) return !1;
			let t = this.getScrollableElements();
			if (!t) return FO(this, iA, void 0), !1;
			let { position: n } = this.manager.dragOperation, r = n?.current;
			if (r) {
				let { by: n } = e ?? {}, i = n ? {
					x: sA(n.x),
					y: sA(n.y)
				} : void 0, a = i ? void 0 : this.scrollIntentTracker.current;
				if (a?.isLocked()) return !1;
				for (let e of t) {
					let t = yD(e, n);
					if (t.x || t.y) {
						let { speed: t, direction: o } = VD(e, r, i);
						if (a) for (let e of PC) a[e].isLocked(o[e]) && (t[e] = 0, o[e] = 0);
						if (o.x || o.y) {
							let { x: r, y: i } = n ?? o, a = r * t.x, s = i * t.y;
							if (a || s) {
								let t = Q(this, iA)?.by;
								if (this.autoScrolling && t && (t.x && !a || t.y && !s)) continue;
								return FO(this, iA, {
									element: e,
									by: {
										x: a,
										y: s
									}
								}), xD.schedule(Q(this, aA)), !0;
							}
						}
					}
				}
			}
			return FO(this, iA, void 0), !1;
		};
		let t = null, n = null, r = CS(() => {
			let { position: n, source: r } = e.dragOperation;
			if (!n) return null;
			let i = jE(EE(r?.element), n.current);
			return i && (t = i), i ?? t;
		}), i = CS(() => {
			let t = r.value, { documentElement: i } = hE(t);
			if (!t || t === i) {
				let { target: t } = e.dragOperation, r = t?.element;
				if (r) {
					let e = AD(r, { excludeElement: !1 });
					return n = e, e;
				}
			}
			if (t) {
				let e = AD(t, { excludeElement: !1 });
				return this.autoScrolling && n && e.size < n?.size ? n : (n = e, e);
			}
			return n = null, null;
		}, wS);
		this.getScrollableElements = () => i.value, this.scrollIntentTracker = new Qk(e), this.destroy = e.monitor.addEventListener("dragmove", (t) => {
			this.disabled || t.defaultPrevented || !iO(e.dragOperation.activatorEvent) || !t.by || this.scroll({ by: t.by }) && t.preventDefault();
		});
	}
};
nA = TO(tA), rA = /* @__PURE__ */ new WeakMap(), iA = /* @__PURE__ */ new WeakMap(), aA = /* @__PURE__ */ new WeakMap(), jO(nA, 4, "autoScrolling", eA, oA, rA), kO(nA, oA);
function sA(e) {
	return e > 0 ? RD.Forward : e < 0 ? RD.Reverse : RD.Idle;
}
var cA = new class {
	constructor(e) {
		this.scheduler = e, this.pending = !1, this.tasks = /* @__PURE__ */ new Set(), this.resolvers = /* @__PURE__ */ new Set(), this.flush = () => {
			let { tasks: e, resolvers: t } = this;
			this.pending = !1, this.tasks = /* @__PURE__ */ new Set(), this.resolvers = /* @__PURE__ */ new Set();
			for (let t of e) t();
			for (let e of t) e();
		};
	}
	schedule(e) {
		return this.tasks.add(e), this.pending || (this.pending = !0, this.scheduler(this.flush)), new Promise((e) => this.resolvers.add(e));
	}
}((e) => {
	typeof requestAnimationFrame == "function" ? requestAnimationFrame(e) : e();
}), lA = 10, uA = class extends pw {
	constructor(e, t) {
		super(e);
		let n = e.registry.plugins.get(oA);
		if (!n) throw Error("AutoScroller plugin depends on Scroller plugin");
		this.destroy = Yx(() => {
			if (this.disabled) return;
			let { position: t, status: r } = e.dragOperation;
			if (r.dragging) if (n.scroll()) {
				n.autoScrolling = !0;
				let e = setInterval(() => cA.schedule(n.scroll), lA);
				return () => {
					clearInterval(e);
				};
			} else n.autoScrolling = !1;
		});
	}
}, dA = {
	capture: !0,
	passive: !0
}, fA, pA = class extends mw {
	constructor(e) {
		super(e), PO(this, fA), this.handleScroll = () => {
			Q(this, fA) ?? FO(this, fA, setTimeout(() => {
				this.manager.collisionObserver.forceUpdate(!1), FO(this, fA, void 0);
			}, 50));
		};
		let { dragOperation: t } = this.manager;
		this.destroy = Yx(() => {
			if (t.status.dragging) {
				let e = t.source?.element?.ownerDocument ?? document;
				return e.addEventListener("scroll", this.handleScroll, dA), () => {
					e.removeEventListener("scroll", this.handleScroll, dA);
				};
			}
		});
	}
};
fA = /* @__PURE__ */ new WeakMap();
var mA = class extends pw {
	constructor(e, t) {
		super(e, t), this.manager = e, this.destroy = Yx(() => {
			let { dragOperation: e } = this.manager, { nonce: t } = this.options ?? {};
			if (e.status.initialized) {
				let e = document.createElement("style");
				return t && e.setAttribute("nonce", t), e.textContent = "* { user-select: none !important; -webkit-user-select: none !important; }", document.head.appendChild(e), hA(), document.addEventListener("selectionchange", hA, { capture: !0 }), () => {
					document.removeEventListener("selectionchange", hA, { capture: !0 }), e.remove();
				};
			}
		});
	}
};
function hA() {
	var e;
	(e = document.getSelection()) == null || e.removeAllRanges();
}
var gA = Object.freeze({
	offset: 10,
	keyboardCodes: {
		start: ["Space", "Enter"],
		cancel: ["Escape"],
		end: [
			"Space",
			"Enter",
			"Tab"
		],
		up: ["ArrowUp"],
		down: ["ArrowDown"],
		left: ["ArrowLeft"],
		right: ["ArrowRight"]
	},
	preventActivation(e, t) {
		let n = t.handle ?? t.element;
		return e.target !== n;
	}
}), _A, vA = class extends ST {
	constructor(e, t) {
		super(e), this.manager = e, this.options = t, PO(this, _A, []), this.listeners = new FE(), this.handleSourceKeyDown = (e, t, n) => {
			if (this.disabled || e.defaultPrevented || !rO(e.target) || t.disabled) return;
			let { keyboardCodes: r = gA.keyboardCodes, preventActivation: i = gA.preventActivation } = n ?? {};
			r.start.includes(e.code) && this.manager.dragOperation.status.idle && (i?.(e, t) || this.handleStart(e, t, n));
		};
	}
	bind(e, t = this.options) {
		return Yx(() => {
			let n = e.handle ?? e.element, r = (n) => {
				iO(n) && this.handleSourceKeyDown(n, e, t);
			};
			if (n) return n.addEventListener("keydown", r), () => {
				n.removeEventListener("keydown", r);
			};
		});
	}
	handleStart(e, t, n) {
		let { element: r } = t;
		if (!r) throw Error("Source draggable does not have an associated element");
		e.preventDefault(), e.stopImmediatePropagation(), UD(r);
		let { center: i } = new $D(r);
		if (this.manager.actions.start({
			event: e,
			coordinates: {
				x: i.x,
				y: i.y
			},
			source: t
		}).signal.aborted) return this.cleanup();
		this.sideEffects();
		let a = hE(r), o = [this.listeners.bind(a, [{
			type: "keydown",
			listener: (e) => this.handleKeyDown(e, t, n),
			options: { capture: !0 }
		}])];
		Q(this, _A).push(...o);
	}
	handleKeyDown(e, t, n) {
		let { keyboardCodes: r = gA.keyboardCodes } = n ?? {};
		if (bA(e, [...r.end, ...r.cancel])) {
			e.preventDefault();
			let t = bA(e, r.cancel);
			this.handleEnd(e, t);
			return;
		}
		bA(e, r.up) ? this.handleMove("up", e) : bA(e, r.down) && this.handleMove("down", e), bA(e, r.left) ? this.handleMove("left", e) : bA(e, r.right) && this.handleMove("right", e);
	}
	handleEnd(e, t) {
		this.manager.actions.stop({
			event: e,
			canceled: t
		}), this.cleanup();
	}
	handleMove(e, t) {
		let { shape: n } = this.manager.dragOperation, r = t.shiftKey ? 5 : 1, i = {
			x: 0,
			y: 0
		}, a = this.options?.offset ?? gA.offset;
		if (typeof a == "number" && (a = {
			x: a,
			y: a
		}), n) {
			switch (e) {
				case "up":
					i = {
						x: 0,
						y: -a.y * r
					};
					break;
				case "down":
					i = {
						x: 0,
						y: a.y * r
					};
					break;
				case "left":
					i = {
						x: -a.x * r,
						y: 0
					};
					break;
				case "right":
					i = {
						x: a.x * r,
						y: 0
					};
					break;
			}
			(i.x || i.y) && (t.preventDefault(), this.manager.actions.move({
				event: t,
				by: i
			}));
		}
	}
	sideEffects() {
		let e = this.manager.registry.plugins.get(uA);
		e?.disabled === !1 && (e.disable(), Q(this, _A).push(() => {
			e.enable();
		}));
	}
	cleanup() {
		Q(this, _A).forEach((e) => e()), FO(this, _A, []);
	}
	destroy() {
		this.cleanup(), this.listeners.clear();
	}
};
_A = /* @__PURE__ */ new WeakMap(), vA.configure = sw(vA), vA.defaults = gA;
var yA = vA;
function bA(e, t) {
	return t.includes(e.code);
}
var xA, SA = class extends TT {
	constructor() {
		super(...arguments), PO(this, xA);
	}
	onEvent(e) {
		switch (e.type) {
			case "pointerdown":
				FO(this, xA, bE(e));
				break;
			case "pointermove":
				if (!Q(this, xA)) return;
				let { x: t, y: n } = bE(e), r = {
					x: t - Q(this, xA).x,
					y: n - Q(this, xA).y
				}, { tolerance: i } = this.options;
				if (i && MC(r, i)) {
					this.abort();
					return;
				}
				MC(r, this.options.value) && this.activate(e);
				break;
			case "pointerup":
				this.abort();
				break;
		}
	}
	abort() {
		FO(this, xA, void 0);
	}
};
xA = /* @__PURE__ */ new WeakMap();
var CA, wA, TA = class extends TT {
	constructor() {
		super(...arguments), PO(this, CA), PO(this, wA);
	}
	onEvent(e) {
		switch (e.type) {
			case "pointerdown":
				FO(this, wA, bE(e)), FO(this, CA, setTimeout(() => this.activate(e), this.options.value));
				break;
			case "pointermove":
				if (!Q(this, wA)) return;
				let { x: t, y: n } = bE(e);
				MC({
					x: t - Q(this, wA).x,
					y: n - Q(this, wA).y
				}, this.options.tolerance) && this.abort();
				break;
			case "pointerup":
				this.abort();
				break;
		}
	}
	abort() {
		Q(this, CA) && (clearTimeout(Q(this, CA)), FO(this, wA, void 0), FO(this, CA, void 0));
	}
};
CA = /* @__PURE__ */ new WeakMap(), wA = /* @__PURE__ */ new WeakMap();
var EA = class {};
EA.Delay = TA, EA.Distance = SA;
var DA = Object.freeze({
	activationConstraints(e, t) {
		let { pointerType: n, target: r } = e;
		if (!(n === "mouse" && rO(r) && (t.handle === r || t.handle?.contains(r)))) return n === "touch" ? [new EA.Delay({
			value: 250,
			tolerance: 5
		})] : oO(r) && !e.defaultPrevented ? [new EA.Delay({
			value: 200,
			tolerance: 0
		})] : [new EA.Delay({
			value: 200,
			tolerance: 10
		}), new EA.Distance({ value: 5 })];
	},
	preventActivation(e, t) {
		let { target: n } = e;
		return n === t.element || n === t.handle || !rO(n) || t.handle?.contains(n) ? !1 : PE(n);
	}
}), OA, kA = class extends ST {
	constructor(e, t) {
		super(e), this.manager = e, this.options = t, PO(this, OA, /* @__PURE__ */ new Set()), this.listeners = new FE(), this.latest = {
			event: void 0,
			coordinates: void 0
		}, this.handleMove = () => {
			let { event: e, coordinates: t } = this.latest;
			!e || !t || this.manager.actions.move({
				event: e,
				to: t
			});
		}, this.handleCancel = this.handleCancel.bind(this), this.handlePointerUp = this.handlePointerUp.bind(this), this.handleKeyDown = this.handleKeyDown.bind(this);
	}
	activationConstraints(e, t, n = this.options) {
		let { activationConstraints: r = DA.activationConstraints } = n ?? {};
		return typeof r == "function" ? r(e, t) : r;
	}
	bind(e, t = this.options) {
		return Yx(() => {
			let n = new AbortController(), { signal: r } = n, i = (n) => {
				aO(n) && this.handlePointerDown(n, e, t);
			}, a = [e.handle ?? e.element];
			t?.activatorElements && (a = Array.isArray(t.activatorElements) ? t.activatorElements : t.activatorElements(e));
			for (let e of a) e && (FA(e.ownerDocument.defaultView), e.addEventListener("pointerdown", i, { signal: r }));
			return () => n.abort();
		});
	}
	handlePointerDown(e, t, n) {
		if (this.disabled || !e.isPrimary || e.button !== 0 || !rO(e.target) || t.disabled || jA(e) || !this.manager.dragOperation.status.idle) return;
		let { preventActivation: r = DA.preventActivation } = n ?? {};
		if (r?.(e, t)) return;
		let { target: i } = e, a = pE(i) && i.draggable && i.getAttribute("draggable") === "true", o = MD(t.element), { x: s, y: c } = bE(e);
		this.initialCoordinates = {
			x: s * o.scaleX + o.x,
			y: c * o.scaleY + o.y
		};
		let l = this.activationConstraints(e, t, n);
		e.sensor = this;
		let u = new CT(l, (e) => this.handleStart(t, e));
		u.signal.onabort = () => this.handleCancel(e), u.onEvent(e), this.controller = u;
		let d = SE(), f = this.listeners.bind(d, [
			{
				type: "pointermove",
				listener: (e) => this.handlePointerMove(e, t)
			},
			{
				type: "pointerup",
				listener: this.handlePointerUp,
				options: { capture: !0 }
			},
			{
				type: "pointercancel",
				listener: this.handleCancel
			},
			{
				type: "dragstart",
				listener: a ? this.handleCancel : MA,
				options: { capture: !0 }
			}
		]);
		Q(this, OA).add(() => {
			f(), this.initialCoordinates = void 0;
		});
	}
	handlePointerMove(e, t) {
		var n;
		if (this.controller?.activated === !1) {
			(n = this.controller) == null || n.onEvent(e);
			return;
		}
		if (this.manager.dragOperation.status.dragging) {
			let n = bE(e), r = MD(t.element);
			n.x = n.x * r.scaleX + r.x, n.y = n.y * r.scaleY + r.y, e.preventDefault(), e.stopPropagation(), this.latest.event = e, this.latest.coordinates = n, xD.schedule(this.handleMove);
		}
	}
	handlePointerUp(e) {
		let { status: t } = this.manager.dragOperation;
		if (!t.idle) {
			e.preventDefault(), e.stopPropagation();
			let n = !t.initialized;
			this.manager.actions.stop({
				event: e,
				canceled: n
			});
		}
		this.cleanup();
	}
	handleKeyDown(e) {
		e.key === "Escape" && (e.preventDefault(), this.handleCancel(e));
	}
	handleStart(e, t) {
		let { manager: n, initialCoordinates: r } = this;
		if (!r || !n.dragOperation.status.idle || t.defaultPrevented) return;
		if (n.actions.start({
			coordinates: r,
			event: t,
			source: e
		}).signal.aborted) return this.cleanup();
		t.preventDefault();
		let i = hE(t.target).body;
		i.setPointerCapture(t.pointerId);
		let a = rO(t.target) ? [t.target, i] : i, o = this.listeners.bind(a, [
			{
				type: "touchmove",
				listener: MA,
				options: { passive: !1 }
			},
			{
				type: "click",
				listener: MA
			},
			{
				type: "contextmenu",
				listener: MA
			},
			{
				type: "keydown",
				listener: this.handleKeyDown
			}
		]);
		Q(this, OA).add(o);
	}
	handleCancel(e) {
		let { dragOperation: t } = this.manager;
		t.status.initialized && this.manager.actions.stop({
			event: e,
			canceled: !0
		}), this.cleanup();
	}
	cleanup() {
		this.latest = {
			event: void 0,
			coordinates: void 0
		}, Q(this, OA).forEach((e) => e()), Q(this, OA).clear();
	}
	destroy() {
		this.cleanup(), this.listeners.clear();
	}
};
OA = /* @__PURE__ */ new WeakMap(), kA.configure = sw(kA), kA.defaults = DA;
var AA = kA;
function jA(e) {
	return "sensor" in e;
}
function MA(e) {
	e.preventDefault();
}
function NA() {}
var PA = /* @__PURE__ */ new WeakSet();
function FA(e) {
	!e || PA.has(e) || (e.addEventListener("touchmove", NA, {
		capture: !1,
		passive: !1
	}), PA.add(e));
}
var IA = {
	modifiers: [],
	plugins: [
		KO,
		uA,
		JO,
		zk,
		mA
	],
	sensors: [AA, yA]
}, LA = class extends XT {
	constructor(e = {}) {
		let t = YT(e.plugins, IA.plugins), n = YT(e.sensors, IA.sensors), r = YT(e.modifiers, IA.modifiers);
		super(SO(xO({}, e), {
			plugins: [
				pA,
				oA,
				lk,
				...t
			],
			sensors: n,
			modifiers: r
		}));
	}
}, RA, zA, BA, VA, HA, UA, WA, GA, KA = class extends (VA = sT, BA = [q], zA = [q], RA = [q], VA) {
	constructor(e, t) {
		var n = e, { element: r, effects: i = () => [], handle: a, feedback: o = "default" } = n, s = wO(n, [
			"element",
			"effects",
			"handle",
			"feedback"
		]);
		super(xO({ effects: () => [...i(), () => {
			let { manager: e } = this;
			if (!e) return;
			let t = (this.sensors?.map(cw) ?? [...e.sensors]).map((t) => {
				let n = t instanceof ST ? t : e.registry.register(t.plugin), r = t instanceof ST ? void 0 : t.options;
				return n.bind(this, r);
			});
			return function() {
				t.forEach((e) => e());
			};
		}] }, s), t), PO(this, UA, AO(HA, 8, this)), AO(HA, 11, this), PO(this, WA, AO(HA, 12, this)), AO(HA, 15, this), PO(this, GA, AO(HA, 16, this)), AO(HA, 19, this), this.element = r, this.handle = a, this.feedback = o;
	}
};
HA = TO(VA), UA = /* @__PURE__ */ new WeakMap(), WA = /* @__PURE__ */ new WeakMap(), GA = /* @__PURE__ */ new WeakMap(), jO(HA, 4, "handle", BA, KA, UA), jO(HA, 4, "element", zA, KA, WA), jO(HA, 4, "feedback", RA, KA, GA), kO(HA, KA);
var qA, JA, YA, XA, ZA, QA, $A, ej, tj, nj, rj = class extends (YA = xT, JA = [q], qA = [q], YA) {
	constructor(e, t) {
		var n = e, { element: r, effects: i = () => [] } = n, a = wO(n, ["element", "effects"]);
		let { collisionDetector: o = $T } = a, s = (e) => {
			let { manager: t, element: n } = this;
			if (!n || e === null) {
				this.shape = void 0;
				return;
			}
			if (!t) return;
			let r = new $D(n), i = K(() => this.shape);
			return r && i?.equals(r) ? i : (this.shape = r, r);
		}, c = zx(!1);
		super(SO(xO({}, a), {
			collisionDetector: o,
			effects: () => [
				...i(),
				() => {
					let { element: e, manager: t } = this;
					if (!t) return;
					let { dragOperation: n } = t, { source: r } = n;
					c.value = !!(r && n.status.initialized && e && !this.disabled && this.accepts(r));
				},
				() => {
					let { element: e } = this;
					if (c.value && e) {
						let t = new mD(e, s);
						return () => {
							t.disconnect(), this.shape = void 0;
						};
					}
				},
				() => {
					if (this.manager?.dragOperation.status.initialized) return () => {
						this.shape = void 0;
					};
				}
			]
		}), t), PO(this, tj), PO(this, ZA, AO(XA, 8, this)), AO(XA, 11, this), PO(this, nj, AO(XA, 12, this)), AO(XA, 15, this), this.element = r, this.refreshShape = () => s();
	}
	set element(e) {
		FO(this, tj, e, ej);
	}
	get element() {
		return this.proxy ?? Q(this, tj, $A);
	}
};
XA = TO(YA), ZA = /* @__PURE__ */ new WeakMap(), tj = /* @__PURE__ */ new WeakSet(), nj = /* @__PURE__ */ new WeakMap(), QA = jO(XA, 20, "#element", JA, tj, ZA), $A = QA.get, ej = QA.set, jO(XA, 4, "proxy", qA, rj, nj), kO(XA, rj);
//#endregion
//#region node_modules/.pnpm/@dnd-kit+dom@0.3.2/node_modules/@dnd-kit/dom/sortable.js
var ij = Object.create, aj = Object.defineProperty, oj = Object.defineProperties, sj = Object.getOwnPropertyDescriptor, cj = Object.getOwnPropertyDescriptors, lj = Object.getOwnPropertySymbols, uj = Object.prototype.hasOwnProperty, dj = Object.prototype.propertyIsEnumerable, fj = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e), pj = (e) => {
	throw TypeError(e);
}, mj = (e, t, n) => t in e ? aj(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, hj = (e, t) => {
	for (var n in t ||= {}) uj.call(t, n) && mj(e, n, t[n]);
	if (lj) for (var n of lj(t)) dj.call(t, n) && mj(e, n, t[n]);
	return e;
}, gj = (e, t) => oj(e, cj(t)), _j = (e, t) => {
	var n = {};
	for (var r in e) uj.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && lj) for (var r of lj(e)) t.indexOf(r) < 0 && dj.call(e, r) && (n[r] = e[r]);
	return n;
}, vj = (e) => [
	,
	,
	,
	ij(null)
], yj = [
	"class",
	"method",
	"getter",
	"setter",
	"accessor",
	"field",
	"value",
	"get",
	"set"
], bj = (e) => e !== void 0 && typeof e != "function" ? pj("Function expected") : e, xj = (e, t, n, r, i) => ({
	kind: yj[e],
	name: t,
	metadata: r,
	addInitializer: (e) => n._ ? pj("Already initialized") : i.push(bj(e || null))
}), Sj = (e, t) => mj(t, fj("metadata"), e[3]), Cj = (e, t, n, r) => {
	for (var i = 0, a = e[t >> 1], o = a && a.length; i < o; i++) t & 1 ? a[i].call(n) : r = a[i].call(n, r);
	return r;
}, wj = (e, t, n, r, i, a) => {
	for (var o, s, c, l, u, d = t & 7, f = !1, p = !1, m = e.length + 1, h = yj[d + 5], g = e[m - 1] = [], _ = e[m] || (e[m] = []), v = (i = i.prototype, sj({
		get [n]() {
			return Ej(this, a);
		},
		set [n](e) {
			return Oj(this, a, e);
		}
	}, n)), y = r.length - 1; y >= 0; y--) l = xj(d, n, c = {}, e[3], _), l.static = f, l.private = p, u = l.access = { has: (e) => n in e }, u.get = (e) => e[n], u.set = (e, t) => e[n] = t, s = (0, r[y])({
		get: v.get,
		set: v.set
	}, l), c._ = 1, s === void 0 ? bj(s) && (v[h] = s) : typeof s != "object" || !s ? pj("Object expected") : (bj(o = s.get) && (v.get = o), bj(o = s.set) && (v.set = o), bj(o = s.init) && g.unshift(o));
	return v && aj(i, n, v), i;
}, Tj = (e, t, n) => t.has(e) || pj("Cannot " + n), Ej = (e, t, n) => (Tj(e, t, "read from private field"), t.get(e)), Dj = (e, t, n) => t.has(e) ? pj("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), Oj = (e, t, n, r) => (Tj(e, t, "write to private field"), t.set(e, n), n);
function kj(e) {
	return e instanceof uM || e instanceof lM;
}
var Aj = 10, jj = class extends pw {
	constructor(e) {
		super(e);
		let t = Yx(() => {
			let { dragOperation: t } = e;
			if (iO(t.activatorEvent) && kj(t.source) && t.status.initialized) {
				let t = e.registry.plugins.get(oA);
				if (t) return t.disable(), () => t.enable();
			}
		}), n = e.monitor.addEventListener("dragmove", (e, t) => {
			queueMicrotask(() => {
				if (this.disabled || e.defaultPrevented || !e.nativeEvent) return;
				let { dragOperation: n } = t;
				if (!iO(e.nativeEvent) || !kj(n.source) || !n.shape) return;
				let { actions: r, collisionObserver: i, registry: a } = t, { by: o } = e;
				if (!o) return;
				let s = Mj(o), { source: c, target: l } = n, { center: u } = n.shape.current, d = [], f = [];
				Ox(() => {
					for (let e of a.droppables) {
						let { id: t } = e;
						if (!e.accepts(c) || t === l?.id && kj(e) || !e.element) continue;
						let n = e.shape, r = new $D(e.element, { getBoundingClientRect: (e) => yE(e, void 0, .2) });
						!r.height || !r.width || (s == "down" && u.y + Aj < r.center.y || s == "up" && u.y - Aj > r.center.y || s == "left" && u.x - Aj > r.center.x || s == "right" && u.x + Aj < r.center.x) && (d.push(e), e.shape = r, f.push(() => e.shape = n));
					}
				}), e.preventDefault(), i.disable();
				let p = i.computeCollisions(d, eE);
				Ox(() => f.forEach((e) => e()));
				let [m] = p;
				if (!m) return;
				let { id: h } = m, { index: g, group: _ } = c.sortable;
				r.setDropTarget(h).then(() => {
					let { source: e, target: t, shape: a } = n;
					if (!e || !kj(e) || !a) return;
					let { index: o, group: s, target: c } = e.sortable, l = g !== o || _ !== s, u = l ? c : t?.element;
					if (!u) return;
					UD(u);
					let d = new $D(u);
					if (!d) return;
					let f = wC.delta(d, wC.from(a.current.boundingRectangle), e.alignment);
					r.move({ by: f }), l ? r.setDropTarget(e.id).then(() => i.enable()) : i.enable();
				});
			});
		});
		this.destroy = () => {
			n(), t();
		};
	}
};
function Mj(e) {
	let { x: t, y: n } = e;
	if (t > 0) return "right";
	if (t < 0) return "left";
	if (n > 0) return "down";
	if (n < 0) return "up";
}
var Nj = Object.defineProperty, Pj = Object.defineProperties, Fj = Object.getOwnPropertyDescriptors, Ij = Object.getOwnPropertySymbols, Lj = Object.prototype.hasOwnProperty, Rj = Object.prototype.propertyIsEnumerable, zj = (e, t, n) => t in e ? Nj(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, Bj = (e, t) => {
	for (var n in t ||= {}) Lj.call(t, n) && zj(e, n, t[n]);
	if (Ij) for (var n of Ij(t)) Rj.call(t, n) && zj(e, n, t[n]);
	return e;
}, Vj = (e, t) => Pj(e, Fj(t));
function Hj(e, t, n) {
	if (t === n) return e;
	let r = e.slice();
	return r.splice(n, 0, r.splice(t, 1)[0]), r;
}
function Uj(e) {
	return "initialIndex" in e && typeof e.initialIndex == "number" && "index" in e && typeof e.index == "number";
}
function Wj(e, t, n) {
	let { source: r, target: i, canceled: a } = t.operation;
	if (!r || !i || a) return "preventDefault" in t && t.preventDefault(), e;
	let o = (e, t) => e === t || typeof e == "object" && "id" in e && e.id === t;
	if (Array.isArray(e)) {
		let s = e.findIndex((e) => o(e, r.id)), c = e.findIndex((e) => o(e, i.id));
		if (s === -1 || c === -1) {
			if (Uj(r)) {
				let i = r.initialIndex, a = r.index;
				return i === a || i < 0 || i >= e.length ? ("preventDefault" in t && t.preventDefault(), e) : n(e, i, a);
			}
			return e;
		}
		if (!a && "index" in r && typeof r.index == "number") {
			let t = r.index;
			if (t !== s) return n(e, s, t);
		}
		return n(e, s, c);
	}
	let s = Object.entries(e), c = -1, l, u = -1, d;
	for (let [e, t] of s) if (c === -1 && (c = t.findIndex((e) => o(e, r.id)), c !== -1 && (l = e)), u === -1 && (u = t.findIndex((e) => o(e, i.id)), u !== -1 && (d = e)), c !== -1 && u !== -1) break;
	if (c === -1 && Uj(r)) {
		let i = r.initialGroup, a = r.initialIndex, o = r.group, s = r.index;
		if (i == null || o == null || !(i in e) || !(o in e) || i === o && a === s) return "preventDefault" in t && t.preventDefault(), e;
		if (i === o) return Vj(Bj({}, e), { [i]: n(e[i], a, s) });
		let c = e[i][a];
		return Vj(Bj({}, e), {
			[i]: [...e[i].slice(0, a), ...e[i].slice(a + 1)],
			[o]: [
				...e[o].slice(0, s),
				c,
				...e[o].slice(s)
			]
		});
	}
	if (!r.manager) return e;
	let { dragOperation: f } = r.manager, p = f.shape?.current.center ?? f.position.current;
	if (d == null && i.id in e) {
		let t = i.shape && p.y > i.shape.center.y ? e[i.id].length : 0;
		d = i.id, u = t;
	}
	if (l == null || d == null || l === d && c === u) {
		if (l != null && l === d && c === u && Uj(r)) {
			let t = r.group != null && r.group !== l, i = r.index !== c;
			if (t || i) {
				let t = r.group ?? l;
				if (t in e) {
					if (l === t) return Vj(Bj({}, e), { [l]: n(e[l], c, r.index) });
					let i = e[l][c];
					return Vj(Bj({}, e), {
						[l]: [...e[l].slice(0, c), ...e[l].slice(c + 1)],
						[t]: [
							...e[t].slice(0, r.index),
							i,
							...e[t].slice(r.index)
						]
					});
				}
			}
		}
		return "preventDefault" in t && t.preventDefault(), e;
	}
	if (l === d) return Vj(Bj({}, e), { [l]: n(e[l], c, u) });
	let m = i.shape && Math.round(p.y) > Math.round(i.shape.center.y) ? 1 : 0, h = e[l][c];
	return Vj(Bj({}, e), {
		[l]: [...e[l].slice(0, c), ...e[l].slice(c + 1)],
		[d]: [
			...e[d].slice(0, u + m),
			h,
			...e[d].slice(u + m)
		]
	});
}
function Gj(e, t) {
	return Wj(e, t, Hj);
}
var Kj = "__default__", qj = class extends pw {
	constructor(e) {
		super(e);
		let t = () => {
			let t = /* @__PURE__ */ new Map();
			for (let n of e.registry.droppables) if (n instanceof uM) {
				let { sortable: e } = n, { group: r } = e, i = t.get(r);
				i || (i = /* @__PURE__ */ new Set(), t.set(r, i)), i.add(e);
			}
			for (let [e, n] of t) t.set(e, new Set(Xj(n)));
			return t;
		}, n = [e.monitor.addEventListener("dragover", (e, n) => {
			if (this.disabled) return;
			let { dragOperation: r } = n, { source: i, target: a } = r;
			if (!kj(i) || !kj(a) || i.sortable === a.sortable) return;
			let o = t(), s = i.sortable.group === a.sortable.group, c = o.get(i.sortable.group), l = s ? c : o.get(a.sortable.group);
			!c || !l || queueMicrotask(() => {
				e.defaultPrevented || n.renderer.rendering.then(() => {
					let r = t();
					for (let [e, t] of o.entries()) {
						let n = Array.from(t).entries();
						for (let [t, i] of n) if (i.index !== t || i.group !== e || !r.get(e)?.has(i)) return;
					}
					let u = i.sortable.element, d = a.sortable.element;
					if (!d || !u || !s && a.id === i.sortable.group) return;
					let f = Xj(c), p = s ? f : Xj(l), m = i.sortable.group ?? Kj, h = a.sortable.group ?? Kj, g = {
						[m]: f,
						[h]: p
					}, _ = Gj(g, e);
					if (g === _) return;
					let v = _[h].indexOf(i.sortable), y = _[h].indexOf(a.sortable);
					n.collisionObserver.disable(), Jj(u, v, d, y), Ox(() => {
						for (let [e, t] of _[m].entries()) t.index = e;
						if (!s) for (let [e, t] of _[h].entries()) t.group = a.sortable.group, t.index = e;
					}), n.actions.setDropTarget(i.id).then(() => n.collisionObserver.enable());
				});
			});
		}), e.monitor.addEventListener("dragend", (e, n) => {
			if (!e.canceled) return;
			let { dragOperation: r } = n, { source: i } = r;
			kj(i) && (i.sortable.initialIndex === i.sortable.index && i.sortable.initialGroup === i.sortable.group || queueMicrotask(() => {
				let e = t(), r = e.get(i.sortable.initialGroup);
				r && n.renderer.rendering.then(() => {
					for (let [t, n] of e.entries()) {
						let e = Array.from(n).entries();
						for (let [n, r] of e) if (r.index !== n || r.group !== t) return;
					}
					let t = Xj(r), n = i.sortable.element, a = t[i.sortable.initialIndex], o = a?.element;
					!a || !o || !n || (Jj(n, a.index, o, i.index), Ox(() => {
						for (let [t, n] of e.entries()) {
							let e = Array.from(n).values();
							for (let t of e) t.index = t.initialIndex, t.group = t.initialGroup;
						}
					}));
				});
			}));
		})];
		this.destroy = () => {
			for (let e of n) e();
		};
	}
};
function Jj(e, t, n, r) {
	let i = r < t ? "afterend" : "beforebegin";
	n.insertAdjacentElement(i, e);
}
function Yj(e, t) {
	return e.index - t.index;
}
function Xj(e) {
	return Array.from(e).sort(Yj);
}
var Zj = [jj, qj], Qj = {
	duration: 250,
	easing: "cubic-bezier(0.25, 1, 0.5, 1)",
	idle: !1
}, $j = new ZS(), eM, tM = [q], nM, rM, iM, aM, oM, sM;
eM = [q];
var cM = class {
	constructor(e, t) {
		Dj(this, rM, Cj(nM, 8, this)), Cj(nM, 11, this), Dj(this, iM), Dj(this, aM), Dj(this, oM, Cj(nM, 12, this)), Cj(nM, 15, this), Dj(this, sM), this.register = () => (Ox(() => {
			var e, t;
			(e = this.manager) == null || e.registry.register(this.droppable), (t = this.manager) == null || t.registry.register(this.draggable);
		}), () => this.unregister()), this.unregister = () => {
			Ox(() => {
				var e, t;
				(e = this.manager) == null || e.registry.unregister(this.droppable), (t = this.manager) == null || t.registry.unregister(this.draggable);
			});
		}, this.destroy = () => {
			Ox(() => {
				this.droppable.destroy(), this.draggable.destroy();
			});
		};
		var n = e, { effects: r = () => [], group: i, index: a, sensors: o, type: s, transition: c = Qj, plugins: l = Zj } = n, u = _j(n, [
			"effects",
			"group",
			"index",
			"sensors",
			"type",
			"transition",
			"plugins"
		]);
		this.droppable = new uM(u, t, this), this.draggable = new lM(gj(hj({}, u), {
			effects: () => [
				() => {
					let e = this.manager?.dragOperation.status;
					e?.initializing && this.id === this.manager?.dragOperation.source?.id && $j.clear(this.manager), e?.dragging && $j.set(this.manager, this.id, K(() => ({
						initialIndex: this.index,
						initialGroup: this.group
					})));
				},
				() => {
					let { index: e, group: t, manager: n } = this, r = Ej(this, aM), i = Ej(this, iM);
					(e !== r || t !== i) && (Oj(this, aM, e), Oj(this, iM, t), this.animate());
				},
				() => {
					let { target: e } = this, { feedback: t, isDragSource: n } = this.draggable;
					t == "move" && n && (this.droppable.disabled = !e);
				},
				() => {
					let { manager: e } = this;
					for (let t of l) e?.registry.register(t);
				},
				...r()
			],
			type: s,
			sensors: o
		}), t, this), Oj(this, sM, u.element), this.manager = t, this.index = a, Oj(this, aM, a), this.group = i, Oj(this, iM, i), this.type = s, this.transition = c;
	}
	get initialIndex() {
		return $j.get(this.manager, this.id)?.initialIndex ?? this.index;
	}
	get initialGroup() {
		return $j.get(this.manager, this.id)?.initialGroup ?? this.group;
	}
	animate() {
		K(() => {
			let { manager: e, transition: t } = this, { shape: n } = this.droppable;
			if (!e) return;
			let { idle: r } = e.dragOperation.status;
			!n || !t || r && !t.idle || e.renderer.rendering.then(() => {
				let { element: r } = this;
				if (!r) return;
				let i = this.refreshShape();
				if (!i) return;
				let a = {
					x: n.boundingRectangle.left - i.boundingRectangle.left,
					y: n.boundingRectangle.top - i.boundingRectangle.top
				}, { translate: o } = TD(r), s = qD(r, o, !1), c = qD(r, o);
				if (a.x || a.y) {
					let n = DE(dE(r)) ? gj(hj({}, t), { duration: 0 }) : t;
					KD({
						element: r,
						keyframes: { translate: [`${s.x + a.x}px ${s.y + a.y}px ${s.z}`, `${c.x}px ${c.y}px ${c.z}`] },
						options: n
					}).then(() => {
						e.dragOperation.status.dragging || (this.droppable.shape = void 0);
					});
				}
			});
		});
	}
	get manager() {
		return this.draggable.manager;
	}
	set manager(e) {
		Ox(() => {
			this.draggable.manager = e, this.droppable.manager = e;
		});
	}
	set element(e) {
		Ox(() => {
			let t = Ej(this, sM), n = this.droppable.element, r = this.draggable.element;
			(!n || n === t) && (this.droppable.element = e), (!r || r === t) && (this.draggable.element = e), Oj(this, sM, e);
		});
	}
	get element() {
		let e = Ej(this, sM);
		if (e) return NE.get(e) ?? e ?? this.droppable.element;
	}
	set target(e) {
		this.droppable.element = e;
	}
	get target() {
		return this.droppable.element;
	}
	set source(e) {
		this.draggable.element = e;
	}
	get source() {
		return this.draggable.element;
	}
	get disabled() {
		return this.draggable.disabled && this.droppable.disabled;
	}
	set feedback(e) {
		this.draggable.feedback = e;
	}
	set disabled(e) {
		Ox(() => {
			this.droppable.disabled = e, this.draggable.disabled = e;
		});
	}
	set data(e) {
		Ox(() => {
			this.droppable.data = e, this.draggable.data = e;
		});
	}
	set handle(e) {
		this.draggable.handle = e;
	}
	set id(e) {
		Ox(() => {
			this.droppable.id = e, this.draggable.id = e;
		});
	}
	get id() {
		return this.droppable.id;
	}
	set sensors(e) {
		this.draggable.sensors = e;
	}
	set modifiers(e) {
		this.draggable.modifiers = e;
	}
	set collisionPriority(e) {
		this.droppable.collisionPriority = e;
	}
	set collisionDetector(e) {
		this.droppable.collisionDetector = e ?? $T;
	}
	set alignment(e) {
		this.draggable.alignment = e;
	}
	get alignment() {
		return this.draggable.alignment;
	}
	set type(e) {
		Ox(() => {
			this.droppable.type = e, this.draggable.type = e;
		});
	}
	get type() {
		return this.draggable.type;
	}
	set accept(e) {
		this.droppable.accept = e;
	}
	get accept() {
		return this.droppable.accept;
	}
	get isDropTarget() {
		return this.droppable.isDropTarget;
	}
	get isDragSource() {
		return this.draggable.isDragSource;
	}
	get isDragging() {
		return this.draggable.isDragging;
	}
	get isDropping() {
		return this.draggable.isDropping;
	}
	get status() {
		return this.draggable.status;
	}
	refreshShape() {
		return this.droppable.refreshShape();
	}
	accepts(e) {
		return this.droppable.accepts(e);
	}
};
nM = vj(), rM = /* @__PURE__ */ new WeakMap(), iM = /* @__PURE__ */ new WeakMap(), aM = /* @__PURE__ */ new WeakMap(), oM = /* @__PURE__ */ new WeakMap(), sM = /* @__PURE__ */ new WeakMap(), wj(nM, 4, "index", tM, cM, rM), wj(nM, 4, "group", eM, cM, oM), Sj(nM, cM);
var lM = class extends KA {
	constructor(e, t, n) {
		super(e, t), this.sortable = n;
	}
	get index() {
		return this.sortable.index;
	}
	get initialIndex() {
		return this.sortable.initialIndex;
	}
	get group() {
		return this.sortable.group;
	}
	get initialGroup() {
		return this.sortable.initialGroup;
	}
}, uM = class extends rj {
	constructor(e, t, n) {
		super(e, t), this.sortable = n;
	}
	get index() {
		return this.sortable.index;
	}
	get group() {
		return this.sortable.group;
	}
};
//#endregion
//#region node_modules/.pnpm/@dnd-kit+react@0.3.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@dnd-kit/react/utilities.js
function dM(e) {
	return typeof e == "object" && !!e && "current" in e;
}
function fM(e) {
	if (e != null) return dM(e) ? e.current ?? void 0 : e;
}
//#endregion
//#region node_modules/.pnpm/@dnd-kit+react@0.3.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@dnd-kit/react/hooks.js
var pM = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0 ? I.useLayoutEffect : I.useEffect;
function mM() {
	let e = (0, I.useState)(0)[1];
	return (0, I.useCallback)(() => {
		e((e) => e + 1);
	}, [e]);
}
function hM(e, t) {
	let n = (0, I.useRef)(/* @__PURE__ */ new Map()), r = mM();
	return pM(() => {
		if (!e) {
			n.current.clear();
			return;
		}
		return Yx(() => {
			let i = !1, a = !1;
			for (let r of n.current) {
				let [o] = r, s = K(() => r[1]), c = e[o];
				s !== c && (i = !0, n.current.set(o, c), a = t?.(o, s, c) ?? !1);
			}
			i && (a ? (0, De.flushSync)(r) : r());
		});
	}, [e]), (0, I.useMemo)(() => e && new Proxy(e, { get(e, t) {
		let r = e[t];
		return n.current.set(t, r), r;
	} }), [e]);
}
function gM(e, t) {
	e();
}
function _M(e) {
	let t = (0, I.useRef)(e);
	return pM(() => {
		t.current = e;
	}, [e]), t;
}
function vM(e, t, n = I.useEffect, r = Object.is) {
	let i = (0, I.useRef)(e);
	n(() => {
		let n = i.current;
		r(e, n) || (i.current = e, t(e, n));
	}, [t, e]);
}
function yM(e, t) {
	let n = (0, I.useRef)(fM(e));
	pM(() => {
		let r = fM(e);
		r !== n.current && (n.current = r, t(r));
	});
}
//#endregion
//#region node_modules/.pnpm/@dnd-kit+react@0.3.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@dnd-kit/react/index.js
var bM = Object.getOwnPropertySymbols, xM = Object.prototype.hasOwnProperty, SM = Object.prototype.propertyIsEnumerable, CM = (e, t) => {
	var n = {};
	for (var r in e) xM.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && bM) for (var r of bM(e)) t.indexOf(r) < 0 && SM.call(e, r) && (n[r] = e[r]);
	return n;
}, wM = (0, I.createContext)(new LA()), TM = (0, I.memo)((0, I.forwardRef)(({ children: e }, t) => {
	let [n, r] = (0, I.useState)(0), i = (0, I.useRef)(null), a = (0, I.useRef)(null), o = (0, I.useMemo)(() => ({
		renderer: { get rendering() {
			return i.current ?? Promise.resolve();
		} },
		trackRendering(e) {
			i.current ||= new Promise((e) => {
				a.current = e;
			}), (0, I.startTransition)(() => {
				e(), r((e) => e + 1);
			});
		}
	}), []);
	return pM(() => {
		var e;
		(e = a.current) == null || e.call(a), i.current = null;
	}, [e, n]), (0, I.useImperativeHandle)(t, () => o), null;
})), EM = [void 0, wS];
function DM(e) {
	var t = e, { children: n, onCollision: r, onBeforeDragStart: i, onDragStart: a, onDragMove: o, onDragOver: s, onDragEnd: c } = t, l = CM(t, [
		"children",
		"onCollision",
		"onBeforeDragStart",
		"onDragStart",
		"onDragMove",
		"onDragOver",
		"onDragEnd"
	]);
	let u = (0, I.useRef)(null), { plugins: d, modifiers: f, sensors: p } = l, m = YT(d, IA.plugins), h = YT(p, IA.sensors), g = YT(f, IA.modifiers), _ = _M(i), v = _M(a), y = _M(s), b = _M(o), x = _M(c), S = _M(r), C = OM(() => l.manager ?? new LA(l));
	return (0, I.useEffect)(() => {
		if (!u.current) throw Error("Renderer not found");
		let { renderer: e, trackRendering: t } = u.current, { monitor: n } = C;
		C.renderer = e;
		let r = [
			n.addEventListener("beforedragstart", (e) => {
				let n = _.current;
				n && t(() => n(e, C));
			}),
			n.addEventListener("dragstart", (e) => v.current?.call(v, e, C)),
			n.addEventListener("dragover", (e) => {
				let n = y.current;
				n && t(() => n(e, C));
			}),
			n.addEventListener("dragmove", (e) => {
				let n = b.current;
				n && t(() => n(e, C));
			}),
			n.addEventListener("dragend", (e) => {
				let n = x.current;
				n && t(() => n(e, C));
			}),
			n.addEventListener("collision", (e) => S.current?.call(S, e, C))
		];
		return () => r.forEach((e) => e());
	}, [C]), vM(m, () => C && (C.plugins = m), ...EM), vM(h, () => C && (C.sensors = h), ...EM), vM(g, () => C && (C.modifiers = g), ...EM), /* @__PURE__ */ (0, F.jsxs)(wM.Provider, {
		value: C,
		children: [/* @__PURE__ */ (0, F.jsx)(TM, {
			ref: u,
			children: n
		}), n]
	});
}
function OM(e) {
	let t = (0, I.useRef)(null);
	return t.current ||= e(), (0, I.useInsertionEffect)(() => () => t.current?.destroy(), []), t.current;
}
function kM() {
	return (0, I.useContext)(wM);
}
function AM(e) {
	let t = kM() ?? void 0, [n] = (0, I.useState)(() => e(t));
	return n.manager !== t && (n.manager = t), pM(n.register, [t, n]), n;
}
var jM = Object.create, MM = Object.defineProperty, NM = Object.getOwnPropertyDescriptor, PM = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e), FM = (e) => {
	throw TypeError(e);
}, IM = (e, t, n) => t in e ? MM(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, LM = (e) => [
	,
	,
	,
	jM(e?.[PM("metadata")] ?? null)
], RM = [
	"class",
	"method",
	"getter",
	"setter",
	"accessor",
	"field",
	"value",
	"get",
	"set"
], zM = (e) => e !== void 0 && typeof e != "function" ? FM("Function expected") : e, BM = (e, t, n, r, i) => ({
	kind: RM[e],
	name: t,
	metadata: r,
	addInitializer: (e) => n._ ? FM("Already initialized") : i.push(zM(e || null))
}), VM = (e, t) => IM(t, PM("metadata"), e[3]), HM = (e, t, n, r) => {
	for (var i = 0, a = e[t >> 1], o = a && a.length; i < o; i++) a[i].call(n);
	return r;
}, UM = (e, t, n, r, i, a) => {
	for (var o, s, c, l, u = t & 7, d = !1, f = !1, p = 2, m = RM[u + 5], h = e[p] || (e[p] = []), g = (i = i.prototype, NM(i, n)), _ = r.length - 1; _ >= 0; _--) c = BM(u, n, s = {}, e[3], h), c.static = d, c.private = f, l = c.access = { has: (e) => n in e }, l.get = (e) => e[n], o = (0, r[_])(g[m], c), s._ = 1, zM(o) && (g[m] = o);
	return g && MM(i, n, g), i;
}, WM = (e, t, n) => t.has(e) || FM("Cannot " + n), GM = (e, t, n) => (WM(e, t, "read from private field"), t.get(e)), KM = (e, t, n) => t.has(e) ? FM("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), qM = (e, t, n, r) => (WM(e, t, "write to private field"), t.set(e, n), n), JM = class e {
	constructor(e, t) {
		this.x = e, this.y = t;
	}
	static delta(t, n) {
		return new e(t.x - n.x, t.y - n.y);
	}
	static distance(e, t) {
		return Math.hypot(e.x - t.x, e.y - t.y);
	}
	static equals(e, t) {
		return e.x === t.x && e.y === t.y;
	}
	static from({ x: t, y: n }) {
		return new e(t, n);
	}
}, YM, XM, ZM, QM, $M, eN = class extends (ZM = JS, XM = [TS], YM = [TS], ZM) {
	constructor(e) {
		let t = JM.from(e);
		super(t, (e, t) => JM.equals(e, t)), HM($M, 5, this), KM(this, QM, 0), this.velocity = {
			x: 0,
			y: 0
		};
	}
	get delta() {
		return JM.delta(this.current, this.initial);
	}
	get direction() {
		let { current: e, previous: t } = this;
		if (!t) return null;
		let n = {
			x: e.x - t.x,
			y: e.y - t.y
		};
		return !n.x && !n.y ? null : Math.abs(n.x) > Math.abs(n.y) ? n.x > 0 ? "right" : "left" : n.y > 0 ? "down" : "up";
	}
	get current() {
		return super.current;
	}
	set current(e) {
		let { current: t } = this, n = JM.from(e), r = {
			x: n.x - t.x,
			y: n.y - t.y
		}, i = Date.now(), a = i - GM(this, QM), o = (e) => Math.round(e / a * 100);
		Ox(() => {
			qM(this, QM, i), this.velocity = {
				x: o(r.x),
				y: o(r.y)
			}, super.current = n;
		});
	}
	reset(e = this.defaultValue) {
		super.reset(JM.from(e)), this.velocity = {
			x: 0,
			y: 0
		};
	}
};
$M = LM(ZM), QM = /* @__PURE__ */ new WeakMap(), UM($M, 2, "delta", XM, eN), UM($M, 2, "direction", YM, eN), VM($M, eN);
var tN = /* @__PURE__ */ ((e) => (e.Horizontal = "x", e.Vertical = "y", e))(tN || {});
Object.values(tN);
//#endregion
//#region node_modules/.pnpm/@dnd-kit+react@0.3.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@dnd-kit/react/sortable.js
var nN = Object.defineProperty, rN = Object.defineProperties, iN = Object.getOwnPropertyDescriptors, aN = Object.getOwnPropertySymbols, oN = Object.prototype.hasOwnProperty, sN = Object.prototype.propertyIsEnumerable, cN = (e, t, n) => t in e ? nN(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, lN = (e, t) => {
	for (var n in t ||= {}) oN.call(t, n) && cN(e, n, t[n]);
	if (aN) for (var n of aN(t)) sN.call(t, n) && cN(e, n, t[n]);
	return e;
}, uN = (e, t) => rN(e, iN(t));
function dN(e) {
	let { accept: t, collisionDetector: n, collisionPriority: r, id: i, data: a, element: o, handle: s, index: c, group: l, disabled: u, feedback: d, modifiers: f, sensors: p, target: m, type: h } = e, g = lN(lN({}, Qj), e.transition), _ = AM((t) => new cM(uN(lN({}, e), {
		transition: g,
		register: !1,
		handle: fM(s),
		element: fM(o),
		target: fM(m),
		feedback: d
	}), t)), v = hM(_, fN);
	return vM(i, () => _.id = i), pM(() => {
		Ox(() => {
			_.group = l, _.index = c;
		});
	}, [
		_,
		l,
		c
	]), vM(h, () => _.type = h), vM(t, () => _.accept = t, void 0, wS), vM(a, () => a && (_.data = a)), vM(c, () => {
		_.manager?.dragOperation.status.idle && g?.idle && _.refreshShape();
	}, gM), yM(s, (e) => _.handle = e), yM(o, (e) => _.element = e), yM(m, (e) => _.target = e), vM(u, () => _.disabled = u === !0), vM(p, () => _.sensors = p), vM(n, () => _.collisionDetector = n), vM(r, () => _.collisionPriority = r), vM(d, () => _.feedback = d ?? "default"), vM(g, () => _.transition = g, void 0, wS), vM(f, () => _.modifiers = f, void 0, wS), vM(e.alignment, () => _.alignment = e.alignment), {
		sortable: v,
		get isDragging() {
			return v.isDragging;
		},
		get isDropping() {
			return v.isDropping;
		},
		get isDragSource() {
			return v.isDragSource;
		},
		get isDropTarget() {
			return v.isDropTarget;
		},
		handleRef: (0, I.useCallback)((e) => {
			_.handle = e ?? void 0;
		}, [_]),
		ref: (0, I.useCallback)((e) => {
			!e && _.element?.isConnected && !_.manager?.dragOperation.status.idle || (_.element = e ?? void 0);
		}, [_]),
		sourceRef: (0, I.useCallback)((e) => {
			!e && _.source?.isConnected && !_.manager?.dragOperation.status.idle || (_.source = e ?? void 0);
		}, [_]),
		targetRef: (0, I.useCallback)((e) => {
			!e && _.target?.isConnected && !_.manager?.dragOperation.status.idle || (_.target = e ?? void 0);
		}, [_])
	};
}
function fN(e, t, n) {
	return !!(e === "isDragSource" && !n && t);
}
//#endregion
//#region node_modules/.pnpm/@dnd-kit+helpers@0.3.2/node_modules/@dnd-kit/helpers/dist/index.js
var pN = Object.defineProperty, mN = Object.defineProperties, hN = Object.getOwnPropertyDescriptors, gN = Object.getOwnPropertySymbols, _N = Object.prototype.hasOwnProperty, vN = Object.prototype.propertyIsEnumerable, yN = (e, t, n) => t in e ? pN(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, bN = (e, t) => {
	for (var n in t ||= {}) _N.call(t, n) && yN(e, n, t[n]);
	if (gN) for (var n of gN(t)) vN.call(t, n) && yN(e, n, t[n]);
	return e;
}, xN = (e, t) => mN(e, hN(t));
function SN(e, t, n) {
	if (t === n) return e;
	let r = e.slice();
	return r.splice(n, 0, r.splice(t, 1)[0]), r;
}
function CN(e) {
	return "initialIndex" in e && typeof e.initialIndex == "number" && "index" in e && typeof e.index == "number";
}
function wN(e, t, n) {
	let { source: r, target: i, canceled: a } = t.operation;
	if (!r || !i || a) return "preventDefault" in t && t.preventDefault(), e;
	let o = (e, t) => e === t || typeof e == "object" && "id" in e && e.id === t;
	if (Array.isArray(e)) {
		let s = e.findIndex((e) => o(e, r.id)), c = e.findIndex((e) => o(e, i.id));
		if (s === -1 || c === -1) {
			if (CN(r)) {
				let i = r.initialIndex, a = r.index;
				return i === a || i < 0 || i >= e.length ? ("preventDefault" in t && t.preventDefault(), e) : n(e, i, a);
			}
			return e;
		}
		if (!a && "index" in r && typeof r.index == "number") {
			let t = r.index;
			if (t !== s) return n(e, s, t);
		}
		return n(e, s, c);
	}
	let s = Object.entries(e), c = -1, l, u = -1, d;
	for (let [e, t] of s) if (c === -1 && (c = t.findIndex((e) => o(e, r.id)), c !== -1 && (l = e)), u === -1 && (u = t.findIndex((e) => o(e, i.id)), u !== -1 && (d = e)), c !== -1 && u !== -1) break;
	if (c === -1 && CN(r)) {
		let i = r.initialGroup, a = r.initialIndex, o = r.group, s = r.index;
		if (i == null || o == null || !(i in e) || !(o in e) || i === o && a === s) return "preventDefault" in t && t.preventDefault(), e;
		if (i === o) return xN(bN({}, e), { [i]: n(e[i], a, s) });
		let c = e[i][a];
		return xN(bN({}, e), {
			[i]: [...e[i].slice(0, a), ...e[i].slice(a + 1)],
			[o]: [
				...e[o].slice(0, s),
				c,
				...e[o].slice(s)
			]
		});
	}
	if (!r.manager) return e;
	let { dragOperation: f } = r.manager, p = f.shape?.current.center ?? f.position.current;
	if (d == null && i.id in e) {
		let t = i.shape && p.y > i.shape.center.y ? e[i.id].length : 0;
		d = i.id, u = t;
	}
	if (l == null || d == null || l === d && c === u) {
		if (l != null && l === d && c === u && CN(r)) {
			let t = r.group != null && r.group !== l, i = r.index !== c;
			if (t || i) {
				let t = r.group ?? l;
				if (t in e) {
					if (l === t) return xN(bN({}, e), { [l]: n(e[l], c, r.index) });
					let i = e[l][c];
					return xN(bN({}, e), {
						[l]: [...e[l].slice(0, c), ...e[l].slice(c + 1)],
						[t]: [
							...e[t].slice(0, r.index),
							i,
							...e[t].slice(r.index)
						]
					});
				}
			}
		}
		return "preventDefault" in t && t.preventDefault(), e;
	}
	if (l === d) return xN(bN({}, e), { [l]: n(e[l], c, u) });
	let m = i.shape && Math.round(p.y) > Math.round(i.shape.center.y) ? 1 : 0, h = e[l][c];
	return xN(bN({}, e), {
		[l]: [...e[l].slice(0, c), ...e[l].slice(c + 1)],
		[d]: [
			...e[d].slice(0, u + m),
			h,
			...e[d].slice(u + m)
		]
	});
}
function TN(e, t) {
	return wN(e, t, SN);
}
//#endregion
//#region src/card/common/studio-ui/CardListEditor.tsx
function EN({ id: e, cardName: t, index: n, active: r, canDelete: i, onSelect: a, onDelete: o }) {
	let { ref: s } = dN({
		id: e,
		index: n
	});
	return /* @__PURE__ */ (0, F.jsxs)("div", {
		ref: s,
		className: "d-flex justify-content-between p-2 border rounded-sm" + (r ? " bg-light-300" : ""),
		onClick: a,
		children: [/* @__PURE__ */ (0, F.jsx)("div", { children: t }), /* @__PURE__ */ (0, F.jsxs)("div", {
			className: "d-flex align-items-center",
			children: [i && /* @__PURE__ */ (0, F.jsx)("button", {
				className: "btn btn-link p-0 text-danger",
				"aria-label": "Delete card",
				onClick: (e) => {
					e.stopPropagation(), o();
				},
				children: /* @__PURE__ */ (0, F.jsx)("span", {
					className: "material-icons-outlined",
					children: "delete_outline"
				})
			}), /* @__PURE__ */ (0, F.jsx)("span", {
				className: "material-icons-outlined text-light-600",
				children: "drag_indicator"
			})]
		})]
	});
}
function DN({ enableCardOrientation: e = !1 }) {
	let { values: t, setFieldValue: n } = oy(), [r, i] = (0, I.useState)(0);
	return /* @__PURE__ */ (0, F.jsx)(DM, {
		onDragOver: (e) => n("cards", TN(t.cards, e)),
		children: /* @__PURE__ */ (0, F.jsx)(zy, {
			name: "cards",
			children: ({ push: n, remove: a }) => /* @__PURE__ */ (0, F.jsxs)("div", {
				className: "row m-0 carousel-editor",
				children: [/* @__PURE__ */ (0, F.jsxs)("div", {
					className: "col-3 p-2 border-right",
					children: [/* @__PURE__ */ (0, F.jsx)(O, {
						variant: "primary",
						iconBefore: Br,
						onClick: () => {
							n(By(t.cards, e ? { orientation: "HORIZONTAL" } : {})), i(t.cards.length);
						},
						children: "Add Card"
					}), /* @__PURE__ */ (0, F.jsx)("div", {
						className: "mt-4",
						children: t.cards.map((e, n) => /* @__PURE__ */ (0, F.jsx)(EN, {
							id: e.id,
							cardName: e.name || `Card #${e.id}`,
							index: n,
							active: r === n,
							canDelete: t.cards.length > 1,
							onSelect: () => i(n),
							onDelete: () => {
								a(n), i((e) => Math.min(e, t.cards.length - 2));
							}
						}, e.id))
					})]
				}), /* @__PURE__ */ (0, F.jsx)("div", {
					className: "col-9 p-4",
					children: t.cards.length > 0 && /* @__PURE__ */ (0, F.jsx)(Tx, {
						cardIndex: r,
						enableOrientation: e
					})
				})]
			})
		})
	});
}
//#endregion
//#region src/card/common/studio-ui/ModalFooter.tsx
function ON({ runtime: e, showingEditor: t, onContinue: n }) {
	return /* @__PURE__ */ (0, F.jsx)($l.Footer, {
		className: "border-top",
		children: /* @__PURE__ */ (0, F.jsxs)(ve, {
			direction: "horizontal",
			gap: 4,
			children: [/* @__PURE__ */ (0, F.jsx)(O, {
				variant: "light",
				className: "action-button",
				onClick: () => e.notify("cancel", {}),
				type: "button",
				children: "Cancel"
			}), t ? /* @__PURE__ */ (0, F.jsx)(O, {
				variant: "primary",
				type: "submit",
				className: "save-button",
				children: "Save"
			}) : /* @__PURE__ */ (0, F.jsx)(O, {
				type: "button",
				variant: "primary",
				className: "save-button",
				onClick: n,
				children: "Continue"
			})]
		})
	});
}
//#endregion
//#region src/shared/components/JsonImporter.tsx
function kN({ error: e }) {
	return /* @__PURE__ */ (0, F.jsx)("ul", {
		className: "mb-0 pl-3",
		children: Object.entries(e).map(([e, t]) => /* @__PURE__ */ (0, F.jsxs)("li", { children: [e, /* @__PURE__ */ (0, F.jsx)("ul", { children: t.map((e) => /* @__PURE__ */ (0, F.jsx)("li", { children: /* @__PURE__ */ (0, F.jsx)("code", { children: e }) }, e)) })] }, e))
	});
}
function AN({ runtime: e, saveUrl: t }) {
	let [n, r] = (0, I.useState)(null);
	async function i(e) {
		return new Promise((t) => {
			let n = new FileReader();
			n.onload = (e) => {
				try {
					JSON.parse(e.target?.result), t(null);
				} catch {
					t("Invalid JSON.");
				}
			}, n.readAsText(e);
		});
	}
	return /* @__PURE__ */ (0, F.jsxs)("div", {
		className: "p-3",
		children: [
			/* @__PURE__ */ (0, F.jsxs)(H.Group, { children: [/* @__PURE__ */ (0, F.jsx)(H.Label, { children: "Update Component using JSON file" }), /* @__PURE__ */ (0, F.jsx)(Vf, {
				onProcessUpload: ({ fileData: n, handleError: i }) => {
					e.notify("save", { state: "start" }), r(null), n.get("file").text().then((n) => {
						$.post(t, n).done(() => {
							e.notify("save", { state: "end" });
						}).fail((e) => {
							i(/* @__PURE__ */ Error("Upload rejected.")), r(e.responseJSON?.error ?? e.responseText);
						});
					});
				},
				accept: { "application/json": [".json"] },
				validator: i
			})] }),
			n && /* @__PURE__ */ (0, F.jsxs)(Fr, {
				variant: "danger",
				className: "mt-3",
				children: [/* @__PURE__ */ (0, F.jsx)(Fr.Heading, { children: "JSON validation failed!" }), typeof n == "string" ? /* @__PURE__ */ (0, F.jsx)("p", {
					className: "mb-0",
					children: n
				}) : /* @__PURE__ */ (0, F.jsx)(kN, { error: n })]
			}),
			/* @__PURE__ */ (0, F.jsxs)("div", {
				className: "mt-3",
				children: [
					/* @__PURE__ */ (0, F.jsx)("h4", { children: "JSON Templates" }),
					/* @__PURE__ */ (0, F.jsxs)("p", { children: [
						/* @__PURE__ */ (0, F.jsx)("a", {
							className: "m-2 btn btn-secondary",
							href: t.replace("studio_save", "json_data?type=data"),
							children: "Download component data"
						}),
						/* @__PURE__ */ (0, F.jsx)("br", {}),
						/* @__PURE__ */ (0, F.jsx)("small", { children: "The component data files contain the data of the current component without any schema information." })
					] }),
					/* @__PURE__ */ (0, F.jsxs)("p", { children: [
						/* @__PURE__ */ (0, F.jsx)("a", {
							className: "m-2 btn btn-secondary",
							href: t.replace("studio_save", "json_data?type=schema"),
							children: "Download Schema"
						}),
						/* @__PURE__ */ (0, F.jsx)("br", {}),
						/* @__PURE__ */ (0, F.jsx)("small", { children: "Schema files are useful for validating the JSON using external systems." })
					] })
				]
			})
		]
	});
}
//#endregion
//#region src/card/card-carousel/studio-ui/StudioUI.tsx
function jN({ saveUrl: e, runtime: t }) {
	let n = Hy[0].key, [r, i] = (0, I.useState)(n), { values: a, setFieldValue: o } = oy();
	return /* @__PURE__ */ (0, F.jsx)(Ay, { children: /* @__PURE__ */ (0, F.jsx)(Jn, {
		id: "card-carousel-studio-tabs",
		activeKey: r,
		onSelect: (e) => i(e || n),
		transition: !1,
		children: /* @__PURE__ */ (0, F.jsxs)("div", {
			className: "studio-ui card-carousel-studio",
			children: [
				/* @__PURE__ */ (0, F.jsx)(Uy, {
					activeTab: r,
					title: a.displayName,
					onTitleChange: (e) => o("displayName", e)
				}),
				/* @__PURE__ */ (0, F.jsx)($l.Body, { children: /* @__PURE__ */ (0, F.jsxs)(Xn, {
					className: "card-carousel-studio-tab-content",
					children: [
						/* @__PURE__ */ (0, F.jsx)(er, {
							eventKey: "content",
							children: /* @__PURE__ */ (0, F.jsx)(DN, { enableCardOrientation: !0 })
						}),
						/* @__PURE__ */ (0, F.jsx)(er, {
							eventKey: "settings",
							children: /* @__PURE__ */ (0, F.jsx)(Vy, {})
						}),
						/* @__PURE__ */ (0, F.jsx)(er, {
							eventKey: "json",
							children: /* @__PURE__ */ (0, F.jsx)(AN, {
								saveUrl: e,
								runtime: t
							})
						})
					]
				}) }),
				/* @__PURE__ */ (0, F.jsx)(ON, {
					runtime: t,
					showingEditor: !0,
					onContinue: () => {}
				})
			]
		})
	}) });
}
function MN({ runtime: e, saveUrl: t, initData: n }) {
	return /* @__PURE__ */ (0, F.jsx)(xy, {
		initialValues: (0, I.useMemo)(() => n.cards.length ? n : {
			...n,
			cards: [By([], { orientation: "HORIZONTAL" })]
		}, [n]),
		onSubmit: (n) => {
			me({
				saveUrl: t,
				data: n,
				runtime: e,
				errorMessage: "Failed to save the card carousel."
			});
		},
		children: /* @__PURE__ */ (0, F.jsx)(jN, {
			saveUrl: t,
			runtime: e
		})
	});
}
//#endregion
//#region src/card/card-carousel/studio-ui/StudioUI.css?inline
var NN = ".icon-selector.dropdown-toggle:after{display:none}.icon-list-popup{background-color:var(--pgn-color-body-bg);width:292px;min-height:242px;max-height:300px;overflow:scroll}button:not(:disabled).icon-symbol{background-color:var(--pgn-color-body-bg);width:auto;color:var(--pgn-color-gray-600);border:0}button:not(:disabled).icon-symbol:hover{background-color:var(--pgn-color-light);color:var(--pgn-color-primary)}button:not(:disabled).icon-symbol:focus{background-color:var(--pgn-color-light);color:var(--pgn-color-primary);border:0}.card-carousel-editor-modal-footer{background-color:var(--pgn-color-card-bg-base)}.xblock-root .input-group .pgn__form-control-decorator-group{margin-right:0}.xblock-root .input-group .pgn__form-control-decorator-group .form-control{border-top-right-radius:0;border-bottom-right-radius:0}.pgn__modal-header.studio-header{padding:calc(var(--pgn-spacing-modal-inner-padding-base) / 2) var(--pgn-spacing-modal-header-padding-base-x);z-index:1}.studio-header-title{align-items:center;gap:var(--pgn-spacing-spacer-2,8px);display:flex}.studio-header-tabs-nav{flex-wrap:nowrap;padding-right:64px}.studio-header-tabs-nav .nav-link{appearance:none;font-family:inherit;font-size:inherit;line-height:inherit;cursor:pointer;background-color:#0000}.wrapper.xblock-iframe-content .xblock-v1-studio_view{display:flex}.xblock-root,.xblock-root .react-studio-block,.xblock-root .react-studio-block .container-fluid{height:100%}.react-studio-block{flex-grow:1}.react-studio-block *,.react-studio-block :before,.react-studio-block :after{box-sizing:border-box}.react-studio-block{margin-bottom:0!important}.xblock-actions{border-top:1px solid var(--pgn-color-gray-200);background:var(--pgn-color-white);z-index:1;justify-content:flex-end;gap:.5em;padding:.75em 1em;display:flex;position:sticky;bottom:0;box-shadow:0 -2px 6px #0000000d}.react-colorful{-webkit-user-select:none;user-select:none;cursor:default;flex-direction:column;width:200px;height:200px;display:flex;position:relative}.react-colorful__saturation{background-image:linear-gradient(#0000,#000),linear-gradient(90deg,#fff,#fff0);border-color:#0000 #0000 #000;border-bottom-style:solid;border-bottom-width:12px;border-radius:8px 8px 0 0;flex-grow:1;position:relative}.react-colorful__pointer-fill,.react-colorful__alpha-gradient{content:\"\";pointer-events:none;border-radius:inherit;position:absolute;inset:0}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px #0000000d}.react-colorful__hue,.react-colorful__alpha{height:24px;position:relative}.react-colorful__hue{background:linear-gradient(90deg,red 0%,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red 100%)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{border-radius:inherit;touch-action:none;outline:none;position:absolute;inset:0}.react-colorful__pointer{z-index:1;box-sizing:border-box;background-color:#fff;border:2px solid #fff;border-radius:50%;width:28px;height:28px;position:absolute;transform:translate(-50%,-50%);box-shadow:0 2px 4px #0003}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%)scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url(\"data:image/svg+xml,<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" width=\\\"16\\\" height=\\\"16\\\" fill-opacity=\\\".05\\\"><rect x=\\\"8\\\" width=\\\"8\\\" height=\\\"8\\\"/><rect y=\\\"8\\\" width=\\\"8\\\" height=\\\"8\\\"/></svg>\")}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}.card-carousel-studio{flex-direction:column;justify-content:space-between;min-height:635px;display:flex}.card-carousel-create-form{padding:var(--pgn-spacing-spacer-3,16px)}.card-carousel-studio-tab-content{flex:auto;min-height:0}.card-carousel-studio-field{margin-bottom:var(--pgn-spacing-spacer-4,24px)}.card-carousel-studio-field--last{margin-bottom:0}.card-carousel-studio-help-text{font-size:var(--pgn-typography-font-size-sm,.875rem)}.material-icons-outlined{text-transform:none;letter-spacing:normal;word-wrap:normal;white-space:nowrap;-webkit-font-smoothing:antialiased;text-rendering:optimizelegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:\"liga\";direction:ltr;font-family:Material Icons Outlined;font-size:24px;font-style:normal;font-weight:400;line-height:1;display:inline-block}", PN = (e, t, n) => {
	let r = d(e), i = t.handlerUrl(e, "studio_save"), a = r.parentElement?.parentElement;
	a && (a.style.minHeight = "635px", a.style.maxHeight = "calc(100vh - 51px)", a.style.overflowY = "scroll"), s({
		runtime: t,
		element: e,
		config: n.config,
		styles: NN
	})(/* @__PURE__ */ (0, F.jsx)(Cp.Provider, {
		value: n.config,
		children: /* @__PURE__ */ (0, F.jsx)(MN, {
			saveUrl: i,
			runtime: t,
			initData: n.data
		})
	}));
};
//#endregion
export { PN as renderBlock };
