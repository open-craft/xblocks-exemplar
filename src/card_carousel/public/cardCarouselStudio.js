import { $ as e, A as t, B as n, C as r, D as i, E as a, F as o, G as s, H as c, I as l, J as u, K as d, L as f, M as p, N as m, O as h, P as g, Q as _, R as v, S as y, T as b, U as x, V as S, W as C, X as w, Y as T, Z as E, _ as D, a as O, at as k, b as A, ct as j, d as ee, et as M, f as N, g as te, h as P, i as ne, it as re, j as ie, k as ae, l as oe, lt as se, m as ce, n as le, nt as ue, o as de, ot as fe, p as pe, q as me, r as he, rt as ge, st as _e, t as ve, tt as ye, u as be, ut as xe, v as Se, w as Ce, x as we, y as Te, z as Ee } from "./Stack-BfrKfZaB.js";
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/ActionRow/index.js
var F = T(), De = /* @__PURE__ */ xe(e()), Oe = /* @__PURE__ */ xe(_e()), I = /* @__PURE__ */ xe(j()), L = /* @__PURE__ */ xe(x());
function ke({ as: e = "div", isStacked: t = !1, children: n, ...r }) {
	return /* @__PURE__ */ I.createElement(e, {
		...r,
		className: (0, L.default)(r.className, {
			"pgn__action-row": !t,
			"pgn__action-row-stacked": t
		})
	}, n);
}
function Ae() {
	return /* @__PURE__ */ I.createElement("span", { className: "pgn__action-row-spacer" });
}
ke.Spacer = Ae;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/SelectableContext.js
var je = /* @__PURE__ */ I.createContext(null), Me = function(e, t) {
	return t === void 0 && (t = null), e == null ? t || null : String(e);
}, R = /* @__PURE__ */ xe(o()), Ne = [
	"label",
	"onClick",
	"className"
], Pe = {
	label: R.default.string.isRequired,
	onClick: R.default.func
}, Fe = { label: "Close" }, Ie = /* @__PURE__ */ I.forwardRef(function(e, t) {
	var n = e.label, r = e.onClick, i = e.className, a = S(e, Ne);
	return /* @__PURE__ */ I.createElement("button", c({
		ref: t,
		type: "button",
		className: (0, L.default)("close", i),
		onClick: r
	}, a), /* @__PURE__ */ I.createElement("span", { "aria-hidden": "true" }, "×"), /* @__PURE__ */ I.createElement("span", { className: "sr-only" }, n));
});
Ie.displayName = "CloseButton", Ie.propTypes = Pe, Ie.defaultProps = Fe;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/divWithClassName.js
var Le = (function(e) {
	return /* @__PURE__ */ I.forwardRef(function(t, n) {
		return /* @__PURE__ */ I.createElement("div", c({}, t, {
			ref: n,
			className: (0, L.default)(t.className, e)
		}));
	});
}), Re = /-(.)/g;
function ze(e) {
	return e.replace(Re, function(e, t) {
		return t.toUpperCase();
	});
}
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/createWithBsPrefix.js
var Be = [
	"className",
	"bsPrefix",
	"as"
], Ve = function(e) {
	return e[0].toUpperCase() + ze(e).slice(1);
};
function He(e, t) {
	var n = t === void 0 ? {} : t, r = n.displayName, i = r === void 0 ? Ve(e) : r, a = n.Component, o = n.defaultProps, s = /* @__PURE__ */ I.forwardRef(function(t, n) {
		var r = t.className, i = t.bsPrefix, o = t.as, s = o === void 0 ? a || "div" : o, u = S(t, Be), d = l(i, e);
		return /* @__PURE__ */ I.createElement(s, c({
			ref: n,
			className: (0, L.default)(r, d)
		}, u));
	});
	return s.defaultProps = o, s.displayName = i, s;
}
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Alert.js
var Ue = [
	"bsPrefix",
	"show",
	"closeLabel",
	"className",
	"children",
	"variant",
	"onClose",
	"dismissible",
	"transition"
], We = Le("h4");
We.displayName = "DivStyledAsH4";
var Ge = He("alert-heading", { Component: We }), Ke = He("alert-link", { Component: ie }), qe = {
	show: !0,
	transition: p,
	closeLabel: "Close alert"
}, Je = /* @__PURE__ */ I.forwardRef(function(e, t) {
	var n = v(e, { show: "onClose" }), r = n.bsPrefix, i = n.show, a = n.closeLabel, o = n.className, s = n.children, u = n.variant, d = n.onClose, f = n.dismissible, h = n.transition, g = S(n, Ue), _ = l(r, "alert"), y = m(function(e) {
		d && d(!1, e);
	}), b = h === !0 ? p : h, x = /* @__PURE__ */ I.createElement("div", c({ role: "alert" }, b ? void 0 : g, {
		ref: t,
		className: (0, L.default)(o, _, u && _ + "-" + u, f && _ + "-dismissible")
	}), f && /* @__PURE__ */ I.createElement(Ie, {
		onClick: y,
		label: a
	}), s);
	return b ? /* @__PURE__ */ I.createElement(b, c({ unmountOnExit: !0 }, g, {
		ref: void 0,
		in: i
	}), x) : i ? x : null;
});
Je.displayName = "Alert", Je.defaultProps = qe, Je.Link = Ke, Je.Heading = Ge;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/CardContext.js
var Ye = /* @__PURE__ */ I.createContext(null);
Ye.displayName = "CardContext";
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/ElementChildren.js
function Xe(e, t) {
	var n = 0;
	return I.Children.map(e, function(e) {
		return /* @__PURE__ */ I.isValidElement(e) ? t(e, n++) : e;
	});
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/matches.js
var Ze;
function Qe(e, t) {
	if (!Ze) {
		var n = document.body, r = n.matches || n.matchesSelector || n.webkitMatchesSelector || n.mozMatchesSelector || n.msMatchesSelector;
		Ze = function(e, t) {
			return r.call(e, t);
		};
	}
	return Ze(e, t);
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/querySelectorAll.js
var $e = Function.prototype.bind.call(Function.prototype.call, [].slice);
function et(e, t) {
	return $e(e.querySelectorAll(t));
}
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/usePrevious.js
function tt(e) {
	let t = (0, I.useRef)(null);
	return (0, I.useEffect)(() => {
		t.current = e;
	}), t.current;
}
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useForceUpdate.js
function nt() {
	let [, e] = (0, I.useReducer)((e) => !e, !1);
	return e;
}
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useEventListener.js
function rt(e, t, n, r = !1) {
	let i = m(n);
	(0, I.useEffect)(() => {
		let n = typeof e == "function" ? e() : e;
		return n.addEventListener(t, i, r), () => n.removeEventListener(t, i, r);
	}, [e]);
}
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useGlobalListener.js
function it(e, t, n = !1) {
	return rt((0, I.useCallback)(() => document, []), e, t, n);
}
//#endregion
//#region node_modules/.pnpm/react-overlays@5.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-overlays/esm/DropdownContext.js
var at = /* @__PURE__ */ I.createContext(null), ot = function() {};
function st(e) {
	e === void 0 && (e = {});
	var t = (0, I.useContext)(at), n = h(), r = n[0], i = n[1], a = (0, I.useRef)(!1), o = e, s = o.flip, l = o.offset, u = o.rootCloseEvent, d = o.fixed, f = d === void 0 ? !1 : d, p = o.popperConfig, m = p === void 0 ? {} : p, g = o.usePopper, _ = g === void 0 ? !!t : g, v = t?.show == null ? !!e.show : t.show, y = t?.alignEnd == null ? e.alignEnd : t.alignEnd;
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
		ref: C || ot,
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
var ct = {
	children: R.default.func.isRequired,
	show: R.default.bool,
	alignEnd: R.default.bool,
	flip: R.default.bool,
	usePopper: R.default.oneOf([!0, !1]),
	popperConfig: R.default.object,
	rootCloseEvent: R.default.string
}, lt = { usePopper: !0 };
function ut(e) {
	var t = e.children, n = st(S(e, ["children"])), r = n[0], i = n[1];
	return /* @__PURE__ */ I.createElement(I.Fragment, null, i.hasShown ? t(r, i) : null);
}
ut.displayName = "ReactOverlaysDropdownMenu", ut.propTypes = ct, ut.defaultProps = lt;
//#endregion
//#region node_modules/.pnpm/react-overlays@5.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-overlays/esm/DropdownToggle.js
var dt = function() {};
function ft() {
	var e = (0, I.useContext)(at) || {}, t = e.show, n = t === void 0 ? !1 : t, r = e.toggle, i = r === void 0 ? dt : r, a = e.setToggle, o = (0, I.useCallback)(function(e) {
		i(!n, e);
	}, [n, i]);
	return [{
		ref: a || dt,
		onClick: o,
		"aria-haspopup": !0,
		"aria-expanded": !!n
	}, {
		show: n,
		toggle: i
	}];
}
var pt = { children: R.default.func.isRequired };
function mt(e) {
	var t = e.children, n = ft(), r = n[0], i = n[1];
	return /* @__PURE__ */ I.createElement(I.Fragment, null, t(r, i));
}
mt.displayName = "ReactOverlaysDropdownToggle", mt.propTypes = pt;
//#endregion
//#region node_modules/.pnpm/react-overlays@5.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-overlays/esm/Dropdown.js
var ht = {
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
function gt() {
	var e = nt(), t = (0, I.useRef)(null);
	return [t, (0, I.useCallback)(function(n) {
		t.current = n, e();
	}, [e])];
}
function _t(e) {
	var t = e.drop, n = e.alignEnd, r = e.defaultShow, i = e.show, a = e.onToggle, o = e.itemSelector, s = o === void 0 ? "* > *" : o, c = e.focusFirstItemOnShow, l = e.children, u = Ee(i, r, a), d = u[0], f = u[1], p = gt(), h = p[0], _ = p[1], v = h.current, y = gt(), b = y[0], x = y[1], S = b.current, C = tt(d), w = (0, I.useRef)(null), T = (0, I.useRef)(!1), E = (0, I.useCallback)(function(e, t) {
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
		if (t ??= h.current && Qe(h.current, "[role=menu]") ? "keyboard" : !1, !(t === !1 || t === "keyboard" && !/^key.+$/.test(e))) {
			var n = et(h.current, s)[0];
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
		var n = et(h.current, s), r = n.indexOf(e) + t;
		return r = Math.max(0, Math.min(r, n.length)), n[r];
	};
	return it("keydown", function(e) {
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
	}), /* @__PURE__ */ I.createElement(at.Provider, { value: D }, l);
}
_t.displayName = "ReactOverlaysDropdown", _t.propTypes = ht, _t.Menu = ut, _t.Toggle = mt;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/NavContext.js
var vt = /* @__PURE__ */ I.createContext(null);
vt.displayName = "NavContext";
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/DropdownItem.js
var yt = [
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
], bt = {
	as: ie,
	disabled: !1
}, xt = /* @__PURE__ */ I.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.className, i = e.children, a = e.eventKey, o = e.disabled, s = e.href, u = e.onClick, d = e.onSelect, f = e.active, p = e.as, h = S(e, yt), g = l(n, "dropdown-item"), _ = (0, I.useContext)(je), v = ((0, I.useContext)(vt) || {}).activeKey, y = Me(a, s), b = f == null && y != null ? Me(v) === y : f, x = m(function(e) {
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
xt.displayName = "DropdownItem", xt.defaultProps = bt;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/NavbarContext.js
var St = /* @__PURE__ */ I.createContext(null);
St.displayName = "NavbarContext", n();
function Ct(e, t) {
	return e;
}
P();
var wt = [
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
], Tt = R.default.oneOf(["left", "right"]);
R.default.oneOfType([
	Tt,
	R.default.shape({ sm: Tt }),
	R.default.shape({ md: Tt }),
	R.default.shape({ lg: Tt }),
	R.default.shape({ xl: Tt })
]);
var Et = {
	align: "left",
	alignRight: !1,
	flip: !0
}, Dt = /* @__PURE__ */ I.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.className, i = e.align, a = e.alignRight, o = e.rootCloseEvent, s = e.flip, u = e.show, d = e.renderOnMount, f = e.as, p = f === void 0 ? "div" : f, m = e.popperConfig, h = S(e, wt), g = (0, I.useContext)(St), _ = l(n, "dropdown-menu"), v = ee(), y = v[0], b = v[1], x = [];
	if (i) if (typeof i == "object") {
		var C = Object.keys(i);
		if (C.length) {
			var w = C[0], T = i[w];
			a = T === "left", x.push(_ + "-" + w + "-" + T);
		}
	} else i === "right" && (a = !0);
	var E = st({
		flip: s,
		rootCloseEvent: o,
		show: u,
		alignEnd: a,
		usePopper: !g && x.length === 0,
		popperConfig: c({}, m, { modifiers: b.concat(m?.modifiers || []) })
	}), D = E[0], O = E[1], k = O.hasShown, A = O.popper, j = O.show, M = O.alignEnd, te = O.toggle;
	if (D.ref = N(y, N(Ct(t, "DropdownMenu"), D.ref)), !k && !d) return null;
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
Dt.displayName = "DropdownMenu", Dt.defaultProps = Et, be();
var Ot = [
	"bsPrefix",
	"split",
	"className",
	"childBsPrefix",
	"as"
], kt = /* @__PURE__ */ I.forwardRef(function(e, n) {
	var r = e.bsPrefix, i = e.split, a = e.className, o = e.childBsPrefix, s = e.as, u = s === void 0 ? t : s, d = S(e, Ot), f = l(r, "dropdown-toggle");
	o !== void 0 && (d.bsPrefix = o);
	var p = ft()[0];
	return p.ref = N(p.ref, Ct(n, "DropdownToggle")), /* @__PURE__ */ I.createElement(u, c({ className: (0, L.default)(a, f, i && f + "-split") }, p, d));
});
kt.displayName = "DropdownToggle";
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Dropdown.js
var At = [
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
], jt = He("dropdown-header", { defaultProps: { role: "heading" } }), Mt = He("dropdown-divider", { defaultProps: { role: "separator" } }), Nt = He("dropdown-item-text", { Component: "span" }), Pt = { navbar: !1 }, Ft = /* @__PURE__ */ I.forwardRef(function(e, t) {
	var n = v(e, { show: "onToggle" }), r = n.bsPrefix, i = n.drop, a = n.show, o = n.className, s = n.alignRight, u = n.onSelect, d = n.onToggle, f = n.focusFirstItemOnShow, p = n.as, h = p === void 0 ? "div" : p;
	n.navbar;
	var g = S(n, At), _ = (0, I.useContext)(je), y = l(r, "dropdown"), b = m(function(e, t, n) {
		n === void 0 && (n = t.type), t.currentTarget === document && (n !== "keydown" || t.key === "Escape") && (n = "rootClose"), d && d(e, t, { source: n });
	}), x = m(function(e, t) {
		_ && _(e, t), u && u(e, t), b(!1, t, "select");
	});
	return /* @__PURE__ */ I.createElement(je.Provider, { value: x }, /* @__PURE__ */ I.createElement(_t, {
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
Ft.displayName = "Dropdown", Ft.defaultProps = Pt, Ft.Divider = Mt, Ft.Header = jt, Ft.Item = xt, Ft.ItemText = Nt, Ft.Menu = Dt, Ft.Toggle = kt;
//#endregion
//#region node_modules/.pnpm/prop-types-extra@1.1.1_react@18.3.1/node_modules/prop-types-extra/lib/utils/createChainableTypeChecker.js
var It = /* @__PURE__ */ se(((e, t) => {
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
(/* @__PURE__ */ se(((e, t) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = i;
	var n = r(It());
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
var Lt = [
	"as",
	"className",
	"type",
	"tooltip"
], Rt = {
	type: R.default.string,
	tooltip: R.default.bool,
	as: R.default.elementType
}, zt = /* @__PURE__ */ I.forwardRef(function(e, t) {
	var n = e.as, r = n === void 0 ? "div" : n, i = e.className, a = e.type, o = a === void 0 ? "valid" : a, s = e.tooltip, l = s === void 0 ? !1 : s, u = S(e, Lt);
	return /* @__PURE__ */ I.createElement(r, c({}, u, {
		ref: t,
		className: (0, L.default)(i, o + "-" + (l ? "tooltip" : "feedback"))
	}));
});
zt.displayName = "Feedback", zt.propTypes = Rt;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormContext.js
var Bt = /* @__PURE__ */ I.createContext({ controlId: void 0 }), Vt = [
	"id",
	"bsPrefix",
	"bsCustomPrefix",
	"className",
	"type",
	"isValid",
	"isInvalid",
	"isStatic",
	"as"
], Ht = /* @__PURE__ */ I.forwardRef(function(e, t) {
	var n = e.id, r = e.bsPrefix, i = e.bsCustomPrefix, a = e.className, o = e.type, s = o === void 0 ? "checkbox" : o, u = e.isValid, d = u === void 0 ? !1 : u, f = e.isInvalid, p = f === void 0 ? !1 : f, m = e.isStatic, h = e.as, g = h === void 0 ? "input" : h, _ = S(e, Vt), v = (0, I.useContext)(Bt), y = v.controlId, b = v.custom ? [i, "custom-control-input"] : [r, "form-check-input"], x = b[0], C = b[1];
	return r = l(x, C), /* @__PURE__ */ I.createElement(g, c({}, _, {
		ref: t,
		type: s,
		id: n || y,
		className: (0, L.default)(a, r, d && "is-valid", p && "is-invalid", m && "position-static")
	}));
});
Ht.displayName = "FormCheckInput";
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormCheckLabel.js
var Ut = [
	"bsPrefix",
	"bsCustomPrefix",
	"className",
	"htmlFor"
], Wt = /* @__PURE__ */ I.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.bsCustomPrefix, i = e.className, a = e.htmlFor, o = S(e, Ut), s = (0, I.useContext)(Bt), u = s.controlId, d = s.custom ? [r, "custom-control-label"] : [n, "form-check-label"], f = d[0], p = d[1];
	return n = l(f, p), /* @__PURE__ */ I.createElement("label", c({}, o, {
		ref: t,
		htmlFor: a || u,
		className: (0, L.default)(i, n)
	}));
});
Wt.displayName = "FormCheckLabel";
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormCheck.js
var Gt = [
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
], Kt = /* @__PURE__ */ I.forwardRef(function(e, t) {
	var n = e.id, r = e.bsPrefix, i = e.bsCustomPrefix, a = e.inline, o = a === void 0 ? !1 : a, s = e.disabled, u = s === void 0 ? !1 : s, d = e.isValid, f = d === void 0 ? !1 : d, p = e.isInvalid, m = p === void 0 ? !1 : p, h = e.feedbackTooltip, g = h === void 0 ? !1 : h, _ = e.feedback, v = e.className, y = e.style, b = e.title, x = b === void 0 ? "" : b, C = e.type, w = C === void 0 ? "checkbox" : C, T = e.label, E = e.children, D = e.custom, O = e.as, k = O === void 0 ? "input" : O, A = S(e, Gt), j = w === "switch" ? !0 : D, ee = j ? [i, "custom-control"] : [r, "form-check"], M = ee[0], N = ee[1];
	r = l(M, N);
	var te = (0, I.useContext)(Bt).controlId, P = (0, I.useMemo)(function() {
		return {
			controlId: n || te,
			custom: j
		};
	}, [
		te,
		j,
		n
	]), ne = j || T != null && T !== !1 && !E, re = /* @__PURE__ */ I.createElement(Ht, c({}, A, {
		type: w === "switch" ? "checkbox" : w,
		ref: t,
		isValid: f,
		isInvalid: m,
		isStatic: !ne,
		disabled: u,
		as: k
	}));
	return /* @__PURE__ */ I.createElement(Bt.Provider, { value: P }, /* @__PURE__ */ I.createElement("div", {
		style: y,
		className: (0, L.default)(v, r, j && "custom-" + w, o && r + "-inline")
	}, E || /* @__PURE__ */ I.createElement(I.Fragment, null, re, ne && /* @__PURE__ */ I.createElement(Wt, { title: x }, T), (f || m) && /* @__PURE__ */ I.createElement(zt, {
		type: f ? "valid" : "invalid",
		tooltip: g
	}, _))));
});
Kt.displayName = "FormCheck", Kt.Input = Ht, Kt.Label = Wt;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormFileInput.js
var qt = [
	"id",
	"bsPrefix",
	"bsCustomPrefix",
	"className",
	"isValid",
	"isInvalid",
	"lang",
	"as"
], Jt = /* @__PURE__ */ I.forwardRef(function(e, t) {
	var n = e.id, r = e.bsPrefix, i = e.bsCustomPrefix, a = e.className, o = e.isValid, s = e.isInvalid, u = e.lang, d = e.as, f = d === void 0 ? "input" : d, p = S(e, qt), m = (0, I.useContext)(Bt), h = m.controlId, g = m.custom, _ = "file", v = g ? [i, "custom-file-input"] : [r, "form-control-file"], y = v[0], b = v[1];
	return r = l(y, b), /* @__PURE__ */ I.createElement(f, c({}, p, {
		ref: t,
		id: n || h,
		type: _,
		lang: u,
		className: (0, L.default)(a, r, o && "is-valid", s && "is-invalid")
	}));
});
Jt.displayName = "FormFileInput";
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormFileLabel.js
var Yt = [
	"bsPrefix",
	"bsCustomPrefix",
	"className",
	"htmlFor"
], Xt = /* @__PURE__ */ I.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.bsCustomPrefix, i = e.className, a = e.htmlFor, o = S(e, Yt), s = (0, I.useContext)(Bt), u = s.controlId, d = s.custom ? [r, "custom-file-label"] : [n, "form-file-label"], f = d[0], p = d[1];
	return n = l(f, p), /* @__PURE__ */ I.createElement("label", c({}, o, {
		ref: t,
		htmlFor: a || u,
		className: (0, L.default)(i, n),
		"data-browse": o["data-browse"]
	}));
});
Xt.displayName = "FormFileLabel";
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormFile.js
var Zt = [
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
], Qt = /* @__PURE__ */ I.forwardRef(function(e, t) {
	var n = e.id, r = e.bsPrefix, i = e.bsCustomPrefix, a = e.disabled, o = a === void 0 ? !1 : a, s = e.isValid, u = s === void 0 ? !1 : s, d = e.isInvalid, f = d === void 0 ? !1 : d, p = e.feedbackTooltip, m = p === void 0 ? !1 : p, h = e.feedback, g = e.className, _ = e.style, v = e.label, y = e.children, b = e.custom, x = e.lang, C = e["data-browse"], w = e.as, T = w === void 0 ? "div" : w, E = e.inputAs, D = E === void 0 ? "input" : E, O = S(e, Zt), k = b ? [i, "custom"] : [r, "form-file"], A = k[0], j = k[1];
	r = l(A, j);
	var ee = "file", M = (0, I.useContext)(Bt).controlId, N = (0, I.useMemo)(function() {
		return {
			controlId: n || M,
			custom: b
		};
	}, [
		M,
		b,
		n
	]), te = v != null && v !== !1 && !y, P = /* @__PURE__ */ I.createElement(Jt, c({}, O, {
		ref: t,
		isValid: u,
		isInvalid: f,
		disabled: o,
		as: D,
		lang: x
	}));
	return /* @__PURE__ */ I.createElement(Bt.Provider, { value: N }, /* @__PURE__ */ I.createElement(T, {
		style: _,
		className: (0, L.default)(g, r, b && "custom-" + ee)
	}, y || /* @__PURE__ */ I.createElement(I.Fragment, null, b ? /* @__PURE__ */ I.createElement(I.Fragment, null, P, te && /* @__PURE__ */ I.createElement(Xt, { "data-browse": C }, v)) : /* @__PURE__ */ I.createElement(I.Fragment, null, te && /* @__PURE__ */ I.createElement(Xt, null, v), P), (u || f) && /* @__PURE__ */ I.createElement(zt, {
		type: u ? "valid" : "invalid",
		tooltip: m
	}, h))));
});
Qt.displayName = "FormFile", Qt.Input = Jt, Qt.Label = Xt;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormControl.js
var $t = [
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
], en = /* @__PURE__ */ I.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.bsCustomPrefix, i = e.type, a = e.size, o = e.htmlSize, s = e.id, u = e.className, d = e.isValid, f = d === void 0 ? !1 : d, p = e.isInvalid, m = p === void 0 ? !1 : p, h = e.plaintext, g = e.readOnly, _ = e.custom, v = e.as, y = v === void 0 ? "input" : v, b = S(e, $t), x = (0, I.useContext)(Bt).controlId, C = _ ? [r, "custom"] : [n, "form-control"], w = C[0], T = C[1];
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
en.displayName = "FormControl";
var tn = Object.assign(en, { Feedback: zt }), nn = [
	"bsPrefix",
	"className",
	"children",
	"controlId",
	"as"
], rn = /* @__PURE__ */ I.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.className, i = e.children, a = e.controlId, o = e.as, s = o === void 0 ? "div" : o, u = S(e, nn);
	n = l(n, "form-group");
	var d = (0, I.useMemo)(function() {
		return { controlId: a };
	}, [a]);
	return /* @__PURE__ */ I.createElement(Bt.Provider, { value: d }, /* @__PURE__ */ I.createElement(s, c({}, u, {
		ref: t,
		className: (0, L.default)(r, n)
	}), i));
});
rn.displayName = "FormGroup";
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormLabel.js
var an = [
	"as",
	"bsPrefix",
	"column",
	"srOnly",
	"className",
	"htmlFor"
], on = {
	column: !1,
	srOnly: !1
}, sn = /* @__PURE__ */ I.forwardRef(function(e, t) {
	var n = e.as, r = n === void 0 ? "label" : n, i = e.bsPrefix, a = e.column, o = e.srOnly, s = e.className, u = e.htmlFor, d = S(e, an), f = (0, I.useContext)(Bt).controlId;
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
sn.displayName = "FormLabel", sn.defaultProps = on;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormText.js
var cn = [
	"bsPrefix",
	"className",
	"as",
	"muted"
], ln = /* @__PURE__ */ I.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.className, i = e.as, a = i === void 0 ? "small" : i, o = e.muted, s = S(e, cn);
	return n = l(n, "form-text"), /* @__PURE__ */ I.createElement(a, c({}, s, {
		ref: t,
		className: (0, L.default)(r, n, o && "text-muted")
	}));
});
ln.displayName = "FormText";
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Switch.js
var un = /* @__PURE__ */ I.forwardRef(function(e, t) {
	return /* @__PURE__ */ I.createElement(Kt, c({}, e, {
		ref: t,
		type: "switch"
	}));
});
un.displayName = "Switch", un.Input = Kt.Input, un.Label = Kt.Label;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Form.js
var dn = [
	"bsPrefix",
	"inline",
	"className",
	"validated",
	"as"
], fn = He("form-row"), pn = { inline: !1 }, mn = /* @__PURE__ */ I.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.inline, i = e.className, a = e.validated, o = e.as, s = o === void 0 ? "form" : o, u = S(e, dn);
	return n = l(n, "form"), /* @__PURE__ */ I.createElement(s, c({}, u, {
		ref: t,
		className: (0, L.default)(i, a && "was-validated", r && n + "-inline")
	}));
});
mn.displayName = "Form", mn.defaultProps = pn, mn.Row = fn, mn.Group = rn, mn.Control = tn, mn.Check = Kt, mn.File = Qt, mn.Switch = un, mn.Label = sn, mn.Text = ln;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/InputGroup.js
var hn = [
	"bsPrefix",
	"size",
	"hasValidation",
	"className",
	"as"
], gn = He("input-group-append"), _n = He("input-group-prepend"), vn = He("input-group-text", { Component: "span" }), yn = function(e) {
	return /* @__PURE__ */ I.createElement(vn, null, /* @__PURE__ */ I.createElement("input", c({ type: "checkbox" }, e)));
}, bn = function(e) {
	return /* @__PURE__ */ I.createElement(vn, null, /* @__PURE__ */ I.createElement("input", c({ type: "radio" }, e)));
}, xn = /* @__PURE__ */ I.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.size, i = e.hasValidation, a = e.className, o = e.as, s = o === void 0 ? "div" : o, u = S(e, hn);
	return n = l(n, "input-group"), /* @__PURE__ */ I.createElement(s, c({ ref: t }, u, { className: (0, L.default)(a, n, r && n + "-" + r, i && "has-validation") }));
});
xn.displayName = "InputGroup", xn.Text = vn, xn.Radio = bn, xn.Checkbox = yn, xn.Append = gn, xn.Prepend = _n;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/TabContext.js
var Sn = /* @__PURE__ */ I.createContext(null), Cn = [
	"as",
	"onSelect",
	"activeKey",
	"role",
	"onKeyDown"
], wn = function() {}, Tn = /* @__PURE__ */ I.forwardRef(function(e, t) {
	var n = e.as, r = n === void 0 ? "ul" : n, i = e.onSelect, a = e.activeKey, o = e.role, s = e.onKeyDown, l = S(e, Cn), u = nt(), d = (0, I.useRef)(!1), f = (0, I.useContext)(je), p = (0, I.useContext)(Sn), m, h;
	p && (o ||= "tablist", a = p.activeKey, m = p.getControlledId, h = p.getControllerId);
	var g = (0, I.useRef)(null), _ = function(e) {
		var t = g.current;
		if (!t) return null;
		var n = et(t, "[data-rb-event-key]:not(.disabled)"), r = t.querySelector(".active");
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
	return /* @__PURE__ */ I.createElement(je.Provider, { value: v }, /* @__PURE__ */ I.createElement(vt.Provider, { value: {
		role: o,
		activeKey: Me(a),
		getControlledId: m || wn,
		getControllerId: h || wn
	} }, /* @__PURE__ */ I.createElement(r, c({}, l, {
		onKeyDown: y,
		ref: b,
		role: o
	}))));
}), En = [
	"active",
	"className",
	"eventKey",
	"onSelect",
	"onClick",
	"as"
], Dn = { disabled: !1 }, On = /* @__PURE__ */ I.forwardRef(function(e, t) {
	var n = e.active, r = e.className, i = e.eventKey, a = e.onSelect, o = e.onClick, s = e.as, l = S(e, En), u = Me(i, l.href), d = (0, I.useContext)(je), f = (0, I.useContext)(vt), p = n;
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
On.defaultProps = Dn;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/NavItem.js
var kn = [
	"bsPrefix",
	"className",
	"children",
	"as"
], An = /* @__PURE__ */ I.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.className, i = e.children, a = e.as, o = a === void 0 ? "div" : a, s = S(e, kn);
	return n = l(n, "nav-item"), /* @__PURE__ */ I.createElement(o, c({}, s, {
		ref: t,
		className: (0, L.default)(r, n)
	}), i);
});
An.displayName = "NavItem";
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/NavLink.js
var jn = [
	"bsPrefix",
	"disabled",
	"className",
	"href",
	"eventKey",
	"onSelect",
	"as"
], Mn = {
	disabled: !1,
	as: ie
}, Nn = /* @__PURE__ */ I.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.disabled, i = e.className, a = e.href, o = e.eventKey, s = e.onSelect, u = e.as, d = S(e, jn);
	return n = l(n, "nav-link"), /* @__PURE__ */ I.createElement(On, c({}, d, {
		href: a,
		ref: t,
		eventKey: o,
		as: u,
		disabled: r,
		onSelect: s,
		className: (0, L.default)(i, n, r && "disabled")
	}));
});
Nn.displayName = "NavLink", Nn.defaultProps = Mn;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Nav.js
var Pn = [
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
], Fn = {
	justify: !1,
	fill: !1
}, In = /* @__PURE__ */ I.forwardRef(function(e, t) {
	var n, r = v(e, { activeKey: "onSelect" }), i = r.as, a = i === void 0 ? "div" : i, o = r.bsPrefix, s = r.variant, u = r.fill, d = r.justify, f = r.navbar, p = r.navbarScroll, m = r.className, h = r.children, g = r.activeKey, _ = S(r, Pn), y = l(o, "nav"), b, x, C = !1, w = (0, I.useContext)(St), T = (0, I.useContext)(Ye);
	return w ? (b = w.bsPrefix, C = f ?? !0) : T && (x = T.cardHeaderBsPrefix), /* @__PURE__ */ I.createElement(Tn, c({
		as: a,
		ref: t,
		activeKey: g,
		className: (0, L.default)(m, (n = {}, n[y] = !C, n[b + "-nav"] = C, n[b + "-nav-scroll"] = C && p, n[x + "-" + s] = !!x, n[y + "-" + s] = !!s, n[y + "-fill"] = u, n[y + "-justified"] = d, n))
	}, _), h);
});
In.displayName = "Nav", In.defaultProps = Fn, In.Item = An, In.Link = Nn;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/NavDropdown.js
var Ln = [
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
], Rn = /* @__PURE__ */ I.forwardRef(function(e, t) {
	var n = e.id, r = e.title, i = e.children, a = e.bsPrefix, o = e.className, s = e.rootCloseEvent, u = e.menuRole, d = e.disabled, f = e.active, p = e.renderMenuOnMount, m = S(e, Ln), h = l(void 0, "nav-item");
	return /* @__PURE__ */ I.createElement(Ft, c({ ref: t }, m, { className: (0, L.default)(o, h) }), /* @__PURE__ */ I.createElement(Ft.Toggle, {
		id: n,
		eventKey: null,
		active: f,
		disabled: d,
		childBsPrefix: a,
		as: Nn
	}, r), /* @__PURE__ */ I.createElement(Ft.Menu, {
		role: u,
		renderOnMount: p,
		rootCloseEvent: s
	}, i));
});
Rn.displayName = "NavDropdown", Rn.Item = Ft.Item, Rn.ItemText = Ft.ItemText, Rn.Divider = Ft.Divider, Rn.Header = Ft.Header;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/ProgressBar.js
var zn = [
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
], Bn = ["isChild"], Vn = [
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
], Hn = 1e3, Un = {
	min: 0,
	max: 100,
	animated: !1,
	isChild: !1,
	srOnly: !1,
	striped: !1
};
function Wn(e, t, n) {
	var r = (e - t) / (n - t) * 100;
	return Math.round(r * Hn) / Hn;
}
function Gn(e, t) {
	var n, r = e.min, i = e.now, a = e.max, o = e.label, s = e.srOnly, l = e.striped, u = e.animated, d = e.className, f = e.style, p = e.variant, m = e.bsPrefix, h = S(e, zn);
	return /* @__PURE__ */ I.createElement("div", c({ ref: t }, h, {
		role: "progressbar",
		className: (0, L.default)(d, m + "-bar", (n = {}, n["bg-" + p] = p, n[m + "-bar-animated"] = u, n[m + "-bar-striped"] = u || l, n)),
		style: c({ width: Wn(i, r, a) + "%" }, f),
		"aria-valuenow": i,
		"aria-valuemin": r,
		"aria-valuemax": a
	}), s ? /* @__PURE__ */ I.createElement("span", { className: "sr-only" }, o) : o);
}
var Kn = /* @__PURE__ */ I.forwardRef(function(e, t) {
	var n = e.isChild, r = S(e, Bn);
	if (r.bsPrefix = l(r.bsPrefix, "progress"), n) return Gn(r, t);
	var i = r.min, a = r.now, o = r.max, s = r.label, u = r.srOnly, d = r.striped, f = r.animated, p = r.bsPrefix, m = r.variant, h = r.className, g = r.children, _ = S(r, Vn);
	return /* @__PURE__ */ I.createElement("div", c({ ref: t }, _, { className: (0, L.default)(h, p) }), g ? Xe(g, function(e) {
		return /* @__PURE__ */ (0, I.cloneElement)(e, { isChild: !0 });
	}) : Gn({
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
Kn.displayName = "ProgressBar", Kn.defaultProps = Un;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Spinner.js
var qn = [
	"bsPrefix",
	"variant",
	"animation",
	"size",
	"children",
	"as",
	"className"
], Jn = /* @__PURE__ */ I.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.variant, i = e.animation, a = e.size, o = e.children, s = e.as, u = s === void 0 ? "div" : s, d = e.className, f = S(e, qn);
	n = l(n, "spinner");
	var p = n + "-" + i;
	return /* @__PURE__ */ I.createElement(u, c({ ref: t }, f, { className: (0, L.default)(d, p, a && p + "-" + a, r && "text-" + r) }), o);
});
Jn.displayName = "Spinner";
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/TabContainer.js
var Yn = function(e) {
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
	return /* @__PURE__ */ I.createElement(Sn.Provider, { value: d }, /* @__PURE__ */ I.createElement(je.Provider, { value: i || null }, l));
}, Xn = [
	"bsPrefix",
	"as",
	"className"
], Zn = /* @__PURE__ */ I.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.as, i = r === void 0 ? "div" : r, a = e.className, o = S(e, Xn), s = l(n, "tab-content");
	return /* @__PURE__ */ I.createElement(i, c({ ref: t }, o, { className: (0, L.default)(a, s) }));
}), Qn = [
	"activeKey",
	"getControlledId",
	"getControllerId"
], $n = [
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
function er(e) {
	var t = (0, I.useContext)(Sn);
	if (!t) return e;
	var n = t.activeKey, r = t.getControlledId, i = t.getControllerId, a = S(t, Qn), o = e.transition !== !1 && a.transition !== !1, s = Me(e.eventKey);
	return c({}, e, {
		active: e.active == null && s != null ? Me(n) === s : e.active,
		id: r(e.eventKey),
		"aria-labelledby": i(e.eventKey),
		transition: o && (e.transition || a.transition || p),
		mountOnEnter: e.mountOnEnter == null ? a.mountOnEnter : e.mountOnEnter,
		unmountOnExit: e.unmountOnExit == null ? a.unmountOnExit : e.unmountOnExit
	});
}
var tr = /* @__PURE__ */ I.forwardRef(function(e, t) {
	var n = er(e), r = n.bsPrefix, i = n.className, a = n.active, o = n.onEnter, s = n.onEntering, u = n.onEntered, d = n.onExit, f = n.onExiting, p = n.onExited, m = n.mountOnEnter, h = n.unmountOnExit, g = n.transition, _ = n.as, v = _ === void 0 ? "div" : _;
	n.eventKey;
	var y = S(n, $n), b = l(r, "tab-pane");
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
	}, x)), /* @__PURE__ */ I.createElement(Sn.Provider, { value: null }, /* @__PURE__ */ I.createElement(je.Provider, { value: null }, x));
});
tr.displayName = "TabPane";
//#endregion
//#region node_modules/.pnpm/css-mediaquery@0.1.2/node_modules/css-mediaquery/index.js
var nr = /* @__PURE__ */ se(((e) => {
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
})), rr = /* @__PURE__ */ xe((/* @__PURE__ */ se(((e, t) => {
	var n = nr().match, r = typeof window < "u" ? window.matchMedia : null;
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
})))()), ir = /[A-Z]/g, ar = /^ms-/, or = {};
function sr(e) {
	return "-" + e.toLowerCase();
}
function cr(e) {
	if (or.hasOwnProperty(e)) return or[e];
	var t = e.replace(ir, sr);
	return or[e] = ar.test(t) ? "-" + t : t;
}
//#endregion
//#region node_modules/.pnpm/shallow-equal@3.1.0/node_modules/shallow-equal/dist/index.modern.mjs
function lr(e, t) {
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
var ur = R.default.oneOfType([R.default.string, R.default.number]), dr = {
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
}, fr = {
	orientation: R.default.oneOf(["portrait", "landscape"]),
	scan: R.default.oneOf(["progressive", "interlace"]),
	aspectRatio: R.default.string,
	deviceAspectRatio: R.default.string,
	height: ur,
	deviceHeight: ur,
	width: ur,
	deviceWidth: ur,
	color: R.default.bool,
	colorIndex: R.default.bool,
	monochrome: R.default.bool,
	resolution: ur,
	type: Object.keys(dr)
}, { type: pr, ...mr } = fr, hr = {
	minAspectRatio: R.default.string,
	maxAspectRatio: R.default.string,
	minDeviceAspectRatio: R.default.string,
	maxDeviceAspectRatio: R.default.string,
	minHeight: ur,
	maxHeight: ur,
	minDeviceHeight: ur,
	maxDeviceHeight: ur,
	minWidth: ur,
	maxWidth: ur,
	minDeviceWidth: ur,
	maxDeviceWidth: ur,
	minColor: R.default.number,
	maxColor: R.default.number,
	minColorIndex: R.default.number,
	maxColorIndex: R.default.number,
	minMonochrome: R.default.number,
	maxMonochrome: R.default.number,
	minResolution: ur,
	maxResolution: ur,
	...mr
}, gr = {
	all: {
		...dr,
		...hr
	},
	types: dr,
	matchers: fr,
	features: hr
}, _r = (e) => `not ${e}`, vr = (e, t) => {
	let n = cr(e);
	return typeof t == "number" && (t = `${t}px`), t === !0 ? n : t === !1 ? _r(n) : `(${n}: ${t})`;
}, yr = (e) => e.join(" and "), br = (e) => {
	let t = [];
	return Object.keys(gr.all).forEach((n) => {
		let r = e[n];
		r != null && t.push(vr(n, r));
	}), yr(t);
}, xr = (0, I.createContext)(void 0), Sr = (e) => e.query || br(e), Cr = (e) => {
	if (e) return Object.keys(e).reduce((t, n) => (t[cr(n)] = e[n], t), {});
}, wr = () => {
	let e = (0, I.useRef)(!1);
	return (0, I.useEffect)(() => {
		e.current = !0;
	}, []), e.current;
}, Tr = (e) => {
	let t = (0, I.useContext)(xr), n = () => Cr(e) || Cr(t), [r, i] = (0, I.useState)(n);
	return (0, I.useEffect)(() => {
		let e = n();
		lr(r, e) || i(e);
	}, [e, t]), r;
}, Er = (e) => {
	let t = () => Sr(e), [n, r] = (0, I.useState)(t);
	return (0, I.useEffect)(() => {
		let e = t();
		n !== e && r(e);
	}, [e]), n;
}, Dr = (e, t) => {
	let n = () => (0, rr.default)(e, t || {}, !!t), [r, i] = (0, I.useState)(n), a = wr();
	return (0, I.useEffect)(() => {
		if (a) {
			let e = n();
			return i(e), () => {
				e && e.dispose();
			};
		}
	}, [e, t]), r;
}, Or = (e) => {
	let [t, n] = (0, I.useState)(e.matches);
	return (0, I.useEffect)(() => {
		let t = (e) => {
			n(e.matches);
		};
		return e.addListener(t), n(e.matches), () => {
			e.removeListener(t);
		};
	}, [e]), t;
}, kr = (e, t, n) => {
	let r = Tr(t), i = Er(e);
	if (!i) throw Error("Invalid or missing MediaQuery!");
	let a = Dr(i, r), o = Or(a), s = wr();
	return (0, I.useEffect)(() => {
		s && n && n(o);
	}, [o]), (0, I.useEffect)(() => () => {
		a && a.dispose();
	}, []), o;
}, { sm: Ar, md: jr, lg: Mr, xl: Nr, xxl: Pr } = {
	xs: "0",
	sm: "576px",
	md: "768px",
	lg: "992px",
	xl: "1200px",
	xxl: "1400px"
}, Fr = {
	extraSmall: { maxWidth: parseFloat(Ar) || 575.98 },
	small: {
		minWidth: parseFloat(Ar) || 576,
		maxWidth: parseFloat(jr) || 767.98
	},
	medium: {
		minWidth: parseFloat(jr) || 768,
		maxWidth: parseFloat(Mr) || 991.98
	},
	large: {
		minWidth: parseFloat(Mr) || 992,
		maxWidth: parseFloat(Nr) || 1199.98
	},
	extraLarge: {
		minWidth: parseFloat(Nr) || 1200,
		maxWidth: parseFloat(Pr) || 1399.98
	},
	extraExtraLarge: { minWidth: parseFloat(Pr) || 1400 }
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
var Ir = /* @__PURE__ */ (0, I.forwardRef)(({ children: e, icon: t, actions: n, dismissible: r = !1, onClose: i = () => {}, closeLabel: a, stacked: o = !1, show: s = !0, ...c }, l) => {
	let [u, d] = (0, I.useState)(o), f = kr({ maxWidth: Fr.extraSmall.maxWidth });
	(0, I.useEffect)(() => {
		d(f ? !0 : o);
	}, [f, o]);
	let p = (0, I.useCallback)((e) => /* @__PURE__ */ (0, I.cloneElement)(e, {
		size: "sm",
		key: e.props.children
	}), []);
	return /* @__PURE__ */ I.createElement(Je, {
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
	}) }, /* @__PURE__ */ I.createElement("div", { className: "alert-message-content" }, e), (r || n && n.length > 0) && /* @__PURE__ */ I.createElement(ke, { className: "pgn__alert-actions" }, /* @__PURE__ */ I.createElement(ke.Spacer, null), r && /* @__PURE__ */ I.createElement(O, {
		size: "sm",
		variant: "tertiary",
		onClick: i
	}, a || /* @__PURE__ */ I.createElement(E, {
		id: "pgn.Alert.closeLabel",
		defaultMessage: "Dismiss",
		description: "Label of a close button on Alert component"
	})), n && n.map(p))));
}), Lr = Le("h4");
Lr.displayName = "DivStyledAsH4";
function Rr({ as: e = Lr, bsPrefix: t = "alert-heading", ...n }) {
	return /* @__PURE__ */ I.createElement(Je.Heading, {
		as: e,
		bsPrefix: t,
		...n
	});
}
function zr({ as: e = "a", bsPrefix: t = "alert-link", ...n }) {
	return /* @__PURE__ */ I.createElement(Je.Link, {
		as: e,
		bsPrefix: t,
		...n
	});
}
Ir.Heading = Rr, Ir.Link = zr;
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Annotation/index.js
var Br = /* @__PURE__ */ I.forwardRef(({ className: e, variant: t = "success", children: n, arrowPlacement: r = "bottom", ...i }, a) => /* @__PURE__ */ I.createElement("span", {
	className: (0, L.default)(e, "pgn__annotation", `pgn__annotation-${t}-${r}`),
	ref: a,
	...i
}, n)), Vr = (e) => /* @__PURE__ */ I.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ I.createElement("path", {
	d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2Z",
	fill: "currentColor"
})), Hr = (e) => /* @__PURE__ */ I.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ I.createElement("path", {
	d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2Zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59Z",
	fill: "currentColor"
})), Ur = (e) => /* @__PURE__ */ I.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ I.createElement("path", {
	d: "M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2Z",
	fill: "currentColor"
})), Wr = (e) => /* @__PURE__ */ I.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ I.createElement("path", {
	d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9Z",
	fill: "currentColor"
})), Gr = (e) => /* @__PURE__ */ I.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ I.createElement("path", {
	d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41Z",
	fill: "currentColor"
})), Kr = (e) => /* @__PURE__ */ I.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ I.createElement("path", {
	d: "m14.06 9.02.92.92L5.92 19H5v-.92l9.06-9.06ZM17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83a.996.996 0 0 0 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29Zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75Z",
	fill: "currentColor"
})), qr = (e) => /* @__PURE__ */ I.createElement("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	...e
}, /* @__PURE__ */ I.createElement("path", {
	d: "M5 10h4v6h6v-6h4l-7-7-7 7zm0 8v2h14v-2H5z",
	fill: "currentColor"
})), Jr = (e) => /* @__PURE__ */ I.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ I.createElement("path", {
	d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm1 15h-2v-6h2v6Zm0-8h-2V7h2v2Z",
	fill: "currentColor"
})), Yr = (e) => /* @__PURE__ */ I.createElement("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	...e
}, /* @__PURE__ */ I.createElement("path", {
	d: "M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",
	fill: "currentColor"
})), Xr = (e) => /* @__PURE__ */ I.createElement("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	...e
}, /* @__PURE__ */ I.createElement("path", {
	d: "M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z",
	fill: "currentColor"
})), Zr = (e) => /* @__PURE__ */ I.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ I.createElement("path", {
	d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8Z",
	fill: "currentColor"
})), Qr = (e) => /* @__PURE__ */ I.createElement("svg", {
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
function $r(e) {
	return typeof e == "string" || e instanceof String;
}
function ei(e) {
	var t;
	return typeof e == "object" && !!e && (e == null || (t = e.constructor) == null ? void 0 : t.name) === "Object";
}
function ti(e, t) {
	return Array.isArray(t) ? ti(e, (e, n) => t.includes(n)) : Object.entries(e).reduce((e, n) => {
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
function ni(e) {
	switch (e) {
		case z.LEFT: return z.FORCE_LEFT;
		case z.RIGHT: return z.FORCE_RIGHT;
		default: return e;
	}
}
function ri(e) {
	return e.replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1");
}
function ii(e, t) {
	if (t === e) return !0;
	let n = Array.isArray(t), r = Array.isArray(e), i;
	if (n && r) {
		if (t.length != e.length) return !1;
		for (i = 0; i < t.length; i++) if (!ii(t[i], e[i])) return !1;
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
		for (i = 0; i < s.length; i++) if (!ii(e[s[i]], t[s[i]])) return !1;
		return !0;
	} else if (t && e && typeof t == "function" && typeof e == "function") return t.toString() === e.toString();
	return !1;
}
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/core/action-details.js
var ai = class {
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
function oi(e) {
	if (e == null) throw Error("mask property should be defined");
	return e instanceof RegExp ? B.MaskedRegExp : $r(e) ? B.MaskedPattern : e === Date ? B.MaskedDate : e === Number ? B.MaskedNumber : Array.isArray(e) || e === Array ? B.MaskedDynamic : B.Masked && e.prototype instanceof B.Masked ? e : B.Masked && e instanceof B.Masked ? e.constructor : e instanceof Function ? B.MaskedFunction : (console.warn("Mask not found for mask", e), B.Masked);
}
function si(e) {
	if (!e) throw Error("Options in not defined");
	if (B.Masked) {
		if (e.prototype instanceof B.Masked) return { mask: e };
		let { mask: t = void 0, ...n } = e instanceof B.Masked ? { mask: e } : ei(e) && e.mask instanceof B.Masked ? e : {};
		if (t) {
			let e = t.mask;
			return {
				...ti(t, (e, t) => !t.startsWith("_")),
				mask: t.constructor,
				_mask: e,
				...n
			};
		}
	}
	return ei(e) ? { ...e } : { mask: e };
}
function ci(e) {
	if (B.Masked && e instanceof B.Masked) return e;
	let t = si(e), n = oi(t.mask);
	if (!n) throw Error("Masked class is not found for provided mask " + t.mask + ", appropriate module needs to be imported manually before creating mask.");
	return t.mask === n && delete t.mask, t._mask && (t.mask = t._mask, delete t._mask), new n(t);
}
B.createMask = ci;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/controls/mask-element.js
var li = class {
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
B.MaskElement = li;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/controls/html-mask-element.js
var ui = 90, di = 89, fi = class extends li {
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
		if (this._handlers.redo && (e.keyCode === ui && e.shiftKey && (e.metaKey || e.ctrlKey) || e.keyCode === di && e.ctrlKey)) return e.preventDefault(), this._handlers.redo(e);
		if (this._handlers.undo && e.keyCode === ui && (e.metaKey || e.ctrlKey)) return e.preventDefault(), this._handlers.undo(e);
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
B.HTMLMaskElement = fi;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/controls/html-input-mask-element.js
var pi = class extends fi {
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
B.HTMLMaskElement = fi;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/controls/html-contenteditable-mask-element.js
var mi = class extends fi {
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
B.HTMLContenteditableMaskElement = mi;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/controls/input-history.js
var hi = class e {
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
hi.MAX_LENGTH = 100, B.InputMask = class {
	constructor(e, t) {
		this.el = e instanceof li ? e : e.isContentEditable && e.tagName !== "INPUT" && e.tagName !== "TEXTAREA" ? new mi(e) : new pi(e), this.masked = ci(t), this._listeners = {}, this._value = "", this._unmaskedValue = "", this._rawInputValue = "", this.history = new hi(), this._saveSelection = this._saveSelection.bind(this), this._onInput = this._onInput.bind(this), this._onChange = this._onChange.bind(this), this._onDrop = this._onDrop.bind(this), this._onFocus = this._onFocus.bind(this), this._onClick = this._onClick.bind(this), this._onUndo = this._onUndo.bind(this), this._onRedo = this._onRedo.bind(this), this.alignCursor = this.alignCursor.bind(this), this.alignCursorFriendly = this.alignCursorFriendly.bind(this), this._bindEvents(), this.updateValue(), this._onChange();
	}
	maskEquals(e) {
		return e == null || this.masked?.maskEquals(e);
	}
	get mask() {
		return this.masked.mask;
	}
	set mask(e) {
		if (this.maskEquals(e)) return;
		if (!(e instanceof B.Masked) && this.masked.constructor === oi(e)) {
			this.masked.updateOptions({ mask: e });
			return;
		}
		let t = e instanceof B.Masked ? e : ci({ mask: e });
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
		let t = new ai({
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
var gi = class {
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
}, _i = class e {
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
		return e === void 0 && (e = 0), t === void 0 && (t = this.displayValue.length), new gi(this.extractInput(e, t), e);
	}
	appendTail(e) {
		return $r(e) && (e = new gi(String(e))), e.appendTo(this);
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
		if (!$r(e)) throw Error("value should be string");
		let r = $r(n) ? new gi(String(n)) : n;
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
		s && (r = ni(r), c = this.extractInput(0, a, { raw: !0 }));
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
		return !ii(this, e);
	}
	typedValueEquals(t) {
		let n = this.typedValue;
		return t === n || e.EMPTY_VALUES.includes(t) && e.EMPTY_VALUES.includes(n) || (this.format ? this.format(t, this) === this.format(this.typedValue, this) : !1);
	}
	pad(e) {
		return new V();
	}
};
_i.DEFAULTS = { skipInvalid: !0 }, _i.EMPTY_VALUES = [
	void 0,
	null,
	""
], B.Masked = _i;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/pattern/chunk-tail-details.js
var vi = class e {
	constructor(e, t) {
		e === void 0 && (e = []), t === void 0 && (t = 0), this.chunks = e, this.from = t;
	}
	toString() {
		return this.chunks.map(String).join("");
	}
	extend(t) {
		if (!String(t)) return;
		t = $r(t) ? new gi(String(t)) : t;
		let n = this.chunks[this.chunks.length - 1], r = n && (n.stop === t.stop || t.stop == null) && t.from === n.from + n.toString().length;
		if (t instanceof gi) r ? n.extend(t.toString()) : this.chunks.push(t);
		else if (t instanceof e) {
			if (t.stop == null) {
				let e;
				for (; t.chunks.length && t.chunks[0].stop == null;) e = t.chunks.shift(), e.from += t.from, this.extend(e);
			}
			t.toString() && (t.stop = t.blockIndex, this.chunks.push(t));
		}
	}
	appendTo(t) {
		if (!(t instanceof B.MaskedPattern)) return new gi(this.toString()).appendTo(t);
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
			let n = "chunks" in t ? new e() : new gi();
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
}, yi = class {
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
}, bi = class {
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
		return new gi("");
	}
	appendTail(e) {
		return $r(e) && (e = new gi(String(e))), e.appendTo(this);
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
}, xi = class {
	constructor(e) {
		let { parent: t, isOptional: n, placeholderChar: r, displayChar: i, lazy: a, eager: o, ...s } = e;
		this.masked = ci(s), Object.assign(this, {
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
xi.DEFAULT_DEFINITIONS = {
	0: /\d/,
	a: /[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
	"*": /./
}, B.MaskedRegExp = class extends _i {
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
var Si = class e extends _i {
	constructor(t) {
		super({
			...e.DEFAULTS,
			...t,
			definitions: Object.assign({}, xi.DEFAULT_DEFINITIONS, t?.definitions)
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
					let { expose: e, repeat: t, ...n } = si(this.blocks[r]), i = {
						lazy: this.lazy,
						eager: this.eager,
						placeholderChar: this.placeholderChar,
						displayChar: this.displayChar,
						overwrite: this.overwrite,
						autofix: this.autofix,
						...n,
						repeat: t,
						parent: this
					}, o = t == null ? ci(i) : new B.RepeatBlock(i);
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
			let c = s ? new xi({
				isOptional: i,
				lazy: this.lazy,
				eager: this.eager,
				placeholderChar: this.placeholderChar,
				displayChar: this.displayChar,
				...si(t[o]),
				parent: this
			}) : new bi({
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
		let n = new vi();
		return e === t || this._forEachBlocksInRange(e, t, (e, t, r, i) => {
			let a = e.extractTail(r, i);
			a.stop = this._findStopBefore(t), a.from = this._blockStartPos(t), a instanceof vi && (a.blockIndex = t), n.extend(a);
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
		let n = new yi(this, e);
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
Si.DEFAULTS = {
	..._i.DEFAULTS,
	lazy: !0,
	placeholderChar: "_"
}, Si.STOP_CHAR = "`", Si.ESCAPE_CHAR = "\\", Si.InputDefinition = xi, Si.FixedDefinition = bi, B.MaskedPattern = Si;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/range.js
var Ci = class extends Si {
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
B.MaskedRange = Ci;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/date.js
var wi = "d{.}`m{.}`Y", Ti = class e extends Si {
	static extractPatternOptions(e) {
		let { mask: t, pattern: n, ...r } = e;
		return {
			...r,
			mask: $r(t) ? t : n
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
			mask: $r(n) ? n : r,
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
Ti.GET_DEFAULT_BLOCKS = () => ({
	d: {
		mask: Ci,
		from: 1,
		to: 31,
		maxLength: 2
	},
	m: {
		mask: Ci,
		from: 1,
		to: 12,
		maxLength: 2
	},
	Y: {
		mask: Ci,
		from: 1900,
		to: 9999
	}
}), Ti.DEFAULTS = {
	...Si.DEFAULTS,
	mask: Date,
	pattern: wi,
	format: (e, t) => e ? [
		String(e.getDate()).padStart(2, "0"),
		String(e.getMonth() + 1).padStart(2, "0"),
		e.getFullYear()
	].join(".") : "",
	parse: (e, t) => {
		let [n, r, i] = e.split(".").map(Number);
		return new Date(i, r - 1, n);
	}
}, B.MaskedDate = Ti;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/dynamic.js
var Ei = class e extends _i {
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
			let { expose: t, ...n } = si(e), r = ci({
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
			return ii(t, i) && t.maskEquals(r);
		}) : super.maskEquals(e);
	}
	typedValueEquals(e) {
		return !!this.currentMask?.typedValueEquals(e);
	}
};
Ei.DEFAULTS = {
	..._i.DEFAULTS,
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
}, B.MaskedDynamic = Ei;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/enum.js
var Di = class e extends Si {
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
		return e === void 0 && (e = 0), t === void 0 && (t = this.displayValue.length), new gi("", e);
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
Di.DEFAULTS = {
	...Si.DEFAULTS,
	matchValue: (e, t, n) => e.indexOf(t, n) === n
}, B.MaskedEnum = Di, B.MaskedFunction = class extends _i {
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
var Oi, ki = class e extends _i {
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
		let e = "^" + (this.allowNegative ? "[+|\\-]?" : ""), t = (this.scale ? "(" + ri(this.radix) + "\\d{0," + this.scale + "})?" : "") + "$";
		this._numberRegExp = RegExp(e + "\\d*" + t), this._mapToRadixRegExp = RegExp("[" + this.mapToRadix.map(ri).join("") + "]", "g"), this._thousandsSeparatorRegExp = new RegExp(ri(this.thousandsSeparator), "g");
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
Oi = ki, ki.UNMASKED_RADIX = ".", ki.EMPTY_VALUES = [..._i.EMPTY_VALUES, 0], ki.DEFAULTS = {
	..._i.DEFAULTS,
	mask: Number,
	radix: ",",
	thousandsSeparator: "",
	mapToRadix: [Oi.UNMASKED_RADIX],
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
}, B.MaskedNumber = ki;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/pipe.js
var Ai = {
	MASKED: "value",
	UNMASKED: "unmaskedValue",
	TYPED: "typedValue"
};
function ji(e, t, n) {
	t === void 0 && (t = Ai.MASKED), n === void 0 && (n = Ai.MASKED);
	let r = ci(e);
	return (e) => r.runIsolated((r) => (r[t] = e, r[n]));
}
function Mi(e, t, n, r) {
	return ji(t, n, r)(e);
}
B.PIPE_TYPE = Ai, B.createPipe = ji, B.pipe = Mi, B.RepeatBlock = class extends Si {
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
		let { repeat: t, ...n } = si(e);
		this._blockOpts = Object.assign({}, this._blockOpts, n);
		let r = ci(this._blockOpts);
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
		if (this.repeatTo === Infinity || this._blocks.length < this.repeatTo) return this._blocks.push(ci(this._blockOpts)), this.mask += "m", this._blocks[this._blocks.length - 1];
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
var Ni = {
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
}, Pi = Object.keys(Ni).filter((e) => e !== "value"), Fi = [
	"value",
	"unmask",
	"onAccept",
	"onComplete",
	"inputRef"
], Ii = Pi.filter((e) => Fi.indexOf(e) < 0);
function Li(e) {
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
			return Object.keys(t).filter((e) => Ii.indexOf(e) < 0).forEach((e) => {
				delete t[e];
			}), t;
		}
		_extractNonMaskProps(e) {
			let { ...t } = e;
			return Pi.forEach((e) => {
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
	return n.displayName = "IMask(" + (e.displayName || e.name || "Component") + ")", n.propTypes = Ni, I.forwardRef((e, t) => I.createElement(n, {
		...e,
		ref: t
	}));
}
//#endregion
//#region node_modules/.pnpm/react-imask@7.6.1_react@18.3.1/node_modules/react-imask/esm/input.js
var Ri = Li((e) => {
	let { inputRef: t, ...n } = e;
	return I.createElement("input", {
		...n,
		ref: t
	});
}), zi = I.forwardRef((e, t) => I.createElement(Ri, {
	...e,
	ref: t
})), Bi = (e = {}) => Object.entries(e).reduce((e, [t, n]) => (n !== void 0 && (e[t] = n), e), {}), Vi = (...e) => (t) => {
	e.filter((e) => typeof e == "function").forEach((e) => e(t));
}, Hi = ({ defaultValue: e, value: t }) => {
	let [n, r] = (0, I.useState)(!!e || e === 0);
	return [!!t || t === 0 || n, (e) => r(!!e.target.value)];
}, Ui = (e, t) => {
	let [n, r] = (0, I.useState)(t || []), i = (e) => (r((t) => [...t, e]), e), a = () => i(oe(`${e}-`)), o = (e) => {
		r((t) => t.filter((t) => t !== e));
	};
	return [n, (e) => {
		let [t, n] = (0, I.useState)(e);
		return (0, I.useEffect)(() => (e ? i(e) : t || n(a()), () => o(t)), [t, e]), t;
	}];
}, Wi = (e) => e, Gi = /* @__PURE__ */ I.createContext({
	getControlProps: Wi,
	useSetIsControlGroupEffect: () => {},
	getLabelProps: Wi,
	getDescriptorProps: Wi,
	hasFormGroupProvider: !1
}), Ki = () => I.useContext(Gi);
function qi(e) {
	let [t, n] = (0, I.useState)(e);
	return [t, (e) => {
		(0, I.useEffect)(() => n(e), [e]);
	}];
}
function Ji({ children: e, controlId: t, isInvalid: n, isValid: r, size: i }) {
	let a = (0, I.useMemo)(() => t || oe("form-field"), [t]), [o, s] = Ui(a), [c, l] = Ui(a), [u, d] = qi(!1), f = {
		getControlProps: (0, I.useCallback)((e) => {
			let t = u ? c : void 0;
			return Bi({
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
	return /* @__PURE__ */ I.createElement(Gi.Provider, { value: f }, e);
}
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/constants.js
var Yi = {
	SMALL: "sm",
	LARGE: "lg"
}, Xi = {
	DEFAULT: "default",
	VALID: "valid",
	INVALID: "invalid",
	WARNING: "warning",
	CRITERIA_EMPTY: "criteria-empty",
	CRITERIA_VALID: "criteria-valid",
	CRITERIA_INVALID: "criteria-invalid"
}, Zi = {
	[Xi.DEFAULT]: null,
	[Xi.VALID]: Ur,
	[Xi.INVALID]: Gr,
	[Xi.WARNING]: Qr,
	[Xi.CRITERIA_EMPTY]: Zr,
	[Xi.CRITERIA_VALID]: Wr,
	[Xi.CRITERIA_INVALID]: Hr
}, Qi = ({ isInvalid: e, isValid: t }) => t ? Xi.VALID : e ? Xi.INVALID : Xi.DEFAULT;
function $i({ type: e, customIcon: t }) {
	if (t) return t;
	let n = Zi[e];
	return n ? /* @__PURE__ */ I.createElement(de, { src: n }) : null;
}
$i.propTypes = {
	type: R.default.oneOf(Object.values(Xi)),
	customIcon: R.default.node
}, $i.defaultProps = {
	type: void 0,
	customIcon: void 0
};
function ea({ children: e, type: t, icon: n, muted: r, hasIcon: i, ...a }) {
	let o = (0, L.default)(a.className, "pgn__form-text", `pgn__form-text-${t}`, { "text-muted": r });
	return /* @__PURE__ */ I.createElement("div", {
		...a,
		className: o
	}, i && /* @__PURE__ */ I.createElement($i, {
		customIcon: n,
		type: t
	}), /* @__PURE__ */ I.createElement("div", null, e));
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
	type: "default",
	icon: void 0,
	className: void 0,
	muted: !1
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormControlFeedback.js
function ta({ children: e, ...t }) {
	let { getDescriptorProps: n, isInvalid: r, isValid: i } = Ki(), a = n(t), o = (0, L.default)("pgn__form-control-description", t.className), s = t.type || Qi({
		isInvalid: r,
		isValid: i
	});
	return /* @__PURE__ */ I.createElement(ea, {
		...a,
		className: o,
		type: s
	}, e);
}
ta.propTypes = {
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
}, ta.defaultProps = {
	hasIcon: !0,
	type: void 0,
	icon: void 0,
	className: void 0,
	muted: !1
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormControlFloatingLabel.js
function na({ children: e }) {
	let { controlId: t } = Ki();
	return /* @__PURE__ */ I.createElement("div", { className: "pgn__form-control-floating-label" }, /* @__PURE__ */ I.createElement("div", { className: "pgn__form-control-floating-label-content" }, /* @__PURE__ */ I.createElement("label", {
		className: "pgn__form-control-floating-label-text",
		htmlFor: t
	}, e)));
}
na.propTypes = { children: R.default.node.isRequired };
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormControlDecorator.js
function ra({ children: e, location: t }) {
	return /* @__PURE__ */ I.createElement("div", { className: `pgn__form-control-decorator pgn__form-control-decorator-${t}` }, e);
}
ra.propTypes = {
	children: R.default.node.isRequired,
	location: R.default.oneOf(["leading", "trailing"])
}, ra.defaultProps = { location: "leading" };
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormControlDecoratorGroup.js
function ia({ children: e, leadingElement: t, trailingElement: n, floatingLabel: r, className: i, ...a }) {
	let o = Ki(a), s = a.size || o.size;
	return /* @__PURE__ */ I.createElement("div", {
		className: (0, L.default)("pgn__form-control-decorator-group", {
			"has-prepended-node": !!t,
			"has-appended-node": !!n,
			"has-leading-element": !!t,
			"has-trailing-element": !!n,
			"has-floating-label": !!r,
			"pgn__form-control-decorator-group-lg": s === Yi.LARGE,
			"pgn__form-control-decorator-group-sm": s === Yi.SMALL
		}, i),
		...a
	}, e, t && /* @__PURE__ */ I.createElement(ra, { location: "leading" }, t), n && /* @__PURE__ */ I.createElement(ra, { location: "trailing" }, n), r && /* @__PURE__ */ I.createElement(na, null, r));
}
ia.propTypes = {
	children: R.default.node.isRequired,
	leadingElement: R.default.node,
	trailingElement: R.default.node,
	floatingLabel: R.default.node,
	className: R.default.string,
	size: R.default.oneOf([Yi.SMALL, Yi.LARGE])
}, ia.defaultProps = {
	leadingElement: void 0,
	trailingElement: void 0,
	floatingLabel: void 0,
	className: void 0,
	size: void 0
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormControl.js
var aa = /* @__PURE__ */ I.forwardRef(({ as: e, className: t, controlClassName: n, leadingElement: r, trailingElement: i, floatingLabel: a, autoResize: o, onChange: s, inputMask: c, ...l }, u) => {
	let { isInvalid: d, isValid: f, getControlProps: p, ...m } = Ki(), h = I.useRef(), g = u || h, _ = l.size || m.size, [v, y] = Hi({
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
		onBlur: Vi(y, l.onBlur)
	}), S = (e) => {
		b(), s && s(e);
	};
	return /* @__PURE__ */ I.createElement(ia, {
		size: _,
		leadingElement: r,
		trailingElement: i,
		floatingLabel: a,
		className: t
	}, /* @__PURE__ */ I.createElement(tn, {
		as: c ? zi : e,
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
aa.Feedback = ta, aa.Description = ta, aa.propTypes = {
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
}, aa.defaultProps = {
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
function oa({ children: e, isInline: t = !1, ...n }) {
	let { size: r, isControlGroup: i, getLabelProps: a } = Ki(), o = (0, L.default)("pgn__form-label", {
		"pgn__form-label-inline": t,
		"pgn__form-label-lg": r === Yi.LARGE,
		"pgn__form-label-sm": r === Yi.SMALL
	}, n.className), s = a({
		...n,
		className: o
	}), c = i ? "p" : "label";
	return /* @__PURE__ */ I.createElement(c, s, e);
}
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormGroup.js
function sa({ children: e, controlId: t, isInvalid: n = !1, isValid: r = !1, size: i, as: a, ...o }) {
	return /* @__PURE__ */ I.createElement(a ?? "div", {
		...o,
		className: (0, L.default)("pgn__form-group", o.className)
	}, /* @__PURE__ */ I.createElement(Ji, {
		controlId: t,
		isInvalid: n,
		isValid: r,
		size: i
	}, e));
}
var ca = /* @__PURE__ */ I.createContext({
	getRadioControlProps: (e) => e,
	hasRadioSetProvider: !1
}), la = () => (0, I.useContext)(ca);
function ua({ children: e, name: t, onBlur: n, onFocus: r, onChange: i, value: a, defaultValue: o }) {
	let s = !o && a !== void 0, c = {
		name: t,
		value: a,
		defaultValue: o,
		getRadioControlProps: (e) => ({
			...e,
			name: t,
			onBlur: e.onBlur ? Vi(n, e.onBlur) : n,
			onFocus: e.onFocus ? Vi(r, e.onFocus) : r,
			onChange: e.onChange ? Vi(i, e.onChange) : i,
			checked: s ? a === e.value : void 0,
			defaultChecked: s ? void 0 : o === e.value
		}),
		onBlur: n,
		onFocus: r,
		onChange: i,
		hasRadioSetProvider: !0
	};
	return /* @__PURE__ */ I.createElement(ca.Provider, { value: c }, e);
}
ua.propTypes = {
	children: R.default.node.isRequired,
	name: R.default.string.isRequired,
	onBlur: R.default.func,
	onFocus: R.default.func,
	onChange: R.default.func,
	value: R.default.string,
	defaultValue: R.default.string
}, ua.defaultProps = {
	onBlur: void 0,
	onFocus: void 0,
	onChange: void 0,
	value: void 0,
	defaultValue: void 0
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormRadio.js
var da = /* @__PURE__ */ I.forwardRef((e, t) => {
	let { getControlProps: n } = Ki(), { getRadioControlProps: r, hasRadioSetProvider: i } = la(), a = n({
		...e,
		className: (0, L.default)("pgn__form-radio-input", e.className)
	});
	return i && (a = r(a)), /* @__PURE__ */ I.createElement("input", {
		...a,
		type: "radio",
		ref: t
	});
});
da.propTypes = { className: R.default.string }, da.defaultProps = { className: void 0 };
var fa = /* @__PURE__ */ I.forwardRef(({ children: e, className: t, controlClassName: n, labelClassName: r, description: i, isInvalid: a, isValid: o, ...s }, c) => /* @__PURE__ */ I.createElement(Ji, {
	controlId: s.id,
	isInvalid: a,
	isValid: o
}, /* @__PURE__ */ I.createElement("div", { className: (0, L.default)("pgn__form-radio", t, {
	"pgn__form-control-valid": o,
	"pgn__form-control-invalid": a,
	"pgn__form-control-disabled": s.disabled
}) }, /* @__PURE__ */ I.createElement(da, {
	ref: c,
	className: n,
	...s
}), /* @__PURE__ */ I.createElement("div", null, /* @__PURE__ */ I.createElement(oa, { className: r }, e), i && /* @__PURE__ */ I.createElement(ta, { hasIcon: !1 }, i)))));
fa.propTypes = {
	id: R.default.string,
	children: R.default.node.isRequired,
	className: R.default.string,
	controlClassName: R.default.string,
	labelClassName: R.default.string,
	description: R.default.node,
	isInvalid: R.default.bool,
	isValid: R.default.bool,
	disabled: R.default.bool
}, fa.defaultProps = {
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
function pa({ as: e, className: t, isInline: n, children: r, ...i }) {
	return /* @__PURE__ */ I.createElement(e, {
		className: (0, L.default)(t, {
			"pgn__form-control-set": !n,
			"pgn__form-control-set-inline": n
		}),
		...i
	}, r);
}
pa.propTypes = {
	as: R.default.elementType,
	className: R.default.string,
	isInline: R.default.bool,
	children: R.default.node
}, pa.defaultProps = {
	as: "div",
	className: void 0,
	isInline: !1,
	children: null
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormRadioSet.js
function ma({ children: e, name: t, value: n, defaultValue: r, isInline: i, onChange: a, onFocus: o, onBlur: s, ...c }) {
	let { getControlProps: l, useSetIsControlGroupEffect: u } = Ki();
	u(!0);
	let d = l(c);
	return /* @__PURE__ */ I.createElement(ua, {
		name: t,
		value: n,
		defaultValue: r,
		onFocus: o,
		onBlur: s,
		onChange: a
	}, /* @__PURE__ */ I.createElement(pa, {
		role: "radiogroup",
		isInline: i,
		...d
	}, e));
}
ma.propTypes = {
	children: R.default.node.isRequired,
	className: R.default.string,
	name: R.default.string.isRequired,
	value: R.default.string,
	defaultValue: R.default.string,
	isInline: R.default.bool,
	onChange: R.default.func,
	onFocus: R.default.func,
	onBlur: R.default.func
}, ma.defaultProps = {
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
var ha, ga = new Uint8Array(16);
function _a() {
	if (!ha && (ha = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !ha)) throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
	return ha(ga);
}
//#endregion
//#region node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/stringify.js
var va = [];
for (let e = 0; e < 256; ++e) va.push((e + 256).toString(16).slice(1));
function ya(e, t = 0) {
	return va[e[t + 0]] + va[e[t + 1]] + va[e[t + 2]] + va[e[t + 3]] + "-" + va[e[t + 4]] + va[e[t + 5]] + "-" + va[e[t + 6]] + va[e[t + 7]] + "-" + va[e[t + 8]] + va[e[t + 9]] + "-" + va[e[t + 10]] + va[e[t + 11]] + va[e[t + 12]] + va[e[t + 13]] + va[e[t + 14]] + va[e[t + 15]];
}
var ba = { randomUUID: typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto) };
//#endregion
//#region node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/v4.js
function xa(e, t, n) {
	if (ba.randomUUID && !t && !e) return ba.randomUUID();
	e ||= {};
	let r = e.random || (e.rng || _a)();
	if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, t) {
		n ||= 0;
		for (let e = 0; e < 16; ++e) t[n + e] = r[e];
		return t;
	}
	return ya(r);
}
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/utils/propTypes/utils.js
var Sa = (e, t, n) => ((r, i, a, ...o) => t(r) && r[i] === void 0 ? /* @__PURE__ */ Error(`${a}: ${i} is required when ${n}`) : e(r, i, a, ...o)), Ca = (e, t) => t.every((t) => e[t] !== void 0), wa = (e, t) => Sa(e, (e) => Array.isArray(t) ? Ca(e, t) : e[t] === !0, `${t} ${Array.isArray(t) ? "are defined" : "is truthy"}`), Ta = /* @__PURE__ */ I.forwardRef(({ className: e, screenReaderText: t, ...n }, r) => {
	let i = {
		...n,
		className: (0, L.default)("pgn__spinner", e),
		role: t ? "status" : void 0
	};
	return /* @__PURE__ */ I.createElement(Jn, {
		...i,
		ref: r
	}, t && /* @__PURE__ */ I.createElement("span", { className: "sr-only" }, t));
});
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/hooks/useArrowKeyNavigationHook.js
function Ea({ event: e, currentIndex: t, activeElement: n }) {
	t !== -1 && (n.click(), e.preventDefault());
}
function Da({ event: e, currentIndex: t, availableElements: n }) {
	t === -1 && n[0].focus();
	let r;
	(e.key === "ArrowDown" || e.key === "ArrowRight") && (r = n[(t + 1) % n.length]), (e.key === "ArrowUp" || e.key === "ArrowLeft") && (r = t - 1 < 0 ? n[t - 1 + n.length] : n[t - 1]), e.key === "End" && (r = n[n.length - 1]), e.key === "Home" && ([r] = n), r?.focus(), e.preventDefault();
}
function Oa({ event: e, ignoredKeys: t = [], parentNode: n, selectors: r = "a,button,input" }) {
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
	i === "Enter" && a && Ea({
		event: e,
		currentIndex: s,
		activeElement: a
	}), Da({
		event: e,
		currentIndex: s,
		availableElements: o
	});
}
function ka(e = {}) {
	let { selectors: t, ignoredKeys: n } = e, r = (0, I.useRef)();
	return (0, I.useEffect)(() => {
		let e = (e) => {
			Oa({
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
var Aa = w({
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
}), ja = /* @__PURE__ */ (0, I.forwardRef)(({ children: e, arrowKeyNavigationSelector: t, ignoredArrowKeysNames: n, screenReaderText: r, value: i, isLoading: a, isValueRequired: o, valueRequiredErrorMessageText: s, isSelectionRequired: c, selectionRequiredErrorMessageText: l, hasCustomError: u, customErrorMessageText: d, onChange: f, helpMessage: p, ...m }, h) => {
	let g = _(), v = (0, I.useRef)(), y = ka({
		selectors: t,
		ignoredKeys: n
	}), [b, x] = (0, I.useState)(!1), [S, C] = (0, I.useState)(!1), [w, T] = (0, I.useState)(!1), [E, D] = (0, I.useState)(!1), [O, k] = (0, I.useState)(i?.userProvidedText || ""), [A, j] = (0, I.useState)([]), [ee, M] = (0, I.useState)(null), [N, te] = (0, I.useState)(!0), [P, ne] = (0, I.useState)(""), re = (e) => {
		M(e);
	}, ie = () => {
		j([]), x(!1), M(null);
	}, ae = (e, t) => {
		let n = e.currentTarget.getAttribute("data-value"), r = e.currentTarget.id;
		T(!0), D(!0), k(n), f && (!i || i && n !== i.selectionValue) && f({
			userProvidedText: n,
			selectionValue: n,
			selectionId: r
		}), ie(), t && t(e);
	};
	function oe(t = "") {
		let n = I.Children.map(e, (e) => {
			let { children: t, onClick: n, ...r } = e.props, i = e.props.id ?? xa();
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
		j(oe(O)), te(!0), ne(""), x(!0);
	}, ce = () => {
		b ? ie() : se();
	}, ue = /* @__PURE__ */ I.createElement(le, {
		className: "pgn__form-autosuggest__icon-button",
		"data-testid": "autosuggest-iconbutton",
		tabIndex: "-1",
		src: b ? Xr : Yr,
		iconAs: de,
		size: "sm",
		variant: "secondary",
		alt: b ? g.formatMessage(Aa.iconButtonClosed) : g.formatMessage(Aa.iconButtonOpened),
		onClick: ce
	}), fe = () => {
		C(!0);
	}, pe = () => {
		if (u) {
			te(!1), ne(d);
			return;
		}
		if (o && !w) {
			te(!1), ne(s);
			return;
		}
		if (w && c && !E) {
			te(!1), ne(l);
			return;
		}
		te(!0), ne("");
	};
	(0, I.useImperativeHandle)(h, () => ({ updateErrorStateAndErrorMessage: pe }));
	let me = () => {
		C(!1), ie(), pe();
	}, he = (e) => {
		if (S) {
			if (e.key === "Escape") {
				e.preventDefault(), v && v.current.focus(), ie();
				return;
			}
			e.key === "Tab" && me();
		}
	}, ge = (e) => {
		y.current && !y.current.contains(e.target) && S && me();
	};
	(0, I.useEffect)(() => (document.addEventListener("keydown", he), document.addEventListener("click", ge, !0), () => {
		document.removeEventListener("click", ge, !0), document.removeEventListener("keydown", he);
	})), (0, I.useEffect)(() => {
		k(i ? i.userProvidedText ?? "" : ""), T(!!i && !!i.userProvidedText), D(!!i && !!i.selectionValue);
	}, [i]);
	let _e = () => {
		se();
	}, ve = (e) => {
		let t = e.target.value;
		if (!t.length) {
			k(""), T(!1), D(!1), j([]), ie(), f && f({
				userProvidedText: "",
				selectionValue: "",
				selectionId: ""
			});
			return;
		}
		T(!0);
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
	}, { getControlProps: ye } = Ki(), be = ye(m);
	return /* @__PURE__ */ I.createElement("div", {
		className: "pgn__form-autosuggest__wrapper",
		ref: y,
		onFocus: fe
	}, /* @__PURE__ */ I.createElement("div", {
		"aria-live": "assertive",
		className: "sr-only",
		"data-testid": "autosuggest-screen-reader-options-count"
	}, `${A.length} options found`), /* @__PURE__ */ I.createElement(Ji, {
		controlId: be.id,
		isInvalid: !N
	}, /* @__PURE__ */ I.createElement(aa, {
		ref: v,
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
	}), p && N && /* @__PURE__ */ I.createElement(ta, { type: "default" }, p), !N && /* @__PURE__ */ I.createElement(ta, {
		type: "invalid",
		"feedback-for": be.name
	}, P)), /* @__PURE__ */ I.createElement("ul", {
		id: "pgn__form-autosuggest__dropdown-box",
		className: "pgn__form-autosuggest__dropdown",
		role: "listbox"
	}, a ? /* @__PURE__ */ I.createElement("div", { className: "pgn__form-autosuggest__dropdown-loading" }, /* @__PURE__ */ I.createElement(Ta, {
		animation: "border",
		variant: "dark",
		screenReaderText: r,
		"data-testid": "autosuggest-loading-spinner"
	})) : A.length > 0 && A));
});
ja.defaultProps = {
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
}, ja.propTypes = {
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
	valueRequiredErrorMessageText: wa(R.default.string, "isValueRequired"),
	isSelectionRequired: R.default.bool,
	selectionRequiredErrorMessageText: wa(R.default.string, "isSelectionRequired"),
	hasCustomError: R.default.bool,
	customErrorMessageText: wa(R.default.string, "hasCustomError"),
	name: R.default.string,
	readOnly: R.default.bool,
	children: R.default.node,
	screenReaderText: R.default.string
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Menu/MenuItem.js
function Ma({ as: e = "button", children: t, defaultSelected: n = !1, iconAfter: r, iconBefore: i, ...a }) {
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
function Na({ children: e, className: t, onClick: n, ...r }) {
	return /* @__PURE__ */ I.createElement(Ma, {
		as: "li",
		"data-testid": "autosuggest-optionitem",
		role: "option",
		tabIndex: "-1",
		onClick: n,
		className: (0, L.default)(t, "dropdown-item"),
		...r
	}, e);
}
Na.defaultProps = {
	className: null,
	children: null,
	onClick: null
}, Na.propTypes = {
	className: R.default.string,
	children: R.default.string,
	onClick: R.default.func
};
var Pa = /* @__PURE__ */ I.createContext({
	getCheckboxControlProps: (e) => e,
	hasCheckboxSetProvider: !1
}), Fa = () => (0, I.useContext)(Pa);
function Ia({ children: e, name: t, onBlur: n, onFocus: r, onChange: i, value: a, defaultValue: o }) {
	let s = !o && Array.isArray(a), c = {
		name: t,
		value: a,
		defaultValue: o,
		getCheckboxControlProps: (e) => ({
			...e,
			name: t,
			onBlur: e.onBlur ? Vi(n, e.onBlur) : n,
			onFocus: e.onFocus ? Vi(r, e.onFocus) : r,
			onChange: e.onChange ? Vi(i, e.onChange) : i,
			checked: s ? a.includes(e.value) : void 0,
			defaultChecked: s ? void 0 : o && o.includes(e.value)
		}),
		onBlur: n,
		onFocus: r,
		onChange: i,
		hasCheckboxSetProvider: !0
	};
	return /* @__PURE__ */ I.createElement(Pa.Provider, { value: c }, e);
}
Ia.propTypes = {
	children: R.default.node.isRequired,
	name: R.default.string,
	onBlur: R.default.func,
	onFocus: R.default.func,
	onChange: R.default.func,
	value: R.default.arrayOf(R.default.string),
	defaultValue: R.default.arrayOf(R.default.string)
}, Ia.defaultProps = {
	onBlur: void 0,
	name: void 0,
	onFocus: void 0,
	onChange: void 0,
	value: void 0,
	defaultValue: void 0
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormCheckbox.js
var La = /* @__PURE__ */ I.forwardRef(({ isIndeterminate: e, ...t }, n) => {
	let { getCheckboxControlProps: r, hasCheckboxSetProvider: i } = Fa(), a = I.useRef(), o = n || a, { getControlProps: s } = Ki(), c = s({
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
La.propTypes = {
	isIndeterminate: R.default.bool,
	className: R.default.string
}, La.defaultProps = {
	isIndeterminate: !1,
	className: void 0
};
var Ra = /* @__PURE__ */ I.forwardRef(({ children: e, className: t, controlClassName: n, labelClassName: r, description: i, isInvalid: a, isValid: o, controlAs: s, floatLabelLeft: c, ...l }, u) => {
	let { hasCheckboxSetProvider: d } = Fa(), { hasFormGroupProvider: f, useSetIsControlGroupEffect: p, getControlProps: m } = Ki();
	p(!0);
	let h = f && !d ? {
		...m({}),
		role: "group"
	} : {}, g = /* @__PURE__ */ I.createElement(s, {
		...l,
		className: n,
		ref: u
	});
	return /* @__PURE__ */ I.createElement(Ji, {
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
	}, g, /* @__PURE__ */ I.createElement("div", null, /* @__PURE__ */ I.createElement(oa, { className: r }, e), i && /* @__PURE__ */ I.createElement(ta, { hasIcon: !1 }, i))));
});
Ra.propTypes = {
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
}, Ra.defaultProps = {
	id: void 0,
	className: void 0,
	controlClassName: void 0,
	labelClassName: void 0,
	description: void 0,
	isInvalid: !1,
	isValid: !1,
	controlAs: La,
	floatLabelLeft: !1,
	disabled: !1
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormSwitch.js
var za = /* @__PURE__ */ I.forwardRef(({ isIndeterminate: e, ...t }, n) => {
	let r = I.useRef(), i = n || r, { getControlProps: a } = Ki(), o = a({
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
za.propTypes = {
	isIndeterminate: R.default.bool,
	className: R.default.string
}, za.defaultProps = {
	isIndeterminate: !1,
	className: void 0
};
var Ba = /* @__PURE__ */ I.forwardRef(({ children: e, className: t, helperText: n, ...r }, i) => /* @__PURE__ */ I.createElement("div", { className: "d-inline-flex flex-column" }, /* @__PURE__ */ I.createElement(Ra, {
	className: (0, L.default)("pgn__form-switch", t),
	...r,
	role: "switch",
	ref: i,
	controlAs: za,
	isValid: null,
	isInvalid: null,
	description: null
}, e), n && /* @__PURE__ */ I.createElement("div", { className: "pgn__form-switch-helper-text" }, n)));
Ba.propTypes = {
	children: R.default.node.isRequired,
	className: R.default.string,
	labelClassName: R.default.string,
	helperText: R.default.node,
	floatLabelLeft: R.default.bool
}, Ba.defaultProps = {
	className: void 0,
	labelClassName: void 0,
	helperText: void 0,
	floatLabelLeft: !1
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormCheckboxSet.js
function Va({ children: e, name: t, value: n, defaultValue: r, isInline: i, onChange: a, onFocus: o, onBlur: s, ...c }) {
	let { getControlProps: l, useSetIsControlGroupEffect: u } = Ki();
	u(!0);
	let d = l(c);
	return /* @__PURE__ */ I.createElement(Ia, {
		name: t,
		value: n,
		defaultValue: r,
		onFocus: o,
		onBlur: s,
		onChange: a
	}, /* @__PURE__ */ I.createElement(pa, {
		role: "group",
		isInline: i,
		...d
	}, e));
}
Va.propTypes = {
	children: R.default.node.isRequired,
	className: R.default.string,
	name: R.default.string.isRequired,
	value: R.default.arrayOf(R.default.string),
	defaultValue: R.default.arrayOf(R.default.string),
	isInline: R.default.bool,
	onChange: R.default.func,
	onFocus: R.default.func,
	onBlur: R.default.func
}, Va.defaultProps = {
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
var Ha = Va, H = mn;
H.Control = aa, H.Radio = fa, H.RadioSet = ma, H.Autosuggest = ja, H.AutosuggestOption = Na, H.Checkbox = Ra, H.CheckboxSet = Va, H.Switch = Ba, H.SwitchSet = Ha, H.Label = oa, H.Group = sa, H.Text = ea;
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Modal/ModalContext.js
var Ua = /* @__PURE__ */ I.createContext({
	onClose: () => {},
	isOpen: !1,
	isBlocking: !1
});
function Wa({ onClose: e, isOpen: t, isBlocking: n = !1, children: r = null }) {
	let i = (0, I.useMemo)(() => ({
		onClose: e,
		isOpen: t,
		isBlocking: n
	}), [
		e,
		t,
		n
	]);
	return /* @__PURE__ */ I.createElement(Ua.Provider, { value: i }, r);
}
//#endregion
//#region node_modules/.pnpm/react-remove-scroll-bar@2.3.8_@types+react@18.3.28_react@18.3.1/node_modules/react-remove-scroll-bar/dist/es2015/constants.js
var Ga = "right-scroll-bar-position", Ka = "width-before-scroll-bar", qa = "with-scroll-bars-hidden", Ja = "--removed-body-scroll-bar-size";
//#endregion
//#region node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@18.3.28_react@18.3.1/node_modules/use-callback-ref/dist/es2015/assignRef.js
function Ya(e, t) {
	return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
//#endregion
//#region node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@18.3.28_react@18.3.1/node_modules/use-callback-ref/dist/es2015/useRef.js
function Xa(e, t) {
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
var Za = typeof window < "u" ? I.useLayoutEffect : I.useEffect, Qa = /* @__PURE__ */ new WeakMap();
function $a(e, t) {
	var n = Xa(t || null, function(t) {
		return e.forEach(function(e) {
			return Ya(e, t);
		});
	});
	return Za(function() {
		var t = Qa.get(n);
		if (t) {
			var r = new Set(t), i = new Set(e), a = n.current;
			r.forEach(function(e) {
				i.has(e) || Ya(e, null);
			}), i.forEach(function(e) {
				r.has(e) || Ya(e, a);
			});
		}
		Qa.set(n, e);
	}, [e]), n;
}
//#endregion
//#region node_modules/.pnpm/use-sidecar@1.1.3_@types+react@18.3.28_react@18.3.1/node_modules/use-sidecar/dist/es2015/medium.js
function eo(e) {
	return e;
}
function to(e, t) {
	t === void 0 && (t = eo);
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
function no(e, t) {
	return t === void 0 && (t = eo), to(e, t);
}
function ro(e) {
	e === void 0 && (e = {});
	var t = to(null);
	return t.options = M({
		async: !0,
		ssr: !1
	}, e), t;
}
//#endregion
//#region node_modules/.pnpm/use-sidecar@1.1.3_@types+react@18.3.28_react@18.3.1/node_modules/use-sidecar/dist/es2015/exports.js
var io = function(e) {
	var t = e.sideCar, n = re(e, ["sideCar"]);
	if (!t) throw Error("Sidecar: please provide `sideCar` property to import the right car");
	var r = t.read();
	if (!r) throw Error("Sidecar medium not found");
	return I.createElement(r, M({}, n));
};
io.isSideCarExport = !0;
function ao(e, t) {
	return e.useMedium(t), io;
}
//#endregion
//#region node_modules/.pnpm/react-remove-scroll@2.7.2_@types+react@18.3.28_react@18.3.1/node_modules/react-remove-scroll/dist/es2015/medium.js
var oo = ro(), so = function() {}, co = I.forwardRef(function(e, t) {
	var n = I.useRef(null), r = I.useState({
		onScrollCapture: so,
		onWheelCapture: so,
		onTouchMoveCapture: so
	}), i = r[0], a = r[1], o = e.forwardProps, s = e.children, c = e.className, l = e.removeScrollBar, u = e.enabled, d = e.shards, f = e.sideCar, p = e.noRelative, m = e.noIsolation, h = e.inert, g = e.allowPinchZoom, _ = e.as, v = _ === void 0 ? "div" : _, y = e.gapMode, b = re(e, [
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
	]), x = f, S = $a([n, t]), C = M(M({}, b), i);
	return I.createElement(I.Fragment, null, u && I.createElement(x, {
		sideCar: oo,
		removeScrollBar: l,
		shards: d,
		noRelative: p,
		noIsolation: m,
		inert: h,
		setCallbacks: a,
		allowPinchZoom: !!g,
		lockRef: n,
		gapMode: y
	}), o ? I.cloneElement(I.Children.only(s), M(M({}, C), { ref: S })) : I.createElement(v, M({}, C, {
		className: c,
		ref: S
	}), s));
});
co.defaultProps = {
	enabled: !0,
	removeScrollBar: !0,
	inert: !1
}, co.classNames = {
	fullWidth: Ka,
	zeroRight: Ga
};
//#endregion
//#region node_modules/.pnpm/focus-lock@1.3.6/node_modules/focus-lock/dist/es2015/constants.js
var lo = "data-focus-lock", uo = "data-focus-lock-disabled", fo = "data-no-focus-lock", po = "data-autofocus-inside", mo = "data-no-autofocus", ho = {
	width: "1px",
	height: "0px",
	padding: 0,
	overflow: "hidden",
	position: "fixed",
	top: "1px",
	left: "1px"
}, go = function(e) {
	var t = e.children, n = t === void 0 ? null : t;
	return /* @__PURE__ */ I.createElement(I.Fragment, null, /* @__PURE__ */ I.createElement("div", {
		key: "guard-first",
		"data-focus-guard": !0,
		"data-focus-auto-guard": !0,
		style: ho
	}), n, n && /* @__PURE__ */ I.createElement("div", {
		key: "guard-last",
		"data-focus-guard": !0,
		"data-focus-auto-guard": !0,
		style: ho
	}));
};
go.propTypes = {};
//#endregion
//#region node_modules/.pnpm/react-focus-lock@2.13.7_@types+react@18.3.28_react@18.3.1/node_modules/react-focus-lock/dist/es2015/medium.js
var _o = no({}, function(e) {
	return {
		target: e.target,
		currentTarget: e.currentTarget
	};
}), vo = no(), yo = no(), bo = ro({
	async: !0,
	ssr: typeof document < "u"
}), xo = /* @__PURE__ */ (0, I.createContext)(void 0), So = [], Co = /* @__PURE__ */ (0, I.forwardRef)(function(e, t) {
	var n, r = (0, I.useState)(), i = r[0], a = r[1], o = (0, I.useRef)(), s = (0, I.useRef)(!1), l = (0, I.useRef)(null), u = (0, I.useState)({})[1], d = e.children, f = e.disabled, p = f === void 0 ? !1 : f, m = e.noFocusGuards, h = m === void 0 ? !1 : m, g = e.persistentFocus, _ = g === void 0 ? !1 : g, v = e.crossFrame, y = v === void 0 ? !0 : v, b = e.autoFocus, x = b === void 0 ? !0 : b;
	e.allowTextSelection;
	var S = e.group, C = e.className, w = e.whiteList, T = e.hasPositiveIndices, E = e.shards, D = E === void 0 ? So : E, O = e.as, k = O === void 0 ? "div" : O, A = e.lockProps, j = A === void 0 ? {} : A, ee = e.sideCar, M = e.returnFocus, N = M === void 0 ? !1 : M, te = e.focusOptions, P = e.onActivation, ne = e.onDeactivation, re = (0, I.useState)({})[0], ie = (0, I.useCallback)(function(e) {
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
		s.current && _o.useMedium(e);
	}, []), ce = vo.useMedium, le = (0, I.useCallback)(function(e) {
		o.current !== e && (o.current = e, a(e));
	}, []), ue = c((n = {}, n[uo] = p && "disabled", n[lo] = S, n), j), de = h !== !0, fe = de && h !== "tail", pe = $a([t, le]), me = (0, I.useMemo)(function() {
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
		style: ho
	}), T ? /* @__PURE__ */ I.createElement("div", {
		key: "guard-nearest",
		"data-focus-guard": !0,
		tabIndex: p ? -1 : 1,
		style: ho
	}) : null], !p && /* @__PURE__ */ I.createElement(ee, {
		id: re,
		sideCar: bo,
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
	}), /* @__PURE__ */ I.createElement(xo.Provider, { value: me }, d)), fe && /* @__PURE__ */ I.createElement("div", {
		"data-focus-guard": !0,
		tabIndex: p ? -1 : 0,
		style: ho
	}));
});
Co.propTypes = {};
//#endregion
//#region node_modules/.pnpm/react-focus-lock@2.13.7_@types+react@18.3.28_react@18.3.1/node_modules/react-focus-lock/dist/es2015/util.js
function wo(e) {
	setTimeout(e, 1);
}
var To = function(e) {
	return e && "current" in e ? e.current : e;
}, Eo = Co, Do = ro(), Oo = "data-focus-on-hidden", ko = { preventScroll: !0 }, Ao = I.forwardRef(function(e, t) {
	var n = I.useState(!1), r = n[0], i = n[1], a = I.useState(null), o = a[0], s = a[1], c = e.children, l = e.autoFocus, u = e.shards, d = e.crossFrame, f = e.enabled, p = f === void 0 ? !0 : f, m = e.scrollLock, h = m === void 0 ? !0 : m, g = e.focusLock, _ = g === void 0 ? !0 : g, v = e.returnFocus, y = v === void 0 ? !0 : v, b = e.inert, x = e.allowPinchZoom, S = e.sideCar, C = e.className, w = e.shouldIgnore, T = e.preventScrollOnFocus, E = e.style, D = e.as, O = e.gapMode, k = re(e, [
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
	]), A = S, j = M(M({}, r), {
		as: D,
		style: E,
		sideCar: S,
		shards: u,
		allowPinchZoom: x,
		gapMode: O,
		inert: b,
		enabled: p && h
	}), ee = I.useCallback(function(e) {
		s(e);
	}, []), N = I.useCallback(function() {
		s(null);
	}, []);
	return I.createElement(I.Fragment, null, I.createElement(Eo, {
		ref: t,
		sideCar: S,
		disabled: !(p && _),
		returnFocus: y,
		autoFocus: l,
		shards: u,
		crossFrame: d,
		onActivation: ee,
		onDeactivation: N,
		className: C,
		whiteList: w,
		lockProps: j,
		focusOptions: T ? ko : void 0,
		as: co
	}, c), p && I.createElement(A, M({}, k, {
		sideCar: Do,
		setLockProps: i,
		shards: u,
		activeNode: o
	})));
});
//#endregion
//#region node_modules/.pnpm/@babel+runtime@7.29.2/node_modules/@babel/runtime/helpers/esm/typeof.js
function jo(e) {
	"@babel/helpers - typeof";
	return jo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, jo(e);
}
//#endregion
//#region node_modules/.pnpm/@babel+runtime@7.29.2/node_modules/@babel/runtime/helpers/esm/toPrimitive.js
function Mo(e, t) {
	if (jo(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (jo(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
//#endregion
//#region node_modules/.pnpm/@babel+runtime@7.29.2/node_modules/@babel/runtime/helpers/esm/toPropertyKey.js
function No(e) {
	var t = Mo(e, "string");
	return jo(t) == "symbol" ? t : t + "";
}
//#endregion
//#region node_modules/.pnpm/@babel+runtime@7.29.2/node_modules/@babel/runtime/helpers/esm/defineProperty.js
function Po(e, t, n) {
	return (t = No(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
//#endregion
//#region node_modules/.pnpm/react-clientside-effect@1.2.8_react@18.3.1/node_modules/react-clientside-effect/lib/index.es.js
function Fo(e, t) {
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
		return Po(s, "displayName", "SideEffect(" + n(r) + ")"), s;
	};
}
//#endregion
//#region node_modules/.pnpm/focus-lock@1.3.6/node_modules/focus-lock/dist/es2015/utils/array.js
var Io = function(e) {
	for (var t = Array(e.length), n = 0; n < e.length; ++n) t[n] = e[n];
	return t;
}, Lo = function(e) {
	return Array.isArray(e) ? e : [e];
}, Ro = function(e) {
	return Array.isArray(e) ? e[0] : e;
}, zo = function(e) {
	if (e.nodeType !== Node.ELEMENT_NODE) return !1;
	var t = window.getComputedStyle(e, null);
	return !t || !t.getPropertyValue ? !1 : t.getPropertyValue("display") === "none" || t.getPropertyValue("visibility") === "hidden";
}, Bo = function(e) {
	return e.parentNode && e.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? e.parentNode.host : e.parentNode;
}, Vo = function(e) {
	return e === document || e && e.nodeType === Node.DOCUMENT_NODE;
}, Ho = function(e) {
	return e.hasAttribute("inert");
}, Uo = function(e, t) {
	return !e || Vo(e) || !zo(e) && !Ho(e) && t(Bo(e));
}, Wo = function(e, t) {
	var n = e.get(t);
	if (n !== void 0) return n;
	var r = Uo(t, Wo.bind(void 0, e));
	return e.set(t, r), r;
}, Go = function(e, t) {
	return e && !Vo(e) ? Qo(e) ? t(Bo(e)) : !1 : !0;
}, Ko = function(e, t) {
	var n = e.get(t);
	if (n !== void 0) return n;
	var r = Go(t, Ko.bind(void 0, e));
	return e.set(t, r), r;
}, qo = function(e) {
	return e.dataset;
}, Jo = function(e) {
	return e.tagName === "BUTTON";
}, Yo = function(e) {
	return e.tagName === "INPUT";
}, Xo = function(e) {
	return Yo(e) && e.type === "radio";
}, Zo = function(e) {
	return !((Yo(e) || Jo(e)) && (e.type === "hidden" || e.disabled));
}, Qo = function(e) {
	var t = e.getAttribute(mo);
	return ![
		!0,
		"true",
		""
	].includes(t);
}, $o = function(e) {
	return !!(e && qo(e)?.focusGuard);
}, es = function(e) {
	return !$o(e);
}, ts = function(e) {
	return !!e;
}, ns = function(e, t) {
	var n = Math.max(0, e.tabIndex), r = Math.max(0, t.tabIndex), i = n - r, a = e.index - t.index;
	if (i) {
		if (!n) return 1;
		if (!r) return -1;
	}
	return i || a;
}, rs = function(e) {
	return e.tabIndex < 0 && !e.hasAttribute("tabindex") ? 0 : e.tabIndex;
}, is = function(e, t, n) {
	return Io(e).map(function(e, t) {
		var r = rs(e);
		return {
			node: e,
			index: t,
			tabIndex: n && r === -1 ? (e.dataset || {}).focusGuard ? 0 : -1 : r
		};
	}).filter(function(e) {
		return !t || e.tabIndex >= 0;
	}).sort(ns);
}, as = [
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
].join(","), os = `${as}, [data-focus-guard]`, ss = function(e, t) {
	return Io((e.shadowRoot || e).children).reduce(function(e, n) {
		return e.concat(n.matches(t ? os : as) ? [n] : [], ss(n));
	}, []);
}, cs = function(e, t) {
	return e instanceof HTMLIFrameElement && e.contentDocument?.body ? ls([e.contentDocument.body], t) : [e];
}, ls = function(e, t) {
	return e.reduce(function(e, n) {
		var r, i = ss(n, t), a = (r = []).concat.apply(r, i.map(function(e) {
			return cs(e, t);
		}));
		return e.concat(a, n.parentNode ? Io(n.parentNode.querySelectorAll(as)).filter(function(e) {
			return e === n;
		}) : []);
	}, []);
}, us = function(e) {
	return Io(e.querySelectorAll(`[${po}]`)).map(function(e) {
		return ls([e]);
	}).reduce(function(e, t) {
		return e.concat(t);
	}, []);
}, ds = function(e, t) {
	return Io(e).filter(function(e) {
		return Wo(t, e);
	}).filter(function(e) {
		return Zo(e);
	});
}, fs = function(e, t) {
	return t === void 0 && (t = /* @__PURE__ */ new Map()), Io(e).filter(function(e) {
		return Ko(t, e);
	});
}, ps = function(e, t, n) {
	return is(ds(ls(e, n), t), !0, n);
}, ms = function(e, t) {
	return is(ds(ls(e), t), !1);
}, hs = function(e, t) {
	return ds(us(e), t);
}, gs = function(e, t) {
	return e.shadowRoot ? gs(e.shadowRoot, t) : Object.getPrototypeOf(e).contains !== void 0 && Object.getPrototypeOf(e).contains.call(e, t) ? !0 : Io(e.children).some(function(e) {
		if (e instanceof HTMLIFrameElement) {
			var n = e.contentDocument?.body;
			return n ? gs(n, t) : !1;
		}
		return gs(e, t);
	});
}, _s = function(e) {
	for (var t = /* @__PURE__ */ new Set(), n = e.length, r = 0; r < n; r += 1) for (var i = r + 1; i < n; i += 1) {
		var a = e[r].compareDocumentPosition(e[i]);
		(a & Node.DOCUMENT_POSITION_CONTAINED_BY) > 0 && t.add(i), (a & Node.DOCUMENT_POSITION_CONTAINS) > 0 && t.add(r);
	}
	return e.filter(function(e, n) {
		return !t.has(n);
	});
}, vs = function(e) {
	return e.parentNode ? vs(e.parentNode) : e;
}, ys = function(e) {
	return Lo(e).filter(Boolean).reduce(function(e, t) {
		var n = t.getAttribute(lo);
		return e.push.apply(e, n ? _s(Io(vs(t).querySelectorAll(`[${lo}="${n}"]:not([${uo}="disabled"])`))) : [t]), e;
	}, []);
}, bs = function(e) {
	try {
		return e();
	} catch {
		return;
	}
}, xs = function(e) {
	if (e === void 0 && (e = document), !(!e || !e.activeElement)) {
		var t = e.activeElement;
		return t.shadowRoot ? xs(t.shadowRoot) : t instanceof HTMLIFrameElement && bs(function() {
			return t.contentWindow.document;
		}) ? xs(t.contentWindow.document) : t;
	}
}, Ss = function(e, t) {
	return e === t;
}, Cs = function(e, t) {
	return !!Io(e.querySelectorAll("iframe")).some(function(e) {
		return Ss(e, t);
	});
}, ws = function(e, t) {
	return t === void 0 && (t = xs(Ro(e).ownerDocument)), !t || t.dataset && t.dataset.focusGuard ? !1 : ys(e).some(function(e) {
		return gs(e, t) || Cs(e, t);
	});
}, Ts = function(e) {
	e === void 0 && (e = document);
	var t = xs(e);
	return t ? Io(e.querySelectorAll(`[${fo}]`)).some(function(e) {
		return gs(e, t);
	}) : !1;
}, Es = function(e, t) {
	return t.filter(Xo).filter(function(t) {
		return t.name === e.name;
	}).filter(function(e) {
		return e.checked;
	})[0] || e;
}, Ds = function(e, t) {
	return Xo(e) && e.name ? Es(e, t) : e;
}, Os = function(e) {
	var t = /* @__PURE__ */ new Set();
	return e.forEach(function(n) {
		return t.add(Ds(n, e));
	}), e.filter(function(e) {
		return t.has(e);
	});
}, ks = function(e) {
	return e[0] && e.length > 1 ? Ds(e[0], e) : e[0];
}, As = function(e, t) {
	return e.indexOf(Ds(t, e));
}, js = "NEW_FOCUS", Ms = function(e, t, n, r, i) {
	var a = e.length, o = e[0], s = e[a - 1], c = $o(r);
	if (!(r && e.indexOf(r) >= 0)) {
		var l = r === void 0 ? -1 : n.indexOf(r), u = i ? n.indexOf(i) : l, d = i ? e.indexOf(i) : -1;
		if (l === -1) return d === -1 ? js : d;
		if (d === -1) return js;
		var f = l - u, p = n.indexOf(o), m = n.indexOf(s), h = Os(n), g = r === void 0 ? -1 : h.indexOf(r), _ = i ? h.indexOf(i) : g, v = h.filter(function(e) {
			return e.tabIndex >= 0;
		}), y = r === void 0 ? -1 : v.indexOf(r), b = i ? v.indexOf(i) : y, x = y >= 0 && b >= 0 ? b - y : _ - g;
		if (!f && d >= 0 || t.length === 0) return d;
		var S = As(e, t[0]), C = As(e, t[t.length - 1]);
		if (l <= p && c && Math.abs(f) > 1) return C;
		if (l >= m && c && Math.abs(f) > 1) return S;
		if (f && Math.abs(x) > 1) return d;
		if (l <= p) return C;
		if (l > m) return S;
		if (f) return Math.abs(f) > 1 ? d : (a + d + f) % a;
	}
}, Ns = function(e) {
	return function(t) {
		var n = qo(t)?.autofocus;
		return t.autofocus || n !== void 0 && n !== "false" || e.indexOf(t) >= 0;
	};
}, Ps = function(e, t, n) {
	var r = fs(e.map(function(e) {
		return e.node;
	}).filter(Ns(n)));
	return r && r.length ? ks(r) : ks(fs(t));
}, Fs = function(e, t) {
	return t === void 0 && (t = []), t.push(e), e.parentNode && Fs(e.parentNode.host || e.parentNode, t), t;
}, Is = function(e, t) {
	for (var n = Fs(e), r = Fs(t), i = 0; i < n.length; i += 1) {
		var a = n[i];
		if (r.indexOf(a) >= 0) return a;
	}
	return !1;
}, Ls = function(e, t, n) {
	var r = Lo(e), i = Lo(t), a = r[0], o = !1;
	return i.filter(Boolean).forEach(function(e) {
		o = Is(o || e, e) || o, n.filter(Boolean).forEach(function(e) {
			var t = Is(a, e);
			t && (o = !o || gs(t, o) ? t : Is(t, o));
		});
	}), o;
}, Rs = function(e, t) {
	return e.reduce(function(e, n) {
		return e.concat(hs(n, t));
	}, []);
}, zs = function(e, t) {
	var n = /* @__PURE__ */ new Map();
	return t.forEach(function(e) {
		return n.set(e.node, e);
	}), e.map(function(e) {
		return n.get(e);
	}).filter(ts);
}, Bs = function(e, t) {
	var n = xs(Lo(e).length > 0 ? document : Ro(e).ownerDocument), r = ys(e).filter(es), i = Ls(n || e, e, r), a = /* @__PURE__ */ new Map(), o = ms(r, a), s = o.filter(function(e) {
		var t = e.node;
		return es(t);
	});
	if (s[0]) {
		var c = ms([i], a).map(function(e) {
			return e.node;
		}), l = zs(c, s), u = l.map(function(e) {
			return e.node;
		}), d = l.filter(function(e) {
			return e.tabIndex >= 0;
		}).map(function(e) {
			return e.node;
		}), f = Ms(u, d, c, n, t);
		if (f === "NEW_FOCUS") {
			var p = Ps(o, d, Rs(r, a)) || Ps(o, u, Rs(r, a));
			if (p) return { node: p };
			console.warn("focus-lock: cannot find any node to move focus into");
			return;
		}
		return f === void 0 ? f : l[f];
	}
}, Vs = function(e) {
	var t = ys(e).filter(es), n = is(ls([Ls(e, e, t)], !0), !0, !0), r = ls(t, !1);
	return n.map(function(e) {
		var t = e.node;
		return {
			node: t,
			index: e.index,
			lockItem: r.indexOf(t) >= 0,
			guard: $o(t)
		};
	});
}, Hs = function(e, t) {
	e && ("focus" in e && e.focus(t), "contentWindow" in e && e.contentWindow && e.contentWindow.focus());
}, Us = 0, Ws = !1, Gs = function(e, t, n) {
	n === void 0 && (n = {});
	var r = Bs(e, t);
	if (!Ws && r) {
		if (Us > 2) {
			console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"), Ws = !0, setTimeout(function() {
				Ws = !1;
			}, 1);
			return;
		}
		Us++, Hs(r.node, n.focusOptions), Us--;
	}
};
//#endregion
//#region node_modules/.pnpm/focus-lock@1.3.6/node_modules/focus-lock/dist/es2015/return-focus.js
function Ks(e) {
	if (!e) return null;
	if (typeof WeakRef > "u") return function() {
		return e || null;
	};
	var t = e ? new WeakRef(e) : null;
	return function() {
		return t?.deref() || null;
	};
}
var qs = function(e) {
	if (!e) return null;
	for (var t = [], n = e; n && n !== document.body;) t.push({
		current: Ks(n),
		parent: Ks(n.parentElement),
		left: Ks(n.previousElementSibling),
		right: Ks(n.nextElementSibling)
	}), n = n.parentElement;
	return {
		element: Ks(e),
		stack: t,
		ownerDocument: e.ownerDocument
	};
}, Js = function(e) {
	if (e) for (var t = e.stack, n = e.ownerDocument, r = /* @__PURE__ */ new Map(), i = 0, a = t; i < a.length; i++) {
		var o = a[i], s = o.parent?.call(o);
		if (s && n.contains(s)) {
			for (var c = o.left?.call(o), l = o.current(), u = s.contains(l) ? l : void 0, d = o.right?.call(o), f = ps([s], r), p = u ?? c?.nextElementSibling ?? d ?? c; p;) {
				for (var m = 0, h = f; m < h.length; m++) {
					var g = h[m];
					if (p?.contains(g.node)) return g.node;
				}
				p = p.nextElementSibling;
			}
			if (f.length) return f[0].node;
		}
	}
}, Ys = function(e) {
	var t = qs(e);
	return function() {
		return Js(t);
	};
}, Xs = function(e, t, n) {
	if (!e || !t) return console.error("no element or scope given"), {};
	var r = Lo(t);
	if (r.every(function(t) {
		return !gs(t, e);
	})) return console.error("Active element is not contained in the scope"), {};
	var i = n ? ps(r, /* @__PURE__ */ new Map()) : ms(r, /* @__PURE__ */ new Map()), a = i.findIndex(function(t) {
		return t.node === e;
	});
	if (a !== -1) return {
		prev: i[a - 1],
		next: i[a + 1],
		first: i[0],
		last: i[i.length - 1]
	};
}, Zs = function(e, t) {
	var n = t ? ps(Lo(e), /* @__PURE__ */ new Map()) : ms(Lo(e), /* @__PURE__ */ new Map());
	return {
		first: n[0],
		last: n[n.length - 1]
	};
}, Qs = function(e) {
	return Object.assign({
		scope: document.body,
		cycle: !0,
		onlyTabbable: !0
	}, e);
}, $s = function(e, t, n) {
	t === void 0 && (t = {});
	var r = Qs(t), i = Xs(e, r.scope, r.onlyTabbable);
	if (i) {
		var a = n(i, r.cycle);
		a && Hs(a.node, r.focusOptions);
	}
}, ec = function(e, t) {
	t === void 0 && (t = {}), $s(e, t, function(e, t) {
		var n = e.next, r = e.first;
		return n || t && r;
	});
}, tc = function(e, t) {
	t === void 0 && (t = {}), $s(e, t, function(e, t) {
		var n = e.prev, r = e.last;
		return n || t && r;
	});
}, nc = function(e, t, n) {
	var r = Zs(e, t.onlyTabbable ?? !0)[n];
	r && Hs(r.node, t.focusOptions);
}, rc = function(e, t) {
	t === void 0 && (t = {}), nc(e, t, "first");
}, ic = function(e, t) {
	t === void 0 && (t = {}), nc(e, t, "last");
}, ac = function() {
	return document && document.activeElement === document.body;
}, oc = function() {
	return ac() || Ts();
}, sc = null, cc = null, lc = function() {
	return null;
}, uc = null, dc = !1, fc = !1, pc = function() {
	return !0;
}, mc = function(e) {
	return (sc.whiteList || pc)(e);
}, hc = function(e, t) {
	uc = {
		observerNode: e,
		portaledElement: t
	};
}, gc = function(e) {
	return uc && uc.portaledElement === e;
};
function _c(e, t, n, r) {
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
var vc = function(e) {
	return e ? !!dc : dc === "meanwhile";
}, yc = function e(t, n, r) {
	return n && (n.host === t && (!n.activeElement || r.contains(n.activeElement)) || n.parentNode && e(t, n.parentNode, r));
}, bc = function(e, t) {
	return t.some(function(t) {
		return yc(e, t, t);
	});
}, xc = function(e) {
	return ms(e, /* @__PURE__ */ new Map());
}, Sc = function(e) {
	return !xc([e.parentNode]).some(function(t) {
		return t.node === e;
	});
}, Cc = function() {
	var e = !1;
	if (sc) {
		var t = sc, n = t.observed, r = t.persistentFocus, i = t.autoFocus, a = t.shards, o = t.crossFrame, s = t.focusOptions, c = t.noFocusGuards, l = n || uc && uc.portaledElement;
		if (ac() && cc && cc !== document.body && (!document.body.contains(cc) || Sc(cc))) {
			var u = lc();
			u && u.focus();
		}
		var d = document && document.activeElement;
		if (l) {
			var f = [l].concat(a.map(To).filter(Boolean));
			if ((!d || mc(d)) && (r || function() {
				if (!vc(o) || !c || !cc || fc) return !1;
				var e = xc(f), t = e.findIndex(function(e) {
					return e.node === cc;
				});
				return t === 0 || t === e.length - 1;
			}() || !oc() || !cc && i) && (l && !(ws(f) || d && bc(d, f) || gc(d, l)) && (document && !cc && d && !i ? (d.blur && d.blur(), document.body.focus()) : (e = Gs(f, cc, { focusOptions: s }), uc = {})), cc = document && document.activeElement, cc !== document.body && (lc = Ys(cc)), dc = !1), document && d !== document.activeElement && document.querySelector("[data-focus-auto-guard]")) {
				var p = document && document.activeElement, m = Vs(f), h = m.map(function(e) {
					return e.node;
				}).indexOf(p);
				h > -1 && (m.filter(function(e) {
					var t = e.guard, n = e.node;
					return t && n.dataset.focusAutoGuard;
				}).forEach(function(e) {
					return e.node.removeAttribute("tabIndex");
				}), _c(h, m.length, 1, m), _c(h, -1, -1, m));
			}
		}
	}
	return e;
}, wc = function(e) {
	Cc() && e && (e.stopPropagation(), e.preventDefault());
}, Tc = function() {
	return wo(Cc);
}, Ec = function(e) {
	var t = e.target, n = e.currentTarget;
	n.contains(t) || hc(n, t);
}, Dc = function() {
	return null;
}, Oc = function(e) {
	var t = e.children;
	return /* @__PURE__ */ I.createElement("div", {
		onBlur: Tc,
		onFocus: Ec
	}, t);
};
Oc.propTypes = {};
var kc = function() {
	fc = !0;
}, Ac = function() {
	fc = !1, dc = "just", wo(function() {
		dc = "meanwhile";
	});
}, jc = function() {
	document.addEventListener("focusin", wc), document.addEventListener("focusout", Tc), window.addEventListener("focus", kc), window.addEventListener("blur", Ac);
}, Mc = function() {
	document.removeEventListener("focusin", wc), document.removeEventListener("focusout", Tc), window.removeEventListener("focus", kc), window.removeEventListener("blur", Ac);
};
function Nc(e) {
	return e.filter(function(e) {
		return !e.disabled;
	});
}
var Pc = {
	moveFocusInside: Gs,
	focusInside: ws,
	focusNextElement: ec,
	focusPrevElement: tc,
	focusFirstElement: rc,
	focusLastElement: ic,
	captureFocusRestore: Ys
};
function Fc(e) {
	var t = e.slice(-1)[0];
	t && !sc && jc();
	var n = sc, r = n && t && t.id === n.id;
	sc = t, n && !r && (n.onDeactivation(), e.filter(function(e) {
		return e.id === n.id;
	}).length || n.returnFocus(!t)), t ? (cc = null, (!r || n.observed !== t.observed) && t.onActivation(Pc), Cc(!0), wo(Cc)) : (Mc(), cc = null);
}
_o.assignSyncMedium(Ec), vo.assignMedium(Tc), yo.assignMedium(function(e) {
	return e(Pc);
}), ao(bo, Fo(Nc, Fc)(Dc));
//#endregion
//#region node_modules/.pnpm/get-nonce@1.0.1/node_modules/get-nonce/dist/es2015/index.js
var Ic, Lc = function() {
	if (Ic) return Ic;
	if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
//#endregion
//#region node_modules/.pnpm/react-style-singleton@2.2.3_@types+react@18.3.28_react@18.3.1/node_modules/react-style-singleton/dist/es2015/singleton.js
function Rc() {
	if (!document) return null;
	var e = document.createElement("style");
	e.type = "text/css";
	var t = Lc();
	return t && e.setAttribute("nonce", t), e;
}
function zc(e, t) {
	e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function Bc(e) {
	(document.head || document.getElementsByTagName("head")[0]).appendChild(e);
}
var Vc = function() {
	var e = 0, t = null;
	return {
		add: function(n) {
			e == 0 && (t = Rc()) && (zc(t, n), Bc(t)), e++;
		},
		remove: function() {
			e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
		}
	};
}, Hc = function() {
	var e = Vc();
	return function(t, n) {
		I.useEffect(function() {
			return e.add(t), function() {
				e.remove();
			};
		}, [t && n]);
	};
}, Uc = function() {
	var e = Hc();
	return function(t) {
		var n = t.styles, r = t.dynamic;
		return e(n, r), null;
	};
}, Wc = {
	left: 0,
	top: 0,
	right: 0,
	gap: 0
}, Gc = function(e) {
	return parseInt(e || "", 10) || 0;
}, Kc = function(e) {
	var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], i = t[e === "padding" ? "paddingRight" : "marginRight"];
	return [
		Gc(n),
		Gc(r),
		Gc(i)
	];
}, qc = function(e) {
	if (e === void 0 && (e = "margin"), typeof window > "u") return Wc;
	var t = Kc(e), n = document.documentElement.clientWidth, r = window.innerWidth;
	return {
		left: t[0],
		top: t[1],
		right: t[2],
		gap: Math.max(0, r - n + t[2] - t[0])
	};
}, Jc = Uc(), Yc = "data-scroll-locked", Xc = function(e, t, n, r) {
	var i = e.left, a = e.top, o = e.right, s = e.gap;
	return n === void 0 && (n = "margin"), `
  .${qa} {
   overflow: hidden ${r};
   padding-right: ${s}px ${r};
  }
  body[${Yc}] {
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
  
  .${Ga} {
    right: ${s}px ${r};
  }
  
  .${Ka} {
    margin-right: ${s}px ${r};
  }
  
  .${Ga} .${Ga} {
    right: 0 ${r};
  }
  
  .${Ka} .${Ka} {
    margin-right: 0 ${r};
  }
  
  body[${Yc}] {
    ${Ja}: ${s}px;
  }
`;
}, Zc = function() {
	var e = parseInt(document.body.getAttribute("data-scroll-locked") || "0", 10);
	return isFinite(e) ? e : 0;
}, Qc = function() {
	I.useEffect(function() {
		return document.body.setAttribute(Yc, (Zc() + 1).toString()), function() {
			var e = Zc() - 1;
			e <= 0 ? document.body.removeAttribute(Yc) : document.body.setAttribute(Yc, e.toString());
		};
	}, []);
}, $c = function(e) {
	var t = e.noRelative, n = e.noImportant, r = e.gapMode, i = r === void 0 ? "margin" : r;
	Qc();
	var a = I.useMemo(function() {
		return qc(i);
	}, [i]);
	return I.createElement(Jc, { styles: Xc(a, !t, i, n ? "" : "!important") });
}, el = !1;
if (typeof window < "u") try {
	var tl = Object.defineProperty({}, "passive", { get: function() {
		return el = !0, !0;
	} });
	window.addEventListener("test", tl, tl), window.removeEventListener("test", tl, tl);
} catch {
	el = !1;
}
var nl = el ? { passive: !1 } : !1, rl = function(e) {
	return e.tagName === "TEXTAREA";
}, il = function(e, t) {
	if (!(e instanceof Element)) return !1;
	var n = window.getComputedStyle(e);
	return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !rl(e) && n[t] === "visible");
}, al = function(e) {
	return il(e, "overflowY");
}, ol = function(e) {
	return il(e, "overflowX");
}, sl = function(e, t) {
	var n = t.ownerDocument, r = t;
	do {
		if (typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host), ul(e, r)) {
			var i = dl(e, r);
			if (i[1] > i[2]) return !0;
		}
		r = r.parentNode;
	} while (r && r !== n.body);
	return !1;
}, cl = function(e) {
	return [
		e.scrollTop,
		e.scrollHeight,
		e.clientHeight
	];
}, ll = function(e) {
	return [
		e.scrollLeft,
		e.scrollWidth,
		e.clientWidth
	];
}, ul = function(e, t) {
	return e === "v" ? al(t) : ol(t);
}, dl = function(e, t) {
	return e === "v" ? cl(t) : ll(t);
}, fl = function(e, t) {
	return e === "h" && t === "rtl" ? -1 : 1;
}, pl = function(e, t, n, r, i) {
	var a = fl(e, window.getComputedStyle(t).direction), o = a * r, s = n.target, c = t.contains(s), l = !1, u = o > 0, d = 0, f = 0;
	do {
		if (!s) break;
		var p = dl(e, s), m = p[0], h = p[1] - p[2] - a * m;
		(m || h) && ul(e, s) && (d += h, f += m);
		var g = s.parentNode;
		s = g && g.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? g.host : g;
	} while (!c && s !== document.body || c && (t.contains(s) || t === s));
	return (u && (i && Math.abs(d) < 1 || !i && o > d) || !u && (i && Math.abs(f) < 1 || !i && -o > f)) && (l = !0), l;
}, ml = function(e) {
	return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, hl = function(e) {
	return [e.deltaX, e.deltaY];
}, gl = function(e) {
	return e && "current" in e ? e.current : e;
}, _l = function(e, t) {
	return e[0] === t[0] && e[1] === t[1];
}, vl = function(e) {
	return `
  .block-interactivity-${e} {pointer-events: none;}
  .allow-interactivity-${e} {pointer-events: all;}
`;
}, yl = 0, bl = [];
function xl(e) {
	var t = I.useRef([]), n = I.useRef([0, 0]), r = I.useRef(), i = I.useState(yl++)[0], a = I.useState(Uc)[0], o = I.useRef(e);
	I.useEffect(function() {
		o.current = e;
	}, [e]), I.useEffect(function() {
		if (e.inert) {
			document.body.classList.add(`block-interactivity-${i}`);
			var t = k([e.lockRef.current], (e.shards || []).map(gl), !0).filter(Boolean);
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
		var i = ml(e), a = n.current, s = "deltaX" in e ? e.deltaX : a[0] - i[0], c = "deltaY" in e ? e.deltaY : a[1] - i[1], l, u = e.target, d = Math.abs(s) > Math.abs(c) ? "h" : "v";
		if ("touches" in e && d === "h" && u.type === "range") return !1;
		var f = window.getSelection(), p = f && f.anchorNode;
		if (p && (p === u || p.contains(u))) return !1;
		var m = sl(d, u);
		if (!m) return !0;
		if (m ? l = d : (l = d === "v" ? "h" : "v", m = sl(d, u)), !m) return !1;
		if (!r.current && "changedTouches" in e && (s || c) && (r.current = l), !l) return !0;
		var h = r.current || l;
		return pl(h, t, e, h === "h" ? s : c, !0);
	}, []), c = I.useCallback(function(e) {
		var n = e;
		if (!(!bl.length || bl[bl.length - 1] !== a)) {
			var r = "deltaY" in n ? hl(n) : ml(n), i = t.current.filter(function(e) {
				return e.name === n.type && (e.target === n.target || n.target === e.shadowParent) && _l(e.delta, r);
			})[0];
			if (i && i.should) {
				n.cancelable && n.preventDefault();
				return;
			}
			if (!i) {
				var c = (o.current.shards || []).map(gl).filter(Boolean).filter(function(e) {
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
			shadowParent: Sl(r)
		};
		t.current.push(a), setTimeout(function() {
			t.current = t.current.filter(function(e) {
				return e !== a;
			});
		}, 1);
	}, []), u = I.useCallback(function(e) {
		n.current = ml(e), r.current = void 0;
	}, []), d = I.useCallback(function(t) {
		l(t.type, hl(t), t.target, s(t, e.lockRef.current));
	}, []), f = I.useCallback(function(t) {
		l(t.type, ml(t), t.target, s(t, e.lockRef.current));
	}, []);
	I.useEffect(function() {
		return bl.push(a), e.setCallbacks({
			onScrollCapture: d,
			onWheelCapture: d,
			onTouchMoveCapture: f
		}), document.addEventListener("wheel", c, nl), document.addEventListener("touchmove", c, nl), document.addEventListener("touchstart", u, nl), function() {
			bl = bl.filter(function(e) {
				return e !== a;
			}), document.removeEventListener("wheel", c, nl), document.removeEventListener("touchmove", c, nl), document.removeEventListener("touchstart", u, nl);
		};
	}, []);
	var p = e.removeScrollBar, m = e.inert;
	return I.createElement(I.Fragment, null, m ? I.createElement(a, { styles: vl(i) }) : null, p ? I.createElement($c, {
		noRelative: e.noRelative,
		gapMode: e.gapMode
	}) : null);
}
function Sl(e) {
	for (var t = null; e !== null;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
	return t;
}
ao(oo, xl);
//#endregion
//#region node_modules/.pnpm/aria-hidden@1.2.6/node_modules/aria-hidden/dist/es2015/index.js
var Cl = function(e) {
	return typeof document > "u" ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body;
}, wl = /* @__PURE__ */ new WeakMap(), Tl = /* @__PURE__ */ new WeakMap(), El = {}, Dl = 0, Ol = function(e) {
	return e && (e.host || Ol(e.parentNode));
}, kl = function(e, t) {
	return t.map(function(t) {
		if (e.contains(t)) return t;
		var n = Ol(t);
		return n && e.contains(n) ? n : (console.error("aria-hidden", t, "in not contained inside", e, ". Doing nothing"), null);
	}).filter(function(e) {
		return !!e;
	});
}, Al = function(e, t, n, r) {
	var i = kl(t, Array.isArray(e) ? e : [e]);
	El[n] || (El[n] = /* @__PURE__ */ new WeakMap());
	var a = El[n], o = [], s = /* @__PURE__ */ new Set(), c = new Set(i), l = function(e) {
		!e || s.has(e) || (s.add(e), l(e.parentNode));
	};
	i.forEach(l);
	var u = function(e) {
		!e || c.has(e) || Array.prototype.forEach.call(e.children, function(e) {
			if (s.has(e)) u(e);
			else try {
				var t = e.getAttribute(r), i = t !== null && t !== "false", c = (wl.get(e) || 0) + 1, l = (a.get(e) || 0) + 1;
				wl.set(e, c), a.set(e, l), o.push(e), c === 1 && i && Tl.set(e, !0), l === 1 && e.setAttribute(n, "true"), i || e.setAttribute(r, "true");
			} catch (t) {
				console.error("aria-hidden: cannot operate on ", e, t);
			}
		});
	};
	return u(t), s.clear(), Dl++, function() {
		o.forEach(function(e) {
			var t = wl.get(e) - 1, i = a.get(e) - 1;
			wl.set(e, t), a.set(e, i), t || (Tl.has(e) || e.removeAttribute(r), Tl.delete(e)), i || e.removeAttribute(n);
		}), Dl--, Dl || (wl = /* @__PURE__ */ new WeakMap(), wl = /* @__PURE__ */ new WeakMap(), Tl = /* @__PURE__ */ new WeakMap(), El = {});
	};
}, jl = function(e, t, n) {
	n === void 0 && (n = "data-aria-hidden");
	var r = Array.from(Array.isArray(e) ? e : [e]), i = t || Cl(e);
	return i ? (r.push.apply(r, Array.from(i.querySelectorAll("[aria-live], script"))), Al(r, i, n, "aria-hidden")) : function() {
		return null;
	};
}, Ml = Uc(), Nl = "\n [" + Oo + "] {\n   pointer-events: none !important;\n }\n", Pl = function() {
	return I.createElement(Ml, { styles: Nl });
}, Fl = function(e) {
	return "current" in e ? e.current : e;
};
function Il(e) {
	var t = e.setLockProps, n = e.onEscapeKey, r = e.onClickOutside, i = e.shards, a = e.onActivation, o = e.onDeactivation, s = e.noIsolation, c = e.activeNode, l = (0, I.useRef)(null), u = (0, I.useRef)(0);
	return I.useEffect(function() {
		var e = function(e) {
			e.defaultPrevented || (e.code === "Escape" || e.key === "Escape" || e.keyCode === 27) && n && n(e);
		}, t = function(e) {
			e.defaultPrevented || e.target === l.current || e instanceof MouseEvent && e.button !== 0 || i && i.map(Fl).some(function(t) {
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
		if (!(s || !c)) return jl(fe([c], (i || []).map(Fl)), c.ownerDocument.body, Oo);
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
	}, []), I.createElement(Pl, null);
}
//#endregion
//#region node_modules/.pnpm/react-focus-on@3.10.2_@types+react@18.3.28_react@18.3.1/node_modules/react-focus-on/dist/es2015/sidecar.js
var Ll = ao(Do, Il), Rl = function(e) {
	return I.createElement(Ll, M({}, e));
}, zl = I.forwardRef(function(e, t) {
	return I.createElement(Ao, M({}, e, {
		ref: t,
		sideCar: Rl
	}));
}), Bl = class extends I.Component {
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
		return this.rootElement ? /* @__PURE__ */ Oe.createPortal(this.props.children, this.rootElement) : null;
	}
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Modal/ModalLayer.js
function Vl({ onClick: e }) {
	return /* @__PURE__ */ I.createElement("div", {
		className: "pgn__modal-backdrop",
		onClick: e,
		onKeyDown: e,
		"data-testid": "modal-backdrop",
		role: "presentation"
	});
}
// istanbul ignore next
function Hl({ children: e = null }) {
	return /* @__PURE__ */ I.createElement("div", { className: "pgn__modal-content-container" }, e);
}
function Ul({ children: e, onClose: t, isOpen: n, isBlocking: r = !1, zIndex: i }) {
	if ((0, I.useEffect)(() => (n ? document.body.classList.add("pgn__hidden-scroll-padding-right") : document.body.classList.remove("pgn__hidden-scroll-padding-right"), () => {
		document.body.classList.remove("pgn__hidden-scroll-padding-right");
	}), [n]), !n) return null;
	let a = r ? void 0 : t;
	return /* @__PURE__ */ I.createElement(Wa, {
		onClose: t,
		isOpen: n,
		isBlocking: r
	}, /* @__PURE__ */ I.createElement(Bl, null, /* @__PURE__ */ I.createElement(zl, {
		allowPinchZoom: !0,
		scrollLock: !0,
		enabled: n,
		onEscapeKey: a,
		onClickOutside: a,
		className: (0, L.default)("pgn__modal-layer", i ? `zindex-${i}` : "")
	}, /* @__PURE__ */ I.createElement(Hl, null, /* @__PURE__ */ I.createElement(Vl, { onClick: a }), e))));
}
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Modal/ModalCloseButton.js
var Wl = /* @__PURE__ */ I.forwardRef(({ as: e, children: t, ...n }, r) => {
	let { onClose: i } = (0, I.useContext)(Ua), a = e, o = {
		...n,
		className: (0, L.default)("pgn__modal-close-button", n.className),
		onClick: () => {
			i(), n.onClick && n.onClick();
		},
		ref: r
	};
	return /* @__PURE__ */ I.createElement(a, o, t);
});
Wl.propTypes = {
	as: R.default.elementType,
	children: R.default.node,
	className: R.default.string,
	onClick: R.default.func
}, Wl.defaultProps = {
	as: O,
	onClick: void 0,
	className: void 0,
	children: null
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Modal/ModalDialogHeader.js
var Gl = /* @__PURE__ */ I.forwardRef(({ as: e = "div", children: t, ...n }, r) => /* @__PURE__ */ I.createElement(e, {
	...n,
	ref: r,
	className: (0, L.default)("pgn__modal-header", n.className)
}, t));
Gl.propTypes = {
	as: R.default.elementType,
	children: R.default.node.isRequired,
	className: R.default.string
}, Gl.defaultProps = {
	as: "div",
	className: ""
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Modal/ModalDialogTitle.js
function Kl({ as: e, children: t, ...n }) {
	return /* @__PURE__ */ I.createElement(e, {
		...n,
		className: (0, L.default)("pgn__modal-title", n.className)
	}, t);
}
Kl.propTypes = {
	as: R.default.elementType,
	children: R.default.node.isRequired,
	className: R.default.string
}, Kl.defaultProps = {
	as: "h2",
	className: void 0
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Modal/ModalDialogFooter.js
function ql({ as: e, children: t, ...n }) {
	return /* @__PURE__ */ I.createElement(e, {
		...n,
		className: (0, L.default)("pgn__modal-footer", n.className)
	}, t);
}
ql.propTypes = {
	as: R.default.elementType,
	children: R.default.node.isRequired,
	className: R.default.string
}, ql.defaultProps = {
	as: "div",
	className: void 0
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/hooks/useIsVisibleHook.js
var Jl = (e = !0) => {
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
function Yl({ as: e, children: t, ...n }) {
	let [r, i] = Jl(), [a, o] = Jl(), s = (0, L.default)("pgn__modal-body", n.className, {
		"pgn__modal-body-scroll-top": r,
		"pgn__modal-body-scroll-bottom": a
	});
	return /* @__PURE__ */ I.createElement(e, {
		...n,
		className: s
	}, /* @__PURE__ */ I.createElement(I.Fragment, null, /* @__PURE__ */ I.createElement("div", { ref: i }), /* @__PURE__ */ I.createElement("div", { className: "pgn__modal-body-content" }, t), /* @__PURE__ */ I.createElement("div", { ref: o })));
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
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Modal/ModalDialogHeroContent.js
function Xl({ as: e, children: t, ...n }) {
	return /* @__PURE__ */ I.createElement(e, {
		...n,
		className: (0, L.default)("pgn__modal-hero-content", n.className)
	}, t);
}
Xl.propTypes = {
	as: R.default.elementType,
	children: R.default.node.isRequired,
	className: R.default.string
}, Xl.defaultProps = {
	as: "div",
	className: void 0
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Modal/ModalDialogHeroBackground.js
function Zl({ as: e, backgroundSrc: t, children: n, ...r }) {
	return /* @__PURE__ */ I.createElement(e, {
		...r,
		className: (0, L.default)("pgn__modal-hero-bg", r.className),
		style: {
			backgroundImage: t ? `url(${t})` : void 0,
			...r.style
		}
	}, n);
}
Zl.propTypes = {
	as: R.default.elementType,
	backgroundSrc: R.default.string,
	children: R.default.node,
	className: R.default.string,
	style: R.default.shape({})
}, Zl.defaultProps = {
	as: "div",
	backgroundSrc: void 0,
	children: null,
	className: void 0,
	style: {}
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Modal/ModalDialogHero.js
function Ql({ as: e, children: t, ...n }) {
	return /* @__PURE__ */ I.createElement(e, {
		...n,
		className: (0, L.default)("pgn__modal-hero", n.className)
	}, t);
}
Ql.propTypes = {
	as: R.default.elementType,
	children: R.default.node.isRequired,
	className: R.default.string
}, Ql.defaultProps = {
	as: "div",
	className: void 0
}, Ql.Content = Xl, Ql.Background = Zl;
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Modal/messages.js
var $l = w({ closeButtonText: {
	id: "pgn.Modal.closeButon",
	defaultMessage: "Close",
	description: "Accessible name for the close button in the modal dialog"
} });
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Modal/ModalDialog.js
function eu({ children: e, title: t, isOpen: n = !1, onClose: r, size: i = "md", variant: a = "default", hasCloseButton: o = !0, closeLabel: s, isFullscreenScroll: c = !1, className: l, isFullscreenOnMobile: u = !1, isBlocking: d = !1, zIndex: f, isOverflowVisible: p }) {
	let m = _(), h = s || m.formatMessage($l.closeButtonText), g = kr({ query: "(max-width: 767.98px)" }), v = u && g;
	return /* @__PURE__ */ I.createElement(Ul, {
		isOpen: n,
		onClose: r,
		isBlocking: d,
		zIndex: f
	}, /* @__PURE__ */ I.createElement("div", {
		role: "dialog",
		"aria-label": t,
		className: (0, L.default)("pgn__modal", {
			[`pgn__modal-${v ? "fullscreen" : i}`]: i,
			[`pgn__modal-${a}`]: a,
			"pgn__modal-scroll-fullscreen": c,
			"pgn__modal-visible-overflow": p
		}, l)
	}, o && /* @__PURE__ */ I.createElement("div", { className: "pgn__modal-close-container" }, /* @__PURE__ */ I.createElement(Wl, {
		as: le,
		iconAs: de,
		invertColors: a === "dark",
		src: Gr,
		alt: h
	})), e));
}
eu.Header = Gl, eu.Title = Kl, eu.Footer = ql, eu.CloseButton = Wl, eu.Body = Yl, eu.Hero = Ql;
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/hooks/useToggleHook.js
function tu(e = !1, t = {}) {
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
var nu = /* @__PURE__ */ I.forwardRef(({ show: e, autoClose: t, onToggle: n, variant: r, className: i, ...a }, o) => {
	let [s, c] = I.useState(e), l = (e) => t === !1 ? e === "click" : t === "inside" ? e !== "rootClose" : t === "outside" ? e !== "select" : !0, u = (e, t, r) => {
		if (e) {
			c(!0), n?.(e, t, r);
			return;
		}
		let { source: i } = { ...r };
		t.currentTarget === document && (i !== "keydown" || t.key === "Escape") && (i = "rootClose"), l(i) && (c(!1), n?.(e, t, r));
	};
	return /* @__PURE__ */ I.createElement(Ft, {
		className: (0, L.default)("pgn__dropdown", `pgn__dropdown-${r}`, i),
		"data-testid": "dropdown",
		onToggle: u,
		ref: o,
		show: s,
		...a
	});
});
nu.propTypes = {
	autoClose: R.default.oneOfType([R.default.string, R.default.bool]),
	className: R.default.string,
	onToggle: R.default.func,
	show: R.default.bool,
	variant: R.default.oneOf(["light", "dark"])
}, nu.defaultProps = {
	autoClose: !0,
	className: "",
	onToggle: void 0,
	show: !1,
	variant: "light"
};
var ru = /* @__PURE__ */ I.forwardRef(({ as: e, bsPrefix: t, ...n }, r) => {
	let i = e === le ? "pgn__dropdown-toggle-iconbutton" : t;
	return /* @__PURE__ */ I.createElement(kt, {
		...n,
		as: e,
		bsPrefix: i,
		ref: r
	});
});
ru.propTypes = {
	as: R.default.elementType,
	bsPrefix: R.default.string,
	id: R.default.oneOfType([R.default.string, R.default.number]).isRequired
}, ru.defaultProps = {
	as: O,
	bsPrefix: "dropdown-toggle"
}, nu.Item = /* @__PURE__ */ I.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ I.createElement(xt, {
	className: (0, L.default)(e, "pgn__dropdown-item"),
	ref: n,
	...t
})), nu.Item.propTypes = { className: R.default.string }, nu.Item.defaultProps = { className: void 0 }, nu.Toggle = ru, nu.Menu = Dt, nu.Header = Ft.Header, nu.Divider = Ft.Divider;
//#endregion
//#region node_modules/.pnpm/react-popper@2.3.0_@popperjs+core@2.11.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-popper/lib/esm/utils.js
var iu = function(e) {
	return e.reduce(function(e, t) {
		var n = t[0];
		return e[n] = t[1], e;
	}, {});
}, au = typeof window < "u" && window.document && window.document.createElement ? I.useLayoutEffect : I.useEffect;
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/applyStyles.js
function ou(e) {
	var t = e.state;
	Object.keys(t.elements).forEach(function(e) {
		var n = t.styles[e] || {}, r = t.attributes[e] || {}, o = t.elements[e];
		!i(o) || !a(o) || (Object.assign(o.style, n), Object.keys(r).forEach(function(e) {
			var t = r[e];
			t === !1 ? o.removeAttribute(e) : o.setAttribute(e, t === !0 ? "" : t);
		}));
	});
}
function su(e) {
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
var cu = /* @__PURE__ */ D({ defaultModifiers: [
	r,
	Te,
	Ce,
	{
		name: "applyStyles",
		enabled: !0,
		phase: "write",
		fn: ou,
		effect: su,
		requires: ["computeStyles"]
	},
	A,
	y,
	Se,
	b,
	we
] }), lu = /* @__PURE__ */ xe((/* @__PURE__ */ se(((e, t) => {
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
})))()), uu = [], du = function(e, t, n) {
	n === void 0 && (n = {});
	var r = I.useRef(null), i = {
		onFirstUpdate: n.onFirstUpdate,
		placement: n.placement || "bottom",
		strategy: n.strategy || "absolute",
		modifiers: n.modifiers || uu
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
				Oe.flushSync(function() {
					s({
						styles: iu(n.map(function(e) {
							return [e, t.styles[e] || {}];
						})),
						attributes: iu(n.map(function(e) {
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
		return (0, lu.default)(r.current, e) ? r.current || e : (r.current = e, e);
	}, [
		i.onFirstUpdate,
		i.placement,
		i.strategy,
		i.modifiers,
		c
	]), u = I.useRef();
	return au(function() {
		u.current && u.current.setOptions(l);
	}, [l]), au(function() {
		if (!(e == null || t == null)) {
			var r = (n.createPopper || cu)(e, t, l);
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
function fu({ children: e, target: t, strategy: n, placement: r, modifiers: i }) {
	let [a, o] = (0, I.useState)(null), { styles: s, attributes: c } = du(t, a, {
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
fu.defaultProps = { target: void 0 }, fu.propTypes = {
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
}, fu.defaultProps = {
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
var pu = {
	right: [-2, 10],
	left: [-2, 10]
};
function mu({ children: e, onClose: t, isOpen: n, positionRef: r, isBlocking: i, withPortal: a, placement: o, hasArrow: s, ...c }) {
	let l = a ? Bl : I.Fragment, u = pu[o] || [0, 10], d = [{
		name: "eventListeners",
		options: { scroll: !1 }
	}, {
		name: "offset",
		options: { offset: () => u }
	}], f = (e) => {
		e.type !== "touchstart" && t();
	};
	return /* @__PURE__ */ I.createElement(Wa, {
		onClose: t,
		isOpen: n,
		isBlocking: i
	}, /* @__PURE__ */ I.createElement(l, null, /* @__PURE__ */ I.createElement(fu, {
		modifiers: s ? d : null,
		target: r,
		placement: o,
		...c
	}, /* @__PURE__ */ I.createElement(zl, {
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
mu.propTypes = {
	children: R.default.node.isRequired,
	onClose: R.default.func.isRequired,
	isOpen: R.default.bool.isRequired,
	isBlocking: R.default.bool,
	withPortal: R.default.bool,
	positionRef: R.default.oneOfType([R.default.func, R.default.shape({ current: R.default.shape({}) })]),
	placement: fu.propTypes.placement,
	hasArrow: R.default.bool
}, mu.defaultProps = {
	isBlocking: !1,
	withPortal: !1,
	placement: "bottom-start",
	positionRef: null,
	hasArrow: !1
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Modal/StandardModal.js
var hu = "Close";
function gu({ children: e, footerNode: t, beforeBodyNode: n, afterBodyNode: r, ...i }) {
	return /* @__PURE__ */ I.createElement(eu, { ...i }, /* @__PURE__ */ I.createElement(eu.Header, null, /* @__PURE__ */ I.createElement(eu.Title, null, i.title)), n, /* @__PURE__ */ I.createElement(eu.Body, null, e), r, t && /* @__PURE__ */ I.createElement(eu.Footer, null, t));
}
gu.propTypes = {
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
}, gu.defaultProps = {
	isOpen: !1,
	hasCloseButton: !0,
	size: "md",
	variant: "default",
	closeLabel: hu,
	className: void 0,
	isFullscreenScroll: !1,
	footerNode: null,
	beforeBodyNode: null,
	afterBodyNode: null
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Nav/index.js
function _u(e) {
	return /* @__PURE__ */ I.createElement(In, { ...e });
}
function vu(e) {
	return /* @__PURE__ */ I.createElement(An, { ...e });
}
function yu(e) {
	return /* @__PURE__ */ I.createElement(Nn, { ...e });
}
function bu(e) {
	return /* @__PURE__ */ I.createElement(Rn, { ...e });
}
function xu(e) {
	return /* @__PURE__ */ I.createElement(Rn.Item, { ...e });
}
function Su(e) {
	return /* @__PURE__ */ I.createElement(Rn.Divider, { ...e });
}
_u.propTypes = {
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
}, vu.propTypes = {
	role: R.default.string,
	as: R.default.elementType,
	bsPrefix: R.default.string
}, yu.propTypes = {
	onSelect: R.default.string,
	active: R.default.bool,
	as: R.default.elementType,
	disabled: R.default.bool,
	eventKey: R.default.oneOfType([R.default.string, R.default.number]),
	href: R.default.string,
	role: R.default.string,
	bsPrefix: R.default.string
}, bu.propTypes = {
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
}, _u.defaultProps = { ...In.defaultProps }, bu.defaultProps = { ...Rn.defaultProps }, vu.defaultProps = { ...An.defaultProps }, yu.defaultProps = { ...Nn.defaultProps }, _u.Item = vu, _u.Link = yu, bu.Item = xu, bu.Divider = Su;
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/ProgressBar/utils.js
var Cu = (e, t = "ltr", n = !0, r = "pgn__annotation") => {
	if (!e.current || !e.current.style) return !1;
	let { children: i } = e.current, a = 0;
	for (let e = 0; e < i.length; e++) {
		let t = i[e].getBoundingClientRect();
		i[e].className.includes(r) ? a += t.width / 2 : a += n ? 0 : t.width;
	}
	return e.current.style[t === "rtl" ? "marginRight" : "marginLeft"] = `${-a}px`, !0;
}, wu = (e, t) => t === "rtl" ? { right: `${e}%` } : { left: `${e}%` }, Tu = "pgn__annotation", Eu = 50, Du = "warning", Ou = "dark", ku = [
	"dark",
	"warning",
	"success",
	"error"
];
function Au(e) {
	return /* @__PURE__ */ I.createElement(Kn, { ...e });
}
function ju({ now: e, label: t, variant: n, threshold: r, thresholdLabel: i, thresholdVariant: a, progressHint: o, thresholdHint: s, ...c }) {
	let l = I.useRef(), u = I.useRef(), d = (r || 0) - (e || 0), f = e < Eu, p = r < Eu, m = ku.includes(n) ? n : Du, h = ku.includes(a) ? a : Ou, g = window.getComputedStyle(document.body).getPropertyValue("direction"), _ = (0, I.useCallback)(() => {
		Cu(l, g, f, Tu), Cu(u, g, p, Tu);
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
		style: wu(e, g),
		ref: l
	}, !f && v(o), /* @__PURE__ */ I.createElement(Br, { variant: m }, t), f && v(o)), /* @__PURE__ */ I.createElement(Kn, null, /* @__PURE__ */ I.createElement(Kn, {
		...c,
		now: e,
		className: (0, L.default)(`pgn__progress-bar--${m}`, d > 0 ? "pgn__progress-tick--white" : "pgn__progress-tick--black"),
		srOnly: !0
	}), !!r && /* @__PURE__ */ I.createElement(Kn, {
		now: d,
		className: `pgn__progress-bar--${h}`,
		srOnly: !0
	})), !!r && !!i && /* @__PURE__ */ I.createElement("div", {
		className: "pgn__progress-info",
		style: wu(r, g),
		ref: u
	}, !p && v(s), /* @__PURE__ */ I.createElement(Br, {
		arrowPlacement: "top",
		variant: h
	}, i), p && v(s)));
}
ju.propTypes = {
	now: R.default.number,
	label: R.default.node,
	variant: R.default.oneOf(ku),
	className: R.default.string,
	threshold: R.default.number,
	thresholdLabel: R.default.node,
	thresholdVariant: R.default.oneOf(ku),
	progressHint: R.default.node,
	thresholdHint: R.default.node
}, ju.defaultProps = {
	now: void 0,
	label: void 0,
	variant: Du,
	className: void 0,
	threshold: void 0,
	thresholdLabel: void 0,
	thresholdVariant: Ou,
	progressHint: void 0,
	thresholdHint: void 0
}, Au.Annotated = ju;
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Sticky/index.js
var Mu = ["top", "bottom"], Nu = /* @__PURE__ */ I.forwardRef(({ position: e, children: t, offset: n, className: r, ...i }, a) => {
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
Nu.propTypes = {
	children: R.default.node.isRequired,
	position: R.default.oneOf(Mu),
	offset: R.default.oneOfType([R.default.number, R.default.string]),
	className: R.default.string
}, Nu.defaultProps = {
	position: "top",
	offset: void 0,
	className: void 0
};
//#endregion
//#region node_modules/.pnpm/file-selector@2.1.2/node_modules/file-selector/dist/es2015/file.js
var Pu = new Map([
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
function Fu(e, t, n) {
	let r = Iu(e), { webkitRelativePath: i } = e, a = typeof t == "string" ? t : typeof i == "string" && i.length > 0 ? i : `./${e.name}`;
	return typeof r.path != "string" && Lu(r, "path", a), n !== void 0 && Object.defineProperty(r, "handle", {
		value: n,
		writable: !1,
		configurable: !1,
		enumerable: !0
	}), Lu(r, "relativePath", a), r;
}
function Iu(e) {
	let { name: t } = e;
	if (t && t.lastIndexOf(".") !== -1 && !e.type) {
		let n = t.split(".").pop().toLowerCase(), r = Pu.get(n);
		r && Object.defineProperty(e, "type", {
			value: r,
			writable: !1,
			configurable: !1,
			enumerable: !0
		});
	}
	return e;
}
function Lu(e, t, n) {
	Object.defineProperty(e, t, {
		value: n,
		writable: !1,
		configurable: !1,
		enumerable: !0
	});
}
//#endregion
//#region node_modules/.pnpm/file-selector@2.1.2/node_modules/file-selector/dist/es2015/file-selector.js
var Ru = [".DS_Store", "Thumbs.db"];
function zu(e) {
	return ye(this, void 0, void 0, function* () {
		return Hu(e) && Bu(e.dataTransfer) ? Gu(e.dataTransfer, e.type) : Vu(e) ? Uu(e) : Array.isArray(e) && e.every((e) => "getFile" in e && typeof e.getFile == "function") ? Wu(e) : [];
	});
}
function Bu(e) {
	return Hu(e);
}
function Vu(e) {
	return Hu(e) && Hu(e.target);
}
function Hu(e) {
	return typeof e == "object" && !!e;
}
function Uu(e) {
	return qu(e.target.files).map((e) => Fu(e));
}
function Wu(e) {
	return ye(this, void 0, void 0, function* () {
		return (yield Promise.all(e.map((e) => e.getFile()))).map((e) => Fu(e));
	});
}
function Gu(e, t) {
	return ye(this, void 0, void 0, function* () {
		if (e.items) {
			let n = qu(e.items).filter((e) => e.kind === "file");
			return t === "drop" ? Ku(Yu(yield Promise.all(n.map(Ju)))) : n;
		}
		return Ku(qu(e.files).map((e) => Fu(e)));
	});
}
function Ku(e) {
	return e.filter((e) => Ru.indexOf(e.name) === -1);
}
function qu(e) {
	if (e === null) return [];
	let t = [];
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		t.push(r);
	}
	return t;
}
function Ju(e) {
	if (typeof e.webkitGetAsEntry != "function") return Xu(e);
	let t = e.webkitGetAsEntry();
	return t && t.isDirectory ? Qu(t) : Xu(e, t);
}
function Yu(e) {
	return e.reduce((e, t) => [...e, ...Array.isArray(t) ? Yu(t) : [t]], []);
}
function Xu(e, t) {
	return ye(this, void 0, void 0, function* () {
		if (globalThis.isSecureContext && typeof e.getAsFileSystemHandle == "function") {
			let t = yield e.getAsFileSystemHandle();
			if (t === null) throw Error(`${e} is not a File`);
			if (t !== void 0) {
				let e = yield t.getFile();
				return e.handle = t, Fu(e);
			}
		}
		let n = e.getAsFile();
		if (!n) throw Error(`${e} is not a File`);
		return Fu(n, t?.fullPath ?? void 0);
	});
}
function Zu(e) {
	return ye(this, void 0, void 0, function* () {
		return e.isDirectory ? Qu(e) : $u(e);
	});
}
function Qu(e) {
	let t = e.createReader();
	return new Promise((e, n) => {
		let r = [];
		function i() {
			t.readEntries((t) => ye(this, void 0, void 0, function* () {
				if (t.length) {
					let e = Promise.all(t.map(Zu));
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
function $u(e) {
	return ye(this, void 0, void 0, function* () {
		return new Promise((t, n) => {
			e.file((n) => {
				t(Fu(n, e.fullPath));
			}, (e) => {
				n(e);
			});
		});
	});
}
//#endregion
//#region node_modules/.pnpm/react-dropzone@14.4.1_react@18.3.1/node_modules/react-dropzone/dist/es/utils/index.js
var ed = /* @__PURE__ */ xe((/* @__PURE__ */ se(((e) => {
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
function td(e) {
	return id(e) || rd(e) || ud(e) || nd();
}
function nd() {
	throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function rd(e) {
	if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function id(e) {
	if (Array.isArray(e)) return dd(e);
}
function ad(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function od(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? ad(Object(n), !0).forEach(function(t) {
			sd(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ad(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function sd(e, t, n) {
	return t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function cd(e, t) {
	return pd(e) || fd(e, t) || ud(e, t) || ld();
}
function ld() {
	throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function ud(e, t) {
	if (e) {
		if (typeof e == "string") return dd(e, t);
		var n = Object.prototype.toString.call(e).slice(8, -1);
		if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
		if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return dd(e, t);
	}
}
function dd(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function fd(e, t) {
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
function pd(e) {
	if (Array.isArray(e)) return e;
}
var md = typeof ed.default == "function" ? ed.default : ed.default.default, hd = "file-invalid-type", gd = "file-too-large", _d = "file-too-small", vd = "too-many-files", yd = {
	FileInvalidType: hd,
	FileTooLarge: gd,
	FileTooSmall: _d,
	TooManyFiles: vd
}, bd = function() {
	var e = (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "").split(",");
	return {
		code: hd,
		message: `File type must be ${e.length > 1 ? `one of ${e.join(", ")}` : e[0]}`
	};
}, xd = function(e) {
	return {
		code: gd,
		message: `File is larger than ${e} ${e === 1 ? "byte" : "bytes"}`
	};
}, Sd = function(e) {
	return {
		code: _d,
		message: `File is smaller than ${e} ${e === 1 ? "byte" : "bytes"}`
	};
}, Cd = {
	code: vd,
	message: "Too many files"
};
function wd(e) {
	return e.type === "" && typeof e.getAsFile == "function";
}
function Td(e, t) {
	var n = e.type === "application/x-moz-file" || md(e, t) || wd(e);
	return [n, n ? null : bd(t)];
}
function Ed(e, t, n) {
	if (Dd(e.size)) {
		if (Dd(t) && Dd(n)) {
			if (e.size > n) return [!1, xd(n)];
			if (e.size < t) return [!1, Sd(t)];
		} else if (Dd(t) && e.size < t) return [!1, Sd(t)];
		else if (Dd(n) && e.size > n) return [!1, xd(n)];
	}
	return [!0, null];
}
function Dd(e) {
	return e != null;
}
function Od(e) {
	var t = e.files, n = e.accept, r = e.minSize, i = e.maxSize, a = e.multiple, o = e.maxFiles, s = e.validator;
	return !a && t.length > 1 || a && o >= 1 && t.length > o ? !1 : t.every(function(e) {
		var t = cd(Td(e, n), 1)[0], a = cd(Ed(e, r, i), 1)[0], o = s ? s(e) : null;
		return t && a && !o;
	});
}
function kd(e) {
	return typeof e.isPropagationStopped == "function" ? e.isPropagationStopped() : e.cancelBubble === void 0 ? !1 : e.cancelBubble;
}
function Ad(e) {
	return e.dataTransfer ? Array.prototype.some.call(e.dataTransfer.types, function(e) {
		return e === "Files" || e === "application/x-moz-file";
	}) : !!e.target && !!e.target.files;
}
function jd(e) {
	e.preventDefault();
}
function Md(e) {
	return e.indexOf("MSIE") !== -1 || e.indexOf("Trident/") !== -1;
}
function Nd(e) {
	return e.indexOf("Edge/") !== -1;
}
function Pd() {
	var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : window.navigator.userAgent;
	return Md(e) || Nd(e);
}
function Fd() {
	var e = [...arguments];
	return function(t) {
		var n = [...arguments].slice(1);
		return e.some(function(e) {
			return !kd(t) && e && e.apply(void 0, [t].concat(n)), kd(t);
		});
	};
}
function Id() {
	return "showOpenFilePicker" in window;
}
function Ld(e) {
	return Dd(e) ? [{
		description: "Files",
		accept: Object.entries(e).filter(function(e) {
			var t = cd(e, 2), n = t[0], r = t[1], i = !0;
			return Vd(n) || (console.warn(`Skipped "${n}" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.`), i = !1), (!Array.isArray(r) || !r.every(Hd)) && (console.warn(`Skipped "${n}" because an invalid file extension was provided.`), i = !1), i;
		}).reduce(function(e, t) {
			var n = cd(t, 2), r = n[0], i = n[1];
			return od(od({}, e), {}, sd({}, r, i));
		}, {})
	}] : e;
}
function Rd(e) {
	if (Dd(e)) return Object.entries(e).reduce(function(e, t) {
		var n = cd(t, 2), r = n[0], i = n[1];
		return [].concat(td(e), [r], td(i));
	}, []).filter(function(e) {
		return Vd(e) || Hd(e);
	}).join(",");
}
function zd(e) {
	return e instanceof DOMException && (e.name === "AbortError" || e.code === e.ABORT_ERR);
}
function Bd(e) {
	return e instanceof DOMException && (e.name === "SecurityError" || e.code === e.SECURITY_ERR);
}
function Vd(e) {
	return e === "audio/*" || e === "video/*" || e === "image/*" || e === "text/*" || e === "application/*" || /\w+\/[-+.\w]+/g.test(e);
}
function Hd(e) {
	return /^.*\.[\w]+$/.test(e);
}
//#endregion
//#region node_modules/.pnpm/react-dropzone@14.4.1_react@18.3.1/node_modules/react-dropzone/dist/es/index.js
var Ud = ["children"], Wd = ["open"], Gd = [
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
], Kd = [
	"refKey",
	"onChange",
	"onClick"
];
function qd(e) {
	return Xd(e) || Yd(e) || $d(e) || Jd();
}
function Jd() {
	throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function Yd(e) {
	if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Xd(e) {
	if (Array.isArray(e)) return ef(e);
}
function Zd(e, t) {
	return nf(e) || tf(e, t) || $d(e, t) || Qd();
}
function Qd() {
	throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function $d(e, t) {
	if (e) {
		if (typeof e == "string") return ef(e, t);
		var n = Object.prototype.toString.call(e).slice(8, -1);
		if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
		if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ef(e, t);
	}
}
function ef(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function tf(e, t) {
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
function nf(e) {
	if (Array.isArray(e)) return e;
}
function rf(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function af(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? rf(Object(n), !0).forEach(function(t) {
			of(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : rf(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function of(e, t, n) {
	return t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function sf(e, t) {
	if (e == null) return {};
	var n = cf(e, t), r, i;
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (i = 0; i < a.length; i++) r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
	}
	return n;
}
function cf(e, t) {
	if (e == null) return {};
	var n = {}, r = Object.keys(e), i, a;
	for (a = 0; a < r.length; a++) i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
	return n;
}
var lf = /* @__PURE__ */ (0, I.forwardRef)(function(e, t) {
	var n = e.children, r = ff(sf(e, Ud)), i = r.open, a = sf(r, Wd);
	return (0, I.useImperativeHandle)(t, function() {
		return { open: i };
	}, [i]), /* @__PURE__ */ I.createElement(I.Fragment, null, n(af(af({}, a), {}, { open: i })));
});
lf.displayName = "Dropzone";
var uf = {
	disabled: !1,
	getFilesFromEvent: zu,
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
lf.defaultProps = uf, lf.propTypes = {
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
var df = {
	isFocused: !1,
	isFileDialogActive: !1,
	isDragActive: !1,
	isDragAccept: !1,
	isDragReject: !1,
	isDragGlobal: !1,
	acceptedFiles: [],
	fileRejections: []
};
function ff() {
	var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = af(af({}, uf), e), n = t.accept, r = t.disabled, i = t.getFilesFromEvent, a = t.maxSize, o = t.minSize, s = t.multiple, c = t.maxFiles, l = t.onDragEnter, u = t.onDragLeave, d = t.onDragOver, f = t.onDrop, p = t.onDropAccepted, m = t.onDropRejected, h = t.onFileDialogCancel, g = t.onFileDialogOpen, _ = t.useFsAccessApi, v = t.autoFocus, y = t.preventDropOnDocument, b = t.noClick, x = t.noKeyboard, S = t.noDrag, C = t.noDragEventsBubbling, w = t.onError, T = t.validator, E = (0, I.useMemo)(function() {
		return Rd(n);
	}, [n]), D = (0, I.useMemo)(function() {
		return Ld(n);
	}, [n]), O = (0, I.useMemo)(function() {
		return typeof g == "function" ? g : mf;
	}, [g]), k = (0, I.useMemo)(function() {
		return typeof h == "function" ? h : mf;
	}, [h]), A = (0, I.useRef)(null), j = (0, I.useRef)(null), ee = Zd((0, I.useReducer)(pf, df), 2), M = ee[0], N = ee[1], te = M.isFocused, P = M.isFileDialogActive, ne = (0, I.useRef)(typeof window < "u" && window.isSecureContext && _ && Id()), re = function() {
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
		return y && (document.addEventListener("dragover", jd, !1), document.addEventListener("drop", oe, !1)), function() {
			y && (document.removeEventListener("dragover", jd), document.removeEventListener("drop", oe));
		};
	}, [A, y]), (0, I.useEffect)(function() {
		var e = function(e) {
			ae.current = [].concat(qd(ae.current), [e.target]), Ad(e) && N({
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
		e.preventDefault(), e.persist(), xe(e), ie.current = [].concat(qd(ie.current), [e.target]), Ad(e) && Promise.resolve(i(e)).then(function(t) {
			if (!(kd(e) && !C)) {
				var n = t.length, r = n > 0 && Od({
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
		var t = Ad(e);
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
		}), Ad(e) && u && u(e));
	}, [
		A,
		u,
		C
	]), de = (0, I.useCallback)(function(e, t) {
		var n = [], r = [];
		e.forEach(function(e) {
			var t = Zd(Td(e, E), 2), i = t[0], s = t[1], c = Zd(Ed(e, o, a), 2), l = c[0], u = c[1], d = T ? T(e) : null;
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
				errors: [Cd]
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
		e.preventDefault(), e.persist(), xe(e), ie.current = [], Ad(e) && Promise.resolve(i(e)).then(function(t) {
			kd(e) && !C || de(t, e);
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
				zd(e) ? (k(e), N({ type: "closeDialog" })) : Bd(e) ? (ne.current = !1, j.current ? (j.current.value = null, j.current.click()) : se(/* @__PURE__ */ Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))) : se(e);
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
		b || (Pd() ? setTimeout(pe, 0) : pe());
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
			var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.refKey, n = t === void 0 ? "ref" : t, i = e.role, a = e.onKeyDown, o = e.onFocus, s = e.onBlur, c = e.onClick, l = e.onDragEnter, u = e.onDragOver, d = e.onDragLeave, f = e.onDrop, p = sf(e, Gd);
			return af(af(of({
				onKeyDown: ye(Fd(a, me)),
				onFocus: ye(Fd(o, he)),
				onBlur: ye(Fd(s, ge)),
				onClick: ve(Fd(c, _e)),
				onDragEnter: be(Fd(l, ce)),
				onDragOver: be(Fd(u, le)),
				onDragLeave: be(Fd(d, ue)),
				onDrop: be(Fd(f, fe)),
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
			var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.refKey, n = t === void 0 ? "ref" : t, r = e.onChange, i = e.onClick, a = sf(e, Kd);
			return af(af({}, of({
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
				onChange: ve(Fd(r, fe)),
				onClick: ve(Fd(i, Ce)),
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
	return af(af({}, M), {}, {
		isFocused: te && !r,
		getRootProps: Se,
		getInputProps: we,
		rootRef: A,
		inputRef: j,
		open: ve(pe)
	});
}
function pf(e, t) {
	/* istanbul ignore next */
	switch (t.type) {
		case "focus": return af(af({}, e), {}, { isFocused: !0 });
		case "blur": return af(af({}, e), {}, { isFocused: !1 });
		case "openDialog": return af(af({}, df), {}, { isFileDialogActive: !0 });
		case "closeDialog": return af(af({}, e), {}, { isFileDialogActive: !1 });
		case "setDraggedFiles": return af(af({}, e), {}, {
			isDragActive: t.isDragActive,
			isDragAccept: t.isDragAccept,
			isDragReject: t.isDragReject
		});
		case "setFiles": return af(af({}, e), {}, {
			acceptedFiles: t.acceptedFiles,
			fileRejections: t.fileRejections,
			isDragReject: t.isDragReject
		});
		case "setDragGlobal": return af(af({}, e), {}, { isDragGlobal: t.isDragGlobal });
		case "reset": return af({}, df);
		default: return e;
	}
}
function mf() {}
//#endregion
//#region node_modules/.pnpm/file-selector@0.10.0/node_modules/file-selector/dist/es5/file.js
var hf = new Map([
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
function gf(e, t) {
	var n = _f(e);
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
function _f(e) {
	var t = e.name;
	if (t && t.lastIndexOf(".") !== -1 && !e.type) {
		var n = t.split(".").pop().toLowerCase(), r = hf.get(n);
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
var vf = [".DS_Store", "Thumbs.db"];
function yf(e) {
	return ye(this, void 0, void 0, function() {
		return ue(this, function(t) {
			return Sf(e) && bf(e.dataTransfer) ? [2, Tf(e.dataTransfer, e.type)] : xf(e) ? [2, Cf(e)] : Array.isArray(e) && e.every(function(e) {
				return "getFile" in e && typeof e.getFile == "function";
			}) ? [2, wf(e)] : [2, []];
		});
	});
}
function bf(e) {
	return Sf(e);
}
function xf(e) {
	return Sf(e) && Sf(e.target);
}
function Sf(e) {
	return typeof e == "object" && !!e;
}
function Cf(e) {
	return Df(e.target.files).map(function(e) {
		return gf(e);
	});
}
function wf(e) {
	return ye(this, void 0, void 0, function() {
		var t;
		return ue(this, function(n) {
			switch (n.label) {
				case 0: return [4, Promise.all(e.map(function(e) {
					return e.getFile();
				}))];
				case 1: return t = n.sent(), [2, t.map(function(e) {
					return gf(e);
				})];
			}
		});
	});
}
function Tf(e, t) {
	return ye(this, void 0, void 0, function() {
		var n, r;
		return ue(this, function(i) {
			switch (i.label) {
				case 0: return e.items ? (n = Df(e.items).filter(function(e) {
					return e.kind === "file";
				}), t === "drop" ? [4, Promise.all(n.map(Of))] : [2, n]) : [3, 2];
				case 1: return r = i.sent(), [2, Ef(kf(r))];
				case 2: return [2, Ef(Df(e.files).map(function(e) {
					return gf(e);
				}))];
			}
		});
	});
}
function Ef(e) {
	return e.filter(function(e) {
		return vf.indexOf(e.name) === -1;
	});
}
function Df(e) {
	if (e === null) return [];
	for (var t = [], n = 0; n < e.length; n++) {
		var r = e[n];
		t.push(r);
	}
	return t;
}
function Of(e) {
	if (typeof e.webkitGetAsEntry != "function") return Af(e);
	var t = e.webkitGetAsEntry();
	return t && t.isDirectory ? Mf(t) : Af(e);
}
function kf(e) {
	return e.reduce(function(e, t) {
		return k(k([], ge(e), !1), ge(Array.isArray(t) ? kf(t) : [t]), !1);
	}, []);
}
function Af(e) {
	var t = e.getAsFile();
	if (!t) return Promise.reject(`${e} is not a File`);
	var n = gf(t);
	return Promise.resolve(n);
}
function jf(e) {
	return ye(this, void 0, void 0, function() {
		return ue(this, function(t) {
			return [2, e.isDirectory ? Mf(e) : Nf(e)];
		});
	});
}
function Mf(e) {
	var t = e.createReader();
	return new Promise(function(e, n) {
		var r = [];
		function i() {
			var a = this;
			t.readEntries(function(t) {
				return ye(a, void 0, void 0, function() {
					var a, o, s;
					return ue(this, function(c) {
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
							case 5: s = Promise.all(t.map(jf)), r.push(s), i(), c.label = 6;
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
function Nf(e) {
	return ye(this, void 0, void 0, function() {
		return ue(this, function(t) {
			return [2, new Promise(function(t, n) {
				e.file(function(n) {
					t(gf(n, e.fullPath));
				}, function(e) {
					n(e);
				});
			})];
		});
	});
}
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Dropzone/DragError.js
function Pf({ message: e }) {
	return /* @__PURE__ */ I.createElement("div", { className: "pgn__dropzone-error-wrapper" }, e);
}
Pf.propTypes = { message: R.default.oneOfType([R.default.string, R.default.element]).isRequired };
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Dropzone/GenericError.js
function Ff({ errorMsgs: e, ...t }) {
	return /* @__PURE__ */ I.createElement(Ir, {
		variant: "danger",
		icon: Jr,
		className: "pgn__dropzone-generic-alert",
		...t
	}, e.map((e) => /* @__PURE__ */ I.createElement("span", { key: e }, e)));
}
Ff.propTypes = { errorMsgs: R.default.arrayOf(R.default.string).isRequired };
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Dropzone/UploadProgress.js
function If({ percent: e, variant: t, name: n, onCancel: r }) {
	return t === "spinner" ? /* @__PURE__ */ I.createElement(Ta, {
		animation: "border",
		"aria-live": "polite",
		screenReaderText: `Uploading ${n}, ${e}% done.`,
		"data-testid": "upload-spinner"
	}) : /* @__PURE__ */ I.createElement("div", { className: "w-50" }, /* @__PURE__ */ I.createElement("p", { className: "text-muted" }, /* @__PURE__ */ I.createElement(E, {
		id: "pgn.Dropzone.UploadProgress.uploadLabel",
		defaultMessage: "Uploading {filename}.",
		description: "A text that is shown near a progress bar during file upload in Dropzone component.",
		values: { filename: n }
	})), /* @__PURE__ */ I.createElement("div", { className: "d-flex justify-content-between align-items-center w-100" }, /* @__PURE__ */ I.createElement(Au, {
		now: e,
		label: `${e}%`,
		variant: "success",
		className: "flex-grow-1",
		"data-testid": "upload-progress-bar"
	}), /* @__PURE__ */ I.createElement(O, {
		variant: "tertiary",
		className: "ml-3",
		onClick: r
	}, /* @__PURE__ */ I.createElement(E, {
		id: "pgn.Dropzone.UploadProgress.cancelLabel",
		defaultMessage: "Cancel",
		description: "Label of a cancel button that is shown during file upload in Dropzone component."
	}))));
}
If.propTypes = {
	variant: R.default.oneOf(["spinner", "bar"]).isRequired,
	percent: R.default.number.isRequired,
	name: R.default.string.isRequired,
	onCancel: R.default.func.isRequired
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Dropzone/utils.js
var Lf = (e) => Object.keys(e).length > 1 ? !0 : Object.keys(e).length === 0 ? !1 : Object.values(e)[0].length > 1, Rf = (e) => Object.entries(e).reduce((e, t) => {
	let [n, r] = t, i;
	return i = r.length > 0 ? `${r.join(", ").replaceAll(".", "").toUpperCase()}, ` : n.endsWith("/*") ? `${n.slice(0, -2)}, ` : `${n.split("/").pop().toUpperCase()}, `, e + i;
}, "").slice(0, -2), zf = (e) => {
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
}, Bf = w({
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
function Vf({ accept: e, minSize: t, maxSize: n }) {
	let r = _();
	return /* @__PURE__ */ I.createElement(I.Fragment, null, /* @__PURE__ */ I.createElement("div", { className: "pgn__dropzone__upload-icon-wrapper" }, /* @__PURE__ */ I.createElement(de, {
		src: qr,
		className: "pgn__dropzone__upload-icon"
	})), /* @__PURE__ */ I.createElement("p", null, /* @__PURE__ */ I.createElement(E, {
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
			let t = Rf(e), n = t.lastIndexOf(",");
			i = r.formatMessage(Bf.fileTypeRestriction, {
				count: n === -1 ? 1 : 2,
				firstPart: n === -1 ? t : t.slice(0, n),
				secondPart: n !== -1 && t.slice(n + 1)
			});
		}
		return t && n && Number.isFinite(n) ? a = r.formatMessage(Bf.fileSizeBetween, {
			sizeMin: zf(t),
			sizeMax: zf(n)
		}) : n && Number.isFinite(n) ? a = r.formatMessage(Bf.fileSizeMax, { sizeMax: zf(n) }) : t && (a = r.formatMessage(Bf.fileSizeMin, { sizeMin: zf(t) })), i && a ? `${i} (${a})` : i || a;
	})()));
}
Vf.propTypes = {
	accept: R.default.objectOf(R.default.arrayOf(R.default.string)),
	maxSize: R.default.number,
	minSize: R.default.number
}, Vf.defaultProps = {
	accept: void 0,
	maxSize: void 0,
	minSize: void 0
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Dropzone/index.js
function Hf({ className: e, accept: t, minSize: n, maxSize: r, validator: i, errorMessages: a, progressVariant: o, inputComponent: s, onProcessUpload: c, onUploadProgress: l, onUploadCancel: u, ...d }) {
	let [f, p] = (0, I.useState)(!1), [m, h] = (0, I.useState)([]), [g, v] = (0, I.useState)(0), [y, b] = (0, I.useState)(void 0), [x, S] = (0, I.useState)(void 0), C = _(), { uploadError: w, invalidSizeLess: T, invalidSizeMore: E, invalidType: D, multipleDragged: O } = a, k = async (e) => {
		m && h([]);
		let t = await yf(e);
		t && t.length > 1 && p(!0);
	}, A = () => {
		f && p(!1);
	}, j = (e) => {
		f ? p(!1) : h(e[0].errors.map((e) => {
			switch (e.code) {
				case yd.FileTooLarge: return E || C.formatMessage(Bf.invalidSizeMore, { size: zf(r) });
				case yd.FileTooSmall: return T || C.formatMessage(Bf.invalidSizeLess, { size: zf(n) });
				case yd.FileInvalidType: return D || C.formatMessage(Bf.invalidType, {
					count: Lf(t) ? 2 : 1,
					typeString: Rf(t)
				});
				default: return C.formatMessage(Bf.unexpectedValidationError);
			}
		}));
	}, ee = (e) => {
		let t = Math.round(e.loaded * 100 / e.total);
		v(t), l(t, e);
	}, M = (e) => {
		e.code !== "ERR_CANCELED" && (v(0), h([w || C.formatMessage(Bf.uploadError)]));
	}, N = (e) => {
		let t = new AbortController();
		S(t), c({
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
		n.append("file", t), b(t.name), N(n);
	}, P = () => {
		x.abort(), v(0), u();
	}, { getRootProps: ne, getInputProps: re, isDragActive: ie, isDragReject: ae } = ff({
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
	}), oe = () => f ? /* @__PURE__ */ I.createElement(Pf, { message: O || C.formatMessage(Bf.multipleDragged) }) : m.length > 0 ? /* @__PURE__ */ I.createElement(I.Fragment, null, /* @__PURE__ */ I.createElement(Ff, { errorMsgs: m }), s || /* @__PURE__ */ I.createElement(Vf, {
		minSize: n,
		maxSize: r,
		accept: t
	})) : g && g !== 100 ? /* @__PURE__ */ I.createElement(If, {
		variant: o,
		percent: g,
		name: y,
		onCancel: P
	}) : s || /* @__PURE__ */ I.createElement(Vf, {
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
Hf.defaultProps = {
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
}, Hf.propTypes = {
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
function Uf() {
	return (Uf = Object.assign || function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}).apply(this, arguments);
}
function Wf(e, t) {
	if (e == null) return {};
	var n, r, i = {}, a = Object.keys(e);
	for (r = 0; r < a.length; r++) t.indexOf(n = a[r]) >= 0 || (i[n] = e[n]);
	return i;
}
function Gf(e) {
	var t = (0, I.useRef)(e), n = (0, I.useRef)(function(e) {
		t.current && t.current(e);
	});
	return t.current = e, n.current;
}
var Kf = function(e, t, n) {
	return t === void 0 && (t = 0), n === void 0 && (n = 1), e > n ? n : e < t ? t : e;
}, qf = function(e) {
	return "touches" in e;
}, Jf = function(e) {
	return e && e.ownerDocument.defaultView || self;
}, Yf = function(e, t, n) {
	var r = e.getBoundingClientRect(), i = qf(t) ? function(e, t) {
		for (var n = 0; n < e.length; n++) if (e[n].identifier === t) return e[n];
		return e[0];
	}(t.touches, n) : t;
	return {
		left: Kf((i.pageX - (r.left + Jf(e).pageXOffset)) / r.width),
		top: Kf((i.pageY - (r.top + Jf(e).pageYOffset)) / r.height)
	};
}, Xf = function(e) {
	!qf(e) && e.preventDefault();
}, Zf = I.memo(function(e) {
	var t = e.onMove, n = e.onKey, r = Wf(e, ["onMove", "onKey"]), i = (0, I.useRef)(null), a = Gf(t), o = Gf(n), s = (0, I.useRef)(null), c = (0, I.useRef)(!1), l = (0, I.useMemo)(function() {
		var e = function(e) {
			Xf(e), (qf(e) ? e.touches.length > 0 : e.buttons > 0) && i.current ? a(Yf(i.current, e, s.current)) : n(!1);
		}, t = function() {
			return n(!1);
		};
		function n(n) {
			var r = c.current, a = Jf(i.current), o = n ? a.addEventListener : a.removeEventListener;
			o(r ? "touchmove" : "mousemove", e), o(r ? "touchend" : "mouseup", t);
		}
		return [
			function(e) {
				var t = e.nativeEvent, r = i.current;
				if (r && (Xf(t), !function(e, t) {
					return t && !qf(e);
				}(t, c.current) && r)) {
					if (qf(t)) {
						c.current = !0;
						var o = t.changedTouches || [];
						o.length && (s.current = o[0].identifier);
					}
					r.focus(), a(Yf(r, t, s.current)), n(!0);
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
	}, [f]), I.createElement("div", Uf({}, r, {
		onTouchStart: u,
		onMouseDown: u,
		className: "react-colorful__interactive",
		ref: i,
		onKeyDown: d,
		tabIndex: 0,
		role: "slider"
	}));
}), Qf = function(e) {
	return e.filter(Boolean).join(" ");
}, $f = function(e) {
	var t = e.color, n = e.left, r = e.top, i = r === void 0 ? .5 : r, a = Qf(["react-colorful__pointer", e.className]);
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
}, ep = function(e, t, n) {
	return t === void 0 && (t = 0), n === void 0 && (n = 10 ** t), Math.round(n * e) / n;
};
360 / (2 * Math.PI);
var tp = function(e) {
	return lp(np(e));
}, np = function(e) {
	return e[0] === "#" && (e = e.substring(1)), e.length < 6 ? {
		r: parseInt(e[0] + e[0], 16),
		g: parseInt(e[1] + e[1], 16),
		b: parseInt(e[2] + e[2], 16),
		a: e.length === 4 ? ep(parseInt(e[3] + e[3], 16) / 255, 2) : 1
	} : {
		r: parseInt(e.substring(0, 2), 16),
		g: parseInt(e.substring(2, 4), 16),
		b: parseInt(e.substring(4, 6), 16),
		a: e.length === 8 ? ep(parseInt(e.substring(6, 8), 16) / 255, 2) : 1
	};
}, rp = function(e) {
	return cp(op(e));
}, ip = function(e) {
	var t = e.s, n = e.v, r = e.a, i = (200 - t) * n / 100;
	return {
		h: ep(e.h),
		s: ep(i > 0 && i < 200 ? t * n / 100 / (i <= 100 ? i : 200 - i) * 100 : 0),
		l: ep(i / 2),
		a: ep(r, 2)
	};
}, ap = function(e) {
	var t = ip(e);
	return "hsl(" + t.h + ", " + t.s + "%, " + t.l + "%)";
}, op = function(e) {
	var t = e.h, n = e.s, r = e.v, i = e.a;
	t = t / 360 * 6, n /= 100, r /= 100;
	var a = Math.floor(t), o = r * (1 - n), s = r * (1 - (t - a) * n), c = r * (1 - (1 - t + a) * n), l = a % 6;
	return {
		r: ep(255 * [
			r,
			s,
			o,
			o,
			c,
			r
		][l]),
		g: ep(255 * [
			c,
			r,
			r,
			s,
			o,
			o
		][l]),
		b: ep(255 * [
			o,
			o,
			c,
			r,
			r,
			s
		][l]),
		a: ep(i, 2)
	};
}, sp = function(e) {
	var t = e.toString(16);
	return t.length < 2 ? "0" + t : t;
}, cp = function(e) {
	var t = e.r, n = e.g, r = e.b, i = e.a, a = i < 1 ? sp(ep(255 * i)) : "";
	return "#" + sp(t) + sp(n) + sp(r) + a;
}, lp = function(e) {
	var t = e.r, n = e.g, r = e.b, i = e.a, a = Math.max(t, n, r), o = a - Math.min(t, n, r), s = o ? a === t ? (n - r) / o : a === n ? 2 + (r - t) / o : 4 + (t - n) / o : 0;
	return {
		h: ep(60 * (s < 0 ? s + 6 : s)),
		s: ep(a ? o / a * 100 : 0),
		v: ep(a / 255 * 100),
		a: i
	};
}, up = I.memo(function(e) {
	var t = e.hue, n = e.onChange, r = Qf(["react-colorful__hue", e.className]);
	return I.createElement("div", { className: r }, I.createElement(Zf, {
		onMove: function(e) {
			n({ h: 360 * e.left });
		},
		onKey: function(e) {
			n({ h: Kf(t + 360 * e.left, 0, 360) });
		},
		"aria-label": "Hue",
		"aria-valuenow": ep(t),
		"aria-valuemax": "360",
		"aria-valuemin": "0"
	}, I.createElement($f, {
		className: "react-colorful__hue-pointer",
		left: t / 360,
		color: ap({
			h: t,
			s: 100,
			v: 100,
			a: 1
		})
	})));
}), dp = I.memo(function(e) {
	var t = e.hsva, n = e.onChange, r = { backgroundColor: ap({
		h: t.h,
		s: 100,
		v: 100,
		a: 1
	}) };
	return I.createElement("div", {
		className: "react-colorful__saturation",
		style: r
	}, I.createElement(Zf, {
		onMove: function(e) {
			n({
				s: 100 * e.left,
				v: 100 - 100 * e.top
			});
		},
		onKey: function(e) {
			n({
				s: Kf(t.s + 100 * e.left, 0, 100),
				v: Kf(t.v - 100 * e.top, 0, 100)
			});
		},
		"aria-label": "Color",
		"aria-valuetext": "Saturation " + ep(t.s) + "%, Brightness " + ep(t.v) + "%"
	}, I.createElement($f, {
		className: "react-colorful__saturation-pointer",
		top: 1 - t.v / 100,
		left: t.s / 100,
		color: ap(t)
	})));
}), fp = function(e, t) {
	if (e === t) return !0;
	for (var n in e) if (e[n] !== t[n]) return !1;
	return !0;
}, pp = function(e, t) {
	return e.toLowerCase() === t.toLowerCase() || fp(np(e), np(t));
};
function mp(e, t, n) {
	var r = Gf(n), i = (0, I.useState)(function() {
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
		fp(a, s.current.hsva) || e.equal(t = e.fromHsva(a), s.current.color) || (s.current = {
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
var hp, gp = typeof window < "u" ? I.useLayoutEffect : I.useEffect, _p = function() {
	return hp || (typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : void 0);
}, vp = /* @__PURE__ */ new Map(), yp = function(e) {
	gp(function() {
		var t = e.current ? e.current.ownerDocument : document;
		if (t !== void 0 && !vp.has(t)) {
			var n = t.createElement("style");
			n.innerHTML = ".react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:\"\";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill-opacity=\".05\"><path d=\"M8 0h8v8H8zM0 8h8v8H0z\"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}", vp.set(t, n);
			var r = _p();
			r && n.setAttribute("nonce", r), t.head.appendChild(n);
		}
	}, []);
}, bp = function(e) {
	var t = e.className, n = e.colorModel, r = e.color, i = r === void 0 ? n.defaultColor : r, a = e.onChange, o = Wf(e, [
		"className",
		"colorModel",
		"color",
		"onChange"
	]), s = (0, I.useRef)(null);
	yp(s);
	var c = mp(n, i, a), l = c[0], u = c[1], d = Qf(["react-colorful", t]);
	return I.createElement("div", Uf({}, o, {
		ref: s,
		className: d
	}), I.createElement(dp, {
		hsva: l,
		onChange: u
	}), I.createElement(up, {
		hue: l.h,
		onChange: u,
		className: "react-colorful__last-control"
	}));
}, xp = {
	defaultColor: "000",
	toHsva: tp,
	fromHsva: function(e) {
		return rp({
			h: e.h,
			s: e.s,
			v: e.v,
			a: 1
		});
	},
	equal: pp
}, Sp = function(e) {
	return I.createElement(bp, Uf({}, e, { colorModel: xp }));
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/ColorPicker/index.js
function Cp({ color: e, setColor: t, className: n, size: r }) {
	let [i, a, o] = tu(!1), [s, c] = I.useState(null), l = (e) => /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(e), u = (e) => e.startsWith("#") ? e.slice(0, 7) : `#${e}`.slice(0, 7), [d, f] = I.useState(() => e === "" || l(u(e))), [p, m] = I.useState(() => e === "" ? "" : u(e)), [h, g] = I.useState(() => {
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
	}))), /* @__PURE__ */ I.createElement(mu, {
		positionRef: s,
		isOpen: i,
		style: { background: "black" },
		onClose: o
	}, /* @__PURE__ */ I.createElement("div", {
		className: "pgn__color-modal rounded shadow",
		style: { textAlign: "start" }
	}, /* @__PURE__ */ I.createElement(Sp, {
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
Cp.defaultProps = {
	color: "",
	className: void 0,
	size: "md"
}, Cp.propTypes = {
	color: R.default.string,
	setColor: R.default.func.isRequired,
	className: R.default.string,
	size: R.default.oneOf(["sm", "md"])
};
//#endregion
//#region src/lib/context.ts
var wp = (0, I.createContext)(null), Tp = () => (0, I.useContext)(wp), Ep = function(e) {
	return Dp(e) && !Op(e);
};
function Dp(e) {
	return !!e && typeof e == "object";
}
function Op(e) {
	var t = Object.prototype.toString.call(e);
	return t === "[object RegExp]" || t === "[object Date]" || Ap(e);
}
var kp = typeof Symbol == "function" && Symbol.for ? Symbol.for("react.element") : 60103;
function Ap(e) {
	return e.$$typeof === kp;
}
function jp(e) {
	return Array.isArray(e) ? [] : {};
}
function Mp(e, t) {
	return t.clone !== !1 && t.isMergeableObject(e) ? Fp(jp(e), e, t) : e;
}
function Np(e, t, n) {
	return e.concat(t).map(function(e) {
		return Mp(e, n);
	});
}
function Pp(e, t, n) {
	var r = {};
	return n.isMergeableObject(e) && Object.keys(e).forEach(function(t) {
		r[t] = Mp(e[t], n);
	}), Object.keys(t).forEach(function(i) {
		!n.isMergeableObject(t[i]) || !e[i] ? r[i] = Mp(t[i], n) : r[i] = Fp(e[i], t[i], n);
	}), r;
}
function Fp(e, t, n) {
	n ||= {}, n.arrayMerge = n.arrayMerge || Np, n.isMergeableObject = n.isMergeableObject || Ep;
	var r = Array.isArray(t);
	return r === Array.isArray(e) ? r ? n.arrayMerge(e, t, n) : Pp(e, t, n) : Mp(t, n);
}
Fp.all = function(e, t) {
	if (!Array.isArray(e)) throw Error("first argument should be an array");
	return e.reduce(function(e, n) {
		return Fp(e, n, t);
	}, {});
};
var Ip = Fp, Lp = typeof globalThis == "object" && globalThis && globalThis.Object === Object && globalThis, Rp = typeof self == "object" && self && self.Object === Object && self, zp = Lp || Rp || Function("return this")(), Bp = zp.Symbol, Vp = Object.prototype, Hp = Vp.hasOwnProperty, Up = Vp.toString, Wp = Bp ? Bp.toStringTag : void 0;
function Gp(e) {
	var t = Hp.call(e, Wp), n = e[Wp];
	try {
		e[Wp] = void 0;
		var r = !0;
	} catch {}
	var i = Up.call(e);
	return r && (t ? e[Wp] = n : delete e[Wp]), i;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_objectToString.js
var Kp = Object.prototype.toString;
function qp(e) {
	return Kp.call(e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseGetTag.js
var Jp = "[object Null]", Yp = "[object Undefined]", Xp = Bp ? Bp.toStringTag : void 0;
function Zp(e) {
	return e == null ? e === void 0 ? Yp : Jp : Xp && Xp in Object(e) ? Gp(e) : qp(e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_overArg.js
function Qp(e, t) {
	return function(n) {
		return e(t(n));
	};
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_getPrototype.js
var $p = Qp(Object.getPrototypeOf, Object);
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isObjectLike.js
function em(e) {
	return typeof e == "object" && !!e;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isPlainObject.js
var tm = "[object Object]", nm = Function.prototype, rm = Object.prototype, im = nm.toString, am = rm.hasOwnProperty, om = im.call(Object);
function sm(e) {
	if (!em(e) || Zp(e) != tm) return !1;
	var t = $p(e);
	if (t === null) return !0;
	var n = am.call(t, "constructor") && t.constructor;
	return typeof n == "function" && n instanceof n && im.call(n) == om;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_listCacheClear.js
function cm() {
	this.__data__ = [], this.size = 0;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/eq.js
function lm(e, t) {
	return e === t || e !== e && t !== t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_assocIndexOf.js
function um(e, t) {
	for (var n = e.length; n--;) if (lm(e[n][0], t)) return n;
	return -1;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_listCacheDelete.js
var dm = Array.prototype.splice;
function fm(e) {
	var t = this.__data__, n = um(t, e);
	return n < 0 ? !1 : (n == t.length - 1 ? t.pop() : dm.call(t, n, 1), --this.size, !0);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_listCacheGet.js
function pm(e) {
	var t = this.__data__, n = um(t, e);
	return n < 0 ? void 0 : t[n][1];
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_listCacheHas.js
function mm(e) {
	return um(this.__data__, e) > -1;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_listCacheSet.js
function hm(e, t) {
	var n = this.__data__, r = um(n, e);
	return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_ListCache.js
function gm(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.clear(); ++t < n;) {
		var r = e[t];
		this.set(r[0], r[1]);
	}
}
gm.prototype.clear = cm, gm.prototype.delete = fm, gm.prototype.get = pm, gm.prototype.has = mm, gm.prototype.set = hm;
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_stackClear.js
function _m() {
	this.__data__ = new gm(), this.size = 0;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_stackDelete.js
function vm(e) {
	var t = this.__data__, n = t.delete(e);
	return this.size = t.size, n;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_stackGet.js
function ym(e) {
	return this.__data__.get(e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_stackHas.js
function bm(e) {
	return this.__data__.has(e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isObject.js
function xm(e) {
	var t = typeof e;
	return e != null && (t == "object" || t == "function");
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isFunction.js
var Sm = "[object AsyncFunction]", Cm = "[object Function]", wm = "[object GeneratorFunction]", Tm = "[object Proxy]";
function Em(e) {
	if (!xm(e)) return !1;
	var t = Zp(e);
	return t == Cm || t == wm || t == Sm || t == Tm;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_coreJsData.js
var Dm = zp["__core-js_shared__"], Om = function() {
	var e = /[^.]+$/.exec(Dm && Dm.keys && Dm.keys.IE_PROTO || "");
	return e ? "Symbol(src)_1." + e : "";
}();
function km(e) {
	return !!Om && Om in e;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_toSource.js
var Am = Function.prototype.toString;
function jm(e) {
	if (e != null) {
		try {
			return Am.call(e);
		} catch {}
		try {
			return e + "";
		} catch {}
	}
	return "";
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseIsNative.js
var Mm = /[\\^$.*+?()[\]{}|]/g, Nm = /^\[object .+?Constructor\]$/, Pm = Function.prototype, Fm = Object.prototype, Im = Pm.toString, Lm = Fm.hasOwnProperty, Rm = RegExp("^" + Im.call(Lm).replace(Mm, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function zm(e) {
	return !xm(e) || km(e) ? !1 : (Em(e) ? Rm : Nm).test(jm(e));
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_getValue.js
function Bm(e, t) {
	return e?.[t];
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_getNative.js
function Vm(e, t) {
	var n = Bm(e, t);
	return zm(n) ? n : void 0;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_Map.js
var Hm = Vm(zp, "Map"), Um = Vm(Object, "create");
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_hashClear.js
function Wm() {
	this.__data__ = Um ? Um(null) : {}, this.size = 0;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_hashDelete.js
function Gm(e) {
	var t = this.has(e) && delete this.__data__[e];
	return this.size -= t ? 1 : 0, t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_hashGet.js
var Km = "__lodash_hash_undefined__", qm = Object.prototype.hasOwnProperty;
function Jm(e) {
	var t = this.__data__;
	if (Um) {
		var n = t[e];
		return n === Km ? void 0 : n;
	}
	return qm.call(t, e) ? t[e] : void 0;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_hashHas.js
var Ym = Object.prototype.hasOwnProperty;
function Xm(e) {
	var t = this.__data__;
	return Um ? t[e] !== void 0 : Ym.call(t, e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_hashSet.js
var Zm = "__lodash_hash_undefined__";
function Qm(e, t) {
	var n = this.__data__;
	return this.size += this.has(e) ? 0 : 1, n[e] = Um && t === void 0 ? Zm : t, this;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_Hash.js
function $m(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.clear(); ++t < n;) {
		var r = e[t];
		this.set(r[0], r[1]);
	}
}
$m.prototype.clear = Wm, $m.prototype.delete = Gm, $m.prototype.get = Jm, $m.prototype.has = Xm, $m.prototype.set = Qm;
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_mapCacheClear.js
function eh() {
	this.size = 0, this.__data__ = {
		hash: new $m(),
		map: new (Hm || gm)(),
		string: new $m()
	};
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_isKeyable.js
function th(e) {
	var t = typeof e;
	return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_getMapData.js
function nh(e, t) {
	var n = e.__data__;
	return th(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_mapCacheDelete.js
function rh(e) {
	var t = nh(this, e).delete(e);
	return this.size -= t ? 1 : 0, t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_mapCacheGet.js
function ih(e) {
	return nh(this, e).get(e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_mapCacheHas.js
function ah(e) {
	return nh(this, e).has(e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_mapCacheSet.js
function oh(e, t) {
	var n = nh(this, e), r = n.size;
	return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_MapCache.js
function sh(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.clear(); ++t < n;) {
		var r = e[t];
		this.set(r[0], r[1]);
	}
}
sh.prototype.clear = eh, sh.prototype.delete = rh, sh.prototype.get = ih, sh.prototype.has = ah, sh.prototype.set = oh;
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_stackSet.js
var ch = 200;
function lh(e, t) {
	var n = this.__data__;
	if (n instanceof gm) {
		var r = n.__data__;
		if (!Hm || r.length < ch - 1) return r.push([e, t]), this.size = ++n.size, this;
		n = this.__data__ = new sh(r);
	}
	return n.set(e, t), this.size = n.size, this;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_Stack.js
function uh(e) {
	this.size = (this.__data__ = new gm(e)).size;
}
uh.prototype.clear = _m, uh.prototype.delete = vm, uh.prototype.get = ym, uh.prototype.has = bm, uh.prototype.set = lh;
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_arrayEach.js
function dh(e, t) {
	for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1;);
	return e;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_defineProperty.js
var fh = function() {
	try {
		var e = Vm(Object, "defineProperty");
		return e({}, "", {}), e;
	} catch {}
}();
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseAssignValue.js
function ph(e, t, n) {
	t == "__proto__" && fh ? fh(e, t, {
		configurable: !0,
		enumerable: !0,
		value: n,
		writable: !0
	}) : e[t] = n;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_assignValue.js
var mh = Object.prototype.hasOwnProperty;
function hh(e, t, n) {
	var r = e[t];
	(!(mh.call(e, t) && lm(r, n)) || n === void 0 && !(t in e)) && ph(e, t, n);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_copyObject.js
function gh(e, t, n, r) {
	var i = !n;
	n ||= {};
	for (var a = -1, o = t.length; ++a < o;) {
		var s = t[a], c = r ? r(n[s], e[s], s, n, e) : void 0;
		c === void 0 && (c = e[s]), i ? ph(n, s, c) : hh(n, s, c);
	}
	return n;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseTimes.js
function _h(e, t) {
	for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
	return r;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseIsArguments.js
var vh = "[object Arguments]";
function yh(e) {
	return em(e) && Zp(e) == vh;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isArguments.js
var bh = Object.prototype, xh = bh.hasOwnProperty, Sh = bh.propertyIsEnumerable, Ch = yh(function() {
	return arguments;
}()) ? yh : function(e) {
	return em(e) && xh.call(e, "callee") && !Sh.call(e, "callee");
}, wh = Array.isArray;
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/stubFalse.js
function Th() {
	return !1;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isBuffer.js
var Eh = typeof exports == "object" && exports && !exports.nodeType && exports, Dh = Eh && typeof module == "object" && module && !module.nodeType && module, Oh = Dh && Dh.exports === Eh ? zp.Buffer : void 0, kh = (Oh ? Oh.isBuffer : void 0) || Th, Ah = 9007199254740991, jh = /^(?:0|[1-9]\d*)$/;
function Mh(e, t) {
	var n = typeof e;
	return t ??= Ah, !!t && (n == "number" || n != "symbol" && jh.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isLength.js
var Nh = 9007199254740991;
function Ph(e) {
	return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Nh;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseIsTypedArray.js
var Fh = "[object Arguments]", Ih = "[object Array]", Lh = "[object Boolean]", Rh = "[object Date]", zh = "[object Error]", Bh = "[object Function]", Vh = "[object Map]", Hh = "[object Number]", Uh = "[object Object]", Wh = "[object RegExp]", Gh = "[object Set]", Kh = "[object String]", qh = "[object WeakMap]", Jh = "[object ArrayBuffer]", Yh = "[object DataView]", Xh = "[object Float32Array]", Zh = "[object Float64Array]", Qh = "[object Int8Array]", $h = "[object Int16Array]", eg = "[object Int32Array]", tg = "[object Uint8Array]", ng = "[object Uint8ClampedArray]", rg = "[object Uint16Array]", ig = "[object Uint32Array]", ag = {};
ag[Xh] = ag[Zh] = ag[Qh] = ag[$h] = ag[eg] = ag[tg] = ag[ng] = ag[rg] = ag[ig] = !0, ag[Fh] = ag[Ih] = ag[Jh] = ag[Lh] = ag[Yh] = ag[Rh] = ag[zh] = ag[Bh] = ag[Vh] = ag[Hh] = ag[Uh] = ag[Wh] = ag[Gh] = ag[Kh] = ag[qh] = !1;
function og(e) {
	return em(e) && Ph(e.length) && !!ag[Zp(e)];
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseUnary.js
function sg(e) {
	return function(t) {
		return e(t);
	};
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_nodeUtil.js
var cg = typeof exports == "object" && exports && !exports.nodeType && exports, lg = cg && typeof module == "object" && module && !module.nodeType && module, ug = lg && lg.exports === cg && Lp.process, dg = function() {
	try {
		return lg && lg.require && lg.require("util").types || ug && ug.binding && ug.binding("util");
	} catch {}
}(), fg = dg && dg.isTypedArray, pg = fg ? sg(fg) : og, mg = Object.prototype.hasOwnProperty;
function hg(e, t) {
	var n = wh(e), r = !n && Ch(e), i = !n && !r && kh(e), a = !n && !r && !i && pg(e), o = n || r || i || a, s = o ? _h(e.length, String) : [], c = s.length;
	for (var l in e) (t || mg.call(e, l)) && !(o && (l == "length" || i && (l == "offset" || l == "parent") || a && (l == "buffer" || l == "byteLength" || l == "byteOffset") || Mh(l, c))) && s.push(l);
	return s;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_isPrototype.js
var gg = Object.prototype;
function _g(e) {
	var t = e && e.constructor;
	return e === (typeof t == "function" && t.prototype || gg);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_nativeKeys.js
var vg = Qp(Object.keys, Object), yg = Object.prototype.hasOwnProperty;
function bg(e) {
	if (!_g(e)) return vg(e);
	var t = [];
	for (var n in Object(e)) yg.call(e, n) && n != "constructor" && t.push(n);
	return t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isArrayLike.js
function xg(e) {
	return e != null && Ph(e.length) && !Em(e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/keys.js
function Sg(e) {
	return xg(e) ? hg(e) : bg(e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseAssign.js
function Cg(e, t) {
	return e && gh(t, Sg(t), e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_nativeKeysIn.js
function wg(e) {
	var t = [];
	if (e != null) for (var n in Object(e)) t.push(n);
	return t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseKeysIn.js
var Tg = Object.prototype.hasOwnProperty;
function Eg(e) {
	if (!xm(e)) return wg(e);
	var t = _g(e), n = [];
	for (var r in e) r == "constructor" && (t || !Tg.call(e, r)) || n.push(r);
	return n;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/keysIn.js
function Dg(e) {
	return xg(e) ? hg(e, !0) : Eg(e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseAssignIn.js
function Og(e, t) {
	return e && gh(t, Dg(t), e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_cloneBuffer.js
var kg = typeof exports == "object" && exports && !exports.nodeType && exports, Ag = kg && typeof module == "object" && module && !module.nodeType && module, jg = Ag && Ag.exports === kg ? zp.Buffer : void 0, Mg = jg ? jg.allocUnsafe : void 0;
function Ng(e, t) {
	if (t) return e.slice();
	var n = e.length, r = Mg ? Mg(n) : new e.constructor(n);
	return e.copy(r), r;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_copyArray.js
function Pg(e, t) {
	var n = -1, r = e.length;
	for (t ||= Array(r); ++n < r;) t[n] = e[n];
	return t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_arrayFilter.js
function Fg(e, t) {
	for (var n = -1, r = e == null ? 0 : e.length, i = 0, a = []; ++n < r;) {
		var o = e[n];
		t(o, n, e) && (a[i++] = o);
	}
	return a;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/stubArray.js
function Ig() {
	return [];
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_getSymbols.js
var Lg = Object.prototype.propertyIsEnumerable, Rg = Object.getOwnPropertySymbols, zg = Rg ? function(e) {
	return e == null ? [] : (e = Object(e), Fg(Rg(e), function(t) {
		return Lg.call(e, t);
	}));
} : Ig;
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_copySymbols.js
function Bg(e, t) {
	return gh(e, zg(e), t);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_arrayPush.js
function Vg(e, t) {
	for (var n = -1, r = t.length, i = e.length; ++n < r;) e[i + n] = t[n];
	return e;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_getSymbolsIn.js
var Hg = Object.getOwnPropertySymbols ? function(e) {
	for (var t = []; e;) Vg(t, zg(e)), e = $p(e);
	return t;
} : Ig;
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_copySymbolsIn.js
function Ug(e, t) {
	return gh(e, Hg(e), t);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseGetAllKeys.js
function Wg(e, t, n) {
	var r = t(e);
	return wh(e) ? r : Vg(r, n(e));
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_getAllKeys.js
function Gg(e) {
	return Wg(e, Sg, zg);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_getAllKeysIn.js
function Kg(e) {
	return Wg(e, Dg, Hg);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_DataView.js
var qg = Vm(zp, "DataView"), Jg = Vm(zp, "Promise"), Yg = Vm(zp, "Set"), Xg = Vm(zp, "WeakMap"), Zg = "[object Map]", Qg = "[object Object]", $g = "[object Promise]", e_ = "[object Set]", t_ = "[object WeakMap]", n_ = "[object DataView]", r_ = jm(qg), i_ = jm(Hm), a_ = jm(Jg), o_ = jm(Yg), s_ = jm(Xg), c_ = Zp;
(qg && c_(new qg(/* @__PURE__ */ new ArrayBuffer(1))) != n_ || Hm && c_(new Hm()) != Zg || Jg && c_(Jg.resolve()) != $g || Yg && c_(new Yg()) != e_ || Xg && c_(new Xg()) != t_) && (c_ = function(e) {
	var t = Zp(e), n = t == Qg ? e.constructor : void 0, r = n ? jm(n) : "";
	if (r) switch (r) {
		case r_: return n_;
		case i_: return Zg;
		case a_: return $g;
		case o_: return e_;
		case s_: return t_;
	}
	return t;
});
var l_ = c_, u_ = Object.prototype.hasOwnProperty;
function d_(e) {
	var t = e.length, n = new e.constructor(t);
	return t && typeof e[0] == "string" && u_.call(e, "index") && (n.index = e.index, n.input = e.input), n;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_Uint8Array.js
var f_ = zp.Uint8Array;
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_cloneArrayBuffer.js
function p_(e) {
	var t = new e.constructor(e.byteLength);
	return new f_(t).set(new f_(e)), t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_cloneDataView.js
function m_(e, t) {
	var n = t ? p_(e.buffer) : e.buffer;
	return new e.constructor(n, e.byteOffset, e.byteLength);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_cloneRegExp.js
var h_ = /\w*$/;
function g_(e) {
	var t = new e.constructor(e.source, h_.exec(e));
	return t.lastIndex = e.lastIndex, t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_cloneSymbol.js
var __ = Bp ? Bp.prototype : void 0, v_ = __ ? __.valueOf : void 0;
function y_(e) {
	return v_ ? Object(v_.call(e)) : {};
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_cloneTypedArray.js
function b_(e, t) {
	var n = t ? p_(e.buffer) : e.buffer;
	return new e.constructor(n, e.byteOffset, e.length);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_initCloneByTag.js
var x_ = "[object Boolean]", S_ = "[object Date]", C_ = "[object Map]", w_ = "[object Number]", T_ = "[object RegExp]", E_ = "[object Set]", D_ = "[object String]", O_ = "[object Symbol]", k_ = "[object ArrayBuffer]", A_ = "[object DataView]", j_ = "[object Float32Array]", M_ = "[object Float64Array]", N_ = "[object Int8Array]", P_ = "[object Int16Array]", F_ = "[object Int32Array]", I_ = "[object Uint8Array]", L_ = "[object Uint8ClampedArray]", R_ = "[object Uint16Array]", z_ = "[object Uint32Array]";
function B_(e, t, n) {
	var r = e.constructor;
	switch (t) {
		case k_: return p_(e);
		case x_:
		case S_: return new r(+e);
		case A_: return m_(e, n);
		case j_:
		case M_:
		case N_:
		case P_:
		case F_:
		case I_:
		case L_:
		case R_:
		case z_: return b_(e, n);
		case C_: return new r();
		case w_:
		case D_: return new r(e);
		case T_: return g_(e);
		case E_: return new r();
		case O_: return y_(e);
	}
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseCreate.js
var V_ = Object.create, H_ = function() {
	function e() {}
	return function(t) {
		if (!xm(t)) return {};
		if (V_) return V_(t);
		e.prototype = t;
		var n = new e();
		return e.prototype = void 0, n;
	};
}();
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_initCloneObject.js
function U_(e) {
	return typeof e.constructor == "function" && !_g(e) ? H_($p(e)) : {};
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseIsMap.js
var W_ = "[object Map]";
function G_(e) {
	return em(e) && l_(e) == W_;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isMap.js
var K_ = dg && dg.isMap, q_ = K_ ? sg(K_) : G_, J_ = "[object Set]";
function Y_(e) {
	return em(e) && l_(e) == J_;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isSet.js
var X_ = dg && dg.isSet, Z_ = X_ ? sg(X_) : Y_, Q_ = 1, $_ = 2, ev = 4, tv = "[object Arguments]", nv = "[object Array]", rv = "[object Boolean]", iv = "[object Date]", av = "[object Error]", ov = "[object Function]", sv = "[object GeneratorFunction]", cv = "[object Map]", lv = "[object Number]", uv = "[object Object]", dv = "[object RegExp]", fv = "[object Set]", pv = "[object String]", mv = "[object Symbol]", hv = "[object WeakMap]", gv = "[object ArrayBuffer]", _v = "[object DataView]", vv = "[object Float32Array]", yv = "[object Float64Array]", bv = "[object Int8Array]", xv = "[object Int16Array]", Sv = "[object Int32Array]", Cv = "[object Uint8Array]", wv = "[object Uint8ClampedArray]", Tv = "[object Uint16Array]", Ev = "[object Uint32Array]", U = {};
U[tv] = U[nv] = U[gv] = U[_v] = U[rv] = U[iv] = U[vv] = U[yv] = U[bv] = U[xv] = U[Sv] = U[cv] = U[lv] = U[uv] = U[dv] = U[fv] = U[pv] = U[mv] = U[Cv] = U[wv] = U[Tv] = U[Ev] = !0, U[av] = U[ov] = U[hv] = !1;
function Dv(e, t, n, r, i, a) {
	var o, s = t & Q_, c = t & $_, l = t & ev;
	if (n && (o = i ? n(e, r, i, a) : n(e)), o !== void 0) return o;
	if (!xm(e)) return e;
	var u = wh(e);
	if (u) {
		if (o = d_(e), !s) return Pg(e, o);
	} else {
		var d = l_(e), f = d == ov || d == sv;
		if (kh(e)) return Ng(e, s);
		if (d == uv || d == tv || f && !i) {
			if (o = c || f ? {} : U_(e), !s) return c ? Ug(e, Og(o, e)) : Bg(e, Cg(o, e));
		} else {
			if (!U[d]) return i ? e : {};
			o = B_(e, d, s);
		}
	}
	a ||= new uh();
	var p = a.get(e);
	if (p) return p;
	a.set(e, o), Z_(e) ? e.forEach(function(r) {
		o.add(Dv(r, t, n, r, e, a));
	}) : q_(e) && e.forEach(function(r, i) {
		o.set(i, Dv(r, t, n, i, e, a));
	});
	var m = u ? void 0 : (l ? c ? Kg : Gg : c ? Dg : Sg)(e);
	return dh(m || e, function(r, i) {
		m && (i = r, r = e[i]), hh(o, i, Dv(r, t, n, i, e, a));
	}), o;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/cloneDeep.js
var Ov = 1, kv = 4;
function Av(e) {
	return Dv(e, Ov | kv);
}
//#endregion
//#region node_modules/.pnpm/tiny-warning@1.0.3/node_modules/tiny-warning/dist/tiny-warning.esm.js
var jv = /* @__PURE__ */ xe((/* @__PURE__ */ se(((e, t) => {
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
})))()), Mv = !0;
function Nv(e, t) {
	if (!Mv) {
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
var Pv = 4;
function Fv(e) {
	return Dv(e, Pv);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_arrayMap.js
function Iv(e, t) {
	for (var n = -1, r = e == null ? 0 : e.length, i = Array(r); ++n < r;) i[n] = t(e[n], n, e);
	return i;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isSymbol.js
var Lv = "[object Symbol]";
function Rv(e) {
	return typeof e == "symbol" || em(e) && Zp(e) == Lv;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/memoize.js
var zv = "Expected a function";
function Bv(e, t) {
	if (typeof e != "function" || t != null && typeof t != "function") throw TypeError(zv);
	var n = function() {
		var r = arguments, i = t ? t.apply(this, r) : r[0], a = n.cache;
		if (a.has(i)) return a.get(i);
		var o = e.apply(this, r);
		return n.cache = a.set(i, o) || a, o;
	};
	return n.cache = new (Bv.Cache || sh)(), n;
}
Bv.Cache = sh;
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_memoizeCapped.js
var Vv = 500;
function Hv(e) {
	var t = Bv(e, function(e) {
		return n.size === Vv && n.clear(), e;
	}), n = t.cache;
	return t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_stringToPath.js
var Uv = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Wv = /\\(\\)?/g, Gv = Hv(function(e) {
	var t = [];
	return e.charCodeAt(0) === 46 && t.push(""), e.replace(Uv, function(e, n, r, i) {
		t.push(r ? i.replace(Wv, "$1") : n || e);
	}), t;
}), Kv = Infinity;
function qv(e) {
	if (typeof e == "string" || Rv(e)) return e;
	var t = e + "";
	return t == "0" && 1 / e == -Kv ? "-0" : t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseToString.js
var Jv = Infinity, Yv = Bp ? Bp.prototype : void 0, Xv = Yv ? Yv.toString : void 0;
function Zv(e) {
	if (typeof e == "string") return e;
	if (wh(e)) return Iv(e, Zv) + "";
	if (Rv(e)) return Xv ? Xv.call(e) : "";
	var t = e + "";
	return t == "0" && 1 / e == -Jv ? "-0" : t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/toString.js
function Qv(e) {
	return e == null ? "" : Zv(e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/toPath.js
function $v(e) {
	return wh(e) ? Iv(e, qv) : Rv(e) ? [e] : Pg(Gv(Qv(e)));
}
//#endregion
//#region node_modules/.pnpm/formik@2.4.9_@types+react@18.3.28_react@18.3.1/node_modules/formik/dist/formik.esm.js
function ey() {
	return ey = Object.assign || function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, ey.apply(this, arguments);
}
function ty(e, t) {
	e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t;
}
function ny(e, t) {
	if (e == null) return {};
	var n = {}, r = Object.keys(e), i, a;
	for (a = 0; a < r.length; a++) i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
	return n;
}
function ry(e) {
	if (e === void 0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
	return e;
}
var iy = /* @__PURE__ */ (0, I.createContext)(void 0);
iy.displayName = "FormikContext";
var ay = iy.Provider, oy = iy.Consumer;
function sy() {
	var e = (0, I.useContext)(iy);
	return !e && Nv(!1), e;
}
var cy = function(e) {
	return Array.isArray(e) && e.length === 0;
}, ly = function(e) {
	return typeof e == "function";
}, uy = function(e) {
	return typeof e == "object" && !!e;
}, dy = function(e) {
	return String(Math.floor(Number(e))) === e;
}, fy = function(e) {
	return Object.prototype.toString.call(e) === "[object String]";
}, py = function(e) {
	return I.Children.count(e) === 0;
}, my = function(e) {
	return uy(e) && ly(e.then);
};
function hy(e, t, n, r) {
	r === void 0 && (r = 0);
	for (var i = $v(t); e && r < i.length;) e = e[i[r++]];
	return r !== i.length && !e || e === void 0 ? n : e;
}
function gy(e, t, n) {
	for (var r = Fv(e), i = r, a = 0, o = $v(t); a < o.length - 1; a++) {
		var s = o[a], c = hy(e, o.slice(0, a + 1));
		if (c && (uy(c) || Array.isArray(c))) i = i[s] = Fv(c);
		else {
			var l = o[a + 1];
			i = i[s] = dy(l) && Number(l) >= 0 ? [] : {};
		}
	}
	return (a === 0 ? e : i)[o[a]] === n ? e : (n === void 0 ? delete i[o[a]] : i[o[a]] = n, a === 0 && n === void 0 && delete r[o[a]], r);
}
function _y(e, t, n, r) {
	n === void 0 && (n = /* @__PURE__ */ new WeakMap()), r === void 0 && (r = {});
	for (var i = 0, a = Object.keys(e); i < a.length; i++) {
		var o = a[i], s = e[o];
		uy(s) ? n.get(s) || (n.set(s, !0), r[o] = Array.isArray(s) ? [] : {}, _y(s, t, n, r[o])) : r[o] = t;
	}
	return r;
}
function vy(e, t) {
	switch (t.type) {
		case "SET_VALUES": return ey({}, e, { values: t.payload });
		case "SET_TOUCHED": return ey({}, e, { touched: t.payload });
		case "SET_ERRORS": return (0, jv.default)(e.errors, t.payload) ? e : ey({}, e, { errors: t.payload });
		case "SET_STATUS": return ey({}, e, { status: t.payload });
		case "SET_ISSUBMITTING": return ey({}, e, { isSubmitting: t.payload });
		case "SET_ISVALIDATING": return ey({}, e, { isValidating: t.payload });
		case "SET_FIELD_VALUE": return ey({}, e, { values: gy(e.values, t.payload.field, t.payload.value) });
		case "SET_FIELD_TOUCHED": return ey({}, e, { touched: gy(e.touched, t.payload.field, t.payload.value) });
		case "SET_FIELD_ERROR": return ey({}, e, { errors: gy(e.errors, t.payload.field, t.payload.value) });
		case "RESET_FORM": return ey({}, e, t.payload);
		case "SET_FORMIK_STATE": return t.payload(e);
		case "SUBMIT_ATTEMPT": return ey({}, e, {
			touched: _y(e.values, !0),
			isSubmitting: !0,
			submitCount: e.submitCount + 1
		});
		case "SUBMIT_FAILURE": return ey({}, e, { isSubmitting: !1 });
		case "SUBMIT_SUCCESS": return ey({}, e, { isSubmitting: !1 });
		default: return e;
	}
}
var yy = {}, by = {};
function xy(e) {
	var t = e.validateOnChange, n = t === void 0 ? !0 : t, r = e.validateOnBlur, i = r === void 0 ? !0 : r, a = e.validateOnMount, o = a === void 0 ? !1 : a, s = e.isInitialValid, c = e.enableReinitialize, l = c === void 0 ? !1 : c, u = e.onSubmit, d = ny(e, [
		"validateOnChange",
		"validateOnBlur",
		"validateOnMount",
		"isInitialValid",
		"enableReinitialize",
		"onSubmit"
	]), f = ey({
		validateOnChange: n,
		validateOnBlur: i,
		validateOnMount: o,
		onSubmit: u
	}, d), p = (0, I.useRef)(f.initialValues), m = (0, I.useRef)(f.initialErrors || yy), h = (0, I.useRef)(f.initialTouched || by), g = (0, I.useRef)(f.initialStatus), _ = (0, I.useRef)(!1), v = (0, I.useRef)({});
	(0, I.useEffect)(function() {
		return _.current = !0, function() {
			_.current = !1;
		};
	}, []);
	var y = (0, I.useState)(0)[1], b = (0, I.useRef)({
		values: Av(f.initialValues),
		errors: Av(f.initialErrors) || yy,
		touched: Av(f.initialTouched) || by,
		status: Av(f.initialStatus),
		isSubmitting: !1,
		isValidating: !1,
		submitCount: 0
	}), x = b.current, S = (0, I.useCallback)(function(e) {
		var t = b.current;
		b.current = vy(t, e), t !== b.current && y(function(e) {
			return e + 1;
		});
	}, []), C = (0, I.useCallback)(function(e, t) {
		return new Promise(function(n, r) {
			var i = f.validate(e, t);
			i == null ? n(yy) : my(i) ? i.then(function(e) {
				n(e || yy);
			}, function(e) {
				r(e);
			}) : n(i);
		});
	}, [f.validate]), w = (0, I.useCallback)(function(e, t) {
		var n = f.validationSchema, r = ly(n) ? n(t) : n, i = t && r.validateAt ? r.validateAt(t, e) : wy(e, r);
		return new Promise(function(e, t) {
			i.then(function() {
				e(yy);
			}, function(n) {
				n.name === "ValidationError" ? e(Cy(n)) : t(n);
			});
		});
	}, [f.validationSchema]), T = (0, I.useCallback)(function(e, t) {
		return new Promise(function(n) {
			return n(v.current[e].validate(t));
		});
	}, []), E = (0, I.useCallback)(function(e) {
		var t = Object.keys(v.current).filter(function(e) {
			return ly(v.current[e].validate);
		}), n = t.length > 0 ? t.map(function(t) {
			return T(t, hy(e, t));
		}) : [Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];
		return Promise.all(n).then(function(e) {
			return e.reduce(function(e, n, r) {
				return n === "DO_NOT_DELETE_YOU_WILL_BE_FIRED" || n && (e = gy(e, t[r], n)), e;
			}, {});
		});
	}, [T]), D = (0, I.useCallback)(function(e) {
		return Promise.all([
			E(e),
			f.validationSchema ? w(e) : {},
			f.validate ? C(e) : {}
		]).then(function(e) {
			var t = e[0], n = e[1], r = e[2];
			return Ip.all([
				t,
				n,
				r
			], { arrayMerge: Ey });
		});
	}, [
		f.validate,
		f.validationSchema,
		E,
		C,
		w
	]), O = Ay(function(e) {
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
		o && _.current === !0 && (0, jv.default)(p.current, f.initialValues) && O(p.current);
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
			my(o) ? o.then(a) : a();
		} else a();
	}, [
		f.initialErrors,
		f.initialStatus,
		f.initialTouched,
		f.onReset
	]);
	(0, I.useEffect)(function() {
		_.current === !0 && !(0, jv.default)(p.current, f.initialValues) && l && (p.current = f.initialValues, k(), o && O(p.current));
	}, [
		l,
		f.initialValues,
		k,
		o,
		O
	]), (0, I.useEffect)(function() {
		l && _.current === !0 && !(0, jv.default)(m.current, f.initialErrors) && (m.current = f.initialErrors || yy, S({
			type: "SET_ERRORS",
			payload: f.initialErrors || yy
		}));
	}, [l, f.initialErrors]), (0, I.useEffect)(function() {
		l && _.current === !0 && !(0, jv.default)(h.current, f.initialTouched) && (h.current = f.initialTouched || by, S({
			type: "SET_TOUCHED",
			payload: f.initialTouched || by
		}));
	}, [l, f.initialTouched]), (0, I.useEffect)(function() {
		l && _.current === !0 && !(0, jv.default)(g.current, f.initialStatus) && (g.current = f.initialStatus, S({
			type: "SET_STATUS",
			payload: f.initialStatus
		}));
	}, [
		l,
		f.initialStatus,
		f.initialTouched
	]);
	var A = Ay(function(e) {
		if (v.current[e] && ly(v.current[e].validate)) {
			var t = hy(x.values, e), n = v.current[e].validate(t);
			return my(n) ? (S({
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
					value: hy(t, e)
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
	}, []), M = Ay(function(e, t) {
		return S({
			type: "SET_TOUCHED",
			payload: e
		}), (t === void 0 ? i : t) ? O(x.values) : Promise.resolve();
	}), N = (0, I.useCallback)(function(e) {
		S({
			type: "SET_ERRORS",
			payload: e
		});
	}, []), te = Ay(function(e, t) {
		var r = ly(e) ? e(x.values) : e;
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
	}, []), ne = Ay(function(e, t, r) {
		var i = ly(t) ? t(hy(x.values, e)) : t;
		return S({
			type: "SET_FIELD_VALUE",
			payload: {
				field: e,
				value: i
			}
		}), (r === void 0 ? n : r) ? O(gy(x.values, e, i)) : Promise.resolve();
	}), re = (0, I.useCallback)(function(e, t) {
		var n = t, r = e, i;
		if (!fy(e)) {
			e.persist && e.persist();
			var a = e.target ? e.target : e.currentTarget, o = a.type, s = a.name, c = a.id, l = a.value, u = a.checked;
			a.outerHTML;
			var d = a.options, f = a.multiple;
			n = t || s || c, r = /number|range/.test(o) ? (i = parseFloat(l), isNaN(i) ? "" : i) : /checkbox/.test(o) ? Oy(hy(x.values, n), u, l) : d && f ? Dy(d) : l;
		}
		n && ne(n, r);
	}, [ne, x.values]), ie = Ay(function(e) {
		if (fy(e)) return function(t) {
			return re(t, e);
		};
		re(e);
	}), ae = Ay(function(e, t, n) {
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
	}, [ae]), se = Ay(function(e) {
		if (fy(e)) return function(t) {
			return oe(t, e);
		};
		oe(e);
	}), ce = (0, I.useCallback)(function(e) {
		ly(e) ? S({
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
	}, []), de = Ay(function() {
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
	}), fe = Ay(function(e) {
		e && e.preventDefault && ly(e.preventDefault) && e.preventDefault(), e && e.stopPropagation && ly(e.stopPropagation) && e.stopPropagation(), de().catch(function(e) {
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
	}, me = Ay(function() {
		return u(x.values, pe);
	}), he = Ay(function(e) {
		e && e.preventDefault && ly(e.preventDefault) && e.preventDefault(), e && e.stopPropagation && ly(e.stopPropagation) && e.stopPropagation(), k();
	}), ge = (0, I.useCallback)(function(e) {
		return {
			value: hy(x.values, e),
			error: hy(x.errors, e),
			touched: !!hy(x.touched, e),
			initialValue: hy(p.current, e),
			initialTouched: !!hy(h.current, e),
			initialError: hy(m.current, e)
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
		var t = uy(e), n = t ? e.name : e, r = hy(x.values, n), i = {
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
		return !(0, jv.default)(p.current, x.values);
	}, [p.current, x.values]), be = (0, I.useMemo)(function() {
		return s === void 0 || ye ? x.errors && Object.keys(x.errors).length === 0 : s !== !1 && ly(s) ? s(f) : s;
	}, [
		s,
		ye,
		x.errors,
		f
	]);
	return ey({}, x, {
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
function Sy(e) {
	var t = xy(e), n = e.component, r = e.children, i = e.render, a = e.innerRef;
	return (0, I.useImperativeHandle)(a, function() {
		return t;
	}), (0, I.createElement)(ay, { value: t }, n ? (0, I.createElement)(n, t) : i ? i(t) : r ? ly(r) ? r(t) : py(r) ? null : I.Children.only(r) : null);
}
function Cy(e) {
	var t = {};
	if (e.inner) {
		if (e.inner.length === 0) return gy(t, e.path, e.message);
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
			hy(t, o.path) || (t = gy(t, o.path, o.message));
		}
	}
	return t;
}
function wy(e, t, n, r) {
	n === void 0 && (n = !1);
	var i = Ty(e);
	return t[n ? "validateSync" : "validate"](i, {
		abortEarly: !1,
		context: r || i
	});
}
function Ty(e) {
	var t = Array.isArray(e) ? [] : {};
	for (var n in e) if (Object.prototype.hasOwnProperty.call(e, n)) {
		var r = String(n);
		Array.isArray(e[r]) === !0 ? t[r] = e[r].map(function(e) {
			return Array.isArray(e) === !0 || sm(e) ? Ty(e) : e === "" ? void 0 : e;
		}) : sm(e[r]) ? t[r] = Ty(e[r]) : t[r] = e[r] === "" ? void 0 : e[r];
	}
	return t;
}
function Ey(e, t, n) {
	var r = e.slice();
	return t.forEach(function(t, i) {
		r[i] === void 0 ? r[i] = n.clone !== !1 && n.isMergeableObject(t) ? Ip(Array.isArray(t) ? [] : {}, t, n) : t : n.isMergeableObject(t) ? r[i] = Ip(e[i], t, n) : e.indexOf(t) === -1 && r.push(t);
	}), r;
}
function Dy(e) {
	return Array.from(e).filter(function(e) {
		return e.selected;
	}).map(function(e) {
		return e.value;
	});
}
function Oy(e, t, n) {
	if (typeof e == "boolean") return !!t;
	var r = [], i = !1, a = -1;
	if (Array.isArray(e)) r = e, a = e.indexOf(n), i = a >= 0;
	else if (!n || n == "true" || n == "false") return !!t;
	return t && n && !i ? r.concat(n) : i ? r.slice(0, a).concat(r.slice(a + 1)) : r;
}
var ky = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0 ? I.useLayoutEffect : I.useEffect;
function Ay(e) {
	var t = (0, I.useRef)(e);
	return ky(function() {
		t.current = e;
	}), (0, I.useCallback)(function() {
		var e = [...arguments];
		return t.current.apply(void 0, e);
	}, []);
}
var jy = /* @__PURE__ */ (0, I.forwardRef)(function(e, t) {
	var n = e.action, r = ny(e, ["action"]), i = n ?? "#", a = sy(), o = a.handleReset, s = a.handleSubmit;
	return (0, I.createElement)("form", ey({
		onSubmit: s,
		ref: t,
		onReset: o,
		action: i
	}, r));
});
jy.displayName = "Form";
function My(e) {
	var t = function(t) {
		return (0, I.createElement)(oy, null, function(n) {
			return !n && Nv(!1), (0, I.createElement)(e, ey({}, t, { formik: n }));
		});
	}, n = e.displayName || e.name || e.constructor && e.constructor.name || "Component";
	return t.WrappedComponent = e, t.displayName = "FormikConnect(" + n + ")", (0, De.default)(t, e);
}
var Ny = function(e, t, n) {
	var r = Ly(e), i = r[t];
	return r.splice(t, 1), r.splice(n, 0, i), r;
}, Py = function(e, t, n) {
	var r = Ly(e), i = r[t];
	return r[t] = r[n], r[n] = i, r;
}, Fy = function(e, t, n) {
	var r = Ly(e);
	return r.splice(t, 0, n), r;
}, Iy = function(e, t, n) {
	var r = Ly(e);
	return r[t] = n, r;
}, Ly = function(e) {
	if (!e) return [];
	if (Array.isArray(e)) return [].concat(e);
	var t = Object.keys(e).map(function(e) {
		return parseInt(e);
	}).reduce(function(e, t) {
		return t > e ? t : e;
	}, 0);
	return Array.from(ey({}, e, { length: t + 1 }));
}, Ry = function(e, t) {
	var n = typeof e == "function" ? e : t;
	return function(e) {
		return Array.isArray(e) || uy(e) ? n(Ly(e)) : e;
	};
}, zy = /* @__PURE__ */ function(e) {
	ty(t, e);
	function t(t) {
		var n = e.call(this, t) || this;
		return n.updateArrayField = function(e, t, r) {
			var i = n.props, a = i.name, o = i.formik.setFormikState;
			o(function(n) {
				var i = Ry(r, e), o = Ry(t, e), s = gy(n.values, a, e(hy(n.values, a))), c = r ? i(hy(n.errors, a)) : void 0, l = t ? o(hy(n.touched, a)) : void 0;
				return cy(c) && (c = void 0), cy(l) && (l = void 0), ey({}, n, {
					values: s,
					errors: r ? gy(n.errors, a, c) : n.errors,
					touched: t ? gy(n.touched, a, l) : n.touched
				});
			});
		}, n.push = function(e) {
			return n.updateArrayField(function(t) {
				return [].concat(Ly(t), [Av(e)]);
			}, !1, !1);
		}, n.handlePush = function(e) {
			return function() {
				return n.push(e);
			};
		}, n.swap = function(e, t) {
			return n.updateArrayField(function(n) {
				return Py(n, e, t);
			}, !0, !0);
		}, n.handleSwap = function(e, t) {
			return function() {
				return n.swap(e, t);
			};
		}, n.move = function(e, t) {
			return n.updateArrayField(function(n) {
				return Ny(n, e, t);
			}, !0, !0);
		}, n.handleMove = function(e, t) {
			return function() {
				return n.move(e, t);
			};
		}, n.insert = function(e, t) {
			return n.updateArrayField(function(n) {
				return Fy(n, e, t);
			}, function(t) {
				return Fy(t, e, null);
			}, function(t) {
				return Fy(t, e, null);
			});
		}, n.handleInsert = function(e, t) {
			return function() {
				return n.insert(e, t);
			};
		}, n.replace = function(e, t) {
			return n.updateArrayField(function(n) {
				return Iy(n, e, t);
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
		}, n.remove = n.remove.bind(ry(n)), n.pop = n.pop.bind(ry(n)), n;
	}
	var n = t.prototype;
	return n.componentDidUpdate = function(e) {
		this.props.validateOnChange && this.props.formik.validateOnChange && !(0, jv.default)(hy(e.formik.values, e.name), hy(this.props.formik.values, this.props.name)) && this.props.formik.validateForm(this.props.formik.values);
	}, n.remove = function(e) {
		var t;
		return this.updateArrayField(function(n) {
			var r = n ? Ly(n) : [];
			return t ||= r[e], ly(r.splice) && r.splice(e, 1), ly(r.every) && r.every(function(e) {
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
		}, t = this.props, n = t.component, r = t.render, i = t.children, a = t.name, o = t.formik, s = ny(o, ["validate", "validationSchema"]), c = ey({}, e, {
			form: s,
			name: a
		});
		return n ? (0, I.createElement)(n, c) : r ? r(c) : i ? typeof i == "function" ? i(c) : py(i) ? null : I.Children.only(i) : null;
	}, t;
}(I.Component);
zy.defaultProps = { validateOnChange: !0 };
var By = /* @__PURE__ */ My(zy);
//#endregion
//#region src/card/common/utils.ts
function Vy(e = [], t) {
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
function Hy() {
	let { values: e, setFieldValue: t, handleChange: n } = sy();
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
				children: [/* @__PURE__ */ (0, F.jsx)(H.Label, { children: "Background Color" }), /* @__PURE__ */ (0, F.jsx)(Cp, {
					color: e.backgroundColor,
					setColor: (e) => t("backgroundColor", e)
				})]
			})
		]
	});
}
//#endregion
//#region src/shared/components/constants.ts
var Uy = [
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
function Wy({ title: e, onTitleChange: t, activeTab: n, tabs: r = Uy }) {
	let [i, a] = (0, I.useState)(!1);
	return /* @__PURE__ */ (0, F.jsx)(eu.Header, {
		className: "shadow-sm studio-header",
		children: /* @__PURE__ */ (0, F.jsxs)("div", {
			className: "d-flex flex-row justify-content-between",
			children: [
				/* @__PURE__ */ (0, F.jsx)(ke, { children: i ? /* @__PURE__ */ (0, F.jsx)(H.Control, {
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
								src: Kr,
								onClick: () => a(!0)
							})
						]
					})
				}) }),
				/* @__PURE__ */ (0, F.jsx)(ke.Spacer, {}),
				/* @__PURE__ */ (0, F.jsx)(_u, {
					role: "tablist",
					variant: "button-group",
					activeKey: n,
					className: "studio-header-tabs-nav pgn__tabs",
					"aria-label": "Editor Sections",
					children: r.map(({ key: e, label: t }) => /* @__PURE__ */ (0, F.jsx)(_u.Link, {
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
function Gy({ heading: e, index: t, onRemoveItem: n, children: r }) {
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
//#region src/card/common/studio-ui/secondary-content/IconSelector/icons.ts
var Ky = /* @__PURE__ */ "10k.10mp.11mp.123.12mp.13mp.14mp.15mp.16mp.17mp.18_up_rating.18mp.19mp.1k.1k_plus.1x_mobiledata.20mp.21mp.22mp.23mp.24mp.2k.2k_plus.2mp.30fps.30fps_select.360.3d_rotation.3g_mobiledata.3k.3k_plus.3mp.3p.4g_mobiledata.4g_plus_mobiledata.4k.4k_plus.4mp.5g.5k.5k_plus.5mp.60fps.60fps_select.6_ft_apart.6k.6k_plus.6mp.7k.7k_plus.7mp.8k.8k_plus.8mp.9k.9k_plus.9mp.abc.ac_unit.access_alarm.access_alarms.access_time.access_time_filled.accessibility.accessibility_new.accessible.accessible_forward.account_balance.account_balance_wallet.account_box.account_circle.account_tree.ad_units.adb.add.add_a_photo.add_alarm.add_alert.add_box.add_business.add_card.add_chart.add_circle.add_circle_outline.add_comment.add_home.add_home_work.add_ic_call.add_link.add_location.add_location_alt.add_moderator.add_photo_alternate.add_reaction.add_road.add_shopping_cart.add_task.add_to_drive.add_to_home_screen.add_to_photos.add_to_queue.addchart.adf_scanner.adjust.admin_panel_settings.ads_click.agriculture.air.airline_seat_flat.airline_seat_flat_angled.airline_seat_individual_suite.airline_seat_legroom_extra.airline_seat_legroom_normal.airline_seat_legroom_reduced.airline_seat_recline_extra.airline_seat_recline_normal.airline_stops.airlines.airplane_ticket.airplanemode_active.airplanemode_inactive.airplay.airport_shuttle.alarm.alarm_add.alarm_off.alarm_on.album.align_horizontal_center.align_horizontal_left.align_horizontal_right.align_vertical_bottom.align_vertical_center.align_vertical_top.all_inbox.all_inclusive.all_out.alt_route.alternate_email.analytics.anchor.android.animation.announcement.aod.apartment.api.app_blocking.app_registration.app_settings_alt.app_shortcut.approval.apps.apps_outage.architecture.archive.area_chart.arrow_back.arrow_back_ios.arrow_back_ios_new.arrow_circle_down.arrow_circle_left.arrow_circle_right.arrow_circle_up.arrow_downward.arrow_drop_down.arrow_drop_down_circle.arrow_drop_up.arrow_forward.arrow_forward_ios.arrow_left.arrow_outward.arrow_right.arrow_right_alt.arrow_upward.art_track.article.aspect_ratio.assessment.assignment.assignment_ind.assignment_late.assignment_return.assignment_returned.assignment_turned_in.assist_walker.assistant.assistant_direction.assistant_photo.assured_workload.atm.attach_email.attach_file.attach_money.attachment.attractions.attribution.audio_file.audiotrack.auto_awesome.auto_awesome_mosaic.auto_awesome_motion.auto_delete.auto_fix_high.auto_fix_normal.auto_fix_off.auto_graph.auto_mode.auto_stories.autofps_select.autorenew.av_timer.baby_changing_station.back_hand.backpack.backspace.backup.backup_table.badge.bakery_dining.balance.balcony.ballot.bar_chart.batch_prediction.bathroom.bathtub.battery_0_bar.battery_1_bar.battery_2_bar.battery_3_bar.battery_4_bar.battery_5_bar.battery_6_bar.battery_alert.battery_charging_full.battery_full.battery_saver.battery_std.battery_unknown.beach_access.bed.bedroom_baby.bedroom_child.bedroom_parent.bedtime.bedtime_off.beenhere.bento.bike_scooter.biotech.blender.blind.blinds.blinds_closed.block.bloodtype.bluetooth.bluetooth_audio.bluetooth_connected.bluetooth_disabled.bluetooth_drive.bluetooth_searching.blur_circular.blur_linear.blur_off.blur_on.bolt.book.book_online.bookmark.bookmark_add.bookmark_added.bookmark_border.bookmark_remove.bookmarks.border_all.border_bottom.border_clear.border_color.border_horizontal.border_inner.border_left.border_outer.border_right.border_style.border_top.border_vertical.boy.branding_watermark.breakfast_dining.brightness_1.brightness_2.brightness_3.brightness_4.brightness_5.brightness_6.brightness_7.brightness_auto.brightness_high.brightness_low.brightness_medium.broadcast_on_home.broadcast_on_personal.broken_image.browse_gallery.browser_not_supported.browser_updated.brunch_dining.brush.bubble_chart.bug_report.build.build_circle.bungalow.burst_mode.bus_alert.business.business_center.cabin.cable.cached.cake.calculate.calendar_month.calendar_today.calendar_view_day.calendar_view_month.calendar_view_week.call.call_end.call_made.call_merge.call_missed.call_missed_outgoing.call_received.call_split.call_to_action.camera.camera_alt.camera_enhance.camera_front.camera_indoor.camera_outdoor.camera_rear.camera_roll.cameraswitch.campaign.cancel.cancel_presentation.cancel_schedule_send.candlestick_chart.car_crash.car_rental.car_repair.card_giftcard.card_membership.card_travel.carpenter.cases.casino.cast.cast_connected.cast_for_education.castle.catching_pokemon.category.celebration.cell_tower.cell_wifi.center_focus_strong.center_focus_weak.chair.chair_alt.chalet.change_circle.change_history.charging_station.chat.chat_bubble.chat_bubble_outline.check.check_box.check_box_outline_blank.check_circle.check_circle_outline.checklist.checklist_rtl.checkroom.chevron_left.chevron_right.child_care.child_friendly.chrome_reader_mode.church.circle.circle_notifications.class.clean_hands.cleaning_services.clear.clear_all.close.close_fullscreen.closed_caption.closed_caption_disabled.closed_caption_off.cloud.cloud_circle.cloud_done.cloud_download.cloud_off.cloud_queue.cloud_sync.cloud_upload.co2.co_present.code.code_off.coffee.coffee_maker.collections.collections_bookmark.color_lens.colorize.comment.comment_bank.comments_disabled.commit.commute.compare.compare_arrows.compass_calibration.compost.compress.computer.confirmation_number.connect_without_contact.connected_tv.connecting_airports.construction.contact_emergency.contact_mail.contact_page.contact_phone.contact_support.contactless.contacts.content_copy.content_cut.content_paste.content_paste_go.content_paste_off.content_paste_search.contrast.control_camera.control_point.control_point_duplicate.cookie.copy_all.copyright.coronavirus.corporate_fare.cottage.countertops.create.create_new_folder.credit_card.credit_card_off.credit_score.crib.crisis_alert.crop.crop_16_9.crop_3_2.crop_5_4.crop_7_5.crop_din.crop_free.crop_landscape.crop_original.crop_portrait.crop_rotate.crop_square.cruelty_free.css.currency_bitcoin.currency_exchange.currency_franc.currency_lira.currency_pound.currency_ruble.currency_rupee.currency_yen.currency_yuan.curtains.curtains_closed.cyclone.dangerous.dark_mode.dashboard.dashboard_customize.data_array.data_exploration.data_object.data_saver_off.data_saver_on.data_thresholding.data_usage.dataset.dataset_linked.date_range.deblur.deck.dehaze.delete.delete_forever.delete_outline.delete_sweep.delivery_dining.density_large.density_medium.density_small.departure_board.description.deselect.design_services.desk.desktop_access_disabled.desktop_mac.desktop_windows.details.developer_board.developer_board_off.developer_mode.device_hub.device_thermostat.device_unknown.devices.devices_fold.devices_other.dialer_sip.dialpad.diamond.difference.dining.dinner_dining.directions.directions_bike.directions_boat.directions_boat_filled.directions_bus.directions_bus_filled.directions_car.directions_car_filled.directions_off.directions_railway.directions_railway_filled.directions_run.directions_subway.directions_subway_filled.directions_transit.directions_transit_filled.directions_walk.dirty_lens.disabled_by_default.disabled_visible.disc_full.discount.display_settings.diversity_1.diversity_2.diversity_3.dns.do_disturb.do_disturb_alt.do_disturb_off.do_disturb_on.do_not_disturb.do_not_disturb_alt.do_not_disturb_off.do_not_disturb_on.do_not_disturb_on_total_silence.do_not_step.do_not_touch.dock.document_scanner.domain.domain_add.domain_disabled.domain_verification.done.done_all.done_outline.donut_large.donut_small.door_back.door_front.door_sliding.doorbell.double_arrow.downhill_skiing.download.download_done.download_for_offline.downloading.drafts.drag_handle.drag_indicator.draw.drive_eta.drive_file_move.drive_file_move_rtl.drive_file_rename_outline.drive_folder_upload.dry.dry_cleaning.duo.dvr.dynamic_feed.dynamic_form.e_mobiledata.earbuds.earbuds_battery.east.edgesensor_high.edgesensor_low.edit.edit_attributes.edit_calendar.edit_location.edit_location_alt.edit_note.edit_notifications.edit_off.edit_road.egg.egg_alt.eject.elderly.elderly_woman.electric_bike.electric_bolt.electric_car.electric_meter.electric_moped.electric_rickshaw.electric_scooter.electrical_services.elevator.email.emergency.emergency_recording.emergency_share.emoji_emotions.emoji_events.emoji_food_beverage.emoji_nature.emoji_objects.emoji_people.emoji_symbols.emoji_transportation.energy_savings_leaf.engineering.enhanced_encryption.equalizer.error.error_outline.escalator.escalator_warning.euro.euro_symbol.ev_station.event.event_available.event_busy.event_note.event_repeat.event_seat.exit_to_app.expand.expand_circle_down.expand_less.expand_more.explicit.explore.explore_off.exposure.exposure_neg_1.exposure_neg_2.exposure_plus_1.exposure_plus_2.exposure_zero.extension.extension_off.face.face_2.face_3.face_4.face_5.face_6.face_retouching_natural.face_retouching_off.fact_check.factory.family_restroom.fast_forward.fast_rewind.fastfood.favorite.favorite_border.fax.featured_play_list.featured_video.feed.feedback.female.fence.festival.fiber_dvr.fiber_manual_record.fiber_new.fiber_pin.fiber_smart_record.file_copy.file_download.file_download_done.file_download_off.file_open.file_present.file_upload.filter.filter_1.filter_2.filter_3.filter_4.filter_5.filter_6.filter_7.filter_8.filter_9.filter_9_plus.filter_alt.filter_alt_off.filter_b_and_w.filter_center_focus.filter_drama.filter_frames.filter_hdr.filter_list.filter_list_off.filter_none.filter_tilt_shift.filter_vintage.find_in_page.find_replace.fingerprint.fire_extinguisher.fire_hydrant_alt.fire_truck.fireplace.first_page.fit_screen.fitbit.fitness_center.flag.flag_circle.flaky.flare.flash_auto.flash_off.flash_on.flashlight_off.flashlight_on.flatware.flight.flight_class.flight_land.flight_takeoff.flip.flip_camera_android.flip_camera_ios.flip_to_back.flip_to_front.flood.fluorescent.flutter_dash.fmd_bad.fmd_good.folder.folder_copy.folder_delete.folder_off.folder_open.folder_shared.folder_special.folder_zip.follow_the_signs.font_download.font_download_off.food_bank.forest.fork_left.fork_right.format_align_center.format_align_justify.format_align_left.format_align_right.format_bold.format_clear.format_color_fill.format_color_reset.format_color_text.format_indent_decrease.format_indent_increase.format_italic.format_line_spacing.format_list_bulleted.format_list_numbered.format_list_numbered_rtl.format_overline.format_paint.format_quote.format_shapes.format_size.format_strikethrough.format_textdirection_l_to_r.format_textdirection_r_to_l.format_underlined.fort.forum.forward.forward_10.forward_30.forward_5.forward_to_inbox.foundation.free_breakfast.free_cancellation.front_hand.fullscreen.fullscreen_exit.functions.g_mobiledata.g_translate.gamepad.games.garage.gas_meter.gavel.generating_tokens.gesture.get_app.gif.gif_box.girl.gite.golf_course.gpp_bad.gpp_good.gpp_maybe.gps_fixed.gps_not_fixed.gps_off.grade.gradient.grading.grain.graphic_eq.grass.grid_3x3.grid_4x4.grid_goldenratio.grid_off.grid_on.grid_view.group.group_add.group_off.group_remove.group_work.groups.groups_2.groups_3.h_mobiledata.h_plus_mobiledata.hail.handshake.handyman.hardware.hd.hdr_auto.hdr_auto_select.hdr_enhanced_select.hdr_off.hdr_off_select.hdr_on.hdr_on_select.hdr_plus.hdr_strong.hdr_weak.headphones.headphones_battery.headset.headset_mic.headset_off.healing.health_and_safety.hearing.hearing_disabled.heart_broken.heat_pump.height.help.help_center.help_outline.hevc.hexagon.hide_image.hide_source.high_quality.highlight.highlight_alt.highlight_off.hiking.history.history_edu.history_toggle_off.hive.hls.hls_off.holiday_village.home.home_max.home_mini.home_repair_service.home_work.horizontal_distribute.horizontal_rule.horizontal_split.hot_tub.hotel.hotel_class.hourglass_bottom.hourglass_disabled.hourglass_empty.hourglass_full.hourglass_top.house.house_siding.houseboat.how_to_reg.how_to_vote.html.http.https.hub.hvac.ice_skating.icecream.image.image_aspect_ratio.image_not_supported.image_search.imagesearch_roller.import_contacts.import_export.important_devices.inbox.incomplete_circle.indeterminate_check_box.info.input.insert_chart.insert_chart_outlined.insert_comment.insert_drive_file.insert_emoticon.insert_invitation.insert_link.insert_page_break.insert_photo.insights.install_desktop.install_mobile.integration_instructions.interests.interpreter_mode.inventory.inventory_2.invert_colors.invert_colors_off.ios_share.iron.iso.javascript.join_full.join_inner.join_left.join_right.kayaking.kebab_dining.key.key_off.keyboard.keyboard_alt.keyboard_arrow_down.keyboard_arrow_left.keyboard_arrow_right.keyboard_arrow_up.keyboard_backspace.keyboard_capslock.keyboard_command_key.keyboard_control_key.keyboard_double_arrow_down.keyboard_double_arrow_left.keyboard_double_arrow_right.keyboard_double_arrow_up.keyboard_hide.keyboard_option_key.keyboard_return.keyboard_tab.keyboard_voice.king_bed.kitchen.kitesurfing.label.label_important.label_off.lan.landscape.landslide.language.laptop.laptop_chromebook.laptop_mac.laptop_windows.last_page.launch.layers.layers_clear.leaderboard.leak_add.leak_remove.legend_toggle.lens.lens_blur.library_add.library_add_check.library_books.library_music.light.light_mode.lightbulb.lightbulb_circle.line_axis.line_style.line_weight.linear_scale.link.link_off.linked_camera.liquor.list.list_alt.live_help.live_tv.living.local_activity.local_airport.local_atm.local_bar.local_cafe.local_car_wash.local_convenience_store.local_dining.local_drink.local_fire_department.local_florist.local_gas_station.local_grocery_store.local_hospital.local_hotel.local_laundry_service.local_library.local_mall.local_movies.local_offer.local_parking.local_pharmacy.local_phone.local_pizza.local_play.local_police.local_post_office.local_printshop.local_see.local_shipping.local_taxi.location_city.location_disabled.location_off.location_on.location_searching.lock.lock_clock.lock_open.lock_person.lock_reset.login.logo_dev.logout.looks.looks_3.looks_4.looks_5.looks_6.looks_one.looks_two.loop.loupe.low_priority.loyalty.lte_mobiledata.lte_plus_mobiledata.luggage.lunch_dining.lyrics.macro_off.mail.mail_lock.mail_outline.male.man.man_2.man_3.man_4.manage_accounts.manage_history.manage_search.map.maps_home_work.maps_ugc.margin.mark_as_unread.mark_chat_read.mark_chat_unread.mark_email_read.mark_email_unread.mark_unread_chat_alt.markunread.markunread_mailbox.masks.maximize.media_bluetooth_off.media_bluetooth_on.mediation.medical_information.medical_services.medication.medication_liquid.meeting_room.memory.menu.menu_book.menu_open.merge.merge_type.message.mic.mic_external_off.mic_external_on.mic_none.mic_off.microwave.military_tech.minimize.minor_crash.miscellaneous_services.missed_video_call.mms.mobile_friendly.mobile_off.mobile_screen_share.mobiledata_off.mode.mode_comment.mode_edit.mode_edit_outline.mode_fan_off.mode_night.mode_of_travel.mode_standby.model_training.monetization_on.money.money_off.money_off_csred.monitor.monitor_heart.monitor_weight.monochrome_photos.mood.mood_bad.moped.more.more_horiz.more_time.more_vert.mosque.motion_photos_auto.motion_photos_off.motion_photos_on.motion_photos_pause.motion_photos_paused.mouse.move_down.move_to_inbox.move_up.movie.movie_creation.movie_filter.moving.mp.multiline_chart.multiple_stop.museum.music_note.music_off.music_video.my_location.nat.nature.nature_people.navigate_before.navigate_next.navigation.near_me.near_me_disabled.nearby_error.nearby_off.nest_cam_wired_stand.network_cell.network_check.network_locked.network_ping.network_wifi.network_wifi_1_bar.network_wifi_2_bar.network_wifi_3_bar.new_label.new_releases.newspaper.next_plan.next_week.nfc.night_shelter.nightlife.nightlight.nightlight_round.nights_stay.no_accounts.no_adult_content.no_backpack.no_cell.no_crash.no_drinks.no_encryption.no_encryption_gmailerrorred.no_flash.no_food.no_luggage.no_meals.no_meeting_room.no_photography.no_sim.no_stroller.no_transfer.noise_aware.noise_control_off.nordic_walking.north.north_east.north_west.not_accessible.not_interested.not_listed_location.not_started.note.note_add.note_alt.notes.notification_add.notification_important.notifications.notifications_active.notifications_none.notifications_off.notifications_paused.numbers.offline_bolt.offline_pin.offline_share.oil_barrel.on_device_training.ondemand_video.online_prediction.opacity.open_in_browser.open_in_full.open_in_new.open_in_new_off.open_with.other_houses.outbound.outbox.outdoor_grill.outlet.outlined_flag.output.padding.pages.pageview.paid.palette.pan_tool.pan_tool_alt.panorama.panorama_fish_eye.panorama_horizontal.panorama_horizontal_select.panorama_photosphere.panorama_photosphere_select.panorama_vertical.panorama_vertical_select.panorama_wide_angle.panorama_wide_angle_select.paragliding.park.party_mode.password.pattern.pause.pause_circle.pause_circle_filled.pause_circle_outline.pause_presentation.payment.payments.pedal_bike.pending.pending_actions.pentagon.people.people_alt.people_outline.percent.perm_camera_mic.perm_contact_calendar.perm_data_setting.perm_device_information.perm_identity.perm_media.perm_phone_msg.perm_scan_wifi.person.person_2.person_3.person_4.person_add.person_add_alt.person_add_alt_1.person_add_disabled.person_off.person_outline.person_pin.person_pin_circle.person_remove.person_remove_alt_1.person_search.personal_injury.personal_video.pest_control.pest_control_rodent.pets.phishing.phone.phone_android.phone_bluetooth_speaker.phone_callback.phone_disabled.phone_enabled.phone_forwarded.phone_iphone.phone_locked.phone_missed.phone_paused.phonelink.phonelink_erase.phonelink_lock.phonelink_off.phonelink_ring.phonelink_setup.photo.photo_album.photo_camera.photo_camera_back.photo_camera_front.photo_filter.photo_library.photo_size_select_actual.photo_size_select_large.photo_size_select_small.php.piano.piano_off.picture_as_pdf.picture_in_picture.picture_in_picture_alt.pie_chart.pie_chart_outline.pin.pin_drop.pin_end.pin_invoke.pinch.pivot_table_chart.pix.place.plagiarism.play_arrow.play_circle.play_circle_filled.play_circle_outline.play_disabled.play_for_work.play_lesson.playlist_add.playlist_add_check.playlist_add_check_circle.playlist_add_circle.playlist_play.playlist_remove.plumbing.plus_one.podcasts.point_of_sale.policy.poll.polyline.polymer.pool.portable_wifi_off.portrait.post_add.power.power_input.power_off.power_settings_new.precision_manufacturing.pregnant_woman.present_to_all.preview.price_change.price_check.print.print_disabled.priority_high.privacy_tip.private_connectivity.production_quantity_limits.propane.propane_tank.psychology.psychology_alt.public.public_off.publish.published_with_changes.punch_clock.push_pin.qr_code.qr_code_2.qr_code_scanner.query_builder.query_stats.question_answer.question_mark.queue.queue_music.queue_play_next.quickreply.quiz.r_mobiledata.radar.radio.radio_button_checked.radio_button_unchecked.railway_alert.ramen_dining.ramp_left.ramp_right.rate_review.raw_off.raw_on.read_more.real_estate_agent.receipt.receipt_long.recent_actors.recommend.record_voice_over.rectangle.recycling.redeem.redo.reduce_capacity.refresh.remember_me.remove.remove_circle.remove_circle_outline.remove_done.remove_from_queue.remove_moderator.remove_red_eye.remove_road.remove_shopping_cart.reorder.repartition.repeat.repeat_on.repeat_one.repeat_one_on.replay.replay_10.replay_30.replay_5.replay_circle_filled.reply.reply_all.report.report_gmailerrorred.report_off.report_problem.request_page.request_quote.reset_tv.restart_alt.restaurant.restaurant_menu.restore.restore_from_trash.restore_page.reviews.rice_bowl.ring_volume.rocket.rocket_launch.roller_shades.roller_shades_closed.roller_skating.roofing.room.room_preferences.room_service.rotate_90_degrees_ccw.rotate_90_degrees_cw.rotate_left.rotate_right.roundabout_left.roundabout_right.rounded_corner.route.router.rowing.rss_feed.rsvp.rtt.rule.rule_folder.run_circle.running_with_errors.rv_hookup.safety_check.safety_divider.sailing.sanitizer.satellite.satellite_alt.save.save_alt.save_as.saved_search.savings.scale.scanner.scatter_plot.schedule.schedule_send.schema.school.science.score.scoreboard.screen_lock_landscape.screen_lock_portrait.screen_lock_rotation.screen_rotation.screen_rotation_alt.screen_search_desktop.screen_share.screenshot.screenshot_monitor.scuba_diving.sd.sd_card.sd_card_alert.sd_storage.search.search_off.security.security_update.security_update_good.security_update_warning.segment.select_all.self_improvement.sell.send.send_and_archive.send_time_extension.send_to_mobile.sensor_door.sensor_occupied.sensor_window.sensors.sensors_off.sentiment_dissatisfied.sentiment_neutral.sentiment_satisfied.sentiment_satisfied_alt.sentiment_very_dissatisfied.sentiment_very_satisfied.set_meal.settings.settings_accessibility.settings_applications.settings_backup_restore.settings_bluetooth.settings_brightness.settings_cell.settings_ethernet.settings_input_antenna.settings_input_component.settings_input_composite.settings_input_hdmi.settings_input_svideo.settings_overscan.settings_phone.settings_power.settings_remote.settings_suggest.settings_system_daydream.settings_voice.severe_cold.shape_line.share.share_location.shield.shield_moon.shop.shop_2.shop_two.shopping_bag.shopping_basket.shopping_cart.shopping_cart_checkout.short_text.shortcut.show_chart.shower.shuffle.shuffle_on.shutter_speed.sick.sign_language.signal_cellular_0_bar.signal_cellular_4_bar.signal_cellular_alt.signal_cellular_alt_1_bar.signal_cellular_alt_2_bar.signal_cellular_connected_no_internet_0_bar.signal_cellular_connected_no_internet_4_bar.signal_cellular_no_sim.signal_cellular_nodata.signal_cellular_null.signal_cellular_off.signal_wifi_0_bar.signal_wifi_4_bar.signal_wifi_4_bar_lock.signal_wifi_bad.signal_wifi_connected_no_internet_4.signal_wifi_off.signal_wifi_statusbar_4_bar.signal_wifi_statusbar_connected_no_internet_4.signal_wifi_statusbar_null.signpost.sim_card.sim_card_alert.sim_card_download.single_bed.sip.skateboarding.skip_next.skip_previous.sledding.slideshow.slow_motion_video.smart_button.smart_display.smart_screen.smart_toy.smartphone.smoke_free.smoking_rooms.sms.sms_failed.snippet_folder.snooze.snowboarding.snowmobile.snowshoeing.soap.social_distance.solar_power.sort.sort_by_alpha.sos.soup_kitchen.source.south.south_america.south_east.south_west.spa.space_bar.space_dashboard.spatial_audio.spatial_audio_off.spatial_tracking.speaker.speaker_group.speaker_notes.speaker_notes_off.speaker_phone.speed.spellcheck.splitscreen.spoke.sports.sports_bar.sports_baseball.sports_basketball.sports_cricket.sports_esports.sports_football.sports_golf.sports_gymnastics.sports_handball.sports_hockey.sports_kabaddi.sports_martial_arts.sports_mma.sports_motorsports.sports_rugby.sports_score.sports_soccer.sports_tennis.sports_volleyball.square.square_foot.ssid_chart.stacked_bar_chart.stacked_line_chart.stadium.stairs.star.star_border.star_border_purple500.star_half.star_outline.star_purple500.star_rate.stars.start.stay_current_landscape.stay_current_portrait.stay_primary_landscape.stay_primary_portrait.sticky_note_2.stop.stop_circle.stop_screen_share.storage.store.store_mall_directory.storefront.storm.straight.straighten.stream.streetview.strikethrough_s.stroller.style.subdirectory_arrow_left.subdirectory_arrow_right.subject.subscript.subscriptions.subtitles.subtitles_off.subway.summarize.superscript.supervised_user_circle.supervisor_account.support.support_agent.surfing.surround_sound.swap_calls.swap_horiz.swap_horizontal_circle.swap_vert.swap_vertical_circle.swipe.swipe_down.swipe_down_alt.swipe_left.swipe_left_alt.swipe_right.swipe_right_alt.swipe_up.swipe_up_alt.swipe_vertical.switch_access_shortcut.switch_access_shortcut_add.switch_account.switch_camera.switch_left.switch_right.switch_video.synagogue.sync.sync_alt.sync_disabled.sync_lock.sync_problem.system_security_update.system_security_update_good.system_security_update_warning.system_update.system_update_alt.tab.tab_unselected.table_bar.table_chart.table_restaurant.table_rows.table_view.tablet.tablet_android.tablet_mac.tag.tag_faces.takeout_dining.tap_and_play.tapas.task.task_alt.taxi_alert.temple_buddhist.temple_hindu.terminal.terrain.text_decrease.text_fields.text_format.text_increase.text_rotate_up.text_rotate_vertical.text_rotation_angledown.text_rotation_angleup.text_rotation_down.text_rotation_none.text_snippet.textsms.texture.theater_comedy.theaters.thermostat.thermostat_auto.thumb_down.thumb_down_alt.thumb_down_off_alt.thumb_up.thumb_up_alt.thumb_up_off_alt.thumbs_up_down.thunderstorm.time_to_leave.timelapse.timeline.timer.timer_10.timer_10_select.timer_3.timer_3_select.timer_off.tips_and_updates.tire_repair.title.toc.today.toggle_off.toggle_on.token.toll.tonality.topic.tornado.touch_app.tour.toys.track_changes.traffic.train.tram.transcribe.transfer_within_a_station.transform.transgender.transit_enterexit.translate.travel_explore.trending_down.trending_flat.trending_up.trip_origin.troubleshoot.try.tsunami.tty.tune.tungsten.turn_left.turn_right.turn_sharp_left.turn_sharp_right.turn_slight_left.turn_slight_right.turned_in.turned_in_not.tv.tv_off.two_wheeler.type_specimen.u_turn_left.u_turn_right.umbrella.unarchive.undo.unfold_less.unfold_less_double.unfold_more.unfold_more_double.unpublished.unsubscribe.upcoming.update.update_disabled.upgrade.upload.upload_file.usb.usb_off.vaccines.vape_free.vaping_rooms.verified.verified_user.vertical_align_bottom.vertical_align_center.vertical_align_top.vertical_distribute.vertical_shades.vertical_shades_closed.vertical_split.vibration.video_call.video_camera_back.video_camera_front.video_chat.video_file.video_label.video_library.video_settings.video_stable.videocam.videocam_off.videogame_asset.videogame_asset_off.view_agenda.view_array.view_carousel.view_column.view_comfy.view_comfy_alt.view_compact.view_compact_alt.view_cozy.view_day.view_headline.view_in_ar.view_kanban.view_list.view_module.view_quilt.view_sidebar.view_stream.view_timeline.view_week.vignette.villa.visibility.visibility_off.voice_chat.voice_over_off.voicemail.volcano.volume_down.volume_mute.volume_off.volume_up.volunteer_activism.vpn_key.vpn_key_off.vpn_lock.vrpano.wallet.wallpaper.warehouse.warning.warning_amber.wash.watch.watch_later.watch_off.water.water_damage.water_drop.waterfall_chart.waves.waving_hand.wb_auto.wb_cloudy.wb_incandescent.wb_iridescent.wb_shade.wb_sunny.wb_twilight.wc.web.web_asset.web_asset_off.web_stories.webhook.weekend.west.whatshot.wheelchair_pickup.where_to_vote.widgets.width_full.width_normal.width_wide.wifi.wifi_1_bar.wifi_2_bar.wifi_calling.wifi_calling_3.wifi_channel.wifi_find.wifi_lock.wifi_off.wifi_password.wifi_protected_setup.wifi_tethering.wifi_tethering_error.wifi_tethering_off.wind_power.window.wine_bar.woman.woman_2.work.work_history.work_off.work_outline.workspace_premium.workspaces.wrap_text.wrong_location.wysiwyg.yard.youtube_searched_for.zoom_in.zoom_in_map.zoom_out.zoom_out_map".split(".");
//#endregion
//#region node_modules/.pnpm/fuse.js@7.1.0/node_modules/fuse.js/dist/fuse.mjs
function qy(e) {
	return Array.isArray ? Array.isArray(e) : ib(e) === "[object Array]";
}
var Jy = Infinity;
function Yy(e) {
	if (typeof e == "string") return e;
	let t = e + "";
	return t == "0" && 1 / e == -Jy ? "-0" : t;
}
function Xy(e) {
	return e == null ? "" : Yy(e);
}
function Zy(e) {
	return typeof e == "string";
}
function Qy(e) {
	return typeof e == "number";
}
function $y(e) {
	return e === !0 || e === !1 || tb(e) && ib(e) == "[object Boolean]";
}
function eb(e) {
	return typeof e == "object";
}
function tb(e) {
	return eb(e) && e !== null;
}
function nb(e) {
	return e != null;
}
function rb(e) {
	return !e.trim().length;
}
function ib(e) {
	return e == null ? e === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(e);
}
var ab = "Incorrect 'index' type", ob = (e) => `Invalid value for key ${e}`, sb = (e) => `Pattern length exceeds max of ${e}.`, cb = (e) => `Missing ${e} property in key`, lb = (e) => `Property 'weight' in key '${e}' must be a positive integer`, ub = Object.prototype.hasOwnProperty, db = class {
	constructor(e) {
		this._keys = [], this._keyMap = {};
		let t = 0;
		e.forEach((e) => {
			let n = fb(e);
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
function fb(e) {
	let t = null, n = null, r = null, i = 1, a = null;
	if (Zy(e) || qy(e)) r = e, t = pb(e), n = mb(e);
	else {
		if (!ub.call(e, "name")) throw Error(cb("name"));
		let o = e.name;
		if (r = o, ub.call(e, "weight") && (i = e.weight, i <= 0)) throw Error(lb(o));
		t = pb(o), n = mb(o), a = e.getFn;
	}
	return {
		path: t,
		id: n,
		weight: i,
		src: r,
		getFn: a
	};
}
function pb(e) {
	return qy(e) ? e : e.split(".");
}
function mb(e) {
	return qy(e) ? e.join(".") : e;
}
function hb(e, t) {
	let n = [], r = !1, i = (e, t, a) => {
		if (nb(e)) if (!t[a]) n.push(e);
		else {
			let o = e[t[a]];
			if (!nb(o)) return;
			if (a === t.length - 1 && (Zy(o) || Qy(o) || $y(o))) n.push(Xy(o));
			else if (qy(o)) {
				r = !0;
				for (let e = 0, n = o.length; e < n; e += 1) i(o[e], t, a + 1);
			} else t.length && i(o, t, a + 1);
		}
	};
	return i(e, Zy(t) ? t.split(".") : t, 0), r ? n : n[0];
}
var gb = {
	includeMatches: !1,
	findAllMatches: !1,
	minMatchCharLength: 1
}, _b = {
	isCaseSensitive: !1,
	ignoreDiacritics: !1,
	includeScore: !1,
	keys: [],
	shouldSort: !0,
	sortFn: (e, t) => e.score === t.score ? e.idx < t.idx ? -1 : 1 : e.score < t.score ? -1 : 1
}, vb = {
	location: 0,
	threshold: .6,
	distance: 100
}, yb = {
	useExtendedSearch: !1,
	getFn: hb,
	ignoreLocation: !1,
	ignoreFieldNorm: !1,
	fieldNormWeight: 1
}, W = {
	..._b,
	...gb,
	...vb,
	...yb
}, bb = /[^ ]+/g;
function xb(e = 1, t = 3) {
	let n = /* @__PURE__ */ new Map(), r = 10 ** t;
	return {
		get(t) {
			let i = t.match(bb).length;
			if (n.has(i)) return n.get(i);
			let a = 1 / i ** (.5 * e), o = parseFloat(Math.round(a * r) / r);
			return n.set(i, o), o;
		},
		clear() {
			n.clear();
		}
	};
}
var Sb = class {
	constructor({ getFn: e = W.getFn, fieldNormWeight: t = W.fieldNormWeight } = {}) {
		this.norm = xb(t, 3), this.getFn = e, this.isCreated = !1, this.setIndexRecords();
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
		this.isCreated || !this.docs.length || (this.isCreated = !0, Zy(this.docs[0]) ? this.docs.forEach((e, t) => {
			this._addString(e, t);
		}) : this.docs.forEach((e, t) => {
			this._addObject(e, t);
		}), this.norm.clear());
	}
	add(e) {
		let t = this.size();
		Zy(e) ? this._addString(e, t) : this._addObject(e, t);
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
		if (!nb(e) || rb(e)) return;
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
			if (nb(i)) {
				if (qy(i)) {
					let e = [], t = [{
						nestedArrIndex: -1,
						value: i
					}];
					for (; t.length;) {
						let { nestedArrIndex: n, value: r } = t.pop();
						if (nb(r)) if (Zy(r) && !rb(r)) {
							let t = {
								v: r,
								i: n,
								n: this.norm.get(r)
							};
							e.push(t);
						} else qy(r) && r.forEach((e, n) => {
							t.push({
								nestedArrIndex: n,
								value: e
							});
						});
					}
					n.$[r] = e;
				} else if (Zy(i) && !rb(i)) {
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
function Cb(e, t, { getFn: n = W.getFn, fieldNormWeight: r = W.fieldNormWeight } = {}) {
	let i = new Sb({
		getFn: n,
		fieldNormWeight: r
	});
	return i.setKeys(e.map(fb)), i.setSources(t), i.create(), i;
}
function wb(e, { getFn: t = W.getFn, fieldNormWeight: n = W.fieldNormWeight } = {}) {
	let { keys: r, records: i } = e, a = new Sb({
		getFn: t,
		fieldNormWeight: n
	});
	return a.setKeys(r), a.setIndexRecords(i), a;
}
function Tb(e, { errors: t = 0, currentLocation: n = 0, expectedLocation: r = 0, distance: i = W.distance, ignoreLocation: a = W.ignoreLocation } = {}) {
	let o = t / e.length;
	if (a) return o;
	let s = Math.abs(r - n);
	return i ? o + s / i : s ? 1 : o;
}
function Eb(e = [], t = W.minMatchCharLength) {
	let n = [], r = -1, i = -1, a = 0;
	for (let o = e.length; a < o; a += 1) {
		let o = e[a];
		o && r === -1 ? r = a : !o && r !== -1 && (i = a - 1, i - r + 1 >= t && n.push([r, i]), r = -1);
	}
	return e[a - 1] && a - r >= t && n.push([r, a - 1]), n;
}
var Db = 32;
function Ob(e, t, n, { location: r = W.location, distance: i = W.distance, threshold: a = W.threshold, findAllMatches: o = W.findAllMatches, minMatchCharLength: s = W.minMatchCharLength, includeMatches: c = W.includeMatches, ignoreLocation: l = W.ignoreLocation } = {}) {
	if (t.length > Db) throw Error(sb(Db));
	let u = t.length, d = e.length, f = Math.max(0, Math.min(r, d)), p = a, m = f, h = s > 1 || c, g = h ? Array(d) : [], _;
	for (; (_ = e.indexOf(t, m)) > -1;) {
		let e = Tb(t, {
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
		for (; a < s;) Tb(t, {
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
			if (h && (g[o] = +!!s), S[a] = (S[a + 1] << 1 | 1) & s, r && (S[a] |= (v[a + 1] | v[a]) << 1 | 1 | v[a + 1]), S[a] & x && (y = Tb(t, {
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
		if (Tb(t, {
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
		let e = Eb(g, s);
		e.length ? c && (S.indices = e) : S.isMatch = !1;
	}
	return S;
}
function kb(e) {
	let t = {};
	for (let n = 0, r = e.length; n < r; n += 1) {
		let i = e.charAt(n);
		t[i] = (t[i] || 0) | 1 << r - n - 1;
	}
	return t;
}
var Ab = String.prototype.normalize ? ((e) => e.normalize("NFD").replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g, "")) : ((e) => e), jb = class {
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
		}, e = s ? e : e.toLowerCase(), e = c ? Ab(e) : e, this.pattern = e, this.chunks = [], !this.pattern.length) return;
		let u = (e, t) => {
			this.chunks.push({
				pattern: e,
				alphabet: kb(e),
				startIndex: t
			});
		}, d = this.pattern.length;
		if (d > Db) {
			let e = 0, t = d % Db, n = d - t;
			for (; e < n;) u(this.pattern.substr(e, Db), e), e += Db;
			if (t) {
				let e = d - Db;
				u(this.pattern.substr(e), e);
			}
		} else u(this.pattern, 0);
	}
	searchIn(e) {
		let { isCaseSensitive: t, ignoreDiacritics: n, includeMatches: r } = this.options;
		if (e = t ? e : e.toLowerCase(), e = n ? Ab(e) : e, this.pattern === e) {
			let t = {
				isMatch: !0,
				score: 0
			};
			return r && (t.indices = [[0, e.length - 1]]), t;
		}
		let { location: i, distance: a, threshold: o, findAllMatches: s, minMatchCharLength: c, ignoreLocation: l } = this.options, u = [], d = 0, f = !1;
		this.chunks.forEach(({ pattern: t, alphabet: n, startIndex: p }) => {
			let { isMatch: m, score: h, indices: g } = Ob(e, t, n, {
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
}, Mb = class {
	constructor(e) {
		this.pattern = e;
	}
	static isMultiMatch(e) {
		return Nb(e, this.multiRegex);
	}
	static isSingleMatch(e) {
		return Nb(e, this.singleRegex);
	}
	search() {}
};
function Nb(e, t) {
	let n = e.match(t);
	return n ? n[1] : null;
}
var Pb = class extends Mb {
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
}, Fb = class extends Mb {
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
}, Ib = class extends Mb {
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
}, Lb = class extends Mb {
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
}, Rb = class extends Mb {
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
}, zb = class extends Mb {
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
}, Bb = class extends Mb {
	constructor(e, { location: t = W.location, threshold: n = W.threshold, distance: r = W.distance, includeMatches: i = W.includeMatches, findAllMatches: a = W.findAllMatches, minMatchCharLength: o = W.minMatchCharLength, isCaseSensitive: s = W.isCaseSensitive, ignoreDiacritics: c = W.ignoreDiacritics, ignoreLocation: l = W.ignoreLocation } = {}) {
		super(e), this._bitapSearch = new jb(e, {
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
}, Vb = class extends Mb {
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
}, Hb = [
	Pb,
	Vb,
	Ib,
	Lb,
	zb,
	Rb,
	Fb,
	Bb
], Ub = Hb.length, Wb = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/, Gb = "|";
function Kb(e, t = {}) {
	return e.split(Gb).map((e) => {
		let n = e.trim().split(Wb).filter((e) => e && !!e.trim()), r = [];
		for (let e = 0, i = n.length; e < i; e += 1) {
			let i = n[e], a = !1, o = -1;
			for (; !a && ++o < Ub;) {
				let e = Hb[o], n = e.isMultiMatch(i);
				n && (r.push(new e(n, t)), a = !0);
			}
			if (!a) for (o = -1; ++o < Ub;) {
				let e = Hb[o], n = e.isSingleMatch(i);
				if (n) {
					r.push(new e(n, t));
					break;
				}
			}
		}
		return r;
	});
}
var qb = new Set([Bb.type, Vb.type]), Jb = class {
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
		}, e = t ? e : e.toLowerCase(), e = n ? Ab(e) : e, this.pattern = e, this.query = Kb(this.pattern, this.options);
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
		e = r ? e : e.toLowerCase(), e = i ? Ab(e) : e;
		let a = 0, o = [], s = 0;
		for (let r = 0, i = t.length; r < i; r += 1) {
			let i = t[r];
			o.length = 0, a = 0;
			for (let t = 0, r = i.length; t < r; t += 1) {
				let r = i[t], { isMatch: c, indices: l, score: u } = r.search(e);
				if (c) {
					if (a += 1, s += u, n) {
						let e = r.constructor.type;
						qb.has(e) ? o = [...o, ...l] : o.push(l);
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
}, Yb = [];
function Xb(...e) {
	Yb.push(...e);
}
function Zb(e, t) {
	for (let n = 0, r = Yb.length; n < r; n += 1) {
		let r = Yb[n];
		if (r.condition(e, t)) return new r(e, t);
	}
	return new jb(e, t);
}
var Qb = {
	AND: "$and",
	OR: "$or"
}, $b = {
	PATH: "$path",
	PATTERN: "$val"
}, ex = (e) => !!(e[Qb.AND] || e[Qb.OR]), tx = (e) => !!e[$b.PATH], nx = (e) => !qy(e) && eb(e) && !ex(e), rx = (e) => ({ [Qb.AND]: Object.keys(e).map((t) => ({ [t]: e[t] })) });
function ix(e, t, { auto: n = !0 } = {}) {
	let r = (e) => {
		let i = Object.keys(e), a = tx(e);
		if (!a && i.length > 1 && !ex(e)) return r(rx(e));
		if (nx(e)) {
			let r = a ? e[$b.PATH] : i[0], o = a ? e[$b.PATTERN] : e[r];
			if (!Zy(o)) throw Error(ob(r));
			let s = {
				keyId: mb(r),
				pattern: o
			};
			return n && (s.searcher = Zb(o, t)), s;
		}
		let o = {
			children: [],
			operator: i[0]
		};
		return i.forEach((t) => {
			let n = e[t];
			qy(n) && n.forEach((e) => {
				o.children.push(r(e));
			});
		}), o;
	};
	return ex(e) || (e = rx(e)), r(e);
}
function ax(e, { ignoreFieldNorm: t = W.ignoreFieldNorm }) {
	e.forEach((e) => {
		let n = 1;
		e.matches.forEach(({ key: e, norm: r, score: i }) => {
			let a = e ? e.weight : null;
			n *= (i === 0 && a ? 2 ** -52 : i) ** +((a || 1) * (t ? 1 : r));
		}), e.score = n;
	});
}
function ox(e, t) {
	let n = e.matches;
	t.matches = [], nb(n) && n.forEach((e) => {
		if (!nb(e.indices) || !e.indices.length) return;
		let { indices: n, value: r } = e, i = {
			indices: n,
			value: r
		};
		e.key && (i.key = e.key.src), e.idx > -1 && (i.refIndex = e.idx), t.matches.push(i);
	});
}
function sx(e, t) {
	t.score = e.score;
}
function cx(e, t, { includeMatches: n = W.includeMatches, includeScore: r = W.includeScore } = {}) {
	let i = [];
	return n && i.push(ox), r && i.push(sx), e.map((e) => {
		let { idx: n } = e, r = {
			item: t[n],
			refIndex: n
		};
		return i.length && i.forEach((t) => {
			t(e, r);
		}), r;
	});
}
var lx = class {
	constructor(e, t = {}, n) {
		this.options = {
			...W,
			...t
		}, this.options.useExtendedSearch, this._keyStore = new db(this.options.keys), this.setCollection(e, n);
	}
	setCollection(e, t) {
		if (this._docs = e, t && !(t instanceof Sb)) throw Error(ab);
		this._myIndex = t || Cb(this.options.keys, this._docs, {
			getFn: this.options.getFn,
			fieldNormWeight: this.options.fieldNormWeight
		});
	}
	add(e) {
		nb(e) && (this._docs.push(e), this._myIndex.add(e));
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
		let { includeMatches: n, includeScore: r, shouldSort: i, sortFn: a, ignoreFieldNorm: o } = this.options, s = Zy(e) ? Zy(this._docs[0]) ? this._searchStringList(e) : this._searchObjectList(e) : this._searchLogical(e);
		return ax(s, { ignoreFieldNorm: o }), i && s.sort(a), Qy(t) && t > -1 && (s = s.slice(0, t)), cx(s, this._docs, {
			includeMatches: n,
			includeScore: r
		});
	}
	_searchStringList(e) {
		let t = Zb(e, this.options), { records: n } = this._myIndex, r = [];
		return n.forEach(({ v: e, i: n, n: i }) => {
			if (!nb(e)) return;
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
		let t = ix(e, this.options), n = (e, t, r) => {
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
				else if (e.operator === Qb.AND) return [];
			}
			return i;
		}, r = this._myIndex.records, i = {}, a = [];
		return r.forEach(({ $: e, i: r }) => {
			if (nb(e)) {
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
		let t = Zb(e, this.options), { keys: n, records: r } = this._myIndex, i = [];
		return r.forEach(({ $: e, i: r }) => {
			if (!nb(e)) return;
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
		if (!nb(t)) return [];
		let r = [];
		if (qy(t)) t.forEach(({ v: t, i, n: a }) => {
			if (!nb(t)) return;
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
lx.version = "7.1.0", lx.createIndex = Cb, lx.parseIndex = wb, lx.config = W, lx.parseQuery = ix, Xb(Jb);
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
function fx({ currentIcon: e, onIconSelected: t }) {
	let n = /* @__PURE__ */ "search.home.info.check_circle.delete.visibility.book.favorite.description.lock.schedule.language.help_outline.verified.face.thumb_up.filter_alt.dashboard.event.fingerprint.list.help.paid.assignment.question_answer.article.lightbulb.credit_card.account_balance.trending_up".split("."), [r, i] = (0, I.useState)(n), [a, o] = (0, I.useState)(""), s = (0, I.useId)(), c = new lx(Ky, {
		threshold: .3,
		minMatchCharLength: 2
	});
	function l(e) {
		let t = e.currentTarget.value;
		o(t), i(t === "" ? n : c.search(t).map((e) => e.item.toString()));
	}
	function u() {
		o(""), i(n);
	}
	function d(e) {
		e && t(e);
	}
	return /* @__PURE__ */ (0, F.jsxs)(nu, {
		onSelect: d,
		onToggle: (e) => {
			e && u();
		},
		children: [/* @__PURE__ */ (0, F.jsx)(nu.Toggle, {
			as: ux,
			variant: e ? "outline-dark" : "success",
			className: "d-block icon-selector pb-1",
			id: s,
			children: /* @__PURE__ */ (0, F.jsx)("span", {
				className: "material-icons-outlined mb-0",
				children: e || "add"
			})
		}), /* @__PURE__ */ (0, F.jsx)(nu.Menu, {
			as: dx,
			className: "p-0 border-0",
			popperConfig: { strategy: "fixed" },
			children: /* @__PURE__ */ (0, F.jsxs)("div", {
				className: "icon-list-popup border rounded-sm shadow",
				children: [/* @__PURE__ */ (0, F.jsx)(Nu, { children: /* @__PURE__ */ (0, F.jsx)(H.Group, {
					size: "sm",
					children: /* @__PURE__ */ (0, F.jsx)(H.Control, {
						autoFocus: !0,
						type: "text",
						className: "m-0",
						placeholder: "Search icons",
						trailingElement: /* @__PURE__ */ (0, F.jsx)("span", {
							className: "material-icons-outlined medium text-gray-500",
							children: "search"
						}),
						value: a,
						onChange: l
					})
				}) }), /* @__PURE__ */ (0, F.jsx)("div", {
					className: "icon-list d-flex flex-wrap justify-items-start",
					children: r.map((e) => /* @__PURE__ */ (0, F.jsx)(nu.Item, {
						as: "button",
						type: "button",
						eventKey: e,
						className: "icon-symbol p-2",
						children: /* @__PURE__ */ (0, F.jsx)("span", {
							className: "material-icons-outlined",
							children: e
						})
					}, e))
				})]
			})
		})]
	});
}
//#endregion
//#region src/card/common/studio-ui/secondary-content/HoverListItemForm.tsx
function px({ cardIndex: e, itemIndex: t, onRemove: n }) {
	let { values: r, handleChange: i, setFieldValue: a } = sy(), o = `cards[${e}].secondaryContent.items[${t}]`, s = r.cards[e].secondaryContent.items[t];
	return /* @__PURE__ */ (0, F.jsx)(Gy, {
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
					}), /* @__PURE__ */ (0, F.jsx)(fx, {
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
function mx({ cardIndex: e }) {
	return /* @__PURE__ */ (0, F.jsx)(By, {
		name: `cards[${e}].secondaryContent.items`,
		children: ({ push: t, remove: n, form: r }) => {
			let i = r.values.cards[e].secondaryContent.items;
			return /* @__PURE__ */ (0, F.jsxs)("div", { children: [i.map((t, r) => /* @__PURE__ */ (0, F.jsx)(px, {
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
var hx = ({ fileTypes: e, onFileSelect: t, onError: n, onClose: r }) => {
	let [i, a] = (0, I.useState)(null), { element: o } = (0, I.useContext)(C), s = Tp(), c = (0, I.useRef)(null), l = o.getAttribute("data-usage-id");
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
	return u.searchParams.set("multiSelect", "false"), u.searchParams.set("embedded", "true"), e && u.searchParams.set("fileTypes", e.join(",")), u.searchParams.set("usageKey", l), /* @__PURE__ */ (0, F.jsx)(gu, {
		title: "File Picker",
		size: "xl",
		isOpen: !0,
		className: "bg-light-200",
		onClose: r,
		footerNode: /* @__PURE__ */ (0, F.jsxs)(ke, { children: [
			/* @__PURE__ */ (0, F.jsx)(ke.Spacer, {}),
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
}, gx = ({ children: e, setValue: t, fileTypes: n = null }) => {
	let [r, i] = (0, I.useState)(!1), [a, o] = (0, I.useState)(null), s = Tp(), c = (0, I.useCallback)(async (e) => {
		try {
			await t(e), o(null);
		} catch (e) {
			o(e.message);
		}
		i(!1);
	}, [t]);
	return s?.file_picker_url ? /* @__PURE__ */ (0, F.jsxs)(F.Fragment, { children: [
		/* @__PURE__ */ (0, F.jsxs)(xn, { children: [e, /* @__PURE__ */ (0, F.jsx)(xn.Append, { children: /* @__PURE__ */ (0, F.jsx)(O, {
			variant: "outline-secondary",
			onClick: () => i(!0),
			children: "Select File"
		}) })] }),
		a && /* @__PURE__ */ (0, F.jsx)(H.Control.Feedback, {
			type: "default",
			children: a
		}),
		r && /* @__PURE__ */ (0, F.jsx)(hx, {
			fileTypes: n,
			onFileSelect: c,
			onError: o,
			onClose: () => i(!1)
		})
	] }) : e;
};
//#endregion
//#region src/card/common/studio-ui/secondary-content/ImageForm.tsx
function _x({ cardIndex: e }) {
	let { values: t, handleChange: n, setFieldValue: r } = sy(), [i, a] = (0, I.useState)(!1), o = t.cards[e], s = `cards[${e}].secondaryContent`, c = o.secondaryContent, l = o.orientation, u = null;
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
			/* @__PURE__ */ (0, F.jsx)(gx, {
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
function vx({ cardIndex: e, itemIndex: t, onRemove: n }) {
	let { values: r, handleChange: i, setFieldValue: a } = sy(), o = `cards[${e}].secondaryContent.items[${t}]`, s = r.cards[e].secondaryContent.items?.[t];
	return /* @__PURE__ */ (0, F.jsx)(Gy, {
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
					}), /* @__PURE__ */ (0, F.jsx)(fx, {
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
function yx({ cardIndex: e }) {
	return /* @__PURE__ */ (0, F.jsx)(By, {
		name: `cards[${e}].secondaryContent.items`,
		children: ({ push: t, remove: n, form: r }) => {
			let i = r.values.cards[e].secondaryContent.items;
			return /* @__PURE__ */ (0, F.jsxs)("div", { children: [i.map((t, r) => /* @__PURE__ */ (0, F.jsx)(vx, {
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
function bx({ cardIndex: e }) {
	let { values: t, handleChange: n } = sy(), r = `cards[${e}].secondaryContent`, i = t.cards[e].secondaryContent;
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
function xx(e) {
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
var Sx = {
	IMAGE: _x,
	RICH_LIST: yx,
	CONTENT_HIGHLIGHT: bx,
	HOVER_LIST: mx
};
function Cx({ cardIndex: e }) {
	let { values: t, handleChange: n, handleBlur: r, setFieldValue: i } = sy(), a = t.cards[e], o = `cards[${e}]`, s = !!(a?.ctaLink && a?.ctaLabel), [c, l] = (0, I.useState)(s), u = a.secondaryContent?.kind ? Sx[a.secondaryContent.kind] : null;
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
function wx({ cardIndex: e, enableOrientation: t = !1 }) {
	let { values: n, setFieldValue: r, handleChange: i, handleBlur: a } = sy(), o = n.cards[e], s = `cards[${e}]`, c = o.orientation;
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
				r(`${s}.cardType`, e.currentTarget.value), r(`${s}.secondaryContent`, xx(e.currentTarget.value));
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
		o.secondaryContent?.kind && /* @__PURE__ */ (0, F.jsx)(Cx, { cardIndex: e })
	] });
}
//#endregion
//#region node_modules/.pnpm/@preact+signals-core@1.14.1/node_modules/@preact/signals-core/dist/signals-core.module.js
var Tx = Symbol.for("preact-signals");
function Ex() {
	if (Ax > 1) Ax--;
	else {
		var e, t = !1;
		for ((function() {
			var e = Px;
			for (Px = void 0; e !== void 0;) e.S.v === e.v && (e.S.i = e.i), e = e.o;
		})(); kx !== void 0;) {
			var n = kx;
			for (kx = void 0, jx++; n !== void 0;) {
				var r = n.u;
				if (n.u = void 0, n.f &= -3, !(8 & n.f) && zx(n)) try {
					n.c();
				} catch (n) {
					t ||= (e = n, !0);
				}
				n = r;
			}
		}
		if (jx = 0, Ax--, t) throw e;
	}
}
function Dx(e) {
	if (Ax > 0) return e();
	Nx = ++Mx, Ax++;
	try {
		return e();
	} finally {
		Ex();
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
var Ox, kx = void 0, Ax = 0, jx = 0, Mx = 0, Nx = 0, Px = void 0, Fx = 0;
function Ix(e) {
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
function Lx(e, t) {
	this.v = e, this.i = 0, this.n = void 0, this.t = void 0, this.l = 0, this.W = t?.watched, this.Z = t?.unwatched, this.name = t?.name;
}
Lx.prototype.brand = Tx, Lx.prototype.h = function() {
	return !0;
}, Lx.prototype.S = function(e) {
	var t = this, n = this.t;
	n !== e && e.e === void 0 && (e.x = n, this.t = e, n === void 0 ? K(function() {
		var e;
		(e = t.W) == null || e.call(t);
	}) : n.e = e);
}, Lx.prototype.U = function(e) {
	var t = this;
	if (this.t !== void 0) {
		var n = e.e, r = e.x;
		n !== void 0 && (n.x = r, e.e = void 0), r !== void 0 && (r.e = n, e.x = void 0), e === this.t && (this.t = r, r === void 0 && K(function() {
			var e;
			(e = t.Z) == null || e.call(t);
		}));
	}
}, Lx.prototype.subscribe = function(e) {
	var t = this;
	return Jx(function() {
		var n = t.value, r = G;
		G = void 0;
		try {
			e(n);
		} finally {
			G = r;
		}
	}, { name: "sub" });
}, Lx.prototype.valueOf = function() {
	return this.value;
}, Lx.prototype.toString = function() {
	return this.value + "";
}, Lx.prototype.toJSON = function() {
	return this.value;
}, Lx.prototype.peek = function() {
	var e = G;
	G = void 0;
	try {
		return this.value;
	} finally {
		G = e;
	}
}, Object.defineProperty(Lx.prototype, "value", {
	get: function() {
		var e = Ix(this);
		return e !== void 0 && (e.i = this.i), this.v;
	},
	set: function(e) {
		if (e !== this.v) {
			if (jx > 100) throw Error("Cycle detected");
			(function(e) {
				Ax !== 0 && jx === 0 && e.l !== Nx && (e.l = Nx, Px = {
					S: e,
					v: e.v,
					i: e.i,
					o: Px
				});
			})(this), this.v = e, this.i++, Fx++, Ax++;
			try {
				for (var t = this.t; t !== void 0; t = t.x) t.t.N();
			} finally {
				Ex();
			}
		}
	}
});
function Rx(e, t) {
	return new Lx(e, t);
}
function zx(e) {
	for (var t = e.s; t !== void 0; t = t.n) if (t.S.i !== t.i || !t.S.h() || t.S.i !== t.i) return !0;
	return !1;
}
function Bx(e) {
	for (var t = e.s; t !== void 0; t = t.n) {
		var n = t.S.n;
		if (n !== void 0 && (t.r = n), t.S.n = t, t.i = -1, t.n === void 0) {
			e.s = t;
			break;
		}
	}
}
function Vx(e) {
	for (var t = e.s, n = void 0; t !== void 0;) {
		var r = t.p;
		t.i === -1 ? (t.S.U(t), r !== void 0 && (r.n = t.n), t.n !== void 0 && (t.n.p = r)) : n = t, t.S.n = t.r, t.r !== void 0 && (t.r = void 0), t = r;
	}
	e.s = n;
}
function Hx(e, t) {
	Lx.call(this, void 0), this.x = e, this.s = void 0, this.g = Fx - 1, this.f = 4, this.W = t?.watched, this.Z = t?.unwatched, this.name = t?.name;
}
Hx.prototype = new Lx(), Hx.prototype.h = function() {
	if (this.f &= -3, 1 & this.f) return !1;
	if ((36 & this.f) == 32 || (this.f &= -5, this.g === Fx)) return !0;
	if (this.g = Fx, this.f |= 1, this.i > 0 && !zx(this)) return this.f &= -2, !0;
	var e = G;
	try {
		Bx(this), G = this;
		var t = this.x();
		(16 & this.f || this.v !== t || this.i === 0) && (this.v = t, this.f &= -17, this.i++);
	} catch (e) {
		this.v = e, this.f |= 16, this.i++;
	}
	return G = e, Vx(this), this.f &= -2, !0;
}, Hx.prototype.S = function(e) {
	if (this.t === void 0) {
		this.f |= 36;
		for (var t = this.s; t !== void 0; t = t.n) t.S.S(t);
	}
	Lx.prototype.S.call(this, e);
}, Hx.prototype.U = function(e) {
	if (this.t !== void 0 && (Lx.prototype.U.call(this, e), this.t === void 0)) {
		this.f &= -33;
		for (var t = this.s; t !== void 0; t = t.n) t.S.U(t);
	}
}, Hx.prototype.N = function() {
	if (!(2 & this.f)) {
		this.f |= 6;
		for (var e = this.t; e !== void 0; e = e.x) e.t.N();
	}
}, Object.defineProperty(Hx.prototype, "value", { get: function() {
	if (1 & this.f) throw Error("Cycle detected");
	var e = Ix(this);
	if (this.h(), e !== void 0 && (e.i = this.i), 16 & this.f) throw this.v;
	return this.v;
} });
function Ux(e, t) {
	return new Hx(e, t);
}
function Wx(e) {
	var t = e.m;
	if (e.m = void 0, typeof t == "function") {
		Ax++;
		var n = G;
		G = void 0;
		try {
			t();
		} catch (t) {
			throw e.f &= -2, e.f |= 8, Gx(e), t;
		} finally {
			G = n, Ex();
		}
	}
}
function Gx(e) {
	for (var t = e.s; t !== void 0; t = t.n) t.S.U(t);
	e.x = void 0, e.s = void 0, Wx(e);
}
function Kx(e) {
	if (G !== this) throw Error("Out-of-order effect");
	Vx(this), G = e, this.f &= -2, 8 & this.f && Gx(this), Ex();
}
function qx(e, t) {
	this.x = e, this.m = void 0, this.s = void 0, this.u = void 0, this.f = 32, this.name = t?.name, Ox && Ox.push(this);
}
qx.prototype.c = function() {
	var e = this.S();
	try {
		if (8 & this.f || this.x === void 0) return;
		var t = this.x();
		typeof t == "function" && (this.m = t);
	} finally {
		e();
	}
}, qx.prototype.S = function() {
	if (1 & this.f) throw Error("Cycle detected");
	this.f |= 1, this.f &= -9, Wx(this), Bx(this), Ax++;
	var e = G;
	return G = this, Kx.bind(this, e);
}, qx.prototype.N = function() {
	2 & this.f || (this.f |= 2, this.u = kx, kx = this);
}, qx.prototype.d = function() {
	this.f |= 8, 1 & this.f || Gx(this);
}, qx.prototype.dispose = function() {
	this.d();
};
function Jx(e, t) {
	var n = new qx(e, t);
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
var Yx = Object.create, Xx = Object.defineProperty, Zx = Object.defineProperties, Qx = Object.getOwnPropertyDescriptor, $x = Object.getOwnPropertyDescriptors, eS = Object.getOwnPropertySymbols, tS = Object.prototype.hasOwnProperty, nS = Object.prototype.propertyIsEnumerable, rS = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e), iS = (e) => {
	throw TypeError(e);
}, aS = (e, t, n) => t in e ? Xx(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, oS = (e, t) => {
	for (var n in t ||= {}) tS.call(t, n) && aS(e, n, t[n]);
	if (eS) for (var n of eS(t)) nS.call(t, n) && aS(e, n, t[n]);
	return e;
}, sS = (e, t) => Zx(e, $x(t)), cS = (e, t) => Xx(e, "name", {
	value: t,
	configurable: !0
}), lS = (e) => [
	,
	,
	,
	Yx(e?.[rS("metadata")] ?? null)
], uS = [
	"class",
	"method",
	"getter",
	"setter",
	"accessor",
	"field",
	"value",
	"get",
	"set"
], dS = (e) => e !== void 0 && typeof e != "function" ? iS("Function expected") : e, fS = (e, t, n, r, i) => ({
	kind: uS[e],
	name: t,
	metadata: r,
	addInitializer: (e) => n._ ? iS("Already initialized") : i.push(dS(e || null))
}), pS = (e, t) => aS(t, rS("metadata"), e[3]), mS = (e, t, n, r) => {
	for (var i = 0, a = e[t >> 1], o = a && a.length; i < o; i++) t & 1 ? a[i].call(n) : r = a[i].call(n, r);
	return r;
}, hS = (e, t, n, r, i, a) => {
	var o, s, c, l, u, d = t & 7, f = !!(t & 8), p = !!(t & 16), m = d > 3 ? e.length + 1 : d ? f ? 1 : 2 : 0, h = uS[d + 5], g = d > 3 && (e[m - 1] = []), _ = e[m] || (e[m] = []), v = d && (!p && !f && (i = i.prototype), d < 5 && (d > 3 || !p) && Qx(d < 4 ? i : {
		get [n]() {
			return vS(this, a);
		},
		set [n](e) {
			return bS(this, a, e);
		}
	}, n));
	d ? p && d < 4 && cS(a, (d > 2 ? "set " : d > 1 ? "get " : "") + n) : cS(i, n);
	for (var y = r.length - 1; y >= 0; y--) l = fS(d, n, c = {}, e[3], _), d && (l.static = f, l.private = p, u = l.access = { has: p ? (e) => _S(i, e) : (e) => n in e }, d ^ 3 && (u.get = p ? (e) => (d ^ 1 ? vS : xS)(e, i, d ^ 4 ? a : v.get) : (e) => e[n]), d > 2 && (u.set = p ? (e, t) => bS(e, i, t, d ^ 4 ? a : v.set) : (e, t) => e[n] = t)), s = (0, r[y])(d ? d < 4 ? p ? a : v[h] : d > 4 ? void 0 : {
		get: v.get,
		set: v.set
	} : i, l), c._ = 1, d ^ 4 || s === void 0 ? dS(s) && (d > 4 ? g.unshift(s) : d ? p ? a = s : v[h] = s : i = s) : typeof s != "object" || !s ? iS("Object expected") : (dS(o = s.get) && (v.get = o), dS(o = s.set) && (v.set = o), dS(o = s.init) && g.unshift(o));
	return d || pS(e, i), v && Xx(i, n, v), p ? d ^ 4 ? a : v : i;
}, gS = (e, t, n) => t.has(e) || iS("Cannot " + n), _S = (e, t) => Object(t) === t ? e.has(t) : iS("Cannot use the \"in\" operator on this value"), vS = (e, t, n) => (gS(e, t, "read from private field"), n ? n.call(e) : t.get(e)), yS = (e, t, n) => t.has(e) ? iS("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), bS = (e, t, n, r) => (gS(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), xS = (e, t, n) => (gS(e, t, "access private method"), n);
function SS(e, t) {
	if (t) {
		let n;
		return Ux(() => {
			let r = e();
			return r && n && t(n, r) ? n : (n = r, r);
		});
	}
	return Ux(e);
}
function CS(e, t) {
	if (Object.is(e, t)) return !0;
	if (e === null || t === null) return !1;
	if (typeof e == "function" && typeof t == "function") return e === t;
	if (e instanceof Set && t instanceof Set) {
		if (e.size !== t.size) return !1;
		for (let n of e) if (!t.has(n)) return !1;
		return !0;
	}
	if (Array.isArray(e)) return !Array.isArray(t) || e.length !== t.length ? !1 : !e.some((e, n) => !CS(e, t[n]));
	if (typeof e == "object" && typeof t == "object") {
		let n = Object.keys(e), r = Object.keys(t);
		return n.length === r.length ? !n.some((n) => !CS(e[n], t[n])) : !1;
	}
	return !1;
}
function q({ get: e }, t) {
	return {
		init(e) {
			return Rx(e);
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
function wS(e, t) {
	let n = /* @__PURE__ */ new WeakMap();
	return function() {
		let t = n.get(this);
		return t || (t = SS(e.bind(this)), n.set(this, t)), t.value;
	};
}
function TS(e = !0) {
	return function(t, n) {
		n.addInitializer(function() {
			let t = n.kind === "field" || n.static ? this : Object.getPrototypeOf(this), r = Object.getOwnPropertyDescriptor(t, n.name);
			r && Object.defineProperty(t, n.name, sS(oS({}, r), { enumerable: e }));
		});
	};
}
function ES(...e) {
	let t = e.map((e) => Jx(e));
	return () => t.forEach((e) => e());
}
var DS, OS, kS, AS, jS, MS = [q], NS, PS, FS, IS, LS, RS, zS, BS, VS, HS, US, WS, GS, KS;
jS = [q], AS = [q], kS = [TS()], OS = [TS()], DS = [TS()];
var qS = class {
	constructor(e, t = Object.is) {
		this.defaultValue = e, this.equals = t, mS(NS, 5, this), yS(this, RS), yS(this, PS, mS(NS, 8, this)), mS(NS, 11, this), yS(this, zS, mS(NS, 12, this)), mS(NS, 15, this), yS(this, US, mS(NS, 16, this)), mS(NS, 19, this), this.reset = this.reset.bind(this), this.reset();
	}
	get current() {
		return vS(this, RS, GS);
	}
	get initial() {
		return vS(this, RS, IS);
	}
	get previous() {
		return vS(this, RS, VS);
	}
	set current(e) {
		let t = K(() => vS(this, RS, GS));
		e && t && this.equals(t, e) || Dx(() => {
			vS(this, RS, IS) || bS(this, RS, e, LS), bS(this, RS, t, HS), bS(this, RS, e, KS);
		});
	}
	reset(e = this.defaultValue) {
		Dx(() => {
			bS(this, RS, void 0, HS), bS(this, RS, e, LS), bS(this, RS, e, KS);
		});
	}
};
NS = lS(null), PS = /* @__PURE__ */ new WeakMap(), RS = /* @__PURE__ */ new WeakSet(), zS = /* @__PURE__ */ new WeakMap(), US = /* @__PURE__ */ new WeakMap(), FS = hS(NS, 20, "#initial", MS, RS, PS), IS = FS.get, LS = FS.set, BS = hS(NS, 20, "#previous", jS, RS, zS), VS = BS.get, HS = BS.set, WS = hS(NS, 20, "#current", AS, RS, US), GS = WS.get, KS = WS.set, hS(NS, 2, "current", kS, qS), hS(NS, 2, "initial", OS, qS), hS(NS, 2, "previous", DS, qS), pS(NS, qS);
function JS(e) {
	return K(() => {
		let t = {};
		for (let n in e) t[n] = e[n];
		return t;
	});
}
var YS, XS = class {
	constructor() {
		yS(this, YS, /* @__PURE__ */ new WeakMap());
	}
	get(e, t) {
		return e ? vS(this, YS).get(e)?.get(t) : void 0;
	}
	set(e, t, n) {
		if (e) return vS(this, YS).has(e) || vS(this, YS).set(e, /* @__PURE__ */ new Map()), vS(this, YS).get(e)?.set(t, n);
	}
	clear(e) {
		return e ? vS(this, YS).get(e)?.clear() : void 0;
	}
};
YS = /* @__PURE__ */ new WeakMap();
//#endregion
//#region node_modules/.pnpm/@dnd-kit+geometry@0.3.2/node_modules/@dnd-kit/geometry/dist/index.mjs
var ZS = Object.create, QS = Object.defineProperty, $S = Object.getOwnPropertyDescriptor, eC = Object.getOwnPropertySymbols, tC = Object.prototype.hasOwnProperty, nC = Object.prototype.propertyIsEnumerable, rC = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e), iC = (e) => {
	throw TypeError(e);
}, aC = Math.pow, oC = (e, t, n) => t in e ? QS(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, sC = (e, t) => {
	for (var n in t ||= {}) tC.call(t, n) && oC(e, n, t[n]);
	if (eC) for (var n of eC(t)) nC.call(t, n) && oC(e, n, t[n]);
	return e;
}, cC = (e, t) => QS(e, "name", {
	value: t,
	configurable: !0
}), lC = (e) => [
	,
	,
	,
	ZS(e?.[rC("metadata")] ?? null)
], uC = [
	"class",
	"method",
	"getter",
	"setter",
	"accessor",
	"field",
	"value",
	"get",
	"set"
], dC = (e) => e !== void 0 && typeof e != "function" ? iC("Function expected") : e, fC = (e, t, n, r, i) => ({
	kind: uC[e],
	name: t,
	metadata: r,
	addInitializer: (e) => n._ ? iC("Already initialized") : i.push(dC(e || null))
}), pC = (e, t) => oC(t, rC("metadata"), e[3]), mC = (e, t, n, r) => {
	for (var i = 0, a = e[t >> 1], o = a && a.length; i < o; i++) t & 1 ? a[i].call(n) : r = a[i].call(n, r);
	return r;
}, hC = (e, t, n, r, i, a) => {
	var o, s, c, l, u, d = t & 7, f = !!(t & 8), p = !!(t & 16), m = d > 3 ? e.length + 1 : d ? f ? 1 : 2 : 0, h = uC[d + 5], g = d > 3 && (e[m - 1] = []), _ = e[m] || (e[m] = []), v = d && (!p && !f && (i = i.prototype), d < 5 && (d > 3 || !p) && $S(d < 4 ? i : {
		get [n]() {
			return vC(this, a);
		},
		set [n](e) {
			return bC(this, a, e);
		}
	}, n));
	d ? p && d < 4 && cC(a, (d > 2 ? "set " : d > 1 ? "get " : "") + n) : cC(i, n);
	for (var y = r.length - 1; y >= 0; y--) l = fC(d, n, c = {}, e[3], _), d && (l.static = f, l.private = p, u = l.access = { has: p ? (e) => _C(i, e) : (e) => n in e }, d ^ 3 && (u.get = p ? (e) => (d ^ 1 ? vC : xC)(e, i, d ^ 4 ? a : v.get) : (e) => e[n]), d > 2 && (u.set = p ? (e, t) => bC(e, i, t, d ^ 4 ? a : v.set) : (e, t) => e[n] = t)), s = (0, r[y])(d ? d < 4 ? p ? a : v[h] : d > 4 ? void 0 : {
		get: v.get,
		set: v.set
	} : i, l), c._ = 1, d ^ 4 || s === void 0 ? dC(s) && (d > 4 ? g.unshift(s) : d ? p ? a = s : v[h] = s : i = s) : typeof s != "object" || !s ? iC("Object expected") : (dC(o = s.get) && (v.get = o), dC(o = s.set) && (v.set = o), dC(o = s.init) && g.unshift(o));
	return d || pC(e, i), v && QS(i, n, v), p ? d ^ 4 ? a : v : i;
}, gC = (e, t, n) => t.has(e) || iC("Cannot " + n), _C = (e, t) => Object(t) === t ? e.has(t) : iC("Cannot use the \"in\" operator on this value"), vC = (e, t, n) => (gC(e, t, "read from private field"), n ? n.call(e) : t.get(e)), yC = (e, t, n) => t.has(e) ? iC("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), bC = (e, t, n, r) => (gC(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), xC = (e, t, n) => (gC(e, t, "access private method"), n), SC = class e {
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
}, CC = class e {
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
		return c.scale = sC({}, s), c;
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
		return new SC((e + n) / 2, (t + r) / 2);
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
		return t instanceof e ? wC(this, t) : 0;
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
		return SC.delta({
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
function wC(e, t) {
	let n = Math.max(t.top, e.top), r = Math.max(t.left, e.left), i = Math.min(t.left + t.width, e.left + e.width), a = Math.min(t.top + t.height, e.top + e.height), o = i - r, s = a - n;
	return r < i && n < a ? o * s : 0;
}
var TC, EC, DC, OC, kC, AC = class extends (DC = qS, EC = [wS], TC = [wS], DC) {
	constructor(e) {
		let t = SC.from(e);
		super(t, (e, t) => SC.equals(e, t)), mC(kC, 5, this), yC(this, OC, 0), this.velocity = {
			x: 0,
			y: 0
		};
	}
	get delta() {
		return SC.delta(this.current, this.initial);
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
		let { current: t } = this, n = SC.from(e), r = {
			x: n.x - t.x,
			y: n.y - t.y
		}, i = Date.now(), a = i - vC(this, OC), o = (e) => Math.round(e / a * 100);
		Dx(() => {
			bC(this, OC, i), this.velocity = {
				x: o(r.x),
				y: o(r.y)
			}, super.current = n;
		});
	}
	reset(e = this.defaultValue) {
		super.reset(SC.from(e)), this.velocity = {
			x: 0,
			y: 0
		};
	}
};
kC = lC(DC), OC = /* @__PURE__ */ new WeakMap(), hC(kC, 2, "delta", EC, AC), hC(kC, 2, "direction", TC, AC), pC(kC, AC);
function jC({ x: e, y: t }, n) {
	let r = Math.abs(e), i = Math.abs(t);
	return typeof n == "number" ? Math.sqrt(aC(r, 2) + aC(i, 2)) > n : "x" in n && "y" in n ? r > n.x && i > n.y : "x" in n ? r > n.x : "y" in n ? i > n.y : !1;
}
var MC = /* @__PURE__ */ ((e) => (e.Horizontal = "x", e.Vertical = "y", e))(MC || {}), NC = Object.values(MC), PC = Object.create, FC = Object.defineProperty, IC = Object.defineProperties, LC = Object.getOwnPropertyDescriptor, RC = Object.getOwnPropertyDescriptors, zC = Object.getOwnPropertySymbols, BC = Object.prototype.hasOwnProperty, VC = Object.prototype.propertyIsEnumerable, HC = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e), UC = (e) => {
	throw TypeError(e);
}, WC = (e, t, n) => t in e ? FC(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, GC = (e, t) => {
	for (var n in t ||= {}) BC.call(t, n) && WC(e, n, t[n]);
	if (zC) for (var n of zC(t)) VC.call(t, n) && WC(e, n, t[n]);
	return e;
}, KC = (e, t) => IC(e, RC(t)), qC = (e, t) => FC(e, "name", {
	value: t,
	configurable: !0
}), JC = (e, t) => {
	var n = {};
	for (var r in e) BC.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && zC) for (var r of zC(e)) t.indexOf(r) < 0 && VC.call(e, r) && (n[r] = e[r]);
	return n;
}, YC = (e) => [
	,
	,
	,
	PC(e?.[HC("metadata")] ?? null)
], XC = [
	"class",
	"method",
	"getter",
	"setter",
	"accessor",
	"field",
	"value",
	"get",
	"set"
], ZC = (e) => e !== void 0 && typeof e != "function" ? UC("Function expected") : e, QC = (e, t, n, r, i) => ({
	kind: XC[e],
	name: t,
	metadata: r,
	addInitializer: (e) => n._ ? UC("Already initialized") : i.push(ZC(e || null))
}), $C = (e, t) => WC(t, HC("metadata"), e[3]), J = (e, t, n, r) => {
	for (var i = 0, a = e[t >> 1], o = a && a.length; i < o; i++) t & 1 ? a[i].call(n) : r = a[i].call(n, r);
	return r;
}, Y = (e, t, n, r, i, a) => {
	var o, s, c, l, u, d = t & 7, f = !!(t & 8), p = !!(t & 16), m = d > 3 ? e.length + 1 : d ? f ? 1 : 2 : 0, h = XC[d + 5], g = d > 3 && (e[m - 1] = []), _ = e[m] || (e[m] = []), v = d && (!p && !f && (i = i.prototype), d < 5 && (d > 3 || !p) && LC(d < 4 ? i : {
		get [n]() {
			return nw(this, a);
		},
		set [n](e) {
			return rw(this, a, e);
		}
	}, n));
	d ? p && d < 4 && qC(a, (d > 2 ? "set " : d > 1 ? "get " : "") + n) : qC(i, n);
	for (var y = r.length - 1; y >= 0; y--) l = QC(d, n, c = {}, e[3], _), d && (l.static = f, l.private = p, u = l.access = { has: p ? (e) => tw(i, e) : (e) => n in e }, d ^ 3 && (u.get = p ? (e) => (d ^ 1 ? nw : iw)(e, i, d ^ 4 ? a : v.get) : (e) => e[n]), d > 2 && (u.set = p ? (e, t) => rw(e, i, t, d ^ 4 ? a : v.set) : (e, t) => e[n] = t)), s = (0, r[y])(d ? d < 4 ? p ? a : v[h] : d > 4 ? void 0 : {
		get: v.get,
		set: v.set
	} : i, l), c._ = 1, d ^ 4 || s === void 0 ? ZC(s) && (d > 4 ? g.unshift(s) : d ? p ? a = s : v[h] = s : i = s) : typeof s != "object" || !s ? UC("Object expected") : (ZC(o = s.get) && (v.get = o), ZC(o = s.set) && (v.set = o), ZC(o = s.init) && g.unshift(o));
	return d || $C(e, i), v && FC(i, n, v), p ? d ^ 4 ? a : v : i;
}, ew = (e, t, n) => t.has(e) || UC("Cannot " + n), tw = (e, t) => Object(t) === t ? e.has(t) : UC("Cannot use the \"in\" operator on this value"), nw = (e, t, n) => (ew(e, t, "read from private field"), n ? n.call(e) : t.get(e)), X = (e, t, n) => t.has(e) ? UC("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), rw = (e, t, n, r) => (ew(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), iw = (e, t, n) => (ew(e, t, "access private method"), n);
function aw(e, t) {
	return {
		plugin: e,
		options: t
	};
}
function ow(e) {
	return (t) => aw(e, t);
}
function sw(e) {
	return typeof e == "function" ? {
		plugin: e,
		options: void 0
	} : e;
}
var cw = [q], lw, uw, dw, fw = class {
	constructor(e, t) {
		this.manager = e, this.options = t, X(this, uw, J(lw, 8, this, !1)), J(lw, 11, this), X(this, dw, /* @__PURE__ */ new Set());
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
		let t = Jx(e.bind(this));
		return nw(this, dw).add(t), t;
	}
	destroy() {
		nw(this, dw).forEach((e) => e());
	}
	static configure(e) {
		return aw(this, e);
	}
};
lw = YC(null), uw = /* @__PURE__ */ new WeakMap(), dw = /* @__PURE__ */ new WeakMap(), Y(lw, 4, "disabled", cw, fw, uw), $C(lw, fw);
var pw = class extends fw {}, mw, hw = class {
	constructor(e) {
		this.manager = e, this.instances = /* @__PURE__ */ new Map(), X(this, mw, []);
	}
	get values() {
		return Array.from(this.instances.values());
	}
	set values(e) {
		let t = e.map(sw).reduceRight((e, t) => e.some(({ plugin: e }) => e === t.plugin) ? e : [t, ...e], []), n = t.map(({ plugin: e }) => e);
		for (let e of nw(this, mw)) if (!n.includes(e)) {
			if (e.prototype instanceof pw) continue;
			this.unregister(e);
		}
		for (let { plugin: e, options: n } of t) this.register(e, n);
		rw(this, mw, n);
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
mw = /* @__PURE__ */ new WeakMap();
function gw(e, t) {
	return e.priority === t.priority ? e.type === t.type ? t.value - e.value : t.type - e.type : t.priority - e.priority;
}
var _w = [], vw, yw, bw = class extends fw {
	constructor(e) {
		super(e), X(this, vw), X(this, yw), this.computeCollisions = this.computeCollisions.bind(this), rw(this, yw, Rx(_w)), this.destroy = ES(() => {
			let e = this.computeCollisions(), t = K(() => this.manager.dragOperation.position.current);
			if (e !== _w) {
				let e = nw(this, vw);
				if (rw(this, vw, t), e && t.x == e.x && t.y == e.y) return;
			} else rw(this, vw, void 0);
			nw(this, yw).value = e;
		}, () => {
			let { dragOperation: e } = this.manager;
			e.status.initialized && this.forceUpdate();
		});
	}
	forceUpdate(e = !0) {
		K(() => {
			e ? nw(this, yw).value = this.computeCollisions() : rw(this, vw, void 0);
		});
	}
	computeCollisions(e, t) {
		let { registry: n, dragOperation: r } = this.manager, { source: i, shape: a, status: o } = r;
		if (!o.initialized || !a) return _w;
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
		return c.length === 0 ? _w : (s.sort(gw), s);
	}
	get collisions() {
		return nw(this, yw).value;
	}
};
vw = /* @__PURE__ */ new WeakMap(), yw = /* @__PURE__ */ new WeakMap();
var xw = class {
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
}, Sw = class extends xw {
	constructor(e) {
		super(), this.manager = e;
	}
	dispatch(e, t) {
		let n = [t, this.manager];
		super.dispatch(e, ...n);
	}
};
function Cw(e, t = !0) {
	let n = !1;
	return KC(GC({}, e), {
		cancelable: t,
		get defaultPrevented() {
			return n;
		},
		preventDefault() {
			t && (n = !0);
		}
	});
}
var ww = class extends pw {
	constructor(e) {
		super(e);
		let t = (e, t) => e.map(({ id: e }) => e).join("") === t.map(({ id: e }) => e).join(""), n = [];
		this.destroy = ES(() => {
			let { dragOperation: t, collisionObserver: r } = e;
			t.status.initializing && (n = [], r.enable());
		}, () => {
			let { collisionObserver: r, monitor: i } = e, { collisions: a } = r;
			if (r.isDisabled()) return;
			let o = Cw({ collisions: a });
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
}, Tw = /* @__PURE__ */ ((e) => (e[e.Lowest = 0] = "Lowest", e[e.Low = 1] = "Low", e[e.Normal = 2] = "Normal", e[e.High = 3] = "High", e[e.Highest = 4] = "Highest", e))(Tw || {}), Ew = /* @__PURE__ */ ((e) => (e[e.Collision = 0] = "Collision", e[e.ShapeIntersection = 1] = "ShapeIntersection", e[e.PointerIntersection = 2] = "PointerIntersection", e))(Ew || {}), Dw, Ow, kw, Aw, jw, Mw, Nw = [q], Pw, Fw;
Mw = [wS], jw = [wS], Aw = [wS], kw = [wS], Ow = [wS], Dw = [wS];
var Iw = class {
	constructor() {
		J(Pw, 5, this), X(this, Fw, J(Pw, 8, this, "idle")), J(Pw, 11, this);
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
Pw = YC(null), Fw = /* @__PURE__ */ new WeakMap(), Y(Pw, 4, "value", Nw, Iw, Fw), Y(Pw, 2, "current", Mw, Iw), Y(Pw, 2, "idle", jw, Iw), Y(Pw, 2, "initializing", Aw, Iw), Y(Pw, 2, "initialized", kw, Iw), Y(Pw, 2, "dragging", Ow, Iw), Y(Pw, 2, "dropped", Dw, Iw), $C(Pw, Iw);
var Lw = class {
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
			let r = Cw({ operation: t.snapshot() });
			return t.status.dragging && this.manager.monitor.dispatch("dragover", r), this.manager.renderer.rendering.then(() => r.defaultPrevented);
		});
	}
	start(e) {
		return K(() => {
			let { dragOperation: t } = this.manager;
			if (e.source != null && this.setDragSource(e.source), !t.source) throw Error("Cannot start a drag operation without a drag source");
			if (!t.status.idle) throw Error("Cannot start a drag operation while another is active");
			let n = new AbortController(), { event: r, coordinates: i } = e;
			Dx(() => {
				t.status.set("initialization-pending"), t.shape = null, t.canceled = !1, t.activatorEvent = r ?? null, t.position.reset(i);
			});
			let a = Cw({ operation: t.snapshot() });
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
			let i = Cw({
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
						let { source: e } = t, n = Jx(() => {
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
}, Rw, zw, Bw, Vw = [q], Hw, Uw, Ww, Gw, Kw;
Bw = [q], zw = [q], Rw = [q];
var qw = class {
	constructor(e, t) {
		X(this, Uw, J(Hw, 8, this)), J(Hw, 11, this), X(this, Ww, J(Hw, 12, this)), J(Hw, 15, this), X(this, Gw, J(Hw, 16, this)), J(Hw, 19, this), X(this, Kw, J(Hw, 20, this)), J(Hw, 23, this);
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
Hw = YC(null), Uw = /* @__PURE__ */ new WeakMap(), Ww = /* @__PURE__ */ new WeakMap(), Gw = /* @__PURE__ */ new WeakMap(), Kw = /* @__PURE__ */ new WeakMap(), Y(Hw, 4, "manager", Vw, qw, Uw), Y(Hw, 4, "id", Bw, qw, Ww), Y(Hw, 4, "data", zw, qw, Gw), Y(Hw, 4, "disabled", Rw, qw, Kw), $C(Hw, qw);
var Jw = class {
	constructor() {
		this.map = Rx(/* @__PURE__ */ new Map()), this.cleanupFunctions = /* @__PURE__ */ new WeakMap(), this.register = (e, t) => {
			let n = this.map.peek(), r = n.get(e), i = () => this.unregister(e, t);
			if (r === t) return i;
			r && (this.cleanupFunctions.get(r)?.(), this.cleanupFunctions.delete(r));
			let a = new Map(n);
			a.set(e, t), this.map.value = a;
			let o = ES(...t.effects());
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
}, Yw, Xw, Zw, Qw, $w, eT, tT, nT, rT, iT, aT, oT = class extends (tT = qw, eT = [q], $w = [q], Qw = [q], Zw = [wS], Xw = [wS], Yw = [wS], tT) {
	constructor(e, t) {
		var n = e, { modifiers: r, type: i, sensors: a } = n, o = JC(n, [
			"modifiers",
			"type",
			"sensors"
		]);
		super(o, t), J(nT, 5, this), X(this, rT, J(nT, 8, this)), J(nT, 11, this), X(this, iT, J(nT, 12, this)), J(nT, 15, this), X(this, aT, J(nT, 16, this, this.isDragSource ? "dragging" : "idle")), J(nT, 19, this), this.type = i, this.sensors = a, this.modifiers = r, this.alignment = o.alignment;
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
nT = YC(tT), rT = /* @__PURE__ */ new WeakMap(), iT = /* @__PURE__ */ new WeakMap(), aT = /* @__PURE__ */ new WeakMap(), Y(nT, 4, "type", eT, oT, rT), Y(nT, 4, "modifiers", $w, oT, iT), Y(nT, 4, "status", Qw, oT, aT), Y(nT, 2, "isDropping", Zw, oT), Y(nT, 2, "isDragging", Xw, oT), Y(nT, 2, "isDragSource", Yw, oT), $C(nT, oT);
var sT, cT, lT, uT, dT, fT, pT, mT, hT, gT, _T, vT, yT, bT = class extends (pT = qw, fT = [q], dT = [q], uT = [q], lT = [q], cT = [q], sT = [wS], pT) {
	constructor(e, t) {
		var n = e, { accept: r, collisionDetector: i, collisionPriority: a, type: o } = n, s = JC(n, [
			"accept",
			"collisionDetector",
			"collisionPriority",
			"type"
		]);
		super(s, t), J(mT, 5, this), X(this, hT, J(mT, 8, this)), J(mT, 11, this), X(this, gT, J(mT, 12, this)), J(mT, 15, this), X(this, _T, J(mT, 16, this)), J(mT, 19, this), X(this, vT, J(mT, 20, this)), J(mT, 23, this), X(this, yT, J(mT, 24, this)), J(mT, 27, this), this.accept = r, this.collisionDetector = i, this.collisionPriority = a, this.type = o;
	}
	accepts(e) {
		let { accept: t } = this;
		return t ? typeof t == "function" ? t(e) : e.type ? Array.isArray(t) ? t.includes(e.type) : e.type === t : !1 : !0;
	}
	get isDropTarget() {
		return this.manager?.dragOperation.target?.id === this.id;
	}
};
mT = YC(pT), hT = /* @__PURE__ */ new WeakMap(), gT = /* @__PURE__ */ new WeakMap(), _T = /* @__PURE__ */ new WeakMap(), vT = /* @__PURE__ */ new WeakMap(), yT = /* @__PURE__ */ new WeakMap(), Y(mT, 4, "accept", fT, bT, hT), Y(mT, 4, "type", dT, bT, gT), Y(mT, 4, "collisionDetector", uT, bT, _T), Y(mT, 4, "collisionPriority", lT, bT, vT), Y(mT, 4, "shape", cT, bT, yT), Y(mT, 2, "isDropTarget", sT, bT), $C(mT, bT);
var xT = class extends fw {
	constructor(e, t) {
		super(e, t), this.manager = e, this.options = t;
	}
}, ST = class extends AbortController {
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
}, CT, wT = class {
	constructor(e) {
		this.options = e, X(this, CT);
	}
	set controller(e) {
		rw(this, CT, e), e.signal.addEventListener("abort", () => this.abort());
	}
	activate(e) {
		var t;
		(t = nw(this, CT)) == null || t.activate(e);
	}
};
CT = /* @__PURE__ */ new WeakMap();
var TT = class extends fw {
	constructor(e, t) {
		super(e, t), this.manager = e, this.options = t;
	}
	apply(e) {
		return e.transform;
	}
}, ET = class {
	constructor(e) {
		this.draggables = new Jw(), this.droppables = new Jw(), this.plugins = new hw(e), this.sensors = new hw(e), this.modifiers = new hw(e);
	}
	register(e, t) {
		if (e instanceof oT) return this.draggables.register(e.id, e);
		if (e instanceof bT) return this.droppables.register(e.id, e);
		if (e.prototype instanceof TT) return this.modifiers.register(e, t);
		if (e.prototype instanceof xT) return this.sensors.register(e, t);
		if (e.prototype instanceof fw) return this.plugins.register(e, t);
		throw Error("Invalid instance type");
	}
	unregister(e) {
		if (e instanceof qw) return e instanceof oT ? this.draggables.unregister(e.id, e) : e instanceof bT ? this.droppables.unregister(e.id, e) : () => {};
		if (e.prototype instanceof TT) return this.modifiers.unregister(e);
		if (e.prototype instanceof xT) return this.sensors.unregister(e);
		if (e.prototype instanceof fw) return this.plugins.unregister(e);
		throw Error("Invalid instance type");
	}
	destroy() {
		this.draggables.destroy(), this.droppables.destroy(), this.plugins.destroy(), this.sensors.destroy(), this.modifiers.destroy();
	}
}, DT, OT, kT, AT, jT, MT, NT, PT, FT = [wS], IT, LT, RT, zT, BT, VT, HT, UT, WT, GT;
PT = [q], NT = [q], MT = [q], jT = [q], AT = [q], kT = [wS], OT = [wS], DT = [wS];
var KT = class {
	constructor(e) {
		J(zT, 5, this), X(this, IT), X(this, LT), X(this, RT, new qS(void 0, (e, t) => e && t ? e.equals(t) : e === t)), this.status = new Iw(), X(this, BT, J(zT, 8, this, !1)), J(zT, 11, this), X(this, VT, J(zT, 12, this, null)), J(zT, 15, this), X(this, HT, J(zT, 16, this, null)), J(zT, 19, this), X(this, UT, J(zT, 20, this, null)), J(zT, 23, this), X(this, WT, J(zT, 24, this, [])), J(zT, 27, this), this.position = new AC({
			x: 0,
			y: 0
		}), X(this, GT, {
			x: 0,
			y: 0
		}), rw(this, IT, e);
	}
	get shape() {
		let { current: e, initial: t, previous: n } = nw(this, RT);
		return !e || !t ? null : {
			current: e,
			initial: t,
			previous: n
		};
	}
	set shape(e) {
		e ? nw(this, RT).current = e : nw(this, RT).reset();
	}
	get source() {
		let e = this.sourceIdentifier;
		if (e == null) return null;
		let t = nw(this, IT).registry.draggables.get(e);
		return t && rw(this, LT, t), t ?? nw(this, LT) ?? null;
	}
	get target() {
		let e = this.targetIdentifier;
		return e == null ? null : nw(this, IT).registry.droppables.get(e) ?? null;
	}
	get transform() {
		let { x: e, y: t } = this.position.delta, n = {
			x: e,
			y: t
		};
		for (let e of this.modifiers) n = e.apply(KC(GC({}, this.snapshot()), { transform: n }));
		return rw(this, GT, n), n;
	}
	snapshot() {
		return K(() => ({
			source: this.source,
			target: this.target,
			activatorEvent: this.activatorEvent,
			transform: nw(this, GT),
			shape: this.shape ? JS(this.shape) : null,
			position: JS(this.position),
			status: JS(this.status),
			canceled: this.canceled
		}));
	}
	reset() {
		Dx(() => {
			this.status.set("idle"), this.sourceIdentifier = null, this.targetIdentifier = null, nw(this, RT).reset(), this.position.reset({
				x: 0,
				y: 0
			}), rw(this, GT, {
				x: 0,
				y: 0
			}), this.modifiers = [];
		});
	}
};
zT = YC(null), IT = /* @__PURE__ */ new WeakMap(), LT = /* @__PURE__ */ new WeakMap(), RT = /* @__PURE__ */ new WeakMap(), BT = /* @__PURE__ */ new WeakMap(), VT = /* @__PURE__ */ new WeakMap(), HT = /* @__PURE__ */ new WeakMap(), UT = /* @__PURE__ */ new WeakMap(), WT = /* @__PURE__ */ new WeakMap(), GT = /* @__PURE__ */ new WeakMap(), Y(zT, 2, "shape", FT, KT), Y(zT, 4, "canceled", PT, KT, BT), Y(zT, 4, "activatorEvent", NT, KT, VT), Y(zT, 4, "sourceIdentifier", MT, KT, HT), Y(zT, 4, "targetIdentifier", jT, KT, UT), Y(zT, 4, "modifiers", AT, KT, WT), Y(zT, 2, "source", kT, KT), Y(zT, 2, "target", OT, KT), Y(zT, 2, "transform", DT, KT), $C(zT, KT);
var qT = { get rendering() {
	return Promise.resolve();
} };
function JT(e, t) {
	return typeof e == "function" ? e(t) : e ?? t;
}
var YT = class {
	constructor(e) {
		this.destroy = () => {
			this.dragOperation.status.idle || this.actions.stop({ canceled: !0 }), this.dragOperation.modifiers.forEach((e) => e.destroy()), this.registry.destroy(), this.collisionObserver.destroy();
		};
		let t = e ?? {}, n = JT(t.plugins, []), r = JT(t.sensors, []), i = JT(t.modifiers, []), a = t.renderer ?? qT, o = new Sw(this);
		this.registry = new ET(this), this.monitor = o, this.renderer = a, this.actions = new Lw(this), this.dragOperation = new KT(this), this.collisionObserver = new bw(this), this.plugins = [ww, ...n], this.modifiers = i, this.sensors = r;
		let { destroy: s } = this, c = ES(() => {
			let e = K(() => this.dragOperation.modifiers), t = this.modifiers;
			for (let n of e) t.includes(n) || n.destroy();
			this.dragOperation.modifiers = (this.dragOperation.source?.modifiers)?.map((e) => {
				let { plugin: t, options: n } = sw(e);
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
}, XT = ({ dragOperation: e, droppable: t }) => {
	let n = e.position.current;
	if (!n) return null;
	let { id: r } = t;
	return t.shape && t.shape.containsPoint(n) ? {
		id: r,
		value: 1 / SC.distance(t.shape.center, n),
		type: Ew.PointerIntersection,
		priority: Tw.High
	} : null;
}, ZT = ({ dragOperation: e, droppable: t }) => {
	let { shape: n } = e;
	if (!t.shape || !n?.current) return null;
	let r = n.current.intersectionArea(t.shape);
	if (r) {
		let { position: i } = e, a = SC.distance(t.shape.center, i.current), o = r / (n.current.area + t.shape.area - r) / a;
		return {
			id: t.id,
			value: o,
			type: Ew.ShapeIntersection,
			priority: Tw.Normal
		};
	}
	return null;
}, QT = (e) => XT(e) ?? ZT(e), $T = (e) => {
	let { dragOperation: t, droppable: n } = e, { shape: r, position: i } = t;
	if (!n.shape) return null;
	let a = r ? CC.from(r.current.boundingRectangle).corners : void 0, o = CC.from(n.shape.boundingRectangle).corners.reduce((e, t, n) => e + SC.distance(SC.from(t), a?.[n] ?? i.current), 0) / 4;
	return {
		id: n.id,
		value: 1 / o,
		type: Ew.Collision,
		priority: Tw.Normal
	};
}, eE = (e) => {
	throw TypeError(e);
}, tE = (e, t, n) => t.has(e) || eE("Cannot " + n), Z = (e, t, n) => (tE(e, t, "read from private field"), t.get(e)), nE = (e, t, n) => t.has(e) ? eE("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), rE = (e, t, n, r) => (tE(e, t, "write to private field"), t.set(e, n), n), iE = (e, t, n) => (tE(e, t, "access private method"), n);
function aE(e) {
	return e ? e instanceof KeyframeEffect ? !0 : "getKeyframes" in e && typeof e.getKeyframes == "function" : !1;
}
function oE(e, t) {
	let n = e.getAnimations();
	if (n.length > 0) for (let e of n) {
		if (e.playState !== "running") continue;
		let { effect: n } = e, r = (aE(n) ? n.getKeyframes() : []).filter(t);
		if (r.length > 0) return [r[r.length - 1], e];
	}
	return null;
}
function sE(e) {
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
function cE(e) {
	let t = Object.prototype.toString.call(e);
	return t === "[object Window]" || t === "[object global]";
}
function lE(e) {
	return "nodeType" in e;
}
function uE(e) {
	return e ? cE(e) ? e : lE(e) ? "defaultView" in e ? e.defaultView ?? window : e.ownerDocument?.defaultView ?? window : window : window;
}
function dE(e) {
	let { Document: t } = uE(e);
	return e instanceof t || "nodeType" in e && e.nodeType === Node.DOCUMENT_NODE;
}
function fE(e) {
	return !e || cE(e) ? !1 : e instanceof uE(e).HTMLElement || "namespaceURI" in e && typeof e.namespaceURI == "string" && e.namespaceURI.endsWith("html");
}
function pE(e) {
	return e instanceof uE(e).SVGElement || "namespaceURI" in e && typeof e.namespaceURI == "string" && e.namespaceURI.endsWith("svg");
}
function mE(e) {
	return e ? cE(e) ? e.document : lE(e) ? dE(e) ? e : fE(e) || pE(e) ? e.ownerDocument : document : document : document;
}
function hE(e) {
	let { documentElement: t } = mE(e), n = uE(e).visualViewport, r = n?.width ?? t.clientWidth, i = n?.height ?? t.clientHeight, a = n?.offsetTop ?? 0, o = n?.offsetLeft ?? 0;
	return {
		top: a,
		left: o,
		right: o + r,
		bottom: a + i,
		width: r,
		height: i
	};
}
function gE(e, t) {
	if (_E(e) && e.open === !1) return !1;
	let { overflow: n, overflowX: r, overflowY: i } = getComputedStyle(e);
	return n === "visible" && r === "visible" && i === "visible";
}
function _E(e) {
	return e.tagName === "DETAILS";
}
function vE(e, t = e.getBoundingClientRect(), n = 0) {
	let r = t, { ownerDocument: i } = e, a = i.defaultView ?? window, o = e.parentElement;
	for (; o && o !== i.documentElement;) {
		if (!gE(o)) {
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
function yE(e) {
	return {
		x: e.clientX,
		y: e.clientY
	};
}
var bE = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0;
function xE(e = document, t = /* @__PURE__ */ new Set()) {
	if (t.has(e)) return [];
	t.add(e);
	let n = [e];
	for (let r of Array.from(e.querySelectorAll("iframe, frame"))) try {
		let e = r.contentDocument;
		e && !t.has(e) && n.push(...xE(e, t));
	} catch {}
	try {
		let r = e.defaultView;
		if (r && r !== window.top) {
			let i = r.parent;
			i && i.document && i.document !== e && n.push(...xE(i.document, t));
		}
	} catch {}
	return n;
}
function SE() {
	return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}
function CE() {
	let e = SE() ? window.visualViewport : null;
	return {
		x: e?.offsetLeft ?? 0,
		y: e?.offsetTop ?? 0
	};
}
function wE(e) {
	return !e || !lE(e) ? !1 : e instanceof uE(e).ShadowRoot;
}
function TE(e) {
	if (e && lE(e)) {
		let t = e.getRootNode();
		if (wE(t) || t instanceof Document) return t;
	}
	return mE(e);
}
function EE(e) {
	return e.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function DE(e) {
	let t = "input, textarea, select, canvas, [contenteditable]", n = e.cloneNode(!0), r = Array.from(e.querySelectorAll(t));
	return Array.from(n.querySelectorAll(t)).forEach((e, t) => {
		let n = r[t];
		OE(e) && OE(n) && (e.type !== "file" && (e.value = n.value), e.type === "radio" && e.name && (e.name = `Cloned__${e.name}`)), kE(e) && kE(n) && n.width > 0 && n.height > 0 && e.getContext("2d")?.drawImage(n, 0, 0);
	}), n;
}
function OE(e) {
	return "value" in e;
}
function kE(e) {
	return e.tagName === "CANVAS";
}
function AE(e, { x: t, y: n }) {
	let r = e.elementFromPoint(t, n);
	if (jE(r)) {
		let { contentDocument: e } = r;
		if (e) {
			let { left: i, top: a } = r.getBoundingClientRect();
			return AE(e, {
				x: t - i,
				y: n - a
			});
		}
	}
	return r;
}
function jE(e) {
	return e?.tagName === "IFRAME";
}
var ME = /* @__PURE__ */ new WeakMap();
function NE(e) {
	return !!e.closest("\n      input:not([disabled]),\n      select:not([disabled]),\n      textarea:not([disabled]),\n      button:not([disabled]),\n      a[href],\n      [contenteditable]:not([contenteditable=\"false\"])\n    ");
}
var PE = class {
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
function FE(e) {
	let t = e?.ownerDocument.defaultView;
	if (t && t.self !== t.parent) return t.frameElement;
}
function IE(e) {
	let t = /* @__PURE__ */ new Set(), n = FE(e);
	for (; n;) t.add(n), n = FE(n);
	return t;
}
function LE(e, t) {
	let n = setTimeout(e, t);
	return () => clearTimeout(n);
}
function RE(e, t) {
	let n = () => performance.now(), r, i;
	return function(...a) {
		let o = this;
		i ? (r?.(), r = LE(() => {
			e.apply(o, a), i = n();
		}, t - (n() - i))) : (e.apply(o, a), i = n());
	};
}
function zE(e, t) {
	return e === t ? !0 : !e || !t ? !1 : e.top == t.top && e.left == t.left && e.right == t.right && e.bottom == t.bottom;
}
function BE(e, t = e.getBoundingClientRect()) {
	let { width: n, height: r } = vE(e, t);
	return n > 0 && r > 0;
}
var VE = bE ? ResizeObserver : class {
	observe() {}
	unobserve() {}
	disconnect() {}
}, HE, UE = class extends VE {
	constructor(e) {
		super((t) => {
			if (!Z(this, HE)) {
				rE(this, HE, !0);
				return;
			}
			e(t, this);
		}), nE(this, HE, !1);
	}
};
HE = /* @__PURE__ */ new WeakMap();
var WE = Array.from({ length: 100 }, (e, t) => t / 100), GE = 75, KE, qE, JE, YE, XE, ZE, QE, $E, eD, tD, nD, rD = class {
	constructor(e, t, n = {
		debug: !1,
		skipInitial: !1
	}) {
		this.element = e, this.callback = t, nE(this, eD), this.disconnect = () => {
			var e, t, n;
			rE(this, QE, !0), (e = Z(this, JE)) == null || e.disconnect(), (t = Z(this, YE)) == null || t.disconnect(), Z(this, XE).disconnect(), (n = Z(this, ZE)) == null || n.remove();
		}, nE(this, KE, !0), nE(this, qE), nE(this, JE), nE(this, YE), nE(this, XE), nE(this, ZE), nE(this, QE, !1), nE(this, $E, RE(() => {
			var e;
			let { element: t } = this;
			if ((e = Z(this, YE)) == null || e.disconnect(), Z(this, QE) || !Z(this, KE) || !t.isConnected) return;
			let n = t.ownerDocument ?? document, { innerHeight: r, innerWidth: i } = n.defaultView ?? window, a = t.getBoundingClientRect(), { top: o, left: s, bottom: c, right: l } = vE(t, a), u = -Math.floor(o), d = -Math.floor(s), f = `${u}px ${-Math.floor(i - l)}px ${-Math.floor(r - c)}px ${d}px`;
			this.boundingClientRect = a, rE(this, YE, new IntersectionObserver((e) => {
				let [n] = e, { intersectionRect: r } = n;
				(n.intersectionRatio === 1 ? CC.intersectionRatio(r, vE(t)) : n.intersectionRatio) !== 1 && Z(this, $E).call(this);
			}, {
				threshold: WE,
				rootMargin: f,
				root: n
			})), Z(this, YE).observe(t), iE(this, eD, tD).call(this);
		}, GE)), this.boundingClientRect = e.getBoundingClientRect(), rE(this, KE, BE(e, this.boundingClientRect));
		let r = !0;
		this.callback = (e) => {
			r && (r = !1, n.skipInitial) || t(e);
		};
		let i = e.ownerDocument;
		n?.debug && (rE(this, ZE, document.createElement("div")), Z(this, ZE).style.background = "rgba(0,0,0,0.15)", Z(this, ZE).style.position = "fixed", Z(this, ZE).style.pointerEvents = "none", i.body.appendChild(Z(this, ZE))), rE(this, XE, new IntersectionObserver((t) => {
			var n, r;
			let { boundingClientRect: i, isIntersecting: a } = t[t.length - 1], { width: o, height: s } = i, c = Z(this, KE);
			rE(this, KE, a), !(!o && !s) && (c && !a ? ((n = Z(this, YE)) == null || n.disconnect(), this.callback(null), (r = Z(this, JE)) == null || r.disconnect(), rE(this, JE, void 0), Z(this, ZE) && (Z(this, ZE).style.visibility = "hidden")) : Z(this, $E).call(this), a && !Z(this, JE) && (rE(this, JE, new UE(Z(this, $E))), Z(this, JE).observe(e)));
		}, {
			threshold: WE,
			root: i
		})), Z(this, KE) && !n.skipInitial && this.callback(this.boundingClientRect), Z(this, XE).observe(e);
	}
};
KE = /* @__PURE__ */ new WeakMap(), qE = /* @__PURE__ */ new WeakMap(), JE = /* @__PURE__ */ new WeakMap(), YE = /* @__PURE__ */ new WeakMap(), XE = /* @__PURE__ */ new WeakMap(), ZE = /* @__PURE__ */ new WeakMap(), QE = /* @__PURE__ */ new WeakMap(), $E = /* @__PURE__ */ new WeakMap(), eD = /* @__PURE__ */ new WeakSet(), tD = function() {
	Z(this, QE) || (iE(this, eD, nD).call(this), !zE(this.boundingClientRect, Z(this, qE)) && (this.callback(this.boundingClientRect), rE(this, qE, this.boundingClientRect)));
}, nD = function() {
	if (Z(this, ZE)) {
		let { top: e, left: t, width: n, height: r } = vE(this.element);
		Z(this, ZE).style.overflow = "hidden", Z(this, ZE).style.visibility = "visible", Z(this, ZE).style.top = `${Math.floor(e)}px`, Z(this, ZE).style.left = `${Math.floor(t)}px`, Z(this, ZE).style.width = `${Math.floor(n)}px`, Z(this, ZE).style.height = `${Math.floor(r)}px`;
	}
};
var iD = /* @__PURE__ */ new WeakMap(), aD = /* @__PURE__ */ new WeakMap();
function oD(e, t) {
	let n = iD.get(e);
	return n ||= {
		disconnect: new rD(e, (t) => {
			let n = iD.get(e);
			n && n.callbacks.forEach((e) => e(t));
		}, { skipInitial: !0 }).disconnect,
		callbacks: /* @__PURE__ */ new Set()
	}, n.callbacks.add(t), iD.set(e, n), () => {
		n.callbacks.delete(t), n.callbacks.size === 0 && (iD.delete(e), n.disconnect());
	};
}
function sD(e, t) {
	let n = /* @__PURE__ */ new Set();
	for (let r of e) {
		let e = oD(r, t);
		n.add(e);
	}
	return () => n.forEach((e) => e());
}
function cD(e, t) {
	let n = e.ownerDocument;
	if (!aD.has(n)) {
		let e = new AbortController(), t = /* @__PURE__ */ new Set();
		document.addEventListener("scroll", (e) => t.forEach((t) => t(e)), {
			capture: !0,
			passive: !0,
			signal: e.signal
		}), aD.set(n, {
			disconnect: () => e.abort(),
			listeners: t
		});
	}
	let { listeners: r, disconnect: i } = aD.get(n) ?? {};
	return !r || !i ? () => {} : (r.add(t), () => {
		r.delete(t), r.size === 0 && (i(), aD.delete(n));
	});
}
var lD, uD, dD, fD, pD = class {
	constructor(e, t, n) {
		this.callback = t, nE(this, lD), nE(this, uD, !1), nE(this, dD), nE(this, fD, RE((e) => {
			if (!Z(this, uD) && e.target && "contains" in e.target && typeof e.target.contains == "function") {
				for (let t of Z(this, dD)) if (e.target.contains(t)) {
					this.callback(Z(this, lD).boundingClientRect);
					break;
				}
			}
		}, GE));
		let r = IE(e), i = sD(r, t), a = cD(e, Z(this, fD));
		rE(this, dD, r), rE(this, lD, new rD(e, t, n)), this.disconnect = () => {
			Z(this, uD) || (rE(this, uD, !0), i(), a(), Z(this, lD).disconnect());
		};
	}
};
lD = /* @__PURE__ */ new WeakMap(), uD = /* @__PURE__ */ new WeakMap(), dD = /* @__PURE__ */ new WeakMap(), fD = /* @__PURE__ */ new WeakMap();
function mD(e) {
	return "showPopover" in e && "hidePopover" in e && typeof e.showPopover == "function" && typeof e.hidePopover == "function";
}
function hD(e) {
	try {
		mD(e) && e.isConnected && e.hasAttribute("popover") && !e.matches(":popover-open") && e.showPopover();
	} catch {}
}
function gD(e) {
	return !bE || !e ? !1 : e === mE(e).scrollingElement;
}
function _D(e) {
	let t = uE(e), n = gD(e) ? hE(e) : sE(e), r = t.visualViewport, i = gD(e) ? {
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
function vD(e, t) {
	let { isTop: n, isBottom: r, isLeft: i, isRight: a, position: o } = _D(e), { x: s, y: c } = t ?? {
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
var yD = class {
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
}, bD = new yD((e) => {
	typeof requestAnimationFrame == "function" ? requestAnimationFrame(e) : e();
}), xD = new yD((e) => setTimeout(e, 50)), SD = /* @__PURE__ */ new Map(), CD = SD.clear.bind(SD);
function wD(e, t = !1) {
	if (!t) return TD(e);
	let n = SD.get(e);
	return n || (n = TD(e), SD.set(e, n), xD.schedule(CD), n);
}
function TD(e) {
	return uE(e).getComputedStyle(e);
}
function ED(e, t = wD(e, !0)) {
	return t.position === "fixed" || t.position === "sticky";
}
function DD(e, t = wD(e, !0)) {
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
var OD = {
	excludeElement: !0,
	escapeShadowDOM: !0
};
function kD(e, t = OD) {
	let { limit: n, excludeElement: r, escapeShadowDOM: i } = t, a = /* @__PURE__ */ new Set();
	function o(t) {
		if (n != null && a.size >= n || !t) return a;
		if (dE(t) && t.scrollingElement != null && !a.has(t.scrollingElement)) return a.add(t.scrollingElement), a;
		if (i && wE(t)) return o(t.host);
		if (!fE(t)) return pE(t) ? o(t.parentElement) : a;
		if (a.has(t)) return a;
		let s = wD(t, !0);
		if (r && t === e || DD(t, s) && a.add(t), ED(t, s)) {
			let { scrollingElement: e } = t.ownerDocument;
			return e && a.add(e), a;
		}
		return o(t.parentNode);
	}
	return e ? o(e) : a;
}
function AD(e) {
	let [t] = kD(e, { limit: 1 });
	return t ?? null;
}
function jD(e, t = window.frameElement) {
	let n = {
		x: 0,
		y: 0,
		scaleX: 1,
		scaleY: 1
	};
	if (!e) return n;
	let r = FE(e);
	for (; r;) {
		if (r === t) return n;
		let e = sE(r), { x: i, y: a } = MD(r, e);
		n.x += e.left, n.y += e.top, n.scaleX *= i, n.scaleY *= a, r = FE(r);
	}
	return n;
}
function MD(e, t = sE(e)) {
	let n = Math.round(t.width), r = Math.round(t.height);
	if (fE(e)) return {
		x: n / e.offsetWidth,
		y: r / e.offsetHeight
	};
	let i = wD(e, !0);
	return {
		x: (parseFloat(i.width) || n) / n,
		y: (parseFloat(i.height) || r) / r
	};
}
function ND(e) {
	if (e === "none") return null;
	let t = e.split(" "), n = parseFloat(t[0]), r = parseFloat(t[1]);
	return isNaN(n) && isNaN(r) ? null : {
		x: isNaN(n) ? r : n,
		y: isNaN(r) ? n : r
	};
}
function PD(e) {
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
function FD(e) {
	let { scale: t, transform: n, translate: r } = e, i = ND(t), a = PD(r), o = ID(n);
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
function ID(e) {
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
var LD = /* @__PURE__ */ ((e) => (e[e.Idle = 0] = "Idle", e[e.Forward = 1] = "Forward", e[e.Reverse = -1] = "Reverse", e))(LD || {}), RD = {
	x: .2,
	y: .2
}, zD = {
	x: 10,
	y: 10
};
function BD(e, t, n, r = 25, i = RD, a = zD) {
	let { x: o, y: s } = t, { rect: c, isTop: l, isBottom: u, isLeft: d, isRight: f } = _D(e), p = jD(e), m = FD(wD(e, !0)), h = m === null ? !1 : m?.scaleX < 0, g = m === null ? !1 : m?.scaleY < 0, _ = new CC(c.left * p.scaleX + p.x, c.top * p.scaleY + p.y, c.width * p.scaleX, c.height * p.scaleY), v = {
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
function VD(e) {
	return "scrollIntoViewIfNeeded" in e && typeof e.scrollIntoViewIfNeeded == "function";
}
function HD(e, t = !1) {
	if (VD(e)) {
		e.scrollIntoViewIfNeeded(t);
		return;
	}
	if (!fE(e)) return e.scrollIntoView();
	var n = AD(e);
	if (!fE(n)) return;
	let r = wD(n, !0), i = parseInt(r.getPropertyValue("border-top-width")), a = parseInt(r.getPropertyValue("border-left-width")), o = e.offsetTop - n.offsetTop < n.scrollTop, s = e.offsetTop - n.offsetTop + e.clientHeight - i > n.scrollTop + n.clientHeight, c = e.offsetLeft - n.offsetLeft < n.scrollLeft, l = e.offsetLeft - n.offsetLeft + e.clientWidth - a > n.scrollLeft + n.clientWidth, u = o && !s;
	(o || s) && t && (n.scrollTop = e.offsetTop - n.offsetTop - n.clientHeight / 2 - i + e.clientHeight / 2), (c || l) && t && (n.scrollLeft = e.offsetLeft - n.offsetLeft - n.clientWidth / 2 - a + e.clientWidth / 2), (o || s || c || l) && !t && e.scrollIntoView(u);
}
function UD(e, t, n) {
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
function WD(e, t, n) {
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
function GD({ element: e, keyframes: t, options: n }) {
	return e.animate(t, n).finished;
}
function KD(e, t = wD(e).translate, n = !0) {
	if (n) {
		let t = oE(e, (e) => "translate" in e);
		if (t) {
			let { translate: e = "" } = t[0];
			if (typeof e == "string") {
				let t = PD(e);
				if (t) return t;
			}
		}
	}
	if (t) {
		let e = PD(t);
		if (e) return e;
	}
	return {
		x: 0,
		y: 0,
		z: 0
	};
}
var qD = new yD((e) => setTimeout(e, 0)), JD = /* @__PURE__ */ new Map(), YD = JD.clear.bind(JD);
function XD(e) {
	let t = e.ownerDocument, n = JD.get(t);
	if (n) return n;
	n = t.getAnimations(), JD.set(t, n), qD.schedule(YD);
	let r = n.filter((t) => aE(t.effect) && t.effect.target === e);
	return JD.set(e, r), n;
}
function ZD(e, t) {
	let n = XD(e).filter((e) => {
		if (aE(e.effect)) {
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
var QD = class extends CC {
	constructor(e, t = {}) {
		let { frameTransform: n = jD(e), ignoreTransforms: r, getBoundingClientRect: i = sE } = t, a = ZD(e, {
			properties: [
				"transform",
				"translate",
				"scale",
				"width",
				"height"
			],
			isValidTarget: (t) => (t !== e || SE()) && t.contains(e)
		}), o = i(e), { top: s, left: c, width: l, height: u } = o, d, f = wD(e), p = FD(f), m = {
			x: p?.scaleX ?? 1,
			y: p?.scaleY ?? 1
		}, h = $D(e, f);
		a?.(), p && (d = WD(o, p, f.transformOrigin), (r || h) && (s = d.top, c = d.left, l = d.width, u = d.height));
		let g = {
			width: d?.width ?? l,
			height: d?.height ?? u
		};
		if (h && !r && d) {
			let e = UD(d, h, f.transformOrigin);
			s = e.top, c = e.left, l = e.width, u = e.height, m.x = h.scaleX, m.y = h.scaleY;
		}
		n && (r || (c *= n.scaleX, l *= n.scaleX, s *= n.scaleY, u *= n.scaleY), c += n.x, s += n.y), super(c, s, l, u), this.scale = m, this.intrinsicWidth = g.width, this.intrinsicHeight = g.height;
	}
};
function $D(e, t) {
	let n = e.getAnimations(), r = null;
	if (!n.length) return null;
	for (let e of n) {
		if (e.playState !== "running") continue;
		let n = aE(e.effect) ? e.effect.getKeyframes() : [], i = n[n.length - 1];
		if (!i) continue;
		let { transform: a, translate: o, scale: s } = i;
		if (a || o || s) {
			let e = FD({
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
function eO(e) {
	return "style" in e && typeof e.style == "object" && e.style !== null && "setProperty" in e.style && "removeProperty" in e.style && typeof e.style.setProperty == "function" && typeof e.style.removeProperty == "function";
}
var tO = class {
	constructor(e) {
		this.element = e, this.initial = /* @__PURE__ */ new Map();
	}
	set(e, t = "") {
		let { element: n } = this;
		if (eO(n)) for (let [r, i] of Object.entries(e)) {
			let e = `${t}${r}`;
			this.initial.has(e) || this.initial.set(e, n.style.getPropertyValue(e)), n.style.setProperty(e, typeof i == "string" ? i : `${i}px`);
		}
	}
	remove(e, t = "") {
		let { element: n } = this;
		if (eO(n)) for (let r of e) {
			let e = `${t}${r}`;
			n.style.removeProperty(e);
		}
	}
	reset() {
		let { element: e } = this;
		if (eO(e)) {
			for (let [t, n] of this.initial) e.style.setProperty(t, n);
			e.getAttribute("style") === "" && e.removeAttribute("style");
		}
	}
};
function nO(e) {
	return e ? e instanceof uE(e).Element || lE(e) && e.nodeType === Node.ELEMENT_NODE : !1;
}
function rO(e) {
	if (!e) return !1;
	let { KeyboardEvent: t } = uE(e.target);
	return e instanceof t;
}
function iO(e) {
	if (!e) return !1;
	let { PointerEvent: t } = uE(e.target);
	return e instanceof t;
}
function aO(e) {
	if (!nO(e)) return !1;
	let { tagName: t } = e;
	return t === "INPUT" || t === "TEXTAREA" || oO(e);
}
function oO(e) {
	return e.hasAttribute("contenteditable") && e.getAttribute("contenteditable") !== "false";
}
var sO = {};
function cO(e) {
	let t = sO[e] == null ? 0 : sO[e] + 1;
	return sO[e] = t, `${e}-${t}`;
}
//#endregion
//#region node_modules/.pnpm/@dnd-kit+dom@0.3.2/node_modules/@dnd-kit/dom/index.js
var lO = Object.create, uO = Object.defineProperty, dO = Object.defineProperties, fO = Object.getOwnPropertyDescriptor, pO = Object.getOwnPropertyDescriptors, mO = Object.getOwnPropertySymbols, hO = Object.prototype.hasOwnProperty, gO = Object.prototype.propertyIsEnumerable, _O = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e), vO = (e) => {
	throw TypeError(e);
}, yO = (e, t, n) => t in e ? uO(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, bO = (e, t) => {
	for (var n in t ||= {}) hO.call(t, n) && yO(e, n, t[n]);
	if (mO) for (var n of mO(t)) gO.call(t, n) && yO(e, n, t[n]);
	return e;
}, xO = (e, t) => dO(e, pO(t)), SO = (e, t) => uO(e, "name", {
	value: t,
	configurable: !0
}), CO = (e, t) => {
	var n = {};
	for (var r in e) hO.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && mO) for (var r of mO(e)) t.indexOf(r) < 0 && gO.call(e, r) && (n[r] = e[r]);
	return n;
}, wO = (e) => [
	,
	,
	,
	lO(e?.[_O("metadata")] ?? null)
], TO = [
	"class",
	"method",
	"getter",
	"setter",
	"accessor",
	"field",
	"value",
	"get",
	"set"
], EO = (e) => e !== void 0 && typeof e != "function" ? vO("Function expected") : e, DO = (e, t, n, r, i) => ({
	kind: TO[e],
	name: t,
	metadata: r,
	addInitializer: (e) => n._ ? vO("Already initialized") : i.push(EO(e || null))
}), OO = (e, t) => yO(t, _O("metadata"), e[3]), kO = (e, t, n, r) => {
	for (var i = 0, a = e[t >> 1], o = a && a.length; i < o; i++) t & 1 ? a[i].call(n) : r = a[i].call(n, r);
	return r;
}, AO = (e, t, n, r, i, a) => {
	var o, s, c, l, u, d = t & 7, f = !!(t & 8), p = !!(t & 16), m = d > 3 ? e.length + 1 : d ? f ? 1 : 2 : 0, h = TO[d + 5], g = d > 3 && (e[m - 1] = []), _ = e[m] || (e[m] = []), v = d && (!p && !f && (i = i.prototype), d < 5 && (d > 3 || !p) && fO(d < 4 ? i : {
		get [n]() {
			return Q(this, a);
		},
		set [n](e) {
			return PO(this, a, e);
		}
	}, n));
	d ? p && d < 4 && SO(a, (d > 2 ? "set " : d > 1 ? "get " : "") + n) : SO(i, n);
	for (var y = r.length - 1; y >= 0; y--) l = DO(d, n, c = {}, e[3], _), d && (l.static = f, l.private = p, u = l.access = { has: p ? (e) => MO(i, e) : (e) => n in e }, d ^ 3 && (u.get = p ? (e) => (d ^ 1 ? Q : FO)(e, i, d ^ 4 ? a : v.get) : (e) => e[n]), d > 2 && (u.set = p ? (e, t) => PO(e, i, t, d ^ 4 ? a : v.set) : (e, t) => e[n] = t)), s = (0, r[y])(d ? d < 4 ? p ? a : v[h] : d > 4 ? void 0 : {
		get: v.get,
		set: v.set
	} : i, l), c._ = 1, d ^ 4 || s === void 0 ? EO(s) && (d > 4 ? g.unshift(s) : d ? p ? a = s : v[h] = s : i = s) : typeof s != "object" || !s ? vO("Object expected") : (EO(o = s.get) && (v.get = o), EO(o = s.set) && (v.set = o), EO(o = s.init) && g.unshift(o));
	return d || OO(e, i), v && uO(i, n, v), p ? d ^ 4 ? a : v : i;
}, jO = (e, t, n) => t.has(e) || vO("Cannot " + n), MO = (e, t) => Object(t) === t ? e.has(t) : vO("Cannot use the \"in\" operator on this value"), Q = (e, t, n) => (jO(e, t, "read from private field"), n ? n.call(e) : t.get(e)), NO = (e, t, n) => t.has(e) ? vO("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), PO = (e, t, n, r) => (jO(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), FO = (e, t, n) => (jO(e, t, "access private method"), n), IO = {
	role: "button",
	roleDescription: "draggable"
}, LO = "dnd-kit-description", RO = "dnd-kit-announcement", zO = { draggable: "To pick up a draggable item, press the space bar. While dragging, use the arrow keys to move the item in a given direction. Press space again to drop the item in its new position, or press escape to cancel." }, BO = {
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
function VO(e) {
	let t = e.tagName.toLowerCase();
	return [
		"input",
		"select",
		"textarea",
		"a",
		"button"
	].includes(t);
}
function HO(e, t) {
	let n = document.createElement("div");
	return n.id = e, n.style.setProperty("display", "none"), n.textContent = t, n;
}
function UO(e) {
	let t = document.createElement("div");
	return t.id = e, t.setAttribute("role", "status"), t.setAttribute("aria-live", "polite"), t.setAttribute("aria-atomic", "true"), t.style.setProperty("position", "fixed"), t.style.setProperty("width", "1px"), t.style.setProperty("height", "1px"), t.style.setProperty("margin", "-1px"), t.style.setProperty("border", "0"), t.style.setProperty("padding", "0"), t.style.setProperty("overflow", "hidden"), t.style.setProperty("clip", "rect(0 0 0 0)"), t.style.setProperty("clip-path", "inset(100%)"), t.style.setProperty("white-space", "nowrap"), t;
}
var WO = ["dragover", "dragmove"], GO = class extends fw {
	constructor(e, t) {
		super(e);
		let { id: n, idPrefix: { description: r = LO, announcement: i = RO } = {}, announcements: a = BO, screenReaderInstructions: o = zO, debounce: s = 500 } = t ?? {}, c = n ? `${r}-${n}` : cO(r), l = n ? `${i}-${n}` : cO(i), u, d, f, p, m = (e = p) => {
			!f || !e || f?.nodeValue !== e && (f.nodeValue = e);
		}, h = () => bD.schedule(m), g = KO(h, s), _ = Object.entries(a).map(([e, t]) => this.manager.monitor.addEventListener(e, (n, r) => {
			let i = f;
			if (!i) return;
			let a = t?.(n, r);
			a && i.nodeValue !== a && (p = a, WO.includes(e) ? g() : (h(), g.cancel()));
		})), v = () => {
			let e = [];
			u?.isConnected || (u = HO(c, o.draggable), e.push(u)), d?.isConnected || (d = UO(l), f = document.createTextNode(""), d.appendChild(f), e.push(d)), e.length > 0 && document.body.append(...e);
		}, y = /* @__PURE__ */ new Set();
		function b() {
			for (let e of y) e();
		}
		this.registerEffect(() => {
			y.clear();
			for (let e of this.manager.registry.draggables.value) {
				let t = e.handle ?? e.element;
				if (t) {
					(!u || !d) && y.add(v), (!VO(t) || SE()) && !t.hasAttribute("tabindex") && y.add(() => t.setAttribute("tabindex", "0")), !t.hasAttribute("role") && t.tagName.toLowerCase() !== "button" && y.add(() => t.setAttribute("role", IO.role)), t.hasAttribute("aria-roledescription") || y.add(() => t.setAttribute("aria-roledescription", IO.roleDescription)), t.hasAttribute("aria-describedby") || y.add(() => t.setAttribute("aria-describedby", c));
					for (let n of ["aria-pressed", "aria-grabbed"]) {
						let r = String(e.isDragging);
						t.getAttribute(n) !== r && y.add(() => t.setAttribute(n, r));
					}
					let n = String(e.disabled);
					t.getAttribute("aria-disabled") !== n && y.add(() => t.setAttribute("aria-disabled", n));
				}
			}
			y.size > 0 && bD.schedule(b);
		}), this.destroy = () => {
			super.destroy(), u?.remove(), d?.remove(), _.forEach((e) => e());
		};
	}
};
function KO(e, t) {
	let n, r = () => {
		clearTimeout(n), n = setTimeout(e, t);
	};
	return r.cancel = () => clearTimeout(n), r;
}
var qO = class extends fw {
	constructor(e, t) {
		super(e, t), this.manager = e;
		let n = SS(() => mE(this.manager.dragOperation.source?.element));
		this.destroy = Jx(() => {
			let { dragOperation: e } = this.manager, { cursor: t = "grabbing", nonce: r } = this.options ?? {};
			if (e.status.initialized) {
				let e = n.value, i = e.createElement("style");
				return r && i.setAttribute("nonce", r), i.textContent = `* { cursor: ${t} !important; }`, e.head.appendChild(i), () => i.remove();
			}
		});
	}
}, JO = /* @__PURE__ */ new Map(), YO, XO, ZO, QO, $O, ek, tk, nk, rk, ik, ak, ok, sk, ck = class extends ($O = pw, QO = [q], ZO = [wS], XO = [wS], YO = [wS], $O) {
	constructor(e) {
		super(e), kO(tk, 5, this), NO(this, rk), NO(this, ek, /* @__PURE__ */ new Set()), NO(this, nk, kO(tk, 8, this, /* @__PURE__ */ new Set())), kO(tk, 11, this), this.registerEffect(FO(this, rk, ik));
	}
	register(e) {
		return Q(this, ek).add(e), () => {
			Q(this, ek).delete(e);
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
		return TE(e?.element ?? null);
	}
	get targetRoot() {
		let { target: e } = this.manager.dragOperation;
		return TE(e?.element ?? null);
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
tk = wO($O), ek = /* @__PURE__ */ new WeakMap(), nk = /* @__PURE__ */ new WeakMap(), rk = /* @__PURE__ */ new WeakSet(), ik = function() {
	let { roots: e } = this, t = [];
	for (let n of e) for (let e of Q(this, ek)) t.push(FO(this, rk, ak).call(this, n, e));
	return () => {
		for (let e of t) e();
	};
}, ak = function(e, t) {
	let n = JO.get(e);
	n || (n = /* @__PURE__ */ new Map(), JO.set(e, n));
	let r = n.get(t);
	if (!r) {
		let i = dE(e) ? FO(this, rk, ok).call(this, e, n, t) : FO(this, rk, sk).call(this, e, n, t);
		if (!i) return () => {};
		r = i, n.set(t, r);
	}
	r.refCount++;
	let i = !1;
	return () => {
		i || (i = !0, r.refCount--, r.refCount === 0 && r.cleanup());
	};
}, ok = function(e, t, n) {
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
			i.disconnect(), r.remove(), t.delete(n), t.size === 0 && JO.delete(e);
		}
	};
}, sk = function(e, t, n) {
	"adoptedStyleSheets" in e && Array.isArray(e.adoptedStyleSheets);
	let { CSSStyleSheet: r } = e.ownerDocument.defaultView ?? {};
	if (!r) return null;
	let i = new r();
	return i.replaceSync(n), e.adoptedStyleSheets.push(i), {
		refCount: 0,
		cleanup: () => {
			if (wE(e) && e.host?.isConnected) {
				let t = e.adoptedStyleSheets.indexOf(i);
				t !== -1 && e.adoptedStyleSheets.splice(t, 1);
			}
			t.delete(n), t.size === 0 && JO.delete(e);
		}
	};
}, AO(tk, 4, "additionalRoots", QO, ck, nk), AO(tk, 2, "sourceRoot", ZO, ck), AO(tk, 2, "targetRoot", XO, ck), AO(tk, 2, "roots", YO, ck), OO(tk, ck);
var lk = "data-dnd-", uk = `${lk}dropping`, dk = "--dnd-", fk = `${lk}dragging`, pk = `${lk}placeholder`, mk = [
	fk,
	pk,
	"popover",
	"aria-pressed",
	"aria-grabbing"
], hk = ["view-transition-name"], gk = `
  :is(:root,:host) [${fk}] {
    position: fixed !important;
    pointer-events: none !important;
    touch-action: none;
    z-index: calc(infinity);
    will-change: translate;
    top: var(${dk}top, 0px) !important;
    left: var(${dk}left, 0px) !important;
    right: unset !important;
    bottom: unset !important;
    width: var(${dk}width, auto);
    max-width: var(${dk}width, auto);
    height: var(${dk}height, auto);
    max-height: var(${dk}height, auto);
    transition: var(${dk}transition) !important;
  }

  :is(:root,:host) [${pk}] {
    transition: none;
  }

  :is(:root,:host) [${pk}='hidden'] {
    visibility: hidden;
  }

  [${fk}] * {
    pointer-events: none !important;
  }

  [${fk}]:not([${uk}]) {
    translate: var(${dk}translate) !important;
  }

  [${fk}][style*='${dk}scale'] {
    scale: var(${dk}scale) !important;
    transform-origin: var(${dk}transform-origin) !important;
  }

  @layer dnd-kit {
    :where([${fk}][popover]) {
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
  [${fk}]::backdrop, [${lk}overlay]:not([${fk}]) {
    display: none;
    visibility: hidden;
  }
`.replace(/\n+/g, " ").replace(/\s+/g, " ").trim();
function _k(e, t = "hidden") {
	return K(() => {
		let { element: n, manager: r } = e;
		if (!n || !r) return;
		let i = vk(n, r.registry.droppables), a = [], o = DE(n), { remove: s } = o;
		return yk(i, o, a), bk(o, t), o.remove = () => {
			a.forEach((e) => e()), s.call(o);
		}, o;
	});
}
function vk(e, t) {
	let n = /* @__PURE__ */ new Map();
	for (let r of t) if (r.element && (e === r.element || e.contains(r.element))) {
		let e = `${lk}${cO("dom-id")}`;
		r.element.setAttribute(e, ""), n.set(r, e);
	}
	return n;
}
function yk(e, t, n) {
	for (let [r, i] of e) {
		if (!r.element) continue;
		let e = `[${i}]`, a = t.matches(e) ? t : t.querySelector(e);
		if (r.element.removeAttribute(i), !a) continue;
		let o = r.element;
		r.proxy = a, a.removeAttribute(i), ME.set(o, a), n.push(() => {
			ME.delete(o), r.proxy = void 0;
		});
	}
}
function bk(e, t = "hidden") {
	e.setAttribute("inert", "true"), e.setAttribute("tab-index", "-1"), e.setAttribute("aria-hidden", "true"), e.setAttribute(pk, t);
}
function xk(e, t) {
	return e === t ? !0 : FE(e) === FE(t);
}
function Sk(e) {
	let { target: t } = e;
	"newState" in e && e.newState === "closed" && nO(t) && t.hasAttribute("popover") && requestAnimationFrame(() => hD(t));
}
function Ck(e) {
	return e.tagName === "TR";
}
function wk(e, t, n) {
	let r = new MutationObserver((r) => {
		let i = !1;
		for (let n of r) {
			if (n.target !== e) {
				i = !0;
				continue;
			}
			if (n.type !== "attributes") continue;
			let r = n.attributeName;
			if (r.startsWith("aria-") || mk.includes(r)) continue;
			let a = e.getAttribute(r);
			if (r === "style") {
				if (eO(e) && eO(t)) {
					let n = e.style;
					for (let e of Array.from(t.style)) n.getPropertyValue(e) === "" && t.style.removeProperty(e);
					for (let e of Array.from(n)) {
						if (hk.includes(e) || e.startsWith(dk)) continue;
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
function Tk(e, t, n) {
	let r = new MutationObserver((r) => {
		for (let i of r) if (i.addedNodes.length !== 0) for (let r of Array.from(i.addedNodes)) {
			if (r.contains(e) && e.nextElementSibling !== t) {
				e.insertAdjacentElement("afterend", t), hD(n);
				return;
			}
			if (r.contains(t) && t.previousElementSibling !== e) {
				t.insertAdjacentElement("beforebegin", e), hD(n);
				return;
			}
		}
	});
	return r.observe(e.ownerDocument.body, {
		childList: !0,
		subtree: !0
	}), r;
}
function Ek(e) {
	return new ResizeObserver(() => {
		var t;
		let n = new QD(e.placeholder, {
			frameTransform: e.frameTransform,
			ignoreTransforms: !0
		}), r = e.transformOrigin ?? {
			x: 1,
			y: 1
		}, i = (e.width - n.width) * r.x + e.delta.x, a = (e.height - n.height) * r.y + e.delta.y, o = CE();
		if (e.styles.set({
			width: n.width - e.widthOffset,
			height: n.height - e.heightOffset,
			top: e.top + a + o.y,
			left: e.left + i + o.x
		}, dk), (t = e.getElementMutationObserver()) == null || t.takeRecords(), Ck(e.element) && Ck(e.placeholder)) {
			let t = Array.from(e.element.cells), n = Array.from(e.placeholder.cells);
			e.getSavedCellWidths() || e.setSavedCellWidths(t.map((e) => e.style.width));
			for (let [e, r] of t.entries()) {
				let t = n[e];
				r.style.width = `${t.getBoundingClientRect().width}px`;
			}
		}
		e.dragOperation.shape = new QD(e.feedbackElement);
	});
}
var Dk = 250, Ok = "ease";
function kk(e) {
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
	let { duration: r = Dk, easing: i = Ok } = n ?? {};
	hD(e.feedbackElement);
	let [, a] = oE(e.feedbackElement, (e) => "translate" in e) ?? [];
	a?.pause();
	let o = e.placeholder ?? e.element, s = { frameTransform: xk(e.feedbackElement, o) ? null : void 0 }, c = new QD(e.feedbackElement, s), l = PD(wD(e.feedbackElement).translate) ?? e.translate, u = new QD(o, s), d = CC.delta(c, u, e.alignment), f = {
		x: l.x - d.x,
		y: l.y - d.y
	}, p = Math.round(c.intrinsicHeight) === Math.round(u.intrinsicHeight) ? {} : {
		minHeight: [`${c.intrinsicHeight}px`, `${u.intrinsicHeight}px`],
		maxHeight: [`${c.intrinsicHeight}px`, `${u.intrinsicHeight}px`]
	}, m = Math.round(c.intrinsicWidth) === Math.round(u.intrinsicWidth) ? {} : {
		minWidth: [`${c.intrinsicWidth}px`, `${u.intrinsicWidth}px`],
		maxWidth: [`${c.intrinsicWidth}px`, `${u.intrinsicWidth}px`]
	};
	e.styles.set({ transition: e.transition }, dk), e.feedbackElement.setAttribute(uk, ""), (t = e.getElementMutationObserver()) == null || t.takeRecords(), GD({
		element: e.feedbackElement,
		keyframes: xO(bO(bO({}, p), m), { translate: [`${l.x}px ${l.y}px 0`, `${f.x}px ${f.y}px 0`] }),
		options: {
			duration: EE(uE(e.feedbackElement)) ? 0 : e.moved || e.feedbackElement !== e.element ? r : 0,
			easing: i
		}
	}).then(() => {
		e.feedbackElement.removeAttribute(uk), a?.finish(), e.cleanup(), requestAnimationFrame(e.restoreFocus);
	});
}
var Ak, jk, Mk, Nk, Pk, Fk, Ik, Lk = class extends (jk = fw, Ak = [q], jk) {
	constructor(e, t) {
		super(e, t), NO(this, Pk), NO(this, Nk, kO(Mk, 8, this)), kO(Mk, 11, this), this.state = {
			initial: {},
			current: {}
		};
		let n = e.registry.plugins.get(ck), r = n?.register(gk);
		if (r) {
			let e = this.destroy.bind(this);
			this.destroy = () => {
				r(), e();
			};
		}
		this.registerEffect(FO(this, Pk, Fk).bind(this, n)), this.registerEffect(FO(this, Pk, Ik));
	}
};
Mk = wO(jk), Nk = /* @__PURE__ */ new WeakMap(), Pk = /* @__PURE__ */ new WeakSet(), Fk = function(e) {
	let { overlay: t } = this;
	if (!t || !e) return;
	let n = TE(t);
	if (n) return e.addRoot(n);
}, Ik = function() {
	let { state: e, manager: t, options: n } = this, { dragOperation: r } = t, { position: i, source: a, status: o } = r;
	if (o.idle) {
		e.current = {}, e.initial = {};
		return;
	}
	if (!a) return;
	let { element: s, feedback: c } = a;
	if (!s || c === "none" || !o.initialized || o.initializing) return;
	let { initial: l } = e, u = this.overlay ?? s, d = jD(u), f = jD(s), p = !xk(s, u), m = new QD(s, {
		frameTransform: p ? f : null,
		ignoreTransforms: !p
	}), h = {
		x: f.scaleX / d.scaleX,
		y: f.scaleY / d.scaleY
	}, { width: g, height: _, top: v, left: y } = m;
	p && (g /= h.x, _ /= h.y);
	let b = new tO(u), { transition: x, translate: S, boxSizing: C, paddingBlockStart: w, paddingBlockEnd: T, paddingInlineStart: E, paddingInlineEnd: D, borderInlineStartWidth: O, borderInlineEndWidth: k, borderBlockStartWidth: A, borderBlockEndWidth: j } = wD(s), ee = c === "clone", M = C === "content-box", N = M ? parseInt(E) + parseInt(D) + parseInt(O) + parseInt(k) : 0, te = M ? parseInt(w) + parseInt(T) + parseInt(A) + parseInt(j) : 0, P = c !== "move" && !this.overlay ? _k(a, ee ? "clone" : "hidden") : null, ne = K(() => rO(t.dragOperation.activatorEvent));
	if (S !== "none") {
		let e = PD(S);
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
	u.setAttribute(fk, "true");
	let ue = K(() => r.transform), de = l.translate ?? {
		x: 0,
		y: 0
	}, fe = ue.x * d.scaleX + de.x, pe = ue.y * d.scaleY + de.y, me = CE();
	b.set({
		width: g - N,
		height: _ - te,
		top: le.top + me.y,
		left: le.left + me.x,
		translate: `${fe}px ${pe}px 0`,
		transition: x ? `${x}, translate 0ms linear` : "",
		scale: p ? `${h.x} ${h.y}` : "",
		"transform-origin": `${re.x * 100}% ${re.y * 100}%`
	}, dk), P && (s.insertAdjacentElement("afterend", P), n?.rootElement && (typeof n.rootElement == "function" ? n.rootElement(a) : n.rootElement).appendChild(s)), mD(u) && (u.hasAttribute("popover") || u.setAttribute("popover", "manual"), hD(u), u.addEventListener("beforetoggle", Sk));
	let he, ge, _e, ve = Ek({
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
	}), ye = new QD(u);
	K(() => r.shape = ye);
	let be = uE(u), xe = (e) => {
		this.manager.actions.stop({ event: e });
	}, Se = EE(be);
	ne && be.addEventListener("resize", xe), K(() => a.status) === "idle" && requestAnimationFrame(() => a.status = "dragging"), P && (ve.observe(P), he = wk(s, P, ee), ge = Tk(s, P, u));
	let Ce = t.dragOperation.source?.id, we = () => {
		if (!ne || Ce == null) return;
		let e = t.registry.draggables.get(Ce), n = e?.handle ?? e?.element;
		fE(n) && n.focus();
	}, Te = () => {
		if (he?.disconnect(), ge?.disconnect(), ve.disconnect(), be.removeEventListener("resize", xe), mD(u) && (u.removeEventListener("beforetoggle", Sk), u.removeAttribute("popover")), u.removeAttribute(fk), b.reset(), _e && Ck(s)) {
			let e = Array.from(s.cells);
			for (let [t, n] of e.entries()) n.style.width = _e[t] ?? "";
		}
		a.status = "idle";
		let t = e.current.translate != null;
		P && (t || P.parentElement !== u.parentElement) && u.isConnected && P.replaceWith(u), P?.remove();
	}, Ee = n?.dropAnimation, F = this, De = ES(() => {
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
			}, dk), he?.takeRecords(), s && s !== ye && a && !o.length) {
				let e = SC.delta(i, a);
				r.shape = CC.from(s.boundingRectangle).translate(e.x * d.scaleX, e.y * d.scaleY);
			} else r.shape = new QD(u);
			e.current.translate = i;
		}
	}, function() {
		if (r.status.dropped) {
			this.dispose(), a.status = "dropping";
			let n = F.dropAnimation === void 0 ? Ee : F.dropAnimation, r = e.current.translate, i = r != null;
			if (!r && s !== u && (r = {
				x: 0,
				y: 0
			}), !r || n === null) {
				Te();
				return;
			}
			t.renderer.rendering.then(() => {
				kk({
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
}, AO(Mk, 4, "overlay", Ak, Lk, Nk), OO(Mk, Lk), Lk.configure = ow(Lk);
var Rk = Lk, zk = !0, Bk = !1, Vk, Hk, Uk, Wk = (Uk = [q], LD.Forward), Gk, Kk, qk;
Hk = (Vk = [q], LD.Reverse);
var Jk = class {
	constructor() {
		NO(this, Kk, kO(Gk, 8, this, zk)), kO(Gk, 11, this), NO(this, qk, kO(Gk, 12, this, zk)), kO(Gk, 15, this);
	}
	isLocked(e) {
		return e === LD.Idle ? !1 : e == null ? this[LD.Forward] === zk && this[LD.Reverse] === zk : this[e] === zk;
	}
	unlock(e) {
		e !== LD.Idle && (this[e] = Bk);
	}
};
Gk = wO(null), Kk = /* @__PURE__ */ new WeakMap(), qk = /* @__PURE__ */ new WeakMap(), AO(Gk, 4, Wk, Uk, Jk, Kk), AO(Gk, 4, Hk, Vk, Jk, qk), OO(Gk, Jk);
var Yk = [LD.Forward, LD.Reverse], Xk = class {
	constructor() {
		this.x = new Jk(), this.y = new Jk();
	}
	isLocked() {
		return this.x.isLocked() && this.y.isLocked();
	}
}, Zk = class extends fw {
	constructor(e) {
		super(e);
		let t = Rx(new Xk()), n = null;
		this.signal = t, Jx(() => {
			let { status: r } = e.dragOperation;
			if (!r.initialized) {
				n = null, t.value = new Xk();
				return;
			}
			let { delta: i } = e.dragOperation.position;
			if (n) {
				let e = {
					x: Qk(i.x, n.x),
					y: Qk(i.y, n.y)
				}, r = t.peek();
				Dx(() => {
					for (let t of NC) for (let n of Yk) e[t] === n && r[t].unlock(n);
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
function Qk(e, t) {
	return Math.sign(e - t);
}
var $k, eA, tA, nA, rA, iA, aA = class extends (eA = pw, $k = [q], eA) {
	constructor(e) {
		super(e), NO(this, nA, kO(tA, 8, this, !1)), kO(tA, 11, this), NO(this, rA), NO(this, iA, () => {
			if (!Q(this, rA)) return;
			let { element: e, by: t } = Q(this, rA);
			t.y && (e.scrollTop += t.y), t.x && (e.scrollLeft += t.x);
		}), this.scroll = (e) => {
			if (this.disabled) return !1;
			let t = this.getScrollableElements();
			if (!t) return PO(this, rA, void 0), !1;
			let { position: n } = this.manager.dragOperation, r = n?.current;
			if (r) {
				let { by: n } = e ?? {}, i = n ? {
					x: oA(n.x),
					y: oA(n.y)
				} : void 0, a = i ? void 0 : this.scrollIntentTracker.current;
				if (a?.isLocked()) return !1;
				for (let e of t) {
					let t = vD(e, n);
					if (t.x || t.y) {
						let { speed: t, direction: o } = BD(e, r, i);
						if (a) for (let e of NC) a[e].isLocked(o[e]) && (t[e] = 0, o[e] = 0);
						if (o.x || o.y) {
							let { x: r, y: i } = n ?? o, a = r * t.x, s = i * t.y;
							if (a || s) {
								let t = Q(this, rA)?.by;
								if (this.autoScrolling && t && (t.x && !a || t.y && !s)) continue;
								return PO(this, rA, {
									element: e,
									by: {
										x: a,
										y: s
									}
								}), bD.schedule(Q(this, iA)), !0;
							}
						}
					}
				}
			}
			return PO(this, rA, void 0), !1;
		};
		let t = null, n = null, r = SS(() => {
			let { position: n, source: r } = e.dragOperation;
			if (!n) return null;
			let i = AE(TE(r?.element), n.current);
			return i && (t = i), i ?? t;
		}), i = SS(() => {
			let t = r.value, { documentElement: i } = mE(t);
			if (!t || t === i) {
				let { target: t } = e.dragOperation, r = t?.element;
				if (r) {
					let e = kD(r, { excludeElement: !1 });
					return n = e, e;
				}
			}
			if (t) {
				let e = kD(t, { excludeElement: !1 });
				return this.autoScrolling && n && e.size < n?.size ? n : (n = e, e);
			}
			return n = null, null;
		}, CS);
		this.getScrollableElements = () => i.value, this.scrollIntentTracker = new Zk(e), this.destroy = e.monitor.addEventListener("dragmove", (t) => {
			this.disabled || t.defaultPrevented || !rO(e.dragOperation.activatorEvent) || !t.by || this.scroll({ by: t.by }) && t.preventDefault();
		});
	}
};
tA = wO(eA), nA = /* @__PURE__ */ new WeakMap(), rA = /* @__PURE__ */ new WeakMap(), iA = /* @__PURE__ */ new WeakMap(), AO(tA, 4, "autoScrolling", $k, aA, nA), OO(tA, aA);
function oA(e) {
	return e > 0 ? LD.Forward : e < 0 ? LD.Reverse : LD.Idle;
}
var sA = new class {
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
}), cA = 10, lA = class extends fw {
	constructor(e, t) {
		super(e);
		let n = e.registry.plugins.get(aA);
		if (!n) throw Error("AutoScroller plugin depends on Scroller plugin");
		this.destroy = Jx(() => {
			if (this.disabled) return;
			let { position: t, status: r } = e.dragOperation;
			if (r.dragging) if (n.scroll()) {
				n.autoScrolling = !0;
				let e = setInterval(() => sA.schedule(n.scroll), cA);
				return () => {
					clearInterval(e);
				};
			} else n.autoScrolling = !1;
		});
	}
}, uA = {
	capture: !0,
	passive: !0
}, dA, fA = class extends pw {
	constructor(e) {
		super(e), NO(this, dA), this.handleScroll = () => {
			Q(this, dA) ?? PO(this, dA, setTimeout(() => {
				this.manager.collisionObserver.forceUpdate(!1), PO(this, dA, void 0);
			}, 50));
		};
		let { dragOperation: t } = this.manager;
		this.destroy = Jx(() => {
			if (t.status.dragging) {
				let e = t.source?.element?.ownerDocument ?? document;
				return e.addEventListener("scroll", this.handleScroll, uA), () => {
					e.removeEventListener("scroll", this.handleScroll, uA);
				};
			}
		});
	}
};
dA = /* @__PURE__ */ new WeakMap();
var pA = class extends fw {
	constructor(e, t) {
		super(e, t), this.manager = e, this.destroy = Jx(() => {
			let { dragOperation: e } = this.manager, { nonce: t } = this.options ?? {};
			if (e.status.initialized) {
				let e = document.createElement("style");
				return t && e.setAttribute("nonce", t), e.textContent = "* { user-select: none !important; -webkit-user-select: none !important; }", document.head.appendChild(e), mA(), document.addEventListener("selectionchange", mA, { capture: !0 }), () => {
					document.removeEventListener("selectionchange", mA, { capture: !0 }), e.remove();
				};
			}
		});
	}
};
function mA() {
	var e;
	(e = document.getSelection()) == null || e.removeAllRanges();
}
var hA = Object.freeze({
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
}), gA, _A = class extends xT {
	constructor(e, t) {
		super(e), this.manager = e, this.options = t, NO(this, gA, []), this.listeners = new PE(), this.handleSourceKeyDown = (e, t, n) => {
			if (this.disabled || e.defaultPrevented || !nO(e.target) || t.disabled) return;
			let { keyboardCodes: r = hA.keyboardCodes, preventActivation: i = hA.preventActivation } = n ?? {};
			r.start.includes(e.code) && this.manager.dragOperation.status.idle && (i?.(e, t) || this.handleStart(e, t, n));
		};
	}
	bind(e, t = this.options) {
		return Jx(() => {
			let n = e.handle ?? e.element, r = (n) => {
				rO(n) && this.handleSourceKeyDown(n, e, t);
			};
			if (n) return n.addEventListener("keydown", r), () => {
				n.removeEventListener("keydown", r);
			};
		});
	}
	handleStart(e, t, n) {
		let { element: r } = t;
		if (!r) throw Error("Source draggable does not have an associated element");
		e.preventDefault(), e.stopImmediatePropagation(), HD(r);
		let { center: i } = new QD(r);
		if (this.manager.actions.start({
			event: e,
			coordinates: {
				x: i.x,
				y: i.y
			},
			source: t
		}).signal.aborted) return this.cleanup();
		this.sideEffects();
		let a = mE(r), o = [this.listeners.bind(a, [{
			type: "keydown",
			listener: (e) => this.handleKeyDown(e, t, n),
			options: { capture: !0 }
		}])];
		Q(this, gA).push(...o);
	}
	handleKeyDown(e, t, n) {
		let { keyboardCodes: r = hA.keyboardCodes } = n ?? {};
		if (yA(e, [...r.end, ...r.cancel])) {
			e.preventDefault();
			let t = yA(e, r.cancel);
			this.handleEnd(e, t);
			return;
		}
		yA(e, r.up) ? this.handleMove("up", e) : yA(e, r.down) && this.handleMove("down", e), yA(e, r.left) ? this.handleMove("left", e) : yA(e, r.right) && this.handleMove("right", e);
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
		}, a = this.options?.offset ?? hA.offset;
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
		let e = this.manager.registry.plugins.get(lA);
		e?.disabled === !1 && (e.disable(), Q(this, gA).push(() => {
			e.enable();
		}));
	}
	cleanup() {
		Q(this, gA).forEach((e) => e()), PO(this, gA, []);
	}
	destroy() {
		this.cleanup(), this.listeners.clear();
	}
};
gA = /* @__PURE__ */ new WeakMap(), _A.configure = ow(_A), _A.defaults = hA;
var vA = _A;
function yA(e, t) {
	return t.includes(e.code);
}
var bA, xA = class extends wT {
	constructor() {
		super(...arguments), NO(this, bA);
	}
	onEvent(e) {
		switch (e.type) {
			case "pointerdown":
				PO(this, bA, yE(e));
				break;
			case "pointermove":
				if (!Q(this, bA)) return;
				let { x: t, y: n } = yE(e), r = {
					x: t - Q(this, bA).x,
					y: n - Q(this, bA).y
				}, { tolerance: i } = this.options;
				if (i && jC(r, i)) {
					this.abort();
					return;
				}
				jC(r, this.options.value) && this.activate(e);
				break;
			case "pointerup":
				this.abort();
				break;
		}
	}
	abort() {
		PO(this, bA, void 0);
	}
};
bA = /* @__PURE__ */ new WeakMap();
var SA, CA, wA = class extends wT {
	constructor() {
		super(...arguments), NO(this, SA), NO(this, CA);
	}
	onEvent(e) {
		switch (e.type) {
			case "pointerdown":
				PO(this, CA, yE(e)), PO(this, SA, setTimeout(() => this.activate(e), this.options.value));
				break;
			case "pointermove":
				if (!Q(this, CA)) return;
				let { x: t, y: n } = yE(e);
				jC({
					x: t - Q(this, CA).x,
					y: n - Q(this, CA).y
				}, this.options.tolerance) && this.abort();
				break;
			case "pointerup":
				this.abort();
				break;
		}
	}
	abort() {
		Q(this, SA) && (clearTimeout(Q(this, SA)), PO(this, CA, void 0), PO(this, SA, void 0));
	}
};
SA = /* @__PURE__ */ new WeakMap(), CA = /* @__PURE__ */ new WeakMap();
var TA = class {};
TA.Delay = wA, TA.Distance = xA;
var EA = Object.freeze({
	activationConstraints(e, t) {
		let { pointerType: n, target: r } = e;
		if (!(n === "mouse" && nO(r) && (t.handle === r || t.handle?.contains(r)))) return n === "touch" ? [new TA.Delay({
			value: 250,
			tolerance: 5
		})] : aO(r) && !e.defaultPrevented ? [new TA.Delay({
			value: 200,
			tolerance: 0
		})] : [new TA.Delay({
			value: 200,
			tolerance: 10
		}), new TA.Distance({ value: 5 })];
	},
	preventActivation(e, t) {
		let { target: n } = e;
		return n === t.element || n === t.handle || !nO(n) || t.handle?.contains(n) ? !1 : NE(n);
	}
}), DA, OA = class extends xT {
	constructor(e, t) {
		super(e), this.manager = e, this.options = t, NO(this, DA, /* @__PURE__ */ new Set()), this.listeners = new PE(), this.latest = {
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
		let { activationConstraints: r = EA.activationConstraints } = n ?? {};
		return typeof r == "function" ? r(e, t) : r;
	}
	bind(e, t = this.options) {
		return Jx(() => {
			let n = new AbortController(), { signal: r } = n, i = (n) => {
				iO(n) && this.handlePointerDown(n, e, t);
			}, a = [e.handle ?? e.element];
			t?.activatorElements && (a = Array.isArray(t.activatorElements) ? t.activatorElements : t.activatorElements(e));
			for (let e of a) e && (PA(e.ownerDocument.defaultView), e.addEventListener("pointerdown", i, { signal: r }));
			return () => n.abort();
		});
	}
	handlePointerDown(e, t, n) {
		if (this.disabled || !e.isPrimary || e.button !== 0 || !nO(e.target) || t.disabled || AA(e) || !this.manager.dragOperation.status.idle) return;
		let { preventActivation: r = EA.preventActivation } = n ?? {};
		if (r?.(e, t)) return;
		let { target: i } = e, a = fE(i) && i.draggable && i.getAttribute("draggable") === "true", o = jD(t.element), { x: s, y: c } = yE(e);
		this.initialCoordinates = {
			x: s * o.scaleX + o.x,
			y: c * o.scaleY + o.y
		};
		let l = this.activationConstraints(e, t, n);
		e.sensor = this;
		let u = new ST(l, (e) => this.handleStart(t, e));
		u.signal.onabort = () => this.handleCancel(e), u.onEvent(e), this.controller = u;
		let d = xE(), f = this.listeners.bind(d, [
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
				listener: a ? this.handleCancel : jA,
				options: { capture: !0 }
			}
		]);
		Q(this, DA).add(() => {
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
			let n = yE(e), r = jD(t.element);
			n.x = n.x * r.scaleX + r.x, n.y = n.y * r.scaleY + r.y, e.preventDefault(), e.stopPropagation(), this.latest.event = e, this.latest.coordinates = n, bD.schedule(this.handleMove);
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
		let i = mE(t.target).body;
		i.setPointerCapture(t.pointerId);
		let a = nO(t.target) ? [t.target, i] : i, o = this.listeners.bind(a, [
			{
				type: "touchmove",
				listener: jA,
				options: { passive: !1 }
			},
			{
				type: "click",
				listener: jA
			},
			{
				type: "contextmenu",
				listener: jA
			},
			{
				type: "keydown",
				listener: this.handleKeyDown
			}
		]);
		Q(this, DA).add(o);
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
		}, Q(this, DA).forEach((e) => e()), Q(this, DA).clear();
	}
	destroy() {
		this.cleanup(), this.listeners.clear();
	}
};
DA = /* @__PURE__ */ new WeakMap(), OA.configure = ow(OA), OA.defaults = EA;
var kA = OA;
function AA(e) {
	return "sensor" in e;
}
function jA(e) {
	e.preventDefault();
}
function MA() {}
var NA = /* @__PURE__ */ new WeakSet();
function PA(e) {
	!e || NA.has(e) || (e.addEventListener("touchmove", MA, {
		capture: !1,
		passive: !1
	}), NA.add(e));
}
var FA = {
	modifiers: [],
	plugins: [
		GO,
		lA,
		qO,
		Rk,
		pA
	],
	sensors: [kA, vA]
}, IA = class extends YT {
	constructor(e = {}) {
		let t = JT(e.plugins, FA.plugins), n = JT(e.sensors, FA.sensors), r = JT(e.modifiers, FA.modifiers);
		super(xO(bO({}, e), {
			plugins: [
				fA,
				aA,
				ck,
				...t
			],
			sensors: n,
			modifiers: r
		}));
	}
}, LA, RA, zA, BA, VA, HA, UA, WA, GA = class extends (BA = oT, zA = [q], RA = [q], LA = [q], BA) {
	constructor(e, t) {
		var n = e, { element: r, effects: i = () => [], handle: a, feedback: o = "default" } = n, s = CO(n, [
			"element",
			"effects",
			"handle",
			"feedback"
		]);
		super(bO({ effects: () => [...i(), () => {
			let { manager: e } = this;
			if (!e) return;
			let t = (this.sensors?.map(sw) ?? [...e.sensors]).map((t) => {
				let n = t instanceof xT ? t : e.registry.register(t.plugin), r = t instanceof xT ? void 0 : t.options;
				return n.bind(this, r);
			});
			return function() {
				t.forEach((e) => e());
			};
		}] }, s), t), NO(this, HA, kO(VA, 8, this)), kO(VA, 11, this), NO(this, UA, kO(VA, 12, this)), kO(VA, 15, this), NO(this, WA, kO(VA, 16, this)), kO(VA, 19, this), this.element = r, this.handle = a, this.feedback = o;
	}
};
VA = wO(BA), HA = /* @__PURE__ */ new WeakMap(), UA = /* @__PURE__ */ new WeakMap(), WA = /* @__PURE__ */ new WeakMap(), AO(VA, 4, "handle", zA, GA, HA), AO(VA, 4, "element", RA, GA, UA), AO(VA, 4, "feedback", LA, GA, WA), OO(VA, GA);
var KA, qA, JA, YA, XA, ZA, QA, $A, ej, tj, nj = class extends (JA = bT, qA = [q], KA = [q], JA) {
	constructor(e, t) {
		var n = e, { element: r, effects: i = () => [] } = n, a = CO(n, ["element", "effects"]);
		let { collisionDetector: o = QT } = a, s = (e) => {
			let { manager: t, element: n } = this;
			if (!n || e === null) {
				this.shape = void 0;
				return;
			}
			if (!t) return;
			let r = new QD(n), i = K(() => this.shape);
			return r && i?.equals(r) ? i : (this.shape = r, r);
		}, c = Rx(!1);
		super(xO(bO({}, a), {
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
						let t = new pD(e, s);
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
		}), t), NO(this, ej), NO(this, XA, kO(YA, 8, this)), kO(YA, 11, this), NO(this, tj, kO(YA, 12, this)), kO(YA, 15, this), this.element = r, this.refreshShape = () => s();
	}
	set element(e) {
		PO(this, ej, e, $A);
	}
	get element() {
		return this.proxy ?? Q(this, ej, QA);
	}
};
YA = wO(JA), XA = /* @__PURE__ */ new WeakMap(), ej = /* @__PURE__ */ new WeakSet(), tj = /* @__PURE__ */ new WeakMap(), ZA = AO(YA, 20, "#element", qA, ej, XA), QA = ZA.get, $A = ZA.set, AO(YA, 4, "proxy", KA, nj, tj), OO(YA, nj);
//#endregion
//#region node_modules/.pnpm/@dnd-kit+dom@0.3.2/node_modules/@dnd-kit/dom/sortable.js
var rj = Object.create, ij = Object.defineProperty, aj = Object.defineProperties, oj = Object.getOwnPropertyDescriptor, sj = Object.getOwnPropertyDescriptors, cj = Object.getOwnPropertySymbols, lj = Object.prototype.hasOwnProperty, uj = Object.prototype.propertyIsEnumerable, dj = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e), fj = (e) => {
	throw TypeError(e);
}, pj = (e, t, n) => t in e ? ij(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, mj = (e, t) => {
	for (var n in t ||= {}) lj.call(t, n) && pj(e, n, t[n]);
	if (cj) for (var n of cj(t)) uj.call(t, n) && pj(e, n, t[n]);
	return e;
}, hj = (e, t) => aj(e, sj(t)), gj = (e, t) => {
	var n = {};
	for (var r in e) lj.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && cj) for (var r of cj(e)) t.indexOf(r) < 0 && uj.call(e, r) && (n[r] = e[r]);
	return n;
}, _j = (e) => [
	,
	,
	,
	rj(null)
], vj = [
	"class",
	"method",
	"getter",
	"setter",
	"accessor",
	"field",
	"value",
	"get",
	"set"
], yj = (e) => e !== void 0 && typeof e != "function" ? fj("Function expected") : e, bj = (e, t, n, r, i) => ({
	kind: vj[e],
	name: t,
	metadata: r,
	addInitializer: (e) => n._ ? fj("Already initialized") : i.push(yj(e || null))
}), xj = (e, t) => pj(t, dj("metadata"), e[3]), Sj = (e, t, n, r) => {
	for (var i = 0, a = e[t >> 1], o = a && a.length; i < o; i++) t & 1 ? a[i].call(n) : r = a[i].call(n, r);
	return r;
}, Cj = (e, t, n, r, i, a) => {
	for (var o, s, c, l, u, d = t & 7, f = !1, p = !1, m = e.length + 1, h = vj[d + 5], g = e[m - 1] = [], _ = e[m] || (e[m] = []), v = (i = i.prototype, oj({
		get [n]() {
			return Tj(this, a);
		},
		set [n](e) {
			return Dj(this, a, e);
		}
	}, n)), y = r.length - 1; y >= 0; y--) l = bj(d, n, c = {}, e[3], _), l.static = f, l.private = p, u = l.access = { has: (e) => n in e }, u.get = (e) => e[n], u.set = (e, t) => e[n] = t, s = (0, r[y])({
		get: v.get,
		set: v.set
	}, l), c._ = 1, s === void 0 ? yj(s) && (v[h] = s) : typeof s != "object" || !s ? fj("Object expected") : (yj(o = s.get) && (v.get = o), yj(o = s.set) && (v.set = o), yj(o = s.init) && g.unshift(o));
	return v && ij(i, n, v), i;
}, wj = (e, t, n) => t.has(e) || fj("Cannot " + n), Tj = (e, t, n) => (wj(e, t, "read from private field"), t.get(e)), Ej = (e, t, n) => t.has(e) ? fj("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), Dj = (e, t, n, r) => (wj(e, t, "write to private field"), t.set(e, n), n);
function Oj(e) {
	return e instanceof lM || e instanceof cM;
}
var kj = 10, Aj = class extends fw {
	constructor(e) {
		super(e);
		let t = Jx(() => {
			let { dragOperation: t } = e;
			if (rO(t.activatorEvent) && Oj(t.source) && t.status.initialized) {
				let t = e.registry.plugins.get(aA);
				if (t) return t.disable(), () => t.enable();
			}
		}), n = e.monitor.addEventListener("dragmove", (e, t) => {
			queueMicrotask(() => {
				if (this.disabled || e.defaultPrevented || !e.nativeEvent) return;
				let { dragOperation: n } = t;
				if (!rO(e.nativeEvent) || !Oj(n.source) || !n.shape) return;
				let { actions: r, collisionObserver: i, registry: a } = t, { by: o } = e;
				if (!o) return;
				let s = jj(o), { source: c, target: l } = n, { center: u } = n.shape.current, d = [], f = [];
				Dx(() => {
					for (let e of a.droppables) {
						let { id: t } = e;
						if (!e.accepts(c) || t === l?.id && Oj(e) || !e.element) continue;
						let n = e.shape, r = new QD(e.element, { getBoundingClientRect: (e) => vE(e, void 0, .2) });
						!r.height || !r.width || (s == "down" && u.y + kj < r.center.y || s == "up" && u.y - kj > r.center.y || s == "left" && u.x - kj > r.center.x || s == "right" && u.x + kj < r.center.x) && (d.push(e), e.shape = r, f.push(() => e.shape = n));
					}
				}), e.preventDefault(), i.disable();
				let p = i.computeCollisions(d, $T);
				Dx(() => f.forEach((e) => e()));
				let [m] = p;
				if (!m) return;
				let { id: h } = m, { index: g, group: _ } = c.sortable;
				r.setDropTarget(h).then(() => {
					let { source: e, target: t, shape: a } = n;
					if (!e || !Oj(e) || !a) return;
					let { index: o, group: s, target: c } = e.sortable, l = g !== o || _ !== s, u = l ? c : t?.element;
					if (!u) return;
					HD(u);
					let d = new QD(u);
					if (!d) return;
					let f = CC.delta(d, CC.from(a.current.boundingRectangle), e.alignment);
					r.move({ by: f }), l ? r.setDropTarget(e.id).then(() => i.enable()) : i.enable();
				});
			});
		});
		this.destroy = () => {
			n(), t();
		};
	}
};
function jj(e) {
	let { x: t, y: n } = e;
	if (t > 0) return "right";
	if (t < 0) return "left";
	if (n > 0) return "down";
	if (n < 0) return "up";
}
var Mj = Object.defineProperty, Nj = Object.defineProperties, Pj = Object.getOwnPropertyDescriptors, Fj = Object.getOwnPropertySymbols, Ij = Object.prototype.hasOwnProperty, Lj = Object.prototype.propertyIsEnumerable, Rj = (e, t, n) => t in e ? Mj(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, zj = (e, t) => {
	for (var n in t ||= {}) Ij.call(t, n) && Rj(e, n, t[n]);
	if (Fj) for (var n of Fj(t)) Lj.call(t, n) && Rj(e, n, t[n]);
	return e;
}, Bj = (e, t) => Nj(e, Pj(t));
function Vj(e, t, n) {
	if (t === n) return e;
	let r = e.slice();
	return r.splice(n, 0, r.splice(t, 1)[0]), r;
}
function Hj(e) {
	return "initialIndex" in e && typeof e.initialIndex == "number" && "index" in e && typeof e.index == "number";
}
function Uj(e, t, n) {
	let { source: r, target: i, canceled: a } = t.operation;
	if (!r || !i || a) return "preventDefault" in t && t.preventDefault(), e;
	let o = (e, t) => e === t || typeof e == "object" && "id" in e && e.id === t;
	if (Array.isArray(e)) {
		let s = e.findIndex((e) => o(e, r.id)), c = e.findIndex((e) => o(e, i.id));
		if (s === -1 || c === -1) {
			if (Hj(r)) {
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
	if (c === -1 && Hj(r)) {
		let i = r.initialGroup, a = r.initialIndex, o = r.group, s = r.index;
		if (i == null || o == null || !(i in e) || !(o in e) || i === o && a === s) return "preventDefault" in t && t.preventDefault(), e;
		if (i === o) return Bj(zj({}, e), { [i]: n(e[i], a, s) });
		let c = e[i][a];
		return Bj(zj({}, e), {
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
		if (l != null && l === d && c === u && Hj(r)) {
			let t = r.group != null && r.group !== l, i = r.index !== c;
			if (t || i) {
				let t = r.group ?? l;
				if (t in e) {
					if (l === t) return Bj(zj({}, e), { [l]: n(e[l], c, r.index) });
					let i = e[l][c];
					return Bj(zj({}, e), {
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
	if (l === d) return Bj(zj({}, e), { [l]: n(e[l], c, u) });
	let m = i.shape && Math.round(p.y) > Math.round(i.shape.center.y) ? 1 : 0, h = e[l][c];
	return Bj(zj({}, e), {
		[l]: [...e[l].slice(0, c), ...e[l].slice(c + 1)],
		[d]: [
			...e[d].slice(0, u + m),
			h,
			...e[d].slice(u + m)
		]
	});
}
function Wj(e, t) {
	return Uj(e, t, Vj);
}
var Gj = "__default__", Kj = class extends fw {
	constructor(e) {
		super(e);
		let t = () => {
			let t = /* @__PURE__ */ new Map();
			for (let n of e.registry.droppables) if (n instanceof lM) {
				let { sortable: e } = n, { group: r } = e, i = t.get(r);
				i || (i = /* @__PURE__ */ new Set(), t.set(r, i)), i.add(e);
			}
			for (let [e, n] of t) t.set(e, new Set(Yj(n)));
			return t;
		}, n = [e.monitor.addEventListener("dragover", (e, n) => {
			if (this.disabled) return;
			let { dragOperation: r } = n, { source: i, target: a } = r;
			if (!Oj(i) || !Oj(a) || i.sortable === a.sortable) return;
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
					let f = Yj(c), p = s ? f : Yj(l), m = i.sortable.group ?? Gj, h = a.sortable.group ?? Gj, g = {
						[m]: f,
						[h]: p
					}, _ = Wj(g, e);
					if (g === _) return;
					let v = _[h].indexOf(i.sortable), y = _[h].indexOf(a.sortable);
					n.collisionObserver.disable(), qj(u, v, d, y), Dx(() => {
						for (let [e, t] of _[m].entries()) t.index = e;
						if (!s) for (let [e, t] of _[h].entries()) t.group = a.sortable.group, t.index = e;
					}), n.actions.setDropTarget(i.id).then(() => n.collisionObserver.enable());
				});
			});
		}), e.monitor.addEventListener("dragend", (e, n) => {
			if (!e.canceled) return;
			let { dragOperation: r } = n, { source: i } = r;
			Oj(i) && (i.sortable.initialIndex === i.sortable.index && i.sortable.initialGroup === i.sortable.group || queueMicrotask(() => {
				let e = t(), r = e.get(i.sortable.initialGroup);
				r && n.renderer.rendering.then(() => {
					for (let [t, n] of e.entries()) {
						let e = Array.from(n).entries();
						for (let [n, r] of e) if (r.index !== n || r.group !== t) return;
					}
					let t = Yj(r), n = i.sortable.element, a = t[i.sortable.initialIndex], o = a?.element;
					!a || !o || !n || (qj(n, a.index, o, i.index), Dx(() => {
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
function qj(e, t, n, r) {
	let i = r < t ? "afterend" : "beforebegin";
	n.insertAdjacentElement(i, e);
}
function Jj(e, t) {
	return e.index - t.index;
}
function Yj(e) {
	return Array.from(e).sort(Jj);
}
var Xj = [Aj, Kj], Zj = {
	duration: 250,
	easing: "cubic-bezier(0.25, 1, 0.5, 1)",
	idle: !1
}, Qj = new XS(), $j, eM = [q], tM, nM, rM, iM, aM, oM;
$j = [q];
var sM = class {
	constructor(e, t) {
		Ej(this, nM, Sj(tM, 8, this)), Sj(tM, 11, this), Ej(this, rM), Ej(this, iM), Ej(this, aM, Sj(tM, 12, this)), Sj(tM, 15, this), Ej(this, oM), this.register = () => (Dx(() => {
			var e, t;
			(e = this.manager) == null || e.registry.register(this.droppable), (t = this.manager) == null || t.registry.register(this.draggable);
		}), () => this.unregister()), this.unregister = () => {
			Dx(() => {
				var e, t;
				(e = this.manager) == null || e.registry.unregister(this.droppable), (t = this.manager) == null || t.registry.unregister(this.draggable);
			});
		}, this.destroy = () => {
			Dx(() => {
				this.droppable.destroy(), this.draggable.destroy();
			});
		};
		var n = e, { effects: r = () => [], group: i, index: a, sensors: o, type: s, transition: c = Zj, plugins: l = Xj } = n, u = gj(n, [
			"effects",
			"group",
			"index",
			"sensors",
			"type",
			"transition",
			"plugins"
		]);
		this.droppable = new lM(u, t, this), this.draggable = new cM(hj(mj({}, u), {
			effects: () => [
				() => {
					let e = this.manager?.dragOperation.status;
					e?.initializing && this.id === this.manager?.dragOperation.source?.id && Qj.clear(this.manager), e?.dragging && Qj.set(this.manager, this.id, K(() => ({
						initialIndex: this.index,
						initialGroup: this.group
					})));
				},
				() => {
					let { index: e, group: t, manager: n } = this, r = Tj(this, iM), i = Tj(this, rM);
					(e !== r || t !== i) && (Dj(this, iM, e), Dj(this, rM, t), this.animate());
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
		}), t, this), Dj(this, oM, u.element), this.manager = t, this.index = a, Dj(this, iM, a), this.group = i, Dj(this, rM, i), this.type = s, this.transition = c;
	}
	get initialIndex() {
		return Qj.get(this.manager, this.id)?.initialIndex ?? this.index;
	}
	get initialGroup() {
		return Qj.get(this.manager, this.id)?.initialGroup ?? this.group;
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
				}, { translate: o } = wD(r), s = KD(r, o, !1), c = KD(r, o);
				if (a.x || a.y) {
					let n = EE(uE(r)) ? hj(mj({}, t), { duration: 0 }) : t;
					GD({
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
		Dx(() => {
			this.draggable.manager = e, this.droppable.manager = e;
		});
	}
	set element(e) {
		Dx(() => {
			let t = Tj(this, oM), n = this.droppable.element, r = this.draggable.element;
			(!n || n === t) && (this.droppable.element = e), (!r || r === t) && (this.draggable.element = e), Dj(this, oM, e);
		});
	}
	get element() {
		let e = Tj(this, oM);
		if (e) return ME.get(e) ?? e ?? this.droppable.element;
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
		Dx(() => {
			this.droppable.disabled = e, this.draggable.disabled = e;
		});
	}
	set data(e) {
		Dx(() => {
			this.droppable.data = e, this.draggable.data = e;
		});
	}
	set handle(e) {
		this.draggable.handle = e;
	}
	set id(e) {
		Dx(() => {
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
		this.droppable.collisionDetector = e ?? QT;
	}
	set alignment(e) {
		this.draggable.alignment = e;
	}
	get alignment() {
		return this.draggable.alignment;
	}
	set type(e) {
		Dx(() => {
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
tM = _j(), nM = /* @__PURE__ */ new WeakMap(), rM = /* @__PURE__ */ new WeakMap(), iM = /* @__PURE__ */ new WeakMap(), aM = /* @__PURE__ */ new WeakMap(), oM = /* @__PURE__ */ new WeakMap(), Cj(tM, 4, "index", eM, sM, nM), Cj(tM, 4, "group", $j, sM, aM), xj(tM, sM);
var cM = class extends GA {
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
}, lM = class extends nj {
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
function uM(e) {
	return typeof e == "object" && !!e && "current" in e;
}
function dM(e) {
	if (e != null) return uM(e) ? e.current ?? void 0 : e;
}
//#endregion
//#region node_modules/.pnpm/@dnd-kit+react@0.3.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@dnd-kit/react/hooks.js
var fM = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0 ? I.useLayoutEffect : I.useEffect;
function pM() {
	let e = (0, I.useState)(0)[1];
	return (0, I.useCallback)(() => {
		e((e) => e + 1);
	}, [e]);
}
function mM(e, t) {
	let n = (0, I.useRef)(/* @__PURE__ */ new Map()), r = pM();
	return fM(() => {
		if (!e) {
			n.current.clear();
			return;
		}
		return Jx(() => {
			let i = !1, a = !1;
			for (let r of n.current) {
				let [o] = r, s = K(() => r[1]), c = e[o];
				s !== c && (i = !0, n.current.set(o, c), a = t?.(o, s, c) ?? !1);
			}
			i && (a ? (0, Oe.flushSync)(r) : r());
		});
	}, [e]), (0, I.useMemo)(() => e && new Proxy(e, { get(e, t) {
		let r = e[t];
		return n.current.set(t, r), r;
	} }), [e]);
}
function hM(e, t) {
	e();
}
function gM(e) {
	let t = (0, I.useRef)(e);
	return fM(() => {
		t.current = e;
	}, [e]), t;
}
function _M(e, t, n = I.useEffect, r = Object.is) {
	let i = (0, I.useRef)(e);
	n(() => {
		let n = i.current;
		r(e, n) || (i.current = e, t(e, n));
	}, [t, e]);
}
function vM(e, t) {
	let n = (0, I.useRef)(dM(e));
	fM(() => {
		let r = dM(e);
		r !== n.current && (n.current = r, t(r));
	});
}
//#endregion
//#region node_modules/.pnpm/@dnd-kit+react@0.3.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@dnd-kit/react/index.js
var yM = Object.getOwnPropertySymbols, bM = Object.prototype.hasOwnProperty, xM = Object.prototype.propertyIsEnumerable, SM = (e, t) => {
	var n = {};
	for (var r in e) bM.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && yM) for (var r of yM(e)) t.indexOf(r) < 0 && xM.call(e, r) && (n[r] = e[r]);
	return n;
}, CM = (0, I.createContext)(new IA()), wM = (0, I.memo)((0, I.forwardRef)(({ children: e }, t) => {
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
	return fM(() => {
		var e;
		(e = a.current) == null || e.call(a), i.current = null;
	}, [e, n]), (0, I.useImperativeHandle)(t, () => o), null;
})), TM = [void 0, CS];
function EM(e) {
	var t = e, { children: n, onCollision: r, onBeforeDragStart: i, onDragStart: a, onDragMove: o, onDragOver: s, onDragEnd: c } = t, l = SM(t, [
		"children",
		"onCollision",
		"onBeforeDragStart",
		"onDragStart",
		"onDragMove",
		"onDragOver",
		"onDragEnd"
	]);
	let u = (0, I.useRef)(null), { plugins: d, modifiers: f, sensors: p } = l, m = JT(d, FA.plugins), h = JT(p, FA.sensors), g = JT(f, FA.modifiers), _ = gM(i), v = gM(a), y = gM(s), b = gM(o), x = gM(c), S = gM(r), C = DM(() => l.manager ?? new IA(l));
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
	}, [C]), _M(m, () => C && (C.plugins = m), ...TM), _M(h, () => C && (C.sensors = h), ...TM), _M(g, () => C && (C.modifiers = g), ...TM), /* @__PURE__ */ (0, F.jsxs)(CM.Provider, {
		value: C,
		children: [/* @__PURE__ */ (0, F.jsx)(wM, {
			ref: u,
			children: n
		}), n]
	});
}
function DM(e) {
	let t = (0, I.useRef)(null);
	return t.current ||= e(), (0, I.useInsertionEffect)(() => () => t.current?.destroy(), []), t.current;
}
function OM() {
	return (0, I.useContext)(CM);
}
function kM(e) {
	let t = OM() ?? void 0, [n] = (0, I.useState)(() => e(t));
	return n.manager !== t && (n.manager = t), fM(n.register, [t, n]), n;
}
var AM = Object.create, jM = Object.defineProperty, MM = Object.getOwnPropertyDescriptor, NM = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e), PM = (e) => {
	throw TypeError(e);
}, FM = (e, t, n) => t in e ? jM(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, IM = (e) => [
	,
	,
	,
	AM(e?.[NM("metadata")] ?? null)
], LM = [
	"class",
	"method",
	"getter",
	"setter",
	"accessor",
	"field",
	"value",
	"get",
	"set"
], RM = (e) => e !== void 0 && typeof e != "function" ? PM("Function expected") : e, zM = (e, t, n, r, i) => ({
	kind: LM[e],
	name: t,
	metadata: r,
	addInitializer: (e) => n._ ? PM("Already initialized") : i.push(RM(e || null))
}), BM = (e, t) => FM(t, NM("metadata"), e[3]), VM = (e, t, n, r) => {
	for (var i = 0, a = e[t >> 1], o = a && a.length; i < o; i++) a[i].call(n);
	return r;
}, HM = (e, t, n, r, i, a) => {
	for (var o, s, c, l, u = t & 7, d = !1, f = !1, p = 2, m = LM[u + 5], h = e[p] || (e[p] = []), g = (i = i.prototype, MM(i, n)), _ = r.length - 1; _ >= 0; _--) c = zM(u, n, s = {}, e[3], h), c.static = d, c.private = f, l = c.access = { has: (e) => n in e }, l.get = (e) => e[n], o = (0, r[_])(g[m], c), s._ = 1, RM(o) && (g[m] = o);
	return g && jM(i, n, g), i;
}, UM = (e, t, n) => t.has(e) || PM("Cannot " + n), WM = (e, t, n) => (UM(e, t, "read from private field"), t.get(e)), GM = (e, t, n) => t.has(e) ? PM("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), KM = (e, t, n, r) => (UM(e, t, "write to private field"), t.set(e, n), n), qM = class e {
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
}, JM, YM, XM, ZM, QM, $M = class extends (XM = qS, YM = [wS], JM = [wS], XM) {
	constructor(e) {
		let t = qM.from(e);
		super(t, (e, t) => qM.equals(e, t)), VM(QM, 5, this), GM(this, ZM, 0), this.velocity = {
			x: 0,
			y: 0
		};
	}
	get delta() {
		return qM.delta(this.current, this.initial);
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
		let { current: t } = this, n = qM.from(e), r = {
			x: n.x - t.x,
			y: n.y - t.y
		}, i = Date.now(), a = i - WM(this, ZM), o = (e) => Math.round(e / a * 100);
		Dx(() => {
			KM(this, ZM, i), this.velocity = {
				x: o(r.x),
				y: o(r.y)
			}, super.current = n;
		});
	}
	reset(e = this.defaultValue) {
		super.reset(qM.from(e)), this.velocity = {
			x: 0,
			y: 0
		};
	}
};
QM = IM(XM), ZM = /* @__PURE__ */ new WeakMap(), HM(QM, 2, "delta", YM, $M), HM(QM, 2, "direction", JM, $M), BM(QM, $M);
var eN = /* @__PURE__ */ ((e) => (e.Horizontal = "x", e.Vertical = "y", e))(eN || {});
Object.values(eN);
//#endregion
//#region node_modules/.pnpm/@dnd-kit+react@0.3.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@dnd-kit/react/sortable.js
var tN = Object.defineProperty, nN = Object.defineProperties, rN = Object.getOwnPropertyDescriptors, iN = Object.getOwnPropertySymbols, aN = Object.prototype.hasOwnProperty, oN = Object.prototype.propertyIsEnumerable, sN = (e, t, n) => t in e ? tN(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, cN = (e, t) => {
	for (var n in t ||= {}) aN.call(t, n) && sN(e, n, t[n]);
	if (iN) for (var n of iN(t)) oN.call(t, n) && sN(e, n, t[n]);
	return e;
}, lN = (e, t) => nN(e, rN(t));
function uN(e) {
	let { accept: t, collisionDetector: n, collisionPriority: r, id: i, data: a, element: o, handle: s, index: c, group: l, disabled: u, feedback: d, modifiers: f, sensors: p, target: m, type: h } = e, g = cN(cN({}, Zj), e.transition), _ = kM((t) => new sM(lN(cN({}, e), {
		transition: g,
		register: !1,
		handle: dM(s),
		element: dM(o),
		target: dM(m),
		feedback: d
	}), t)), v = mM(_, dN);
	return _M(i, () => _.id = i), fM(() => {
		Dx(() => {
			_.group = l, _.index = c;
		});
	}, [
		_,
		l,
		c
	]), _M(h, () => _.type = h), _M(t, () => _.accept = t, void 0, CS), _M(a, () => a && (_.data = a)), _M(c, () => {
		_.manager?.dragOperation.status.idle && g?.idle && _.refreshShape();
	}, hM), vM(s, (e) => _.handle = e), vM(o, (e) => _.element = e), vM(m, (e) => _.target = e), _M(u, () => _.disabled = u === !0), _M(p, () => _.sensors = p), _M(n, () => _.collisionDetector = n), _M(r, () => _.collisionPriority = r), _M(d, () => _.feedback = d ?? "default"), _M(g, () => _.transition = g, void 0, CS), _M(f, () => _.modifiers = f, void 0, CS), _M(e.alignment, () => _.alignment = e.alignment), {
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
function dN(e, t, n) {
	return !!(e === "isDragSource" && !n && t);
}
//#endregion
//#region node_modules/.pnpm/@dnd-kit+helpers@0.3.2/node_modules/@dnd-kit/helpers/dist/index.js
var fN = Object.defineProperty, pN = Object.defineProperties, mN = Object.getOwnPropertyDescriptors, hN = Object.getOwnPropertySymbols, gN = Object.prototype.hasOwnProperty, _N = Object.prototype.propertyIsEnumerable, vN = (e, t, n) => t in e ? fN(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, yN = (e, t) => {
	for (var n in t ||= {}) gN.call(t, n) && vN(e, n, t[n]);
	if (hN) for (var n of hN(t)) _N.call(t, n) && vN(e, n, t[n]);
	return e;
}, bN = (e, t) => pN(e, mN(t));
function xN(e, t, n) {
	if (t === n) return e;
	let r = e.slice();
	return r.splice(n, 0, r.splice(t, 1)[0]), r;
}
function SN(e) {
	return "initialIndex" in e && typeof e.initialIndex == "number" && "index" in e && typeof e.index == "number";
}
function CN(e, t, n) {
	let { source: r, target: i, canceled: a } = t.operation;
	if (!r || !i || a) return "preventDefault" in t && t.preventDefault(), e;
	let o = (e, t) => e === t || typeof e == "object" && "id" in e && e.id === t;
	if (Array.isArray(e)) {
		let s = e.findIndex((e) => o(e, r.id)), c = e.findIndex((e) => o(e, i.id));
		if (s === -1 || c === -1) {
			if (SN(r)) {
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
	if (c === -1 && SN(r)) {
		let i = r.initialGroup, a = r.initialIndex, o = r.group, s = r.index;
		if (i == null || o == null || !(i in e) || !(o in e) || i === o && a === s) return "preventDefault" in t && t.preventDefault(), e;
		if (i === o) return bN(yN({}, e), { [i]: n(e[i], a, s) });
		let c = e[i][a];
		return bN(yN({}, e), {
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
		if (l != null && l === d && c === u && SN(r)) {
			let t = r.group != null && r.group !== l, i = r.index !== c;
			if (t || i) {
				let t = r.group ?? l;
				if (t in e) {
					if (l === t) return bN(yN({}, e), { [l]: n(e[l], c, r.index) });
					let i = e[l][c];
					return bN(yN({}, e), {
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
	if (l === d) return bN(yN({}, e), { [l]: n(e[l], c, u) });
	let m = i.shape && Math.round(p.y) > Math.round(i.shape.center.y) ? 1 : 0, h = e[l][c];
	return bN(yN({}, e), {
		[l]: [...e[l].slice(0, c), ...e[l].slice(c + 1)],
		[d]: [
			...e[d].slice(0, u + m),
			h,
			...e[d].slice(u + m)
		]
	});
}
function wN(e, t) {
	return CN(e, t, xN);
}
//#endregion
//#region src/card/common/studio-ui/CardListEditor.tsx
function TN({ id: e, cardName: t, index: n, active: r, canDelete: i, onSelect: a, onDelete: o }) {
	let { ref: s } = uN({
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
function EN({ enableCardOrientation: e = !1 }) {
	let { values: t, setFieldValue: n } = sy(), [r, i] = (0, I.useState)(0);
	return /* @__PURE__ */ (0, F.jsx)(EM, {
		onDragOver: (e) => n("cards", wN(t.cards, e)),
		children: /* @__PURE__ */ (0, F.jsx)(By, {
			name: "cards",
			children: ({ push: n, remove: a }) => /* @__PURE__ */ (0, F.jsxs)("div", {
				className: "row m-0 carousel-editor",
				children: [/* @__PURE__ */ (0, F.jsxs)("div", {
					className: "col-3 p-2 border-right",
					children: [/* @__PURE__ */ (0, F.jsx)(O, {
						variant: "primary",
						iconBefore: Vr,
						onClick: () => {
							n(Vy(t.cards, e ? { orientation: "HORIZONTAL" } : {})), i(t.cards.length);
						},
						children: "Add Card"
					}), /* @__PURE__ */ (0, F.jsx)("div", {
						className: "mt-4",
						children: t.cards.map((e, n) => /* @__PURE__ */ (0, F.jsx)(TN, {
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
					children: t.cards.length > 0 && /* @__PURE__ */ (0, F.jsx)(wx, {
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
function DN({ showingEditor: e, onContinue: t }) {
	let { runtime: n } = (0, I.useContext)(C);
	return /* @__PURE__ */ (0, F.jsx)(eu.Footer, {
		className: "border-top",
		children: /* @__PURE__ */ (0, F.jsxs)(ve, {
			direction: "horizontal",
			gap: 4,
			children: [/* @__PURE__ */ (0, F.jsx)(O, {
				variant: "light",
				className: "action-button",
				onClick: () => n.notify("cancel", {}),
				type: "button",
				children: "Cancel"
			}), e ? /* @__PURE__ */ (0, F.jsx)(O, {
				variant: "primary",
				type: "submit",
				className: "save-button",
				children: "Save"
			}) : /* @__PURE__ */ (0, F.jsx)(O, {
				type: "button",
				variant: "primary",
				className: "save-button",
				onClick: t,
				children: "Continue"
			})]
		})
	});
}
//#endregion
//#region src/shared/components/JsonImporter.tsx
function ON({ error: e }) {
	return /* @__PURE__ */ (0, F.jsx)("ul", {
		className: "mb-0 pl-3",
		children: Object.entries(e).map(([e, t]) => /* @__PURE__ */ (0, F.jsxs)("li", { children: [e, /* @__PURE__ */ (0, F.jsx)("ul", { children: t.map((e) => /* @__PURE__ */ (0, F.jsx)("li", { children: /* @__PURE__ */ (0, F.jsx)("code", { children: e }) }, e)) })] }, e))
	});
}
function kN({ liveData: e }) {
	let [t, n] = (0, I.useState)(null), { runtime: r, element: i } = (0, I.useContext)(C);
	async function a(e) {
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
	let o = ({ fileData: e, handleError: t }) => {
		let a = r.handlerUrl(i, "studio_save");
		r.notify("save", { state: "start" }), n(null), e.get("file").text().then((e) => {
			$.post(a, e).done(() => {
				r.notify("save", { state: "end" });
			}).fail((e) => {
				t(/* @__PURE__ */ Error("Upload rejected.")), n(e.responseJSON?.error ?? e.responseText);
			});
		});
	}, s = (e) => {
		let t = new Blob([JSON.stringify(e, null, 2)], { type: "application/json" }), n = URL.createObjectURL(t), r = document.createElement("a");
		r.href = n, r.download = "data.json", document.body.appendChild(r), r.click(), document.body.removeChild(r), setTimeout(() => URL.revokeObjectURL(n), 100);
	};
	return /* @__PURE__ */ (0, F.jsxs)("div", {
		className: "p-3",
		children: [
			/* @__PURE__ */ (0, F.jsxs)(H.Group, { children: [/* @__PURE__ */ (0, F.jsx)(H.Label, { children: "Update Component using JSON file" }), /* @__PURE__ */ (0, F.jsx)(Hf, {
				onProcessUpload: o,
				accept: { "application/json": [".json"] },
				validator: a
			})] }),
			t && /* @__PURE__ */ (0, F.jsxs)(Ir, {
				variant: "danger",
				className: "mt-3",
				children: [/* @__PURE__ */ (0, F.jsx)(Ir.Heading, { children: "JSON validation failed!" }), typeof t == "string" ? /* @__PURE__ */ (0, F.jsx)("p", {
					className: "mb-0",
					children: t
				}) : /* @__PURE__ */ (0, F.jsx)(ON, { error: t })]
			}),
			/* @__PURE__ */ (0, F.jsxs)("div", {
				className: "mt-3",
				children: [
					/* @__PURE__ */ (0, F.jsx)("h4", { children: "JSON Templates" }),
					/* @__PURE__ */ (0, F.jsxs)("p", { children: [
						/* @__PURE__ */ (0, F.jsx)(O, {
							variant: "secondary",
							className: "m-2",
							onClick: () => s(e),
							children: "Download component data"
						}),
						/* @__PURE__ */ (0, F.jsx)("br", {}),
						/* @__PURE__ */ (0, F.jsx)("small", { children: "The component data files contain the data of the current component without any schema information." })
					] }),
					/* @__PURE__ */ (0, F.jsxs)("p", { children: [
						/* @__PURE__ */ (0, F.jsx)("a", {
							className: "m-2 btn btn-secondary",
							href: r.handlerUrl(i, "json_schema"),
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
function AN() {
	let e = Uy[0].key, [t, n] = (0, I.useState)(e), { values: r, setFieldValue: i } = sy(), a = !!Tp()?.enable_json_editing, o = a ? Uy : Uy.filter((e) => e.key !== "json");
	return /* @__PURE__ */ (0, F.jsx)(jy, { children: /* @__PURE__ */ (0, F.jsx)(Yn, {
		id: "card-carousel-studio-tabs",
		activeKey: t,
		onSelect: (t) => n(t || e),
		transition: !1,
		children: /* @__PURE__ */ (0, F.jsxs)("div", {
			className: "studio-ui card-carousel-studio",
			children: [
				/* @__PURE__ */ (0, F.jsx)(Wy, {
					activeTab: t,
					title: r.displayName,
					onTitleChange: (e) => i("displayName", e),
					tabs: o
				}),
				/* @__PURE__ */ (0, F.jsx)(eu.Body, { children: /* @__PURE__ */ (0, F.jsxs)(Zn, {
					className: "card-carousel-studio-tab-content",
					children: [
						/* @__PURE__ */ (0, F.jsx)(tr, {
							eventKey: "content",
							children: /* @__PURE__ */ (0, F.jsx)(EN, { enableCardOrientation: !0 })
						}),
						/* @__PURE__ */ (0, F.jsx)(tr, {
							eventKey: "settings",
							children: /* @__PURE__ */ (0, F.jsx)(Hy, {})
						}),
						a && /* @__PURE__ */ (0, F.jsx)(tr, {
							eventKey: "json",
							children: /* @__PURE__ */ (0, F.jsx)(kN, { liveData: r })
						})
					]
				}) }),
				/* @__PURE__ */ (0, F.jsx)(DN, {
					showingEditor: !0,
					onContinue: () => {}
				})
			]
		})
	}) });
}
function jN({ initData: e }) {
	let { runtime: t } = (0, I.useContext)(C), n = u("studio_save");
	return /* @__PURE__ */ (0, F.jsx)(Sy, {
		initialValues: (0, I.useMemo)(() => e.cards.length ? e : {
			...e,
			cards: [Vy([], { orientation: "HORIZONTAL" })]
		}, [e]),
		onSubmit: (e) => {
			me({
				saveUrl: n,
				data: e,
				runtime: t,
				errorMessage: "Failed to save the card carousel."
			});
		},
		children: /* @__PURE__ */ (0, F.jsx)(AN, {})
	});
}
//#endregion
//#region src/card/card-carousel/studio-ui/StudioUI.css?inline
var MN = ".icon-selector.dropdown-toggle:after{display:none}.icon-list-popup{background-color:var(--pgn-color-body-bg);width:292px;min-height:242px;max-height:300px;overflow:scroll}button:not(:disabled).icon-symbol{background-color:var(--pgn-color-body-bg);width:auto;color:var(--pgn-color-gray-600);border:0}button:not(:disabled).icon-symbol:hover{background-color:var(--pgn-color-light);color:var(--pgn-color-primary)}button:not(:disabled).icon-symbol:focus{background-color:var(--pgn-color-light);color:var(--pgn-color-primary);border:0}.card-carousel-editor-modal-footer{background-color:var(--pgn-color-card-bg-base)}.xblock-root .input-group .pgn__form-control-decorator-group{margin-right:0}.xblock-root .input-group .pgn__form-control-decorator-group .form-control{border-top-right-radius:0;border-bottom-right-radius:0}.pgn__modal-header.studio-header{padding:calc(var(--pgn-spacing-modal-inner-padding-base) / 2) var(--pgn-spacing-modal-header-padding-base-x);z-index:1}.studio-header-title{align-items:center;gap:var(--pgn-spacing-spacer-2,8px);display:flex}.studio-header-tabs-nav{flex-wrap:nowrap;padding-right:64px}.studio-header-tabs-nav .nav-link{appearance:none;font-family:inherit;font-size:inherit;line-height:inherit;cursor:pointer;background-color:#0000}.wrapper.xblock-iframe-content .xblock-v1-studio_view{display:flex}.xblock-root,.xblock-root .react-studio-block,.xblock-root .react-studio-block .container-fluid{height:100%}.react-studio-block{flex-grow:1}.react-studio-block *,.react-studio-block :before,.react-studio-block :after{box-sizing:border-box}.react-studio-block{margin-bottom:0!important}.xblock-actions{border-top:1px solid var(--pgn-color-gray-200);background:var(--pgn-color-white);z-index:1;justify-content:flex-end;gap:.5em;padding:.75em 1em;display:flex;position:sticky;bottom:0;box-shadow:0 -2px 6px #0000000d}.react-colorful{-webkit-user-select:none;user-select:none;cursor:default;flex-direction:column;width:200px;height:200px;display:flex;position:relative}.react-colorful__saturation{background-image:linear-gradient(#0000,#000),linear-gradient(90deg,#fff,#fff0);border-color:#0000 #0000 #000;border-bottom-style:solid;border-bottom-width:12px;border-radius:8px 8px 0 0;flex-grow:1;position:relative}.react-colorful__pointer-fill,.react-colorful__alpha-gradient{content:\"\";pointer-events:none;border-radius:inherit;position:absolute;inset:0}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px #0000000d}.react-colorful__hue,.react-colorful__alpha{height:24px;position:relative}.react-colorful__hue{background:linear-gradient(90deg,red 0%,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red 100%)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{border-radius:inherit;touch-action:none;outline:none;position:absolute;inset:0}.react-colorful__pointer{z-index:1;box-sizing:border-box;background-color:#fff;border:2px solid #fff;border-radius:50%;width:28px;height:28px;position:absolute;transform:translate(-50%,-50%);box-shadow:0 2px 4px #0003}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%)scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url(\"data:image/svg+xml,<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" width=\\\"16\\\" height=\\\"16\\\" fill-opacity=\\\".05\\\"><rect x=\\\"8\\\" width=\\\"8\\\" height=\\\"8\\\"/><rect y=\\\"8\\\" width=\\\"8\\\" height=\\\"8\\\"/></svg>\")}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}.card-carousel-studio{flex-direction:column;justify-content:space-between;min-height:635px;display:flex}.card-carousel-create-form{padding:var(--pgn-spacing-spacer-3,16px)}.card-carousel-studio-tab-content{flex:auto;min-height:0}.card-carousel-studio-field{margin-bottom:var(--pgn-spacing-spacer-4,24px)}.card-carousel-studio-field--last{margin-bottom:0}.card-carousel-studio-help-text{font-size:var(--pgn-typography-font-size-sm,.875rem)}.material-icons-outlined{text-transform:none;letter-spacing:normal;word-wrap:normal;white-space:nowrap;-webkit-font-smoothing:antialiased;text-rendering:optimizelegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:\"liga\";direction:ltr;font-family:Material Icons Outlined;font-size:24px;font-style:normal;font-weight:400;line-height:1;display:inline-block}", NN = (e, t, n) => {
	let r = d(e).parentElement?.parentElement;
	r && (r.style.minHeight = "635px", r.style.maxHeight = "calc(100vh - 51px)", r.style.overflowY = "scroll"), s({
		runtime: t,
		element: e,
		config: n.config,
		styles: MN
	})(/* @__PURE__ */ (0, F.jsx)(wp.Provider, {
		value: n.config,
		children: /* @__PURE__ */ (0, F.jsx)(jN, { initData: n.data })
	}));
};
//#endregion
export { NN as renderBlock };
