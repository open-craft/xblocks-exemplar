import { n as e, t } from "./rolldown-runtime-CYdcPHCu.js";
import { $ as n, A as r, B as i, C as a, D as o, E as s, F as c, G as l, H as u, I as d, J as f, K as p, L as m, M as h, N as g, O as _, P as v, Q as y, R as b, S as x, T as S, U as C, V as w, W as T, X as E, Y as D, Z as O, _ as k, a as A, at as j, b as ee, c as te, d as M, et as N, f as P, g as ne, h as re, i as ie, it as ae, j as oe, k as se, l as ce, m as le, n as ue, nt as de, o as fe, ot as pe, p as me, q as he, r as ge, rt as _e, s as ve, st as ye, t as be, tt as xe, u as Se, v as Ce, w as we, x as Te, y as Ee, z as F } from "./Stack-CqkK04yD.js";
// node_modules/.pnpm/react-intl@6.8.9_react@18.3.1_typescript@5.9.3/node_modules/react-intl/lib/src/components/message.js
var I = /* @__PURE__ */ e(ye());
function De(e, t) {
	var n = e.values, r = _e(e, ["values"]), i = t.values, a = _e(t, ["values"]);
	return y(i, n) && y(r, a);
}
function Oe(e) {
	var t = E(), n = t.formatMessage, r = t.textComponent, i = r === void 0 ? I.Fragment : r, a = e.id, o = e.description, s = e.defaultMessage, c = e.values, l = e.children, u = e.tagName, d = u === void 0 ? i : u, f = e.ignoreTag, p = n({
		id: a,
		description: o,
		defaultMessage: s
	}, c, { ignoreTag: f });
	return typeof l == "function" ? l(Array.isArray(p) ? p : [p]) : d ? I.createElement(d, null, I.Children.toArray(p)) : I.createElement(I.Fragment, null, p);
}
Oe.displayName = "FormattedMessage";
var ke = I.memo(Oe, De);
ke.displayName = "MemoizedFormattedMessage";
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/ActionRow/index.js
var Ae = /* @__PURE__ */ e(pe()), je = /* @__PURE__ */ e(O()), L = f(), R = /* @__PURE__ */ e(w());
function Me({ as: e = "div", isStacked: t = !1, children: n, ...r }) {
	return /*#__PURE__*/ I.createElement(e, {
		...r,
		className: (0, R.default)(r.className, {
			"pgn__action-row": !t,
			"pgn__action-row-stacked": t
		})
	}, n);
}
function Ne() {
	return /*#__PURE__*/ I.createElement("span", { className: "pgn__action-row-spacer" });
}
Me.Spacer = Ne;
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/SelectableContext.js
var Pe = /*#__PURE__*/ I.createContext(null), Fe = function(e, t) {
	return t === void 0 && (t = null), e == null ? t || null : String(e);
}, z = /* @__PURE__ */ e(g()), Ie = [
	"label",
	"onClick",
	"className"
], Le = {
	label: z.default.string.isRequired,
	onClick: z.default.func
}, Re = { label: "Close" }, ze = /*#__PURE__*/ I.forwardRef(function(e, t) {
	var n = e.label, r = e.onClick, a = e.className, o = F(e, Ie);
	return /*#__PURE__*/ I.createElement("button", i({
		ref: t,
		type: "button",
		className: (0, R.default)("close", a),
		onClick: r
	}, o), /*#__PURE__*/ I.createElement("span", { "aria-hidden": "true" }, "×"), /*#__PURE__*/ I.createElement("span", { className: "sr-only" }, n));
});
ze.displayName = "CloseButton", ze.propTypes = Le, ze.defaultProps = Re;
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/divWithClassName.js
var Be = (function(e) {
	return /*#__PURE__*/ I.forwardRef(function(t, n) {
		return /*#__PURE__*/ I.createElement("div", i({}, t, {
			ref: n,
			className: (0, R.default)(t.className, e)
		}));
	});
}), Ve = /-(.)/g;
function He(e) {
	return e.replace(Ve, function(e, t) {
		return t.toUpperCase();
	});
}
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/createWithBsPrefix.js
var Ue = [
	"className",
	"bsPrefix",
	"as"
], We = function(e) {
	return e[0].toUpperCase() + He(e).slice(1);
};
function Ge(e, t) {
	var n = t === void 0 ? {} : t, r = n.displayName, a = r === void 0 ? We(e) : r, o = n.Component, s = n.defaultProps, c = /*#__PURE__*/ I.forwardRef(function(t, n) {
		var r = t.className, a = t.bsPrefix, s = t.as, c = s === void 0 ? o || "div" : s, l = F(t, Ue), u = v(a, e);
		return /*#__PURE__*/ I.createElement(c, i({
			ref: n,
			className: (0, R.default)(r, u)
		}, l));
	});
	return c.defaultProps = s, c.displayName = a, c;
}
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Alert.js
var Ke = [
	"bsPrefix",
	"show",
	"closeLabel",
	"className",
	"children",
	"variant",
	"onClose",
	"dismissible",
	"transition"
], qe = Be("h4");
qe.displayName = "DivStyledAsH4";
var Je = Ge("alert-heading", { Component: qe }), Ye = Ge("alert-link", { Component: se }), Xe = {
	show: !0,
	transition: r,
	closeLabel: "Close alert"
}, Ze = /*#__PURE__*/ I.forwardRef(function(e, t) {
	var n = d(e, { show: "onClose" }), a = n.bsPrefix, o = n.show, s = n.closeLabel, c = n.className, l = n.children, u = n.variant, f = n.onClose, p = n.dismissible, m = n.transition, h = F(n, Ke), g = v(a, "alert"), _ = oe(function(e) {
		f && f(!1, e);
	}), y = m === !0 ? r : m, b = /*#__PURE__*/ I.createElement("div", i({ role: "alert" }, y ? void 0 : h, {
		ref: t,
		className: (0, R.default)(c, g, u && g + "-" + u, p && g + "-dismissible")
	}), p && /*#__PURE__*/ I.createElement(ze, {
		onClick: _,
		label: s
	}), l);
	return y ? /*#__PURE__*/ I.createElement(y, i({ unmountOnExit: !0 }, h, {
		ref: void 0,
		in: o
	}), b) : o ? b : null;
});
Ze.displayName = "Alert", Ze.defaultProps = Xe, Ze.Link = Ye, Ze.Heading = Je;
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/CardContext.js
var Qe = /*#__PURE__*/ I.createContext(null);
Qe.displayName = "CardContext";
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/ElementChildren.js
function $e(e, t) {
	var n = 0;
	return I.Children.map(e, function(e) {
		return /*#__PURE__*/ I.isValidElement(e) ? t(e, n++) : e;
	});
}
// node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/matches.js
var et;
function tt(e, t) {
	if (!et) {
		var n = document.body, r = n.matches || n.matchesSelector || n.webkitMatchesSelector || n.mozMatchesSelector || n.msMatchesSelector;
		et = function(e, t) {
			return r.call(e, t);
		};
	}
	return et(e, t);
}
// node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/querySelectorAll.js
var nt = Function.prototype.bind.call(Function.prototype.call, [].slice);
function rt(e, t) {
	return nt(e.querySelectorAll(t));
}
// node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/usePrevious.js
function it(e) {
	let t = (0, I.useRef)(null);
	return (0, I.useEffect)(() => {
		t.current = e;
	}), t.current;
}
// node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useForceUpdate.js
function at() {
	let [, e] = (0, I.useReducer)((e) => !e, !1);
	return e;
}
// node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useEventListener.js
function ot(e, t, n, r = !1) {
	let i = oe(n);
	(0, I.useEffect)(() => {
		let n = typeof e == "function" ? e() : e;
		return n.addEventListener(t, i, r), () => n.removeEventListener(t, i, r);
	}, [e]);
}
// node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useGlobalListener.js
function st(e, t, n = !1) {
	return ot((0, I.useCallback)(() => document, []), e, t, n);
}
// node_modules/.pnpm/react-overlays@5.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-overlays/esm/DropdownContext.js
var ct = /*#__PURE__*/ I.createContext(null), lt = function() {};
function ut(e) {
	e === void 0 && (e = {});
	var t = (0, I.useContext)(ct), n = s(), r = n[0], a = n[1], o = (0, I.useRef)(!1), c = e, l = c.flip, u = c.offset, d = c.rootCloseEvent, f = c.fixed, p = f !== void 0 && f, m = c.popperConfig, h = m === void 0 ? {} : m, g = c.usePopper, _ = g === void 0 ? !!t : g, v = t?.show == null ? !!e.show : t.show, y = t?.alignEnd == null ? e.alignEnd : t.alignEnd;
	v && !o.current && (o.current = !0);
	var b = function(e) {
		t?.toggle(!1, e);
	}, x = t || {}, S = x.drop, C = x.setMenu, w = x.menuElement, T = x.toggleElement, E = y ? "bottom-end" : "bottom-start";
	S === "up" ? E = y ? "top-end" : "top-start" : S === "right" ? E = y ? "right-end" : "right-start" : S === "left" && (E = y ? "left-end" : "left-start");
	var D = le(T, w, M({
		placement: E,
		enabled: !!(_ && v),
		enableEvents: v,
		offset: u,
		flip: l,
		fixed: p,
		arrowElement: r,
		popperConfig: h
	})), O = i({
		ref: C || lt,
		"aria-labelledby": T?.id
	}, D.attributes.popper, { style: D.styles.popper }), k = {
		show: v,
		alignEnd: y,
		hasShown: o.current,
		toggle: t?.toggle,
		popper: _ ? D : null,
		arrowProps: _ ? i({ ref: a }, D.attributes.arrow, { style: D.styles.arrow }) : {}
	};
	return P(w, b, {
		clickTrigger: d,
		disabled: !v
	}), [O, k];
}
var dt = {
	children: z.default.func.isRequired,
	show: z.default.bool,
	alignEnd: z.default.bool,
	flip: z.default.bool,
	usePopper: z.default.oneOf([!0, !1]),
	popperConfig: z.default.object,
	rootCloseEvent: z.default.string
}, ft = { usePopper: !0 };
function pt(e) {
	var t = e.children, n = ut(F(e, ["children"])), r = n[0], i = n[1];
	return /*#__PURE__*/ I.createElement(I.Fragment, null, i.hasShown ? t(r, i) : null);
}
pt.displayName = "ReactOverlaysDropdownMenu", pt.propTypes = dt, pt.defaultProps = ft;
// node_modules/.pnpm/react-overlays@5.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-overlays/esm/DropdownToggle.js
var mt = function() {};
function ht() {
	var e = (0, I.useContext)(ct) || {}, t = e.show, n = t !== void 0 && t, r = e.toggle, i = r === void 0 ? mt : r, a = e.setToggle, o = (0, I.useCallback)(function(e) {
		i(!n, e);
	}, [n, i]);
	return [{
		ref: a || mt,
		onClick: o,
		"aria-haspopup": !0,
		"aria-expanded": !!n
	}, {
		show: n,
		toggle: i
	}];
}
var gt = { children: z.default.func.isRequired };
function _t(e) {
	var t = e.children, n = ht(), r = n[0], i = n[1];
	return /*#__PURE__*/ I.createElement(I.Fragment, null, t(r, i));
}
_t.displayName = "ReactOverlaysDropdownToggle", _t.propTypes = gt;
// node_modules/.pnpm/react-overlays@5.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-overlays/esm/Dropdown.js
var vt = {
	children: z.default.node,
	drop: z.default.oneOf([
		"up",
		"left",
		"right",
		"down"
	]),
	focusFirstItemOnShow: z.default.oneOf([
		!1,
		!0,
		"keyboard"
	]),
	itemSelector: z.default.string,
	alignEnd: z.default.bool,
	show: z.default.bool,
	defaultShow: z.default.bool,
	onToggle: z.default.func
};
function yt() {
	var e = at(), t = (0, I.useRef)(null);
	return [t, (0, I.useCallback)(function(n) {
		t.current = n, e();
	}, [e])];
}
function bt(e) {
	var t = e.drop, n = e.alignEnd, r = e.defaultShow, i = e.show, a = e.onToggle, o = e.itemSelector, s = o === void 0 ? "* > *" : o, c = e.focusFirstItemOnShow, l = e.children, u = m(i, r, a), d = u[0], f = u[1], p = yt(), g = p[0], _ = p[1], v = g.current, y = yt(), b = y[0], x = y[1], S = b.current, C = it(d), w = (0, I.useRef)(null), T = (0, I.useRef)(!1), E = (0, I.useCallback)(function(e, t) {
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
	var O = oe(function() {
		S && S.focus && S.focus();
	}), k = oe(function() {
		var e = w.current, t = c;
		if (t ??= g.current && tt(g.current, "[role=menu]") ? "keyboard" : !1, !(t === !1 || t === "keyboard" && !/^key.+$/.test(e))) {
			var n = rt(g.current, s)[0];
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
		if (!g.current) return null;
		var n = rt(g.current, s), r = n.indexOf(e) + t;
		return r = Math.max(0, Math.min(r, n.length)), n[r];
	};
	return st("keydown", function(e) {
		var t = e.key, n = e.target, r = g.current?.contains(n), i = b.current?.contains(n);
		if (!(/input|textarea/i.test(n.tagName) && (t === " " || t !== "Escape" && r)) && (r || i) && (g.current || t !== "Tab")) switch (w.current = e.type, t) {
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
				h(document, "keyup", function(t) {
					var n;
					(t.key === "Tab" && !t.target || !((n = g.current) != null && n.contains(t.target))) && f(!1, e);
				}, { once: !0 });
				break;
			case "Escape": e.preventDefault(), e.stopPropagation(), f(!1, e);
		}
	}), /*#__PURE__*/ I.createElement(ct.Provider, { value: D }, l);
}
bt.displayName = "ReactOverlaysDropdown", bt.propTypes = vt, bt.Menu = pt, bt.Toggle = _t;
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/NavContext.js
var xt = /*#__PURE__*/ I.createContext(null);
xt.displayName = "NavContext";
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/DropdownItem.js
var St = [
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
], Ct = {
	as: se,
	disabled: !1
}, wt = /*#__PURE__*/ I.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.className, a = e.children, o = e.eventKey, s = e.disabled, c = e.href, l = e.onClick, u = e.onSelect, d = e.active, f = e.as, p = F(e, St), m = v(n, "dropdown-item"), h = (0, I.useContext)(Pe), g = ((0, I.useContext)(xt) || {}).activeKey, _ = Fe(o, c), y = d == null && _ != null ? Fe(g) === _ : d, b = oe(function(e) {
		s || (l && l(e), h && h(_, e), u && u(_, e));
	});
	return /*#__PURE__*/ I.createElement(f, i({}, p, {
		ref: t,
		href: c,
		disabled: s,
		className: (0, R.default)(r, m, y && "active", s && "disabled"),
		onClick: b
	}), a);
});
wt.displayName = "DropdownItem", wt.defaultProps = Ct;
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/NavbarContext.js
var Tt = /*#__PURE__*/ I.createContext(null);
Tt.displayName = "NavbarContext", b();
function Et(e, t) {
	return e;
}
me();
var Dt = [
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
], Ot = z.default.oneOf(["left", "right"]);
z.default.oneOfType([
	Ot,
	z.default.shape({ sm: Ot }),
	z.default.shape({ md: Ot }),
	z.default.shape({ lg: Ot }),
	z.default.shape({ xl: Ot })
]);
var kt = {
	align: "left",
	alignRight: !1,
	flip: !0
}, At = /*#__PURE__*/ I.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.className, a = e.align, o = e.alignRight, s = e.rootCloseEvent, c = e.flip, l = e.show, u = e.renderOnMount, d = e.as, f = d === void 0 ? "div" : d, p = e.popperConfig, m = F(e, Dt), h = (0, I.useContext)(Tt), g = v(n, "dropdown-menu"), _ = ce(), y = _[0], b = _[1], x = [];
	if (a) {
		if (typeof a == "object") {
			var S = Object.keys(a);
			if (S.length) {
				var C = S[0], w = a[C];
				o = w === "left", x.push(g + "-" + C + "-" + w);
			}
		} else a === "right" && (o = !0);
	}
	var T = ut({
		flip: c,
		rootCloseEvent: s,
		show: l,
		alignEnd: o,
		usePopper: !h && x.length === 0,
		popperConfig: i({}, p, { modifiers: b.concat(p?.modifiers || []) })
	}), E = T[0], D = T[1], O = D.hasShown, k = D.popper, A = D.show, j = D.alignEnd, ee = D.toggle;
	if (E.ref = Se(y, Se(Et(t, "DropdownMenu"), E.ref)), !O && !u) return null;
	typeof f != "string" && (E.show = A, E.close = function() {
		return ee?.(!1);
	}, E.alignRight = j);
	var te = m.style;
	return k != null && k.placement && (te = i({}, m.style, E.style), m["x-placement"] = k.placement), /*#__PURE__*/ I.createElement(f, i({}, m, E, {
		style: te,
		className: R.default.apply(void 0, [
			r,
			g,
			A && "show",
			j && g + "-right"
		].concat(x))
	}));
});
At.displayName = "DropdownMenu", At.defaultProps = kt, te();
var jt = [
	"bsPrefix",
	"split",
	"className",
	"childBsPrefix",
	"as"
], Mt = /*#__PURE__*/ I.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.split, a = e.className, o = e.childBsPrefix, s = e.as, c = s === void 0 ? _ : s, l = F(e, jt), u = v(n, "dropdown-toggle");
	o !== void 0 && (l.bsPrefix = o);
	var d = ht()[0];
	return d.ref = Se(d.ref, Et(t, "DropdownToggle")), /*#__PURE__*/ I.createElement(c, i({ className: (0, R.default)(a, u, r && u + "-split") }, d, l));
});
Mt.displayName = "DropdownToggle";
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Dropdown.js
var Nt = [
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
], Pt = Ge("dropdown-header", { defaultProps: { role: "heading" } }), Ft = Ge("dropdown-divider", { defaultProps: { role: "separator" } }), It = Ge("dropdown-item-text", { Component: "span" }), Lt = { navbar: !1 }, Rt = /*#__PURE__*/ I.forwardRef(function(e, t) {
	var n = d(e, { show: "onToggle" }), r = n.bsPrefix, a = n.drop, o = n.show, s = n.className, c = n.alignRight, l = n.onSelect, u = n.onToggle, f = n.focusFirstItemOnShow, p = n.as, m = p === void 0 ? "div" : p;
	n.navbar;
	var h = F(n, Nt), g = (0, I.useContext)(Pe), _ = v(r, "dropdown"), y = oe(function(e, t, n) {
		n === void 0 && (n = t.type), t.currentTarget === document && (n !== "keydown" || t.key === "Escape") && (n = "rootClose"), u && u(e, t, { source: n });
	}), b = oe(function(e, t) {
		g && g(e, t), l && l(e, t), y(!1, t, "select");
	});
	return /*#__PURE__*/ I.createElement(Pe.Provider, { value: b }, /*#__PURE__*/ I.createElement(bt, {
		drop: a,
		show: o,
		alignEnd: c,
		onToggle: y,
		focusFirstItemOnShow: f,
		itemSelector: "." + _ + "-item:not(.disabled):not(:disabled)"
	}, /*#__PURE__*/ I.createElement(m, i({}, h, {
		ref: t,
		className: (0, R.default)(s, o && "show", (!a || a === "down") && _, a === "up" && "dropup", a === "right" && "dropright", a === "left" && "dropleft")
	}))));
});
Rt.displayName = "Dropdown", Rt.defaultProps = Lt, Rt.Divider = Ft, Rt.Header = Pt, Rt.Item = wt, Rt.ItemText = It, Rt.Menu = At, Rt.Toggle = Mt;
// node_modules/.pnpm/prop-types-extra@1.1.1_react@18.3.1/node_modules/prop-types-extra/lib/utils/createChainableTypeChecker.js
var zt = /* @__PURE__ */ t(((e, t) => {
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
(/* @__PURE__ */ t(((e, t) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = i;
	var n = r(zt());
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
var Bt = [
	"as",
	"className",
	"type",
	"tooltip"
], Vt = {
	type: z.default.string,
	tooltip: z.default.bool,
	as: z.default.elementType
}, Ht = /*#__PURE__*/ I.forwardRef(function(e, t) {
	var n = e.as, r = n === void 0 ? "div" : n, a = e.className, o = e.type, s = o === void 0 ? "valid" : o, c = e.tooltip, l = c !== void 0 && c, u = F(e, Bt);
	return /*#__PURE__*/ I.createElement(r, i({}, u, {
		ref: t,
		className: (0, R.default)(a, s + "-" + (l ? "tooltip" : "feedback"))
	}));
});
Ht.displayName = "Feedback", Ht.propTypes = Vt;
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormContext.js
var Ut = /*#__PURE__*/ I.createContext({ controlId: void 0 }), Wt = [
	"id",
	"bsPrefix",
	"bsCustomPrefix",
	"className",
	"type",
	"isValid",
	"isInvalid",
	"isStatic",
	"as"
], Gt = /*#__PURE__*/ I.forwardRef(function(e, t) {
	var n = e.id, r = e.bsPrefix, a = e.bsCustomPrefix, o = e.className, s = e.type, c = s === void 0 ? "checkbox" : s, l = e.isValid, u = l !== void 0 && l, d = e.isInvalid, f = d !== void 0 && d, p = e.isStatic, m = e.as, h = m === void 0 ? "input" : m, g = F(e, Wt), _ = (0, I.useContext)(Ut), y = _.controlId, b = _.custom ? [a, "custom-control-input"] : [r, "form-check-input"], x = b[0], S = b[1];
	return r = v(x, S), /*#__PURE__*/ I.createElement(h, i({}, g, {
		ref: t,
		type: c,
		id: n || y,
		className: (0, R.default)(o, r, u && "is-valid", f && "is-invalid", p && "position-static")
	}));
});
Gt.displayName = "FormCheckInput";
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormCheckLabel.js
var Kt = [
	"bsPrefix",
	"bsCustomPrefix",
	"className",
	"htmlFor"
], qt = /*#__PURE__*/ I.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.bsCustomPrefix, a = e.className, o = e.htmlFor, s = F(e, Kt), c = (0, I.useContext)(Ut), l = c.controlId, u = c.custom ? [r, "custom-control-label"] : [n, "form-check-label"], d = u[0], f = u[1];
	return n = v(d, f), /*#__PURE__*/ I.createElement("label", i({}, s, {
		ref: t,
		htmlFor: o || l,
		className: (0, R.default)(a, n)
	}));
});
qt.displayName = "FormCheckLabel";
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormCheck.js
var Jt = [
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
], Yt = /*#__PURE__*/ I.forwardRef(function(e, t) {
	var n = e.id, r = e.bsPrefix, a = e.bsCustomPrefix, o = e.inline, s = o !== void 0 && o, c = e.disabled, l = c !== void 0 && c, u = e.isValid, d = u !== void 0 && u, f = e.isInvalid, p = f !== void 0 && f, m = e.feedbackTooltip, h = m !== void 0 && m, g = e.feedback, _ = e.className, y = e.style, b = e.title, x = b === void 0 ? "" : b, S = e.type, C = S === void 0 ? "checkbox" : S, w = e.label, T = e.children, E = e.custom, D = e.as, O = D === void 0 ? "input" : D, k = F(e, Jt), A = C === "switch" || E, j = A ? [a, "custom-control"] : [r, "form-check"], ee = j[0], te = j[1];
	r = v(ee, te);
	var M = (0, I.useContext)(Ut).controlId, N = (0, I.useMemo)(function() {
		return {
			controlId: n || M,
			custom: A
		};
	}, [
		M,
		A,
		n
	]), P = A || w != null && w !== !1 && !T, ne = /*#__PURE__*/ I.createElement(Gt, i({}, k, {
		type: C === "switch" ? "checkbox" : C,
		ref: t,
		isValid: d,
		isInvalid: p,
		isStatic: !P,
		disabled: l,
		as: O
	}));
	return /*#__PURE__*/ I.createElement(Ut.Provider, { value: N }, /*#__PURE__*/ I.createElement("div", {
		style: y,
		className: (0, R.default)(_, r, A && "custom-" + C, s && r + "-inline")
	}, T || /*#__PURE__*/ I.createElement(I.Fragment, null, ne, P && /*#__PURE__*/ I.createElement(qt, { title: x }, w), (d || p) && /*#__PURE__*/ I.createElement(Ht, {
		type: d ? "valid" : "invalid",
		tooltip: h
	}, g))));
});
Yt.displayName = "FormCheck", Yt.Input = Gt, Yt.Label = qt;
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormFileInput.js
var Xt = [
	"id",
	"bsPrefix",
	"bsCustomPrefix",
	"className",
	"isValid",
	"isInvalid",
	"lang",
	"as"
], Zt = /*#__PURE__*/ I.forwardRef(function(e, t) {
	var n = e.id, r = e.bsPrefix, a = e.bsCustomPrefix, o = e.className, s = e.isValid, c = e.isInvalid, l = e.lang, u = e.as, d = u === void 0 ? "input" : u, f = F(e, Xt), p = (0, I.useContext)(Ut), m = p.controlId, h = p.custom, g = "file", _ = h ? [a, "custom-file-input"] : [r, "form-control-file"], y = _[0], b = _[1];
	return r = v(y, b), /*#__PURE__*/ I.createElement(d, i({}, f, {
		ref: t,
		id: n || m,
		type: g,
		lang: l,
		className: (0, R.default)(o, r, s && "is-valid", c && "is-invalid")
	}));
});
Zt.displayName = "FormFileInput";
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormFileLabel.js
var Qt = [
	"bsPrefix",
	"bsCustomPrefix",
	"className",
	"htmlFor"
], $t = /*#__PURE__*/ I.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.bsCustomPrefix, a = e.className, o = e.htmlFor, s = F(e, Qt), c = (0, I.useContext)(Ut), l = c.controlId, u = c.custom ? [r, "custom-file-label"] : [n, "form-file-label"], d = u[0], f = u[1];
	return n = v(d, f), /*#__PURE__*/ I.createElement("label", i({}, s, {
		ref: t,
		htmlFor: o || l,
		className: (0, R.default)(a, n),
		"data-browse": s["data-browse"]
	}));
});
$t.displayName = "FormFileLabel";
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormFile.js
var en = [
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
], tn = /*#__PURE__*/ I.forwardRef(function(e, t) {
	var n = e.id, r = e.bsPrefix, a = e.bsCustomPrefix, o = e.disabled, s = o !== void 0 && o, c = e.isValid, l = c !== void 0 && c, u = e.isInvalid, d = u !== void 0 && u, f = e.feedbackTooltip, p = f !== void 0 && f, m = e.feedback, h = e.className, g = e.style, _ = e.label, y = e.children, b = e.custom, x = e.lang, S = e["data-browse"], C = e.as, w = C === void 0 ? "div" : C, T = e.inputAs, E = T === void 0 ? "input" : T, D = F(e, en), O = b ? [a, "custom"] : [r, "form-file"], k = O[0], A = O[1];
	r = v(k, A);
	var j = "file", ee = (0, I.useContext)(Ut).controlId, te = (0, I.useMemo)(function() {
		return {
			controlId: n || ee,
			custom: b
		};
	}, [
		ee,
		b,
		n
	]), M = _ != null && _ !== !1 && !y, N = /*#__PURE__*/ I.createElement(Zt, i({}, D, {
		ref: t,
		isValid: l,
		isInvalid: d,
		disabled: s,
		as: E,
		lang: x
	}));
	return /*#__PURE__*/ I.createElement(Ut.Provider, { value: te }, /*#__PURE__*/ I.createElement(w, {
		style: g,
		className: (0, R.default)(h, r, b && "custom-" + j)
	}, y || /*#__PURE__*/ I.createElement(I.Fragment, null, b ? /*#__PURE__*/ I.createElement(I.Fragment, null, N, M && /*#__PURE__*/ I.createElement($t, { "data-browse": S }, _)) : /*#__PURE__*/ I.createElement(I.Fragment, null, M && /*#__PURE__*/ I.createElement($t, null, _), N), (l || d) && /*#__PURE__*/ I.createElement(Ht, {
		type: l ? "valid" : "invalid",
		tooltip: p
	}, m))));
});
tn.displayName = "FormFile", tn.Input = Zt, tn.Label = $t;
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormControl.js
var nn = [
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
], rn = /*#__PURE__*/ I.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.bsCustomPrefix, a = e.type, o = e.size, s = e.htmlSize, c = e.id, l = e.className, u = e.isValid, d = u !== void 0 && u, f = e.isInvalid, p = f !== void 0 && f, m = e.plaintext, h = e.readOnly, g = e.custom, _ = e.as, y = _ === void 0 ? "input" : _, b = F(e, nn), x = (0, I.useContext)(Ut).controlId, S = g ? [r, "custom"] : [n, "form-control"], C = S[0], w = S[1];
	n = v(C, w);
	var T;
	if (m) {
		var E;
		T = (E = {}, E[n + "-plaintext"] = !0, E);
	} else if (a === "file") {
		var D;
		T = (D = {}, D[n + "-file"] = !0, D);
	} else if (a === "range") {
		var O;
		T = (O = {}, O[n + "-range"] = !0, O);
	} else if (y === "select" && g) {
		var k;
		T = (k = {}, k[n + "-select"] = !0, k[n + "-select-" + o] = o, k);
	} else {
		var A;
		T = (A = {}, A[n] = !0, A[n + "-" + o] = o, A);
	}
	return /*#__PURE__*/ I.createElement(y, i({}, b, {
		type: a,
		size: s,
		ref: t,
		readOnly: h,
		id: c || x,
		className: (0, R.default)(l, T, d && "is-valid", p && "is-invalid")
	}));
});
rn.displayName = "FormControl";
var an = Object.assign(rn, { Feedback: Ht }), on = [
	"bsPrefix",
	"className",
	"children",
	"controlId",
	"as"
], sn = /*#__PURE__*/ I.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.className, a = e.children, o = e.controlId, s = e.as, c = s === void 0 ? "div" : s, l = F(e, on);
	n = v(n, "form-group");
	var u = (0, I.useMemo)(function() {
		return { controlId: o };
	}, [o]);
	return /*#__PURE__*/ I.createElement(Ut.Provider, { value: u }, /*#__PURE__*/ I.createElement(c, i({}, l, {
		ref: t,
		className: (0, R.default)(r, n)
	}), a));
});
sn.displayName = "FormGroup";
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormLabel.js
var cn = [
	"as",
	"bsPrefix",
	"column",
	"srOnly",
	"className",
	"htmlFor"
], ln = {
	column: !1,
	srOnly: !1
}, un = /*#__PURE__*/ I.forwardRef(function(e, t) {
	var n = e.as, r = n === void 0 ? "label" : n, a = e.bsPrefix, s = e.column, c = e.srOnly, l = e.className, u = e.htmlFor, d = F(e, cn), f = (0, I.useContext)(Ut).controlId;
	a = v(a, "form-label");
	var p = "col-form-label";
	typeof s == "string" && (p = p + " " + p + "-" + s);
	var m = (0, R.default)(l, a, c && "sr-only", s && p);
	return u ||= f, s ? /*#__PURE__*/ I.createElement(o, i({
		ref: t,
		as: "label",
		className: m,
		htmlFor: u
	}, d)) : /*#__PURE__*/ I.createElement(r, i({
		ref: t,
		className: m,
		htmlFor: u
	}, d));
});
un.displayName = "FormLabel", un.defaultProps = ln;
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormText.js
var dn = [
	"bsPrefix",
	"className",
	"as",
	"muted"
], fn = /*#__PURE__*/ I.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.className, a = e.as, o = a === void 0 ? "small" : a, s = e.muted, c = F(e, dn);
	return n = v(n, "form-text"), /*#__PURE__*/ I.createElement(o, i({}, c, {
		ref: t,
		className: (0, R.default)(r, n, s && "text-muted")
	}));
});
fn.displayName = "FormText";
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Switch.js
var pn = /*#__PURE__*/ I.forwardRef(function(e, t) {
	return /*#__PURE__*/ I.createElement(Yt, i({}, e, {
		ref: t,
		type: "switch"
	}));
});
pn.displayName = "Switch", pn.Input = Yt.Input, pn.Label = Yt.Label;
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Form.js
var mn = [
	"bsPrefix",
	"inline",
	"className",
	"validated",
	"as"
], hn = Ge("form-row"), gn = { inline: !1 }, _n = /*#__PURE__*/ I.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.inline, a = e.className, o = e.validated, s = e.as, c = s === void 0 ? "form" : s, l = F(e, mn);
	return n = v(n, "form"), /*#__PURE__*/ I.createElement(c, i({}, l, {
		ref: t,
		className: (0, R.default)(a, o && "was-validated", r && n + "-inline")
	}));
});
_n.displayName = "Form", _n.defaultProps = gn, _n.Row = hn, _n.Group = sn, _n.Control = an, _n.Check = Yt, _n.File = tn, _n.Switch = pn, _n.Label = un, _n.Text = fn;
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/InputGroup.js
var vn = [
	"bsPrefix",
	"size",
	"hasValidation",
	"className",
	"as"
], yn = Ge("input-group-append"), bn = Ge("input-group-prepend"), xn = Ge("input-group-text", { Component: "span" }), Sn = function(e) {
	return /*#__PURE__*/ I.createElement(xn, null, /*#__PURE__*/ I.createElement("input", i({ type: "checkbox" }, e)));
}, Cn = function(e) {
	return /*#__PURE__*/ I.createElement(xn, null, /*#__PURE__*/ I.createElement("input", i({ type: "radio" }, e)));
}, wn = /*#__PURE__*/ I.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.size, a = e.hasValidation, o = e.className, s = e.as, c = s === void 0 ? "div" : s, l = F(e, vn);
	return n = v(n, "input-group"), /*#__PURE__*/ I.createElement(c, i({ ref: t }, l, { className: (0, R.default)(o, n, r && n + "-" + r, a && "has-validation") }));
});
wn.displayName = "InputGroup", wn.Text = xn, wn.Radio = Cn, wn.Checkbox = Sn, wn.Append = yn, wn.Prepend = bn;
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/TabContext.js
var Tn = /*#__PURE__*/ I.createContext(null), En = [
	"as",
	"onSelect",
	"activeKey",
	"role",
	"onKeyDown"
], Dn = function() {}, On = /*#__PURE__*/ I.forwardRef(function(e, t) {
	var n = e.as, r = n === void 0 ? "ul" : n, a = e.onSelect, o = e.activeKey, s = e.role, c = e.onKeyDown, l = F(e, En), u = at(), d = (0, I.useRef)(!1), f = (0, I.useContext)(Pe), p = (0, I.useContext)(Tn), m, h;
	p && (s ||= "tablist", o = p.activeKey, m = p.getControlledId, h = p.getControllerId);
	var g = (0, I.useRef)(null), _ = function(e) {
		var t = g.current;
		if (!t) return null;
		var n = rt(t, "[data-rb-event-key]:not(.disabled)"), r = t.querySelector(".active");
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
	(0, I.useEffect)(function() {
		if (g.current && d.current) {
			var e = g.current.querySelector("[data-rb-event-key].active");
			e && e.focus();
		}
		d.current = !1;
	});
	var b = Se(t, g);
	return /*#__PURE__*/ I.createElement(Pe.Provider, { value: v }, /*#__PURE__*/ I.createElement(xt.Provider, { value: {
		role: s,
		activeKey: Fe(o),
		getControlledId: m || Dn,
		getControllerId: h || Dn
	} }, /*#__PURE__*/ I.createElement(r, i({}, l, {
		onKeyDown: y,
		ref: b,
		role: s
	}))));
}), kn = [
	"active",
	"className",
	"eventKey",
	"onSelect",
	"onClick",
	"as"
], An = { disabled: !1 }, jn = /*#__PURE__*/ I.forwardRef(function(e, t) {
	var n = e.active, r = e.className, a = e.eventKey, o = e.onSelect, s = e.onClick, c = e.as, l = F(e, kn), u = Fe(a, l.href), d = (0, I.useContext)(Pe), f = (0, I.useContext)(xt), p = n;
	if (f) {
		!l.role && f.role === "tablist" && (l.role = "tab");
		var m = f.getControllerId(u), h = f.getControlledId(u);
		l["data-rb-event-key"] = u, l.id = m || l.id, l["aria-controls"] = h || l["aria-controls"], p = n == null && u != null ? f.activeKey === u : n;
	}
	l.role === "tab" && (l.disabled && (l.tabIndex = -1, l["aria-disabled"] = !0), l["aria-selected"] = p);
	var g = oe(function(e) {
		s && s(e), u != null && (o && o(u, e), d && d(u, e));
	});
	return /*#__PURE__*/ I.createElement(c, i({}, l, {
		ref: t,
		onClick: g,
		className: (0, R.default)(r, p && "active")
	}));
});
jn.defaultProps = An;
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/NavItem.js
var Mn = [
	"bsPrefix",
	"className",
	"children",
	"as"
], Nn = /*#__PURE__*/ I.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.className, a = e.children, o = e.as, s = o === void 0 ? "div" : o, c = F(e, Mn);
	return n = v(n, "nav-item"), /*#__PURE__*/ I.createElement(s, i({}, c, {
		ref: t,
		className: (0, R.default)(r, n)
	}), a);
});
Nn.displayName = "NavItem";
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/NavLink.js
var Pn = [
	"bsPrefix",
	"disabled",
	"className",
	"href",
	"eventKey",
	"onSelect",
	"as"
], Fn = {
	disabled: !1,
	as: se
}, In = /*#__PURE__*/ I.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.disabled, a = e.className, o = e.href, s = e.eventKey, c = e.onSelect, l = e.as, u = F(e, Pn);
	return n = v(n, "nav-link"), /*#__PURE__*/ I.createElement(jn, i({}, u, {
		href: o,
		ref: t,
		eventKey: s,
		as: l,
		disabled: r,
		onSelect: c,
		className: (0, R.default)(a, n, r && "disabled")
	}));
});
In.displayName = "NavLink", In.defaultProps = Fn;
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Nav.js
var Ln = [
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
], Rn = {
	justify: !1,
	fill: !1
}, zn = /*#__PURE__*/ I.forwardRef(function(e, t) {
	var n, r = d(e, { activeKey: "onSelect" }), a = r.as, o = a === void 0 ? "div" : a, s = r.bsPrefix, c = r.variant, l = r.fill, u = r.justify, f = r.navbar, p = r.navbarScroll, m = r.className, h = r.children, g = r.activeKey, _ = F(r, Ln), y = v(s, "nav"), b, x, S = !1, C = (0, I.useContext)(Tt), w = (0, I.useContext)(Qe);
	return C ? (b = C.bsPrefix, S = f ?? !0) : w && (x = w.cardHeaderBsPrefix), /*#__PURE__*/ I.createElement(On, i({
		as: o,
		ref: t,
		activeKey: g,
		className: (0, R.default)(m, (n = {}, n[y] = !S, n[b + "-nav"] = S, n[b + "-nav-scroll"] = S && p, n[x + "-" + c] = !!x, n[y + "-" + c] = !!c, n[y + "-fill"] = l, n[y + "-justified"] = u, n))
	}, _), h);
});
zn.displayName = "Nav", zn.defaultProps = Rn, zn.Item = Nn, zn.Link = In;
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/NavDropdown.js
var Bn = [
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
], Vn = /*#__PURE__*/ I.forwardRef(function(e, t) {
	var n = e.id, r = e.title, a = e.children, o = e.bsPrefix, s = e.className, c = e.rootCloseEvent, l = e.menuRole, u = e.disabled, d = e.active, f = e.renderMenuOnMount, p = F(e, Bn), m = v(void 0, "nav-item");
	return /*#__PURE__*/ I.createElement(Rt, i({ ref: t }, p, { className: (0, R.default)(s, m) }), /*#__PURE__*/ I.createElement(Rt.Toggle, {
		id: n,
		eventKey: null,
		active: d,
		disabled: u,
		childBsPrefix: o,
		as: In
	}, r), /*#__PURE__*/ I.createElement(Rt.Menu, {
		role: l,
		renderOnMount: f,
		rootCloseEvent: c
	}, a));
});
Vn.displayName = "NavDropdown", Vn.Item = Rt.Item, Vn.ItemText = Rt.ItemText, Vn.Divider = Rt.Divider, Vn.Header = Rt.Header;
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/ProgressBar.js
var Hn = [
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
], Un = ["isChild"], Wn = [
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
], Gn = 1e3, Kn = {
	min: 0,
	max: 100,
	animated: !1,
	isChild: !1,
	srOnly: !1,
	striped: !1
};
function qn(e, t, n) {
	var r = (e - t) / (n - t) * 100;
	return Math.round(r * Gn) / Gn;
}
function Jn(e, t) {
	var n, r = e.min, a = e.now, o = e.max, s = e.label, c = e.srOnly, l = e.striped, u = e.animated, d = e.className, f = e.style, p = e.variant, m = e.bsPrefix, h = F(e, Hn);
	return /*#__PURE__*/ I.createElement("div", i({ ref: t }, h, {
		role: "progressbar",
		className: (0, R.default)(d, m + "-bar", (n = {}, n["bg-" + p] = p, n[m + "-bar-animated"] = u, n[m + "-bar-striped"] = u || l, n)),
		style: i({ width: qn(a, r, o) + "%" }, f),
		"aria-valuenow": a,
		"aria-valuemin": r,
		"aria-valuemax": o
	}), c ? /*#__PURE__*/ I.createElement("span", { className: "sr-only" }, s) : s);
}
var Yn = /*#__PURE__*/ I.forwardRef(function(e, t) {
	var n = e.isChild, r = F(e, Un);
	if (r.bsPrefix = v(r.bsPrefix, "progress"), n) return Jn(r, t);
	var a = r.min, o = r.now, s = r.max, c = r.label, l = r.srOnly, u = r.striped, d = r.animated, f = r.bsPrefix, p = r.variant, m = r.className, h = r.children, g = F(r, Wn);
	return /*#__PURE__*/ I.createElement("div", i({ ref: t }, g, { className: (0, R.default)(m, f) }), h ? $e(h, function(e) {
		return /*#__PURE__*/ (0, I.cloneElement)(e, { isChild: !0 });
	}) : Jn({
		min: a,
		now: o,
		max: s,
		label: c,
		srOnly: l,
		striped: u,
		animated: d,
		bsPrefix: f,
		variant: p
	}, t));
});
Yn.displayName = "ProgressBar", Yn.defaultProps = Kn;
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Spinner.js
var Xn = [
	"bsPrefix",
	"variant",
	"animation",
	"size",
	"children",
	"as",
	"className"
], Zn = /*#__PURE__*/ I.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.variant, a = e.animation, o = e.size, s = e.children, c = e.as, l = c === void 0 ? "div" : c, u = e.className, d = F(e, Xn);
	n = v(n, "spinner");
	var f = n + "-" + a;
	return /*#__PURE__*/ I.createElement(l, i({ ref: t }, d, { className: (0, R.default)(u, f, o && f + "-" + o, r && "text-" + r) }), s);
});
Zn.displayName = "Spinner";
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/TabContainer.js
var Qn = function(e) {
	var t = d(e, { activeKey: "onSelect" }), n = t.id, r = t.generateChildId, i = t.onSelect, a = t.activeKey, o = t.transition, s = t.mountOnEnter, c = t.unmountOnExit, l = t.children, u = (0, I.useMemo)(function() {
		return r || function(e, t) {
			return n ? n + "-" + t + "-" + e : null;
		};
	}, [n, r]), f = (0, I.useMemo)(function() {
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
	return /*#__PURE__*/ I.createElement(Tn.Provider, { value: f }, /*#__PURE__*/ I.createElement(Pe.Provider, { value: i || null }, l));
}, $n = [
	"bsPrefix",
	"as",
	"className"
], er = /*#__PURE__*/ I.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.as, a = r === void 0 ? "div" : r, o = e.className, s = F(e, $n), c = v(n, "tab-content");
	return /*#__PURE__*/ I.createElement(a, i({ ref: t }, s, { className: (0, R.default)(o, c) }));
}), tr = [
	"activeKey",
	"getControlledId",
	"getControllerId"
], nr = [
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
function rr(e) {
	var t = (0, I.useContext)(Tn);
	if (!t) return e;
	var n = t.activeKey, a = t.getControlledId, o = t.getControllerId, s = F(t, tr), c = e.transition !== !1 && s.transition !== !1, l = Fe(e.eventKey);
	return i({}, e, {
		active: e.active == null && l != null ? Fe(n) === l : e.active,
		id: a(e.eventKey),
		"aria-labelledby": o(e.eventKey),
		transition: c && (e.transition || s.transition || r),
		mountOnEnter: e.mountOnEnter == null ? s.mountOnEnter : e.mountOnEnter,
		unmountOnExit: e.unmountOnExit == null ? s.unmountOnExit : e.unmountOnExit
	});
}
var ir = /*#__PURE__*/ I.forwardRef(function(e, t) {
	var n = rr(e), r = n.bsPrefix, a = n.className, o = n.active, s = n.onEnter, c = n.onEntering, l = n.onEntered, u = n.onExit, d = n.onExiting, f = n.onExited, p = n.mountOnEnter, m = n.unmountOnExit, h = n.transition, g = n.as, _ = g === void 0 ? "div" : g;
	n.eventKey;
	var y = F(n, nr), b = v(r, "tab-pane");
	if (!o && !h && m) return null;
	var x = /*#__PURE__*/ I.createElement(_, i({}, y, {
		ref: t,
		role: "tabpanel",
		"aria-hidden": !o,
		className: (0, R.default)(a, b, { active: o })
	}));
	return h && (x = /*#__PURE__*/ I.createElement(h, {
		in: o,
		onEnter: s,
		onEntering: c,
		onEntered: l,
		onExit: u,
		onExiting: d,
		onExited: f,
		mountOnEnter: p,
		unmountOnExit: m
	}, x)), /*#__PURE__*/ I.createElement(Tn.Provider, { value: null }, /*#__PURE__*/ I.createElement(Pe.Provider, { value: null }, x));
});
ir.displayName = "TabPane";
// node_modules/.pnpm/css-mediaquery@0.1.2/node_modules/css-mediaquery/index.js
var ar = /* @__PURE__ */ t(((e) => {
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
					case "monochrome": i = parseInt(i, 10) || 1, a = parseInt(a, 10) || 0;
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
})), or = /* @__PURE__ */ e((/* @__PURE__ */ t(((e, t) => {
	var n = ar().match, r = typeof window < "u" ? window.matchMedia : null;
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
})))()), sr = /[A-Z]/g, cr = /^ms-/, lr = {};
function ur(e) {
	return "-" + e.toLowerCase();
}
function dr(e) {
	if (lr.hasOwnProperty(e)) return lr[e];
	var t = e.replace(sr, ur);
	return lr[e] = cr.test(t) ? "-" + t : t;
}
// node_modules/.pnpm/shallow-equal@3.1.0/node_modules/shallow-equal/dist/index.modern.mjs
function fr(e, t) {
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
// node_modules/.pnpm/react-responsive@10.0.1_react@18.3.1/node_modules/react-responsive/dist/esm/index.js
var pr = z.default.oneOfType([z.default.string, z.default.number]), mr = {
	all: z.default.bool,
	grid: z.default.bool,
	aural: z.default.bool,
	braille: z.default.bool,
	handheld: z.default.bool,
	print: z.default.bool,
	projection: z.default.bool,
	screen: z.default.bool,
	tty: z.default.bool,
	tv: z.default.bool,
	embossed: z.default.bool
}, hr = {
	orientation: z.default.oneOf(["portrait", "landscape"]),
	scan: z.default.oneOf(["progressive", "interlace"]),
	aspectRatio: z.default.string,
	deviceAspectRatio: z.default.string,
	height: pr,
	deviceHeight: pr,
	width: pr,
	deviceWidth: pr,
	color: z.default.bool,
	colorIndex: z.default.bool,
	monochrome: z.default.bool,
	resolution: pr,
	type: Object.keys(mr)
}, { type: gr, ..._r } = hr, vr = {
	minAspectRatio: z.default.string,
	maxAspectRatio: z.default.string,
	minDeviceAspectRatio: z.default.string,
	maxDeviceAspectRatio: z.default.string,
	minHeight: pr,
	maxHeight: pr,
	minDeviceHeight: pr,
	maxDeviceHeight: pr,
	minWidth: pr,
	maxWidth: pr,
	minDeviceWidth: pr,
	maxDeviceWidth: pr,
	minColor: z.default.number,
	maxColor: z.default.number,
	minColorIndex: z.default.number,
	maxColorIndex: z.default.number,
	minMonochrome: z.default.number,
	maxMonochrome: z.default.number,
	minResolution: pr,
	maxResolution: pr,
	..._r
}, yr = {
	all: {
		...mr,
		...vr
	},
	types: mr,
	matchers: hr,
	features: vr
}, br = (e) => `not ${e}`, xr = (e, t) => {
	let n = dr(e);
	return typeof t == "number" && (t = `${t}px`), t === !0 ? n : t === !1 ? br(n) : `(${n}: ${t})`;
}, Sr = (e) => e.join(" and "), Cr = (e) => {
	let t = [];
	return Object.keys(yr.all).forEach((n) => {
		let r = e[n];
		r != null && t.push(xr(n, r));
	}), Sr(t);
}, wr = (0, I.createContext)(void 0), Tr = (e) => e.query || Cr(e), Er = (e) => {
	if (e) return Object.keys(e).reduce((t, n) => (t[dr(n)] = e[n], t), {});
}, Dr = () => {
	let e = (0, I.useRef)(!1);
	return (0, I.useEffect)(() => {
		e.current = !0;
	}, []), e.current;
}, Or = (e) => {
	let t = (0, I.useContext)(wr), n = () => Er(e) || Er(t), [r, i] = (0, I.useState)(n);
	return (0, I.useEffect)(() => {
		let e = n();
		fr(r, e) || i(e);
	}, [e, t]), r;
}, kr = (e) => {
	let t = () => Tr(e), [n, r] = (0, I.useState)(t);
	return (0, I.useEffect)(() => {
		let e = t();
		n !== e && r(e);
	}, [e]), n;
}, Ar = (e, t) => {
	let n = () => (0, or.default)(e, t || {}, !!t), [r, i] = (0, I.useState)(n), a = Dr();
	return (0, I.useEffect)(() => {
		if (a) {
			let e = n();
			return i(e), () => {
				e && e.dispose();
			};
		}
	}, [e, t]), r;
}, jr = (e) => {
	let [t, n] = (0, I.useState)(e.matches);
	return (0, I.useEffect)(() => {
		let t = (e) => {
			n(e.matches);
		};
		return e.addListener(t), n(e.matches), () => {
			e.removeListener(t);
		};
	}, [e]), t;
}, Mr = (e, t, n) => {
	let r = Or(t), i = kr(e);
	if (!i) throw Error("Invalid or missing MediaQuery!");
	let a = Ar(i, r), o = jr(a), s = Dr();
	return (0, I.useEffect)(() => {
		s && n && n(o);
	}, [o]), (0, I.useEffect)(() => () => {
		a && a.dispose();
	}, []), o;
}, { sm: Nr, md: Pr, lg: Fr, xl: Ir, xxl: Lr } = {
	xs: "0",
	sm: "576px",
	md: "768px",
	lg: "992px",
	xl: "1200px",
	xxl: "1400px"
}, Rr = {
	extraSmall: { maxWidth: parseFloat(Nr) || 575.98 },
	small: {
		minWidth: parseFloat(Nr) || 576,
		maxWidth: parseFloat(Pr) || 767.98
	},
	medium: {
		minWidth: parseFloat(Pr) || 768,
		maxWidth: parseFloat(Fr) || 991.98
	},
	large: {
		minWidth: parseFloat(Fr) || 992,
		maxWidth: parseFloat(Ir) || 1199.98
	},
	extraLarge: {
		minWidth: parseFloat(Ir) || 1200,
		maxWidth: parseFloat(Lr) || 1399.98
	},
	extraExtraLarge: { minWidth: parseFloat(Lr) || 1400 }
};
Object.freeze({
	xs: "extraSmall",
	sm: "small",
	md: "medium",
	lg: "large",
	xl: "extraLarge",
	xxl: "extraExtraLarge"
});
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Alert/index.js
var zr = /*#__PURE__*/ (0, I.forwardRef)(({ children: e, icon: t, actions: n, dismissible: r = !1, onClose: i = () => {}, closeLabel: a, stacked: o = !1, show: s = !0, ...c }, l) => {
	let [u, d] = (0, I.useState)(o), f = Mr({ maxWidth: Rr.extraSmall.maxWidth });
	(0, I.useEffect)(() => {
		d(f ? !0 : o);
	}, [f, o]);
	let p = (0, I.useCallback)((e) => {
		let t = {
			size: "sm",
			key: e.props.children
		};
		return /*#__PURE__*/ (0, I.cloneElement)(e, t);
	}, []);
	return /*#__PURE__*/ I.createElement(Ze, {
		...c,
		className: (0, R.default)("alert-content", c.className),
		show: s,
		ref: l
	}, t && /*#__PURE__*/ I.createElement(fe, {
		src: t,
		className: "alert-icon"
	}), /*#__PURE__*/ I.createElement("div", { className: (0, R.default)({
		"pgn__alert-message-wrapper": !u,
		"pgn__alert-message-wrapper-stacked": u
	}) }, /*#__PURE__*/ I.createElement("div", { className: "alert-message-content" }, e), (r || n && n.length > 0) && /*#__PURE__*/ I.createElement(Me, { className: "pgn__alert-actions" }, /*#__PURE__*/ I.createElement(Me.Spacer, null), r && /*#__PURE__*/ I.createElement(A, {
		size: "sm",
		variant: "tertiary",
		onClick: i
	}, a || /*#__PURE__*/ I.createElement(ke, {
		id: "pgn.Alert.closeLabel",
		defaultMessage: "Dismiss",
		description: "Label of a close button on Alert component"
	})), n && n.map(p))));
}), Br = Be("h4");
Br.displayName = "DivStyledAsH4";
function Vr({ as: e = Br, bsPrefix: t = "alert-heading", ...n }) {
	return /*#__PURE__*/ I.createElement(Ze.Heading, {
		as: e,
		bsPrefix: t,
		...n
	});
}
function Hr({ as: e = "a", bsPrefix: t = "alert-link", ...n }) {
	return /*#__PURE__*/ I.createElement(Ze.Link, {
		as: e,
		bsPrefix: t,
		...n
	});
}
zr.Heading = Vr, zr.Link = Hr;
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Annotation/index.js
var Ur = /*#__PURE__*/ I.forwardRef(({ className: e, variant: t = "success", children: n, arrowPlacement: r = "bottom", ...i }, a) => /*#__PURE__*/ I.createElement("span", {
	className: (0, R.default)(e, "pgn__annotation", `pgn__annotation-${t}-${r}`),
	ref: a,
	...i
}, n)), Wr = (e) => /*#__PURE__*/ I.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /*#__PURE__*/ I.createElement("path", {
	d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2Z",
	fill: "currentColor"
})), Gr = (e) => /*#__PURE__*/ I.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /*#__PURE__*/ I.createElement("path", {
	d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2Zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59Z",
	fill: "currentColor"
})), Kr = (e) => /*#__PURE__*/ I.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /*#__PURE__*/ I.createElement("path", {
	d: "M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2Z",
	fill: "currentColor"
})), qr = (e) => /*#__PURE__*/ I.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /*#__PURE__*/ I.createElement("path", {
	d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9Z",
	fill: "currentColor"
})), Jr = (e) => /*#__PURE__*/ I.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /*#__PURE__*/ I.createElement("path", {
	d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41Z",
	fill: "currentColor"
})), Yr = (e) => /*#__PURE__*/ I.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /*#__PURE__*/ I.createElement("path", {
	d: "m14.06 9.02.92.92L5.92 19H5v-.92l9.06-9.06ZM17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83a.996.996 0 0 0 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29Zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75Z",
	fill: "currentColor"
})), Xr = (e) => /*#__PURE__*/ I.createElement("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	...e
}, /*#__PURE__*/ I.createElement("path", {
	d: "M5 10h4v6h6v-6h4l-7-7-7 7zm0 8v2h14v-2H5z",
	fill: "currentColor"
})), Zr = (e) => /*#__PURE__*/ I.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /*#__PURE__*/ I.createElement("path", {
	d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm1 15h-2v-6h2v6Zm0-8h-2V7h2v2Z",
	fill: "currentColor"
})), Qr = (e) => /*#__PURE__*/ I.createElement("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	...e
}, /*#__PURE__*/ I.createElement("path", {
	d: "M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",
	fill: "currentColor"
})), $r = (e) => /*#__PURE__*/ I.createElement("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	...e
}, /*#__PURE__*/ I.createElement("path", {
	d: "M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z",
	fill: "currentColor"
})), ei = (e) => /*#__PURE__*/ I.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /*#__PURE__*/ I.createElement("path", {
	d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8Z",
	fill: "currentColor"
})), ti = (e) => /*#__PURE__*/ I.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /*#__PURE__*/ I.createElement("path", {
	xmlns: "http://www.w3.org/2000/svg",
	d: "M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z",
	fill: "currentColor"
}));
// node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/core/utils.js
function ni(e) {
	return typeof e == "string" || e instanceof String;
}
function ri(e) {
	var t;
	return typeof e == "object" && !!e && (e == null || (t = e.constructor) == null ? void 0 : t.name) === "Object";
}
function ii(e, t) {
	return Array.isArray(t) ? ii(e, (e, n) => t.includes(n)) : Object.entries(e).reduce((e, n) => {
		let [r, i] = n;
		return t(i, r) && (e[r] = i), e;
	}, {});
}
var B = {
	NONE: "NONE",
	LEFT: "LEFT",
	FORCE_LEFT: "FORCE_LEFT",
	RIGHT: "RIGHT",
	FORCE_RIGHT: "FORCE_RIGHT"
};
function ai(e) {
	switch (e) {
		case B.LEFT: return B.FORCE_LEFT;
		case B.RIGHT: return B.FORCE_RIGHT;
		default: return e;
	}
}
function oi(e) {
	return e.replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1");
}
function si(e, t) {
	if (t === e) return !0;
	let n = Array.isArray(t), r = Array.isArray(e), i;
	if (n && r) {
		if (t.length != e.length) return !1;
		for (i = 0; i < t.length; i++) if (!si(t[i], e[i])) return !1;
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
		for (i = 0; i < s.length; i++) if (!si(e[s[i]], t[s[i]])) return !1;
		return !0;
	}
	return t && e && typeof t == "function" && typeof e == "function" ? t.toString() === e.toString() : !1;
}
// node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/core/action-details.js
var ci = class {
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
		return !this.removedCount || this.insertedCount ? B.NONE : (this.oldSelection.end === this.cursorPos || this.oldSelection.start === this.cursorPos) && this.oldSelection.end === this.oldSelection.start ? B.RIGHT : B.LEFT;
	}
};
// node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/core/holder.js
function V(e, t) {
	return new V.InputMask(e, t);
}
// node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/factory.js
function li(e) {
	if (e == null) throw Error("mask property should be defined");
	return e instanceof RegExp ? V.MaskedRegExp : ni(e) ? V.MaskedPattern : e === Date ? V.MaskedDate : e === Number ? V.MaskedNumber : Array.isArray(e) || e === Array ? V.MaskedDynamic : V.Masked && e.prototype instanceof V.Masked ? e : V.Masked && e instanceof V.Masked ? e.constructor : e instanceof Function ? V.MaskedFunction : (console.warn("Mask not found for mask", e), V.Masked);
}
function ui(e) {
	if (!e) throw Error("Options in not defined");
	if (V.Masked) {
		if (e.prototype instanceof V.Masked) return { mask: e };
		let { mask: t = void 0, ...n } = e instanceof V.Masked ? { mask: e } : ri(e) && e.mask instanceof V.Masked ? e : {};
		if (t) {
			let e = t.mask;
			return {
				...ii(t, (e, t) => !t.startsWith("_")),
				mask: t.constructor,
				_mask: e,
				...n
			};
		}
	}
	return ri(e) ? { ...e } : { mask: e };
}
function di(e) {
	if (V.Masked && e instanceof V.Masked) return e;
	let t = ui(e), n = li(t.mask);
	if (!n) throw Error("Masked class is not found for provided mask " + t.mask + ", appropriate module needs to be imported manually before creating mask.");
	return t.mask === n && delete t.mask, t._mask && (t.mask = t._mask, delete t._mask), new n(t);
}
V.createMask = di;
// node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/controls/mask-element.js
var fi = class {
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
V.MaskElement = fi;
// node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/controls/html-mask-element.js
var pi = 90, mi = 89, hi = class extends fi {
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
		if (this._handlers.redo && (e.keyCode === pi && e.shiftKey && (e.metaKey || e.ctrlKey) || e.keyCode === mi && e.ctrlKey)) return e.preventDefault(), this._handlers.redo(e);
		if (this._handlers.undo && e.keyCode === pi && (e.metaKey || e.ctrlKey)) return e.preventDefault(), this._handlers.undo(e);
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
V.HTMLMaskElement = hi;
// node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/controls/html-input-mask-element.js
var gi = class extends hi {
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
V.HTMLMaskElement = hi;
// node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/controls/html-contenteditable-mask-element.js
var _i = class extends hi {
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
V.HTMLContenteditableMaskElement = _i;
// node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/controls/input-history.js
var vi = class e {
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
vi.MAX_LENGTH = 100, V.InputMask = class {
	constructor(e, t) {
		this.el = e instanceof fi ? e : e.isContentEditable && e.tagName !== "INPUT" && e.tagName !== "TEXTAREA" ? new _i(e) : new gi(e), this.masked = di(t), this._listeners = {}, this._value = "", this._unmaskedValue = "", this._rawInputValue = "", this.history = new vi(), this._saveSelection = this._saveSelection.bind(this), this._onInput = this._onInput.bind(this), this._onChange = this._onChange.bind(this), this._onDrop = this._onDrop.bind(this), this._onFocus = this._onFocus.bind(this), this._onClick = this._onClick.bind(this), this._onUndo = this._onUndo.bind(this), this._onRedo = this._onRedo.bind(this), this.alignCursor = this.alignCursor.bind(this), this.alignCursorFriendly = this.alignCursorFriendly.bind(this), this._bindEvents(), this.updateValue(), this._onChange();
	}
	maskEquals(e) {
		return e == null || this.masked?.maskEquals(e);
	}
	get mask() {
		return this.masked.mask;
	}
	set mask(e) {
		if (this.maskEquals(e)) return;
		if (!(e instanceof V.Masked) && this.masked.constructor === li(e)) {
			this.masked.updateOptions({ mask: e });
			return;
		}
		let t = e instanceof V.Masked ? e : di({ mask: e });
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
		this.el && this.el.isActive && (this.el.select(e, e), this._saveSelection());
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
		this.cursorPos = this.masked.nearestInputPos(this.masked.nearestInputPos(this.cursorPos, B.LEFT));
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
		let t = new ci({
			value: this.el.value,
			cursorPos: this.cursorPos,
			oldValue: this.displayValue,
			oldSelection: this._selection
		}), n = this.masked.rawInputValue, r = this.masked.splice(t.startChangePos, t.removed.length, t.inserted, t.removeDirection, {
			input: !0,
			raw: !0
		}).offset, i = n === this.masked.rawInputValue ? t.removeDirection : B.NONE, a = this.masked.nearestInputPos(t.startChangePos + r, i);
		i !== B.NONE && (a = this.masked.nearestInputPos(a, B.NONE)), this.updateControl(a), delete this._inputEvent;
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
// node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/core/change-details.js
var H = class e {
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
V.ChangeDetails = H;
// node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/core/continuous-tail-details.js
var yi = class {
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
}, bi = class e {
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
		return e === void 0 && (e = 0), t === void 0 && (t = this.displayValue.length), new yi(this.extractInput(e, t), e);
	}
	appendTail(e) {
		return ni(e) && (e = new yi(String(e))), e.appendTo(this);
	}
	_appendCharRaw(e, t) {
		return e ? (this._value += e, new H({
			inserted: e,
			rawInserted: e
		})) : new H();
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
			a || (i = new H(), this.state = r, n && e && (n.state = e));
		}
		return i;
	}
	_appendPlaceholder() {
		return new H();
	}
	_appendEager() {
		return new H();
	}
	append(e, t, n) {
		if (!ni(e)) throw Error("value should be string");
		let r = ni(n) ? new yi(String(n)) : n;
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
		return e === void 0 && (e = 0), t === void 0 && (t = this.displayValue.length), this._value = this.displayValue.slice(0, e) + this.displayValue.slice(t), new H();
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
		return t === void 0 && (t = {}), H.normalize(this.prepare ? this.prepare(e, this, t) : e);
	}
	doPrepareChar(e, t) {
		return t === void 0 && (t = {}), H.normalize(this.prepareChar ? this.prepareChar(e, this, t) : e);
	}
	doValidate(e) {
		return (!this.validate || this.validate(this.value, this, e)) && (!this.parent || this.parent.doValidate(e));
	}
	doCommit() {
		this.commit && this.commit(this.value, this);
	}
	splice(e, t, n, r, i) {
		n === void 0 && (n = ""), r === void 0 && (r = B.NONE), i === void 0 && (i = { input: !0 });
		let a = e + t, o = this.extractTail(a), s = this.eager === !0 || this.eager === "remove", c;
		s && (r = ai(r), c = this.extractInput(0, a, { raw: !0 }));
		let l = e, u = new H();
		if (r !== B.NONE && (l = this.nearestInputPos(e, t > 1 && e !== 0 && !s ? B.NONE : r), u.tailShift = l - e), u.aggregate(this.remove(l)), s && r !== B.NONE && c === this.rawInputValue) {
			if (r === B.FORCE_LEFT) {
				let e;
				for (; c === this.rawInputValue && (e = this.displayValue.length);) u.aggregate(new H({ tailShift: -1 })).aggregate(this.remove(e - 1));
			} else r === B.FORCE_RIGHT && o.unshift();
		}
		return u.aggregate(this.append(n, i, o));
	}
	maskEquals(e) {
		return this.mask === e;
	}
	optionsIsChanged(e) {
		return !si(this, e);
	}
	typedValueEquals(t) {
		let n = this.typedValue;
		return t === n || e.EMPTY_VALUES.includes(t) && e.EMPTY_VALUES.includes(n) || (this.format ? this.format(t, this) === this.format(this.typedValue, this) : !1);
	}
	pad(e) {
		return new H();
	}
};
bi.DEFAULTS = { skipInvalid: !0 }, bi.EMPTY_VALUES = [
	void 0,
	null,
	""
], V.Masked = bi;
// node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/pattern/chunk-tail-details.js
var xi = class e {
	constructor(e, t) {
		e === void 0 && (e = []), t === void 0 && (t = 0), this.chunks = e, this.from = t;
	}
	toString() {
		return this.chunks.map(String).join("");
	}
	extend(t) {
		if (!String(t)) return;
		t = ni(t) ? new yi(String(t)) : t;
		let n = this.chunks[this.chunks.length - 1], r = n && (n.stop === t.stop || t.stop == null) && t.from === n.from + n.toString().length;
		if (t instanceof yi) r ? n.extend(t.toString()) : this.chunks.push(t);
		else if (t instanceof e) {
			if (t.stop == null) {
				let e;
				for (; t.chunks.length && t.chunks[0].stop == null;) e = t.chunks.shift(), e.from += t.from, this.extend(e);
			}
			t.toString() && (t.stop = t.blockIndex, this.chunks.push(t));
		}
	}
	appendTo(t) {
		if (!(t instanceof V.MaskedPattern)) return new yi(this.toString()).appendTo(t);
		let n = new H();
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
			let n = "chunks" in t ? new e() : new yi();
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
}, Si = class {
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
			if (!this.block.isFixed && this.block.value && (this.offset = this.block.nearestInputPos(this.offset, B.FORCE_LEFT), this.offset !== 0)) return !0;
		});
	}
	pushLeftBeforeInput() {
		return this._pushLeft(() => {
			if (!this.block.isFixed) return this.offset = this.block.nearestInputPos(this.offset, B.LEFT), !0;
		});
	}
	pushLeftBeforeRequired() {
		return this._pushLeft(() => {
			if (!(this.block.isFixed || this.block.isOptional && !this.block.value)) return this.offset = this.block.nearestInputPos(this.offset, B.LEFT), !0;
		});
	}
	pushRightBeforeFilled() {
		return this._pushRight(() => {
			if (!this.block.isFixed && this.block.value && (this.offset = this.block.nearestInputPos(this.offset, B.FORCE_RIGHT), this.offset !== this.block.value.length)) return !0;
		});
	}
	pushRightBeforeInput() {
		return this._pushRight(() => {
			if (!this.block.isFixed) return this.offset = this.block.nearestInputPos(this.offset, B.NONE), !0;
		});
	}
	pushRightBeforeRequired() {
		return this._pushRight(() => {
			if (!(this.block.isFixed || this.block.isOptional && !this.block.value)) return this.offset = this.block.nearestInputPos(this.offset, B.NONE), !0;
		});
	}
}, Ci = class {
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
		return e === void 0 && (e = 0), t === void 0 && (t = this._value.length), this._value = this._value.slice(0, e) + this._value.slice(t), this._value || (this._isRawInput = !1), new H();
	}
	nearestInputPos(e, t) {
		t === void 0 && (t = B.NONE);
		let n = this._value.length;
		switch (t) {
			case B.LEFT:
			case B.FORCE_LEFT: return 0;
			case B.NONE:
			case B.RIGHT:
			case B.FORCE_RIGHT:
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
		if (t === void 0 && (t = {}), this.isFilled) return new H();
		let n = this.eager === !0 || this.eager === "append", r = this.char === e && (this.isUnmasking || t.input || t.raw) && (!t.raw || !n) && !t.tail, i = new H({
			inserted: this.char,
			rawInserted: r ? this.char : ""
		});
		return this._value = this.char, this._isRawInput = r && (t.raw || t.input), i;
	}
	_appendEager() {
		return this._appendChar(this.char, { tail: !0 });
	}
	_appendPlaceholder() {
		let e = new H();
		return this.isFilled || (this._value = e.inserted = this.char), e;
	}
	extractTail() {
		return new yi("");
	}
	appendTail(e) {
		return ni(e) && (e = new yi(String(e))), e.appendTo(this);
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
}, wi = class {
	constructor(e) {
		let { parent: t, isOptional: n, placeholderChar: r, displayChar: i, lazy: a, eager: o, ...s } = e;
		this.masked = di(s), Object.assign(this, {
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
		return e === void 0 && (e = 0), t === void 0 && (t = this.value.length), e === 0 && t >= 1 ? (this.isFilled = !1, this.masked.remove(e, t)) : new H();
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
		if (t === void 0 && (t = {}), this.isFilled) return new H();
		let n = this.masked.state, r = this.masked._appendChar(e, this.currentMaskFlags(t));
		return r.inserted && this.doValidate(t) === !1 && (r = new H(), this.masked.state = n), r.inserted || this.isOptional || this.lazy || t.input || (r.inserted = this.placeholderChar), r.skip = !r.inserted && !this.isOptional, this.isFilled = !!r.inserted, r;
	}
	append(e, t, n) {
		return this.masked.append(e, this.currentMaskFlags(t), n);
	}
	_appendPlaceholder() {
		return this.isFilled || this.isOptional ? new H() : (this.isFilled = !0, new H({ inserted: this.placeholderChar }));
	}
	_appendEager() {
		return new H();
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
		t === void 0 && (t = B.NONE);
		let n = this.value.length, r = Math.min(Math.max(e, 0), n);
		switch (t) {
			case B.LEFT:
			case B.FORCE_LEFT: return this.isComplete ? r : 0;
			case B.RIGHT:
			case B.FORCE_RIGHT: return this.isComplete ? r : n;
			case B.NONE:
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
		return new H();
	}
};
wi.DEFAULT_DEFINITIONS = {
	0: /\d/,
	a: /[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
	"*": /./
}, V.MaskedRegExp = class extends bi {
	updateOptions(e) {
		super.updateOptions(e);
	}
	_update(e) {
		let t = e.mask;
		t && (e.validate = (e) => e.search(t) >= 0), super._update(e);
	}
};
// node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/pattern.js
var Ti = class e extends bi {
	constructor(t) {
		super({
			...e.DEFAULTS,
			...t,
			definitions: Object.assign({}, wi.DEFAULT_DEFINITIONS, t?.definitions)
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
					let { expose: e, repeat: t, ...n } = ui(this.blocks[r]), i = {
						lazy: this.lazy,
						eager: this.eager,
						placeholderChar: this.placeholderChar,
						displayChar: this.displayChar,
						overwrite: this.overwrite,
						autofix: this.autofix,
						...n,
						repeat: t,
						parent: this
					}, o = t == null ? di(i) : new V.RepeatBlock(i);
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
			let c = s ? new wi({
				isOptional: i,
				lazy: this.lazy,
				eager: this.eager,
				placeholderChar: this.placeholderChar,
				displayChar: this.displayChar,
				...ui(t[o]),
				parent: this
			}) : new Ci({
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
		let e = new H(), t = this._mapPosToBlock(this.displayValue.length)?.index;
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
		let n = this._mapPosToBlock(this.displayValue.length), r = new H();
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
		let n = new xi();
		return e === t || this._forEachBlocksInRange(e, t, (e, t, r, i) => {
			let a = e.extractTail(r, i);
			a.stop = this._findStopBefore(t), a.from = this._blockStartPos(t), a instanceof xi && (a.blockIndex = t), n.extend(a);
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
		let t = new H();
		if (this.lazy && e == null) return t;
		let n = this._mapPosToBlock(this.displayValue.length);
		if (!n) return t;
		let r = n.index, i = e ?? this._blocks.length;
		return this._blocks.slice(r, i).forEach((n) => {
			n.lazy && e == null || t.aggregate(n._appendPlaceholder(n._blocks?.length));
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
		if (t === void 0 && (t = B.NONE), !this._blocks.length) return 0;
		let n = new Si(this, e);
		if (t === B.NONE) return n.pushRightBeforeInput() || (n.popState(), n.pushLeftBeforeInput()) ? n.pos : this.displayValue.length;
		if (t === B.LEFT || t === B.FORCE_LEFT) {
			if (t === B.LEFT) {
				if (n.pushRightBeforeFilled(), n.ok && n.pos === e) return e;
				n.popState();
			}
			if (n.pushLeftBeforeInput(), n.pushLeftBeforeRequired(), n.pushLeftBeforeFilled(), t === B.LEFT) {
				if (n.pushRightBeforeInput(), n.pushRightBeforeRequired(), n.ok && n.pos <= e || (n.popState(), n.ok && n.pos <= e)) return n.pos;
				n.popState();
			}
			return n.ok ? n.pos : t === B.FORCE_LEFT ? 0 : (n.popState(), n.ok || (n.popState(), n.ok) ? n.pos : 0);
		}
		return t === B.RIGHT || t === B.FORCE_RIGHT ? (n.pushRightBeforeInput(), n.pushRightBeforeRequired(), n.pushRightBeforeFilled() ? n.pos : t === B.FORCE_RIGHT ? this.displayValue.length : (n.popState(), n.ok || (n.popState(), n.ok) ? n.pos : this.nearestInputPos(e, B.LEFT))) : e;
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
		let t = new H();
		return this._forEachBlocksInRange(0, this.displayValue.length, (n) => t.aggregate(n.pad(e))), t;
	}
};
Ti.DEFAULTS = {
	...bi.DEFAULTS,
	lazy: !0,
	placeholderChar: "_"
}, Ti.STOP_CHAR = "`", Ti.ESCAPE_CHAR = "\\", Ti.InputDefinition = wi, Ti.FixedDefinition = Ci, V.MaskedPattern = Ti;
// node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/range.js
var Ei = class extends Ti {
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
		let t = new H();
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
V.MaskedRange = Ei;
// node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/date.js
var Di = "d{.}`m{.}`Y", Oi = class e extends Ti {
	static extractPatternOptions(e) {
		let { mask: t, pattern: n, ...r } = e;
		return {
			...r,
			mask: ni(t) ? t : n
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
			mask: ni(n) ? n : r,
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
Oi.GET_DEFAULT_BLOCKS = () => ({
	d: {
		mask: Ei,
		from: 1,
		to: 31,
		maxLength: 2
	},
	m: {
		mask: Ei,
		from: 1,
		to: 12,
		maxLength: 2
	},
	Y: {
		mask: Ei,
		from: 1900,
		to: 9999
	}
}), Oi.DEFAULTS = {
	...Ti.DEFAULTS,
	mask: Date,
	pattern: Di,
	format: (e, t) => e ? [
		String(e.getDate()).padStart(2, "0"),
		String(e.getMonth() + 1).padStart(2, "0"),
		e.getFullYear()
	].join(".") : "",
	parse: (e, t) => {
		let [n, r, i] = e.split(".").map(Number);
		return new Date(i, r - 1, n);
	}
}, V.MaskedDate = Oi;
// node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/dynamic.js
var ki = class e extends bi {
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
			let { expose: t, ...n } = ui(e), r = di({
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
		let r = t.tail && t._beforeTailState != null ? t._beforeTailState._value : this.value, i = this.rawInputValue, a = t.tail && t._beforeTailState != null ? t._beforeTailState._rawInputValue : i, o = i.slice(a.length), s = this.currentMask, c = new H(), l = s?.state;
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
		let t = new H();
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
		let n = new H();
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
			return si(t, i) && t.maskEquals(r);
		}) : super.maskEquals(e);
	}
	typedValueEquals(e) {
		return !!this.currentMask?.typedValueEquals(e);
	}
};
ki.DEFAULTS = {
	...bi.DEFAULTS,
	dispatch: (e, t, n, r) => {
		if (!t.compiledMasks.length) return;
		let i = t.rawInputValue, a = t.compiledMasks.map((a, o) => {
			let s = t.currentMask === a, c = s ? a.displayValue.length : a.nearestInputPos(a.displayValue.length, B.FORCE_LEFT);
			return a.rawInputValue === i ? s || a.remove(c) : (a.reset(), a.append(i, { raw: !0 })), a.append(e, t.currentMaskFlags(n)), a.appendTail(r), {
				index: o,
				weight: a.rawInputValue.length,
				totalInputPositions: a.totalInputPositions(0, Math.max(c, a.nearestInputPos(a.displayValue.length, B.FORCE_LEFT)))
			};
		});
		return a.sort((e, t) => t.weight - e.weight || t.totalInputPositions - e.totalInputPositions), t.compiledMasks[a[0].index];
	}
}, V.MaskedDynamic = ki;
// node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/enum.js
var Ai = class e extends Ti {
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
		let n = Math.min(this.nearestInputPos(0, B.FORCE_RIGHT), this.value.length), r = this.enum.filter((t) => this.matchValue(t, this.unmaskedValue + e, n));
		if (r.length) {
			r.length === 1 && this._forEachBlocksInRange(0, this.value.length, (e, n) => {
				let i = r[0][n];
				n >= this.value.length || i === e.value || (e.reset(), e._appendChar(i, t));
			});
			let e = super._appendCharRaw(r[0][this.value.length], t);
			return r.length === 1 && r[0].slice(this.unmaskedValue.length).split("").forEach((t) => e.aggregate(super._appendCharRaw(t))), e;
		}
		return new H({ skip: !this.isComplete });
	}
	extractTail(e, t) {
		return e === void 0 && (e = 0), t === void 0 && (t = this.displayValue.length), new yi("", e);
	}
	remove(e, t) {
		if (e === void 0 && (e = 0), t === void 0 && (t = this.displayValue.length), e === t) return new H();
		let n = Math.min(super.nearestInputPos(0, B.FORCE_RIGHT), this.value.length), r;
		for (r = e; r >= 0 && !(this.enum.filter((e) => this.matchValue(e, this.value.slice(n, r), n)).length > 1); --r);
		let i = super.remove(r, t);
		return i.tailShift += r - e, i;
	}
	get isComplete() {
		return this.enum.indexOf(this.value) >= 0;
	}
};
Ai.DEFAULTS = {
	...Ti.DEFAULTS,
	matchValue: (e, t, n) => e.indexOf(t, n) === n
}, V.MaskedEnum = Ai, V.MaskedFunction = class extends bi {
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
// node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/number.js
var ji, Mi = class e extends bi {
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
		let e = "^" + (this.allowNegative ? "[+|\\-]?" : ""), t = (this.scale ? "(" + oi(this.radix) + "\\d{0," + this.scale + "})?" : "") + "$";
		this._numberRegExp = RegExp(e + "\\d*" + t), this._mapToRadixRegExp = RegExp("[" + this.mapToRadix.map(oi).join("") + "]", "g"), this._thousandsSeparatorRegExp = new RegExp(oi(this.thousandsSeparator), "g");
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
		s ? l = new H({
			inserted: this._value.slice(a.length),
			rawInserted: c ? "" : t,
			skip: c
		}) : (this._value = a, l = new H()), this._value = this._insertThousandsSeparators(this._value);
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
		return this._value = this._insertThousandsSeparators(this._removeThousandsSeparators(n + r)), new H({ tailShift: (this._separatorsCountFromSlice(n) - i) * this.thousandsSeparator.length });
	}
	nearestInputPos(e, t) {
		if (!this.thousandsSeparator) return e;
		switch (t) {
			case B.NONE:
			case B.LEFT:
			case B.FORCE_LEFT: {
				let n = this._findSeparatorAround(e - 1);
				if (n >= 0) {
					let r = n + this.thousandsSeparator.length;
					if (e < r || this.value.length <= r || t === B.FORCE_LEFT) return n;
				}
				break;
			}
			case B.RIGHT:
			case B.FORCE_RIGHT: {
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
		return (super.typedValueEquals(t) || e.EMPTY_VALUES.includes(t) && e.EMPTY_VALUES.includes(this.typedValue)) && (t !== 0 || this.value !== "");
	}
};
ji = Mi, Mi.UNMASKED_RADIX = ".", Mi.EMPTY_VALUES = [...bi.EMPTY_VALUES, 0], Mi.DEFAULTS = {
	...bi.DEFAULTS,
	mask: Number,
	radix: ",",
	thousandsSeparator: "",
	mapToRadix: [ji.UNMASKED_RADIX],
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
}, V.MaskedNumber = Mi;
// node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/pipe.js
var Ni = {
	MASKED: "value",
	UNMASKED: "unmaskedValue",
	TYPED: "typedValue"
};
function Pi(e, t, n) {
	t === void 0 && (t = Ni.MASKED), n === void 0 && (n = Ni.MASKED);
	let r = di(e);
	return (e) => r.runIsolated((r) => (r[t] = e, r[n]));
}
function Fi(e, t, n, r) {
	return Pi(t, n, r)(e);
}
V.PIPE_TYPE = Ni, V.createPipe = Pi, V.pipe = Fi, V.RepeatBlock = class extends Ti {
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
		let { repeat: t, ...n } = ui(e);
		this._blockOpts = Object.assign({}, this._blockOpts, n);
		let r = di(this._blockOpts);
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
		if (this.repeatTo === Infinity || this._blocks.length < this.repeatTo) return this._blocks.push(di(this._blockOpts)), this.mask += "m", this._blocks[this._blocks.length - 1];
	}
	_appendCharRaw(e, t) {
		t === void 0 && (t = {});
		let n = new H();
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
// node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/index.js
try {
	globalThis.IMask = V;
} catch {}
// node_modules/.pnpm/react-imask@7.6.1_react@18.3.1/node_modules/react-imask/esm/mixin.js
var Ii = {
	mask: z.default.oneOfType([
		z.default.array,
		z.default.func,
		z.default.string,
		z.default.instanceOf(RegExp),
		z.default.oneOf([
			Date,
			Number,
			V.Masked
		]),
		z.default.instanceOf(V.Masked)
	]),
	value: z.default.any,
	unmask: z.default.oneOfType([z.default.bool, z.default.oneOf(["typed"])]),
	prepare: z.default.func,
	prepareChar: z.default.func,
	validate: z.default.func,
	commit: z.default.func,
	overwrite: z.default.oneOfType([z.default.bool, z.default.oneOf(["shift"])]),
	eager: z.default.oneOfType([z.default.bool, z.default.oneOf(["append", "remove"])]),
	skipInvalid: z.default.bool,
	onAccept: z.default.func,
	onComplete: z.default.func,
	placeholderChar: z.default.string,
	displayChar: z.default.string,
	lazy: z.default.bool,
	definitions: z.default.object,
	blocks: z.default.object,
	enum: z.default.arrayOf(z.default.string),
	maxLength: z.default.number,
	from: z.default.number,
	to: z.default.number,
	pattern: z.default.string,
	format: z.default.func,
	parse: z.default.func,
	autofix: z.default.oneOfType([z.default.bool, z.default.oneOf(["pad"])]),
	radix: z.default.string,
	thousandsSeparator: z.default.string,
	mapToRadix: z.default.arrayOf(z.default.string),
	scale: z.default.number,
	normalizeZeros: z.default.bool,
	padFractionalZeros: z.default.bool,
	min: z.default.oneOfType([z.default.number, z.default.instanceOf(Date)]),
	max: z.default.oneOfType([z.default.number, z.default.instanceOf(Date)]),
	dispatch: z.default.func,
	inputRef: z.default.oneOfType([z.default.func, z.default.shape({ current: z.default.object })])
}, Li = Object.keys(Ii).filter((e) => e !== "value"), Ri = [
	"value",
	"unmask",
	"onAccept",
	"onComplete",
	"inputRef"
], zi = Li.filter((e) => Ri.indexOf(e) < 0);
function Bi(e) {
	var t = class extends I.Component {
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
			e === void 0 && (e = this._extractMaskOptionsFromProps(this.props)), this.maskRef = V(this.element, e).on("accept", this._onAccept.bind(this)).on("complete", this._onComplete.bind(this)), "value" in this.props && this.props.value !== void 0 && (this.maskValue = this.props.value);
		}
		destroyMask() {
			this.maskRef && (this.maskRef.destroy(), delete this.maskRef);
		}
		_extractMaskOptionsFromProps(e) {
			let { ...t } = e;
			return Object.keys(t).filter((e) => zi.indexOf(e) < 0).forEach((e) => {
				delete t[e];
			}), t;
		}
		_extractNonMaskProps(e) {
			let { ...t } = e;
			return Li.forEach((e) => {
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
	};
	let n = (t.displayName = void 0, t.propTypes = void 0, t);
	return n.displayName = "IMask(" + (e.displayName || e.name || "Component") + ")", n.propTypes = Ii, I.forwardRef((e, t) => I.createElement(n, {
		...e,
		ref: t
	}));
}
// node_modules/.pnpm/react-imask@7.6.1_react@18.3.1/node_modules/react-imask/esm/input.js
var Vi = Bi((e) => {
	let { inputRef: t, ...n } = e;
	return I.createElement("input", {
		...n,
		ref: t
	});
}), Hi = I.forwardRef((e, t) => I.createElement(Vi, {
	...e,
	ref: t
})), Ui = (e = {}) => Object.entries(e).reduce((e, [t, n]) => (n !== void 0 && (e[t] = n), e), {}), Wi = (...e) => (t) => {
	e.filter((e) => typeof e == "function").forEach((e) => e(t));
}, Gi = ({ defaultValue: e, value: t }) => {
	let [n, r] = (0, I.useState)(!!e || e === 0);
	return [!!t || t === 0 || n, (e) => r(!!e.target.value)];
}, Ki = (e, t) => {
	let [n, r] = (0, I.useState)(t || []), i = (e) => (r((t) => [...t, e]), e), a = () => {
		let t = ve(`${e}-`);
		return i(t);
	}, o = (e) => {
		r((t) => t.filter((t) => t !== e));
	};
	return [n, (e) => {
		let [t, n] = (0, I.useState)(e);
		return (0, I.useEffect)(() => (e ? i(e) : t || n(a()), () => o(t)), [t, e]), t;
	}];
}, qi = (e) => e, Ji = /*#__PURE__*/ I.createContext({
	getControlProps: qi,
	useSetIsControlGroupEffect: () => {},
	getLabelProps: qi,
	getDescriptorProps: qi,
	hasFormGroupProvider: !1
}), Yi = () => I.useContext(Ji);
function Xi(e) {
	let [t, n] = (0, I.useState)(e);
	return [t, (e) => {
		(0, I.useEffect)(() => n(e), [e]);
	}];
}
function Zi({ children: e, controlId: t, isInvalid: n, isValid: r, size: i }) {
	let a = (0, I.useMemo)(() => t || ve("form-field"), [t]), [o, s] = Ki(a), [c, l] = Ki(a), [u, d] = Xi(!1), f = {
		getControlProps: (0, I.useCallback)((e) => {
			let t = u ? c : void 0;
			return Ui({
				...e,
				"aria-describedby": (0, R.default)(e["aria-describedby"], o) || void 0,
				"aria-labelledby": (0, R.default)(e["aria-labelledby"], t) || void 0,
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
	return /*#__PURE__*/ I.createElement(Ji.Provider, { value: f }, e);
}
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Form/constants.js
var Qi = {
	SMALL: "sm",
	LARGE: "lg"
}, $i = {
	DEFAULT: "default",
	VALID: "valid",
	INVALID: "invalid",
	WARNING: "warning",
	CRITERIA_EMPTY: "criteria-empty",
	CRITERIA_VALID: "criteria-valid",
	CRITERIA_INVALID: "criteria-invalid"
}, ea = {
	[$i.DEFAULT]: null,
	[$i.VALID]: Kr,
	[$i.INVALID]: Jr,
	[$i.WARNING]: ti,
	[$i.CRITERIA_EMPTY]: ei,
	[$i.CRITERIA_VALID]: qr,
	[$i.CRITERIA_INVALID]: Gr
}, ta = ({ isInvalid: e, isValid: t }) => t ? $i.VALID : e ? $i.INVALID : $i.DEFAULT;
function na({ type: e, customIcon: t }) {
	if (t) return t;
	let n = ea[e];
	return n ? /*#__PURE__*/ I.createElement(fe, { src: n }) : null;
}
na.propTypes = {
	type: z.default.oneOf(Object.values($i)),
	customIcon: z.default.node
}, na.defaultProps = {
	type: void 0,
	customIcon: void 0
};
function ra({ children: e, type: t, icon: n, muted: r, hasIcon: i, ...a }) {
	let o = (0, R.default)(a.className, "pgn__form-text", `pgn__form-text-${t}`, { "text-muted": r });
	return /*#__PURE__*/ I.createElement("div", {
		...a,
		className: o
	}, i && /*#__PURE__*/ I.createElement(na, {
		customIcon: n,
		type: t
	}), /*#__PURE__*/ I.createElement("div", null, e));
}
ra.propTypes = {
	children: z.default.node.isRequired,
	className: z.default.string,
	hasIcon: z.default.bool,
	type: z.default.oneOf([
		"default",
		"valid",
		"invalid",
		"warning",
		"criteria-empty",
		"criteria-valid",
		"criteria-invalid"
	]),
	icon: z.default.node,
	muted: z.default.bool
}, ra.defaultProps = {
	hasIcon: !0,
	type: "default",
	icon: void 0,
	className: void 0,
	muted: !1
};
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Form/FormControlFeedback.js
function ia({ children: e, ...t }) {
	let { getDescriptorProps: n, isInvalid: r, isValid: i } = Yi(), a = n(t), o = (0, R.default)("pgn__form-control-description", t.className), s = t.type || ta({
		isInvalid: r,
		isValid: i
	});
	return /*#__PURE__*/ I.createElement(ra, {
		...a,
		className: o,
		type: s
	}, e);
}
ia.propTypes = {
	children: z.default.node.isRequired,
	className: z.default.string,
	hasIcon: z.default.bool,
	type: z.default.oneOf([
		"default",
		"valid",
		"invalid",
		"warning",
		"criteria-empty",
		"criteria-valid",
		"criteria-invalid"
	]),
	icon: z.default.node,
	muted: z.default.bool
}, ia.defaultProps = {
	hasIcon: !0,
	type: void 0,
	icon: void 0,
	className: void 0,
	muted: !1
};
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Form/FormControlFloatingLabel.js
function aa({ children: e }) {
	let { controlId: t } = Yi();
	return /*#__PURE__*/ I.createElement("div", { className: "pgn__form-control-floating-label" }, /*#__PURE__*/ I.createElement("div", { className: "pgn__form-control-floating-label-content" }, /*#__PURE__*/ I.createElement("label", {
		className: "pgn__form-control-floating-label-text",
		htmlFor: t
	}, e)));
}
aa.propTypes = { children: z.default.node.isRequired };
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Form/FormControlDecorator.js
function oa({ children: e, location: t }) {
	return /*#__PURE__*/ I.createElement("div", { className: `pgn__form-control-decorator pgn__form-control-decorator-${t}` }, e);
}
oa.propTypes = {
	children: z.default.node.isRequired,
	location: z.default.oneOf(["leading", "trailing"])
}, oa.defaultProps = { location: "leading" };
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Form/FormControlDecoratorGroup.js
function sa({ children: e, leadingElement: t, trailingElement: n, floatingLabel: r, className: i, ...a }) {
	let o = Yi(a), s = a.size || o.size;
	return /*#__PURE__*/ I.createElement("div", {
		className: (0, R.default)("pgn__form-control-decorator-group", {
			"has-prepended-node": !!t,
			"has-appended-node": !!n,
			"has-leading-element": !!t,
			"has-trailing-element": !!n,
			"has-floating-label": !!r,
			"pgn__form-control-decorator-group-lg": s === Qi.LARGE,
			"pgn__form-control-decorator-group-sm": s === Qi.SMALL
		}, i),
		...a
	}, e, t && /*#__PURE__*/ I.createElement(oa, { location: "leading" }, t), n && /*#__PURE__*/ I.createElement(oa, { location: "trailing" }, n), r && /*#__PURE__*/ I.createElement(aa, null, r));
}
sa.propTypes = {
	children: z.default.node.isRequired,
	leadingElement: z.default.node,
	trailingElement: z.default.node,
	floatingLabel: z.default.node,
	className: z.default.string,
	size: z.default.oneOf([Qi.SMALL, Qi.LARGE])
}, sa.defaultProps = {
	leadingElement: void 0,
	trailingElement: void 0,
	floatingLabel: void 0,
	className: void 0,
	size: void 0
};
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Form/FormControl.js
var ca = /*#__PURE__*/ I.forwardRef(({ as: e, className: t, controlClassName: n, leadingElement: r, trailingElement: i, floatingLabel: a, autoResize: o, onChange: s, inputMask: c, ...l }, u) => {
	let { isInvalid: d, isValid: f, getControlProps: p, ...m } = Yi(), h = I.useRef(), g = u || h, _ = l.size || m.size, [v, y] = Gi({
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
		onBlur: Wi(y, l.onBlur)
	});
	return /*#__PURE__*/ I.createElement(sa, {
		size: _,
		leadingElement: r,
		trailingElement: i,
		floatingLabel: a,
		className: t
	}, /*#__PURE__*/ I.createElement(an, {
		as: c ? Hi : e,
		ref: g,
		size: _,
		isInvalid: d,
		isValid: f,
		className: (0, R.default)(n, { "has-value": v }),
		onChange: (e) => {
			b(), s && s(e);
		},
		mask: c,
		...x
	}));
});
ca.Feedback = ia, ca.Description = ia, ca.propTypes = {
	className: z.default.string,
	as: z.default.elementType,
	onChange: z.default.func,
	defaultValue: z.default.oneOfType([z.default.string, z.default.number]),
	value: z.default.oneOfType([z.default.string, z.default.number]),
	id: z.default.string,
	controlClassName: z.default.string,
	size: z.default.oneOf(["sm", "lg"]),
	leadingElement: z.default.node,
	trailingElement: z.default.node,
	floatingLabel: z.default.node,
	plaintext: z.default.bool,
	isValid: z.default.bool,
	isInvalid: z.default.bool,
	autoResize: z.default.bool,
	inputMask: z.default.string
}, ca.defaultProps = {
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
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Form/FormLabel.js
function la({ children: e, isInline: t = !1, ...n }) {
	let { size: r, isControlGroup: i, getLabelProps: a } = Yi(), o = (0, R.default)("pgn__form-label", {
		"pgn__form-label-inline": t,
		"pgn__form-label-lg": r === Qi.LARGE,
		"pgn__form-label-sm": r === Qi.SMALL
	}, n.className), s = a({
		...n,
		className: o
	}), c = i ? "p" : "label";
	return /*#__PURE__*/ I.createElement(c, s, e);
}
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Form/FormGroup.js
function ua({ children: e, controlId: t, isInvalid: n = !1, isValid: r = !1, size: i, as: a, ...o }) {
	return /*#__PURE__*/ I.createElement(a ?? "div", {
		...o,
		className: (0, R.default)("pgn__form-group", o.className)
	}, /*#__PURE__*/ I.createElement(Zi, {
		controlId: t,
		isInvalid: n,
		isValid: r,
		size: i
	}, e));
}
var da = /*#__PURE__*/ I.createContext({
	getRadioControlProps: (e) => e,
	hasRadioSetProvider: !1
}), fa = () => (0, I.useContext)(da);
function pa({ children: e, name: t, onBlur: n, onFocus: r, onChange: i, value: a, defaultValue: o }) {
	let s = !o && a !== void 0, c = {
		name: t,
		value: a,
		defaultValue: o,
		getRadioControlProps: (e) => ({
			...e,
			name: t,
			/* istanbul ignore next */
			onBlur: e.onBlur ? Wi(n, e.onBlur) : n,
			/* istanbul ignore next */
			onFocus: e.onFocus ? Wi(r, e.onFocus) : r,
			/* istanbul ignore next */
			onChange: e.onChange ? Wi(i, e.onChange) : i,
			checked: s ? a === e.value : void 0,
			defaultChecked: s ? void 0 : o === e.value
		}),
		onBlur: n,
		onFocus: r,
		onChange: i,
		hasRadioSetProvider: !0
	};
	return /*#__PURE__*/ I.createElement(da.Provider, { value: c }, e);
}
pa.propTypes = {
	children: z.default.node.isRequired,
	name: z.default.string.isRequired,
	onBlur: z.default.func,
	onFocus: z.default.func,
	onChange: z.default.func,
	value: z.default.string,
	defaultValue: z.default.string
}, pa.defaultProps = {
	onBlur: void 0,
	onFocus: void 0,
	onChange: void 0,
	value: void 0,
	defaultValue: void 0
};
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Form/FormRadio.js
var ma = /*#__PURE__*/ I.forwardRef((e, t) => {
	let { getControlProps: n } = Yi(), { getRadioControlProps: r, hasRadioSetProvider: i } = fa(), a = n({
		...e,
		className: (0, R.default)("pgn__form-radio-input", e.className)
	});
	return i && (a = r(a)), /*#__PURE__*/ I.createElement("input", {
		...a,
		type: "radio",
		ref: t
	});
});
ma.propTypes = { className: z.default.string }, ma.defaultProps = { className: void 0 };
var ha = /*#__PURE__*/ I.forwardRef(({ children: e, className: t, controlClassName: n, labelClassName: r, description: i, isInvalid: a, isValid: o, ...s }, c) => /*#__PURE__*/ I.createElement(Zi, {
	controlId: s.id,
	isInvalid: a,
	isValid: o
}, /*#__PURE__*/ I.createElement("div", { className: (0, R.default)("pgn__form-radio", t, {
	"pgn__form-control-valid": o,
	"pgn__form-control-invalid": a,
	"pgn__form-control-disabled": s.disabled
}) }, /*#__PURE__*/ I.createElement(ma, {
	ref: c,
	className: n,
	...s
}), /*#__PURE__*/ I.createElement("div", null, /*#__PURE__*/ I.createElement(la, { className: r }, e), i && /*#__PURE__*/ I.createElement(ia, { hasIcon: !1 }, i)))));
ha.propTypes = {
	id: z.default.string,
	children: z.default.node.isRequired,
	className: z.default.string,
	controlClassName: z.default.string,
	labelClassName: z.default.string,
	description: z.default.node,
	isInvalid: z.default.bool,
	isValid: z.default.bool,
	disabled: z.default.bool
}, ha.defaultProps = {
	id: void 0,
	className: void 0,
	controlClassName: void 0,
	labelClassName: void 0,
	description: void 0,
	isInvalid: !1,
	isValid: !1,
	disabled: !1
};
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Form/FormControlSet.js
function ga({ as: e, className: t, isInline: n, children: r, ...i }) {
	return /*#__PURE__*/ I.createElement(e, {
		className: (0, R.default)(t, {
			"pgn__form-control-set": !n,
			"pgn__form-control-set-inline": n
		}),
		...i
	}, r);
}
ga.propTypes = {
	as: z.default.elementType,
	className: z.default.string,
	isInline: z.default.bool,
	children: z.default.node
}, ga.defaultProps = {
	as: "div",
	className: void 0,
	isInline: !1,
	children: null
};
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Form/FormRadioSet.js
function _a({ children: e, name: t, value: n, defaultValue: r, isInline: i, onChange: a, onFocus: o, onBlur: s, ...c }) {
	let { getControlProps: l, useSetIsControlGroupEffect: u } = Yi();
	u(!0);
	let d = l(c);
	return /*#__PURE__*/ I.createElement(pa, {
		name: t,
		value: n,
		defaultValue: r,
		onFocus: o,
		onBlur: s,
		onChange: a
	}, /*#__PURE__*/ I.createElement(ga, {
		role: "radiogroup",
		isInline: i,
		...d
	}, e));
}
_a.propTypes = {
	children: z.default.node.isRequired,
	className: z.default.string,
	name: z.default.string.isRequired,
	value: z.default.string,
	defaultValue: z.default.string,
	isInline: z.default.bool,
	onChange: z.default.func,
	onFocus: z.default.func,
	onBlur: z.default.func
}, _a.defaultProps = {
	className: void 0,
	value: void 0,
	defaultValue: void 0,
	isInline: !1,
	onChange: void 0,
	onFocus: void 0,
	onBlur: void 0
};
// node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/rng.js
var va, ya = /* @__PURE__ */ new Uint8Array(16);
function ba() {
	if (!va && (va = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !va)) throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
	return va(ya);
}
// node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/stringify.js
var xa = [];
for (let e = 0; e < 256; ++e) xa.push((e + 256).toString(16).slice(1));
function Sa(e, t = 0) {
	return xa[e[t + 0]] + xa[e[t + 1]] + xa[e[t + 2]] + xa[e[t + 3]] + "-" + xa[e[t + 4]] + xa[e[t + 5]] + "-" + xa[e[t + 6]] + xa[e[t + 7]] + "-" + xa[e[t + 8]] + xa[e[t + 9]] + "-" + xa[e[t + 10]] + xa[e[t + 11]] + xa[e[t + 12]] + xa[e[t + 13]] + xa[e[t + 14]] + xa[e[t + 15]];
}
var Ca = { randomUUID: typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto) };
// node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/v4.js
function wa(e, t, n) {
	if (Ca.randomUUID && !t && !e) return Ca.randomUUID();
	e ||= {};
	let r = e.random || (e.rng || ba)();
	if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, t) {
		n ||= 0;
		for (let e = 0; e < 16; ++e) t[n + e] = r[e];
		return t;
	}
	return Sa(r);
}
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/utils/propTypes/utils.js
var Ta = (e, t, n) => ((r, i, a, ...o) => t(r) && r[i] === void 0 ? /* @__PURE__ */ Error(`${a}: ${i} is required when ${n}`) : e(r, i, a, ...o)), Ea = (e, t) => t.every((t) => e[t] !== void 0), Da = (e, t) => Ta(e, (e) => Array.isArray(t) ? Ea(e, t) : e[t] === !0, `${t} ${Array.isArray(t) ? "are defined" : "is truthy"}`), Oa = /*#__PURE__*/ I.forwardRef(({ className: e, screenReaderText: t, ...n }, r) => {
	let i = {
		...n,
		className: (0, R.default)("pgn__spinner", e),
		role: t ? "status" : void 0
	};
	return /*#__PURE__*/ I.createElement(Zn, {
		...i,
		ref: r
	}, t && /*#__PURE__*/ I.createElement("span", { className: "sr-only" }, t));
});
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/hooks/useArrowKeyNavigationHook.js
function ka({ event: e, currentIndex: t, activeElement: n }) {
	t !== -1 && (n.click(), e.preventDefault());
}
function Aa({ event: e, currentIndex: t, availableElements: n }) {
	t === -1 && n[0].focus();
	let r;
	(e.key === "ArrowDown" || e.key === "ArrowRight") && (r = n[(t + 1) % n.length]), (e.key === "ArrowUp" || e.key === "ArrowLeft") && (r = t - 1 < 0 ? n[t - 1 + n.length] : n[t - 1]), e.key === "End" && (r = n[n.length - 1]), e.key === "Home" && ([r] = n), r?.focus(), e.preventDefault();
}
function ja({ event: e, ignoredKeys: t = [], parentNode: n, selectors: r = "a,button,input" }) {
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
	i === "Enter" && a && ka({
		event: e,
		currentIndex: s,
		activeElement: a
	}), Aa({
		event: e,
		currentIndex: s,
		availableElements: o
	});
}
function Ma(e = {}) {
	let { selectors: t, ignoredKeys: n } = e, r = (0, I.useRef)();
	return (0, I.useEffect)(() => {
		let e = (e) => {
			ja({
				event: e,
				ignoredKeys: n,
				parentNode: r.current,
				selectors: t
			});
		};
		return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e);
	}, [n, t]), r;
}
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Form/messages.js
var Na = D({
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
}), Pa = /*#__PURE__*/ (0, I.forwardRef)(({ children: e, arrowKeyNavigationSelector: t, ignoredArrowKeysNames: n, screenReaderText: r, value: i, isLoading: a, isValueRequired: o, valueRequiredErrorMessageText: s, isSelectionRequired: c, selectionRequiredErrorMessageText: l, hasCustomError: u, customErrorMessageText: d, onChange: f, helpMessage: p, ...m }, h) => {
	let g = E(), _ = (0, I.useRef)(), v = Ma({
		selectors: t,
		ignoredKeys: n
	}), [y, b] = (0, I.useState)(!1), [x, S] = (0, I.useState)(!1), [C, w] = (0, I.useState)(!1), [T, D] = (0, I.useState)(!1), [O, k] = (0, I.useState)(i?.userProvidedText || ""), [A, j] = (0, I.useState)([]), [ee, te] = (0, I.useState)(null), [M, N] = (0, I.useState)(!0), [P, ne] = (0, I.useState)(""), re = (e) => {
		te(e);
	}, ie = () => {
		j([]), b(!1), te(null);
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
			let { children: t, onClick: n, ...r } = e.props, i = e.props.id ?? wa();
			return /*#__PURE__*/ I.cloneElement(e, {
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
		j(oe(O)), N(!0), ne(""), b(!0);
	}, ce = /*#__PURE__*/ I.createElement(ue, {
		className: "pgn__form-autosuggest__icon-button",
		"data-testid": "autosuggest-iconbutton",
		tabIndex: "-1",
		src: y ? $r : Qr,
		iconAs: fe,
		size: "sm",
		variant: "secondary",
		alt: y ? g.formatMessage(Na.iconButtonClosed) : g.formatMessage(Na.iconButtonOpened),
		onClick: () => {
			y ? ie() : se();
		}
	}), le = () => {
		S(!0);
	}, de = () => {
		u ? (N(!1), ne(d)) : o && !C ? (N(!1), ne(s)) : C && c && !T ? (N(!1), ne(l)) : (N(!0), ne(""));
	};
	(0, I.useImperativeHandle)(h, () => ({ updateErrorStateAndErrorMessage: de }));
	let pe = () => {
		S(!1), ie(), de();
	}, me = (e) => {
		x && (e.key === "Escape" ? (e.preventDefault(), _ && _.current.focus(), ie()) : e.key === "Tab" && pe());
	}, he = (e) => {
		v.current && !v.current.contains(e.target) && x && pe();
	};
	(0, I.useEffect)(() => (document.addEventListener("keydown", me), document.addEventListener("click", he, !0), () => {
		document.removeEventListener("click", he, !0), document.removeEventListener("keydown", me);
	})), (0, I.useEffect)(() => {
		k(i ? i.userProvidedText ?? "" : ""), w(!!i && !!i.userProvidedText), D(!!i && !!i.selectionValue);
	}, [i]);
	let ge = () => {
		se();
	}, _e = (e) => {
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
		r ? (D(!0), k(r.props.children), f && f({
			userProvidedText: r.props.children,
			selectionValue: r.props.children,
			selectionId: r.props.id
		})) : (D(!1), k(t), f && f({
			userProvidedText: t,
			selectionValue: "",
			selectionId: ""
		}));
	}, { getControlProps: ve } = Yi(), ye = ve(m);
	return /*#__PURE__*/ I.createElement("div", {
		className: "pgn__form-autosuggest__wrapper",
		ref: v,
		onFocus: le
	}, /*#__PURE__*/ I.createElement("div", {
		"aria-live": "assertive",
		className: "sr-only",
		"data-testid": "autosuggest-screen-reader-options-count"
	}, `${A.length} options found`), /*#__PURE__*/ I.createElement(Zi, {
		controlId: ye.id,
		isInvalid: !M
	}, /*#__PURE__*/ I.createElement(ca, {
		ref: _,
		"aria-expanded": (A.length > 0).toString(),
		"aria-owns": "pgn__form-autosuggest__dropdown-box",
		role: "combobox",
		"aria-autocomplete": "list",
		autoComplete: "off",
		value: O,
		"aria-invalid": P,
		"aria-activedescendant": ee,
		onChange: _e,
		onClick: ge,
		trailingElement: ce,
		"data-testid": "autosuggest-textbox-input",
		...ye
	}), p && M && /*#__PURE__*/ I.createElement(ia, { type: "default" }, p), !M && /*#__PURE__*/ I.createElement(ia, {
		type: "invalid",
		"feedback-for": ye.name
	}, P)), /*#__PURE__*/ I.createElement("ul", {
		id: "pgn__form-autosuggest__dropdown-box",
		className: "pgn__form-autosuggest__dropdown",
		role: "listbox"
	}, a ? /*#__PURE__*/ I.createElement("div", { className: "pgn__form-autosuggest__dropdown-loading" }, /*#__PURE__*/ I.createElement(Oa, {
		animation: "border",
		variant: "dark",
		screenReaderText: r,
		"data-testid": "autosuggest-loading-spinner"
	})) : A.length > 0 && A));
});
Pa.defaultProps = {
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
}, Pa.propTypes = {
	arrowKeyNavigationSelector: z.default.string,
	ignoredArrowKeysNames: z.default.arrayOf(z.default.string),
	isLoading: z.default.bool,
	className: z.default.string,
	floatingLabel: z.default.string,
	onChange: z.default.func,
	helpMessage: z.default.string,
	placeholder: z.default.string,
	value: z.default.shape({
		userProvidedText: z.default.string,
		selectionValue: z.default.string,
		selectionId: z.default.string
	}),
	isValueRequired: z.default.bool,
	valueRequiredErrorMessageText: Da(z.default.string, "isValueRequired"),
	isSelectionRequired: z.default.bool,
	selectionRequiredErrorMessageText: Da(z.default.string, "isSelectionRequired"),
	hasCustomError: z.default.bool,
	customErrorMessageText: Da(z.default.string, "hasCustomError"),
	name: z.default.string,
	readOnly: z.default.bool,
	children: z.default.node,
	screenReaderText: z.default.string
};
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Menu/MenuItem.js
function Fa({ as: e = "button", children: t, defaultSelected: n = !1, iconAfter: r, iconBefore: i, ...a }) {
	let o = (0, R.default)(a.className, "pgn__menu-item");
	return /*#__PURE__*/ (0, I.createElement)(e, {
		...a,
		className: o
	}, /*#__PURE__*/ I.createElement(I.Fragment, null, i && /*#__PURE__*/ I.createElement(fe, {
		className: "btn-icon-before",
		src: i
	}), /*#__PURE__*/ I.createElement("span", { className: "pgn__menu-item-text" }, t), /*#__PURE__*/ I.createElement("span", { className: "pgn__menu-item-content-spacer" }), r && /*#__PURE__*/ I.createElement(fe, {
		className: "btn-icon-after",
		src: r
	})));
}
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Form/FormAutosuggestOption.js
function Ia({ children: e, className: t, onClick: n, ...r }) {
	return /*#__PURE__*/ I.createElement(Fa, {
		as: "li",
		"data-testid": "autosuggest-optionitem",
		role: "option",
		tabIndex: "-1",
		onClick: n,
		className: (0, R.default)(t, "dropdown-item"),
		...r
	}, e);
}
Ia.defaultProps = {
	className: null,
	children: null,
	onClick: null
}, Ia.propTypes = {
	className: z.default.string,
	children: z.default.string,
	onClick: z.default.func
};
var La = /*#__PURE__*/ I.createContext({
	getCheckboxControlProps: (e) => e,
	hasCheckboxSetProvider: !1
}), Ra = () => (0, I.useContext)(La);
function za({ children: e, name: t, onBlur: n, onFocus: r, onChange: i, value: a, defaultValue: o }) {
	let s = !o && Array.isArray(a), c = {
		name: t,
		value: a,
		defaultValue: o,
		getCheckboxControlProps: (e) => ({
			...e,
			name: t,
			/* istanbul ignore next */
			onBlur: e.onBlur ? Wi(n, e.onBlur) : n,
			/* istanbul ignore next */
			onFocus: e.onFocus ? Wi(r, e.onFocus) : r,
			/* istanbul ignore next */
			onChange: e.onChange ? Wi(i, e.onChange) : i,
			checked: s ? a.includes(e.value) : void 0,
			defaultChecked: s ? void 0 : o && o.includes(e.value)
		}),
		onBlur: n,
		onFocus: r,
		onChange: i,
		hasCheckboxSetProvider: !0
	};
	return /*#__PURE__*/ I.createElement(La.Provider, { value: c }, e);
}
za.propTypes = {
	children: z.default.node.isRequired,
	name: z.default.string,
	onBlur: z.default.func,
	onFocus: z.default.func,
	onChange: z.default.func,
	value: z.default.arrayOf(z.default.string),
	defaultValue: z.default.arrayOf(z.default.string)
}, za.defaultProps = {
	onBlur: void 0,
	name: void 0,
	onFocus: void 0,
	onChange: void 0,
	value: void 0,
	defaultValue: void 0
};
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Form/FormCheckbox.js
var Ba = /*#__PURE__*/ I.forwardRef(({ isIndeterminate: e, ...t }, n) => {
	let { getCheckboxControlProps: r, hasCheckboxSetProvider: i } = Ra(), a = I.useRef(), o = n || a, { getControlProps: s } = Yi(), c = s({
		...t,
		className: (0, R.default)("pgn__form-checkbox-input", t.className)
	});
	return i && (c = r(c)), I.useEffect(() => {
		o.current && (o.current.indeterminate = e);
	}, [o, e]), /*#__PURE__*/ I.createElement("input", {
		type: "checkbox",
		...c,
		ref: o
	});
});
Ba.propTypes = {
	isIndeterminate: z.default.bool,
	className: z.default.string
}, Ba.defaultProps = {
	isIndeterminate: !1,
	className: void 0
};
var Va = /*#__PURE__*/ I.forwardRef(({ children: e, className: t, controlClassName: n, labelClassName: r, description: i, isInvalid: a, isValid: o, controlAs: s, floatLabelLeft: c, ...l }, u) => {
	let { hasCheckboxSetProvider: d } = Ra(), { hasFormGroupProvider: f, useSetIsControlGroupEffect: p, getControlProps: m } = Yi();
	p(!0);
	let h = f && !d ? {
		...m({}),
		role: "group"
	} : {}, g = /*#__PURE__*/ I.createElement(s, {
		...l,
		className: n,
		ref: u
	});
	return /*#__PURE__*/ I.createElement(Zi, {
		controlId: l.id,
		isInvalid: a,
		isValid: o
	}, /*#__PURE__*/ I.createElement("div", {
		className: (0, R.default)("pgn__form-checkbox", t, {
			"pgn__form-control-valid": o,
			"pgn__form-control-invalid": a,
			"pgn__form-control-disabled": l.disabled,
			"pgn__form-control-label-left": !!c
		}),
		...h
	}, g, /*#__PURE__*/ I.createElement("div", null, /*#__PURE__*/ I.createElement(la, { className: r }, e), i && /*#__PURE__*/ I.createElement(ia, { hasIcon: !1 }, i))));
});
Va.propTypes = {
	id: z.default.string,
	children: z.default.node.isRequired,
	className: z.default.string,
	controlClassName: z.default.string,
	labelClassName: z.default.string,
	description: z.default.node,
	isInvalid: z.default.bool,
	isValid: z.default.bool,
	controlAs: z.default.elementType,
	floatLabelLeft: z.default.bool,
	disabled: z.default.bool
}, Va.defaultProps = {
	id: void 0,
	className: void 0,
	controlClassName: void 0,
	labelClassName: void 0,
	description: void 0,
	isInvalid: !1,
	isValid: !1,
	controlAs: Ba,
	floatLabelLeft: !1,
	disabled: !1
};
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Form/FormSwitch.js
var Ha = /*#__PURE__*/ I.forwardRef(({ isIndeterminate: e, ...t }, n) => {
	let r = I.useRef(), i = n || r, { getControlProps: a } = Yi(), o = a({
		...t,
		className: (0, R.default)("pgn__form-switch-input", t.className)
	});
	return I.useEffect(() => {
		i.current && (i.current.indeterminate = e);
	}, [i, e]), /*#__PURE__*/ I.createElement("input", {
		type: "checkbox",
		...o,
		ref: i
	});
});
Ha.propTypes = {
	isIndeterminate: z.default.bool,
	className: z.default.string
}, Ha.defaultProps = {
	isIndeterminate: !1,
	className: void 0
};
var Ua = /*#__PURE__*/ I.forwardRef(({ children: e, className: t, helperText: n, ...r }, i) => /*#__PURE__*/ I.createElement("div", { className: "d-inline-flex flex-column" }, /*#__PURE__*/ I.createElement(Va, {
	className: (0, R.default)("pgn__form-switch", t),
	...r,
	role: "switch",
	ref: i,
	controlAs: Ha,
	isValid: null,
	isInvalid: null,
	description: null
}, e), n && /*#__PURE__*/ I.createElement("div", { className: "pgn__form-switch-helper-text" }, n)));
Ua.propTypes = {
	children: z.default.node.isRequired,
	className: z.default.string,
	labelClassName: z.default.string,
	helperText: z.default.node,
	floatLabelLeft: z.default.bool
}, Ua.defaultProps = {
	className: void 0,
	labelClassName: void 0,
	helperText: void 0,
	floatLabelLeft: !1
};
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Form/FormCheckboxSet.js
function Wa({ children: e, name: t, value: n, defaultValue: r, isInline: i, onChange: a, onFocus: o, onBlur: s, ...c }) {
	let { getControlProps: l, useSetIsControlGroupEffect: u } = Yi();
	u(!0);
	let d = l(c);
	return /*#__PURE__*/ I.createElement(za, {
		name: t,
		value: n,
		defaultValue: r,
		onFocus: o,
		onBlur: s,
		onChange: a
	}, /*#__PURE__*/ I.createElement(ga, {
		role: "group",
		isInline: i,
		...d
	}, e));
}
Wa.propTypes = {
	children: z.default.node.isRequired,
	className: z.default.string,
	name: z.default.string.isRequired,
	value: z.default.arrayOf(z.default.string),
	defaultValue: z.default.arrayOf(z.default.string),
	isInline: z.default.bool,
	onChange: z.default.func,
	onFocus: z.default.func,
	onBlur: z.default.func
}, Wa.defaultProps = {
	className: void 0,
	value: void 0,
	defaultValue: void 0,
	isInline: !1,
	onChange: void 0,
	onFocus: void 0,
	onBlur: void 0
};
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Form/FormSwitchSet.js
var Ga = Wa, U = _n;
U.Control = ca, U.Radio = ha, U.RadioSet = _a, U.Autosuggest = Pa, U.AutosuggestOption = Ia, U.Checkbox = Va, U.CheckboxSet = Wa, U.Switch = Ua, U.SwitchSet = Ga, U.Label = la, U.Group = ua, U.Text = ra;
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Modal/ModalContext.js
var Ka = /*#__PURE__*/ I.createContext({
	onClose: () => {},
	isOpen: !1,
	isBlocking: !1
});
function qa({ onClose: e, isOpen: t, isBlocking: n = !1, children: r = null }) {
	let i = (0, I.useMemo)(() => ({
		onClose: e,
		isOpen: t,
		isBlocking: n
	}), [
		e,
		t,
		n
	]);
	return /*#__PURE__*/ I.createElement(Ka.Provider, { value: i }, r);
}
// node_modules/.pnpm/react-remove-scroll-bar@2.3.8_@types+react@18.3.31_react@18.3.1/node_modules/react-remove-scroll-bar/dist/es2015/constants.js
var Ja = "right-scroll-bar-position", Ya = "width-before-scroll-bar", Xa = "with-scroll-bars-hidden", Za = "--removed-body-scroll-bar-size";
// node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@18.3.31_react@18.3.1/node_modules/use-callback-ref/dist/es2015/assignRef.js
function Qa(e, t) {
	return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
// node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@18.3.31_react@18.3.1/node_modules/use-callback-ref/dist/es2015/useRef.js
function $a(e, t) {
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
// node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@18.3.31_react@18.3.1/node_modules/use-callback-ref/dist/es2015/useMergeRef.js
var eo = typeof window < "u" ? I.useLayoutEffect : I.useEffect, to = /* @__PURE__ */ new WeakMap();
function no(e, t) {
	var n = $a(t || null, function(t) {
		return e.forEach(function(e) {
			return Qa(e, t);
		});
	});
	return eo(function() {
		var t = to.get(n);
		if (t) {
			var r = new Set(t), i = new Set(e), a = n.current;
			r.forEach(function(e) {
				i.has(e) || Qa(e, null);
			}), i.forEach(function(e) {
				r.has(e) || Qa(e, a);
			});
		}
		to.set(n, e);
	}, [e]), n;
}
// node_modules/.pnpm/use-sidecar@1.1.3_@types+react@18.3.31_react@18.3.1/node_modules/use-sidecar/dist/es2015/medium.js
function ro(e) {
	return e;
}
function io(e, t) {
	t === void 0 && (t = ro);
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
function ao(e, t) {
	return t === void 0 && (t = ro), io(e, t);
}
function oo(e) {
	e === void 0 && (e = {});
	var t = io(null);
	return t.options = n({
		async: !0,
		ssr: !1
	}, e), t;
}
// node_modules/.pnpm/use-sidecar@1.1.3_@types+react@18.3.31_react@18.3.1/node_modules/use-sidecar/dist/es2015/exports.js
var so = function(e) {
	var t = e.sideCar, r = _e(e, ["sideCar"]);
	if (!t) throw Error("Sidecar: please provide `sideCar` property to import the right car");
	var i = t.read();
	if (!i) throw Error("Sidecar medium not found");
	return I.createElement(i, n({}, r));
};
so.isSideCarExport = !0;
function co(e, t) {
	return e.useMedium(t), so;
}
// node_modules/.pnpm/react-remove-scroll@2.7.2_@types+react@18.3.31_react@18.3.1/node_modules/react-remove-scroll/dist/es2015/medium.js
var lo = oo(), uo = function() {}, fo = I.forwardRef(function(e, t) {
	var r = I.useRef(null), i = I.useState({
		onScrollCapture: uo,
		onWheelCapture: uo,
		onTouchMoveCapture: uo
	}), a = i[0], o = i[1], s = e.forwardProps, c = e.children, l = e.className, u = e.removeScrollBar, d = e.enabled, f = e.shards, p = e.sideCar, m = e.noRelative, h = e.noIsolation, g = e.inert, _ = e.allowPinchZoom, v = e.as, y = v === void 0 ? "div" : v, b = e.gapMode, x = _e(e, [
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
	]), S = p, C = no([r, t]), w = n(n({}, x), a);
	return I.createElement(I.Fragment, null, d && I.createElement(S, {
		sideCar: lo,
		removeScrollBar: u,
		shards: f,
		noRelative: m,
		noIsolation: h,
		inert: g,
		setCallbacks: o,
		allowPinchZoom: !!_,
		lockRef: r,
		gapMode: b
	}), s ? I.cloneElement(I.Children.only(c), n(n({}, w), { ref: C })) : I.createElement(y, n({}, w, {
		className: l,
		ref: C
	}), c));
});
fo.defaultProps = {
	enabled: !0,
	removeScrollBar: !0,
	inert: !1
}, fo.classNames = {
	fullWidth: Ya,
	zeroRight: Ja
};
// node_modules/.pnpm/focus-lock@1.3.6/node_modules/focus-lock/dist/es2015/constants.js
var po = "data-focus-lock", mo = "data-focus-lock-disabled", ho = "data-no-focus-lock", go = "data-autofocus-inside", _o = "data-no-autofocus", vo = {
	width: "1px",
	height: "0px",
	padding: 0,
	overflow: "hidden",
	position: "fixed",
	top: "1px",
	left: "1px"
}, yo = ao({}, function(e) {
	return {
		target: e.target,
		currentTarget: e.currentTarget
	};
}), bo = ao(), xo = ao(), So = oo({
	async: !0,
	ssr: typeof document < "u"
}), Co = /*#__PURE__*/ (0, I.createContext)(void 0), wo = [], To = /*#__PURE__*/ (0, I.forwardRef)(function(e, t) {
	var n, r = (0, I.useState)(), a = r[0], o = r[1], s = (0, I.useRef)(), c = (0, I.useRef)(!1), l = (0, I.useRef)(null), u = (0, I.useState)({})[1], d = e.children, f = e.disabled, p = f !== void 0 && f, m = e.noFocusGuards, h = m !== void 0 && m, g = e.persistentFocus, _ = g !== void 0 && g, v = e.crossFrame, y = v === void 0 || v, b = e.autoFocus, x = b === void 0 || b;
	e.allowTextSelection;
	var S = e.group, C = e.className, w = e.whiteList, T = e.hasPositiveIndices, E = e.shards, D = E === void 0 ? wo : E, O = e.as, k = O === void 0 ? "div" : O, A = e.lockProps, j = A === void 0 ? {} : A, ee = e.sideCar, te = e.returnFocus, M = te !== void 0 && te, N = e.focusOptions, P = e.onActivation, ne = e.onDeactivation, re = (0, I.useState)({})[0], ie = (0, I.useCallback)(function(e) {
		var t = e.captureFocusRestore;
		if (!l.current) {
			var n = document?.activeElement;
			l.current = n, n !== document.body && (l.current = t(n));
		}
		s.current && P && P(s.current), c.current = !0, u();
	}, [P]), ae = (0, I.useCallback)(function() {
		c.current = !1, ne && ne(s.current), u();
	}, [ne]), oe = (0, I.useCallback)(function(e) {
		var t = l.current;
		if (t) {
			var n = (typeof t == "function" ? t() : t) || document.body, r = typeof M == "function" ? M(n) : M;
			if (r) {
				var i = typeof r == "object" ? r : void 0;
				l.current = null, e ? Promise.resolve().then(function() {
					return n.focus(i);
				}) : n.focus(i);
			}
		}
	}, [M]), se = (0, I.useCallback)(function(e) {
		c.current && yo.useMedium(e);
	}, []), ce = bo.useMedium, le = (0, I.useCallback)(function(e) {
		s.current !== e && (s.current = e, o(e));
	}, []), ue = i((n = {}, n[mo] = p && "disabled", n[po] = S, n), j), de = h !== !0, fe = de && h !== "tail", pe = no([t, le]), me = (0, I.useMemo)(function() {
		return {
			observed: s,
			shards: D,
			enabled: !p,
			get active() {
				return c.current;
			}
		};
	}, [
		p,
		c,
		D,
		s
	]);
	return /*#__PURE__*/ I.createElement(I.Fragment, null, de && [/*#__PURE__*/ I.createElement("div", {
		key: "guard-first",
		"data-focus-guard": !0,
		tabIndex: p ? -1 : 0,
		style: vo
	}), T ? /*#__PURE__*/ I.createElement("div", {
		key: "guard-nearest",
		"data-focus-guard": !0,
		tabIndex: p ? -1 : 1,
		style: vo
	}) : null], !p && /*#__PURE__*/ I.createElement(ee, {
		id: re,
		sideCar: So,
		observed: a,
		disabled: p,
		persistentFocus: _,
		crossFrame: y,
		autoFocus: x,
		whiteList: w,
		shards: D,
		onActivation: ie,
		onDeactivation: ae,
		returnFocus: oe,
		focusOptions: N,
		noFocusGuards: h
	}), /*#__PURE__*/ I.createElement(k, i({ ref: pe }, ue, {
		className: C,
		onBlur: ce,
		onFocus: se
	}), /*#__PURE__*/ I.createElement(Co.Provider, { value: me }, d)), fe && /*#__PURE__*/ I.createElement("div", {
		"data-focus-guard": !0,
		tabIndex: p ? -1 : 0,
		style: vo
	}));
});
To.propTypes = {};
// node_modules/.pnpm/react-focus-lock@2.13.7_@types+react@18.3.31_react@18.3.1/node_modules/react-focus-lock/dist/es2015/util.js
function Eo(e) {
	setTimeout(e, 1);
}
var Do = function(e) {
	return e && "current" in e ? e.current : e;
}, Oo = To, ko = oo(), Ao = "data-focus-on-hidden", jo = { preventScroll: !0 }, Mo = I.forwardRef(function(e, t) {
	var r = I.useState(!1), i = r[0], a = r[1], o = I.useState(null), s = o[0], c = o[1], l = e.children, u = e.autoFocus, d = e.shards, f = e.crossFrame, p = e.enabled, m = p === void 0 || p, h = e.scrollLock, g = h === void 0 || h, _ = e.focusLock, v = _ === void 0 || _, y = e.returnFocus, b = y === void 0 || y, x = e.inert, S = e.allowPinchZoom, C = e.sideCar, w = e.className, T = e.shouldIgnore, E = e.preventScrollOnFocus, D = e.style, O = e.as, k = e.gapMode, A = _e(e, [
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
	]), j = C, ee = n(n({}, i), {
		as: O,
		style: D,
		sideCar: C,
		shards: d,
		allowPinchZoom: S,
		gapMode: k,
		inert: x,
		enabled: m && g
	}), te = I.useCallback(function(e) {
		c(e);
	}, []), M = I.useCallback(function() {
		c(null);
	}, []);
	return I.createElement(I.Fragment, null, I.createElement(Oo, {
		ref: t,
		sideCar: C,
		disabled: !(m && v),
		returnFocus: b,
		autoFocus: u,
		shards: d,
		crossFrame: f,
		onActivation: te,
		onDeactivation: M,
		className: w,
		whiteList: T,
		lockProps: ee,
		focusOptions: E ? jo : void 0,
		as: fo
	}, l), m && I.createElement(j, n({}, A, {
		sideCar: ko,
		setLockProps: a,
		shards: d,
		activeNode: s
	})));
});
// node_modules/.pnpm/@babel+runtime@7.29.14/node_modules/@babel/runtime/helpers/esm/typeof.js
function No(e) {
	"@babel/helpers - typeof";
	return No = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, No(e);
}
// node_modules/.pnpm/@babel+runtime@7.29.14/node_modules/@babel/runtime/helpers/esm/toPrimitive.js
function Po(e, t) {
	if (No(e) != "object" || !e) return e;
	var n;
	if (typeof Symbol < "u" && (n = e[Symbol.toPrimitive]) !== void 0) {
		var r = n.call(e, t || "default");
		if (No(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
// node_modules/.pnpm/@babel+runtime@7.29.14/node_modules/@babel/runtime/helpers/esm/toPropertyKey.js
function Fo(e) {
	var t = Po(e, "string");
	return No(t) == "symbol" ? t : t + "";
}
// node_modules/.pnpm/@babel+runtime@7.29.14/node_modules/@babel/runtime/helpers/esm/defineProperty.js
function Io(e, t, n) {
	return (t = Fo(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
// node_modules/.pnpm/react-clientside-effect@1.2.8_react@18.3.1/node_modules/react-clientside-effect/lib/index.es.js
function Lo(e, t) {
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
		var s = /*#__PURE__*/ function(e) {
			c(t, e);
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
				return /*#__PURE__*/ I.createElement(r, this.props);
			}, t;
		}(I.PureComponent);
		return Io(s, "displayName", "SideEffect(" + n(r) + ")"), s;
	};
}
// node_modules/.pnpm/focus-lock@1.3.6/node_modules/focus-lock/dist/es2015/utils/array.js
var Ro = function(e) {
	for (var t = Array(e.length), n = 0; n < e.length; ++n) t[n] = e[n];
	return t;
}, zo = function(e) {
	return Array.isArray(e) ? e : [e];
}, Bo = function(e) {
	return Array.isArray(e) ? e[0] : e;
}, Vo = function(e) {
	if (e.nodeType !== Node.ELEMENT_NODE) return !1;
	var t = window.getComputedStyle(e, null);
	return !t || !t.getPropertyValue ? !1 : t.getPropertyValue("display") === "none" || t.getPropertyValue("visibility") === "hidden";
}, Ho = function(e) {
	return e.parentNode && e.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? e.parentNode.host : e.parentNode;
}, Uo = function(e) {
	return e === document || e && e.nodeType === Node.DOCUMENT_NODE;
}, Wo = function(e) {
	return e.hasAttribute("inert");
}, Go = function(e, t) {
	return !e || Uo(e) || !Vo(e) && !Wo(e) && t(Ho(e));
}, Ko = function(e, t) {
	var n = e.get(t);
	if (n !== void 0) return n;
	var r = Go(t, Ko.bind(void 0, e));
	return e.set(t, r), r;
}, qo = function(e, t) {
	return e && !Uo(e) ? es(e) ? t(Ho(e)) : !1 : !0;
}, Jo = function(e, t) {
	var n = e.get(t);
	if (n !== void 0) return n;
	var r = qo(t, Jo.bind(void 0, e));
	return e.set(t, r), r;
}, Yo = function(e) {
	return e.dataset;
}, Xo = function(e) {
	return e.tagName === "BUTTON";
}, Zo = function(e) {
	return e.tagName === "INPUT";
}, Qo = function(e) {
	return Zo(e) && e.type === "radio";
}, $o = function(e) {
	return !Zo(e) && !Xo(e) || e.type !== "hidden" && !e.disabled;
}, es = function(e) {
	var t = e.getAttribute(_o);
	return ![
		!0,
		"true",
		""
	].includes(t);
}, ts = function(e) {
	return !!(e && Yo(e)?.focusGuard);
}, ns = function(e) {
	return !ts(e);
}, rs = function(e) {
	return !!e;
}, is = function(e, t) {
	var n = Math.max(0, e.tabIndex), r = Math.max(0, t.tabIndex), i = n - r, a = e.index - t.index;
	if (i) {
		if (!n) return 1;
		if (!r) return -1;
	}
	return i || a;
}, as = function(e) {
	return e.tabIndex < 0 && !e.hasAttribute("tabindex") ? 0 : e.tabIndex;
}, os = function(e, t, n) {
	return Ro(e).map(function(e, t) {
		var r = as(e);
		return {
			node: e,
			index: t,
			tabIndex: n && r === -1 ? (e.dataset || {}).focusGuard ? 0 : -1 : r
		};
	}).filter(function(e) {
		return !t || e.tabIndex >= 0;
	}).sort(is);
}, ss = "button:enabled,select:enabled,textarea:enabled,input:enabled,a[href],area[href],summary,iframe,object,embed,audio[controls],video[controls],[tabindex],[contenteditable],[autofocus]", cs = `${ss}, [data-focus-guard]`, ls = function(e, t) {
	return Ro((e.shadowRoot || e).children).reduce(function(e, n) {
		return e.concat(n.matches(t ? cs : ss) ? [n] : [], ls(n));
	}, []);
}, us = function(e, t) {
	return e instanceof HTMLIFrameElement && e.contentDocument?.body ? ds([e.contentDocument.body], t) : [e];
}, ds = function(e, t) {
	return e.reduce(function(e, n) {
		var r, i = ls(n, t), a = (r = []).concat.apply(r, i.map(function(e) {
			return us(e, t);
		}));
		return e.concat(a, n.parentNode ? Ro(n.parentNode.querySelectorAll(ss)).filter(function(e) {
			return e === n;
		}) : []);
	}, []);
}, fs = function(e) {
	return Ro(e.querySelectorAll(`[${go}]`)).map(function(e) {
		return ds([e]);
	}).reduce(function(e, t) {
		return e.concat(t);
	}, []);
}, ps = function(e, t) {
	return Ro(e).filter(function(e) {
		return Ko(t, e);
	}).filter(function(e) {
		return $o(e);
	});
}, ms = function(e, t) {
	return t === void 0 && (t = /* @__PURE__ */ new Map()), Ro(e).filter(function(e) {
		return Jo(t, e);
	});
}, hs = function(e, t, n) {
	return os(ps(ds(e, n), t), !0, n);
}, gs = function(e, t) {
	return os(ps(ds(e), t), !1);
}, _s = function(e, t) {
	return ps(fs(e), t);
}, vs = function(e, t) {
	return e.shadowRoot ? vs(e.shadowRoot, t) : Object.getPrototypeOf(e).contains !== void 0 && Object.getPrototypeOf(e).contains.call(e, t) ? !0 : Ro(e.children).some(function(e) {
		if (e instanceof HTMLIFrameElement) {
			var n = e.contentDocument?.body;
			return n ? vs(n, t) : !1;
		}
		return vs(e, t);
	});
}, ys = function(e) {
	for (var t = /* @__PURE__ */ new Set(), n = e.length, r = 0; r < n; r += 1) for (var i = r + 1; i < n; i += 1) {
		var a = e[r].compareDocumentPosition(e[i]);
		(a & Node.DOCUMENT_POSITION_CONTAINED_BY) > 0 && t.add(i), (a & Node.DOCUMENT_POSITION_CONTAINS) > 0 && t.add(r);
	}
	return e.filter(function(e, n) {
		return !t.has(n);
	});
}, bs = function(e) {
	return e.parentNode ? bs(e.parentNode) : e;
}, xs = function(e) {
	return zo(e).filter(Boolean).reduce(function(e, t) {
		var n = t.getAttribute(po);
		return e.push.apply(e, n ? ys(Ro(bs(t).querySelectorAll(`[${po}="${n}"]:not([${mo}="disabled"])`))) : [t]), e;
	}, []);
}, Ss = function(e) {
	try {
		return e();
	} catch {
		return;
	}
}, Cs = function(e) {
	if (e === void 0 && (e = document), e && e.activeElement) {
		var t = e.activeElement;
		return t.shadowRoot ? Cs(t.shadowRoot) : t instanceof HTMLIFrameElement && Ss(function() {
			return t.contentWindow.document;
		}) ? Cs(t.contentWindow.document) : t;
	}
}, ws = function(e, t) {
	return e === t;
}, Ts = function(e, t) {
	return !!Ro(e.querySelectorAll("iframe")).some(function(e) {
		return ws(e, t);
	});
}, Es = function(e, t) {
	return t === void 0 && (t = Cs(Bo(e).ownerDocument)), !t || t.dataset && t.dataset.focusGuard ? !1 : xs(e).some(function(e) {
		return vs(e, t) || Ts(e, t);
	});
}, Ds = function(e) {
	e === void 0 && (e = document);
	var t = Cs(e);
	return t ? Ro(e.querySelectorAll(`[${ho}]`)).some(function(e) {
		return vs(e, t);
	}) : !1;
}, Os = function(e, t) {
	return t.filter(Qo).filter(function(t) {
		return t.name === e.name;
	}).filter(function(e) {
		return e.checked;
	})[0] || e;
}, ks = function(e, t) {
	return Qo(e) && e.name ? Os(e, t) : e;
}, As = function(e) {
	var t = /* @__PURE__ */ new Set();
	return e.forEach(function(n) {
		return t.add(ks(n, e));
	}), e.filter(function(e) {
		return t.has(e);
	});
}, js = function(e) {
	return e[0] && e.length > 1 ? ks(e[0], e) : e[0];
}, Ms = function(e, t) {
	return e.indexOf(ks(t, e));
}, Ns = "NEW_FOCUS", Ps = function(e, t, n, r, i) {
	var a = e.length, o = e[0], s = e[a - 1], c = ts(r);
	if (!(r && e.indexOf(r) >= 0)) {
		var l = r === void 0 ? -1 : n.indexOf(r), u = i ? n.indexOf(i) : l, d = i ? e.indexOf(i) : -1;
		if (l === -1) return d === -1 ? Ns : d;
		if (d === -1) return Ns;
		var f = l - u, p = n.indexOf(o), m = n.indexOf(s), h = As(n), g = r === void 0 ? -1 : h.indexOf(r), _ = i ? h.indexOf(i) : g, v = h.filter(function(e) {
			return e.tabIndex >= 0;
		}), y = r === void 0 ? -1 : v.indexOf(r), b = i ? v.indexOf(i) : y, x = y >= 0 && b >= 0 ? b - y : _ - g;
		if (!f && d >= 0 || t.length === 0) return d;
		var S = Ms(e, t[0]), C = Ms(e, t[t.length - 1]);
		if (l <= p && c && Math.abs(f) > 1) return C;
		if (l >= m && c && Math.abs(f) > 1) return S;
		if (f && Math.abs(x) > 1) return d;
		if (l <= p) return C;
		if (l > m) return S;
		if (f) return Math.abs(f) > 1 ? d : (a + d + f) % a;
	}
}, Fs = function(e) {
	return function(t) {
		var n = Yo(t)?.autofocus;
		return t.autofocus || n !== void 0 && n !== "false" || e.indexOf(t) >= 0;
	};
}, Is = function(e, t, n) {
	var r = ms(e.map(function(e) {
		return e.node;
	}).filter(Fs(n)));
	return r && r.length ? js(r) : js(ms(t));
}, Ls = function(e, t) {
	return t === void 0 && (t = []), t.push(e), e.parentNode && Ls(e.parentNode.host || e.parentNode, t), t;
}, Rs = function(e, t) {
	for (var n = Ls(e), r = Ls(t), i = 0; i < n.length; i += 1) {
		var a = n[i];
		if (r.indexOf(a) >= 0) return a;
	}
	return !1;
}, zs = function(e, t, n) {
	var r = zo(e), i = zo(t), a = r[0], o = !1;
	return i.filter(Boolean).forEach(function(e) {
		o = Rs(o || e, e) || o, n.filter(Boolean).forEach(function(e) {
			var t = Rs(a, e);
			t && (o = !o || vs(t, o) ? t : Rs(t, o));
		});
	}), o;
}, Bs = function(e, t) {
	return e.reduce(function(e, n) {
		return e.concat(_s(n, t));
	}, []);
}, Vs = function(e, t) {
	var n = /* @__PURE__ */ new Map();
	return t.forEach(function(e) {
		return n.set(e.node, e);
	}), e.map(function(e) {
		return n.get(e);
	}).filter(rs);
}, Hs = function(e, t) {
	var n = Cs(zo(e).length > 0 ? document : Bo(e).ownerDocument), r = xs(e).filter(ns), i = zs(n || e, e, r), a = /* @__PURE__ */ new Map(), o = gs(r, a), s = o.filter(function(e) {
		var t = e.node;
		return ns(t);
	});
	if (s[0]) {
		var c = gs([i], a).map(function(e) {
			return e.node;
		}), l = Vs(c, s), u = l.map(function(e) {
			return e.node;
		}), d = l.filter(function(e) {
			return e.tabIndex >= 0;
		}).map(function(e) {
			return e.node;
		}), f = Ps(u, d, c, n, t);
		if (f === "NEW_FOCUS") {
			var p = Is(o, d, Bs(r, a)) || Is(o, u, Bs(r, a));
			if (p) return { node: p };
			console.warn("focus-lock: cannot find any node to move focus into");
		} else return f === void 0 ? f : l[f];
	}
}, Us = function(e) {
	var t = xs(e).filter(ns), n = os(ds([zs(e, e, t)], !0), !0, !0), r = ds(t, !1);
	return n.map(function(e) {
		var t = e.node;
		return {
			node: t,
			index: e.index,
			lockItem: r.indexOf(t) >= 0,
			guard: ts(t)
		};
	});
}, Ws = function(e, t) {
	e && ("focus" in e && e.focus(t), "contentWindow" in e && e.contentWindow && e.contentWindow.focus());
}, Gs = 0, Ks = !1, qs = function(e, t, n) {
	n === void 0 && (n = {});
	var r = Hs(e, t);
	if (!Ks && r) {
		if (Gs > 2) {
			console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"), Ks = !0, setTimeout(function() {
				Ks = !1;
			}, 1);
			return;
		}
		Gs++, Ws(r.node, n.focusOptions), Gs--;
	}
};
// node_modules/.pnpm/focus-lock@1.3.6/node_modules/focus-lock/dist/es2015/return-focus.js
function Js(e) {
	if (!e) return null;
	if (typeof WeakRef > "u") return function() {
		return e || null;
	};
	var t = e ? new WeakRef(e) : null;
	return function() {
		return t?.deref() || null;
	};
}
var Ys = function(e) {
	if (!e) return null;
	for (var t = [], n = e; n && n !== document.body;) t.push({
		current: Js(n),
		parent: Js(n.parentElement),
		left: Js(n.previousElementSibling),
		right: Js(n.nextElementSibling)
	}), n = n.parentElement;
	return {
		element: Js(e),
		stack: t,
		ownerDocument: e.ownerDocument
	};
}, Xs = function(e) {
	if (e) for (var t = e.stack, n = e.ownerDocument, r = /* @__PURE__ */ new Map(), i = 0, a = t; i < a.length; i++) {
		var o = a[i], s = o.parent?.call(o);
		if (s && n.contains(s)) {
			for (var c = o.left?.call(o), l = o.current(), u = s.contains(l) ? l : void 0, d = o.right?.call(o), f = hs([s], r), p = u ?? c?.nextElementSibling ?? d ?? c; p;) {
				for (var m = 0, h = f; m < h.length; m++) {
					var g = h[m];
					if (p?.contains(g.node)) return g.node;
				}
				p = p.nextElementSibling;
			}
			if (f.length) return f[0].node;
		}
	}
}, Zs = function(e) {
	var t = Ys(e);
	return function() {
		return Xs(t);
	};
}, Qs = function(e, t, n) {
	if (!e || !t) return console.error("no element or scope given"), {};
	var r = zo(t);
	if (r.every(function(t) {
		return !vs(t, e);
	})) return console.error("Active element is not contained in the scope"), {};
	var i = n ? hs(r, /* @__PURE__ */ new Map()) : gs(r, /* @__PURE__ */ new Map()), a = i.findIndex(function(t) {
		return t.node === e;
	});
	if (a !== -1) return {
		prev: i[a - 1],
		next: i[a + 1],
		first: i[0],
		last: i[i.length - 1]
	};
}, $s = function(e, t) {
	var n = t ? hs(zo(e), /* @__PURE__ */ new Map()) : gs(zo(e), /* @__PURE__ */ new Map());
	return {
		first: n[0],
		last: n[n.length - 1]
	};
}, ec = function(e) {
	return Object.assign({
		scope: document.body,
		cycle: !0,
		onlyTabbable: !0
	}, e);
}, tc = function(e, t, n) {
	t === void 0 && (t = {});
	var r = ec(t), i = Qs(e, r.scope, r.onlyTabbable);
	if (i) {
		var a = n(i, r.cycle);
		a && Ws(a.node, r.focusOptions);
	}
}, nc = function(e, t) {
	t === void 0 && (t = {}), tc(e, t, function(e, t) {
		var n = e.next, r = e.first;
		return n || t && r;
	});
}, rc = function(e, t) {
	t === void 0 && (t = {}), tc(e, t, function(e, t) {
		var n = e.prev, r = e.last;
		return n || t && r;
	});
}, ic = function(e, t, n) {
	var r = $s(e, t.onlyTabbable ?? !0)[n];
	r && Ws(r.node, t.focusOptions);
}, ac = function(e, t) {
	t === void 0 && (t = {}), ic(e, t, "first");
}, oc = function(e, t) {
	t === void 0 && (t = {}), ic(e, t, "last");
}, sc = function() {
	return document && document.activeElement === document.body;
}, cc = function() {
	return sc() || Ds();
}, lc = null, uc = null, dc = function() {
	return null;
}, fc = null, pc = !1, mc = !1, hc = function() {
	return !0;
}, gc = function(e) {
	return (lc.whiteList || hc)(e);
}, _c = function(e, t) {
	fc = {
		observerNode: e,
		portaledElement: t
	};
}, vc = function(e) {
	return fc && fc.portaledElement === e;
};
function yc(e, t, n, r) {
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
var bc = function(e) {
	return e ? !!pc : pc === "meanwhile";
}, xc = function e(t, n, r) {
	return n && (n.host === t && (!n.activeElement || r.contains(n.activeElement)) || n.parentNode && e(t, n.parentNode, r));
}, Sc = function(e, t) {
	return t.some(function(t) {
		return xc(e, t, t);
	});
}, Cc = function(e) {
	return gs(e, /* @__PURE__ */ new Map());
}, wc = function(e) {
	return !Cc([e.parentNode]).some(function(t) {
		return t.node === e;
	});
}, Tc = function() {
	var e = !1;
	if (lc) {
		var t = lc, n = t.observed, r = t.persistentFocus, i = t.autoFocus, a = t.shards, o = t.crossFrame, s = t.focusOptions, c = t.noFocusGuards, l = n || fc && fc.portaledElement;
		if (sc() && uc && uc !== document.body && (!document.body.contains(uc) || wc(uc))) {
			var u = dc();
			u && u.focus();
		}
		var d = document && document.activeElement;
		if (l) {
			var f = [l].concat(a.map(Do).filter(Boolean));
			if ((!d || gc(d)) && (r || function() {
				if (!bc(o) || !c || !uc || mc) return !1;
				var e = Cc(f), t = e.findIndex(function(e) {
					return e.node === uc;
				});
				return t === 0 || t === e.length - 1;
			}() || !cc() || !uc && i) && (l && !(Es(f) || d && Sc(d, f) || vc(d, l)) && (document && !uc && d && !i ? (d.blur && d.blur(), document.body.focus()) : (e = qs(f, uc, { focusOptions: s }), fc = {})), uc = document && document.activeElement, uc !== document.body && (dc = Zs(uc)), pc = !1), document && d !== document.activeElement && document.querySelector("[data-focus-auto-guard]")) {
				var p = document && document.activeElement, m = Us(f), h = m.map(function(e) {
					return e.node;
				}).indexOf(p);
				h > -1 && (m.filter(function(e) {
					var t = e.guard, n = e.node;
					return t && n.dataset.focusAutoGuard;
				}).forEach(function(e) {
					return e.node.removeAttribute("tabIndex");
				}), yc(h, m.length, 1, m), yc(h, -1, -1, m));
			}
		}
	}
	return e;
}, Ec = function(e) {
	Tc() && e && (e.stopPropagation(), e.preventDefault());
}, Dc = function() {
	return Eo(Tc);
}, Oc = function(e) {
	var t = e.target, n = e.currentTarget;
	n.contains(t) || _c(n, t);
}, kc = function() {
	return null;
}, Ac = function() {
	mc = !0;
}, jc = function() {
	mc = !1, pc = "just", Eo(function() {
		pc = "meanwhile";
	});
}, Mc = function() {
	document.addEventListener("focusin", Ec), document.addEventListener("focusout", Dc), window.addEventListener("focus", Ac), window.addEventListener("blur", jc);
}, Nc = function() {
	document.removeEventListener("focusin", Ec), document.removeEventListener("focusout", Dc), window.removeEventListener("focus", Ac), window.removeEventListener("blur", jc);
};
function Pc(e) {
	return e.filter(function(e) {
		return !e.disabled;
	});
}
var Fc = {
	moveFocusInside: qs,
	focusInside: Es,
	focusNextElement: nc,
	focusPrevElement: rc,
	focusFirstElement: ac,
	focusLastElement: oc,
	captureFocusRestore: Zs
};
function Ic(e) {
	var t = e.slice(-1)[0];
	t && !lc && Mc();
	var n = lc, r = n && t && t.id === n.id;
	lc = t, n && !r && (n.onDeactivation(), e.filter(function(e) {
		return e.id === n.id;
	}).length || n.returnFocus(!t)), t ? (uc = null, r && n.observed === t.observed || t.onActivation(Fc), Tc(!0), Eo(Tc)) : (Nc(), uc = null);
}
yo.assignSyncMedium(Oc), bo.assignMedium(Dc), xo.assignMedium(function(e) {
	return e(Fc);
}), co(So, Lo(Pc, Ic)(kc));
// node_modules/.pnpm/get-nonce@1.0.1/node_modules/get-nonce/dist/es2015/index.js
var Lc = function() {
	if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
// node_modules/.pnpm/react-style-singleton@2.2.3_@types+react@18.3.31_react@18.3.1/node_modules/react-style-singleton/dist/es2015/singleton.js
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
  .${Xa} {
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
  
  .${Ja} {
    right: ${s}px ${r};
  }
  
  .${Ya} {
    margin-right: ${s}px ${r};
  }
  
  .${Ja} .${Ja} {
    right: 0 ${r};
  }
  
  .${Ya} .${Ya} {
    margin-right: 0 ${r};
  }
  
  body[${Yc}] {
    ${Za}: ${s}px;
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
			var t = ae([e.lockRef.current], (e.shards || []).map(gl), !0).filter(Boolean);
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
		if (bl.length && bl[bl.length - 1] === a) {
			var r = "deltaY" in n ? hl(n) : ml(n), i = t.current.filter(function(e) {
				return e.name === n.type && (e.target === n.target || n.target === e.shadowParent) && _l(e.delta, r);
			})[0];
			if (i && i.should) n.cancelable && n.preventDefault();
			else if (!i) {
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
co(lo, xl);
// node_modules/.pnpm/aria-hidden@1.2.6/node_modules/aria-hidden/dist/es2015/index.js
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
		e && !s.has(e) && (s.add(e), l(e.parentNode));
	};
	i.forEach(l);
	var u = function(e) {
		e && !c.has(e) && Array.prototype.forEach.call(e.children, function(e) {
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
}, Ml = Uc(), Nl = "\n [" + Ao + "] {\n   pointer-events: none !important;\n }\n", Pl = function() {
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
		if (!s && c) return jl(j([c], (i || []).map(Fl)), c.ownerDocument.body, Ao);
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
// node_modules/.pnpm/react-focus-on@3.10.2_@types+react@18.3.31_react@18.3.1/node_modules/react-focus-on/dist/es2015/sidecar.js
var Ll = co(ko, Il), Rl = function(e) {
	return I.createElement(Ll, n({}, e));
}, zl = I.forwardRef(function(e, t) {
	return I.createElement(Mo, n({}, e, {
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
		return this.rootElement ? /*#__PURE__*/ Ae.createPortal(this.props.children, this.rootElement) : null;
	}
};
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Modal/ModalLayer.js
function Vl({ onClick: e }) {
	return /*#__PURE__*/ I.createElement("div", {
		className: "pgn__modal-backdrop",
		onClick: e,
		onKeyDown: e,
		"data-testid": "modal-backdrop",
		role: "presentation"
	});
}
// istanbul ignore next
function Hl({ children: e = null }) {
	return /*#__PURE__*/ I.createElement("div", { className: "pgn__modal-content-container" }, e);
}
function Ul({ children: e, onClose: t, isOpen: n, isBlocking: r = !1, zIndex: i }) {
	if ((0, I.useEffect)(() => (n ? document.body.classList.add("pgn__hidden-scroll-padding-right") : document.body.classList.remove("pgn__hidden-scroll-padding-right"), () => {
		document.body.classList.remove("pgn__hidden-scroll-padding-right");
	}), [n]), !n) return null;
	let a = r ? void 0 : t;
	return /*#__PURE__*/ I.createElement(qa, {
		onClose: t,
		isOpen: n,
		isBlocking: r
	}, /*#__PURE__*/ I.createElement(Bl, null, /*#__PURE__*/ I.createElement(zl, {
		allowPinchZoom: !0,
		scrollLock: !0,
		enabled: n,
		onEscapeKey: a,
		onClickOutside: a,
		className: (0, R.default)("pgn__modal-layer", i ? `zindex-${i}` : "")
	}, /*#__PURE__*/ I.createElement(Hl, null, /*#__PURE__*/ I.createElement(Vl, { onClick: a }), e))));
}
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Modal/ModalCloseButton.js
var Wl = /*#__PURE__*/ I.forwardRef(({ as: e, children: t, ...n }, r) => {
	let { onClose: i } = (0, I.useContext)(Ka), a = e, o = {
		...n,
		className: (0, R.default)("pgn__modal-close-button", n.className),
		onClick: () => {
			i(), n.onClick && n.onClick();
		},
		ref: r
	};
	return /*#__PURE__*/ I.createElement(a, o, t);
});
Wl.propTypes = {
	as: z.default.elementType,
	children: z.default.node,
	className: z.default.string,
	onClick: z.default.func
}, Wl.defaultProps = {
	as: A,
	onClick: void 0,
	className: void 0,
	children: null
};
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Modal/ModalDialogHeader.js
var Gl = /*#__PURE__*/ I.forwardRef(({ as: e = "div", children: t, ...n }, r) => /*#__PURE__*/ I.createElement(e, {
	...n,
	ref: r,
	className: (0, R.default)("pgn__modal-header", n.className)
}, t));
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Modal/ModalDialogTitle.js
function Kl({ as: e, children: t, ...n }) {
	return /*#__PURE__*/ I.createElement(e, {
		...n,
		className: (0, R.default)("pgn__modal-title", n.className)
	}, t);
}
Kl.propTypes = {
	as: z.default.elementType,
	children: z.default.node.isRequired,
	className: z.default.string
}, Kl.defaultProps = {
	as: "h2",
	className: void 0
};
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Modal/ModalDialogFooter.js
function ql({ as: e, children: t, ...n }) {
	return /*#__PURE__*/ I.createElement(e, {
		...n,
		className: (0, R.default)("pgn__modal-footer", n.className)
	}, t);
}
ql.propTypes = {
	as: z.default.elementType,
	children: z.default.node.isRequired,
	className: z.default.string
}, ql.defaultProps = {
	as: "div",
	className: void 0
};
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/hooks/useIsVisibleHook.js
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
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Modal/ModalDialogBody.js
function Yl({ as: e, children: t, ...n }) {
	let [r, i] = Jl(), [a, o] = Jl(), s = (0, R.default)("pgn__modal-body", n.className, {
		"pgn__modal-body-scroll-top": r,
		"pgn__modal-body-scroll-bottom": a
	});
	return /*#__PURE__*/ I.createElement(e, {
		...n,
		className: s
	}, /*#__PURE__*/ I.createElement(I.Fragment, null, /*#__PURE__*/ I.createElement("div", { ref: i }), /*#__PURE__*/ I.createElement("div", { className: "pgn__modal-body-content" }, t), /*#__PURE__*/ I.createElement("div", { ref: o })));
}
Yl.propTypes = {
	as: z.default.elementType,
	children: z.default.node.isRequired,
	className: z.default.string
}, Yl.defaultProps = {
	as: "div",
	className: void 0
};
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Modal/ModalDialogHeroContent.js
function Xl({ as: e, children: t, ...n }) {
	return /*#__PURE__*/ I.createElement(e, {
		...n,
		className: (0, R.default)("pgn__modal-hero-content", n.className)
	}, t);
}
Xl.propTypes = {
	as: z.default.elementType,
	children: z.default.node.isRequired,
	className: z.default.string
}, Xl.defaultProps = {
	as: "div",
	className: void 0
};
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Modal/ModalDialogHeroBackground.js
function Zl({ as: e, backgroundSrc: t, children: n, ...r }) {
	return /*#__PURE__*/ I.createElement(e, {
		...r,
		className: (0, R.default)("pgn__modal-hero-bg", r.className),
		style: {
			backgroundImage: t ? `url(${t})` : void 0,
			...r.style
		}
	}, n);
}
Zl.propTypes = {
	as: z.default.elementType,
	backgroundSrc: z.default.string,
	children: z.default.node,
	className: z.default.string,
	style: z.default.shape({})
}, Zl.defaultProps = {
	as: "div",
	backgroundSrc: void 0,
	children: null,
	className: void 0,
	style: {}
};
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Modal/ModalDialogHero.js
function Ql({ as: e, children: t, ...n }) {
	return /*#__PURE__*/ I.createElement(e, {
		...n,
		className: (0, R.default)("pgn__modal-hero", n.className)
	}, t);
}
Ql.propTypes = {
	as: z.default.elementType,
	children: z.default.node.isRequired,
	className: z.default.string
}, Ql.defaultProps = {
	as: "div",
	className: void 0
}, Ql.Content = Xl, Ql.Background = Zl;
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Modal/messages.js
var $l = D({ closeButtonText: {
	id: "pgn.Modal.closeButon",
	defaultMessage: "Close",
	description: "Accessible name for the close button in the modal dialog"
} });
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Modal/ModalDialog.js
function eu({ children: e, title: t, isOpen: n = !1, onClose: r, size: i = "md", variant: a = "default", hasCloseButton: o = !0, closeLabel: s, isFullscreenScroll: c = !1, className: l, isFullscreenOnMobile: u = !1, isBlocking: d = !1, zIndex: f, isOverflowVisible: p }) {
	let m = E(), h = s || m.formatMessage($l.closeButtonText), g = Mr({ query: "(max-width: 767.98px)" }), _ = u && g;
	return /*#__PURE__*/ I.createElement(Ul, {
		isOpen: n,
		onClose: r,
		isBlocking: d,
		zIndex: f
	}, /*#__PURE__*/ I.createElement("div", {
		role: "dialog",
		"aria-label": t,
		className: (0, R.default)("pgn__modal", {
			[`pgn__modal-${_ ? "fullscreen" : i}`]: i,
			[`pgn__modal-${a}`]: a,
			"pgn__modal-scroll-fullscreen": c,
			"pgn__modal-visible-overflow": p
		}, l)
	}, o && /*#__PURE__*/ I.createElement("div", { className: "pgn__modal-close-container" }, /*#__PURE__*/ I.createElement(Wl, {
		as: ue,
		iconAs: fe,
		invertColors: a === "dark",
		src: Jr,
		alt: h
	})), e));
}
eu.Header = Gl, eu.Title = Kl, eu.Footer = ql, eu.CloseButton = Wl, eu.Body = Yl, eu.Hero = Ql;
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/hooks/useToggleHook.js
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
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Dropdown/index.js
var nu = /*#__PURE__*/ I.forwardRef(({ show: e, autoClose: t, onToggle: n, variant: r, className: i, ...a }, o) => {
	let [s, c] = I.useState(e), l = (e) => t === !1 ? e === "click" : t === "inside" ? e !== "rootClose" : t !== "outside" || e !== "select";
	return /*#__PURE__*/ I.createElement(Rt, {
		className: (0, R.default)("pgn__dropdown", `pgn__dropdown-${r}`, i),
		"data-testid": "dropdown",
		onToggle: (e, t, r) => {
			if (e) {
				c(!0), n?.(e, t, r);
				return;
			}
			let { source: i } = { ...r };
			t.currentTarget === document && (i !== "keydown" || t.key === "Escape") && (i = "rootClose"), l(i) && (c(!1), n?.(e, t, r));
		},
		ref: o,
		show: s,
		...a
	});
});
nu.propTypes = {
	autoClose: z.default.oneOfType([z.default.string, z.default.bool]),
	className: z.default.string,
	onToggle: z.default.func,
	show: z.default.bool,
	variant: z.default.oneOf(["light", "dark"])
}, nu.defaultProps = {
	autoClose: !0,
	className: "",
	onToggle: void 0,
	show: !1,
	variant: "light"
};
var ru = /*#__PURE__*/ I.forwardRef(({ as: e, bsPrefix: t, ...n }, r) => {
	let i = e === ue ? "pgn__dropdown-toggle-iconbutton" : t;
	return /*#__PURE__*/ I.createElement(Mt, {
		...n,
		as: e,
		bsPrefix: i,
		ref: r
	});
});
ru.propTypes = {
	as: z.default.elementType,
	bsPrefix: z.default.string,
	id: z.default.oneOfType([z.default.string, z.default.number]).isRequired
}, ru.defaultProps = {
	as: A,
	bsPrefix: "dropdown-toggle"
}, nu.Item = /*#__PURE__*/ I.forwardRef(({ className: e, ...t }, n) => /*#__PURE__*/ I.createElement(wt, {
	className: (0, R.default)(e, "pgn__dropdown-item"),
	ref: n,
	...t
})), nu.Item.propTypes = { className: z.default.string }, nu.Item.defaultProps = { className: void 0 }, nu.Toggle = ru, nu.Menu = At, nu.Header = Rt.Header, nu.Divider = Rt.Divider;
// node_modules/.pnpm/react-popper@2.3.0_@popperjs+core@2.11.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-popper/lib/esm/utils.js
var iu = function(e) {
	return e.reduce(function(e, t) {
		var n = t[0];
		return e[n] = t[1], e;
	}, {});
}, au = typeof window < "u" && window.document && window.document.createElement ? I.useLayoutEffect : I.useEffect;
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/applyStyles.js
function ou(e) {
	var t = e.state;
	Object.keys(t.elements).forEach(function(e) {
		var n = t.styles[e] || {}, r = t.attributes[e] || {}, i = t.elements[e];
		S(i) && we(i) && (Object.assign(i.style, n), Object.keys(r).forEach(function(e) {
			var t = r[e];
			t === !1 ? i.removeAttribute(e) : i.setAttribute(e, t === !0 ? "" : t);
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
			var r = t.elements[e], i = t.attributes[e] || {}, a = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]).reduce(function(e, t) {
				return e[t] = "", e;
			}, {});
			S(r) && we(r) && (Object.assign(r.style, a), Object.keys(i).forEach(function(e) {
				r.removeAttribute(e);
			}));
		});
	};
}
var cu = /*#__PURE__*/ re({ defaultModifiers: [
	Te,
	k,
	x,
	{
		name: "applyStyles",
		enabled: !0,
		phase: "write",
		fn: ou,
		effect: su,
		requires: ["computeStyles"]
	},
	Ce,
	ee,
	ne,
	a,
	Ee
] }), lu = /* @__PURE__ */ e((/* @__PURE__ */ t(((e, t) => {
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
			for (c = s; c-- !== 0;) if ((l[c] !== "_owner" && l[c] !== "__v" && l[c] !== "__o" || !e.$$typeof) && !o(e[l[c]], t[l[c]])) return !1;
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
				Ae.flushSync(function() {
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
		if (e != null && t != null) {
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
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Modal/PopperElement.js
function fu({ children: e, target: t, strategy: n, placement: r, modifiers: i }) {
	let [a, o] = (0, I.useState)(null), { styles: s, attributes: c } = du(t, a, {
		modifiers: i,
		strategy: n,
		placement: r
	});
	return t ? /*#__PURE__*/ I.createElement("div", {
		ref: o,
		style: {
			...s.popper,
			zIndex: 2e3
		},
		...c.popper
	}, e) : null;
}
fu.defaultProps = { target: void 0 }, fu.propTypes = {
	children: z.default.node,
	target: z.default.shape({ current: z.default.shape({}) }),
	strategy: z.default.oneOf(["absolute", "fixed"]),
	placement: z.default.oneOf([
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
	modifiers: z.default.arrayOf(z.default.shape({}))
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
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Modal/ModalPopup.js
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
	return /*#__PURE__*/ I.createElement(qa, {
		onClose: t,
		isOpen: n,
		isBlocking: i
	}, /*#__PURE__*/ I.createElement(l, null, /*#__PURE__*/ I.createElement(fu, {
		modifiers: s ? d : null,
		target: r,
		placement: o,
		...c
	}, /*#__PURE__*/ I.createElement(zl, {
		scrollLock: !1,
		enabled: n,
		onEscapeKey: t,
		onClickOutside: f
	}, n && /*#__PURE__*/ I.createElement("div", { className: "pgn__modal-popup__tooltip" }, e, s && /*#__PURE__*/ I.createElement("div", {
		id: "arrow",
		"data-testid": "modal-popup-arrow",
		className: `pgn__modal-popup__arrow pgn__modal-popup__arrow-${o}`,
		"data-popper-arrow": ""
	}))))));
}
mu.propTypes = {
	children: z.default.node.isRequired,
	onClose: z.default.func.isRequired,
	isOpen: z.default.bool.isRequired,
	isBlocking: z.default.bool,
	withPortal: z.default.bool,
	positionRef: z.default.oneOfType([z.default.func, z.default.shape({ current: z.default.shape({}) })]),
	placement: fu.propTypes.placement,
	hasArrow: z.default.bool
}, mu.defaultProps = {
	isBlocking: !1,
	withPortal: !1,
	placement: "bottom-start",
	positionRef: null,
	hasArrow: !1
};
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Modal/StandardModal.js
var hu = "Close";
function gu({ children: e, footerNode: t, beforeBodyNode: n, afterBodyNode: r, ...i }) {
	return /*#__PURE__*/ I.createElement(eu, { ...i }, /*#__PURE__*/ I.createElement(eu.Header, null, /*#__PURE__*/ I.createElement(eu.Title, null, i.title)), n, /*#__PURE__*/ I.createElement(eu.Body, null, e), r, t && /*#__PURE__*/ I.createElement(eu.Footer, null, t));
}
gu.propTypes = {
	children: z.default.node.isRequired,
	title: z.default.string.isRequired,
	onClose: z.default.func.isRequired,
	isOpen: z.default.bool,
	hasCloseButton: z.default.bool,
	size: z.default.oneOf([
		"sm",
		"md",
		"lg",
		"xl",
		"fullscreen"
	]),
	variant: z.default.oneOf([
		"default",
		"warning",
		"danger",
		"success",
		"dark"
	]),
	closeLabel: z.default.string,
	className: z.default.string,
	isFullscreenScroll: z.default.bool,
	footerNode: z.default.node,
	beforeBodyNode: z.default.node,
	afterBodyNode: z.default.node
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
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Nav/index.js
function _u(e) {
	return /*#__PURE__*/ I.createElement(zn, { ...e });
}
function vu(e) {
	return /*#__PURE__*/ I.createElement(Nn, { ...e });
}
function yu(e) {
	return /*#__PURE__*/ I.createElement(In, { ...e });
}
_u.propTypes = {
	cardHeaderBsPrefix: z.default.string,
	defaultActiveKey: z.default.oneOfType([z.default.string, z.default.number]),
	activeKey: z.default.oneOfType([z.default.string, z.default.number]),
	as: z.default.elementType,
	fill: z.default.bool,
	justify: z.default.bool,
	navbar: z.default.bool,
	onKeyDown: z.default.func,
	onSelect: z.default.func,
	role: z.default.string,
	variant: z.default.oneOf(["tabs", "pills"]),
	bsPrefix: z.default.string
}, vu.propTypes = {
	role: z.default.string,
	as: z.default.elementType,
	bsPrefix: z.default.string
}, yu.propTypes = {
	onSelect: z.default.string,
	active: z.default.bool,
	as: z.default.elementType,
	disabled: z.default.bool,
	eventKey: z.default.oneOfType([z.default.string, z.default.number]),
	href: z.default.string,
	role: z.default.string,
	bsPrefix: z.default.string
}, z.default.string.isRequired, z.default.node.isRequired, z.default.bool, z.default.bool, z.default.string, z.default.oneOf(["dark"]), z.default.func, z.default.bool, z.default.string, z.default.string, _u.defaultProps = { ...zn.defaultProps }, { ...Vn.defaultProps }, vu.defaultProps = { ...Nn.defaultProps }, yu.defaultProps = { ...In.defaultProps }, _u.Item = vu, _u.Link = yu;
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/ProgressBar/utils.js
var bu = (e, t = "ltr", n = !0, r = "pgn__annotation") => {
	if (!e.current || !e.current.style) return !1;
	let { children: i } = e.current, a = 0;
	for (let e = 0; e < i.length; e++) {
		let t = i[e].getBoundingClientRect();
		i[e].className.includes(r) ? a += t.width / 2 : a += n ? 0 : t.width;
	}
	return e.current.style[t === "rtl" ? "marginRight" : "marginLeft"] = `${-a}px`, !0;
}, xu = (e, t) => t === "rtl" ? { right: `${e}%` } : { left: `${e}%` }, Su = "pgn__annotation", Cu = 50, wu = "warning", Tu = "dark", Eu = [
	"dark",
	"warning",
	"success",
	"error"
];
function Du(e) {
	return /*#__PURE__*/ I.createElement(Yn, { ...e });
}
function Ou({ now: e, label: t, variant: n, threshold: r, thresholdLabel: i, thresholdVariant: a, progressHint: o, thresholdHint: s, ...c }) {
	let l = I.useRef(), u = I.useRef(), d = (r || 0) - (e || 0), f = e < Cu, p = r < Cu, m = Eu.includes(n) ? n : wu, h = Eu.includes(a) ? a : Tu, g = window.getComputedStyle(document.body).getPropertyValue("direction"), _ = (0, I.useCallback)(() => {
		bu(l, g, f, Su), bu(u, g, p, Su);
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
	let v = (e) => /*#__PURE__*/ I.createElement("span", {
		className: "pgn__progress-hint",
		"data-testid": "progress-hint"
	}, e);
	return /*#__PURE__*/ I.createElement("div", { className: "pgn__progress-annotated" }, !!t && /*#__PURE__*/ I.createElement("div", {
		className: "pgn__progress-info",
		style: xu(e, g),
		ref: l
	}, !f && v(o), /*#__PURE__*/ I.createElement(Ur, { variant: m }, t), f && v(o)), /*#__PURE__*/ I.createElement(Yn, null, /*#__PURE__*/ I.createElement(Yn, {
		...c,
		now: e,
		className: (0, R.default)(`pgn__progress-bar--${m}`, d > 0 ? "pgn__progress-tick--white" : "pgn__progress-tick--black"),
		srOnly: !0
	}), !!r && /*#__PURE__*/ I.createElement(Yn, {
		now: d,
		className: `pgn__progress-bar--${h}`,
		srOnly: !0
	})), !!r && !!i && /*#__PURE__*/ I.createElement("div", {
		className: "pgn__progress-info",
		style: xu(r, g),
		ref: u
	}, !p && v(s), /*#__PURE__*/ I.createElement(Ur, {
		arrowPlacement: "top",
		variant: h
	}, i), p && v(s)));
}
Ou.propTypes = {
	now: z.default.number,
	label: z.default.node,
	variant: z.default.oneOf(Eu),
	className: z.default.string,
	threshold: z.default.number,
	thresholdLabel: z.default.node,
	thresholdVariant: z.default.oneOf(Eu),
	progressHint: z.default.node,
	thresholdHint: z.default.node
}, Ou.defaultProps = {
	now: void 0,
	label: void 0,
	variant: wu,
	className: void 0,
	threshold: void 0,
	thresholdLabel: void 0,
	thresholdVariant: Tu,
	progressHint: void 0,
	thresholdHint: void 0
}, Du.Annotated = Ou;
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Sticky/index.js
var ku = ["top", "bottom"], Au = /*#__PURE__*/ I.forwardRef(({ position: e, children: t, offset: n, className: r, ...i }, a) => {
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
	}, [e, l]), /*#__PURE__*/ I.createElement("div", {
		className: (0, R.default)("pgn__sticky", `pgn__sticky-${e || "top"}`, n ? `pgn__sticky-offset--${n}` : "", { "pgn__sticky-shadow": o }, r),
		ref: l,
		...i
	}, t);
});
Au.propTypes = {
	children: z.default.node.isRequired,
	position: z.default.oneOf(ku),
	offset: z.default.oneOfType([z.default.number, z.default.string]),
	className: z.default.string
}, Au.defaultProps = {
	position: "top",
	offset: void 0,
	className: void 0
};
// node_modules/.pnpm/file-selector@2.1.2/node_modules/file-selector/dist/es2015/file.js
var ju = /* @__PURE__ */ new Map([
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
function Mu(e, t, n) {
	let r = Nu(e), { webkitRelativePath: i } = e, a = typeof t == "string" ? t : typeof i == "string" && i.length > 0 ? i : `./${e.name}`;
	return typeof r.path != "string" && Pu(r, "path", a), n !== void 0 && Object.defineProperty(r, "handle", {
		value: n,
		writable: !1,
		configurable: !1,
		enumerable: !0
	}), Pu(r, "relativePath", a), r;
}
function Nu(e) {
	let { name: t } = e;
	if (t && t.lastIndexOf(".") !== -1 && !e.type) {
		let n = t.split(".").pop().toLowerCase(), r = ju.get(n);
		r && Object.defineProperty(e, "type", {
			value: r,
			writable: !1,
			configurable: !1,
			enumerable: !0
		});
	}
	return e;
}
function Pu(e, t, n) {
	Object.defineProperty(e, t, {
		value: n,
		writable: !1,
		configurable: !1,
		enumerable: !0
	});
}
// node_modules/.pnpm/file-selector@2.1.2/node_modules/file-selector/dist/es2015/file-selector.js
var Fu = [".DS_Store", "Thumbs.db"];
function Iu(e) {
	return N(this, void 0, void 0, function* () {
		return zu(e) && Lu(e.dataTransfer) ? Hu(e.dataTransfer, e.type) : Ru(e) ? Bu(e) : Array.isArray(e) && e.every((e) => "getFile" in e && typeof e.getFile == "function") ? Vu(e) : [];
	});
}
function Lu(e) {
	return zu(e);
}
function Ru(e) {
	return zu(e) && zu(e.target);
}
function zu(e) {
	return typeof e == "object" && !!e;
}
function Bu(e) {
	return Wu(e.target.files).map((e) => Mu(e));
}
function Vu(e) {
	return N(this, void 0, void 0, function* () {
		return (yield Promise.all(e.map((e) => e.getFile()))).map((e) => Mu(e));
	});
}
function Hu(e, t) {
	return N(this, void 0, void 0, function* () {
		if (e.items) {
			let n = Wu(e.items).filter((e) => e.kind === "file");
			return t === "drop" ? Uu(Ku(yield Promise.all(n.map(Gu)))) : n;
		}
		return Uu(Wu(e.files).map((e) => Mu(e)));
	});
}
function Uu(e) {
	return e.filter((e) => Fu.indexOf(e.name) === -1);
}
function Wu(e) {
	if (e === null) return [];
	let t = [];
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		t.push(r);
	}
	return t;
}
function Gu(e) {
	if (typeof e.webkitGetAsEntry != "function") return qu(e);
	let t = e.webkitGetAsEntry();
	return t && t.isDirectory ? Yu(t) : qu(e, t);
}
function Ku(e) {
	return e.reduce((e, t) => [...e, ...Array.isArray(t) ? Ku(t) : [t]], []);
}
function qu(e, t) {
	return N(this, void 0, void 0, function* () {
		if (globalThis.isSecureContext && typeof e.getAsFileSystemHandle == "function") {
			let t = yield e.getAsFileSystemHandle();
			if (t === null) throw Error(`${e} is not a File`);
			if (t !== void 0) {
				let e = yield t.getFile();
				return e.handle = t, Mu(e);
			}
		}
		let n = e.getAsFile();
		if (!n) throw Error(`${e} is not a File`);
		return Mu(n, t?.fullPath ?? void 0);
	});
}
function Ju(e) {
	return N(this, void 0, void 0, function* () {
		return e.isDirectory ? Yu(e) : Xu(e);
	});
}
function Yu(e) {
	let t = e.createReader();
	return new Promise((e, n) => {
		let r = [];
		function i() {
			t.readEntries((t) => N(this, void 0, void 0, function* () {
				if (t.length) {
					let e = Promise.all(t.map(Ju));
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
function Xu(e) {
	return N(this, void 0, void 0, function* () {
		return new Promise((t, n) => {
			e.file((n) => {
				t(Mu(n, e.fullPath));
			}, (e) => {
				n(e);
			});
		});
	});
}
// node_modules/.pnpm/react-dropzone@14.4.1_react@18.3.1/node_modules/react-dropzone/dist/es/utils/index.js
var Zu = /* @__PURE__ */ e((/* @__PURE__ */ t(((e) => {
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
function Qu(e) {
	return td(e) || ed(e) || sd(e) || $u();
}
function $u() {
	throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function ed(e) {
	if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function td(e) {
	if (Array.isArray(e)) return cd(e);
}
function nd(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function rd(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? nd(Object(n), !0).forEach(function(t) {
			id(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : nd(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function id(e, t, n) {
	return t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function ad(e, t) {
	return ud(e) || ld(e, t) || sd(e, t) || od();
}
function od() {
	throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function sd(e, t) {
	if (e) {
		if (typeof e == "string") return cd(e, t);
		var n = Object.prototype.toString.call(e).slice(8, -1);
		if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
		if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return cd(e, t);
	}
}
function cd(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function ld(e, t) {
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
function ud(e) {
	if (Array.isArray(e)) return e;
}
var dd = typeof Zu.default == "function" ? Zu.default : Zu.default.default, fd = "file-invalid-type", pd = "file-too-large", md = "file-too-small", hd = "too-many-files", gd = {
	FileInvalidType: fd,
	FileTooLarge: pd,
	FileTooSmall: md,
	TooManyFiles: hd
}, _d = function() {
	var e = (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "").split(",");
	return {
		code: fd,
		message: `File type must be ${e.length > 1 ? `one of ${e.join(", ")}` : e[0]}`
	};
}, vd = function(e) {
	return {
		code: pd,
		message: `File is larger than ${e} ${e === 1 ? "byte" : "bytes"}`
	};
}, yd = function(e) {
	return {
		code: md,
		message: `File is smaller than ${e} ${e === 1 ? "byte" : "bytes"}`
	};
}, bd = {
	code: hd,
	message: "Too many files"
};
function xd(e) {
	return e.type === "" && typeof e.getAsFile == "function";
}
function Sd(e, t) {
	var n = e.type === "application/x-moz-file" || dd(e, t) || xd(e);
	return [n, n ? null : _d(t)];
}
function Cd(e, t, n) {
	if (wd(e.size)) {
		if (wd(t) && wd(n)) {
			if (e.size > n) return [!1, vd(n)];
			if (e.size < t) return [!1, yd(t)];
		} else if (wd(t) && e.size < t) return [!1, yd(t)];
		else if (wd(n) && e.size > n) return [!1, vd(n)];
	}
	return [!0, null];
}
function wd(e) {
	return e != null;
}
function Td(e) {
	var t = e.files, n = e.accept, r = e.minSize, i = e.maxSize, a = e.multiple, o = e.maxFiles, s = e.validator;
	return !a && t.length > 1 || a && o >= 1 && t.length > o ? !1 : t.every(function(e) {
		var t = ad(Sd(e, n), 1)[0], a = ad(Cd(e, r, i), 1)[0], o = s ? s(e) : null;
		return t && a && !o;
	});
}
function Ed(e) {
	return typeof e.isPropagationStopped == "function" ? e.isPropagationStopped() : e.cancelBubble !== void 0 && e.cancelBubble;
}
function Dd(e) {
	return e.dataTransfer ? Array.prototype.some.call(e.dataTransfer.types, function(e) {
		return e === "Files" || e === "application/x-moz-file";
	}) : !!e.target && !!e.target.files;
}
function Od(e) {
	e.preventDefault();
}
function kd(e) {
	return e.indexOf("MSIE") !== -1 || e.indexOf("Trident/") !== -1;
}
function Ad(e) {
	return e.indexOf("Edge/") !== -1;
}
function jd() {
	var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : window.navigator.userAgent;
	return kd(e) || Ad(e);
}
function Md() {
	var e = [...arguments];
	return function(t) {
		var n = [...arguments].slice(1);
		return e.some(function(e) {
			return !Ed(t) && e && e.apply(void 0, [t].concat(n)), Ed(t);
		});
	};
}
function Nd() {
	return "showOpenFilePicker" in window;
}
function Pd(e) {
	return wd(e) ? [{
		description: "Files",
		accept: Object.entries(e).filter(function(e) {
			var t = ad(e, 2), n = t[0], r = t[1], i = !0;
			return Rd(n) || (console.warn(`Skipped "${n}" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.`), i = !1), Array.isArray(r) && r.every(zd) || (console.warn(`Skipped "${n}" because an invalid file extension was provided.`), i = !1), i;
		}).reduce(function(e, t) {
			var n = ad(t, 2), r = n[0], i = n[1];
			return rd(rd({}, e), {}, id({}, r, i));
		}, {})
	}] : e;
}
function Fd(e) {
	if (wd(e)) return Object.entries(e).reduce(function(e, t) {
		var n = ad(t, 2), r = n[0], i = n[1];
		return [].concat(Qu(e), [r], Qu(i));
	}, []).filter(function(e) {
		return Rd(e) || zd(e);
	}).join(",");
}
function Id(e) {
	return e instanceof DOMException && (e.name === "AbortError" || e.code === e.ABORT_ERR);
}
function Ld(e) {
	return e instanceof DOMException && (e.name === "SecurityError" || e.code === e.SECURITY_ERR);
}
function Rd(e) {
	return e === "audio/*" || e === "video/*" || e === "image/*" || e === "text/*" || e === "application/*" || /\w+\/[-+.\w]+/g.test(e);
}
function zd(e) {
	return /^.*\.[\w]+$/.test(e);
}
// node_modules/.pnpm/react-dropzone@14.4.1_react@18.3.1/node_modules/react-dropzone/dist/es/index.js
var Bd = ["children"], Vd = ["open"], Hd = [
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
], Ud = [
	"refKey",
	"onChange",
	"onClick"
];
function Wd(e) {
	return qd(e) || Kd(e) || Xd(e) || Gd();
}
function Gd() {
	throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function Kd(e) {
	if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function qd(e) {
	if (Array.isArray(e)) return Zd(e);
}
function Jd(e, t) {
	return $d(e) || Qd(e, t) || Xd(e, t) || Yd();
}
function Yd() {
	throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function Xd(e, t) {
	if (e) {
		if (typeof e == "string") return Zd(e, t);
		var n = Object.prototype.toString.call(e).slice(8, -1);
		if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
		if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Zd(e, t);
	}
}
function Zd(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function Qd(e, t) {
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
function $d(e) {
	if (Array.isArray(e)) return e;
}
function ef(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function W(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? ef(Object(n), !0).forEach(function(t) {
			tf(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ef(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function tf(e, t, n) {
	return t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function nf(e, t) {
	if (e == null) return {};
	var n = rf(e, t), r, i;
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (i = 0; i < a.length; i++) r = a[i], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
	}
	return n;
}
function rf(e, t) {
	if (e == null) return {};
	for (var n = {}, r = Object.keys(e), i, a = 0; a < r.length; a++) i = r[a], t.indexOf(i) >= 0 || (n[i] = e[i]);
	return n;
}
var af = /*#__PURE__*/ (0, I.forwardRef)(function(e, t) {
	var n = e.children, r = cf(nf(e, Bd)), i = r.open, a = nf(r, Vd);
	return (0, I.useImperativeHandle)(t, function() {
		return { open: i };
	}, [i]), /*#__PURE__*/ I.createElement(I.Fragment, null, n(W(W({}, a), {}, { open: i })));
});
af.displayName = "Dropzone";
var of = {
	disabled: !1,
	getFilesFromEvent: Iu,
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
af.defaultProps = of, af.propTypes = {
	children: z.default.func,
	accept: z.default.objectOf(z.default.arrayOf(z.default.string)),
	multiple: z.default.bool,
	preventDropOnDocument: z.default.bool,
	noClick: z.default.bool,
	noKeyboard: z.default.bool,
	noDrag: z.default.bool,
	noDragEventsBubbling: z.default.bool,
	minSize: z.default.number,
	maxSize: z.default.number,
	maxFiles: z.default.number,
	disabled: z.default.bool,
	getFilesFromEvent: z.default.func,
	onFileDialogCancel: z.default.func,
	onFileDialogOpen: z.default.func,
	useFsAccessApi: z.default.bool,
	autoFocus: z.default.bool,
	onDragEnter: z.default.func,
	onDragLeave: z.default.func,
	onDragOver: z.default.func,
	onDrop: z.default.func,
	onDropAccepted: z.default.func,
	onDropRejected: z.default.func,
	onError: z.default.func,
	validator: z.default.func
};
var sf = {
	isFocused: !1,
	isFileDialogActive: !1,
	isDragActive: !1,
	isDragAccept: !1,
	isDragReject: !1,
	isDragGlobal: !1,
	acceptedFiles: [],
	fileRejections: []
};
function cf() {
	var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = W(W({}, of), e), n = t.accept, r = t.disabled, i = t.getFilesFromEvent, a = t.maxSize, o = t.minSize, s = t.multiple, c = t.maxFiles, l = t.onDragEnter, u = t.onDragLeave, d = t.onDragOver, f = t.onDrop, p = t.onDropAccepted, m = t.onDropRejected, h = t.onFileDialogCancel, g = t.onFileDialogOpen, _ = t.useFsAccessApi, v = t.autoFocus, y = t.preventDropOnDocument, b = t.noClick, x = t.noKeyboard, S = t.noDrag, C = t.noDragEventsBubbling, w = t.onError, T = t.validator, E = (0, I.useMemo)(function() {
		return Fd(n);
	}, [n]), D = (0, I.useMemo)(function() {
		return Pd(n);
	}, [n]), O = (0, I.useMemo)(function() {
		return typeof g == "function" ? g : uf;
	}, [g]), k = (0, I.useMemo)(function() {
		return typeof h == "function" ? h : uf;
	}, [h]), A = (0, I.useRef)(null), j = (0, I.useRef)(null), ee = Jd((0, I.useReducer)(lf, sf), 2), te = ee[0], M = ee[1], N = te.isFocused, P = te.isFileDialogActive, ne = (0, I.useRef)(typeof window < "u" && window.isSecureContext && _ && Nd()), re = function() {
		!ne.current && P && setTimeout(function() {
			j.current && (j.current.files.length || (M({ type: "closeDialog" }), k()));
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
		return y && (document.addEventListener("dragover", Od, !1), document.addEventListener("drop", oe, !1)), function() {
			y && (document.removeEventListener("dragover", Od), document.removeEventListener("drop", oe));
		};
	}, [A, y]), (0, I.useEffect)(function() {
		var e = function(e) {
			ae.current = [].concat(Wd(ae.current), [e.target]), Dd(e) && M({
				isDragGlobal: !0,
				type: "setDragGlobal"
			});
		}, t = function(e) {
			ae.current = ae.current.filter(function(t) {
				return t !== e.target && t !== null;
			}), ae.current.length > 0 || M({
				isDragGlobal: !1,
				type: "setDragGlobal"
			});
		}, n = function() {
			ae.current = [], M({
				isDragGlobal: !1,
				type: "setDragGlobal"
			});
		}, r = function() {
			ae.current = [], M({
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
		e.preventDefault(), e.persist(), xe(e), ie.current = [].concat(Wd(ie.current), [e.target]), Dd(e) && Promise.resolve(i(e)).then(function(t) {
			if (!Ed(e) || C) {
				var n = t.length, r = n > 0 && Td({
					files: t,
					accept: E,
					minSize: o,
					maxSize: a,
					multiple: s,
					maxFiles: c,
					validator: T
				});
				M({
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
		var t = Dd(e);
		if (t && e.dataTransfer) try {
			e.dataTransfer.dropEffect = "copy";
		} catch {}
		return t && d && d(e), !1;
	}, [d, C]), ue = (0, I.useCallback)(function(e) {
		e.preventDefault(), e.persist(), xe(e);
		var t = ie.current.filter(function(e) {
			return A.current && A.current.contains(e);
		}), n = t.indexOf(e.target);
		n !== -1 && t.splice(n, 1), ie.current = t, t.length > 0 || (M({
			type: "setDraggedFiles",
			isDragActive: !1,
			isDragAccept: !1,
			isDragReject: !1
		}), Dd(e) && u && u(e));
	}, [
		A,
		u,
		C
	]), de = (0, I.useCallback)(function(e, t) {
		var n = [], r = [];
		e.forEach(function(e) {
			var t = Jd(Sd(e, E), 2), i = t[0], s = t[1], c = Jd(Cd(e, o, a), 2), l = c[0], u = c[1], d = T ? T(e) : null;
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
				errors: [bd]
			});
		}), n.splice(0)), M({
			acceptedFiles: n,
			fileRejections: r,
			isDragReject: r.length > 0,
			type: "setFiles"
		}), f && f(n, r, t), r.length > 0 && m && m(r, t), n.length > 0 && p && p(n, t);
	}, [
		M,
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
		e.preventDefault(), e.persist(), xe(e), ie.current = [], Dd(e) && Promise.resolve(i(e)).then(function(t) {
			(!Ed(e) || C) && de(t, e);
		}).catch(function(e) {
			return se(e);
		}), M({ type: "reset" });
	}, [
		i,
		de,
		se,
		C
	]), pe = (0, I.useCallback)(function() {
		if (ne.current) {
			M({ type: "openDialog" }), O();
			var e = {
				multiple: s,
				types: D
			};
			window.showOpenFilePicker(e).then(function(e) {
				return i(e);
			}).then(function(e) {
				de(e, null), M({ type: "closeDialog" });
			}).catch(function(e) {
				Id(e) ? (k(e), M({ type: "closeDialog" })) : Ld(e) ? (ne.current = !1, j.current ? (j.current.value = null, j.current.click()) : se(/* @__PURE__ */ Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))) : se(e);
			});
		} else j.current && (M({ type: "openDialog" }), O(), j.current.value = null, j.current.click());
	}, [
		M,
		O,
		k,
		_,
		de,
		se,
		D,
		s
	]), me = (0, I.useCallback)(function(e) {
		A.current && A.current.isEqualNode(e.target) && (e.key === " " || e.key === "Enter" || e.keyCode === 32 || e.keyCode === 13) && (e.preventDefault(), pe());
	}, [A, pe]), he = (0, I.useCallback)(function() {
		M({ type: "focus" });
	}, []), ge = (0, I.useCallback)(function() {
		M({ type: "blur" });
	}, []), _e = (0, I.useCallback)(function() {
		b || (jd() ? setTimeout(pe, 0) : pe());
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
			var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.refKey, n = t === void 0 ? "ref" : t, i = e.role, a = e.onKeyDown, o = e.onFocus, s = e.onBlur, c = e.onClick, l = e.onDragEnter, u = e.onDragOver, d = e.onDragLeave, f = e.onDrop, p = nf(e, Hd);
			return W(W(tf({
				onKeyDown: ye(Md(a, me)),
				onFocus: ye(Md(o, he)),
				onBlur: ye(Md(s, ge)),
				onClick: ve(Md(c, _e)),
				onDragEnter: be(Md(l, ce)),
				onDragOver: be(Md(u, le)),
				onDragLeave: be(Md(d, ue)),
				onDrop: be(Md(f, fe)),
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
			var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.refKey, n = t === void 0 ? "ref" : t, r = e.onChange, i = e.onClick, a = nf(e, Ud);
			return W(W({}, tf({
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
				onChange: ve(Md(r, fe)),
				onClick: ve(Md(i, Ce)),
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
	return W(W({}, te), {}, {
		isFocused: N && !r,
		getRootProps: Se,
		getInputProps: we,
		rootRef: A,
		inputRef: j,
		open: ve(pe)
	});
}
function lf(e, t) {
	/* istanbul ignore next */
	switch (t.type) {
		case "focus": return W(W({}, e), {}, { isFocused: !0 });
		case "blur": return W(W({}, e), {}, { isFocused: !1 });
		case "openDialog": return W(W({}, sf), {}, { isFileDialogActive: !0 });
		case "closeDialog": return W(W({}, e), {}, { isFileDialogActive: !1 });
		case "setDraggedFiles": return W(W({}, e), {}, {
			isDragActive: t.isDragActive,
			isDragAccept: t.isDragAccept,
			isDragReject: t.isDragReject
		});
		case "setFiles": return W(W({}, e), {}, {
			acceptedFiles: t.acceptedFiles,
			fileRejections: t.fileRejections,
			isDragReject: t.isDragReject
		});
		case "setDragGlobal": return W(W({}, e), {}, { isDragGlobal: t.isDragGlobal });
		case "reset": return W({}, sf);
		default: return e;
	}
}
function uf() {}
// node_modules/.pnpm/file-selector@0.10.0/node_modules/file-selector/dist/es5/file.js
var df = /* @__PURE__ */ new Map([
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
function ff(e, t) {
	var n = pf(e);
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
function pf(e) {
	var t = e.name;
	if (t && t.lastIndexOf(".") !== -1 && !e.type) {
		var n = t.split(".").pop().toLowerCase(), r = df.get(n);
		r && Object.defineProperty(e, "type", {
			value: r,
			writable: !1,
			configurable: !1,
			enumerable: !0
		});
	}
	return e;
}
// node_modules/.pnpm/file-selector@0.10.0/node_modules/file-selector/dist/es5/file-selector.js
var mf = [".DS_Store", "Thumbs.db"];
function hf(e) {
	return N(this, void 0, void 0, function() {
		return xe(this, function(t) {
			return vf(e) && gf(e.dataTransfer) ? [2, xf(e.dataTransfer, e.type)] : _f(e) ? [2, yf(e)] : Array.isArray(e) && e.every(function(e) {
				return "getFile" in e && typeof e.getFile == "function";
			}) ? [2, bf(e)] : [2, []];
		});
	});
}
function gf(e) {
	return vf(e);
}
function _f(e) {
	return vf(e) && vf(e.target);
}
function vf(e) {
	return typeof e == "object" && !!e;
}
function yf(e) {
	return Cf(e.target.files).map(function(e) {
		return ff(e);
	});
}
function bf(e) {
	return N(this, void 0, void 0, function() {
		var t;
		return xe(this, function(n) {
			switch (n.label) {
				case 0: return [4, Promise.all(e.map(function(e) {
					return e.getFile();
				}))];
				case 1: return t = n.sent(), [2, t.map(function(e) {
					return ff(e);
				})];
			}
		});
	});
}
function xf(e, t) {
	return N(this, void 0, void 0, function() {
		var n, r;
		return xe(this, function(i) {
			switch (i.label) {
				case 0: return e.items ? (n = Cf(e.items).filter(function(e) {
					return e.kind === "file";
				}), t === "drop" ? [4, Promise.all(n.map(wf))] : [2, n]) : [3, 2];
				case 1: return r = i.sent(), [2, Sf(Tf(r))];
				case 2: return [2, Sf(Cf(e.files).map(function(e) {
					return ff(e);
				}))];
			}
		});
	});
}
function Sf(e) {
	return e.filter(function(e) {
		return mf.indexOf(e.name) === -1;
	});
}
function Cf(e) {
	if (e === null) return [];
	for (var t = [], n = 0; n < e.length; n++) {
		var r = e[n];
		t.push(r);
	}
	return t;
}
function wf(e) {
	if (typeof e.webkitGetAsEntry != "function") return Ef(e);
	var t = e.webkitGetAsEntry();
	return t && t.isDirectory ? Of(t) : Ef(e);
}
function Tf(e) {
	return e.reduce(function(e, t) {
		return ae(ae([], de(e), !1), de(Array.isArray(t) ? Tf(t) : [t]), !1);
	}, []);
}
function Ef(e) {
	var t = e.getAsFile();
	if (!t) return Promise.reject(`${e} is not a File`);
	var n = ff(t);
	return Promise.resolve(n);
}
function Df(e) {
	return N(this, void 0, void 0, function() {
		return xe(this, function(t) {
			return [2, e.isDirectory ? Of(e) : kf(e)];
		});
	});
}
function Of(e) {
	var t = e.createReader();
	return new Promise(function(e, n) {
		var r = [];
		function i() {
			var a = this;
			t.readEntries(function(t) {
				return N(a, void 0, void 0, function() {
					var a, o, s;
					return xe(this, function(c) {
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
							case 5: s = Promise.all(t.map(Df)), r.push(s), i(), c.label = 6;
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
function kf(e) {
	return N(this, void 0, void 0, function() {
		return xe(this, function(t) {
			return [2, new Promise(function(t, n) {
				e.file(function(n) {
					t(ff(n, e.fullPath));
				}, function(e) {
					n(e);
				});
			})];
		});
	});
}
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Dropzone/DragError.js
function Af({ message: e }) {
	return /*#__PURE__*/ I.createElement("div", { className: "pgn__dropzone-error-wrapper" }, e);
}
Af.propTypes = { message: z.default.oneOfType([z.default.string, z.default.element]).isRequired };
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Dropzone/GenericError.js
function jf({ errorMsgs: e, ...t }) {
	return /*#__PURE__*/ I.createElement(zr, {
		variant: "danger",
		icon: Zr,
		className: "pgn__dropzone-generic-alert",
		...t
	}, e.map((e) => /*#__PURE__*/ I.createElement("span", { key: e }, e)));
}
jf.propTypes = { errorMsgs: z.default.arrayOf(z.default.string).isRequired };
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Dropzone/UploadProgress.js
function Mf({ percent: e, variant: t, name: n, onCancel: r }) {
	return t === "spinner" ? /*#__PURE__*/ I.createElement(Oa, {
		animation: "border",
		"aria-live": "polite",
		screenReaderText: `Uploading ${n}, ${e}% done.`,
		"data-testid": "upload-spinner"
	}) : /*#__PURE__*/ I.createElement("div", { className: "w-50" }, /*#__PURE__*/ I.createElement("p", { className: "text-muted" }, /*#__PURE__*/ I.createElement(ke, {
		id: "pgn.Dropzone.UploadProgress.uploadLabel",
		defaultMessage: "Uploading {filename}.",
		description: "A text that is shown near a progress bar during file upload in Dropzone component.",
		values: { filename: n }
	})), /*#__PURE__*/ I.createElement("div", { className: "d-flex justify-content-between align-items-center w-100" }, /*#__PURE__*/ I.createElement(Du, {
		now: e,
		label: `${e}%`,
		variant: "success",
		className: "flex-grow-1",
		"data-testid": "upload-progress-bar"
	}), /*#__PURE__*/ I.createElement(A, {
		variant: "tertiary",
		className: "ml-3",
		onClick: r
	}, /*#__PURE__*/ I.createElement(ke, {
		id: "pgn.Dropzone.UploadProgress.cancelLabel",
		defaultMessage: "Cancel",
		description: "Label of a cancel button that is shown during file upload in Dropzone component."
	}))));
}
Mf.propTypes = {
	variant: z.default.oneOf(["spinner", "bar"]).isRequired,
	percent: z.default.number.isRequired,
	name: z.default.string.isRequired,
	onCancel: z.default.func.isRequired
};
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Dropzone/utils.js
var Nf = (e) => Object.keys(e).length > 1 || Object.keys(e).length !== 0 && Object.values(e)[0].length > 1, Pf = (e) => Object.entries(e).reduce((e, t) => {
	let [n, r] = t, i;
	return i = r.length > 0 ? `${r.join(", ").replaceAll(".", "").toUpperCase()}, ` : n.endsWith("/*") ? `${n.slice(0, -2)}, ` : `${n.split("/").pop().toUpperCase()}, `, e + i;
}, "").slice(0, -2), Ff = (e) => {
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
}, If = D({
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
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Dropzone/DefaultContent.js
function Lf({ accept: e, minSize: t, maxSize: n }) {
	let r = E();
	return /*#__PURE__*/ I.createElement(I.Fragment, null, /*#__PURE__*/ I.createElement("div", { className: "pgn__dropzone__upload-icon-wrapper" }, /*#__PURE__*/ I.createElement(fe, {
		src: Xr,
		className: "pgn__dropzone__upload-icon"
	})), /*#__PURE__*/ I.createElement("p", null, /*#__PURE__*/ I.createElement(ke, {
		id: "pgn.Dropzone.DefaultContent.label",
		description: "A text that appears as a label for input of Dropzone component.",
		defaultMessage: "Drag and drop your file here or click to upload."
	})), [
		e,
		t,
		n
	].some((e) => e) && /*#__PURE__*/ I.createElement("p", { className: "pgn__dropzone__upload-restriction-message" }, (() => {
		let i, a;
		if (e) {
			let t = Pf(e), n = t.lastIndexOf(",");
			i = r.formatMessage(If.fileTypeRestriction, {
				count: n === -1 ? 1 : 2,
				firstPart: n === -1 ? t : t.slice(0, n),
				secondPart: n !== -1 && t.slice(n + 1)
			});
		}
		return t && n && Number.isFinite(n) ? a = r.formatMessage(If.fileSizeBetween, {
			sizeMin: Ff(t),
			sizeMax: Ff(n)
		}) : n && Number.isFinite(n) ? a = r.formatMessage(If.fileSizeMax, { sizeMax: Ff(n) }) : t && (a = r.formatMessage(If.fileSizeMin, { sizeMin: Ff(t) })), i && a ? `${i} (${a})` : i || a;
	})()));
}
Lf.propTypes = {
	accept: z.default.objectOf(z.default.arrayOf(z.default.string)),
	maxSize: z.default.number,
	minSize: z.default.number
}, Lf.defaultProps = {
	accept: void 0,
	maxSize: void 0,
	minSize: void 0
};
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Dropzone/index.js
function Rf({ className: e, accept: t, minSize: n, maxSize: r, validator: i, errorMessages: a, progressVariant: o, inputComponent: s, onProcessUpload: c, onUploadProgress: l, onUploadCancel: u, ...d }) {
	let [f, p] = (0, I.useState)(!1), [m, h] = (0, I.useState)([]), [g, _] = (0, I.useState)(0), [v, y] = (0, I.useState)(void 0), [b, x] = (0, I.useState)(void 0), S = E(), { uploadError: C, invalidSizeLess: w, invalidSizeMore: T, invalidType: D, multipleDragged: O } = a, k = async (e) => {
		m && h([]);
		let t = await hf(e);
		t && t.length > 1 && p(!0);
	}, A = () => {
		f && p(!1);
	}, j = (e) => {
		f ? p(!1) : h(e[0].errors.map((e) => {
			switch (e.code) {
				case gd.FileTooLarge: return T || S.formatMessage(If.invalidSizeMore, { size: Ff(r) });
				case gd.FileTooSmall: return w || S.formatMessage(If.invalidSizeLess, { size: Ff(n) });
				case gd.FileInvalidType: return D || S.formatMessage(If.invalidType, {
					count: Nf(t) ? 2 : 1,
					typeString: Pf(t)
				});
				default: return S.formatMessage(If.unexpectedValidationError);
			}
		}));
	}, ee = (e) => {
		let t = Math.round(e.loaded * 100 / e.total);
		_(t), l(t, e);
	}, te = (e) => {
		e.code !== "ERR_CANCELED" && (_(0), h([C || S.formatMessage(If.uploadError)]));
	}, M = (e) => {
		let t = new AbortController();
		x(t), c({
			fileData: e,
			requestConfig: {
				onUploadProgress: ee,
				signal: t.signal
			},
			handleError: te
		});
	}, N = async (e) => {
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
		n.append("file", t), y(t.name), M(n);
	}, P = () => {
		b.abort(), _(0), u();
	}, { getRootProps: ne, getInputProps: re, isDragActive: ie, isDragReject: ae } = cf({
		multiple: !1,
		maxFiles: 1,
		maxSize: r,
		minSize: n,
		onDragLeave: A,
		onDragEnter: k,
		onDropRejected: j,
		onDropAccepted: N,
		accept: t,
		disabled: g && g !== 100
	}), oe = () => f ? /*#__PURE__*/ I.createElement(Af, { message: O || S.formatMessage(If.multipleDragged) }) : m.length > 0 ? /*#__PURE__*/ I.createElement(I.Fragment, null, /*#__PURE__*/ I.createElement(jf, { errorMsgs: m }), s || /*#__PURE__*/ I.createElement(Lf, {
		minSize: n,
		maxSize: r,
		accept: t
	})) : g && g !== 100 ? /*#__PURE__*/ I.createElement(Mf, {
		variant: o,
		percent: g,
		name: v,
		onCancel: P
	}) : s || /*#__PURE__*/ I.createElement(Lf, {
		minSize: n,
		maxSize: r,
		accept: t
	});
	return /*#__PURE__*/ I.createElement("div", {
		"data-testid": "dropzone-container",
		...ne({ className: (0, R.default)("pgn__dropzone", e, {
			"pgn__dropzone-validation-error": f || m.length > 0 || ae,
			"pgn__dropzone-active": ie && !ae
		}) }),
		...d
	}, /*#__PURE__*/ I.createElement("input", { ...re() }), /*#__PURE__*/ I.createElement("div", { className: "d-flex flex-column justify-content-around align-items-center w-100" }, oe()));
}
Rf.defaultProps = {
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
}, Rf.propTypes = {
	className: z.default.string,
	accept: z.default.objectOf(z.default.arrayOf(z.default.string)),
	maxSize: z.default.number,
	minSize: z.default.number,
	onUploadProgress: z.default.func,
	onUploadCancel: z.default.func,
	onProcessUpload: z.default.func.isRequired,
	errorMessages: z.default.shape({
		invalidType: z.default.oneOfType([z.default.string, z.default.element]),
		invalidSizeLess: z.default.oneOfType([z.default.string, z.default.element]),
		invalidSizeMore: z.default.oneOfType([z.default.string, z.default.element]),
		multipleDragged: z.default.oneOfType([z.default.string, z.default.element]),
		uploadError: z.default.oneOfType([z.default.string, z.default.element])
	}),
	progressVariant: z.default.oneOf(["spinner", "bar"]),
	validator: z.default.func,
	inputComponent: z.default.oneOfType([z.default.elementType, z.default.node])
};
// node_modules/.pnpm/react-colorful@5.8.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-colorful/dist/index.mjs
function zf() {
	return (zf = Object.assign || function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}).apply(this, arguments);
}
function Bf(e, t) {
	if (e == null) return {};
	var n, r, i = {}, a = Object.keys(e);
	for (r = 0; r < a.length; r++) t.indexOf(n = a[r]) >= 0 || (i[n] = e[n]);
	return i;
}
function Vf(e) {
	var t = (0, I.useRef)(e), n = (0, I.useRef)(function(e) {
		t.current && t.current(e);
	});
	return t.current = e, n.current;
}
var Hf = function(e, t, n) {
	return t === void 0 && (t = 0), n === void 0 && (n = 1), e > n ? n : e < t ? t : e;
}, Uf = function(e) {
	return "touches" in e;
}, Wf = function(e) {
	return e && e.ownerDocument.defaultView || self;
}, Gf = function(e, t, n) {
	var r = e.getBoundingClientRect(), i = Uf(t) ? function(e, t) {
		for (var n = 0; n < e.length; n++) if (e[n].identifier === t) return e[n];
		return e[0];
	}(t.touches, n) : t;
	return {
		left: Hf((i.pageX - (r.left + Wf(e).pageXOffset)) / r.width),
		top: Hf((i.pageY - (r.top + Wf(e).pageYOffset)) / r.height)
	};
}, Kf = function(e) {
	!Uf(e) && e.preventDefault();
}, qf = I.memo(function(e) {
	var t = e.onMove, n = e.onKey, r = e.onEnd, i = Bf(e, [
		"onMove",
		"onKey",
		"onEnd"
	]), a = (0, I.useRef)(null), o = Vf(t), s = Vf(n), c = Vf(r), l = (0, I.useRef)(null), u = (0, I.useRef)(!1), d = (0, I.useMemo)(function() {
		var e = function(e) {
			Kf(e), (Uf(e) ? e.touches.length > 0 : e.buttons > 0) && a.current ? o(Gf(a.current, e, l.current)) : (n(!1), c());
		}, t = function() {
			n(!1), c();
		};
		function n(n) {
			var r = u.current, i = Wf(a.current), o = n ? i.addEventListener : i.removeEventListener;
			o(r ? "touchmove" : "mousemove", e), o(r ? "touchend" : "mouseup", t);
		}
		return [
			function(e) {
				var t = e.nativeEvent, r = a.current;
				if (r && (Kf(t), !function(e, t) {
					return t && !Uf(e);
				}(t, u.current) && r)) {
					if (Uf(t)) {
						u.current = !0;
						var i = t.changedTouches || [];
						i.length && (l.current = i[0].identifier);
					}
					r.focus(), o(Gf(r, t, l.current)), n(!0);
				}
			},
			function(e) {
				var t = e.which || e.keyCode;
				t < 37 || t > 40 || (e.preventDefault(), s({
					left: t === 39 ? .05 : t === 37 ? -.05 : 0,
					top: t === 40 ? .05 : t === 38 ? -.05 : 0
				}));
			},
			function(e) {
				var t = e.which || e.keyCode;
				t >= 37 && t <= 40 && c();
			},
			n
		];
	}, [
		s,
		o,
		c
	]), f = d[0], p = d[1], m = d[2], h = d[3];
	return (0, I.useEffect)(function() {
		return h;
	}, [h]), I.createElement("div", zf({}, i, {
		onTouchStart: f,
		onMouseDown: f,
		className: "react-colorful__interactive",
		ref: a,
		onKeyDown: p,
		onKeyUp: m,
		tabIndex: 0,
		role: "slider"
	}));
}), Jf = function(e) {
	return e.filter(Boolean).join(" ");
}, Yf = function(e) {
	var t = e.color, n = e.left, r = e.top, i = r === void 0 ? .5 : r, a = Jf(["react-colorful__pointer", e.className]);
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
}, Xf = function(e, t, n) {
	return t === void 0 && (t = 0), n === void 0 && (n = 10 ** t), Math.round(n * e) / n;
}, Zf = function(e) {
	return ap(Qf(e));
}, Qf = function(e) {
	return e[0] === "#" && (e = e.substring(1)), e.length < 6 ? {
		r: parseInt(e[0] + e[0], 16),
		g: parseInt(e[1] + e[1], 16),
		b: parseInt(e[2] + e[2], 16),
		a: e.length === 4 ? Xf(parseInt(e[3] + e[3], 16) / 255, 2) : 1
	} : {
		r: parseInt(e.substring(0, 2), 16),
		g: parseInt(e.substring(2, 4), 16),
		b: parseInt(e.substring(4, 6), 16),
		a: e.length === 8 ? Xf(parseInt(e.substring(6, 8), 16) / 255, 2) : 1
	};
}, $f = function(e) {
	return ip(np(e));
}, ep = function(e) {
	var t = e.s, n = e.v, r = e.a, i = (200 - t) * n / 100;
	return {
		h: Xf(e.h),
		s: Xf(i > 0 && i < 200 ? t * n / 100 / (i <= 100 ? i : 200 - i) * 100 : 0),
		l: Xf(i / 2),
		a: Xf(r, 2)
	};
}, tp = function(e) {
	var t = ep(e);
	return "hsl(" + t.h + ", " + t.s + "%, " + t.l + "%)";
}, np = function(e) {
	var t = e.h, n = e.s, r = e.v, i = e.a;
	t = t / 360 * 6, n /= 100, r /= 100;
	var a = Math.floor(t), o = r * (1 - n), s = r * (1 - (t - a) * n), c = r * (1 - (1 - t + a) * n), l = a % 6;
	return {
		r: Xf(255 * [
			r,
			s,
			o,
			o,
			c,
			r
		][l]),
		g: Xf(255 * [
			c,
			r,
			r,
			s,
			o,
			o
		][l]),
		b: Xf(255 * [
			o,
			o,
			c,
			r,
			r,
			s
		][l]),
		a: Xf(i, 2)
	};
}, rp = function(e) {
	var t = e.toString(16);
	return t.length < 2 ? "0" + t : t;
}, ip = function(e) {
	var t = e.r, n = e.g, r = e.b, i = e.a, a = i < 1 ? rp(Xf(255 * i)) : "";
	return "#" + rp(t) + rp(n) + rp(r) + a;
}, ap = function(e) {
	var t = e.r, n = e.g, r = e.b, i = e.a, a = Math.max(t, n, r), o = a - Math.min(t, n, r), s = o ? a === t ? (n - r) / o : a === n ? 2 + (r - t) / o : 4 + (t - n) / o : 0;
	return {
		h: 60 * (s < 0 ? s + 6 : s),
		s: a ? o / a * 100 : 0,
		v: a / 255 * 100,
		a: i
	};
}, op = I.memo(function(e) {
	var t = e.hue, n = e.onChange, r = e.onChangeEnd, i = Jf(["react-colorful__hue", e.className]);
	return I.createElement("div", { className: i }, I.createElement(qf, {
		onMove: function(e) {
			n({ h: 360 * e.left });
		},
		onKey: function(e) {
			n({ h: Hf(t + 360 * e.left, 0, 360) });
		},
		onEnd: r,
		"aria-label": "Hue",
		"aria-valuenow": Xf(t),
		"aria-valuemax": "360",
		"aria-valuemin": "0"
	}, I.createElement(Yf, {
		className: "react-colorful__hue-pointer",
		left: t / 360,
		color: tp({
			h: t,
			s: 100,
			v: 100,
			a: 1
		})
	})));
}), sp = I.memo(function(e) {
	var t = e.hsva, n = e.onChange, r = e.onChangeEnd, i = { backgroundColor: tp({
		h: t.h,
		s: 100,
		v: 100,
		a: 1
	}) };
	return I.createElement("div", {
		className: "react-colorful__saturation",
		style: i
	}, I.createElement(qf, {
		onMove: function(e) {
			n({
				s: 100 * e.left,
				v: 100 - 100 * e.top
			});
		},
		onKey: function(e) {
			n({
				s: Hf(t.s + 100 * e.left, 0, 100),
				v: Hf(t.v - 100 * e.top, 0, 100)
			});
		},
		onEnd: r,
		"aria-label": "Color",
		"aria-valuetext": "Saturation " + Xf(t.s) + "%, Brightness " + Xf(t.v) + "%"
	}, I.createElement(Yf, {
		className: "react-colorful__saturation-pointer",
		top: 1 - t.v / 100,
		left: t.s / 100,
		color: tp(t)
	})));
}), cp = function(e, t) {
	if (e === t) return !0;
	for (var n in e) if (e[n] !== t[n]) return !1;
	return !0;
}, lp = function(e, t) {
	return e.toLowerCase() === t.toLowerCase() || cp(Qf(e), Qf(t));
};
function up(e, t, n, r) {
	var i = Vf(n), a = Vf(r), o = (0, I.useState)(function() {
		return e.toHsva(t);
	}), s = o[0], c = o[1], l = (0, I.useRef)({
		color: t,
		hsva: s
	}), u = (0, I.useRef)(!1);
	return (0, I.useEffect)(function() {
		if (!e.equal(t, l.current.color)) {
			var n = e.toHsva(t);
			l.current = {
				hsva: n,
				color: t
			}, c(n), u.current = !1;
		}
	}, [t, e]), (0, I.useEffect)(function() {
		var t;
		cp(s, l.current.hsva) || e.equal(t = e.fromHsva(s), l.current.color) || (l.current = {
			hsva: s,
			color: t
		}, i(t), u.current = !0);
	}, [
		s,
		e,
		i
	]), [
		s,
		(0, I.useCallback)(function(e) {
			c(function(t) {
				return Object.assign({}, t, e);
			});
		}, []),
		(0, I.useCallback)(function() {
			u.current && (u.current = !1, a(l.current.color));
		}, [a])
	];
}
var dp = typeof window < "u" ? I.useLayoutEffect : I.useEffect, fp = function() {
	return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : void 0;
}, pp = /* @__PURE__ */ new WeakMap(), mp = function(e) {
	dp(function() {
		var t = e.current;
		if (typeof document < "u" && t) {
			var n = t.getRootNode ? t.getRootNode() : t.ownerDocument, r = n && ("head" in n || "host" in n) ? n : t.ownerDocument;
			if (!pp.has(r)) {
				var i = "head" in r ? r.head : r, a = (i.ownerDocument || document).createElement("style");
				a.innerHTML = ".react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:\"\";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill-opacity=\".05\"><path d=\"M8 0h8v8H8zM0 8h8v8H0z\"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}";
				var o = fp();
				o && a.setAttribute("nonce", o), pp.set(r, a), i.appendChild(a);
			}
		}
	}, []);
}, hp = function(e) {
	var t = e.className, n = e.colorModel, r = e.color, i = r === void 0 ? n.defaultColor : r, a = e.onChange, o = e.onChangeEnd, s = Bf(e, [
		"className",
		"colorModel",
		"color",
		"onChange",
		"onChangeEnd"
	]), c = (0, I.useRef)(null);
	mp(c);
	var l = up(n, i, a, o), u = l[0], d = l[1], f = l[2], p = Jf(["react-colorful", t]);
	return I.createElement("div", zf({}, s, {
		ref: c,
		className: p
	}), I.createElement(sp, {
		hsva: u,
		onChange: d,
		onChangeEnd: f
	}), I.createElement(op, {
		hue: u.h,
		onChange: d,
		onChangeEnd: f,
		className: "react-colorful__last-control"
	}));
}, gp = {
	defaultColor: "000",
	toHsva: Zf,
	fromHsva: function(e) {
		return $f({
			h: e.h,
			s: e.s,
			v: e.v,
			a: 1
		});
	},
	equal: lp
}, _p = function(e) {
	return I.createElement(hp, zf({}, e, { colorModel: gp }));
};
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/ColorPicker/index.js
function vp({ color: e, setColor: t, className: n, size: r }) {
	let [i, a, o] = tu(!1), [s, c] = I.useState(null), l = (e) => /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(e), u = (e) => e.startsWith("#") ? e.slice(0, 7) : `#${e}`.slice(0, 7), [d, f] = I.useState(() => e === "" || l(u(e))), [p, m] = I.useState(() => e === "" ? "" : u(e)), [h, g] = I.useState(() => {
		let t = u(e);
		return l(t) ? t : "#fff";
	}), _ = (e) => {
		if (e === "") {
			f(!0), t(""), m(""), g("#fff");
			return;
		}
		let n = u(e);
		l(n) ? (f(!0), t(n), m(n), g(n)) : (f(!1), m(n), t(n));
	};
	return /*#__PURE__*/ I.createElement(I.Fragment, null, /*#__PURE__*/ I.createElement("span", { className: "d-flex" }, /*#__PURE__*/ I.createElement(ie, {
		placement: "top",
		overlay: /*#__PURE__*/ I.createElement(ge, { id: "color-picker-tooltip" }, "Color picker")
	}, /*#__PURE__*/ I.createElement(A, {
		ref: c,
		className: (0, R.default)(n, "pgn__color-picker", `pgn__color-picker-${r}`),
		style: { ...e && d ? { background: `${e}` } : {} },
		onClick: a
	}))), /*#__PURE__*/ I.createElement(mu, {
		positionRef: s,
		isOpen: i,
		style: { background: "black" },
		onClose: o
	}, /*#__PURE__*/ I.createElement("div", {
		className: "pgn__color-modal rounded shadow",
		style: { textAlign: "start" }
	}, /*#__PURE__*/ I.createElement(_p, {
		color: h,
		onChange: _
	}), /*#__PURE__*/ I.createElement(U.Group, {
		className: "pgn__hex-form",
		size: "sm"
	}, /*#__PURE__*/ I.createElement("div", null, /*#__PURE__*/ I.createElement(U.Label, { className: "pgn__hex-label" }, "Hex"), /*#__PURE__*/ I.createElement(U.Control, {
		className: "pgn__hex-field",
		isInvalid: !d,
		value: p,
		onChange: (e) => _(e.target.value),
		"data-testid": "hex-input",
		spellCheck: "false"
	})), !d && /*#__PURE__*/ I.createElement(U.Control.Feedback, {
		className: "pgn__color-error",
		type: "invalid"
	}, "Colors must be in hexadecimal format.")))));
}
vp.defaultProps = {
	color: "",
	className: void 0,
	size: "md"
}, vp.propTypes = {
	color: z.default.string,
	setColor: z.default.func.isRequired,
	className: z.default.string,
	size: z.default.oneOf(["sm", "md"])
};
// src/lib/context.ts
var yp = (0, I.createContext)(null), bp = () => (0, I.useContext)(yp), xp = function(e) {
	return Sp(e) && !Cp(e);
};
function Sp(e) {
	return !!e && typeof e == "object";
}
function Cp(e) {
	var t = Object.prototype.toString.call(e);
	return t === "[object RegExp]" || t === "[object Date]" || Tp(e);
}
var wp = typeof Symbol == "function" && Symbol.for ? Symbol.for("react.element") : 60103;
function Tp(e) {
	return e.$$typeof === wp;
}
function Ep(e) {
	return Array.isArray(e) ? [] : {};
}
function Dp(e, t) {
	return t.clone !== !1 && t.isMergeableObject(e) ? Ap(Ep(e), e, t) : e;
}
function Op(e, t, n) {
	return e.concat(t).map(function(e) {
		return Dp(e, n);
	});
}
function kp(e, t, n) {
	var r = {};
	return n.isMergeableObject(e) && Object.keys(e).forEach(function(t) {
		r[t] = Dp(e[t], n);
	}), Object.keys(t).forEach(function(i) {
		r[i] = !n.isMergeableObject(t[i]) || !e[i] ? Dp(t[i], n) : Ap(e[i], t[i], n);
	}), r;
}
function Ap(e, t, n) {
	n ||= {}, n.arrayMerge = n.arrayMerge || Op, n.isMergeableObject = n.isMergeableObject || xp;
	var r = Array.isArray(t);
	return r === Array.isArray(e) ? r ? n.arrayMerge(e, t, n) : kp(e, t, n) : Dp(t, n);
}
Ap.all = function(e, t) {
	if (!Array.isArray(e)) throw Error("first argument should be an array");
	return e.reduce(function(e, n) {
		return Ap(e, n, t);
	}, {});
};
var jp = Ap, Mp = typeof globalThis == "object" && globalThis && globalThis.Object === Object && globalThis, Np = typeof self == "object" && self && self.Object === Object && self, Pp = Mp || Np || Function("return this")(), Fp = Pp.Symbol, Ip = Object.prototype, Lp = Ip.hasOwnProperty, Rp = Ip.toString, zp = Fp ? Fp.toStringTag : void 0;
function Bp(e) {
	var t = Lp.call(e, zp), n = e[zp];
	try {
		e[zp] = void 0;
		var r = !0;
	} catch {}
	var i = Rp.call(e);
	return r && (t ? e[zp] = n : delete e[zp]), i;
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_objectToString.js
var Vp = Object.prototype.toString;
function Hp(e) {
	return Vp.call(e);
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseGetTag.js
var Up = "[object Null]", Wp = "[object Undefined]", Gp = Fp ? Fp.toStringTag : void 0;
function Kp(e) {
	return e == null ? e === void 0 ? Wp : Up : Gp && Gp in Object(e) ? Bp(e) : Hp(e);
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_overArg.js
function qp(e, t) {
	return function(n) {
		return e(t(n));
	};
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_getPrototype.js
var Jp = qp(Object.getPrototypeOf, Object);
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isObjectLike.js
function Yp(e) {
	return typeof e == "object" && !!e;
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isPlainObject.js
var Xp = "[object Object]", Zp = Function.prototype, Qp = Object.prototype, $p = Zp.toString, em = Qp.hasOwnProperty, tm = $p.call(Object);
function nm(e) {
	if (!Yp(e) || Kp(e) != Xp) return !1;
	var t = Jp(e);
	if (t === null) return !0;
	var n = em.call(t, "constructor") && t.constructor;
	return typeof n == "function" && n instanceof n && $p.call(n) == tm;
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_listCacheClear.js
function rm() {
	this.__data__ = [], this.size = 0;
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/eq.js
function im(e, t) {
	return e === t || e !== e && t !== t;
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_assocIndexOf.js
function am(e, t) {
	for (var n = e.length; n--;) if (im(e[n][0], t)) return n;
	return -1;
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_listCacheDelete.js
var om = Array.prototype.splice;
function sm(e) {
	var t = this.__data__, n = am(t, e);
	return n < 0 ? !1 : (n == t.length - 1 ? t.pop() : om.call(t, n, 1), --this.size, !0);
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_listCacheGet.js
function cm(e) {
	var t = this.__data__, n = am(t, e);
	return n < 0 ? void 0 : t[n][1];
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_listCacheHas.js
function lm(e) {
	return am(this.__data__, e) > -1;
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_listCacheSet.js
function um(e, t) {
	var n = this.__data__, r = am(n, e);
	return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_ListCache.js
function dm(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.clear(); ++t < n;) {
		var r = e[t];
		this.set(r[0], r[1]);
	}
}
dm.prototype.clear = rm, dm.prototype.delete = sm, dm.prototype.get = cm, dm.prototype.has = lm, dm.prototype.set = um;
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_stackClear.js
function fm() {
	this.__data__ = new dm(), this.size = 0;
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_stackDelete.js
function pm(e) {
	var t = this.__data__, n = t.delete(e);
	return this.size = t.size, n;
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_stackGet.js
function mm(e) {
	return this.__data__.get(e);
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_stackHas.js
function hm(e) {
	return this.__data__.has(e);
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isObject.js
function gm(e) {
	var t = typeof e;
	return e != null && (t == "object" || t == "function");
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isFunction.js
var _m = "[object AsyncFunction]", vm = "[object Function]", ym = "[object GeneratorFunction]", bm = "[object Proxy]";
function xm(e) {
	if (!gm(e)) return !1;
	var t = Kp(e);
	return t == vm || t == ym || t == _m || t == bm;
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_coreJsData.js
var Sm = Pp["__core-js_shared__"], Cm = function() {
	var e = /[^.]+$/.exec(Sm && Sm.keys && Sm.keys.IE_PROTO || "");
	return e ? "Symbol(src)_1." + e : "";
}();
function wm(e) {
	return !!Cm && Cm in e;
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_toSource.js
var Tm = Function.prototype.toString;
function Em(e) {
	if (e != null) {
		try {
			return Tm.call(e);
		} catch {}
		try {
			return e + "";
		} catch {}
	}
	return "";
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseIsNative.js
var Dm = /[\\^$.*+?()[\]{}|]/g, Om = /^\[object .+?Constructor\]$/, km = Function.prototype, Am = Object.prototype, jm = km.toString, Mm = Am.hasOwnProperty, Nm = RegExp("^" + jm.call(Mm).replace(Dm, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function Pm(e) {
	return !gm(e) || wm(e) ? !1 : (xm(e) ? Nm : Om).test(Em(e));
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_getValue.js
function Fm(e, t) {
	return e?.[t];
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_getNative.js
function Im(e, t) {
	var n = Fm(e, t);
	return Pm(n) ? n : void 0;
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_Map.js
var Lm = Im(Pp, "Map"), Rm = Im(Object, "create");
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_hashClear.js
function zm() {
	this.__data__ = Rm ? Rm(null) : {}, this.size = 0;
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_hashDelete.js
function Bm(e) {
	var t = this.has(e) && delete this.__data__[e];
	return this.size -= +!!t, t;
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_hashGet.js
var Vm = "__lodash_hash_undefined__", Hm = Object.prototype.hasOwnProperty;
function Um(e) {
	var t = this.__data__;
	if (Rm) {
		var n = t[e];
		return n === Vm ? void 0 : n;
	}
	return Hm.call(t, e) ? t[e] : void 0;
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_hashHas.js
var Wm = Object.prototype.hasOwnProperty;
function Gm(e) {
	var t = this.__data__;
	return Rm ? t[e] !== void 0 : Wm.call(t, e);
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_hashSet.js
var Km = "__lodash_hash_undefined__";
function qm(e, t) {
	var n = this.__data__;
	return this.size += +!this.has(e), n[e] = Rm && t === void 0 ? Km : t, this;
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_Hash.js
function Jm(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.clear(); ++t < n;) {
		var r = e[t];
		this.set(r[0], r[1]);
	}
}
Jm.prototype.clear = zm, Jm.prototype.delete = Bm, Jm.prototype.get = Um, Jm.prototype.has = Gm, Jm.prototype.set = qm;
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_mapCacheClear.js
function Ym() {
	this.size = 0, this.__data__ = {
		hash: new Jm(),
		map: new (Lm || dm)(),
		string: new Jm()
	};
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_isKeyable.js
function Xm(e) {
	var t = typeof e;
	return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_getMapData.js
function Zm(e, t) {
	var n = e.__data__;
	return Xm(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_mapCacheDelete.js
function Qm(e) {
	var t = Zm(this, e).delete(e);
	return this.size -= +!!t, t;
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_mapCacheGet.js
function $m(e) {
	return Zm(this, e).get(e);
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_mapCacheHas.js
function eh(e) {
	return Zm(this, e).has(e);
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_mapCacheSet.js
function th(e, t) {
	var n = Zm(this, e), r = n.size;
	return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_MapCache.js
function nh(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.clear(); ++t < n;) {
		var r = e[t];
		this.set(r[0], r[1]);
	}
}
nh.prototype.clear = Ym, nh.prototype.delete = Qm, nh.prototype.get = $m, nh.prototype.has = eh, nh.prototype.set = th;
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_stackSet.js
var rh = 200;
function ih(e, t) {
	var n = this.__data__;
	if (n instanceof dm) {
		var r = n.__data__;
		if (!Lm || r.length < rh - 1) return r.push([e, t]), this.size = ++n.size, this;
		n = this.__data__ = new nh(r);
	}
	return n.set(e, t), this.size = n.size, this;
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_Stack.js
function ah(e) {
	var t = this.__data__ = new dm(e);
	this.size = t.size;
}
ah.prototype.clear = fm, ah.prototype.delete = pm, ah.prototype.get = mm, ah.prototype.has = hm, ah.prototype.set = ih;
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_arrayEach.js
function oh(e, t) {
	for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1;);
	return e;
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_defineProperty.js
var sh = function() {
	try {
		var e = Im(Object, "defineProperty");
		return e({}, "", {}), e;
	} catch {}
}();
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseAssignValue.js
function ch(e, t, n) {
	t == "__proto__" && sh ? sh(e, t, {
		configurable: !0,
		enumerable: !0,
		value: n,
		writable: !0
	}) : e[t] = n;
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_assignValue.js
var lh = Object.prototype.hasOwnProperty;
function uh(e, t, n) {
	var r = e[t];
	(!(lh.call(e, t) && im(r, n)) || n === void 0 && !(t in e)) && ch(e, t, n);
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_copyObject.js
function dh(e, t, n, r) {
	var i = !n;
	n ||= {};
	for (var a = -1, o = t.length; ++a < o;) {
		var s = t[a], c = r ? r(n[s], e[s], s, n, e) : void 0;
		c === void 0 && (c = e[s]), i ? ch(n, s, c) : uh(n, s, c);
	}
	return n;
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseTimes.js
function fh(e, t) {
	for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
	return r;
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseIsArguments.js
var ph = "[object Arguments]";
function mh(e) {
	return Yp(e) && Kp(e) == ph;
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isArguments.js
var hh = Object.prototype, gh = hh.hasOwnProperty, _h = hh.propertyIsEnumerable, vh = mh(function() {
	return arguments;
}()) ? mh : function(e) {
	return Yp(e) && gh.call(e, "callee") && !_h.call(e, "callee");
}, yh = Array.isArray;
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/stubFalse.js
function bh() {
	return !1;
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isBuffer.js
var xh = typeof exports == "object" && exports && !exports.nodeType && exports, Sh = xh && typeof module == "object" && module && !module.nodeType && module, Ch = Sh && Sh.exports === xh ? Pp.Buffer : void 0, wh = (Ch ? Ch.isBuffer : void 0) || bh, Th = 9007199254740991, Eh = /^(?:0|[1-9]\d*)$/;
function Dh(e, t) {
	var n = typeof e;
	return t ??= Th, !!t && (n == "number" || n != "symbol" && Eh.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isLength.js
var Oh = 9007199254740991;
function kh(e) {
	return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Oh;
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseIsTypedArray.js
var Ah = "[object Arguments]", jh = "[object Array]", Mh = "[object Boolean]", Nh = "[object Date]", Ph = "[object Error]", Fh = "[object Function]", Ih = "[object Map]", Lh = "[object Number]", Rh = "[object Object]", zh = "[object RegExp]", Bh = "[object Set]", Vh = "[object String]", Hh = "[object WeakMap]", Uh = "[object ArrayBuffer]", Wh = "[object DataView]", Gh = "[object Float32Array]", Kh = "[object Float64Array]", qh = "[object Int8Array]", Jh = "[object Int16Array]", Yh = "[object Int32Array]", Xh = "[object Uint8Array]", Zh = "[object Uint8ClampedArray]", Qh = "[object Uint16Array]", $h = "[object Uint32Array]", eg = {};
eg[Gh] = eg[Kh] = eg[qh] = eg[Jh] = eg[Yh] = eg[Xh] = eg[Zh] = eg[Qh] = eg[$h] = !0, eg[Ah] = eg[jh] = eg[Uh] = eg[Mh] = eg[Wh] = eg[Nh] = eg[Ph] = eg[Fh] = eg[Ih] = eg[Lh] = eg[Rh] = eg[zh] = eg[Bh] = eg[Vh] = eg[Hh] = !1;
function tg(e) {
	return Yp(e) && kh(e.length) && !!eg[Kp(e)];
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseUnary.js
function ng(e) {
	return function(t) {
		return e(t);
	};
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_nodeUtil.js
var rg = typeof exports == "object" && exports && !exports.nodeType && exports, ig = rg && typeof module == "object" && module && !module.nodeType && module, ag = ig && ig.exports === rg && Mp.process, og = function() {
	try {
		return ig && ig.require && ig.require("util").types || ag && ag.binding && ag.binding("util");
	} catch {}
}(), sg = og && og.isTypedArray, cg = sg ? ng(sg) : tg, lg = Object.prototype.hasOwnProperty;
function ug(e, t) {
	var n = yh(e), r = !n && vh(e), i = !n && !r && wh(e), a = !n && !r && !i && cg(e), o = n || r || i || a, s = o ? fh(e.length, String) : [], c = s.length;
	for (var l in e) (t || lg.call(e, l)) && !(o && (l == "length" || i && (l == "offset" || l == "parent") || a && (l == "buffer" || l == "byteLength" || l == "byteOffset") || Dh(l, c))) && s.push(l);
	return s;
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_isPrototype.js
var dg = Object.prototype;
function fg(e) {
	var t = e && e.constructor;
	return e === (typeof t == "function" && t.prototype || dg);
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_nativeKeys.js
var pg = qp(Object.keys, Object), mg = Object.prototype.hasOwnProperty;
function hg(e) {
	if (!fg(e)) return pg(e);
	var t = [];
	for (var n in Object(e)) mg.call(e, n) && n != "constructor" && t.push(n);
	return t;
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isArrayLike.js
function gg(e) {
	return e != null && kh(e.length) && !xm(e);
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/keys.js
function _g(e) {
	return gg(e) ? ug(e) : hg(e);
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseAssign.js
function vg(e, t) {
	return e && dh(t, _g(t), e);
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_nativeKeysIn.js
function yg(e) {
	var t = [];
	if (e != null) for (var n in Object(e)) t.push(n);
	return t;
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseKeysIn.js
var bg = Object.prototype.hasOwnProperty;
function xg(e) {
	if (!gm(e)) return yg(e);
	var t = fg(e), n = [];
	for (var r in e) (r != "constructor" || !t && bg.call(e, r)) && n.push(r);
	return n;
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/keysIn.js
function Sg(e) {
	return gg(e) ? ug(e, !0) : xg(e);
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseAssignIn.js
function Cg(e, t) {
	return e && dh(t, Sg(t), e);
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_cloneBuffer.js
var wg = typeof exports == "object" && exports && !exports.nodeType && exports, Tg = wg && typeof module == "object" && module && !module.nodeType && module, Eg = Tg && Tg.exports === wg ? Pp.Buffer : void 0, Dg = Eg ? Eg.allocUnsafe : void 0;
function Og(e, t) {
	if (t) return e.slice();
	var n = e.length, r = Dg ? Dg(n) : new e.constructor(n);
	return e.copy(r), r;
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_copyArray.js
function kg(e, t) {
	var n = -1, r = e.length;
	for (t ||= Array(r); ++n < r;) t[n] = e[n];
	return t;
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_arrayFilter.js
function Ag(e, t) {
	for (var n = -1, r = e == null ? 0 : e.length, i = 0, a = []; ++n < r;) {
		var o = e[n];
		t(o, n, e) && (a[i++] = o);
	}
	return a;
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/stubArray.js
function jg() {
	return [];
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_getSymbols.js
var Mg = Object.prototype.propertyIsEnumerable, Ng = Object.getOwnPropertySymbols, Pg = Ng ? function(e) {
	return e == null ? [] : (e = Object(e), Ag(Ng(e), function(t) {
		return Mg.call(e, t);
	}));
} : jg;
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_copySymbols.js
function Fg(e, t) {
	return dh(e, Pg(e), t);
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_arrayPush.js
function Ig(e, t) {
	for (var n = -1, r = t.length, i = e.length; ++n < r;) e[i + n] = t[n];
	return e;
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_getSymbolsIn.js
var Lg = Object.getOwnPropertySymbols ? function(e) {
	for (var t = []; e;) Ig(t, Pg(e)), e = Jp(e);
	return t;
} : jg;
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_copySymbolsIn.js
function Rg(e, t) {
	return dh(e, Lg(e), t);
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseGetAllKeys.js
function zg(e, t, n) {
	var r = t(e);
	return yh(e) ? r : Ig(r, n(e));
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_getAllKeys.js
function Bg(e) {
	return zg(e, _g, Pg);
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_getAllKeysIn.js
function Vg(e) {
	return zg(e, Sg, Lg);
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_DataView.js
var Hg = Im(Pp, "DataView"), Ug = Im(Pp, "Promise"), Wg = Im(Pp, "Set"), Gg = Im(Pp, "WeakMap"), Kg = "[object Map]", qg = "[object Object]", Jg = "[object Promise]", Yg = "[object Set]", Xg = "[object WeakMap]", Zg = "[object DataView]", Qg = Em(Hg), $g = Em(Lm), e_ = Em(Ug), t_ = Em(Wg), n_ = Em(Gg), r_ = Kp;
(Hg && r_(new Hg(/* @__PURE__ */ new ArrayBuffer(1))) != Zg || Lm && r_(new Lm()) != Kg || Ug && r_(Ug.resolve()) != Jg || Wg && r_(new Wg()) != Yg || Gg && r_(new Gg()) != Xg) && (r_ = function(e) {
	var t = Kp(e), n = t == qg ? e.constructor : void 0, r = n ? Em(n) : "";
	if (r) switch (r) {
		case Qg: return Zg;
		case $g: return Kg;
		case e_: return Jg;
		case t_: return Yg;
		case n_: return Xg;
	}
	return t;
});
var i_ = r_, a_ = Object.prototype.hasOwnProperty;
function o_(e) {
	var t = e.length, n = new e.constructor(t);
	return t && typeof e[0] == "string" && a_.call(e, "index") && (n.index = e.index, n.input = e.input), n;
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_Uint8Array.js
var s_ = Pp.Uint8Array;
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_cloneArrayBuffer.js
function c_(e) {
	var t = new e.constructor(e.byteLength);
	return new s_(t).set(new s_(e)), t;
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_cloneDataView.js
function l_(e, t) {
	var n = t ? c_(e.buffer) : e.buffer;
	return new e.constructor(n, e.byteOffset, e.byteLength);
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_cloneRegExp.js
var u_ = /\w*$/;
function d_(e) {
	var t = new e.constructor(e.source, u_.exec(e));
	return t.lastIndex = e.lastIndex, t;
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_cloneSymbol.js
var f_ = Fp ? Fp.prototype : void 0, p_ = f_ ? f_.valueOf : void 0;
function m_(e) {
	return p_ ? Object(p_.call(e)) : {};
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_cloneTypedArray.js
function h_(e, t) {
	var n = t ? c_(e.buffer) : e.buffer;
	return new e.constructor(n, e.byteOffset, e.length);
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_initCloneByTag.js
var g_ = "[object Boolean]", __ = "[object Date]", v_ = "[object Map]", y_ = "[object Number]", b_ = "[object RegExp]", x_ = "[object Set]", S_ = "[object String]", C_ = "[object Symbol]", w_ = "[object ArrayBuffer]", T_ = "[object DataView]", E_ = "[object Float32Array]", D_ = "[object Float64Array]", O_ = "[object Int8Array]", k_ = "[object Int16Array]", A_ = "[object Int32Array]", j_ = "[object Uint8Array]", M_ = "[object Uint8ClampedArray]", N_ = "[object Uint16Array]", P_ = "[object Uint32Array]";
function F_(e, t, n) {
	var r = e.constructor;
	switch (t) {
		case w_: return c_(e);
		case g_:
		case __: return new r(+e);
		case T_: return l_(e, n);
		case E_:
		case D_:
		case O_:
		case k_:
		case A_:
		case j_:
		case M_:
		case N_:
		case P_: return h_(e, n);
		case v_: return new r();
		case y_:
		case S_: return new r(e);
		case b_: return d_(e);
		case x_: return new r();
		case C_: return m_(e);
	}
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseCreate.js
var I_ = Object.create, L_ = function() {
	function e() {}
	return function(t) {
		if (!gm(t)) return {};
		if (I_) return I_(t);
		e.prototype = t;
		var n = new e();
		return e.prototype = void 0, n;
	};
}();
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_initCloneObject.js
function R_(e) {
	return typeof e.constructor == "function" && !fg(e) ? L_(Jp(e)) : {};
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseIsMap.js
var z_ = "[object Map]";
function B_(e) {
	return Yp(e) && i_(e) == z_;
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isMap.js
var V_ = og && og.isMap, H_ = V_ ? ng(V_) : B_, U_ = "[object Set]";
function W_(e) {
	return Yp(e) && i_(e) == U_;
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isSet.js
var G_ = og && og.isSet, K_ = G_ ? ng(G_) : W_, q_ = 1, J_ = 2, Y_ = 4, X_ = "[object Arguments]", Z_ = "[object Array]", Q_ = "[object Boolean]", $_ = "[object Date]", ev = "[object Error]", tv = "[object Function]", nv = "[object GeneratorFunction]", rv = "[object Map]", iv = "[object Number]", av = "[object Object]", ov = "[object RegExp]", sv = "[object Set]", cv = "[object String]", lv = "[object Symbol]", uv = "[object WeakMap]", dv = "[object ArrayBuffer]", fv = "[object DataView]", pv = "[object Float32Array]", mv = "[object Float64Array]", hv = "[object Int8Array]", gv = "[object Int16Array]", _v = "[object Int32Array]", vv = "[object Uint8Array]", yv = "[object Uint8ClampedArray]", bv = "[object Uint16Array]", xv = "[object Uint32Array]", G = {};
G[X_] = G[Z_] = G[dv] = G[fv] = G[Q_] = G[$_] = G[pv] = G[mv] = G[hv] = G[gv] = G[_v] = G[rv] = G[iv] = G[av] = G[ov] = G[sv] = G[cv] = G[lv] = G[vv] = G[yv] = G[bv] = G[xv] = !0, G[ev] = G[tv] = G[uv] = !1;
function Sv(e, t, n, r, i, a) {
	var o, s = t & q_, c = t & J_, l = t & Y_;
	if (n && (o = i ? n(e, r, i, a) : n(e)), o !== void 0) return o;
	if (!gm(e)) return e;
	var u = yh(e);
	if (u) {
		if (o = o_(e), !s) return kg(e, o);
	} else {
		var d = i_(e), f = d == tv || d == nv;
		if (wh(e)) return Og(e, s);
		if (d == av || d == X_ || f && !i) {
			if (o = c || f ? {} : R_(e), !s) return c ? Rg(e, Cg(o, e)) : Fg(e, vg(o, e));
		} else {
			if (!G[d]) return i ? e : {};
			o = F_(e, d, s);
		}
	}
	a ||= new ah();
	var p = a.get(e);
	if (p) return p;
	a.set(e, o), K_(e) ? e.forEach(function(r) {
		o.add(Sv(r, t, n, r, e, a));
	}) : H_(e) && e.forEach(function(r, i) {
		o.set(i, Sv(r, t, n, i, e, a));
	});
	var m = u ? void 0 : (l ? c ? Vg : Bg : c ? Sg : _g)(e);
	return oh(m || e, function(r, i) {
		m && (i = r, r = e[i]), uh(o, i, Sv(r, t, n, i, e, a));
	}), o;
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/cloneDeep.js
var Cv = 1, wv = 4;
function Tv(e) {
	return Sv(e, Cv | wv);
}
// node_modules/.pnpm/tiny-warning@1.0.3/node_modules/tiny-warning/dist/tiny-warning.esm.js
var Ev = /* @__PURE__ */ e((/* @__PURE__ */ t(((e, t) => {
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
})))()), Dv = 4;
function Ov(e) {
	return Sv(e, Dv);
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_arrayMap.js
function kv(e, t) {
	for (var n = -1, r = e == null ? 0 : e.length, i = Array(r); ++n < r;) i[n] = t(e[n], n, e);
	return i;
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isSymbol.js
var Av = "[object Symbol]";
function jv(e) {
	return typeof e == "symbol" || Yp(e) && Kp(e) == Av;
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/memoize.js
var Mv = "Expected a function";
function Nv(e, t) {
	if (typeof e != "function" || t != null && typeof t != "function") throw TypeError(Mv);
	var n = function() {
		var r = arguments, i = t ? t.apply(this, r) : r[0], a = n.cache;
		if (a.has(i)) return a.get(i);
		var o = e.apply(this, r);
		return n.cache = a.set(i, o) || a, o;
	};
	return n.cache = new (Nv.Cache || nh)(), n;
}
Nv.Cache = nh;
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_memoizeCapped.js
var Pv = 500;
function Fv(e) {
	var t = Nv(e, function(e) {
		return n.size === Pv && n.clear(), e;
	}), n = t.cache;
	return t;
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_stringToPath.js
var Iv = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Lv = /\\(\\)?/g, Rv = Fv(function(e) {
	var t = [];
	return e.charCodeAt(0) === 46 && t.push(""), e.replace(Iv, function(e, n, r, i) {
		t.push(r ? i.replace(Lv, "$1") : n || e);
	}), t;
}), zv = 1 / 0;
function Bv(e) {
	if (typeof e == "string" || jv(e)) return e;
	var t = e + "";
	return t == "0" && 1 / e == -zv ? "-0" : t;
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseToString.js
var Vv = 1 / 0, Hv = Fp ? Fp.prototype : void 0, Uv = Hv ? Hv.toString : void 0;
function Wv(e) {
	if (typeof e == "string") return e;
	if (yh(e)) return kv(e, Wv) + "";
	if (jv(e)) return Uv ? Uv.call(e) : "";
	var t = e + "";
	return t == "0" && 1 / e == -Vv ? "-0" : t;
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/toString.js
function Gv(e) {
	return e == null ? "" : Wv(e);
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/toPath.js
function Kv(e) {
	return yh(e) ? kv(e, Bv) : jv(e) ? [e] : kg(Rv(Gv(e)));
}
// node_modules/.pnpm/formik@2.4.9_@types+react@18.3.31_react@18.3.1/node_modules/formik/dist/formik.esm.js
function qv() {
	return qv = Object.assign || function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, qv.apply(this, arguments);
}
function Jv(e, t) {
	e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t;
}
function Yv(e, t) {
	if (e == null) return {};
	for (var n = {}, r = Object.keys(e), i, a = 0; a < r.length; a++) i = r[a], t.indexOf(i) >= 0 || (n[i] = e[i]);
	return n;
}
function Xv(e) {
	if (e === void 0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
	return e;
}
var Zv = /*#__PURE__*/ (0, I.createContext)(void 0);
Zv.displayName = "FormikContext";
var Qv = Zv.Provider, $v = Zv.Consumer;
function ey() {
	return (0, I.useContext)(Zv);
}
var ty = function(e) {
	return Array.isArray(e) && e.length === 0;
}, ny = function(e) {
	return typeof e == "function";
}, ry = function(e) {
	return typeof e == "object" && !!e;
}, iy = function(e) {
	return String(Math.floor(Number(e))) === e;
}, ay = function(e) {
	return Object.prototype.toString.call(e) === "[object String]";
}, oy = function(e) {
	return I.Children.count(e) === 0;
}, sy = function(e) {
	return ry(e) && ny(e.then);
};
function cy(e, t, n, r) {
	r === void 0 && (r = 0);
	for (var i = Kv(t); e && r < i.length;) e = e[i[r++]];
	return r !== i.length && !e || e === void 0 ? n : e;
}
function ly(e, t, n) {
	for (var r = Ov(e), i = r, a = 0, o = Kv(t); a < o.length - 1; a++) {
		var s = o[a], c = cy(e, o.slice(0, a + 1));
		if (c && (ry(c) || Array.isArray(c))) i = i[s] = Ov(c);
		else {
			var l = o[a + 1];
			i = i[s] = iy(l) && Number(l) >= 0 ? [] : {};
		}
	}
	return (a === 0 ? e : i)[o[a]] === n ? e : (n === void 0 ? delete i[o[a]] : i[o[a]] = n, a === 0 && n === void 0 && delete r[o[a]], r);
}
function uy(e, t, n, r) {
	n === void 0 && (n = /* @__PURE__ */ new WeakMap()), r === void 0 && (r = {});
	for (var i = 0, a = Object.keys(e); i < a.length; i++) {
		var o = a[i], s = e[o];
		ry(s) ? n.get(s) || (n.set(s, !0), r[o] = Array.isArray(s) ? [] : {}, uy(s, t, n, r[o])) : r[o] = t;
	}
	return r;
}
function dy(e, t) {
	switch (t.type) {
		case "SET_VALUES": return qv({}, e, { values: t.payload });
		case "SET_TOUCHED": return qv({}, e, { touched: t.payload });
		case "SET_ERRORS": return (0, Ev.default)(e.errors, t.payload) ? e : qv({}, e, { errors: t.payload });
		case "SET_STATUS": return qv({}, e, { status: t.payload });
		case "SET_ISSUBMITTING": return qv({}, e, { isSubmitting: t.payload });
		case "SET_ISVALIDATING": return qv({}, e, { isValidating: t.payload });
		case "SET_FIELD_VALUE": return qv({}, e, { values: ly(e.values, t.payload.field, t.payload.value) });
		case "SET_FIELD_TOUCHED": return qv({}, e, { touched: ly(e.touched, t.payload.field, t.payload.value) });
		case "SET_FIELD_ERROR": return qv({}, e, { errors: ly(e.errors, t.payload.field, t.payload.value) });
		case "RESET_FORM": return qv({}, e, t.payload);
		case "SET_FORMIK_STATE": return t.payload(e);
		case "SUBMIT_ATTEMPT": return qv({}, e, {
			touched: uy(e.values, !0),
			isSubmitting: !0,
			submitCount: e.submitCount + 1
		});
		case "SUBMIT_FAILURE": return qv({}, e, { isSubmitting: !1 });
		case "SUBMIT_SUCCESS": return qv({}, e, { isSubmitting: !1 });
		default: return e;
	}
}
var fy = {}, py = {};
function my(e) {
	var t = e.validateOnChange, n = t === void 0 || t, r = e.validateOnBlur, i = r === void 0 || r, a = e.validateOnMount, o = a !== void 0 && a, s = e.isInitialValid, c = e.enableReinitialize, l = c !== void 0 && c, u = e.onSubmit, d = Yv(e, [
		"validateOnChange",
		"validateOnBlur",
		"validateOnMount",
		"isInitialValid",
		"enableReinitialize",
		"onSubmit"
	]), f = qv({
		validateOnChange: n,
		validateOnBlur: i,
		validateOnMount: o,
		onSubmit: u
	}, d), p = (0, I.useRef)(f.initialValues), m = (0, I.useRef)(f.initialErrors || fy), h = (0, I.useRef)(f.initialTouched || py), g = (0, I.useRef)(f.initialStatus), _ = (0, I.useRef)(!1), v = (0, I.useRef)({});
	(0, I.useEffect)(function() {
		return _.current = !0, function() {
			_.current = !1;
		};
	}, []);
	var y = (0, I.useState)(0)[1], b = (0, I.useRef)({
		values: Tv(f.initialValues),
		errors: Tv(f.initialErrors) || fy,
		touched: Tv(f.initialTouched) || py,
		status: Tv(f.initialStatus),
		isSubmitting: !1,
		isValidating: !1,
		submitCount: 0
	}), x = b.current, S = (0, I.useCallback)(function(e) {
		var t = b.current;
		b.current = dy(t, e), t !== b.current && y(function(e) {
			return e + 1;
		});
	}, []), C = (0, I.useCallback)(function(e, t) {
		return new Promise(function(n, r) {
			var i = f.validate(e, t);
			i == null ? n(fy) : sy(i) ? i.then(function(e) {
				n(e || fy);
			}, function(e) {
				r(e);
			}) : n(i);
		});
	}, [f.validate]), w = (0, I.useCallback)(function(e, t) {
		var n = f.validationSchema, r = ny(n) ? n(t) : n, i = t && r.validateAt ? r.validateAt(t, e) : _y(e, r);
		return new Promise(function(e, t) {
			i.then(function() {
				e(fy);
			}, function(n) {
				n.name === "ValidationError" ? e(gy(n)) : t(n);
			});
		});
	}, [f.validationSchema]), T = (0, I.useCallback)(function(e, t) {
		return new Promise(function(n) {
			return n(v.current[e].validate(t));
		});
	}, []), E = (0, I.useCallback)(function(e) {
		var t = Object.keys(v.current).filter(function(e) {
			return ny(v.current[e].validate);
		}), n = t.length > 0 ? t.map(function(t) {
			return T(t, cy(e, t));
		}) : [Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];
		return Promise.all(n).then(function(e) {
			return e.reduce(function(e, n, r) {
				return n === "DO_NOT_DELETE_YOU_WILL_BE_FIRED" || n && (e = ly(e, t[r], n)), e;
			}, {});
		});
	}, [T]), D = (0, I.useCallback)(function(e) {
		return Promise.all([
			E(e),
			f.validationSchema ? w(e) : {},
			f.validate ? C(e) : {}
		]).then(function(e) {
			var t = e[0], n = e[1], r = e[2];
			return jp.all([
				t,
				n,
				r
			], { arrayMerge: yy });
		});
	}, [
		f.validate,
		f.validationSchema,
		E,
		C,
		w
	]), O = Cy(function(e) {
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
		o && _.current === !0 && (0, Ev.default)(p.current, f.initialValues) && O(p.current);
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
			sy(o) ? o.then(a) : a();
		} else a();
	}, [
		f.initialErrors,
		f.initialStatus,
		f.initialTouched,
		f.onReset
	]);
	(0, I.useEffect)(function() {
		_.current === !0 && !(0, Ev.default)(p.current, f.initialValues) && l && (p.current = f.initialValues, k(), o && O(p.current));
	}, [
		l,
		f.initialValues,
		k,
		o,
		O
	]), (0, I.useEffect)(function() {
		l && _.current === !0 && !(0, Ev.default)(m.current, f.initialErrors) && (m.current = f.initialErrors || fy, S({
			type: "SET_ERRORS",
			payload: f.initialErrors || fy
		}));
	}, [l, f.initialErrors]), (0, I.useEffect)(function() {
		l && _.current === !0 && !(0, Ev.default)(h.current, f.initialTouched) && (h.current = f.initialTouched || py, S({
			type: "SET_TOUCHED",
			payload: f.initialTouched || py
		}));
	}, [l, f.initialTouched]), (0, I.useEffect)(function() {
		l && _.current === !0 && !(0, Ev.default)(g.current, f.initialStatus) && (g.current = f.initialStatus, S({
			type: "SET_STATUS",
			payload: f.initialStatus
		}));
	}, [
		l,
		f.initialStatus,
		f.initialTouched
	]);
	var A = Cy(function(e) {
		if (v.current[e] && ny(v.current[e].validate)) {
			var t = cy(x.values, e), n = v.current[e].validate(t);
			return sy(n) ? (S({
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
		}
		return f.validationSchema ? (S({
			type: "SET_ISVALIDATING",
			payload: !0
		}), w(x.values, e).then(function(e) {
			return e;
		}).then(function(t) {
			S({
				type: "SET_FIELD_ERROR",
				payload: {
					field: e,
					value: cy(t, e)
				}
			}), S({
				type: "SET_ISVALIDATING",
				payload: !1
			});
		})) : Promise.resolve();
	}), j = (0, I.useCallback)(function(e, t) {
		var n = t.validate;
		v.current[e] = { validate: n };
	}, []), ee = (0, I.useCallback)(function(e) {
		delete v.current[e];
	}, []), te = Cy(function(e, t) {
		return S({
			type: "SET_TOUCHED",
			payload: e
		}), (t === void 0 ? i : t) ? O(x.values) : Promise.resolve();
	}), M = (0, I.useCallback)(function(e) {
		S({
			type: "SET_ERRORS",
			payload: e
		});
	}, []), N = Cy(function(e, t) {
		var r = ny(e) ? e(x.values) : e;
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
	}, []), ne = Cy(function(e, t, r) {
		var i = ny(t) ? t(cy(x.values, e)) : t;
		return S({
			type: "SET_FIELD_VALUE",
			payload: {
				field: e,
				value: i
			}
		}), (r === void 0 ? n : r) ? O(ly(x.values, e, i)) : Promise.resolve();
	}), re = (0, I.useCallback)(function(e, t) {
		var n = t, r = e, i;
		if (!ay(e)) {
			e.persist && e.persist();
			var a = e.target ? e.target : e.currentTarget, o = a.type, s = a.name, c = a.id, l = a.value, u = a.checked;
			a.outerHTML;
			var d = a.options, f = a.multiple;
			n = t || s || c, r = /number|range/.test(o) ? (i = parseFloat(l), isNaN(i) ? "" : i) : /checkbox/.test(o) ? xy(cy(x.values, n), u, l) : d && f ? by(d) : l;
		}
		n && ne(n, r);
	}, [ne, x.values]), ie = Cy(function(e) {
		if (ay(e)) return function(t) {
			return re(t, e);
		};
		re(e);
	}), ae = Cy(function(e, t, n) {
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
	}, [ae]), se = Cy(function(e) {
		if (ay(e)) return function(t) {
			return oe(t, e);
		};
		oe(e);
	}), ce = (0, I.useCallback)(function(e) {
		ny(e) ? S({
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
	}, []), de = Cy(function() {
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
			}
			if (_.current && (S({ type: "SUBMIT_FAILURE" }), t)) throw e;
		});
	}), fe = Cy(function(e) {
		e && e.preventDefault && ny(e.preventDefault) && e.preventDefault(), e && e.stopPropagation && ny(e.stopPropagation) && e.stopPropagation(), de().catch(function(e) {
			console.warn("Warning: An unhandled error was caught from submitForm()", e);
		});
	}), pe = {
		resetForm: k,
		validateForm: O,
		validateField: A,
		setErrors: M,
		setFieldError: P,
		setFieldTouched: ae,
		setFieldValue: ne,
		setStatus: le,
		setSubmitting: ue,
		setTouched: te,
		setValues: N,
		setFormikState: ce,
		submitForm: de
	}, me = Cy(function() {
		return u(x.values, pe);
	}), he = Cy(function(e) {
		e && e.preventDefault && ny(e.preventDefault) && e.preventDefault(), e && e.stopPropagation && ny(e.stopPropagation) && e.stopPropagation(), k();
	}), ge = (0, I.useCallback)(function(e) {
		return {
			value: cy(x.values, e),
			error: cy(x.errors, e),
			touched: !!cy(x.touched, e),
			initialValue: cy(p.current, e),
			initialTouched: !!cy(h.current, e),
			initialError: cy(m.current, e)
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
		var t = ry(e), n = t ? e.name : e, r = cy(x.values, n), i = {
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
		return !(0, Ev.default)(p.current, x.values);
	}, [p.current, x.values]), be = (0, I.useMemo)(function() {
		return s === void 0 || ye ? x.errors && Object.keys(x.errors).length === 0 : s !== !1 && ny(s) ? s(f) : s;
	}, [
		s,
		ye,
		x.errors,
		f
	]);
	return qv({}, x, {
		initialValues: p.current,
		initialErrors: m.current,
		initialTouched: h.current,
		initialStatus: g.current,
		handleBlur: se,
		handleChange: ie,
		handleReset: he,
		handleSubmit: fe,
		resetForm: k,
		setErrors: M,
		setFormikState: ce,
		setFieldTouched: ae,
		setFieldValue: ne,
		setFieldError: P,
		setStatus: le,
		setSubmitting: ue,
		setTouched: te,
		setValues: N,
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
function hy(e) {
	var t = my(e), n = e.component, r = e.children, i = e.render, a = e.innerRef;
	return (0, I.useImperativeHandle)(a, function() {
		return t;
	}), (0, I.createElement)(Qv, { value: t }, n ? (0, I.createElement)(n, t) : i ? i(t) : r ? ny(r) ? r(t) : oy(r) ? null : I.Children.only(r) : null);
}
function gy(e) {
	var t = {};
	if (e.inner) {
		if (e.inner.length === 0) return ly(t, e.path, e.message);
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
			cy(t, o.path) || (t = ly(t, o.path, o.message));
		}
	}
	return t;
}
function _y(e, t, n, r) {
	n === void 0 && (n = !1);
	var i = vy(e);
	return t[n ? "validateSync" : "validate"](i, {
		abortEarly: !1,
		context: r || i
	});
}
function vy(e) {
	var t = Array.isArray(e) ? [] : {};
	for (var n in e) if (Object.prototype.hasOwnProperty.call(e, n)) {
		var r = String(n);
		t[r] = Array.isArray(e[r]) === !0 ? e[r].map(function(e) {
			return Array.isArray(e) === !0 || nm(e) ? vy(e) : e === "" ? void 0 : e;
		}) : nm(e[r]) ? vy(e[r]) : e[r] === "" ? void 0 : e[r];
	}
	return t;
}
function yy(e, t, n) {
	var r = e.slice();
	return t.forEach(function(t, i) {
		r[i] === void 0 ? r[i] = n.clone !== !1 && n.isMergeableObject(t) ? jp(Array.isArray(t) ? [] : {}, t, n) : t : n.isMergeableObject(t) ? r[i] = jp(e[i], t, n) : e.indexOf(t) === -1 && r.push(t);
	}), r;
}
function by(e) {
	return Array.from(e).filter(function(e) {
		return e.selected;
	}).map(function(e) {
		return e.value;
	});
}
function xy(e, t, n) {
	if (typeof e == "boolean") return !!t;
	var r = [], i = !1, a = -1;
	if (Array.isArray(e)) r = e, a = e.indexOf(n), i = a >= 0;
	else if (!n || n == "true" || n == "false") return !!t;
	return t && n && !i ? r.concat(n) : i ? r.slice(0, a).concat(r.slice(a + 1)) : r;
}
var Sy = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0 ? I.useLayoutEffect : I.useEffect;
function Cy(e) {
	var t = (0, I.useRef)(e);
	return Sy(function() {
		t.current = e;
	}), (0, I.useCallback)(function() {
		var e = [...arguments];
		return t.current.apply(void 0, e);
	}, []);
}
var wy = /*#__PURE__*/ (0, I.forwardRef)(function(e, t) {
	var n = e.action, r = Yv(e, ["action"]), i = n ?? "#", a = ey(), o = a.handleReset, s = a.handleSubmit;
	return (0, I.createElement)("form", qv({
		onSubmit: s,
		ref: t,
		onReset: o,
		action: i
	}, r));
});
wy.displayName = "Form";
function Ty(e) {
	var t = function(t) {
		return (0, I.createElement)($v, null, function(n) {
			return (0, I.createElement)(e, qv({}, t, { formik: n }));
		});
	}, n = e.displayName || e.name || e.constructor && e.constructor.name || "Component";
	return t.WrappedComponent = e, t.displayName = "FormikConnect(" + n + ")", (0, je.default)(t, e);
}
var Ey = function(e, t, n) {
	var r = Ay(e), i = r[t];
	return r.splice(t, 1), r.splice(n, 0, i), r;
}, Dy = function(e, t, n) {
	var r = Ay(e), i = r[t];
	return r[t] = r[n], r[n] = i, r;
}, Oy = function(e, t, n) {
	var r = Ay(e);
	return r.splice(t, 0, n), r;
}, ky = function(e, t, n) {
	var r = Ay(e);
	return r[t] = n, r;
}, Ay = function(e) {
	if (!e) return [];
	if (Array.isArray(e)) return [].concat(e);
	var t = Object.keys(e).map(function(e) {
		return parseInt(e);
	}).reduce(function(e, t) {
		return t > e ? t : e;
	}, 0);
	return Array.from(qv({}, e, { length: t + 1 }));
}, jy = function(e, t) {
	var n = typeof e == "function" ? e : t;
	return function(e) {
		return Array.isArray(e) || ry(e) ? n(Ay(e)) : e;
	};
}, My = /*#__PURE__*/ function(e) {
	Jv(t, e);
	function t(t) {
		var n = e.call(this, t) || this;
		return n.updateArrayField = function(e, t, r) {
			var i = n.props, a = i.name, o = i.formik.setFormikState;
			o(function(n) {
				var i = jy(r, e), o = jy(t, e), s = ly(n.values, a, e(cy(n.values, a))), c = r ? i(cy(n.errors, a)) : void 0, l = t ? o(cy(n.touched, a)) : void 0;
				return ty(c) && (c = void 0), ty(l) && (l = void 0), qv({}, n, {
					values: s,
					errors: r ? ly(n.errors, a, c) : n.errors,
					touched: t ? ly(n.touched, a, l) : n.touched
				});
			});
		}, n.push = function(e) {
			return n.updateArrayField(function(t) {
				return [].concat(Ay(t), [Tv(e)]);
			}, !1, !1);
		}, n.handlePush = function(e) {
			return function() {
				return n.push(e);
			};
		}, n.swap = function(e, t) {
			return n.updateArrayField(function(n) {
				return Dy(n, e, t);
			}, !0, !0);
		}, n.handleSwap = function(e, t) {
			return function() {
				return n.swap(e, t);
			};
		}, n.move = function(e, t) {
			return n.updateArrayField(function(n) {
				return Ey(n, e, t);
			}, !0, !0);
		}, n.handleMove = function(e, t) {
			return function() {
				return n.move(e, t);
			};
		}, n.insert = function(e, t) {
			return n.updateArrayField(function(n) {
				return Oy(n, e, t);
			}, function(t) {
				return Oy(t, e, null);
			}, function(t) {
				return Oy(t, e, null);
			});
		}, n.handleInsert = function(e, t) {
			return function() {
				return n.insert(e, t);
			};
		}, n.replace = function(e, t) {
			return n.updateArrayField(function(n) {
				return ky(n, e, t);
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
		}, n.remove = n.remove.bind(Xv(n)), n.pop = n.pop.bind(Xv(n)), n;
	}
	var n = t.prototype;
	return n.componentDidUpdate = function(e) {
		this.props.validateOnChange && this.props.formik.validateOnChange && !(0, Ev.default)(cy(e.formik.values, e.name), cy(this.props.formik.values, this.props.name)) && this.props.formik.validateForm(this.props.formik.values);
	}, n.remove = function(e) {
		var t;
		return this.updateArrayField(function(n) {
			var r = n ? Ay(n) : [];
			return t ||= r[e], ny(r.splice) && r.splice(e, 1), ny(r.every) && r.every(function(e) {
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
		}, t = this.props, n = t.component, r = t.render, i = t.children, a = t.name, o = t.formik, s = Yv(o, ["validate", "validationSchema"]), c = qv({}, e, {
			form: s,
			name: a
		});
		return n ? (0, I.createElement)(n, c) : r ? r(c) : i ? typeof i == "function" ? i(c) : oy(i) ? null : I.Children.only(i) : null;
	}, t;
}(I.Component);
My.defaultProps = { validateOnChange: !0 };
var Ny = /*#__PURE__*/ Ty(My);
// src/card/common/utils.ts
function Py(e = [], t) {
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
// src/card/card-carousel/studio-ui/SettingsForm.tsx
function Fy() {
	let { values: e, setFieldValue: t, handleChange: n } = ey();
	return /* @__PURE__ */ (0, L.jsxs)("div", {
		className: "card-studio-form",
		children: [
			/* @__PURE__ */ (0, L.jsxs)(U.Group, {
				className: "card-studio-field",
				children: [
					/* @__PURE__ */ (0, L.jsx)(U.Label, { children: "Display Name" }),
					/* @__PURE__ */ (0, L.jsx)(U.Text, {
						muted: !0,
						children: "Name of the XBlock component in Studio."
					}),
					/* @__PURE__ */ (0, L.jsx)(U.Control, {
						type: "text",
						name: "displayName",
						value: e.displayName,
						onChange: n
					})
				]
			}),
			/* @__PURE__ */ (0, L.jsxs)(U.Group, {
				className: "card-studio-field",
				children: [/* @__PURE__ */ (0, L.jsx)(U.Checkbox, {
					name: "disableNumbering",
					checked: !e.disableNumbering,
					onChange: (e) => t("disableNumbering", !e.currentTarget.checked),
					children: "Add card numbers"
				}), /* @__PURE__ */ (0, L.jsx)(U.Text, {
					className: "card-carousel-studio-help-text",
					children: "Displays progress. For e.g., (2/4)"
				})]
			}),
			/* @__PURE__ */ (0, L.jsxs)(U.Group, {
				className: "card-studio-field card-studio-field--last",
				children: [/* @__PURE__ */ (0, L.jsx)(U.Label, { children: "Background Color" }), /* @__PURE__ */ (0, L.jsx)(vp, {
					color: e.backgroundColor,
					setColor: (e) => t("backgroundColor", e)
				})]
			})
		]
	});
}
// src/card/common/studio-ui/secondary-content/ListItemContainer.tsx
function Iy({ heading: e, index: t, onRemoveItem: n, children: r }) {
	return /* @__PURE__ */ (0, L.jsx)("div", {
		className: "m-2 bg-light-200",
		children: /* @__PURE__ */ (0, L.jsxs)("div", {
			className: "border rounded-sm shadow-sm icon-item-form mb-4",
			children: [/* @__PURE__ */ (0, L.jsxs)("div", {
				className: "d-flex justify-content-between border-bottom align-items-center",
				children: [/* @__PURE__ */ (0, L.jsx)("h5", {
					className: "ml-2 mb-0",
					children: e
				}), /* @__PURE__ */ (0, L.jsxs)(A, {
					variant: "tertiary",
					size: "sm",
					className: "d-flex align-items-center",
					onClick: () => n(t),
					children: [
						/* @__PURE__ */ (0, L.jsx)("span", {
							className: "material-icons-outlined text-danger",
							children: "delete_outline"
						}),
						" ",
						"Delete"
					]
				})]
			}), /* @__PURE__ */ (0, L.jsx)("div", {
				className: "p-2",
				children: r
			})]
		})
	});
}
// src/card/common/studio-ui/secondary-content/IconSelector/icons.ts
var Ly = /* @__PURE__ */ "10k.10mp.11mp.123.12mp.13mp.14mp.15mp.16mp.17mp.18_up_rating.18mp.19mp.1k.1k_plus.1x_mobiledata.20mp.21mp.22mp.23mp.24mp.2k.2k_plus.2mp.30fps.30fps_select.360.3d_rotation.3g_mobiledata.3k.3k_plus.3mp.3p.4g_mobiledata.4g_plus_mobiledata.4k.4k_plus.4mp.5g.5k.5k_plus.5mp.60fps.60fps_select.6_ft_apart.6k.6k_plus.6mp.7k.7k_plus.7mp.8k.8k_plus.8mp.9k.9k_plus.9mp.abc.ac_unit.access_alarm.access_alarms.access_time.access_time_filled.accessibility.accessibility_new.accessible.accessible_forward.account_balance.account_balance_wallet.account_box.account_circle.account_tree.ad_units.adb.add.add_a_photo.add_alarm.add_alert.add_box.add_business.add_card.add_chart.add_circle.add_circle_outline.add_comment.add_home.add_home_work.add_ic_call.add_link.add_location.add_location_alt.add_moderator.add_photo_alternate.add_reaction.add_road.add_shopping_cart.add_task.add_to_drive.add_to_home_screen.add_to_photos.add_to_queue.addchart.adf_scanner.adjust.admin_panel_settings.ads_click.agriculture.air.airline_seat_flat.airline_seat_flat_angled.airline_seat_individual_suite.airline_seat_legroom_extra.airline_seat_legroom_normal.airline_seat_legroom_reduced.airline_seat_recline_extra.airline_seat_recline_normal.airline_stops.airlines.airplane_ticket.airplanemode_active.airplanemode_inactive.airplay.airport_shuttle.alarm.alarm_add.alarm_off.alarm_on.album.align_horizontal_center.align_horizontal_left.align_horizontal_right.align_vertical_bottom.align_vertical_center.align_vertical_top.all_inbox.all_inclusive.all_out.alt_route.alternate_email.analytics.anchor.android.animation.announcement.aod.apartment.api.app_blocking.app_registration.app_settings_alt.app_shortcut.approval.apps.apps_outage.architecture.archive.area_chart.arrow_back.arrow_back_ios.arrow_back_ios_new.arrow_circle_down.arrow_circle_left.arrow_circle_right.arrow_circle_up.arrow_downward.arrow_drop_down.arrow_drop_down_circle.arrow_drop_up.arrow_forward.arrow_forward_ios.arrow_left.arrow_outward.arrow_right.arrow_right_alt.arrow_upward.art_track.article.aspect_ratio.assessment.assignment.assignment_ind.assignment_late.assignment_return.assignment_returned.assignment_turned_in.assist_walker.assistant.assistant_direction.assistant_photo.assured_workload.atm.attach_email.attach_file.attach_money.attachment.attractions.attribution.audio_file.audiotrack.auto_awesome.auto_awesome_mosaic.auto_awesome_motion.auto_delete.auto_fix_high.auto_fix_normal.auto_fix_off.auto_graph.auto_mode.auto_stories.autofps_select.autorenew.av_timer.baby_changing_station.back_hand.backpack.backspace.backup.backup_table.badge.bakery_dining.balance.balcony.ballot.bar_chart.batch_prediction.bathroom.bathtub.battery_0_bar.battery_1_bar.battery_2_bar.battery_3_bar.battery_4_bar.battery_5_bar.battery_6_bar.battery_alert.battery_charging_full.battery_full.battery_saver.battery_std.battery_unknown.beach_access.bed.bedroom_baby.bedroom_child.bedroom_parent.bedtime.bedtime_off.beenhere.bento.bike_scooter.biotech.blender.blind.blinds.blinds_closed.block.bloodtype.bluetooth.bluetooth_audio.bluetooth_connected.bluetooth_disabled.bluetooth_drive.bluetooth_searching.blur_circular.blur_linear.blur_off.blur_on.bolt.book.book_online.bookmark.bookmark_add.bookmark_added.bookmark_border.bookmark_remove.bookmarks.border_all.border_bottom.border_clear.border_color.border_horizontal.border_inner.border_left.border_outer.border_right.border_style.border_top.border_vertical.boy.branding_watermark.breakfast_dining.brightness_1.brightness_2.brightness_3.brightness_4.brightness_5.brightness_6.brightness_7.brightness_auto.brightness_high.brightness_low.brightness_medium.broadcast_on_home.broadcast_on_personal.broken_image.browse_gallery.browser_not_supported.browser_updated.brunch_dining.brush.bubble_chart.bug_report.build.build_circle.bungalow.burst_mode.bus_alert.business.business_center.cabin.cable.cached.cake.calculate.calendar_month.calendar_today.calendar_view_day.calendar_view_month.calendar_view_week.call.call_end.call_made.call_merge.call_missed.call_missed_outgoing.call_received.call_split.call_to_action.camera.camera_alt.camera_enhance.camera_front.camera_indoor.camera_outdoor.camera_rear.camera_roll.cameraswitch.campaign.cancel.cancel_presentation.cancel_schedule_send.candlestick_chart.car_crash.car_rental.car_repair.card_giftcard.card_membership.card_travel.carpenter.cases.casino.cast.cast_connected.cast_for_education.castle.catching_pokemon.category.celebration.cell_tower.cell_wifi.center_focus_strong.center_focus_weak.chair.chair_alt.chalet.change_circle.change_history.charging_station.chat.chat_bubble.chat_bubble_outline.check.check_box.check_box_outline_blank.check_circle.check_circle_outline.checklist.checklist_rtl.checkroom.chevron_left.chevron_right.child_care.child_friendly.chrome_reader_mode.church.circle.circle_notifications.class.clean_hands.cleaning_services.clear.clear_all.close.close_fullscreen.closed_caption.closed_caption_disabled.closed_caption_off.cloud.cloud_circle.cloud_done.cloud_download.cloud_off.cloud_queue.cloud_sync.cloud_upload.co2.co_present.code.code_off.coffee.coffee_maker.collections.collections_bookmark.color_lens.colorize.comment.comment_bank.comments_disabled.commit.commute.compare.compare_arrows.compass_calibration.compost.compress.computer.confirmation_number.connect_without_contact.connected_tv.connecting_airports.construction.contact_emergency.contact_mail.contact_page.contact_phone.contact_support.contactless.contacts.content_copy.content_cut.content_paste.content_paste_go.content_paste_off.content_paste_search.contrast.control_camera.control_point.control_point_duplicate.cookie.copy_all.copyright.coronavirus.corporate_fare.cottage.countertops.create.create_new_folder.credit_card.credit_card_off.credit_score.crib.crisis_alert.crop.crop_16_9.crop_3_2.crop_5_4.crop_7_5.crop_din.crop_free.crop_landscape.crop_original.crop_portrait.crop_rotate.crop_square.cruelty_free.css.currency_bitcoin.currency_exchange.currency_franc.currency_lira.currency_pound.currency_ruble.currency_rupee.currency_yen.currency_yuan.curtains.curtains_closed.cyclone.dangerous.dark_mode.dashboard.dashboard_customize.data_array.data_exploration.data_object.data_saver_off.data_saver_on.data_thresholding.data_usage.dataset.dataset_linked.date_range.deblur.deck.dehaze.delete.delete_forever.delete_outline.delete_sweep.delivery_dining.density_large.density_medium.density_small.departure_board.description.deselect.design_services.desk.desktop_access_disabled.desktop_mac.desktop_windows.details.developer_board.developer_board_off.developer_mode.device_hub.device_thermostat.device_unknown.devices.devices_fold.devices_other.dialer_sip.dialpad.diamond.difference.dining.dinner_dining.directions.directions_bike.directions_boat.directions_boat_filled.directions_bus.directions_bus_filled.directions_car.directions_car_filled.directions_off.directions_railway.directions_railway_filled.directions_run.directions_subway.directions_subway_filled.directions_transit.directions_transit_filled.directions_walk.dirty_lens.disabled_by_default.disabled_visible.disc_full.discount.display_settings.diversity_1.diversity_2.diversity_3.dns.do_disturb.do_disturb_alt.do_disturb_off.do_disturb_on.do_not_disturb.do_not_disturb_alt.do_not_disturb_off.do_not_disturb_on.do_not_disturb_on_total_silence.do_not_step.do_not_touch.dock.document_scanner.domain.domain_add.domain_disabled.domain_verification.done.done_all.done_outline.donut_large.donut_small.door_back.door_front.door_sliding.doorbell.double_arrow.downhill_skiing.download.download_done.download_for_offline.downloading.drafts.drag_handle.drag_indicator.draw.drive_eta.drive_file_move.drive_file_move_rtl.drive_file_rename_outline.drive_folder_upload.dry.dry_cleaning.duo.dvr.dynamic_feed.dynamic_form.e_mobiledata.earbuds.earbuds_battery.east.edgesensor_high.edgesensor_low.edit.edit_attributes.edit_calendar.edit_location.edit_location_alt.edit_note.edit_notifications.edit_off.edit_road.egg.egg_alt.eject.elderly.elderly_woman.electric_bike.electric_bolt.electric_car.electric_meter.electric_moped.electric_rickshaw.electric_scooter.electrical_services.elevator.email.emergency.emergency_recording.emergency_share.emoji_emotions.emoji_events.emoji_food_beverage.emoji_nature.emoji_objects.emoji_people.emoji_symbols.emoji_transportation.energy_savings_leaf.engineering.enhanced_encryption.equalizer.error.error_outline.escalator.escalator_warning.euro.euro_symbol.ev_station.event.event_available.event_busy.event_note.event_repeat.event_seat.exit_to_app.expand.expand_circle_down.expand_less.expand_more.explicit.explore.explore_off.exposure.exposure_neg_1.exposure_neg_2.exposure_plus_1.exposure_plus_2.exposure_zero.extension.extension_off.face.face_2.face_3.face_4.face_5.face_6.face_retouching_natural.face_retouching_off.fact_check.factory.family_restroom.fast_forward.fast_rewind.fastfood.favorite.favorite_border.fax.featured_play_list.featured_video.feed.feedback.female.fence.festival.fiber_dvr.fiber_manual_record.fiber_new.fiber_pin.fiber_smart_record.file_copy.file_download.file_download_done.file_download_off.file_open.file_present.file_upload.filter.filter_1.filter_2.filter_3.filter_4.filter_5.filter_6.filter_7.filter_8.filter_9.filter_9_plus.filter_alt.filter_alt_off.filter_b_and_w.filter_center_focus.filter_drama.filter_frames.filter_hdr.filter_list.filter_list_off.filter_none.filter_tilt_shift.filter_vintage.find_in_page.find_replace.fingerprint.fire_extinguisher.fire_hydrant_alt.fire_truck.fireplace.first_page.fit_screen.fitbit.fitness_center.flag.flag_circle.flaky.flare.flash_auto.flash_off.flash_on.flashlight_off.flashlight_on.flatware.flight.flight_class.flight_land.flight_takeoff.flip.flip_camera_android.flip_camera_ios.flip_to_back.flip_to_front.flood.fluorescent.flutter_dash.fmd_bad.fmd_good.folder.folder_copy.folder_delete.folder_off.folder_open.folder_shared.folder_special.folder_zip.follow_the_signs.font_download.font_download_off.food_bank.forest.fork_left.fork_right.format_align_center.format_align_justify.format_align_left.format_align_right.format_bold.format_clear.format_color_fill.format_color_reset.format_color_text.format_indent_decrease.format_indent_increase.format_italic.format_line_spacing.format_list_bulleted.format_list_numbered.format_list_numbered_rtl.format_overline.format_paint.format_quote.format_shapes.format_size.format_strikethrough.format_textdirection_l_to_r.format_textdirection_r_to_l.format_underlined.fort.forum.forward.forward_10.forward_30.forward_5.forward_to_inbox.foundation.free_breakfast.free_cancellation.front_hand.fullscreen.fullscreen_exit.functions.g_mobiledata.g_translate.gamepad.games.garage.gas_meter.gavel.generating_tokens.gesture.get_app.gif.gif_box.girl.gite.golf_course.gpp_bad.gpp_good.gpp_maybe.gps_fixed.gps_not_fixed.gps_off.grade.gradient.grading.grain.graphic_eq.grass.grid_3x3.grid_4x4.grid_goldenratio.grid_off.grid_on.grid_view.group.group_add.group_off.group_remove.group_work.groups.groups_2.groups_3.h_mobiledata.h_plus_mobiledata.hail.handshake.handyman.hardware.hd.hdr_auto.hdr_auto_select.hdr_enhanced_select.hdr_off.hdr_off_select.hdr_on.hdr_on_select.hdr_plus.hdr_strong.hdr_weak.headphones.headphones_battery.headset.headset_mic.headset_off.healing.health_and_safety.hearing.hearing_disabled.heart_broken.heat_pump.height.help.help_center.help_outline.hevc.hexagon.hide_image.hide_source.high_quality.highlight.highlight_alt.highlight_off.hiking.history.history_edu.history_toggle_off.hive.hls.hls_off.holiday_village.home.home_max.home_mini.home_repair_service.home_work.horizontal_distribute.horizontal_rule.horizontal_split.hot_tub.hotel.hotel_class.hourglass_bottom.hourglass_disabled.hourglass_empty.hourglass_full.hourglass_top.house.house_siding.houseboat.how_to_reg.how_to_vote.html.http.https.hub.hvac.ice_skating.icecream.image.image_aspect_ratio.image_not_supported.image_search.imagesearch_roller.import_contacts.import_export.important_devices.inbox.incomplete_circle.indeterminate_check_box.info.input.insert_chart.insert_chart_outlined.insert_comment.insert_drive_file.insert_emoticon.insert_invitation.insert_link.insert_page_break.insert_photo.insights.install_desktop.install_mobile.integration_instructions.interests.interpreter_mode.inventory.inventory_2.invert_colors.invert_colors_off.ios_share.iron.iso.javascript.join_full.join_inner.join_left.join_right.kayaking.kebab_dining.key.key_off.keyboard.keyboard_alt.keyboard_arrow_down.keyboard_arrow_left.keyboard_arrow_right.keyboard_arrow_up.keyboard_backspace.keyboard_capslock.keyboard_command_key.keyboard_control_key.keyboard_double_arrow_down.keyboard_double_arrow_left.keyboard_double_arrow_right.keyboard_double_arrow_up.keyboard_hide.keyboard_option_key.keyboard_return.keyboard_tab.keyboard_voice.king_bed.kitchen.kitesurfing.label.label_important.label_off.lan.landscape.landslide.language.laptop.laptop_chromebook.laptop_mac.laptop_windows.last_page.launch.layers.layers_clear.leaderboard.leak_add.leak_remove.legend_toggle.lens.lens_blur.library_add.library_add_check.library_books.library_music.light.light_mode.lightbulb.lightbulb_circle.line_axis.line_style.line_weight.linear_scale.link.link_off.linked_camera.liquor.list.list_alt.live_help.live_tv.living.local_activity.local_airport.local_atm.local_bar.local_cafe.local_car_wash.local_convenience_store.local_dining.local_drink.local_fire_department.local_florist.local_gas_station.local_grocery_store.local_hospital.local_hotel.local_laundry_service.local_library.local_mall.local_movies.local_offer.local_parking.local_pharmacy.local_phone.local_pizza.local_play.local_police.local_post_office.local_printshop.local_see.local_shipping.local_taxi.location_city.location_disabled.location_off.location_on.location_searching.lock.lock_clock.lock_open.lock_person.lock_reset.login.logo_dev.logout.looks.looks_3.looks_4.looks_5.looks_6.looks_one.looks_two.loop.loupe.low_priority.loyalty.lte_mobiledata.lte_plus_mobiledata.luggage.lunch_dining.lyrics.macro_off.mail.mail_lock.mail_outline.male.man.man_2.man_3.man_4.manage_accounts.manage_history.manage_search.map.maps_home_work.maps_ugc.margin.mark_as_unread.mark_chat_read.mark_chat_unread.mark_email_read.mark_email_unread.mark_unread_chat_alt.markunread.markunread_mailbox.masks.maximize.media_bluetooth_off.media_bluetooth_on.mediation.medical_information.medical_services.medication.medication_liquid.meeting_room.memory.menu.menu_book.menu_open.merge.merge_type.message.mic.mic_external_off.mic_external_on.mic_none.mic_off.microwave.military_tech.minimize.minor_crash.miscellaneous_services.missed_video_call.mms.mobile_friendly.mobile_off.mobile_screen_share.mobiledata_off.mode.mode_comment.mode_edit.mode_edit_outline.mode_fan_off.mode_night.mode_of_travel.mode_standby.model_training.monetization_on.money.money_off.money_off_csred.monitor.monitor_heart.monitor_weight.monochrome_photos.mood.mood_bad.moped.more.more_horiz.more_time.more_vert.mosque.motion_photos_auto.motion_photos_off.motion_photos_on.motion_photos_pause.motion_photos_paused.mouse.move_down.move_to_inbox.move_up.movie.movie_creation.movie_filter.moving.mp.multiline_chart.multiple_stop.museum.music_note.music_off.music_video.my_location.nat.nature.nature_people.navigate_before.navigate_next.navigation.near_me.near_me_disabled.nearby_error.nearby_off.nest_cam_wired_stand.network_cell.network_check.network_locked.network_ping.network_wifi.network_wifi_1_bar.network_wifi_2_bar.network_wifi_3_bar.new_label.new_releases.newspaper.next_plan.next_week.nfc.night_shelter.nightlife.nightlight.nightlight_round.nights_stay.no_accounts.no_adult_content.no_backpack.no_cell.no_crash.no_drinks.no_encryption.no_encryption_gmailerrorred.no_flash.no_food.no_luggage.no_meals.no_meeting_room.no_photography.no_sim.no_stroller.no_transfer.noise_aware.noise_control_off.nordic_walking.north.north_east.north_west.not_accessible.not_interested.not_listed_location.not_started.note.note_add.note_alt.notes.notification_add.notification_important.notifications.notifications_active.notifications_none.notifications_off.notifications_paused.numbers.offline_bolt.offline_pin.offline_share.oil_barrel.on_device_training.ondemand_video.online_prediction.opacity.open_in_browser.open_in_full.open_in_new.open_in_new_off.open_with.other_houses.outbound.outbox.outdoor_grill.outlet.outlined_flag.output.padding.pages.pageview.paid.palette.pan_tool.pan_tool_alt.panorama.panorama_fish_eye.panorama_horizontal.panorama_horizontal_select.panorama_photosphere.panorama_photosphere_select.panorama_vertical.panorama_vertical_select.panorama_wide_angle.panorama_wide_angle_select.paragliding.park.party_mode.password.pattern.pause.pause_circle.pause_circle_filled.pause_circle_outline.pause_presentation.payment.payments.pedal_bike.pending.pending_actions.pentagon.people.people_alt.people_outline.percent.perm_camera_mic.perm_contact_calendar.perm_data_setting.perm_device_information.perm_identity.perm_media.perm_phone_msg.perm_scan_wifi.person.person_2.person_3.person_4.person_add.person_add_alt.person_add_alt_1.person_add_disabled.person_off.person_outline.person_pin.person_pin_circle.person_remove.person_remove_alt_1.person_search.personal_injury.personal_video.pest_control.pest_control_rodent.pets.phishing.phone.phone_android.phone_bluetooth_speaker.phone_callback.phone_disabled.phone_enabled.phone_forwarded.phone_iphone.phone_locked.phone_missed.phone_paused.phonelink.phonelink_erase.phonelink_lock.phonelink_off.phonelink_ring.phonelink_setup.photo.photo_album.photo_camera.photo_camera_back.photo_camera_front.photo_filter.photo_library.photo_size_select_actual.photo_size_select_large.photo_size_select_small.php.piano.piano_off.picture_as_pdf.picture_in_picture.picture_in_picture_alt.pie_chart.pie_chart_outline.pin.pin_drop.pin_end.pin_invoke.pinch.pivot_table_chart.pix.place.plagiarism.play_arrow.play_circle.play_circle_filled.play_circle_outline.play_disabled.play_for_work.play_lesson.playlist_add.playlist_add_check.playlist_add_check_circle.playlist_add_circle.playlist_play.playlist_remove.plumbing.plus_one.podcasts.point_of_sale.policy.poll.polyline.polymer.pool.portable_wifi_off.portrait.post_add.power.power_input.power_off.power_settings_new.precision_manufacturing.pregnant_woman.present_to_all.preview.price_change.price_check.print.print_disabled.priority_high.privacy_tip.private_connectivity.production_quantity_limits.propane.propane_tank.psychology.psychology_alt.public.public_off.publish.published_with_changes.punch_clock.push_pin.qr_code.qr_code_2.qr_code_scanner.query_builder.query_stats.question_answer.question_mark.queue.queue_music.queue_play_next.quickreply.quiz.r_mobiledata.radar.radio.radio_button_checked.radio_button_unchecked.railway_alert.ramen_dining.ramp_left.ramp_right.rate_review.raw_off.raw_on.read_more.real_estate_agent.receipt.receipt_long.recent_actors.recommend.record_voice_over.rectangle.recycling.redeem.redo.reduce_capacity.refresh.remember_me.remove.remove_circle.remove_circle_outline.remove_done.remove_from_queue.remove_moderator.remove_red_eye.remove_road.remove_shopping_cart.reorder.repartition.repeat.repeat_on.repeat_one.repeat_one_on.replay.replay_10.replay_30.replay_5.replay_circle_filled.reply.reply_all.report.report_gmailerrorred.report_off.report_problem.request_page.request_quote.reset_tv.restart_alt.restaurant.restaurant_menu.restore.restore_from_trash.restore_page.reviews.rice_bowl.ring_volume.rocket.rocket_launch.roller_shades.roller_shades_closed.roller_skating.roofing.room.room_preferences.room_service.rotate_90_degrees_ccw.rotate_90_degrees_cw.rotate_left.rotate_right.roundabout_left.roundabout_right.rounded_corner.route.router.rowing.rss_feed.rsvp.rtt.rule.rule_folder.run_circle.running_with_errors.rv_hookup.safety_check.safety_divider.sailing.sanitizer.satellite.satellite_alt.save.save_alt.save_as.saved_search.savings.scale.scanner.scatter_plot.schedule.schedule_send.schema.school.science.score.scoreboard.screen_lock_landscape.screen_lock_portrait.screen_lock_rotation.screen_rotation.screen_rotation_alt.screen_search_desktop.screen_share.screenshot.screenshot_monitor.scuba_diving.sd.sd_card.sd_card_alert.sd_storage.search.search_off.security.security_update.security_update_good.security_update_warning.segment.select_all.self_improvement.sell.send.send_and_archive.send_time_extension.send_to_mobile.sensor_door.sensor_occupied.sensor_window.sensors.sensors_off.sentiment_dissatisfied.sentiment_neutral.sentiment_satisfied.sentiment_satisfied_alt.sentiment_very_dissatisfied.sentiment_very_satisfied.set_meal.settings.settings_accessibility.settings_applications.settings_backup_restore.settings_bluetooth.settings_brightness.settings_cell.settings_ethernet.settings_input_antenna.settings_input_component.settings_input_composite.settings_input_hdmi.settings_input_svideo.settings_overscan.settings_phone.settings_power.settings_remote.settings_suggest.settings_system_daydream.settings_voice.severe_cold.shape_line.share.share_location.shield.shield_moon.shop.shop_2.shop_two.shopping_bag.shopping_basket.shopping_cart.shopping_cart_checkout.short_text.shortcut.show_chart.shower.shuffle.shuffle_on.shutter_speed.sick.sign_language.signal_cellular_0_bar.signal_cellular_4_bar.signal_cellular_alt.signal_cellular_alt_1_bar.signal_cellular_alt_2_bar.signal_cellular_connected_no_internet_0_bar.signal_cellular_connected_no_internet_4_bar.signal_cellular_no_sim.signal_cellular_nodata.signal_cellular_null.signal_cellular_off.signal_wifi_0_bar.signal_wifi_4_bar.signal_wifi_4_bar_lock.signal_wifi_bad.signal_wifi_connected_no_internet_4.signal_wifi_off.signal_wifi_statusbar_4_bar.signal_wifi_statusbar_connected_no_internet_4.signal_wifi_statusbar_null.signpost.sim_card.sim_card_alert.sim_card_download.single_bed.sip.skateboarding.skip_next.skip_previous.sledding.slideshow.slow_motion_video.smart_button.smart_display.smart_screen.smart_toy.smartphone.smoke_free.smoking_rooms.sms.sms_failed.snippet_folder.snooze.snowboarding.snowmobile.snowshoeing.soap.social_distance.solar_power.sort.sort_by_alpha.sos.soup_kitchen.source.south.south_america.south_east.south_west.spa.space_bar.space_dashboard.spatial_audio.spatial_audio_off.spatial_tracking.speaker.speaker_group.speaker_notes.speaker_notes_off.speaker_phone.speed.spellcheck.splitscreen.spoke.sports.sports_bar.sports_baseball.sports_basketball.sports_cricket.sports_esports.sports_football.sports_golf.sports_gymnastics.sports_handball.sports_hockey.sports_kabaddi.sports_martial_arts.sports_mma.sports_motorsports.sports_rugby.sports_score.sports_soccer.sports_tennis.sports_volleyball.square.square_foot.ssid_chart.stacked_bar_chart.stacked_line_chart.stadium.stairs.star.star_border.star_border_purple500.star_half.star_outline.star_purple500.star_rate.stars.start.stay_current_landscape.stay_current_portrait.stay_primary_landscape.stay_primary_portrait.sticky_note_2.stop.stop_circle.stop_screen_share.storage.store.store_mall_directory.storefront.storm.straight.straighten.stream.streetview.strikethrough_s.stroller.style.subdirectory_arrow_left.subdirectory_arrow_right.subject.subscript.subscriptions.subtitles.subtitles_off.subway.summarize.superscript.supervised_user_circle.supervisor_account.support.support_agent.surfing.surround_sound.swap_calls.swap_horiz.swap_horizontal_circle.swap_vert.swap_vertical_circle.swipe.swipe_down.swipe_down_alt.swipe_left.swipe_left_alt.swipe_right.swipe_right_alt.swipe_up.swipe_up_alt.swipe_vertical.switch_access_shortcut.switch_access_shortcut_add.switch_account.switch_camera.switch_left.switch_right.switch_video.synagogue.sync.sync_alt.sync_disabled.sync_lock.sync_problem.system_security_update.system_security_update_good.system_security_update_warning.system_update.system_update_alt.tab.tab_unselected.table_bar.table_chart.table_restaurant.table_rows.table_view.tablet.tablet_android.tablet_mac.tag.tag_faces.takeout_dining.tap_and_play.tapas.task.task_alt.taxi_alert.temple_buddhist.temple_hindu.terminal.terrain.text_decrease.text_fields.text_format.text_increase.text_rotate_up.text_rotate_vertical.text_rotation_angledown.text_rotation_angleup.text_rotation_down.text_rotation_none.text_snippet.textsms.texture.theater_comedy.theaters.thermostat.thermostat_auto.thumb_down.thumb_down_alt.thumb_down_off_alt.thumb_up.thumb_up_alt.thumb_up_off_alt.thumbs_up_down.thunderstorm.time_to_leave.timelapse.timeline.timer.timer_10.timer_10_select.timer_3.timer_3_select.timer_off.tips_and_updates.tire_repair.title.toc.today.toggle_off.toggle_on.token.toll.tonality.topic.tornado.touch_app.tour.toys.track_changes.traffic.train.tram.transcribe.transfer_within_a_station.transform.transgender.transit_enterexit.translate.travel_explore.trending_down.trending_flat.trending_up.trip_origin.troubleshoot.try.tsunami.tty.tune.tungsten.turn_left.turn_right.turn_sharp_left.turn_sharp_right.turn_slight_left.turn_slight_right.turned_in.turned_in_not.tv.tv_off.two_wheeler.type_specimen.u_turn_left.u_turn_right.umbrella.unarchive.undo.unfold_less.unfold_less_double.unfold_more.unfold_more_double.unpublished.unsubscribe.upcoming.update.update_disabled.upgrade.upload.upload_file.usb.usb_off.vaccines.vape_free.vaping_rooms.verified.verified_user.vertical_align_bottom.vertical_align_center.vertical_align_top.vertical_distribute.vertical_shades.vertical_shades_closed.vertical_split.vibration.video_call.video_camera_back.video_camera_front.video_chat.video_file.video_label.video_library.video_settings.video_stable.videocam.videocam_off.videogame_asset.videogame_asset_off.view_agenda.view_array.view_carousel.view_column.view_comfy.view_comfy_alt.view_compact.view_compact_alt.view_cozy.view_day.view_headline.view_in_ar.view_kanban.view_list.view_module.view_quilt.view_sidebar.view_stream.view_timeline.view_week.vignette.villa.visibility.visibility_off.voice_chat.voice_over_off.voicemail.volcano.volume_down.volume_mute.volume_off.volume_up.volunteer_activism.vpn_key.vpn_key_off.vpn_lock.vrpano.wallet.wallpaper.warehouse.warning.warning_amber.wash.watch.watch_later.watch_off.water.water_damage.water_drop.waterfall_chart.waves.waving_hand.wb_auto.wb_cloudy.wb_incandescent.wb_iridescent.wb_shade.wb_sunny.wb_twilight.wc.web.web_asset.web_asset_off.web_stories.webhook.weekend.west.whatshot.wheelchair_pickup.where_to_vote.widgets.width_full.width_normal.width_wide.wifi.wifi_1_bar.wifi_2_bar.wifi_calling.wifi_calling_3.wifi_channel.wifi_find.wifi_lock.wifi_off.wifi_password.wifi_protected_setup.wifi_tethering.wifi_tethering_error.wifi_tethering_off.wind_power.window.wine_bar.woman.woman_2.work.work_history.work_off.work_outline.workspace_premium.workspaces.wrap_text.wrong_location.wysiwyg.yard.youtube_searched_for.zoom_in.zoom_in_map.zoom_out.zoom_out_map".split(".");
// node_modules/.pnpm/fuse.js@7.5.0/node_modules/fuse.js/dist/fuse.mjs
function Ry(e) {
	return Array.isArray ? Array.isArray(e) : Jy(e) === "[object Array]";
}
function zy(e) {
	if (typeof e == "string") return e;
	if (typeof e == "bigint") return e.toString();
	let t = e + "";
	return t == "0" && 1 / e == -Infinity ? "-0" : t;
}
function By(e) {
	return e == null ? "" : zy(e);
}
function Vy(e) {
	return typeof e == "string";
}
function Hy(e) {
	return typeof e == "number";
}
function Uy(e) {
	return e === !0 || e === !1 || Gy(e) && Jy(e) == "[object Boolean]";
}
function Wy(e) {
	return typeof e == "object";
}
function Gy(e) {
	return Wy(e) && e !== null;
}
function Ky(e) {
	return e != null;
}
function qy(e) {
	return !e.trim().length;
}
function Jy(e) {
	return e == null ? e === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(e);
}
var Yy = "Incorrect 'index' type", Xy = "Invalid doc index: must be a non-negative integer within the bounds of the docs array", Zy = (e) => `Invalid value for key ${e}`, Qy = (e) => `Pattern length exceeds max of ${e}.`, $y = (e) => `Missing ${e} property in key`, eb = (e) => `Property 'weight' in key '${e}' must be a positive integer`, tb = "Fuse.match does not support useTokenSearch: token search requires corpus-level statistics (df, fieldCount) that a one-off string comparison does not have. Use new Fuse(...).search(...) instead.", nb = Object.prototype.hasOwnProperty, rb = class {
	constructor(e) {
		this._keys = [], this._keyMap = {};
		let t = 0;
		e.forEach((e) => {
			let n = ib(e);
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
function ib(e) {
	let t = null, n = null, r = null, i = 1, a = null;
	if (Vy(e) || Ry(e)) r = e, t = ab(e), n = ob(e);
	else {
		if (!nb.call(e, "name")) throw Error($y("name"));
		let o = e.name;
		if (r = o, nb.call(e, "weight") && e.weight !== void 0 && (i = e.weight, i <= 0)) throw Error(eb(ob(o)));
		t = ab(o), n = ob(o), a = e.getFn ?? null;
	}
	return {
		path: t,
		id: n,
		weight: i,
		src: r,
		getFn: a
	};
}
function ab(e) {
	return Ry(e) ? e : e.split(".");
}
function ob(e) {
	return Ry(e) ? e.join(".") : e;
}
function sb(e, t) {
	let n = [], r = !1, i = (e, t, a, o) => {
		if (Ky(e)) {
			if (!t[a]) n.push(o === void 0 ? e : {
				v: e,
				i: o
			});
			else {
				let s = e[t[a]];
				if (!Ky(s)) return;
				if (a === t.length - 1 && (Vy(s) || Hy(s) || Uy(s) || typeof s == "bigint")) n.push(o === void 0 ? By(s) : {
					v: By(s),
					i: o
				});
				else if (Ry(s)) {
					r = !0;
					for (let e = 0, n = s.length; e < n; e += 1) i(s[e], t, a + 1, e);
				} else t.length && i(s, t, a + 1, o);
			}
		}
	};
	return i(e, Vy(t) ? t.split(".") : t, 0), r ? n : n[0];
}
var cb = {
	includeMatches: !1,
	findAllMatches: !1,
	minMatchCharLength: 1
}, lb = {
	isCaseSensitive: !1,
	ignoreDiacritics: !1,
	includeScore: !1,
	keys: [],
	shouldSort: !0,
	sortFn: (e, t) => e.score === t.score ? e.idx < t.idx ? -1 : 1 : e.score < t.score ? -1 : 1
}, ub = {
	location: 0,
	threshold: .6,
	distance: 100
}, db = {
	useExtendedSearch: !1,
	useTokenSearch: !1,
	tokenize: void 0,
	tokenMatch: "any",
	getFn: sb,
	ignoreLocation: !1,
	ignoreFieldNorm: !1,
	fieldNormWeight: 1
}, K = Object.freeze({
	...lb,
	...cb,
	...ub,
	...db
});
function fb(e) {
	return e >= 9 && e <= 13 || e === 32 || e === 160;
}
function pb(e = 1, t = 3) {
	let n = /* @__PURE__ */ new Map(), r = 10 ** t;
	return {
		get(t) {
			let i = 0, a = !1;
			for (let e = 0; e < t.length; e++) fb(t.charCodeAt(e)) ? a = !1 : a ||= (i++, !0);
			if (i === 0 && (i = 1), n.has(i)) return n.get(i);
			let o = Math.round(r / i ** (.5 * e)) / r;
			return n.set(i, o), o;
		},
		clear() {
			n.clear();
		}
	};
}
var mb = class {
	constructor({ getFn: e = K.getFn, fieldNormWeight: t = K.fieldNormWeight } = {}) {
		this.norm = pb(t, 3), this.getFn = e, this.isCreated = !1, this.docs = [], this.keys = [], this._keysMap = {}, this.setIndexRecords();
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
		if (this.isCreated || !this.docs.length) return;
		this.isCreated = !0;
		let e = this.docs.length;
		this.records = Array(e);
		let t = 0;
		if (Vy(this.docs[0])) for (let n = 0; n < e; n++) {
			let e = this._createStringRecord(this.docs[n], n);
			e && (this.records[t++] = e);
		}
		else for (let n = 0; n < e; n++) this.records[t++] = this._createObjectRecord(this.docs[n], n);
		this.records.length = t, this.norm.clear();
	}
	add(e, t) {
		if (!Number.isInteger(t) || t < 0) throw Error(Xy);
		if (Vy(e)) {
			let n = this._createStringRecord(e, t);
			return n && this.records.push(n), n;
		}
		let n = this._createObjectRecord(e, t);
		return this.records.push(n), n;
	}
	removeAt(e) {
		if (!Number.isInteger(e) || e < 0) throw Error(Xy);
		for (let t = 0, n = this.records.length; t < n; t += 1) if (this.records[t].i === e) {
			this.records.splice(t, 1);
			break;
		}
		for (let t = 0, n = this.records.length; t < n; t += 1) this.records[t].i > e && --this.records[t].i;
	}
	removeAll(e) {
		let t = /* @__PURE__ */ new Set();
		for (let n of e) Number.isInteger(n) && n >= 0 && t.add(n);
		if (t.size === 0) return;
		this.records = this.records.filter((e) => !t.has(e.i));
		let n = Array.from(t).sort((e, t) => e - t);
		for (let e of this.records) {
			let t = 0, r = n.length;
			for (; t < r;) {
				let i = t + r >>> 1;
				n[i] < e.i ? t = i + 1 : r = i;
			}
			e.i -= t;
		}
	}
	getValueForItemAtKeyId(e, t) {
		return e[this._keysMap[t]];
	}
	size() {
		return this.records.length;
	}
	_createStringRecord(e, t) {
		return !Ky(e) || qy(e) ? null : {
			v: e,
			i: t,
			n: this.norm.get(e)
		};
	}
	_createObjectRecord(e, t) {
		let n = {
			i: t,
			$: {}
		};
		for (let t = 0, r = this.keys.length; t < r; t++) {
			let r = this.keys[t], i = r.getFn ? r.getFn(e) : this.getFn(e, r.path);
			if (Ky(i)) {
				if (Ry(i)) {
					let e = [];
					for (let t = 0, n = i.length; t < n; t += 1) {
						let n = i[t];
						if (Ky(n)) {
							if (Vy(n)) {
								if (!qy(n)) {
									let r = {
										v: n,
										i: t,
										n: this.norm.get(n)
									};
									e.push(r);
								}
							} else if (Ky(n.v)) {
								let t = Vy(n.v) ? n.v : By(n.v);
								if (!qy(t)) {
									let r = {
										v: t,
										i: n.i,
										n: this.norm.get(t)
									};
									e.push(r);
								}
							}
						}
					}
					n.$[t] = e;
				} else if (Vy(i) && !qy(i)) {
					let e = {
						v: i,
						n: this.norm.get(i)
					};
					n.$[t] = e;
				}
			}
		}
		return n;
	}
	toJSON() {
		return {
			keys: this.keys.map(({ getFn: e, ...t }) => t),
			records: this.records
		};
	}
};
function hb(e, t, { getFn: n = K.getFn, fieldNormWeight: r = K.fieldNormWeight } = {}) {
	let i = new mb({
		getFn: n,
		fieldNormWeight: r
	});
	return i.setKeys(e.map(ib)), i.setSources(t), i.create(), i;
}
function gb(e, { getFn: t = K.getFn, fieldNormWeight: n = K.fieldNormWeight } = {}) {
	let { keys: r, records: i } = e, a = new mb({
		getFn: t,
		fieldNormWeight: n
	});
	return a.setKeys(r), a.setIndexRecords(i), a;
}
function _b(e = [], t = K.minMatchCharLength) {
	let n = [], r = -1, i = -1, a = 0;
	for (let o = e.length; a < o; a += 1) {
		let o = e[a];
		o && r === -1 ? r = a : !o && r !== -1 && (i = a - 1, i - r + 1 >= t && n.push([r, i]), r = -1);
	}
	return e[a - 1] && a - r >= t && n.push([r, a - 1]), n;
}
function vb(e, t, n, { location: r = K.location, distance: i = K.distance, threshold: a = K.threshold, findAllMatches: o = K.findAllMatches, minMatchCharLength: s = K.minMatchCharLength, includeMatches: c = K.includeMatches, ignoreLocation: l = K.ignoreLocation } = {}) {
	if (t.length > 32) throw Error(Qy(32));
	let u = t.length, d = e.length, f = Math.max(0, Math.min(r, d)), p = a, m = f, h = (e, t) => {
		let n = e / u;
		if (l) return n;
		let r = Math.abs(f - t);
		return i ? n + r / i : r ? 1 : n;
	}, g = s > 1 || c, _ = g ? Array(d) : [], v;
	for (; (v = e.indexOf(t, m)) > -1;) {
		let e = h(0, v);
		if (p = Math.min(e, p), m = v + u, g) {
			let e = 0;
			for (; e < u;) _[v + e] = 1, e += 1;
		}
	}
	m = -1;
	let y = [], b = 1, x = 0, S = u + d, C = 1 << u - 1;
	for (let t = 0; t < u; t += 1) {
		let r = 0, i = S;
		for (; r < i;) h(t, f + i) <= p ? r = i : S = i, i = Math.floor((S - r) / 2 + r);
		S = i;
		let a = Math.max(1, f - i + 1), s = o ? d : Math.min(f + i, d) + u, c = Array(s + 2);
		c[s + 1] = (1 << t) - 1;
		for (let r = s; r >= a; --r) {
			let i = r - 1, o = n[e[i]];
			if (c[r] = (c[r + 1] << 1 | 1) & o, t && (c[r] |= (y[r + 1] | y[r]) << 1 | 1 | y[r + 1]), c[r] & C && (b = h(t, i), b <= p)) {
				if (p = b, m = i, x = t, m <= f) break;
				a = Math.max(1, 2 * f - m);
			}
		}
		if (h(t + 1, f) > p) break;
		y = c;
	}
	if (g && m >= 0) {
		let t = Math.min(d - 1, m + u - 1 + x);
		for (let r = m; r <= t; r += 1) n[e[r]] && (_[r] = 1);
	}
	let w = {
		isMatch: m >= 0,
		score: Math.max(.001, b)
	};
	if (g) {
		let e = _b(_, s);
		e.length ? c && (w.indices = e) : w.isMatch = !1;
	}
	return w;
}
function yb(e) {
	let t = {};
	for (let n = 0, r = e.length; n < r; n += 1) {
		let i = e.charAt(n);
		t[i] = (t[i] || 0) | 1 << r - n - 1;
	}
	return t;
}
function bb(e) {
	if (e.length <= 1) return e;
	e.sort((e, t) => e[0] - t[0] || e[1] - t[1]);
	let t = [e[0]];
	for (let n = 1, r = e.length; n < r; n += 1) {
		let r = t[t.length - 1], i = e[n];
		i[0] <= r[1] + 1 ? r[1] = Math.max(r[1], i[1]) : t.push(i);
	}
	return t;
}
var xb = {
	ł: "l",
	Ł: "L",
	đ: "d",
	Đ: "D",
	ø: "o",
	Ø: "O",
	ħ: "h",
	Ħ: "H",
	ŧ: "t",
	Ŧ: "T",
	ı: "i",
	ß: "ss"
}, Sb = RegExp("[" + Object.keys(xb).join("") + "]", "g"), Cb = typeof String.prototype.normalize == "function" ? (e) => e.normalize("NFD").replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g, "").replace(Sb, (e) => xb[e]) : (e) => e, wb = class {
	constructor(e, { location: t = K.location, threshold: n = K.threshold, distance: r = K.distance, includeMatches: i = K.includeMatches, findAllMatches: a = K.findAllMatches, minMatchCharLength: o = K.minMatchCharLength, isCaseSensitive: s = K.isCaseSensitive, ignoreDiacritics: c = K.ignoreDiacritics, ignoreLocation: l = K.ignoreLocation } = {}) {
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
		}, e = s ? e : e.toLowerCase(), e = c ? Cb(e) : e, this.pattern = e, this.chunks = [], !this.pattern.length) return;
		let u = (e, t) => {
			this.chunks.push({
				pattern: e,
				alphabet: yb(e),
				startIndex: t
			});
		}, d = this.pattern.length;
		if (d > 32) {
			let e = 0, t = d % 32, n = d - t;
			for (; e < n;) u(this.pattern.substr(e, 32), e), e += 32;
			if (t) {
				let e = d - 32;
				u(this.pattern.substr(e), e);
			}
		} else u(this.pattern, 0);
	}
	searchIn(e) {
		let { isCaseSensitive: t, ignoreDiacritics: n, includeMatches: r } = this.options;
		if (e = t ? e : e.toLowerCase(), e = n ? Cb(e) : e, this.pattern === e) {
			if (e.length < this.options.minMatchCharLength) return {
				isMatch: !1,
				score: 1
			};
			let t = {
				isMatch: !0,
				score: 0
			};
			return r && (t.indices = [[0, e.length - 1]]), t;
		}
		let { location: i, distance: a, threshold: o, findAllMatches: s, minMatchCharLength: c, ignoreLocation: l } = this.options, u = [], d = 0, f = !1;
		this.chunks.forEach(({ pattern: t, alphabet: n, startIndex: p }) => {
			let { isMatch: m, score: h, indices: g } = vb(e, t, n, {
				location: i + p,
				distance: a,
				threshold: o,
				findAllMatches: s,
				minMatchCharLength: c,
				includeMatches: r,
				ignoreLocation: l
			});
			m && (f = !0), d += h, m && g && u.push(...g);
		});
		let p = {
			isMatch: f,
			score: f ? d / this.chunks.length : 1
		};
		return f && r && (p.indices = bb(u)), p;
	}
}, Tb = /* @__PURE__ */ new Set(["fuzzy", "include"]);
function Eb(e) {
	return e.startsWith("inverse");
}
var Db = [
	{
		type: "exact",
		multiRegex: /^="(.*)"$/,
		singleRegex: /^=(.*)$/,
		create: (e) => ({
			type: "exact",
			search(t) {
				let n = t === e;
				return {
					isMatch: n,
					score: +!n,
					indices: [0, e.length - 1]
				};
			}
		})
	},
	{
		type: "include",
		multiRegex: /^'"(.*)"$/,
		singleRegex: /^'(.*)$/,
		create: (e) => ({
			type: "include",
			search(t) {
				let n = 0, r, i = [], a = e.length;
				for (; (r = t.indexOf(e, n)) > -1;) n = r + a, i.push([r, n - 1]);
				let o = !!i.length;
				return {
					isMatch: o,
					score: +!o,
					indices: i
				};
			}
		})
	},
	{
		type: "prefix-exact",
		multiRegex: /^\^"(.*)"$/,
		singleRegex: /^\^(.*)$/,
		create: (e) => ({
			type: "prefix-exact",
			search(t) {
				let n = t.startsWith(e);
				return {
					isMatch: n,
					score: +!n,
					indices: [0, e.length - 1]
				};
			}
		})
	},
	{
		type: "inverse-prefix-exact",
		multiRegex: /^!\^"(.*)"$/,
		singleRegex: /^!\^(.*)$/,
		create: (e) => ({
			type: "inverse-prefix-exact",
			search(t) {
				let n = !t.startsWith(e);
				return {
					isMatch: n,
					score: +!n,
					indices: [0, t.length - 1]
				};
			}
		})
	},
	{
		type: "inverse-suffix-exact",
		multiRegex: /^!"(.*)"\$$/,
		singleRegex: /^!(.*)\$$/,
		create: (e) => ({
			type: "inverse-suffix-exact",
			search(t) {
				let n = !t.endsWith(e);
				return {
					isMatch: n,
					score: +!n,
					indices: [0, t.length - 1]
				};
			}
		})
	},
	{
		type: "suffix-exact",
		multiRegex: /^"(.*)"\$$/,
		singleRegex: /^(.*)\$$/,
		create: (e) => ({
			type: "suffix-exact",
			search(t) {
				let n = t.endsWith(e);
				return {
					isMatch: n,
					score: +!n,
					indices: [t.length - e.length, t.length - 1]
				};
			}
		})
	},
	{
		type: "inverse-exact",
		multiRegex: /^!"(.*)"$/,
		singleRegex: /^!(.*)$/,
		create: (e) => ({
			type: "inverse-exact",
			search(t) {
				let n = t.indexOf(e) === -1;
				return {
					isMatch: n,
					score: +!n,
					indices: [0, t.length - 1]
				};
			}
		})
	},
	{
		type: "fuzzy",
		multiRegex: /^"(.*)"$/,
		singleRegex: /^(.*)$/,
		create: (e, t = {}) => {
			let n = new wb(e, {
				location: t.location ?? K.location,
				threshold: t.threshold ?? K.threshold,
				distance: t.distance ?? K.distance,
				includeMatches: t.includeMatches ?? K.includeMatches,
				findAllMatches: t.findAllMatches ?? K.findAllMatches,
				minMatchCharLength: t.minMatchCharLength ?? K.minMatchCharLength,
				isCaseSensitive: t.isCaseSensitive ?? K.isCaseSensitive,
				ignoreDiacritics: t.ignoreDiacritics ?? K.ignoreDiacritics,
				ignoreLocation: t.ignoreLocation ?? K.ignoreLocation
			});
			return {
				type: "fuzzy",
				search(e) {
					return n.searchIn(e);
				}
			};
		}
	}
], Ob = Db.length, kb = "\0", Ab = "|";
function jb(e) {
	let t = [], n = e.length, r = 0;
	for (; r < n;) {
		for (; r < n && e[r] === " ";) r++;
		if (r >= n) break;
		let i = r;
		for (; i < n && e[i] !== " " && e[i] !== "\"";) i++;
		if (i < n && e[i] === "\"") {
			for (i++; i < n;) {
				if (e[i] === "\"") {
					let t = i + 1;
					if (t >= n || e[t] === " ") {
						i++;
						break;
					}
					if (e[t] === "$" && (t + 1 >= n || e[t + 1] === " ")) {
						i += 2;
						break;
					}
				}
				i++;
			}
			t.push(e.substring(r, i)), r = i;
		} else {
			for (; i < n && e[i] !== " ";) i++;
			t.push(e.substring(r, i)), r = i;
		}
	}
	return t;
}
function Mb(e, t) {
	let n = e.match(t);
	return n ? n[1] : null;
}
function Nb(e, t = {}) {
	return e.replace(/\\\|/g, kb).split(Ab).map((e) => {
		let n = jb(e.replace(/\u0000/g, "|").trim()).filter((e) => e && !!e.trim()), r = [];
		for (let e = 0, i = n.length; e < i; e += 1) {
			let i = n[e], a = !1, o = -1;
			for (; !a && ++o < Ob;) {
				let e = Db[o], n = Mb(i, e.multiRegex);
				n && (r.push(e.create(n, t)), a = !0);
			}
			if (!a) for (o = -1; ++o < Ob;) {
				let e = Db[o], n = Mb(i, e.singleRegex);
				if (n) {
					r.push(e.create(n, t));
					break;
				}
			}
		}
		return r;
	});
}
var Pb = class {
	constructor(e, { isCaseSensitive: t = K.isCaseSensitive, ignoreDiacritics: n = K.ignoreDiacritics, includeMatches: r = K.includeMatches, minMatchCharLength: i = K.minMatchCharLength, ignoreLocation: a = K.ignoreLocation, findAllMatches: o = K.findAllMatches, location: s = K.location, threshold: c = K.threshold, distance: l = K.distance } = {}) {
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
		}, e = t ? e : e.toLowerCase(), e = n ? Cb(e) : e, this.pattern = e, this.query = Nb(this.pattern, this.options);
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
		e = r ? e : e.toLowerCase(), e = i ? Cb(e) : e;
		let a = 0, o = [], s = 0, c = !1;
		for (let r = 0, i = t.length; r < i; r += 1) {
			let i = t[r];
			o.length = 0, a = 0, c = !1;
			for (let t = 0, r = i.length; t < r; t += 1) {
				let r = i[t], { isMatch: l, indices: u, score: d } = r.search(e);
				if (l) a += 1, s += d, Eb(r.type) && (c = !0), n && (Tb.has(r.type) ? o.push(...u) : o.push(u));
				else {
					s = 0, a = 0, o.length = 0, c = !1;
					break;
				}
			}
			if (a) {
				let e = {
					isMatch: !0,
					score: s / a
				};
				return c && (e.hasInverse = !0), n && (e.indices = bb(o)), e;
			}
		}
		return {
			isMatch: !1,
			score: 1
		};
	}
}, Fb = [];
function Ib(...e) {
	Fb.push(...e);
}
function Lb(e, t) {
	for (let n = 0, r = Fb.length; n < r; n += 1) {
		let r = Fb[n];
		if (r.condition(e, t)) return new r(e, t);
	}
	return new wb(e, t);
}
var Rb = {
	AND: "$and",
	OR: "$or"
}, zb = {
	PATH: "$path",
	PATTERN: "$val"
}, Bb = (e) => !!(e[Rb.AND] || e[Rb.OR]), Vb = (e) => !!e[zb.PATH], Hb = (e) => !Ry(e) && Wy(e) && !Bb(e), Ub = (e) => ({ [Rb.AND]: Object.keys(e).map((t) => ({ [t]: e[t] })) });
function Wb(e, t, { auto: n = !0 } = {}) {
	let r = (e) => {
		if (Vy(e)) {
			let r = {
				keyId: null,
				pattern: e
			};
			return n && (r.searcher = Lb(e, t)), r;
		}
		let i = Object.keys(e), a = Vb(e);
		if (!a && i.length > 1 && !Bb(e)) return r(Ub(e));
		if (Hb(e)) {
			let r = a ? e[zb.PATH] : i[0], o = a ? e[zb.PATTERN] : e[r];
			if (!Vy(o)) throw Error(Zy(r));
			let s = {
				keyId: ob(r),
				pattern: o
			};
			return n && (s.searcher = Lb(o, t)), s;
		}
		let o = {
			children: [],
			operator: i[0]
		};
		return i.forEach((t) => {
			let n = e[t];
			Ry(n) && n.forEach((e) => {
				o.children.push(r(e));
			});
		}), o;
	};
	return Bb(e) || (e = Ub(e)), r(e);
}
function Gb(e, { ignoreFieldNorm: t = K.ignoreFieldNorm }) {
	let n = 1;
	return e.forEach(({ key: e, norm: r, score: i }) => {
		let a = e ? e.weight : null;
		n *= (i === 0 && a ? 2 ** -52 : i) ** +((a || 1) * (t ? 1 : r));
	}), n;
}
function Kb(e, { ignoreFieldNorm: t = K.ignoreFieldNorm }) {
	e.forEach((e) => {
		e.score = Gb(e.matches, { ignoreFieldNorm: t });
	});
}
var qb = class {
	constructor(e, t) {
		this.limit = e, this.heap = [], this.comparator = t;
	}
	get size() {
		return this.heap.length;
	}
	insert(e) {
		this.size < this.limit ? (this.heap.push(e), this._bubbleUp(this.size - 1)) : this.comparator(e, this.heap[0]) < 0 && (this.heap[0] = e, this._sinkDown(0));
	}
	extractSorted() {
		return this.heap.sort(this.comparator);
	}
	_bubbleUp(e) {
		let t = this.heap;
		for (; e > 0;) {
			let n = e - 1 >> 1;
			if (this.comparator(t[e], t[n]) <= 0) break;
			let r = t[e];
			t[e] = t[n], t[n] = r, e = n;
		}
	}
	_sinkDown(e) {
		let t = this.heap, n = t.length, r = e;
		do {
			e = r;
			let i = 2 * e + 1, a = 2 * e + 2;
			if (i < n && this.comparator(t[i], t[r]) > 0 && (r = i), a < n && this.comparator(t[a], t[r]) > 0 && (r = a), r !== e) {
				let n = t[e];
				t[e] = t[r], t[r] = n;
			}
		} while (r !== e);
	}
};
function Jb(e) {
	let t = [];
	return e.matches.forEach((e) => {
		if (!Ky(e.indices) || !e.indices.length) return;
		let n = {
			indices: e.indices,
			value: e.value
		};
		e.key && (n.key = e.key.id), e.idx > -1 && (n.refIndex = e.idx), t.push(n);
	}), t;
}
function Yb(e, t, { includeMatches: n = K.includeMatches, includeScore: r = K.includeScore } = {}) {
	return e.map((e) => {
		let { idx: i } = e, a = {
			item: t[i],
			refIndex: i
		};
		return n && (a.matches = Jb(e)), r && (a.score = e.score), a;
	});
}
var Xb = /[\p{L}\p{M}\p{N}_]+/gu, Zb = /* @__PURE__ */ new WeakSet();
function Qb(e) {
	Zb.has(e) || (Zb.add(e), console.warn(`[Fuse] tokenize regex ${e} lacks the global flag; only the first match per text will be returned. Add the 'g' flag.`));
}
function $b(e) {
	if (typeof e == "function") {
		let t = !1;
		return (n) => {
			let r = e(n);
			if (!t && (t = !0, !Array.isArray(r) || r.some((e) => typeof e != "string"))) throw Error(`[Fuse] tokenize function must return string[]; received ${Array.isArray(r) ? "array containing non-strings" : typeof r}.`);
			return r;
		};
	}
	return e instanceof RegExp ? (e.global || Qb(e), (t) => t.match(e) || []) : (e) => e.match(Xb) || [];
}
function ex({ isCaseSensitive: e = !1, ignoreDiacritics: t = !1, tokenize: n } = {}) {
	let r = $b(n);
	return { tokenize(n) {
		return e || (n = n.toLowerCase()), t && (n = Cb(n)), r(n);
	} };
}
var tx = class {
	static condition(e, t) {
		return t.useTokenSearch;
	}
	constructor(e, t) {
		this.options = t, this.analyzer = ex({
			isCaseSensitive: t.isCaseSensitive,
			ignoreDiacritics: t.ignoreDiacritics,
			tokenize: t.tokenize
		});
		let n = this.analyzer.tokenize(e), { df: r, fieldCount: i } = t._invertedIndex;
		this.termSearchers = [], this.idfWeights = [];
		for (let e of n) {
			this.termSearchers.push(new wb(e, {
				location: t.location,
				threshold: t.threshold,
				distance: t.distance,
				includeMatches: t.includeMatches,
				findAllMatches: t.findAllMatches,
				minMatchCharLength: t.minMatchCharLength,
				isCaseSensitive: t.isCaseSensitive,
				ignoreDiacritics: t.ignoreDiacritics,
				ignoreLocation: !0
			}));
			let n = r.get(e) || 0, a = Math.log(1 + (i - n + .5) / (n + .5));
			this.idfWeights.push(a);
		}
		this.combineAll = t.tokenMatch === "all", this.numTerms = this.termSearchers.length, this.useMask = this.numTerms <= 31;
	}
	searchIn(e) {
		if (!this.termSearchers.length) return {
			isMatch: !1,
			score: 1
		};
		let t = [], n = 0, r = 0, i = 0, a = 0, o = this.combineAll && !this.useMask ? /* @__PURE__ */ new Set() : null;
		for (let s = 0; s < this.termSearchers.length; s++) {
			let c = this.termSearchers[s].searchIn(e), l = this.idfWeights[s];
			r += l, c.isMatch && (i++, n += l * (1 - c.score), c.indices && t.push(...c.indices), this.combineAll && (this.useMask ? a |= 1 << s : o.add(s)));
		}
		if (i === 0) return {
			isMatch: !1,
			score: 1
		};
		let s = r > 0 ? 1 - n / r : 0, c = {
			isMatch: !0,
			score: Math.max(.001, s)
		};
		return this.options.includeMatches && t.length && (c.indices = bb(t)), this.combineAll && (this.useMask ? c.matchedMask = a : c.matchedTerms = o, c.termCount = this.numTerms), c;
	}
};
function nx(e, t, n, r) {
	let i = r.tokenize(t);
	if (!i.length) return;
	e.fieldCount++, e.docFieldCount.set(n, (e.docFieldCount.get(n) || 0) + 1);
	let a = new Set(i), o = e.docTermFieldHits.get(n);
	o || (o = /* @__PURE__ */ new Map(), e.docTermFieldHits.set(n, o));
	for (let t of a) o.set(t, (o.get(t) || 0) + 1), e.df.set(t, (e.df.get(t) || 0) + 1);
}
function rx(e, t, n, r) {
	let { i, v: a, $: o } = t;
	if (a !== void 0) nx(e, a, i, r);
	else if (o) for (let t = 0; t < n; t++) {
		let n = o[t];
		if (n) {
			if (Array.isArray(n)) for (let t of n) nx(e, t.v, i, r);
			else nx(e, n.v, i, r);
		}
	}
}
function ix(e, t, n) {
	let r = {
		fieldCount: 0,
		df: /* @__PURE__ */ new Map(),
		docFieldCount: /* @__PURE__ */ new Map(),
		docTermFieldHits: /* @__PURE__ */ new Map()
	};
	for (let i of e) rx(r, i, t, n);
	return r;
}
function ax(e, t, n, r) {
	rx(e, t, n, r);
}
function ox(e, t) {
	let n = e.docFieldCount.get(t);
	if (n === void 0) return;
	e.fieldCount -= n, e.docFieldCount.delete(t);
	let r = e.docTermFieldHits.get(t);
	if (r) {
		for (let [t, n] of r) {
			let r = (e.df.get(t) || 0) - n;
			r <= 0 ? e.df.delete(t) : e.df.set(t, r);
		}
		e.docTermFieldHits.delete(t);
	}
}
function sx(e, t) {
	if (t.length === 0) return;
	let n = Array.from(new Set(t)).sort((e, t) => e - t);
	for (let t of n) ox(e, t);
	let r = (e) => {
		let t = 0, r = n.length;
		for (; t < r;) {
			let i = t + r >>> 1;
			n[i] < e ? t = i + 1 : r = i;
		}
		return e - t;
	}, i = n[0], a = /* @__PURE__ */ new Map();
	for (let [t, n] of e.docFieldCount) a.set(t > i ? r(t) : t, n);
	e.docFieldCount = a;
	let o = /* @__PURE__ */ new Map();
	for (let [t, n] of e.docTermFieldHits) o.set(t > i ? r(t) : t, n);
	e.docTermFieldHits = o;
}
var cx = class {
	constructor(e, t, n) {
		this.options = {
			...K,
			...t
		}, this.options.useExtendedSearch, this.options.useTokenSearch, this._keyStore = new rb(this.options.keys), this._docs = e, this._myIndex = null, this._invertedIndex = null, this.setCollection(e, n), this._lastQuery = null, this._lastSearcher = null;
	}
	_getSearcher(e) {
		if (this._lastQuery === e) return this._lastSearcher;
		let t = Lb(e, this._invertedIndex ? {
			...this.options,
			_invertedIndex: this._invertedIndex
		} : this.options);
		return this._lastQuery = e, this._lastSearcher = t, t;
	}
	setCollection(e, t) {
		if (this._docs = e, t && !(t instanceof mb)) throw Error(Yy);
		if (this._myIndex = t || hb(this.options.keys, this._docs, {
			getFn: this.options.getFn,
			fieldNormWeight: this.options.fieldNormWeight
		}), this.options.useTokenSearch) {
			let e = ex({
				isCaseSensitive: this.options.isCaseSensitive,
				ignoreDiacritics: this.options.ignoreDiacritics,
				tokenize: this.options.tokenize
			});
			this._invertedIndex = ix(this._myIndex.records, this._myIndex.keys.length, e);
		}
		this._invalidateSearcherCache();
	}
	add(e) {
		if (!Ky(e)) return;
		this._docs.push(e);
		let t = this._myIndex.add(e, this._docs.length - 1);
		if (this._invertedIndex && t) {
			let e = ex({
				isCaseSensitive: this.options.isCaseSensitive,
				ignoreDiacritics: this.options.ignoreDiacritics,
				tokenize: this.options.tokenize
			});
			ax(this._invertedIndex, t, this._myIndex.keys.length, e);
		}
		this._invalidateSearcherCache();
	}
	remove(e = () => !1) {
		let t = [], n = [];
		for (let r = 0, i = this._docs.length; r < i; r += 1) e(this._docs[r], r) && (t.push(this._docs[r]), n.push(r));
		if (n.length) {
			this._invertedIndex && sx(this._invertedIndex, n);
			let e = new Set(n);
			this._docs = this._docs.filter((t, n) => !e.has(n)), this._myIndex.removeAll(n), this._invalidateSearcherCache();
		}
		return t;
	}
	removeAt(e) {
		if (!Number.isInteger(e) || e < 0 || e >= this._docs.length) throw Error(Xy);
		this._invertedIndex && sx(this._invertedIndex, [e]);
		let t = this._docs.splice(e, 1)[0];
		return this._myIndex.removeAt(e), this._invalidateSearcherCache(), t;
	}
	_invalidateSearcherCache() {
		this._lastQuery = null, this._lastSearcher = null;
	}
	getIndex() {
		return this._myIndex;
	}
	_normalizedKeys() {
		return this._myIndex.keys.map((e) => this._keyStore.get(e.id) || e);
	}
	search(e, t) {
		let { limit: n = -1 } = t || {}, { includeMatches: r, includeScore: i, shouldSort: a, sortFn: o, ignoreFieldNorm: s } = this.options;
		if (Vy(e) && !e.trim()) {
			let e = this._docs.map((e, t) => ({
				item: e,
				refIndex: t
			}));
			return Hy(n) && n > -1 && (e = e.slice(0, n)), e;
		}
		let c = a && Hy(n) && n > 0 && Vy(e), l = o, u = (e, t) => l(e, t) || e.idx - t.idx, d;
		if (c) {
			let t = new qb(n, u);
			Vy(this._docs[0]) ? this._searchStringList(e, {
				heap: t,
				ignoreFieldNorm: s
			}) : this._searchObjectList(e, {
				heap: t,
				ignoreFieldNorm: s
			}), d = t.extractSorted();
		} else d = Vy(e) ? Vy(this._docs[0]) ? this._searchStringList(e) : this._searchObjectList(e) : this._searchLogical(e), Kb(d, { ignoreFieldNorm: s }), a && d.sort(Vy(e) ? u : l), Hy(n) && n > -1 && (d = d.slice(0, n));
		return Yb(d, this._docs, {
			includeMatches: r,
			includeScore: i
		});
	}
	_searchStringList(e, { heap: t, ignoreFieldNorm: n } = {}) {
		let r = this._getSearcher(e), i = this.options.useTokenSearch && this.options.tokenMatch === "all", { records: a } = this._myIndex, o = t ? null : [];
		return a.forEach(({ v: e, i: a, n: s }) => {
			if (!Ky(e)) return;
			let c = r.searchIn(e);
			if (c.isMatch) {
				let r = {
					score: c.score,
					value: e,
					norm: s,
					indices: c.indices
				};
				i && (r.matchedMask = c.matchedMask, r.matchedTerms = c.matchedTerms, r.termCount = c.termCount);
				let l = [r];
				if (!i || this._coversAllTokens(l)) {
					let r = {
						item: e,
						idx: a,
						matches: l
					};
					t ? (r.score = Gb(r.matches, { ignoreFieldNorm: n }), t.insert(r)) : o.push(r);
				}
			}
		}), o;
	}
	_searchLogical(e) {
		let t = Wb(e, this.options), n = this._normalizedKeys(), r = (e, t, i) => {
			if (!("children" in e)) {
				let { keyId: r, searcher: a } = e, o;
				return r === null ? (o = [], n.forEach((e, n) => {
					o.push(...this._findMatches({
						key: e,
						value: t[n],
						searcher: a
					}));
				})) : o = this._findMatches({
					key: this._keyStore.get(r),
					value: this._myIndex.getValueForItemAtKeyId(t, r),
					searcher: a
				}), o && o.length ? [{
					idx: i,
					item: t,
					matches: o
				}] : [];
			}
			let { children: a, operator: o } = e, s = [];
			for (let e = 0, n = a.length; e < n; e += 1) {
				let n = a[e], c = r(n, t, i);
				if (c.length) s.push(...c);
				else if (o === Rb.AND) return [];
			}
			return s;
		}, i = this._myIndex.records, a = /* @__PURE__ */ new Map(), o = [];
		return i.forEach(({ $: e, i: n }) => {
			if (Ky(e)) {
				let i = r(t, e, n);
				i.length && (a.has(n) || (a.set(n, {
					idx: n,
					item: e,
					matches: []
				}), o.push(a.get(n))), i.forEach(({ matches: e }) => {
					a.get(n).matches.push(...e);
				}));
			}
		}), o;
	}
	_searchObjectList(e, { heap: t, ignoreFieldNorm: n } = {}) {
		let r = this._getSearcher(e), i = this.options.useTokenSearch && this.options.tokenMatch === "all", { records: a } = this._myIndex, o = this._normalizedKeys(), s = t ? null : [];
		return a.forEach(({ $: e, i: a }) => {
			if (!Ky(e)) return;
			let c = [], l = !1, u = !1;
			if (o.forEach((t, n) => {
				let i = this._findMatches({
					key: t,
					value: e[n],
					searcher: r
				});
				i.length ? (c.push(...i), i[0].hasInverse && (u = !0)) : l = !0;
			}), !(u && l) && c.length && (!i || this._coversAllTokens(c))) {
				let r = {
					idx: a,
					item: e,
					matches: c
				};
				t ? (r.score = Gb(r.matches, { ignoreFieldNorm: n }), t.insert(r)) : s.push(r);
			}
		}), s;
	}
	_findMatches({ key: e, value: t, searcher: n }) {
		if (!Ky(t)) return [];
		let r = [];
		if (Ry(t)) t.forEach(({ v: t, i, n: a }) => {
			if (!Ky(t)) return;
			let o = n.searchIn(t);
			if (o.isMatch) {
				let n = {
					score: o.score,
					key: e,
					value: t,
					idx: i,
					norm: a,
					indices: o.indices,
					hasInverse: o.hasInverse
				};
				o.termCount !== void 0 && (n.matchedMask = o.matchedMask, n.matchedTerms = o.matchedTerms, n.termCount = o.termCount), r.push(n);
			}
		});
		else {
			let { v: i, n: a } = t, o = n.searchIn(i);
			if (o.isMatch) {
				let t = {
					score: o.score,
					key: e,
					value: i,
					norm: a,
					indices: o.indices,
					hasInverse: o.hasInverse
				};
				o.termCount !== void 0 && (t.matchedMask = o.matchedMask, t.matchedTerms = o.matchedTerms, t.termCount = o.termCount), r.push(t);
			}
		}
		return r;
	}
	_coversAllTokens(e) {
		let t = e.length ? e[0].termCount : void 0;
		if (t === void 0) return !0;
		if (t <= 31) {
			let n = 0;
			for (let t = 0; t < e.length; t++) n |= e[t].matchedMask || 0;
			return n === 2 ** t - 1;
		}
		let n = /* @__PURE__ */ new Set();
		for (let t = 0; t < e.length; t++) {
			let r = e[t].matchedTerms;
			if (r) for (let e of r) n.add(e);
		}
		return n.size === t;
	}
};
cx.version = "7.5.0", cx.createIndex = hb, cx.parseIndex = gb, cx.config = K, cx.match = function(e, t, n) {
	if (n && n.useTokenSearch) throw Error(tb);
	return Lb(e, {
		...K,
		...n
	}).searchIn(t);
}, cx.parseQuery = Wb, Ib(Pb), Ib(tx), cx.use = function(...e) {
	e.forEach((e) => Ib(e));
};
var lx = cx, ux = (0, I.forwardRef)(({ variant: e, ...t }, n) => {
	let { onClick: r, ...i } = t, a = (0, I.useRef)(null);
	(0, I.useEffect)(() => {
		let e = a.current;
		if (!e || !r) return;
		let t = r;
		return e.addEventListener("click", t), () => e.removeEventListener("click", t);
	}, [r]);
	let o = (0, I.useCallback)((e) => {
		a.current = e, typeof n == "function" ? n(e) : n && (n.current = e);
	}, [n]);
	return /* @__PURE__ */ (0, L.jsx)("button", {
		ref: o,
		...i,
		className: [i.className, e && `btn btn-${e}`].filter(Boolean).join(" "),
		type: "button"
	});
});
ux.displayName = "IconSelectorToggle";
var dx = (0, I.forwardRef)(({ show: e, close: t, alignRight: n, ...r }, i) => /* @__PURE__ */ (0, L.jsx)("div", {
	ref: i,
	...r
}));
dx.displayName = "IconSelectorMenu";
function fx({ currentIcon: e, onIconSelected: t }) {
	let n = /* @__PURE__ */ "search.home.info.check_circle.delete.visibility.book.favorite.description.lock.schedule.language.help_outline.verified.face.thumb_up.filter_alt.dashboard.event.fingerprint.list.help.paid.assignment.question_answer.article.lightbulb.credit_card.account_balance.trending_up".split("."), [r, i] = (0, I.useState)(n), [a, o] = (0, I.useState)(""), s = (0, I.useId)(), c = new lx(Ly, {
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
	return /* @__PURE__ */ (0, L.jsxs)(nu, {
		onSelect: d,
		onToggle: (e) => {
			e && u();
		},
		children: [/* @__PURE__ */ (0, L.jsx)(nu.Toggle, {
			as: ux,
			variant: e ? "outline-dark" : "success",
			className: "d-block icon-selector pb-1",
			id: s,
			children: /* @__PURE__ */ (0, L.jsx)("span", {
				className: "material-icons-outlined mb-0",
				children: e || "add"
			})
		}), /* @__PURE__ */ (0, L.jsx)(nu.Menu, {
			as: dx,
			className: "p-0 border-0",
			popperConfig: { strategy: "fixed" },
			children: /* @__PURE__ */ (0, L.jsxs)("div", {
				className: "icon-list-popup border rounded-sm shadow",
				children: [/* @__PURE__ */ (0, L.jsx)(Au, { children: /* @__PURE__ */ (0, L.jsx)(U.Group, {
					size: "sm",
					children: /* @__PURE__ */ (0, L.jsx)(U.Control, {
						autoFocus: !0,
						type: "text",
						className: "m-0",
						placeholder: "Search icons",
						trailingElement: /* @__PURE__ */ (0, L.jsx)("span", {
							className: "material-icons-outlined medium text-gray-500",
							children: "search"
						}),
						value: a,
						onChange: l
					})
				}) }), /* @__PURE__ */ (0, L.jsx)("div", {
					className: "icon-list d-flex flex-wrap justify-items-start",
					children: r.map((e) => /* @__PURE__ */ (0, L.jsx)(nu.Item, {
						as: "button",
						type: "button",
						eventKey: e,
						className: "icon-symbol p-2",
						children: /* @__PURE__ */ (0, L.jsx)("span", {
							className: "material-icons-outlined",
							children: e
						})
					}, e))
				})]
			})
		})]
	});
}
// src/card/common/studio-ui/secondary-content/HoverListItemForm.tsx
function px({ cardIndex: e, itemIndex: t, onRemove: n }) {
	let { values: r, handleChange: i, setFieldValue: a } = ey(), o = `cards[${e}].secondaryContent.items[${t}]`, s = r.cards[e].secondaryContent.items[t];
	return /* @__PURE__ */ (0, L.jsx)(Iy, {
		heading: `List Item ${t + 1}`,
		index: t,
		onRemoveItem: n,
		children: /* @__PURE__ */ (0, L.jsxs)("div", {
			className: "p-2",
			children: [/* @__PURE__ */ (0, L.jsxs)(U.Group, { children: [/* @__PURE__ */ (0, L.jsx)(U.Label, {
				className: "x-small",
				children: "Main Text"
			}), /* @__PURE__ */ (0, L.jsx)(U.Control, {
				as: "textarea",
				autoResize: !0,
				name: `${o}.description`,
				value: s.description,
				onChange: i
			})] }), /* @__PURE__ */ (0, L.jsxs)("div", {
				className: "d-flex",
				children: [/* @__PURE__ */ (0, L.jsxs)(U.Group, {
					className: "flex-grow-0",
					children: [/* @__PURE__ */ (0, L.jsx)(U.Label, {
						className: "x-small",
						children: "Icon"
					}), /* @__PURE__ */ (0, L.jsx)(fx, {
						currentIcon: s.icon || "",
						onIconSelected: (e) => a(`${o}.icon`, e)
					})]
				}), /* @__PURE__ */ (0, L.jsxs)(U.Group, {
					className: "flex-grow-1 ml-2",
					children: [/* @__PURE__ */ (0, L.jsx)(U.Label, {
						className: "x-small",
						children: "Hover Text"
					}), /* @__PURE__ */ (0, L.jsx)(U.Control, {
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
	let t = `cards[${e}].secondaryContent.items`;
	return /* @__PURE__ */ (0, L.jsx)(Ny, {
		name: t,
		children: ({ push: t, remove: n, form: r }) => {
			let i = r.values.cards[e].secondaryContent.items;
			return /* @__PURE__ */ (0, L.jsxs)("div", { children: [i.map((t, r) => /* @__PURE__ */ (0, L.jsx)(px, {
				cardIndex: e,
				itemIndex: r,
				onRemove: () => n(r)
			}, r)), /* @__PURE__ */ (0, L.jsx)(A, {
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
// src/shared/components/FilePickerModal.tsx
var hx = ({ fileTypes: e, onFileSelect: t, onError: n, onClose: r }) => {
	let [i, a] = (0, I.useState)(null), { element: o } = (0, I.useContext)(u), s = bp(), c = (0, I.useRef)(null), l = o.getAttribute("data-usage-id");
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
	let d = new URL(s.file_picker_url);
	return d.searchParams.set("multiSelect", "false"), d.searchParams.set("embedded", "true"), e && d.searchParams.set("fileTypes", e.join(",")), d.searchParams.set("usageKey", l), /* @__PURE__ */ (0, L.jsx)(gu, {
		title: "File Picker",
		size: "xl",
		isOpen: !0,
		className: "bg-light-200",
		onClose: r,
		footerNode: /* @__PURE__ */ (0, L.jsxs)(Me, { children: [
			/* @__PURE__ */ (0, L.jsx)(Me.Spacer, {}),
			/* @__PURE__ */ (0, L.jsx)(A, {
				variant: "tertiary",
				onClick: r,
				children: "Cancel"
			}),
			/* @__PURE__ */ (0, L.jsx)(A, {
				disabled: !i,
				onClick: async () => {
					await t(i);
				},
				children: "Use Selected File"
			})
		] }),
		isOverflowVisible: !0,
		children: /* @__PURE__ */ (0, L.jsx)("iframe", {
			title: "File Picker",
			ref: c,
			width: "100%",
			height: "800",
			src: d.toString()
		})
	});
}, gx = ({ children: e, setValue: t, fileTypes: n = null }) => {
	let [r, i] = (0, I.useState)(!1), [a, o] = (0, I.useState)(null), s = bp(), c = (0, I.useCallback)(async (e) => {
		try {
			await t(e), o(null);
		} catch (e) {
			o(e.message);
		}
		i(!1);
	}, [t]);
	return s?.file_picker_url ? /* @__PURE__ */ (0, L.jsxs)(L.Fragment, { children: [
		/* @__PURE__ */ (0, L.jsxs)(wn, { children: [e, /* @__PURE__ */ (0, L.jsx)(wn.Append, { children: /* @__PURE__ */ (0, L.jsx)(A, {
			variant: "outline-secondary",
			onClick: () => i(!0),
			children: "Select File"
		}) })] }),
		a && /* @__PURE__ */ (0, L.jsx)(U.Control.Feedback, {
			type: "default",
			children: a
		}),
		r && /* @__PURE__ */ (0, L.jsx)(hx, {
			fileTypes: n,
			onFileSelect: c,
			onError: o,
			onClose: () => i(!1)
		})
	] }) : e;
};
// src/card/common/studio-ui/secondary-content/ImageForm.tsx
function _x({ cardIndex: e }) {
	let { values: t, handleChange: n, setFieldValue: r } = ey(), [i, a] = (0, I.useState)(!1), o = t.cards[e], s = `cards[${e}].secondaryContent`, c = o.secondaryContent, l = o.orientation, u = null;
	switch (l) {
		case "HORIZONTAL":
			u = "Recommended image size: 700 × 1200 px. Use a portrait image to avoid cropping in the side panel.";
			break;
		case "VERTICAL": u = "Recommended image size: 1200 × 300 px. Use a wide banner image to avoid cropping.";
	}
	function d(e) {
		a(e.currentTarget.checked), e.currentTarget.checked && r(`${s}.altText`, "");
	}
	return /* @__PURE__ */ (0, L.jsxs)(L.Fragment, { children: [
		/* @__PURE__ */ (0, L.jsxs)(U.Group, { children: [
			/* @__PURE__ */ (0, L.jsx)(U.Label, { children: "Image Source URL" }),
			/* @__PURE__ */ (0, L.jsx)(gx, {
				setValue: (e) => r(`${s}.location`, e),
				fileTypes: ["image"],
				children: /* @__PURE__ */ (0, L.jsx)(U.Control, {
					name: `${s}.location`,
					value: c.location,
					onChange: n,
					placeholder: "URL"
				})
			}),
			!c.useAsBackground && u && /* @__PURE__ */ (0, L.jsx)(U.Text, {
				className: "small",
				children: u
			})
		] }),
		/* @__PURE__ */ (0, L.jsxs)(U.Group, { children: [/* @__PURE__ */ (0, L.jsx)(U.Checkbox, {
			name: `${s}.useAsBackground`,
			checked: c.useAsBackground ?? !1,
			onChange: (e) => r(`${s}.useAsBackground`, e.currentTarget.checked),
			children: "Use image as card background"
		}), /* @__PURE__ */ (0, L.jsx)(U.Text, {
			className: "small",
			children: "The image will fill the full card background. Text will appear over the image."
		})] }),
		/* @__PURE__ */ (0, L.jsxs)(U.Group, { children: [
			/* @__PURE__ */ (0, L.jsx)(U.Label, { children: "Alt Text" }),
			/* @__PURE__ */ (0, L.jsx)("div", {
				className: "mb-0",
				children: /* @__PURE__ */ (0, L.jsx)(U.Checkbox, {
					checked: i,
					onChange: d,
					size: "sm",
					children: "Decorative Image"
				})
			}),
			/* @__PURE__ */ (0, L.jsx)(U.Control, {
				name: `${s}.altText`,
				value: c.altText,
				onChange: n,
				placeholder: "Alt Text",
				disabled: i
			})
		] })
	] });
}
// src/card/common/studio-ui/secondary-content/IconListItemForm.tsx
function vx({ cardIndex: e, itemIndex: t, onRemove: n }) {
	let { values: r, handleChange: i, setFieldValue: a } = ey(), o = `cards[${e}].secondaryContent.items[${t}]`, s = r.cards[e].secondaryContent.items?.[t];
	return /* @__PURE__ */ (0, L.jsx)(Iy, {
		heading: `List Item ${t + 1}`,
		index: t,
		onRemoveItem: n,
		children: /* @__PURE__ */ (0, L.jsxs)("div", {
			className: "p-2",
			children: [/* @__PURE__ */ (0, L.jsxs)("div", {
				className: "d-flex",
				children: [/* @__PURE__ */ (0, L.jsxs)(U.Group, {
					className: "flex-grow-0",
					children: [/* @__PURE__ */ (0, L.jsx)(U.Label, {
						className: "x-small",
						children: "Icon"
					}), /* @__PURE__ */ (0, L.jsx)(fx, {
						currentIcon: s?.icon ?? "",
						onIconSelected: (e) => a(`${o}.icon`, e)
					})]
				}), /* @__PURE__ */ (0, L.jsxs)(U.Group, {
					className: "flex-grow-1 ml-2",
					children: [/* @__PURE__ */ (0, L.jsx)(U.Label, {
						className: "x-small",
						children: "Heading"
					}), /* @__PURE__ */ (0, L.jsx)(U.Control, {
						type: "text",
						name: `${o}.title`,
						value: s?.title ?? "",
						onChange: i
					})]
				})]
			}), /* @__PURE__ */ (0, L.jsxs)(U.Group, { children: [/* @__PURE__ */ (0, L.jsx)(U.Label, {
				className: "x-small",
				children: "Description"
			}), /* @__PURE__ */ (0, L.jsx)(U.Control, {
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
	let t = `cards[${e}].secondaryContent.items`;
	return /* @__PURE__ */ (0, L.jsx)(Ny, {
		name: t,
		children: ({ push: t, remove: n, form: r }) => {
			let i = r.values.cards[e].secondaryContent.items;
			return /* @__PURE__ */ (0, L.jsxs)("div", { children: [i.map((t, r) => /* @__PURE__ */ (0, L.jsx)(vx, {
				cardIndex: e,
				itemIndex: r,
				onRemove: () => n(r)
			}, r)), /* @__PURE__ */ (0, L.jsx)(A, {
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
// src/card/common/studio-ui/secondary-content/ContentHiglightForm.tsx
function bx({ cardIndex: e }) {
	let { values: t, handleChange: n } = ey(), r = `cards[${e}].secondaryContent`, i = t.cards[e].secondaryContent;
	return /* @__PURE__ */ (0, L.jsxs)(L.Fragment, { children: [
		/* @__PURE__ */ (0, L.jsxs)(U.Group, { children: [/* @__PURE__ */ (0, L.jsx)(U.Label, { children: "Title" }), /* @__PURE__ */ (0, L.jsx)(U.Control, {
			name: `${r}.title`,
			value: i.title,
			onChange: n
		})] }),
		/* @__PURE__ */ (0, L.jsxs)(U.Group, { children: [/* @__PURE__ */ (0, L.jsx)(U.Label, { children: "Subtitle" }), /* @__PURE__ */ (0, L.jsx)(U.Control, {
			name: `${r}.subtitle`,
			value: i.subtitle,
			onChange: n
		})] }),
		/* @__PURE__ */ (0, L.jsxs)(U.Group, { children: [/* @__PURE__ */ (0, L.jsx)(U.Label, { children: "Description" }), /* @__PURE__ */ (0, L.jsx)(U.Control, {
			as: "textarea",
			autoResize: !0,
			name: `${r}.description`,
			value: i.description,
			onChange: n
		})] })
	] });
}
// src/card/common/studio-ui/CardEditor.tsx
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
	let { values: t, handleChange: n, handleBlur: r, setFieldValue: i } = ey(), a = t.cards[e], o = `cards[${e}]`, s = !!(a?.ctaLink && a?.ctaLabel), [c, l] = (0, I.useState)(s), u = a.secondaryContent?.kind ? Sx[a.secondaryContent.kind] : null;
	return (0, I.useEffect)(() => {
		l(s);
	}, [s]), /* @__PURE__ */ (0, L.jsxs)("div", {
		className: "row mt-5",
		children: [/* @__PURE__ */ (0, L.jsxs)("div", {
			className: "col border-right",
			children: [
				/* @__PURE__ */ (0, L.jsxs)(U.Group, { children: [/* @__PURE__ */ (0, L.jsx)(U.Label, { children: "Title" }), /* @__PURE__ */ (0, L.jsx)(U.Control, {
					name: `${o}.title`,
					value: a.title,
					onChange: n,
					onBlur: r
				})] }),
				/* @__PURE__ */ (0, L.jsxs)(U.Group, { children: [/* @__PURE__ */ (0, L.jsx)(U.Label, { children: "Subtitle" }), /* @__PURE__ */ (0, L.jsx)(U.Control, {
					name: `${o}.subtitle`,
					value: a.subtitle,
					onChange: n,
					onBlur: r
				})] }),
				a.secondaryContent?.kind !== "HOVER_LIST" && /* @__PURE__ */ (0, L.jsxs)(L.Fragment, { children: [
					/* @__PURE__ */ (0, L.jsxs)(U.Group, { children: [/* @__PURE__ */ (0, L.jsx)(U.Label, { children: "Body Content" }), /* @__PURE__ */ (0, L.jsx)(U.Control, {
						as: "textarea",
						autoResize: !0,
						name: `${o}.description`,
						value: a?.description ?? "",
						onChange: n,
						onBlur: r
					})] }),
					/* @__PURE__ */ (0, L.jsxs)(U.Group, { children: [/* @__PURE__ */ (0, L.jsx)(U.Checkbox, {
						checked: c,
						onChange: (e) => {
							l(e.currentTarget.checked), e.currentTarget.checked || (i(`${o}.ctaLabel`, ""), i(`${o}.ctaLink`, ""));
						},
						children: "Add a button"
					}), /* @__PURE__ */ (0, L.jsx)(U.Text, { children: "Link to another page or resource" })] }),
					c && /* @__PURE__ */ (0, L.jsxs)(L.Fragment, { children: [/* @__PURE__ */ (0, L.jsxs)(U.Group, { children: [/* @__PURE__ */ (0, L.jsx)(U.Label, { children: "Button Label" }), /* @__PURE__ */ (0, L.jsx)(U.Control, {
						name: `${o}.ctaLabel`,
						value: a?.ctaLabel ?? "",
						onChange: n
					})] }), /* @__PURE__ */ (0, L.jsxs)(U.Group, { children: [/* @__PURE__ */ (0, L.jsx)(U.Label, { children: "Button Link" }), /* @__PURE__ */ (0, L.jsx)(U.Control, {
						name: `${o}.ctaLink`,
						value: a?.ctaLink ?? "",
						onChange: n
					})] })] })
				] })
			]
		}), /* @__PURE__ */ (0, L.jsx)("div", {
			className: "col",
			children: u && /* @__PURE__ */ (0, L.jsx)(u, { cardIndex: e })
		})]
	});
}
function wx({ cardIndex: e, enableOrientation: t = !1 }) {
	let { values: n, setFieldValue: r, handleChange: i, handleBlur: a } = ey(), o = n.cards[e], s = `cards[${e}]`, c = o.orientation;
	return /* @__PURE__ */ (0, L.jsxs)("div", { children: [
		/* @__PURE__ */ (0, L.jsxs)(U.Group, { children: [
			/* @__PURE__ */ (0, L.jsx)(U.Label, { children: "Card Name" }),
			/* @__PURE__ */ (0, L.jsx)(U.Text, {
				className: "micro",
				children: "Name of the card in Studio"
			}),
			/* @__PURE__ */ (0, L.jsx)(U.Control, {
				name: `${s}.name`,
				value: o.name,
				onChange: i,
				onBlur: a
			})
		] }),
		t && /* @__PURE__ */ (0, L.jsxs)(U.Group, { children: [
			/* @__PURE__ */ (0, L.jsx)(U.Label, { children: "Card Layout" }),
			/* @__PURE__ */ (0, L.jsx)(U.Text, { children: "Choose whether this card uses a vertical or horizontal layout." }),
			/* @__PURE__ */ (0, L.jsxs)(be, {
				direction: "horizontal",
				gap: 4,
				children: [/* @__PURE__ */ (0, L.jsxs)(A, {
					className: "flex flex-column mt-4 p-4",
					variant: c === "VERTICAL" ? "outline-success" : "outline-secondary",
					onClick: () => r(`${s}.orientation`, "VERTICAL"),
					children: [
						/* @__PURE__ */ (0, L.jsx)("p", { children: /* @__PURE__ */ (0, L.jsx)("span", {
							className: "material-icons-outlined",
							children: "splitscreen"
						}) }),
						/* @__PURE__ */ (0, L.jsx)("p", {
							className: "mt-0",
							children: /* @__PURE__ */ (0, L.jsx)("strong", { children: "Vertical Card" })
						}),
						/* @__PURE__ */ (0, L.jsx)("p", {
							className: "small",
							children: "Content sits above and below"
						})
					]
				}), /* @__PURE__ */ (0, L.jsxs)(A, {
					className: "flex flex-column mt-4 p-4",
					variant: c === "HORIZONTAL" ? "outline-success" : "outline-secondary",
					onClick: () => r(`${s}.orientation`, "HORIZONTAL"),
					children: [
						/* @__PURE__ */ (0, L.jsx)("p", { children: /* @__PURE__ */ (0, L.jsx)("span", {
							className: "material-icons-outlined",
							children: "vertical_split"
						}) }),
						/* @__PURE__ */ (0, L.jsx)("p", {
							className: "mt-0",
							children: /* @__PURE__ */ (0, L.jsx)("strong", { children: "Horizontal Card" })
						}),
						/* @__PURE__ */ (0, L.jsx)("p", {
							className: "small",
							children: "Content sits side-by-side"
						})
					]
				})]
			})
		] }),
		/* @__PURE__ */ (0, L.jsxs)(U.Group, { children: [/* @__PURE__ */ (0, L.jsx)(U.Label, { children: "Supporting Content" }), /* @__PURE__ */ (0, L.jsxs)(U.Control, {
			as: "select",
			name: `${s}.cardType`,
			value: o.secondaryContent?.kind ?? "UNKNOWN",
			onChange: (e) => {
				r(`${s}.cardType`, e.currentTarget.value), r(`${s}.secondaryContent`, xx(e.currentTarget.value));
			},
			onBlur: a,
			children: [
				/* @__PURE__ */ (0, L.jsx)("option", {
					value: "UNKNOWN",
					children: "Choose Content Type"
				}),
				/* @__PURE__ */ (0, L.jsx)("option", {
					value: "IMAGE",
					children: "Image"
				}),
				/* @__PURE__ */ (0, L.jsx)("option", {
					value: "CONTENT_HIGHLIGHT",
					children: "Highlighted Text"
				}),
				/* @__PURE__ */ (0, L.jsx)("option", {
					value: "RICH_LIST",
					children: "Icon List"
				}),
				/* @__PURE__ */ (0, L.jsx)("option", {
					value: "HOVER_LIST",
					children: "Interactive List"
				})
			]
		})] }),
		o.secondaryContent?.kind && /* @__PURE__ */ (0, L.jsx)(Cx, { cardIndex: e })
	] });
}
// node_modules/.pnpm/@preact+signals-core@1.14.5/node_modules/@preact/signals-core/dist/signals-core.module.js
var Tx = Symbol.for("preact-signals");
function Ex() {
	if (jx > 1) jx--;
	else {
		var e, t = !1;
		for ((function() {
			var e = Fx;
			for (Fx = void 0; e !== void 0;) {
				var t = e.S;
				if (t.v === e.v) for (var n = t.t; n !== void 0; n = n.x) n.i === e.i && (n.i = t.i);
				e = e.o;
			}
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
function Dx(e) {
	if (jx > 0) return e();
	Px = ++Nx, jx++;
	try {
		return e();
	} finally {
		Ex();
	}
}
var Ox, kx = void 0;
function q(e) {
	var t = kx, n = Ox;
	kx = void 0, Ox = void 0;
	try {
		return e();
	} finally {
		kx = t, Ox = n;
	}
}
var Ax = void 0, jx = 0, Mx = 0, Nx = 0, Px = 0, Fx = void 0, Ix = 0;
function Lx(e) {
	if (kx !== void 0) {
		var t = e.n;
		if (t === void 0 || t.t !== kx) return t = {
			i: 0,
			S: e,
			p: kx.s,
			n: void 0,
			t: kx,
			e: void 0,
			x: void 0,
			r: t
		}, kx.s !== void 0 && (kx.s.n = t), kx.s = t, e.n = t, 32 & kx.f && e.S(t), t;
		if (t.i === -1) return t.i = 0, t.n !== void 0 && (t.n.p = t.p, t.p !== void 0 && (t.p.n = t.n), t.p = kx.s, t.n = void 0, kx.s.n = t, kx.s = t), t;
	}
}
function Rx(e, t) {
	this.v = e, this.i = 0, this.n = void 0, this.t = void 0, this.l = 0, this.W = t?.watched, this.Z = t?.unwatched, this.name = t?.name;
}
Rx.prototype.brand = Tx, Rx.prototype.h = function() {
	return !0;
}, Rx.prototype.S = function(e) {
	var t = this, n = this.t;
	n !== e && e.e === void 0 && (e.x = n, this.t = e, n === void 0 ? q(function() {
		var e;
		(e = t.W) == null || e.call(t);
	}) : n.e = e);
}, Rx.prototype.U = function(e) {
	var t = this;
	if (this.t !== void 0) {
		var n = e.e, r = e.x;
		n !== void 0 && (n.x = r, e.e = void 0), r !== void 0 && (r.e = n, e.x = void 0), e === this.t && (this.t = r, r === void 0 && q(function() {
			var e;
			(e = t.Z) == null || e.call(t);
		}));
	}
}, Rx.prototype.subscribe = function(e) {
	var t = this;
	return Yx(function() {
		var n = t.value;
		q(function() {
			return e(n);
		});
	}, { name: "sub" });
}, Rx.prototype.valueOf = function() {
	return this.value;
}, Rx.prototype.toString = function() {
	return this.value + "";
}, Rx.prototype.toJSON = function() {
	return this.value;
}, Rx.prototype.peek = function() {
	var e = this;
	return q(function() {
		return e.value;
	});
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
				Ex();
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
	Rx.call(this, void 0, t), this.x = e, this.s = void 0, this.g = Ix - 1, this.f = 4;
}
Ux.prototype = new Rx(), Ux.prototype.h = function() {
	if (this.f &= -3, 1 & this.f) return !1;
	if ((36 & this.f) == 32 || (this.f &= -5, this.g === Ix)) return !0;
	if (this.g = Ix, this.f |= 1, this.i > 0 && !Bx(this)) return this.f &= -2, !0;
	var e = kx;
	try {
		Vx(this), kx = this;
		var t = this.x();
		(16 & this.f || this.v !== t || this.i === 0) && (this.v = t, this.f &= -17, this.i++);
	} catch (e) {
		this.v = e, this.f |= 16, this.i++;
	}
	return kx = e, Hx(this), this.f &= -2, !0;
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
	var t = e.j;
	if (e.j = void 0, typeof t == "function") {
		jx++;
		var n = kx;
		kx = void 0;
		try {
			t();
		} catch (t) {
			throw e.f &= -2, e.f |= 8, Kx(e), t;
		} finally {
			kx = n, Ex();
		}
	}
}
function Kx(e) {
	for (var t = e.s; t !== void 0; t = t.n) t.S.U(t);
	e.x = void 0, e.s = void 0, Gx(e);
}
function qx(e) {
	if (kx !== this) throw Error("Out-of-order effect");
	Hx(this), kx = e, this.f &= -2;
	try {
		8 & this.f && Kx(this);
	} finally {
		Ex();
	}
}
function Jx(e, t) {
	this.x = e, this.j = void 0, this.s = void 0, this.u = void 0, this.f = 32, this.name = t?.name, Ox && Ox.push(this);
}
Jx.prototype.c = function() {
	var e = this.S();
	try {
		if (8 & this.f || this.x === void 0) return;
		var t = this.x();
		typeof t == "function" && (this.j = t);
	} finally {
		e();
	}
}, Jx.prototype.S = function() {
	if (1 & this.f) throw Error("Cycle detected");
	this.f |= 1, this.f &= -9, Gx(this), Vx(this), jx++;
	var e = kx;
	return kx = this, qx.bind(this, e);
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
// node_modules/.pnpm/@dnd-kit+state@0.3.2/node_modules/@dnd-kit/state/dist/index.mjs
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
		return n.length === r.length && !n.some((n) => !wS(e[n], t[n]));
	}
	return !1;
}
function J({ get: e }, t) {
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
var OS, kS, AS, jS, MS, NS = [J], PS, FS, IS, LS, RS, zS, BS, VS, HS, US, WS, GS, KS, qS;
MS = [J], jS = [J], AS = [ES()], kS = [ES()], OS = [ES()];
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
		let t = q(() => yS(this, zS, KS));
		e && t && this.equals(t, e) || Dx(() => {
			yS(this, zS, LS) || xS(this, zS, e, RS), xS(this, zS, t, US), xS(this, zS, e, qS);
		});
	}
	reset(e = this.defaultValue) {
		Dx(() => {
			xS(this, zS, void 0, US), xS(this, zS, e, RS), xS(this, zS, e, qS);
		});
	}
};
PS = uS(null), FS = /* @__PURE__ */ new WeakMap(), zS = /* @__PURE__ */ new WeakSet(), BS = /* @__PURE__ */ new WeakMap(), WS = /* @__PURE__ */ new WeakMap(), IS = gS(PS, 20, "#initial", NS, zS, FS), LS = IS.get, RS = IS.set, VS = gS(PS, 20, "#previous", MS, zS, BS), HS = VS.get, US = VS.set, GS = gS(PS, 20, "#current", jS, zS, WS), KS = GS.get, qS = GS.set, gS(PS, 2, "current", AS, JS), gS(PS, 2, "initial", kS, JS), gS(PS, 2, "previous", OS, JS), mS(PS, JS);
function YS(e) {
	return q(() => {
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
// node_modules/.pnpm/@dnd-kit+geometry@0.3.2/node_modules/@dnd-kit/geometry/dist/index.mjs
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
		Dx(() => {
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
	return typeof n == "number" ? Math.sqrt(oC(r, 2) + oC(i, 2)) > n : "x" in n && "y" in n ? r > n.x && i > n.y : "x" in n ? r > n.x : "y" in n && i > n.y;
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
}), ew = (e, t) => GC(t, UC("metadata"), e[3]), Y = (e, t, n, r) => {
	for (var i = 0, a = e[t >> 1], o = a && a.length; i < o; i++) t & 1 ? a[i].call(n) : r = a[i].call(n, r);
	return r;
}, X = (e, t, n, r, i, a) => {
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
}, tw = (e, t, n) => t.has(e) || WC("Cannot " + n), nw = (e, t) => Object(t) === t ? e.has(t) : WC("Cannot use the \"in\" operator on this value"), rw = (e, t, n) => (tw(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Z = (e, t, n) => t.has(e) ? WC("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), iw = (e, t, n, r) => (tw(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), aw = (e, t, n) => (tw(e, t, "access private method"), n);
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
var lw = [J], uw, dw, fw, pw = class {
	constructor(e, t) {
		this.manager = e, this.options = t, Z(this, dw, Y(uw, 8, this, !1)), Y(uw, 11, this), Z(this, fw, /* @__PURE__ */ new Set());
	}
	enable() {
		this.disabled = !1;
	}
	disable() {
		this.disabled = !0;
	}
	isDisabled() {
		return q(() => this.disabled);
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
uw = XC(null), dw = /* @__PURE__ */ new WeakMap(), fw = /* @__PURE__ */ new WeakMap(), X(uw, 4, "disabled", lw, pw, dw), ew(uw, pw);
var mw = class extends pw {}, hw, gw = class {
	constructor(e) {
		this.manager = e, this.instances = /* @__PURE__ */ new Map(), Z(this, hw, []);
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
		super(e), Z(this, yw), Z(this, bw), this.computeCollisions = this.computeCollisions.bind(this), iw(this, bw, zx(vw)), this.destroy = DS(() => {
			let e = this.computeCollisions(), t = q(() => this.manager.dragOperation.position.current);
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
		q(() => {
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
			let n = q(() => e({
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
			q(() => {
				s?.id !== e.dragOperation.target?.id && (r.disable(), e.actions.setDropTarget(s?.id).then(() => {
					r.enable();
				}));
			});
		});
	}
}, Ew = /* @__PURE__ */ ((e) => (e[e.Lowest = 0] = "Lowest", e[e.Low = 1] = "Low", e[e.Normal = 2] = "Normal", e[e.High = 3] = "High", e[e.Highest = 4] = "Highest", e))(Ew || {}), Dw = /* @__PURE__ */ ((e) => (e[e.Collision = 0] = "Collision", e[e.ShapeIntersection = 1] = "ShapeIntersection", e[e.PointerIntersection = 2] = "PointerIntersection", e))(Dw || {}), Ow, kw, Aw, jw, Mw, Nw, Pw = [J], Fw, Iw;
Nw = [TS], Mw = [TS], jw = [TS], Aw = [TS], kw = [TS], Ow = [TS];
var Lw = class {
	constructor() {
		Y(Fw, 5, this), Z(this, Iw, Y(Fw, 8, this, "idle")), Y(Fw, 11, this);
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
Fw = XC(null), Iw = /* @__PURE__ */ new WeakMap(), X(Fw, 4, "value", Pw, Lw, Iw), X(Fw, 2, "current", Nw, Lw), X(Fw, 2, "idle", Mw, Lw), X(Fw, 2, "initializing", jw, Lw), X(Fw, 2, "initialized", Aw, Lw), X(Fw, 2, "dragging", kw, Lw), X(Fw, 2, "dropped", Ow, Lw), ew(Fw, Lw);
var Rw = class {
	constructor(e) {
		this.manager = e;
	}
	setDragSource(e) {
		let { dragOperation: t } = this.manager;
		t.sourceIdentifier = typeof e == "string" || typeof e == "number" ? e : e.id;
	}
	setDropTarget(e) {
		return q(() => {
			let { dragOperation: t } = this.manager, n = e ?? null;
			if (t.targetIdentifier === n) return Promise.resolve(!1);
			t.targetIdentifier = n;
			let r = ww({ operation: t.snapshot() });
			return t.status.dragging && this.manager.monitor.dispatch("dragover", r), this.manager.renderer.rendering.then(() => r.defaultPrevented);
		});
	}
	start(e) {
		return q(() => {
			let { dragOperation: t } = this.manager;
			if (e.source != null && this.setDragSource(e.source), !t.source) throw Error("Cannot start a drag operation without a drag source");
			if (!t.status.idle) throw Error("Cannot start a drag operation while another is active");
			let n = new AbortController(), { event: r, coordinates: i } = e;
			Dx(() => {
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
		return q(() => {
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
		return q(() => {
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
					let e = q(() => t.source?.status === "dropping"), r = () => {
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
}, zw, Bw, Vw, Hw = [J], Uw, Ww, Gw, Kw, qw;
Vw = [J], Bw = [J], zw = [J];
var Jw = class {
	constructor(e, t) {
		Z(this, Ww, Y(Uw, 8, this)), Y(Uw, 11, this), Z(this, Gw, Y(Uw, 12, this)), Y(Uw, 15, this), Z(this, Kw, Y(Uw, 16, this)), Y(Uw, 19, this), Z(this, qw, Y(Uw, 20, this)), Y(Uw, 23, this);
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
Uw = XC(null), Ww = /* @__PURE__ */ new WeakMap(), Gw = /* @__PURE__ */ new WeakMap(), Kw = /* @__PURE__ */ new WeakMap(), qw = /* @__PURE__ */ new WeakMap(), X(Uw, 4, "manager", Hw, Jw, Ww), X(Uw, 4, "id", Vw, Jw, Gw), X(Uw, 4, "data", Bw, Jw, Kw), X(Uw, 4, "disabled", zw, Jw, qw), ew(Uw, Jw);
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
}, Xw, Zw, Qw, $w, eT, tT, nT, rT, iT, aT, oT, sT = class extends (nT = Jw, tT = [J], eT = [J], $w = [J], Qw = [TS], Zw = [TS], Xw = [TS], nT) {
	constructor(e, t) {
		var n = e, { modifiers: r, type: i, sensors: a } = n, o = YC(n, [
			"modifiers",
			"type",
			"sensors"
		]);
		super(o, t), Y(rT, 5, this), Z(this, iT, Y(rT, 8, this)), Y(rT, 11, this), Z(this, aT, Y(rT, 12, this)), Y(rT, 15, this), Z(this, oT, Y(rT, 16, this, this.isDragSource ? "dragging" : "idle")), Y(rT, 19, this), this.type = i, this.sensors = a, this.modifiers = r, this.alignment = o.alignment;
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
rT = XC(nT), iT = /* @__PURE__ */ new WeakMap(), aT = /* @__PURE__ */ new WeakMap(), oT = /* @__PURE__ */ new WeakMap(), X(rT, 4, "type", tT, sT, iT), X(rT, 4, "modifiers", eT, sT, aT), X(rT, 4, "status", $w, sT, oT), X(rT, 2, "isDropping", Qw, sT), X(rT, 2, "isDragging", Zw, sT), X(rT, 2, "isDragSource", Xw, sT), ew(rT, sT);
var cT, lT, uT, dT, fT, pT, mT, hT, gT, _T, vT, yT, bT, xT = class extends (mT = Jw, pT = [J], fT = [J], dT = [J], uT = [J], lT = [J], cT = [TS], mT) {
	constructor(e, t) {
		var n = e, { accept: r, collisionDetector: i, collisionPriority: a, type: o } = n, s = YC(n, [
			"accept",
			"collisionDetector",
			"collisionPriority",
			"type"
		]);
		super(s, t), Y(hT, 5, this), Z(this, gT, Y(hT, 8, this)), Y(hT, 11, this), Z(this, _T, Y(hT, 12, this)), Y(hT, 15, this), Z(this, vT, Y(hT, 16, this)), Y(hT, 19, this), Z(this, yT, Y(hT, 20, this)), Y(hT, 23, this), Z(this, bT, Y(hT, 24, this)), Y(hT, 27, this), this.accept = r, this.collisionDetector = i, this.collisionPriority = a, this.type = o;
	}
	accepts(e) {
		let { accept: t } = this;
		return t ? typeof t == "function" ? t(e) : e.type ? Array.isArray(t) ? t.includes(e.type) : e.type === t : !1 : !0;
	}
	get isDropTarget() {
		return this.manager?.dragOperation.target?.id === this.id;
	}
};
hT = XC(mT), gT = /* @__PURE__ */ new WeakMap(), _T = /* @__PURE__ */ new WeakMap(), vT = /* @__PURE__ */ new WeakMap(), yT = /* @__PURE__ */ new WeakMap(), bT = /* @__PURE__ */ new WeakMap(), X(hT, 4, "accept", pT, xT, gT), X(hT, 4, "type", fT, xT, _T), X(hT, 4, "collisionDetector", dT, xT, vT), X(hT, 4, "collisionPriority", uT, xT, yT), X(hT, 4, "shape", lT, xT, bT), X(hT, 2, "isDropTarget", cT, xT), ew(hT, xT);
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
		if (!this.activated) {
			if (this.constraints?.length) for (let t of this.constraints) t.onEvent(e);
			else this.activate(e);
		}
	}
	activate(e) {
		this.activated || (this.activated = !0, this.onActivate(e));
	}
	abort(e) {
		this.activated = !1, super.abort(e);
	}
}, wT, TT = class {
	constructor(e) {
		this.options = e, Z(this, wT);
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
FT = [J], PT = [J], NT = [J], MT = [J], jT = [J], AT = [TS], kT = [TS], OT = [TS];
var qT = class {
	constructor(e) {
		Y(BT, 5, this), Z(this, LT), Z(this, RT), Z(this, zT, new JS(void 0, (e, t) => e && t ? e.equals(t) : e === t)), this.status = new Lw(), Z(this, VT, Y(BT, 8, this, !1)), Y(BT, 11, this), Z(this, HT, Y(BT, 12, this, null)), Y(BT, 15, this), Z(this, UT, Y(BT, 16, this, null)), Y(BT, 19, this), Z(this, WT, Y(BT, 20, this, null)), Y(BT, 23, this), Z(this, GT, Y(BT, 24, this, [])), Y(BT, 27, this), this.position = new jC({
			x: 0,
			y: 0
		}), Z(this, KT, {
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
		return q(() => ({
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
		Dx(() => {
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
BT = XC(null), LT = /* @__PURE__ */ new WeakMap(), RT = /* @__PURE__ */ new WeakMap(), zT = /* @__PURE__ */ new WeakMap(), VT = /* @__PURE__ */ new WeakMap(), HT = /* @__PURE__ */ new WeakMap(), UT = /* @__PURE__ */ new WeakMap(), WT = /* @__PURE__ */ new WeakMap(), GT = /* @__PURE__ */ new WeakMap(), KT = /* @__PURE__ */ new WeakMap(), X(BT, 2, "shape", IT, qT), X(BT, 4, "canceled", FT, qT, VT), X(BT, 4, "activatorEvent", PT, qT, HT), X(BT, 4, "sourceIdentifier", NT, qT, UT), X(BT, 4, "targetIdentifier", MT, qT, WT), X(BT, 4, "modifiers", jT, qT, GT), X(BT, 2, "source", AT, qT), X(BT, 2, "target", kT, qT), X(BT, 2, "transform", OT, qT), ew(BT, qT);
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
		let t = e ?? {}, n = YT(t.plugins, []), r = YT(t.sensors, []), i = YT(t.modifiers, []), a = t.renderer ?? JT, o = new Cw(this), s = new DT(this);
		this.registry = s, this.monitor = o, this.renderer = a, this.actions = new Rw(this), this.dragOperation = new qT(this), this.collisionObserver = new xw(this), this.plugins = [Tw, ...n], this.modifiers = i, this.sensors = r;
		let { destroy: c } = this, l = DS(() => {
			let e = q(() => this.dragOperation.modifiers), t = this.modifiers;
			for (let n of e) t.includes(n) || n.destroy();
			this.dragOperation.modifiers = (this.dragOperation.source?.modifiers)?.map((e) => {
				let { plugin: t, options: n } = cw(e);
				return new t(this, n);
			}) ?? t;
		});
		this.destroy = () => {
			l(), c();
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
}, nE = (e, t, n) => t.has(e) || tE("Cannot " + n), Q = (e, t, n) => (nE(e, t, "read from private field"), t.get(e)), rE = (e, t, n) => t.has(e) ? tE("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), iE = (e, t, n, r) => (nE(e, t, "write to private field"), t.set(e, n), n), aE = (e, t, n) => (nE(e, t, "access private method"), n);
function oE(e) {
	return e ? e instanceof KeyframeEffect || "getKeyframes" in e && typeof e.getKeyframes == "function" : !1;
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
			Q(this, UE) ? e(t, this) : iE(this, UE, !0);
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
			iE(this, $E, !0), (e = Q(this, YE)) == null || e.disconnect(), (t = Q(this, XE)) == null || t.disconnect(), Q(this, ZE).disconnect(), (n = Q(this, QE)) == null || n.remove();
		}, rE(this, qE, !0), rE(this, JE), rE(this, YE), rE(this, XE), rE(this, ZE), rE(this, QE), rE(this, $E, !1), rE(this, eD, zE(() => {
			var e;
			let { element: t } = this;
			if ((e = Q(this, XE)) == null || e.disconnect(), Q(this, $E) || !Q(this, qE) || !t.isConnected) return;
			let n = t.ownerDocument ?? document, { innerHeight: r, innerWidth: i } = n.defaultView ?? window, a = t.getBoundingClientRect(), { top: o, left: s, bottom: c, right: l } = yE(t, a), u = -Math.floor(o), d = -Math.floor(s), f = `${u}px ${-Math.floor(i - l)}px ${-Math.floor(r - c)}px ${d}px`;
			this.boundingClientRect = a, iE(this, XE, new IntersectionObserver((e) => {
				let [n] = e, { intersectionRect: r } = n;
				(n.intersectionRatio === 1 ? wC.intersectionRatio(r, yE(t)) : n.intersectionRatio) !== 1 && Q(this, eD).call(this);
			}, {
				threshold: GE,
				rootMargin: f,
				root: n
			})), Q(this, XE).observe(t), aE(this, tD, nD).call(this);
		}, KE)), this.boundingClientRect = e.getBoundingClientRect(), iE(this, qE, VE(e, this.boundingClientRect));
		let r = !0;
		this.callback = (e) => {
			r && (r = !1, n.skipInitial) || t(e);
		};
		let i = e.ownerDocument;
		n?.debug && (iE(this, QE, document.createElement("div")), Q(this, QE).style.background = "rgba(0,0,0,0.15)", Q(this, QE).style.position = "fixed", Q(this, QE).style.pointerEvents = "none", i.body.appendChild(Q(this, QE))), iE(this, ZE, new IntersectionObserver((t) => {
			var n, r;
			let { boundingClientRect: i, isIntersecting: a } = t[t.length - 1], { width: o, height: s } = i, c = Q(this, qE);
			iE(this, qE, a), (o || s) && (c && !a ? ((n = Q(this, XE)) == null || n.disconnect(), this.callback(null), (r = Q(this, YE)) == null || r.disconnect(), iE(this, YE, void 0), Q(this, QE) && (Q(this, QE).style.visibility = "hidden")) : Q(this, eD).call(this), a && !Q(this, YE) && (iE(this, YE, new WE(Q(this, eD))), Q(this, YE).observe(e)));
		}, {
			threshold: GE,
			root: i
		})), Q(this, qE) && !n.skipInitial && this.callback(this.boundingClientRect), Q(this, ZE).observe(e);
	}
};
qE = /* @__PURE__ */ new WeakMap(), JE = /* @__PURE__ */ new WeakMap(), YE = /* @__PURE__ */ new WeakMap(), XE = /* @__PURE__ */ new WeakMap(), ZE = /* @__PURE__ */ new WeakMap(), QE = /* @__PURE__ */ new WeakMap(), $E = /* @__PURE__ */ new WeakMap(), eD = /* @__PURE__ */ new WeakMap(), tD = /* @__PURE__ */ new WeakSet(), nD = function() {
	Q(this, $E) || (aE(this, tD, rD).call(this), BE(this.boundingClientRect, Q(this, JE)) || (this.callback(this.boundingClientRect), iE(this, JE, this.boundingClientRect)));
}, rD = function() {
	if (Q(this, QE)) {
		let { top: e, left: t, width: n, height: r } = yE(this.element);
		Q(this, QE).style.overflow = "hidden", Q(this, QE).style.visibility = "visible", Q(this, QE).style.top = `${Math.floor(e)}px`, Q(this, QE).style.left = `${Math.floor(t)}px`, Q(this, QE).style.width = `${Math.floor(n)}px`, Q(this, QE).style.height = `${Math.floor(r)}px`;
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
			if (!Q(this, dD) && e.target && "contains" in e.target && typeof e.target.contains == "function") {
				for (let t of Q(this, fD)) if (e.target.contains(t)) {
					this.callback(Q(this, uD).boundingClientRect);
					break;
				}
			}
		}, KE));
		let r = LE(e), i = cD(r, t), a = lD(e, Q(this, pD));
		iE(this, fD, r), iE(this, uD, new iD(e, t, n)), this.disconnect = () => {
			Q(this, dD) || (iE(this, dD, !0), i(), a(), Q(this, uD).disconnect());
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
		return typeof r == "string" && n.test(r);
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
	}
	if (e.startsWith("matrix(")) {
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
	let { x: o, y: s } = t, { rect: c, isTop: l, isBottom: u, isLeft: d, isRight: f } = vD(e), p = MD(e), m = ID(TD(e, !0)), h = m !== null && m?.scaleX < 0, g = m !== null && m?.scaleY < 0, _ = new wC(c.left * p.scaleX + p.x, c.top * p.scaleY + p.y, c.width * p.scaleX, c.height * p.scaleY), v = {
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
// node_modules/.pnpm/@dnd-kit+dom@0.3.2/node_modules/@dnd-kit/dom/index.js
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
			return $(this, a);
		},
		set [n](e) {
			return FO(this, a, e);
		}
	}, n));
	d ? p && d < 4 && CO(a, (d > 2 ? "set " : d > 1 ? "get " : "") + n) : CO(i, n);
	for (var y = r.length - 1; y >= 0; y--) l = OO(d, n, c = {}, e[3], _), d && (l.static = f, l.private = p, u = l.access = { has: p ? (e) => NO(i, e) : (e) => n in e }, d ^ 3 && (u.get = p ? (e) => (d ^ 1 ? $ : IO)(e, i, d ^ 4 ? a : v.get) : (e) => e[n]), d > 2 && (u.set = p ? (e, t) => FO(e, i, t, d ^ 4 ? a : v.set) : (e, t) => e[n] = t)), s = (0, r[y])(d ? d < 4 ? p ? a : v[h] : d > 4 ? void 0 : {
		get: v.get,
		set: v.set
	} : i, l), c._ = 1, d ^ 4 || s === void 0 ? DO(s) && (d > 4 ? g.unshift(s) : d ? p ? a = s : v[h] = s : i = s) : typeof s != "object" || !s ? yO("Object expected") : (DO(o = s.get) && (v.get = o), DO(o = s.set) && (v.set = o), DO(o = s.init) && g.unshift(o));
	return d || kO(e, i), v && dO(i, n, v), p ? d ^ 4 ? a : v : i;
}, MO = (e, t, n) => t.has(e) || yO("Cannot " + n), NO = (e, t) => Object(t) === t ? e.has(t) : yO("Cannot use the \"in\" operator on this value"), $ = (e, t, n) => (MO(e, t, "read from private field"), n ? n.call(e) : t.get(e)), PO = (e, t, n) => t.has(e) ? yO("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), FO = (e, t, n, r) => (MO(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), IO = (e, t, n) => (MO(e, t, "access private method"), n), LO = {
	role: "button",
	roleDescription: "draggable"
}, RO = "dnd-kit-description", zO = "dnd-kit-announcement", BO = { draggable: "To pick up a draggable item, press the space bar. While dragging, use the arrow keys to move the item in a given direction. Press space again to drop the item in its new position, or press escape to cancel." }, VO = {
	dragstart({ operation: { source: e } }) {
		if (e) return `Picked up draggable item ${e.id}.`;
	},
	dragover({ operation: { source: e, target: t } }) {
		if (e && e.id !== t?.id) return t ? `Draggable item ${e.id} was moved over droppable target ${t.id}.` : `Draggable item ${e.id} is no longer over a droppable target.`;
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
			f && e && f?.nodeValue !== e && (f.nodeValue = e);
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
					u && d || y.add(v), HO(t) && !CE() || t.hasAttribute("tabindex") || y.add(() => t.setAttribute("tabindex", "0")), !t.hasAttribute("role") && t.tagName.toLowerCase() !== "button" && y.add(() => t.setAttribute("role", LO.role)), t.hasAttribute("aria-roledescription") || y.add(() => t.setAttribute("aria-roledescription", LO.roleDescription)), t.hasAttribute("aria-describedby") || y.add(() => t.setAttribute("aria-describedby", c));
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
}, YO = /* @__PURE__ */ new Map(), XO, ZO, QO, $O, ek, tk, nk, rk, ik, ak, ok, sk, ck, lk = class extends (ek = mw, $O = [J], QO = [TS], ZO = [TS], XO = [TS], ek) {
	constructor(e) {
		super(e), AO(nk, 5, this), PO(this, ik), PO(this, tk, /* @__PURE__ */ new Set()), PO(this, rk, AO(nk, 8, this, /* @__PURE__ */ new Set())), AO(nk, 11, this), this.registerEffect(IO(this, ik, ak));
	}
	register(e) {
		return $(this, tk).add(e), () => {
			$(this, tk).delete(e);
		};
	}
	addRoot(e) {
		return q(() => {
			let t = new Set(this.additionalRoots);
			t.add(e), this.additionalRoots = t;
		}), () => {
			q(() => {
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
	for (let n of e) for (let e of $(this, tk)) t.push(IO(this, ik, ok).call(this, n, e));
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
	return q(() => {
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
	return e === t || IE(e) === IE(t);
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
var jk, Mk, Nk, Pk, Fk, Ik, Lk, Rk = class extends (Mk = pw, jk = [J], Mk) {
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
	let b = new nO(u), { transition: x, translate: S, boxSizing: C, paddingBlockStart: w, paddingBlockEnd: T, paddingInlineStart: E, paddingInlineEnd: D, borderInlineStartWidth: O, borderInlineEndWidth: k, borderBlockStartWidth: A, borderBlockEndWidth: j } = TD(s), ee = c === "clone", te = C === "content-box", M = te ? parseInt(E) + parseInt(D) + parseInt(O) + parseInt(k) : 0, N = te ? parseInt(w) + parseInt(T) + parseInt(A) + parseInt(j) : 0, P = c !== "move" && !this.overlay ? vk(a, ee ? "clone" : "hidden") : null, ne = q(() => iO(t.dragOperation.activatorEvent));
	if (S !== "none") {
		let e = FD(S);
		e && !l.translate && (l.translate = e);
	}
	if (!l.transformOrigin) {
		let e = q(() => i.current);
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
	let ue = q(() => r.transform), de = l.translate ?? {
		x: 0,
		y: 0
	}, fe = ue.x * d.scaleX + de.x, pe = ue.y * d.scaleY + de.y, me = wE();
	b.set({
		width: g - M,
		height: _ - N,
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
		widthOffset: M,
		heightOffset: N,
		delta: ce,
		styles: b,
		dragOperation: r,
		getElementMutationObserver: () => he,
		getSavedCellWidths: () => _e,
		setSavedCellWidths: (e) => {
			_e = e;
		}
	}), ye = new $D(u);
	q(() => r.shape = ye);
	let be = dE(u), xe = (e) => {
		this.manager.actions.stop({ event: e });
	}, Se = DE(be);
	ne && be.addEventListener("resize", xe), q(() => a.status) === "idle" && requestAnimationFrame(() => a.status = "dragging"), P && (ve.observe(P), he = Tk(s, P, ee), ge = Ek(s, P, u));
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
	}, Ee = n?.dropAnimation, F = this, I = DS(() => {
		let { transform: t, status: n } = r;
		if ((t.x || t.y || e.current.translate) && n.dragging) {
			let n = l.translate ?? {
				x: 0,
				y: 0
			}, i = {
				x: t.x / d.scaleX + n.x,
				y: t.y / d.scaleY + n.y
			}, a = e.current.translate, o = q(() => r.modifiers), s = q(() => r.shape?.current), c = ne && !Se ? "250ms cubic-bezier(0.25, 1, 0.5, 1)" : "0ms linear";
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
			let n = F.dropAnimation === void 0 ? Ee : F.dropAnimation, r = e.current.translate, i = r != null;
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
		Te(), I();
	};
}, jO(Nk, 4, "overlay", jk, Rk, Pk), kO(Nk, Rk), Rk.configure = sw(Rk);
var zk = Rk, Bk = !0, Vk = !1, Hk, Uk, Wk = [J], Gk = RD.Forward, Kk, qk, Jk;
Uk = (Hk = [J], RD.Reverse);
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
				Dx(() => {
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
var eA, tA, nA, rA, iA, aA, oA = class extends (tA = mw, eA = [J], tA) {
	constructor(e) {
		super(e), PO(this, rA, AO(nA, 8, this, !1)), AO(nA, 11, this), PO(this, iA), PO(this, aA, () => {
			if (!$(this, iA)) return;
			let { element: e, by: t } = $(this, iA);
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
								let t = $(this, iA)?.by;
								if (this.autoScrolling && t && (t.x && !a || t.y && !s)) continue;
								return FO(this, iA, {
									element: e,
									by: {
										x: a,
										y: s
									}
								}), xD.schedule($(this, aA)), !0;
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
			!this.disabled && !t.defaultPrevented && iO(e.dragOperation.activatorEvent) && t.by && this.scroll({ by: t.by }) && t.preventDefault();
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
			if (r.dragging) {
				if (n.scroll()) {
					n.autoScrolling = !0;
					let e = setInterval(() => cA.schedule(n.scroll), lA);
					return () => {
						clearInterval(e);
					};
				}
				n.autoScrolling = !1;
			}
		});
	}
}, dA = {
	capture: !0,
	passive: !0
}, fA, pA = class extends mw {
	constructor(e) {
		super(e), PO(this, fA), this.handleScroll = () => {
			$(this, fA) ?? FO(this, fA, setTimeout(() => {
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
		$(this, _A).push(...o);
	}
	handleKeyDown(e, t, n) {
		let { keyboardCodes: r = gA.keyboardCodes } = n ?? {};
		if (bA(e, [...r.end, ...r.cancel])) {
			e.preventDefault();
			let t = bA(e, r.cancel);
			this.handleEnd(e, t);
		} else bA(e, r.up) ? this.handleMove("up", e) : bA(e, r.down) && this.handleMove("down", e), bA(e, r.left) ? this.handleMove("left", e) : bA(e, r.right) && this.handleMove("right", e);
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
				case "right": i = {
					x: a.x * r,
					y: 0
				};
			}
			(i.x || i.y) && (t.preventDefault(), this.manager.actions.move({
				event: t,
				by: i
			}));
		}
	}
	sideEffects() {
		let e = this.manager.registry.plugins.get(uA);
		e?.disabled === !1 && (e.disable(), $(this, _A).push(() => {
			e.enable();
		}));
	}
	cleanup() {
		$(this, _A).forEach((e) => e()), FO(this, _A, []);
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
				if (!$(this, xA)) return;
				let { x: t, y: n } = bE(e), r = {
					x: t - $(this, xA).x,
					y: n - $(this, xA).y
				}, { tolerance: i } = this.options;
				if (i && MC(r, i)) {
					this.abort();
					return;
				}
				MC(r, this.options.value) && this.activate(e);
				break;
			case "pointerup": this.abort();
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
				if (!$(this, wA)) return;
				let { x: t, y: n } = bE(e);
				MC({
					x: t - $(this, wA).x,
					y: n - $(this, wA).y
				}, this.options.tolerance) && this.abort();
				break;
			case "pointerup": this.abort();
		}
	}
	abort() {
		$(this, CA) && (clearTimeout($(this, CA)), FO(this, wA, void 0), FO(this, CA, void 0));
	}
};
CA = /* @__PURE__ */ new WeakMap(), wA = /* @__PURE__ */ new WeakMap();
var EA = class {};
EA.Delay = TA, EA.Distance = SA;
var DA = Object.freeze({
	activationConstraints(e, t) {
		let { pointerType: n, target: r } = e;
		if (n !== "mouse" || !rO(r) || t.handle !== r && !t.handle?.contains(r)) return n === "touch" ? [new EA.Delay({
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
			e && t && this.manager.actions.move({
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
		$(this, OA).add(() => {
			f(), this.initialCoordinates = void 0;
		});
	}
	handlePointerMove(e, t) {
		var n;
		if (this.controller?.activated === !1) (n = this.controller) == null || n.onEvent(e);
		else if (this.manager.dragOperation.status.dragging) {
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
		$(this, OA).add(o);
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
		}, $(this, OA).forEach((e) => e()), $(this, OA).clear();
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
	e && !PA.has(e) && (e.addEventListener("touchmove", NA, {
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
}, RA, zA, BA, VA, HA, UA, WA, GA, KA = class extends (VA = sT, BA = [J], zA = [J], RA = [J], VA) {
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
var qA, JA, YA, XA, ZA, QA, $A, ej, tj, nj, rj = class extends (YA = xT, JA = [J], qA = [J], YA) {
	constructor(e, t) {
		var n = e, { element: r, effects: i = () => [] } = n, a = wO(n, ["element", "effects"]);
		let { collisionDetector: o = $T } = a, s = (e) => {
			let { manager: t, element: n } = this;
			if (!n || e === null) {
				this.shape = void 0;
				return;
			}
			if (!t) return;
			let r = new $D(n), i = q(() => this.shape);
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
		return this.proxy ?? $(this, tj, $A);
	}
};
XA = TO(YA), ZA = /* @__PURE__ */ new WeakMap(), tj = /* @__PURE__ */ new WeakSet(), nj = /* @__PURE__ */ new WeakMap(), QA = jO(XA, 20, "#element", JA, tj, ZA), $A = QA.get, ej = QA.set, jO(XA, 4, "proxy", qA, rj, nj), kO(XA, rj);
// node_modules/.pnpm/@dnd-kit+dom@0.3.2/node_modules/@dnd-kit/dom/sortable.js
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
				Dx(() => {
					for (let e of a.droppables) {
						let { id: t } = e;
						if (!e.accepts(c) || t === l?.id && kj(e) || !e.element) continue;
						let n = e.shape, r = new $D(e.element, { getBoundingClientRect: (e) => yE(e, void 0, .2) });
						r.height && r.width && (s == "down" && u.y + Aj < r.center.y || s == "up" && u.y - Aj > r.center.y || s == "left" && u.x - Aj > r.center.x || s == "right" && u.x + Aj < r.center.x) && (d.push(e), e.shape = r, f.push(() => e.shape = n));
					}
				}), e.preventDefault(), i.disable();
				let p = i.computeCollisions(d, eE);
				Dx(() => f.forEach((e) => e()));
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
			c && l && queueMicrotask(() => {
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
					n.collisionObserver.disable(), Jj(u, v, d, y), Dx(() => {
						for (let [e, t] of _[m].entries()) t.index = e;
						if (!s) for (let [e, t] of _[h].entries()) t.group = a.sortable.group, t.index = e;
					}), n.actions.setDropTarget(i.id).then(() => n.collisionObserver.enable());
				});
			});
		}), e.monitor.addEventListener("dragend", (e, n) => {
			if (!e.canceled) return;
			let { dragOperation: r } = n, { source: i } = r;
			kj(i) && (i.sortable.initialIndex !== i.sortable.index || i.sortable.initialGroup !== i.sortable.group) && queueMicrotask(() => {
				let e = t(), r = e.get(i.sortable.initialGroup);
				r && n.renderer.rendering.then(() => {
					for (let [t, n] of e.entries()) {
						let e = Array.from(n).entries();
						for (let [n, r] of e) if (r.index !== n || r.group !== t) return;
					}
					let t = Xj(r), n = i.sortable.element, a = t[i.sortable.initialIndex], o = a?.element;
					a && o && n && (Jj(n, a.index, o, i.index), Dx(() => {
						for (let [t, n] of e.entries()) {
							let e = Array.from(n).values();
							for (let t of e) t.index = t.initialIndex, t.group = t.initialGroup;
						}
					}));
				});
			});
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
}, $j = new ZS(), eM, tM = [J], nM, rM, iM, aM, oM, sM;
eM = [J];
var cM = class {
	constructor(e, t) {
		Dj(this, rM, Cj(nM, 8, this)), Cj(nM, 11, this), Dj(this, iM), Dj(this, aM), Dj(this, oM, Cj(nM, 12, this)), Cj(nM, 15, this), Dj(this, sM), this.register = () => (Dx(() => {
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
					e?.initializing && this.id === this.manager?.dragOperation.source?.id && $j.clear(this.manager), e?.dragging && $j.set(this.manager, this.id, q(() => ({
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
		q(() => {
			let { manager: e, transition: t } = this, { shape: n } = this.droppable;
			if (!e) return;
			let { idle: r } = e.dragOperation.status;
			n && t && (!r || t.idle) && e.renderer.rendering.then(() => {
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
		Dx(() => {
			this.draggable.manager = e, this.droppable.manager = e;
		});
	}
	set element(e) {
		Dx(() => {
			let t = Ej(this, sM), n = this.droppable.element, r = this.draggable.element;
			n && n !== t || (this.droppable.element = e), r && r !== t || (this.draggable.element = e), Oj(this, sM, e);
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
		this.droppable.collisionDetector = e ?? $T;
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
// node_modules/.pnpm/@dnd-kit+react@0.3.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@dnd-kit/react/utilities.js
function dM(e) {
	return typeof e == "object" && !!e && "current" in e;
}
function fM(e) {
	if (e != null) return dM(e) ? e.current ?? void 0 : e;
}
// node_modules/.pnpm/@dnd-kit+react@0.3.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@dnd-kit/react/hooks.js
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
		if (!e) n.current.clear();
		else return Yx(() => {
			let i = !1, a = !1;
			for (let r of n.current) {
				let [o] = r, s = q(() => r[1]), c = e[o];
				s !== c && (i = !0, n.current.set(o, c), a = t?.(o, s, c) ?? !1);
			}
			i && (a ? (0, Ae.flushSync)(r) : r());
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
// node_modules/.pnpm/@dnd-kit+react@0.3.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@dnd-kit/react/index.js
var bM = Object.getOwnPropertySymbols, xM = Object.prototype.hasOwnProperty, SM = Object.prototype.propertyIsEnumerable, CM = (e, t) => {
	var n = {};
	for (var r in e) xM.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && bM) for (var r of bM(e)) t.indexOf(r) < 0 && SM.call(e, r) && (n[r] = e[r]);
	return n;
}, wM = new LA(), TM = (0, I.createContext)(wM), EM = (0, I.memo)((0, I.forwardRef)(({ children: e }, t) => {
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
})), DM = [void 0, wS];
function OM(e) {
	var t = e, { children: n, onCollision: r, onBeforeDragStart: i, onDragStart: a, onDragMove: o, onDragOver: s, onDragEnd: c } = t, l = CM(t, [
		"children",
		"onCollision",
		"onBeforeDragStart",
		"onDragStart",
		"onDragMove",
		"onDragOver",
		"onDragEnd"
	]);
	let u = (0, I.useRef)(null), { plugins: d, modifiers: f, sensors: p } = l, m = YT(d, IA.plugins), h = YT(p, IA.sensors), g = YT(f, IA.modifiers), _ = _M(i), v = _M(a), y = _M(s), b = _M(o), x = _M(c), S = _M(r), C = kM(() => l.manager ?? new LA(l));
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
	}, [C]), vM(m, () => C && (C.plugins = m), ...DM), vM(h, () => C && (C.sensors = h), ...DM), vM(g, () => C && (C.modifiers = g), ...DM), /* @__PURE__ */ (0, L.jsxs)(TM.Provider, {
		value: C,
		children: [/* @__PURE__ */ (0, L.jsx)(EM, {
			ref: u,
			children: n
		}), n]
	});
}
function kM(e) {
	let t = (0, I.useRef)(null);
	return t.current ||= e(), (0, I.useInsertionEffect)(() => () => t.current?.destroy(), []), t.current;
}
function AM() {
	return (0, I.useContext)(TM);
}
function jM(e) {
	let t = AM() ?? void 0, [n] = (0, I.useState)(() => e(t));
	return n.manager !== t && (n.manager = t), pM(n.register, [t, n]), n;
}
var MM = Object.create, NM = Object.defineProperty, PM = Object.getOwnPropertyDescriptor, FM = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e), IM = (e) => {
	throw TypeError(e);
}, LM = (e, t, n) => t in e ? NM(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, RM = (e) => [
	,
	,
	,
	MM(e?.[FM("metadata")] ?? null)
], zM = [
	"class",
	"method",
	"getter",
	"setter",
	"accessor",
	"field",
	"value",
	"get",
	"set"
], BM = (e) => e !== void 0 && typeof e != "function" ? IM("Function expected") : e, VM = (e, t, n, r, i) => ({
	kind: zM[e],
	name: t,
	metadata: r,
	addInitializer: (e) => n._ ? IM("Already initialized") : i.push(BM(e || null))
}), HM = (e, t) => LM(t, FM("metadata"), e[3]), UM = (e, t, n, r) => {
	for (var i = 0, a = e[t >> 1], o = a && a.length; i < o; i++) a[i].call(n);
	return r;
}, WM = (e, t, n, r, i, a) => {
	for (var o, s, c, l, u = t & 7, d = !1, f = !1, p = 2, m = zM[u + 5], h = e[p] || (e[p] = []), g = (i = i.prototype, PM(i, n)), _ = r.length - 1; _ >= 0; _--) c = VM(u, n, s = {}, e[3], h), c.static = d, c.private = f, l = c.access = { has: (e) => n in e }, l.get = (e) => e[n], o = (0, r[_])(g[m], c), s._ = 1, BM(o) && (g[m] = o);
	return g && NM(i, n, g), i;
}, GM = (e, t, n) => t.has(e) || IM("Cannot " + n), KM = (e, t, n) => (GM(e, t, "read from private field"), t.get(e)), qM = (e, t, n) => t.has(e) ? IM("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), JM = (e, t, n, r) => (GM(e, t, "write to private field"), t.set(e, n), n), YM = class e {
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
}, XM, ZM, QM, $M, eN, tN = class extends (QM = JS, ZM = [TS], XM = [TS], QM) {
	constructor(e) {
		let t = YM.from(e);
		super(t, (e, t) => YM.equals(e, t)), UM(eN, 5, this), qM(this, $M, 0), this.velocity = {
			x: 0,
			y: 0
		};
	}
	get delta() {
		return YM.delta(this.current, this.initial);
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
		let { current: t } = this, n = YM.from(e), r = {
			x: n.x - t.x,
			y: n.y - t.y
		}, i = Date.now(), a = i - KM(this, $M), o = (e) => Math.round(e / a * 100);
		Dx(() => {
			JM(this, $M, i), this.velocity = {
				x: o(r.x),
				y: o(r.y)
			}, super.current = n;
		});
	}
	reset(e = this.defaultValue) {
		super.reset(YM.from(e)), this.velocity = {
			x: 0,
			y: 0
		};
	}
};
eN = RM(QM), $M = /* @__PURE__ */ new WeakMap(), WM(eN, 2, "delta", ZM, tN), WM(eN, 2, "direction", XM, tN), HM(eN, tN);
var nN = /* @__PURE__ */ ((e) => (e.Horizontal = "x", e.Vertical = "y", e))(nN || {});
Object.values(nN);
// node_modules/.pnpm/@dnd-kit+react@0.3.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@dnd-kit/react/sortable.js
var rN = Object.defineProperty, iN = Object.defineProperties, aN = Object.getOwnPropertyDescriptors, oN = Object.getOwnPropertySymbols, sN = Object.prototype.hasOwnProperty, cN = Object.prototype.propertyIsEnumerable, lN = (e, t, n) => t in e ? rN(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, uN = (e, t) => {
	for (var n in t ||= {}) sN.call(t, n) && lN(e, n, t[n]);
	if (oN) for (var n of oN(t)) cN.call(t, n) && lN(e, n, t[n]);
	return e;
}, dN = (e, t) => iN(e, aN(t));
function fN(e) {
	let { accept: t, collisionDetector: n, collisionPriority: r, id: i, data: a, element: o, handle: s, index: c, group: l, disabled: u, feedback: d, modifiers: f, sensors: p, target: m, type: h } = e, g = uN(uN({}, Qj), e.transition), _ = jM((t) => new cM(dN(uN({}, e), {
		transition: g,
		register: !1,
		handle: fM(s),
		element: fM(o),
		target: fM(m),
		feedback: d
	}), t)), v = hM(_, pN);
	return vM(i, () => _.id = i), pM(() => {
		Dx(() => {
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
			(e || !_.element?.isConnected || _.manager?.dragOperation.status.idle) && (_.element = e ?? void 0);
		}, [_]),
		sourceRef: (0, I.useCallback)((e) => {
			(e || !_.source?.isConnected || _.manager?.dragOperation.status.idle) && (_.source = e ?? void 0);
		}, [_]),
		targetRef: (0, I.useCallback)((e) => {
			(e || !_.target?.isConnected || _.manager?.dragOperation.status.idle) && (_.target = e ?? void 0);
		}, [_])
	};
}
function pN(e, t, n) {
	return !(e !== "isDragSource" || n || !t);
}
// node_modules/.pnpm/@dnd-kit+helpers@0.3.2/node_modules/@dnd-kit/helpers/dist/index.js
var mN = Object.defineProperty, hN = Object.defineProperties, gN = Object.getOwnPropertyDescriptors, _N = Object.getOwnPropertySymbols, vN = Object.prototype.hasOwnProperty, yN = Object.prototype.propertyIsEnumerable, bN = (e, t, n) => t in e ? mN(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, xN = (e, t) => {
	for (var n in t ||= {}) vN.call(t, n) && bN(e, n, t[n]);
	if (_N) for (var n of _N(t)) yN.call(t, n) && bN(e, n, t[n]);
	return e;
}, SN = (e, t) => hN(e, gN(t));
function CN(e, t, n) {
	if (t === n) return e;
	let r = e.slice();
	return r.splice(n, 0, r.splice(t, 1)[0]), r;
}
function wN(e) {
	return "initialIndex" in e && typeof e.initialIndex == "number" && "index" in e && typeof e.index == "number";
}
function TN(e, t, n) {
	let { source: r, target: i, canceled: a } = t.operation;
	if (!r || !i || a) return "preventDefault" in t && t.preventDefault(), e;
	let o = (e, t) => e === t || typeof e == "object" && "id" in e && e.id === t;
	if (Array.isArray(e)) {
		let s = e.findIndex((e) => o(e, r.id)), c = e.findIndex((e) => o(e, i.id));
		if (s === -1 || c === -1) {
			if (wN(r)) {
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
	if (c === -1 && wN(r)) {
		let i = r.initialGroup, a = r.initialIndex, o = r.group, s = r.index;
		if (i == null || o == null || !(i in e) || !(o in e) || i === o && a === s) return "preventDefault" in t && t.preventDefault(), e;
		if (i === o) return SN(xN({}, e), { [i]: n(e[i], a, s) });
		let c = e[i][a];
		return SN(xN({}, e), {
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
		if (l != null && l === d && c === u && wN(r)) {
			let t = r.group != null && r.group !== l, i = r.index !== c;
			if (t || i) {
				let t = r.group ?? l;
				if (t in e) {
					if (l === t) return SN(xN({}, e), { [l]: n(e[l], c, r.index) });
					let i = e[l][c];
					return SN(xN({}, e), {
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
	if (l === d) return SN(xN({}, e), { [l]: n(e[l], c, u) });
	let m = i.shape && Math.round(p.y) > Math.round(i.shape.center.y) ? 1 : 0, h = e[l][c];
	return SN(xN({}, e), {
		[l]: [...e[l].slice(0, c), ...e[l].slice(c + 1)],
		[d]: [
			...e[d].slice(0, u + m),
			h,
			...e[d].slice(u + m)
		]
	});
}
function EN(e, t) {
	return TN(e, t, CN);
}
// src/card/common/studio-ui/CardListEditor.tsx
function DN({ id: e, cardName: t, index: n, active: r, canDelete: i, onSelect: a, onDelete: o }) {
	let { ref: s } = fN({
		id: e,
		index: n
	});
	return /* @__PURE__ */ (0, L.jsxs)("div", {
		ref: s,
		className: "d-flex justify-content-between p-2 border rounded-sm" + (r ? " bg-light-300" : ""),
		onClick: a,
		children: [/* @__PURE__ */ (0, L.jsx)("div", { children: t }), /* @__PURE__ */ (0, L.jsxs)("div", {
			className: "d-flex align-items-center",
			children: [i && /* @__PURE__ */ (0, L.jsx)("button", {
				className: "btn btn-link p-0 text-danger",
				"aria-label": "Delete card",
				onClick: (e) => {
					e.stopPropagation(), o();
				},
				children: /* @__PURE__ */ (0, L.jsx)("span", {
					className: "material-icons-outlined",
					children: "delete_outline"
				})
			}), /* @__PURE__ */ (0, L.jsx)("span", {
				className: "material-icons-outlined text-light-600",
				children: "drag_indicator"
			})]
		})]
	});
}
function ON({ enableCardOrientation: e = !1 }) {
	let { values: t, setFieldValue: n } = ey(), [r, i] = (0, I.useState)(0);
	return /* @__PURE__ */ (0, L.jsx)(OM, {
		onDragOver: (e) => n("cards", EN(t.cards, e)),
		children: /* @__PURE__ */ (0, L.jsx)(Ny, {
			name: "cards",
			children: ({ push: n, remove: a }) => /* @__PURE__ */ (0, L.jsxs)("div", {
				className: "row m-0 carousel-editor",
				children: [/* @__PURE__ */ (0, L.jsxs)("div", {
					className: "col-3 p-2 border-right",
					children: [/* @__PURE__ */ (0, L.jsx)(A, {
						variant: "primary",
						iconBefore: Wr,
						onClick: () => {
							n(Py(t.cards, e ? { orientation: "HORIZONTAL" } : {})), i(t.cards.length);
						},
						children: "Add Card"
					}), /* @__PURE__ */ (0, L.jsx)("div", {
						className: "mt-4",
						children: t.cards.map((e, n) => /* @__PURE__ */ (0, L.jsx)(DN, {
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
				}), /* @__PURE__ */ (0, L.jsx)("div", {
					className: "col-9 p-4",
					children: t.cards.length > 0 && /* @__PURE__ */ (0, L.jsx)(wx, {
						cardIndex: r,
						enableOrientation: e
					})
				})]
			})
		})
	});
}
// src/card/common/studio-ui/ModalFooter.tsx
function kN({ showingEditor: e, onContinue: t }) {
	let { runtime: n } = (0, I.useContext)(u);
	return /* @__PURE__ */ (0, L.jsx)(eu.Footer, {
		className: "border-top",
		style: { zIndex: "3" },
		children: /* @__PURE__ */ (0, L.jsxs)(be, {
			direction: "horizontal",
			gap: 4,
			children: [/* @__PURE__ */ (0, L.jsx)(A, {
				variant: "light",
				className: "action-button",
				onClick: () => n.notify("cancel", {}),
				type: "button",
				children: "Cancel"
			}), e ? /* @__PURE__ */ (0, L.jsx)(A, {
				variant: "primary",
				type: "submit",
				className: "save-button",
				children: "Save"
			}) : /* @__PURE__ */ (0, L.jsx)(A, {
				type: "button",
				variant: "primary",
				className: "save-button",
				onClick: t,
				children: "Continue"
			})]
		})
	});
}
// src/shared/components/JsonImporter.tsx
function AN({ error: e }) {
	return /* @__PURE__ */ (0, L.jsx)("ul", {
		className: "mb-0 pl-3",
		children: Object.entries(e).map(([e, t]) => /* @__PURE__ */ (0, L.jsxs)("li", { children: [e, /* @__PURE__ */ (0, L.jsx)("ul", { children: t.map((e) => /* @__PURE__ */ (0, L.jsx)("li", { children: /* @__PURE__ */ (0, L.jsx)("code", { children: e }) }, e)) })] }, e))
	});
}
function jN({ liveData: e }) {
	let [t, n] = (0, I.useState)(null), { runtime: r, element: i } = (0, I.useContext)(u);
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
	let o = async ({ fileData: e, handleError: t }) => {
		let a = r.handlerUrl(i, "studio_save");
		r.notify("save", { state: "start" }), n(null);
		let o = await e.get("file").text();
		try {
			await C({
				url: a,
				data: o
			}), r.notify("save", { state: "end" });
		} catch (e) {
			let r = e;
			t(/* @__PURE__ */ Error("Upload rejected.")), n(r.responseJSON?.error ?? r.responseText);
		}
	}, s = (e) => {
		let t = new Blob([JSON.stringify(e, null, 2)], { type: "application/json" }), n = URL.createObjectURL(t), r = document.createElement("a");
		r.href = n, r.download = "data.json", document.body.appendChild(r), r.click(), document.body.removeChild(r), setTimeout(() => URL.revokeObjectURL(n), 100);
	};
	return /* @__PURE__ */ (0, L.jsxs)("div", {
		className: "p-3",
		children: [
			/* @__PURE__ */ (0, L.jsxs)(U.Group, { children: [/* @__PURE__ */ (0, L.jsx)(U.Label, { children: "Update Component using JSON file" }), /* @__PURE__ */ (0, L.jsx)(Rf, {
				onProcessUpload: o,
				accept: { "application/json": [".json"] },
				validator: a
			})] }),
			t && /* @__PURE__ */ (0, L.jsxs)(zr, {
				variant: "danger",
				className: "mt-3",
				children: [/* @__PURE__ */ (0, L.jsx)(zr.Heading, { children: "JSON validation failed!" }), typeof t == "string" ? /* @__PURE__ */ (0, L.jsx)("p", {
					className: "mb-0",
					children: t
				}) : /* @__PURE__ */ (0, L.jsx)(AN, { error: t })]
			}),
			/* @__PURE__ */ (0, L.jsxs)("div", {
				className: "mt-3",
				children: [
					/* @__PURE__ */ (0, L.jsx)("h4", { children: "JSON Templates" }),
					/* @__PURE__ */ (0, L.jsxs)("p", { children: [
						/* @__PURE__ */ (0, L.jsx)(A, {
							variant: "secondary",
							className: "m-2",
							onClick: () => s(e),
							children: "Download component data"
						}),
						/* @__PURE__ */ (0, L.jsx)("br", {}),
						/* @__PURE__ */ (0, L.jsx)("small", { children: "The component data files contain the data of the current component without any schema information." })
					] }),
					/* @__PURE__ */ (0, L.jsxs)("p", { children: [
						/* @__PURE__ */ (0, L.jsx)("a", {
							className: "m-2 btn btn-secondary",
							href: r.handlerUrl(i, "json_schema"),
							children: "Download Schema"
						}),
						/* @__PURE__ */ (0, L.jsx)("br", {}),
						/* @__PURE__ */ (0, L.jsx)("small", { children: "Schema files are useful for validating the JSON using external systems." })
					] })
				]
			})
		]
	});
}
// src/shared/components/constants.ts
var MN = [
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
// src/shared/components/StudioHeader.tsx
function NN({ title: e, onTitleChange: t, activeTab: n, tabs: r = MN }) {
	let [i, a] = (0, I.useState)(!1);
	return /* @__PURE__ */ (0, L.jsx)(eu.Header, {
		className: "shadow-sm studio-header",
		children: /* @__PURE__ */ (0, L.jsxs)("div", {
			className: "d-flex flex-row justify-content-between",
			children: [
				/* @__PURE__ */ (0, L.jsx)(Me, { children: i ? /* @__PURE__ */ (0, L.jsx)(U.Control, {
					type: "text",
					name: "studio-title",
					"aria-label": "Display name",
					value: e,
					onChange: (e) => t(e.target.value),
					onBlur: () => a(!1),
					onKeyDown: (e) => {
						(e.key === "Enter" || e.key === "Escape") && (a(!1), e.preventDefault());
					}
				}) : /* @__PURE__ */ (0, L.jsx)("h3", {
					className: "h3 col pl-0",
					children: /* @__PURE__ */ (0, L.jsxs)("div", {
						className: "d-flex flex-row align-items-center mt-1",
						children: [
							"Editing: ",
							e || "<Untitled>",
							/* @__PURE__ */ (0, L.jsx)(ue, {
								alt: "Edit display name",
								className: "studio-header-title-edit",
								size: "sm",
								src: Yr,
								onClick: () => a(!0)
							})
						]
					})
				}) }),
				/* @__PURE__ */ (0, L.jsx)(Me.Spacer, {}),
				/* @__PURE__ */ (0, L.jsx)(_u, {
					role: "tablist",
					variant: "button-group",
					activeKey: n,
					className: "studio-header-tabs-nav pgn__tabs",
					"aria-label": "Editor Sections",
					children: r.map(({ key: e, label: t }) => /* @__PURE__ */ (0, L.jsx)(_u.Link, {
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
// src/card/common/studio-ui/StudioForm.tsx
function PN({ id: e, contentTab: t, settingsTab: n }) {
	let r = MN[0].key, [i, a] = (0, I.useState)(r), { values: o, setFieldValue: s } = ey(), c = !!bp()?.enable_json_editing, l = c ? MN : MN.filter((e) => e.key !== "json");
	return /* @__PURE__ */ (0, L.jsx)(wy, { children: /* @__PURE__ */ (0, L.jsx)(Qn, {
		id: e,
		activeKey: i,
		onSelect: (e) => a(e || r),
		transition: !1,
		children: /* @__PURE__ */ (0, L.jsxs)("div", {
			className: "studio-ui card-studio",
			children: [
				/* @__PURE__ */ (0, L.jsx)(NN, {
					activeTab: i,
					title: o.displayName,
					onTitleChange: (e) => s("displayName", e),
					tabs: l
				}),
				/* @__PURE__ */ (0, L.jsx)(eu.Body, { children: /* @__PURE__ */ (0, L.jsxs)(er, {
					className: "card-studio-tab-content",
					children: [
						/* @__PURE__ */ (0, L.jsx)(ir, {
							eventKey: "content",
							children: t
						}),
						/* @__PURE__ */ (0, L.jsx)(ir, {
							eventKey: "settings",
							children: n
						}),
						c && /* @__PURE__ */ (0, L.jsx)(ir, {
							eventKey: "json",
							children: /* @__PURE__ */ (0, L.jsx)(jN, { liveData: o })
						})
					]
				}) }),
				/* @__PURE__ */ (0, L.jsx)(kN, {
					showingEditor: !0,
					onContinue: () => {}
				})
			]
		})
	}) });
}
// src/card/card-carousel/studio-ui/StudioUI.tsx
function FN({ initData: e }) {
	let { runtime: t } = (0, I.useContext)(u), n = he("studio_save"), r = (0, I.useMemo)(() => e.cards.length ? e : {
		...e,
		cards: [Py([], { orientation: "HORIZONTAL" })]
	}, [e]);
	return /* @__PURE__ */ (0, L.jsx)(hy, {
		initialValues: r,
		onSubmit: (e) => {
			p({
				saveUrl: n,
				data: e,
				runtime: t,
				errorMessage: "Failed to save the card carousel."
			});
		},
		children: /* @__PURE__ */ (0, L.jsx)(PN, {
			id: "card-carousel-studio-tabs",
			contentTab: /* @__PURE__ */ (0, L.jsx)(ON, { enableCardOrientation: !0 }),
			settingsTab: /* @__PURE__ */ (0, L.jsx)(Fy, {})
		})
	});
}
// src/card/card-carousel/studio-ui/StudioUI.css?inline
var IN = ".icon-selector.dropdown-toggle:after{display:none}.icon-list-popup{background-color:var(--pgn-color-body-bg);width:292px;min-height:242px;max-height:300px;overflow:scroll}button:not(:disabled).icon-symbol{background-color:var(--pgn-color-body-bg);width:auto;color:var(--pgn-color-gray-600);border:0}button:not(:disabled).icon-symbol:hover{background-color:var(--pgn-color-light);color:var(--pgn-color-primary)}button:not(:disabled).icon-symbol:focus{background-color:var(--pgn-color-light);color:var(--pgn-color-primary);border:0}.xblock-root .input-group .pgn__form-control-decorator-group{margin-right:0}.xblock-root .input-group .pgn__form-control-decorator-group .form-control{border-top-right-radius:0;border-bottom-right-radius:0}.pgn__modal-header.studio-header{padding:calc(var(--pgn-spacing-modal-inner-padding-base) / 2) var(--pgn-spacing-modal-header-padding-base-x);z-index:1}.studio-header-title{align-items:center;gap:var(--pgn-spacing-spacer-2,8px);display:flex}.studio-header-tabs-nav{flex-wrap:nowrap;padding-right:64px}.studio-header-tabs-nav .nav-link{appearance:none;font-family:inherit;font-size:inherit;line-height:inherit;cursor:pointer;background-color:#0000}.wrapper.xblock-iframe-content .xblock-v1-studio_view{display:flex}.xblock-root,.xblock-root .react-studio-block,.xblock-root .react-studio-block .container-fluid{height:100%}.react-studio-block{flex-grow:1}.react-studio-block *,.react-studio-block :before,.react-studio-block :after{box-sizing:border-box}.react-studio-block{margin-bottom:0!important}.xblock-actions{border-top:1px solid var(--pgn-color-gray-200);background:var(--pgn-color-white);z-index:1;justify-content:flex-end;gap:.5em;padding:.75em 1em;display:flex;position:sticky;bottom:0;box-shadow:0 -2px 6px #0000000d}.react-colorful{-webkit-user-select:none;user-select:none;cursor:default;flex-direction:column;width:200px;height:200px;display:flex;position:relative}.react-colorful__saturation{background-image:linear-gradient(#0000,#000),linear-gradient(90deg,#fff,#fff0);border-color:#0000 #0000 #000;border-bottom-style:solid;border-bottom-width:12px;border-radius:8px 8px 0 0;flex-grow:1;position:relative}.react-colorful__pointer-fill,.react-colorful__alpha-gradient{content:\"\";pointer-events:none;border-radius:inherit;position:absolute;inset:0}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px #0000000d}.react-colorful__hue,.react-colorful__alpha{height:24px;position:relative}.react-colorful__hue{background:linear-gradient(90deg,red 0%,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red 100%)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{border-radius:inherit;touch-action:none;outline:none;position:absolute;inset:0}.react-colorful__pointer{z-index:1;box-sizing:border-box;background-color:#fff;border:2px solid #fff;border-radius:50%;width:28px;height:28px;position:absolute;transform:translate(-50%,-50%);box-shadow:0 2px 4px #0003}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%)scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url(\"data:image/svg+xml,<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" width=\\\"16\\\" height=\\\"16\\\" fill-opacity=\\\".05\\\"><rect x=\\\"8\\\" width=\\\"8\\\" height=\\\"8\\\"/><rect y=\\\"8\\\" width=\\\"8\\\" height=\\\"8\\\"/></svg>\")}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}.material-icons-outlined{text-transform:none;letter-spacing:normal;word-wrap:normal;white-space:nowrap;-webkit-font-smoothing:antialiased;text-rendering:optimizelegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:\"liga\";direction:ltr;font-family:Material Icons Outlined;font-size:24px;font-style:normal;font-weight:400;line-height:1;display:inline-block}.card-studio{flex-direction:column;justify-content:space-between;min-height:635px;display:flex}.card-studio-tab-content{flex:auto;min-height:0}.card-studio-form{padding:var(--pgn-spacing-spacer-3,16px)}.card-studio-field{margin-bottom:var(--pgn-spacing-spacer-4,24px)}.card-studio-field--last{margin-bottom:0}.card-carousel-studio-help-text{font-size:var(--pgn-typography-font-size-sm,.875rem)}", LN = (e, t, n) => {
	let r = l(e).parentElement?.parentElement;
	r && (r.style.minHeight = "635px", r.style.maxHeight = "calc(100vh - 51px)", r.style.overflowY = "scroll"), T({
		runtime: t,
		element: e,
		config: n.config,
		styles: IN
	})(/* @__PURE__ */ (0, L.jsx)(yp.Provider, {
		value: n.config,
		children: /* @__PURE__ */ (0, L.jsx)(FN, { initData: n.data })
	}));
};
export { LN as renderBlock };
