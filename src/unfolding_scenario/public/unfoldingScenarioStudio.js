import { A as e, B as t, C as n, D as r, E as i, F as a, H as o, I as s, L as c, M as l, N as u, O as d, P as f, R as p, S as m, T as h, U as g, V as _, _ as v, a as y, b, c as x, d as S, f as C, g as ee, h as w, j as T, k as E, l as D, m as O, o as te, p as ne, r as re, s as ie, u as ae, v as oe, w as k, x as se, y as ce, z as le } from "./ModalLayer-BFqdWSqi.js";
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/ActionRow/index.js
var A = /* @__PURE__ */ g(_()), j = /* @__PURE__ */ g(l());
function ue({ as: e = "div", isStacked: t = !1, children: n, ...r }) {
	return /* @__PURE__ */ A.createElement(e, {
		...r,
		className: (0, j.default)(r.className, {
			"pgn__action-row": !t,
			"pgn__action-row-stacked": t
		})
	}, n);
}
function de() {
	return /* @__PURE__ */ A.createElement("span", { className: "pgn__action-row-spacer" });
}
ue.Spacer = de;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/SelectableContext.js
var fe = /* @__PURE__ */ A.createContext(null), pe = function(e, t) {
	return t === void 0 && (t = null), e == null ? t || null : String(e);
}, M = /* @__PURE__ */ g(h()), me = /* @__PURE__ */ g(le()), he = /-(.)/g;
function ge(e) {
	return e.replace(he, function(e, t) {
		return t.toUpperCase();
	});
}
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/createWithBsPrefix.js
var _e = [
	"className",
	"bsPrefix",
	"as"
], ve = function(e) {
	return e[0].toUpperCase() + ge(e).slice(1);
};
function ye(t, n) {
	var r = n === void 0 ? {} : n, a = r.displayName, o = a === void 0 ? ve(t) : a, s = r.Component, c = r.defaultProps, l = /* @__PURE__ */ A.forwardRef(function(n, r) {
		var a = n.className, o = n.bsPrefix, c = n.as, l = c === void 0 ? s || "div" : c, u = e(n, _e), d = i(o, t);
		return /* @__PURE__ */ A.createElement(l, T({
			ref: r,
			className: (0, j.default)(a, d)
		}, u));
	});
	return l.defaultProps = c, l.displayName = o, l;
}
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/CardContext.js
var be = /* @__PURE__ */ A.createContext(null);
be.displayName = "CardContext";
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/matches.js
var xe;
function Se(e, t) {
	if (!xe) {
		var n = document.body, r = n.matches || n.matchesSelector || n.webkitMatchesSelector || n.mozMatchesSelector || n.msMatchesSelector;
		xe = function(e, t) {
			return r.call(e, t);
		};
	}
	return xe(e, t);
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/querySelectorAll.js
var Ce = Function.prototype.bind.call(Function.prototype.call, [].slice);
function we(e, t) {
	return Ce(e.querySelectorAll(t));
}
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/usePrevious.js
function Te(e) {
	let t = (0, A.useRef)(null);
	return (0, A.useEffect)(() => {
		t.current = e;
	}), t.current;
}
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useForceUpdate.js
function Ee() {
	let [, e] = (0, A.useReducer)((e) => !e, !1);
	return e;
}
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useEventListener.js
function De(e, t, r, i = !1) {
	let a = n(r);
	(0, A.useEffect)(() => {
		let n = typeof e == "function" ? e() : e;
		return n.addEventListener(t, a, i), () => n.removeEventListener(t, a, i);
	}, [e]);
}
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useGlobalListener.js
function Oe(e, t, n = !1) {
	return De((0, A.useCallback)(() => document, []), e, t, n);
}
//#endregion
//#region node_modules/.pnpm/react-overlays@5.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-overlays/esm/DropdownContext.js
var ke = /* @__PURE__ */ A.createContext(null), Ae = function() {};
function je(e) {
	e === void 0 && (e = {});
	var t = (0, A.useContext)(ke), n = ce(), r = n[0], i = n[1], a = (0, A.useRef)(!1), o = e, s = o.flip, c = o.offset, l = o.rootCloseEvent, u = o.fixed, d = u === void 0 ? !1 : u, f = o.popperConfig, p = f === void 0 ? {} : f, m = o.usePopper, h = m === void 0 ? !!t : m, g = t?.show == null ? !!e.show : t.show, _ = t?.alignEnd == null ? e.alignEnd : t.alignEnd;
	g && !a.current && (a.current = !0);
	var v = function(e) {
		t?.toggle(!1, e);
	}, y = t || {}, b = y.drop, x = y.setMenu, S = y.menuElement, C = y.toggleElement, E = _ ? "bottom-end" : "bottom-start";
	b === "up" ? E = _ ? "top-end" : "top-start" : b === "right" ? E = _ ? "right-end" : "right-start" : b === "left" && (E = _ ? "left-end" : "left-start");
	var D = oe(C, S, w({
		placement: E,
		enabled: !!(h && g),
		enableEvents: g,
		offset: c,
		flip: s,
		fixed: d,
		arrowElement: r,
		popperConfig: p
	})), O = T({
		ref: x || Ae,
		"aria-labelledby": C?.id
	}, D.attributes.popper, { style: D.styles.popper }), te = {
		show: g,
		alignEnd: _,
		hasShown: a.current,
		toggle: t?.toggle,
		popper: h ? D : null,
		arrowProps: h ? T({ ref: i }, D.attributes.arrow, { style: D.styles.arrow }) : {}
	};
	return ee(S, v, {
		clickTrigger: l,
		disabled: !g
	}), [O, te];
}
var Me = {
	children: M.default.func.isRequired,
	show: M.default.bool,
	alignEnd: M.default.bool,
	flip: M.default.bool,
	usePopper: M.default.oneOf([!0, !1]),
	popperConfig: M.default.object,
	rootCloseEvent: M.default.string
}, Ne = { usePopper: !0 };
function Pe(t) {
	var n = t.children, r = je(e(t, ["children"])), i = r[0], a = r[1];
	return /* @__PURE__ */ A.createElement(A.Fragment, null, a.hasShown ? n(i, a) : null);
}
Pe.displayName = "ReactOverlaysDropdownMenu", Pe.propTypes = Me, Pe.defaultProps = Ne;
//#endregion
//#region node_modules/.pnpm/react-overlays@5.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-overlays/esm/DropdownToggle.js
var Fe = function() {};
function Ie() {
	var e = (0, A.useContext)(ke) || {}, t = e.show, n = t === void 0 ? !1 : t, r = e.toggle, i = r === void 0 ? Fe : r, a = e.setToggle, o = (0, A.useCallback)(function(e) {
		i(!n, e);
	}, [n, i]);
	return [{
		ref: a || Fe,
		onClick: o,
		"aria-haspopup": !0,
		"aria-expanded": !!n
	}, {
		show: n,
		toggle: i
	}];
}
var Le = { children: M.default.func.isRequired };
function Re(e) {
	var t = e.children, n = Ie(), r = n[0], i = n[1];
	return /* @__PURE__ */ A.createElement(A.Fragment, null, t(r, i));
}
Re.displayName = "ReactOverlaysDropdownToggle", Re.propTypes = Le;
//#endregion
//#region node_modules/.pnpm/react-overlays@5.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-overlays/esm/Dropdown.js
var ze = {
	children: M.default.node,
	drop: M.default.oneOf([
		"up",
		"left",
		"right",
		"down"
	]),
	focusFirstItemOnShow: M.default.oneOf([
		!1,
		!0,
		"keyboard"
	]),
	itemSelector: M.default.string,
	alignEnd: M.default.bool,
	show: M.default.bool,
	defaultShow: M.default.bool,
	onToggle: M.default.func
};
function Be() {
	var e = Ee(), t = (0, A.useRef)(null);
	return [t, (0, A.useCallback)(function(n) {
		t.current = n, e();
	}, [e])];
}
function Ve(e) {
	var t = e.drop, r = e.alignEnd, i = e.defaultShow, a = e.show, o = e.onToggle, s = e.itemSelector, c = s === void 0 ? "* > *" : s, l = e.focusFirstItemOnShow, u = e.children, f = d(a, i, o), p = f[0], m = f[1], h = Be(), g = h[0], _ = h[1], v = g.current, y = Be(), b = y[0], x = y[1], S = b.current, C = Te(p), ee = (0, A.useRef)(null), w = (0, A.useRef)(!1), T = (0, A.useCallback)(function(e, t) {
		m(e, t);
	}, [m]), E = (0, A.useMemo)(function() {
		return {
			toggle: T,
			drop: t,
			show: p,
			alignEnd: r,
			menuElement: v,
			toggleElement: S,
			setMenu: _,
			setToggle: x
		};
	}, [
		T,
		t,
		p,
		r,
		v,
		S,
		_,
		x
	]);
	v && C && !p && (w.current = v.contains(document.activeElement));
	var D = n(function() {
		S && S.focus && S.focus();
	}), O = n(function() {
		var e = ee.current, t = l;
		if (t ??= g.current && Se(g.current, "[role=menu]") ? "keyboard" : !1, !(t === !1 || t === "keyboard" && !/^key.+$/.test(e))) {
			var n = we(g.current, c)[0];
			n && n.focus && n.focus();
		}
	});
	(0, A.useEffect)(function() {
		p ? O() : w.current && (w.current = !1, D());
	}, [
		p,
		w,
		D,
		O
	]), (0, A.useEffect)(function() {
		ee.current = null;
	});
	var te = function(e, t) {
		if (!g.current) return null;
		var n = we(g.current, c), r = n.indexOf(e) + t;
		return r = Math.max(0, Math.min(r, n.length)), n[r];
	};
	return Oe("keydown", function(e) {
		var t = e.key, n = e.target, r = g.current?.contains(n), i = b.current?.contains(n);
		if (!(/input|textarea/i.test(n.tagName) && (t === " " || t !== "Escape" && r)) && !(!r && !i) && !(!g.current && t === "Tab")) switch (ee.current = e.type, t) {
			case "ArrowUp":
				var a = te(n, -1);
				a && a.focus && a.focus(), e.preventDefault();
				return;
			case "ArrowDown":
				if (e.preventDefault(), !p) m(!0, e);
				else {
					var o = te(n, 1);
					o && o.focus && o.focus();
				}
				return;
			case "Tab":
				k(document, "keyup", function(t) {
					var n;
					(t.key === "Tab" && !t.target || !((n = g.current) != null && n.contains(t.target))) && m(!1, e);
				}, { once: !0 });
				break;
			case "Escape":
				e.preventDefault(), e.stopPropagation(), m(!1, e);
				break;
			default:
		}
	}), /* @__PURE__ */ A.createElement(ke.Provider, { value: E }, u);
}
Ve.displayName = "ReactOverlaysDropdown", Ve.propTypes = ze, Ve.Menu = Pe, Ve.Toggle = Re;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/NavContext.js
var He = /* @__PURE__ */ A.createContext(null);
He.displayName = "NavContext";
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/DropdownItem.js
var Ue = [
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
], We = {
	as: m,
	disabled: !1
}, Ge = /* @__PURE__ */ A.forwardRef(function(t, r) {
	var a = t.bsPrefix, o = t.className, s = t.children, c = t.eventKey, l = t.disabled, u = t.href, d = t.onClick, f = t.onSelect, p = t.active, m = t.as, h = e(t, Ue), g = i(a, "dropdown-item"), _ = (0, A.useContext)(fe), v = ((0, A.useContext)(He) || {}).activeKey, y = pe(c, u), b = p == null && y != null ? pe(v) === y : p, x = n(function(e) {
		l || (d && d(e), _ && _(y, e), f && f(y, e));
	});
	return /* @__PURE__ */ A.createElement(m, T({}, h, {
		ref: r,
		href: u,
		disabled: l,
		className: (0, j.default)(o, g, b && "active", l && "disabled"),
		onClick: x
	}), s);
});
Ge.displayName = "DropdownItem", Ge.defaultProps = We;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/NavbarContext.js
var Ke = /* @__PURE__ */ A.createContext(null);
Ke.displayName = "NavbarContext", E();
function qe(e, t) {
	return e;
}
v();
var Je = [
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
], Ye = M.default.oneOf(["left", "right"]);
M.default.oneOfType([
	Ye,
	M.default.shape({ sm: Ye }),
	M.default.shape({ md: Ye }),
	M.default.shape({ lg: Ye }),
	M.default.shape({ xl: Ye })
]);
var Xe = {
	align: "left",
	alignRight: !1,
	flip: !0
}, Ze = /* @__PURE__ */ A.forwardRef(function(t, n) {
	var r = t.bsPrefix, a = t.className, o = t.align, s = t.alignRight, c = t.rootCloseEvent, l = t.flip, u = t.show, d = t.renderOnMount, f = t.as, p = f === void 0 ? "div" : f, m = t.popperConfig, h = e(t, Je), g = (0, A.useContext)(Ke), _ = i(r, "dropdown-menu"), v = ne(), y = v[0], b = v[1], x = [];
	if (o) if (typeof o == "object") {
		var S = Object.keys(o);
		if (S.length) {
			var C = S[0], ee = o[C];
			s = ee === "left", x.push(_ + "-" + C + "-" + ee);
		}
	} else o === "right" && (s = !0);
	var w = je({
		flip: l,
		rootCloseEvent: c,
		show: u,
		alignEnd: s,
		usePopper: !g && x.length === 0,
		popperConfig: T({}, m, { modifiers: b.concat(m?.modifiers || []) })
	}), E = w[0], D = w[1], te = D.hasShown, re = D.popper, ie = D.show, ae = D.alignEnd, oe = D.toggle;
	if (E.ref = O(y, O(qe(n, "DropdownMenu"), E.ref)), !te && !d) return null;
	typeof p != "string" && (E.show = ie, E.close = function() {
		return oe?.(!1);
	}, E.alignRight = ae);
	var k = h.style;
	return re != null && re.placement && (k = T({}, h.style, E.style), h["x-placement"] = re.placement), /* @__PURE__ */ A.createElement(p, T({}, h, E, {
		style: k,
		className: j.default.apply(void 0, [
			a,
			_,
			ie && "show",
			ae && _ + "-right"
		].concat(x))
	}));
});
Ze.displayName = "DropdownMenu", Ze.defaultProps = Xe, C();
var Qe = [
	"bsPrefix",
	"split",
	"className",
	"childBsPrefix",
	"as"
], $e = /* @__PURE__ */ A.forwardRef(function(t, n) {
	var r = t.bsPrefix, a = t.split, o = t.className, s = t.childBsPrefix, c = t.as, l = c === void 0 ? se : c, u = e(t, Qe), d = i(r, "dropdown-toggle");
	s !== void 0 && (u.bsPrefix = s);
	var f = Ie()[0];
	return f.ref = O(f.ref, qe(n, "DropdownToggle")), /* @__PURE__ */ A.createElement(l, T({ className: (0, j.default)(o, d, a && d + "-split") }, f, u));
});
$e.displayName = "DropdownToggle";
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Dropdown.js
var et = [
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
], tt = ye("dropdown-header", { defaultProps: { role: "heading" } }), nt = ye("dropdown-divider", { defaultProps: { role: "separator" } }), rt = ye("dropdown-item-text", { Component: "span" }), it = { navbar: !1 }, at = /* @__PURE__ */ A.forwardRef(function(t, a) {
	var o = r(t, { show: "onToggle" }), s = o.bsPrefix, c = o.drop, l = o.show, u = o.className, d = o.alignRight, f = o.onSelect, p = o.onToggle, m = o.focusFirstItemOnShow, h = o.as, g = h === void 0 ? "div" : h;
	o.navbar;
	var _ = e(o, et), v = (0, A.useContext)(fe), y = i(s, "dropdown"), b = n(function(e, t, n) {
		n === void 0 && (n = t.type), t.currentTarget === document && (n !== "keydown" || t.key === "Escape") && (n = "rootClose"), p && p(e, t, { source: n });
	}), x = n(function(e, t) {
		v && v(e, t), f && f(e, t), b(!1, t, "select");
	});
	return /* @__PURE__ */ A.createElement(fe.Provider, { value: x }, /* @__PURE__ */ A.createElement(Ve, {
		drop: c,
		show: l,
		alignEnd: d,
		onToggle: b,
		focusFirstItemOnShow: m,
		itemSelector: "." + y + "-item:not(.disabled):not(:disabled)"
	}, /* @__PURE__ */ A.createElement(g, T({}, _, {
		ref: a,
		className: (0, j.default)(u, l && "show", (!c || c === "down") && y, c === "up" && "dropup", c === "right" && "dropright", c === "left" && "dropleft")
	}))));
});
at.displayName = "Dropdown", at.defaultProps = it, at.Divider = nt, at.Header = tt, at.Item = Ge, at.ItemText = rt, at.Menu = Ze, at.Toggle = $e;
//#endregion
//#region node_modules/.pnpm/prop-types-extra@1.1.1_react@18.3.1/node_modules/prop-types-extra/lib/utils/createChainableTypeChecker.js
var ot = /* @__PURE__ */ o(((e, t) => {
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
(/* @__PURE__ */ o(((e, t) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = i;
	var n = r(ot());
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
var st = [
	"as",
	"className",
	"type",
	"tooltip"
], ct = {
	type: M.default.string,
	tooltip: M.default.bool,
	as: M.default.elementType
}, lt = /* @__PURE__ */ A.forwardRef(function(t, n) {
	var r = t.as, i = r === void 0 ? "div" : r, a = t.className, o = t.type, s = o === void 0 ? "valid" : o, c = t.tooltip, l = c === void 0 ? !1 : c, u = e(t, st);
	return /* @__PURE__ */ A.createElement(i, T({}, u, {
		ref: n,
		className: (0, j.default)(a, s + "-" + (l ? "tooltip" : "feedback"))
	}));
});
lt.displayName = "Feedback", lt.propTypes = ct;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormContext.js
var ut = /* @__PURE__ */ A.createContext({ controlId: void 0 }), dt = [
	"id",
	"bsPrefix",
	"bsCustomPrefix",
	"className",
	"type",
	"isValid",
	"isInvalid",
	"isStatic",
	"as"
], ft = /* @__PURE__ */ A.forwardRef(function(t, n) {
	var r = t.id, a = t.bsPrefix, o = t.bsCustomPrefix, s = t.className, c = t.type, l = c === void 0 ? "checkbox" : c, u = t.isValid, d = u === void 0 ? !1 : u, f = t.isInvalid, p = f === void 0 ? !1 : f, m = t.isStatic, h = t.as, g = h === void 0 ? "input" : h, _ = e(t, dt), v = (0, A.useContext)(ut), y = v.controlId, b = v.custom ? [o, "custom-control-input"] : [a, "form-check-input"], x = b[0], S = b[1];
	return a = i(x, S), /* @__PURE__ */ A.createElement(g, T({}, _, {
		ref: n,
		type: l,
		id: r || y,
		className: (0, j.default)(s, a, d && "is-valid", p && "is-invalid", m && "position-static")
	}));
});
ft.displayName = "FormCheckInput";
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormCheckLabel.js
var pt = [
	"bsPrefix",
	"bsCustomPrefix",
	"className",
	"htmlFor"
], mt = /* @__PURE__ */ A.forwardRef(function(t, n) {
	var r = t.bsPrefix, a = t.bsCustomPrefix, o = t.className, s = t.htmlFor, c = e(t, pt), l = (0, A.useContext)(ut), u = l.controlId, d = l.custom ? [a, "custom-control-label"] : [r, "form-check-label"], f = d[0], p = d[1];
	return r = i(f, p), /* @__PURE__ */ A.createElement("label", T({}, c, {
		ref: n,
		htmlFor: s || u,
		className: (0, j.default)(o, r)
	}));
});
mt.displayName = "FormCheckLabel";
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormCheck.js
var ht = [
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
], gt = /* @__PURE__ */ A.forwardRef(function(t, n) {
	var r = t.id, a = t.bsPrefix, o = t.bsCustomPrefix, s = t.inline, c = s === void 0 ? !1 : s, l = t.disabled, u = l === void 0 ? !1 : l, d = t.isValid, f = d === void 0 ? !1 : d, p = t.isInvalid, m = p === void 0 ? !1 : p, h = t.feedbackTooltip, g = h === void 0 ? !1 : h, _ = t.feedback, v = t.className, y = t.style, b = t.title, x = b === void 0 ? "" : b, S = t.type, C = S === void 0 ? "checkbox" : S, ee = t.label, w = t.children, E = t.custom, D = t.as, O = D === void 0 ? "input" : D, te = e(t, ht), ne = C === "switch" ? !0 : E, re = ne ? [o, "custom-control"] : [a, "form-check"], ie = re[0], ae = re[1];
	a = i(ie, ae);
	var oe = (0, A.useContext)(ut).controlId, k = (0, A.useMemo)(function() {
		return {
			controlId: r || oe,
			custom: ne
		};
	}, [
		oe,
		ne,
		r
	]), se = ne || ee != null && ee !== !1 && !w, ce = /* @__PURE__ */ A.createElement(ft, T({}, te, {
		type: C === "switch" ? "checkbox" : C,
		ref: n,
		isValid: f,
		isInvalid: m,
		isStatic: !se,
		disabled: u,
		as: O
	}));
	return /* @__PURE__ */ A.createElement(ut.Provider, { value: k }, /* @__PURE__ */ A.createElement("div", {
		style: y,
		className: (0, j.default)(v, a, ne && "custom-" + C, c && a + "-inline")
	}, w || /* @__PURE__ */ A.createElement(A.Fragment, null, ce, se && /* @__PURE__ */ A.createElement(mt, { title: x }, ee), (f || m) && /* @__PURE__ */ A.createElement(lt, {
		type: f ? "valid" : "invalid",
		tooltip: g
	}, _))));
});
gt.displayName = "FormCheck", gt.Input = ft, gt.Label = mt;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormFileInput.js
var _t = [
	"id",
	"bsPrefix",
	"bsCustomPrefix",
	"className",
	"isValid",
	"isInvalid",
	"lang",
	"as"
], vt = /* @__PURE__ */ A.forwardRef(function(t, n) {
	var r = t.id, a = t.bsPrefix, o = t.bsCustomPrefix, s = t.className, c = t.isValid, l = t.isInvalid, u = t.lang, d = t.as, f = d === void 0 ? "input" : d, p = e(t, _t), m = (0, A.useContext)(ut), h = m.controlId, g = m.custom, _ = "file", v = g ? [o, "custom-file-input"] : [a, "form-control-file"], y = v[0], b = v[1];
	return a = i(y, b), /* @__PURE__ */ A.createElement(f, T({}, p, {
		ref: n,
		id: r || h,
		type: _,
		lang: u,
		className: (0, j.default)(s, a, c && "is-valid", l && "is-invalid")
	}));
});
vt.displayName = "FormFileInput";
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormFileLabel.js
var yt = [
	"bsPrefix",
	"bsCustomPrefix",
	"className",
	"htmlFor"
], bt = /* @__PURE__ */ A.forwardRef(function(t, n) {
	var r = t.bsPrefix, a = t.bsCustomPrefix, o = t.className, s = t.htmlFor, c = e(t, yt), l = (0, A.useContext)(ut), u = l.controlId, d = l.custom ? [a, "custom-file-label"] : [r, "form-file-label"], f = d[0], p = d[1];
	return r = i(f, p), /* @__PURE__ */ A.createElement("label", T({}, c, {
		ref: n,
		htmlFor: s || u,
		className: (0, j.default)(o, r),
		"data-browse": c["data-browse"]
	}));
});
bt.displayName = "FormFileLabel";
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormFile.js
var xt = [
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
], St = /* @__PURE__ */ A.forwardRef(function(t, n) {
	var r = t.id, a = t.bsPrefix, o = t.bsCustomPrefix, s = t.disabled, c = s === void 0 ? !1 : s, l = t.isValid, u = l === void 0 ? !1 : l, d = t.isInvalid, f = d === void 0 ? !1 : d, p = t.feedbackTooltip, m = p === void 0 ? !1 : p, h = t.feedback, g = t.className, _ = t.style, v = t.label, y = t.children, b = t.custom, x = t.lang, S = t["data-browse"], C = t.as, ee = C === void 0 ? "div" : C, w = t.inputAs, E = w === void 0 ? "input" : w, D = e(t, xt), O = b ? [o, "custom"] : [a, "form-file"], te = O[0], ne = O[1];
	a = i(te, ne);
	var re = "file", ie = (0, A.useContext)(ut).controlId, ae = (0, A.useMemo)(function() {
		return {
			controlId: r || ie,
			custom: b
		};
	}, [
		ie,
		b,
		r
	]), oe = v != null && v !== !1 && !y, k = /* @__PURE__ */ A.createElement(vt, T({}, D, {
		ref: n,
		isValid: u,
		isInvalid: f,
		disabled: c,
		as: E,
		lang: x
	}));
	return /* @__PURE__ */ A.createElement(ut.Provider, { value: ae }, /* @__PURE__ */ A.createElement(ee, {
		style: _,
		className: (0, j.default)(g, a, b && "custom-" + re)
	}, y || /* @__PURE__ */ A.createElement(A.Fragment, null, b ? /* @__PURE__ */ A.createElement(A.Fragment, null, k, oe && /* @__PURE__ */ A.createElement(bt, { "data-browse": S }, v)) : /* @__PURE__ */ A.createElement(A.Fragment, null, oe && /* @__PURE__ */ A.createElement(bt, null, v), k), (u || f) && /* @__PURE__ */ A.createElement(lt, {
		type: u ? "valid" : "invalid",
		tooltip: m
	}, h))));
});
St.displayName = "FormFile", St.Input = vt, St.Label = bt;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormControl.js
var Ct = [
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
], wt = /* @__PURE__ */ A.forwardRef(function(t, n) {
	var r = t.bsPrefix, a = t.bsCustomPrefix, o = t.type, s = t.size, c = t.htmlSize, l = t.id, u = t.className, d = t.isValid, f = d === void 0 ? !1 : d, p = t.isInvalid, m = p === void 0 ? !1 : p, h = t.plaintext, g = t.readOnly, _ = t.custom, v = t.as, y = v === void 0 ? "input" : v, b = e(t, Ct), x = (0, A.useContext)(ut).controlId, S = _ ? [a, "custom"] : [r, "form-control"], C = S[0], ee = S[1];
	r = i(C, ee);
	var w;
	if (h) {
		var E;
		w = (E = {}, E[r + "-plaintext"] = !0, E);
	} else if (o === "file") {
		var D;
		w = (D = {}, D[r + "-file"] = !0, D);
	} else if (o === "range") {
		var O;
		w = (O = {}, O[r + "-range"] = !0, O);
	} else if (y === "select" && _) {
		var te;
		w = (te = {}, te[r + "-select"] = !0, te[r + "-select-" + s] = s, te);
	} else {
		var ne;
		w = (ne = {}, ne[r] = !0, ne[r + "-" + s] = s, ne);
	}
	return /* @__PURE__ */ A.createElement(y, T({}, b, {
		type: o,
		size: c,
		ref: n,
		readOnly: g,
		id: l || x,
		className: (0, j.default)(u, w, f && "is-valid", m && "is-invalid")
	}));
});
wt.displayName = "FormControl";
var Tt = Object.assign(wt, { Feedback: lt }), Et = [
	"bsPrefix",
	"className",
	"children",
	"controlId",
	"as"
], Dt = /* @__PURE__ */ A.forwardRef(function(t, n) {
	var r = t.bsPrefix, a = t.className, o = t.children, s = t.controlId, c = t.as, l = c === void 0 ? "div" : c, u = e(t, Et);
	r = i(r, "form-group");
	var d = (0, A.useMemo)(function() {
		return { controlId: s };
	}, [s]);
	return /* @__PURE__ */ A.createElement(ut.Provider, { value: d }, /* @__PURE__ */ A.createElement(l, T({}, u, {
		ref: n,
		className: (0, j.default)(a, r)
	}), o));
});
Dt.displayName = "FormGroup";
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormLabel.js
var Ot = [
	"as",
	"bsPrefix",
	"column",
	"srOnly",
	"className",
	"htmlFor"
], kt = {
	column: !1,
	srOnly: !1
}, At = /* @__PURE__ */ A.forwardRef(function(t, n) {
	var r = t.as, a = r === void 0 ? "label" : r, o = t.bsPrefix, s = t.column, c = t.srOnly, l = t.className, u = t.htmlFor, d = e(t, Ot), f = (0, A.useContext)(ut).controlId;
	o = i(o, "form-label");
	var p = "col-form-label";
	typeof s == "string" && (p = p + " " + p + "-" + s);
	var m = (0, j.default)(l, o, c && "sr-only", s && p);
	return u ||= f, s ? /* @__PURE__ */ A.createElement(b, T({
		ref: n,
		as: "label",
		className: m,
		htmlFor: u
	}, d)) : /* @__PURE__ */ A.createElement(a, T({
		ref: n,
		className: m,
		htmlFor: u
	}, d));
});
At.displayName = "FormLabel", At.defaultProps = kt;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormText.js
var jt = [
	"bsPrefix",
	"className",
	"as",
	"muted"
], Mt = /* @__PURE__ */ A.forwardRef(function(t, n) {
	var r = t.bsPrefix, a = t.className, o = t.as, s = o === void 0 ? "small" : o, c = t.muted, l = e(t, jt);
	return r = i(r, "form-text"), /* @__PURE__ */ A.createElement(s, T({}, l, {
		ref: n,
		className: (0, j.default)(a, r, c && "text-muted")
	}));
});
Mt.displayName = "FormText";
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Switch.js
var Nt = /* @__PURE__ */ A.forwardRef(function(e, t) {
	return /* @__PURE__ */ A.createElement(gt, T({}, e, {
		ref: t,
		type: "switch"
	}));
});
Nt.displayName = "Switch", Nt.Input = gt.Input, Nt.Label = gt.Label;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Form.js
var Pt = [
	"bsPrefix",
	"inline",
	"className",
	"validated",
	"as"
], Ft = ye("form-row"), It = { inline: !1 }, Lt = /* @__PURE__ */ A.forwardRef(function(t, n) {
	var r = t.bsPrefix, a = t.inline, o = t.className, s = t.validated, c = t.as, l = c === void 0 ? "form" : c, u = e(t, Pt);
	return r = i(r, "form"), /* @__PURE__ */ A.createElement(l, T({}, u, {
		ref: n,
		className: (0, j.default)(o, s && "was-validated", a && r + "-inline")
	}));
});
Lt.displayName = "Form", Lt.defaultProps = It, Lt.Row = Ft, Lt.Group = Dt, Lt.Control = Tt, Lt.Check = gt, Lt.File = St, Lt.Switch = Nt, Lt.Label = At, Lt.Text = Mt;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/TabContext.js
var Rt = /* @__PURE__ */ A.createContext(null), zt = [
	"as",
	"onSelect",
	"activeKey",
	"role",
	"onKeyDown"
], Bt = function() {}, Vt = /* @__PURE__ */ A.forwardRef(function(t, n) {
	var r = t.as, i = r === void 0 ? "ul" : r, a = t.onSelect, o = t.activeKey, s = t.role, c = t.onKeyDown, l = e(t, zt), u = Ee(), d = (0, A.useRef)(!1), f = (0, A.useContext)(fe), p = (0, A.useContext)(Rt), m, h;
	p && (s ||= "tablist", o = p.activeKey, m = p.getControlledId, h = p.getControllerId);
	var g = (0, A.useRef)(null), _ = function(e) {
		var t = g.current;
		if (!t) return null;
		var n = we(t, "[data-rb-event-key]:not(.disabled)"), r = t.querySelector(".active");
		if (!r) return null;
		var i = n.indexOf(r);
		if (i === -1) return null;
		var a = i + e;
		return a >= n.length && (a = 0), a < 0 && (a = n.length - 1), n[a];
	}, v = function(e, t) {
		e != null && (a && a(e, t), f && f(e, t));
	}, y = function(e) {
		c && c(e);
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
	(0, A.useEffect)(function() {
		if (g.current && d.current) {
			var e = g.current.querySelector("[data-rb-event-key].active");
			e && e.focus();
		}
		d.current = !1;
	});
	var b = O(n, g);
	return /* @__PURE__ */ A.createElement(fe.Provider, { value: v }, /* @__PURE__ */ A.createElement(He.Provider, { value: {
		role: s,
		activeKey: pe(o),
		getControlledId: m || Bt,
		getControllerId: h || Bt
	} }, /* @__PURE__ */ A.createElement(i, T({}, l, {
		onKeyDown: y,
		ref: b,
		role: s
	}))));
}), Ht = [
	"active",
	"className",
	"eventKey",
	"onSelect",
	"onClick",
	"as"
], Ut = { disabled: !1 }, Wt = /* @__PURE__ */ A.forwardRef(function(t, r) {
	var i = t.active, a = t.className, o = t.eventKey, s = t.onSelect, c = t.onClick, l = t.as, u = e(t, Ht), d = pe(o, u.href), f = (0, A.useContext)(fe), p = (0, A.useContext)(He), m = i;
	if (p) {
		!u.role && p.role === "tablist" && (u.role = "tab");
		var h = p.getControllerId(d), g = p.getControlledId(d);
		u["data-rb-event-key"] = d, u.id = h || u.id, u["aria-controls"] = g || u["aria-controls"], m = i == null && d != null ? p.activeKey === d : i;
	}
	u.role === "tab" && (u.disabled && (u.tabIndex = -1, u["aria-disabled"] = !0), u["aria-selected"] = m);
	var _ = n(function(e) {
		c && c(e), d != null && (s && s(d, e), f && f(d, e));
	});
	return /* @__PURE__ */ A.createElement(l, T({}, u, {
		ref: r,
		onClick: _,
		className: (0, j.default)(a, m && "active")
	}));
});
Wt.defaultProps = Ut;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/NavItem.js
var Gt = [
	"bsPrefix",
	"className",
	"children",
	"as"
], Kt = /* @__PURE__ */ A.forwardRef(function(t, n) {
	var r = t.bsPrefix, a = t.className, o = t.children, s = t.as, c = s === void 0 ? "div" : s, l = e(t, Gt);
	return r = i(r, "nav-item"), /* @__PURE__ */ A.createElement(c, T({}, l, {
		ref: n,
		className: (0, j.default)(a, r)
	}), o);
});
Kt.displayName = "NavItem";
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/NavLink.js
var qt = [
	"bsPrefix",
	"disabled",
	"className",
	"href",
	"eventKey",
	"onSelect",
	"as"
], Jt = {
	disabled: !1,
	as: m
}, Yt = /* @__PURE__ */ A.forwardRef(function(t, n) {
	var r = t.bsPrefix, a = t.disabled, o = t.className, s = t.href, c = t.eventKey, l = t.onSelect, u = t.as, d = e(t, qt);
	return r = i(r, "nav-link"), /* @__PURE__ */ A.createElement(Wt, T({}, d, {
		href: s,
		ref: n,
		eventKey: c,
		as: u,
		disabled: a,
		onSelect: l,
		className: (0, j.default)(o, r, a && "disabled")
	}));
});
Yt.displayName = "NavLink", Yt.defaultProps = Jt;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Nav.js
var Xt = [
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
], Zt = {
	justify: !1,
	fill: !1
}, Qt = /* @__PURE__ */ A.forwardRef(function(t, n) {
	var a, o = r(t, { activeKey: "onSelect" }), s = o.as, c = s === void 0 ? "div" : s, l = o.bsPrefix, u = o.variant, d = o.fill, f = o.justify, p = o.navbar, m = o.navbarScroll, h = o.className, g = o.children, _ = o.activeKey, v = e(o, Xt), y = i(l, "nav"), b, x, S = !1, C = (0, A.useContext)(Ke), ee = (0, A.useContext)(be);
	return C ? (b = C.bsPrefix, S = p ?? !0) : ee && (x = ee.cardHeaderBsPrefix), /* @__PURE__ */ A.createElement(Vt, T({
		as: c,
		ref: n,
		activeKey: _,
		className: (0, j.default)(h, (a = {}, a[y] = !S, a[b + "-nav"] = S, a[b + "-nav-scroll"] = S && m, a[x + "-" + u] = !!x, a[y + "-" + u] = !!u, a[y + "-fill"] = d, a[y + "-justified"] = f, a))
	}, v), g);
});
Qt.displayName = "Nav", Qt.defaultProps = Zt, Qt.Item = Kt, Qt.Link = Yt;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/NavDropdown.js
var $t = [
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
], en = /* @__PURE__ */ A.forwardRef(function(t, n) {
	var r = t.id, a = t.title, o = t.children, s = t.bsPrefix, c = t.className, l = t.rootCloseEvent, u = t.menuRole, d = t.disabled, f = t.active, p = t.renderMenuOnMount, m = e(t, $t), h = i(void 0, "nav-item");
	return /* @__PURE__ */ A.createElement(at, T({ ref: n }, m, { className: (0, j.default)(c, h) }), /* @__PURE__ */ A.createElement(at.Toggle, {
		id: r,
		eventKey: null,
		active: f,
		disabled: d,
		childBsPrefix: s,
		as: Yt
	}, a), /* @__PURE__ */ A.createElement(at.Menu, {
		role: u,
		renderOnMount: p,
		rootCloseEvent: l
	}, o));
});
en.displayName = "NavDropdown", en.Item = at.Item, en.ItemText = at.ItemText, en.Divider = at.Divider, en.Header = at.Header;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Spinner.js
var tn = [
	"bsPrefix",
	"variant",
	"animation",
	"size",
	"children",
	"as",
	"className"
], nn = /* @__PURE__ */ A.forwardRef(function(t, n) {
	var r = t.bsPrefix, a = t.variant, o = t.animation, s = t.size, c = t.children, l = t.as, u = l === void 0 ? "div" : l, d = t.className, f = e(t, tn);
	r = i(r, "spinner");
	var p = r + "-" + o;
	return /* @__PURE__ */ A.createElement(u, T({ ref: n }, f, { className: (0, j.default)(d, p, s && p + "-" + s, a && "text-" + a) }), c);
});
nn.displayName = "Spinner";
//#endregion
//#region node_modules/.pnpm/css-mediaquery@0.1.2/node_modules/css-mediaquery/index.js
var rn = /* @__PURE__ */ o(((e) => {
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
})), an = /* @__PURE__ */ o(((e, t) => {
	var n = rn().match, r = typeof window < "u" ? window.matchMedia : null;
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
})), on = /[A-Z]/g, sn = /^ms-/, cn = {};
function ln(e) {
	return "-" + e.toLowerCase();
}
function un(e) {
	if (cn.hasOwnProperty(e)) return cn[e];
	var t = e.replace(on, ln);
	return cn[e] = sn.test(t) ? "-" + t : t;
}
//#endregion
//#region node_modules/.pnpm/shallow-equal@3.1.0/node_modules/shallow-equal/dist/index.modern.mjs
function dn(e, t) {
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
var fn = /* @__PURE__ */ g(an()), pn = M.default.oneOfType([M.default.string, M.default.number]), mn = {
	all: M.default.bool,
	grid: M.default.bool,
	aural: M.default.bool,
	braille: M.default.bool,
	handheld: M.default.bool,
	print: M.default.bool,
	projection: M.default.bool,
	screen: M.default.bool,
	tty: M.default.bool,
	tv: M.default.bool,
	embossed: M.default.bool
}, hn = {
	orientation: M.default.oneOf(["portrait", "landscape"]),
	scan: M.default.oneOf(["progressive", "interlace"]),
	aspectRatio: M.default.string,
	deviceAspectRatio: M.default.string,
	height: pn,
	deviceHeight: pn,
	width: pn,
	deviceWidth: pn,
	color: M.default.bool,
	colorIndex: M.default.bool,
	monochrome: M.default.bool,
	resolution: pn,
	type: Object.keys(mn)
}, { type: gn, ..._n } = hn, vn = {
	minAspectRatio: M.default.string,
	maxAspectRatio: M.default.string,
	minDeviceAspectRatio: M.default.string,
	maxDeviceAspectRatio: M.default.string,
	minHeight: pn,
	maxHeight: pn,
	minDeviceHeight: pn,
	maxDeviceHeight: pn,
	minWidth: pn,
	maxWidth: pn,
	minDeviceWidth: pn,
	maxDeviceWidth: pn,
	minColor: M.default.number,
	maxColor: M.default.number,
	minColorIndex: M.default.number,
	maxColorIndex: M.default.number,
	minMonochrome: M.default.number,
	maxMonochrome: M.default.number,
	minResolution: pn,
	maxResolution: pn,
	..._n
}, yn = {
	all: {
		...mn,
		...vn
	},
	types: mn,
	matchers: hn,
	features: vn
}, bn = (e) => `not ${e}`, xn = (e, t) => {
	let n = un(e);
	return typeof t == "number" && (t = `${t}px`), t === !0 ? n : t === !1 ? bn(n) : `(${n}: ${t})`;
}, Sn = (e) => e.join(" and "), Cn = (e) => {
	let t = [];
	return Object.keys(yn.all).forEach((n) => {
		let r = e[n];
		r != null && t.push(xn(n, r));
	}), Sn(t);
}, wn = (0, A.createContext)(void 0), Tn = (e) => e.query || Cn(e), En = (e) => {
	if (e) return Object.keys(e).reduce((t, n) => (t[un(n)] = e[n], t), {});
}, Dn = () => {
	let e = (0, A.useRef)(!1);
	return (0, A.useEffect)(() => {
		e.current = !0;
	}, []), e.current;
}, On = (e) => {
	let t = (0, A.useContext)(wn), n = () => En(e) || En(t), [r, i] = (0, A.useState)(n);
	return (0, A.useEffect)(() => {
		let e = n();
		dn(r, e) || i(e);
	}, [e, t]), r;
}, kn = (e) => {
	let t = () => Tn(e), [n, r] = (0, A.useState)(t);
	return (0, A.useEffect)(() => {
		let e = t();
		n !== e && r(e);
	}, [e]), n;
}, An = (e, t) => {
	let n = () => (0, fn.default)(e, t || {}, !!t), [r, i] = (0, A.useState)(n), a = Dn();
	return (0, A.useEffect)(() => {
		if (a) {
			let e = n();
			return i(e), () => {
				e && e.dispose();
			};
		}
	}, [e, t]), r;
}, jn = (e) => {
	let [t, n] = (0, A.useState)(e.matches);
	return (0, A.useEffect)(() => {
		let t = (e) => {
			n(e.matches);
		};
		return e.addListener(t), n(e.matches), () => {
			e.removeListener(t);
		};
	}, [e]), t;
}, Mn = (e, t, n) => {
	let r = On(t), i = kn(e);
	if (!i) throw Error("Invalid or missing MediaQuery!");
	let a = An(i, r), o = jn(a), s = Dn();
	return (0, A.useEffect)(() => {
		s && n && n(o);
	}, [o]), (0, A.useEffect)(() => () => {
		a && a.dispose();
	}, []), o;
}, Nn = (e) => /* @__PURE__ */ A.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ A.createElement("path", {
	d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2Z",
	fill: "currentColor"
})), Pn = (e) => /* @__PURE__ */ A.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ A.createElement("path", {
	d: "M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2Z",
	fill: "currentColor"
})), Fn = (e) => /* @__PURE__ */ A.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ A.createElement("path", {
	d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9Z",
	fill: "currentColor"
})), In = (e) => /* @__PURE__ */ A.createElement("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	...e
}, /* @__PURE__ */ A.createElement("path", {
	d: "M6 21h12V7H6v14zM8 9h8v10H8V9zm7.5-5-1-1h-5l-1 1H5v2h14V4h-3.5z",
	fill: "currentColor"
})), Ln = (e) => /* @__PURE__ */ A.createElement("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	...e
}, /* @__PURE__ */ A.createElement("path", {
	d: "M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z",
	fill: "currentColor"
})), Rn = (e) => /* @__PURE__ */ A.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ A.createElement("path", {
	d: "m14.06 9.02.92.92L5.92 19H5v-.92l9.06-9.06ZM17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83a.996.996 0 0 0 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29Zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75Z",
	fill: "currentColor"
})), zn = (e) => /* @__PURE__ */ A.createElement("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	...e
}, /* @__PURE__ */ A.createElement("path", {
	d: "M11 15h2v2h-2v-2zm0-8h2v6h-2V7zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z",
	fill: "currentColor"
})), Bn = (e) => /* @__PURE__ */ A.createElement("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	...e
}, /* @__PURE__ */ A.createElement("path", {
	d: "M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",
	fill: "currentColor"
})), Vn = (e) => /* @__PURE__ */ A.createElement("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	...e
}, /* @__PURE__ */ A.createElement("path", {
	d: "M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z",
	fill: "currentColor"
})), Hn = (e) => /* @__PURE__ */ A.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ A.createElement("path", {
	d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8Z",
	fill: "currentColor"
})), Un = (e) => /* @__PURE__ */ A.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ A.createElement("path", {
	xmlns: "http://www.w3.org/2000/svg",
	d: "M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z",
	fill: "currentColor"
}));
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/core/utils.js
function Wn(e) {
	return typeof e == "string" || e instanceof String;
}
function Gn(e) {
	var t;
	return typeof e == "object" && !!e && (e == null || (t = e.constructor) == null ? void 0 : t.name) === "Object";
}
function Kn(e, t) {
	return Array.isArray(t) ? Kn(e, (e, n) => t.includes(n)) : Object.entries(e).reduce((e, n) => {
		let [r, i] = n;
		return t(i, r) && (e[r] = i), e;
	}, {});
}
var N = {
	NONE: "NONE",
	LEFT: "LEFT",
	FORCE_LEFT: "FORCE_LEFT",
	RIGHT: "RIGHT",
	FORCE_RIGHT: "FORCE_RIGHT"
};
function qn(e) {
	switch (e) {
		case N.LEFT: return N.FORCE_LEFT;
		case N.RIGHT: return N.FORCE_RIGHT;
		default: return e;
	}
}
function Jn(e) {
	return e.replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1");
}
function Yn(e, t) {
	if (t === e) return !0;
	let n = Array.isArray(t), r = Array.isArray(e), i;
	if (n && r) {
		if (t.length != e.length) return !1;
		for (i = 0; i < t.length; i++) if (!Yn(t[i], e[i])) return !1;
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
		for (i = 0; i < s.length; i++) if (!Yn(e[s[i]], t[s[i]])) return !1;
		return !0;
	} else if (t && e && typeof t == "function" && typeof e == "function") return t.toString() === e.toString();
	return !1;
}
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/core/action-details.js
var Xn = class {
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
		return !this.removedCount || this.insertedCount ? N.NONE : (this.oldSelection.end === this.cursorPos || this.oldSelection.start === this.cursorPos) && this.oldSelection.end === this.oldSelection.start ? N.RIGHT : N.LEFT;
	}
};
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/core/holder.js
function P(e, t) {
	return new P.InputMask(e, t);
}
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/factory.js
function Zn(e) {
	if (e == null) throw Error("mask property should be defined");
	return e instanceof RegExp ? P.MaskedRegExp : Wn(e) ? P.MaskedPattern : e === Date ? P.MaskedDate : e === Number ? P.MaskedNumber : Array.isArray(e) || e === Array ? P.MaskedDynamic : P.Masked && e.prototype instanceof P.Masked ? e : P.Masked && e instanceof P.Masked ? e.constructor : e instanceof Function ? P.MaskedFunction : (console.warn("Mask not found for mask", e), P.Masked);
}
function Qn(e) {
	if (!e) throw Error("Options in not defined");
	if (P.Masked) {
		if (e.prototype instanceof P.Masked) return { mask: e };
		let { mask: t = void 0, ...n } = e instanceof P.Masked ? { mask: e } : Gn(e) && e.mask instanceof P.Masked ? e : {};
		if (t) {
			let e = t.mask;
			return {
				...Kn(t, (e, t) => !t.startsWith("_")),
				mask: t.constructor,
				_mask: e,
				...n
			};
		}
	}
	return Gn(e) ? { ...e } : { mask: e };
}
function $n(e) {
	if (P.Masked && e instanceof P.Masked) return e;
	let t = Qn(e), n = Zn(t.mask);
	if (!n) throw Error("Masked class is not found for provided mask " + t.mask + ", appropriate module needs to be imported manually before creating mask.");
	return t.mask === n && delete t.mask, t._mask && (t.mask = t._mask, delete t._mask), new n(t);
}
P.createMask = $n;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/controls/mask-element.js
var er = class {
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
P.MaskElement = er;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/controls/html-mask-element.js
var tr = 90, nr = 89, rr = class extends er {
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
		if (this._handlers.redo && (e.keyCode === tr && e.shiftKey && (e.metaKey || e.ctrlKey) || e.keyCode === nr && e.ctrlKey)) return e.preventDefault(), this._handlers.redo(e);
		if (this._handlers.undo && e.keyCode === tr && (e.metaKey || e.ctrlKey)) return e.preventDefault(), this._handlers.undo(e);
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
P.HTMLMaskElement = rr;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/controls/html-input-mask-element.js
var ir = class extends rr {
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
P.HTMLMaskElement = rr;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/controls/html-contenteditable-mask-element.js
var ar = class extends rr {
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
P.HTMLContenteditableMaskElement = ar;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/controls/input-history.js
var or = class e {
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
or.MAX_LENGTH = 100, P.InputMask = class {
	constructor(e, t) {
		this.el = e instanceof er ? e : e.isContentEditable && e.tagName !== "INPUT" && e.tagName !== "TEXTAREA" ? new ar(e) : new ir(e), this.masked = $n(t), this._listeners = {}, this._value = "", this._unmaskedValue = "", this._rawInputValue = "", this.history = new or(), this._saveSelection = this._saveSelection.bind(this), this._onInput = this._onInput.bind(this), this._onChange = this._onChange.bind(this), this._onDrop = this._onDrop.bind(this), this._onFocus = this._onFocus.bind(this), this._onClick = this._onClick.bind(this), this._onUndo = this._onUndo.bind(this), this._onRedo = this._onRedo.bind(this), this.alignCursor = this.alignCursor.bind(this), this.alignCursorFriendly = this.alignCursorFriendly.bind(this), this._bindEvents(), this.updateValue(), this._onChange();
	}
	maskEquals(e) {
		return e == null || this.masked?.maskEquals(e);
	}
	get mask() {
		return this.masked.mask;
	}
	set mask(e) {
		if (this.maskEquals(e)) return;
		if (!(e instanceof P.Masked) && this.masked.constructor === Zn(e)) {
			this.masked.updateOptions({ mask: e });
			return;
		}
		let t = e instanceof P.Masked ? e : $n({ mask: e });
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
		this.cursorPos = this.masked.nearestInputPos(this.masked.nearestInputPos(this.cursorPos, N.LEFT));
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
		let t = new Xn({
			value: this.el.value,
			cursorPos: this.cursorPos,
			oldValue: this.displayValue,
			oldSelection: this._selection
		}), n = this.masked.rawInputValue, r = this.masked.splice(t.startChangePos, t.removed.length, t.inserted, t.removeDirection, {
			input: !0,
			raw: !0
		}).offset, i = n === this.masked.rawInputValue ? t.removeDirection : N.NONE, a = this.masked.nearestInputPos(t.startChangePos + r, i);
		i !== N.NONE && (a = this.masked.nearestInputPos(a, N.NONE)), this.updateControl(a), delete this._inputEvent;
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
var F = class e {
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
P.ChangeDetails = F;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/core/continuous-tail-details.js
var sr = class {
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
}, cr = class e {
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
		return e === void 0 && (e = 0), t === void 0 && (t = this.displayValue.length), new sr(this.extractInput(e, t), e);
	}
	appendTail(e) {
		return Wn(e) && (e = new sr(String(e))), e.appendTo(this);
	}
	_appendCharRaw(e, t) {
		return e ? (this._value += e, new F({
			inserted: e,
			rawInserted: e
		})) : new F();
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
			a || (i = new F(), this.state = r, n && e && (n.state = e));
		}
		return i;
	}
	_appendPlaceholder() {
		return new F();
	}
	_appendEager() {
		return new F();
	}
	append(e, t, n) {
		if (!Wn(e)) throw Error("value should be string");
		let r = Wn(n) ? new sr(String(n)) : n;
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
		return e === void 0 && (e = 0), t === void 0 && (t = this.displayValue.length), this._value = this.displayValue.slice(0, e) + this.displayValue.slice(t), new F();
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
		return t === void 0 && (t = {}), F.normalize(this.prepare ? this.prepare(e, this, t) : e);
	}
	doPrepareChar(e, t) {
		return t === void 0 && (t = {}), F.normalize(this.prepareChar ? this.prepareChar(e, this, t) : e);
	}
	doValidate(e) {
		return (!this.validate || this.validate(this.value, this, e)) && (!this.parent || this.parent.doValidate(e));
	}
	doCommit() {
		this.commit && this.commit(this.value, this);
	}
	splice(e, t, n, r, i) {
		n === void 0 && (n = ""), r === void 0 && (r = N.NONE), i === void 0 && (i = { input: !0 });
		let a = e + t, o = this.extractTail(a), s = this.eager === !0 || this.eager === "remove", c;
		s && (r = qn(r), c = this.extractInput(0, a, { raw: !0 }));
		let l = e, u = new F();
		if (r !== N.NONE && (l = this.nearestInputPos(e, t > 1 && e !== 0 && !s ? N.NONE : r), u.tailShift = l - e), u.aggregate(this.remove(l)), s && r !== N.NONE && c === this.rawInputValue) if (r === N.FORCE_LEFT) {
			let e;
			for (; c === this.rawInputValue && (e = this.displayValue.length);) u.aggregate(new F({ tailShift: -1 })).aggregate(this.remove(e - 1));
		} else r === N.FORCE_RIGHT && o.unshift();
		return u.aggregate(this.append(n, i, o));
	}
	maskEquals(e) {
		return this.mask === e;
	}
	optionsIsChanged(e) {
		return !Yn(this, e);
	}
	typedValueEquals(t) {
		let n = this.typedValue;
		return t === n || e.EMPTY_VALUES.includes(t) && e.EMPTY_VALUES.includes(n) || (this.format ? this.format(t, this) === this.format(this.typedValue, this) : !1);
	}
	pad(e) {
		return new F();
	}
};
cr.DEFAULTS = { skipInvalid: !0 }, cr.EMPTY_VALUES = [
	void 0,
	null,
	""
], P.Masked = cr;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/pattern/chunk-tail-details.js
var lr = class e {
	constructor(e, t) {
		e === void 0 && (e = []), t === void 0 && (t = 0), this.chunks = e, this.from = t;
	}
	toString() {
		return this.chunks.map(String).join("");
	}
	extend(t) {
		if (!String(t)) return;
		t = Wn(t) ? new sr(String(t)) : t;
		let n = this.chunks[this.chunks.length - 1], r = n && (n.stop === t.stop || t.stop == null) && t.from === n.from + n.toString().length;
		if (t instanceof sr) r ? n.extend(t.toString()) : this.chunks.push(t);
		else if (t instanceof e) {
			if (t.stop == null) {
				let e;
				for (; t.chunks.length && t.chunks[0].stop == null;) e = t.chunks.shift(), e.from += t.from, this.extend(e);
			}
			t.toString() && (t.stop = t.blockIndex, this.chunks.push(t));
		}
	}
	appendTo(t) {
		if (!(t instanceof P.MaskedPattern)) return new sr(this.toString()).appendTo(t);
		let n = new F();
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
			let n = "chunks" in t ? new e() : new sr();
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
}, ur = class {
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
			if (!(this.block.isFixed || !this.block.value) && (this.offset = this.block.nearestInputPos(this.offset, N.FORCE_LEFT), this.offset !== 0)) return !0;
		});
	}
	pushLeftBeforeInput() {
		return this._pushLeft(() => {
			if (!this.block.isFixed) return this.offset = this.block.nearestInputPos(this.offset, N.LEFT), !0;
		});
	}
	pushLeftBeforeRequired() {
		return this._pushLeft(() => {
			if (!(this.block.isFixed || this.block.isOptional && !this.block.value)) return this.offset = this.block.nearestInputPos(this.offset, N.LEFT), !0;
		});
	}
	pushRightBeforeFilled() {
		return this._pushRight(() => {
			if (!(this.block.isFixed || !this.block.value) && (this.offset = this.block.nearestInputPos(this.offset, N.FORCE_RIGHT), this.offset !== this.block.value.length)) return !0;
		});
	}
	pushRightBeforeInput() {
		return this._pushRight(() => {
			if (!this.block.isFixed) return this.offset = this.block.nearestInputPos(this.offset, N.NONE), !0;
		});
	}
	pushRightBeforeRequired() {
		return this._pushRight(() => {
			if (!(this.block.isFixed || this.block.isOptional && !this.block.value)) return this.offset = this.block.nearestInputPos(this.offset, N.NONE), !0;
		});
	}
}, dr = class {
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
		return e === void 0 && (e = 0), t === void 0 && (t = this._value.length), this._value = this._value.slice(0, e) + this._value.slice(t), this._value || (this._isRawInput = !1), new F();
	}
	nearestInputPos(e, t) {
		t === void 0 && (t = N.NONE);
		let n = this._value.length;
		switch (t) {
			case N.LEFT:
			case N.FORCE_LEFT: return 0;
			case N.NONE:
			case N.RIGHT:
			case N.FORCE_RIGHT:
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
		if (t === void 0 && (t = {}), this.isFilled) return new F();
		let n = this.eager === !0 || this.eager === "append", r = this.char === e && (this.isUnmasking || t.input || t.raw) && (!t.raw || !n) && !t.tail, i = new F({
			inserted: this.char,
			rawInserted: r ? this.char : ""
		});
		return this._value = this.char, this._isRawInput = r && (t.raw || t.input), i;
	}
	_appendEager() {
		return this._appendChar(this.char, { tail: !0 });
	}
	_appendPlaceholder() {
		let e = new F();
		return this.isFilled || (this._value = e.inserted = this.char), e;
	}
	extractTail() {
		return new sr("");
	}
	appendTail(e) {
		return Wn(e) && (e = new sr(String(e))), e.appendTo(this);
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
}, fr = class {
	constructor(e) {
		let { parent: t, isOptional: n, placeholderChar: r, displayChar: i, lazy: a, eager: o, ...s } = e;
		this.masked = $n(s), Object.assign(this, {
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
		return e === void 0 && (e = 0), t === void 0 && (t = this.value.length), e === 0 && t >= 1 ? (this.isFilled = !1, this.masked.remove(e, t)) : new F();
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
		if (t === void 0 && (t = {}), this.isFilled) return new F();
		let n = this.masked.state, r = this.masked._appendChar(e, this.currentMaskFlags(t));
		return r.inserted && this.doValidate(t) === !1 && (r = new F(), this.masked.state = n), !r.inserted && !this.isOptional && !this.lazy && !t.input && (r.inserted = this.placeholderChar), r.skip = !r.inserted && !this.isOptional, this.isFilled = !!r.inserted, r;
	}
	append(e, t, n) {
		return this.masked.append(e, this.currentMaskFlags(t), n);
	}
	_appendPlaceholder() {
		return this.isFilled || this.isOptional ? new F() : (this.isFilled = !0, new F({ inserted: this.placeholderChar }));
	}
	_appendEager() {
		return new F();
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
		t === void 0 && (t = N.NONE);
		let n = this.value.length, r = Math.min(Math.max(e, 0), n);
		switch (t) {
			case N.LEFT:
			case N.FORCE_LEFT: return this.isComplete ? r : 0;
			case N.RIGHT:
			case N.FORCE_RIGHT: return this.isComplete ? r : n;
			case N.NONE:
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
		return new F();
	}
};
fr.DEFAULT_DEFINITIONS = {
	0: /\d/,
	a: /[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
	"*": /./
}, P.MaskedRegExp = class extends cr {
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
var pr = class e extends cr {
	constructor(t) {
		super({
			...e.DEFAULTS,
			...t,
			definitions: Object.assign({}, fr.DEFAULT_DEFINITIONS, t?.definitions)
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
					let { expose: e, repeat: t, ...n } = Qn(this.blocks[r]), i = {
						lazy: this.lazy,
						eager: this.eager,
						placeholderChar: this.placeholderChar,
						displayChar: this.displayChar,
						overwrite: this.overwrite,
						autofix: this.autofix,
						...n,
						repeat: t,
						parent: this
					}, o = t == null ? $n(i) : new P.RepeatBlock(i);
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
			let c = s ? new fr({
				isOptional: i,
				lazy: this.lazy,
				eager: this.eager,
				placeholderChar: this.placeholderChar,
				displayChar: this.displayChar,
				...Qn(t[o]),
				parent: this
			}) : new dr({
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
		let e = new F(), t = this._mapPosToBlock(this.displayValue.length)?.index;
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
		let n = this._mapPosToBlock(this.displayValue.length), r = new F();
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
		let n = new lr();
		return e === t || this._forEachBlocksInRange(e, t, (e, t, r, i) => {
			let a = e.extractTail(r, i);
			a.stop = this._findStopBefore(t), a.from = this._blockStartPos(t), a instanceof lr && (a.blockIndex = t), n.extend(a);
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
		let t = new F();
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
		if (t === void 0 && (t = N.NONE), !this._blocks.length) return 0;
		let n = new ur(this, e);
		if (t === N.NONE) return n.pushRightBeforeInput() || (n.popState(), n.pushLeftBeforeInput()) ? n.pos : this.displayValue.length;
		if (t === N.LEFT || t === N.FORCE_LEFT) {
			if (t === N.LEFT) {
				if (n.pushRightBeforeFilled(), n.ok && n.pos === e) return e;
				n.popState();
			}
			if (n.pushLeftBeforeInput(), n.pushLeftBeforeRequired(), n.pushLeftBeforeFilled(), t === N.LEFT) {
				if (n.pushRightBeforeInput(), n.pushRightBeforeRequired(), n.ok && n.pos <= e || (n.popState(), n.ok && n.pos <= e)) return n.pos;
				n.popState();
			}
			return n.ok ? n.pos : t === N.FORCE_LEFT ? 0 : (n.popState(), n.ok || (n.popState(), n.ok) ? n.pos : 0);
		}
		return t === N.RIGHT || t === N.FORCE_RIGHT ? (n.pushRightBeforeInput(), n.pushRightBeforeRequired(), n.pushRightBeforeFilled() ? n.pos : t === N.FORCE_RIGHT ? this.displayValue.length : (n.popState(), n.ok || (n.popState(), n.ok) ? n.pos : this.nearestInputPos(e, N.LEFT))) : e;
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
		let t = new F();
		return this._forEachBlocksInRange(0, this.displayValue.length, (n) => t.aggregate(n.pad(e))), t;
	}
};
pr.DEFAULTS = {
	...cr.DEFAULTS,
	lazy: !0,
	placeholderChar: "_"
}, pr.STOP_CHAR = "`", pr.ESCAPE_CHAR = "\\", pr.InputDefinition = fr, pr.FixedDefinition = dr, P.MaskedPattern = pr;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/range.js
var mr = class extends pr {
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
		let t = new F();
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
P.MaskedRange = mr;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/date.js
var hr = "d{.}`m{.}`Y", gr = class e extends pr {
	static extractPatternOptions(e) {
		let { mask: t, pattern: n, ...r } = e;
		return {
			...r,
			mask: Wn(t) ? t : n
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
			mask: Wn(n) ? n : r,
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
gr.GET_DEFAULT_BLOCKS = () => ({
	d: {
		mask: mr,
		from: 1,
		to: 31,
		maxLength: 2
	},
	m: {
		mask: mr,
		from: 1,
		to: 12,
		maxLength: 2
	},
	Y: {
		mask: mr,
		from: 1900,
		to: 9999
	}
}), gr.DEFAULTS = {
	...pr.DEFAULTS,
	mask: Date,
	pattern: hr,
	format: (e, t) => e ? [
		String(e.getDate()).padStart(2, "0"),
		String(e.getMonth() + 1).padStart(2, "0"),
		e.getFullYear()
	].join(".") : "",
	parse: (e, t) => {
		let [n, r, i] = e.split(".").map(Number);
		return new Date(i, r - 1, n);
	}
}, P.MaskedDate = gr;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/dynamic.js
var _r = class e extends cr {
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
			let { expose: t, ...n } = Qn(e), r = $n({
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
		let r = t.tail && t._beforeTailState != null ? t._beforeTailState._value : this.value, i = this.rawInputValue, a = t.tail && t._beforeTailState != null ? t._beforeTailState._rawInputValue : i, o = i.slice(a.length), s = this.currentMask, c = new F(), l = s?.state;
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
		let t = new F();
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
		let n = new F();
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
			return Yn(t, i) && t.maskEquals(r);
		}) : super.maskEquals(e);
	}
	typedValueEquals(e) {
		return !!this.currentMask?.typedValueEquals(e);
	}
};
_r.DEFAULTS = {
	...cr.DEFAULTS,
	dispatch: (e, t, n, r) => {
		if (!t.compiledMasks.length) return;
		let i = t.rawInputValue, a = t.compiledMasks.map((a, o) => {
			let s = t.currentMask === a, c = s ? a.displayValue.length : a.nearestInputPos(a.displayValue.length, N.FORCE_LEFT);
			return a.rawInputValue === i ? s || a.remove(c) : (a.reset(), a.append(i, { raw: !0 })), a.append(e, t.currentMaskFlags(n)), a.appendTail(r), {
				index: o,
				weight: a.rawInputValue.length,
				totalInputPositions: a.totalInputPositions(0, Math.max(c, a.nearestInputPos(a.displayValue.length, N.FORCE_LEFT)))
			};
		});
		return a.sort((e, t) => t.weight - e.weight || t.totalInputPositions - e.totalInputPositions), t.compiledMasks[a[0].index];
	}
}, P.MaskedDynamic = _r;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/enum.js
var vr = class e extends pr {
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
		let n = Math.min(this.nearestInputPos(0, N.FORCE_RIGHT), this.value.length), r = this.enum.filter((t) => this.matchValue(t, this.unmaskedValue + e, n));
		if (r.length) {
			r.length === 1 && this._forEachBlocksInRange(0, this.value.length, (e, n) => {
				let i = r[0][n];
				n >= this.value.length || i === e.value || (e.reset(), e._appendChar(i, t));
			});
			let e = super._appendCharRaw(r[0][this.value.length], t);
			return r.length === 1 && r[0].slice(this.unmaskedValue.length).split("").forEach((t) => e.aggregate(super._appendCharRaw(t))), e;
		}
		return new F({ skip: !this.isComplete });
	}
	extractTail(e, t) {
		return e === void 0 && (e = 0), t === void 0 && (t = this.displayValue.length), new sr("", e);
	}
	remove(e, t) {
		if (e === void 0 && (e = 0), t === void 0 && (t = this.displayValue.length), e === t) return new F();
		let n = Math.min(super.nearestInputPos(0, N.FORCE_RIGHT), this.value.length), r;
		for (r = e; r >= 0 && !(this.enum.filter((e) => this.matchValue(e, this.value.slice(n, r), n)).length > 1); --r);
		let i = super.remove(r, t);
		return i.tailShift += r - e, i;
	}
	get isComplete() {
		return this.enum.indexOf(this.value) >= 0;
	}
};
vr.DEFAULTS = {
	...pr.DEFAULTS,
	matchValue: (e, t, n) => e.indexOf(t, n) === n
}, P.MaskedEnum = vr, P.MaskedFunction = class extends cr {
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
var yr, br = class e extends cr {
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
		let e = "^" + (this.allowNegative ? "[+|\\-]?" : ""), t = (this.scale ? "(" + Jn(this.radix) + "\\d{0," + this.scale + "})?" : "") + "$";
		this._numberRegExp = RegExp(e + "\\d*" + t), this._mapToRadixRegExp = RegExp("[" + this.mapToRadix.map(Jn).join("") + "]", "g"), this._thousandsSeparatorRegExp = new RegExp(Jn(this.thousandsSeparator), "g");
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
		s ? l = new F({
			inserted: this._value.slice(a.length),
			rawInserted: c ? "" : t,
			skip: c
		}) : (this._value = a, l = new F()), this._value = this._insertThousandsSeparators(this._value);
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
		return this._value = this._insertThousandsSeparators(this._removeThousandsSeparators(n + r)), new F({ tailShift: (this._separatorsCountFromSlice(n) - i) * this.thousandsSeparator.length });
	}
	nearestInputPos(e, t) {
		if (!this.thousandsSeparator) return e;
		switch (t) {
			case N.NONE:
			case N.LEFT:
			case N.FORCE_LEFT: {
				let n = this._findSeparatorAround(e - 1);
				if (n >= 0) {
					let r = n + this.thousandsSeparator.length;
					if (e < r || this.value.length <= r || t === N.FORCE_LEFT) return n;
				}
				break;
			}
			case N.RIGHT:
			case N.FORCE_RIGHT: {
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
yr = br, br.UNMASKED_RADIX = ".", br.EMPTY_VALUES = [...cr.EMPTY_VALUES, 0], br.DEFAULTS = {
	...cr.DEFAULTS,
	mask: Number,
	radix: ",",
	thousandsSeparator: "",
	mapToRadix: [yr.UNMASKED_RADIX],
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
}, P.MaskedNumber = br;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/pipe.js
var xr = {
	MASKED: "value",
	UNMASKED: "unmaskedValue",
	TYPED: "typedValue"
};
function Sr(e, t, n) {
	t === void 0 && (t = xr.MASKED), n === void 0 && (n = xr.MASKED);
	let r = $n(e);
	return (e) => r.runIsolated((r) => (r[t] = e, r[n]));
}
function Cr(e, t, n, r) {
	return Sr(t, n, r)(e);
}
P.PIPE_TYPE = xr, P.createPipe = Sr, P.pipe = Cr, P.RepeatBlock = class extends pr {
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
		let { repeat: t, ...n } = Qn(e);
		this._blockOpts = Object.assign({}, this._blockOpts, n);
		let r = $n(this._blockOpts);
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
		if (this.repeatTo === Infinity || this._blocks.length < this.repeatTo) return this._blocks.push($n(this._blockOpts)), this.mask += "m", this._blocks[this._blocks.length - 1];
	}
	_appendCharRaw(e, t) {
		t === void 0 && (t = {});
		let n = new F();
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
	globalThis.IMask = P;
} catch {}
//#endregion
//#region node_modules/.pnpm/react-imask@7.6.1_react@18.3.1/node_modules/react-imask/esm/mixin.js
var wr = {
	mask: M.default.oneOfType([
		M.default.array,
		M.default.func,
		M.default.string,
		M.default.instanceOf(RegExp),
		M.default.oneOf([
			Date,
			Number,
			P.Masked
		]),
		M.default.instanceOf(P.Masked)
	]),
	value: M.default.any,
	unmask: M.default.oneOfType([M.default.bool, M.default.oneOf(["typed"])]),
	prepare: M.default.func,
	prepareChar: M.default.func,
	validate: M.default.func,
	commit: M.default.func,
	overwrite: M.default.oneOfType([M.default.bool, M.default.oneOf(["shift"])]),
	eager: M.default.oneOfType([M.default.bool, M.default.oneOf(["append", "remove"])]),
	skipInvalid: M.default.bool,
	onAccept: M.default.func,
	onComplete: M.default.func,
	placeholderChar: M.default.string,
	displayChar: M.default.string,
	lazy: M.default.bool,
	definitions: M.default.object,
	blocks: M.default.object,
	enum: M.default.arrayOf(M.default.string),
	maxLength: M.default.number,
	from: M.default.number,
	to: M.default.number,
	pattern: M.default.string,
	format: M.default.func,
	parse: M.default.func,
	autofix: M.default.oneOfType([M.default.bool, M.default.oneOf(["pad"])]),
	radix: M.default.string,
	thousandsSeparator: M.default.string,
	mapToRadix: M.default.arrayOf(M.default.string),
	scale: M.default.number,
	normalizeZeros: M.default.bool,
	padFractionalZeros: M.default.bool,
	min: M.default.oneOfType([M.default.number, M.default.instanceOf(Date)]),
	max: M.default.oneOfType([M.default.number, M.default.instanceOf(Date)]),
	dispatch: M.default.func,
	inputRef: M.default.oneOfType([M.default.func, M.default.shape({ current: M.default.object })])
}, Tr = Object.keys(wr).filter((e) => e !== "value"), Er = [
	"value",
	"unmask",
	"onAccept",
	"onComplete",
	"inputRef"
], Dr = Tr.filter((e) => Er.indexOf(e) < 0);
function Or(e) {
	var t;
	let n = (t = class extends A.Component {
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
			e === void 0 && (e = this._extractMaskOptionsFromProps(this.props)), this.maskRef = P(this.element, e).on("accept", this._onAccept.bind(this)).on("complete", this._onComplete.bind(this)), "value" in this.props && this.props.value !== void 0 && (this.maskValue = this.props.value);
		}
		destroyMask() {
			this.maskRef && (this.maskRef.destroy(), delete this.maskRef);
		}
		_extractMaskOptionsFromProps(e) {
			let { ...t } = e;
			return Object.keys(t).filter((e) => Dr.indexOf(e) < 0).forEach((e) => {
				delete t[e];
			}), t;
		}
		_extractNonMaskProps(e) {
			let { ...t } = e;
			return Tr.forEach((e) => {
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
			return A.createElement(e, {
				...this._extractNonMaskProps(this.props),
				inputRef: this._inputRef
			});
		}
	}, t.displayName = void 0, t.propTypes = void 0, t);
	return n.displayName = "IMask(" + (e.displayName || e.name || "Component") + ")", n.propTypes = wr, A.forwardRef((e, t) => A.createElement(n, {
		...e,
		ref: t
	}));
}
//#endregion
//#region node_modules/.pnpm/react-imask@7.6.1_react@18.3.1/node_modules/react-imask/esm/input.js
var kr = Or((e) => {
	let { inputRef: t, ...n } = e;
	return A.createElement("input", {
		...n,
		ref: t
	});
}), Ar = A.forwardRef((e, t) => A.createElement(kr, {
	...e,
	ref: t
})), jr = (e = {}) => Object.entries(e).reduce((e, [t, n]) => (n !== void 0 && (e[t] = n), e), {}), Mr = (...e) => (t) => {
	e.filter((e) => typeof e == "function").forEach((e) => e(t));
}, Nr = ({ defaultValue: e, value: t }) => {
	let [n, r] = (0, A.useState)(!!e || e === 0);
	return [!!t || t === 0 || n, (e) => r(!!e.target.value)];
}, Pr = (e, t) => {
	let [n, r] = (0, A.useState)(t || []), i = (e) => (r((t) => [...t, e]), e), a = () => i(S(`${e}-`)), o = (e) => {
		r((t) => t.filter((t) => t !== e));
	};
	return [n, (e) => {
		let [t, n] = (0, A.useState)(e);
		return (0, A.useEffect)(() => (e ? i(e) : t || n(a()), () => o(t)), [t, e]), t;
	}];
}, Fr = (e) => e, Ir = /* @__PURE__ */ A.createContext({
	getControlProps: Fr,
	useSetIsControlGroupEffect: () => {},
	getLabelProps: Fr,
	getDescriptorProps: Fr,
	hasFormGroupProvider: !1
}), Lr = () => A.useContext(Ir);
function Rr(e) {
	let [t, n] = (0, A.useState)(e);
	return [t, (e) => {
		(0, A.useEffect)(() => n(e), [e]);
	}];
}
function zr({ children: e, controlId: t, isInvalid: n, isValid: r, size: i }) {
	let a = (0, A.useMemo)(() => t || S("form-field"), [t]), [o, s] = Pr(a), [c, l] = Pr(a), [u, d] = Rr(!1), f = {
		getControlProps: (0, A.useCallback)((e) => {
			let t = u ? c : void 0;
			return jr({
				...e,
				"aria-describedby": (0, j.default)(e["aria-describedby"], o) || void 0,
				"aria-labelledby": (0, j.default)(e["aria-labelledby"], t) || void 0,
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
	return /* @__PURE__ */ A.createElement(Ir.Provider, { value: f }, e);
}
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/constants.js
var Br = {
	SMALL: "sm",
	LARGE: "lg"
}, Vr = {
	DEFAULT: "default",
	VALID: "valid",
	INVALID: "invalid",
	WARNING: "warning",
	CRITERIA_EMPTY: "criteria-empty",
	CRITERIA_VALID: "criteria-valid",
	CRITERIA_INVALID: "criteria-invalid"
}, Hr = {
	[Vr.DEFAULT]: null,
	[Vr.VALID]: Pn,
	[Vr.INVALID]: ie,
	[Vr.WARNING]: Un,
	[Vr.CRITERIA_EMPTY]: Hn,
	[Vr.CRITERIA_VALID]: Fn,
	[Vr.CRITERIA_INVALID]: x
}, Ur = ({ isInvalid: e, isValid: t }) => t ? Vr.VALID : e ? Vr.INVALID : Vr.DEFAULT;
function Wr({ type: e, customIcon: t }) {
	if (t) return t;
	let n = Hr[e];
	return n ? /* @__PURE__ */ A.createElement(ae, { src: n }) : null;
}
Wr.propTypes = {
	type: M.default.oneOf(Object.values(Vr)),
	customIcon: M.default.node
}, Wr.defaultProps = {
	type: void 0,
	customIcon: void 0
};
function Gr({ children: e, type: t, icon: n, muted: r, hasIcon: i, ...a }) {
	let o = (0, j.default)(a.className, "pgn__form-text", `pgn__form-text-${t}`, { "text-muted": r });
	return /* @__PURE__ */ A.createElement("div", {
		...a,
		className: o
	}, i && /* @__PURE__ */ A.createElement(Wr, {
		customIcon: n,
		type: t
	}), /* @__PURE__ */ A.createElement("div", null, e));
}
Gr.propTypes = {
	children: M.default.node.isRequired,
	className: M.default.string,
	hasIcon: M.default.bool,
	type: M.default.oneOf([
		"default",
		"valid",
		"invalid",
		"warning",
		"criteria-empty",
		"criteria-valid",
		"criteria-invalid"
	]),
	icon: M.default.node,
	muted: M.default.bool
}, Gr.defaultProps = {
	hasIcon: !0,
	type: "default",
	icon: void 0,
	className: void 0,
	muted: !1
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormControlFeedback.js
function Kr({ children: e, ...t }) {
	let { getDescriptorProps: n, isInvalid: r, isValid: i } = Lr(), a = n(t), o = (0, j.default)("pgn__form-control-description", t.className), s = t.type || Ur({
		isInvalid: r,
		isValid: i
	});
	return /* @__PURE__ */ A.createElement(Gr, {
		...a,
		className: o,
		type: s
	}, e);
}
Kr.propTypes = {
	children: M.default.node.isRequired,
	className: M.default.string,
	hasIcon: M.default.bool,
	type: M.default.oneOf([
		"default",
		"valid",
		"invalid",
		"warning",
		"criteria-empty",
		"criteria-valid",
		"criteria-invalid"
	]),
	icon: M.default.node,
	muted: M.default.bool
}, Kr.defaultProps = {
	hasIcon: !0,
	type: void 0,
	icon: void 0,
	className: void 0,
	muted: !1
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormControlFloatingLabel.js
function qr({ children: e }) {
	let { controlId: t } = Lr();
	return /* @__PURE__ */ A.createElement("div", { className: "pgn__form-control-floating-label" }, /* @__PURE__ */ A.createElement("div", { className: "pgn__form-control-floating-label-content" }, /* @__PURE__ */ A.createElement("label", {
		className: "pgn__form-control-floating-label-text",
		htmlFor: t
	}, e)));
}
qr.propTypes = { children: M.default.node.isRequired };
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormControlDecorator.js
function Jr({ children: e, location: t }) {
	return /* @__PURE__ */ A.createElement("div", { className: `pgn__form-control-decorator pgn__form-control-decorator-${t}` }, e);
}
Jr.propTypes = {
	children: M.default.node.isRequired,
	location: M.default.oneOf(["leading", "trailing"])
}, Jr.defaultProps = { location: "leading" };
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormControlDecoratorGroup.js
function Yr({ children: e, leadingElement: t, trailingElement: n, floatingLabel: r, className: i, ...a }) {
	let o = Lr(a), s = a.size || o.size;
	return /* @__PURE__ */ A.createElement("div", {
		className: (0, j.default)("pgn__form-control-decorator-group", {
			"has-prepended-node": !!t,
			"has-appended-node": !!n,
			"has-leading-element": !!t,
			"has-trailing-element": !!n,
			"has-floating-label": !!r,
			"pgn__form-control-decorator-group-lg": s === Br.LARGE,
			"pgn__form-control-decorator-group-sm": s === Br.SMALL
		}, i),
		...a
	}, e, t && /* @__PURE__ */ A.createElement(Jr, { location: "leading" }, t), n && /* @__PURE__ */ A.createElement(Jr, { location: "trailing" }, n), r && /* @__PURE__ */ A.createElement(qr, null, r));
}
Yr.propTypes = {
	children: M.default.node.isRequired,
	leadingElement: M.default.node,
	trailingElement: M.default.node,
	floatingLabel: M.default.node,
	className: M.default.string,
	size: M.default.oneOf([Br.SMALL, Br.LARGE])
}, Yr.defaultProps = {
	leadingElement: void 0,
	trailingElement: void 0,
	floatingLabel: void 0,
	className: void 0,
	size: void 0
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormControl.js
var Xr = /* @__PURE__ */ A.forwardRef(({ as: e, className: t, controlClassName: n, leadingElement: r, trailingElement: i, floatingLabel: a, autoResize: o, onChange: s, inputMask: c, ...l }, u) => {
	let { isInvalid: d, isValid: f, getControlProps: p, ...m } = Lr(), h = A.useRef(), g = u || h, _ = l.size || m.size, [v, y] = Nr({
		defaultValue: l.defaultValue,
		value: l.value
	}), b = (0, A.useCallback)(() => {
		e === "textarea" && o && (!g.current.initialHeight && !g.current.offsets && (g.current.initialHeight = g.current.offsetHeight, g.current.offsets = g.current.offsetHeight - g.current.clientHeight), g.current.style.height = `${g.current.initialHeight}px`, g.current.style.height = `${g.current.scrollHeight + g.current.offsets}px`);
	}, [
		e,
		o,
		g
	]);
	(0, A.useEffect)(() => {
		b();
	}, [b]);
	let x = p({
		...l,
		onBlur: Mr(y, l.onBlur)
	}), S = (e) => {
		b(), s && s(e);
	};
	return /* @__PURE__ */ A.createElement(Yr, {
		size: _,
		leadingElement: r,
		trailingElement: i,
		floatingLabel: a,
		className: t
	}, /* @__PURE__ */ A.createElement(Tt, {
		as: c ? Ar : e,
		ref: g,
		size: _,
		isInvalid: d,
		isValid: f,
		className: (0, j.default)(n, { "has-value": v }),
		onChange: S,
		mask: c,
		...x
	}));
});
Xr.Feedback = Kr, Xr.Description = Kr, Xr.propTypes = {
	className: M.default.string,
	as: M.default.elementType,
	onChange: M.default.func,
	defaultValue: M.default.oneOfType([M.default.string, M.default.number]),
	value: M.default.oneOfType([M.default.string, M.default.number]),
	id: M.default.string,
	controlClassName: M.default.string,
	size: M.default.oneOf(["sm", "lg"]),
	leadingElement: M.default.node,
	trailingElement: M.default.node,
	floatingLabel: M.default.node,
	plaintext: M.default.bool,
	isValid: M.default.bool,
	isInvalid: M.default.bool,
	autoResize: M.default.bool,
	inputMask: M.default.string
}, Xr.defaultProps = {
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
function Zr({ children: e, isInline: t = !1, ...n }) {
	let { size: r, isControlGroup: i, getLabelProps: a } = Lr(), o = (0, j.default)("pgn__form-label", {
		"pgn__form-label-inline": t,
		"pgn__form-label-lg": r === Br.LARGE,
		"pgn__form-label-sm": r === Br.SMALL
	}, n.className), s = a({
		...n,
		className: o
	}), c = i ? "p" : "label";
	return /* @__PURE__ */ A.createElement(c, s, e);
}
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormGroup.js
function Qr({ children: e, controlId: t, isInvalid: n = !1, isValid: r = !1, size: i, as: a, ...o }) {
	return /* @__PURE__ */ A.createElement(a ?? "div", {
		...o,
		className: (0, j.default)("pgn__form-group", o.className)
	}, /* @__PURE__ */ A.createElement(zr, {
		controlId: t,
		isInvalid: n,
		isValid: r,
		size: i
	}, e));
}
var $r = /* @__PURE__ */ A.createContext({
	getRadioControlProps: (e) => e,
	hasRadioSetProvider: !1
}), ei = () => (0, A.useContext)($r);
function ti({ children: e, name: t, onBlur: n, onFocus: r, onChange: i, value: a, defaultValue: o }) {
	let s = !o && a !== void 0, c = {
		name: t,
		value: a,
		defaultValue: o,
		getRadioControlProps: (e) => ({
			...e,
			name: t,
			onBlur: e.onBlur ? Mr(n, e.onBlur) : n,
			onFocus: e.onFocus ? Mr(r, e.onFocus) : r,
			onChange: e.onChange ? Mr(i, e.onChange) : i,
			checked: s ? a === e.value : void 0,
			defaultChecked: s ? void 0 : o === e.value
		}),
		onBlur: n,
		onFocus: r,
		onChange: i,
		hasRadioSetProvider: !0
	};
	return /* @__PURE__ */ A.createElement($r.Provider, { value: c }, e);
}
ti.propTypes = {
	children: M.default.node.isRequired,
	name: M.default.string.isRequired,
	onBlur: M.default.func,
	onFocus: M.default.func,
	onChange: M.default.func,
	value: M.default.string,
	defaultValue: M.default.string
}, ti.defaultProps = {
	onBlur: void 0,
	onFocus: void 0,
	onChange: void 0,
	value: void 0,
	defaultValue: void 0
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormRadio.js
var ni = /* @__PURE__ */ A.forwardRef((e, t) => {
	let { getControlProps: n } = Lr(), { getRadioControlProps: r, hasRadioSetProvider: i } = ei(), a = n({
		...e,
		className: (0, j.default)("pgn__form-radio-input", e.className)
	});
	return i && (a = r(a)), /* @__PURE__ */ A.createElement("input", {
		...a,
		type: "radio",
		ref: t
	});
});
ni.propTypes = { className: M.default.string }, ni.defaultProps = { className: void 0 };
var ri = /* @__PURE__ */ A.forwardRef(({ children: e, className: t, controlClassName: n, labelClassName: r, description: i, isInvalid: a, isValid: o, ...s }, c) => /* @__PURE__ */ A.createElement(zr, {
	controlId: s.id,
	isInvalid: a,
	isValid: o
}, /* @__PURE__ */ A.createElement("div", { className: (0, j.default)("pgn__form-radio", t, {
	"pgn__form-control-valid": o,
	"pgn__form-control-invalid": a,
	"pgn__form-control-disabled": s.disabled
}) }, /* @__PURE__ */ A.createElement(ni, {
	ref: c,
	className: n,
	...s
}), /* @__PURE__ */ A.createElement("div", null, /* @__PURE__ */ A.createElement(Zr, { className: r }, e), i && /* @__PURE__ */ A.createElement(Kr, { hasIcon: !1 }, i)))));
ri.propTypes = {
	id: M.default.string,
	children: M.default.node.isRequired,
	className: M.default.string,
	controlClassName: M.default.string,
	labelClassName: M.default.string,
	description: M.default.node,
	isInvalid: M.default.bool,
	isValid: M.default.bool,
	disabled: M.default.bool
}, ri.defaultProps = {
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
function ii({ as: e, className: t, isInline: n, children: r, ...i }) {
	return /* @__PURE__ */ A.createElement(e, {
		className: (0, j.default)(t, {
			"pgn__form-control-set": !n,
			"pgn__form-control-set-inline": n
		}),
		...i
	}, r);
}
ii.propTypes = {
	as: M.default.elementType,
	className: M.default.string,
	isInline: M.default.bool,
	children: M.default.node
}, ii.defaultProps = {
	as: "div",
	className: void 0,
	isInline: !1,
	children: null
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormRadioSet.js
function ai({ children: e, name: t, value: n, defaultValue: r, isInline: i, onChange: a, onFocus: o, onBlur: s, ...c }) {
	let { getControlProps: l, useSetIsControlGroupEffect: u } = Lr();
	u(!0);
	let d = l(c);
	return /* @__PURE__ */ A.createElement(ti, {
		name: t,
		value: n,
		defaultValue: r,
		onFocus: o,
		onBlur: s,
		onChange: a
	}, /* @__PURE__ */ A.createElement(ii, {
		role: "radiogroup",
		isInline: i,
		...d
	}, e));
}
ai.propTypes = {
	children: M.default.node.isRequired,
	className: M.default.string,
	name: M.default.string.isRequired,
	value: M.default.string,
	defaultValue: M.default.string,
	isInline: M.default.bool,
	onChange: M.default.func,
	onFocus: M.default.func,
	onBlur: M.default.func
}, ai.defaultProps = {
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
var oi, si = new Uint8Array(16);
function ci() {
	if (!oi && (oi = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !oi)) throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
	return oi(si);
}
//#endregion
//#region node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/stringify.js
var li = [];
for (let e = 0; e < 256; ++e) li.push((e + 256).toString(16).slice(1));
function ui(e, t = 0) {
	return li[e[t + 0]] + li[e[t + 1]] + li[e[t + 2]] + li[e[t + 3]] + "-" + li[e[t + 4]] + li[e[t + 5]] + "-" + li[e[t + 6]] + li[e[t + 7]] + "-" + li[e[t + 8]] + li[e[t + 9]] + "-" + li[e[t + 10]] + li[e[t + 11]] + li[e[t + 12]] + li[e[t + 13]] + li[e[t + 14]] + li[e[t + 15]];
}
var di = { randomUUID: typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto) };
//#endregion
//#region node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/v4.js
function fi(e, t, n) {
	if (di.randomUUID && !t && !e) return di.randomUUID();
	e ||= {};
	let r = e.random || (e.rng || ci)();
	if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, t) {
		n ||= 0;
		for (let e = 0; e < 16; ++e) t[n + e] = r[e];
		return t;
	}
	return ui(r);
}
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/utils/propTypes/utils.js
var pi = (e, t, n) => ((r, i, a, ...o) => t(r) && r[i] === void 0 ? /* @__PURE__ */ Error(`${a}: ${i} is required when ${n}`) : e(r, i, a, ...o)), mi = (e, t) => t.every((t) => e[t] !== void 0), hi = (e, t) => pi(e, (e) => Array.isArray(t) ? mi(e, t) : e[t] === !0, `${t} ${Array.isArray(t) ? "are defined" : "is truthy"}`), gi = /* @__PURE__ */ A.forwardRef(({ className: e, screenReaderText: t, ...n }, r) => {
	let i = {
		...n,
		className: (0, j.default)("pgn__spinner", e),
		role: t ? "status" : void 0
	};
	return /* @__PURE__ */ A.createElement(nn, {
		...i,
		ref: r
	}, t && /* @__PURE__ */ A.createElement("span", { className: "sr-only" }, t));
});
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/hooks/useArrowKeyNavigationHook.js
function _i({ event: e, currentIndex: t, activeElement: n }) {
	t !== -1 && (n.click(), e.preventDefault());
}
function vi({ event: e, currentIndex: t, availableElements: n }) {
	t === -1 && n[0].focus();
	let r;
	(e.key === "ArrowDown" || e.key === "ArrowRight") && (r = n[(t + 1) % n.length]), (e.key === "ArrowUp" || e.key === "ArrowLeft") && (r = t - 1 < 0 ? n[t - 1 + n.length] : n[t - 1]), e.key === "End" && (r = n[n.length - 1]), e.key === "Home" && ([r] = n), r?.focus(), e.preventDefault();
}
function yi({ event: e, ignoredKeys: t = [], parentNode: n, selectors: r = "a,button,input" }) {
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
	i === "Enter" && a && _i({
		event: e,
		currentIndex: s,
		activeElement: a
	}), vi({
		event: e,
		currentIndex: s,
		availableElements: o
	});
}
function bi(e = {}) {
	let { selectors: t, ignoredKeys: n } = e, r = (0, A.useRef)();
	return (0, A.useEffect)(() => {
		let e = (e) => {
			yi({
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
var xi = c({
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
}), Si = /* @__PURE__ */ (0, A.forwardRef)(({ children: e, arrowKeyNavigationSelector: t, ignoredArrowKeysNames: n, screenReaderText: r, value: i, isLoading: a, isValueRequired: o, valueRequiredErrorMessageText: s, isSelectionRequired: c, selectionRequiredErrorMessageText: l, hasCustomError: u, customErrorMessageText: d, onChange: f, helpMessage: m, ...h }, g) => {
	let _ = p(), v = (0, A.useRef)(), y = bi({
		selectors: t,
		ignoredKeys: n
	}), [b, x] = (0, A.useState)(!1), [S, C] = (0, A.useState)(!1), [ee, w] = (0, A.useState)(!1), [T, E] = (0, A.useState)(!1), [D, O] = (0, A.useState)(i?.userProvidedText || ""), [ne, re] = (0, A.useState)([]), [ie, oe] = (0, A.useState)(null), [k, se] = (0, A.useState)(!0), [ce, le] = (0, A.useState)(""), j = (e) => {
		oe(e);
	}, ue = () => {
		re([]), x(!1), oe(null);
	}, de = (e, t) => {
		let n = e.currentTarget.getAttribute("data-value"), r = e.currentTarget.id;
		w(!0), E(!0), O(n), f && (!i || i && n !== i.selectionValue) && f({
			userProvidedText: n,
			selectionValue: n,
			selectionId: r
		}), ue(), t && t(e);
	};
	function fe(t = "") {
		let n = A.Children.map(e, (e) => {
			let { children: t, onClick: n, ...r } = e.props, i = e.props.id ?? fi();
			return /* @__PURE__ */ A.cloneElement(e, {
				...r,
				children: t,
				"data-value": t,
				onClick: (e) => de(e, n),
				id: i,
				onFocus: () => j(i)
			});
		});
		return t.length > 0 && (n = n.filter((e) => e.props.children.toLowerCase().includes(t.toLowerCase()))), n;
	}
	let pe = () => {
		re(fe(D)), se(!0), le(""), x(!0);
	}, M = () => {
		b ? ue() : pe();
	}, me = /* @__PURE__ */ A.createElement(te, {
		className: "pgn__form-autosuggest__icon-button",
		"data-testid": "autosuggest-iconbutton",
		tabIndex: "-1",
		src: b ? Vn : Bn,
		iconAs: ae,
		size: "sm",
		variant: "secondary",
		alt: b ? _.formatMessage(xi.iconButtonClosed) : _.formatMessage(xi.iconButtonOpened),
		onClick: M
	}), he = () => {
		C(!0);
	}, ge = () => {
		if (u) {
			se(!1), le(d);
			return;
		}
		if (o && !ee) {
			se(!1), le(s);
			return;
		}
		if (ee && c && !T) {
			se(!1), le(l);
			return;
		}
		se(!0), le("");
	};
	(0, A.useImperativeHandle)(g, () => ({ updateErrorStateAndErrorMessage: ge }));
	let _e = () => {
		C(!1), ue(), ge();
	}, ve = (e) => {
		if (S) {
			if (e.key === "Escape") {
				e.preventDefault(), v && v.current.focus(), ue();
				return;
			}
			e.key === "Tab" && _e();
		}
	}, ye = (e) => {
		y.current && !y.current.contains(e.target) && S && _e();
	};
	(0, A.useEffect)(() => (document.addEventListener("keydown", ve), document.addEventListener("click", ye, !0), () => {
		document.removeEventListener("click", ye, !0), document.removeEventListener("keydown", ve);
	})), (0, A.useEffect)(() => {
		O(i ? i.userProvidedText ?? "" : ""), w(!!i && !!i.userProvidedText), E(!!i && !!i.selectionValue);
	}, [i]);
	let be = () => {
		pe();
	}, xe = (e) => {
		let t = e.target.value;
		if (!t.length) {
			O(""), w(!1), E(!1), re([]), ue(), f && f({
				userProvidedText: "",
				selectionValue: "",
				selectionId: ""
			});
			return;
		}
		w(!0);
		let n = fe(t);
		re(n);
		let r = n.find((e) => e.props.children.toLowerCase() === t.toLowerCase());
		if (!r) {
			E(!1), O(t), f && f({
				userProvidedText: t,
				selectionValue: "",
				selectionId: ""
			});
			return;
		}
		E(!0), O(r.props.children), f && f({
			userProvidedText: r.props.children,
			selectionValue: r.props.children,
			selectionId: r.props.id
		});
	}, { getControlProps: Se } = Lr(), Ce = Se(h);
	return /* @__PURE__ */ A.createElement("div", {
		className: "pgn__form-autosuggest__wrapper",
		ref: y,
		onFocus: he
	}, /* @__PURE__ */ A.createElement("div", {
		"aria-live": "assertive",
		className: "sr-only",
		"data-testid": "autosuggest-screen-reader-options-count"
	}, `${ne.length} options found`), /* @__PURE__ */ A.createElement(zr, {
		controlId: Ce.id,
		isInvalid: !k
	}, /* @__PURE__ */ A.createElement(Xr, {
		ref: v,
		"aria-expanded": (ne.length > 0).toString(),
		"aria-owns": "pgn__form-autosuggest__dropdown-box",
		role: "combobox",
		"aria-autocomplete": "list",
		autoComplete: "off",
		value: D,
		"aria-invalid": ce,
		"aria-activedescendant": ie,
		onChange: xe,
		onClick: be,
		trailingElement: me,
		"data-testid": "autosuggest-textbox-input",
		...Ce
	}), m && k && /* @__PURE__ */ A.createElement(Kr, { type: "default" }, m), !k && /* @__PURE__ */ A.createElement(Kr, {
		type: "invalid",
		"feedback-for": Ce.name
	}, ce)), /* @__PURE__ */ A.createElement("ul", {
		id: "pgn__form-autosuggest__dropdown-box",
		className: "pgn__form-autosuggest__dropdown",
		role: "listbox"
	}, a ? /* @__PURE__ */ A.createElement("div", { className: "pgn__form-autosuggest__dropdown-loading" }, /* @__PURE__ */ A.createElement(gi, {
		animation: "border",
		variant: "dark",
		screenReaderText: r,
		"data-testid": "autosuggest-loading-spinner"
	})) : ne.length > 0 && ne));
});
Si.defaultProps = {
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
}, Si.propTypes = {
	arrowKeyNavigationSelector: M.default.string,
	ignoredArrowKeysNames: M.default.arrayOf(M.default.string),
	isLoading: M.default.bool,
	className: M.default.string,
	floatingLabel: M.default.string,
	onChange: M.default.func,
	helpMessage: M.default.string,
	placeholder: M.default.string,
	value: M.default.shape({
		userProvidedText: M.default.string,
		selectionValue: M.default.string,
		selectionId: M.default.string
	}),
	isValueRequired: M.default.bool,
	valueRequiredErrorMessageText: hi(M.default.string, "isValueRequired"),
	isSelectionRequired: M.default.bool,
	selectionRequiredErrorMessageText: hi(M.default.string, "isSelectionRequired"),
	hasCustomError: M.default.bool,
	customErrorMessageText: hi(M.default.string, "hasCustomError"),
	name: M.default.string,
	readOnly: M.default.bool,
	children: M.default.node,
	screenReaderText: M.default.string
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Menu/MenuItem.js
function Ci({ as: e = "button", children: t, defaultSelected: n = !1, iconAfter: r, iconBefore: i, ...a }) {
	let o = (0, j.default)(a.className, "pgn__menu-item");
	return /* @__PURE__ */ (0, A.createElement)(e, {
		...a,
		className: o
	}, /* @__PURE__ */ A.createElement(A.Fragment, null, i && /* @__PURE__ */ A.createElement(ae, {
		className: "btn-icon-before",
		src: i
	}), /* @__PURE__ */ A.createElement("span", { className: "pgn__menu-item-text" }, t), /* @__PURE__ */ A.createElement("span", { className: "pgn__menu-item-content-spacer" }), r && /* @__PURE__ */ A.createElement(ae, {
		className: "btn-icon-after",
		src: r
	})));
}
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormAutosuggestOption.js
function wi({ children: e, className: t, onClick: n, ...r }) {
	return /* @__PURE__ */ A.createElement(Ci, {
		as: "li",
		"data-testid": "autosuggest-optionitem",
		role: "option",
		tabIndex: "-1",
		onClick: n,
		className: (0, j.default)(t, "dropdown-item"),
		...r
	}, e);
}
wi.defaultProps = {
	className: null,
	children: null,
	onClick: null
}, wi.propTypes = {
	className: M.default.string,
	children: M.default.string,
	onClick: M.default.func
};
var Ti = /* @__PURE__ */ A.createContext({
	getCheckboxControlProps: (e) => e,
	hasCheckboxSetProvider: !1
}), Ei = () => (0, A.useContext)(Ti);
function Di({ children: e, name: t, onBlur: n, onFocus: r, onChange: i, value: a, defaultValue: o }) {
	let s = !o && Array.isArray(a), c = {
		name: t,
		value: a,
		defaultValue: o,
		getCheckboxControlProps: (e) => ({
			...e,
			name: t,
			onBlur: e.onBlur ? Mr(n, e.onBlur) : n,
			onFocus: e.onFocus ? Mr(r, e.onFocus) : r,
			onChange: e.onChange ? Mr(i, e.onChange) : i,
			checked: s ? a.includes(e.value) : void 0,
			defaultChecked: s ? void 0 : o && o.includes(e.value)
		}),
		onBlur: n,
		onFocus: r,
		onChange: i,
		hasCheckboxSetProvider: !0
	};
	return /* @__PURE__ */ A.createElement(Ti.Provider, { value: c }, e);
}
Di.propTypes = {
	children: M.default.node.isRequired,
	name: M.default.string,
	onBlur: M.default.func,
	onFocus: M.default.func,
	onChange: M.default.func,
	value: M.default.arrayOf(M.default.string),
	defaultValue: M.default.arrayOf(M.default.string)
}, Di.defaultProps = {
	onBlur: void 0,
	name: void 0,
	onFocus: void 0,
	onChange: void 0,
	value: void 0,
	defaultValue: void 0
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormCheckbox.js
var Oi = /* @__PURE__ */ A.forwardRef(({ isIndeterminate: e, ...t }, n) => {
	let { getCheckboxControlProps: r, hasCheckboxSetProvider: i } = Ei(), a = A.useRef(), o = n || a, { getControlProps: s } = Lr(), c = s({
		...t,
		className: (0, j.default)("pgn__form-checkbox-input", t.className)
	});
	return i && (c = r(c)), A.useEffect(() => {
		o.current && (o.current.indeterminate = e);
	}, [o, e]), /* @__PURE__ */ A.createElement("input", {
		type: "checkbox",
		...c,
		ref: o
	});
});
Oi.propTypes = {
	isIndeterminate: M.default.bool,
	className: M.default.string
}, Oi.defaultProps = {
	isIndeterminate: !1,
	className: void 0
};
var ki = /* @__PURE__ */ A.forwardRef(({ children: e, className: t, controlClassName: n, labelClassName: r, description: i, isInvalid: a, isValid: o, controlAs: s, floatLabelLeft: c, ...l }, u) => {
	let { hasCheckboxSetProvider: d } = Ei(), { hasFormGroupProvider: f, useSetIsControlGroupEffect: p, getControlProps: m } = Lr();
	p(!0);
	let h = f && !d ? {
		...m({}),
		role: "group"
	} : {}, g = /* @__PURE__ */ A.createElement(s, {
		...l,
		className: n,
		ref: u
	});
	return /* @__PURE__ */ A.createElement(zr, {
		controlId: l.id,
		isInvalid: a,
		isValid: o
	}, /* @__PURE__ */ A.createElement("div", {
		className: (0, j.default)("pgn__form-checkbox", t, {
			"pgn__form-control-valid": o,
			"pgn__form-control-invalid": a,
			"pgn__form-control-disabled": l.disabled,
			"pgn__form-control-label-left": !!c
		}),
		...h
	}, g, /* @__PURE__ */ A.createElement("div", null, /* @__PURE__ */ A.createElement(Zr, { className: r }, e), i && /* @__PURE__ */ A.createElement(Kr, { hasIcon: !1 }, i))));
});
ki.propTypes = {
	id: M.default.string,
	children: M.default.node.isRequired,
	className: M.default.string,
	controlClassName: M.default.string,
	labelClassName: M.default.string,
	description: M.default.node,
	isInvalid: M.default.bool,
	isValid: M.default.bool,
	controlAs: M.default.elementType,
	floatLabelLeft: M.default.bool,
	disabled: M.default.bool
}, ki.defaultProps = {
	id: void 0,
	className: void 0,
	controlClassName: void 0,
	labelClassName: void 0,
	description: void 0,
	isInvalid: !1,
	isValid: !1,
	controlAs: Oi,
	floatLabelLeft: !1,
	disabled: !1
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormSwitch.js
var Ai = /* @__PURE__ */ A.forwardRef(({ isIndeterminate: e, ...t }, n) => {
	let r = A.useRef(), i = n || r, { getControlProps: a } = Lr(), o = a({
		...t,
		className: (0, j.default)("pgn__form-switch-input", t.className)
	});
	return A.useEffect(() => {
		i.current && (i.current.indeterminate = e);
	}, [i, e]), /* @__PURE__ */ A.createElement("input", {
		type: "checkbox",
		...o,
		ref: i
	});
});
Ai.propTypes = {
	isIndeterminate: M.default.bool,
	className: M.default.string
}, Ai.defaultProps = {
	isIndeterminate: !1,
	className: void 0
};
var ji = /* @__PURE__ */ A.forwardRef(({ children: e, className: t, helperText: n, ...r }, i) => /* @__PURE__ */ A.createElement("div", { className: "d-inline-flex flex-column" }, /* @__PURE__ */ A.createElement(ki, {
	className: (0, j.default)("pgn__form-switch", t),
	...r,
	role: "switch",
	ref: i,
	controlAs: Ai,
	isValid: null,
	isInvalid: null,
	description: null
}, e), n && /* @__PURE__ */ A.createElement("div", { className: "pgn__form-switch-helper-text" }, n)));
ji.propTypes = {
	children: M.default.node.isRequired,
	className: M.default.string,
	labelClassName: M.default.string,
	helperText: M.default.node,
	floatLabelLeft: M.default.bool
}, ji.defaultProps = {
	className: void 0,
	labelClassName: void 0,
	helperText: void 0,
	floatLabelLeft: !1
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormCheckboxSet.js
function Mi({ children: e, name: t, value: n, defaultValue: r, isInline: i, onChange: a, onFocus: o, onBlur: s, ...c }) {
	let { getControlProps: l, useSetIsControlGroupEffect: u } = Lr();
	u(!0);
	let d = l(c);
	return /* @__PURE__ */ A.createElement(Di, {
		name: t,
		value: n,
		defaultValue: r,
		onFocus: o,
		onBlur: s,
		onChange: a
	}, /* @__PURE__ */ A.createElement(ii, {
		role: "group",
		isInline: i,
		...d
	}, e));
}
Mi.propTypes = {
	children: M.default.node.isRequired,
	className: M.default.string,
	name: M.default.string.isRequired,
	value: M.default.arrayOf(M.default.string),
	defaultValue: M.default.arrayOf(M.default.string),
	isInline: M.default.bool,
	onChange: M.default.func,
	onFocus: M.default.func,
	onBlur: M.default.func
}, Mi.defaultProps = {
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
var Ni = Mi, Pi = Lt;
Pi.Control = Xr, Pi.Radio = ri, Pi.RadioSet = ai, Pi.Autosuggest = Si, Pi.AutosuggestOption = wi, Pi.Checkbox = ki, Pi.CheckboxSet = Mi, Pi.Switch = ji, Pi.SwitchSet = Ni, Pi.Label = Zr, Pi.Group = Qr, Pi.Text = Gr;
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Modal/ModalCloseButton.js
var Fi = /* @__PURE__ */ A.forwardRef(({ as: e, children: t, ...n }, r) => {
	let { onClose: i } = (0, A.useContext)(y), a = e, o = {
		...n,
		className: (0, j.default)("pgn__modal-close-button", n.className),
		onClick: () => {
			i(), n.onClick && n.onClick();
		},
		ref: r
	};
	return /* @__PURE__ */ A.createElement(a, o, t);
});
Fi.propTypes = {
	as: M.default.elementType,
	children: M.default.node,
	className: M.default.string,
	onClick: M.default.func
}, Fi.defaultProps = {
	as: D,
	onClick: void 0,
	className: void 0,
	children: null
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Modal/ModalDialogHeader.js
var Ii = /* @__PURE__ */ A.forwardRef(({ as: e = "div", children: t, ...n }, r) => /* @__PURE__ */ A.createElement(e, {
	...n,
	ref: r,
	className: (0, j.default)("pgn__modal-header", n.className)
}, t));
Ii.propTypes = {
	as: M.default.elementType,
	children: M.default.node.isRequired,
	className: M.default.string
}, Ii.defaultProps = {
	as: "div",
	className: ""
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Modal/ModalDialogTitle.js
function Li({ as: e, children: t, ...n }) {
	return /* @__PURE__ */ A.createElement(e, {
		...n,
		className: (0, j.default)("pgn__modal-title", n.className)
	}, t);
}
Li.propTypes = {
	as: M.default.elementType,
	children: M.default.node.isRequired,
	className: M.default.string
}, Li.defaultProps = {
	as: "h2",
	className: void 0
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Modal/ModalDialogFooter.js
function Ri({ as: e, children: t, ...n }) {
	return /* @__PURE__ */ A.createElement(e, {
		...n,
		className: (0, j.default)("pgn__modal-footer", n.className)
	}, t);
}
Ri.propTypes = {
	as: M.default.elementType,
	children: M.default.node.isRequired,
	className: M.default.string
}, Ri.defaultProps = {
	as: "div",
	className: void 0
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/hooks/useIsVisibleHook.js
var zi = (e = !0) => {
	let t = (0, A.useRef)(null), [n, r] = (0, A.useState)(e);
	return (0, A.useEffect)(() => {
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
function Bi({ as: e, children: t, ...n }) {
	let [r, i] = zi(), [a, o] = zi(), s = (0, j.default)("pgn__modal-body", n.className, {
		"pgn__modal-body-scroll-top": r,
		"pgn__modal-body-scroll-bottom": a
	});
	return /* @__PURE__ */ A.createElement(e, {
		...n,
		className: s
	}, /* @__PURE__ */ A.createElement(A.Fragment, null, /* @__PURE__ */ A.createElement("div", { ref: i }), /* @__PURE__ */ A.createElement("div", { className: "pgn__modal-body-content" }, t), /* @__PURE__ */ A.createElement("div", { ref: o })));
}
Bi.propTypes = {
	as: M.default.elementType,
	children: M.default.node.isRequired,
	className: M.default.string
}, Bi.defaultProps = {
	as: "div",
	className: void 0
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Modal/ModalDialogHeroContent.js
function Vi({ as: e, children: t, ...n }) {
	return /* @__PURE__ */ A.createElement(e, {
		...n,
		className: (0, j.default)("pgn__modal-hero-content", n.className)
	}, t);
}
Vi.propTypes = {
	as: M.default.elementType,
	children: M.default.node.isRequired,
	className: M.default.string
}, Vi.defaultProps = {
	as: "div",
	className: void 0
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Modal/ModalDialogHeroBackground.js
function Hi({ as: e, backgroundSrc: t, children: n, ...r }) {
	return /* @__PURE__ */ A.createElement(e, {
		...r,
		className: (0, j.default)("pgn__modal-hero-bg", r.className),
		style: {
			backgroundImage: t ? `url(${t})` : void 0,
			...r.style
		}
	}, n);
}
Hi.propTypes = {
	as: M.default.elementType,
	backgroundSrc: M.default.string,
	children: M.default.node,
	className: M.default.string,
	style: M.default.shape({})
}, Hi.defaultProps = {
	as: "div",
	backgroundSrc: void 0,
	children: null,
	className: void 0,
	style: {}
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Modal/ModalDialogHero.js
function Ui({ as: e, children: t, ...n }) {
	return /* @__PURE__ */ A.createElement(e, {
		...n,
		className: (0, j.default)("pgn__modal-hero", n.className)
	}, t);
}
Ui.propTypes = {
	as: M.default.elementType,
	children: M.default.node.isRequired,
	className: M.default.string
}, Ui.defaultProps = {
	as: "div",
	className: void 0
}, Ui.Content = Vi, Ui.Background = Hi;
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Modal/messages.js
var Wi = c({ closeButtonText: {
	id: "pgn.Modal.closeButon",
	defaultMessage: "Close",
	description: "Accessible name for the close button in the modal dialog"
} });
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Modal/ModalDialog.js
function Gi({ children: e, title: t, isOpen: n = !1, onClose: r, size: i = "md", variant: a = "default", hasCloseButton: o = !0, closeLabel: s, isFullscreenScroll: c = !1, className: l, isFullscreenOnMobile: u = !1, isBlocking: d = !1, zIndex: f, isOverflowVisible: m }) {
	let h = p(), g = s || h.formatMessage(Wi.closeButtonText), _ = Mn({ query: "(max-width: 767.98px)" }), v = u && _;
	return /* @__PURE__ */ A.createElement(re, {
		isOpen: n,
		onClose: r,
		isBlocking: d,
		zIndex: f
	}, /* @__PURE__ */ A.createElement("div", {
		role: "dialog",
		"aria-label": t,
		className: (0, j.default)("pgn__modal", {
			[`pgn__modal-${v ? "fullscreen" : i}`]: i,
			[`pgn__modal-${a}`]: a,
			"pgn__modal-scroll-fullscreen": c,
			"pgn__modal-visible-overflow": m
		}, l)
	}, o && /* @__PURE__ */ A.createElement("div", { className: "pgn__modal-close-container" }, /* @__PURE__ */ A.createElement(Fi, {
		as: te,
		iconAs: ae,
		invertColors: a === "dark",
		src: ie,
		alt: g
	})), e));
}
Gi.Header = Ii, Gi.Title = Li, Gi.Footer = Ri, Gi.CloseButton = Fi, Gi.Body = Bi, Gi.Hero = Ui;
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Nav/index.js
function Ki(e) {
	return /* @__PURE__ */ A.createElement(Qt, { ...e });
}
function qi(e) {
	return /* @__PURE__ */ A.createElement(Kt, { ...e });
}
function Ji(e) {
	return /* @__PURE__ */ A.createElement(Yt, { ...e });
}
function Yi(e) {
	return /* @__PURE__ */ A.createElement(en, { ...e });
}
function Xi(e) {
	return /* @__PURE__ */ A.createElement(en.Item, { ...e });
}
function Zi(e) {
	return /* @__PURE__ */ A.createElement(en.Divider, { ...e });
}
Ki.propTypes = {
	cardHeaderBsPrefix: M.default.string,
	defaultActiveKey: M.default.oneOfType([M.default.string, M.default.number]),
	activeKey: M.default.oneOfType([M.default.string, M.default.number]),
	as: M.default.elementType,
	fill: M.default.bool,
	justify: M.default.bool,
	navbar: M.default.bool,
	onKeyDown: M.default.func,
	onSelect: M.default.func,
	role: M.default.string,
	variant: M.default.oneOf(["tabs", "pills"]),
	bsPrefix: M.default.string
}, qi.propTypes = {
	role: M.default.string,
	as: M.default.elementType,
	bsPrefix: M.default.string
}, Ji.propTypes = {
	onSelect: M.default.string,
	active: M.default.bool,
	as: M.default.elementType,
	disabled: M.default.bool,
	eventKey: M.default.oneOfType([M.default.string, M.default.number]),
	href: M.default.string,
	role: M.default.string,
	bsPrefix: M.default.string
}, Yi.propTypes = {
	id: M.default.string.isRequired,
	title: M.default.node.isRequired,
	active: M.default.bool,
	disabled: M.default.bool,
	menuRole: M.default.string,
	menuVariant: M.default.oneOf(["dark"]),
	onClick: M.default.func,
	renderMenuOnMount: M.default.bool,
	rootCloseEvent: M.default.string,
	bsPrefix: M.default.string
}, Ki.defaultProps = { ...Qt.defaultProps }, Yi.defaultProps = { ...en.defaultProps }, qi.defaultProps = { ...Kt.defaultProps }, Ji.defaultProps = { ...Yt.defaultProps }, Ki.Item = qi, Ki.Link = Ji, Yi.Item = Xi, Yi.Divider = Zi;
//#endregion
//#region node_modules/.pnpm/deepmerge@2.2.1/node_modules/deepmerge/dist/es.js
var Qi = function(e) {
	return $i(e) && !ea(e);
};
function $i(e) {
	return !!e && typeof e == "object";
}
function ea(e) {
	var t = Object.prototype.toString.call(e);
	return t === "[object RegExp]" || t === "[object Date]" || na(e);
}
var ta = typeof Symbol == "function" && Symbol.for ? Symbol.for("react.element") : 60103;
function na(e) {
	return e.$$typeof === ta;
}
function ra(e) {
	return Array.isArray(e) ? [] : {};
}
function ia(e, t) {
	return t.clone !== !1 && t.isMergeableObject(e) ? sa(ra(e), e, t) : e;
}
function aa(e, t, n) {
	return e.concat(t).map(function(e) {
		return ia(e, n);
	});
}
function oa(e, t, n) {
	var r = {};
	return n.isMergeableObject(e) && Object.keys(e).forEach(function(t) {
		r[t] = ia(e[t], n);
	}), Object.keys(t).forEach(function(i) {
		!n.isMergeableObject(t[i]) || !e[i] ? r[i] = ia(t[i], n) : r[i] = sa(e[i], t[i], n);
	}), r;
}
function sa(e, t, n) {
	n ||= {}, n.arrayMerge = n.arrayMerge || aa, n.isMergeableObject = n.isMergeableObject || Qi;
	var r = Array.isArray(t);
	return r === Array.isArray(e) ? r ? n.arrayMerge(e, t, n) : oa(e, t, n) : ia(t, n);
}
sa.all = function(e, t) {
	if (!Array.isArray(e)) throw Error("first argument should be an array");
	return e.reduce(function(e, n) {
		return sa(e, n, t);
	}, {});
};
var ca = sa, la = typeof globalThis == "object" && globalThis && globalThis.Object === Object && globalThis, ua = typeof self == "object" && self && self.Object === Object && self, da = la || ua || Function("return this")(), fa = da.Symbol, pa = Object.prototype, ma = pa.hasOwnProperty, ha = pa.toString, ga = fa ? fa.toStringTag : void 0;
function _a(e) {
	var t = ma.call(e, ga), n = e[ga];
	try {
		e[ga] = void 0;
		var r = !0;
	} catch {}
	var i = ha.call(e);
	return r && (t ? e[ga] = n : delete e[ga]), i;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_objectToString.js
var va = Object.prototype.toString;
function ya(e) {
	return va.call(e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseGetTag.js
var ba = "[object Null]", xa = "[object Undefined]", Sa = fa ? fa.toStringTag : void 0;
function Ca(e) {
	return e == null ? e === void 0 ? xa : ba : Sa && Sa in Object(e) ? _a(e) : ya(e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_overArg.js
function wa(e, t) {
	return function(n) {
		return e(t(n));
	};
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_getPrototype.js
var Ta = wa(Object.getPrototypeOf, Object);
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isObjectLike.js
function Ea(e) {
	return typeof e == "object" && !!e;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isPlainObject.js
var Da = "[object Object]", Oa = Function.prototype, ka = Object.prototype, Aa = Oa.toString, ja = ka.hasOwnProperty, Ma = Aa.call(Object);
function Na(e) {
	if (!Ea(e) || Ca(e) != Da) return !1;
	var t = Ta(e);
	if (t === null) return !0;
	var n = ja.call(t, "constructor") && t.constructor;
	return typeof n == "function" && n instanceof n && Aa.call(n) == Ma;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_listCacheClear.js
function Pa() {
	this.__data__ = [], this.size = 0;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/eq.js
function Fa(e, t) {
	return e === t || e !== e && t !== t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_assocIndexOf.js
function Ia(e, t) {
	for (var n = e.length; n--;) if (Fa(e[n][0], t)) return n;
	return -1;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_listCacheDelete.js
var La = Array.prototype.splice;
function Ra(e) {
	var t = this.__data__, n = Ia(t, e);
	return n < 0 ? !1 : (n == t.length - 1 ? t.pop() : La.call(t, n, 1), --this.size, !0);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_listCacheGet.js
function za(e) {
	var t = this.__data__, n = Ia(t, e);
	return n < 0 ? void 0 : t[n][1];
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_listCacheHas.js
function Ba(e) {
	return Ia(this.__data__, e) > -1;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_listCacheSet.js
function Va(e, t) {
	var n = this.__data__, r = Ia(n, e);
	return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_ListCache.js
function Ha(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.clear(); ++t < n;) {
		var r = e[t];
		this.set(r[0], r[1]);
	}
}
Ha.prototype.clear = Pa, Ha.prototype.delete = Ra, Ha.prototype.get = za, Ha.prototype.has = Ba, Ha.prototype.set = Va;
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_stackClear.js
function Ua() {
	this.__data__ = new Ha(), this.size = 0;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_stackDelete.js
function Wa(e) {
	var t = this.__data__, n = t.delete(e);
	return this.size = t.size, n;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_stackGet.js
function Ga(e) {
	return this.__data__.get(e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_stackHas.js
function Ka(e) {
	return this.__data__.has(e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isObject.js
function qa(e) {
	var t = typeof e;
	return e != null && (t == "object" || t == "function");
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isFunction.js
var Ja = "[object AsyncFunction]", Ya = "[object Function]", Xa = "[object GeneratorFunction]", Za = "[object Proxy]";
function Qa(e) {
	if (!qa(e)) return !1;
	var t = Ca(e);
	return t == Ya || t == Xa || t == Ja || t == Za;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_coreJsData.js
var $a = da["__core-js_shared__"], eo = function() {
	var e = /[^.]+$/.exec($a && $a.keys && $a.keys.IE_PROTO || "");
	return e ? "Symbol(src)_1." + e : "";
}();
function to(e) {
	return !!eo && eo in e;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_toSource.js
var no = Function.prototype.toString;
function ro(e) {
	if (e != null) {
		try {
			return no.call(e);
		} catch {}
		try {
			return e + "";
		} catch {}
	}
	return "";
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseIsNative.js
var io = /[\\^$.*+?()[\]{}|]/g, ao = /^\[object .+?Constructor\]$/, oo = Function.prototype, so = Object.prototype, co = oo.toString, lo = so.hasOwnProperty, uo = RegExp("^" + co.call(lo).replace(io, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function fo(e) {
	return !qa(e) || to(e) ? !1 : (Qa(e) ? uo : ao).test(ro(e));
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_getValue.js
function po(e, t) {
	return e?.[t];
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_getNative.js
function mo(e, t) {
	var n = po(e, t);
	return fo(n) ? n : void 0;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_Map.js
var ho = mo(da, "Map"), go = mo(Object, "create");
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_hashClear.js
function _o() {
	this.__data__ = go ? go(null) : {}, this.size = 0;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_hashDelete.js
function vo(e) {
	var t = this.has(e) && delete this.__data__[e];
	return this.size -= t ? 1 : 0, t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_hashGet.js
var yo = "__lodash_hash_undefined__", bo = Object.prototype.hasOwnProperty;
function xo(e) {
	var t = this.__data__;
	if (go) {
		var n = t[e];
		return n === yo ? void 0 : n;
	}
	return bo.call(t, e) ? t[e] : void 0;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_hashHas.js
var So = Object.prototype.hasOwnProperty;
function Co(e) {
	var t = this.__data__;
	return go ? t[e] !== void 0 : So.call(t, e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_hashSet.js
var wo = "__lodash_hash_undefined__";
function To(e, t) {
	var n = this.__data__;
	return this.size += this.has(e) ? 0 : 1, n[e] = go && t === void 0 ? wo : t, this;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_Hash.js
function Eo(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.clear(); ++t < n;) {
		var r = e[t];
		this.set(r[0], r[1]);
	}
}
Eo.prototype.clear = _o, Eo.prototype.delete = vo, Eo.prototype.get = xo, Eo.prototype.has = Co, Eo.prototype.set = To;
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_mapCacheClear.js
function Do() {
	this.size = 0, this.__data__ = {
		hash: new Eo(),
		map: new (ho || Ha)(),
		string: new Eo()
	};
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_isKeyable.js
function Oo(e) {
	var t = typeof e;
	return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_getMapData.js
function ko(e, t) {
	var n = e.__data__;
	return Oo(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_mapCacheDelete.js
function Ao(e) {
	var t = ko(this, e).delete(e);
	return this.size -= t ? 1 : 0, t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_mapCacheGet.js
function jo(e) {
	return ko(this, e).get(e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_mapCacheHas.js
function Mo(e) {
	return ko(this, e).has(e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_mapCacheSet.js
function No(e, t) {
	var n = ko(this, e), r = n.size;
	return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_MapCache.js
function Po(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.clear(); ++t < n;) {
		var r = e[t];
		this.set(r[0], r[1]);
	}
}
Po.prototype.clear = Do, Po.prototype.delete = Ao, Po.prototype.get = jo, Po.prototype.has = Mo, Po.prototype.set = No;
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_stackSet.js
var Fo = 200;
function Io(e, t) {
	var n = this.__data__;
	if (n instanceof Ha) {
		var r = n.__data__;
		if (!ho || r.length < Fo - 1) return r.push([e, t]), this.size = ++n.size, this;
		n = this.__data__ = new Po(r);
	}
	return n.set(e, t), this.size = n.size, this;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_Stack.js
function Lo(e) {
	this.size = (this.__data__ = new Ha(e)).size;
}
Lo.prototype.clear = Ua, Lo.prototype.delete = Wa, Lo.prototype.get = Ga, Lo.prototype.has = Ka, Lo.prototype.set = Io;
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_arrayEach.js
function Ro(e, t) {
	for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1;);
	return e;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_defineProperty.js
var zo = function() {
	try {
		var e = mo(Object, "defineProperty");
		return e({}, "", {}), e;
	} catch {}
}();
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseAssignValue.js
function Bo(e, t, n) {
	t == "__proto__" && zo ? zo(e, t, {
		configurable: !0,
		enumerable: !0,
		value: n,
		writable: !0
	}) : e[t] = n;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_assignValue.js
var Vo = Object.prototype.hasOwnProperty;
function Ho(e, t, n) {
	var r = e[t];
	(!(Vo.call(e, t) && Fa(r, n)) || n === void 0 && !(t in e)) && Bo(e, t, n);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_copyObject.js
function Uo(e, t, n, r) {
	var i = !n;
	n ||= {};
	for (var a = -1, o = t.length; ++a < o;) {
		var s = t[a], c = r ? r(n[s], e[s], s, n, e) : void 0;
		c === void 0 && (c = e[s]), i ? Bo(n, s, c) : Ho(n, s, c);
	}
	return n;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseTimes.js
function Wo(e, t) {
	for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
	return r;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseIsArguments.js
var Go = "[object Arguments]";
function Ko(e) {
	return Ea(e) && Ca(e) == Go;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isArguments.js
var qo = Object.prototype, Jo = qo.hasOwnProperty, Yo = qo.propertyIsEnumerable, Xo = Ko(function() {
	return arguments;
}()) ? Ko : function(e) {
	return Ea(e) && Jo.call(e, "callee") && !Yo.call(e, "callee");
}, Zo = Array.isArray;
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/stubFalse.js
function Qo() {
	return !1;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isBuffer.js
var $o = typeof exports == "object" && exports && !exports.nodeType && exports, es = $o && typeof module == "object" && module && !module.nodeType && module, ts = es && es.exports === $o ? da.Buffer : void 0, ns = (ts ? ts.isBuffer : void 0) || Qo, rs = 9007199254740991, is = /^(?:0|[1-9]\d*)$/;
function as(e, t) {
	var n = typeof e;
	return t ??= rs, !!t && (n == "number" || n != "symbol" && is.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isLength.js
var os = 9007199254740991;
function ss(e) {
	return typeof e == "number" && e > -1 && e % 1 == 0 && e <= os;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseIsTypedArray.js
var cs = "[object Arguments]", ls = "[object Array]", us = "[object Boolean]", ds = "[object Date]", fs = "[object Error]", ps = "[object Function]", ms = "[object Map]", hs = "[object Number]", gs = "[object Object]", _s = "[object RegExp]", vs = "[object Set]", ys = "[object String]", bs = "[object WeakMap]", xs = "[object ArrayBuffer]", Ss = "[object DataView]", Cs = "[object Float32Array]", ws = "[object Float64Array]", Ts = "[object Int8Array]", Es = "[object Int16Array]", Ds = "[object Int32Array]", Os = "[object Uint8Array]", ks = "[object Uint8ClampedArray]", As = "[object Uint16Array]", js = "[object Uint32Array]", I = {};
I[Cs] = I[ws] = I[Ts] = I[Es] = I[Ds] = I[Os] = I[ks] = I[As] = I[js] = !0, I[cs] = I[ls] = I[xs] = I[us] = I[Ss] = I[ds] = I[fs] = I[ps] = I[ms] = I[hs] = I[gs] = I[_s] = I[vs] = I[ys] = I[bs] = !1;
function Ms(e) {
	return Ea(e) && ss(e.length) && !!I[Ca(e)];
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseUnary.js
function Ns(e) {
	return function(t) {
		return e(t);
	};
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_nodeUtil.js
var Ps = typeof exports == "object" && exports && !exports.nodeType && exports, Fs = Ps && typeof module == "object" && module && !module.nodeType && module, Is = Fs && Fs.exports === Ps && la.process, Ls = function() {
	try {
		return Fs && Fs.require && Fs.require("util").types || Is && Is.binding && Is.binding("util");
	} catch {}
}(), Rs = Ls && Ls.isTypedArray, zs = Rs ? Ns(Rs) : Ms, Bs = Object.prototype.hasOwnProperty;
function Vs(e, t) {
	var n = Zo(e), r = !n && Xo(e), i = !n && !r && ns(e), a = !n && !r && !i && zs(e), o = n || r || i || a, s = o ? Wo(e.length, String) : [], c = s.length;
	for (var l in e) (t || Bs.call(e, l)) && !(o && (l == "length" || i && (l == "offset" || l == "parent") || a && (l == "buffer" || l == "byteLength" || l == "byteOffset") || as(l, c))) && s.push(l);
	return s;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_isPrototype.js
var Hs = Object.prototype;
function Us(e) {
	var t = e && e.constructor;
	return e === (typeof t == "function" && t.prototype || Hs);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_nativeKeys.js
var Ws = wa(Object.keys, Object), Gs = Object.prototype.hasOwnProperty;
function Ks(e) {
	if (!Us(e)) return Ws(e);
	var t = [];
	for (var n in Object(e)) Gs.call(e, n) && n != "constructor" && t.push(n);
	return t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isArrayLike.js
function qs(e) {
	return e != null && ss(e.length) && !Qa(e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/keys.js
function Js(e) {
	return qs(e) ? Vs(e) : Ks(e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseAssign.js
function Ys(e, t) {
	return e && Uo(t, Js(t), e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_nativeKeysIn.js
function Xs(e) {
	var t = [];
	if (e != null) for (var n in Object(e)) t.push(n);
	return t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseKeysIn.js
var Zs = Object.prototype.hasOwnProperty;
function Qs(e) {
	if (!qa(e)) return Xs(e);
	var t = Us(e), n = [];
	for (var r in e) r == "constructor" && (t || !Zs.call(e, r)) || n.push(r);
	return n;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/keysIn.js
function $s(e) {
	return qs(e) ? Vs(e, !0) : Qs(e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseAssignIn.js
function ec(e, t) {
	return e && Uo(t, $s(t), e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_cloneBuffer.js
var tc = typeof exports == "object" && exports && !exports.nodeType && exports, nc = tc && typeof module == "object" && module && !module.nodeType && module, rc = nc && nc.exports === tc ? da.Buffer : void 0, ic = rc ? rc.allocUnsafe : void 0;
function ac(e, t) {
	if (t) return e.slice();
	var n = e.length, r = ic ? ic(n) : new e.constructor(n);
	return e.copy(r), r;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_copyArray.js
function oc(e, t) {
	var n = -1, r = e.length;
	for (t ||= Array(r); ++n < r;) t[n] = e[n];
	return t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_arrayFilter.js
function sc(e, t) {
	for (var n = -1, r = e == null ? 0 : e.length, i = 0, a = []; ++n < r;) {
		var o = e[n];
		t(o, n, e) && (a[i++] = o);
	}
	return a;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/stubArray.js
function cc() {
	return [];
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_getSymbols.js
var lc = Object.prototype.propertyIsEnumerable, uc = Object.getOwnPropertySymbols, dc = uc ? function(e) {
	return e == null ? [] : (e = Object(e), sc(uc(e), function(t) {
		return lc.call(e, t);
	}));
} : cc;
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_copySymbols.js
function fc(e, t) {
	return Uo(e, dc(e), t);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_arrayPush.js
function pc(e, t) {
	for (var n = -1, r = t.length, i = e.length; ++n < r;) e[i + n] = t[n];
	return e;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_getSymbolsIn.js
var mc = Object.getOwnPropertySymbols ? function(e) {
	for (var t = []; e;) pc(t, dc(e)), e = Ta(e);
	return t;
} : cc;
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_copySymbolsIn.js
function hc(e, t) {
	return Uo(e, mc(e), t);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseGetAllKeys.js
function gc(e, t, n) {
	var r = t(e);
	return Zo(e) ? r : pc(r, n(e));
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_getAllKeys.js
function _c(e) {
	return gc(e, Js, dc);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_getAllKeysIn.js
function vc(e) {
	return gc(e, $s, mc);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_DataView.js
var yc = mo(da, "DataView"), bc = mo(da, "Promise"), xc = mo(da, "Set"), Sc = mo(da, "WeakMap"), Cc = "[object Map]", wc = "[object Object]", Tc = "[object Promise]", Ec = "[object Set]", Dc = "[object WeakMap]", Oc = "[object DataView]", kc = ro(yc), Ac = ro(ho), jc = ro(bc), Mc = ro(xc), Nc = ro(Sc), Pc = Ca;
(yc && Pc(new yc(/* @__PURE__ */ new ArrayBuffer(1))) != Oc || ho && Pc(new ho()) != Cc || bc && Pc(bc.resolve()) != Tc || xc && Pc(new xc()) != Ec || Sc && Pc(new Sc()) != Dc) && (Pc = function(e) {
	var t = Ca(e), n = t == wc ? e.constructor : void 0, r = n ? ro(n) : "";
	if (r) switch (r) {
		case kc: return Oc;
		case Ac: return Cc;
		case jc: return Tc;
		case Mc: return Ec;
		case Nc: return Dc;
	}
	return t;
});
var Fc = Pc, Ic = Object.prototype.hasOwnProperty;
function Lc(e) {
	var t = e.length, n = new e.constructor(t);
	return t && typeof e[0] == "string" && Ic.call(e, "index") && (n.index = e.index, n.input = e.input), n;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_Uint8Array.js
var Rc = da.Uint8Array;
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_cloneArrayBuffer.js
function zc(e) {
	var t = new e.constructor(e.byteLength);
	return new Rc(t).set(new Rc(e)), t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_cloneDataView.js
function Bc(e, t) {
	var n = t ? zc(e.buffer) : e.buffer;
	return new e.constructor(n, e.byteOffset, e.byteLength);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_cloneRegExp.js
var Vc = /\w*$/;
function Hc(e) {
	var t = new e.constructor(e.source, Vc.exec(e));
	return t.lastIndex = e.lastIndex, t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_cloneSymbol.js
var Uc = fa ? fa.prototype : void 0, Wc = Uc ? Uc.valueOf : void 0;
function Gc(e) {
	return Wc ? Object(Wc.call(e)) : {};
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_cloneTypedArray.js
function Kc(e, t) {
	var n = t ? zc(e.buffer) : e.buffer;
	return new e.constructor(n, e.byteOffset, e.length);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_initCloneByTag.js
var qc = "[object Boolean]", Jc = "[object Date]", Yc = "[object Map]", Xc = "[object Number]", Zc = "[object RegExp]", Qc = "[object Set]", $c = "[object String]", el = "[object Symbol]", tl = "[object ArrayBuffer]", nl = "[object DataView]", rl = "[object Float32Array]", il = "[object Float64Array]", al = "[object Int8Array]", ol = "[object Int16Array]", sl = "[object Int32Array]", cl = "[object Uint8Array]", ll = "[object Uint8ClampedArray]", ul = "[object Uint16Array]", dl = "[object Uint32Array]";
function fl(e, t, n) {
	var r = e.constructor;
	switch (t) {
		case tl: return zc(e);
		case qc:
		case Jc: return new r(+e);
		case nl: return Bc(e, n);
		case rl:
		case il:
		case al:
		case ol:
		case sl:
		case cl:
		case ll:
		case ul:
		case dl: return Kc(e, n);
		case Yc: return new r();
		case Xc:
		case $c: return new r(e);
		case Zc: return Hc(e);
		case Qc: return new r();
		case el: return Gc(e);
	}
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseCreate.js
var pl = Object.create, ml = function() {
	function e() {}
	return function(t) {
		if (!qa(t)) return {};
		if (pl) return pl(t);
		e.prototype = t;
		var n = new e();
		return e.prototype = void 0, n;
	};
}();
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_initCloneObject.js
function hl(e) {
	return typeof e.constructor == "function" && !Us(e) ? ml(Ta(e)) : {};
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseIsMap.js
var gl = "[object Map]";
function _l(e) {
	return Ea(e) && Fc(e) == gl;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isMap.js
var vl = Ls && Ls.isMap, yl = vl ? Ns(vl) : _l, bl = "[object Set]";
function xl(e) {
	return Ea(e) && Fc(e) == bl;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isSet.js
var Sl = Ls && Ls.isSet, Cl = Sl ? Ns(Sl) : xl, wl = 1, Tl = 2, El = 4, Dl = "[object Arguments]", Ol = "[object Array]", kl = "[object Boolean]", Al = "[object Date]", jl = "[object Error]", Ml = "[object Function]", Nl = "[object GeneratorFunction]", Pl = "[object Map]", Fl = "[object Number]", Il = "[object Object]", Ll = "[object RegExp]", Rl = "[object Set]", zl = "[object String]", Bl = "[object Symbol]", Vl = "[object WeakMap]", Hl = "[object ArrayBuffer]", Ul = "[object DataView]", Wl = "[object Float32Array]", Gl = "[object Float64Array]", Kl = "[object Int8Array]", ql = "[object Int16Array]", Jl = "[object Int32Array]", Yl = "[object Uint8Array]", Xl = "[object Uint8ClampedArray]", Zl = "[object Uint16Array]", Ql = "[object Uint32Array]", L = {};
L[Dl] = L[Ol] = L[Hl] = L[Ul] = L[kl] = L[Al] = L[Wl] = L[Gl] = L[Kl] = L[ql] = L[Jl] = L[Pl] = L[Fl] = L[Il] = L[Ll] = L[Rl] = L[zl] = L[Bl] = L[Yl] = L[Xl] = L[Zl] = L[Ql] = !0, L[jl] = L[Ml] = L[Vl] = !1;
function $l(e, t, n, r, i, a) {
	var o, s = t & wl, c = t & Tl, l = t & El;
	if (n && (o = i ? n(e, r, i, a) : n(e)), o !== void 0) return o;
	if (!qa(e)) return e;
	var u = Zo(e);
	if (u) {
		if (o = Lc(e), !s) return oc(e, o);
	} else {
		var d = Fc(e), f = d == Ml || d == Nl;
		if (ns(e)) return ac(e, s);
		if (d == Il || d == Dl || f && !i) {
			if (o = c || f ? {} : hl(e), !s) return c ? hc(e, ec(o, e)) : fc(e, Ys(o, e));
		} else {
			if (!L[d]) return i ? e : {};
			o = fl(e, d, s);
		}
	}
	a ||= new Lo();
	var p = a.get(e);
	if (p) return p;
	a.set(e, o), Cl(e) ? e.forEach(function(r) {
		o.add($l(r, t, n, r, e, a));
	}) : yl(e) && e.forEach(function(r, i) {
		o.set(i, $l(r, t, n, i, e, a));
	});
	var m = u ? void 0 : (l ? c ? vc : _c : c ? $s : Js)(e);
	return Ro(m || e, function(r, i) {
		m && (i = r, r = e[i]), Ho(o, i, $l(r, t, n, i, e, a));
	}), o;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/cloneDeep.js
var eu = 1, tu = 4;
function nu(e) {
	return $l(e, eu | tu);
}
//#endregion
//#region node_modules/.pnpm/tiny-warning@1.0.3/node_modules/tiny-warning/dist/tiny-warning.esm.js
var ru = /* @__PURE__ */ g((/* @__PURE__ */ o(((e, t) => {
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
})))()), iu = !0;
function au(e, t) {
	if (!iu) {
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
var ou = 4;
function su(e) {
	return $l(e, ou);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_arrayMap.js
function cu(e, t) {
	for (var n = -1, r = e == null ? 0 : e.length, i = Array(r); ++n < r;) i[n] = t(e[n], n, e);
	return i;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isSymbol.js
var lu = "[object Symbol]";
function uu(e) {
	return typeof e == "symbol" || Ea(e) && Ca(e) == lu;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/memoize.js
var du = "Expected a function";
function fu(e, t) {
	if (typeof e != "function" || t != null && typeof t != "function") throw TypeError(du);
	var n = function() {
		var r = arguments, i = t ? t.apply(this, r) : r[0], a = n.cache;
		if (a.has(i)) return a.get(i);
		var o = e.apply(this, r);
		return n.cache = a.set(i, o) || a, o;
	};
	return n.cache = new (fu.Cache || Po)(), n;
}
fu.Cache = Po;
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_memoizeCapped.js
var pu = 500;
function mu(e) {
	var t = fu(e, function(e) {
		return n.size === pu && n.clear(), e;
	}), n = t.cache;
	return t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_stringToPath.js
var hu = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, gu = /\\(\\)?/g, _u = mu(function(e) {
	var t = [];
	return e.charCodeAt(0) === 46 && t.push(""), e.replace(hu, function(e, n, r, i) {
		t.push(r ? i.replace(gu, "$1") : n || e);
	}), t;
}), vu = Infinity;
function yu(e) {
	if (typeof e == "string" || uu(e)) return e;
	var t = e + "";
	return t == "0" && 1 / e == -vu ? "-0" : t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseToString.js
var bu = Infinity, xu = fa ? fa.prototype : void 0, Su = xu ? xu.toString : void 0;
function Cu(e) {
	if (typeof e == "string") return e;
	if (Zo(e)) return cu(e, Cu) + "";
	if (uu(e)) return Su ? Su.call(e) : "";
	var t = e + "";
	return t == "0" && 1 / e == -bu ? "-0" : t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/toString.js
function wu(e) {
	return e == null ? "" : Cu(e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/toPath.js
function Tu(e) {
	return Zo(e) ? cu(e, yu) : uu(e) ? [e] : oc(_u(wu(e)));
}
//#endregion
//#region node_modules/.pnpm/formik@2.4.9_@types+react@18.3.28_react@18.3.1/node_modules/formik/dist/formik.esm.js
function R() {
	return R = Object.assign || function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, R.apply(this, arguments);
}
function Eu(e, t) {
	e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t;
}
function Du(e, t) {
	if (e == null) return {};
	var n = {}, r = Object.keys(e), i, a;
	for (a = 0; a < r.length; a++) i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
	return n;
}
function Ou(e) {
	if (e === void 0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
	return e;
}
var ku = /* @__PURE__ */ (0, A.createContext)(void 0);
ku.displayName = "FormikContext";
var Au = ku.Provider, ju = ku.Consumer;
function Mu() {
	var e = (0, A.useContext)(ku);
	return !e && au(!1), e;
}
var Nu = function(e) {
	return Array.isArray(e) && e.length === 0;
}, Pu = function(e) {
	return typeof e == "function";
}, Fu = function(e) {
	return typeof e == "object" && !!e;
}, Iu = function(e) {
	return String(Math.floor(Number(e))) === e;
}, Lu = function(e) {
	return Object.prototype.toString.call(e) === "[object String]";
}, Ru = function(e) {
	return A.Children.count(e) === 0;
}, zu = function(e) {
	return Fu(e) && Pu(e.then);
};
function z(e, t, n, r) {
	r === void 0 && (r = 0);
	for (var i = Tu(t); e && r < i.length;) e = e[i[r++]];
	return r !== i.length && !e || e === void 0 ? n : e;
}
function Bu(e, t, n) {
	for (var r = su(e), i = r, a = 0, o = Tu(t); a < o.length - 1; a++) {
		var s = o[a], c = z(e, o.slice(0, a + 1));
		if (c && (Fu(c) || Array.isArray(c))) i = i[s] = su(c);
		else {
			var l = o[a + 1];
			i = i[s] = Iu(l) && Number(l) >= 0 ? [] : {};
		}
	}
	return (a === 0 ? e : i)[o[a]] === n ? e : (n === void 0 ? delete i[o[a]] : i[o[a]] = n, a === 0 && n === void 0 && delete r[o[a]], r);
}
function Vu(e, t, n, r) {
	n === void 0 && (n = /* @__PURE__ */ new WeakMap()), r === void 0 && (r = {});
	for (var i = 0, a = Object.keys(e); i < a.length; i++) {
		var o = a[i], s = e[o];
		Fu(s) ? n.get(s) || (n.set(s, !0), r[o] = Array.isArray(s) ? [] : {}, Vu(s, t, n, r[o])) : r[o] = t;
	}
	return r;
}
function Hu(e, t) {
	switch (t.type) {
		case "SET_VALUES": return R({}, e, { values: t.payload });
		case "SET_TOUCHED": return R({}, e, { touched: t.payload });
		case "SET_ERRORS": return (0, ru.default)(e.errors, t.payload) ? e : R({}, e, { errors: t.payload });
		case "SET_STATUS": return R({}, e, { status: t.payload });
		case "SET_ISSUBMITTING": return R({}, e, { isSubmitting: t.payload });
		case "SET_ISVALIDATING": return R({}, e, { isValidating: t.payload });
		case "SET_FIELD_VALUE": return R({}, e, { values: Bu(e.values, t.payload.field, t.payload.value) });
		case "SET_FIELD_TOUCHED": return R({}, e, { touched: Bu(e.touched, t.payload.field, t.payload.value) });
		case "SET_FIELD_ERROR": return R({}, e, { errors: Bu(e.errors, t.payload.field, t.payload.value) });
		case "RESET_FORM": return R({}, e, t.payload);
		case "SET_FORMIK_STATE": return t.payload(e);
		case "SUBMIT_ATTEMPT": return R({}, e, {
			touched: Vu(e.values, !0),
			isSubmitting: !0,
			submitCount: e.submitCount + 1
		});
		case "SUBMIT_FAILURE": return R({}, e, { isSubmitting: !1 });
		case "SUBMIT_SUCCESS": return R({}, e, { isSubmitting: !1 });
		default: return e;
	}
}
var Uu = {}, Wu = {};
function Gu(e) {
	var t = e.validateOnChange, n = t === void 0 ? !0 : t, r = e.validateOnBlur, i = r === void 0 ? !0 : r, a = e.validateOnMount, o = a === void 0 ? !1 : a, s = e.isInitialValid, c = e.enableReinitialize, l = c === void 0 ? !1 : c, u = e.onSubmit, d = Du(e, [
		"validateOnChange",
		"validateOnBlur",
		"validateOnMount",
		"isInitialValid",
		"enableReinitialize",
		"onSubmit"
	]), f = R({
		validateOnChange: n,
		validateOnBlur: i,
		validateOnMount: o,
		onSubmit: u
	}, d), p = (0, A.useRef)(f.initialValues), m = (0, A.useRef)(f.initialErrors || Uu), h = (0, A.useRef)(f.initialTouched || Wu), g = (0, A.useRef)(f.initialStatus), _ = (0, A.useRef)(!1), v = (0, A.useRef)({});
	(0, A.useEffect)(function() {
		return _.current = !0, function() {
			_.current = !1;
		};
	}, []);
	var y = (0, A.useState)(0)[1], b = (0, A.useRef)({
		values: nu(f.initialValues),
		errors: nu(f.initialErrors) || Uu,
		touched: nu(f.initialTouched) || Wu,
		status: nu(f.initialStatus),
		isSubmitting: !1,
		isValidating: !1,
		submitCount: 0
	}), x = b.current, S = (0, A.useCallback)(function(e) {
		var t = b.current;
		b.current = Hu(t, e), t !== b.current && y(function(e) {
			return e + 1;
		});
	}, []), C = (0, A.useCallback)(function(e, t) {
		return new Promise(function(n, r) {
			var i = f.validate(e, t);
			i == null ? n(Uu) : zu(i) ? i.then(function(e) {
				n(e || Uu);
			}, function(e) {
				r(e);
			}) : n(i);
		});
	}, [f.validate]), ee = (0, A.useCallback)(function(e, t) {
		var n = f.validationSchema, r = Pu(n) ? n(t) : n, i = t && r.validateAt ? r.validateAt(t, e) : Ju(e, r);
		return new Promise(function(e, t) {
			i.then(function() {
				e(Uu);
			}, function(n) {
				n.name === "ValidationError" ? e(qu(n)) : t(n);
			});
		});
	}, [f.validationSchema]), w = (0, A.useCallback)(function(e, t) {
		return new Promise(function(n) {
			return n(v.current[e].validate(t));
		});
	}, []), T = (0, A.useCallback)(function(e) {
		var t = Object.keys(v.current).filter(function(e) {
			return Pu(v.current[e].validate);
		}), n = t.length > 0 ? t.map(function(t) {
			return w(t, z(e, t));
		}) : [Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];
		return Promise.all(n).then(function(e) {
			return e.reduce(function(e, n, r) {
				return n === "DO_NOT_DELETE_YOU_WILL_BE_FIRED" || n && (e = Bu(e, t[r], n)), e;
			}, {});
		});
	}, [w]), E = (0, A.useCallback)(function(e) {
		return Promise.all([
			T(e),
			f.validationSchema ? ee(e) : {},
			f.validate ? C(e) : {}
		]).then(function(e) {
			var t = e[0], n = e[1], r = e[2];
			return ca.all([
				t,
				n,
				r
			], { arrayMerge: Xu });
		});
	}, [
		f.validate,
		f.validationSchema,
		T,
		C,
		ee
	]), D = ed(function(e) {
		return e === void 0 && (e = x.values), S({
			type: "SET_ISVALIDATING",
			payload: !0
		}), E(e).then(function(e) {
			return _.current && (S({
				type: "SET_ISVALIDATING",
				payload: !1
			}), S({
				type: "SET_ERRORS",
				payload: e
			})), e;
		});
	});
	(0, A.useEffect)(function() {
		o && _.current === !0 && (0, ru.default)(p.current, f.initialValues) && D(p.current);
	}, [o, D]);
	var O = (0, A.useCallback)(function(e) {
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
			var o = f.onReset(x.values, ge);
			zu(o) ? o.then(a) : a();
		} else a();
	}, [
		f.initialErrors,
		f.initialStatus,
		f.initialTouched,
		f.onReset
	]);
	(0, A.useEffect)(function() {
		_.current === !0 && !(0, ru.default)(p.current, f.initialValues) && l && (p.current = f.initialValues, O(), o && D(p.current));
	}, [
		l,
		f.initialValues,
		O,
		o,
		D
	]), (0, A.useEffect)(function() {
		l && _.current === !0 && !(0, ru.default)(m.current, f.initialErrors) && (m.current = f.initialErrors || Uu, S({
			type: "SET_ERRORS",
			payload: f.initialErrors || Uu
		}));
	}, [l, f.initialErrors]), (0, A.useEffect)(function() {
		l && _.current === !0 && !(0, ru.default)(h.current, f.initialTouched) && (h.current = f.initialTouched || Wu, S({
			type: "SET_TOUCHED",
			payload: f.initialTouched || Wu
		}));
	}, [l, f.initialTouched]), (0, A.useEffect)(function() {
		l && _.current === !0 && !(0, ru.default)(g.current, f.initialStatus) && (g.current = f.initialStatus, S({
			type: "SET_STATUS",
			payload: f.initialStatus
		}));
	}, [
		l,
		f.initialStatus,
		f.initialTouched
	]);
	var te = ed(function(e) {
		if (v.current[e] && Pu(v.current[e].validate)) {
			var t = z(x.values, e), n = v.current[e].validate(t);
			return zu(n) ? (S({
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
		}), ee(x.values, e).then(function(e) {
			return e;
		}).then(function(t) {
			S({
				type: "SET_FIELD_ERROR",
				payload: {
					field: e,
					value: z(t, e)
				}
			}), S({
				type: "SET_ISVALIDATING",
				payload: !1
			});
		});
		return Promise.resolve();
	}), ne = (0, A.useCallback)(function(e, t) {
		var n = t.validate;
		v.current[e] = { validate: n };
	}, []), re = (0, A.useCallback)(function(e) {
		delete v.current[e];
	}, []), ie = ed(function(e, t) {
		return S({
			type: "SET_TOUCHED",
			payload: e
		}), (t === void 0 ? i : t) ? D(x.values) : Promise.resolve();
	}), ae = (0, A.useCallback)(function(e) {
		S({
			type: "SET_ERRORS",
			payload: e
		});
	}, []), oe = ed(function(e, t) {
		var r = Pu(e) ? e(x.values) : e;
		return S({
			type: "SET_VALUES",
			payload: r
		}), (t === void 0 ? n : t) ? D(r) : Promise.resolve();
	}), k = (0, A.useCallback)(function(e, t) {
		S({
			type: "SET_FIELD_ERROR",
			payload: {
				field: e,
				value: t
			}
		});
	}, []), se = ed(function(e, t, r) {
		var i = Pu(t) ? t(z(x.values, e)) : t;
		return S({
			type: "SET_FIELD_VALUE",
			payload: {
				field: e,
				value: i
			}
		}), (r === void 0 ? n : r) ? D(Bu(x.values, e, i)) : Promise.resolve();
	}), ce = (0, A.useCallback)(function(e, t) {
		var n = t, r = e, i;
		if (!Lu(e)) {
			e.persist && e.persist();
			var a = e.target ? e.target : e.currentTarget, o = a.type, s = a.name, c = a.id, l = a.value, u = a.checked;
			a.outerHTML;
			var d = a.options, f = a.multiple;
			n = t || s || c, r = /number|range/.test(o) ? (i = parseFloat(l), isNaN(i) ? "" : i) : /checkbox/.test(o) ? Qu(z(x.values, n), u, l) : d && f ? Zu(d) : l;
		}
		n && se(n, r);
	}, [se, x.values]), le = ed(function(e) {
		if (Lu(e)) return function(t) {
			return ce(t, e);
		};
		ce(e);
	}), j = ed(function(e, t, n) {
		return t === void 0 && (t = !0), S({
			type: "SET_FIELD_TOUCHED",
			payload: {
				field: e,
				value: t
			}
		}), (n === void 0 ? i : n) ? D(x.values) : Promise.resolve();
	}), ue = (0, A.useCallback)(function(e, t) {
		e.persist && e.persist();
		var n = e.target, r = n.name, i = n.id;
		n.outerHTML, j(t || r || i, !0);
	}, [j]), de = ed(function(e) {
		if (Lu(e)) return function(t) {
			return ue(t, e);
		};
		ue(e);
	}), fe = (0, A.useCallback)(function(e) {
		Pu(e) ? S({
			type: "SET_FORMIK_STATE",
			payload: e
		}) : S({
			type: "SET_FORMIK_STATE",
			payload: function() {
				return e;
			}
		});
	}, []), pe = (0, A.useCallback)(function(e) {
		S({
			type: "SET_STATUS",
			payload: e
		});
	}, []), M = (0, A.useCallback)(function(e) {
		S({
			type: "SET_ISSUBMITTING",
			payload: e
		});
	}, []), me = ed(function() {
		return S({ type: "SUBMIT_ATTEMPT" }), D().then(function(e) {
			var t = e instanceof Error;
			if (!t && Object.keys(e).length === 0) {
				var n;
				try {
					if (n = _e(), n === void 0) return;
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
	}), he = ed(function(e) {
		e && e.preventDefault && Pu(e.preventDefault) && e.preventDefault(), e && e.stopPropagation && Pu(e.stopPropagation) && e.stopPropagation(), me().catch(function(e) {
			console.warn("Warning: An unhandled error was caught from submitForm()", e);
		});
	}), ge = {
		resetForm: O,
		validateForm: D,
		validateField: te,
		setErrors: ae,
		setFieldError: k,
		setFieldTouched: j,
		setFieldValue: se,
		setStatus: pe,
		setSubmitting: M,
		setTouched: ie,
		setValues: oe,
		setFormikState: fe,
		submitForm: me
	}, _e = ed(function() {
		return u(x.values, ge);
	}), ve = ed(function(e) {
		e && e.preventDefault && Pu(e.preventDefault) && e.preventDefault(), e && e.stopPropagation && Pu(e.stopPropagation) && e.stopPropagation(), O();
	}), ye = (0, A.useCallback)(function(e) {
		return {
			value: z(x.values, e),
			error: z(x.errors, e),
			touched: !!z(x.touched, e),
			initialValue: z(p.current, e),
			initialTouched: !!z(h.current, e),
			initialError: z(m.current, e)
		};
	}, [
		x.errors,
		x.touched,
		x.values
	]), be = (0, A.useCallback)(function(e) {
		return {
			setValue: function(t, n) {
				return se(e, t, n);
			},
			setTouched: function(t, n) {
				return j(e, t, n);
			},
			setError: function(t) {
				return k(e, t);
			}
		};
	}, [
		se,
		j,
		k
	]), xe = (0, A.useCallback)(function(e) {
		var t = Fu(e), n = t ? e.name : e, r = z(x.values, n), i = {
			name: n,
			value: r,
			onChange: le,
			onBlur: de
		};
		if (t) {
			var a = e.type, o = e.value, s = e.as, c = e.multiple;
			a === "checkbox" ? o === void 0 ? i.checked = !!r : (i.checked = !!(Array.isArray(r) && ~r.indexOf(o)), i.value = o) : a === "radio" ? (i.checked = r === o, i.value = o) : s === "select" && c && (i.value = i.value || [], i.multiple = !0);
		}
		return i;
	}, [
		de,
		le,
		x.values
	]), Se = (0, A.useMemo)(function() {
		return !(0, ru.default)(p.current, x.values);
	}, [p.current, x.values]), Ce = (0, A.useMemo)(function() {
		return s === void 0 || Se ? x.errors && Object.keys(x.errors).length === 0 : s !== !1 && Pu(s) ? s(f) : s;
	}, [
		s,
		Se,
		x.errors,
		f
	]);
	return R({}, x, {
		initialValues: p.current,
		initialErrors: m.current,
		initialTouched: h.current,
		initialStatus: g.current,
		handleBlur: de,
		handleChange: le,
		handleReset: ve,
		handleSubmit: he,
		resetForm: O,
		setErrors: ae,
		setFormikState: fe,
		setFieldTouched: j,
		setFieldValue: se,
		setFieldError: k,
		setStatus: pe,
		setSubmitting: M,
		setTouched: ie,
		setValues: oe,
		submitForm: me,
		validateForm: D,
		validateField: te,
		isValid: Ce,
		dirty: Se,
		unregisterField: re,
		registerField: ne,
		getFieldProps: xe,
		getFieldMeta: ye,
		getFieldHelpers: be,
		validateOnBlur: i,
		validateOnChange: n,
		validateOnMount: o
	});
}
function Ku(e) {
	var t = Gu(e), n = e.component, r = e.children, i = e.render, a = e.innerRef;
	return (0, A.useImperativeHandle)(a, function() {
		return t;
	}), (0, A.createElement)(Au, { value: t }, n ? (0, A.createElement)(n, t) : i ? i(t) : r ? Pu(r) ? r(t) : Ru(r) ? null : A.Children.only(r) : null);
}
function qu(e) {
	var t = {};
	if (e.inner) {
		if (e.inner.length === 0) return Bu(t, e.path, e.message);
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
			z(t, o.path) || (t = Bu(t, o.path, o.message));
		}
	}
	return t;
}
function Ju(e, t, n, r) {
	n === void 0 && (n = !1);
	var i = Yu(e);
	return t[n ? "validateSync" : "validate"](i, {
		abortEarly: !1,
		context: r || i
	});
}
function Yu(e) {
	var t = Array.isArray(e) ? [] : {};
	for (var n in e) if (Object.prototype.hasOwnProperty.call(e, n)) {
		var r = String(n);
		Array.isArray(e[r]) === !0 ? t[r] = e[r].map(function(e) {
			return Array.isArray(e) === !0 || Na(e) ? Yu(e) : e === "" ? void 0 : e;
		}) : Na(e[r]) ? t[r] = Yu(e[r]) : t[r] = e[r] === "" ? void 0 : e[r];
	}
	return t;
}
function Xu(e, t, n) {
	var r = e.slice();
	return t.forEach(function(t, i) {
		r[i] === void 0 ? r[i] = n.clone !== !1 && n.isMergeableObject(t) ? ca(Array.isArray(t) ? [] : {}, t, n) : t : n.isMergeableObject(t) ? r[i] = ca(e[i], t, n) : e.indexOf(t) === -1 && r.push(t);
	}), r;
}
function Zu(e) {
	return Array.from(e).filter(function(e) {
		return e.selected;
	}).map(function(e) {
		return e.value;
	});
}
function Qu(e, t, n) {
	if (typeof e == "boolean") return !!t;
	var r = [], i = !1, a = -1;
	if (Array.isArray(e)) r = e, a = e.indexOf(n), i = a >= 0;
	else if (!n || n == "true" || n == "false") return !!t;
	return t && n && !i ? r.concat(n) : i ? r.slice(0, a).concat(r.slice(a + 1)) : r;
}
var $u = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0 ? A.useLayoutEffect : A.useEffect;
function ed(e) {
	var t = (0, A.useRef)(e);
	return $u(function() {
		t.current = e;
	}), (0, A.useCallback)(function() {
		var e = [...arguments];
		return t.current.apply(void 0, e);
	}, []);
}
var td = /* @__PURE__ */ (0, A.forwardRef)(function(e, t) {
	var n = e.action, r = Du(e, ["action"]), i = n ?? "#", a = Mu(), o = a.handleReset, s = a.handleSubmit;
	return (0, A.createElement)("form", R({
		onSubmit: s,
		ref: t,
		onReset: o,
		action: i
	}, r));
});
td.displayName = "Form";
function nd(e) {
	var t = function(t) {
		return (0, A.createElement)(ju, null, function(n) {
			return !n && au(!1), (0, A.createElement)(e, R({}, t, { formik: n }));
		});
	}, n = e.displayName || e.name || e.constructor && e.constructor.name || "Component";
	return t.WrappedComponent = e, t.displayName = "FormikConnect(" + n + ")", (0, me.default)(t, e);
}
var rd = function(e, t, n) {
	var r = sd(e), i = r[t];
	return r.splice(t, 1), r.splice(n, 0, i), r;
}, id = function(e, t, n) {
	var r = sd(e), i = r[t];
	return r[t] = r[n], r[n] = i, r;
}, ad = function(e, t, n) {
	var r = sd(e);
	return r.splice(t, 0, n), r;
}, od = function(e, t, n) {
	var r = sd(e);
	return r[t] = n, r;
}, sd = function(e) {
	if (!e) return [];
	if (Array.isArray(e)) return [].concat(e);
	var t = Object.keys(e).map(function(e) {
		return parseInt(e);
	}).reduce(function(e, t) {
		return t > e ? t : e;
	}, 0);
	return Array.from(R({}, e, { length: t + 1 }));
}, cd = function(e, t) {
	var n = typeof e == "function" ? e : t;
	return function(e) {
		return Array.isArray(e) || Fu(e) ? n(sd(e)) : e;
	};
}, ld = /* @__PURE__ */ function(e) {
	Eu(t, e);
	function t(t) {
		var n = e.call(this, t) || this;
		return n.updateArrayField = function(e, t, r) {
			var i = n.props, a = i.name, o = i.formik.setFormikState;
			o(function(n) {
				var i = cd(r, e), o = cd(t, e), s = Bu(n.values, a, e(z(n.values, a))), c = r ? i(z(n.errors, a)) : void 0, l = t ? o(z(n.touched, a)) : void 0;
				return Nu(c) && (c = void 0), Nu(l) && (l = void 0), R({}, n, {
					values: s,
					errors: r ? Bu(n.errors, a, c) : n.errors,
					touched: t ? Bu(n.touched, a, l) : n.touched
				});
			});
		}, n.push = function(e) {
			return n.updateArrayField(function(t) {
				return [].concat(sd(t), [nu(e)]);
			}, !1, !1);
		}, n.handlePush = function(e) {
			return function() {
				return n.push(e);
			};
		}, n.swap = function(e, t) {
			return n.updateArrayField(function(n) {
				return id(n, e, t);
			}, !0, !0);
		}, n.handleSwap = function(e, t) {
			return function() {
				return n.swap(e, t);
			};
		}, n.move = function(e, t) {
			return n.updateArrayField(function(n) {
				return rd(n, e, t);
			}, !0, !0);
		}, n.handleMove = function(e, t) {
			return function() {
				return n.move(e, t);
			};
		}, n.insert = function(e, t) {
			return n.updateArrayField(function(n) {
				return ad(n, e, t);
			}, function(t) {
				return ad(t, e, null);
			}, function(t) {
				return ad(t, e, null);
			});
		}, n.handleInsert = function(e, t) {
			return function() {
				return n.insert(e, t);
			};
		}, n.replace = function(e, t) {
			return n.updateArrayField(function(n) {
				return od(n, e, t);
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
		}, n.remove = n.remove.bind(Ou(n)), n.pop = n.pop.bind(Ou(n)), n;
	}
	var n = t.prototype;
	return n.componentDidUpdate = function(e) {
		this.props.validateOnChange && this.props.formik.validateOnChange && !(0, ru.default)(z(e.formik.values, e.name), z(this.props.formik.values, this.props.name)) && this.props.formik.validateForm(this.props.formik.values);
	}, n.remove = function(e) {
		var t;
		return this.updateArrayField(function(n) {
			var r = n ? sd(n) : [];
			return t ||= r[e], Pu(r.splice) && r.splice(e, 1), Pu(r.every) && r.every(function(e) {
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
		}, t = this.props, n = t.component, r = t.render, i = t.children, a = t.name, o = t.formik, s = Du(o, ["validate", "validationSchema"]), c = R({}, e, {
			form: s,
			name: a
		});
		return n ? (0, A.createElement)(n, c) : r ? r(c) : i ? typeof i == "function" ? i(c) : Ru(i) ? null : A.Children.only(i) : null;
	}, t;
}(A.Component);
ld.defaultProps = { validateOnChange: !0 };
var ud = /* @__PURE__ */ nd(ld), B = s();
function dd({ title: e, onTitleChange: t, activeTab: n, tabs: r, onClose: i, showEditingPrefix: a = !0 }) {
	let [o, s] = (0, A.useState)(!1);
	return /* @__PURE__ */ (0, B.jsx)(Gi.Header, {
		className: "shadow-sm studio-header",
		children: /* @__PURE__ */ (0, B.jsxs)("div", {
			className: "d-flex flex-row justify-content-between",
			children: [
				/* @__PURE__ */ (0, B.jsx)(ue, { children: o ? /* @__PURE__ */ (0, B.jsx)(Pi.Control, {
					type: "text",
					name: "studio-title",
					"aria-label": "Display name",
					value: e,
					onChange: (e) => t(e.target.value),
					onBlur: () => s(!1),
					onKeyDown: (e) => {
						(e.key === "Enter" || e.key === "Escape") && (s(!1), e.preventDefault());
					}
				}) : /* @__PURE__ */ (0, B.jsx)("h3", {
					className: "h3 col pl-0",
					children: /* @__PURE__ */ (0, B.jsxs)("div", {
						className: "d-flex flex-row align-items-center mt-1",
						children: [a ? `Editing: ${e}` : e, /* @__PURE__ */ (0, B.jsx)(te, {
							alt: "Edit display name",
							className: "studio-header-title-edit",
							size: "sm",
							src: Rn,
							onClick: () => s(!0)
						})]
					})
				}) }),
				/* @__PURE__ */ (0, B.jsx)(ue.Spacer, {}),
				r && r.length > 0 && n !== void 0 && /* @__PURE__ */ (0, B.jsx)(Ki, {
					role: "tablist",
					variant: "button-group",
					activeKey: n,
					className: "studio-header-tabs-nav pgn__tabs",
					"aria-label": "Editor Sections",
					children: r.map(({ key: e, label: t }) => /* @__PURE__ */ (0, B.jsx)(Ki.Link, {
						as: "button",
						type: "button",
						eventKey: e,
						tabIndex: n === e ? 0 : -1,
						children: t
					}, e))
				}),
				i && /* @__PURE__ */ (0, B.jsx)(te, {
					alt: "Close editor",
					className: "studio-header-close",
					size: "sm",
					src: ie,
					onClick: i
				})
			]
		})
	});
}
//#endregion
//#region node_modules/.pnpm/@preact+signals-core@1.14.1/node_modules/@preact/signals-core/dist/signals-core.module.js
var fd = Symbol.for("preact-signals");
function pd() {
	if (gd > 1) gd--;
	else {
		var e, t = !1;
		for ((function() {
			var e = bd;
			for (bd = void 0; e !== void 0;) e.S.v === e.v && (e.S.i = e.i), e = e.o;
		})(); hd !== void 0;) {
			var n = hd;
			for (hd = void 0, _d++; n !== void 0;) {
				var r = n.u;
				if (n.u = void 0, n.f &= -3, !(8 & n.f) && Td(n)) try {
					n.c();
				} catch (n) {
					t ||= (e = n, !0);
				}
				n = r;
			}
		}
		if (_d = 0, gd--, t) throw e;
	}
}
function V(e) {
	if (gd > 0) return e();
	yd = ++vd, gd++;
	try {
		return e();
	} finally {
		pd();
	}
}
var H = void 0;
function U(e) {
	var t = H;
	H = void 0;
	try {
		return e();
	} finally {
		H = t;
	}
}
var md, hd = void 0, gd = 0, _d = 0, vd = 0, yd = 0, bd = void 0, xd = 0;
function Sd(e) {
	if (H !== void 0) {
		var t = e.n;
		if (t === void 0 || t.t !== H) return t = {
			i: 0,
			S: e,
			p: H.s,
			n: void 0,
			t: H,
			e: void 0,
			x: void 0,
			r: t
		}, H.s !== void 0 && (H.s.n = t), H.s = t, e.n = t, 32 & H.f && e.S(t), t;
		if (t.i === -1) return t.i = 0, t.n !== void 0 && (t.n.p = t.p, t.p !== void 0 && (t.p.n = t.n), t.p = H.s, t.n = void 0, H.s.n = t, H.s = t), t;
	}
}
function Cd(e, t) {
	this.v = e, this.i = 0, this.n = void 0, this.t = void 0, this.l = 0, this.W = t?.watched, this.Z = t?.unwatched, this.name = t?.name;
}
Cd.prototype.brand = fd, Cd.prototype.h = function() {
	return !0;
}, Cd.prototype.S = function(e) {
	var t = this, n = this.t;
	n !== e && e.e === void 0 && (e.x = n, this.t = e, n === void 0 ? U(function() {
		var e;
		(e = t.W) == null || e.call(t);
	}) : n.e = e);
}, Cd.prototype.U = function(e) {
	var t = this;
	if (this.t !== void 0) {
		var n = e.e, r = e.x;
		n !== void 0 && (n.x = r, e.e = void 0), r !== void 0 && (r.e = n, e.x = void 0), e === this.t && (this.t = r, r === void 0 && U(function() {
			var e;
			(e = t.Z) == null || e.call(t);
		}));
	}
}, Cd.prototype.subscribe = function(e) {
	var t = this;
	return Pd(function() {
		var n = t.value, r = H;
		H = void 0;
		try {
			e(n);
		} finally {
			H = r;
		}
	}, { name: "sub" });
}, Cd.prototype.valueOf = function() {
	return this.value;
}, Cd.prototype.toString = function() {
	return this.value + "";
}, Cd.prototype.toJSON = function() {
	return this.value;
}, Cd.prototype.peek = function() {
	var e = H;
	H = void 0;
	try {
		return this.value;
	} finally {
		H = e;
	}
}, Object.defineProperty(Cd.prototype, "value", {
	get: function() {
		var e = Sd(this);
		return e !== void 0 && (e.i = this.i), this.v;
	},
	set: function(e) {
		if (e !== this.v) {
			if (_d > 100) throw Error("Cycle detected");
			(function(e) {
				gd !== 0 && _d === 0 && e.l !== yd && (e.l = yd, bd = {
					S: e,
					v: e.v,
					i: e.i,
					o: bd
				});
			})(this), this.v = e, this.i++, xd++, gd++;
			try {
				for (var t = this.t; t !== void 0; t = t.x) t.t.N();
			} finally {
				pd();
			}
		}
	}
});
function wd(e, t) {
	return new Cd(e, t);
}
function Td(e) {
	for (var t = e.s; t !== void 0; t = t.n) if (t.S.i !== t.i || !t.S.h() || t.S.i !== t.i) return !0;
	return !1;
}
function Ed(e) {
	for (var t = e.s; t !== void 0; t = t.n) {
		var n = t.S.n;
		if (n !== void 0 && (t.r = n), t.S.n = t, t.i = -1, t.n === void 0) {
			e.s = t;
			break;
		}
	}
}
function Dd(e) {
	for (var t = e.s, n = void 0; t !== void 0;) {
		var r = t.p;
		t.i === -1 ? (t.S.U(t), r !== void 0 && (r.n = t.n), t.n !== void 0 && (t.n.p = r)) : n = t, t.S.n = t.r, t.r !== void 0 && (t.r = void 0), t = r;
	}
	e.s = n;
}
function Od(e, t) {
	Cd.call(this, void 0), this.x = e, this.s = void 0, this.g = xd - 1, this.f = 4, this.W = t?.watched, this.Z = t?.unwatched, this.name = t?.name;
}
Od.prototype = new Cd(), Od.prototype.h = function() {
	if (this.f &= -3, 1 & this.f) return !1;
	if ((36 & this.f) == 32 || (this.f &= -5, this.g === xd)) return !0;
	if (this.g = xd, this.f |= 1, this.i > 0 && !Td(this)) return this.f &= -2, !0;
	var e = H;
	try {
		Ed(this), H = this;
		var t = this.x();
		(16 & this.f || this.v !== t || this.i === 0) && (this.v = t, this.f &= -17, this.i++);
	} catch (e) {
		this.v = e, this.f |= 16, this.i++;
	}
	return H = e, Dd(this), this.f &= -2, !0;
}, Od.prototype.S = function(e) {
	if (this.t === void 0) {
		this.f |= 36;
		for (var t = this.s; t !== void 0; t = t.n) t.S.S(t);
	}
	Cd.prototype.S.call(this, e);
}, Od.prototype.U = function(e) {
	if (this.t !== void 0 && (Cd.prototype.U.call(this, e), this.t === void 0)) {
		this.f &= -33;
		for (var t = this.s; t !== void 0; t = t.n) t.S.U(t);
	}
}, Od.prototype.N = function() {
	if (!(2 & this.f)) {
		this.f |= 6;
		for (var e = this.t; e !== void 0; e = e.x) e.t.N();
	}
}, Object.defineProperty(Od.prototype, "value", { get: function() {
	if (1 & this.f) throw Error("Cycle detected");
	var e = Sd(this);
	if (this.h(), e !== void 0 && (e.i = this.i), 16 & this.f) throw this.v;
	return this.v;
} });
function kd(e, t) {
	return new Od(e, t);
}
function Ad(e) {
	var t = e.m;
	if (e.m = void 0, typeof t == "function") {
		gd++;
		var n = H;
		H = void 0;
		try {
			t();
		} catch (t) {
			throw e.f &= -2, e.f |= 8, jd(e), t;
		} finally {
			H = n, pd();
		}
	}
}
function jd(e) {
	for (var t = e.s; t !== void 0; t = t.n) t.S.U(t);
	e.x = void 0, e.s = void 0, Ad(e);
}
function Md(e) {
	if (H !== this) throw Error("Out-of-order effect");
	Dd(this), H = e, this.f &= -2, 8 & this.f && jd(this), pd();
}
function Nd(e, t) {
	this.x = e, this.m = void 0, this.s = void 0, this.u = void 0, this.f = 32, this.name = t?.name, md && md.push(this);
}
Nd.prototype.c = function() {
	var e = this.S();
	try {
		if (8 & this.f || this.x === void 0) return;
		var t = this.x();
		typeof t == "function" && (this.m = t);
	} finally {
		e();
	}
}, Nd.prototype.S = function() {
	if (1 & this.f) throw Error("Cycle detected");
	this.f |= 1, this.f &= -9, Ad(this), Ed(this), gd++;
	var e = H;
	return H = this, Md.bind(this, e);
}, Nd.prototype.N = function() {
	2 & this.f || (this.f |= 2, this.u = hd, hd = this);
}, Nd.prototype.d = function() {
	this.f |= 8, 1 & this.f || jd(this);
}, Nd.prototype.dispose = function() {
	this.d();
};
function Pd(e, t) {
	var n = new Nd(e, t);
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
var Fd = Object.create, Id = Object.defineProperty, Ld = Object.defineProperties, Rd = Object.getOwnPropertyDescriptor, zd = Object.getOwnPropertyDescriptors, Bd = Object.getOwnPropertySymbols, Vd = Object.prototype.hasOwnProperty, Hd = Object.prototype.propertyIsEnumerable, Ud = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e), Wd = (e) => {
	throw TypeError(e);
}, Gd = (e, t, n) => t in e ? Id(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, Kd = (e, t) => {
	for (var n in t ||= {}) Vd.call(t, n) && Gd(e, n, t[n]);
	if (Bd) for (var n of Bd(t)) Hd.call(t, n) && Gd(e, n, t[n]);
	return e;
}, qd = (e, t) => Ld(e, zd(t)), Jd = (e, t) => Id(e, "name", {
	value: t,
	configurable: !0
}), Yd = (e) => [
	,
	,
	,
	Fd(e?.[Ud("metadata")] ?? null)
], Xd = [
	"class",
	"method",
	"getter",
	"setter",
	"accessor",
	"field",
	"value",
	"get",
	"set"
], Zd = (e) => e !== void 0 && typeof e != "function" ? Wd("Function expected") : e, Qd = (e, t, n, r, i) => ({
	kind: Xd[e],
	name: t,
	metadata: r,
	addInitializer: (e) => n._ ? Wd("Already initialized") : i.push(Zd(e || null))
}), $d = (e, t) => Gd(t, Ud("metadata"), e[3]), ef = (e, t, n, r) => {
	for (var i = 0, a = e[t >> 1], o = a && a.length; i < o; i++) t & 1 ? a[i].call(n) : r = a[i].call(n, r);
	return r;
}, tf = (e, t, n, r, i, a) => {
	var o, s, c, l, u, d = t & 7, f = !!(t & 8), p = !!(t & 16), m = d > 3 ? e.length + 1 : d ? f ? 1 : 2 : 0, h = Xd[d + 5], g = d > 3 && (e[m - 1] = []), _ = e[m] || (e[m] = []), v = d && (!p && !f && (i = i.prototype), d < 5 && (d > 3 || !p) && Rd(d < 4 ? i : {
		get [n]() {
			return af(this, a);
		},
		set [n](e) {
			return sf(this, a, e);
		}
	}, n));
	d ? p && d < 4 && Jd(a, (d > 2 ? "set " : d > 1 ? "get " : "") + n) : Jd(i, n);
	for (var y = r.length - 1; y >= 0; y--) l = Qd(d, n, c = {}, e[3], _), d && (l.static = f, l.private = p, u = l.access = { has: p ? (e) => rf(i, e) : (e) => n in e }, d ^ 3 && (u.get = p ? (e) => (d ^ 1 ? af : cf)(e, i, d ^ 4 ? a : v.get) : (e) => e[n]), d > 2 && (u.set = p ? (e, t) => sf(e, i, t, d ^ 4 ? a : v.set) : (e, t) => e[n] = t)), s = (0, r[y])(d ? d < 4 ? p ? a : v[h] : d > 4 ? void 0 : {
		get: v.get,
		set: v.set
	} : i, l), c._ = 1, d ^ 4 || s === void 0 ? Zd(s) && (d > 4 ? g.unshift(s) : d ? p ? a = s : v[h] = s : i = s) : typeof s != "object" || !s ? Wd("Object expected") : (Zd(o = s.get) && (v.get = o), Zd(o = s.set) && (v.set = o), Zd(o = s.init) && g.unshift(o));
	return d || $d(e, i), v && Id(i, n, v), p ? d ^ 4 ? a : v : i;
}, nf = (e, t, n) => t.has(e) || Wd("Cannot " + n), rf = (e, t) => Object(t) === t ? e.has(t) : Wd("Cannot use the \"in\" operator on this value"), af = (e, t, n) => (nf(e, t, "read from private field"), n ? n.call(e) : t.get(e)), of = (e, t, n) => t.has(e) ? Wd("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), sf = (e, t, n, r) => (nf(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), cf = (e, t, n) => (nf(e, t, "access private method"), n);
function lf(e, t) {
	if (t) {
		let n;
		return kd(() => {
			let r = e();
			return r && n && t(n, r) ? n : (n = r, r);
		});
	}
	return kd(e);
}
function uf(e, t) {
	if (Object.is(e, t)) return !0;
	if (e === null || t === null) return !1;
	if (typeof e == "function" && typeof t == "function") return e === t;
	if (e instanceof Set && t instanceof Set) {
		if (e.size !== t.size) return !1;
		for (let n of e) if (!t.has(n)) return !1;
		return !0;
	}
	if (Array.isArray(e)) return !Array.isArray(t) || e.length !== t.length ? !1 : !e.some((e, n) => !uf(e, t[n]));
	if (typeof e == "object" && typeof t == "object") {
		let n = Object.keys(e), r = Object.keys(t);
		return n.length === r.length ? !n.some((n) => !uf(e[n], t[n])) : !1;
	}
	return !1;
}
function W({ get: e }, t) {
	return {
		init(e) {
			return wd(e);
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
function G(e, t) {
	let n = /* @__PURE__ */ new WeakMap();
	return function() {
		let t = n.get(this);
		return t || (t = lf(e.bind(this)), n.set(this, t)), t.value;
	};
}
function df(e = !0) {
	return function(t, n) {
		n.addInitializer(function() {
			let t = n.kind === "field" || n.static ? this : Object.getPrototypeOf(this), r = Object.getOwnPropertyDescriptor(t, n.name);
			r && Object.defineProperty(t, n.name, qd(Kd({}, r), { enumerable: e }));
		});
	};
}
function ff(...e) {
	let t = e.map((e) => Pd(e));
	return () => t.forEach((e) => e());
}
var pf, mf, hf, gf, _f, vf = [W], yf, bf, xf, Sf, Cf, wf, Tf, Ef, Df, Of, kf, Af, jf, Mf;
_f = [W], gf = [W], hf = [df()], mf = [df()], pf = [df()];
var Nf = class {
	constructor(e, t = Object.is) {
		this.defaultValue = e, this.equals = t, ef(yf, 5, this), of(this, wf), of(this, bf, ef(yf, 8, this)), ef(yf, 11, this), of(this, Tf, ef(yf, 12, this)), ef(yf, 15, this), of(this, kf, ef(yf, 16, this)), ef(yf, 19, this), this.reset = this.reset.bind(this), this.reset();
	}
	get current() {
		return af(this, wf, jf);
	}
	get initial() {
		return af(this, wf, Sf);
	}
	get previous() {
		return af(this, wf, Df);
	}
	set current(e) {
		let t = U(() => af(this, wf, jf));
		e && t && this.equals(t, e) || V(() => {
			af(this, wf, Sf) || sf(this, wf, e, Cf), sf(this, wf, t, Of), sf(this, wf, e, Mf);
		});
	}
	reset(e = this.defaultValue) {
		V(() => {
			sf(this, wf, void 0, Of), sf(this, wf, e, Cf), sf(this, wf, e, Mf);
		});
	}
};
yf = Yd(null), bf = /* @__PURE__ */ new WeakMap(), wf = /* @__PURE__ */ new WeakSet(), Tf = /* @__PURE__ */ new WeakMap(), kf = /* @__PURE__ */ new WeakMap(), xf = tf(yf, 20, "#initial", vf, wf, bf), Sf = xf.get, Cf = xf.set, Ef = tf(yf, 20, "#previous", _f, wf, Tf), Df = Ef.get, Of = Ef.set, Af = tf(yf, 20, "#current", gf, wf, kf), jf = Af.get, Mf = Af.set, tf(yf, 2, "current", hf, Nf), tf(yf, 2, "initial", mf, Nf), tf(yf, 2, "previous", pf, Nf), $d(yf, Nf);
function Pf(e) {
	return U(() => {
		let t = {};
		for (let n in e) t[n] = e[n];
		return t;
	});
}
var Ff, If = class {
	constructor() {
		of(this, Ff, /* @__PURE__ */ new WeakMap());
	}
	get(e, t) {
		return e ? af(this, Ff).get(e)?.get(t) : void 0;
	}
	set(e, t, n) {
		if (e) return af(this, Ff).has(e) || af(this, Ff).set(e, /* @__PURE__ */ new Map()), af(this, Ff).get(e)?.set(t, n);
	}
	clear(e) {
		return e ? af(this, Ff).get(e)?.clear() : void 0;
	}
};
Ff = /* @__PURE__ */ new WeakMap();
//#endregion
//#region node_modules/.pnpm/@dnd-kit+geometry@0.3.2/node_modules/@dnd-kit/geometry/dist/index.mjs
var Lf = Object.create, Rf = Object.defineProperty, zf = Object.getOwnPropertyDescriptor, Bf = Object.getOwnPropertySymbols, Vf = Object.prototype.hasOwnProperty, Hf = Object.prototype.propertyIsEnumerable, Uf = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e), Wf = (e) => {
	throw TypeError(e);
}, Gf = Math.pow, Kf = (e, t, n) => t in e ? Rf(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, qf = (e, t) => {
	for (var n in t ||= {}) Vf.call(t, n) && Kf(e, n, t[n]);
	if (Bf) for (var n of Bf(t)) Hf.call(t, n) && Kf(e, n, t[n]);
	return e;
}, Jf = (e, t) => Rf(e, "name", {
	value: t,
	configurable: !0
}), Yf = (e) => [
	,
	,
	,
	Lf(e?.[Uf("metadata")] ?? null)
], Xf = [
	"class",
	"method",
	"getter",
	"setter",
	"accessor",
	"field",
	"value",
	"get",
	"set"
], Zf = (e) => e !== void 0 && typeof e != "function" ? Wf("Function expected") : e, Qf = (e, t, n, r, i) => ({
	kind: Xf[e],
	name: t,
	metadata: r,
	addInitializer: (e) => n._ ? Wf("Already initialized") : i.push(Zf(e || null))
}), $f = (e, t) => Kf(t, Uf("metadata"), e[3]), ep = (e, t, n, r) => {
	for (var i = 0, a = e[t >> 1], o = a && a.length; i < o; i++) t & 1 ? a[i].call(n) : r = a[i].call(n, r);
	return r;
}, tp = (e, t, n, r, i, a) => {
	var o, s, c, l, u, d = t & 7, f = !!(t & 8), p = !!(t & 16), m = d > 3 ? e.length + 1 : d ? f ? 1 : 2 : 0, h = Xf[d + 5], g = d > 3 && (e[m - 1] = []), _ = e[m] || (e[m] = []), v = d && (!p && !f && (i = i.prototype), d < 5 && (d > 3 || !p) && zf(d < 4 ? i : {
		get [n]() {
			return ip(this, a);
		},
		set [n](e) {
			return op(this, a, e);
		}
	}, n));
	d ? p && d < 4 && Jf(a, (d > 2 ? "set " : d > 1 ? "get " : "") + n) : Jf(i, n);
	for (var y = r.length - 1; y >= 0; y--) l = Qf(d, n, c = {}, e[3], _), d && (l.static = f, l.private = p, u = l.access = { has: p ? (e) => rp(i, e) : (e) => n in e }, d ^ 3 && (u.get = p ? (e) => (d ^ 1 ? ip : sp)(e, i, d ^ 4 ? a : v.get) : (e) => e[n]), d > 2 && (u.set = p ? (e, t) => op(e, i, t, d ^ 4 ? a : v.set) : (e, t) => e[n] = t)), s = (0, r[y])(d ? d < 4 ? p ? a : v[h] : d > 4 ? void 0 : {
		get: v.get,
		set: v.set
	} : i, l), c._ = 1, d ^ 4 || s === void 0 ? Zf(s) && (d > 4 ? g.unshift(s) : d ? p ? a = s : v[h] = s : i = s) : typeof s != "object" || !s ? Wf("Object expected") : (Zf(o = s.get) && (v.get = o), Zf(o = s.set) && (v.set = o), Zf(o = s.init) && g.unshift(o));
	return d || $f(e, i), v && Rf(i, n, v), p ? d ^ 4 ? a : v : i;
}, np = (e, t, n) => t.has(e) || Wf("Cannot " + n), rp = (e, t) => Object(t) === t ? e.has(t) : Wf("Cannot use the \"in\" operator on this value"), ip = (e, t, n) => (np(e, t, "read from private field"), n ? n.call(e) : t.get(e)), ap = (e, t, n) => t.has(e) ? Wf("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), op = (e, t, n, r) => (np(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), sp = (e, t, n) => (np(e, t, "access private method"), n), cp = class e {
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
}, lp = class e {
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
		return c.scale = qf({}, s), c;
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
		return new cp((e + n) / 2, (t + r) / 2);
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
		return t instanceof e ? up(this, t) : 0;
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
		return cp.delta({
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
function up(e, t) {
	let n = Math.max(t.top, e.top), r = Math.max(t.left, e.left), i = Math.min(t.left + t.width, e.left + e.width), a = Math.min(t.top + t.height, e.top + e.height), o = i - r, s = a - n;
	return r < i && n < a ? o * s : 0;
}
var dp, fp, pp, mp, hp, gp = class extends (pp = Nf, fp = [G], dp = [G], pp) {
	constructor(e) {
		let t = cp.from(e);
		super(t, (e, t) => cp.equals(e, t)), ep(hp, 5, this), ap(this, mp, 0), this.velocity = {
			x: 0,
			y: 0
		};
	}
	get delta() {
		return cp.delta(this.current, this.initial);
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
		let { current: t } = this, n = cp.from(e), r = {
			x: n.x - t.x,
			y: n.y - t.y
		}, i = Date.now(), a = i - ip(this, mp), o = (e) => Math.round(e / a * 100);
		V(() => {
			op(this, mp, i), this.velocity = {
				x: o(r.x),
				y: o(r.y)
			}, super.current = n;
		});
	}
	reset(e = this.defaultValue) {
		super.reset(cp.from(e)), this.velocity = {
			x: 0,
			y: 0
		};
	}
};
hp = Yf(pp), mp = /* @__PURE__ */ new WeakMap(), tp(hp, 2, "delta", fp, gp), tp(hp, 2, "direction", dp, gp), $f(hp, gp);
function _p({ x: e, y: t }, n) {
	let r = Math.abs(e), i = Math.abs(t);
	return typeof n == "number" ? Math.sqrt(Gf(r, 2) + Gf(i, 2)) > n : "x" in n && "y" in n ? r > n.x && i > n.y : "x" in n ? r > n.x : "y" in n ? i > n.y : !1;
}
var vp = /* @__PURE__ */ ((e) => (e.Horizontal = "x", e.Vertical = "y", e))(vp || {}), yp = Object.values(vp), bp = Object.create, xp = Object.defineProperty, Sp = Object.defineProperties, Cp = Object.getOwnPropertyDescriptor, wp = Object.getOwnPropertyDescriptors, Tp = Object.getOwnPropertySymbols, Ep = Object.prototype.hasOwnProperty, Dp = Object.prototype.propertyIsEnumerable, Op = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e), kp = (e) => {
	throw TypeError(e);
}, Ap = (e, t, n) => t in e ? xp(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, jp = (e, t) => {
	for (var n in t ||= {}) Ep.call(t, n) && Ap(e, n, t[n]);
	if (Tp) for (var n of Tp(t)) Dp.call(t, n) && Ap(e, n, t[n]);
	return e;
}, Mp = (e, t) => Sp(e, wp(t)), Np = (e, t) => xp(e, "name", {
	value: t,
	configurable: !0
}), Pp = (e, t) => {
	var n = {};
	for (var r in e) Ep.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && Tp) for (var r of Tp(e)) t.indexOf(r) < 0 && Dp.call(e, r) && (n[r] = e[r]);
	return n;
}, Fp = (e) => [
	,
	,
	,
	bp(e?.[Op("metadata")] ?? null)
], Ip = [
	"class",
	"method",
	"getter",
	"setter",
	"accessor",
	"field",
	"value",
	"get",
	"set"
], Lp = (e) => e !== void 0 && typeof e != "function" ? kp("Function expected") : e, Rp = (e, t, n, r, i) => ({
	kind: Ip[e],
	name: t,
	metadata: r,
	addInitializer: (e) => n._ ? kp("Already initialized") : i.push(Lp(e || null))
}), zp = (e, t) => Ap(t, Op("metadata"), e[3]), K = (e, t, n, r) => {
	for (var i = 0, a = e[t >> 1], o = a && a.length; i < o; i++) t & 1 ? a[i].call(n) : r = a[i].call(n, r);
	return r;
}, q = (e, t, n, r, i, a) => {
	var o, s, c, l, u, d = t & 7, f = !!(t & 8), p = !!(t & 16), m = d > 3 ? e.length + 1 : d ? f ? 1 : 2 : 0, h = Ip[d + 5], g = d > 3 && (e[m - 1] = []), _ = e[m] || (e[m] = []), v = d && (!p && !f && (i = i.prototype), d < 5 && (d > 3 || !p) && Cp(d < 4 ? i : {
		get [n]() {
			return Hp(this, a);
		},
		set [n](e) {
			return Up(this, a, e);
		}
	}, n));
	d ? p && d < 4 && Np(a, (d > 2 ? "set " : d > 1 ? "get " : "") + n) : Np(i, n);
	for (var y = r.length - 1; y >= 0; y--) l = Rp(d, n, c = {}, e[3], _), d && (l.static = f, l.private = p, u = l.access = { has: p ? (e) => Vp(i, e) : (e) => n in e }, d ^ 3 && (u.get = p ? (e) => (d ^ 1 ? Hp : Wp)(e, i, d ^ 4 ? a : v.get) : (e) => e[n]), d > 2 && (u.set = p ? (e, t) => Up(e, i, t, d ^ 4 ? a : v.set) : (e, t) => e[n] = t)), s = (0, r[y])(d ? d < 4 ? p ? a : v[h] : d > 4 ? void 0 : {
		get: v.get,
		set: v.set
	} : i, l), c._ = 1, d ^ 4 || s === void 0 ? Lp(s) && (d > 4 ? g.unshift(s) : d ? p ? a = s : v[h] = s : i = s) : typeof s != "object" || !s ? kp("Object expected") : (Lp(o = s.get) && (v.get = o), Lp(o = s.set) && (v.set = o), Lp(o = s.init) && g.unshift(o));
	return d || zp(e, i), v && xp(i, n, v), p ? d ^ 4 ? a : v : i;
}, Bp = (e, t, n) => t.has(e) || kp("Cannot " + n), Vp = (e, t) => Object(t) === t ? e.has(t) : kp("Cannot use the \"in\" operator on this value"), Hp = (e, t, n) => (Bp(e, t, "read from private field"), n ? n.call(e) : t.get(e)), J = (e, t, n) => t.has(e) ? kp("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), Up = (e, t, n, r) => (Bp(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), Wp = (e, t, n) => (Bp(e, t, "access private method"), n);
function Gp(e, t) {
	return {
		plugin: e,
		options: t
	};
}
function Kp(e) {
	return (t) => Gp(e, t);
}
function qp(e) {
	return typeof e == "function" ? {
		plugin: e,
		options: void 0
	} : e;
}
var Jp = [W], Yp, Xp, Zp, Qp = class {
	constructor(e, t) {
		this.manager = e, this.options = t, J(this, Xp, K(Yp, 8, this, !1)), K(Yp, 11, this), J(this, Zp, /* @__PURE__ */ new Set());
	}
	enable() {
		this.disabled = !1;
	}
	disable() {
		this.disabled = !0;
	}
	isDisabled() {
		return U(() => this.disabled);
	}
	configure(e) {
		this.options = e;
	}
	registerEffect(e) {
		let t = Pd(e.bind(this));
		return Hp(this, Zp).add(t), t;
	}
	destroy() {
		Hp(this, Zp).forEach((e) => e());
	}
	static configure(e) {
		return Gp(this, e);
	}
};
Yp = Fp(null), Xp = /* @__PURE__ */ new WeakMap(), Zp = /* @__PURE__ */ new WeakMap(), q(Yp, 4, "disabled", Jp, Qp, Xp), zp(Yp, Qp);
var $p = class extends Qp {}, em, tm = class {
	constructor(e) {
		this.manager = e, this.instances = /* @__PURE__ */ new Map(), J(this, em, []);
	}
	get values() {
		return Array.from(this.instances.values());
	}
	set values(e) {
		let t = e.map(qp).reduceRight((e, t) => e.some(({ plugin: e }) => e === t.plugin) ? e : [t, ...e], []), n = t.map(({ plugin: e }) => e);
		for (let e of Hp(this, em)) if (!n.includes(e)) {
			if (e.prototype instanceof $p) continue;
			this.unregister(e);
		}
		for (let { plugin: e, options: n } of t) this.register(e, n);
		Up(this, em, n);
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
em = /* @__PURE__ */ new WeakMap();
function nm(e, t) {
	return e.priority === t.priority ? e.type === t.type ? t.value - e.value : t.type - e.type : t.priority - e.priority;
}
var rm = [], im, am, om = class extends Qp {
	constructor(e) {
		super(e), J(this, im), J(this, am), this.computeCollisions = this.computeCollisions.bind(this), Up(this, am, wd(rm)), this.destroy = ff(() => {
			let e = this.computeCollisions(), t = U(() => this.manager.dragOperation.position.current);
			if (e !== rm) {
				let e = Hp(this, im);
				if (Up(this, im, t), e && t.x == e.x && t.y == e.y) return;
			} else Up(this, im, void 0);
			Hp(this, am).value = e;
		}, () => {
			let { dragOperation: e } = this.manager;
			e.status.initialized && this.forceUpdate();
		});
	}
	forceUpdate(e = !0) {
		U(() => {
			e ? Hp(this, am).value = this.computeCollisions() : Up(this, im, void 0);
		});
	}
	computeCollisions(e, t) {
		let { registry: n, dragOperation: r } = this.manager, { source: i, shape: a, status: o } = r;
		if (!o.initialized || !a) return rm;
		let s = [], c = [];
		for (let a of e ?? n.droppables) {
			if (a.disabled || i && !a.accepts(i)) continue;
			let e = t ?? a.collisionDetector;
			if (!e) continue;
			c.push(a), a.shape;
			let n = U(() => e({
				droppable: a,
				dragOperation: r
			}));
			n && (a.collisionPriority != null && (n.priority = a.collisionPriority), s.push(n));
		}
		return c.length === 0 ? rm : (s.sort(nm), s);
	}
	get collisions() {
		return Hp(this, am).value;
	}
};
im = /* @__PURE__ */ new WeakMap(), am = /* @__PURE__ */ new WeakMap();
var sm = class {
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
}, cm = class extends sm {
	constructor(e) {
		super(), this.manager = e;
	}
	dispatch(e, t) {
		let n = [t, this.manager];
		super.dispatch(e, ...n);
	}
};
function lm(e, t = !0) {
	let n = !1;
	return Mp(jp({}, e), {
		cancelable: t,
		get defaultPrevented() {
			return n;
		},
		preventDefault() {
			t && (n = !0);
		}
	});
}
var um = class extends $p {
	constructor(e) {
		super(e);
		let t = (e, t) => e.map(({ id: e }) => e).join("") === t.map(({ id: e }) => e).join(""), n = [];
		this.destroy = ff(() => {
			let { dragOperation: t, collisionObserver: r } = e;
			t.status.initializing && (n = [], r.enable());
		}, () => {
			let { collisionObserver: r, monitor: i } = e, { collisions: a } = r;
			if (r.isDisabled()) return;
			let o = lm({ collisions: a });
			if (i.dispatch("collision", o), o.defaultPrevented || t(a, n)) return;
			n = a;
			let [s] = a;
			U(() => {
				s?.id !== e.dragOperation.target?.id && (r.disable(), e.actions.setDropTarget(s?.id).then(() => {
					r.enable();
				}));
			});
		});
	}
}, dm = /* @__PURE__ */ ((e) => (e[e.Lowest = 0] = "Lowest", e[e.Low = 1] = "Low", e[e.Normal = 2] = "Normal", e[e.High = 3] = "High", e[e.Highest = 4] = "Highest", e))(dm || {}), fm = /* @__PURE__ */ ((e) => (e[e.Collision = 0] = "Collision", e[e.ShapeIntersection = 1] = "ShapeIntersection", e[e.PointerIntersection = 2] = "PointerIntersection", e))(fm || {}), pm, mm, hm, gm, _m, vm, ym = [W], bm, xm;
vm = [G], _m = [G], gm = [G], hm = [G], mm = [G], pm = [G];
var Sm = class {
	constructor() {
		K(bm, 5, this), J(this, xm, K(bm, 8, this, "idle")), K(bm, 11, this);
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
bm = Fp(null), xm = /* @__PURE__ */ new WeakMap(), q(bm, 4, "value", ym, Sm, xm), q(bm, 2, "current", vm, Sm), q(bm, 2, "idle", _m, Sm), q(bm, 2, "initializing", gm, Sm), q(bm, 2, "initialized", hm, Sm), q(bm, 2, "dragging", mm, Sm), q(bm, 2, "dropped", pm, Sm), zp(bm, Sm);
var Cm = class {
	constructor(e) {
		this.manager = e;
	}
	setDragSource(e) {
		let { dragOperation: t } = this.manager;
		t.sourceIdentifier = typeof e == "string" || typeof e == "number" ? e : e.id;
	}
	setDropTarget(e) {
		return U(() => {
			let { dragOperation: t } = this.manager, n = e ?? null;
			if (t.targetIdentifier === n) return Promise.resolve(!1);
			t.targetIdentifier = n;
			let r = lm({ operation: t.snapshot() });
			return t.status.dragging && this.manager.monitor.dispatch("dragover", r), this.manager.renderer.rendering.then(() => r.defaultPrevented);
		});
	}
	start(e) {
		return U(() => {
			let { dragOperation: t } = this.manager;
			if (e.source != null && this.setDragSource(e.source), !t.source) throw Error("Cannot start a drag operation without a drag source");
			if (!t.status.idle) throw Error("Cannot start a drag operation while another is active");
			let n = new AbortController(), { event: r, coordinates: i } = e;
			V(() => {
				t.status.set("initialization-pending"), t.shape = null, t.canceled = !1, t.activatorEvent = r ?? null, t.position.reset(i);
			});
			let a = lm({ operation: t.snapshot() });
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
		return U(() => {
			let { dragOperation: t } = this.manager, { status: n, controller: r } = t;
			if (!n.dragging || !r || r.signal.aborted) return;
			let i = lm({
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
		return U(() => {
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
					let e = U(() => t.source?.status === "dropping"), r = () => {
						t.controller === n && (t.controller = void 0), t.reset();
					};
					if (e) {
						let { source: e } = t, n = Pd(() => {
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
}, wm, Tm, Em, Dm = [W], Om, km, Am, jm, Mm;
Em = [W], Tm = [W], wm = [W];
var Nm = class {
	constructor(e, t) {
		J(this, km, K(Om, 8, this)), K(Om, 11, this), J(this, Am, K(Om, 12, this)), K(Om, 15, this), J(this, jm, K(Om, 16, this)), K(Om, 19, this), J(this, Mm, K(Om, 20, this)), K(Om, 23, this);
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
Om = Fp(null), km = /* @__PURE__ */ new WeakMap(), Am = /* @__PURE__ */ new WeakMap(), jm = /* @__PURE__ */ new WeakMap(), Mm = /* @__PURE__ */ new WeakMap(), q(Om, 4, "manager", Dm, Nm, km), q(Om, 4, "id", Em, Nm, Am), q(Om, 4, "data", Tm, Nm, jm), q(Om, 4, "disabled", wm, Nm, Mm), zp(Om, Nm);
var Pm = class {
	constructor() {
		this.map = wd(/* @__PURE__ */ new Map()), this.cleanupFunctions = /* @__PURE__ */ new WeakMap(), this.register = (e, t) => {
			let n = this.map.peek(), r = n.get(e), i = () => this.unregister(e, t);
			if (r === t) return i;
			r && (this.cleanupFunctions.get(r)?.(), this.cleanupFunctions.delete(r));
			let a = new Map(n);
			a.set(e, t), this.map.value = a;
			let o = ff(...t.effects());
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
}, Fm, Im, Lm, Rm, zm, Bm, Vm, Hm, Um, Wm, Gm, Km = class extends (Vm = Nm, Bm = [W], zm = [W], Rm = [W], Lm = [G], Im = [G], Fm = [G], Vm) {
	constructor(e, t) {
		var n = e, { modifiers: r, type: i, sensors: a } = n, o = Pp(n, [
			"modifiers",
			"type",
			"sensors"
		]);
		super(o, t), K(Hm, 5, this), J(this, Um, K(Hm, 8, this)), K(Hm, 11, this), J(this, Wm, K(Hm, 12, this)), K(Hm, 15, this), J(this, Gm, K(Hm, 16, this, this.isDragSource ? "dragging" : "idle")), K(Hm, 19, this), this.type = i, this.sensors = a, this.modifiers = r, this.alignment = o.alignment;
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
Hm = Fp(Vm), Um = /* @__PURE__ */ new WeakMap(), Wm = /* @__PURE__ */ new WeakMap(), Gm = /* @__PURE__ */ new WeakMap(), q(Hm, 4, "type", Bm, Km, Um), q(Hm, 4, "modifiers", zm, Km, Wm), q(Hm, 4, "status", Rm, Km, Gm), q(Hm, 2, "isDropping", Lm, Km), q(Hm, 2, "isDragging", Im, Km), q(Hm, 2, "isDragSource", Fm, Km), zp(Hm, Km);
var qm, Jm, Ym, Xm, Zm, Qm, $m, eh, th, nh, rh, ih, ah, oh = class extends ($m = Nm, Qm = [W], Zm = [W], Xm = [W], Ym = [W], Jm = [W], qm = [G], $m) {
	constructor(e, t) {
		var n = e, { accept: r, collisionDetector: i, collisionPriority: a, type: o } = n, s = Pp(n, [
			"accept",
			"collisionDetector",
			"collisionPriority",
			"type"
		]);
		super(s, t), K(eh, 5, this), J(this, th, K(eh, 8, this)), K(eh, 11, this), J(this, nh, K(eh, 12, this)), K(eh, 15, this), J(this, rh, K(eh, 16, this)), K(eh, 19, this), J(this, ih, K(eh, 20, this)), K(eh, 23, this), J(this, ah, K(eh, 24, this)), K(eh, 27, this), this.accept = r, this.collisionDetector = i, this.collisionPriority = a, this.type = o;
	}
	accepts(e) {
		let { accept: t } = this;
		return t ? typeof t == "function" ? t(e) : e.type ? Array.isArray(t) ? t.includes(e.type) : e.type === t : !1 : !0;
	}
	get isDropTarget() {
		return this.manager?.dragOperation.target?.id === this.id;
	}
};
eh = Fp($m), th = /* @__PURE__ */ new WeakMap(), nh = /* @__PURE__ */ new WeakMap(), rh = /* @__PURE__ */ new WeakMap(), ih = /* @__PURE__ */ new WeakMap(), ah = /* @__PURE__ */ new WeakMap(), q(eh, 4, "accept", Qm, oh, th), q(eh, 4, "type", Zm, oh, nh), q(eh, 4, "collisionDetector", Xm, oh, rh), q(eh, 4, "collisionPriority", Ym, oh, ih), q(eh, 4, "shape", Jm, oh, ah), q(eh, 2, "isDropTarget", qm, oh), zp(eh, oh);
var sh = class extends Qp {
	constructor(e, t) {
		super(e, t), this.manager = e, this.options = t;
	}
}, ch = class extends AbortController {
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
}, lh, uh = class {
	constructor(e) {
		this.options = e, J(this, lh);
	}
	set controller(e) {
		Up(this, lh, e), e.signal.addEventListener("abort", () => this.abort());
	}
	activate(e) {
		var t;
		(t = Hp(this, lh)) == null || t.activate(e);
	}
};
lh = /* @__PURE__ */ new WeakMap();
var dh = class extends Qp {
	constructor(e, t) {
		super(e, t), this.manager = e, this.options = t;
	}
	apply(e) {
		return e.transform;
	}
}, fh = class {
	constructor(e) {
		this.draggables = new Pm(), this.droppables = new Pm(), this.plugins = new tm(e), this.sensors = new tm(e), this.modifiers = new tm(e);
	}
	register(e, t) {
		if (e instanceof Km) return this.draggables.register(e.id, e);
		if (e instanceof oh) return this.droppables.register(e.id, e);
		if (e.prototype instanceof dh) return this.modifiers.register(e, t);
		if (e.prototype instanceof sh) return this.sensors.register(e, t);
		if (e.prototype instanceof Qp) return this.plugins.register(e, t);
		throw Error("Invalid instance type");
	}
	unregister(e) {
		if (e instanceof Nm) return e instanceof Km ? this.draggables.unregister(e.id, e) : e instanceof oh ? this.droppables.unregister(e.id, e) : () => {};
		if (e.prototype instanceof dh) return this.modifiers.unregister(e);
		if (e.prototype instanceof sh) return this.sensors.unregister(e);
		if (e.prototype instanceof Qp) return this.plugins.unregister(e);
		throw Error("Invalid instance type");
	}
	destroy() {
		this.draggables.destroy(), this.droppables.destroy(), this.plugins.destroy(), this.sensors.destroy(), this.modifiers.destroy();
	}
}, ph, mh, hh, gh, _h, vh, yh, bh, xh = [G], Sh, Ch, wh, Y, Th, Eh, Dh, Oh, kh, Ah;
bh = [W], yh = [W], vh = [W], _h = [W], gh = [W], hh = [G], mh = [G], ph = [G];
var jh = class {
	constructor(e) {
		K(Y, 5, this), J(this, Sh), J(this, Ch), J(this, wh, new Nf(void 0, (e, t) => e && t ? e.equals(t) : e === t)), this.status = new Sm(), J(this, Th, K(Y, 8, this, !1)), K(Y, 11, this), J(this, Eh, K(Y, 12, this, null)), K(Y, 15, this), J(this, Dh, K(Y, 16, this, null)), K(Y, 19, this), J(this, Oh, K(Y, 20, this, null)), K(Y, 23, this), J(this, kh, K(Y, 24, this, [])), K(Y, 27, this), this.position = new gp({
			x: 0,
			y: 0
		}), J(this, Ah, {
			x: 0,
			y: 0
		}), Up(this, Sh, e);
	}
	get shape() {
		let { current: e, initial: t, previous: n } = Hp(this, wh);
		return !e || !t ? null : {
			current: e,
			initial: t,
			previous: n
		};
	}
	set shape(e) {
		e ? Hp(this, wh).current = e : Hp(this, wh).reset();
	}
	get source() {
		let e = this.sourceIdentifier;
		if (e == null) return null;
		let t = Hp(this, Sh).registry.draggables.get(e);
		return t && Up(this, Ch, t), t ?? Hp(this, Ch) ?? null;
	}
	get target() {
		let e = this.targetIdentifier;
		return e == null ? null : Hp(this, Sh).registry.droppables.get(e) ?? null;
	}
	get transform() {
		let { x: e, y: t } = this.position.delta, n = {
			x: e,
			y: t
		};
		for (let e of this.modifiers) n = e.apply(Mp(jp({}, this.snapshot()), { transform: n }));
		return Up(this, Ah, n), n;
	}
	snapshot() {
		return U(() => ({
			source: this.source,
			target: this.target,
			activatorEvent: this.activatorEvent,
			transform: Hp(this, Ah),
			shape: this.shape ? Pf(this.shape) : null,
			position: Pf(this.position),
			status: Pf(this.status),
			canceled: this.canceled
		}));
	}
	reset() {
		V(() => {
			this.status.set("idle"), this.sourceIdentifier = null, this.targetIdentifier = null, Hp(this, wh).reset(), this.position.reset({
				x: 0,
				y: 0
			}), Up(this, Ah, {
				x: 0,
				y: 0
			}), this.modifiers = [];
		});
	}
};
Y = Fp(null), Sh = /* @__PURE__ */ new WeakMap(), Ch = /* @__PURE__ */ new WeakMap(), wh = /* @__PURE__ */ new WeakMap(), Th = /* @__PURE__ */ new WeakMap(), Eh = /* @__PURE__ */ new WeakMap(), Dh = /* @__PURE__ */ new WeakMap(), Oh = /* @__PURE__ */ new WeakMap(), kh = /* @__PURE__ */ new WeakMap(), Ah = /* @__PURE__ */ new WeakMap(), q(Y, 2, "shape", xh, jh), q(Y, 4, "canceled", bh, jh, Th), q(Y, 4, "activatorEvent", yh, jh, Eh), q(Y, 4, "sourceIdentifier", vh, jh, Dh), q(Y, 4, "targetIdentifier", _h, jh, Oh), q(Y, 4, "modifiers", gh, jh, kh), q(Y, 2, "source", hh, jh), q(Y, 2, "target", mh, jh), q(Y, 2, "transform", ph, jh), zp(Y, jh);
var Mh = { get rendering() {
	return Promise.resolve();
} };
function Nh(e, t) {
	return typeof e == "function" ? e(t) : e ?? t;
}
var Ph = class {
	constructor(e) {
		this.destroy = () => {
			this.dragOperation.status.idle || this.actions.stop({ canceled: !0 }), this.dragOperation.modifiers.forEach((e) => e.destroy()), this.registry.destroy(), this.collisionObserver.destroy();
		};
		let t = e ?? {}, n = Nh(t.plugins, []), r = Nh(t.sensors, []), i = Nh(t.modifiers, []), a = t.renderer ?? Mh, o = new cm(this);
		this.registry = new fh(this), this.monitor = o, this.renderer = a, this.actions = new Cm(this), this.dragOperation = new jh(this), this.collisionObserver = new om(this), this.plugins = [um, ...n], this.modifiers = i, this.sensors = r;
		let { destroy: s } = this, c = ff(() => {
			let e = U(() => this.dragOperation.modifiers), t = this.modifiers;
			for (let n of e) t.includes(n) || n.destroy();
			this.dragOperation.modifiers = (this.dragOperation.source?.modifiers)?.map((e) => {
				let { plugin: t, options: n } = qp(e);
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
}, Fh = (e) => {
	throw TypeError(e);
}, Ih = (e, t, n) => t.has(e) || Fh("Cannot " + n), X = (e, t, n) => (Ih(e, t, "read from private field"), t.get(e)), Lh = (e, t, n) => t.has(e) ? Fh("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), Rh = (e, t, n, r) => (Ih(e, t, "write to private field"), t.set(e, n), n), zh = (e, t, n) => (Ih(e, t, "access private method"), n);
function Bh(e) {
	return e ? e instanceof KeyframeEffect ? !0 : "getKeyframes" in e && typeof e.getKeyframes == "function" : !1;
}
function Vh(e, t) {
	let n = e.getAnimations();
	if (n.length > 0) for (let e of n) {
		if (e.playState !== "running") continue;
		let { effect: n } = e, r = (Bh(n) ? n.getKeyframes() : []).filter(t);
		if (r.length > 0) return [r[r.length - 1], e];
	}
	return null;
}
function Hh(e) {
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
function Uh(e) {
	let t = Object.prototype.toString.call(e);
	return t === "[object Window]" || t === "[object global]";
}
function Wh(e) {
	return "nodeType" in e;
}
function Gh(e) {
	return e ? Uh(e) ? e : Wh(e) ? "defaultView" in e ? e.defaultView ?? window : e.ownerDocument?.defaultView ?? window : window : window;
}
function Kh(e) {
	let { Document: t } = Gh(e);
	return e instanceof t || "nodeType" in e && e.nodeType === Node.DOCUMENT_NODE;
}
function qh(e) {
	return !e || Uh(e) ? !1 : e instanceof Gh(e).HTMLElement || "namespaceURI" in e && typeof e.namespaceURI == "string" && e.namespaceURI.endsWith("html");
}
function Jh(e) {
	return e instanceof Gh(e).SVGElement || "namespaceURI" in e && typeof e.namespaceURI == "string" && e.namespaceURI.endsWith("svg");
}
function Yh(e) {
	return e ? Uh(e) ? e.document : Wh(e) ? Kh(e) ? e : qh(e) || Jh(e) ? e.ownerDocument : document : document : document;
}
function Xh(e) {
	let { documentElement: t } = Yh(e), n = Gh(e).visualViewport, r = n?.width ?? t.clientWidth, i = n?.height ?? t.clientHeight, a = n?.offsetTop ?? 0, o = n?.offsetLeft ?? 0;
	return {
		top: a,
		left: o,
		right: o + r,
		bottom: a + i,
		width: r,
		height: i
	};
}
function Zh(e, t) {
	if (Qh(e) && e.open === !1) return !1;
	let { overflow: n, overflowX: r, overflowY: i } = getComputedStyle(e);
	return n === "visible" && r === "visible" && i === "visible";
}
function Qh(e) {
	return e.tagName === "DETAILS";
}
function $h(e, t = e.getBoundingClientRect(), n = 0) {
	let r = t, { ownerDocument: i } = e, a = i.defaultView ?? window, o = e.parentElement;
	for (; o && o !== i.documentElement;) {
		if (!Zh(o)) {
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
function eg(e) {
	return {
		x: e.clientX,
		y: e.clientY
	};
}
var tg = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0;
function ng(e = document, t = /* @__PURE__ */ new Set()) {
	if (t.has(e)) return [];
	t.add(e);
	let n = [e];
	for (let r of Array.from(e.querySelectorAll("iframe, frame"))) try {
		let e = r.contentDocument;
		e && !t.has(e) && n.push(...ng(e, t));
	} catch {}
	try {
		let r = e.defaultView;
		if (r && r !== window.top) {
			let i = r.parent;
			i && i.document && i.document !== e && n.push(...ng(i.document, t));
		}
	} catch {}
	return n;
}
function rg() {
	return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}
function ig() {
	let e = rg() ? window.visualViewport : null;
	return {
		x: e?.offsetLeft ?? 0,
		y: e?.offsetTop ?? 0
	};
}
function ag(e) {
	return !e || !Wh(e) ? !1 : e instanceof Gh(e).ShadowRoot;
}
function og(e) {
	if (e && Wh(e)) {
		let t = e.getRootNode();
		if (ag(t) || t instanceof Document) return t;
	}
	return Yh(e);
}
function sg(e) {
	return e.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function cg(e) {
	let t = "input, textarea, select, canvas, [contenteditable]", n = e.cloneNode(!0), r = Array.from(e.querySelectorAll(t));
	return Array.from(n.querySelectorAll(t)).forEach((e, t) => {
		let n = r[t];
		lg(e) && lg(n) && (e.type !== "file" && (e.value = n.value), e.type === "radio" && e.name && (e.name = `Cloned__${e.name}`)), ug(e) && ug(n) && n.width > 0 && n.height > 0 && e.getContext("2d")?.drawImage(n, 0, 0);
	}), n;
}
function lg(e) {
	return "value" in e;
}
function ug(e) {
	return e.tagName === "CANVAS";
}
function dg(e, { x: t, y: n }) {
	let r = e.elementFromPoint(t, n);
	if (fg(r)) {
		let { contentDocument: e } = r;
		if (e) {
			let { left: i, top: a } = r.getBoundingClientRect();
			return dg(e, {
				x: t - i,
				y: n - a
			});
		}
	}
	return r;
}
function fg(e) {
	return e?.tagName === "IFRAME";
}
var pg = /* @__PURE__ */ new WeakMap();
function mg(e) {
	return !!e.closest("\n      input:not([disabled]),\n      select:not([disabled]),\n      textarea:not([disabled]),\n      button:not([disabled]),\n      a[href],\n      [contenteditable]:not([contenteditable=\"false\"])\n    ");
}
var hg = class {
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
function gg(e) {
	let t = e?.ownerDocument.defaultView;
	if (t && t.self !== t.parent) return t.frameElement;
}
function _g(e) {
	let t = /* @__PURE__ */ new Set(), n = gg(e);
	for (; n;) t.add(n), n = gg(n);
	return t;
}
function vg(e, t) {
	let n = setTimeout(e, t);
	return () => clearTimeout(n);
}
function yg(e, t) {
	let n = () => performance.now(), r, i;
	return function(...a) {
		let o = this;
		i ? (r?.(), r = vg(() => {
			e.apply(o, a), i = n();
		}, t - (n() - i))) : (e.apply(o, a), i = n());
	};
}
function bg(e, t) {
	return e === t ? !0 : !e || !t ? !1 : e.top == t.top && e.left == t.left && e.right == t.right && e.bottom == t.bottom;
}
function xg(e, t = e.getBoundingClientRect()) {
	let { width: n, height: r } = $h(e, t);
	return n > 0 && r > 0;
}
var Sg = tg ? ResizeObserver : class {
	observe() {}
	unobserve() {}
	disconnect() {}
}, Cg, wg = class extends Sg {
	constructor(e) {
		super((t) => {
			if (!X(this, Cg)) {
				Rh(this, Cg, !0);
				return;
			}
			e(t, this);
		}), Lh(this, Cg, !1);
	}
};
Cg = /* @__PURE__ */ new WeakMap();
var Tg = Array.from({ length: 100 }, (e, t) => t / 100), Eg = 75, Dg, Og, kg, Ag, jg, Mg, Ng, Pg, Fg, Ig, Lg, Rg = class {
	constructor(e, t, n = {
		debug: !1,
		skipInitial: !1
	}) {
		this.element = e, this.callback = t, Lh(this, Fg), this.disconnect = () => {
			var e, t, n;
			Rh(this, Ng, !0), (e = X(this, kg)) == null || e.disconnect(), (t = X(this, Ag)) == null || t.disconnect(), X(this, jg).disconnect(), (n = X(this, Mg)) == null || n.remove();
		}, Lh(this, Dg, !0), Lh(this, Og), Lh(this, kg), Lh(this, Ag), Lh(this, jg), Lh(this, Mg), Lh(this, Ng, !1), Lh(this, Pg, yg(() => {
			var e;
			let { element: t } = this;
			if ((e = X(this, Ag)) == null || e.disconnect(), X(this, Ng) || !X(this, Dg) || !t.isConnected) return;
			let n = t.ownerDocument ?? document, { innerHeight: r, innerWidth: i } = n.defaultView ?? window, a = t.getBoundingClientRect(), { top: o, left: s, bottom: c, right: l } = $h(t, a), u = -Math.floor(o), d = -Math.floor(s), f = `${u}px ${-Math.floor(i - l)}px ${-Math.floor(r - c)}px ${d}px`;
			this.boundingClientRect = a, Rh(this, Ag, new IntersectionObserver((e) => {
				let [n] = e, { intersectionRect: r } = n;
				(n.intersectionRatio === 1 ? lp.intersectionRatio(r, $h(t)) : n.intersectionRatio) !== 1 && X(this, Pg).call(this);
			}, {
				threshold: Tg,
				rootMargin: f,
				root: n
			})), X(this, Ag).observe(t), zh(this, Fg, Ig).call(this);
		}, Eg)), this.boundingClientRect = e.getBoundingClientRect(), Rh(this, Dg, xg(e, this.boundingClientRect));
		let r = !0;
		this.callback = (e) => {
			r && (r = !1, n.skipInitial) || t(e);
		};
		let i = e.ownerDocument;
		n?.debug && (Rh(this, Mg, document.createElement("div")), X(this, Mg).style.background = "rgba(0,0,0,0.15)", X(this, Mg).style.position = "fixed", X(this, Mg).style.pointerEvents = "none", i.body.appendChild(X(this, Mg))), Rh(this, jg, new IntersectionObserver((t) => {
			var n, r;
			let { boundingClientRect: i, isIntersecting: a } = t[t.length - 1], { width: o, height: s } = i, c = X(this, Dg);
			Rh(this, Dg, a), !(!o && !s) && (c && !a ? ((n = X(this, Ag)) == null || n.disconnect(), this.callback(null), (r = X(this, kg)) == null || r.disconnect(), Rh(this, kg, void 0), X(this, Mg) && (X(this, Mg).style.visibility = "hidden")) : X(this, Pg).call(this), a && !X(this, kg) && (Rh(this, kg, new wg(X(this, Pg))), X(this, kg).observe(e)));
		}, {
			threshold: Tg,
			root: i
		})), X(this, Dg) && !n.skipInitial && this.callback(this.boundingClientRect), X(this, jg).observe(e);
	}
};
Dg = /* @__PURE__ */ new WeakMap(), Og = /* @__PURE__ */ new WeakMap(), kg = /* @__PURE__ */ new WeakMap(), Ag = /* @__PURE__ */ new WeakMap(), jg = /* @__PURE__ */ new WeakMap(), Mg = /* @__PURE__ */ new WeakMap(), Ng = /* @__PURE__ */ new WeakMap(), Pg = /* @__PURE__ */ new WeakMap(), Fg = /* @__PURE__ */ new WeakSet(), Ig = function() {
	X(this, Ng) || (zh(this, Fg, Lg).call(this), !bg(this.boundingClientRect, X(this, Og)) && (this.callback(this.boundingClientRect), Rh(this, Og, this.boundingClientRect)));
}, Lg = function() {
	if (X(this, Mg)) {
		let { top: e, left: t, width: n, height: r } = $h(this.element);
		X(this, Mg).style.overflow = "hidden", X(this, Mg).style.visibility = "visible", X(this, Mg).style.top = `${Math.floor(e)}px`, X(this, Mg).style.left = `${Math.floor(t)}px`, X(this, Mg).style.width = `${Math.floor(n)}px`, X(this, Mg).style.height = `${Math.floor(r)}px`;
	}
};
var zg = /* @__PURE__ */ new WeakMap(), Bg = /* @__PURE__ */ new WeakMap();
function Vg(e, t) {
	let n = zg.get(e);
	return n ||= {
		disconnect: new Rg(e, (t) => {
			let n = zg.get(e);
			n && n.callbacks.forEach((e) => e(t));
		}, { skipInitial: !0 }).disconnect,
		callbacks: /* @__PURE__ */ new Set()
	}, n.callbacks.add(t), zg.set(e, n), () => {
		n.callbacks.delete(t), n.callbacks.size === 0 && (zg.delete(e), n.disconnect());
	};
}
function Hg(e, t) {
	let n = /* @__PURE__ */ new Set();
	for (let r of e) {
		let e = Vg(r, t);
		n.add(e);
	}
	return () => n.forEach((e) => e());
}
function Ug(e, t) {
	let n = e.ownerDocument;
	if (!Bg.has(n)) {
		let e = new AbortController(), t = /* @__PURE__ */ new Set();
		document.addEventListener("scroll", (e) => t.forEach((t) => t(e)), {
			capture: !0,
			passive: !0,
			signal: e.signal
		}), Bg.set(n, {
			disconnect: () => e.abort(),
			listeners: t
		});
	}
	let { listeners: r, disconnect: i } = Bg.get(n) ?? {};
	return !r || !i ? () => {} : (r.add(t), () => {
		r.delete(t), r.size === 0 && (i(), Bg.delete(n));
	});
}
var Wg, Gg, Kg, qg, Jg = class {
	constructor(e, t, n) {
		this.callback = t, Lh(this, Wg), Lh(this, Gg, !1), Lh(this, Kg), Lh(this, qg, yg((e) => {
			if (!X(this, Gg) && e.target && "contains" in e.target && typeof e.target.contains == "function") {
				for (let t of X(this, Kg)) if (e.target.contains(t)) {
					this.callback(X(this, Wg).boundingClientRect);
					break;
				}
			}
		}, Eg));
		let r = _g(e), i = Hg(r, t), a = Ug(e, X(this, qg));
		Rh(this, Kg, r), Rh(this, Wg, new Rg(e, t, n)), this.disconnect = () => {
			X(this, Gg) || (Rh(this, Gg, !0), i(), a(), X(this, Wg).disconnect());
		};
	}
};
Wg = /* @__PURE__ */ new WeakMap(), Gg = /* @__PURE__ */ new WeakMap(), Kg = /* @__PURE__ */ new WeakMap(), qg = /* @__PURE__ */ new WeakMap();
function Yg(e) {
	return "showPopover" in e && "hidePopover" in e && typeof e.showPopover == "function" && typeof e.hidePopover == "function";
}
function Xg(e) {
	try {
		Yg(e) && e.isConnected && e.hasAttribute("popover") && !e.matches(":popover-open") && e.showPopover();
	} catch {}
}
function Zg(e) {
	return !tg || !e ? !1 : e === Yh(e).scrollingElement;
}
function Qg(e) {
	let t = Gh(e), n = Zg(e) ? Xh(e) : Hh(e), r = t.visualViewport, i = Zg(e) ? {
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
function $g(e, t) {
	let { isTop: n, isBottom: r, isLeft: i, isRight: a, position: o } = Qg(e), { x: s, y: c } = t ?? {
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
var e_ = class {
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
}, t_ = new e_((e) => {
	typeof requestAnimationFrame == "function" ? requestAnimationFrame(e) : e();
}), n_ = new e_((e) => setTimeout(e, 50)), r_ = /* @__PURE__ */ new Map(), i_ = r_.clear.bind(r_);
function a_(e, t = !1) {
	if (!t) return o_(e);
	let n = r_.get(e);
	return n || (n = o_(e), r_.set(e, n), n_.schedule(i_), n);
}
function o_(e) {
	return Gh(e).getComputedStyle(e);
}
function s_(e, t = a_(e, !0)) {
	return t.position === "fixed" || t.position === "sticky";
}
function c_(e, t = a_(e, !0)) {
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
var l_ = {
	excludeElement: !0,
	escapeShadowDOM: !0
};
function u_(e, t = l_) {
	let { limit: n, excludeElement: r, escapeShadowDOM: i } = t, a = /* @__PURE__ */ new Set();
	function o(t) {
		if (n != null && a.size >= n || !t) return a;
		if (Kh(t) && t.scrollingElement != null && !a.has(t.scrollingElement)) return a.add(t.scrollingElement), a;
		if (i && ag(t)) return o(t.host);
		if (!qh(t)) return Jh(t) ? o(t.parentElement) : a;
		if (a.has(t)) return a;
		let s = a_(t, !0);
		if (r && t === e || c_(t, s) && a.add(t), s_(t, s)) {
			let { scrollingElement: e } = t.ownerDocument;
			return e && a.add(e), a;
		}
		return o(t.parentNode);
	}
	return e ? o(e) : a;
}
function d_(e) {
	let [t] = u_(e, { limit: 1 });
	return t ?? null;
}
function f_(e, t = window.frameElement) {
	let n = {
		x: 0,
		y: 0,
		scaleX: 1,
		scaleY: 1
	};
	if (!e) return n;
	let r = gg(e);
	for (; r;) {
		if (r === t) return n;
		let e = Hh(r), { x: i, y: a } = p_(r, e);
		n.x += e.left, n.y += e.top, n.scaleX *= i, n.scaleY *= a, r = gg(r);
	}
	return n;
}
function p_(e, t = Hh(e)) {
	let n = Math.round(t.width), r = Math.round(t.height);
	if (qh(e)) return {
		x: n / e.offsetWidth,
		y: r / e.offsetHeight
	};
	let i = a_(e, !0);
	return {
		x: (parseFloat(i.width) || n) / n,
		y: (parseFloat(i.height) || r) / r
	};
}
function m_(e) {
	if (e === "none") return null;
	let t = e.split(" "), n = parseFloat(t[0]), r = parseFloat(t[1]);
	return isNaN(n) && isNaN(r) ? null : {
		x: isNaN(n) ? r : n,
		y: isNaN(r) ? n : r
	};
}
function h_(e) {
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
function g_(e) {
	let { scale: t, transform: n, translate: r } = e, i = m_(t), a = h_(r), o = __(n);
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
function __(e) {
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
var v_ = /* @__PURE__ */ ((e) => (e[e.Idle = 0] = "Idle", e[e.Forward = 1] = "Forward", e[e.Reverse = -1] = "Reverse", e))(v_ || {}), y_ = {
	x: .2,
	y: .2
}, b_ = {
	x: 10,
	y: 10
};
function x_(e, t, n, r = 25, i = y_, a = b_) {
	let { x: o, y: s } = t, { rect: c, isTop: l, isBottom: u, isLeft: d, isRight: f } = Qg(e), p = f_(e), m = g_(a_(e, !0)), h = m === null ? !1 : m?.scaleX < 0, g = m === null ? !1 : m?.scaleY < 0, _ = new lp(c.left * p.scaleX + p.x, c.top * p.scaleY + p.y, c.width * p.scaleX, c.height * p.scaleY), v = {
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
function S_(e) {
	return "scrollIntoViewIfNeeded" in e && typeof e.scrollIntoViewIfNeeded == "function";
}
function C_(e, t = !1) {
	if (S_(e)) {
		e.scrollIntoViewIfNeeded(t);
		return;
	}
	if (!qh(e)) return e.scrollIntoView();
	var n = d_(e);
	if (!qh(n)) return;
	let r = a_(n, !0), i = parseInt(r.getPropertyValue("border-top-width")), a = parseInt(r.getPropertyValue("border-left-width")), o = e.offsetTop - n.offsetTop < n.scrollTop, s = e.offsetTop - n.offsetTop + e.clientHeight - i > n.scrollTop + n.clientHeight, c = e.offsetLeft - n.offsetLeft < n.scrollLeft, l = e.offsetLeft - n.offsetLeft + e.clientWidth - a > n.scrollLeft + n.clientWidth, u = o && !s;
	(o || s) && t && (n.scrollTop = e.offsetTop - n.offsetTop - n.clientHeight / 2 - i + e.clientHeight / 2), (c || l) && t && (n.scrollLeft = e.offsetLeft - n.offsetLeft - n.clientWidth / 2 - a + e.clientWidth / 2), (o || s || c || l) && !t && e.scrollIntoView(u);
}
function w_(e, t, n) {
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
function T_(e, t, n) {
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
function E_({ element: e, keyframes: t, options: n }) {
	return e.animate(t, n).finished;
}
function D_(e, t = a_(e).translate, n = !0) {
	if (n) {
		let t = Vh(e, (e) => "translate" in e);
		if (t) {
			let { translate: e = "" } = t[0];
			if (typeof e == "string") {
				let t = h_(e);
				if (t) return t;
			}
		}
	}
	if (t) {
		let e = h_(t);
		if (e) return e;
	}
	return {
		x: 0,
		y: 0,
		z: 0
	};
}
var O_ = new e_((e) => setTimeout(e, 0)), k_ = /* @__PURE__ */ new Map(), A_ = k_.clear.bind(k_);
function j_(e) {
	let t = e.ownerDocument, n = k_.get(t);
	if (n) return n;
	n = t.getAnimations(), k_.set(t, n), O_.schedule(A_);
	let r = n.filter((t) => Bh(t.effect) && t.effect.target === e);
	return k_.set(e, r), n;
}
function M_(e, t) {
	let n = j_(e).filter((e) => {
		if (Bh(e.effect)) {
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
var N_ = class extends lp {
	constructor(e, t = {}) {
		let { frameTransform: n = f_(e), ignoreTransforms: r, getBoundingClientRect: i = Hh } = t, a = M_(e, {
			properties: [
				"transform",
				"translate",
				"scale",
				"width",
				"height"
			],
			isValidTarget: (t) => (t !== e || rg()) && t.contains(e)
		}), o = i(e), { top: s, left: c, width: l, height: u } = o, d, f = a_(e), p = g_(f), m = {
			x: p?.scaleX ?? 1,
			y: p?.scaleY ?? 1
		}, h = P_(e, f);
		a?.(), p && (d = T_(o, p, f.transformOrigin), (r || h) && (s = d.top, c = d.left, l = d.width, u = d.height));
		let g = {
			width: d?.width ?? l,
			height: d?.height ?? u
		};
		if (h && !r && d) {
			let e = w_(d, h, f.transformOrigin);
			s = e.top, c = e.left, l = e.width, u = e.height, m.x = h.scaleX, m.y = h.scaleY;
		}
		n && (r || (c *= n.scaleX, l *= n.scaleX, s *= n.scaleY, u *= n.scaleY), c += n.x, s += n.y), super(c, s, l, u), this.scale = m, this.intrinsicWidth = g.width, this.intrinsicHeight = g.height;
	}
};
function P_(e, t) {
	let n = e.getAnimations(), r = null;
	if (!n.length) return null;
	for (let e of n) {
		if (e.playState !== "running") continue;
		let n = Bh(e.effect) ? e.effect.getKeyframes() : [], i = n[n.length - 1];
		if (!i) continue;
		let { transform: a, translate: o, scale: s } = i;
		if (a || o || s) {
			let e = g_({
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
function F_(e) {
	return "style" in e && typeof e.style == "object" && e.style !== null && "setProperty" in e.style && "removeProperty" in e.style && typeof e.style.setProperty == "function" && typeof e.style.removeProperty == "function";
}
var I_ = class {
	constructor(e) {
		this.element = e, this.initial = /* @__PURE__ */ new Map();
	}
	set(e, t = "") {
		let { element: n } = this;
		if (F_(n)) for (let [r, i] of Object.entries(e)) {
			let e = `${t}${r}`;
			this.initial.has(e) || this.initial.set(e, n.style.getPropertyValue(e)), n.style.setProperty(e, typeof i == "string" ? i : `${i}px`);
		}
	}
	remove(e, t = "") {
		let { element: n } = this;
		if (F_(n)) for (let r of e) {
			let e = `${t}${r}`;
			n.style.removeProperty(e);
		}
	}
	reset() {
		let { element: e } = this;
		if (F_(e)) {
			for (let [t, n] of this.initial) e.style.setProperty(t, n);
			e.getAttribute("style") === "" && e.removeAttribute("style");
		}
	}
};
function L_(e) {
	return e ? e instanceof Gh(e).Element || Wh(e) && e.nodeType === Node.ELEMENT_NODE : !1;
}
function R_(e) {
	if (!e) return !1;
	let { KeyboardEvent: t } = Gh(e.target);
	return e instanceof t;
}
function z_(e) {
	if (!e) return !1;
	let { PointerEvent: t } = Gh(e.target);
	return e instanceof t;
}
function B_(e) {
	if (!L_(e)) return !1;
	let { tagName: t } = e;
	return t === "INPUT" || t === "TEXTAREA" || V_(e);
}
function V_(e) {
	return e.hasAttribute("contenteditable") && e.getAttribute("contenteditable") !== "false";
}
var H_ = {};
function U_(e) {
	let t = H_[e] == null ? 0 : H_[e] + 1;
	return H_[e] = t, `${e}-${t}`;
}
//#endregion
//#region node_modules/.pnpm/@dnd-kit+collision@0.3.2/node_modules/@dnd-kit/collision/dist/index.js
var W_ = ({ dragOperation: e, droppable: t }) => {
	let n = e.position.current;
	if (!n) return null;
	let { id: r } = t;
	return t.shape && t.shape.containsPoint(n) ? {
		id: r,
		value: 1 / cp.distance(t.shape.center, n),
		type: fm.PointerIntersection,
		priority: dm.High
	} : null;
}, G_ = ({ dragOperation: e, droppable: t }) => {
	let { shape: n } = e;
	if (!t.shape || !n?.current) return null;
	let r = n.current.intersectionArea(t.shape);
	if (r) {
		let { position: i } = e, a = cp.distance(t.shape.center, i.current), o = r / (n.current.area + t.shape.area - r) / a;
		return {
			id: t.id,
			value: o,
			type: fm.ShapeIntersection,
			priority: dm.Normal
		};
	}
	return null;
}, K_ = (e) => W_(e) ?? G_(e), q_ = (e) => {
	let { dragOperation: t, droppable: n } = e, { shape: r, position: i } = t;
	if (!n.shape) return null;
	let a = r ? lp.from(r.current.boundingRectangle).corners : void 0, o = lp.from(n.shape.boundingRectangle).corners.reduce((e, t, n) => e + cp.distance(cp.from(t), a?.[n] ?? i.current), 0) / 4;
	return {
		id: n.id,
		value: 1 / o,
		type: fm.Collision,
		priority: dm.Normal
	};
}, J_ = Object.create, Y_ = Object.defineProperty, X_ = Object.defineProperties, Z_ = Object.getOwnPropertyDescriptor, Q_ = Object.getOwnPropertyDescriptors, $_ = Object.getOwnPropertySymbols, ev = Object.prototype.hasOwnProperty, tv = Object.prototype.propertyIsEnumerable, nv = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e), rv = (e) => {
	throw TypeError(e);
}, iv = (e, t, n) => t in e ? Y_(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, av = (e, t) => {
	for (var n in t ||= {}) ev.call(t, n) && iv(e, n, t[n]);
	if ($_) for (var n of $_(t)) tv.call(t, n) && iv(e, n, t[n]);
	return e;
}, ov = (e, t) => X_(e, Q_(t)), sv = (e, t) => Y_(e, "name", {
	value: t,
	configurable: !0
}), cv = (e, t) => {
	var n = {};
	for (var r in e) ev.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && $_) for (var r of $_(e)) t.indexOf(r) < 0 && tv.call(e, r) && (n[r] = e[r]);
	return n;
}, lv = (e) => [
	,
	,
	,
	J_(e?.[nv("metadata")] ?? null)
], uv = [
	"class",
	"method",
	"getter",
	"setter",
	"accessor",
	"field",
	"value",
	"get",
	"set"
], dv = (e) => e !== void 0 && typeof e != "function" ? rv("Function expected") : e, fv = (e, t, n, r, i) => ({
	kind: uv[e],
	name: t,
	metadata: r,
	addInitializer: (e) => n._ ? rv("Already initialized") : i.push(dv(e || null))
}), pv = (e, t) => iv(t, nv("metadata"), e[3]), Z = (e, t, n, r) => {
	for (var i = 0, a = e[t >> 1], o = a && a.length; i < o; i++) t & 1 ? a[i].call(n) : r = a[i].call(n, r);
	return r;
}, mv = (e, t, n, r, i, a) => {
	var o, s, c, l, u, d = t & 7, f = !!(t & 8), p = !!(t & 16), m = d > 3 ? e.length + 1 : d ? f ? 1 : 2 : 0, h = uv[d + 5], g = d > 3 && (e[m - 1] = []), _ = e[m] || (e[m] = []), v = d && (!p && !f && (i = i.prototype), d < 5 && (d > 3 || !p) && Z_(d < 4 ? i : {
		get [n]() {
			return Q(this, a);
		},
		set [n](e) {
			return _v(this, a, e);
		}
	}, n));
	d ? p && d < 4 && sv(a, (d > 2 ? "set " : d > 1 ? "get " : "") + n) : sv(i, n);
	for (var y = r.length - 1; y >= 0; y--) l = fv(d, n, c = {}, e[3], _), d && (l.static = f, l.private = p, u = l.access = { has: p ? (e) => gv(i, e) : (e) => n in e }, d ^ 3 && (u.get = p ? (e) => (d ^ 1 ? Q : vv)(e, i, d ^ 4 ? a : v.get) : (e) => e[n]), d > 2 && (u.set = p ? (e, t) => _v(e, i, t, d ^ 4 ? a : v.set) : (e, t) => e[n] = t)), s = (0, r[y])(d ? d < 4 ? p ? a : v[h] : d > 4 ? void 0 : {
		get: v.get,
		set: v.set
	} : i, l), c._ = 1, d ^ 4 || s === void 0 ? dv(s) && (d > 4 ? g.unshift(s) : d ? p ? a = s : v[h] = s : i = s) : typeof s != "object" || !s ? rv("Object expected") : (dv(o = s.get) && (v.get = o), dv(o = s.set) && (v.set = o), dv(o = s.init) && g.unshift(o));
	return d || pv(e, i), v && Y_(i, n, v), p ? d ^ 4 ? a : v : i;
}, hv = (e, t, n) => t.has(e) || rv("Cannot " + n), gv = (e, t) => Object(t) === t ? e.has(t) : rv("Cannot use the \"in\" operator on this value"), Q = (e, t, n) => (hv(e, t, "read from private field"), n ? n.call(e) : t.get(e)), $ = (e, t, n) => t.has(e) ? rv("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), _v = (e, t, n, r) => (hv(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), vv = (e, t, n) => (hv(e, t, "access private method"), n), yv = {
	role: "button",
	roleDescription: "draggable"
}, bv = "dnd-kit-description", xv = "dnd-kit-announcement", Sv = { draggable: "To pick up a draggable item, press the space bar. While dragging, use the arrow keys to move the item in a given direction. Press space again to drop the item in its new position, or press escape to cancel." }, Cv = {
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
function wv(e) {
	let t = e.tagName.toLowerCase();
	return [
		"input",
		"select",
		"textarea",
		"a",
		"button"
	].includes(t);
}
function Tv(e, t) {
	let n = document.createElement("div");
	return n.id = e, n.style.setProperty("display", "none"), n.textContent = t, n;
}
function Ev(e) {
	let t = document.createElement("div");
	return t.id = e, t.setAttribute("role", "status"), t.setAttribute("aria-live", "polite"), t.setAttribute("aria-atomic", "true"), t.style.setProperty("position", "fixed"), t.style.setProperty("width", "1px"), t.style.setProperty("height", "1px"), t.style.setProperty("margin", "-1px"), t.style.setProperty("border", "0"), t.style.setProperty("padding", "0"), t.style.setProperty("overflow", "hidden"), t.style.setProperty("clip", "rect(0 0 0 0)"), t.style.setProperty("clip-path", "inset(100%)"), t.style.setProperty("white-space", "nowrap"), t;
}
var Dv = ["dragover", "dragmove"], Ov = class extends Qp {
	constructor(e, t) {
		super(e);
		let { id: n, idPrefix: { description: r = bv, announcement: i = xv } = {}, announcements: a = Cv, screenReaderInstructions: o = Sv, debounce: s = 500 } = t ?? {}, c = n ? `${r}-${n}` : U_(r), l = n ? `${i}-${n}` : U_(i), u, d, f, p, m = (e = p) => {
			!f || !e || f?.nodeValue !== e && (f.nodeValue = e);
		}, h = () => t_.schedule(m), g = kv(h, s), _ = Object.entries(a).map(([e, t]) => this.manager.monitor.addEventListener(e, (n, r) => {
			let i = f;
			if (!i) return;
			let a = t?.(n, r);
			a && i.nodeValue !== a && (p = a, Dv.includes(e) ? g() : (h(), g.cancel()));
		})), v = () => {
			let e = [];
			u?.isConnected || (u = Tv(c, o.draggable), e.push(u)), d?.isConnected || (d = Ev(l), f = document.createTextNode(""), d.appendChild(f), e.push(d)), e.length > 0 && document.body.append(...e);
		}, y = /* @__PURE__ */ new Set();
		function b() {
			for (let e of y) e();
		}
		this.registerEffect(() => {
			y.clear();
			for (let e of this.manager.registry.draggables.value) {
				let t = e.handle ?? e.element;
				if (t) {
					(!u || !d) && y.add(v), (!wv(t) || rg()) && !t.hasAttribute("tabindex") && y.add(() => t.setAttribute("tabindex", "0")), !t.hasAttribute("role") && t.tagName.toLowerCase() !== "button" && y.add(() => t.setAttribute("role", yv.role)), t.hasAttribute("aria-roledescription") || y.add(() => t.setAttribute("aria-roledescription", yv.roleDescription)), t.hasAttribute("aria-describedby") || y.add(() => t.setAttribute("aria-describedby", c));
					for (let n of ["aria-pressed", "aria-grabbed"]) {
						let r = String(e.isDragging);
						t.getAttribute(n) !== r && y.add(() => t.setAttribute(n, r));
					}
					let n = String(e.disabled);
					t.getAttribute("aria-disabled") !== n && y.add(() => t.setAttribute("aria-disabled", n));
				}
			}
			y.size > 0 && t_.schedule(b);
		}), this.destroy = () => {
			super.destroy(), u?.remove(), d?.remove(), _.forEach((e) => e());
		};
	}
};
function kv(e, t) {
	let n, r = () => {
		clearTimeout(n), n = setTimeout(e, t);
	};
	return r.cancel = () => clearTimeout(n), r;
}
var Av = class extends Qp {
	constructor(e, t) {
		super(e, t), this.manager = e;
		let n = lf(() => Yh(this.manager.dragOperation.source?.element));
		this.destroy = Pd(() => {
			let { dragOperation: e } = this.manager, { cursor: t = "grabbing", nonce: r } = this.options ?? {};
			if (e.status.initialized) {
				let e = n.value, i = e.createElement("style");
				return r && i.setAttribute("nonce", r), i.textContent = `* { cursor: ${t} !important; }`, e.head.appendChild(i), () => i.remove();
			}
		});
	}
}, jv = /* @__PURE__ */ new Map(), Mv, Nv, Pv, Fv, Iv, Lv, Rv, zv, Bv, Vv, Hv, Uv, Wv, Gv = class extends (Iv = $p, Fv = [W], Pv = [G], Nv = [G], Mv = [G], Iv) {
	constructor(e) {
		super(e), Z(Rv, 5, this), $(this, Bv), $(this, Lv, /* @__PURE__ */ new Set()), $(this, zv, Z(Rv, 8, this, /* @__PURE__ */ new Set())), Z(Rv, 11, this), this.registerEffect(vv(this, Bv, Vv));
	}
	register(e) {
		return Q(this, Lv).add(e), () => {
			Q(this, Lv).delete(e);
		};
	}
	addRoot(e) {
		return U(() => {
			let t = new Set(this.additionalRoots);
			t.add(e), this.additionalRoots = t;
		}), () => {
			U(() => {
				let t = new Set(this.additionalRoots);
				t.delete(e), this.additionalRoots = t;
			});
		};
	}
	get sourceRoot() {
		let { source: e } = this.manager.dragOperation;
		return og(e?.element ?? null);
	}
	get targetRoot() {
		let { target: e } = this.manager.dragOperation;
		return og(e?.element ?? null);
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
Rv = lv(Iv), Lv = /* @__PURE__ */ new WeakMap(), zv = /* @__PURE__ */ new WeakMap(), Bv = /* @__PURE__ */ new WeakSet(), Vv = function() {
	let { roots: e } = this, t = [];
	for (let n of e) for (let e of Q(this, Lv)) t.push(vv(this, Bv, Hv).call(this, n, e));
	return () => {
		for (let e of t) e();
	};
}, Hv = function(e, t) {
	let n = jv.get(e);
	n || (n = /* @__PURE__ */ new Map(), jv.set(e, n));
	let r = n.get(t);
	if (!r) {
		let i = Kh(e) ? vv(this, Bv, Uv).call(this, e, n, t) : vv(this, Bv, Wv).call(this, e, n, t);
		if (!i) return () => {};
		r = i, n.set(t, r);
	}
	r.refCount++;
	let i = !1;
	return () => {
		i || (i = !0, r.refCount--, r.refCount === 0 && r.cleanup());
	};
}, Uv = function(e, t, n) {
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
			i.disconnect(), r.remove(), t.delete(n), t.size === 0 && jv.delete(e);
		}
	};
}, Wv = function(e, t, n) {
	"adoptedStyleSheets" in e && Array.isArray(e.adoptedStyleSheets);
	let { CSSStyleSheet: r } = e.ownerDocument.defaultView ?? {};
	if (!r) return null;
	let i = new r();
	return i.replaceSync(n), e.adoptedStyleSheets.push(i), {
		refCount: 0,
		cleanup: () => {
			if (ag(e) && e.host?.isConnected) {
				let t = e.adoptedStyleSheets.indexOf(i);
				t !== -1 && e.adoptedStyleSheets.splice(t, 1);
			}
			t.delete(n), t.size === 0 && jv.delete(e);
		}
	};
}, mv(Rv, 4, "additionalRoots", Fv, Gv, zv), mv(Rv, 2, "sourceRoot", Pv, Gv), mv(Rv, 2, "targetRoot", Nv, Gv), mv(Rv, 2, "roots", Mv, Gv), pv(Rv, Gv);
var Kv = "data-dnd-", qv = `${Kv}dropping`, Jv = "--dnd-", Yv = `${Kv}dragging`, Xv = `${Kv}placeholder`, Zv = [
	Yv,
	Xv,
	"popover",
	"aria-pressed",
	"aria-grabbing"
], Qv = ["view-transition-name"], $v = `
  :is(:root,:host) [${Yv}] {
    position: fixed !important;
    pointer-events: none !important;
    touch-action: none;
    z-index: calc(infinity);
    will-change: translate;
    top: var(${Jv}top, 0px) !important;
    left: var(${Jv}left, 0px) !important;
    right: unset !important;
    bottom: unset !important;
    width: var(${Jv}width, auto);
    max-width: var(${Jv}width, auto);
    height: var(${Jv}height, auto);
    max-height: var(${Jv}height, auto);
    transition: var(${Jv}transition) !important;
  }

  :is(:root,:host) [${Xv}] {
    transition: none;
  }

  :is(:root,:host) [${Xv}='hidden'] {
    visibility: hidden;
  }

  [${Yv}] * {
    pointer-events: none !important;
  }

  [${Yv}]:not([${qv}]) {
    translate: var(${Jv}translate) !important;
  }

  [${Yv}][style*='${Jv}scale'] {
    scale: var(${Jv}scale) !important;
    transform-origin: var(${Jv}transform-origin) !important;
  }

  @layer dnd-kit {
    :where([${Yv}][popover]) {
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
  [${Yv}]::backdrop, [${Kv}overlay]:not([${Yv}]) {
    display: none;
    visibility: hidden;
  }
`.replace(/\n+/g, " ").replace(/\s+/g, " ").trim();
function ey(e, t = "hidden") {
	return U(() => {
		let { element: n, manager: r } = e;
		if (!n || !r) return;
		let i = ty(n, r.registry.droppables), a = [], o = cg(n), { remove: s } = o;
		return ny(i, o, a), ry(o, t), o.remove = () => {
			a.forEach((e) => e()), s.call(o);
		}, o;
	});
}
function ty(e, t) {
	let n = /* @__PURE__ */ new Map();
	for (let r of t) if (r.element && (e === r.element || e.contains(r.element))) {
		let e = `${Kv}${U_("dom-id")}`;
		r.element.setAttribute(e, ""), n.set(r, e);
	}
	return n;
}
function ny(e, t, n) {
	for (let [r, i] of e) {
		if (!r.element) continue;
		let e = `[${i}]`, a = t.matches(e) ? t : t.querySelector(e);
		if (r.element.removeAttribute(i), !a) continue;
		let o = r.element;
		r.proxy = a, a.removeAttribute(i), pg.set(o, a), n.push(() => {
			pg.delete(o), r.proxy = void 0;
		});
	}
}
function ry(e, t = "hidden") {
	e.setAttribute("inert", "true"), e.setAttribute("tab-index", "-1"), e.setAttribute("aria-hidden", "true"), e.setAttribute(Xv, t);
}
function iy(e, t) {
	return e === t ? !0 : gg(e) === gg(t);
}
function ay(e) {
	let { target: t } = e;
	"newState" in e && e.newState === "closed" && L_(t) && t.hasAttribute("popover") && requestAnimationFrame(() => Xg(t));
}
function oy(e) {
	return e.tagName === "TR";
}
function sy(e, t, n) {
	let r = new MutationObserver((r) => {
		let i = !1;
		for (let n of r) {
			if (n.target !== e) {
				i = !0;
				continue;
			}
			if (n.type !== "attributes") continue;
			let r = n.attributeName;
			if (r.startsWith("aria-") || Zv.includes(r)) continue;
			let a = e.getAttribute(r);
			if (r === "style") {
				if (F_(e) && F_(t)) {
					let n = e.style;
					for (let e of Array.from(t.style)) n.getPropertyValue(e) === "" && t.style.removeProperty(e);
					for (let e of Array.from(n)) {
						if (Qv.includes(e) || e.startsWith(Jv)) continue;
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
function cy(e, t, n) {
	let r = new MutationObserver((r) => {
		for (let i of r) if (i.addedNodes.length !== 0) for (let r of Array.from(i.addedNodes)) {
			if (r.contains(e) && e.nextElementSibling !== t) {
				e.insertAdjacentElement("afterend", t), Xg(n);
				return;
			}
			if (r.contains(t) && t.previousElementSibling !== e) {
				t.insertAdjacentElement("beforebegin", e), Xg(n);
				return;
			}
		}
	});
	return r.observe(e.ownerDocument.body, {
		childList: !0,
		subtree: !0
	}), r;
}
function ly(e) {
	return new ResizeObserver(() => {
		var t;
		let n = new N_(e.placeholder, {
			frameTransform: e.frameTransform,
			ignoreTransforms: !0
		}), r = e.transformOrigin ?? {
			x: 1,
			y: 1
		}, i = (e.width - n.width) * r.x + e.delta.x, a = (e.height - n.height) * r.y + e.delta.y, o = ig();
		if (e.styles.set({
			width: n.width - e.widthOffset,
			height: n.height - e.heightOffset,
			top: e.top + a + o.y,
			left: e.left + i + o.x
		}, Jv), (t = e.getElementMutationObserver()) == null || t.takeRecords(), oy(e.element) && oy(e.placeholder)) {
			let t = Array.from(e.element.cells), n = Array.from(e.placeholder.cells);
			e.getSavedCellWidths() || e.setSavedCellWidths(t.map((e) => e.style.width));
			for (let [e, r] of t.entries()) {
				let t = n[e];
				r.style.width = `${t.getBoundingClientRect().width}px`;
			}
		}
		e.dragOperation.shape = new N_(e.feedbackElement);
	});
}
var uy = 250, dy = "ease";
function fy(e) {
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
	let { duration: r = uy, easing: i = dy } = n ?? {};
	Xg(e.feedbackElement);
	let [, a] = Vh(e.feedbackElement, (e) => "translate" in e) ?? [];
	a?.pause();
	let o = e.placeholder ?? e.element, s = { frameTransform: iy(e.feedbackElement, o) ? null : void 0 }, c = new N_(e.feedbackElement, s), l = h_(a_(e.feedbackElement).translate) ?? e.translate, u = new N_(o, s), d = lp.delta(c, u, e.alignment), f = {
		x: l.x - d.x,
		y: l.y - d.y
	}, p = Math.round(c.intrinsicHeight) === Math.round(u.intrinsicHeight) ? {} : {
		minHeight: [`${c.intrinsicHeight}px`, `${u.intrinsicHeight}px`],
		maxHeight: [`${c.intrinsicHeight}px`, `${u.intrinsicHeight}px`]
	}, m = Math.round(c.intrinsicWidth) === Math.round(u.intrinsicWidth) ? {} : {
		minWidth: [`${c.intrinsicWidth}px`, `${u.intrinsicWidth}px`],
		maxWidth: [`${c.intrinsicWidth}px`, `${u.intrinsicWidth}px`]
	};
	e.styles.set({ transition: e.transition }, Jv), e.feedbackElement.setAttribute(qv, ""), (t = e.getElementMutationObserver()) == null || t.takeRecords(), E_({
		element: e.feedbackElement,
		keyframes: ov(av(av({}, p), m), { translate: [`${l.x}px ${l.y}px 0`, `${f.x}px ${f.y}px 0`] }),
		options: {
			duration: sg(Gh(e.feedbackElement)) ? 0 : e.moved || e.feedbackElement !== e.element ? r : 0,
			easing: i
		}
	}).then(() => {
		e.feedbackElement.removeAttribute(qv), a?.finish(), e.cleanup(), requestAnimationFrame(e.restoreFocus);
	});
}
var py, my, hy, gy, _y, vy, yy, by = class extends (my = Qp, py = [W], my) {
	constructor(e, t) {
		super(e, t), $(this, _y), $(this, gy, Z(hy, 8, this)), Z(hy, 11, this), this.state = {
			initial: {},
			current: {}
		};
		let n = e.registry.plugins.get(Gv), r = n?.register($v);
		if (r) {
			let e = this.destroy.bind(this);
			this.destroy = () => {
				r(), e();
			};
		}
		this.registerEffect(vv(this, _y, vy).bind(this, n)), this.registerEffect(vv(this, _y, yy));
	}
};
hy = lv(my), gy = /* @__PURE__ */ new WeakMap(), _y = /* @__PURE__ */ new WeakSet(), vy = function(e) {
	let { overlay: t } = this;
	if (!t || !e) return;
	let n = og(t);
	if (n) return e.addRoot(n);
}, yy = function() {
	let { state: e, manager: t, options: n } = this, { dragOperation: r } = t, { position: i, source: a, status: o } = r;
	if (o.idle) {
		e.current = {}, e.initial = {};
		return;
	}
	if (!a) return;
	let { element: s, feedback: c } = a;
	if (!s || c === "none" || !o.initialized || o.initializing) return;
	let { initial: l } = e, u = this.overlay ?? s, d = f_(u), f = f_(s), p = !iy(s, u), m = new N_(s, {
		frameTransform: p ? f : null,
		ignoreTransforms: !p
	}), h = {
		x: f.scaleX / d.scaleX,
		y: f.scaleY / d.scaleY
	}, { width: g, height: _, top: v, left: y } = m;
	p && (g /= h.x, _ /= h.y);
	let b = new I_(u), { transition: x, translate: S, boxSizing: C, paddingBlockStart: ee, paddingBlockEnd: w, paddingInlineStart: T, paddingInlineEnd: E, borderInlineStartWidth: D, borderInlineEndWidth: O, borderBlockStartWidth: te, borderBlockEndWidth: ne } = a_(s), re = c === "clone", ie = C === "content-box", ae = ie ? parseInt(T) + parseInt(E) + parseInt(D) + parseInt(O) : 0, oe = ie ? parseInt(ee) + parseInt(w) + parseInt(te) + parseInt(ne) : 0, k = c !== "move" && !this.overlay ? ey(a, re ? "clone" : "hidden") : null, se = U(() => R_(t.dragOperation.activatorEvent));
	if (S !== "none") {
		let e = h_(S);
		e && !l.translate && (l.translate = e);
	}
	if (!l.transformOrigin) {
		let e = U(() => i.current);
		l.transformOrigin = {
			x: (e.x - y * d.scaleX - d.x) / (g * d.scaleX),
			y: (e.y - v * d.scaleY - d.y) / (_ * d.scaleY)
		};
	}
	let { transformOrigin: ce } = l, le = v * d.scaleY + d.y, A = y * d.scaleX + d.x;
	if (!l.coordinates && (l.coordinates = {
		x: A,
		y: le
	}, h.x !== 1 || h.y !== 1)) {
		let { scaleX: e, scaleY: t } = f, { x: n, y: r } = ce;
		l.coordinates.x += (g * e - g) * n, l.coordinates.y += (_ * t - _) * r;
	}
	l.dimensions ||= {
		width: g,
		height: _
	}, l.frameTransform ||= d;
	let j = {
		x: l.coordinates.x - A,
		y: l.coordinates.y - le
	}, ue = {
		width: (l.dimensions.width * l.frameTransform.scaleX - g * d.scaleX) * ce.x,
		height: (l.dimensions.height * l.frameTransform.scaleY - _ * d.scaleY) * ce.y
	}, de = {
		x: j.x / d.scaleX + ue.width,
		y: j.y / d.scaleY + ue.height
	}, fe = {
		left: y + de.x,
		top: v + de.y
	};
	u.setAttribute(Yv, "true");
	let pe = U(() => r.transform), M = l.translate ?? {
		x: 0,
		y: 0
	}, me = pe.x * d.scaleX + M.x, he = pe.y * d.scaleY + M.y, ge = ig();
	b.set({
		width: g - ae,
		height: _ - oe,
		top: fe.top + ge.y,
		left: fe.left + ge.x,
		translate: `${me}px ${he}px 0`,
		transition: x ? `${x}, translate 0ms linear` : "",
		scale: p ? `${h.x} ${h.y}` : "",
		"transform-origin": `${ce.x * 100}% ${ce.y * 100}%`
	}, Jv), k && (s.insertAdjacentElement("afterend", k), n?.rootElement && (typeof n.rootElement == "function" ? n.rootElement(a) : n.rootElement).appendChild(s)), Yg(u) && (u.hasAttribute("popover") || u.setAttribute("popover", "manual"), Xg(u), u.addEventListener("beforetoggle", ay));
	let _e, ve, ye, be = ly({
		placeholder: k,
		element: s,
		feedbackElement: u,
		frameTransform: d,
		transformOrigin: ce,
		width: g,
		height: _,
		top: v,
		left: y,
		widthOffset: ae,
		heightOffset: oe,
		delta: de,
		styles: b,
		dragOperation: r,
		getElementMutationObserver: () => _e,
		getSavedCellWidths: () => ye,
		setSavedCellWidths: (e) => {
			ye = e;
		}
	}), xe = new N_(u);
	U(() => r.shape = xe);
	let Se = Gh(u), Ce = (e) => {
		this.manager.actions.stop({ event: e });
	}, we = sg(Se);
	se && Se.addEventListener("resize", Ce), U(() => a.status) === "idle" && requestAnimationFrame(() => a.status = "dragging"), k && (be.observe(k), _e = sy(s, k, re), ve = cy(s, k, u));
	let Te = t.dragOperation.source?.id, Ee = () => {
		if (!se || Te == null) return;
		let e = t.registry.draggables.get(Te), n = e?.handle ?? e?.element;
		qh(n) && n.focus();
	}, De = () => {
		if (_e?.disconnect(), ve?.disconnect(), be.disconnect(), Se.removeEventListener("resize", Ce), Yg(u) && (u.removeEventListener("beforetoggle", ay), u.removeAttribute("popover")), u.removeAttribute(Yv), b.reset(), ye && oy(s)) {
			let e = Array.from(s.cells);
			for (let [t, n] of e.entries()) n.style.width = ye[t] ?? "";
		}
		a.status = "idle";
		let t = e.current.translate != null;
		k && (t || k.parentElement !== u.parentElement) && u.isConnected && k.replaceWith(u), k?.remove();
	}, Oe = n?.dropAnimation, ke = this, Ae = ff(() => {
		let { transform: t, status: n } = r;
		if (!(!t.x && !t.y && !e.current.translate) && n.dragging) {
			let n = l.translate ?? {
				x: 0,
				y: 0
			}, i = {
				x: t.x / d.scaleX + n.x,
				y: t.y / d.scaleY + n.y
			}, a = e.current.translate, o = U(() => r.modifiers), s = U(() => r.shape?.current), c = se && !we ? "250ms cubic-bezier(0.25, 1, 0.5, 1)" : "0ms linear";
			if (b.set({
				transition: `${x}, translate ${c}`,
				translate: `${i.x}px ${i.y}px 0`
			}, Jv), _e?.takeRecords(), s && s !== xe && a && !o.length) {
				let e = cp.delta(i, a);
				r.shape = lp.from(s.boundingRectangle).translate(e.x * d.scaleX, e.y * d.scaleY);
			} else r.shape = new N_(u);
			e.current.translate = i;
		}
	}, function() {
		if (r.status.dropped) {
			this.dispose(), a.status = "dropping";
			let n = ke.dropAnimation === void 0 ? Oe : ke.dropAnimation, r = e.current.translate, i = r != null;
			if (!r && s !== u && (r = {
				x: 0,
				y: 0
			}), !r || n === null) {
				De();
				return;
			}
			t.renderer.rendering.then(() => {
				fy({
					element: s,
					feedbackElement: u,
					placeholder: k,
					translate: r,
					moved: i,
					transition: x,
					alignment: a.alignment,
					styles: b,
					animation: n ?? void 0,
					getElementMutationObserver: () => _e,
					cleanup: De,
					restoreFocus: Ee
				});
			});
		}
	});
	return () => {
		De(), Ae();
	};
}, mv(hy, 4, "overlay", py, by, gy), pv(hy, by), by.configure = Kp(by);
var xy = by, Sy = !0, Cy = !1, wy, Ty, Ey, Dy = (Ey = [W], v_.Forward), Oy, ky, Ay;
Ty = (wy = [W], v_.Reverse);
var jy = class {
	constructor() {
		$(this, ky, Z(Oy, 8, this, Sy)), Z(Oy, 11, this), $(this, Ay, Z(Oy, 12, this, Sy)), Z(Oy, 15, this);
	}
	isLocked(e) {
		return e === v_.Idle ? !1 : e == null ? this[v_.Forward] === Sy && this[v_.Reverse] === Sy : this[e] === Sy;
	}
	unlock(e) {
		e !== v_.Idle && (this[e] = Cy);
	}
};
Oy = lv(null), ky = /* @__PURE__ */ new WeakMap(), Ay = /* @__PURE__ */ new WeakMap(), mv(Oy, 4, Dy, Ey, jy, ky), mv(Oy, 4, Ty, wy, jy, Ay), pv(Oy, jy);
var My = [v_.Forward, v_.Reverse], Ny = class {
	constructor() {
		this.x = new jy(), this.y = new jy();
	}
	isLocked() {
		return this.x.isLocked() && this.y.isLocked();
	}
}, Py = class extends Qp {
	constructor(e) {
		super(e);
		let t = wd(new Ny()), n = null;
		this.signal = t, Pd(() => {
			let { status: r } = e.dragOperation;
			if (!r.initialized) {
				n = null, t.value = new Ny();
				return;
			}
			let { delta: i } = e.dragOperation.position;
			if (n) {
				let e = {
					x: Fy(i.x, n.x),
					y: Fy(i.y, n.y)
				}, r = t.peek();
				V(() => {
					for (let t of yp) for (let n of My) e[t] === n && r[t].unlock(n);
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
function Fy(e, t) {
	return Math.sign(e - t);
}
var Iy, Ly, Ry, zy, By, Vy, Hy = class extends (Ly = $p, Iy = [W], Ly) {
	constructor(e) {
		super(e), $(this, zy, Z(Ry, 8, this, !1)), Z(Ry, 11, this), $(this, By), $(this, Vy, () => {
			if (!Q(this, By)) return;
			let { element: e, by: t } = Q(this, By);
			t.y && (e.scrollTop += t.y), t.x && (e.scrollLeft += t.x);
		}), this.scroll = (e) => {
			if (this.disabled) return !1;
			let t = this.getScrollableElements();
			if (!t) return _v(this, By, void 0), !1;
			let { position: n } = this.manager.dragOperation, r = n?.current;
			if (r) {
				let { by: n } = e ?? {}, i = n ? {
					x: Uy(n.x),
					y: Uy(n.y)
				} : void 0, a = i ? void 0 : this.scrollIntentTracker.current;
				if (a?.isLocked()) return !1;
				for (let e of t) {
					let t = $g(e, n);
					if (t.x || t.y) {
						let { speed: t, direction: o } = x_(e, r, i);
						if (a) for (let e of yp) a[e].isLocked(o[e]) && (t[e] = 0, o[e] = 0);
						if (o.x || o.y) {
							let { x: r, y: i } = n ?? o, a = r * t.x, s = i * t.y;
							if (a || s) {
								let t = Q(this, By)?.by;
								if (this.autoScrolling && t && (t.x && !a || t.y && !s)) continue;
								return _v(this, By, {
									element: e,
									by: {
										x: a,
										y: s
									}
								}), t_.schedule(Q(this, Vy)), !0;
							}
						}
					}
				}
			}
			return _v(this, By, void 0), !1;
		};
		let t = null, n = null, r = lf(() => {
			let { position: n, source: r } = e.dragOperation;
			if (!n) return null;
			let i = dg(og(r?.element), n.current);
			return i && (t = i), i ?? t;
		}), i = lf(() => {
			let t = r.value, { documentElement: i } = Yh(t);
			if (!t || t === i) {
				let { target: t } = e.dragOperation, r = t?.element;
				if (r) {
					let e = u_(r, { excludeElement: !1 });
					return n = e, e;
				}
			}
			if (t) {
				let e = u_(t, { excludeElement: !1 });
				return this.autoScrolling && n && e.size < n?.size ? n : (n = e, e);
			}
			return n = null, null;
		}, uf);
		this.getScrollableElements = () => i.value, this.scrollIntentTracker = new Py(e), this.destroy = e.monitor.addEventListener("dragmove", (t) => {
			this.disabled || t.defaultPrevented || !R_(e.dragOperation.activatorEvent) || !t.by || this.scroll({ by: t.by }) && t.preventDefault();
		});
	}
};
Ry = lv(Ly), zy = /* @__PURE__ */ new WeakMap(), By = /* @__PURE__ */ new WeakMap(), Vy = /* @__PURE__ */ new WeakMap(), mv(Ry, 4, "autoScrolling", Iy, Hy, zy), pv(Ry, Hy);
function Uy(e) {
	return e > 0 ? v_.Forward : e < 0 ? v_.Reverse : v_.Idle;
}
var Wy = new class {
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
}), Gy = 10, Ky = class extends Qp {
	constructor(e, t) {
		super(e);
		let n = e.registry.plugins.get(Hy);
		if (!n) throw Error("AutoScroller plugin depends on Scroller plugin");
		this.destroy = Pd(() => {
			if (this.disabled) return;
			let { position: t, status: r } = e.dragOperation;
			if (r.dragging) if (n.scroll()) {
				n.autoScrolling = !0;
				let e = setInterval(() => Wy.schedule(n.scroll), Gy);
				return () => {
					clearInterval(e);
				};
			} else n.autoScrolling = !1;
		});
	}
}, qy = {
	capture: !0,
	passive: !0
}, Jy, Yy = class extends $p {
	constructor(e) {
		super(e), $(this, Jy), this.handleScroll = () => {
			Q(this, Jy) ?? _v(this, Jy, setTimeout(() => {
				this.manager.collisionObserver.forceUpdate(!1), _v(this, Jy, void 0);
			}, 50));
		};
		let { dragOperation: t } = this.manager;
		this.destroy = Pd(() => {
			if (t.status.dragging) {
				let e = t.source?.element?.ownerDocument ?? document;
				return e.addEventListener("scroll", this.handleScroll, qy), () => {
					e.removeEventListener("scroll", this.handleScroll, qy);
				};
			}
		});
	}
};
Jy = /* @__PURE__ */ new WeakMap();
var Xy = class extends Qp {
	constructor(e, t) {
		super(e, t), this.manager = e, this.destroy = Pd(() => {
			let { dragOperation: e } = this.manager, { nonce: t } = this.options ?? {};
			if (e.status.initialized) {
				let e = document.createElement("style");
				return t && e.setAttribute("nonce", t), e.textContent = "* { user-select: none !important; -webkit-user-select: none !important; }", document.head.appendChild(e), Zy(), document.addEventListener("selectionchange", Zy, { capture: !0 }), () => {
					document.removeEventListener("selectionchange", Zy, { capture: !0 }), e.remove();
				};
			}
		});
	}
};
function Zy() {
	var e;
	(e = document.getSelection()) == null || e.removeAllRanges();
}
var Qy = Object.freeze({
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
}), $y, eb = class extends sh {
	constructor(e, t) {
		super(e), this.manager = e, this.options = t, $(this, $y, []), this.listeners = new hg(), this.handleSourceKeyDown = (e, t, n) => {
			if (this.disabled || e.defaultPrevented || !L_(e.target) || t.disabled) return;
			let { keyboardCodes: r = Qy.keyboardCodes, preventActivation: i = Qy.preventActivation } = n ?? {};
			r.start.includes(e.code) && this.manager.dragOperation.status.idle && (i?.(e, t) || this.handleStart(e, t, n));
		};
	}
	bind(e, t = this.options) {
		return Pd(() => {
			let n = e.handle ?? e.element, r = (n) => {
				R_(n) && this.handleSourceKeyDown(n, e, t);
			};
			if (n) return n.addEventListener("keydown", r), () => {
				n.removeEventListener("keydown", r);
			};
		});
	}
	handleStart(e, t, n) {
		let { element: r } = t;
		if (!r) throw Error("Source draggable does not have an associated element");
		e.preventDefault(), e.stopImmediatePropagation(), C_(r);
		let { center: i } = new N_(r);
		if (this.manager.actions.start({
			event: e,
			coordinates: {
				x: i.x,
				y: i.y
			},
			source: t
		}).signal.aborted) return this.cleanup();
		this.sideEffects();
		let a = Yh(r), o = [this.listeners.bind(a, [{
			type: "keydown",
			listener: (e) => this.handleKeyDown(e, t, n),
			options: { capture: !0 }
		}])];
		Q(this, $y).push(...o);
	}
	handleKeyDown(e, t, n) {
		let { keyboardCodes: r = Qy.keyboardCodes } = n ?? {};
		if (nb(e, [...r.end, ...r.cancel])) {
			e.preventDefault();
			let t = nb(e, r.cancel);
			this.handleEnd(e, t);
			return;
		}
		nb(e, r.up) ? this.handleMove("up", e) : nb(e, r.down) && this.handleMove("down", e), nb(e, r.left) ? this.handleMove("left", e) : nb(e, r.right) && this.handleMove("right", e);
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
		}, a = this.options?.offset ?? Qy.offset;
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
		let e = this.manager.registry.plugins.get(Ky);
		e?.disabled === !1 && (e.disable(), Q(this, $y).push(() => {
			e.enable();
		}));
	}
	cleanup() {
		Q(this, $y).forEach((e) => e()), _v(this, $y, []);
	}
	destroy() {
		this.cleanup(), this.listeners.clear();
	}
};
$y = /* @__PURE__ */ new WeakMap(), eb.configure = Kp(eb), eb.defaults = Qy;
var tb = eb;
function nb(e, t) {
	return t.includes(e.code);
}
var rb, ib = class extends uh {
	constructor() {
		super(...arguments), $(this, rb);
	}
	onEvent(e) {
		switch (e.type) {
			case "pointerdown":
				_v(this, rb, eg(e));
				break;
			case "pointermove":
				if (!Q(this, rb)) return;
				let { x: t, y: n } = eg(e), r = {
					x: t - Q(this, rb).x,
					y: n - Q(this, rb).y
				}, { tolerance: i } = this.options;
				if (i && _p(r, i)) {
					this.abort();
					return;
				}
				_p(r, this.options.value) && this.activate(e);
				break;
			case "pointerup":
				this.abort();
				break;
		}
	}
	abort() {
		_v(this, rb, void 0);
	}
};
rb = /* @__PURE__ */ new WeakMap();
var ab, ob, sb = class extends uh {
	constructor() {
		super(...arguments), $(this, ab), $(this, ob);
	}
	onEvent(e) {
		switch (e.type) {
			case "pointerdown":
				_v(this, ob, eg(e)), _v(this, ab, setTimeout(() => this.activate(e), this.options.value));
				break;
			case "pointermove":
				if (!Q(this, ob)) return;
				let { x: t, y: n } = eg(e);
				_p({
					x: t - Q(this, ob).x,
					y: n - Q(this, ob).y
				}, this.options.tolerance) && this.abort();
				break;
			case "pointerup":
				this.abort();
				break;
		}
	}
	abort() {
		Q(this, ab) && (clearTimeout(Q(this, ab)), _v(this, ob, void 0), _v(this, ab, void 0));
	}
};
ab = /* @__PURE__ */ new WeakMap(), ob = /* @__PURE__ */ new WeakMap();
var cb = class {};
cb.Delay = sb, cb.Distance = ib;
var lb = Object.freeze({
	activationConstraints(e, t) {
		let { pointerType: n, target: r } = e;
		if (!(n === "mouse" && L_(r) && (t.handle === r || t.handle?.contains(r)))) return n === "touch" ? [new cb.Delay({
			value: 250,
			tolerance: 5
		})] : B_(r) && !e.defaultPrevented ? [new cb.Delay({
			value: 200,
			tolerance: 0
		})] : [new cb.Delay({
			value: 200,
			tolerance: 10
		}), new cb.Distance({ value: 5 })];
	},
	preventActivation(e, t) {
		let { target: n } = e;
		return n === t.element || n === t.handle || !L_(n) || t.handle?.contains(n) ? !1 : mg(n);
	}
}), ub, db = class extends sh {
	constructor(e, t) {
		super(e), this.manager = e, this.options = t, $(this, ub, /* @__PURE__ */ new Set()), this.listeners = new hg(), this.latest = {
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
		let { activationConstraints: r = lb.activationConstraints } = n ?? {};
		return typeof r == "function" ? r(e, t) : r;
	}
	bind(e, t = this.options) {
		return Pd(() => {
			let n = new AbortController(), { signal: r } = n, i = (n) => {
				z_(n) && this.handlePointerDown(n, e, t);
			}, a = [e.handle ?? e.element];
			t?.activatorElements && (a = Array.isArray(t.activatorElements) ? t.activatorElements : t.activatorElements(e));
			for (let e of a) e && (_b(e.ownerDocument.defaultView), e.addEventListener("pointerdown", i, { signal: r }));
			return () => n.abort();
		});
	}
	handlePointerDown(e, t, n) {
		if (this.disabled || !e.isPrimary || e.button !== 0 || !L_(e.target) || t.disabled || pb(e) || !this.manager.dragOperation.status.idle) return;
		let { preventActivation: r = lb.preventActivation } = n ?? {};
		if (r?.(e, t)) return;
		let { target: i } = e, a = qh(i) && i.draggable && i.getAttribute("draggable") === "true", o = f_(t.element), { x: s, y: c } = eg(e);
		this.initialCoordinates = {
			x: s * o.scaleX + o.x,
			y: c * o.scaleY + o.y
		};
		let l = this.activationConstraints(e, t, n);
		e.sensor = this;
		let u = new ch(l, (e) => this.handleStart(t, e));
		u.signal.onabort = () => this.handleCancel(e), u.onEvent(e), this.controller = u;
		let d = ng(), f = this.listeners.bind(d, [
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
				listener: a ? this.handleCancel : mb,
				options: { capture: !0 }
			}
		]);
		Q(this, ub).add(() => {
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
			let n = eg(e), r = f_(t.element);
			n.x = n.x * r.scaleX + r.x, n.y = n.y * r.scaleY + r.y, e.preventDefault(), e.stopPropagation(), this.latest.event = e, this.latest.coordinates = n, t_.schedule(this.handleMove);
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
		let i = Yh(t.target).body;
		i.setPointerCapture(t.pointerId);
		let a = L_(t.target) ? [t.target, i] : i, o = this.listeners.bind(a, [
			{
				type: "touchmove",
				listener: mb,
				options: { passive: !1 }
			},
			{
				type: "click",
				listener: mb
			},
			{
				type: "contextmenu",
				listener: mb
			},
			{
				type: "keydown",
				listener: this.handleKeyDown
			}
		]);
		Q(this, ub).add(o);
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
		}, Q(this, ub).forEach((e) => e()), Q(this, ub).clear();
	}
	destroy() {
		this.cleanup(), this.listeners.clear();
	}
};
ub = /* @__PURE__ */ new WeakMap(), db.configure = Kp(db), db.defaults = lb;
var fb = db;
function pb(e) {
	return "sensor" in e;
}
function mb(e) {
	e.preventDefault();
}
function hb() {}
var gb = /* @__PURE__ */ new WeakSet();
function _b(e) {
	!e || gb.has(e) || (e.addEventListener("touchmove", hb, {
		capture: !1,
		passive: !1
	}), gb.add(e));
}
var vb = {
	modifiers: [],
	plugins: [
		Ov,
		Ky,
		Av,
		xy,
		Xy
	],
	sensors: [fb, tb]
}, yb = class extends Ph {
	constructor(e = {}) {
		let t = Nh(e.plugins, vb.plugins), n = Nh(e.sensors, vb.sensors), r = Nh(e.modifiers, vb.modifiers);
		super(ov(av({}, e), {
			plugins: [
				Yy,
				Hy,
				Gv,
				...t
			],
			sensors: n,
			modifiers: r
		}));
	}
}, bb, xb, Sb, Cb, wb, Tb, Eb, Db, Ob = class extends (Cb = Km, Sb = [W], xb = [W], bb = [W], Cb) {
	constructor(e, t) {
		var n = e, { element: r, effects: i = () => [], handle: a, feedback: o = "default" } = n, s = cv(n, [
			"element",
			"effects",
			"handle",
			"feedback"
		]);
		super(av({ effects: () => [...i(), () => {
			let { manager: e } = this;
			if (!e) return;
			let t = (this.sensors?.map(qp) ?? [...e.sensors]).map((t) => {
				let n = t instanceof sh ? t : e.registry.register(t.plugin), r = t instanceof sh ? void 0 : t.options;
				return n.bind(this, r);
			});
			return function() {
				t.forEach((e) => e());
			};
		}] }, s), t), $(this, Tb, Z(wb, 8, this)), Z(wb, 11, this), $(this, Eb, Z(wb, 12, this)), Z(wb, 15, this), $(this, Db, Z(wb, 16, this)), Z(wb, 19, this), this.element = r, this.handle = a, this.feedback = o;
	}
};
wb = lv(Cb), Tb = /* @__PURE__ */ new WeakMap(), Eb = /* @__PURE__ */ new WeakMap(), Db = /* @__PURE__ */ new WeakMap(), mv(wb, 4, "handle", Sb, Ob, Tb), mv(wb, 4, "element", xb, Ob, Eb), mv(wb, 4, "feedback", bb, Ob, Db), pv(wb, Ob);
var kb, Ab, jb, Mb, Nb, Pb, Fb, Ib, Lb, Rb, zb = class extends (jb = oh, Ab = [W], kb = [W], jb) {
	constructor(e, t) {
		var n = e, { element: r, effects: i = () => [] } = n, a = cv(n, ["element", "effects"]);
		let { collisionDetector: o = K_ } = a, s = (e) => {
			let { manager: t, element: n } = this;
			if (!n || e === null) {
				this.shape = void 0;
				return;
			}
			if (!t) return;
			let r = new N_(n), i = U(() => this.shape);
			return r && i?.equals(r) ? i : (this.shape = r, r);
		}, c = wd(!1);
		super(ov(av({}, a), {
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
						let t = new Jg(e, s);
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
		}), t), $(this, Lb), $(this, Nb, Z(Mb, 8, this)), Z(Mb, 11, this), $(this, Rb, Z(Mb, 12, this)), Z(Mb, 15, this), this.element = r, this.refreshShape = () => s();
	}
	set element(e) {
		_v(this, Lb, e, Ib);
	}
	get element() {
		return this.proxy ?? Q(this, Lb, Fb);
	}
};
Mb = lv(jb), Nb = /* @__PURE__ */ new WeakMap(), Lb = /* @__PURE__ */ new WeakSet(), Rb = /* @__PURE__ */ new WeakMap(), Pb = mv(Mb, 20, "#element", Ab, Lb, Nb), Fb = Pb.get, Ib = Pb.set, mv(Mb, 4, "proxy", kb, zb, Rb), pv(Mb, zb);
//#endregion
//#region node_modules/.pnpm/@dnd-kit+react@0.3.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@dnd-kit/react/utilities.js
var Bb = /* @__PURE__ */ g(t(), 1);
function Vb(e) {
	return typeof e == "object" && !!e && "current" in e;
}
function Hb(e) {
	if (e != null) return Vb(e) ? e.current ?? void 0 : e;
}
//#endregion
//#region node_modules/.pnpm/@dnd-kit+react@0.3.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@dnd-kit/react/hooks.js
var Ub = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0 ? A.useLayoutEffect : A.useEffect;
function Wb() {
	let e = (0, A.useState)(0)[1];
	return (0, A.useCallback)(() => {
		e((e) => e + 1);
	}, [e]);
}
function Gb(e, t) {
	let n = (0, A.useRef)(/* @__PURE__ */ new Map()), r = Wb();
	return Ub(() => {
		if (!e) {
			n.current.clear();
			return;
		}
		return Pd(() => {
			let i = !1, a = !1;
			for (let r of n.current) {
				let [o] = r, s = U(() => r[1]), c = e[o];
				s !== c && (i = !0, n.current.set(o, c), a = t?.(o, s, c) ?? !1);
			}
			i && (a ? (0, Bb.flushSync)(r) : r());
		});
	}, [e]), (0, A.useMemo)(() => e && new Proxy(e, { get(e, t) {
		let r = e[t];
		return n.current.set(t, r), r;
	} }), [e]);
}
function Kb(e, t) {
	e();
}
function qb(e) {
	let t = (0, A.useRef)(e);
	return Ub(() => {
		t.current = e;
	}, [e]), t;
}
function Jb(e, t, n = A.useEffect, r = Object.is) {
	let i = (0, A.useRef)(e);
	n(() => {
		let n = i.current;
		r(e, n) || (i.current = e, t(e, n));
	}, [t, e]);
}
function Yb(e, t) {
	let n = (0, A.useRef)(Hb(e));
	Ub(() => {
		let r = Hb(e);
		r !== n.current && (n.current = r, t(r));
	});
}
//#endregion
//#region node_modules/.pnpm/@dnd-kit+react@0.3.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@dnd-kit/react/index.js
var Xb = Object.getOwnPropertySymbols, Zb = Object.prototype.hasOwnProperty, Qb = Object.prototype.propertyIsEnumerable, $b = (e, t) => {
	var n = {};
	for (var r in e) Zb.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && Xb) for (var r of Xb(e)) t.indexOf(r) < 0 && Qb.call(e, r) && (n[r] = e[r]);
	return n;
}, ex = (0, A.createContext)(new yb()), tx = (0, A.memo)((0, A.forwardRef)(({ children: e }, t) => {
	let [n, r] = (0, A.useState)(0), i = (0, A.useRef)(null), a = (0, A.useRef)(null), o = (0, A.useMemo)(() => ({
		renderer: { get rendering() {
			return i.current ?? Promise.resolve();
		} },
		trackRendering(e) {
			i.current ||= new Promise((e) => {
				a.current = e;
			}), (0, A.startTransition)(() => {
				e(), r((e) => e + 1);
			});
		}
	}), []);
	return Ub(() => {
		var e;
		(e = a.current) == null || e.call(a), i.current = null;
	}, [e, n]), (0, A.useImperativeHandle)(t, () => o), null;
})), nx = [void 0, uf];
function rx(e) {
	var t = e, { children: n, onCollision: r, onBeforeDragStart: i, onDragStart: a, onDragMove: o, onDragOver: s, onDragEnd: c } = t, l = $b(t, [
		"children",
		"onCollision",
		"onBeforeDragStart",
		"onDragStart",
		"onDragMove",
		"onDragOver",
		"onDragEnd"
	]);
	let u = (0, A.useRef)(null), { plugins: d, modifiers: f, sensors: p } = l, m = Nh(d, vb.plugins), h = Nh(p, vb.sensors), g = Nh(f, vb.modifiers), _ = qb(i), v = qb(a), y = qb(s), b = qb(o), x = qb(c), S = qb(r), C = ix(() => l.manager ?? new yb(l));
	return (0, A.useEffect)(() => {
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
	}, [C]), Jb(m, () => C && (C.plugins = m), ...nx), Jb(h, () => C && (C.sensors = h), ...nx), Jb(g, () => C && (C.modifiers = g), ...nx), /* @__PURE__ */ (0, B.jsxs)(ex.Provider, {
		value: C,
		children: [/* @__PURE__ */ (0, B.jsx)(tx, {
			ref: u,
			children: n
		}), n]
	});
}
function ix(e) {
	let t = (0, A.useRef)(null);
	return t.current ||= e(), (0, A.useInsertionEffect)(() => () => t.current?.destroy(), []), t.current;
}
function ax() {
	return (0, A.useContext)(ex);
}
function ox(e) {
	let t = ax() ?? void 0, [n] = (0, A.useState)(() => e(t));
	return n.manager !== t && (n.manager = t), Ub(n.register, [t, n]), n;
}
var sx = Object.create, cx = Object.defineProperty, lx = Object.getOwnPropertyDescriptor, ux = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e), dx = (e) => {
	throw TypeError(e);
}, fx = (e, t, n) => t in e ? cx(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, px = (e) => [
	,
	,
	,
	sx(e?.[ux("metadata")] ?? null)
], mx = [
	"class",
	"method",
	"getter",
	"setter",
	"accessor",
	"field",
	"value",
	"get",
	"set"
], hx = (e) => e !== void 0 && typeof e != "function" ? dx("Function expected") : e, gx = (e, t, n, r, i) => ({
	kind: mx[e],
	name: t,
	metadata: r,
	addInitializer: (e) => n._ ? dx("Already initialized") : i.push(hx(e || null))
}), _x = (e, t) => fx(t, ux("metadata"), e[3]), vx = (e, t, n, r) => {
	for (var i = 0, a = e[t >> 1], o = a && a.length; i < o; i++) a[i].call(n);
	return r;
}, yx = (e, t, n, r, i, a) => {
	for (var o, s, c, l, u = t & 7, d = !1, f = !1, p = 2, m = mx[u + 5], h = e[p] || (e[p] = []), g = (i = i.prototype, lx(i, n)), _ = r.length - 1; _ >= 0; _--) c = gx(u, n, s = {}, e[3], h), c.static = d, c.private = f, l = c.access = { has: (e) => n in e }, l.get = (e) => e[n], o = (0, r[_])(g[m], c), s._ = 1, hx(o) && (g[m] = o);
	return g && cx(i, n, g), i;
}, bx = (e, t, n) => t.has(e) || dx("Cannot " + n), xx = (e, t, n) => (bx(e, t, "read from private field"), t.get(e)), Sx = (e, t, n) => t.has(e) ? dx("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), Cx = (e, t, n, r) => (bx(e, t, "write to private field"), t.set(e, n), n), wx = class e {
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
}, Tx, Ex, Dx, Ox, kx, Ax = class extends (Dx = Nf, Ex = [G], Tx = [G], Dx) {
	constructor(e) {
		let t = wx.from(e);
		super(t, (e, t) => wx.equals(e, t)), vx(kx, 5, this), Sx(this, Ox, 0), this.velocity = {
			x: 0,
			y: 0
		};
	}
	get delta() {
		return wx.delta(this.current, this.initial);
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
		let { current: t } = this, n = wx.from(e), r = {
			x: n.x - t.x,
			y: n.y - t.y
		}, i = Date.now(), a = i - xx(this, Ox), o = (e) => Math.round(e / a * 100);
		V(() => {
			Cx(this, Ox, i), this.velocity = {
				x: o(r.x),
				y: o(r.y)
			}, super.current = n;
		});
	}
	reset(e = this.defaultValue) {
		super.reset(wx.from(e)), this.velocity = {
			x: 0,
			y: 0
		};
	}
};
kx = px(Dx), Ox = /* @__PURE__ */ new WeakMap(), yx(kx, 2, "delta", Ex, Ax), yx(kx, 2, "direction", Tx, Ax), _x(kx, Ax);
var jx = /* @__PURE__ */ ((e) => (e.Horizontal = "x", e.Vertical = "y", e))(jx || {});
Object.values(jx);
//#endregion
//#region node_modules/.pnpm/@dnd-kit+dom@0.3.2/node_modules/@dnd-kit/dom/sortable.js
var Mx = Object.create, Nx = Object.defineProperty, Px = Object.defineProperties, Fx = Object.getOwnPropertyDescriptor, Ix = Object.getOwnPropertyDescriptors, Lx = Object.getOwnPropertySymbols, Rx = Object.prototype.hasOwnProperty, zx = Object.prototype.propertyIsEnumerable, Bx = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e), Vx = (e) => {
	throw TypeError(e);
}, Hx = (e, t, n) => t in e ? Nx(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, Ux = (e, t) => {
	for (var n in t ||= {}) Rx.call(t, n) && Hx(e, n, t[n]);
	if (Lx) for (var n of Lx(t)) zx.call(t, n) && Hx(e, n, t[n]);
	return e;
}, Wx = (e, t) => Px(e, Ix(t)), Gx = (e, t) => {
	var n = {};
	for (var r in e) Rx.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && Lx) for (var r of Lx(e)) t.indexOf(r) < 0 && zx.call(e, r) && (n[r] = e[r]);
	return n;
}, Kx = (e) => [
	,
	,
	,
	Mx(null)
], qx = [
	"class",
	"method",
	"getter",
	"setter",
	"accessor",
	"field",
	"value",
	"get",
	"set"
], Jx = (e) => e !== void 0 && typeof e != "function" ? Vx("Function expected") : e, Yx = (e, t, n, r, i) => ({
	kind: qx[e],
	name: t,
	metadata: r,
	addInitializer: (e) => n._ ? Vx("Already initialized") : i.push(Jx(e || null))
}), Xx = (e, t) => Hx(t, Bx("metadata"), e[3]), Zx = (e, t, n, r) => {
	for (var i = 0, a = e[t >> 1], o = a && a.length; i < o; i++) t & 1 ? a[i].call(n) : r = a[i].call(n, r);
	return r;
}, Qx = (e, t, n, r, i, a) => {
	for (var o, s, c, l, u, d = t & 7, f = !1, p = !1, m = e.length + 1, h = qx[d + 5], g = e[m - 1] = [], _ = e[m] || (e[m] = []), v = (i = i.prototype, Fx({
		get [n]() {
			return eS(this, a);
		},
		set [n](e) {
			return nS(this, a, e);
		}
	}, n)), y = r.length - 1; y >= 0; y--) l = Yx(d, n, c = {}, e[3], _), l.static = f, l.private = p, u = l.access = { has: (e) => n in e }, u.get = (e) => e[n], u.set = (e, t) => e[n] = t, s = (0, r[y])({
		get: v.get,
		set: v.set
	}, l), c._ = 1, s === void 0 ? Jx(s) && (v[h] = s) : typeof s != "object" || !s ? Vx("Object expected") : (Jx(o = s.get) && (v.get = o), Jx(o = s.set) && (v.set = o), Jx(o = s.init) && g.unshift(o));
	return v && Nx(i, n, v), i;
}, $x = (e, t, n) => t.has(e) || Vx("Cannot " + n), eS = (e, t, n) => ($x(e, t, "read from private field"), t.get(e)), tS = (e, t, n) => t.has(e) ? Vx("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), nS = (e, t, n, r) => ($x(e, t, "write to private field"), t.set(e, n), n);
function rS(e) {
	return e instanceof RS || e instanceof LS;
}
var iS = 10, aS = class extends Qp {
	constructor(e) {
		super(e);
		let t = Pd(() => {
			let { dragOperation: t } = e;
			if (R_(t.activatorEvent) && rS(t.source) && t.status.initialized) {
				let t = e.registry.plugins.get(Hy);
				if (t) return t.disable(), () => t.enable();
			}
		}), n = e.monitor.addEventListener("dragmove", (e, t) => {
			queueMicrotask(() => {
				if (this.disabled || e.defaultPrevented || !e.nativeEvent) return;
				let { dragOperation: n } = t;
				if (!R_(e.nativeEvent) || !rS(n.source) || !n.shape) return;
				let { actions: r, collisionObserver: i, registry: a } = t, { by: o } = e;
				if (!o) return;
				let s = oS(o), { source: c, target: l } = n, { center: u } = n.shape.current, d = [], f = [];
				V(() => {
					for (let e of a.droppables) {
						let { id: t } = e;
						if (!e.accepts(c) || t === l?.id && rS(e) || !e.element) continue;
						let n = e.shape, r = new N_(e.element, { getBoundingClientRect: (e) => $h(e, void 0, .2) });
						!r.height || !r.width || (s == "down" && u.y + iS < r.center.y || s == "up" && u.y - iS > r.center.y || s == "left" && u.x - iS > r.center.x || s == "right" && u.x + iS < r.center.x) && (d.push(e), e.shape = r, f.push(() => e.shape = n));
					}
				}), e.preventDefault(), i.disable();
				let p = i.computeCollisions(d, q_);
				V(() => f.forEach((e) => e()));
				let [m] = p;
				if (!m) return;
				let { id: h } = m, { index: g, group: _ } = c.sortable;
				r.setDropTarget(h).then(() => {
					let { source: e, target: t, shape: a } = n;
					if (!e || !rS(e) || !a) return;
					let { index: o, group: s, target: c } = e.sortable, l = g !== o || _ !== s, u = l ? c : t?.element;
					if (!u) return;
					C_(u);
					let d = new N_(u);
					if (!d) return;
					let f = lp.delta(d, lp.from(a.current.boundingRectangle), e.alignment);
					r.move({ by: f }), l ? r.setDropTarget(e.id).then(() => i.enable()) : i.enable();
				});
			});
		});
		this.destroy = () => {
			n(), t();
		};
	}
};
function oS(e) {
	let { x: t, y: n } = e;
	if (t > 0) return "right";
	if (t < 0) return "left";
	if (n > 0) return "down";
	if (n < 0) return "up";
}
var sS = Object.defineProperty, cS = Object.defineProperties, lS = Object.getOwnPropertyDescriptors, uS = Object.getOwnPropertySymbols, dS = Object.prototype.hasOwnProperty, fS = Object.prototype.propertyIsEnumerable, pS = (e, t, n) => t in e ? sS(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, mS = (e, t) => {
	for (var n in t ||= {}) dS.call(t, n) && pS(e, n, t[n]);
	if (uS) for (var n of uS(t)) fS.call(t, n) && pS(e, n, t[n]);
	return e;
}, hS = (e, t) => cS(e, lS(t));
function gS(e, t, n) {
	if (t === n) return e;
	let r = e.slice();
	return r.splice(n, 0, r.splice(t, 1)[0]), r;
}
function _S(e) {
	return "initialIndex" in e && typeof e.initialIndex == "number" && "index" in e && typeof e.index == "number";
}
function vS(e, t, n) {
	let { source: r, target: i, canceled: a } = t.operation;
	if (!r || !i || a) return "preventDefault" in t && t.preventDefault(), e;
	let o = (e, t) => e === t || typeof e == "object" && "id" in e && e.id === t;
	if (Array.isArray(e)) {
		let s = e.findIndex((e) => o(e, r.id)), c = e.findIndex((e) => o(e, i.id));
		if (s === -1 || c === -1) {
			if (_S(r)) {
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
	if (c === -1 && _S(r)) {
		let i = r.initialGroup, a = r.initialIndex, o = r.group, s = r.index;
		if (i == null || o == null || !(i in e) || !(o in e) || i === o && a === s) return "preventDefault" in t && t.preventDefault(), e;
		if (i === o) return hS(mS({}, e), { [i]: n(e[i], a, s) });
		let c = e[i][a];
		return hS(mS({}, e), {
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
		if (l != null && l === d && c === u && _S(r)) {
			let t = r.group != null && r.group !== l, i = r.index !== c;
			if (t || i) {
				let t = r.group ?? l;
				if (t in e) {
					if (l === t) return hS(mS({}, e), { [l]: n(e[l], c, r.index) });
					let i = e[l][c];
					return hS(mS({}, e), {
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
	if (l === d) return hS(mS({}, e), { [l]: n(e[l], c, u) });
	let m = i.shape && Math.round(p.y) > Math.round(i.shape.center.y) ? 1 : 0, h = e[l][c];
	return hS(mS({}, e), {
		[l]: [...e[l].slice(0, c), ...e[l].slice(c + 1)],
		[d]: [
			...e[d].slice(0, u + m),
			h,
			...e[d].slice(u + m)
		]
	});
}
function yS(e, t) {
	return vS(e, t, gS);
}
var bS = "__default__", xS = class extends Qp {
	constructor(e) {
		super(e);
		let t = () => {
			let t = /* @__PURE__ */ new Map();
			for (let n of e.registry.droppables) if (n instanceof RS) {
				let { sortable: e } = n, { group: r } = e, i = t.get(r);
				i || (i = /* @__PURE__ */ new Set(), t.set(r, i)), i.add(e);
			}
			for (let [e, n] of t) t.set(e, new Set(wS(n)));
			return t;
		}, n = [e.monitor.addEventListener("dragover", (e, n) => {
			if (this.disabled) return;
			let { dragOperation: r } = n, { source: i, target: a } = r;
			if (!rS(i) || !rS(a) || i.sortable === a.sortable) return;
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
					let f = wS(c), p = s ? f : wS(l), m = i.sortable.group ?? bS, h = a.sortable.group ?? bS, g = {
						[m]: f,
						[h]: p
					}, _ = yS(g, e);
					if (g === _) return;
					let v = _[h].indexOf(i.sortable), y = _[h].indexOf(a.sortable);
					n.collisionObserver.disable(), SS(u, v, d, y), V(() => {
						for (let [e, t] of _[m].entries()) t.index = e;
						if (!s) for (let [e, t] of _[h].entries()) t.group = a.sortable.group, t.index = e;
					}), n.actions.setDropTarget(i.id).then(() => n.collisionObserver.enable());
				});
			});
		}), e.monitor.addEventListener("dragend", (e, n) => {
			if (!e.canceled) return;
			let { dragOperation: r } = n, { source: i } = r;
			rS(i) && (i.sortable.initialIndex === i.sortable.index && i.sortable.initialGroup === i.sortable.group || queueMicrotask(() => {
				let e = t(), r = e.get(i.sortable.initialGroup);
				r && n.renderer.rendering.then(() => {
					for (let [t, n] of e.entries()) {
						let e = Array.from(n).entries();
						for (let [n, r] of e) if (r.index !== n || r.group !== t) return;
					}
					let t = wS(r), n = i.sortable.element, a = t[i.sortable.initialIndex], o = a?.element;
					!a || !o || !n || (SS(n, a.index, o, i.index), V(() => {
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
function SS(e, t, n, r) {
	let i = r < t ? "afterend" : "beforebegin";
	n.insertAdjacentElement(i, e);
}
function CS(e, t) {
	return e.index - t.index;
}
function wS(e) {
	return Array.from(e).sort(CS);
}
var TS = [aS, xS], ES = {
	duration: 250,
	easing: "cubic-bezier(0.25, 1, 0.5, 1)",
	idle: !1
}, DS = new If(), OS, kS = [W], AS, jS, MS, NS, PS, FS;
OS = [W];
var IS = class {
	constructor(e, t) {
		tS(this, jS, Zx(AS, 8, this)), Zx(AS, 11, this), tS(this, MS), tS(this, NS), tS(this, PS, Zx(AS, 12, this)), Zx(AS, 15, this), tS(this, FS), this.register = () => (V(() => {
			var e, t;
			(e = this.manager) == null || e.registry.register(this.droppable), (t = this.manager) == null || t.registry.register(this.draggable);
		}), () => this.unregister()), this.unregister = () => {
			V(() => {
				var e, t;
				(e = this.manager) == null || e.registry.unregister(this.droppable), (t = this.manager) == null || t.registry.unregister(this.draggable);
			});
		}, this.destroy = () => {
			V(() => {
				this.droppable.destroy(), this.draggable.destroy();
			});
		};
		var n = e, { effects: r = () => [], group: i, index: a, sensors: o, type: s, transition: c = ES, plugins: l = TS } = n, u = Gx(n, [
			"effects",
			"group",
			"index",
			"sensors",
			"type",
			"transition",
			"plugins"
		]);
		this.droppable = new RS(u, t, this), this.draggable = new LS(Wx(Ux({}, u), {
			effects: () => [
				() => {
					let e = this.manager?.dragOperation.status;
					e?.initializing && this.id === this.manager?.dragOperation.source?.id && DS.clear(this.manager), e?.dragging && DS.set(this.manager, this.id, U(() => ({
						initialIndex: this.index,
						initialGroup: this.group
					})));
				},
				() => {
					let { index: e, group: t, manager: n } = this, r = eS(this, NS), i = eS(this, MS);
					(e !== r || t !== i) && (nS(this, NS, e), nS(this, MS, t), this.animate());
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
		}), t, this), nS(this, FS, u.element), this.manager = t, this.index = a, nS(this, NS, a), this.group = i, nS(this, MS, i), this.type = s, this.transition = c;
	}
	get initialIndex() {
		return DS.get(this.manager, this.id)?.initialIndex ?? this.index;
	}
	get initialGroup() {
		return DS.get(this.manager, this.id)?.initialGroup ?? this.group;
	}
	animate() {
		U(() => {
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
				}, { translate: o } = a_(r), s = D_(r, o, !1), c = D_(r, o);
				if (a.x || a.y) {
					let n = sg(Gh(r)) ? Wx(Ux({}, t), { duration: 0 }) : t;
					E_({
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
		V(() => {
			this.draggable.manager = e, this.droppable.manager = e;
		});
	}
	set element(e) {
		V(() => {
			let t = eS(this, FS), n = this.droppable.element, r = this.draggable.element;
			(!n || n === t) && (this.droppable.element = e), (!r || r === t) && (this.draggable.element = e), nS(this, FS, e);
		});
	}
	get element() {
		let e = eS(this, FS);
		if (e) return pg.get(e) ?? e ?? this.droppable.element;
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
		V(() => {
			this.droppable.disabled = e, this.draggable.disabled = e;
		});
	}
	set data(e) {
		V(() => {
			this.droppable.data = e, this.draggable.data = e;
		});
	}
	set handle(e) {
		this.draggable.handle = e;
	}
	set id(e) {
		V(() => {
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
		this.droppable.collisionDetector = e ?? K_;
	}
	set alignment(e) {
		this.draggable.alignment = e;
	}
	get alignment() {
		return this.draggable.alignment;
	}
	set type(e) {
		V(() => {
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
AS = Kx(), jS = /* @__PURE__ */ new WeakMap(), MS = /* @__PURE__ */ new WeakMap(), NS = /* @__PURE__ */ new WeakMap(), PS = /* @__PURE__ */ new WeakMap(), FS = /* @__PURE__ */ new WeakMap(), Qx(AS, 4, "index", kS, IS, jS), Qx(AS, 4, "group", OS, IS, PS), Xx(AS, IS);
var LS = class extends Ob {
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
}, RS = class extends zb {
	constructor(e, t, n) {
		super(e, t), this.sortable = n;
	}
	get index() {
		return this.sortable.index;
	}
	get group() {
		return this.sortable.group;
	}
}, zS = Object.defineProperty, BS = Object.defineProperties, VS = Object.getOwnPropertyDescriptors, HS = Object.getOwnPropertySymbols, US = Object.prototype.hasOwnProperty, WS = Object.prototype.propertyIsEnumerable, GS = (e, t, n) => t in e ? zS(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, KS = (e, t) => {
	for (var n in t ||= {}) US.call(t, n) && GS(e, n, t[n]);
	if (HS) for (var n of HS(t)) WS.call(t, n) && GS(e, n, t[n]);
	return e;
}, qS = (e, t) => BS(e, VS(t));
function JS(e) {
	let { accept: t, collisionDetector: n, collisionPriority: r, id: i, data: a, element: o, handle: s, index: c, group: l, disabled: u, feedback: d, modifiers: f, sensors: p, target: m, type: h } = e, g = KS(KS({}, ES), e.transition), _ = ox((t) => new IS(qS(KS({}, e), {
		transition: g,
		register: !1,
		handle: Hb(s),
		element: Hb(o),
		target: Hb(m),
		feedback: d
	}), t)), v = Gb(_, YS);
	return Jb(i, () => _.id = i), Ub(() => {
		V(() => {
			_.group = l, _.index = c;
		});
	}, [
		_,
		l,
		c
	]), Jb(h, () => _.type = h), Jb(t, () => _.accept = t, void 0, uf), Jb(a, () => a && (_.data = a)), Jb(c, () => {
		_.manager?.dragOperation.status.idle && g?.idle && _.refreshShape();
	}, Kb), Yb(s, (e) => _.handle = e), Yb(o, (e) => _.element = e), Yb(m, (e) => _.target = e), Jb(u, () => _.disabled = u === !0), Jb(p, () => _.sensors = p), Jb(n, () => _.collisionDetector = n), Jb(r, () => _.collisionPriority = r), Jb(d, () => _.feedback = d ?? "default"), Jb(g, () => _.transition = g, void 0, uf), Jb(f, () => _.modifiers = f, void 0, uf), Jb(e.alignment, () => _.alignment = e.alignment), {
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
		handleRef: (0, A.useCallback)((e) => {
			_.handle = e ?? void 0;
		}, [_]),
		ref: (0, A.useCallback)((e) => {
			!e && _.element?.isConnected && !_.manager?.dragOperation.status.idle || (_.element = e ?? void 0);
		}, [_]),
		sourceRef: (0, A.useCallback)((e) => {
			!e && _.source?.isConnected && !_.manager?.dragOperation.status.idle || (_.source = e ?? void 0);
		}, [_]),
		targetRef: (0, A.useCallback)((e) => {
			!e && _.target?.isConnected && !_.manager?.dragOperation.status.idle || (_.target = e ?? void 0);
		}, [_])
	};
}
function YS(e, t, n) {
	return !!(e === "isDragSource" && !n && t);
}
function XS(e, t) {
	let { source: n, target: r, canceled: i } = t.operation;
	if (!n || !r || i) return e;
	let { initialIndex: a, index: o } = n;
	if (a === o || a < 0 || a >= e.length) return e;
	let s = [...e], [c] = s.splice(a, 1);
	return s.splice(o, 0, c), s;
}
var ZS = () => ({
	value: "",
	feedback: "",
	type: "Incorrect"
}), QS = () => ({
	heading: "",
	description: "",
	instructionTitle: "What you need to do",
	instructionDescription: "",
	prompt: "",
	options: Array.from({ length: 3 }, ZS)
});
//#endregion
//#region src/unfolding-scenario-block/studio-ui/components/EditorSidebar.tsx
function $S({ section: e, label: t, active: n, hasError: r, onSelect: i }) {
	return /* @__PURE__ */ (0, B.jsxs)("div", {
		className: `us-editor-nav-item${n ? " us-editor-nav-item--active" : ""}`,
		children: [/* @__PURE__ */ (0, B.jsx)("button", {
			type: "button",
			className: "us-editor-nav-link",
			"aria-current": n ? "true" : "false",
			onClick: () => i(e),
			children: t
		}), r && /* @__PURE__ */ (0, B.jsx)(ae, {
			className: "us-editor-error-badge text-danger",
			src: zn,
			"aria-hidden": "true"
		})]
	});
}
function eC({ index: e, active: t, hasError: n, canDelete: r, onSelect: i, onDelete: a }) {
	let { ref: o } = JS({
		id: e,
		index: e
	}), s = `scenario:${e}`;
	return /* @__PURE__ */ (0, B.jsxs)("div", {
		className: `us-editor-nav-item${t ? " us-editor-nav-item--active" : ""}`,
		children: [
			/* @__PURE__ */ (0, B.jsx)(te, {
				ref: o,
				alt: `Reorder scenario ${e + 1}`,
				className: "us-editor-drag-handle",
				size: "sm",
				src: Ln
			}),
			/* @__PURE__ */ (0, B.jsxs)("button", {
				type: "button",
				className: "us-editor-nav-link",
				"aria-current": t ? "true" : "false",
				onClick: () => i(s),
				children: ["Scenario ", e + 1]
			}),
			r && /* @__PURE__ */ (0, B.jsx)(te, {
				alt: `Delete scenario ${e + 1}`,
				className: "us-editor-nav-delete",
				size: "sm",
				src: In,
				onClick: a
			}),
			n && /* @__PURE__ */ (0, B.jsx)(ae, {
				className: "us-editor-error-badge text-danger",
				src: zn,
				"aria-hidden": "true"
			})
		]
	});
}
function tC({ activeSection: e, onSelect: t, errorSections: n = {} }) {
	let { values: r, setFieldValue: i } = Mu(), a = r.scenarioData.scenarios;
	return /* @__PURE__ */ (0, B.jsxs)("nav", {
		className: "us-editor-sidebar",
		"aria-label": "Editor sections",
		children: [
			/* @__PURE__ */ (0, B.jsx)($S, {
				section: "setup",
				label: "Setup",
				active: e === "setup",
				hasError: !!n.setup,
				onSelect: t
			}),
			/* @__PURE__ */ (0, B.jsx)($S, {
				section: "introduction",
				label: "Introduction",
				active: e === "introduction",
				hasError: !!n.introduction,
				onSelect: t
			}),
			/* @__PURE__ */ (0, B.jsx)(rx, {
				onDragOver: (e) => i("scenarioData.scenarios", XS(r.scenarioData.scenarios, e)),
				children: /* @__PURE__ */ (0, B.jsx)(ud, {
					name: "scenarioData.scenarios",
					children: ({ push: r, remove: i }) => /* @__PURE__ */ (0, B.jsxs)(B.Fragment, { children: [a.map((r, o) => /* @__PURE__ */ (0, B.jsx)(eC, {
						index: o,
						active: e === `scenario:${o}`,
						hasError: !!n[`scenario:${o}`],
						canDelete: a.length > 1,
						onSelect: () => t(`scenario:${o}`),
						onDelete: () => i(o)
					}, o)), a.length < 5 && /* @__PURE__ */ (0, B.jsxs)("button", {
						type: "button",
						className: "us-editor-add-scenario",
						onClick: () => r(QS()),
						children: [
							/* @__PURE__ */ (0, B.jsx)(ae, {
								src: Nn,
								"aria-hidden": "true"
							}),
							"Add scenario (max ",
							5,
							")"
						]
					})] })
				})
			}),
			/* @__PURE__ */ (0, B.jsx)($S, {
				section: "outcome",
				label: "Outcome",
				active: e === "outcome",
				hasError: !!n.outcome,
				onSelect: t
			})
		]
	});
}
//#endregion
//#region src/unfolding-scenario-block/studio-ui/components/StudioFooter.tsx
function nC({ onCancel: e }) {
	return /* @__PURE__ */ (0, B.jsx)(Gi.Footer, {
		className: "us-editor-footer",
		children: /* @__PURE__ */ (0, B.jsxs)(ue, { children: [
			/* @__PURE__ */ (0, B.jsx)(ue.Spacer, {}),
			/* @__PURE__ */ (0, B.jsx)(D, {
				variant: "tertiary",
				type: "button",
				onClick: e,
				children: "Cancel"
			}),
			/* @__PURE__ */ (0, B.jsx)(D, {
				variant: "primary",
				type: "submit",
				children: "Save"
			})
		] })
	});
}
//#endregion
//#region src/unfolding-scenario-block/studio-ui/StudioUI.tsx
function rC({ onCancel: e }) {
	let [t, n] = (0, A.useState)("setup"), { values: r, setFieldValue: i } = Mu(), a = r.scenarioData.scenarios, o = t.startsWith("scenario:") && Number(t.slice(9)) >= a.length ? a.length > 0 ? `scenario:${a.length - 1}` : "introduction" : t, s = "";
	return o === "setup" ? s = "Setup" : o === "introduction" ? s = "Introduction" : o === "outcome" ? s = "Outcome" : o.startsWith("scenario:") && (s = `Scenario ${Number(o.slice(9)) + 1}`), /* @__PURE__ */ (0, B.jsx)(td, { children: /* @__PURE__ */ (0, B.jsxs)("div", {
		className: "us-editor",
		children: [
			/* @__PURE__ */ (0, B.jsx)(dd, {
				title: r.displayName,
				onTitleChange: (e) => i("displayName", e),
				showEditingPrefix: !1,
				onClose: e
			}),
			/* @__PURE__ */ (0, B.jsxs)(Gi.Body, {
				className: "us-editor-body",
				children: [/* @__PURE__ */ (0, B.jsx)(tC, {
					activeSection: o,
					onSelect: n
				}), /* @__PURE__ */ (0, B.jsx)("div", {
					className: "us-editor-panel",
					children: /* @__PURE__ */ (0, B.jsx)("h4", { children: s })
				})]
			}),
			/* @__PURE__ */ (0, B.jsx)(nC, { onCancel: e })
		]
	}) });
}
function iC({ initialData: e, onSave: t, onCancel: n }) {
	return /* @__PURE__ */ (0, B.jsx)(Ku, {
		initialValues: e,
		onSubmit: t,
		children: /* @__PURE__ */ (0, B.jsx)(rC, { onCancel: n })
	});
}
//#endregion
//#region src/unfolding-scenario-block/studio-ui/main.scss?inline
var aC = ".pgn__modal-header.studio-header{padding:calc(var(--pgn-spacing-modal-inner-padding-base) / 2) var(--pgn-spacing-modal-header-padding-base-x);z-index:1}.studio-header-title{align-items:center;gap:var(--pgn-spacing-spacer-2,8px);display:flex}.studio-header-tabs-nav{flex-wrap:nowrap;padding-right:64px}.studio-header-close{margin-right:64px}.studio-header-tabs-nav .nav-link{appearance:none;font-family:inherit;font-size:inherit;line-height:inherit;cursor:pointer;background-color:#0000}.wrapper.xblock-iframe-content .xblock-v1-studio_view{display:flex}.xblock-root,.xblock-root .react-studio-block,.xblock-root .react-studio-block .container-fluid{height:100%}.react-studio-block{flex-grow:1}.react-studio-block *,.react-studio-block :before,.react-studio-block :after{box-sizing:border-box}.react-studio-block{margin-bottom:0!important}.xblock-actions{border-top:1px solid var(--pgn-color-gray-200);background:var(--pgn-color-white);z-index:1;justify-content:flex-end;gap:.5em;padding:.75em 1em;display:flex;position:sticky;bottom:0;box-shadow:0 -2px 6px #0000000d}.react-colorful{-webkit-user-select:none;user-select:none;cursor:default;flex-direction:column;width:200px;height:200px;display:flex;position:relative}.react-colorful__saturation{background-image:linear-gradient(#0000,#000),linear-gradient(90deg,#fff,#fff0);border-color:#0000 #0000 #000;border-bottom-style:solid;border-bottom-width:12px;border-radius:8px 8px 0 0;flex-grow:1;position:relative}.react-colorful__pointer-fill,.react-colorful__alpha-gradient{content:\"\";pointer-events:none;border-radius:inherit;position:absolute;inset:0}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px #0000000d}.react-colorful__hue,.react-colorful__alpha{height:24px;position:relative}.react-colorful__hue{background:linear-gradient(90deg,red 0%,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red 100%)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{border-radius:inherit;touch-action:none;outline:none;position:absolute;inset:0}.react-colorful__pointer{z-index:1;box-sizing:border-box;background-color:#fff;border:2px solid #fff;border-radius:50%;width:28px;height:28px;position:absolute;transform:translate(-50%,-50%);box-shadow:0 2px 4px #0003}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%)scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url(\"data:image/svg+xml,<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" width=\\\"16\\\" height=\\\"16\\\" fill-opacity=\\\".05\\\"><rect x=\\\"8\\\" width=\\\"8\\\" height=\\\"8\\\"/><rect y=\\\"8\\\" width=\\\"8\\\" height=\\\"8\\\"/></svg>\")}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}.edit-xblock-modal>.modal-actions{display:none!important}.us-editor{--us-editor-sidebar-width:240px;--us-panel-padding:var(--pgn-spacing-spacer-4-5,32px);flex-direction:column;min-height:600px;display:flex}.us-editor-body{grid-template-columns:var(--us-editor-sidebar-width) minmax(0, 1fr);flex:auto;padding:0;display:grid;overflow:hidden}.us-editor-sidebar{gap:var(--pgn-spacing-spacer-2,8px);padding:var(--pgn-spacing-spacer-3,16px);border-right:1px solid var(--pgn-color-light-300);background-color:var(--pgn-color-light-100);flex-direction:column;display:flex;overflow-y:auto}.us-editor-nav-item{align-items:center;gap:var(--pgn-spacing-spacer-2,8px);min-height:40px;padding:var(--pgn-spacing-spacer-2,8px);border-radius:var(--pgn-size-radius-xs,8px);display:flex}.us-editor-nav-item--active{background-color:var(--pgn-color-light-300)}.us-editor-nav-link{text-align:left;min-width:0;font:inherit;cursor:pointer;background:0 0;border:0;flex:auto;padding:0}.us-editor-drag-handle{color:var(--pgn-color-gray-500);flex:none}.us-editor-error-badge{flex:none}.us-editor-add-scenario{align-items:center;gap:var(--pgn-spacing-spacer-2,8px);min-height:40px;padding:var(--pgn-spacing-spacer-2,8px);font:inherit;cursor:pointer;background:0 0;border:0;display:flex}.us-editor-panel{padding:var(--us-panel-padding);overflow-y:auto}", oC = (0, A.createContext)(null), sC = (e, t, n) => {
	let r = f(t), i = e.handlerUrl(r, "studio_save");
	u({
		runtime: e,
		element: t,
		config: n.config,
		styles: aC
	})(/* @__PURE__ */ (0, B.jsx)(oC.Provider, {
		value: n.config,
		children: /* @__PURE__ */ (0, B.jsx)(iC, {
			initialData: n.data,
			onSave: (t) => {
				a({
					saveUrl: i,
					data: t,
					runtime: e,
					errorMessage: (e) => `Failed to save unfolding scenario block: ${e.responseJSON.error}`
				});
			},
			onCancel: () => e.notify("cancel", {})
		})
	}));
};
//#endregion
export { sC as renderBlock };
